/*! For license information please see c6gaap.119.1e99eda8.chunk.js.LICENSE.txt */
export const id = 119;
export const ids = [119];
export const modules = {
  6342: function(BB, IB, ZB) {
    var TB;
    ! function() {
      var JB, oB = 1e9,
        GB = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        vB = !0,
        kB = "[DecimalError] ",
        cB = kB + "Invalid argument: ",
        nB = kB + "Exponent out of range: ",
        hB = Math.floor,
        zB = Math.pow,
        FB = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        NB = 1e7,
        gB = 9007199254740991,
        qB = hB(1286742750677284.5),
        yB = {};

      function UB(BB, IB) {
        var ZB, TB, JB, oB, GB, kB, cB, nB, hB = BB.constructor,
          zB = hB.precision;
        if (!BB.s || !IB.s) return IB.s || (IB = new hB(BB)), vB ? pB(IB, zB) : IB;
        if (cB = BB.d, nB = IB.d, GB = BB.e, JB = IB.e, cB = cB.slice(), oB = GB - JB) {
          for (oB < 0 ? (TB = cB, oB = -oB, kB = nB.length) : (TB = nB, JB = GB, kB = cB.length), oB > (kB = (GB = Math.ceil(zB / 7)) > kB ? GB + 1 : kB + 1) && (oB = kB, TB.length = 1), TB.reverse(); oB--;) TB.push(0);
          TB.reverse()
        }
        for ((kB = cB.length) - (oB = nB.length) < 0 && (oB = kB, TB = nB, nB = cB, cB = TB), ZB = 0; oB;) ZB = (cB[--oB] = cB[oB] + nB[oB] + ZB) / NB | 0, cB[oB] %= NB;
        for (ZB && (cB.unshift(ZB), ++JB), kB = cB.length; 0 == cB[--kB];) cB.pop();
        return IB.d = cB, IB.e = JB, vB ? pB(IB, zB) : IB
      }

      function WB(BB, IB, ZB) {
        if (BB !== ~~BB || BB < IB || BB > ZB) throw Error(cB + BB)
      }

      function dB(BB) {
        var IB, ZB, TB, JB = BB.length - 1,
          oB = "",
          GB = BB[0];
        if (JB > 0) {
          for (oB += GB, IB = 1; IB < JB; IB++)(ZB = 7 - (TB = BB[IB] + "").length) && (oB += OB(ZB)), oB += TB;
          (ZB = 7 - (TB = (GB = BB[IB]) + "").length) && (oB += OB(ZB))
        } else if (0 === GB) return "0";
        for (; GB % 10 === 0;) GB /= 10;
        return oB + GB
      }
      yB.absoluteValue = yB.abs = function() {
        var BB = new this.constructor(this);
        return BB.s && (BB.s = 1), BB
      }, yB.comparedTo = yB.cmp = function(BB) {
        var IB, ZB, TB, JB, oB = this;
        if (BB = new oB.constructor(BB), oB.s !== BB.s) return oB.s || -BB.s;
        if (oB.e !== BB.e) return oB.e > BB.e ^ oB.s < 0 ? 1 : -1;
        for (IB = 0, ZB = (TB = oB.d.length) < (JB = BB.d.length) ? TB : JB; IB < ZB; ++IB)
          if (oB.d[IB] !== BB.d[IB]) return oB.d[IB] > BB.d[IB] ^ oB.s < 0 ? 1 : -1;
        return TB === JB ? 0 : TB > JB ^ oB.s < 0 ? 1 : -1
      }, yB.decimalPlaces = yB.dp = function() {
        var BB = this,
          IB = BB.d.length - 1,
          ZB = 7 * (IB - BB.e);
        if (IB = BB.d[IB])
          for (; IB % 10 == 0; IB /= 10) ZB--;
        return ZB < 0 ? 0 : ZB
      }, yB.dividedBy = yB.div = function(BB) {
        return CB(this, new this.constructor(BB))
      }, yB.dividedToIntegerBy = yB.idiv = function(BB) {
        var IB = this.constructor;
        return pB(CB(this, new IB(BB), 0, 1), IB.precision)
      }, yB.equals = yB.eq = function(BB) {
        return !this.cmp(BB)
      }, yB.exponent = function() {
        return sB(this)
      }, yB.greaterThan = yB.gt = function(BB) {
        return this.cmp(BB) > 0
      }, yB.greaterThanOrEqualTo = yB.gte = function(BB) {
        return this.cmp(BB) >= 0
      }, yB.isInteger = yB.isint = function() {
        return this.e > this.d.length - 2
      }, yB.isNegative = yB.isneg = function() {
        return this.s < 0
      }, yB.isPositive = yB.ispos = function() {
        return this.s > 0
      }, yB.isZero = function() {
        return 0 === this.s
      }, yB.lessThan = yB.lt = function(BB) {
        return this.cmp(BB) < 0
      }, yB.lessThanOrEqualTo = yB.lte = function(BB) {
        return this.cmp(BB) < 1
      }, yB.logarithm = yB.log = function(BB) {
        var IB, ZB = this,
          TB = ZB.constructor,
          oB = TB.precision,
          GB = oB + 5;
        if (void 0 === BB) BB = new TB(10);
        else if ((BB = new TB(BB)).s < 1 || BB.eq(JB)) throw Error(kB + "NaN");
        if (ZB.s < 1) throw Error(kB + (ZB.s ? "NaN" : "-Infinity"));
        return ZB.eq(JB) ? new TB(0) : (vB = !1, IB = CB(YB(ZB, GB), YB(BB, GB), GB), vB = !0, pB(IB, oB))
      }, yB.minus = yB.sub = function(BB) {
        var IB = this;
        return BB = new IB.constructor(BB), IB.s == BB.s ? aB(IB, BB) : UB(IB, (BB.s = -BB.s, BB))
      }, yB.modulo = yB.mod = function(BB) {
        var IB, ZB = this,
          TB = ZB.constructor,
          JB = TB.precision;
        if (!(BB = new TB(BB)).s) throw Error(kB + "NaN");
        return ZB.s ? (vB = !1, IB = CB(ZB, BB, 0, 1).times(BB), vB = !0, ZB.minus(IB)) : pB(new TB(ZB), JB)
      }, yB.naturalExponential = yB.exp = function() {
        return QB(this)
      }, yB.naturalLogarithm = yB.ln = function() {
        return YB(this)
      }, yB.negated = yB.neg = function() {
        var BB = new this.constructor(this);
        return BB.s = -BB.s || 0, BB
      }, yB.plus = yB.add = function(BB) {
        var IB = this;
        return BB = new IB.constructor(BB), IB.s == BB.s ? UB(IB, BB) : aB(IB, (BB.s = -BB.s, BB))
      }, yB.precision = yB.sd = function(BB) {
        var IB, ZB, TB, JB = this;
        if (void 0 !== BB && BB !== !!BB && 1 !== BB && 0 !== BB) throw Error(cB + BB);
        if (IB = sB(JB) + 1, ZB = 7 * (TB = JB.d.length - 1) + 1, TB = JB.d[TB]) {
          for (; TB % 10 == 0; TB /= 10) ZB--;
          for (TB = JB.d[0]; TB >= 10; TB /= 10) ZB++
        }
        return BB && IB > ZB ? IB : ZB
      }, yB.squareRoot = yB.sqrt = function() {
        var BB, IB, ZB, TB, JB, oB, GB, cB = this,
          nB = cB.constructor;
        if (cB.s < 1) {
          if (!cB.s) return new nB(0);
          throw Error(kB + "NaN")
        }
        for (BB = sB(cB), vB = !1, 0 == (JB = Math.sqrt(+cB)) || JB == 1 / 0 ? (((IB = dB(cB.d)).length + BB) % 2 == 0 && (IB += "0"), JB = Math.sqrt(IB), BB = hB((BB + 1) / 2) - (BB < 0 || BB % 2), TB = new nB(IB = JB == 1 / 0 ? "1e" + BB : (IB = JB.toExponential()).slice(0, IB.indexOf("e") + 1) + BB)) : TB = new nB(JB.toString()), JB = GB = (ZB = nB.precision) + 3;;)
          if (TB = (oB = TB).plus(CB(cB, oB, GB + 2)).times(.5), dB(oB.d).slice(0, GB) === (IB = dB(TB.d)).slice(0, GB)) {
            if (IB = IB.slice(GB - 3, GB + 1), JB == GB && "4999" == IB) {
              if (pB(oB, ZB + 1, 0), oB.times(oB).eq(cB)) {
                TB = oB;
                break
              }
            } else if ("9999" != IB) break;
            GB += 4
          } return vB = !0, pB(TB, ZB)
      }, yB.times = yB.mul = function(BB) {
        var IB, ZB, TB, JB, oB, GB, kB, cB, nB, hB = this,
          zB = hB.constructor,
          FB = hB.d,
          gB = (BB = new zB(BB)).d;
        if (!hB.s || !BB.s) return new zB(0);
        for (BB.s *= hB.s, ZB = hB.e + BB.e, (cB = FB.length) < (nB = gB.length) && (oB = FB, FB = gB, gB = oB, GB = cB, cB = nB, nB = GB), oB = [], TB = GB = cB + nB; TB--;) oB.push(0);
        for (TB = nB; --TB >= 0;) {
          for (IB = 0, JB = cB + TB; JB > TB;) kB = oB[JB] + gB[TB] * FB[JB - TB - 1] + IB, oB[JB--] = kB % NB | 0, IB = kB / NB | 0;
          oB[JB] = (oB[JB] + IB) % NB | 0
        }
        for (; !oB[--GB];) oB.pop();
        return IB ? ++ZB : oB.shift(), BB.d = oB, BB.e = ZB, vB ? pB(BB, zB.precision) : BB
      }, yB.toDecimalPlaces = yB.todp = function(BB, IB) {
        var ZB = this,
          TB = ZB.constructor;
        return ZB = new TB(ZB), void 0 === BB ? ZB : (WB(BB, 0, oB), void 0 === IB ? IB = TB.rounding : WB(IB, 0, 8), pB(ZB, BB + sB(ZB) + 1, IB))
      }, yB.toExponential = function(BB, IB) {
        var ZB, TB = this,
          JB = TB.constructor;
        return void 0 === BB ? ZB = HB(TB, !0) : (WB(BB, 0, oB), void 0 === IB ? IB = JB.rounding : WB(IB, 0, 8), ZB = HB(TB = pB(new JB(TB), BB + 1, IB), !0, BB + 1)), ZB
      }, yB.toFixed = function(BB, IB) {
        var ZB, TB, JB = this,
          GB = JB.constructor;
        return void 0 === BB ? HB(JB) : (WB(BB, 0, oB), void 0 === IB ? IB = GB.rounding : WB(IB, 0, 8), ZB = HB((TB = pB(new GB(JB), BB + sB(JB) + 1, IB)).abs(), !1, BB + sB(TB) + 1), JB.isneg() && !JB.isZero() ? "-" + ZB : ZB)
      }, yB.toInteger = yB.toint = function() {
        var BB = this,
          IB = BB.constructor;
        return pB(new IB(BB), sB(BB) + 1, IB.rounding)
      }, yB.toNumber = function() {
        return +this
      }, yB.toPower = yB.pow = function(BB) {
        var IB, ZB, TB, oB, GB, cB, nB = this,
          zB = nB.constructor,
          FB = +(BB = new zB(BB));
        if (!BB.s) return new zB(JB);
        if (!(nB = new zB(nB)).s) {
          if (BB.s < 1) throw Error(kB + "Infinity");
          return nB
        }
        if (nB.eq(JB)) return nB;
        if (TB = zB.precision, BB.eq(JB)) return pB(nB, TB);
        if (cB = (IB = BB.e) >= (ZB = BB.d.length - 1), GB = nB.s, cB) {
          if ((ZB = FB < 0 ? -FB : FB) <= gB) {
            for (oB = new zB(JB), IB = Math.ceil(TB / 7 + 4), vB = !1; ZB % 2 && MB((oB = oB.times(nB)).d, IB), 0 !== (ZB = hB(ZB / 2));) MB((nB = nB.times(nB)).d, IB);
            return vB = !0, BB.s < 0 ? new zB(JB).div(oB) : pB(oB, TB)
          }
        } else if (GB < 0) throw Error(kB + "NaN");
        return GB = GB < 0 && 1 & BB.d[Math.max(IB, ZB)] ? -1 : 1, nB.s = 1, vB = !1, oB = BB.times(YB(nB, TB + 12)), vB = !0, (oB = QB(oB)).s = GB, oB
      }, yB.toPrecision = function(BB, IB) {
        var ZB, TB, JB = this,
          GB = JB.constructor;
        return void 0 === BB ? TB = HB(JB, (ZB = sB(JB)) <= GB.toExpNeg || ZB >= GB.toExpPos) : (WB(BB, 1, oB), void 0 === IB ? IB = GB.rounding : WB(IB, 0, 8), TB = HB(JB = pB(new GB(JB), BB, IB), BB <= (ZB = sB(JB)) || ZB <= GB.toExpNeg, BB)), TB
      }, yB.toSignificantDigits = yB.tosd = function(BB, IB) {
        var ZB = this.constructor;
        return void 0 === BB ? (BB = ZB.precision, IB = ZB.rounding) : (WB(BB, 1, oB), void 0 === IB ? IB = ZB.rounding : WB(IB, 0, 8)), pB(new ZB(this), BB, IB)
      }, yB.toString = yB.valueOf = yB.val = yB.toJSON = function() {
        var BB = this,
          IB = sB(BB),
          ZB = BB.constructor;
        return HB(BB, IB <= ZB.toExpNeg || IB >= ZB.toExpPos)
      };
      var CB = function() {
        function BB(BB, IB) {
          var ZB, TB = 0,
            JB = BB.length;
          for (BB = BB.slice(); JB--;) ZB = BB[JB] * IB + TB, BB[JB] = ZB % NB | 0, TB = ZB / NB | 0;
          return TB && BB.unshift(TB), BB
        }

        function IB(BB, IB, ZB, TB) {
          var JB, oB;
          if (ZB != TB) oB = ZB > TB ? 1 : -1;
          else
            for (JB = oB = 0; JB < ZB; JB++)
              if (BB[JB] != IB[JB]) {
                oB = BB[JB] > IB[JB] ? 1 : -1;
                break
              } return oB
        }

        function ZB(BB, IB, ZB) {
          for (var TB = 0; ZB--;) BB[ZB] -= TB, TB = BB[ZB] < IB[ZB] ? 1 : 0, BB[ZB] = TB * NB + BB[ZB] - IB[ZB];
          for (; !BB[0] && BB.length > 1;) BB.shift()
        }
        return function(TB, JB, oB, GB) {
          var vB, cB, nB, hB, zB, FB, gB, qB, yB, UB, WB, dB, CB, QB, wB, OB, YB, iB, aB = TB.constructor,
            HB = TB.s == JB.s ? 1 : -1,
            MB = TB.d,
            jB = JB.d;
          if (!TB.s) return new aB(TB);
          if (!JB.s) throw Error(kB + "Division by zero");
          for (cB = TB.e - JB.e, YB = jB.length, wB = MB.length, qB = (gB = new aB(HB)).d = [], nB = 0; jB[nB] == (MB[nB] || 0);) ++nB;
          if (jB[nB] > (MB[nB] || 0) && --cB, (dB = null == oB ? oB = aB.precision : GB ? oB + (sB(TB) - sB(JB)) + 1 : oB) < 0) return new aB(0);
          if (dB = dB / 7 + 2 | 0, nB = 0, 1 == YB)
            for (hB = 0, jB = jB[0], dB++;
              (nB < wB || hB) && dB--; nB++) CB = hB * NB + (MB[nB] || 0), qB[nB] = CB / jB | 0, hB = CB % jB | 0;
          else {
            for ((hB = NB / (jB[0] + 1) | 0) > 1 && (jB = BB(jB, hB), MB = BB(MB, hB), YB = jB.length, wB = MB.length), QB = YB, UB = (yB = MB.slice(0, YB)).length; UB < YB;) yB[UB++] = 0;
            (iB = jB.slice()).unshift(0), OB = jB[0], jB[1] >= NB / 2 && ++OB;
            do {
              hB = 0, (vB = IB(jB, yB, YB, UB)) < 0 ? (WB = yB[0], YB != UB && (WB = WB * NB + (yB[1] || 0)), (hB = WB / OB | 0) > 1 ? (hB >= NB && (hB = NB - 1), 1 == (vB = IB(zB = BB(jB, hB), yB, FB = zB.length, UB = yB.length)) && (hB--, ZB(zB, YB < FB ? iB : jB, FB))) : (0 == hB && (vB = hB = 1), zB = jB.slice()), (FB = zB.length) < UB && zB.unshift(0), ZB(yB, zB, UB), -1 == vB && (vB = IB(jB, yB, YB, UB = yB.length)) < 1 && (hB++, ZB(yB, YB < UB ? iB : jB, UB)), UB = yB.length) : 0 === vB && (hB++, yB = [0]), qB[nB++] = hB, vB && yB[0] ? yB[UB++] = MB[QB] || 0 : (yB = [MB[QB]], UB = 1)
            } while ((QB++ < wB || void 0 !== yB[0]) && dB--)
          }
          return qB[0] || qB.shift(), gB.e = cB, pB(gB, GB ? oB + sB(gB) + 1 : oB)
        }
      }();

      function QB(BB, IB) {
        var ZB, TB, oB, GB, kB, cB = 0,
          hB = 0,
          FB = BB.constructor,
          NB = FB.precision;
        if (sB(BB) > 16) throw Error(nB + sB(BB));
        if (!BB.s) return new FB(JB);
        for (null == IB ? (vB = !1, kB = NB) : kB = IB, GB = new FB(.03125); BB.abs().gte(.1);) BB = BB.times(GB), hB += 5;
        for (kB += Math.log(zB(2, hB)) / Math.LN10 * 2 + 5 | 0, ZB = TB = oB = new FB(JB), FB.precision = kB;;) {
          if (TB = pB(TB.times(BB), kB), ZB = ZB.times(++cB), dB((GB = oB.plus(CB(TB, ZB, kB))).d).slice(0, kB) === dB(oB.d).slice(0, kB)) {
            for (; hB--;) oB = pB(oB.times(oB), kB);
            return FB.precision = NB, null == IB ? (vB = !0, pB(oB, NB)) : oB
          }
          oB = GB
        }
      }

      function sB(BB) {
        for (var IB = 7 * BB.e, ZB = BB.d[0]; ZB >= 10; ZB /= 10) IB++;
        return IB
      }

      function wB(BB, IB, ZB) {
        if (IB > BB.LN10.sd()) throw vB = !0, ZB && (BB.precision = ZB), Error(kB + "LN10 precision limit exceeded");
        return pB(new BB(BB.LN10), IB)
      }

      function OB(BB) {
        for (var IB = ""; BB--;) IB += "0";
        return IB
      }

      function YB(BB, IB) {
        var ZB, TB, oB, GB, cB, nB, hB, zB, FB, NB = 1,
          gB = BB,
          qB = gB.d,
          yB = gB.constructor,
          UB = yB.precision;
        if (gB.s < 1) throw Error(kB + (gB.s ? "NaN" : "-Infinity"));
        if (gB.eq(JB)) return new yB(0);
        if (null == IB ? (vB = !1, zB = UB) : zB = IB, gB.eq(10)) return null == IB && (vB = !0), wB(yB, zB);
        if (zB += 10, yB.precision = zB, TB = (ZB = dB(qB)).charAt(0), GB = sB(gB), !(Math.abs(GB) < 15e14)) return hB = wB(yB, zB + 2, UB).times(GB + ""), gB = YB(new yB(TB + "." + ZB.slice(1)), zB - 10).plus(hB), yB.precision = UB, null == IB ? (vB = !0, pB(gB, UB)) : gB;
        for (; TB < 7 && 1 != TB || 1 == TB && ZB.charAt(1) > 3;) TB = (ZB = dB((gB = gB.times(BB)).d)).charAt(0), NB++;
        for (GB = sB(gB), TB > 1 ? (gB = new yB("0." + ZB), GB++) : gB = new yB(TB + "." + ZB.slice(1)), nB = cB = gB = CB(gB.minus(JB), gB.plus(JB), zB), FB = pB(gB.times(gB), zB), oB = 3;;) {
          if (cB = pB(cB.times(FB), zB), dB((hB = nB.plus(CB(cB, new yB(oB), zB))).d).slice(0, zB) === dB(nB.d).slice(0, zB)) return nB = nB.times(2), 0 !== GB && (nB = nB.plus(wB(yB, zB + 2, UB).times(GB + ""))), nB = CB(nB, new yB(NB), zB), yB.precision = UB, null == IB ? (vB = !0, pB(nB, UB)) : nB;
          nB = hB, oB += 2
        }
      }

      function iB(BB, IB) {
        var ZB, TB, JB;
        for ((ZB = IB.indexOf(".")) > -1 && (IB = IB.replace(".", "")), (TB = IB.search(/e/i)) > 0 ? (ZB < 0 && (ZB = TB), ZB += +IB.slice(TB + 1), IB = IB.substring(0, TB)) : ZB < 0 && (ZB = IB.length), TB = 0; 48 === IB.charCodeAt(TB);) ++TB;
        for (JB = IB.length; 48 === IB.charCodeAt(JB - 1);) --JB;
        if (IB = IB.slice(TB, JB)) {
          if (JB -= TB, ZB = ZB - TB - 1, BB.e = hB(ZB / 7), BB.d = [], TB = (ZB + 1) % 7, ZB < 0 && (TB += 7), TB < JB) {
            for (TB && BB.d.push(+IB.slice(0, TB)), JB -= 7; TB < JB;) BB.d.push(+IB.slice(TB, TB += 7));
            TB = 7 - (IB = IB.slice(TB)).length
          } else TB -= JB;
          for (; TB--;) IB += "0";
          if (BB.d.push(+IB), vB && (BB.e > qB || BB.e < -qB)) throw Error(nB + ZB)
        } else BB.s = 0, BB.e = 0, BB.d = [0];
        return BB
      }

      function pB(BB, IB, ZB) {
        var TB, JB, oB, GB, kB, cB, FB, gB, yB = BB.d;
        for (GB = 1, oB = yB[0]; oB >= 10; oB /= 10) GB++;
        if ((TB = IB - GB) < 0) TB += 7, JB = IB, FB = yB[gB = 0];
        else {
          if ((gB = Math.ceil((TB + 1) / 7)) >= (oB = yB.length)) return BB;
          for (FB = oB = yB[gB], GB = 1; oB >= 10; oB /= 10) GB++;
          JB = (TB %= 7) - 7 + GB
        }
        if (void 0 !== ZB && (kB = FB / (oB = zB(10, GB - JB - 1)) % 10 | 0, cB = IB < 0 || void 0 !== yB[gB + 1] || FB % oB, cB = ZB < 4 ? (kB || cB) && (0 == ZB || ZB == (BB.s < 0 ? 3 : 2)) : kB > 5 || 5 == kB && (4 == ZB || cB || 6 == ZB && (TB > 0 ? JB > 0 ? FB / zB(10, GB - JB) : 0 : yB[gB - 1]) % 10 & 1 || ZB == (BB.s < 0 ? 8 : 7))), IB < 1 || !yB[0]) return cB ? (oB = sB(BB), yB.length = 1, IB = IB - oB - 1, yB[0] = zB(10, (7 - IB % 7) % 7), BB.e = hB(-IB / 7) || 0) : (yB.length = 1, yB[0] = BB.e = BB.s = 0), BB;
        if (0 == TB ? (yB.length = gB, oB = 1, gB--) : (yB.length = gB + 1, oB = zB(10, 7 - TB), yB[gB] = JB > 0 ? (FB / zB(10, GB - JB) % zB(10, JB) | 0) * oB : 0), cB)
          for (;;) {
            if (0 == gB) {
              (yB[0] += oB) == NB && (yB[0] = 1, ++BB.e);
              break
            }
            if (yB[gB] += oB, yB[gB] != NB) break;
            yB[gB--] = 0, oB = 1
          }
        for (TB = yB.length; 0 === yB[--TB];) yB.pop();
        if (vB && (BB.e > qB || BB.e < -qB)) throw Error(nB + sB(BB));
        return BB
      }

      function aB(BB, IB) {
        var ZB, TB, JB, oB, GB, kB, cB, nB, hB, zB, FB = BB.constructor,
          gB = FB.precision;
        if (!BB.s || !IB.s) return IB.s ? IB.s = -IB.s : IB = new FB(BB), vB ? pB(IB, gB) : IB;
        if (cB = BB.d, zB = IB.d, TB = IB.e, nB = BB.e, cB = cB.slice(), GB = nB - TB) {
          for ((hB = GB < 0) ? (ZB = cB, GB = -GB, kB = zB.length) : (ZB = zB, TB = nB, kB = cB.length), GB > (JB = Math.max(Math.ceil(gB / 7), kB) + 2) && (GB = JB, ZB.length = 1), ZB.reverse(), JB = GB; JB--;) ZB.push(0);
          ZB.reverse()
        } else {
          for ((hB = (JB = cB.length) < (kB = zB.length)) && (kB = JB), JB = 0; JB < kB; JB++)
            if (cB[JB] != zB[JB]) {
              hB = cB[JB] < zB[JB];
              break
            } GB = 0
        }
        for (hB && (ZB = cB, cB = zB, zB = ZB, IB.s = -IB.s), kB = cB.length, JB = zB.length - kB; JB > 0; --JB) cB[kB++] = 0;
        for (JB = zB.length; JB > GB;) {
          if (cB[--JB] < zB[JB]) {
            for (oB = JB; oB && 0 === cB[--oB];) cB[oB] = NB - 1;
            --cB[oB], cB[JB] += NB
          }
          cB[JB] -= zB[JB]
        }
        for (; 0 === cB[--kB];) cB.pop();
        for (; 0 === cB[0]; cB.shift()) --TB;
        return cB[0] ? (IB.d = cB, IB.e = TB, vB ? pB(IB, gB) : IB) : new FB(0)
      }

      function HB(BB, IB, ZB) {
        var TB, JB = sB(BB),
          oB = dB(BB.d),
          GB = oB.length;
        return IB ? (ZB && (TB = ZB - GB) > 0 ? oB = oB.charAt(0) + "." + oB.slice(1) + OB(TB) : GB > 1 && (oB = oB.charAt(0) + "." + oB.slice(1)), oB = oB + (JB < 0 ? "e" : "e+") + JB) : JB < 0 ? (oB = "0." + OB(-JB - 1) + oB, ZB && (TB = ZB - GB) > 0 && (oB += OB(TB))) : JB >= GB ? (oB += OB(JB + 1 - GB), ZB && (TB = ZB - JB - 1) > 0 && (oB = oB + "." + OB(TB))) : ((TB = JB + 1) < GB && (oB = oB.slice(0, TB) + "." + oB.slice(TB)), ZB && (TB = ZB - GB) > 0 && (JB + 1 === GB && (oB += "."), oB += OB(TB))), BB.s < 0 ? "-" + oB : oB
      }

      function MB(BB, IB) {
        if (BB.length > IB) return BB.length = IB, !0
      }

      function jB(BB) {
        if (!BB || "object" !== typeof BB) throw Error(kB + "Object expected");
        var IB, ZB, TB, JB = ["precision", 1, oB, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (IB = 0; IB < JB.length; IB += 3)
          if (void 0 !== (TB = BB[ZB = JB[IB]])) {
            if (!(hB(TB) === TB && TB >= JB[IB + 1] && TB <= JB[IB + 2])) throw Error(cB + ZB + ": " + TB);
            this[ZB] = TB
          } if (void 0 !== (TB = BB[ZB = "LN10"])) {
          if (TB != Math.LN10) throw Error(cB + ZB + ": " + TB);
          this[ZB] = new this(TB)
        }
        return this
      }
      GB = function BB(IB) {
        var ZB, TB, JB;

        function oB(BB) {
          var IB = this;
          if (!(IB instanceof oB)) return new oB(BB);
          if (IB.constructor = oB, BB instanceof oB) return IB.s = BB.s, IB.e = BB.e, void(IB.d = (BB = BB.d) ? BB.slice() : BB);
          if ("number" === typeof BB) {
            if (0 * BB !== 0) throw Error(cB + BB);
            if (BB > 0) IB.s = 1;
            else {
              if (!(BB < 0)) return IB.s = 0, IB.e = 0, void(IB.d = [0]);
              BB = -BB, IB.s = -1
            }
            return BB === ~~BB && BB < 1e7 ? (IB.e = 0, void(IB.d = [BB])) : iB(IB, BB.toString())
          }
          if ("string" !== typeof BB) throw Error(cB + BB);
          if (45 === BB.charCodeAt(0) ? (BB = BB.slice(1), IB.s = -1) : IB.s = 1, !FB.test(BB)) throw Error(cB + BB);
          iB(IB, BB)
        }
        if (oB.prototype = yB, oB.ROUND_UP = 0, oB.ROUND_DOWN = 1, oB.ROUND_CEIL = 2, oB.ROUND_FLOOR = 3, oB.ROUND_HALF_UP = 4, oB.ROUND_HALF_DOWN = 5, oB.ROUND_HALF_EVEN = 6, oB.ROUND_HALF_CEIL = 7, oB.ROUND_HALF_FLOOR = 8, oB.clone = BB, oB.config = oB.set = jB, void 0 === IB && (IB = {}), IB)
          for (JB = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], ZB = 0; ZB < JB.length;) IB.hasOwnProperty(TB = JB[ZB++]) || (IB[TB] = this[TB]);
        return oB.config(IB), oB
      }(GB), GB.default = GB.Decimal = GB, JB = new GB(1), void 0 === (TB = function() {
        return GB
      }.call(IB, ZB, IB, BB)) || (BB.exports = TB)
    }()
  },
  5950: (BB, IB, ZB) => {
    var TB = ZB(5419)(ZB(5278), "DataView");
    BB.exports = TB
  },
  5401: (BB, IB, ZB) => {
    var TB = ZB(5410),
      JB = ZB(5451),
      oB = ZB(5454),
      GB = ZB(5457),
      vB = ZB(5459);

    function kB(BB) {
      var IB = -1,
        ZB = null == BB ? 0 : BB.length;
      for (this.clear(); ++IB < ZB;) {
        var TB = BB[IB];
        this.set(TB[0], TB[1])
      }
    }
    kB.prototype.clear = TB, kB.prototype.delete = JB, kB.prototype.get = oB, kB.prototype.has = GB, kB.prototype.set = vB, BB.exports = kB
  },
  5462: (BB, IB, ZB) => {
    var TB = ZB(5464),
      JB = ZB(5473),
      oB = ZB(5489),
      GB = ZB(5495),
      vB = ZB(5504);

    function kB(BB) {
      var IB = -1,
        ZB = null == BB ? 0 : BB.length;
      for (this.clear(); ++IB < ZB;) {
        var TB = BB[IB];
        this.set(TB[0], TB[1])
      }
    }
    kB.prototype.clear = TB, kB.prototype.delete = JB, kB.prototype.get = oB, kB.prototype.has = GB, kB.prototype.set = vB, BB.exports = kB
  },
  5509: (BB, IB, ZB) => {
    var TB = ZB(5419)(ZB(5278), "Map");
    BB.exports = TB
  },
  5393: (BB, IB, ZB) => {
    var TB = ZB(5395),
      JB = ZB(5517),
      oB = ZB(5525),
      GB = ZB(5530),
      vB = ZB(5536);

    function kB(BB) {
      var IB = -1,
        ZB = null == BB ? 0 : BB.length;
      for (this.clear(); ++IB < ZB;) {
        var TB = BB[IB];
        this.set(TB[0], TB[1])
      }
    }
    kB.prototype.clear = TB, kB.prototype.delete = JB, kB.prototype.get = oB, kB.prototype.has = GB, kB.prototype.set = vB, BB.exports = kB
  },
  5954: (BB, IB, ZB) => {
    var TB = ZB(5419)(ZB(5278), "Promise");
    BB.exports = TB
  },
  5963: (BB, IB, ZB) => {
    var TB = ZB(5419)(ZB(5278), "Set");
    BB.exports = TB
  },
  5767: (BB, IB, ZB) => {
    var TB = ZB(5393),
      JB = ZB(5773),
      oB = ZB(5781);

    function GB(BB) {
      var IB = -1,
        ZB = null == BB ? 0 : BB.length;
      for (this.__data__ = new TB; ++IB < ZB;) this.add(BB[IB])
    }
    GB.prototype.add = GB.prototype.push = JB, GB.prototype.has = oB, BB.exports = GB
  },
  5711: (BB, IB, ZB) => {
    var TB = ZB(5462),
      JB = ZB(5714),
      oB = ZB(5723),
      GB = ZB(5725),
      vB = ZB(5728),
      kB = ZB(5737);

    function cB(BB) {
      var IB = this.__data__ = new TB(BB);
      this.size = IB.size
    }
    cB.prototype.clear = JB, cB.prototype.delete = oB, cB.prototype.get = GB, cB.prototype.has = vB, cB.prototype.set = kB, BB.exports = cB
  },
  5317: (BB, IB, ZB) => {
    var TB = ZB(5278).Symbol;
    BB.exports = TB
  },
  5812: (BB, IB, ZB) => {
    var TB = ZB(5278).Uint8Array;
    BB.exports = TB
  },
  5969: (BB, IB, ZB) => {
    var TB = ZB(5419)(ZB(5278), "WeakMap");
    BB.exports = TB
  },
  6090: BB => {
    BB.exports = function(BB, IB, ZB) {
      switch (ZB.length) {
        case 0:
          return BB.call(IB);
        case 1:
          return BB.call(IB, ZB[0]);
        case 2:
          return BB.call(IB, ZB[0], ZB[1]);
        case 3:
          return BB.call(IB, ZB[0], ZB[1], ZB[2])
      }
      return BB.apply(IB, ZB)
    }
  },
  6397: BB => {
    BB.exports = function(BB, IB) {
      for (var ZB = -1, TB = null == BB ? 0 : BB.length; ++ZB < TB;)
        if (!IB(BB[ZB], ZB, BB)) return !1;
      return !0
    }
  },
  5855: BB => {
    BB.exports = function(BB, IB) {
      for (var ZB = -1, TB = null == BB ? 0 : BB.length, JB = 0, oB = []; ++ZB < TB;) {
        var GB = BB[ZB];
        IB(GB, ZB, BB) && (oB[JB++] = GB)
      }
      return oB
    }
  },
  6153: (BB, IB, ZB) => {
    var TB = ZB(6160);
    BB.exports = function(BB, IB) {
      return !!(null == BB ? 0 : BB.length) && TB(BB, IB, 0) > -1
    }
  },
  6178: BB => {
    BB.exports = function(BB, IB, ZB) {
      for (var TB = -1, JB = null == BB ? 0 : BB.length; ++TB < JB;)
        if (ZB(IB, BB[TB])) return !0;
      return !1
    }
  },
  5870: (BB, IB, ZB) => {
    var TB = ZB(5877),
      JB = ZB(5683),
      oB = ZB(5345),
      GB = ZB(5881),
      vB = ZB(5638),
      kB = ZB(5894),
      cB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB, IB) {
      var ZB = oB(BB),
        nB = !ZB && JB(BB),
        hB = !ZB && !nB && GB(BB),
        zB = !ZB && !nB && !hB && kB(BB),
        FB = ZB || nB || hB || zB,
        NB = FB ? TB(BB.length, String) : [],
        gB = NB.length;
      for (var qB in BB) !IB && !cB.call(BB, qB) || FB && ("length" == qB || hB && ("offset" == qB || "parent" == qB) || zB && ("buffer" == qB || "byteLength" == qB || "byteOffset" == qB) || vB(qB, gB)) || NB.push(qB);
      return NB
    }
  },
  5552: BB => {
    BB.exports = function(BB, IB) {
      for (var ZB = -1, TB = null == BB ? 0 : BB.length, JB = Array(TB); ++ZB < TB;) JB[ZB] = IB(BB[ZB], ZB, BB);
      return JB
    }
  },
  5667: BB => {
    BB.exports = function(BB, IB) {
      for (var ZB = -1, TB = IB.length, JB = BB.length; ++ZB < TB;) BB[JB + ZB] = IB[ZB];
      return BB
    }
  },
  5787: BB => {
    BB.exports = function(BB, IB) {
      for (var ZB = -1, TB = null == BB ? 0 : BB.length; ++ZB < TB;)
        if (IB(BB[ZB], ZB, BB)) return !0;
      return !1
    }
  },
  6232: BB => {
    BB.exports = function(BB) {
      return BB.split("")
    }
  },
  5476: (BB, IB, ZB) => {
    var TB = ZB(5484);
    BB.exports = function(BB, IB) {
      for (var ZB = BB.length; ZB--;)
        if (TB(BB[ZB][0], IB)) return ZB;
      return -1
    }
  },
  6387: (BB, IB, ZB) => {
    var TB = ZB(6105);
    BB.exports = function(BB, IB, ZB) {
      "__proto__" == IB && TB ? TB(BB, IB, {
        configurable: !0,
        enumerable: !0,
        value: ZB,
        writable: !0
      }) : BB[IB] = ZB
    }
  },
  6036: (BB, IB, ZB) => {
    var TB = ZB(6041),
      JB = ZB(6052)(TB);
    BB.exports = JB
  },
  6402: (BB, IB, ZB) => {
    var TB = ZB(6036);
    BB.exports = function(BB, IB) {
      var ZB = !0;
      return TB(BB, (function(BB, TB, JB) {
        return ZB = !!IB(BB, TB, JB)
      })), ZB
    }
  },
  6309: (BB, IB, ZB) => {
    var TB = ZB(5300);
    BB.exports = function(BB, IB, ZB) {
      for (var JB = -1, oB = BB.length; ++JB < oB;) {
        var GB = BB[JB],
          vB = IB(GB);
        if (null != vB && (void 0 === kB ? vB === vB && !TB(vB) : ZB(vB, kB))) var kB = vB,
          cB = GB
      }
      return cB
    }
  },
  6162: BB => {
    BB.exports = function(BB, IB, ZB, TB) {
      for (var JB = BB.length, oB = ZB + (TB ? 1 : -1); TB ? oB-- : ++oB < JB;)
        if (IB(BB[oB], oB, BB)) return oB;
      return -1
    }
  },
  5659: (BB, IB, ZB) => {
    var TB = ZB(5667),
      JB = ZB(5675);
    BB.exports = function BB(IB, ZB, oB, GB, vB) {
      var kB = -1,
        cB = IB.length;
      for (oB || (oB = JB), vB || (vB = []); ++kB < cB;) {
        var nB = IB[kB];
        ZB > 0 && oB(nB) ? ZB > 1 ? BB(nB, ZB - 1, oB, GB, vB) : TB(vB, nB) : GB || (vB[vB.length] = nB)
      }
      return vB
    }
  },
  6048: (BB, IB, ZB) => {
    var TB = ZB(6050)();
    BB.exports = TB
  },
  6041: (BB, IB, ZB) => {
    var TB = ZB(6048),
      JB = ZB(5864);
    BB.exports = function(BB, IB) {
      return BB && TB(BB, IB, JB)
    }
  },
  5363: (BB, IB, ZB) => {
    var TB = ZB(5368),
      JB = ZB(5561);
    BB.exports = function(BB, IB) {
      for (var ZB = 0, oB = (IB = TB(IB, BB)).length; null != BB && ZB < oB;) BB = BB[JB(IB[ZB++])];
      return ZB && ZB == oB ? BB : void 0
    }
  },
  5846: (BB, IB, ZB) => {
    var TB = ZB(5667),
      JB = ZB(5345);
    BB.exports = function(BB, IB, ZB) {
      var oB = IB(BB);
      return JB(BB) ? oB : TB(oB, ZB(BB))
    }
  },
  5309: (BB, IB, ZB) => {
    var TB = ZB(5317),
      JB = ZB(5320),
      oB = ZB(5326),
      GB = TB ? TB.toStringTag : void 0;
    BB.exports = function(BB) {
      return null == BB ? void 0 === BB ? "[object Undefined]" : "[object Null]" : GB && GB in Object(BB) ? JB(BB) : oB(BB)
    }
  },
  6311: BB => {
    BB.exports = function(BB, IB) {
      return BB > IB
    }
  },
  6010: BB => {
    BB.exports = function(BB, IB) {
      return null != BB && IB in Object(BB)
    }
  },
  6160: (BB, IB, ZB) => {
    var TB = ZB(6162),
      JB = ZB(6169),
      oB = ZB(6172);
    BB.exports = function(BB, IB, ZB) {
      return IB === IB ? oB(BB, IB, ZB) : TB(BB, JB, ZB)
    }
  },
  5690: (BB, IB, ZB) => {
    var TB = ZB(5309),
      JB = ZB(5328);
    BB.exports = function(BB) {
      return JB(BB) && "[object Arguments]" == TB(BB)
    }
  },
  5744: (BB, IB, ZB) => {
    var TB = ZB(5751),
      JB = ZB(5328);
    BB.exports = function BB(IB, ZB, oB, GB, vB) {
      return IB === ZB || (null == IB || null == ZB || !JB(IB) && !JB(ZB) ? IB !== IB && ZB !== ZB : TB(IB, ZB, oB, GB, BB, vB))
    }
  },
  5751: (BB, IB, ZB) => {
    var TB = ZB(5711),
      JB = ZB(5758),
      oB = ZB(5803),
      GB = ZB(5831),
      vB = ZB(5945),
      kB = ZB(5345),
      cB = ZB(5881),
      nB = ZB(5894),
      hB = "[object Arguments]",
      zB = "[object Array]",
      FB = "[object Object]",
      NB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB, IB, ZB, gB, qB, yB) {
      var UB = kB(BB),
        WB = kB(IB),
        dB = UB ? zB : vB(BB),
        CB = WB ? zB : vB(IB),
        QB = (dB = dB == hB ? FB : dB) == FB,
        sB = (CB = CB == hB ? FB : CB) == FB,
        wB = dB == CB;
      if (wB && cB(BB)) {
        if (!cB(IB)) return !1;
        UB = !0, QB = !1
      }
      if (wB && !QB) return yB || (yB = new TB), UB || nB(BB) ? JB(BB, IB, ZB, gB, qB, yB) : oB(BB, IB, dB, ZB, gB, qB, yB);
      if (!(1 & ZB)) {
        var OB = QB && NB.call(BB, "__wrapped__"),
          YB = sB && NB.call(IB, "__wrapped__");
        if (OB || YB) {
          var iB = OB ? BB.value() : BB,
            pB = YB ? IB.value() : IB;
          return yB || (yB = new TB), qB(iB, pB, ZB, gB, yB)
        }
      }
      return !!wB && (yB || (yB = new TB), GB(BB, IB, ZB, gB, qB, yB))
    }
  },
  5703: (BB, IB, ZB) => {
    var TB = ZB(5711),
      JB = ZB(5744);
    BB.exports = function(BB, IB, ZB, oB) {
      var GB = ZB.length,
        vB = GB,
        kB = !oB;
      if (null == BB) return !vB;
      for (BB = Object(BB); GB--;) {
        var cB = ZB[GB];
        if (kB && cB[2] ? cB[1] !== BB[cB[0]] : !(cB[0] in BB)) return !1
      }
      for (; ++GB < vB;) {
        var nB = (cB = ZB[GB])[0],
          hB = BB[nB],
          zB = cB[1];
        if (kB && cB[2]) {
          if (void 0 === hB && !(nB in BB)) return !1
        } else {
          var FB = new TB;
          if (oB) var NB = oB(hB, zB, nB, BB, IB, FB);
          if (!(void 0 === NB ? JB(zB, hB, 3, oB, FB) : NB)) return !1
        }
      }
      return !0
    }
  },
  6169: BB => {
    BB.exports = function(BB) {
      return BB !== BB
    }
  },
  5422: (BB, IB, ZB) => {
    var TB = ZB(5425),
      JB = ZB(5427),
      oB = ZB(5269),
      GB = ZB(5436),
      vB = /^\[object .+?Constructor\]$/,
      kB = Function.prototype,
      cB = Object.prototype,
      nB = kB.toString,
      hB = cB.hasOwnProperty,
      zB = RegExp("^" + nB.call(hB).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    BB.exports = function(BB) {
      return !(!oB(BB) || JB(BB)) && (TB(BB) ? zB : vB).test(GB(BB))
    }
  },
  5900: (BB, IB, ZB) => {
    var TB = ZB(5309),
      JB = ZB(5634),
      oB = ZB(5328),
      GB = {};
    GB["[object Float32Array]"] = GB["[object Float64Array]"] = GB["[object Int8Array]"] = GB["[object Int16Array]"] = GB["[object Int32Array]"] = GB["[object Uint8Array]"] = GB["[object Uint8ClampedArray]"] = GB["[object Uint16Array]"] = GB["[object Uint32Array]"] = !0, GB["[object Arguments]"] = GB["[object Array]"] = GB["[object ArrayBuffer]"] = GB["[object Boolean]"] = GB["[object DataView]"] = GB["[object Date]"] = GB["[object Error]"] = GB["[object Function]"] = GB["[object Map]"] = GB["[object Number]"] = GB["[object Object]"] = GB["[object RegExp]"] = GB["[object Set]"] = GB["[object String]"] = GB["[object WeakMap]"] = !1, BB.exports = function(BB) {
      return oB(BB) && JB(BB.length) && !!GB[TB(BB)]
    }
  },
  5694: (BB, IB, ZB) => {
    var TB = ZB(5701),
      JB = ZB(5992),
      oB = ZB(6014),
      GB = ZB(5345),
      vB = ZB(6018);
    BB.exports = function(BB) {
      return "function" == typeof BB ? BB : null == BB ? oB : "object" == typeof BB ? GB(BB) ? JB(BB[0], BB[1]) : TB(BB) : vB(BB)
    }
  },
  5918: (BB, IB, ZB) => {
    var TB = ZB(5927),
      JB = ZB(5936),
      oB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB) {
      if (!TB(BB)) return JB(BB);
      var IB = [];
      for (var ZB in Object(BB)) oB.call(BB, ZB) && "constructor" != ZB && IB.push(ZB);
      return IB
    }
  },
  6322: BB => {
    BB.exports = function(BB, IB) {
      return BB < IB
    }
  },
  6029: (BB, IB, ZB) => {
    var TB = ZB(6036),
      JB = ZB(5630);
    BB.exports = function(BB, IB) {
      var ZB = -1,
        oB = JB(BB) ? Array(BB.length) : [];
      return TB(BB, (function(BB, TB, JB) {
        oB[++ZB] = IB(BB, TB, JB)
      })), oB
    }
  },
  5701: (BB, IB, ZB) => {
    var TB = ZB(5703),
      JB = ZB(5972),
      oB = ZB(5987);
    BB.exports = function(BB) {
      var IB = JB(BB);
      return 1 == IB.length && IB[0][2] ? oB(IB[0][0], IB[0][1]) : function(ZB) {
        return ZB === BB || TB(ZB, BB, IB)
      }
    }
  },
  5992: (BB, IB, ZB) => {
    var TB = ZB(5744),
      JB = ZB(5357),
      oB = ZB(6001),
      GB = ZB(5371),
      vB = ZB(5980),
      kB = ZB(5987),
      cB = ZB(5561);
    BB.exports = function(BB, IB) {
      return GB(BB) && vB(IB) ? kB(cB(BB), IB) : function(ZB) {
        var GB = JB(ZB, BB);
        return void 0 === GB && GB === IB ? oB(ZB, BB) : TB(IB, GB, 3)
      }
    }
  },
  5692: (BB, IB, ZB) => {
    var TB = ZB(5552),
      JB = ZB(5363),
      oB = ZB(5694),
      GB = ZB(6029),
      vB = ZB(6056),
      kB = ZB(5906),
      cB = ZB(6059),
      nB = ZB(6014),
      hB = ZB(5345);
    BB.exports = function(BB, IB, ZB) {
      IB = IB.length ? TB(IB, (function(BB) {
        return hB(BB) ? function(IB) {
          return JB(IB, 1 === BB.length ? BB[0] : BB)
        } : BB
      })) : [nB];
      var zB = -1;
      IB = TB(IB, kB(oB));
      var FB = GB(BB, (function(BB, ZB, JB) {
        return {
          criteria: TB(IB, (function(IB) {
            return IB(BB)
          })),
          index: ++zB,
          value: BB
        }
      }));
      return vB(FB, (function(BB, IB) {
        return cB(BB, IB, ZB)
      }))
    }
  },
  6024: BB => {
    BB.exports = function(BB) {
      return function(IB) {
        return null == IB ? void 0 : IB[BB]
      }
    }
  },
  6027: (BB, IB, ZB) => {
    var TB = ZB(5363);
    BB.exports = function(BB) {
      return function(IB) {
        return TB(IB, BB)
      }
    }
  },
  5622: BB => {
    var IB = Math.ceil,
      ZB = Math.max;
    BB.exports = function(BB, TB, JB, oB) {
      for (var GB = -1, vB = ZB(IB((TB - BB) / (JB || 1)), 0), kB = Array(vB); vB--;) kB[oB ? vB : ++GB] = BB, BB += JB;
      return kB
    }
  },
  6072: (BB, IB, ZB) => {
    var TB = ZB(6014),
      JB = ZB(6081),
      oB = ZB(6097);
    BB.exports = function(BB, IB) {
      return oB(JB(BB, IB, TB), BB + "")
    }
  },
  6100: (BB, IB, ZB) => {
    var TB = ZB(6103),
      JB = ZB(6105),
      oB = ZB(6014),
      GB = JB ? function(BB, IB) {
        return JB(BB, "toString", {
          configurable: !0,
          enumerable: !1,
          value: TB(IB),
          writable: !0
        })
      } : oB;
    BB.exports = GB
  },
  6210: BB => {
    BB.exports = function(BB, IB, ZB) {
      var TB = -1,
        JB = BB.length;
      IB < 0 && (IB = -IB > JB ? 0 : JB + IB), (ZB = ZB > JB ? JB : ZB) < 0 && (ZB += JB), JB = IB > ZB ? 0 : ZB - IB >>> 0, IB >>>= 0;
      for (var oB = Array(JB); ++TB < JB;) oB[TB] = BB[TB + IB];
      return oB
    }
  },
  6481: (BB, IB, ZB) => {
    var TB = ZB(6036);
    BB.exports = function(BB, IB) {
      var ZB;
      return TB(BB, (function(BB, TB, JB) {
        return !(ZB = IB(BB, TB, JB))
      })), !!ZB
    }
  },
  6056: BB => {
    BB.exports = function(BB, IB) {
      var ZB = BB.length;
      for (BB.sort(IB); ZB--;) BB[ZB] = BB[ZB].value;
      return BB
    }
  },
  5877: BB => {
    BB.exports = function(BB, IB) {
      for (var ZB = -1, TB = Array(BB); ++ZB < BB;) TB[ZB] = IB(ZB);
      return TB
    }
  },
  5548: (BB, IB, ZB) => {
    var TB = ZB(5317),
      JB = ZB(5552),
      oB = ZB(5345),
      GB = ZB(5300),
      vB = TB ? TB.prototype : void 0,
      kB = vB ? vB.toString : void 0;
    BB.exports = function BB(IB) {
      if ("string" == typeof IB) return IB;
      if (oB(IB)) return JB(IB, BB) + "";
      if (GB(IB)) return kB ? kB.call(IB) : "";
      var ZB = IB + "";
      return "0" == ZB && 1 / IB == -1 / 0 ? "-0" : ZB
    }
  },
  5289: (BB, IB, ZB) => {
    var TB = ZB(5293),
      JB = /^\s+/;
    BB.exports = function(BB) {
      return BB ? BB.slice(0, TB(BB) + 1).replace(JB, "") : BB
    }
  },
  5906: BB => {
    BB.exports = function(BB) {
      return function(IB) {
        return BB(IB)
      }
    }
  },
  6149: (BB, IB, ZB) => {
    var TB = ZB(5767),
      JB = ZB(6153),
      oB = ZB(6178),
      GB = ZB(5794),
      vB = ZB(6181),
      kB = ZB(5824);
    BB.exports = function(BB, IB, ZB) {
      var cB = -1,
        nB = JB,
        hB = BB.length,
        zB = !0,
        FB = [],
        NB = FB;
      if (ZB) zB = !1, nB = oB;
      else if (hB >= 200) {
        var gB = IB ? null : vB(BB);
        if (gB) return kB(gB);
        zB = !1, nB = GB, NB = new TB
      } else NB = IB ? [] : FB;
      BB: for (; ++cB < hB;) {
        var qB = BB[cB],
          yB = IB ? IB(qB) : qB;
        if (qB = ZB || 0 !== qB ? qB : 0, zB && yB === yB) {
          for (var UB = NB.length; UB--;)
            if (NB[UB] === yB) continue BB;
          IB && NB.push(yB), FB.push(qB)
        } else nB(NB, yB, ZB) || (NB !== FB && NB.push(yB), FB.push(qB))
      }
      return FB
    }
  },
  5794: BB => {
    BB.exports = function(BB, IB) {
      return BB.has(IB)
    }
  },
  5368: (BB, IB, ZB) => {
    var TB = ZB(5345),
      JB = ZB(5371),
      oB = ZB(5374),
      GB = ZB(5540);
    BB.exports = function(BB, IB) {
      return TB(BB) ? BB : JB(BB, IB) ? [BB] : oB(GB(BB))
    }
  },
  6206: (BB, IB, ZB) => {
    var TB = ZB(6210);
    BB.exports = function(BB, IB, ZB) {
      var JB = BB.length;
      return ZB = void 0 === ZB ? JB : ZB, !IB && ZB >= JB ? BB : TB(BB, IB, ZB)
    }
  },
  6067: (BB, IB, ZB) => {
    var TB = ZB(5300);
    BB.exports = function(BB, IB) {
      if (BB !== IB) {
        var ZB = void 0 !== BB,
          JB = null === BB,
          oB = BB === BB,
          GB = TB(BB),
          vB = void 0 !== IB,
          kB = null === IB,
          cB = IB === IB,
          nB = TB(IB);
        if (!kB && !nB && !GB && BB > IB || GB && vB && cB && !kB && !nB || JB && vB && cB || !ZB && cB || !oB) return 1;
        if (!JB && !GB && !nB && BB < IB || nB && ZB && oB && !JB && !GB || kB && ZB && oB || !vB && oB || !cB) return -1
      }
      return 0
    }
  },
  6059: (BB, IB, ZB) => {
    var TB = ZB(6067);
    BB.exports = function(BB, IB, ZB) {
      for (var JB = -1, oB = BB.criteria, GB = IB.criteria, vB = oB.length, kB = ZB.length; ++JB < vB;) {
        var cB = TB(oB[JB], GB[JB]);
        if (cB) return JB >= kB ? cB : cB * ("desc" == ZB[JB] ? -1 : 1)
      }
      return BB.index - IB.index
    }
  },
  5431: (BB, IB, ZB) => {
    var TB = ZB(5278)["__core-js_shared__"];
    BB.exports = TB
  },
  6052: (BB, IB, ZB) => {
    var TB = ZB(5630);
    BB.exports = function(BB, IB) {
      return function(ZB, JB) {
        if (null == ZB) return ZB;
        if (!TB(ZB)) return BB(ZB, JB);
        for (var oB = ZB.length, GB = IB ? oB : -1, vB = Object(ZB);
          (IB ? GB-- : ++GB < oB) && !1 !== JB(vB[GB], GB, vB););
        return ZB
      }
    }
  },
  6050: BB => {
    BB.exports = function(BB) {
      return function(IB, ZB, TB) {
        for (var JB = -1, oB = Object(IB), GB = TB(IB), vB = GB.length; vB--;) {
          var kB = GB[BB ? vB : ++JB];
          if (!1 === ZB(oB[kB], kB, oB)) break
        }
        return IB
      }
    }
  },
  6203: (BB, IB, ZB) => {
    var TB = ZB(6206),
      JB = ZB(6219),
      oB = ZB(6223),
      GB = ZB(5540);
    BB.exports = function(BB) {
      return function(IB) {
        IB = GB(IB);
        var ZB = JB(IB) ? oB(IB) : void 0,
          vB = ZB ? ZB[0] : IB.charAt(0),
          kB = ZB ? TB(ZB, 1).join("") : IB.slice(1);
        return vB[BB]() + kB
      }
    }
  },
  6499: (BB, IB, ZB) => {
    var TB = ZB(5694),
      JB = ZB(5630),
      oB = ZB(5864);
    BB.exports = function(BB) {
      return function(IB, ZB, GB) {
        var vB = Object(IB);
        if (!JB(IB)) {
          var kB = TB(ZB, 3);
          IB = oB(IB), ZB = function(BB) {
            return kB(vB[BB], BB, vB)
          }
        }
        var cB = BB(IB, ZB, GB);
        return cB > -1 ? vB[kB ? IB[cB] : cB] : void 0
      }
    }
  },
  5614: (BB, IB, ZB) => {
    var TB = ZB(5622),
      JB = ZB(5626),
      oB = ZB(5644);
    BB.exports = function(BB) {
      return function(IB, ZB, GB) {
        return GB && "number" != typeof GB && JB(IB, ZB, GB) && (ZB = GB = void 0), IB = oB(IB), void 0 === ZB ? (ZB = IB, IB = 0) : ZB = oB(ZB), GB = void 0 === GB ? IB < ZB ? 1 : -1 : oB(GB), TB(IB, ZB, GB, BB)
      }
    }
  },
  6181: (BB, IB, ZB) => {
    var TB = ZB(5963),
      JB = ZB(6186),
      oB = ZB(5824),
      GB = TB && 1 / oB(new TB([, -0]))[1] == 1 / 0 ? function(BB) {
        return new TB(BB)
      } : JB;
    BB.exports = GB
  },
  6105: (BB, IB, ZB) => {
    var TB = ZB(5419),
      JB = function() {
        try {
          var BB = TB(Object, "defineProperty");
          return BB({}, "", {}), BB
        } catch (IB) {}
      }();
    BB.exports = JB
  },
  5758: (BB, IB, ZB) => {
    var TB = ZB(5767),
      JB = ZB(5787),
      oB = ZB(5794);
    BB.exports = function(BB, IB, ZB, GB, vB, kB) {
      var cB = 1 & ZB,
        nB = BB.length,
        hB = IB.length;
      if (nB != hB && !(cB && hB > nB)) return !1;
      var zB = kB.get(BB),
        FB = kB.get(IB);
      if (zB && FB) return zB == IB && FB == BB;
      var NB = -1,
        gB = !0,
        qB = 2 & ZB ? new TB : void 0;
      for (kB.set(BB, IB), kB.set(IB, BB); ++NB < nB;) {
        var yB = BB[NB],
          UB = IB[NB];
        if (GB) var WB = cB ? GB(UB, yB, NB, IB, BB, kB) : GB(yB, UB, NB, BB, IB, kB);
        if (void 0 !== WB) {
          if (WB) continue;
          gB = !1;
          break
        }
        if (qB) {
          if (!JB(IB, (function(BB, IB) {
              if (!oB(qB, IB) && (yB === BB || vB(yB, BB, ZB, GB, kB))) return qB.push(IB)
            }))) {
            gB = !1;
            break
          }
        } else if (yB !== UB && !vB(yB, UB, ZB, GB, kB)) {
          gB = !1;
          break
        }
      }
      return kB.delete(BB), kB.delete(IB), gB
    }
  },
  5803: (BB, IB, ZB) => {
    var TB = ZB(5317),
      JB = ZB(5812),
      oB = ZB(5484),
      GB = ZB(5758),
      vB = ZB(5820),
      kB = ZB(5824),
      cB = TB ? TB.prototype : void 0,
      nB = cB ? cB.valueOf : void 0;
    BB.exports = function(BB, IB, ZB, TB, cB, hB, zB) {
      switch (ZB) {
        case "[object DataView]":
          if (BB.byteLength != IB.byteLength || BB.byteOffset != IB.byteOffset) return !1;
          BB = BB.buffer, IB = IB.buffer;
        case "[object ArrayBuffer]":
          return !(BB.byteLength != IB.byteLength || !hB(new JB(BB), new JB(IB)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return oB(+BB, +IB);
        case "[object Error]":
          return BB.name == IB.name && BB.message == IB.message;
        case "[object RegExp]":
        case "[object String]":
          return BB == IB + "";
        case "[object Map]":
          var FB = vB;
        case "[object Set]":
          var NB = 1 & TB;
          if (FB || (FB = kB), BB.size != IB.size && !NB) return !1;
          var gB = zB.get(BB);
          if (gB) return gB == IB;
          TB |= 2, zB.set(BB, IB);
          var qB = GB(FB(BB), FB(IB), TB, cB, hB, zB);
          return zB.delete(BB), qB;
        case "[object Symbol]":
          if (nB) return nB.call(BB) == nB.call(IB)
      }
      return !1
    }
  },
  5831: (BB, IB, ZB) => {
    var TB = ZB(5840),
      JB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB, IB, ZB, oB, GB, vB) {
      var kB = 1 & ZB,
        cB = TB(BB),
        nB = cB.length;
      if (nB != TB(IB).length && !kB) return !1;
      for (var hB = nB; hB--;) {
        var zB = cB[hB];
        if (!(kB ? zB in IB : JB.call(IB, zB))) return !1
      }
      var FB = vB.get(BB),
        NB = vB.get(IB);
      if (FB && NB) return FB == IB && NB == BB;
      var gB = !0;
      vB.set(BB, IB), vB.set(IB, BB);
      for (var qB = kB; ++hB < nB;) {
        var yB = BB[zB = cB[hB]],
          UB = IB[zB];
        if (oB) var WB = kB ? oB(UB, yB, zB, IB, BB, vB) : oB(yB, UB, zB, BB, IB, vB);
        if (!(void 0 === WB ? yB === UB || GB(yB, UB, ZB, oB, vB) : WB)) {
          gB = !1;
          break
        }
        qB || (qB = "constructor" == zB)
      }
      if (gB && !qB) {
        var dB = BB.constructor,
          CB = IB.constructor;
        dB == CB || !("constructor" in BB) || !("constructor" in IB) || "function" == typeof dB && dB instanceof dB && "function" == typeof CB && CB instanceof CB || (gB = !1)
      }
      return vB.delete(BB), vB.delete(IB), gB
    }
  },
  5280: (BB, IB, ZB) => {
    var TB = "object" == typeof ZB.g && ZB.g && ZB.g.Object === Object && ZB.g;
    BB.exports = TB
  },
  5840: (BB, IB, ZB) => {
    var TB = ZB(5846),
      JB = ZB(5852),
      oB = ZB(5864);
    BB.exports = function(BB) {
      return TB(BB, oB, JB)
    }
  },
  5520: (BB, IB, ZB) => {
    var TB = ZB(5523);
    BB.exports = function(BB, IB) {
      var ZB = BB.__data__;
      return TB(IB) ? ZB["string" == typeof IB ? "string" : "hash"] : ZB.map
    }
  },
  5972: (BB, IB, ZB) => {
    var TB = ZB(5980),
      JB = ZB(5864);
    BB.exports = function(BB) {
      for (var IB = JB(BB), ZB = IB.length; ZB--;) {
        var oB = IB[ZB],
          GB = BB[oB];
        IB[ZB] = [oB, GB, TB(GB)]
      }
      return IB
    }
  },
  5419: (BB, IB, ZB) => {
    var TB = ZB(5422),
      JB = ZB(5442);
    BB.exports = function(BB, IB) {
      var ZB = JB(BB, IB);
      return TB(ZB) ? ZB : void 0
    }
  },
  6444: (BB, IB, ZB) => {
    var TB = ZB(5943)(Object.getPrototypeOf, Object);
    BB.exports = TB
  },
  5320: (BB, IB, ZB) => {
    var TB = ZB(5317),
      JB = Object.prototype,
      oB = JB.hasOwnProperty,
      GB = JB.toString,
      vB = TB ? TB.toStringTag : void 0;
    BB.exports = function(BB) {
      var IB = oB.call(BB, vB),
        ZB = BB[vB];
      try {
        BB[vB] = void 0;
        var TB = !0
      } catch (kB) {}
      var JB = GB.call(BB);
      return TB && (IB ? BB[vB] = ZB : delete BB[vB]), JB
    }
  },
  5852: (BB, IB, ZB) => {
    var TB = ZB(5855),
      JB = ZB(5859),
      oB = Object.prototype.propertyIsEnumerable,
      GB = Object.getOwnPropertySymbols,
      vB = GB ? function(BB) {
        return null == BB ? [] : (BB = Object(BB), TB(GB(BB), (function(IB) {
          return oB.call(BB, IB)
        })))
      } : JB;
    BB.exports = vB
  },
  5945: (BB, IB, ZB) => {
    var TB = ZB(5950),
      JB = ZB(5509),
      oB = ZB(5954),
      GB = ZB(5963),
      vB = ZB(5969),
      kB = ZB(5309),
      cB = ZB(5436),
      nB = "[object Map]",
      hB = "[object Promise]",
      zB = "[object Set]",
      FB = "[object WeakMap]",
      NB = "[object DataView]",
      gB = cB(TB),
      qB = cB(JB),
      yB = cB(oB),
      UB = cB(GB),
      WB = cB(vB),
      dB = kB;
    (TB && dB(new TB(new ArrayBuffer(1))) != NB || JB && dB(new JB) != nB || oB && dB(oB.resolve()) != hB || GB && dB(new GB) != zB || vB && dB(new vB) != FB) && (dB = function(BB) {
      var IB = kB(BB),
        ZB = "[object Object]" == IB ? BB.constructor : void 0,
        TB = ZB ? cB(ZB) : "";
      if (TB) switch (TB) {
        case gB:
          return NB;
        case qB:
          return nB;
        case yB:
          return hB;
        case UB:
          return zB;
        case WB:
          return FB
      }
      return IB
    }), BB.exports = dB
  },
  5442: BB => {
    BB.exports = function(BB, IB) {
      return null == BB ? void 0 : BB[IB]
    }
  },
  6012: (BB, IB, ZB) => {
    var TB = ZB(5368),
      JB = ZB(5683),
      oB = ZB(5345),
      GB = ZB(5638),
      vB = ZB(5634),
      kB = ZB(5561);
    BB.exports = function(BB, IB, ZB) {
      for (var cB = -1, nB = (IB = TB(IB, BB)).length, hB = !1; ++cB < nB;) {
        var zB = kB(IB[cB]);
        if (!(hB = null != BB && ZB(BB, zB))) break;
        BB = BB[zB]
      }
      return hB || ++cB != nB ? hB : !!(nB = null == BB ? 0 : BB.length) && vB(nB) && GB(zB, nB) && (oB(BB) || JB(BB))
    }
  },
  6219: BB => {
    var IB = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    BB.exports = function(BB) {
      return IB.test(BB)
    }
  },
  5410: (BB, IB, ZB) => {
    var TB = ZB(5417);
    BB.exports = function() {
      this.__data__ = TB ? TB(null) : {}, this.size = 0
    }
  },
  5451: BB => {
    BB.exports = function(BB) {
      var IB = this.has(BB) && delete this.__data__[BB];
      return this.size -= IB ? 1 : 0, IB
    }
  },
  5454: (BB, IB, ZB) => {
    var TB = ZB(5417),
      JB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB) {
      var IB = this.__data__;
      if (TB) {
        var ZB = IB[BB];
        return "__lodash_hash_undefined__" === ZB ? void 0 : ZB
      }
      return JB.call(IB, BB) ? IB[BB] : void 0
    }
  },
  5457: (BB, IB, ZB) => {
    var TB = ZB(5417),
      JB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB) {
      var IB = this.__data__;
      return TB ? void 0 !== IB[BB] : JB.call(IB, BB)
    }
  },
  5459: (BB, IB, ZB) => {
    var TB = ZB(5417);
    BB.exports = function(BB, IB) {
      var ZB = this.__data__;
      return this.size += this.has(BB) ? 0 : 1, ZB[BB] = TB && void 0 === IB ? "__lodash_hash_undefined__" : IB, this
    }
  },
  5675: (BB, IB, ZB) => {
    var TB = ZB(5317),
      JB = ZB(5683),
      oB = ZB(5345),
      GB = TB ? TB.isConcatSpreadable : void 0;
    BB.exports = function(BB) {
      return oB(BB) || JB(BB) || !!(GB && BB && BB[GB])
    }
  },
  5638: BB => {
    var IB = /^(?:0|[1-9]\d*)$/;
    BB.exports = function(BB, ZB) {
      var TB = typeof BB;
      return !!(ZB = null == ZB ? 9007199254740991 : ZB) && ("number" == TB || "symbol" != TB && IB.test(BB)) && BB > -1 && BB % 1 == 0 && BB < ZB
    }
  },
  5626: (BB, IB, ZB) => {
    var TB = ZB(5484),
      JB = ZB(5630),
      oB = ZB(5638),
      GB = ZB(5269);
    BB.exports = function(BB, IB, ZB) {
      if (!GB(ZB)) return !1;
      var vB = typeof IB;
      return !!("number" == vB ? JB(ZB) && oB(IB, ZB.length) : "string" == vB && IB in ZB) && TB(ZB[IB], BB)
    }
  },
  5371: (BB, IB, ZB) => {
    var TB = ZB(5345),
      JB = ZB(5300),
      oB = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      GB = /^\w*$/;
    BB.exports = function(BB, IB) {
      if (TB(BB)) return !1;
      var ZB = typeof BB;
      return !("number" != ZB && "symbol" != ZB && "boolean" != ZB && null != BB && !JB(BB)) || (GB.test(BB) || !oB.test(BB) || null != IB && BB in Object(IB))
    }
  },
  5523: BB => {
    BB.exports = function(BB) {
      var IB = typeof BB;
      return "string" == IB || "number" == IB || "symbol" == IB || "boolean" == IB ? "__proto__" !== BB : null === BB
    }
  },
  5427: (BB, IB, ZB) => {
    var TB = ZB(5431),
      JB = function() {
        var BB = /[^.]+$/.exec(TB && TB.keys && TB.keys.IE_PROTO || "");
        return BB ? "Symbol(src)_1." + BB : ""
      }();
    BB.exports = function(BB) {
      return !!JB && JB in BB
    }
  },
  5927: BB => {
    var IB = Object.prototype;
    BB.exports = function(BB) {
      var ZB = BB && BB.constructor;
      return BB === ("function" == typeof ZB && ZB.prototype || IB)
    }
  },
  5980: (BB, IB, ZB) => {
    var TB = ZB(5269);
    BB.exports = function(BB) {
      return BB === BB && !TB(BB)
    }
  },
  5464: BB => {
    BB.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5473: (BB, IB, ZB) => {
    var TB = ZB(5476),
      JB = Array.prototype.splice;
    BB.exports = function(BB) {
      var IB = this.__data__,
        ZB = TB(IB, BB);
      return !(ZB < 0) && (ZB == IB.length - 1 ? IB.pop() : JB.call(IB, ZB, 1), --this.size, !0)
    }
  },
  5489: (BB, IB, ZB) => {
    var TB = ZB(5476);
    BB.exports = function(BB) {
      var IB = this.__data__,
        ZB = TB(IB, BB);
      return ZB < 0 ? void 0 : IB[ZB][1]
    }
  },
  5495: (BB, IB, ZB) => {
    var TB = ZB(5476);
    BB.exports = function(BB) {
      return TB(this.__data__, BB) > -1
    }
  },
  5504: (BB, IB, ZB) => {
    var TB = ZB(5476);
    BB.exports = function(BB, IB) {
      var ZB = this.__data__,
        JB = TB(ZB, BB);
      return JB < 0 ? (++this.size, ZB.push([BB, IB])) : ZB[JB][1] = IB, this
    }
  },
  5395: (BB, IB, ZB) => {
    var TB = ZB(5401),
      JB = ZB(5462),
      oB = ZB(5509);
    BB.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new TB,
        map: new(oB || JB),
        string: new TB
      }
    }
  },
  5517: (BB, IB, ZB) => {
    var TB = ZB(5520);
    BB.exports = function(BB) {
      var IB = TB(this, BB).delete(BB);
      return this.size -= IB ? 1 : 0, IB
    }
  },
  5525: (BB, IB, ZB) => {
    var TB = ZB(5520);
    BB.exports = function(BB) {
      return TB(this, BB).get(BB)
    }
  },
  5530: (BB, IB, ZB) => {
    var TB = ZB(5520);
    BB.exports = function(BB) {
      return TB(this, BB).has(BB)
    }
  },
  5536: (BB, IB, ZB) => {
    var TB = ZB(5520);
    BB.exports = function(BB, IB) {
      var ZB = TB(this, BB),
        JB = ZB.size;
      return ZB.set(BB, IB), this.size += ZB.size == JB ? 0 : 1, this
    }
  },
  5820: BB => {
    BB.exports = function(BB) {
      var IB = -1,
        ZB = Array(BB.size);
      return BB.forEach((function(BB, TB) {
        ZB[++IB] = [TB, BB]
      })), ZB
    }
  },
  5987: BB => {
    BB.exports = function(BB, IB) {
      return function(ZB) {
        return null != ZB && (ZB[BB] === IB && (void 0 !== IB || BB in Object(ZB)))
      }
    }
  },
  5378: (BB, IB, ZB) => {
    var TB = ZB(5385);
    BB.exports = function(BB) {
      var IB = TB(BB, (function(BB) {
          return 500 === ZB.size && ZB.clear(), BB
        })),
        ZB = IB.cache;
      return IB
    }
  },
  5417: (BB, IB, ZB) => {
    var TB = ZB(5419)(Object, "create");
    BB.exports = TB
  },
  5936: (BB, IB, ZB) => {
    var TB = ZB(5943)(Object.keys, Object);
    BB.exports = TB
  },
  5909: (BB, IB, ZB) => {
    BB = ZB.nmd(BB);
    var TB = ZB(5280),
      JB = IB && !IB.nodeType && IB,
      oB = JB && BB && !BB.nodeType && BB,
      GB = oB && oB.exports === JB && TB.process,
      vB = function() {
        try {
          var BB = oB && oB.require && oB.require("util").types;
          return BB || GB && GB.binding && GB.binding("util")
        } catch (IB) {}
      }();
    BB.exports = vB
  },
  5326: BB => {
    var IB = Object.prototype.toString;
    BB.exports = function(BB) {
      return IB.call(BB)
    }
  },
  5943: BB => {
    BB.exports = function(BB, IB) {
      return function(ZB) {
        return BB(IB(ZB))
      }
    }
  },
  6081: (BB, IB, ZB) => {
    var TB = ZB(6090),
      JB = Math.max;
    BB.exports = function(BB, IB, ZB) {
      return IB = JB(void 0 === IB ? BB.length - 1 : IB, 0),
        function() {
          for (var oB = arguments, GB = -1, vB = JB(oB.length - IB, 0), kB = Array(vB); ++GB < vB;) kB[GB] = oB[IB + GB];
          GB = -1;
          for (var cB = Array(IB + 1); ++GB < IB;) cB[GB] = oB[GB];
          return cB[IB] = ZB(kB), TB(BB, this, cB)
        }
    }
  },
  5278: (BB, IB, ZB) => {
    var TB = ZB(5280),
      JB = "object" == typeof self && self && self.Object === Object && self,
      oB = TB || JB || Function("return this")();
    BB.exports = oB
  },
  5773: BB => {
    BB.exports = function(BB) {
      return this.__data__.set(BB, "__lodash_hash_undefined__"), this
    }
  },
  5781: BB => {
    BB.exports = function(BB) {
      return this.__data__.has(BB)
    }
  },
  5824: BB => {
    BB.exports = function(BB) {
      var IB = -1,
        ZB = Array(BB.size);
      return BB.forEach((function(BB) {
        ZB[++IB] = BB
      })), ZB
    }
  },
  6097: (BB, IB, ZB) => {
    var TB = ZB(6100),
      JB = ZB(6108)(TB);
    BB.exports = JB
  },
  6108: BB => {
    var IB = Date.now;
    BB.exports = function(BB) {
      var ZB = 0,
        TB = 0;
      return function() {
        var JB = IB(),
          oB = 16 - (JB - TB);
        if (TB = JB, oB > 0) {
          if (++ZB >= 800) return arguments[0]
        } else ZB = 0;
        return BB.apply(void 0, arguments)
      }
    }
  },
  5714: (BB, IB, ZB) => {
    var TB = ZB(5462);
    BB.exports = function() {
      this.__data__ = new TB, this.size = 0
    }
  },
  5723: BB => {
    BB.exports = function(BB) {
      var IB = this.__data__,
        ZB = IB.delete(BB);
      return this.size = IB.size, ZB
    }
  },
  5725: BB => {
    BB.exports = function(BB) {
      return this.__data__.get(BB)
    }
  },
  5728: BB => {
    BB.exports = function(BB) {
      return this.__data__.has(BB)
    }
  },
  5737: (BB, IB, ZB) => {
    var TB = ZB(5462),
      JB = ZB(5509),
      oB = ZB(5393);
    BB.exports = function(BB, IB) {
      var ZB = this.__data__;
      if (ZB instanceof TB) {
        var GB = ZB.__data__;
        if (!JB || GB.length < 199) return GB.push([BB, IB]), this.size = ++ZB.size, this;
        ZB = this.__data__ = new oB(GB)
      }
      return ZB.set(BB, IB), this.size = ZB.size, this
    }
  },
  6172: BB => {
    BB.exports = function(BB, IB, ZB) {
      for (var TB = ZB - 1, JB = BB.length; ++TB < JB;)
        if (BB[TB] === IB) return TB;
      return -1
    }
  },
  6223: (BB, IB, ZB) => {
    var TB = ZB(6232),
      JB = ZB(6219),
      oB = ZB(6237);
    BB.exports = function(BB) {
      return JB(BB) ? oB(BB) : TB(BB)
    }
  },
  5374: (BB, IB, ZB) => {
    var TB = ZB(5378),
      JB = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      oB = /\\(\\)?/g,
      GB = TB((function(BB) {
        var IB = [];
        return 46 === BB.charCodeAt(0) && IB.push(""), BB.replace(JB, (function(BB, ZB, TB, JB) {
          IB.push(TB ? JB.replace(oB, "$1") : ZB || BB)
        })), IB
      }));
    BB.exports = GB
  },
  5561: (BB, IB, ZB) => {
    var TB = ZB(5300);
    BB.exports = function(BB) {
      if ("string" == typeof BB || TB(BB)) return BB;
      var IB = BB + "";
      return "0" == IB && 1 / BB == -1 / 0 ? "-0" : IB
    }
  },
  5436: BB => {
    var IB = Function.prototype.toString;
    BB.exports = function(BB) {
      if (null != BB) {
        try {
          return IB.call(BB)
        } catch (ZB) {}
        try {
          return BB + ""
        } catch (ZB) {}
      }
      return ""
    }
  },
  5293: BB => {
    var IB = /\s/;
    BB.exports = function(BB) {
      for (var ZB = BB.length; ZB-- && IB.test(BB.charAt(ZB)););
      return ZB
    }
  },
  6237: BB => {
    var IB = "\\ud800-\\udfff",
      ZB = "[" + IB + "]",
      TB = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      JB = "\\ud83c[\\udffb-\\udfff]",
      oB = "[^" + IB + "]",
      GB = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      vB = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      kB = "(?:" + TB + "|" + JB + ")" + "?",
      cB = "[\\ufe0e\\ufe0f]?",
      nB = cB + kB + ("(?:\\u200d(?:" + [oB, GB, vB].join("|") + ")" + cB + kB + ")*"),
      hB = "(?:" + [oB + TB + "?", TB, GB, vB, ZB].join("|") + ")",
      zB = RegExp(JB + "(?=" + JB + ")|" + hB + nB, "g");
    BB.exports = function(BB) {
      return BB.match(zB) || []
    }
  },
  6103: BB => {
    BB.exports = function(BB) {
      return function() {
        return BB
      }
    }
  },
  5263: (BB, IB, ZB) => {
    var TB = ZB(5269),
      JB = ZB(5273),
      oB = ZB(5282),
      GB = Math.max,
      vB = Math.min;
    BB.exports = function(BB, IB, ZB) {
      var kB, cB, nB, hB, zB, FB, NB = 0,
        gB = !1,
        qB = !1,
        yB = !0;
      if ("function" != typeof BB) throw new TypeError("Expected a function");

      function UB(IB) {
        var ZB = kB,
          TB = cB;
        return kB = cB = void 0, NB = IB, hB = BB.apply(TB, ZB)
      }

      function WB(BB) {
        var ZB = BB - FB;
        return void 0 === FB || ZB >= IB || ZB < 0 || qB && BB - NB >= nB
      }

      function dB() {
        var BB = JB();
        if (WB(BB)) return CB(BB);
        zB = setTimeout(dB, function(BB) {
          var ZB = IB - (BB - FB);
          return qB ? vB(ZB, nB - (BB - NB)) : ZB
        }(BB))
      }

      function CB(BB) {
        return zB = void 0, yB && kB ? UB(BB) : (kB = cB = void 0, hB)
      }

      function QB() {
        var BB = JB(),
          ZB = WB(BB);
        if (kB = arguments, cB = this, FB = BB, ZB) {
          if (void 0 === zB) return function(BB) {
            return NB = BB, zB = setTimeout(dB, IB), gB ? UB(BB) : hB
          }(FB);
          if (qB) return clearTimeout(zB), zB = setTimeout(dB, IB), UB(FB)
        }
        return void 0 === zB && (zB = setTimeout(dB, IB)), hB
      }
      return IB = oB(IB) || 0, TB(ZB) && (gB = !!ZB.leading, nB = (qB = "maxWait" in ZB) ? GB(oB(ZB.maxWait) || 0, IB) : nB, yB = "trailing" in ZB ? !!ZB.trailing : yB), QB.cancel = function() {
        void 0 !== zB && clearTimeout(zB), NB = 0, kB = FB = cB = zB = void 0
      }, QB.flush = function() {
        return void 0 === zB ? hB : CB(JB())
      }, QB
    }
  },
  5484: BB => {
    BB.exports = function(BB, IB) {
      return BB === IB || BB !== BB && IB !== IB
    }
  },
  6392: (BB, IB, ZB) => {
    var TB = ZB(6397),
      JB = ZB(6402),
      oB = ZB(5694),
      GB = ZB(5345),
      vB = ZB(5626);
    BB.exports = function(BB, IB, ZB) {
      var kB = GB(BB) ? TB : JB;
      return ZB && vB(BB, IB, ZB) && (IB = void 0), kB(BB, oB(IB, 3))
    }
  },
  6490: (BB, IB, ZB) => {
    var TB = ZB(6499)(ZB(6503));
    BB.exports = TB
  },
  6503: (BB, IB, ZB) => {
    var TB = ZB(6162),
      JB = ZB(5694),
      oB = ZB(6507),
      GB = Math.max;
    BB.exports = function(BB, IB, ZB) {
      var vB = null == BB ? 0 : BB.length;
      if (!vB) return -1;
      var kB = null == ZB ? 0 : oB(ZB);
      return kB < 0 && (kB = GB(vB + kB, 0)), TB(BB, JB(IB, 3), kB)
    }
  },
  6325: (BB, IB, ZB) => {
    var TB = ZB(5659),
      JB = ZB(6334);
    BB.exports = function(BB, IB) {
      return TB(JB(BB, IB), 1)
    }
  },
  5357: (BB, IB, ZB) => {
    var TB = ZB(5363);
    BB.exports = function(BB, IB, ZB) {
      var JB = null == BB ? void 0 : TB(BB, IB);
      return void 0 === JB ? ZB : JB
    }
  },
  6001: (BB, IB, ZB) => {
    var TB = ZB(6010),
      JB = ZB(6012);
    BB.exports = function(BB, IB) {
      return null != BB && JB(BB, IB, TB)
    }
  },
  6014: BB => {
    BB.exports = function(BB) {
      return BB
    }
  },
  5683: (BB, IB, ZB) => {
    var TB = ZB(5690),
      JB = ZB(5328),
      oB = Object.prototype,
      GB = oB.hasOwnProperty,
      vB = oB.propertyIsEnumerable,
      kB = TB(function() {
        return arguments
      }()) ? TB : function(BB) {
        return JB(BB) && GB.call(BB, "callee") && !vB.call(BB, "callee")
      };
    BB.exports = kB
  },
  5345: BB => {
    var IB = Array.isArray;
    BB.exports = IB
  },
  5630: (BB, IB, ZB) => {
    var TB = ZB(5425),
      JB = ZB(5634);
    BB.exports = function(BB) {
      return null != BB && JB(BB.length) && !TB(BB)
    }
  },
  6453: (BB, IB, ZB) => {
    var TB = ZB(5309),
      JB = ZB(5328);
    BB.exports = function(BB) {
      return !0 === BB || !1 === BB || JB(BB) && "[object Boolean]" == TB(BB)
    }
  },
  5881: (BB, IB, ZB) => {
    BB = ZB.nmd(BB);
    var TB = ZB(5278),
      JB = ZB(5890),
      oB = IB && !IB.nodeType && IB,
      GB = oB && BB && !BB.nodeType && BB,
      vB = GB && GB.exports === oB ? TB.UN : void 0,
      kB = (vB ? vB.isBuffer : void 0) || JB;
    BB.exports = kB
  },
  6339: (BB, IB, ZB) => {
    var TB = ZB(5744);
    BB.exports = function(BB, IB) {
      return TB(BB, IB)
    }
  },
  5425: (BB, IB, ZB) => {
    var TB = ZB(5309),
      JB = ZB(5269);
    BB.exports = function(BB) {
      if (!JB(BB)) return !1;
      var IB = TB(BB);
      return "[object Function]" == IB || "[object GeneratorFunction]" == IB || "[object AsyncFunction]" == IB || "[object Proxy]" == IB
    }
  },
  5634: BB => {
    BB.exports = function(BB) {
      return "number" == typeof BB && BB > -1 && BB % 1 == 0 && BB <= 9007199254740991
    }
  },
  5348: (BB, IB, ZB) => {
    var TB = ZB(5350);
    BB.exports = function(BB) {
      return TB(BB) && BB != +BB
    }
  },
  5563: BB => {
    BB.exports = function(BB) {
      return null == BB
    }
  },
  5350: (BB, IB, ZB) => {
    var TB = ZB(5309),
      JB = ZB(5328);
    BB.exports = function(BB) {
      return "number" == typeof BB || JB(BB) && "[object Number]" == TB(BB)
    }
  },
  5269: BB => {
    BB.exports = function(BB) {
      var IB = typeof BB;
      return null != BB && ("object" == IB || "function" == IB)
    }
  },
  5328: BB => {
    BB.exports = function(BB) {
      return null != BB && "object" == typeof BB
    }
  },
  6437: (BB, IB, ZB) => {
    var TB = ZB(5309),
      JB = ZB(6444),
      oB = ZB(5328),
      GB = Function.prototype,
      vB = Object.prototype,
      kB = GB.toString,
      cB = vB.hasOwnProperty,
      nB = kB.call(Object);
    BB.exports = function(BB) {
      if (!oB(BB) || "[object Object]" != TB(BB)) return !1;
      var IB = JB(BB);
      if (null === IB) return !0;
      var ZB = cB.call(IB, "constructor") && IB.constructor;
      return "function" == typeof ZB && ZB instanceof ZB && kB.call(ZB) == nB
    }
  },
  5341: (BB, IB, ZB) => {
    var TB = ZB(5309),
      JB = ZB(5345),
      oB = ZB(5328);
    BB.exports = function(BB) {
      return "string" == typeof BB || !JB(BB) && oB(BB) && "[object String]" == TB(BB)
    }
  },
  5300: (BB, IB, ZB) => {
    var TB = ZB(5309),
      JB = ZB(5328);
    BB.exports = function(BB) {
      return "symbol" == typeof BB || JB(BB) && "[object Symbol]" == TB(BB)
    }
  },
  5894: (BB, IB, ZB) => {
    var TB = ZB(5900),
      JB = ZB(5906),
      oB = ZB(5909),
      GB = oB && oB.isTypedArray,
      vB = GB ? JB(GB) : TB;
    BB.exports = vB
  },
  5864: (BB, IB, ZB) => {
    var TB = ZB(5870),
      JB = ZB(5918),
      oB = ZB(5630);
    BB.exports = function(BB) {
      return oB(BB) ? TB(BB) : JB(BB)
    }
  },
  6431: BB => {
    BB.exports = function(BB) {
      var IB = null == BB ? 0 : BB.length;
      return IB ? BB[IB - 1] : void 0
    }
  },
  6334: (BB, IB, ZB) => {
    var TB = ZB(5552),
      JB = ZB(5694),
      oB = ZB(6029),
      GB = ZB(5345);
    BB.exports = function(BB, IB) {
      return (GB(BB) ? TB : oB)(BB, JB(IB, 3))
    }
  },
  6384: (BB, IB, ZB) => {
    var TB = ZB(6387),
      JB = ZB(6041),
      oB = ZB(5694);
    BB.exports = function(BB, IB) {
      var ZB = {};
      return IB = oB(IB, 3), JB(BB, (function(BB, JB, oB) {
        TB(ZB, JB, IB(BB, JB, oB))
      })), ZB
    }
  },
  6302: (BB, IB, ZB) => {
    var TB = ZB(6309),
      JB = ZB(6311),
      oB = ZB(6014);
    BB.exports = function(BB) {
      return BB && BB.length ? TB(BB, oB, JB) : void 0
    }
  },
  5385: (BB, IB, ZB) => {
    var TB = ZB(5393);

    function JB(BB, IB) {
      if ("function" != typeof BB || null != IB && "function" != typeof IB) throw new TypeError("Expected a function");
      var ZB = function() {
        var TB = arguments,
          JB = IB ? IB.apply(this, TB) : TB[0],
          oB = ZB.cache;
        if (oB.has(JB)) return oB.get(JB);
        var GB = BB.apply(this, TB);
        return ZB.cache = oB.set(JB, GB) || oB, GB
      };
      return ZB.cache = new(JB.Cache || TB), ZB
    }
    JB.Cache = TB, BB.exports = JB
  },
  6316: (BB, IB, ZB) => {
    var TB = ZB(6309),
      JB = ZB(6322),
      oB = ZB(6014);
    BB.exports = function(BB) {
      return BB && BB.length ? TB(BB, oB, JB) : void 0
    }
  },
  6186: BB => {
    BB.exports = function() {}
  },
  5273: (BB, IB, ZB) => {
    var TB = ZB(5278);
    BB.exports = function() {
      return TB.Date.now()
    }
  },
  6018: (BB, IB, ZB) => {
    var TB = ZB(6024),
      JB = ZB(6027),
      oB = ZB(5371),
      GB = ZB(5561);
    BB.exports = function(BB) {
      return oB(BB) ? TB(GB(BB)) : JB(BB)
    }
  },
  5609: (BB, IB, ZB) => {
    var TB = ZB(5614)();
    BB.exports = TB
  },
  6473: (BB, IB, ZB) => {
    var TB = ZB(5787),
      JB = ZB(5694),
      oB = ZB(6481),
      GB = ZB(5345),
      vB = ZB(5626);
    BB.exports = function(BB, IB, ZB) {
      var kB = GB(BB) ? TB : oB;
      return ZB && vB(BB, IB, ZB) && (IB = void 0), kB(BB, JB(IB, 3))
    }
  },
  5650: (BB, IB, ZB) => {
    var TB = ZB(5659),
      JB = ZB(5692),
      oB = ZB(6072),
      GB = ZB(5626),
      vB = oB((function(BB, IB) {
        if (null == BB) return [];
        var ZB = IB.length;
        return ZB > 1 && GB(BB, IB[0], IB[1]) ? IB = [] : ZB > 2 && GB(IB[0], IB[1], IB[2]) && (IB = [IB[0]]), JB(BB, TB(IB, 1), [])
      }));
    BB.exports = vB
  },
  5859: BB => {
    BB.exports = function() {
      return []
    }
  },
  5890: BB => {
    BB.exports = function() {
      return !1
    }
  },
  5258: (BB, IB, ZB) => {
    var TB = ZB(5263),
      JB = ZB(5269);
    BB.exports = function(BB, IB, ZB) {
      var oB = !0,
        GB = !0;
      if ("function" != typeof BB) throw new TypeError("Expected a function");
      return JB(ZB) && (oB = "leading" in ZB ? !!ZB.leading : oB, GB = "trailing" in ZB ? !!ZB.trailing : GB), TB(BB, IB, {
        leading: oB,
        maxWait: IB,
        trailing: GB
      })
    }
  },
  5644: (BB, IB, ZB) => {
    var TB = ZB(5282),
      JB = 1 / 0;
    BB.exports = function(BB) {
      return BB ? (BB = TB(BB)) === JB || BB === -1 / 0 ? 17976931348623157e292 * (BB < 0 ? -1 : 1) : BB === BB ? BB : 0 : 0 === BB ? BB : 0
    }
  },
  6507: (BB, IB, ZB) => {
    var TB = ZB(5644);
    BB.exports = function(BB) {
      var IB = TB(BB),
        ZB = IB % 1;
      return IB === IB ? ZB ? IB - ZB : IB : 0
    }
  },
  5282: (BB, IB, ZB) => {
    var TB = ZB(5289),
      JB = ZB(5269),
      oB = ZB(5300),
      GB = /^[-+]0x[0-9a-f]+$/i,
      vB = /^0b[01]+$/i,
      kB = /^0o[0-7]+$/i,
      cB = parseInt;
    BB.exports = function(BB) {
      if ("number" == typeof BB) return BB;
      if (oB(BB)) return NaN;
      if (JB(BB)) {
        var IB = "function" == typeof BB.valueOf ? BB.valueOf() : BB;
        BB = JB(IB) ? IB + "" : IB
      }
      if ("string" != typeof BB) return 0 === BB ? BB : +BB;
      BB = TB(BB);
      var ZB = vB.test(BB);
      return ZB || kB.test(BB) ? cB(BB.slice(2), ZB ? 2 : 8) : GB.test(BB) ? NaN : +BB
    }
  },
  5540: (BB, IB, ZB) => {
    var TB = ZB(5548);
    BB.exports = function(BB) {
      return null == BB ? "" : TB(BB)
    }
  },
  6140: (BB, IB, ZB) => {
    var TB = ZB(5694),
      JB = ZB(6149);
    BB.exports = function(BB, IB) {
      return BB && BB.length ? JB(BB, TB(IB, 2)) : []
    }
  },
  6200: (BB, IB, ZB) => {
    var TB = ZB(6203)("toUpperCase");
    BB.exports = TB
  },
  6271: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => rI
    });
    var TB = ZB(63),
      JB = ZB(5115),
      oB = ZB.n(JB);
    const {
      getOwnPropertyNames: GB,
      getOwnPropertySymbols: vB
    } = Object, {
      hasOwnProperty: kB
    } = Object.prototype;

    function cB(BB, IB) {
      return function(ZB, TB, JB) {
        return BB(ZB, TB, JB) && IB(ZB, TB, JB)
      }
    }

    function nB(BB) {
      return function(IB, ZB, TB) {
        if (!IB || !ZB || "object" !== typeof IB || "object" !== typeof ZB) return BB(IB, ZB, TB);
        const {
          cache: JB
        } = TB, oB = JB.get(IB), GB = JB.get(ZB);
        if (oB && GB) return oB === ZB && GB === IB;
        JB.set(IB, ZB), JB.set(ZB, IB);
        const vB = BB(IB, ZB, TB);
        return JB.delete(IB), JB.delete(ZB), vB
      }
    }

    function hB(BB) {
      return GB(BB).concat(vB(BB))
    }
    const zB = Object.hasOwn || ((BB, IB) => kB.call(BB, IB));

    function FB(BB, IB) {
      return BB === IB || !BB && !IB && BB !== BB && IB !== IB
    }
    const {
      getOwnPropertyDescriptor: NB,
      keys: gB
    } = Object;

    function qB(BB, IB) {
      return BB.byteLength === IB.byteLength && aB(new Uint8Array(BB), new Uint8Array(IB))
    }

    function yB(BB, IB, ZB) {
      let TB = BB.length;
      if (IB.length !== TB) return !1;
      for (; TB-- > 0;)
        if (!ZB.equals(BB[TB], IB[TB], TB, TB, BB, IB, ZB)) return !1;
      return !0
    }

    function UB(BB, IB) {
      return BB.byteLength === IB.byteLength && aB(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength), new Uint8Array(IB.buffer, IB.byteOffset, IB.byteLength))
    }

    function WB(BB, IB) {
      return FB(BB.getTime(), IB.getTime())
    }

    function dB(BB, IB) {
      return BB.name === IB.name && BB.message === IB.message && BB.cause === IB.cause && BB.stack === IB.stack
    }

    function CB(BB, IB) {
      return BB === IB
    }

    function QB(BB, IB, ZB) {
      const TB = BB.size;
      if (TB !== IB.size) return !1;
      if (!TB) return !0;
      const JB = new Array(TB),
        oB = BB.entries();
      let GB, vB, kB = 0;
      for (;
        (GB = oB.next()) && !GB.done;) {
        const TB = IB.entries();
        let oB = !1,
          cB = 0;
        for (;
          (vB = TB.next()) && !vB.done;) {
          if (JB[cB]) {
            cB++;
            continue
          }
          const TB = GB.value,
            nB = vB.value;
          if (ZB.equals(TB[0], nB[0], kB, cB, BB, IB, ZB) && ZB.equals(TB[1], nB[1], TB[0], nB[0], BB, IB, ZB)) {
            oB = JB[cB] = !0;
            break
          }
          cB++
        }
        if (!oB) return !1;
        kB++
      }
      return !0
    }
    const sB = FB;

    function wB(BB, IB, ZB) {
      const TB = gB(BB);
      let JB = TB.length;
      if (gB(IB).length !== JB) return !1;
      for (; JB-- > 0;)
        if (!MB(BB, IB, ZB, TB[JB])) return !1;
      return !0
    }

    function OB(BB, IB, ZB) {
      const TB = hB(BB);
      let JB, oB, GB, vB = TB.length;
      if (hB(IB).length !== vB) return !1;
      for (; vB-- > 0;) {
        if (JB = TB[vB], !MB(BB, IB, ZB, JB)) return !1;
        if (oB = NB(BB, JB), GB = NB(IB, JB), (oB || GB) && (!oB || !GB || oB.configurable !== GB.configurable || oB.enumerable !== GB.enumerable || oB.writable !== GB.writable)) return !1
      }
      return !0
    }

    function YB(BB, IB) {
      return FB(BB.valueOf(), IB.valueOf())
    }

    function iB(BB, IB) {
      return BB.source === IB.source && BB.flags === IB.flags
    }

    function pB(BB, IB, ZB) {
      const TB = BB.size;
      if (TB !== IB.size) return !1;
      if (!TB) return !0;
      const JB = new Array(TB),
        oB = BB.values();
      let GB, vB;
      for (;
        (GB = oB.next()) && !GB.done;) {
        const TB = IB.values();
        let oB = !1,
          kB = 0;
        for (;
          (vB = TB.next()) && !vB.done;) {
          if (!JB[kB] && ZB.equals(GB.value, vB.value, GB.value, vB.value, BB, IB, ZB)) {
            oB = JB[kB] = !0;
            break
          }
          kB++
        }
        if (!oB) return !1
      }
      return !0
    }

    function aB(BB, IB) {
      let ZB = BB.byteLength;
      if (IB.byteLength !== ZB || BB.byteOffset !== IB.byteOffset) return !1;
      for (; ZB-- > 0;)
        if (BB[ZB] !== IB[ZB]) return !1;
      return !0
    }

    function HB(BB, IB) {
      return BB.hostname === IB.hostname && BB.pathname === IB.pathname && BB.protocol === IB.protocol && BB.port === IB.port && BB.hash === IB.hash && BB.username === IB.username && BB.password === IB.password
    }

    function MB(BB, IB, ZB, TB) {
      return !("_owner" !== TB && "__o" !== TB && "__v" !== TB || !BB.$$typeof && !IB.$$typeof) || zB(IB, TB) && ZB.equals(BB[TB], IB[TB], TB, TB, BB, IB, ZB)
    }
    const jB = {
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
      PB = Object.prototype.toString;

    function RB(BB) {
      let {
        areArrayBuffersEqual: IB,
        areArraysEqual: ZB,
        areDataViewsEqual: TB,
        areDatesEqual: JB,
        areErrorsEqual: oB,
        areFunctionsEqual: GB,
        areMapsEqual: vB,
        areNumbersEqual: kB,
        areObjectsEqual: cB,
        arePrimitiveWrappersEqual: nB,
        areRegExpsEqual: hB,
        areSetsEqual: zB,
        areTypedArraysEqual: FB,
        areUrlsEqual: NB,
        unknownTagComparators: gB
      } = BB;
      return function(BB, qB, yB) {
        if (BB === qB) return !0;
        if (null == BB || null == qB) return !1;
        const UB = typeof BB;
        if (UB !== typeof qB) return !1;
        if ("object" !== UB) return "number" === UB ? kB(BB, qB, yB) : "function" === UB && GB(BB, qB, yB);
        const WB = BB.constructor;
        if (WB !== qB.constructor) return !1;
        if (WB === Object) return cB(BB, qB, yB);
        if (Array.isArray(BB)) return ZB(BB, qB, yB);
        if (WB === Date) return JB(BB, qB, yB);
        if (WB === RegExp) return hB(BB, qB, yB);
        if (WB === Map) return vB(BB, qB, yB);
        if (WB === Set) return zB(BB, qB, yB);
        const dB = PB.call(BB);
        if ("[object Date]" === dB) return JB(BB, qB, yB);
        if ("[object RegExp]" === dB) return hB(BB, qB, yB);
        if ("[object Map]" === dB) return vB(BB, qB, yB);
        if ("[object Set]" === dB) return zB(BB, qB, yB);
        if ("[object Object]" === dB) return "function" !== typeof BB.then && "function" !== typeof qB.then && cB(BB, qB, yB);
        if ("[object URL]" === dB) return NB(BB, qB, yB);
        if ("[object Error]" === dB) return oB(BB, qB, yB);
        if ("[object Arguments]" === dB) return cB(BB, qB, yB);
        if (jB[dB]) return FB(BB, qB, yB);
        if ("[object ArrayBuffer]" === dB) return IB(BB, qB, yB);
        if ("[object DataView]" === dB) return TB(BB, qB, yB);
        if ("[object Boolean]" === dB || "[object Number]" === dB || "[object String]" === dB) return nB(BB, qB, yB);
        if (gB) {
          let IB = gB[dB];
          if (!IB) {
            const ZB = null != (CB = BB) ? CB[Symbol.toStringTag] : void 0;
            ZB && (IB = gB[ZB])
          }
          if (IB) return IB(BB, qB, yB)
        }
        var CB;
        return !1
      }
    }
    const rB = mB();
    mB({
      strict: !0
    }), mB({
      circular: !0
    }), mB({
      circular: !0,
      strict: !0
    }), mB({
      createInternalComparator: () => FB
    }), mB({
      strict: !0,
      createInternalComparator: () => FB
    }), mB({
      circular: !0,
      createInternalComparator: () => FB
    }), mB({
      circular: !0,
      createInternalComparator: () => FB,
      strict: !0
    });

    function mB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: IB = !1,
        createInternalComparator: ZB,
        createState: TB,
        strict: JB = !1
      } = BB, oB = function(BB) {
        let {
          circular: IB,
          createCustomConfig: ZB,
          strict: TB
        } = BB, JB = {
          areArrayBuffersEqual: qB,
          areArraysEqual: TB ? OB : yB,
          areDataViewsEqual: UB,
          areDatesEqual: WB,
          areErrorsEqual: dB,
          areFunctionsEqual: CB,
          areMapsEqual: TB ? cB(QB, OB) : QB,
          areNumbersEqual: sB,
          areObjectsEqual: TB ? OB : wB,
          arePrimitiveWrappersEqual: YB,
          areRegExpsEqual: iB,
          areSetsEqual: TB ? cB(pB, OB) : pB,
          areTypedArraysEqual: TB ? cB(aB, OB) : aB,
          areUrlsEqual: HB,
          unknownTagComparators: void 0
        };
        if (ZB && (JB = Object.assign({}, JB, ZB(JB))), IB) {
          const BB = nB(JB.areArraysEqual),
            IB = nB(JB.areMapsEqual),
            ZB = nB(JB.areObjectsEqual),
            TB = nB(JB.areSetsEqual);
          JB = Object.assign({}, JB, {
            areArraysEqual: BB,
            areMapsEqual: IB,
            areObjectsEqual: ZB,
            areSetsEqual: TB
          })
        }
        return JB
      }(BB), GB = RB(oB);
      var vB;
      return function(BB) {
        let {
          circular: IB,
          comparator: ZB,
          createState: TB,
          equals: JB,
          strict: oB
        } = BB;
        if (TB) return function(BB, GB) {
          const {
            cache: vB = (IB ? new WeakMap : void 0),
            meta: kB
          } = TB();
          return ZB(BB, GB, {
            cache: vB,
            equals: JB,
            meta: kB,
            strict: oB
          })
        };
        if (IB) return function(BB, IB) {
          return ZB(BB, IB, {
            cache: new WeakMap,
            equals: JB,
            meta: void 0,
            strict: oB
          })
        };
        const GB = {
          cache: void 0,
          equals: JB,
          meta: void 0,
          strict: oB
        };
        return function(BB, IB) {
          return ZB(BB, IB, GB)
        }
      }({
        circular: IB,
        comparator: GB,
        createState: TB,
        equals: ZB ? ZB(GB) : (vB = GB, function(BB, IB, ZB, TB, JB, oB, GB) {
          return vB(BB, IB, GB)
        }),
        strict: JB
      })
    }

    function XB(BB) {
      var IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZB = -1;
      requestAnimationFrame((function TB(JB) {
        ZB < 0 && (ZB = JB), JB - ZB > IB ? (BB(JB), ZB = -1) : function(BB) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(BB)
        }(TB)
      }))
    }

    function LB(BB) {
      return LB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, LB(BB)
    }

    function eB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return uB(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return uB(BB, IB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function fB() {
      var BB = function() {
          return null
        },
        IB = !1,
        ZB = function ZB(TB) {
          if (!IB) {
            if (Array.isArray(TB)) {
              if (!TB.length) return;
              var JB = eB(TB),
                oB = JB[0],
                GB = JB.slice(1);
              return "number" === typeof oB ? void XB(ZB.bind(null, GB), oB) : (ZB(oB), void XB(ZB.bind(null, GB)))
            }
            "object" === LB(TB) && BB(TB), "function" === typeof TB && TB()
          }
        };
      return {
        stop: function() {
          IB = !0
        },
        start: function(BB) {
          IB = !1, ZB(BB)
        },
        subscribe: function(IB) {
          return BB = IB,
            function() {
              BB = function() {
                return null
              }
            }
        }
      }
    }

    function lB(BB) {
      return lB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, lB(BB)
    }

    function AB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function tB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? AB(Object(ZB), !0).forEach((function(IB) {
          bB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : AB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function bB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" !== lB(BB) || null === BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" !== lB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" === lB(IB) ? IB : String(IB)
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }
    var xB = function(BB) {
        return BB
      },
      EB = function(BB, IB) {
        return Object.keys(IB).reduce((function(ZB, TB) {
          return tB(tB({}, ZB), {}, bB({}, TB, BB(TB, IB[TB])))
        }), {})
      },
      DB = function(BB, IB, ZB) {
        return BB.map((function(BB) {
          return "".concat((TB = BB, TB.replace(/([A-Z])/g, (function(BB) {
            return "-".concat(BB.toLowerCase())
          }))), " ").concat(IB, "ms ").concat(ZB);
          var TB
        })).join(",")
      };

    function KB(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        var ZB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != ZB) {
          var TB, JB, oB, GB, vB = [],
            kB = !0,
            cB = !1;
          try {
            if (oB = (ZB = ZB.call(BB)).next, 0 === IB) {
              if (Object(ZB) !== ZB) return;
              kB = !1
            } else
              for (; !(kB = (TB = oB.call(ZB)).done) && (vB.push(TB.value), vB.length !== IB); kB = !0);
          } catch (BB) {
            cB = !0, JB = BB
          } finally {
            try {
              if (!kB && null != ZB.return && (GB = ZB.return(), Object(GB) !== GB)) return
            } finally {
              if (cB) throw JB
            }
          }
          return vB
        }
      }(BB, IB) || SB(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function VB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return BI(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || SB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function SB(BB, IB) {
      if (BB) {
        if ("string" === typeof BB) return BI(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === ZB && BB.constructor && (ZB = BB.constructor.name), "Map" === ZB || "Set" === ZB ? Array.from(BB) : "Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB) ? BI(BB, IB) : void 0
      }
    }

    function BI(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }
    var II = 1e-4,
      ZI = function(BB, IB) {
        return [0, 3 * BB, 3 * IB - 6 * BB, 3 * BB - 3 * IB + 1]
      },
      TI = function(BB, IB) {
        return BB.map((function(BB, ZB) {
          return BB * Math.pow(IB, ZB)
        })).reduce((function(BB, IB) {
          return BB + IB
        }))
      },
      JI = function(BB, IB) {
        return function(ZB) {
          var TB = ZI(BB, IB);
          return TI(TB, ZB)
        }
      },
      oI = function() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        var TB = IB[0],
          JB = IB[1],
          oB = IB[2],
          GB = IB[3];
        if (1 === IB.length) switch (IB[0]) {
          case "linear":
            TB = 0, JB = 0, oB = 1, GB = 1;
            break;
          case "ease":
            TB = .25, JB = .1, oB = .25, GB = 1;
            break;
          case "ease-in":
            TB = .42, JB = 0, oB = 1, GB = 1;
            break;
          case "ease-out":
            TB = .42, JB = 0, oB = .58, GB = 1;
            break;
          case "ease-in-out":
            TB = 0, JB = 0, oB = .58, GB = 1;
            break;
          default:
            var vB = IB[0].split("(");
            if ("cubic-bezier" === vB[0] && 4 === vB[1].split(")")[0].split(",").length) {
              var kB = KB(vB[1].split(")")[0].split(",").map((function(BB) {
                return parseFloat(BB)
              })), 4);
              TB = kB[0], JB = kB[1], oB = kB[2], GB = kB[3]
            }
        } [TB, oB, JB, GB].every((function(BB) {
          return "number" === typeof BB && BB >= 0 && BB <= 1
        }));
        var cB, nB, hB = JI(TB, oB),
          zB = JI(JB, GB),
          FB = (cB = TB, nB = oB, function(BB) {
            var IB = ZI(cB, nB),
              ZB = [].concat(VB(IB.map((function(BB, IB) {
                return BB * IB
              })).slice(1)), [0]);
            return TI(ZB, BB)
          }),
          NB = function(BB) {
            for (var IB, ZB = BB > 1 ? 1 : BB, TB = ZB, JB = 0; JB < 8; ++JB) {
              var oB = hB(TB) - ZB,
                GB = FB(TB);
              if (Math.abs(oB - ZB) < II || GB < II) return zB(TB);
              TB = (IB = TB - oB / GB) > 1 ? 1 : IB < 0 ? 0 : IB
            }
            return zB(TB)
          };
        return NB.isStepper = !1, NB
      },
      GI = function() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        var TB = IB[0];
        if ("string" === typeof TB) switch (TB) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return oI(TB);
          case "spring":
            return function() {
              var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                IB = BB.stiff,
                ZB = void 0 === IB ? 100 : IB,
                TB = BB.damping,
                JB = void 0 === TB ? 8 : TB,
                oB = BB.dt,
                GB = void 0 === oB ? 17 : oB,
                vB = function(BB, IB, TB) {
                  var oB = TB + (-(BB - IB) * ZB - TB * JB) * GB / 1e3,
                    vB = TB * GB / 1e3 + BB;
                  return Math.abs(vB - IB) < II && Math.abs(oB) < II ? [IB, 0] : [vB, oB]
                };
              return vB.isStepper = !0, vB.dt = GB, vB
            }();
          default:
            if ("cubic-bezier" === TB.split("(")[0]) return oI(TB)
        }
        return "function" === typeof TB ? TB : null
      };

    function vI(BB) {
      return vI = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, vI(BB)
    }

    function kI(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return NI(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || FI(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cI(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function nI(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? cI(Object(ZB), !0).forEach((function(IB) {
          hI(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : cI(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function hI(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" !== vI(BB) || null === BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" !== vI(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" === vI(IB) ? IB : String(IB)
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function zI(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        var ZB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != ZB) {
          var TB, JB, oB, GB, vB = [],
            kB = !0,
            cB = !1;
          try {
            if (oB = (ZB = ZB.call(BB)).next, 0 === IB) {
              if (Object(ZB) !== ZB) return;
              kB = !1
            } else
              for (; !(kB = (TB = oB.call(ZB)).done) && (vB.push(TB.value), vB.length !== IB); kB = !0);
          } catch (BB) {
            cB = !0, JB = BB
          } finally {
            try {
              if (!kB && null != ZB.return && (GB = ZB.return(), Object(GB) !== GB)) return
            } finally {
              if (cB) throw JB
            }
          }
          return vB
        }
      }(BB, IB) || FI(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function FI(BB, IB) {
      if (BB) {
        if ("string" === typeof BB) return NI(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === ZB && BB.constructor && (ZB = BB.constructor.name), "Map" === ZB || "Set" === ZB ? Array.from(BB) : "Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB) ? NI(BB, IB) : void 0
      }
    }

    function NI(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }
    var gI = function(BB, IB, ZB) {
        return BB + (IB - BB) * ZB
      },
      qI = function(BB) {
        return BB.from !== BB.to
      },
      yI = function BB(IB, ZB, TB) {
        var JB = EB((function(BB, ZB) {
          if (qI(ZB)) {
            var TB = zI(IB(ZB.from, ZB.to, ZB.zq), 2),
              JB = TB[0],
              oB = TB[1];
            return nI(nI({}, ZB), {}, {
              from: JB,
              zq: oB
            })
          }
          return ZB
        }), ZB);
        return TB < 1 ? EB((function(BB, IB) {
          return qI(IB) ? nI(nI({}, IB), {}, {
            zq: gI(IB.zq, JB[BB].zq, TB),
            from: gI(IB.from, JB[BB].from, TB)
          }) : IB
        }), ZB) : BB(IB, JB, TB - 1)
      };
    const UI = function(BB, IB, ZB, TB, JB) {
      var oB, GB, vB, kB, cB = (oB = BB, GB = IB, [Object.keys(oB), Object.keys(GB)].reduce((function(BB, IB) {
          return BB.filter((function(BB) {
            return IB.includes(BB)
          }))
        }))),
        nB = cB.reduce((function(ZB, TB) {
          return nI(nI({}, ZB), {}, hI({}, TB, [BB[TB], IB[TB]]))
        }), {}),
        hB = cB.reduce((function(ZB, TB) {
          return nI(nI({}, ZB), {}, hI({}, TB, {
            from: BB[TB],
            zq: 0,
            to: IB[TB]
          }))
        }), {}),
        zB = -1,
        FB = function() {
          return null
        };
      return FB = ZB.isStepper ? function(TB) {
          vB || (vB = TB);
          var oB = (TB - vB) / ZB.dt;
          hB = yI(ZB, hB, oB), JB(nI(nI(nI({}, BB), IB), EB((function(BB, IB) {
            return IB.from
          }), hB))), vB = TB, Object.values(hB).filter(qI).length && (zB = requestAnimationFrame(FB))
        } : function(oB) {
          kB || (kB = oB);
          var GB = (oB - kB) / TB,
            vB = EB((function(BB, IB) {
              return gI.apply(void 0, kI(IB).concat([ZB(GB)]))
            }), nB);
          if (JB(nI(nI(nI({}, BB), IB), vB)), GB < 1) zB = requestAnimationFrame(FB);
          else {
            var cB = EB((function(BB, IB) {
              return gI.apply(void 0, kI(IB).concat([ZB(1)]))
            }), nB);
            JB(nI(nI(nI({}, BB), IB), cB))
          }
        },
        function() {
          return requestAnimationFrame(FB),
            function() {
              cancelAnimationFrame(zB)
            }
        }
    };

    function WI(BB) {
      return WI = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, WI(BB)
    }
    var dI = ["children", "QF", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function CI(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB, TB, JB = {},
          oB = Object.keys(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || (JB[ZB] = BB[ZB]);
        return JB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function QI(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return sI(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return sI(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return sI(BB, IB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sI(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function wI(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function OI(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? wI(Object(ZB), !0).forEach((function(IB) {
          YI(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : wI(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function YI(BB, IB, ZB) {
      return (IB = pI(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function iI(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, pI(TB.key), TB)
      }
    }

    function pI(BB) {
      var IB = function(BB, IB) {
        if ("object" !== WI(BB) || null === BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" !== WI(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" === WI(IB) ? IB : String(IB)
    }

    function aI(BB, IB) {
      return aI = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, aI(BB, IB)
    }

    function HI(BB) {
      var IB = function() {
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
        var ZB, TB = PI(BB);
        if (IB) {
          var JB = PI(this).constructor;
          ZB = Reflect.construct(TB, arguments, JB)
        } else ZB = TB.apply(this, arguments);
        return MI(this, ZB)
      }
    }

    function MI(BB, IB) {
      if (IB && ("object" === WI(IB) || "function" === typeof IB)) return IB;
      if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
      return jI(BB)
    }

    function jI(BB) {
      if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return BB
    }

    function PI(BB) {
      return PI = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, PI(BB)
    }
    var RI = function(BB) {
      ! function(BB, IB) {
        if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(IB && IB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), IB && aI(BB, IB)
      }(GB, BB);
      var IB, ZB, JB, oB = HI(GB);

      function GB(BB, IB) {
        var ZB;
        ! function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, GB);
        var TB = (ZB = oB.call(this, BB, IB)).props,
          JB = TB.isActive,
          vB = TB.attributeName,
          kB = TB.from,
          cB = TB.to,
          nB = TB.steps,
          hB = TB.children,
          zB = TB.duration;
        if (ZB.handleStyleChange = ZB.handleStyleChange.bind(jI(ZB)), ZB.changeStyle = ZB.changeStyle.bind(jI(ZB)), !JB || zB <= 0) return ZB.state = {
          style: {}
        }, "function" === typeof hB && (ZB.state = {
          style: cB
        }), MI(ZB);
        if (nB && nB.length) ZB.state = {
          style: nB[0].style
        };
        else if (kB) {
          if ("function" === typeof hB) return ZB.state = {
            style: kB
          }, MI(ZB);
          ZB.state = {
            style: vB ? YI({}, vB, kB) : kB
          }
        } else ZB.state = {
          style: {}
        };
        return ZB
      }
      return IB = GB, (ZB = [{
        key: "componentDidMount",
        value: function() {
          var BB = this.props,
            IB = BB.isActive,
            ZB = BB.canBegin;
          this.mounted = !0, IB && ZB && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(BB) {
          var IB = this.props,
            ZB = IB.isActive,
            TB = IB.canBegin,
            JB = IB.attributeName,
            oB = IB.shouldReAnimate,
            GB = IB.to,
            vB = IB.from,
            kB = this.state.style;
          if (TB)
            if (ZB) {
              if (!(rB(BB.to, GB) && BB.canBegin && BB.isActive)) {
                var cB = !BB.canBegin || !BB.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var nB = cB || oB ? vB : BB.to;
                if (this.state && kB) {
                  var hB = {
                    style: JB ? YI({}, JB, nB) : nB
                  };
                  (JB && kB[JB] !== nB || !JB && kB !== nB) && this.setState(hB)
                }
                this.runAnimation(OI(OI({}, this.props), {}, {
                  from: nB,
                  QF: 0
                }))
              }
            } else {
              var zB = {
                style: JB ? YI({}, JB, GB) : GB
              };
              this.state && kB && (JB && kB[JB] !== GB || !JB && kB !== GB) && this.setState(zB)
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
          var IB = this,
            ZB = BB.from,
            TB = BB.to,
            JB = BB.duration,
            oB = BB.easing,
            GB = BB.QF,
            vB = BB.onAnimationEnd,
            kB = BB.onAnimationStart,
            cB = UI(ZB, TB, GI(oB), JB, this.changeStyle);
          this.manager.start([kB, GB, function() {
            IB.stopJSAnimation = cB()
          }, JB, vB])
        }
      }, {
        key: "runStepAnimation",
        value: function(BB) {
          var IB = this,
            ZB = BB.steps,
            TB = BB.QF,
            JB = BB.onAnimationStart,
            oB = ZB[0],
            GB = oB.style,
            vB = oB.duration,
            kB = void 0 === vB ? 0 : vB;
          return this.manager.start([JB].concat(QI(ZB.reduce((function(BB, TB, JB) {
            if (0 === JB) return BB;
            var oB = TB.duration,
              GB = TB.easing,
              vB = void 0 === GB ? "ease" : GB,
              kB = TB.style,
              cB = TB.properties,
              nB = TB.onAnimationEnd,
              hB = JB > 0 ? ZB[JB - 1] : TB,
              zB = cB || Object.keys(kB);
            if ("function" === typeof vB || "spring" === vB) return [].concat(QI(BB), [IB.runJSAnimation.bind(IB, {
              from: hB.style,
              to: kB,
              duration: oB,
              easing: vB
            }), oB]);
            var FB = DB(zB, oB, vB),
              NB = OI(OI(OI({}, hB.style), kB), {}, {
                transition: FB
              });
            return [].concat(QI(BB), [NB, oB, nB]).filter(xB)
          }), [GB, Math.max(kB, TB)])), [BB.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(BB) {
          this.manager || (this.manager = fB());
          var IB = BB.QF,
            ZB = BB.duration,
            TB = BB.attributeName,
            JB = BB.to,
            oB = BB.easing,
            GB = BB.onAnimationStart,
            vB = BB.onAnimationEnd,
            kB = BB.steps,
            cB = BB.children,
            nB = this.manager;
          if (this.unSubscribe = nB.subscribe(this.handleStyleChange), "function" !== typeof oB && "function" !== typeof cB && "spring" !== oB)
            if (kB.length > 1) this.runStepAnimation(BB);
            else {
              var hB = TB ? YI({}, TB, JB) : JB,
                zB = DB(Object.keys(hB), ZB, oB);
              nB.start([GB, IB, OI(OI({}, hB), {}, {
                transition: zB
              }), ZB, vB])
            }
          else this.runJSAnimation(BB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this.props,
            IB = BB.children,
            ZB = (BB.QF, BB.duration),
            JB = (BB.attributeName, BB.easing, BB.isActive),
            oB = (BB.steps, BB.from, BB.to, BB.canBegin, BB.onAnimationEnd, BB.shouldReAnimate, BB.onAnimationReStart, CI(BB, dI)),
            GB = TB.Children.count(IB),
            vB = this.state.style;
          if ("function" === typeof IB) return IB(vB);
          if (!JB || 0 === GB || ZB <= 0) return IB;
          var kB = function(BB) {
            var IB = BB.props,
              ZB = IB.style,
              JB = void 0 === ZB ? {} : ZB,
              GB = IB.className;
            return (0, TB.cloneElement)(BB, OI(OI({}, oB), {}, {
              style: OI(OI({}, JB), vB),
              className: GB
            }))
          };
          return 1 === GB ? kB(TB.Children.only(IB)) : TB.createElement("div", null, TB.Children.map(IB, (function(BB) {
            return kB(BB)
          })))
        }
      }]) && iI(IB.prototype, ZB), JB && iI(IB, JB), Object.defineProperty(IB, "prototype", {
        writable: !1
      }), GB
    }(TB.PureComponent);
    RI.displayName = "Animate", RI.defaultProps = {
      QF: 0,
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
    }, RI.propTypes = {
      from: oB().oneOfType([oB().object, oB().string]),
      to: oB().oneOfType([oB().object, oB().string]),
      attributeName: oB().string,
      duration: oB().number,
      QF: oB().number,
      easing: oB().oneOfType([oB().string, oB().func]),
      steps: oB().arrayOf(oB().shape({
        duration: oB().number.isRequired,
        style: oB().object.isRequired,
        easing: oB().oneOfType([oB().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), oB().func]),
        properties: oB().arrayOf("string"),
        onAnimationEnd: oB().func
      })),
      children: oB().oneOfType([oB().node, oB().func]),
      isActive: oB().bool,
      canBegin: oB().bool,
      onAnimationEnd: oB().func,
      shouldReAnimate: oB().bool,
      onAnimationStart: oB().func,
      onAnimationReStart: oB().func
    };
    const rI = RI
  },
  6514: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => eB
    });
    var TB, JB = ZB(63),
      oB = ZB(5250),
      GB = ZB(6271),
      vB = ZB(5425),
      kB = ZB.n(vB),
      cB = ZB(6302),
      nB = ZB.n(cB),
      hB = ZB(5563),
      zB = ZB.n(hB),
      FB = ZB(5348),
      NB = ZB.n(FB),
      gB = ZB(6339),
      qB = ZB.n(gB),
      yB = ZB(6511),
      UB = ZB(6255),
      WB = ZB(6124),
      dB = ZB(6423),
      CB = ZB(6132),
      QB = ZB(5335),
      sB = ZB(6289),
      wB = ZB(5573),
      OB = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      YB = ["key"];

    function iB(BB) {
      return iB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, iB(BB)
    }

    function pB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function aB() {
      return aB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, aB.apply(this, arguments)
    }

    function HB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function MB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? HB(Object(ZB), !0).forEach((function(IB) {
          XB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : HB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function jB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, LB(TB.key), TB)
      }
    }

    function PB(BB, IB, ZB) {
      return IB = rB(IB),
        function(BB, IB) {
          if (IB && ("object" === iB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, RB() ? Reflect.construct(IB, ZB || [], rB(BB).constructor) : IB.apply(BB, ZB))
    }

    function RB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (RB = function() {
        return !!BB
      })()
    }

    function rB(BB) {
      return rB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, rB(BB)
    }

    function mB(BB, IB) {
      return mB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, mB(BB, IB)
    }

    function XB(BB, IB, ZB) {
      return (IB = LB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function LB(BB) {
      var IB = function(BB, IB) {
        if ("object" != iB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != iB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == iB(IB) ? IB : IB + ""
    }
    var eB = function(BB) {
      function IB() {
        var BB;
        ! function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, IB);
        for (var ZB = arguments.length, TB = new Array(ZB), JB = 0; JB < ZB; JB++) TB[JB] = arguments[JB];
        return XB(BB = PB(this, IB, [].concat(TB)), "state", {
          isAnimationFinished: !0
        }), XB(BB, "id", (0, QB.z)("recharts-area-")), XB(BB, "handleAnimationEnd", (function() {
          var IB = BB.props.onAnimationEnd;
          BB.setState({
            isAnimationFinished: !0
          }), kB()(IB) && IB()
        })), XB(BB, "handleAnimationStart", (function() {
          var IB = BB.props.onAnimationStart;
          BB.setState({
            isAnimationFinished: !1
          }), kB()(IB) && IB()
        })), BB
      }
      return function(BB, IB) {
        if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(IB && IB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), IB && mB(BB, IB)
      }(IB, BB), ZB = IB, TB = [{
        key: "renderDots",
        value: function(BB, ZB, TB) {
          var oB = this.props.isAnimationActive,
            GB = this.state.isAnimationFinished;
          if (oB && !GB) return null;
          var vB = this.props,
            kB = vB.dot,
            cB = vB.points,
            nB = vB.dataKey,
            hB = (0, wB.e)(this.props, !1),
            zB = (0, wB.e)(kB, !0),
            FB = cB.map((function(BB, ZB) {
              var TB = MB(MB(MB({
                key: "dot-".concat(ZB),
                r: 3
              }, hB), zB), {}, {
                index: ZB,
                cx: BB.x,
                cy: BB.y,
                dataKey: nB,
                value: BB.value,
                payload: BB.payload,
                points: cB
              });
              return IB.renderDotItem(kB, TB)
            })),
            NB = {
              clipPath: BB ? "url(#clipPath-".concat(ZB ? "" : "dots-").concat(TB, ")") : null
            };
          return JB.createElement(WB.e, aB({
            className: "recharts-area-dots"
          }, NB), FB)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(BB) {
          var IB = this.props,
            ZB = IB.baseLine,
            TB = IB.points,
            oB = IB.strokeWidth,
            GB = TB[0].x,
            vB = TB[TB.length - 1].x,
            kB = BB * Math.abs(GB - vB),
            cB = nB()(TB.map((function(BB) {
              return BB.y || 0
            })));
          return (0, QB.w)(ZB) && "number" === typeof ZB ? cB = Math.max(ZB, cB) : ZB && Array.isArray(ZB) && ZB.length && (cB = Math.max(nB()(ZB.map((function(BB) {
            return BB.y || 0
          }))), cB)), (0, QB.w)(cB) ? JB.createElement("rect", {
            x: GB < vB ? GB : GB - kB,
            y: 0,
            width: kB,
            height: Math.floor(cB + (oB ? parseInt("".concat(oB), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(BB) {
          var IB = this.props,
            ZB = IB.baseLine,
            TB = IB.points,
            oB = IB.strokeWidth,
            GB = TB[0].y,
            vB = TB[TB.length - 1].y,
            kB = BB * Math.abs(GB - vB),
            cB = nB()(TB.map((function(BB) {
              return BB.x || 0
            })));
          return (0, QB.w)(ZB) && "number" === typeof ZB ? cB = Math.max(ZB, cB) : ZB && Array.isArray(ZB) && ZB.length && (cB = Math.max(nB()(ZB.map((function(BB) {
            return BB.x || 0
          }))), cB)), (0, QB.w)(cB) ? JB.createElement("rect", {
            x: 0,
            y: GB < vB ? GB : GB - kB,
            width: cB + (oB ? parseInt("".concat(oB), 10) : 1),
            height: Math.floor(kB)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(BB) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(BB) : this.renderHorizontalRect(BB)
        }
      }, {
        key: "renderAreaStatically",
        value: function(BB, IB, ZB, TB) {
          var oB = this.props,
            GB = oB.layout,
            vB = oB.type,
            kB = oB.stroke,
            cB = oB.connectNulls,
            nB = oB.isRange,
            hB = (oB.ref, pB(oB, OB));
          return JB.createElement(WB.e, {
            clipPath: ZB ? "url(#clipPath-".concat(TB, ")") : null
          }, JB.createElement(yB.c, aB({}, (0, wB.e)(hB, !0), {
            points: BB,
            connectNulls: cB,
            type: vB,
            baseLine: IB,
            layout: GB,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== kB && JB.createElement(yB.c, aB({}, (0, wB.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: GB,
            type: vB,
            connectNulls: cB,
            fill: "none",
            points: BB
          })), "none" !== kB && nB && JB.createElement(yB.c, aB({}, (0, wB.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: GB,
            type: vB,
            connectNulls: cB,
            fill: "none",
            points: IB
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(BB, IB) {
          var ZB = this,
            TB = this.props,
            oB = TB.points,
            vB = TB.baseLine,
            kB = TB.isAnimationActive,
            cB = TB.animationBegin,
            nB = TB.animationDuration,
            hB = TB.animationEasing,
            FB = TB.animationId,
            gB = this.state,
            qB = gB.prevPoints,
            yB = gB.prevBaseLine;
          return JB.createElement(GB.e, {
            QF: cB,
            duration: nB,
            isActive: kB,
            easing: hB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(FB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(TB) {
            var GB = TB.t;
            if (qB) {
              var kB, cB = qB.length / oB.length,
                nB = oB.map((function(BB, IB) {
                  var ZB = Math.floor(IB * cB);
                  if (qB[ZB]) {
                    var TB = qB[ZB],
                      JB = (0, QB.q)(TB.x, BB.x),
                      oB = (0, QB.q)(TB.y, BB.y);
                    return MB(MB({}, BB), {}, {
                      x: JB(GB),
                      y: oB(GB)
                    })
                  }
                  return BB
                }));
              return kB = (0, QB.w)(vB) && "number" === typeof vB ? (0, QB.q)(yB, vB)(GB) : zB()(vB) || NB()(vB) ? (0, QB.q)(yB, 0)(GB) : vB.map((function(BB, IB) {
                var ZB = Math.floor(IB * cB);
                if (yB[ZB]) {
                  var TB = yB[ZB],
                    JB = (0, QB.q)(TB.x, BB.x),
                    oB = (0, QB.q)(TB.y, BB.y);
                  return MB(MB({}, BB), {}, {
                    x: JB(GB),
                    y: oB(GB)
                  })
                }
                return BB
              })), ZB.renderAreaStatically(nB, kB, BB, IB)
            }
            return JB.createElement(WB.e, null, JB.createElement("defs", null, JB.createElement("clipPath", {
              id: "animationClipPath-".concat(IB)
            }, ZB.renderClipRect(GB))), JB.createElement(WB.e, {
              clipPath: "url(#animationClipPath-".concat(IB, ")")
            }, ZB.renderAreaStatically(oB, vB, BB, IB)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(BB, IB) {
          var ZB = this.props,
            TB = ZB.points,
            JB = ZB.baseLine,
            oB = ZB.isAnimationActive,
            GB = this.state,
            vB = GB.prevPoints,
            kB = GB.prevBaseLine,
            cB = GB.totalLength;
          return oB && TB && TB.length && (!vB && cB > 0 || !qB()(vB, TB) || !qB()(kB, JB)) ? this.renderAreaWithAnimation(BB, IB) : this.renderAreaStatically(TB, JB, BB, IB)
        }
      }, {
        key: "render",
        value: function() {
          var BB, IB = this.props,
            ZB = IB.hide,
            TB = IB.dot,
            GB = IB.points,
            vB = IB.className,
            kB = IB.top,
            cB = IB.left,
            nB = IB.xAxis,
            hB = IB.yAxis,
            FB = IB.width,
            NB = IB.height,
            gB = IB.isAnimationActive,
            qB = IB.id;
          if (ZB || !GB || !GB.length) return null;
          var yB = this.state.isAnimationFinished,
            UB = 1 === GB.length,
            CB = (0, oB.c)("recharts-area", vB),
            QB = nB && nB.allowDataOverflow,
            sB = hB && hB.allowDataOverflow,
            OB = QB || sB,
            YB = zB()(qB) ? this.id : qB,
            iB = null !== (BB = (0, wB.e)(TB, !1)) && void 0 !== BB ? BB : {
              r: 3,
              strokeWidth: 2
            },
            pB = iB.r,
            aB = void 0 === pB ? 3 : pB,
            HB = iB.strokeWidth,
            MB = void 0 === HB ? 2 : HB,
            jB = ((0, wB.s)(TB) ? TB : {}).clipDot,
            PB = void 0 === jB || jB,
            RB = 2 * aB + MB;
          return JB.createElement(WB.e, {
            className: CB
          }, QB || sB ? JB.createElement("defs", null, JB.createElement("clipPath", {
            id: "clipPath-".concat(YB)
          }, JB.createElement("rect", {
            x: QB ? cB : cB - FB / 2,
            y: sB ? kB : kB - NB / 2,
            width: QB ? FB : 2 * FB,
            height: sB ? NB : 2 * NB
          })), !PB && JB.createElement("clipPath", {
            id: "clipPath-dots-".concat(YB)
          }, JB.createElement("rect", {
            x: cB - RB / 2,
            y: kB - RB / 2,
            width: FB + RB,
            height: NB + RB
          }))) : null, UB ? null : this.renderArea(OB, YB), (TB || UB) && this.renderDots(OB, PB, YB), (!gB || yB) && dB.b.renderCallByParent(this.props, GB))
        }
      }], vB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, IB) {
          return BB.animationId !== IB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curPoints: BB.points,
            curBaseLine: BB.baseLine,
            prevPoints: IB.curPoints,
            prevBaseLine: IB.curBaseLine
          } : BB.points !== IB.curPoints || BB.baseLine !== IB.curBaseLine ? {
            curPoints: BB.points,
            curBaseLine: BB.baseLine
          } : null
        }
      }], TB && jB(ZB.prototype, TB), vB && jB(ZB, vB), Object.defineProperty(ZB, "prototype", {
        writable: !1
      }), ZB;
      var ZB, TB, vB
    }(JB.PureComponent);
    TB = eB, XB(eB, "displayName", "Area"), XB(eB, "defaultProps", {
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
      isAnimationActive: !CB.e.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), XB(eB, "getBaseValue", (function(BB, IB, ZB, TB) {
      var JB = BB.layout,
        oB = BB.baseValue,
        GB = IB.props.baseValue,
        vB = null !== GB && void 0 !== GB ? GB : oB;
      if ((0, QB.w)(vB) && "number" === typeof vB) return vB;
      var kB = "horizontal" === JB ? TB : ZB,
        cB = kB.scale.domain();
      if ("number" === kB.type) {
        var nB = Math.max(cB[0], cB[1]),
          hB = Math.min(cB[0], cB[1]);
        return "dataMin" === vB ? hB : "dataMax" === vB || nB < 0 ? nB : Math.max(Math.min(cB[0], cB[1]), 0)
      }
      return "dataMin" === vB ? cB[0] : "dataMax" === vB ? cB[1] : cB[0]
    })), XB(eB, "getComposedData", (function(BB) {
      var IB, ZB = BB.props,
        JB = BB.item,
        oB = BB.xAxis,
        GB = BB.yAxis,
        vB = BB.xAxisTicks,
        kB = BB.yAxisTicks,
        cB = BB.bandSize,
        nB = BB.dataKey,
        hB = BB.stackedData,
        zB = BB.dataStartIndex,
        FB = BB.displayedData,
        NB = BB.offset,
        gB = ZB.layout,
        qB = hB && hB.length,
        yB = TB.getBaseValue(ZB, JB, oB, GB),
        UB = "horizontal" === gB,
        WB = !1,
        dB = FB.map((function(BB, IB) {
          var ZB;
          qB ? ZB = hB[zB + IB] : (ZB = (0, sB._)(BB, nB), Array.isArray(ZB) ? WB = !0 : ZB = [yB, ZB]);
          var TB = null == ZB[1] || qB && null == (0, sB._)(BB, nB);
          return UB ? {
            x: (0, sB.C)({
              axis: oB,
              ticks: vB,
              bandSize: cB,
              entry: BB,
              index: IB
            }),
            y: TB ? null : GB.scale(ZB[1]),
            value: ZB,
            payload: BB
          } : {
            x: TB ? null : oB.scale(ZB[1]),
            y: (0, sB.C)({
              axis: GB,
              ticks: kB,
              bandSize: cB,
              entry: BB,
              index: IB
            }),
            value: ZB,
            payload: BB
          }
        }));
      return IB = qB || WB ? dB.map((function(BB) {
        var IB = Array.isArray(BB.value) ? BB.value[0] : null;
        return UB ? {
          x: BB.x,
          y: null != IB && null != BB.y ? GB.scale(IB) : null
        } : {
          x: null != IB ? oB.scale(IB) : null,
          y: BB.y
        }
      })) : UB ? GB.scale(yB) : oB.scale(yB), MB({
        points: dB,
        baseLine: IB,
        layout: gB,
        isRange: WB
      }, NB)
    })), XB(eB, "renderDotItem", (function(BB, IB) {
      var ZB;
      if (JB.isValidElement(BB)) ZB = JB.cloneElement(BB, IB);
      else if (kB()(BB)) ZB = BB(IB);
      else {
        var TB = (0, oB.c)("recharts-area-dot", "boolean" !== typeof BB ? BB.className : ""),
          GB = IB.key,
          vB = pB(IB, YB);
        ZB = JB.createElement(UB.c, aB({}, vB, {
          key: GB,
          className: TB
        }))
      }
      return ZB
    }))
  },
  6408: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => tB
    });
    var TB = ZB(63),
      JB = ZB(5250),
      oB = ZB(6271),
      GB = ZB(6339),
      vB = ZB.n(GB),
      kB = ZB(5563),
      cB = ZB.n(kB),
      nB = ZB(6124),
      hB = ZB(6348),
      zB = ZB(6415),
      FB = ZB(6423),
      NB = ZB(5335),
      gB = ZB(5573),
      qB = ZB(6132),
      yB = ZB(6289),
      UB = ZB(5594),
      WB = ZB(6111),
      dB = ZB(6435),
      CB = ["x", "y"];

    function QB(BB) {
      return QB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, QB(BB)
    }

    function sB() {
      return sB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, sB.apply(this, arguments)
    }

    function wB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function OB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? wB(Object(ZB), !0).forEach((function(IB) {
          YB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : wB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function YB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != QB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != QB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == QB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function iB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function pB(BB, IB) {
      var ZB = BB.x,
        TB = BB.y,
        JB = iB(BB, CB),
        oB = "".concat(ZB),
        GB = parseInt(oB, 10),
        vB = "".concat(TB),
        kB = parseInt(vB, 10),
        cB = "".concat(IB.height || JB.height),
        nB = parseInt(cB, 10),
        hB = "".concat(IB.width || JB.width),
        zB = parseInt(hB, 10);
      return OB(OB(OB(OB(OB({}, IB), JB), GB ? {
        x: GB
      } : {}), kB ? {
        y: kB
      } : {}), {}, {
        height: nB,
        width: zB,
        name: IB.name,
        radius: IB.radius
      })
    }

    function aB(BB) {
      return TB.createElement(dB.e, sB({
        shapeType: "rectangle",
        propTransformer: pB,
        activeClassName: "recharts-active-bar"
      }, BB))
    }
    var HB, MB = ["value", "background"];

    function jB(BB) {
      return jB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, jB(BB)
    }

    function PB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function RB() {
      return RB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, RB.apply(this, arguments)
    }

    function rB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function mB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? rB(Object(ZB), !0).forEach((function(IB) {
          lB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : rB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function XB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, AB(TB.key), TB)
      }
    }

    function LB(BB, IB, ZB) {
      return IB = uB(IB),
        function(BB, IB) {
          if (IB && ("object" === jB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, eB() ? Reflect.construct(IB, ZB || [], uB(BB).constructor) : IB.apply(BB, ZB))
    }

    function eB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (eB = function() {
        return !!BB
      })()
    }

    function uB(BB) {
      return uB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, uB(BB)
    }

    function fB(BB, IB) {
      return fB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, fB(BB, IB)
    }

    function lB(BB, IB, ZB) {
      return (IB = AB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function AB(BB) {
      var IB = function(BB, IB) {
        if ("object" != jB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != jB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == jB(IB) ? IB : IB + ""
    }
    var tB = function(BB) {
      function IB() {
        var BB;
        ! function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, IB);
        for (var ZB = arguments.length, TB = new Array(ZB), JB = 0; JB < ZB; JB++) TB[JB] = arguments[JB];
        return lB(BB = LB(this, IB, [].concat(TB)), "state", {
          isAnimationFinished: !1
        }), lB(BB, "id", (0, NB.z)("recharts-bar-")), lB(BB, "handleAnimationEnd", (function() {
          var IB = BB.props.onAnimationEnd;
          BB.setState({
            isAnimationFinished: !0
          }), IB && IB()
        })), lB(BB, "handleAnimationStart", (function() {
          var IB = BB.props.onAnimationStart;
          BB.setState({
            isAnimationFinished: !1
          }), IB && IB()
        })), BB
      }
      return function(BB, IB) {
        if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(IB && IB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), IB && fB(BB, IB)
      }(IB, BB), ZB = IB, GB = [{
        key: "renderRectanglesStatically",
        value: function(BB) {
          var IB = this,
            ZB = this.props,
            JB = ZB.shape,
            oB = ZB.dataKey,
            GB = ZB.activeIndex,
            vB = ZB.activeBar,
            kB = (0, gB.e)(this.props, !1);
          return BB && BB.map((function(BB, ZB) {
            var cB = ZB === GB,
              hB = cB ? vB : JB,
              zB = mB(mB(mB({}, kB), BB), {}, {
                isActive: cB,
                option: hB,
                index: ZB,
                dataKey: oB,
                onAnimationStart: IB.handleAnimationStart,
                onAnimationEnd: IB.handleAnimationEnd
              });
            return TB.createElement(nB.e, RB({
              className: "recharts-bar-rectangle"
            }, (0, UB.k)(IB.props, BB, ZB), {
              key: "rectangle-".concat(null === BB || void 0 === BB ? void 0 : BB.x, "-").concat(null === BB || void 0 === BB ? void 0 : BB.y, "-").concat(null === BB || void 0 === BB ? void 0 : BB.value, "-").concat(ZB)
            }), TB.createElement(aB, zB))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var BB = this,
            IB = this.props,
            ZB = IB.data,
            JB = IB.layout,
            GB = IB.isAnimationActive,
            vB = IB.animationBegin,
            kB = IB.animationDuration,
            cB = IB.animationEasing,
            hB = IB.animationId,
            zB = this.state.prevData;
          return TB.createElement(oB.e, {
            QF: vB,
            duration: kB,
            isActive: GB,
            easing: cB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(hB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(IB) {
            var oB = IB.t,
              GB = ZB.map((function(BB, IB) {
                var ZB = zB && zB[IB];
                if (ZB) {
                  var TB = (0, NB.q)(ZB.x, BB.x),
                    GB = (0, NB.q)(ZB.y, BB.y),
                    vB = (0, NB.q)(ZB.width, BB.width),
                    kB = (0, NB.q)(ZB.height, BB.height);
                  return mB(mB({}, BB), {}, {
                    x: TB(oB),
                    y: GB(oB),
                    width: vB(oB),
                    height: kB(oB)
                  })
                }
                if ("horizontal" === JB) {
                  var cB = (0, NB.q)(0, BB.height)(oB);
                  return mB(mB({}, BB), {}, {
                    y: BB.y + BB.height - cB,
                    height: cB
                  })
                }
                var nB = (0, NB.q)(0, BB.width)(oB);
                return mB(mB({}, BB), {}, {
                  width: nB
                })
              }));
            return TB.createElement(nB.e, null, BB.renderRectanglesStatically(GB))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var BB = this.props,
            IB = BB.data,
            ZB = BB.isAnimationActive,
            TB = this.state.prevData;
          return !(ZB && IB && IB.length) || TB && vB()(TB, IB) ? this.renderRectanglesStatically(IB) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var BB = this,
            IB = this.props,
            ZB = IB.data,
            JB = IB.dataKey,
            oB = IB.activeIndex,
            GB = (0, gB.e)(this.props.background, !1);
          return ZB.map((function(IB, ZB) {
            IB.value;
            var vB = IB.background,
              kB = PB(IB, MB);
            if (!vB) return null;
            var cB = mB(mB(mB(mB(mB({}, kB), {}, {
              fill: "#eee"
            }, vB), GB), (0, UB.k)(BB.props, IB, ZB)), {}, {
              onAnimationStart: BB.handleAnimationStart,
              onAnimationEnd: BB.handleAnimationEnd,
              dataKey: JB,
              index: ZB,
              className: "recharts-bar-background-rectangle"
            });
            return TB.createElement(aB, RB({
              key: "background-bar-".concat(ZB),
              option: BB.props.background,
              isActive: ZB === oB
            }, cB))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(BB, IB) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var ZB = this.props,
            JB = ZB.data,
            oB = ZB.xAxis,
            GB = ZB.yAxis,
            vB = ZB.layout,
            kB = ZB.children,
            cB = (0, gB.g)(kB, hB.d);
          if (!cB) return null;
          var zB = "vertical" === vB ? JB[0].height / 2 : JB[0].width / 2,
            FB = function(BB, IB) {
              var ZB = Array.isArray(BB.value) ? BB.value[1] : BB.value;
              return {
                x: BB.x,
                y: BB.y,
                value: ZB,
                errorVal: (0, yB._)(BB, IB)
              }
            },
            NB = {
              clipPath: BB ? "url(#clipPath-".concat(IB, ")") : null
            };
          return TB.createElement(nB.e, NB, cB.map((function(BB) {
            return TB.cloneElement(BB, {
              key: "error-bar-".concat(IB, "-").concat(BB.props.dataKey),
              data: JB,
              xAxis: oB,
              yAxis: GB,
              layout: vB,
              offset: zB,
              dataPointFormatter: FB
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var BB = this.props,
            IB = BB.hide,
            ZB = BB.data,
            oB = BB.className,
            GB = BB.xAxis,
            vB = BB.yAxis,
            kB = BB.left,
            hB = BB.top,
            zB = BB.width,
            NB = BB.height,
            gB = BB.isAnimationActive,
            qB = BB.background,
            yB = BB.id;
          if (IB || !ZB || !ZB.length) return null;
          var UB = this.state.isAnimationFinished,
            WB = (0, JB.c)("recharts-bar", oB),
            dB = GB && GB.allowDataOverflow,
            CB = vB && vB.allowDataOverflow,
            QB = dB || CB,
            sB = cB()(yB) ? this.id : yB;
          return TB.createElement(nB.e, {
            className: WB
          }, dB || CB ? TB.createElement("defs", null, TB.createElement("clipPath", {
            id: "clipPath-".concat(sB)
          }, TB.createElement("rect", {
            x: dB ? kB : kB - zB / 2,
            y: CB ? hB : hB - NB / 2,
            width: dB ? zB : 2 * zB,
            height: CB ? NB : 2 * NB
          }))) : null, TB.createElement(nB.e, {
            className: "recharts-bar-rectangles",
            clipPath: QB ? "url(#clipPath-".concat(sB, ")") : null
          }, qB ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(QB, sB), (!gB || UB) && FB.b.renderCallByParent(this.props, ZB))
        }
      }], kB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, IB) {
          return BB.animationId !== IB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curData: BB.data,
            prevData: IB.curData
          } : BB.data !== IB.curData ? {
            curData: BB.data
          } : null
        }
      }], GB && XB(ZB.prototype, GB), kB && XB(ZB, kB), Object.defineProperty(ZB, "prototype", {
        writable: !1
      }), ZB;
      var ZB, GB, kB
    }(TB.PureComponent);
    HB = tB, lB(tB, "displayName", "Bar"), lB(tB, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !qB.e.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), lB(tB, "getComposedData", (function(BB) {
      var IB = BB.props,
        ZB = BB.item,
        TB = BB.barPosition,
        JB = BB.bandSize,
        oB = BB.xAxis,
        GB = BB.yAxis,
        vB = BB.xAxisTicks,
        kB = BB.yAxisTicks,
        cB = BB.stackedData,
        nB = BB.dataStartIndex,
        hB = BB.displayedData,
        FB = BB.offset,
        qB = (0, yB.l)(TB, ZB);
      if (!qB) return null;
      var UB = IB.layout,
        dB = ZB.type.defaultProps,
        CB = void 0 !== dB ? mB(mB({}, dB), ZB.props) : ZB.props,
        QB = CB.dataKey,
        sB = CB.children,
        wB = CB.minPointSize,
        OB = "horizontal" === UB ? GB : oB,
        YB = cB ? OB.scale.domain() : null,
        iB = (0, yB.x)({
          numericAxis: OB
        }),
        pB = (0, gB.g)(sB, zB.e),
        aB = hB.map((function(BB, IB) {
          var TB, hB, zB, FB, gB, dB;
          cB ? TB = (0, yB.qb)(cB[nB + IB], YB) : (TB = (0, yB._)(BB, QB), Array.isArray(TB) || (TB = [iB, TB]));
          var CB = function(BB) {
            var IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(ZB, TB) {
              if ("number" === typeof BB) return BB;
              var JB = (0, NB.w)(ZB) || (0, NB.s)(ZB);
              return JB ? BB(ZB, TB) : (JB || (0, WB.d)(!1), IB)
            }
          }(wB, HB.defaultProps.minPointSize)(TB[1], IB);
          if ("horizontal" === UB) {
            var sB, OB = [GB.scale(TB[0]), GB.scale(TB[1])],
              aB = OB[0],
              MB = OB[1];
            hB = (0, yB.y)({
              axis: oB,
              ticks: vB,
              bandSize: JB,
              offset: qB.offset,
              entry: BB,
              index: IB
            }), zB = null !== (sB = null !== MB && void 0 !== MB ? MB : aB) && void 0 !== sB ? sB : void 0, FB = qB.size;
            var jB = aB - MB;
            if (gB = Number.isNaN(jB) ? 0 : jB, dB = {
                x: hB,
                y: GB.y,
                width: FB,
                height: GB.height
              }, Math.abs(CB) > 0 && Math.abs(gB) < Math.abs(CB)) {
              var PB = (0, NB.y)(gB || CB) * (Math.abs(CB) - Math.abs(gB));
              zB -= PB, gB += PB
            }
          } else {
            var RB = [oB.scale(TB[0]), oB.scale(TB[1])],
              rB = RB[0],
              XB = RB[1];
            if (hB = rB, zB = (0, yB.y)({
                axis: GB,
                ticks: kB,
                bandSize: JB,
                offset: qB.offset,
                entry: BB,
                index: IB
              }), FB = XB - rB, gB = qB.size, dB = {
                x: oB.x,
                y: zB,
                width: oB.width,
                height: gB
              }, Math.abs(CB) > 0 && Math.abs(FB) < Math.abs(CB)) FB += (0, NB.y)(FB || CB) * (Math.abs(CB) - Math.abs(FB))
          }
          return mB(mB(mB({}, BB), {}, {
            x: hB,
            y: zB,
            width: FB,
            height: gB,
            value: cB ? TB : TB[1],
            payload: BB,
            background: dB
          }, pB && pB[IB] && pB[IB].props), {}, {
            tooltipPayload: [(0, yB.Z)(ZB, BB)],
            tooltipPosition: {
              x: hB + FB / 2,
              y: zB + gB / 2
            }
          })
        }));
      return mB({
        data: aB,
        layout: UB
      }, FB)
    }))
  },
  6534: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => jB
    });
    var TB = ZB(63),
      JB = ZB(5425),
      oB = ZB.n(JB),
      GB = ZB(5357),
      vB = ZB.n(GB),
      kB = ZB(5250),
      cB = ZB(5592),
      nB = ZB(6124),
      hB = ZB(6276),
      zB = ZB(6364),
      FB = ZB(5335),
      NB = ZB(5594),
      gB = ZB(5573),
      qB = ZB(6537),
      yB = ["viewBox"],
      UB = ["viewBox"],
      WB = ["ticks"];

    function dB(BB) {
      return dB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, dB(BB)
    }

    function CB() {
      return CB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, CB.apply(this, arguments)
    }

    function QB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function sB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? QB(Object(ZB), !0).forEach((function(IB) {
          HB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : QB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function wB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function OB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, MB(TB.key), TB)
      }
    }

    function YB(BB, IB, ZB) {
      return IB = pB(IB),
        function(BB, IB) {
          if (IB && ("object" === dB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, iB() ? Reflect.construct(IB, ZB || [], pB(BB).constructor) : IB.apply(BB, ZB))
    }

    function iB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (iB = function() {
        return !!BB
      })()
    }

    function pB(BB) {
      return pB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, pB(BB)
    }

    function aB(BB, IB) {
      return aB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, aB(BB, IB)
    }

    function HB(BB, IB, ZB) {
      return (IB = MB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function MB(BB) {
      var IB = function(BB, IB) {
        if ("object" != dB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != dB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == dB(IB) ? IB : IB + ""
    }
    var jB = function(BB) {
      function IB(BB) {
        var ZB;
        return function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, IB), (ZB = YB(this, IB, [BB])).state = {
          fontSize: "",
          letterSpacing: ""
        }, ZB
      }
      return function(BB, IB) {
        if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(IB && IB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), IB && aB(BB, IB)
      }(IB, BB), ZB = IB, GB = [{
        key: "renderTickItem",
        value: function(BB, IB, ZB) {
          var JB = (0, kB.c)(IB.className, "recharts-cartesian-axis-tick-value");
          return TB.isValidElement(BB) ? TB.cloneElement(BB, sB(sB({}, IB), {}, {
            className: JB
          })) : oB()(BB) ? BB(sB(sB({}, IB), {}, {
            className: JB
          })) : TB.createElement(hB.e, CB({}, IB, {
            className: "recharts-cartesian-axis-tick-value"
          }), ZB)
        }
      }], (JB = [{
        key: "shouldComponentUpdate",
        value: function(BB, IB) {
          var ZB = BB.viewBox,
            TB = wB(BB, yB),
            JB = this.props,
            oB = JB.viewBox,
            GB = wB(JB, UB);
          return !(0, cB.c)(ZB, oB) || !(0, cB.c)(TB, GB) || !(0, cB.c)(IB, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var BB = this.layerReference;
          if (BB) {
            var IB = BB.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            IB && this.setState({
              fontSize: window.getComputedStyle(IB).fontSize,
              letterSpacing: window.getComputedStyle(IB).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(BB) {
          var IB, ZB, TB, JB, oB, GB, vB = this.props,
            kB = vB.x,
            cB = vB.y,
            nB = vB.width,
            hB = vB.height,
            zB = vB.orientation,
            NB = vB.tickSize,
            gB = vB.mirror,
            qB = vB.tickMargin,
            yB = gB ? -1 : 1,
            UB = BB.tickSize || NB,
            WB = (0, FB.w)(BB.tickCoord) ? BB.tickCoord : BB.coordinate;
          switch (zB) {
            case "top":
              IB = ZB = BB.coordinate, GB = (TB = (JB = cB + +!gB * hB) - yB * UB) - yB * qB, oB = WB;
              break;
            case "left":
              TB = JB = BB.coordinate, oB = (IB = (ZB = kB + +!gB * nB) - yB * UB) - yB * qB, GB = WB;
              break;
            case "right":
              TB = JB = BB.coordinate, oB = (IB = (ZB = kB + +gB * nB) + yB * UB) + yB * qB, GB = WB;
              break;
            default:
              IB = ZB = BB.coordinate, GB = (TB = (JB = cB + +gB * hB) + yB * UB) + yB * qB, oB = WB
          }
          return {
            line: {
              x1: IB,
              y1: TB,
              x2: ZB,
              y2: JB
            },
            Iz: {
              x: oB,
              y: GB
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var BB, IB = this.props,
            ZB = IB.orientation,
            TB = IB.mirror;
          switch (ZB) {
            case "left":
              BB = TB ? "start" : "end";
              break;
            case "right":
              BB = TB ? "end" : "start";
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
            IB = BB.orientation,
            ZB = BB.mirror,
            TB = "end";
          switch (IB) {
            case "left":
            case "right":
              TB = "middle";
              break;
            case "top":
              TB = ZB ? "start" : "end";
              break;
            default:
              TB = ZB ? "end" : "start"
          }
          return TB
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var BB = this.props,
            IB = BB.x,
            ZB = BB.y,
            JB = BB.width,
            oB = BB.height,
            GB = BB.orientation,
            cB = BB.mirror,
            nB = BB.axisLine,
            hB = sB(sB(sB({}, (0, gB.e)(this.props, !1)), (0, gB.e)(nB, !1)), {}, {
              fill: "none"
            });
          if ("top" === GB || "bottom" === GB) {
            var zB = +("top" === GB && !cB || "bottom" === GB && cB);
            hB = sB(sB({}, hB), {}, {
              x1: IB,
              y1: ZB + zB * oB,
              x2: IB + JB,
              y2: ZB + zB * oB
            })
          } else {
            var FB = +("left" === GB && !cB || "right" === GB && cB);
            hB = sB(sB({}, hB), {}, {
              x1: IB + FB * JB,
              y1: ZB,
              x2: IB + FB * JB,
              y2: ZB + oB
            })
          }
          return TB.createElement("line", CB({}, hB, {
            className: (0, kB.c)("recharts-cartesian-axis-line", vB()(nB, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(BB, ZB, JB) {
          var GB = this,
            cB = this.props,
            hB = cB.tickLine,
            zB = cB.stroke,
            FB = cB.Iz,
            yB = cB.tickFormatter,
            UB = cB.unit,
            WB = (0, qB.e)(sB(sB({}, this.props), {}, {
              ticks: BB
            }), ZB, JB),
            dB = this.getTickTextAnchor(),
            QB = this.getTickVerticalAnchor(),
            wB = (0, gB.e)(this.props, !1),
            OB = (0, gB.e)(FB, !1),
            YB = sB(sB({}, wB), {}, {
              fill: "none"
            }, (0, gB.e)(hB, !1)),
            iB = WB.map((function(BB, ZB) {
              var JB = GB.getTickLineCoord(BB),
                cB = JB.line,
                gB = JB.Iz,
                qB = sB(sB(sB(sB({
                  textAnchor: dB,
                  verticalAnchor: QB
                }, wB), {}, {
                  stroke: "none",
                  fill: zB
                }, OB), gB), {}, {
                  index: ZB,
                  payload: BB,
                  visibleTicksCount: WB.length,
                  tickFormatter: yB
                });
              return TB.createElement(nB.e, CB({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(BB.value, "-").concat(BB.coordinate, "-").concat(BB.tickCoord)
              }, (0, NB.k)(GB.props, BB, ZB)), hB && TB.createElement("line", CB({}, YB, cB, {
                className: (0, kB.c)("recharts-cartesian-axis-tick-line", vB()(hB, "className"))
              })), FB && IB.renderTickItem(FB, qB, "".concat(oB()(yB) ? yB(BB.value, ZB) : BB.value).concat(UB || "")))
            }));
          return TB.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, iB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this,
            IB = this.props,
            ZB = IB.axisLine,
            JB = IB.width,
            GB = IB.height,
            vB = IB.ticksGenerator,
            cB = IB.className;
          if (IB.hide) return null;
          var hB = this.props,
            FB = hB.ticks,
            NB = wB(hB, WB),
            gB = FB;
          return oB()(vB) && (gB = FB && FB.length > 0 ? vB(this.props) : vB(NB)), JB <= 0 || GB <= 0 || !gB || !gB.length ? null : TB.createElement(nB.e, {
            className: (0, kB.c)("recharts-cartesian-axis", cB),
            ref: function(IB) {
              BB.layerReference = IB
            }
          }, ZB && this.renderAxisLine(), this.renderTicks(gB, this.state.fontSize, this.state.letterSpacing), zB.e.renderCallByParent(this.props))
        }
      }]) && OB(ZB.prototype, JB), GB && OB(ZB, GB), Object.defineProperty(ZB, "prototype", {
        writable: !1
      }), ZB;
      var ZB, JB, GB
    }(TB.Component);
    HB(jB, "displayName", "CartesianAxis"), HB(jB, "defaultProps", {
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
      Iz: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6547: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => HB
    });
    var TB = ZB(63),
      JB = ZB(5425),
      oB = ZB.n(JB),
      GB = ZB(5570),
      vB = ZB(5335),
      kB = ZB(5573),
      cB = ZB(6289),
      nB = ZB(6537),
      hB = ZB(6534),
      zB = ZB(6488),
      FB = ["x1", "y1", "x2", "y2", "key"],
      NB = ["offset"];

    function gB(BB) {
      return gB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, gB(BB)
    }

    function qB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function yB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? qB(Object(ZB), !0).forEach((function(IB) {
          UB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : qB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function UB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != gB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != gB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == gB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function WB() {
      return WB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, WB.apply(this, arguments)
    }

    function dB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }
    var CB = function(BB) {
      var IB = BB.fill;
      if (!IB || "none" === IB) return null;
      var ZB = BB.fillOpacity,
        JB = BB.x,
        oB = BB.y,
        GB = BB.width,
        vB = BB.height,
        kB = BB.ry;
      return TB.createElement("rect", {
        x: JB,
        y: oB,
        ry: kB,
        width: GB,
        height: vB,
        stroke: "none",
        fill: IB,
        fillOpacity: ZB,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function QB(BB, IB) {
      var ZB;
      if (TB.isValidElement(BB)) ZB = TB.cloneElement(BB, IB);
      else if (oB()(BB)) ZB = BB(IB);
      else {
        var JB = IB.x1,
          GB = IB.y1,
          vB = IB.x2,
          cB = IB.y2,
          nB = IB.key,
          hB = dB(IB, FB),
          zB = (0, kB.e)(hB, !1),
          gB = (zB.offset, dB(zB, NB));
        ZB = TB.createElement("line", WB({}, gB, {
          x1: JB,
          y1: GB,
          x2: vB,
          y2: cB,
          fill: "none",
          key: nB
        }))
      }
      return ZB
    }

    function sB(BB) {
      var IB = BB.x,
        ZB = BB.width,
        JB = BB.horizontal,
        oB = void 0 === JB || JB,
        GB = BB.horizontalPoints;
      if (!oB || !GB || !GB.length) return null;
      var vB = GB.map((function(TB, JB) {
        var GB = yB(yB({}, BB), {}, {
          x1: IB,
          y1: TB,
          x2: IB + ZB,
          y2: TB,
          key: "line-".concat(JB),
          index: JB
        });
        return QB(oB, GB)
      }));
      return TB.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, vB)
    }

    function wB(BB) {
      var IB = BB.y,
        ZB = BB.height,
        JB = BB.vertical,
        oB = void 0 === JB || JB,
        GB = BB.verticalPoints;
      if (!oB || !GB || !GB.length) return null;
      var vB = GB.map((function(TB, JB) {
        var GB = yB(yB({}, BB), {}, {
          x1: TB,
          y1: IB,
          x2: TB,
          y2: IB + ZB,
          key: "line-".concat(JB),
          index: JB
        });
        return QB(oB, GB)
      }));
      return TB.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, vB)
    }

    function OB(BB) {
      var IB = BB.horizontalFill,
        ZB = BB.fillOpacity,
        JB = BB.x,
        oB = BB.y,
        GB = BB.width,
        vB = BB.height,
        kB = BB.horizontalPoints,
        cB = BB.horizontal;
      if (!(void 0 === cB || cB) || !IB || !IB.length) return null;
      var nB = kB.map((function(BB) {
        return Math.round(BB + oB - oB)
      })).sort((function(BB, IB) {
        return BB - IB
      }));
      oB !== nB[0] && nB.unshift(0);
      var hB = nB.map((function(BB, kB) {
        var cB = !nB[kB + 1] ? oB + vB - BB : nB[kB + 1] - BB;
        if (cB <= 0) return null;
        var hB = kB % IB.length;
        return TB.createElement("rect", {
          key: "react-".concat(kB),
          y: BB,
          x: JB,
          height: cB,
          width: GB,
          stroke: "none",
          fill: IB[hB],
          fillOpacity: ZB,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return TB.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, hB)
    }

    function YB(BB) {
      var IB = BB.vertical,
        ZB = void 0 === IB || IB,
        JB = BB.verticalFill,
        oB = BB.fillOpacity,
        GB = BB.x,
        vB = BB.y,
        kB = BB.width,
        cB = BB.height,
        nB = BB.verticalPoints;
      if (!ZB || !JB || !JB.length) return null;
      var hB = nB.map((function(BB) {
        return Math.round(BB + GB - GB)
      })).sort((function(BB, IB) {
        return BB - IB
      }));
      GB !== hB[0] && hB.unshift(0);
      var zB = hB.map((function(BB, IB) {
        var ZB = !hB[IB + 1] ? GB + kB - BB : hB[IB + 1] - BB;
        if (ZB <= 0) return null;
        var nB = IB % JB.length;
        return TB.createElement("rect", {
          key: "react-".concat(IB),
          x: BB,
          y: vB,
          width: ZB,
          height: cB,
          stroke: "none",
          fill: JB[nB],
          fillOpacity: oB,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return TB.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, zB)
    }
    var iB = function(BB, IB) {
        var ZB = BB.xAxis,
          TB = BB.width,
          JB = BB.height,
          oB = BB.offset;
        return (0, cB.G)((0, nB.e)(yB(yB(yB({}, hB.d.defaultProps), ZB), {}, {
          ticks: (0, cB.W)(ZB, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: TB,
            height: JB
          }
        })), oB.left, oB.left + oB.width, IB)
      },
      pB = function(BB, IB) {
        var ZB = BB.yAxis,
          TB = BB.width,
          JB = BB.height,
          oB = BB.offset;
        return (0, cB.G)((0, nB.e)(yB(yB(yB({}, hB.d.defaultProps), ZB), {}, {
          ticks: (0, cB.W)(ZB, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: TB,
            height: JB
          }
        })), oB.top, oB.top + oB.height, IB)
      },
      aB = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function HB(BB) {
      var IB, ZB, JB, kB, cB, nB, hB = (0, zB.k)(),
        FB = (0, zB.i)(),
        NB = (0, zB.n)(),
        qB = yB(yB({}, BB), {}, {
          stroke: null !== (IB = BB.stroke) && void 0 !== IB ? IB : aB.stroke,
          fill: null !== (ZB = BB.fill) && void 0 !== ZB ? ZB : aB.fill,
          horizontal: null !== (JB = BB.horizontal) && void 0 !== JB ? JB : aB.horizontal,
          horizontalFill: null !== (kB = BB.horizontalFill) && void 0 !== kB ? kB : aB.horizontalFill,
          vertical: null !== (cB = BB.vertical) && void 0 !== cB ? cB : aB.vertical,
          verticalFill: null !== (nB = BB.verticalFill) && void 0 !== nB ? nB : aB.verticalFill,
          x: (0, vB.w)(BB.x) ? BB.x : NB.left,
          y: (0, vB.w)(BB.y) ? BB.y : NB.top,
          width: (0, vB.w)(BB.width) ? BB.width : NB.width,
          height: (0, vB.w)(BB.height) ? BB.height : NB.height
        }),
        UB = qB.x,
        dB = qB.y,
        QB = qB.width,
        HB = qB.height,
        MB = qB.syncWithTicks,
        jB = qB.horizontalValues,
        PB = qB.verticalValues,
        RB = (0, zB.f)(),
        rB = (0, zB.z)();
      if (!(0, vB.w)(QB) || QB <= 0 || !(0, vB.w)(HB) || HB <= 0 || !(0, vB.w)(UB) || UB !== +UB || !(0, vB.w)(dB) || dB !== +dB) return null;
      var mB = qB.verticalCoordinatesGenerator || iB,
        XB = qB.horizontalCoordinatesGenerator || pB,
        LB = qB.horizontalPoints,
        eB = qB.verticalPoints;
      if ((!LB || !LB.length) && oB()(XB)) {
        var uB = jB && jB.length,
          fB = XB({
            yAxis: rB ? yB(yB({}, rB), {}, {
              ticks: uB ? jB : rB.ticks
            }) : void 0,
            width: hB,
            height: FB,
            offset: NB
          }, !!uB || MB);
        (0, GB.b)(Array.isArray(fB), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(gB(fB), "]")), Array.isArray(fB) && (LB = fB)
      }
      if ((!eB || !eB.length) && oB()(mB)) {
        var lB = PB && PB.length,
          AB = mB({
            xAxis: RB ? yB(yB({}, RB), {}, {
              ticks: lB ? PB : RB.ticks
            }) : void 0,
            width: hB,
            height: FB,
            offset: NB
          }, !!lB || MB);
        (0, GB.b)(Array.isArray(AB), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(gB(AB), "]")), Array.isArray(AB) && (eB = AB)
      }
      return TB.createElement("g", {
        className: "recharts-cartesian-grid"
      }, TB.createElement(CB, {
        fill: qB.fill,
        fillOpacity: qB.fillOpacity,
        x: qB.x,
        y: qB.y,
        width: qB.width,
        height: qB.height,
        ry: qB.ry
      }), TB.createElement(sB, WB({}, qB, {
        offset: NB,
        horizontalPoints: LB,
        xAxis: RB,
        yAxis: rB
      })), TB.createElement(wB, WB({}, qB, {
        offset: NB,
        verticalPoints: eB,
        xAxis: RB,
        yAxis: rB
      })), TB.createElement(OB, WB({}, qB, {
        horizontalPoints: LB
      })), TB.createElement(YB, WB({}, qB, {
        verticalPoints: eB
      })))
    }
    HB.displayName = "CartesianGrid"
  },
  6348: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => dB
    });
    var TB = ZB(63),
      JB = ZB(6111),
      oB = ZB(6124),
      GB = ZB(5573),
      vB = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function kB(BB) {
      return kB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, kB(BB)
    }

    function cB() {
      return cB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, cB.apply(this, arguments)
    }

    function nB(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        var ZB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != ZB) {
          var TB, JB, oB, GB, vB = [],
            kB = !0,
            cB = !1;
          try {
            if (oB = (ZB = ZB.call(BB)).next, 0 === IB) {
              if (Object(ZB) !== ZB) return;
              kB = !1
            } else
              for (; !(kB = (TB = oB.call(ZB)).done) && (vB.push(TB.value), vB.length !== IB); kB = !0);
          } catch (BB) {
            cB = !0, JB = BB
          } finally {
            try {
              if (!kB && null != ZB.return && (GB = ZB.return(), Object(GB) !== GB)) return
            } finally {
              if (cB) throw JB
            }
          }
          return vB
        }
      }(BB, IB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return hB(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return hB(BB, IB)
      }(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function zB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function FB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, WB(TB.key), TB)
      }
    }

    function NB(BB, IB, ZB) {
      return IB = qB(IB),
        function(BB, IB) {
          if (IB && ("object" === kB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, gB() ? Reflect.construct(IB, ZB || [], qB(BB).constructor) : IB.apply(BB, ZB))
    }

    function gB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (gB = function() {
        return !!BB
      })()
    }

    function qB(BB) {
      return qB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, qB(BB)
    }

    function yB(BB, IB) {
      return yB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, yB(BB, IB)
    }

    function UB(BB, IB, ZB) {
      return (IB = WB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function WB(BB) {
      var IB = function(BB, IB) {
        if ("object" != kB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != kB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == kB(IB) ? IB : IB + ""
    }
    var dB = function(BB) {
      function IB() {
        return function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, IB), NB(this, IB, arguments)
      }
      return function(BB, IB) {
        if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(IB && IB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), IB && yB(BB, IB)
      }(IB, BB), ZB = IB, (kB = [{
        key: "render",
        value: function() {
          var BB = this.props,
            IB = BB.offset,
            ZB = BB.layout,
            kB = BB.width,
            hB = BB.dataKey,
            FB = BB.data,
            NB = BB.dataPointFormatter,
            gB = BB.xAxis,
            qB = BB.yAxis,
            yB = zB(BB, vB),
            UB = (0, GB.e)(yB, !1);
          "x" === this.props.direction && "number" !== gB.type && (0, JB.d)(!1);
          var WB = FB.map((function(BB) {
            var JB = NB(BB, hB),
              GB = JB.x,
              vB = JB.y,
              zB = JB.value,
              FB = JB.errorVal;
            if (!FB) return null;
            var yB, WB, dB = [];
            if (Array.isArray(FB)) {
              var CB = nB(FB, 2);
              yB = CB[0], WB = CB[1]
            } else yB = WB = FB;
            if ("vertical" === ZB) {
              var QB = gB.scale,
                sB = vB + IB,
                wB = sB + kB,
                OB = sB - kB,
                YB = QB(zB - yB),
                iB = QB(zB + WB);
              dB.push({
                x1: iB,
                y1: wB,
                x2: iB,
                y2: OB
              }), dB.push({
                x1: YB,
                y1: sB,
                x2: iB,
                y2: sB
              }), dB.push({
                x1: YB,
                y1: wB,
                x2: YB,
                y2: OB
              })
            } else if ("horizontal" === ZB) {
              var pB = qB.scale,
                aB = GB + IB,
                HB = aB - kB,
                MB = aB + kB,
                jB = pB(zB - yB),
                PB = pB(zB + WB);
              dB.push({
                x1: HB,
                y1: PB,
                x2: MB,
                y2: PB
              }), dB.push({
                x1: aB,
                y1: jB,
                x2: aB,
                y2: PB
              }), dB.push({
                x1: HB,
                y1: jB,
                x2: MB,
                y2: jB
              })
            }
            return TB.createElement(oB.e, cB({
              className: "recharts-errorBar",
              key: "bar-".concat(dB.map((function(BB) {
                return "".concat(BB.x1, "-").concat(BB.x2, "-").concat(BB.y1, "-").concat(BB.y2)
              })))
            }, UB), dB.map((function(BB) {
              return TB.createElement("line", cB({}, BB, {
                key: "line-".concat(BB.x1, "-").concat(BB.x2, "-").concat(BB.y1, "-").concat(BB.y2)
              }))
            })))
          }));
          return TB.createElement(oB.e, {
            className: "recharts-errorBars"
          }, WB)
        }
      }]) && FB(ZB.prototype, kB), hB && FB(ZB, hB), Object.defineProperty(ZB, "prototype", {
        writable: !1
      }), ZB;
      var ZB, kB, hB
    }(TB.Component);
    UB(dB, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), UB(dB, "displayName", "ErrorBar")
  },
  6522: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => XB
    });
    var TB = ZB(63),
      JB = ZB(6271),
      oB = ZB(5425),
      GB = ZB.n(oB),
      vB = ZB(5563),
      kB = ZB.n(vB),
      cB = ZB(6339),
      nB = ZB.n(cB),
      hB = ZB(5250),
      zB = ZB(6511),
      FB = ZB(6255),
      NB = ZB(6124),
      gB = ZB(6423),
      qB = ZB(6348),
      yB = ZB(5335),
      UB = ZB(5573),
      WB = ZB(6132),
      dB = ZB(6289),
      CB = ["type", "layout", "connectNulls", "ref"],
      QB = ["key"];

    function sB(BB) {
      return sB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, sB(BB)
    }

    function wB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function OB() {
      return OB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, OB.apply(this, arguments)
    }

    function YB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function iB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? YB(Object(ZB), !0).forEach((function(IB) {
          rB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : YB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function pB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return aB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return aB(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return aB(BB, IB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function HB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, mB(TB.key), TB)
      }
    }

    function MB(BB, IB, ZB) {
      return IB = PB(IB),
        function(BB, IB) {
          if (IB && ("object" === sB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, jB() ? Reflect.construct(IB, ZB || [], PB(BB).constructor) : IB.apply(BB, ZB))
    }

    function jB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (jB = function() {
        return !!BB
      })()
    }

    function PB(BB) {
      return PB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, PB(BB)
    }

    function RB(BB, IB) {
      return RB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, RB(BB, IB)
    }

    function rB(BB, IB, ZB) {
      return (IB = mB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function mB(BB) {
      var IB = function(BB, IB) {
        if ("object" != sB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != sB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == sB(IB) ? IB : IB + ""
    }
    var XB = function(BB) {
      function IB() {
        var BB;
        ! function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, IB);
        for (var ZB = arguments.length, TB = new Array(ZB), JB = 0; JB < ZB; JB++) TB[JB] = arguments[JB];
        return rB(BB = MB(this, IB, [].concat(TB)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), rB(BB, "generateSimpleStrokeDasharray", (function(BB, IB) {
          return "".concat(IB, "px ").concat(BB - IB, "px")
        })), rB(BB, "getStrokeDasharray", (function(ZB, TB, JB) {
          var oB = JB.reduce((function(BB, IB) {
            return BB + IB
          }));
          if (!oB) return BB.generateSimpleStrokeDasharray(TB, ZB);
          for (var GB = Math.floor(ZB / oB), vB = ZB % oB, kB = TB - ZB, cB = [], nB = 0, hB = 0; nB < JB.length; hB += JB[nB], ++nB)
            if (hB + JB[nB] > vB) {
              cB = [].concat(pB(JB.slice(0, nB)), [vB - hB]);
              break
            } var zB = cB.length % 2 === 0 ? [0, kB] : [kB];
          return [].concat(pB(IB.repeat(JB, GB)), pB(cB), zB).map((function(BB) {
            return "".concat(BB, "px")
          })).join(", ")
        })), rB(BB, "id", (0, yB.z)("recharts-line-")), rB(BB, "pathRef", (function(IB) {
          BB.mainCurve = IB
        })), rB(BB, "handleAnimationEnd", (function() {
          BB.setState({
            isAnimationFinished: !0
          }), BB.props.onAnimationEnd && BB.props.onAnimationEnd()
        })), rB(BB, "handleAnimationStart", (function() {
          BB.setState({
            isAnimationFinished: !1
          }), BB.props.onAnimationStart && BB.props.onAnimationStart()
        })), BB
      }
      return function(BB, IB) {
        if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(IB && IB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), IB && RB(BB, IB)
      }(IB, BB), ZB = IB, oB = [{
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
          } catch (IB) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(BB, IB) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var ZB = this.props,
            JB = ZB.points,
            oB = ZB.xAxis,
            GB = ZB.yAxis,
            vB = ZB.layout,
            kB = ZB.children,
            cB = (0, UB.g)(kB, qB.d);
          if (!cB) return null;
          var nB = function(BB, IB) {
              return {
                x: BB.x,
                y: BB.y,
                value: BB.value,
                errorVal: (0, dB._)(BB.payload, IB)
              }
            },
            hB = {
              clipPath: BB ? "url(#clipPath-".concat(IB, ")") : null
            };
          return TB.createElement(NB.e, hB, cB.map((function(BB) {
            return TB.cloneElement(BB, {
              key: "bar-".concat(BB.props.dataKey),
              data: JB,
              xAxis: oB,
              yAxis: GB,
              layout: vB,
              dataPointFormatter: nB
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(BB, ZB, JB) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var oB = this.props,
            GB = oB.dot,
            vB = oB.points,
            kB = oB.dataKey,
            cB = (0, UB.e)(this.props, !1),
            nB = (0, UB.e)(GB, !0),
            hB = vB.map((function(BB, ZB) {
              var TB = iB(iB(iB({
                key: "dot-".concat(ZB),
                r: 3
              }, cB), nB), {}, {
                index: ZB,
                cx: BB.x,
                cy: BB.y,
                value: BB.value,
                dataKey: kB,
                payload: BB.payload,
                points: vB
              });
              return IB.renderDotItem(GB, TB)
            })),
            zB = {
              clipPath: BB ? "url(#clipPath-".concat(ZB ? "" : "dots-").concat(JB, ")") : null
            };
          return TB.createElement(NB.e, OB({
            className: "recharts-line-dots",
            key: "dots"
          }, zB), hB)
        }
      }, {
        key: "renderCurveStatically",
        value: function(BB, IB, ZB, JB) {
          var oB = this.props,
            GB = oB.type,
            vB = oB.layout,
            kB = oB.connectNulls,
            cB = (oB.ref, wB(oB, CB)),
            nB = iB(iB(iB({}, (0, UB.e)(cB, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: IB ? "url(#clipPath-".concat(ZB, ")") : null,
              points: BB
            }, JB), {}, {
              type: GB,
              layout: vB,
              connectNulls: kB
            });
          return TB.createElement(zB.c, OB({}, nB, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(BB, IB) {
          var ZB = this,
            oB = this.props,
            GB = oB.points,
            vB = oB.strokeDasharray,
            kB = oB.isAnimationActive,
            cB = oB.animationBegin,
            nB = oB.animationDuration,
            hB = oB.animationEasing,
            zB = oB.animationId,
            FB = oB.animateNewValues,
            NB = oB.width,
            gB = oB.height,
            qB = this.state,
            UB = qB.prevPoints,
            WB = qB.totalLength;
          return TB.createElement(JB.e, {
            QF: cB,
            duration: nB,
            isActive: kB,
            easing: hB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(zB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(TB) {
            var JB = TB.t;
            if (UB) {
              var oB = UB.length / GB.length,
                kB = GB.map((function(BB, IB) {
                  var ZB = Math.floor(IB * oB);
                  if (UB[ZB]) {
                    var TB = UB[ZB],
                      GB = (0, yB.q)(TB.x, BB.x),
                      vB = (0, yB.q)(TB.y, BB.y);
                    return iB(iB({}, BB), {}, {
                      x: GB(JB),
                      y: vB(JB)
                    })
                  }
                  if (FB) {
                    var kB = (0, yB.q)(2 * NB, BB.x),
                      cB = (0, yB.q)(gB / 2, BB.y);
                    return iB(iB({}, BB), {}, {
                      x: kB(JB),
                      y: cB(JB)
                    })
                  }
                  return iB(iB({}, BB), {}, {
                    x: BB.x,
                    y: BB.y
                  })
                }));
              return ZB.renderCurveStatically(kB, BB, IB)
            }
            var cB, nB = (0, yB.q)(0, WB)(JB);
            if (vB) {
              var hB = "".concat(vB).split(/[,\s]+/gim).map((function(BB) {
                return parseFloat(BB)
              }));
              cB = ZB.getStrokeDasharray(nB, WB, hB)
            } else cB = ZB.generateSimpleStrokeDasharray(WB, nB);
            return ZB.renderCurveStatically(GB, BB, IB, {
              strokeDasharray: cB
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(BB, IB) {
          var ZB = this.props,
            TB = ZB.points,
            JB = ZB.isAnimationActive,
            oB = this.state,
            GB = oB.prevPoints,
            vB = oB.totalLength;
          return JB && TB && TB.length && (!GB && vB > 0 || !nB()(GB, TB)) ? this.renderCurveWithAnimation(BB, IB) : this.renderCurveStatically(TB, BB, IB)
        }
      }, {
        key: "render",
        value: function() {
          var BB, IB = this.props,
            ZB = IB.hide,
            JB = IB.dot,
            oB = IB.points,
            GB = IB.className,
            vB = IB.xAxis,
            cB = IB.yAxis,
            nB = IB.top,
            zB = IB.left,
            FB = IB.width,
            qB = IB.height,
            yB = IB.isAnimationActive,
            WB = IB.id;
          if (ZB || !oB || !oB.length) return null;
          var dB = this.state.isAnimationFinished,
            CB = 1 === oB.length,
            QB = (0, hB.c)("recharts-line", GB),
            sB = vB && vB.allowDataOverflow,
            wB = cB && cB.allowDataOverflow,
            OB = sB || wB,
            YB = kB()(WB) ? this.id : WB,
            iB = null !== (BB = (0, UB.e)(JB, !1)) && void 0 !== BB ? BB : {
              r: 3,
              strokeWidth: 2
            },
            pB = iB.r,
            aB = void 0 === pB ? 3 : pB,
            HB = iB.strokeWidth,
            MB = void 0 === HB ? 2 : HB,
            jB = ((0, UB.s)(JB) ? JB : {}).clipDot,
            PB = void 0 === jB || jB,
            RB = 2 * aB + MB;
          return TB.createElement(NB.e, {
            className: QB
          }, sB || wB ? TB.createElement("defs", null, TB.createElement("clipPath", {
            id: "clipPath-".concat(YB)
          }, TB.createElement("rect", {
            x: sB ? zB : zB - FB / 2,
            y: wB ? nB : nB - qB / 2,
            width: sB ? FB : 2 * FB,
            height: wB ? qB : 2 * qB
          })), !PB && TB.createElement("clipPath", {
            id: "clipPath-dots-".concat(YB)
          }, TB.createElement("rect", {
            x: zB - RB / 2,
            y: nB - RB / 2,
            width: FB + RB,
            height: qB + RB
          }))) : null, !CB && this.renderCurve(OB, YB), this.renderErrorBar(OB, YB), (CB || JB) && this.renderDots(OB, PB, YB), (!yB || dB) && gB.b.renderCallByParent(this.props, oB))
        }
      }], vB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, IB) {
          return BB.animationId !== IB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curPoints: BB.points,
            prevPoints: IB.curPoints
          } : BB.points !== IB.curPoints ? {
            curPoints: BB.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(BB, IB) {
          for (var ZB = BB.length % 2 !== 0 ? [].concat(pB(BB), [0]) : BB, TB = [], JB = 0; JB < IB; ++JB) TB = [].concat(pB(TB), pB(ZB));
          return TB
        }
      }, {
        key: "renderDotItem",
        value: function(BB, IB) {
          var ZB;
          if (TB.isValidElement(BB)) ZB = TB.cloneElement(BB, IB);
          else if (GB()(BB)) ZB = BB(IB);
          else {
            var JB = IB.key,
              oB = wB(IB, QB),
              vB = (0, hB.c)("recharts-line-dot", "boolean" !== typeof BB ? BB.className : "");
            ZB = TB.createElement(FB.c, OB({
              key: JB
            }, oB, {
              className: vB
            }))
          }
          return ZB
        }
      }], oB && HB(ZB.prototype, oB), vB && HB(ZB, vB), Object.defineProperty(ZB, "prototype", {
        writable: !1
      }), ZB;
      var ZB, oB, vB
    }(TB.PureComponent);
    rB(XB, "displayName", "Line"), rB(XB, "defaultProps", {
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
      isAnimationActive: !WB.e.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), rB(XB, "getComposedData", (function(BB) {
      var IB = BB.props,
        ZB = BB.xAxis,
        TB = BB.yAxis,
        JB = BB.xAxisTicks,
        oB = BB.yAxisTicks,
        GB = BB.dataKey,
        vB = BB.bandSize,
        cB = BB.displayedData,
        nB = BB.offset,
        hB = IB.layout;
      return iB({
        points: cB.map((function(BB, IB) {
          var cB = (0, dB._)(BB, GB);
          return "horizontal" === hB ? {
            x: (0, dB.C)({
              axis: ZB,
              ticks: JB,
              bandSize: vB,
              entry: BB,
              index: IB
            }),
            y: kB()(cB) ? null : TB.scale(cB),
            value: cB,
            payload: BB
          } : {
            x: kB()(cB) ? null : ZB.scale(cB),
            y: (0, dB.C)({
              axis: TB,
              ticks: oB,
              bandSize: vB,
              entry: BB,
              index: IB
            }),
            value: cB,
            payload: BB
          }
        })),
        layout: hB
      }, nB)
    }))
  },
  6465: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => MB
    });
    var TB = ZB(63),
      JB = ZB(5425),
      oB = ZB.n(JB),
      GB = ZB(6473),
      vB = ZB.n(GB),
      kB = ZB(5250),
      cB = ZB(6124),
      nB = ZB(6364),
      hB = ZB(6377),
      zB = ZB(5335),
      FB = ZB(6379),
      NB = ZB(5570),
      gB = ZB(5573),
      qB = ZB(6488);

    function yB(BB) {
      return yB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, yB(BB)
    }

    function UB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, YB(TB.key), TB)
      }
    }

    function WB(BB, IB, ZB) {
      return IB = CB(IB),
        function(BB, IB) {
          if (IB && ("object" === yB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, dB() ? Reflect.construct(IB, ZB || [], CB(BB).constructor) : IB.apply(BB, ZB))
    }

    function dB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (dB = function() {
        return !!BB
      })()
    }

    function CB(BB) {
      return CB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, CB(BB)
    }

    function QB(BB, IB) {
      return QB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, QB(BB, IB)
    }

    function sB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function wB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? sB(Object(ZB), !0).forEach((function(IB) {
          OB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : sB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function OB(BB, IB, ZB) {
      return (IB = YB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function YB(BB) {
      var IB = function(BB, IB) {
        if ("object" != yB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != yB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == yB(IB) ? IB : IB + ""
    }

    function iB(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        var ZB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != ZB) {
          var TB, JB, oB, GB, vB = [],
            kB = !0,
            cB = !1;
          try {
            if (oB = (ZB = ZB.call(BB)).next, 0 === IB) {
              if (Object(ZB) !== ZB) return;
              kB = !1
            } else
              for (; !(kB = (TB = oB.call(ZB)).done) && (vB.push(TB.value), vB.length !== IB); kB = !0);
          } catch (BB) {
            cB = !0, JB = BB
          } finally {
            try {
              if (!kB && null != ZB.return && (GB = ZB.return(), Object(GB) !== GB)) return
            } finally {
              if (cB) throw JB
            }
          }
          return vB
        }
      }(BB, IB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return pB(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return pB(BB, IB)
      }(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function aB() {
      return aB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, aB.apply(this, arguments)
    }

    function HB(BB) {
      var IB = BB.x,
        ZB = BB.y,
        JB = BB.segment,
        GB = BB.xAxisId,
        yB = BB.yAxisId,
        UB = BB.shape,
        WB = BB.className,
        dB = BB.alwaysShow,
        CB = (0, qB.m)(),
        QB = (0, qB.u)(GB),
        sB = (0, qB.x)(yB),
        OB = (0, qB.q)();
      if (!CB || !OB) return null;
      (0, NB.b)(void 0 === dB, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var YB = function(BB, IB, ZB, TB, JB, oB, GB, kB, cB) {
        var nB = JB.x,
          zB = JB.y,
          FB = JB.width,
          NB = JB.height;
        if (ZB) {
          var gB = cB.y,
            qB = BB.y.apply(gB, {
              position: oB
            });
          if ((0, hB.e)(cB, "discard") && !BB.y.isInRange(qB)) return null;
          var yB = [{
            x: nB + FB,
            y: qB
          }, {
            x: nB,
            y: qB
          }];
          return "left" === kB ? yB.reverse() : yB
        }
        if (IB) {
          var UB = cB.x,
            WB = BB.x.apply(UB, {
              position: oB
            });
          if ((0, hB.e)(cB, "discard") && !BB.x.isInRange(WB)) return null;
          var dB = [{
            x: WB,
            y: zB + NB
          }, {
            x: WB,
            y: zB
          }];
          return "top" === GB ? dB.reverse() : dB
        }
        if (TB) {
          var CB = cB.segment.map((function(IB) {
            return BB.apply(IB, {
              position: oB
            })
          }));
          return (0, hB.e)(cB, "discard") && vB()(CB, (function(IB) {
            return !BB.isInRange(IB)
          })) ? null : CB
        }
        return null
      }((0, FB.b)({
        x: QB.scale,
        y: sB.scale
      }), (0, zB.u)(IB), (0, zB.u)(ZB), JB && 2 === JB.length, OB, BB.position, QB.orientation, sB.orientation, BB);
      if (!YB) return null;
      var pB = iB(YB, 2),
        HB = pB[0],
        MB = HB.x,
        jB = HB.y,
        PB = pB[1],
        RB = PB.x,
        rB = PB.y,
        mB = wB(wB({
          clipPath: (0, hB.e)(BB, "hidden") ? "url(#".concat(CB, ")") : void 0
        }, (0, gB.e)(BB, !0)), {}, {
          x1: MB,
          y1: jB,
          x2: RB,
          y2: rB
        });
      return TB.createElement(cB.e, {
        className: (0, kB.c)("recharts-reference-line", WB)
      }, function(BB, IB) {
        return TB.isValidElement(BB) ? TB.cloneElement(BB, IB) : oB()(BB) ? BB(IB) : TB.createElement("line", aB({}, IB, {
          className: "recharts-reference-line-line"
        }))
      }(UB, mB), nB.e.renderCallByParent(BB, (0, FB.i)({
        x1: MB,
        y1: jB,
        x2: RB,
        y2: rB
      })))
    }
    var MB = function(BB) {
      function IB() {
        return function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, IB), WB(this, IB, arguments)
      }
      return function(BB, IB) {
        if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(IB && IB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), IB && QB(BB, IB)
      }(IB, BB), ZB = IB, (JB = [{
        key: "render",
        value: function() {
          return TB.createElement(HB, this.props)
        }
      }]) && UB(ZB.prototype, JB), oB && UB(ZB, oB), Object.defineProperty(ZB, "prototype", {
        writable: !1
      }), ZB;
      var ZB, JB, oB
    }(TB.Component);
    OB(MB, "displayName", "ReferenceLine"), OB(MB, "defaultProps", {
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
  6526: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => UB
    });
    var TB = ZB(63),
      JB = ZB(5250),
      oB = ZB(6488),
      GB = ZB(6534),
      vB = ZB(6289);

    function kB(BB) {
      return kB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, kB(BB)
    }

    function cB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, gB(TB.key), TB)
      }
    }

    function nB(BB, IB, ZB) {
      return IB = zB(IB),
        function(BB, IB) {
          if (IB && ("object" === kB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, hB() ? Reflect.construct(IB, ZB || [], zB(BB).constructor) : IB.apply(BB, ZB))
    }

    function hB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (hB = function() {
        return !!BB
      })()
    }

    function zB(BB) {
      return zB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, zB(BB)
    }

    function FB(BB, IB) {
      return FB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, FB(BB, IB)
    }

    function NB(BB, IB, ZB) {
      return (IB = gB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function gB(BB) {
      var IB = function(BB, IB) {
        if ("object" != kB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != kB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == kB(IB) ? IB : IB + ""
    }

    function qB() {
      return qB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, qB.apply(this, arguments)
    }

    function yB(BB) {
      var IB = BB.xAxisId,
        ZB = (0, oB.k)(),
        kB = (0, oB.i)(),
        cB = (0, oB.u)(IB);
      return null == cB ? null : TB.createElement(GB.d, qB({}, cB, {
        className: (0, JB.c)("recharts-".concat(cB.axisType, " ").concat(cB.axisType), cB.className),
        viewBox: {
          x: 0,
          y: 0,
          width: ZB,
          height: kB
        },
        ticksGenerator: function(BB) {
          return (0, vB.W)(BB, !0)
        }
      }))
    }
    var UB = function(BB) {
      function IB() {
        return function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, IB), nB(this, IB, arguments)
      }
      return function(BB, IB) {
        if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(IB && IB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), IB && FB(BB, IB)
      }(IB, BB), ZB = IB, (JB = [{
        key: "render",
        value: function() {
          return TB.createElement(yB, this.props)
        }
      }]) && cB(ZB.prototype, JB), oB && cB(ZB, oB), Object.defineProperty(ZB, "prototype", {
        writable: !1
      }), ZB;
      var ZB, JB, oB
    }(TB.Component);
    NB(UB, "displayName", "XAxis"), NB(UB, "defaultProps", {
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
  6539: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => UB
    });
    var TB = ZB(63),
      JB = ZB(5250),
      oB = ZB(6488),
      GB = ZB(6534),
      vB = ZB(6289);

    function kB(BB) {
      return kB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, kB(BB)
    }

    function cB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, gB(TB.key), TB)
      }
    }

    function nB(BB, IB, ZB) {
      return IB = zB(IB),
        function(BB, IB) {
          if (IB && ("object" === kB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, hB() ? Reflect.construct(IB, ZB || [], zB(BB).constructor) : IB.apply(BB, ZB))
    }

    function hB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (hB = function() {
        return !!BB
      })()
    }

    function zB(BB) {
      return zB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, zB(BB)
    }

    function FB(BB, IB) {
      return FB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, FB(BB, IB)
    }

    function NB(BB, IB, ZB) {
      return (IB = gB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function gB(BB) {
      var IB = function(BB, IB) {
        if ("object" != kB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != kB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == kB(IB) ? IB : IB + ""
    }

    function qB() {
      return qB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, qB.apply(this, arguments)
    }
    var yB = function(BB) {
        var IB = BB.yAxisId,
          ZB = (0, oB.k)(),
          kB = (0, oB.i)(),
          cB = (0, oB.x)(IB);
        return null == cB ? null : TB.createElement(GB.d, qB({}, cB, {
          className: (0, JB.c)("recharts-".concat(cB.axisType, " ").concat(cB.axisType), cB.className),
          viewBox: {
            x: 0,
            y: 0,
            width: ZB,
            height: kB
          },
          ticksGenerator: function(BB) {
            return (0, vB.W)(BB, !0)
          }
        }))
      },
      UB = function(BB) {
        function IB() {
          return function(BB, IB) {
            if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
          }(this, IB), nB(this, IB, arguments)
        }
        return function(BB, IB) {
          if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(IB && IB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), IB && FB(BB, IB)
        }(IB, BB), ZB = IB, (JB = [{
          key: "render",
          value: function() {
            return TB.createElement(yB, this.props)
          }
        }]) && cB(ZB.prototype, JB), oB && cB(ZB, oB), Object.defineProperty(ZB, "prototype", {
          writable: !1
        }), ZB;
        var ZB, JB, oB
      }(TB.Component);
    NB(UB, "displayName", "YAxis"), NB(UB, "defaultProps", {
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
  6537: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => gB
    });
    var TB = ZB(5425),
      JB = ZB.n(TB),
      oB = ZB(5335),
      GB = ZB(6280),
      vB = ZB(6132),
      kB = ZB(6379);

    function cB(BB, IB, ZB) {
      if (IB < 1) return [];
      if (1 === IB && void 0 === ZB) return BB;
      for (var TB = [], JB = 0; JB < BB.length; JB += IB) {
        if (void 0 !== ZB && !0 !== ZB(BB[JB])) return;
        TB.push(BB[JB])
      }
      return TB
    }

    function nB(BB, IB, ZB, TB, JB) {
      if (BB * IB < BB * TB || BB * IB > BB * JB) return !1;
      var oB = ZB();
      return BB * (IB - BB * oB / 2 - TB) >= 0 && BB * (IB + BB * oB / 2 - JB) <= 0
    }

    function hB(BB) {
      return hB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, hB(BB)
    }

    function zB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function FB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? zB(Object(ZB), !0).forEach((function(IB) {
          NB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : zB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function NB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != hB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != hB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == hB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function gB(BB, IB, ZB) {
      var TB = BB.Iz,
        hB = BB.ticks,
        zB = BB.viewBox,
        NB = BB.minTickGap,
        gB = BB.orientation,
        qB = BB.interval,
        yB = BB.tickFormatter,
        UB = BB.unit,
        WB = BB.angle;
      if (!hB || !hB.length || !TB) return [];
      if ((0, oB.w)(qB) || vB.e.isSsr) return function(BB, IB) {
        return cB(BB, IB + 1)
      }(hB, "number" === typeof qB && (0, oB.w)(qB) ? qB : 0);
      var dB = [],
        CB = "top" === gB || "bottom" === gB ? "width" : "height",
        QB = UB && "width" === CB ? (0, GB.g)(UB, {
          fontSize: IB,
          letterSpacing: ZB
        }) : {
          width: 0,
          height: 0
        },
        sB = function(BB, TB) {
          var oB = JB()(yB) ? yB(BB.value, TB) : BB.value;
          return "width" === CB ? function(BB, IB, ZB) {
            var TB = {
              width: BB.width + IB.width,
              height: BB.height + IB.height
            };
            return (0, kB.f)(TB, ZB)
          }((0, GB.g)(oB, {
            fontSize: IB,
            letterSpacing: ZB
          }), QB, WB) : (0, GB.g)(oB, {
            fontSize: IB,
            letterSpacing: ZB
          })[CB]
        },
        wB = hB.length >= 2 ? (0, oB.y)(hB[1].coordinate - hB[0].coordinate) : 1,
        OB = function(BB, IB, ZB) {
          var TB = "width" === ZB,
            JB = BB.x,
            oB = BB.y,
            GB = BB.width,
            vB = BB.height;
          return 1 === IB ? {
            start: TB ? JB : oB,
            end: TB ? JB + GB : oB + vB
          } : {
            start: TB ? JB + GB : oB + vB,
            end: TB ? JB : oB
          }
        }(zB, wB, CB);
      return "equidistantPreserveStart" === qB ? function(BB, IB, ZB, TB, JB) {
        for (var oB, GB = (TB || []).slice(), vB = IB.start, kB = IB.end, hB = 0, zB = 1, FB = vB, NB = function() {
            var IB = null === TB || void 0 === TB ? void 0 : TB[hB];
            if (void 0 === IB) return {
              v: cB(TB, zB)
            };
            var oB, GB = hB,
              NB = function() {
                return void 0 === oB && (oB = ZB(IB, GB)), oB
              },
              gB = IB.coordinate,
              qB = 0 === hB || nB(BB, gB, NB, FB, kB);
            qB || (hB = 0, FB = vB, zB += 1), qB && (FB = gB + BB * (NB() / 2 + JB), hB += zB)
          }; zB <= GB.length;)
          if (oB = NB()) return oB.v;
        return []
      }(wB, OB, sB, hB, NB) : (dB = "preserveStart" === qB || "preserveStartEnd" === qB ? function(BB, IB, ZB, TB, JB, oB) {
        var GB = (TB || []).slice(),
          vB = GB.length,
          kB = IB.start,
          cB = IB.end;
        if (oB) {
          var hB = TB[vB - 1],
            zB = ZB(hB, vB - 1),
            NB = BB * (hB.coordinate + BB * zB / 2 - cB);
          GB[vB - 1] = hB = FB(FB({}, hB), {}, {
            tickCoord: NB > 0 ? hB.coordinate - NB * BB : hB.coordinate
          }), nB(BB, hB.tickCoord, (function() {
            return zB
          }), kB, cB) && (cB = hB.tickCoord - BB * (zB / 2 + JB), GB[vB - 1] = FB(FB({}, hB), {}, {
            isShow: !0
          }))
        }
        for (var gB = oB ? vB - 1 : vB, qB = function(IB) {
            var TB, oB = GB[IB],
              vB = function() {
                return void 0 === TB && (TB = ZB(oB, IB)), TB
              };
            if (0 === IB) {
              var hB = BB * (oB.coordinate - BB * vB() / 2 - kB);
              GB[IB] = oB = FB(FB({}, oB), {}, {
                tickCoord: hB < 0 ? oB.coordinate - hB * BB : oB.coordinate
              })
            } else GB[IB] = oB = FB(FB({}, oB), {}, {
              tickCoord: oB.coordinate
            });
            nB(BB, oB.tickCoord, vB, kB, cB) && (kB = oB.tickCoord + BB * (vB() / 2 + JB), GB[IB] = FB(FB({}, oB), {}, {
              isShow: !0
            }))
          }, yB = 0; yB < gB; yB++) qB(yB);
        return GB
      }(wB, OB, sB, hB, NB, "preserveStartEnd" === qB) : function(BB, IB, ZB, TB, JB) {
        for (var oB = (TB || []).slice(), GB = oB.length, vB = IB.start, kB = IB.end, cB = function(IB) {
            var TB, cB = oB[IB],
              hB = function() {
                return void 0 === TB && (TB = ZB(cB, IB)), TB
              };
            if (IB === GB - 1) {
              var zB = BB * (cB.coordinate + BB * hB() / 2 - kB);
              oB[IB] = cB = FB(FB({}, cB), {}, {
                tickCoord: zB > 0 ? cB.coordinate - zB * BB : cB.coordinate
              })
            } else oB[IB] = cB = FB(FB({}, cB), {}, {
              tickCoord: cB.coordinate
            });
            nB(BB, cB.tickCoord, hB, vB, kB) && (kB = cB.tickCoord - BB * (hB() / 2 + JB), oB[IB] = FB(FB({}, cB), {}, {
              isShow: !0
            }))
          }, hB = GB - 1; hB >= 0; hB--) cB(hB);
        return oB
      }(wB, OB, sB, hB, NB), dB.filter((function(BB) {
        return BB.isShow
      })))
    }
  },
  6556: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => kB
    });
    var TB = ZB(5607),
      JB = ZB(6408),
      oB = ZB(6526),
      GB = ZB(6539),
      vB = ZB(6379),
      kB = (0, TB.d)({
        chartName: "BarChart",
        GraphicalChild: JB.e,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: oB.e
        }, {
          axisType: "yAxis",
          AxisComp: GB.d
        }],
        formatAxisMap: vB.e
      })
  },
  5602: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JI
    });
    var TB = ZB(5607),
      JB = ZB(6514),
      oB = ZB(6408),
      GB = ZB(6522),
      vB = ZB(63),
      kB = ZB(6271),
      cB = ZB(5563),
      nB = ZB.n(cB),
      hB = ZB(6339),
      zB = ZB.n(hB),
      FB = ZB(5425),
      NB = ZB.n(FB),
      gB = ZB(5250),
      qB = ZB(6124),
      yB = ZB(6423),
      UB = ZB(5573),
      WB = ZB(6132);

    function dB(BB) {
      return dB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, dB(BB)
    }

    function CB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, iB(TB.key), TB)
      }
    }

    function QB(BB, IB, ZB) {
      return IB = wB(IB),
        function(BB, IB) {
          if (IB && ("object" === dB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, sB() ? Reflect.construct(IB, ZB || [], wB(BB).constructor) : IB.apply(BB, ZB))
    }

    function sB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (sB = function() {
        return !!BB
      })()
    }

    function wB(BB) {
      return wB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, wB(BB)
    }

    function OB(BB, IB) {
      return OB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, OB(BB, IB)
    }

    function YB(BB, IB, ZB) {
      return (IB = iB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function iB(BB) {
      var IB = function(BB, IB) {
        if ("object" != dB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != dB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == dB(IB) ? IB : IB + ""
    }
    var pB = function(BB) {
      function IB() {
        return function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, IB), QB(this, IB, arguments)
      }
      return function(BB, IB) {
        if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(IB && IB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), IB && OB(BB, IB)
      }(IB, BB), ZB = IB, (TB = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && CB(ZB.prototype, TB), JB && CB(ZB, JB), Object.defineProperty(ZB, "prototype", {
        writable: !1
      }), ZB;
      var ZB, TB, JB
    }(vB.Component);
    YB(pB, "displayName", "ZAxis"), YB(pB, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var aB = ZB(6511),
      HB = ZB(6348),
      MB = ZB(6415),
      jB = ZB(5335),
      PB = ZB(6289),
      RB = ZB(5594),
      rB = ZB(6193),
      mB = ZB(6435),
      XB = ["option", "isActive"];

    function LB() {
      return LB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, LB.apply(this, arguments)
    }

    function eB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function uB(BB) {
      var IB = BB.option,
        ZB = BB.isActive,
        TB = eB(BB, XB);
      return "string" === typeof IB ? vB.createElement(mB.e, LB({
        option: vB.createElement(rB.c, LB({
          type: IB
        }, TB)),
        isActive: ZB,
        shapeType: "symbols"
      }, TB)) : vB.createElement(mB.e, LB({
        option: IB,
        isActive: ZB,
        shapeType: "symbols"
      }, TB))
    }

    function fB(BB) {
      return fB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, fB(BB)
    }

    function lB() {
      return lB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, lB.apply(this, arguments)
    }

    function AB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function tB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? AB(Object(ZB), !0).forEach((function(IB) {
          VB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : AB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function bB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, SB(TB.key), TB)
      }
    }

    function xB(BB, IB, ZB) {
      return IB = DB(IB),
        function(BB, IB) {
          if (IB && ("object" === fB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, EB() ? Reflect.construct(IB, ZB || [], DB(BB).constructor) : IB.apply(BB, ZB))
    }

    function EB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (EB = function() {
        return !!BB
      })()
    }

    function DB(BB) {
      return DB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, DB(BB)
    }

    function KB(BB, IB) {
      return KB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, KB(BB, IB)
    }

    function VB(BB, IB, ZB) {
      return (IB = SB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function SB(BB) {
      var IB = function(BB, IB) {
        if ("object" != fB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != fB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == fB(IB) ? IB : IB + ""
    }
    var BI = function(BB) {
      function IB() {
        var BB;
        ! function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, IB);
        for (var ZB = arguments.length, TB = new Array(ZB), JB = 0; JB < ZB; JB++) TB[JB] = arguments[JB];
        return VB(BB = xB(this, IB, [].concat(TB)), "state", {
          isAnimationFinished: !1
        }), VB(BB, "handleAnimationEnd", (function() {
          BB.setState({
            isAnimationFinished: !0
          })
        })), VB(BB, "handleAnimationStart", (function() {
          BB.setState({
            isAnimationFinished: !1
          })
        })), VB(BB, "id", (0, jB.z)("recharts-scatter-")), BB
      }
      return function(BB, IB) {
        if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(IB && IB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), IB && KB(BB, IB)
      }(IB, BB), ZB = IB, TB = [{
        key: "renderSymbolsStatically",
        value: function(BB) {
          var IB = this,
            ZB = this.props,
            TB = ZB.shape,
            JB = ZB.activeShape,
            oB = ZB.activeIndex,
            GB = (0, UB.e)(this.props, !1);
          return BB.map((function(BB, ZB) {
            var kB = oB === ZB,
              cB = kB ? JB : TB,
              nB = tB(tB({}, GB), BB);
            return vB.createElement(qB.e, lB({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === BB || void 0 === BB ? void 0 : BB.cx, "-").concat(null === BB || void 0 === BB ? void 0 : BB.cy, "-").concat(null === BB || void 0 === BB ? void 0 : BB.size, "-").concat(ZB)
            }, (0, RB.k)(IB.props, BB, ZB), {
              role: "img"
            }), vB.createElement(uB, lB({
              option: cB,
              isActive: kB,
              key: "symbol-".concat(ZB)
            }, nB)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var BB = this,
            IB = this.props,
            ZB = IB.points,
            TB = IB.isAnimationActive,
            JB = IB.animationBegin,
            oB = IB.animationDuration,
            GB = IB.animationEasing,
            cB = IB.animationId,
            nB = this.state.prevPoints;
          return vB.createElement(kB.e, {
            QF: JB,
            duration: oB,
            isActive: TB,
            easing: GB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(cB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(IB) {
            var TB = IB.t,
              JB = ZB.map((function(BB, IB) {
                var ZB = nB && nB[IB];
                if (ZB) {
                  var JB = (0, jB.q)(ZB.cx, BB.cx),
                    oB = (0, jB.q)(ZB.cy, BB.cy),
                    GB = (0, jB.q)(ZB.size, BB.size);
                  return tB(tB({}, BB), {}, {
                    cx: JB(TB),
                    cy: oB(TB),
                    size: GB(TB)
                  })
                }
                var vB = (0, jB.q)(0, BB.size);
                return tB(tB({}, BB), {}, {
                  size: vB(TB)
                })
              }));
            return vB.createElement(qB.e, null, BB.renderSymbolsStatically(JB))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var BB = this.props,
            IB = BB.points,
            ZB = BB.isAnimationActive,
            TB = this.state.prevPoints;
          return !(ZB && IB && IB.length) || TB && zB()(TB, IB) ? this.renderSymbolsStatically(IB) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var BB = this.props,
            IB = BB.points,
            ZB = BB.xAxis,
            TB = BB.yAxis,
            JB = BB.children,
            oB = (0, UB.g)(JB, HB.d);
          return oB ? oB.map((function(BB, JB) {
            var oB = BB.props,
              GB = oB.direction,
              kB = oB.dataKey;
            return vB.cloneElement(BB, {
              key: "".concat(GB, "-").concat(kB, "-").concat(IB[JB]),
              data: IB,
              xAxis: ZB,
              yAxis: TB,
              layout: "x" === GB ? "vertical" : "horizontal",
              dataPointFormatter: function(BB, IB) {
                return {
                  x: BB.cx,
                  y: BB.cy,
                  value: "x" === GB ? +BB.node.x : +BB.node.y,
                  errorVal: (0, PB._)(BB, IB)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var BB, IB, ZB = this.props,
            TB = ZB.points,
            JB = ZB.line,
            oB = ZB.lineType,
            GB = ZB.lineJointType,
            kB = (0, UB.e)(this.props, !1),
            cB = (0, UB.e)(JB, !1);
          if ("joint" === oB) BB = TB.map((function(BB) {
            return {
              x: BB.cx,
              y: BB.cy
            }
          }));
          else if ("fitting" === oB) {
            var nB = (0, jB.k)(TB),
              hB = nB.xmin,
              zB = nB.xmax,
              FB = nB.a,
              gB = nB.b,
              yB = function(BB) {
                return FB * BB + gB
              };
            BB = [{
              x: hB,
              y: yB(hB)
            }, {
              x: zB,
              y: yB(zB)
            }]
          }
          var WB = tB(tB(tB({}, kB), {}, {
            fill: "none",
            stroke: kB && kB.fill
          }, cB), {}, {
            points: BB
          });
          return IB = vB.isValidElement(JB) ? vB.cloneElement(JB, WB) : NB()(JB) ? JB(WB) : vB.createElement(aB.c, lB({}, WB, {
            type: GB
          })), vB.createElement(qB.e, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, IB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this.props,
            IB = BB.hide,
            ZB = BB.points,
            TB = BB.line,
            JB = BB.className,
            oB = BB.xAxis,
            GB = BB.yAxis,
            kB = BB.left,
            cB = BB.top,
            hB = BB.width,
            zB = BB.height,
            FB = BB.id,
            NB = BB.isAnimationActive;
          if (IB || !ZB || !ZB.length) return null;
          var UB = this.state.isAnimationFinished,
            WB = (0, gB.c)("recharts-scatter", JB),
            dB = oB && oB.allowDataOverflow,
            CB = GB && GB.allowDataOverflow,
            QB = dB || CB,
            sB = nB()(FB) ? this.id : FB;
          return vB.createElement(qB.e, {
            className: WB,
            clipPath: QB ? "url(#clipPath-".concat(sB, ")") : null
          }, dB || CB ? vB.createElement("defs", null, vB.createElement("clipPath", {
            id: "clipPath-".concat(sB)
          }, vB.createElement("rect", {
            x: dB ? kB : kB - hB / 2,
            y: CB ? cB : cB - zB / 2,
            width: dB ? hB : 2 * hB,
            height: CB ? zB : 2 * zB
          }))) : null, TB && this.renderLine(), this.renderErrorBar(), vB.createElement(qB.e, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!NB || UB) && yB.b.renderCallByParent(this.props, ZB))
        }
      }], JB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, IB) {
          return BB.animationId !== IB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curPoints: BB.points,
            prevPoints: IB.curPoints
          } : BB.points !== IB.curPoints ? {
            curPoints: BB.points
          } : null
        }
      }], TB && bB(ZB.prototype, TB), JB && bB(ZB, JB), Object.defineProperty(ZB, "prototype", {
        writable: !1
      }), ZB;
      var ZB, TB, JB
    }(vB.PureComponent);
    VB(BI, "displayName", "Scatter"), VB(BI, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !WB.e.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), VB(BI, "getComposedData", (function(BB) {
      var IB = BB.xAxis,
        ZB = BB.yAxis,
        TB = BB.zAxis,
        JB = BB.item,
        oB = BB.displayedData,
        GB = BB.xAxisTicks,
        vB = BB.yAxisTicks,
        kB = BB.offset,
        cB = JB.props.tooltipType,
        hB = (0, UB.g)(JB.props.children, MB.e),
        zB = nB()(IB.dataKey) ? JB.props.dataKey : IB.dataKey,
        FB = nB()(ZB.dataKey) ? JB.props.dataKey : ZB.dataKey,
        NB = TB && TB.dataKey,
        gB = TB ? TB.range : pB.defaultProps.range,
        qB = gB && gB[0],
        yB = IB.scale.bandwidth ? IB.scale.bandwidth() : 0,
        WB = ZB.scale.bandwidth ? ZB.scale.bandwidth() : 0,
        dB = oB.map((function(BB, oB) {
          var kB = (0, PB._)(BB, zB),
            gB = (0, PB._)(BB, FB),
            UB = !nB()(NB) && (0, PB._)(BB, NB) || "-",
            dB = [{
              name: nB()(IB.dataKey) ? JB.props.name : IB.name || IB.dataKey,
              unit: IB.unit || "",
              value: kB,
              payload: BB,
              dataKey: zB,
              type: cB
            }, {
              name: nB()(ZB.dataKey) ? JB.props.name : ZB.name || ZB.dataKey,
              unit: ZB.unit || "",
              value: gB,
              payload: BB,
              dataKey: FB,
              type: cB
            }];
          "-" !== UB && dB.push({
            name: TB.name || TB.dataKey,
            unit: TB.unit || "",
            value: UB,
            payload: BB,
            dataKey: NB,
            type: cB
          });
          var CB = (0, PB.C)({
              axis: IB,
              ticks: GB,
              bandSize: yB,
              entry: BB,
              index: oB,
              dataKey: zB
            }),
            QB = (0, PB.C)({
              axis: ZB,
              ticks: vB,
              bandSize: WB,
              entry: BB,
              index: oB,
              dataKey: FB
            }),
            sB = "-" !== UB ? TB.scale(UB) : qB,
            wB = Math.sqrt(Math.max(sB, 0) / Math.PI);
          return tB(tB({}, BB), {}, {
            cx: CB,
            cy: QB,
            x: CB - wB,
            y: QB - wB,
            xAxis: IB,
            yAxis: ZB,
            zAxis: TB,
            width: 2 * wB,
            height: 2 * wB,
            size: sB,
            node: {
              x: kB,
              y: gB,
              z: UB
            },
            tooltipPayload: dB,
            tooltipPosition: {
              x: CB,
              y: QB
            },
            payload: BB
          }, hB && hB[oB] && hB[oB].props)
        }));
      return tB({
        points: dB
      }, kB)
    }));
    var II = ZB(6526),
      ZI = ZB(6539),
      TI = ZB(6379),
      JI = (0, TB.d)({
        chartName: "ComposedChart",
        GraphicalChild: [GB.c, JB.e, oB.e, BI],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: II.e
        }, {
          axisType: "yAxis",
          AxisComp: ZI.d
        }, {
          axisType: "zAxis",
          AxisComp: pB
        }],
        formatAxisMap: TI.e
      })
  },
  5607: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => LZ
    });
    var TB = ZB(63),
      JB = ZB(5563),
      oB = ZB.n(JB),
      GB = ZB(5425),
      vB = ZB.n(GB),
      kB = ZB(5609),
      cB = ZB.n(kB),
      nB = ZB(5357),
      hB = ZB.n(nB),
      zB = ZB(5650),
      FB = ZB.n(zB),
      NB = ZB(5258),
      gB = ZB.n(NB),
      qB = ZB(5250),
      yB = ZB(6111),
      UB = ZB(6118),
      WB = ZB(6124),
      dB = ZB(6129),
      CB = ZB(6188),
      QB = ZB(6255),
      sB = ZB(6263),
      wB = ZB(5573),
      OB = ZB(6292),
      YB = ZB(6276),
      iB = ZB(6289),
      pB = ZB(5335);

    function aB(BB) {
      return aB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, aB(BB)
    }

    function HB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function MB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? HB(Object(ZB), !0).forEach((function(IB) {
          jB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : HB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function jB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != aB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != aB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == aB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }
    var PB = ["Webkit", "Moz", "O", "ms"];

    function RB(BB) {
      return RB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, RB(BB)
    }

    function rB() {
      return rB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, rB.apply(this, arguments)
    }

    function mB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function XB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? mB(Object(ZB), !0).forEach((function(IB) {
          AB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : mB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function LB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, tB(TB.key), TB)
      }
    }

    function eB(BB, IB, ZB) {
      return IB = fB(IB),
        function(BB, IB) {
          if (IB && ("object" === RB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, uB() ? Reflect.construct(IB, ZB || [], fB(BB).constructor) : IB.apply(BB, ZB))
    }

    function uB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (uB = function() {
        return !!BB
      })()
    }

    function fB(BB) {
      return fB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, fB(BB)
    }

    function lB(BB, IB) {
      return lB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, lB(BB, IB)
    }

    function AB(BB, IB, ZB) {
      return (IB = tB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function tB(BB) {
      var IB = function(BB, IB) {
        if ("object" != RB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != RB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == RB(IB) ? IB : IB + ""
    }
    var bB = function(BB) {
        return BB.changedTouches && !!BB.changedTouches.length
      },
      xB = function(BB) {
        function IB(BB) {
          var ZB;
          return function(BB, IB) {
            if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
          }(this, IB), AB(ZB = eB(this, IB, [BB]), "handleDrag", (function(BB) {
            ZB.leaveTimer && (clearTimeout(ZB.leaveTimer), ZB.leaveTimer = null), ZB.state.isTravellerMoving ? ZB.handleTravellerMove(BB) : ZB.state.isSlideMoving && ZB.handleSlideDrag(BB)
          })), AB(ZB, "handleTouchMove", (function(BB) {
            null != BB.changedTouches && BB.changedTouches.length > 0 && ZB.handleDrag(BB.changedTouches[0])
          })), AB(ZB, "handleDragEnd", (function() {
            ZB.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var BB = ZB.props,
                IB = BB.endIndex,
                TB = BB.onDragEnd,
                JB = BB.startIndex;
              null === TB || void 0 === TB || TB({
                endIndex: IB,
                startIndex: JB
              })
            })), ZB.detachDragEndListener()
          })), AB(ZB, "handleLeaveWrapper", (function() {
            (ZB.state.isTravellerMoving || ZB.state.isSlideMoving) && (ZB.leaveTimer = window.setTimeout(ZB.handleDragEnd, ZB.props.leaveTimeOut))
          })), AB(ZB, "handleEnterSlideOrTraveller", (function() {
            ZB.setState({
              isTextActive: !0
            })
          })), AB(ZB, "handleLeaveSlideOrTraveller", (function() {
            ZB.setState({
              isTextActive: !1
            })
          })), AB(ZB, "handleSlideDragStart", (function(BB) {
            var IB = bB(BB) ? BB.changedTouches[0] : BB;
            ZB.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: IB.pageX
            }), ZB.attachDragEndListener()
          })), ZB.travellerDragStartHandlers = {
            startX: ZB.handleTravellerDragStart.bind(ZB, "startX"),
            endX: ZB.handleTravellerDragStart.bind(ZB, "endX")
          }, ZB.state = {}, ZB
        }
        return function(BB, IB) {
          if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(IB && IB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), IB && lB(BB, IB)
        }(IB, BB), ZB = IB, JB = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(BB) {
            var ZB = BB.startX,
              TB = BB.endX,
              JB = this.state.scaleValues,
              oB = this.props,
              GB = oB.gap,
              vB = oB.data.length - 1,
              kB = Math.min(ZB, TB),
              cB = Math.max(ZB, TB),
              nB = IB.getIndexInRange(JB, kB),
              hB = IB.getIndexInRange(JB, cB);
            return {
              startIndex: nB - nB % GB,
              endIndex: hB === vB ? vB : hB - hB % GB
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(BB) {
            var IB = this.props,
              ZB = IB.data,
              TB = IB.tickFormatter,
              JB = IB.dataKey,
              oB = (0, iB._)(ZB[BB], JB, BB);
            return vB()(TB) ? TB(oB, BB) : oB
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
            var IB = this.state,
              ZB = IB.slideMoveStartX,
              TB = IB.startX,
              JB = IB.endX,
              oB = this.props,
              GB = oB.x,
              vB = oB.width,
              kB = oB.travellerWidth,
              cB = oB.startIndex,
              nB = oB.endIndex,
              hB = oB.onChange,
              zB = BB.pageX - ZB;
            zB > 0 ? zB = Math.min(zB, GB + vB - kB - JB, GB + vB - kB - TB) : zB < 0 && (zB = Math.max(zB, GB - TB, GB - JB));
            var FB = this.getIndex({
              startX: TB + zB,
              endX: JB + zB
            });
            FB.startIndex === cB && FB.endIndex === nB || !hB || hB(FB), this.setState({
              startX: TB + zB,
              endX: JB + zB,
              slideMoveStartX: BB.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(BB, IB) {
            var ZB = bB(IB) ? IB.changedTouches[0] : IB;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: BB,
              brushMoveStartX: ZB.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(BB) {
            var IB = this.state,
              ZB = IB.brushMoveStartX,
              TB = IB.movingTravellerId,
              JB = IB.endX,
              oB = IB.startX,
              GB = this.state[TB],
              vB = this.props,
              kB = vB.x,
              cB = vB.width,
              nB = vB.travellerWidth,
              hB = vB.onChange,
              zB = vB.gap,
              FB = vB.data,
              NB = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              gB = BB.pageX - ZB;
            gB > 0 ? gB = Math.min(gB, kB + cB - nB - GB) : gB < 0 && (gB = Math.max(gB, kB - GB)), NB[TB] = GB + gB;
            var qB = this.getIndex(NB),
              yB = qB.startIndex,
              UB = qB.endIndex;
            this.setState(AB(AB({}, TB, GB + gB), "brushMoveStartX", BB.pageX), (function() {
              hB && function() {
                var BB = FB.length - 1;
                return "startX" === TB && (JB > oB ? yB % zB === 0 : UB % zB === 0) || JB < oB && UB === BB || "endX" === TB && (JB > oB ? UB % zB === 0 : yB % zB === 0) || JB > oB && UB === BB
              }() && hB(qB)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(BB, IB) {
            var ZB = this,
              TB = this.state,
              JB = TB.scaleValues,
              oB = TB.startX,
              GB = TB.endX,
              vB = this.state[IB],
              kB = JB.indexOf(vB);
            if (-1 !== kB) {
              var cB = kB + BB;
              if (!(-1 === cB || cB >= JB.length)) {
                var nB = JB[cB];
                "startX" === IB && nB >= GB || "endX" === IB && nB <= oB || this.setState(AB({}, IB, nB), (function() {
                  ZB.props.onChange(ZB.getIndex({
                    startX: ZB.state.startX,
                    endX: ZB.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var BB = this.props,
              IB = BB.x,
              ZB = BB.y,
              JB = BB.width,
              oB = BB.height,
              GB = BB.fill,
              vB = BB.stroke;
            return TB.createElement("rect", {
              stroke: vB,
              fill: GB,
              x: IB,
              y: ZB,
              width: JB,
              height: oB
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var BB = this.props,
              IB = BB.x,
              ZB = BB.y,
              JB = BB.width,
              oB = BB.height,
              GB = BB.data,
              vB = BB.children,
              kB = BB.padding,
              cB = TB.Children.only(vB);
            return cB ? TB.cloneElement(cB, {
              x: IB,
              y: ZB,
              width: JB,
              height: oB,
              margin: kB,
              compact: !0,
              data: GB
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(BB, ZB) {
            var JB, oB, GB = this,
              vB = this.props,
              kB = vB.y,
              cB = vB.travellerWidth,
              nB = vB.height,
              hB = vB.traveller,
              zB = vB.ariaLabel,
              FB = vB.data,
              NB = vB.startIndex,
              gB = vB.endIndex,
              qB = Math.max(BB, this.props.x),
              yB = XB(XB({}, (0, wB.e)(this.props, !1)), {}, {
                x: qB,
                y: kB,
                width: cB,
                height: nB
              }),
              UB = zB || "Min value: ".concat(null === (JB = FB[NB]) || void 0 === JB ? void 0 : JB.name, ", Max value: ").concat(null === (oB = FB[gB]) || void 0 === oB ? void 0 : oB.name);
            return TB.createElement(WB.e, {
              tabIndex: 0,
              role: "slider",
              "aria-label": UB,
              "aria-valuenow": BB,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[ZB],
              onTouchStart: this.travellerDragStartHandlers[ZB],
              onKeyDown: function(BB) {
                ["ArrowLeft", "ArrowRight"].includes(BB.key) && (BB.preventDefault(), BB.stopPropagation(), GB.handleTravellerMoveKeyboard("ArrowRight" === BB.key ? 1 : -1, ZB))
              },
              onFocus: function() {
                GB.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                GB.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, IB.renderTraveller(hB, yB))
          }
        }, {
          key: "renderSlide",
          value: function(BB, IB) {
            var ZB = this.props,
              JB = ZB.y,
              oB = ZB.height,
              GB = ZB.stroke,
              vB = ZB.travellerWidth,
              kB = Math.min(BB, IB) + vB,
              cB = Math.max(Math.abs(IB - BB) - vB, 0);
            return TB.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: GB,
              fillOpacity: .2,
              x: kB,
              y: JB,
              width: cB,
              height: oB
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var BB = this.props,
              IB = BB.startIndex,
              ZB = BB.endIndex,
              JB = BB.y,
              oB = BB.height,
              GB = BB.travellerWidth,
              vB = BB.stroke,
              kB = this.state,
              cB = kB.startX,
              nB = kB.endX,
              hB = {
                pointerEvents: "none",
                fill: vB
              };
            return TB.createElement(WB.e, {
              className: "recharts-brush-texts"
            }, TB.createElement(YB.e, rB({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(cB, nB) - 5,
              y: JB + oB / 2
            }, hB), this.getTextOfTick(IB)), TB.createElement(YB.e, rB({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(cB, nB) + GB + 5,
              y: JB + oB / 2
            }, hB), this.getTextOfTick(ZB)))
          }
        }, {
          key: "render",
          value: function() {
            var BB = this.props,
              IB = BB.data,
              ZB = BB.className,
              JB = BB.children,
              oB = BB.x,
              GB = BB.y,
              vB = BB.width,
              kB = BB.height,
              cB = BB.alwaysShowText,
              nB = this.state,
              hB = nB.startX,
              zB = nB.endX,
              FB = nB.isTextActive,
              NB = nB.isSlideMoving,
              gB = nB.isTravellerMoving,
              yB = nB.isTravellerFocused;
            if (!IB || !IB.length || !(0, pB.w)(oB) || !(0, pB.w)(GB) || !(0, pB.w)(vB) || !(0, pB.w)(kB) || vB <= 0 || kB <= 0) return null;
            var UB = (0, qB.c)("recharts-brush", ZB),
              dB = 1 === TB.Children.count(JB),
              CB = function(BB, IB) {
                if (!BB) return null;
                var ZB = BB.replace(/(\w)/, (function(BB) {
                    return BB.toUpperCase()
                  })),
                  TB = PB.reduce((function(BB, TB) {
                    return MB(MB({}, BB), {}, jB({}, TB + ZB, IB))
                  }), {});
                return TB[BB] = IB, TB
              }("userSelect", "none");
            return TB.createElement(WB.e, {
              className: UB,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: CB
            }, this.renderBackground(), dB && this.renderPanorama(), this.renderSlide(hB, zB), this.renderTravellerLayer(hB, "startX"), this.renderTravellerLayer(zB, "endX"), (FB || NB || gB || yB || cB) && this.renderText())
          }
        }], oB = [{
          key: "renderDefaultTraveller",
          value: function(BB) {
            var IB = BB.x,
              ZB = BB.y,
              JB = BB.width,
              oB = BB.height,
              GB = BB.stroke,
              vB = Math.floor(ZB + oB / 2) - 1;
            return TB.createElement(TB.Fragment, null, TB.createElement("rect", {
              x: IB,
              y: ZB,
              width: JB,
              height: oB,
              fill: GB,
              stroke: "none"
            }), TB.createElement("line", {
              x1: IB + 1,
              y1: vB,
              x2: IB + JB - 1,
              y2: vB,
              fill: "none",
              stroke: "#fff"
            }), TB.createElement("line", {
              x1: IB + 1,
              y1: vB + 2,
              x2: IB + JB - 1,
              y2: vB + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(BB, ZB) {
            return TB.isValidElement(BB) ? TB.cloneElement(BB, ZB) : vB()(BB) ? BB(ZB) : IB.renderDefaultTraveller(ZB)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(BB, IB) {
            var ZB = BB.data,
              TB = BB.width,
              JB = BB.x,
              oB = BB.travellerWidth,
              GB = BB.updateId,
              vB = BB.startIndex,
              kB = BB.endIndex;
            if (ZB !== IB.prevData || GB !== IB.prevUpdateId) return XB({
              prevData: ZB,
              prevTravellerWidth: oB,
              prevUpdateId: GB,
              prevX: JB,
              prevWidth: TB
            }, ZB && ZB.length ? function(BB) {
              var IB = BB.data,
                ZB = BB.startIndex,
                TB = BB.endIndex,
                JB = BB.x,
                oB = BB.width,
                GB = BB.travellerWidth;
              if (!IB || !IB.length) return {};
              var vB = IB.length,
                kB = (0, OB.h)().domain(cB()(0, vB)).range([JB, JB + oB - GB]),
                nB = kB.domain().map((function(BB) {
                  return kB(BB)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: kB(ZB),
                endX: kB(TB),
                scale: kB,
                scaleValues: nB
              }
            }({
              data: ZB,
              width: TB,
              x: JB,
              travellerWidth: oB,
              startIndex: vB,
              endIndex: kB
            }) : {
              scale: null,
              scaleValues: null
            });
            if (IB.scale && (TB !== IB.prevWidth || JB !== IB.prevX || oB !== IB.prevTravellerWidth)) {
              IB.scale.range([JB, JB + TB - oB]);
              var nB = IB.scale.domain().map((function(BB) {
                return IB.scale(BB)
              }));
              return {
                prevData: ZB,
                prevTravellerWidth: oB,
                prevUpdateId: GB,
                prevX: JB,
                prevWidth: TB,
                startX: IB.scale(BB.startIndex),
                endX: IB.scale(BB.endIndex),
                scaleValues: nB
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(BB, IB) {
            for (var ZB = 0, TB = BB.length - 1; TB - ZB > 1;) {
              var JB = Math.floor((ZB + TB) / 2);
              BB[JB] > IB ? TB = JB : ZB = JB
            }
            return IB >= BB[TB] ? TB : ZB
          }
        }], JB && LB(ZB.prototype, JB), oB && LB(ZB, oB), Object.defineProperty(ZB, "prototype", {
          writable: !1
        }), ZB;
        var ZB, JB, oB
      }(TB.PureComponent);
    AB(xB, "displayName", "Brush"), AB(xB, "defaultProps", {
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
    var EB = ZB(6280),
      DB = ZB(6350),
      KB = ZB(6364),
      VB = ZB(6377),
      SB = ZB(6379),
      BI = ZB(5570);

    function II() {
      return II = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, II.apply(this, arguments)
    }

    function ZI(BB) {
      return ZI = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, ZI(BB)
    }

    function TI(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function JI(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? TI(Object(ZB), !0).forEach((function(IB) {
          nI(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : TI(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function oI(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, hI(TB.key), TB)
      }
    }

    function GI(BB, IB, ZB) {
      return IB = kI(IB),
        function(BB, IB) {
          if (IB && ("object" === ZI(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, vI() ? Reflect.construct(IB, ZB || [], kI(BB).constructor) : IB.apply(BB, ZB))
    }

    function vI() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (vI = function() {
        return !!BB
      })()
    }

    function kI(BB) {
      return kI = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, kI(BB)
    }

    function cI(BB, IB) {
      return cI = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, cI(BB, IB)
    }

    function nI(BB, IB, ZB) {
      return (IB = hI(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function hI(BB) {
      var IB = function(BB, IB) {
        if ("object" != ZI(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != ZI(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == ZI(IB) ? IB : IB + ""
    }
    var zI = function(BB) {
      function IB() {
        return function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, IB), GI(this, IB, arguments)
      }
      return function(BB, IB) {
        if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(IB && IB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), IB && cI(BB, IB)
      }(IB, BB), ZB = IB, (JB = [{
        key: "render",
        value: function() {
          var BB = this.props,
            ZB = BB.x,
            JB = BB.y,
            oB = BB.r,
            GB = BB.alwaysShow,
            vB = BB.clipPathId,
            kB = (0, pB.u)(ZB),
            cB = (0, pB.u)(JB);
          if ((0, BI.b)(void 0 === GB, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !kB || !cB) return null;
          var nB = function(BB) {
            var IB = BB.x,
              ZB = BB.y,
              TB = BB.xAxis,
              JB = BB.yAxis,
              oB = (0, SB.b)({
                x: TB.scale,
                y: JB.scale
              }),
              GB = oB.apply({
                x: IB,
                y: ZB
              }, {
                bandAware: !0
              });
            return (0, VB.e)(BB, "discard") && !oB.isInRange(GB) ? null : GB
          }(this.props);
          if (!nB) return null;
          var hB = nB.x,
            zB = nB.y,
            FB = this.props,
            NB = FB.shape,
            gB = FB.className,
            yB = JI(JI({
              clipPath: (0, VB.e)(this.props, "hidden") ? "url(#".concat(vB, ")") : void 0
            }, (0, wB.e)(this.props, !0)), {}, {
              cx: hB,
              cy: zB
            });
          return TB.createElement(WB.e, {
            className: (0, qB.c)("recharts-reference-dot", gB)
          }, IB.renderDot(NB, yB), KB.e.renderCallByParent(this.props, {
            x: hB - oB,
            y: zB - oB,
            width: 2 * oB,
            height: 2 * oB
          }))
        }
      }]) && oI(ZB.prototype, JB), oB && oI(ZB, oB), Object.defineProperty(ZB, "prototype", {
        writable: !1
      }), ZB;
      var ZB, JB, oB
    }(TB.Component);
    nI(zI, "displayName", "ReferenceDot"), nI(zI, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), nI(zI, "renderDot", (function(BB, IB) {
      return TB.isValidElement(BB) ? TB.cloneElement(BB, IB) : vB()(BB) ? BB(IB) : TB.createElement(QB.c, II({}, IB, {
        cx: IB.cx,
        cy: IB.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var FI = ZB(6465);

    function NI() {
      return NI = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, NI.apply(this, arguments)
    }

    function gI(BB) {
      return gI = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, gI(BB)
    }

    function qI(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function yI(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? qI(Object(ZB), !0).forEach((function(IB) {
          sI(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : qI(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function UI(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, wI(TB.key), TB)
      }
    }

    function WI(BB, IB, ZB) {
      return IB = CI(IB),
        function(BB, IB) {
          if (IB && ("object" === gI(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, dI() ? Reflect.construct(IB, ZB || [], CI(BB).constructor) : IB.apply(BB, ZB))
    }

    function dI() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (dI = function() {
        return !!BB
      })()
    }

    function CI(BB) {
      return CI = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, CI(BB)
    }

    function QI(BB, IB) {
      return QI = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, QI(BB, IB)
    }

    function sI(BB, IB, ZB) {
      return (IB = wI(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function wI(BB) {
      var IB = function(BB, IB) {
        if ("object" != gI(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != gI(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == gI(IB) ? IB : IB + ""
    }
    var OI = function(BB) {
      function IB() {
        return function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, IB), WI(this, IB, arguments)
      }
      return function(BB, IB) {
        if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(IB && IB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), IB && QI(BB, IB)
      }(IB, BB), ZB = IB, (JB = [{
        key: "render",
        value: function() {
          var BB = this.props,
            ZB = BB.x1,
            JB = BB.x2,
            oB = BB.y1,
            GB = BB.y2,
            vB = BB.className,
            kB = BB.alwaysShow,
            cB = BB.clipPathId;
          (0, BI.b)(void 0 === kB, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var nB = (0, pB.u)(ZB),
            hB = (0, pB.u)(JB),
            zB = (0, pB.u)(oB),
            FB = (0, pB.u)(GB),
            NB = this.props.shape;
          if (!nB && !hB && !zB && !FB && !NB) return null;
          var gB = function(BB, IB, ZB, TB, JB) {
            var oB = JB.x1,
              GB = JB.x2,
              vB = JB.y1,
              kB = JB.y2,
              cB = JB.xAxis,
              nB = JB.yAxis;
            if (!cB || !nB) return null;
            var hB = (0, SB.b)({
                x: cB.scale,
                y: nB.scale
              }),
              zB = {
                x: BB ? hB.x.apply(oB, {
                  position: "start"
                }) : hB.x.rangeMin,
                y: ZB ? hB.y.apply(vB, {
                  position: "start"
                }) : hB.y.rangeMin
              },
              FB = {
                x: IB ? hB.x.apply(GB, {
                  position: "end"
                }) : hB.x.rangeMax,
                y: TB ? hB.y.apply(kB, {
                  position: "end"
                }) : hB.y.rangeMax
              };
            return !(0, VB.e)(JB, "discard") || hB.isInRange(zB) && hB.isInRange(FB) ? (0, SB.j)(zB, FB) : null
          }(nB, hB, zB, FB, this.props);
          if (!gB && !NB) return null;
          var yB = (0, VB.e)(this.props, "hidden") ? "url(#".concat(cB, ")") : void 0;
          return TB.createElement(WB.e, {
            className: (0, qB.c)("recharts-reference-area", vB)
          }, IB.renderRect(NB, yI(yI({
            clipPath: yB
          }, (0, wB.e)(this.props, !0)), gB)), KB.e.renderCallByParent(this.props, gB))
        }
      }]) && UI(ZB.prototype, JB), oB && UI(ZB, oB), Object.defineProperty(ZB, "prototype", {
        writable: !1
      }), ZB;
      var ZB, JB, oB
    }(TB.Component);

    function YI(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return iI(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return iI(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return iI(BB, IB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iI(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }
    sI(OI, "displayName", "ReferenceArea"), sI(OI, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), sI(OI, "renderRect", (function(BB, IB) {
      return TB.isValidElement(BB) ? TB.cloneElement(BB, IB) : vB()(BB) ? BB(IB) : TB.createElement(sB.b, NI({}, IB, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var pI = function(BB, IB, ZB, TB, JB) {
        var oB = (0, wB.g)(BB, FI.e),
          GB = (0, wB.g)(BB, zI),
          vB = [].concat(YI(oB), YI(GB)),
          kB = (0, wB.g)(BB, OI),
          cB = "".concat(TB, "Id"),
          nB = TB[0],
          hB = IB;
        if (vB.length && (hB = vB.reduce((function(BB, IB) {
            if (IB.props[cB] === ZB && (0, VB.e)(IB.props, "extendDomain") && (0, pB.w)(IB.props[nB])) {
              var TB = IB.props[nB];
              return [Math.min(BB[0], TB), Math.max(BB[1], TB)]
            }
            return BB
          }), hB)), kB.length) {
          var zB = "".concat(nB, "1"),
            FB = "".concat(nB, "2");
          hB = kB.reduce((function(BB, IB) {
            if (IB.props[cB] === ZB && (0, VB.e)(IB.props, "extendDomain") && (0, pB.w)(IB.props[zB]) && (0, pB.w)(IB.props[FB])) {
              var TB = IB.props[zB],
                JB = IB.props[FB];
              return [Math.min(BB[0], TB, JB), Math.max(BB[1], TB, JB)]
            }
            return BB
          }), hB)
        }
        return JB && JB.length && (hB = JB.reduce((function(BB, IB) {
          return (0, pB.w)(IB) ? [Math.min(BB[0], IB), Math.max(BB[1], IB)] : BB
        }), hB)), hB
      },
      aI = ZB(6373),
      HI = ZB(5592),
      MI = ZB(29),
      jI = new(ZB.n(MI)()),
      PI = "recharts.syncMouseEvents",
      RI = ZB(5594);

    function rI(BB) {
      return rI = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, rI(BB)
    }

    function mI(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, LI(TB.key), TB)
      }
    }

    function XI(BB, IB, ZB) {
      return (IB = LI(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function LI(BB) {
      var IB = function(BB, IB) {
        if ("object" != rI(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != rI(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == rI(IB) ? IB : IB + ""
    }
    var eI = function() {
      return BB = function BB() {
        ! function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, BB), XI(this, "activeIndex", 0), XI(this, "coordinateList", []), XI(this, "layout", "horizontal")
      }, (IB = [{
        key: "setDetails",
        value: function(BB) {
          var IB, ZB = BB.coordinateList,
            TB = void 0 === ZB ? null : ZB,
            JB = BB.container,
            oB = void 0 === JB ? null : JB,
            GB = BB.layout,
            vB = void 0 === GB ? null : GB,
            kB = BB.offset,
            cB = void 0 === kB ? null : kB,
            nB = BB.mouseHandlerCallback,
            hB = void 0 === nB ? null : nB;
          this.coordinateList = null !== (IB = null !== TB && void 0 !== TB ? TB : this.coordinateList) && void 0 !== IB ? IB : [], this.container = null !== oB && void 0 !== oB ? oB : this.container, this.layout = null !== vB && void 0 !== vB ? vB : this.layout, this.offset = null !== cB && void 0 !== cB ? cB : this.offset, this.mouseHandlerCallback = null !== hB && void 0 !== hB ? hB : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
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
          var BB, IB;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var ZB = this.container.getBoundingClientRect(),
              TB = ZB.x,
              JB = ZB.y,
              oB = ZB.height,
              GB = this.coordinateList[this.activeIndex].coordinate,
              vB = (null === (BB = window) || void 0 === BB ? void 0 : BB.scrollX) || 0,
              kB = (null === (IB = window) || void 0 === IB ? void 0 : IB.scrollY) || 0,
              cB = TB + GB + vB,
              nB = JB + this.offset.top + oB / 2 + kB;
            this.mouseHandlerCallback({
              pageX: cB,
              pageY: nB
            })
          }
        }
      }]) && mI(BB.prototype, IB), ZB && mI(BB, ZB), Object.defineProperty(BB, "prototype", {
        writable: !1
      }), BB;
      var BB, IB, ZB
    }();
    var uI = ZB(6435),
      fI = ZB(6511);

    function lI(BB) {
      return lI = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, lI(BB)
    }
    var AI = ["x", "y", "top", "left", "width", "height", "className"];

    function tI() {
      return tI = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, tI.apply(this, arguments)
    }

    function bI(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function xI(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != lI(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != lI(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == lI(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function EI(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }
    var DI = function(BB, IB, ZB, TB, JB, oB) {
        return "M".concat(BB, ",").concat(JB, "v").concat(TB, "M").concat(oB, ",").concat(IB, "h").concat(ZB)
      },
      KI = function(BB) {
        var IB = BB.x,
          ZB = void 0 === IB ? 0 : IB,
          JB = BB.y,
          oB = void 0 === JB ? 0 : JB,
          GB = BB.top,
          vB = void 0 === GB ? 0 : GB,
          kB = BB.left,
          cB = void 0 === kB ? 0 : kB,
          nB = BB.width,
          hB = void 0 === nB ? 0 : nB,
          zB = BB.height,
          FB = void 0 === zB ? 0 : zB,
          NB = BB.className,
          gB = function(BB) {
            for (var IB = 1; IB < arguments.length; IB++) {
              var ZB = null != arguments[IB] ? arguments[IB] : {};
              IB % 2 ? bI(Object(ZB), !0).forEach((function(IB) {
                xI(BB, IB, ZB[IB])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : bI(Object(ZB)).forEach((function(IB) {
                Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
              }))
            }
            return BB
          }({
            x: ZB,
            y: oB,
            top: vB,
            left: cB,
            width: hB,
            height: FB
          }, EI(BB, AI));
        return (0, pB.w)(ZB) && (0, pB.w)(oB) && (0, pB.w)(hB) && (0, pB.w)(FB) && (0, pB.w)(vB) && (0, pB.w)(cB) ? TB.createElement("path", tI({}, (0, wB.e)(gB, !0), {
          className: (0, qB.c)("recharts-cross", NB),
          d: DI(ZB, oB, hB, FB, vB, cB)
        })) : null
      };

    function VI(BB) {
      var IB = BB.cx,
        ZB = BB.cy,
        TB = BB.radius,
        JB = BB.startAngle,
        oB = BB.endAngle;
      return {
        points: [(0, aI.i)(IB, ZB, TB, JB), (0, aI.i)(IB, ZB, TB, oB)],
        cx: IB,
        cy: ZB,
        radius: TB,
        startAngle: JB,
        endAngle: oB
      }
    }
    var SI = ZB(6461);

    function BZ(BB, IB, ZB) {
      var TB, JB, oB, GB;
      if ("horizontal" === BB) oB = TB = IB.x, JB = ZB.top, GB = ZB.top + ZB.height;
      else if ("vertical" === BB) GB = JB = IB.y, TB = ZB.left, oB = ZB.left + ZB.width;
      else if (null != IB.cx && null != IB.cy) {
        if ("centric" !== BB) return VI(IB);
        var vB = IB.cx,
          kB = IB.cy,
          cB = IB.innerRadius,
          nB = IB.outerRadius,
          hB = IB.angle,
          zB = (0, aI.i)(vB, kB, cB, hB),
          FB = (0, aI.i)(vB, kB, nB, hB);
        TB = zB.x, JB = zB.y, oB = FB.x, GB = FB.y
      }
      return [{
        x: TB,
        y: JB
      }, {
        x: oB,
        y: GB
      }]
    }

    function IZ(BB) {
      return IZ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, IZ(BB)
    }

    function ZZ(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function TZ(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? ZZ(Object(ZB), !0).forEach((function(IB) {
          JZ(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : ZZ(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function JZ(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != IZ(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != IZ(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == IZ(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function oZ(BB) {
      var IB, ZB, JB, oB = BB.element,
        GB = BB.tooltipEventType,
        vB = BB.isActive,
        kB = BB.activeCoordinate,
        cB = BB.activePayload,
        nB = BB.offset,
        hB = BB.activeTooltipIndex,
        zB = BB.tooltipAxisBandSize,
        FB = BB.layout,
        NB = BB.chartName,
        gB = null !== (IB = oB.props.cursor) && void 0 !== IB ? IB : null === (ZB = oB.type.defaultProps) || void 0 === ZB ? void 0 : ZB.cursor;
      if (!oB || !gB || !vB || !kB || "ScatterChart" !== NB && "axis" !== GB) return null;
      var yB = fI.c;
      if ("ScatterChart" === NB) JB = kB, yB = KI;
      else if ("BarChart" === NB) JB = function(BB, IB, ZB, TB) {
        var JB = TB / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === BB ? IB.x - JB : ZB.left + .5,
          y: "horizontal" === BB ? ZB.top + .5 : IB.y - JB,
          width: "horizontal" === BB ? TB : ZB.width - 1,
          height: "horizontal" === BB ? ZB.height - 1 : TB
        }
      }(FB, kB, nB, zB), yB = sB.b;
      else if ("radial" === FB) {
        var UB = VI(kB),
          WB = UB.cx,
          dB = UB.cy,
          CB = UB.radius;
        JB = {
          cx: WB,
          cy: dB,
          startAngle: UB.startAngle,
          endAngle: UB.endAngle,
          innerRadius: CB,
          outerRadius: CB
        }, yB = SI.d
      } else JB = {
        points: BZ(FB, kB, nB)
      }, yB = fI.c;
      var QB = TZ(TZ(TZ(TZ({
        stroke: "#ccc",
        pointerEvents: "none"
      }, nB), JB), (0, wB.e)(gB, !1)), {}, {
        payload: cB,
        payloadIndex: hB,
        className: (0, qB.c)("recharts-tooltip-cursor", gB.className)
      });
      return (0, TB.isValidElement)(gB) ? (0, TB.cloneElement)(gB, QB) : (0, TB.createElement)(yB, QB)
    }
    var GZ = ZB(6488),
      vZ = ["item"],
      kZ = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function cZ(BB) {
      return cZ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, cZ(BB)
    }

    function nZ() {
      return nZ = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, nZ.apply(this, arguments)
    }

    function hZ(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        var ZB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != ZB) {
          var TB, JB, oB, GB, vB = [],
            kB = !0,
            cB = !1;
          try {
            if (oB = (ZB = ZB.call(BB)).next, 0 === IB) {
              if (Object(ZB) !== ZB) return;
              kB = !1
            } else
              for (; !(kB = (TB = oB.call(ZB)).done) && (vB.push(TB.value), vB.length !== IB); kB = !0);
          } catch (BB) {
            cB = !0, JB = BB
          } finally {
            try {
              if (!kB && null != ZB.return && (GB = ZB.return(), Object(GB) !== GB)) return
            } finally {
              if (cB) throw JB
            }
          }
          return vB
        }
      }(BB, IB) || WZ(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function zZ(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function FZ(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, wZ(TB.key), TB)
      }
    }

    function NZ(BB, IB, ZB) {
      return IB = qZ(IB),
        function(BB, IB) {
          if (IB && ("object" === cZ(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, gZ() ? Reflect.construct(IB, ZB || [], qZ(BB).constructor) : IB.apply(BB, ZB))
    }

    function gZ() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (gZ = function() {
        return !!BB
      })()
    }

    function qZ(BB) {
      return qZ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, qZ(BB)
    }

    function yZ(BB, IB) {
      return yZ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, yZ(BB, IB)
    }

    function UZ(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return dZ(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || WZ(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function WZ(BB, IB) {
      if (BB) {
        if ("string" === typeof BB) return dZ(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === ZB && BB.constructor && (ZB = BB.constructor.name), "Map" === ZB || "Set" === ZB ? Array.from(BB) : "Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB) ? dZ(BB, IB) : void 0
      }
    }

    function dZ(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function CZ(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function QZ(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? CZ(Object(ZB), !0).forEach((function(IB) {
          sZ(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : CZ(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function sZ(BB, IB, ZB) {
      return (IB = wZ(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function wZ(BB) {
      var IB = function(BB, IB) {
        if ("object" != cZ(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != cZ(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == cZ(IB) ? IB : IB + ""
    }
    var OZ = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      YZ = {
        width: "100%",
        height: "100%"
      },
      iZ = {
        x: 0,
        y: 0
      };

    function pZ(BB) {
      return BB
    }
    var aZ = function(BB, IB) {
      var ZB = IB.graphicalItems,
        TB = IB.dataStartIndex,
        JB = IB.dataEndIndex,
        oB = (null !== ZB && void 0 !== ZB ? ZB : []).reduce((function(BB, IB) {
          var ZB = IB.props.data;
          return ZB && ZB.length ? [].concat(UZ(BB), UZ(ZB)) : BB
        }), []);
      return oB.length > 0 ? oB : BB && BB.length && (0, pB.w)(TB) && (0, pB.w)(JB) ? BB.slice(TB, JB + 1) : []
    };

    function HZ(BB) {
      return "number" === BB ? [0, "auto"] : void 0
    }
    var MZ = function(BB, IB, ZB, TB) {
        var JB = BB.graphicalItems,
          oB = BB.tooltipAxis,
          GB = aZ(IB, BB);
        return ZB < 0 || !JB || !JB.length || ZB >= GB.length ? null : JB.reduce((function(JB, vB) {
          var kB, cB, nB = null !== (kB = vB.props.data) && void 0 !== kB ? kB : IB;
          if (nB && BB.dataStartIndex + BB.dataEndIndex !== 0 && BB.dataEndIndex - BB.dataStartIndex >= ZB && (nB = nB.slice(BB.dataStartIndex, BB.dataEndIndex + 1)), oB.dataKey && !oB.allowDuplicatedCategory) {
            var hB = void 0 === nB ? GB : nB;
            cB = (0, pB.e)(hB, oB.dataKey, TB)
          } else cB = nB && nB[ZB] || GB[ZB];
          return cB ? [].concat(UZ(JB), [(0, iB.Z)(vB, cB)]) : JB
        }), [])
      },
      jZ = function(BB, IB, ZB, TB) {
        var JB = TB || {
            x: BB.chartX,
            y: BB.chartY
          },
          oB = function(BB, IB) {
            return "horizontal" === IB ? BB.x : "vertical" === IB ? BB.y : "centric" === IB ? BB.angle : BB.radius
          }(JB, ZB),
          GB = BB.orderedTooltipTicks,
          vB = BB.tooltipAxis,
          kB = BB.tooltipTicks,
          cB = (0, iB.f)(oB, GB, kB, vB);
        if (cB >= 0 && kB) {
          var nB = kB[cB] && kB[cB].value,
            hB = MZ(BB, IB, cB, nB),
            zB = function(BB, IB, ZB, TB) {
              var JB = IB.find((function(BB) {
                return BB && BB.index === ZB
              }));
              if (JB) {
                if ("horizontal" === BB) return {
                  x: JB.coordinate,
                  y: TB.y
                };
                if ("vertical" === BB) return {
                  x: TB.x,
                  y: JB.coordinate
                };
                if ("centric" === BB) {
                  var oB = JB.coordinate,
                    GB = TB.radius;
                  return QZ(QZ(QZ({}, TB), (0, aI.i)(TB.cx, TB.cy, GB, oB)), {}, {
                    angle: oB,
                    radius: GB
                  })
                }
                var vB = JB.coordinate,
                  kB = TB.angle;
                return QZ(QZ(QZ({}, TB), (0, aI.i)(TB.cx, TB.cy, vB, kB)), {}, {
                  angle: kB,
                  radius: vB
                })
              }
              return iZ
            }(ZB, GB, cB, JB);
          return {
            activeTooltipIndex: cB,
            activeLabel: nB,
            activePayload: hB,
            activeCoordinate: zB
          }
        }
        return null
      },
      PZ = function(BB, IB) {
        var ZB = IB.axes,
          TB = IB.graphicalItems,
          JB = IB.axisType,
          GB = IB.axisIdKey,
          vB = IB.stackGroups,
          kB = IB.dataStartIndex,
          nB = IB.dataEndIndex,
          hB = BB.layout,
          zB = BB.children,
          FB = BB.stackOffset,
          NB = (0, iB.$)(hB, JB);
        return ZB.reduce((function(IB, ZB) {
          var gB, qB = void 0 !== ZB.type.defaultProps ? QZ(QZ({}, ZB.type.defaultProps), ZB.props) : ZB.props,
            yB = qB.type,
            UB = qB.dataKey,
            WB = qB.allowDataOverflow,
            dB = qB.allowDuplicatedCategory,
            CB = qB.scale,
            QB = qB.ticks,
            sB = qB.includeHidden,
            wB = qB[GB];
          if (IB[wB]) return IB;
          var OB, YB, aB, HB = aZ(BB.data, {
              graphicalItems: TB.filter((function(BB) {
                var IB;
                return (GB in BB.props ? BB.props[GB] : null === (IB = BB.type.defaultProps) || void 0 === IB ? void 0 : IB[GB]) === wB
              })),
              dataStartIndex: kB,
              dataEndIndex: nB
            }),
            MB = HB.length;
          (function(BB, IB, ZB) {
            if ("number" === ZB && !0 === IB && Array.isArray(BB)) {
              var TB = null === BB || void 0 === BB ? void 0 : BB[0],
                JB = null === BB || void 0 === BB ? void 0 : BB[1];
              if (TB && JB && (0, pB.w)(TB) && (0, pB.w)(JB)) return !0
            }
            return !1
          })(qB.domain, WB, yB) && (OB = (0, iB.mb)(qB.domain, null, WB), !NB || "number" !== yB && "auto" === CB || (aB = (0, iB.H)(HB, UB, "category")));
          var jB = HZ(yB);
          if (!OB || 0 === OB.length) {
            var PB, RB = null !== (PB = qB.domain) && void 0 !== PB ? PB : jB;
            if (UB) {
              if (OB = (0, iB.H)(HB, UB, yB), "category" === yB && NB) {
                var rB = (0, pB.m)(OB);
                dB && rB ? (YB = OB, OB = cB()(0, MB)) : dB || (OB = (0, iB.db)(RB, OB, ZB).reduce((function(BB, IB) {
                  return BB.indexOf(IB) >= 0 ? BB : [].concat(UZ(BB), [IB])
                }), []))
              } else if ("category" === yB) OB = dB ? OB.filter((function(BB) {
                return "" !== BB && !oB()(BB)
              })) : (0, iB.db)(RB, OB, ZB).reduce((function(BB, IB) {
                return BB.indexOf(IB) >= 0 || "" === IB || oB()(IB) ? BB : [].concat(UZ(BB), [IB])
              }), []);
              else if ("number" === yB) {
                var mB = (0, iB.gb)(HB, TB.filter((function(BB) {
                  var IB, ZB, TB = GB in BB.props ? BB.props[GB] : null === (IB = BB.type.defaultProps) || void 0 === IB ? void 0 : IB[GB],
                    JB = "hide" in BB.props ? BB.props.hide : null === (ZB = BB.type.defaultProps) || void 0 === ZB ? void 0 : ZB.hide;
                  return TB === wB && (sB || !JB)
                })), UB, JB, hB);
                mB && (OB = mB)
              }!NB || "number" !== yB && "auto" === CB || (aB = (0, iB.H)(HB, UB, "category"))
            } else OB = NB ? cB()(0, MB) : vB && vB[wB] && vB[wB].hasStack && "number" === yB ? "expand" === FB ? [0, 1] : (0, iB.N)(vB[wB].stackGroups, kB, nB) : (0, iB.L)(HB, TB.filter((function(BB) {
              var IB = GB in BB.props ? BB.props[GB] : BB.type.defaultProps[GB],
                ZB = "hide" in BB.props ? BB.props.hide : BB.type.defaultProps.hide;
              return IB === wB && (sB || !ZB)
            })), yB, hB, !0);
            if ("number" === yB) OB = pI(zB, OB, wB, JB, QB), RB && (OB = (0, iB.mb)(RB, OB, WB));
            else if ("category" === yB && RB) {
              var XB = RB;
              OB.every((function(BB) {
                return XB.indexOf(BB) >= 0
              })) && (OB = XB)
            }
          }
          return QZ(QZ({}, IB), {}, sZ({}, wB, QZ(QZ({}, qB), {}, {
            axisType: JB,
            domain: OB,
            categoricalDomain: aB,
            duplicateDomain: YB,
            originalDomain: null !== (gB = qB.domain) && void 0 !== gB ? gB : jB,
            isCategorical: NB,
            layout: hB
          })))
        }), {})
      },
      RZ = function(BB, IB) {
        var ZB = IB.axisType,
          TB = void 0 === ZB ? "xAxis" : ZB,
          JB = IB.AxisComp,
          oB = IB.graphicalItems,
          GB = IB.stackGroups,
          vB = IB.dataStartIndex,
          kB = IB.dataEndIndex,
          nB = BB.children,
          zB = "".concat(TB, "Id"),
          FB = (0, wB.g)(nB, JB),
          NB = {};
        return FB && FB.length ? NB = PZ(BB, {
          axes: FB,
          graphicalItems: oB,
          axisType: TB,
          axisIdKey: zB,
          stackGroups: GB,
          dataStartIndex: vB,
          dataEndIndex: kB
        }) : oB && oB.length && (NB = function(BB, IB) {
          var ZB = IB.graphicalItems,
            TB = IB.Axis,
            JB = IB.axisType,
            oB = IB.axisIdKey,
            GB = IB.stackGroups,
            vB = IB.dataStartIndex,
            kB = IB.dataEndIndex,
            nB = BB.layout,
            zB = BB.children,
            FB = aZ(BB.data, {
              graphicalItems: ZB,
              dataStartIndex: vB,
              dataEndIndex: kB
            }),
            NB = FB.length,
            gB = (0, iB.$)(nB, JB),
            qB = -1;
          return ZB.reduce((function(BB, IB) {
            var yB, UB = (void 0 !== IB.type.defaultProps ? QZ(QZ({}, IB.type.defaultProps), IB.props) : IB.props)[oB],
              WB = HZ("number");
            return BB[UB] ? BB : (qB++, gB ? yB = cB()(0, NB) : GB && GB[UB] && GB[UB].hasStack ? (yB = (0, iB.N)(GB[UB].stackGroups, vB, kB), yB = pI(zB, yB, UB, JB)) : (yB = (0, iB.mb)(WB, (0, iB.L)(FB, ZB.filter((function(BB) {
              var IB, ZB, TB = oB in BB.props ? BB.props[oB] : null === (IB = BB.type.defaultProps) || void 0 === IB ? void 0 : IB[oB],
                JB = "hide" in BB.props ? BB.props.hide : null === (ZB = BB.type.defaultProps) || void 0 === ZB ? void 0 : ZB.hide;
              return TB === UB && !JB
            })), "number", nB), TB.defaultProps.allowDataOverflow), yB = pI(zB, yB, UB, JB)), QZ(QZ({}, BB), {}, sZ({}, UB, QZ(QZ({
              axisType: JB
            }, TB.defaultProps), {}, {
              hide: !0,
              orientation: hB()(OZ, "".concat(JB, ".").concat(qB % 2), null),
              domain: yB,
              originalDomain: WB,
              isCategorical: gB,
              layout: nB
            }))))
          }), {})
        }(BB, {
          Axis: JB,
          graphicalItems: oB,
          axisType: TB,
          axisIdKey: zB,
          stackGroups: GB,
          dataStartIndex: vB,
          dataEndIndex: kB
        })), NB
      },
      rZ = function(BB) {
        var IB = BB.children,
          ZB = BB.defaultShowTooltip,
          TB = (0, wB.k)(IB, xB),
          JB = 0,
          oB = 0;
        return BB.data && 0 !== BB.data.length && (oB = BB.data.length - 1), TB && TB.props && (TB.props.startIndex >= 0 && (JB = TB.props.startIndex), TB.props.endIndex >= 0 && (oB = TB.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: JB,
          dataEndIndex: oB,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(ZB)
        }
      },
      mZ = function(BB) {
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
      XZ = function(BB, IB) {
        return "xAxis" === IB ? BB[IB].width : "yAxis" === IB ? BB[IB].height : void 0
      },
      LZ = function(BB) {
        var IB = BB.chartName,
          ZB = BB.GraphicalChild,
          JB = BB.defaultTooltipEventType,
          GB = void 0 === JB ? "axis" : JB,
          kB = BB.validateTooltipEventTypes,
          cB = void 0 === kB ? ["axis"] : kB,
          nB = BB.axisComponents,
          zB = BB.legendContent,
          NB = BB.formatAxisMap,
          OB = BB.defaultProps,
          YB = function(BB, IB) {
            var ZB = IB.graphicalItems,
              TB = IB.stackGroups,
              JB = IB.offset,
              GB = IB.updateId,
              vB = IB.dataStartIndex,
              kB = IB.dataEndIndex,
              cB = BB.barSize,
              hB = BB.layout,
              zB = BB.barGap,
              FB = BB.barCategoryGap,
              NB = BB.maxBarSize,
              gB = mZ(hB),
              qB = gB.numericAxisName,
              UB = gB.cateAxisName,
              WB = function(BB) {
                return !(!BB || !BB.length) && BB.some((function(BB) {
                  var IB = (0, wB.m)(BB && BB.type);
                  return IB && IB.indexOf("Bar") >= 0
                }))
              }(ZB),
              dB = [];
            return ZB.forEach((function(ZB, gB) {
              var CB = aZ(BB.data, {
                  graphicalItems: [ZB],
                  dataStartIndex: vB,
                  dataEndIndex: kB
                }),
                QB = void 0 !== ZB.type.defaultProps ? QZ(QZ({}, ZB.type.defaultProps), ZB.props) : ZB.props,
                sB = QB.dataKey,
                OB = QB.maxBarSize,
                YB = QB["".concat(qB, "Id")],
                pB = QB["".concat(UB, "Id")],
                aB = nB.reduce((function(BB, ZB) {
                  var TB = IB["".concat(ZB.axisType, "Map")],
                    JB = QB["".concat(ZB.axisType, "Id")];
                  TB && TB[JB] || "zAxis" === ZB.axisType || (0, yB.d)(!1);
                  var oB = TB[JB];
                  return QZ(QZ({}, BB), {}, sZ(sZ({}, ZB.axisType, oB), "".concat(ZB.axisType, "Ticks"), (0, iB.W)(oB)))
                }), {}),
                HB = aB[UB],
                MB = aB["".concat(UB, "Ticks")],
                jB = TB && TB[YB] && TB[YB].hasStack && (0, iB.U)(ZB, TB[YB].stackGroups),
                PB = (0, wB.m)(ZB.type).indexOf("Bar") >= 0,
                RB = (0, iB.p)(HB, MB),
                rB = [],
                mB = WB && (0, iB.t)({
                  barSize: cB,
                  stackGroups: TB,
                  totalSize: XZ(aB, UB)
                });
              if (PB) {
                var XB, LB, eB = oB()(OB) ? NB : OB,
                  uB = null !== (XB = null !== (LB = (0, iB.p)(HB, MB, !0)) && void 0 !== LB ? LB : eB) && void 0 !== XB ? XB : 0;
                rB = (0, iB.q)({
                  barGap: zB,
                  barCategoryGap: FB,
                  bandSize: uB !== RB ? uB : RB,
                  sizeList: mB[pB],
                  maxBarSize: eB
                }), uB !== RB && (rB = rB.map((function(BB) {
                  return QZ(QZ({}, BB), {}, {
                    position: QZ(QZ({}, BB.position), {}, {
                      offset: BB.position.offset - uB / 2
                    })
                  })
                })))
              }
              var fB = ZB && ZB.type && ZB.type.getComposedData;
              fB && dB.push({
                props: QZ(QZ({}, fB(QZ(QZ({}, aB), {}, {
                  displayedData: CB,
                  props: BB,
                  dataKey: sB,
                  item: ZB,
                  bandSize: RB,
                  barPosition: rB,
                  offset: JB,
                  stackedData: jB,
                  layout: hB,
                  dataStartIndex: vB,
                  dataEndIndex: kB
                }))), {}, sZ(sZ(sZ({
                  key: ZB.key || "item-".concat(gB)
                }, qB, aB[qB]), UB, aB[UB]), "animationId", GB)),
                childIndex: (0, wB.z)(ZB, BB.children),
                item: ZB
              })
            })), dB
          },
          aB = function(BB, TB) {
            var JB = BB.props,
              oB = BB.dataStartIndex,
              GB = BB.dataEndIndex,
              vB = BB.updateId;
            if (!(0, wB.B)({
                props: JB
              })) return null;
            var kB = JB.children,
              cB = JB.layout,
              zB = JB.stackOffset,
              gB = JB.data,
              qB = JB.reverseStackOrder,
              yB = mZ(cB),
              UB = yB.numericAxisName,
              WB = yB.cateAxisName,
              dB = (0, wB.g)(kB, ZB),
              QB = (0, iB.T)(gB, dB, "".concat(UB, "Id"), "".concat(WB, "Id"), zB, qB),
              sB = nB.reduce((function(BB, IB) {
                var ZB = "".concat(IB.axisType, "Map");
                return QZ(QZ({}, BB), {}, sZ({}, ZB, RZ(JB, QZ(QZ({}, IB), {}, {
                  graphicalItems: dB,
                  stackGroups: IB.axisType === UB && QB,
                  dataStartIndex: oB,
                  dataEndIndex: GB
                }))))
              }), {}),
              OB = function(BB, IB) {
                var ZB = BB.props,
                  TB = BB.graphicalItems,
                  JB = BB.xAxisMap,
                  oB = void 0 === JB ? {} : JB,
                  GB = BB.yAxisMap,
                  vB = void 0 === GB ? {} : GB,
                  kB = ZB.width,
                  cB = ZB.height,
                  nB = ZB.children,
                  zB = ZB.margin || {},
                  FB = (0, wB.k)(nB, xB),
                  NB = (0, wB.k)(nB, CB.c),
                  gB = Object.keys(vB).reduce((function(BB, IB) {
                    var ZB = vB[IB],
                      TB = ZB.orientation;
                    return ZB.mirror || ZB.hide ? BB : QZ(QZ({}, BB), {}, sZ({}, TB, BB[TB] + ZB.width))
                  }), {
                    left: zB.left || 0,
                    right: zB.right || 0
                  }),
                  qB = Object.keys(oB).reduce((function(BB, IB) {
                    var ZB = oB[IB],
                      TB = ZB.orientation;
                    return ZB.mirror || ZB.hide ? BB : QZ(QZ({}, BB), {}, sZ({}, TB, hB()(BB, "".concat(TB)) + ZB.height))
                  }), {
                    top: zB.top || 0,
                    bottom: zB.bottom || 0
                  }),
                  yB = QZ(QZ({}, qB), gB),
                  UB = yB.bottom;
                FB && (yB.bottom += FB.props.height || xB.defaultProps.height), NB && IB && (yB = (0, iB.e)(yB, TB, ZB, IB));
                var WB = kB - yB.left - yB.right,
                  dB = cB - yB.top - yB.bottom;
                return QZ(QZ({
                  brushBottom: UB
                }, yB), {}, {
                  width: Math.max(WB, 0),
                  height: Math.max(dB, 0)
                })
              }(QZ(QZ({}, sB), {}, {
                props: JB,
                graphicalItems: dB
              }), null === TB || void 0 === TB ? void 0 : TB.legendBBox);
            Object.keys(sB).forEach((function(BB) {
              sB[BB] = NB(JB, sB[BB], OB, BB.replace("Map", ""), IB)
            }));
            var aB = function(BB) {
                var IB = (0, pB.i)(BB),
                  ZB = (0, iB.W)(IB, !1, !0);
                return {
                  tooltipTicks: ZB,
                  orderedTooltipTicks: FB()(ZB, (function(BB) {
                    return BB.coordinate
                  })),
                  tooltipAxis: IB,
                  tooltipAxisBandSize: (0, iB.p)(IB, ZB)
                }
              }(sB["".concat(WB, "Map")]),
              HB = YB(JB, QZ(QZ({}, sB), {}, {
                dataStartIndex: oB,
                dataEndIndex: GB,
                updateId: vB,
                graphicalItems: dB,
                stackGroups: QB,
                offset: OB
              }));
            return QZ(QZ({
              formattedGraphicalItems: HB,
              graphicalItems: dB,
              offset: OB,
              stackGroups: QB
            }, aB), sB)
          },
          HB = function(BB) {
            function ZB(BB) {
              var JB, GB, kB;
              return function(BB, IB) {
                if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
              }(this, ZB), sZ(kB = NZ(this, ZB, [BB]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), sZ(kB, "accessibilityManager", new eI), sZ(kB, "handleLegendBBoxUpdate", (function(BB) {
                if (BB) {
                  var IB = kB.state,
                    ZB = IB.dataStartIndex,
                    TB = IB.dataEndIndex,
                    JB = IB.updateId;
                  kB.setState(QZ({
                    legendBBox: BB
                  }, aB({
                    props: kB.props,
                    dataStartIndex: ZB,
                    dataEndIndex: TB,
                    updateId: JB
                  }, QZ(QZ({}, kB.state), {}, {
                    legendBBox: BB
                  }))))
                }
              })), sZ(kB, "handleReceiveSyncEvent", (function(BB, IB, ZB) {
                if (kB.props.syncId === BB) {
                  if (ZB === kB.eventEmitterSymbol && "function" !== typeof kB.props.syncMethod) return;
                  kB.applySyncEvent(IB)
                }
              })), sZ(kB, "handleBrushChange", (function(BB) {
                var IB = BB.startIndex,
                  ZB = BB.endIndex;
                if (IB !== kB.state.dataStartIndex || ZB !== kB.state.dataEndIndex) {
                  var TB = kB.state.updateId;
                  kB.setState((function() {
                    return QZ({
                      dataStartIndex: IB,
                      dataEndIndex: ZB
                    }, aB({
                      props: kB.props,
                      dataStartIndex: IB,
                      dataEndIndex: ZB,
                      updateId: TB
                    }, kB.state))
                  })), kB.triggerSyncEvent({
                    dataStartIndex: IB,
                    dataEndIndex: ZB
                  })
                }
              })), sZ(kB, "handleMouseEnter", (function(BB) {
                var IB = kB.getMouseInfo(BB);
                if (IB) {
                  var ZB = QZ(QZ({}, IB), {}, {
                    isTooltipActive: !0
                  });
                  kB.setState(ZB), kB.triggerSyncEvent(ZB);
                  var TB = kB.props.onMouseEnter;
                  vB()(TB) && TB(ZB, BB)
                }
              })), sZ(kB, "triggeredAfterMouseMove", (function(BB) {
                var IB = kB.getMouseInfo(BB),
                  ZB = IB ? QZ(QZ({}, IB), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                kB.setState(ZB), kB.triggerSyncEvent(ZB);
                var TB = kB.props.onMouseMove;
                vB()(TB) && TB(ZB, BB)
              })), sZ(kB, "handleItemMouseEnter", (function(BB) {
                kB.setState((function() {
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
              })), sZ(kB, "handleItemMouseLeave", (function() {
                kB.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), sZ(kB, "handleMouseMove", (function(BB) {
                BB.persist(), kB.throttleTriggeredAfterMouseMove(BB)
              })), sZ(kB, "handleMouseLeave", (function(BB) {
                kB.throttleTriggeredAfterMouseMove.cancel();
                var IB = {
                  isTooltipActive: !1
                };
                kB.setState(IB), kB.triggerSyncEvent(IB);
                var ZB = kB.props.onMouseLeave;
                vB()(ZB) && ZB(IB, BB)
              })), sZ(kB, "handleOuterEvent", (function(BB) {
                var IB, ZB = (0, wB.q)(BB),
                  TB = hB()(kB.props, "".concat(ZB));
                ZB && vB()(TB) && TB(null !== (IB = /.*touch.*/i.test(ZB) ? kB.getMouseInfo(BB.changedTouches[0]) : kB.getMouseInfo(BB)) && void 0 !== IB ? IB : {}, BB)
              })), sZ(kB, "handleClick", (function(BB) {
                var IB = kB.getMouseInfo(BB);
                if (IB) {
                  var ZB = QZ(QZ({}, IB), {}, {
                    isTooltipActive: !0
                  });
                  kB.setState(ZB), kB.triggerSyncEvent(ZB);
                  var TB = kB.props.onClick;
                  vB()(TB) && TB(ZB, BB)
                }
              })), sZ(kB, "handleMouseDown", (function(BB) {
                var IB = kB.props.onMouseDown;
                vB()(IB) && IB(kB.getMouseInfo(BB), BB)
              })), sZ(kB, "handleMouseUp", (function(BB) {
                var IB = kB.props.onMouseUp;
                vB()(IB) && IB(kB.getMouseInfo(BB), BB)
              })), sZ(kB, "handleTouchMove", (function(BB) {
                null != BB.changedTouches && BB.changedTouches.length > 0 && kB.throttleTriggeredAfterMouseMove(BB.changedTouches[0])
              })), sZ(kB, "handleTouchStart", (function(BB) {
                null != BB.changedTouches && BB.changedTouches.length > 0 && kB.handleMouseDown(BB.changedTouches[0])
              })), sZ(kB, "handleTouchEnd", (function(BB) {
                null != BB.changedTouches && BB.changedTouches.length > 0 && kB.handleMouseUp(BB.changedTouches[0])
              })), sZ(kB, "handleDoubleClick", (function(BB) {
                var IB = kB.props.onDoubleClick;
                vB()(IB) && IB(kB.getMouseInfo(BB), BB)
              })), sZ(kB, "handleContextMenu", (function(BB) {
                var IB = kB.props.onContextMenu;
                vB()(IB) && IB(kB.getMouseInfo(BB), BB)
              })), sZ(kB, "triggerSyncEvent", (function(BB) {
                void 0 !== kB.props.syncId && jI.emit(PI, kB.props.syncId, BB, kB.eventEmitterSymbol)
              })), sZ(kB, "applySyncEvent", (function(BB) {
                var IB = kB.props,
                  ZB = IB.layout,
                  TB = IB.syncMethod,
                  JB = kB.state.updateId,
                  oB = BB.dataStartIndex,
                  GB = BB.dataEndIndex;
                if (void 0 !== BB.dataStartIndex || void 0 !== BB.dataEndIndex) kB.setState(QZ({
                  dataStartIndex: oB,
                  dataEndIndex: GB
                }, aB({
                  props: kB.props,
                  dataStartIndex: oB,
                  dataEndIndex: GB,
                  updateId: JB
                }, kB.state)));
                else if (void 0 !== BB.activeTooltipIndex) {
                  var vB = BB.chartX,
                    cB = BB.chartY,
                    nB = BB.activeTooltipIndex,
                    hB = kB.state,
                    zB = hB.offset,
                    FB = hB.tooltipTicks;
                  if (!zB) return;
                  if ("function" === typeof TB) nB = TB(FB, BB);
                  else if ("value" === TB) {
                    nB = -1;
                    for (var NB = 0; NB < FB.length; NB++)
                      if (FB[NB].value === BB.activeLabel) {
                        nB = NB;
                        break
                      }
                  }
                  var gB = QZ(QZ({}, zB), {}, {
                      x: zB.left,
                      y: zB.top
                    }),
                    qB = Math.min(vB, gB.x + gB.width),
                    yB = Math.min(cB, gB.y + gB.height),
                    UB = FB[nB] && FB[nB].value,
                    WB = MZ(kB.state, kB.props.data, nB),
                    dB = FB[nB] ? {
                      x: "horizontal" === ZB ? FB[nB].coordinate : qB,
                      y: "horizontal" === ZB ? yB : FB[nB].coordinate
                    } : iZ;
                  kB.setState(QZ(QZ({}, BB), {}, {
                    activeLabel: UB,
                    activeCoordinate: dB,
                    activePayload: WB,
                    activeTooltipIndex: nB
                  }))
                } else kB.setState(BB)
              })), sZ(kB, "renderCursor", (function(BB) {
                var ZB, JB = kB.state,
                  oB = JB.isTooltipActive,
                  GB = JB.activeCoordinate,
                  vB = JB.activePayload,
                  cB = JB.offset,
                  nB = JB.activeTooltipIndex,
                  hB = JB.tooltipAxisBandSize,
                  zB = kB.getTooltipEventType(),
                  FB = null !== (ZB = BB.props.active) && void 0 !== ZB ? ZB : oB,
                  NB = kB.props.layout,
                  gB = BB.key || "_recharts-cursor";
                return TB.createElement(oZ, {
                  key: gB,
                  activeCoordinate: GB,
                  activePayload: vB,
                  activeTooltipIndex: nB,
                  chartName: IB,
                  element: BB,
                  isActive: FB,
                  layout: NB,
                  offset: cB,
                  tooltipAxisBandSize: hB,
                  tooltipEventType: zB
                })
              })), sZ(kB, "renderPolarAxis", (function(BB, IB, ZB) {
                var JB = hB()(BB, "type.axisType"),
                  oB = hB()(kB.state, "".concat(JB, "Map")),
                  GB = BB.type.defaultProps,
                  vB = void 0 !== GB ? QZ(QZ({}, GB), BB.props) : BB.props,
                  cB = oB && oB[vB["".concat(JB, "Id")]];
                return (0, TB.cloneElement)(BB, QZ(QZ({}, cB), {}, {
                  className: (0, qB.c)(JB, cB.className),
                  key: BB.key || "".concat(IB, "-").concat(ZB),
                  ticks: (0, iB.W)(cB, !0)
                }))
              })), sZ(kB, "renderPolarGrid", (function(BB) {
                var IB = BB.props,
                  ZB = IB.radialLines,
                  JB = IB.polarAngles,
                  oB = IB.polarRadius,
                  GB = kB.state,
                  vB = GB.radiusAxisMap,
                  cB = GB.angleAxisMap,
                  nB = (0, pB.i)(vB),
                  hB = (0, pB.i)(cB),
                  zB = hB.cx,
                  FB = hB.cy,
                  NB = hB.innerRadius,
                  gB = hB.outerRadius;
                return (0, TB.cloneElement)(BB, {
                  polarAngles: Array.isArray(JB) ? JB : (0, iB.W)(hB, !0).map((function(BB) {
                    return BB.coordinate
                  })),
                  polarRadius: Array.isArray(oB) ? oB : (0, iB.W)(nB, !0).map((function(BB) {
                    return BB.coordinate
                  })),
                  cx: zB,
                  cy: FB,
                  innerRadius: NB,
                  outerRadius: gB,
                  key: BB.key || "polar-grid",
                  radialLines: ZB
                })
              })), sZ(kB, "renderLegend", (function() {
                var BB = kB.state.formattedGraphicalItems,
                  IB = kB.props,
                  ZB = IB.children,
                  JB = IB.width,
                  oB = IB.height,
                  GB = kB.props.margin || {},
                  vB = JB - (GB.left || 0) - (GB.right || 0),
                  cB = (0, DB.d)({
                    children: ZB,
                    formattedGraphicalItems: BB,
                    legendWidth: vB,
                    legendContent: zB
                  });
                if (!cB) return null;
                var nB = cB.item,
                  hB = zZ(cB, vZ);
                return (0, TB.cloneElement)(nB, QZ(QZ({}, hB), {}, {
                  chartWidth: JB,
                  chartHeight: oB,
                  margin: GB,
                  onBBoxUpdate: kB.handleLegendBBoxUpdate
                }))
              })), sZ(kB, "renderTooltip", (function() {
                var BB, IB = kB.props,
                  ZB = IB.children,
                  JB = IB.accessibilityLayer,
                  oB = (0, wB.k)(ZB, dB.e);
                if (!oB) return null;
                var GB = kB.state,
                  vB = GB.isTooltipActive,
                  cB = GB.activeCoordinate,
                  nB = GB.activePayload,
                  hB = GB.activeLabel,
                  zB = GB.offset,
                  FB = null !== (BB = oB.props.active) && void 0 !== BB ? BB : vB;
                return (0, TB.cloneElement)(oB, {
                  viewBox: QZ(QZ({}, zB), {}, {
                    x: zB.left,
                    y: zB.top
                  }),
                  active: FB,
                  label: hB,
                  payload: FB ? nB : [],
                  coordinate: cB,
                  accessibilityLayer: JB
                })
              })), sZ(kB, "renderBrush", (function(BB) {
                var IB = kB.props,
                  ZB = IB.margin,
                  JB = IB.data,
                  oB = kB.state,
                  GB = oB.offset,
                  vB = oB.dataStartIndex,
                  cB = oB.dataEndIndex,
                  nB = oB.updateId;
                return (0, TB.cloneElement)(BB, {
                  key: BB.key || "_recharts-brush",
                  onChange: (0, iB.h)(kB.handleBrushChange, BB.props.onChange),
                  data: JB,
                  x: (0, pB.w)(BB.props.x) ? BB.props.x : GB.left,
                  y: (0, pB.w)(BB.props.y) ? BB.props.y : GB.top + GB.height + GB.brushBottom - (ZB.bottom || 0),
                  width: (0, pB.w)(BB.props.width) ? BB.props.width : GB.width,
                  startIndex: vB,
                  endIndex: cB,
                  updateId: "brush-".concat(nB)
                })
              })), sZ(kB, "renderReferenceElement", (function(BB, IB, ZB) {
                if (!BB) return null;
                var JB = kB.clipPathId,
                  oB = kB.state,
                  GB = oB.xAxisMap,
                  vB = oB.yAxisMap,
                  cB = oB.offset,
                  nB = BB.type.defaultProps || {},
                  hB = BB.props,
                  zB = hB.xAxisId,
                  FB = void 0 === zB ? nB.xAxisId : zB,
                  NB = hB.yAxisId,
                  gB = void 0 === NB ? nB.yAxisId : NB;
                return (0, TB.cloneElement)(BB, {
                  key: BB.key || "".concat(IB, "-").concat(ZB),
                  xAxis: GB[FB],
                  yAxis: vB[gB],
                  viewBox: {
                    x: cB.left,
                    y: cB.top,
                    width: cB.width,
                    height: cB.height
                  },
                  clipPathId: JB
                })
              })), sZ(kB, "renderActivePoints", (function(BB) {
                var IB = BB.item,
                  TB = BB.activePoint,
                  JB = BB.basePoint,
                  oB = BB.childIndex,
                  GB = BB.isRange,
                  vB = [],
                  kB = IB.props.key,
                  cB = void 0 !== IB.item.type.defaultProps ? QZ(QZ({}, IB.item.type.defaultProps), IB.item.props) : IB.item.props,
                  nB = cB.activeDot,
                  hB = QZ(QZ({
                    index: oB,
                    dataKey: cB.dataKey,
                    cx: TB.x,
                    cy: TB.y,
                    r: 4,
                    fill: (0, iB.Q)(IB.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: TB.payload,
                    value: TB.value
                  }, (0, wB.e)(nB, !1)), (0, RI.j)(nB));
                return vB.push(ZB.renderActiveDot(nB, hB, "".concat(kB, "-activePoint-").concat(oB))), JB ? vB.push(ZB.renderActiveDot(nB, QZ(QZ({}, hB), {}, {
                  cx: JB.x,
                  cy: JB.y
                }), "".concat(kB, "-basePoint-").concat(oB))) : GB && vB.push(null), vB
              })), sZ(kB, "renderGraphicChild", (function(BB, IB, ZB) {
                var JB = kB.filterFormatItem(BB, IB, ZB);
                if (!JB) return null;
                var GB = kB.getTooltipEventType(),
                  vB = kB.state,
                  cB = vB.isTooltipActive,
                  nB = vB.tooltipAxis,
                  hB = vB.activeTooltipIndex,
                  zB = vB.activeLabel,
                  FB = kB.props.children,
                  NB = (0, wB.k)(FB, dB.e),
                  gB = JB.props,
                  qB = gB.points,
                  yB = gB.isRange,
                  UB = gB.baseLine,
                  WB = void 0 !== JB.item.type.defaultProps ? QZ(QZ({}, JB.item.type.defaultProps), JB.item.props) : JB.item.props,
                  CB = WB.activeDot,
                  QB = WB.hide,
                  sB = WB.activeBar,
                  OB = WB.activeShape,
                  YB = Boolean(!QB && cB && NB && (CB || sB || OB)),
                  aB = {};
                "axis" !== GB && NB && "click" === NB.props.trigger ? aB = {
                  onClick: (0, iB.h)(kB.handleItemMouseEnter, BB.props.onClick)
                } : "axis" !== GB && (aB = {
                  onMouseLeave: (0, iB.h)(kB.handleItemMouseLeave, BB.props.onMouseLeave),
                  onMouseEnter: (0, iB.h)(kB.handleItemMouseEnter, BB.props.onMouseEnter)
                });
                var HB = (0, TB.cloneElement)(BB, QZ(QZ({}, JB.props), aB));
                if (YB) {
                  if (!(hB >= 0)) {
                    var MB, jB = (null !== (MB = kB.getItemByXY(kB.state.activeCoordinate)) && void 0 !== MB ? MB : {
                        graphicalItem: HB
                      }).graphicalItem,
                      PB = jB.item,
                      RB = void 0 === PB ? BB : PB,
                      rB = jB.childIndex,
                      mB = QZ(QZ(QZ({}, JB.props), aB), {}, {
                        activeIndex: rB
                      });
                    return [(0, TB.cloneElement)(RB, mB), null, null]
                  }
                  var XB, LB;
                  if (nB.dataKey && !nB.allowDuplicatedCategory) {
                    var eB = "function" === typeof nB.dataKey ? function(BB) {
                      return "function" === typeof nB.dataKey ? nB.dataKey(BB.payload) : null
                    } : "payload.".concat(nB.dataKey.toString());
                    XB = (0, pB.e)(qB, eB, zB), LB = yB && UB && (0, pB.e)(UB, eB, zB)
                  } else XB = null === qB || void 0 === qB ? void 0 : qB[hB], LB = yB && UB && UB[hB];
                  if (OB || sB) {
                    var uB = void 0 !== BB.props.activeIndex ? BB.props.activeIndex : hB;
                    return [(0, TB.cloneElement)(BB, QZ(QZ(QZ({}, JB.props), aB), {}, {
                      activeIndex: uB
                    })), null, null]
                  }
                  if (!oB()(XB)) return [HB].concat(UZ(kB.renderActivePoints({
                    item: JB,
                    activePoint: XB,
                    basePoint: LB,
                    childIndex: hB,
                    isRange: yB
                  })))
                }
                return yB ? [HB, null, null] : [HB, null]
              })), sZ(kB, "renderCustomized", (function(BB, IB, ZB) {
                return (0, TB.cloneElement)(BB, QZ(QZ({
                  key: "recharts-customized-".concat(ZB)
                }, kB.props), kB.state))
              })), sZ(kB, "renderMap", {
                CartesianGrid: {
                  handler: pZ,
                  once: !0
                },
                ReferenceArea: {
                  handler: kB.renderReferenceElement
                },
                ReferenceLine: {
                  handler: pZ
                },
                ReferenceDot: {
                  handler: kB.renderReferenceElement
                },
                XAxis: {
                  handler: pZ
                },
                YAxis: {
                  handler: pZ
                },
                Brush: {
                  handler: kB.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: kB.renderGraphicChild
                },
                Line: {
                  handler: kB.renderGraphicChild
                },
                Area: {
                  handler: kB.renderGraphicChild
                },
                Radar: {
                  handler: kB.renderGraphicChild
                },
                RadialBar: {
                  handler: kB.renderGraphicChild
                },
                Scatter: {
                  handler: kB.renderGraphicChild
                },
                Pie: {
                  handler: kB.renderGraphicChild
                },
                Funnel: {
                  handler: kB.renderGraphicChild
                },
                Tooltip: {
                  handler: kB.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: kB.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: kB.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: kB.renderPolarAxis
                },
                Customized: {
                  handler: kB.renderCustomized
                }
              }), kB.clipPathId = "".concat(null !== (JB = BB.id) && void 0 !== JB ? JB : (0, pB.z)("recharts"), "-clip"), kB.throttleTriggeredAfterMouseMove = gB()(kB.triggeredAfterMouseMove, null !== (GB = BB.throttleDelay) && void 0 !== GB ? GB : 1e3 / 60), kB.state = {}, kB
            }
            return function(BB, IB) {
              if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
              BB.prototype = Object.create(IB && IB.prototype, {
                constructor: {
                  value: BB,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(BB, "prototype", {
                writable: !1
              }), IB && yZ(BB, IB)
            }(ZB, BB), JB = ZB, kB = [{
              key: "componentDidMount",
              value: function() {
                var BB, IB;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (BB = this.props.margin.left) && void 0 !== BB ? BB : 0,
                    top: null !== (IB = this.props.margin.top) && void 0 !== IB ? IB : 0
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
                  IB = BB.children,
                  ZB = BB.data,
                  TB = BB.height,
                  JB = BB.layout,
                  oB = (0, wB.k)(IB, dB.e);
                if (oB) {
                  var GB = oB.props.defaultIndex;
                  if (!("number" !== typeof GB || GB < 0 || GB > this.state.tooltipTicks.length - 1)) {
                    var vB = this.state.tooltipTicks[GB] && this.state.tooltipTicks[GB].value,
                      kB = MZ(this.state, ZB, GB, vB),
                      cB = this.state.tooltipTicks[GB].coordinate,
                      nB = (this.state.offset.top + TB) / 2,
                      hB = "horizontal" === JB ? {
                        x: cB,
                        y: nB
                      } : {
                        y: cB,
                        x: nB
                      },
                      zB = this.state.formattedGraphicalItems.find((function(BB) {
                        return "Scatter" === BB.item.type.name
                      }));
                    zB && (hB = QZ(QZ({}, hB), zB.props.points[GB].tooltipPosition), kB = zB.props.points[GB].tooltipPayload);
                    var FB = {
                      activeTooltipIndex: GB,
                      isTooltipActive: !0,
                      activeLabel: vB,
                      activePayload: kB,
                      activeCoordinate: hB
                    };
                    this.setState(FB), this.renderCursor(oB), this.accessibilityManager.setIndex(GB)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(BB, IB) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== IB.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== BB.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== BB.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (ZB = this.props.margin.left) && void 0 !== ZB ? ZB : 0,
                    top: null !== (TB = this.props.margin.top) && void 0 !== TB ? TB : 0
                  }
                }), null) : null;
                var ZB, TB
              }
            }, {
              key: "componentDidUpdate",
              value: function(BB) {
                (0, wB.w)([(0, wB.k)(BB.children, dB.e)], [(0, wB.k)(this.props.children, dB.e)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var BB = (0, wB.k)(this.props.children, dB.e);
                if (BB && "boolean" === typeof BB.props.shared) {
                  var IB = BB.props.shared ? "axis" : "item";
                  return cB.indexOf(IB) >= 0 ? IB : GB
                }
                return GB
              }
            }, {
              key: "getMouseInfo",
              value: function(BB) {
                if (!this.container) return null;
                var IB = this.container,
                  ZB = IB.getBoundingClientRect(),
                  TB = (0, EB.d)(ZB),
                  JB = {
                    chartX: Math.round(BB.pageX - TB.left),
                    chartY: Math.round(BB.pageY - TB.top)
                  },
                  oB = ZB.width / IB.offsetWidth || 1,
                  GB = this.inRange(JB.chartX, JB.chartY, oB);
                if (!GB) return null;
                var vB = this.state,
                  kB = vB.xAxisMap,
                  cB = vB.yAxisMap,
                  nB = this.getTooltipEventType(),
                  hB = jZ(this.state, this.props.data, this.props.layout, GB);
                if ("axis" !== nB && kB && cB) {
                  var zB = (0, pB.i)(kB).scale,
                    FB = (0, pB.i)(cB).scale,
                    NB = zB && zB.invert ? zB.invert(JB.chartX) : null,
                    gB = FB && FB.invert ? FB.invert(JB.chartY) : null;
                  return QZ(QZ({}, JB), {}, {
                    xValue: NB,
                    yValue: gB
                  }, hB)
                }
                return hB ? QZ(QZ({}, JB), hB) : null
              }
            }, {
              key: "inRange",
              value: function(BB, IB) {
                var ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  TB = this.props.layout,
                  JB = BB / ZB,
                  oB = IB / ZB;
                if ("horizontal" === TB || "vertical" === TB) {
                  var GB = this.state.offset;
                  return JB >= GB.left && JB <= GB.left + GB.width && oB >= GB.top && oB <= GB.top + GB.height ? {
                    x: JB,
                    y: oB
                  } : null
                }
                var vB = this.state,
                  kB = vB.angleAxisMap,
                  cB = vB.radiusAxisMap;
                if (kB && cB) {
                  var nB = (0, pB.i)(kB);
                  return (0, aI.f)({
                    x: JB,
                    y: oB
                  }, nB)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var BB = this.props.children,
                  IB = this.getTooltipEventType(),
                  ZB = (0, wB.k)(BB, dB.e),
                  TB = {};
                return ZB && "axis" === IB && (TB = "click" === ZB.props.trigger ? {
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
                }), QZ(QZ({}, (0, RI.j)(this.props, this.handleOuterEvent)), TB)
              }
            }, {
              key: "addListener",
              value: function() {
                jI.on(PI, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                jI.removeListener(PI, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(BB, IB, ZB) {
                for (var TB = this.state.formattedGraphicalItems, JB = 0, oB = TB.length; JB < oB; JB++) {
                  var GB = TB[JB];
                  if (GB.item === BB || GB.props.key === BB.key || IB === (0, wB.m)(GB.item.type) && ZB === GB.childIndex) return GB
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var BB = this.clipPathId,
                  IB = this.state.offset,
                  ZB = IB.left,
                  JB = IB.top,
                  oB = IB.height,
                  GB = IB.width;
                return TB.createElement("defs", null, TB.createElement("clipPath", {
                  id: BB
                }, TB.createElement("rect", {
                  x: ZB,
                  y: JB,
                  height: oB,
                  width: GB
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var BB = this.state.xAxisMap;
                return BB ? Object.entries(BB).reduce((function(BB, IB) {
                  var ZB = hZ(IB, 2),
                    TB = ZB[0],
                    JB = ZB[1];
                  return QZ(QZ({}, BB), {}, sZ({}, TB, JB.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var BB = this.state.yAxisMap;
                return BB ? Object.entries(BB).reduce((function(BB, IB) {
                  var ZB = hZ(IB, 2),
                    TB = ZB[0],
                    JB = ZB[1];
                  return QZ(QZ({}, BB), {}, sZ({}, TB, JB.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(BB) {
                var IB;
                return null === (IB = this.state.xAxisMap) || void 0 === IB || null === (IB = IB[BB]) || void 0 === IB ? void 0 : IB.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(BB) {
                var IB;
                return null === (IB = this.state.yAxisMap) || void 0 === IB || null === (IB = IB[BB]) || void 0 === IB ? void 0 : IB.scale
              }
            }, {
              key: "getItemByXY",
              value: function(BB) {
                var IB = this.state,
                  ZB = IB.formattedGraphicalItems,
                  TB = IB.activeItem;
                if (ZB && ZB.length)
                  for (var JB = 0, oB = ZB.length; JB < oB; JB++) {
                    var GB = ZB[JB],
                      vB = GB.props,
                      kB = GB.item,
                      cB = void 0 !== kB.type.defaultProps ? QZ(QZ({}, kB.type.defaultProps), kB.props) : kB.props,
                      nB = (0, wB.m)(kB.type);
                    if ("Bar" === nB) {
                      var hB = (vB.data || []).find((function(IB) {
                        return (0, sB.e)(BB, IB)
                      }));
                      if (hB) return {
                        graphicalItem: GB,
                        payload: hB
                      }
                    } else if ("RadialBar" === nB) {
                      var zB = (vB.data || []).find((function(IB) {
                        return (0, aI.f)(BB, IB)
                      }));
                      if (zB) return {
                        graphicalItem: GB,
                        payload: zB
                      }
                    } else if ((0, uI.j)(GB, TB) || (0, uI.m)(GB, TB) || (0, uI.o)(GB, TB)) {
                      var FB = (0, uI.i)({
                          graphicalItem: GB,
                          activeTooltipItem: TB,
                          itemData: cB.data
                        }),
                        NB = void 0 === cB.activeIndex ? FB : cB.activeIndex;
                      return {
                        graphicalItem: QZ(QZ({}, GB), {}, {
                          childIndex: NB
                        }),
                        payload: (0, uI.o)(GB, TB) ? cB.data[FB] : GB.props.data[FB]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var BB = this;
                if (!(0, wB.B)(this)) return null;
                var IB, ZB, JB = this.props,
                  oB = JB.children,
                  GB = JB.className,
                  vB = JB.width,
                  kB = JB.height,
                  cB = JB.style,
                  nB = JB.compact,
                  hB = JB.title,
                  zB = JB.desc,
                  FB = zZ(JB, kZ),
                  NB = (0, wB.e)(FB, !1);
                if (nB) return TB.createElement(GZ.c, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, TB.createElement(UB.d, nZ({}, NB, {
                  width: vB,
                  height: kB,
                  title: hB,
                  desc: zB
                }), this.renderClipPath(), (0, wB.A)(oB, this.renderMap)));
                this.props.accessibilityLayer && (NB.tabIndex = null !== (IB = this.props.tabIndex) && void 0 !== IB ? IB : 0, NB.role = null !== (ZB = this.props.role) && void 0 !== ZB ? ZB : "application", NB.onKeyDown = function(IB) {
                  BB.accessibilityManager.keyboardEvent(IB)
                }, NB.onFocus = function() {
                  BB.accessibilityManager.focus()
                });
                var gB = this.parseEventsOfWrapper();
                return TB.createElement(GZ.c, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, TB.createElement("div", nZ({
                  className: (0, qB.c)("recharts-wrapper", GB),
                  style: QZ({
                    position: "relative",
                    cursor: "default",
                    width: vB,
                    height: kB
                  }, cB)
                }, gB, {
                  ref: function(IB) {
                    BB.container = IB
                  }
                }), TB.createElement(UB.d, nZ({}, NB, {
                  width: vB,
                  height: kB,
                  title: hB,
                  desc: zB,
                  style: YZ
                }), this.renderClipPath(), (0, wB.A)(oB, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], kB && FZ(JB.prototype, kB), nB && FZ(JB, nB), Object.defineProperty(JB, "prototype", {
              writable: !1
            }), JB;
            var JB, kB, nB
          }(TB.Component);
        sZ(HB, "displayName", IB), sZ(HB, "defaultProps", QZ({
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
        }, OB)), sZ(HB, "getDerivedStateFromProps", (function(BB, IB) {
          var ZB = BB.dataKey,
            TB = BB.data,
            JB = BB.children,
            GB = BB.width,
            vB = BB.height,
            kB = BB.layout,
            cB = BB.stackOffset,
            nB = BB.margin,
            hB = IB.dataStartIndex,
            zB = IB.dataEndIndex;
          if (void 0 === IB.updateId) {
            var FB = rZ(BB);
            return QZ(QZ(QZ({}, FB), {}, {
              updateId: 0
            }, aB(QZ(QZ({
              props: BB
            }, FB), {}, {
              updateId: 0
            }), IB)), {}, {
              prevDataKey: ZB,
              prevData: TB,
              prevWidth: GB,
              prevHeight: vB,
              prevLayout: kB,
              prevStackOffset: cB,
              prevMargin: nB,
              prevChildren: JB
            })
          }
          if (ZB !== IB.prevDataKey || TB !== IB.prevData || GB !== IB.prevWidth || vB !== IB.prevHeight || kB !== IB.prevLayout || cB !== IB.prevStackOffset || !(0, HI.c)(nB, IB.prevMargin)) {
            var NB = rZ(BB),
              gB = {
                chartX: IB.chartX,
                chartY: IB.chartY,
                isTooltipActive: IB.isTooltipActive
              },
              qB = QZ(QZ({}, jZ(IB, TB, kB)), {}, {
                updateId: IB.updateId + 1
              }),
              yB = QZ(QZ(QZ({}, NB), gB), qB);
            return QZ(QZ(QZ({}, yB), aB(QZ({
              props: BB
            }, yB), IB)), {}, {
              prevDataKey: ZB,
              prevData: TB,
              prevWidth: GB,
              prevHeight: vB,
              prevLayout: kB,
              prevStackOffset: cB,
              prevMargin: nB,
              prevChildren: JB
            })
          }
          if (!(0, wB.w)(JB, IB.prevChildren)) {
            var UB, WB, dB, CB, QB = (0, wB.k)(JB, xB),
              sB = QB && null !== (UB = null === (WB = QB.props) || void 0 === WB ? void 0 : WB.startIndex) && void 0 !== UB ? UB : hB,
              OB = QB && null !== (dB = null === (CB = QB.props) || void 0 === CB ? void 0 : CB.endIndex) && void 0 !== dB ? dB : zB,
              YB = sB !== hB || OB !== zB,
              iB = !oB()(TB) && !YB ? IB.updateId : IB.updateId + 1;
            return QZ(QZ({
              updateId: iB
            }, aB(QZ(QZ({
              props: BB
            }, IB), {}, {
              updateId: iB,
              dataStartIndex: sB,
              dataEndIndex: OB
            }), IB)), {}, {
              prevChildren: JB,
              dataStartIndex: sB,
              dataEndIndex: OB
            })
          }
          return null
        })), sZ(HB, "renderActiveDot", (function(BB, IB, ZB) {
          var JB;
          return JB = (0, TB.isValidElement)(BB) ? (0, TB.cloneElement)(BB, IB) : vB()(BB) ? BB(IB) : TB.createElement(QB.c, IB), TB.createElement(WB.e, {
            className: "recharts-active-dot",
            key: ZB
          }, JB)
        }));
        var MB = (0, TB.forwardRef)((function(BB, IB) {
          return TB.createElement(HB, nZ({}, BB, {
            ref: IB
          }))
        }));
        return MB.displayName = HB.displayName, MB
      }
  },
  6415: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB
    });
    var TB = function(BB) {
      return null
    };
    TB.displayName = "Cell"
  },
  6364: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => aB
    });
    var TB = ZB(63),
      JB = ZB(5563),
      oB = ZB.n(JB),
      GB = ZB(5425),
      vB = ZB.n(GB),
      kB = ZB(5269),
      cB = ZB.n(kB),
      nB = ZB(5250),
      hB = ZB(6276),
      zB = ZB(5573),
      FB = ZB(5335),
      NB = ZB(6373);

    function gB(BB) {
      return gB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, gB(BB)
    }
    var qB = ["offset"];

    function yB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return UB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return UB(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return UB(BB, IB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function UB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function WB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function dB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function CB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? dB(Object(ZB), !0).forEach((function(IB) {
          QB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : dB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function QB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != gB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != gB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == gB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function sB() {
      return sB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, sB.apply(this, arguments)
    }
    var wB = function(BB) {
        var IB = BB.value,
          ZB = BB.formatter,
          TB = oB()(BB.children) ? IB : BB.children;
        return vB()(ZB) ? ZB(TB) : TB
      },
      OB = function(BB, IB, ZB) {
        var JB, GB, vB = BB.position,
          kB = BB.viewBox,
          cB = BB.offset,
          hB = BB.className,
          zB = kB,
          gB = zB.cx,
          qB = zB.cy,
          yB = zB.innerRadius,
          UB = zB.outerRadius,
          WB = zB.startAngle,
          dB = zB.endAngle,
          CB = zB.clockWise,
          QB = (yB + UB) / 2,
          wB = function(BB, IB) {
            return (0, FB.y)(IB - BB) * Math.min(Math.abs(IB - BB), 360)
          }(WB, dB),
          OB = wB >= 0 ? 1 : -1;
        "insideStart" === vB ? (JB = WB + OB * cB, GB = CB) : "insideEnd" === vB ? (JB = dB - OB * cB, GB = !CB) : "end" === vB && (JB = dB + OB * cB, GB = CB), GB = wB <= 0 ? GB : !GB;
        var YB = (0, NB.i)(gB, qB, QB, JB),
          iB = (0, NB.i)(gB, qB, QB, JB + 359 * (GB ? 1 : -1)),
          pB = "M".concat(YB.x, ",").concat(YB.y, "\n    A").concat(QB, ",").concat(QB, ",0,1,").concat(GB ? 0 : 1, ",\n    ").concat(iB.x, ",").concat(iB.y),
          aB = oB()(BB.id) ? (0, FB.z)("recharts-radial-line-") : BB.id;
        return TB.createElement("text", sB({}, ZB, {
          dominantBaseline: "central",
          className: (0, nB.c)("recharts-radial-bar-label", hB)
        }), TB.createElement("defs", null, TB.createElement("path", {
          id: aB,
          d: pB
        })), TB.createElement("textPath", {
          xlinkHref: "#".concat(aB)
        }, IB))
      },
      YB = function(BB) {
        var IB = BB.viewBox,
          ZB = BB.offset,
          TB = BB.position,
          JB = IB,
          oB = JB.cx,
          GB = JB.cy,
          vB = JB.innerRadius,
          kB = JB.outerRadius,
          cB = (JB.startAngle + JB.endAngle) / 2;
        if ("outside" === TB) {
          var nB = (0, NB.i)(oB, GB, kB + ZB, cB),
            hB = nB.x;
          return {
            x: hB,
            y: nB.y,
            textAnchor: hB >= oB ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === TB) return {
          x: oB,
          y: GB,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === TB) return {
          x: oB,
          y: GB,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === TB) return {
          x: oB,
          y: GB,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var zB = (vB + kB) / 2,
          FB = (0, NB.i)(oB, GB, zB, cB);
        return {
          x: FB.x,
          y: FB.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      iB = function(BB) {
        var IB = BB.viewBox,
          ZB = BB.parentViewBox,
          TB = BB.offset,
          JB = BB.position,
          oB = IB,
          GB = oB.x,
          vB = oB.y,
          kB = oB.width,
          nB = oB.height,
          hB = nB >= 0 ? 1 : -1,
          zB = hB * TB,
          NB = hB > 0 ? "end" : "start",
          gB = hB > 0 ? "start" : "end",
          qB = kB >= 0 ? 1 : -1,
          yB = qB * TB,
          UB = qB > 0 ? "end" : "start",
          WB = qB > 0 ? "start" : "end";
        if ("top" === JB) return CB(CB({}, {
          x: GB + kB / 2,
          y: vB - hB * TB,
          textAnchor: "middle",
          verticalAnchor: NB
        }), ZB ? {
          height: Math.max(vB - ZB.y, 0),
          width: kB
        } : {});
        if ("bottom" === JB) return CB(CB({}, {
          x: GB + kB / 2,
          y: vB + nB + zB,
          textAnchor: "middle",
          verticalAnchor: gB
        }), ZB ? {
          height: Math.max(ZB.y + ZB.height - (vB + nB), 0),
          width: kB
        } : {});
        if ("left" === JB) {
          var dB = {
            x: GB - yB,
            y: vB + nB / 2,
            textAnchor: UB,
            verticalAnchor: "middle"
          };
          return CB(CB({}, dB), ZB ? {
            width: Math.max(dB.x - ZB.x, 0),
            height: nB
          } : {})
        }
        if ("right" === JB) {
          var QB = {
            x: GB + kB + yB,
            y: vB + nB / 2,
            textAnchor: WB,
            verticalAnchor: "middle"
          };
          return CB(CB({}, QB), ZB ? {
            width: Math.max(ZB.x + ZB.width - QB.x, 0),
            height: nB
          } : {})
        }
        var sB = ZB ? {
          width: kB,
          height: nB
        } : {};
        return "insideLeft" === JB ? CB({
          x: GB + yB,
          y: vB + nB / 2,
          textAnchor: WB,
          verticalAnchor: "middle"
        }, sB) : "insideRight" === JB ? CB({
          x: GB + kB - yB,
          y: vB + nB / 2,
          textAnchor: UB,
          verticalAnchor: "middle"
        }, sB) : "insideTop" === JB ? CB({
          x: GB + kB / 2,
          y: vB + zB,
          textAnchor: "middle",
          verticalAnchor: gB
        }, sB) : "insideBottom" === JB ? CB({
          x: GB + kB / 2,
          y: vB + nB - zB,
          textAnchor: "middle",
          verticalAnchor: NB
        }, sB) : "insideTopLeft" === JB ? CB({
          x: GB + yB,
          y: vB + zB,
          textAnchor: WB,
          verticalAnchor: gB
        }, sB) : "insideTopRight" === JB ? CB({
          x: GB + kB - yB,
          y: vB + zB,
          textAnchor: UB,
          verticalAnchor: gB
        }, sB) : "insideBottomLeft" === JB ? CB({
          x: GB + yB,
          y: vB + nB - zB,
          textAnchor: WB,
          verticalAnchor: NB
        }, sB) : "insideBottomRight" === JB ? CB({
          x: GB + kB - yB,
          y: vB + nB - zB,
          textAnchor: UB,
          verticalAnchor: NB
        }, sB) : cB()(JB) && ((0, FB.w)(JB.x) || (0, FB.x)(JB.x)) && ((0, FB.w)(JB.y) || (0, FB.x)(JB.y)) ? CB({
          x: GB + (0, FB.l)(JB.x, kB),
          y: vB + (0, FB.l)(JB.y, nB),
          textAnchor: "end",
          verticalAnchor: "end"
        }, sB) : CB({
          x: GB + kB / 2,
          y: vB + nB / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, sB)
      },
      pB = function(BB) {
        return "cx" in BB && (0, FB.w)(BB.cx)
      };

    function aB(BB) {
      var IB, ZB = BB.offset,
        JB = CB({
          offset: void 0 === ZB ? 5 : ZB
        }, WB(BB, qB)),
        GB = JB.viewBox,
        kB = JB.position,
        cB = JB.value,
        FB = JB.children,
        NB = JB.content,
        gB = JB.className,
        yB = void 0 === gB ? "" : gB,
        UB = JB.textBreakAll;
      if (!GB || oB()(cB) && oB()(FB) && !(0, TB.isValidElement)(NB) && !vB()(NB)) return null;
      if ((0, TB.isValidElement)(NB)) return (0, TB.cloneElement)(NB, JB);
      if (vB()(NB)) {
        if (IB = (0, TB.createElement)(NB, JB), (0, TB.isValidElement)(IB)) return IB
      } else IB = wB(JB);
      var dB = pB(GB),
        QB = (0, zB.e)(JB, !0);
      if (dB && ("insideStart" === kB || "insideEnd" === kB || "end" === kB)) return OB(JB, IB, QB);
      var aB = dB ? YB(JB) : iB(JB);
      return TB.createElement(hB.e, sB({
        className: (0, nB.c)("recharts-label", yB)
      }, QB, aB, {
        breakAll: UB
      }), IB)
    }
    aB.displayName = "Label";
    var HB = function(BB) {
      var IB = BB.cx,
        ZB = BB.cy,
        TB = BB.angle,
        JB = BB.startAngle,
        oB = BB.endAngle,
        GB = BB.r,
        vB = BB.radius,
        kB = BB.innerRadius,
        cB = BB.outerRadius,
        nB = BB.x,
        hB = BB.y,
        zB = BB.top,
        NB = BB.left,
        gB = BB.width,
        qB = BB.height,
        yB = BB.clockWise,
        UB = BB.labelViewBox;
      if (UB) return UB;
      if ((0, FB.w)(gB) && (0, FB.w)(qB)) {
        if ((0, FB.w)(nB) && (0, FB.w)(hB)) return {
          x: nB,
          y: hB,
          width: gB,
          height: qB
        };
        if ((0, FB.w)(zB) && (0, FB.w)(NB)) return {
          x: zB,
          y: NB,
          width: gB,
          height: qB
        }
      }
      return (0, FB.w)(nB) && (0, FB.w)(hB) ? {
        x: nB,
        y: hB,
        width: 0,
        height: 0
      } : (0, FB.w)(IB) && (0, FB.w)(ZB) ? {
        cx: IB,
        cy: ZB,
        startAngle: JB || TB || 0,
        endAngle: oB || TB || 0,
        innerRadius: kB || 0,
        outerRadius: cB || vB || GB || 0,
        clockWise: yB
      } : BB.viewBox ? BB.viewBox : {}
    };
    aB.parseViewBox = HB, aB.renderCallByParent = function(BB, IB) {
      var ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!BB || !BB.children && ZB && !BB.label) return null;
      var JB = BB.children,
        oB = HB(BB),
        GB = (0, zB.g)(JB, aB).map((function(BB, ZB) {
          return (0, TB.cloneElement)(BB, {
            viewBox: IB || oB,
            key: "label-".concat(ZB)
          })
        }));
      if (!ZB) return GB;
      var kB = function(BB, IB) {
        return BB ? !0 === BB ? TB.createElement(aB, {
          key: "label-implicit",
          viewBox: IB
        }) : (0, FB.u)(BB) ? TB.createElement(aB, {
          key: "label-implicit",
          viewBox: IB,
          value: BB
        }) : (0, TB.isValidElement)(BB) ? BB.type === aB ? (0, TB.cloneElement)(BB, {
          key: "label-implicit",
          viewBox: IB
        }) : TB.createElement(aB, {
          key: "label-implicit",
          content: BB,
          viewBox: IB
        }) : vB()(BB) ? TB.createElement(aB, {
          key: "label-implicit",
          content: BB,
          viewBox: IB
        }) : cB()(BB) ? TB.createElement(aB, sB({
          viewBox: IB
        }, BB, {
          key: "label-implicit"
        })) : null : null
      }(BB.label, IB || oB);
      return [kB].concat(yB(GB))
    }
  },
  6423: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => iB
    });
    var TB = ZB(63),
      JB = ZB(5563),
      oB = ZB.n(JB),
      GB = ZB(5269),
      vB = ZB.n(GB),
      kB = ZB(5425),
      cB = ZB.n(kB),
      nB = ZB(6431),
      hB = ZB.n(nB),
      zB = ZB(6364),
      FB = ZB(6124),
      NB = ZB(5573),
      gB = ZB(6289);

    function qB(BB) {
      return qB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, qB(BB)
    }
    var yB = ["valueAccessor"],
      UB = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function WB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return dB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return dB(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return dB(BB, IB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function dB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function CB() {
      return CB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, CB.apply(this, arguments)
    }

    function QB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function sB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? QB(Object(ZB), !0).forEach((function(IB) {
          wB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : QB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function wB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != qB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != qB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == qB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function OB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }
    var YB = function(BB) {
      return Array.isArray(BB.value) ? hB()(BB.value) : BB.value
    };

    function iB(BB) {
      var IB = BB.valueAccessor,
        ZB = void 0 === IB ? YB : IB,
        JB = OB(BB, yB),
        GB = JB.data,
        vB = JB.dataKey,
        kB = JB.clockWise,
        cB = JB.id,
        nB = JB.textBreakAll,
        hB = OB(JB, UB);
      return GB && GB.length ? TB.createElement(FB.e, {
        className: "recharts-label-list"
      }, GB.map((function(BB, IB) {
        var JB = oB()(vB) ? ZB(BB, IB) : (0, gB._)(BB && BB.payload, vB),
          GB = oB()(cB) ? {} : {
            id: "".concat(cB, "-").concat(IB)
          };
        return TB.createElement(zB.e, CB({}, (0, NB.e)(BB, !0), hB, GB, {
          parentViewBox: BB.parentViewBox,
          value: JB,
          textBreakAll: nB,
          viewBox: zB.e.parseViewBox(oB()(kB) ? BB : sB(sB({}, BB), {}, {
            clockWise: kB
          })),
          key: "label-".concat(IB),
          index: IB
        }))
      }))) : null
    }
    iB.displayName = "LabelList", iB.renderCallByParent = function(BB, IB) {
      var ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!BB || !BB.children && ZB && !BB.label) return null;
      var JB = BB.children,
        oB = (0, NB.g)(JB, iB).map((function(BB, ZB) {
          return (0, TB.cloneElement)(BB, {
            data: IB,
            key: "labelList-".concat(ZB)
          })
        }));
      return ZB ? [function(BB, IB) {
        return BB ? !0 === BB ? TB.createElement(iB, {
          key: "labelList-implicit",
          data: IB
        }) : TB.isValidElement(BB) || cB()(BB) ? TB.createElement(iB, {
          key: "labelList-implicit",
          data: IB,
          content: BB
        }) : vB()(BB) ? TB.createElement(iB, CB({
          data: IB
        }, BB, {
          key: "labelList-implicit"
        })) : null : null
      }(BB.label, IB)].concat(WB(oB)) : oB
    }
  },
  6188: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => LB
    });
    var TB = ZB(63),
      JB = ZB(5425),
      oB = ZB.n(JB),
      GB = ZB(5250),
      vB = ZB(5570),
      kB = ZB(6118),
      cB = ZB(6193),
      nB = ZB(5594);

    function hB(BB) {
      return hB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, hB(BB)
    }

    function zB() {
      return zB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, zB.apply(this, arguments)
    }

    function FB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function NB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, dB(TB.key), TB)
      }
    }

    function gB(BB, IB, ZB) {
      return IB = yB(IB),
        function(BB, IB) {
          if (IB && ("object" === hB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, qB() ? Reflect.construct(IB, ZB || [], yB(BB).constructor) : IB.apply(BB, ZB))
    }

    function qB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (qB = function() {
        return !!BB
      })()
    }

    function yB(BB) {
      return yB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, yB(BB)
    }

    function UB(BB, IB) {
      return UB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, UB(BB, IB)
    }

    function WB(BB, IB, ZB) {
      return (IB = dB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function dB(BB) {
      var IB = function(BB, IB) {
        if ("object" != hB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != hB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == hB(IB) ? IB : IB + ""
    }
    var CB = 32,
      QB = function(BB) {
        function IB() {
          return function(BB, IB) {
            if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
          }(this, IB), gB(this, IB, arguments)
        }
        return function(BB, IB) {
          if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(IB && IB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), IB && UB(BB, IB)
        }(IB, BB), ZB = IB, JB = [{
          key: "renderIcon",
          value: function(BB) {
            var IB = this.props.inactiveColor,
              ZB = 16,
              JB = CB / 6,
              oB = CB / 3,
              GB = BB.inactive ? IB : BB.color;
            if ("plainline" === BB.type) return TB.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: GB,
              strokeDasharray: BB.payload.strokeDasharray,
              x1: 0,
              y1: ZB,
              x2: CB,
              y2: ZB,
              className: "recharts-legend-icon"
            });
            if ("line" === BB.type) return TB.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: GB,
              d: "M0,".concat(ZB, "h").concat(oB, "\n            A").concat(JB, ",").concat(JB, ",0,1,1,").concat(2 * oB, ",").concat(ZB, "\n            H").concat(CB, "M").concat(2 * oB, ",").concat(ZB, "\n            A").concat(JB, ",").concat(JB, ",0,1,1,").concat(oB, ",").concat(ZB),
              className: "recharts-legend-icon"
            });
            if ("rect" === BB.type) return TB.createElement("path", {
              stroke: "none",
              fill: GB,
              d: "M0,".concat(4, "h").concat(CB, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (TB.isValidElement(BB.legendIcon)) {
              var vB = function(BB) {
                for (var IB = 1; IB < arguments.length; IB++) {
                  var ZB = null != arguments[IB] ? arguments[IB] : {};
                  IB % 2 ? FB(Object(ZB), !0).forEach((function(IB) {
                    WB(BB, IB, ZB[IB])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : FB(Object(ZB)).forEach((function(IB) {
                    Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
                  }))
                }
                return BB
              }({}, BB);
              return delete vB.legendIcon, TB.cloneElement(BB.legendIcon, vB)
            }
            return TB.createElement(cB.c, {
              fill: GB,
              cx: ZB,
              cy: ZB,
              size: CB,
              sizeType: "diameter",
              type: BB.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var BB = this,
              IB = this.props,
              ZB = IB.payload,
              JB = IB.iconSize,
              cB = IB.layout,
              hB = IB.formatter,
              FB = IB.inactiveColor,
              NB = {
                x: 0,
                y: 0,
                width: CB,
                height: CB
              },
              gB = {
                display: "horizontal" === cB ? "inline-block" : "block",
                marginRight: 10
              },
              qB = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return ZB.map((function(IB, ZB) {
              var cB = IB.formatter || hB,
                yB = (0, GB.c)(WB(WB({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(ZB), !0), "inactive", IB.inactive));
              if ("none" === IB.type) return null;
              var UB = oB()(IB.value) ? null : IB.value;
              (0, vB.b)(!oB()(IB.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var dB = IB.inactive ? FB : IB.color;
              return TB.createElement("li", zB({
                className: yB,
                style: gB,
                key: "legend-item-".concat(ZB)
              }, (0, nB.k)(BB.props, IB, ZB)), TB.createElement(kB.d, {
                width: JB,
                height: JB,
                viewBox: NB,
                style: qB
              }, BB.renderIcon(IB)), TB.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: dB
                }
              }, cB ? cB(UB, IB, ZB) : UB))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var BB = this.props,
              IB = BB.payload,
              ZB = BB.layout,
              JB = BB.align;
            if (!IB || !IB.length) return null;
            var oB = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === ZB ? JB : "left"
            };
            return TB.createElement("ul", {
              className: "recharts-default-legend",
              style: oB
            }, this.renderItems())
          }
        }], JB && NB(ZB.prototype, JB), hB && NB(ZB, hB), Object.defineProperty(ZB, "prototype", {
          writable: !1
        }), ZB;
        var ZB, JB, hB
      }(TB.PureComponent);
    WB(QB, "displayName", "Legend"), WB(QB, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var sB = ZB(5335),
      wB = ZB(6137);

    function OB(BB) {
      return OB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, OB(BB)
    }
    var YB = ["ref"];

    function iB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function pB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? iB(Object(ZB), !0).forEach((function(IB) {
          RB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : iB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function aB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, rB(TB.key), TB)
      }
    }

    function HB(BB, IB, ZB) {
      return IB = jB(IB),
        function(BB, IB) {
          if (IB && ("object" === OB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, MB() ? Reflect.construct(IB, ZB || [], jB(BB).constructor) : IB.apply(BB, ZB))
    }

    function MB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (MB = function() {
        return !!BB
      })()
    }

    function jB(BB) {
      return jB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, jB(BB)
    }

    function PB(BB, IB) {
      return PB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, PB(BB, IB)
    }

    function RB(BB, IB, ZB) {
      return (IB = rB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function rB(BB) {
      var IB = function(BB, IB) {
        if ("object" != OB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != OB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == OB(IB) ? IB : IB + ""
    }

    function mB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function XB(BB) {
      return BB.value
    }
    var LB = function(BB) {
      function IB() {
        var BB;
        ! function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, IB);
        for (var ZB = arguments.length, TB = new Array(ZB), JB = 0; JB < ZB; JB++) TB[JB] = arguments[JB];
        return RB(BB = HB(this, IB, [].concat(TB)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), BB
      }
      return function(BB, IB) {
        if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(IB && IB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), IB && PB(BB, IB)
      }(IB, BB), ZB = IB, oB = [{
        key: "getWithHeight",
        value: function(BB, IB) {
          var ZB = pB(pB({}, this.defaultProps), BB.props).layout;
          return "vertical" === ZB && (0, sB.w)(BB.props.height) ? {
            height: BB.props.height
          } : "horizontal" === ZB ? {
            width: BB.props.width || IB
          } : null
        }
      }], (JB = [{
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
            IB = this.getBBox();
          IB ? (Math.abs(IB.width - this.lastBoundingBox.width) > 1 || Math.abs(IB.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = IB.width, this.lastBoundingBox.height = IB.height, BB && BB(IB)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, BB && BB(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? pB({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(BB) {
          var IB, ZB, TB = this.props,
            JB = TB.layout,
            oB = TB.align,
            GB = TB.verticalAlign,
            vB = TB.margin,
            kB = TB.chartWidth,
            cB = TB.chartHeight;
          return BB && (void 0 !== BB.left && null !== BB.left || void 0 !== BB.right && null !== BB.right) || (IB = "center" === oB && "vertical" === JB ? {
            left: ((kB || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === oB ? {
            right: vB && vB.right || 0
          } : {
            left: vB && vB.left || 0
          }), BB && (void 0 !== BB.top && null !== BB.top || void 0 !== BB.bottom && null !== BB.bottom) || (ZB = "middle" === GB ? {
            top: ((cB || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === GB ? {
            bottom: vB && vB.bottom || 0
          } : {
            top: vB && vB.top || 0
          }), pB(pB({}, IB), ZB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this,
            IB = this.props,
            ZB = IB.content,
            JB = IB.width,
            oB = IB.height,
            GB = IB.wrapperStyle,
            vB = IB.payloadUniqBy,
            kB = IB.payload,
            cB = pB(pB({
              position: "absolute",
              width: JB || "auto",
              height: oB || "auto"
            }, this.getDefaultPosition(GB)), GB);
          return TB.createElement("div", {
            className: "recharts-legend-wrapper",
            style: cB,
            ref: function(IB) {
              BB.wrapperNode = IB
            }
          }, function(BB, IB) {
            if (TB.isValidElement(BB)) return TB.cloneElement(BB, IB);
            if ("function" === typeof BB) return TB.createElement(BB, IB);
            IB.ref;
            var ZB = mB(IB, YB);
            return TB.createElement(QB, ZB)
          }(ZB, pB(pB({}, this.props), {}, {
            payload: (0, wB.c)(kB, vB, XB)
          })))
        }
      }]) && aB(ZB.prototype, JB), oB && aB(ZB, oB), Object.defineProperty(ZB, "prototype", {
        writable: !1
      }), ZB;
      var ZB, JB, oB
    }(TB.PureComponent);
    RB(LB, "displayName", "Legend"), RB(LB, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  5243: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => qB
    });
    var TB = ZB(5250),
      JB = ZB(63),
      oB = ZB(5258),
      GB = ZB.n(oB),
      vB = ZB(5335),
      kB = ZB(5570),
      cB = ZB(5573);

    function nB(BB) {
      return nB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, nB(BB)
    }

    function hB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function zB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? hB(Object(ZB), !0).forEach((function(IB) {
          FB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : hB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function FB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != nB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != nB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == nB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function NB(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        var ZB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != ZB) {
          var TB, JB, oB, GB, vB = [],
            kB = !0,
            cB = !1;
          try {
            if (oB = (ZB = ZB.call(BB)).next, 0 === IB) {
              if (Object(ZB) !== ZB) return;
              kB = !1
            } else
              for (; !(kB = (TB = oB.call(ZB)).done) && (vB.push(TB.value), vB.length !== IB); kB = !0);
          } catch (BB) {
            cB = !0, JB = BB
          } finally {
            try {
              if (!kB && null != ZB.return && (GB = ZB.return(), Object(GB) !== GB)) return
            } finally {
              if (cB) throw JB
            }
          }
          return vB
        }
      }(BB, IB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return gB(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return gB(BB, IB)
      }(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }
    var qB = (0, JB.forwardRef)((function(BB, IB) {
      var ZB = BB.aspect,
        oB = BB.initialDimension,
        nB = void 0 === oB ? {
          width: -1,
          height: -1
        } : oB,
        hB = BB.width,
        FB = void 0 === hB ? "100%" : hB,
        gB = BB.height,
        qB = void 0 === gB ? "100%" : gB,
        yB = BB.minWidth,
        UB = void 0 === yB ? 0 : yB,
        WB = BB.minHeight,
        dB = BB.maxHeight,
        CB = BB.children,
        QB = BB.debounce,
        sB = void 0 === QB ? 0 : QB,
        wB = BB.id,
        OB = BB.className,
        YB = BB.kU,
        iB = BB.style,
        pB = void 0 === iB ? {} : iB,
        aB = (0, JB.useRef)(null),
        HB = (0, JB.useRef)();
      HB.current = YB, (0, JB.useImperativeHandle)(IB, (function() {
        return Object.defineProperty(aB.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), aB.current
          },
          configurable: !0
        })
      }));
      var MB = NB((0, JB.useState)({
          containerWidth: nB.width,
          containerHeight: nB.height
        }), 2),
        jB = MB[0],
        PB = MB[1],
        RB = (0, JB.useCallback)((function(BB, IB) {
          PB((function(ZB) {
            var TB = Math.round(BB),
              JB = Math.round(IB);
            return ZB.containerWidth === TB && ZB.containerHeight === JB ? ZB : {
              containerWidth: TB,
              containerHeight: JB
            }
          }))
        }), []);
      (0, JB.useEffect)((function() {
        var BB = function(BB) {
          var IB, ZB = BB[0].contentRect,
            TB = ZB.width,
            JB = ZB.height;
          RB(TB, JB), null === (IB = HB.current) || void 0 === IB || IB.call(HB, TB, JB)
        };
        sB > 0 && (BB = GB()(BB, sB, {
          trailing: !0,
          leading: !1
        }));
        var IB = new ResizeObserver(BB),
          ZB = aB.current.getBoundingClientRect(),
          TB = ZB.width,
          JB = ZB.height;
        return RB(TB, JB), IB.observe(aB.current),
          function() {
            IB.disconnect()
          }
      }), [RB, sB]);
      var rB = (0, JB.useMemo)((function() {
        var BB = jB.containerWidth,
          IB = jB.containerHeight;
        if (BB < 0 || IB < 0) return null;
        (0, kB.b)((0, vB.x)(FB) || (0, vB.x)(qB), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", FB, qB), (0, kB.b)(!ZB || ZB > 0, "The aspect(%s) must be greater than zero.", ZB);
        var TB = (0, vB.x)(FB) ? BB : FB,
          oB = (0, vB.x)(qB) ? IB : qB;
        ZB && ZB > 0 && (TB ? oB = TB / ZB : oB && (TB = oB * ZB), dB && oB > dB && (oB = dB)), (0, kB.b)(TB > 0 || oB > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", TB, oB, FB, qB, UB, WB, ZB);
        var GB = !Array.isArray(CB) && (0, cB.m)(CB.type).endsWith("Chart");
        return JB.Children.map(CB, (function(BB) {
          return JB.isValidElement(BB) ? (0, JB.cloneElement)(BB, zB({
            width: TB,
            height: oB
          }, GB ? {
            style: zB({
              height: "100%",
              width: "100%",
              maxHeight: oB,
              maxWidth: TB
            }, BB.props.style)
          } : {})) : BB
        }))
      }), [ZB, CB, qB, dB, WB, UB, jB, FB]);
      return JB.createElement("div", {
        id: wB ? "".concat(wB) : void 0,
        className: (0, TB.c)("recharts-responsive-container", OB),
        style: zB(zB({}, pB), {}, {
          width: FB,
          height: qB,
          minWidth: UB,
          minHeight: WB,
          maxHeight: dB
        }),
        ref: aB
      }, rB)
    }))
  },
  6276: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => eB
    });
    var TB = ZB(63),
      JB = ZB(5563),
      oB = ZB.n(JB),
      GB = ZB(5250),
      vB = ZB(5335),
      kB = ZB(6132),
      cB = ZB(5573),
      nB = ZB(6280);

    function hB(BB) {
      return hB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, hB(BB)
    }

    function zB(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        var ZB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != ZB) {
          var TB, JB, oB, GB, vB = [],
            kB = !0,
            cB = !1;
          try {
            if (oB = (ZB = ZB.call(BB)).next, 0 === IB) {
              if (Object(ZB) !== ZB) return;
              kB = !1
            } else
              for (; !(kB = (TB = oB.call(ZB)).done) && (vB.push(TB.value), vB.length !== IB); kB = !0);
          } catch (BB) {
            cB = !0, JB = BB
          } finally {
            try {
              if (!kB && null != ZB.return && (GB = ZB.return(), Object(GB) !== GB)) return
            } finally {
              if (cB) throw JB
            }
          }
          return vB
        }
      }(BB, IB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return FB(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return FB(BB, IB)
      }(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function FB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function NB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, gB(TB.key), TB)
      }
    }

    function gB(BB) {
      var IB = function(BB, IB) {
        if ("object" != hB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != hB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == hB(IB) ? IB : IB + ""
    }
    var qB = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      yB = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      UB = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      WB = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      dB = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      CB = Object.keys(dB),
      QB = "NaN";
    var sB = function() {
      function BB(IB, ZB) {
        ! function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, BB), this.num = IB, this.unit = ZB, this.num = IB, this.unit = ZB, Number.isNaN(IB) && (this.unit = ""), "" === ZB || UB.test(ZB) || (this.num = NaN, this.unit = ""), CB.includes(ZB) && (this.num = function(BB, IB) {
          return BB * dB[IB]
        }(IB, ZB), this.unit = "px")
      }
      return IB = BB, TB = [{
        key: "parse",
        value: function(IB) {
          var ZB, TB = zB(null !== (ZB = WB.exec(IB)) && void 0 !== ZB ? ZB : [], 3),
            JB = TB[1],
            oB = TB[2];
          return new BB(parseFloat(JB), null !== oB && void 0 !== oB ? oB : "")
        }
      }], (ZB = [{
        key: "add",
        value: function(IB) {
          return this.unit !== IB.unit ? new BB(NaN, "") : new BB(this.num + IB.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(IB) {
          return this.unit !== IB.unit ? new BB(NaN, "") : new BB(this.num - IB.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(IB) {
          return "" !== this.unit && "" !== IB.unit && this.unit !== IB.unit ? new BB(NaN, "") : new BB(this.num * IB.num, this.unit || IB.unit)
        }
      }, {
        key: "divide",
        value: function(IB) {
          return "" !== this.unit && "" !== IB.unit && this.unit !== IB.unit ? new BB(NaN, "") : new BB(this.num / IB.num, this.unit || IB.unit)
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
      }]) && NB(IB.prototype, ZB), TB && NB(IB, TB), Object.defineProperty(IB, "prototype", {
        writable: !1
      }), IB;
      var IB, ZB, TB
    }();

    function wB(BB) {
      if (BB.includes(QB)) return QB;
      for (var IB = BB; IB.includes("*") || IB.includes("/");) {
        var ZB, TB = zB(null !== (ZB = qB.exec(IB)) && void 0 !== ZB ? ZB : [], 4),
          JB = TB[1],
          oB = TB[2],
          GB = TB[3],
          vB = sB.parse(null !== JB && void 0 !== JB ? JB : ""),
          kB = sB.parse(null !== GB && void 0 !== GB ? GB : ""),
          cB = "*" === oB ? vB.multiply(kB) : vB.divide(kB);
        if (cB.isNaN()) return QB;
        IB = IB.replace(qB, cB.toString())
      }
      for (; IB.includes("+") || /.-\d+(?:\.\d+)?/.test(IB);) {
        var nB, hB = zB(null !== (nB = yB.exec(IB)) && void 0 !== nB ? nB : [], 4),
          FB = hB[1],
          NB = hB[2],
          gB = hB[3],
          UB = sB.parse(null !== FB && void 0 !== FB ? FB : ""),
          WB = sB.parse(null !== gB && void 0 !== gB ? gB : ""),
          dB = "+" === NB ? UB.add(WB) : UB.subtract(WB);
        if (dB.isNaN()) return QB;
        IB = IB.replace(yB, dB.toString())
      }
      return IB
    }
    var OB = /\(([^()]*)\)/;

    function YB(BB) {
      var IB = BB.replace(/\s+/g, "");
      return IB = function(BB) {
        for (var IB = BB; IB.includes("(");) {
          var ZB = zB(OB.exec(IB), 2)[1];
          IB = IB.replace(OB, wB(ZB))
        }
        return IB
      }(IB), IB = wB(IB)
    }

    function iB(BB) {
      var IB = function(BB) {
        try {
          return YB(BB)
        } catch (IB) {
          return QB
        }
      }(BB.slice(5, -1));
      return IB === QB ? "" : IB
    }
    var pB = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      aB = ["dx", "dy", "angle", "className", "breakAll"];

    function HB() {
      return HB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, HB.apply(this, arguments)
    }

    function MB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function jB(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        var ZB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != ZB) {
          var TB, JB, oB, GB, vB = [],
            kB = !0,
            cB = !1;
          try {
            if (oB = (ZB = ZB.call(BB)).next, 0 === IB) {
              if (Object(ZB) !== ZB) return;
              kB = !1
            } else
              for (; !(kB = (TB = oB.call(ZB)).done) && (vB.push(TB.value), vB.length !== IB); kB = !0);
          } catch (BB) {
            cB = !0, JB = BB
          } finally {
            try {
              if (!kB && null != ZB.return && (GB = ZB.return(), Object(GB) !== GB)) return
            } finally {
              if (cB) throw JB
            }
          }
          return vB
        }
      }(BB, IB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return PB(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return PB(BB, IB)
      }(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function PB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }
    var RB = /[ \f\n\r\t\v\u2028\u2029]+/,
      rB = function(BB) {
        var IB = BB.children,
          ZB = BB.breakAll,
          TB = BB.style;
        try {
          var JB = [];
          return oB()(IB) || (JB = ZB ? IB.toString().split("") : IB.toString().split(RB)), {
            wordsWithComputedWidth: JB.map((function(BB) {
              return {
                word: BB,
                width: (0, nB.g)(BB, TB).width
              }
            })),
            spaceWidth: ZB ? 0 : (0, nB.g)("\xa0", TB).width
          }
        } catch (GB) {
          return null
        }
      },
      mB = function(BB) {
        return [{
          words: oB()(BB) ? [] : BB.toString().split(RB)
        }]
      },
      XB = function(BB) {
        var IB = BB.width,
          ZB = BB.scaleToFit,
          TB = BB.children,
          JB = BB.style,
          oB = BB.breakAll,
          GB = BB.maxLines;
        if ((IB || ZB) && !kB.e.isSsr) {
          var cB = rB({
            breakAll: oB,
            children: TB,
            style: JB
          });
          return cB ? function(BB, IB, ZB, TB, JB) {
            var oB = BB.maxLines,
              GB = BB.children,
              kB = BB.style,
              cB = BB.breakAll,
              nB = (0, vB.w)(oB),
              hB = GB,
              zB = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(BB, IB) {
                  var oB = IB.word,
                    GB = IB.width,
                    vB = BB[BB.length - 1];
                  if (vB && (null == TB || JB || vB.width + GB + ZB < Number(TB))) vB.words.push(oB), vB.width += GB + ZB;
                  else {
                    var kB = {
                      words: [oB],
                      width: GB
                    };
                    BB.push(kB)
                  }
                  return BB
                }), [])
              },
              FB = zB(IB);
            if (!nB) return FB;
            for (var NB, gB = function(BB) {
                var IB = hB.slice(0, BB),
                  ZB = rB({
                    breakAll: cB,
                    style: kB,
                    children: IB + "\u2026"
                  }).wordsWithComputedWidth,
                  JB = zB(ZB),
                  GB = JB.length > oB || function(BB) {
                    return BB.reduce((function(BB, IB) {
                      return BB.width > IB.width ? BB : IB
                    }))
                  }(JB).width > Number(TB);
                return [GB, JB]
              }, qB = 0, yB = hB.length - 1, UB = 0; qB <= yB && UB <= hB.length - 1;) {
              var WB = Math.floor((qB + yB) / 2),
                dB = jB(gB(WB - 1), 2),
                CB = dB[0],
                QB = dB[1],
                sB = jB(gB(WB), 1)[0];
              if (CB || sB || (qB = WB + 1), CB && sB && (yB = WB - 1), !CB && sB) {
                NB = QB;
                break
              }
              UB++
            }
            return NB || FB
          }({
            breakAll: oB,
            children: TB,
            maxLines: GB,
            style: JB
          }, cB.wordsWithComputedWidth, cB.spaceWidth, IB, ZB) : mB(TB)
        }
        return mB(TB)
      },
      LB = "#808080",
      eB = function(BB) {
        var IB = BB.x,
          ZB = void 0 === IB ? 0 : IB,
          JB = BB.y,
          oB = void 0 === JB ? 0 : JB,
          kB = BB.lineHeight,
          nB = void 0 === kB ? "1em" : kB,
          hB = BB.capHeight,
          zB = void 0 === hB ? "0.71em" : hB,
          FB = BB.scaleToFit,
          NB = void 0 !== FB && FB,
          gB = BB.textAnchor,
          qB = void 0 === gB ? "start" : gB,
          yB = BB.verticalAnchor,
          UB = void 0 === yB ? "end" : yB,
          WB = BB.fill,
          dB = void 0 === WB ? LB : WB,
          CB = MB(BB, pB),
          QB = (0, TB.useMemo)((function() {
            return XB({
              breakAll: CB.breakAll,
              children: CB.children,
              maxLines: CB.maxLines,
              scaleToFit: NB,
              style: CB.style,
              width: CB.width
            })
          }), [CB.breakAll, CB.children, CB.maxLines, NB, CB.style, CB.width]),
          sB = CB.dx,
          wB = CB.dy,
          OB = CB.angle,
          YB = CB.className,
          jB = CB.breakAll,
          PB = MB(CB, aB);
        if (!(0, vB.u)(ZB) || !(0, vB.u)(oB)) return null;
        var RB, rB = ZB + ((0, vB.w)(sB) ? sB : 0),
          mB = oB + ((0, vB.w)(wB) ? wB : 0);
        switch (UB) {
          case "start":
            RB = iB("calc(".concat(zB, ")"));
            break;
          case "middle":
            RB = iB("calc(".concat((QB.length - 1) / 2, " * -").concat(nB, " + (").concat(zB, " / 2))"));
            break;
          default:
            RB = iB("calc(".concat(QB.length - 1, " * -").concat(nB, ")"))
        }
        var eB = [];
        if (NB) {
          var uB = QB[0].width,
            fB = CB.width;
          eB.push("scale(".concat(((0, vB.w)(fB) ? fB / uB : 1) / uB, ")"))
        }
        return OB && eB.push("rotate(".concat(OB, ", ").concat(rB, ", ").concat(mB, ")")), eB.length && (PB.transform = eB.join(" ")), TB.createElement("text", HB({}, (0, cB.e)(PB, !0), {
          x: rB,
          y: mB,
          className: (0, GB.c)("recharts-text", YB),
          textAnchor: qB,
          fill: dB.includes("url") ? LB : dB
        }), QB.map((function(BB, IB) {
          var ZB = BB.words.join(jB ? "" : " ");
          return TB.createElement("tspan", {
            x: rB,
            dy: 0 === IB ? RB : nB,
            key: "".concat(ZB, "-").concat(IB)
          }, ZB)
        })))
      }
  },
  6129: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => KB
    });
    var TB = ZB(63),
      JB = ZB(5650),
      oB = ZB.n(JB),
      GB = ZB(5563),
      vB = ZB.n(GB),
      kB = ZB(5250),
      cB = ZB(5335);

    function nB(BB) {
      return nB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, nB(BB)
    }

    function hB() {
      return hB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, hB.apply(this, arguments)
    }

    function zB(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        var ZB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != ZB) {
          var TB, JB, oB, GB, vB = [],
            kB = !0,
            cB = !1;
          try {
            if (oB = (ZB = ZB.call(BB)).next, 0 === IB) {
              if (Object(ZB) !== ZB) return;
              kB = !1
            } else
              for (; !(kB = (TB = oB.call(ZB)).done) && (vB.push(TB.value), vB.length !== IB); kB = !0);
          } catch (BB) {
            cB = !0, JB = BB
          } finally {
            try {
              if (!kB && null != ZB.return && (GB = ZB.return(), Object(GB) !== GB)) return
            } finally {
              if (cB) throw JB
            }
          }
          return vB
        }
      }(BB, IB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return FB(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return FB(BB, IB)
      }(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function FB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function NB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function gB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? NB(Object(ZB), !0).forEach((function(IB) {
          qB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : NB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function qB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != nB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != nB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == nB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function yB(BB) {
      return Array.isArray(BB) && (0, cB.u)(BB[0]) && (0, cB.u)(BB[1]) ? BB.join(" ~ ") : BB
    }
    var UB = function(BB) {
      var IB = BB.separator,
        ZB = void 0 === IB ? " : " : IB,
        JB = BB.contentStyle,
        GB = void 0 === JB ? {} : JB,
        nB = BB.itemStyle,
        FB = void 0 === nB ? {} : nB,
        NB = BB.labelStyle,
        qB = void 0 === NB ? {} : NB,
        UB = BB.payload,
        WB = BB.formatter,
        dB = BB.itemSorter,
        CB = BB.wrapperClassName,
        QB = BB.labelClassName,
        sB = BB.label,
        wB = BB.labelFormatter,
        OB = BB.accessibilityLayer,
        YB = void 0 !== OB && OB,
        iB = gB({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, GB),
        pB = gB({
          margin: 0
        }, qB),
        aB = !vB()(sB),
        HB = aB ? sB : "",
        MB = (0, kB.c)("recharts-default-tooltip", CB),
        jB = (0, kB.c)("recharts-tooltip-label", QB);
      aB && wB && void 0 !== UB && null !== UB && (HB = wB(sB, UB));
      var PB = YB ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return TB.createElement("div", hB({
        className: MB,
        style: iB
      }, PB), TB.createElement("p", {
        className: jB,
        style: pB
      }, TB.isValidElement(HB) ? HB : "".concat(HB)), function() {
        if (UB && UB.length) {
          var BB = (dB ? oB()(UB, dB) : UB).map((function(BB, IB) {
            if ("none" === BB.type) return null;
            var JB = gB({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: BB.color || "#000"
              }, FB),
              oB = BB.formatter || WB || yB,
              GB = BB.value,
              vB = BB.name,
              kB = GB,
              nB = vB;
            if (oB && null != kB && null != nB) {
              var hB = oB(GB, vB, BB, IB, UB);
              if (Array.isArray(hB)) {
                var NB = zB(hB, 2);
                kB = NB[0], nB = NB[1]
              } else kB = hB
            }
            return TB.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(IB),
              style: JB
            }, (0, cB.u)(nB) ? TB.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, nB) : null, (0, cB.u)(nB) ? TB.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, ZB) : null, TB.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, kB), TB.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, BB.unit || ""))
          }));
          return TB.createElement("ul", {
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

    function WB(BB) {
      return WB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, WB(BB)
    }

    function dB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != WB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != WB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == WB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }
    var CB = "recharts-tooltip-wrapper",
      QB = {
        visibility: "hidden"
      };

    function sB(BB) {
      var IB = BB.coordinate,
        ZB = BB.translateX,
        TB = BB.translateY;
      return (0, kB.c)(CB, dB(dB(dB(dB({}, "".concat(CB, "-right"), (0, cB.w)(ZB) && IB && (0, cB.w)(IB.x) && ZB >= IB.x), "".concat(CB, "-left"), (0, cB.w)(ZB) && IB && (0, cB.w)(IB.x) && ZB < IB.x), "".concat(CB, "-bottom"), (0, cB.w)(TB) && IB && (0, cB.w)(IB.y) && TB >= IB.y), "".concat(CB, "-top"), (0, cB.w)(TB) && IB && (0, cB.w)(IB.y) && TB < IB.y))
    }

    function wB(BB) {
      var IB = BB.allowEscapeViewBox,
        ZB = BB.coordinate,
        TB = BB.key,
        JB = BB.offsetTopLeft,
        oB = BB.position,
        GB = BB.reverseDirection,
        vB = BB.tooltipDimension,
        kB = BB.viewBox,
        nB = BB.viewBoxDimension;
      if (oB && (0, cB.w)(oB[TB])) return oB[TB];
      var hB = ZB[TB] - vB - JB,
        zB = ZB[TB] + JB;
      return IB[TB] ? GB[TB] ? hB : zB : GB[TB] ? hB < kB[TB] ? Math.max(zB, kB[TB]) : Math.max(hB, kB[TB]) : zB + vB > kB[TB] + nB ? Math.max(hB, kB[TB]) : Math.max(zB, kB[TB])
    }

    function OB(BB) {
      return OB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, OB(BB)
    }

    function YB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function iB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? YB(Object(ZB), !0).forEach((function(IB) {
          PB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : YB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function pB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, RB(TB.key), TB)
      }
    }

    function aB(BB, IB, ZB) {
      return IB = MB(IB),
        function(BB, IB) {
          if (IB && ("object" === OB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, HB() ? Reflect.construct(IB, ZB || [], MB(BB).constructor) : IB.apply(BB, ZB))
    }

    function HB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (HB = function() {
        return !!BB
      })()
    }

    function MB(BB) {
      return MB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, MB(BB)
    }

    function jB(BB, IB) {
      return jB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, jB(BB, IB)
    }

    function PB(BB, IB, ZB) {
      return (IB = RB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function RB(BB) {
      var IB = function(BB, IB) {
        if ("object" != OB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != OB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == OB(IB) ? IB : IB + ""
    }
    var rB = function(BB) {
        function IB() {
          var BB;
          ! function(BB, IB) {
            if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
          }(this, IB);
          for (var ZB = arguments.length, TB = new Array(ZB), JB = 0; JB < ZB; JB++) TB[JB] = arguments[JB];
          return PB(BB = aB(this, IB, [].concat(TB)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), PB(BB, "handleKeyDown", (function(IB) {
            var ZB, TB, JB, oB;
            "Escape" === IB.key && BB.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (ZB = null === (TB = BB.props.coordinate) || void 0 === TB ? void 0 : TB.x) && void 0 !== ZB ? ZB : 0,
                y: null !== (JB = null === (oB = BB.props.coordinate) || void 0 === oB ? void 0 : oB.y) && void 0 !== JB ? JB : 0
              }
            })
          })), BB
        }
        return function(BB, IB) {
          if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(IB && IB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), IB && jB(BB, IB)
        }(IB, BB), ZB = IB, (JB = [{
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
            var BB, IB;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (BB = this.props.coordinate) || void 0 === BB ? void 0 : BB.x) === this.state.dismissedAtCoordinate.x && (null === (IB = this.props.coordinate) || void 0 === IB ? void 0 : IB.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var BB = this,
              IB = this.props,
              ZB = IB.active,
              JB = IB.allowEscapeViewBox,
              oB = IB.animationDuration,
              GB = IB.animationEasing,
              vB = IB.children,
              kB = IB.coordinate,
              cB = IB.hasPayload,
              nB = IB.isAnimationActive,
              hB = IB.offset,
              zB = IB.position,
              FB = IB.reverseDirection,
              NB = IB.useTranslate3d,
              gB = IB.viewBox,
              qB = IB.wrapperStyle,
              yB = function(BB) {
                var IB, ZB, TB = BB.allowEscapeViewBox,
                  JB = BB.coordinate,
                  oB = BB.offsetTopLeft,
                  GB = BB.position,
                  vB = BB.reverseDirection,
                  kB = BB.tooltipBox,
                  cB = BB.useTranslate3d,
                  nB = BB.viewBox;
                return {
                  cssProperties: kB.height > 0 && kB.width > 0 && JB ? function(BB) {
                    var IB = BB.translateX,
                      ZB = BB.translateY;
                    return {
                      transform: BB.useTranslate3d ? "translate3d(".concat(IB, "px, ").concat(ZB, "px, 0)") : "translate(".concat(IB, "px, ").concat(ZB, "px)")
                    }
                  }({
                    translateX: IB = wB({
                      allowEscapeViewBox: TB,
                      coordinate: JB,
                      key: "x",
                      offsetTopLeft: oB,
                      position: GB,
                      reverseDirection: vB,
                      tooltipDimension: kB.width,
                      viewBox: nB,
                      viewBoxDimension: nB.width
                    }),
                    translateY: ZB = wB({
                      allowEscapeViewBox: TB,
                      coordinate: JB,
                      key: "y",
                      offsetTopLeft: oB,
                      position: GB,
                      reverseDirection: vB,
                      tooltipDimension: kB.height,
                      viewBox: nB,
                      viewBoxDimension: nB.height
                    }),
                    useTranslate3d: cB
                  }) : QB,
                  cssClasses: sB({
                    translateX: IB,
                    translateY: ZB,
                    coordinate: JB
                  })
                }
              }({
                allowEscapeViewBox: JB,
                coordinate: kB,
                offsetTopLeft: hB,
                position: zB,
                reverseDirection: FB,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: NB,
                viewBox: gB
              }),
              UB = yB.cssClasses,
              WB = yB.cssProperties,
              dB = iB(iB({
                transition: nB && ZB ? "transform ".concat(oB, "ms ").concat(GB) : void 0
              }, WB), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && ZB && cB ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, qB);
            return TB.createElement("div", {
              tabIndex: -1,
              className: UB,
              style: dB,
              ref: function(IB) {
                BB.wrapperNode = IB
              }
            }, vB)
          }
        }]) && pB(ZB.prototype, JB), oB && pB(ZB, oB), Object.defineProperty(ZB, "prototype", {
          writable: !1
        }), ZB;
        var ZB, JB, oB
      }(TB.PureComponent),
      mB = ZB(6132),
      XB = ZB(6137);

    function LB(BB) {
      return LB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, LB(BB)
    }

    function eB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function uB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? eB(Object(ZB), !0).forEach((function(IB) {
          xB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : eB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function fB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, EB(TB.key), TB)
      }
    }

    function lB(BB, IB, ZB) {
      return IB = tB(IB),
        function(BB, IB) {
          if (IB && ("object" === LB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, AB() ? Reflect.construct(IB, ZB || [], tB(BB).constructor) : IB.apply(BB, ZB))
    }

    function AB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (AB = function() {
        return !!BB
      })()
    }

    function tB(BB) {
      return tB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, tB(BB)
    }

    function bB(BB, IB) {
      return bB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, bB(BB, IB)
    }

    function xB(BB, IB, ZB) {
      return (IB = EB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function EB(BB) {
      var IB = function(BB, IB) {
        if ("object" != LB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != LB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == LB(IB) ? IB : IB + ""
    }

    function DB(BB) {
      return BB.dataKey
    }
    var KB = function(BB) {
      function IB() {
        return function(BB, IB) {
          if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
        }(this, IB), lB(this, IB, arguments)
      }
      return function(BB, IB) {
        if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(IB && IB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), IB && bB(BB, IB)
      }(IB, BB), ZB = IB, (JB = [{
        key: "render",
        value: function() {
          var BB = this,
            IB = this.props,
            ZB = IB.active,
            JB = IB.allowEscapeViewBox,
            oB = IB.animationDuration,
            GB = IB.animationEasing,
            vB = IB.content,
            kB = IB.coordinate,
            cB = IB.filterNull,
            nB = IB.isAnimationActive,
            hB = IB.offset,
            zB = IB.payload,
            FB = IB.payloadUniqBy,
            NB = IB.position,
            gB = IB.reverseDirection,
            qB = IB.useTranslate3d,
            yB = IB.viewBox,
            WB = IB.wrapperStyle,
            dB = null !== zB && void 0 !== zB ? zB : [];
          cB && dB.length && (dB = (0, XB.c)(zB.filter((function(IB) {
            return null != IB.value && (!0 !== IB.hide || BB.props.includeHidden)
          })), FB, DB));
          var CB = dB.length > 0;
          return TB.createElement(rB, {
            allowEscapeViewBox: JB,
            animationDuration: oB,
            animationEasing: GB,
            isAnimationActive: nB,
            active: ZB,
            coordinate: kB,
            hasPayload: CB,
            offset: hB,
            position: NB,
            reverseDirection: gB,
            useTranslate3d: qB,
            viewBox: yB,
            wrapperStyle: WB
          }, function(BB, IB) {
            return TB.isValidElement(BB) ? TB.cloneElement(BB, IB) : "function" === typeof BB ? TB.createElement(BB, IB) : TB.createElement(UB, IB)
          }(vB, uB(uB({}, this.props), {}, {
            payload: dB
          })))
        }
      }]) && fB(ZB.prototype, JB), oB && fB(ZB, oB), Object.defineProperty(ZB, "prototype", {
        writable: !1
      }), ZB;
      var ZB, JB, oB
    }(TB.PureComponent);
    xB(KB, "displayName", "Tooltip"), xB(KB, "defaultProps", {
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
      isAnimationActive: !mB.e.isSsr,
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
  6124: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => cB
    });
    var TB = ZB(63),
      JB = ZB(5250),
      oB = ZB(5573),
      GB = ["children", "className"];

    function vB() {
      return vB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, vB.apply(this, arguments)
    }

    function kB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }
    var cB = TB.forwardRef((function(BB, IB) {
      var ZB = BB.children,
        cB = BB.className,
        nB = kB(BB, GB),
        hB = (0, JB.c)("recharts-layer", cB);
      return TB.createElement("g", vB({
        className: hB
      }, (0, oB.e)(nB, !0), {
        ref: IB
      }), ZB)
    }))
  },
  6118: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => cB
    });
    var TB = ZB(63),
      JB = ZB(5250),
      oB = ZB(5573),
      GB = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function vB() {
      return vB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, vB.apply(this, arguments)
    }

    function kB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function cB(BB) {
      var IB = BB.children,
        ZB = BB.width,
        cB = BB.height,
        nB = BB.viewBox,
        hB = BB.className,
        zB = BB.style,
        FB = BB.title,
        NB = BB.desc,
        gB = kB(BB, GB),
        qB = nB || {
          width: ZB,
          height: cB,
          x: 0,
          y: 0
        },
        yB = (0, JB.c)("recharts-surface", hB);
      return TB.createElement("svg", vB({}, (0, oB.e)(gB, !0, "svg"), {
        className: yB,
        width: ZB,
        height: cB,
        style: zB,
        viewBox: "".concat(qB.x, " ").concat(qB.y, " ").concat(qB.width, " ").concat(qB.height)
      }), TB.createElement("title", null, FB), TB.createElement("desc", null, NB), IB)
    }
  },
  6488: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => WB,
      f: () => QB,
      i: () => pB,
      k: () => iB,
      m: () => dB,
      n: () => YB,
      q: () => OB,
      u: () => CB,
      x: () => wB,
      z: () => sB
    });
    var TB = ZB(63),
      JB = ZB(6111),
      oB = ZB(6490),
      GB = ZB.n(oB),
      vB = ZB(6392),
      kB = ZB.n(vB),
      cB = ZB(5385),
      nB = ZB.n(cB)()((function(BB) {
        return {
          x: BB.left,
          y: BB.top,
          width: BB.width,
          height: BB.height
        }
      }), (function(BB) {
        return ["l", BB.left, "t", BB.top, "w", BB.width, "h", BB.height].join("")
      })),
      hB = ZB(5335);
    var zB = (0, TB.createContext)(void 0),
      FB = (0, TB.createContext)(void 0),
      NB = (0, TB.createContext)(void 0),
      gB = (0, TB.createContext)({}),
      qB = (0, TB.createContext)(void 0),
      yB = (0, TB.createContext)(0),
      UB = (0, TB.createContext)(0),
      WB = function(BB) {
        var IB = BB.state,
          ZB = IB.xAxisMap,
          JB = IB.yAxisMap,
          oB = IB.offset,
          GB = BB.clipPathId,
          vB = BB.children,
          kB = BB.width,
          cB = BB.height,
          hB = nB(oB);
        return TB.createElement(zB.Provider, {
          value: ZB
        }, TB.createElement(FB.Provider, {
          value: JB
        }, TB.createElement(gB.Provider, {
          value: oB
        }, TB.createElement(NB.Provider, {
          value: hB
        }, TB.createElement(qB.Provider, {
          value: GB
        }, TB.createElement(yB.Provider, {
          value: cB
        }, TB.createElement(UB.Provider, {
          value: kB
        }, vB)))))))
      },
      dB = function() {
        return (0, TB.useContext)(qB)
      };
    var CB = function(BB) {
        var IB = (0, TB.useContext)(zB);
        null == IB && (0, JB.d)(!1);
        var ZB = IB[BB];
        return null == ZB && (0, JB.d)(!1), ZB
      },
      QB = function() {
        var BB = (0, TB.useContext)(zB);
        return (0, hB.i)(BB)
      },
      sB = function() {
        var BB = (0, TB.useContext)(FB);
        return GB()(BB, (function(BB) {
          return kB()(BB.domain, Number.isFinite)
        })) || (0, hB.i)(BB)
      },
      wB = function(BB) {
        var IB = (0, TB.useContext)(FB);
        null == IB && (0, JB.d)(!1);
        var ZB = IB[BB];
        return null == ZB && (0, JB.d)(!1), ZB
      },
      OB = function() {
        return (0, TB.useContext)(NB)
      },
      YB = function() {
        return (0, TB.useContext)(gB)
      },
      iB = function() {
        return (0, TB.useContext)(UB)
      },
      pB = function() {
        return (0, TB.useContext)(yB)
      }
  },
  6511: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => DB
    });
    var TB = ZB(63);

    function JB() {}

    function oB(BB, IB, ZB) {
      BB._context.bezierCurveTo((2 * BB._x0 + BB._x1) / 3, (2 * BB._y0 + BB._y1) / 3, (BB._x0 + 2 * BB._x1) / 3, (BB._y0 + 2 * BB._y1) / 3, (BB._x0 + 4 * BB._x1 + IB) / 6, (BB._y0 + 4 * BB._y1 + ZB) / 6)
    }

    function GB(BB) {
      this._context = BB
    }

    function vB(BB) {
      this._context = BB
    }

    function kB(BB) {
      this._context = BB
    }
    GB.prototype = {
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
            oB(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(BB, IB) {
        switch (BB = +BB, IB = +IB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, IB) : this._context.moveTo(BB, IB);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            oB(this, BB, IB)
        }
        this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = IB
      }
    }, vB.prototype = {
      areaStart: JB,
      areaEnd: JB,
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
      point: function(BB, IB) {
        switch (BB = +BB, IB = +IB, this._point) {
          case 0:
            this._point = 1, this._x2 = BB, this._y2 = IB;
            break;
          case 1:
            this._point = 2, this._x3 = BB, this._y3 = IB;
            break;
          case 2:
            this._point = 3, this._x4 = BB, this._y4 = IB, this._context.moveTo((this._x0 + 4 * this._x1 + BB) / 6, (this._y0 + 4 * this._y1 + IB) / 6);
            break;
          default:
            oB(this, BB, IB)
        }
        this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = IB
      }
    }, kB.prototype = {
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
      point: function(BB, IB) {
        switch (BB = +BB, IB = +IB, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var ZB = (this._x0 + 4 * this._x1 + BB) / 6,
              TB = (this._y0 + 4 * this._y1 + IB) / 6;
            this._line ? this._context.lineTo(ZB, TB) : this._context.moveTo(ZB, TB);
            break;
          case 3:
            this._point = 4;
          default:
            oB(this, BB, IB)
        }
        this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = IB
      }
    };
    class cB {
      constructor(BB, IB) {
        this._context = BB, this._x = IB
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
      point(BB, IB) {
        switch (BB = +BB, IB = +IB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, IB) : this._context.moveTo(BB, IB);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + BB) / 2, this._y0, this._x0, IB, BB, IB) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + IB) / 2, BB, this._y0, BB, IB)
        }
        this._x0 = BB, this._y0 = IB
      }
    }

    function nB(BB) {
      this._context = BB
    }

    function hB(BB) {
      this._context = BB
    }

    function zB(BB) {
      return new hB(BB)
    }

    function FB(BB) {
      return BB < 0 ? -1 : 1
    }

    function NB(BB, IB, ZB) {
      var TB = BB._x1 - BB._x0,
        JB = IB - BB._x1,
        oB = (BB._y1 - BB._y0) / (TB || JB < 0 && -0),
        GB = (ZB - BB._y1) / (JB || TB < 0 && -0),
        vB = (oB * JB + GB * TB) / (TB + JB);
      return (FB(oB) + FB(GB)) * Math.min(Math.abs(oB), Math.abs(GB), .5 * Math.abs(vB)) || 0
    }

    function gB(BB, IB) {
      var ZB = BB._x1 - BB._x0;
      return ZB ? (3 * (BB._y1 - BB._y0) / ZB - IB) / 2 : IB
    }

    function qB(BB, IB, ZB) {
      var TB = BB._x0,
        JB = BB._y0,
        oB = BB._x1,
        GB = BB._y1,
        vB = (oB - TB) / 3;
      BB._context.bezierCurveTo(TB + vB, JB + vB * IB, oB - vB, GB - vB * ZB, oB, GB)
    }

    function yB(BB) {
      this._context = BB
    }

    function UB(BB) {
      this._context = new WB(BB)
    }

    function WB(BB) {
      this._context = BB
    }

    function dB(BB) {
      this._context = BB
    }

    function CB(BB) {
      var IB, ZB, TB = BB.length - 1,
        JB = new Array(TB),
        oB = new Array(TB),
        GB = new Array(TB);
      for (JB[0] = 0, oB[0] = 2, GB[0] = BB[0] + 2 * BB[1], IB = 1; IB < TB - 1; ++IB) JB[IB] = 1, oB[IB] = 4, GB[IB] = 4 * BB[IB] + 2 * BB[IB + 1];
      for (JB[TB - 1] = 2, oB[TB - 1] = 7, GB[TB - 1] = 8 * BB[TB - 1] + BB[TB], IB = 1; IB < TB; ++IB) ZB = JB[IB] / oB[IB - 1], oB[IB] -= ZB, GB[IB] -= ZB * GB[IB - 1];
      for (JB[TB - 1] = GB[TB - 1] / oB[TB - 1], IB = TB - 2; IB >= 0; --IB) JB[IB] = (GB[IB] - JB[IB + 1]) / oB[IB];
      for (oB[TB - 1] = (BB[TB] + JB[TB - 1]) / 2, IB = 0; IB < TB - 1; ++IB) oB[IB] = 2 * BB[IB + 1] - JB[IB + 1];
      return [JB, oB]
    }

    function QB(BB, IB) {
      this._context = BB, this._t = IB
    }
    nB.prototype = {
      areaStart: JB,
      areaEnd: JB,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(BB, IB) {
        BB = +BB, IB = +IB, this._point ? this._context.lineTo(BB, IB) : (this._point = 1, this._context.moveTo(BB, IB))
      }
    }, hB.prototype = {
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
      point: function(BB, IB) {
        switch (BB = +BB, IB = +IB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, IB) : this._context.moveTo(BB, IB);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(BB, IB)
        }
      }
    }, yB.prototype = {
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
            qB(this, this._t0, gB(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(BB, IB) {
        var ZB = NaN;
        if (IB = +IB, (BB = +BB) !== this._x1 || IB !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(BB, IB) : this._context.moveTo(BB, IB);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, qB(this, gB(this, ZB = NB(this, BB, IB)), ZB);
              break;
            default:
              qB(this, this._t0, ZB = NB(this, BB, IB))
          }
          this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = IB, this._t0 = ZB
        }
      }
    }, (UB.prototype = Object.create(yB.prototype)).point = function(BB, IB) {
      yB.prototype.point.call(this, IB, BB)
    }, WB.prototype = {
      moveTo: function(BB, IB) {
        this._context.moveTo(IB, BB)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(BB, IB) {
        this._context.lineTo(IB, BB)
      },
      bezierCurveTo: function(BB, IB, ZB, TB, JB, oB) {
        this._context.bezierCurveTo(IB, BB, TB, ZB, oB, JB)
      }
    }, dB.prototype = {
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
          IB = this._y,
          ZB = BB.length;
        if (ZB)
          if (this._line ? this._context.lineTo(BB[0], IB[0]) : this._context.moveTo(BB[0], IB[0]), 2 === ZB) this._context.lineTo(BB[1], IB[1]);
          else
            for (var TB = CB(BB), JB = CB(IB), oB = 0, GB = 1; GB < ZB; ++oB, ++GB) this._context.bezierCurveTo(TB[0][oB], JB[0][oB], TB[1][oB], JB[1][oB], BB[GB], IB[GB]);
        (this._line || 0 !== this._line && 1 === ZB) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(BB, IB) {
        this._x.push(+BB), this._y.push(+IB)
      }
    }, QB.prototype = {
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
      point: function(BB, IB) {
        switch (BB = +BB, IB = +IB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, IB) : this._context.moveTo(BB, IB);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, IB), this._context.lineTo(BB, IB);
            else {
              var ZB = this._x * (1 - this._t) + BB * this._t;
              this._context.lineTo(ZB, this._y), this._context.lineTo(ZB, IB)
            }
        }
        this._x = BB, this._y = IB
      }
    };
    var sB = ZB(6355),
      wB = ZB(6244),
      OB = ZB(6246);

    function YB(BB) {
      return BB[0]
    }

    function iB(BB) {
      return BB[1]
    }

    function pB(BB, IB) {
      var ZB = (0, wB.b)(!0),
        TB = null,
        JB = zB,
        oB = null,
        GB = (0, OB.b)(vB);

      function vB(vB) {
        var kB, cB, nB, hB = (vB = (0, sB.b)(vB)).length,
          zB = !1;
        for (null == TB && (oB = JB(nB = GB())), kB = 0; kB <= hB; ++kB) !(kB < hB && ZB(cB = vB[kB], kB, vB)) === zB && ((zB = !zB) ? oB.lineStart() : oB.lineEnd()), zB && oB.point(+BB(cB, kB, vB), +IB(cB, kB, vB));
        if (nB) return oB = null, nB + "" || null
      }
      return BB = "function" === typeof BB ? BB : void 0 === BB ? YB : (0, wB.b)(BB), IB = "function" === typeof IB ? IB : void 0 === IB ? iB : (0, wB.b)(IB), vB.x = function(IB) {
        return arguments.length ? (BB = "function" === typeof IB ? IB : (0, wB.b)(+IB), vB) : BB
      }, vB.y = function(BB) {
        return arguments.length ? (IB = "function" === typeof BB ? BB : (0, wB.b)(+BB), vB) : IB
      }, vB.defined = function(BB) {
        return arguments.length ? (ZB = "function" === typeof BB ? BB : (0, wB.b)(!!BB), vB) : ZB
      }, vB.curve = function(BB) {
        return arguments.length ? (JB = BB, null != TB && (oB = JB(TB)), vB) : JB
      }, vB.context = function(BB) {
        return arguments.length ? (null == BB ? TB = oB = null : oB = JB(TB = BB), vB) : TB
      }, vB
    }

    function aB(BB, IB, ZB) {
      var TB = null,
        JB = (0, wB.b)(!0),
        oB = null,
        GB = zB,
        vB = null,
        kB = (0, OB.b)(cB);

      function cB(cB) {
        var nB, hB, zB, FB, NB, gB = (cB = (0, sB.b)(cB)).length,
          qB = !1,
          yB = new Array(gB),
          UB = new Array(gB);
        for (null == oB && (vB = GB(NB = kB())), nB = 0; nB <= gB; ++nB) {
          if (!(nB < gB && JB(FB = cB[nB], nB, cB)) === qB)
            if (qB = !qB) hB = nB, vB.areaStart(), vB.lineStart();
            else {
              for (vB.lineEnd(), vB.lineStart(), zB = nB - 1; zB >= hB; --zB) vB.point(yB[zB], UB[zB]);
              vB.lineEnd(), vB.areaEnd()
            } qB && (yB[nB] = +BB(FB, nB, cB), UB[nB] = +IB(FB, nB, cB), vB.point(TB ? +TB(FB, nB, cB) : yB[nB], ZB ? +ZB(FB, nB, cB) : UB[nB]))
        }
        if (NB) return vB = null, NB + "" || null
      }

      function nB() {
        return pB().defined(JB).curve(GB).context(oB)
      }
      return BB = "function" === typeof BB ? BB : void 0 === BB ? YB : (0, wB.b)(+BB), IB = "function" === typeof IB ? IB : void 0 === IB ? (0, wB.b)(0) : (0, wB.b)(+IB), ZB = "function" === typeof ZB ? ZB : void 0 === ZB ? iB : (0, wB.b)(+ZB), cB.x = function(IB) {
        return arguments.length ? (BB = "function" === typeof IB ? IB : (0, wB.b)(+IB), TB = null, cB) : BB
      }, cB.x0 = function(IB) {
        return arguments.length ? (BB = "function" === typeof IB ? IB : (0, wB.b)(+IB), cB) : BB
      }, cB.x1 = function(BB) {
        return arguments.length ? (TB = null == BB ? null : "function" === typeof BB ? BB : (0, wB.b)(+BB), cB) : TB
      }, cB.y = function(BB) {
        return arguments.length ? (IB = "function" === typeof BB ? BB : (0, wB.b)(+BB), ZB = null, cB) : IB
      }, cB.y0 = function(BB) {
        return arguments.length ? (IB = "function" === typeof BB ? BB : (0, wB.b)(+BB), cB) : IB
      }, cB.y1 = function(BB) {
        return arguments.length ? (ZB = null == BB ? null : "function" === typeof BB ? BB : (0, wB.b)(+BB), cB) : ZB
      }, cB.lineX0 = cB.lineY0 = function() {
        return nB().x(BB).y(IB)
      }, cB.lineY1 = function() {
        return nB().x(BB).y(ZB)
      }, cB.lineX1 = function() {
        return nB().x(TB).y(IB)
      }, cB.defined = function(BB) {
        return arguments.length ? (JB = "function" === typeof BB ? BB : (0, wB.b)(!!BB), cB) : JB
      }, cB.curve = function(BB) {
        return arguments.length ? (GB = BB, null != oB && (vB = GB(oB)), cB) : GB
      }, cB.context = function(BB) {
        return arguments.length ? (null == BB ? oB = vB = null : vB = GB(oB = BB), cB) : oB
      }, cB
    }
    var HB = ZB(6200),
      MB = ZB.n(HB),
      jB = ZB(5425),
      PB = ZB.n(jB),
      RB = ZB(5250),
      rB = ZB(5594),
      mB = ZB(5573),
      XB = ZB(5335);

    function LB(BB) {
      return LB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, LB(BB)
    }

    function eB() {
      return eB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, eB.apply(this, arguments)
    }

    function uB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function fB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? uB(Object(ZB), !0).forEach((function(IB) {
          lB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : uB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function lB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != LB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != LB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == LB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }
    var AB = {
        curveBasisClosed: function(BB) {
          return new vB(BB)
        },
        curveBasisOpen: function(BB) {
          return new kB(BB)
        },
        curveBasis: function(BB) {
          return new GB(BB)
        },
        curveBumpX: function(BB) {
          return new cB(BB, !0)
        },
        curveBumpY: function(BB) {
          return new cB(BB, !1)
        },
        curveLinearClosed: function(BB) {
          return new nB(BB)
        },
        curveLinear: zB,
        curveMonotoneX: function(BB) {
          return new yB(BB)
        },
        curveMonotoneY: function(BB) {
          return new UB(BB)
        },
        curveNatural: function(BB) {
          return new dB(BB)
        },
        curveStep: function(BB) {
          return new QB(BB, .5)
        },
        curveStepAfter: function(BB) {
          return new QB(BB, 1)
        },
        curveStepBefore: function(BB) {
          return new QB(BB, 0)
        }
      },
      tB = function(BB) {
        return BB.x === +BB.x && BB.y === +BB.y
      },
      bB = function(BB) {
        return BB.x
      },
      xB = function(BB) {
        return BB.y
      },
      EB = function(BB) {
        var IB, ZB = BB.type,
          TB = void 0 === ZB ? "linear" : ZB,
          JB = BB.points,
          oB = void 0 === JB ? [] : JB,
          GB = BB.baseLine,
          vB = BB.layout,
          kB = BB.connectNulls,
          cB = void 0 !== kB && kB,
          nB = function(BB, IB) {
            if (PB()(BB)) return BB;
            var ZB = "curve".concat(MB()(BB));
            return "curveMonotone" !== ZB && "curveBump" !== ZB || !IB ? AB[ZB] || zB : AB["".concat(ZB).concat("vertical" === IB ? "Y" : "X")]
          }(TB, vB),
          hB = cB ? oB.filter((function(BB) {
            return tB(BB)
          })) : oB;
        if (Array.isArray(GB)) {
          var FB = cB ? GB.filter((function(BB) {
              return tB(BB)
            })) : GB,
            NB = hB.map((function(BB, IB) {
              return fB(fB({}, BB), {}, {
                base: FB[IB]
              })
            }));
          return (IB = "vertical" === vB ? aB().y(xB).x1(bB).x0((function(BB) {
            return BB.base.x
          })) : aB().x(bB).y1(xB).y0((function(BB) {
            return BB.base.y
          }))).defined(tB).curve(nB), IB(NB)
        }
        return (IB = "vertical" === vB && (0, XB.w)(GB) ? aB().y(xB).x1(bB).x0(GB) : (0, XB.w)(GB) ? aB().x(bB).y1(xB).y0(GB) : pB().x(bB).y(xB)).defined(tB).curve(nB), IB(hB)
      },
      DB = function(BB) {
        var IB = BB.className,
          ZB = BB.points,
          JB = BB.path,
          oB = BB.pathRef;
        if ((!ZB || !ZB.length) && !JB) return null;
        var GB = ZB && ZB.length ? EB(BB) : JB;
        return TB.createElement("path", eB({}, (0, mB.e)(BB, !1), (0, rB.j)(BB), {
          className: (0, RB.c)("recharts-curve", IB),
          d: GB,
          ref: oB
        }))
      }
  },
  6255: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => kB
    });
    var TB = ZB(63),
      JB = ZB(5250),
      oB = ZB(5594),
      GB = ZB(5573);

    function vB() {
      return vB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, vB.apply(this, arguments)
    }
    var kB = function(BB) {
      var IB = BB.cx,
        ZB = BB.cy,
        kB = BB.r,
        cB = BB.className,
        nB = (0, JB.c)("recharts-dot", cB);
      return IB === +IB && ZB === +ZB && kB === +kB ? TB.createElement("circle", vB({}, (0, GB.e)(BB, !1), (0, oB.j)(BB), {
        className: nB,
        cx: IB,
        cy: ZB,
        r: kB
      })) : null
    }
  },
  6263: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => yB,
      e: () => gB
    });
    var TB = ZB(63),
      JB = ZB(5250),
      oB = ZB(6271),
      GB = ZB(5573);

    function vB(BB) {
      return vB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, vB(BB)
    }

    function kB() {
      return kB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, kB.apply(this, arguments)
    }

    function cB(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        var ZB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != ZB) {
          var TB, JB, oB, GB, vB = [],
            kB = !0,
            cB = !1;
          try {
            if (oB = (ZB = ZB.call(BB)).next, 0 === IB) {
              if (Object(ZB) !== ZB) return;
              kB = !1
            } else
              for (; !(kB = (TB = oB.call(ZB)).done) && (vB.push(TB.value), vB.length !== IB); kB = !0);
          } catch (BB) {
            cB = !0, JB = BB
          } finally {
            try {
              if (!kB && null != ZB.return && (GB = ZB.return(), Object(GB) !== GB)) return
            } finally {
              if (cB) throw JB
            }
          }
          return vB
        }
      }(BB, IB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return nB(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return nB(BB, IB)
      }(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function hB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function zB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? hB(Object(ZB), !0).forEach((function(IB) {
          FB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : hB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function FB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != vB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != vB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == vB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }
    var NB = function(BB, IB, ZB, TB, JB) {
        var oB, GB = Math.min(Math.abs(ZB) / 2, Math.abs(TB) / 2),
          vB = TB >= 0 ? 1 : -1,
          kB = ZB >= 0 ? 1 : -1,
          cB = TB >= 0 && ZB >= 0 || TB < 0 && ZB < 0 ? 1 : 0;
        if (GB > 0 && JB instanceof Array) {
          for (var nB = [0, 0, 0, 0], hB = 0; hB < 4; hB++) nB[hB] = JB[hB] > GB ? GB : JB[hB];
          oB = "M".concat(BB, ",").concat(IB + vB * nB[0]), nB[0] > 0 && (oB += "A ".concat(nB[0], ",").concat(nB[0], ",0,0,").concat(cB, ",").concat(BB + kB * nB[0], ",").concat(IB)), oB += "L ".concat(BB + ZB - kB * nB[1], ",").concat(IB), nB[1] > 0 && (oB += "A ".concat(nB[1], ",").concat(nB[1], ",0,0,").concat(cB, ",\n        ").concat(BB + ZB, ",").concat(IB + vB * nB[1])), oB += "L ".concat(BB + ZB, ",").concat(IB + TB - vB * nB[2]), nB[2] > 0 && (oB += "A ".concat(nB[2], ",").concat(nB[2], ",0,0,").concat(cB, ",\n        ").concat(BB + ZB - kB * nB[2], ",").concat(IB + TB)), oB += "L ".concat(BB + kB * nB[3], ",").concat(IB + TB), nB[3] > 0 && (oB += "A ".concat(nB[3], ",").concat(nB[3], ",0,0,").concat(cB, ",\n        ").concat(BB, ",").concat(IB + TB - vB * nB[3])), oB += "Z"
        } else if (GB > 0 && JB === +JB && JB > 0) {
          var zB = Math.min(GB, JB);
          oB = "M ".concat(BB, ",").concat(IB + vB * zB, "\n            A ").concat(zB, ",").concat(zB, ",0,0,").concat(cB, ",").concat(BB + kB * zB, ",").concat(IB, "\n            L ").concat(BB + ZB - kB * zB, ",").concat(IB, "\n            A ").concat(zB, ",").concat(zB, ",0,0,").concat(cB, ",").concat(BB + ZB, ",").concat(IB + vB * zB, "\n            L ").concat(BB + ZB, ",").concat(IB + TB - vB * zB, "\n            A ").concat(zB, ",").concat(zB, ",0,0,").concat(cB, ",").concat(BB + ZB - kB * zB, ",").concat(IB + TB, "\n            L ").concat(BB + kB * zB, ",").concat(IB + TB, "\n            A ").concat(zB, ",").concat(zB, ",0,0,").concat(cB, ",").concat(BB, ",").concat(IB + TB - vB * zB, " Z")
        } else oB = "M ".concat(BB, ",").concat(IB, " h ").concat(ZB, " v ").concat(TB, " h ").concat(-ZB, " Z");
        return oB
      },
      gB = function(BB, IB) {
        if (!BB || !IB) return !1;
        var ZB = BB.x,
          TB = BB.y,
          JB = IB.x,
          oB = IB.y,
          GB = IB.width,
          vB = IB.height;
        if (Math.abs(GB) > 0 && Math.abs(vB) > 0) {
          var kB = Math.min(JB, JB + GB),
            cB = Math.max(JB, JB + GB),
            nB = Math.min(oB, oB + vB),
            hB = Math.max(oB, oB + vB);
          return ZB >= kB && ZB <= cB && TB >= nB && TB <= hB
        }
        return !1
      },
      qB = {
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
      yB = function(BB) {
        var IB = zB(zB({}, qB), BB),
          ZB = (0, TB.useRef)(),
          vB = cB((0, TB.useState)(-1), 2),
          nB = vB[0],
          hB = vB[1];
        (0, TB.useEffect)((function() {
          if (ZB.current && ZB.current.getTotalLength) try {
            var BB = ZB.current.getTotalLength();
            BB && hB(BB)
          } catch (IB) {}
        }), []);
        var FB = IB.x,
          gB = IB.y,
          yB = IB.width,
          UB = IB.height,
          WB = IB.radius,
          dB = IB.className,
          CB = IB.animationEasing,
          QB = IB.animationDuration,
          sB = IB.animationBegin,
          wB = IB.isAnimationActive,
          OB = IB.isUpdateAnimationActive;
        if (FB !== +FB || gB !== +gB || yB !== +yB || UB !== +UB || 0 === yB || 0 === UB) return null;
        var YB = (0, JB.c)("recharts-rectangle", dB);
        return OB ? TB.createElement(oB.e, {
          canBegin: nB > 0,
          from: {
            width: yB,
            height: UB,
            x: FB,
            y: gB
          },
          to: {
            width: yB,
            height: UB,
            x: FB,
            y: gB
          },
          duration: QB,
          animationEasing: CB,
          isActive: OB
        }, (function(BB) {
          var JB = BB.width,
            vB = BB.height,
            cB = BB.x,
            hB = BB.y;
          return TB.createElement(oB.e, {
            canBegin: nB > 0,
            from: "0px ".concat(-1 === nB ? 1 : nB, "px"),
            to: "".concat(nB, "px 0px"),
            attributeName: "strokeDasharray",
            QF: sB,
            duration: QB,
            isActive: wB,
            easing: CB
          }, TB.createElement("path", kB({}, (0, GB.e)(IB, !0), {
            className: YB,
            d: NB(cB, hB, JB, vB, WB),
            ref: ZB
          })))
        })) : TB.createElement("path", kB({}, (0, GB.e)(IB, !0), {
          className: YB,
          d: NB(FB, gB, yB, UB, WB)
        }))
      }
  },
  6461: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => qB
    });
    var TB = ZB(63),
      JB = ZB(5250),
      oB = ZB(5573),
      GB = ZB(6373),
      vB = ZB(5335);

    function kB(BB) {
      return kB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, kB(BB)
    }

    function cB() {
      return cB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, cB.apply(this, arguments)
    }

    function nB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function hB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? nB(Object(ZB), !0).forEach((function(IB) {
          zB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : nB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function zB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != kB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != kB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == kB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }
    var FB = function(BB) {
        var IB = BB.cx,
          ZB = BB.cy,
          TB = BB.radius,
          JB = BB.angle,
          oB = BB.sign,
          vB = BB.isExternal,
          kB = BB.cornerRadius,
          cB = BB.cornerIsExternal,
          nB = kB * (vB ? 1 : -1) + TB,
          hB = Math.asin(kB / nB) / GB.e,
          zB = cB ? JB : JB + oB * hB,
          FB = cB ? JB - oB * hB : JB;
        return {
          center: (0, GB.i)(IB, ZB, nB, zB),
          circleTangency: (0, GB.i)(IB, ZB, TB, zB),
          lineTangency: (0, GB.i)(IB, ZB, nB * Math.cos(hB * GB.e), FB),
          rc: hB
        }
      },
      NB = function(BB) {
        var IB = BB.cx,
          ZB = BB.cy,
          TB = BB.innerRadius,
          JB = BB.outerRadius,
          oB = BB.startAngle,
          kB = function(BB, IB) {
            return (0, vB.y)(IB - BB) * Math.min(Math.abs(IB - BB), 359.999)
          }(oB, BB.endAngle),
          cB = oB + kB,
          nB = (0, GB.i)(IB, ZB, JB, oB),
          hB = (0, GB.i)(IB, ZB, JB, cB),
          zB = "M ".concat(nB.x, ",").concat(nB.y, "\n    A ").concat(JB, ",").concat(JB, ",0,\n    ").concat(+(Math.abs(kB) > 180), ",").concat(+(oB > cB), ",\n    ").concat(hB.x, ",").concat(hB.y, "\n  ");
        if (TB > 0) {
          var FB = (0, GB.i)(IB, ZB, TB, oB),
            NB = (0, GB.i)(IB, ZB, TB, cB);
          zB += "L ".concat(NB.x, ",").concat(NB.y, "\n            A ").concat(TB, ",").concat(TB, ",0,\n            ").concat(+(Math.abs(kB) > 180), ",").concat(+(oB <= cB), ",\n            ").concat(FB.x, ",").concat(FB.y, " Z")
        } else zB += "L ".concat(IB, ",").concat(ZB, " Z");
        return zB
      },
      gB = {
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
      qB = function(BB) {
        var IB = hB(hB({}, gB), BB),
          ZB = IB.cx,
          GB = IB.cy,
          kB = IB.innerRadius,
          nB = IB.outerRadius,
          zB = IB.cornerRadius,
          qB = IB.forceCornerRadius,
          yB = IB.cornerIsExternal,
          UB = IB.startAngle,
          WB = IB.endAngle,
          dB = IB.className;
        if (nB < kB || UB === WB) return null;
        var CB, QB = (0, JB.c)("recharts-sector", dB),
          sB = nB - kB,
          wB = (0, vB.l)(zB, sB, 0, !0);
        return CB = wB > 0 && Math.abs(UB - WB) < 360 ? function(BB) {
          var IB = BB.cx,
            ZB = BB.cy,
            TB = BB.innerRadius,
            JB = BB.outerRadius,
            oB = BB.cornerRadius,
            GB = BB.forceCornerRadius,
            kB = BB.cornerIsExternal,
            cB = BB.startAngle,
            nB = BB.endAngle,
            hB = (0, vB.y)(nB - cB),
            zB = FB({
              cx: IB,
              cy: ZB,
              radius: JB,
              angle: cB,
              sign: hB,
              cornerRadius: oB,
              cornerIsExternal: kB
            }),
            gB = zB.circleTangency,
            qB = zB.lineTangency,
            yB = zB.rc,
            UB = FB({
              cx: IB,
              cy: ZB,
              radius: JB,
              angle: nB,
              sign: -hB,
              cornerRadius: oB,
              cornerIsExternal: kB
            }),
            WB = UB.circleTangency,
            dB = UB.lineTangency,
            CB = UB.rc,
            QB = kB ? Math.abs(cB - nB) : Math.abs(cB - nB) - yB - CB;
          if (QB < 0) return GB ? "M ".concat(qB.x, ",").concat(qB.y, "\n        a").concat(oB, ",").concat(oB, ",0,0,1,").concat(2 * oB, ",0\n        a").concat(oB, ",").concat(oB, ",0,0,1,").concat(2 * -oB, ",0\n      ") : NB({
            cx: IB,
            cy: ZB,
            innerRadius: TB,
            outerRadius: JB,
            startAngle: cB,
            endAngle: nB
          });
          var sB = "M ".concat(qB.x, ",").concat(qB.y, "\n    A").concat(oB, ",").concat(oB, ",0,0,").concat(+(hB < 0), ",").concat(gB.x, ",").concat(gB.y, "\n    A").concat(JB, ",").concat(JB, ",0,").concat(+(QB > 180), ",").concat(+(hB < 0), ",").concat(WB.x, ",").concat(WB.y, "\n    A").concat(oB, ",").concat(oB, ",0,0,").concat(+(hB < 0), ",").concat(dB.x, ",").concat(dB.y, "\n  ");
          if (TB > 0) {
            var wB = FB({
                cx: IB,
                cy: ZB,
                radius: TB,
                angle: cB,
                sign: hB,
                isExternal: !0,
                cornerRadius: oB,
                cornerIsExternal: kB
              }),
              OB = wB.circleTangency,
              YB = wB.lineTangency,
              iB = wB.rc,
              pB = FB({
                cx: IB,
                cy: ZB,
                radius: TB,
                angle: nB,
                sign: -hB,
                isExternal: !0,
                cornerRadius: oB,
                cornerIsExternal: kB
              }),
              aB = pB.circleTangency,
              HB = pB.lineTangency,
              MB = pB.rc,
              jB = kB ? Math.abs(cB - nB) : Math.abs(cB - nB) - iB - MB;
            if (jB < 0 && 0 === oB) return "".concat(sB, "L").concat(IB, ",").concat(ZB, "Z");
            sB += "L".concat(HB.x, ",").concat(HB.y, "\n      A").concat(oB, ",").concat(oB, ",0,0,").concat(+(hB < 0), ",").concat(aB.x, ",").concat(aB.y, "\n      A").concat(TB, ",").concat(TB, ",0,").concat(+(jB > 180), ",").concat(+(hB > 0), ",").concat(OB.x, ",").concat(OB.y, "\n      A").concat(oB, ",").concat(oB, ",0,0,").concat(+(hB < 0), ",").concat(YB.x, ",").concat(YB.y, "Z")
          } else sB += "L".concat(IB, ",").concat(ZB, "Z");
          return sB
        }({
          cx: ZB,
          cy: GB,
          innerRadius: kB,
          outerRadius: nB,
          cornerRadius: Math.min(wB, sB / 2),
          forceCornerRadius: qB,
          cornerIsExternal: yB,
          startAngle: UB,
          endAngle: WB
        }) : NB({
          cx: ZB,
          cy: GB,
          innerRadius: kB,
          outerRadius: nB,
          startAngle: UB,
          endAngle: WB
        }), TB.createElement("path", cB({}, (0, oB.e)(IB, !0), {
          className: QB,
          d: CB,
          role: "img"
        }))
      }
  },
  6193: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => fB
    });
    var TB = ZB(63),
      JB = ZB(6200),
      oB = ZB.n(JB);
    Math.abs, Math.atan2;
    const GB = Math.cos,
      vB = (Math.max, Math.min, Math.sin),
      kB = Math.sqrt,
      cB = Math.PI,
      nB = 2 * cB;
    const hB = {
        draw(BB, IB) {
          const ZB = kB(IB / cB);
          BB.moveTo(ZB, 0), BB.arc(0, 0, ZB, 0, nB)
        }
      },
      zB = {
        draw(BB, IB) {
          const ZB = kB(IB / 5) / 2;
          BB.moveTo(-3 * ZB, -ZB), BB.lineTo(-ZB, -ZB), BB.lineTo(-ZB, -3 * ZB), BB.lineTo(ZB, -3 * ZB), BB.lineTo(ZB, -ZB), BB.lineTo(3 * ZB, -ZB), BB.lineTo(3 * ZB, ZB), BB.lineTo(ZB, ZB), BB.lineTo(ZB, 3 * ZB), BB.lineTo(-ZB, 3 * ZB), BB.lineTo(-ZB, ZB), BB.lineTo(-3 * ZB, ZB), BB.closePath()
        }
      },
      FB = kB(1 / 3),
      NB = 2 * FB,
      gB = {
        draw(BB, IB) {
          const ZB = kB(IB / NB),
            TB = ZB * FB;
          BB.moveTo(0, -ZB), BB.lineTo(TB, 0), BB.lineTo(0, ZB), BB.lineTo(-TB, 0), BB.closePath()
        }
      },
      qB = {
        draw(BB, IB) {
          const ZB = kB(IB),
            TB = -ZB / 2;
          BB.rect(TB, TB, ZB, ZB)
        }
      },
      yB = vB(cB / 10) / vB(7 * cB / 10),
      UB = vB(nB / 10) * yB,
      WB = -GB(nB / 10) * yB,
      dB = {
        draw(BB, IB) {
          const ZB = kB(.8908130915292852 * IB),
            TB = UB * ZB,
            JB = WB * ZB;
          BB.moveTo(0, -ZB), BB.lineTo(TB, JB);
          for (let oB = 1; oB < 5; ++oB) {
            const IB = nB * oB / 5,
              kB = GB(IB),
              cB = vB(IB);
            BB.lineTo(cB * ZB, -kB * ZB), BB.lineTo(kB * TB - cB * JB, cB * TB + kB * JB)
          }
          BB.closePath()
        }
      },
      CB = kB(3),
      QB = {
        draw(BB, IB) {
          const ZB = -kB(IB / (3 * CB));
          BB.moveTo(0, 2 * ZB), BB.lineTo(-CB * ZB, -ZB), BB.lineTo(CB * ZB, -ZB), BB.closePath()
        }
      },
      sB = -.5,
      wB = kB(3) / 2,
      OB = 1 / kB(12),
      YB = 3 * (OB / 2 + 1),
      iB = {
        draw(BB, IB) {
          const ZB = kB(IB / YB),
            TB = ZB / 2,
            JB = ZB * OB,
            oB = TB,
            GB = ZB * OB + ZB,
            vB = -oB,
            cB = GB;
          BB.moveTo(TB, JB), BB.lineTo(oB, GB), BB.lineTo(vB, cB), BB.lineTo(sB * TB - wB * JB, wB * TB + sB * JB), BB.lineTo(sB * oB - wB * GB, wB * oB + sB * GB), BB.lineTo(sB * vB - wB * cB, wB * vB + sB * cB), BB.lineTo(sB * TB + wB * JB, sB * JB - wB * TB), BB.lineTo(sB * oB + wB * GB, sB * GB - wB * oB), BB.lineTo(sB * vB + wB * cB, sB * cB - wB * vB), BB.closePath()
        }
      };
    var pB = ZB(6244),
      aB = ZB(6246);
    kB(3), kB(3);
    var HB = ZB(5250),
      MB = ZB(5573);

    function jB(BB) {
      return jB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, jB(BB)
    }
    var PB = ["type", "size", "sizeType"];

    function RB() {
      return RB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, RB.apply(this, arguments)
    }

    function rB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function mB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? rB(Object(ZB), !0).forEach((function(IB) {
          XB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : rB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function XB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != jB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != jB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == jB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function LB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }
    var eB = {
        symbolCircle: hB,
        symbolCross: zB,
        symbolDiamond: gB,
        symbolSquare: qB,
        symbolStar: dB,
        symbolTriangle: QB,
        symbolWye: iB
      },
      uB = Math.PI / 180,
      fB = function(BB) {
        var IB = BB.type,
          ZB = void 0 === IB ? "circle" : IB,
          JB = BB.size,
          GB = void 0 === JB ? 64 : JB,
          vB = BB.sizeType,
          kB = void 0 === vB ? "area" : vB,
          cB = mB(mB({}, LB(BB, PB)), {}, {
            type: ZB,
            size: GB,
            sizeType: kB
          }),
          nB = cB.className,
          zB = cB.cx,
          FB = cB.cy,
          NB = (0, MB.e)(cB, !0);
        return zB === +zB && FB === +FB && GB === +GB ? TB.createElement("path", RB({}, NB, {
          className: (0, HB.c)("recharts-symbols", nB),
          transform: "translate(".concat(zB, ", ").concat(FB, ")"),
          d: function() {
            var BB = function(BB) {
                var IB = "symbol".concat(oB()(BB));
                return eB[IB] || hB
              }(ZB),
              IB = function(BB, IB) {
                let ZB = null,
                  TB = (0, aB.b)(JB);

                function JB() {
                  let JB;
                  if (ZB || (ZB = JB = TB()), BB.apply(this, arguments).draw(ZB, +IB.apply(this, arguments)), JB) return ZB = null, JB + "" || null
                }
                return BB = "function" === typeof BB ? BB : (0, pB.b)(BB || hB), IB = "function" === typeof IB ? IB : (0, pB.b)(void 0 === IB ? 64 : +IB), JB.type = function(IB) {
                  return arguments.length ? (BB = "function" === typeof IB ? IB : (0, pB.b)(IB), JB) : BB
                }, JB.size = function(BB) {
                  return arguments.length ? (IB = "function" === typeof BB ? BB : (0, pB.b)(+BB), JB) : IB
                }, JB.context = function(BB) {
                  return arguments.length ? (ZB = null == BB ? null : BB, JB) : ZB
                }, JB
              }().type(BB).size(function(BB, IB, ZB) {
                if ("area" === IB) return BB;
                switch (ZB) {
                  case "cross":
                    return 5 * BB * BB / 9;
                  case "diamond":
                    return .5 * BB * BB / Math.sqrt(3);
                  case "square":
                    return BB * BB;
                  case "star":
                    var TB = 18 * uB;
                    return 1.25 * BB * BB * (Math.tan(TB) - Math.tan(2 * TB) * Math.pow(Math.tan(TB), 2));
                  case "triangle":
                    return Math.sqrt(3) * BB * BB / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * BB * BB / 8;
                  default:
                    return Math.PI * BB * BB / 4
                }
              }(GB, kB, ZB));
            return IB()
          }()
        })) : null
      };
    fB.registerSymbol = function(BB, IB) {
      eB["symbol".concat(oB()(BB))] = IB
    }
  },
  6435: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => XB,
      i: () => tB,
      j: () => LB,
      m: () => eB,
      o: () => uB
    });
    var TB = ZB(63),
      JB = ZB(5425),
      oB = ZB.n(JB),
      GB = ZB(6437),
      vB = ZB.n(GB),
      kB = ZB(6453),
      cB = ZB.n(kB),
      nB = ZB(6339),
      hB = ZB.n(nB),
      zB = ZB(6263),
      FB = ZB(5250),
      NB = ZB(6271),
      gB = ZB(5573);

    function qB(BB) {
      return qB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, qB(BB)
    }

    function yB() {
      return yB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB) Object.prototype.hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, yB.apply(this, arguments)
    }

    function UB(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        var ZB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != ZB) {
          var TB, JB, oB, GB, vB = [],
            kB = !0,
            cB = !1;
          try {
            if (oB = (ZB = ZB.call(BB)).next, 0 === IB) {
              if (Object(ZB) !== ZB) return;
              kB = !1
            } else
              for (; !(kB = (TB = oB.call(ZB)).done) && (vB.push(TB.value), vB.length !== IB); kB = !0);
          } catch (BB) {
            cB = !0, JB = BB
          } finally {
            try {
              if (!kB && null != ZB.return && (GB = ZB.return(), Object(GB) !== GB)) return
            } finally {
              if (cB) throw JB
            }
          }
          return vB
        }
      }(BB, IB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return WB(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return WB(BB, IB)
      }(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function WB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function dB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function CB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? dB(Object(ZB), !0).forEach((function(IB) {
          QB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : dB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function QB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != qB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != qB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == qB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }
    var sB = function(BB, IB, ZB, TB, JB) {
        var oB, GB = ZB - TB;
        return oB = "M ".concat(BB, ",").concat(IB), oB += "L ".concat(BB + ZB, ",").concat(IB), oB += "L ".concat(BB + ZB - GB / 2, ",").concat(IB + JB), oB += "L ".concat(BB + ZB - GB / 2 - TB, ",").concat(IB + JB), oB += "L ".concat(BB, ",").concat(IB, " Z")
      },
      wB = {
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
      OB = function(BB) {
        var IB = CB(CB({}, wB), BB),
          ZB = (0, TB.useRef)(),
          JB = UB((0, TB.useState)(-1), 2),
          oB = JB[0],
          GB = JB[1];
        (0, TB.useEffect)((function() {
          if (ZB.current && ZB.current.getTotalLength) try {
            var BB = ZB.current.getTotalLength();
            BB && GB(BB)
          } catch (IB) {}
        }), []);
        var vB = IB.x,
          kB = IB.y,
          cB = IB.upperWidth,
          nB = IB.lowerWidth,
          hB = IB.height,
          zB = IB.className,
          qB = IB.animationEasing,
          WB = IB.animationDuration,
          dB = IB.animationBegin,
          QB = IB.isUpdateAnimationActive;
        if (vB !== +vB || kB !== +kB || cB !== +cB || nB !== +nB || hB !== +hB || 0 === cB && 0 === nB || 0 === hB) return null;
        var OB = (0, FB.c)("recharts-trapezoid", zB);
        return QB ? TB.createElement(NB.e, {
          canBegin: oB > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: hB,
            x: vB,
            y: kB
          },
          to: {
            upperWidth: cB,
            lowerWidth: nB,
            height: hB,
            x: vB,
            y: kB
          },
          duration: WB,
          animationEasing: qB,
          isActive: QB
        }, (function(BB) {
          var JB = BB.upperWidth,
            GB = BB.lowerWidth,
            vB = BB.height,
            kB = BB.x,
            cB = BB.y;
          return TB.createElement(NB.e, {
            canBegin: oB > 0,
            from: "0px ".concat(-1 === oB ? 1 : oB, "px"),
            to: "".concat(oB, "px 0px"),
            attributeName: "strokeDasharray",
            QF: dB,
            duration: WB,
            easing: qB
          }, TB.createElement("path", yB({}, (0, gB.e)(IB, !0), {
            className: OB,
            d: sB(kB, cB, JB, GB, vB),
            ref: ZB
          })))
        })) : TB.createElement("g", null, TB.createElement("path", yB({}, (0, gB.e)(IB, !0), {
          className: OB,
          d: sB(vB, kB, cB, nB, hB)
        })))
      },
      YB = ZB(6461),
      iB = ZB(6124),
      pB = ZB(6193),
      aB = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function HB(BB) {
      return HB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, HB(BB)
    }

    function MB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function jB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function PB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? jB(Object(ZB), !0).forEach((function(IB) {
          RB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : jB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function RB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != HB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != HB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == HB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function rB(BB, IB) {
      return PB(PB({}, IB), BB)
    }

    function mB(BB) {
      var IB = BB.shapeType,
        ZB = BB.elementProps;
      switch (IB) {
        case "rectangle":
          return TB.createElement(zB.b, ZB);
        case "trapezoid":
          return TB.createElement(OB, ZB);
        case "sector":
          return TB.createElement(YB.d, ZB);
        case "symbols":
          if (function(BB) {
              return "symbols" === BB
            }(IB)) return TB.createElement(pB.c, ZB);
          break;
        default:
          return null
      }
    }

    function XB(BB) {
      var IB, ZB = BB.option,
        JB = BB.shapeType,
        GB = BB.propTransformer,
        kB = void 0 === GB ? rB : GB,
        nB = BB.activeClassName,
        hB = void 0 === nB ? "recharts-active-shape" : nB,
        zB = BB.isActive,
        FB = MB(BB, aB);
      if ((0, TB.isValidElement)(ZB)) IB = (0, TB.cloneElement)(ZB, PB(PB({}, FB), function(BB) {
        return (0, TB.isValidElement)(BB) ? BB.props : BB
      }(ZB)));
      else if (oB()(ZB)) IB = ZB(FB);
      else if (vB()(ZB) && !cB()(ZB)) {
        var NB = kB(ZB, FB);
        IB = TB.createElement(mB, {
          shapeType: JB,
          elementProps: NB
        })
      } else {
        var gB = FB;
        IB = TB.createElement(mB, {
          shapeType: JB,
          elementProps: gB
        })
      }
      return zB ? TB.createElement(iB.e, {
        className: hB
      }, IB) : IB
    }

    function LB(BB, IB) {
      return null != IB && "trapezoids" in BB.props
    }

    function eB(BB, IB) {
      return null != IB && "sectors" in BB.props
    }

    function uB(BB, IB) {
      return null != IB && "points" in BB.props
    }

    function fB(BB, IB) {
      var ZB, TB, JB = BB.x === (null === IB || void 0 === IB || null === (ZB = IB.labelViewBox) || void 0 === ZB ? void 0 : ZB.x) || BB.x === IB.x,
        oB = BB.y === (null === IB || void 0 === IB || null === (TB = IB.labelViewBox) || void 0 === TB ? void 0 : TB.y) || BB.y === IB.y;
      return JB && oB
    }

    function lB(BB, IB) {
      var ZB = BB.endAngle === IB.endAngle,
        TB = BB.startAngle === IB.startAngle;
      return ZB && TB
    }

    function AB(BB, IB) {
      var ZB = BB.x === IB.x,
        TB = BB.y === IB.y,
        JB = BB.z === IB.z;
      return ZB && TB && JB
    }

    function tB(BB) {
      var IB = BB.activeTooltipItem,
        ZB = BB.graphicalItem,
        TB = BB.itemData,
        JB = function(BB, IB) {
          var ZB;
          return LB(BB, IB) ? ZB = "trapezoids" : eB(BB, IB) ? ZB = "sectors" : uB(BB, IB) && (ZB = "points"), ZB
        }(ZB, IB),
        oB = function(BB, IB) {
          var ZB, TB;
          return LB(BB, IB) ? null === (ZB = IB.tooltipPayload) || void 0 === ZB || null === (ZB = ZB[0]) || void 0 === ZB || null === (ZB = ZB.payload) || void 0 === ZB ? void 0 : ZB.payload : eB(BB, IB) ? null === (TB = IB.tooltipPayload) || void 0 === TB || null === (TB = TB[0]) || void 0 === TB || null === (TB = TB.payload) || void 0 === TB ? void 0 : TB.payload : uB(BB, IB) ? IB.payload : {}
        }(ZB, IB),
        GB = TB.filter((function(BB, TB) {
          var GB = hB()(oB, BB),
            vB = ZB.props[JB].filter((function(BB) {
              var TB = function(BB, IB) {
                var ZB;
                return LB(BB, IB) ? ZB = fB : eB(BB, IB) ? ZB = lB : uB(BB, IB) && (ZB = AB), ZB
              }(ZB, IB);
              return TB(BB, IB)
            })),
            kB = ZB.props[JB].indexOf(vB[vB.length - 1]);
          return GB && TB === kB
        }));
      return TB.indexOf(GB[GB.length - 1])
    }
  },
  6379: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => CB,
      e: () => yB,
      f: () => QB,
      i: () => WB,
      j: () => UB
    });
    var TB = ZB(6384),
      JB = ZB.n(TB),
      oB = ZB(6392),
      GB = ZB.n(oB),
      vB = ZB(6289),
      kB = ZB(5573),
      cB = ZB(5335),
      nB = ZB(6408);

    function hB(BB) {
      return hB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, hB(BB)
    }

    function zB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, qB(TB.key), TB)
      }
    }

    function FB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function NB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? FB(Object(ZB), !0).forEach((function(IB) {
          gB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : FB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function gB(BB, IB, ZB) {
      return (IB = qB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function qB(BB) {
      var IB = function(BB, IB) {
        if ("object" != hB(BB) || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != hB(TB)) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == hB(IB) ? IB : IB + ""
    }
    var yB = function(BB, IB, ZB, TB, JB) {
        var oB = BB.width,
          GB = BB.height,
          hB = BB.layout,
          zB = BB.children,
          FB = Object.keys(IB),
          qB = {
            left: ZB.left,
            leftMirror: ZB.left,
            right: oB - ZB.right,
            rightMirror: oB - ZB.right,
            top: ZB.top,
            topMirror: ZB.top,
            bottom: GB - ZB.bottom,
            bottomMirror: GB - ZB.bottom
          },
          yB = !!(0, kB.k)(zB, nB.e);
        return FB.reduce((function(oB, GB) {
          var kB, nB, zB, FB, UB, WB = IB[GB],
            dB = WB.orientation,
            CB = WB.domain,
            QB = WB.padding,
            sB = void 0 === QB ? {} : QB,
            wB = WB.mirror,
            OB = WB.reversed,
            YB = "".concat(dB).concat(wB ? "Mirror" : "");
          if ("number" === WB.type && ("gap" === WB.padding || "no-gap" === WB.padding)) {
            var iB = CB[1] - CB[0],
              pB = 1 / 0,
              aB = WB.categoricalDomain.sort(cB.b);
            if (aB.forEach((function(BB, IB) {
                IB > 0 && (pB = Math.min((BB || 0) - (aB[IB - 1] || 0), pB))
              })), Number.isFinite(pB)) {
              var HB = pB / iB,
                MB = "vertical" === WB.layout ? ZB.height : ZB.width;
              if ("gap" === WB.padding && (kB = HB * MB / 2), "no-gap" === WB.padding) {
                var jB = (0, cB.l)(BB.barCategoryGap, HB * MB),
                  PB = HB * MB / 2;
                kB = PB - jB - (PB - jB) / MB * jB
              }
            }
          }
          nB = "xAxis" === TB ? [ZB.left + (sB.left || 0) + (kB || 0), ZB.left + ZB.width - (sB.right || 0) - (kB || 0)] : "yAxis" === TB ? "horizontal" === hB ? [ZB.top + ZB.height - (sB.bottom || 0), ZB.top + (sB.top || 0)] : [ZB.top + (sB.top || 0) + (kB || 0), ZB.top + ZB.height - (sB.bottom || 0) - (kB || 0)] : WB.range, OB && (nB = [nB[1], nB[0]]);
          var RB = (0, vB.jb)(WB, JB, yB),
            rB = RB.scale,
            mB = RB.realScaleType;
          rB.domain(CB).range(nB), (0, vB.g)(rB);
          var XB = (0, vB.Y)(rB, NB(NB({}, WB), {}, {
            realScaleType: mB
          }));
          "xAxis" === TB ? (UB = "top" === dB && !wB || "bottom" === dB && wB, zB = ZB.left, FB = qB[YB] - UB * WB.height) : "yAxis" === TB && (UB = "left" === dB && !wB || "right" === dB && wB, zB = qB[YB] - UB * WB.width, FB = ZB.top);
          var LB = NB(NB(NB({}, WB), XB), {}, {
            realScaleType: mB,
            x: zB,
            y: FB,
            scale: rB,
            width: "xAxis" === TB ? ZB.width : WB.width,
            height: "yAxis" === TB ? ZB.height : WB.height
          });
          return LB.bandSize = (0, vB.p)(LB, XB), WB.hide || "xAxis" !== TB ? WB.hide || (qB[YB] += (UB ? -1 : 1) * LB.width) : qB[YB] += (UB ? -1 : 1) * LB.height, NB(NB({}, oB), {}, gB({}, GB, LB))
        }), {})
      },
      UB = function(BB, IB) {
        var ZB = BB.x,
          TB = BB.y,
          JB = IB.x,
          oB = IB.y;
        return {
          x: Math.min(ZB, JB),
          y: Math.min(TB, oB),
          width: Math.abs(JB - ZB),
          height: Math.abs(oB - TB)
        }
      },
      WB = function(BB) {
        var IB = BB.x1,
          ZB = BB.y1,
          TB = BB.x2,
          JB = BB.y2;
        return UB({
          x: IB,
          y: ZB
        }, {
          x: TB,
          y: JB
        })
      },
      dB = function() {
        function BB(IB) {
          ! function(BB, IB) {
            if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
          }(this, BB), this.scale = IB
        }
        return IB = BB, ZB = [{
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
            var IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              ZB = IB.bandAware,
              TB = IB.position;
            if (void 0 !== BB) {
              if (TB) switch (TB) {
                case "start":
                default:
                  return this.scale(BB);
                case "middle":
                  var JB = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(BB) + JB;
                case "end":
                  var oB = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(BB) + oB
              }
              if (ZB) {
                var GB = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(BB) + GB
              }
              return this.scale(BB)
            }
          }
        }, {
          key: "isInRange",
          value: function(BB) {
            var IB = this.range(),
              ZB = IB[0],
              TB = IB[IB.length - 1];
            return ZB <= TB ? BB >= ZB && BB <= TB : BB >= TB && BB <= ZB
          }
        }], TB = [{
          key: "create",
          value: function(IB) {
            return new BB(IB)
          }
        }], ZB && zB(IB.prototype, ZB), TB && zB(IB, TB), Object.defineProperty(IB, "prototype", {
          writable: !1
        }), IB;
        var IB, ZB, TB
      }();
    gB(dB, "EPS", 1e-4);
    var CB = function(BB) {
      var IB = Object.keys(BB).reduce((function(IB, ZB) {
        return NB(NB({}, IB), {}, gB({}, ZB, dB.create(BB[ZB])))
      }), {});
      return NB(NB({}, IB), {}, {
        apply: function(BB) {
          var ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            TB = ZB.bandAware,
            oB = ZB.position;
          return JB()(BB, (function(BB, ZB) {
            return IB[ZB].apply(BB, {
              bandAware: TB,
              position: oB
            })
          }))
        },
        isInRange: function(BB) {
          return GB()(BB, (function(BB, ZB) {
            return IB[ZB].isInRange(BB)
          }))
        }
      })
    };
    var QB = function(BB) {
      var IB = BB.width,
        ZB = BB.height,
        TB = function(BB) {
          return (BB % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        JB = TB * Math.PI / 180,
        oB = Math.atan(ZB / IB),
        GB = JB > oB && JB < Math.PI - oB ? ZB / Math.sin(JB) : IB / Math.cos(JB);
      return Math.abs(GB)
    }
  },
  6289: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => PG,
      f: () => aG,
      g: () => tG,
      h: () => fG,
      l: () => bG,
      p: () => vv,
      q: () => jG,
      t: () => MG,
      x: () => Iv,
      y: () => Bv,
      C: () => SG,
      G: () => LG,
      H: () => pG,
      L: () => mG,
      N: () => Tv,
      Q: () => HG,
      T: () => KG,
      U: () => Zv,
      W: () => eG,
      Y: () => VG,
      Z: () => cv,
      _: () => iG,
      $: () => XG,
      db: () => kv,
      gb: () => rG,
      jb: () => lG,
      mb: () => Gv,
      qb: () => xG
    });
    var TB = {};
    ZB.r(TB), ZB.d(TB, {
      scaleBand: () => JB.e,
      scaleDiverging: () => ko,
      scaleDivergingLog: () => co,
      scaleDivergingPow: () => ho,
      scaleDivergingSqrt: () => zo,
      scaleDivergingSymlog: () => no,
      scaleIdentity: () => EI,
      scaleImplicit: () => cZ.e,
      scaleLinear: () => xI,
      scaleLog: () => JZ,
      scaleOrdinal: () => cZ.b,
      scalePoint: () => JB.h,
      scalePow: () => NZ,
      scaleQuantile: () => YZ,
      scaleQuantize: () => iZ,
      scaleRadial: () => yZ,
      scaleSequential: () => Io,
      scaleSequentialLog: () => Zo,
      scaleSequentialPow: () => Jo,
      scaleSequentialQuantile: () => Go,
      scaleSequentialSqrt: () => oo,
      scaleSequentialSymlog: () => To,
      scaleSqrt: () => gZ,
      scaleSymlog: () => kZ,
      scaleThreshold: () => pZ,
      scaleTime: () => KJ,
      scaleUtc: () => VJ,
      tickFormat: () => tI
    });
    var JB = ZB(6292);
    const oB = Math.sqrt(50),
      GB = Math.sqrt(10),
      vB = Math.sqrt(2);

    function kB(BB, IB, ZB) {
      const TB = (IB - BB) / Math.max(0, ZB),
        JB = Math.floor(Math.log10(TB)),
        cB = TB / Math.pow(10, JB),
        nB = cB >= oB ? 10 : cB >= GB ? 5 : cB >= vB ? 2 : 1;
      let hB, zB, FB;
      return JB < 0 ? (FB = Math.pow(10, -JB) / nB, hB = Math.round(BB * FB), zB = Math.round(IB * FB), hB / FB < BB && ++hB, zB / FB > IB && --zB, FB = -FB) : (FB = Math.pow(10, JB) * nB, hB = Math.round(BB / FB), zB = Math.round(IB / FB), hB * FB < BB && ++hB, zB * FB > IB && --zB), zB < hB && .5 <= ZB && ZB < 2 ? kB(BB, IB, 2 * ZB) : [hB, zB, FB]
    }

    function cB(BB, IB, ZB) {
      if (!((ZB = +ZB) > 0)) return [];
      if ((BB = +BB) === (IB = +IB)) return [BB];
      const TB = IB < BB,
        [JB, oB, GB] = TB ? kB(IB, BB, ZB) : kB(BB, IB, ZB);
      if (!(oB >= JB)) return [];
      const vB = oB - JB + 1,
        cB = new Array(vB);
      if (TB)
        if (GB < 0)
          for (let kB = 0; kB < vB; ++kB) cB[kB] = (oB - kB) / -GB;
        else
          for (let kB = 0; kB < vB; ++kB) cB[kB] = (oB - kB) * GB;
      else if (GB < 0)
        for (let kB = 0; kB < vB; ++kB) cB[kB] = (JB + kB) / -GB;
      else
        for (let kB = 0; kB < vB; ++kB) cB[kB] = (JB + kB) * GB;
      return cB
    }

    function nB(BB, IB, ZB) {
      return kB(BB = +BB, IB = +IB, ZB = +ZB)[2]
    }

    function hB(BB, IB, ZB) {
      ZB = +ZB;
      const TB = (IB = +IB) < (BB = +BB),
        JB = TB ? nB(IB, BB, ZB) : nB(BB, IB, ZB);
      return (TB ? -1 : 1) * (JB < 0 ? 1 / -JB : JB)
    }

    function zB(BB, IB) {
      return null == BB || null == IB ? NaN : BB < IB ? -1 : BB > IB ? 1 : BB >= IB ? 0 : NaN
    }

    function FB(BB, IB) {
      return null == BB || null == IB ? NaN : IB < BB ? -1 : IB > BB ? 1 : IB >= BB ? 0 : NaN
    }

    function NB(BB) {
      let IB, ZB, TB;

      function JB(BB, TB) {
        let JB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          oB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
        if (JB < oB) {
          if (0 !== IB(TB, TB)) return oB;
          do {
            const IB = JB + oB >>> 1;
            ZB(BB[IB], TB) < 0 ? JB = IB + 1 : oB = IB
          } while (JB < oB)
        }
        return JB
      }
      return 2 !== BB.length ? (IB = zB, ZB = (IB, ZB) => zB(BB(IB), ZB), TB = (IB, ZB) => BB(IB) - ZB) : (IB = BB === zB || BB === FB ? BB : gB, ZB = BB, TB = BB), {
        left: JB,
        center: function(BB, IB) {
          let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const oB = JB(BB, IB, ZB, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length) - 1);
          return oB > ZB && TB(BB[oB - 1], IB) > -TB(BB[oB], IB) ? oB - 1 : oB
        },
        right: function(BB, TB) {
          let JB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            oB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          if (JB < oB) {
            if (0 !== IB(TB, TB)) return oB;
            do {
              const IB = JB + oB >>> 1;
              ZB(BB[IB], TB) <= 0 ? JB = IB + 1 : oB = IB
            } while (JB < oB)
          }
          return JB
        }
      }
    }

    function gB() {
      return 0
    }

    function qB(BB) {
      return null === BB ? NaN : +BB
    }
    const yB = NB(zB),
      UB = yB.right,
      WB = (yB.left, NB(qB).center, UB);

    function dB(BB, IB, ZB) {
      BB.prototype = IB.prototype = ZB, ZB.constructor = BB
    }

    function CB(BB, IB) {
      var ZB = Object.create(BB.prototype);
      for (var TB in IB) ZB[TB] = IB[TB];
      return ZB
    }

    function QB() {}
    var sB = .7,
      wB = 1 / sB,
      OB = "\\s*([+-]?\\d+)\\s*",
      YB = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      iB = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      pB = /^#([0-9a-f]{3,8})$/,
      aB = new RegExp(`^rgb\\(${OB},${OB},${OB}\\)$`),
      HB = new RegExp(`^rgb\\(${iB},${iB},${iB}\\)$`),
      MB = new RegExp(`^rgba\\(${OB},${OB},${OB},${YB}\\)$`),
      jB = new RegExp(`^rgba\\(${iB},${iB},${iB},${YB}\\)$`),
      PB = new RegExp(`^hsl\\(${YB},${iB},${iB}\\)$`),
      RB = new RegExp(`^hsla\\(${YB},${iB},${iB},${YB}\\)$`),
      rB = {
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

    function mB() {
      return this.rgb().formatHex()
    }

    function XB() {
      return this.rgb().formatRgb()
    }

    function LB(BB) {
      var IB, ZB;
      return BB = (BB + "").trim().toLowerCase(), (IB = pB.exec(BB)) ? (ZB = IB[1].length, IB = parseInt(IB[1], 16), 6 === ZB ? eB(IB) : 3 === ZB ? new lB(IB >> 8 & 15 | IB >> 4 & 240, IB >> 4 & 15 | 240 & IB, (15 & IB) << 4 | 15 & IB, 1) : 8 === ZB ? uB(IB >> 24 & 255, IB >> 16 & 255, IB >> 8 & 255, (255 & IB) / 255) : 4 === ZB ? uB(IB >> 12 & 15 | IB >> 8 & 240, IB >> 8 & 15 | IB >> 4 & 240, IB >> 4 & 15 | 240 & IB, ((15 & IB) << 4 | 15 & IB) / 255) : null) : (IB = aB.exec(BB)) ? new lB(IB[1], IB[2], IB[3], 1) : (IB = HB.exec(BB)) ? new lB(255 * IB[1] / 100, 255 * IB[2] / 100, 255 * IB[3] / 100, 1) : (IB = MB.exec(BB)) ? uB(IB[1], IB[2], IB[3], IB[4]) : (IB = jB.exec(BB)) ? uB(255 * IB[1] / 100, 255 * IB[2] / 100, 255 * IB[3] / 100, IB[4]) : (IB = PB.exec(BB)) ? DB(IB[1], IB[2] / 100, IB[3] / 100, 1) : (IB = RB.exec(BB)) ? DB(IB[1], IB[2] / 100, IB[3] / 100, IB[4]) : rB.hasOwnProperty(BB) ? eB(rB[BB]) : "transparent" === BB ? new lB(NaN, NaN, NaN, 0) : null
    }

    function eB(BB) {
      return new lB(BB >> 16 & 255, BB >> 8 & 255, 255 & BB, 1)
    }

    function uB(BB, IB, ZB, TB) {
      return TB <= 0 && (BB = IB = ZB = NaN), new lB(BB, IB, ZB, TB)
    }

    function fB(BB, IB, ZB, TB) {
      return 1 === arguments.length ? ((JB = BB) instanceof QB || (JB = LB(JB)), JB ? new lB((JB = JB.rgb()).r, JB.g, JB.b, JB.opacity) : new lB) : new lB(BB, IB, ZB, null == TB ? 1 : TB);
      var JB
    }

    function lB(BB, IB, ZB, TB) {
      this.r = +BB, this.g = +IB, this.b = +ZB, this.opacity = +TB
    }

    function AB() {
      return `#${EB(this.r)}${EB(this.g)}${EB(this.b)}`
    }

    function tB() {
      const BB = bB(this.opacity);
      return `${1===BB?"rgb(":"rgba("}${xB(this.r)}, ${xB(this.g)}, ${xB(this.b)}${1===BB?")":`, ${BB})`}`
    }

    function bB(BB) {
      return isNaN(BB) ? 1 : Math.max(0, Math.min(1, BB))
    }

    function xB(BB) {
      return Math.max(0, Math.min(255, Math.round(BB) || 0))
    }

    function EB(BB) {
      return ((BB = xB(BB)) < 16 ? "0" : "") + BB.toString(16)
    }

    function DB(BB, IB, ZB, TB) {
      return TB <= 0 ? BB = IB = ZB = NaN : ZB <= 0 || ZB >= 1 ? BB = IB = NaN : IB <= 0 && (BB = NaN), new VB(BB, IB, ZB, TB)
    }

    function KB(BB) {
      if (BB instanceof VB) return new VB(BB.h, BB.s, BB.l, BB.opacity);
      if (BB instanceof QB || (BB = LB(BB)), !BB) return new VB;
      if (BB instanceof VB) return BB;
      var IB = (BB = BB.rgb()).r / 255,
        ZB = BB.g / 255,
        TB = BB.b / 255,
        JB = Math.min(IB, ZB, TB),
        oB = Math.max(IB, ZB, TB),
        GB = NaN,
        vB = oB - JB,
        kB = (oB + JB) / 2;
      return vB ? (GB = IB === oB ? (ZB - TB) / vB + 6 * (ZB < TB) : ZB === oB ? (TB - IB) / vB + 2 : (IB - ZB) / vB + 4, vB /= kB < .5 ? oB + JB : 2 - oB - JB, GB *= 60) : vB = kB > 0 && kB < 1 ? 0 : GB, new VB(GB, vB, kB, BB.opacity)
    }

    function VB(BB, IB, ZB, TB) {
      this.h = +BB, this.s = +IB, this.l = +ZB, this.opacity = +TB
    }

    function SB(BB) {
      return (BB = (BB || 0) % 360) < 0 ? BB + 360 : BB
    }

    function BI(BB) {
      return Math.max(0, Math.min(1, BB || 0))
    }

    function II(BB, IB, ZB) {
      return 255 * (BB < 60 ? IB + (ZB - IB) * BB / 60 : BB < 180 ? ZB : BB < 240 ? IB + (ZB - IB) * (240 - BB) / 60 : IB)
    }

    function ZI(BB, IB, ZB, TB, JB) {
      var oB = BB * BB,
        GB = oB * BB;
      return ((1 - 3 * BB + 3 * oB - GB) * IB + (4 - 6 * oB + 3 * GB) * ZB + (1 + 3 * BB + 3 * oB - 3 * GB) * TB + GB * JB) / 6
    }
    dB(QB, LB, {
      copy(BB) {
        return Object.assign(new this.constructor, this, BB)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: mB,
      formatHex: mB,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return KB(this).formatHsl()
      },
      formatRgb: XB,
      toString: XB
    }), dB(lB, fB, CB(QB, {
      brighter(BB) {
        return BB = null == BB ? wB : Math.pow(wB, BB), new lB(this.r * BB, this.g * BB, this.b * BB, this.opacity)
      },
      darker(BB) {
        return BB = null == BB ? sB : Math.pow(sB, BB), new lB(this.r * BB, this.g * BB, this.b * BB, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new lB(xB(this.r), xB(this.g), xB(this.b), bB(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: AB,
      formatHex: AB,
      formatHex8: function() {
        return `#${EB(this.r)}${EB(this.g)}${EB(this.b)}${EB(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: tB,
      toString: tB
    })), dB(VB, (function(BB, IB, ZB, TB) {
      return 1 === arguments.length ? KB(BB) : new VB(BB, IB, ZB, null == TB ? 1 : TB)
    }), CB(QB, {
      brighter(BB) {
        return BB = null == BB ? wB : Math.pow(wB, BB), new VB(this.h, this.s, this.l * BB, this.opacity)
      },
      darker(BB) {
        return BB = null == BB ? sB : Math.pow(sB, BB), new VB(this.h, this.s, this.l * BB, this.opacity)
      },
      rgb() {
        var BB = this.h % 360 + 360 * (this.h < 0),
          IB = isNaN(BB) || isNaN(this.s) ? 0 : this.s,
          ZB = this.l,
          TB = ZB + (ZB < .5 ? ZB : 1 - ZB) * IB,
          JB = 2 * ZB - TB;
        return new lB(II(BB >= 240 ? BB - 240 : BB + 120, JB, TB), II(BB, JB, TB), II(BB < 120 ? BB + 240 : BB - 120, JB, TB), this.opacity)
      },
      clamp() {
        return new VB(SB(this.h), BI(this.s), BI(this.l), bB(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const BB = bB(this.opacity);
        return `${1===BB?"hsl(":"hsla("}${SB(this.h)}, ${100*BI(this.s)}%, ${100*BI(this.l)}%${1===BB?")":`, ${BB})`}`
      }
    }));
    const TI = BB => () => BB;

    function JI(BB, IB) {
      return function(ZB) {
        return BB + ZB * IB
      }
    }

    function oI(BB) {
      return 1 === (BB = +BB) ? GI : function(IB, ZB) {
        return ZB - IB ? function(BB, IB, ZB) {
          return BB = Math.pow(BB, ZB), IB = Math.pow(IB, ZB) - BB, ZB = 1 / ZB,
            function(TB) {
              return Math.pow(BB + TB * IB, ZB)
            }
        }(IB, ZB, BB) : TI(isNaN(IB) ? ZB : IB)
      }
    }

    function GI(BB, IB) {
      var ZB = IB - BB;
      return ZB ? JI(BB, ZB) : TI(isNaN(BB) ? IB : BB)
    }
    const vI = function BB(IB) {
      var ZB = oI(IB);

      function TB(BB, IB) {
        var TB = ZB((BB = fB(BB)).r, (IB = fB(IB)).r),
          JB = ZB(BB.g, IB.g),
          oB = ZB(BB.b, IB.b),
          GB = GI(BB.opacity, IB.opacity);
        return function(IB) {
          return BB.r = TB(IB), BB.g = JB(IB), BB.b = oB(IB), BB.opacity = GB(IB), BB + ""
        }
      }
      return TB.gamma = BB, TB
    }(1);

    function kI(BB) {
      return function(IB) {
        var ZB, TB, JB = IB.length,
          oB = new Array(JB),
          GB = new Array(JB),
          vB = new Array(JB);
        for (ZB = 0; ZB < JB; ++ZB) TB = fB(IB[ZB]), oB[ZB] = TB.r || 0, GB[ZB] = TB.g || 0, vB[ZB] = TB.b || 0;
        return oB = BB(oB), GB = BB(GB), vB = BB(vB), TB.opacity = 1,
          function(BB) {
            return TB.r = oB(BB), TB.g = GB(BB), TB.b = vB(BB), TB + ""
          }
      }
    }
    kI((function(BB) {
      var IB = BB.length - 1;
      return function(ZB) {
        var TB = ZB <= 0 ? ZB = 0 : ZB >= 1 ? (ZB = 1, IB - 1) : Math.floor(ZB * IB),
          JB = BB[TB],
          oB = BB[TB + 1],
          GB = TB > 0 ? BB[TB - 1] : 2 * JB - oB,
          vB = TB < IB - 1 ? BB[TB + 2] : 2 * oB - JB;
        return ZI((ZB - TB / IB) * IB, GB, JB, oB, vB)
      }
    })), kI((function(BB) {
      var IB = BB.length;
      return function(ZB) {
        var TB = Math.floor(((ZB %= 1) < 0 ? ++ZB : ZB) * IB),
          JB = BB[(TB + IB - 1) % IB],
          oB = BB[TB % IB],
          GB = BB[(TB + 1) % IB],
          vB = BB[(TB + 2) % IB];
        return ZI((ZB - TB / IB) * IB, JB, oB, GB, vB)
      }
    }));

    function cI(BB, IB) {
      var ZB, TB = IB ? IB.length : 0,
        JB = BB ? Math.min(TB, BB.length) : 0,
        oB = new Array(JB),
        GB = new Array(TB);
      for (ZB = 0; ZB < JB; ++ZB) oB[ZB] = yI(BB[ZB], IB[ZB]);
      for (; ZB < TB; ++ZB) GB[ZB] = IB[ZB];
      return function(BB) {
        for (ZB = 0; ZB < JB; ++ZB) GB[ZB] = oB[ZB](BB);
        return GB
      }
    }

    function nI(BB, IB) {
      var ZB = new Date;
      return BB = +BB, IB = +IB,
        function(TB) {
          return ZB.setTime(BB * (1 - TB) + IB * TB), ZB
        }
    }

    function hI(BB, IB) {
      return BB = +BB, IB = +IB,
        function(ZB) {
          return BB * (1 - ZB) + IB * ZB
        }
    }

    function zI(BB, IB) {
      var ZB, TB = {},
        JB = {};
      for (ZB in null !== BB && "object" === typeof BB || (BB = {}), null !== IB && "object" === typeof IB || (IB = {}), IB) ZB in BB ? TB[ZB] = yI(BB[ZB], IB[ZB]) : JB[ZB] = IB[ZB];
      return function(BB) {
        for (ZB in TB) JB[ZB] = TB[ZB](BB);
        return JB
      }
    }
    var FI = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      NI = new RegExp(FI.source, "g");

    function gI(BB, IB) {
      var ZB, TB, JB, oB = FI.lastIndex = NI.lastIndex = 0,
        GB = -1,
        vB = [],
        kB = [];
      for (BB += "", IB += "";
        (ZB = FI.exec(BB)) && (TB = NI.exec(IB));)(JB = TB.index) > oB && (JB = IB.slice(oB, JB), vB[GB] ? vB[GB] += JB : vB[++GB] = JB), (ZB = ZB[0]) === (TB = TB[0]) ? vB[GB] ? vB[GB] += TB : vB[++GB] = TB : (vB[++GB] = null, kB.push({
        i: GB,
        x: hI(ZB, TB)
      })), oB = NI.lastIndex;
      return oB < IB.length && (JB = IB.slice(oB), vB[GB] ? vB[GB] += JB : vB[++GB] = JB), vB.length < 2 ? kB[0] ? function(BB) {
        return function(IB) {
          return BB(IB) + ""
        }
      }(kB[0].x) : function(BB) {
        return function() {
          return BB
        }
      }(IB) : (IB = kB.length, function(BB) {
        for (var ZB, TB = 0; TB < IB; ++TB) vB[(ZB = kB[TB]).i] = ZB.x(BB);
        return vB.join("")
      })
    }

    function qI(BB, IB) {
      IB || (IB = []);
      var ZB, TB = BB ? Math.min(IB.length, BB.length) : 0,
        JB = IB.slice();
      return function(oB) {
        for (ZB = 0; ZB < TB; ++ZB) JB[ZB] = BB[ZB] * (1 - oB) + IB[ZB] * oB;
        return JB
      }
    }

    function yI(BB, IB) {
      var ZB, TB, JB = typeof IB;
      return null == IB || "boolean" === JB ? TI(IB) : ("number" === JB ? hI : "string" === JB ? (ZB = LB(IB)) ? (IB = ZB, vI) : gI : IB instanceof LB ? vI : IB instanceof Date ? nI : (TB = IB, !ArrayBuffer.isView(TB) || TB instanceof DataView ? Array.isArray(IB) ? cI : "function" !== typeof IB.valueOf && "function" !== typeof IB.toString || isNaN(IB) ? zI : hI : qI))(BB, IB)
    }

    function UI(BB, IB) {
      return BB = +BB, IB = +IB,
        function(ZB) {
          return Math.round(BB * (1 - ZB) + IB * ZB)
        }
    }

    function WI(BB) {
      return +BB
    }
    var dI = [0, 1];

    function CI(BB) {
      return BB
    }

    function QI(BB, IB) {
      return (IB -= BB = +BB) ? function(ZB) {
        return (ZB - BB) / IB
      } : (ZB = isNaN(IB) ? NaN : .5, function() {
        return ZB
      });
      var ZB
    }

    function sI(BB, IB, ZB) {
      var TB = BB[0],
        JB = BB[1],
        oB = IB[0],
        GB = IB[1];
      return JB < TB ? (TB = QI(JB, TB), oB = ZB(GB, oB)) : (TB = QI(TB, JB), oB = ZB(oB, GB)),
        function(BB) {
          return oB(TB(BB))
        }
    }

    function wI(BB, IB, ZB) {
      var TB = Math.min(BB.length, IB.length) - 1,
        JB = new Array(TB),
        oB = new Array(TB),
        GB = -1;
      for (BB[TB] < BB[0] && (BB = BB.slice().reverse(), IB = IB.slice().reverse()); ++GB < TB;) JB[GB] = QI(BB[GB], BB[GB + 1]), oB[GB] = ZB(IB[GB], IB[GB + 1]);
      return function(IB) {
        var ZB = WB(BB, IB, 1, TB) - 1;
        return oB[ZB](JB[ZB](IB))
      }
    }

    function OI(BB, IB) {
      return IB.domain(BB.domain()).range(BB.range()).interpolate(BB.interpolate()).clamp(BB.clamp()).unknown(BB.unknown())
    }

    function YI() {
      var BB, IB, ZB, TB, JB, oB, GB = dI,
        vB = dI,
        kB = yI,
        cB = CI;

      function nB() {
        var BB = Math.min(GB.length, vB.length);
        return cB !== CI && (cB = function(BB, IB) {
          var ZB;
          return BB > IB && (ZB = BB, BB = IB, IB = ZB),
            function(ZB) {
              return Math.max(BB, Math.min(IB, ZB))
            }
        }(GB[0], GB[BB - 1])), TB = BB > 2 ? wI : sI, JB = oB = null, hB
      }

      function hB(IB) {
        return null == IB || isNaN(IB = +IB) ? ZB : (JB || (JB = TB(GB.map(BB), vB, kB)))(BB(cB(IB)))
      }
      return hB.invert = function(ZB) {
          return cB(IB((oB || (oB = TB(vB, GB.map(BB), hI)))(ZB)))
        }, hB.domain = function(BB) {
          return arguments.length ? (GB = Array.from(BB, WI), nB()) : GB.slice()
        }, hB.range = function(BB) {
          return arguments.length ? (vB = Array.from(BB), nB()) : vB.slice()
        }, hB.rangeRound = function(BB) {
          return vB = Array.from(BB), kB = UI, nB()
        }, hB.clamp = function(BB) {
          return arguments.length ? (cB = !!BB || CI, nB()) : cB !== CI
        }, hB.interpolate = function(BB) {
          return arguments.length ? (kB = BB, nB()) : kB
        }, hB.unknown = function(BB) {
          return arguments.length ? (ZB = BB, hB) : ZB
        },
        function(ZB, TB) {
          return BB = ZB, IB = TB, nB()
        }
    }

    function iI() {
      return YI()(CI, CI)
    }
    var pI, aI = ZB(6296),
      HI = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function MI(BB) {
      if (!(IB = HI.exec(BB))) throw new Error("invalid format: " + BB);
      var IB;
      return new jI({
        fill: IB[1],
        align: IB[2],
        sign: IB[3],
        symbol: IB[4],
        zero: IB[5],
        width: IB[6],
        comma: IB[7],
        precision: IB[8] && IB[8].slice(1),
        trim: IB[9],
        type: IB[10]
      })
    }

    function jI(BB) {
      this.fill = void 0 === BB.fill ? " " : BB.fill + "", this.align = void 0 === BB.align ? ">" : BB.align + "", this.sign = void 0 === BB.sign ? "-" : BB.sign + "", this.symbol = void 0 === BB.symbol ? "" : BB.symbol + "", this.zero = !!BB.zero, this.width = void 0 === BB.width ? void 0 : +BB.width, this.comma = !!BB.comma, this.precision = void 0 === BB.precision ? void 0 : +BB.precision, this.trim = !!BB.trim, this.type = void 0 === BB.type ? "" : BB.type + ""
    }

    function PI(BB, IB) {
      if (!isFinite(BB) || 0 === BB) return null;
      var ZB = (BB = IB ? BB.toExponential(IB - 1) : BB.toExponential()).indexOf("e"),
        TB = BB.slice(0, ZB);
      return [TB.length > 1 ? TB[0] + TB.slice(2) : TB, +BB.slice(ZB + 1)]
    }

    function RI(BB) {
      return (BB = PI(Math.abs(BB))) ? BB[1] : NaN
    }

    function rI(BB, IB) {
      var ZB = PI(BB, IB);
      if (!ZB) return BB + "";
      var TB = ZB[0],
        JB = ZB[1];
      return JB < 0 ? "0." + new Array(-JB).join("0") + TB : TB.length > JB + 1 ? TB.slice(0, JB + 1) + "." + TB.slice(JB + 1) : TB + new Array(JB - TB.length + 2).join("0")
    }
    MI.prototype = jI.prototype, jI.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const mI = {
      "%": (BB, IB) => (100 * BB).toFixed(IB),
      b: BB => Math.round(BB).toString(2),
      c: BB => BB + "",
      d: function(BB) {
        return Math.abs(BB = Math.round(BB)) >= 1e21 ? BB.toLocaleString("en").replace(/,/g, "") : BB.toString(10)
      },
      e: (BB, IB) => BB.toExponential(IB),
      f: (BB, IB) => BB.toFixed(IB),
      g: (BB, IB) => BB.toPrecision(IB),
      o: BB => Math.round(BB).toString(8),
      p: (BB, IB) => rI(100 * BB, IB),
      r: rI,
      s: function(BB, IB) {
        var ZB = PI(BB, IB);
        if (!ZB) return pI = void 0, BB.toPrecision(IB);
        var TB = ZB[0],
          JB = ZB[1],
          oB = JB - (pI = 3 * Math.max(-8, Math.min(8, Math.floor(JB / 3)))) + 1,
          GB = TB.length;
        return oB === GB ? TB : oB > GB ? TB + new Array(oB - GB + 1).join("0") : oB > 0 ? TB.slice(0, oB) + "." + TB.slice(oB) : "0." + new Array(1 - oB).join("0") + PI(BB, Math.max(0, IB + oB - 1))[0]
      },
      X: BB => Math.round(BB).toString(16).toUpperCase(),
      x: BB => Math.round(BB).toString(16)
    };

    function XI(BB) {
      return BB
    }
    var LI, eI, uI, fI = Array.prototype.map,
      lI = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function AI(BB) {
      var IB, ZB, TB = void 0 === BB.grouping || void 0 === BB.thousands ? XI : (IB = fI.call(BB.grouping, Number), ZB = BB.thousands + "", function(BB, TB) {
          for (var JB = BB.length, oB = [], GB = 0, vB = IB[0], kB = 0; JB > 0 && vB > 0 && (kB + vB + 1 > TB && (vB = Math.max(1, TB - kB)), oB.push(BB.substring(JB -= vB, JB + vB)), !((kB += vB + 1) > TB));) vB = IB[GB = (GB + 1) % IB.length];
          return oB.reverse().join(ZB)
        }),
        JB = void 0 === BB.currency ? "" : BB.currency[0] + "",
        oB = void 0 === BB.currency ? "" : BB.currency[1] + "",
        GB = void 0 === BB.decimal ? "." : BB.decimal + "",
        vB = void 0 === BB.numerals ? XI : function(BB) {
          return function(IB) {
            return IB.replace(/[0-9]/g, (function(IB) {
              return BB[+IB]
            }))
          }
        }(fI.call(BB.numerals, String)),
        kB = void 0 === BB.percent ? "%" : BB.percent + "",
        cB = void 0 === BB.minus ? "\u2212" : BB.minus + "",
        nB = void 0 === BB.nan ? "NaN" : BB.nan + "";

      function hB(BB, IB) {
        var ZB = (BB = MI(BB)).fill,
          hB = BB.align,
          zB = BB.sign,
          FB = BB.symbol,
          NB = BB.zero,
          gB = BB.width,
          qB = BB.comma,
          yB = BB.precision,
          UB = BB.trim,
          WB = BB.type;
        "n" === WB ? (qB = !0, WB = "g") : mI[WB] || (void 0 === yB && (yB = 12), UB = !0, WB = "g"), (NB || "0" === ZB && "=" === hB) && (NB = !0, ZB = "0", hB = "=");
        var dB = (IB && void 0 !== IB.prefix ? IB.prefix : "") + ("$" === FB ? JB : "#" === FB && /[boxX]/.test(WB) ? "0" + WB.toLowerCase() : ""),
          CB = ("$" === FB ? oB : /[%p]/.test(WB) ? kB : "") + (IB && void 0 !== IB.suffix ? IB.suffix : ""),
          QB = mI[WB],
          sB = /[defgprs%]/.test(WB);

        function wB(BB) {
          var IB, JB, oB, kB = dB,
            FB = CB;
          if ("c" === WB) FB = QB(BB) + FB, BB = "";
          else {
            var wB = (BB = +BB) < 0 || 1 / BB < 0;
            if (BB = isNaN(BB) ? nB : QB(Math.abs(BB), yB), UB && (BB = function(BB) {
                BB: for (var IB, ZB = BB.length, TB = 1, JB = -1; TB < ZB; ++TB) switch (BB[TB]) {
                  case ".":
                    JB = IB = TB;
                    break;
                  case "0":
                    0 === JB && (JB = TB), IB = TB;
                    break;
                  default:
                    if (!+BB[TB]) break BB;
                    JB > 0 && (JB = 0)
                }
                return JB > 0 ? BB.slice(0, JB) + BB.slice(IB + 1) : BB
              }(BB)), wB && 0 === +BB && "+" !== zB && (wB = !1), kB = (wB ? "(" === zB ? zB : cB : "-" === zB || "(" === zB ? "" : zB) + kB, FB = ("s" !== WB || isNaN(BB) || void 0 === pI ? "" : lI[8 + pI / 3]) + FB + (wB && "(" === zB ? ")" : ""), sB)
              for (IB = -1, JB = BB.length; ++IB < JB;)
                if (48 > (oB = BB.charCodeAt(IB)) || oB > 57) {
                  FB = (46 === oB ? GB + BB.slice(IB + 1) : BB.slice(IB)) + FB, BB = BB.slice(0, IB);
                  break
                }
          }
          qB && !NB && (BB = TB(BB, 1 / 0));
          var OB = kB.length + BB.length + FB.length,
            YB = OB < gB ? new Array(gB - OB + 1).join(ZB) : "";
          switch (qB && NB && (BB = TB(YB + BB, YB.length ? gB - FB.length : 1 / 0), YB = ""), hB) {
            case "<":
              BB = kB + BB + FB + YB;
              break;
            case "=":
              BB = kB + YB + BB + FB;
              break;
            case "^":
              BB = YB.slice(0, OB = YB.length >> 1) + kB + BB + FB + YB.slice(OB);
              break;
            default:
              BB = YB + kB + BB + FB
          }
          return vB(BB)
        }
        return yB = void 0 === yB ? 6 : /[gprs]/.test(WB) ? Math.max(1, Math.min(21, yB)) : Math.max(0, Math.min(20, yB)), wB.toString = function() {
          return BB + ""
        }, wB
      }
      return {
        format: hB,
        formatPrefix: function(BB, IB) {
          var ZB = 3 * Math.max(-8, Math.min(8, Math.floor(RI(IB) / 3))),
            TB = Math.pow(10, -ZB),
            JB = hB(((BB = MI(BB)).type = "f", BB), {
              suffix: lI[8 + ZB / 3]
            });
          return function(BB) {
            return JB(TB * BB)
          }
        }
      }
    }

    function tI(BB, IB, ZB, TB) {
      var JB, oB = hB(BB, IB, ZB);
      switch ((TB = MI(null == TB ? ",f" : TB)).type) {
        case "s":
          var GB = Math.max(Math.abs(BB), Math.abs(IB));
          return null != TB.precision || isNaN(JB = function(BB, IB) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(RI(IB) / 3))) - RI(Math.abs(BB)))
          }(oB, GB)) || (TB.precision = JB), uI(TB, GB);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != TB.precision || isNaN(JB = function(BB, IB) {
            return BB = Math.abs(BB), IB = Math.abs(IB) - BB, Math.max(0, RI(IB) - RI(BB)) + 1
          }(oB, Math.max(Math.abs(BB), Math.abs(IB)))) || (TB.precision = JB - ("e" === TB.type));
          break;
        case "f":
        case "%":
          null != TB.precision || isNaN(JB = function(BB) {
            return Math.max(0, -RI(Math.abs(BB)))
          }(oB)) || (TB.precision = JB - 2 * ("%" === TB.type))
      }
      return eI(TB)
    }

    function bI(BB) {
      var IB = BB.domain;
      return BB.ticks = function(BB) {
        var ZB = IB();
        return cB(ZB[0], ZB[ZB.length - 1], null == BB ? 10 : BB)
      }, BB.tickFormat = function(BB, ZB) {
        var TB = IB();
        return tI(TB[0], TB[TB.length - 1], null == BB ? 10 : BB, ZB)
      }, BB.nice = function(ZB) {
        null == ZB && (ZB = 10);
        var TB, JB, oB = IB(),
          GB = 0,
          vB = oB.length - 1,
          kB = oB[GB],
          cB = oB[vB],
          hB = 10;
        for (cB < kB && (JB = kB, kB = cB, cB = JB, JB = GB, GB = vB, vB = JB); hB-- > 0;) {
          if ((JB = nB(kB, cB, ZB)) === TB) return oB[GB] = kB, oB[vB] = cB, IB(oB);
          if (JB > 0) kB = Math.floor(kB / JB) * JB, cB = Math.ceil(cB / JB) * JB;
          else {
            if (!(JB < 0)) break;
            kB = Math.ceil(kB * JB) / JB, cB = Math.floor(cB * JB) / JB
          }
          TB = JB
        }
        return BB
      }, BB
    }

    function xI() {
      var BB = iI();
      return BB.copy = function() {
        return OI(BB, xI())
      }, aI.e.apply(BB, arguments), bI(BB)
    }

    function EI(BB) {
      var IB;

      function ZB(BB) {
        return null == BB || isNaN(BB = +BB) ? IB : BB
      }
      return ZB.invert = ZB, ZB.domain = ZB.range = function(IB) {
        return arguments.length ? (BB = Array.from(IB, WI), ZB) : BB.slice()
      }, ZB.unknown = function(BB) {
        return arguments.length ? (IB = BB, ZB) : IB
      }, ZB.copy = function() {
        return EI(BB).unknown(IB)
      }, BB = arguments.length ? Array.from(BB, WI) : [0, 1], bI(ZB)
    }

    function DI(BB, IB) {
      var ZB, TB = 0,
        JB = (BB = BB.slice()).length - 1,
        oB = BB[TB],
        GB = BB[JB];
      return GB < oB && (ZB = TB, TB = JB, JB = ZB, ZB = oB, oB = GB, GB = ZB), BB[TB] = IB.floor(oB), BB[JB] = IB.ceil(GB), BB
    }

    function KI(BB) {
      return Math.log(BB)
    }

    function VI(BB) {
      return Math.exp(BB)
    }

    function SI(BB) {
      return -Math.log(-BB)
    }

    function BZ(BB) {
      return -Math.exp(-BB)
    }

    function IZ(BB) {
      return isFinite(BB) ? +("1e" + BB) : BB < 0 ? 0 : BB
    }

    function ZZ(BB) {
      return (IB, ZB) => -BB(-IB, ZB)
    }

    function TZ(BB) {
      const IB = BB(KI, VI),
        ZB = IB.domain;
      let TB, JB, oB = 10;

      function GB() {
        return TB = function(BB) {
          return BB === Math.E ? Math.log : 10 === BB && Math.log10 || 2 === BB && Math.log2 || (BB = Math.log(BB), IB => Math.log(IB) / BB)
        }(oB), JB = function(BB) {
          return 10 === BB ? IZ : BB === Math.E ? Math.exp : IB => Math.pow(BB, IB)
        }(oB), ZB()[0] < 0 ? (TB = ZZ(TB), JB = ZZ(JB), BB(SI, BZ)) : BB(KI, VI), IB
      }
      return IB.base = function(BB) {
        return arguments.length ? (oB = +BB, GB()) : oB
      }, IB.domain = function(BB) {
        return arguments.length ? (ZB(BB), GB()) : ZB()
      }, IB.ticks = BB => {
        const IB = ZB();
        let GB = IB[0],
          vB = IB[IB.length - 1];
        const kB = vB < GB;
        kB && ([GB, vB] = [vB, GB]);
        let nB, hB, zB = TB(GB),
          FB = TB(vB);
        const NB = null == BB ? 10 : +BB;
        let gB = [];
        if (!(oB % 1) && FB - zB < NB) {
          if (zB = Math.floor(zB), FB = Math.ceil(FB), GB > 0) {
            for (; zB <= FB; ++zB)
              for (nB = 1; nB < oB; ++nB)
                if (hB = zB < 0 ? nB / JB(-zB) : nB * JB(zB), !(hB < GB)) {
                  if (hB > vB) break;
                  gB.push(hB)
                }
          } else
            for (; zB <= FB; ++zB)
              for (nB = oB - 1; nB >= 1; --nB)
                if (hB = zB > 0 ? nB / JB(-zB) : nB * JB(zB), !(hB < GB)) {
                  if (hB > vB) break;
                  gB.push(hB)
                } 2 * gB.length < NB && (gB = cB(GB, vB, NB))
        } else gB = cB(zB, FB, Math.min(FB - zB, NB)).map(JB);
        return kB ? gB.reverse() : gB
      }, IB.tickFormat = (BB, ZB) => {
        if (null == BB && (BB = 10), null == ZB && (ZB = 10 === oB ? "s" : ","), "function" !== typeof ZB && (oB % 1 || null != (ZB = MI(ZB)).precision || (ZB.trim = !0), ZB = eI(ZB)), BB === 1 / 0) return ZB;
        const GB = Math.max(1, oB * BB / IB.ticks().length);
        return BB => {
          let IB = BB / JB(Math.round(TB(BB)));
          return IB * oB < oB - .5 && (IB *= oB), IB <= GB ? ZB(BB) : ""
        }
      }, IB.nice = () => ZB(DI(ZB(), {
        floor: BB => JB(Math.floor(TB(BB))),
        ceil: BB => JB(Math.ceil(TB(BB)))
      })), IB
    }

    function JZ() {
      const BB = TZ(YI()).domain([1, 10]);
      return BB.copy = () => OI(BB, JZ()).base(BB.base()), aI.e.apply(BB, arguments), BB
    }

    function oZ(BB) {
      return function(IB) {
        return Math.sign(IB) * Math.log1p(Math.abs(IB / BB))
      }
    }

    function GZ(BB) {
      return function(IB) {
        return Math.sign(IB) * Math.expm1(Math.abs(IB)) * BB
      }
    }

    function vZ(BB) {
      var IB = 1,
        ZB = BB(oZ(IB), GZ(IB));
      return ZB.constant = function(ZB) {
        return arguments.length ? BB(oZ(IB = +ZB), GZ(IB)) : IB
      }, bI(ZB)
    }

    function kZ() {
      var BB = vZ(YI());
      return BB.copy = function() {
        return OI(BB, kZ()).constant(BB.constant())
      }, aI.e.apply(BB, arguments)
    }
    LI = AI({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), eI = LI.format, uI = LI.formatPrefix;
    var cZ = ZB(6298);

    function nZ(BB) {
      return function(IB) {
        return IB < 0 ? -Math.pow(-IB, BB) : Math.pow(IB, BB)
      }
    }

    function hZ(BB) {
      return BB < 0 ? -Math.sqrt(-BB) : Math.sqrt(BB)
    }

    function zZ(BB) {
      return BB < 0 ? -BB * BB : BB * BB
    }

    function FZ(BB) {
      var IB = BB(CI, CI),
        ZB = 1;
      return IB.exponent = function(IB) {
        return arguments.length ? 1 === (ZB = +IB) ? BB(CI, CI) : .5 === ZB ? BB(hZ, zZ) : BB(nZ(ZB), nZ(1 / ZB)) : ZB
      }, bI(IB)
    }

    function NZ() {
      var BB = FZ(YI());
      return BB.copy = function() {
        return OI(BB, NZ()).exponent(BB.exponent())
      }, aI.e.apply(BB, arguments), BB
    }

    function gZ() {
      return NZ.apply(null, arguments).exponent(.5)
    }

    function qZ(BB) {
      return Math.sign(BB) * BB * BB
    }

    function yZ() {
      var BB, IB = iI(),
        ZB = [0, 1],
        TB = !1;

      function JB(ZB) {
        var JB = function(BB) {
          return Math.sign(BB) * Math.sqrt(Math.abs(BB))
        }(IB(ZB));
        return isNaN(JB) ? BB : TB ? Math.round(JB) : JB
      }
      return JB.invert = function(BB) {
        return IB.invert(qZ(BB))
      }, JB.domain = function(BB) {
        return arguments.length ? (IB.domain(BB), JB) : IB.domain()
      }, JB.range = function(BB) {
        return arguments.length ? (IB.range((ZB = Array.from(BB, WI)).map(qZ)), JB) : ZB.slice()
      }, JB.rangeRound = function(BB) {
        return JB.range(BB).round(!0)
      }, JB.round = function(BB) {
        return arguments.length ? (TB = !!BB, JB) : TB
      }, JB.clamp = function(BB) {
        return arguments.length ? (IB.clamp(BB), JB) : IB.clamp()
      }, JB.unknown = function(IB) {
        return arguments.length ? (BB = IB, JB) : BB
      }, JB.copy = function() {
        return yZ(IB.domain(), ZB).round(TB).clamp(IB.clamp()).unknown(BB)
      }, aI.e.apply(JB, arguments), bI(JB)
    }

    function UZ(BB, IB) {
      let ZB;
      if (void 0 === IB)
        for (const TB of BB) null != TB && (ZB < TB || void 0 === ZB && TB >= TB) && (ZB = TB);
      else {
        let TB = -1;
        for (let JB of BB) null != (JB = IB(JB, ++TB, BB)) && (ZB < JB || void 0 === ZB && JB >= JB) && (ZB = JB)
      }
      return ZB
    }

    function WZ(BB, IB) {
      let ZB;
      if (void 0 === IB)
        for (const TB of BB) null != TB && (ZB > TB || void 0 === ZB && TB >= TB) && (ZB = TB);
      else {
        let TB = -1;
        for (let JB of BB) null != (JB = IB(JB, ++TB, BB)) && (ZB > JB || void 0 === ZB && JB >= JB) && (ZB = JB)
      }
      return ZB
    }

    function dZ() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zB;
      if (BB === zB) return CZ;
      if ("function" !== typeof BB) throw new TypeError("compare is not a function");
      return (IB, ZB) => {
        const TB = BB(IB, ZB);
        return TB || 0 === TB ? TB : (0 === BB(ZB, ZB)) - (0 === BB(IB, IB))
      }
    }

    function CZ(BB, IB) {
      return (null == BB || !(BB >= BB)) - (null == IB || !(IB >= IB)) || (BB < IB ? -1 : BB > IB ? 1 : 0)
    }

    function QZ(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        JB = arguments.length > 4 ? arguments[4] : void 0;
      if (IB = Math.floor(IB), ZB = Math.floor(Math.max(0, ZB)), TB = Math.floor(Math.min(BB.length - 1, TB)), !(ZB <= IB && IB <= TB)) return BB;
      for (JB = void 0 === JB ? CZ : dZ(JB); TB > ZB;) {
        if (TB - ZB > 600) {
          const oB = TB - ZB + 1,
            GB = IB - ZB + 1,
            vB = Math.log(oB),
            kB = .5 * Math.exp(2 * vB / 3),
            cB = .5 * Math.sqrt(vB * kB * (oB - kB) / oB) * (GB - oB / 2 < 0 ? -1 : 1);
          QZ(BB, IB, Math.max(ZB, Math.floor(IB - GB * kB / oB + cB)), Math.min(TB, Math.floor(IB + (oB - GB) * kB / oB + cB)), JB)
        }
        const oB = BB[IB];
        let GB = ZB,
          vB = TB;
        for (sZ(BB, ZB, IB), JB(BB[TB], oB) > 0 && sZ(BB, ZB, TB); GB < vB;) {
          for (sZ(BB, GB, vB), ++GB, --vB; JB(BB[GB], oB) < 0;) ++GB;
          for (; JB(BB[vB], oB) > 0;) --vB
        }
        0 === JB(BB[ZB], oB) ? sZ(BB, ZB, vB) : (++vB, sZ(BB, vB, TB)), vB <= IB && (ZB = vB + 1), IB <= vB && (TB = vB - 1)
      }
      return BB
    }

    function sZ(BB, IB, ZB) {
      const TB = BB[IB];
      BB[IB] = BB[ZB], BB[ZB] = TB
    }

    function wZ(BB, IB, ZB) {
      if (BB = Float64Array.from(function*(BB, IB) {
          if (void 0 === IB)
            for (let ZB of BB) null != ZB && (ZB = +ZB) >= ZB && (yield ZB);
          else {
            let ZB = -1;
            for (let TB of BB) null != (TB = IB(TB, ++ZB, BB)) && (TB = +TB) >= TB && (yield TB)
          }
        }(BB, ZB)), (TB = BB.length) && !isNaN(IB = +IB)) {
        if (IB <= 0 || TB < 2) return WZ(BB);
        if (IB >= 1) return UZ(BB);
        var TB, JB = (TB - 1) * IB,
          oB = Math.floor(JB),
          GB = UZ(QZ(BB, oB).subarray(0, oB + 1));
        return GB + (WZ(BB.subarray(oB + 1)) - GB) * (JB - oB)
      }
    }

    function OZ(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qB;
      if ((TB = BB.length) && !isNaN(IB = +IB)) {
        if (IB <= 0 || TB < 2) return +ZB(BB[0], 0, BB);
        if (IB >= 1) return +ZB(BB[TB - 1], TB - 1, BB);
        var TB, JB = (TB - 1) * IB,
          oB = Math.floor(JB),
          GB = +ZB(BB[oB], oB, BB);
        return GB + (+ZB(BB[oB + 1], oB + 1, BB) - GB) * (JB - oB)
      }
    }

    function YZ() {
      var BB, IB = [],
        ZB = [],
        TB = [];

      function JB() {
        var BB = 0,
          JB = Math.max(1, ZB.length);
        for (TB = new Array(JB - 1); ++BB < JB;) TB[BB - 1] = OZ(IB, BB / JB);
        return oB
      }

      function oB(IB) {
        return null == IB || isNaN(IB = +IB) ? BB : ZB[WB(TB, IB)]
      }
      return oB.invertExtent = function(BB) {
        var JB = ZB.indexOf(BB);
        return JB < 0 ? [NaN, NaN] : [JB > 0 ? TB[JB - 1] : IB[0], JB < TB.length ? TB[JB] : IB[IB.length - 1]]
      }, oB.domain = function(BB) {
        if (!arguments.length) return IB.slice();
        IB = [];
        for (let ZB of BB) null == ZB || isNaN(ZB = +ZB) || IB.push(ZB);
        return IB.sort(zB), JB()
      }, oB.range = function(BB) {
        return arguments.length ? (ZB = Array.from(BB), JB()) : ZB.slice()
      }, oB.unknown = function(IB) {
        return arguments.length ? (BB = IB, oB) : BB
      }, oB.quantiles = function() {
        return TB.slice()
      }, oB.copy = function() {
        return YZ().domain(IB).range(ZB).unknown(BB)
      }, aI.e.apply(oB, arguments)
    }

    function iZ() {
      var BB, IB = 0,
        ZB = 1,
        TB = 1,
        JB = [.5],
        oB = [0, 1];

      function GB(IB) {
        return null != IB && IB <= IB ? oB[WB(JB, IB, 0, TB)] : BB
      }

      function vB() {
        var BB = -1;
        for (JB = new Array(TB); ++BB < TB;) JB[BB] = ((BB + 1) * ZB - (BB - TB) * IB) / (TB + 1);
        return GB
      }
      return GB.domain = function(BB) {
        return arguments.length ? ([IB, ZB] = BB, IB = +IB, ZB = +ZB, vB()) : [IB, ZB]
      }, GB.range = function(BB) {
        return arguments.length ? (TB = (oB = Array.from(BB)).length - 1, vB()) : oB.slice()
      }, GB.invertExtent = function(BB) {
        var GB = oB.indexOf(BB);
        return GB < 0 ? [NaN, NaN] : GB < 1 ? [IB, JB[0]] : GB >= TB ? [JB[TB - 1], ZB] : [JB[GB - 1], JB[GB]]
      }, GB.unknown = function(IB) {
        return arguments.length ? (BB = IB, GB) : GB
      }, GB.thresholds = function() {
        return JB.slice()
      }, GB.copy = function() {
        return iZ().domain([IB, ZB]).range(oB).unknown(BB)
      }, aI.e.apply(bI(GB), arguments)
    }

    function pZ() {
      var BB, IB = [.5],
        ZB = [0, 1],
        TB = 1;

      function JB(JB) {
        return null != JB && JB <= JB ? ZB[WB(IB, JB, 0, TB)] : BB
      }
      return JB.domain = function(BB) {
        return arguments.length ? (IB = Array.from(BB), TB = Math.min(IB.length, ZB.length - 1), JB) : IB.slice()
      }, JB.range = function(BB) {
        return arguments.length ? (ZB = Array.from(BB), TB = Math.min(IB.length, ZB.length - 1), JB) : ZB.slice()
      }, JB.invertExtent = function(BB) {
        var TB = ZB.indexOf(BB);
        return [IB[TB - 1], IB[TB]]
      }, JB.unknown = function(IB) {
        return arguments.length ? (BB = IB, JB) : BB
      }, JB.copy = function() {
        return pZ().domain(IB).range(ZB).unknown(BB)
      }, aI.e.apply(JB, arguments)
    }
    const aZ = 1e3,
      HZ = 6e4,
      MZ = 36e5,
      jZ = 864e5,
      PZ = 6048e5,
      RZ = 2592e6,
      rZ = 31536e6,
      mZ = new Date,
      XZ = new Date;

    function LZ(BB, IB, ZB, TB) {
      function JB(IB) {
        return BB(IB = 0 === arguments.length ? new Date : new Date(+IB)), IB
      }
      return JB.floor = IB => (BB(IB = new Date(+IB)), IB), JB.ceil = ZB => (BB(ZB = new Date(ZB - 1)), IB(ZB, 1), BB(ZB), ZB), JB.round = BB => {
        const IB = JB(BB),
          ZB = JB.ceil(BB);
        return BB - IB < ZB - BB ? IB : ZB
      }, JB.offset = (BB, ZB) => (IB(BB = new Date(+BB), null == ZB ? 1 : Math.floor(ZB)), BB), JB.range = (ZB, TB, oB) => {
        const GB = [];
        if (ZB = JB.ceil(ZB), oB = null == oB ? 1 : Math.floor(oB), !(ZB < TB) || !(oB > 0)) return GB;
        let vB;
        do {
          GB.push(vB = new Date(+ZB)), IB(ZB, oB), BB(ZB)
        } while (vB < ZB && ZB < TB);
        return GB
      }, JB.filter = ZB => LZ((IB => {
        if (IB >= IB)
          for (; BB(IB), !ZB(IB);) IB.setTime(IB - 1)
      }), ((BB, TB) => {
        if (BB >= BB)
          if (TB < 0)
            for (; ++TB <= 0;)
              for (; IB(BB, -1), !ZB(BB););
          else
            for (; --TB >= 0;)
              for (; IB(BB, 1), !ZB(BB););
      })), ZB && (JB.count = (IB, TB) => (mZ.setTime(+IB), XZ.setTime(+TB), BB(mZ), BB(XZ), Math.floor(ZB(mZ, XZ))), JB.every = BB => (BB = Math.floor(BB), isFinite(BB) && BB > 0 ? BB > 1 ? JB.filter(TB ? IB => TB(IB) % BB === 0 : IB => JB.count(0, IB) % BB === 0) : JB : null)), JB
    }
    const eZ = LZ((() => {}), ((BB, IB) => {
      BB.setTime(+BB + IB)
    }), ((BB, IB) => IB - BB));
    eZ.every = BB => (BB = Math.floor(BB), isFinite(BB) && BB > 0 ? BB > 1 ? LZ((IB => {
      IB.setTime(Math.floor(IB / BB) * BB)
    }), ((IB, ZB) => {
      IB.setTime(+IB + ZB * BB)
    }), ((IB, ZB) => (ZB - IB) / BB)) : eZ : null);
    eZ.range;
    const uZ = LZ((BB => {
        BB.setTime(BB - BB.getMilliseconds())
      }), ((BB, IB) => {
        BB.setTime(+BB + IB * aZ)
      }), ((BB, IB) => (IB - BB) / aZ), (BB => BB.getUTCSeconds())),
      fZ = (uZ.range, LZ((BB => {
        BB.setTime(BB - BB.getMilliseconds() - BB.getSeconds() * aZ)
      }), ((BB, IB) => {
        BB.setTime(+BB + IB * HZ)
      }), ((BB, IB) => (IB - BB) / HZ), (BB => BB.getMinutes()))),
      lZ = (fZ.range, LZ((BB => {
        BB.setUTCSeconds(0, 0)
      }), ((BB, IB) => {
        BB.setTime(+BB + IB * HZ)
      }), ((BB, IB) => (IB - BB) / HZ), (BB => BB.getUTCMinutes()))),
      AZ = (lZ.range, LZ((BB => {
        BB.setTime(BB - BB.getMilliseconds() - BB.getSeconds() * aZ - BB.getMinutes() * HZ)
      }), ((BB, IB) => {
        BB.setTime(+BB + IB * MZ)
      }), ((BB, IB) => (IB - BB) / MZ), (BB => BB.getHours()))),
      tZ = (AZ.range, LZ((BB => {
        BB.setUTCMinutes(0, 0, 0)
      }), ((BB, IB) => {
        BB.setTime(+BB + IB * MZ)
      }), ((BB, IB) => (IB - BB) / MZ), (BB => BB.getUTCHours()))),
      bZ = (tZ.range, LZ((BB => BB.setHours(0, 0, 0, 0)), ((BB, IB) => BB.setDate(BB.getDate() + IB)), ((BB, IB) => (IB - BB - (IB.getTimezoneOffset() - BB.getTimezoneOffset()) * HZ) / jZ), (BB => BB.getDate() - 1))),
      xZ = (bZ.range, LZ((BB => {
        BB.setUTCHours(0, 0, 0, 0)
      }), ((BB, IB) => {
        BB.setUTCDate(BB.getUTCDate() + IB)
      }), ((BB, IB) => (IB - BB) / jZ), (BB => BB.getUTCDate() - 1))),
      EZ = (xZ.range, LZ((BB => {
        BB.setUTCHours(0, 0, 0, 0)
      }), ((BB, IB) => {
        BB.setUTCDate(BB.getUTCDate() + IB)
      }), ((BB, IB) => (IB - BB) / jZ), (BB => Math.floor(BB / jZ))));
    EZ.range;

    function DZ(BB) {
      return LZ((IB => {
        IB.setDate(IB.getDate() - (IB.getDay() + 7 - BB) % 7), IB.setHours(0, 0, 0, 0)
      }), ((BB, IB) => {
        BB.setDate(BB.getDate() + 7 * IB)
      }), ((BB, IB) => (IB - BB - (IB.getTimezoneOffset() - BB.getTimezoneOffset()) * HZ) / PZ))
    }
    const KZ = DZ(0),
      VZ = DZ(1),
      SZ = DZ(2),
      BT = DZ(3),
      IT = DZ(4),
      ZT = DZ(5),
      TT = DZ(6);
    KZ.range, VZ.range, SZ.range, BT.range, IT.range, ZT.range, TT.range;

    function JT(BB) {
      return LZ((IB => {
        IB.setUTCDate(IB.getUTCDate() - (IB.getUTCDay() + 7 - BB) % 7), IB.setUTCHours(0, 0, 0, 0)
      }), ((BB, IB) => {
        BB.setUTCDate(BB.getUTCDate() + 7 * IB)
      }), ((BB, IB) => (IB - BB) / PZ))
    }
    const oT = JT(0),
      GT = JT(1),
      vT = JT(2),
      kT = JT(3),
      cT = JT(4),
      nT = JT(5),
      hT = JT(6),
      zT = (oT.range, GT.range, vT.range, kT.range, cT.range, nT.range, hT.range, LZ((BB => {
        BB.setDate(1), BB.setHours(0, 0, 0, 0)
      }), ((BB, IB) => {
        BB.setMonth(BB.getMonth() + IB)
      }), ((BB, IB) => IB.getMonth() - BB.getMonth() + 12 * (IB.getFullYear() - BB.getFullYear())), (BB => BB.getMonth()))),
      FT = (zT.range, LZ((BB => {
        BB.setUTCDate(1), BB.setUTCHours(0, 0, 0, 0)
      }), ((BB, IB) => {
        BB.setUTCMonth(BB.getUTCMonth() + IB)
      }), ((BB, IB) => IB.getUTCMonth() - BB.getUTCMonth() + 12 * (IB.getUTCFullYear() - BB.getUTCFullYear())), (BB => BB.getUTCMonth()))),
      NT = (FT.range, LZ((BB => {
        BB.setMonth(0, 1), BB.setHours(0, 0, 0, 0)
      }), ((BB, IB) => {
        BB.setFullYear(BB.getFullYear() + IB)
      }), ((BB, IB) => IB.getFullYear() - BB.getFullYear()), (BB => BB.getFullYear())));
    NT.every = BB => isFinite(BB = Math.floor(BB)) && BB > 0 ? LZ((IB => {
      IB.setFullYear(Math.floor(IB.getFullYear() / BB) * BB), IB.setMonth(0, 1), IB.setHours(0, 0, 0, 0)
    }), ((IB, ZB) => {
      IB.setFullYear(IB.getFullYear() + ZB * BB)
    })) : null;
    NT.range;
    const gT = LZ((BB => {
      BB.setUTCMonth(0, 1), BB.setUTCHours(0, 0, 0, 0)
    }), ((BB, IB) => {
      BB.setUTCFullYear(BB.getUTCFullYear() + IB)
    }), ((BB, IB) => IB.getUTCFullYear() - BB.getUTCFullYear()), (BB => BB.getUTCFullYear()));
    gT.every = BB => isFinite(BB = Math.floor(BB)) && BB > 0 ? LZ((IB => {
      IB.setUTCFullYear(Math.floor(IB.getUTCFullYear() / BB) * BB), IB.setUTCMonth(0, 1), IB.setUTCHours(0, 0, 0, 0)
    }), ((IB, ZB) => {
      IB.setUTCFullYear(IB.getUTCFullYear() + ZB * BB)
    })) : null;
    gT.range;

    function qT(BB, IB, ZB, TB, JB, oB) {
      const GB = [
        [uZ, 1, aZ],
        [uZ, 5, 5e3],
        [uZ, 15, 15e3],
        [uZ, 30, 3e4],
        [oB, 1, HZ],
        [oB, 5, 3e5],
        [oB, 15, 9e5],
        [oB, 30, 18e5],
        [JB, 1, MZ],
        [JB, 3, 108e5],
        [JB, 6, 216e5],
        [JB, 12, 432e5],
        [TB, 1, jZ],
        [TB, 2, 1728e5],
        [ZB, 1, PZ],
        [IB, 1, RZ],
        [IB, 3, 7776e6],
        [BB, 1, rZ]
      ];

      function vB(IB, ZB, TB) {
        const JB = Math.abs(ZB - IB) / TB,
          oB = NB((BB => {
            let [, , IB] = BB;
            return IB
          })).right(GB, JB);
        if (oB === GB.length) return BB.every(hB(IB / rZ, ZB / rZ, TB));
        if (0 === oB) return eZ.every(Math.max(hB(IB, ZB, TB), 1));
        const [vB, kB] = GB[JB / GB[oB - 1][2] < GB[oB][2] / JB ? oB - 1 : oB];
        return vB.every(kB)
      }
      return [function(BB, IB, ZB) {
        const TB = IB < BB;
        TB && ([BB, IB] = [IB, BB]);
        const JB = ZB && "function" === typeof ZB.range ? ZB : vB(BB, IB, ZB),
          oB = JB ? JB.range(BB, +IB + 1) : [];
        return TB ? oB.reverse() : oB
      }, vB]
    }
    const [yT, UT] = qT(gT, FT, oT, EZ, tZ, lZ), [WT, dT] = qT(NT, zT, KZ, bZ, AZ, fZ);

    function CT(BB) {
      if (0 <= BB.y && BB.y < 100) {
        var IB = new Date(-1, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L);
        return IB.setFullYear(BB.y), IB
      }
      return new Date(BB.y, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L)
    }

    function QT(BB) {
      if (0 <= BB.y && BB.y < 100) {
        var IB = new Date(Date.UTC(-1, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L));
        return IB.setUTCFullYear(BB.y), IB
      }
      return new Date(Date.UTC(BB.y, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L))
    }

    function sT(BB, IB, ZB) {
      return {
        y: BB,
        m: IB,
        d: ZB,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var wT, OT, YT, iT = {
        "-": "",
        _: " ",
        0: "0"
      },
      pT = /^\s*\d+/,
      aT = /^%/,
      HT = /[\\^$*+?|[\]().{}]/g;

    function MT(BB, IB, ZB) {
      var TB = BB < 0 ? "-" : "",
        JB = (TB ? -BB : BB) + "",
        oB = JB.length;
      return TB + (oB < ZB ? new Array(ZB - oB + 1).join(IB) + JB : JB)
    }

    function jT(BB) {
      return BB.replace(HT, "\\$&")
    }

    function PT(BB) {
      return new RegExp("^(?:" + BB.map(jT).join("|") + ")", "i")
    }

    function RT(BB) {
      return new Map(BB.map(((BB, IB) => [BB.toLowerCase(), IB])))
    }

    function rT(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 1));
      return TB ? (BB.w = +TB[0], ZB + TB[0].length) : -1
    }

    function mT(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 1));
      return TB ? (BB.u = +TB[0], ZB + TB[0].length) : -1
    }

    function XT(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 2));
      return TB ? (BB.U = +TB[0], ZB + TB[0].length) : -1
    }

    function LT(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 2));
      return TB ? (BB.V = +TB[0], ZB + TB[0].length) : -1
    }

    function eT(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 2));
      return TB ? (BB.W = +TB[0], ZB + TB[0].length) : -1
    }

    function uT(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 4));
      return TB ? (BB.y = +TB[0], ZB + TB[0].length) : -1
    }

    function fT(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 2));
      return TB ? (BB.y = +TB[0] + (+TB[0] > 68 ? 1900 : 2e3), ZB + TB[0].length) : -1
    }

    function lT(BB, IB, ZB) {
      var TB = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(IB.slice(ZB, ZB + 6));
      return TB ? (BB.Z = TB[1] ? 0 : -(TB[2] + (TB[3] || "00")), ZB + TB[0].length) : -1
    }

    function AT(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 1));
      return TB ? (BB.q = 3 * TB[0] - 3, ZB + TB[0].length) : -1
    }

    function tT(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 2));
      return TB ? (BB.m = TB[0] - 1, ZB + TB[0].length) : -1
    }

    function bT(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 2));
      return TB ? (BB.d = +TB[0], ZB + TB[0].length) : -1
    }

    function xT(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 3));
      return TB ? (BB.m = 0, BB.d = +TB[0], ZB + TB[0].length) : -1
    }

    function ET(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 2));
      return TB ? (BB.H = +TB[0], ZB + TB[0].length) : -1
    }

    function DT(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 2));
      return TB ? (BB.M = +TB[0], ZB + TB[0].length) : -1
    }

    function KT(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 2));
      return TB ? (BB.S = +TB[0], ZB + TB[0].length) : -1
    }

    function VT(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 3));
      return TB ? (BB.L = +TB[0], ZB + TB[0].length) : -1
    }

    function ST(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB, ZB + 6));
      return TB ? (BB.L = Math.floor(TB[0] / 1e3), ZB + TB[0].length) : -1
    }

    function BJ(BB, IB, ZB) {
      var TB = aT.exec(IB.slice(ZB, ZB + 1));
      return TB ? ZB + TB[0].length : -1
    }

    function IJ(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB));
      return TB ? (BB.Q = +TB[0], ZB + TB[0].length) : -1
    }

    function ZJ(BB, IB, ZB) {
      var TB = pT.exec(IB.slice(ZB));
      return TB ? (BB.s = +TB[0], ZB + TB[0].length) : -1
    }

    function TJ(BB, IB) {
      return MT(BB.getDate(), IB, 2)
    }

    function JJ(BB, IB) {
      return MT(BB.getHours(), IB, 2)
    }

    function oJ(BB, IB) {
      return MT(BB.getHours() % 12 || 12, IB, 2)
    }

    function GJ(BB, IB) {
      return MT(1 + bZ.count(NT(BB), BB), IB, 3)
    }

    function vJ(BB, IB) {
      return MT(BB.getMilliseconds(), IB, 3)
    }

    function kJ(BB, IB) {
      return vJ(BB, IB) + "000"
    }

    function cJ(BB, IB) {
      return MT(BB.getMonth() + 1, IB, 2)
    }

    function nJ(BB, IB) {
      return MT(BB.getMinutes(), IB, 2)
    }

    function hJ(BB, IB) {
      return MT(BB.getSeconds(), IB, 2)
    }

    function zJ(BB) {
      var IB = BB.getDay();
      return 0 === IB ? 7 : IB
    }

    function FJ(BB, IB) {
      return MT(KZ.count(NT(BB) - 1, BB), IB, 2)
    }

    function NJ(BB) {
      var IB = BB.getDay();
      return IB >= 4 || 0 === IB ? IT(BB) : IT.ceil(BB)
    }

    function gJ(BB, IB) {
      return BB = NJ(BB), MT(IT.count(NT(BB), BB) + (4 === NT(BB).getDay()), IB, 2)
    }

    function qJ(BB) {
      return BB.getDay()
    }

    function yJ(BB, IB) {
      return MT(VZ.count(NT(BB) - 1, BB), IB, 2)
    }

    function UJ(BB, IB) {
      return MT(BB.getFullYear() % 100, IB, 2)
    }

    function WJ(BB, IB) {
      return MT((BB = NJ(BB)).getFullYear() % 100, IB, 2)
    }

    function dJ(BB, IB) {
      return MT(BB.getFullYear() % 1e4, IB, 4)
    }

    function CJ(BB, IB) {
      var ZB = BB.getDay();
      return MT((BB = ZB >= 4 || 0 === ZB ? IT(BB) : IT.ceil(BB)).getFullYear() % 1e4, IB, 4)
    }

    function QJ(BB) {
      var IB = BB.getTimezoneOffset();
      return (IB > 0 ? "-" : (IB *= -1, "+")) + MT(IB / 60 | 0, "0", 2) + MT(IB % 60, "0", 2)
    }

    function sJ(BB, IB) {
      return MT(BB.getUTCDate(), IB, 2)
    }

    function wJ(BB, IB) {
      return MT(BB.getUTCHours(), IB, 2)
    }

    function OJ(BB, IB) {
      return MT(BB.getUTCHours() % 12 || 12, IB, 2)
    }

    function YJ(BB, IB) {
      return MT(1 + xZ.count(gT(BB), BB), IB, 3)
    }

    function iJ(BB, IB) {
      return MT(BB.getUTCMilliseconds(), IB, 3)
    }

    function pJ(BB, IB) {
      return iJ(BB, IB) + "000"
    }

    function aJ(BB, IB) {
      return MT(BB.getUTCMonth() + 1, IB, 2)
    }

    function HJ(BB, IB) {
      return MT(BB.getUTCMinutes(), IB, 2)
    }

    function MJ(BB, IB) {
      return MT(BB.getUTCSeconds(), IB, 2)
    }

    function jJ(BB) {
      var IB = BB.getUTCDay();
      return 0 === IB ? 7 : IB
    }

    function PJ(BB, IB) {
      return MT(oT.count(gT(BB) - 1, BB), IB, 2)
    }

    function RJ(BB) {
      var IB = BB.getUTCDay();
      return IB >= 4 || 0 === IB ? cT(BB) : cT.ceil(BB)
    }

    function rJ(BB, IB) {
      return BB = RJ(BB), MT(cT.count(gT(BB), BB) + (4 === gT(BB).getUTCDay()), IB, 2)
    }

    function mJ(BB) {
      return BB.getUTCDay()
    }

    function XJ(BB, IB) {
      return MT(GT.count(gT(BB) - 1, BB), IB, 2)
    }

    function LJ(BB, IB) {
      return MT(BB.getUTCFullYear() % 100, IB, 2)
    }

    function eJ(BB, IB) {
      return MT((BB = RJ(BB)).getUTCFullYear() % 100, IB, 2)
    }

    function uJ(BB, IB) {
      return MT(BB.getUTCFullYear() % 1e4, IB, 4)
    }

    function fJ(BB, IB) {
      var ZB = BB.getUTCDay();
      return MT((BB = ZB >= 4 || 0 === ZB ? cT(BB) : cT.ceil(BB)).getUTCFullYear() % 1e4, IB, 4)
    }

    function lJ() {
      return "+0000"
    }

    function AJ() {
      return "%"
    }

    function tJ(BB) {
      return +BB
    }

    function bJ(BB) {
      return Math.floor(+BB / 1e3)
    }

    function xJ(BB) {
      return new Date(BB)
    }

    function EJ(BB) {
      return BB instanceof Date ? +BB : +new Date(+BB)
    }

    function DJ(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB) {
      var nB = iI(),
        hB = nB.invert,
        zB = nB.domain,
        FB = cB(".%L"),
        NB = cB(":%S"),
        gB = cB("%I:%M"),
        qB = cB("%I %p"),
        yB = cB("%a %d"),
        UB = cB("%b %d"),
        WB = cB("%B"),
        dB = cB("%Y");

      function CB(BB) {
        return (kB(BB) < BB ? FB : vB(BB) < BB ? NB : GB(BB) < BB ? gB : oB(BB) < BB ? qB : TB(BB) < BB ? JB(BB) < BB ? yB : UB : ZB(BB) < BB ? WB : dB)(BB)
      }
      return nB.invert = function(BB) {
        return new Date(hB(BB))
      }, nB.domain = function(BB) {
        return arguments.length ? zB(Array.from(BB, EJ)) : zB().map(xJ)
      }, nB.ticks = function(IB) {
        var ZB = zB();
        return BB(ZB[0], ZB[ZB.length - 1], null == IB ? 10 : IB)
      }, nB.tickFormat = function(BB, IB) {
        return null == IB ? CB : cB(IB)
      }, nB.nice = function(BB) {
        var ZB = zB();
        return BB && "function" === typeof BB.range || (BB = IB(ZB[0], ZB[ZB.length - 1], null == BB ? 10 : BB)), BB ? zB(DI(ZB, BB)) : nB
      }, nB.copy = function() {
        return OI(nB, DJ(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB))
      }, nB
    }

    function KJ() {
      return aI.e.apply(DJ(WT, dT, NT, zT, KZ, bZ, AZ, fZ, uZ, OT).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function VJ() {
      return aI.e.apply(DJ(yT, UT, gT, FT, oT, xZ, tZ, lZ, uZ, YT).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function SJ() {
      var BB, IB, ZB, TB, JB, oB = 0,
        GB = 1,
        vB = CI,
        kB = !1;

      function cB(IB) {
        return null == IB || isNaN(IB = +IB) ? JB : vB(0 === ZB ? .5 : (IB = (TB(IB) - BB) * ZB, kB ? Math.max(0, Math.min(1, IB)) : IB))
      }

      function nB(BB) {
        return function(IB) {
          var ZB, TB;
          return arguments.length ? ([ZB, TB] = IB, vB = BB(ZB, TB), cB) : [vB(0), vB(1)]
        }
      }
      return cB.domain = function(JB) {
          return arguments.length ? ([oB, GB] = JB, BB = TB(oB = +oB), IB = TB(GB = +GB), ZB = BB === IB ? 0 : 1 / (IB - BB), cB) : [oB, GB]
        }, cB.clamp = function(BB) {
          return arguments.length ? (kB = !!BB, cB) : kB
        }, cB.interpolator = function(BB) {
          return arguments.length ? (vB = BB, cB) : vB
        }, cB.range = nB(yI), cB.rangeRound = nB(UI), cB.unknown = function(BB) {
          return arguments.length ? (JB = BB, cB) : JB
        },
        function(JB) {
          return TB = JB, BB = JB(oB), IB = JB(GB), ZB = BB === IB ? 0 : 1 / (IB - BB), cB
        }
    }

    function Bo(BB, IB) {
      return IB.domain(BB.domain()).interpolator(BB.interpolator()).clamp(BB.clamp()).unknown(BB.unknown())
    }

    function Io() {
      var BB = bI(SJ()(CI));
      return BB.copy = function() {
        return Bo(BB, Io())
      }, aI.b.apply(BB, arguments)
    }

    function Zo() {
      var BB = TZ(SJ()).domain([1, 10]);
      return BB.copy = function() {
        return Bo(BB, Zo()).base(BB.base())
      }, aI.b.apply(BB, arguments)
    }

    function To() {
      var BB = vZ(SJ());
      return BB.copy = function() {
        return Bo(BB, To()).constant(BB.constant())
      }, aI.b.apply(BB, arguments)
    }

    function Jo() {
      var BB = FZ(SJ());
      return BB.copy = function() {
        return Bo(BB, Jo()).exponent(BB.exponent())
      }, aI.b.apply(BB, arguments)
    }

    function oo() {
      return Jo.apply(null, arguments).exponent(.5)
    }

    function Go() {
      var BB = [],
        IB = CI;

      function ZB(ZB) {
        if (null != ZB && !isNaN(ZB = +ZB)) return IB((WB(BB, ZB, 1) - 1) / (BB.length - 1))
      }
      return ZB.domain = function(IB) {
        if (!arguments.length) return BB.slice();
        BB = [];
        for (let ZB of IB) null == ZB || isNaN(ZB = +ZB) || BB.push(ZB);
        return BB.sort(zB), ZB
      }, ZB.interpolator = function(BB) {
        return arguments.length ? (IB = BB, ZB) : IB
      }, ZB.range = function() {
        return BB.map(((ZB, TB) => IB(TB / (BB.length - 1))))
      }, ZB.quantiles = function(IB) {
        return Array.from({
          length: IB + 1
        }, ((ZB, TB) => wZ(BB, TB / IB)))
      }, ZB.copy = function() {
        return Go(IB).domain(BB)
      }, aI.b.apply(ZB, arguments)
    }

    function vo() {
      var BB, IB, ZB, TB, JB, oB, GB, vB = 0,
        kB = .5,
        cB = 1,
        nB = 1,
        hB = CI,
        zB = !1;

      function FB(BB) {
        return isNaN(BB = +BB) ? GB : (BB = .5 + ((BB = +oB(BB)) - IB) * (nB * BB < nB * IB ? TB : JB), hB(zB ? Math.max(0, Math.min(1, BB)) : BB))
      }

      function NB(BB) {
        return function(IB) {
          var ZB, TB, JB;
          return arguments.length ? ([ZB, TB, JB] = IB, hB = function(BB, IB) {
            void 0 === IB && (IB = BB, BB = yI);
            for (var ZB = 0, TB = IB.length - 1, JB = IB[0], oB = new Array(TB < 0 ? 0 : TB); ZB < TB;) oB[ZB] = BB(JB, JB = IB[++ZB]);
            return function(BB) {
              var IB = Math.max(0, Math.min(TB - 1, Math.floor(BB *= TB)));
              return oB[IB](BB - IB)
            }
          }(BB, [ZB, TB, JB]), FB) : [hB(0), hB(.5), hB(1)]
        }
      }
      return FB.domain = function(GB) {
          return arguments.length ? ([vB, kB, cB] = GB, BB = oB(vB = +vB), IB = oB(kB = +kB), ZB = oB(cB = +cB), TB = BB === IB ? 0 : .5 / (IB - BB), JB = IB === ZB ? 0 : .5 / (ZB - IB), nB = IB < BB ? -1 : 1, FB) : [vB, kB, cB]
        }, FB.clamp = function(BB) {
          return arguments.length ? (zB = !!BB, FB) : zB
        }, FB.interpolator = function(BB) {
          return arguments.length ? (hB = BB, FB) : hB
        }, FB.range = NB(yI), FB.rangeRound = NB(UI), FB.unknown = function(BB) {
          return arguments.length ? (GB = BB, FB) : GB
        },
        function(GB) {
          return oB = GB, BB = GB(vB), IB = GB(kB), ZB = GB(cB), TB = BB === IB ? 0 : .5 / (IB - BB), JB = IB === ZB ? 0 : .5 / (ZB - IB), nB = IB < BB ? -1 : 1, FB
        }
    }

    function ko() {
      var BB = bI(vo()(CI));
      return BB.copy = function() {
        return Bo(BB, ko())
      }, aI.b.apply(BB, arguments)
    }

    function co() {
      var BB = TZ(vo()).domain([.1, 1, 10]);
      return BB.copy = function() {
        return Bo(BB, co()).base(BB.base())
      }, aI.b.apply(BB, arguments)
    }

    function no() {
      var BB = vZ(vo());
      return BB.copy = function() {
        return Bo(BB, no()).constant(BB.constant())
      }, aI.b.apply(BB, arguments)
    }

    function ho() {
      var BB = FZ(vo());
      return BB.copy = function() {
        return Bo(BB, ho()).exponent(BB.exponent())
      }, aI.b.apply(BB, arguments)
    }

    function zo() {
      return ho.apply(null, arguments).exponent(.5)
    }

    function Fo(BB, IB) {
      if ((JB = BB.length) > 1)
        for (var ZB, TB, JB, oB = 1, GB = BB[IB[0]], vB = GB.length; oB < JB; ++oB)
          for (TB = GB, GB = BB[IB[oB]], ZB = 0; ZB < vB; ++ZB) GB[ZB][1] += GB[ZB][0] = isNaN(TB[ZB][1]) ? TB[ZB][0] : TB[ZB][1]
    }! function(BB) {
      wT = function(BB) {
        var IB = BB.dateTime,
          ZB = BB.date,
          TB = BB.time,
          JB = BB.periods,
          oB = BB.days,
          GB = BB.shortDays,
          vB = BB.months,
          kB = BB.shortMonths,
          cB = PT(JB),
          nB = RT(JB),
          hB = PT(oB),
          zB = RT(oB),
          FB = PT(GB),
          NB = RT(GB),
          gB = PT(vB),
          qB = RT(vB),
          yB = PT(kB),
          UB = RT(kB),
          WB = {
            a: function(BB) {
              return GB[BB.getDay()]
            },
            A: function(BB) {
              return oB[BB.getDay()]
            },
            b: function(BB) {
              return kB[BB.getMonth()]
            },
            B: function(BB) {
              return vB[BB.getMonth()]
            },
            c: null,
            d: TJ,
            e: TJ,
            f: kJ,
            g: WJ,
            G: CJ,
            H: JJ,
            I: oJ,
            j: GJ,
            L: vJ,
            m: cJ,
            M: nJ,
            p: function(BB) {
              return JB[+(BB.getHours() >= 12)]
            },
            q: function(BB) {
              return 1 + ~~(BB.getMonth() / 3)
            },
            Q: tJ,
            s: bJ,
            S: hJ,
            u: zJ,
            U: FJ,
            V: gJ,
            w: qJ,
            W: yJ,
            x: null,
            X: null,
            y: UJ,
            Y: dJ,
            Z: QJ,
            "%": AJ
          },
          dB = {
            a: function(BB) {
              return GB[BB.getUTCDay()]
            },
            A: function(BB) {
              return oB[BB.getUTCDay()]
            },
            b: function(BB) {
              return kB[BB.getUTCMonth()]
            },
            B: function(BB) {
              return vB[BB.getUTCMonth()]
            },
            c: null,
            d: sJ,
            e: sJ,
            f: pJ,
            g: eJ,
            G: fJ,
            H: wJ,
            I: OJ,
            j: YJ,
            L: iJ,
            m: aJ,
            M: HJ,
            p: function(BB) {
              return JB[+(BB.getUTCHours() >= 12)]
            },
            q: function(BB) {
              return 1 + ~~(BB.getUTCMonth() / 3)
            },
            Q: tJ,
            s: bJ,
            S: MJ,
            u: jJ,
            U: PJ,
            V: rJ,
            w: mJ,
            W: XJ,
            x: null,
            X: null,
            y: LJ,
            Y: uJ,
            Z: lJ,
            "%": AJ
          },
          CB = {
            a: function(BB, IB, ZB) {
              var TB = FB.exec(IB.slice(ZB));
              return TB ? (BB.w = NB.get(TB[0].toLowerCase()), ZB + TB[0].length) : -1
            },
            A: function(BB, IB, ZB) {
              var TB = hB.exec(IB.slice(ZB));
              return TB ? (BB.w = zB.get(TB[0].toLowerCase()), ZB + TB[0].length) : -1
            },
            b: function(BB, IB, ZB) {
              var TB = yB.exec(IB.slice(ZB));
              return TB ? (BB.m = UB.get(TB[0].toLowerCase()), ZB + TB[0].length) : -1
            },
            B: function(BB, IB, ZB) {
              var TB = gB.exec(IB.slice(ZB));
              return TB ? (BB.m = qB.get(TB[0].toLowerCase()), ZB + TB[0].length) : -1
            },
            c: function(BB, ZB, TB) {
              return wB(BB, IB, ZB, TB)
            },
            d: bT,
            e: bT,
            f: ST,
            g: fT,
            G: uT,
            H: ET,
            I: ET,
            j: xT,
            L: VT,
            m: tT,
            M: DT,
            p: function(BB, IB, ZB) {
              var TB = cB.exec(IB.slice(ZB));
              return TB ? (BB.p = nB.get(TB[0].toLowerCase()), ZB + TB[0].length) : -1
            },
            q: AT,
            Q: IJ,
            s: ZJ,
            S: KT,
            u: mT,
            U: XT,
            V: LT,
            w: rT,
            W: eT,
            x: function(BB, IB, TB) {
              return wB(BB, ZB, IB, TB)
            },
            X: function(BB, IB, ZB) {
              return wB(BB, TB, IB, ZB)
            },
            y: fT,
            Y: uT,
            Z: lT,
            "%": BJ
          };

        function QB(BB, IB) {
          return function(ZB) {
            var TB, JB, oB, GB = [],
              vB = -1,
              kB = 0,
              cB = BB.length;
            for (ZB instanceof Date || (ZB = new Date(+ZB)); ++vB < cB;) 37 === BB.charCodeAt(vB) && (GB.push(BB.slice(kB, vB)), null != (JB = iT[TB = BB.charAt(++vB)]) ? TB = BB.charAt(++vB) : JB = "e" === TB ? " " : "0", (oB = IB[TB]) && (TB = oB(ZB, JB)), GB.push(TB), kB = vB + 1);
            return GB.push(BB.slice(kB, vB)), GB.join("")
          }
        }

        function sB(BB, IB) {
          return function(ZB) {
            var TB, JB, oB = sT(1900, void 0, 1);
            if (wB(oB, BB, ZB += "", 0) != ZB.length) return null;
            if ("Q" in oB) return new Date(oB.Q);
            if ("s" in oB) return new Date(1e3 * oB.s + ("L" in oB ? oB.L : 0));
            if (IB && !("Z" in oB) && (oB.Z = 0), "p" in oB && (oB.H = oB.H % 12 + 12 * oB.p), void 0 === oB.m && (oB.m = "q" in oB ? oB.q : 0), "V" in oB) {
              if (oB.V < 1 || oB.V > 53) return null;
              "w" in oB || (oB.w = 1), "Z" in oB ? (JB = (TB = QT(sT(oB.y, 0, 1))).getUTCDay(), TB = JB > 4 || 0 === JB ? GT.ceil(TB) : GT(TB), TB = xZ.offset(TB, 7 * (oB.V - 1)), oB.y = TB.getUTCFullYear(), oB.m = TB.getUTCMonth(), oB.d = TB.getUTCDate() + (oB.w + 6) % 7) : (JB = (TB = CT(sT(oB.y, 0, 1))).getDay(), TB = JB > 4 || 0 === JB ? VZ.ceil(TB) : VZ(TB), TB = bZ.offset(TB, 7 * (oB.V - 1)), oB.y = TB.getFullYear(), oB.m = TB.getMonth(), oB.d = TB.getDate() + (oB.w + 6) % 7)
            } else("W" in oB || "U" in oB) && ("w" in oB || (oB.w = "u" in oB ? oB.u % 7 : "W" in oB ? 1 : 0), JB = "Z" in oB ? QT(sT(oB.y, 0, 1)).getUTCDay() : CT(sT(oB.y, 0, 1)).getDay(), oB.m = 0, oB.d = "W" in oB ? (oB.w + 6) % 7 + 7 * oB.W - (JB + 5) % 7 : oB.w + 7 * oB.U - (JB + 6) % 7);
            return "Z" in oB ? (oB.H += oB.Z / 100 | 0, oB.M += oB.Z % 100, QT(oB)) : CT(oB)
          }
        }

        function wB(BB, IB, ZB, TB) {
          for (var JB, oB, GB = 0, vB = IB.length, kB = ZB.length; GB < vB;) {
            if (TB >= kB) return -1;
            if (37 === (JB = IB.charCodeAt(GB++))) {
              if (JB = IB.charAt(GB++), !(oB = CB[JB in iT ? IB.charAt(GB++) : JB]) || (TB = oB(BB, ZB, TB)) < 0) return -1
            } else if (JB != ZB.charCodeAt(TB++)) return -1
          }
          return TB
        }
        return WB.x = QB(ZB, WB), WB.X = QB(TB, WB), WB.c = QB(IB, WB), dB.x = QB(ZB, dB), dB.X = QB(TB, dB), dB.c = QB(IB, dB), {
          format: function(BB) {
            var IB = QB(BB += "", WB);
            return IB.toString = function() {
              return BB
            }, IB
          },
          parse: function(BB) {
            var IB = sB(BB += "", !1);
            return IB.toString = function() {
              return BB
            }, IB
          },
          utcFormat: function(BB) {
            var IB = QB(BB += "", dB);
            return IB.toString = function() {
              return BB
            }, IB
          },
          utcParse: function(BB) {
            var IB = sB(BB += "", !0);
            return IB.toString = function() {
              return BB
            }, IB
          }
        }
      }(BB), OT = wT.format, wT.parse, YT = wT.utcFormat, wT.utcParse
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
    var No = ZB(6355),
      go = ZB(6244);

    function qo(BB) {
      for (var IB = BB.length, ZB = new Array(IB); --IB >= 0;) ZB[IB] = IB;
      return ZB
    }

    function yo(BB, IB) {
      return BB[IB]
    }

    function Uo(BB) {
      const IB = [];
      return IB.key = BB, IB
    }
    var Wo = ZB(6302),
      Co = ZB.n(Wo),
      Qo = ZB(6316),
      so = ZB.n(Qo),
      wo = ZB(5563),
      Oo = ZB.n(wo),
      Yo = ZB(5425),
      io = ZB.n(Yo),
      po = ZB(5341),
      ao = ZB.n(po),
      Ho = ZB(5357),
      Mo = ZB.n(Ho),
      jo = ZB(6325),
      Po = ZB.n(jo),
      Ro = ZB(5348),
      ro = ZB.n(Ro),
      mo = ZB(6200),
      Xo = ZB.n(mo),
      Lo = ZB(6339),
      eo = ZB.n(Lo),
      uo = ZB(5650),
      fo = ZB.n(uo),
      Ao = ZB(6342),
      to = ZB.n(Ao);

    function bo(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return xo(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(BB)) return Array.from(BB)
      }(BB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return xo(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return xo(BB, IB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xo(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }
    var Eo = function(BB) {
        return BB
      },
      Do = {
        "@@functional/placeholder": !0
      },
      Ko = function(BB) {
        return BB === Do
      },
      Vo = function(BB) {
        return function IB() {
          return 0 === arguments.length || 1 === arguments.length && Ko(arguments.length <= 0 ? void 0 : arguments[0]) ? IB : BB.apply(void 0, arguments)
        }
      },
      So = function BB(IB, ZB) {
        return 1 === IB ? ZB : Vo((function() {
          for (var TB = arguments.length, JB = new Array(TB), oB = 0; oB < TB; oB++) JB[oB] = arguments[oB];
          var GB = JB.filter((function(BB) {
            return BB !== Do
          })).length;
          return GB >= IB ? ZB.apply(void 0, JB) : BB(IB - GB, Vo((function() {
            for (var BB = arguments.length, IB = new Array(BB), TB = 0; TB < BB; TB++) IB[TB] = arguments[TB];
            var oB = JB.map((function(BB) {
              return Ko(BB) ? IB.shift() : BB
            }));
            return ZB.apply(void 0, bo(oB).concat(IB))
          })))
        }))
      },
      BG = function(BB) {
        return So(BB.length, BB)
      },
      IG = function(BB, IB) {
        for (var ZB = [], TB = BB; TB < IB; ++TB) ZB[TB - BB] = TB;
        return ZB
      },
      ZG = BG((function(BB, IB) {
        return Array.isArray(IB) ? IB.map(BB) : Object.keys(IB).map((function(BB) {
          return IB[BB]
        })).map(BB)
      })),
      TG = function() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        if (!IB.length) return Eo;
        var TB = IB.reverse(),
          JB = TB[0],
          oB = TB.slice(1);
        return function() {
          return oB.reduce((function(BB, IB) {
            return IB(BB)
          }), JB.apply(void 0, arguments))
        }
      },
      JG = function(BB) {
        return Array.isArray(BB) ? BB.reverse() : BB.split("").reverse.join("")
      },
      oG = function(BB) {
        var IB = null,
          ZB = null;
        return function() {
          for (var TB = arguments.length, JB = new Array(TB), oB = 0; oB < TB; oB++) JB[oB] = arguments[oB];
          return IB && JB.every((function(BB, ZB) {
            return BB === IB[ZB]
          })) ? ZB : (IB = JB, ZB = BB.apply(void 0, JB))
        }
      };
    const GG = {
      rangeStep: function(BB, IB, ZB) {
        for (var TB = new(to())(BB), JB = 0, oB = []; TB.lt(IB) && JB < 1e5;) oB.push(TB.toNumber()), TB = TB.add(ZB), JB++;
        return oB
      },
      getDigitCount: function(BB) {
        return 0 === BB ? 1 : Math.floor(new(to())(BB).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: BG((function(BB, IB, ZB) {
        var TB = +BB;
        return TB + ZB * (+IB - TB)
      })),
      uninterpolateNumber: BG((function(BB, IB, ZB) {
        var TB = IB - +BB;
        return (ZB - BB) / (TB = TB || 1 / 0)
      })),
      uninterpolateTruncation: BG((function(BB, IB, ZB) {
        var TB = IB - +BB;
        return TB = TB || 1 / 0, Math.max(0, Math.min(1, (ZB - BB) / TB))
      }))
    };

    function vG(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return nG(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(BB)) return Array.from(BB)
      }(BB) || cG(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kG(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(BB))) return;
        var ZB = [],
          TB = !0,
          JB = !1,
          oB = void 0;
        try {
          for (var GB, vB = BB[Symbol.iterator](); !(TB = (GB = vB.next()).done) && (ZB.push(GB.value), !IB || ZB.length !== IB); TB = !0);
        } catch (kB) {
          JB = !0, oB = kB
        } finally {
          try {
            TB || null == vB.return || vB.return()
          } finally {
            if (JB) throw oB
          }
        }
        return ZB
      }(BB, IB) || cG(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cG(BB, IB) {
      if (BB) {
        if ("string" === typeof BB) return nG(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === ZB && BB.constructor && (ZB = BB.constructor.name), "Map" === ZB || "Set" === ZB ? Array.from(BB) : "Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB) ? nG(BB, IB) : void 0
      }
    }

    function nG(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function hG(BB) {
      var IB = kG(BB, 2),
        ZB = IB[0],
        TB = IB[1],
        JB = ZB,
        oB = TB;
      return ZB > TB && (JB = TB, oB = ZB), [JB, oB]
    }

    function zG(BB, IB, ZB) {
      if (BB.lte(0)) return new(to())(0);
      var TB = GG.getDigitCount(BB.toNumber()),
        JB = new(to())(10).pow(TB),
        oB = BB.div(JB),
        GB = 1 !== TB ? .05 : .1,
        vB = new(to())(Math.ceil(oB.div(GB).toNumber())).add(ZB).mul(GB).mul(JB);
      return IB ? vB : new(to())(Math.ceil(vB))
    }

    function FG(BB, IB, ZB) {
      var TB = 1,
        JB = new(to())(BB);
      if (!JB.isint() && ZB) {
        var oB = Math.abs(BB);
        oB < 1 ? (TB = new(to())(10).pow(GG.getDigitCount(BB) - 1), JB = new(to())(Math.floor(JB.div(TB).toNumber())).mul(TB)) : oB > 1 && (JB = new(to())(Math.floor(BB)))
      } else 0 === BB ? JB = new(to())(Math.floor((IB - 1) / 2)) : ZB || (JB = new(to())(Math.floor(BB)));
      var GB = Math.floor((IB - 1) / 2);
      return TG(ZG((function(BB) {
        return JB.add(new(to())(BB - GB).mul(TB)).toNumber()
      })), IG)(0, IB)
    }

    function NG(BB, IB, ZB, TB) {
      var JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((IB - BB) / (ZB - 1))) return {
        step: new(to())(0),
        tickMin: new(to())(0),
        tickMax: new(to())(0)
      };
      var oB, GB = zG(new(to())(IB).sub(BB).div(ZB - 1), TB, JB);
      oB = BB <= 0 && IB >= 0 ? new(to())(0) : (oB = new(to())(BB).add(IB).div(2)).sub(new(to())(oB).mod(GB));
      var vB = Math.ceil(oB.sub(BB).div(GB).toNumber()),
        kB = Math.ceil(new(to())(IB).sub(oB).div(GB).toNumber()),
        cB = vB + kB + 1;
      return cB > ZB ? NG(BB, IB, ZB, TB, JB + 1) : (cB < ZB && (kB = IB > 0 ? kB + (ZB - cB) : kB, vB = IB > 0 ? vB : vB + (ZB - cB)), {
        step: GB,
        tickMin: oB.sub(new(to())(vB).mul(GB)),
        tickMax: oB.add(new(to())(kB).mul(GB))
      })
    }
    var gG = oG((function(BB) {
        var IB = kG(BB, 2),
          ZB = IB[0],
          TB = IB[1],
          JB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          oB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          GB = Math.max(JB, 2),
          vB = kG(hG([ZB, TB]), 2),
          kB = vB[0],
          cB = vB[1];
        if (kB === -1 / 0 || cB === 1 / 0) {
          var nB = cB === 1 / 0 ? [kB].concat(vG(IG(0, JB - 1).map((function() {
            return 1 / 0
          })))) : [].concat(vG(IG(0, JB - 1).map((function() {
            return -1 / 0
          }))), [cB]);
          return ZB > TB ? JG(nB) : nB
        }
        if (kB === cB) return FG(kB, JB, oB);
        var hB = NG(kB, cB, GB, oB),
          zB = hB.step,
          FB = hB.tickMin,
          NB = hB.tickMax,
          gB = GG.rangeStep(FB, NB.add(new(to())(.1).mul(zB)), zB);
        return ZB > TB ? JG(gB) : gB
      })),
      qG = (oG((function(BB) {
        var IB = kG(BB, 2),
          ZB = IB[0],
          TB = IB[1],
          JB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          oB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          GB = Math.max(JB, 2),
          vB = kG(hG([ZB, TB]), 2),
          kB = vB[0],
          cB = vB[1];
        if (kB === -1 / 0 || cB === 1 / 0) return [ZB, TB];
        if (kB === cB) return FG(kB, JB, oB);
        var nB = zG(new(to())(cB).sub(kB).div(GB - 1), oB, 0),
          hB = TG(ZG((function(BB) {
            return new(to())(kB).add(new(to())(BB).mul(nB)).toNumber()
          })), IG)(0, GB).filter((function(BB) {
            return BB >= kB && BB <= cB
          }));
        return ZB > TB ? JG(hB) : hB
      })), oG((function(BB, IB) {
        var ZB = kG(BB, 2),
          TB = ZB[0],
          JB = ZB[1],
          oB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          GB = kG(hG([TB, JB]), 2),
          vB = GB[0],
          kB = GB[1];
        if (vB === -1 / 0 || kB === 1 / 0) return [TB, JB];
        if (vB === kB) return [vB];
        var cB = Math.max(IB, 2),
          nB = zG(new(to())(kB).sub(vB).div(cB - 1), oB, 0),
          hB = [].concat(vG(GG.rangeStep(new(to())(vB), new(to())(kB).sub(new(to())(.99).mul(nB)), nB)), [kB]);
        return TB > JB ? JG(hB) : hB
      }))),
      yG = ZB(6348),
      UG = ZB(5335),
      WG = ZB(5573),
      dG = ZB(6350);

    function CG(BB) {
      return CG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, CG(BB)
    }

    function QG(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return sG(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, IB) {
        if (!BB) return;
        if ("string" === typeof BB) return sG(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
        if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
        if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return sG(BB, IB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sG(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function wG(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function OG(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? wG(Object(ZB), !0).forEach((function(IB) {
          YG(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : wG(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function YG(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != CG(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != CG(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == CG(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function iG(BB, IB, ZB) {
      return Oo()(BB) || Oo()(IB) ? ZB : (0, UG.u)(IB) ? Mo()(BB, IB, ZB) : io()(IB) ? IB(BB) : ZB
    }

    function pG(BB, IB, ZB, TB) {
      var JB = Po()(BB, (function(BB) {
        return iG(BB, IB)
      }));
      if ("number" === ZB) {
        var oB = JB.filter((function(BB) {
          return (0, UG.w)(BB) || parseFloat(BB)
        }));
        return oB.length ? [so()(oB), Co()(oB)] : [1 / 0, -1 / 0]
      }
      return (TB ? JB.filter((function(BB) {
        return !Oo()(BB)
      })) : JB).map((function(BB) {
        return (0, UG.u)(BB) || BB instanceof Date ? BB : ""
      }))
    }
    var aG = function(BB) {
        var IB, ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          TB = arguments.length > 2 ? arguments[2] : void 0,
          JB = arguments.length > 3 ? arguments[3] : void 0,
          oB = -1,
          GB = null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.length) && void 0 !== IB ? IB : 0;
        if (GB <= 1) return 0;
        if (JB && "angleAxis" === JB.axisType && Math.abs(Math.abs(JB.range[1] - JB.range[0]) - 360) <= 1e-6)
          for (var vB = JB.range, kB = 0; kB < GB; kB++) {
            var cB = kB > 0 ? TB[kB - 1].coordinate : TB[GB - 1].coordinate,
              nB = TB[kB].coordinate,
              hB = kB >= GB - 1 ? TB[0].coordinate : TB[kB + 1].coordinate,
              zB = void 0;
            if ((0, UG.y)(nB - cB) !== (0, UG.y)(hB - nB)) {
              var FB = [];
              if ((0, UG.y)(hB - nB) === (0, UG.y)(vB[1] - vB[0])) {
                zB = hB;
                var NB = nB + vB[1] - vB[0];
                FB[0] = Math.min(NB, (NB + cB) / 2), FB[1] = Math.max(NB, (NB + cB) / 2)
              } else {
                zB = cB;
                var gB = hB + vB[1] - vB[0];
                FB[0] = Math.min(nB, (gB + nB) / 2), FB[1] = Math.max(nB, (gB + nB) / 2)
              }
              var qB = [Math.min(nB, (zB + nB) / 2), Math.max(nB, (zB + nB) / 2)];
              if (BB > qB[0] && BB <= qB[1] || BB >= FB[0] && BB <= FB[1]) {
                oB = TB[kB].index;
                break
              }
            } else {
              var yB = Math.min(cB, hB),
                UB = Math.max(cB, hB);
              if (BB > (yB + nB) / 2 && BB <= (UB + nB) / 2) {
                oB = TB[kB].index;
                break
              }
            }
          } else
            for (var WB = 0; WB < GB; WB++)
              if (0 === WB && BB <= (ZB[WB].coordinate + ZB[WB + 1].coordinate) / 2 || WB > 0 && WB < GB - 1 && BB > (ZB[WB].coordinate + ZB[WB - 1].coordinate) / 2 && BB <= (ZB[WB].coordinate + ZB[WB + 1].coordinate) / 2 || WB === GB - 1 && BB > (ZB[WB].coordinate + ZB[WB - 1].coordinate) / 2) {
                oB = ZB[WB].index;
                break
              } return oB
      },
      HG = function(BB) {
        var IB, ZB, TB = BB.type.displayName,
          JB = null !== (IB = BB.type) && void 0 !== IB && IB.defaultProps ? OG(OG({}, BB.type.defaultProps), BB.props) : BB.props,
          oB = JB.stroke,
          GB = JB.fill;
        switch (TB) {
          case "Line":
            ZB = oB;
            break;
          case "Area":
          case "Radar":
            ZB = oB && "none" !== oB ? oB : GB;
            break;
          default:
            ZB = GB
        }
        return ZB
      },
      MG = function(BB) {
        var IB = BB.barSize,
          ZB = BB.totalSize,
          TB = BB.stackGroups,
          JB = void 0 === TB ? {} : TB;
        if (!JB) return {};
        for (var oB = {}, GB = Object.keys(JB), vB = 0, kB = GB.length; vB < kB; vB++)
          for (var cB = JB[GB[vB]].stackGroups, nB = Object.keys(cB), hB = 0, zB = nB.length; hB < zB; hB++) {
            var FB = cB[nB[hB]],
              NB = FB.items,
              gB = FB.cateAxisId,
              qB = NB.filter((function(BB) {
                return (0, WG.m)(BB.type).indexOf("Bar") >= 0
              }));
            if (qB && qB.length) {
              var yB = qB[0].type.defaultProps,
                UB = void 0 !== yB ? OG(OG({}, yB), qB[0].props) : qB[0].props,
                WB = UB.barSize,
                dB = UB[gB];
              oB[dB] || (oB[dB] = []);
              var CB = Oo()(WB) ? IB : WB;
              oB[dB].push({
                item: qB[0],
                stackList: qB.slice(1),
                barSize: Oo()(CB) ? void 0 : (0, UG.l)(CB, ZB, 0)
              })
            }
          }
        return oB
      },
      jG = function(BB) {
        var IB = BB.barGap,
          ZB = BB.barCategoryGap,
          TB = BB.bandSize,
          JB = BB.sizeList,
          oB = void 0 === JB ? [] : JB,
          GB = BB.maxBarSize,
          vB = oB.length;
        if (vB < 1) return null;
        var kB, cB = (0, UG.l)(IB, TB, 0, !0),
          nB = [];
        if (oB[0].barSize === +oB[0].barSize) {
          var hB = !1,
            zB = TB / vB,
            FB = oB.reduce((function(BB, IB) {
              return BB + IB.barSize || 0
            }), 0);
          (FB += (vB - 1) * cB) >= TB && (FB -= (vB - 1) * cB, cB = 0), FB >= TB && zB > 0 && (hB = !0, FB = vB * (zB *= .9));
          var NB = {
            offset: ((TB - FB) / 2 | 0) - cB,
            size: 0
          };
          kB = oB.reduce((function(BB, IB) {
            var ZB = {
                item: IB.item,
                position: {
                  offset: NB.offset + NB.size + cB,
                  size: hB ? zB : IB.barSize
                }
              },
              TB = [].concat(QG(BB), [ZB]);
            return NB = TB[TB.length - 1].position, IB.stackList && IB.stackList.length && IB.stackList.forEach((function(BB) {
              TB.push({
                item: BB,
                position: NB
              })
            })), TB
          }), nB)
        } else {
          var gB = (0, UG.l)(ZB, TB, 0, !0);
          TB - 2 * gB - (vB - 1) * cB <= 0 && (cB = 0);
          var qB = (TB - 2 * gB - (vB - 1) * cB) / vB;
          qB > 1 && (qB >>= 0);
          var yB = GB === +GB ? Math.min(qB, GB) : qB;
          kB = oB.reduce((function(BB, IB, ZB) {
            var TB = [].concat(QG(BB), [{
              item: IB.item,
              position: {
                offset: gB + (qB + cB) * ZB + (qB - yB) / 2,
                size: yB
              }
            }]);
            return IB.stackList && IB.stackList.length && IB.stackList.forEach((function(BB) {
              TB.push({
                item: BB,
                position: TB[TB.length - 1].position
              })
            })), TB
          }), nB)
        }
        return kB
      },
      PG = function(BB, IB, ZB, TB) {
        var JB = ZB.children,
          oB = ZB.width,
          GB = ZB.margin,
          vB = oB - (GB.left || 0) - (GB.right || 0),
          kB = (0, dG.d)({
            children: JB,
            legendWidth: vB
          });
        if (kB) {
          var cB = TB || {},
            nB = cB.width,
            hB = cB.height,
            zB = kB.align,
            FB = kB.verticalAlign,
            NB = kB.layout;
          if (("vertical" === NB || "horizontal" === NB && "middle" === FB) && "center" !== zB && (0, UG.w)(BB[zB])) return OG(OG({}, BB), {}, YG({}, zB, BB[zB] + (nB || 0)));
          if (("horizontal" === NB || "vertical" === NB && "center" === zB) && "middle" !== FB && (0, UG.w)(BB[FB])) return OG(OG({}, BB), {}, YG({}, FB, BB[FB] + (hB || 0)))
        }
        return BB
      },
      RG = function(BB, IB, ZB, TB, JB) {
        var oB = IB.props.children,
          GB = (0, WG.g)(oB, yG.d).filter((function(BB) {
            return function(BB, IB, ZB) {
              return !!Oo()(IB) || ("horizontal" === BB ? "yAxis" === IB : "vertical" === BB || "x" === ZB ? "xAxis" === IB : "y" !== ZB || "yAxis" === IB)
            }(TB, JB, BB.props.direction)
          }));
        if (GB && GB.length) {
          var vB = GB.map((function(BB) {
            return BB.props.dataKey
          }));
          return BB.reduce((function(BB, IB) {
            var TB = iG(IB, ZB);
            if (Oo()(TB)) return BB;
            var JB = Array.isArray(TB) ? [so()(TB), Co()(TB)] : [TB, TB],
              oB = vB.reduce((function(BB, ZB) {
                var TB = iG(IB, ZB, 0),
                  oB = JB[0] - Math.abs(Array.isArray(TB) ? TB[0] : TB),
                  GB = JB[1] + Math.abs(Array.isArray(TB) ? TB[1] : TB);
                return [Math.min(oB, BB[0]), Math.max(GB, BB[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(oB[0], BB[0]), Math.max(oB[1], BB[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      rG = function(BB, IB, ZB, TB, JB) {
        var oB = IB.map((function(IB) {
          return RG(BB, IB, ZB, JB, TB)
        })).filter((function(BB) {
          return !Oo()(BB)
        }));
        return oB && oB.length ? oB.reduce((function(BB, IB) {
          return [Math.min(BB[0], IB[0]), Math.max(BB[1], IB[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      mG = function(BB, IB, ZB, TB, JB) {
        var oB = IB.map((function(IB) {
          var oB = IB.props.dataKey;
          return "number" === ZB && oB && RG(BB, IB, oB, TB) || pG(BB, oB, ZB, JB)
        }));
        if ("number" === ZB) return oB.reduce((function(BB, IB) {
          return [Math.min(BB[0], IB[0]), Math.max(BB[1], IB[1])]
        }), [1 / 0, -1 / 0]);
        var GB = {};
        return oB.reduce((function(BB, IB) {
          for (var ZB = 0, TB = IB.length; ZB < TB; ZB++) GB[IB[ZB]] || (GB[IB[ZB]] = !0, BB.push(IB[ZB]));
          return BB
        }), [])
      },
      XG = function(BB, IB) {
        return "horizontal" === BB && "xAxis" === IB || "vertical" === BB && "yAxis" === IB || "centric" === BB && "angleAxis" === IB || "radial" === BB && "radiusAxis" === IB
      },
      LG = function(BB, IB, ZB, TB) {
        if (TB) return BB.map((function(BB) {
          return BB.coordinate
        }));
        var JB, oB, GB = BB.map((function(BB) {
          return BB.coordinate === IB && (JB = !0), BB.coordinate === ZB && (oB = !0), BB.coordinate
        }));
        return JB || GB.push(IB), oB || GB.push(ZB), GB
      },
      eG = function(BB, IB, ZB) {
        if (!BB) return null;
        var TB = BB.scale,
          JB = BB.duplicateDomain,
          oB = BB.type,
          GB = BB.range,
          vB = "scaleBand" === BB.realScaleType ? TB.bandwidth() / 2 : 2,
          kB = (IB || ZB) && "category" === oB && TB.bandwidth ? TB.bandwidth() / vB : 0;
        return kB = "angleAxis" === BB.axisType && (null === GB || void 0 === GB ? void 0 : GB.length) >= 2 ? 2 * (0, UG.y)(GB[0] - GB[1]) * kB : kB, IB && (BB.ticks || BB.niceTicks) ? (BB.ticks || BB.niceTicks).map((function(BB) {
          var IB = JB ? JB.indexOf(BB) : BB;
          return {
            coordinate: TB(IB) + kB,
            value: BB,
            offset: kB
          }
        })).filter((function(BB) {
          return !ro()(BB.coordinate)
        })) : BB.isCategorical && BB.categoricalDomain ? BB.categoricalDomain.map((function(BB, IB) {
          return {
            coordinate: TB(BB) + kB,
            value: BB,
            index: IB,
            offset: kB
          }
        })) : TB.ticks && !ZB ? TB.ticks(BB.tickCount).map((function(BB) {
          return {
            coordinate: TB(BB) + kB,
            value: BB,
            offset: kB
          }
        })) : TB.domain().map((function(BB, IB) {
          return {
            coordinate: TB(BB) + kB,
            value: JB ? JB[BB] : BB,
            index: IB,
            offset: kB
          }
        }))
      },
      uG = new WeakMap,
      fG = function(BB, IB) {
        if ("function" !== typeof IB) return BB;
        uG.has(BB) || uG.set(BB, new WeakMap);
        var ZB = uG.get(BB);
        if (ZB.has(IB)) return ZB.get(IB);
        var TB = function() {
          BB.apply(void 0, arguments), IB.apply(void 0, arguments)
        };
        return ZB.set(IB, TB), TB
      },
      lG = function(BB, IB, ZB) {
        var oB = BB.scale,
          GB = BB.type,
          vB = BB.layout,
          kB = BB.axisType;
        if ("auto" === oB) return "radial" === vB && "radiusAxis" === kB ? {
          scale: JB.e(),
          realScaleType: "band"
        } : "radial" === vB && "angleAxis" === kB ? {
          scale: xI(),
          realScaleType: "linear"
        } : "category" === GB && IB && (IB.indexOf("LineChart") >= 0 || IB.indexOf("AreaChart") >= 0 || IB.indexOf("ComposedChart") >= 0 && !ZB) ? {
          scale: JB.h(),
          realScaleType: "point"
        } : "category" === GB ? {
          scale: JB.e(),
          realScaleType: "band"
        } : {
          scale: xI(),
          realScaleType: "linear"
        };
        if (ao()(oB)) {
          var cB = "scale".concat(Xo()(oB));
          return {
            scale: (TB[cB] || JB.h)(),
            realScaleType: TB[cB] ? cB : "point"
          }
        }
        return io()(oB) ? {
          scale: oB
        } : {
          scale: JB.h(),
          realScaleType: "point"
        }
      },
      AG = 1e-4,
      tG = function(BB) {
        var IB = BB.domain();
        if (IB && !(IB.length <= 2)) {
          var ZB = IB.length,
            TB = BB.range(),
            JB = Math.min(TB[0], TB[1]) - AG,
            oB = Math.max(TB[0], TB[1]) + AG,
            GB = BB(IB[0]),
            vB = BB(IB[ZB - 1]);
          (GB < JB || GB > oB || vB < JB || vB > oB) && BB.domain([IB[0], IB[ZB - 1]])
        }
      },
      bG = function(BB, IB) {
        if (!BB) return null;
        for (var ZB = 0, TB = BB.length; ZB < TB; ZB++)
          if (BB[ZB].item === IB) return BB[ZB].position;
        return null
      },
      xG = function(BB, IB) {
        if (!IB || 2 !== IB.length || !(0, UG.w)(IB[0]) || !(0, UG.w)(IB[1])) return BB;
        var ZB = Math.min(IB[0], IB[1]),
          TB = Math.max(IB[0], IB[1]),
          JB = [BB[0], BB[1]];
        return (!(0, UG.w)(BB[0]) || BB[0] < ZB) && (JB[0] = ZB), (!(0, UG.w)(BB[1]) || BB[1] > TB) && (JB[1] = TB), JB[0] > TB && (JB[0] = TB), JB[1] < ZB && (JB[1] = ZB), JB
      },
      EG = {
        sign: function(BB) {
          var IB = BB.length;
          if (!(IB <= 0))
            for (var ZB = 0, TB = BB[0].length; ZB < TB; ++ZB)
              for (var JB = 0, oB = 0, GB = 0; GB < IB; ++GB) {
                var vB = ro()(BB[GB][ZB][1]) ? BB[GB][ZB][0] : BB[GB][ZB][1];
                vB >= 0 ? (BB[GB][ZB][0] = JB, BB[GB][ZB][1] = JB + vB, JB = BB[GB][ZB][1]) : (BB[GB][ZB][0] = oB, BB[GB][ZB][1] = oB + vB, oB = BB[GB][ZB][1])
              }
        },
        expand: function(BB, IB) {
          if ((TB = BB.length) > 0) {
            for (var ZB, TB, JB, oB = 0, GB = BB[0].length; oB < GB; ++oB) {
              for (JB = ZB = 0; ZB < TB; ++ZB) JB += BB[ZB][oB][1] || 0;
              if (JB)
                for (ZB = 0; ZB < TB; ++ZB) BB[ZB][oB][1] /= JB
            }
            Fo(BB, IB)
          }
        },
        none: Fo,
        silhouette: function(BB, IB) {
          if ((ZB = BB.length) > 0) {
            for (var ZB, TB = 0, JB = BB[IB[0]], oB = JB.length; TB < oB; ++TB) {
              for (var GB = 0, vB = 0; GB < ZB; ++GB) vB += BB[GB][TB][1] || 0;
              JB[TB][1] += JB[TB][0] = -vB / 2
            }
            Fo(BB, IB)
          }
        },
        wiggle: function(BB, IB) {
          if ((JB = BB.length) > 0 && (TB = (ZB = BB[IB[0]]).length) > 0) {
            for (var ZB, TB, JB, oB = 0, GB = 1; GB < TB; ++GB) {
              for (var vB = 0, kB = 0, cB = 0; vB < JB; ++vB) {
                for (var nB = BB[IB[vB]], hB = nB[GB][1] || 0, zB = (hB - (nB[GB - 1][1] || 0)) / 2, FB = 0; FB < vB; ++FB) {
                  var NB = BB[IB[FB]];
                  zB += (NB[GB][1] || 0) - (NB[GB - 1][1] || 0)
                }
                kB += hB, cB += zB * hB
              }
              ZB[GB - 1][1] += ZB[GB - 1][0] = oB, kB && (oB -= cB / kB)
            }
            ZB[GB - 1][1] += ZB[GB - 1][0] = oB, Fo(BB, IB)
          }
        },
        positive: function(BB) {
          var IB = BB.length;
          if (!(IB <= 0))
            for (var ZB = 0, TB = BB[0].length; ZB < TB; ++ZB)
              for (var JB = 0, oB = 0; oB < IB; ++oB) {
                var GB = ro()(BB[oB][ZB][1]) ? BB[oB][ZB][0] : BB[oB][ZB][1];
                GB >= 0 ? (BB[oB][ZB][0] = JB, BB[oB][ZB][1] = JB + GB, JB = BB[oB][ZB][1]) : (BB[oB][ZB][0] = 0, BB[oB][ZB][1] = 0)
              }
        }
      },
      DG = function(BB, IB, ZB) {
        var TB = IB.map((function(BB) {
            return BB.props.dataKey
          })),
          JB = EG[ZB],
          oB = function() {
            var BB = (0, go.b)([]),
              IB = qo,
              ZB = Fo,
              TB = yo;

            function JB(JB) {
              var oB, GB, vB = Array.from(BB.apply(this, arguments), Uo),
                kB = vB.length,
                cB = -1;
              for (const BB of JB)
                for (oB = 0, ++cB; oB < kB; ++oB)(vB[oB][cB] = [0, +TB(BB, vB[oB].key, cB, JB)]).data = BB;
              for (oB = 0, GB = (0, No.b)(IB(vB)); oB < kB; ++oB) vB[GB[oB]].index = oB;
              return ZB(vB, GB), vB
            }
            return JB.keys = function(IB) {
              return arguments.length ? (BB = "function" === typeof IB ? IB : (0, go.b)(Array.from(IB)), JB) : BB
            }, JB.value = function(BB) {
              return arguments.length ? (TB = "function" === typeof BB ? BB : (0, go.b)(+BB), JB) : TB
            }, JB.order = function(BB) {
              return arguments.length ? (IB = null == BB ? qo : "function" === typeof BB ? BB : (0, go.b)(Array.from(BB)), JB) : IB
            }, JB.offset = function(BB) {
              return arguments.length ? (ZB = null == BB ? Fo : BB, JB) : ZB
            }, JB
          }().keys(TB).value((function(BB, IB) {
            return +iG(BB, IB, 0)
          })).order(qo).offset(JB);
        return oB(BB)
      },
      KG = function(BB, IB, ZB, TB, JB, oB) {
        if (!BB) return null;
        var GB = (oB ? IB.reverse() : IB).reduce((function(BB, IB) {
          var JB, oB = null !== (JB = IB.type) && void 0 !== JB && JB.defaultProps ? OG(OG({}, IB.type.defaultProps), IB.props) : IB.props,
            GB = oB.stackId;
          if (oB.hide) return BB;
          var vB = oB[ZB],
            kB = BB[vB] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, UG.u)(GB)) {
            var cB = kB.stackGroups[GB] || {
              numericAxisId: ZB,
              cateAxisId: TB,
              items: []
            };
            cB.items.push(IB), kB.hasStack = !0, kB.stackGroups[GB] = cB
          } else kB.stackGroups[(0, UG.z)("_stackId_")] = {
            numericAxisId: ZB,
            cateAxisId: TB,
            items: [IB]
          };
          return OG(OG({}, BB), {}, YG({}, vB, kB))
        }), {});
        return Object.keys(GB).reduce((function(IB, oB) {
          var vB = GB[oB];
          if (vB.hasStack) {
            vB.stackGroups = Object.keys(vB.stackGroups).reduce((function(IB, oB) {
              var GB = vB.stackGroups[oB];
              return OG(OG({}, IB), {}, YG({}, oB, {
                numericAxisId: ZB,
                cateAxisId: TB,
                items: GB.items,
                stackedData: DG(BB, GB.items, JB)
              }))
            }), {})
          }
          return OG(OG({}, IB), {}, YG({}, oB, vB))
        }), {})
      },
      VG = function(BB, IB) {
        var ZB = IB.realScaleType,
          TB = IB.type,
          JB = IB.tickCount,
          oB = IB.originalDomain,
          GB = IB.allowDecimals,
          vB = ZB || IB.scale;
        if ("auto" !== vB && "linear" !== vB) return null;
        if (JB && "number" === TB && oB && ("auto" === oB[0] || "auto" === oB[1])) {
          var kB = BB.domain();
          if (!kB.length) return null;
          var cB = gG(kB, JB, GB);
          return BB.domain([so()(cB), Co()(cB)]), {
            niceTicks: cB
          }
        }
        if (JB && "number" === TB) {
          var nB = BB.domain();
          return {
            niceTicks: qG(nB, JB, GB)
          }
        }
        return null
      };

    function SG(BB) {
      var IB = BB.axis,
        ZB = BB.ticks,
        TB = BB.bandSize,
        JB = BB.entry,
        oB = BB.index,
        GB = BB.dataKey;
      if ("category" === IB.type) {
        if (!IB.allowDuplicatedCategory && IB.dataKey && !Oo()(JB[IB.dataKey])) {
          var vB = (0, UG.e)(ZB, "value", JB[IB.dataKey]);
          if (vB) return vB.coordinate + TB / 2
        }
        return ZB[oB] ? ZB[oB].coordinate + TB / 2 : null
      }
      var kB = iG(JB, Oo()(GB) ? IB.dataKey : GB);
      return Oo()(kB) ? null : IB.scale(kB)
    }
    var Bv = function(BB) {
        var IB = BB.axis,
          ZB = BB.ticks,
          TB = BB.offset,
          JB = BB.bandSize,
          oB = BB.entry,
          GB = BB.index;
        if ("category" === IB.type) return ZB[GB] ? ZB[GB].coordinate + TB : null;
        var vB = iG(oB, IB.dataKey, IB.domain[GB]);
        return Oo()(vB) ? null : IB.scale(vB) - JB / 2 + TB
      },
      Iv = function(BB) {
        var IB = BB.numericAxis,
          ZB = IB.scale.domain();
        if ("number" === IB.type) {
          var TB = Math.min(ZB[0], ZB[1]),
            JB = Math.max(ZB[0], ZB[1]);
          return TB <= 0 && JB >= 0 ? 0 : JB < 0 ? JB : TB
        }
        return ZB[0]
      },
      Zv = function(BB, IB) {
        var ZB, TB = (null !== (ZB = BB.type) && void 0 !== ZB && ZB.defaultProps ? OG(OG({}, BB.type.defaultProps), BB.props) : BB.props).stackId;
        if ((0, UG.u)(TB)) {
          var JB = IB[TB];
          if (JB) {
            var oB = JB.items.indexOf(BB);
            return oB >= 0 ? JB.stackedData[oB] : null
          }
        }
        return null
      },
      Tv = function(BB, IB, ZB) {
        return Object.keys(BB).reduce((function(TB, JB) {
          var oB = BB[JB].stackedData.reduce((function(BB, TB) {
            var JB = TB.slice(IB, ZB + 1).reduce((function(BB, IB) {
              return [so()(IB.concat([BB[0]]).filter(UG.w)), Co()(IB.concat([BB[1]]).filter(UG.w))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(BB[0], JB[0]), Math.max(BB[1], JB[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(oB[0], TB[0]), Math.max(oB[1], TB[1])]
        }), [1 / 0, -1 / 0]).map((function(BB) {
          return BB === 1 / 0 || BB === -1 / 0 ? 0 : BB
        }))
      },
      Jv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      ov = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Gv = function(BB, IB, ZB) {
        if (io()(BB)) return BB(IB, ZB);
        if (!Array.isArray(BB)) return IB;
        var TB = [];
        if ((0, UG.w)(BB[0])) TB[0] = ZB ? BB[0] : Math.min(BB[0], IB[0]);
        else if (Jv.test(BB[0])) {
          var JB = +Jv.exec(BB[0])[1];
          TB[0] = IB[0] - JB
        } else io()(BB[0]) ? TB[0] = BB[0](IB[0]) : TB[0] = IB[0];
        if ((0, UG.w)(BB[1])) TB[1] = ZB ? BB[1] : Math.max(BB[1], IB[1]);
        else if (ov.test(BB[1])) {
          var oB = +ov.exec(BB[1])[1];
          TB[1] = IB[1] + oB
        } else io()(BB[1]) ? TB[1] = BB[1](IB[1]) : TB[1] = IB[1];
        return TB
      },
      vv = function(BB, IB, ZB) {
        if (BB && BB.scale && BB.scale.bandwidth) {
          var TB = BB.scale.bandwidth();
          if (!ZB || TB > 0) return TB
        }
        if (BB && IB && IB.length >= 2) {
          for (var JB = fo()(IB, (function(BB) {
              return BB.coordinate
            })), oB = 1 / 0, GB = 1, vB = JB.length; GB < vB; GB++) {
            var kB = JB[GB],
              cB = JB[GB - 1];
            oB = Math.min((kB.coordinate || 0) - (cB.coordinate || 0), oB)
          }
          return oB === 1 / 0 ? 0 : oB
        }
        return ZB ? void 0 : 0
      },
      kv = function(BB, IB, ZB) {
        return BB && BB.length ? eo()(BB, Mo()(ZB, "type.defaultProps.domain")) ? IB : BB : IB
      },
      cv = function(BB, IB) {
        var ZB = BB.type.defaultProps ? OG(OG({}, BB.type.defaultProps), BB.props) : BB.props,
          TB = ZB.dataKey,
          JB = ZB.name,
          oB = ZB.unit,
          GB = ZB.formatter,
          vB = ZB.tooltipType,
          kB = ZB.chartType,
          cB = ZB.hide;
        return OG(OG({}, (0, WG.e)(BB, !1)), {}, {
          dataKey: TB,
          unit: oB,
          formatter: GB,
          name: JB || TB,
          color: HG(BB),
          value: iG(IB, TB),
          type: vB,
          payload: IB,
          chartType: kB,
          hide: cB
        })
      }
  },
  6280: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => zB,
      g: () => hB
    });
    var TB = ZB(6132);

    function JB(BB) {
      return JB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, JB(BB)
    }

    function oB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function GB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? oB(Object(ZB), !0).forEach((function(IB) {
          vB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : oB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function vB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != JB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != JB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == JB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }
    var kB = {
        widthCache: {},
        cacheCount: 0
      },
      cB = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      nB = "recharts_measurement_span";
    var hB = function(BB) {
        var IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === BB || null === BB || TB.e.isSsr) return {
          width: 0,
          height: 0
        };
        var ZB = function(BB) {
            var IB = GB({}, BB);
            return Object.keys(IB).forEach((function(BB) {
              IB[BB] || delete IB[BB]
            })), IB
          }(IB),
          JB = JSON.stringify({
            text: BB,
            copyStyle: ZB
          });
        if (kB.widthCache[JB]) return kB.widthCache[JB];
        try {
          var oB = document.getElementById(nB);
          oB || ((oB = document.createElement("span")).setAttribute("id", nB), oB.setAttribute("aria-hidden", "true"), document.body.appendChild(oB));
          var vB = GB(GB({}, cB), ZB);
          Object.assign(oB.style, vB), oB.textContent = "".concat(BB);
          var hB = oB.getBoundingClientRect(),
            zB = {
              width: hB.width,
              height: hB.height
            };
          return kB.widthCache[JB] = zB, ++kB.cacheCount > 2e3 && (kB.cacheCount = 0, kB.widthCache = {}), zB
        } catch (FB) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      zB = function(BB) {
        return {
          top: BB.top + window.scrollY - document.documentElement.clientTop,
          left: BB.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  5335: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => YB,
      e: () => wB,
      i: () => CB,
      k: () => OB,
      l: () => dB,
      m: () => QB,
      q: () => sB,
      s: () => qB,
      u: () => yB,
      w: () => gB,
      x: () => NB,
      y: () => FB,
      z: () => WB
    });
    var TB = ZB(5341),
      JB = ZB.n(TB),
      oB = ZB(5348),
      GB = ZB.n(oB),
      vB = ZB(5357),
      kB = ZB.n(vB),
      cB = ZB(5350),
      nB = ZB.n(cB),
      hB = ZB(5563),
      zB = ZB.n(hB),
      FB = function(BB) {
        return 0 === BB ? 0 : BB > 0 ? 1 : -1
      },
      NB = function(BB) {
        return JB()(BB) && BB.indexOf("%") === BB.length - 1
      },
      gB = function(BB) {
        return nB()(BB) && !GB()(BB)
      },
      qB = function(BB) {
        return zB()(BB)
      },
      yB = function(BB) {
        return gB(BB) || JB()(BB)
      },
      UB = 0,
      WB = function(BB) {
        var IB = ++UB;
        return "".concat(BB || "").concat(IB)
      },
      dB = function(BB, IB) {
        var ZB, TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          oB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!gB(BB) && !JB()(BB)) return TB;
        if (NB(BB)) {
          var vB = BB.indexOf("%");
          ZB = IB * parseFloat(BB.slice(0, vB)) / 100
        } else ZB = +BB;
        return GB()(ZB) && (ZB = TB), oB && ZB > IB && (ZB = IB), ZB
      },
      CB = function(BB) {
        if (!BB) return null;
        var IB = Object.keys(BB);
        return IB && IB.length ? BB[IB[0]] : null
      },
      QB = function(BB) {
        if (!Array.isArray(BB)) return !1;
        for (var IB = BB.length, ZB = {}, TB = 0; TB < IB; TB++) {
          if (ZB[BB[TB]]) return !0;
          ZB[BB[TB]] = !0
        }
        return !1
      },
      sB = function(BB, IB) {
        return gB(BB) && gB(IB) ? function(ZB) {
          return BB + ZB * (IB - BB)
        } : function() {
          return IB
        }
      };

    function wB(BB, IB, ZB) {
      return BB && BB.length ? BB.find((function(BB) {
        return BB && ("function" === typeof IB ? IB(BB) : kB()(BB, IB)) === ZB
      })) : null
    }
    var OB = function(BB) {
        if (!BB || !BB.length) return null;
        for (var IB = BB.length, ZB = 0, TB = 0, JB = 0, oB = 0, GB = 1 / 0, vB = -1 / 0, kB = 0, cB = 0, nB = 0; nB < IB; nB++) ZB += kB = BB[nB].cx || 0, TB += cB = BB[nB].cy || 0, JB += kB * cB, oB += kB * kB, GB = Math.min(GB, kB), vB = Math.max(vB, kB);
        var hB = IB * oB !== ZB * ZB ? (IB * JB - ZB * TB) / (IB * oB - ZB * ZB) : 0;
        return {
          xmin: GB,
          xmax: vB,
          a: hB,
          b: (TB - hB * ZB) / IB
        }
      },
      YB = function(BB, IB) {
        return gB(BB) && gB(IB) ? BB - IB : JB()(BB) && JB()(IB) ? BB.localeCompare(IB) : BB instanceof Date && IB instanceof Date ? BB.getTime() - IB.getTime() : String(BB).localeCompare(String(IB))
      }
  },
  6132: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB
    });
    var TB = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(BB) {
        return TB[BB]
      },
      set: function(BB, IB) {
        if ("string" === typeof BB) TB[BB] = IB;
        else {
          var ZB = Object.keys(BB);
          ZB && ZB.length && ZB.forEach((function(IB) {
            TB[IB] = BB[IB]
          }))
        }
      }
    }
  },
  6377: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB
    });
    var TB = function(BB, IB) {
      var ZB = BB.alwaysShow,
        TB = BB.ifOverflow;
      return ZB && (TB = "extendDomain"), TB === IB
    }
  },
  5570: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB
    });
    var TB = function(BB, IB) {
      for (var ZB = arguments.length, TB = new Array(ZB > 2 ? ZB - 2 : 0), JB = 2; JB < ZB; JB++) TB[JB - 2] = arguments[JB]
    }
  },
  6373: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => vB,
      f: () => zB,
      i: () => cB
    });
    ZB(5563), ZB(63), ZB(5425);

    function TB(BB) {
      return TB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, TB(BB)
    }

    function JB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function oB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? JB(Object(ZB), !0).forEach((function(IB) {
          GB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : JB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function GB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != TB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var JB = ZB.call(BB, IB || "default");
            if ("object" != TB(JB)) return JB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == TB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }
    var vB = Math.PI / 180,
      kB = function(BB) {
        return 180 * BB / Math.PI
      },
      cB = function(BB, IB, ZB, TB) {
        return {
          x: BB + Math.cos(-vB * TB) * ZB,
          y: IB + Math.sin(-vB * TB) * ZB
        }
      },
      nB = function(BB, IB) {
        var ZB = BB.x,
          TB = BB.y,
          JB = IB.cx,
          oB = IB.cy,
          GB = function(BB, IB) {
            var ZB = BB.x,
              TB = BB.y,
              JB = IB.x,
              oB = IB.y;
            return Math.sqrt(Math.pow(ZB - JB, 2) + Math.pow(TB - oB, 2))
          }({
            x: ZB,
            y: TB
          }, {
            x: JB,
            y: oB
          });
        if (GB <= 0) return {
          radius: GB
        };
        var vB = (ZB - JB) / GB,
          cB = Math.acos(vB);
        return TB > oB && (cB = 2 * Math.PI - cB), {
          radius: GB,
          angle: kB(cB),
          angleInRadian: cB
        }
      },
      hB = function(BB, IB) {
        var ZB = IB.startAngle,
          TB = IB.endAngle,
          JB = Math.floor(ZB / 360),
          oB = Math.floor(TB / 360);
        return BB + 360 * Math.min(JB, oB)
      },
      zB = function(BB, IB) {
        var ZB = BB.x,
          TB = BB.y,
          JB = nB({
            x: ZB,
            y: TB
          }, IB),
          GB = JB.radius,
          vB = JB.angle,
          kB = IB.innerRadius,
          cB = IB.outerRadius;
        if (GB < kB || GB > cB) return !1;
        if (0 === GB) return !0;
        var zB, FB = function(BB) {
            var IB = BB.startAngle,
              ZB = BB.endAngle,
              TB = Math.floor(IB / 360),
              JB = Math.floor(ZB / 360),
              oB = Math.min(TB, JB);
            return {
              startAngle: IB - 360 * oB,
              endAngle: ZB - 360 * oB
            }
          }(IB),
          NB = FB.startAngle,
          gB = FB.endAngle,
          qB = vB;
        if (NB <= gB) {
          for (; qB > gB;) qB -= 360;
          for (; qB < NB;) qB += 360;
          zB = qB >= NB && qB <= gB
        } else {
          for (; qB > NB;) qB -= 360;
          for (; qB < gB;) qB += 360;
          zB = qB >= gB && qB <= NB
        }
        return zB ? oB(oB({}, IB), {}, {
          radius: GB,
          angle: hB(qB, IB)
        }) : null
      }
  },
  5573: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => mB,
      B: () => aB,
      e: () => PB,
      g: () => iB,
      k: () => pB,
      m: () => sB,
      q: () => XB,
      s: () => jB,
      w: () => RB,
      z: () => LB
    });
    var TB = ZB(5357),
      JB = ZB.n(TB),
      oB = ZB(5563),
      GB = ZB.n(oB),
      vB = ZB(5341),
      kB = ZB.n(vB),
      cB = ZB(5425),
      nB = ZB.n(cB),
      hB = ZB(5269),
      zB = ZB.n(hB),
      FB = ZB(63),
      NB = ZB(5578),
      gB = ZB(5335),
      qB = ZB(5592),
      yB = ZB(5594),
      UB = ["children"],
      WB = ["children"];

    function dB(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB = {};
        for (var TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) {
            if (IB.indexOf(TB) >= 0) continue;
            ZB[TB] = BB[TB]
          } return ZB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }

    function CB(BB) {
      return CB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, CB(BB)
    }
    var QB = {
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
      sB = function(BB) {
        return "string" === typeof BB ? BB : BB ? BB.displayName || BB.name || "Component" : ""
      },
      wB = null,
      OB = null,
      YB = function BB(IB) {
        if (IB === wB && Array.isArray(OB)) return OB;
        var ZB = [];
        return FB.Children.forEach(IB, (function(IB) {
          GB()(IB) || ((0, NB.isFragment)(IB) ? ZB = ZB.concat(BB(IB.props.children)) : ZB.push(IB))
        })), OB = ZB, wB = IB, ZB
      };

    function iB(BB, IB) {
      var ZB = [],
        TB = [];
      return TB = Array.isArray(IB) ? IB.map((function(BB) {
        return sB(BB)
      })) : [sB(IB)], YB(BB).forEach((function(BB) {
        var IB = JB()(BB, "type.displayName") || JB()(BB, "type.name"); - 1 !== TB.indexOf(IB) && ZB.push(BB)
      })), ZB
    }

    function pB(BB, IB) {
      var ZB = iB(BB, IB);
      return ZB && ZB[0]
    }
    var aB = function(BB) {
        if (!BB || !BB.props) return !1;
        var IB = BB.props,
          ZB = IB.width,
          TB = IB.height;
        return !(!(0, gB.w)(ZB) || ZB <= 0 || !(0, gB.w)(TB) || TB <= 0)
      },
      HB = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      MB = function(BB) {
        return BB && BB.type && kB()(BB.type) && HB.indexOf(BB.type) >= 0
      },
      jB = function(BB) {
        return BB && "object" === CB(BB) && "clipDot" in BB
      },
      PB = function(BB, IB, ZB) {
        if (!BB || "function" === typeof BB || "boolean" === typeof BB) return null;
        var TB = BB;
        if ((0, FB.isValidElement)(BB) && (TB = BB.props), !zB()(TB)) return null;
        var JB = {};
        return Object.keys(TB).forEach((function(BB) {
          var oB;
          (function(BB, IB, ZB, TB) {
            var JB, oB = null !== (JB = null === yB.f || void 0 === yB.f ? void 0 : yB.f[TB]) && void 0 !== JB ? JB : [];
            return IB.startsWith("data-") || !nB()(BB) && (TB && oB.includes(IB) || yB.g.includes(IB)) || ZB && yB.c.includes(IB)
          })(null === (oB = TB) || void 0 === oB ? void 0 : oB[BB], BB, IB, ZB) && (JB[BB] = TB[BB])
        })), JB
      },
      RB = function BB(IB, ZB) {
        if (IB === ZB) return !0;
        var TB = FB.Children.count(IB);
        if (TB !== FB.Children.count(ZB)) return !1;
        if (0 === TB) return !0;
        if (1 === TB) return rB(Array.isArray(IB) ? IB[0] : IB, Array.isArray(ZB) ? ZB[0] : ZB);
        for (var JB = 0; JB < TB; JB++) {
          var oB = IB[JB],
            GB = ZB[JB];
          if (Array.isArray(oB) || Array.isArray(GB)) {
            if (!BB(oB, GB)) return !1
          } else if (!rB(oB, GB)) return !1
        }
        return !0
      },
      rB = function(BB, IB) {
        if (GB()(BB) && GB()(IB)) return !0;
        if (!GB()(BB) && !GB()(IB)) {
          var ZB = BB.props || {},
            TB = ZB.children,
            JB = dB(ZB, UB),
            oB = IB.props || {},
            vB = oB.children,
            kB = dB(oB, WB);
          return TB && vB ? (0, qB.c)(JB, kB) && RB(TB, vB) : !TB && !vB && (0, qB.c)(JB, kB)
        }
        return !1
      },
      mB = function(BB, IB) {
        var ZB = [],
          TB = {};
        return YB(BB).forEach((function(BB, JB) {
          if (MB(BB)) ZB.push(BB);
          else if (BB) {
            var oB = sB(BB.type),
              GB = IB[oB] || {},
              vB = GB.handler,
              kB = GB.once;
            if (vB && (!kB || !TB[oB])) {
              var cB = vB(BB, oB, JB);
              ZB.push(cB), TB[oB] = !0
            }
          }
        })), ZB
      },
      XB = function(BB) {
        var IB = BB && BB.type;
        return IB && QB[IB] ? QB[IB] : null
      },
      LB = function(BB, IB) {
        return YB(IB).indexOf(BB)
      }
  },
  5592: (BB, IB, ZB) => {
    function TB(BB, IB) {
      for (var ZB in BB)
        if ({}.hasOwnProperty.call(BB, ZB) && (!{}.hasOwnProperty.call(IB, ZB) || BB[ZB] !== IB[ZB])) return !1;
      for (var TB in IB)
        if ({}.hasOwnProperty.call(IB, TB) && !{}.hasOwnProperty.call(BB, TB)) return !1;
      return !0
    }
    ZB.d(IB, {
      c: () => TB
    })
  },
  6350: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => nB
    });
    var TB = ZB(6188),
      JB = ZB(6289),
      oB = ZB(5573);

    function GB(BB) {
      return GB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, GB(BB)
    }

    function vB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function kB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? vB(Object(ZB), !0).forEach((function(IB) {
          cB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : vB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function cB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != GB(BB) || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != GB(TB)) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == GB(IB) ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }
    var nB = function(BB) {
      var IB = BB.children,
        ZB = BB.formattedGraphicalItems,
        GB = BB.legendWidth,
        vB = BB.legendContent,
        cB = (0, oB.k)(IB, TB.c);
      if (!cB) return null;
      var nB, hB = TB.c.defaultProps,
        zB = void 0 !== hB ? kB(kB({}, hB), cB.props) : {};
      return nB = cB.props && cB.props.payload ? cB.props && cB.props.payload : "children" === vB ? (ZB || []).reduce((function(BB, IB) {
        var ZB = IB.item,
          TB = IB.props,
          JB = TB.sectors || TB.data || [];
        return BB.concat(JB.map((function(BB) {
          return {
            type: cB.props.iconType || ZB.props.legendType,
            value: BB.name,
            color: BB.fill,
            payload: BB
          }
        })))
      }), []) : (ZB || []).map((function(BB) {
        var IB = BB.item,
          ZB = IB.type.defaultProps,
          TB = void 0 !== ZB ? kB(kB({}, ZB), IB.props) : {},
          oB = TB.dataKey,
          GB = TB.name,
          vB = TB.legendType;
        return {
          inactive: TB.hide,
          dataKey: oB,
          type: zB.iconType || vB || "square",
          color: (0, JB.Q)(IB),
          value: GB || oB,
          payload: TB
        }
      })), kB(kB(kB({}, zB), TB.c.getWithHeight(cB, GB)), {}, {
        payload: nB,
        item: cB
      })
    }
  },
  6137: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB
    });
    var TB = ZB(6140),
      JB = ZB.n(TB),
      oB = ZB(5425),
      GB = ZB.n(oB);

    function vB(BB, IB, ZB) {
      return !0 === IB ? JB()(BB, ZB) : GB()(IB) ? JB()(BB, IB) : BB
    }
  },
  5594: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      f: () => cB,
      g: () => vB,
      j: () => hB,
      k: () => zB
    });
    var TB = ZB(63),
      JB = ZB(5269),
      oB = ZB.n(JB);

    function GB(BB) {
      return GB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, GB(BB)
    }
    var vB = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "QF", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      kB = ["points", "pathLength"],
      cB = {
        svg: ["viewBox", "children"],
        polygon: kB,
        polyline: kB
      },
      nB = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      hB = function(BB, IB) {
        if (!BB || "function" === typeof BB || "boolean" === typeof BB) return null;
        var ZB = BB;
        if ((0, TB.isValidElement)(BB) && (ZB = BB.props), !oB()(ZB)) return null;
        var JB = {};
        return Object.keys(ZB).forEach((function(BB) {
          nB.includes(BB) && (JB[BB] = IB || function(IB) {
            return ZB[BB](ZB, IB)
          })
        })), JB
      },
      zB = function(BB, IB, ZB) {
        if (!oB()(BB) || "object" !== GB(BB)) return null;
        var TB = null;
        return Object.keys(BB).forEach((function(JB) {
          var oB = BB[JB];
          nB.includes(JB) && "function" === typeof oB && (TB || (TB = {}), TB[JB] = function(BB, IB, ZB) {
            return function(TB) {
              return BB(IB, ZB, TB), null
            }
          }(oB, IB, ZB))
        })), TB
      }
  },
  5583: (BB, IB) => {
    var ZB, TB = Symbol.for("react.element"),
      JB = Symbol.for("react.portal"),
      oB = Symbol.for("react.fragment"),
      GB = Symbol.for("react.strict_mode"),
      vB = Symbol.for("react.profiler"),
      kB = Symbol.for("react.provider"),
      cB = Symbol.for("react.context"),
      nB = Symbol.for("react.server_context"),
      hB = Symbol.for("react.forward_ref"),
      zB = Symbol.for("react.suspense"),
      FB = Symbol.for("react.suspense_list"),
      NB = Symbol.for("react.memo"),
      gB = Symbol.for("react.lazy"),
      qB = Symbol.for("react.offscreen");

    function yB(BB) {
      if ("object" === typeof BB && null !== BB) {
        var IB = BB.$$typeof;
        switch (IB) {
          case TB:
            switch (BB = BB.type) {
              case oB:
              case vB:
              case GB:
              case zB:
              case FB:
                return BB;
              default:
                switch (BB = BB && BB.$$typeof) {
                  case nB:
                  case cB:
                  case hB:
                  case gB:
                  case NB:
                  case kB:
                    return BB;
                  default:
                    return IB
                }
            }
          case JB:
            return IB
        }
      }
    }
    ZB = Symbol.for("react.module.reference"), IB.isFragment = function(BB) {
      return yB(BB) === oB
    }
  },
  5578: (BB, IB, ZB) => {
    BB.exports = ZB(5583)
  },
  5250: (BB, IB, ZB) => {
    function TB(BB) {
      var IB, ZB, JB = "";
      if ("string" == typeof BB || "number" == typeof BB) JB += BB;
      else if ("object" == typeof BB)
        if (Array.isArray(BB)) {
          var oB = BB.length;
          for (IB = 0; IB < oB; IB++) BB[IB] && (ZB = TB(BB[IB])) && (JB && (JB += " "), JB += ZB)
        } else
          for (ZB in BB) BB[ZB] && (JB && (JB += " "), JB += ZB);
      return JB
    }
    ZB.d(IB, {
      c: () => JB
    });
    const JB = function() {
      for (var BB, IB, ZB = 0, JB = "", oB = arguments.length; ZB < oB; ZB++)(BB = arguments[ZB]) && (IB = TB(BB)) && (JB && (JB += " "), JB += IB);
      return JB
    }
  },
  6292: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      h: () => vB
    });
    var TB = ZB(6296),
      JB = ZB(6298);

    function oB() {
      var BB, IB, ZB = (0, JB.b)().unknown(void 0),
        GB = ZB.domain,
        vB = ZB.range,
        kB = 0,
        cB = 1,
        nB = !1,
        hB = 0,
        zB = 0,
        FB = .5;

      function NB() {
        var ZB = GB().length,
          TB = cB < kB,
          JB = TB ? cB : kB,
          oB = TB ? kB : cB;
        BB = (oB - JB) / Math.max(1, ZB - hB + 2 * zB), nB && (BB = Math.floor(BB)), JB += (oB - JB - BB * (ZB - hB)) * FB, IB = BB * (1 - hB), nB && (JB = Math.round(JB), IB = Math.round(IB));
        var NB = function(BB, IB, ZB) {
          BB = +BB, IB = +IB, ZB = (JB = arguments.length) < 2 ? (IB = BB, BB = 0, 1) : JB < 3 ? 1 : +ZB;
          for (var TB = -1, JB = 0 | Math.max(0, Math.ceil((IB - BB) / ZB)), oB = new Array(JB); ++TB < JB;) oB[TB] = BB + TB * ZB;
          return oB
        }(ZB).map((function(IB) {
          return JB + BB * IB
        }));
        return vB(TB ? NB.reverse() : NB)
      }
      return delete ZB.unknown, ZB.domain = function(BB) {
        return arguments.length ? (GB(BB), NB()) : GB()
      }, ZB.range = function(BB) {
        return arguments.length ? ([kB, cB] = BB, kB = +kB, cB = +cB, NB()) : [kB, cB]
      }, ZB.rangeRound = function(BB) {
        return [kB, cB] = BB, kB = +kB, cB = +cB, nB = !0, NB()
      }, ZB.bandwidth = function() {
        return IB
      }, ZB.step = function() {
        return BB
      }, ZB.round = function(BB) {
        return arguments.length ? (nB = !!BB, NB()) : nB
      }, ZB.padding = function(BB) {
        return arguments.length ? (hB = Math.min(1, zB = +BB), NB()) : hB
      }, ZB.paddingInner = function(BB) {
        return arguments.length ? (hB = Math.min(1, BB), NB()) : hB
      }, ZB.paddingOuter = function(BB) {
        return arguments.length ? (zB = +BB, NB()) : zB
      }, ZB.align = function(BB) {
        return arguments.length ? (FB = Math.max(0, Math.min(1, BB)), NB()) : FB
      }, ZB.copy = function() {
        return oB(GB(), [kB, cB]).round(nB).paddingInner(hB).paddingOuter(zB).align(FB)
      }, TB.e.apply(NB(), arguments)
    }

    function GB(BB) {
      var IB = BB.copy;
      return BB.padding = BB.paddingOuter, delete BB.paddingInner, delete BB.paddingOuter, BB.copy = function() {
        return GB(IB())
      }, BB
    }

    function vB() {
      return GB(oB.apply(null, arguments).paddingInner(1))
    }
  },
  6296: (BB, IB, ZB) => {
    function TB(BB, IB) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(BB);
          break;
        default:
          this.range(IB).domain(BB)
      }
      return this
    }

    function JB(BB, IB) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof BB ? this.interpolator(BB) : this.range(BB);
          break;
        default:
          this.domain(BB), "function" === typeof IB ? this.interpolator(IB) : this.range(IB)
      }
      return this
    }
    ZB.d(IB, {
      b: () => JB,
      e: () => TB
    })
  },
  6298: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => nB,
      e: () => cB
    });
    class TB extends Map {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vB;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: IB
            }
          }), null != BB)
          for (const [ZB, TB] of BB) this.set(ZB, TB)
      }
      get(BB) {
        return super.get(JB(this, BB))
      }
      has(BB) {
        return super.has(JB(this, BB))
      }
      set(BB, IB) {
        return super.set(oB(this, BB), IB)
      }
      delete(BB) {
        return super.delete(GB(this, BB))
      }
    }
    Set;

    function JB(BB, IB) {
      let {
        _intern: ZB,
        _key: TB
      } = BB;
      const JB = TB(IB);
      return ZB.has(JB) ? ZB.get(JB) : IB
    }

    function oB(BB, IB) {
      let {
        _intern: ZB,
        _key: TB
      } = BB;
      const JB = TB(IB);
      return ZB.has(JB) ? ZB.get(JB) : (ZB.set(JB, IB), IB)
    }

    function GB(BB, IB) {
      let {
        _intern: ZB,
        _key: TB
      } = BB;
      const JB = TB(IB);
      return ZB.has(JB) && (IB = ZB.get(JB), ZB.delete(JB)), IB
    }

    function vB(BB) {
      return null !== BB && "object" === typeof BB ? BB.valueOf() : BB
    }
    var kB = ZB(6296);
    const cB = Symbol("implicit");

    function nB() {
      var BB = new TB,
        IB = [],
        ZB = [],
        JB = cB;

      function oB(TB) {
        let oB = BB.get(TB);
        if (void 0 === oB) {
          if (JB !== cB) return JB;
          BB.set(TB, oB = IB.push(TB) - 1)
        }
        return ZB[oB % ZB.length]
      }
      return oB.domain = function(ZB) {
        if (!arguments.length) return IB.slice();
        IB = [], BB = new TB;
        for (const TB of ZB) BB.has(TB) || BB.set(TB, IB.push(TB) - 1);
        return oB
      }, oB.range = function(BB) {
        return arguments.length ? (ZB = Array.from(BB), oB) : ZB.slice()
      }, oB.unknown = function(BB) {
        return arguments.length ? (JB = BB, oB) : JB
      }, oB.copy = function() {
        return nB(IB, ZB).unknown(JB)
      }, kB.e.apply(oB, arguments), oB
    }
  },
  6355: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB
    });
    Array.prototype.slice;

    function TB(BB) {
      return "object" === typeof BB && "length" in BB ? BB : Array.from(BB)
    }
  },
  6244: (BB, IB, ZB) => {
    function TB(BB) {
      return function() {
        return BB
      }
    }
    ZB.d(IB, {
      b: () => TB
    })
  },
  6246: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => cB
    });
    const TB = Math.PI,
      JB = 2 * TB,
      oB = 1e-6,
      GB = JB - oB;

    function vB(BB) {
      this._ += BB[0];
      for (let IB = 1, ZB = BB.length; IB < ZB; ++IB) this._ += arguments[IB] + BB[IB]
    }
    class kB {
      constructor(BB) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == BB ? vB : function(BB) {
          let IB = Math.floor(BB);
          if (!(IB >= 0)) throw new Error(`invalid digits: ${BB}`);
          if (IB > 15) return vB;
          const ZB = 10 ** IB;
          return function(BB) {
            this._ += BB[0];
            for (let IB = 1, TB = BB.length; IB < TB; ++IB) this._ += Math.round(arguments[IB] * ZB) / ZB + BB[IB]
          }
        }(BB)
      }
      moveTo(BB, IB) {
        this._append`M${this._x0=this._x1=+BB},${this._y0=this._y1=+IB}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(BB, IB) {
        this._append`L${this._x1=+BB},${this._y1=+IB}`
      }
      quadraticCurveTo(BB, IB, ZB, TB) {
        this._append`Q${+BB},${+IB},${this._x1=+ZB},${this._y1=+TB}`
      }
      bezierCurveTo(BB, IB, ZB, TB, JB, oB) {
        this._append`C${+BB},${+IB},${+ZB},${+TB},${this._x1=+JB},${this._y1=+oB}`
      }
      arcTo(BB, IB, ZB, JB, GB) {
        if (BB = +BB, IB = +IB, ZB = +ZB, JB = +JB, (GB = +GB) < 0) throw new Error(`negative radius: ${GB}`);
        let vB = this._x1,
          kB = this._y1,
          cB = ZB - BB,
          nB = JB - IB,
          hB = vB - BB,
          zB = kB - IB,
          FB = hB * hB + zB * zB;
        if (null === this._x1) this._append`M${this._x1=BB},${this._y1=IB}`;
        else if (FB > oB)
          if (Math.abs(zB * cB - nB * hB) > oB && GB) {
            let NB = ZB - vB,
              gB = JB - kB,
              qB = cB * cB + nB * nB,
              yB = NB * NB + gB * gB,
              UB = Math.sqrt(qB),
              WB = Math.sqrt(FB),
              dB = GB * Math.tan((TB - Math.acos((qB + FB - yB) / (2 * UB * WB))) / 2),
              CB = dB / WB,
              QB = dB / UB;
            Math.abs(CB - 1) > oB && this._append`L${BB+CB*hB},${IB+CB*zB}`, this._append`A${GB},${GB},0,0,${+(zB*NB>hB*gB)},${this._x1=BB+QB*cB},${this._y1=IB+QB*nB}`
          } else this._append`L${this._x1=BB},${this._y1=IB}`;
        else;
      }
      arc(BB, IB, ZB, vB, kB, cB) {
        if (BB = +BB, IB = +IB, cB = !!cB, (ZB = +ZB) < 0) throw new Error(`negative radius: ${ZB}`);
        let nB = ZB * Math.cos(vB),
          hB = ZB * Math.sin(vB),
          zB = BB + nB,
          FB = IB + hB,
          NB = 1 ^ cB,
          gB = cB ? vB - kB : kB - vB;
        null === this._x1 ? this._append`M${zB},${FB}` : (Math.abs(this._x1 - zB) > oB || Math.abs(this._y1 - FB) > oB) && this._append`L${zB},${FB}`, ZB && (gB < 0 && (gB = gB % JB + JB), gB > GB ? this._append`A${ZB},${ZB},0,1,${NB},${BB-nB},${IB-hB}A${ZB},${ZB},0,1,${NB},${this._x1=zB},${this._y1=FB}` : gB > oB && this._append`A${ZB},${ZB},0,${+(gB>=TB)},${NB},${this._x1=BB+ZB*Math.cos(kB)},${this._y1=IB+ZB*Math.sin(kB)}`)
      }
      rect(BB, IB, ZB, TB) {
        this._append`M${this._x0=this._x1=+BB},${this._y0=this._y1=+IB}h${ZB=+ZB}v${+TB}h${-ZB}Z`
      }
      toString() {
        return this._
      }
    }

    function cB(BB) {
      let IB = 3;
      return BB.digits = function(ZB) {
        if (!arguments.length) return IB;
        if (null == ZB) IB = null;
        else {
          const BB = Math.floor(ZB);
          if (!(BB >= 0)) throw new RangeError(`invalid digits: ${ZB}`);
          IB = BB
        }
        return BB
      }, () => new kB(IB)
    }
    kB.prototype
  },
  6111: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB
    });
    var TB = !0,
      JB = "Invariant failed";

    function oB(BB, IB) {
      if (!BB) {
        if (TB) throw new Error(JB);
        var ZB = "function" === typeof IB ? IB() : IB,
          oB = ZB ? "".concat(JB, ": ").concat(ZB) : JB;
        throw new Error(oB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);