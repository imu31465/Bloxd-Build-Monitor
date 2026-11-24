/*! For license information please see yma3ej.119.cebbd557.chunk.js.LICENSE.txt */
export const id = 119;
export const ids = [119];
export const modules = {
  6293: function(TT, UT, mT) {
    var WT;
    ! function() {
      var zT, MT = 1e9,
        gT = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        nT = !0,
        HT = "[DecimalError] ",
        kT = HT + "Invalid argument: ",
        jT = HT + "Exponent out of range: ",
        lT = Math.floor,
        LT = Math.pow,
        pT = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        BT = 1e7,
        ZT = 9007199254740991,
        cT = lT(1286742750677284.5),
        vT = {};

      function fT(TT, UT) {
        var mT, WT, zT, MT, gT, HT, kT, jT, lT = TT.constructor,
          LT = lT.precision;
        if (!TT.s || !UT.s) return UT.s || (UT = new lT(TT)), nT ? wT(UT, LT) : UT;
        if (kT = TT.d, jT = UT.d, gT = TT.e, zT = UT.e, kT = kT.slice(), MT = gT - zT) {
          for (MT < 0 ? (WT = kT, MT = -MT, HT = jT.length) : (WT = jT, zT = gT, HT = kT.length), MT > (HT = (gT = Math.ceil(LT / 7)) > HT ? gT + 1 : HT + 1) && (MT = HT, WT.length = 1), WT.reverse(); MT--;) WT.push(0);
          WT.reverse()
        }
        for ((HT = kT.length) - (MT = jT.length) < 0 && (MT = HT, WT = jT, jT = kT, kT = WT), mT = 0; MT;) mT = (kT[--MT] = kT[MT] + jT[MT] + mT) / BT | 0, kT[MT] %= BT;
        for (mT && (kT.unshift(mT), ++zT), HT = kT.length; 0 == kT[--HT];) kT.pop();
        return UT.d = kT, UT.e = zT, nT ? wT(UT, LT) : UT
      }

      function qT(TT, UT, mT) {
        if (TT !== ~~TT || TT < UT || TT > mT) throw Error(kT + TT)
      }

      function iT(TT) {
        var UT, mT, WT, zT = TT.length - 1,
          MT = "",
          gT = TT[0];
        if (zT > 0) {
          for (MT += gT, UT = 1; UT < zT; UT++)(mT = 7 - (WT = TT[UT] + "").length) && (MT += JT(mT)), MT += WT;
          (mT = 7 - (WT = (gT = TT[UT]) + "").length) && (MT += JT(mT))
        } else if (0 === gT) return "0";
        for (; gT % 10 === 0;) gT /= 10;
        return MT + gT
      }
      vT.absoluteValue = vT.abs = function() {
        var TT = new this.constructor(this);
        return TT.s && (TT.s = 1), TT
      }, vT.comparedTo = vT.cmp = function(TT) {
        var UT, mT, WT, zT, MT = this;
        if (TT = new MT.constructor(TT), MT.s !== TT.s) return MT.s || -TT.s;
        if (MT.e !== TT.e) return MT.e > TT.e ^ MT.s < 0 ? 1 : -1;
        for (UT = 0, mT = (WT = MT.d.length) < (zT = TT.d.length) ? WT : zT; UT < mT; ++UT)
          if (MT.d[UT] !== TT.d[UT]) return MT.d[UT] > TT.d[UT] ^ MT.s < 0 ? 1 : -1;
        return WT === zT ? 0 : WT > zT ^ MT.s < 0 ? 1 : -1
      }, vT.decimalPlaces = vT.dp = function() {
        var TT = this,
          UT = TT.d.length - 1,
          mT = 7 * (UT - TT.e);
        if (UT = TT.d[UT])
          for (; UT % 10 == 0; UT /= 10) mT--;
        return mT < 0 ? 0 : mT
      }, vT.dividedBy = vT.div = function(TT) {
        return bT(this, new this.constructor(TT))
      }, vT.dividedToIntegerBy = vT.idiv = function(TT) {
        var UT = this.constructor;
        return wT(bT(this, new UT(TT), 0, 1), UT.precision)
      }, vT.equals = vT.eq = function(TT) {
        return !this.cmp(TT)
      }, vT.exponent = function() {
        return eT(this)
      }, vT.greaterThan = vT.gt = function(TT) {
        return this.cmp(TT) > 0
      }, vT.greaterThanOrEqualTo = vT.gte = function(TT) {
        return this.cmp(TT) >= 0
      }, vT.isInteger = vT.isint = function() {
        return this.e > this.d.length - 2
      }, vT.isNegative = vT.isneg = function() {
        return this.s < 0
      }, vT.isPositive = vT.ispos = function() {
        return this.s > 0
      }, vT.isZero = function() {
        return 0 === this.s
      }, vT.lessThan = vT.lt = function(TT) {
        return this.cmp(TT) < 0
      }, vT.lessThanOrEqualTo = vT.lte = function(TT) {
        return this.cmp(TT) < 1
      }, vT.logarithm = vT.log = function(TT) {
        var UT, mT = this,
          WT = mT.constructor,
          MT = WT.precision,
          gT = MT + 5;
        if (void 0 === TT) TT = new WT(10);
        else if ((TT = new WT(TT)).s < 1 || TT.eq(zT)) throw Error(HT + "NaN");
        if (mT.s < 1) throw Error(HT + (mT.s ? "NaN" : "-Infinity"));
        return mT.eq(zT) ? new WT(0) : (nT = !1, UT = bT(xT(mT, gT), xT(TT, gT), gT), nT = !0, wT(UT, MT))
      }, vT.minus = vT.sub = function(TT) {
        var UT = this;
        return TT = new UT.constructor(TT), UT.s == TT.s ? tT(UT, TT) : fT(UT, (TT.s = -TT.s, TT))
      }, vT.modulo = vT.mod = function(TT) {
        var UT, mT = this,
          WT = mT.constructor,
          zT = WT.precision;
        if (!(TT = new WT(TT)).s) throw Error(HT + "NaN");
        return mT.s ? (nT = !1, UT = bT(mT, TT, 0, 1).times(TT), nT = !0, mT.minus(UT)) : wT(new WT(mT), zT)
      }, vT.naturalExponential = vT.exp = function() {
        return OT(this)
      }, vT.naturalLogarithm = vT.ln = function() {
        return xT(this)
      }, vT.negated = vT.neg = function() {
        var TT = new this.constructor(this);
        return TT.s = -TT.s || 0, TT
      }, vT.plus = vT.add = function(TT) {
        var UT = this;
        return TT = new UT.constructor(TT), UT.s == TT.s ? fT(UT, TT) : tT(UT, (TT.s = -TT.s, TT))
      }, vT.precision = vT.sd = function(TT) {
        var UT, mT, WT, zT = this;
        if (void 0 !== TT && TT !== !!TT && 1 !== TT && 0 !== TT) throw Error(kT + TT);
        if (UT = eT(zT) + 1, mT = 7 * (WT = zT.d.length - 1) + 1, WT = zT.d[WT]) {
          for (; WT % 10 == 0; WT /= 10) mT--;
          for (WT = zT.d[0]; WT >= 10; WT /= 10) mT++
        }
        return TT && UT > mT ? UT : mT
      }, vT.squareRoot = vT.sqrt = function() {
        var TT, UT, mT, WT, zT, MT, gT, kT = this,
          jT = kT.constructor;
        if (kT.s < 1) {
          if (!kT.s) return new jT(0);
          throw Error(HT + "NaN")
        }
        for (TT = eT(kT), nT = !1, 0 == (zT = Math.sqrt(+kT)) || zT == 1 / 0 ? (((UT = iT(kT.d)).length + TT) % 2 == 0 && (UT += "0"), zT = Math.sqrt(UT), TT = lT((TT + 1) / 2) - (TT < 0 || TT % 2), WT = new jT(UT = zT == 1 / 0 ? "1e" + TT : (UT = zT.toExponential()).slice(0, UT.indexOf("e") + 1) + TT)) : WT = new jT(zT.toString()), zT = gT = (mT = jT.precision) + 3;;)
          if (WT = (MT = WT).plus(bT(kT, MT, gT + 2)).times(.5), iT(MT.d).slice(0, gT) === (UT = iT(WT.d)).slice(0, gT)) {
            if (UT = UT.slice(gT - 3, gT + 1), zT == gT && "4999" == UT) {
              if (wT(MT, mT + 1, 0), MT.times(MT).eq(kT)) {
                WT = MT;
                break
              }
            } else if ("9999" != UT) break;
            gT += 4
          } return nT = !0, wT(WT, mT)
      }, vT.times = vT.mul = function(TT) {
        var UT, mT, WT, zT, MT, gT, HT, kT, jT, lT = this,
          LT = lT.constructor,
          pT = lT.d,
          ZT = (TT = new LT(TT)).d;
        if (!lT.s || !TT.s) return new LT(0);
        for (TT.s *= lT.s, mT = lT.e + TT.e, (kT = pT.length) < (jT = ZT.length) && (MT = pT, pT = ZT, ZT = MT, gT = kT, kT = jT, jT = gT), MT = [], WT = gT = kT + jT; WT--;) MT.push(0);
        for (WT = jT; --WT >= 0;) {
          for (UT = 0, zT = kT + WT; zT > WT;) HT = MT[zT] + ZT[WT] * pT[zT - WT - 1] + UT, MT[zT--] = HT % BT | 0, UT = HT / BT | 0;
          MT[zT] = (MT[zT] + UT) % BT | 0
        }
        for (; !MT[--gT];) MT.pop();
        return UT ? ++mT : MT.shift(), TT.d = MT, TT.e = mT, nT ? wT(TT, LT.precision) : TT
      }, vT.toDecimalPlaces = vT.todp = function(TT, UT) {
        var mT = this,
          WT = mT.constructor;
        return mT = new WT(mT), void 0 === TT ? mT : (qT(TT, 0, MT), void 0 === UT ? UT = WT.rounding : qT(UT, 0, 8), wT(mT, TT + eT(mT) + 1, UT))
      }, vT.toExponential = function(TT, UT) {
        var mT, WT = this,
          zT = WT.constructor;
        return void 0 === TT ? mT = aT(WT, !0) : (qT(TT, 0, MT), void 0 === UT ? UT = zT.rounding : qT(UT, 0, 8), mT = aT(WT = wT(new zT(WT), TT + 1, UT), !0, TT + 1)), mT
      }, vT.toFixed = function(TT, UT) {
        var mT, WT, zT = this,
          gT = zT.constructor;
        return void 0 === TT ? aT(zT) : (qT(TT, 0, MT), void 0 === UT ? UT = gT.rounding : qT(UT, 0, 8), mT = aT((WT = wT(new gT(zT), TT + eT(zT) + 1, UT)).abs(), !1, TT + eT(WT) + 1), zT.isneg() && !zT.isZero() ? "-" + mT : mT)
      }, vT.toInteger = vT.toint = function() {
        var TT = this,
          UT = TT.constructor;
        return wT(new UT(TT), eT(TT) + 1, UT.rounding)
      }, vT.toNumber = function() {
        return +this
      }, vT.toPower = vT.pow = function(TT) {
        var UT, mT, WT, MT, gT, kT, jT = this,
          LT = jT.constructor,
          pT = +(TT = new LT(TT));
        if (!TT.s) return new LT(zT);
        if (!(jT = new LT(jT)).s) {
          if (TT.s < 1) throw Error(HT + "Infinity");
          return jT
        }
        if (jT.eq(zT)) return jT;
        if (WT = LT.precision, TT.eq(zT)) return wT(jT, WT);
        if (kT = (UT = TT.e) >= (mT = TT.d.length - 1), gT = jT.s, kT) {
          if ((mT = pT < 0 ? -pT : pT) <= ZT) {
            for (MT = new LT(zT), UT = Math.ceil(WT / 7 + 4), nT = !1; mT % 2 && yT((MT = MT.times(jT)).d, UT), 0 !== (mT = lT(mT / 2));) yT((jT = jT.times(jT)).d, UT);
            return nT = !0, TT.s < 0 ? new LT(zT).div(MT) : wT(MT, WT)
          }
        } else if (gT < 0) throw Error(HT + "NaN");
        return gT = gT < 0 && 1 & TT.d[Math.max(UT, mT)] ? -1 : 1, jT.s = 1, nT = !1, MT = TT.times(xT(jT, WT + 12)), nT = !0, (MT = OT(MT)).s = gT, MT
      }, vT.toPrecision = function(TT, UT) {
        var mT, WT, zT = this,
          gT = zT.constructor;
        return void 0 === TT ? WT = aT(zT, (mT = eT(zT)) <= gT.toExpNeg || mT >= gT.toExpPos) : (qT(TT, 1, MT), void 0 === UT ? UT = gT.rounding : qT(UT, 0, 8), WT = aT(zT = wT(new gT(zT), TT, UT), TT <= (mT = eT(zT)) || mT <= gT.toExpNeg, TT)), WT
      }, vT.toSignificantDigits = vT.tosd = function(TT, UT) {
        var mT = this.constructor;
        return void 0 === TT ? (TT = mT.precision, UT = mT.rounding) : (qT(TT, 1, MT), void 0 === UT ? UT = mT.rounding : qT(UT, 0, 8)), wT(new mT(this), TT, UT)
      }, vT.toString = vT.valueOf = vT.val = vT.toJSON = function() {
        var TT = this,
          UT = eT(TT),
          mT = TT.constructor;
        return aT(TT, UT <= mT.toExpNeg || UT >= mT.toExpPos)
      };
      var bT = function() {
        function TT(TT, UT) {
          var mT, WT = 0,
            zT = TT.length;
          for (TT = TT.slice(); zT--;) mT = TT[zT] * UT + WT, TT[zT] = mT % BT | 0, WT = mT / BT | 0;
          return WT && TT.unshift(WT), TT
        }

        function UT(TT, UT, mT, WT) {
          var zT, MT;
          if (mT != WT) MT = mT > WT ? 1 : -1;
          else
            for (zT = MT = 0; zT < mT; zT++)
              if (TT[zT] != UT[zT]) {
                MT = TT[zT] > UT[zT] ? 1 : -1;
                break
              } return MT
        }

        function mT(TT, UT, mT) {
          for (var WT = 0; mT--;) TT[mT] -= WT, WT = TT[mT] < UT[mT] ? 1 : 0, TT[mT] = WT * BT + TT[mT] - UT[mT];
          for (; !TT[0] && TT.length > 1;) TT.shift()
        }
        return function(WT, zT, MT, gT) {
          var nT, kT, jT, lT, LT, pT, ZT, cT, vT, fT, qT, iT, bT, OT, YT, JT, xT, dT, tT = WT.constructor,
            aT = WT.s == zT.s ? 1 : -1,
            yT = WT.d,
            XT = zT.d;
          if (!WT.s) return new tT(WT);
          if (!zT.s) throw Error(HT + "Division by zero");
          for (kT = WT.e - zT.e, xT = XT.length, YT = yT.length, cT = (ZT = new tT(aT)).d = [], jT = 0; XT[jT] == (yT[jT] || 0);) ++jT;
          if (XT[jT] > (yT[jT] || 0) && --kT, (iT = null == MT ? MT = tT.precision : gT ? MT + (eT(WT) - eT(zT)) + 1 : MT) < 0) return new tT(0);
          if (iT = iT / 7 + 2 | 0, jT = 0, 1 == xT)
            for (lT = 0, XT = XT[0], iT++;
              (jT < YT || lT) && iT--; jT++) bT = lT * BT + (yT[jT] || 0), cT[jT] = bT / XT | 0, lT = bT % XT | 0;
          else {
            for ((lT = BT / (XT[0] + 1) | 0) > 1 && (XT = TT(XT, lT), yT = TT(yT, lT), xT = XT.length, YT = yT.length), OT = xT, fT = (vT = yT.slice(0, xT)).length; fT < xT;) vT[fT++] = 0;
            (dT = XT.slice()).unshift(0), JT = XT[0], XT[1] >= BT / 2 && ++JT;
            do {
              lT = 0, (nT = UT(XT, vT, xT, fT)) < 0 ? (qT = vT[0], xT != fT && (qT = qT * BT + (vT[1] || 0)), (lT = qT / JT | 0) > 1 ? (lT >= BT && (lT = BT - 1), 1 == (nT = UT(LT = TT(XT, lT), vT, pT = LT.length, fT = vT.length)) && (lT--, mT(LT, xT < pT ? dT : XT, pT))) : (0 == lT && (nT = lT = 1), LT = XT.slice()), (pT = LT.length) < fT && LT.unshift(0), mT(vT, LT, fT), -1 == nT && (nT = UT(XT, vT, xT, fT = vT.length)) < 1 && (lT++, mT(vT, xT < fT ? dT : XT, fT)), fT = vT.length) : 0 === nT && (lT++, vT = [0]), cT[jT++] = lT, nT && vT[0] ? vT[fT++] = yT[OT] || 0 : (vT = [yT[OT]], fT = 1)
            } while ((OT++ < YT || void 0 !== vT[0]) && iT--)
          }
          return cT[0] || cT.shift(), ZT.e = kT, wT(ZT, gT ? MT + eT(ZT) + 1 : MT)
        }
      }();

      function OT(TT, UT) {
        var mT, WT, MT, gT, HT, kT = 0,
          lT = 0,
          pT = TT.constructor,
          BT = pT.precision;
        if (eT(TT) > 16) throw Error(jT + eT(TT));
        if (!TT.s) return new pT(zT);
        for (null == UT ? (nT = !1, HT = BT) : HT = UT, gT = new pT(.03125); TT.abs().gte(.1);) TT = TT.times(gT), lT += 5;
        for (HT += Math.log(LT(2, lT)) / Math.LN10 * 2 + 5 | 0, mT = WT = MT = new pT(zT), pT.precision = HT;;) {
          if (WT = wT(WT.times(TT), HT), mT = mT.times(++kT), iT((gT = MT.plus(bT(WT, mT, HT))).d).slice(0, HT) === iT(MT.d).slice(0, HT)) {
            for (; lT--;) MT = wT(MT.times(MT), HT);
            return pT.precision = BT, null == UT ? (nT = !0, wT(MT, BT)) : MT
          }
          MT = gT
        }
      }

      function eT(TT) {
        for (var UT = 7 * TT.e, mT = TT.d[0]; mT >= 10; mT /= 10) UT++;
        return UT
      }

      function YT(TT, UT, mT) {
        if (UT > TT.LN10.sd()) throw nT = !0, mT && (TT.precision = mT), Error(HT + "LN10 precision limit exceeded");
        return wT(new TT(TT.LN10), UT)
      }

      function JT(TT) {
        for (var UT = ""; TT--;) UT += "0";
        return UT
      }

      function xT(TT, UT) {
        var mT, WT, MT, gT, kT, jT, lT, LT, pT, BT = 1,
          ZT = TT,
          cT = ZT.d,
          vT = ZT.constructor,
          fT = vT.precision;
        if (ZT.s < 1) throw Error(HT + (ZT.s ? "NaN" : "-Infinity"));
        if (ZT.eq(zT)) return new vT(0);
        if (null == UT ? (nT = !1, LT = fT) : LT = UT, ZT.eq(10)) return null == UT && (nT = !0), YT(vT, LT);
        if (LT += 10, vT.precision = LT, WT = (mT = iT(cT)).charAt(0), gT = eT(ZT), !(Math.abs(gT) < 15e14)) return lT = YT(vT, LT + 2, fT).times(gT + ""), ZT = xT(new vT(WT + "." + mT.slice(1)), LT - 10).plus(lT), vT.precision = fT, null == UT ? (nT = !0, wT(ZT, fT)) : ZT;
        for (; WT < 7 && 1 != WT || 1 == WT && mT.charAt(1) > 3;) WT = (mT = iT((ZT = ZT.times(TT)).d)).charAt(0), BT++;
        for (gT = eT(ZT), WT > 1 ? (ZT = new vT("0." + mT), gT++) : ZT = new vT(WT + "." + mT.slice(1)), jT = kT = ZT = bT(ZT.minus(zT), ZT.plus(zT), LT), pT = wT(ZT.times(ZT), LT), MT = 3;;) {
          if (kT = wT(kT.times(pT), LT), iT((lT = jT.plus(bT(kT, new vT(MT), LT))).d).slice(0, LT) === iT(jT.d).slice(0, LT)) return jT = jT.times(2), 0 !== gT && (jT = jT.plus(YT(vT, LT + 2, fT).times(gT + ""))), jT = bT(jT, new vT(BT), LT), vT.precision = fT, null == UT ? (nT = !0, wT(jT, fT)) : jT;
          jT = lT, MT += 2
        }
      }

      function dT(TT, UT) {
        var mT, WT, zT;
        for ((mT = UT.indexOf(".")) > -1 && (UT = UT.replace(".", "")), (WT = UT.search(/e/i)) > 0 ? (mT < 0 && (mT = WT), mT += +UT.slice(WT + 1), UT = UT.substring(0, WT)) : mT < 0 && (mT = UT.length), WT = 0; 48 === UT.charCodeAt(WT);) ++WT;
        for (zT = UT.length; 48 === UT.charCodeAt(zT - 1);) --zT;
        if (UT = UT.slice(WT, zT)) {
          if (zT -= WT, mT = mT - WT - 1, TT.e = lT(mT / 7), TT.d = [], WT = (mT + 1) % 7, mT < 0 && (WT += 7), WT < zT) {
            for (WT && TT.d.push(+UT.slice(0, WT)), zT -= 7; WT < zT;) TT.d.push(+UT.slice(WT, WT += 7));
            WT = 7 - (UT = UT.slice(WT)).length
          } else WT -= zT;
          for (; WT--;) UT += "0";
          if (TT.d.push(+UT), nT && (TT.e > cT || TT.e < -cT)) throw Error(jT + mT)
        } else TT.s = 0, TT.e = 0, TT.d = [0];
        return TT
      }

      function wT(TT, UT, mT) {
        var WT, zT, MT, gT, HT, kT, pT, ZT, vT = TT.d;
        for (gT = 1, MT = vT[0]; MT >= 10; MT /= 10) gT++;
        if ((WT = UT - gT) < 0) WT += 7, zT = UT, pT = vT[ZT = 0];
        else {
          if ((ZT = Math.ceil((WT + 1) / 7)) >= (MT = vT.length)) return TT;
          for (pT = MT = vT[ZT], gT = 1; MT >= 10; MT /= 10) gT++;
          zT = (WT %= 7) - 7 + gT
        }
        if (void 0 !== mT && (HT = pT / (MT = LT(10, gT - zT - 1)) % 10 | 0, kT = UT < 0 || void 0 !== vT[ZT + 1] || pT % MT, kT = mT < 4 ? (HT || kT) && (0 == mT || mT == (TT.s < 0 ? 3 : 2)) : HT > 5 || 5 == HT && (4 == mT || kT || 6 == mT && (WT > 0 ? zT > 0 ? pT / LT(10, gT - zT) : 0 : vT[ZT - 1]) % 10 & 1 || mT == (TT.s < 0 ? 8 : 7))), UT < 1 || !vT[0]) return kT ? (MT = eT(TT), vT.length = 1, UT = UT - MT - 1, vT[0] = LT(10, (7 - UT % 7) % 7), TT.e = lT(-UT / 7) || 0) : (vT.length = 1, vT[0] = TT.e = TT.s = 0), TT;
        if (0 == WT ? (vT.length = ZT, MT = 1, ZT--) : (vT.length = ZT + 1, MT = LT(10, 7 - WT), vT[ZT] = zT > 0 ? (pT / LT(10, gT - zT) % LT(10, zT) | 0) * MT : 0), kT)
          for (;;) {
            if (0 == ZT) {
              (vT[0] += MT) == BT && (vT[0] = 1, ++TT.e);
              break
            }
            if (vT[ZT] += MT, vT[ZT] != BT) break;
            vT[ZT--] = 0, MT = 1
          }
        for (WT = vT.length; 0 === vT[--WT];) vT.pop();
        if (nT && (TT.e > cT || TT.e < -cT)) throw Error(jT + eT(TT));
        return TT
      }

      function tT(TT, UT) {
        var mT, WT, zT, MT, gT, HT, kT, jT, lT, LT, pT = TT.constructor,
          ZT = pT.precision;
        if (!TT.s || !UT.s) return UT.s ? UT.s = -UT.s : UT = new pT(TT), nT ? wT(UT, ZT) : UT;
        if (kT = TT.d, LT = UT.d, WT = UT.e, jT = TT.e, kT = kT.slice(), gT = jT - WT) {
          for ((lT = gT < 0) ? (mT = kT, gT = -gT, HT = LT.length) : (mT = LT, WT = jT, HT = kT.length), gT > (zT = Math.max(Math.ceil(ZT / 7), HT) + 2) && (gT = zT, mT.length = 1), mT.reverse(), zT = gT; zT--;) mT.push(0);
          mT.reverse()
        } else {
          for ((lT = (zT = kT.length) < (HT = LT.length)) && (HT = zT), zT = 0; zT < HT; zT++)
            if (kT[zT] != LT[zT]) {
              lT = kT[zT] < LT[zT];
              break
            } gT = 0
        }
        for (lT && (mT = kT, kT = LT, LT = mT, UT.s = -UT.s), HT = kT.length, zT = LT.length - HT; zT > 0; --zT) kT[HT++] = 0;
        for (zT = LT.length; zT > gT;) {
          if (kT[--zT] < LT[zT]) {
            for (MT = zT; MT && 0 === kT[--MT];) kT[MT] = BT - 1;
            --kT[MT], kT[zT] += BT
          }
          kT[zT] -= LT[zT]
        }
        for (; 0 === kT[--HT];) kT.pop();
        for (; 0 === kT[0]; kT.shift()) --WT;
        return kT[0] ? (UT.d = kT, UT.e = WT, nT ? wT(UT, ZT) : UT) : new pT(0)
      }

      function aT(TT, UT, mT) {
        var WT, zT = eT(TT),
          MT = iT(TT.d),
          gT = MT.length;
        return UT ? (mT && (WT = mT - gT) > 0 ? MT = MT.charAt(0) + "." + MT.slice(1) + JT(WT) : gT > 1 && (MT = MT.charAt(0) + "." + MT.slice(1)), MT = MT + (zT < 0 ? "e" : "e+") + zT) : zT < 0 ? (MT = "0." + JT(-zT - 1) + MT, mT && (WT = mT - gT) > 0 && (MT += JT(WT))) : zT >= gT ? (MT += JT(zT + 1 - gT), mT && (WT = mT - zT - 1) > 0 && (MT = MT + "." + JT(WT))) : ((WT = zT + 1) < gT && (MT = MT.slice(0, WT) + "." + MT.slice(WT)), mT && (WT = mT - gT) > 0 && (zT + 1 === gT && (MT += "."), MT += JT(WT))), TT.s < 0 ? "-" + MT : MT
      }

      function yT(TT, UT) {
        if (TT.length > UT) return TT.length = UT, !0
      }

      function XT(TT) {
        if (!TT || "object" !== typeof TT) throw Error(HT + "Object expected");
        var UT, mT, WT, zT = ["precision", 1, MT, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (UT = 0; UT < zT.length; UT += 3)
          if (void 0 !== (WT = TT[mT = zT[UT]])) {
            if (!(lT(WT) === WT && WT >= zT[UT + 1] && WT <= zT[UT + 2])) throw Error(kT + mT + ": " + WT);
            this[mT] = WT
          } if (void 0 !== (WT = TT[mT = "LN10"])) {
          if (WT != Math.LN10) throw Error(kT + mT + ": " + WT);
          this[mT] = new this(WT)
        }
        return this
      }
      gT = function TT(UT) {
        var mT, WT, zT;

        function MT(TT) {
          var UT = this;
          if (!(UT instanceof MT)) return new MT(TT);
          if (UT.constructor = MT, TT instanceof MT) return UT.s = TT.s, UT.e = TT.e, void(UT.d = (TT = TT.d) ? TT.slice() : TT);
          if ("number" === typeof TT) {
            if (0 * TT !== 0) throw Error(kT + TT);
            if (TT > 0) UT.s = 1;
            else {
              if (!(TT < 0)) return UT.s = 0, UT.e = 0, void(UT.d = [0]);
              TT = -TT, UT.s = -1
            }
            return TT === ~~TT && TT < 1e7 ? (UT.e = 0, void(UT.d = [TT])) : dT(UT, TT.toString())
          }
          if ("string" !== typeof TT) throw Error(kT + TT);
          if (45 === TT.charCodeAt(0) ? (TT = TT.slice(1), UT.s = -1) : UT.s = 1, !pT.test(TT)) throw Error(kT + TT);
          dT(UT, TT)
        }
        if (MT.prototype = vT, MT.ROUND_UP = 0, MT.ROUND_DOWN = 1, MT.ROUND_CEIL = 2, MT.ROUND_FLOOR = 3, MT.ROUND_HALF_UP = 4, MT.ROUND_HALF_DOWN = 5, MT.ROUND_HALF_EVEN = 6, MT.ROUND_HALF_CEIL = 7, MT.ROUND_HALF_FLOOR = 8, MT.clone = TT, MT.config = MT.set = XT, void 0 === UT && (UT = {}), UT)
          for (zT = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], mT = 0; mT < zT.length;) UT.hasOwnProperty(WT = zT[mT++]) || (UT[WT] = this[WT]);
        return MT.config(UT), MT
      }(gT), gT.default = gT.Decimal = gT, zT = new gT(1), void 0 === (WT = function() {
        return gT
      }.call(UT, mT, UT, TT)) || (TT.exports = WT)
    }()
  },
  5853: (TT, UT, mT) => {
    var WT = mT(5329)(mT(5208), "DataView");
    TT.exports = WT
  },
  5316: (TT, UT, mT) => {
    var WT = mT(5320),
      zT = mT(5364),
      MT = mT(5372),
      gT = mT(5376),
      nT = mT(5381);

    function HT(TT) {
      var UT = -1,
        mT = null == TT ? 0 : TT.length;
      for (this.clear(); ++UT < mT;) {
        var WT = TT[UT];
        this.set(WT[0], WT[1])
      }
    }
    HT.prototype.clear = WT, HT.prototype.delete = zT, HT.prototype.get = MT, HT.prototype.has = gT, HT.prototype.set = nT, TT.exports = HT
  },
  5387: (TT, UT, mT) => {
    var WT = mT(5392),
      zT = mT(5398),
      MT = mT(5412),
      gT = mT(5416),
      nT = mT(5419);

    function HT(TT) {
      var UT = -1,
        mT = null == TT ? 0 : TT.length;
      for (this.clear(); ++UT < mT;) {
        var WT = TT[UT];
        this.set(WT[0], WT[1])
      }
    }
    HT.prototype.clear = WT, HT.prototype.delete = zT, HT.prototype.get = MT, HT.prototype.has = gT, HT.prototype.set = nT, TT.exports = HT
  },
  5425: (TT, UT, mT) => {
    var WT = mT(5329)(mT(5208), "Map");
    TT.exports = WT
  },
  5305: (TT, UT, mT) => {
    var WT = mT(5314),
      zT = mT(5433),
      MT = mT(5451),
      gT = mT(5456),
      nT = mT(5460);

    function HT(TT) {
      var UT = -1,
        mT = null == TT ? 0 : TT.length;
      for (this.clear(); ++UT < mT;) {
        var WT = TT[UT];
        this.set(WT[0], WT[1])
      }
    }
    HT.prototype.clear = WT, HT.prototype.delete = zT, HT.prototype.get = MT, HT.prototype.has = gT, HT.prototype.set = nT, TT.exports = HT
  },
  5862: (TT, UT, mT) => {
    var WT = mT(5329)(mT(5208), "Promise");
    TT.exports = WT
  },
  5869: (TT, UT, mT) => {
    var WT = mT(5329)(mT(5208), "Set");
    TT.exports = WT
  },
  5695: (TT, UT, mT) => {
    var WT = mT(5305),
      zT = mT(5703),
      MT = mT(5712);

    function gT(TT) {
      var UT = -1,
        mT = null == TT ? 0 : TT.length;
      for (this.__data__ = new WT; ++UT < mT;) this.add(TT[UT])
    }
    gT.prototype.add = gT.prototype.push = zT, gT.prototype.has = MT, TT.exports = gT
  },
  5649: (TT, UT, mT) => {
    var WT = mT(5387),
      zT = mT(5654),
      MT = mT(5657),
      gT = mT(5659),
      nT = mT(5664),
      HT = mT(5673);

    function kT(TT) {
      var UT = this.__data__ = new WT(TT);
      this.size = UT.size
    }
    kT.prototype.clear = zT, kT.prototype.delete = MT, kT.prototype.get = gT, kT.prototype.has = nT, kT.prototype.set = HT, TT.exports = kT
  },
  5234: (TT, UT, mT) => {
    var WT = mT(5208).Symbol;
    TT.exports = WT
  },
  5734: (TT, UT, mT) => {
    var WT = mT(5208).Uint8Array;
    TT.exports = WT
  },
  5872: (TT, UT, mT) => {
    var WT = mT(5329)(mT(5208), "WeakMap");
    TT.exports = WT
  },
  6011: TT => {
    TT.exports = function(TT, UT, mT) {
      switch (mT.length) {
        case 0:
          return TT.call(UT);
        case 1:
          return TT.call(UT, mT[0]);
        case 2:
          return TT.call(UT, mT[0], mT[1]);
        case 3:
          return TT.call(UT, mT[0], mT[1], mT[2])
      }
      return TT.apply(UT, mT)
    }
  },
  6345: TT => {
    TT.exports = function(TT, UT) {
      for (var mT = -1, WT = null == TT ? 0 : TT.length; ++mT < WT;)
        if (!UT(TT[mT], mT, TT)) return !1;
      return !0
    }
  },
  5769: TT => {
    TT.exports = function(TT, UT) {
      for (var mT = -1, WT = null == TT ? 0 : TT.length, zT = 0, MT = []; ++mT < WT;) {
        var gT = TT[mT];
        UT(gT, mT, TT) && (MT[zT++] = gT)
      }
      return MT
    }
  },
  6091: (TT, UT, mT) => {
    var WT = mT(6096);
    TT.exports = function(TT, UT) {
      return !!(null == TT ? 0 : TT.length) && WT(TT, UT, 0) > -1
    }
  },
  6119: TT => {
    TT.exports = function(TT, UT, mT) {
      for (var WT = -1, zT = null == TT ? 0 : TT.length; ++WT < zT;)
        if (mT(UT, TT[WT])) return !0;
      return !1
    }
  },
  5780: (TT, UT, mT) => {
    var WT = mT(5782),
      zT = mT(5606),
      MT = mT(5262),
      gT = mT(5784),
      nT = mT(5570),
      HT = mT(5800),
      kT = Object.prototype.hasOwnProperty;
    TT.exports = function(TT, UT) {
      var mT = MT(TT),
        jT = !mT && zT(TT),
        lT = !mT && !jT && gT(TT),
        LT = !mT && !jT && !lT && HT(TT),
        pT = mT || jT || lT || LT,
        BT = pT ? WT(TT.length, String) : [],
        ZT = BT.length;
      for (var cT in TT) !UT && !kT.call(TT, cT) || pT && ("length" == cT || lT && ("offset" == cT || "parent" == cT) || LT && ("buffer" == cT || "byteLength" == cT || "byteOffset" == cT) || nT(cT, ZT)) || BT.push(cT);
      return BT
    }
  },
  5471: TT => {
    TT.exports = function(TT, UT) {
      for (var mT = -1, WT = null == TT ? 0 : TT.length, zT = Array(WT); ++mT < WT;) zT[mT] = UT(TT[mT], mT, TT);
      return zT
    }
  },
  5592: TT => {
    TT.exports = function(TT, UT) {
      for (var mT = -1, WT = UT.length, zT = TT.length; ++mT < WT;) TT[zT + mT] = UT[mT];
      return TT
    }
  },
  5717: TT => {
    TT.exports = function(TT, UT) {
      for (var mT = -1, WT = null == TT ? 0 : TT.length; ++mT < WT;)
        if (UT(TT[mT], mT, TT)) return !0;
      return !1
    }
  },
  6174: TT => {
    TT.exports = function(TT) {
      return TT.split("")
    }
  },
  5400: (TT, UT, mT) => {
    var WT = mT(5403);
    TT.exports = function(TT, UT) {
      for (var mT = TT.length; mT--;)
        if (WT(TT[mT][0], UT)) return mT;
      return -1
    }
  },
  6335: (TT, UT, mT) => {
    var WT = mT(6027);
    TT.exports = function(TT, UT, mT) {
      "__proto__" == UT && WT ? WT(TT, UT, {
        configurable: !0,
        enumerable: !0,
        value: mT,
        writable: !0
      }) : TT[UT] = mT
    }
  },
  5952: (TT, UT, mT) => {
    var WT = mT(5954),
      zT = mT(5974)(WT);
    TT.exports = zT
  },
  6347: (TT, UT, mT) => {
    var WT = mT(5952);
    TT.exports = function(TT, UT) {
      var mT = !0;
      return WT(TT, (function(TT, WT, zT) {
        return mT = !!UT(TT, WT, zT)
      })), mT
    }
  },
  6253: (TT, UT, mT) => {
    var WT = mT(5228);
    TT.exports = function(TT, UT, mT) {
      for (var zT = -1, MT = TT.length; ++zT < MT;) {
        var gT = TT[zT],
          nT = UT(gT);
        if (null != nT && (void 0 === HT ? nT === nT && !WT(nT) : mT(nT, HT))) var HT = nT,
          kT = gT
      }
      return kT
    }
  },
  6101: TT => {
    TT.exports = function(TT, UT, mT, WT) {
      for (var zT = TT.length, MT = mT + (WT ? 1 : -1); WT ? MT-- : ++MT < zT;)
        if (UT(TT[MT], MT, TT)) return MT;
      return -1
    }
  },
  5586: (TT, UT, mT) => {
    var WT = mT(5592),
      zT = mT(5601);
    TT.exports = function TT(UT, mT, MT, gT, nT) {
      var HT = -1,
        kT = UT.length;
      for (MT || (MT = zT), nT || (nT = []); ++HT < kT;) {
        var jT = UT[HT];
        mT > 0 && MT(jT) ? mT > 1 ? TT(jT, mT - 1, MT, gT, nT) : WT(nT, jT) : gT || (nT[nT.length] = jT)
      }
      return nT
    }
  },
  5959: (TT, UT, mT) => {
    var WT = mT(5968)();
    TT.exports = WT
  },
  5954: (TT, UT, mT) => {
    var WT = mT(5959),
      zT = mT(5778);
    TT.exports = function(TT, UT) {
      return TT && WT(TT, UT, zT)
    }
  },
  5277: (TT, UT, mT) => {
    var WT = mT(5285),
      zT = mT(5477);
    TT.exports = function(TT, UT) {
      for (var mT = 0, MT = (UT = WT(UT, TT)).length; null != TT && mT < MT;) TT = TT[zT(UT[mT++])];
      return mT && mT == MT ? TT : void 0
    }
  },
  5759: (TT, UT, mT) => {
    var WT = mT(5592),
      zT = mT(5262);
    TT.exports = function(TT, UT, mT) {
      var MT = UT(TT);
      return zT(TT) ? MT : WT(MT, mT(TT))
    }
  },
  5232: (TT, UT, mT) => {
    var WT = mT(5234),
      zT = mT(5236),
      MT = mT(5238),
      gT = WT ? WT.toStringTag : void 0;
    TT.exports = function(TT) {
      return null == TT ? void 0 === TT ? "[object Undefined]" : "[object Null]" : gT && gT in Object(TT) ? zT(TT) : MT(TT)
    }
  },
  6262: TT => {
    TT.exports = function(TT, UT) {
      return TT > UT
    }
  },
  5906: TT => {
    TT.exports = function(TT, UT) {
      return null != TT && UT in Object(TT)
    }
  },
  6096: (TT, UT, mT) => {
    var WT = mT(6101),
      zT = mT(6108),
      MT = mT(6111);
    TT.exports = function(TT, UT, mT) {
      return UT === UT ? MT(TT, UT, mT) : WT(TT, zT, mT)
    }
  },
  5613: (TT, UT, mT) => {
    var WT = mT(5232),
      zT = mT(5247);
    TT.exports = function(TT) {
      return zT(TT) && "[object Arguments]" == WT(TT)
    }
  },
  5675: (TT, UT, mT) => {
    var WT = mT(5683),
      zT = mT(5247);
    TT.exports = function TT(UT, mT, MT, gT, nT) {
      return UT === mT || (null == UT || null == mT || !zT(UT) && !zT(mT) ? UT !== UT && mT !== mT : WT(UT, mT, MT, gT, TT, nT))
    }
  },
  5683: (TT, UT, mT) => {
    var WT = mT(5649),
      zT = mT(5687),
      MT = mT(5729),
      gT = mT(5747),
      nT = mT(5844),
      HT = mT(5262),
      kT = mT(5784),
      jT = mT(5800),
      lT = "[object Arguments]",
      LT = "[object Array]",
      pT = "[object Object]",
      BT = Object.prototype.hasOwnProperty;
    TT.exports = function(TT, UT, mT, ZT, cT, vT) {
      var fT = HT(TT),
        qT = HT(UT),
        iT = fT ? LT : nT(TT),
        bT = qT ? LT : nT(UT),
        OT = (iT = iT == lT ? pT : iT) == pT,
        eT = (bT = bT == lT ? pT : bT) == pT,
        YT = iT == bT;
      if (YT && kT(TT)) {
        if (!kT(UT)) return !1;
        fT = !0, OT = !1
      }
      if (YT && !OT) return vT || (vT = new WT), fT || jT(TT) ? zT(TT, UT, mT, ZT, cT, vT) : MT(TT, UT, iT, mT, ZT, cT, vT);
      if (!(1 & mT)) {
        var JT = OT && BT.call(TT, "__wrapped__"),
          xT = eT && BT.call(UT, "__wrapped__");
        if (JT || xT) {
          var dT = JT ? TT.value() : TT,
            wT = xT ? UT.value() : UT;
          return vT || (vT = new WT), cT(dT, wT, mT, ZT, vT)
        }
      }
      return !!YT && (vT || (vT = new WT), gT(TT, UT, mT, ZT, cT, vT))
    }
  },
  5643: (TT, UT, mT) => {
    var WT = mT(5649),
      zT = mT(5675);
    TT.exports = function(TT, UT, mT, MT) {
      var gT = mT.length,
        nT = gT,
        HT = !MT;
      if (null == TT) return !nT;
      for (TT = Object(TT); gT--;) {
        var kT = mT[gT];
        if (HT && kT[2] ? kT[1] !== TT[kT[0]] : !(kT[0] in TT)) return !1
      }
      for (; ++gT < nT;) {
        var jT = (kT = mT[gT])[0],
          lT = TT[jT],
          LT = kT[1];
        if (HT && kT[2]) {
          if (void 0 === lT && !(jT in TT)) return !1
        } else {
          var pT = new WT;
          if (MT) var BT = MT(lT, LT, jT, TT, UT, pT);
          if (!(void 0 === BT ? zT(LT, lT, 3, MT, pT) : BT)) return !1
        }
      }
      return !0
    }
  },
  6108: TT => {
    TT.exports = function(TT) {
      return TT !== TT
    }
  },
  5334: (TT, UT, mT) => {
    var WT = mT(5337),
      zT = mT(5342),
      MT = mT(5196),
      gT = mT(5354),
      nT = /^\[object .+?Constructor\]$/,
      HT = Function.prototype,
      kT = Object.prototype,
      jT = HT.toString,
      lT = kT.hasOwnProperty,
      LT = RegExp("^" + jT.call(lT).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    TT.exports = function(TT) {
      return !(!MT(TT) || zT(TT)) && (WT(TT) ? LT : nT).test(gT(TT))
    }
  },
  5809: (TT, UT, mT) => {
    var WT = mT(5232),
      zT = mT(5561),
      MT = mT(5247),
      gT = {};
    gT["[object Float32Array]"] = gT["[object Float64Array]"] = gT["[object Int8Array]"] = gT["[object Int16Array]"] = gT["[object Int32Array]"] = gT["[object Uint8Array]"] = gT["[object Uint8ClampedArray]"] = gT["[object Uint16Array]"] = gT["[object Uint32Array]"] = !0, gT["[object Arguments]"] = gT["[object Array]"] = gT["[object ArrayBuffer]"] = gT["[object Boolean]"] = gT["[object DataView]"] = gT["[object Date]"] = gT["[object Error]"] = gT["[object Function]"] = gT["[object Map]"] = gT["[object Number]"] = gT["[object Object]"] = gT["[object RegExp]"] = gT["[object Set]"] = gT["[object String]"] = gT["[object WeakMap]"] = !1, TT.exports = function(TT) {
      return MT(TT) && zT(TT.length) && !!gT[WT(TT)]
    }
  },
  5630: (TT, UT, mT) => {
    var WT = mT(5637),
      zT = mT(5895),
      MT = mT(5920),
      gT = mT(5262),
      nT = mT(5925);
    TT.exports = function(TT) {
      return "function" == typeof TT ? TT : null == TT ? MT : "object" == typeof TT ? gT(TT) ? zT(TT[0], TT[1]) : WT(TT) : nT(TT)
    }
  },
  5821: (TT, UT, mT) => {
    var WT = mT(5824),
      zT = mT(5831),
      MT = Object.prototype.hasOwnProperty;
    TT.exports = function(TT) {
      if (!WT(TT)) return zT(TT);
      var UT = [];
      for (var mT in Object(TT)) MT.call(TT, mT) && "constructor" != mT && UT.push(mT);
      return UT
    }
  },
  6269: TT => {
    TT.exports = function(TT, UT) {
      return TT < UT
    }
  },
  5944: (TT, UT, mT) => {
    var WT = mT(5952),
      zT = mT(5555);
    TT.exports = function(TT, UT) {
      var mT = -1,
        MT = zT(TT) ? Array(TT.length) : [];
      return WT(TT, (function(TT, WT, zT) {
        MT[++mT] = UT(TT, WT, zT)
      })), MT
    }
  },
  5637: (TT, UT, mT) => {
    var WT = mT(5643),
      zT = mT(5877),
      MT = mT(5888);
    TT.exports = function(TT) {
      var UT = zT(TT);
      return 1 == UT.length && UT[0][2] ? MT(UT[0][0], UT[0][1]) : function(mT) {
        return mT === TT || WT(mT, TT, UT)
      }
    }
  },
  5895: (TT, UT, mT) => {
    var WT = mT(5675),
      zT = mT(5275),
      MT = mT(5903),
      gT = mT(5289),
      nT = mT(5884),
      HT = mT(5888),
      kT = mT(5477);
    TT.exports = function(TT, UT) {
      return gT(TT) && nT(UT) ? HT(kT(TT), UT) : function(mT) {
        var gT = zT(mT, TT);
        return void 0 === gT && gT === UT ? MT(mT, TT) : WT(UT, gT, 3)
      }
    }
  },
  5621: (TT, UT, mT) => {
    var WT = mT(5471),
      zT = mT(5277),
      MT = mT(5630),
      gT = mT(5944),
      nT = mT(5979),
      HT = mT(5813),
      kT = mT(5984),
      jT = mT(5920),
      lT = mT(5262);
    TT.exports = function(TT, UT, mT) {
      UT = UT.length ? WT(UT, (function(TT) {
        return lT(TT) ? function(UT) {
          return zT(UT, 1 === TT.length ? TT[0] : TT)
        } : TT
      })) : [jT];
      var LT = -1;
      UT = WT(UT, HT(MT));
      var pT = gT(TT, (function(TT, mT, zT) {
        return {
          criteria: WT(UT, (function(UT) {
            return UT(TT)
          })),
          index: ++LT,
          value: TT
        }
      }));
      return nT(pT, (function(TT, UT) {
        return kT(TT, UT, mT)
      }))
    }
  },
  5929: TT => {
    TT.exports = function(TT) {
      return function(UT) {
        return null == UT ? void 0 : UT[TT]
      }
    }
  },
  5937: (TT, UT, mT) => {
    var WT = mT(5277);
    TT.exports = function(TT) {
      return function(UT) {
        return WT(UT, TT)
      }
    }
  },
  5545: TT => {
    var UT = Math.ceil,
      mT = Math.max;
    TT.exports = function(TT, WT, zT, MT) {
      for (var gT = -1, nT = mT(UT((WT - TT) / (zT || 1)), 0), HT = Array(nT); nT--;) HT[MT ? nT : ++gT] = TT, TT += zT;
      return HT
    }
  },
  5997: (TT, UT, mT) => {
    var WT = mT(5920),
      zT = mT(6003),
      MT = mT(6013);
    TT.exports = function(TT, UT) {
      return MT(zT(TT, UT, WT), TT + "")
    }
  },
  6016: (TT, UT, mT) => {
    var WT = mT(6025),
      zT = mT(6027),
      MT = mT(5920),
      gT = zT ? function(TT, UT) {
        return zT(TT, "toString", {
          configurable: !0,
          enumerable: !1,
          value: WT(UT),
          writable: !0
        })
      } : MT;
    TT.exports = gT
  },
  6161: TT => {
    TT.exports = function(TT, UT, mT) {
      var WT = -1,
        zT = TT.length;
      UT < 0 && (UT = -UT > zT ? 0 : zT + UT), (mT = mT > zT ? zT : mT) < 0 && (mT += zT), zT = UT > mT ? 0 : mT - UT >>> 0, UT >>>= 0;
      for (var MT = Array(zT); ++WT < zT;) MT[WT] = TT[WT + UT];
      return MT
    }
  },
  6407: (TT, UT, mT) => {
    var WT = mT(5952);
    TT.exports = function(TT, UT) {
      var mT;
      return WT(TT, (function(TT, WT, zT) {
        return !(mT = UT(TT, WT, zT))
      })), !!mT
    }
  },
  5979: TT => {
    TT.exports = function(TT, UT) {
      var mT = TT.length;
      for (TT.sort(UT); mT--;) TT[mT] = TT[mT].value;
      return TT
    }
  },
  5782: TT => {
    TT.exports = function(TT, UT) {
      for (var mT = -1, WT = Array(TT); ++mT < TT;) WT[mT] = UT(mT);
      return WT
    }
  },
  5469: (TT, UT, mT) => {
    var WT = mT(5234),
      zT = mT(5471),
      MT = mT(5262),
      gT = mT(5228),
      nT = WT ? WT.prototype : void 0,
      HT = nT ? nT.toString : void 0;
    TT.exports = function TT(UT) {
      if ("string" == typeof UT) return UT;
      if (MT(UT)) return zT(UT, TT) + "";
      if (gT(UT)) return HT ? HT.call(UT) : "";
      var mT = UT + "";
      return "0" == mT && 1 / UT == -1 / 0 ? "-0" : mT
    }
  },
  5219: (TT, UT, mT) => {
    var WT = mT(5222),
      zT = /^\s+/;
    TT.exports = function(TT) {
      return TT ? TT.slice(0, WT(TT) + 1).replace(zT, "") : TT
    }
  },
  5813: TT => {
    TT.exports = function(TT) {
      return function(UT) {
        return TT(UT)
      }
    }
  },
  6085: (TT, UT, mT) => {
    var WT = mT(5695),
      zT = mT(6091),
      MT = mT(6119),
      gT = mT(5721),
      nT = mT(6127),
      HT = mT(5744);
    TT.exports = function(TT, UT, mT) {
      var kT = -1,
        jT = zT,
        lT = TT.length,
        LT = !0,
        pT = [],
        BT = pT;
      if (mT) LT = !1, jT = MT;
      else if (lT >= 200) {
        var ZT = UT ? null : nT(TT);
        if (ZT) return HT(ZT);
        LT = !1, jT = gT, BT = new WT
      } else BT = UT ? [] : pT;
      TT: for (; ++kT < lT;) {
        var cT = TT[kT],
          vT = UT ? UT(cT) : cT;
        if (cT = mT || 0 !== cT ? cT : 0, LT && vT === vT) {
          for (var fT = BT.length; fT--;)
            if (BT[fT] === vT) continue TT;
          UT && BT.push(vT), pT.push(cT)
        } else jT(BT, vT, mT) || (BT !== pT && BT.push(vT), pT.push(cT))
      }
      return pT
    }
  },
  5721: TT => {
    TT.exports = function(TT, UT) {
      return TT.has(UT)
    }
  },
  5285: (TT, UT, mT) => {
    var WT = mT(5262),
      zT = mT(5289),
      MT = mT(5293),
      gT = mT(5466);
    TT.exports = function(TT, UT) {
      return WT(TT) ? TT : zT(TT, UT) ? [TT] : MT(gT(TT))
    }
  },
  6155: (TT, UT, mT) => {
    var WT = mT(6161);
    TT.exports = function(TT, UT, mT) {
      var zT = TT.length;
      return mT = void 0 === mT ? zT : mT, !UT && mT >= zT ? TT : WT(TT, UT, mT)
    }
  },
  5993: (TT, UT, mT) => {
    var WT = mT(5228);
    TT.exports = function(TT, UT) {
      if (TT !== UT) {
        var mT = void 0 !== TT,
          zT = null === TT,
          MT = TT === TT,
          gT = WT(TT),
          nT = void 0 !== UT,
          HT = null === UT,
          kT = UT === UT,
          jT = WT(UT);
        if (!HT && !jT && !gT && TT > UT || gT && nT && kT && !HT && !jT || zT && nT && kT || !mT && kT || !MT) return 1;
        if (!zT && !gT && !jT && TT < UT || jT && mT && MT && !zT && !gT || HT && mT && MT || !nT && MT || !kT) return -1
      }
      return 0
    }
  },
  5984: (TT, UT, mT) => {
    var WT = mT(5993);
    TT.exports = function(TT, UT, mT) {
      for (var zT = -1, MT = TT.criteria, gT = UT.criteria, nT = MT.length, HT = mT.length; ++zT < nT;) {
        var kT = WT(MT[zT], gT[zT]);
        if (kT) return zT >= HT ? kT : kT * ("desc" == mT[zT] ? -1 : 1)
      }
      return TT.index - UT.index
    }
  },
  5346: (TT, UT, mT) => {
    var WT = mT(5208)["__core-js_shared__"];
    TT.exports = WT
  },
  5974: (TT, UT, mT) => {
    var WT = mT(5555);
    TT.exports = function(TT, UT) {
      return function(mT, zT) {
        if (null == mT) return mT;
        if (!WT(mT)) return TT(mT, zT);
        for (var MT = mT.length, gT = UT ? MT : -1, nT = Object(mT);
          (UT ? gT-- : ++gT < MT) && !1 !== zT(nT[gT], gT, nT););
        return mT
      }
    }
  },
  5968: TT => {
    TT.exports = function(TT) {
      return function(UT, mT, WT) {
        for (var zT = -1, MT = Object(UT), gT = WT(UT), nT = gT.length; nT--;) {
          var HT = gT[TT ? nT : ++zT];
          if (!1 === mT(MT[HT], HT, MT)) break
        }
        return UT
      }
    }
  },
  6146: (TT, UT, mT) => {
    var WT = mT(6155),
      zT = mT(6165),
      MT = mT(6170),
      gT = mT(5466);
    TT.exports = function(TT) {
      return function(UT) {
        UT = gT(UT);
        var mT = zT(UT) ? MT(UT) : void 0,
          nT = mT ? mT[0] : UT.charAt(0),
          HT = mT ? WT(mT, 1).join("") : UT.slice(1);
        return nT[TT]() + HT
      }
    }
  },
  6423: (TT, UT, mT) => {
    var WT = mT(5630),
      zT = mT(5555),
      MT = mT(5778);
    TT.exports = function(TT) {
      return function(UT, mT, gT) {
        var nT = Object(UT);
        if (!zT(UT)) {
          var HT = WT(mT, 3);
          UT = MT(UT), mT = function(TT) {
            return HT(nT[TT], TT, nT)
          }
        }
        var kT = TT(UT, mT, gT);
        return kT > -1 ? nT[HT ? UT[kT] : kT] : void 0
      }
    }
  },
  5539: (TT, UT, mT) => {
    var WT = mT(5545),
      zT = mT(5547),
      MT = mT(5577);
    TT.exports = function(TT) {
      return function(UT, mT, gT) {
        return gT && "number" != typeof gT && zT(UT, mT, gT) && (mT = gT = void 0), UT = MT(UT), void 0 === mT ? (mT = UT, UT = 0) : mT = MT(mT), gT = void 0 === gT ? UT < mT ? 1 : -1 : MT(gT), WT(UT, mT, gT, TT)
      }
    }
  },
  6127: (TT, UT, mT) => {
    var WT = mT(5869),
      zT = mT(6129),
      MT = mT(5744),
      gT = WT && 1 / MT(new WT([, -0]))[1] == 1 / 0 ? function(TT) {
        return new WT(TT)
      } : zT;
    TT.exports = gT
  },
  6027: (TT, UT, mT) => {
    var WT = mT(5329),
      zT = function() {
        try {
          var TT = WT(Object, "defineProperty");
          return TT({}, "", {}), TT
        } catch (UT) {}
      }();
    TT.exports = zT
  },
  5687: (TT, UT, mT) => {
    var WT = mT(5695),
      zT = mT(5717),
      MT = mT(5721);
    TT.exports = function(TT, UT, mT, gT, nT, HT) {
      var kT = 1 & mT,
        jT = TT.length,
        lT = UT.length;
      if (jT != lT && !(kT && lT > jT)) return !1;
      var LT = HT.get(TT),
        pT = HT.get(UT);
      if (LT && pT) return LT == UT && pT == TT;
      var BT = -1,
        ZT = !0,
        cT = 2 & mT ? new WT : void 0;
      for (HT.set(TT, UT), HT.set(UT, TT); ++BT < jT;) {
        var vT = TT[BT],
          fT = UT[BT];
        if (gT) var qT = kT ? gT(fT, vT, BT, UT, TT, HT) : gT(vT, fT, BT, TT, UT, HT);
        if (void 0 !== qT) {
          if (qT) continue;
          ZT = !1;
          break
        }
        if (cT) {
          if (!zT(UT, (function(TT, UT) {
              if (!MT(cT, UT) && (vT === TT || nT(vT, TT, mT, gT, HT))) return cT.push(UT)
            }))) {
            ZT = !1;
            break
          }
        } else if (vT !== fT && !nT(vT, fT, mT, gT, HT)) {
          ZT = !1;
          break
        }
      }
      return HT.delete(TT), HT.delete(UT), ZT
    }
  },
  5729: (TT, UT, mT) => {
    var WT = mT(5234),
      zT = mT(5734),
      MT = mT(5403),
      gT = mT(5687),
      nT = mT(5738),
      HT = mT(5744),
      kT = WT ? WT.prototype : void 0,
      jT = kT ? kT.valueOf : void 0;
    TT.exports = function(TT, UT, mT, WT, kT, lT, LT) {
      switch (mT) {
        case "[object DataView]":
          if (TT.byteLength != UT.byteLength || TT.byteOffset != UT.byteOffset) return !1;
          TT = TT.buffer, UT = UT.buffer;
        case "[object ArrayBuffer]":
          return !(TT.byteLength != UT.byteLength || !lT(new zT(TT), new zT(UT)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return MT(+TT, +UT);
        case "[object Error]":
          return TT.name == UT.name && TT.message == UT.message;
        case "[object RegExp]":
        case "[object String]":
          return TT == UT + "";
        case "[object Map]":
          var pT = nT;
        case "[object Set]":
          var BT = 1 & WT;
          if (pT || (pT = HT), TT.size != UT.size && !BT) return !1;
          var ZT = LT.get(TT);
          if (ZT) return ZT == UT;
          WT |= 2, LT.set(TT, UT);
          var cT = gT(pT(TT), pT(UT), WT, kT, lT, LT);
          return LT.delete(TT), cT;
        case "[object Symbol]":
          if (jT) return jT.call(TT) == jT.call(UT)
      }
      return !1
    }
  },
  5747: (TT, UT, mT) => {
    var WT = mT(5754),
      zT = Object.prototype.hasOwnProperty;
    TT.exports = function(TT, UT, mT, MT, gT, nT) {
      var HT = 1 & mT,
        kT = WT(TT),
        jT = kT.length;
      if (jT != WT(UT).length && !HT) return !1;
      for (var lT = jT; lT--;) {
        var LT = kT[lT];
        if (!(HT ? LT in UT : zT.call(UT, LT))) return !1
      }
      var pT = nT.get(TT),
        BT = nT.get(UT);
      if (pT && BT) return pT == UT && BT == TT;
      var ZT = !0;
      nT.set(TT, UT), nT.set(UT, TT);
      for (var cT = HT; ++lT < jT;) {
        var vT = TT[LT = kT[lT]],
          fT = UT[LT];
        if (MT) var qT = HT ? MT(fT, vT, LT, UT, TT, nT) : MT(vT, fT, LT, TT, UT, nT);
        if (!(void 0 === qT ? vT === fT || gT(vT, fT, mT, MT, nT) : qT)) {
          ZT = !1;
          break
        }
        cT || (cT = "constructor" == LT)
      }
      if (ZT && !cT) {
        var iT = TT.constructor,
          bT = UT.constructor;
        iT == bT || !("constructor" in TT) || !("constructor" in UT) || "function" == typeof iT && iT instanceof iT && "function" == typeof bT && bT instanceof bT || (ZT = !1)
      }
      return nT.delete(TT), nT.delete(UT), ZT
    }
  },
  5213: (TT, UT, mT) => {
    var WT = "object" == typeof mT.g && mT.g && mT.g.Object === Object && mT.g;
    TT.exports = WT
  },
  5754: (TT, UT, mT) => {
    var WT = mT(5759),
      zT = mT(5762),
      MT = mT(5778);
    TT.exports = function(TT) {
      return WT(TT, MT, zT)
    }
  },
  5440: (TT, UT, mT) => {
    var WT = mT(5447);
    TT.exports = function(TT, UT) {
      var mT = TT.__data__;
      return WT(UT) ? mT["string" == typeof UT ? "string" : "hash"] : mT.map
    }
  },
  5877: (TT, UT, mT) => {
    var WT = mT(5884),
      zT = mT(5778);
    TT.exports = function(TT) {
      for (var UT = zT(TT), mT = UT.length; mT--;) {
        var MT = UT[mT],
          gT = TT[MT];
        UT[mT] = [MT, gT, WT(gT)]
      }
      return UT
    }
  },
  5329: (TT, UT, mT) => {
    var WT = mT(5334),
      zT = mT(5356);
    TT.exports = function(TT, UT) {
      var mT = zT(TT, UT);
      return WT(mT) ? mT : void 0
    }
  },
  6381: (TT, UT, mT) => {
    var WT = mT(5837)(Object.getPrototypeOf, Object);
    TT.exports = WT
  },
  5236: (TT, UT, mT) => {
    var WT = mT(5234),
      zT = Object.prototype,
      MT = zT.hasOwnProperty,
      gT = zT.toString,
      nT = WT ? WT.toStringTag : void 0;
    TT.exports = function(TT) {
      var UT = MT.call(TT, nT),
        mT = TT[nT];
      try {
        TT[nT] = void 0;
        var WT = !0
      } catch (HT) {}
      var zT = gT.call(TT);
      return WT && (UT ? TT[nT] = mT : delete TT[nT]), zT
    }
  },
  5762: (TT, UT, mT) => {
    var WT = mT(5769),
      zT = mT(5774),
      MT = Object.prototype.propertyIsEnumerable,
      gT = Object.getOwnPropertySymbols,
      nT = gT ? function(TT) {
        return null == TT ? [] : (TT = Object(TT), WT(gT(TT), (function(UT) {
          return MT.call(TT, UT)
        })))
      } : zT;
    TT.exports = nT
  },
  5844: (TT, UT, mT) => {
    var WT = mT(5853),
      zT = mT(5425),
      MT = mT(5862),
      gT = mT(5869),
      nT = mT(5872),
      HT = mT(5232),
      kT = mT(5354),
      jT = "[object Map]",
      lT = "[object Promise]",
      LT = "[object Set]",
      pT = "[object WeakMap]",
      BT = "[object DataView]",
      ZT = kT(WT),
      cT = kT(zT),
      vT = kT(MT),
      fT = kT(gT),
      qT = kT(nT),
      iT = HT;
    (WT && iT(new WT(new ArrayBuffer(1))) != BT || zT && iT(new zT) != jT || MT && iT(MT.resolve()) != lT || gT && iT(new gT) != LT || nT && iT(new nT) != pT) && (iT = function(TT) {
      var UT = HT(TT),
        mT = "[object Object]" == UT ? TT.constructor : void 0,
        WT = mT ? kT(mT) : "";
      if (WT) switch (WT) {
        case ZT:
          return BT;
        case cT:
          return jT;
        case vT:
          return lT;
        case fT:
          return LT;
        case qT:
          return pT
      }
      return UT
    }), TT.exports = iT
  },
  5356: TT => {
    TT.exports = function(TT, UT) {
      return null == TT ? void 0 : TT[UT]
    }
  },
  5915: (TT, UT, mT) => {
    var WT = mT(5285),
      zT = mT(5606),
      MT = mT(5262),
      gT = mT(5570),
      nT = mT(5561),
      HT = mT(5477);
    TT.exports = function(TT, UT, mT) {
      for (var kT = -1, jT = (UT = WT(UT, TT)).length, lT = !1; ++kT < jT;) {
        var LT = HT(UT[kT]);
        if (!(lT = null != TT && mT(TT, LT))) break;
        TT = TT[LT]
      }
      return lT || ++kT != jT ? lT : !!(jT = null == TT ? 0 : TT.length) && nT(jT) && gT(LT, jT) && (MT(TT) || zT(TT))
    }
  },
  6165: TT => {
    var UT = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    TT.exports = function(TT) {
      return UT.test(TT)
    }
  },
  5320: (TT, UT, mT) => {
    var WT = mT(5324);
    TT.exports = function() {
      this.__data__ = WT ? WT(null) : {}, this.size = 0
    }
  },
  5364: TT => {
    TT.exports = function(TT) {
      var UT = this.has(TT) && delete this.__data__[TT];
      return this.size -= UT ? 1 : 0, UT
    }
  },
  5372: (TT, UT, mT) => {
    var WT = mT(5324),
      zT = Object.prototype.hasOwnProperty;
    TT.exports = function(TT) {
      var UT = this.__data__;
      if (WT) {
        var mT = UT[TT];
        return "__lodash_hash_undefined__" === mT ? void 0 : mT
      }
      return zT.call(UT, TT) ? UT[TT] : void 0
    }
  },
  5376: (TT, UT, mT) => {
    var WT = mT(5324),
      zT = Object.prototype.hasOwnProperty;
    TT.exports = function(TT) {
      var UT = this.__data__;
      return WT ? void 0 !== UT[TT] : zT.call(UT, TT)
    }
  },
  5381: (TT, UT, mT) => {
    var WT = mT(5324);
    TT.exports = function(TT, UT) {
      var mT = this.__data__;
      return this.size += this.has(TT) ? 0 : 1, mT[TT] = WT && void 0 === UT ? "__lodash_hash_undefined__" : UT, this
    }
  },
  5601: (TT, UT, mT) => {
    var WT = mT(5234),
      zT = mT(5606),
      MT = mT(5262),
      gT = WT ? WT.isConcatSpreadable : void 0;
    TT.exports = function(TT) {
      return MT(TT) || zT(TT) || !!(gT && TT && TT[gT])
    }
  },
  5570: TT => {
    var UT = /^(?:0|[1-9]\d*)$/;
    TT.exports = function(TT, mT) {
      var WT = typeof TT;
      return !!(mT = null == mT ? 9007199254740991 : mT) && ("number" == WT || "symbol" != WT && UT.test(TT)) && TT > -1 && TT % 1 == 0 && TT < mT
    }
  },
  5547: (TT, UT, mT) => {
    var WT = mT(5403),
      zT = mT(5555),
      MT = mT(5570),
      gT = mT(5196);
    TT.exports = function(TT, UT, mT) {
      if (!gT(mT)) return !1;
      var nT = typeof UT;
      return !!("number" == nT ? zT(mT) && MT(UT, mT.length) : "string" == nT && UT in mT) && WT(mT[UT], TT)
    }
  },
  5289: (TT, UT, mT) => {
    var WT = mT(5262),
      zT = mT(5228),
      MT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      gT = /^\w*$/;
    TT.exports = function(TT, UT) {
      if (WT(TT)) return !1;
      var mT = typeof TT;
      return !("number" != mT && "symbol" != mT && "boolean" != mT && null != TT && !zT(TT)) || (gT.test(TT) || !MT.test(TT) || null != UT && TT in Object(UT))
    }
  },
  5447: TT => {
    TT.exports = function(TT) {
      var UT = typeof TT;
      return "string" == UT || "number" == UT || "symbol" == UT || "boolean" == UT ? "__proto__" !== TT : null === TT
    }
  },
  5342: (TT, UT, mT) => {
    var WT = mT(5346),
      zT = function() {
        var TT = /[^.]+$/.exec(WT && WT.keys && WT.keys.IE_PROTO || "");
        return TT ? "Symbol(src)_1." + TT : ""
      }();
    TT.exports = function(TT) {
      return !!zT && zT in TT
    }
  },
  5824: TT => {
    var UT = Object.prototype;
    TT.exports = function(TT) {
      var mT = TT && TT.constructor;
      return TT === ("function" == typeof mT && mT.prototype || UT)
    }
  },
  5884: (TT, UT, mT) => {
    var WT = mT(5196);
    TT.exports = function(TT) {
      return TT === TT && !WT(TT)
    }
  },
  5392: TT => {
    TT.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5398: (TT, UT, mT) => {
    var WT = mT(5400),
      zT = Array.prototype.splice;
    TT.exports = function(TT) {
      var UT = this.__data__,
        mT = WT(UT, TT);
      return !(mT < 0) && (mT == UT.length - 1 ? UT.pop() : zT.call(UT, mT, 1), --this.size, !0)
    }
  },
  5412: (TT, UT, mT) => {
    var WT = mT(5400);
    TT.exports = function(TT) {
      var UT = this.__data__,
        mT = WT(UT, TT);
      return mT < 0 ? void 0 : UT[mT][1]
    }
  },
  5416: (TT, UT, mT) => {
    var WT = mT(5400);
    TT.exports = function(TT) {
      return WT(this.__data__, TT) > -1
    }
  },
  5419: (TT, UT, mT) => {
    var WT = mT(5400);
    TT.exports = function(TT, UT) {
      var mT = this.__data__,
        zT = WT(mT, TT);
      return zT < 0 ? (++this.size, mT.push([TT, UT])) : mT[zT][1] = UT, this
    }
  },
  5314: (TT, UT, mT) => {
    var WT = mT(5316),
      zT = mT(5387),
      MT = mT(5425);
    TT.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new WT,
        map: new(MT || zT),
        string: new WT
      }
    }
  },
  5433: (TT, UT, mT) => {
    var WT = mT(5440);
    TT.exports = function(TT) {
      var UT = WT(this, TT).delete(TT);
      return this.size -= UT ? 1 : 0, UT
    }
  },
  5451: (TT, UT, mT) => {
    var WT = mT(5440);
    TT.exports = function(TT) {
      return WT(this, TT).get(TT)
    }
  },
  5456: (TT, UT, mT) => {
    var WT = mT(5440);
    TT.exports = function(TT) {
      return WT(this, TT).has(TT)
    }
  },
  5460: (TT, UT, mT) => {
    var WT = mT(5440);
    TT.exports = function(TT, UT) {
      var mT = WT(this, TT),
        zT = mT.size;
      return mT.set(TT, UT), this.size += mT.size == zT ? 0 : 1, this
    }
  },
  5738: TT => {
    TT.exports = function(TT) {
      var UT = -1,
        mT = Array(TT.size);
      return TT.forEach((function(TT, WT) {
        mT[++UT] = [WT, TT]
      })), mT
    }
  },
  5888: TT => {
    TT.exports = function(TT, UT) {
      return function(mT) {
        return null != mT && (mT[TT] === UT && (void 0 !== UT || TT in Object(mT)))
      }
    }
  },
  5298: (TT, UT, mT) => {
    var WT = mT(5301);
    TT.exports = function(TT) {
      var UT = WT(TT, (function(TT) {
          return 500 === mT.size && mT.clear(), TT
        })),
        mT = UT.cache;
      return UT
    }
  },
  5324: (TT, UT, mT) => {
    var WT = mT(5329)(Object, "create");
    TT.exports = WT
  },
  5831: (TT, UT, mT) => {
    var WT = mT(5837)(Object.keys, Object);
    TT.exports = WT
  },
  5819: (TT, UT, mT) => {
    TT = mT.nmd(TT);
    var WT = mT(5213),
      zT = UT && !UT.nodeType && UT,
      MT = zT && TT && !TT.nodeType && TT,
      gT = MT && MT.exports === zT && WT.process,
      nT = function() {
        try {
          var TT = MT && MT.require && MT.require("util").types;
          return TT || gT && gT.binding && gT.binding("util")
        } catch (UT) {}
      }();
    TT.exports = nT
  },
  5238: TT => {
    var UT = Object.prototype.toString;
    TT.exports = function(TT) {
      return UT.call(TT)
    }
  },
  5837: TT => {
    TT.exports = function(TT, UT) {
      return function(mT) {
        return TT(UT(mT))
      }
    }
  },
  6003: (TT, UT, mT) => {
    var WT = mT(6011),
      zT = Math.max;
    TT.exports = function(TT, UT, mT) {
      return UT = zT(void 0 === UT ? TT.length - 1 : UT, 0),
        function() {
          for (var MT = arguments, gT = -1, nT = zT(MT.length - UT, 0), HT = Array(nT); ++gT < nT;) HT[gT] = MT[UT + gT];
          gT = -1;
          for (var kT = Array(UT + 1); ++gT < UT;) kT[gT] = MT[gT];
          return kT[UT] = mT(HT), WT(TT, this, kT)
        }
    }
  },
  5208: (TT, UT, mT) => {
    var WT = mT(5213),
      zT = "object" == typeof self && self && self.Object === Object && self,
      MT = WT || zT || Function("return this")();
    TT.exports = MT
  },
  5703: TT => {
    TT.exports = function(TT) {
      return this.__data__.set(TT, "__lodash_hash_undefined__"), this
    }
  },
  5712: TT => {
    TT.exports = function(TT) {
      return this.__data__.has(TT)
    }
  },
  5744: TT => {
    TT.exports = function(TT) {
      var UT = -1,
        mT = Array(TT.size);
      return TT.forEach((function(TT) {
        mT[++UT] = TT
      })), mT
    }
  },
  6013: (TT, UT, mT) => {
    var WT = mT(6016),
      zT = mT(6035)(WT);
    TT.exports = zT
  },
  6035: TT => {
    var UT = Date.now;
    TT.exports = function(TT) {
      var mT = 0,
        WT = 0;
      return function() {
        var zT = UT(),
          MT = 16 - (zT - WT);
        if (WT = zT, MT > 0) {
          if (++mT >= 800) return arguments[0]
        } else mT = 0;
        return TT.apply(void 0, arguments)
      }
    }
  },
  5654: (TT, UT, mT) => {
    var WT = mT(5387);
    TT.exports = function() {
      this.__data__ = new WT, this.size = 0
    }
  },
  5657: TT => {
    TT.exports = function(TT) {
      var UT = this.__data__,
        mT = UT.delete(TT);
      return this.size = UT.size, mT
    }
  },
  5659: TT => {
    TT.exports = function(TT) {
      return this.__data__.get(TT)
    }
  },
  5664: TT => {
    TT.exports = function(TT) {
      return this.__data__.has(TT)
    }
  },
  5673: (TT, UT, mT) => {
    var WT = mT(5387),
      zT = mT(5425),
      MT = mT(5305);
    TT.exports = function(TT, UT) {
      var mT = this.__data__;
      if (mT instanceof WT) {
        var gT = mT.__data__;
        if (!zT || gT.length < 199) return gT.push([TT, UT]), this.size = ++mT.size, this;
        mT = this.__data__ = new MT(gT)
      }
      return mT.set(TT, UT), this.size = mT.size, this
    }
  },
  6111: TT => {
    TT.exports = function(TT, UT, mT) {
      for (var WT = mT - 1, zT = TT.length; ++WT < zT;)
        if (TT[WT] === UT) return WT;
      return -1
    }
  },
  6170: (TT, UT, mT) => {
    var WT = mT(6174),
      zT = mT(6165),
      MT = mT(6178);
    TT.exports = function(TT) {
      return zT(TT) ? MT(TT) : WT(TT)
    }
  },
  5293: (TT, UT, mT) => {
    var WT = mT(5298),
      zT = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      MT = /\\(\\)?/g,
      gT = WT((function(TT) {
        var UT = [];
        return 46 === TT.charCodeAt(0) && UT.push(""), TT.replace(zT, (function(TT, mT, WT, zT) {
          UT.push(WT ? zT.replace(MT, "$1") : mT || TT)
        })), UT
      }));
    TT.exports = gT
  },
  5477: (TT, UT, mT) => {
    var WT = mT(5228);
    TT.exports = function(TT) {
      if ("string" == typeof TT || WT(TT)) return TT;
      var UT = TT + "";
      return "0" == UT && 1 / TT == -1 / 0 ? "-0" : UT
    }
  },
  5354: TT => {
    var UT = Function.prototype.toString;
    TT.exports = function(TT) {
      if (null != TT) {
        try {
          return UT.call(TT)
        } catch (mT) {}
        try {
          return TT + ""
        } catch (mT) {}
      }
      return ""
    }
  },
  5222: TT => {
    var UT = /\s/;
    TT.exports = function(TT) {
      for (var mT = TT.length; mT-- && UT.test(TT.charAt(mT)););
      return mT
    }
  },
  6178: TT => {
    var UT = "\\ud800-\\udfff",
      mT = "[" + UT + "]",
      WT = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      zT = "\\ud83c[\\udffb-\\udfff]",
      MT = "[^" + UT + "]",
      gT = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      nT = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      HT = "(?:" + WT + "|" + zT + ")" + "?",
      kT = "[\\ufe0e\\ufe0f]?",
      jT = kT + HT + ("(?:\\u200d(?:" + [MT, gT, nT].join("|") + ")" + kT + HT + ")*"),
      lT = "(?:" + [MT + WT + "?", WT, gT, nT, mT].join("|") + ")",
      LT = RegExp(zT + "(?=" + zT + ")|" + lT + jT, "g");
    TT.exports = function(TT) {
      return TT.match(LT) || []
    }
  },
  6025: TT => {
    TT.exports = function(TT) {
      return function() {
        return TT
      }
    }
  },
  5194: (TT, UT, mT) => {
    var WT = mT(5196),
      zT = mT(5204),
      MT = mT(5216),
      gT = Math.max,
      nT = Math.min;
    TT.exports = function(TT, UT, mT) {
      var HT, kT, jT, lT, LT, pT, BT = 0,
        ZT = !1,
        cT = !1,
        vT = !0;
      if ("function" != typeof TT) throw new TypeError("Expected a function");

      function fT(UT) {
        var mT = HT,
          WT = kT;
        return HT = kT = void 0, BT = UT, lT = TT.apply(WT, mT)
      }

      function qT(TT) {
        var mT = TT - pT;
        return void 0 === pT || mT >= UT || mT < 0 || cT && TT - BT >= jT
      }

      function iT() {
        var TT = zT();
        if (qT(TT)) return bT(TT);
        LT = setTimeout(iT, function(TT) {
          var mT = UT - (TT - pT);
          return cT ? nT(mT, jT - (TT - BT)) : mT
        }(TT))
      }

      function bT(TT) {
        return LT = void 0, vT && HT ? fT(TT) : (HT = kT = void 0, lT)
      }

      function OT() {
        var TT = zT(),
          mT = qT(TT);
        if (HT = arguments, kT = this, pT = TT, mT) {
          if (void 0 === LT) return function(TT) {
            return BT = TT, LT = setTimeout(iT, UT), ZT ? fT(TT) : lT
          }(pT);
          if (cT) return clearTimeout(LT), LT = setTimeout(iT, UT), fT(pT)
        }
        return void 0 === LT && (LT = setTimeout(iT, UT)), lT
      }
      return UT = MT(UT) || 0, WT(mT) && (ZT = !!mT.leading, jT = (cT = "maxWait" in mT) ? gT(MT(mT.maxWait) || 0, UT) : jT, vT = "trailing" in mT ? !!mT.trailing : vT), OT.cancel = function() {
        void 0 !== LT && clearTimeout(LT), BT = 0, HT = pT = kT = LT = void 0
      }, OT.flush = function() {
        return void 0 === LT ? lT : bT(zT())
      }, OT
    }
  },
  5403: TT => {
    TT.exports = function(TT, UT) {
      return TT === UT || TT !== TT && UT !== UT
    }
  },
  6338: (TT, UT, mT) => {
    var WT = mT(6345),
      zT = mT(6347),
      MT = mT(5630),
      gT = mT(5262),
      nT = mT(5547);
    TT.exports = function(TT, UT, mT) {
      var HT = gT(TT) ? WT : zT;
      return mT && nT(TT, UT, mT) && (UT = void 0), HT(TT, MT(UT, 3))
    }
  },
  6419: (TT, UT, mT) => {
    var WT = mT(6423)(mT(6427));
    TT.exports = WT
  },
  6427: (TT, UT, mT) => {
    var WT = mT(6101),
      zT = mT(5630),
      MT = mT(6432),
      gT = Math.max;
    TT.exports = function(TT, UT, mT) {
      var nT = null == TT ? 0 : TT.length;
      if (!nT) return -1;
      var HT = null == mT ? 0 : MT(mT);
      return HT < 0 && (HT = gT(nT + HT, 0)), WT(TT, zT(UT, 3), HT)
    }
  },
  6277: (TT, UT, mT) => {
    var WT = mT(5586),
      zT = mT(6286);
    TT.exports = function(TT, UT) {
      return WT(zT(TT, UT), 1)
    }
  },
  5275: (TT, UT, mT) => {
    var WT = mT(5277);
    TT.exports = function(TT, UT, mT) {
      var zT = null == TT ? void 0 : WT(TT, UT);
      return void 0 === zT ? mT : zT
    }
  },
  5903: (TT, UT, mT) => {
    var WT = mT(5906),
      zT = mT(5915);
    TT.exports = function(TT, UT) {
      return null != TT && zT(TT, UT, WT)
    }
  },
  5920: TT => {
    TT.exports = function(TT) {
      return TT
    }
  },
  5606: (TT, UT, mT) => {
    var WT = mT(5613),
      zT = mT(5247),
      MT = Object.prototype,
      gT = MT.hasOwnProperty,
      nT = MT.propertyIsEnumerable,
      HT = WT(function() {
        return arguments
      }()) ? WT : function(TT) {
        return zT(TT) && gT.call(TT, "callee") && !nT.call(TT, "callee")
      };
    TT.exports = HT
  },
  5262: TT => {
    var UT = Array.isArray;
    TT.exports = UT
  },
  5555: (TT, UT, mT) => {
    var WT = mT(5337),
      zT = mT(5561);
    TT.exports = function(TT) {
      return null != TT && zT(TT.length) && !WT(TT)
    }
  },
  6387: (TT, UT, mT) => {
    var WT = mT(5232),
      zT = mT(5247);
    TT.exports = function(TT) {
      return !0 === TT || !1 === TT || zT(TT) && "[object Boolean]" == WT(TT)
    }
  },
  5784: (TT, UT, mT) => {
    TT = mT.nmd(TT);
    var WT = mT(5208),
      zT = mT(5791),
      MT = UT && !UT.nodeType && UT,
      gT = MT && TT && !TT.nodeType && TT,
      nT = gT && gT.exports === MT ? WT.HB : void 0,
      HT = (nT ? nT.isBuffer : void 0) || zT;
    TT.exports = HT
  },
  6288: (TT, UT, mT) => {
    var WT = mT(5675);
    TT.exports = function(TT, UT) {
      return WT(TT, UT)
    }
  },
  5337: (TT, UT, mT) => {
    var WT = mT(5232),
      zT = mT(5196);
    TT.exports = function(TT) {
      if (!zT(TT)) return !1;
      var UT = WT(TT);
      return "[object Function]" == UT || "[object GeneratorFunction]" == UT || "[object AsyncFunction]" == UT || "[object Proxy]" == UT
    }
  },
  5561: TT => {
    TT.exports = function(TT) {
      return "number" == typeof TT && TT > -1 && TT % 1 == 0 && TT <= 9007199254740991
    }
  },
  5265: (TT, UT, mT) => {
    var WT = mT(5273);
    TT.exports = function(TT) {
      return WT(TT) && TT != +TT
    }
  },
  5485: TT => {
    TT.exports = function(TT) {
      return null == TT
    }
  },
  5273: (TT, UT, mT) => {
    var WT = mT(5232),
      zT = mT(5247);
    TT.exports = function(TT) {
      return "number" == typeof TT || zT(TT) && "[object Number]" == WT(TT)
    }
  },
  5196: TT => {
    TT.exports = function(TT) {
      var UT = typeof TT;
      return null != TT && ("object" == UT || "function" == UT)
    }
  },
  5247: TT => {
    TT.exports = function(TT) {
      return null != TT && "object" == typeof TT
    }
  },
  6376: (TT, UT, mT) => {
    var WT = mT(5232),
      zT = mT(6381),
      MT = mT(5247),
      gT = Function.prototype,
      nT = Object.prototype,
      HT = gT.toString,
      kT = nT.hasOwnProperty,
      jT = HT.call(Object);
    TT.exports = function(TT) {
      if (!MT(TT) || "[object Object]" != WT(TT)) return !1;
      var UT = zT(TT);
      if (null === UT) return !0;
      var mT = kT.call(UT, "constructor") && UT.constructor;
      return "function" == typeof mT && mT instanceof mT && HT.call(mT) == jT
    }
  },
  5259: (TT, UT, mT) => {
    var WT = mT(5232),
      zT = mT(5262),
      MT = mT(5247);
    TT.exports = function(TT) {
      return "string" == typeof TT || !zT(TT) && MT(TT) && "[object String]" == WT(TT)
    }
  },
  5228: (TT, UT, mT) => {
    var WT = mT(5232),
      zT = mT(5247);
    TT.exports = function(TT) {
      return "symbol" == typeof TT || zT(TT) && "[object Symbol]" == WT(TT)
    }
  },
  5800: (TT, UT, mT) => {
    var WT = mT(5809),
      zT = mT(5813),
      MT = mT(5819),
      gT = MT && MT.isTypedArray,
      nT = gT ? zT(gT) : WT;
    TT.exports = nT
  },
  5778: (TT, UT, mT) => {
    var WT = mT(5780),
      zT = mT(5821),
      MT = mT(5555);
    TT.exports = function(TT) {
      return MT(TT) ? WT(TT) : zT(TT)
    }
  },
  6366: TT => {
    TT.exports = function(TT) {
      var UT = null == TT ? 0 : TT.length;
      return UT ? TT[UT - 1] : void 0
    }
  },
  6286: (TT, UT, mT) => {
    var WT = mT(5471),
      zT = mT(5630),
      MT = mT(5944),
      gT = mT(5262);
    TT.exports = function(TT, UT) {
      return (gT(TT) ? WT : MT)(TT, zT(UT, 3))
    }
  },
  6330: (TT, UT, mT) => {
    var WT = mT(6335),
      zT = mT(5954),
      MT = mT(5630);
    TT.exports = function(TT, UT) {
      var mT = {};
      return UT = MT(UT, 3), zT(TT, (function(TT, zT, MT) {
        WT(mT, zT, UT(TT, zT, MT))
      })), mT
    }
  },
  6246: (TT, UT, mT) => {
    var WT = mT(6253),
      zT = mT(6262),
      MT = mT(5920);
    TT.exports = function(TT) {
      return TT && TT.length ? WT(TT, MT, zT) : void 0
    }
  },
  5301: (TT, UT, mT) => {
    var WT = mT(5305);

    function zT(TT, UT) {
      if ("function" != typeof TT || null != UT && "function" != typeof UT) throw new TypeError("Expected a function");
      var mT = function() {
        var WT = arguments,
          zT = UT ? UT.apply(this, WT) : WT[0],
          MT = mT.cache;
        if (MT.has(zT)) return MT.get(zT);
        var gT = TT.apply(this, WT);
        return mT.cache = MT.set(zT, gT) || MT, gT
      };
      return mT.cache = new(zT.Cache || WT), mT
    }
    zT.Cache = WT, TT.exports = zT
  },
  6264: (TT, UT, mT) => {
    var WT = mT(6253),
      zT = mT(6269),
      MT = mT(5920);
    TT.exports = function(TT) {
      return TT && TT.length ? WT(TT, MT, zT) : void 0
    }
  },
  6129: TT => {
    TT.exports = function() {}
  },
  5204: (TT, UT, mT) => {
    var WT = mT(5208);
    TT.exports = function() {
      return WT.Date.now()
    }
  },
  5925: (TT, UT, mT) => {
    var WT = mT(5929),
      zT = mT(5937),
      MT = mT(5289),
      gT = mT(5477);
    TT.exports = function(TT) {
      return MT(TT) ? WT(gT(TT)) : zT(TT)
    }
  },
  5531: (TT, UT, mT) => {
    var WT = mT(5539)();
    TT.exports = WT
  },
  6401: (TT, UT, mT) => {
    var WT = mT(5717),
      zT = mT(5630),
      MT = mT(6407),
      gT = mT(5262),
      nT = mT(5547);
    TT.exports = function(TT, UT, mT) {
      var HT = gT(TT) ? WT : MT;
      return mT && nT(TT, UT, mT) && (UT = void 0), HT(TT, zT(UT, 3))
    }
  },
  5581: (TT, UT, mT) => {
    var WT = mT(5586),
      zT = mT(5621),
      MT = mT(5997),
      gT = mT(5547),
      nT = MT((function(TT, UT) {
        if (null == TT) return [];
        var mT = UT.length;
        return mT > 1 && gT(TT, UT[0], UT[1]) ? UT = [] : mT > 2 && gT(UT[0], UT[1], UT[2]) && (UT = [UT[0]]), zT(TT, WT(UT, 1), [])
      }));
    TT.exports = nT
  },
  5774: TT => {
    TT.exports = function() {
      return []
    }
  },
  5791: TT => {
    TT.exports = function() {
      return !1
    }
  },
  5186: (TT, UT, mT) => {
    var WT = mT(5194),
      zT = mT(5196);
    TT.exports = function(TT, UT, mT) {
      var MT = !0,
        gT = !0;
      if ("function" != typeof TT) throw new TypeError("Expected a function");
      return zT(mT) && (MT = "leading" in mT ? !!mT.leading : MT, gT = "trailing" in mT ? !!mT.trailing : gT), WT(TT, UT, {
        leading: MT,
        maxWait: UT,
        trailing: gT
      })
    }
  },
  5577: (TT, UT, mT) => {
    var WT = mT(5216),
      zT = 1 / 0;
    TT.exports = function(TT) {
      return TT ? (TT = WT(TT)) === zT || TT === -1 / 0 ? 17976931348623157e292 * (TT < 0 ? -1 : 1) : TT === TT ? TT : 0 : 0 === TT ? TT : 0
    }
  },
  6432: (TT, UT, mT) => {
    var WT = mT(5577);
    TT.exports = function(TT) {
      var UT = WT(TT),
        mT = UT % 1;
      return UT === UT ? mT ? UT - mT : UT : 0
    }
  },
  5216: (TT, UT, mT) => {
    var WT = mT(5219),
      zT = mT(5196),
      MT = mT(5228),
      gT = /^[-+]0x[0-9a-f]+$/i,
      nT = /^0b[01]+$/i,
      HT = /^0o[0-7]+$/i,
      kT = parseInt;
    TT.exports = function(TT) {
      if ("number" == typeof TT) return TT;
      if (MT(TT)) return NaN;
      if (zT(TT)) {
        var UT = "function" == typeof TT.valueOf ? TT.valueOf() : TT;
        TT = zT(UT) ? UT + "" : UT
      }
      if ("string" != typeof TT) return 0 === TT ? TT : +TT;
      TT = WT(TT);
      var mT = nT.test(TT);
      return mT || HT.test(TT) ? kT(TT.slice(2), mT ? 2 : 8) : gT.test(TT) ? NaN : +TT
    }
  },
  5466: (TT, UT, mT) => {
    var WT = mT(5469);
    TT.exports = function(TT) {
      return null == TT ? "" : WT(TT)
    }
  },
  6082: (TT, UT, mT) => {
    var WT = mT(5630),
      zT = mT(6085);
    TT.exports = function(TT, UT) {
      return TT && TT.length ? zT(TT, WT(UT, 2)) : []
    }
  },
  6141: (TT, UT, mT) => {
    var WT = mT(6146)("toUpperCase");
    TT.exports = WT
  },
  6205: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => sU
    });
    var WT = mT(63),
      zT = mT(5066),
      MT = mT.n(zT);
    const {
      getOwnPropertyNames: gT,
      getOwnPropertySymbols: nT
    } = Object, {
      hasOwnProperty: HT
    } = Object.prototype;

    function kT(TT, UT) {
      return function(mT, WT, zT) {
        return TT(mT, WT, zT) && UT(mT, WT, zT)
      }
    }

    function jT(TT) {
      return function(UT, mT, WT) {
        if (!UT || !mT || "object" !== typeof UT || "object" !== typeof mT) return TT(UT, mT, WT);
        const {
          cache: zT
        } = WT, MT = zT.get(UT), gT = zT.get(mT);
        if (MT && gT) return MT === mT && gT === UT;
        zT.set(UT, mT), zT.set(mT, UT);
        const nT = TT(UT, mT, WT);
        return zT.delete(UT), zT.delete(mT), nT
      }
    }

    function lT(TT) {
      return gT(TT).concat(nT(TT))
    }
    const LT = Object.hasOwn || ((TT, UT) => HT.call(TT, UT));

    function pT(TT, UT) {
      return TT === UT || !TT && !UT && TT !== TT && UT !== UT
    }
    const {
      getOwnPropertyDescriptor: BT,
      keys: ZT
    } = Object;

    function cT(TT, UT) {
      return TT.byteLength === UT.byteLength && tT(new Uint8Array(TT), new Uint8Array(UT))
    }

    function vT(TT, UT, mT) {
      let WT = TT.length;
      if (UT.length !== WT) return !1;
      for (; WT-- > 0;)
        if (!mT.equals(TT[WT], UT[WT], WT, WT, TT, UT, mT)) return !1;
      return !0
    }

    function fT(TT, UT) {
      return TT.byteLength === UT.byteLength && tT(new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength), new Uint8Array(UT.buffer, UT.byteOffset, UT.byteLength))
    }

    function qT(TT, UT) {
      return pT(TT.getTime(), UT.getTime())
    }

    function iT(TT, UT) {
      return TT.name === UT.name && TT.message === UT.message && TT.cause === UT.cause && TT.stack === UT.stack
    }

    function bT(TT, UT) {
      return TT === UT
    }

    function OT(TT, UT, mT) {
      const WT = TT.size;
      if (WT !== UT.size) return !1;
      if (!WT) return !0;
      const zT = new Array(WT),
        MT = TT.entries();
      let gT, nT, HT = 0;
      for (;
        (gT = MT.next()) && !gT.done;) {
        const WT = UT.entries();
        let MT = !1,
          kT = 0;
        for (;
          (nT = WT.next()) && !nT.done;) {
          if (zT[kT]) {
            kT++;
            continue
          }
          const WT = gT.value,
            jT = nT.value;
          if (mT.equals(WT[0], jT[0], HT, kT, TT, UT, mT) && mT.equals(WT[1], jT[1], WT[0], jT[0], TT, UT, mT)) {
            MT = zT[kT] = !0;
            break
          }
          kT++
        }
        if (!MT) return !1;
        HT++
      }
      return !0
    }
    const eT = pT;

    function YT(TT, UT, mT) {
      const WT = ZT(TT);
      let zT = WT.length;
      if (ZT(UT).length !== zT) return !1;
      for (; zT-- > 0;)
        if (!yT(TT, UT, mT, WT[zT])) return !1;
      return !0
    }

    function JT(TT, UT, mT) {
      const WT = lT(TT);
      let zT, MT, gT, nT = WT.length;
      if (lT(UT).length !== nT) return !1;
      for (; nT-- > 0;) {
        if (zT = WT[nT], !yT(TT, UT, mT, zT)) return !1;
        if (MT = BT(TT, zT), gT = BT(UT, zT), (MT || gT) && (!MT || !gT || MT.configurable !== gT.configurable || MT.enumerable !== gT.enumerable || MT.writable !== gT.writable)) return !1
      }
      return !0
    }

    function xT(TT, UT) {
      return pT(TT.valueOf(), UT.valueOf())
    }

    function dT(TT, UT) {
      return TT.source === UT.source && TT.flags === UT.flags
    }

    function wT(TT, UT, mT) {
      const WT = TT.size;
      if (WT !== UT.size) return !1;
      if (!WT) return !0;
      const zT = new Array(WT),
        MT = TT.values();
      let gT, nT;
      for (;
        (gT = MT.next()) && !gT.done;) {
        const WT = UT.values();
        let MT = !1,
          HT = 0;
        for (;
          (nT = WT.next()) && !nT.done;) {
          if (!zT[HT] && mT.equals(gT.value, nT.value, gT.value, nT.value, TT, UT, mT)) {
            MT = zT[HT] = !0;
            break
          }
          HT++
        }
        if (!MT) return !1
      }
      return !0
    }

    function tT(TT, UT) {
      let mT = TT.byteLength;
      if (UT.byteLength !== mT || TT.byteOffset !== UT.byteOffset) return !1;
      for (; mT-- > 0;)
        if (TT[mT] !== UT[mT]) return !1;
      return !0
    }

    function aT(TT, UT) {
      return TT.hostname === UT.hostname && TT.pathname === UT.pathname && TT.protocol === UT.protocol && TT.port === UT.port && TT.hash === UT.hash && TT.username === UT.username && TT.password === UT.password
    }

    function yT(TT, UT, mT, WT) {
      return !("_owner" !== WT && "__o" !== WT && "__v" !== WT || !TT.$$typeof && !UT.$$typeof) || LT(UT, WT) && mT.equals(TT[WT], UT[WT], WT, WT, TT, UT, mT)
    }
    const XT = {
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
      IT = Object.prototype.toString;

    function QT(TT) {
      let {
        areArrayBuffersEqual: UT,
        areArraysEqual: mT,
        areDataViewsEqual: WT,
        areDatesEqual: zT,
        areErrorsEqual: MT,
        areFunctionsEqual: gT,
        areMapsEqual: nT,
        areNumbersEqual: HT,
        areObjectsEqual: kT,
        arePrimitiveWrappersEqual: jT,
        areRegExpsEqual: lT,
        areSetsEqual: LT,
        areTypedArraysEqual: pT,
        areUrlsEqual: BT,
        unknownTagComparators: ZT
      } = TT;
      return function(TT, cT, vT) {
        if (TT === cT) return !0;
        if (null == TT || null == cT) return !1;
        const fT = typeof TT;
        if (fT !== typeof cT) return !1;
        if ("object" !== fT) return "number" === fT ? HT(TT, cT, vT) : "function" === fT && gT(TT, cT, vT);
        const qT = TT.constructor;
        if (qT !== cT.constructor) return !1;
        if (qT === Object) return kT(TT, cT, vT);
        if (Array.isArray(TT)) return mT(TT, cT, vT);
        if (qT === Date) return zT(TT, cT, vT);
        if (qT === RegExp) return lT(TT, cT, vT);
        if (qT === Map) return nT(TT, cT, vT);
        if (qT === Set) return LT(TT, cT, vT);
        const iT = IT.call(TT);
        if ("[object Date]" === iT) return zT(TT, cT, vT);
        if ("[object RegExp]" === iT) return lT(TT, cT, vT);
        if ("[object Map]" === iT) return nT(TT, cT, vT);
        if ("[object Set]" === iT) return LT(TT, cT, vT);
        if ("[object Object]" === iT) return "function" !== typeof TT.then && "function" !== typeof cT.then && kT(TT, cT, vT);
        if ("[object URL]" === iT) return BT(TT, cT, vT);
        if ("[object Error]" === iT) return MT(TT, cT, vT);
        if ("[object Arguments]" === iT) return kT(TT, cT, vT);
        if (XT[iT]) return pT(TT, cT, vT);
        if ("[object ArrayBuffer]" === iT) return UT(TT, cT, vT);
        if ("[object DataView]" === iT) return WT(TT, cT, vT);
        if ("[object Boolean]" === iT || "[object Number]" === iT || "[object String]" === iT) return jT(TT, cT, vT);
        if (ZT) {
          let UT = ZT[iT];
          if (!UT) {
            const mT = null != (bT = TT) ? bT[Symbol.toStringTag] : void 0;
            mT && (UT = ZT[mT])
          }
          if (UT) return UT(TT, cT, vT)
        }
        var bT;
        return !1
      }
    }
    const sT = FT();
    FT({
      strict: !0
    }), FT({
      circular: !0
    }), FT({
      circular: !0,
      strict: !0
    }), FT({
      createInternalComparator: () => pT
    }), FT({
      strict: !0,
      createInternalComparator: () => pT
    }), FT({
      circular: !0,
      createInternalComparator: () => pT
    }), FT({
      circular: !0,
      createInternalComparator: () => pT,
      strict: !0
    });

    function FT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: UT = !1,
        createInternalComparator: mT,
        createState: WT,
        strict: zT = !1
      } = TT, MT = function(TT) {
        let {
          circular: UT,
          createCustomConfig: mT,
          strict: WT
        } = TT, zT = {
          areArrayBuffersEqual: cT,
          areArraysEqual: WT ? JT : vT,
          areDataViewsEqual: fT,
          areDatesEqual: qT,
          areErrorsEqual: iT,
          areFunctionsEqual: bT,
          areMapsEqual: WT ? kT(OT, JT) : OT,
          areNumbersEqual: eT,
          areObjectsEqual: WT ? JT : YT,
          arePrimitiveWrappersEqual: xT,
          areRegExpsEqual: dT,
          areSetsEqual: WT ? kT(wT, JT) : wT,
          areTypedArraysEqual: WT ? kT(tT, JT) : tT,
          areUrlsEqual: aT,
          unknownTagComparators: void 0
        };
        if (mT && (zT = Object.assign({}, zT, mT(zT))), UT) {
          const TT = jT(zT.areArraysEqual),
            UT = jT(zT.areMapsEqual),
            mT = jT(zT.areObjectsEqual),
            WT = jT(zT.areSetsEqual);
          zT = Object.assign({}, zT, {
            areArraysEqual: TT,
            areMapsEqual: UT,
            areObjectsEqual: mT,
            areSetsEqual: WT
          })
        }
        return zT
      }(TT), gT = QT(MT);
      var nT;
      return function(TT) {
        let {
          circular: UT,
          comparator: mT,
          createState: WT,
          equals: zT,
          strict: MT
        } = TT;
        if (WT) return function(TT, gT) {
          const {
            cache: nT = (UT ? new WeakMap : void 0),
            meta: HT
          } = WT();
          return mT(TT, gT, {
            cache: nT,
            equals: zT,
            meta: HT,
            strict: MT
          })
        };
        if (UT) return function(TT, UT) {
          return mT(TT, UT, {
            cache: new WeakMap,
            equals: zT,
            meta: void 0,
            strict: MT
          })
        };
        const gT = {
          cache: void 0,
          equals: zT,
          meta: void 0,
          strict: MT
        };
        return function(TT, UT) {
          return mT(TT, UT, gT)
        }
      }({
        circular: UT,
        comparator: gT,
        createState: WT,
        equals: mT ? mT(gT) : (nT = gT, function(TT, UT, mT, WT, zT, MT, gT) {
          return nT(TT, UT, gT)
        }),
        strict: zT
      })
    }

    function PT(TT) {
      var UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        mT = -1;
      requestAnimationFrame((function WT(zT) {
        mT < 0 && (mT = zT), zT - mT > UT ? (TT(zT), mT = -1) : function(TT) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(TT)
        }(WT)
      }))
    }

    function VT(TT) {
      return VT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, VT(TT)
    }

    function uT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return CT(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return CT(TT, UT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function CT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function rT() {
      var TT = function() {
          return null
        },
        UT = !1,
        mT = function mT(WT) {
          if (!UT) {
            if (Array.isArray(WT)) {
              if (!WT.length) return;
              var zT = uT(WT),
                MT = zT[0],
                gT = zT.slice(1);
              return "number" === typeof MT ? void PT(mT.bind(null, gT), MT) : (mT(MT), void PT(mT.bind(null, gT)))
            }
            "object" === VT(WT) && TT(WT), "function" === typeof WT && WT()
          }
        };
      return {
        stop: function() {
          UT = !0
        },
        start: function(TT) {
          UT = !1, mT(TT)
        },
        subscribe: function(UT) {
          return TT = UT,
            function() {
              TT = function() {
                return null
              }
            }
        }
      }
    }

    function KT(TT) {
      return KT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, KT(TT)
    }

    function ST(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function GT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? ST(Object(mT), !0).forEach((function(UT) {
          NT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : ST(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function NT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" !== KT(TT) || null === TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" !== KT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" === KT(UT) ? UT : String(UT)
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }
    var ET = function(TT) {
        return TT
      },
      hT = function(TT, UT) {
        return Object.keys(UT).reduce((function(mT, WT) {
          return GT(GT({}, mT), {}, NT({}, WT, TT(WT, UT[WT])))
        }), {})
      },
      DT = function(TT, UT, mT) {
        return TT.map((function(TT) {
          return "".concat((WT = TT, WT.replace(/([A-Z])/g, (function(TT) {
            return "-".concat(TT.toLowerCase())
          }))), " ").concat(UT, "ms ").concat(mT);
          var WT
        })).join(",")
      };

    function oT(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        var mT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != mT) {
          var WT, zT, MT, gT, nT = [],
            HT = !0,
            kT = !1;
          try {
            if (MT = (mT = mT.call(TT)).next, 0 === UT) {
              if (Object(mT) !== mT) return;
              HT = !1
            } else
              for (; !(HT = (WT = MT.call(mT)).done) && (nT.push(WT.value), nT.length !== UT); HT = !0);
          } catch (TT) {
            kT = !0, zT = TT
          } finally {
            try {
              if (!HT && null != mT.return && (gT = mT.return(), Object(gT) !== gT)) return
            } finally {
              if (kT) throw zT
            }
          }
          return nT
        }
      }(TT, UT) || RT(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return TU(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || RT(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function RT(TT, UT) {
      if (TT) {
        if ("string" === typeof TT) return TU(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        return "Object" === mT && TT.constructor && (mT = TT.constructor.name), "Map" === mT || "Set" === mT ? Array.from(TT) : "Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT) ? TU(TT, UT) : void 0
      }
    }

    function TU(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }
    var UU = 1e-4,
      mU = function(TT, UT) {
        return [0, 3 * TT, 3 * UT - 6 * TT, 3 * TT - 3 * UT + 1]
      },
      WU = function(TT, UT) {
        return TT.map((function(TT, mT) {
          return TT * Math.pow(UT, mT)
        })).reduce((function(TT, UT) {
          return TT + UT
        }))
      },
      zU = function(TT, UT) {
        return function(mT) {
          var WT = mU(TT, UT);
          return WU(WT, mT)
        }
      },
      MU = function() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        var WT = UT[0],
          zT = UT[1],
          MT = UT[2],
          gT = UT[3];
        if (1 === UT.length) switch (UT[0]) {
          case "linear":
            WT = 0, zT = 0, MT = 1, gT = 1;
            break;
          case "ease":
            WT = .25, zT = .1, MT = .25, gT = 1;
            break;
          case "ease-in":
            WT = .42, zT = 0, MT = 1, gT = 1;
            break;
          case "ease-out":
            WT = .42, zT = 0, MT = .58, gT = 1;
            break;
          case "ease-in-out":
            WT = 0, zT = 0, MT = .58, gT = 1;
            break;
          default:
            var nT = UT[0].split("(");
            if ("cubic-bezier" === nT[0] && 4 === nT[1].split(")")[0].split(",").length) {
              var HT = oT(nT[1].split(")")[0].split(",").map((function(TT) {
                return parseFloat(TT)
              })), 4);
              WT = HT[0], zT = HT[1], MT = HT[2], gT = HT[3]
            }
        } [WT, MT, zT, gT].every((function(TT) {
          return "number" === typeof TT && TT >= 0 && TT <= 1
        }));
        var kT, jT, lT = zU(WT, MT),
          LT = zU(zT, gT),
          pT = (kT = WT, jT = MT, function(TT) {
            var UT = mU(kT, jT),
              mT = [].concat(AT(UT.map((function(TT, UT) {
                return TT * UT
              })).slice(1)), [0]);
            return WU(mT, TT)
          }),
          BT = function(TT) {
            for (var UT, mT = TT > 1 ? 1 : TT, WT = mT, zT = 0; zT < 8; ++zT) {
              var MT = lT(WT) - mT,
                gT = pT(WT);
              if (Math.abs(MT - mT) < UU || gT < UU) return LT(WT);
              WT = (UT = WT - MT / gT) > 1 ? 1 : UT < 0 ? 0 : UT
            }
            return LT(WT)
          };
        return BT.isStepper = !1, BT
      },
      gU = function() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        var WT = UT[0];
        if ("string" === typeof WT) switch (WT) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return MU(WT);
          case "spring":
            return function() {
              var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                UT = TT.stiff,
                mT = void 0 === UT ? 100 : UT,
                WT = TT.damping,
                zT = void 0 === WT ? 8 : WT,
                MT = TT.dt,
                gT = void 0 === MT ? 17 : MT,
                nT = function(TT, UT, WT) {
                  var MT = WT + (-(TT - UT) * mT - WT * zT) * gT / 1e3,
                    nT = WT * gT / 1e3 + TT;
                  return Math.abs(nT - UT) < UU && Math.abs(MT) < UU ? [UT, 0] : [nT, MT]
                };
              return nT.isStepper = !0, nT.dt = gT, nT
            }();
          default:
            if ("cubic-bezier" === WT.split("(")[0]) return MU(WT)
        }
        return "function" === typeof WT ? WT : null
      };

    function nU(TT) {
      return nU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, nU(TT)
    }

    function HU(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return BU(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || pU(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kU(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function jU(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? kU(Object(mT), !0).forEach((function(UT) {
          lU(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : kU(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function lU(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" !== nU(TT) || null === TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" !== nU(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" === nU(UT) ? UT : String(UT)
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function LU(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        var mT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != mT) {
          var WT, zT, MT, gT, nT = [],
            HT = !0,
            kT = !1;
          try {
            if (MT = (mT = mT.call(TT)).next, 0 === UT) {
              if (Object(mT) !== mT) return;
              HT = !1
            } else
              for (; !(HT = (WT = MT.call(mT)).done) && (nT.push(WT.value), nT.length !== UT); HT = !0);
          } catch (TT) {
            kT = !0, zT = TT
          } finally {
            try {
              if (!HT && null != mT.return && (gT = mT.return(), Object(gT) !== gT)) return
            } finally {
              if (kT) throw zT
            }
          }
          return nT
        }
      }(TT, UT) || pU(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pU(TT, UT) {
      if (TT) {
        if ("string" === typeof TT) return BU(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        return "Object" === mT && TT.constructor && (mT = TT.constructor.name), "Map" === mT || "Set" === mT ? Array.from(TT) : "Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT) ? BU(TT, UT) : void 0
      }
    }

    function BU(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }
    var ZU = function(TT, UT, mT) {
        return TT + (UT - TT) * mT
      },
      cU = function(TT) {
        return TT.from !== TT.to
      },
      vU = function TT(UT, mT, WT) {
        var zT = hT((function(TT, mT) {
          if (cU(mT)) {
            var WT = LU(UT(mT.from, mT.to, mT.Tc), 2),
              zT = WT[0],
              MT = WT[1];
            return jU(jU({}, mT), {}, {
              from: zT,
              Tc: MT
            })
          }
          return mT
        }), mT);
        return WT < 1 ? hT((function(TT, UT) {
          return cU(UT) ? jU(jU({}, UT), {}, {
            Tc: ZU(UT.Tc, zT[TT].Tc, WT),
            from: ZU(UT.from, zT[TT].from, WT)
          }) : UT
        }), mT) : TT(UT, zT, WT - 1)
      };
    const fU = function(TT, UT, mT, WT, zT) {
      var MT, gT, nT, HT, kT = (MT = TT, gT = UT, [Object.keys(MT), Object.keys(gT)].reduce((function(TT, UT) {
          return TT.filter((function(TT) {
            return UT.includes(TT)
          }))
        }))),
        jT = kT.reduce((function(mT, WT) {
          return jU(jU({}, mT), {}, lU({}, WT, [TT[WT], UT[WT]]))
        }), {}),
        lT = kT.reduce((function(mT, WT) {
          return jU(jU({}, mT), {}, lU({}, WT, {
            from: TT[WT],
            Tc: 0,
            to: UT[WT]
          }))
        }), {}),
        LT = -1,
        pT = function() {
          return null
        };
      return pT = mT.isStepper ? function(WT) {
          nT || (nT = WT);
          var MT = (WT - nT) / mT.dt;
          lT = vU(mT, lT, MT), zT(jU(jU(jU({}, TT), UT), hT((function(TT, UT) {
            return UT.from
          }), lT))), nT = WT, Object.values(lT).filter(cU).length && (LT = requestAnimationFrame(pT))
        } : function(MT) {
          HT || (HT = MT);
          var gT = (MT - HT) / WT,
            nT = hT((function(TT, UT) {
              return ZU.apply(void 0, HU(UT).concat([mT(gT)]))
            }), jT);
          if (zT(jU(jU(jU({}, TT), UT), nT)), gT < 1) LT = requestAnimationFrame(pT);
          else {
            var kT = hT((function(TT, UT) {
              return ZU.apply(void 0, HU(UT).concat([mT(1)]))
            }), jT);
            zT(jU(jU(jU({}, TT), UT), kT))
          }
        },
        function() {
          return requestAnimationFrame(pT),
            function() {
              cancelAnimationFrame(LT)
            }
        }
    };

    function qU(TT) {
      return qU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, qU(TT)
    }
    var iU = ["children", "np", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function bU(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT, WT, zT = {},
          MT = Object.keys(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || (zT[mT] = TT[mT]);
        return zT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function OU(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return eU(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return eU(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return eU(TT, UT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function eU(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function YU(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function JU(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? YU(Object(mT), !0).forEach((function(UT) {
          xU(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : YU(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function xU(TT, UT, mT) {
      return (UT = wU(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function dU(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, wU(WT.key), WT)
      }
    }

    function wU(TT) {
      var UT = function(TT, UT) {
        if ("object" !== qU(TT) || null === TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" !== qU(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" === qU(UT) ? UT : String(UT)
    }

    function tU(TT, UT) {
      return tU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, tU(TT, UT)
    }

    function aU(TT) {
      var UT = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (TT) {
          return !1
        }
      }();
      return function() {
        var mT, WT = IU(TT);
        if (UT) {
          var zT = IU(this).constructor;
          mT = Reflect.construct(WT, arguments, zT)
        } else mT = WT.apply(this, arguments);
        return yU(this, mT)
      }
    }

    function yU(TT, UT) {
      if (UT && ("object" === qU(UT) || "function" === typeof UT)) return UT;
      if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
      return XU(TT)
    }

    function XU(TT) {
      if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return TT
    }

    function IU(TT) {
      return IU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, IU(TT)
    }
    var QU = function(TT) {
      ! function(TT, UT) {
        if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(UT && UT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), UT && tU(TT, UT)
      }(gT, TT);
      var UT, mT, zT, MT = aU(gT);

      function gT(TT, UT) {
        var mT;
        ! function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, gT);
        var WT = (mT = MT.call(this, TT, UT)).props,
          zT = WT.isActive,
          nT = WT.attributeName,
          HT = WT.from,
          kT = WT.to,
          jT = WT.steps,
          lT = WT.children,
          LT = WT.duration;
        if (mT.handleStyleChange = mT.handleStyleChange.bind(XU(mT)), mT.changeStyle = mT.changeStyle.bind(XU(mT)), !zT || LT <= 0) return mT.state = {
          style: {}
        }, "function" === typeof lT && (mT.state = {
          style: kT
        }), yU(mT);
        if (jT && jT.length) mT.state = {
          style: jT[0].style
        };
        else if (HT) {
          if ("function" === typeof lT) return mT.state = {
            style: HT
          }, yU(mT);
          mT.state = {
            style: nT ? xU({}, nT, HT) : HT
          }
        } else mT.state = {
          style: {}
        };
        return mT
      }
      return UT = gT, (mT = [{
        key: "componentDidMount",
        value: function() {
          var TT = this.props,
            UT = TT.isActive,
            mT = TT.canBegin;
          this.mounted = !0, UT && mT && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(TT) {
          var UT = this.props,
            mT = UT.isActive,
            WT = UT.canBegin,
            zT = UT.attributeName,
            MT = UT.shouldReAnimate,
            gT = UT.to,
            nT = UT.from,
            HT = this.state.style;
          if (WT)
            if (mT) {
              if (!(sT(TT.to, gT) && TT.canBegin && TT.isActive)) {
                var kT = !TT.canBegin || !TT.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var jT = kT || MT ? nT : TT.to;
                if (this.state && HT) {
                  var lT = {
                    style: zT ? xU({}, zT, jT) : jT
                  };
                  (zT && HT[zT] !== jT || !zT && HT !== jT) && this.setState(lT)
                }
                this.runAnimation(JU(JU({}, this.props), {}, {
                  from: jT,
                  np: 0
                }))
              }
            } else {
              var LT = {
                style: zT ? xU({}, zT, gT) : gT
              };
              this.state && HT && (zT && HT[zT] !== gT || !zT && HT !== gT) && this.setState(LT)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var TT = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), TT && TT()
        }
      }, {
        key: "handleStyleChange",
        value: function(TT) {
          this.changeStyle(TT)
        }
      }, {
        key: "changeStyle",
        value: function(TT) {
          this.mounted && this.setState({
            style: TT
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(TT) {
          var UT = this,
            mT = TT.from,
            WT = TT.to,
            zT = TT.duration,
            MT = TT.easing,
            gT = TT.np,
            nT = TT.onAnimationEnd,
            HT = TT.onAnimationStart,
            kT = fU(mT, WT, gU(MT), zT, this.changeStyle);
          this.manager.start([HT, gT, function() {
            UT.stopJSAnimation = kT()
          }, zT, nT])
        }
      }, {
        key: "runStepAnimation",
        value: function(TT) {
          var UT = this,
            mT = TT.steps,
            WT = TT.np,
            zT = TT.onAnimationStart,
            MT = mT[0],
            gT = MT.style,
            nT = MT.duration,
            HT = void 0 === nT ? 0 : nT;
          return this.manager.start([zT].concat(OU(mT.reduce((function(TT, WT, zT) {
            if (0 === zT) return TT;
            var MT = WT.duration,
              gT = WT.easing,
              nT = void 0 === gT ? "ease" : gT,
              HT = WT.style,
              kT = WT.properties,
              jT = WT.onAnimationEnd,
              lT = zT > 0 ? mT[zT - 1] : WT,
              LT = kT || Object.keys(HT);
            if ("function" === typeof nT || "spring" === nT) return [].concat(OU(TT), [UT.runJSAnimation.bind(UT, {
              from: lT.style,
              to: HT,
              duration: MT,
              easing: nT
            }), MT]);
            var pT = DT(LT, MT, nT),
              BT = JU(JU(JU({}, lT.style), HT), {}, {
                transition: pT
              });
            return [].concat(OU(TT), [BT, MT, jT]).filter(ET)
          }), [gT, Math.max(HT, WT)])), [TT.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(TT) {
          this.manager || (this.manager = rT());
          var UT = TT.np,
            mT = TT.duration,
            WT = TT.attributeName,
            zT = TT.to,
            MT = TT.easing,
            gT = TT.onAnimationStart,
            nT = TT.onAnimationEnd,
            HT = TT.steps,
            kT = TT.children,
            jT = this.manager;
          if (this.unSubscribe = jT.subscribe(this.handleStyleChange), "function" !== typeof MT && "function" !== typeof kT && "spring" !== MT)
            if (HT.length > 1) this.runStepAnimation(TT);
            else {
              var lT = WT ? xU({}, WT, zT) : zT,
                LT = DT(Object.keys(lT), mT, MT);
              jT.start([gT, UT, JU(JU({}, lT), {}, {
                transition: LT
              }), mT, nT])
            }
          else this.runJSAnimation(TT)
        }
      }, {
        key: "render",
        value: function() {
          var TT = this.props,
            UT = TT.children,
            mT = (TT.np, TT.duration),
            zT = (TT.attributeName, TT.easing, TT.isActive),
            MT = (TT.steps, TT.from, TT.to, TT.canBegin, TT.onAnimationEnd, TT.shouldReAnimate, TT.onAnimationReStart, bU(TT, iU)),
            gT = WT.Children.count(UT),
            nT = this.state.style;
          if ("function" === typeof UT) return UT(nT);
          if (!zT || 0 === gT || mT <= 0) return UT;
          var HT = function(TT) {
            var UT = TT.props,
              mT = UT.style,
              zT = void 0 === mT ? {} : mT,
              gT = UT.className;
            return (0, WT.cloneElement)(TT, JU(JU({}, MT), {}, {
              style: JU(JU({}, zT), nT),
              className: gT
            }))
          };
          return 1 === gT ? HT(WT.Children.only(UT)) : WT.createElement("div", null, WT.Children.map(UT, (function(TT) {
            return HT(TT)
          })))
        }
      }]) && dU(UT.prototype, mT), zT && dU(UT, zT), Object.defineProperty(UT, "prototype", {
        writable: !1
      }), gT
    }(WT.PureComponent);
    QU.displayName = "Animate", QU.defaultProps = {
      np: 0,
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
    }, QU.propTypes = {
      from: MT().oneOfType([MT().object, MT().string]),
      to: MT().oneOfType([MT().object, MT().string]),
      attributeName: MT().string,
      duration: MT().number,
      np: MT().number,
      easing: MT().oneOfType([MT().string, MT().func]),
      steps: MT().arrayOf(MT().shape({
        duration: MT().number.isRequired,
        style: MT().object.isRequired,
        easing: MT().oneOfType([MT().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), MT().func]),
        properties: MT().arrayOf("string"),
        onAnimationEnd: MT().func
      })),
      children: MT().oneOfType([MT().node, MT().func]),
      isActive: MT().bool,
      canBegin: MT().bool,
      onAnimationEnd: MT().func,
      shouldReAnimate: MT().bool,
      onAnimationStart: MT().func,
      onAnimationReStart: MT().func
    };
    const sU = QU
  },
  6438: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => uT
    });
    var WT, zT = mT(63),
      MT = mT(5177),
      gT = mT(6205),
      nT = mT(5337),
      HT = mT.n(nT),
      kT = mT(6246),
      jT = mT.n(kT),
      lT = mT(5485),
      LT = mT.n(lT),
      pT = mT(5265),
      BT = mT.n(pT),
      ZT = mT(6288),
      cT = mT.n(ZT),
      vT = mT(6435),
      fT = mT(6197),
      qT = mT(6056),
      iT = mT(6361),
      bT = mT(6067),
      OT = mT(5254),
      eT = mT(6218),
      YT = mT(5497),
      JT = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      xT = ["key"];

    function dT(TT) {
      return dT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, dT(TT)
    }

    function wT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function tT() {
      return tT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, tT.apply(this, arguments)
    }

    function aT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function yT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? aT(Object(mT), !0).forEach((function(UT) {
          PT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : aT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function XT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, VT(WT.key), WT)
      }
    }

    function IT(TT, UT, mT) {
      return UT = sT(UT),
        function(TT, UT) {
          if (UT && ("object" === dT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, QT() ? Reflect.construct(UT, mT || [], sT(TT).constructor) : UT.apply(TT, mT))
    }

    function QT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (QT = function() {
        return !!TT
      })()
    }

    function sT(TT) {
      return sT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, sT(TT)
    }

    function FT(TT, UT) {
      return FT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, FT(TT, UT)
    }

    function PT(TT, UT, mT) {
      return (UT = VT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function VT(TT) {
      var UT = function(TT, UT) {
        if ("object" != dT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != dT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == dT(UT) ? UT : UT + ""
    }
    var uT = function(TT) {
      function UT() {
        var TT;
        ! function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, UT);
        for (var mT = arguments.length, WT = new Array(mT), zT = 0; zT < mT; zT++) WT[zT] = arguments[zT];
        return PT(TT = IT(this, UT, [].concat(WT)), "state", {
          isAnimationFinished: !0
        }), PT(TT, "id", (0, OT.E)("recharts-area-")), PT(TT, "handleAnimationEnd", (function() {
          var UT = TT.props.onAnimationEnd;
          TT.setState({
            isAnimationFinished: !0
          }), HT()(UT) && UT()
        })), PT(TT, "handleAnimationStart", (function() {
          var UT = TT.props.onAnimationStart;
          TT.setState({
            isAnimationFinished: !1
          }), HT()(UT) && UT()
        })), TT
      }
      return function(TT, UT) {
        if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(UT && UT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), UT && FT(TT, UT)
      }(UT, TT), mT = UT, WT = [{
        key: "renderDots",
        value: function(TT, mT, WT) {
          var MT = this.props.isAnimationActive,
            gT = this.state.isAnimationFinished;
          if (MT && !gT) return null;
          var nT = this.props,
            HT = nT.dot,
            kT = nT.points,
            jT = nT.dataKey,
            lT = (0, YT.b)(this.props, !1),
            LT = (0, YT.b)(HT, !0),
            pT = kT.map((function(TT, mT) {
              var WT = yT(yT(yT({
                key: "dot-".concat(mT),
                r: 3
              }, lT), LT), {}, {
                index: mT,
                cx: TT.x,
                cy: TT.y,
                dataKey: jT,
                value: TT.value,
                payload: TT.payload,
                points: kT
              });
              return UT.renderDotItem(HT, WT)
            })),
            BT = {
              clipPath: TT ? "url(#clipPath-".concat(mT ? "" : "dots-").concat(WT, ")") : null
            };
          return zT.createElement(qT.e, tT({
            className: "recharts-area-dots"
          }, BT), pT)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(TT) {
          var UT = this.props,
            mT = UT.baseLine,
            WT = UT.points,
            MT = UT.strokeWidth,
            gT = WT[0].x,
            nT = WT[WT.length - 1].x,
            HT = TT * Math.abs(gT - nT),
            kT = jT()(WT.map((function(TT) {
              return TT.y || 0
            })));
          return (0, OT.x)(mT) && "number" === typeof mT ? kT = Math.max(mT, kT) : mT && Array.isArray(mT) && mT.length && (kT = Math.max(jT()(mT.map((function(TT) {
            return TT.y || 0
          }))), kT)), (0, OT.x)(kT) ? zT.createElement("rect", {
            x: gT < nT ? gT : gT - HT,
            y: 0,
            width: HT,
            height: Math.floor(kT + (MT ? parseInt("".concat(MT), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(TT) {
          var UT = this.props,
            mT = UT.baseLine,
            WT = UT.points,
            MT = UT.strokeWidth,
            gT = WT[0].y,
            nT = WT[WT.length - 1].y,
            HT = TT * Math.abs(gT - nT),
            kT = jT()(WT.map((function(TT) {
              return TT.x || 0
            })));
          return (0, OT.x)(mT) && "number" === typeof mT ? kT = Math.max(mT, kT) : mT && Array.isArray(mT) && mT.length && (kT = Math.max(jT()(mT.map((function(TT) {
            return TT.x || 0
          }))), kT)), (0, OT.x)(kT) ? zT.createElement("rect", {
            x: 0,
            y: gT < nT ? gT : gT - HT,
            width: kT + (MT ? parseInt("".concat(MT), 10) : 1),
            height: Math.floor(HT)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(TT) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(TT) : this.renderHorizontalRect(TT)
        }
      }, {
        key: "renderAreaStatically",
        value: function(TT, UT, mT, WT) {
          var MT = this.props,
            gT = MT.layout,
            nT = MT.type,
            HT = MT.stroke,
            kT = MT.connectNulls,
            jT = MT.isRange,
            lT = (MT.ref, wT(MT, JT));
          return zT.createElement(qT.e, {
            clipPath: mT ? "url(#clipPath-".concat(WT, ")") : null
          }, zT.createElement(vT.d, tT({}, (0, YT.b)(lT, !0), {
            points: TT,
            connectNulls: kT,
            type: nT,
            baseLine: UT,
            layout: gT,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== HT && zT.createElement(vT.d, tT({}, (0, YT.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: gT,
            type: nT,
            connectNulls: kT,
            fill: "none",
            points: TT
          })), "none" !== HT && jT && zT.createElement(vT.d, tT({}, (0, YT.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: gT,
            type: nT,
            connectNulls: kT,
            fill: "none",
            points: UT
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(TT, UT) {
          var mT = this,
            WT = this.props,
            MT = WT.points,
            nT = WT.baseLine,
            HT = WT.isAnimationActive,
            kT = WT.animationBegin,
            jT = WT.animationDuration,
            lT = WT.animationEasing,
            pT = WT.animationId,
            ZT = this.state,
            cT = ZT.prevPoints,
            vT = ZT.prevBaseLine;
          return zT.createElement(gT.d, {
            np: kT,
            duration: jT,
            isActive: HT,
            easing: lT,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(pT),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(WT) {
            var gT = WT.t;
            if (cT) {
              var HT, kT = cT.length / MT.length,
                jT = MT.map((function(TT, UT) {
                  var mT = Math.floor(UT * kT);
                  if (cT[mT]) {
                    var WT = cT[mT],
                      zT = (0, OT.q)(WT.x, TT.x),
                      MT = (0, OT.q)(WT.y, TT.y);
                    return yT(yT({}, TT), {}, {
                      x: zT(gT),
                      y: MT(gT)
                    })
                  }
                  return TT
                }));
              return HT = (0, OT.x)(nT) && "number" === typeof nT ? (0, OT.q)(vT, nT)(gT) : LT()(nT) || BT()(nT) ? (0, OT.q)(vT, 0)(gT) : nT.map((function(TT, UT) {
                var mT = Math.floor(UT * kT);
                if (vT[mT]) {
                  var WT = vT[mT],
                    zT = (0, OT.q)(WT.x, TT.x),
                    MT = (0, OT.q)(WT.y, TT.y);
                  return yT(yT({}, TT), {}, {
                    x: zT(gT),
                    y: MT(gT)
                  })
                }
                return TT
              })), mT.renderAreaStatically(jT, HT, TT, UT)
            }
            return zT.createElement(qT.e, null, zT.createElement("defs", null, zT.createElement("clipPath", {
              id: "animationClipPath-".concat(UT)
            }, mT.renderClipRect(gT))), zT.createElement(qT.e, {
              clipPath: "url(#animationClipPath-".concat(UT, ")")
            }, mT.renderAreaStatically(MT, nT, TT, UT)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(TT, UT) {
          var mT = this.props,
            WT = mT.points,
            zT = mT.baseLine,
            MT = mT.isAnimationActive,
            gT = this.state,
            nT = gT.prevPoints,
            HT = gT.prevBaseLine,
            kT = gT.totalLength;
          return MT && WT && WT.length && (!nT && kT > 0 || !cT()(nT, WT) || !cT()(HT, zT)) ? this.renderAreaWithAnimation(TT, UT) : this.renderAreaStatically(WT, zT, TT, UT)
        }
      }, {
        key: "render",
        value: function() {
          var TT, UT = this.props,
            mT = UT.hide,
            WT = UT.dot,
            gT = UT.points,
            nT = UT.className,
            HT = UT.top,
            kT = UT.left,
            jT = UT.xAxis,
            lT = UT.yAxis,
            pT = UT.width,
            BT = UT.height,
            ZT = UT.isAnimationActive,
            cT = UT.id;
          if (mT || !gT || !gT.length) return null;
          var vT = this.state.isAnimationFinished,
            fT = 1 === gT.length,
            bT = (0, MT.c)("recharts-area", nT),
            OT = jT && jT.allowDataOverflow,
            eT = lT && lT.allowDataOverflow,
            JT = OT || eT,
            xT = LT()(cT) ? this.id : cT,
            dT = null !== (TT = (0, YT.b)(WT, !1)) && void 0 !== TT ? TT : {
              r: 3,
              strokeWidth: 2
            },
            wT = dT.r,
            tT = void 0 === wT ? 3 : wT,
            aT = dT.strokeWidth,
            yT = void 0 === aT ? 2 : aT,
            XT = ((0, YT.p)(WT) ? WT : {}).clipDot,
            IT = void 0 === XT || XT,
            QT = 2 * tT + yT;
          return zT.createElement(qT.e, {
            className: bT
          }, OT || eT ? zT.createElement("defs", null, zT.createElement("clipPath", {
            id: "clipPath-".concat(xT)
          }, zT.createElement("rect", {
            x: OT ? kT : kT - pT / 2,
            y: eT ? HT : HT - BT / 2,
            width: OT ? pT : 2 * pT,
            height: eT ? BT : 2 * BT
          })), !IT && zT.createElement("clipPath", {
            id: "clipPath-dots-".concat(xT)
          }, zT.createElement("rect", {
            x: kT - QT / 2,
            y: HT - QT / 2,
            width: pT + QT,
            height: BT + QT
          }))) : null, fT ? null : this.renderArea(JT, xT), (WT || fT) && this.renderDots(JT, IT, xT), (!ZT || vT) && iT.b.renderCallByParent(this.props, gT))
        }
      }], nT = [{
        key: "getDerivedStateFromProps",
        value: function(TT, UT) {
          return TT.animationId !== UT.prevAnimationId ? {
            prevAnimationId: TT.animationId,
            curPoints: TT.points,
            curBaseLine: TT.baseLine,
            prevPoints: UT.curPoints,
            prevBaseLine: UT.curBaseLine
          } : TT.points !== UT.curPoints || TT.baseLine !== UT.curBaseLine ? {
            curPoints: TT.points,
            curBaseLine: TT.baseLine
          } : null
        }
      }], WT && XT(mT.prototype, WT), nT && XT(mT, nT), Object.defineProperty(mT, "prototype", {
        writable: !1
      }), mT;
      var mT, WT, nT
    }(zT.PureComponent);
    WT = uT, PT(uT, "displayName", "Area"), PT(uT, "defaultProps", {
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
      isAnimationActive: !bT.c.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), PT(uT, "getBaseValue", (function(TT, UT, mT, WT) {
      var zT = TT.layout,
        MT = TT.baseValue,
        gT = UT.props.baseValue,
        nT = null !== gT && void 0 !== gT ? gT : MT;
      if ((0, OT.x)(nT) && "number" === typeof nT) return nT;
      var HT = "horizontal" === zT ? WT : mT,
        kT = HT.scale.domain();
      if ("number" === HT.type) {
        var jT = Math.max(kT[0], kT[1]),
          lT = Math.min(kT[0], kT[1]);
        return "dataMin" === nT ? lT : "dataMax" === nT || jT < 0 ? jT : Math.max(Math.min(kT[0], kT[1]), 0)
      }
      return "dataMin" === nT ? kT[0] : "dataMax" === nT ? kT[1] : kT[0]
    })), PT(uT, "getComposedData", (function(TT) {
      var UT, mT = TT.props,
        zT = TT.item,
        MT = TT.xAxis,
        gT = TT.yAxis,
        nT = TT.xAxisTicks,
        HT = TT.yAxisTicks,
        kT = TT.bandSize,
        jT = TT.dataKey,
        lT = TT.stackedData,
        LT = TT.dataStartIndex,
        pT = TT.displayedData,
        BT = TT.offset,
        ZT = mT.layout,
        cT = lT && lT.length,
        vT = WT.getBaseValue(mT, zT, MT, gT),
        fT = "horizontal" === ZT,
        qT = !1,
        iT = pT.map((function(TT, UT) {
          var mT;
          cT ? mT = lT[LT + UT] : (mT = (0, eT._)(TT, jT), Array.isArray(mT) ? qT = !0 : mT = [vT, mT]);
          var WT = null == mT[1] || cT && null == (0, eT._)(TT, jT);
          return fT ? {
            x: (0, eT.x)({
              axis: MT,
              ticks: nT,
              bandSize: kT,
              entry: TT,
              index: UT
            }),
            y: WT ? null : gT.scale(mT[1]),
            value: mT,
            payload: TT
          } : {
            x: WT ? null : MT.scale(mT[1]),
            y: (0, eT.x)({
              axis: gT,
              ticks: HT,
              bandSize: kT,
              entry: TT,
              index: UT
            }),
            value: mT,
            payload: TT
          }
        }));
      return UT = cT || qT ? iT.map((function(TT) {
        var UT = Array.isArray(TT.value) ? TT.value[0] : null;
        return fT ? {
          x: TT.x,
          y: null != UT && null != TT.y ? gT.scale(UT) : null
        } : {
          x: null != UT ? MT.scale(UT) : null,
          y: TT.y
        }
      })) : fT ? gT.scale(vT) : MT.scale(vT), yT({
        points: iT,
        baseLine: UT,
        layout: ZT,
        isRange: qT
      }, BT)
    })), PT(uT, "renderDotItem", (function(TT, UT) {
      var mT;
      if (zT.isValidElement(TT)) mT = zT.cloneElement(TT, UT);
      else if (HT()(TT)) mT = TT(UT);
      else {
        var WT = (0, MT.c)("recharts-area-dot", "boolean" !== typeof TT ? TT.className : ""),
          gT = UT.key,
          nT = wT(UT, xT);
        mT = zT.createElement(fT.d, tT({}, nT, {
          key: gT,
          className: WT
        }))
      }
      return mT
    }))
  },
  6354: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => GT
    });
    var WT = mT(63),
      zT = mT(5177),
      MT = mT(6205),
      gT = mT(6288),
      nT = mT.n(gT),
      HT = mT(5485),
      kT = mT.n(HT),
      jT = mT(6056),
      lT = mT(6302),
      LT = mT(6356),
      pT = mT(6361),
      BT = mT(5254),
      ZT = mT(5497),
      cT = mT(6067),
      vT = mT(6218),
      fT = mT(5517),
      qT = mT(6042),
      iT = mT(6373),
      bT = ["x", "y"];

    function OT(TT) {
      return OT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, OT(TT)
    }

    function eT() {
      return eT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, eT.apply(this, arguments)
    }

    function YT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function JT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? YT(Object(mT), !0).forEach((function(UT) {
          xT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : YT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function xT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != OT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != OT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == OT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function dT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function wT(TT, UT) {
      var mT = TT.x,
        WT = TT.y,
        zT = dT(TT, bT),
        MT = "".concat(mT),
        gT = parseInt(MT, 10),
        nT = "".concat(WT),
        HT = parseInt(nT, 10),
        kT = "".concat(UT.height || zT.height),
        jT = parseInt(kT, 10),
        lT = "".concat(UT.width || zT.width),
        LT = parseInt(lT, 10);
      return JT(JT(JT(JT(JT({}, UT), zT), gT ? {
        x: gT
      } : {}), HT ? {
        y: HT
      } : {}), {}, {
        height: jT,
        width: LT,
        name: UT.name,
        radius: UT.radius
      })
    }

    function tT(TT) {
      return WT.createElement(iT.d, eT({
        shapeType: "rectangle",
        propTransformer: wT,
        activeClassName: "recharts-active-bar"
      }, TT))
    }
    var aT, yT = ["value", "background"];

    function XT(TT) {
      return XT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, XT(TT)
    }

    function IT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function QT() {
      return QT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, QT.apply(this, arguments)
    }

    function sT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function FT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? sT(Object(mT), !0).forEach((function(UT) {
          KT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : sT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function PT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, ST(WT.key), WT)
      }
    }

    function VT(TT, UT, mT) {
      return UT = CT(UT),
        function(TT, UT) {
          if (UT && ("object" === XT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, uT() ? Reflect.construct(UT, mT || [], CT(TT).constructor) : UT.apply(TT, mT))
    }

    function uT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (uT = function() {
        return !!TT
      })()
    }

    function CT(TT) {
      return CT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, CT(TT)
    }

    function rT(TT, UT) {
      return rT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, rT(TT, UT)
    }

    function KT(TT, UT, mT) {
      return (UT = ST(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function ST(TT) {
      var UT = function(TT, UT) {
        if ("object" != XT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != XT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == XT(UT) ? UT : UT + ""
    }
    var GT = function(TT) {
      function UT() {
        var TT;
        ! function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, UT);
        for (var mT = arguments.length, WT = new Array(mT), zT = 0; zT < mT; zT++) WT[zT] = arguments[zT];
        return KT(TT = VT(this, UT, [].concat(WT)), "state", {
          isAnimationFinished: !1
        }), KT(TT, "id", (0, BT.E)("recharts-bar-")), KT(TT, "handleAnimationEnd", (function() {
          var UT = TT.props.onAnimationEnd;
          TT.setState({
            isAnimationFinished: !0
          }), UT && UT()
        })), KT(TT, "handleAnimationStart", (function() {
          var UT = TT.props.onAnimationStart;
          TT.setState({
            isAnimationFinished: !1
          }), UT && UT()
        })), TT
      }
      return function(TT, UT) {
        if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(UT && UT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), UT && rT(TT, UT)
      }(UT, TT), mT = UT, gT = [{
        key: "renderRectanglesStatically",
        value: function(TT) {
          var UT = this,
            mT = this.props,
            zT = mT.shape,
            MT = mT.dataKey,
            gT = mT.activeIndex,
            nT = mT.activeBar,
            HT = (0, ZT.b)(this.props, !1);
          return TT && TT.map((function(TT, mT) {
            var kT = mT === gT,
              lT = kT ? nT : zT,
              LT = FT(FT(FT({}, HT), TT), {}, {
                isActive: kT,
                option: lT,
                index: mT,
                dataKey: MT,
                onAnimationStart: UT.handleAnimationStart,
                onAnimationEnd: UT.handleAnimationEnd
              });
            return WT.createElement(jT.e, QT({
              className: "recharts-bar-rectangle"
            }, (0, fT.m)(UT.props, TT, mT), {
              key: "rectangle-".concat(null === TT || void 0 === TT ? void 0 : TT.x, "-").concat(null === TT || void 0 === TT ? void 0 : TT.y, "-").concat(null === TT || void 0 === TT ? void 0 : TT.value, "-").concat(mT)
            }), WT.createElement(tT, LT))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var TT = this,
            UT = this.props,
            mT = UT.data,
            zT = UT.layout,
            gT = UT.isAnimationActive,
            nT = UT.animationBegin,
            HT = UT.animationDuration,
            kT = UT.animationEasing,
            lT = UT.animationId,
            LT = this.state.prevData;
          return WT.createElement(MT.d, {
            np: nT,
            duration: HT,
            isActive: gT,
            easing: kT,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(lT),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(UT) {
            var MT = UT.t,
              gT = mT.map((function(TT, UT) {
                var mT = LT && LT[UT];
                if (mT) {
                  var WT = (0, BT.q)(mT.x, TT.x),
                    gT = (0, BT.q)(mT.y, TT.y),
                    nT = (0, BT.q)(mT.width, TT.width),
                    HT = (0, BT.q)(mT.height, TT.height);
                  return FT(FT({}, TT), {}, {
                    x: WT(MT),
                    y: gT(MT),
                    width: nT(MT),
                    height: HT(MT)
                  })
                }
                if ("horizontal" === zT) {
                  var kT = (0, BT.q)(0, TT.height)(MT);
                  return FT(FT({}, TT), {}, {
                    y: TT.y + TT.height - kT,
                    height: kT
                  })
                }
                var jT = (0, BT.q)(0, TT.width)(MT);
                return FT(FT({}, TT), {}, {
                  width: jT
                })
              }));
            return WT.createElement(jT.e, null, TT.renderRectanglesStatically(gT))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var TT = this.props,
            UT = TT.data,
            mT = TT.isAnimationActive,
            WT = this.state.prevData;
          return !(mT && UT && UT.length) || WT && nT()(WT, UT) ? this.renderRectanglesStatically(UT) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var TT = this,
            UT = this.props,
            mT = UT.data,
            zT = UT.dataKey,
            MT = UT.activeIndex,
            gT = (0, ZT.b)(this.props.background, !1);
          return mT.map((function(UT, mT) {
            UT.value;
            var nT = UT.background,
              HT = IT(UT, yT);
            if (!nT) return null;
            var kT = FT(FT(FT(FT(FT({}, HT), {}, {
              fill: "#eee"
            }, nT), gT), (0, fT.m)(TT.props, UT, mT)), {}, {
              onAnimationStart: TT.handleAnimationStart,
              onAnimationEnd: TT.handleAnimationEnd,
              dataKey: zT,
              index: mT,
              className: "recharts-bar-background-rectangle"
            });
            return WT.createElement(tT, QT({
              key: "background-bar-".concat(mT),
              option: TT.props.background,
              isActive: mT === MT
            }, kT))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(TT, UT) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var mT = this.props,
            zT = mT.data,
            MT = mT.xAxis,
            gT = mT.yAxis,
            nT = mT.layout,
            HT = mT.children,
            kT = (0, ZT.d)(HT, lT.c);
          if (!kT) return null;
          var LT = "vertical" === nT ? zT[0].height / 2 : zT[0].width / 2,
            pT = function(TT, UT) {
              var mT = Array.isArray(TT.value) ? TT.value[1] : TT.value;
              return {
                x: TT.x,
                y: TT.y,
                value: mT,
                errorVal: (0, vT._)(TT, UT)
              }
            },
            BT = {
              clipPath: TT ? "url(#clipPath-".concat(UT, ")") : null
            };
          return WT.createElement(jT.e, BT, kT.map((function(TT) {
            return WT.cloneElement(TT, {
              key: "error-bar-".concat(UT, "-").concat(TT.props.dataKey),
              data: zT,
              xAxis: MT,
              yAxis: gT,
              layout: nT,
              offset: LT,
              dataPointFormatter: pT
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var TT = this.props,
            UT = TT.hide,
            mT = TT.data,
            MT = TT.className,
            gT = TT.xAxis,
            nT = TT.yAxis,
            HT = TT.left,
            lT = TT.top,
            LT = TT.width,
            BT = TT.height,
            ZT = TT.isAnimationActive,
            cT = TT.background,
            vT = TT.id;
          if (UT || !mT || !mT.length) return null;
          var fT = this.state.isAnimationFinished,
            qT = (0, zT.c)("recharts-bar", MT),
            iT = gT && gT.allowDataOverflow,
            bT = nT && nT.allowDataOverflow,
            OT = iT || bT,
            eT = kT()(vT) ? this.id : vT;
          return WT.createElement(jT.e, {
            className: qT
          }, iT || bT ? WT.createElement("defs", null, WT.createElement("clipPath", {
            id: "clipPath-".concat(eT)
          }, WT.createElement("rect", {
            x: iT ? HT : HT - LT / 2,
            y: bT ? lT : lT - BT / 2,
            width: iT ? LT : 2 * LT,
            height: bT ? BT : 2 * BT
          }))) : null, WT.createElement(jT.e, {
            className: "recharts-bar-rectangles",
            clipPath: OT ? "url(#clipPath-".concat(eT, ")") : null
          }, cT ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(OT, eT), (!ZT || fT) && pT.b.renderCallByParent(this.props, mT))
        }
      }], HT = [{
        key: "getDerivedStateFromProps",
        value: function(TT, UT) {
          return TT.animationId !== UT.prevAnimationId ? {
            prevAnimationId: TT.animationId,
            curData: TT.data,
            prevData: UT.curData
          } : TT.data !== UT.curData ? {
            curData: TT.data
          } : null
        }
      }], gT && PT(mT.prototype, gT), HT && PT(mT, HT), Object.defineProperty(mT, "prototype", {
        writable: !1
      }), mT;
      var mT, gT, HT
    }(WT.PureComponent);
    aT = GT, KT(GT, "displayName", "Bar"), KT(GT, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !cT.c.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), KT(GT, "getComposedData", (function(TT) {
      var UT = TT.props,
        mT = TT.item,
        WT = TT.barPosition,
        zT = TT.bandSize,
        MT = TT.xAxis,
        gT = TT.yAxis,
        nT = TT.xAxisTicks,
        HT = TT.yAxisTicks,
        kT = TT.stackedData,
        jT = TT.dataStartIndex,
        lT = TT.displayedData,
        pT = TT.offset,
        cT = (0, vT.n)(WT, mT);
      if (!cT) return null;
      var fT = UT.layout,
        iT = mT.type.defaultProps,
        bT = void 0 !== iT ? FT(FT({}, iT), mT.props) : mT.props,
        OT = bT.dataKey,
        eT = bT.children,
        YT = bT.minPointSize,
        JT = "horizontal" === fT ? gT : MT,
        xT = kT ? JT.scale.domain() : null,
        dT = (0, vT.t)({
          numericAxis: JT
        }),
        wT = (0, ZT.d)(eT, LT.e),
        tT = lT.map((function(TT, UT) {
          var WT, lT, LT, pT, ZT, iT;
          kT ? WT = (0, vT.mb)(kT[jT + UT], xT) : (WT = (0, vT._)(TT, OT), Array.isArray(WT) || (WT = [dT, WT]));
          var bT = function(TT) {
            var UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(mT, WT) {
              if ("number" === typeof TT) return TT;
              var zT = (0, BT.x)(mT) || (0, BT.u)(mT);
              return zT ? TT(mT, WT) : (zT || (0, qT.c)(!1), UT)
            }
          }(YT, aT.defaultProps.minPointSize)(WT[1], UT);
          if ("horizontal" === fT) {
            var eT, JT = [gT.scale(WT[0]), gT.scale(WT[1])],
              tT = JT[0],
              yT = JT[1];
            lT = (0, vT.v)({
              axis: MT,
              ticks: nT,
              bandSize: zT,
              offset: cT.offset,
              entry: TT,
              index: UT
            }), LT = null !== (eT = null !== yT && void 0 !== yT ? yT : tT) && void 0 !== eT ? eT : void 0, pT = cT.size;
            var XT = tT - yT;
            if (ZT = Number.isNaN(XT) ? 0 : XT, iT = {
                x: lT,
                y: gT.y,
                width: pT,
                height: gT.height
              }, Math.abs(bT) > 0 && Math.abs(ZT) < Math.abs(bT)) {
              var IT = (0, BT.D)(ZT || bT) * (Math.abs(bT) - Math.abs(ZT));
              LT -= IT, ZT += IT
            }
          } else {
            var QT = [MT.scale(WT[0]), MT.scale(WT[1])],
              sT = QT[0],
              PT = QT[1];
            if (lT = sT, LT = (0, vT.v)({
                axis: gT,
                ticks: HT,
                bandSize: zT,
                offset: cT.offset,
                entry: TT,
                index: UT
              }), pT = PT - sT, ZT = cT.size, iT = {
                x: MT.x,
                y: LT,
                width: MT.width,
                height: ZT
              }, Math.abs(bT) > 0 && Math.abs(pT) < Math.abs(bT)) pT += (0, BT.D)(pT || bT) * (Math.abs(bT) - Math.abs(pT))
          }
          return FT(FT(FT({}, TT), {}, {
            x: lT,
            y: LT,
            width: pT,
            height: ZT,
            value: kT ? WT : WT[1],
            payload: TT,
            background: iT
          }, wT && wT[UT] && wT[UT].props), {}, {
            tooltipPayload: [(0, vT.X)(mT, TT)],
            tooltipPosition: {
              x: lT + pT / 2,
              y: LT + ZT / 2
            }
          })
        }));
      return FT({
        data: tT,
        layout: fT
      }, pT)
    }))
  },
  6451: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => XT
    });
    var WT = mT(63),
      zT = mT(5337),
      MT = mT.n(zT),
      gT = mT(5275),
      nT = mT.n(gT),
      HT = mT(5177),
      kT = mT(5514),
      jT = mT(6056),
      lT = mT(6210),
      LT = mT(6320),
      pT = mT(5254),
      BT = mT(5517),
      ZT = mT(5497),
      cT = mT(6454),
      vT = ["viewBox"],
      fT = ["viewBox"],
      qT = ["ticks"];

    function iT(TT) {
      return iT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, iT(TT)
    }

    function bT() {
      return bT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, bT.apply(this, arguments)
    }

    function OT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function eT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? OT(Object(mT), !0).forEach((function(UT) {
          aT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : OT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function YT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function JT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, yT(WT.key), WT)
      }
    }

    function xT(TT, UT, mT) {
      return UT = wT(UT),
        function(TT, UT) {
          if (UT && ("object" === iT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, dT() ? Reflect.construct(UT, mT || [], wT(TT).constructor) : UT.apply(TT, mT))
    }

    function dT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (dT = function() {
        return !!TT
      })()
    }

    function wT(TT) {
      return wT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, wT(TT)
    }

    function tT(TT, UT) {
      return tT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, tT(TT, UT)
    }

    function aT(TT, UT, mT) {
      return (UT = yT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function yT(TT) {
      var UT = function(TT, UT) {
        if ("object" != iT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != iT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == iT(UT) ? UT : UT + ""
    }
    var XT = function(TT) {
      function UT(TT) {
        var mT;
        return function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, UT), (mT = xT(this, UT, [TT])).state = {
          fontSize: "",
          letterSpacing: ""
        }, mT
      }
      return function(TT, UT) {
        if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(UT && UT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), UT && tT(TT, UT)
      }(UT, TT), mT = UT, gT = [{
        key: "renderTickItem",
        value: function(TT, UT, mT) {
          var zT = (0, HT.c)(UT.className, "recharts-cartesian-axis-tick-value");
          return WT.isValidElement(TT) ? WT.cloneElement(TT, eT(eT({}, UT), {}, {
            className: zT
          })) : MT()(TT) ? TT(eT(eT({}, UT), {}, {
            className: zT
          })) : WT.createElement(lT.b, bT({}, UT, {
            className: "recharts-cartesian-axis-tick-value"
          }), mT)
        }
      }], (zT = [{
        key: "shouldComponentUpdate",
        value: function(TT, UT) {
          var mT = TT.viewBox,
            WT = YT(TT, vT),
            zT = this.props,
            MT = zT.viewBox,
            gT = YT(zT, fT);
          return !(0, kT.b)(mT, MT) || !(0, kT.b)(WT, gT) || !(0, kT.b)(UT, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var TT = this.layerReference;
          if (TT) {
            var UT = TT.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            UT && this.setState({
              fontSize: window.getComputedStyle(UT).fontSize,
              letterSpacing: window.getComputedStyle(UT).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(TT) {
          var UT, mT, WT, zT, MT, gT, nT = this.props,
            HT = nT.x,
            kT = nT.y,
            jT = nT.width,
            lT = nT.height,
            LT = nT.orientation,
            BT = nT.tickSize,
            ZT = nT.mirror,
            cT = nT.tickMargin,
            vT = ZT ? -1 : 1,
            fT = TT.tickSize || BT,
            qT = (0, pT.x)(TT.tickCoord) ? TT.tickCoord : TT.coordinate;
          switch (LT) {
            case "top":
              UT = mT = TT.coordinate, gT = (WT = (zT = kT + +!ZT * lT) - vT * fT) - vT * cT, MT = qT;
              break;
            case "left":
              WT = zT = TT.coordinate, MT = (UT = (mT = HT + +!ZT * jT) - vT * fT) - vT * cT, gT = qT;
              break;
            case "right":
              WT = zT = TT.coordinate, MT = (UT = (mT = HT + +ZT * jT) + vT * fT) + vT * cT, gT = qT;
              break;
            default:
              UT = mT = TT.coordinate, gT = (WT = (zT = kT + +ZT * lT) + vT * fT) + vT * cT, MT = qT
          }
          return {
            line: {
              x1: UT,
              y1: WT,
              x2: mT,
              y2: zT
            },
            Cl: {
              x: MT,
              y: gT
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var TT, UT = this.props,
            mT = UT.orientation,
            WT = UT.mirror;
          switch (mT) {
            case "left":
              TT = WT ? "start" : "end";
              break;
            case "right":
              TT = WT ? "end" : "start";
              break;
            default:
              TT = "middle"
          }
          return TT
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var TT = this.props,
            UT = TT.orientation,
            mT = TT.mirror,
            WT = "end";
          switch (UT) {
            case "left":
            case "right":
              WT = "middle";
              break;
            case "top":
              WT = mT ? "start" : "end";
              break;
            default:
              WT = mT ? "end" : "start"
          }
          return WT
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var TT = this.props,
            UT = TT.x,
            mT = TT.y,
            zT = TT.width,
            MT = TT.height,
            gT = TT.orientation,
            kT = TT.mirror,
            jT = TT.axisLine,
            lT = eT(eT(eT({}, (0, ZT.b)(this.props, !1)), (0, ZT.b)(jT, !1)), {}, {
              fill: "none"
            });
          if ("top" === gT || "bottom" === gT) {
            var LT = +("top" === gT && !kT || "bottom" === gT && kT);
            lT = eT(eT({}, lT), {}, {
              x1: UT,
              y1: mT + LT * MT,
              x2: UT + zT,
              y2: mT + LT * MT
            })
          } else {
            var pT = +("left" === gT && !kT || "right" === gT && kT);
            lT = eT(eT({}, lT), {}, {
              x1: UT + pT * zT,
              y1: mT,
              x2: UT + pT * zT,
              y2: mT + MT
            })
          }
          return WT.createElement("line", bT({}, lT, {
            className: (0, HT.c)("recharts-cartesian-axis-line", nT()(jT, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(TT, mT, zT) {
          var gT = this,
            kT = this.props,
            lT = kT.tickLine,
            LT = kT.stroke,
            pT = kT.Cl,
            vT = kT.tickFormatter,
            fT = kT.unit,
            qT = (0, cT.d)(eT(eT({}, this.props), {}, {
              ticks: TT
            }), mT, zT),
            iT = this.getTickTextAnchor(),
            OT = this.getTickVerticalAnchor(),
            YT = (0, ZT.b)(this.props, !1),
            JT = (0, ZT.b)(pT, !1),
            xT = eT(eT({}, YT), {}, {
              fill: "none"
            }, (0, ZT.b)(lT, !1)),
            dT = qT.map((function(TT, mT) {
              var zT = gT.getTickLineCoord(TT),
                kT = zT.line,
                ZT = zT.Cl,
                cT = eT(eT(eT(eT({
                  textAnchor: iT,
                  verticalAnchor: OT
                }, YT), {}, {
                  stroke: "none",
                  fill: LT
                }, JT), ZT), {}, {
                  index: mT,
                  payload: TT,
                  visibleTicksCount: qT.length,
                  tickFormatter: vT
                });
              return WT.createElement(jT.e, bT({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(TT.value, "-").concat(TT.coordinate, "-").concat(TT.tickCoord)
              }, (0, BT.m)(gT.props, TT, mT)), lT && WT.createElement("line", bT({}, xT, kT, {
                className: (0, HT.c)("recharts-cartesian-axis-tick-line", nT()(lT, "className"))
              })), pT && UT.renderTickItem(pT, cT, "".concat(MT()(vT) ? vT(TT.value, mT) : TT.value).concat(fT || "")))
            }));
          return WT.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, dT)
        }
      }, {
        key: "render",
        value: function() {
          var TT = this,
            UT = this.props,
            mT = UT.axisLine,
            zT = UT.width,
            gT = UT.height,
            nT = UT.ticksGenerator,
            kT = UT.className;
          if (UT.hide) return null;
          var lT = this.props,
            pT = lT.ticks,
            BT = YT(lT, qT),
            ZT = pT;
          return MT()(nT) && (ZT = pT && pT.length > 0 ? nT(this.props) : nT(BT)), zT <= 0 || gT <= 0 || !ZT || !ZT.length ? null : WT.createElement(jT.e, {
            className: (0, HT.c)("recharts-cartesian-axis", kT),
            ref: function(UT) {
              TT.layerReference = UT
            }
          }, mT && this.renderAxisLine(), this.renderTicks(ZT, this.state.fontSize, this.state.letterSpacing), LT.d.renderCallByParent(this.props))
        }
      }]) && JT(mT.prototype, zT), gT && JT(mT, gT), Object.defineProperty(mT, "prototype", {
        writable: !1
      }), mT;
      var mT, zT, gT
    }(WT.Component);
    aT(XT, "displayName", "CartesianAxis"), aT(XT, "defaultProps", {
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
      Cl: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6468: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => aT
    });
    var WT = mT(63),
      zT = mT(5337),
      MT = mT.n(zT),
      gT = mT(5491),
      nT = mT(5254),
      HT = mT(5497),
      kT = mT(6218),
      jT = mT(6454),
      lT = mT(6451),
      LT = mT(6413),
      pT = ["x1", "y1", "x2", "y2", "key"],
      BT = ["offset"];

    function ZT(TT) {
      return ZT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, ZT(TT)
    }

    function cT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function vT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? cT(Object(mT), !0).forEach((function(UT) {
          fT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : cT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function fT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != ZT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != ZT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == ZT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function qT() {
      return qT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, qT.apply(this, arguments)
    }

    function iT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }
    var bT = function(TT) {
      var UT = TT.fill;
      if (!UT || "none" === UT) return null;
      var mT = TT.fillOpacity,
        zT = TT.x,
        MT = TT.y,
        gT = TT.width,
        nT = TT.height,
        HT = TT.ry;
      return WT.createElement("rect", {
        x: zT,
        y: MT,
        ry: HT,
        width: gT,
        height: nT,
        stroke: "none",
        fill: UT,
        fillOpacity: mT,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function OT(TT, UT) {
      var mT;
      if (WT.isValidElement(TT)) mT = WT.cloneElement(TT, UT);
      else if (MT()(TT)) mT = TT(UT);
      else {
        var zT = UT.x1,
          gT = UT.y1,
          nT = UT.x2,
          kT = UT.y2,
          jT = UT.key,
          lT = iT(UT, pT),
          LT = (0, HT.b)(lT, !1),
          ZT = (LT.offset, iT(LT, BT));
        mT = WT.createElement("line", qT({}, ZT, {
          x1: zT,
          y1: gT,
          x2: nT,
          y2: kT,
          fill: "none",
          key: jT
        }))
      }
      return mT
    }

    function eT(TT) {
      var UT = TT.x,
        mT = TT.width,
        zT = TT.horizontal,
        MT = void 0 === zT || zT,
        gT = TT.horizontalPoints;
      if (!MT || !gT || !gT.length) return null;
      var nT = gT.map((function(WT, zT) {
        var gT = vT(vT({}, TT), {}, {
          x1: UT,
          y1: WT,
          x2: UT + mT,
          y2: WT,
          key: "line-".concat(zT),
          index: zT
        });
        return OT(MT, gT)
      }));
      return WT.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, nT)
    }

    function YT(TT) {
      var UT = TT.y,
        mT = TT.height,
        zT = TT.vertical,
        MT = void 0 === zT || zT,
        gT = TT.verticalPoints;
      if (!MT || !gT || !gT.length) return null;
      var nT = gT.map((function(WT, zT) {
        var gT = vT(vT({}, TT), {}, {
          x1: WT,
          y1: UT,
          x2: WT,
          y2: UT + mT,
          key: "line-".concat(zT),
          index: zT
        });
        return OT(MT, gT)
      }));
      return WT.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, nT)
    }

    function JT(TT) {
      var UT = TT.horizontalFill,
        mT = TT.fillOpacity,
        zT = TT.x,
        MT = TT.y,
        gT = TT.width,
        nT = TT.height,
        HT = TT.horizontalPoints,
        kT = TT.horizontal;
      if (!(void 0 === kT || kT) || !UT || !UT.length) return null;
      var jT = HT.map((function(TT) {
        return Math.round(TT + MT - MT)
      })).sort((function(TT, UT) {
        return TT - UT
      }));
      MT !== jT[0] && jT.unshift(0);
      var lT = jT.map((function(TT, HT) {
        var kT = !jT[HT + 1] ? MT + nT - TT : jT[HT + 1] - TT;
        if (kT <= 0) return null;
        var lT = HT % UT.length;
        return WT.createElement("rect", {
          key: "react-".concat(HT),
          y: TT,
          x: zT,
          height: kT,
          width: gT,
          stroke: "none",
          fill: UT[lT],
          fillOpacity: mT,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return WT.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, lT)
    }

    function xT(TT) {
      var UT = TT.vertical,
        mT = void 0 === UT || UT,
        zT = TT.verticalFill,
        MT = TT.fillOpacity,
        gT = TT.x,
        nT = TT.y,
        HT = TT.width,
        kT = TT.height,
        jT = TT.verticalPoints;
      if (!mT || !zT || !zT.length) return null;
      var lT = jT.map((function(TT) {
        return Math.round(TT + gT - gT)
      })).sort((function(TT, UT) {
        return TT - UT
      }));
      gT !== lT[0] && lT.unshift(0);
      var LT = lT.map((function(TT, UT) {
        var mT = !lT[UT + 1] ? gT + HT - TT : lT[UT + 1] - TT;
        if (mT <= 0) return null;
        var jT = UT % zT.length;
        return WT.createElement("rect", {
          key: "react-".concat(UT),
          x: TT,
          y: nT,
          width: mT,
          height: kT,
          stroke: "none",
          fill: zT[jT],
          fillOpacity: MT,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return WT.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, LT)
    }
    var dT = function(TT, UT) {
        var mT = TT.xAxis,
          WT = TT.width,
          zT = TT.height,
          MT = TT.offset;
        return (0, kT.y)((0, jT.d)(vT(vT(vT({}, lT.d.defaultProps), mT), {}, {
          ticks: (0, kT.P)(mT, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: WT,
            height: zT
          }
        })), MT.left, MT.left + MT.width, UT)
      },
      wT = function(TT, UT) {
        var mT = TT.yAxis,
          WT = TT.width,
          zT = TT.height,
          MT = TT.offset;
        return (0, kT.y)((0, jT.d)(vT(vT(vT({}, lT.d.defaultProps), mT), {}, {
          ticks: (0, kT.P)(mT, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: WT,
            height: zT
          }
        })), MT.top, MT.top + MT.height, UT)
      },
      tT = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function aT(TT) {
      var UT, mT, zT, HT, kT, jT, lT = (0, LT.n)(),
        pT = (0, LT.k)(),
        BT = (0, LT.r)(),
        cT = vT(vT({}, TT), {}, {
          stroke: null !== (UT = TT.stroke) && void 0 !== UT ? UT : tT.stroke,
          fill: null !== (mT = TT.fill) && void 0 !== mT ? mT : tT.fill,
          horizontal: null !== (zT = TT.horizontal) && void 0 !== zT ? zT : tT.horizontal,
          horizontalFill: null !== (HT = TT.horizontalFill) && void 0 !== HT ? HT : tT.horizontalFill,
          vertical: null !== (kT = TT.vertical) && void 0 !== kT ? kT : tT.vertical,
          verticalFill: null !== (jT = TT.verticalFill) && void 0 !== jT ? jT : tT.verticalFill,
          x: (0, nT.x)(TT.x) ? TT.x : BT.left,
          y: (0, nT.x)(TT.y) ? TT.y : BT.top,
          width: (0, nT.x)(TT.width) ? TT.width : BT.width,
          height: (0, nT.x)(TT.height) ? TT.height : BT.height
        }),
        fT = cT.x,
        iT = cT.y,
        OT = cT.width,
        aT = cT.height,
        yT = cT.syncWithTicks,
        XT = cT.horizontalValues,
        IT = cT.verticalValues,
        QT = (0, LT.g)(),
        sT = (0, LT.C)();
      if (!(0, nT.x)(OT) || OT <= 0 || !(0, nT.x)(aT) || aT <= 0 || !(0, nT.x)(fT) || fT !== +fT || !(0, nT.x)(iT) || iT !== +iT) return null;
      var FT = cT.verticalCoordinatesGenerator || dT,
        PT = cT.horizontalCoordinatesGenerator || wT,
        VT = cT.horizontalPoints,
        uT = cT.verticalPoints;
      if ((!VT || !VT.length) && MT()(PT)) {
        var CT = XT && XT.length,
          rT = PT({
            yAxis: sT ? vT(vT({}, sT), {}, {
              ticks: CT ? XT : sT.ticks
            }) : void 0,
            width: lT,
            height: pT,
            offset: BT
          }, !!CT || yT);
        (0, gT.e)(Array.isArray(rT), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(ZT(rT), "]")), Array.isArray(rT) && (VT = rT)
      }
      if ((!uT || !uT.length) && MT()(FT)) {
        var KT = IT && IT.length,
          ST = FT({
            xAxis: QT ? vT(vT({}, QT), {}, {
              ticks: KT ? IT : QT.ticks
            }) : void 0,
            width: lT,
            height: pT,
            offset: BT
          }, !!KT || yT);
        (0, gT.e)(Array.isArray(ST), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(ZT(ST), "]")), Array.isArray(ST) && (uT = ST)
      }
      return WT.createElement("g", {
        className: "recharts-cartesian-grid"
      }, WT.createElement(bT, {
        fill: cT.fill,
        fillOpacity: cT.fillOpacity,
        x: cT.x,
        y: cT.y,
        width: cT.width,
        height: cT.height,
        ry: cT.ry
      }), WT.createElement(eT, qT({}, cT, {
        offset: BT,
        horizontalPoints: VT,
        xAxis: QT,
        yAxis: sT
      })), WT.createElement(YT, qT({}, cT, {
        offset: BT,
        verticalPoints: uT,
        xAxis: QT,
        yAxis: sT
      })), WT.createElement(JT, qT({}, cT, {
        horizontalPoints: VT
      })), WT.createElement(xT, qT({}, cT, {
        verticalPoints: uT
      })))
    }
    aT.displayName = "CartesianGrid"
  },
  6302: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => iT
    });
    var WT = mT(63),
      zT = mT(6042),
      MT = mT(6056),
      gT = mT(5497),
      nT = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function HT(TT) {
      return HT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, HT(TT)
    }

    function kT() {
      return kT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, kT.apply(this, arguments)
    }

    function jT(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        var mT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != mT) {
          var WT, zT, MT, gT, nT = [],
            HT = !0,
            kT = !1;
          try {
            if (MT = (mT = mT.call(TT)).next, 0 === UT) {
              if (Object(mT) !== mT) return;
              HT = !1
            } else
              for (; !(HT = (WT = MT.call(mT)).done) && (nT.push(WT.value), nT.length !== UT); HT = !0);
          } catch (TT) {
            kT = !0, zT = TT
          } finally {
            try {
              if (!HT && null != mT.return && (gT = mT.return(), Object(gT) !== gT)) return
            } finally {
              if (kT) throw zT
            }
          }
          return nT
        }
      }(TT, UT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return lT(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return lT(TT, UT)
      }(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function LT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function pT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, qT(WT.key), WT)
      }
    }

    function BT(TT, UT, mT) {
      return UT = cT(UT),
        function(TT, UT) {
          if (UT && ("object" === HT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, ZT() ? Reflect.construct(UT, mT || [], cT(TT).constructor) : UT.apply(TT, mT))
    }

    function ZT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (ZT = function() {
        return !!TT
      })()
    }

    function cT(TT) {
      return cT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, cT(TT)
    }

    function vT(TT, UT) {
      return vT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, vT(TT, UT)
    }

    function fT(TT, UT, mT) {
      return (UT = qT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function qT(TT) {
      var UT = function(TT, UT) {
        if ("object" != HT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != HT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == HT(UT) ? UT : UT + ""
    }
    var iT = function(TT) {
      function UT() {
        return function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, UT), BT(this, UT, arguments)
      }
      return function(TT, UT) {
        if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(UT && UT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), UT && vT(TT, UT)
      }(UT, TT), mT = UT, (HT = [{
        key: "render",
        value: function() {
          var TT = this.props,
            UT = TT.offset,
            mT = TT.layout,
            HT = TT.width,
            lT = TT.dataKey,
            pT = TT.data,
            BT = TT.dataPointFormatter,
            ZT = TT.xAxis,
            cT = TT.yAxis,
            vT = LT(TT, nT),
            fT = (0, gT.b)(vT, !1);
          "x" === this.props.direction && "number" !== ZT.type && (0, zT.c)(!1);
          var qT = pT.map((function(TT) {
            var zT = BT(TT, lT),
              gT = zT.x,
              nT = zT.y,
              LT = zT.value,
              pT = zT.errorVal;
            if (!pT) return null;
            var vT, qT, iT = [];
            if (Array.isArray(pT)) {
              var bT = jT(pT, 2);
              vT = bT[0], qT = bT[1]
            } else vT = qT = pT;
            if ("vertical" === mT) {
              var OT = ZT.scale,
                eT = nT + UT,
                YT = eT + HT,
                JT = eT - HT,
                xT = OT(LT - vT),
                dT = OT(LT + qT);
              iT.push({
                x1: dT,
                y1: YT,
                x2: dT,
                y2: JT
              }), iT.push({
                x1: xT,
                y1: eT,
                x2: dT,
                y2: eT
              }), iT.push({
                x1: xT,
                y1: YT,
                x2: xT,
                y2: JT
              })
            } else if ("horizontal" === mT) {
              var wT = cT.scale,
                tT = gT + UT,
                aT = tT - HT,
                yT = tT + HT,
                XT = wT(LT - vT),
                IT = wT(LT + qT);
              iT.push({
                x1: aT,
                y1: IT,
                x2: yT,
                y2: IT
              }), iT.push({
                x1: tT,
                y1: XT,
                x2: tT,
                y2: IT
              }), iT.push({
                x1: aT,
                y1: XT,
                x2: yT,
                y2: XT
              })
            }
            return WT.createElement(MT.e, kT({
              className: "recharts-errorBar",
              key: "bar-".concat(iT.map((function(TT) {
                return "".concat(TT.x1, "-").concat(TT.x2, "-").concat(TT.y1, "-").concat(TT.y2)
              })))
            }, fT), iT.map((function(TT) {
              return WT.createElement("line", kT({}, TT, {
                key: "line-".concat(TT.x1, "-").concat(TT.x2, "-").concat(TT.y1, "-").concat(TT.y2)
              }))
            })))
          }));
          return WT.createElement(MT.e, {
            className: "recharts-errorBars"
          }, qT)
        }
      }]) && pT(mT.prototype, HT), lT && pT(mT, lT), Object.defineProperty(mT, "prototype", {
        writable: !1
      }), mT;
      var mT, HT, lT
    }(WT.Component);
    fT(iT, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), fT(iT, "displayName", "ErrorBar")
  },
  6443: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => PT
    });
    var WT = mT(63),
      zT = mT(6205),
      MT = mT(5337),
      gT = mT.n(MT),
      nT = mT(5485),
      HT = mT.n(nT),
      kT = mT(6288),
      jT = mT.n(kT),
      lT = mT(5177),
      LT = mT(6435),
      pT = mT(6197),
      BT = mT(6056),
      ZT = mT(6361),
      cT = mT(6302),
      vT = mT(5254),
      fT = mT(5497),
      qT = mT(6067),
      iT = mT(6218),
      bT = ["type", "layout", "connectNulls", "ref"],
      OT = ["key"];

    function eT(TT) {
      return eT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, eT(TT)
    }

    function YT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function JT() {
      return JT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, JT.apply(this, arguments)
    }

    function xT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function dT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? xT(Object(mT), !0).forEach((function(UT) {
          sT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : xT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function wT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return tT(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return tT(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return tT(TT, UT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function aT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, FT(WT.key), WT)
      }
    }

    function yT(TT, UT, mT) {
      return UT = IT(UT),
        function(TT, UT) {
          if (UT && ("object" === eT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, XT() ? Reflect.construct(UT, mT || [], IT(TT).constructor) : UT.apply(TT, mT))
    }

    function XT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (XT = function() {
        return !!TT
      })()
    }

    function IT(TT) {
      return IT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, IT(TT)
    }

    function QT(TT, UT) {
      return QT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, QT(TT, UT)
    }

    function sT(TT, UT, mT) {
      return (UT = FT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function FT(TT) {
      var UT = function(TT, UT) {
        if ("object" != eT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != eT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == eT(UT) ? UT : UT + ""
    }
    var PT = function(TT) {
      function UT() {
        var TT;
        ! function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, UT);
        for (var mT = arguments.length, WT = new Array(mT), zT = 0; zT < mT; zT++) WT[zT] = arguments[zT];
        return sT(TT = yT(this, UT, [].concat(WT)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), sT(TT, "generateSimpleStrokeDasharray", (function(TT, UT) {
          return "".concat(UT, "px ").concat(TT - UT, "px")
        })), sT(TT, "getStrokeDasharray", (function(mT, WT, zT) {
          var MT = zT.reduce((function(TT, UT) {
            return TT + UT
          }));
          if (!MT) return TT.generateSimpleStrokeDasharray(WT, mT);
          for (var gT = Math.floor(mT / MT), nT = mT % MT, HT = WT - mT, kT = [], jT = 0, lT = 0; jT < zT.length; lT += zT[jT], ++jT)
            if (lT + zT[jT] > nT) {
              kT = [].concat(wT(zT.slice(0, jT)), [nT - lT]);
              break
            } var LT = kT.length % 2 === 0 ? [0, HT] : [HT];
          return [].concat(wT(UT.repeat(zT, gT)), wT(kT), LT).map((function(TT) {
            return "".concat(TT, "px")
          })).join(", ")
        })), sT(TT, "id", (0, vT.E)("recharts-line-")), sT(TT, "pathRef", (function(UT) {
          TT.mainCurve = UT
        })), sT(TT, "handleAnimationEnd", (function() {
          TT.setState({
            isAnimationFinished: !0
          }), TT.props.onAnimationEnd && TT.props.onAnimationEnd()
        })), sT(TT, "handleAnimationStart", (function() {
          TT.setState({
            isAnimationFinished: !1
          }), TT.props.onAnimationStart && TT.props.onAnimationStart()
        })), TT
      }
      return function(TT, UT) {
        if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(UT && UT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), UT && QT(TT, UT)
      }(UT, TT), mT = UT, MT = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var TT = this.getTotalLength();
            this.setState({
              totalLength: TT
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var TT = this.getTotalLength();
            TT !== this.state.totalLength && this.setState({
              totalLength: TT
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var TT = this.mainCurve;
          try {
            return TT && TT.getTotalLength && TT.getTotalLength() || 0
          } catch (UT) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(TT, UT) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var mT = this.props,
            zT = mT.points,
            MT = mT.xAxis,
            gT = mT.yAxis,
            nT = mT.layout,
            HT = mT.children,
            kT = (0, fT.d)(HT, cT.c);
          if (!kT) return null;
          var jT = function(TT, UT) {
              return {
                x: TT.x,
                y: TT.y,
                value: TT.value,
                errorVal: (0, iT._)(TT.payload, UT)
              }
            },
            lT = {
              clipPath: TT ? "url(#clipPath-".concat(UT, ")") : null
            };
          return WT.createElement(BT.e, lT, kT.map((function(TT) {
            return WT.cloneElement(TT, {
              key: "bar-".concat(TT.props.dataKey),
              data: zT,
              xAxis: MT,
              yAxis: gT,
              layout: nT,
              dataPointFormatter: jT
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(TT, mT, zT) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var MT = this.props,
            gT = MT.dot,
            nT = MT.points,
            HT = MT.dataKey,
            kT = (0, fT.b)(this.props, !1),
            jT = (0, fT.b)(gT, !0),
            lT = nT.map((function(TT, mT) {
              var WT = dT(dT(dT({
                key: "dot-".concat(mT),
                r: 3
              }, kT), jT), {}, {
                index: mT,
                cx: TT.x,
                cy: TT.y,
                value: TT.value,
                dataKey: HT,
                payload: TT.payload,
                points: nT
              });
              return UT.renderDotItem(gT, WT)
            })),
            LT = {
              clipPath: TT ? "url(#clipPath-".concat(mT ? "" : "dots-").concat(zT, ")") : null
            };
          return WT.createElement(BT.e, JT({
            className: "recharts-line-dots",
            key: "dots"
          }, LT), lT)
        }
      }, {
        key: "renderCurveStatically",
        value: function(TT, UT, mT, zT) {
          var MT = this.props,
            gT = MT.type,
            nT = MT.layout,
            HT = MT.connectNulls,
            kT = (MT.ref, YT(MT, bT)),
            jT = dT(dT(dT({}, (0, fT.b)(kT, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: UT ? "url(#clipPath-".concat(mT, ")") : null,
              points: TT
            }, zT), {}, {
              type: gT,
              layout: nT,
              connectNulls: HT
            });
          return WT.createElement(LT.d, JT({}, jT, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(TT, UT) {
          var mT = this,
            MT = this.props,
            gT = MT.points,
            nT = MT.strokeDasharray,
            HT = MT.isAnimationActive,
            kT = MT.animationBegin,
            jT = MT.animationDuration,
            lT = MT.animationEasing,
            LT = MT.animationId,
            pT = MT.animateNewValues,
            BT = MT.width,
            ZT = MT.height,
            cT = this.state,
            fT = cT.prevPoints,
            qT = cT.totalLength;
          return WT.createElement(zT.d, {
            np: kT,
            duration: jT,
            isActive: HT,
            easing: lT,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(LT),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(WT) {
            var zT = WT.t;
            if (fT) {
              var MT = fT.length / gT.length,
                HT = gT.map((function(TT, UT) {
                  var mT = Math.floor(UT * MT);
                  if (fT[mT]) {
                    var WT = fT[mT],
                      gT = (0, vT.q)(WT.x, TT.x),
                      nT = (0, vT.q)(WT.y, TT.y);
                    return dT(dT({}, TT), {}, {
                      x: gT(zT),
                      y: nT(zT)
                    })
                  }
                  if (pT) {
                    var HT = (0, vT.q)(2 * BT, TT.x),
                      kT = (0, vT.q)(ZT / 2, TT.y);
                    return dT(dT({}, TT), {}, {
                      x: HT(zT),
                      y: kT(zT)
                    })
                  }
                  return dT(dT({}, TT), {}, {
                    x: TT.x,
                    y: TT.y
                  })
                }));
              return mT.renderCurveStatically(HT, TT, UT)
            }
            var kT, jT = (0, vT.q)(0, qT)(zT);
            if (nT) {
              var lT = "".concat(nT).split(/[,\s]+/gim).map((function(TT) {
                return parseFloat(TT)
              }));
              kT = mT.getStrokeDasharray(jT, qT, lT)
            } else kT = mT.generateSimpleStrokeDasharray(qT, jT);
            return mT.renderCurveStatically(gT, TT, UT, {
              strokeDasharray: kT
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(TT, UT) {
          var mT = this.props,
            WT = mT.points,
            zT = mT.isAnimationActive,
            MT = this.state,
            gT = MT.prevPoints,
            nT = MT.totalLength;
          return zT && WT && WT.length && (!gT && nT > 0 || !jT()(gT, WT)) ? this.renderCurveWithAnimation(TT, UT) : this.renderCurveStatically(WT, TT, UT)
        }
      }, {
        key: "render",
        value: function() {
          var TT, UT = this.props,
            mT = UT.hide,
            zT = UT.dot,
            MT = UT.points,
            gT = UT.className,
            nT = UT.xAxis,
            kT = UT.yAxis,
            jT = UT.top,
            LT = UT.left,
            pT = UT.width,
            cT = UT.height,
            vT = UT.isAnimationActive,
            qT = UT.id;
          if (mT || !MT || !MT.length) return null;
          var iT = this.state.isAnimationFinished,
            bT = 1 === MT.length,
            OT = (0, lT.c)("recharts-line", gT),
            eT = nT && nT.allowDataOverflow,
            YT = kT && kT.allowDataOverflow,
            JT = eT || YT,
            xT = HT()(qT) ? this.id : qT,
            dT = null !== (TT = (0, fT.b)(zT, !1)) && void 0 !== TT ? TT : {
              r: 3,
              strokeWidth: 2
            },
            wT = dT.r,
            tT = void 0 === wT ? 3 : wT,
            aT = dT.strokeWidth,
            yT = void 0 === aT ? 2 : aT,
            XT = ((0, fT.p)(zT) ? zT : {}).clipDot,
            IT = void 0 === XT || XT,
            QT = 2 * tT + yT;
          return WT.createElement(BT.e, {
            className: OT
          }, eT || YT ? WT.createElement("defs", null, WT.createElement("clipPath", {
            id: "clipPath-".concat(xT)
          }, WT.createElement("rect", {
            x: eT ? LT : LT - pT / 2,
            y: YT ? jT : jT - cT / 2,
            width: eT ? pT : 2 * pT,
            height: YT ? cT : 2 * cT
          })), !IT && WT.createElement("clipPath", {
            id: "clipPath-dots-".concat(xT)
          }, WT.createElement("rect", {
            x: LT - QT / 2,
            y: jT - QT / 2,
            width: pT + QT,
            height: cT + QT
          }))) : null, !bT && this.renderCurve(JT, xT), this.renderErrorBar(JT, xT), (bT || zT) && this.renderDots(JT, IT, xT), (!vT || iT) && ZT.b.renderCallByParent(this.props, MT))
        }
      }], nT = [{
        key: "getDerivedStateFromProps",
        value: function(TT, UT) {
          return TT.animationId !== UT.prevAnimationId ? {
            prevAnimationId: TT.animationId,
            curPoints: TT.points,
            prevPoints: UT.curPoints
          } : TT.points !== UT.curPoints ? {
            curPoints: TT.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(TT, UT) {
          for (var mT = TT.length % 2 !== 0 ? [].concat(wT(TT), [0]) : TT, WT = [], zT = 0; zT < UT; ++zT) WT = [].concat(wT(WT), wT(mT));
          return WT
        }
      }, {
        key: "renderDotItem",
        value: function(TT, UT) {
          var mT;
          if (WT.isValidElement(TT)) mT = WT.cloneElement(TT, UT);
          else if (gT()(TT)) mT = TT(UT);
          else {
            var zT = UT.key,
              MT = YT(UT, OT),
              nT = (0, lT.c)("recharts-line-dot", "boolean" !== typeof TT ? TT.className : "");
            mT = WT.createElement(pT.d, JT({
              key: zT
            }, MT, {
              className: nT
            }))
          }
          return mT
        }
      }], MT && aT(mT.prototype, MT), nT && aT(mT, nT), Object.defineProperty(mT, "prototype", {
        writable: !1
      }), mT;
      var mT, MT, nT
    }(WT.PureComponent);
    sT(PT, "displayName", "Line"), sT(PT, "defaultProps", {
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
      isAnimationActive: !qT.c.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), sT(PT, "getComposedData", (function(TT) {
      var UT = TT.props,
        mT = TT.xAxis,
        WT = TT.yAxis,
        zT = TT.xAxisTicks,
        MT = TT.yAxisTicks,
        gT = TT.dataKey,
        nT = TT.bandSize,
        kT = TT.displayedData,
        jT = TT.offset,
        lT = UT.layout;
      return dT({
        points: kT.map((function(TT, UT) {
          var kT = (0, iT._)(TT, gT);
          return "horizontal" === lT ? {
            x: (0, iT.x)({
              axis: mT,
              ticks: zT,
              bandSize: nT,
              entry: TT,
              index: UT
            }),
            y: HT()(kT) ? null : WT.scale(kT),
            value: kT,
            payload: TT
          } : {
            x: HT()(kT) ? null : mT.scale(kT),
            y: (0, iT.x)({
              axis: WT,
              ticks: MT,
              bandSize: nT,
              entry: TT,
              index: UT
            }),
            value: kT,
            payload: TT
          }
        })),
        layout: lT
      }, jT)
    }))
  },
  6397: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => yT
    });
    var WT = mT(63),
      zT = mT(5337),
      MT = mT.n(zT),
      gT = mT(6401),
      nT = mT.n(gT),
      HT = mT(5177),
      kT = mT(6056),
      jT = mT(6320),
      lT = mT(6324),
      LT = mT(5254),
      pT = mT(6327),
      BT = mT(5491),
      ZT = mT(5497),
      cT = mT(6413);

    function vT(TT) {
      return vT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, vT(TT)
    }

    function fT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, xT(WT.key), WT)
      }
    }

    function qT(TT, UT, mT) {
      return UT = bT(UT),
        function(TT, UT) {
          if (UT && ("object" === vT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, iT() ? Reflect.construct(UT, mT || [], bT(TT).constructor) : UT.apply(TT, mT))
    }

    function iT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (iT = function() {
        return !!TT
      })()
    }

    function bT(TT) {
      return bT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, bT(TT)
    }

    function OT(TT, UT) {
      return OT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, OT(TT, UT)
    }

    function eT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function YT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? eT(Object(mT), !0).forEach((function(UT) {
          JT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : eT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function JT(TT, UT, mT) {
      return (UT = xT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function xT(TT) {
      var UT = function(TT, UT) {
        if ("object" != vT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != vT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == vT(UT) ? UT : UT + ""
    }

    function dT(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        var mT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != mT) {
          var WT, zT, MT, gT, nT = [],
            HT = !0,
            kT = !1;
          try {
            if (MT = (mT = mT.call(TT)).next, 0 === UT) {
              if (Object(mT) !== mT) return;
              HT = !1
            } else
              for (; !(HT = (WT = MT.call(mT)).done) && (nT.push(WT.value), nT.length !== UT); HT = !0);
          } catch (TT) {
            kT = !0, zT = TT
          } finally {
            try {
              if (!HT && null != mT.return && (gT = mT.return(), Object(gT) !== gT)) return
            } finally {
              if (kT) throw zT
            }
          }
          return nT
        }
      }(TT, UT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return wT(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return wT(TT, UT)
      }(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function tT() {
      return tT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, tT.apply(this, arguments)
    }

    function aT(TT) {
      var UT = TT.x,
        mT = TT.y,
        zT = TT.segment,
        gT = TT.xAxisId,
        vT = TT.yAxisId,
        fT = TT.shape,
        qT = TT.className,
        iT = TT.alwaysShow,
        bT = (0, cT.q)(),
        OT = (0, cT.x)(gT),
        eT = (0, cT.z)(vT),
        JT = (0, cT.u)();
      if (!bT || !JT) return null;
      (0, BT.e)(void 0 === iT, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var xT = function(TT, UT, mT, WT, zT, MT, gT, HT, kT) {
        var jT = zT.x,
          LT = zT.y,
          pT = zT.width,
          BT = zT.height;
        if (mT) {
          var ZT = kT.y,
            cT = TT.y.apply(ZT, {
              position: MT
            });
          if ((0, lT.e)(kT, "discard") && !TT.y.isInRange(cT)) return null;
          var vT = [{
            x: jT + pT,
            y: cT
          }, {
            x: jT,
            y: cT
          }];
          return "left" === HT ? vT.reverse() : vT
        }
        if (UT) {
          var fT = kT.x,
            qT = TT.x.apply(fT, {
              position: MT
            });
          if ((0, lT.e)(kT, "discard") && !TT.x.isInRange(qT)) return null;
          var iT = [{
            x: qT,
            y: LT + BT
          }, {
            x: qT,
            y: LT
          }];
          return "top" === gT ? iT.reverse() : iT
        }
        if (WT) {
          var bT = kT.segment.map((function(UT) {
            return TT.apply(UT, {
              position: MT
            })
          }));
          return (0, lT.e)(kT, "discard") && nT()(bT, (function(UT) {
            return !TT.isInRange(UT)
          })) ? null : bT
        }
        return null
      }((0, pT.e)({
        x: OT.scale,
        y: eT.scale
      }), (0, LT.w)(UT), (0, LT.w)(mT), zT && 2 === zT.length, JT, TT.position, OT.orientation, eT.orientation, TT);
      if (!xT) return null;
      var wT = dT(xT, 2),
        aT = wT[0],
        yT = aT.x,
        XT = aT.y,
        IT = wT[1],
        QT = IT.x,
        sT = IT.y,
        FT = YT(YT({
          clipPath: (0, lT.e)(TT, "hidden") ? "url(#".concat(bT, ")") : void 0
        }, (0, ZT.b)(TT, !0)), {}, {
          x1: yT,
          y1: XT,
          x2: QT,
          y2: sT
        });
      return WT.createElement(kT.e, {
        className: (0, HT.c)("recharts-reference-line", qT)
      }, function(TT, UT) {
        return WT.isValidElement(TT) ? WT.cloneElement(TT, UT) : MT()(TT) ? TT(UT) : WT.createElement("line", tT({}, UT, {
          className: "recharts-reference-line-line"
        }))
      }(fT, FT), jT.d.renderCallByParent(TT, (0, pT.h)({
        x1: yT,
        y1: XT,
        x2: QT,
        y2: sT
      })))
    }
    var yT = function(TT) {
      function UT() {
        return function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, UT), qT(this, UT, arguments)
      }
      return function(TT, UT) {
        if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(UT && UT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), UT && OT(TT, UT)
      }(UT, TT), mT = UT, (zT = [{
        key: "render",
        value: function() {
          return WT.createElement(aT, this.props)
        }
      }]) && fT(mT.prototype, zT), MT && fT(mT, MT), Object.defineProperty(mT, "prototype", {
        writable: !1
      }), mT;
      var mT, zT, MT
    }(WT.Component);
    JT(yT, "displayName", "ReferenceLine"), JT(yT, "defaultProps", {
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
  6447: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => fT
    });
    var WT = mT(63),
      zT = mT(5177),
      MT = mT(6413),
      gT = mT(6451),
      nT = mT(6218);

    function HT(TT) {
      return HT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, HT(TT)
    }

    function kT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, ZT(WT.key), WT)
      }
    }

    function jT(TT, UT, mT) {
      return UT = LT(UT),
        function(TT, UT) {
          if (UT && ("object" === HT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, lT() ? Reflect.construct(UT, mT || [], LT(TT).constructor) : UT.apply(TT, mT))
    }

    function lT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (lT = function() {
        return !!TT
      })()
    }

    function LT(TT) {
      return LT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, LT(TT)
    }

    function pT(TT, UT) {
      return pT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, pT(TT, UT)
    }

    function BT(TT, UT, mT) {
      return (UT = ZT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function ZT(TT) {
      var UT = function(TT, UT) {
        if ("object" != HT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != HT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == HT(UT) ? UT : UT + ""
    }

    function cT() {
      return cT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, cT.apply(this, arguments)
    }

    function vT(TT) {
      var UT = TT.xAxisId,
        mT = (0, MT.n)(),
        HT = (0, MT.k)(),
        kT = (0, MT.x)(UT);
      return null == kT ? null : WT.createElement(gT.d, cT({}, kT, {
        className: (0, zT.c)("recharts-".concat(kT.axisType, " ").concat(kT.axisType), kT.className),
        viewBox: {
          x: 0,
          y: 0,
          width: mT,
          height: HT
        },
        ticksGenerator: function(TT) {
          return (0, nT.P)(TT, !0)
        }
      }))
    }
    var fT = function(TT) {
      function UT() {
        return function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, UT), jT(this, UT, arguments)
      }
      return function(TT, UT) {
        if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(UT && UT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), UT && pT(TT, UT)
      }(UT, TT), mT = UT, (zT = [{
        key: "render",
        value: function() {
          return WT.createElement(vT, this.props)
        }
      }]) && kT(mT.prototype, zT), MT && kT(mT, MT), Object.defineProperty(mT, "prototype", {
        writable: !1
      }), mT;
      var mT, zT, MT
    }(WT.Component);
    BT(fT, "displayName", "XAxis"), BT(fT, "defaultProps", {
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
  6460: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => fT
    });
    var WT = mT(63),
      zT = mT(5177),
      MT = mT(6413),
      gT = mT(6451),
      nT = mT(6218);

    function HT(TT) {
      return HT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, HT(TT)
    }

    function kT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, ZT(WT.key), WT)
      }
    }

    function jT(TT, UT, mT) {
      return UT = LT(UT),
        function(TT, UT) {
          if (UT && ("object" === HT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, lT() ? Reflect.construct(UT, mT || [], LT(TT).constructor) : UT.apply(TT, mT))
    }

    function lT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (lT = function() {
        return !!TT
      })()
    }

    function LT(TT) {
      return LT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, LT(TT)
    }

    function pT(TT, UT) {
      return pT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, pT(TT, UT)
    }

    function BT(TT, UT, mT) {
      return (UT = ZT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function ZT(TT) {
      var UT = function(TT, UT) {
        if ("object" != HT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != HT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == HT(UT) ? UT : UT + ""
    }

    function cT() {
      return cT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, cT.apply(this, arguments)
    }
    var vT = function(TT) {
        var UT = TT.yAxisId,
          mT = (0, MT.n)(),
          HT = (0, MT.k)(),
          kT = (0, MT.z)(UT);
        return null == kT ? null : WT.createElement(gT.d, cT({}, kT, {
          className: (0, zT.c)("recharts-".concat(kT.axisType, " ").concat(kT.axisType), kT.className),
          viewBox: {
            x: 0,
            y: 0,
            width: mT,
            height: HT
          },
          ticksGenerator: function(TT) {
            return (0, nT.P)(TT, !0)
          }
        }))
      },
      fT = function(TT) {
        function UT() {
          return function(TT, UT) {
            if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
          }(this, UT), jT(this, UT, arguments)
        }
        return function(TT, UT) {
          if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
          TT.prototype = Object.create(UT && UT.prototype, {
            constructor: {
              value: TT,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(TT, "prototype", {
            writable: !1
          }), UT && pT(TT, UT)
        }(UT, TT), mT = UT, (zT = [{
          key: "render",
          value: function() {
            return WT.createElement(vT, this.props)
          }
        }]) && kT(mT.prototype, zT), MT && kT(mT, MT), Object.defineProperty(mT, "prototype", {
          writable: !1
        }), mT;
        var mT, zT, MT
      }(WT.Component);
    BT(fT, "displayName", "YAxis"), BT(fT, "defaultProps", {
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
  6454: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => ZT
    });
    var WT = mT(5337),
      zT = mT.n(WT),
      MT = mT(5254),
      gT = mT(6212),
      nT = mT(6067),
      HT = mT(6327);

    function kT(TT, UT, mT) {
      if (UT < 1) return [];
      if (1 === UT && void 0 === mT) return TT;
      for (var WT = [], zT = 0; zT < TT.length; zT += UT) {
        if (void 0 !== mT && !0 !== mT(TT[zT])) return;
        WT.push(TT[zT])
      }
      return WT
    }

    function jT(TT, UT, mT, WT, zT) {
      if (TT * UT < TT * WT || TT * UT > TT * zT) return !1;
      var MT = mT();
      return TT * (UT - TT * MT / 2 - WT) >= 0 && TT * (UT + TT * MT / 2 - zT) <= 0
    }

    function lT(TT) {
      return lT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, lT(TT)
    }

    function LT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function pT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? LT(Object(mT), !0).forEach((function(UT) {
          BT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : LT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function BT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != lT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != lT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == lT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function ZT(TT, UT, mT) {
      var WT = TT.Cl,
        lT = TT.ticks,
        LT = TT.viewBox,
        BT = TT.minTickGap,
        ZT = TT.orientation,
        cT = TT.interval,
        vT = TT.tickFormatter,
        fT = TT.unit,
        qT = TT.angle;
      if (!lT || !lT.length || !WT) return [];
      if ((0, MT.x)(cT) || nT.c.isSsr) return function(TT, UT) {
        return kT(TT, UT + 1)
      }(lT, "number" === typeof cT && (0, MT.x)(cT) ? cT : 0);
      var iT = [],
        bT = "top" === ZT || "bottom" === ZT ? "width" : "height",
        OT = fT && "width" === bT ? (0, gT.f)(fT, {
          fontSize: UT,
          letterSpacing: mT
        }) : {
          width: 0,
          height: 0
        },
        eT = function(TT, WT) {
          var MT = zT()(vT) ? vT(TT.value, WT) : TT.value;
          return "width" === bT ? function(TT, UT, mT) {
            var WT = {
              width: TT.width + UT.width,
              height: TT.height + UT.height
            };
            return (0, HT.g)(WT, mT)
          }((0, gT.f)(MT, {
            fontSize: UT,
            letterSpacing: mT
          }), OT, qT) : (0, gT.f)(MT, {
            fontSize: UT,
            letterSpacing: mT
          })[bT]
        },
        YT = lT.length >= 2 ? (0, MT.D)(lT[1].coordinate - lT[0].coordinate) : 1,
        JT = function(TT, UT, mT) {
          var WT = "width" === mT,
            zT = TT.x,
            MT = TT.y,
            gT = TT.width,
            nT = TT.height;
          return 1 === UT ? {
            start: WT ? zT : MT,
            end: WT ? zT + gT : MT + nT
          } : {
            start: WT ? zT + gT : MT + nT,
            end: WT ? zT : MT
          }
        }(LT, YT, bT);
      return "equidistantPreserveStart" === cT ? function(TT, UT, mT, WT, zT) {
        for (var MT, gT = (WT || []).slice(), nT = UT.start, HT = UT.end, lT = 0, LT = 1, pT = nT, BT = function() {
            var UT = null === WT || void 0 === WT ? void 0 : WT[lT];
            if (void 0 === UT) return {
              v: kT(WT, LT)
            };
            var MT, gT = lT,
              BT = function() {
                return void 0 === MT && (MT = mT(UT, gT)), MT
              },
              ZT = UT.coordinate,
              cT = 0 === lT || jT(TT, ZT, BT, pT, HT);
            cT || (lT = 0, pT = nT, LT += 1), cT && (pT = ZT + TT * (BT() / 2 + zT), lT += LT)
          }; LT <= gT.length;)
          if (MT = BT()) return MT.v;
        return []
      }(YT, JT, eT, lT, BT) : (iT = "preserveStart" === cT || "preserveStartEnd" === cT ? function(TT, UT, mT, WT, zT, MT) {
        var gT = (WT || []).slice(),
          nT = gT.length,
          HT = UT.start,
          kT = UT.end;
        if (MT) {
          var lT = WT[nT - 1],
            LT = mT(lT, nT - 1),
            BT = TT * (lT.coordinate + TT * LT / 2 - kT);
          gT[nT - 1] = lT = pT(pT({}, lT), {}, {
            tickCoord: BT > 0 ? lT.coordinate - BT * TT : lT.coordinate
          }), jT(TT, lT.tickCoord, (function() {
            return LT
          }), HT, kT) && (kT = lT.tickCoord - TT * (LT / 2 + zT), gT[nT - 1] = pT(pT({}, lT), {}, {
            isShow: !0
          }))
        }
        for (var ZT = MT ? nT - 1 : nT, cT = function(UT) {
            var WT, MT = gT[UT],
              nT = function() {
                return void 0 === WT && (WT = mT(MT, UT)), WT
              };
            if (0 === UT) {
              var lT = TT * (MT.coordinate - TT * nT() / 2 - HT);
              gT[UT] = MT = pT(pT({}, MT), {}, {
                tickCoord: lT < 0 ? MT.coordinate - lT * TT : MT.coordinate
              })
            } else gT[UT] = MT = pT(pT({}, MT), {}, {
              tickCoord: MT.coordinate
            });
            jT(TT, MT.tickCoord, nT, HT, kT) && (HT = MT.tickCoord + TT * (nT() / 2 + zT), gT[UT] = pT(pT({}, MT), {}, {
              isShow: !0
            }))
          }, vT = 0; vT < ZT; vT++) cT(vT);
        return gT
      }(YT, JT, eT, lT, BT, "preserveStartEnd" === cT) : function(TT, UT, mT, WT, zT) {
        for (var MT = (WT || []).slice(), gT = MT.length, nT = UT.start, HT = UT.end, kT = function(UT) {
            var WT, kT = MT[UT],
              lT = function() {
                return void 0 === WT && (WT = mT(kT, UT)), WT
              };
            if (UT === gT - 1) {
              var LT = TT * (kT.coordinate + TT * lT() / 2 - HT);
              MT[UT] = kT = pT(pT({}, kT), {}, {
                tickCoord: LT > 0 ? kT.coordinate - LT * TT : kT.coordinate
              })
            } else MT[UT] = kT = pT(pT({}, kT), {}, {
              tickCoord: kT.coordinate
            });
            jT(TT, kT.tickCoord, lT, nT, HT) && (HT = kT.tickCoord - TT * (lT() / 2 + zT), MT[UT] = pT(pT({}, kT), {}, {
              isShow: !0
            }))
          }, lT = gT - 1; lT >= 0; lT--) kT(lT);
        return MT
      }(YT, JT, eT, lT, BT), iT.filter((function(TT) {
        return TT.isShow
      })))
    }
  },
  6473: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => HT
    });
    var WT = mT(5523),
      zT = mT(6354),
      MT = mT(6447),
      gT = mT(6460),
      nT = mT(6327),
      HT = (0, WT.e)({
        chartName: "BarChart",
        GraphicalChild: zT.c,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: MT.d
        }, {
          axisType: "yAxis",
          AxisComp: gT.d
        }],
        formatAxisMap: nT.f
      })
  },
  5521: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zU
    });
    var WT = mT(5523),
      zT = mT(6438),
      MT = mT(6354),
      gT = mT(6443),
      nT = mT(63),
      HT = mT(6205),
      kT = mT(5485),
      jT = mT.n(kT),
      lT = mT(6288),
      LT = mT.n(lT),
      pT = mT(5337),
      BT = mT.n(pT),
      ZT = mT(5177),
      cT = mT(6056),
      vT = mT(6361),
      fT = mT(5497),
      qT = mT(6067);

    function iT(TT) {
      return iT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, iT(TT)
    }

    function bT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, dT(WT.key), WT)
      }
    }

    function OT(TT, UT, mT) {
      return UT = YT(UT),
        function(TT, UT) {
          if (UT && ("object" === iT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, eT() ? Reflect.construct(UT, mT || [], YT(TT).constructor) : UT.apply(TT, mT))
    }

    function eT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (eT = function() {
        return !!TT
      })()
    }

    function YT(TT) {
      return YT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, YT(TT)
    }

    function JT(TT, UT) {
      return JT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, JT(TT, UT)
    }

    function xT(TT, UT, mT) {
      return (UT = dT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function dT(TT) {
      var UT = function(TT, UT) {
        if ("object" != iT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != iT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == iT(UT) ? UT : UT + ""
    }
    var wT = function(TT) {
      function UT() {
        return function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, UT), OT(this, UT, arguments)
      }
      return function(TT, UT) {
        if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(UT && UT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), UT && JT(TT, UT)
      }(UT, TT), mT = UT, (WT = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && bT(mT.prototype, WT), zT && bT(mT, zT), Object.defineProperty(mT, "prototype", {
        writable: !1
      }), mT;
      var mT, WT, zT
    }(nT.Component);
    xT(wT, "displayName", "ZAxis"), xT(wT, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var tT = mT(6435),
      aT = mT(6302),
      yT = mT(6356),
      XT = mT(5254),
      IT = mT(6218),
      QT = mT(5517),
      sT = mT(6137),
      FT = mT(6373),
      PT = ["option", "isActive"];

    function VT() {
      return VT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, VT.apply(this, arguments)
    }

    function uT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function CT(TT) {
      var UT = TT.option,
        mT = TT.isActive,
        WT = uT(TT, PT);
      return "string" === typeof UT ? nT.createElement(FT.d, VT({
        option: nT.createElement(sT.e, VT({
          type: UT
        }, WT)),
        isActive: mT,
        shapeType: "symbols"
      }, WT)) : nT.createElement(FT.d, VT({
        option: UT,
        isActive: mT,
        shapeType: "symbols"
      }, WT))
    }

    function rT(TT) {
      return rT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, rT(TT)
    }

    function KT() {
      return KT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, KT.apply(this, arguments)
    }

    function ST(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function GT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? ST(Object(mT), !0).forEach((function(UT) {
          AT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : ST(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function NT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, RT(WT.key), WT)
      }
    }

    function ET(TT, UT, mT) {
      return UT = DT(UT),
        function(TT, UT) {
          if (UT && ("object" === rT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, hT() ? Reflect.construct(UT, mT || [], DT(TT).constructor) : UT.apply(TT, mT))
    }

    function hT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (hT = function() {
        return !!TT
      })()
    }

    function DT(TT) {
      return DT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, DT(TT)
    }

    function oT(TT, UT) {
      return oT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, oT(TT, UT)
    }

    function AT(TT, UT, mT) {
      return (UT = RT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function RT(TT) {
      var UT = function(TT, UT) {
        if ("object" != rT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != rT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == rT(UT) ? UT : UT + ""
    }
    var TU = function(TT) {
      function UT() {
        var TT;
        ! function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, UT);
        for (var mT = arguments.length, WT = new Array(mT), zT = 0; zT < mT; zT++) WT[zT] = arguments[zT];
        return AT(TT = ET(this, UT, [].concat(WT)), "state", {
          isAnimationFinished: !1
        }), AT(TT, "handleAnimationEnd", (function() {
          TT.setState({
            isAnimationFinished: !0
          })
        })), AT(TT, "handleAnimationStart", (function() {
          TT.setState({
            isAnimationFinished: !1
          })
        })), AT(TT, "id", (0, XT.E)("recharts-scatter-")), TT
      }
      return function(TT, UT) {
        if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(UT && UT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), UT && oT(TT, UT)
      }(UT, TT), mT = UT, WT = [{
        key: "renderSymbolsStatically",
        value: function(TT) {
          var UT = this,
            mT = this.props,
            WT = mT.shape,
            zT = mT.activeShape,
            MT = mT.activeIndex,
            gT = (0, fT.b)(this.props, !1);
          return TT.map((function(TT, mT) {
            var HT = MT === mT,
              kT = HT ? zT : WT,
              jT = GT(GT({}, gT), TT);
            return nT.createElement(cT.e, KT({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === TT || void 0 === TT ? void 0 : TT.cx, "-").concat(null === TT || void 0 === TT ? void 0 : TT.cy, "-").concat(null === TT || void 0 === TT ? void 0 : TT.size, "-").concat(mT)
            }, (0, QT.m)(UT.props, TT, mT), {
              role: "img"
            }), nT.createElement(CT, KT({
              option: kT,
              isActive: HT,
              key: "symbol-".concat(mT)
            }, jT)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var TT = this,
            UT = this.props,
            mT = UT.points,
            WT = UT.isAnimationActive,
            zT = UT.animationBegin,
            MT = UT.animationDuration,
            gT = UT.animationEasing,
            kT = UT.animationId,
            jT = this.state.prevPoints;
          return nT.createElement(HT.d, {
            np: zT,
            duration: MT,
            isActive: WT,
            easing: gT,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(kT),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(UT) {
            var WT = UT.t,
              zT = mT.map((function(TT, UT) {
                var mT = jT && jT[UT];
                if (mT) {
                  var zT = (0, XT.q)(mT.cx, TT.cx),
                    MT = (0, XT.q)(mT.cy, TT.cy),
                    gT = (0, XT.q)(mT.size, TT.size);
                  return GT(GT({}, TT), {}, {
                    cx: zT(WT),
                    cy: MT(WT),
                    size: gT(WT)
                  })
                }
                var nT = (0, XT.q)(0, TT.size);
                return GT(GT({}, TT), {}, {
                  size: nT(WT)
                })
              }));
            return nT.createElement(cT.e, null, TT.renderSymbolsStatically(zT))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var TT = this.props,
            UT = TT.points,
            mT = TT.isAnimationActive,
            WT = this.state.prevPoints;
          return !(mT && UT && UT.length) || WT && LT()(WT, UT) ? this.renderSymbolsStatically(UT) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var TT = this.props,
            UT = TT.points,
            mT = TT.xAxis,
            WT = TT.yAxis,
            zT = TT.children,
            MT = (0, fT.d)(zT, aT.c);
          return MT ? MT.map((function(TT, zT) {
            var MT = TT.props,
              gT = MT.direction,
              HT = MT.dataKey;
            return nT.cloneElement(TT, {
              key: "".concat(gT, "-").concat(HT, "-").concat(UT[zT]),
              data: UT,
              xAxis: mT,
              yAxis: WT,
              layout: "x" === gT ? "vertical" : "horizontal",
              dataPointFormatter: function(TT, UT) {
                return {
                  x: TT.cx,
                  y: TT.cy,
                  value: "x" === gT ? +TT.node.x : +TT.node.y,
                  errorVal: (0, IT._)(TT, UT)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var TT, UT, mT = this.props,
            WT = mT.points,
            zT = mT.line,
            MT = mT.lineType,
            gT = mT.lineJointType,
            HT = (0, fT.b)(this.props, !1),
            kT = (0, fT.b)(zT, !1);
          if ("joint" === MT) TT = WT.map((function(TT) {
            return {
              x: TT.cx,
              y: TT.cy
            }
          }));
          else if ("fitting" === MT) {
            var jT = (0, XT.j)(WT),
              lT = jT.xmin,
              LT = jT.xmax,
              pT = jT.a,
              ZT = jT.b,
              vT = function(TT) {
                return pT * TT + ZT
              };
            TT = [{
              x: lT,
              y: vT(lT)
            }, {
              x: LT,
              y: vT(LT)
            }]
          }
          var qT = GT(GT(GT({}, HT), {}, {
            fill: "none",
            stroke: HT && HT.fill
          }, kT), {}, {
            points: TT
          });
          return UT = nT.isValidElement(zT) ? nT.cloneElement(zT, qT) : BT()(zT) ? zT(qT) : nT.createElement(tT.d, KT({}, qT, {
            type: gT
          })), nT.createElement(cT.e, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, UT)
        }
      }, {
        key: "render",
        value: function() {
          var TT = this.props,
            UT = TT.hide,
            mT = TT.points,
            WT = TT.line,
            zT = TT.className,
            MT = TT.xAxis,
            gT = TT.yAxis,
            HT = TT.left,
            kT = TT.top,
            lT = TT.width,
            LT = TT.height,
            pT = TT.id,
            BT = TT.isAnimationActive;
          if (UT || !mT || !mT.length) return null;
          var fT = this.state.isAnimationFinished,
            qT = (0, ZT.c)("recharts-scatter", zT),
            iT = MT && MT.allowDataOverflow,
            bT = gT && gT.allowDataOverflow,
            OT = iT || bT,
            eT = jT()(pT) ? this.id : pT;
          return nT.createElement(cT.e, {
            className: qT,
            clipPath: OT ? "url(#clipPath-".concat(eT, ")") : null
          }, iT || bT ? nT.createElement("defs", null, nT.createElement("clipPath", {
            id: "clipPath-".concat(eT)
          }, nT.createElement("rect", {
            x: iT ? HT : HT - lT / 2,
            y: bT ? kT : kT - LT / 2,
            width: iT ? lT : 2 * lT,
            height: bT ? LT : 2 * LT
          }))) : null, WT && this.renderLine(), this.renderErrorBar(), nT.createElement(cT.e, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!BT || fT) && vT.b.renderCallByParent(this.props, mT))
        }
      }], zT = [{
        key: "getDerivedStateFromProps",
        value: function(TT, UT) {
          return TT.animationId !== UT.prevAnimationId ? {
            prevAnimationId: TT.animationId,
            curPoints: TT.points,
            prevPoints: UT.curPoints
          } : TT.points !== UT.curPoints ? {
            curPoints: TT.points
          } : null
        }
      }], WT && NT(mT.prototype, WT), zT && NT(mT, zT), Object.defineProperty(mT, "prototype", {
        writable: !1
      }), mT;
      var mT, WT, zT
    }(nT.PureComponent);
    AT(TU, "displayName", "Scatter"), AT(TU, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !qT.c.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), AT(TU, "getComposedData", (function(TT) {
      var UT = TT.xAxis,
        mT = TT.yAxis,
        WT = TT.zAxis,
        zT = TT.item,
        MT = TT.displayedData,
        gT = TT.xAxisTicks,
        nT = TT.yAxisTicks,
        HT = TT.offset,
        kT = zT.props.tooltipType,
        lT = (0, fT.d)(zT.props.children, yT.e),
        LT = jT()(UT.dataKey) ? zT.props.dataKey : UT.dataKey,
        pT = jT()(mT.dataKey) ? zT.props.dataKey : mT.dataKey,
        BT = WT && WT.dataKey,
        ZT = WT ? WT.range : wT.defaultProps.range,
        cT = ZT && ZT[0],
        vT = UT.scale.bandwidth ? UT.scale.bandwidth() : 0,
        qT = mT.scale.bandwidth ? mT.scale.bandwidth() : 0,
        iT = MT.map((function(TT, MT) {
          var HT = (0, IT._)(TT, LT),
            ZT = (0, IT._)(TT, pT),
            fT = !jT()(BT) && (0, IT._)(TT, BT) || "-",
            iT = [{
              name: jT()(UT.dataKey) ? zT.props.name : UT.name || UT.dataKey,
              unit: UT.unit || "",
              value: HT,
              payload: TT,
              dataKey: LT,
              type: kT
            }, {
              name: jT()(mT.dataKey) ? zT.props.name : mT.name || mT.dataKey,
              unit: mT.unit || "",
              value: ZT,
              payload: TT,
              dataKey: pT,
              type: kT
            }];
          "-" !== fT && iT.push({
            name: WT.name || WT.dataKey,
            unit: WT.unit || "",
            value: fT,
            payload: TT,
            dataKey: BT,
            type: kT
          });
          var bT = (0, IT.x)({
              axis: UT,
              ticks: gT,
              bandSize: vT,
              entry: TT,
              index: MT,
              dataKey: LT
            }),
            OT = (0, IT.x)({
              axis: mT,
              ticks: nT,
              bandSize: qT,
              entry: TT,
              index: MT,
              dataKey: pT
            }),
            eT = "-" !== fT ? WT.scale(fT) : cT,
            YT = Math.sqrt(Math.max(eT, 0) / Math.PI);
          return GT(GT({}, TT), {}, {
            cx: bT,
            cy: OT,
            x: bT - YT,
            y: OT - YT,
            xAxis: UT,
            yAxis: mT,
            zAxis: WT,
            width: 2 * YT,
            height: 2 * YT,
            size: eT,
            node: {
              x: HT,
              y: ZT,
              z: fT
            },
            tooltipPayload: iT,
            tooltipPosition: {
              x: bT,
              y: OT
            },
            payload: TT
          }, lT && lT[MT] && lT[MT].props)
        }));
      return GT({
        points: iT
      }, HT)
    }));
    var UU = mT(6447),
      mU = mT(6460),
      WU = mT(6327),
      zU = (0, WT.e)({
        chartName: "ComposedChart",
        GraphicalChild: [gT.e, zT.d, MT.c, TU],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: UU.d
        }, {
          axisType: "yAxis",
          AxisComp: mU.d
        }, {
          axisType: "zAxis",
          AxisComp: wT
        }],
        formatAxisMap: WU.f
      })
  },
  5523: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => um
    });
    var WT = mT(63),
      zT = mT(5485),
      MT = mT.n(zT),
      gT = mT(5337),
      nT = mT.n(gT),
      HT = mT(5531),
      kT = mT.n(HT),
      jT = mT(5275),
      lT = mT.n(jT),
      LT = mT(5581),
      pT = mT.n(LT),
      BT = mT(5186),
      ZT = mT.n(BT),
      cT = mT(5177),
      vT = mT(6042),
      fT = mT(6050),
      qT = mT(6056),
      iT = mT(6065),
      bT = mT(6134),
      OT = mT(6197),
      eT = mT(6200),
      YT = mT(5497),
      JT = mT(6226),
      xT = mT(6210),
      dT = mT(6218),
      wT = mT(5254);

    function tT(TT) {
      return tT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, tT(TT)
    }

    function aT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function yT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? aT(Object(mT), !0).forEach((function(UT) {
          XT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : aT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function XT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != tT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != tT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == tT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }
    var IT = ["Webkit", "Moz", "O", "ms"];

    function QT(TT) {
      return QT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, QT(TT)
    }

    function sT() {
      return sT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, sT.apply(this, arguments)
    }

    function FT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function PT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? FT(Object(mT), !0).forEach((function(UT) {
          ST(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : FT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function VT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, GT(WT.key), WT)
      }
    }

    function uT(TT, UT, mT) {
      return UT = rT(UT),
        function(TT, UT) {
          if (UT && ("object" === QT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, CT() ? Reflect.construct(UT, mT || [], rT(TT).constructor) : UT.apply(TT, mT))
    }

    function CT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (CT = function() {
        return !!TT
      })()
    }

    function rT(TT) {
      return rT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, rT(TT)
    }

    function KT(TT, UT) {
      return KT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, KT(TT, UT)
    }

    function ST(TT, UT, mT) {
      return (UT = GT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function GT(TT) {
      var UT = function(TT, UT) {
        if ("object" != QT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != QT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == QT(UT) ? UT : UT + ""
    }
    var NT = function(TT) {
        return TT.changedTouches && !!TT.changedTouches.length
      },
      ET = function(TT) {
        function UT(TT) {
          var mT;
          return function(TT, UT) {
            if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
          }(this, UT), ST(mT = uT(this, UT, [TT]), "handleDrag", (function(TT) {
            mT.leaveTimer && (clearTimeout(mT.leaveTimer), mT.leaveTimer = null), mT.state.isTravellerMoving ? mT.handleTravellerMove(TT) : mT.state.isSlideMoving && mT.handleSlideDrag(TT)
          })), ST(mT, "handleTouchMove", (function(TT) {
            null != TT.changedTouches && TT.changedTouches.length > 0 && mT.handleDrag(TT.changedTouches[0])
          })), ST(mT, "handleDragEnd", (function() {
            mT.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var TT = mT.props,
                UT = TT.endIndex,
                WT = TT.onDragEnd,
                zT = TT.startIndex;
              null === WT || void 0 === WT || WT({
                endIndex: UT,
                startIndex: zT
              })
            })), mT.detachDragEndListener()
          })), ST(mT, "handleLeaveWrapper", (function() {
            (mT.state.isTravellerMoving || mT.state.isSlideMoving) && (mT.leaveTimer = window.setTimeout(mT.handleDragEnd, mT.props.leaveTimeOut))
          })), ST(mT, "handleEnterSlideOrTraveller", (function() {
            mT.setState({
              isTextActive: !0
            })
          })), ST(mT, "handleLeaveSlideOrTraveller", (function() {
            mT.setState({
              isTextActive: !1
            })
          })), ST(mT, "handleSlideDragStart", (function(TT) {
            var UT = NT(TT) ? TT.changedTouches[0] : TT;
            mT.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: UT.pageX
            }), mT.attachDragEndListener()
          })), mT.travellerDragStartHandlers = {
            startX: mT.handleTravellerDragStart.bind(mT, "startX"),
            endX: mT.handleTravellerDragStart.bind(mT, "endX")
          }, mT.state = {}, mT
        }
        return function(TT, UT) {
          if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
          TT.prototype = Object.create(UT && UT.prototype, {
            constructor: {
              value: TT,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(TT, "prototype", {
            writable: !1
          }), UT && KT(TT, UT)
        }(UT, TT), mT = UT, zT = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(TT) {
            var mT = TT.startX,
              WT = TT.endX,
              zT = this.state.scaleValues,
              MT = this.props,
              gT = MT.gap,
              nT = MT.data.length - 1,
              HT = Math.min(mT, WT),
              kT = Math.max(mT, WT),
              jT = UT.getIndexInRange(zT, HT),
              lT = UT.getIndexInRange(zT, kT);
            return {
              startIndex: jT - jT % gT,
              endIndex: lT === nT ? nT : lT - lT % gT
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(TT) {
            var UT = this.props,
              mT = UT.data,
              WT = UT.tickFormatter,
              zT = UT.dataKey,
              MT = (0, dT._)(mT[TT], zT, TT);
            return nT()(WT) ? WT(MT, TT) : MT
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
          value: function(TT) {
            var UT = this.state,
              mT = UT.slideMoveStartX,
              WT = UT.startX,
              zT = UT.endX,
              MT = this.props,
              gT = MT.x,
              nT = MT.width,
              HT = MT.travellerWidth,
              kT = MT.startIndex,
              jT = MT.endIndex,
              lT = MT.onChange,
              LT = TT.pageX - mT;
            LT > 0 ? LT = Math.min(LT, gT + nT - HT - zT, gT + nT - HT - WT) : LT < 0 && (LT = Math.max(LT, gT - WT, gT - zT));
            var pT = this.getIndex({
              startX: WT + LT,
              endX: zT + LT
            });
            pT.startIndex === kT && pT.endIndex === jT || !lT || lT(pT), this.setState({
              startX: WT + LT,
              endX: zT + LT,
              slideMoveStartX: TT.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(TT, UT) {
            var mT = NT(UT) ? UT.changedTouches[0] : UT;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: TT,
              brushMoveStartX: mT.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(TT) {
            var UT = this.state,
              mT = UT.brushMoveStartX,
              WT = UT.movingTravellerId,
              zT = UT.endX,
              MT = UT.startX,
              gT = this.state[WT],
              nT = this.props,
              HT = nT.x,
              kT = nT.width,
              jT = nT.travellerWidth,
              lT = nT.onChange,
              LT = nT.gap,
              pT = nT.data,
              BT = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              ZT = TT.pageX - mT;
            ZT > 0 ? ZT = Math.min(ZT, HT + kT - jT - gT) : ZT < 0 && (ZT = Math.max(ZT, HT - gT)), BT[WT] = gT + ZT;
            var cT = this.getIndex(BT),
              vT = cT.startIndex,
              fT = cT.endIndex;
            this.setState(ST(ST({}, WT, gT + ZT), "brushMoveStartX", TT.pageX), (function() {
              lT && function() {
                var TT = pT.length - 1;
                return "startX" === WT && (zT > MT ? vT % LT === 0 : fT % LT === 0) || zT < MT && fT === TT || "endX" === WT && (zT > MT ? fT % LT === 0 : vT % LT === 0) || zT > MT && fT === TT
              }() && lT(cT)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(TT, UT) {
            var mT = this,
              WT = this.state,
              zT = WT.scaleValues,
              MT = WT.startX,
              gT = WT.endX,
              nT = this.state[UT],
              HT = zT.indexOf(nT);
            if (-1 !== HT) {
              var kT = HT + TT;
              if (!(-1 === kT || kT >= zT.length)) {
                var jT = zT[kT];
                "startX" === UT && jT >= gT || "endX" === UT && jT <= MT || this.setState(ST({}, UT, jT), (function() {
                  mT.props.onChange(mT.getIndex({
                    startX: mT.state.startX,
                    endX: mT.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var TT = this.props,
              UT = TT.x,
              mT = TT.y,
              zT = TT.width,
              MT = TT.height,
              gT = TT.fill,
              nT = TT.stroke;
            return WT.createElement("rect", {
              stroke: nT,
              fill: gT,
              x: UT,
              y: mT,
              width: zT,
              height: MT
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var TT = this.props,
              UT = TT.x,
              mT = TT.y,
              zT = TT.width,
              MT = TT.height,
              gT = TT.data,
              nT = TT.children,
              HT = TT.padding,
              kT = WT.Children.only(nT);
            return kT ? WT.cloneElement(kT, {
              x: UT,
              y: mT,
              width: zT,
              height: MT,
              margin: HT,
              compact: !0,
              data: gT
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(TT, mT) {
            var zT, MT, gT = this,
              nT = this.props,
              HT = nT.y,
              kT = nT.travellerWidth,
              jT = nT.height,
              lT = nT.traveller,
              LT = nT.ariaLabel,
              pT = nT.data,
              BT = nT.startIndex,
              ZT = nT.endIndex,
              cT = Math.max(TT, this.props.x),
              vT = PT(PT({}, (0, YT.b)(this.props, !1)), {}, {
                x: cT,
                y: HT,
                width: kT,
                height: jT
              }),
              fT = LT || "Min value: ".concat(null === (zT = pT[BT]) || void 0 === zT ? void 0 : zT.name, ", Max value: ").concat(null === (MT = pT[ZT]) || void 0 === MT ? void 0 : MT.name);
            return WT.createElement(qT.e, {
              tabIndex: 0,
              role: "slider",
              "aria-label": fT,
              "aria-valuenow": TT,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[mT],
              onTouchStart: this.travellerDragStartHandlers[mT],
              onKeyDown: function(TT) {
                ["ArrowLeft", "ArrowRight"].includes(TT.key) && (TT.preventDefault(), TT.stopPropagation(), gT.handleTravellerMoveKeyboard("ArrowRight" === TT.key ? 1 : -1, mT))
              },
              onFocus: function() {
                gT.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                gT.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, UT.renderTraveller(lT, vT))
          }
        }, {
          key: "renderSlide",
          value: function(TT, UT) {
            var mT = this.props,
              zT = mT.y,
              MT = mT.height,
              gT = mT.stroke,
              nT = mT.travellerWidth,
              HT = Math.min(TT, UT) + nT,
              kT = Math.max(Math.abs(UT - TT) - nT, 0);
            return WT.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: gT,
              fillOpacity: .2,
              x: HT,
              y: zT,
              width: kT,
              height: MT
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var TT = this.props,
              UT = TT.startIndex,
              mT = TT.endIndex,
              zT = TT.y,
              MT = TT.height,
              gT = TT.travellerWidth,
              nT = TT.stroke,
              HT = this.state,
              kT = HT.startX,
              jT = HT.endX,
              lT = {
                pointerEvents: "none",
                fill: nT
              };
            return WT.createElement(qT.e, {
              className: "recharts-brush-texts"
            }, WT.createElement(xT.b, sT({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(kT, jT) - 5,
              y: zT + MT / 2
            }, lT), this.getTextOfTick(UT)), WT.createElement(xT.b, sT({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(kT, jT) + gT + 5,
              y: zT + MT / 2
            }, lT), this.getTextOfTick(mT)))
          }
        }, {
          key: "render",
          value: function() {
            var TT = this.props,
              UT = TT.data,
              mT = TT.className,
              zT = TT.children,
              MT = TT.x,
              gT = TT.y,
              nT = TT.width,
              HT = TT.height,
              kT = TT.alwaysShowText,
              jT = this.state,
              lT = jT.startX,
              LT = jT.endX,
              pT = jT.isTextActive,
              BT = jT.isSlideMoving,
              ZT = jT.isTravellerMoving,
              vT = jT.isTravellerFocused;
            if (!UT || !UT.length || !(0, wT.x)(MT) || !(0, wT.x)(gT) || !(0, wT.x)(nT) || !(0, wT.x)(HT) || nT <= 0 || HT <= 0) return null;
            var fT = (0, cT.c)("recharts-brush", mT),
              iT = 1 === WT.Children.count(zT),
              bT = function(TT, UT) {
                if (!TT) return null;
                var mT = TT.replace(/(\w)/, (function(TT) {
                    return TT.toUpperCase()
                  })),
                  WT = IT.reduce((function(TT, WT) {
                    return yT(yT({}, TT), {}, XT({}, WT + mT, UT))
                  }), {});
                return WT[TT] = UT, WT
              }("userSelect", "none");
            return WT.createElement(qT.e, {
              className: fT,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: bT
            }, this.renderBackground(), iT && this.renderPanorama(), this.renderSlide(lT, LT), this.renderTravellerLayer(lT, "startX"), this.renderTravellerLayer(LT, "endX"), (pT || BT || ZT || vT || kT) && this.renderText())
          }
        }], MT = [{
          key: "renderDefaultTraveller",
          value: function(TT) {
            var UT = TT.x,
              mT = TT.y,
              zT = TT.width,
              MT = TT.height,
              gT = TT.stroke,
              nT = Math.floor(mT + MT / 2) - 1;
            return WT.createElement(WT.Fragment, null, WT.createElement("rect", {
              x: UT,
              y: mT,
              width: zT,
              height: MT,
              fill: gT,
              stroke: "none"
            }), WT.createElement("line", {
              x1: UT + 1,
              y1: nT,
              x2: UT + zT - 1,
              y2: nT,
              fill: "none",
              stroke: "#fff"
            }), WT.createElement("line", {
              x1: UT + 1,
              y1: nT + 2,
              x2: UT + zT - 1,
              y2: nT + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(TT, mT) {
            return WT.isValidElement(TT) ? WT.cloneElement(TT, mT) : nT()(TT) ? TT(mT) : UT.renderDefaultTraveller(mT)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(TT, UT) {
            var mT = TT.data,
              WT = TT.width,
              zT = TT.x,
              MT = TT.travellerWidth,
              gT = TT.updateId,
              nT = TT.startIndex,
              HT = TT.endIndex;
            if (mT !== UT.prevData || gT !== UT.prevUpdateId) return PT({
              prevData: mT,
              prevTravellerWidth: MT,
              prevUpdateId: gT,
              prevX: zT,
              prevWidth: WT
            }, mT && mT.length ? function(TT) {
              var UT = TT.data,
                mT = TT.startIndex,
                WT = TT.endIndex,
                zT = TT.x,
                MT = TT.width,
                gT = TT.travellerWidth;
              if (!UT || !UT.length) return {};
              var nT = UT.length,
                HT = (0, JT.f)().domain(kT()(0, nT)).range([zT, zT + MT - gT]),
                jT = HT.domain().map((function(TT) {
                  return HT(TT)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: HT(mT),
                endX: HT(WT),
                scale: HT,
                scaleValues: jT
              }
            }({
              data: mT,
              width: WT,
              x: zT,
              travellerWidth: MT,
              startIndex: nT,
              endIndex: HT
            }) : {
              scale: null,
              scaleValues: null
            });
            if (UT.scale && (WT !== UT.prevWidth || zT !== UT.prevX || MT !== UT.prevTravellerWidth)) {
              UT.scale.range([zT, zT + WT - MT]);
              var jT = UT.scale.domain().map((function(TT) {
                return UT.scale(TT)
              }));
              return {
                prevData: mT,
                prevTravellerWidth: MT,
                prevUpdateId: gT,
                prevX: zT,
                prevWidth: WT,
                startX: UT.scale(TT.startIndex),
                endX: UT.scale(TT.endIndex),
                scaleValues: jT
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(TT, UT) {
            for (var mT = 0, WT = TT.length - 1; WT - mT > 1;) {
              var zT = Math.floor((mT + WT) / 2);
              TT[zT] > UT ? WT = zT : mT = zT
            }
            return UT >= TT[WT] ? WT : mT
          }
        }], zT && VT(mT.prototype, zT), MT && VT(mT, MT), Object.defineProperty(mT, "prototype", {
          writable: !1
        }), mT;
        var mT, zT, MT
      }(WT.PureComponent);
    ST(ET, "displayName", "Brush"), ST(ET, "defaultProps", {
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
    var hT = mT(6212),
      DT = mT(6308),
      oT = mT(6320),
      AT = mT(6324),
      RT = mT(6327),
      TU = mT(5491);

    function UU() {
      return UU = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, UU.apply(this, arguments)
    }

    function mU(TT) {
      return mU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, mU(TT)
    }

    function WU(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function zU(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? WU(Object(mT), !0).forEach((function(UT) {
          jU(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : WU(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function MU(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, lU(WT.key), WT)
      }
    }

    function gU(TT, UT, mT) {
      return UT = HU(UT),
        function(TT, UT) {
          if (UT && ("object" === mU(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, nU() ? Reflect.construct(UT, mT || [], HU(TT).constructor) : UT.apply(TT, mT))
    }

    function nU() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (nU = function() {
        return !!TT
      })()
    }

    function HU(TT) {
      return HU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, HU(TT)
    }

    function kU(TT, UT) {
      return kU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, kU(TT, UT)
    }

    function jU(TT, UT, mT) {
      return (UT = lU(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function lU(TT) {
      var UT = function(TT, UT) {
        if ("object" != mU(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != mU(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == mU(UT) ? UT : UT + ""
    }
    var LU = function(TT) {
      function UT() {
        return function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, UT), gU(this, UT, arguments)
      }
      return function(TT, UT) {
        if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(UT && UT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), UT && kU(TT, UT)
      }(UT, TT), mT = UT, (zT = [{
        key: "render",
        value: function() {
          var TT = this.props,
            mT = TT.x,
            zT = TT.y,
            MT = TT.r,
            gT = TT.alwaysShow,
            nT = TT.clipPathId,
            HT = (0, wT.w)(mT),
            kT = (0, wT.w)(zT);
          if ((0, TU.e)(void 0 === gT, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !HT || !kT) return null;
          var jT = function(TT) {
            var UT = TT.x,
              mT = TT.y,
              WT = TT.xAxis,
              zT = TT.yAxis,
              MT = (0, RT.e)({
                x: WT.scale,
                y: zT.scale
              }),
              gT = MT.apply({
                x: UT,
                y: mT
              }, {
                bandAware: !0
              });
            return (0, AT.e)(TT, "discard") && !MT.isInRange(gT) ? null : gT
          }(this.props);
          if (!jT) return null;
          var lT = jT.x,
            LT = jT.y,
            pT = this.props,
            BT = pT.shape,
            ZT = pT.className,
            vT = zU(zU({
              clipPath: (0, AT.e)(this.props, "hidden") ? "url(#".concat(nT, ")") : void 0
            }, (0, YT.b)(this.props, !0)), {}, {
              cx: lT,
              cy: LT
            });
          return WT.createElement(qT.e, {
            className: (0, cT.c)("recharts-reference-dot", ZT)
          }, UT.renderDot(BT, vT), oT.d.renderCallByParent(this.props, {
            x: lT - MT,
            y: LT - MT,
            width: 2 * MT,
            height: 2 * MT
          }))
        }
      }]) && MU(mT.prototype, zT), MT && MU(mT, MT), Object.defineProperty(mT, "prototype", {
        writable: !1
      }), mT;
      var mT, zT, MT
    }(WT.Component);
    jU(LU, "displayName", "ReferenceDot"), jU(LU, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), jU(LU, "renderDot", (function(TT, UT) {
      return WT.isValidElement(TT) ? WT.cloneElement(TT, UT) : nT()(TT) ? TT(UT) : WT.createElement(OT.d, UU({}, UT, {
        cx: UT.cx,
        cy: UT.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var pU = mT(6397);

    function BU() {
      return BU = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, BU.apply(this, arguments)
    }

    function ZU(TT) {
      return ZU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, ZU(TT)
    }

    function cU(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function vU(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? cU(Object(mT), !0).forEach((function(UT) {
          eU(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : cU(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function fU(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, YU(WT.key), WT)
      }
    }

    function qU(TT, UT, mT) {
      return UT = bU(UT),
        function(TT, UT) {
          if (UT && ("object" === ZU(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, iU() ? Reflect.construct(UT, mT || [], bU(TT).constructor) : UT.apply(TT, mT))
    }

    function iU() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (iU = function() {
        return !!TT
      })()
    }

    function bU(TT) {
      return bU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, bU(TT)
    }

    function OU(TT, UT) {
      return OU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, OU(TT, UT)
    }

    function eU(TT, UT, mT) {
      return (UT = YU(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function YU(TT) {
      var UT = function(TT, UT) {
        if ("object" != ZU(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != ZU(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == ZU(UT) ? UT : UT + ""
    }
    var JU = function(TT) {
      function UT() {
        return function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, UT), qU(this, UT, arguments)
      }
      return function(TT, UT) {
        if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(UT && UT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), UT && OU(TT, UT)
      }(UT, TT), mT = UT, (zT = [{
        key: "render",
        value: function() {
          var TT = this.props,
            mT = TT.x1,
            zT = TT.x2,
            MT = TT.y1,
            gT = TT.y2,
            nT = TT.className,
            HT = TT.alwaysShow,
            kT = TT.clipPathId;
          (0, TU.e)(void 0 === HT, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var jT = (0, wT.w)(mT),
            lT = (0, wT.w)(zT),
            LT = (0, wT.w)(MT),
            pT = (0, wT.w)(gT),
            BT = this.props.shape;
          if (!jT && !lT && !LT && !pT && !BT) return null;
          var ZT = function(TT, UT, mT, WT, zT) {
            var MT = zT.x1,
              gT = zT.x2,
              nT = zT.y1,
              HT = zT.y2,
              kT = zT.xAxis,
              jT = zT.yAxis;
            if (!kT || !jT) return null;
            var lT = (0, RT.e)({
                x: kT.scale,
                y: jT.scale
              }),
              LT = {
                x: TT ? lT.x.apply(MT, {
                  position: "start"
                }) : lT.x.rangeMin,
                y: mT ? lT.y.apply(nT, {
                  position: "start"
                }) : lT.y.rangeMin
              },
              pT = {
                x: UT ? lT.x.apply(gT, {
                  position: "end"
                }) : lT.x.rangeMax,
                y: WT ? lT.y.apply(HT, {
                  position: "end"
                }) : lT.y.rangeMax
              };
            return !(0, AT.e)(zT, "discard") || lT.isInRange(LT) && lT.isInRange(pT) ? (0, RT.l)(LT, pT) : null
          }(jT, lT, LT, pT, this.props);
          if (!ZT && !BT) return null;
          var vT = (0, AT.e)(this.props, "hidden") ? "url(#".concat(kT, ")") : void 0;
          return WT.createElement(qT.e, {
            className: (0, cT.c)("recharts-reference-area", nT)
          }, UT.renderRect(BT, vU(vU({
            clipPath: vT
          }, (0, YT.b)(this.props, !0)), ZT)), oT.d.renderCallByParent(this.props, ZT))
        }
      }]) && fU(mT.prototype, zT), MT && fU(mT, MT), Object.defineProperty(mT, "prototype", {
        writable: !1
      }), mT;
      var mT, zT, MT
    }(WT.Component);

    function xU(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return dU(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return dU(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return dU(TT, UT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function dU(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }
    eU(JU, "displayName", "ReferenceArea"), eU(JU, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), eU(JU, "renderRect", (function(TT, UT) {
      return WT.isValidElement(TT) ? WT.cloneElement(TT, UT) : nT()(TT) ? TT(UT) : WT.createElement(eT.d, BU({}, UT, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var wU = function(TT, UT, mT, WT, zT) {
        var MT = (0, YT.d)(TT, pU.c),
          gT = (0, YT.d)(TT, LU),
          nT = [].concat(xU(MT), xU(gT)),
          HT = (0, YT.d)(TT, JU),
          kT = "".concat(WT, "Id"),
          jT = WT[0],
          lT = UT;
        if (nT.length && (lT = nT.reduce((function(TT, UT) {
            if (UT.props[kT] === mT && (0, AT.e)(UT.props, "extendDomain") && (0, wT.x)(UT.props[jT])) {
              var WT = UT.props[jT];
              return [Math.min(TT[0], WT), Math.max(TT[1], WT)]
            }
            return TT
          }), lT)), HT.length) {
          var LT = "".concat(jT, "1"),
            pT = "".concat(jT, "2");
          lT = HT.reduce((function(TT, UT) {
            if (UT.props[kT] === mT && (0, AT.e)(UT.props, "extendDomain") && (0, wT.x)(UT.props[LT]) && (0, wT.x)(UT.props[pT])) {
              var WT = UT.props[LT],
                zT = UT.props[pT];
              return [Math.min(TT[0], WT, zT), Math.max(TT[1], WT, zT)]
            }
            return TT
          }), lT)
        }
        return zT && zT.length && (lT = zT.reduce((function(TT, UT) {
          return (0, wT.x)(UT) ? [Math.min(TT[0], UT), Math.max(TT[1], UT)] : TT
        }), lT)), lT
      },
      tU = mT(6322),
      aU = mT(5514),
      yU = mT(37),
      XU = new(mT.n(yU)()),
      IU = "recharts.syncMouseEvents",
      QU = mT(5517);

    function sU(TT) {
      return sU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, sU(TT)
    }

    function FU(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, VU(WT.key), WT)
      }
    }

    function PU(TT, UT, mT) {
      return (UT = VU(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function VU(TT) {
      var UT = function(TT, UT) {
        if ("object" != sU(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != sU(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == sU(UT) ? UT : UT + ""
    }
    var uU = function() {
      return TT = function TT() {
        ! function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, TT), PU(this, "activeIndex", 0), PU(this, "coordinateList", []), PU(this, "layout", "horizontal")
      }, (UT = [{
        key: "setDetails",
        value: function(TT) {
          var UT, mT = TT.coordinateList,
            WT = void 0 === mT ? null : mT,
            zT = TT.container,
            MT = void 0 === zT ? null : zT,
            gT = TT.layout,
            nT = void 0 === gT ? null : gT,
            HT = TT.offset,
            kT = void 0 === HT ? null : HT,
            jT = TT.mouseHandlerCallback,
            lT = void 0 === jT ? null : jT;
          this.coordinateList = null !== (UT = null !== WT && void 0 !== WT ? WT : this.coordinateList) && void 0 !== UT ? UT : [], this.container = null !== MT && void 0 !== MT ? MT : this.container, this.layout = null !== nT && void 0 !== nT ? nT : this.layout, this.offset = null !== kT && void 0 !== kT ? kT : this.offset, this.mouseHandlerCallback = null !== lT && void 0 !== lT ? lT : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(TT) {
          if (0 !== this.coordinateList.length) switch (TT.key) {
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
        value: function(TT) {
          this.activeIndex = TT
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var TT, UT;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var mT = this.container.getBoundingClientRect(),
              WT = mT.x,
              zT = mT.y,
              MT = mT.height,
              gT = this.coordinateList[this.activeIndex].coordinate,
              nT = (null === (TT = window) || void 0 === TT ? void 0 : TT.scrollX) || 0,
              HT = (null === (UT = window) || void 0 === UT ? void 0 : UT.scrollY) || 0,
              kT = WT + gT + nT,
              jT = zT + this.offset.top + MT / 2 + HT;
            this.mouseHandlerCallback({
              pageX: kT,
              pageY: jT
            })
          }
        }
      }]) && FU(TT.prototype, UT), mT && FU(TT, mT), Object.defineProperty(TT, "prototype", {
        writable: !1
      }), TT;
      var TT, UT, mT
    }();
    var CU = mT(6373),
      rU = mT(6435);

    function KU(TT) {
      return KU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, KU(TT)
    }
    var SU = ["x", "y", "top", "left", "width", "height", "className"];

    function GU() {
      return GU = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, GU.apply(this, arguments)
    }

    function NU(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function EU(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != KU(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != KU(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == KU(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function hU(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }
    var DU = function(TT, UT, mT, WT, zT, MT) {
        return "M".concat(TT, ",").concat(zT, "v").concat(WT, "M").concat(MT, ",").concat(UT, "h").concat(mT)
      },
      oU = function(TT) {
        var UT = TT.x,
          mT = void 0 === UT ? 0 : UT,
          zT = TT.y,
          MT = void 0 === zT ? 0 : zT,
          gT = TT.top,
          nT = void 0 === gT ? 0 : gT,
          HT = TT.left,
          kT = void 0 === HT ? 0 : HT,
          jT = TT.width,
          lT = void 0 === jT ? 0 : jT,
          LT = TT.height,
          pT = void 0 === LT ? 0 : LT,
          BT = TT.className,
          ZT = function(TT) {
            for (var UT = 1; UT < arguments.length; UT++) {
              var mT = null != arguments[UT] ? arguments[UT] : {};
              UT % 2 ? NU(Object(mT), !0).forEach((function(UT) {
                EU(TT, UT, mT[UT])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : NU(Object(mT)).forEach((function(UT) {
                Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
              }))
            }
            return TT
          }({
            x: mT,
            y: MT,
            top: nT,
            left: kT,
            width: lT,
            height: pT
          }, hU(TT, SU));
        return (0, wT.x)(mT) && (0, wT.x)(MT) && (0, wT.x)(lT) && (0, wT.x)(pT) && (0, wT.x)(nT) && (0, wT.x)(kT) ? WT.createElement("path", GU({}, (0, YT.b)(ZT, !0), {
          className: (0, cT.c)("recharts-cross", BT),
          d: DU(mT, MT, lT, pT, nT, kT)
        })) : null
      };

    function AU(TT) {
      var UT = TT.cx,
        mT = TT.cy,
        WT = TT.radius,
        zT = TT.startAngle,
        MT = TT.endAngle;
      return {
        points: [(0, tU.i)(UT, mT, WT, zT), (0, tU.i)(UT, mT, WT, MT)],
        cx: UT,
        cy: mT,
        radius: WT,
        startAngle: zT,
        endAngle: MT
      }
    }
    var RU = mT(6395);

    function Tm(TT, UT, mT) {
      var WT, zT, MT, gT;
      if ("horizontal" === TT) MT = WT = UT.x, zT = mT.top, gT = mT.top + mT.height;
      else if ("vertical" === TT) gT = zT = UT.y, WT = mT.left, MT = mT.left + mT.width;
      else if (null != UT.cx && null != UT.cy) {
        if ("centric" !== TT) return AU(UT);
        var nT = UT.cx,
          HT = UT.cy,
          kT = UT.innerRadius,
          jT = UT.outerRadius,
          lT = UT.angle,
          LT = (0, tU.i)(nT, HT, kT, lT),
          pT = (0, tU.i)(nT, HT, jT, lT);
        WT = LT.x, zT = LT.y, MT = pT.x, gT = pT.y
      }
      return [{
        x: WT,
        y: zT
      }, {
        x: MT,
        y: gT
      }]
    }

    function Um(TT) {
      return Um = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, Um(TT)
    }

    function mm(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function Wm(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? mm(Object(mT), !0).forEach((function(UT) {
          zm(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : mm(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function zm(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != Um(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != Um(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == Um(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function Mm(TT) {
      var UT, mT, zT, MT = TT.element,
        gT = TT.tooltipEventType,
        nT = TT.isActive,
        HT = TT.activeCoordinate,
        kT = TT.activePayload,
        jT = TT.offset,
        lT = TT.activeTooltipIndex,
        LT = TT.tooltipAxisBandSize,
        pT = TT.layout,
        BT = TT.chartName,
        ZT = null !== (UT = MT.props.cursor) && void 0 !== UT ? UT : null === (mT = MT.type.defaultProps) || void 0 === mT ? void 0 : mT.cursor;
      if (!MT || !ZT || !nT || !HT || "ScatterChart" !== BT && "axis" !== gT) return null;
      var vT = rU.d;
      if ("ScatterChart" === BT) zT = HT, vT = oU;
      else if ("BarChart" === BT) zT = function(TT, UT, mT, WT) {
        var zT = WT / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === TT ? UT.x - zT : mT.left + .5,
          y: "horizontal" === TT ? mT.top + .5 : UT.y - zT,
          width: "horizontal" === TT ? WT : mT.width - 1,
          height: "horizontal" === TT ? mT.height - 1 : WT
        }
      }(pT, HT, jT, LT), vT = eT.d;
      else if ("radial" === pT) {
        var fT = AU(HT),
          qT = fT.cx,
          iT = fT.cy,
          bT = fT.radius;
        zT = {
          cx: qT,
          cy: iT,
          startAngle: fT.startAngle,
          endAngle: fT.endAngle,
          innerRadius: bT,
          outerRadius: bT
        }, vT = RU.c
      } else zT = {
        points: Tm(pT, HT, jT)
      }, vT = rU.d;
      var OT = Wm(Wm(Wm(Wm({
        stroke: "#ccc",
        pointerEvents: "none"
      }, jT), zT), (0, YT.b)(ZT, !1)), {}, {
        payload: kT,
        payloadIndex: lT,
        className: (0, cT.c)("recharts-tooltip-cursor", ZT.className)
      });
      return (0, WT.isValidElement)(ZT) ? (0, WT.cloneElement)(ZT, OT) : (0, WT.createElement)(vT, OT)
    }
    var gm = mT(6413),
      nm = ["item"],
      Hm = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function km(TT) {
      return km = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, km(TT)
    }

    function jm() {
      return jm = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, jm.apply(this, arguments)
    }

    function lm(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        var mT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != mT) {
          var WT, zT, MT, gT, nT = [],
            HT = !0,
            kT = !1;
          try {
            if (MT = (mT = mT.call(TT)).next, 0 === UT) {
              if (Object(mT) !== mT) return;
              HT = !1
            } else
              for (; !(HT = (WT = MT.call(mT)).done) && (nT.push(WT.value), nT.length !== UT); HT = !0);
          } catch (TT) {
            kT = !0, zT = TT
          } finally {
            try {
              if (!HT && null != mT.return && (gT = mT.return(), Object(gT) !== gT)) return
            } finally {
              if (kT) throw zT
            }
          }
          return nT
        }
      }(TT, UT) || im(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Lm(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function pm(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, Jm(WT.key), WT)
      }
    }

    function Bm(TT, UT, mT) {
      return UT = cm(UT),
        function(TT, UT) {
          if (UT && ("object" === km(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, Zm() ? Reflect.construct(UT, mT || [], cm(TT).constructor) : UT.apply(TT, mT))
    }

    function Zm() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (Zm = function() {
        return !!TT
      })()
    }

    function cm(TT) {
      return cm = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, cm(TT)
    }

    function fm(TT, UT) {
      return fm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, fm(TT, UT)
    }

    function qm(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return bm(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || im(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function im(TT, UT) {
      if (TT) {
        if ("string" === typeof TT) return bm(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        return "Object" === mT && TT.constructor && (mT = TT.constructor.name), "Map" === mT || "Set" === mT ? Array.from(TT) : "Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT) ? bm(TT, UT) : void 0
      }
    }

    function bm(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function Om(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function em(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? Om(Object(mT), !0).forEach((function(UT) {
          Ym(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : Om(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function Ym(TT, UT, mT) {
      return (UT = Jm(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function Jm(TT) {
      var UT = function(TT, UT) {
        if ("object" != km(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != km(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == km(UT) ? UT : UT + ""
    }
    var xm = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      dm = {
        width: "100%",
        height: "100%"
      },
      wm = {
        x: 0,
        y: 0
      };

    function tm(TT) {
      return TT
    }
    var am = function(TT, UT) {
      var mT = UT.graphicalItems,
        WT = UT.dataStartIndex,
        zT = UT.dataEndIndex,
        MT = (null !== mT && void 0 !== mT ? mT : []).reduce((function(TT, UT) {
          var mT = UT.props.data;
          return mT && mT.length ? [].concat(qm(TT), qm(mT)) : TT
        }), []);
      return MT.length > 0 ? MT : TT && TT.length && (0, wT.x)(WT) && (0, wT.x)(zT) ? TT.slice(WT, zT + 1) : []
    };

    function ym(TT) {
      return "number" === TT ? [0, "auto"] : void 0
    }
    var Xm = function(TT, UT, mT, WT) {
        var zT = TT.graphicalItems,
          MT = TT.tooltipAxis,
          gT = am(UT, TT);
        return mT < 0 || !zT || !zT.length || mT >= gT.length ? null : zT.reduce((function(zT, nT) {
          var HT, kT, jT = null !== (HT = nT.props.data) && void 0 !== HT ? HT : UT;
          if (jT && TT.dataStartIndex + TT.dataEndIndex !== 0 && TT.dataEndIndex - TT.dataStartIndex >= mT && (jT = jT.slice(TT.dataStartIndex, TT.dataEndIndex + 1)), MT.dataKey && !MT.allowDuplicatedCategory) {
            var lT = void 0 === jT ? gT : jT;
            kT = (0, wT.g)(lT, MT.dataKey, WT)
          } else kT = jT && jT[mT] || gT[mT];
          return kT ? [].concat(qm(zT), [(0, dT.X)(nT, kT)]) : zT
        }), [])
      },
      Im = function(TT, UT, mT, WT) {
        var zT = WT || {
            x: TT.chartX,
            y: TT.chartY
          },
          MT = function(TT, UT) {
            return "horizontal" === UT ? TT.x : "vertical" === UT ? TT.y : "centric" === UT ? TT.angle : TT.radius
          }(zT, mT),
          gT = TT.orderedTooltipTicks,
          nT = TT.tooltipAxis,
          HT = TT.tooltipTicks,
          kT = (0, dT.f)(MT, gT, HT, nT);
        if (kT >= 0 && HT) {
          var jT = HT[kT] && HT[kT].value,
            lT = Xm(TT, UT, kT, jT),
            LT = function(TT, UT, mT, WT) {
              var zT = UT.find((function(TT) {
                return TT && TT.index === mT
              }));
              if (zT) {
                if ("horizontal" === TT) return {
                  x: zT.coordinate,
                  y: WT.y
                };
                if ("vertical" === TT) return {
                  x: WT.x,
                  y: zT.coordinate
                };
                if ("centric" === TT) {
                  var MT = zT.coordinate,
                    gT = WT.radius;
                  return em(em(em({}, WT), (0, tU.i)(WT.cx, WT.cy, gT, MT)), {}, {
                    angle: MT,
                    radius: gT
                  })
                }
                var nT = zT.coordinate,
                  HT = WT.angle;
                return em(em(em({}, WT), (0, tU.i)(WT.cx, WT.cy, nT, HT)), {}, {
                  angle: HT,
                  radius: nT
                })
              }
              return wm
            }(mT, gT, kT, zT);
          return {
            activeTooltipIndex: kT,
            activeLabel: jT,
            activePayload: lT,
            activeCoordinate: LT
          }
        }
        return null
      },
      Qm = function(TT, UT) {
        var mT = UT.axes,
          WT = UT.graphicalItems,
          zT = UT.axisType,
          gT = UT.axisIdKey,
          nT = UT.stackGroups,
          HT = UT.dataStartIndex,
          jT = UT.dataEndIndex,
          lT = TT.layout,
          LT = TT.children,
          pT = TT.stackOffset,
          BT = (0, dT.$)(lT, zT);
        return mT.reduce((function(UT, mT) {
          var ZT, cT = void 0 !== mT.type.defaultProps ? em(em({}, mT.type.defaultProps), mT.props) : mT.props,
            vT = cT.type,
            fT = cT.dataKey,
            qT = cT.allowDataOverflow,
            iT = cT.allowDuplicatedCategory,
            bT = cT.scale,
            OT = cT.ticks,
            eT = cT.includeHidden,
            YT = cT[gT];
          if (UT[YT]) return UT;
          var JT, xT, tT, aT = am(TT.data, {
              graphicalItems: WT.filter((function(TT) {
                var UT;
                return (gT in TT.props ? TT.props[gT] : null === (UT = TT.type.defaultProps) || void 0 === UT ? void 0 : UT[gT]) === YT
              })),
              dataStartIndex: HT,
              dataEndIndex: jT
            }),
            yT = aT.length;
          (function(TT, UT, mT) {
            if ("number" === mT && !0 === UT && Array.isArray(TT)) {
              var WT = null === TT || void 0 === TT ? void 0 : TT[0],
                zT = null === TT || void 0 === TT ? void 0 : TT[1];
              if (WT && zT && (0, wT.x)(WT) && (0, wT.x)(zT)) return !0
            }
            return !1
          })(cT.domain, qT, vT) && (JT = (0, dT.kb)(cT.domain, null, qT), !BT || "number" !== vT && "auto" === bT || (tT = (0, dT.z)(aT, fT, "category")));
          var XT = ym(vT);
          if (!JT || 0 === JT.length) {
            var IT, QT = null !== (IT = cT.domain) && void 0 !== IT ? IT : XT;
            if (fT) {
              if (JT = (0, dT.z)(aT, fT, vT), "category" === vT && BT) {
                var sT = (0, wT.o)(JT);
                iT && sT ? (xT = JT, JT = kT()(0, yT)) : iT || (JT = (0, dT.bb)(QT, JT, mT).reduce((function(TT, UT) {
                  return TT.indexOf(UT) >= 0 ? TT : [].concat(qm(TT), [UT])
                }), []))
              } else if ("category" === vT) JT = iT ? JT.filter((function(TT) {
                return "" !== TT && !MT()(TT)
              })) : (0, dT.bb)(QT, JT, mT).reduce((function(TT, UT) {
                return TT.indexOf(UT) >= 0 || "" === UT || MT()(UT) ? TT : [].concat(qm(TT), [UT])
              }), []);
              else if ("number" === vT) {
                var FT = (0, dT.db)(aT, WT.filter((function(TT) {
                  var UT, mT, WT = gT in TT.props ? TT.props[gT] : null === (UT = TT.type.defaultProps) || void 0 === UT ? void 0 : UT[gT],
                    zT = "hide" in TT.props ? TT.props.hide : null === (mT = TT.type.defaultProps) || void 0 === mT ? void 0 : mT.hide;
                  return WT === YT && (eT || !zT)
                })), fT, zT, lT);
                FT && (JT = FT)
              }!BT || "number" !== vT && "auto" === bT || (tT = (0, dT.z)(aT, fT, "category"))
            } else JT = BT ? kT()(0, yT) : nT && nT[YT] && nT[YT].hasStack && "number" === vT ? "expand" === pT ? [0, 1] : (0, dT.E)(nT[YT].stackGroups, HT, jT) : (0, dT.C)(aT, WT.filter((function(TT) {
              var UT = gT in TT.props ? TT.props[gT] : TT.type.defaultProps[gT],
                mT = "hide" in TT.props ? TT.props.hide : TT.type.defaultProps.hide;
              return UT === YT && (eT || !mT)
            })), vT, lT, !0);
            if ("number" === vT) JT = wU(LT, JT, YT, zT, OT), QT && (JT = (0, dT.kb)(QT, JT, qT));
            else if ("category" === vT && QT) {
              var PT = QT;
              JT.every((function(TT) {
                return PT.indexOf(TT) >= 0
              })) && (JT = PT)
            }
          }
          return em(em({}, UT), {}, Ym({}, YT, em(em({}, cT), {}, {
            axisType: zT,
            domain: JT,
            categoricalDomain: tT,
            duplicateDomain: xT,
            originalDomain: null !== (ZT = cT.domain) && void 0 !== ZT ? ZT : XT,
            isCategorical: BT,
            layout: lT
          })))
        }), {})
      },
      sm = function(TT, UT) {
        var mT = UT.axisType,
          WT = void 0 === mT ? "xAxis" : mT,
          zT = UT.AxisComp,
          MT = UT.graphicalItems,
          gT = UT.stackGroups,
          nT = UT.dataStartIndex,
          HT = UT.dataEndIndex,
          jT = TT.children,
          LT = "".concat(WT, "Id"),
          pT = (0, YT.d)(jT, zT),
          BT = {};
        return pT && pT.length ? BT = Qm(TT, {
          axes: pT,
          graphicalItems: MT,
          axisType: WT,
          axisIdKey: LT,
          stackGroups: gT,
          dataStartIndex: nT,
          dataEndIndex: HT
        }) : MT && MT.length && (BT = function(TT, UT) {
          var mT = UT.graphicalItems,
            WT = UT.Axis,
            zT = UT.axisType,
            MT = UT.axisIdKey,
            gT = UT.stackGroups,
            nT = UT.dataStartIndex,
            HT = UT.dataEndIndex,
            jT = TT.layout,
            LT = TT.children,
            pT = am(TT.data, {
              graphicalItems: mT,
              dataStartIndex: nT,
              dataEndIndex: HT
            }),
            BT = pT.length,
            ZT = (0, dT.$)(jT, zT),
            cT = -1;
          return mT.reduce((function(TT, UT) {
            var vT, fT = (void 0 !== UT.type.defaultProps ? em(em({}, UT.type.defaultProps), UT.props) : UT.props)[MT],
              qT = ym("number");
            return TT[fT] ? TT : (cT++, ZT ? vT = kT()(0, BT) : gT && gT[fT] && gT[fT].hasStack ? (vT = (0, dT.E)(gT[fT].stackGroups, nT, HT), vT = wU(LT, vT, fT, zT)) : (vT = (0, dT.kb)(qT, (0, dT.C)(pT, mT.filter((function(TT) {
              var UT, mT, WT = MT in TT.props ? TT.props[MT] : null === (UT = TT.type.defaultProps) || void 0 === UT ? void 0 : UT[MT],
                zT = "hide" in TT.props ? TT.props.hide : null === (mT = TT.type.defaultProps) || void 0 === mT ? void 0 : mT.hide;
              return WT === fT && !zT
            })), "number", jT), WT.defaultProps.allowDataOverflow), vT = wU(LT, vT, fT, zT)), em(em({}, TT), {}, Ym({}, fT, em(em({
              axisType: zT
            }, WT.defaultProps), {}, {
              hide: !0,
              orientation: lT()(xm, "".concat(zT, ".").concat(cT % 2), null),
              domain: vT,
              originalDomain: qT,
              isCategorical: ZT,
              layout: jT
            }))))
          }), {})
        }(TT, {
          Axis: zT,
          graphicalItems: MT,
          axisType: WT,
          axisIdKey: LT,
          stackGroups: gT,
          dataStartIndex: nT,
          dataEndIndex: HT
        })), BT
      },
      Fm = function(TT) {
        var UT = TT.children,
          mT = TT.defaultShowTooltip,
          WT = (0, YT.h)(UT, ET),
          zT = 0,
          MT = 0;
        return TT.data && 0 !== TT.data.length && (MT = TT.data.length - 1), WT && WT.props && (WT.props.startIndex >= 0 && (zT = WT.props.startIndex), WT.props.endIndex >= 0 && (MT = WT.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: zT,
          dataEndIndex: MT,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(mT)
        }
      },
      Pm = function(TT) {
        return "horizontal" === TT ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === TT ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === TT ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      Vm = function(TT, UT) {
        return "xAxis" === UT ? TT[UT].width : "yAxis" === UT ? TT[UT].height : void 0
      },
      um = function(TT) {
        var UT = TT.chartName,
          mT = TT.GraphicalChild,
          zT = TT.defaultTooltipEventType,
          gT = void 0 === zT ? "axis" : zT,
          HT = TT.validateTooltipEventTypes,
          kT = void 0 === HT ? ["axis"] : HT,
          jT = TT.axisComponents,
          LT = TT.legendContent,
          BT = TT.formatAxisMap,
          JT = TT.defaultProps,
          xT = function(TT, UT) {
            var mT = UT.graphicalItems,
              WT = UT.stackGroups,
              zT = UT.offset,
              gT = UT.updateId,
              nT = UT.dataStartIndex,
              HT = UT.dataEndIndex,
              kT = TT.barSize,
              lT = TT.layout,
              LT = TT.barGap,
              pT = TT.barCategoryGap,
              BT = TT.maxBarSize,
              ZT = Pm(lT),
              cT = ZT.numericAxisName,
              fT = ZT.cateAxisName,
              qT = function(TT) {
                return !(!TT || !TT.length) && TT.some((function(TT) {
                  var UT = (0, YT.l)(TT && TT.type);
                  return UT && UT.indexOf("Bar") >= 0
                }))
              }(mT),
              iT = [];
            return mT.forEach((function(mT, ZT) {
              var bT = am(TT.data, {
                  graphicalItems: [mT],
                  dataStartIndex: nT,
                  dataEndIndex: HT
                }),
                OT = void 0 !== mT.type.defaultProps ? em(em({}, mT.type.defaultProps), mT.props) : mT.props,
                eT = OT.dataKey,
                JT = OT.maxBarSize,
                xT = OT["".concat(cT, "Id")],
                wT = OT["".concat(fT, "Id")],
                tT = jT.reduce((function(TT, mT) {
                  var WT = UT["".concat(mT.axisType, "Map")],
                    zT = OT["".concat(mT.axisType, "Id")];
                  WT && WT[zT] || "zAxis" === mT.axisType || (0, vT.c)(!1);
                  var MT = WT[zT];
                  return em(em({}, TT), {}, Ym(Ym({}, mT.axisType, MT), "".concat(mT.axisType, "Ticks"), (0, dT.P)(MT)))
                }), {}),
                aT = tT[fT],
                yT = tT["".concat(fT, "Ticks")],
                XT = WT && WT[xT] && WT[xT].hasStack && (0, dT.O)(mT, WT[xT].stackGroups),
                IT = (0, YT.l)(mT.type).indexOf("Bar") >= 0,
                QT = (0, dT.o)(aT, yT),
                sT = [],
                FT = qT && (0, dT.s)({
                  barSize: kT,
                  stackGroups: WT,
                  totalSize: Vm(tT, fT)
                });
              if (IT) {
                var PT, VT, uT = MT()(JT) ? BT : JT,
                  CT = null !== (PT = null !== (VT = (0, dT.o)(aT, yT, !0)) && void 0 !== VT ? VT : uT) && void 0 !== PT ? PT : 0;
                sT = (0, dT.p)({
                  barGap: LT,
                  barCategoryGap: pT,
                  bandSize: CT !== QT ? CT : QT,
                  sizeList: FT[wT],
                  maxBarSize: uT
                }), CT !== QT && (sT = sT.map((function(TT) {
                  return em(em({}, TT), {}, {
                    position: em(em({}, TT.position), {}, {
                      offset: TT.position.offset - CT / 2
                    })
                  })
                })))
              }
              var rT = mT && mT.type && mT.type.getComposedData;
              rT && iT.push({
                props: em(em({}, rT(em(em({}, tT), {}, {
                  displayedData: bT,
                  props: TT,
                  dataKey: eT,
                  item: mT,
                  bandSize: QT,
                  barPosition: sT,
                  offset: zT,
                  stackedData: XT,
                  layout: lT,
                  dataStartIndex: nT,
                  dataEndIndex: HT
                }))), {}, Ym(Ym(Ym({
                  key: mT.key || "item-".concat(ZT)
                }, cT, tT[cT]), fT, tT[fT]), "animationId", gT)),
                childIndex: (0, YT.w)(mT, TT.children),
                item: mT
              })
            })), iT
          },
          tT = function(TT, WT) {
            var zT = TT.props,
              MT = TT.dataStartIndex,
              gT = TT.dataEndIndex,
              nT = TT.updateId;
            if (!(0, YT.C)({
                props: zT
              })) return null;
            var HT = zT.children,
              kT = zT.layout,
              LT = zT.stackOffset,
              ZT = zT.data,
              cT = zT.reverseStackOrder,
              vT = Pm(kT),
              fT = vT.numericAxisName,
              qT = vT.cateAxisName,
              iT = (0, YT.d)(HT, mT),
              OT = (0, dT.K)(ZT, iT, "".concat(fT, "Id"), "".concat(qT, "Id"), LT, cT),
              eT = jT.reduce((function(TT, UT) {
                var mT = "".concat(UT.axisType, "Map");
                return em(em({}, TT), {}, Ym({}, mT, sm(zT, em(em({}, UT), {}, {
                  graphicalItems: iT,
                  stackGroups: UT.axisType === fT && OT,
                  dataStartIndex: MT,
                  dataEndIndex: gT
                }))))
              }), {}),
              JT = function(TT, UT) {
                var mT = TT.props,
                  WT = TT.graphicalItems,
                  zT = TT.xAxisMap,
                  MT = void 0 === zT ? {} : zT,
                  gT = TT.yAxisMap,
                  nT = void 0 === gT ? {} : gT,
                  HT = mT.width,
                  kT = mT.height,
                  jT = mT.children,
                  LT = mT.margin || {},
                  pT = (0, YT.h)(jT, ET),
                  BT = (0, YT.h)(jT, bT.c),
                  ZT = Object.keys(nT).reduce((function(TT, UT) {
                    var mT = nT[UT],
                      WT = mT.orientation;
                    return mT.mirror || mT.hide ? TT : em(em({}, TT), {}, Ym({}, WT, TT[WT] + mT.width))
                  }), {
                    left: LT.left || 0,
                    right: LT.right || 0
                  }),
                  cT = Object.keys(MT).reduce((function(TT, UT) {
                    var mT = MT[UT],
                      WT = mT.orientation;
                    return mT.mirror || mT.hide ? TT : em(em({}, TT), {}, Ym({}, WT, lT()(TT, "".concat(WT)) + mT.height))
                  }), {
                    top: LT.top || 0,
                    bottom: LT.bottom || 0
                  }),
                  vT = em(em({}, cT), ZT),
                  fT = vT.bottom;
                pT && (vT.bottom += pT.props.height || ET.defaultProps.height), BT && UT && (vT = (0, dT.e)(vT, WT, mT, UT));
                var qT = HT - vT.left - vT.right,
                  iT = kT - vT.top - vT.bottom;
                return em(em({
                  brushBottom: fT
                }, vT), {}, {
                  width: Math.max(qT, 0),
                  height: Math.max(iT, 0)
                })
              }(em(em({}, eT), {}, {
                props: zT,
                graphicalItems: iT
              }), null === WT || void 0 === WT ? void 0 : WT.legendBBox);
            Object.keys(eT).forEach((function(TT) {
              eT[TT] = BT(zT, eT[TT], JT, TT.replace("Map", ""), UT)
            }));
            var tT = function(TT) {
                var UT = (0, wT.h)(TT),
                  mT = (0, dT.P)(UT, !1, !0);
                return {
                  tooltipTicks: mT,
                  orderedTooltipTicks: pT()(mT, (function(TT) {
                    return TT.coordinate
                  })),
                  tooltipAxis: UT,
                  tooltipAxisBandSize: (0, dT.o)(UT, mT)
                }
              }(eT["".concat(qT, "Map")]),
              aT = xT(zT, em(em({}, eT), {}, {
                dataStartIndex: MT,
                dataEndIndex: gT,
                updateId: nT,
                graphicalItems: iT,
                stackGroups: OT,
                offset: JT
              }));
            return em(em({
              formattedGraphicalItems: aT,
              graphicalItems: iT,
              offset: JT,
              stackGroups: OT
            }, tT), eT)
          },
          aT = function(TT) {
            function mT(TT) {
              var zT, gT, HT;
              return function(TT, UT) {
                if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
              }(this, mT), Ym(HT = Bm(this, mT, [TT]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Ym(HT, "accessibilityManager", new uU), Ym(HT, "handleLegendBBoxUpdate", (function(TT) {
                if (TT) {
                  var UT = HT.state,
                    mT = UT.dataStartIndex,
                    WT = UT.dataEndIndex,
                    zT = UT.updateId;
                  HT.setState(em({
                    legendBBox: TT
                  }, tT({
                    props: HT.props,
                    dataStartIndex: mT,
                    dataEndIndex: WT,
                    updateId: zT
                  }, em(em({}, HT.state), {}, {
                    legendBBox: TT
                  }))))
                }
              })), Ym(HT, "handleReceiveSyncEvent", (function(TT, UT, mT) {
                if (HT.props.syncId === TT) {
                  if (mT === HT.eventEmitterSymbol && "function" !== typeof HT.props.syncMethod) return;
                  HT.applySyncEvent(UT)
                }
              })), Ym(HT, "handleBrushChange", (function(TT) {
                var UT = TT.startIndex,
                  mT = TT.endIndex;
                if (UT !== HT.state.dataStartIndex || mT !== HT.state.dataEndIndex) {
                  var WT = HT.state.updateId;
                  HT.setState((function() {
                    return em({
                      dataStartIndex: UT,
                      dataEndIndex: mT
                    }, tT({
                      props: HT.props,
                      dataStartIndex: UT,
                      dataEndIndex: mT,
                      updateId: WT
                    }, HT.state))
                  })), HT.triggerSyncEvent({
                    dataStartIndex: UT,
                    dataEndIndex: mT
                  })
                }
              })), Ym(HT, "handleMouseEnter", (function(TT) {
                var UT = HT.getMouseInfo(TT);
                if (UT) {
                  var mT = em(em({}, UT), {}, {
                    isTooltipActive: !0
                  });
                  HT.setState(mT), HT.triggerSyncEvent(mT);
                  var WT = HT.props.onMouseEnter;
                  nT()(WT) && WT(mT, TT)
                }
              })), Ym(HT, "triggeredAfterMouseMove", (function(TT) {
                var UT = HT.getMouseInfo(TT),
                  mT = UT ? em(em({}, UT), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                HT.setState(mT), HT.triggerSyncEvent(mT);
                var WT = HT.props.onMouseMove;
                nT()(WT) && WT(mT, TT)
              })), Ym(HT, "handleItemMouseEnter", (function(TT) {
                HT.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: TT,
                    activePayload: TT.tooltipPayload,
                    activeCoordinate: TT.tooltipPosition || {
                      x: TT.cx,
                      y: TT.cy
                    }
                  }
                }))
              })), Ym(HT, "handleItemMouseLeave", (function() {
                HT.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), Ym(HT, "handleMouseMove", (function(TT) {
                TT.persist(), HT.throttleTriggeredAfterMouseMove(TT)
              })), Ym(HT, "handleMouseLeave", (function(TT) {
                HT.throttleTriggeredAfterMouseMove.cancel();
                var UT = {
                  isTooltipActive: !1
                };
                HT.setState(UT), HT.triggerSyncEvent(UT);
                var mT = HT.props.onMouseLeave;
                nT()(mT) && mT(UT, TT)
              })), Ym(HT, "handleOuterEvent", (function(TT) {
                var UT, mT = (0, YT.n)(TT),
                  WT = lT()(HT.props, "".concat(mT));
                mT && nT()(WT) && WT(null !== (UT = /.*touch.*/i.test(mT) ? HT.getMouseInfo(TT.changedTouches[0]) : HT.getMouseInfo(TT)) && void 0 !== UT ? UT : {}, TT)
              })), Ym(HT, "handleClick", (function(TT) {
                var UT = HT.getMouseInfo(TT);
                if (UT) {
                  var mT = em(em({}, UT), {}, {
                    isTooltipActive: !0
                  });
                  HT.setState(mT), HT.triggerSyncEvent(mT);
                  var WT = HT.props.onClick;
                  nT()(WT) && WT(mT, TT)
                }
              })), Ym(HT, "handleMouseDown", (function(TT) {
                var UT = HT.props.onMouseDown;
                nT()(UT) && UT(HT.getMouseInfo(TT), TT)
              })), Ym(HT, "handleMouseUp", (function(TT) {
                var UT = HT.props.onMouseUp;
                nT()(UT) && UT(HT.getMouseInfo(TT), TT)
              })), Ym(HT, "handleTouchMove", (function(TT) {
                null != TT.changedTouches && TT.changedTouches.length > 0 && HT.throttleTriggeredAfterMouseMove(TT.changedTouches[0])
              })), Ym(HT, "handleTouchStart", (function(TT) {
                null != TT.changedTouches && TT.changedTouches.length > 0 && HT.handleMouseDown(TT.changedTouches[0])
              })), Ym(HT, "handleTouchEnd", (function(TT) {
                null != TT.changedTouches && TT.changedTouches.length > 0 && HT.handleMouseUp(TT.changedTouches[0])
              })), Ym(HT, "handleDoubleClick", (function(TT) {
                var UT = HT.props.onDoubleClick;
                nT()(UT) && UT(HT.getMouseInfo(TT), TT)
              })), Ym(HT, "handleContextMenu", (function(TT) {
                var UT = HT.props.onContextMenu;
                nT()(UT) && UT(HT.getMouseInfo(TT), TT)
              })), Ym(HT, "triggerSyncEvent", (function(TT) {
                void 0 !== HT.props.syncId && XU.emit(IU, HT.props.syncId, TT, HT.eventEmitterSymbol)
              })), Ym(HT, "applySyncEvent", (function(TT) {
                var UT = HT.props,
                  mT = UT.layout,
                  WT = UT.syncMethod,
                  zT = HT.state.updateId,
                  MT = TT.dataStartIndex,
                  gT = TT.dataEndIndex;
                if (void 0 !== TT.dataStartIndex || void 0 !== TT.dataEndIndex) HT.setState(em({
                  dataStartIndex: MT,
                  dataEndIndex: gT
                }, tT({
                  props: HT.props,
                  dataStartIndex: MT,
                  dataEndIndex: gT,
                  updateId: zT
                }, HT.state)));
                else if (void 0 !== TT.activeTooltipIndex) {
                  var nT = TT.chartX,
                    kT = TT.chartY,
                    jT = TT.activeTooltipIndex,
                    lT = HT.state,
                    LT = lT.offset,
                    pT = lT.tooltipTicks;
                  if (!LT) return;
                  if ("function" === typeof WT) jT = WT(pT, TT);
                  else if ("value" === WT) {
                    jT = -1;
                    for (var BT = 0; BT < pT.length; BT++)
                      if (pT[BT].value === TT.activeLabel) {
                        jT = BT;
                        break
                      }
                  }
                  var ZT = em(em({}, LT), {}, {
                      x: LT.left,
                      y: LT.top
                    }),
                    cT = Math.min(nT, ZT.x + ZT.width),
                    vT = Math.min(kT, ZT.y + ZT.height),
                    fT = pT[jT] && pT[jT].value,
                    qT = Xm(HT.state, HT.props.data, jT),
                    iT = pT[jT] ? {
                      x: "horizontal" === mT ? pT[jT].coordinate : cT,
                      y: "horizontal" === mT ? vT : pT[jT].coordinate
                    } : wm;
                  HT.setState(em(em({}, TT), {}, {
                    activeLabel: fT,
                    activeCoordinate: iT,
                    activePayload: qT,
                    activeTooltipIndex: jT
                  }))
                } else HT.setState(TT)
              })), Ym(HT, "renderCursor", (function(TT) {
                var mT, zT = HT.state,
                  MT = zT.isTooltipActive,
                  gT = zT.activeCoordinate,
                  nT = zT.activePayload,
                  kT = zT.offset,
                  jT = zT.activeTooltipIndex,
                  lT = zT.tooltipAxisBandSize,
                  LT = HT.getTooltipEventType(),
                  pT = null !== (mT = TT.props.active) && void 0 !== mT ? mT : MT,
                  BT = HT.props.layout,
                  ZT = TT.key || "_recharts-cursor";
                return WT.createElement(Mm, {
                  key: ZT,
                  activeCoordinate: gT,
                  activePayload: nT,
                  activeTooltipIndex: jT,
                  chartName: UT,
                  element: TT,
                  isActive: pT,
                  layout: BT,
                  offset: kT,
                  tooltipAxisBandSize: lT,
                  tooltipEventType: LT
                })
              })), Ym(HT, "renderPolarAxis", (function(TT, UT, mT) {
                var zT = lT()(TT, "type.axisType"),
                  MT = lT()(HT.state, "".concat(zT, "Map")),
                  gT = TT.type.defaultProps,
                  nT = void 0 !== gT ? em(em({}, gT), TT.props) : TT.props,
                  kT = MT && MT[nT["".concat(zT, "Id")]];
                return (0, WT.cloneElement)(TT, em(em({}, kT), {}, {
                  className: (0, cT.c)(zT, kT.className),
                  key: TT.key || "".concat(UT, "-").concat(mT),
                  ticks: (0, dT.P)(kT, !0)
                }))
              })), Ym(HT, "renderPolarGrid", (function(TT) {
                var UT = TT.props,
                  mT = UT.radialLines,
                  zT = UT.polarAngles,
                  MT = UT.polarRadius,
                  gT = HT.state,
                  nT = gT.radiusAxisMap,
                  kT = gT.angleAxisMap,
                  jT = (0, wT.h)(nT),
                  lT = (0, wT.h)(kT),
                  LT = lT.cx,
                  pT = lT.cy,
                  BT = lT.innerRadius,
                  ZT = lT.outerRadius;
                return (0, WT.cloneElement)(TT, {
                  polarAngles: Array.isArray(zT) ? zT : (0, dT.P)(lT, !0).map((function(TT) {
                    return TT.coordinate
                  })),
                  polarRadius: Array.isArray(MT) ? MT : (0, dT.P)(jT, !0).map((function(TT) {
                    return TT.coordinate
                  })),
                  cx: LT,
                  cy: pT,
                  innerRadius: BT,
                  outerRadius: ZT,
                  key: TT.key || "polar-grid",
                  radialLines: mT
                })
              })), Ym(HT, "renderLegend", (function() {
                var TT = HT.state.formattedGraphicalItems,
                  UT = HT.props,
                  mT = UT.children,
                  zT = UT.width,
                  MT = UT.height,
                  gT = HT.props.margin || {},
                  nT = zT - (gT.left || 0) - (gT.right || 0),
                  kT = (0, DT.c)({
                    children: mT,
                    formattedGraphicalItems: TT,
                    legendWidth: nT,
                    legendContent: LT
                  });
                if (!kT) return null;
                var jT = kT.item,
                  lT = Lm(kT, nm);
                return (0, WT.cloneElement)(jT, em(em({}, lT), {}, {
                  chartWidth: zT,
                  chartHeight: MT,
                  margin: gT,
                  onBBoxUpdate: HT.handleLegendBBoxUpdate
                }))
              })), Ym(HT, "renderTooltip", (function() {
                var TT, UT = HT.props,
                  mT = UT.children,
                  zT = UT.accessibilityLayer,
                  MT = (0, YT.h)(mT, iT.e);
                if (!MT) return null;
                var gT = HT.state,
                  nT = gT.isTooltipActive,
                  kT = gT.activeCoordinate,
                  jT = gT.activePayload,
                  lT = gT.activeLabel,
                  LT = gT.offset,
                  pT = null !== (TT = MT.props.active) && void 0 !== TT ? TT : nT;
                return (0, WT.cloneElement)(MT, {
                  viewBox: em(em({}, LT), {}, {
                    x: LT.left,
                    y: LT.top
                  }),
                  active: pT,
                  label: lT,
                  payload: pT ? jT : [],
                  coordinate: kT,
                  accessibilityLayer: zT
                })
              })), Ym(HT, "renderBrush", (function(TT) {
                var UT = HT.props,
                  mT = UT.margin,
                  zT = UT.data,
                  MT = HT.state,
                  gT = MT.offset,
                  nT = MT.dataStartIndex,
                  kT = MT.dataEndIndex,
                  jT = MT.updateId;
                return (0, WT.cloneElement)(TT, {
                  key: TT.key || "_recharts-brush",
                  onChange: (0, dT.k)(HT.handleBrushChange, TT.props.onChange),
                  data: zT,
                  x: (0, wT.x)(TT.props.x) ? TT.props.x : gT.left,
                  y: (0, wT.x)(TT.props.y) ? TT.props.y : gT.top + gT.height + gT.brushBottom - (mT.bottom || 0),
                  width: (0, wT.x)(TT.props.width) ? TT.props.width : gT.width,
                  startIndex: nT,
                  endIndex: kT,
                  updateId: "brush-".concat(jT)
                })
              })), Ym(HT, "renderReferenceElement", (function(TT, UT, mT) {
                if (!TT) return null;
                var zT = HT.clipPathId,
                  MT = HT.state,
                  gT = MT.xAxisMap,
                  nT = MT.yAxisMap,
                  kT = MT.offset,
                  jT = TT.type.defaultProps || {},
                  lT = TT.props,
                  LT = lT.xAxisId,
                  pT = void 0 === LT ? jT.xAxisId : LT,
                  BT = lT.yAxisId,
                  ZT = void 0 === BT ? jT.yAxisId : BT;
                return (0, WT.cloneElement)(TT, {
                  key: TT.key || "".concat(UT, "-").concat(mT),
                  xAxis: gT[pT],
                  yAxis: nT[ZT],
                  viewBox: {
                    x: kT.left,
                    y: kT.top,
                    width: kT.width,
                    height: kT.height
                  },
                  clipPathId: zT
                })
              })), Ym(HT, "renderActivePoints", (function(TT) {
                var UT = TT.item,
                  WT = TT.activePoint,
                  zT = TT.basePoint,
                  MT = TT.childIndex,
                  gT = TT.isRange,
                  nT = [],
                  HT = UT.props.key,
                  kT = void 0 !== UT.item.type.defaultProps ? em(em({}, UT.item.type.defaultProps), UT.item.props) : UT.item.props,
                  jT = kT.activeDot,
                  lT = em(em({
                    index: MT,
                    dataKey: kT.dataKey,
                    cx: WT.x,
                    cy: WT.y,
                    r: 4,
                    fill: (0, dT.H)(UT.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: WT.payload,
                    value: WT.value
                  }, (0, YT.b)(jT, !1)), (0, QU.i)(jT));
                return nT.push(mT.renderActiveDot(jT, lT, "".concat(HT, "-activePoint-").concat(MT))), zT ? nT.push(mT.renderActiveDot(jT, em(em({}, lT), {}, {
                  cx: zT.x,
                  cy: zT.y
                }), "".concat(HT, "-basePoint-").concat(MT))) : gT && nT.push(null), nT
              })), Ym(HT, "renderGraphicChild", (function(TT, UT, mT) {
                var zT = HT.filterFormatItem(TT, UT, mT);
                if (!zT) return null;
                var gT = HT.getTooltipEventType(),
                  nT = HT.state,
                  kT = nT.isTooltipActive,
                  jT = nT.tooltipAxis,
                  lT = nT.activeTooltipIndex,
                  LT = nT.activeLabel,
                  pT = HT.props.children,
                  BT = (0, YT.h)(pT, iT.e),
                  ZT = zT.props,
                  cT = ZT.points,
                  vT = ZT.isRange,
                  fT = ZT.baseLine,
                  qT = void 0 !== zT.item.type.defaultProps ? em(em({}, zT.item.type.defaultProps), zT.item.props) : zT.item.props,
                  bT = qT.activeDot,
                  OT = qT.hide,
                  eT = qT.activeBar,
                  JT = qT.activeShape,
                  xT = Boolean(!OT && kT && BT && (bT || eT || JT)),
                  tT = {};
                "axis" !== gT && BT && "click" === BT.props.trigger ? tT = {
                  onClick: (0, dT.k)(HT.handleItemMouseEnter, TT.props.onClick)
                } : "axis" !== gT && (tT = {
                  onMouseLeave: (0, dT.k)(HT.handleItemMouseLeave, TT.props.onMouseLeave),
                  onMouseEnter: (0, dT.k)(HT.handleItemMouseEnter, TT.props.onMouseEnter)
                });
                var aT = (0, WT.cloneElement)(TT, em(em({}, zT.props), tT));
                if (xT) {
                  if (!(lT >= 0)) {
                    var yT, XT = (null !== (yT = HT.getItemByXY(HT.state.activeCoordinate)) && void 0 !== yT ? yT : {
                        graphicalItem: aT
                      }).graphicalItem,
                      IT = XT.item,
                      QT = void 0 === IT ? TT : IT,
                      sT = XT.childIndex,
                      FT = em(em(em({}, zT.props), tT), {}, {
                        activeIndex: sT
                      });
                    return [(0, WT.cloneElement)(QT, FT), null, null]
                  }
                  var PT, VT;
                  if (jT.dataKey && !jT.allowDuplicatedCategory) {
                    var uT = "function" === typeof jT.dataKey ? function(TT) {
                      return "function" === typeof jT.dataKey ? jT.dataKey(TT.payload) : null
                    } : "payload.".concat(jT.dataKey.toString());
                    PT = (0, wT.g)(cT, uT, LT), VT = vT && fT && (0, wT.g)(fT, uT, LT)
                  } else PT = null === cT || void 0 === cT ? void 0 : cT[lT], VT = vT && fT && fT[lT];
                  if (JT || eT) {
                    var CT = void 0 !== TT.props.activeIndex ? TT.props.activeIndex : lT;
                    return [(0, WT.cloneElement)(TT, em(em(em({}, zT.props), tT), {}, {
                      activeIndex: CT
                    })), null, null]
                  }
                  if (!MT()(PT)) return [aT].concat(qm(HT.renderActivePoints({
                    item: zT,
                    activePoint: PT,
                    basePoint: VT,
                    childIndex: lT,
                    isRange: vT
                  })))
                }
                return vT ? [aT, null, null] : [aT, null]
              })), Ym(HT, "renderCustomized", (function(TT, UT, mT) {
                return (0, WT.cloneElement)(TT, em(em({
                  key: "recharts-customized-".concat(mT)
                }, HT.props), HT.state))
              })), Ym(HT, "renderMap", {
                CartesianGrid: {
                  handler: tm,
                  once: !0
                },
                ReferenceArea: {
                  handler: HT.renderReferenceElement
                },
                ReferenceLine: {
                  handler: tm
                },
                ReferenceDot: {
                  handler: HT.renderReferenceElement
                },
                XAxis: {
                  handler: tm
                },
                YAxis: {
                  handler: tm
                },
                Brush: {
                  handler: HT.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: HT.renderGraphicChild
                },
                Line: {
                  handler: HT.renderGraphicChild
                },
                Area: {
                  handler: HT.renderGraphicChild
                },
                Radar: {
                  handler: HT.renderGraphicChild
                },
                RadialBar: {
                  handler: HT.renderGraphicChild
                },
                Scatter: {
                  handler: HT.renderGraphicChild
                },
                Pie: {
                  handler: HT.renderGraphicChild
                },
                Funnel: {
                  handler: HT.renderGraphicChild
                },
                Tooltip: {
                  handler: HT.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: HT.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: HT.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: HT.renderPolarAxis
                },
                Customized: {
                  handler: HT.renderCustomized
                }
              }), HT.clipPathId = "".concat(null !== (zT = TT.id) && void 0 !== zT ? zT : (0, wT.E)("recharts"), "-clip"), HT.throttleTriggeredAfterMouseMove = ZT()(HT.triggeredAfterMouseMove, null !== (gT = TT.throttleDelay) && void 0 !== gT ? gT : 1e3 / 60), HT.state = {}, HT
            }
            return function(TT, UT) {
              if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
              TT.prototype = Object.create(UT && UT.prototype, {
                constructor: {
                  value: TT,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(TT, "prototype", {
                writable: !1
              }), UT && fm(TT, UT)
            }(mT, TT), zT = mT, HT = [{
              key: "componentDidMount",
              value: function() {
                var TT, UT;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (TT = this.props.margin.left) && void 0 !== TT ? TT : 0,
                    top: null !== (UT = this.props.margin.top) && void 0 !== UT ? UT : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var TT = this.props,
                  UT = TT.children,
                  mT = TT.data,
                  WT = TT.height,
                  zT = TT.layout,
                  MT = (0, YT.h)(UT, iT.e);
                if (MT) {
                  var gT = MT.props.defaultIndex;
                  if (!("number" !== typeof gT || gT < 0 || gT > this.state.tooltipTicks.length - 1)) {
                    var nT = this.state.tooltipTicks[gT] && this.state.tooltipTicks[gT].value,
                      HT = Xm(this.state, mT, gT, nT),
                      kT = this.state.tooltipTicks[gT].coordinate,
                      jT = (this.state.offset.top + WT) / 2,
                      lT = "horizontal" === zT ? {
                        x: kT,
                        y: jT
                      } : {
                        y: kT,
                        x: jT
                      },
                      LT = this.state.formattedGraphicalItems.find((function(TT) {
                        return "Scatter" === TT.item.type.name
                      }));
                    LT && (lT = em(em({}, lT), LT.props.points[gT].tooltipPosition), HT = LT.props.points[gT].tooltipPayload);
                    var pT = {
                      activeTooltipIndex: gT,
                      isTooltipActive: !0,
                      activeLabel: nT,
                      activePayload: HT,
                      activeCoordinate: lT
                    };
                    this.setState(pT), this.renderCursor(MT), this.accessibilityManager.setIndex(gT)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(TT, UT) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== UT.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== TT.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== TT.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (mT = this.props.margin.left) && void 0 !== mT ? mT : 0,
                    top: null !== (WT = this.props.margin.top) && void 0 !== WT ? WT : 0
                  }
                }), null) : null;
                var mT, WT
              }
            }, {
              key: "componentDidUpdate",
              value: function(TT) {
                (0, YT.t)([(0, YT.h)(TT.children, iT.e)], [(0, YT.h)(this.props.children, iT.e)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var TT = (0, YT.h)(this.props.children, iT.e);
                if (TT && "boolean" === typeof TT.props.shared) {
                  var UT = TT.props.shared ? "axis" : "item";
                  return kT.indexOf(UT) >= 0 ? UT : gT
                }
                return gT
              }
            }, {
              key: "getMouseInfo",
              value: function(TT) {
                if (!this.container) return null;
                var UT = this.container,
                  mT = UT.getBoundingClientRect(),
                  WT = (0, hT.d)(mT),
                  zT = {
                    chartX: Math.round(TT.pageX - WT.left),
                    chartY: Math.round(TT.pageY - WT.top)
                  },
                  MT = mT.width / UT.offsetWidth || 1,
                  gT = this.inRange(zT.chartX, zT.chartY, MT);
                if (!gT) return null;
                var nT = this.state,
                  HT = nT.xAxisMap,
                  kT = nT.yAxisMap,
                  jT = this.getTooltipEventType(),
                  lT = Im(this.state, this.props.data, this.props.layout, gT);
                if ("axis" !== jT && HT && kT) {
                  var LT = (0, wT.h)(HT).scale,
                    pT = (0, wT.h)(kT).scale,
                    BT = LT && LT.invert ? LT.invert(zT.chartX) : null,
                    ZT = pT && pT.invert ? pT.invert(zT.chartY) : null;
                  return em(em({}, zT), {}, {
                    xValue: BT,
                    yValue: ZT
                  }, lT)
                }
                return lT ? em(em({}, zT), lT) : null
              }
            }, {
              key: "inRange",
              value: function(TT, UT) {
                var mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  WT = this.props.layout,
                  zT = TT / mT,
                  MT = UT / mT;
                if ("horizontal" === WT || "vertical" === WT) {
                  var gT = this.state.offset;
                  return zT >= gT.left && zT <= gT.left + gT.width && MT >= gT.top && MT <= gT.top + gT.height ? {
                    x: zT,
                    y: MT
                  } : null
                }
                var nT = this.state,
                  HT = nT.angleAxisMap,
                  kT = nT.radiusAxisMap;
                if (HT && kT) {
                  var jT = (0, wT.h)(HT);
                  return (0, tU.g)({
                    x: zT,
                    y: MT
                  }, jT)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var TT = this.props.children,
                  UT = this.getTooltipEventType(),
                  mT = (0, YT.h)(TT, iT.e),
                  WT = {};
                return mT && "axis" === UT && (WT = "click" === mT.props.trigger ? {
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
                }), em(em({}, (0, QU.i)(this.props, this.handleOuterEvent)), WT)
              }
            }, {
              key: "addListener",
              value: function() {
                XU.on(IU, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                XU.removeListener(IU, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(TT, UT, mT) {
                for (var WT = this.state.formattedGraphicalItems, zT = 0, MT = WT.length; zT < MT; zT++) {
                  var gT = WT[zT];
                  if (gT.item === TT || gT.props.key === TT.key || UT === (0, YT.l)(gT.item.type) && mT === gT.childIndex) return gT
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var TT = this.clipPathId,
                  UT = this.state.offset,
                  mT = UT.left,
                  zT = UT.top,
                  MT = UT.height,
                  gT = UT.width;
                return WT.createElement("defs", null, WT.createElement("clipPath", {
                  id: TT
                }, WT.createElement("rect", {
                  x: mT,
                  y: zT,
                  height: MT,
                  width: gT
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var TT = this.state.xAxisMap;
                return TT ? Object.entries(TT).reduce((function(TT, UT) {
                  var mT = lm(UT, 2),
                    WT = mT[0],
                    zT = mT[1];
                  return em(em({}, TT), {}, Ym({}, WT, zT.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var TT = this.state.yAxisMap;
                return TT ? Object.entries(TT).reduce((function(TT, UT) {
                  var mT = lm(UT, 2),
                    WT = mT[0],
                    zT = mT[1];
                  return em(em({}, TT), {}, Ym({}, WT, zT.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(TT) {
                var UT;
                return null === (UT = this.state.xAxisMap) || void 0 === UT || null === (UT = UT[TT]) || void 0 === UT ? void 0 : UT.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(TT) {
                var UT;
                return null === (UT = this.state.yAxisMap) || void 0 === UT || null === (UT = UT[TT]) || void 0 === UT ? void 0 : UT.scale
              }
            }, {
              key: "getItemByXY",
              value: function(TT) {
                var UT = this.state,
                  mT = UT.formattedGraphicalItems,
                  WT = UT.activeItem;
                if (mT && mT.length)
                  for (var zT = 0, MT = mT.length; zT < MT; zT++) {
                    var gT = mT[zT],
                      nT = gT.props,
                      HT = gT.item,
                      kT = void 0 !== HT.type.defaultProps ? em(em({}, HT.type.defaultProps), HT.props) : HT.props,
                      jT = (0, YT.l)(HT.type);
                    if ("Bar" === jT) {
                      var lT = (nT.data || []).find((function(UT) {
                        return (0, eT.e)(TT, UT)
                      }));
                      if (lT) return {
                        graphicalItem: gT,
                        payload: lT
                      }
                    } else if ("RadialBar" === jT) {
                      var LT = (nT.data || []).find((function(UT) {
                        return (0, tU.g)(TT, UT)
                      }));
                      if (LT) return {
                        graphicalItem: gT,
                        payload: LT
                      }
                    } else if ((0, CU.j)(gT, WT) || (0, CU.l)(gT, WT) || (0, CU.o)(gT, WT)) {
                      var pT = (0, CU.f)({
                          graphicalItem: gT,
                          activeTooltipItem: WT,
                          itemData: kT.data
                        }),
                        BT = void 0 === kT.activeIndex ? pT : kT.activeIndex;
                      return {
                        graphicalItem: em(em({}, gT), {}, {
                          childIndex: BT
                        }),
                        payload: (0, CU.o)(gT, WT) ? kT.data[pT] : gT.props.data[pT]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var TT = this;
                if (!(0, YT.C)(this)) return null;
                var UT, mT, zT = this.props,
                  MT = zT.children,
                  gT = zT.className,
                  nT = zT.width,
                  HT = zT.height,
                  kT = zT.style,
                  jT = zT.compact,
                  lT = zT.title,
                  LT = zT.desc,
                  pT = Lm(zT, Hm),
                  BT = (0, YT.b)(pT, !1);
                if (jT) return WT.createElement(gm.c, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, WT.createElement(fT.b, jm({}, BT, {
                  width: nT,
                  height: HT,
                  title: lT,
                  desc: LT
                }), this.renderClipPath(), (0, YT.z)(MT, this.renderMap)));
                this.props.accessibilityLayer && (BT.tabIndex = null !== (UT = this.props.tabIndex) && void 0 !== UT ? UT : 0, BT.role = null !== (mT = this.props.role) && void 0 !== mT ? mT : "application", BT.onKeyDown = function(UT) {
                  TT.accessibilityManager.keyboardEvent(UT)
                }, BT.onFocus = function() {
                  TT.accessibilityManager.focus()
                });
                var ZT = this.parseEventsOfWrapper();
                return WT.createElement(gm.c, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, WT.createElement("div", jm({
                  className: (0, cT.c)("recharts-wrapper", gT),
                  style: em({
                    position: "relative",
                    cursor: "default",
                    width: nT,
                    height: HT
                  }, kT)
                }, ZT, {
                  ref: function(UT) {
                    TT.container = UT
                  }
                }), WT.createElement(fT.b, jm({}, BT, {
                  width: nT,
                  height: HT,
                  title: lT,
                  desc: LT,
                  style: dm
                }), this.renderClipPath(), (0, YT.z)(MT, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], HT && pm(zT.prototype, HT), jT && pm(zT, jT), Object.defineProperty(zT, "prototype", {
              writable: !1
            }), zT;
            var zT, HT, jT
          }(WT.Component);
        Ym(aT, "displayName", UT), Ym(aT, "defaultProps", em({
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
        }, JT)), Ym(aT, "getDerivedStateFromProps", (function(TT, UT) {
          var mT = TT.dataKey,
            WT = TT.data,
            zT = TT.children,
            gT = TT.width,
            nT = TT.height,
            HT = TT.layout,
            kT = TT.stackOffset,
            jT = TT.margin,
            lT = UT.dataStartIndex,
            LT = UT.dataEndIndex;
          if (void 0 === UT.updateId) {
            var pT = Fm(TT);
            return em(em(em({}, pT), {}, {
              updateId: 0
            }, tT(em(em({
              props: TT
            }, pT), {}, {
              updateId: 0
            }), UT)), {}, {
              prevDataKey: mT,
              prevData: WT,
              prevWidth: gT,
              prevHeight: nT,
              prevLayout: HT,
              prevStackOffset: kT,
              prevMargin: jT,
              prevChildren: zT
            })
          }
          if (mT !== UT.prevDataKey || WT !== UT.prevData || gT !== UT.prevWidth || nT !== UT.prevHeight || HT !== UT.prevLayout || kT !== UT.prevStackOffset || !(0, aU.b)(jT, UT.prevMargin)) {
            var BT = Fm(TT),
              ZT = {
                chartX: UT.chartX,
                chartY: UT.chartY,
                isTooltipActive: UT.isTooltipActive
              },
              cT = em(em({}, Im(UT, WT, HT)), {}, {
                updateId: UT.updateId + 1
              }),
              vT = em(em(em({}, BT), ZT), cT);
            return em(em(em({}, vT), tT(em({
              props: TT
            }, vT), UT)), {}, {
              prevDataKey: mT,
              prevData: WT,
              prevWidth: gT,
              prevHeight: nT,
              prevLayout: HT,
              prevStackOffset: kT,
              prevMargin: jT,
              prevChildren: zT
            })
          }
          if (!(0, YT.t)(zT, UT.prevChildren)) {
            var fT, qT, iT, bT, OT = (0, YT.h)(zT, ET),
              eT = OT && null !== (fT = null === (qT = OT.props) || void 0 === qT ? void 0 : qT.startIndex) && void 0 !== fT ? fT : lT,
              JT = OT && null !== (iT = null === (bT = OT.props) || void 0 === bT ? void 0 : bT.endIndex) && void 0 !== iT ? iT : LT,
              xT = eT !== lT || JT !== LT,
              dT = !MT()(WT) && !xT ? UT.updateId : UT.updateId + 1;
            return em(em({
              updateId: dT
            }, tT(em(em({
              props: TT
            }, UT), {}, {
              updateId: dT,
              dataStartIndex: eT,
              dataEndIndex: JT
            }), UT)), {}, {
              prevChildren: zT,
              dataStartIndex: eT,
              dataEndIndex: JT
            })
          }
          return null
        })), Ym(aT, "renderActiveDot", (function(TT, UT, mT) {
          var zT;
          return zT = (0, WT.isValidElement)(TT) ? (0, WT.cloneElement)(TT, UT) : nT()(TT) ? TT(UT) : WT.createElement(OT.d, UT), WT.createElement(qT.e, {
            className: "recharts-active-dot",
            key: mT
          }, zT)
        }));
        var yT = (0, WT.forwardRef)((function(TT, UT) {
          return WT.createElement(aT, jm({}, TT, {
            ref: UT
          }))
        }));
        return yT.displayName = aT.displayName, yT
      }
  },
  6356: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    var WT = function(TT) {
      return null
    };
    WT.displayName = "Cell"
  },
  6320: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => tT
    });
    var WT = mT(63),
      zT = mT(5485),
      MT = mT.n(zT),
      gT = mT(5337),
      nT = mT.n(gT),
      HT = mT(5196),
      kT = mT.n(HT),
      jT = mT(5177),
      lT = mT(6210),
      LT = mT(5497),
      pT = mT(5254),
      BT = mT(6322);

    function ZT(TT) {
      return ZT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, ZT(TT)
    }
    var cT = ["offset"];

    function vT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return fT(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return fT(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return fT(TT, UT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function qT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function iT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function bT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? iT(Object(mT), !0).forEach((function(UT) {
          OT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : iT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function OT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != ZT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != ZT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == ZT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function eT() {
      return eT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, eT.apply(this, arguments)
    }
    var YT = function(TT) {
        var UT = TT.value,
          mT = TT.formatter,
          WT = MT()(TT.children) ? UT : TT.children;
        return nT()(mT) ? mT(WT) : WT
      },
      JT = function(TT, UT, mT) {
        var zT, gT, nT = TT.position,
          HT = TT.viewBox,
          kT = TT.offset,
          lT = TT.className,
          LT = HT,
          ZT = LT.cx,
          cT = LT.cy,
          vT = LT.innerRadius,
          fT = LT.outerRadius,
          qT = LT.startAngle,
          iT = LT.endAngle,
          bT = LT.clockWise,
          OT = (vT + fT) / 2,
          YT = function(TT, UT) {
            return (0, pT.D)(UT - TT) * Math.min(Math.abs(UT - TT), 360)
          }(qT, iT),
          JT = YT >= 0 ? 1 : -1;
        "insideStart" === nT ? (zT = qT + JT * kT, gT = bT) : "insideEnd" === nT ? (zT = iT - JT * kT, gT = !bT) : "end" === nT && (zT = iT + JT * kT, gT = bT), gT = YT <= 0 ? gT : !gT;
        var xT = (0, BT.i)(ZT, cT, OT, zT),
          dT = (0, BT.i)(ZT, cT, OT, zT + 359 * (gT ? 1 : -1)),
          wT = "M".concat(xT.x, ",").concat(xT.y, "\n    A").concat(OT, ",").concat(OT, ",0,1,").concat(gT ? 0 : 1, ",\n    ").concat(dT.x, ",").concat(dT.y),
          tT = MT()(TT.id) ? (0, pT.E)("recharts-radial-line-") : TT.id;
        return WT.createElement("text", eT({}, mT, {
          dominantBaseline: "central",
          className: (0, jT.c)("recharts-radial-bar-label", lT)
        }), WT.createElement("defs", null, WT.createElement("path", {
          id: tT,
          d: wT
        })), WT.createElement("textPath", {
          xlinkHref: "#".concat(tT)
        }, UT))
      },
      xT = function(TT) {
        var UT = TT.viewBox,
          mT = TT.offset,
          WT = TT.position,
          zT = UT,
          MT = zT.cx,
          gT = zT.cy,
          nT = zT.innerRadius,
          HT = zT.outerRadius,
          kT = (zT.startAngle + zT.endAngle) / 2;
        if ("outside" === WT) {
          var jT = (0, BT.i)(MT, gT, HT + mT, kT),
            lT = jT.x;
          return {
            x: lT,
            y: jT.y,
            textAnchor: lT >= MT ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === WT) return {
          x: MT,
          y: gT,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === WT) return {
          x: MT,
          y: gT,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === WT) return {
          x: MT,
          y: gT,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var LT = (nT + HT) / 2,
          pT = (0, BT.i)(MT, gT, LT, kT);
        return {
          x: pT.x,
          y: pT.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      dT = function(TT) {
        var UT = TT.viewBox,
          mT = TT.parentViewBox,
          WT = TT.offset,
          zT = TT.position,
          MT = UT,
          gT = MT.x,
          nT = MT.y,
          HT = MT.width,
          jT = MT.height,
          lT = jT >= 0 ? 1 : -1,
          LT = lT * WT,
          BT = lT > 0 ? "end" : "start",
          ZT = lT > 0 ? "start" : "end",
          cT = HT >= 0 ? 1 : -1,
          vT = cT * WT,
          fT = cT > 0 ? "end" : "start",
          qT = cT > 0 ? "start" : "end";
        if ("top" === zT) return bT(bT({}, {
          x: gT + HT / 2,
          y: nT - lT * WT,
          textAnchor: "middle",
          verticalAnchor: BT
        }), mT ? {
          height: Math.max(nT - mT.y, 0),
          width: HT
        } : {});
        if ("bottom" === zT) return bT(bT({}, {
          x: gT + HT / 2,
          y: nT + jT + LT,
          textAnchor: "middle",
          verticalAnchor: ZT
        }), mT ? {
          height: Math.max(mT.y + mT.height - (nT + jT), 0),
          width: HT
        } : {});
        if ("left" === zT) {
          var iT = {
            x: gT - vT,
            y: nT + jT / 2,
            textAnchor: fT,
            verticalAnchor: "middle"
          };
          return bT(bT({}, iT), mT ? {
            width: Math.max(iT.x - mT.x, 0),
            height: jT
          } : {})
        }
        if ("right" === zT) {
          var OT = {
            x: gT + HT + vT,
            y: nT + jT / 2,
            textAnchor: qT,
            verticalAnchor: "middle"
          };
          return bT(bT({}, OT), mT ? {
            width: Math.max(mT.x + mT.width - OT.x, 0),
            height: jT
          } : {})
        }
        var eT = mT ? {
          width: HT,
          height: jT
        } : {};
        return "insideLeft" === zT ? bT({
          x: gT + vT,
          y: nT + jT / 2,
          textAnchor: qT,
          verticalAnchor: "middle"
        }, eT) : "insideRight" === zT ? bT({
          x: gT + HT - vT,
          y: nT + jT / 2,
          textAnchor: fT,
          verticalAnchor: "middle"
        }, eT) : "insideTop" === zT ? bT({
          x: gT + HT / 2,
          y: nT + LT,
          textAnchor: "middle",
          verticalAnchor: ZT
        }, eT) : "insideBottom" === zT ? bT({
          x: gT + HT / 2,
          y: nT + jT - LT,
          textAnchor: "middle",
          verticalAnchor: BT
        }, eT) : "insideTopLeft" === zT ? bT({
          x: gT + vT,
          y: nT + LT,
          textAnchor: qT,
          verticalAnchor: ZT
        }, eT) : "insideTopRight" === zT ? bT({
          x: gT + HT - vT,
          y: nT + LT,
          textAnchor: fT,
          verticalAnchor: ZT
        }, eT) : "insideBottomLeft" === zT ? bT({
          x: gT + vT,
          y: nT + jT - LT,
          textAnchor: qT,
          verticalAnchor: BT
        }, eT) : "insideBottomRight" === zT ? bT({
          x: gT + HT - vT,
          y: nT + jT - LT,
          textAnchor: fT,
          verticalAnchor: BT
        }, eT) : kT()(zT) && ((0, pT.x)(zT.x) || (0, pT.z)(zT.x)) && ((0, pT.x)(zT.y) || (0, pT.z)(zT.y)) ? bT({
          x: gT + (0, pT.n)(zT.x, HT),
          y: nT + (0, pT.n)(zT.y, jT),
          textAnchor: "end",
          verticalAnchor: "end"
        }, eT) : bT({
          x: gT + HT / 2,
          y: nT + jT / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, eT)
      },
      wT = function(TT) {
        return "cx" in TT && (0, pT.x)(TT.cx)
      };

    function tT(TT) {
      var UT, mT = TT.offset,
        zT = bT({
          offset: void 0 === mT ? 5 : mT
        }, qT(TT, cT)),
        gT = zT.viewBox,
        HT = zT.position,
        kT = zT.value,
        pT = zT.children,
        BT = zT.content,
        ZT = zT.className,
        vT = void 0 === ZT ? "" : ZT,
        fT = zT.textBreakAll;
      if (!gT || MT()(kT) && MT()(pT) && !(0, WT.isValidElement)(BT) && !nT()(BT)) return null;
      if ((0, WT.isValidElement)(BT)) return (0, WT.cloneElement)(BT, zT);
      if (nT()(BT)) {
        if (UT = (0, WT.createElement)(BT, zT), (0, WT.isValidElement)(UT)) return UT
      } else UT = YT(zT);
      var iT = wT(gT),
        OT = (0, LT.b)(zT, !0);
      if (iT && ("insideStart" === HT || "insideEnd" === HT || "end" === HT)) return JT(zT, UT, OT);
      var tT = iT ? xT(zT) : dT(zT);
      return WT.createElement(lT.b, eT({
        className: (0, jT.c)("recharts-label", vT)
      }, OT, tT, {
        breakAll: fT
      }), UT)
    }
    tT.displayName = "Label";
    var aT = function(TT) {
      var UT = TT.cx,
        mT = TT.cy,
        WT = TT.angle,
        zT = TT.startAngle,
        MT = TT.endAngle,
        gT = TT.r,
        nT = TT.radius,
        HT = TT.innerRadius,
        kT = TT.outerRadius,
        jT = TT.x,
        lT = TT.y,
        LT = TT.top,
        BT = TT.left,
        ZT = TT.width,
        cT = TT.height,
        vT = TT.clockWise,
        fT = TT.labelViewBox;
      if (fT) return fT;
      if ((0, pT.x)(ZT) && (0, pT.x)(cT)) {
        if ((0, pT.x)(jT) && (0, pT.x)(lT)) return {
          x: jT,
          y: lT,
          width: ZT,
          height: cT
        };
        if ((0, pT.x)(LT) && (0, pT.x)(BT)) return {
          x: LT,
          y: BT,
          width: ZT,
          height: cT
        }
      }
      return (0, pT.x)(jT) && (0, pT.x)(lT) ? {
        x: jT,
        y: lT,
        width: 0,
        height: 0
      } : (0, pT.x)(UT) && (0, pT.x)(mT) ? {
        cx: UT,
        cy: mT,
        startAngle: zT || WT || 0,
        endAngle: MT || WT || 0,
        innerRadius: HT || 0,
        outerRadius: kT || nT || gT || 0,
        clockWise: vT
      } : TT.viewBox ? TT.viewBox : {}
    };
    tT.parseViewBox = aT, tT.renderCallByParent = function(TT, UT) {
      var mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!TT || !TT.children && mT && !TT.label) return null;
      var zT = TT.children,
        MT = aT(TT),
        gT = (0, LT.d)(zT, tT).map((function(TT, mT) {
          return (0, WT.cloneElement)(TT, {
            viewBox: UT || MT,
            key: "label-".concat(mT)
          })
        }));
      if (!mT) return gT;
      var HT = function(TT, UT) {
        return TT ? !0 === TT ? WT.createElement(tT, {
          key: "label-implicit",
          viewBox: UT
        }) : (0, pT.w)(TT) ? WT.createElement(tT, {
          key: "label-implicit",
          viewBox: UT,
          value: TT
        }) : (0, WT.isValidElement)(TT) ? TT.type === tT ? (0, WT.cloneElement)(TT, {
          key: "label-implicit",
          viewBox: UT
        }) : WT.createElement(tT, {
          key: "label-implicit",
          content: TT,
          viewBox: UT
        }) : nT()(TT) ? WT.createElement(tT, {
          key: "label-implicit",
          content: TT,
          viewBox: UT
        }) : kT()(TT) ? WT.createElement(tT, eT({
          viewBox: UT
        }, TT, {
          key: "label-implicit"
        })) : null : null
      }(TT.label, UT || MT);
      return [HT].concat(vT(gT))
    }
  },
  6361: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => dT
    });
    var WT = mT(63),
      zT = mT(5485),
      MT = mT.n(zT),
      gT = mT(5196),
      nT = mT.n(gT),
      HT = mT(5337),
      kT = mT.n(HT),
      jT = mT(6366),
      lT = mT.n(jT),
      LT = mT(6320),
      pT = mT(6056),
      BT = mT(5497),
      ZT = mT(6218);

    function cT(TT) {
      return cT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, cT(TT)
    }
    var vT = ["valueAccessor"],
      fT = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function qT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return iT(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return iT(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return iT(TT, UT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function bT() {
      return bT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, bT.apply(this, arguments)
    }

    function OT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function eT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? OT(Object(mT), !0).forEach((function(UT) {
          YT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : OT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function YT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != cT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != cT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == cT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function JT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }
    var xT = function(TT) {
      return Array.isArray(TT.value) ? lT()(TT.value) : TT.value
    };

    function dT(TT) {
      var UT = TT.valueAccessor,
        mT = void 0 === UT ? xT : UT,
        zT = JT(TT, vT),
        gT = zT.data,
        nT = zT.dataKey,
        HT = zT.clockWise,
        kT = zT.id,
        jT = zT.textBreakAll,
        lT = JT(zT, fT);
      return gT && gT.length ? WT.createElement(pT.e, {
        className: "recharts-label-list"
      }, gT.map((function(TT, UT) {
        var zT = MT()(nT) ? mT(TT, UT) : (0, ZT._)(TT && TT.payload, nT),
          gT = MT()(kT) ? {} : {
            id: "".concat(kT, "-").concat(UT)
          };
        return WT.createElement(LT.d, bT({}, (0, BT.b)(TT, !0), lT, gT, {
          parentViewBox: TT.parentViewBox,
          value: zT,
          textBreakAll: jT,
          viewBox: LT.d.parseViewBox(MT()(HT) ? TT : eT(eT({}, TT), {}, {
            clockWise: HT
          })),
          key: "label-".concat(UT),
          index: UT
        }))
      }))) : null
    }
    dT.displayName = "LabelList", dT.renderCallByParent = function(TT, UT) {
      var mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!TT || !TT.children && mT && !TT.label) return null;
      var zT = TT.children,
        MT = (0, BT.d)(zT, dT).map((function(TT, mT) {
          return (0, WT.cloneElement)(TT, {
            data: UT,
            key: "labelList-".concat(mT)
          })
        }));
      return mT ? [function(TT, UT) {
        return TT ? !0 === TT ? WT.createElement(dT, {
          key: "labelList-implicit",
          data: UT
        }) : WT.isValidElement(TT) || kT()(TT) ? WT.createElement(dT, {
          key: "labelList-implicit",
          data: UT,
          content: TT
        }) : nT()(TT) ? WT.createElement(dT, bT({
          data: UT
        }, TT, {
          key: "labelList-implicit"
        })) : null : null
      }(TT.label, UT)].concat(qT(MT)) : MT
    }
  },
  6134: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => VT
    });
    var WT = mT(63),
      zT = mT(5337),
      MT = mT.n(zT),
      gT = mT(5177),
      nT = mT(5491),
      HT = mT(6050),
      kT = mT(6137),
      jT = mT(5517);

    function lT(TT) {
      return lT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, lT(TT)
    }

    function LT() {
      return LT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, LT.apply(this, arguments)
    }

    function pT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function BT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, iT(WT.key), WT)
      }
    }

    function ZT(TT, UT, mT) {
      return UT = vT(UT),
        function(TT, UT) {
          if (UT && ("object" === lT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, cT() ? Reflect.construct(UT, mT || [], vT(TT).constructor) : UT.apply(TT, mT))
    }

    function cT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (cT = function() {
        return !!TT
      })()
    }

    function vT(TT) {
      return vT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, vT(TT)
    }

    function fT(TT, UT) {
      return fT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, fT(TT, UT)
    }

    function qT(TT, UT, mT) {
      return (UT = iT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function iT(TT) {
      var UT = function(TT, UT) {
        if ("object" != lT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != lT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == lT(UT) ? UT : UT + ""
    }
    var bT = 32,
      OT = function(TT) {
        function UT() {
          return function(TT, UT) {
            if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
          }(this, UT), ZT(this, UT, arguments)
        }
        return function(TT, UT) {
          if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
          TT.prototype = Object.create(UT && UT.prototype, {
            constructor: {
              value: TT,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(TT, "prototype", {
            writable: !1
          }), UT && fT(TT, UT)
        }(UT, TT), mT = UT, zT = [{
          key: "renderIcon",
          value: function(TT) {
            var UT = this.props.inactiveColor,
              mT = 16,
              zT = bT / 6,
              MT = bT / 3,
              gT = TT.inactive ? UT : TT.color;
            if ("plainline" === TT.type) return WT.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: gT,
              strokeDasharray: TT.payload.strokeDasharray,
              x1: 0,
              y1: mT,
              x2: bT,
              y2: mT,
              className: "recharts-legend-icon"
            });
            if ("line" === TT.type) return WT.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: gT,
              d: "M0,".concat(mT, "h").concat(MT, "\n            A").concat(zT, ",").concat(zT, ",0,1,1,").concat(2 * MT, ",").concat(mT, "\n            H").concat(bT, "M").concat(2 * MT, ",").concat(mT, "\n            A").concat(zT, ",").concat(zT, ",0,1,1,").concat(MT, ",").concat(mT),
              className: "recharts-legend-icon"
            });
            if ("rect" === TT.type) return WT.createElement("path", {
              stroke: "none",
              fill: gT,
              d: "M0,".concat(4, "h").concat(bT, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (WT.isValidElement(TT.legendIcon)) {
              var nT = function(TT) {
                for (var UT = 1; UT < arguments.length; UT++) {
                  var mT = null != arguments[UT] ? arguments[UT] : {};
                  UT % 2 ? pT(Object(mT), !0).forEach((function(UT) {
                    qT(TT, UT, mT[UT])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : pT(Object(mT)).forEach((function(UT) {
                    Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
                  }))
                }
                return TT
              }({}, TT);
              return delete nT.legendIcon, WT.cloneElement(TT.legendIcon, nT)
            }
            return WT.createElement(kT.e, {
              fill: gT,
              cx: mT,
              cy: mT,
              size: bT,
              sizeType: "diameter",
              type: TT.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var TT = this,
              UT = this.props,
              mT = UT.payload,
              zT = UT.iconSize,
              kT = UT.layout,
              lT = UT.formatter,
              pT = UT.inactiveColor,
              BT = {
                x: 0,
                y: 0,
                width: bT,
                height: bT
              },
              ZT = {
                display: "horizontal" === kT ? "inline-block" : "block",
                marginRight: 10
              },
              cT = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return mT.map((function(UT, mT) {
              var kT = UT.formatter || lT,
                vT = (0, gT.c)(qT(qT({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(mT), !0), "inactive", UT.inactive));
              if ("none" === UT.type) return null;
              var fT = MT()(UT.value) ? null : UT.value;
              (0, nT.e)(!MT()(UT.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var iT = UT.inactive ? pT : UT.color;
              return WT.createElement("li", LT({
                className: vT,
                style: ZT,
                key: "legend-item-".concat(mT)
              }, (0, jT.m)(TT.props, UT, mT)), WT.createElement(HT.b, {
                width: zT,
                height: zT,
                viewBox: BT,
                style: cT
              }, TT.renderIcon(UT)), WT.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: iT
                }
              }, kT ? kT(fT, UT, mT) : fT))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var TT = this.props,
              UT = TT.payload,
              mT = TT.layout,
              zT = TT.align;
            if (!UT || !UT.length) return null;
            var MT = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === mT ? zT : "left"
            };
            return WT.createElement("ul", {
              className: "recharts-default-legend",
              style: MT
            }, this.renderItems())
          }
        }], zT && BT(mT.prototype, zT), lT && BT(mT, lT), Object.defineProperty(mT, "prototype", {
          writable: !1
        }), mT;
        var mT, zT, lT
      }(WT.PureComponent);
    qT(OT, "displayName", "Legend"), qT(OT, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var eT = mT(5254),
      YT = mT(6073);

    function JT(TT) {
      return JT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, JT(TT)
    }
    var xT = ["ref"];

    function dT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function wT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? dT(Object(mT), !0).forEach((function(UT) {
          QT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : dT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function tT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, sT(WT.key), WT)
      }
    }

    function aT(TT, UT, mT) {
      return UT = XT(UT),
        function(TT, UT) {
          if (UT && ("object" === JT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, yT() ? Reflect.construct(UT, mT || [], XT(TT).constructor) : UT.apply(TT, mT))
    }

    function yT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (yT = function() {
        return !!TT
      })()
    }

    function XT(TT) {
      return XT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, XT(TT)
    }

    function IT(TT, UT) {
      return IT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, IT(TT, UT)
    }

    function QT(TT, UT, mT) {
      return (UT = sT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function sT(TT) {
      var UT = function(TT, UT) {
        if ("object" != JT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != JT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == JT(UT) ? UT : UT + ""
    }

    function FT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function PT(TT) {
      return TT.value
    }
    var VT = function(TT) {
      function UT() {
        var TT;
        ! function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, UT);
        for (var mT = arguments.length, WT = new Array(mT), zT = 0; zT < mT; zT++) WT[zT] = arguments[zT];
        return QT(TT = aT(this, UT, [].concat(WT)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), TT
      }
      return function(TT, UT) {
        if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(UT && UT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), UT && IT(TT, UT)
      }(UT, TT), mT = UT, MT = [{
        key: "getWithHeight",
        value: function(TT, UT) {
          var mT = wT(wT({}, this.defaultProps), TT.props).layout;
          return "vertical" === mT && (0, eT.x)(TT.props.height) ? {
            height: TT.props.height
          } : "horizontal" === mT ? {
            width: TT.props.width || UT
          } : null
        }
      }], (zT = [{
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
            var TT = this.wrapperNode.getBoundingClientRect();
            return TT.height = this.wrapperNode.offsetHeight, TT.width = this.wrapperNode.offsetWidth, TT
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var TT = this.props.onBBoxUpdate,
            UT = this.getBBox();
          UT ? (Math.abs(UT.width - this.lastBoundingBox.width) > 1 || Math.abs(UT.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = UT.width, this.lastBoundingBox.height = UT.height, TT && TT(UT)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, TT && TT(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? wT({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(TT) {
          var UT, mT, WT = this.props,
            zT = WT.layout,
            MT = WT.align,
            gT = WT.verticalAlign,
            nT = WT.margin,
            HT = WT.chartWidth,
            kT = WT.chartHeight;
          return TT && (void 0 !== TT.left && null !== TT.left || void 0 !== TT.right && null !== TT.right) || (UT = "center" === MT && "vertical" === zT ? {
            left: ((HT || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === MT ? {
            right: nT && nT.right || 0
          } : {
            left: nT && nT.left || 0
          }), TT && (void 0 !== TT.top && null !== TT.top || void 0 !== TT.bottom && null !== TT.bottom) || (mT = "middle" === gT ? {
            top: ((kT || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === gT ? {
            bottom: nT && nT.bottom || 0
          } : {
            top: nT && nT.top || 0
          }), wT(wT({}, UT), mT)
        }
      }, {
        key: "render",
        value: function() {
          var TT = this,
            UT = this.props,
            mT = UT.content,
            zT = UT.width,
            MT = UT.height,
            gT = UT.wrapperStyle,
            nT = UT.payloadUniqBy,
            HT = UT.payload,
            kT = wT(wT({
              position: "absolute",
              width: zT || "auto",
              height: MT || "auto"
            }, this.getDefaultPosition(gT)), gT);
          return WT.createElement("div", {
            className: "recharts-legend-wrapper",
            style: kT,
            ref: function(UT) {
              TT.wrapperNode = UT
            }
          }, function(TT, UT) {
            if (WT.isValidElement(TT)) return WT.cloneElement(TT, UT);
            if ("function" === typeof TT) return WT.createElement(TT, UT);
            UT.ref;
            var mT = FT(UT, xT);
            return WT.createElement(OT, mT)
          }(mT, wT(wT({}, this.props), {}, {
            payload: (0, YT.d)(HT, nT, PT)
          })))
        }
      }]) && tT(mT.prototype, zT), MT && tT(mT, MT), Object.defineProperty(mT, "prototype", {
        writable: !1
      }), mT;
      var mT, zT, MT
    }(WT.PureComponent);
    QT(VT, "displayName", "Legend"), QT(VT, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  5170: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => cT
    });
    var WT = mT(5177),
      zT = mT(63),
      MT = mT(5186),
      gT = mT.n(MT),
      nT = mT(5254),
      HT = mT(5491),
      kT = mT(5497);

    function jT(TT) {
      return jT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, jT(TT)
    }

    function lT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function LT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? lT(Object(mT), !0).forEach((function(UT) {
          pT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : lT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function pT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != jT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != jT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == jT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function BT(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        var mT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != mT) {
          var WT, zT, MT, gT, nT = [],
            HT = !0,
            kT = !1;
          try {
            if (MT = (mT = mT.call(TT)).next, 0 === UT) {
              if (Object(mT) !== mT) return;
              HT = !1
            } else
              for (; !(HT = (WT = MT.call(mT)).done) && (nT.push(WT.value), nT.length !== UT); HT = !0);
          } catch (TT) {
            kT = !0, zT = TT
          } finally {
            try {
              if (!HT && null != mT.return && (gT = mT.return(), Object(gT) !== gT)) return
            } finally {
              if (kT) throw zT
            }
          }
          return nT
        }
      }(TT, UT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return ZT(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return ZT(TT, UT)
      }(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ZT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }
    var cT = (0, zT.forwardRef)((function(TT, UT) {
      var mT = TT.aspect,
        MT = TT.initialDimension,
        jT = void 0 === MT ? {
          width: -1,
          height: -1
        } : MT,
        lT = TT.width,
        pT = void 0 === lT ? "100%" : lT,
        ZT = TT.height,
        cT = void 0 === ZT ? "100%" : ZT,
        vT = TT.minWidth,
        fT = void 0 === vT ? 0 : vT,
        qT = TT.minHeight,
        iT = TT.maxHeight,
        bT = TT.children,
        OT = TT.debounce,
        eT = void 0 === OT ? 0 : OT,
        YT = TT.id,
        JT = TT.className,
        xT = TT.Qq,
        dT = TT.style,
        wT = void 0 === dT ? {} : dT,
        tT = (0, zT.useRef)(null),
        aT = (0, zT.useRef)();
      aT.current = xT, (0, zT.useImperativeHandle)(UT, (function() {
        return Object.defineProperty(tT.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), tT.current
          },
          configurable: !0
        })
      }));
      var yT = BT((0, zT.useState)({
          containerWidth: jT.width,
          containerHeight: jT.height
        }), 2),
        XT = yT[0],
        IT = yT[1],
        QT = (0, zT.useCallback)((function(TT, UT) {
          IT((function(mT) {
            var WT = Math.round(TT),
              zT = Math.round(UT);
            return mT.containerWidth === WT && mT.containerHeight === zT ? mT : {
              containerWidth: WT,
              containerHeight: zT
            }
          }))
        }), []);
      (0, zT.useEffect)((function() {
        var TT = function(TT) {
          var UT, mT = TT[0].contentRect,
            WT = mT.width,
            zT = mT.height;
          QT(WT, zT), null === (UT = aT.current) || void 0 === UT || UT.call(aT, WT, zT)
        };
        eT > 0 && (TT = gT()(TT, eT, {
          trailing: !0,
          leading: !1
        }));
        var UT = new ResizeObserver(TT),
          mT = tT.current.getBoundingClientRect(),
          WT = mT.width,
          zT = mT.height;
        return QT(WT, zT), UT.observe(tT.current),
          function() {
            UT.disconnect()
          }
      }), [QT, eT]);
      var sT = (0, zT.useMemo)((function() {
        var TT = XT.containerWidth,
          UT = XT.containerHeight;
        if (TT < 0 || UT < 0) return null;
        (0, HT.e)((0, nT.z)(pT) || (0, nT.z)(cT), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", pT, cT), (0, HT.e)(!mT || mT > 0, "The aspect(%s) must be greater than zero.", mT);
        var WT = (0, nT.z)(pT) ? TT : pT,
          MT = (0, nT.z)(cT) ? UT : cT;
        mT && mT > 0 && (WT ? MT = WT / mT : MT && (WT = MT * mT), iT && MT > iT && (MT = iT)), (0, HT.e)(WT > 0 || MT > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", WT, MT, pT, cT, fT, qT, mT);
        var gT = !Array.isArray(bT) && (0, kT.l)(bT.type).endsWith("Chart");
        return zT.Children.map(bT, (function(TT) {
          return zT.isValidElement(TT) ? (0, zT.cloneElement)(TT, LT({
            width: WT,
            height: MT
          }, gT ? {
            style: LT({
              height: "100%",
              width: "100%",
              maxHeight: MT,
              maxWidth: WT
            }, TT.props.style)
          } : {})) : TT
        }))
      }), [mT, bT, cT, iT, qT, fT, XT, pT]);
      return zT.createElement("div", {
        id: YT ? "".concat(YT) : void 0,
        className: (0, WT.c)("recharts-responsive-container", JT),
        style: LT(LT({}, wT), {}, {
          width: pT,
          height: cT,
          minWidth: fT,
          minHeight: qT,
          maxHeight: iT
        }),
        ref: tT
      }, sT)
    }))
  },
  6210: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => uT
    });
    var WT = mT(63),
      zT = mT(5485),
      MT = mT.n(zT),
      gT = mT(5177),
      nT = mT(5254),
      HT = mT(6067),
      kT = mT(5497),
      jT = mT(6212);

    function lT(TT) {
      return lT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, lT(TT)
    }

    function LT(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        var mT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != mT) {
          var WT, zT, MT, gT, nT = [],
            HT = !0,
            kT = !1;
          try {
            if (MT = (mT = mT.call(TT)).next, 0 === UT) {
              if (Object(mT) !== mT) return;
              HT = !1
            } else
              for (; !(HT = (WT = MT.call(mT)).done) && (nT.push(WT.value), nT.length !== UT); HT = !0);
          } catch (TT) {
            kT = !0, zT = TT
          } finally {
            try {
              if (!HT && null != mT.return && (gT = mT.return(), Object(gT) !== gT)) return
            } finally {
              if (kT) throw zT
            }
          }
          return nT
        }
      }(TT, UT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return pT(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return pT(TT, UT)
      }(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function BT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, ZT(WT.key), WT)
      }
    }

    function ZT(TT) {
      var UT = function(TT, UT) {
        if ("object" != lT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != lT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == lT(UT) ? UT : UT + ""
    }
    var cT = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      vT = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      fT = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      qT = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      iT = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      bT = Object.keys(iT),
      OT = "NaN";
    var eT = function() {
      function TT(UT, mT) {
        ! function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, TT), this.num = UT, this.unit = mT, this.num = UT, this.unit = mT, Number.isNaN(UT) && (this.unit = ""), "" === mT || fT.test(mT) || (this.num = NaN, this.unit = ""), bT.includes(mT) && (this.num = function(TT, UT) {
          return TT * iT[UT]
        }(UT, mT), this.unit = "px")
      }
      return UT = TT, WT = [{
        key: "parse",
        value: function(UT) {
          var mT, WT = LT(null !== (mT = qT.exec(UT)) && void 0 !== mT ? mT : [], 3),
            zT = WT[1],
            MT = WT[2];
          return new TT(parseFloat(zT), null !== MT && void 0 !== MT ? MT : "")
        }
      }], (mT = [{
        key: "add",
        value: function(UT) {
          return this.unit !== UT.unit ? new TT(NaN, "") : new TT(this.num + UT.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(UT) {
          return this.unit !== UT.unit ? new TT(NaN, "") : new TT(this.num - UT.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(UT) {
          return "" !== this.unit && "" !== UT.unit && this.unit !== UT.unit ? new TT(NaN, "") : new TT(this.num * UT.num, this.unit || UT.unit)
        }
      }, {
        key: "divide",
        value: function(UT) {
          return "" !== this.unit && "" !== UT.unit && this.unit !== UT.unit ? new TT(NaN, "") : new TT(this.num / UT.num, this.unit || UT.unit)
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
      }]) && BT(UT.prototype, mT), WT && BT(UT, WT), Object.defineProperty(UT, "prototype", {
        writable: !1
      }), UT;
      var UT, mT, WT
    }();

    function YT(TT) {
      if (TT.includes(OT)) return OT;
      for (var UT = TT; UT.includes("*") || UT.includes("/");) {
        var mT, WT = LT(null !== (mT = cT.exec(UT)) && void 0 !== mT ? mT : [], 4),
          zT = WT[1],
          MT = WT[2],
          gT = WT[3],
          nT = eT.parse(null !== zT && void 0 !== zT ? zT : ""),
          HT = eT.parse(null !== gT && void 0 !== gT ? gT : ""),
          kT = "*" === MT ? nT.multiply(HT) : nT.divide(HT);
        if (kT.isNaN()) return OT;
        UT = UT.replace(cT, kT.toString())
      }
      for (; UT.includes("+") || /.-\d+(?:\.\d+)?/.test(UT);) {
        var jT, lT = LT(null !== (jT = vT.exec(UT)) && void 0 !== jT ? jT : [], 4),
          pT = lT[1],
          BT = lT[2],
          ZT = lT[3],
          fT = eT.parse(null !== pT && void 0 !== pT ? pT : ""),
          qT = eT.parse(null !== ZT && void 0 !== ZT ? ZT : ""),
          iT = "+" === BT ? fT.add(qT) : fT.subtract(qT);
        if (iT.isNaN()) return OT;
        UT = UT.replace(vT, iT.toString())
      }
      return UT
    }
    var JT = /\(([^()]*)\)/;

    function xT(TT) {
      var UT = TT.replace(/\s+/g, "");
      return UT = function(TT) {
        for (var UT = TT; UT.includes("(");) {
          var mT = LT(JT.exec(UT), 2)[1];
          UT = UT.replace(JT, YT(mT))
        }
        return UT
      }(UT), UT = YT(UT)
    }

    function dT(TT) {
      var UT = function(TT) {
        try {
          return xT(TT)
        } catch (UT) {
          return OT
        }
      }(TT.slice(5, -1));
      return UT === OT ? "" : UT
    }
    var wT = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      tT = ["dx", "dy", "angle", "className", "breakAll"];

    function aT() {
      return aT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, aT.apply(this, arguments)
    }

    function yT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function XT(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        var mT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != mT) {
          var WT, zT, MT, gT, nT = [],
            HT = !0,
            kT = !1;
          try {
            if (MT = (mT = mT.call(TT)).next, 0 === UT) {
              if (Object(mT) !== mT) return;
              HT = !1
            } else
              for (; !(HT = (WT = MT.call(mT)).done) && (nT.push(WT.value), nT.length !== UT); HT = !0);
          } catch (TT) {
            kT = !0, zT = TT
          } finally {
            try {
              if (!HT && null != mT.return && (gT = mT.return(), Object(gT) !== gT)) return
            } finally {
              if (kT) throw zT
            }
          }
          return nT
        }
      }(TT, UT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return IT(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return IT(TT, UT)
      }(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }
    var QT = /[ \f\n\r\t\v\u2028\u2029]+/,
      sT = function(TT) {
        var UT = TT.children,
          mT = TT.breakAll,
          WT = TT.style;
        try {
          var zT = [];
          return MT()(UT) || (zT = mT ? UT.toString().split("") : UT.toString().split(QT)), {
            wordsWithComputedWidth: zT.map((function(TT) {
              return {
                word: TT,
                width: (0, jT.f)(TT, WT).width
              }
            })),
            spaceWidth: mT ? 0 : (0, jT.f)("\xa0", WT).width
          }
        } catch (gT) {
          return null
        }
      },
      FT = function(TT) {
        return [{
          words: MT()(TT) ? [] : TT.toString().split(QT)
        }]
      },
      PT = function(TT) {
        var UT = TT.width,
          mT = TT.scaleToFit,
          WT = TT.children,
          zT = TT.style,
          MT = TT.breakAll,
          gT = TT.maxLines;
        if ((UT || mT) && !HT.c.isSsr) {
          var kT = sT({
            breakAll: MT,
            children: WT,
            style: zT
          });
          return kT ? function(TT, UT, mT, WT, zT) {
            var MT = TT.maxLines,
              gT = TT.children,
              HT = TT.style,
              kT = TT.breakAll,
              jT = (0, nT.x)(MT),
              lT = gT,
              LT = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(TT, UT) {
                  var MT = UT.word,
                    gT = UT.width,
                    nT = TT[TT.length - 1];
                  if (nT && (null == WT || zT || nT.width + gT + mT < Number(WT))) nT.words.push(MT), nT.width += gT + mT;
                  else {
                    var HT = {
                      words: [MT],
                      width: gT
                    };
                    TT.push(HT)
                  }
                  return TT
                }), [])
              },
              pT = LT(UT);
            if (!jT) return pT;
            for (var BT, ZT = function(TT) {
                var UT = lT.slice(0, TT),
                  mT = sT({
                    breakAll: kT,
                    style: HT,
                    children: UT + "\u2026"
                  }).wordsWithComputedWidth,
                  zT = LT(mT),
                  gT = zT.length > MT || function(TT) {
                    return TT.reduce((function(TT, UT) {
                      return TT.width > UT.width ? TT : UT
                    }))
                  }(zT).width > Number(WT);
                return [gT, zT]
              }, cT = 0, vT = lT.length - 1, fT = 0; cT <= vT && fT <= lT.length - 1;) {
              var qT = Math.floor((cT + vT) / 2),
                iT = XT(ZT(qT - 1), 2),
                bT = iT[0],
                OT = iT[1],
                eT = XT(ZT(qT), 1)[0];
              if (bT || eT || (cT = qT + 1), bT && eT && (vT = qT - 1), !bT && eT) {
                BT = OT;
                break
              }
              fT++
            }
            return BT || pT
          }({
            breakAll: MT,
            children: WT,
            maxLines: gT,
            style: zT
          }, kT.wordsWithComputedWidth, kT.spaceWidth, UT, mT) : FT(WT)
        }
        return FT(WT)
      },
      VT = "#808080",
      uT = function(TT) {
        var UT = TT.x,
          mT = void 0 === UT ? 0 : UT,
          zT = TT.y,
          MT = void 0 === zT ? 0 : zT,
          HT = TT.lineHeight,
          jT = void 0 === HT ? "1em" : HT,
          lT = TT.capHeight,
          LT = void 0 === lT ? "0.71em" : lT,
          pT = TT.scaleToFit,
          BT = void 0 !== pT && pT,
          ZT = TT.textAnchor,
          cT = void 0 === ZT ? "start" : ZT,
          vT = TT.verticalAnchor,
          fT = void 0 === vT ? "end" : vT,
          qT = TT.fill,
          iT = void 0 === qT ? VT : qT,
          bT = yT(TT, wT),
          OT = (0, WT.useMemo)((function() {
            return PT({
              breakAll: bT.breakAll,
              children: bT.children,
              maxLines: bT.maxLines,
              scaleToFit: BT,
              style: bT.style,
              width: bT.width
            })
          }), [bT.breakAll, bT.children, bT.maxLines, BT, bT.style, bT.width]),
          eT = bT.dx,
          YT = bT.dy,
          JT = bT.angle,
          xT = bT.className,
          XT = bT.breakAll,
          IT = yT(bT, tT);
        if (!(0, nT.w)(mT) || !(0, nT.w)(MT)) return null;
        var QT, sT = mT + ((0, nT.x)(eT) ? eT : 0),
          FT = MT + ((0, nT.x)(YT) ? YT : 0);
        switch (fT) {
          case "start":
            QT = dT("calc(".concat(LT, ")"));
            break;
          case "middle":
            QT = dT("calc(".concat((OT.length - 1) / 2, " * -").concat(jT, " + (").concat(LT, " / 2))"));
            break;
          default:
            QT = dT("calc(".concat(OT.length - 1, " * -").concat(jT, ")"))
        }
        var uT = [];
        if (BT) {
          var CT = OT[0].width,
            rT = bT.width;
          uT.push("scale(".concat(((0, nT.x)(rT) ? rT / CT : 1) / CT, ")"))
        }
        return JT && uT.push("rotate(".concat(JT, ", ").concat(sT, ", ").concat(FT, ")")), uT.length && (IT.transform = uT.join(" ")), WT.createElement("text", aT({}, (0, kT.b)(IT, !0), {
          x: sT,
          y: FT,
          className: (0, gT.c)("recharts-text", xT),
          textAnchor: cT,
          fill: iT.includes("url") ? VT : iT
        }), OT.map((function(TT, UT) {
          var mT = TT.words.join(XT ? "" : " ");
          return WT.createElement("tspan", {
            x: sT,
            dy: 0 === UT ? QT : jT,
            key: "".concat(mT, "-").concat(UT)
          }, mT)
        })))
      }
  },
  6065: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => oT
    });
    var WT = mT(63),
      zT = mT(5581),
      MT = mT.n(zT),
      gT = mT(5485),
      nT = mT.n(gT),
      HT = mT(5177),
      kT = mT(5254);

    function jT(TT) {
      return jT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, jT(TT)
    }

    function lT() {
      return lT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, lT.apply(this, arguments)
    }

    function LT(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        var mT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != mT) {
          var WT, zT, MT, gT, nT = [],
            HT = !0,
            kT = !1;
          try {
            if (MT = (mT = mT.call(TT)).next, 0 === UT) {
              if (Object(mT) !== mT) return;
              HT = !1
            } else
              for (; !(HT = (WT = MT.call(mT)).done) && (nT.push(WT.value), nT.length !== UT); HT = !0);
          } catch (TT) {
            kT = !0, zT = TT
          } finally {
            try {
              if (!HT && null != mT.return && (gT = mT.return(), Object(gT) !== gT)) return
            } finally {
              if (kT) throw zT
            }
          }
          return nT
        }
      }(TT, UT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return pT(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return pT(TT, UT)
      }(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function BT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function ZT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? BT(Object(mT), !0).forEach((function(UT) {
          cT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : BT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function cT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != jT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != jT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == jT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function vT(TT) {
      return Array.isArray(TT) && (0, kT.w)(TT[0]) && (0, kT.w)(TT[1]) ? TT.join(" ~ ") : TT
    }
    var fT = function(TT) {
      var UT = TT.separator,
        mT = void 0 === UT ? " : " : UT,
        zT = TT.contentStyle,
        gT = void 0 === zT ? {} : zT,
        jT = TT.itemStyle,
        pT = void 0 === jT ? {} : jT,
        BT = TT.labelStyle,
        cT = void 0 === BT ? {} : BT,
        fT = TT.payload,
        qT = TT.formatter,
        iT = TT.itemSorter,
        bT = TT.wrapperClassName,
        OT = TT.labelClassName,
        eT = TT.label,
        YT = TT.labelFormatter,
        JT = TT.accessibilityLayer,
        xT = void 0 !== JT && JT,
        dT = ZT({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, gT),
        wT = ZT({
          margin: 0
        }, cT),
        tT = !nT()(eT),
        aT = tT ? eT : "",
        yT = (0, HT.c)("recharts-default-tooltip", bT),
        XT = (0, HT.c)("recharts-tooltip-label", OT);
      tT && YT && void 0 !== fT && null !== fT && (aT = YT(eT, fT));
      var IT = xT ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return WT.createElement("div", lT({
        className: yT,
        style: dT
      }, IT), WT.createElement("p", {
        className: XT,
        style: wT
      }, WT.isValidElement(aT) ? aT : "".concat(aT)), function() {
        if (fT && fT.length) {
          var TT = (iT ? MT()(fT, iT) : fT).map((function(TT, UT) {
            if ("none" === TT.type) return null;
            var zT = ZT({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: TT.color || "#000"
              }, pT),
              MT = TT.formatter || qT || vT,
              gT = TT.value,
              nT = TT.name,
              HT = gT,
              jT = nT;
            if (MT && null != HT && null != jT) {
              var lT = MT(gT, nT, TT, UT, fT);
              if (Array.isArray(lT)) {
                var BT = LT(lT, 2);
                HT = BT[0], jT = BT[1]
              } else HT = lT
            }
            return WT.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(UT),
              style: zT
            }, (0, kT.w)(jT) ? WT.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, jT) : null, (0, kT.w)(jT) ? WT.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, mT) : null, WT.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, HT), WT.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, TT.unit || ""))
          }));
          return WT.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, TT)
        }
        return null
      }())
    };

    function qT(TT) {
      return qT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, qT(TT)
    }

    function iT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != qT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != qT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == qT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }
    var bT = "recharts-tooltip-wrapper",
      OT = {
        visibility: "hidden"
      };

    function eT(TT) {
      var UT = TT.coordinate,
        mT = TT.translateX,
        WT = TT.translateY;
      return (0, HT.c)(bT, iT(iT(iT(iT({}, "".concat(bT, "-right"), (0, kT.x)(mT) && UT && (0, kT.x)(UT.x) && mT >= UT.x), "".concat(bT, "-left"), (0, kT.x)(mT) && UT && (0, kT.x)(UT.x) && mT < UT.x), "".concat(bT, "-bottom"), (0, kT.x)(WT) && UT && (0, kT.x)(UT.y) && WT >= UT.y), "".concat(bT, "-top"), (0, kT.x)(WT) && UT && (0, kT.x)(UT.y) && WT < UT.y))
    }

    function YT(TT) {
      var UT = TT.allowEscapeViewBox,
        mT = TT.coordinate,
        WT = TT.key,
        zT = TT.offsetTopLeft,
        MT = TT.position,
        gT = TT.reverseDirection,
        nT = TT.tooltipDimension,
        HT = TT.viewBox,
        jT = TT.viewBoxDimension;
      if (MT && (0, kT.x)(MT[WT])) return MT[WT];
      var lT = mT[WT] - nT - zT,
        LT = mT[WT] + zT;
      return UT[WT] ? gT[WT] ? lT : LT : gT[WT] ? lT < HT[WT] ? Math.max(LT, HT[WT]) : Math.max(lT, HT[WT]) : LT + nT > HT[WT] + jT ? Math.max(lT, HT[WT]) : Math.max(LT, HT[WT])
    }

    function JT(TT) {
      return JT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, JT(TT)
    }

    function xT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function dT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? xT(Object(mT), !0).forEach((function(UT) {
          IT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : xT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function wT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, QT(WT.key), WT)
      }
    }

    function tT(TT, UT, mT) {
      return UT = yT(UT),
        function(TT, UT) {
          if (UT && ("object" === JT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, aT() ? Reflect.construct(UT, mT || [], yT(TT).constructor) : UT.apply(TT, mT))
    }

    function aT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (aT = function() {
        return !!TT
      })()
    }

    function yT(TT) {
      return yT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, yT(TT)
    }

    function XT(TT, UT) {
      return XT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, XT(TT, UT)
    }

    function IT(TT, UT, mT) {
      return (UT = QT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function QT(TT) {
      var UT = function(TT, UT) {
        if ("object" != JT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != JT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == JT(UT) ? UT : UT + ""
    }
    var sT = function(TT) {
        function UT() {
          var TT;
          ! function(TT, UT) {
            if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
          }(this, UT);
          for (var mT = arguments.length, WT = new Array(mT), zT = 0; zT < mT; zT++) WT[zT] = arguments[zT];
          return IT(TT = tT(this, UT, [].concat(WT)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), IT(TT, "handleKeyDown", (function(UT) {
            var mT, WT, zT, MT;
            "Escape" === UT.key && TT.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (mT = null === (WT = TT.props.coordinate) || void 0 === WT ? void 0 : WT.x) && void 0 !== mT ? mT : 0,
                y: null !== (zT = null === (MT = TT.props.coordinate) || void 0 === MT ? void 0 : MT.y) && void 0 !== zT ? zT : 0
              }
            })
          })), TT
        }
        return function(TT, UT) {
          if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
          TT.prototype = Object.create(UT && UT.prototype, {
            constructor: {
              value: TT,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(TT, "prototype", {
            writable: !1
          }), UT && XT(TT, UT)
        }(UT, TT), mT = UT, (zT = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var TT = this.wrapperNode.getBoundingClientRect();
              (Math.abs(TT.width - this.state.lastBoundingBox.width) > 1 || Math.abs(TT.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: TT.width,
                  height: TT.height
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
            var TT, UT;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (TT = this.props.coordinate) || void 0 === TT ? void 0 : TT.x) === this.state.dismissedAtCoordinate.x && (null === (UT = this.props.coordinate) || void 0 === UT ? void 0 : UT.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var TT = this,
              UT = this.props,
              mT = UT.active,
              zT = UT.allowEscapeViewBox,
              MT = UT.animationDuration,
              gT = UT.animationEasing,
              nT = UT.children,
              HT = UT.coordinate,
              kT = UT.hasPayload,
              jT = UT.isAnimationActive,
              lT = UT.offset,
              LT = UT.position,
              pT = UT.reverseDirection,
              BT = UT.useTranslate3d,
              ZT = UT.viewBox,
              cT = UT.wrapperStyle,
              vT = function(TT) {
                var UT, mT, WT = TT.allowEscapeViewBox,
                  zT = TT.coordinate,
                  MT = TT.offsetTopLeft,
                  gT = TT.position,
                  nT = TT.reverseDirection,
                  HT = TT.tooltipBox,
                  kT = TT.useTranslate3d,
                  jT = TT.viewBox;
                return {
                  cssProperties: HT.height > 0 && HT.width > 0 && zT ? function(TT) {
                    var UT = TT.translateX,
                      mT = TT.translateY;
                    return {
                      transform: TT.useTranslate3d ? "translate3d(".concat(UT, "px, ").concat(mT, "px, 0)") : "translate(".concat(UT, "px, ").concat(mT, "px)")
                    }
                  }({
                    translateX: UT = YT({
                      allowEscapeViewBox: WT,
                      coordinate: zT,
                      key: "x",
                      offsetTopLeft: MT,
                      position: gT,
                      reverseDirection: nT,
                      tooltipDimension: HT.width,
                      viewBox: jT,
                      viewBoxDimension: jT.width
                    }),
                    translateY: mT = YT({
                      allowEscapeViewBox: WT,
                      coordinate: zT,
                      key: "y",
                      offsetTopLeft: MT,
                      position: gT,
                      reverseDirection: nT,
                      tooltipDimension: HT.height,
                      viewBox: jT,
                      viewBoxDimension: jT.height
                    }),
                    useTranslate3d: kT
                  }) : OT,
                  cssClasses: eT({
                    translateX: UT,
                    translateY: mT,
                    coordinate: zT
                  })
                }
              }({
                allowEscapeViewBox: zT,
                coordinate: HT,
                offsetTopLeft: lT,
                position: LT,
                reverseDirection: pT,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: BT,
                viewBox: ZT
              }),
              fT = vT.cssClasses,
              qT = vT.cssProperties,
              iT = dT(dT({
                transition: jT && mT ? "transform ".concat(MT, "ms ").concat(gT) : void 0
              }, qT), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && mT && kT ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, cT);
            return WT.createElement("div", {
              tabIndex: -1,
              className: fT,
              style: iT,
              ref: function(UT) {
                TT.wrapperNode = UT
              }
            }, nT)
          }
        }]) && wT(mT.prototype, zT), MT && wT(mT, MT), Object.defineProperty(mT, "prototype", {
          writable: !1
        }), mT;
        var mT, zT, MT
      }(WT.PureComponent),
      FT = mT(6067),
      PT = mT(6073);

    function VT(TT) {
      return VT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, VT(TT)
    }

    function uT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function CT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? uT(Object(mT), !0).forEach((function(UT) {
          ET(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : uT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function rT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, hT(WT.key), WT)
      }
    }

    function KT(TT, UT, mT) {
      return UT = GT(UT),
        function(TT, UT) {
          if (UT && ("object" === VT(UT) || "function" === typeof UT)) return UT;
          if (void 0 !== UT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, ST() ? Reflect.construct(UT, mT || [], GT(TT).constructor) : UT.apply(TT, mT))
    }

    function ST() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (ST = function() {
        return !!TT
      })()
    }

    function GT(TT) {
      return GT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, GT(TT)
    }

    function NT(TT, UT) {
      return NT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, UT) {
        return TT.__proto__ = UT, TT
      }, NT(TT, UT)
    }

    function ET(TT, UT, mT) {
      return (UT = hT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function hT(TT) {
      var UT = function(TT, UT) {
        if ("object" != VT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != VT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == VT(UT) ? UT : UT + ""
    }

    function DT(TT) {
      return TT.dataKey
    }
    var oT = function(TT) {
      function UT() {
        return function(TT, UT) {
          if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
        }(this, UT), KT(this, UT, arguments)
      }
      return function(TT, UT) {
        if ("function" !== typeof UT && null !== UT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(UT && UT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), UT && NT(TT, UT)
      }(UT, TT), mT = UT, (zT = [{
        key: "render",
        value: function() {
          var TT = this,
            UT = this.props,
            mT = UT.active,
            zT = UT.allowEscapeViewBox,
            MT = UT.animationDuration,
            gT = UT.animationEasing,
            nT = UT.content,
            HT = UT.coordinate,
            kT = UT.filterNull,
            jT = UT.isAnimationActive,
            lT = UT.offset,
            LT = UT.payload,
            pT = UT.payloadUniqBy,
            BT = UT.position,
            ZT = UT.reverseDirection,
            cT = UT.useTranslate3d,
            vT = UT.viewBox,
            qT = UT.wrapperStyle,
            iT = null !== LT && void 0 !== LT ? LT : [];
          kT && iT.length && (iT = (0, PT.d)(LT.filter((function(UT) {
            return null != UT.value && (!0 !== UT.hide || TT.props.includeHidden)
          })), pT, DT));
          var bT = iT.length > 0;
          return WT.createElement(sT, {
            allowEscapeViewBox: zT,
            animationDuration: MT,
            animationEasing: gT,
            isAnimationActive: jT,
            active: mT,
            coordinate: HT,
            hasPayload: bT,
            offset: lT,
            position: BT,
            reverseDirection: ZT,
            useTranslate3d: cT,
            viewBox: vT,
            wrapperStyle: qT
          }, function(TT, UT) {
            return WT.isValidElement(TT) ? WT.cloneElement(TT, UT) : "function" === typeof TT ? WT.createElement(TT, UT) : WT.createElement(fT, UT)
          }(nT, CT(CT({}, this.props), {}, {
            payload: iT
          })))
        }
      }]) && rT(mT.prototype, zT), MT && rT(mT, MT), Object.defineProperty(mT, "prototype", {
        writable: !1
      }), mT;
      var mT, zT, MT
    }(WT.PureComponent);
    ET(oT, "displayName", "Tooltip"), ET(oT, "defaultProps", {
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
      isAnimationActive: !FT.c.isSsr,
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
  6056: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT
    });
    var WT = mT(63),
      zT = mT(5177),
      MT = mT(5497),
      gT = ["children", "className"];

    function nT() {
      return nT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, nT.apply(this, arguments)
    }

    function HT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }
    var kT = WT.forwardRef((function(TT, UT) {
      var mT = TT.children,
        kT = TT.className,
        jT = HT(TT, gT),
        lT = (0, zT.c)("recharts-layer", kT);
      return WT.createElement("g", nT({
        className: lT
      }, (0, MT.b)(jT, !0), {
        ref: UT
      }), mT)
    }))
  },
  6050: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => kT
    });
    var WT = mT(63),
      zT = mT(5177),
      MT = mT(5497),
      gT = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function nT() {
      return nT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, nT.apply(this, arguments)
    }

    function HT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function kT(TT) {
      var UT = TT.children,
        mT = TT.width,
        kT = TT.height,
        jT = TT.viewBox,
        lT = TT.className,
        LT = TT.style,
        pT = TT.title,
        BT = TT.desc,
        ZT = HT(TT, gT),
        cT = jT || {
          width: mT,
          height: kT,
          x: 0,
          y: 0
        },
        vT = (0, zT.c)("recharts-surface", lT);
      return WT.createElement("svg", nT({}, (0, MT.b)(ZT, !0, "svg"), {
        className: vT,
        width: mT,
        height: kT,
        style: LT,
        viewBox: "".concat(cT.x, " ").concat(cT.y, " ").concat(cT.width, " ").concat(cT.height)
      }), WT.createElement("title", null, pT), WT.createElement("desc", null, BT), UT)
    }
  },
  6413: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => qT,
      g: () => OT,
      k: () => wT,
      n: () => dT,
      q: () => iT,
      r: () => xT,
      u: () => JT,
      x: () => bT,
      z: () => YT,
      C: () => eT
    });
    var WT = mT(63),
      zT = mT(6042),
      MT = mT(6419),
      gT = mT.n(MT),
      nT = mT(6338),
      HT = mT.n(nT),
      kT = mT(5301),
      jT = mT.n(kT)()((function(TT) {
        return {
          x: TT.left,
          y: TT.top,
          width: TT.width,
          height: TT.height
        }
      }), (function(TT) {
        return ["l", TT.left, "t", TT.top, "w", TT.width, "h", TT.height].join("")
      })),
      lT = mT(5254);
    var LT = (0, WT.createContext)(void 0),
      pT = (0, WT.createContext)(void 0),
      BT = (0, WT.createContext)(void 0),
      ZT = (0, WT.createContext)({}),
      cT = (0, WT.createContext)(void 0),
      vT = (0, WT.createContext)(0),
      fT = (0, WT.createContext)(0),
      qT = function(TT) {
        var UT = TT.state,
          mT = UT.xAxisMap,
          zT = UT.yAxisMap,
          MT = UT.offset,
          gT = TT.clipPathId,
          nT = TT.children,
          HT = TT.width,
          kT = TT.height,
          lT = jT(MT);
        return WT.createElement(LT.Provider, {
          value: mT
        }, WT.createElement(pT.Provider, {
          value: zT
        }, WT.createElement(ZT.Provider, {
          value: MT
        }, WT.createElement(BT.Provider, {
          value: lT
        }, WT.createElement(cT.Provider, {
          value: gT
        }, WT.createElement(vT.Provider, {
          value: kT
        }, WT.createElement(fT.Provider, {
          value: HT
        }, nT)))))))
      },
      iT = function() {
        return (0, WT.useContext)(cT)
      };
    var bT = function(TT) {
        var UT = (0, WT.useContext)(LT);
        null == UT && (0, zT.c)(!1);
        var mT = UT[TT];
        return null == mT && (0, zT.c)(!1), mT
      },
      OT = function() {
        var TT = (0, WT.useContext)(LT);
        return (0, lT.h)(TT)
      },
      eT = function() {
        var TT = (0, WT.useContext)(pT);
        return gT()(TT, (function(TT) {
          return HT()(TT.domain, Number.isFinite)
        })) || (0, lT.h)(TT)
      },
      YT = function(TT) {
        var UT = (0, WT.useContext)(pT);
        null == UT && (0, zT.c)(!1);
        var mT = UT[TT];
        return null == mT && (0, zT.c)(!1), mT
      },
      JT = function() {
        return (0, WT.useContext)(BT)
      },
      xT = function() {
        return (0, WT.useContext)(ZT)
      },
      dT = function() {
        return (0, WT.useContext)(fT)
      },
      wT = function() {
        return (0, WT.useContext)(vT)
      }
  },
  6435: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => DT
    });
    var WT = mT(63);

    function zT() {}

    function MT(TT, UT, mT) {
      TT._context.bezierCurveTo((2 * TT._x0 + TT._x1) / 3, (2 * TT._y0 + TT._y1) / 3, (TT._x0 + 2 * TT._x1) / 3, (TT._y0 + 2 * TT._y1) / 3, (TT._x0 + 4 * TT._x1 + UT) / 6, (TT._y0 + 4 * TT._y1 + mT) / 6)
    }

    function gT(TT) {
      this._context = TT
    }

    function nT(TT) {
      this._context = TT
    }

    function HT(TT) {
      this._context = TT
    }
    gT.prototype = {
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
            MT(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(TT, UT) {
        switch (TT = +TT, UT = +UT, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(TT, UT) : this._context.moveTo(TT, UT);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            MT(this, TT, UT)
        }
        this._x0 = this._x1, this._x1 = TT, this._y0 = this._y1, this._y1 = UT
      }
    }, nT.prototype = {
      areaStart: zT,
      areaEnd: zT,
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
      point: function(TT, UT) {
        switch (TT = +TT, UT = +UT, this._point) {
          case 0:
            this._point = 1, this._x2 = TT, this._y2 = UT;
            break;
          case 1:
            this._point = 2, this._x3 = TT, this._y3 = UT;
            break;
          case 2:
            this._point = 3, this._x4 = TT, this._y4 = UT, this._context.moveTo((this._x0 + 4 * this._x1 + TT) / 6, (this._y0 + 4 * this._y1 + UT) / 6);
            break;
          default:
            MT(this, TT, UT)
        }
        this._x0 = this._x1, this._x1 = TT, this._y0 = this._y1, this._y1 = UT
      }
    }, HT.prototype = {
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
      point: function(TT, UT) {
        switch (TT = +TT, UT = +UT, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var mT = (this._x0 + 4 * this._x1 + TT) / 6,
              WT = (this._y0 + 4 * this._y1 + UT) / 6;
            this._line ? this._context.lineTo(mT, WT) : this._context.moveTo(mT, WT);
            break;
          case 3:
            this._point = 4;
          default:
            MT(this, TT, UT)
        }
        this._x0 = this._x1, this._x1 = TT, this._y0 = this._y1, this._y1 = UT
      }
    };
    class kT {
      constructor(TT, UT) {
        this._context = TT, this._x = UT
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
      point(TT, UT) {
        switch (TT = +TT, UT = +UT, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(TT, UT) : this._context.moveTo(TT, UT);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + TT) / 2, this._y0, this._x0, UT, TT, UT) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + UT) / 2, TT, this._y0, TT, UT)
        }
        this._x0 = TT, this._y0 = UT
      }
    }

    function jT(TT) {
      this._context = TT
    }

    function lT(TT) {
      this._context = TT
    }

    function LT(TT) {
      return new lT(TT)
    }

    function pT(TT) {
      return TT < 0 ? -1 : 1
    }

    function BT(TT, UT, mT) {
      var WT = TT._x1 - TT._x0,
        zT = UT - TT._x1,
        MT = (TT._y1 - TT._y0) / (WT || zT < 0 && -0),
        gT = (mT - TT._y1) / (zT || WT < 0 && -0),
        nT = (MT * zT + gT * WT) / (WT + zT);
      return (pT(MT) + pT(gT)) * Math.min(Math.abs(MT), Math.abs(gT), .5 * Math.abs(nT)) || 0
    }

    function ZT(TT, UT) {
      var mT = TT._x1 - TT._x0;
      return mT ? (3 * (TT._y1 - TT._y0) / mT - UT) / 2 : UT
    }

    function cT(TT, UT, mT) {
      var WT = TT._x0,
        zT = TT._y0,
        MT = TT._x1,
        gT = TT._y1,
        nT = (MT - WT) / 3;
      TT._context.bezierCurveTo(WT + nT, zT + nT * UT, MT - nT, gT - nT * mT, MT, gT)
    }

    function vT(TT) {
      this._context = TT
    }

    function fT(TT) {
      this._context = new qT(TT)
    }

    function qT(TT) {
      this._context = TT
    }

    function iT(TT) {
      this._context = TT
    }

    function bT(TT) {
      var UT, mT, WT = TT.length - 1,
        zT = new Array(WT),
        MT = new Array(WT),
        gT = new Array(WT);
      for (zT[0] = 0, MT[0] = 2, gT[0] = TT[0] + 2 * TT[1], UT = 1; UT < WT - 1; ++UT) zT[UT] = 1, MT[UT] = 4, gT[UT] = 4 * TT[UT] + 2 * TT[UT + 1];
      for (zT[WT - 1] = 2, MT[WT - 1] = 7, gT[WT - 1] = 8 * TT[WT - 1] + TT[WT], UT = 1; UT < WT; ++UT) mT = zT[UT] / MT[UT - 1], MT[UT] -= mT, gT[UT] -= mT * gT[UT - 1];
      for (zT[WT - 1] = gT[WT - 1] / MT[WT - 1], UT = WT - 2; UT >= 0; --UT) zT[UT] = (gT[UT] - zT[UT + 1]) / MT[UT];
      for (MT[WT - 1] = (TT[WT] + zT[WT - 1]) / 2, UT = 0; UT < WT - 1; ++UT) MT[UT] = 2 * TT[UT + 1] - zT[UT + 1];
      return [zT, MT]
    }

    function OT(TT, UT) {
      this._context = TT, this._t = UT
    }
    jT.prototype = {
      areaStart: zT,
      areaEnd: zT,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(TT, UT) {
        TT = +TT, UT = +UT, this._point ? this._context.lineTo(TT, UT) : (this._point = 1, this._context.moveTo(TT, UT))
      }
    }, lT.prototype = {
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
      point: function(TT, UT) {
        switch (TT = +TT, UT = +UT, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(TT, UT) : this._context.moveTo(TT, UT);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(TT, UT)
        }
      }
    }, vT.prototype = {
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
            cT(this, this._t0, ZT(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(TT, UT) {
        var mT = NaN;
        if (UT = +UT, (TT = +TT) !== this._x1 || UT !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(TT, UT) : this._context.moveTo(TT, UT);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, cT(this, ZT(this, mT = BT(this, TT, UT)), mT);
              break;
            default:
              cT(this, this._t0, mT = BT(this, TT, UT))
          }
          this._x0 = this._x1, this._x1 = TT, this._y0 = this._y1, this._y1 = UT, this._t0 = mT
        }
      }
    }, (fT.prototype = Object.create(vT.prototype)).point = function(TT, UT) {
      vT.prototype.point.call(this, UT, TT)
    }, qT.prototype = {
      moveTo: function(TT, UT) {
        this._context.moveTo(UT, TT)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(TT, UT) {
        this._context.lineTo(UT, TT)
      },
      bezierCurveTo: function(TT, UT, mT, WT, zT, MT) {
        this._context.bezierCurveTo(UT, TT, WT, mT, MT, zT)
      }
    }, iT.prototype = {
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
        var TT = this._x,
          UT = this._y,
          mT = TT.length;
        if (mT)
          if (this._line ? this._context.lineTo(TT[0], UT[0]) : this._context.moveTo(TT[0], UT[0]), 2 === mT) this._context.lineTo(TT[1], UT[1]);
          else
            for (var WT = bT(TT), zT = bT(UT), MT = 0, gT = 1; gT < mT; ++MT, ++gT) this._context.bezierCurveTo(WT[0][MT], zT[0][MT], WT[1][MT], zT[1][MT], TT[gT], UT[gT]);
        (this._line || 0 !== this._line && 1 === mT) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(TT, UT) {
        this._x.push(+TT), this._y.push(+UT)
      }
    }, OT.prototype = {
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
      point: function(TT, UT) {
        switch (TT = +TT, UT = +UT, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(TT, UT) : this._context.moveTo(TT, UT);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, UT), this._context.lineTo(TT, UT);
            else {
              var mT = this._x * (1 - this._t) + TT * this._t;
              this._context.lineTo(mT, this._y), this._context.lineTo(mT, UT)
            }
        }
        this._x = TT, this._y = UT
      }
    };
    var eT = mT(6314),
      YT = mT(6186),
      JT = mT(6188);

    function xT(TT) {
      return TT[0]
    }

    function dT(TT) {
      return TT[1]
    }

    function wT(TT, UT) {
      var mT = (0, YT.b)(!0),
        WT = null,
        zT = LT,
        MT = null,
        gT = (0, JT.b)(nT);

      function nT(nT) {
        var HT, kT, jT, lT = (nT = (0, eT.d)(nT)).length,
          LT = !1;
        for (null == WT && (MT = zT(jT = gT())), HT = 0; HT <= lT; ++HT) !(HT < lT && mT(kT = nT[HT], HT, nT)) === LT && ((LT = !LT) ? MT.lineStart() : MT.lineEnd()), LT && MT.point(+TT(kT, HT, nT), +UT(kT, HT, nT));
        if (jT) return MT = null, jT + "" || null
      }
      return TT = "function" === typeof TT ? TT : void 0 === TT ? xT : (0, YT.b)(TT), UT = "function" === typeof UT ? UT : void 0 === UT ? dT : (0, YT.b)(UT), nT.x = function(UT) {
        return arguments.length ? (TT = "function" === typeof UT ? UT : (0, YT.b)(+UT), nT) : TT
      }, nT.y = function(TT) {
        return arguments.length ? (UT = "function" === typeof TT ? TT : (0, YT.b)(+TT), nT) : UT
      }, nT.defined = function(TT) {
        return arguments.length ? (mT = "function" === typeof TT ? TT : (0, YT.b)(!!TT), nT) : mT
      }, nT.curve = function(TT) {
        return arguments.length ? (zT = TT, null != WT && (MT = zT(WT)), nT) : zT
      }, nT.context = function(TT) {
        return arguments.length ? (null == TT ? WT = MT = null : MT = zT(WT = TT), nT) : WT
      }, nT
    }

    function tT(TT, UT, mT) {
      var WT = null,
        zT = (0, YT.b)(!0),
        MT = null,
        gT = LT,
        nT = null,
        HT = (0, JT.b)(kT);

      function kT(kT) {
        var jT, lT, LT, pT, BT, ZT = (kT = (0, eT.d)(kT)).length,
          cT = !1,
          vT = new Array(ZT),
          fT = new Array(ZT);
        for (null == MT && (nT = gT(BT = HT())), jT = 0; jT <= ZT; ++jT) {
          if (!(jT < ZT && zT(pT = kT[jT], jT, kT)) === cT)
            if (cT = !cT) lT = jT, nT.areaStart(), nT.lineStart();
            else {
              for (nT.lineEnd(), nT.lineStart(), LT = jT - 1; LT >= lT; --LT) nT.point(vT[LT], fT[LT]);
              nT.lineEnd(), nT.areaEnd()
            } cT && (vT[jT] = +TT(pT, jT, kT), fT[jT] = +UT(pT, jT, kT), nT.point(WT ? +WT(pT, jT, kT) : vT[jT], mT ? +mT(pT, jT, kT) : fT[jT]))
        }
        if (BT) return nT = null, BT + "" || null
      }

      function jT() {
        return wT().defined(zT).curve(gT).context(MT)
      }
      return TT = "function" === typeof TT ? TT : void 0 === TT ? xT : (0, YT.b)(+TT), UT = "function" === typeof UT ? UT : void 0 === UT ? (0, YT.b)(0) : (0, YT.b)(+UT), mT = "function" === typeof mT ? mT : void 0 === mT ? dT : (0, YT.b)(+mT), kT.x = function(UT) {
        return arguments.length ? (TT = "function" === typeof UT ? UT : (0, YT.b)(+UT), WT = null, kT) : TT
      }, kT.x0 = function(UT) {
        return arguments.length ? (TT = "function" === typeof UT ? UT : (0, YT.b)(+UT), kT) : TT
      }, kT.x1 = function(TT) {
        return arguments.length ? (WT = null == TT ? null : "function" === typeof TT ? TT : (0, YT.b)(+TT), kT) : WT
      }, kT.y = function(TT) {
        return arguments.length ? (UT = "function" === typeof TT ? TT : (0, YT.b)(+TT), mT = null, kT) : UT
      }, kT.y0 = function(TT) {
        return arguments.length ? (UT = "function" === typeof TT ? TT : (0, YT.b)(+TT), kT) : UT
      }, kT.y1 = function(TT) {
        return arguments.length ? (mT = null == TT ? null : "function" === typeof TT ? TT : (0, YT.b)(+TT), kT) : mT
      }, kT.lineX0 = kT.lineY0 = function() {
        return jT().x(TT).y(UT)
      }, kT.lineY1 = function() {
        return jT().x(TT).y(mT)
      }, kT.lineX1 = function() {
        return jT().x(WT).y(UT)
      }, kT.defined = function(TT) {
        return arguments.length ? (zT = "function" === typeof TT ? TT : (0, YT.b)(!!TT), kT) : zT
      }, kT.curve = function(TT) {
        return arguments.length ? (gT = TT, null != MT && (nT = gT(MT)), kT) : gT
      }, kT.context = function(TT) {
        return arguments.length ? (null == TT ? MT = nT = null : nT = gT(MT = TT), kT) : MT
      }, kT
    }
    var aT = mT(6141),
      yT = mT.n(aT),
      XT = mT(5337),
      IT = mT.n(XT),
      QT = mT(5177),
      sT = mT(5517),
      FT = mT(5497),
      PT = mT(5254);

    function VT(TT) {
      return VT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, VT(TT)
    }

    function uT() {
      return uT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, uT.apply(this, arguments)
    }

    function CT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function rT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? CT(Object(mT), !0).forEach((function(UT) {
          KT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : CT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function KT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != VT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != VT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == VT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }
    var ST = {
        curveBasisClosed: function(TT) {
          return new nT(TT)
        },
        curveBasisOpen: function(TT) {
          return new HT(TT)
        },
        curveBasis: function(TT) {
          return new gT(TT)
        },
        curveBumpX: function(TT) {
          return new kT(TT, !0)
        },
        curveBumpY: function(TT) {
          return new kT(TT, !1)
        },
        curveLinearClosed: function(TT) {
          return new jT(TT)
        },
        curveLinear: LT,
        curveMonotoneX: function(TT) {
          return new vT(TT)
        },
        curveMonotoneY: function(TT) {
          return new fT(TT)
        },
        curveNatural: function(TT) {
          return new iT(TT)
        },
        curveStep: function(TT) {
          return new OT(TT, .5)
        },
        curveStepAfter: function(TT) {
          return new OT(TT, 1)
        },
        curveStepBefore: function(TT) {
          return new OT(TT, 0)
        }
      },
      GT = function(TT) {
        return TT.x === +TT.x && TT.y === +TT.y
      },
      NT = function(TT) {
        return TT.x
      },
      ET = function(TT) {
        return TT.y
      },
      hT = function(TT) {
        var UT, mT = TT.type,
          WT = void 0 === mT ? "linear" : mT,
          zT = TT.points,
          MT = void 0 === zT ? [] : zT,
          gT = TT.baseLine,
          nT = TT.layout,
          HT = TT.connectNulls,
          kT = void 0 !== HT && HT,
          jT = function(TT, UT) {
            if (IT()(TT)) return TT;
            var mT = "curve".concat(yT()(TT));
            return "curveMonotone" !== mT && "curveBump" !== mT || !UT ? ST[mT] || LT : ST["".concat(mT).concat("vertical" === UT ? "Y" : "X")]
          }(WT, nT),
          lT = kT ? MT.filter((function(TT) {
            return GT(TT)
          })) : MT;
        if (Array.isArray(gT)) {
          var pT = kT ? gT.filter((function(TT) {
              return GT(TT)
            })) : gT,
            BT = lT.map((function(TT, UT) {
              return rT(rT({}, TT), {}, {
                base: pT[UT]
              })
            }));
          return (UT = "vertical" === nT ? tT().y(ET).x1(NT).x0((function(TT) {
            return TT.base.x
          })) : tT().x(NT).y1(ET).y0((function(TT) {
            return TT.base.y
          }))).defined(GT).curve(jT), UT(BT)
        }
        return (UT = "vertical" === nT && (0, PT.x)(gT) ? tT().y(ET).x1(NT).x0(gT) : (0, PT.x)(gT) ? tT().x(NT).y1(ET).y0(gT) : wT().x(NT).y(ET)).defined(GT).curve(jT), UT(lT)
      },
      DT = function(TT) {
        var UT = TT.className,
          mT = TT.points,
          zT = TT.path,
          MT = TT.pathRef;
        if ((!mT || !mT.length) && !zT) return null;
        var gT = mT && mT.length ? hT(TT) : zT;
        return WT.createElement("path", uT({}, (0, FT.b)(TT, !1), (0, sT.i)(TT), {
          className: (0, QT.c)("recharts-curve", UT),
          d: gT,
          ref: MT
        }))
      }
  },
  6197: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => HT
    });
    var WT = mT(63),
      zT = mT(5177),
      MT = mT(5517),
      gT = mT(5497);

    function nT() {
      return nT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, nT.apply(this, arguments)
    }
    var HT = function(TT) {
      var UT = TT.cx,
        mT = TT.cy,
        HT = TT.r,
        kT = TT.className,
        jT = (0, zT.c)("recharts-dot", kT);
      return UT === +UT && mT === +mT && HT === +HT ? WT.createElement("circle", nT({}, (0, gT.b)(TT, !1), (0, MT.i)(TT), {
        className: jT,
        cx: UT,
        cy: mT,
        r: HT
      })) : null
    }
  },
  6200: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => vT,
      e: () => ZT
    });
    var WT = mT(63),
      zT = mT(5177),
      MT = mT(6205),
      gT = mT(5497);

    function nT(TT) {
      return nT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, nT(TT)
    }

    function HT() {
      return HT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, HT.apply(this, arguments)
    }

    function kT(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        var mT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != mT) {
          var WT, zT, MT, gT, nT = [],
            HT = !0,
            kT = !1;
          try {
            if (MT = (mT = mT.call(TT)).next, 0 === UT) {
              if (Object(mT) !== mT) return;
              HT = !1
            } else
              for (; !(HT = (WT = MT.call(mT)).done) && (nT.push(WT.value), nT.length !== UT); HT = !0);
          } catch (TT) {
            kT = !0, zT = TT
          } finally {
            try {
              if (!HT && null != mT.return && (gT = mT.return(), Object(gT) !== gT)) return
            } finally {
              if (kT) throw zT
            }
          }
          return nT
        }
      }(TT, UT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return jT(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return jT(TT, UT)
      }(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function jT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function lT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function LT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? lT(Object(mT), !0).forEach((function(UT) {
          pT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : lT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function pT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != nT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != nT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == nT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }
    var BT = function(TT, UT, mT, WT, zT) {
        var MT, gT = Math.min(Math.abs(mT) / 2, Math.abs(WT) / 2),
          nT = WT >= 0 ? 1 : -1,
          HT = mT >= 0 ? 1 : -1,
          kT = WT >= 0 && mT >= 0 || WT < 0 && mT < 0 ? 1 : 0;
        if (gT > 0 && zT instanceof Array) {
          for (var jT = [0, 0, 0, 0], lT = 0; lT < 4; lT++) jT[lT] = zT[lT] > gT ? gT : zT[lT];
          MT = "M".concat(TT, ",").concat(UT + nT * jT[0]), jT[0] > 0 && (MT += "A ".concat(jT[0], ",").concat(jT[0], ",0,0,").concat(kT, ",").concat(TT + HT * jT[0], ",").concat(UT)), MT += "L ".concat(TT + mT - HT * jT[1], ",").concat(UT), jT[1] > 0 && (MT += "A ".concat(jT[1], ",").concat(jT[1], ",0,0,").concat(kT, ",\n        ").concat(TT + mT, ",").concat(UT + nT * jT[1])), MT += "L ".concat(TT + mT, ",").concat(UT + WT - nT * jT[2]), jT[2] > 0 && (MT += "A ".concat(jT[2], ",").concat(jT[2], ",0,0,").concat(kT, ",\n        ").concat(TT + mT - HT * jT[2], ",").concat(UT + WT)), MT += "L ".concat(TT + HT * jT[3], ",").concat(UT + WT), jT[3] > 0 && (MT += "A ".concat(jT[3], ",").concat(jT[3], ",0,0,").concat(kT, ",\n        ").concat(TT, ",").concat(UT + WT - nT * jT[3])), MT += "Z"
        } else if (gT > 0 && zT === +zT && zT > 0) {
          var LT = Math.min(gT, zT);
          MT = "M ".concat(TT, ",").concat(UT + nT * LT, "\n            A ").concat(LT, ",").concat(LT, ",0,0,").concat(kT, ",").concat(TT + HT * LT, ",").concat(UT, "\n            L ").concat(TT + mT - HT * LT, ",").concat(UT, "\n            A ").concat(LT, ",").concat(LT, ",0,0,").concat(kT, ",").concat(TT + mT, ",").concat(UT + nT * LT, "\n            L ").concat(TT + mT, ",").concat(UT + WT - nT * LT, "\n            A ").concat(LT, ",").concat(LT, ",0,0,").concat(kT, ",").concat(TT + mT - HT * LT, ",").concat(UT + WT, "\n            L ").concat(TT + HT * LT, ",").concat(UT + WT, "\n            A ").concat(LT, ",").concat(LT, ",0,0,").concat(kT, ",").concat(TT, ",").concat(UT + WT - nT * LT, " Z")
        } else MT = "M ".concat(TT, ",").concat(UT, " h ").concat(mT, " v ").concat(WT, " h ").concat(-mT, " Z");
        return MT
      },
      ZT = function(TT, UT) {
        if (!TT || !UT) return !1;
        var mT = TT.x,
          WT = TT.y,
          zT = UT.x,
          MT = UT.y,
          gT = UT.width,
          nT = UT.height;
        if (Math.abs(gT) > 0 && Math.abs(nT) > 0) {
          var HT = Math.min(zT, zT + gT),
            kT = Math.max(zT, zT + gT),
            jT = Math.min(MT, MT + nT),
            lT = Math.max(MT, MT + nT);
          return mT >= HT && mT <= kT && WT >= jT && WT <= lT
        }
        return !1
      },
      cT = {
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
      vT = function(TT) {
        var UT = LT(LT({}, cT), TT),
          mT = (0, WT.useRef)(),
          nT = kT((0, WT.useState)(-1), 2),
          jT = nT[0],
          lT = nT[1];
        (0, WT.useEffect)((function() {
          if (mT.current && mT.current.getTotalLength) try {
            var TT = mT.current.getTotalLength();
            TT && lT(TT)
          } catch (UT) {}
        }), []);
        var pT = UT.x,
          ZT = UT.y,
          vT = UT.width,
          fT = UT.height,
          qT = UT.radius,
          iT = UT.className,
          bT = UT.animationEasing,
          OT = UT.animationDuration,
          eT = UT.animationBegin,
          YT = UT.isAnimationActive,
          JT = UT.isUpdateAnimationActive;
        if (pT !== +pT || ZT !== +ZT || vT !== +vT || fT !== +fT || 0 === vT || 0 === fT) return null;
        var xT = (0, zT.c)("recharts-rectangle", iT);
        return JT ? WT.createElement(MT.d, {
          canBegin: jT > 0,
          from: {
            width: vT,
            height: fT,
            x: pT,
            y: ZT
          },
          to: {
            width: vT,
            height: fT,
            x: pT,
            y: ZT
          },
          duration: OT,
          animationEasing: bT,
          isActive: JT
        }, (function(TT) {
          var zT = TT.width,
            nT = TT.height,
            kT = TT.x,
            lT = TT.y;
          return WT.createElement(MT.d, {
            canBegin: jT > 0,
            from: "0px ".concat(-1 === jT ? 1 : jT, "px"),
            to: "".concat(jT, "px 0px"),
            attributeName: "strokeDasharray",
            np: eT,
            duration: OT,
            isActive: YT,
            easing: bT
          }, WT.createElement("path", HT({}, (0, gT.b)(UT, !0), {
            className: xT,
            d: BT(kT, lT, zT, nT, qT),
            ref: mT
          })))
        })) : WT.createElement("path", HT({}, (0, gT.b)(UT, !0), {
          className: xT,
          d: BT(pT, ZT, vT, fT, qT)
        }))
      }
  },
  6395: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => cT
    });
    var WT = mT(63),
      zT = mT(5177),
      MT = mT(5497),
      gT = mT(6322),
      nT = mT(5254);

    function HT(TT) {
      return HT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, HT(TT)
    }

    function kT() {
      return kT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, kT.apply(this, arguments)
    }

    function jT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function lT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? jT(Object(mT), !0).forEach((function(UT) {
          LT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : jT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function LT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != HT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != HT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == HT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }
    var pT = function(TT) {
        var UT = TT.cx,
          mT = TT.cy,
          WT = TT.radius,
          zT = TT.angle,
          MT = TT.sign,
          nT = TT.isExternal,
          HT = TT.cornerRadius,
          kT = TT.cornerIsExternal,
          jT = HT * (nT ? 1 : -1) + WT,
          lT = Math.asin(HT / jT) / gT.d,
          LT = kT ? zT : zT + MT * lT,
          pT = kT ? zT - MT * lT : zT;
        return {
          center: (0, gT.i)(UT, mT, jT, LT),
          circleTangency: (0, gT.i)(UT, mT, WT, LT),
          lineTangency: (0, gT.i)(UT, mT, jT * Math.cos(lT * gT.d), pT),
          pp: lT
        }
      },
      BT = function(TT) {
        var UT = TT.cx,
          mT = TT.cy,
          WT = TT.innerRadius,
          zT = TT.outerRadius,
          MT = TT.startAngle,
          HT = function(TT, UT) {
            return (0, nT.D)(UT - TT) * Math.min(Math.abs(UT - TT), 359.999)
          }(MT, TT.endAngle),
          kT = MT + HT,
          jT = (0, gT.i)(UT, mT, zT, MT),
          lT = (0, gT.i)(UT, mT, zT, kT),
          LT = "M ".concat(jT.x, ",").concat(jT.y, "\n    A ").concat(zT, ",").concat(zT, ",0,\n    ").concat(+(Math.abs(HT) > 180), ",").concat(+(MT > kT), ",\n    ").concat(lT.x, ",").concat(lT.y, "\n  ");
        if (WT > 0) {
          var pT = (0, gT.i)(UT, mT, WT, MT),
            BT = (0, gT.i)(UT, mT, WT, kT);
          LT += "L ".concat(BT.x, ",").concat(BT.y, "\n            A ").concat(WT, ",").concat(WT, ",0,\n            ").concat(+(Math.abs(HT) > 180), ",").concat(+(MT <= kT), ",\n            ").concat(pT.x, ",").concat(pT.y, " Z")
        } else LT += "L ".concat(UT, ",").concat(mT, " Z");
        return LT
      },
      ZT = {
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
      cT = function(TT) {
        var UT = lT(lT({}, ZT), TT),
          mT = UT.cx,
          gT = UT.cy,
          HT = UT.innerRadius,
          jT = UT.outerRadius,
          LT = UT.cornerRadius,
          cT = UT.forceCornerRadius,
          vT = UT.cornerIsExternal,
          fT = UT.startAngle,
          qT = UT.endAngle,
          iT = UT.className;
        if (jT < HT || fT === qT) return null;
        var bT, OT = (0, zT.c)("recharts-sector", iT),
          eT = jT - HT,
          YT = (0, nT.n)(LT, eT, 0, !0);
        return bT = YT > 0 && Math.abs(fT - qT) < 360 ? function(TT) {
          var UT = TT.cx,
            mT = TT.cy,
            WT = TT.innerRadius,
            zT = TT.outerRadius,
            MT = TT.cornerRadius,
            gT = TT.forceCornerRadius,
            HT = TT.cornerIsExternal,
            kT = TT.startAngle,
            jT = TT.endAngle,
            lT = (0, nT.D)(jT - kT),
            LT = pT({
              cx: UT,
              cy: mT,
              radius: zT,
              angle: kT,
              sign: lT,
              cornerRadius: MT,
              cornerIsExternal: HT
            }),
            ZT = LT.circleTangency,
            cT = LT.lineTangency,
            vT = LT.pp,
            fT = pT({
              cx: UT,
              cy: mT,
              radius: zT,
              angle: jT,
              sign: -lT,
              cornerRadius: MT,
              cornerIsExternal: HT
            }),
            qT = fT.circleTangency,
            iT = fT.lineTangency,
            bT = fT.pp,
            OT = HT ? Math.abs(kT - jT) : Math.abs(kT - jT) - vT - bT;
          if (OT < 0) return gT ? "M ".concat(cT.x, ",").concat(cT.y, "\n        a").concat(MT, ",").concat(MT, ",0,0,1,").concat(2 * MT, ",0\n        a").concat(MT, ",").concat(MT, ",0,0,1,").concat(2 * -MT, ",0\n      ") : BT({
            cx: UT,
            cy: mT,
            innerRadius: WT,
            outerRadius: zT,
            startAngle: kT,
            endAngle: jT
          });
          var eT = "M ".concat(cT.x, ",").concat(cT.y, "\n    A").concat(MT, ",").concat(MT, ",0,0,").concat(+(lT < 0), ",").concat(ZT.x, ",").concat(ZT.y, "\n    A").concat(zT, ",").concat(zT, ",0,").concat(+(OT > 180), ",").concat(+(lT < 0), ",").concat(qT.x, ",").concat(qT.y, "\n    A").concat(MT, ",").concat(MT, ",0,0,").concat(+(lT < 0), ",").concat(iT.x, ",").concat(iT.y, "\n  ");
          if (WT > 0) {
            var YT = pT({
                cx: UT,
                cy: mT,
                radius: WT,
                angle: kT,
                sign: lT,
                isExternal: !0,
                cornerRadius: MT,
                cornerIsExternal: HT
              }),
              JT = YT.circleTangency,
              xT = YT.lineTangency,
              dT = YT.pp,
              wT = pT({
                cx: UT,
                cy: mT,
                radius: WT,
                angle: jT,
                sign: -lT,
                isExternal: !0,
                cornerRadius: MT,
                cornerIsExternal: HT
              }),
              tT = wT.circleTangency,
              aT = wT.lineTangency,
              yT = wT.pp,
              XT = HT ? Math.abs(kT - jT) : Math.abs(kT - jT) - dT - yT;
            if (XT < 0 && 0 === MT) return "".concat(eT, "L").concat(UT, ",").concat(mT, "Z");
            eT += "L".concat(aT.x, ",").concat(aT.y, "\n      A").concat(MT, ",").concat(MT, ",0,0,").concat(+(lT < 0), ",").concat(tT.x, ",").concat(tT.y, "\n      A").concat(WT, ",").concat(WT, ",0,").concat(+(XT > 180), ",").concat(+(lT > 0), ",").concat(JT.x, ",").concat(JT.y, "\n      A").concat(MT, ",").concat(MT, ",0,0,").concat(+(lT < 0), ",").concat(xT.x, ",").concat(xT.y, "Z")
          } else eT += "L".concat(UT, ",").concat(mT, "Z");
          return eT
        }({
          cx: mT,
          cy: gT,
          innerRadius: HT,
          outerRadius: jT,
          cornerRadius: Math.min(YT, eT / 2),
          forceCornerRadius: cT,
          cornerIsExternal: vT,
          startAngle: fT,
          endAngle: qT
        }) : BT({
          cx: mT,
          cy: gT,
          innerRadius: HT,
          outerRadius: jT,
          startAngle: fT,
          endAngle: qT
        }), WT.createElement("path", kT({}, (0, MT.b)(UT, !0), {
          className: OT,
          d: bT,
          role: "img"
        }))
      }
  },
  6137: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => rT
    });
    var WT = mT(63),
      zT = mT(6141),
      MT = mT.n(zT);
    Math.abs, Math.atan2;
    const gT = Math.cos,
      nT = (Math.max, Math.min, Math.sin),
      HT = Math.sqrt,
      kT = Math.PI,
      jT = 2 * kT;
    const lT = {
        draw(TT, UT) {
          const mT = HT(UT / kT);
          TT.moveTo(mT, 0), TT.arc(0, 0, mT, 0, jT)
        }
      },
      LT = {
        draw(TT, UT) {
          const mT = HT(UT / 5) / 2;
          TT.moveTo(-3 * mT, -mT), TT.lineTo(-mT, -mT), TT.lineTo(-mT, -3 * mT), TT.lineTo(mT, -3 * mT), TT.lineTo(mT, -mT), TT.lineTo(3 * mT, -mT), TT.lineTo(3 * mT, mT), TT.lineTo(mT, mT), TT.lineTo(mT, 3 * mT), TT.lineTo(-mT, 3 * mT), TT.lineTo(-mT, mT), TT.lineTo(-3 * mT, mT), TT.closePath()
        }
      },
      pT = HT(1 / 3),
      BT = 2 * pT,
      ZT = {
        draw(TT, UT) {
          const mT = HT(UT / BT),
            WT = mT * pT;
          TT.moveTo(0, -mT), TT.lineTo(WT, 0), TT.lineTo(0, mT), TT.lineTo(-WT, 0), TT.closePath()
        }
      },
      cT = {
        draw(TT, UT) {
          const mT = HT(UT),
            WT = -mT / 2;
          TT.rect(WT, WT, mT, mT)
        }
      },
      vT = nT(kT / 10) / nT(7 * kT / 10),
      fT = nT(jT / 10) * vT,
      qT = -gT(jT / 10) * vT,
      iT = {
        draw(TT, UT) {
          const mT = HT(.8908130915292852 * UT),
            WT = fT * mT,
            zT = qT * mT;
          TT.moveTo(0, -mT), TT.lineTo(WT, zT);
          for (let MT = 1; MT < 5; ++MT) {
            const UT = jT * MT / 5,
              HT = gT(UT),
              kT = nT(UT);
            TT.lineTo(kT * mT, -HT * mT), TT.lineTo(HT * WT - kT * zT, kT * WT + HT * zT)
          }
          TT.closePath()
        }
      },
      bT = HT(3),
      OT = {
        draw(TT, UT) {
          const mT = -HT(UT / (3 * bT));
          TT.moveTo(0, 2 * mT), TT.lineTo(-bT * mT, -mT), TT.lineTo(bT * mT, -mT), TT.closePath()
        }
      },
      eT = -.5,
      YT = HT(3) / 2,
      JT = 1 / HT(12),
      xT = 3 * (JT / 2 + 1),
      dT = {
        draw(TT, UT) {
          const mT = HT(UT / xT),
            WT = mT / 2,
            zT = mT * JT,
            MT = WT,
            gT = mT * JT + mT,
            nT = -MT,
            kT = gT;
          TT.moveTo(WT, zT), TT.lineTo(MT, gT), TT.lineTo(nT, kT), TT.lineTo(eT * WT - YT * zT, YT * WT + eT * zT), TT.lineTo(eT * MT - YT * gT, YT * MT + eT * gT), TT.lineTo(eT * nT - YT * kT, YT * nT + eT * kT), TT.lineTo(eT * WT + YT * zT, eT * zT - YT * WT), TT.lineTo(eT * MT + YT * gT, eT * gT - YT * MT), TT.lineTo(eT * nT + YT * kT, eT * kT - YT * nT), TT.closePath()
        }
      };
    var wT = mT(6186),
      tT = mT(6188);
    HT(3), HT(3);
    var aT = mT(5177),
      yT = mT(5497);

    function XT(TT) {
      return XT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, XT(TT)
    }
    var IT = ["type", "size", "sizeType"];

    function QT() {
      return QT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, QT.apply(this, arguments)
    }

    function sT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function FT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? sT(Object(mT), !0).forEach((function(UT) {
          PT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : sT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function PT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != XT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != XT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == XT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function VT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }
    var uT = {
        symbolCircle: lT,
        symbolCross: LT,
        symbolDiamond: ZT,
        symbolSquare: cT,
        symbolStar: iT,
        symbolTriangle: OT,
        symbolWye: dT
      },
      CT = Math.PI / 180,
      rT = function(TT) {
        var UT = TT.type,
          mT = void 0 === UT ? "circle" : UT,
          zT = TT.size,
          gT = void 0 === zT ? 64 : zT,
          nT = TT.sizeType,
          HT = void 0 === nT ? "area" : nT,
          kT = FT(FT({}, VT(TT, IT)), {}, {
            type: mT,
            size: gT,
            sizeType: HT
          }),
          jT = kT.className,
          LT = kT.cx,
          pT = kT.cy,
          BT = (0, yT.b)(kT, !0);
        return LT === +LT && pT === +pT && gT === +gT ? WT.createElement("path", QT({}, BT, {
          className: (0, aT.c)("recharts-symbols", jT),
          transform: "translate(".concat(LT, ", ").concat(pT, ")"),
          d: function() {
            var TT = function(TT) {
                var UT = "symbol".concat(MT()(TT));
                return uT[UT] || lT
              }(mT),
              UT = function(TT, UT) {
                let mT = null,
                  WT = (0, tT.b)(zT);

                function zT() {
                  let zT;
                  if (mT || (mT = zT = WT()), TT.apply(this, arguments).draw(mT, +UT.apply(this, arguments)), zT) return mT = null, zT + "" || null
                }
                return TT = "function" === typeof TT ? TT : (0, wT.b)(TT || lT), UT = "function" === typeof UT ? UT : (0, wT.b)(void 0 === UT ? 64 : +UT), zT.type = function(UT) {
                  return arguments.length ? (TT = "function" === typeof UT ? UT : (0, wT.b)(UT), zT) : TT
                }, zT.size = function(TT) {
                  return arguments.length ? (UT = "function" === typeof TT ? TT : (0, wT.b)(+TT), zT) : UT
                }, zT.context = function(TT) {
                  return arguments.length ? (mT = null == TT ? null : TT, zT) : mT
                }, zT
              }().type(TT).size(function(TT, UT, mT) {
                if ("area" === UT) return TT;
                switch (mT) {
                  case "cross":
                    return 5 * TT * TT / 9;
                  case "diamond":
                    return .5 * TT * TT / Math.sqrt(3);
                  case "square":
                    return TT * TT;
                  case "star":
                    var WT = 18 * CT;
                    return 1.25 * TT * TT * (Math.tan(WT) - Math.tan(2 * WT) * Math.pow(Math.tan(WT), 2));
                  case "triangle":
                    return Math.sqrt(3) * TT * TT / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * TT * TT / 8;
                  default:
                    return Math.PI * TT * TT / 4
                }
              }(gT, HT, mT));
            return UT()
          }()
        })) : null
      };
    rT.registerSymbol = function(TT, UT) {
      uT["symbol".concat(MT()(TT))] = UT
    }
  },
  6373: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => PT,
      f: () => GT,
      j: () => VT,
      l: () => uT,
      o: () => CT
    });
    var WT = mT(63),
      zT = mT(5337),
      MT = mT.n(zT),
      gT = mT(6376),
      nT = mT.n(gT),
      HT = mT(6387),
      kT = mT.n(HT),
      jT = mT(6288),
      lT = mT.n(jT),
      LT = mT(6200),
      pT = mT(5177),
      BT = mT(6205),
      ZT = mT(5497);

    function cT(TT) {
      return cT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, cT(TT)
    }

    function vT() {
      return vT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT) Object.prototype.hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, vT.apply(this, arguments)
    }

    function fT(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        var mT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != mT) {
          var WT, zT, MT, gT, nT = [],
            HT = !0,
            kT = !1;
          try {
            if (MT = (mT = mT.call(TT)).next, 0 === UT) {
              if (Object(mT) !== mT) return;
              HT = !1
            } else
              for (; !(HT = (WT = MT.call(mT)).done) && (nT.push(WT.value), nT.length !== UT); HT = !0);
          } catch (TT) {
            kT = !0, zT = TT
          } finally {
            try {
              if (!HT && null != mT.return && (gT = mT.return(), Object(gT) !== gT)) return
            } finally {
              if (kT) throw zT
            }
          }
          return nT
        }
      }(TT, UT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return qT(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return qT(TT, UT)
      }(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function iT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function bT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? iT(Object(mT), !0).forEach((function(UT) {
          OT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : iT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function OT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != cT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != cT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == cT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }
    var eT = function(TT, UT, mT, WT, zT) {
        var MT, gT = mT - WT;
        return MT = "M ".concat(TT, ",").concat(UT), MT += "L ".concat(TT + mT, ",").concat(UT), MT += "L ".concat(TT + mT - gT / 2, ",").concat(UT + zT), MT += "L ".concat(TT + mT - gT / 2 - WT, ",").concat(UT + zT), MT += "L ".concat(TT, ",").concat(UT, " Z")
      },
      YT = {
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
      JT = function(TT) {
        var UT = bT(bT({}, YT), TT),
          mT = (0, WT.useRef)(),
          zT = fT((0, WT.useState)(-1), 2),
          MT = zT[0],
          gT = zT[1];
        (0, WT.useEffect)((function() {
          if (mT.current && mT.current.getTotalLength) try {
            var TT = mT.current.getTotalLength();
            TT && gT(TT)
          } catch (UT) {}
        }), []);
        var nT = UT.x,
          HT = UT.y,
          kT = UT.upperWidth,
          jT = UT.lowerWidth,
          lT = UT.height,
          LT = UT.className,
          cT = UT.animationEasing,
          qT = UT.animationDuration,
          iT = UT.animationBegin,
          OT = UT.isUpdateAnimationActive;
        if (nT !== +nT || HT !== +HT || kT !== +kT || jT !== +jT || lT !== +lT || 0 === kT && 0 === jT || 0 === lT) return null;
        var JT = (0, pT.c)("recharts-trapezoid", LT);
        return OT ? WT.createElement(BT.d, {
          canBegin: MT > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: lT,
            x: nT,
            y: HT
          },
          to: {
            upperWidth: kT,
            lowerWidth: jT,
            height: lT,
            x: nT,
            y: HT
          },
          duration: qT,
          animationEasing: cT,
          isActive: OT
        }, (function(TT) {
          var zT = TT.upperWidth,
            gT = TT.lowerWidth,
            nT = TT.height,
            HT = TT.x,
            kT = TT.y;
          return WT.createElement(BT.d, {
            canBegin: MT > 0,
            from: "0px ".concat(-1 === MT ? 1 : MT, "px"),
            to: "".concat(MT, "px 0px"),
            attributeName: "strokeDasharray",
            np: iT,
            duration: qT,
            easing: cT
          }, WT.createElement("path", vT({}, (0, ZT.b)(UT, !0), {
            className: JT,
            d: eT(HT, kT, zT, gT, nT),
            ref: mT
          })))
        })) : WT.createElement("g", null, WT.createElement("path", vT({}, (0, ZT.b)(UT, !0), {
          className: JT,
          d: eT(nT, HT, kT, jT, lT)
        })))
      },
      xT = mT(6395),
      dT = mT(6056),
      wT = mT(6137),
      tT = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function aT(TT) {
      return aT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, aT(TT)
    }

    function yT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function XT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function IT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? XT(Object(mT), !0).forEach((function(UT) {
          QT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : XT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function QT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != aT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != aT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == aT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function sT(TT, UT) {
      return IT(IT({}, UT), TT)
    }

    function FT(TT) {
      var UT = TT.shapeType,
        mT = TT.elementProps;
      switch (UT) {
        case "rectangle":
          return WT.createElement(LT.d, mT);
        case "trapezoid":
          return WT.createElement(JT, mT);
        case "sector":
          return WT.createElement(xT.c, mT);
        case "symbols":
          if (function(TT) {
              return "symbols" === TT
            }(UT)) return WT.createElement(wT.e, mT);
          break;
        default:
          return null
      }
    }

    function PT(TT) {
      var UT, mT = TT.option,
        zT = TT.shapeType,
        gT = TT.propTransformer,
        HT = void 0 === gT ? sT : gT,
        jT = TT.activeClassName,
        lT = void 0 === jT ? "recharts-active-shape" : jT,
        LT = TT.isActive,
        pT = yT(TT, tT);
      if ((0, WT.isValidElement)(mT)) UT = (0, WT.cloneElement)(mT, IT(IT({}, pT), function(TT) {
        return (0, WT.isValidElement)(TT) ? TT.props : TT
      }(mT)));
      else if (MT()(mT)) UT = mT(pT);
      else if (nT()(mT) && !kT()(mT)) {
        var BT = HT(mT, pT);
        UT = WT.createElement(FT, {
          shapeType: zT,
          elementProps: BT
        })
      } else {
        var ZT = pT;
        UT = WT.createElement(FT, {
          shapeType: zT,
          elementProps: ZT
        })
      }
      return LT ? WT.createElement(dT.e, {
        className: lT
      }, UT) : UT
    }

    function VT(TT, UT) {
      return null != UT && "trapezoids" in TT.props
    }

    function uT(TT, UT) {
      return null != UT && "sectors" in TT.props
    }

    function CT(TT, UT) {
      return null != UT && "points" in TT.props
    }

    function rT(TT, UT) {
      var mT, WT, zT = TT.x === (null === UT || void 0 === UT || null === (mT = UT.labelViewBox) || void 0 === mT ? void 0 : mT.x) || TT.x === UT.x,
        MT = TT.y === (null === UT || void 0 === UT || null === (WT = UT.labelViewBox) || void 0 === WT ? void 0 : WT.y) || TT.y === UT.y;
      return zT && MT
    }

    function KT(TT, UT) {
      var mT = TT.endAngle === UT.endAngle,
        WT = TT.startAngle === UT.startAngle;
      return mT && WT
    }

    function ST(TT, UT) {
      var mT = TT.x === UT.x,
        WT = TT.y === UT.y,
        zT = TT.z === UT.z;
      return mT && WT && zT
    }

    function GT(TT) {
      var UT = TT.activeTooltipItem,
        mT = TT.graphicalItem,
        WT = TT.itemData,
        zT = function(TT, UT) {
          var mT;
          return VT(TT, UT) ? mT = "trapezoids" : uT(TT, UT) ? mT = "sectors" : CT(TT, UT) && (mT = "points"), mT
        }(mT, UT),
        MT = function(TT, UT) {
          var mT, WT;
          return VT(TT, UT) ? null === (mT = UT.tooltipPayload) || void 0 === mT || null === (mT = mT[0]) || void 0 === mT || null === (mT = mT.payload) || void 0 === mT ? void 0 : mT.payload : uT(TT, UT) ? null === (WT = UT.tooltipPayload) || void 0 === WT || null === (WT = WT[0]) || void 0 === WT || null === (WT = WT.payload) || void 0 === WT ? void 0 : WT.payload : CT(TT, UT) ? UT.payload : {}
        }(mT, UT),
        gT = WT.filter((function(TT, WT) {
          var gT = lT()(MT, TT),
            nT = mT.props[zT].filter((function(TT) {
              var WT = function(TT, UT) {
                var mT;
                return VT(TT, UT) ? mT = rT : uT(TT, UT) ? mT = KT : CT(TT, UT) && (mT = ST), mT
              }(mT, UT);
              return WT(TT, UT)
            })),
            HT = mT.props[zT].indexOf(nT[nT.length - 1]);
          return gT && WT === HT
        }));
      return WT.indexOf(gT[gT.length - 1])
    }
  },
  6327: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => bT,
      f: () => vT,
      g: () => OT,
      h: () => qT,
      l: () => fT
    });
    var WT = mT(6330),
      zT = mT.n(WT),
      MT = mT(6338),
      gT = mT.n(MT),
      nT = mT(6218),
      HT = mT(5497),
      kT = mT(5254),
      jT = mT(6354);

    function lT(TT) {
      return lT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, lT(TT)
    }

    function LT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, cT(WT.key), WT)
      }
    }

    function pT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function BT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? pT(Object(mT), !0).forEach((function(UT) {
          ZT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : pT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function ZT(TT, UT, mT) {
      return (UT = cT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function cT(TT) {
      var UT = function(TT, UT) {
        if ("object" != lT(TT) || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != lT(WT)) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == lT(UT) ? UT : UT + ""
    }
    var vT = function(TT, UT, mT, WT, zT) {
        var MT = TT.width,
          gT = TT.height,
          lT = TT.layout,
          LT = TT.children,
          pT = Object.keys(UT),
          cT = {
            left: mT.left,
            leftMirror: mT.left,
            right: MT - mT.right,
            rightMirror: MT - mT.right,
            top: mT.top,
            topMirror: mT.top,
            bottom: gT - mT.bottom,
            bottomMirror: gT - mT.bottom
          },
          vT = !!(0, HT.h)(LT, jT.c);
        return pT.reduce((function(MT, gT) {
          var HT, jT, LT, pT, fT, qT = UT[gT],
            iT = qT.orientation,
            bT = qT.domain,
            OT = qT.padding,
            eT = void 0 === OT ? {} : OT,
            YT = qT.mirror,
            JT = qT.reversed,
            xT = "".concat(iT).concat(YT ? "Mirror" : "");
          if ("number" === qT.type && ("gap" === qT.padding || "no-gap" === qT.padding)) {
            var dT = bT[1] - bT[0],
              wT = 1 / 0,
              tT = qT.categoricalDomain.sort(kT.d);
            if (tT.forEach((function(TT, UT) {
                UT > 0 && (wT = Math.min((TT || 0) - (tT[UT - 1] || 0), wT))
              })), Number.isFinite(wT)) {
              var aT = wT / dT,
                yT = "vertical" === qT.layout ? mT.height : mT.width;
              if ("gap" === qT.padding && (HT = aT * yT / 2), "no-gap" === qT.padding) {
                var XT = (0, kT.n)(TT.barCategoryGap, aT * yT),
                  IT = aT * yT / 2;
                HT = IT - XT - (IT - XT) / yT * XT
              }
            }
          }
          jT = "xAxis" === WT ? [mT.left + (eT.left || 0) + (HT || 0), mT.left + mT.width - (eT.right || 0) - (HT || 0)] : "yAxis" === WT ? "horizontal" === lT ? [mT.top + mT.height - (eT.bottom || 0), mT.top + (eT.top || 0)] : [mT.top + (eT.top || 0) + (HT || 0), mT.top + mT.height - (eT.bottom || 0) - (HT || 0)] : qT.range, JT && (jT = [jT[1], jT[0]]);
          var QT = (0, nT.gb)(qT, zT, vT),
            sT = QT.scale,
            FT = QT.realScaleType;
          sT.domain(bT).range(jT), (0, nT.g)(sT);
          var PT = (0, nT.T)(sT, BT(BT({}, qT), {}, {
            realScaleType: FT
          }));
          "xAxis" === WT ? (fT = "top" === iT && !YT || "bottom" === iT && YT, LT = mT.left, pT = cT[xT] - fT * qT.height) : "yAxis" === WT && (fT = "left" === iT && !YT || "right" === iT && YT, LT = cT[xT] - fT * qT.width, pT = mT.top);
          var VT = BT(BT(BT({}, qT), PT), {}, {
            realScaleType: FT,
            x: LT,
            y: pT,
            scale: sT,
            width: "xAxis" === WT ? mT.width : qT.width,
            height: "yAxis" === WT ? mT.height : qT.height
          });
          return VT.bandSize = (0, nT.o)(VT, PT), qT.hide || "xAxis" !== WT ? qT.hide || (cT[xT] += (fT ? -1 : 1) * VT.width) : cT[xT] += (fT ? -1 : 1) * VT.height, BT(BT({}, MT), {}, ZT({}, gT, VT))
        }), {})
      },
      fT = function(TT, UT) {
        var mT = TT.x,
          WT = TT.y,
          zT = UT.x,
          MT = UT.y;
        return {
          x: Math.min(mT, zT),
          y: Math.min(WT, MT),
          width: Math.abs(zT - mT),
          height: Math.abs(MT - WT)
        }
      },
      qT = function(TT) {
        var UT = TT.x1,
          mT = TT.y1,
          WT = TT.x2,
          zT = TT.y2;
        return fT({
          x: UT,
          y: mT
        }, {
          x: WT,
          y: zT
        })
      },
      iT = function() {
        function TT(UT) {
          ! function(TT, UT) {
            if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
          }(this, TT), this.scale = UT
        }
        return UT = TT, mT = [{
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
          value: function(TT) {
            var UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              mT = UT.bandAware,
              WT = UT.position;
            if (void 0 !== TT) {
              if (WT) switch (WT) {
                case "start":
                default:
                  return this.scale(TT);
                case "middle":
                  var zT = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(TT) + zT;
                case "end":
                  var MT = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(TT) + MT
              }
              if (mT) {
                var gT = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(TT) + gT
              }
              return this.scale(TT)
            }
          }
        }, {
          key: "isInRange",
          value: function(TT) {
            var UT = this.range(),
              mT = UT[0],
              WT = UT[UT.length - 1];
            return mT <= WT ? TT >= mT && TT <= WT : TT >= WT && TT <= mT
          }
        }], WT = [{
          key: "create",
          value: function(UT) {
            return new TT(UT)
          }
        }], mT && LT(UT.prototype, mT), WT && LT(UT, WT), Object.defineProperty(UT, "prototype", {
          writable: !1
        }), UT;
        var UT, mT, WT
      }();
    ZT(iT, "EPS", 1e-4);
    var bT = function(TT) {
      var UT = Object.keys(TT).reduce((function(UT, mT) {
        return BT(BT({}, UT), {}, ZT({}, mT, iT.create(TT[mT])))
      }), {});
      return BT(BT({}, UT), {}, {
        apply: function(TT) {
          var mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            WT = mT.bandAware,
            MT = mT.position;
          return zT()(TT, (function(TT, mT) {
            return UT[mT].apply(TT, {
              bandAware: WT,
              position: MT
            })
          }))
        },
        isInRange: function(TT) {
          return gT()(TT, (function(TT, mT) {
            return UT[mT].isInRange(TT)
          }))
        }
      })
    };
    var OT = function(TT) {
      var UT = TT.width,
        mT = TT.height,
        WT = function(TT) {
          return (TT % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        zT = WT * Math.PI / 180,
        MT = Math.atan(mT / UT),
        gT = zT > MT && zT < Math.PI - MT ? mT / Math.sin(zT) : UT / Math.cos(zT);
      return Math.abs(gT)
    }
  },
  6218: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => Xg,
      f: () => wg,
      g: () => Sg,
      k: () => Cg,
      n: () => Gg,
      o: () => gn,
      p: () => yg,
      s: () => ag,
      t: () => Tn,
      v: () => Rg,
      x: () => Ag,
      y: () => Pg,
      z: () => dg,
      C: () => sg,
      E: () => mn,
      H: () => tg,
      K: () => Dg,
      O: () => Un,
      P: () => Vg,
      T: () => og,
      X: () => Hn,
      _: () => xg,
      $: () => Fg,
      bb: () => nn,
      db: () => Qg,
      gb: () => rg,
      kb: () => Mn,
      mb: () => Ng
    });
    var WT = {};
    mT.r(WT), mT.d(WT, {
      scaleBand: () => zT.e,
      scaleDiverging: () => kM,
      scaleDivergingLog: () => jM,
      scaleDivergingPow: () => LM,
      scaleDivergingSqrt: () => pM,
      scaleDivergingSymlog: () => lM,
      scaleIdentity: () => hU,
      scaleImplicit: () => km.f,
      scaleLinear: () => EU,
      scaleLog: () => zm,
      scaleOrdinal: () => km.d,
      scalePoint: () => zT.f,
      scalePow: () => Bm,
      scaleQuantile: () => dm,
      scaleQuantize: () => wm,
      scaleRadial: () => fm,
      scaleSequential: () => mM,
      scaleSequentialLog: () => WM,
      scaleSequentialPow: () => MM,
      scaleSequentialQuantile: () => nM,
      scaleSequentialSqrt: () => gM,
      scaleSequentialSymlog: () => zM,
      scaleSqrt: () => Zm,
      scaleSymlog: () => Hm,
      scaleThreshold: () => tm,
      scaleTime: () => Az,
      scaleUtc: () => Rz,
      tickFormat: () => GU
    });
    var zT = mT(6226);
    const MT = Math.sqrt(50),
      gT = Math.sqrt(10),
      nT = Math.sqrt(2);

    function HT(TT, UT, mT) {
      const WT = (UT - TT) / Math.max(0, mT),
        zT = Math.floor(Math.log10(WT)),
        kT = WT / Math.pow(10, zT),
        jT = kT >= MT ? 10 : kT >= gT ? 5 : kT >= nT ? 2 : 1;
      let lT, LT, pT;
      return zT < 0 ? (pT = Math.pow(10, -zT) / jT, lT = Math.round(TT * pT), LT = Math.round(UT * pT), lT / pT < TT && ++lT, LT / pT > UT && --LT, pT = -pT) : (pT = Math.pow(10, zT) * jT, lT = Math.round(TT / pT), LT = Math.round(UT / pT), lT * pT < TT && ++lT, LT * pT > UT && --LT), LT < lT && .5 <= mT && mT < 2 ? HT(TT, UT, 2 * mT) : [lT, LT, pT]
    }

    function kT(TT, UT, mT) {
      if (!((mT = +mT) > 0)) return [];
      if ((TT = +TT) === (UT = +UT)) return [TT];
      const WT = UT < TT,
        [zT, MT, gT] = WT ? HT(UT, TT, mT) : HT(TT, UT, mT);
      if (!(MT >= zT)) return [];
      const nT = MT - zT + 1,
        kT = new Array(nT);
      if (WT)
        if (gT < 0)
          for (let HT = 0; HT < nT; ++HT) kT[HT] = (MT - HT) / -gT;
        else
          for (let HT = 0; HT < nT; ++HT) kT[HT] = (MT - HT) * gT;
      else if (gT < 0)
        for (let HT = 0; HT < nT; ++HT) kT[HT] = (zT + HT) / -gT;
      else
        for (let HT = 0; HT < nT; ++HT) kT[HT] = (zT + HT) * gT;
      return kT
    }

    function jT(TT, UT, mT) {
      return HT(TT = +TT, UT = +UT, mT = +mT)[2]
    }

    function lT(TT, UT, mT) {
      mT = +mT;
      const WT = (UT = +UT) < (TT = +TT),
        zT = WT ? jT(UT, TT, mT) : jT(TT, UT, mT);
      return (WT ? -1 : 1) * (zT < 0 ? 1 / -zT : zT)
    }

    function LT(TT, UT) {
      return null == TT || null == UT ? NaN : TT < UT ? -1 : TT > UT ? 1 : TT >= UT ? 0 : NaN
    }

    function pT(TT, UT) {
      return null == TT || null == UT ? NaN : UT < TT ? -1 : UT > TT ? 1 : UT >= TT ? 0 : NaN
    }

    function BT(TT) {
      let UT, mT, WT;

      function zT(TT, WT) {
        let zT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length;
        if (zT < MT) {
          if (0 !== UT(WT, WT)) return MT;
          do {
            const UT = zT + MT >>> 1;
            mT(TT[UT], WT) < 0 ? zT = UT + 1 : MT = UT
          } while (zT < MT)
        }
        return zT
      }
      return 2 !== TT.length ? (UT = LT, mT = (UT, mT) => LT(TT(UT), mT), WT = (UT, mT) => TT(UT) - mT) : (UT = TT === LT || TT === pT ? TT : ZT, mT = TT, WT = TT), {
        left: zT,
        center: function(TT, UT) {
          let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const MT = zT(TT, UT, mT, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length) - 1);
          return MT > mT && WT(TT[MT - 1], UT) > -WT(TT[MT], UT) ? MT - 1 : MT
        },
        right: function(TT, WT) {
          let zT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length;
          if (zT < MT) {
            if (0 !== UT(WT, WT)) return MT;
            do {
              const UT = zT + MT >>> 1;
              mT(TT[UT], WT) <= 0 ? zT = UT + 1 : MT = UT
            } while (zT < MT)
          }
          return zT
        }
      }
    }

    function ZT() {
      return 0
    }

    function cT(TT) {
      return null === TT ? NaN : +TT
    }
    const vT = BT(LT),
      fT = vT.right,
      qT = (vT.left, BT(cT).center, fT);

    function iT(TT, UT, mT) {
      TT.prototype = UT.prototype = mT, mT.constructor = TT
    }

    function bT(TT, UT) {
      var mT = Object.create(TT.prototype);
      for (var WT in UT) mT[WT] = UT[WT];
      return mT
    }

    function OT() {}
    var eT = .7,
      YT = 1 / eT,
      JT = "\\s*([+-]?\\d+)\\s*",
      xT = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      dT = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      wT = /^#([0-9a-f]{3,8})$/,
      tT = new RegExp(`^rgb\\(${JT},${JT},${JT}\\)$`),
      aT = new RegExp(`^rgb\\(${dT},${dT},${dT}\\)$`),
      yT = new RegExp(`^rgba\\(${JT},${JT},${JT},${xT}\\)$`),
      XT = new RegExp(`^rgba\\(${dT},${dT},${dT},${xT}\\)$`),
      IT = new RegExp(`^hsl\\(${xT},${dT},${dT}\\)$`),
      QT = new RegExp(`^hsla\\(${xT},${dT},${dT},${xT}\\)$`),
      sT = {
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

    function FT() {
      return this.rgb().formatHex()
    }

    function PT() {
      return this.rgb().formatRgb()
    }

    function VT(TT) {
      var UT, mT;
      return TT = (TT + "").trim().toLowerCase(), (UT = wT.exec(TT)) ? (mT = UT[1].length, UT = parseInt(UT[1], 16), 6 === mT ? uT(UT) : 3 === mT ? new KT(UT >> 8 & 15 | UT >> 4 & 240, UT >> 4 & 15 | 240 & UT, (15 & UT) << 4 | 15 & UT, 1) : 8 === mT ? CT(UT >> 24 & 255, UT >> 16 & 255, UT >> 8 & 255, (255 & UT) / 255) : 4 === mT ? CT(UT >> 12 & 15 | UT >> 8 & 240, UT >> 8 & 15 | UT >> 4 & 240, UT >> 4 & 15 | 240 & UT, ((15 & UT) << 4 | 15 & UT) / 255) : null) : (UT = tT.exec(TT)) ? new KT(UT[1], UT[2], UT[3], 1) : (UT = aT.exec(TT)) ? new KT(255 * UT[1] / 100, 255 * UT[2] / 100, 255 * UT[3] / 100, 1) : (UT = yT.exec(TT)) ? CT(UT[1], UT[2], UT[3], UT[4]) : (UT = XT.exec(TT)) ? CT(255 * UT[1] / 100, 255 * UT[2] / 100, 255 * UT[3] / 100, UT[4]) : (UT = IT.exec(TT)) ? DT(UT[1], UT[2] / 100, UT[3] / 100, 1) : (UT = QT.exec(TT)) ? DT(UT[1], UT[2] / 100, UT[3] / 100, UT[4]) : sT.hasOwnProperty(TT) ? uT(sT[TT]) : "transparent" === TT ? new KT(NaN, NaN, NaN, 0) : null
    }

    function uT(TT) {
      return new KT(TT >> 16 & 255, TT >> 8 & 255, 255 & TT, 1)
    }

    function CT(TT, UT, mT, WT) {
      return WT <= 0 && (TT = UT = mT = NaN), new KT(TT, UT, mT, WT)
    }

    function rT(TT, UT, mT, WT) {
      return 1 === arguments.length ? ((zT = TT) instanceof OT || (zT = VT(zT)), zT ? new KT((zT = zT.rgb()).r, zT.g, zT.b, zT.opacity) : new KT) : new KT(TT, UT, mT, null == WT ? 1 : WT);
      var zT
    }

    function KT(TT, UT, mT, WT) {
      this.r = +TT, this.g = +UT, this.b = +mT, this.opacity = +WT
    }

    function ST() {
      return `#${hT(this.r)}${hT(this.g)}${hT(this.b)}`
    }

    function GT() {
      const TT = NT(this.opacity);
      return `${1===TT?"rgb(":"rgba("}${ET(this.r)}, ${ET(this.g)}, ${ET(this.b)}${1===TT?")":`, ${TT})`}`
    }

    function NT(TT) {
      return isNaN(TT) ? 1 : Math.max(0, Math.min(1, TT))
    }

    function ET(TT) {
      return Math.max(0, Math.min(255, Math.round(TT) || 0))
    }

    function hT(TT) {
      return ((TT = ET(TT)) < 16 ? "0" : "") + TT.toString(16)
    }

    function DT(TT, UT, mT, WT) {
      return WT <= 0 ? TT = UT = mT = NaN : mT <= 0 || mT >= 1 ? TT = UT = NaN : UT <= 0 && (TT = NaN), new AT(TT, UT, mT, WT)
    }

    function oT(TT) {
      if (TT instanceof AT) return new AT(TT.h, TT.s, TT.l, TT.opacity);
      if (TT instanceof OT || (TT = VT(TT)), !TT) return new AT;
      if (TT instanceof AT) return TT;
      var UT = (TT = TT.rgb()).r / 255,
        mT = TT.g / 255,
        WT = TT.b / 255,
        zT = Math.min(UT, mT, WT),
        MT = Math.max(UT, mT, WT),
        gT = NaN,
        nT = MT - zT,
        HT = (MT + zT) / 2;
      return nT ? (gT = UT === MT ? (mT - WT) / nT + 6 * (mT < WT) : mT === MT ? (WT - UT) / nT + 2 : (UT - mT) / nT + 4, nT /= HT < .5 ? MT + zT : 2 - MT - zT, gT *= 60) : nT = HT > 0 && HT < 1 ? 0 : gT, new AT(gT, nT, HT, TT.opacity)
    }

    function AT(TT, UT, mT, WT) {
      this.h = +TT, this.s = +UT, this.l = +mT, this.opacity = +WT
    }

    function RT(TT) {
      return (TT = (TT || 0) % 360) < 0 ? TT + 360 : TT
    }

    function TU(TT) {
      return Math.max(0, Math.min(1, TT || 0))
    }

    function UU(TT, UT, mT) {
      return 255 * (TT < 60 ? UT + (mT - UT) * TT / 60 : TT < 180 ? mT : TT < 240 ? UT + (mT - UT) * (240 - TT) / 60 : UT)
    }

    function mU(TT, UT, mT, WT, zT) {
      var MT = TT * TT,
        gT = MT * TT;
      return ((1 - 3 * TT + 3 * MT - gT) * UT + (4 - 6 * MT + 3 * gT) * mT + (1 + 3 * TT + 3 * MT - 3 * gT) * WT + gT * zT) / 6
    }
    iT(OT, VT, {
      copy(TT) {
        return Object.assign(new this.constructor, this, TT)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: FT,
      formatHex: FT,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return oT(this).formatHsl()
      },
      formatRgb: PT,
      toString: PT
    }), iT(KT, rT, bT(OT, {
      brighter(TT) {
        return TT = null == TT ? YT : Math.pow(YT, TT), new KT(this.r * TT, this.g * TT, this.b * TT, this.opacity)
      },
      darker(TT) {
        return TT = null == TT ? eT : Math.pow(eT, TT), new KT(this.r * TT, this.g * TT, this.b * TT, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new KT(ET(this.r), ET(this.g), ET(this.b), NT(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: ST,
      formatHex: ST,
      formatHex8: function() {
        return `#${hT(this.r)}${hT(this.g)}${hT(this.b)}${hT(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: GT,
      toString: GT
    })), iT(AT, (function(TT, UT, mT, WT) {
      return 1 === arguments.length ? oT(TT) : new AT(TT, UT, mT, null == WT ? 1 : WT)
    }), bT(OT, {
      brighter(TT) {
        return TT = null == TT ? YT : Math.pow(YT, TT), new AT(this.h, this.s, this.l * TT, this.opacity)
      },
      darker(TT) {
        return TT = null == TT ? eT : Math.pow(eT, TT), new AT(this.h, this.s, this.l * TT, this.opacity)
      },
      rgb() {
        var TT = this.h % 360 + 360 * (this.h < 0),
          UT = isNaN(TT) || isNaN(this.s) ? 0 : this.s,
          mT = this.l,
          WT = mT + (mT < .5 ? mT : 1 - mT) * UT,
          zT = 2 * mT - WT;
        return new KT(UU(TT >= 240 ? TT - 240 : TT + 120, zT, WT), UU(TT, zT, WT), UU(TT < 120 ? TT + 240 : TT - 120, zT, WT), this.opacity)
      },
      clamp() {
        return new AT(RT(this.h), TU(this.s), TU(this.l), NT(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const TT = NT(this.opacity);
        return `${1===TT?"hsl(":"hsla("}${RT(this.h)}, ${100*TU(this.s)}%, ${100*TU(this.l)}%${1===TT?")":`, ${TT})`}`
      }
    }));
    const WU = TT => () => TT;

    function zU(TT, UT) {
      return function(mT) {
        return TT + mT * UT
      }
    }

    function MU(TT) {
      return 1 === (TT = +TT) ? gU : function(UT, mT) {
        return mT - UT ? function(TT, UT, mT) {
          return TT = Math.pow(TT, mT), UT = Math.pow(UT, mT) - TT, mT = 1 / mT,
            function(WT) {
              return Math.pow(TT + WT * UT, mT)
            }
        }(UT, mT, TT) : WU(isNaN(UT) ? mT : UT)
      }
    }

    function gU(TT, UT) {
      var mT = UT - TT;
      return mT ? zU(TT, mT) : WU(isNaN(TT) ? UT : TT)
    }
    const nU = function TT(UT) {
      var mT = MU(UT);

      function WT(TT, UT) {
        var WT = mT((TT = rT(TT)).r, (UT = rT(UT)).r),
          zT = mT(TT.g, UT.g),
          MT = mT(TT.b, UT.b),
          gT = gU(TT.opacity, UT.opacity);
        return function(UT) {
          return TT.r = WT(UT), TT.g = zT(UT), TT.b = MT(UT), TT.opacity = gT(UT), TT + ""
        }
      }
      return WT.gamma = TT, WT
    }(1);

    function HU(TT) {
      return function(UT) {
        var mT, WT, zT = UT.length,
          MT = new Array(zT),
          gT = new Array(zT),
          nT = new Array(zT);
        for (mT = 0; mT < zT; ++mT) WT = rT(UT[mT]), MT[mT] = WT.r || 0, gT[mT] = WT.g || 0, nT[mT] = WT.b || 0;
        return MT = TT(MT), gT = TT(gT), nT = TT(nT), WT.opacity = 1,
          function(TT) {
            return WT.r = MT(TT), WT.g = gT(TT), WT.b = nT(TT), WT + ""
          }
      }
    }
    HU((function(TT) {
      var UT = TT.length - 1;
      return function(mT) {
        var WT = mT <= 0 ? mT = 0 : mT >= 1 ? (mT = 1, UT - 1) : Math.floor(mT * UT),
          zT = TT[WT],
          MT = TT[WT + 1],
          gT = WT > 0 ? TT[WT - 1] : 2 * zT - MT,
          nT = WT < UT - 1 ? TT[WT + 2] : 2 * MT - zT;
        return mU((mT - WT / UT) * UT, gT, zT, MT, nT)
      }
    })), HU((function(TT) {
      var UT = TT.length;
      return function(mT) {
        var WT = Math.floor(((mT %= 1) < 0 ? ++mT : mT) * UT),
          zT = TT[(WT + UT - 1) % UT],
          MT = TT[WT % UT],
          gT = TT[(WT + 1) % UT],
          nT = TT[(WT + 2) % UT];
        return mU((mT - WT / UT) * UT, zT, MT, gT, nT)
      }
    }));

    function kU(TT, UT) {
      var mT, WT = UT ? UT.length : 0,
        zT = TT ? Math.min(WT, TT.length) : 0,
        MT = new Array(zT),
        gT = new Array(WT);
      for (mT = 0; mT < zT; ++mT) MT[mT] = vU(TT[mT], UT[mT]);
      for (; mT < WT; ++mT) gT[mT] = UT[mT];
      return function(TT) {
        for (mT = 0; mT < zT; ++mT) gT[mT] = MT[mT](TT);
        return gT
      }
    }

    function jU(TT, UT) {
      var mT = new Date;
      return TT = +TT, UT = +UT,
        function(WT) {
          return mT.setTime(TT * (1 - WT) + UT * WT), mT
        }
    }

    function lU(TT, UT) {
      return TT = +TT, UT = +UT,
        function(mT) {
          return TT * (1 - mT) + UT * mT
        }
    }

    function LU(TT, UT) {
      var mT, WT = {},
        zT = {};
      for (mT in null !== TT && "object" === typeof TT || (TT = {}), null !== UT && "object" === typeof UT || (UT = {}), UT) mT in TT ? WT[mT] = vU(TT[mT], UT[mT]) : zT[mT] = UT[mT];
      return function(TT) {
        for (mT in WT) zT[mT] = WT[mT](TT);
        return zT
      }
    }
    var pU = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      BU = new RegExp(pU.source, "g");

    function ZU(TT, UT) {
      var mT, WT, zT, MT = pU.lastIndex = BU.lastIndex = 0,
        gT = -1,
        nT = [],
        HT = [];
      for (TT += "", UT += "";
        (mT = pU.exec(TT)) && (WT = BU.exec(UT));)(zT = WT.index) > MT && (zT = UT.slice(MT, zT), nT[gT] ? nT[gT] += zT : nT[++gT] = zT), (mT = mT[0]) === (WT = WT[0]) ? nT[gT] ? nT[gT] += WT : nT[++gT] = WT : (nT[++gT] = null, HT.push({
        i: gT,
        x: lU(mT, WT)
      })), MT = BU.lastIndex;
      return MT < UT.length && (zT = UT.slice(MT), nT[gT] ? nT[gT] += zT : nT[++gT] = zT), nT.length < 2 ? HT[0] ? function(TT) {
        return function(UT) {
          return TT(UT) + ""
        }
      }(HT[0].x) : function(TT) {
        return function() {
          return TT
        }
      }(UT) : (UT = HT.length, function(TT) {
        for (var mT, WT = 0; WT < UT; ++WT) nT[(mT = HT[WT]).i] = mT.x(TT);
        return nT.join("")
      })
    }

    function cU(TT, UT) {
      UT || (UT = []);
      var mT, WT = TT ? Math.min(UT.length, TT.length) : 0,
        zT = UT.slice();
      return function(MT) {
        for (mT = 0; mT < WT; ++mT) zT[mT] = TT[mT] * (1 - MT) + UT[mT] * MT;
        return zT
      }
    }

    function vU(TT, UT) {
      var mT, WT, zT = typeof UT;
      return null == UT || "boolean" === zT ? WU(UT) : ("number" === zT ? lU : "string" === zT ? (mT = VT(UT)) ? (UT = mT, nU) : ZU : UT instanceof VT ? nU : UT instanceof Date ? jU : (WT = UT, !ArrayBuffer.isView(WT) || WT instanceof DataView ? Array.isArray(UT) ? kU : "function" !== typeof UT.valueOf && "function" !== typeof UT.toString || isNaN(UT) ? LU : lU : cU))(TT, UT)
    }

    function fU(TT, UT) {
      return TT = +TT, UT = +UT,
        function(mT) {
          return Math.round(TT * (1 - mT) + UT * mT)
        }
    }

    function qU(TT) {
      return +TT
    }
    var iU = [0, 1];

    function bU(TT) {
      return TT
    }

    function OU(TT, UT) {
      return (UT -= TT = +TT) ? function(mT) {
        return (mT - TT) / UT
      } : (mT = isNaN(UT) ? NaN : .5, function() {
        return mT
      });
      var mT
    }

    function eU(TT, UT, mT) {
      var WT = TT[0],
        zT = TT[1],
        MT = UT[0],
        gT = UT[1];
      return zT < WT ? (WT = OU(zT, WT), MT = mT(gT, MT)) : (WT = OU(WT, zT), MT = mT(MT, gT)),
        function(TT) {
          return MT(WT(TT))
        }
    }

    function YU(TT, UT, mT) {
      var WT = Math.min(TT.length, UT.length) - 1,
        zT = new Array(WT),
        MT = new Array(WT),
        gT = -1;
      for (TT[WT] < TT[0] && (TT = TT.slice().reverse(), UT = UT.slice().reverse()); ++gT < WT;) zT[gT] = OU(TT[gT], TT[gT + 1]), MT[gT] = mT(UT[gT], UT[gT + 1]);
      return function(UT) {
        var mT = qT(TT, UT, 1, WT) - 1;
        return MT[mT](zT[mT](UT))
      }
    }

    function JU(TT, UT) {
      return UT.domain(TT.domain()).range(TT.range()).interpolate(TT.interpolate()).clamp(TT.clamp()).unknown(TT.unknown())
    }

    function xU() {
      var TT, UT, mT, WT, zT, MT, gT = iU,
        nT = iU,
        HT = vU,
        kT = bU;

      function jT() {
        var TT = Math.min(gT.length, nT.length);
        return kT !== bU && (kT = function(TT, UT) {
          var mT;
          return TT > UT && (mT = TT, TT = UT, UT = mT),
            function(mT) {
              return Math.max(TT, Math.min(UT, mT))
            }
        }(gT[0], gT[TT - 1])), WT = TT > 2 ? YU : eU, zT = MT = null, lT
      }

      function lT(UT) {
        return null == UT || isNaN(UT = +UT) ? mT : (zT || (zT = WT(gT.map(TT), nT, HT)))(TT(kT(UT)))
      }
      return lT.invert = function(mT) {
          return kT(UT((MT || (MT = WT(nT, gT.map(TT), lU)))(mT)))
        }, lT.domain = function(TT) {
          return arguments.length ? (gT = Array.from(TT, qU), jT()) : gT.slice()
        }, lT.range = function(TT) {
          return arguments.length ? (nT = Array.from(TT), jT()) : nT.slice()
        }, lT.rangeRound = function(TT) {
          return nT = Array.from(TT), HT = fU, jT()
        }, lT.clamp = function(TT) {
          return arguments.length ? (kT = !!TT || bU, jT()) : kT !== bU
        }, lT.interpolate = function(TT) {
          return arguments.length ? (HT = TT, jT()) : HT
        }, lT.unknown = function(TT) {
          return arguments.length ? (mT = TT, lT) : mT
        },
        function(mT, WT) {
          return TT = mT, UT = WT, jT()
        }
    }

    function dU() {
      return xU()(bU, bU)
    }
    var wU, tU = mT(6231),
      aU = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function yU(TT) {
      if (!(UT = aU.exec(TT))) throw new Error("invalid format: " + TT);
      var UT;
      return new XU({
        fill: UT[1],
        align: UT[2],
        sign: UT[3],
        symbol: UT[4],
        zero: UT[5],
        width: UT[6],
        comma: UT[7],
        precision: UT[8] && UT[8].slice(1),
        trim: UT[9],
        type: UT[10]
      })
    }

    function XU(TT) {
      this.fill = void 0 === TT.fill ? " " : TT.fill + "", this.align = void 0 === TT.align ? ">" : TT.align + "", this.sign = void 0 === TT.sign ? "-" : TT.sign + "", this.symbol = void 0 === TT.symbol ? "" : TT.symbol + "", this.zero = !!TT.zero, this.width = void 0 === TT.width ? void 0 : +TT.width, this.comma = !!TT.comma, this.precision = void 0 === TT.precision ? void 0 : +TT.precision, this.trim = !!TT.trim, this.type = void 0 === TT.type ? "" : TT.type + ""
    }

    function IU(TT, UT) {
      if (!isFinite(TT) || 0 === TT) return null;
      var mT = (TT = UT ? TT.toExponential(UT - 1) : TT.toExponential()).indexOf("e"),
        WT = TT.slice(0, mT);
      return [WT.length > 1 ? WT[0] + WT.slice(2) : WT, +TT.slice(mT + 1)]
    }

    function QU(TT) {
      return (TT = IU(Math.abs(TT))) ? TT[1] : NaN
    }

    function sU(TT, UT) {
      var mT = IU(TT, UT);
      if (!mT) return TT + "";
      var WT = mT[0],
        zT = mT[1];
      return zT < 0 ? "0." + new Array(-zT).join("0") + WT : WT.length > zT + 1 ? WT.slice(0, zT + 1) + "." + WT.slice(zT + 1) : WT + new Array(zT - WT.length + 2).join("0")
    }
    yU.prototype = XU.prototype, XU.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const FU = {
      "%": (TT, UT) => (100 * TT).toFixed(UT),
      b: TT => Math.round(TT).toString(2),
      c: TT => TT + "",
      d: function(TT) {
        return Math.abs(TT = Math.round(TT)) >= 1e21 ? TT.toLocaleString("en").replace(/,/g, "") : TT.toString(10)
      },
      e: (TT, UT) => TT.toExponential(UT),
      f: (TT, UT) => TT.toFixed(UT),
      g: (TT, UT) => TT.toPrecision(UT),
      o: TT => Math.round(TT).toString(8),
      p: (TT, UT) => sU(100 * TT, UT),
      r: sU,
      s: function(TT, UT) {
        var mT = IU(TT, UT);
        if (!mT) return wU = void 0, TT.toPrecision(UT);
        var WT = mT[0],
          zT = mT[1],
          MT = zT - (wU = 3 * Math.max(-8, Math.min(8, Math.floor(zT / 3)))) + 1,
          gT = WT.length;
        return MT === gT ? WT : MT > gT ? WT + new Array(MT - gT + 1).join("0") : MT > 0 ? WT.slice(0, MT) + "." + WT.slice(MT) : "0." + new Array(1 - MT).join("0") + IU(TT, Math.max(0, UT + MT - 1))[0]
      },
      X: TT => Math.round(TT).toString(16).toUpperCase(),
      x: TT => Math.round(TT).toString(16)
    };

    function PU(TT) {
      return TT
    }
    var VU, uU, CU, rU = Array.prototype.map,
      KU = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function SU(TT) {
      var UT, mT, WT = void 0 === TT.grouping || void 0 === TT.thousands ? PU : (UT = rU.call(TT.grouping, Number), mT = TT.thousands + "", function(TT, WT) {
          for (var zT = TT.length, MT = [], gT = 0, nT = UT[0], HT = 0; zT > 0 && nT > 0 && (HT + nT + 1 > WT && (nT = Math.max(1, WT - HT)), MT.push(TT.substring(zT -= nT, zT + nT)), !((HT += nT + 1) > WT));) nT = UT[gT = (gT + 1) % UT.length];
          return MT.reverse().join(mT)
        }),
        zT = void 0 === TT.currency ? "" : TT.currency[0] + "",
        MT = void 0 === TT.currency ? "" : TT.currency[1] + "",
        gT = void 0 === TT.decimal ? "." : TT.decimal + "",
        nT = void 0 === TT.numerals ? PU : function(TT) {
          return function(UT) {
            return UT.replace(/[0-9]/g, (function(UT) {
              return TT[+UT]
            }))
          }
        }(rU.call(TT.numerals, String)),
        HT = void 0 === TT.percent ? "%" : TT.percent + "",
        kT = void 0 === TT.minus ? "\u2212" : TT.minus + "",
        jT = void 0 === TT.nan ? "NaN" : TT.nan + "";

      function lT(TT, UT) {
        var mT = (TT = yU(TT)).fill,
          lT = TT.align,
          LT = TT.sign,
          pT = TT.symbol,
          BT = TT.zero,
          ZT = TT.width,
          cT = TT.comma,
          vT = TT.precision,
          fT = TT.trim,
          qT = TT.type;
        "n" === qT ? (cT = !0, qT = "g") : FU[qT] || (void 0 === vT && (vT = 12), fT = !0, qT = "g"), (BT || "0" === mT && "=" === lT) && (BT = !0, mT = "0", lT = "=");
        var iT = (UT && void 0 !== UT.prefix ? UT.prefix : "") + ("$" === pT ? zT : "#" === pT && /[boxX]/.test(qT) ? "0" + qT.toLowerCase() : ""),
          bT = ("$" === pT ? MT : /[%p]/.test(qT) ? HT : "") + (UT && void 0 !== UT.suffix ? UT.suffix : ""),
          OT = FU[qT],
          eT = /[defgprs%]/.test(qT);

        function YT(TT) {
          var UT, zT, MT, HT = iT,
            pT = bT;
          if ("c" === qT) pT = OT(TT) + pT, TT = "";
          else {
            var YT = (TT = +TT) < 0 || 1 / TT < 0;
            if (TT = isNaN(TT) ? jT : OT(Math.abs(TT), vT), fT && (TT = function(TT) {
                TT: for (var UT, mT = TT.length, WT = 1, zT = -1; WT < mT; ++WT) switch (TT[WT]) {
                  case ".":
                    zT = UT = WT;
                    break;
                  case "0":
                    0 === zT && (zT = WT), UT = WT;
                    break;
                  default:
                    if (!+TT[WT]) break TT;
                    zT > 0 && (zT = 0)
                }
                return zT > 0 ? TT.slice(0, zT) + TT.slice(UT + 1) : TT
              }(TT)), YT && 0 === +TT && "+" !== LT && (YT = !1), HT = (YT ? "(" === LT ? LT : kT : "-" === LT || "(" === LT ? "" : LT) + HT, pT = ("s" !== qT || isNaN(TT) || void 0 === wU ? "" : KU[8 + wU / 3]) + pT + (YT && "(" === LT ? ")" : ""), eT)
              for (UT = -1, zT = TT.length; ++UT < zT;)
                if (48 > (MT = TT.charCodeAt(UT)) || MT > 57) {
                  pT = (46 === MT ? gT + TT.slice(UT + 1) : TT.slice(UT)) + pT, TT = TT.slice(0, UT);
                  break
                }
          }
          cT && !BT && (TT = WT(TT, 1 / 0));
          var JT = HT.length + TT.length + pT.length,
            xT = JT < ZT ? new Array(ZT - JT + 1).join(mT) : "";
          switch (cT && BT && (TT = WT(xT + TT, xT.length ? ZT - pT.length : 1 / 0), xT = ""), lT) {
            case "<":
              TT = HT + TT + pT + xT;
              break;
            case "=":
              TT = HT + xT + TT + pT;
              break;
            case "^":
              TT = xT.slice(0, JT = xT.length >> 1) + HT + TT + pT + xT.slice(JT);
              break;
            default:
              TT = xT + HT + TT + pT
          }
          return nT(TT)
        }
        return vT = void 0 === vT ? 6 : /[gprs]/.test(qT) ? Math.max(1, Math.min(21, vT)) : Math.max(0, Math.min(20, vT)), YT.toString = function() {
          return TT + ""
        }, YT
      }
      return {
        format: lT,
        formatPrefix: function(TT, UT) {
          var mT = 3 * Math.max(-8, Math.min(8, Math.floor(QU(UT) / 3))),
            WT = Math.pow(10, -mT),
            zT = lT(((TT = yU(TT)).type = "f", TT), {
              suffix: KU[8 + mT / 3]
            });
          return function(TT) {
            return zT(WT * TT)
          }
        }
      }
    }

    function GU(TT, UT, mT, WT) {
      var zT, MT = lT(TT, UT, mT);
      switch ((WT = yU(null == WT ? ",f" : WT)).type) {
        case "s":
          var gT = Math.max(Math.abs(TT), Math.abs(UT));
          return null != WT.precision || isNaN(zT = function(TT, UT) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(QU(UT) / 3))) - QU(Math.abs(TT)))
          }(MT, gT)) || (WT.precision = zT), CU(WT, gT);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != WT.precision || isNaN(zT = function(TT, UT) {
            return TT = Math.abs(TT), UT = Math.abs(UT) - TT, Math.max(0, QU(UT) - QU(TT)) + 1
          }(MT, Math.max(Math.abs(TT), Math.abs(UT)))) || (WT.precision = zT - ("e" === WT.type));
          break;
        case "f":
        case "%":
          null != WT.precision || isNaN(zT = function(TT) {
            return Math.max(0, -QU(Math.abs(TT)))
          }(MT)) || (WT.precision = zT - 2 * ("%" === WT.type))
      }
      return uU(WT)
    }

    function NU(TT) {
      var UT = TT.domain;
      return TT.ticks = function(TT) {
        var mT = UT();
        return kT(mT[0], mT[mT.length - 1], null == TT ? 10 : TT)
      }, TT.tickFormat = function(TT, mT) {
        var WT = UT();
        return GU(WT[0], WT[WT.length - 1], null == TT ? 10 : TT, mT)
      }, TT.nice = function(mT) {
        null == mT && (mT = 10);
        var WT, zT, MT = UT(),
          gT = 0,
          nT = MT.length - 1,
          HT = MT[gT],
          kT = MT[nT],
          lT = 10;
        for (kT < HT && (zT = HT, HT = kT, kT = zT, zT = gT, gT = nT, nT = zT); lT-- > 0;) {
          if ((zT = jT(HT, kT, mT)) === WT) return MT[gT] = HT, MT[nT] = kT, UT(MT);
          if (zT > 0) HT = Math.floor(HT / zT) * zT, kT = Math.ceil(kT / zT) * zT;
          else {
            if (!(zT < 0)) break;
            HT = Math.ceil(HT * zT) / zT, kT = Math.floor(kT * zT) / zT
          }
          WT = zT
        }
        return TT
      }, TT
    }

    function EU() {
      var TT = dU();
      return TT.copy = function() {
        return JU(TT, EU())
      }, tU.g.apply(TT, arguments), NU(TT)
    }

    function hU(TT) {
      var UT;

      function mT(TT) {
        return null == TT || isNaN(TT = +TT) ? UT : TT
      }
      return mT.invert = mT, mT.domain = mT.range = function(UT) {
        return arguments.length ? (TT = Array.from(UT, qU), mT) : TT.slice()
      }, mT.unknown = function(TT) {
        return arguments.length ? (UT = TT, mT) : UT
      }, mT.copy = function() {
        return hU(TT).unknown(UT)
      }, TT = arguments.length ? Array.from(TT, qU) : [0, 1], NU(mT)
    }

    function DU(TT, UT) {
      var mT, WT = 0,
        zT = (TT = TT.slice()).length - 1,
        MT = TT[WT],
        gT = TT[zT];
      return gT < MT && (mT = WT, WT = zT, zT = mT, mT = MT, MT = gT, gT = mT), TT[WT] = UT.floor(MT), TT[zT] = UT.ceil(gT), TT
    }

    function oU(TT) {
      return Math.log(TT)
    }

    function AU(TT) {
      return Math.exp(TT)
    }

    function RU(TT) {
      return -Math.log(-TT)
    }

    function Tm(TT) {
      return -Math.exp(-TT)
    }

    function Um(TT) {
      return isFinite(TT) ? +("1e" + TT) : TT < 0 ? 0 : TT
    }

    function mm(TT) {
      return (UT, mT) => -TT(-UT, mT)
    }

    function Wm(TT) {
      const UT = TT(oU, AU),
        mT = UT.domain;
      let WT, zT, MT = 10;

      function gT() {
        return WT = function(TT) {
          return TT === Math.E ? Math.log : 10 === TT && Math.log10 || 2 === TT && Math.log2 || (TT = Math.log(TT), UT => Math.log(UT) / TT)
        }(MT), zT = function(TT) {
          return 10 === TT ? Um : TT === Math.E ? Math.exp : UT => Math.pow(TT, UT)
        }(MT), mT()[0] < 0 ? (WT = mm(WT), zT = mm(zT), TT(RU, Tm)) : TT(oU, AU), UT
      }
      return UT.base = function(TT) {
        return arguments.length ? (MT = +TT, gT()) : MT
      }, UT.domain = function(TT) {
        return arguments.length ? (mT(TT), gT()) : mT()
      }, UT.ticks = TT => {
        const UT = mT();
        let gT = UT[0],
          nT = UT[UT.length - 1];
        const HT = nT < gT;
        HT && ([gT, nT] = [nT, gT]);
        let jT, lT, LT = WT(gT),
          pT = WT(nT);
        const BT = null == TT ? 10 : +TT;
        let ZT = [];
        if (!(MT % 1) && pT - LT < BT) {
          if (LT = Math.floor(LT), pT = Math.ceil(pT), gT > 0) {
            for (; LT <= pT; ++LT)
              for (jT = 1; jT < MT; ++jT)
                if (lT = LT < 0 ? jT / zT(-LT) : jT * zT(LT), !(lT < gT)) {
                  if (lT > nT) break;
                  ZT.push(lT)
                }
          } else
            for (; LT <= pT; ++LT)
              for (jT = MT - 1; jT >= 1; --jT)
                if (lT = LT > 0 ? jT / zT(-LT) : jT * zT(LT), !(lT < gT)) {
                  if (lT > nT) break;
                  ZT.push(lT)
                } 2 * ZT.length < BT && (ZT = kT(gT, nT, BT))
        } else ZT = kT(LT, pT, Math.min(pT - LT, BT)).map(zT);
        return HT ? ZT.reverse() : ZT
      }, UT.tickFormat = (TT, mT) => {
        if (null == TT && (TT = 10), null == mT && (mT = 10 === MT ? "s" : ","), "function" !== typeof mT && (MT % 1 || null != (mT = yU(mT)).precision || (mT.trim = !0), mT = uU(mT)), TT === 1 / 0) return mT;
        const gT = Math.max(1, MT * TT / UT.ticks().length);
        return TT => {
          let UT = TT / zT(Math.round(WT(TT)));
          return UT * MT < MT - .5 && (UT *= MT), UT <= gT ? mT(TT) : ""
        }
      }, UT.nice = () => mT(DU(mT(), {
        floor: TT => zT(Math.floor(WT(TT))),
        ceil: TT => zT(Math.ceil(WT(TT)))
      })), UT
    }

    function zm() {
      const TT = Wm(xU()).domain([1, 10]);
      return TT.copy = () => JU(TT, zm()).base(TT.base()), tU.g.apply(TT, arguments), TT
    }

    function Mm(TT) {
      return function(UT) {
        return Math.sign(UT) * Math.log1p(Math.abs(UT / TT))
      }
    }

    function gm(TT) {
      return function(UT) {
        return Math.sign(UT) * Math.expm1(Math.abs(UT)) * TT
      }
    }

    function nm(TT) {
      var UT = 1,
        mT = TT(Mm(UT), gm(UT));
      return mT.constant = function(mT) {
        return arguments.length ? TT(Mm(UT = +mT), gm(UT)) : UT
      }, NU(mT)
    }

    function Hm() {
      var TT = nm(xU());
      return TT.copy = function() {
        return JU(TT, Hm()).constant(TT.constant())
      }, tU.g.apply(TT, arguments)
    }
    VU = SU({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), uU = VU.format, CU = VU.formatPrefix;
    var km = mT(6240);

    function jm(TT) {
      return function(UT) {
        return UT < 0 ? -Math.pow(-UT, TT) : Math.pow(UT, TT)
      }
    }

    function lm(TT) {
      return TT < 0 ? -Math.sqrt(-TT) : Math.sqrt(TT)
    }

    function Lm(TT) {
      return TT < 0 ? -TT * TT : TT * TT
    }

    function pm(TT) {
      var UT = TT(bU, bU),
        mT = 1;
      return UT.exponent = function(UT) {
        return arguments.length ? 1 === (mT = +UT) ? TT(bU, bU) : .5 === mT ? TT(lm, Lm) : TT(jm(mT), jm(1 / mT)) : mT
      }, NU(UT)
    }

    function Bm() {
      var TT = pm(xU());
      return TT.copy = function() {
        return JU(TT, Bm()).exponent(TT.exponent())
      }, tU.g.apply(TT, arguments), TT
    }

    function Zm() {
      return Bm.apply(null, arguments).exponent(.5)
    }

    function cm(TT) {
      return Math.sign(TT) * TT * TT
    }

    function fm() {
      var TT, UT = dU(),
        mT = [0, 1],
        WT = !1;

      function zT(mT) {
        var zT = function(TT) {
          return Math.sign(TT) * Math.sqrt(Math.abs(TT))
        }(UT(mT));
        return isNaN(zT) ? TT : WT ? Math.round(zT) : zT
      }
      return zT.invert = function(TT) {
        return UT.invert(cm(TT))
      }, zT.domain = function(TT) {
        return arguments.length ? (UT.domain(TT), zT) : UT.domain()
      }, zT.range = function(TT) {
        return arguments.length ? (UT.range((mT = Array.from(TT, qU)).map(cm)), zT) : mT.slice()
      }, zT.rangeRound = function(TT) {
        return zT.range(TT).round(!0)
      }, zT.round = function(TT) {
        return arguments.length ? (WT = !!TT, zT) : WT
      }, zT.clamp = function(TT) {
        return arguments.length ? (UT.clamp(TT), zT) : UT.clamp()
      }, zT.unknown = function(UT) {
        return arguments.length ? (TT = UT, zT) : TT
      }, zT.copy = function() {
        return fm(UT.domain(), mT).round(WT).clamp(UT.clamp()).unknown(TT)
      }, tU.g.apply(zT, arguments), NU(zT)
    }

    function qm(TT, UT) {
      let mT;
      if (void 0 === UT)
        for (const WT of TT) null != WT && (mT < WT || void 0 === mT && WT >= WT) && (mT = WT);
      else {
        let WT = -1;
        for (let zT of TT) null != (zT = UT(zT, ++WT, TT)) && (mT < zT || void 0 === mT && zT >= zT) && (mT = zT)
      }
      return mT
    }

    function im(TT, UT) {
      let mT;
      if (void 0 === UT)
        for (const WT of TT) null != WT && (mT > WT || void 0 === mT && WT >= WT) && (mT = WT);
      else {
        let WT = -1;
        for (let zT of TT) null != (zT = UT(zT, ++WT, TT)) && (mT > zT || void 0 === mT && zT >= zT) && (mT = zT)
      }
      return mT
    }

    function bm() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LT;
      if (TT === LT) return Om;
      if ("function" !== typeof TT) throw new TypeError("compare is not a function");
      return (UT, mT) => {
        const WT = TT(UT, mT);
        return WT || 0 === WT ? WT : (0 === TT(mT, mT)) - (0 === TT(UT, UT))
      }
    }

    function Om(TT, UT) {
      return (null == TT || !(TT >= TT)) - (null == UT || !(UT >= UT)) || (TT < UT ? -1 : TT > UT ? 1 : 0)
    }

    function em(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        zT = arguments.length > 4 ? arguments[4] : void 0;
      if (UT = Math.floor(UT), mT = Math.floor(Math.max(0, mT)), WT = Math.floor(Math.min(TT.length - 1, WT)), !(mT <= UT && UT <= WT)) return TT;
      for (zT = void 0 === zT ? Om : bm(zT); WT > mT;) {
        if (WT - mT > 600) {
          const MT = WT - mT + 1,
            gT = UT - mT + 1,
            nT = Math.log(MT),
            HT = .5 * Math.exp(2 * nT / 3),
            kT = .5 * Math.sqrt(nT * HT * (MT - HT) / MT) * (gT - MT / 2 < 0 ? -1 : 1);
          em(TT, UT, Math.max(mT, Math.floor(UT - gT * HT / MT + kT)), Math.min(WT, Math.floor(UT + (MT - gT) * HT / MT + kT)), zT)
        }
        const MT = TT[UT];
        let gT = mT,
          nT = WT;
        for (Ym(TT, mT, UT), zT(TT[WT], MT) > 0 && Ym(TT, mT, WT); gT < nT;) {
          for (Ym(TT, gT, nT), ++gT, --nT; zT(TT[gT], MT) < 0;) ++gT;
          for (; zT(TT[nT], MT) > 0;) --nT
        }
        0 === zT(TT[mT], MT) ? Ym(TT, mT, nT) : (++nT, Ym(TT, nT, WT)), nT <= UT && (mT = nT + 1), UT <= nT && (WT = nT - 1)
      }
      return TT
    }

    function Ym(TT, UT, mT) {
      const WT = TT[UT];
      TT[UT] = TT[mT], TT[mT] = WT
    }

    function Jm(TT, UT, mT) {
      if (TT = Float64Array.from(function*(TT, UT) {
          if (void 0 === UT)
            for (let mT of TT) null != mT && (mT = +mT) >= mT && (yield mT);
          else {
            let mT = -1;
            for (let WT of TT) null != (WT = UT(WT, ++mT, TT)) && (WT = +WT) >= WT && (yield WT)
          }
        }(TT, mT)), (WT = TT.length) && !isNaN(UT = +UT)) {
        if (UT <= 0 || WT < 2) return im(TT);
        if (UT >= 1) return qm(TT);
        var WT, zT = (WT - 1) * UT,
          MT = Math.floor(zT),
          gT = qm(em(TT, MT).subarray(0, MT + 1));
        return gT + (im(TT.subarray(MT + 1)) - gT) * (zT - MT)
      }
    }

    function xm(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cT;
      if ((WT = TT.length) && !isNaN(UT = +UT)) {
        if (UT <= 0 || WT < 2) return +mT(TT[0], 0, TT);
        if (UT >= 1) return +mT(TT[WT - 1], WT - 1, TT);
        var WT, zT = (WT - 1) * UT,
          MT = Math.floor(zT),
          gT = +mT(TT[MT], MT, TT);
        return gT + (+mT(TT[MT + 1], MT + 1, TT) - gT) * (zT - MT)
      }
    }

    function dm() {
      var TT, UT = [],
        mT = [],
        WT = [];

      function zT() {
        var TT = 0,
          zT = Math.max(1, mT.length);
        for (WT = new Array(zT - 1); ++TT < zT;) WT[TT - 1] = xm(UT, TT / zT);
        return MT
      }

      function MT(UT) {
        return null == UT || isNaN(UT = +UT) ? TT : mT[qT(WT, UT)]
      }
      return MT.invertExtent = function(TT) {
        var zT = mT.indexOf(TT);
        return zT < 0 ? [NaN, NaN] : [zT > 0 ? WT[zT - 1] : UT[0], zT < WT.length ? WT[zT] : UT[UT.length - 1]]
      }, MT.domain = function(TT) {
        if (!arguments.length) return UT.slice();
        UT = [];
        for (let mT of TT) null == mT || isNaN(mT = +mT) || UT.push(mT);
        return UT.sort(LT), zT()
      }, MT.range = function(TT) {
        return arguments.length ? (mT = Array.from(TT), zT()) : mT.slice()
      }, MT.unknown = function(UT) {
        return arguments.length ? (TT = UT, MT) : TT
      }, MT.quantiles = function() {
        return WT.slice()
      }, MT.copy = function() {
        return dm().domain(UT).range(mT).unknown(TT)
      }, tU.g.apply(MT, arguments)
    }

    function wm() {
      var TT, UT = 0,
        mT = 1,
        WT = 1,
        zT = [.5],
        MT = [0, 1];

      function gT(UT) {
        return null != UT && UT <= UT ? MT[qT(zT, UT, 0, WT)] : TT
      }

      function nT() {
        var TT = -1;
        for (zT = new Array(WT); ++TT < WT;) zT[TT] = ((TT + 1) * mT - (TT - WT) * UT) / (WT + 1);
        return gT
      }
      return gT.domain = function(TT) {
        return arguments.length ? ([UT, mT] = TT, UT = +UT, mT = +mT, nT()) : [UT, mT]
      }, gT.range = function(TT) {
        return arguments.length ? (WT = (MT = Array.from(TT)).length - 1, nT()) : MT.slice()
      }, gT.invertExtent = function(TT) {
        var gT = MT.indexOf(TT);
        return gT < 0 ? [NaN, NaN] : gT < 1 ? [UT, zT[0]] : gT >= WT ? [zT[WT - 1], mT] : [zT[gT - 1], zT[gT]]
      }, gT.unknown = function(UT) {
        return arguments.length ? (TT = UT, gT) : gT
      }, gT.thresholds = function() {
        return zT.slice()
      }, gT.copy = function() {
        return wm().domain([UT, mT]).range(MT).unknown(TT)
      }, tU.g.apply(NU(gT), arguments)
    }

    function tm() {
      var TT, UT = [.5],
        mT = [0, 1],
        WT = 1;

      function zT(zT) {
        return null != zT && zT <= zT ? mT[qT(UT, zT, 0, WT)] : TT
      }
      return zT.domain = function(TT) {
        return arguments.length ? (UT = Array.from(TT), WT = Math.min(UT.length, mT.length - 1), zT) : UT.slice()
      }, zT.range = function(TT) {
        return arguments.length ? (mT = Array.from(TT), WT = Math.min(UT.length, mT.length - 1), zT) : mT.slice()
      }, zT.invertExtent = function(TT) {
        var WT = mT.indexOf(TT);
        return [UT[WT - 1], UT[WT]]
      }, zT.unknown = function(UT) {
        return arguments.length ? (TT = UT, zT) : TT
      }, zT.copy = function() {
        return tm().domain(UT).range(mT).unknown(TT)
      }, tU.g.apply(zT, arguments)
    }
    const am = 1e3,
      ym = 6e4,
      Xm = 36e5,
      Im = 864e5,
      Qm = 6048e5,
      sm = 2592e6,
      Fm = 31536e6,
      Pm = new Date,
      Vm = new Date;

    function um(TT, UT, mT, WT) {
      function zT(UT) {
        return TT(UT = 0 === arguments.length ? new Date : new Date(+UT)), UT
      }
      return zT.floor = UT => (TT(UT = new Date(+UT)), UT), zT.ceil = mT => (TT(mT = new Date(mT - 1)), UT(mT, 1), TT(mT), mT), zT.round = TT => {
        const UT = zT(TT),
          mT = zT.ceil(TT);
        return TT - UT < mT - TT ? UT : mT
      }, zT.offset = (TT, mT) => (UT(TT = new Date(+TT), null == mT ? 1 : Math.floor(mT)), TT), zT.range = (mT, WT, MT) => {
        const gT = [];
        if (mT = zT.ceil(mT), MT = null == MT ? 1 : Math.floor(MT), !(mT < WT) || !(MT > 0)) return gT;
        let nT;
        do {
          gT.push(nT = new Date(+mT)), UT(mT, MT), TT(mT)
        } while (nT < mT && mT < WT);
        return gT
      }, zT.filter = mT => um((UT => {
        if (UT >= UT)
          for (; TT(UT), !mT(UT);) UT.setTime(UT - 1)
      }), ((TT, WT) => {
        if (TT >= TT)
          if (WT < 0)
            for (; ++WT <= 0;)
              for (; UT(TT, -1), !mT(TT););
          else
            for (; --WT >= 0;)
              for (; UT(TT, 1), !mT(TT););
      })), mT && (zT.count = (UT, WT) => (Pm.setTime(+UT), Vm.setTime(+WT), TT(Pm), TT(Vm), Math.floor(mT(Pm, Vm))), zT.every = TT => (TT = Math.floor(TT), isFinite(TT) && TT > 0 ? TT > 1 ? zT.filter(WT ? UT => WT(UT) % TT === 0 : UT => zT.count(0, UT) % TT === 0) : zT : null)), zT
    }
    const Cm = um((() => {}), ((TT, UT) => {
      TT.setTime(+TT + UT)
    }), ((TT, UT) => UT - TT));
    Cm.every = TT => (TT = Math.floor(TT), isFinite(TT) && TT > 0 ? TT > 1 ? um((UT => {
      UT.setTime(Math.floor(UT / TT) * TT)
    }), ((UT, mT) => {
      UT.setTime(+UT + mT * TT)
    }), ((UT, mT) => (mT - UT) / TT)) : Cm : null);
    Cm.range;
    const rm = um((TT => {
        TT.setTime(TT - TT.getMilliseconds())
      }), ((TT, UT) => {
        TT.setTime(+TT + UT * am)
      }), ((TT, UT) => (UT - TT) / am), (TT => TT.getUTCSeconds())),
      Km = (rm.range, um((TT => {
        TT.setTime(TT - TT.getMilliseconds() - TT.getSeconds() * am)
      }), ((TT, UT) => {
        TT.setTime(+TT + UT * ym)
      }), ((TT, UT) => (UT - TT) / ym), (TT => TT.getMinutes()))),
      Sm = (Km.range, um((TT => {
        TT.setUTCSeconds(0, 0)
      }), ((TT, UT) => {
        TT.setTime(+TT + UT * ym)
      }), ((TT, UT) => (UT - TT) / ym), (TT => TT.getUTCMinutes()))),
      Gm = (Sm.range, um((TT => {
        TT.setTime(TT - TT.getMilliseconds() - TT.getSeconds() * am - TT.getMinutes() * ym)
      }), ((TT, UT) => {
        TT.setTime(+TT + UT * Xm)
      }), ((TT, UT) => (UT - TT) / Xm), (TT => TT.getHours()))),
      Nm = (Gm.range, um((TT => {
        TT.setUTCMinutes(0, 0, 0)
      }), ((TT, UT) => {
        TT.setTime(+TT + UT * Xm)
      }), ((TT, UT) => (UT - TT) / Xm), (TT => TT.getUTCHours()))),
      Em = (Nm.range, um((TT => TT.setHours(0, 0, 0, 0)), ((TT, UT) => TT.setDate(TT.getDate() + UT)), ((TT, UT) => (UT - TT - (UT.getTimezoneOffset() - TT.getTimezoneOffset()) * ym) / Im), (TT => TT.getDate() - 1))),
      hm = (Em.range, um((TT => {
        TT.setUTCHours(0, 0, 0, 0)
      }), ((TT, UT) => {
        TT.setUTCDate(TT.getUTCDate() + UT)
      }), ((TT, UT) => (UT - TT) / Im), (TT => TT.getUTCDate() - 1))),
      Dm = (hm.range, um((TT => {
        TT.setUTCHours(0, 0, 0, 0)
      }), ((TT, UT) => {
        TT.setUTCDate(TT.getUTCDate() + UT)
      }), ((TT, UT) => (UT - TT) / Im), (TT => Math.floor(TT / Im))));
    Dm.range;

    function om(TT) {
      return um((UT => {
        UT.setDate(UT.getDate() - (UT.getDay() + 7 - TT) % 7), UT.setHours(0, 0, 0, 0)
      }), ((TT, UT) => {
        TT.setDate(TT.getDate() + 7 * UT)
      }), ((TT, UT) => (UT - TT - (UT.getTimezoneOffset() - TT.getTimezoneOffset()) * ym) / Qm))
    }
    const Am = om(0),
      Rm = om(1),
      TW = om(2),
      UW = om(3),
      mW = om(4),
      WW = om(5),
      zW = om(6);
    Am.range, Rm.range, TW.range, UW.range, mW.range, WW.range, zW.range;

    function MW(TT) {
      return um((UT => {
        UT.setUTCDate(UT.getUTCDate() - (UT.getUTCDay() + 7 - TT) % 7), UT.setUTCHours(0, 0, 0, 0)
      }), ((TT, UT) => {
        TT.setUTCDate(TT.getUTCDate() + 7 * UT)
      }), ((TT, UT) => (UT - TT) / Qm))
    }
    const gW = MW(0),
      nW = MW(1),
      HW = MW(2),
      kW = MW(3),
      jW = MW(4),
      lW = MW(5),
      LW = MW(6),
      pW = (gW.range, nW.range, HW.range, kW.range, jW.range, lW.range, LW.range, um((TT => {
        TT.setDate(1), TT.setHours(0, 0, 0, 0)
      }), ((TT, UT) => {
        TT.setMonth(TT.getMonth() + UT)
      }), ((TT, UT) => UT.getMonth() - TT.getMonth() + 12 * (UT.getFullYear() - TT.getFullYear())), (TT => TT.getMonth()))),
      BW = (pW.range, um((TT => {
        TT.setUTCDate(1), TT.setUTCHours(0, 0, 0, 0)
      }), ((TT, UT) => {
        TT.setUTCMonth(TT.getUTCMonth() + UT)
      }), ((TT, UT) => UT.getUTCMonth() - TT.getUTCMonth() + 12 * (UT.getUTCFullYear() - TT.getUTCFullYear())), (TT => TT.getUTCMonth()))),
      ZW = (BW.range, um((TT => {
        TT.setMonth(0, 1), TT.setHours(0, 0, 0, 0)
      }), ((TT, UT) => {
        TT.setFullYear(TT.getFullYear() + UT)
      }), ((TT, UT) => UT.getFullYear() - TT.getFullYear()), (TT => TT.getFullYear())));
    ZW.every = TT => isFinite(TT = Math.floor(TT)) && TT > 0 ? um((UT => {
      UT.setFullYear(Math.floor(UT.getFullYear() / TT) * TT), UT.setMonth(0, 1), UT.setHours(0, 0, 0, 0)
    }), ((UT, mT) => {
      UT.setFullYear(UT.getFullYear() + mT * TT)
    })) : null;
    ZW.range;
    const cW = um((TT => {
      TT.setUTCMonth(0, 1), TT.setUTCHours(0, 0, 0, 0)
    }), ((TT, UT) => {
      TT.setUTCFullYear(TT.getUTCFullYear() + UT)
    }), ((TT, UT) => UT.getUTCFullYear() - TT.getUTCFullYear()), (TT => TT.getUTCFullYear()));
    cW.every = TT => isFinite(TT = Math.floor(TT)) && TT > 0 ? um((UT => {
      UT.setUTCFullYear(Math.floor(UT.getUTCFullYear() / TT) * TT), UT.setUTCMonth(0, 1), UT.setUTCHours(0, 0, 0, 0)
    }), ((UT, mT) => {
      UT.setUTCFullYear(UT.getUTCFullYear() + mT * TT)
    })) : null;
    cW.range;

    function vW(TT, UT, mT, WT, zT, MT) {
      const gT = [
        [rm, 1, am],
        [rm, 5, 5e3],
        [rm, 15, 15e3],
        [rm, 30, 3e4],
        [MT, 1, ym],
        [MT, 5, 3e5],
        [MT, 15, 9e5],
        [MT, 30, 18e5],
        [zT, 1, Xm],
        [zT, 3, 108e5],
        [zT, 6, 216e5],
        [zT, 12, 432e5],
        [WT, 1, Im],
        [WT, 2, 1728e5],
        [mT, 1, Qm],
        [UT, 1, sm],
        [UT, 3, 7776e6],
        [TT, 1, Fm]
      ];

      function nT(UT, mT, WT) {
        const zT = Math.abs(mT - UT) / WT,
          MT = BT((TT => {
            let [, , UT] = TT;
            return UT
          })).right(gT, zT);
        if (MT === gT.length) return TT.every(lT(UT / Fm, mT / Fm, WT));
        if (0 === MT) return Cm.every(Math.max(lT(UT, mT, WT), 1));
        const [nT, HT] = gT[zT / gT[MT - 1][2] < gT[MT][2] / zT ? MT - 1 : MT];
        return nT.every(HT)
      }
      return [function(TT, UT, mT) {
        const WT = UT < TT;
        WT && ([TT, UT] = [UT, TT]);
        const zT = mT && "function" === typeof mT.range ? mT : nT(TT, UT, mT),
          MT = zT ? zT.range(TT, +UT + 1) : [];
        return WT ? MT.reverse() : MT
      }, nT]
    }
    const [fW, qW] = vW(cW, BW, gW, Dm, Nm, Sm), [iW, bW] = vW(ZW, pW, Am, Em, Gm, Km);

    function OW(TT) {
      if (0 <= TT.y && TT.y < 100) {
        var UT = new Date(-1, TT.m, TT.d, TT.H, TT.M, TT.S, TT.L);
        return UT.setFullYear(TT.y), UT
      }
      return new Date(TT.y, TT.m, TT.d, TT.H, TT.M, TT.S, TT.L)
    }

    function eW(TT) {
      if (0 <= TT.y && TT.y < 100) {
        var UT = new Date(Date.UTC(-1, TT.m, TT.d, TT.H, TT.M, TT.S, TT.L));
        return UT.setUTCFullYear(TT.y), UT
      }
      return new Date(Date.UTC(TT.y, TT.m, TT.d, TT.H, TT.M, TT.S, TT.L))
    }

    function YW(TT, UT, mT) {
      return {
        y: TT,
        m: UT,
        d: mT,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var JW, xW, dW, wW = {
        "-": "",
        _: " ",
        0: "0"
      },
      tW = /^\s*\d+/,
      aW = /^%/,
      yW = /[\\^$*+?|[\]().{}]/g;

    function XW(TT, UT, mT) {
      var WT = TT < 0 ? "-" : "",
        zT = (WT ? -TT : TT) + "",
        MT = zT.length;
      return WT + (MT < mT ? new Array(mT - MT + 1).join(UT) + zT : zT)
    }

    function IW(TT) {
      return TT.replace(yW, "\\$&")
    }

    function QW(TT) {
      return new RegExp("^(?:" + TT.map(IW).join("|") + ")", "i")
    }

    function sW(TT) {
      return new Map(TT.map(((TT, UT) => [TT.toLowerCase(), UT])))
    }

    function FW(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 1));
      return WT ? (TT.w = +WT[0], mT + WT[0].length) : -1
    }

    function PW(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 1));
      return WT ? (TT.u = +WT[0], mT + WT[0].length) : -1
    }

    function VW(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 2));
      return WT ? (TT.U = +WT[0], mT + WT[0].length) : -1
    }

    function uW(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 2));
      return WT ? (TT.V = +WT[0], mT + WT[0].length) : -1
    }

    function CW(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 2));
      return WT ? (TT.W = +WT[0], mT + WT[0].length) : -1
    }

    function rW(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 4));
      return WT ? (TT.y = +WT[0], mT + WT[0].length) : -1
    }

    function KW(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 2));
      return WT ? (TT.y = +WT[0] + (+WT[0] > 68 ? 1900 : 2e3), mT + WT[0].length) : -1
    }

    function SW(TT, UT, mT) {
      var WT = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(UT.slice(mT, mT + 6));
      return WT ? (TT.Z = WT[1] ? 0 : -(WT[2] + (WT[3] || "00")), mT + WT[0].length) : -1
    }

    function GW(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 1));
      return WT ? (TT.q = 3 * WT[0] - 3, mT + WT[0].length) : -1
    }

    function NW(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 2));
      return WT ? (TT.m = WT[0] - 1, mT + WT[0].length) : -1
    }

    function EW(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 2));
      return WT ? (TT.d = +WT[0], mT + WT[0].length) : -1
    }

    function hW(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 3));
      return WT ? (TT.m = 0, TT.d = +WT[0], mT + WT[0].length) : -1
    }

    function DW(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 2));
      return WT ? (TT.H = +WT[0], mT + WT[0].length) : -1
    }

    function oW(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 2));
      return WT ? (TT.M = +WT[0], mT + WT[0].length) : -1
    }

    function AW(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 2));
      return WT ? (TT.S = +WT[0], mT + WT[0].length) : -1
    }

    function RW(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 3));
      return WT ? (TT.L = +WT[0], mT + WT[0].length) : -1
    }

    function Tz(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT, mT + 6));
      return WT ? (TT.L = Math.floor(WT[0] / 1e3), mT + WT[0].length) : -1
    }

    function Uz(TT, UT, mT) {
      var WT = aW.exec(UT.slice(mT, mT + 1));
      return WT ? mT + WT[0].length : -1
    }

    function mz(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT));
      return WT ? (TT.Q = +WT[0], mT + WT[0].length) : -1
    }

    function Wz(TT, UT, mT) {
      var WT = tW.exec(UT.slice(mT));
      return WT ? (TT.s = +WT[0], mT + WT[0].length) : -1
    }

    function zz(TT, UT) {
      return XW(TT.getDate(), UT, 2)
    }

    function Mz(TT, UT) {
      return XW(TT.getHours(), UT, 2)
    }

    function gz(TT, UT) {
      return XW(TT.getHours() % 12 || 12, UT, 2)
    }

    function nz(TT, UT) {
      return XW(1 + Em.count(ZW(TT), TT), UT, 3)
    }

    function Hz(TT, UT) {
      return XW(TT.getMilliseconds(), UT, 3)
    }

    function kz(TT, UT) {
      return Hz(TT, UT) + "000"
    }

    function jz(TT, UT) {
      return XW(TT.getMonth() + 1, UT, 2)
    }

    function lz(TT, UT) {
      return XW(TT.getMinutes(), UT, 2)
    }

    function Lz(TT, UT) {
      return XW(TT.getSeconds(), UT, 2)
    }

    function pz(TT) {
      var UT = TT.getDay();
      return 0 === UT ? 7 : UT
    }

    function Bz(TT, UT) {
      return XW(Am.count(ZW(TT) - 1, TT), UT, 2)
    }

    function Zz(TT) {
      var UT = TT.getDay();
      return UT >= 4 || 0 === UT ? mW(TT) : mW.ceil(TT)
    }

    function cz(TT, UT) {
      return TT = Zz(TT), XW(mW.count(ZW(TT), TT) + (4 === ZW(TT).getDay()), UT, 2)
    }

    function vz(TT) {
      return TT.getDay()
    }

    function fz(TT, UT) {
      return XW(Rm.count(ZW(TT) - 1, TT), UT, 2)
    }

    function qz(TT, UT) {
      return XW(TT.getFullYear() % 100, UT, 2)
    }

    function iz(TT, UT) {
      return XW((TT = Zz(TT)).getFullYear() % 100, UT, 2)
    }

    function bz(TT, UT) {
      return XW(TT.getFullYear() % 1e4, UT, 4)
    }

    function Oz(TT, UT) {
      var mT = TT.getDay();
      return XW((TT = mT >= 4 || 0 === mT ? mW(TT) : mW.ceil(TT)).getFullYear() % 1e4, UT, 4)
    }

    function ez(TT) {
      var UT = TT.getTimezoneOffset();
      return (UT > 0 ? "-" : (UT *= -1, "+")) + XW(UT / 60 | 0, "0", 2) + XW(UT % 60, "0", 2)
    }

    function Yz(TT, UT) {
      return XW(TT.getUTCDate(), UT, 2)
    }

    function Jz(TT, UT) {
      return XW(TT.getUTCHours(), UT, 2)
    }

    function xz(TT, UT) {
      return XW(TT.getUTCHours() % 12 || 12, UT, 2)
    }

    function dz(TT, UT) {
      return XW(1 + hm.count(cW(TT), TT), UT, 3)
    }

    function wz(TT, UT) {
      return XW(TT.getUTCMilliseconds(), UT, 3)
    }

    function tz(TT, UT) {
      return wz(TT, UT) + "000"
    }

    function az(TT, UT) {
      return XW(TT.getUTCMonth() + 1, UT, 2)
    }

    function yz(TT, UT) {
      return XW(TT.getUTCMinutes(), UT, 2)
    }

    function Xz(TT, UT) {
      return XW(TT.getUTCSeconds(), UT, 2)
    }

    function Iz(TT) {
      var UT = TT.getUTCDay();
      return 0 === UT ? 7 : UT
    }

    function Qz(TT, UT) {
      return XW(gW.count(cW(TT) - 1, TT), UT, 2)
    }

    function sz(TT) {
      var UT = TT.getUTCDay();
      return UT >= 4 || 0 === UT ? jW(TT) : jW.ceil(TT)
    }

    function Fz(TT, UT) {
      return TT = sz(TT), XW(jW.count(cW(TT), TT) + (4 === cW(TT).getUTCDay()), UT, 2)
    }

    function Pz(TT) {
      return TT.getUTCDay()
    }

    function Vz(TT, UT) {
      return XW(nW.count(cW(TT) - 1, TT), UT, 2)
    }

    function uz(TT, UT) {
      return XW(TT.getUTCFullYear() % 100, UT, 2)
    }

    function Cz(TT, UT) {
      return XW((TT = sz(TT)).getUTCFullYear() % 100, UT, 2)
    }

    function rz(TT, UT) {
      return XW(TT.getUTCFullYear() % 1e4, UT, 4)
    }

    function Kz(TT, UT) {
      var mT = TT.getUTCDay();
      return XW((TT = mT >= 4 || 0 === mT ? jW(TT) : jW.ceil(TT)).getUTCFullYear() % 1e4, UT, 4)
    }

    function Sz() {
      return "+0000"
    }

    function Gz() {
      return "%"
    }

    function Nz(TT) {
      return +TT
    }

    function Ez(TT) {
      return Math.floor(+TT / 1e3)
    }

    function hz(TT) {
      return new Date(TT)
    }

    function Dz(TT) {
      return TT instanceof Date ? +TT : +new Date(+TT)
    }

    function oz(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT) {
      var jT = dU(),
        lT = jT.invert,
        LT = jT.domain,
        pT = kT(".%L"),
        BT = kT(":%S"),
        ZT = kT("%I:%M"),
        cT = kT("%I %p"),
        vT = kT("%a %d"),
        fT = kT("%b %d"),
        qT = kT("%B"),
        iT = kT("%Y");

      function bT(TT) {
        return (HT(TT) < TT ? pT : nT(TT) < TT ? BT : gT(TT) < TT ? ZT : MT(TT) < TT ? cT : WT(TT) < TT ? zT(TT) < TT ? vT : fT : mT(TT) < TT ? qT : iT)(TT)
      }
      return jT.invert = function(TT) {
        return new Date(lT(TT))
      }, jT.domain = function(TT) {
        return arguments.length ? LT(Array.from(TT, Dz)) : LT().map(hz)
      }, jT.ticks = function(UT) {
        var mT = LT();
        return TT(mT[0], mT[mT.length - 1], null == UT ? 10 : UT)
      }, jT.tickFormat = function(TT, UT) {
        return null == UT ? bT : kT(UT)
      }, jT.nice = function(TT) {
        var mT = LT();
        return TT && "function" === typeof TT.range || (TT = UT(mT[0], mT[mT.length - 1], null == TT ? 10 : TT)), TT ? LT(DU(mT, TT)) : jT
      }, jT.copy = function() {
        return JU(jT, oz(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT))
      }, jT
    }

    function Az() {
      return tU.g.apply(oz(iW, bW, ZW, pW, Am, Em, Gm, Km, rm, xW).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function Rz() {
      return tU.g.apply(oz(fW, qW, cW, BW, gW, hm, Nm, Sm, rm, dW).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function TM() {
      var TT, UT, mT, WT, zT, MT = 0,
        gT = 1,
        nT = bU,
        HT = !1;

      function kT(UT) {
        return null == UT || isNaN(UT = +UT) ? zT : nT(0 === mT ? .5 : (UT = (WT(UT) - TT) * mT, HT ? Math.max(0, Math.min(1, UT)) : UT))
      }

      function jT(TT) {
        return function(UT) {
          var mT, WT;
          return arguments.length ? ([mT, WT] = UT, nT = TT(mT, WT), kT) : [nT(0), nT(1)]
        }
      }
      return kT.domain = function(zT) {
          return arguments.length ? ([MT, gT] = zT, TT = WT(MT = +MT), UT = WT(gT = +gT), mT = TT === UT ? 0 : 1 / (UT - TT), kT) : [MT, gT]
        }, kT.clamp = function(TT) {
          return arguments.length ? (HT = !!TT, kT) : HT
        }, kT.interpolator = function(TT) {
          return arguments.length ? (nT = TT, kT) : nT
        }, kT.range = jT(vU), kT.rangeRound = jT(fU), kT.unknown = function(TT) {
          return arguments.length ? (zT = TT, kT) : zT
        },
        function(zT) {
          return WT = zT, TT = zT(MT), UT = zT(gT), mT = TT === UT ? 0 : 1 / (UT - TT), kT
        }
    }

    function UM(TT, UT) {
      return UT.domain(TT.domain()).interpolator(TT.interpolator()).clamp(TT.clamp()).unknown(TT.unknown())
    }

    function mM() {
      var TT = NU(TM()(bU));
      return TT.copy = function() {
        return UM(TT, mM())
      }, tU.e.apply(TT, arguments)
    }

    function WM() {
      var TT = Wm(TM()).domain([1, 10]);
      return TT.copy = function() {
        return UM(TT, WM()).base(TT.base())
      }, tU.e.apply(TT, arguments)
    }

    function zM() {
      var TT = nm(TM());
      return TT.copy = function() {
        return UM(TT, zM()).constant(TT.constant())
      }, tU.e.apply(TT, arguments)
    }

    function MM() {
      var TT = pm(TM());
      return TT.copy = function() {
        return UM(TT, MM()).exponent(TT.exponent())
      }, tU.e.apply(TT, arguments)
    }

    function gM() {
      return MM.apply(null, arguments).exponent(.5)
    }

    function nM() {
      var TT = [],
        UT = bU;

      function mT(mT) {
        if (null != mT && !isNaN(mT = +mT)) return UT((qT(TT, mT, 1) - 1) / (TT.length - 1))
      }
      return mT.domain = function(UT) {
        if (!arguments.length) return TT.slice();
        TT = [];
        for (let mT of UT) null == mT || isNaN(mT = +mT) || TT.push(mT);
        return TT.sort(LT), mT
      }, mT.interpolator = function(TT) {
        return arguments.length ? (UT = TT, mT) : UT
      }, mT.range = function() {
        return TT.map(((mT, WT) => UT(WT / (TT.length - 1))))
      }, mT.quantiles = function(UT) {
        return Array.from({
          length: UT + 1
        }, ((mT, WT) => Jm(TT, WT / UT)))
      }, mT.copy = function() {
        return nM(UT).domain(TT)
      }, tU.e.apply(mT, arguments)
    }

    function HM() {
      var TT, UT, mT, WT, zT, MT, gT, nT = 0,
        HT = .5,
        kT = 1,
        jT = 1,
        lT = bU,
        LT = !1;

      function pT(TT) {
        return isNaN(TT = +TT) ? gT : (TT = .5 + ((TT = +MT(TT)) - UT) * (jT * TT < jT * UT ? WT : zT), lT(LT ? Math.max(0, Math.min(1, TT)) : TT))
      }

      function BT(TT) {
        return function(UT) {
          var mT, WT, zT;
          return arguments.length ? ([mT, WT, zT] = UT, lT = function(TT, UT) {
            void 0 === UT && (UT = TT, TT = vU);
            for (var mT = 0, WT = UT.length - 1, zT = UT[0], MT = new Array(WT < 0 ? 0 : WT); mT < WT;) MT[mT] = TT(zT, zT = UT[++mT]);
            return function(TT) {
              var UT = Math.max(0, Math.min(WT - 1, Math.floor(TT *= WT)));
              return MT[UT](TT - UT)
            }
          }(TT, [mT, WT, zT]), pT) : [lT(0), lT(.5), lT(1)]
        }
      }
      return pT.domain = function(gT) {
          return arguments.length ? ([nT, HT, kT] = gT, TT = MT(nT = +nT), UT = MT(HT = +HT), mT = MT(kT = +kT), WT = TT === UT ? 0 : .5 / (UT - TT), zT = UT === mT ? 0 : .5 / (mT - UT), jT = UT < TT ? -1 : 1, pT) : [nT, HT, kT]
        }, pT.clamp = function(TT) {
          return arguments.length ? (LT = !!TT, pT) : LT
        }, pT.interpolator = function(TT) {
          return arguments.length ? (lT = TT, pT) : lT
        }, pT.range = BT(vU), pT.rangeRound = BT(fU), pT.unknown = function(TT) {
          return arguments.length ? (gT = TT, pT) : gT
        },
        function(gT) {
          return MT = gT, TT = gT(nT), UT = gT(HT), mT = gT(kT), WT = TT === UT ? 0 : .5 / (UT - TT), zT = UT === mT ? 0 : .5 / (mT - UT), jT = UT < TT ? -1 : 1, pT
        }
    }

    function kM() {
      var TT = NU(HM()(bU));
      return TT.copy = function() {
        return UM(TT, kM())
      }, tU.e.apply(TT, arguments)
    }

    function jM() {
      var TT = Wm(HM()).domain([.1, 1, 10]);
      return TT.copy = function() {
        return UM(TT, jM()).base(TT.base())
      }, tU.e.apply(TT, arguments)
    }

    function lM() {
      var TT = nm(HM());
      return TT.copy = function() {
        return UM(TT, lM()).constant(TT.constant())
      }, tU.e.apply(TT, arguments)
    }

    function LM() {
      var TT = pm(HM());
      return TT.copy = function() {
        return UM(TT, LM()).exponent(TT.exponent())
      }, tU.e.apply(TT, arguments)
    }

    function pM() {
      return LM.apply(null, arguments).exponent(.5)
    }

    function BM(TT, UT) {
      if ((zT = TT.length) > 1)
        for (var mT, WT, zT, MT = 1, gT = TT[UT[0]], nT = gT.length; MT < zT; ++MT)
          for (WT = gT, gT = TT[UT[MT]], mT = 0; mT < nT; ++mT) gT[mT][1] += gT[mT][0] = isNaN(WT[mT][1]) ? WT[mT][0] : WT[mT][1]
    }! function(TT) {
      JW = function(TT) {
        var UT = TT.dateTime,
          mT = TT.date,
          WT = TT.time,
          zT = TT.periods,
          MT = TT.days,
          gT = TT.shortDays,
          nT = TT.months,
          HT = TT.shortMonths,
          kT = QW(zT),
          jT = sW(zT),
          lT = QW(MT),
          LT = sW(MT),
          pT = QW(gT),
          BT = sW(gT),
          ZT = QW(nT),
          cT = sW(nT),
          vT = QW(HT),
          fT = sW(HT),
          qT = {
            a: function(TT) {
              return gT[TT.getDay()]
            },
            A: function(TT) {
              return MT[TT.getDay()]
            },
            b: function(TT) {
              return HT[TT.getMonth()]
            },
            B: function(TT) {
              return nT[TT.getMonth()]
            },
            c: null,
            d: zz,
            e: zz,
            f: kz,
            g: iz,
            G: Oz,
            H: Mz,
            I: gz,
            j: nz,
            L: Hz,
            m: jz,
            M: lz,
            p: function(TT) {
              return zT[+(TT.getHours() >= 12)]
            },
            q: function(TT) {
              return 1 + ~~(TT.getMonth() / 3)
            },
            Q: Nz,
            s: Ez,
            S: Lz,
            u: pz,
            U: Bz,
            V: cz,
            w: vz,
            W: fz,
            x: null,
            X: null,
            y: qz,
            Y: bz,
            Z: ez,
            "%": Gz
          },
          iT = {
            a: function(TT) {
              return gT[TT.getUTCDay()]
            },
            A: function(TT) {
              return MT[TT.getUTCDay()]
            },
            b: function(TT) {
              return HT[TT.getUTCMonth()]
            },
            B: function(TT) {
              return nT[TT.getUTCMonth()]
            },
            c: null,
            d: Yz,
            e: Yz,
            f: tz,
            g: Cz,
            G: Kz,
            H: Jz,
            I: xz,
            j: dz,
            L: wz,
            m: az,
            M: yz,
            p: function(TT) {
              return zT[+(TT.getUTCHours() >= 12)]
            },
            q: function(TT) {
              return 1 + ~~(TT.getUTCMonth() / 3)
            },
            Q: Nz,
            s: Ez,
            S: Xz,
            u: Iz,
            U: Qz,
            V: Fz,
            w: Pz,
            W: Vz,
            x: null,
            X: null,
            y: uz,
            Y: rz,
            Z: Sz,
            "%": Gz
          },
          bT = {
            a: function(TT, UT, mT) {
              var WT = pT.exec(UT.slice(mT));
              return WT ? (TT.w = BT.get(WT[0].toLowerCase()), mT + WT[0].length) : -1
            },
            A: function(TT, UT, mT) {
              var WT = lT.exec(UT.slice(mT));
              return WT ? (TT.w = LT.get(WT[0].toLowerCase()), mT + WT[0].length) : -1
            },
            b: function(TT, UT, mT) {
              var WT = vT.exec(UT.slice(mT));
              return WT ? (TT.m = fT.get(WT[0].toLowerCase()), mT + WT[0].length) : -1
            },
            B: function(TT, UT, mT) {
              var WT = ZT.exec(UT.slice(mT));
              return WT ? (TT.m = cT.get(WT[0].toLowerCase()), mT + WT[0].length) : -1
            },
            c: function(TT, mT, WT) {
              return YT(TT, UT, mT, WT)
            },
            d: EW,
            e: EW,
            f: Tz,
            g: KW,
            G: rW,
            H: DW,
            I: DW,
            j: hW,
            L: RW,
            m: NW,
            M: oW,
            p: function(TT, UT, mT) {
              var WT = kT.exec(UT.slice(mT));
              return WT ? (TT.p = jT.get(WT[0].toLowerCase()), mT + WT[0].length) : -1
            },
            q: GW,
            Q: mz,
            s: Wz,
            S: AW,
            u: PW,
            U: VW,
            V: uW,
            w: FW,
            W: CW,
            x: function(TT, UT, WT) {
              return YT(TT, mT, UT, WT)
            },
            X: function(TT, UT, mT) {
              return YT(TT, WT, UT, mT)
            },
            y: KW,
            Y: rW,
            Z: SW,
            "%": Uz
          };

        function OT(TT, UT) {
          return function(mT) {
            var WT, zT, MT, gT = [],
              nT = -1,
              HT = 0,
              kT = TT.length;
            for (mT instanceof Date || (mT = new Date(+mT)); ++nT < kT;) 37 === TT.charCodeAt(nT) && (gT.push(TT.slice(HT, nT)), null != (zT = wW[WT = TT.charAt(++nT)]) ? WT = TT.charAt(++nT) : zT = "e" === WT ? " " : "0", (MT = UT[WT]) && (WT = MT(mT, zT)), gT.push(WT), HT = nT + 1);
            return gT.push(TT.slice(HT, nT)), gT.join("")
          }
        }

        function eT(TT, UT) {
          return function(mT) {
            var WT, zT, MT = YW(1900, void 0, 1);
            if (YT(MT, TT, mT += "", 0) != mT.length) return null;
            if ("Q" in MT) return new Date(MT.Q);
            if ("s" in MT) return new Date(1e3 * MT.s + ("L" in MT ? MT.L : 0));
            if (UT && !("Z" in MT) && (MT.Z = 0), "p" in MT && (MT.H = MT.H % 12 + 12 * MT.p), void 0 === MT.m && (MT.m = "q" in MT ? MT.q : 0), "V" in MT) {
              if (MT.V < 1 || MT.V > 53) return null;
              "w" in MT || (MT.w = 1), "Z" in MT ? (zT = (WT = eW(YW(MT.y, 0, 1))).getUTCDay(), WT = zT > 4 || 0 === zT ? nW.ceil(WT) : nW(WT), WT = hm.offset(WT, 7 * (MT.V - 1)), MT.y = WT.getUTCFullYear(), MT.m = WT.getUTCMonth(), MT.d = WT.getUTCDate() + (MT.w + 6) % 7) : (zT = (WT = OW(YW(MT.y, 0, 1))).getDay(), WT = zT > 4 || 0 === zT ? Rm.ceil(WT) : Rm(WT), WT = Em.offset(WT, 7 * (MT.V - 1)), MT.y = WT.getFullYear(), MT.m = WT.getMonth(), MT.d = WT.getDate() + (MT.w + 6) % 7)
            } else("W" in MT || "U" in MT) && ("w" in MT || (MT.w = "u" in MT ? MT.u % 7 : "W" in MT ? 1 : 0), zT = "Z" in MT ? eW(YW(MT.y, 0, 1)).getUTCDay() : OW(YW(MT.y, 0, 1)).getDay(), MT.m = 0, MT.d = "W" in MT ? (MT.w + 6) % 7 + 7 * MT.W - (zT + 5) % 7 : MT.w + 7 * MT.U - (zT + 6) % 7);
            return "Z" in MT ? (MT.H += MT.Z / 100 | 0, MT.M += MT.Z % 100, eW(MT)) : OW(MT)
          }
        }

        function YT(TT, UT, mT, WT) {
          for (var zT, MT, gT = 0, nT = UT.length, HT = mT.length; gT < nT;) {
            if (WT >= HT) return -1;
            if (37 === (zT = UT.charCodeAt(gT++))) {
              if (zT = UT.charAt(gT++), !(MT = bT[zT in wW ? UT.charAt(gT++) : zT]) || (WT = MT(TT, mT, WT)) < 0) return -1
            } else if (zT != mT.charCodeAt(WT++)) return -1
          }
          return WT
        }
        return qT.x = OT(mT, qT), qT.X = OT(WT, qT), qT.c = OT(UT, qT), iT.x = OT(mT, iT), iT.X = OT(WT, iT), iT.c = OT(UT, iT), {
          format: function(TT) {
            var UT = OT(TT += "", qT);
            return UT.toString = function() {
              return TT
            }, UT
          },
          parse: function(TT) {
            var UT = eT(TT += "", !1);
            return UT.toString = function() {
              return TT
            }, UT
          },
          utcFormat: function(TT) {
            var UT = OT(TT += "", iT);
            return UT.toString = function() {
              return TT
            }, UT
          },
          utcParse: function(TT) {
            var UT = eT(TT += "", !0);
            return UT.toString = function() {
              return TT
            }, UT
          }
        }
      }(TT), xW = JW.format, JW.parse, dW = JW.utcFormat, JW.utcParse
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
    var ZM = mT(6314),
      cM = mT(6186);

    function vM(TT) {
      for (var UT = TT.length, mT = new Array(UT); --UT >= 0;) mT[UT] = UT;
      return mT
    }

    function fM(TT, UT) {
      return TT[UT]
    }

    function qM(TT) {
      const UT = [];
      return UT.key = TT, UT
    }
    var iM = mT(6246),
      bM = mT.n(iM),
      OM = mT(6264),
      eM = mT.n(OM),
      YM = mT(5485),
      JM = mT.n(YM),
      xM = mT(5337),
      dM = mT.n(xM),
      wM = mT(5259),
      tM = mT.n(wM),
      aM = mT(5275),
      yM = mT.n(aM),
      XM = mT(6277),
      IM = mT.n(XM),
      QM = mT(5265),
      sM = mT.n(QM),
      FM = mT(6141),
      PM = mT.n(FM),
      VM = mT(6288),
      uM = mT.n(VM),
      CM = mT(5581),
      rM = mT.n(CM),
      KM = mT(6293),
      SM = mT.n(KM);

    function GM(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return NM(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(TT)) return Array.from(TT)
      }(TT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return NM(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return NM(TT, UT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function NM(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }
    var EM = function(TT) {
        return TT
      },
      hM = {
        "@@functional/placeholder": !0
      },
      DM = function(TT) {
        return TT === hM
      },
      oM = function(TT) {
        return function UT() {
          return 0 === arguments.length || 1 === arguments.length && DM(arguments.length <= 0 ? void 0 : arguments[0]) ? UT : TT.apply(void 0, arguments)
        }
      },
      AM = function TT(UT, mT) {
        return 1 === UT ? mT : oM((function() {
          for (var WT = arguments.length, zT = new Array(WT), MT = 0; MT < WT; MT++) zT[MT] = arguments[MT];
          var gT = zT.filter((function(TT) {
            return TT !== hM
          })).length;
          return gT >= UT ? mT.apply(void 0, zT) : TT(UT - gT, oM((function() {
            for (var TT = arguments.length, UT = new Array(TT), WT = 0; WT < TT; WT++) UT[WT] = arguments[WT];
            var MT = zT.map((function(TT) {
              return DM(TT) ? UT.shift() : TT
            }));
            return mT.apply(void 0, GM(MT).concat(UT))
          })))
        }))
      },
      RM = function(TT) {
        return AM(TT.length, TT)
      },
      Tg = function(TT, UT) {
        for (var mT = [], WT = TT; WT < UT; ++WT) mT[WT - TT] = WT;
        return mT
      },
      Ug = RM((function(TT, UT) {
        return Array.isArray(UT) ? UT.map(TT) : Object.keys(UT).map((function(TT) {
          return UT[TT]
        })).map(TT)
      })),
      mg = function() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        if (!UT.length) return EM;
        var WT = UT.reverse(),
          zT = WT[0],
          MT = WT.slice(1);
        return function() {
          return MT.reduce((function(TT, UT) {
            return UT(TT)
          }), zT.apply(void 0, arguments))
        }
      },
      Wg = function(TT) {
        return Array.isArray(TT) ? TT.reverse() : TT.split("").reverse.join("")
      },
      zg = function(TT) {
        var UT = null,
          mT = null;
        return function() {
          for (var WT = arguments.length, zT = new Array(WT), MT = 0; MT < WT; MT++) zT[MT] = arguments[MT];
          return UT && zT.every((function(TT, mT) {
            return TT === UT[mT]
          })) ? mT : (UT = zT, mT = TT.apply(void 0, zT))
        }
      };
    const Mg = {
      rangeStep: function(TT, UT, mT) {
        for (var WT = new(SM())(TT), zT = 0, MT = []; WT.lt(UT) && zT < 1e5;) MT.push(WT.toNumber()), WT = WT.add(mT), zT++;
        return MT
      },
      getDigitCount: function(TT) {
        return 0 === TT ? 1 : Math.floor(new(SM())(TT).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: RM((function(TT, UT, mT) {
        var WT = +TT;
        return WT + mT * (+UT - WT)
      })),
      uninterpolateNumber: RM((function(TT, UT, mT) {
        var WT = UT - +TT;
        return (mT - TT) / (WT = WT || 1 / 0)
      })),
      uninterpolateTruncation: RM((function(TT, UT, mT) {
        var WT = UT - +TT;
        return WT = WT || 1 / 0, Math.max(0, Math.min(1, (mT - TT) / WT))
      }))
    };

    function gg(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return kg(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(TT)) return Array.from(TT)
      }(TT) || Hg(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ng(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(TT))) return;
        var mT = [],
          WT = !0,
          zT = !1,
          MT = void 0;
        try {
          for (var gT, nT = TT[Symbol.iterator](); !(WT = (gT = nT.next()).done) && (mT.push(gT.value), !UT || mT.length !== UT); WT = !0);
        } catch (HT) {
          zT = !0, MT = HT
        } finally {
          try {
            WT || null == nT.return || nT.return()
          } finally {
            if (zT) throw MT
          }
        }
        return mT
      }(TT, UT) || Hg(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Hg(TT, UT) {
      if (TT) {
        if ("string" === typeof TT) return kg(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        return "Object" === mT && TT.constructor && (mT = TT.constructor.name), "Map" === mT || "Set" === mT ? Array.from(TT) : "Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT) ? kg(TT, UT) : void 0
      }
    }

    function kg(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function jg(TT) {
      var UT = ng(TT, 2),
        mT = UT[0],
        WT = UT[1],
        zT = mT,
        MT = WT;
      return mT > WT && (zT = WT, MT = mT), [zT, MT]
    }

    function lg(TT, UT, mT) {
      if (TT.lte(0)) return new(SM())(0);
      var WT = Mg.getDigitCount(TT.toNumber()),
        zT = new(SM())(10).pow(WT),
        MT = TT.div(zT),
        gT = 1 !== WT ? .05 : .1,
        nT = new(SM())(Math.ceil(MT.div(gT).toNumber())).add(mT).mul(gT).mul(zT);
      return UT ? nT : new(SM())(Math.ceil(nT))
    }

    function Lg(TT, UT, mT) {
      var WT = 1,
        zT = new(SM())(TT);
      if (!zT.isint() && mT) {
        var MT = Math.abs(TT);
        MT < 1 ? (WT = new(SM())(10).pow(Mg.getDigitCount(TT) - 1), zT = new(SM())(Math.floor(zT.div(WT).toNumber())).mul(WT)) : MT > 1 && (zT = new(SM())(Math.floor(TT)))
      } else 0 === TT ? zT = new(SM())(Math.floor((UT - 1) / 2)) : mT || (zT = new(SM())(Math.floor(TT)));
      var gT = Math.floor((UT - 1) / 2);
      return mg(Ug((function(TT) {
        return zT.add(new(SM())(TT - gT).mul(WT)).toNumber()
      })), Tg)(0, UT)
    }

    function pg(TT, UT, mT, WT) {
      var zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((UT - TT) / (mT - 1))) return {
        step: new(SM())(0),
        tickMin: new(SM())(0),
        tickMax: new(SM())(0)
      };
      var MT, gT = lg(new(SM())(UT).sub(TT).div(mT - 1), WT, zT);
      MT = TT <= 0 && UT >= 0 ? new(SM())(0) : (MT = new(SM())(TT).add(UT).div(2)).sub(new(SM())(MT).mod(gT));
      var nT = Math.ceil(MT.sub(TT).div(gT).toNumber()),
        HT = Math.ceil(new(SM())(UT).sub(MT).div(gT).toNumber()),
        kT = nT + HT + 1;
      return kT > mT ? pg(TT, UT, mT, WT, zT + 1) : (kT < mT && (HT = UT > 0 ? HT + (mT - kT) : HT, nT = UT > 0 ? nT : nT + (mT - kT)), {
        step: gT,
        tickMin: MT.sub(new(SM())(nT).mul(gT)),
        tickMax: MT.add(new(SM())(HT).mul(gT))
      })
    }
    var Bg = zg((function(TT) {
        var UT = ng(TT, 2),
          mT = UT[0],
          WT = UT[1],
          zT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          MT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          gT = Math.max(zT, 2),
          nT = ng(jg([mT, WT]), 2),
          HT = nT[0],
          kT = nT[1];
        if (HT === -1 / 0 || kT === 1 / 0) {
          var jT = kT === 1 / 0 ? [HT].concat(gg(Tg(0, zT - 1).map((function() {
            return 1 / 0
          })))) : [].concat(gg(Tg(0, zT - 1).map((function() {
            return -1 / 0
          }))), [kT]);
          return mT > WT ? Wg(jT) : jT
        }
        if (HT === kT) return Lg(HT, zT, MT);
        var lT = pg(HT, kT, gT, MT),
          LT = lT.step,
          pT = lT.tickMin,
          BT = lT.tickMax,
          ZT = Mg.rangeStep(pT, BT.add(new(SM())(.1).mul(LT)), LT);
        return mT > WT ? Wg(ZT) : ZT
      })),
      Zg = (zg((function(TT) {
        var UT = ng(TT, 2),
          mT = UT[0],
          WT = UT[1],
          zT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          MT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          gT = Math.max(zT, 2),
          nT = ng(jg([mT, WT]), 2),
          HT = nT[0],
          kT = nT[1];
        if (HT === -1 / 0 || kT === 1 / 0) return [mT, WT];
        if (HT === kT) return Lg(HT, zT, MT);
        var jT = lg(new(SM())(kT).sub(HT).div(gT - 1), MT, 0),
          lT = mg(Ug((function(TT) {
            return new(SM())(HT).add(new(SM())(TT).mul(jT)).toNumber()
          })), Tg)(0, gT).filter((function(TT) {
            return TT >= HT && TT <= kT
          }));
        return mT > WT ? Wg(lT) : lT
      })), zg((function(TT, UT) {
        var mT = ng(TT, 2),
          WT = mT[0],
          zT = mT[1],
          MT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          gT = ng(jg([WT, zT]), 2),
          nT = gT[0],
          HT = gT[1];
        if (nT === -1 / 0 || HT === 1 / 0) return [WT, zT];
        if (nT === HT) return [nT];
        var kT = Math.max(UT, 2),
          jT = lg(new(SM())(HT).sub(nT).div(kT - 1), MT, 0),
          lT = [].concat(gg(Mg.rangeStep(new(SM())(nT), new(SM())(HT).sub(new(SM())(.99).mul(jT)), jT)), [HT]);
        return WT > zT ? Wg(lT) : lT
      }))),
      cg = mT(6302),
      vg = mT(5254),
      fg = mT(5497),
      qg = mT(6308);

    function ig(TT) {
      return ig = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, ig(TT)
    }

    function bg(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return Og(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || function(TT, UT) {
        if (!TT) return;
        if ("string" === typeof TT) return Og(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === mT && TT.constructor && (mT = TT.constructor.name);
        if ("Map" === mT || "Set" === mT) return Array.from(TT);
        if ("Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT)) return Og(TT, UT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Og(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function eg(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function Yg(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? eg(Object(mT), !0).forEach((function(UT) {
          Jg(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : eg(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function Jg(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != ig(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != ig(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == ig(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function xg(TT, UT, mT) {
      return JM()(TT) || JM()(UT) ? mT : (0, vg.w)(UT) ? yM()(TT, UT, mT) : dM()(UT) ? UT(TT) : mT
    }

    function dg(TT, UT, mT, WT) {
      var zT = IM()(TT, (function(TT) {
        return xg(TT, UT)
      }));
      if ("number" === mT) {
        var MT = zT.filter((function(TT) {
          return (0, vg.x)(TT) || parseFloat(TT)
        }));
        return MT.length ? [eM()(MT), bM()(MT)] : [1 / 0, -1 / 0]
      }
      return (WT ? zT.filter((function(TT) {
        return !JM()(TT)
      })) : zT).map((function(TT) {
        return (0, vg.w)(TT) || TT instanceof Date ? TT : ""
      }))
    }
    var wg = function(TT) {
        var UT, mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          WT = arguments.length > 2 ? arguments[2] : void 0,
          zT = arguments.length > 3 ? arguments[3] : void 0,
          MT = -1,
          gT = null !== (UT = null === mT || void 0 === mT ? void 0 : mT.length) && void 0 !== UT ? UT : 0;
        if (gT <= 1) return 0;
        if (zT && "angleAxis" === zT.axisType && Math.abs(Math.abs(zT.range[1] - zT.range[0]) - 360) <= 1e-6)
          for (var nT = zT.range, HT = 0; HT < gT; HT++) {
            var kT = HT > 0 ? WT[HT - 1].coordinate : WT[gT - 1].coordinate,
              jT = WT[HT].coordinate,
              lT = HT >= gT - 1 ? WT[0].coordinate : WT[HT + 1].coordinate,
              LT = void 0;
            if ((0, vg.D)(jT - kT) !== (0, vg.D)(lT - jT)) {
              var pT = [];
              if ((0, vg.D)(lT - jT) === (0, vg.D)(nT[1] - nT[0])) {
                LT = lT;
                var BT = jT + nT[1] - nT[0];
                pT[0] = Math.min(BT, (BT + kT) / 2), pT[1] = Math.max(BT, (BT + kT) / 2)
              } else {
                LT = kT;
                var ZT = lT + nT[1] - nT[0];
                pT[0] = Math.min(jT, (ZT + jT) / 2), pT[1] = Math.max(jT, (ZT + jT) / 2)
              }
              var cT = [Math.min(jT, (LT + jT) / 2), Math.max(jT, (LT + jT) / 2)];
              if (TT > cT[0] && TT <= cT[1] || TT >= pT[0] && TT <= pT[1]) {
                MT = WT[HT].index;
                break
              }
            } else {
              var vT = Math.min(kT, lT),
                fT = Math.max(kT, lT);
              if (TT > (vT + jT) / 2 && TT <= (fT + jT) / 2) {
                MT = WT[HT].index;
                break
              }
            }
          } else
            for (var qT = 0; qT < gT; qT++)
              if (0 === qT && TT <= (mT[qT].coordinate + mT[qT + 1].coordinate) / 2 || qT > 0 && qT < gT - 1 && TT > (mT[qT].coordinate + mT[qT - 1].coordinate) / 2 && TT <= (mT[qT].coordinate + mT[qT + 1].coordinate) / 2 || qT === gT - 1 && TT > (mT[qT].coordinate + mT[qT - 1].coordinate) / 2) {
                MT = mT[qT].index;
                break
              } return MT
      },
      tg = function(TT) {
        var UT, mT, WT = TT.type.displayName,
          zT = null !== (UT = TT.type) && void 0 !== UT && UT.defaultProps ? Yg(Yg({}, TT.type.defaultProps), TT.props) : TT.props,
          MT = zT.stroke,
          gT = zT.fill;
        switch (WT) {
          case "Line":
            mT = MT;
            break;
          case "Area":
          case "Radar":
            mT = MT && "none" !== MT ? MT : gT;
            break;
          default:
            mT = gT
        }
        return mT
      },
      ag = function(TT) {
        var UT = TT.barSize,
          mT = TT.totalSize,
          WT = TT.stackGroups,
          zT = void 0 === WT ? {} : WT;
        if (!zT) return {};
        for (var MT = {}, gT = Object.keys(zT), nT = 0, HT = gT.length; nT < HT; nT++)
          for (var kT = zT[gT[nT]].stackGroups, jT = Object.keys(kT), lT = 0, LT = jT.length; lT < LT; lT++) {
            var pT = kT[jT[lT]],
              BT = pT.items,
              ZT = pT.cateAxisId,
              cT = BT.filter((function(TT) {
                return (0, fg.l)(TT.type).indexOf("Bar") >= 0
              }));
            if (cT && cT.length) {
              var vT = cT[0].type.defaultProps,
                fT = void 0 !== vT ? Yg(Yg({}, vT), cT[0].props) : cT[0].props,
                qT = fT.barSize,
                iT = fT[ZT];
              MT[iT] || (MT[iT] = []);
              var bT = JM()(qT) ? UT : qT;
              MT[iT].push({
                item: cT[0],
                stackList: cT.slice(1),
                barSize: JM()(bT) ? void 0 : (0, vg.n)(bT, mT, 0)
              })
            }
          }
        return MT
      },
      yg = function(TT) {
        var UT = TT.barGap,
          mT = TT.barCategoryGap,
          WT = TT.bandSize,
          zT = TT.sizeList,
          MT = void 0 === zT ? [] : zT,
          gT = TT.maxBarSize,
          nT = MT.length;
        if (nT < 1) return null;
        var HT, kT = (0, vg.n)(UT, WT, 0, !0),
          jT = [];
        if (MT[0].barSize === +MT[0].barSize) {
          var lT = !1,
            LT = WT / nT,
            pT = MT.reduce((function(TT, UT) {
              return TT + UT.barSize || 0
            }), 0);
          (pT += (nT - 1) * kT) >= WT && (pT -= (nT - 1) * kT, kT = 0), pT >= WT && LT > 0 && (lT = !0, pT = nT * (LT *= .9));
          var BT = {
            offset: ((WT - pT) / 2 | 0) - kT,
            size: 0
          };
          HT = MT.reduce((function(TT, UT) {
            var mT = {
                item: UT.item,
                position: {
                  offset: BT.offset + BT.size + kT,
                  size: lT ? LT : UT.barSize
                }
              },
              WT = [].concat(bg(TT), [mT]);
            return BT = WT[WT.length - 1].position, UT.stackList && UT.stackList.length && UT.stackList.forEach((function(TT) {
              WT.push({
                item: TT,
                position: BT
              })
            })), WT
          }), jT)
        } else {
          var ZT = (0, vg.n)(mT, WT, 0, !0);
          WT - 2 * ZT - (nT - 1) * kT <= 0 && (kT = 0);
          var cT = (WT - 2 * ZT - (nT - 1) * kT) / nT;
          cT > 1 && (cT >>= 0);
          var vT = gT === +gT ? Math.min(cT, gT) : cT;
          HT = MT.reduce((function(TT, UT, mT) {
            var WT = [].concat(bg(TT), [{
              item: UT.item,
              position: {
                offset: ZT + (cT + kT) * mT + (cT - vT) / 2,
                size: vT
              }
            }]);
            return UT.stackList && UT.stackList.length && UT.stackList.forEach((function(TT) {
              WT.push({
                item: TT,
                position: WT[WT.length - 1].position
              })
            })), WT
          }), jT)
        }
        return HT
      },
      Xg = function(TT, UT, mT, WT) {
        var zT = mT.children,
          MT = mT.width,
          gT = mT.margin,
          nT = MT - (gT.left || 0) - (gT.right || 0),
          HT = (0, qg.c)({
            children: zT,
            legendWidth: nT
          });
        if (HT) {
          var kT = WT || {},
            jT = kT.width,
            lT = kT.height,
            LT = HT.align,
            pT = HT.verticalAlign,
            BT = HT.layout;
          if (("vertical" === BT || "horizontal" === BT && "middle" === pT) && "center" !== LT && (0, vg.x)(TT[LT])) return Yg(Yg({}, TT), {}, Jg({}, LT, TT[LT] + (jT || 0)));
          if (("horizontal" === BT || "vertical" === BT && "center" === LT) && "middle" !== pT && (0, vg.x)(TT[pT])) return Yg(Yg({}, TT), {}, Jg({}, pT, TT[pT] + (lT || 0)))
        }
        return TT
      },
      Ig = function(TT, UT, mT, WT, zT) {
        var MT = UT.props.children,
          gT = (0, fg.d)(MT, cg.c).filter((function(TT) {
            return function(TT, UT, mT) {
              return !!JM()(UT) || ("horizontal" === TT ? "yAxis" === UT : "vertical" === TT || "x" === mT ? "xAxis" === UT : "y" !== mT || "yAxis" === UT)
            }(WT, zT, TT.props.direction)
          }));
        if (gT && gT.length) {
          var nT = gT.map((function(TT) {
            return TT.props.dataKey
          }));
          return TT.reduce((function(TT, UT) {
            var WT = xg(UT, mT);
            if (JM()(WT)) return TT;
            var zT = Array.isArray(WT) ? [eM()(WT), bM()(WT)] : [WT, WT],
              MT = nT.reduce((function(TT, mT) {
                var WT = xg(UT, mT, 0),
                  MT = zT[0] - Math.abs(Array.isArray(WT) ? WT[0] : WT),
                  gT = zT[1] + Math.abs(Array.isArray(WT) ? WT[1] : WT);
                return [Math.min(MT, TT[0]), Math.max(gT, TT[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(MT[0], TT[0]), Math.max(MT[1], TT[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      Qg = function(TT, UT, mT, WT, zT) {
        var MT = UT.map((function(UT) {
          return Ig(TT, UT, mT, zT, WT)
        })).filter((function(TT) {
          return !JM()(TT)
        }));
        return MT && MT.length ? MT.reduce((function(TT, UT) {
          return [Math.min(TT[0], UT[0]), Math.max(TT[1], UT[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      sg = function(TT, UT, mT, WT, zT) {
        var MT = UT.map((function(UT) {
          var MT = UT.props.dataKey;
          return "number" === mT && MT && Ig(TT, UT, MT, WT) || dg(TT, MT, mT, zT)
        }));
        if ("number" === mT) return MT.reduce((function(TT, UT) {
          return [Math.min(TT[0], UT[0]), Math.max(TT[1], UT[1])]
        }), [1 / 0, -1 / 0]);
        var gT = {};
        return MT.reduce((function(TT, UT) {
          for (var mT = 0, WT = UT.length; mT < WT; mT++) gT[UT[mT]] || (gT[UT[mT]] = !0, TT.push(UT[mT]));
          return TT
        }), [])
      },
      Fg = function(TT, UT) {
        return "horizontal" === TT && "xAxis" === UT || "vertical" === TT && "yAxis" === UT || "centric" === TT && "angleAxis" === UT || "radial" === TT && "radiusAxis" === UT
      },
      Pg = function(TT, UT, mT, WT) {
        if (WT) return TT.map((function(TT) {
          return TT.coordinate
        }));
        var zT, MT, gT = TT.map((function(TT) {
          return TT.coordinate === UT && (zT = !0), TT.coordinate === mT && (MT = !0), TT.coordinate
        }));
        return zT || gT.push(UT), MT || gT.push(mT), gT
      },
      Vg = function(TT, UT, mT) {
        if (!TT) return null;
        var WT = TT.scale,
          zT = TT.duplicateDomain,
          MT = TT.type,
          gT = TT.range,
          nT = "scaleBand" === TT.realScaleType ? WT.bandwidth() / 2 : 2,
          HT = (UT || mT) && "category" === MT && WT.bandwidth ? WT.bandwidth() / nT : 0;
        return HT = "angleAxis" === TT.axisType && (null === gT || void 0 === gT ? void 0 : gT.length) >= 2 ? 2 * (0, vg.D)(gT[0] - gT[1]) * HT : HT, UT && (TT.ticks || TT.niceTicks) ? (TT.ticks || TT.niceTicks).map((function(TT) {
          var UT = zT ? zT.indexOf(TT) : TT;
          return {
            coordinate: WT(UT) + HT,
            value: TT,
            offset: HT
          }
        })).filter((function(TT) {
          return !sM()(TT.coordinate)
        })) : TT.isCategorical && TT.categoricalDomain ? TT.categoricalDomain.map((function(TT, UT) {
          return {
            coordinate: WT(TT) + HT,
            value: TT,
            index: UT,
            offset: HT
          }
        })) : WT.ticks && !mT ? WT.ticks(TT.tickCount).map((function(TT) {
          return {
            coordinate: WT(TT) + HT,
            value: TT,
            offset: HT
          }
        })) : WT.domain().map((function(TT, UT) {
          return {
            coordinate: WT(TT) + HT,
            value: zT ? zT[TT] : TT,
            index: UT,
            offset: HT
          }
        }))
      },
      ug = new WeakMap,
      Cg = function(TT, UT) {
        if ("function" !== typeof UT) return TT;
        ug.has(TT) || ug.set(TT, new WeakMap);
        var mT = ug.get(TT);
        if (mT.has(UT)) return mT.get(UT);
        var WT = function() {
          TT.apply(void 0, arguments), UT.apply(void 0, arguments)
        };
        return mT.set(UT, WT), WT
      },
      rg = function(TT, UT, mT) {
        var MT = TT.scale,
          gT = TT.type,
          nT = TT.layout,
          HT = TT.axisType;
        if ("auto" === MT) return "radial" === nT && "radiusAxis" === HT ? {
          scale: zT.e(),
          realScaleType: "band"
        } : "radial" === nT && "angleAxis" === HT ? {
          scale: EU(),
          realScaleType: "linear"
        } : "category" === gT && UT && (UT.indexOf("LineChart") >= 0 || UT.indexOf("AreaChart") >= 0 || UT.indexOf("ComposedChart") >= 0 && !mT) ? {
          scale: zT.f(),
          realScaleType: "point"
        } : "category" === gT ? {
          scale: zT.e(),
          realScaleType: "band"
        } : {
          scale: EU(),
          realScaleType: "linear"
        };
        if (tM()(MT)) {
          var kT = "scale".concat(PM()(MT));
          return {
            scale: (WT[kT] || zT.f)(),
            realScaleType: WT[kT] ? kT : "point"
          }
        }
        return dM()(MT) ? {
          scale: MT
        } : {
          scale: zT.f(),
          realScaleType: "point"
        }
      },
      Kg = 1e-4,
      Sg = function(TT) {
        var UT = TT.domain();
        if (UT && !(UT.length <= 2)) {
          var mT = UT.length,
            WT = TT.range(),
            zT = Math.min(WT[0], WT[1]) - Kg,
            MT = Math.max(WT[0], WT[1]) + Kg,
            gT = TT(UT[0]),
            nT = TT(UT[mT - 1]);
          (gT < zT || gT > MT || nT < zT || nT > MT) && TT.domain([UT[0], UT[mT - 1]])
        }
      },
      Gg = function(TT, UT) {
        if (!TT) return null;
        for (var mT = 0, WT = TT.length; mT < WT; mT++)
          if (TT[mT].item === UT) return TT[mT].position;
        return null
      },
      Ng = function(TT, UT) {
        if (!UT || 2 !== UT.length || !(0, vg.x)(UT[0]) || !(0, vg.x)(UT[1])) return TT;
        var mT = Math.min(UT[0], UT[1]),
          WT = Math.max(UT[0], UT[1]),
          zT = [TT[0], TT[1]];
        return (!(0, vg.x)(TT[0]) || TT[0] < mT) && (zT[0] = mT), (!(0, vg.x)(TT[1]) || TT[1] > WT) && (zT[1] = WT), zT[0] > WT && (zT[0] = WT), zT[1] < mT && (zT[1] = mT), zT
      },
      Eg = {
        sign: function(TT) {
          var UT = TT.length;
          if (!(UT <= 0))
            for (var mT = 0, WT = TT[0].length; mT < WT; ++mT)
              for (var zT = 0, MT = 0, gT = 0; gT < UT; ++gT) {
                var nT = sM()(TT[gT][mT][1]) ? TT[gT][mT][0] : TT[gT][mT][1];
                nT >= 0 ? (TT[gT][mT][0] = zT, TT[gT][mT][1] = zT + nT, zT = TT[gT][mT][1]) : (TT[gT][mT][0] = MT, TT[gT][mT][1] = MT + nT, MT = TT[gT][mT][1])
              }
        },
        expand: function(TT, UT) {
          if ((WT = TT.length) > 0) {
            for (var mT, WT, zT, MT = 0, gT = TT[0].length; MT < gT; ++MT) {
              for (zT = mT = 0; mT < WT; ++mT) zT += TT[mT][MT][1] || 0;
              if (zT)
                for (mT = 0; mT < WT; ++mT) TT[mT][MT][1] /= zT
            }
            BM(TT, UT)
          }
        },
        none: BM,
        silhouette: function(TT, UT) {
          if ((mT = TT.length) > 0) {
            for (var mT, WT = 0, zT = TT[UT[0]], MT = zT.length; WT < MT; ++WT) {
              for (var gT = 0, nT = 0; gT < mT; ++gT) nT += TT[gT][WT][1] || 0;
              zT[WT][1] += zT[WT][0] = -nT / 2
            }
            BM(TT, UT)
          }
        },
        wiggle: function(TT, UT) {
          if ((zT = TT.length) > 0 && (WT = (mT = TT[UT[0]]).length) > 0) {
            for (var mT, WT, zT, MT = 0, gT = 1; gT < WT; ++gT) {
              for (var nT = 0, HT = 0, kT = 0; nT < zT; ++nT) {
                for (var jT = TT[UT[nT]], lT = jT[gT][1] || 0, LT = (lT - (jT[gT - 1][1] || 0)) / 2, pT = 0; pT < nT; ++pT) {
                  var BT = TT[UT[pT]];
                  LT += (BT[gT][1] || 0) - (BT[gT - 1][1] || 0)
                }
                HT += lT, kT += LT * lT
              }
              mT[gT - 1][1] += mT[gT - 1][0] = MT, HT && (MT -= kT / HT)
            }
            mT[gT - 1][1] += mT[gT - 1][0] = MT, BM(TT, UT)
          }
        },
        positive: function(TT) {
          var UT = TT.length;
          if (!(UT <= 0))
            for (var mT = 0, WT = TT[0].length; mT < WT; ++mT)
              for (var zT = 0, MT = 0; MT < UT; ++MT) {
                var gT = sM()(TT[MT][mT][1]) ? TT[MT][mT][0] : TT[MT][mT][1];
                gT >= 0 ? (TT[MT][mT][0] = zT, TT[MT][mT][1] = zT + gT, zT = TT[MT][mT][1]) : (TT[MT][mT][0] = 0, TT[MT][mT][1] = 0)
              }
        }
      },
      hg = function(TT, UT, mT) {
        var WT = UT.map((function(TT) {
            return TT.props.dataKey
          })),
          zT = Eg[mT],
          MT = function() {
            var TT = (0, cM.b)([]),
              UT = vM,
              mT = BM,
              WT = fM;

            function zT(zT) {
              var MT, gT, nT = Array.from(TT.apply(this, arguments), qM),
                HT = nT.length,
                kT = -1;
              for (const TT of zT)
                for (MT = 0, ++kT; MT < HT; ++MT)(nT[MT][kT] = [0, +WT(TT, nT[MT].key, kT, zT)]).data = TT;
              for (MT = 0, gT = (0, ZM.d)(UT(nT)); MT < HT; ++MT) nT[gT[MT]].index = MT;
              return mT(nT, gT), nT
            }
            return zT.keys = function(UT) {
              return arguments.length ? (TT = "function" === typeof UT ? UT : (0, cM.b)(Array.from(UT)), zT) : TT
            }, zT.value = function(TT) {
              return arguments.length ? (WT = "function" === typeof TT ? TT : (0, cM.b)(+TT), zT) : WT
            }, zT.order = function(TT) {
              return arguments.length ? (UT = null == TT ? vM : "function" === typeof TT ? TT : (0, cM.b)(Array.from(TT)), zT) : UT
            }, zT.offset = function(TT) {
              return arguments.length ? (mT = null == TT ? BM : TT, zT) : mT
            }, zT
          }().keys(WT).value((function(TT, UT) {
            return +xg(TT, UT, 0)
          })).order(vM).offset(zT);
        return MT(TT)
      },
      Dg = function(TT, UT, mT, WT, zT, MT) {
        if (!TT) return null;
        var gT = (MT ? UT.reverse() : UT).reduce((function(TT, UT) {
          var zT, MT = null !== (zT = UT.type) && void 0 !== zT && zT.defaultProps ? Yg(Yg({}, UT.type.defaultProps), UT.props) : UT.props,
            gT = MT.stackId;
          if (MT.hide) return TT;
          var nT = MT[mT],
            HT = TT[nT] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, vg.w)(gT)) {
            var kT = HT.stackGroups[gT] || {
              numericAxisId: mT,
              cateAxisId: WT,
              items: []
            };
            kT.items.push(UT), HT.hasStack = !0, HT.stackGroups[gT] = kT
          } else HT.stackGroups[(0, vg.E)("_stackId_")] = {
            numericAxisId: mT,
            cateAxisId: WT,
            items: [UT]
          };
          return Yg(Yg({}, TT), {}, Jg({}, nT, HT))
        }), {});
        return Object.keys(gT).reduce((function(UT, MT) {
          var nT = gT[MT];
          if (nT.hasStack) {
            nT.stackGroups = Object.keys(nT.stackGroups).reduce((function(UT, MT) {
              var gT = nT.stackGroups[MT];
              return Yg(Yg({}, UT), {}, Jg({}, MT, {
                numericAxisId: mT,
                cateAxisId: WT,
                items: gT.items,
                stackedData: hg(TT, gT.items, zT)
              }))
            }), {})
          }
          return Yg(Yg({}, UT), {}, Jg({}, MT, nT))
        }), {})
      },
      og = function(TT, UT) {
        var mT = UT.realScaleType,
          WT = UT.type,
          zT = UT.tickCount,
          MT = UT.originalDomain,
          gT = UT.allowDecimals,
          nT = mT || UT.scale;
        if ("auto" !== nT && "linear" !== nT) return null;
        if (zT && "number" === WT && MT && ("auto" === MT[0] || "auto" === MT[1])) {
          var HT = TT.domain();
          if (!HT.length) return null;
          var kT = Bg(HT, zT, gT);
          return TT.domain([eM()(kT), bM()(kT)]), {
            niceTicks: kT
          }
        }
        if (zT && "number" === WT) {
          var jT = TT.domain();
          return {
            niceTicks: Zg(jT, zT, gT)
          }
        }
        return null
      };

    function Ag(TT) {
      var UT = TT.axis,
        mT = TT.ticks,
        WT = TT.bandSize,
        zT = TT.entry,
        MT = TT.index,
        gT = TT.dataKey;
      if ("category" === UT.type) {
        if (!UT.allowDuplicatedCategory && UT.dataKey && !JM()(zT[UT.dataKey])) {
          var nT = (0, vg.g)(mT, "value", zT[UT.dataKey]);
          if (nT) return nT.coordinate + WT / 2
        }
        return mT[MT] ? mT[MT].coordinate + WT / 2 : null
      }
      var HT = xg(zT, JM()(gT) ? UT.dataKey : gT);
      return JM()(HT) ? null : UT.scale(HT)
    }
    var Rg = function(TT) {
        var UT = TT.axis,
          mT = TT.ticks,
          WT = TT.offset,
          zT = TT.bandSize,
          MT = TT.entry,
          gT = TT.index;
        if ("category" === UT.type) return mT[gT] ? mT[gT].coordinate + WT : null;
        var nT = xg(MT, UT.dataKey, UT.domain[gT]);
        return JM()(nT) ? null : UT.scale(nT) - zT / 2 + WT
      },
      Tn = function(TT) {
        var UT = TT.numericAxis,
          mT = UT.scale.domain();
        if ("number" === UT.type) {
          var WT = Math.min(mT[0], mT[1]),
            zT = Math.max(mT[0], mT[1]);
          return WT <= 0 && zT >= 0 ? 0 : zT < 0 ? zT : WT
        }
        return mT[0]
      },
      Un = function(TT, UT) {
        var mT, WT = (null !== (mT = TT.type) && void 0 !== mT && mT.defaultProps ? Yg(Yg({}, TT.type.defaultProps), TT.props) : TT.props).stackId;
        if ((0, vg.w)(WT)) {
          var zT = UT[WT];
          if (zT) {
            var MT = zT.items.indexOf(TT);
            return MT >= 0 ? zT.stackedData[MT] : null
          }
        }
        return null
      },
      mn = function(TT, UT, mT) {
        return Object.keys(TT).reduce((function(WT, zT) {
          var MT = TT[zT].stackedData.reduce((function(TT, WT) {
            var zT = WT.slice(UT, mT + 1).reduce((function(TT, UT) {
              return [eM()(UT.concat([TT[0]]).filter(vg.x)), bM()(UT.concat([TT[1]]).filter(vg.x))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(TT[0], zT[0]), Math.max(TT[1], zT[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(MT[0], WT[0]), Math.max(MT[1], WT[1])]
        }), [1 / 0, -1 / 0]).map((function(TT) {
          return TT === 1 / 0 || TT === -1 / 0 ? 0 : TT
        }))
      },
      Wn = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      zn = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Mn = function(TT, UT, mT) {
        if (dM()(TT)) return TT(UT, mT);
        if (!Array.isArray(TT)) return UT;
        var WT = [];
        if ((0, vg.x)(TT[0])) WT[0] = mT ? TT[0] : Math.min(TT[0], UT[0]);
        else if (Wn.test(TT[0])) {
          var zT = +Wn.exec(TT[0])[1];
          WT[0] = UT[0] - zT
        } else dM()(TT[0]) ? WT[0] = TT[0](UT[0]) : WT[0] = UT[0];
        if ((0, vg.x)(TT[1])) WT[1] = mT ? TT[1] : Math.max(TT[1], UT[1]);
        else if (zn.test(TT[1])) {
          var MT = +zn.exec(TT[1])[1];
          WT[1] = UT[1] + MT
        } else dM()(TT[1]) ? WT[1] = TT[1](UT[1]) : WT[1] = UT[1];
        return WT
      },
      gn = function(TT, UT, mT) {
        if (TT && TT.scale && TT.scale.bandwidth) {
          var WT = TT.scale.bandwidth();
          if (!mT || WT > 0) return WT
        }
        if (TT && UT && UT.length >= 2) {
          for (var zT = rM()(UT, (function(TT) {
              return TT.coordinate
            })), MT = 1 / 0, gT = 1, nT = zT.length; gT < nT; gT++) {
            var HT = zT[gT],
              kT = zT[gT - 1];
            MT = Math.min((HT.coordinate || 0) - (kT.coordinate || 0), MT)
          }
          return MT === 1 / 0 ? 0 : MT
        }
        return mT ? void 0 : 0
      },
      nn = function(TT, UT, mT) {
        return TT && TT.length ? uM()(TT, yM()(mT, "type.defaultProps.domain")) ? UT : TT : UT
      },
      Hn = function(TT, UT) {
        var mT = TT.type.defaultProps ? Yg(Yg({}, TT.type.defaultProps), TT.props) : TT.props,
          WT = mT.dataKey,
          zT = mT.name,
          MT = mT.unit,
          gT = mT.formatter,
          nT = mT.tooltipType,
          HT = mT.chartType,
          kT = mT.hide;
        return Yg(Yg({}, (0, fg.b)(TT, !1)), {}, {
          dataKey: WT,
          unit: MT,
          formatter: gT,
          name: zT || WT,
          color: tg(TT),
          value: xg(UT, WT),
          type: nT,
          payload: UT,
          chartType: HT,
          hide: kT
        })
      }
  },
  6212: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => LT,
      f: () => lT
    });
    var WT = mT(6067);

    function zT(TT) {
      return zT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, zT(TT)
    }

    function MT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function gT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? MT(Object(mT), !0).forEach((function(UT) {
          nT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : MT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function nT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != zT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != zT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == zT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }
    var HT = {
        widthCache: {},
        cacheCount: 0
      },
      kT = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      jT = "recharts_measurement_span";
    var lT = function(TT) {
        var UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === TT || null === TT || WT.c.isSsr) return {
          width: 0,
          height: 0
        };
        var mT = function(TT) {
            var UT = gT({}, TT);
            return Object.keys(UT).forEach((function(TT) {
              UT[TT] || delete UT[TT]
            })), UT
          }(UT),
          zT = JSON.stringify({
            text: TT,
            copyStyle: mT
          });
        if (HT.widthCache[zT]) return HT.widthCache[zT];
        try {
          var MT = document.getElementById(jT);
          MT || ((MT = document.createElement("span")).setAttribute("id", jT), MT.setAttribute("aria-hidden", "true"), document.body.appendChild(MT));
          var nT = gT(gT({}, kT), mT);
          Object.assign(MT.style, nT), MT.textContent = "".concat(TT);
          var lT = MT.getBoundingClientRect(),
            LT = {
              width: lT.width,
              height: lT.height
            };
          return HT.widthCache[zT] = LT, ++HT.cacheCount > 2e3 && (HT.cacheCount = 0, HT.widthCache = {}), LT
        } catch (pT) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      LT = function(TT) {
        return {
          top: TT.top + window.scrollY - document.documentElement.clientTop,
          left: TT.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  5254: (TT, UT, mT) => {
    mT.d(UT, {
      D: () => pT,
      E: () => qT,
      d: () => xT,
      g: () => YT,
      h: () => bT,
      j: () => JT,
      n: () => iT,
      o: () => OT,
      q: () => eT,
      u: () => cT,
      w: () => vT,
      x: () => ZT,
      z: () => BT
    });
    var WT = mT(5259),
      zT = mT.n(WT),
      MT = mT(5265),
      gT = mT.n(MT),
      nT = mT(5275),
      HT = mT.n(nT),
      kT = mT(5273),
      jT = mT.n(kT),
      lT = mT(5485),
      LT = mT.n(lT),
      pT = function(TT) {
        return 0 === TT ? 0 : TT > 0 ? 1 : -1
      },
      BT = function(TT) {
        return zT()(TT) && TT.indexOf("%") === TT.length - 1
      },
      ZT = function(TT) {
        return jT()(TT) && !gT()(TT)
      },
      cT = function(TT) {
        return LT()(TT)
      },
      vT = function(TT) {
        return ZT(TT) || zT()(TT)
      },
      fT = 0,
      qT = function(TT) {
        var UT = ++fT;
        return "".concat(TT || "").concat(UT)
      },
      iT = function(TT, UT) {
        var mT, WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          MT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!ZT(TT) && !zT()(TT)) return WT;
        if (BT(TT)) {
          var nT = TT.indexOf("%");
          mT = UT * parseFloat(TT.slice(0, nT)) / 100
        } else mT = +TT;
        return gT()(mT) && (mT = WT), MT && mT > UT && (mT = UT), mT
      },
      bT = function(TT) {
        if (!TT) return null;
        var UT = Object.keys(TT);
        return UT && UT.length ? TT[UT[0]] : null
      },
      OT = function(TT) {
        if (!Array.isArray(TT)) return !1;
        for (var UT = TT.length, mT = {}, WT = 0; WT < UT; WT++) {
          if (mT[TT[WT]]) return !0;
          mT[TT[WT]] = !0
        }
        return !1
      },
      eT = function(TT, UT) {
        return ZT(TT) && ZT(UT) ? function(mT) {
          return TT + mT * (UT - TT)
        } : function() {
          return UT
        }
      };

    function YT(TT, UT, mT) {
      return TT && TT.length ? TT.find((function(TT) {
        return TT && ("function" === typeof UT ? UT(TT) : HT()(TT, UT)) === mT
      })) : null
    }
    var JT = function(TT) {
        if (!TT || !TT.length) return null;
        for (var UT = TT.length, mT = 0, WT = 0, zT = 0, MT = 0, gT = 1 / 0, nT = -1 / 0, HT = 0, kT = 0, jT = 0; jT < UT; jT++) mT += HT = TT[jT].cx || 0, WT += kT = TT[jT].cy || 0, zT += HT * kT, MT += HT * HT, gT = Math.min(gT, HT), nT = Math.max(nT, HT);
        var lT = UT * MT !== mT * mT ? (UT * zT - mT * WT) / (UT * MT - mT * mT) : 0;
        return {
          xmin: gT,
          xmax: nT,
          a: lT,
          b: (WT - lT * mT) / UT
        }
      },
      xT = function(TT, UT) {
        return ZT(TT) && ZT(UT) ? TT - UT : zT()(TT) && zT()(UT) ? TT.localeCompare(UT) : TT instanceof Date && UT instanceof Date ? TT.getTime() - UT.getTime() : String(TT).localeCompare(String(UT))
      }
  },
  6067: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT
    });
    var WT = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(TT) {
        return WT[TT]
      },
      set: function(TT, UT) {
        if ("string" === typeof TT) WT[TT] = UT;
        else {
          var mT = Object.keys(TT);
          mT && mT.length && mT.forEach((function(UT) {
            WT[UT] = TT[UT]
          }))
        }
      }
    }
  },
  6324: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    var WT = function(TT, UT) {
      var mT = TT.alwaysShow,
        WT = TT.ifOverflow;
      return mT && (WT = "extendDomain"), WT === UT
    }
  },
  5491: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    var WT = function(TT, UT) {
      for (var mT = arguments.length, WT = new Array(mT > 2 ? mT - 2 : 0), zT = 2; zT < mT; zT++) WT[zT - 2] = arguments[zT]
    }
  },
  6322: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => nT,
      g: () => LT,
      i: () => kT
    });
    mT(5485), mT(63), mT(5337);

    function WT(TT) {
      return WT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, WT(TT)
    }

    function zT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function MT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? zT(Object(mT), !0).forEach((function(UT) {
          gT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : zT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function gT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != WT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var zT = mT.call(TT, UT || "default");
            if ("object" != WT(zT)) return zT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == WT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }
    var nT = Math.PI / 180,
      HT = function(TT) {
        return 180 * TT / Math.PI
      },
      kT = function(TT, UT, mT, WT) {
        return {
          x: TT + Math.cos(-nT * WT) * mT,
          y: UT + Math.sin(-nT * WT) * mT
        }
      },
      jT = function(TT, UT) {
        var mT = TT.x,
          WT = TT.y,
          zT = UT.cx,
          MT = UT.cy,
          gT = function(TT, UT) {
            var mT = TT.x,
              WT = TT.y,
              zT = UT.x,
              MT = UT.y;
            return Math.sqrt(Math.pow(mT - zT, 2) + Math.pow(WT - MT, 2))
          }({
            x: mT,
            y: WT
          }, {
            x: zT,
            y: MT
          });
        if (gT <= 0) return {
          radius: gT
        };
        var nT = (mT - zT) / gT,
          kT = Math.acos(nT);
        return WT > MT && (kT = 2 * Math.PI - kT), {
          radius: gT,
          angle: HT(kT),
          angleInRadian: kT
        }
      },
      lT = function(TT, UT) {
        var mT = UT.startAngle,
          WT = UT.endAngle,
          zT = Math.floor(mT / 360),
          MT = Math.floor(WT / 360);
        return TT + 360 * Math.min(zT, MT)
      },
      LT = function(TT, UT) {
        var mT = TT.x,
          WT = TT.y,
          zT = jT({
            x: mT,
            y: WT
          }, UT),
          gT = zT.radius,
          nT = zT.angle,
          HT = UT.innerRadius,
          kT = UT.outerRadius;
        if (gT < HT || gT > kT) return !1;
        if (0 === gT) return !0;
        var LT, pT = function(TT) {
            var UT = TT.startAngle,
              mT = TT.endAngle,
              WT = Math.floor(UT / 360),
              zT = Math.floor(mT / 360),
              MT = Math.min(WT, zT);
            return {
              startAngle: UT - 360 * MT,
              endAngle: mT - 360 * MT
            }
          }(UT),
          BT = pT.startAngle,
          ZT = pT.endAngle,
          cT = nT;
        if (BT <= ZT) {
          for (; cT > ZT;) cT -= 360;
          for (; cT < BT;) cT += 360;
          LT = cT >= BT && cT <= ZT
        } else {
          for (; cT > BT;) cT -= 360;
          for (; cT < ZT;) cT += 360;
          LT = cT >= ZT && cT <= BT
        }
        return LT ? MT(MT({}, UT), {}, {
          radius: gT,
          angle: lT(cT, UT)
        }) : null
      }
  },
  5497: (TT, UT, mT) => {
    mT.d(UT, {
      C: () => tT,
      b: () => IT,
      d: () => dT,
      h: () => wT,
      l: () => eT,
      n: () => PT,
      p: () => XT,
      t: () => QT,
      w: () => VT,
      z: () => FT
    });
    var WT = mT(5275),
      zT = mT.n(WT),
      MT = mT(5485),
      gT = mT.n(MT),
      nT = mT(5259),
      HT = mT.n(nT),
      kT = mT(5337),
      jT = mT.n(kT),
      lT = mT(5196),
      LT = mT.n(lT),
      pT = mT(63),
      BT = mT(5502),
      ZT = mT(5254),
      cT = mT(5514),
      vT = mT(5517),
      fT = ["children"],
      qT = ["children"];

    function iT(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT = {};
        for (var WT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, WT)) {
            if (UT.indexOf(WT) >= 0) continue;
            mT[WT] = TT[WT]
          } return mT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }

    function bT(TT) {
      return bT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, bT(TT)
    }
    var OT = {
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
      eT = function(TT) {
        return "string" === typeof TT ? TT : TT ? TT.displayName || TT.name || "Component" : ""
      },
      YT = null,
      JT = null,
      xT = function TT(UT) {
        if (UT === YT && Array.isArray(JT)) return JT;
        var mT = [];
        return pT.Children.forEach(UT, (function(UT) {
          gT()(UT) || ((0, BT.isFragment)(UT) ? mT = mT.concat(TT(UT.props.children)) : mT.push(UT))
        })), JT = mT, YT = UT, mT
      };

    function dT(TT, UT) {
      var mT = [],
        WT = [];
      return WT = Array.isArray(UT) ? UT.map((function(TT) {
        return eT(TT)
      })) : [eT(UT)], xT(TT).forEach((function(TT) {
        var UT = zT()(TT, "type.displayName") || zT()(TT, "type.name"); - 1 !== WT.indexOf(UT) && mT.push(TT)
      })), mT
    }

    function wT(TT, UT) {
      var mT = dT(TT, UT);
      return mT && mT[0]
    }
    var tT = function(TT) {
        if (!TT || !TT.props) return !1;
        var UT = TT.props,
          mT = UT.width,
          WT = UT.height;
        return !(!(0, ZT.x)(mT) || mT <= 0 || !(0, ZT.x)(WT) || WT <= 0)
      },
      aT = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      yT = function(TT) {
        return TT && TT.type && HT()(TT.type) && aT.indexOf(TT.type) >= 0
      },
      XT = function(TT) {
        return TT && "object" === bT(TT) && "clipDot" in TT
      },
      IT = function(TT, UT, mT) {
        if (!TT || "function" === typeof TT || "boolean" === typeof TT) return null;
        var WT = TT;
        if ((0, pT.isValidElement)(TT) && (WT = TT.props), !LT()(WT)) return null;
        var zT = {};
        return Object.keys(WT).forEach((function(TT) {
          var MT;
          (function(TT, UT, mT, WT) {
            var zT, MT = null !== (zT = null === vT.c || void 0 === vT.c ? void 0 : vT.c[WT]) && void 0 !== zT ? zT : [];
            return UT.startsWith("data-") || !jT()(TT) && (WT && MT.includes(UT) || vT.e.includes(UT)) || mT && vT.b.includes(UT)
          })(null === (MT = WT) || void 0 === MT ? void 0 : MT[TT], TT, UT, mT) && (zT[TT] = WT[TT])
        })), zT
      },
      QT = function TT(UT, mT) {
        if (UT === mT) return !0;
        var WT = pT.Children.count(UT);
        if (WT !== pT.Children.count(mT)) return !1;
        if (0 === WT) return !0;
        if (1 === WT) return sT(Array.isArray(UT) ? UT[0] : UT, Array.isArray(mT) ? mT[0] : mT);
        for (var zT = 0; zT < WT; zT++) {
          var MT = UT[zT],
            gT = mT[zT];
          if (Array.isArray(MT) || Array.isArray(gT)) {
            if (!TT(MT, gT)) return !1
          } else if (!sT(MT, gT)) return !1
        }
        return !0
      },
      sT = function(TT, UT) {
        if (gT()(TT) && gT()(UT)) return !0;
        if (!gT()(TT) && !gT()(UT)) {
          var mT = TT.props || {},
            WT = mT.children,
            zT = iT(mT, fT),
            MT = UT.props || {},
            nT = MT.children,
            HT = iT(MT, qT);
          return WT && nT ? (0, cT.b)(zT, HT) && QT(WT, nT) : !WT && !nT && (0, cT.b)(zT, HT)
        }
        return !1
      },
      FT = function(TT, UT) {
        var mT = [],
          WT = {};
        return xT(TT).forEach((function(TT, zT) {
          if (yT(TT)) mT.push(TT);
          else if (TT) {
            var MT = eT(TT.type),
              gT = UT[MT] || {},
              nT = gT.handler,
              HT = gT.once;
            if (nT && (!HT || !WT[MT])) {
              var kT = nT(TT, MT, zT);
              mT.push(kT), WT[MT] = !0
            }
          }
        })), mT
      },
      PT = function(TT) {
        var UT = TT && TT.type;
        return UT && OT[UT] ? OT[UT] : null
      },
      VT = function(TT, UT) {
        return xT(UT).indexOf(TT)
      }
  },
  5514: (TT, UT, mT) => {
    function WT(TT, UT) {
      for (var mT in TT)
        if ({}.hasOwnProperty.call(TT, mT) && (!{}.hasOwnProperty.call(UT, mT) || TT[mT] !== UT[mT])) return !1;
      for (var WT in UT)
        if ({}.hasOwnProperty.call(UT, WT) && !{}.hasOwnProperty.call(TT, WT)) return !1;
      return !0
    }
    mT.d(UT, {
      b: () => WT
    })
  },
  6308: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => jT
    });
    var WT = mT(6134),
      zT = mT(6218),
      MT = mT(5497);

    function gT(TT) {
      return gT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, gT(TT)
    }

    function nT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function HT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? nT(Object(mT), !0).forEach((function(UT) {
          kT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : nT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function kT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != gT(TT) || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != gT(WT)) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == gT(UT) ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }
    var jT = function(TT) {
      var UT = TT.children,
        mT = TT.formattedGraphicalItems,
        gT = TT.legendWidth,
        nT = TT.legendContent,
        kT = (0, MT.h)(UT, WT.c);
      if (!kT) return null;
      var jT, lT = WT.c.defaultProps,
        LT = void 0 !== lT ? HT(HT({}, lT), kT.props) : {};
      return jT = kT.props && kT.props.payload ? kT.props && kT.props.payload : "children" === nT ? (mT || []).reduce((function(TT, UT) {
        var mT = UT.item,
          WT = UT.props,
          zT = WT.sectors || WT.data || [];
        return TT.concat(zT.map((function(TT) {
          return {
            type: kT.props.iconType || mT.props.legendType,
            value: TT.name,
            color: TT.fill,
            payload: TT
          }
        })))
      }), []) : (mT || []).map((function(TT) {
        var UT = TT.item,
          mT = UT.type.defaultProps,
          WT = void 0 !== mT ? HT(HT({}, mT), UT.props) : {},
          MT = WT.dataKey,
          gT = WT.name,
          nT = WT.legendType;
        return {
          inactive: WT.hide,
          dataKey: MT,
          type: LT.iconType || nT || "square",
          color: (0, zT.H)(UT),
          value: gT || MT,
          payload: WT
        }
      })), HT(HT(HT({}, LT), WT.c.getWithHeight(kT, gT)), {}, {
        payload: jT,
        item: kT
      })
    }
  },
  6073: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => nT
    });
    var WT = mT(6082),
      zT = mT.n(WT),
      MT = mT(5337),
      gT = mT.n(MT);

    function nT(TT, UT, mT) {
      return !0 === UT ? zT()(TT, mT) : gT()(UT) ? zT()(TT, UT) : TT
    }
  },
  5517: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => jT,
      c: () => kT,
      e: () => nT,
      i: () => lT,
      m: () => LT
    });
    var WT = mT(63),
      zT = mT(5196),
      MT = mT.n(zT);

    function gT(TT) {
      return gT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, gT(TT)
    }
    var nT = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "np", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      HT = ["points", "pathLength"],
      kT = {
        svg: ["viewBox", "children"],
        polygon: HT,
        polyline: HT
      },
      jT = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      lT = function(TT, UT) {
        if (!TT || "function" === typeof TT || "boolean" === typeof TT) return null;
        var mT = TT;
        if ((0, WT.isValidElement)(TT) && (mT = TT.props), !MT()(mT)) return null;
        var zT = {};
        return Object.keys(mT).forEach((function(TT) {
          jT.includes(TT) && (zT[TT] = UT || function(UT) {
            return mT[TT](mT, UT)
          })
        })), zT
      },
      LT = function(TT, UT, mT) {
        if (!MT()(TT) || "object" !== gT(TT)) return null;
        var WT = null;
        return Object.keys(TT).forEach((function(zT) {
          var MT = TT[zT];
          jT.includes(zT) && "function" === typeof MT && (WT || (WT = {}), WT[zT] = function(TT, UT, mT) {
            return function(WT) {
              return TT(UT, mT, WT), null
            }
          }(MT, UT, mT))
        })), WT
      }
  },
  5506: (TT, UT) => {
    var mT, WT = Symbol.for("react.element"),
      zT = Symbol.for("react.portal"),
      MT = Symbol.for("react.fragment"),
      gT = Symbol.for("react.strict_mode"),
      nT = Symbol.for("react.profiler"),
      HT = Symbol.for("react.provider"),
      kT = Symbol.for("react.context"),
      jT = Symbol.for("react.server_context"),
      lT = Symbol.for("react.forward_ref"),
      LT = Symbol.for("react.suspense"),
      pT = Symbol.for("react.suspense_list"),
      BT = Symbol.for("react.memo"),
      ZT = Symbol.for("react.lazy"),
      cT = Symbol.for("react.offscreen");

    function vT(TT) {
      if ("object" === typeof TT && null !== TT) {
        var UT = TT.$$typeof;
        switch (UT) {
          case WT:
            switch (TT = TT.type) {
              case MT:
              case nT:
              case gT:
              case LT:
              case pT:
                return TT;
              default:
                switch (TT = TT && TT.$$typeof) {
                  case jT:
                  case kT:
                  case lT:
                  case ZT:
                  case BT:
                  case HT:
                    return TT;
                  default:
                    return UT
                }
            }
          case zT:
            return UT
        }
      }
    }
    mT = Symbol.for("react.module.reference"), UT.isFragment = function(TT) {
      return vT(TT) === MT
    }
  },
  5502: (TT, UT, mT) => {
    TT.exports = mT(5506)
  },
  5177: (TT, UT, mT) => {
    function WT(TT) {
      var UT, mT, zT = "";
      if ("string" == typeof TT || "number" == typeof TT) zT += TT;
      else if ("object" == typeof TT)
        if (Array.isArray(TT)) {
          var MT = TT.length;
          for (UT = 0; UT < MT; UT++) TT[UT] && (mT = WT(TT[UT])) && (zT && (zT += " "), zT += mT)
        } else
          for (mT in TT) TT[mT] && (zT && (zT += " "), zT += mT);
      return zT
    }
    mT.d(UT, {
      c: () => zT
    });
    const zT = function() {
      for (var TT, UT, mT = 0, zT = "", MT = arguments.length; mT < MT; mT++)(TT = arguments[mT]) && (UT = WT(TT)) && (zT && (zT += " "), zT += UT);
      return zT
    }
  },
  6226: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => MT,
      f: () => nT
    });
    var WT = mT(6231),
      zT = mT(6240);

    function MT() {
      var TT, UT, mT = (0, zT.d)().unknown(void 0),
        gT = mT.domain,
        nT = mT.range,
        HT = 0,
        kT = 1,
        jT = !1,
        lT = 0,
        LT = 0,
        pT = .5;

      function BT() {
        var mT = gT().length,
          WT = kT < HT,
          zT = WT ? kT : HT,
          MT = WT ? HT : kT;
        TT = (MT - zT) / Math.max(1, mT - lT + 2 * LT), jT && (TT = Math.floor(TT)), zT += (MT - zT - TT * (mT - lT)) * pT, UT = TT * (1 - lT), jT && (zT = Math.round(zT), UT = Math.round(UT));
        var BT = function(TT, UT, mT) {
          TT = +TT, UT = +UT, mT = (zT = arguments.length) < 2 ? (UT = TT, TT = 0, 1) : zT < 3 ? 1 : +mT;
          for (var WT = -1, zT = 0 | Math.max(0, Math.ceil((UT - TT) / mT)), MT = new Array(zT); ++WT < zT;) MT[WT] = TT + WT * mT;
          return MT
        }(mT).map((function(UT) {
          return zT + TT * UT
        }));
        return nT(WT ? BT.reverse() : BT)
      }
      return delete mT.unknown, mT.domain = function(TT) {
        return arguments.length ? (gT(TT), BT()) : gT()
      }, mT.range = function(TT) {
        return arguments.length ? ([HT, kT] = TT, HT = +HT, kT = +kT, BT()) : [HT, kT]
      }, mT.rangeRound = function(TT) {
        return [HT, kT] = TT, HT = +HT, kT = +kT, jT = !0, BT()
      }, mT.bandwidth = function() {
        return UT
      }, mT.step = function() {
        return TT
      }, mT.round = function(TT) {
        return arguments.length ? (jT = !!TT, BT()) : jT
      }, mT.padding = function(TT) {
        return arguments.length ? (lT = Math.min(1, LT = +TT), BT()) : lT
      }, mT.paddingInner = function(TT) {
        return arguments.length ? (lT = Math.min(1, TT), BT()) : lT
      }, mT.paddingOuter = function(TT) {
        return arguments.length ? (LT = +TT, BT()) : LT
      }, mT.align = function(TT) {
        return arguments.length ? (pT = Math.max(0, Math.min(1, TT)), BT()) : pT
      }, mT.copy = function() {
        return MT(gT(), [HT, kT]).round(jT).paddingInner(lT).paddingOuter(LT).align(pT)
      }, WT.g.apply(BT(), arguments)
    }

    function gT(TT) {
      var UT = TT.copy;
      return TT.padding = TT.paddingOuter, delete TT.paddingInner, delete TT.paddingOuter, TT.copy = function() {
        return gT(UT())
      }, TT
    }

    function nT() {
      return gT(MT.apply(null, arguments).paddingInner(1))
    }
  },
  6231: (TT, UT, mT) => {
    function WT(TT, UT) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(TT);
          break;
        default:
          this.range(UT).domain(TT)
      }
      return this
    }

    function zT(TT, UT) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof TT ? this.interpolator(TT) : this.range(TT);
          break;
        default:
          this.domain(TT), "function" === typeof UT ? this.interpolator(UT) : this.range(UT)
      }
      return this
    }
    mT.d(UT, {
      e: () => zT,
      g: () => WT
    })
  },
  6240: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => jT,
      f: () => kT
    });
    class WT extends Map {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nT;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: UT
            }
          }), null != TT)
          for (const [mT, WT] of TT) this.set(mT, WT)
      }
      get(TT) {
        return super.get(zT(this, TT))
      }
      has(TT) {
        return super.has(zT(this, TT))
      }
      set(TT, UT) {
        return super.set(MT(this, TT), UT)
      }
      delete(TT) {
        return super.delete(gT(this, TT))
      }
    }
    Set;

    function zT(TT, UT) {
      let {
        _intern: mT,
        _key: WT
      } = TT;
      const zT = WT(UT);
      return mT.has(zT) ? mT.get(zT) : UT
    }

    function MT(TT, UT) {
      let {
        _intern: mT,
        _key: WT
      } = TT;
      const zT = WT(UT);
      return mT.has(zT) ? mT.get(zT) : (mT.set(zT, UT), UT)
    }

    function gT(TT, UT) {
      let {
        _intern: mT,
        _key: WT
      } = TT;
      const zT = WT(UT);
      return mT.has(zT) && (UT = mT.get(zT), mT.delete(zT)), UT
    }

    function nT(TT) {
      return null !== TT && "object" === typeof TT ? TT.valueOf() : TT
    }
    var HT = mT(6231);
    const kT = Symbol("implicit");

    function jT() {
      var TT = new WT,
        UT = [],
        mT = [],
        zT = kT;

      function MT(WT) {
        let MT = TT.get(WT);
        if (void 0 === MT) {
          if (zT !== kT) return zT;
          TT.set(WT, MT = UT.push(WT) - 1)
        }
        return mT[MT % mT.length]
      }
      return MT.domain = function(mT) {
        if (!arguments.length) return UT.slice();
        UT = [], TT = new WT;
        for (const WT of mT) TT.has(WT) || TT.set(WT, UT.push(WT) - 1);
        return MT
      }, MT.range = function(TT) {
        return arguments.length ? (mT = Array.from(TT), MT) : mT.slice()
      }, MT.unknown = function(TT) {
        return arguments.length ? (zT = TT, MT) : zT
      }, MT.copy = function() {
        return jT(UT, mT).unknown(zT)
      }, HT.g.apply(MT, arguments), MT
    }
  },
  6314: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    Array.prototype.slice;

    function WT(TT) {
      return "object" === typeof TT && "length" in TT ? TT : Array.from(TT)
    }
  },
  6186: (TT, UT, mT) => {
    function WT(TT) {
      return function() {
        return TT
      }
    }
    mT.d(UT, {
      b: () => WT
    })
  },
  6188: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => kT
    });
    const WT = Math.PI,
      zT = 2 * WT,
      MT = 1e-6,
      gT = zT - MT;

    function nT(TT) {
      this._ += TT[0];
      for (let UT = 1, mT = TT.length; UT < mT; ++UT) this._ += arguments[UT] + TT[UT]
    }
    class HT {
      constructor(TT) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == TT ? nT : function(TT) {
          let UT = Math.floor(TT);
          if (!(UT >= 0)) throw new Error(`invalid digits: ${TT}`);
          if (UT > 15) return nT;
          const mT = 10 ** UT;
          return function(TT) {
            this._ += TT[0];
            for (let UT = 1, WT = TT.length; UT < WT; ++UT) this._ += Math.round(arguments[UT] * mT) / mT + TT[UT]
          }
        }(TT)
      }
      moveTo(TT, UT) {
        this._append`M${this._x0=this._x1=+TT},${this._y0=this._y1=+UT}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(TT, UT) {
        this._append`L${this._x1=+TT},${this._y1=+UT}`
      }
      quadraticCurveTo(TT, UT, mT, WT) {
        this._append`Q${+TT},${+UT},${this._x1=+mT},${this._y1=+WT}`
      }
      bezierCurveTo(TT, UT, mT, WT, zT, MT) {
        this._append`C${+TT},${+UT},${+mT},${+WT},${this._x1=+zT},${this._y1=+MT}`
      }
      arcTo(TT, UT, mT, zT, gT) {
        if (TT = +TT, UT = +UT, mT = +mT, zT = +zT, (gT = +gT) < 0) throw new Error(`negative radius: ${gT}`);
        let nT = this._x1,
          HT = this._y1,
          kT = mT - TT,
          jT = zT - UT,
          lT = nT - TT,
          LT = HT - UT,
          pT = lT * lT + LT * LT;
        if (null === this._x1) this._append`M${this._x1=TT},${this._y1=UT}`;
        else if (pT > MT)
          if (Math.abs(LT * kT - jT * lT) > MT && gT) {
            let BT = mT - nT,
              ZT = zT - HT,
              cT = kT * kT + jT * jT,
              vT = BT * BT + ZT * ZT,
              fT = Math.sqrt(cT),
              qT = Math.sqrt(pT),
              iT = gT * Math.tan((WT - Math.acos((cT + pT - vT) / (2 * fT * qT))) / 2),
              bT = iT / qT,
              OT = iT / fT;
            Math.abs(bT - 1) > MT && this._append`L${TT+bT*lT},${UT+bT*LT}`, this._append`A${gT},${gT},0,0,${+(LT*BT>lT*ZT)},${this._x1=TT+OT*kT},${this._y1=UT+OT*jT}`
          } else this._append`L${this._x1=TT},${this._y1=UT}`;
        else;
      }
      arc(TT, UT, mT, nT, HT, kT) {
        if (TT = +TT, UT = +UT, kT = !!kT, (mT = +mT) < 0) throw new Error(`negative radius: ${mT}`);
        let jT = mT * Math.cos(nT),
          lT = mT * Math.sin(nT),
          LT = TT + jT,
          pT = UT + lT,
          BT = 1 ^ kT,
          ZT = kT ? nT - HT : HT - nT;
        null === this._x1 ? this._append`M${LT},${pT}` : (Math.abs(this._x1 - LT) > MT || Math.abs(this._y1 - pT) > MT) && this._append`L${LT},${pT}`, mT && (ZT < 0 && (ZT = ZT % zT + zT), ZT > gT ? this._append`A${mT},${mT},0,1,${BT},${TT-jT},${UT-lT}A${mT},${mT},0,1,${BT},${this._x1=LT},${this._y1=pT}` : ZT > MT && this._append`A${mT},${mT},0,${+(ZT>=WT)},${BT},${this._x1=TT+mT*Math.cos(HT)},${this._y1=UT+mT*Math.sin(HT)}`)
      }
      rect(TT, UT, mT, WT) {
        this._append`M${this._x0=this._x1=+TT},${this._y0=this._y1=+UT}h${mT=+mT}v${+WT}h${-mT}Z`
      }
      toString() {
        return this._
      }
    }

    function kT(TT) {
      let UT = 3;
      return TT.digits = function(mT) {
        if (!arguments.length) return UT;
        if (null == mT) UT = null;
        else {
          const TT = Math.floor(mT);
          if (!(TT >= 0)) throw new RangeError(`invalid digits: ${mT}`);
          UT = TT
        }
        return TT
      }, () => new HT(UT)
    }
    HT.prototype
  },
  6042: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT
    });
    var WT = !0,
      zT = "Invariant failed";

    function MT(TT, UT) {
      if (!TT) {
        if (WT) throw new Error(zT);
        var mT = "function" === typeof UT ? UT() : UT,
          MT = mT ? "".concat(zT, ": ").concat(mT) : zT;
        throw new Error(MT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);