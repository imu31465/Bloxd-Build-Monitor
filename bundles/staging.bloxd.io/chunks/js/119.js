/*! For license information please see 7zvlu.119.b0cd09f6.chunk.js.LICENSE.txt */
export const id = 119;
export const ids = [119];
export const modules = {
  6180: function(BB, jB, zB) {
    var QB;
    ! function() {
      var nB, dB = 1e9,
        IB = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        NB = !0,
        uB = "[DecimalError] ",
        UB = uB + "Invalid argument: ",
        aB = uB + "Exponent out of range: ",
        pB = Math.floor,
        rB = Math.pow,
        sB = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        JB = 1e7,
        mB = 9007199254740991,
        yB = pB(1286742750677284.5),
        kB = {};

      function GB(BB, jB) {
        var zB, QB, nB, dB, IB, uB, UB, aB, pB = BB.constructor,
          rB = pB.precision;
        if (!BB.s || !jB.s) return jB.s || (jB = new pB(BB)), NB ? oB(jB, rB) : jB;
        if (UB = BB.d, aB = jB.d, IB = BB.e, nB = jB.e, UB = UB.slice(), dB = IB - nB) {
          for (dB < 0 ? (QB = UB, dB = -dB, uB = aB.length) : (QB = aB, nB = IB, uB = UB.length), dB > (uB = (IB = Math.ceil(rB / 7)) > uB ? IB + 1 : uB + 1) && (dB = uB, QB.length = 1), QB.reverse(); dB--;) QB.push(0);
          QB.reverse()
        }
        for ((uB = UB.length) - (dB = aB.length) < 0 && (dB = uB, QB = aB, aB = UB, UB = QB), zB = 0; dB;) zB = (UB[--dB] = UB[dB] + aB[dB] + zB) / JB | 0, UB[dB] %= JB;
        for (zB && (UB.unshift(zB), ++nB), uB = UB.length; 0 == UB[--uB];) UB.pop();
        return jB.d = UB, jB.e = nB, NB ? oB(jB, rB) : jB
      }

      function LB(BB, jB, zB) {
        if (BB !== ~~BB || BB < jB || BB > zB) throw Error(UB + BB)
      }

      function gB(BB) {
        var jB, zB, QB, nB = BB.length - 1,
          dB = "",
          IB = BB[0];
        if (nB > 0) {
          for (dB += IB, jB = 1; jB < nB; jB++)(zB = 7 - (QB = BB[jB] + "").length) && (dB += iB(zB)), dB += QB;
          (zB = 7 - (QB = (IB = BB[jB]) + "").length) && (dB += iB(zB))
        } else if (0 === IB) return "0";
        for (; IB % 10 === 0;) IB /= 10;
        return dB + IB
      }
      kB.absoluteValue = kB.abs = function() {
        var BB = new this.constructor(this);
        return BB.s && (BB.s = 1), BB
      }, kB.comparedTo = kB.cmp = function(BB) {
        var jB, zB, QB, nB, dB = this;
        if (BB = new dB.constructor(BB), dB.s !== BB.s) return dB.s || -BB.s;
        if (dB.e !== BB.e) return dB.e > BB.e ^ dB.s < 0 ? 1 : -1;
        for (jB = 0, zB = (QB = dB.d.length) < (nB = BB.d.length) ? QB : nB; jB < zB; ++jB)
          if (dB.d[jB] !== BB.d[jB]) return dB.d[jB] > BB.d[jB] ^ dB.s < 0 ? 1 : -1;
        return QB === nB ? 0 : QB > nB ^ dB.s < 0 ? 1 : -1
      }, kB.decimalPlaces = kB.dp = function() {
        var BB = this,
          jB = BB.d.length - 1,
          zB = 7 * (jB - BB.e);
        if (jB = BB.d[jB])
          for (; jB % 10 == 0; jB /= 10) zB--;
        return zB < 0 ? 0 : zB
      }, kB.dividedBy = kB.div = function(BB) {
        return tB(this, new this.constructor(BB))
      }, kB.dividedToIntegerBy = kB.idiv = function(BB) {
        var jB = this.constructor;
        return oB(tB(this, new jB(BB), 0, 1), jB.precision)
      }, kB.equals = kB.eq = function(BB) {
        return !this.cmp(BB)
      }, kB.exponent = function() {
        return MB(this)
      }, kB.greaterThan = kB.gt = function(BB) {
        return this.cmp(BB) > 0
      }, kB.greaterThanOrEqualTo = kB.gte = function(BB) {
        return this.cmp(BB) >= 0
      }, kB.isInteger = kB.isint = function() {
        return this.e > this.d.length - 2
      }, kB.isNegative = kB.isneg = function() {
        return this.s < 0
      }, kB.isPositive = kB.ispos = function() {
        return this.s > 0
      }, kB.isZero = function() {
        return 0 === this.s
      }, kB.lessThan = kB.lt = function(BB) {
        return this.cmp(BB) < 0
      }, kB.lessThanOrEqualTo = kB.lte = function(BB) {
        return this.cmp(BB) < 1
      }, kB.logarithm = kB.log = function(BB) {
        var jB, zB = this,
          QB = zB.constructor,
          dB = QB.precision,
          IB = dB + 5;
        if (void 0 === BB) BB = new QB(10);
        else if ((BB = new QB(BB)).s < 1 || BB.eq(nB)) throw Error(uB + "NaN");
        if (zB.s < 1) throw Error(uB + (zB.s ? "NaN" : "-Infinity"));
        return zB.eq(nB) ? new QB(0) : (NB = !1, jB = tB(qB(zB, IB), qB(BB, IB), IB), NB = !0, oB(jB, dB))
      }, kB.minus = kB.sub = function(BB) {
        var jB = this;
        return BB = new jB.constructor(BB), jB.s == BB.s ? HB(jB, BB) : GB(jB, (BB.s = -BB.s, BB))
      }, kB.modulo = kB.mod = function(BB) {
        var jB, zB = this,
          QB = zB.constructor,
          nB = QB.precision;
        if (!(BB = new QB(BB)).s) throw Error(uB + "NaN");
        return zB.s ? (NB = !1, jB = tB(zB, BB, 0, 1).times(BB), NB = !0, zB.minus(jB)) : oB(new QB(zB), nB)
      }, kB.naturalExponential = kB.exp = function() {
        return SB(this)
      }, kB.naturalLogarithm = kB.ln = function() {
        return qB(this)
      }, kB.negated = kB.neg = function() {
        var BB = new this.constructor(this);
        return BB.s = -BB.s || 0, BB
      }, kB.plus = kB.add = function(BB) {
        var jB = this;
        return BB = new jB.constructor(BB), jB.s == BB.s ? GB(jB, BB) : HB(jB, (BB.s = -BB.s, BB))
      }, kB.precision = kB.sd = function(BB) {
        var jB, zB, QB, nB = this;
        if (void 0 !== BB && BB !== !!BB && 1 !== BB && 0 !== BB) throw Error(UB + BB);
        if (jB = MB(nB) + 1, zB = 7 * (QB = nB.d.length - 1) + 1, QB = nB.d[QB]) {
          for (; QB % 10 == 0; QB /= 10) zB--;
          for (QB = nB.d[0]; QB >= 10; QB /= 10) zB++
        }
        return BB && jB > zB ? jB : zB
      }, kB.squareRoot = kB.sqrt = function() {
        var BB, jB, zB, QB, nB, dB, IB, UB = this,
          aB = UB.constructor;
        if (UB.s < 1) {
          if (!UB.s) return new aB(0);
          throw Error(uB + "NaN")
        }
        for (BB = MB(UB), NB = !1, 0 == (nB = Math.sqrt(+UB)) || nB == 1 / 0 ? (((jB = gB(UB.d)).length + BB) % 2 == 0 && (jB += "0"), nB = Math.sqrt(jB), BB = pB((BB + 1) / 2) - (BB < 0 || BB % 2), QB = new aB(jB = nB == 1 / 0 ? "1e" + BB : (jB = nB.toExponential()).slice(0, jB.indexOf("e") + 1) + BB)) : QB = new aB(nB.toString()), nB = IB = (zB = aB.precision) + 3;;)
          if (QB = (dB = QB).plus(tB(UB, dB, IB + 2)).times(.5), gB(dB.d).slice(0, IB) === (jB = gB(QB.d)).slice(0, IB)) {
            if (jB = jB.slice(IB - 3, IB + 1), nB == IB && "4999" == jB) {
              if (oB(dB, zB + 1, 0), dB.times(dB).eq(UB)) {
                QB = dB;
                break
              }
            } else if ("9999" != jB) break;
            IB += 4
          } return NB = !0, oB(QB, zB)
      }, kB.times = kB.mul = function(BB) {
        var jB, zB, QB, nB, dB, IB, uB, UB, aB, pB = this,
          rB = pB.constructor,
          sB = pB.d,
          mB = (BB = new rB(BB)).d;
        if (!pB.s || !BB.s) return new rB(0);
        for (BB.s *= pB.s, zB = pB.e + BB.e, (UB = sB.length) < (aB = mB.length) && (dB = sB, sB = mB, mB = dB, IB = UB, UB = aB, aB = IB), dB = [], QB = IB = UB + aB; QB--;) dB.push(0);
        for (QB = aB; --QB >= 0;) {
          for (jB = 0, nB = UB + QB; nB > QB;) uB = dB[nB] + mB[QB] * sB[nB - QB - 1] + jB, dB[nB--] = uB % JB | 0, jB = uB / JB | 0;
          dB[nB] = (dB[nB] + jB) % JB | 0
        }
        for (; !dB[--IB];) dB.pop();
        return jB ? ++zB : dB.shift(), BB.d = dB, BB.e = zB, NB ? oB(BB, rB.precision) : BB
      }, kB.toDecimalPlaces = kB.todp = function(BB, jB) {
        var zB = this,
          QB = zB.constructor;
        return zB = new QB(zB), void 0 === BB ? zB : (LB(BB, 0, dB), void 0 === jB ? jB = QB.rounding : LB(jB, 0, 8), oB(zB, BB + MB(zB) + 1, jB))
      }, kB.toExponential = function(BB, jB) {
        var zB, QB = this,
          nB = QB.constructor;
        return void 0 === BB ? zB = DB(QB, !0) : (LB(BB, 0, dB), void 0 === jB ? jB = nB.rounding : LB(jB, 0, 8), zB = DB(QB = oB(new nB(QB), BB + 1, jB), !0, BB + 1)), zB
      }, kB.toFixed = function(BB, jB) {
        var zB, QB, nB = this,
          IB = nB.constructor;
        return void 0 === BB ? DB(nB) : (LB(BB, 0, dB), void 0 === jB ? jB = IB.rounding : LB(jB, 0, 8), zB = DB((QB = oB(new IB(nB), BB + MB(nB) + 1, jB)).abs(), !1, BB + MB(QB) + 1), nB.isneg() && !nB.isZero() ? "-" + zB : zB)
      }, kB.toInteger = kB.toint = function() {
        var BB = this,
          jB = BB.constructor;
        return oB(new jB(BB), MB(BB) + 1, jB.rounding)
      }, kB.toNumber = function() {
        return +this
      }, kB.toPower = kB.pow = function(BB) {
        var jB, zB, QB, dB, IB, UB, aB = this,
          rB = aB.constructor,
          sB = +(BB = new rB(BB));
        if (!BB.s) return new rB(nB);
        if (!(aB = new rB(aB)).s) {
          if (BB.s < 1) throw Error(uB + "Infinity");
          return aB
        }
        if (aB.eq(nB)) return aB;
        if (QB = rB.precision, BB.eq(nB)) return oB(aB, QB);
        if (UB = (jB = BB.e) >= (zB = BB.d.length - 1), IB = aB.s, UB) {
          if ((zB = sB < 0 ? -sB : sB) <= mB) {
            for (dB = new rB(nB), jB = Math.ceil(QB / 7 + 4), NB = !1; zB % 2 && FB((dB = dB.times(aB)).d, jB), 0 !== (zB = pB(zB / 2));) FB((aB = aB.times(aB)).d, jB);
            return NB = !0, BB.s < 0 ? new rB(nB).div(dB) : oB(dB, QB)
          }
        } else if (IB < 0) throw Error(uB + "NaN");
        return IB = IB < 0 && 1 & BB.d[Math.max(jB, zB)] ? -1 : 1, aB.s = 1, NB = !1, dB = BB.times(qB(aB, QB + 12)), NB = !0, (dB = SB(dB)).s = IB, dB
      }, kB.toPrecision = function(BB, jB) {
        var zB, QB, nB = this,
          IB = nB.constructor;
        return void 0 === BB ? QB = DB(nB, (zB = MB(nB)) <= IB.toExpNeg || zB >= IB.toExpPos) : (LB(BB, 1, dB), void 0 === jB ? jB = IB.rounding : LB(jB, 0, 8), QB = DB(nB = oB(new IB(nB), BB, jB), BB <= (zB = MB(nB)) || zB <= IB.toExpNeg, BB)), QB
      }, kB.toSignificantDigits = kB.tosd = function(BB, jB) {
        var zB = this.constructor;
        return void 0 === BB ? (BB = zB.precision, jB = zB.rounding) : (LB(BB, 1, dB), void 0 === jB ? jB = zB.rounding : LB(jB, 0, 8)), oB(new zB(this), BB, jB)
      }, kB.toString = kB.valueOf = kB.val = kB.toJSON = function() {
        var BB = this,
          jB = MB(BB),
          zB = BB.constructor;
        return DB(BB, jB <= zB.toExpNeg || jB >= zB.toExpPos)
      };
      var tB = function() {
        function BB(BB, jB) {
          var zB, QB = 0,
            nB = BB.length;
          for (BB = BB.slice(); nB--;) zB = BB[nB] * jB + QB, BB[nB] = zB % JB | 0, QB = zB / JB | 0;
          return QB && BB.unshift(QB), BB
        }

        function jB(BB, jB, zB, QB) {
          var nB, dB;
          if (zB != QB) dB = zB > QB ? 1 : -1;
          else
            for (nB = dB = 0; nB < zB; nB++)
              if (BB[nB] != jB[nB]) {
                dB = BB[nB] > jB[nB] ? 1 : -1;
                break
              } return dB
        }

        function zB(BB, jB, zB) {
          for (var QB = 0; zB--;) BB[zB] -= QB, QB = BB[zB] < jB[zB] ? 1 : 0, BB[zB] = QB * JB + BB[zB] - jB[zB];
          for (; !BB[0] && BB.length > 1;) BB.shift()
        }
        return function(QB, nB, dB, IB) {
          var NB, UB, aB, pB, rB, sB, mB, yB, kB, GB, LB, gB, tB, SB, EB, iB, qB, fB, HB = QB.constructor,
            DB = QB.s == nB.s ? 1 : -1,
            FB = QB.d,
            YB = nB.d;
          if (!QB.s) return new HB(QB);
          if (!nB.s) throw Error(uB + "Division by zero");
          for (UB = QB.e - nB.e, qB = YB.length, EB = FB.length, yB = (mB = new HB(DB)).d = [], aB = 0; YB[aB] == (FB[aB] || 0);) ++aB;
          if (YB[aB] > (FB[aB] || 0) && --UB, (gB = null == dB ? dB = HB.precision : IB ? dB + (MB(QB) - MB(nB)) + 1 : dB) < 0) return new HB(0);
          if (gB = gB / 7 + 2 | 0, aB = 0, 1 == qB)
            for (pB = 0, YB = YB[0], gB++;
              (aB < EB || pB) && gB--; aB++) tB = pB * JB + (FB[aB] || 0), yB[aB] = tB / YB | 0, pB = tB % YB | 0;
          else {
            for ((pB = JB / (YB[0] + 1) | 0) > 1 && (YB = BB(YB, pB), FB = BB(FB, pB), qB = YB.length, EB = FB.length), SB = qB, GB = (kB = FB.slice(0, qB)).length; GB < qB;) kB[GB++] = 0;
            (fB = YB.slice()).unshift(0), iB = YB[0], YB[1] >= JB / 2 && ++iB;
            do {
              pB = 0, (NB = jB(YB, kB, qB, GB)) < 0 ? (LB = kB[0], qB != GB && (LB = LB * JB + (kB[1] || 0)), (pB = LB / iB | 0) > 1 ? (pB >= JB && (pB = JB - 1), 1 == (NB = jB(rB = BB(YB, pB), kB, sB = rB.length, GB = kB.length)) && (pB--, zB(rB, qB < sB ? fB : YB, sB))) : (0 == pB && (NB = pB = 1), rB = YB.slice()), (sB = rB.length) < GB && rB.unshift(0), zB(kB, rB, GB), -1 == NB && (NB = jB(YB, kB, qB, GB = kB.length)) < 1 && (pB++, zB(kB, qB < GB ? fB : YB, GB)), GB = kB.length) : 0 === NB && (pB++, kB = [0]), yB[aB++] = pB, NB && kB[0] ? kB[GB++] = FB[SB] || 0 : (kB = [FB[SB]], GB = 1)
            } while ((SB++ < EB || void 0 !== kB[0]) && gB--)
          }
          return yB[0] || yB.shift(), mB.e = UB, oB(mB, IB ? dB + MB(mB) + 1 : dB)
        }
      }();

      function SB(BB, jB) {
        var zB, QB, dB, IB, uB, UB = 0,
          pB = 0,
          sB = BB.constructor,
          JB = sB.precision;
        if (MB(BB) > 16) throw Error(aB + MB(BB));
        if (!BB.s) return new sB(nB);
        for (null == jB ? (NB = !1, uB = JB) : uB = jB, IB = new sB(.03125); BB.abs().gte(.1);) BB = BB.times(IB), pB += 5;
        for (uB += Math.log(rB(2, pB)) / Math.LN10 * 2 + 5 | 0, zB = QB = dB = new sB(nB), sB.precision = uB;;) {
          if (QB = oB(QB.times(BB), uB), zB = zB.times(++UB), gB((IB = dB.plus(tB(QB, zB, uB))).d).slice(0, uB) === gB(dB.d).slice(0, uB)) {
            for (; pB--;) dB = oB(dB.times(dB), uB);
            return sB.precision = JB, null == jB ? (NB = !0, oB(dB, JB)) : dB
          }
          dB = IB
        }
      }

      function MB(BB) {
        for (var jB = 7 * BB.e, zB = BB.d[0]; zB >= 10; zB /= 10) jB++;
        return jB
      }

      function EB(BB, jB, zB) {
        if (jB > BB.LN10.sd()) throw NB = !0, zB && (BB.precision = zB), Error(uB + "LN10 precision limit exceeded");
        return oB(new BB(BB.LN10), jB)
      }

      function iB(BB) {
        for (var jB = ""; BB--;) jB += "0";
        return jB
      }

      function qB(BB, jB) {
        var zB, QB, dB, IB, UB, aB, pB, rB, sB, JB = 1,
          mB = BB,
          yB = mB.d,
          kB = mB.constructor,
          GB = kB.precision;
        if (mB.s < 1) throw Error(uB + (mB.s ? "NaN" : "-Infinity"));
        if (mB.eq(nB)) return new kB(0);
        if (null == jB ? (NB = !1, rB = GB) : rB = jB, mB.eq(10)) return null == jB && (NB = !0), EB(kB, rB);
        if (rB += 10, kB.precision = rB, QB = (zB = gB(yB)).charAt(0), IB = MB(mB), !(Math.abs(IB) < 15e14)) return pB = EB(kB, rB + 2, GB).times(IB + ""), mB = qB(new kB(QB + "." + zB.slice(1)), rB - 10).plus(pB), kB.precision = GB, null == jB ? (NB = !0, oB(mB, GB)) : mB;
        for (; QB < 7 && 1 != QB || 1 == QB && zB.charAt(1) > 3;) QB = (zB = gB((mB = mB.times(BB)).d)).charAt(0), JB++;
        for (IB = MB(mB), QB > 1 ? (mB = new kB("0." + zB), IB++) : mB = new kB(QB + "." + zB.slice(1)), aB = UB = mB = tB(mB.minus(nB), mB.plus(nB), rB), sB = oB(mB.times(mB), rB), dB = 3;;) {
          if (UB = oB(UB.times(sB), rB), gB((pB = aB.plus(tB(UB, new kB(dB), rB))).d).slice(0, rB) === gB(aB.d).slice(0, rB)) return aB = aB.times(2), 0 !== IB && (aB = aB.plus(EB(kB, rB + 2, GB).times(IB + ""))), aB = tB(aB, new kB(JB), rB), kB.precision = GB, null == jB ? (NB = !0, oB(aB, GB)) : aB;
          aB = pB, dB += 2
        }
      }

      function fB(BB, jB) {
        var zB, QB, nB;
        for ((zB = jB.indexOf(".")) > -1 && (jB = jB.replace(".", "")), (QB = jB.search(/e/i)) > 0 ? (zB < 0 && (zB = QB), zB += +jB.slice(QB + 1), jB = jB.substring(0, QB)) : zB < 0 && (zB = jB.length), QB = 0; 48 === jB.charCodeAt(QB);) ++QB;
        for (nB = jB.length; 48 === jB.charCodeAt(nB - 1);) --nB;
        if (jB = jB.slice(QB, nB)) {
          if (nB -= QB, zB = zB - QB - 1, BB.e = pB(zB / 7), BB.d = [], QB = (zB + 1) % 7, zB < 0 && (QB += 7), QB < nB) {
            for (QB && BB.d.push(+jB.slice(0, QB)), nB -= 7; QB < nB;) BB.d.push(+jB.slice(QB, QB += 7));
            QB = 7 - (jB = jB.slice(QB)).length
          } else QB -= nB;
          for (; QB--;) jB += "0";
          if (BB.d.push(+jB), NB && (BB.e > yB || BB.e < -yB)) throw Error(aB + zB)
        } else BB.s = 0, BB.e = 0, BB.d = [0];
        return BB
      }

      function oB(BB, jB, zB) {
        var QB, nB, dB, IB, uB, UB, sB, mB, kB = BB.d;
        for (IB = 1, dB = kB[0]; dB >= 10; dB /= 10) IB++;
        if ((QB = jB - IB) < 0) QB += 7, nB = jB, sB = kB[mB = 0];
        else {
          if ((mB = Math.ceil((QB + 1) / 7)) >= (dB = kB.length)) return BB;
          for (sB = dB = kB[mB], IB = 1; dB >= 10; dB /= 10) IB++;
          nB = (QB %= 7) - 7 + IB
        }
        if (void 0 !== zB && (uB = sB / (dB = rB(10, IB - nB - 1)) % 10 | 0, UB = jB < 0 || void 0 !== kB[mB + 1] || sB % dB, UB = zB < 4 ? (uB || UB) && (0 == zB || zB == (BB.s < 0 ? 3 : 2)) : uB > 5 || 5 == uB && (4 == zB || UB || 6 == zB && (QB > 0 ? nB > 0 ? sB / rB(10, IB - nB) : 0 : kB[mB - 1]) % 10 & 1 || zB == (BB.s < 0 ? 8 : 7))), jB < 1 || !kB[0]) return UB ? (dB = MB(BB), kB.length = 1, jB = jB - dB - 1, kB[0] = rB(10, (7 - jB % 7) % 7), BB.e = pB(-jB / 7) || 0) : (kB.length = 1, kB[0] = BB.e = BB.s = 0), BB;
        if (0 == QB ? (kB.length = mB, dB = 1, mB--) : (kB.length = mB + 1, dB = rB(10, 7 - QB), kB[mB] = nB > 0 ? (sB / rB(10, IB - nB) % rB(10, nB) | 0) * dB : 0), UB)
          for (;;) {
            if (0 == mB) {
              (kB[0] += dB) == JB && (kB[0] = 1, ++BB.e);
              break
            }
            if (kB[mB] += dB, kB[mB] != JB) break;
            kB[mB--] = 0, dB = 1
          }
        for (QB = kB.length; 0 === kB[--QB];) kB.pop();
        if (NB && (BB.e > yB || BB.e < -yB)) throw Error(aB + MB(BB));
        return BB
      }

      function HB(BB, jB) {
        var zB, QB, nB, dB, IB, uB, UB, aB, pB, rB, sB = BB.constructor,
          mB = sB.precision;
        if (!BB.s || !jB.s) return jB.s ? jB.s = -jB.s : jB = new sB(BB), NB ? oB(jB, mB) : jB;
        if (UB = BB.d, rB = jB.d, QB = jB.e, aB = BB.e, UB = UB.slice(), IB = aB - QB) {
          for ((pB = IB < 0) ? (zB = UB, IB = -IB, uB = rB.length) : (zB = rB, QB = aB, uB = UB.length), IB > (nB = Math.max(Math.ceil(mB / 7), uB) + 2) && (IB = nB, zB.length = 1), zB.reverse(), nB = IB; nB--;) zB.push(0);
          zB.reverse()
        } else {
          for ((pB = (nB = UB.length) < (uB = rB.length)) && (uB = nB), nB = 0; nB < uB; nB++)
            if (UB[nB] != rB[nB]) {
              pB = UB[nB] < rB[nB];
              break
            } IB = 0
        }
        for (pB && (zB = UB, UB = rB, rB = zB, jB.s = -jB.s), uB = UB.length, nB = rB.length - uB; nB > 0; --nB) UB[uB++] = 0;
        for (nB = rB.length; nB > IB;) {
          if (UB[--nB] < rB[nB]) {
            for (dB = nB; dB && 0 === UB[--dB];) UB[dB] = JB - 1;
            --UB[dB], UB[nB] += JB
          }
          UB[nB] -= rB[nB]
        }
        for (; 0 === UB[--uB];) UB.pop();
        for (; 0 === UB[0]; UB.shift()) --QB;
        return UB[0] ? (jB.d = UB, jB.e = QB, NB ? oB(jB, mB) : jB) : new sB(0)
      }

      function DB(BB, jB, zB) {
        var QB, nB = MB(BB),
          dB = gB(BB.d),
          IB = dB.length;
        return jB ? (zB && (QB = zB - IB) > 0 ? dB = dB.charAt(0) + "." + dB.slice(1) + iB(QB) : IB > 1 && (dB = dB.charAt(0) + "." + dB.slice(1)), dB = dB + (nB < 0 ? "e" : "e+") + nB) : nB < 0 ? (dB = "0." + iB(-nB - 1) + dB, zB && (QB = zB - IB) > 0 && (dB += iB(QB))) : nB >= IB ? (dB += iB(nB + 1 - IB), zB && (QB = zB - nB - 1) > 0 && (dB = dB + "." + iB(QB))) : ((QB = nB + 1) < IB && (dB = dB.slice(0, QB) + "." + dB.slice(QB)), zB && (QB = zB - IB) > 0 && (nB + 1 === IB && (dB += "."), dB += iB(QB))), BB.s < 0 ? "-" + dB : dB
      }

      function FB(BB, jB) {
        if (BB.length > jB) return BB.length = jB, !0
      }

      function YB(BB) {
        if (!BB || "object" !== typeof BB) throw Error(uB + "Object expected");
        var jB, zB, QB, nB = ["precision", 1, dB, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (jB = 0; jB < nB.length; jB += 3)
          if (void 0 !== (QB = BB[zB = nB[jB]])) {
            if (!(pB(QB) === QB && QB >= nB[jB + 1] && QB <= nB[jB + 2])) throw Error(UB + zB + ": " + QB);
            this[zB] = QB
          } if (void 0 !== (QB = BB[zB = "LN10"])) {
          if (QB != Math.LN10) throw Error(UB + zB + ": " + QB);
          this[zB] = new this(QB)
        }
        return this
      }
      IB = function BB(jB) {
        var zB, QB, nB;

        function dB(BB) {
          var jB = this;
          if (!(jB instanceof dB)) return new dB(BB);
          if (jB.constructor = dB, BB instanceof dB) return jB.s = BB.s, jB.e = BB.e, void(jB.d = (BB = BB.d) ? BB.slice() : BB);
          if ("number" === typeof BB) {
            if (0 * BB !== 0) throw Error(UB + BB);
            if (BB > 0) jB.s = 1;
            else {
              if (!(BB < 0)) return jB.s = 0, jB.e = 0, void(jB.d = [0]);
              BB = -BB, jB.s = -1
            }
            return BB === ~~BB && BB < 1e7 ? (jB.e = 0, void(jB.d = [BB])) : fB(jB, BB.toString())
          }
          if ("string" !== typeof BB) throw Error(UB + BB);
          if (45 === BB.charCodeAt(0) ? (BB = BB.slice(1), jB.s = -1) : jB.s = 1, !sB.test(BB)) throw Error(UB + BB);
          fB(jB, BB)
        }
        if (dB.prototype = kB, dB.ROUND_UP = 0, dB.ROUND_DOWN = 1, dB.ROUND_CEIL = 2, dB.ROUND_FLOOR = 3, dB.ROUND_HALF_UP = 4, dB.ROUND_HALF_DOWN = 5, dB.ROUND_HALF_EVEN = 6, dB.ROUND_HALF_CEIL = 7, dB.ROUND_HALF_FLOOR = 8, dB.clone = BB, dB.config = dB.set = YB, void 0 === jB && (jB = {}), jB)
          for (nB = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], zB = 0; zB < nB.length;) jB.hasOwnProperty(QB = nB[zB++]) || (jB[QB] = this[QB]);
        return dB.config(jB), dB
      }(IB), IB.default = IB.Decimal = IB, nB = new IB(1), void 0 === (QB = function() {
        return IB
      }.call(jB, zB, jB, BB)) || (BB.exports = QB)
    }()
  },
  5785: (BB, jB, zB) => {
    var QB = zB(5308)(zB(5174), "DataView");
    BB.exports = QB
  },
  5291: (BB, jB, zB) => {
    var QB = zB(5296),
      nB = zB(5350),
      dB = zB(5352),
      IB = zB(5354),
      NB = zB(5360);

    function uB(BB) {
      var jB = -1,
        zB = null == BB ? 0 : BB.length;
      for (this.clear(); ++jB < zB;) {
        var QB = BB[jB];
        this.set(QB[0], QB[1])
      }
    }
    uB.prototype.clear = QB, uB.prototype.delete = nB, uB.prototype.get = dB, uB.prototype.has = IB, uB.prototype.set = NB, BB.exports = uB
  },
  5363: (BB, jB, zB) => {
    var QB = zB(5365),
      nB = zB(5374),
      dB = zB(5386),
      IB = zB(5393),
      NB = zB(5399);

    function uB(BB) {
      var jB = -1,
        zB = null == BB ? 0 : BB.length;
      for (this.clear(); ++jB < zB;) {
        var QB = BB[jB];
        this.set(QB[0], QB[1])
      }
    }
    uB.prototype.clear = QB, uB.prototype.delete = nB, uB.prototype.get = dB, uB.prototype.has = IB, uB.prototype.set = NB, BB.exports = uB
  },
  5404: (BB, jB, zB) => {
    var QB = zB(5308)(zB(5174), "Map");
    BB.exports = QB
  },
  5282: (BB, jB, zB) => {
    var QB = zB(5286),
      nB = zB(5408),
      dB = zB(5425),
      IB = zB(5427),
      NB = zB(5431);

    function uB(BB) {
      var jB = -1,
        zB = null == BB ? 0 : BB.length;
      for (this.clear(); ++jB < zB;) {
        var QB = BB[jB];
        this.set(QB[0], QB[1])
      }
    }
    uB.prototype.clear = QB, uB.prototype.delete = nB, uB.prototype.get = dB, uB.prototype.has = IB, uB.prototype.set = NB, BB.exports = uB
  },
  5793: (BB, jB, zB) => {
    var QB = zB(5308)(zB(5174), "Promise");
    BB.exports = QB
  },
  5795: (BB, jB, zB) => {
    var QB = zB(5308)(zB(5174), "Set");
    BB.exports = QB
  },
  5634: (BB, jB, zB) => {
    var QB = zB(5282),
      nB = zB(5640),
      dB = zB(5645);

    function IB(BB) {
      var jB = -1,
        zB = null == BB ? 0 : BB.length;
      for (this.__data__ = new QB; ++jB < zB;) this.add(BB[jB])
    }
    IB.prototype.add = IB.prototype.push = nB, IB.prototype.has = dB, BB.exports = IB
  },
  5587: (BB, jB, zB) => {
    var QB = zB(5363),
      nB = zB(5592),
      dB = zB(5599),
      IB = zB(5605),
      NB = zB(5614),
      uB = zB(5617);

    function UB(BB) {
      var jB = this.__data__ = new QB(BB);
      this.size = jB.size
    }
    UB.prototype.clear = nB, UB.prototype.delete = dB, UB.prototype.get = IB, UB.prototype.has = NB, UB.prototype.set = uB, BB.exports = UB
  },
  5211: (BB, jB, zB) => {
    var QB = zB(5174).Symbol;
    BB.exports = QB
  },
  5672: (BB, jB, zB) => {
    var QB = zB(5174).Uint8Array;
    BB.exports = QB
  },
  5800: (BB, jB, zB) => {
    var QB = zB(5308)(zB(5174), "WeakMap");
    BB.exports = QB
  },
  5930: BB => {
    BB.exports = function(BB, jB, zB) {
      switch (zB.length) {
        case 0:
          return BB.call(jB);
        case 1:
          return BB.call(jB, zB[0]);
        case 2:
          return BB.call(jB, zB[0], zB[1]);
        case 3:
          return BB.call(jB, zB[0], zB[1], zB[2])
      }
      return BB.apply(jB, zB)
    }
  },
  6243: BB => {
    BB.exports = function(BB, jB) {
      for (var zB = -1, QB = null == BB ? 0 : BB.length; ++zB < QB;)
        if (!jB(BB[zB], zB, BB)) return !1;
      return !0
    }
  },
  5703: BB => {
    BB.exports = function(BB, jB) {
      for (var zB = -1, QB = null == BB ? 0 : BB.length, nB = 0, dB = []; ++zB < QB;) {
        var IB = BB[zB];
        jB(IB, zB, BB) && (dB[nB++] = IB)
      }
      return dB
    }
  },
  6e3: (BB, jB, zB) => {
    var QB = zB(6005);
    BB.exports = function(BB, jB) {
      return !!(null == BB ? 0 : BB.length) && QB(BB, jB, 0) > -1
    }
  },
  6029: BB => {
    BB.exports = function(BB, jB, zB) {
      for (var QB = -1, nB = null == BB ? 0 : BB.length; ++QB < nB;)
        if (zB(jB, BB[QB])) return !0;
      return !1
    }
  },
  5723: (BB, jB, zB) => {
    var QB = zB(5726),
      nB = zB(5561),
      dB = zB(5239),
      IB = zB(5733),
      NB = zB(5530),
      uB = zB(5738),
      UB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB, jB) {
      var zB = dB(BB),
        aB = !zB && nB(BB),
        pB = !zB && !aB && IB(BB),
        rB = !zB && !aB && !pB && uB(BB),
        sB = zB || aB || pB || rB,
        JB = sB ? QB(BB.length, String) : [],
        mB = JB.length;
      for (var yB in BB) !jB && !UB.call(BB, yB) || sB && ("length" == yB || pB && ("offset" == yB || "parent" == yB) || rB && ("buffer" == yB || "byteLength" == yB || "byteOffset" == yB) || NB(yB, mB)) || JB.push(yB);
      return JB
    }
  },
  5446: BB => {
    BB.exports = function(BB, jB) {
      for (var zB = -1, QB = null == BB ? 0 : BB.length, nB = Array(QB); ++zB < QB;) nB[zB] = jB(BB[zB], zB, BB);
      return nB
    }
  },
  5549: BB => {
    BB.exports = function(BB, jB) {
      for (var zB = -1, QB = jB.length, nB = BB.length; ++zB < QB;) BB[nB + zB] = jB[zB];
      return BB
    }
  },
  5654: BB => {
    BB.exports = function(BB, jB) {
      for (var zB = -1, QB = null == BB ? 0 : BB.length; ++zB < QB;)
        if (jB(BB[zB], zB, BB)) return !0;
      return !1
    }
  },
  6081: BB => {
    BB.exports = function(BB) {
      return BB.split("")
    }
  },
  5378: (BB, jB, zB) => {
    var QB = zB(5383);
    BB.exports = function(BB, jB) {
      for (var zB = BB.length; zB--;)
        if (QB(BB[zB][0], jB)) return zB;
      return -1
    }
  },
  6232: (BB, jB, zB) => {
    var QB = zB(5954);
    BB.exports = function(BB, jB, zB) {
      "__proto__" == jB && QB ? QB(BB, jB, {
        configurable: !0,
        enumerable: !0,
        value: zB,
        writable: !0
      }) : BB[jB] = zB
    }
  },
  5878: (BB, jB, zB) => {
    var QB = zB(5881),
      nB = zB(5898)(QB);
    BB.exports = nB
  },
  6247: (BB, jB, zB) => {
    var QB = zB(5878);
    BB.exports = function(BB, jB) {
      var zB = !0;
      return QB(BB, (function(BB, QB, nB) {
        return zB = !!jB(BB, QB, nB)
      })), zB
    }
  },
  6151: (BB, jB, zB) => {
    var QB = zB(5200);
    BB.exports = function(BB, jB, zB) {
      for (var nB = -1, dB = BB.length; ++nB < dB;) {
        var IB = BB[nB],
          NB = jB(IB);
        if (null != NB && (void 0 === uB ? NB === NB && !QB(NB) : zB(NB, uB))) var uB = NB,
          UB = IB
      }
      return UB
    }
  },
  6013: BB => {
    BB.exports = function(BB, jB, zB, QB) {
      for (var nB = BB.length, dB = zB + (QB ? 1 : -1); QB ? dB-- : ++dB < nB;)
        if (jB(BB[dB], dB, BB)) return dB;
      return -1
    }
  },
  5546: (BB, jB, zB) => {
    var QB = zB(5549),
      nB = zB(5556);
    BB.exports = function BB(jB, zB, dB, IB, NB) {
      var uB = -1,
        UB = jB.length;
      for (dB || (dB = nB), NB || (NB = []); ++uB < UB;) {
        var aB = jB[uB];
        zB > 0 && dB(aB) ? zB > 1 ? BB(aB, zB - 1, dB, IB, NB) : QB(NB, aB) : IB || (NB[NB.length] = aB)
      }
      return NB
    }
  },
  5886: (BB, jB, zB) => {
    var QB = zB(5891)();
    BB.exports = QB
  },
  5881: (BB, jB, zB) => {
    var QB = zB(5886),
      nB = zB(5714);
    BB.exports = function(BB, jB) {
      return BB && QB(BB, jB, nB)
    }
  },
  5256: (BB, jB, zB) => {
    var QB = zB(5259),
      nB = zB(5451);
    BB.exports = function(BB, jB) {
      for (var zB = 0, dB = (jB = QB(jB, BB)).length; null != BB && zB < dB;) BB = BB[nB(jB[zB++])];
      return zB && zB == dB ? BB : void 0
    }
  },
  5693: (BB, jB, zB) => {
    var QB = zB(5549),
      nB = zB(5239);
    BB.exports = function(BB, jB, zB) {
      var dB = jB(BB);
      return nB(BB) ? dB : QB(dB, zB(BB))
    }
  },
  5204: (BB, jB, zB) => {
    var QB = zB(5211),
      nB = zB(5219),
      dB = zB(5224),
      IB = QB ? QB.toStringTag : void 0;
    BB.exports = function(BB) {
      return null == BB ? void 0 === BB ? "[object Undefined]" : "[object Null]" : IB && IB in Object(BB) ? nB(BB) : dB(BB)
    }
  },
  6156: BB => {
    BB.exports = function(BB, jB) {
      return BB > jB
    }
  },
  5838: BB => {
    BB.exports = function(BB, jB) {
      return null != BB && jB in Object(BB)
    }
  },
  6005: (BB, jB, zB) => {
    var QB = zB(6013),
      nB = zB(6015),
      dB = zB(6023);
    BB.exports = function(BB, jB, zB) {
      return jB === jB ? dB(BB, jB, zB) : QB(BB, nB, zB)
    }
  },
  5565: (BB, jB, zB) => {
    var QB = zB(5204),
      nB = zB(5227);
    BB.exports = function(BB) {
      return nB(BB) && "[object Arguments]" == QB(BB)
    }
  },
  5620: (BB, jB, zB) => {
    var QB = zB(5625),
      nB = zB(5227);
    BB.exports = function BB(jB, zB, dB, IB, NB) {
      return jB === zB || (null == jB || null == zB || !nB(jB) && !nB(zB) ? jB !== jB && zB !== zB : QB(jB, zB, dB, IB, BB, NB))
    }
  },
  5625: (BB, jB, zB) => {
    var QB = zB(5587),
      nB = zB(5628),
      dB = zB(5664),
      IB = zB(5682),
      NB = zB(5780),
      uB = zB(5239),
      UB = zB(5733),
      aB = zB(5738),
      pB = "[object Arguments]",
      rB = "[object Array]",
      sB = "[object Object]",
      JB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB, jB, zB, mB, yB, kB) {
      var GB = uB(BB),
        LB = uB(jB),
        gB = GB ? rB : NB(BB),
        tB = LB ? rB : NB(jB),
        SB = (gB = gB == pB ? sB : gB) == sB,
        MB = (tB = tB == pB ? sB : tB) == sB,
        EB = gB == tB;
      if (EB && UB(BB)) {
        if (!UB(jB)) return !1;
        GB = !0, SB = !1
      }
      if (EB && !SB) return kB || (kB = new QB), GB || aB(BB) ? nB(BB, jB, zB, mB, yB, kB) : dB(BB, jB, gB, zB, mB, yB, kB);
      if (!(1 & zB)) {
        var iB = SB && JB.call(BB, "__wrapped__"),
          qB = MB && JB.call(jB, "__wrapped__");
        if (iB || qB) {
          var fB = iB ? BB.value() : BB,
            oB = qB ? jB.value() : jB;
          return kB || (kB = new QB), yB(fB, oB, zB, mB, kB)
        }
      }
      return !!EB && (kB || (kB = new QB), IB(BB, jB, zB, mB, yB, kB))
    }
  },
  5585: (BB, jB, zB) => {
    var QB = zB(5587),
      nB = zB(5620);
    BB.exports = function(BB, jB, zB, dB) {
      var IB = zB.length,
        NB = IB,
        uB = !dB;
      if (null == BB) return !NB;
      for (BB = Object(BB); IB--;) {
        var UB = zB[IB];
        if (uB && UB[2] ? UB[1] !== BB[UB[0]] : !(UB[0] in BB)) return !1
      }
      for (; ++IB < NB;) {
        var aB = (UB = zB[IB])[0],
          pB = BB[aB],
          rB = UB[1];
        if (uB && UB[2]) {
          if (void 0 === pB && !(aB in BB)) return !1
        } else {
          var sB = new QB;
          if (dB) var JB = dB(pB, rB, aB, BB, jB, sB);
          if (!(void 0 === JB ? nB(rB, pB, 3, dB, sB) : JB)) return !1
        }
      }
      return !0
    }
  },
  6015: BB => {
    BB.exports = function(BB) {
      return BB !== BB
    }
  },
  5312: (BB, jB, zB) => {
    var QB = zB(5319),
      nB = zB(5327),
      dB = zB(5164),
      IB = zB(5338),
      NB = /^\[object .+?Constructor\]$/,
      uB = Function.prototype,
      UB = Object.prototype,
      aB = uB.toString,
      pB = UB.hasOwnProperty,
      rB = RegExp("^" + aB.call(pB).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    BB.exports = function(BB) {
      return !(!dB(BB) || nB(BB)) && (QB(BB) ? rB : NB).test(IB(BB))
    }
  },
  5744: (BB, jB, zB) => {
    var QB = zB(5204),
      nB = zB(5527),
      dB = zB(5227),
      IB = {};
    IB["[object Float32Array]"] = IB["[object Float64Array]"] = IB["[object Int8Array]"] = IB["[object Int16Array]"] = IB["[object Int32Array]"] = IB["[object Uint8Array]"] = IB["[object Uint8ClampedArray]"] = IB["[object Uint16Array]"] = IB["[object Uint32Array]"] = !0, IB["[object Arguments]"] = IB["[object Array]"] = IB["[object ArrayBuffer]"] = IB["[object Boolean]"] = IB["[object DataView]"] = IB["[object Date]"] = IB["[object Error]"] = IB["[object Function]"] = IB["[object Map]"] = IB["[object Number]"] = IB["[object Object]"] = IB["[object RegExp]"] = IB["[object Set]"] = IB["[object String]"] = IB["[object WeakMap]"] = !1, BB.exports = function(BB) {
      return dB(BB) && nB(BB.length) && !!IB[QB(BB)]
    }
  },
  5573: (BB, jB, zB) => {
    var QB = zB(5582),
      nB = zB(5824),
      dB = zB(5856),
      IB = zB(5239),
      NB = zB(5860);
    BB.exports = function(BB) {
      return "function" == typeof BB ? BB : null == BB ? dB : "object" == typeof BB ? IB(BB) ? nB(BB[0], BB[1]) : QB(BB) : NB(BB)
    }
  },
  5756: (BB, jB, zB) => {
    var QB = zB(5763),
      nB = zB(5766),
      dB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB) {
      if (!QB(BB)) return nB(BB);
      var jB = [];
      for (var zB in Object(BB)) dB.call(BB, zB) && "constructor" != zB && jB.push(zB);
      return jB
    }
  },
  6165: BB => {
    BB.exports = function(BB, jB) {
      return BB < jB
    }
  },
  5871: (BB, jB, zB) => {
    var QB = zB(5878),
      nB = zB(5522);
    BB.exports = function(BB, jB) {
      var zB = -1,
        dB = nB(BB) ? Array(BB.length) : [];
      return QB(BB, (function(BB, QB, nB) {
        dB[++zB] = jB(BB, QB, nB)
      })), dB
    }
  },
  5582: (BB, jB, zB) => {
    var QB = zB(5585),
      nB = zB(5807),
      dB = zB(5815);
    BB.exports = function(BB) {
      var jB = nB(BB);
      return 1 == jB.length && jB[0][2] ? dB(jB[0][0], jB[0][1]) : function(zB) {
        return zB === BB || QB(zB, BB, jB)
      }
    }
  },
  5824: (BB, jB, zB) => {
    var QB = zB(5620),
      nB = zB(5252),
      dB = zB(5832),
      IB = zB(5261),
      NB = zB(5812),
      uB = zB(5815),
      UB = zB(5451);
    BB.exports = function(BB, jB) {
      return IB(BB) && NB(jB) ? uB(UB(BB), jB) : function(zB) {
        var IB = nB(zB, BB);
        return void 0 === IB && IB === jB ? dB(zB, BB) : QB(jB, IB, 3)
      }
    }
  },
  5570: (BB, jB, zB) => {
    var QB = zB(5446),
      nB = zB(5256),
      dB = zB(5573),
      IB = zB(5871),
      NB = zB(5900),
      uB = zB(5750),
      UB = zB(5905),
      aB = zB(5856),
      pB = zB(5239);
    BB.exports = function(BB, jB, zB) {
      jB = jB.length ? QB(jB, (function(BB) {
        return pB(BB) ? function(jB) {
          return nB(jB, 1 === BB.length ? BB[0] : BB)
        } : BB
      })) : [aB];
      var rB = -1;
      jB = QB(jB, uB(dB));
      var sB = IB(BB, (function(BB, zB, nB) {
        return {
          criteria: QB(jB, (function(jB) {
            return jB(BB)
          })),
          index: ++rB,
          value: BB
        }
      }));
      return NB(sB, (function(BB, jB) {
        return UB(BB, jB, zB)
      }))
    }
  },
  5864: BB => {
    BB.exports = function(BB) {
      return function(jB) {
        return null == jB ? void 0 : jB[BB]
      }
    }
  },
  5867: (BB, jB, zB) => {
    var QB = zB(5256);
    BB.exports = function(BB) {
      return function(jB) {
        return QB(jB, BB)
      }
    }
  },
  5511: BB => {
    var jB = Math.ceil,
      zB = Math.max;
    BB.exports = function(BB, QB, nB, dB) {
      for (var IB = -1, NB = zB(jB((QB - BB) / (nB || 1)), 0), uB = Array(NB); NB--;) uB[dB ? NB : ++IB] = BB, BB += nB;
      return uB
    }
  },
  5919: (BB, jB, zB) => {
    var QB = zB(5856),
      nB = zB(5927),
      dB = zB(5938);
    BB.exports = function(BB, jB) {
      return dB(nB(BB, jB, QB), BB + "")
    }
  },
  5944: (BB, jB, zB) => {
    var QB = zB(5952),
      nB = zB(5954),
      dB = zB(5856),
      IB = nB ? function(BB, jB) {
        return nB(BB, "toString", {
          configurable: !0,
          enumerable: !1,
          value: QB(jB),
          writable: !0
        })
      } : dB;
    BB.exports = IB
  },
  6069: BB => {
    BB.exports = function(BB, jB, zB) {
      var QB = -1,
        nB = BB.length;
      jB < 0 && (jB = -jB > nB ? 0 : nB + jB), (zB = zB > nB ? nB : zB) < 0 && (zB += nB), nB = jB > zB ? 0 : zB - jB >>> 0, jB >>>= 0;
      for (var dB = Array(nB); ++QB < nB;) dB[QB] = BB[QB + jB];
      return dB
    }
  },
  6299: (BB, jB, zB) => {
    var QB = zB(5878);
    BB.exports = function(BB, jB) {
      var zB;
      return QB(BB, (function(BB, QB, nB) {
        return !(zB = jB(BB, QB, nB))
      })), !!zB
    }
  },
  5900: BB => {
    BB.exports = function(BB, jB) {
      var zB = BB.length;
      for (BB.sort(jB); zB--;) BB[zB] = BB[zB].value;
      return BB
    }
  },
  5726: BB => {
    BB.exports = function(BB, jB) {
      for (var zB = -1, QB = Array(BB); ++zB < BB;) QB[zB] = jB(zB);
      return QB
    }
  },
  5443: (BB, jB, zB) => {
    var QB = zB(5211),
      nB = zB(5446),
      dB = zB(5239),
      IB = zB(5200),
      NB = QB ? QB.prototype : void 0,
      uB = NB ? NB.toString : void 0;
    BB.exports = function BB(jB) {
      if ("string" == typeof jB) return jB;
      if (dB(jB)) return nB(jB, BB) + "";
      if (IB(jB)) return uB ? uB.call(jB) : "";
      var zB = jB + "";
      return "0" == zB && 1 / jB == -1 / 0 ? "-0" : zB
    }
  },
  5189: (BB, jB, zB) => {
    var QB = zB(5192),
      nB = /^\s+/;
    BB.exports = function(BB) {
      return BB ? BB.slice(0, QB(BB) + 1).replace(nB, "") : BB
    }
  },
  5750: BB => {
    BB.exports = function(BB) {
      return function(jB) {
        return BB(jB)
      }
    }
  },
  5997: (BB, jB, zB) => {
    var QB = zB(5634),
      nB = zB(6e3),
      dB = zB(6029),
      IB = zB(5658),
      NB = zB(6036),
      uB = zB(5678);
    BB.exports = function(BB, jB, zB) {
      var UB = -1,
        aB = nB,
        pB = BB.length,
        rB = !0,
        sB = [],
        JB = sB;
      if (zB) rB = !1, aB = dB;
      else if (pB >= 200) {
        var mB = jB ? null : NB(BB);
        if (mB) return uB(mB);
        rB = !1, aB = IB, JB = new QB
      } else JB = jB ? [] : sB;
      BB: for (; ++UB < pB;) {
        var yB = BB[UB],
          kB = jB ? jB(yB) : yB;
        if (yB = zB || 0 !== yB ? yB : 0, rB && kB === kB) {
          for (var GB = JB.length; GB--;)
            if (JB[GB] === kB) continue BB;
          jB && JB.push(kB), sB.push(yB)
        } else aB(JB, kB, zB) || (JB !== sB && JB.push(kB), sB.push(yB))
      }
      return sB
    }
  },
  5658: BB => {
    BB.exports = function(BB, jB) {
      return BB.has(jB)
    }
  },
  5259: (BB, jB, zB) => {
    var QB = zB(5239),
      nB = zB(5261),
      dB = zB(5270),
      IB = zB(5438);
    BB.exports = function(BB, jB) {
      return QB(BB) ? BB : nB(BB, jB) ? [BB] : dB(IB(BB))
    }
  },
  6065: (BB, jB, zB) => {
    var QB = zB(6069);
    BB.exports = function(BB, jB, zB) {
      var nB = BB.length;
      return zB = void 0 === zB ? nB : zB, !jB && zB >= nB ? BB : QB(BB, jB, zB)
    }
  },
  5912: (BB, jB, zB) => {
    var QB = zB(5200);
    BB.exports = function(BB, jB) {
      if (BB !== jB) {
        var zB = void 0 !== BB,
          nB = null === BB,
          dB = BB === BB,
          IB = QB(BB),
          NB = void 0 !== jB,
          uB = null === jB,
          UB = jB === jB,
          aB = QB(jB);
        if (!uB && !aB && !IB && BB > jB || IB && NB && UB && !uB && !aB || nB && NB && UB || !zB && UB || !dB) return 1;
        if (!nB && !IB && !aB && BB < jB || aB && zB && dB && !nB && !IB || uB && zB && dB || !NB && dB || !UB) return -1
      }
      return 0
    }
  },
  5905: (BB, jB, zB) => {
    var QB = zB(5912);
    BB.exports = function(BB, jB, zB) {
      for (var nB = -1, dB = BB.criteria, IB = jB.criteria, NB = dB.length, uB = zB.length; ++nB < NB;) {
        var UB = QB(dB[nB], IB[nB]);
        if (UB) return nB >= uB ? UB : UB * ("desc" == zB[nB] ? -1 : 1)
      }
      return BB.index - jB.index
    }
  },
  5329: (BB, jB, zB) => {
    var QB = zB(5174)["__core-js_shared__"];
    BB.exports = QB
  },
  5898: (BB, jB, zB) => {
    var QB = zB(5522);
    BB.exports = function(BB, jB) {
      return function(zB, nB) {
        if (null == zB) return zB;
        if (!QB(zB)) return BB(zB, nB);
        for (var dB = zB.length, IB = jB ? dB : -1, NB = Object(zB);
          (jB ? IB-- : ++IB < dB) && !1 !== nB(NB[IB], IB, NB););
        return zB
      }
    }
  },
  5891: BB => {
    BB.exports = function(BB) {
      return function(jB, zB, QB) {
        for (var nB = -1, dB = Object(jB), IB = QB(jB), NB = IB.length; NB--;) {
          var uB = IB[BB ? NB : ++nB];
          if (!1 === zB(dB[uB], uB, dB)) break
        }
        return jB
      }
    }
  },
  6061: (BB, jB, zB) => {
    var QB = zB(6065),
      nB = zB(6073),
      dB = zB(6078),
      IB = zB(5438);
    BB.exports = function(BB) {
      return function(jB) {
        jB = IB(jB);
        var zB = nB(jB) ? dB(jB) : void 0,
          NB = zB ? zB[0] : jB.charAt(0),
          uB = zB ? QB(zB, 1).join("") : jB.slice(1);
        return NB[BB]() + uB
      }
    }
  },
  6315: (BB, jB, zB) => {
    var QB = zB(5573),
      nB = zB(5522),
      dB = zB(5714);
    BB.exports = function(BB) {
      return function(jB, zB, IB) {
        var NB = Object(jB);
        if (!nB(jB)) {
          var uB = QB(zB, 3);
          jB = dB(jB), zB = function(BB) {
            return uB(NB[BB], BB, NB)
          }
        }
        var UB = BB(jB, zB, IB);
        return UB > -1 ? NB[uB ? jB[UB] : UB] : void 0
      }
    }
  },
  5508: (BB, jB, zB) => {
    var QB = zB(5511),
      nB = zB(5520),
      dB = zB(5532);
    BB.exports = function(BB) {
      return function(jB, zB, IB) {
        return IB && "number" != typeof IB && nB(jB, zB, IB) && (zB = IB = void 0), jB = dB(jB), void 0 === zB ? (zB = jB, jB = 0) : zB = dB(zB), IB = void 0 === IB ? jB < zB ? 1 : -1 : dB(IB), QB(jB, zB, IB, BB)
      }
    }
  },
  6036: (BB, jB, zB) => {
    var QB = zB(5795),
      nB = zB(6042),
      dB = zB(5678),
      IB = QB && 1 / dB(new QB([, -0]))[1] == 1 / 0 ? function(BB) {
        return new QB(BB)
      } : nB;
    BB.exports = IB
  },
  5954: (BB, jB, zB) => {
    var QB = zB(5308),
      nB = function() {
        try {
          var BB = QB(Object, "defineProperty");
          return BB({}, "", {}), BB
        } catch (jB) {}
      }();
    BB.exports = nB
  },
  5628: (BB, jB, zB) => {
    var QB = zB(5634),
      nB = zB(5654),
      dB = zB(5658);
    BB.exports = function(BB, jB, zB, IB, NB, uB) {
      var UB = 1 & zB,
        aB = BB.length,
        pB = jB.length;
      if (aB != pB && !(UB && pB > aB)) return !1;
      var rB = uB.get(BB),
        sB = uB.get(jB);
      if (rB && sB) return rB == jB && sB == BB;
      var JB = -1,
        mB = !0,
        yB = 2 & zB ? new QB : void 0;
      for (uB.set(BB, jB), uB.set(jB, BB); ++JB < aB;) {
        var kB = BB[JB],
          GB = jB[JB];
        if (IB) var LB = UB ? IB(GB, kB, JB, jB, BB, uB) : IB(kB, GB, JB, BB, jB, uB);
        if (void 0 !== LB) {
          if (LB) continue;
          mB = !1;
          break
        }
        if (yB) {
          if (!nB(jB, (function(BB, jB) {
              if (!dB(yB, jB) && (kB === BB || NB(kB, BB, zB, IB, uB))) return yB.push(jB)
            }))) {
            mB = !1;
            break
          }
        } else if (kB !== GB && !NB(kB, GB, zB, IB, uB)) {
          mB = !1;
          break
        }
      }
      return uB.delete(BB), uB.delete(jB), mB
    }
  },
  5664: (BB, jB, zB) => {
    var QB = zB(5211),
      nB = zB(5672),
      dB = zB(5383),
      IB = zB(5628),
      NB = zB(5674),
      uB = zB(5678),
      UB = QB ? QB.prototype : void 0,
      aB = UB ? UB.valueOf : void 0;
    BB.exports = function(BB, jB, zB, QB, UB, pB, rB) {
      switch (zB) {
        case "[object DataView]":
          if (BB.byteLength != jB.byteLength || BB.byteOffset != jB.byteOffset) return !1;
          BB = BB.buffer, jB = jB.buffer;
        case "[object ArrayBuffer]":
          return !(BB.byteLength != jB.byteLength || !pB(new nB(BB), new nB(jB)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return dB(+BB, +jB);
        case "[object Error]":
          return BB.name == jB.name && BB.message == jB.message;
        case "[object RegExp]":
        case "[object String]":
          return BB == jB + "";
        case "[object Map]":
          var sB = NB;
        case "[object Set]":
          var JB = 1 & QB;
          if (sB || (sB = uB), BB.size != jB.size && !JB) return !1;
          var mB = rB.get(BB);
          if (mB) return mB == jB;
          QB |= 2, rB.set(BB, jB);
          var yB = IB(sB(BB), sB(jB), QB, UB, pB, rB);
          return rB.delete(BB), yB;
        case "[object Symbol]":
          if (aB) return aB.call(BB) == aB.call(jB)
      }
      return !1
    }
  },
  5682: (BB, jB, zB) => {
    var QB = zB(5691),
      nB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB, jB, zB, dB, IB, NB) {
      var uB = 1 & zB,
        UB = QB(BB),
        aB = UB.length;
      if (aB != QB(jB).length && !uB) return !1;
      for (var pB = aB; pB--;) {
        var rB = UB[pB];
        if (!(uB ? rB in jB : nB.call(jB, rB))) return !1
      }
      var sB = NB.get(BB),
        JB = NB.get(jB);
      if (sB && JB) return sB == jB && JB == BB;
      var mB = !0;
      NB.set(BB, jB), NB.set(jB, BB);
      for (var yB = uB; ++pB < aB;) {
        var kB = BB[rB = UB[pB]],
          GB = jB[rB];
        if (dB) var LB = uB ? dB(GB, kB, rB, jB, BB, NB) : dB(kB, GB, rB, BB, jB, NB);
        if (!(void 0 === LB ? kB === GB || IB(kB, GB, zB, dB, NB) : LB)) {
          mB = !1;
          break
        }
        yB || (yB = "constructor" == rB)
      }
      if (mB && !yB) {
        var gB = BB.constructor,
          tB = jB.constructor;
        gB == tB || !("constructor" in BB) || !("constructor" in jB) || "function" == typeof gB && gB instanceof gB && "function" == typeof tB && tB instanceof tB || (mB = !1)
      }
      return NB.delete(BB), NB.delete(jB), mB
    }
  },
  5178: (BB, jB, zB) => {
    var QB = "object" == typeof zB.g && zB.g && zB.g.Object === Object && zB.g;
    BB.exports = QB
  },
  5691: (BB, jB, zB) => {
    var QB = zB(5693),
      nB = zB(5699),
      dB = zB(5714);
    BB.exports = function(BB) {
      return QB(BB, dB, nB)
    }
  },
  5417: (BB, jB, zB) => {
    var QB = zB(5420);
    BB.exports = function(BB, jB) {
      var zB = BB.__data__;
      return QB(jB) ? zB["string" == typeof jB ? "string" : "hash"] : zB.map
    }
  },
  5807: (BB, jB, zB) => {
    var QB = zB(5812),
      nB = zB(5714);
    BB.exports = function(BB) {
      for (var jB = nB(BB), zB = jB.length; zB--;) {
        var dB = jB[zB],
          IB = BB[dB];
        jB[zB] = [dB, IB, QB(IB)]
      }
      return jB
    }
  },
  5308: (BB, jB, zB) => {
    var QB = zB(5312),
      nB = zB(5344);
    BB.exports = function(BB, jB) {
      var zB = nB(BB, jB);
      return QB(zB) ? zB : void 0
    }
  },
  6273: (BB, jB, zB) => {
    var QB = zB(5773)(Object.getPrototypeOf, Object);
    BB.exports = QB
  },
  5219: (BB, jB, zB) => {
    var QB = zB(5211),
      nB = Object.prototype,
      dB = nB.hasOwnProperty,
      IB = nB.toString,
      NB = QB ? QB.toStringTag : void 0;
    BB.exports = function(BB) {
      var jB = dB.call(BB, NB),
        zB = BB[NB];
      try {
        BB[NB] = void 0;
        var QB = !0
      } catch (uB) {}
      var nB = IB.call(BB);
      return QB && (jB ? BB[NB] = zB : delete BB[NB]), nB
    }
  },
  5699: (BB, jB, zB) => {
    var QB = zB(5703),
      nB = zB(5707),
      dB = Object.prototype.propertyIsEnumerable,
      IB = Object.getOwnPropertySymbols,
      NB = IB ? function(BB) {
        return null == BB ? [] : (BB = Object(BB), QB(IB(BB), (function(jB) {
          return dB.call(BB, jB)
        })))
      } : nB;
    BB.exports = NB
  },
  5780: (BB, jB, zB) => {
    var QB = zB(5785),
      nB = zB(5404),
      dB = zB(5793),
      IB = zB(5795),
      NB = zB(5800),
      uB = zB(5204),
      UB = zB(5338),
      aB = "[object Map]",
      pB = "[object Promise]",
      rB = "[object Set]",
      sB = "[object WeakMap]",
      JB = "[object DataView]",
      mB = UB(QB),
      yB = UB(nB),
      kB = UB(dB),
      GB = UB(IB),
      LB = UB(NB),
      gB = uB;
    (QB && gB(new QB(new ArrayBuffer(1))) != JB || nB && gB(new nB) != aB || dB && gB(dB.resolve()) != pB || IB && gB(new IB) != rB || NB && gB(new NB) != sB) && (gB = function(BB) {
      var jB = uB(BB),
        zB = "[object Object]" == jB ? BB.constructor : void 0,
        QB = zB ? UB(zB) : "";
      if (QB) switch (QB) {
        case mB:
          return JB;
        case yB:
          return aB;
        case kB:
          return pB;
        case GB:
          return rB;
        case LB:
          return sB
      }
      return jB
    }), BB.exports = gB
  },
  5344: BB => {
    BB.exports = function(BB, jB) {
      return null == BB ? void 0 : BB[jB]
    }
  },
  5847: (BB, jB, zB) => {
    var QB = zB(5259),
      nB = zB(5561),
      dB = zB(5239),
      IB = zB(5530),
      NB = zB(5527),
      uB = zB(5451);
    BB.exports = function(BB, jB, zB) {
      for (var UB = -1, aB = (jB = QB(jB, BB)).length, pB = !1; ++UB < aB;) {
        var rB = uB(jB[UB]);
        if (!(pB = null != BB && zB(BB, rB))) break;
        BB = BB[rB]
      }
      return pB || ++UB != aB ? pB : !!(aB = null == BB ? 0 : BB.length) && NB(aB) && IB(rB, aB) && (dB(BB) || nB(BB))
    }
  },
  6073: BB => {
    var jB = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    BB.exports = function(BB) {
      return jB.test(BB)
    }
  },
  5296: (BB, jB, zB) => {
    var QB = zB(5303);
    BB.exports = function() {
      this.__data__ = QB ? QB(null) : {}, this.size = 0
    }
  },
  5350: BB => {
    BB.exports = function(BB) {
      var jB = this.has(BB) && delete this.__data__[BB];
      return this.size -= jB ? 1 : 0, jB
    }
  },
  5352: (BB, jB, zB) => {
    var QB = zB(5303),
      nB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB) {
      var jB = this.__data__;
      if (QB) {
        var zB = jB[BB];
        return "__lodash_hash_undefined__" === zB ? void 0 : zB
      }
      return nB.call(jB, BB) ? jB[BB] : void 0
    }
  },
  5354: (BB, jB, zB) => {
    var QB = zB(5303),
      nB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB) {
      var jB = this.__data__;
      return QB ? void 0 !== jB[BB] : nB.call(jB, BB)
    }
  },
  5360: (BB, jB, zB) => {
    var QB = zB(5303);
    BB.exports = function(BB, jB) {
      var zB = this.__data__;
      return this.size += this.has(BB) ? 0 : 1, zB[BB] = QB && void 0 === jB ? "__lodash_hash_undefined__" : jB, this
    }
  },
  5556: (BB, jB, zB) => {
    var QB = zB(5211),
      nB = zB(5561),
      dB = zB(5239),
      IB = QB ? QB.isConcatSpreadable : void 0;
    BB.exports = function(BB) {
      return dB(BB) || nB(BB) || !!(IB && BB && BB[IB])
    }
  },
  5530: BB => {
    var jB = /^(?:0|[1-9]\d*)$/;
    BB.exports = function(BB, zB) {
      var QB = typeof BB;
      return !!(zB = null == zB ? 9007199254740991 : zB) && ("number" == QB || "symbol" != QB && jB.test(BB)) && BB > -1 && BB % 1 == 0 && BB < zB
    }
  },
  5520: (BB, jB, zB) => {
    var QB = zB(5383),
      nB = zB(5522),
      dB = zB(5530),
      IB = zB(5164);
    BB.exports = function(BB, jB, zB) {
      if (!IB(zB)) return !1;
      var NB = typeof jB;
      return !!("number" == NB ? nB(zB) && dB(jB, zB.length) : "string" == NB && jB in zB) && QB(zB[jB], BB)
    }
  },
  5261: (BB, jB, zB) => {
    var QB = zB(5239),
      nB = zB(5200),
      dB = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      IB = /^\w*$/;
    BB.exports = function(BB, jB) {
      if (QB(BB)) return !1;
      var zB = typeof BB;
      return !("number" != zB && "symbol" != zB && "boolean" != zB && null != BB && !nB(BB)) || (IB.test(BB) || !dB.test(BB) || null != jB && BB in Object(jB))
    }
  },
  5420: BB => {
    BB.exports = function(BB) {
      var jB = typeof BB;
      return "string" == jB || "number" == jB || "symbol" == jB || "boolean" == jB ? "__proto__" !== BB : null === BB
    }
  },
  5327: (BB, jB, zB) => {
    var QB = zB(5329),
      nB = function() {
        var BB = /[^.]+$/.exec(QB && QB.keys && QB.keys.IE_PROTO || "");
        return BB ? "Symbol(src)_1." + BB : ""
      }();
    BB.exports = function(BB) {
      return !!nB && nB in BB
    }
  },
  5763: BB => {
    var jB = Object.prototype;
    BB.exports = function(BB) {
      var zB = BB && BB.constructor;
      return BB === ("function" == typeof zB && zB.prototype || jB)
    }
  },
  5812: (BB, jB, zB) => {
    var QB = zB(5164);
    BB.exports = function(BB) {
      return BB === BB && !QB(BB)
    }
  },
  5365: BB => {
    BB.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5374: (BB, jB, zB) => {
    var QB = zB(5378),
      nB = Array.prototype.splice;
    BB.exports = function(BB) {
      var jB = this.__data__,
        zB = QB(jB, BB);
      return !(zB < 0) && (zB == jB.length - 1 ? jB.pop() : nB.call(jB, zB, 1), --this.size, !0)
    }
  },
  5386: (BB, jB, zB) => {
    var QB = zB(5378);
    BB.exports = function(BB) {
      var jB = this.__data__,
        zB = QB(jB, BB);
      return zB < 0 ? void 0 : jB[zB][1]
    }
  },
  5393: (BB, jB, zB) => {
    var QB = zB(5378);
    BB.exports = function(BB) {
      return QB(this.__data__, BB) > -1
    }
  },
  5399: (BB, jB, zB) => {
    var QB = zB(5378);
    BB.exports = function(BB, jB) {
      var zB = this.__data__,
        nB = QB(zB, BB);
      return nB < 0 ? (++this.size, zB.push([BB, jB])) : zB[nB][1] = jB, this
    }
  },
  5286: (BB, jB, zB) => {
    var QB = zB(5291),
      nB = zB(5363),
      dB = zB(5404);
    BB.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new QB,
        map: new(dB || nB),
        string: new QB
      }
    }
  },
  5408: (BB, jB, zB) => {
    var QB = zB(5417);
    BB.exports = function(BB) {
      var jB = QB(this, BB).delete(BB);
      return this.size -= jB ? 1 : 0, jB
    }
  },
  5425: (BB, jB, zB) => {
    var QB = zB(5417);
    BB.exports = function(BB) {
      return QB(this, BB).get(BB)
    }
  },
  5427: (BB, jB, zB) => {
    var QB = zB(5417);
    BB.exports = function(BB) {
      return QB(this, BB).has(BB)
    }
  },
  5431: (BB, jB, zB) => {
    var QB = zB(5417);
    BB.exports = function(BB, jB) {
      var zB = QB(this, BB),
        nB = zB.size;
      return zB.set(BB, jB), this.size += zB.size == nB ? 0 : 1, this
    }
  },
  5674: BB => {
    BB.exports = function(BB) {
      var jB = -1,
        zB = Array(BB.size);
      return BB.forEach((function(BB, QB) {
        zB[++jB] = [QB, BB]
      })), zB
    }
  },
  5815: BB => {
    BB.exports = function(BB, jB) {
      return function(zB) {
        return null != zB && (zB[BB] === jB && (void 0 !== jB || BB in Object(zB)))
      }
    }
  },
  5274: (BB, jB, zB) => {
    var QB = zB(5277);
    BB.exports = function(BB) {
      var jB = QB(BB, (function(BB) {
          return 500 === zB.size && zB.clear(), BB
        })),
        zB = jB.cache;
      return jB
    }
  },
  5303: (BB, jB, zB) => {
    var QB = zB(5308)(Object, "create");
    BB.exports = QB
  },
  5766: (BB, jB, zB) => {
    var QB = zB(5773)(Object.keys, Object);
    BB.exports = QB
  },
  5752: (BB, jB, zB) => {
    BB = zB.nmd(BB);
    var QB = zB(5178),
      nB = jB && !jB.nodeType && jB,
      dB = nB && BB && !BB.nodeType && BB,
      IB = dB && dB.exports === nB && QB.process,
      NB = function() {
        try {
          var BB = dB && dB.require && dB.require("util").types;
          return BB || IB && IB.binding && IB.binding("util")
        } catch (jB) {}
      }();
    BB.exports = NB
  },
  5224: BB => {
    var jB = Object.prototype.toString;
    BB.exports = function(BB) {
      return jB.call(BB)
    }
  },
  5773: BB => {
    BB.exports = function(BB, jB) {
      return function(zB) {
        return BB(jB(zB))
      }
    }
  },
  5927: (BB, jB, zB) => {
    var QB = zB(5930),
      nB = Math.max;
    BB.exports = function(BB, jB, zB) {
      return jB = nB(void 0 === jB ? BB.length - 1 : jB, 0),
        function() {
          for (var dB = arguments, IB = -1, NB = nB(dB.length - jB, 0), uB = Array(NB); ++IB < NB;) uB[IB] = dB[jB + IB];
          IB = -1;
          for (var UB = Array(jB + 1); ++IB < jB;) UB[IB] = dB[IB];
          return UB[jB] = zB(uB), QB(BB, this, UB)
        }
    }
  },
  5174: (BB, jB, zB) => {
    var QB = zB(5178),
      nB = "object" == typeof self && self && self.Object === Object && self,
      dB = QB || nB || Function("return this")();
    BB.exports = dB
  },
  5640: BB => {
    BB.exports = function(BB) {
      return this.__data__.set(BB, "__lodash_hash_undefined__"), this
    }
  },
  5645: BB => {
    BB.exports = function(BB) {
      return this.__data__.has(BB)
    }
  },
  5678: BB => {
    BB.exports = function(BB) {
      var jB = -1,
        zB = Array(BB.size);
      return BB.forEach((function(BB) {
        zB[++jB] = BB
      })), zB
    }
  },
  5938: (BB, jB, zB) => {
    var QB = zB(5944),
      nB = zB(5959)(QB);
    BB.exports = nB
  },
  5959: BB => {
    var jB = Date.now;
    BB.exports = function(BB) {
      var zB = 0,
        QB = 0;
      return function() {
        var nB = jB(),
          dB = 16 - (nB - QB);
        if (QB = nB, dB > 0) {
          if (++zB >= 800) return arguments[0]
        } else zB = 0;
        return BB.apply(void 0, arguments)
      }
    }
  },
  5592: (BB, jB, zB) => {
    var QB = zB(5363);
    BB.exports = function() {
      this.__data__ = new QB, this.size = 0
    }
  },
  5599: BB => {
    BB.exports = function(BB) {
      var jB = this.__data__,
        zB = jB.delete(BB);
      return this.size = jB.size, zB
    }
  },
  5605: BB => {
    BB.exports = function(BB) {
      return this.__data__.get(BB)
    }
  },
  5614: BB => {
    BB.exports = function(BB) {
      return this.__data__.has(BB)
    }
  },
  5617: (BB, jB, zB) => {
    var QB = zB(5363),
      nB = zB(5404),
      dB = zB(5282);
    BB.exports = function(BB, jB) {
      var zB = this.__data__;
      if (zB instanceof QB) {
        var IB = zB.__data__;
        if (!nB || IB.length < 199) return IB.push([BB, jB]), this.size = ++zB.size, this;
        zB = this.__data__ = new dB(IB)
      }
      return zB.set(BB, jB), this.size = zB.size, this
    }
  },
  6023: BB => {
    BB.exports = function(BB, jB, zB) {
      for (var QB = zB - 1, nB = BB.length; ++QB < nB;)
        if (BB[QB] === jB) return QB;
      return -1
    }
  },
  6078: (BB, jB, zB) => {
    var QB = zB(6081),
      nB = zB(6073),
      dB = zB(6085);
    BB.exports = function(BB) {
      return nB(BB) ? dB(BB) : QB(BB)
    }
  },
  5270: (BB, jB, zB) => {
    var QB = zB(5274),
      nB = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      dB = /\\(\\)?/g,
      IB = QB((function(BB) {
        var jB = [];
        return 46 === BB.charCodeAt(0) && jB.push(""), BB.replace(nB, (function(BB, zB, QB, nB) {
          jB.push(QB ? nB.replace(dB, "$1") : zB || BB)
        })), jB
      }));
    BB.exports = IB
  },
  5451: (BB, jB, zB) => {
    var QB = zB(5200);
    BB.exports = function(BB) {
      if ("string" == typeof BB || QB(BB)) return BB;
      var jB = BB + "";
      return "0" == jB && 1 / BB == -1 / 0 ? "-0" : jB
    }
  },
  5338: BB => {
    var jB = Function.prototype.toString;
    BB.exports = function(BB) {
      if (null != BB) {
        try {
          return jB.call(BB)
        } catch (zB) {}
        try {
          return BB + ""
        } catch (zB) {}
      }
      return ""
    }
  },
  5192: BB => {
    var jB = /\s/;
    BB.exports = function(BB) {
      for (var zB = BB.length; zB-- && jB.test(BB.charAt(zB)););
      return zB
    }
  },
  6085: BB => {
    var jB = "\\ud800-\\udfff",
      zB = "[" + jB + "]",
      QB = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      nB = "\\ud83c[\\udffb-\\udfff]",
      dB = "[^" + jB + "]",
      IB = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      NB = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      uB = "(?:" + QB + "|" + nB + ")" + "?",
      UB = "[\\ufe0e\\ufe0f]?",
      aB = UB + uB + ("(?:\\u200d(?:" + [dB, IB, NB].join("|") + ")" + UB + uB + ")*"),
      pB = "(?:" + [dB + QB + "?", QB, IB, NB, zB].join("|") + ")",
      rB = RegExp(nB + "(?=" + nB + ")|" + pB + aB, "g");
    BB.exports = function(BB) {
      return BB.match(rB) || []
    }
  },
  5952: BB => {
    BB.exports = function(BB) {
      return function() {
        return BB
      }
    }
  },
  5156: (BB, jB, zB) => {
    var QB = zB(5164),
      nB = zB(5172),
      dB = zB(5185),
      IB = Math.max,
      NB = Math.min;
    BB.exports = function(BB, jB, zB) {
      var uB, UB, aB, pB, rB, sB, JB = 0,
        mB = !1,
        yB = !1,
        kB = !0;
      if ("function" != typeof BB) throw new TypeError("Expected a function");

      function GB(jB) {
        var zB = uB,
          QB = UB;
        return uB = UB = void 0, JB = jB, pB = BB.apply(QB, zB)
      }

      function LB(BB) {
        var zB = BB - sB;
        return void 0 === sB || zB >= jB || zB < 0 || yB && BB - JB >= aB
      }

      function gB() {
        var BB = nB();
        if (LB(BB)) return tB(BB);
        rB = setTimeout(gB, function(BB) {
          var zB = jB - (BB - sB);
          return yB ? NB(zB, aB - (BB - JB)) : zB
        }(BB))
      }

      function tB(BB) {
        return rB = void 0, kB && uB ? GB(BB) : (uB = UB = void 0, pB)
      }

      function SB() {
        var BB = nB(),
          zB = LB(BB);
        if (uB = arguments, UB = this, sB = BB, zB) {
          if (void 0 === rB) return function(BB) {
            return JB = BB, rB = setTimeout(gB, jB), mB ? GB(BB) : pB
          }(sB);
          if (yB) return clearTimeout(rB), rB = setTimeout(gB, jB), GB(sB)
        }
        return void 0 === rB && (rB = setTimeout(gB, jB)), pB
      }
      return jB = dB(jB) || 0, QB(zB) && (mB = !!zB.leading, aB = (yB = "maxWait" in zB) ? IB(dB(zB.maxWait) || 0, jB) : aB, kB = "trailing" in zB ? !!zB.trailing : kB), SB.cancel = function() {
        void 0 !== rB && clearTimeout(rB), JB = 0, uB = sB = UB = rB = void 0
      }, SB.flush = function() {
        return void 0 === rB ? pB : tB(nB())
      }, SB
    }
  },
  5383: BB => {
    BB.exports = function(BB, jB) {
      return BB === jB || BB !== BB && jB !== jB
    }
  },
  6235: (BB, jB, zB) => {
    var QB = zB(6243),
      nB = zB(6247),
      dB = zB(5573),
      IB = zB(5239),
      NB = zB(5520);
    BB.exports = function(BB, jB, zB) {
      var uB = IB(BB) ? QB : nB;
      return zB && NB(BB, jB, zB) && (jB = void 0), uB(BB, dB(jB, 3))
    }
  },
  6312: (BB, jB, zB) => {
    var QB = zB(6315)(zB(6324));
    BB.exports = QB
  },
  6324: (BB, jB, zB) => {
    var QB = zB(6013),
      nB = zB(5573),
      dB = zB(6330),
      IB = Math.max;
    BB.exports = function(BB, jB, zB) {
      var NB = null == BB ? 0 : BB.length;
      if (!NB) return -1;
      var uB = null == zB ? 0 : dB(zB);
      return uB < 0 && (uB = IB(NB + uB, 0)), QB(BB, nB(jB, 3), uB)
    }
  },
  6171: (BB, jB, zB) => {
    var QB = zB(5546),
      nB = zB(6173);
    BB.exports = function(BB, jB) {
      return QB(nB(BB, jB), 1)
    }
  },
  5252: (BB, jB, zB) => {
    var QB = zB(5256);
    BB.exports = function(BB, jB, zB) {
      var nB = null == BB ? void 0 : QB(BB, jB);
      return void 0 === nB ? zB : nB
    }
  },
  5832: (BB, jB, zB) => {
    var QB = zB(5838),
      nB = zB(5847);
    BB.exports = function(BB, jB) {
      return null != BB && nB(BB, jB, QB)
    }
  },
  5856: BB => {
    BB.exports = function(BB) {
      return BB
    }
  },
  5561: (BB, jB, zB) => {
    var QB = zB(5565),
      nB = zB(5227),
      dB = Object.prototype,
      IB = dB.hasOwnProperty,
      NB = dB.propertyIsEnumerable,
      uB = QB(function() {
        return arguments
      }()) ? QB : function(BB) {
        return nB(BB) && IB.call(BB, "callee") && !NB.call(BB, "callee")
      };
    BB.exports = uB
  },
  5239: BB => {
    var jB = Array.isArray;
    BB.exports = jB
  },
  5522: (BB, jB, zB) => {
    var QB = zB(5319),
      nB = zB(5527);
    BB.exports = function(BB) {
      return null != BB && nB(BB.length) && !QB(BB)
    }
  },
  6279: (BB, jB, zB) => {
    var QB = zB(5204),
      nB = zB(5227);
    BB.exports = function(BB) {
      return !0 === BB || !1 === BB || nB(BB) && "[object Boolean]" == QB(BB)
    }
  },
  5733: (BB, jB, zB) => {
    BB = zB.nmd(BB);
    var QB = zB(5174),
      nB = zB(5736),
      dB = jB && !jB.nodeType && jB,
      IB = dB && BB && !BB.nodeType && BB,
      NB = IB && IB.exports === dB ? QB.oJ : void 0,
      uB = (NB ? NB.isBuffer : void 0) || nB;
    BB.exports = uB
  },
  6176: (BB, jB, zB) => {
    var QB = zB(5620);
    BB.exports = function(BB, jB) {
      return QB(BB, jB)
    }
  },
  5319: (BB, jB, zB) => {
    var QB = zB(5204),
      nB = zB(5164);
    BB.exports = function(BB) {
      if (!nB(BB)) return !1;
      var jB = QB(BB);
      return "[object Function]" == jB || "[object GeneratorFunction]" == jB || "[object AsyncFunction]" == jB || "[object Proxy]" == jB
    }
  },
  5527: BB => {
    BB.exports = function(BB) {
      return "number" == typeof BB && BB > -1 && BB % 1 == 0 && BB <= 9007199254740991
    }
  },
  5243: (BB, jB, zB) => {
    var QB = zB(5250);
    BB.exports = function(BB) {
      return QB(BB) && BB != +BB
    }
  },
  5453: BB => {
    BB.exports = function(BB) {
      return null == BB
    }
  },
  5250: (BB, jB, zB) => {
    var QB = zB(5204),
      nB = zB(5227);
    BB.exports = function(BB) {
      return "number" == typeof BB || nB(BB) && "[object Number]" == QB(BB)
    }
  },
  5164: BB => {
    BB.exports = function(BB) {
      var jB = typeof BB;
      return null != BB && ("object" == jB || "function" == jB)
    }
  },
  5227: BB => {
    BB.exports = function(BB) {
      return null != BB && "object" == typeof BB
    }
  },
  6271: (BB, jB, zB) => {
    var QB = zB(5204),
      nB = zB(6273),
      dB = zB(5227),
      IB = Function.prototype,
      NB = Object.prototype,
      uB = IB.toString,
      UB = NB.hasOwnProperty,
      aB = uB.call(Object);
    BB.exports = function(BB) {
      if (!dB(BB) || "[object Object]" != QB(BB)) return !1;
      var jB = nB(BB);
      if (null === jB) return !0;
      var zB = UB.call(jB, "constructor") && jB.constructor;
      return "function" == typeof zB && zB instanceof zB && uB.call(zB) == aB
    }
  },
  5233: (BB, jB, zB) => {
    var QB = zB(5204),
      nB = zB(5239),
      dB = zB(5227);
    BB.exports = function(BB) {
      return "string" == typeof BB || !nB(BB) && dB(BB) && "[object String]" == QB(BB)
    }
  },
  5200: (BB, jB, zB) => {
    var QB = zB(5204),
      nB = zB(5227);
    BB.exports = function(BB) {
      return "symbol" == typeof BB || nB(BB) && "[object Symbol]" == QB(BB)
    }
  },
  5738: (BB, jB, zB) => {
    var QB = zB(5744),
      nB = zB(5750),
      dB = zB(5752),
      IB = dB && dB.isTypedArray,
      NB = IB ? nB(IB) : QB;
    BB.exports = NB
  },
  5714: (BB, jB, zB) => {
    var QB = zB(5723),
      nB = zB(5756),
      dB = zB(5522);
    BB.exports = function(BB) {
      return dB(BB) ? QB(BB) : nB(BB)
    }
  },
  6265: BB => {
    BB.exports = function(BB) {
      var jB = null == BB ? 0 : BB.length;
      return jB ? BB[jB - 1] : void 0
    }
  },
  6173: (BB, jB, zB) => {
    var QB = zB(5446),
      nB = zB(5573),
      dB = zB(5871),
      IB = zB(5239);
    BB.exports = function(BB, jB) {
      return (IB(BB) ? QB : dB)(BB, nB(jB, 3))
    }
  },
  6226: (BB, jB, zB) => {
    var QB = zB(6232),
      nB = zB(5881),
      dB = zB(5573);
    BB.exports = function(BB, jB) {
      var zB = {};
      return jB = dB(jB, 3), nB(BB, (function(BB, nB, dB) {
        QB(zB, nB, jB(BB, nB, dB))
      })), zB
    }
  },
  6144: (BB, jB, zB) => {
    var QB = zB(6151),
      nB = zB(6156),
      dB = zB(5856);
    BB.exports = function(BB) {
      return BB && BB.length ? QB(BB, dB, nB) : void 0
    }
  },
  5277: (BB, jB, zB) => {
    var QB = zB(5282);

    function nB(BB, jB) {
      if ("function" != typeof BB || null != jB && "function" != typeof jB) throw new TypeError("Expected a function");
      var zB = function() {
        var QB = arguments,
          nB = jB ? jB.apply(this, QB) : QB[0],
          dB = zB.cache;
        if (dB.has(nB)) return dB.get(nB);
        var IB = BB.apply(this, QB);
        return zB.cache = dB.set(nB, IB) || dB, IB
      };
      return zB.cache = new(nB.Cache || QB), zB
    }
    nB.Cache = QB, BB.exports = nB
  },
  6162: (BB, jB, zB) => {
    var QB = zB(6151),
      nB = zB(6165),
      dB = zB(5856);
    BB.exports = function(BB) {
      return BB && BB.length ? QB(BB, dB, nB) : void 0
    }
  },
  6042: BB => {
    BB.exports = function() {}
  },
  5172: (BB, jB, zB) => {
    var QB = zB(5174);
    BB.exports = function() {
      return QB.Date.now()
    }
  },
  5860: (BB, jB, zB) => {
    var QB = zB(5864),
      nB = zB(5867),
      dB = zB(5261),
      IB = zB(5451);
    BB.exports = function(BB) {
      return dB(BB) ? QB(IB(BB)) : nB(BB)
    }
  },
  5504: (BB, jB, zB) => {
    var QB = zB(5508)();
    BB.exports = QB
  },
  6296: (BB, jB, zB) => {
    var QB = zB(5654),
      nB = zB(5573),
      dB = zB(6299),
      IB = zB(5239),
      NB = zB(5520);
    BB.exports = function(BB, jB, zB) {
      var uB = IB(BB) ? QB : dB;
      return zB && NB(BB, jB, zB) && (jB = void 0), uB(BB, nB(jB, 3))
    }
  },
  5539: (BB, jB, zB) => {
    var QB = zB(5546),
      nB = zB(5570),
      dB = zB(5919),
      IB = zB(5520),
      NB = dB((function(BB, jB) {
        if (null == BB) return [];
        var zB = jB.length;
        return zB > 1 && IB(BB, jB[0], jB[1]) ? jB = [] : zB > 2 && IB(jB[0], jB[1], jB[2]) && (jB = [jB[0]]), nB(BB, QB(jB, 1), [])
      }));
    BB.exports = NB
  },
  5707: BB => {
    BB.exports = function() {
      return []
    }
  },
  5736: BB => {
    BB.exports = function() {
      return !1
    }
  },
  5150: (BB, jB, zB) => {
    var QB = zB(5156),
      nB = zB(5164);
    BB.exports = function(BB, jB, zB) {
      var dB = !0,
        IB = !0;
      if ("function" != typeof BB) throw new TypeError("Expected a function");
      return nB(zB) && (dB = "leading" in zB ? !!zB.leading : dB, IB = "trailing" in zB ? !!zB.trailing : IB), QB(BB, jB, {
        leading: dB,
        maxWait: jB,
        trailing: IB
      })
    }
  },
  5532: (BB, jB, zB) => {
    var QB = zB(5185),
      nB = 1 / 0;
    BB.exports = function(BB) {
      return BB ? (BB = QB(BB)) === nB || BB === -1 / 0 ? 17976931348623157e292 * (BB < 0 ? -1 : 1) : BB === BB ? BB : 0 : 0 === BB ? BB : 0
    }
  },
  6330: (BB, jB, zB) => {
    var QB = zB(5532);
    BB.exports = function(BB) {
      var jB = QB(BB),
        zB = jB % 1;
      return jB === jB ? zB ? jB - zB : jB : 0
    }
  },
  5185: (BB, jB, zB) => {
    var QB = zB(5189),
      nB = zB(5164),
      dB = zB(5200),
      IB = /^[-+]0x[0-9a-f]+$/i,
      NB = /^0b[01]+$/i,
      uB = /^0o[0-7]+$/i,
      UB = parseInt;
    BB.exports = function(BB) {
      if ("number" == typeof BB) return BB;
      if (dB(BB)) return NaN;
      if (nB(BB)) {
        var jB = "function" == typeof BB.valueOf ? BB.valueOf() : BB;
        BB = nB(jB) ? jB + "" : jB
      }
      if ("string" != typeof BB) return 0 === BB ? BB : +BB;
      BB = QB(BB);
      var zB = NB.test(BB);
      return zB || uB.test(BB) ? UB(BB.slice(2), zB ? 2 : 8) : IB.test(BB) ? NaN : +BB
    }
  },
  5438: (BB, jB, zB) => {
    var QB = zB(5443);
    BB.exports = function(BB) {
      return null == BB ? "" : QB(BB)
    }
  },
  5988: (BB, jB, zB) => {
    var QB = zB(5573),
      nB = zB(5997);
    BB.exports = function(BB, jB) {
      return BB && BB.length ? nB(BB, QB(jB, 2)) : []
    }
  },
  6059: (BB, jB, zB) => {
    var QB = zB(6061)("toUpperCase");
    BB.exports = QB
  },
  6102: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => Xj
    });
    var QB = zB(62),
      nB = zB(5045),
      dB = zB.n(nB);
    const {
      getOwnPropertyNames: IB,
      getOwnPropertySymbols: NB
    } = Object, {
      hasOwnProperty: uB
    } = Object.prototype;

    function UB(BB, jB) {
      return function(zB, QB, nB) {
        return BB(zB, QB, nB) && jB(zB, QB, nB)
      }
    }

    function aB(BB) {
      return function(jB, zB, QB) {
        if (!jB || !zB || "object" !== typeof jB || "object" !== typeof zB) return BB(jB, zB, QB);
        const {
          cache: nB
        } = QB, dB = nB.get(jB), IB = nB.get(zB);
        if (dB && IB) return dB === zB && IB === jB;
        nB.set(jB, zB), nB.set(zB, jB);
        const NB = BB(jB, zB, QB);
        return nB.delete(jB), nB.delete(zB), NB
      }
    }

    function pB(BB) {
      return IB(BB).concat(NB(BB))
    }
    const rB = Object.hasOwn || ((BB, jB) => uB.call(BB, jB));

    function sB(BB, jB) {
      return BB === jB || !BB && !jB && BB !== BB && jB !== jB
    }
    const {
      getOwnPropertyDescriptor: JB,
      keys: mB
    } = Object;

    function yB(BB, jB) {
      return BB.byteLength === jB.byteLength && HB(new Uint8Array(BB), new Uint8Array(jB))
    }

    function kB(BB, jB, zB) {
      let QB = BB.length;
      if (jB.length !== QB) return !1;
      for (; QB-- > 0;)
        if (!zB.equals(BB[QB], jB[QB], QB, QB, BB, jB, zB)) return !1;
      return !0
    }

    function GB(BB, jB) {
      return BB.byteLength === jB.byteLength && HB(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength), new Uint8Array(jB.buffer, jB.byteOffset, jB.byteLength))
    }

    function LB(BB, jB) {
      return sB(BB.getTime(), jB.getTime())
    }

    function gB(BB, jB) {
      return BB.name === jB.name && BB.message === jB.message && BB.cause === jB.cause && BB.stack === jB.stack
    }

    function tB(BB, jB) {
      return BB === jB
    }

    function SB(BB, jB, zB) {
      const QB = BB.size;
      if (QB !== jB.size) return !1;
      if (!QB) return !0;
      const nB = new Array(QB),
        dB = BB.entries();
      let IB, NB, uB = 0;
      for (;
        (IB = dB.next()) && !IB.done;) {
        const QB = jB.entries();
        let dB = !1,
          UB = 0;
        for (;
          (NB = QB.next()) && !NB.done;) {
          if (nB[UB]) {
            UB++;
            continue
          }
          const QB = IB.value,
            aB = NB.value;
          if (zB.equals(QB[0], aB[0], uB, UB, BB, jB, zB) && zB.equals(QB[1], aB[1], QB[0], aB[0], BB, jB, zB)) {
            dB = nB[UB] = !0;
            break
          }
          UB++
        }
        if (!dB) return !1;
        uB++
      }
      return !0
    }
    const MB = sB;

    function EB(BB, jB, zB) {
      const QB = mB(BB);
      let nB = QB.length;
      if (mB(jB).length !== nB) return !1;
      for (; nB-- > 0;)
        if (!FB(BB, jB, zB, QB[nB])) return !1;
      return !0
    }

    function iB(BB, jB, zB) {
      const QB = pB(BB);
      let nB, dB, IB, NB = QB.length;
      if (pB(jB).length !== NB) return !1;
      for (; NB-- > 0;) {
        if (nB = QB[NB], !FB(BB, jB, zB, nB)) return !1;
        if (dB = JB(BB, nB), IB = JB(jB, nB), (dB || IB) && (!dB || !IB || dB.configurable !== IB.configurable || dB.enumerable !== IB.enumerable || dB.writable !== IB.writable)) return !1
      }
      return !0
    }

    function qB(BB, jB) {
      return sB(BB.valueOf(), jB.valueOf())
    }

    function fB(BB, jB) {
      return BB.source === jB.source && BB.flags === jB.flags
    }

    function oB(BB, jB, zB) {
      const QB = BB.size;
      if (QB !== jB.size) return !1;
      if (!QB) return !0;
      const nB = new Array(QB),
        dB = BB.values();
      let IB, NB;
      for (;
        (IB = dB.next()) && !IB.done;) {
        const QB = jB.values();
        let dB = !1,
          uB = 0;
        for (;
          (NB = QB.next()) && !NB.done;) {
          if (!nB[uB] && zB.equals(IB.value, NB.value, IB.value, NB.value, BB, jB, zB)) {
            dB = nB[uB] = !0;
            break
          }
          uB++
        }
        if (!dB) return !1
      }
      return !0
    }

    function HB(BB, jB) {
      let zB = BB.byteLength;
      if (jB.byteLength !== zB || BB.byteOffset !== jB.byteOffset) return !1;
      for (; zB-- > 0;)
        if (BB[zB] !== jB[zB]) return !1;
      return !0
    }

    function DB(BB, jB) {
      return BB.hostname === jB.hostname && BB.pathname === jB.pathname && BB.protocol === jB.protocol && BB.port === jB.port && BB.hash === jB.hash && BB.username === jB.username && BB.password === jB.password
    }

    function FB(BB, jB, zB, QB) {
      return !("_owner" !== QB && "__o" !== QB && "__v" !== QB || !BB.$$typeof && !jB.$$typeof) || rB(jB, QB) && zB.equals(BB[QB], jB[QB], QB, QB, BB, jB, zB)
    }
    const YB = {
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
      VB = Object.prototype.toString;

    function hB(BB) {
      let {
        areArrayBuffersEqual: jB,
        areArraysEqual: zB,
        areDataViewsEqual: QB,
        areDatesEqual: nB,
        areErrorsEqual: dB,
        areFunctionsEqual: IB,
        areMapsEqual: NB,
        areNumbersEqual: uB,
        areObjectsEqual: UB,
        arePrimitiveWrappersEqual: aB,
        areRegExpsEqual: pB,
        areSetsEqual: rB,
        areTypedArraysEqual: sB,
        areUrlsEqual: JB,
        unknownTagComparators: mB
      } = BB;
      return function(BB, yB, kB) {
        if (BB === yB) return !0;
        if (null == BB || null == yB) return !1;
        const GB = typeof BB;
        if (GB !== typeof yB) return !1;
        if ("object" !== GB) return "number" === GB ? uB(BB, yB, kB) : "function" === GB && IB(BB, yB, kB);
        const LB = BB.constructor;
        if (LB !== yB.constructor) return !1;
        if (LB === Object) return UB(BB, yB, kB);
        if (Array.isArray(BB)) return zB(BB, yB, kB);
        if (LB === Date) return nB(BB, yB, kB);
        if (LB === RegExp) return pB(BB, yB, kB);
        if (LB === Map) return NB(BB, yB, kB);
        if (LB === Set) return rB(BB, yB, kB);
        const gB = VB.call(BB);
        if ("[object Date]" === gB) return nB(BB, yB, kB);
        if ("[object RegExp]" === gB) return pB(BB, yB, kB);
        if ("[object Map]" === gB) return NB(BB, yB, kB);
        if ("[object Set]" === gB) return rB(BB, yB, kB);
        if ("[object Object]" === gB) return "function" !== typeof BB.then && "function" !== typeof yB.then && UB(BB, yB, kB);
        if ("[object URL]" === gB) return JB(BB, yB, kB);
        if ("[object Error]" === gB) return dB(BB, yB, kB);
        if ("[object Arguments]" === gB) return UB(BB, yB, kB);
        if (YB[gB]) return sB(BB, yB, kB);
        if ("[object ArrayBuffer]" === gB) return jB(BB, yB, kB);
        if ("[object DataView]" === gB) return QB(BB, yB, kB);
        if ("[object Boolean]" === gB || "[object Number]" === gB || "[object String]" === gB) return aB(BB, yB, kB);
        if (mB) {
          let jB = mB[gB];
          if (!jB) {
            const zB = null != (tB = BB) ? tB[Symbol.toStringTag] : void 0;
            zB && (jB = mB[zB])
          }
          if (jB) return jB(BB, yB, kB)
        }
        var tB;
        return !1
      }
    }
    const XB = ZB();
    ZB({
      strict: !0
    }), ZB({
      circular: !0
    }), ZB({
      circular: !0,
      strict: !0
    }), ZB({
      createInternalComparator: () => sB
    }), ZB({
      strict: !0,
      createInternalComparator: () => sB
    }), ZB({
      circular: !0,
      createInternalComparator: () => sB
    }), ZB({
      circular: !0,
      createInternalComparator: () => sB,
      strict: !0
    });

    function ZB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: jB = !1,
        createInternalComparator: zB,
        createState: QB,
        strict: nB = !1
      } = BB, dB = function(BB) {
        let {
          circular: jB,
          createCustomConfig: zB,
          strict: QB
        } = BB, nB = {
          areArrayBuffersEqual: yB,
          areArraysEqual: QB ? iB : kB,
          areDataViewsEqual: GB,
          areDatesEqual: LB,
          areErrorsEqual: gB,
          areFunctionsEqual: tB,
          areMapsEqual: QB ? UB(SB, iB) : SB,
          areNumbersEqual: MB,
          areObjectsEqual: QB ? iB : EB,
          arePrimitiveWrappersEqual: qB,
          areRegExpsEqual: fB,
          areSetsEqual: QB ? UB(oB, iB) : oB,
          areTypedArraysEqual: QB ? UB(HB, iB) : HB,
          areUrlsEqual: DB,
          unknownTagComparators: void 0
        };
        if (zB && (nB = Object.assign({}, nB, zB(nB))), jB) {
          const BB = aB(nB.areArraysEqual),
            jB = aB(nB.areMapsEqual),
            zB = aB(nB.areObjectsEqual),
            QB = aB(nB.areSetsEqual);
          nB = Object.assign({}, nB, {
            areArraysEqual: BB,
            areMapsEqual: jB,
            areObjectsEqual: zB,
            areSetsEqual: QB
          })
        }
        return nB
      }(BB), IB = hB(dB);
      var NB;
      return function(BB) {
        let {
          circular: jB,
          comparator: zB,
          createState: QB,
          equals: nB,
          strict: dB
        } = BB;
        if (QB) return function(BB, IB) {
          const {
            cache: NB = (jB ? new WeakMap : void 0),
            meta: uB
          } = QB();
          return zB(BB, IB, {
            cache: NB,
            equals: nB,
            meta: uB,
            strict: dB
          })
        };
        if (jB) return function(BB, jB) {
          return zB(BB, jB, {
            cache: new WeakMap,
            equals: nB,
            meta: void 0,
            strict: dB
          })
        };
        const IB = {
          cache: void 0,
          equals: nB,
          meta: void 0,
          strict: dB
        };
        return function(BB, jB) {
          return zB(BB, jB, IB)
        }
      }({
        circular: jB,
        comparator: IB,
        createState: QB,
        equals: zB ? zB(IB) : (NB = IB, function(BB, jB, zB, QB, nB, dB, IB) {
          return NB(BB, jB, IB)
        }),
        strict: nB
      })
    }

    function AB(BB) {
      var jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zB = -1;
      requestAnimationFrame((function QB(nB) {
        zB < 0 && (zB = nB), nB - zB > jB ? (BB(nB), zB = -1) : function(BB) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(BB)
        }(QB)
      }))
    }

    function TB(BB) {
      return TB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, TB(BB)
    }

    function PB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return WB(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return WB(BB, jB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function WB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function eB() {
      var BB = function() {
          return null
        },
        jB = !1,
        zB = function zB(QB) {
          if (!jB) {
            if (Array.isArray(QB)) {
              if (!QB.length) return;
              var nB = PB(QB),
                dB = nB[0],
                IB = nB.slice(1);
              return "number" === typeof dB ? void AB(zB.bind(null, IB), dB) : (zB(dB), void AB(zB.bind(null, IB)))
            }
            "object" === TB(QB) && BB(QB), "function" === typeof QB && QB()
          }
        };
      return {
        stop: function() {
          jB = !0
        },
        start: function(BB) {
          jB = !1, zB(BB)
        },
        subscribe: function(jB) {
          return BB = jB,
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

    function wB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function xB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? wB(Object(zB), !0).forEach((function(jB) {
          KB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : wB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function KB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" !== lB(BB) || null === BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" !== lB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" === lB(jB) ? jB : String(jB)
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }
    var CB = function(BB) {
        return BB
      },
      cB = function(BB, jB) {
        return Object.keys(jB).reduce((function(zB, QB) {
          return xB(xB({}, zB), {}, KB({}, QB, BB(QB, jB[QB])))
        }), {})
      },
      bB = function(BB, jB, zB) {
        return BB.map((function(BB) {
          return "".concat((QB = BB, QB.replace(/([A-Z])/g, (function(BB) {
            return "-".concat(BB.toLowerCase())
          }))), " ").concat(jB, "ms ").concat(zB);
          var QB
        })).join(",")
      };

    function vB(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        var zB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != zB) {
          var QB, nB, dB, IB, NB = [],
            uB = !0,
            UB = !1;
          try {
            if (dB = (zB = zB.call(BB)).next, 0 === jB) {
              if (Object(zB) !== zB) return;
              uB = !1
            } else
              for (; !(uB = (QB = dB.call(zB)).done) && (NB.push(QB.value), NB.length !== jB); uB = !0);
          } catch (BB) {
            UB = !0, nB = BB
          } finally {
            try {
              if (!uB && null != zB.return && (IB = zB.return(), Object(IB) !== IB)) return
            } finally {
              if (UB) throw nB
            }
          }
          return NB
        }
      }(BB, jB) || OB(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function RB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return Bj(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || OB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OB(BB, jB) {
      if (BB) {
        if ("string" === typeof BB) return Bj(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === zB && BB.constructor && (zB = BB.constructor.name), "Map" === zB || "Set" === zB ? Array.from(BB) : "Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB) ? Bj(BB, jB) : void 0
      }
    }

    function Bj(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }
    var jj = 1e-4,
      zj = function(BB, jB) {
        return [0, 3 * BB, 3 * jB - 6 * BB, 3 * BB - 3 * jB + 1]
      },
      Qj = function(BB, jB) {
        return BB.map((function(BB, zB) {
          return BB * Math.pow(jB, zB)
        })).reduce((function(BB, jB) {
          return BB + jB
        }))
      },
      nj = function(BB, jB) {
        return function(zB) {
          var QB = zj(BB, jB);
          return Qj(QB, zB)
        }
      },
      dj = function() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        var QB = jB[0],
          nB = jB[1],
          dB = jB[2],
          IB = jB[3];
        if (1 === jB.length) switch (jB[0]) {
          case "linear":
            QB = 0, nB = 0, dB = 1, IB = 1;
            break;
          case "ease":
            QB = .25, nB = .1, dB = .25, IB = 1;
            break;
          case "ease-in":
            QB = .42, nB = 0, dB = 1, IB = 1;
            break;
          case "ease-out":
            QB = .42, nB = 0, dB = .58, IB = 1;
            break;
          case "ease-in-out":
            QB = 0, nB = 0, dB = .58, IB = 1;
            break;
          default:
            var NB = jB[0].split("(");
            if ("cubic-bezier" === NB[0] && 4 === NB[1].split(")")[0].split(",").length) {
              var uB = vB(NB[1].split(")")[0].split(",").map((function(BB) {
                return parseFloat(BB)
              })), 4);
              QB = uB[0], nB = uB[1], dB = uB[2], IB = uB[3]
            }
        } [QB, dB, nB, IB].every((function(BB) {
          return "number" === typeof BB && BB >= 0 && BB <= 1
        }));
        var UB, aB, pB = nj(QB, dB),
          rB = nj(nB, IB),
          sB = (UB = QB, aB = dB, function(BB) {
            var jB = zj(UB, aB),
              zB = [].concat(RB(jB.map((function(BB, jB) {
                return BB * jB
              })).slice(1)), [0]);
            return Qj(zB, BB)
          }),
          JB = function(BB) {
            for (var jB, zB = BB > 1 ? 1 : BB, QB = zB, nB = 0; nB < 8; ++nB) {
              var dB = pB(QB) - zB,
                IB = sB(QB);
              if (Math.abs(dB - zB) < jj || IB < jj) return rB(QB);
              QB = (jB = QB - dB / IB) > 1 ? 1 : jB < 0 ? 0 : jB
            }
            return rB(QB)
          };
        return JB.isStepper = !1, JB
      },
      Ij = function() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        var QB = jB[0];
        if ("string" === typeof QB) switch (QB) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return dj(QB);
          case "spring":
            return function() {
              var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                jB = BB.stiff,
                zB = void 0 === jB ? 100 : jB,
                QB = BB.damping,
                nB = void 0 === QB ? 8 : QB,
                dB = BB.dt,
                IB = void 0 === dB ? 17 : dB,
                NB = function(BB, jB, QB) {
                  var dB = QB + (-(BB - jB) * zB - QB * nB) * IB / 1e3,
                    NB = QB * IB / 1e3 + BB;
                  return Math.abs(NB - jB) < jj && Math.abs(dB) < jj ? [jB, 0] : [NB, dB]
                };
              return NB.isStepper = !0, NB.dt = IB, NB
            }();
          default:
            if ("cubic-bezier" === QB.split("(")[0]) return dj(QB)
        }
        return "function" === typeof QB ? QB : null
      };

    function Nj(BB) {
      return Nj = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, Nj(BB)
    }

    function uj(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return Jj(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || sj(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Uj(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function aj(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? Uj(Object(zB), !0).forEach((function(jB) {
          pj(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : Uj(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function pj(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" !== Nj(BB) || null === BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" !== Nj(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" === Nj(jB) ? jB : String(jB)
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function rj(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        var zB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != zB) {
          var QB, nB, dB, IB, NB = [],
            uB = !0,
            UB = !1;
          try {
            if (dB = (zB = zB.call(BB)).next, 0 === jB) {
              if (Object(zB) !== zB) return;
              uB = !1
            } else
              for (; !(uB = (QB = dB.call(zB)).done) && (NB.push(QB.value), NB.length !== jB); uB = !0);
          } catch (BB) {
            UB = !0, nB = BB
          } finally {
            try {
              if (!uB && null != zB.return && (IB = zB.return(), Object(IB) !== IB)) return
            } finally {
              if (UB) throw nB
            }
          }
          return NB
        }
      }(BB, jB) || sj(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sj(BB, jB) {
      if (BB) {
        if ("string" === typeof BB) return Jj(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === zB && BB.constructor && (zB = BB.constructor.name), "Map" === zB || "Set" === zB ? Array.from(BB) : "Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB) ? Jj(BB, jB) : void 0
      }
    }

    function Jj(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }
    var mj = function(BB, jB, zB) {
        return BB + (jB - BB) * zB
      },
      yj = function(BB) {
        return BB.from !== BB.to
      },
      kj = function BB(jB, zB, QB) {
        var nB = cB((function(BB, zB) {
          if (yj(zB)) {
            var QB = rj(jB(zB.from, zB.to, zB.Hy), 2),
              nB = QB[0],
              dB = QB[1];
            return aj(aj({}, zB), {}, {
              from: nB,
              Hy: dB
            })
          }
          return zB
        }), zB);
        return QB < 1 ? cB((function(BB, jB) {
          return yj(jB) ? aj(aj({}, jB), {}, {
            Hy: mj(jB.Hy, nB[BB].Hy, QB),
            from: mj(jB.from, nB[BB].from, QB)
          }) : jB
        }), zB) : BB(jB, nB, QB - 1)
      };
    const Gj = function(BB, jB, zB, QB, nB) {
      var dB, IB, NB, uB, UB = (dB = BB, IB = jB, [Object.keys(dB), Object.keys(IB)].reduce((function(BB, jB) {
          return BB.filter((function(BB) {
            return jB.includes(BB)
          }))
        }))),
        aB = UB.reduce((function(zB, QB) {
          return aj(aj({}, zB), {}, pj({}, QB, [BB[QB], jB[QB]]))
        }), {}),
        pB = UB.reduce((function(zB, QB) {
          return aj(aj({}, zB), {}, pj({}, QB, {
            from: BB[QB],
            Hy: 0,
            to: jB[QB]
          }))
        }), {}),
        rB = -1,
        sB = function() {
          return null
        };
      return sB = zB.isStepper ? function(QB) {
          NB || (NB = QB);
          var dB = (QB - NB) / zB.dt;
          pB = kj(zB, pB, dB), nB(aj(aj(aj({}, BB), jB), cB((function(BB, jB) {
            return jB.from
          }), pB))), NB = QB, Object.values(pB).filter(yj).length && (rB = requestAnimationFrame(sB))
        } : function(dB) {
          uB || (uB = dB);
          var IB = (dB - uB) / QB,
            NB = cB((function(BB, jB) {
              return mj.apply(void 0, uj(jB).concat([zB(IB)]))
            }), aB);
          if (nB(aj(aj(aj({}, BB), jB), NB)), IB < 1) rB = requestAnimationFrame(sB);
          else {
            var UB = cB((function(BB, jB) {
              return mj.apply(void 0, uj(jB).concat([zB(1)]))
            }), aB);
            nB(aj(aj(aj({}, BB), jB), UB))
          }
        },
        function() {
          return requestAnimationFrame(sB),
            function() {
              cancelAnimationFrame(rB)
            }
        }
    };

    function Lj(BB) {
      return Lj = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, Lj(BB)
    }
    var gj = ["children", "Ds", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function tj(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB, QB, nB = {},
          dB = Object.keys(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || (nB[zB] = BB[zB]);
        return nB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function Sj(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return Mj(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return Mj(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return Mj(BB, jB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Mj(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function Ej(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function ij(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? Ej(Object(zB), !0).forEach((function(jB) {
          qj(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : Ej(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function qj(BB, jB, zB) {
      return (jB = oj(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function fj(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, oj(QB.key), QB)
      }
    }

    function oj(BB) {
      var jB = function(BB, jB) {
        if ("object" !== Lj(BB) || null === BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" !== Lj(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" === Lj(jB) ? jB : String(jB)
    }

    function Hj(BB, jB) {
      return Hj = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, Hj(BB, jB)
    }

    function Dj(BB) {
      var jB = function() {
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
        var zB, QB = Vj(BB);
        if (jB) {
          var nB = Vj(this).constructor;
          zB = Reflect.construct(QB, arguments, nB)
        } else zB = QB.apply(this, arguments);
        return Fj(this, zB)
      }
    }

    function Fj(BB, jB) {
      if (jB && ("object" === Lj(jB) || "function" === typeof jB)) return jB;
      if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
      return Yj(BB)
    }

    function Yj(BB) {
      if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return BB
    }

    function Vj(BB) {
      return Vj = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, Vj(BB)
    }
    var hj = function(BB) {
      ! function(BB, jB) {
        if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(jB && jB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), jB && Hj(BB, jB)
      }(IB, BB);
      var jB, zB, nB, dB = Dj(IB);

      function IB(BB, jB) {
        var zB;
        ! function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, IB);
        var QB = (zB = dB.call(this, BB, jB)).props,
          nB = QB.isActive,
          NB = QB.attributeName,
          uB = QB.from,
          UB = QB.to,
          aB = QB.steps,
          pB = QB.children,
          rB = QB.duration;
        if (zB.handleStyleChange = zB.handleStyleChange.bind(Yj(zB)), zB.changeStyle = zB.changeStyle.bind(Yj(zB)), !nB || rB <= 0) return zB.state = {
          style: {}
        }, "function" === typeof pB && (zB.state = {
          style: UB
        }), Fj(zB);
        if (aB && aB.length) zB.state = {
          style: aB[0].style
        };
        else if (uB) {
          if ("function" === typeof pB) return zB.state = {
            style: uB
          }, Fj(zB);
          zB.state = {
            style: NB ? qj({}, NB, uB) : uB
          }
        } else zB.state = {
          style: {}
        };
        return zB
      }
      return jB = IB, (zB = [{
        key: "componentDidMount",
        value: function() {
          var BB = this.props,
            jB = BB.isActive,
            zB = BB.canBegin;
          this.mounted = !0, jB && zB && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(BB) {
          var jB = this.props,
            zB = jB.isActive,
            QB = jB.canBegin,
            nB = jB.attributeName,
            dB = jB.shouldReAnimate,
            IB = jB.to,
            NB = jB.from,
            uB = this.state.style;
          if (QB)
            if (zB) {
              if (!(XB(BB.to, IB) && BB.canBegin && BB.isActive)) {
                var UB = !BB.canBegin || !BB.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var aB = UB || dB ? NB : BB.to;
                if (this.state && uB) {
                  var pB = {
                    style: nB ? qj({}, nB, aB) : aB
                  };
                  (nB && uB[nB] !== aB || !nB && uB !== aB) && this.setState(pB)
                }
                this.runAnimation(ij(ij({}, this.props), {}, {
                  from: aB,
                  Ds: 0
                }))
              }
            } else {
              var rB = {
                style: nB ? qj({}, nB, IB) : IB
              };
              this.state && uB && (nB && uB[nB] !== IB || !nB && uB !== IB) && this.setState(rB)
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
          var jB = this,
            zB = BB.from,
            QB = BB.to,
            nB = BB.duration,
            dB = BB.easing,
            IB = BB.Ds,
            NB = BB.onAnimationEnd,
            uB = BB.onAnimationStart,
            UB = Gj(zB, QB, Ij(dB), nB, this.changeStyle);
          this.manager.start([uB, IB, function() {
            jB.stopJSAnimation = UB()
          }, nB, NB])
        }
      }, {
        key: "runStepAnimation",
        value: function(BB) {
          var jB = this,
            zB = BB.steps,
            QB = BB.Ds,
            nB = BB.onAnimationStart,
            dB = zB[0],
            IB = dB.style,
            NB = dB.duration,
            uB = void 0 === NB ? 0 : NB;
          return this.manager.start([nB].concat(Sj(zB.reduce((function(BB, QB, nB) {
            if (0 === nB) return BB;
            var dB = QB.duration,
              IB = QB.easing,
              NB = void 0 === IB ? "ease" : IB,
              uB = QB.style,
              UB = QB.properties,
              aB = QB.onAnimationEnd,
              pB = nB > 0 ? zB[nB - 1] : QB,
              rB = UB || Object.keys(uB);
            if ("function" === typeof NB || "spring" === NB) return [].concat(Sj(BB), [jB.runJSAnimation.bind(jB, {
              from: pB.style,
              to: uB,
              duration: dB,
              easing: NB
            }), dB]);
            var sB = bB(rB, dB, NB),
              JB = ij(ij(ij({}, pB.style), uB), {}, {
                transition: sB
              });
            return [].concat(Sj(BB), [JB, dB, aB]).filter(CB)
          }), [IB, Math.max(uB, QB)])), [BB.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(BB) {
          this.manager || (this.manager = eB());
          var jB = BB.Ds,
            zB = BB.duration,
            QB = BB.attributeName,
            nB = BB.to,
            dB = BB.easing,
            IB = BB.onAnimationStart,
            NB = BB.onAnimationEnd,
            uB = BB.steps,
            UB = BB.children,
            aB = this.manager;
          if (this.unSubscribe = aB.subscribe(this.handleStyleChange), "function" !== typeof dB && "function" !== typeof UB && "spring" !== dB)
            if (uB.length > 1) this.runStepAnimation(BB);
            else {
              var pB = QB ? qj({}, QB, nB) : nB,
                rB = bB(Object.keys(pB), zB, dB);
              aB.start([IB, jB, ij(ij({}, pB), {}, {
                transition: rB
              }), zB, NB])
            }
          else this.runJSAnimation(BB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this.props,
            jB = BB.children,
            zB = (BB.Ds, BB.duration),
            nB = (BB.attributeName, BB.easing, BB.isActive),
            dB = (BB.steps, BB.from, BB.to, BB.canBegin, BB.onAnimationEnd, BB.shouldReAnimate, BB.onAnimationReStart, tj(BB, gj)),
            IB = QB.Children.count(jB),
            NB = this.state.style;
          if ("function" === typeof jB) return jB(NB);
          if (!nB || 0 === IB || zB <= 0) return jB;
          var uB = function(BB) {
            var jB = BB.props,
              zB = jB.style,
              nB = void 0 === zB ? {} : zB,
              IB = jB.className;
            return (0, QB.cloneElement)(BB, ij(ij({}, dB), {}, {
              style: ij(ij({}, nB), NB),
              className: IB
            }))
          };
          return 1 === IB ? uB(QB.Children.only(jB)) : QB.createElement("div", null, QB.Children.map(jB, (function(BB) {
            return uB(BB)
          })))
        }
      }]) && fj(jB.prototype, zB), nB && fj(jB, nB), Object.defineProperty(jB, "prototype", {
        writable: !1
      }), IB
    }(QB.PureComponent);
    hj.displayName = "Animate", hj.defaultProps = {
      Ds: 0,
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
    }, hj.propTypes = {
      from: dB().oneOfType([dB().object, dB().string]),
      to: dB().oneOfType([dB().object, dB().string]),
      attributeName: dB().string,
      duration: dB().number,
      Ds: dB().number,
      easing: dB().oneOfType([dB().string, dB().func]),
      steps: dB().arrayOf(dB().shape({
        duration: dB().number.isRequired,
        style: dB().object.isRequired,
        easing: dB().oneOfType([dB().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), dB().func]),
        properties: dB().arrayOf("string"),
        onAnimationEnd: dB().func
      })),
      children: dB().oneOfType([dB().node, dB().func]),
      isActive: dB().bool,
      canBegin: dB().bool,
      onAnimationEnd: dB().func,
      shouldReAnimate: dB().bool,
      onAnimationStart: dB().func,
      onAnimationReStart: dB().func
    };
    const Xj = hj
  },
  6337: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => PB
    });
    var QB, nB = zB(62),
      dB = zB(5146),
      IB = zB(6102),
      NB = zB(5319),
      uB = zB.n(NB),
      UB = zB(6144),
      aB = zB.n(UB),
      pB = zB(5453),
      rB = zB.n(pB),
      sB = zB(5243),
      JB = zB.n(sB),
      mB = zB(6176),
      yB = zB.n(mB),
      kB = zB(6335),
      GB = zB(6094),
      LB = zB(5975),
      gB = zB(6257),
      tB = zB(5981),
      SB = zB(5229),
      MB = zB(6121),
      EB = zB(5463),
      iB = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      qB = ["key"];

    function fB(BB) {
      return fB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, fB(BB)
    }

    function oB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function HB() {
      return HB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, HB.apply(this, arguments)
    }

    function DB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function FB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? DB(Object(zB), !0).forEach((function(jB) {
          AB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : DB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function YB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, TB(QB.key), QB)
      }
    }

    function VB(BB, jB, zB) {
      return jB = XB(jB),
        function(BB, jB) {
          if (jB && ("object" === fB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, hB() ? Reflect.construct(jB, zB || [], XB(BB).constructor) : jB.apply(BB, zB))
    }

    function hB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (hB = function() {
        return !!BB
      })()
    }

    function XB(BB) {
      return XB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, XB(BB)
    }

    function ZB(BB, jB) {
      return ZB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, ZB(BB, jB)
    }

    function AB(BB, jB, zB) {
      return (jB = TB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function TB(BB) {
      var jB = function(BB, jB) {
        if ("object" != fB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != fB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == fB(jB) ? jB : jB + ""
    }
    var PB = function(BB) {
      function jB() {
        var BB;
        ! function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, jB);
        for (var zB = arguments.length, QB = new Array(zB), nB = 0; nB < zB; nB++) QB[nB] = arguments[nB];
        return AB(BB = VB(this, jB, [].concat(QB)), "state", {
          isAnimationFinished: !0
        }), AB(BB, "id", (0, SB.D)("recharts-area-")), AB(BB, "handleAnimationEnd", (function() {
          var jB = BB.props.onAnimationEnd;
          BB.setState({
            isAnimationFinished: !0
          }), uB()(jB) && jB()
        })), AB(BB, "handleAnimationStart", (function() {
          var jB = BB.props.onAnimationStart;
          BB.setState({
            isAnimationFinished: !1
          }), uB()(jB) && jB()
        })), BB
      }
      return function(BB, jB) {
        if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(jB && jB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), jB && ZB(BB, jB)
      }(jB, BB), zB = jB, QB = [{
        key: "renderDots",
        value: function(BB, zB, QB) {
          var dB = this.props.isAnimationActive,
            IB = this.state.isAnimationFinished;
          if (dB && !IB) return null;
          var NB = this.props,
            uB = NB.dot,
            UB = NB.points,
            aB = NB.dataKey,
            pB = (0, EB.c)(this.props, !1),
            rB = (0, EB.c)(uB, !0),
            sB = UB.map((function(BB, zB) {
              var QB = FB(FB(FB({
                key: "dot-".concat(zB),
                r: 3
              }, pB), rB), {}, {
                index: zB,
                cx: BB.x,
                cy: BB.y,
                dataKey: aB,
                value: BB.value,
                payload: BB.payload,
                points: UB
              });
              return jB.renderDotItem(uB, QB)
            })),
            JB = {
              clipPath: BB ? "url(#clipPath-".concat(zB ? "" : "dots-").concat(QB, ")") : null
            };
          return nB.createElement(LB.e, HB({
            className: "recharts-area-dots"
          }, JB), sB)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(BB) {
          var jB = this.props,
            zB = jB.baseLine,
            QB = jB.points,
            dB = jB.strokeWidth,
            IB = QB[0].x,
            NB = QB[QB.length - 1].x,
            uB = BB * Math.abs(IB - NB),
            UB = aB()(QB.map((function(BB) {
              return BB.y || 0
            })));
          return (0, SB.x)(zB) && "number" === typeof zB ? UB = Math.max(zB, UB) : zB && Array.isArray(zB) && zB.length && (UB = Math.max(aB()(zB.map((function(BB) {
            return BB.y || 0
          }))), UB)), (0, SB.x)(UB) ? nB.createElement("rect", {
            x: IB < NB ? IB : IB - uB,
            y: 0,
            width: uB,
            height: Math.floor(UB + (dB ? parseInt("".concat(dB), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(BB) {
          var jB = this.props,
            zB = jB.baseLine,
            QB = jB.points,
            dB = jB.strokeWidth,
            IB = QB[0].y,
            NB = QB[QB.length - 1].y,
            uB = BB * Math.abs(IB - NB),
            UB = aB()(QB.map((function(BB) {
              return BB.x || 0
            })));
          return (0, SB.x)(zB) && "number" === typeof zB ? UB = Math.max(zB, UB) : zB && Array.isArray(zB) && zB.length && (UB = Math.max(aB()(zB.map((function(BB) {
            return BB.x || 0
          }))), UB)), (0, SB.x)(UB) ? nB.createElement("rect", {
            x: 0,
            y: IB < NB ? IB : IB - uB,
            width: UB + (dB ? parseInt("".concat(dB), 10) : 1),
            height: Math.floor(uB)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(BB) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(BB) : this.renderHorizontalRect(BB)
        }
      }, {
        key: "renderAreaStatically",
        value: function(BB, jB, zB, QB) {
          var dB = this.props,
            IB = dB.layout,
            NB = dB.type,
            uB = dB.stroke,
            UB = dB.connectNulls,
            aB = dB.isRange,
            pB = (dB.ref, oB(dB, iB));
          return nB.createElement(LB.e, {
            clipPath: zB ? "url(#clipPath-".concat(QB, ")") : null
          }, nB.createElement(kB.e, HB({}, (0, EB.c)(pB, !0), {
            points: BB,
            connectNulls: UB,
            type: NB,
            baseLine: jB,
            layout: IB,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== uB && nB.createElement(kB.e, HB({}, (0, EB.c)(this.props, !1), {
            className: "recharts-area-curve",
            layout: IB,
            type: NB,
            connectNulls: UB,
            fill: "none",
            points: BB
          })), "none" !== uB && aB && nB.createElement(kB.e, HB({}, (0, EB.c)(this.props, !1), {
            className: "recharts-area-curve",
            layout: IB,
            type: NB,
            connectNulls: UB,
            fill: "none",
            points: jB
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(BB, jB) {
          var zB = this,
            QB = this.props,
            dB = QB.points,
            NB = QB.baseLine,
            uB = QB.isAnimationActive,
            UB = QB.animationBegin,
            aB = QB.animationDuration,
            pB = QB.animationEasing,
            sB = QB.animationId,
            mB = this.state,
            yB = mB.prevPoints,
            kB = mB.prevBaseLine;
          return nB.createElement(IB.c, {
            Ds: UB,
            duration: aB,
            isActive: uB,
            easing: pB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(sB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(QB) {
            var IB = QB.t;
            if (yB) {
              var uB, UB = yB.length / dB.length,
                aB = dB.map((function(BB, jB) {
                  var zB = Math.floor(jB * UB);
                  if (yB[zB]) {
                    var QB = yB[zB],
                      nB = (0, SB.q)(QB.x, BB.x),
                      dB = (0, SB.q)(QB.y, BB.y);
                    return FB(FB({}, BB), {}, {
                      x: nB(IB),
                      y: dB(IB)
                    })
                  }
                  return BB
                }));
              return uB = (0, SB.x)(NB) && "number" === typeof NB ? (0, SB.q)(kB, NB)(IB) : rB()(NB) || JB()(NB) ? (0, SB.q)(kB, 0)(IB) : NB.map((function(BB, jB) {
                var zB = Math.floor(jB * UB);
                if (kB[zB]) {
                  var QB = kB[zB],
                    nB = (0, SB.q)(QB.x, BB.x),
                    dB = (0, SB.q)(QB.y, BB.y);
                  return FB(FB({}, BB), {}, {
                    x: nB(IB),
                    y: dB(IB)
                  })
                }
                return BB
              })), zB.renderAreaStatically(aB, uB, BB, jB)
            }
            return nB.createElement(LB.e, null, nB.createElement("defs", null, nB.createElement("clipPath", {
              id: "animationClipPath-".concat(jB)
            }, zB.renderClipRect(IB))), nB.createElement(LB.e, {
              clipPath: "url(#animationClipPath-".concat(jB, ")")
            }, zB.renderAreaStatically(dB, NB, BB, jB)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(BB, jB) {
          var zB = this.props,
            QB = zB.points,
            nB = zB.baseLine,
            dB = zB.isAnimationActive,
            IB = this.state,
            NB = IB.prevPoints,
            uB = IB.prevBaseLine,
            UB = IB.totalLength;
          return dB && QB && QB.length && (!NB && UB > 0 || !yB()(NB, QB) || !yB()(uB, nB)) ? this.renderAreaWithAnimation(BB, jB) : this.renderAreaStatically(QB, nB, BB, jB)
        }
      }, {
        key: "render",
        value: function() {
          var BB, jB = this.props,
            zB = jB.hide,
            QB = jB.dot,
            IB = jB.points,
            NB = jB.className,
            uB = jB.top,
            UB = jB.left,
            aB = jB.xAxis,
            pB = jB.yAxis,
            sB = jB.width,
            JB = jB.height,
            mB = jB.isAnimationActive,
            yB = jB.id;
          if (zB || !IB || !IB.length) return null;
          var kB = this.state.isAnimationFinished,
            GB = 1 === IB.length,
            tB = (0, dB.e)("recharts-area", NB),
            SB = aB && aB.allowDataOverflow,
            MB = pB && pB.allowDataOverflow,
            iB = SB || MB,
            qB = rB()(yB) ? this.id : yB,
            fB = null !== (BB = (0, EB.c)(QB, !1)) && void 0 !== BB ? BB : {
              r: 3,
              strokeWidth: 2
            },
            oB = fB.r,
            HB = void 0 === oB ? 3 : oB,
            DB = fB.strokeWidth,
            FB = void 0 === DB ? 2 : DB,
            YB = ((0, EB.t)(QB) ? QB : {}).clipDot,
            VB = void 0 === YB || YB,
            hB = 2 * HB + FB;
          return nB.createElement(LB.e, {
            className: tB
          }, SB || MB ? nB.createElement("defs", null, nB.createElement("clipPath", {
            id: "clipPath-".concat(qB)
          }, nB.createElement("rect", {
            x: SB ? UB : UB - sB / 2,
            y: MB ? uB : uB - JB / 2,
            width: SB ? sB : 2 * sB,
            height: MB ? JB : 2 * JB
          })), !VB && nB.createElement("clipPath", {
            id: "clipPath-dots-".concat(qB)
          }, nB.createElement("rect", {
            x: UB - hB / 2,
            y: uB - hB / 2,
            width: sB + hB,
            height: JB + hB
          }))) : null, GB ? null : this.renderArea(iB, qB), (QB || GB) && this.renderDots(iB, VB, qB), (!mB || kB) && gB.e.renderCallByParent(this.props, IB))
        }
      }], NB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, jB) {
          return BB.animationId !== jB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curPoints: BB.points,
            curBaseLine: BB.baseLine,
            prevPoints: jB.curPoints,
            prevBaseLine: jB.curBaseLine
          } : BB.points !== jB.curPoints || BB.baseLine !== jB.curBaseLine ? {
            curPoints: BB.points,
            curBaseLine: BB.baseLine
          } : null
        }
      }], QB && YB(zB.prototype, QB), NB && YB(zB, NB), Object.defineProperty(zB, "prototype", {
        writable: !1
      }), zB;
      var zB, QB, NB
    }(nB.PureComponent);
    QB = PB, AB(PB, "displayName", "Area"), AB(PB, "defaultProps", {
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
      isAnimationActive: !tB.c.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), AB(PB, "getBaseValue", (function(BB, jB, zB, QB) {
      var nB = BB.layout,
        dB = BB.baseValue,
        IB = jB.props.baseValue,
        NB = null !== IB && void 0 !== IB ? IB : dB;
      if ((0, SB.x)(NB) && "number" === typeof NB) return NB;
      var uB = "horizontal" === nB ? QB : zB,
        UB = uB.scale.domain();
      if ("number" === uB.type) {
        var aB = Math.max(UB[0], UB[1]),
          pB = Math.min(UB[0], UB[1]);
        return "dataMin" === NB ? pB : "dataMax" === NB || aB < 0 ? aB : Math.max(Math.min(UB[0], UB[1]), 0)
      }
      return "dataMin" === NB ? UB[0] : "dataMax" === NB ? UB[1] : UB[0]
    })), AB(PB, "getComposedData", (function(BB) {
      var jB, zB = BB.props,
        nB = BB.item,
        dB = BB.xAxis,
        IB = BB.yAxis,
        NB = BB.xAxisTicks,
        uB = BB.yAxisTicks,
        UB = BB.bandSize,
        aB = BB.dataKey,
        pB = BB.stackedData,
        rB = BB.dataStartIndex,
        sB = BB.displayedData,
        JB = BB.offset,
        mB = zB.layout,
        yB = pB && pB.length,
        kB = QB.getBaseValue(zB, nB, dB, IB),
        GB = "horizontal" === mB,
        LB = !1,
        gB = sB.map((function(BB, jB) {
          var zB;
          yB ? zB = pB[rB + jB] : (zB = (0, MB.Y)(BB, aB), Array.isArray(zB) ? LB = !0 : zB = [kB, zB]);
          var QB = null == zB[1] || yB && null == (0, MB.Y)(BB, aB);
          return GB ? {
            x: (0, MB.A)({
              axis: dB,
              ticks: NB,
              bandSize: UB,
              entry: BB,
              index: jB
            }),
            y: QB ? null : IB.scale(zB[1]),
            value: zB,
            payload: BB
          } : {
            x: QB ? null : dB.scale(zB[1]),
            y: (0, MB.A)({
              axis: IB,
              ticks: uB,
              bandSize: UB,
              entry: BB,
              index: jB
            }),
            value: zB,
            payload: BB
          }
        }));
      return jB = yB || LB ? gB.map((function(BB) {
        var jB = Array.isArray(BB.value) ? BB.value[0] : null;
        return GB ? {
          x: BB.x,
          y: null != jB && null != BB.y ? IB.scale(jB) : null
        } : {
          x: null != jB ? dB.scale(jB) : null,
          y: BB.y
        }
      })) : GB ? IB.scale(kB) : dB.scale(kB), FB({
        points: gB,
        baseLine: jB,
        layout: mB,
        isRange: LB
      }, JB)
    })), AB(PB, "renderDotItem", (function(BB, jB) {
      var zB;
      if (nB.isValidElement(BB)) zB = nB.cloneElement(BB, jB);
      else if (uB()(BB)) zB = BB(jB);
      else {
        var QB = (0, dB.e)("recharts-area-dot", "boolean" !== typeof BB ? BB.className : ""),
          IB = jB.key,
          NB = oB(jB, qB);
        zB = nB.createElement(GB.b, HB({}, NB, {
          key: IB,
          className: QB
        }))
      }
      return zB
    }))
  },
  6251: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => xB
    });
    var QB = zB(62),
      nB = zB(5146),
      dB = zB(6102),
      IB = zB(6176),
      NB = zB.n(IB),
      uB = zB(5453),
      UB = zB.n(uB),
      aB = zB(5975),
      pB = zB(6186),
      rB = zB(6255),
      sB = zB(6257),
      JB = zB(5229),
      mB = zB(5463),
      yB = zB(5981),
      kB = zB(6121),
      GB = zB(5485),
      LB = zB(5961),
      gB = zB(6268),
      tB = ["x", "y"];

    function SB(BB) {
      return SB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, SB(BB)
    }

    function MB() {
      return MB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, MB.apply(this, arguments)
    }

    function EB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function iB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? EB(Object(zB), !0).forEach((function(jB) {
          qB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : EB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function qB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != SB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != SB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == SB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function fB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function oB(BB, jB) {
      var zB = BB.x,
        QB = BB.y,
        nB = fB(BB, tB),
        dB = "".concat(zB),
        IB = parseInt(dB, 10),
        NB = "".concat(QB),
        uB = parseInt(NB, 10),
        UB = "".concat(jB.height || nB.height),
        aB = parseInt(UB, 10),
        pB = "".concat(jB.width || nB.width),
        rB = parseInt(pB, 10);
      return iB(iB(iB(iB(iB({}, jB), nB), IB ? {
        x: IB
      } : {}), uB ? {
        y: uB
      } : {}), {}, {
        height: aB,
        width: rB,
        name: jB.name,
        radius: jB.radius
      })
    }

    function HB(BB) {
      return QB.createElement(gB.b, MB({
        shapeType: "rectangle",
        propTransformer: oB,
        activeClassName: "recharts-active-bar"
      }, BB))
    }
    var DB, FB = ["value", "background"];

    function YB(BB) {
      return YB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, YB(BB)
    }

    function VB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function hB() {
      return hB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, hB.apply(this, arguments)
    }

    function XB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function ZB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? XB(Object(zB), !0).forEach((function(jB) {
          lB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : XB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function AB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, wB(QB.key), QB)
      }
    }

    function TB(BB, jB, zB) {
      return jB = WB(jB),
        function(BB, jB) {
          if (jB && ("object" === YB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, PB() ? Reflect.construct(jB, zB || [], WB(BB).constructor) : jB.apply(BB, zB))
    }

    function PB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (PB = function() {
        return !!BB
      })()
    }

    function WB(BB) {
      return WB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, WB(BB)
    }

    function eB(BB, jB) {
      return eB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, eB(BB, jB)
    }

    function lB(BB, jB, zB) {
      return (jB = wB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function wB(BB) {
      var jB = function(BB, jB) {
        if ("object" != YB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != YB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == YB(jB) ? jB : jB + ""
    }
    var xB = function(BB) {
      function jB() {
        var BB;
        ! function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, jB);
        for (var zB = arguments.length, QB = new Array(zB), nB = 0; nB < zB; nB++) QB[nB] = arguments[nB];
        return lB(BB = TB(this, jB, [].concat(QB)), "state", {
          isAnimationFinished: !1
        }), lB(BB, "id", (0, JB.D)("recharts-bar-")), lB(BB, "handleAnimationEnd", (function() {
          var jB = BB.props.onAnimationEnd;
          BB.setState({
            isAnimationFinished: !0
          }), jB && jB()
        })), lB(BB, "handleAnimationStart", (function() {
          var jB = BB.props.onAnimationStart;
          BB.setState({
            isAnimationFinished: !1
          }), jB && jB()
        })), BB
      }
      return function(BB, jB) {
        if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(jB && jB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), jB && eB(BB, jB)
      }(jB, BB), zB = jB, IB = [{
        key: "renderRectanglesStatically",
        value: function(BB) {
          var jB = this,
            zB = this.props,
            nB = zB.shape,
            dB = zB.dataKey,
            IB = zB.activeIndex,
            NB = zB.activeBar,
            uB = (0, mB.c)(this.props, !1);
          return BB && BB.map((function(BB, zB) {
            var UB = zB === IB,
              pB = UB ? NB : nB,
              rB = ZB(ZB(ZB({}, uB), BB), {}, {
                isActive: UB,
                option: pB,
                index: zB,
                dataKey: dB,
                onAnimationStart: jB.handleAnimationStart,
                onAnimationEnd: jB.handleAnimationEnd
              });
            return QB.createElement(aB.e, hB({
              className: "recharts-bar-rectangle"
            }, (0, GB.m)(jB.props, BB, zB), {
              key: "rectangle-".concat(null === BB || void 0 === BB ? void 0 : BB.x, "-").concat(null === BB || void 0 === BB ? void 0 : BB.y, "-").concat(null === BB || void 0 === BB ? void 0 : BB.value, "-").concat(zB)
            }), QB.createElement(HB, rB))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var BB = this,
            jB = this.props,
            zB = jB.data,
            nB = jB.layout,
            IB = jB.isAnimationActive,
            NB = jB.animationBegin,
            uB = jB.animationDuration,
            UB = jB.animationEasing,
            pB = jB.animationId,
            rB = this.state.prevData;
          return QB.createElement(dB.c, {
            Ds: NB,
            duration: uB,
            isActive: IB,
            easing: UB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(pB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(jB) {
            var dB = jB.t,
              IB = zB.map((function(BB, jB) {
                var zB = rB && rB[jB];
                if (zB) {
                  var QB = (0, JB.q)(zB.x, BB.x),
                    IB = (0, JB.q)(zB.y, BB.y),
                    NB = (0, JB.q)(zB.width, BB.width),
                    uB = (0, JB.q)(zB.height, BB.height);
                  return ZB(ZB({}, BB), {}, {
                    x: QB(dB),
                    y: IB(dB),
                    width: NB(dB),
                    height: uB(dB)
                  })
                }
                if ("horizontal" === nB) {
                  var UB = (0, JB.q)(0, BB.height)(dB);
                  return ZB(ZB({}, BB), {}, {
                    y: BB.y + BB.height - UB,
                    height: UB
                  })
                }
                var aB = (0, JB.q)(0, BB.width)(dB);
                return ZB(ZB({}, BB), {}, {
                  width: aB
                })
              }));
            return QB.createElement(aB.e, null, BB.renderRectanglesStatically(IB))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var BB = this.props,
            jB = BB.data,
            zB = BB.isAnimationActive,
            QB = this.state.prevData;
          return !(zB && jB && jB.length) || QB && NB()(QB, jB) ? this.renderRectanglesStatically(jB) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var BB = this,
            jB = this.props,
            zB = jB.data,
            nB = jB.dataKey,
            dB = jB.activeIndex,
            IB = (0, mB.c)(this.props.background, !1);
          return zB.map((function(jB, zB) {
            jB.value;
            var NB = jB.background,
              uB = VB(jB, FB);
            if (!NB) return null;
            var UB = ZB(ZB(ZB(ZB(ZB({}, uB), {}, {
              fill: "#eee"
            }, NB), IB), (0, GB.m)(BB.props, jB, zB)), {}, {
              onAnimationStart: BB.handleAnimationStart,
              onAnimationEnd: BB.handleAnimationEnd,
              dataKey: nB,
              index: zB,
              className: "recharts-bar-background-rectangle"
            });
            return QB.createElement(HB, hB({
              key: "background-bar-".concat(zB),
              option: BB.props.background,
              isActive: zB === dB
            }, UB))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(BB, jB) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var zB = this.props,
            nB = zB.data,
            dB = zB.xAxis,
            IB = zB.yAxis,
            NB = zB.layout,
            uB = zB.children,
            UB = (0, mB.g)(uB, pB.b);
          if (!UB) return null;
          var rB = "vertical" === NB ? nB[0].height / 2 : nB[0].width / 2,
            sB = function(BB, jB) {
              var zB = Array.isArray(BB.value) ? BB.value[1] : BB.value;
              return {
                x: BB.x,
                y: BB.y,
                value: zB,
                errorVal: (0, kB.Y)(BB, jB)
              }
            },
            JB = {
              clipPath: BB ? "url(#clipPath-".concat(jB, ")") : null
            };
          return QB.createElement(aB.e, JB, UB.map((function(BB) {
            return QB.cloneElement(BB, {
              key: "error-bar-".concat(jB, "-").concat(BB.props.dataKey),
              data: nB,
              xAxis: dB,
              yAxis: IB,
              layout: NB,
              offset: rB,
              dataPointFormatter: sB
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var BB = this.props,
            jB = BB.hide,
            zB = BB.data,
            dB = BB.className,
            IB = BB.xAxis,
            NB = BB.yAxis,
            uB = BB.left,
            pB = BB.top,
            rB = BB.width,
            JB = BB.height,
            mB = BB.isAnimationActive,
            yB = BB.background,
            kB = BB.id;
          if (jB || !zB || !zB.length) return null;
          var GB = this.state.isAnimationFinished,
            LB = (0, nB.e)("recharts-bar", dB),
            gB = IB && IB.allowDataOverflow,
            tB = NB && NB.allowDataOverflow,
            SB = gB || tB,
            MB = UB()(kB) ? this.id : kB;
          return QB.createElement(aB.e, {
            className: LB
          }, gB || tB ? QB.createElement("defs", null, QB.createElement("clipPath", {
            id: "clipPath-".concat(MB)
          }, QB.createElement("rect", {
            x: gB ? uB : uB - rB / 2,
            y: tB ? pB : pB - JB / 2,
            width: gB ? rB : 2 * rB,
            height: tB ? JB : 2 * JB
          }))) : null, QB.createElement(aB.e, {
            className: "recharts-bar-rectangles",
            clipPath: SB ? "url(#clipPath-".concat(MB, ")") : null
          }, yB ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(SB, MB), (!mB || GB) && sB.e.renderCallByParent(this.props, zB))
        }
      }], uB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, jB) {
          return BB.animationId !== jB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curData: BB.data,
            prevData: jB.curData
          } : BB.data !== jB.curData ? {
            curData: BB.data
          } : null
        }
      }], IB && AB(zB.prototype, IB), uB && AB(zB, uB), Object.defineProperty(zB, "prototype", {
        writable: !1
      }), zB;
      var zB, IB, uB
    }(QB.PureComponent);
    DB = xB, lB(xB, "displayName", "Bar"), lB(xB, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !yB.c.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), lB(xB, "getComposedData", (function(BB) {
      var jB = BB.props,
        zB = BB.item,
        QB = BB.barPosition,
        nB = BB.bandSize,
        dB = BB.xAxis,
        IB = BB.yAxis,
        NB = BB.xAxisTicks,
        uB = BB.yAxisTicks,
        UB = BB.stackedData,
        aB = BB.dataStartIndex,
        pB = BB.displayedData,
        sB = BB.offset,
        yB = (0, kB.m)(QB, zB);
      if (!yB) return null;
      var GB = jB.layout,
        gB = zB.type.defaultProps,
        tB = void 0 !== gB ? ZB(ZB({}, gB), zB.props) : zB.props,
        SB = tB.dataKey,
        MB = tB.children,
        EB = tB.minPointSize,
        iB = "horizontal" === GB ? IB : dB,
        qB = UB ? iB.scale.domain() : null,
        fB = (0, kB.y)({
          numericAxis: iB
        }),
        oB = (0, mB.g)(MB, rB.e),
        HB = pB.map((function(BB, jB) {
          var QB, pB, rB, sB, mB, gB;
          UB ? QB = (0, kB.kb)(UB[aB + jB], qB) : (QB = (0, kB.Y)(BB, SB), Array.isArray(QB) || (QB = [fB, QB]));
          var tB = function(BB) {
            var jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(zB, QB) {
              if ("number" === typeof BB) return BB;
              var nB = (0, JB.x)(zB) || (0, JB.u)(zB);
              return nB ? BB(zB, QB) : (nB || (0, LB.e)(!1), jB)
            }
          }(EB, DB.defaultProps.minPointSize)(QB[1], jB);
          if ("horizontal" === GB) {
            var MB, iB = [IB.scale(QB[0]), IB.scale(QB[1])],
              HB = iB[0],
              FB = iB[1];
            pB = (0, kB.z)({
              axis: dB,
              ticks: NB,
              bandSize: nB,
              offset: yB.offset,
              entry: BB,
              index: jB
            }), rB = null !== (MB = null !== FB && void 0 !== FB ? FB : HB) && void 0 !== MB ? MB : void 0, sB = yB.size;
            var YB = HB - FB;
            if (mB = Number.isNaN(YB) ? 0 : YB, gB = {
                x: pB,
                y: IB.y,
                width: sB,
                height: IB.height
              }, Math.abs(tB) > 0 && Math.abs(mB) < Math.abs(tB)) {
              var VB = (0, JB.B)(mB || tB) * (Math.abs(tB) - Math.abs(mB));
              rB -= VB, mB += VB
            }
          } else {
            var hB = [dB.scale(QB[0]), dB.scale(QB[1])],
              XB = hB[0],
              AB = hB[1];
            if (pB = XB, rB = (0, kB.z)({
                axis: IB,
                ticks: uB,
                bandSize: nB,
                offset: yB.offset,
                entry: BB,
                index: jB
              }), sB = AB - XB, mB = yB.size, gB = {
                x: dB.x,
                y: rB,
                width: dB.width,
                height: mB
              }, Math.abs(tB) > 0 && Math.abs(sB) < Math.abs(tB)) sB += (0, JB.B)(sB || tB) * (Math.abs(tB) - Math.abs(sB))
          }
          return ZB(ZB(ZB({}, BB), {}, {
            x: pB,
            y: rB,
            width: sB,
            height: mB,
            value: UB ? QB : QB[1],
            payload: BB,
            background: gB
          }, oB && oB[jB] && oB[jB].props), {}, {
            tooltipPayload: [(0, kB.U)(zB, BB)],
            tooltipPosition: {
              x: pB + sB / 2,
              y: rB + mB / 2
            }
          })
        }));
      return ZB({
        data: HB,
        layout: GB
      }, sB)
    }))
  },
  6349: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => YB
    });
    var QB = zB(62),
      nB = zB(5319),
      dB = zB.n(nB),
      IB = zB(5252),
      NB = zB.n(IB),
      uB = zB(5146),
      UB = zB(5476),
      aB = zB(5975),
      pB = zB(6111),
      rB = zB(6205),
      sB = zB(5229),
      JB = zB(5485),
      mB = zB(5463),
      yB = zB(6353),
      kB = ["viewBox"],
      GB = ["viewBox"],
      LB = ["ticks"];

    function gB(BB) {
      return gB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, gB(BB)
    }

    function tB() {
      return tB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, tB.apply(this, arguments)
    }

    function SB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function MB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? SB(Object(zB), !0).forEach((function(jB) {
          DB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : SB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function EB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function iB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, FB(QB.key), QB)
      }
    }

    function qB(BB, jB, zB) {
      return jB = oB(jB),
        function(BB, jB) {
          if (jB && ("object" === gB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, fB() ? Reflect.construct(jB, zB || [], oB(BB).constructor) : jB.apply(BB, zB))
    }

    function fB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (fB = function() {
        return !!BB
      })()
    }

    function oB(BB) {
      return oB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, oB(BB)
    }

    function HB(BB, jB) {
      return HB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, HB(BB, jB)
    }

    function DB(BB, jB, zB) {
      return (jB = FB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function FB(BB) {
      var jB = function(BB, jB) {
        if ("object" != gB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != gB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == gB(jB) ? jB : jB + ""
    }
    var YB = function(BB) {
      function jB(BB) {
        var zB;
        return function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, jB), (zB = qB(this, jB, [BB])).state = {
          fontSize: "",
          letterSpacing: ""
        }, zB
      }
      return function(BB, jB) {
        if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(jB && jB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), jB && HB(BB, jB)
      }(jB, BB), zB = jB, IB = [{
        key: "renderTickItem",
        value: function(BB, jB, zB) {
          var nB = (0, uB.e)(jB.className, "recharts-cartesian-axis-tick-value");
          return QB.isValidElement(BB) ? QB.cloneElement(BB, MB(MB({}, jB), {}, {
            className: nB
          })) : dB()(BB) ? BB(MB(MB({}, jB), {}, {
            className: nB
          })) : QB.createElement(pB.b, tB({}, jB, {
            className: "recharts-cartesian-axis-tick-value"
          }), zB)
        }
      }], (nB = [{
        key: "shouldComponentUpdate",
        value: function(BB, jB) {
          var zB = BB.viewBox,
            QB = EB(BB, kB),
            nB = this.props,
            dB = nB.viewBox,
            IB = EB(nB, GB);
          return !(0, UB.c)(zB, dB) || !(0, UB.c)(QB, IB) || !(0, UB.c)(jB, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var BB = this.layerReference;
          if (BB) {
            var jB = BB.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            jB && this.setState({
              fontSize: window.getComputedStyle(jB).fontSize,
              letterSpacing: window.getComputedStyle(jB).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(BB) {
          var jB, zB, QB, nB, dB, IB, NB = this.props,
            uB = NB.x,
            UB = NB.y,
            aB = NB.width,
            pB = NB.height,
            rB = NB.orientation,
            JB = NB.tickSize,
            mB = NB.mirror,
            yB = NB.tickMargin,
            kB = mB ? -1 : 1,
            GB = BB.tickSize || JB,
            LB = (0, sB.x)(BB.tickCoord) ? BB.tickCoord : BB.coordinate;
          switch (rB) {
            case "top":
              jB = zB = BB.coordinate, IB = (QB = (nB = UB + +!mB * pB) - kB * GB) - kB * yB, dB = LB;
              break;
            case "left":
              QB = nB = BB.coordinate, dB = (jB = (zB = uB + +!mB * aB) - kB * GB) - kB * yB, IB = LB;
              break;
            case "right":
              QB = nB = BB.coordinate, dB = (jB = (zB = uB + +mB * aB) + kB * GB) + kB * yB, IB = LB;
              break;
            default:
              jB = zB = BB.coordinate, IB = (QB = (nB = UB + +mB * pB) + kB * GB) + kB * yB, dB = LB
          }
          return {
            line: {
              x1: jB,
              y1: QB,
              x2: zB,
              y2: nB
            },
            vp: {
              x: dB,
              y: IB
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var BB, jB = this.props,
            zB = jB.orientation,
            QB = jB.mirror;
          switch (zB) {
            case "left":
              BB = QB ? "start" : "end";
              break;
            case "right":
              BB = QB ? "end" : "start";
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
            jB = BB.orientation,
            zB = BB.mirror,
            QB = "end";
          switch (jB) {
            case "left":
            case "right":
              QB = "middle";
              break;
            case "top":
              QB = zB ? "start" : "end";
              break;
            default:
              QB = zB ? "end" : "start"
          }
          return QB
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var BB = this.props,
            jB = BB.x,
            zB = BB.y,
            nB = BB.width,
            dB = BB.height,
            IB = BB.orientation,
            UB = BB.mirror,
            aB = BB.axisLine,
            pB = MB(MB(MB({}, (0, mB.c)(this.props, !1)), (0, mB.c)(aB, !1)), {}, {
              fill: "none"
            });
          if ("top" === IB || "bottom" === IB) {
            var rB = +("top" === IB && !UB || "bottom" === IB && UB);
            pB = MB(MB({}, pB), {}, {
              x1: jB,
              y1: zB + rB * dB,
              x2: jB + nB,
              y2: zB + rB * dB
            })
          } else {
            var sB = +("left" === IB && !UB || "right" === IB && UB);
            pB = MB(MB({}, pB), {}, {
              x1: jB + sB * nB,
              y1: zB,
              x2: jB + sB * nB,
              y2: zB + dB
            })
          }
          return QB.createElement("line", tB({}, pB, {
            className: (0, uB.e)("recharts-cartesian-axis-line", NB()(aB, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(BB, zB, nB) {
          var IB = this,
            UB = this.props,
            pB = UB.tickLine,
            rB = UB.stroke,
            sB = UB.vp,
            kB = UB.tickFormatter,
            GB = UB.unit,
            LB = (0, yB.c)(MB(MB({}, this.props), {}, {
              ticks: BB
            }), zB, nB),
            gB = this.getTickTextAnchor(),
            SB = this.getTickVerticalAnchor(),
            EB = (0, mB.c)(this.props, !1),
            iB = (0, mB.c)(sB, !1),
            qB = MB(MB({}, EB), {}, {
              fill: "none"
            }, (0, mB.c)(pB, !1)),
            fB = LB.map((function(BB, zB) {
              var nB = IB.getTickLineCoord(BB),
                UB = nB.line,
                mB = nB.vp,
                yB = MB(MB(MB(MB({
                  textAnchor: gB,
                  verticalAnchor: SB
                }, EB), {}, {
                  stroke: "none",
                  fill: rB
                }, iB), mB), {}, {
                  index: zB,
                  payload: BB,
                  visibleTicksCount: LB.length,
                  tickFormatter: kB
                });
              return QB.createElement(aB.e, tB({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(BB.value, "-").concat(BB.coordinate, "-").concat(BB.tickCoord)
              }, (0, JB.m)(IB.props, BB, zB)), pB && QB.createElement("line", tB({}, qB, UB, {
                className: (0, uB.e)("recharts-cartesian-axis-tick-line", NB()(pB, "className"))
              })), sB && jB.renderTickItem(sB, yB, "".concat(dB()(kB) ? kB(BB.value, zB) : BB.value).concat(GB || "")))
            }));
          return QB.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, fB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this,
            jB = this.props,
            zB = jB.axisLine,
            nB = jB.width,
            IB = jB.height,
            NB = jB.ticksGenerator,
            UB = jB.className;
          if (jB.hide) return null;
          var pB = this.props,
            sB = pB.ticks,
            JB = EB(pB, LB),
            mB = sB;
          return dB()(NB) && (mB = sB && sB.length > 0 ? NB(this.props) : NB(JB)), nB <= 0 || IB <= 0 || !mB || !mB.length ? null : QB.createElement(aB.e, {
            className: (0, uB.e)("recharts-cartesian-axis", UB),
            ref: function(jB) {
              BB.layerReference = jB
            }
          }, zB && this.renderAxisLine(), this.renderTicks(mB, this.state.fontSize, this.state.letterSpacing), rB.c.renderCallByParent(this.props))
        }
      }]) && iB(zB.prototype, nB), IB && iB(zB, IB), Object.defineProperty(zB, "prototype", {
        writable: !1
      }), zB;
      var zB, nB, IB
    }(QB.Component);
    DB(YB, "displayName", "CartesianAxis"), DB(YB, "defaultProps", {
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
      vp: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6370: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => DB
    });
    var QB = zB(62),
      nB = zB(5319),
      dB = zB.n(nB),
      IB = zB(5458),
      NB = zB(5229),
      uB = zB(5463),
      UB = zB(6121),
      aB = zB(6353),
      pB = zB(6349),
      rB = zB(6307),
      sB = ["x1", "y1", "x2", "y2", "key"],
      JB = ["offset"];

    function mB(BB) {
      return mB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, mB(BB)
    }

    function yB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function kB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? yB(Object(zB), !0).forEach((function(jB) {
          GB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : yB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function GB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != mB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != mB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == mB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function LB() {
      return LB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, LB.apply(this, arguments)
    }

    function gB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }
    var tB = function(BB) {
      var jB = BB.fill;
      if (!jB || "none" === jB) return null;
      var zB = BB.fillOpacity,
        nB = BB.x,
        dB = BB.y,
        IB = BB.width,
        NB = BB.height,
        uB = BB.ry;
      return QB.createElement("rect", {
        x: nB,
        y: dB,
        ry: uB,
        width: IB,
        height: NB,
        stroke: "none",
        fill: jB,
        fillOpacity: zB,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function SB(BB, jB) {
      var zB;
      if (QB.isValidElement(BB)) zB = QB.cloneElement(BB, jB);
      else if (dB()(BB)) zB = BB(jB);
      else {
        var nB = jB.x1,
          IB = jB.y1,
          NB = jB.x2,
          UB = jB.y2,
          aB = jB.key,
          pB = gB(jB, sB),
          rB = (0, uB.c)(pB, !1),
          mB = (rB.offset, gB(rB, JB));
        zB = QB.createElement("line", LB({}, mB, {
          x1: nB,
          y1: IB,
          x2: NB,
          y2: UB,
          fill: "none",
          key: aB
        }))
      }
      return zB
    }

    function MB(BB) {
      var jB = BB.x,
        zB = BB.width,
        nB = BB.horizontal,
        dB = void 0 === nB || nB,
        IB = BB.horizontalPoints;
      if (!dB || !IB || !IB.length) return null;
      var NB = IB.map((function(QB, nB) {
        var IB = kB(kB({}, BB), {}, {
          x1: jB,
          y1: QB,
          x2: jB + zB,
          y2: QB,
          key: "line-".concat(nB),
          index: nB
        });
        return SB(dB, IB)
      }));
      return QB.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, NB)
    }

    function EB(BB) {
      var jB = BB.y,
        zB = BB.height,
        nB = BB.vertical,
        dB = void 0 === nB || nB,
        IB = BB.verticalPoints;
      if (!dB || !IB || !IB.length) return null;
      var NB = IB.map((function(QB, nB) {
        var IB = kB(kB({}, BB), {}, {
          x1: QB,
          y1: jB,
          x2: QB,
          y2: jB + zB,
          key: "line-".concat(nB),
          index: nB
        });
        return SB(dB, IB)
      }));
      return QB.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, NB)
    }

    function iB(BB) {
      var jB = BB.horizontalFill,
        zB = BB.fillOpacity,
        nB = BB.x,
        dB = BB.y,
        IB = BB.width,
        NB = BB.height,
        uB = BB.horizontalPoints,
        UB = BB.horizontal;
      if (!(void 0 === UB || UB) || !jB || !jB.length) return null;
      var aB = uB.map((function(BB) {
        return Math.round(BB + dB - dB)
      })).sort((function(BB, jB) {
        return BB - jB
      }));
      dB !== aB[0] && aB.unshift(0);
      var pB = aB.map((function(BB, uB) {
        var UB = !aB[uB + 1] ? dB + NB - BB : aB[uB + 1] - BB;
        if (UB <= 0) return null;
        var pB = uB % jB.length;
        return QB.createElement("rect", {
          key: "react-".concat(uB),
          y: BB,
          x: nB,
          height: UB,
          width: IB,
          stroke: "none",
          fill: jB[pB],
          fillOpacity: zB,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return QB.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, pB)
    }

    function qB(BB) {
      var jB = BB.vertical,
        zB = void 0 === jB || jB,
        nB = BB.verticalFill,
        dB = BB.fillOpacity,
        IB = BB.x,
        NB = BB.y,
        uB = BB.width,
        UB = BB.height,
        aB = BB.verticalPoints;
      if (!zB || !nB || !nB.length) return null;
      var pB = aB.map((function(BB) {
        return Math.round(BB + IB - IB)
      })).sort((function(BB, jB) {
        return BB - jB
      }));
      IB !== pB[0] && pB.unshift(0);
      var rB = pB.map((function(BB, jB) {
        var zB = !pB[jB + 1] ? IB + uB - BB : pB[jB + 1] - BB;
        if (zB <= 0) return null;
        var aB = jB % nB.length;
        return QB.createElement("rect", {
          key: "react-".concat(jB),
          x: BB,
          y: NB,
          width: zB,
          height: UB,
          stroke: "none",
          fill: nB[aB],
          fillOpacity: dB,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return QB.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, rB)
    }
    var fB = function(BB, jB) {
        var zB = BB.xAxis,
          QB = BB.width,
          nB = BB.height,
          dB = BB.offset;
        return (0, UB.E)((0, aB.c)(kB(kB(kB({}, pB.e.defaultProps), zB), {}, {
          ticks: (0, UB.R)(zB, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: QB,
            height: nB
          }
        })), dB.left, dB.left + dB.width, jB)
      },
      oB = function(BB, jB) {
        var zB = BB.yAxis,
          QB = BB.width,
          nB = BB.height,
          dB = BB.offset;
        return (0, UB.E)((0, aB.c)(kB(kB(kB({}, pB.e.defaultProps), zB), {}, {
          ticks: (0, UB.R)(zB, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: QB,
            height: nB
          }
        })), dB.top, dB.top + dB.height, jB)
      },
      HB = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function DB(BB) {
      var jB, zB, nB, uB, UB, aB, pB = (0, rB.l)(),
        sB = (0, rB.i)(),
        JB = (0, rB.q)(),
        yB = kB(kB({}, BB), {}, {
          stroke: null !== (jB = BB.stroke) && void 0 !== jB ? jB : HB.stroke,
          fill: null !== (zB = BB.fill) && void 0 !== zB ? zB : HB.fill,
          horizontal: null !== (nB = BB.horizontal) && void 0 !== nB ? nB : HB.horizontal,
          horizontalFill: null !== (uB = BB.horizontalFill) && void 0 !== uB ? uB : HB.horizontalFill,
          vertical: null !== (UB = BB.vertical) && void 0 !== UB ? UB : HB.vertical,
          verticalFill: null !== (aB = BB.verticalFill) && void 0 !== aB ? aB : HB.verticalFill,
          x: (0, NB.x)(BB.x) ? BB.x : JB.left,
          y: (0, NB.x)(BB.y) ? BB.y : JB.top,
          width: (0, NB.x)(BB.width) ? BB.width : JB.width,
          height: (0, NB.x)(BB.height) ? BB.height : JB.height
        }),
        GB = yB.x,
        gB = yB.y,
        SB = yB.width,
        DB = yB.height,
        FB = yB.syncWithTicks,
        YB = yB.horizontalValues,
        VB = yB.verticalValues,
        hB = (0, rB.e)(),
        XB = (0, rB.D)();
      if (!(0, NB.x)(SB) || SB <= 0 || !(0, NB.x)(DB) || DB <= 0 || !(0, NB.x)(GB) || GB !== +GB || !(0, NB.x)(gB) || gB !== +gB) return null;
      var ZB = yB.verticalCoordinatesGenerator || fB,
        AB = yB.horizontalCoordinatesGenerator || oB,
        TB = yB.horizontalPoints,
        PB = yB.verticalPoints;
      if ((!TB || !TB.length) && dB()(AB)) {
        var WB = YB && YB.length,
          eB = AB({
            yAxis: XB ? kB(kB({}, XB), {}, {
              ticks: WB ? YB : XB.ticks
            }) : void 0,
            width: pB,
            height: sB,
            offset: JB
          }, !!WB || FB);
        (0, IB.e)(Array.isArray(eB), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(mB(eB), "]")), Array.isArray(eB) && (TB = eB)
      }
      if ((!PB || !PB.length) && dB()(ZB)) {
        var lB = VB && VB.length,
          wB = ZB({
            xAxis: hB ? kB(kB({}, hB), {}, {
              ticks: lB ? VB : hB.ticks
            }) : void 0,
            width: pB,
            height: sB,
            offset: JB
          }, !!lB || FB);
        (0, IB.e)(Array.isArray(wB), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(mB(wB), "]")), Array.isArray(wB) && (PB = wB)
      }
      return QB.createElement("g", {
        className: "recharts-cartesian-grid"
      }, QB.createElement(tB, {
        fill: yB.fill,
        fillOpacity: yB.fillOpacity,
        x: yB.x,
        y: yB.y,
        width: yB.width,
        height: yB.height,
        ry: yB.ry
      }), QB.createElement(MB, LB({}, yB, {
        offset: JB,
        horizontalPoints: TB,
        xAxis: hB,
        yAxis: XB
      })), QB.createElement(EB, LB({}, yB, {
        offset: JB,
        verticalPoints: PB,
        xAxis: hB,
        yAxis: XB
      })), QB.createElement(iB, LB({}, yB, {
        horizontalPoints: TB
      })), QB.createElement(qB, LB({}, yB, {
        verticalPoints: PB
      })))
    }
    DB.displayName = "CartesianGrid"
  },
  6186: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => gB
    });
    var QB = zB(62),
      nB = zB(5961),
      dB = zB(5975),
      IB = zB(5463),
      NB = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function uB(BB) {
      return uB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, uB(BB)
    }

    function UB() {
      return UB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, UB.apply(this, arguments)
    }

    function aB(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        var zB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != zB) {
          var QB, nB, dB, IB, NB = [],
            uB = !0,
            UB = !1;
          try {
            if (dB = (zB = zB.call(BB)).next, 0 === jB) {
              if (Object(zB) !== zB) return;
              uB = !1
            } else
              for (; !(uB = (QB = dB.call(zB)).done) && (NB.push(QB.value), NB.length !== jB); uB = !0);
          } catch (BB) {
            UB = !0, nB = BB
          } finally {
            try {
              if (!uB && null != zB.return && (IB = zB.return(), Object(IB) !== IB)) return
            } finally {
              if (UB) throw nB
            }
          }
          return NB
        }
      }(BB, jB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return pB(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return pB(BB, jB)
      }(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function rB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function sB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, LB(QB.key), QB)
      }
    }

    function JB(BB, jB, zB) {
      return jB = yB(jB),
        function(BB, jB) {
          if (jB && ("object" === uB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, mB() ? Reflect.construct(jB, zB || [], yB(BB).constructor) : jB.apply(BB, zB))
    }

    function mB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (mB = function() {
        return !!BB
      })()
    }

    function yB(BB) {
      return yB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, yB(BB)
    }

    function kB(BB, jB) {
      return kB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, kB(BB, jB)
    }

    function GB(BB, jB, zB) {
      return (jB = LB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function LB(BB) {
      var jB = function(BB, jB) {
        if ("object" != uB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != uB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == uB(jB) ? jB : jB + ""
    }
    var gB = function(BB) {
      function jB() {
        return function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, jB), JB(this, jB, arguments)
      }
      return function(BB, jB) {
        if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(jB && jB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), jB && kB(BB, jB)
      }(jB, BB), zB = jB, (uB = [{
        key: "render",
        value: function() {
          var BB = this.props,
            jB = BB.offset,
            zB = BB.layout,
            uB = BB.width,
            pB = BB.dataKey,
            sB = BB.data,
            JB = BB.dataPointFormatter,
            mB = BB.xAxis,
            yB = BB.yAxis,
            kB = rB(BB, NB),
            GB = (0, IB.c)(kB, !1);
          "x" === this.props.direction && "number" !== mB.type && (0, nB.e)(!1);
          var LB = sB.map((function(BB) {
            var nB = JB(BB, pB),
              IB = nB.x,
              NB = nB.y,
              rB = nB.value,
              sB = nB.errorVal;
            if (!sB) return null;
            var kB, LB, gB = [];
            if (Array.isArray(sB)) {
              var tB = aB(sB, 2);
              kB = tB[0], LB = tB[1]
            } else kB = LB = sB;
            if ("vertical" === zB) {
              var SB = mB.scale,
                MB = NB + jB,
                EB = MB + uB,
                iB = MB - uB,
                qB = SB(rB - kB),
                fB = SB(rB + LB);
              gB.push({
                x1: fB,
                y1: EB,
                x2: fB,
                y2: iB
              }), gB.push({
                x1: qB,
                y1: MB,
                x2: fB,
                y2: MB
              }), gB.push({
                x1: qB,
                y1: EB,
                x2: qB,
                y2: iB
              })
            } else if ("horizontal" === zB) {
              var oB = yB.scale,
                HB = IB + jB,
                DB = HB - uB,
                FB = HB + uB,
                YB = oB(rB - kB),
                VB = oB(rB + LB);
              gB.push({
                x1: DB,
                y1: VB,
                x2: FB,
                y2: VB
              }), gB.push({
                x1: HB,
                y1: YB,
                x2: HB,
                y2: VB
              }), gB.push({
                x1: DB,
                y1: YB,
                x2: FB,
                y2: YB
              })
            }
            return QB.createElement(dB.e, UB({
              className: "recharts-errorBar",
              key: "bar-".concat(gB.map((function(BB) {
                return "".concat(BB.x1, "-").concat(BB.x2, "-").concat(BB.y1, "-").concat(BB.y2)
              })))
            }, GB), gB.map((function(BB) {
              return QB.createElement("line", UB({}, BB, {
                key: "line-".concat(BB.x1, "-").concat(BB.x2, "-").concat(BB.y1, "-").concat(BB.y2)
              }))
            })))
          }));
          return QB.createElement(dB.e, {
            className: "recharts-errorBars"
          }, LB)
        }
      }]) && sB(zB.prototype, uB), pB && sB(zB, pB), Object.defineProperty(zB, "prototype", {
        writable: !1
      }), zB;
      var zB, uB, pB
    }(QB.Component);
    GB(gB, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), GB(gB, "displayName", "ErrorBar")
  },
  6340: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => AB
    });
    var QB = zB(62),
      nB = zB(6102),
      dB = zB(5319),
      IB = zB.n(dB),
      NB = zB(5453),
      uB = zB.n(NB),
      UB = zB(6176),
      aB = zB.n(UB),
      pB = zB(5146),
      rB = zB(6335),
      sB = zB(6094),
      JB = zB(5975),
      mB = zB(6257),
      yB = zB(6186),
      kB = zB(5229),
      GB = zB(5463),
      LB = zB(5981),
      gB = zB(6121),
      tB = ["type", "layout", "connectNulls", "ref"],
      SB = ["key"];

    function MB(BB) {
      return MB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, MB(BB)
    }

    function EB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function iB() {
      return iB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, iB.apply(this, arguments)
    }

    function qB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function fB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? qB(Object(zB), !0).forEach((function(jB) {
          XB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : qB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function oB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return HB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return HB(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return HB(BB, jB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function HB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function DB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, ZB(QB.key), QB)
      }
    }

    function FB(BB, jB, zB) {
      return jB = VB(jB),
        function(BB, jB) {
          if (jB && ("object" === MB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, YB() ? Reflect.construct(jB, zB || [], VB(BB).constructor) : jB.apply(BB, zB))
    }

    function YB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (YB = function() {
        return !!BB
      })()
    }

    function VB(BB) {
      return VB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, VB(BB)
    }

    function hB(BB, jB) {
      return hB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, hB(BB, jB)
    }

    function XB(BB, jB, zB) {
      return (jB = ZB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function ZB(BB) {
      var jB = function(BB, jB) {
        if ("object" != MB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != MB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == MB(jB) ? jB : jB + ""
    }
    var AB = function(BB) {
      function jB() {
        var BB;
        ! function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, jB);
        for (var zB = arguments.length, QB = new Array(zB), nB = 0; nB < zB; nB++) QB[nB] = arguments[nB];
        return XB(BB = FB(this, jB, [].concat(QB)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), XB(BB, "generateSimpleStrokeDasharray", (function(BB, jB) {
          return "".concat(jB, "px ").concat(BB - jB, "px")
        })), XB(BB, "getStrokeDasharray", (function(zB, QB, nB) {
          var dB = nB.reduce((function(BB, jB) {
            return BB + jB
          }));
          if (!dB) return BB.generateSimpleStrokeDasharray(QB, zB);
          for (var IB = Math.floor(zB / dB), NB = zB % dB, uB = QB - zB, UB = [], aB = 0, pB = 0; aB < nB.length; pB += nB[aB], ++aB)
            if (pB + nB[aB] > NB) {
              UB = [].concat(oB(nB.slice(0, aB)), [NB - pB]);
              break
            } var rB = UB.length % 2 === 0 ? [0, uB] : [uB];
          return [].concat(oB(jB.repeat(nB, IB)), oB(UB), rB).map((function(BB) {
            return "".concat(BB, "px")
          })).join(", ")
        })), XB(BB, "id", (0, kB.D)("recharts-line-")), XB(BB, "pathRef", (function(jB) {
          BB.mainCurve = jB
        })), XB(BB, "handleAnimationEnd", (function() {
          BB.setState({
            isAnimationFinished: !0
          }), BB.props.onAnimationEnd && BB.props.onAnimationEnd()
        })), XB(BB, "handleAnimationStart", (function() {
          BB.setState({
            isAnimationFinished: !1
          }), BB.props.onAnimationStart && BB.props.onAnimationStart()
        })), BB
      }
      return function(BB, jB) {
        if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(jB && jB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), jB && hB(BB, jB)
      }(jB, BB), zB = jB, dB = [{
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
          } catch (jB) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(BB, jB) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var zB = this.props,
            nB = zB.points,
            dB = zB.xAxis,
            IB = zB.yAxis,
            NB = zB.layout,
            uB = zB.children,
            UB = (0, GB.g)(uB, yB.b);
          if (!UB) return null;
          var aB = function(BB, jB) {
              return {
                x: BB.x,
                y: BB.y,
                value: BB.value,
                errorVal: (0, gB.Y)(BB.payload, jB)
              }
            },
            pB = {
              clipPath: BB ? "url(#clipPath-".concat(jB, ")") : null
            };
          return QB.createElement(JB.e, pB, UB.map((function(BB) {
            return QB.cloneElement(BB, {
              key: "bar-".concat(BB.props.dataKey),
              data: nB,
              xAxis: dB,
              yAxis: IB,
              layout: NB,
              dataPointFormatter: aB
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(BB, zB, nB) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var dB = this.props,
            IB = dB.dot,
            NB = dB.points,
            uB = dB.dataKey,
            UB = (0, GB.c)(this.props, !1),
            aB = (0, GB.c)(IB, !0),
            pB = NB.map((function(BB, zB) {
              var QB = fB(fB(fB({
                key: "dot-".concat(zB),
                r: 3
              }, UB), aB), {}, {
                index: zB,
                cx: BB.x,
                cy: BB.y,
                value: BB.value,
                dataKey: uB,
                payload: BB.payload,
                points: NB
              });
              return jB.renderDotItem(IB, QB)
            })),
            rB = {
              clipPath: BB ? "url(#clipPath-".concat(zB ? "" : "dots-").concat(nB, ")") : null
            };
          return QB.createElement(JB.e, iB({
            className: "recharts-line-dots",
            key: "dots"
          }, rB), pB)
        }
      }, {
        key: "renderCurveStatically",
        value: function(BB, jB, zB, nB) {
          var dB = this.props,
            IB = dB.type,
            NB = dB.layout,
            uB = dB.connectNulls,
            UB = (dB.ref, EB(dB, tB)),
            aB = fB(fB(fB({}, (0, GB.c)(UB, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: jB ? "url(#clipPath-".concat(zB, ")") : null,
              points: BB
            }, nB), {}, {
              type: IB,
              layout: NB,
              connectNulls: uB
            });
          return QB.createElement(rB.e, iB({}, aB, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(BB, jB) {
          var zB = this,
            dB = this.props,
            IB = dB.points,
            NB = dB.strokeDasharray,
            uB = dB.isAnimationActive,
            UB = dB.animationBegin,
            aB = dB.animationDuration,
            pB = dB.animationEasing,
            rB = dB.animationId,
            sB = dB.animateNewValues,
            JB = dB.width,
            mB = dB.height,
            yB = this.state,
            GB = yB.prevPoints,
            LB = yB.totalLength;
          return QB.createElement(nB.c, {
            Ds: UB,
            duration: aB,
            isActive: uB,
            easing: pB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(rB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(QB) {
            var nB = QB.t;
            if (GB) {
              var dB = GB.length / IB.length,
                uB = IB.map((function(BB, jB) {
                  var zB = Math.floor(jB * dB);
                  if (GB[zB]) {
                    var QB = GB[zB],
                      IB = (0, kB.q)(QB.x, BB.x),
                      NB = (0, kB.q)(QB.y, BB.y);
                    return fB(fB({}, BB), {}, {
                      x: IB(nB),
                      y: NB(nB)
                    })
                  }
                  if (sB) {
                    var uB = (0, kB.q)(2 * JB, BB.x),
                      UB = (0, kB.q)(mB / 2, BB.y);
                    return fB(fB({}, BB), {}, {
                      x: uB(nB),
                      y: UB(nB)
                    })
                  }
                  return fB(fB({}, BB), {}, {
                    x: BB.x,
                    y: BB.y
                  })
                }));
              return zB.renderCurveStatically(uB, BB, jB)
            }
            var UB, aB = (0, kB.q)(0, LB)(nB);
            if (NB) {
              var pB = "".concat(NB).split(/[,\s]+/gim).map((function(BB) {
                return parseFloat(BB)
              }));
              UB = zB.getStrokeDasharray(aB, LB, pB)
            } else UB = zB.generateSimpleStrokeDasharray(LB, aB);
            return zB.renderCurveStatically(IB, BB, jB, {
              strokeDasharray: UB
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(BB, jB) {
          var zB = this.props,
            QB = zB.points,
            nB = zB.isAnimationActive,
            dB = this.state,
            IB = dB.prevPoints,
            NB = dB.totalLength;
          return nB && QB && QB.length && (!IB && NB > 0 || !aB()(IB, QB)) ? this.renderCurveWithAnimation(BB, jB) : this.renderCurveStatically(QB, BB, jB)
        }
      }, {
        key: "render",
        value: function() {
          var BB, jB = this.props,
            zB = jB.hide,
            nB = jB.dot,
            dB = jB.points,
            IB = jB.className,
            NB = jB.xAxis,
            UB = jB.yAxis,
            aB = jB.top,
            rB = jB.left,
            sB = jB.width,
            yB = jB.height,
            kB = jB.isAnimationActive,
            LB = jB.id;
          if (zB || !dB || !dB.length) return null;
          var gB = this.state.isAnimationFinished,
            tB = 1 === dB.length,
            SB = (0, pB.e)("recharts-line", IB),
            MB = NB && NB.allowDataOverflow,
            EB = UB && UB.allowDataOverflow,
            iB = MB || EB,
            qB = uB()(LB) ? this.id : LB,
            fB = null !== (BB = (0, GB.c)(nB, !1)) && void 0 !== BB ? BB : {
              r: 3,
              strokeWidth: 2
            },
            oB = fB.r,
            HB = void 0 === oB ? 3 : oB,
            DB = fB.strokeWidth,
            FB = void 0 === DB ? 2 : DB,
            YB = ((0, GB.t)(nB) ? nB : {}).clipDot,
            VB = void 0 === YB || YB,
            hB = 2 * HB + FB;
          return QB.createElement(JB.e, {
            className: SB
          }, MB || EB ? QB.createElement("defs", null, QB.createElement("clipPath", {
            id: "clipPath-".concat(qB)
          }, QB.createElement("rect", {
            x: MB ? rB : rB - sB / 2,
            y: EB ? aB : aB - yB / 2,
            width: MB ? sB : 2 * sB,
            height: EB ? yB : 2 * yB
          })), !VB && QB.createElement("clipPath", {
            id: "clipPath-dots-".concat(qB)
          }, QB.createElement("rect", {
            x: rB - hB / 2,
            y: aB - hB / 2,
            width: sB + hB,
            height: yB + hB
          }))) : null, !tB && this.renderCurve(iB, qB), this.renderErrorBar(iB, qB), (tB || nB) && this.renderDots(iB, VB, qB), (!kB || gB) && mB.e.renderCallByParent(this.props, dB))
        }
      }], NB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, jB) {
          return BB.animationId !== jB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curPoints: BB.points,
            prevPoints: jB.curPoints
          } : BB.points !== jB.curPoints ? {
            curPoints: BB.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(BB, jB) {
          for (var zB = BB.length % 2 !== 0 ? [].concat(oB(BB), [0]) : BB, QB = [], nB = 0; nB < jB; ++nB) QB = [].concat(oB(QB), oB(zB));
          return QB
        }
      }, {
        key: "renderDotItem",
        value: function(BB, jB) {
          var zB;
          if (QB.isValidElement(BB)) zB = QB.cloneElement(BB, jB);
          else if (IB()(BB)) zB = BB(jB);
          else {
            var nB = jB.key,
              dB = EB(jB, SB),
              NB = (0, pB.e)("recharts-line-dot", "boolean" !== typeof BB ? BB.className : "");
            zB = QB.createElement(sB.b, iB({
              key: nB
            }, dB, {
              className: NB
            }))
          }
          return zB
        }
      }], dB && DB(zB.prototype, dB), NB && DB(zB, NB), Object.defineProperty(zB, "prototype", {
        writable: !1
      }), zB;
      var zB, dB, NB
    }(QB.PureComponent);
    XB(AB, "displayName", "Line"), XB(AB, "defaultProps", {
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
      isAnimationActive: !LB.c.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), XB(AB, "getComposedData", (function(BB) {
      var jB = BB.props,
        zB = BB.xAxis,
        QB = BB.yAxis,
        nB = BB.xAxisTicks,
        dB = BB.yAxisTicks,
        IB = BB.dataKey,
        NB = BB.bandSize,
        UB = BB.displayedData,
        aB = BB.offset,
        pB = jB.layout;
      return fB({
        points: UB.map((function(BB, jB) {
          var UB = (0, gB.Y)(BB, IB);
          return "horizontal" === pB ? {
            x: (0, gB.A)({
              axis: zB,
              ticks: nB,
              bandSize: NB,
              entry: BB,
              index: jB
            }),
            y: uB()(UB) ? null : QB.scale(UB),
            value: UB,
            payload: BB
          } : {
            x: uB()(UB) ? null : zB.scale(UB),
            y: (0, gB.A)({
              axis: QB,
              ticks: dB,
              bandSize: NB,
              entry: BB,
              index: jB
            }),
            value: UB,
            payload: BB
          }
        })),
        layout: pB
      }, aB)
    }))
  },
  6289: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => FB
    });
    var QB = zB(62),
      nB = zB(5319),
      dB = zB.n(nB),
      IB = zB(6296),
      NB = zB.n(IB),
      uB = zB(5146),
      UB = zB(5975),
      aB = zB(6205),
      pB = zB(6214),
      rB = zB(5229),
      sB = zB(6219),
      JB = zB(5458),
      mB = zB(5463),
      yB = zB(6307);

    function kB(BB) {
      return kB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, kB(BB)
    }

    function GB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, qB(QB.key), QB)
      }
    }

    function LB(BB, jB, zB) {
      return jB = tB(jB),
        function(BB, jB) {
          if (jB && ("object" === kB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, gB() ? Reflect.construct(jB, zB || [], tB(BB).constructor) : jB.apply(BB, zB))
    }

    function gB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (gB = function() {
        return !!BB
      })()
    }

    function tB(BB) {
      return tB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, tB(BB)
    }

    function SB(BB, jB) {
      return SB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, SB(BB, jB)
    }

    function MB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function EB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? MB(Object(zB), !0).forEach((function(jB) {
          iB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : MB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function iB(BB, jB, zB) {
      return (jB = qB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function qB(BB) {
      var jB = function(BB, jB) {
        if ("object" != kB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != kB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == kB(jB) ? jB : jB + ""
    }

    function fB(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        var zB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != zB) {
          var QB, nB, dB, IB, NB = [],
            uB = !0,
            UB = !1;
          try {
            if (dB = (zB = zB.call(BB)).next, 0 === jB) {
              if (Object(zB) !== zB) return;
              uB = !1
            } else
              for (; !(uB = (QB = dB.call(zB)).done) && (NB.push(QB.value), NB.length !== jB); uB = !0);
          } catch (BB) {
            UB = !0, nB = BB
          } finally {
            try {
              if (!uB && null != zB.return && (IB = zB.return(), Object(IB) !== IB)) return
            } finally {
              if (UB) throw nB
            }
          }
          return NB
        }
      }(BB, jB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return oB(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return oB(BB, jB)
      }(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function oB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function HB() {
      return HB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, HB.apply(this, arguments)
    }

    function DB(BB) {
      var jB = BB.x,
        zB = BB.y,
        nB = BB.segment,
        IB = BB.xAxisId,
        kB = BB.yAxisId,
        GB = BB.shape,
        LB = BB.className,
        gB = BB.alwaysShow,
        tB = (0, yB.o)(),
        SB = (0, yB.x)(IB),
        MB = (0, yB.z)(kB),
        iB = (0, yB.t)();
      if (!tB || !iB) return null;
      (0, JB.e)(void 0 === gB, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var qB = function(BB, jB, zB, QB, nB, dB, IB, uB, UB) {
        var aB = nB.x,
          rB = nB.y,
          sB = nB.width,
          JB = nB.height;
        if (zB) {
          var mB = UB.y,
            yB = BB.y.apply(mB, {
              position: dB
            });
          if ((0, pB.b)(UB, "discard") && !BB.y.isInRange(yB)) return null;
          var kB = [{
            x: aB + sB,
            y: yB
          }, {
            x: aB,
            y: yB
          }];
          return "left" === uB ? kB.reverse() : kB
        }
        if (jB) {
          var GB = UB.x,
            LB = BB.x.apply(GB, {
              position: dB
            });
          if ((0, pB.b)(UB, "discard") && !BB.x.isInRange(LB)) return null;
          var gB = [{
            x: LB,
            y: rB + JB
          }, {
            x: LB,
            y: rB
          }];
          return "top" === IB ? gB.reverse() : gB
        }
        if (QB) {
          var tB = UB.segment.map((function(jB) {
            return BB.apply(jB, {
              position: dB
            })
          }));
          return (0, pB.b)(UB, "discard") && NB()(tB, (function(jB) {
            return !BB.isInRange(jB)
          })) ? null : tB
        }
        return null
      }((0, sB.d)({
        x: SB.scale,
        y: MB.scale
      }), (0, rB.v)(jB), (0, rB.v)(zB), nB && 2 === nB.length, iB, BB.position, SB.orientation, MB.orientation, BB);
      if (!qB) return null;
      var oB = fB(qB, 2),
        DB = oB[0],
        FB = DB.x,
        YB = DB.y,
        VB = oB[1],
        hB = VB.x,
        XB = VB.y,
        ZB = EB(EB({
          clipPath: (0, pB.b)(BB, "hidden") ? "url(#".concat(tB, ")") : void 0
        }, (0, mB.c)(BB, !0)), {}, {
          x1: FB,
          y1: YB,
          x2: hB,
          y2: XB
        });
      return QB.createElement(UB.e, {
        className: (0, uB.e)("recharts-reference-line", LB)
      }, function(BB, jB) {
        return QB.isValidElement(BB) ? QB.cloneElement(BB, jB) : dB()(BB) ? BB(jB) : QB.createElement("line", HB({}, jB, {
          className: "recharts-reference-line-line"
        }))
      }(GB, ZB), aB.c.renderCallByParent(BB, (0, sB.h)({
        x1: FB,
        y1: YB,
        x2: hB,
        y2: XB
      })))
    }
    var FB = function(BB) {
      function jB() {
        return function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, jB), LB(this, jB, arguments)
      }
      return function(BB, jB) {
        if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(jB && jB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), jB && SB(BB, jB)
      }(jB, BB), zB = jB, (nB = [{
        key: "render",
        value: function() {
          return QB.createElement(DB, this.props)
        }
      }]) && GB(zB.prototype, nB), dB && GB(zB, dB), Object.defineProperty(zB, "prototype", {
        writable: !1
      }), zB;
      var zB, nB, dB
    }(QB.Component);
    iB(FB, "displayName", "ReferenceLine"), iB(FB, "defaultProps", {
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
  6347: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => GB
    });
    var QB = zB(62),
      nB = zB(5146),
      dB = zB(6307),
      IB = zB(6349),
      NB = zB(6121);

    function uB(BB) {
      return uB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, uB(BB)
    }

    function UB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, mB(QB.key), QB)
      }
    }

    function aB(BB, jB, zB) {
      return jB = rB(jB),
        function(BB, jB) {
          if (jB && ("object" === uB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, pB() ? Reflect.construct(jB, zB || [], rB(BB).constructor) : jB.apply(BB, zB))
    }

    function pB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (pB = function() {
        return !!BB
      })()
    }

    function rB(BB) {
      return rB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, rB(BB)
    }

    function sB(BB, jB) {
      return sB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, sB(BB, jB)
    }

    function JB(BB, jB, zB) {
      return (jB = mB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function mB(BB) {
      var jB = function(BB, jB) {
        if ("object" != uB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != uB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == uB(jB) ? jB : jB + ""
    }

    function yB() {
      return yB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, yB.apply(this, arguments)
    }

    function kB(BB) {
      var jB = BB.xAxisId,
        zB = (0, dB.l)(),
        uB = (0, dB.i)(),
        UB = (0, dB.x)(jB);
      return null == UB ? null : QB.createElement(IB.e, yB({}, UB, {
        className: (0, nB.e)("recharts-".concat(UB.axisType, " ").concat(UB.axisType), UB.className),
        viewBox: {
          x: 0,
          y: 0,
          width: zB,
          height: uB
        },
        ticksGenerator: function(BB) {
          return (0, NB.R)(BB, !0)
        }
      }))
    }
    var GB = function(BB) {
      function jB() {
        return function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, jB), aB(this, jB, arguments)
      }
      return function(BB, jB) {
        if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(jB && jB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), jB && sB(BB, jB)
      }(jB, BB), zB = jB, (nB = [{
        key: "render",
        value: function() {
          return QB.createElement(kB, this.props)
        }
      }]) && UB(zB.prototype, nB), dB && UB(zB, dB), Object.defineProperty(zB, "prototype", {
        writable: !1
      }), zB;
      var zB, nB, dB
    }(QB.Component);
    JB(GB, "displayName", "XAxis"), JB(GB, "defaultProps", {
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
  6361: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => GB
    });
    var QB = zB(62),
      nB = zB(5146),
      dB = zB(6307),
      IB = zB(6349),
      NB = zB(6121);

    function uB(BB) {
      return uB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, uB(BB)
    }

    function UB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, mB(QB.key), QB)
      }
    }

    function aB(BB, jB, zB) {
      return jB = rB(jB),
        function(BB, jB) {
          if (jB && ("object" === uB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, pB() ? Reflect.construct(jB, zB || [], rB(BB).constructor) : jB.apply(BB, zB))
    }

    function pB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (pB = function() {
        return !!BB
      })()
    }

    function rB(BB) {
      return rB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, rB(BB)
    }

    function sB(BB, jB) {
      return sB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, sB(BB, jB)
    }

    function JB(BB, jB, zB) {
      return (jB = mB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function mB(BB) {
      var jB = function(BB, jB) {
        if ("object" != uB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != uB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == uB(jB) ? jB : jB + ""
    }

    function yB() {
      return yB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, yB.apply(this, arguments)
    }
    var kB = function(BB) {
        var jB = BB.yAxisId,
          zB = (0, dB.l)(),
          uB = (0, dB.i)(),
          UB = (0, dB.z)(jB);
        return null == UB ? null : QB.createElement(IB.e, yB({}, UB, {
          className: (0, nB.e)("recharts-".concat(UB.axisType, " ").concat(UB.axisType), UB.className),
          viewBox: {
            x: 0,
            y: 0,
            width: zB,
            height: uB
          },
          ticksGenerator: function(BB) {
            return (0, NB.R)(BB, !0)
          }
        }))
      },
      GB = function(BB) {
        function jB() {
          return function(BB, jB) {
            if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
          }(this, jB), aB(this, jB, arguments)
        }
        return function(BB, jB) {
          if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(jB && jB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), jB && sB(BB, jB)
        }(jB, BB), zB = jB, (nB = [{
          key: "render",
          value: function() {
            return QB.createElement(kB, this.props)
          }
        }]) && UB(zB.prototype, nB), dB && UB(zB, dB), Object.defineProperty(zB, "prototype", {
          writable: !1
        }), zB;
        var zB, nB, dB
      }(QB.Component);
    JB(GB, "displayName", "YAxis"), JB(GB, "defaultProps", {
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
  6353: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => mB
    });
    var QB = zB(5319),
      nB = zB.n(QB),
      dB = zB(5229),
      IB = zB(6117),
      NB = zB(5981),
      uB = zB(6219);

    function UB(BB, jB, zB) {
      if (jB < 1) return [];
      if (1 === jB && void 0 === zB) return BB;
      for (var QB = [], nB = 0; nB < BB.length; nB += jB) {
        if (void 0 !== zB && !0 !== zB(BB[nB])) return;
        QB.push(BB[nB])
      }
      return QB
    }

    function aB(BB, jB, zB, QB, nB) {
      if (BB * jB < BB * QB || BB * jB > BB * nB) return !1;
      var dB = zB();
      return BB * (jB - BB * dB / 2 - QB) >= 0 && BB * (jB + BB * dB / 2 - nB) <= 0
    }

    function pB(BB) {
      return pB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, pB(BB)
    }

    function rB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function sB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? rB(Object(zB), !0).forEach((function(jB) {
          JB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : rB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function JB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != pB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != pB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == pB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function mB(BB, jB, zB) {
      var QB = BB.vp,
        pB = BB.ticks,
        rB = BB.viewBox,
        JB = BB.minTickGap,
        mB = BB.orientation,
        yB = BB.interval,
        kB = BB.tickFormatter,
        GB = BB.unit,
        LB = BB.angle;
      if (!pB || !pB.length || !QB) return [];
      if ((0, dB.x)(yB) || NB.c.isSsr) return function(BB, jB) {
        return UB(BB, jB + 1)
      }(pB, "number" === typeof yB && (0, dB.x)(yB) ? yB : 0);
      var gB = [],
        tB = "top" === mB || "bottom" === mB ? "width" : "height",
        SB = GB && "width" === tB ? (0, IB.e)(GB, {
          fontSize: jB,
          letterSpacing: zB
        }) : {
          width: 0,
          height: 0
        },
        MB = function(BB, QB) {
          var dB = nB()(kB) ? kB(BB.value, QB) : BB.value;
          return "width" === tB ? function(BB, jB, zB) {
            var QB = {
              width: BB.width + jB.width,
              height: BB.height + jB.height
            };
            return (0, uB.g)(QB, zB)
          }((0, IB.e)(dB, {
            fontSize: jB,
            letterSpacing: zB
          }), SB, LB) : (0, IB.e)(dB, {
            fontSize: jB,
            letterSpacing: zB
          })[tB]
        },
        EB = pB.length >= 2 ? (0, dB.B)(pB[1].coordinate - pB[0].coordinate) : 1,
        iB = function(BB, jB, zB) {
          var QB = "width" === zB,
            nB = BB.x,
            dB = BB.y,
            IB = BB.width,
            NB = BB.height;
          return 1 === jB ? {
            start: QB ? nB : dB,
            end: QB ? nB + IB : dB + NB
          } : {
            start: QB ? nB + IB : dB + NB,
            end: QB ? nB : dB
          }
        }(rB, EB, tB);
      return "equidistantPreserveStart" === yB ? function(BB, jB, zB, QB, nB) {
        for (var dB, IB = (QB || []).slice(), NB = jB.start, uB = jB.end, pB = 0, rB = 1, sB = NB, JB = function() {
            var jB = null === QB || void 0 === QB ? void 0 : QB[pB];
            if (void 0 === jB) return {
              v: UB(QB, rB)
            };
            var dB, IB = pB,
              JB = function() {
                return void 0 === dB && (dB = zB(jB, IB)), dB
              },
              mB = jB.coordinate,
              yB = 0 === pB || aB(BB, mB, JB, sB, uB);
            yB || (pB = 0, sB = NB, rB += 1), yB && (sB = mB + BB * (JB() / 2 + nB), pB += rB)
          }; rB <= IB.length;)
          if (dB = JB()) return dB.v;
        return []
      }(EB, iB, MB, pB, JB) : (gB = "preserveStart" === yB || "preserveStartEnd" === yB ? function(BB, jB, zB, QB, nB, dB) {
        var IB = (QB || []).slice(),
          NB = IB.length,
          uB = jB.start,
          UB = jB.end;
        if (dB) {
          var pB = QB[NB - 1],
            rB = zB(pB, NB - 1),
            JB = BB * (pB.coordinate + BB * rB / 2 - UB);
          IB[NB - 1] = pB = sB(sB({}, pB), {}, {
            tickCoord: JB > 0 ? pB.coordinate - JB * BB : pB.coordinate
          }), aB(BB, pB.tickCoord, (function() {
            return rB
          }), uB, UB) && (UB = pB.tickCoord - BB * (rB / 2 + nB), IB[NB - 1] = sB(sB({}, pB), {}, {
            isShow: !0
          }))
        }
        for (var mB = dB ? NB - 1 : NB, yB = function(jB) {
            var QB, dB = IB[jB],
              NB = function() {
                return void 0 === QB && (QB = zB(dB, jB)), QB
              };
            if (0 === jB) {
              var pB = BB * (dB.coordinate - BB * NB() / 2 - uB);
              IB[jB] = dB = sB(sB({}, dB), {}, {
                tickCoord: pB < 0 ? dB.coordinate - pB * BB : dB.coordinate
              })
            } else IB[jB] = dB = sB(sB({}, dB), {}, {
              tickCoord: dB.coordinate
            });
            aB(BB, dB.tickCoord, NB, uB, UB) && (uB = dB.tickCoord + BB * (NB() / 2 + nB), IB[jB] = sB(sB({}, dB), {}, {
              isShow: !0
            }))
          }, kB = 0; kB < mB; kB++) yB(kB);
        return IB
      }(EB, iB, MB, pB, JB, "preserveStartEnd" === yB) : function(BB, jB, zB, QB, nB) {
        for (var dB = (QB || []).slice(), IB = dB.length, NB = jB.start, uB = jB.end, UB = function(jB) {
            var QB, UB = dB[jB],
              pB = function() {
                return void 0 === QB && (QB = zB(UB, jB)), QB
              };
            if (jB === IB - 1) {
              var rB = BB * (UB.coordinate + BB * pB() / 2 - uB);
              dB[jB] = UB = sB(sB({}, UB), {}, {
                tickCoord: rB > 0 ? UB.coordinate - rB * BB : UB.coordinate
              })
            } else dB[jB] = UB = sB(sB({}, UB), {}, {
              tickCoord: UB.coordinate
            });
            aB(BB, UB.tickCoord, pB, NB, uB) && (uB = UB.tickCoord - BB * (pB() / 2 + nB), dB[jB] = sB(sB({}, UB), {}, {
              isShow: !0
            }))
          }, pB = IB - 1; pB >= 0; pB--) UB(pB);
        return dB
      }(EB, iB, MB, pB, JB), gB.filter((function(BB) {
        return BB.isShow
      })))
    }
  },
  6375: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB
    });
    var QB = zB(5496),
      nB = zB(6251),
      dB = zB(6347),
      IB = zB(6361),
      NB = zB(6219),
      uB = (0, QB.e)({
        chartName: "BarChart",
        GraphicalChild: nB.e,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: dB.d
        }, {
          axisType: "yAxis",
          AxisComp: IB.e
        }],
        formatAxisMap: NB.f
      })
  },
  5493: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nj
    });
    var QB = zB(5496),
      nB = zB(6337),
      dB = zB(6251),
      IB = zB(6340),
      NB = zB(62),
      uB = zB(6102),
      UB = zB(5453),
      aB = zB.n(UB),
      pB = zB(6176),
      rB = zB.n(pB),
      sB = zB(5319),
      JB = zB.n(sB),
      mB = zB(5146),
      yB = zB(5975),
      kB = zB(6257),
      GB = zB(5463),
      LB = zB(5981);

    function gB(BB) {
      return gB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, gB(BB)
    }

    function tB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, fB(QB.key), QB)
      }
    }

    function SB(BB, jB, zB) {
      return jB = EB(jB),
        function(BB, jB) {
          if (jB && ("object" === gB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, MB() ? Reflect.construct(jB, zB || [], EB(BB).constructor) : jB.apply(BB, zB))
    }

    function MB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (MB = function() {
        return !!BB
      })()
    }

    function EB(BB) {
      return EB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, EB(BB)
    }

    function iB(BB, jB) {
      return iB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, iB(BB, jB)
    }

    function qB(BB, jB, zB) {
      return (jB = fB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function fB(BB) {
      var jB = function(BB, jB) {
        if ("object" != gB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != gB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == gB(jB) ? jB : jB + ""
    }
    var oB = function(BB) {
      function jB() {
        return function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, jB), SB(this, jB, arguments)
      }
      return function(BB, jB) {
        if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(jB && jB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), jB && iB(BB, jB)
      }(jB, BB), zB = jB, (QB = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && tB(zB.prototype, QB), nB && tB(zB, nB), Object.defineProperty(zB, "prototype", {
        writable: !1
      }), zB;
      var zB, QB, nB
    }(NB.Component);
    qB(oB, "displayName", "ZAxis"), qB(oB, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var HB = zB(6335),
      DB = zB(6186),
      FB = zB(6255),
      YB = zB(5229),
      VB = zB(6121),
      hB = zB(5485),
      XB = zB(6053),
      ZB = zB(6268),
      AB = ["option", "isActive"];

    function TB() {
      return TB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, TB.apply(this, arguments)
    }

    function PB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function WB(BB) {
      var jB = BB.option,
        zB = BB.isActive,
        QB = PB(BB, AB);
      return "string" === typeof jB ? NB.createElement(ZB.b, TB({
        option: NB.createElement(XB.e, TB({
          type: jB
        }, QB)),
        isActive: zB,
        shapeType: "symbols"
      }, QB)) : NB.createElement(ZB.b, TB({
        option: jB,
        isActive: zB,
        shapeType: "symbols"
      }, QB))
    }

    function eB(BB) {
      return eB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, eB(BB)
    }

    function lB() {
      return lB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, lB.apply(this, arguments)
    }

    function wB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function xB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? wB(Object(zB), !0).forEach((function(jB) {
          RB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : wB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function KB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, OB(QB.key), QB)
      }
    }

    function CB(BB, jB, zB) {
      return jB = bB(jB),
        function(BB, jB) {
          if (jB && ("object" === eB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, cB() ? Reflect.construct(jB, zB || [], bB(BB).constructor) : jB.apply(BB, zB))
    }

    function cB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (cB = function() {
        return !!BB
      })()
    }

    function bB(BB) {
      return bB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, bB(BB)
    }

    function vB(BB, jB) {
      return vB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, vB(BB, jB)
    }

    function RB(BB, jB, zB) {
      return (jB = OB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function OB(BB) {
      var jB = function(BB, jB) {
        if ("object" != eB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != eB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == eB(jB) ? jB : jB + ""
    }
    var Bj = function(BB) {
      function jB() {
        var BB;
        ! function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, jB);
        for (var zB = arguments.length, QB = new Array(zB), nB = 0; nB < zB; nB++) QB[nB] = arguments[nB];
        return RB(BB = CB(this, jB, [].concat(QB)), "state", {
          isAnimationFinished: !1
        }), RB(BB, "handleAnimationEnd", (function() {
          BB.setState({
            isAnimationFinished: !0
          })
        })), RB(BB, "handleAnimationStart", (function() {
          BB.setState({
            isAnimationFinished: !1
          })
        })), RB(BB, "id", (0, YB.D)("recharts-scatter-")), BB
      }
      return function(BB, jB) {
        if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(jB && jB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), jB && vB(BB, jB)
      }(jB, BB), zB = jB, QB = [{
        key: "renderSymbolsStatically",
        value: function(BB) {
          var jB = this,
            zB = this.props,
            QB = zB.shape,
            nB = zB.activeShape,
            dB = zB.activeIndex,
            IB = (0, GB.c)(this.props, !1);
          return BB.map((function(BB, zB) {
            var uB = dB === zB,
              UB = uB ? nB : QB,
              aB = xB(xB({}, IB), BB);
            return NB.createElement(yB.e, lB({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === BB || void 0 === BB ? void 0 : BB.cx, "-").concat(null === BB || void 0 === BB ? void 0 : BB.cy, "-").concat(null === BB || void 0 === BB ? void 0 : BB.size, "-").concat(zB)
            }, (0, hB.m)(jB.props, BB, zB), {
              role: "img"
            }), NB.createElement(WB, lB({
              option: UB,
              isActive: uB,
              key: "symbol-".concat(zB)
            }, aB)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var BB = this,
            jB = this.props,
            zB = jB.points,
            QB = jB.isAnimationActive,
            nB = jB.animationBegin,
            dB = jB.animationDuration,
            IB = jB.animationEasing,
            UB = jB.animationId,
            aB = this.state.prevPoints;
          return NB.createElement(uB.c, {
            Ds: nB,
            duration: dB,
            isActive: QB,
            easing: IB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(UB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(jB) {
            var QB = jB.t,
              nB = zB.map((function(BB, jB) {
                var zB = aB && aB[jB];
                if (zB) {
                  var nB = (0, YB.q)(zB.cx, BB.cx),
                    dB = (0, YB.q)(zB.cy, BB.cy),
                    IB = (0, YB.q)(zB.size, BB.size);
                  return xB(xB({}, BB), {}, {
                    cx: nB(QB),
                    cy: dB(QB),
                    size: IB(QB)
                  })
                }
                var NB = (0, YB.q)(0, BB.size);
                return xB(xB({}, BB), {}, {
                  size: NB(QB)
                })
              }));
            return NB.createElement(yB.e, null, BB.renderSymbolsStatically(nB))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var BB = this.props,
            jB = BB.points,
            zB = BB.isAnimationActive,
            QB = this.state.prevPoints;
          return !(zB && jB && jB.length) || QB && rB()(QB, jB) ? this.renderSymbolsStatically(jB) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var BB = this.props,
            jB = BB.points,
            zB = BB.xAxis,
            QB = BB.yAxis,
            nB = BB.children,
            dB = (0, GB.g)(nB, DB.b);
          return dB ? dB.map((function(BB, nB) {
            var dB = BB.props,
              IB = dB.direction,
              uB = dB.dataKey;
            return NB.cloneElement(BB, {
              key: "".concat(IB, "-").concat(uB, "-").concat(jB[nB]),
              data: jB,
              xAxis: zB,
              yAxis: QB,
              layout: "x" === IB ? "vertical" : "horizontal",
              dataPointFormatter: function(BB, jB) {
                return {
                  x: BB.cx,
                  y: BB.cy,
                  value: "x" === IB ? +BB.node.x : +BB.node.y,
                  errorVal: (0, VB.Y)(BB, jB)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var BB, jB, zB = this.props,
            QB = zB.points,
            nB = zB.line,
            dB = zB.lineType,
            IB = zB.lineJointType,
            uB = (0, GB.c)(this.props, !1),
            UB = (0, GB.c)(nB, !1);
          if ("joint" === dB) BB = QB.map((function(BB) {
            return {
              x: BB.cx,
              y: BB.cy
            }
          }));
          else if ("fitting" === dB) {
            var aB = (0, YB.i)(QB),
              pB = aB.xmin,
              rB = aB.xmax,
              sB = aB.a,
              mB = aB.b,
              kB = function(BB) {
                return sB * BB + mB
              };
            BB = [{
              x: pB,
              y: kB(pB)
            }, {
              x: rB,
              y: kB(rB)
            }]
          }
          var LB = xB(xB(xB({}, uB), {}, {
            fill: "none",
            stroke: uB && uB.fill
          }, UB), {}, {
            points: BB
          });
          return jB = NB.isValidElement(nB) ? NB.cloneElement(nB, LB) : JB()(nB) ? nB(LB) : NB.createElement(HB.e, lB({}, LB, {
            type: IB
          })), NB.createElement(yB.e, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, jB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this.props,
            jB = BB.hide,
            zB = BB.points,
            QB = BB.line,
            nB = BB.className,
            dB = BB.xAxis,
            IB = BB.yAxis,
            uB = BB.left,
            UB = BB.top,
            pB = BB.width,
            rB = BB.height,
            sB = BB.id,
            JB = BB.isAnimationActive;
          if (jB || !zB || !zB.length) return null;
          var GB = this.state.isAnimationFinished,
            LB = (0, mB.e)("recharts-scatter", nB),
            gB = dB && dB.allowDataOverflow,
            tB = IB && IB.allowDataOverflow,
            SB = gB || tB,
            MB = aB()(sB) ? this.id : sB;
          return NB.createElement(yB.e, {
            className: LB,
            clipPath: SB ? "url(#clipPath-".concat(MB, ")") : null
          }, gB || tB ? NB.createElement("defs", null, NB.createElement("clipPath", {
            id: "clipPath-".concat(MB)
          }, NB.createElement("rect", {
            x: gB ? uB : uB - pB / 2,
            y: tB ? UB : UB - rB / 2,
            width: gB ? pB : 2 * pB,
            height: tB ? rB : 2 * rB
          }))) : null, QB && this.renderLine(), this.renderErrorBar(), NB.createElement(yB.e, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!JB || GB) && kB.e.renderCallByParent(this.props, zB))
        }
      }], nB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, jB) {
          return BB.animationId !== jB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curPoints: BB.points,
            prevPoints: jB.curPoints
          } : BB.points !== jB.curPoints ? {
            curPoints: BB.points
          } : null
        }
      }], QB && KB(zB.prototype, QB), nB && KB(zB, nB), Object.defineProperty(zB, "prototype", {
        writable: !1
      }), zB;
      var zB, QB, nB
    }(NB.PureComponent);
    RB(Bj, "displayName", "Scatter"), RB(Bj, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !LB.c.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), RB(Bj, "getComposedData", (function(BB) {
      var jB = BB.xAxis,
        zB = BB.yAxis,
        QB = BB.zAxis,
        nB = BB.item,
        dB = BB.displayedData,
        IB = BB.xAxisTicks,
        NB = BB.yAxisTicks,
        uB = BB.offset,
        UB = nB.props.tooltipType,
        pB = (0, GB.g)(nB.props.children, FB.e),
        rB = aB()(jB.dataKey) ? nB.props.dataKey : jB.dataKey,
        sB = aB()(zB.dataKey) ? nB.props.dataKey : zB.dataKey,
        JB = QB && QB.dataKey,
        mB = QB ? QB.range : oB.defaultProps.range,
        yB = mB && mB[0],
        kB = jB.scale.bandwidth ? jB.scale.bandwidth() : 0,
        LB = zB.scale.bandwidth ? zB.scale.bandwidth() : 0,
        gB = dB.map((function(BB, dB) {
          var uB = (0, VB.Y)(BB, rB),
            mB = (0, VB.Y)(BB, sB),
            GB = !aB()(JB) && (0, VB.Y)(BB, JB) || "-",
            gB = [{
              name: aB()(jB.dataKey) ? nB.props.name : jB.name || jB.dataKey,
              unit: jB.unit || "",
              value: uB,
              payload: BB,
              dataKey: rB,
              type: UB
            }, {
              name: aB()(zB.dataKey) ? nB.props.name : zB.name || zB.dataKey,
              unit: zB.unit || "",
              value: mB,
              payload: BB,
              dataKey: sB,
              type: UB
            }];
          "-" !== GB && gB.push({
            name: QB.name || QB.dataKey,
            unit: QB.unit || "",
            value: GB,
            payload: BB,
            dataKey: JB,
            type: UB
          });
          var tB = (0, VB.A)({
              axis: jB,
              ticks: IB,
              bandSize: kB,
              entry: BB,
              index: dB,
              dataKey: rB
            }),
            SB = (0, VB.A)({
              axis: zB,
              ticks: NB,
              bandSize: LB,
              entry: BB,
              index: dB,
              dataKey: sB
            }),
            MB = "-" !== GB ? QB.scale(GB) : yB,
            EB = Math.sqrt(Math.max(MB, 0) / Math.PI);
          return xB(xB({}, BB), {}, {
            cx: tB,
            cy: SB,
            x: tB - EB,
            y: SB - EB,
            xAxis: jB,
            yAxis: zB,
            zAxis: QB,
            width: 2 * EB,
            height: 2 * EB,
            size: MB,
            node: {
              x: uB,
              y: mB,
              z: GB
            },
            tooltipPayload: gB,
            tooltipPosition: {
              x: tB,
              y: SB
            },
            payload: BB
          }, pB && pB[dB] && pB[dB].props)
        }));
      return xB({
        points: gB
      }, uB)
    }));
    var jj = zB(6347),
      zj = zB(6361),
      Qj = zB(6219),
      nj = (0, QB.e)({
        chartName: "ComposedChart",
        GraphicalChild: [IB.b, nB.d, dB.e, Bj],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: jj.d
        }, {
          axisType: "yAxis",
          AxisComp: zj.e
        }, {
          axisType: "zAxis",
          AxisComp: oB
        }],
        formatAxisMap: Qj.f
      })
  },
  5496: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => Tz
    });
    var QB = zB(62),
      nB = zB(5453),
      dB = zB.n(nB),
      IB = zB(5319),
      NB = zB.n(IB),
      uB = zB(5504),
      UB = zB.n(uB),
      aB = zB(5252),
      pB = zB.n(aB),
      rB = zB(5539),
      sB = zB.n(rB),
      JB = zB(5150),
      mB = zB.n(JB),
      yB = zB(5146),
      kB = zB(5961),
      GB = zB(5967),
      LB = zB(5975),
      gB = zB(5979),
      tB = zB(6048),
      SB = zB(6094),
      MB = zB(6099),
      EB = zB(5463),
      iB = zB(6123),
      qB = zB(6111),
      fB = zB(6121),
      oB = zB(5229);

    function HB(BB) {
      return HB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, HB(BB)
    }

    function DB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function FB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? DB(Object(zB), !0).forEach((function(jB) {
          YB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : DB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function YB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != HB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != HB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == HB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }
    var VB = ["Webkit", "Moz", "O", "ms"];

    function hB(BB) {
      return hB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, hB(BB)
    }

    function XB() {
      return XB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, XB.apply(this, arguments)
    }

    function ZB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function AB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? ZB(Object(zB), !0).forEach((function(jB) {
          wB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : ZB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function TB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, xB(QB.key), QB)
      }
    }

    function PB(BB, jB, zB) {
      return jB = eB(jB),
        function(BB, jB) {
          if (jB && ("object" === hB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, WB() ? Reflect.construct(jB, zB || [], eB(BB).constructor) : jB.apply(BB, zB))
    }

    function WB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (WB = function() {
        return !!BB
      })()
    }

    function eB(BB) {
      return eB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, eB(BB)
    }

    function lB(BB, jB) {
      return lB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, lB(BB, jB)
    }

    function wB(BB, jB, zB) {
      return (jB = xB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function xB(BB) {
      var jB = function(BB, jB) {
        if ("object" != hB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != hB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == hB(jB) ? jB : jB + ""
    }
    var KB = function(BB) {
        return BB.changedTouches && !!BB.changedTouches.length
      },
      CB = function(BB) {
        function jB(BB) {
          var zB;
          return function(BB, jB) {
            if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
          }(this, jB), wB(zB = PB(this, jB, [BB]), "handleDrag", (function(BB) {
            zB.leaveTimer && (clearTimeout(zB.leaveTimer), zB.leaveTimer = null), zB.state.isTravellerMoving ? zB.handleTravellerMove(BB) : zB.state.isSlideMoving && zB.handleSlideDrag(BB)
          })), wB(zB, "handleTouchMove", (function(BB) {
            null != BB.changedTouches && BB.changedTouches.length > 0 && zB.handleDrag(BB.changedTouches[0])
          })), wB(zB, "handleDragEnd", (function() {
            zB.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var BB = zB.props,
                jB = BB.endIndex,
                QB = BB.onDragEnd,
                nB = BB.startIndex;
              null === QB || void 0 === QB || QB({
                endIndex: jB,
                startIndex: nB
              })
            })), zB.detachDragEndListener()
          })), wB(zB, "handleLeaveWrapper", (function() {
            (zB.state.isTravellerMoving || zB.state.isSlideMoving) && (zB.leaveTimer = window.setTimeout(zB.handleDragEnd, zB.props.leaveTimeOut))
          })), wB(zB, "handleEnterSlideOrTraveller", (function() {
            zB.setState({
              isTextActive: !0
            })
          })), wB(zB, "handleLeaveSlideOrTraveller", (function() {
            zB.setState({
              isTextActive: !1
            })
          })), wB(zB, "handleSlideDragStart", (function(BB) {
            var jB = KB(BB) ? BB.changedTouches[0] : BB;
            zB.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: jB.pageX
            }), zB.attachDragEndListener()
          })), zB.travellerDragStartHandlers = {
            startX: zB.handleTravellerDragStart.bind(zB, "startX"),
            endX: zB.handleTravellerDragStart.bind(zB, "endX")
          }, zB.state = {}, zB
        }
        return function(BB, jB) {
          if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(jB && jB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), jB && lB(BB, jB)
        }(jB, BB), zB = jB, nB = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(BB) {
            var zB = BB.startX,
              QB = BB.endX,
              nB = this.state.scaleValues,
              dB = this.props,
              IB = dB.gap,
              NB = dB.data.length - 1,
              uB = Math.min(zB, QB),
              UB = Math.max(zB, QB),
              aB = jB.getIndexInRange(nB, uB),
              pB = jB.getIndexInRange(nB, UB);
            return {
              startIndex: aB - aB % IB,
              endIndex: pB === NB ? NB : pB - pB % IB
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(BB) {
            var jB = this.props,
              zB = jB.data,
              QB = jB.tickFormatter,
              nB = jB.dataKey,
              dB = (0, fB.Y)(zB[BB], nB, BB);
            return NB()(QB) ? QB(dB, BB) : dB
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
            var jB = this.state,
              zB = jB.slideMoveStartX,
              QB = jB.startX,
              nB = jB.endX,
              dB = this.props,
              IB = dB.x,
              NB = dB.width,
              uB = dB.travellerWidth,
              UB = dB.startIndex,
              aB = dB.endIndex,
              pB = dB.onChange,
              rB = BB.pageX - zB;
            rB > 0 ? rB = Math.min(rB, IB + NB - uB - nB, IB + NB - uB - QB) : rB < 0 && (rB = Math.max(rB, IB - QB, IB - nB));
            var sB = this.getIndex({
              startX: QB + rB,
              endX: nB + rB
            });
            sB.startIndex === UB && sB.endIndex === aB || !pB || pB(sB), this.setState({
              startX: QB + rB,
              endX: nB + rB,
              slideMoveStartX: BB.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(BB, jB) {
            var zB = KB(jB) ? jB.changedTouches[0] : jB;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: BB,
              brushMoveStartX: zB.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(BB) {
            var jB = this.state,
              zB = jB.brushMoveStartX,
              QB = jB.movingTravellerId,
              nB = jB.endX,
              dB = jB.startX,
              IB = this.state[QB],
              NB = this.props,
              uB = NB.x,
              UB = NB.width,
              aB = NB.travellerWidth,
              pB = NB.onChange,
              rB = NB.gap,
              sB = NB.data,
              JB = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              mB = BB.pageX - zB;
            mB > 0 ? mB = Math.min(mB, uB + UB - aB - IB) : mB < 0 && (mB = Math.max(mB, uB - IB)), JB[QB] = IB + mB;
            var yB = this.getIndex(JB),
              kB = yB.startIndex,
              GB = yB.endIndex;
            this.setState(wB(wB({}, QB, IB + mB), "brushMoveStartX", BB.pageX), (function() {
              pB && function() {
                var BB = sB.length - 1;
                return "startX" === QB && (nB > dB ? kB % rB === 0 : GB % rB === 0) || nB < dB && GB === BB || "endX" === QB && (nB > dB ? GB % rB === 0 : kB % rB === 0) || nB > dB && GB === BB
              }() && pB(yB)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(BB, jB) {
            var zB = this,
              QB = this.state,
              nB = QB.scaleValues,
              dB = QB.startX,
              IB = QB.endX,
              NB = this.state[jB],
              uB = nB.indexOf(NB);
            if (-1 !== uB) {
              var UB = uB + BB;
              if (!(-1 === UB || UB >= nB.length)) {
                var aB = nB[UB];
                "startX" === jB && aB >= IB || "endX" === jB && aB <= dB || this.setState(wB({}, jB, aB), (function() {
                  zB.props.onChange(zB.getIndex({
                    startX: zB.state.startX,
                    endX: zB.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var BB = this.props,
              jB = BB.x,
              zB = BB.y,
              nB = BB.width,
              dB = BB.height,
              IB = BB.fill,
              NB = BB.stroke;
            return QB.createElement("rect", {
              stroke: NB,
              fill: IB,
              x: jB,
              y: zB,
              width: nB,
              height: dB
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var BB = this.props,
              jB = BB.x,
              zB = BB.y,
              nB = BB.width,
              dB = BB.height,
              IB = BB.data,
              NB = BB.children,
              uB = BB.padding,
              UB = QB.Children.only(NB);
            return UB ? QB.cloneElement(UB, {
              x: jB,
              y: zB,
              width: nB,
              height: dB,
              margin: uB,
              compact: !0,
              data: IB
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(BB, zB) {
            var nB, dB, IB = this,
              NB = this.props,
              uB = NB.y,
              UB = NB.travellerWidth,
              aB = NB.height,
              pB = NB.traveller,
              rB = NB.ariaLabel,
              sB = NB.data,
              JB = NB.startIndex,
              mB = NB.endIndex,
              yB = Math.max(BB, this.props.x),
              kB = AB(AB({}, (0, EB.c)(this.props, !1)), {}, {
                x: yB,
                y: uB,
                width: UB,
                height: aB
              }),
              GB = rB || "Min value: ".concat(null === (nB = sB[JB]) || void 0 === nB ? void 0 : nB.name, ", Max value: ").concat(null === (dB = sB[mB]) || void 0 === dB ? void 0 : dB.name);
            return QB.createElement(LB.e, {
              tabIndex: 0,
              role: "slider",
              "aria-label": GB,
              "aria-valuenow": BB,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[zB],
              onTouchStart: this.travellerDragStartHandlers[zB],
              onKeyDown: function(BB) {
                ["ArrowLeft", "ArrowRight"].includes(BB.key) && (BB.preventDefault(), BB.stopPropagation(), IB.handleTravellerMoveKeyboard("ArrowRight" === BB.key ? 1 : -1, zB))
              },
              onFocus: function() {
                IB.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                IB.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, jB.renderTraveller(pB, kB))
          }
        }, {
          key: "renderSlide",
          value: function(BB, jB) {
            var zB = this.props,
              nB = zB.y,
              dB = zB.height,
              IB = zB.stroke,
              NB = zB.travellerWidth,
              uB = Math.min(BB, jB) + NB,
              UB = Math.max(Math.abs(jB - BB) - NB, 0);
            return QB.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: IB,
              fillOpacity: .2,
              x: uB,
              y: nB,
              width: UB,
              height: dB
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var BB = this.props,
              jB = BB.startIndex,
              zB = BB.endIndex,
              nB = BB.y,
              dB = BB.height,
              IB = BB.travellerWidth,
              NB = BB.stroke,
              uB = this.state,
              UB = uB.startX,
              aB = uB.endX,
              pB = {
                pointerEvents: "none",
                fill: NB
              };
            return QB.createElement(LB.e, {
              className: "recharts-brush-texts"
            }, QB.createElement(qB.b, XB({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(UB, aB) - 5,
              y: nB + dB / 2
            }, pB), this.getTextOfTick(jB)), QB.createElement(qB.b, XB({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(UB, aB) + IB + 5,
              y: nB + dB / 2
            }, pB), this.getTextOfTick(zB)))
          }
        }, {
          key: "render",
          value: function() {
            var BB = this.props,
              jB = BB.data,
              zB = BB.className,
              nB = BB.children,
              dB = BB.x,
              IB = BB.y,
              NB = BB.width,
              uB = BB.height,
              UB = BB.alwaysShowText,
              aB = this.state,
              pB = aB.startX,
              rB = aB.endX,
              sB = aB.isTextActive,
              JB = aB.isSlideMoving,
              mB = aB.isTravellerMoving,
              kB = aB.isTravellerFocused;
            if (!jB || !jB.length || !(0, oB.x)(dB) || !(0, oB.x)(IB) || !(0, oB.x)(NB) || !(0, oB.x)(uB) || NB <= 0 || uB <= 0) return null;
            var GB = (0, yB.e)("recharts-brush", zB),
              gB = 1 === QB.Children.count(nB),
              tB = function(BB, jB) {
                if (!BB) return null;
                var zB = BB.replace(/(\w)/, (function(BB) {
                    return BB.toUpperCase()
                  })),
                  QB = VB.reduce((function(BB, QB) {
                    return FB(FB({}, BB), {}, YB({}, QB + zB, jB))
                  }), {});
                return QB[BB] = jB, QB
              }("userSelect", "none");
            return QB.createElement(LB.e, {
              className: GB,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: tB
            }, this.renderBackground(), gB && this.renderPanorama(), this.renderSlide(pB, rB), this.renderTravellerLayer(pB, "startX"), this.renderTravellerLayer(rB, "endX"), (sB || JB || mB || kB || UB) && this.renderText())
          }
        }], dB = [{
          key: "renderDefaultTraveller",
          value: function(BB) {
            var jB = BB.x,
              zB = BB.y,
              nB = BB.width,
              dB = BB.height,
              IB = BB.stroke,
              NB = Math.floor(zB + dB / 2) - 1;
            return QB.createElement(QB.Fragment, null, QB.createElement("rect", {
              x: jB,
              y: zB,
              width: nB,
              height: dB,
              fill: IB,
              stroke: "none"
            }), QB.createElement("line", {
              x1: jB + 1,
              y1: NB,
              x2: jB + nB - 1,
              y2: NB,
              fill: "none",
              stroke: "#fff"
            }), QB.createElement("line", {
              x1: jB + 1,
              y1: NB + 2,
              x2: jB + nB - 1,
              y2: NB + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(BB, zB) {
            return QB.isValidElement(BB) ? QB.cloneElement(BB, zB) : NB()(BB) ? BB(zB) : jB.renderDefaultTraveller(zB)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(BB, jB) {
            var zB = BB.data,
              QB = BB.width,
              nB = BB.x,
              dB = BB.travellerWidth,
              IB = BB.updateId,
              NB = BB.startIndex,
              uB = BB.endIndex;
            if (zB !== jB.prevData || IB !== jB.prevUpdateId) return AB({
              prevData: zB,
              prevTravellerWidth: dB,
              prevUpdateId: IB,
              prevX: nB,
              prevWidth: QB
            }, zB && zB.length ? function(BB) {
              var jB = BB.data,
                zB = BB.startIndex,
                QB = BB.endIndex,
                nB = BB.x,
                dB = BB.width,
                IB = BB.travellerWidth;
              if (!jB || !jB.length) return {};
              var NB = jB.length,
                uB = (0, iB.f)().domain(UB()(0, NB)).range([nB, nB + dB - IB]),
                aB = uB.domain().map((function(BB) {
                  return uB(BB)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: uB(zB),
                endX: uB(QB),
                scale: uB,
                scaleValues: aB
              }
            }({
              data: zB,
              width: QB,
              x: nB,
              travellerWidth: dB,
              startIndex: NB,
              endIndex: uB
            }) : {
              scale: null,
              scaleValues: null
            });
            if (jB.scale && (QB !== jB.prevWidth || nB !== jB.prevX || dB !== jB.prevTravellerWidth)) {
              jB.scale.range([nB, nB + QB - dB]);
              var aB = jB.scale.domain().map((function(BB) {
                return jB.scale(BB)
              }));
              return {
                prevData: zB,
                prevTravellerWidth: dB,
                prevUpdateId: IB,
                prevX: nB,
                prevWidth: QB,
                startX: jB.scale(BB.startIndex),
                endX: jB.scale(BB.endIndex),
                scaleValues: aB
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(BB, jB) {
            for (var zB = 0, QB = BB.length - 1; QB - zB > 1;) {
              var nB = Math.floor((zB + QB) / 2);
              BB[nB] > jB ? QB = nB : zB = nB
            }
            return jB >= BB[QB] ? QB : zB
          }
        }], nB && TB(zB.prototype, nB), dB && TB(zB, dB), Object.defineProperty(zB, "prototype", {
          writable: !1
        }), zB;
        var zB, nB, dB
      }(QB.PureComponent);
    wB(CB, "displayName", "Brush"), wB(CB, "defaultProps", {
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
    var cB = zB(6117),
      bB = zB(6190),
      vB = zB(6205),
      RB = zB(6214),
      OB = zB(6219),
      Bj = zB(5458);

    function jj() {
      return jj = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, jj.apply(this, arguments)
    }

    function zj(BB) {
      return zj = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, zj(BB)
    }

    function Qj(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function nj(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? Qj(Object(zB), !0).forEach((function(jB) {
          aj(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : Qj(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function dj(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, pj(QB.key), QB)
      }
    }

    function Ij(BB, jB, zB) {
      return jB = uj(jB),
        function(BB, jB) {
          if (jB && ("object" === zj(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, Nj() ? Reflect.construct(jB, zB || [], uj(BB).constructor) : jB.apply(BB, zB))
    }

    function Nj() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (Nj = function() {
        return !!BB
      })()
    }

    function uj(BB) {
      return uj = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, uj(BB)
    }

    function Uj(BB, jB) {
      return Uj = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, Uj(BB, jB)
    }

    function aj(BB, jB, zB) {
      return (jB = pj(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function pj(BB) {
      var jB = function(BB, jB) {
        if ("object" != zj(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != zj(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == zj(jB) ? jB : jB + ""
    }
    var rj = function(BB) {
      function jB() {
        return function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, jB), Ij(this, jB, arguments)
      }
      return function(BB, jB) {
        if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(jB && jB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), jB && Uj(BB, jB)
      }(jB, BB), zB = jB, (nB = [{
        key: "render",
        value: function() {
          var BB = this.props,
            zB = BB.x,
            nB = BB.y,
            dB = BB.r,
            IB = BB.alwaysShow,
            NB = BB.clipPathId,
            uB = (0, oB.v)(zB),
            UB = (0, oB.v)(nB);
          if ((0, Bj.e)(void 0 === IB, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !uB || !UB) return null;
          var aB = function(BB) {
            var jB = BB.x,
              zB = BB.y,
              QB = BB.xAxis,
              nB = BB.yAxis,
              dB = (0, OB.d)({
                x: QB.scale,
                y: nB.scale
              }),
              IB = dB.apply({
                x: jB,
                y: zB
              }, {
                bandAware: !0
              });
            return (0, RB.b)(BB, "discard") && !dB.isInRange(IB) ? null : IB
          }(this.props);
          if (!aB) return null;
          var pB = aB.x,
            rB = aB.y,
            sB = this.props,
            JB = sB.shape,
            mB = sB.className,
            kB = nj(nj({
              clipPath: (0, RB.b)(this.props, "hidden") ? "url(#".concat(NB, ")") : void 0
            }, (0, EB.c)(this.props, !0)), {}, {
              cx: pB,
              cy: rB
            });
          return QB.createElement(LB.e, {
            className: (0, yB.e)("recharts-reference-dot", mB)
          }, jB.renderDot(JB, kB), vB.c.renderCallByParent(this.props, {
            x: pB - dB,
            y: rB - dB,
            width: 2 * dB,
            height: 2 * dB
          }))
        }
      }]) && dj(zB.prototype, nB), dB && dj(zB, dB), Object.defineProperty(zB, "prototype", {
        writable: !1
      }), zB;
      var zB, nB, dB
    }(QB.Component);
    aj(rj, "displayName", "ReferenceDot"), aj(rj, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), aj(rj, "renderDot", (function(BB, jB) {
      return QB.isValidElement(BB) ? QB.cloneElement(BB, jB) : NB()(BB) ? BB(jB) : QB.createElement(SB.b, jj({}, jB, {
        cx: jB.cx,
        cy: jB.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var sj = zB(6289);

    function Jj() {
      return Jj = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, Jj.apply(this, arguments)
    }

    function mj(BB) {
      return mj = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, mj(BB)
    }

    function yj(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function kj(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? yj(Object(zB), !0).forEach((function(jB) {
          Mj(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : yj(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function Gj(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, Ej(QB.key), QB)
      }
    }

    function Lj(BB, jB, zB) {
      return jB = tj(jB),
        function(BB, jB) {
          if (jB && ("object" === mj(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, gj() ? Reflect.construct(jB, zB || [], tj(BB).constructor) : jB.apply(BB, zB))
    }

    function gj() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (gj = function() {
        return !!BB
      })()
    }

    function tj(BB) {
      return tj = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, tj(BB)
    }

    function Sj(BB, jB) {
      return Sj = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, Sj(BB, jB)
    }

    function Mj(BB, jB, zB) {
      return (jB = Ej(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function Ej(BB) {
      var jB = function(BB, jB) {
        if ("object" != mj(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != mj(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == mj(jB) ? jB : jB + ""
    }
    var ij = function(BB) {
      function jB() {
        return function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, jB), Lj(this, jB, arguments)
      }
      return function(BB, jB) {
        if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(jB && jB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), jB && Sj(BB, jB)
      }(jB, BB), zB = jB, (nB = [{
        key: "render",
        value: function() {
          var BB = this.props,
            zB = BB.x1,
            nB = BB.x2,
            dB = BB.y1,
            IB = BB.y2,
            NB = BB.className,
            uB = BB.alwaysShow,
            UB = BB.clipPathId;
          (0, Bj.e)(void 0 === uB, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var aB = (0, oB.v)(zB),
            pB = (0, oB.v)(nB),
            rB = (0, oB.v)(dB),
            sB = (0, oB.v)(IB),
            JB = this.props.shape;
          if (!aB && !pB && !rB && !sB && !JB) return null;
          var mB = function(BB, jB, zB, QB, nB) {
            var dB = nB.x1,
              IB = nB.x2,
              NB = nB.y1,
              uB = nB.y2,
              UB = nB.xAxis,
              aB = nB.yAxis;
            if (!UB || !aB) return null;
            var pB = (0, OB.d)({
                x: UB.scale,
                y: aB.scale
              }),
              rB = {
                x: BB ? pB.x.apply(dB, {
                  position: "start"
                }) : pB.x.rangeMin,
                y: zB ? pB.y.apply(NB, {
                  position: "start"
                }) : pB.y.rangeMin
              },
              sB = {
                x: jB ? pB.x.apply(IB, {
                  position: "end"
                }) : pB.x.rangeMax,
                y: QB ? pB.y.apply(uB, {
                  position: "end"
                }) : pB.y.rangeMax
              };
            return !(0, RB.b)(nB, "discard") || pB.isInRange(rB) && pB.isInRange(sB) ? (0, OB.j)(rB, sB) : null
          }(aB, pB, rB, sB, this.props);
          if (!mB && !JB) return null;
          var kB = (0, RB.b)(this.props, "hidden") ? "url(#".concat(UB, ")") : void 0;
          return QB.createElement(LB.e, {
            className: (0, yB.e)("recharts-reference-area", NB)
          }, jB.renderRect(JB, kj(kj({
            clipPath: kB
          }, (0, EB.c)(this.props, !0)), mB)), vB.c.renderCallByParent(this.props, mB))
        }
      }]) && Gj(zB.prototype, nB), dB && Gj(zB, dB), Object.defineProperty(zB, "prototype", {
        writable: !1
      }), zB;
      var zB, nB, dB
    }(QB.Component);

    function qj(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return fj(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return fj(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return fj(BB, jB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fj(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }
    Mj(ij, "displayName", "ReferenceArea"), Mj(ij, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), Mj(ij, "renderRect", (function(BB, jB) {
      return QB.isValidElement(BB) ? QB.cloneElement(BB, jB) : NB()(BB) ? BB(jB) : QB.createElement(MB.e, Jj({}, jB, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var oj = function(BB, jB, zB, QB, nB) {
        var dB = (0, EB.g)(BB, sj.b),
          IB = (0, EB.g)(BB, rj),
          NB = [].concat(qj(dB), qj(IB)),
          uB = (0, EB.g)(BB, ij),
          UB = "".concat(QB, "Id"),
          aB = QB[0],
          pB = jB;
        if (NB.length && (pB = NB.reduce((function(BB, jB) {
            if (jB.props[UB] === zB && (0, RB.b)(jB.props, "extendDomain") && (0, oB.x)(jB.props[aB])) {
              var QB = jB.props[aB];
              return [Math.min(BB[0], QB), Math.max(BB[1], QB)]
            }
            return BB
          }), pB)), uB.length) {
          var rB = "".concat(aB, "1"),
            sB = "".concat(aB, "2");
          pB = uB.reduce((function(BB, jB) {
            if (jB.props[UB] === zB && (0, RB.b)(jB.props, "extendDomain") && (0, oB.x)(jB.props[rB]) && (0, oB.x)(jB.props[sB])) {
              var QB = jB.props[rB],
                nB = jB.props[sB];
              return [Math.min(BB[0], QB, nB), Math.max(BB[1], QB, nB)]
            }
            return BB
          }), pB)
        }
        return nB && nB.length && (pB = nB.reduce((function(BB, jB) {
          return (0, oB.x)(jB) ? [Math.min(BB[0], jB), Math.max(BB[1], jB)] : BB
        }), pB)), pB
      },
      Hj = zB(6207),
      Dj = zB(5476),
      Fj = zB(36),
      Yj = new(zB.n(Fj)()),
      Vj = "recharts.syncMouseEvents",
      hj = zB(5485);

    function Xj(BB) {
      return Xj = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, Xj(BB)
    }

    function Zj(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, Tj(QB.key), QB)
      }
    }

    function Aj(BB, jB, zB) {
      return (jB = Tj(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function Tj(BB) {
      var jB = function(BB, jB) {
        if ("object" != Xj(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != Xj(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == Xj(jB) ? jB : jB + ""
    }
    var Pj = function() {
      return BB = function BB() {
        ! function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, BB), Aj(this, "activeIndex", 0), Aj(this, "coordinateList", []), Aj(this, "layout", "horizontal")
      }, (jB = [{
        key: "setDetails",
        value: function(BB) {
          var jB, zB = BB.coordinateList,
            QB = void 0 === zB ? null : zB,
            nB = BB.container,
            dB = void 0 === nB ? null : nB,
            IB = BB.layout,
            NB = void 0 === IB ? null : IB,
            uB = BB.offset,
            UB = void 0 === uB ? null : uB,
            aB = BB.mouseHandlerCallback,
            pB = void 0 === aB ? null : aB;
          this.coordinateList = null !== (jB = null !== QB && void 0 !== QB ? QB : this.coordinateList) && void 0 !== jB ? jB : [], this.container = null !== dB && void 0 !== dB ? dB : this.container, this.layout = null !== NB && void 0 !== NB ? NB : this.layout, this.offset = null !== UB && void 0 !== UB ? UB : this.offset, this.mouseHandlerCallback = null !== pB && void 0 !== pB ? pB : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
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
          var BB, jB;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var zB = this.container.getBoundingClientRect(),
              QB = zB.x,
              nB = zB.y,
              dB = zB.height,
              IB = this.coordinateList[this.activeIndex].coordinate,
              NB = (null === (BB = window) || void 0 === BB ? void 0 : BB.scrollX) || 0,
              uB = (null === (jB = window) || void 0 === jB ? void 0 : jB.scrollY) || 0,
              UB = QB + IB + NB,
              aB = nB + this.offset.top + dB / 2 + uB;
            this.mouseHandlerCallback({
              pageX: UB,
              pageY: aB
            })
          }
        }
      }]) && Zj(BB.prototype, jB), zB && Zj(BB, zB), Object.defineProperty(BB, "prototype", {
        writable: !1
      }), BB;
      var BB, jB, zB
    }();
    var Wj = zB(6268),
      ej = zB(6335);

    function lj(BB) {
      return lj = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, lj(BB)
    }
    var wj = ["x", "y", "top", "left", "width", "height", "className"];

    function xj() {
      return xj = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, xj.apply(this, arguments)
    }

    function Kj(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function Cj(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != lj(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != lj(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == lj(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function cj(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }
    var bj = function(BB, jB, zB, QB, nB, dB) {
        return "M".concat(BB, ",").concat(nB, "v").concat(QB, "M").concat(dB, ",").concat(jB, "h").concat(zB)
      },
      vj = function(BB) {
        var jB = BB.x,
          zB = void 0 === jB ? 0 : jB,
          nB = BB.y,
          dB = void 0 === nB ? 0 : nB,
          IB = BB.top,
          NB = void 0 === IB ? 0 : IB,
          uB = BB.left,
          UB = void 0 === uB ? 0 : uB,
          aB = BB.width,
          pB = void 0 === aB ? 0 : aB,
          rB = BB.height,
          sB = void 0 === rB ? 0 : rB,
          JB = BB.className,
          mB = function(BB) {
            for (var jB = 1; jB < arguments.length; jB++) {
              var zB = null != arguments[jB] ? arguments[jB] : {};
              jB % 2 ? Kj(Object(zB), !0).forEach((function(jB) {
                Cj(BB, jB, zB[jB])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : Kj(Object(zB)).forEach((function(jB) {
                Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
              }))
            }
            return BB
          }({
            x: zB,
            y: dB,
            top: NB,
            left: UB,
            width: pB,
            height: sB
          }, cj(BB, wj));
        return (0, oB.x)(zB) && (0, oB.x)(dB) && (0, oB.x)(pB) && (0, oB.x)(sB) && (0, oB.x)(NB) && (0, oB.x)(UB) ? QB.createElement("path", xj({}, (0, EB.c)(mB, !0), {
          className: (0, yB.e)("recharts-cross", JB),
          d: bj(zB, dB, pB, sB, NB, UB)
        })) : null
      };

    function Rj(BB) {
      var jB = BB.cx,
        zB = BB.cy,
        QB = BB.radius,
        nB = BB.startAngle,
        dB = BB.endAngle;
      return {
        points: [(0, Hj.j)(jB, zB, QB, nB), (0, Hj.j)(jB, zB, QB, dB)],
        cx: jB,
        cy: zB,
        radius: QB,
        startAngle: nB,
        endAngle: dB
      }
    }
    var Oj = zB(6287);

    function Bz(BB, jB, zB) {
      var QB, nB, dB, IB;
      if ("horizontal" === BB) dB = QB = jB.x, nB = zB.top, IB = zB.top + zB.height;
      else if ("vertical" === BB) IB = nB = jB.y, QB = zB.left, dB = zB.left + zB.width;
      else if (null != jB.cx && null != jB.cy) {
        if ("centric" !== BB) return Rj(jB);
        var NB = jB.cx,
          uB = jB.cy,
          UB = jB.innerRadius,
          aB = jB.outerRadius,
          pB = jB.angle,
          rB = (0, Hj.j)(NB, uB, UB, pB),
          sB = (0, Hj.j)(NB, uB, aB, pB);
        QB = rB.x, nB = rB.y, dB = sB.x, IB = sB.y
      }
      return [{
        x: QB,
        y: nB
      }, {
        x: dB,
        y: IB
      }]
    }

    function jz(BB) {
      return jz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, jz(BB)
    }

    function zz(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function Qz(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? zz(Object(zB), !0).forEach((function(jB) {
          nz(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : zz(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function nz(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != jz(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != jz(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == jz(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function dz(BB) {
      var jB, zB, nB, dB = BB.element,
        IB = BB.tooltipEventType,
        NB = BB.isActive,
        uB = BB.activeCoordinate,
        UB = BB.activePayload,
        aB = BB.offset,
        pB = BB.activeTooltipIndex,
        rB = BB.tooltipAxisBandSize,
        sB = BB.layout,
        JB = BB.chartName,
        mB = null !== (jB = dB.props.cursor) && void 0 !== jB ? jB : null === (zB = dB.type.defaultProps) || void 0 === zB ? void 0 : zB.cursor;
      if (!dB || !mB || !NB || !uB || "ScatterChart" !== JB && "axis" !== IB) return null;
      var kB = ej.e;
      if ("ScatterChart" === JB) nB = uB, kB = vj;
      else if ("BarChart" === JB) nB = function(BB, jB, zB, QB) {
        var nB = QB / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === BB ? jB.x - nB : zB.left + .5,
          y: "horizontal" === BB ? zB.top + .5 : jB.y - nB,
          width: "horizontal" === BB ? QB : zB.width - 1,
          height: "horizontal" === BB ? zB.height - 1 : QB
        }
      }(sB, uB, aB, rB), kB = MB.e;
      else if ("radial" === sB) {
        var GB = Rj(uB),
          LB = GB.cx,
          gB = GB.cy,
          tB = GB.radius;
        nB = {
          cx: LB,
          cy: gB,
          startAngle: GB.startAngle,
          endAngle: GB.endAngle,
          innerRadius: tB,
          outerRadius: tB
        }, kB = Oj.e
      } else nB = {
        points: Bz(sB, uB, aB)
      }, kB = ej.e;
      var SB = Qz(Qz(Qz(Qz({
        stroke: "#ccc",
        pointerEvents: "none"
      }, aB), nB), (0, EB.c)(mB, !1)), {}, {
        payload: UB,
        payloadIndex: pB,
        className: (0, yB.e)("recharts-tooltip-cursor", mB.className)
      });
      return (0, QB.isValidElement)(mB) ? (0, QB.cloneElement)(mB, SB) : (0, QB.createElement)(kB, SB)
    }
    var Iz = zB(6307),
      Nz = ["item"],
      uz = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function Uz(BB) {
      return Uz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, Uz(BB)
    }

    function az() {
      return az = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, az.apply(this, arguments)
    }

    function pz(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        var zB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != zB) {
          var QB, nB, dB, IB, NB = [],
            uB = !0,
            UB = !1;
          try {
            if (dB = (zB = zB.call(BB)).next, 0 === jB) {
              if (Object(zB) !== zB) return;
              uB = !1
            } else
              for (; !(uB = (QB = dB.call(zB)).done) && (NB.push(QB.value), NB.length !== jB); uB = !0);
          } catch (BB) {
            UB = !0, nB = BB
          } finally {
            try {
              if (!uB && null != zB.return && (IB = zB.return(), Object(IB) !== IB)) return
            } finally {
              if (UB) throw nB
            }
          }
          return NB
        }
      }(BB, jB) || Lz(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rz(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function sz(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, Ez(QB.key), QB)
      }
    }

    function Jz(BB, jB, zB) {
      return jB = yz(jB),
        function(BB, jB) {
          if (jB && ("object" === Uz(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, mz() ? Reflect.construct(jB, zB || [], yz(BB).constructor) : jB.apply(BB, zB))
    }

    function mz() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (mz = function() {
        return !!BB
      })()
    }

    function yz(BB) {
      return yz = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, yz(BB)
    }

    function kz(BB, jB) {
      return kz = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, kz(BB, jB)
    }

    function Gz(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return gz(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || Lz(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Lz(BB, jB) {
      if (BB) {
        if ("string" === typeof BB) return gz(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === zB && BB.constructor && (zB = BB.constructor.name), "Map" === zB || "Set" === zB ? Array.from(BB) : "Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB) ? gz(BB, jB) : void 0
      }
    }

    function gz(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function tz(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function Sz(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? tz(Object(zB), !0).forEach((function(jB) {
          Mz(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : tz(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function Mz(BB, jB, zB) {
      return (jB = Ez(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function Ez(BB) {
      var jB = function(BB, jB) {
        if ("object" != Uz(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != Uz(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == Uz(jB) ? jB : jB + ""
    }
    var iz = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      qz = {
        width: "100%",
        height: "100%"
      },
      fz = {
        x: 0,
        y: 0
      };

    function oz(BB) {
      return BB
    }
    var Hz = function(BB, jB) {
      var zB = jB.graphicalItems,
        QB = jB.dataStartIndex,
        nB = jB.dataEndIndex,
        dB = (null !== zB && void 0 !== zB ? zB : []).reduce((function(BB, jB) {
          var zB = jB.props.data;
          return zB && zB.length ? [].concat(Gz(BB), Gz(zB)) : BB
        }), []);
      return dB.length > 0 ? dB : BB && BB.length && (0, oB.x)(QB) && (0, oB.x)(nB) ? BB.slice(QB, nB + 1) : []
    };

    function Dz(BB) {
      return "number" === BB ? [0, "auto"] : void 0
    }
    var Fz = function(BB, jB, zB, QB) {
        var nB = BB.graphicalItems,
          dB = BB.tooltipAxis,
          IB = Hz(jB, BB);
        return zB < 0 || !nB || !nB.length || zB >= IB.length ? null : nB.reduce((function(nB, NB) {
          var uB, UB, aB = null !== (uB = NB.props.data) && void 0 !== uB ? uB : jB;
          if (aB && BB.dataStartIndex + BB.dataEndIndex !== 0 && BB.dataEndIndex - BB.dataStartIndex >= zB && (aB = aB.slice(BB.dataStartIndex, BB.dataEndIndex + 1)), dB.dataKey && !dB.allowDuplicatedCategory) {
            var pB = void 0 === aB ? IB : aB;
            UB = (0, oB.f)(pB, dB.dataKey, QB)
          } else UB = aB && aB[zB] || IB[zB];
          return UB ? [].concat(Gz(nB), [(0, fB.U)(NB, UB)]) : nB
        }), [])
      },
      Yz = function(BB, jB, zB, QB) {
        var nB = QB || {
            x: BB.chartX,
            y: BB.chartY
          },
          dB = function(BB, jB) {
            return "horizontal" === jB ? BB.x : "vertical" === jB ? BB.y : "centric" === jB ? BB.angle : BB.radius
          }(nB, zB),
          IB = BB.orderedTooltipTicks,
          NB = BB.tooltipAxis,
          uB = BB.tooltipTicks,
          UB = (0, fB.f)(dB, IB, uB, NB);
        if (UB >= 0 && uB) {
          var aB = uB[UB] && uB[UB].value,
            pB = Fz(BB, jB, UB, aB),
            rB = function(BB, jB, zB, QB) {
              var nB = jB.find((function(BB) {
                return BB && BB.index === zB
              }));
              if (nB) {
                if ("horizontal" === BB) return {
                  x: nB.coordinate,
                  y: QB.y
                };
                if ("vertical" === BB) return {
                  x: QB.x,
                  y: nB.coordinate
                };
                if ("centric" === BB) {
                  var dB = nB.coordinate,
                    IB = QB.radius;
                  return Sz(Sz(Sz({}, QB), (0, Hj.j)(QB.cx, QB.cy, IB, dB)), {}, {
                    angle: dB,
                    radius: IB
                  })
                }
                var NB = nB.coordinate,
                  uB = QB.angle;
                return Sz(Sz(Sz({}, QB), (0, Hj.j)(QB.cx, QB.cy, NB, uB)), {}, {
                  angle: uB,
                  radius: NB
                })
              }
              return fz
            }(zB, IB, UB, nB);
          return {
            activeTooltipIndex: UB,
            activeLabel: aB,
            activePayload: pB,
            activeCoordinate: rB
          }
        }
        return null
      },
      Vz = function(BB, jB) {
        var zB = jB.axes,
          QB = jB.graphicalItems,
          nB = jB.axisType,
          IB = jB.axisIdKey,
          NB = jB.stackGroups,
          uB = jB.dataStartIndex,
          aB = jB.dataEndIndex,
          pB = BB.layout,
          rB = BB.children,
          sB = BB.stackOffset,
          JB = (0, fB.Z)(pB, nB);
        return zB.reduce((function(jB, zB) {
          var mB, yB = void 0 !== zB.type.defaultProps ? Sz(Sz({}, zB.type.defaultProps), zB.props) : zB.props,
            kB = yB.type,
            GB = yB.dataKey,
            LB = yB.allowDataOverflow,
            gB = yB.allowDuplicatedCategory,
            tB = yB.scale,
            SB = yB.ticks,
            MB = yB.includeHidden,
            EB = yB[IB];
          if (jB[EB]) return jB;
          var iB, qB, HB, DB = Hz(BB.data, {
              graphicalItems: QB.filter((function(BB) {
                var jB;
                return (IB in BB.props ? BB.props[IB] : null === (jB = BB.type.defaultProps) || void 0 === jB ? void 0 : jB[IB]) === EB
              })),
              dataStartIndex: uB,
              dataEndIndex: aB
            }),
            FB = DB.length;
          (function(BB, jB, zB) {
            if ("number" === zB && !0 === jB && Array.isArray(BB)) {
              var QB = null === BB || void 0 === BB ? void 0 : BB[0],
                nB = null === BB || void 0 === BB ? void 0 : BB[1];
              if (QB && nB && (0, oB.x)(QB) && (0, oB.x)(nB)) return !0
            }
            return !1
          })(yB.domain, LB, kB) && (iB = (0, fB.hb)(yB.domain, null, LB), !JB || "number" !== kB && "auto" === tB || (HB = (0, fB.F)(DB, GB, "category")));
          var YB = Dz(kB);
          if (!iB || 0 === iB.length) {
            var VB, hB = null !== (VB = yB.domain) && void 0 !== VB ? VB : YB;
            if (GB) {
              if (iB = (0, fB.F)(DB, GB, kB), "category" === kB && JB) {
                var XB = (0, oB.n)(iB);
                gB && XB ? (qB = iB, iB = UB()(0, FB)) : gB || (iB = (0, fB.bb)(hB, iB, zB).reduce((function(BB, jB) {
                  return BB.indexOf(jB) >= 0 ? BB : [].concat(Gz(BB), [jB])
                }), []))
              } else if ("category" === kB) iB = gB ? iB.filter((function(BB) {
                return "" !== BB && !dB()(BB)
              })) : (0, fB.bb)(hB, iB, zB).reduce((function(BB, jB) {
                return BB.indexOf(jB) >= 0 || "" === jB || dB()(jB) ? BB : [].concat(Gz(BB), [jB])
              }), []);
              else if ("number" === kB) {
                var ZB = (0, fB.cb)(DB, QB.filter((function(BB) {
                  var jB, zB, QB = IB in BB.props ? BB.props[IB] : null === (jB = BB.type.defaultProps) || void 0 === jB ? void 0 : jB[IB],
                    nB = "hide" in BB.props ? BB.props.hide : null === (zB = BB.type.defaultProps) || void 0 === zB ? void 0 : zB.hide;
                  return QB === EB && (MB || !nB)
                })), GB, nB, pB);
                ZB && (iB = ZB)
              }!JB || "number" !== kB && "auto" === tB || (HB = (0, fB.F)(DB, GB, "category"))
            } else iB = JB ? UB()(0, FB) : NB && NB[EB] && NB[EB].hasStack && "number" === kB ? "expand" === sB ? [0, 1] : (0, fB.I)(NB[EB].stackGroups, uB, aB) : (0, fB.H)(DB, QB.filter((function(BB) {
              var jB = IB in BB.props ? BB.props[IB] : BB.type.defaultProps[IB],
                zB = "hide" in BB.props ? BB.props.hide : BB.type.defaultProps.hide;
              return jB === EB && (MB || !zB)
            })), kB, pB, !0);
            if ("number" === kB) iB = oj(rB, iB, EB, nB, SB), hB && (iB = (0, fB.hb)(hB, iB, LB));
            else if ("category" === kB && hB) {
              var AB = hB;
              iB.every((function(BB) {
                return AB.indexOf(BB) >= 0
              })) && (iB = AB)
            }
          }
          return Sz(Sz({}, jB), {}, Mz({}, EB, Sz(Sz({}, yB), {}, {
            axisType: nB,
            domain: iB,
            categoricalDomain: HB,
            duplicateDomain: qB,
            originalDomain: null !== (mB = yB.domain) && void 0 !== mB ? mB : YB,
            isCategorical: JB,
            layout: pB
          })))
        }), {})
      },
      hz = function(BB, jB) {
        var zB = jB.axisType,
          QB = void 0 === zB ? "xAxis" : zB,
          nB = jB.AxisComp,
          dB = jB.graphicalItems,
          IB = jB.stackGroups,
          NB = jB.dataStartIndex,
          uB = jB.dataEndIndex,
          aB = BB.children,
          rB = "".concat(QB, "Id"),
          sB = (0, EB.g)(aB, nB),
          JB = {};
        return sB && sB.length ? JB = Vz(BB, {
          axes: sB,
          graphicalItems: dB,
          axisType: QB,
          axisIdKey: rB,
          stackGroups: IB,
          dataStartIndex: NB,
          dataEndIndex: uB
        }) : dB && dB.length && (JB = function(BB, jB) {
          var zB = jB.graphicalItems,
            QB = jB.Axis,
            nB = jB.axisType,
            dB = jB.axisIdKey,
            IB = jB.stackGroups,
            NB = jB.dataStartIndex,
            uB = jB.dataEndIndex,
            aB = BB.layout,
            rB = BB.children,
            sB = Hz(BB.data, {
              graphicalItems: zB,
              dataStartIndex: NB,
              dataEndIndex: uB
            }),
            JB = sB.length,
            mB = (0, fB.Z)(aB, nB),
            yB = -1;
          return zB.reduce((function(BB, jB) {
            var kB, GB = (void 0 !== jB.type.defaultProps ? Sz(Sz({}, jB.type.defaultProps), jB.props) : jB.props)[dB],
              LB = Dz("number");
            return BB[GB] ? BB : (yB++, mB ? kB = UB()(0, JB) : IB && IB[GB] && IB[GB].hasStack ? (kB = (0, fB.I)(IB[GB].stackGroups, NB, uB), kB = oj(rB, kB, GB, nB)) : (kB = (0, fB.hb)(LB, (0, fB.H)(sB, zB.filter((function(BB) {
              var jB, zB, QB = dB in BB.props ? BB.props[dB] : null === (jB = BB.type.defaultProps) || void 0 === jB ? void 0 : jB[dB],
                nB = "hide" in BB.props ? BB.props.hide : null === (zB = BB.type.defaultProps) || void 0 === zB ? void 0 : zB.hide;
              return QB === GB && !nB
            })), "number", aB), QB.defaultProps.allowDataOverflow), kB = oj(rB, kB, GB, nB)), Sz(Sz({}, BB), {}, Mz({}, GB, Sz(Sz({
              axisType: nB
            }, QB.defaultProps), {}, {
              hide: !0,
              orientation: pB()(iz, "".concat(nB, ".").concat(yB % 2), null),
              domain: kB,
              originalDomain: LB,
              isCategorical: mB,
              layout: aB
            }))))
          }), {})
        }(BB, {
          Axis: nB,
          graphicalItems: dB,
          axisType: QB,
          axisIdKey: rB,
          stackGroups: IB,
          dataStartIndex: NB,
          dataEndIndex: uB
        })), JB
      },
      Xz = function(BB) {
        var jB = BB.children,
          zB = BB.defaultShowTooltip,
          QB = (0, EB.k)(jB, CB),
          nB = 0,
          dB = 0;
        return BB.data && 0 !== BB.data.length && (dB = BB.data.length - 1), QB && QB.props && (QB.props.startIndex >= 0 && (nB = QB.props.startIndex), QB.props.endIndex >= 0 && (dB = QB.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: nB,
          dataEndIndex: dB,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(zB)
        }
      },
      Zz = function(BB) {
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
      Az = function(BB, jB) {
        return "xAxis" === jB ? BB[jB].width : "yAxis" === jB ? BB[jB].height : void 0
      },
      Tz = function(BB) {
        var jB = BB.chartName,
          zB = BB.GraphicalChild,
          nB = BB.defaultTooltipEventType,
          IB = void 0 === nB ? "axis" : nB,
          uB = BB.validateTooltipEventTypes,
          UB = void 0 === uB ? ["axis"] : uB,
          aB = BB.axisComponents,
          rB = BB.legendContent,
          JB = BB.formatAxisMap,
          iB = BB.defaultProps,
          qB = function(BB, jB) {
            var zB = jB.graphicalItems,
              QB = jB.stackGroups,
              nB = jB.offset,
              IB = jB.updateId,
              NB = jB.dataStartIndex,
              uB = jB.dataEndIndex,
              UB = BB.barSize,
              pB = BB.layout,
              rB = BB.barGap,
              sB = BB.barCategoryGap,
              JB = BB.maxBarSize,
              mB = Zz(pB),
              yB = mB.numericAxisName,
              GB = mB.cateAxisName,
              LB = function(BB) {
                return !(!BB || !BB.length) && BB.some((function(BB) {
                  var jB = (0, EB.n)(BB && BB.type);
                  return jB && jB.indexOf("Bar") >= 0
                }))
              }(zB),
              gB = [];
            return zB.forEach((function(zB, mB) {
              var tB = Hz(BB.data, {
                  graphicalItems: [zB],
                  dataStartIndex: NB,
                  dataEndIndex: uB
                }),
                SB = void 0 !== zB.type.defaultProps ? Sz(Sz({}, zB.type.defaultProps), zB.props) : zB.props,
                MB = SB.dataKey,
                iB = SB.maxBarSize,
                qB = SB["".concat(yB, "Id")],
                oB = SB["".concat(GB, "Id")],
                HB = aB.reduce((function(BB, zB) {
                  var QB = jB["".concat(zB.axisType, "Map")],
                    nB = SB["".concat(zB.axisType, "Id")];
                  QB && QB[nB] || "zAxis" === zB.axisType || (0, kB.e)(!1);
                  var dB = QB[nB];
                  return Sz(Sz({}, BB), {}, Mz(Mz({}, zB.axisType, dB), "".concat(zB.axisType, "Ticks"), (0, fB.R)(dB)))
                }), {}),
                DB = HB[GB],
                FB = HB["".concat(GB, "Ticks")],
                YB = QB && QB[qB] && QB[qB].hasStack && (0, fB.Q)(zB, QB[qB].stackGroups),
                VB = (0, EB.n)(zB.type).indexOf("Bar") >= 0,
                hB = (0, fB.n)(DB, FB),
                XB = [],
                ZB = LB && (0, fB.u)({
                  barSize: UB,
                  stackGroups: QB,
                  totalSize: Az(HB, GB)
                });
              if (VB) {
                var AB, TB, PB = dB()(iB) ? JB : iB,
                  WB = null !== (AB = null !== (TB = (0, fB.n)(DB, FB, !0)) && void 0 !== TB ? TB : PB) && void 0 !== AB ? AB : 0;
                XB = (0, fB.r)({
                  barGap: rB,
                  barCategoryGap: sB,
                  bandSize: WB !== hB ? WB : hB,
                  sizeList: ZB[oB],
                  maxBarSize: PB
                }), WB !== hB && (XB = XB.map((function(BB) {
                  return Sz(Sz({}, BB), {}, {
                    position: Sz(Sz({}, BB.position), {}, {
                      offset: BB.position.offset - WB / 2
                    })
                  })
                })))
              }
              var eB = zB && zB.type && zB.type.getComposedData;
              eB && gB.push({
                props: Sz(Sz({}, eB(Sz(Sz({}, HB), {}, {
                  displayedData: tB,
                  props: BB,
                  dataKey: MB,
                  item: zB,
                  bandSize: hB,
                  barPosition: XB,
                  offset: nB,
                  stackedData: YB,
                  layout: pB,
                  dataStartIndex: NB,
                  dataEndIndex: uB
                }))), {}, Mz(Mz(Mz({
                  key: zB.key || "item-".concat(mB)
                }, yB, HB[yB]), GB, HB[GB]), "animationId", IB)),
                childIndex: (0, EB.z)(zB, BB.children),
                item: zB
              })
            })), gB
          },
          HB = function(BB, QB) {
            var nB = BB.props,
              dB = BB.dataStartIndex,
              IB = BB.dataEndIndex,
              NB = BB.updateId;
            if (!(0, EB.F)({
                props: nB
              })) return null;
            var uB = nB.children,
              UB = nB.layout,
              rB = nB.stackOffset,
              mB = nB.data,
              yB = nB.reverseStackOrder,
              kB = Zz(UB),
              GB = kB.numericAxisName,
              LB = kB.cateAxisName,
              gB = (0, EB.g)(uB, zB),
              SB = (0, fB.M)(mB, gB, "".concat(GB, "Id"), "".concat(LB, "Id"), rB, yB),
              MB = aB.reduce((function(BB, jB) {
                var zB = "".concat(jB.axisType, "Map");
                return Sz(Sz({}, BB), {}, Mz({}, zB, hz(nB, Sz(Sz({}, jB), {}, {
                  graphicalItems: gB,
                  stackGroups: jB.axisType === GB && SB,
                  dataStartIndex: dB,
                  dataEndIndex: IB
                }))))
              }), {}),
              iB = function(BB, jB) {
                var zB = BB.props,
                  QB = BB.graphicalItems,
                  nB = BB.xAxisMap,
                  dB = void 0 === nB ? {} : nB,
                  IB = BB.yAxisMap,
                  NB = void 0 === IB ? {} : IB,
                  uB = zB.width,
                  UB = zB.height,
                  aB = zB.children,
                  rB = zB.margin || {},
                  sB = (0, EB.k)(aB, CB),
                  JB = (0, EB.k)(aB, tB.c),
                  mB = Object.keys(NB).reduce((function(BB, jB) {
                    var zB = NB[jB],
                      QB = zB.orientation;
                    return zB.mirror || zB.hide ? BB : Sz(Sz({}, BB), {}, Mz({}, QB, BB[QB] + zB.width))
                  }), {
                    left: rB.left || 0,
                    right: rB.right || 0
                  }),
                  yB = Object.keys(dB).reduce((function(BB, jB) {
                    var zB = dB[jB],
                      QB = zB.orientation;
                    return zB.mirror || zB.hide ? BB : Sz(Sz({}, BB), {}, Mz({}, QB, pB()(BB, "".concat(QB)) + zB.height))
                  }), {
                    top: rB.top || 0,
                    bottom: rB.bottom || 0
                  }),
                  kB = Sz(Sz({}, yB), mB),
                  GB = kB.bottom;
                sB && (kB.bottom += sB.props.height || CB.defaultProps.height), JB && jB && (kB = (0, fB.e)(kB, QB, zB, jB));
                var LB = uB - kB.left - kB.right,
                  gB = UB - kB.top - kB.bottom;
                return Sz(Sz({
                  brushBottom: GB
                }, kB), {}, {
                  width: Math.max(LB, 0),
                  height: Math.max(gB, 0)
                })
              }(Sz(Sz({}, MB), {}, {
                props: nB,
                graphicalItems: gB
              }), null === QB || void 0 === QB ? void 0 : QB.legendBBox);
            Object.keys(MB).forEach((function(BB) {
              MB[BB] = JB(nB, MB[BB], iB, BB.replace("Map", ""), jB)
            }));
            var HB = function(BB) {
                var jB = (0, oB.g)(BB),
                  zB = (0, fB.R)(jB, !1, !0);
                return {
                  tooltipTicks: zB,
                  orderedTooltipTicks: sB()(zB, (function(BB) {
                    return BB.coordinate
                  })),
                  tooltipAxis: jB,
                  tooltipAxisBandSize: (0, fB.n)(jB, zB)
                }
              }(MB["".concat(LB, "Map")]),
              DB = qB(nB, Sz(Sz({}, MB), {}, {
                dataStartIndex: dB,
                dataEndIndex: IB,
                updateId: NB,
                graphicalItems: gB,
                stackGroups: SB,
                offset: iB
              }));
            return Sz(Sz({
              formattedGraphicalItems: DB,
              graphicalItems: gB,
              offset: iB,
              stackGroups: SB
            }, HB), MB)
          },
          DB = function(BB) {
            function zB(BB) {
              var nB, IB, uB;
              return function(BB, jB) {
                if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
              }(this, zB), Mz(uB = Jz(this, zB, [BB]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Mz(uB, "accessibilityManager", new Pj), Mz(uB, "handleLegendBBoxUpdate", (function(BB) {
                if (BB) {
                  var jB = uB.state,
                    zB = jB.dataStartIndex,
                    QB = jB.dataEndIndex,
                    nB = jB.updateId;
                  uB.setState(Sz({
                    legendBBox: BB
                  }, HB({
                    props: uB.props,
                    dataStartIndex: zB,
                    dataEndIndex: QB,
                    updateId: nB
                  }, Sz(Sz({}, uB.state), {}, {
                    legendBBox: BB
                  }))))
                }
              })), Mz(uB, "handleReceiveSyncEvent", (function(BB, jB, zB) {
                if (uB.props.syncId === BB) {
                  if (zB === uB.eventEmitterSymbol && "function" !== typeof uB.props.syncMethod) return;
                  uB.applySyncEvent(jB)
                }
              })), Mz(uB, "handleBrushChange", (function(BB) {
                var jB = BB.startIndex,
                  zB = BB.endIndex;
                if (jB !== uB.state.dataStartIndex || zB !== uB.state.dataEndIndex) {
                  var QB = uB.state.updateId;
                  uB.setState((function() {
                    return Sz({
                      dataStartIndex: jB,
                      dataEndIndex: zB
                    }, HB({
                      props: uB.props,
                      dataStartIndex: jB,
                      dataEndIndex: zB,
                      updateId: QB
                    }, uB.state))
                  })), uB.triggerSyncEvent({
                    dataStartIndex: jB,
                    dataEndIndex: zB
                  })
                }
              })), Mz(uB, "handleMouseEnter", (function(BB) {
                var jB = uB.getMouseInfo(BB);
                if (jB) {
                  var zB = Sz(Sz({}, jB), {}, {
                    isTooltipActive: !0
                  });
                  uB.setState(zB), uB.triggerSyncEvent(zB);
                  var QB = uB.props.onMouseEnter;
                  NB()(QB) && QB(zB, BB)
                }
              })), Mz(uB, "triggeredAfterMouseMove", (function(BB) {
                var jB = uB.getMouseInfo(BB),
                  zB = jB ? Sz(Sz({}, jB), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                uB.setState(zB), uB.triggerSyncEvent(zB);
                var QB = uB.props.onMouseMove;
                NB()(QB) && QB(zB, BB)
              })), Mz(uB, "handleItemMouseEnter", (function(BB) {
                uB.setState((function() {
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
              })), Mz(uB, "handleItemMouseLeave", (function() {
                uB.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), Mz(uB, "handleMouseMove", (function(BB) {
                BB.persist(), uB.throttleTriggeredAfterMouseMove(BB)
              })), Mz(uB, "handleMouseLeave", (function(BB) {
                uB.throttleTriggeredAfterMouseMove.cancel();
                var jB = {
                  isTooltipActive: !1
                };
                uB.setState(jB), uB.triggerSyncEvent(jB);
                var zB = uB.props.onMouseLeave;
                NB()(zB) && zB(jB, BB)
              })), Mz(uB, "handleOuterEvent", (function(BB) {
                var jB, zB = (0, EB.q)(BB),
                  QB = pB()(uB.props, "".concat(zB));
                zB && NB()(QB) && QB(null !== (jB = /.*touch.*/i.test(zB) ? uB.getMouseInfo(BB.changedTouches[0]) : uB.getMouseInfo(BB)) && void 0 !== jB ? jB : {}, BB)
              })), Mz(uB, "handleClick", (function(BB) {
                var jB = uB.getMouseInfo(BB);
                if (jB) {
                  var zB = Sz(Sz({}, jB), {}, {
                    isTooltipActive: !0
                  });
                  uB.setState(zB), uB.triggerSyncEvent(zB);
                  var QB = uB.props.onClick;
                  NB()(QB) && QB(zB, BB)
                }
              })), Mz(uB, "handleMouseDown", (function(BB) {
                var jB = uB.props.onMouseDown;
                NB()(jB) && jB(uB.getMouseInfo(BB), BB)
              })), Mz(uB, "handleMouseUp", (function(BB) {
                var jB = uB.props.onMouseUp;
                NB()(jB) && jB(uB.getMouseInfo(BB), BB)
              })), Mz(uB, "handleTouchMove", (function(BB) {
                null != BB.changedTouches && BB.changedTouches.length > 0 && uB.throttleTriggeredAfterMouseMove(BB.changedTouches[0])
              })), Mz(uB, "handleTouchStart", (function(BB) {
                null != BB.changedTouches && BB.changedTouches.length > 0 && uB.handleMouseDown(BB.changedTouches[0])
              })), Mz(uB, "handleTouchEnd", (function(BB) {
                null != BB.changedTouches && BB.changedTouches.length > 0 && uB.handleMouseUp(BB.changedTouches[0])
              })), Mz(uB, "handleDoubleClick", (function(BB) {
                var jB = uB.props.onDoubleClick;
                NB()(jB) && jB(uB.getMouseInfo(BB), BB)
              })), Mz(uB, "handleContextMenu", (function(BB) {
                var jB = uB.props.onContextMenu;
                NB()(jB) && jB(uB.getMouseInfo(BB), BB)
              })), Mz(uB, "triggerSyncEvent", (function(BB) {
                void 0 !== uB.props.syncId && Yj.emit(Vj, uB.props.syncId, BB, uB.eventEmitterSymbol)
              })), Mz(uB, "applySyncEvent", (function(BB) {
                var jB = uB.props,
                  zB = jB.layout,
                  QB = jB.syncMethod,
                  nB = uB.state.updateId,
                  dB = BB.dataStartIndex,
                  IB = BB.dataEndIndex;
                if (void 0 !== BB.dataStartIndex || void 0 !== BB.dataEndIndex) uB.setState(Sz({
                  dataStartIndex: dB,
                  dataEndIndex: IB
                }, HB({
                  props: uB.props,
                  dataStartIndex: dB,
                  dataEndIndex: IB,
                  updateId: nB
                }, uB.state)));
                else if (void 0 !== BB.activeTooltipIndex) {
                  var NB = BB.chartX,
                    UB = BB.chartY,
                    aB = BB.activeTooltipIndex,
                    pB = uB.state,
                    rB = pB.offset,
                    sB = pB.tooltipTicks;
                  if (!rB) return;
                  if ("function" === typeof QB) aB = QB(sB, BB);
                  else if ("value" === QB) {
                    aB = -1;
                    for (var JB = 0; JB < sB.length; JB++)
                      if (sB[JB].value === BB.activeLabel) {
                        aB = JB;
                        break
                      }
                  }
                  var mB = Sz(Sz({}, rB), {}, {
                      x: rB.left,
                      y: rB.top
                    }),
                    yB = Math.min(NB, mB.x + mB.width),
                    kB = Math.min(UB, mB.y + mB.height),
                    GB = sB[aB] && sB[aB].value,
                    LB = Fz(uB.state, uB.props.data, aB),
                    gB = sB[aB] ? {
                      x: "horizontal" === zB ? sB[aB].coordinate : yB,
                      y: "horizontal" === zB ? kB : sB[aB].coordinate
                    } : fz;
                  uB.setState(Sz(Sz({}, BB), {}, {
                    activeLabel: GB,
                    activeCoordinate: gB,
                    activePayload: LB,
                    activeTooltipIndex: aB
                  }))
                } else uB.setState(BB)
              })), Mz(uB, "renderCursor", (function(BB) {
                var zB, nB = uB.state,
                  dB = nB.isTooltipActive,
                  IB = nB.activeCoordinate,
                  NB = nB.activePayload,
                  UB = nB.offset,
                  aB = nB.activeTooltipIndex,
                  pB = nB.tooltipAxisBandSize,
                  rB = uB.getTooltipEventType(),
                  sB = null !== (zB = BB.props.active) && void 0 !== zB ? zB : dB,
                  JB = uB.props.layout,
                  mB = BB.key || "_recharts-cursor";
                return QB.createElement(dz, {
                  key: mB,
                  activeCoordinate: IB,
                  activePayload: NB,
                  activeTooltipIndex: aB,
                  chartName: jB,
                  element: BB,
                  isActive: sB,
                  layout: JB,
                  offset: UB,
                  tooltipAxisBandSize: pB,
                  tooltipEventType: rB
                })
              })), Mz(uB, "renderPolarAxis", (function(BB, jB, zB) {
                var nB = pB()(BB, "type.axisType"),
                  dB = pB()(uB.state, "".concat(nB, "Map")),
                  IB = BB.type.defaultProps,
                  NB = void 0 !== IB ? Sz(Sz({}, IB), BB.props) : BB.props,
                  UB = dB && dB[NB["".concat(nB, "Id")]];
                return (0, QB.cloneElement)(BB, Sz(Sz({}, UB), {}, {
                  className: (0, yB.e)(nB, UB.className),
                  key: BB.key || "".concat(jB, "-").concat(zB),
                  ticks: (0, fB.R)(UB, !0)
                }))
              })), Mz(uB, "renderPolarGrid", (function(BB) {
                var jB = BB.props,
                  zB = jB.radialLines,
                  nB = jB.polarAngles,
                  dB = jB.polarRadius,
                  IB = uB.state,
                  NB = IB.radiusAxisMap,
                  UB = IB.angleAxisMap,
                  aB = (0, oB.g)(NB),
                  pB = (0, oB.g)(UB),
                  rB = pB.cx,
                  sB = pB.cy,
                  JB = pB.innerRadius,
                  mB = pB.outerRadius;
                return (0, QB.cloneElement)(BB, {
                  polarAngles: Array.isArray(nB) ? nB : (0, fB.R)(pB, !0).map((function(BB) {
                    return BB.coordinate
                  })),
                  polarRadius: Array.isArray(dB) ? dB : (0, fB.R)(aB, !0).map((function(BB) {
                    return BB.coordinate
                  })),
                  cx: rB,
                  cy: sB,
                  innerRadius: JB,
                  outerRadius: mB,
                  key: BB.key || "polar-grid",
                  radialLines: zB
                })
              })), Mz(uB, "renderLegend", (function() {
                var BB = uB.state.formattedGraphicalItems,
                  jB = uB.props,
                  zB = jB.children,
                  nB = jB.width,
                  dB = jB.height,
                  IB = uB.props.margin || {},
                  NB = nB - (IB.left || 0) - (IB.right || 0),
                  UB = (0, bB.e)({
                    children: zB,
                    formattedGraphicalItems: BB,
                    legendWidth: NB,
                    legendContent: rB
                  });
                if (!UB) return null;
                var aB = UB.item,
                  pB = rz(UB, Nz);
                return (0, QB.cloneElement)(aB, Sz(Sz({}, pB), {}, {
                  chartWidth: nB,
                  chartHeight: dB,
                  margin: IB,
                  onBBoxUpdate: uB.handleLegendBBoxUpdate
                }))
              })), Mz(uB, "renderTooltip", (function() {
                var BB, jB = uB.props,
                  zB = jB.children,
                  nB = jB.accessibilityLayer,
                  dB = (0, EB.k)(zB, gB.b);
                if (!dB) return null;
                var IB = uB.state,
                  NB = IB.isTooltipActive,
                  UB = IB.activeCoordinate,
                  aB = IB.activePayload,
                  pB = IB.activeLabel,
                  rB = IB.offset,
                  sB = null !== (BB = dB.props.active) && void 0 !== BB ? BB : NB;
                return (0, QB.cloneElement)(dB, {
                  viewBox: Sz(Sz({}, rB), {}, {
                    x: rB.left,
                    y: rB.top
                  }),
                  active: sB,
                  label: pB,
                  payload: sB ? aB : [],
                  coordinate: UB,
                  accessibilityLayer: nB
                })
              })), Mz(uB, "renderBrush", (function(BB) {
                var jB = uB.props,
                  zB = jB.margin,
                  nB = jB.data,
                  dB = uB.state,
                  IB = dB.offset,
                  NB = dB.dataStartIndex,
                  UB = dB.dataEndIndex,
                  aB = dB.updateId;
                return (0, QB.cloneElement)(BB, {
                  key: BB.key || "_recharts-brush",
                  onChange: (0, fB.l)(uB.handleBrushChange, BB.props.onChange),
                  data: nB,
                  x: (0, oB.x)(BB.props.x) ? BB.props.x : IB.left,
                  y: (0, oB.x)(BB.props.y) ? BB.props.y : IB.top + IB.height + IB.brushBottom - (zB.bottom || 0),
                  width: (0, oB.x)(BB.props.width) ? BB.props.width : IB.width,
                  startIndex: NB,
                  endIndex: UB,
                  updateId: "brush-".concat(aB)
                })
              })), Mz(uB, "renderReferenceElement", (function(BB, jB, zB) {
                if (!BB) return null;
                var nB = uB.clipPathId,
                  dB = uB.state,
                  IB = dB.xAxisMap,
                  NB = dB.yAxisMap,
                  UB = dB.offset,
                  aB = BB.type.defaultProps || {},
                  pB = BB.props,
                  rB = pB.xAxisId,
                  sB = void 0 === rB ? aB.xAxisId : rB,
                  JB = pB.yAxisId,
                  mB = void 0 === JB ? aB.yAxisId : JB;
                return (0, QB.cloneElement)(BB, {
                  key: BB.key || "".concat(jB, "-").concat(zB),
                  xAxis: IB[sB],
                  yAxis: NB[mB],
                  viewBox: {
                    x: UB.left,
                    y: UB.top,
                    width: UB.width,
                    height: UB.height
                  },
                  clipPathId: nB
                })
              })), Mz(uB, "renderActivePoints", (function(BB) {
                var jB = BB.item,
                  QB = BB.activePoint,
                  nB = BB.basePoint,
                  dB = BB.childIndex,
                  IB = BB.isRange,
                  NB = [],
                  uB = jB.props.key,
                  UB = void 0 !== jB.item.type.defaultProps ? Sz(Sz({}, jB.item.type.defaultProps), jB.item.props) : jB.item.props,
                  aB = UB.activeDot,
                  pB = Sz(Sz({
                    index: dB,
                    dataKey: UB.dataKey,
                    cx: QB.x,
                    cy: QB.y,
                    r: 4,
                    fill: (0, fB.L)(jB.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: QB.payload,
                    value: QB.value
                  }, (0, EB.c)(aB, !1)), (0, hj.j)(aB));
                return NB.push(zB.renderActiveDot(aB, pB, "".concat(uB, "-activePoint-").concat(dB))), nB ? NB.push(zB.renderActiveDot(aB, Sz(Sz({}, pB), {}, {
                  cx: nB.x,
                  cy: nB.y
                }), "".concat(uB, "-basePoint-").concat(dB))) : IB && NB.push(null), NB
              })), Mz(uB, "renderGraphicChild", (function(BB, jB, zB) {
                var nB = uB.filterFormatItem(BB, jB, zB);
                if (!nB) return null;
                var IB = uB.getTooltipEventType(),
                  NB = uB.state,
                  UB = NB.isTooltipActive,
                  aB = NB.tooltipAxis,
                  pB = NB.activeTooltipIndex,
                  rB = NB.activeLabel,
                  sB = uB.props.children,
                  JB = (0, EB.k)(sB, gB.b),
                  mB = nB.props,
                  yB = mB.points,
                  kB = mB.isRange,
                  GB = mB.baseLine,
                  LB = void 0 !== nB.item.type.defaultProps ? Sz(Sz({}, nB.item.type.defaultProps), nB.item.props) : nB.item.props,
                  tB = LB.activeDot,
                  SB = LB.hide,
                  MB = LB.activeBar,
                  iB = LB.activeShape,
                  qB = Boolean(!SB && UB && JB && (tB || MB || iB)),
                  HB = {};
                "axis" !== IB && JB && "click" === JB.props.trigger ? HB = {
                  onClick: (0, fB.l)(uB.handleItemMouseEnter, BB.props.onClick)
                } : "axis" !== IB && (HB = {
                  onMouseLeave: (0, fB.l)(uB.handleItemMouseLeave, BB.props.onMouseLeave),
                  onMouseEnter: (0, fB.l)(uB.handleItemMouseEnter, BB.props.onMouseEnter)
                });
                var DB = (0, QB.cloneElement)(BB, Sz(Sz({}, nB.props), HB));
                if (qB) {
                  if (!(pB >= 0)) {
                    var FB, YB = (null !== (FB = uB.getItemByXY(uB.state.activeCoordinate)) && void 0 !== FB ? FB : {
                        graphicalItem: DB
                      }).graphicalItem,
                      VB = YB.item,
                      hB = void 0 === VB ? BB : VB,
                      XB = YB.childIndex,
                      ZB = Sz(Sz(Sz({}, nB.props), HB), {}, {
                        activeIndex: XB
                      });
                    return [(0, QB.cloneElement)(hB, ZB), null, null]
                  }
                  var AB, TB;
                  if (aB.dataKey && !aB.allowDuplicatedCategory) {
                    var PB = "function" === typeof aB.dataKey ? function(BB) {
                      return "function" === typeof aB.dataKey ? aB.dataKey(BB.payload) : null
                    } : "payload.".concat(aB.dataKey.toString());
                    AB = (0, oB.f)(yB, PB, rB), TB = kB && GB && (0, oB.f)(GB, PB, rB)
                  } else AB = null === yB || void 0 === yB ? void 0 : yB[pB], TB = kB && GB && GB[pB];
                  if (iB || MB) {
                    var WB = void 0 !== BB.props.activeIndex ? BB.props.activeIndex : pB;
                    return [(0, QB.cloneElement)(BB, Sz(Sz(Sz({}, nB.props), HB), {}, {
                      activeIndex: WB
                    })), null, null]
                  }
                  if (!dB()(AB)) return [DB].concat(Gz(uB.renderActivePoints({
                    item: nB,
                    activePoint: AB,
                    basePoint: TB,
                    childIndex: pB,
                    isRange: kB
                  })))
                }
                return kB ? [DB, null, null] : [DB, null]
              })), Mz(uB, "renderCustomized", (function(BB, jB, zB) {
                return (0, QB.cloneElement)(BB, Sz(Sz({
                  key: "recharts-customized-".concat(zB)
                }, uB.props), uB.state))
              })), Mz(uB, "renderMap", {
                CartesianGrid: {
                  handler: oz,
                  once: !0
                },
                ReferenceArea: {
                  handler: uB.renderReferenceElement
                },
                ReferenceLine: {
                  handler: oz
                },
                ReferenceDot: {
                  handler: uB.renderReferenceElement
                },
                XAxis: {
                  handler: oz
                },
                YAxis: {
                  handler: oz
                },
                Brush: {
                  handler: uB.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: uB.renderGraphicChild
                },
                Line: {
                  handler: uB.renderGraphicChild
                },
                Area: {
                  handler: uB.renderGraphicChild
                },
                Radar: {
                  handler: uB.renderGraphicChild
                },
                RadialBar: {
                  handler: uB.renderGraphicChild
                },
                Scatter: {
                  handler: uB.renderGraphicChild
                },
                Pie: {
                  handler: uB.renderGraphicChild
                },
                Funnel: {
                  handler: uB.renderGraphicChild
                },
                Tooltip: {
                  handler: uB.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: uB.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: uB.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: uB.renderPolarAxis
                },
                Customized: {
                  handler: uB.renderCustomized
                }
              }), uB.clipPathId = "".concat(null !== (nB = BB.id) && void 0 !== nB ? nB : (0, oB.D)("recharts"), "-clip"), uB.throttleTriggeredAfterMouseMove = mB()(uB.triggeredAfterMouseMove, null !== (IB = BB.throttleDelay) && void 0 !== IB ? IB : 1e3 / 60), uB.state = {}, uB
            }
            return function(BB, jB) {
              if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
              BB.prototype = Object.create(jB && jB.prototype, {
                constructor: {
                  value: BB,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(BB, "prototype", {
                writable: !1
              }), jB && kz(BB, jB)
            }(zB, BB), nB = zB, uB = [{
              key: "componentDidMount",
              value: function() {
                var BB, jB;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (BB = this.props.margin.left) && void 0 !== BB ? BB : 0,
                    top: null !== (jB = this.props.margin.top) && void 0 !== jB ? jB : 0
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
                  jB = BB.children,
                  zB = BB.data,
                  QB = BB.height,
                  nB = BB.layout,
                  dB = (0, EB.k)(jB, gB.b);
                if (dB) {
                  var IB = dB.props.defaultIndex;
                  if (!("number" !== typeof IB || IB < 0 || IB > this.state.tooltipTicks.length - 1)) {
                    var NB = this.state.tooltipTicks[IB] && this.state.tooltipTicks[IB].value,
                      uB = Fz(this.state, zB, IB, NB),
                      UB = this.state.tooltipTicks[IB].coordinate,
                      aB = (this.state.offset.top + QB) / 2,
                      pB = "horizontal" === nB ? {
                        x: UB,
                        y: aB
                      } : {
                        y: UB,
                        x: aB
                      },
                      rB = this.state.formattedGraphicalItems.find((function(BB) {
                        return "Scatter" === BB.item.type.name
                      }));
                    rB && (pB = Sz(Sz({}, pB), rB.props.points[IB].tooltipPosition), uB = rB.props.points[IB].tooltipPayload);
                    var sB = {
                      activeTooltipIndex: IB,
                      isTooltipActive: !0,
                      activeLabel: NB,
                      activePayload: uB,
                      activeCoordinate: pB
                    };
                    this.setState(sB), this.renderCursor(dB), this.accessibilityManager.setIndex(IB)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(BB, jB) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== jB.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== BB.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== BB.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (zB = this.props.margin.left) && void 0 !== zB ? zB : 0,
                    top: null !== (QB = this.props.margin.top) && void 0 !== QB ? QB : 0
                  }
                }), null) : null;
                var zB, QB
              }
            }, {
              key: "componentDidUpdate",
              value: function(BB) {
                (0, EB.x)([(0, EB.k)(BB.children, gB.b)], [(0, EB.k)(this.props.children, gB.b)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var BB = (0, EB.k)(this.props.children, gB.b);
                if (BB && "boolean" === typeof BB.props.shared) {
                  var jB = BB.props.shared ? "axis" : "item";
                  return UB.indexOf(jB) >= 0 ? jB : IB
                }
                return IB
              }
            }, {
              key: "getMouseInfo",
              value: function(BB) {
                if (!this.container) return null;
                var jB = this.container,
                  zB = jB.getBoundingClientRect(),
                  QB = (0, cB.d)(zB),
                  nB = {
                    chartX: Math.round(BB.pageX - QB.left),
                    chartY: Math.round(BB.pageY - QB.top)
                  },
                  dB = zB.width / jB.offsetWidth || 1,
                  IB = this.inRange(nB.chartX, nB.chartY, dB);
                if (!IB) return null;
                var NB = this.state,
                  uB = NB.xAxisMap,
                  UB = NB.yAxisMap,
                  aB = this.getTooltipEventType(),
                  pB = Yz(this.state, this.props.data, this.props.layout, IB);
                if ("axis" !== aB && uB && UB) {
                  var rB = (0, oB.g)(uB).scale,
                    sB = (0, oB.g)(UB).scale,
                    JB = rB && rB.invert ? rB.invert(nB.chartX) : null,
                    mB = sB && sB.invert ? sB.invert(nB.chartY) : null;
                  return Sz(Sz({}, nB), {}, {
                    xValue: JB,
                    yValue: mB
                  }, pB)
                }
                return pB ? Sz(Sz({}, nB), pB) : null
              }
            }, {
              key: "inRange",
              value: function(BB, jB) {
                var zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  QB = this.props.layout,
                  nB = BB / zB,
                  dB = jB / zB;
                if ("horizontal" === QB || "vertical" === QB) {
                  var IB = this.state.offset;
                  return nB >= IB.left && nB <= IB.left + IB.width && dB >= IB.top && dB <= IB.top + IB.height ? {
                    x: nB,
                    y: dB
                  } : null
                }
                var NB = this.state,
                  uB = NB.angleAxisMap,
                  UB = NB.radiusAxisMap;
                if (uB && UB) {
                  var aB = (0, oB.g)(uB);
                  return (0, Hj.h)({
                    x: nB,
                    y: dB
                  }, aB)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var BB = this.props.children,
                  jB = this.getTooltipEventType(),
                  zB = (0, EB.k)(BB, gB.b),
                  QB = {};
                return zB && "axis" === jB && (QB = "click" === zB.props.trigger ? {
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
                }), Sz(Sz({}, (0, hj.j)(this.props, this.handleOuterEvent)), QB)
              }
            }, {
              key: "addListener",
              value: function() {
                Yj.on(Vj, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                Yj.removeListener(Vj, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(BB, jB, zB) {
                for (var QB = this.state.formattedGraphicalItems, nB = 0, dB = QB.length; nB < dB; nB++) {
                  var IB = QB[nB];
                  if (IB.item === BB || IB.props.key === BB.key || jB === (0, EB.n)(IB.item.type) && zB === IB.childIndex) return IB
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var BB = this.clipPathId,
                  jB = this.state.offset,
                  zB = jB.left,
                  nB = jB.top,
                  dB = jB.height,
                  IB = jB.width;
                return QB.createElement("defs", null, QB.createElement("clipPath", {
                  id: BB
                }, QB.createElement("rect", {
                  x: zB,
                  y: nB,
                  height: dB,
                  width: IB
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var BB = this.state.xAxisMap;
                return BB ? Object.entries(BB).reduce((function(BB, jB) {
                  var zB = pz(jB, 2),
                    QB = zB[0],
                    nB = zB[1];
                  return Sz(Sz({}, BB), {}, Mz({}, QB, nB.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var BB = this.state.yAxisMap;
                return BB ? Object.entries(BB).reduce((function(BB, jB) {
                  var zB = pz(jB, 2),
                    QB = zB[0],
                    nB = zB[1];
                  return Sz(Sz({}, BB), {}, Mz({}, QB, nB.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(BB) {
                var jB;
                return null === (jB = this.state.xAxisMap) || void 0 === jB || null === (jB = jB[BB]) || void 0 === jB ? void 0 : jB.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(BB) {
                var jB;
                return null === (jB = this.state.yAxisMap) || void 0 === jB || null === (jB = jB[BB]) || void 0 === jB ? void 0 : jB.scale
              }
            }, {
              key: "getItemByXY",
              value: function(BB) {
                var jB = this.state,
                  zB = jB.formattedGraphicalItems,
                  QB = jB.activeItem;
                if (zB && zB.length)
                  for (var nB = 0, dB = zB.length; nB < dB; nB++) {
                    var IB = zB[nB],
                      NB = IB.props,
                      uB = IB.item,
                      UB = void 0 !== uB.type.defaultProps ? Sz(Sz({}, uB.type.defaultProps), uB.props) : uB.props,
                      aB = (0, EB.n)(uB.type);
                    if ("Bar" === aB) {
                      var pB = (NB.data || []).find((function(jB) {
                        return (0, MB.h)(BB, jB)
                      }));
                      if (pB) return {
                        graphicalItem: IB,
                        payload: pB
                      }
                    } else if ("RadialBar" === aB) {
                      var rB = (NB.data || []).find((function(jB) {
                        return (0, Hj.h)(BB, jB)
                      }));
                      if (rB) return {
                        graphicalItem: IB,
                        payload: rB
                      }
                    } else if ((0, Wj.h)(IB, QB) || (0, Wj.i)(IB, QB) || (0, Wj.m)(IB, QB)) {
                      var sB = (0, Wj.e)({
                          graphicalItem: IB,
                          activeTooltipItem: QB,
                          itemData: UB.data
                        }),
                        JB = void 0 === UB.activeIndex ? sB : UB.activeIndex;
                      return {
                        graphicalItem: Sz(Sz({}, IB), {}, {
                          childIndex: JB
                        }),
                        payload: (0, Wj.m)(IB, QB) ? UB.data[sB] : IB.props.data[sB]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var BB = this;
                if (!(0, EB.F)(this)) return null;
                var jB, zB, nB = this.props,
                  dB = nB.children,
                  IB = nB.className,
                  NB = nB.width,
                  uB = nB.height,
                  UB = nB.style,
                  aB = nB.compact,
                  pB = nB.title,
                  rB = nB.desc,
                  sB = rz(nB, uz),
                  JB = (0, EB.c)(sB, !1);
                if (aB) return QB.createElement(Iz.c, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, QB.createElement(GB.e, az({}, JB, {
                  width: NB,
                  height: uB,
                  title: pB,
                  desc: rB
                }), this.renderClipPath(), (0, EB.D)(dB, this.renderMap)));
                this.props.accessibilityLayer && (JB.tabIndex = null !== (jB = this.props.tabIndex) && void 0 !== jB ? jB : 0, JB.role = null !== (zB = this.props.role) && void 0 !== zB ? zB : "application", JB.onKeyDown = function(jB) {
                  BB.accessibilityManager.keyboardEvent(jB)
                }, JB.onFocus = function() {
                  BB.accessibilityManager.focus()
                });
                var mB = this.parseEventsOfWrapper();
                return QB.createElement(Iz.c, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, QB.createElement("div", az({
                  className: (0, yB.e)("recharts-wrapper", IB),
                  style: Sz({
                    position: "relative",
                    cursor: "default",
                    width: NB,
                    height: uB
                  }, UB)
                }, mB, {
                  ref: function(jB) {
                    BB.container = jB
                  }
                }), QB.createElement(GB.e, az({}, JB, {
                  width: NB,
                  height: uB,
                  title: pB,
                  desc: rB,
                  style: qz
                }), this.renderClipPath(), (0, EB.D)(dB, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], uB && sz(nB.prototype, uB), aB && sz(nB, aB), Object.defineProperty(nB, "prototype", {
              writable: !1
            }), nB;
            var nB, uB, aB
          }(QB.Component);
        Mz(DB, "displayName", jB), Mz(DB, "defaultProps", Sz({
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
        }, iB)), Mz(DB, "getDerivedStateFromProps", (function(BB, jB) {
          var zB = BB.dataKey,
            QB = BB.data,
            nB = BB.children,
            IB = BB.width,
            NB = BB.height,
            uB = BB.layout,
            UB = BB.stackOffset,
            aB = BB.margin,
            pB = jB.dataStartIndex,
            rB = jB.dataEndIndex;
          if (void 0 === jB.updateId) {
            var sB = Xz(BB);
            return Sz(Sz(Sz({}, sB), {}, {
              updateId: 0
            }, HB(Sz(Sz({
              props: BB
            }, sB), {}, {
              updateId: 0
            }), jB)), {}, {
              prevDataKey: zB,
              prevData: QB,
              prevWidth: IB,
              prevHeight: NB,
              prevLayout: uB,
              prevStackOffset: UB,
              prevMargin: aB,
              prevChildren: nB
            })
          }
          if (zB !== jB.prevDataKey || QB !== jB.prevData || IB !== jB.prevWidth || NB !== jB.prevHeight || uB !== jB.prevLayout || UB !== jB.prevStackOffset || !(0, Dj.c)(aB, jB.prevMargin)) {
            var JB = Xz(BB),
              mB = {
                chartX: jB.chartX,
                chartY: jB.chartY,
                isTooltipActive: jB.isTooltipActive
              },
              yB = Sz(Sz({}, Yz(jB, QB, uB)), {}, {
                updateId: jB.updateId + 1
              }),
              kB = Sz(Sz(Sz({}, JB), mB), yB);
            return Sz(Sz(Sz({}, kB), HB(Sz({
              props: BB
            }, kB), jB)), {}, {
              prevDataKey: zB,
              prevData: QB,
              prevWidth: IB,
              prevHeight: NB,
              prevLayout: uB,
              prevStackOffset: UB,
              prevMargin: aB,
              prevChildren: nB
            })
          }
          if (!(0, EB.x)(nB, jB.prevChildren)) {
            var GB, LB, gB, tB, SB = (0, EB.k)(nB, CB),
              MB = SB && null !== (GB = null === (LB = SB.props) || void 0 === LB ? void 0 : LB.startIndex) && void 0 !== GB ? GB : pB,
              iB = SB && null !== (gB = null === (tB = SB.props) || void 0 === tB ? void 0 : tB.endIndex) && void 0 !== gB ? gB : rB,
              qB = MB !== pB || iB !== rB,
              fB = !dB()(QB) && !qB ? jB.updateId : jB.updateId + 1;
            return Sz(Sz({
              updateId: fB
            }, HB(Sz(Sz({
              props: BB
            }, jB), {}, {
              updateId: fB,
              dataStartIndex: MB,
              dataEndIndex: iB
            }), jB)), {}, {
              prevChildren: nB,
              dataStartIndex: MB,
              dataEndIndex: iB
            })
          }
          return null
        })), Mz(DB, "renderActiveDot", (function(BB, jB, zB) {
          var nB;
          return nB = (0, QB.isValidElement)(BB) ? (0, QB.cloneElement)(BB, jB) : NB()(BB) ? BB(jB) : QB.createElement(SB.b, jB), QB.createElement(LB.e, {
            className: "recharts-active-dot",
            key: zB
          }, nB)
        }));
        var FB = (0, QB.forwardRef)((function(BB, jB) {
          return QB.createElement(DB, az({}, BB, {
            ref: jB
          }))
        }));
        return FB.displayName = DB.displayName, FB
      }
  },
  6255: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    var QB = function(BB) {
      return null
    };
    QB.displayName = "Cell"
  },
  6205: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => HB
    });
    var QB = zB(62),
      nB = zB(5453),
      dB = zB.n(nB),
      IB = zB(5319),
      NB = zB.n(IB),
      uB = zB(5164),
      UB = zB.n(uB),
      aB = zB(5146),
      pB = zB(6111),
      rB = zB(5463),
      sB = zB(5229),
      JB = zB(6207);

    function mB(BB) {
      return mB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, mB(BB)
    }
    var yB = ["offset"];

    function kB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return GB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return GB(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return GB(BB, jB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function GB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function LB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function gB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function tB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? gB(Object(zB), !0).forEach((function(jB) {
          SB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : gB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function SB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != mB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != mB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == mB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function MB() {
      return MB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, MB.apply(this, arguments)
    }
    var EB = function(BB) {
        var jB = BB.value,
          zB = BB.formatter,
          QB = dB()(BB.children) ? jB : BB.children;
        return NB()(zB) ? zB(QB) : QB
      },
      iB = function(BB, jB, zB) {
        var nB, IB, NB = BB.position,
          uB = BB.viewBox,
          UB = BB.offset,
          pB = BB.className,
          rB = uB,
          mB = rB.cx,
          yB = rB.cy,
          kB = rB.innerRadius,
          GB = rB.outerRadius,
          LB = rB.startAngle,
          gB = rB.endAngle,
          tB = rB.clockWise,
          SB = (kB + GB) / 2,
          EB = function(BB, jB) {
            return (0, sB.B)(jB - BB) * Math.min(Math.abs(jB - BB), 360)
          }(LB, gB),
          iB = EB >= 0 ? 1 : -1;
        "insideStart" === NB ? (nB = LB + iB * UB, IB = tB) : "insideEnd" === NB ? (nB = gB - iB * UB, IB = !tB) : "end" === NB && (nB = gB + iB * UB, IB = tB), IB = EB <= 0 ? IB : !IB;
        var qB = (0, JB.j)(mB, yB, SB, nB),
          fB = (0, JB.j)(mB, yB, SB, nB + 359 * (IB ? 1 : -1)),
          oB = "M".concat(qB.x, ",").concat(qB.y, "\n    A").concat(SB, ",").concat(SB, ",0,1,").concat(IB ? 0 : 1, ",\n    ").concat(fB.x, ",").concat(fB.y),
          HB = dB()(BB.id) ? (0, sB.D)("recharts-radial-line-") : BB.id;
        return QB.createElement("text", MB({}, zB, {
          dominantBaseline: "central",
          className: (0, aB.e)("recharts-radial-bar-label", pB)
        }), QB.createElement("defs", null, QB.createElement("path", {
          id: HB,
          d: oB
        })), QB.createElement("textPath", {
          xlinkHref: "#".concat(HB)
        }, jB))
      },
      qB = function(BB) {
        var jB = BB.viewBox,
          zB = BB.offset,
          QB = BB.position,
          nB = jB,
          dB = nB.cx,
          IB = nB.cy,
          NB = nB.innerRadius,
          uB = nB.outerRadius,
          UB = (nB.startAngle + nB.endAngle) / 2;
        if ("outside" === QB) {
          var aB = (0, JB.j)(dB, IB, uB + zB, UB),
            pB = aB.x;
          return {
            x: pB,
            y: aB.y,
            textAnchor: pB >= dB ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === QB) return {
          x: dB,
          y: IB,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === QB) return {
          x: dB,
          y: IB,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === QB) return {
          x: dB,
          y: IB,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var rB = (NB + uB) / 2,
          sB = (0, JB.j)(dB, IB, rB, UB);
        return {
          x: sB.x,
          y: sB.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      fB = function(BB) {
        var jB = BB.viewBox,
          zB = BB.parentViewBox,
          QB = BB.offset,
          nB = BB.position,
          dB = jB,
          IB = dB.x,
          NB = dB.y,
          uB = dB.width,
          aB = dB.height,
          pB = aB >= 0 ? 1 : -1,
          rB = pB * QB,
          JB = pB > 0 ? "end" : "start",
          mB = pB > 0 ? "start" : "end",
          yB = uB >= 0 ? 1 : -1,
          kB = yB * QB,
          GB = yB > 0 ? "end" : "start",
          LB = yB > 0 ? "start" : "end";
        if ("top" === nB) return tB(tB({}, {
          x: IB + uB / 2,
          y: NB - pB * QB,
          textAnchor: "middle",
          verticalAnchor: JB
        }), zB ? {
          height: Math.max(NB - zB.y, 0),
          width: uB
        } : {});
        if ("bottom" === nB) return tB(tB({}, {
          x: IB + uB / 2,
          y: NB + aB + rB,
          textAnchor: "middle",
          verticalAnchor: mB
        }), zB ? {
          height: Math.max(zB.y + zB.height - (NB + aB), 0),
          width: uB
        } : {});
        if ("left" === nB) {
          var gB = {
            x: IB - kB,
            y: NB + aB / 2,
            textAnchor: GB,
            verticalAnchor: "middle"
          };
          return tB(tB({}, gB), zB ? {
            width: Math.max(gB.x - zB.x, 0),
            height: aB
          } : {})
        }
        if ("right" === nB) {
          var SB = {
            x: IB + uB + kB,
            y: NB + aB / 2,
            textAnchor: LB,
            verticalAnchor: "middle"
          };
          return tB(tB({}, SB), zB ? {
            width: Math.max(zB.x + zB.width - SB.x, 0),
            height: aB
          } : {})
        }
        var MB = zB ? {
          width: uB,
          height: aB
        } : {};
        return "insideLeft" === nB ? tB({
          x: IB + kB,
          y: NB + aB / 2,
          textAnchor: LB,
          verticalAnchor: "middle"
        }, MB) : "insideRight" === nB ? tB({
          x: IB + uB - kB,
          y: NB + aB / 2,
          textAnchor: GB,
          verticalAnchor: "middle"
        }, MB) : "insideTop" === nB ? tB({
          x: IB + uB / 2,
          y: NB + rB,
          textAnchor: "middle",
          verticalAnchor: mB
        }, MB) : "insideBottom" === nB ? tB({
          x: IB + uB / 2,
          y: NB + aB - rB,
          textAnchor: "middle",
          verticalAnchor: JB
        }, MB) : "insideTopLeft" === nB ? tB({
          x: IB + kB,
          y: NB + rB,
          textAnchor: LB,
          verticalAnchor: mB
        }, MB) : "insideTopRight" === nB ? tB({
          x: IB + uB - kB,
          y: NB + rB,
          textAnchor: GB,
          verticalAnchor: mB
        }, MB) : "insideBottomLeft" === nB ? tB({
          x: IB + kB,
          y: NB + aB - rB,
          textAnchor: LB,
          verticalAnchor: JB
        }, MB) : "insideBottomRight" === nB ? tB({
          x: IB + uB - kB,
          y: NB + aB - rB,
          textAnchor: GB,
          verticalAnchor: JB
        }, MB) : UB()(nB) && ((0, sB.x)(nB.x) || (0, sB.A)(nB.x)) && ((0, sB.x)(nB.y) || (0, sB.A)(nB.y)) ? tB({
          x: IB + (0, sB.m)(nB.x, uB),
          y: NB + (0, sB.m)(nB.y, aB),
          textAnchor: "end",
          verticalAnchor: "end"
        }, MB) : tB({
          x: IB + uB / 2,
          y: NB + aB / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, MB)
      },
      oB = function(BB) {
        return "cx" in BB && (0, sB.x)(BB.cx)
      };

    function HB(BB) {
      var jB, zB = BB.offset,
        nB = tB({
          offset: void 0 === zB ? 5 : zB
        }, LB(BB, yB)),
        IB = nB.viewBox,
        uB = nB.position,
        UB = nB.value,
        sB = nB.children,
        JB = nB.content,
        mB = nB.className,
        kB = void 0 === mB ? "" : mB,
        GB = nB.textBreakAll;
      if (!IB || dB()(UB) && dB()(sB) && !(0, QB.isValidElement)(JB) && !NB()(JB)) return null;
      if ((0, QB.isValidElement)(JB)) return (0, QB.cloneElement)(JB, nB);
      if (NB()(JB)) {
        if (jB = (0, QB.createElement)(JB, nB), (0, QB.isValidElement)(jB)) return jB
      } else jB = EB(nB);
      var gB = oB(IB),
        SB = (0, rB.c)(nB, !0);
      if (gB && ("insideStart" === uB || "insideEnd" === uB || "end" === uB)) return iB(nB, jB, SB);
      var HB = gB ? qB(nB) : fB(nB);
      return QB.createElement(pB.b, MB({
        className: (0, aB.e)("recharts-label", kB)
      }, SB, HB, {
        breakAll: GB
      }), jB)
    }
    HB.displayName = "Label";
    var DB = function(BB) {
      var jB = BB.cx,
        zB = BB.cy,
        QB = BB.angle,
        nB = BB.startAngle,
        dB = BB.endAngle,
        IB = BB.r,
        NB = BB.radius,
        uB = BB.innerRadius,
        UB = BB.outerRadius,
        aB = BB.x,
        pB = BB.y,
        rB = BB.top,
        JB = BB.left,
        mB = BB.width,
        yB = BB.height,
        kB = BB.clockWise,
        GB = BB.labelViewBox;
      if (GB) return GB;
      if ((0, sB.x)(mB) && (0, sB.x)(yB)) {
        if ((0, sB.x)(aB) && (0, sB.x)(pB)) return {
          x: aB,
          y: pB,
          width: mB,
          height: yB
        };
        if ((0, sB.x)(rB) && (0, sB.x)(JB)) return {
          x: rB,
          y: JB,
          width: mB,
          height: yB
        }
      }
      return (0, sB.x)(aB) && (0, sB.x)(pB) ? {
        x: aB,
        y: pB,
        width: 0,
        height: 0
      } : (0, sB.x)(jB) && (0, sB.x)(zB) ? {
        cx: jB,
        cy: zB,
        startAngle: nB || QB || 0,
        endAngle: dB || QB || 0,
        innerRadius: uB || 0,
        outerRadius: UB || NB || IB || 0,
        clockWise: kB
      } : BB.viewBox ? BB.viewBox : {}
    };
    HB.parseViewBox = DB, HB.renderCallByParent = function(BB, jB) {
      var zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!BB || !BB.children && zB && !BB.label) return null;
      var nB = BB.children,
        dB = DB(BB),
        IB = (0, rB.g)(nB, HB).map((function(BB, zB) {
          return (0, QB.cloneElement)(BB, {
            viewBox: jB || dB,
            key: "label-".concat(zB)
          })
        }));
      if (!zB) return IB;
      var uB = function(BB, jB) {
        return BB ? !0 === BB ? QB.createElement(HB, {
          key: "label-implicit",
          viewBox: jB
        }) : (0, sB.v)(BB) ? QB.createElement(HB, {
          key: "label-implicit",
          viewBox: jB,
          value: BB
        }) : (0, QB.isValidElement)(BB) ? BB.type === HB ? (0, QB.cloneElement)(BB, {
          key: "label-implicit",
          viewBox: jB
        }) : QB.createElement(HB, {
          key: "label-implicit",
          content: BB,
          viewBox: jB
        }) : NB()(BB) ? QB.createElement(HB, {
          key: "label-implicit",
          content: BB,
          viewBox: jB
        }) : UB()(BB) ? QB.createElement(HB, MB({
          viewBox: jB
        }, BB, {
          key: "label-implicit"
        })) : null : null
      }(BB.label, jB || dB);
      return [uB].concat(kB(IB))
    }
  },
  6257: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => fB
    });
    var QB = zB(62),
      nB = zB(5453),
      dB = zB.n(nB),
      IB = zB(5164),
      NB = zB.n(IB),
      uB = zB(5319),
      UB = zB.n(uB),
      aB = zB(6265),
      pB = zB.n(aB),
      rB = zB(6205),
      sB = zB(5975),
      JB = zB(5463),
      mB = zB(6121);

    function yB(BB) {
      return yB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, yB(BB)
    }
    var kB = ["valueAccessor"],
      GB = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function LB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return gB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return gB(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return gB(BB, jB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function tB() {
      return tB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, tB.apply(this, arguments)
    }

    function SB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function MB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? SB(Object(zB), !0).forEach((function(jB) {
          EB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : SB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function EB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != yB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != yB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == yB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function iB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }
    var qB = function(BB) {
      return Array.isArray(BB.value) ? pB()(BB.value) : BB.value
    };

    function fB(BB) {
      var jB = BB.valueAccessor,
        zB = void 0 === jB ? qB : jB,
        nB = iB(BB, kB),
        IB = nB.data,
        NB = nB.dataKey,
        uB = nB.clockWise,
        UB = nB.id,
        aB = nB.textBreakAll,
        pB = iB(nB, GB);
      return IB && IB.length ? QB.createElement(sB.e, {
        className: "recharts-label-list"
      }, IB.map((function(BB, jB) {
        var nB = dB()(NB) ? zB(BB, jB) : (0, mB.Y)(BB && BB.payload, NB),
          IB = dB()(UB) ? {} : {
            id: "".concat(UB, "-").concat(jB)
          };
        return QB.createElement(rB.c, tB({}, (0, JB.c)(BB, !0), pB, IB, {
          parentViewBox: BB.parentViewBox,
          value: nB,
          textBreakAll: aB,
          viewBox: rB.c.parseViewBox(dB()(uB) ? BB : MB(MB({}, BB), {}, {
            clockWise: uB
          })),
          key: "label-".concat(jB),
          index: jB
        }))
      }))) : null
    }
    fB.displayName = "LabelList", fB.renderCallByParent = function(BB, jB) {
      var zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!BB || !BB.children && zB && !BB.label) return null;
      var nB = BB.children,
        dB = (0, JB.g)(nB, fB).map((function(BB, zB) {
          return (0, QB.cloneElement)(BB, {
            data: jB,
            key: "labelList-".concat(zB)
          })
        }));
      return zB ? [function(BB, jB) {
        return BB ? !0 === BB ? QB.createElement(fB, {
          key: "labelList-implicit",
          data: jB
        }) : QB.isValidElement(BB) || UB()(BB) ? QB.createElement(fB, {
          key: "labelList-implicit",
          data: jB,
          content: BB
        }) : NB()(BB) ? QB.createElement(fB, tB({
          data: jB
        }, BB, {
          key: "labelList-implicit"
        })) : null : null
      }(BB.label, jB)].concat(LB(dB)) : dB
    }
  },
  6048: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => TB
    });
    var QB = zB(62),
      nB = zB(5319),
      dB = zB.n(nB),
      IB = zB(5146),
      NB = zB(5458),
      uB = zB(5967),
      UB = zB(6053),
      aB = zB(5485);

    function pB(BB) {
      return pB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, pB(BB)
    }

    function rB() {
      return rB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, rB.apply(this, arguments)
    }

    function sB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function JB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, gB(QB.key), QB)
      }
    }

    function mB(BB, jB, zB) {
      return jB = kB(jB),
        function(BB, jB) {
          if (jB && ("object" === pB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, yB() ? Reflect.construct(jB, zB || [], kB(BB).constructor) : jB.apply(BB, zB))
    }

    function yB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (yB = function() {
        return !!BB
      })()
    }

    function kB(BB) {
      return kB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, kB(BB)
    }

    function GB(BB, jB) {
      return GB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, GB(BB, jB)
    }

    function LB(BB, jB, zB) {
      return (jB = gB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function gB(BB) {
      var jB = function(BB, jB) {
        if ("object" != pB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != pB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == pB(jB) ? jB : jB + ""
    }
    var tB = 32,
      SB = function(BB) {
        function jB() {
          return function(BB, jB) {
            if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
          }(this, jB), mB(this, jB, arguments)
        }
        return function(BB, jB) {
          if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(jB && jB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), jB && GB(BB, jB)
        }(jB, BB), zB = jB, nB = [{
          key: "renderIcon",
          value: function(BB) {
            var jB = this.props.inactiveColor,
              zB = 16,
              nB = tB / 6,
              dB = tB / 3,
              IB = BB.inactive ? jB : BB.color;
            if ("plainline" === BB.type) return QB.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: IB,
              strokeDasharray: BB.payload.strokeDasharray,
              x1: 0,
              y1: zB,
              x2: tB,
              y2: zB,
              className: "recharts-legend-icon"
            });
            if ("line" === BB.type) return QB.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: IB,
              d: "M0,".concat(zB, "h").concat(dB, "\n            A").concat(nB, ",").concat(nB, ",0,1,1,").concat(2 * dB, ",").concat(zB, "\n            H").concat(tB, "M").concat(2 * dB, ",").concat(zB, "\n            A").concat(nB, ",").concat(nB, ",0,1,1,").concat(dB, ",").concat(zB),
              className: "recharts-legend-icon"
            });
            if ("rect" === BB.type) return QB.createElement("path", {
              stroke: "none",
              fill: IB,
              d: "M0,".concat(4, "h").concat(tB, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (QB.isValidElement(BB.legendIcon)) {
              var NB = function(BB) {
                for (var jB = 1; jB < arguments.length; jB++) {
                  var zB = null != arguments[jB] ? arguments[jB] : {};
                  jB % 2 ? sB(Object(zB), !0).forEach((function(jB) {
                    LB(BB, jB, zB[jB])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : sB(Object(zB)).forEach((function(jB) {
                    Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
                  }))
                }
                return BB
              }({}, BB);
              return delete NB.legendIcon, QB.cloneElement(BB.legendIcon, NB)
            }
            return QB.createElement(UB.e, {
              fill: IB,
              cx: zB,
              cy: zB,
              size: tB,
              sizeType: "diameter",
              type: BB.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var BB = this,
              jB = this.props,
              zB = jB.payload,
              nB = jB.iconSize,
              UB = jB.layout,
              pB = jB.formatter,
              sB = jB.inactiveColor,
              JB = {
                x: 0,
                y: 0,
                width: tB,
                height: tB
              },
              mB = {
                display: "horizontal" === UB ? "inline-block" : "block",
                marginRight: 10
              },
              yB = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return zB.map((function(jB, zB) {
              var UB = jB.formatter || pB,
                kB = (0, IB.e)(LB(LB({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(zB), !0), "inactive", jB.inactive));
              if ("none" === jB.type) return null;
              var GB = dB()(jB.value) ? null : jB.value;
              (0, NB.e)(!dB()(jB.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var gB = jB.inactive ? sB : jB.color;
              return QB.createElement("li", rB({
                className: kB,
                style: mB,
                key: "legend-item-".concat(zB)
              }, (0, aB.m)(BB.props, jB, zB)), QB.createElement(uB.e, {
                width: nB,
                height: nB,
                viewBox: JB,
                style: yB
              }, BB.renderIcon(jB)), QB.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: gB
                }
              }, UB ? UB(GB, jB, zB) : GB))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var BB = this.props,
              jB = BB.payload,
              zB = BB.layout,
              nB = BB.align;
            if (!jB || !jB.length) return null;
            var dB = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === zB ? nB : "left"
            };
            return QB.createElement("ul", {
              className: "recharts-default-legend",
              style: dB
            }, this.renderItems())
          }
        }], nB && JB(zB.prototype, nB), pB && JB(zB, pB), Object.defineProperty(zB, "prototype", {
          writable: !1
        }), zB;
        var zB, nB, pB
      }(QB.PureComponent);
    LB(SB, "displayName", "Legend"), LB(SB, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var MB = zB(5229),
      EB = zB(5985);

    function iB(BB) {
      return iB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, iB(BB)
    }
    var qB = ["ref"];

    function fB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function oB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? fB(Object(zB), !0).forEach((function(jB) {
          hB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : fB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function HB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, XB(QB.key), QB)
      }
    }

    function DB(BB, jB, zB) {
      return jB = YB(jB),
        function(BB, jB) {
          if (jB && ("object" === iB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, FB() ? Reflect.construct(jB, zB || [], YB(BB).constructor) : jB.apply(BB, zB))
    }

    function FB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (FB = function() {
        return !!BB
      })()
    }

    function YB(BB) {
      return YB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, YB(BB)
    }

    function VB(BB, jB) {
      return VB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, VB(BB, jB)
    }

    function hB(BB, jB, zB) {
      return (jB = XB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function XB(BB) {
      var jB = function(BB, jB) {
        if ("object" != iB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != iB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == iB(jB) ? jB : jB + ""
    }

    function ZB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function AB(BB) {
      return BB.value
    }
    var TB = function(BB) {
      function jB() {
        var BB;
        ! function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, jB);
        for (var zB = arguments.length, QB = new Array(zB), nB = 0; nB < zB; nB++) QB[nB] = arguments[nB];
        return hB(BB = DB(this, jB, [].concat(QB)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), BB
      }
      return function(BB, jB) {
        if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(jB && jB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), jB && VB(BB, jB)
      }(jB, BB), zB = jB, dB = [{
        key: "getWithHeight",
        value: function(BB, jB) {
          var zB = oB(oB({}, this.defaultProps), BB.props).layout;
          return "vertical" === zB && (0, MB.x)(BB.props.height) ? {
            height: BB.props.height
          } : "horizontal" === zB ? {
            width: BB.props.width || jB
          } : null
        }
      }], (nB = [{
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
            jB = this.getBBox();
          jB ? (Math.abs(jB.width - this.lastBoundingBox.width) > 1 || Math.abs(jB.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = jB.width, this.lastBoundingBox.height = jB.height, BB && BB(jB)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, BB && BB(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? oB({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(BB) {
          var jB, zB, QB = this.props,
            nB = QB.layout,
            dB = QB.align,
            IB = QB.verticalAlign,
            NB = QB.margin,
            uB = QB.chartWidth,
            UB = QB.chartHeight;
          return BB && (void 0 !== BB.left && null !== BB.left || void 0 !== BB.right && null !== BB.right) || (jB = "center" === dB && "vertical" === nB ? {
            left: ((uB || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === dB ? {
            right: NB && NB.right || 0
          } : {
            left: NB && NB.left || 0
          }), BB && (void 0 !== BB.top && null !== BB.top || void 0 !== BB.bottom && null !== BB.bottom) || (zB = "middle" === IB ? {
            top: ((UB || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === IB ? {
            bottom: NB && NB.bottom || 0
          } : {
            top: NB && NB.top || 0
          }), oB(oB({}, jB), zB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this,
            jB = this.props,
            zB = jB.content,
            nB = jB.width,
            dB = jB.height,
            IB = jB.wrapperStyle,
            NB = jB.payloadUniqBy,
            uB = jB.payload,
            UB = oB(oB({
              position: "absolute",
              width: nB || "auto",
              height: dB || "auto"
            }, this.getDefaultPosition(IB)), IB);
          return QB.createElement("div", {
            className: "recharts-legend-wrapper",
            style: UB,
            ref: function(jB) {
              BB.wrapperNode = jB
            }
          }, function(BB, jB) {
            if (QB.isValidElement(BB)) return QB.cloneElement(BB, jB);
            if ("function" === typeof BB) return QB.createElement(BB, jB);
            jB.ref;
            var zB = ZB(jB, qB);
            return QB.createElement(SB, zB)
          }(zB, oB(oB({}, this.props), {}, {
            payload: (0, EB.c)(uB, NB, AB)
          })))
        }
      }]) && HB(zB.prototype, nB), dB && HB(zB, dB), Object.defineProperty(zB, "prototype", {
        writable: !1
      }), zB;
      var zB, nB, dB
    }(QB.PureComponent);
    hB(TB, "displayName", "Legend"), hB(TB, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  5141: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => yB
    });
    var QB = zB(5146),
      nB = zB(62),
      dB = zB(5150),
      IB = zB.n(dB),
      NB = zB(5229),
      uB = zB(5458),
      UB = zB(5463);

    function aB(BB) {
      return aB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, aB(BB)
    }

    function pB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function rB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? pB(Object(zB), !0).forEach((function(jB) {
          sB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : pB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function sB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != aB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != aB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == aB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function JB(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        var zB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != zB) {
          var QB, nB, dB, IB, NB = [],
            uB = !0,
            UB = !1;
          try {
            if (dB = (zB = zB.call(BB)).next, 0 === jB) {
              if (Object(zB) !== zB) return;
              uB = !1
            } else
              for (; !(uB = (QB = dB.call(zB)).done) && (NB.push(QB.value), NB.length !== jB); uB = !0);
          } catch (BB) {
            UB = !0, nB = BB
          } finally {
            try {
              if (!uB && null != zB.return && (IB = zB.return(), Object(IB) !== IB)) return
            } finally {
              if (UB) throw nB
            }
          }
          return NB
        }
      }(BB, jB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return mB(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return mB(BB, jB)
      }(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }
    var yB = (0, nB.forwardRef)((function(BB, jB) {
      var zB = BB.aspect,
        dB = BB.initialDimension,
        aB = void 0 === dB ? {
          width: -1,
          height: -1
        } : dB,
        pB = BB.width,
        sB = void 0 === pB ? "100%" : pB,
        mB = BB.height,
        yB = void 0 === mB ? "100%" : mB,
        kB = BB.minWidth,
        GB = void 0 === kB ? 0 : kB,
        LB = BB.minHeight,
        gB = BB.maxHeight,
        tB = BB.children,
        SB = BB.debounce,
        MB = void 0 === SB ? 0 : SB,
        EB = BB.id,
        iB = BB.className,
        qB = BB.rG,
        fB = BB.style,
        oB = void 0 === fB ? {} : fB,
        HB = (0, nB.useRef)(null),
        DB = (0, nB.useRef)();
      DB.current = qB, (0, nB.useImperativeHandle)(jB, (function() {
        return Object.defineProperty(HB.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), HB.current
          },
          configurable: !0
        })
      }));
      var FB = JB((0, nB.useState)({
          containerWidth: aB.width,
          containerHeight: aB.height
        }), 2),
        YB = FB[0],
        VB = FB[1],
        hB = (0, nB.useCallback)((function(BB, jB) {
          VB((function(zB) {
            var QB = Math.round(BB),
              nB = Math.round(jB);
            return zB.containerWidth === QB && zB.containerHeight === nB ? zB : {
              containerWidth: QB,
              containerHeight: nB
            }
          }))
        }), []);
      (0, nB.useEffect)((function() {
        var BB = function(BB) {
          var jB, zB = BB[0].contentRect,
            QB = zB.width,
            nB = zB.height;
          hB(QB, nB), null === (jB = DB.current) || void 0 === jB || jB.call(DB, QB, nB)
        };
        MB > 0 && (BB = IB()(BB, MB, {
          trailing: !0,
          leading: !1
        }));
        var jB = new ResizeObserver(BB),
          zB = HB.current.getBoundingClientRect(),
          QB = zB.width,
          nB = zB.height;
        return hB(QB, nB), jB.observe(HB.current),
          function() {
            jB.disconnect()
          }
      }), [hB, MB]);
      var XB = (0, nB.useMemo)((function() {
        var BB = YB.containerWidth,
          jB = YB.containerHeight;
        if (BB < 0 || jB < 0) return null;
        (0, uB.e)((0, NB.A)(sB) || (0, NB.A)(yB), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", sB, yB), (0, uB.e)(!zB || zB > 0, "The aspect(%s) must be greater than zero.", zB);
        var QB = (0, NB.A)(sB) ? BB : sB,
          dB = (0, NB.A)(yB) ? jB : yB;
        zB && zB > 0 && (QB ? dB = QB / zB : dB && (QB = dB * zB), gB && dB > gB && (dB = gB)), (0, uB.e)(QB > 0 || dB > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", QB, dB, sB, yB, GB, LB, zB);
        var IB = !Array.isArray(tB) && (0, UB.n)(tB.type).endsWith("Chart");
        return nB.Children.map(tB, (function(BB) {
          return nB.isValidElement(BB) ? (0, nB.cloneElement)(BB, rB({
            width: QB,
            height: dB
          }, IB ? {
            style: rB({
              height: "100%",
              width: "100%",
              maxHeight: dB,
              maxWidth: QB
            }, BB.props.style)
          } : {})) : BB
        }))
      }), [zB, tB, yB, gB, LB, GB, YB, sB]);
      return nB.createElement("div", {
        id: EB ? "".concat(EB) : void 0,
        className: (0, QB.e)("recharts-responsive-container", iB),
        style: rB(rB({}, oB), {}, {
          width: sB,
          height: yB,
          minWidth: GB,
          minHeight: LB,
          maxHeight: gB
        }),
        ref: HB
      }, XB)
    }))
  },
  6111: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => PB
    });
    var QB = zB(62),
      nB = zB(5453),
      dB = zB.n(nB),
      IB = zB(5146),
      NB = zB(5229),
      uB = zB(5981),
      UB = zB(5463),
      aB = zB(6117);

    function pB(BB) {
      return pB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, pB(BB)
    }

    function rB(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        var zB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != zB) {
          var QB, nB, dB, IB, NB = [],
            uB = !0,
            UB = !1;
          try {
            if (dB = (zB = zB.call(BB)).next, 0 === jB) {
              if (Object(zB) !== zB) return;
              uB = !1
            } else
              for (; !(uB = (QB = dB.call(zB)).done) && (NB.push(QB.value), NB.length !== jB); uB = !0);
          } catch (BB) {
            UB = !0, nB = BB
          } finally {
            try {
              if (!uB && null != zB.return && (IB = zB.return(), Object(IB) !== IB)) return
            } finally {
              if (UB) throw nB
            }
          }
          return NB
        }
      }(BB, jB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return sB(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return sB(BB, jB)
      }(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function JB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, mB(QB.key), QB)
      }
    }

    function mB(BB) {
      var jB = function(BB, jB) {
        if ("object" != pB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != pB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == pB(jB) ? jB : jB + ""
    }
    var yB = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      kB = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      GB = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      LB = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      gB = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      tB = Object.keys(gB),
      SB = "NaN";
    var MB = function() {
      function BB(jB, zB) {
        ! function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, BB), this.num = jB, this.unit = zB, this.num = jB, this.unit = zB, Number.isNaN(jB) && (this.unit = ""), "" === zB || GB.test(zB) || (this.num = NaN, this.unit = ""), tB.includes(zB) && (this.num = function(BB, jB) {
          return BB * gB[jB]
        }(jB, zB), this.unit = "px")
      }
      return jB = BB, QB = [{
        key: "parse",
        value: function(jB) {
          var zB, QB = rB(null !== (zB = LB.exec(jB)) && void 0 !== zB ? zB : [], 3),
            nB = QB[1],
            dB = QB[2];
          return new BB(parseFloat(nB), null !== dB && void 0 !== dB ? dB : "")
        }
      }], (zB = [{
        key: "add",
        value: function(jB) {
          return this.unit !== jB.unit ? new BB(NaN, "") : new BB(this.num + jB.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(jB) {
          return this.unit !== jB.unit ? new BB(NaN, "") : new BB(this.num - jB.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(jB) {
          return "" !== this.unit && "" !== jB.unit && this.unit !== jB.unit ? new BB(NaN, "") : new BB(this.num * jB.num, this.unit || jB.unit)
        }
      }, {
        key: "divide",
        value: function(jB) {
          return "" !== this.unit && "" !== jB.unit && this.unit !== jB.unit ? new BB(NaN, "") : new BB(this.num / jB.num, this.unit || jB.unit)
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
      }]) && JB(jB.prototype, zB), QB && JB(jB, QB), Object.defineProperty(jB, "prototype", {
        writable: !1
      }), jB;
      var jB, zB, QB
    }();

    function EB(BB) {
      if (BB.includes(SB)) return SB;
      for (var jB = BB; jB.includes("*") || jB.includes("/");) {
        var zB, QB = rB(null !== (zB = yB.exec(jB)) && void 0 !== zB ? zB : [], 4),
          nB = QB[1],
          dB = QB[2],
          IB = QB[3],
          NB = MB.parse(null !== nB && void 0 !== nB ? nB : ""),
          uB = MB.parse(null !== IB && void 0 !== IB ? IB : ""),
          UB = "*" === dB ? NB.multiply(uB) : NB.divide(uB);
        if (UB.isNaN()) return SB;
        jB = jB.replace(yB, UB.toString())
      }
      for (; jB.includes("+") || /.-\d+(?:\.\d+)?/.test(jB);) {
        var aB, pB = rB(null !== (aB = kB.exec(jB)) && void 0 !== aB ? aB : [], 4),
          sB = pB[1],
          JB = pB[2],
          mB = pB[3],
          GB = MB.parse(null !== sB && void 0 !== sB ? sB : ""),
          LB = MB.parse(null !== mB && void 0 !== mB ? mB : ""),
          gB = "+" === JB ? GB.add(LB) : GB.subtract(LB);
        if (gB.isNaN()) return SB;
        jB = jB.replace(kB, gB.toString())
      }
      return jB
    }
    var iB = /\(([^()]*)\)/;

    function qB(BB) {
      var jB = BB.replace(/\s+/g, "");
      return jB = function(BB) {
        for (var jB = BB; jB.includes("(");) {
          var zB = rB(iB.exec(jB), 2)[1];
          jB = jB.replace(iB, EB(zB))
        }
        return jB
      }(jB), jB = EB(jB)
    }

    function fB(BB) {
      var jB = function(BB) {
        try {
          return qB(BB)
        } catch (jB) {
          return SB
        }
      }(BB.slice(5, -1));
      return jB === SB ? "" : jB
    }
    var oB = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      HB = ["dx", "dy", "angle", "className", "breakAll"];

    function DB() {
      return DB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, DB.apply(this, arguments)
    }

    function FB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function YB(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        var zB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != zB) {
          var QB, nB, dB, IB, NB = [],
            uB = !0,
            UB = !1;
          try {
            if (dB = (zB = zB.call(BB)).next, 0 === jB) {
              if (Object(zB) !== zB) return;
              uB = !1
            } else
              for (; !(uB = (QB = dB.call(zB)).done) && (NB.push(QB.value), NB.length !== jB); uB = !0);
          } catch (BB) {
            UB = !0, nB = BB
          } finally {
            try {
              if (!uB && null != zB.return && (IB = zB.return(), Object(IB) !== IB)) return
            } finally {
              if (UB) throw nB
            }
          }
          return NB
        }
      }(BB, jB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return VB(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return VB(BB, jB)
      }(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function VB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }
    var hB = /[ \f\n\r\t\v\u2028\u2029]+/,
      XB = function(BB) {
        var jB = BB.children,
          zB = BB.breakAll,
          QB = BB.style;
        try {
          var nB = [];
          return dB()(jB) || (nB = zB ? jB.toString().split("") : jB.toString().split(hB)), {
            wordsWithComputedWidth: nB.map((function(BB) {
              return {
                word: BB,
                width: (0, aB.e)(BB, QB).width
              }
            })),
            spaceWidth: zB ? 0 : (0, aB.e)("\xa0", QB).width
          }
        } catch (IB) {
          return null
        }
      },
      ZB = function(BB) {
        return [{
          words: dB()(BB) ? [] : BB.toString().split(hB)
        }]
      },
      AB = function(BB) {
        var jB = BB.width,
          zB = BB.scaleToFit,
          QB = BB.children,
          nB = BB.style,
          dB = BB.breakAll,
          IB = BB.maxLines;
        if ((jB || zB) && !uB.c.isSsr) {
          var UB = XB({
            breakAll: dB,
            children: QB,
            style: nB
          });
          return UB ? function(BB, jB, zB, QB, nB) {
            var dB = BB.maxLines,
              IB = BB.children,
              uB = BB.style,
              UB = BB.breakAll,
              aB = (0, NB.x)(dB),
              pB = IB,
              rB = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(BB, jB) {
                  var dB = jB.word,
                    IB = jB.width,
                    NB = BB[BB.length - 1];
                  if (NB && (null == QB || nB || NB.width + IB + zB < Number(QB))) NB.words.push(dB), NB.width += IB + zB;
                  else {
                    var uB = {
                      words: [dB],
                      width: IB
                    };
                    BB.push(uB)
                  }
                  return BB
                }), [])
              },
              sB = rB(jB);
            if (!aB) return sB;
            for (var JB, mB = function(BB) {
                var jB = pB.slice(0, BB),
                  zB = XB({
                    breakAll: UB,
                    style: uB,
                    children: jB + "\u2026"
                  }).wordsWithComputedWidth,
                  nB = rB(zB),
                  IB = nB.length > dB || function(BB) {
                    return BB.reduce((function(BB, jB) {
                      return BB.width > jB.width ? BB : jB
                    }))
                  }(nB).width > Number(QB);
                return [IB, nB]
              }, yB = 0, kB = pB.length - 1, GB = 0; yB <= kB && GB <= pB.length - 1;) {
              var LB = Math.floor((yB + kB) / 2),
                gB = YB(mB(LB - 1), 2),
                tB = gB[0],
                SB = gB[1],
                MB = YB(mB(LB), 1)[0];
              if (tB || MB || (yB = LB + 1), tB && MB && (kB = LB - 1), !tB && MB) {
                JB = SB;
                break
              }
              GB++
            }
            return JB || sB
          }({
            breakAll: dB,
            children: QB,
            maxLines: IB,
            style: nB
          }, UB.wordsWithComputedWidth, UB.spaceWidth, jB, zB) : ZB(QB)
        }
        return ZB(QB)
      },
      TB = "#808080",
      PB = function(BB) {
        var jB = BB.x,
          zB = void 0 === jB ? 0 : jB,
          nB = BB.y,
          dB = void 0 === nB ? 0 : nB,
          uB = BB.lineHeight,
          aB = void 0 === uB ? "1em" : uB,
          pB = BB.capHeight,
          rB = void 0 === pB ? "0.71em" : pB,
          sB = BB.scaleToFit,
          JB = void 0 !== sB && sB,
          mB = BB.textAnchor,
          yB = void 0 === mB ? "start" : mB,
          kB = BB.verticalAnchor,
          GB = void 0 === kB ? "end" : kB,
          LB = BB.fill,
          gB = void 0 === LB ? TB : LB,
          tB = FB(BB, oB),
          SB = (0, QB.useMemo)((function() {
            return AB({
              breakAll: tB.breakAll,
              children: tB.children,
              maxLines: tB.maxLines,
              scaleToFit: JB,
              style: tB.style,
              width: tB.width
            })
          }), [tB.breakAll, tB.children, tB.maxLines, JB, tB.style, tB.width]),
          MB = tB.dx,
          EB = tB.dy,
          iB = tB.angle,
          qB = tB.className,
          YB = tB.breakAll,
          VB = FB(tB, HB);
        if (!(0, NB.v)(zB) || !(0, NB.v)(dB)) return null;
        var hB, XB = zB + ((0, NB.x)(MB) ? MB : 0),
          ZB = dB + ((0, NB.x)(EB) ? EB : 0);
        switch (GB) {
          case "start":
            hB = fB("calc(".concat(rB, ")"));
            break;
          case "middle":
            hB = fB("calc(".concat((SB.length - 1) / 2, " * -").concat(aB, " + (").concat(rB, " / 2))"));
            break;
          default:
            hB = fB("calc(".concat(SB.length - 1, " * -").concat(aB, ")"))
        }
        var PB = [];
        if (JB) {
          var WB = SB[0].width,
            eB = tB.width;
          PB.push("scale(".concat(((0, NB.x)(eB) ? eB / WB : 1) / WB, ")"))
        }
        return iB && PB.push("rotate(".concat(iB, ", ").concat(XB, ", ").concat(ZB, ")")), PB.length && (VB.transform = PB.join(" ")), QB.createElement("text", DB({}, (0, UB.c)(VB, !0), {
          x: XB,
          y: ZB,
          className: (0, IB.e)("recharts-text", qB),
          textAnchor: yB,
          fill: gB.includes("url") ? TB : gB
        }), SB.map((function(BB, jB) {
          var zB = BB.words.join(YB ? "" : " ");
          return QB.createElement("tspan", {
            x: XB,
            dy: 0 === jB ? hB : aB,
            key: "".concat(zB, "-").concat(jB)
          }, zB)
        })))
      }
  },
  5979: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => vB
    });
    var QB = zB(62),
      nB = zB(5539),
      dB = zB.n(nB),
      IB = zB(5453),
      NB = zB.n(IB),
      uB = zB(5146),
      UB = zB(5229);

    function aB(BB) {
      return aB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, aB(BB)
    }

    function pB() {
      return pB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, pB.apply(this, arguments)
    }

    function rB(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        var zB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != zB) {
          var QB, nB, dB, IB, NB = [],
            uB = !0,
            UB = !1;
          try {
            if (dB = (zB = zB.call(BB)).next, 0 === jB) {
              if (Object(zB) !== zB) return;
              uB = !1
            } else
              for (; !(uB = (QB = dB.call(zB)).done) && (NB.push(QB.value), NB.length !== jB); uB = !0);
          } catch (BB) {
            UB = !0, nB = BB
          } finally {
            try {
              if (!uB && null != zB.return && (IB = zB.return(), Object(IB) !== IB)) return
            } finally {
              if (UB) throw nB
            }
          }
          return NB
        }
      }(BB, jB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return sB(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return sB(BB, jB)
      }(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function JB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function mB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? JB(Object(zB), !0).forEach((function(jB) {
          yB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : JB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function yB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != aB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != aB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == aB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function kB(BB) {
      return Array.isArray(BB) && (0, UB.v)(BB[0]) && (0, UB.v)(BB[1]) ? BB.join(" ~ ") : BB
    }
    var GB = function(BB) {
      var jB = BB.separator,
        zB = void 0 === jB ? " : " : jB,
        nB = BB.contentStyle,
        IB = void 0 === nB ? {} : nB,
        aB = BB.itemStyle,
        sB = void 0 === aB ? {} : aB,
        JB = BB.labelStyle,
        yB = void 0 === JB ? {} : JB,
        GB = BB.payload,
        LB = BB.formatter,
        gB = BB.itemSorter,
        tB = BB.wrapperClassName,
        SB = BB.labelClassName,
        MB = BB.label,
        EB = BB.labelFormatter,
        iB = BB.accessibilityLayer,
        qB = void 0 !== iB && iB,
        fB = mB({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, IB),
        oB = mB({
          margin: 0
        }, yB),
        HB = !NB()(MB),
        DB = HB ? MB : "",
        FB = (0, uB.e)("recharts-default-tooltip", tB),
        YB = (0, uB.e)("recharts-tooltip-label", SB);
      HB && EB && void 0 !== GB && null !== GB && (DB = EB(MB, GB));
      var VB = qB ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return QB.createElement("div", pB({
        className: FB,
        style: fB
      }, VB), QB.createElement("p", {
        className: YB,
        style: oB
      }, QB.isValidElement(DB) ? DB : "".concat(DB)), function() {
        if (GB && GB.length) {
          var BB = (gB ? dB()(GB, gB) : GB).map((function(BB, jB) {
            if ("none" === BB.type) return null;
            var nB = mB({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: BB.color || "#000"
              }, sB),
              dB = BB.formatter || LB || kB,
              IB = BB.value,
              NB = BB.name,
              uB = IB,
              aB = NB;
            if (dB && null != uB && null != aB) {
              var pB = dB(IB, NB, BB, jB, GB);
              if (Array.isArray(pB)) {
                var JB = rB(pB, 2);
                uB = JB[0], aB = JB[1]
              } else uB = pB
            }
            return QB.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(jB),
              style: nB
            }, (0, UB.v)(aB) ? QB.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, aB) : null, (0, UB.v)(aB) ? QB.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, zB) : null, QB.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, uB), QB.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, BB.unit || ""))
          }));
          return QB.createElement("ul", {
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

    function LB(BB) {
      return LB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, LB(BB)
    }

    function gB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != LB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != LB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == LB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }
    var tB = "recharts-tooltip-wrapper",
      SB = {
        visibility: "hidden"
      };

    function MB(BB) {
      var jB = BB.coordinate,
        zB = BB.translateX,
        QB = BB.translateY;
      return (0, uB.e)(tB, gB(gB(gB(gB({}, "".concat(tB, "-right"), (0, UB.x)(zB) && jB && (0, UB.x)(jB.x) && zB >= jB.x), "".concat(tB, "-left"), (0, UB.x)(zB) && jB && (0, UB.x)(jB.x) && zB < jB.x), "".concat(tB, "-bottom"), (0, UB.x)(QB) && jB && (0, UB.x)(jB.y) && QB >= jB.y), "".concat(tB, "-top"), (0, UB.x)(QB) && jB && (0, UB.x)(jB.y) && QB < jB.y))
    }

    function EB(BB) {
      var jB = BB.allowEscapeViewBox,
        zB = BB.coordinate,
        QB = BB.key,
        nB = BB.offsetTopLeft,
        dB = BB.position,
        IB = BB.reverseDirection,
        NB = BB.tooltipDimension,
        uB = BB.viewBox,
        aB = BB.viewBoxDimension;
      if (dB && (0, UB.x)(dB[QB])) return dB[QB];
      var pB = zB[QB] - NB - nB,
        rB = zB[QB] + nB;
      return jB[QB] ? IB[QB] ? pB : rB : IB[QB] ? pB < uB[QB] ? Math.max(rB, uB[QB]) : Math.max(pB, uB[QB]) : rB + NB > uB[QB] + aB ? Math.max(pB, uB[QB]) : Math.max(rB, uB[QB])
    }

    function iB(BB) {
      return iB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, iB(BB)
    }

    function qB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function fB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? qB(Object(zB), !0).forEach((function(jB) {
          VB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : qB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function oB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, hB(QB.key), QB)
      }
    }

    function HB(BB, jB, zB) {
      return jB = FB(jB),
        function(BB, jB) {
          if (jB && ("object" === iB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, DB() ? Reflect.construct(jB, zB || [], FB(BB).constructor) : jB.apply(BB, zB))
    }

    function DB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (DB = function() {
        return !!BB
      })()
    }

    function FB(BB) {
      return FB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, FB(BB)
    }

    function YB(BB, jB) {
      return YB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, YB(BB, jB)
    }

    function VB(BB, jB, zB) {
      return (jB = hB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function hB(BB) {
      var jB = function(BB, jB) {
        if ("object" != iB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != iB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == iB(jB) ? jB : jB + ""
    }
    var XB = function(BB) {
        function jB() {
          var BB;
          ! function(BB, jB) {
            if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
          }(this, jB);
          for (var zB = arguments.length, QB = new Array(zB), nB = 0; nB < zB; nB++) QB[nB] = arguments[nB];
          return VB(BB = HB(this, jB, [].concat(QB)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), VB(BB, "handleKeyDown", (function(jB) {
            var zB, QB, nB, dB;
            "Escape" === jB.key && BB.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (zB = null === (QB = BB.props.coordinate) || void 0 === QB ? void 0 : QB.x) && void 0 !== zB ? zB : 0,
                y: null !== (nB = null === (dB = BB.props.coordinate) || void 0 === dB ? void 0 : dB.y) && void 0 !== nB ? nB : 0
              }
            })
          })), BB
        }
        return function(BB, jB) {
          if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(jB && jB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), jB && YB(BB, jB)
        }(jB, BB), zB = jB, (nB = [{
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
            var BB, jB;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (BB = this.props.coordinate) || void 0 === BB ? void 0 : BB.x) === this.state.dismissedAtCoordinate.x && (null === (jB = this.props.coordinate) || void 0 === jB ? void 0 : jB.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var BB = this,
              jB = this.props,
              zB = jB.active,
              nB = jB.allowEscapeViewBox,
              dB = jB.animationDuration,
              IB = jB.animationEasing,
              NB = jB.children,
              uB = jB.coordinate,
              UB = jB.hasPayload,
              aB = jB.isAnimationActive,
              pB = jB.offset,
              rB = jB.position,
              sB = jB.reverseDirection,
              JB = jB.useTranslate3d,
              mB = jB.viewBox,
              yB = jB.wrapperStyle,
              kB = function(BB) {
                var jB, zB, QB = BB.allowEscapeViewBox,
                  nB = BB.coordinate,
                  dB = BB.offsetTopLeft,
                  IB = BB.position,
                  NB = BB.reverseDirection,
                  uB = BB.tooltipBox,
                  UB = BB.useTranslate3d,
                  aB = BB.viewBox;
                return {
                  cssProperties: uB.height > 0 && uB.width > 0 && nB ? function(BB) {
                    var jB = BB.translateX,
                      zB = BB.translateY;
                    return {
                      transform: BB.useTranslate3d ? "translate3d(".concat(jB, "px, ").concat(zB, "px, 0)") : "translate(".concat(jB, "px, ").concat(zB, "px)")
                    }
                  }({
                    translateX: jB = EB({
                      allowEscapeViewBox: QB,
                      coordinate: nB,
                      key: "x",
                      offsetTopLeft: dB,
                      position: IB,
                      reverseDirection: NB,
                      tooltipDimension: uB.width,
                      viewBox: aB,
                      viewBoxDimension: aB.width
                    }),
                    translateY: zB = EB({
                      allowEscapeViewBox: QB,
                      coordinate: nB,
                      key: "y",
                      offsetTopLeft: dB,
                      position: IB,
                      reverseDirection: NB,
                      tooltipDimension: uB.height,
                      viewBox: aB,
                      viewBoxDimension: aB.height
                    }),
                    useTranslate3d: UB
                  }) : SB,
                  cssClasses: MB({
                    translateX: jB,
                    translateY: zB,
                    coordinate: nB
                  })
                }
              }({
                allowEscapeViewBox: nB,
                coordinate: uB,
                offsetTopLeft: pB,
                position: rB,
                reverseDirection: sB,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: JB,
                viewBox: mB
              }),
              GB = kB.cssClasses,
              LB = kB.cssProperties,
              gB = fB(fB({
                transition: aB && zB ? "transform ".concat(dB, "ms ").concat(IB) : void 0
              }, LB), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && zB && UB ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, yB);
            return QB.createElement("div", {
              tabIndex: -1,
              className: GB,
              style: gB,
              ref: function(jB) {
                BB.wrapperNode = jB
              }
            }, NB)
          }
        }]) && oB(zB.prototype, nB), dB && oB(zB, dB), Object.defineProperty(zB, "prototype", {
          writable: !1
        }), zB;
        var zB, nB, dB
      }(QB.PureComponent),
      ZB = zB(5981),
      AB = zB(5985);

    function TB(BB) {
      return TB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, TB(BB)
    }

    function PB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function WB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? PB(Object(zB), !0).forEach((function(jB) {
          CB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : PB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function eB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, cB(QB.key), QB)
      }
    }

    function lB(BB, jB, zB) {
      return jB = xB(jB),
        function(BB, jB) {
          if (jB && ("object" === TB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, wB() ? Reflect.construct(jB, zB || [], xB(BB).constructor) : jB.apply(BB, zB))
    }

    function wB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (wB = function() {
        return !!BB
      })()
    }

    function xB(BB) {
      return xB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, xB(BB)
    }

    function KB(BB, jB) {
      return KB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, KB(BB, jB)
    }

    function CB(BB, jB, zB) {
      return (jB = cB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function cB(BB) {
      var jB = function(BB, jB) {
        if ("object" != TB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != TB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == TB(jB) ? jB : jB + ""
    }

    function bB(BB) {
      return BB.dataKey
    }
    var vB = function(BB) {
      function jB() {
        return function(BB, jB) {
          if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
        }(this, jB), lB(this, jB, arguments)
      }
      return function(BB, jB) {
        if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(jB && jB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), jB && KB(BB, jB)
      }(jB, BB), zB = jB, (nB = [{
        key: "render",
        value: function() {
          var BB = this,
            jB = this.props,
            zB = jB.active,
            nB = jB.allowEscapeViewBox,
            dB = jB.animationDuration,
            IB = jB.animationEasing,
            NB = jB.content,
            uB = jB.coordinate,
            UB = jB.filterNull,
            aB = jB.isAnimationActive,
            pB = jB.offset,
            rB = jB.payload,
            sB = jB.payloadUniqBy,
            JB = jB.position,
            mB = jB.reverseDirection,
            yB = jB.useTranslate3d,
            kB = jB.viewBox,
            LB = jB.wrapperStyle,
            gB = null !== rB && void 0 !== rB ? rB : [];
          UB && gB.length && (gB = (0, AB.c)(rB.filter((function(jB) {
            return null != jB.value && (!0 !== jB.hide || BB.props.includeHidden)
          })), sB, bB));
          var tB = gB.length > 0;
          return QB.createElement(XB, {
            allowEscapeViewBox: nB,
            animationDuration: dB,
            animationEasing: IB,
            isAnimationActive: aB,
            active: zB,
            coordinate: uB,
            hasPayload: tB,
            offset: pB,
            position: JB,
            reverseDirection: mB,
            useTranslate3d: yB,
            viewBox: kB,
            wrapperStyle: LB
          }, function(BB, jB) {
            return QB.isValidElement(BB) ? QB.cloneElement(BB, jB) : "function" === typeof BB ? QB.createElement(BB, jB) : QB.createElement(GB, jB)
          }(NB, WB(WB({}, this.props), {}, {
            payload: gB
          })))
        }
      }]) && eB(zB.prototype, nB), dB && eB(zB, dB), Object.defineProperty(zB, "prototype", {
        writable: !1
      }), zB;
      var zB, nB, dB
    }(QB.PureComponent);
    CB(vB, "displayName", "Tooltip"), CB(vB, "defaultProps", {
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
      isAnimationActive: !ZB.c.isSsr,
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
  5975: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => UB
    });
    var QB = zB(62),
      nB = zB(5146),
      dB = zB(5463),
      IB = ["children", "className"];

    function NB() {
      return NB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, NB.apply(this, arguments)
    }

    function uB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }
    var UB = QB.forwardRef((function(BB, jB) {
      var zB = BB.children,
        UB = BB.className,
        aB = uB(BB, IB),
        pB = (0, nB.e)("recharts-layer", UB);
      return QB.createElement("g", NB({
        className: pB
      }, (0, dB.c)(aB, !0), {
        ref: jB
      }), zB)
    }))
  },
  5967: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => UB
    });
    var QB = zB(62),
      nB = zB(5146),
      dB = zB(5463),
      IB = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function NB() {
      return NB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, NB.apply(this, arguments)
    }

    function uB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function UB(BB) {
      var jB = BB.children,
        zB = BB.width,
        UB = BB.height,
        aB = BB.viewBox,
        pB = BB.className,
        rB = BB.style,
        sB = BB.title,
        JB = BB.desc,
        mB = uB(BB, IB),
        yB = aB || {
          width: zB,
          height: UB,
          x: 0,
          y: 0
        },
        kB = (0, nB.e)("recharts-surface", pB);
      return QB.createElement("svg", NB({}, (0, dB.c)(mB, !0, "svg"), {
        className: kB,
        width: zB,
        height: UB,
        style: rB,
        viewBox: "".concat(yB.x, " ").concat(yB.y, " ").concat(yB.width, " ").concat(yB.height)
      }), QB.createElement("title", null, sB), QB.createElement("desc", null, JB), jB)
    }
  },
  6307: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => LB,
      e: () => SB,
      i: () => oB,
      l: () => fB,
      o: () => gB,
      q: () => qB,
      t: () => iB,
      x: () => tB,
      z: () => EB,
      D: () => MB
    });
    var QB = zB(62),
      nB = zB(5961),
      dB = zB(6312),
      IB = zB.n(dB),
      NB = zB(6235),
      uB = zB.n(NB),
      UB = zB(5277),
      aB = zB.n(UB)()((function(BB) {
        return {
          x: BB.left,
          y: BB.top,
          width: BB.width,
          height: BB.height
        }
      }), (function(BB) {
        return ["l", BB.left, "t", BB.top, "w", BB.width, "h", BB.height].join("")
      })),
      pB = zB(5229);
    var rB = (0, QB.createContext)(void 0),
      sB = (0, QB.createContext)(void 0),
      JB = (0, QB.createContext)(void 0),
      mB = (0, QB.createContext)({}),
      yB = (0, QB.createContext)(void 0),
      kB = (0, QB.createContext)(0),
      GB = (0, QB.createContext)(0),
      LB = function(BB) {
        var jB = BB.state,
          zB = jB.xAxisMap,
          nB = jB.yAxisMap,
          dB = jB.offset,
          IB = BB.clipPathId,
          NB = BB.children,
          uB = BB.width,
          UB = BB.height,
          pB = aB(dB);
        return QB.createElement(rB.Provider, {
          value: zB
        }, QB.createElement(sB.Provider, {
          value: nB
        }, QB.createElement(mB.Provider, {
          value: dB
        }, QB.createElement(JB.Provider, {
          value: pB
        }, QB.createElement(yB.Provider, {
          value: IB
        }, QB.createElement(kB.Provider, {
          value: UB
        }, QB.createElement(GB.Provider, {
          value: uB
        }, NB)))))))
      },
      gB = function() {
        return (0, QB.useContext)(yB)
      };
    var tB = function(BB) {
        var jB = (0, QB.useContext)(rB);
        null == jB && (0, nB.e)(!1);
        var zB = jB[BB];
        return null == zB && (0, nB.e)(!1), zB
      },
      SB = function() {
        var BB = (0, QB.useContext)(rB);
        return (0, pB.g)(BB)
      },
      MB = function() {
        var BB = (0, QB.useContext)(sB);
        return IB()(BB, (function(BB) {
          return uB()(BB.domain, Number.isFinite)
        })) || (0, pB.g)(BB)
      },
      EB = function(BB) {
        var jB = (0, QB.useContext)(sB);
        null == jB && (0, nB.e)(!1);
        var zB = jB[BB];
        return null == zB && (0, nB.e)(!1), zB
      },
      iB = function() {
        return (0, QB.useContext)(JB)
      },
      qB = function() {
        return (0, QB.useContext)(mB)
      },
      fB = function() {
        return (0, QB.useContext)(GB)
      },
      oB = function() {
        return (0, QB.useContext)(kB)
      }
  },
  6335: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => bB
    });
    var QB = zB(62);

    function nB() {}

    function dB(BB, jB, zB) {
      BB._context.bezierCurveTo((2 * BB._x0 + BB._x1) / 3, (2 * BB._y0 + BB._y1) / 3, (BB._x0 + 2 * BB._x1) / 3, (BB._y0 + 2 * BB._y1) / 3, (BB._x0 + 4 * BB._x1 + jB) / 6, (BB._y0 + 4 * BB._y1 + zB) / 6)
    }

    function IB(BB) {
      this._context = BB
    }

    function NB(BB) {
      this._context = BB
    }

    function uB(BB) {
      this._context = BB
    }
    IB.prototype = {
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
            dB(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(BB, jB) {
        switch (BB = +BB, jB = +jB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, jB) : this._context.moveTo(BB, jB);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            dB(this, BB, jB)
        }
        this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = jB
      }
    }, NB.prototype = {
      areaStart: nB,
      areaEnd: nB,
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
      point: function(BB, jB) {
        switch (BB = +BB, jB = +jB, this._point) {
          case 0:
            this._point = 1, this._x2 = BB, this._y2 = jB;
            break;
          case 1:
            this._point = 2, this._x3 = BB, this._y3 = jB;
            break;
          case 2:
            this._point = 3, this._x4 = BB, this._y4 = jB, this._context.moveTo((this._x0 + 4 * this._x1 + BB) / 6, (this._y0 + 4 * this._y1 + jB) / 6);
            break;
          default:
            dB(this, BB, jB)
        }
        this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = jB
      }
    }, uB.prototype = {
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
      point: function(BB, jB) {
        switch (BB = +BB, jB = +jB, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var zB = (this._x0 + 4 * this._x1 + BB) / 6,
              QB = (this._y0 + 4 * this._y1 + jB) / 6;
            this._line ? this._context.lineTo(zB, QB) : this._context.moveTo(zB, QB);
            break;
          case 3:
            this._point = 4;
          default:
            dB(this, BB, jB)
        }
        this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = jB
      }
    };
    class UB {
      constructor(BB, jB) {
        this._context = BB, this._x = jB
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
      point(BB, jB) {
        switch (BB = +BB, jB = +jB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, jB) : this._context.moveTo(BB, jB);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + BB) / 2, this._y0, this._x0, jB, BB, jB) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + jB) / 2, BB, this._y0, BB, jB)
        }
        this._x0 = BB, this._y0 = jB
      }
    }

    function aB(BB) {
      this._context = BB
    }

    function pB(BB) {
      this._context = BB
    }

    function rB(BB) {
      return new pB(BB)
    }

    function sB(BB) {
      return BB < 0 ? -1 : 1
    }

    function JB(BB, jB, zB) {
      var QB = BB._x1 - BB._x0,
        nB = jB - BB._x1,
        dB = (BB._y1 - BB._y0) / (QB || nB < 0 && -0),
        IB = (zB - BB._y1) / (nB || QB < 0 && -0),
        NB = (dB * nB + IB * QB) / (QB + nB);
      return (sB(dB) + sB(IB)) * Math.min(Math.abs(dB), Math.abs(IB), .5 * Math.abs(NB)) || 0
    }

    function mB(BB, jB) {
      var zB = BB._x1 - BB._x0;
      return zB ? (3 * (BB._y1 - BB._y0) / zB - jB) / 2 : jB
    }

    function yB(BB, jB, zB) {
      var QB = BB._x0,
        nB = BB._y0,
        dB = BB._x1,
        IB = BB._y1,
        NB = (dB - QB) / 3;
      BB._context.bezierCurveTo(QB + NB, nB + NB * jB, dB - NB, IB - NB * zB, dB, IB)
    }

    function kB(BB) {
      this._context = BB
    }

    function GB(BB) {
      this._context = new LB(BB)
    }

    function LB(BB) {
      this._context = BB
    }

    function gB(BB) {
      this._context = BB
    }

    function tB(BB) {
      var jB, zB, QB = BB.length - 1,
        nB = new Array(QB),
        dB = new Array(QB),
        IB = new Array(QB);
      for (nB[0] = 0, dB[0] = 2, IB[0] = BB[0] + 2 * BB[1], jB = 1; jB < QB - 1; ++jB) nB[jB] = 1, dB[jB] = 4, IB[jB] = 4 * BB[jB] + 2 * BB[jB + 1];
      for (nB[QB - 1] = 2, dB[QB - 1] = 7, IB[QB - 1] = 8 * BB[QB - 1] + BB[QB], jB = 1; jB < QB; ++jB) zB = nB[jB] / dB[jB - 1], dB[jB] -= zB, IB[jB] -= zB * IB[jB - 1];
      for (nB[QB - 1] = IB[QB - 1] / dB[QB - 1], jB = QB - 2; jB >= 0; --jB) nB[jB] = (IB[jB] - nB[jB + 1]) / dB[jB];
      for (dB[QB - 1] = (BB[QB] + nB[QB - 1]) / 2, jB = 0; jB < QB - 1; ++jB) dB[jB] = 2 * BB[jB + 1] - nB[jB + 1];
      return [nB, dB]
    }

    function SB(BB, jB) {
      this._context = BB, this._t = jB
    }
    aB.prototype = {
      areaStart: nB,
      areaEnd: nB,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(BB, jB) {
        BB = +BB, jB = +jB, this._point ? this._context.lineTo(BB, jB) : (this._point = 1, this._context.moveTo(BB, jB))
      }
    }, pB.prototype = {
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
      point: function(BB, jB) {
        switch (BB = +BB, jB = +jB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, jB) : this._context.moveTo(BB, jB);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(BB, jB)
        }
      }
    }, kB.prototype = {
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
            yB(this, this._t0, mB(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(BB, jB) {
        var zB = NaN;
        if (jB = +jB, (BB = +BB) !== this._x1 || jB !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(BB, jB) : this._context.moveTo(BB, jB);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, yB(this, mB(this, zB = JB(this, BB, jB)), zB);
              break;
            default:
              yB(this, this._t0, zB = JB(this, BB, jB))
          }
          this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = jB, this._t0 = zB
        }
      }
    }, (GB.prototype = Object.create(kB.prototype)).point = function(BB, jB) {
      kB.prototype.point.call(this, jB, BB)
    }, LB.prototype = {
      moveTo: function(BB, jB) {
        this._context.moveTo(jB, BB)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(BB, jB) {
        this._context.lineTo(jB, BB)
      },
      bezierCurveTo: function(BB, jB, zB, QB, nB, dB) {
        this._context.bezierCurveTo(jB, BB, QB, zB, dB, nB)
      }
    }, gB.prototype = {
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
          jB = this._y,
          zB = BB.length;
        if (zB)
          if (this._line ? this._context.lineTo(BB[0], jB[0]) : this._context.moveTo(BB[0], jB[0]), 2 === zB) this._context.lineTo(BB[1], jB[1]);
          else
            for (var QB = tB(BB), nB = tB(jB), dB = 0, IB = 1; IB < zB; ++dB, ++IB) this._context.bezierCurveTo(QB[0][dB], nB[0][dB], QB[1][dB], nB[1][dB], BB[IB], jB[IB]);
        (this._line || 0 !== this._line && 1 === zB) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(BB, jB) {
        this._x.push(+BB), this._y.push(+jB)
      }
    }, SB.prototype = {
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
      point: function(BB, jB) {
        switch (BB = +BB, jB = +jB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, jB) : this._context.moveTo(BB, jB);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, jB), this._context.lineTo(BB, jB);
            else {
              var zB = this._x * (1 - this._t) + BB * this._t;
              this._context.lineTo(zB, this._y), this._context.lineTo(zB, jB)
            }
        }
        this._x = BB, this._y = jB
      }
    };
    var MB = zB(6198),
      EB = zB(6087),
      iB = zB(6090);

    function qB(BB) {
      return BB[0]
    }

    function fB(BB) {
      return BB[1]
    }

    function oB(BB, jB) {
      var zB = (0, EB.c)(!0),
        QB = null,
        nB = rB,
        dB = null,
        IB = (0, iB.e)(NB);

      function NB(NB) {
        var uB, UB, aB, pB = (NB = (0, MB.e)(NB)).length,
          rB = !1;
        for (null == QB && (dB = nB(aB = IB())), uB = 0; uB <= pB; ++uB) !(uB < pB && zB(UB = NB[uB], uB, NB)) === rB && ((rB = !rB) ? dB.lineStart() : dB.lineEnd()), rB && dB.point(+BB(UB, uB, NB), +jB(UB, uB, NB));
        if (aB) return dB = null, aB + "" || null
      }
      return BB = "function" === typeof BB ? BB : void 0 === BB ? qB : (0, EB.c)(BB), jB = "function" === typeof jB ? jB : void 0 === jB ? fB : (0, EB.c)(jB), NB.x = function(jB) {
        return arguments.length ? (BB = "function" === typeof jB ? jB : (0, EB.c)(+jB), NB) : BB
      }, NB.y = function(BB) {
        return arguments.length ? (jB = "function" === typeof BB ? BB : (0, EB.c)(+BB), NB) : jB
      }, NB.defined = function(BB) {
        return arguments.length ? (zB = "function" === typeof BB ? BB : (0, EB.c)(!!BB), NB) : zB
      }, NB.curve = function(BB) {
        return arguments.length ? (nB = BB, null != QB && (dB = nB(QB)), NB) : nB
      }, NB.context = function(BB) {
        return arguments.length ? (null == BB ? QB = dB = null : dB = nB(QB = BB), NB) : QB
      }, NB
    }

    function HB(BB, jB, zB) {
      var QB = null,
        nB = (0, EB.c)(!0),
        dB = null,
        IB = rB,
        NB = null,
        uB = (0, iB.e)(UB);

      function UB(UB) {
        var aB, pB, rB, sB, JB, mB = (UB = (0, MB.e)(UB)).length,
          yB = !1,
          kB = new Array(mB),
          GB = new Array(mB);
        for (null == dB && (NB = IB(JB = uB())), aB = 0; aB <= mB; ++aB) {
          if (!(aB < mB && nB(sB = UB[aB], aB, UB)) === yB)
            if (yB = !yB) pB = aB, NB.areaStart(), NB.lineStart();
            else {
              for (NB.lineEnd(), NB.lineStart(), rB = aB - 1; rB >= pB; --rB) NB.point(kB[rB], GB[rB]);
              NB.lineEnd(), NB.areaEnd()
            } yB && (kB[aB] = +BB(sB, aB, UB), GB[aB] = +jB(sB, aB, UB), NB.point(QB ? +QB(sB, aB, UB) : kB[aB], zB ? +zB(sB, aB, UB) : GB[aB]))
        }
        if (JB) return NB = null, JB + "" || null
      }

      function aB() {
        return oB().defined(nB).curve(IB).context(dB)
      }
      return BB = "function" === typeof BB ? BB : void 0 === BB ? qB : (0, EB.c)(+BB), jB = "function" === typeof jB ? jB : void 0 === jB ? (0, EB.c)(0) : (0, EB.c)(+jB), zB = "function" === typeof zB ? zB : void 0 === zB ? fB : (0, EB.c)(+zB), UB.x = function(jB) {
        return arguments.length ? (BB = "function" === typeof jB ? jB : (0, EB.c)(+jB), QB = null, UB) : BB
      }, UB.x0 = function(jB) {
        return arguments.length ? (BB = "function" === typeof jB ? jB : (0, EB.c)(+jB), UB) : BB
      }, UB.x1 = function(BB) {
        return arguments.length ? (QB = null == BB ? null : "function" === typeof BB ? BB : (0, EB.c)(+BB), UB) : QB
      }, UB.y = function(BB) {
        return arguments.length ? (jB = "function" === typeof BB ? BB : (0, EB.c)(+BB), zB = null, UB) : jB
      }, UB.y0 = function(BB) {
        return arguments.length ? (jB = "function" === typeof BB ? BB : (0, EB.c)(+BB), UB) : jB
      }, UB.y1 = function(BB) {
        return arguments.length ? (zB = null == BB ? null : "function" === typeof BB ? BB : (0, EB.c)(+BB), UB) : zB
      }, UB.lineX0 = UB.lineY0 = function() {
        return aB().x(BB).y(jB)
      }, UB.lineY1 = function() {
        return aB().x(BB).y(zB)
      }, UB.lineX1 = function() {
        return aB().x(QB).y(jB)
      }, UB.defined = function(BB) {
        return arguments.length ? (nB = "function" === typeof BB ? BB : (0, EB.c)(!!BB), UB) : nB
      }, UB.curve = function(BB) {
        return arguments.length ? (IB = BB, null != dB && (NB = IB(dB)), UB) : IB
      }, UB.context = function(BB) {
        return arguments.length ? (null == BB ? dB = NB = null : NB = IB(dB = BB), UB) : dB
      }, UB
    }
    var DB = zB(6059),
      FB = zB.n(DB),
      YB = zB(5319),
      VB = zB.n(YB),
      hB = zB(5146),
      XB = zB(5485),
      ZB = zB(5463),
      AB = zB(5229);

    function TB(BB) {
      return TB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, TB(BB)
    }

    function PB() {
      return PB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, PB.apply(this, arguments)
    }

    function WB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function eB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? WB(Object(zB), !0).forEach((function(jB) {
          lB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : WB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function lB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != TB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != TB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == TB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }
    var wB = {
        curveBasisClosed: function(BB) {
          return new NB(BB)
        },
        curveBasisOpen: function(BB) {
          return new uB(BB)
        },
        curveBasis: function(BB) {
          return new IB(BB)
        },
        curveBumpX: function(BB) {
          return new UB(BB, !0)
        },
        curveBumpY: function(BB) {
          return new UB(BB, !1)
        },
        curveLinearClosed: function(BB) {
          return new aB(BB)
        },
        curveLinear: rB,
        curveMonotoneX: function(BB) {
          return new kB(BB)
        },
        curveMonotoneY: function(BB) {
          return new GB(BB)
        },
        curveNatural: function(BB) {
          return new gB(BB)
        },
        curveStep: function(BB) {
          return new SB(BB, .5)
        },
        curveStepAfter: function(BB) {
          return new SB(BB, 1)
        },
        curveStepBefore: function(BB) {
          return new SB(BB, 0)
        }
      },
      xB = function(BB) {
        return BB.x === +BB.x && BB.y === +BB.y
      },
      KB = function(BB) {
        return BB.x
      },
      CB = function(BB) {
        return BB.y
      },
      cB = function(BB) {
        var jB, zB = BB.type,
          QB = void 0 === zB ? "linear" : zB,
          nB = BB.points,
          dB = void 0 === nB ? [] : nB,
          IB = BB.baseLine,
          NB = BB.layout,
          uB = BB.connectNulls,
          UB = void 0 !== uB && uB,
          aB = function(BB, jB) {
            if (VB()(BB)) return BB;
            var zB = "curve".concat(FB()(BB));
            return "curveMonotone" !== zB && "curveBump" !== zB || !jB ? wB[zB] || rB : wB["".concat(zB).concat("vertical" === jB ? "Y" : "X")]
          }(QB, NB),
          pB = UB ? dB.filter((function(BB) {
            return xB(BB)
          })) : dB;
        if (Array.isArray(IB)) {
          var sB = UB ? IB.filter((function(BB) {
              return xB(BB)
            })) : IB,
            JB = pB.map((function(BB, jB) {
              return eB(eB({}, BB), {}, {
                base: sB[jB]
              })
            }));
          return (jB = "vertical" === NB ? HB().y(CB).x1(KB).x0((function(BB) {
            return BB.base.x
          })) : HB().x(KB).y1(CB).y0((function(BB) {
            return BB.base.y
          }))).defined(xB).curve(aB), jB(JB)
        }
        return (jB = "vertical" === NB && (0, AB.x)(IB) ? HB().y(CB).x1(KB).x0(IB) : (0, AB.x)(IB) ? HB().x(KB).y1(CB).y0(IB) : oB().x(KB).y(CB)).defined(xB).curve(aB), jB(pB)
      },
      bB = function(BB) {
        var jB = BB.className,
          zB = BB.points,
          nB = BB.path,
          dB = BB.pathRef;
        if ((!zB || !zB.length) && !nB) return null;
        var IB = zB && zB.length ? cB(BB) : nB;
        return QB.createElement("path", PB({}, (0, ZB.c)(BB, !1), (0, XB.j)(BB), {
          className: (0, hB.e)("recharts-curve", jB),
          d: IB,
          ref: dB
        }))
      }
  },
  6094: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB
    });
    var QB = zB(62),
      nB = zB(5146),
      dB = zB(5485),
      IB = zB(5463);

    function NB() {
      return NB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, NB.apply(this, arguments)
    }
    var uB = function(BB) {
      var jB = BB.cx,
        zB = BB.cy,
        uB = BB.r,
        UB = BB.className,
        aB = (0, nB.e)("recharts-dot", UB);
      return jB === +jB && zB === +zB && uB === +uB ? QB.createElement("circle", NB({}, (0, IB.c)(BB, !1), (0, dB.j)(BB), {
        className: aB,
        cx: jB,
        cy: zB,
        r: uB
      })) : null
    }
  },
  6099: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => kB,
      h: () => mB
    });
    var QB = zB(62),
      nB = zB(5146),
      dB = zB(6102),
      IB = zB(5463);

    function NB(BB) {
      return NB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, NB(BB)
    }

    function uB() {
      return uB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, uB.apply(this, arguments)
    }

    function UB(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        var zB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != zB) {
          var QB, nB, dB, IB, NB = [],
            uB = !0,
            UB = !1;
          try {
            if (dB = (zB = zB.call(BB)).next, 0 === jB) {
              if (Object(zB) !== zB) return;
              uB = !1
            } else
              for (; !(uB = (QB = dB.call(zB)).done) && (NB.push(QB.value), NB.length !== jB); uB = !0);
          } catch (BB) {
            UB = !0, nB = BB
          } finally {
            try {
              if (!uB && null != zB.return && (IB = zB.return(), Object(IB) !== IB)) return
            } finally {
              if (UB) throw nB
            }
          }
          return NB
        }
      }(BB, jB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return aB(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return aB(BB, jB)
      }(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function pB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function rB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? pB(Object(zB), !0).forEach((function(jB) {
          sB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : pB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function sB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != NB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != NB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == NB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }
    var JB = function(BB, jB, zB, QB, nB) {
        var dB, IB = Math.min(Math.abs(zB) / 2, Math.abs(QB) / 2),
          NB = QB >= 0 ? 1 : -1,
          uB = zB >= 0 ? 1 : -1,
          UB = QB >= 0 && zB >= 0 || QB < 0 && zB < 0 ? 1 : 0;
        if (IB > 0 && nB instanceof Array) {
          for (var aB = [0, 0, 0, 0], pB = 0; pB < 4; pB++) aB[pB] = nB[pB] > IB ? IB : nB[pB];
          dB = "M".concat(BB, ",").concat(jB + NB * aB[0]), aB[0] > 0 && (dB += "A ".concat(aB[0], ",").concat(aB[0], ",0,0,").concat(UB, ",").concat(BB + uB * aB[0], ",").concat(jB)), dB += "L ".concat(BB + zB - uB * aB[1], ",").concat(jB), aB[1] > 0 && (dB += "A ".concat(aB[1], ",").concat(aB[1], ",0,0,").concat(UB, ",\n        ").concat(BB + zB, ",").concat(jB + NB * aB[1])), dB += "L ".concat(BB + zB, ",").concat(jB + QB - NB * aB[2]), aB[2] > 0 && (dB += "A ".concat(aB[2], ",").concat(aB[2], ",0,0,").concat(UB, ",\n        ").concat(BB + zB - uB * aB[2], ",").concat(jB + QB)), dB += "L ".concat(BB + uB * aB[3], ",").concat(jB + QB), aB[3] > 0 && (dB += "A ".concat(aB[3], ",").concat(aB[3], ",0,0,").concat(UB, ",\n        ").concat(BB, ",").concat(jB + QB - NB * aB[3])), dB += "Z"
        } else if (IB > 0 && nB === +nB && nB > 0) {
          var rB = Math.min(IB, nB);
          dB = "M ".concat(BB, ",").concat(jB + NB * rB, "\n            A ").concat(rB, ",").concat(rB, ",0,0,").concat(UB, ",").concat(BB + uB * rB, ",").concat(jB, "\n            L ").concat(BB + zB - uB * rB, ",").concat(jB, "\n            A ").concat(rB, ",").concat(rB, ",0,0,").concat(UB, ",").concat(BB + zB, ",").concat(jB + NB * rB, "\n            L ").concat(BB + zB, ",").concat(jB + QB - NB * rB, "\n            A ").concat(rB, ",").concat(rB, ",0,0,").concat(UB, ",").concat(BB + zB - uB * rB, ",").concat(jB + QB, "\n            L ").concat(BB + uB * rB, ",").concat(jB + QB, "\n            A ").concat(rB, ",").concat(rB, ",0,0,").concat(UB, ",").concat(BB, ",").concat(jB + QB - NB * rB, " Z")
        } else dB = "M ".concat(BB, ",").concat(jB, " h ").concat(zB, " v ").concat(QB, " h ").concat(-zB, " Z");
        return dB
      },
      mB = function(BB, jB) {
        if (!BB || !jB) return !1;
        var zB = BB.x,
          QB = BB.y,
          nB = jB.x,
          dB = jB.y,
          IB = jB.width,
          NB = jB.height;
        if (Math.abs(IB) > 0 && Math.abs(NB) > 0) {
          var uB = Math.min(nB, nB + IB),
            UB = Math.max(nB, nB + IB),
            aB = Math.min(dB, dB + NB),
            pB = Math.max(dB, dB + NB);
          return zB >= uB && zB <= UB && QB >= aB && QB <= pB
        }
        return !1
      },
      yB = {
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
      kB = function(BB) {
        var jB = rB(rB({}, yB), BB),
          zB = (0, QB.useRef)(),
          NB = UB((0, QB.useState)(-1), 2),
          aB = NB[0],
          pB = NB[1];
        (0, QB.useEffect)((function() {
          if (zB.current && zB.current.getTotalLength) try {
            var BB = zB.current.getTotalLength();
            BB && pB(BB)
          } catch (jB) {}
        }), []);
        var sB = jB.x,
          mB = jB.y,
          kB = jB.width,
          GB = jB.height,
          LB = jB.radius,
          gB = jB.className,
          tB = jB.animationEasing,
          SB = jB.animationDuration,
          MB = jB.animationBegin,
          EB = jB.isAnimationActive,
          iB = jB.isUpdateAnimationActive;
        if (sB !== +sB || mB !== +mB || kB !== +kB || GB !== +GB || 0 === kB || 0 === GB) return null;
        var qB = (0, nB.e)("recharts-rectangle", gB);
        return iB ? QB.createElement(dB.c, {
          canBegin: aB > 0,
          from: {
            width: kB,
            height: GB,
            x: sB,
            y: mB
          },
          to: {
            width: kB,
            height: GB,
            x: sB,
            y: mB
          },
          duration: SB,
          animationEasing: tB,
          isActive: iB
        }, (function(BB) {
          var nB = BB.width,
            NB = BB.height,
            UB = BB.x,
            pB = BB.y;
          return QB.createElement(dB.c, {
            canBegin: aB > 0,
            from: "0px ".concat(-1 === aB ? 1 : aB, "px"),
            to: "".concat(aB, "px 0px"),
            attributeName: "strokeDasharray",
            Ds: MB,
            duration: SB,
            isActive: EB,
            easing: tB
          }, QB.createElement("path", uB({}, (0, IB.c)(jB, !0), {
            className: qB,
            d: JB(UB, pB, nB, NB, LB),
            ref: zB
          })))
        })) : QB.createElement("path", uB({}, (0, IB.c)(jB, !0), {
          className: qB,
          d: JB(sB, mB, kB, GB, LB)
        }))
      }
  },
  6287: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => yB
    });
    var QB = zB(62),
      nB = zB(5146),
      dB = zB(5463),
      IB = zB(6207),
      NB = zB(5229);

    function uB(BB) {
      return uB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, uB(BB)
    }

    function UB() {
      return UB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, UB.apply(this, arguments)
    }

    function aB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function pB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? aB(Object(zB), !0).forEach((function(jB) {
          rB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : aB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function rB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != uB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != uB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == uB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }
    var sB = function(BB) {
        var jB = BB.cx,
          zB = BB.cy,
          QB = BB.radius,
          nB = BB.angle,
          dB = BB.sign,
          NB = BB.isExternal,
          uB = BB.cornerRadius,
          UB = BB.cornerIsExternal,
          aB = uB * (NB ? 1 : -1) + QB,
          pB = Math.asin(uB / aB) / IB.e,
          rB = UB ? nB : nB + dB * pB,
          sB = UB ? nB - dB * pB : nB;
        return {
          center: (0, IB.j)(jB, zB, aB, rB),
          circleTangency: (0, IB.j)(jB, zB, QB, rB),
          lineTangency: (0, IB.j)(jB, zB, aB * Math.cos(pB * IB.e), sB),
          gp: pB
        }
      },
      JB = function(BB) {
        var jB = BB.cx,
          zB = BB.cy,
          QB = BB.innerRadius,
          nB = BB.outerRadius,
          dB = BB.startAngle,
          uB = function(BB, jB) {
            return (0, NB.B)(jB - BB) * Math.min(Math.abs(jB - BB), 359.999)
          }(dB, BB.endAngle),
          UB = dB + uB,
          aB = (0, IB.j)(jB, zB, nB, dB),
          pB = (0, IB.j)(jB, zB, nB, UB),
          rB = "M ".concat(aB.x, ",").concat(aB.y, "\n    A ").concat(nB, ",").concat(nB, ",0,\n    ").concat(+(Math.abs(uB) > 180), ",").concat(+(dB > UB), ",\n    ").concat(pB.x, ",").concat(pB.y, "\n  ");
        if (QB > 0) {
          var sB = (0, IB.j)(jB, zB, QB, dB),
            JB = (0, IB.j)(jB, zB, QB, UB);
          rB += "L ".concat(JB.x, ",").concat(JB.y, "\n            A ").concat(QB, ",").concat(QB, ",0,\n            ").concat(+(Math.abs(uB) > 180), ",").concat(+(dB <= UB), ",\n            ").concat(sB.x, ",").concat(sB.y, " Z")
        } else rB += "L ".concat(jB, ",").concat(zB, " Z");
        return rB
      },
      mB = {
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
      yB = function(BB) {
        var jB = pB(pB({}, mB), BB),
          zB = jB.cx,
          IB = jB.cy,
          uB = jB.innerRadius,
          aB = jB.outerRadius,
          rB = jB.cornerRadius,
          yB = jB.forceCornerRadius,
          kB = jB.cornerIsExternal,
          GB = jB.startAngle,
          LB = jB.endAngle,
          gB = jB.className;
        if (aB < uB || GB === LB) return null;
        var tB, SB = (0, nB.e)("recharts-sector", gB),
          MB = aB - uB,
          EB = (0, NB.m)(rB, MB, 0, !0);
        return tB = EB > 0 && Math.abs(GB - LB) < 360 ? function(BB) {
          var jB = BB.cx,
            zB = BB.cy,
            QB = BB.innerRadius,
            nB = BB.outerRadius,
            dB = BB.cornerRadius,
            IB = BB.forceCornerRadius,
            uB = BB.cornerIsExternal,
            UB = BB.startAngle,
            aB = BB.endAngle,
            pB = (0, NB.B)(aB - UB),
            rB = sB({
              cx: jB,
              cy: zB,
              radius: nB,
              angle: UB,
              sign: pB,
              cornerRadius: dB,
              cornerIsExternal: uB
            }),
            mB = rB.circleTangency,
            yB = rB.lineTangency,
            kB = rB.gp,
            GB = sB({
              cx: jB,
              cy: zB,
              radius: nB,
              angle: aB,
              sign: -pB,
              cornerRadius: dB,
              cornerIsExternal: uB
            }),
            LB = GB.circleTangency,
            gB = GB.lineTangency,
            tB = GB.gp,
            SB = uB ? Math.abs(UB - aB) : Math.abs(UB - aB) - kB - tB;
          if (SB < 0) return IB ? "M ".concat(yB.x, ",").concat(yB.y, "\n        a").concat(dB, ",").concat(dB, ",0,0,1,").concat(2 * dB, ",0\n        a").concat(dB, ",").concat(dB, ",0,0,1,").concat(2 * -dB, ",0\n      ") : JB({
            cx: jB,
            cy: zB,
            innerRadius: QB,
            outerRadius: nB,
            startAngle: UB,
            endAngle: aB
          });
          var MB = "M ".concat(yB.x, ",").concat(yB.y, "\n    A").concat(dB, ",").concat(dB, ",0,0,").concat(+(pB < 0), ",").concat(mB.x, ",").concat(mB.y, "\n    A").concat(nB, ",").concat(nB, ",0,").concat(+(SB > 180), ",").concat(+(pB < 0), ",").concat(LB.x, ",").concat(LB.y, "\n    A").concat(dB, ",").concat(dB, ",0,0,").concat(+(pB < 0), ",").concat(gB.x, ",").concat(gB.y, "\n  ");
          if (QB > 0) {
            var EB = sB({
                cx: jB,
                cy: zB,
                radius: QB,
                angle: UB,
                sign: pB,
                isExternal: !0,
                cornerRadius: dB,
                cornerIsExternal: uB
              }),
              iB = EB.circleTangency,
              qB = EB.lineTangency,
              fB = EB.gp,
              oB = sB({
                cx: jB,
                cy: zB,
                radius: QB,
                angle: aB,
                sign: -pB,
                isExternal: !0,
                cornerRadius: dB,
                cornerIsExternal: uB
              }),
              HB = oB.circleTangency,
              DB = oB.lineTangency,
              FB = oB.gp,
              YB = uB ? Math.abs(UB - aB) : Math.abs(UB - aB) - fB - FB;
            if (YB < 0 && 0 === dB) return "".concat(MB, "L").concat(jB, ",").concat(zB, "Z");
            MB += "L".concat(DB.x, ",").concat(DB.y, "\n      A").concat(dB, ",").concat(dB, ",0,0,").concat(+(pB < 0), ",").concat(HB.x, ",").concat(HB.y, "\n      A").concat(QB, ",").concat(QB, ",0,").concat(+(YB > 180), ",").concat(+(pB > 0), ",").concat(iB.x, ",").concat(iB.y, "\n      A").concat(dB, ",").concat(dB, ",0,0,").concat(+(pB < 0), ",").concat(qB.x, ",").concat(qB.y, "Z")
          } else MB += "L".concat(jB, ",").concat(zB, "Z");
          return MB
        }({
          cx: zB,
          cy: IB,
          innerRadius: uB,
          outerRadius: aB,
          cornerRadius: Math.min(EB, MB / 2),
          forceCornerRadius: yB,
          cornerIsExternal: kB,
          startAngle: GB,
          endAngle: LB
        }) : JB({
          cx: zB,
          cy: IB,
          innerRadius: uB,
          outerRadius: aB,
          startAngle: GB,
          endAngle: LB
        }), QB.createElement("path", UB({}, (0, dB.c)(jB, !0), {
          className: SB,
          d: tB,
          role: "img"
        }))
      }
  },
  6053: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => eB
    });
    var QB = zB(62),
      nB = zB(6059),
      dB = zB.n(nB);
    Math.abs, Math.atan2;
    const IB = Math.cos,
      NB = (Math.max, Math.min, Math.sin),
      uB = Math.sqrt,
      UB = Math.PI,
      aB = 2 * UB;
    const pB = {
        draw(BB, jB) {
          const zB = uB(jB / UB);
          BB.moveTo(zB, 0), BB.arc(0, 0, zB, 0, aB)
        }
      },
      rB = {
        draw(BB, jB) {
          const zB = uB(jB / 5) / 2;
          BB.moveTo(-3 * zB, -zB), BB.lineTo(-zB, -zB), BB.lineTo(-zB, -3 * zB), BB.lineTo(zB, -3 * zB), BB.lineTo(zB, -zB), BB.lineTo(3 * zB, -zB), BB.lineTo(3 * zB, zB), BB.lineTo(zB, zB), BB.lineTo(zB, 3 * zB), BB.lineTo(-zB, 3 * zB), BB.lineTo(-zB, zB), BB.lineTo(-3 * zB, zB), BB.closePath()
        }
      },
      sB = uB(1 / 3),
      JB = 2 * sB,
      mB = {
        draw(BB, jB) {
          const zB = uB(jB / JB),
            QB = zB * sB;
          BB.moveTo(0, -zB), BB.lineTo(QB, 0), BB.lineTo(0, zB), BB.lineTo(-QB, 0), BB.closePath()
        }
      },
      yB = {
        draw(BB, jB) {
          const zB = uB(jB),
            QB = -zB / 2;
          BB.rect(QB, QB, zB, zB)
        }
      },
      kB = NB(UB / 10) / NB(7 * UB / 10),
      GB = NB(aB / 10) * kB,
      LB = -IB(aB / 10) * kB,
      gB = {
        draw(BB, jB) {
          const zB = uB(.8908130915292852 * jB),
            QB = GB * zB,
            nB = LB * zB;
          BB.moveTo(0, -zB), BB.lineTo(QB, nB);
          for (let dB = 1; dB < 5; ++dB) {
            const jB = aB * dB / 5,
              uB = IB(jB),
              UB = NB(jB);
            BB.lineTo(UB * zB, -uB * zB), BB.lineTo(uB * QB - UB * nB, UB * QB + uB * nB)
          }
          BB.closePath()
        }
      },
      tB = uB(3),
      SB = {
        draw(BB, jB) {
          const zB = -uB(jB / (3 * tB));
          BB.moveTo(0, 2 * zB), BB.lineTo(-tB * zB, -zB), BB.lineTo(tB * zB, -zB), BB.closePath()
        }
      },
      MB = -.5,
      EB = uB(3) / 2,
      iB = 1 / uB(12),
      qB = 3 * (iB / 2 + 1),
      fB = {
        draw(BB, jB) {
          const zB = uB(jB / qB),
            QB = zB / 2,
            nB = zB * iB,
            dB = QB,
            IB = zB * iB + zB,
            NB = -dB,
            UB = IB;
          BB.moveTo(QB, nB), BB.lineTo(dB, IB), BB.lineTo(NB, UB), BB.lineTo(MB * QB - EB * nB, EB * QB + MB * nB), BB.lineTo(MB * dB - EB * IB, EB * dB + MB * IB), BB.lineTo(MB * NB - EB * UB, EB * NB + MB * UB), BB.lineTo(MB * QB + EB * nB, MB * nB - EB * QB), BB.lineTo(MB * dB + EB * IB, MB * IB - EB * dB), BB.lineTo(MB * NB + EB * UB, MB * UB - EB * NB), BB.closePath()
        }
      };
    var oB = zB(6087),
      HB = zB(6090);
    uB(3), uB(3);
    var DB = zB(5146),
      FB = zB(5463);

    function YB(BB) {
      return YB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, YB(BB)
    }
    var VB = ["type", "size", "sizeType"];

    function hB() {
      return hB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, hB.apply(this, arguments)
    }

    function XB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function ZB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? XB(Object(zB), !0).forEach((function(jB) {
          AB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : XB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function AB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != YB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != YB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == YB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function TB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }
    var PB = {
        symbolCircle: pB,
        symbolCross: rB,
        symbolDiamond: mB,
        symbolSquare: yB,
        symbolStar: gB,
        symbolTriangle: SB,
        symbolWye: fB
      },
      WB = Math.PI / 180,
      eB = function(BB) {
        var jB = BB.type,
          zB = void 0 === jB ? "circle" : jB,
          nB = BB.size,
          IB = void 0 === nB ? 64 : nB,
          NB = BB.sizeType,
          uB = void 0 === NB ? "area" : NB,
          UB = ZB(ZB({}, TB(BB, VB)), {}, {
            type: zB,
            size: IB,
            sizeType: uB
          }),
          aB = UB.className,
          rB = UB.cx,
          sB = UB.cy,
          JB = (0, FB.c)(UB, !0);
        return rB === +rB && sB === +sB && IB === +IB ? QB.createElement("path", hB({}, JB, {
          className: (0, DB.e)("recharts-symbols", aB),
          transform: "translate(".concat(rB, ", ").concat(sB, ")"),
          d: function() {
            var BB = function(BB) {
                var jB = "symbol".concat(dB()(BB));
                return PB[jB] || pB
              }(zB),
              jB = function(BB, jB) {
                let zB = null,
                  QB = (0, HB.e)(nB);

                function nB() {
                  let nB;
                  if (zB || (zB = nB = QB()), BB.apply(this, arguments).draw(zB, +jB.apply(this, arguments)), nB) return zB = null, nB + "" || null
                }
                return BB = "function" === typeof BB ? BB : (0, oB.c)(BB || pB), jB = "function" === typeof jB ? jB : (0, oB.c)(void 0 === jB ? 64 : +jB), nB.type = function(jB) {
                  return arguments.length ? (BB = "function" === typeof jB ? jB : (0, oB.c)(jB), nB) : BB
                }, nB.size = function(BB) {
                  return arguments.length ? (jB = "function" === typeof BB ? BB : (0, oB.c)(+BB), nB) : jB
                }, nB.context = function(BB) {
                  return arguments.length ? (zB = null == BB ? null : BB, nB) : zB
                }, nB
              }().type(BB).size(function(BB, jB, zB) {
                if ("area" === jB) return BB;
                switch (zB) {
                  case "cross":
                    return 5 * BB * BB / 9;
                  case "diamond":
                    return .5 * BB * BB / Math.sqrt(3);
                  case "square":
                    return BB * BB;
                  case "star":
                    var QB = 18 * WB;
                    return 1.25 * BB * BB * (Math.tan(QB) - Math.tan(2 * QB) * Math.pow(Math.tan(QB), 2));
                  case "triangle":
                    return Math.sqrt(3) * BB * BB / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * BB * BB / 8;
                  default:
                    return Math.PI * BB * BB / 4
                }
              }(IB, uB, zB));
            return jB()
          }()
        })) : null
      };
    eB.registerSymbol = function(BB, jB) {
      PB["symbol".concat(dB()(BB))] = jB
    }
  },
  6268: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => AB,
      e: () => xB,
      h: () => TB,
      i: () => PB,
      m: () => WB
    });
    var QB = zB(62),
      nB = zB(5319),
      dB = zB.n(nB),
      IB = zB(6271),
      NB = zB.n(IB),
      uB = zB(6279),
      UB = zB.n(uB),
      aB = zB(6176),
      pB = zB.n(aB),
      rB = zB(6099),
      sB = zB(5146),
      JB = zB(6102),
      mB = zB(5463);

    function yB(BB) {
      return yB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, yB(BB)
    }

    function kB() {
      return kB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB) Object.prototype.hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, kB.apply(this, arguments)
    }

    function GB(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        var zB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != zB) {
          var QB, nB, dB, IB, NB = [],
            uB = !0,
            UB = !1;
          try {
            if (dB = (zB = zB.call(BB)).next, 0 === jB) {
              if (Object(zB) !== zB) return;
              uB = !1
            } else
              for (; !(uB = (QB = dB.call(zB)).done) && (NB.push(QB.value), NB.length !== jB); uB = !0);
          } catch (BB) {
            UB = !0, nB = BB
          } finally {
            try {
              if (!uB && null != zB.return && (IB = zB.return(), Object(IB) !== IB)) return
            } finally {
              if (UB) throw nB
            }
          }
          return NB
        }
      }(BB, jB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return LB(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return LB(BB, jB)
      }(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function LB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function gB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function tB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? gB(Object(zB), !0).forEach((function(jB) {
          SB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : gB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function SB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != yB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != yB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == yB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }
    var MB = function(BB, jB, zB, QB, nB) {
        var dB, IB = zB - QB;
        return dB = "M ".concat(BB, ",").concat(jB), dB += "L ".concat(BB + zB, ",").concat(jB), dB += "L ".concat(BB + zB - IB / 2, ",").concat(jB + nB), dB += "L ".concat(BB + zB - IB / 2 - QB, ",").concat(jB + nB), dB += "L ".concat(BB, ",").concat(jB, " Z")
      },
      EB = {
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
      iB = function(BB) {
        var jB = tB(tB({}, EB), BB),
          zB = (0, QB.useRef)(),
          nB = GB((0, QB.useState)(-1), 2),
          dB = nB[0],
          IB = nB[1];
        (0, QB.useEffect)((function() {
          if (zB.current && zB.current.getTotalLength) try {
            var BB = zB.current.getTotalLength();
            BB && IB(BB)
          } catch (jB) {}
        }), []);
        var NB = jB.x,
          uB = jB.y,
          UB = jB.upperWidth,
          aB = jB.lowerWidth,
          pB = jB.height,
          rB = jB.className,
          yB = jB.animationEasing,
          LB = jB.animationDuration,
          gB = jB.animationBegin,
          SB = jB.isUpdateAnimationActive;
        if (NB !== +NB || uB !== +uB || UB !== +UB || aB !== +aB || pB !== +pB || 0 === UB && 0 === aB || 0 === pB) return null;
        var iB = (0, sB.e)("recharts-trapezoid", rB);
        return SB ? QB.createElement(JB.c, {
          canBegin: dB > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: pB,
            x: NB,
            y: uB
          },
          to: {
            upperWidth: UB,
            lowerWidth: aB,
            height: pB,
            x: NB,
            y: uB
          },
          duration: LB,
          animationEasing: yB,
          isActive: SB
        }, (function(BB) {
          var nB = BB.upperWidth,
            IB = BB.lowerWidth,
            NB = BB.height,
            uB = BB.x,
            UB = BB.y;
          return QB.createElement(JB.c, {
            canBegin: dB > 0,
            from: "0px ".concat(-1 === dB ? 1 : dB, "px"),
            to: "".concat(dB, "px 0px"),
            attributeName: "strokeDasharray",
            Ds: gB,
            duration: LB,
            easing: yB
          }, QB.createElement("path", kB({}, (0, mB.c)(jB, !0), {
            className: iB,
            d: MB(uB, UB, nB, IB, NB),
            ref: zB
          })))
        })) : QB.createElement("g", null, QB.createElement("path", kB({}, (0, mB.c)(jB, !0), {
          className: iB,
          d: MB(NB, uB, UB, aB, pB)
        })))
      },
      qB = zB(6287),
      fB = zB(5975),
      oB = zB(6053),
      HB = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function DB(BB) {
      return DB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, DB(BB)
    }

    function FB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function YB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function VB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? YB(Object(zB), !0).forEach((function(jB) {
          hB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : YB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function hB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != DB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != DB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == DB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function XB(BB, jB) {
      return VB(VB({}, jB), BB)
    }

    function ZB(BB) {
      var jB = BB.shapeType,
        zB = BB.elementProps;
      switch (jB) {
        case "rectangle":
          return QB.createElement(rB.e, zB);
        case "trapezoid":
          return QB.createElement(iB, zB);
        case "sector":
          return QB.createElement(qB.e, zB);
        case "symbols":
          if (function(BB) {
              return "symbols" === BB
            }(jB)) return QB.createElement(oB.e, zB);
          break;
        default:
          return null
      }
    }

    function AB(BB) {
      var jB, zB = BB.option,
        nB = BB.shapeType,
        IB = BB.propTransformer,
        uB = void 0 === IB ? XB : IB,
        aB = BB.activeClassName,
        pB = void 0 === aB ? "recharts-active-shape" : aB,
        rB = BB.isActive,
        sB = FB(BB, HB);
      if ((0, QB.isValidElement)(zB)) jB = (0, QB.cloneElement)(zB, VB(VB({}, sB), function(BB) {
        return (0, QB.isValidElement)(BB) ? BB.props : BB
      }(zB)));
      else if (dB()(zB)) jB = zB(sB);
      else if (NB()(zB) && !UB()(zB)) {
        var JB = uB(zB, sB);
        jB = QB.createElement(ZB, {
          shapeType: nB,
          elementProps: JB
        })
      } else {
        var mB = sB;
        jB = QB.createElement(ZB, {
          shapeType: nB,
          elementProps: mB
        })
      }
      return rB ? QB.createElement(fB.e, {
        className: pB
      }, jB) : jB
    }

    function TB(BB, jB) {
      return null != jB && "trapezoids" in BB.props
    }

    function PB(BB, jB) {
      return null != jB && "sectors" in BB.props
    }

    function WB(BB, jB) {
      return null != jB && "points" in BB.props
    }

    function eB(BB, jB) {
      var zB, QB, nB = BB.x === (null === jB || void 0 === jB || null === (zB = jB.labelViewBox) || void 0 === zB ? void 0 : zB.x) || BB.x === jB.x,
        dB = BB.y === (null === jB || void 0 === jB || null === (QB = jB.labelViewBox) || void 0 === QB ? void 0 : QB.y) || BB.y === jB.y;
      return nB && dB
    }

    function lB(BB, jB) {
      var zB = BB.endAngle === jB.endAngle,
        QB = BB.startAngle === jB.startAngle;
      return zB && QB
    }

    function wB(BB, jB) {
      var zB = BB.x === jB.x,
        QB = BB.y === jB.y,
        nB = BB.z === jB.z;
      return zB && QB && nB
    }

    function xB(BB) {
      var jB = BB.activeTooltipItem,
        zB = BB.graphicalItem,
        QB = BB.itemData,
        nB = function(BB, jB) {
          var zB;
          return TB(BB, jB) ? zB = "trapezoids" : PB(BB, jB) ? zB = "sectors" : WB(BB, jB) && (zB = "points"), zB
        }(zB, jB),
        dB = function(BB, jB) {
          var zB, QB;
          return TB(BB, jB) ? null === (zB = jB.tooltipPayload) || void 0 === zB || null === (zB = zB[0]) || void 0 === zB || null === (zB = zB.payload) || void 0 === zB ? void 0 : zB.payload : PB(BB, jB) ? null === (QB = jB.tooltipPayload) || void 0 === QB || null === (QB = QB[0]) || void 0 === QB || null === (QB = QB.payload) || void 0 === QB ? void 0 : QB.payload : WB(BB, jB) ? jB.payload : {}
        }(zB, jB),
        IB = QB.filter((function(BB, QB) {
          var IB = pB()(dB, BB),
            NB = zB.props[nB].filter((function(BB) {
              var QB = function(BB, jB) {
                var zB;
                return TB(BB, jB) ? zB = eB : PB(BB, jB) ? zB = lB : WB(BB, jB) && (zB = wB), zB
              }(zB, jB);
              return QB(BB, jB)
            })),
            uB = zB.props[nB].indexOf(NB[NB.length - 1]);
          return IB && QB === uB
        }));
      return QB.indexOf(IB[IB.length - 1])
    }
  },
  6219: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => tB,
      f: () => kB,
      g: () => SB,
      h: () => LB,
      j: () => GB
    });
    var QB = zB(6226),
      nB = zB.n(QB),
      dB = zB(6235),
      IB = zB.n(dB),
      NB = zB(6121),
      uB = zB(5463),
      UB = zB(5229),
      aB = zB(6251);

    function pB(BB) {
      return pB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, pB(BB)
    }

    function rB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, yB(QB.key), QB)
      }
    }

    function sB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function JB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? sB(Object(zB), !0).forEach((function(jB) {
          mB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : sB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function mB(BB, jB, zB) {
      return (jB = yB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function yB(BB) {
      var jB = function(BB, jB) {
        if ("object" != pB(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != pB(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == pB(jB) ? jB : jB + ""
    }
    var kB = function(BB, jB, zB, QB, nB) {
        var dB = BB.width,
          IB = BB.height,
          pB = BB.layout,
          rB = BB.children,
          sB = Object.keys(jB),
          yB = {
            left: zB.left,
            leftMirror: zB.left,
            right: dB - zB.right,
            rightMirror: dB - zB.right,
            top: zB.top,
            topMirror: zB.top,
            bottom: IB - zB.bottom,
            bottomMirror: IB - zB.bottom
          },
          kB = !!(0, uB.k)(rB, aB.e);
        return sB.reduce((function(dB, IB) {
          var uB, aB, rB, sB, GB, LB = jB[IB],
            gB = LB.orientation,
            tB = LB.domain,
            SB = LB.padding,
            MB = void 0 === SB ? {} : SB,
            EB = LB.mirror,
            iB = LB.reversed,
            qB = "".concat(gB).concat(EB ? "Mirror" : "");
          if ("number" === LB.type && ("gap" === LB.padding || "no-gap" === LB.padding)) {
            var fB = tB[1] - tB[0],
              oB = 1 / 0,
              HB = LB.categoricalDomain.sort(UB.c);
            if (HB.forEach((function(BB, jB) {
                jB > 0 && (oB = Math.min((BB || 0) - (HB[jB - 1] || 0), oB))
              })), Number.isFinite(oB)) {
              var DB = oB / fB,
                FB = "vertical" === LB.layout ? zB.height : zB.width;
              if ("gap" === LB.padding && (uB = DB * FB / 2), "no-gap" === LB.padding) {
                var YB = (0, UB.m)(BB.barCategoryGap, DB * FB),
                  VB = DB * FB / 2;
                uB = VB - YB - (VB - YB) / FB * YB
              }
            }
          }
          aB = "xAxis" === QB ? [zB.left + (MB.left || 0) + (uB || 0), zB.left + zB.width - (MB.right || 0) - (uB || 0)] : "yAxis" === QB ? "horizontal" === pB ? [zB.top + zB.height - (MB.bottom || 0), zB.top + (MB.top || 0)] : [zB.top + (MB.top || 0) + (uB || 0), zB.top + zB.height - (MB.bottom || 0) - (uB || 0)] : LB.range, iB && (aB = [aB[1], aB[0]]);
          var hB = (0, NB.gb)(LB, nB, kB),
            XB = hB.scale,
            ZB = hB.realScaleType;
          XB.domain(tB).range(aB), (0, NB.j)(XB);
          var AB = (0, NB.T)(XB, JB(JB({}, LB), {}, {
            realScaleType: ZB
          }));
          "xAxis" === QB ? (GB = "top" === gB && !EB || "bottom" === gB && EB, rB = zB.left, sB = yB[qB] - GB * LB.height) : "yAxis" === QB && (GB = "left" === gB && !EB || "right" === gB && EB, rB = yB[qB] - GB * LB.width, sB = zB.top);
          var TB = JB(JB(JB({}, LB), AB), {}, {
            realScaleType: ZB,
            x: rB,
            y: sB,
            scale: XB,
            width: "xAxis" === QB ? zB.width : LB.width,
            height: "yAxis" === QB ? zB.height : LB.height
          });
          return TB.bandSize = (0, NB.n)(TB, AB), LB.hide || "xAxis" !== QB ? LB.hide || (yB[qB] += (GB ? -1 : 1) * TB.width) : yB[qB] += (GB ? -1 : 1) * TB.height, JB(JB({}, dB), {}, mB({}, IB, TB))
        }), {})
      },
      GB = function(BB, jB) {
        var zB = BB.x,
          QB = BB.y,
          nB = jB.x,
          dB = jB.y;
        return {
          x: Math.min(zB, nB),
          y: Math.min(QB, dB),
          width: Math.abs(nB - zB),
          height: Math.abs(dB - QB)
        }
      },
      LB = function(BB) {
        var jB = BB.x1,
          zB = BB.y1,
          QB = BB.x2,
          nB = BB.y2;
        return GB({
          x: jB,
          y: zB
        }, {
          x: QB,
          y: nB
        })
      },
      gB = function() {
        function BB(jB) {
          ! function(BB, jB) {
            if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
          }(this, BB), this.scale = jB
        }
        return jB = BB, zB = [{
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
            var jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              zB = jB.bandAware,
              QB = jB.position;
            if (void 0 !== BB) {
              if (QB) switch (QB) {
                case "start":
                default:
                  return this.scale(BB);
                case "middle":
                  var nB = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(BB) + nB;
                case "end":
                  var dB = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(BB) + dB
              }
              if (zB) {
                var IB = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(BB) + IB
              }
              return this.scale(BB)
            }
          }
        }, {
          key: "isInRange",
          value: function(BB) {
            var jB = this.range(),
              zB = jB[0],
              QB = jB[jB.length - 1];
            return zB <= QB ? BB >= zB && BB <= QB : BB >= QB && BB <= zB
          }
        }], QB = [{
          key: "create",
          value: function(jB) {
            return new BB(jB)
          }
        }], zB && rB(jB.prototype, zB), QB && rB(jB, QB), Object.defineProperty(jB, "prototype", {
          writable: !1
        }), jB;
        var jB, zB, QB
      }();
    mB(gB, "EPS", 1e-4);
    var tB = function(BB) {
      var jB = Object.keys(BB).reduce((function(jB, zB) {
        return JB(JB({}, jB), {}, mB({}, zB, gB.create(BB[zB])))
      }), {});
      return JB(JB({}, jB), {}, {
        apply: function(BB) {
          var zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            QB = zB.bandAware,
            dB = zB.position;
          return nB()(BB, (function(BB, zB) {
            return jB[zB].apply(BB, {
              bandAware: QB,
              position: dB
            })
          }))
        },
        isInRange: function(BB) {
          return IB()(BB, (function(BB, zB) {
            return jB[zB].isInRange(BB)
          }))
        }
      })
    };
    var SB = function(BB) {
      var jB = BB.width,
        zB = BB.height,
        QB = function(BB) {
          return (BB % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        nB = QB * Math.PI / 180,
        dB = Math.atan(zB / jB),
        IB = nB > dB && nB < Math.PI - dB ? zB / Math.sin(nB) : jB / Math.cos(nB);
      return Math.abs(IB)
    }
  },
  6121: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => ZI,
      f: () => YI,
      j: () => cI,
      l: () => xI,
      m: () => bI,
      n: () => aN,
      r: () => XI,
      u: () => hI,
      y: () => nN,
      z: () => QN,
      A: () => zN,
      E: () => eI,
      F: () => FI,
      H: () => PI,
      I: () => IN,
      L: () => VI,
      M: () => BN,
      Q: () => dN,
      R: () => lI,
      T: () => jN,
      U: () => rN,
      Y: () => DI,
      Z: () => WI,
      bb: () => pN,
      cb: () => TI,
      gb: () => KI,
      hb: () => UN,
      kb: () => vI
    });
    var QB = {};
    zB.r(QB), zB.d(QB, {
      scaleBand: () => nB.d,
      scaleDiverging: () => rd,
      scaleDivergingLog: () => sd,
      scaleDivergingPow: () => md,
      scaleDivergingSqrt: () => yd,
      scaleDivergingSymlog: () => Jd,
      scaleIdentity: () => cj,
      scaleImplicit: () => Uz.g,
      scaleLinear: () => Cj,
      scaleLog: () => nz,
      scaleOrdinal: () => Uz.e,
      scalePoint: () => nB.f,
      scalePow: () => Jz,
      scaleQuantile: () => qz,
      scaleQuantize: () => fz,
      scaleRadial: () => kz,
      scaleSequential: () => nd,
      scaleSequentialLog: () => dd,
      scaleSequentialPow: () => Nd,
      scaleSequentialQuantile: () => Ud,
      scaleSequentialSqrt: () => ud,
      scaleSequentialSymlog: () => Id,
      scaleSqrt: () => mz,
      scaleSymlog: () => uz,
      scaleThreshold: () => oz,
      scaleTime: () => Bd,
      scaleUtc: () => jd,
      tickFormat: () => xj
    });
    var nB = zB(6123);
    const dB = Math.sqrt(50),
      IB = Math.sqrt(10),
      NB = Math.sqrt(2);

    function uB(BB, jB, zB) {
      const QB = (jB - BB) / Math.max(0, zB),
        nB = Math.floor(Math.log10(QB)),
        UB = QB / Math.pow(10, nB),
        aB = UB >= dB ? 10 : UB >= IB ? 5 : UB >= NB ? 2 : 1;
      let pB, rB, sB;
      return nB < 0 ? (sB = Math.pow(10, -nB) / aB, pB = Math.round(BB * sB), rB = Math.round(jB * sB), pB / sB < BB && ++pB, rB / sB > jB && --rB, sB = -sB) : (sB = Math.pow(10, nB) * aB, pB = Math.round(BB / sB), rB = Math.round(jB / sB), pB * sB < BB && ++pB, rB * sB > jB && --rB), rB < pB && .5 <= zB && zB < 2 ? uB(BB, jB, 2 * zB) : [pB, rB, sB]
    }

    function UB(BB, jB, zB) {
      if (!((zB = +zB) > 0)) return [];
      if ((BB = +BB) === (jB = +jB)) return [BB];
      const QB = jB < BB,
        [nB, dB, IB] = QB ? uB(jB, BB, zB) : uB(BB, jB, zB);
      if (!(dB >= nB)) return [];
      const NB = dB - nB + 1,
        UB = new Array(NB);
      if (QB)
        if (IB < 0)
          for (let uB = 0; uB < NB; ++uB) UB[uB] = (dB - uB) / -IB;
        else
          for (let uB = 0; uB < NB; ++uB) UB[uB] = (dB - uB) * IB;
      else if (IB < 0)
        for (let uB = 0; uB < NB; ++uB) UB[uB] = (nB + uB) / -IB;
      else
        for (let uB = 0; uB < NB; ++uB) UB[uB] = (nB + uB) * IB;
      return UB
    }

    function aB(BB, jB, zB) {
      return uB(BB = +BB, jB = +jB, zB = +zB)[2]
    }

    function pB(BB, jB, zB) {
      zB = +zB;
      const QB = (jB = +jB) < (BB = +BB),
        nB = QB ? aB(jB, BB, zB) : aB(BB, jB, zB);
      return (QB ? -1 : 1) * (nB < 0 ? 1 / -nB : nB)
    }

    function rB(BB, jB) {
      return null == BB || null == jB ? NaN : BB < jB ? -1 : BB > jB ? 1 : BB >= jB ? 0 : NaN
    }

    function sB(BB, jB) {
      return null == BB || null == jB ? NaN : jB < BB ? -1 : jB > BB ? 1 : jB >= BB ? 0 : NaN
    }

    function JB(BB) {
      let jB, zB, QB;

      function nB(BB, QB) {
        let nB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          dB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
        if (nB < dB) {
          if (0 !== jB(QB, QB)) return dB;
          do {
            const jB = nB + dB >>> 1;
            zB(BB[jB], QB) < 0 ? nB = jB + 1 : dB = jB
          } while (nB < dB)
        }
        return nB
      }
      return 2 !== BB.length ? (jB = rB, zB = (jB, zB) => rB(BB(jB), zB), QB = (jB, zB) => BB(jB) - zB) : (jB = BB === rB || BB === sB ? BB : mB, zB = BB, QB = BB), {
        left: nB,
        center: function(BB, jB) {
          let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const dB = nB(BB, jB, zB, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length) - 1);
          return dB > zB && QB(BB[dB - 1], jB) > -QB(BB[dB], jB) ? dB - 1 : dB
        },
        right: function(BB, QB) {
          let nB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            dB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          if (nB < dB) {
            if (0 !== jB(QB, QB)) return dB;
            do {
              const jB = nB + dB >>> 1;
              zB(BB[jB], QB) <= 0 ? nB = jB + 1 : dB = jB
            } while (nB < dB)
          }
          return nB
        }
      }
    }

    function mB() {
      return 0
    }

    function yB(BB) {
      return null === BB ? NaN : +BB
    }
    const kB = JB(rB),
      GB = kB.right,
      LB = (kB.left, JB(yB).center, GB);

    function gB(BB, jB, zB) {
      BB.prototype = jB.prototype = zB, zB.constructor = BB
    }

    function tB(BB, jB) {
      var zB = Object.create(BB.prototype);
      for (var QB in jB) zB[QB] = jB[QB];
      return zB
    }

    function SB() {}
    var MB = .7,
      EB = 1 / MB,
      iB = "\\s*([+-]?\\d+)\\s*",
      qB = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      fB = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      oB = /^#([0-9a-f]{3,8})$/,
      HB = new RegExp(`^rgb\\(${iB},${iB},${iB}\\)$`),
      DB = new RegExp(`^rgb\\(${fB},${fB},${fB}\\)$`),
      FB = new RegExp(`^rgba\\(${iB},${iB},${iB},${qB}\\)$`),
      YB = new RegExp(`^rgba\\(${fB},${fB},${fB},${qB}\\)$`),
      VB = new RegExp(`^hsl\\(${qB},${fB},${fB}\\)$`),
      hB = new RegExp(`^hsla\\(${qB},${fB},${fB},${qB}\\)$`),
      XB = {
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

    function ZB() {
      return this.rgb().formatHex()
    }

    function AB() {
      return this.rgb().formatRgb()
    }

    function TB(BB) {
      var jB, zB;
      return BB = (BB + "").trim().toLowerCase(), (jB = oB.exec(BB)) ? (zB = jB[1].length, jB = parseInt(jB[1], 16), 6 === zB ? PB(jB) : 3 === zB ? new lB(jB >> 8 & 15 | jB >> 4 & 240, jB >> 4 & 15 | 240 & jB, (15 & jB) << 4 | 15 & jB, 1) : 8 === zB ? WB(jB >> 24 & 255, jB >> 16 & 255, jB >> 8 & 255, (255 & jB) / 255) : 4 === zB ? WB(jB >> 12 & 15 | jB >> 8 & 240, jB >> 8 & 15 | jB >> 4 & 240, jB >> 4 & 15 | 240 & jB, ((15 & jB) << 4 | 15 & jB) / 255) : null) : (jB = HB.exec(BB)) ? new lB(jB[1], jB[2], jB[3], 1) : (jB = DB.exec(BB)) ? new lB(255 * jB[1] / 100, 255 * jB[2] / 100, 255 * jB[3] / 100, 1) : (jB = FB.exec(BB)) ? WB(jB[1], jB[2], jB[3], jB[4]) : (jB = YB.exec(BB)) ? WB(255 * jB[1] / 100, 255 * jB[2] / 100, 255 * jB[3] / 100, jB[4]) : (jB = VB.exec(BB)) ? bB(jB[1], jB[2] / 100, jB[3] / 100, 1) : (jB = hB.exec(BB)) ? bB(jB[1], jB[2] / 100, jB[3] / 100, jB[4]) : XB.hasOwnProperty(BB) ? PB(XB[BB]) : "transparent" === BB ? new lB(NaN, NaN, NaN, 0) : null
    }

    function PB(BB) {
      return new lB(BB >> 16 & 255, BB >> 8 & 255, 255 & BB, 1)
    }

    function WB(BB, jB, zB, QB) {
      return QB <= 0 && (BB = jB = zB = NaN), new lB(BB, jB, zB, QB)
    }

    function eB(BB, jB, zB, QB) {
      return 1 === arguments.length ? ((nB = BB) instanceof SB || (nB = TB(nB)), nB ? new lB((nB = nB.rgb()).r, nB.g, nB.b, nB.opacity) : new lB) : new lB(BB, jB, zB, null == QB ? 1 : QB);
      var nB
    }

    function lB(BB, jB, zB, QB) {
      this.r = +BB, this.g = +jB, this.b = +zB, this.opacity = +QB
    }

    function wB() {
      return `#${cB(this.r)}${cB(this.g)}${cB(this.b)}`
    }

    function xB() {
      const BB = KB(this.opacity);
      return `${1===BB?"rgb(":"rgba("}${CB(this.r)}, ${CB(this.g)}, ${CB(this.b)}${1===BB?")":`, ${BB})`}`
    }

    function KB(BB) {
      return isNaN(BB) ? 1 : Math.max(0, Math.min(1, BB))
    }

    function CB(BB) {
      return Math.max(0, Math.min(255, Math.round(BB) || 0))
    }

    function cB(BB) {
      return ((BB = CB(BB)) < 16 ? "0" : "") + BB.toString(16)
    }

    function bB(BB, jB, zB, QB) {
      return QB <= 0 ? BB = jB = zB = NaN : zB <= 0 || zB >= 1 ? BB = jB = NaN : jB <= 0 && (BB = NaN), new RB(BB, jB, zB, QB)
    }

    function vB(BB) {
      if (BB instanceof RB) return new RB(BB.h, BB.s, BB.l, BB.opacity);
      if (BB instanceof SB || (BB = TB(BB)), !BB) return new RB;
      if (BB instanceof RB) return BB;
      var jB = (BB = BB.rgb()).r / 255,
        zB = BB.g / 255,
        QB = BB.b / 255,
        nB = Math.min(jB, zB, QB),
        dB = Math.max(jB, zB, QB),
        IB = NaN,
        NB = dB - nB,
        uB = (dB + nB) / 2;
      return NB ? (IB = jB === dB ? (zB - QB) / NB + 6 * (zB < QB) : zB === dB ? (QB - jB) / NB + 2 : (jB - zB) / NB + 4, NB /= uB < .5 ? dB + nB : 2 - dB - nB, IB *= 60) : NB = uB > 0 && uB < 1 ? 0 : IB, new RB(IB, NB, uB, BB.opacity)
    }

    function RB(BB, jB, zB, QB) {
      this.h = +BB, this.s = +jB, this.l = +zB, this.opacity = +QB
    }

    function OB(BB) {
      return (BB = (BB || 0) % 360) < 0 ? BB + 360 : BB
    }

    function Bj(BB) {
      return Math.max(0, Math.min(1, BB || 0))
    }

    function jj(BB, jB, zB) {
      return 255 * (BB < 60 ? jB + (zB - jB) * BB / 60 : BB < 180 ? zB : BB < 240 ? jB + (zB - jB) * (240 - BB) / 60 : jB)
    }

    function zj(BB, jB, zB, QB, nB) {
      var dB = BB * BB,
        IB = dB * BB;
      return ((1 - 3 * BB + 3 * dB - IB) * jB + (4 - 6 * dB + 3 * IB) * zB + (1 + 3 * BB + 3 * dB - 3 * IB) * QB + IB * nB) / 6
    }
    gB(SB, TB, {
      copy(BB) {
        return Object.assign(new this.constructor, this, BB)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: ZB,
      formatHex: ZB,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return vB(this).formatHsl()
      },
      formatRgb: AB,
      toString: AB
    }), gB(lB, eB, tB(SB, {
      brighter(BB) {
        return BB = null == BB ? EB : Math.pow(EB, BB), new lB(this.r * BB, this.g * BB, this.b * BB, this.opacity)
      },
      darker(BB) {
        return BB = null == BB ? MB : Math.pow(MB, BB), new lB(this.r * BB, this.g * BB, this.b * BB, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new lB(CB(this.r), CB(this.g), CB(this.b), KB(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: wB,
      formatHex: wB,
      formatHex8: function() {
        return `#${cB(this.r)}${cB(this.g)}${cB(this.b)}${cB(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: xB,
      toString: xB
    })), gB(RB, (function(BB, jB, zB, QB) {
      return 1 === arguments.length ? vB(BB) : new RB(BB, jB, zB, null == QB ? 1 : QB)
    }), tB(SB, {
      brighter(BB) {
        return BB = null == BB ? EB : Math.pow(EB, BB), new RB(this.h, this.s, this.l * BB, this.opacity)
      },
      darker(BB) {
        return BB = null == BB ? MB : Math.pow(MB, BB), new RB(this.h, this.s, this.l * BB, this.opacity)
      },
      rgb() {
        var BB = this.h % 360 + 360 * (this.h < 0),
          jB = isNaN(BB) || isNaN(this.s) ? 0 : this.s,
          zB = this.l,
          QB = zB + (zB < .5 ? zB : 1 - zB) * jB,
          nB = 2 * zB - QB;
        return new lB(jj(BB >= 240 ? BB - 240 : BB + 120, nB, QB), jj(BB, nB, QB), jj(BB < 120 ? BB + 240 : BB - 120, nB, QB), this.opacity)
      },
      clamp() {
        return new RB(OB(this.h), Bj(this.s), Bj(this.l), KB(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const BB = KB(this.opacity);
        return `${1===BB?"hsl(":"hsla("}${OB(this.h)}, ${100*Bj(this.s)}%, ${100*Bj(this.l)}%${1===BB?")":`, ${BB})`}`
      }
    }));
    const Qj = BB => () => BB;

    function nj(BB, jB) {
      return function(zB) {
        return BB + zB * jB
      }
    }

    function dj(BB) {
      return 1 === (BB = +BB) ? Ij : function(jB, zB) {
        return zB - jB ? function(BB, jB, zB) {
          return BB = Math.pow(BB, zB), jB = Math.pow(jB, zB) - BB, zB = 1 / zB,
            function(QB) {
              return Math.pow(BB + QB * jB, zB)
            }
        }(jB, zB, BB) : Qj(isNaN(jB) ? zB : jB)
      }
    }

    function Ij(BB, jB) {
      var zB = jB - BB;
      return zB ? nj(BB, zB) : Qj(isNaN(BB) ? jB : BB)
    }
    const Nj = function BB(jB) {
      var zB = dj(jB);

      function QB(BB, jB) {
        var QB = zB((BB = eB(BB)).r, (jB = eB(jB)).r),
          nB = zB(BB.g, jB.g),
          dB = zB(BB.b, jB.b),
          IB = Ij(BB.opacity, jB.opacity);
        return function(jB) {
          return BB.r = QB(jB), BB.g = nB(jB), BB.b = dB(jB), BB.opacity = IB(jB), BB + ""
        }
      }
      return QB.gamma = BB, QB
    }(1);

    function uj(BB) {
      return function(jB) {
        var zB, QB, nB = jB.length,
          dB = new Array(nB),
          IB = new Array(nB),
          NB = new Array(nB);
        for (zB = 0; zB < nB; ++zB) QB = eB(jB[zB]), dB[zB] = QB.r || 0, IB[zB] = QB.g || 0, NB[zB] = QB.b || 0;
        return dB = BB(dB), IB = BB(IB), NB = BB(NB), QB.opacity = 1,
          function(BB) {
            return QB.r = dB(BB), QB.g = IB(BB), QB.b = NB(BB), QB + ""
          }
      }
    }
    uj((function(BB) {
      var jB = BB.length - 1;
      return function(zB) {
        var QB = zB <= 0 ? zB = 0 : zB >= 1 ? (zB = 1, jB - 1) : Math.floor(zB * jB),
          nB = BB[QB],
          dB = BB[QB + 1],
          IB = QB > 0 ? BB[QB - 1] : 2 * nB - dB,
          NB = QB < jB - 1 ? BB[QB + 2] : 2 * dB - nB;
        return zj((zB - QB / jB) * jB, IB, nB, dB, NB)
      }
    })), uj((function(BB) {
      var jB = BB.length;
      return function(zB) {
        var QB = Math.floor(((zB %= 1) < 0 ? ++zB : zB) * jB),
          nB = BB[(QB + jB - 1) % jB],
          dB = BB[QB % jB],
          IB = BB[(QB + 1) % jB],
          NB = BB[(QB + 2) % jB];
        return zj((zB - QB / jB) * jB, nB, dB, IB, NB)
      }
    }));

    function Uj(BB, jB) {
      var zB, QB = jB ? jB.length : 0,
        nB = BB ? Math.min(QB, BB.length) : 0,
        dB = new Array(nB),
        IB = new Array(QB);
      for (zB = 0; zB < nB; ++zB) dB[zB] = kj(BB[zB], jB[zB]);
      for (; zB < QB; ++zB) IB[zB] = jB[zB];
      return function(BB) {
        for (zB = 0; zB < nB; ++zB) IB[zB] = dB[zB](BB);
        return IB
      }
    }

    function aj(BB, jB) {
      var zB = new Date;
      return BB = +BB, jB = +jB,
        function(QB) {
          return zB.setTime(BB * (1 - QB) + jB * QB), zB
        }
    }

    function pj(BB, jB) {
      return BB = +BB, jB = +jB,
        function(zB) {
          return BB * (1 - zB) + jB * zB
        }
    }

    function rj(BB, jB) {
      var zB, QB = {},
        nB = {};
      for (zB in null !== BB && "object" === typeof BB || (BB = {}), null !== jB && "object" === typeof jB || (jB = {}), jB) zB in BB ? QB[zB] = kj(BB[zB], jB[zB]) : nB[zB] = jB[zB];
      return function(BB) {
        for (zB in QB) nB[zB] = QB[zB](BB);
        return nB
      }
    }
    var sj = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Jj = new RegExp(sj.source, "g");

    function mj(BB, jB) {
      var zB, QB, nB, dB = sj.lastIndex = Jj.lastIndex = 0,
        IB = -1,
        NB = [],
        uB = [];
      for (BB += "", jB += "";
        (zB = sj.exec(BB)) && (QB = Jj.exec(jB));)(nB = QB.index) > dB && (nB = jB.slice(dB, nB), NB[IB] ? NB[IB] += nB : NB[++IB] = nB), (zB = zB[0]) === (QB = QB[0]) ? NB[IB] ? NB[IB] += QB : NB[++IB] = QB : (NB[++IB] = null, uB.push({
        i: IB,
        x: pj(zB, QB)
      })), dB = Jj.lastIndex;
      return dB < jB.length && (nB = jB.slice(dB), NB[IB] ? NB[IB] += nB : NB[++IB] = nB), NB.length < 2 ? uB[0] ? function(BB) {
        return function(jB) {
          return BB(jB) + ""
        }
      }(uB[0].x) : function(BB) {
        return function() {
          return BB
        }
      }(jB) : (jB = uB.length, function(BB) {
        for (var zB, QB = 0; QB < jB; ++QB) NB[(zB = uB[QB]).i] = zB.x(BB);
        return NB.join("")
      })
    }

    function yj(BB, jB) {
      jB || (jB = []);
      var zB, QB = BB ? Math.min(jB.length, BB.length) : 0,
        nB = jB.slice();
      return function(dB) {
        for (zB = 0; zB < QB; ++zB) nB[zB] = BB[zB] * (1 - dB) + jB[zB] * dB;
        return nB
      }
    }

    function kj(BB, jB) {
      var zB, QB, nB = typeof jB;
      return null == jB || "boolean" === nB ? Qj(jB) : ("number" === nB ? pj : "string" === nB ? (zB = TB(jB)) ? (jB = zB, Nj) : mj : jB instanceof TB ? Nj : jB instanceof Date ? aj : (QB = jB, !ArrayBuffer.isView(QB) || QB instanceof DataView ? Array.isArray(jB) ? Uj : "function" !== typeof jB.valueOf && "function" !== typeof jB.toString || isNaN(jB) ? rj : pj : yj))(BB, jB)
    }

    function Gj(BB, jB) {
      return BB = +BB, jB = +jB,
        function(zB) {
          return Math.round(BB * (1 - zB) + jB * zB)
        }
    }

    function Lj(BB) {
      return +BB
    }
    var gj = [0, 1];

    function tj(BB) {
      return BB
    }

    function Sj(BB, jB) {
      return (jB -= BB = +BB) ? function(zB) {
        return (zB - BB) / jB
      } : (zB = isNaN(jB) ? NaN : .5, function() {
        return zB
      });
      var zB
    }

    function Mj(BB, jB, zB) {
      var QB = BB[0],
        nB = BB[1],
        dB = jB[0],
        IB = jB[1];
      return nB < QB ? (QB = Sj(nB, QB), dB = zB(IB, dB)) : (QB = Sj(QB, nB), dB = zB(dB, IB)),
        function(BB) {
          return dB(QB(BB))
        }
    }

    function Ej(BB, jB, zB) {
      var QB = Math.min(BB.length, jB.length) - 1,
        nB = new Array(QB),
        dB = new Array(QB),
        IB = -1;
      for (BB[QB] < BB[0] && (BB = BB.slice().reverse(), jB = jB.slice().reverse()); ++IB < QB;) nB[IB] = Sj(BB[IB], BB[IB + 1]), dB[IB] = zB(jB[IB], jB[IB + 1]);
      return function(jB) {
        var zB = LB(BB, jB, 1, QB) - 1;
        return dB[zB](nB[zB](jB))
      }
    }

    function ij(BB, jB) {
      return jB.domain(BB.domain()).range(BB.range()).interpolate(BB.interpolate()).clamp(BB.clamp()).unknown(BB.unknown())
    }

    function qj() {
      var BB, jB, zB, QB, nB, dB, IB = gj,
        NB = gj,
        uB = kj,
        UB = tj;

      function aB() {
        var BB = Math.min(IB.length, NB.length);
        return UB !== tj && (UB = function(BB, jB) {
          var zB;
          return BB > jB && (zB = BB, BB = jB, jB = zB),
            function(zB) {
              return Math.max(BB, Math.min(jB, zB))
            }
        }(IB[0], IB[BB - 1])), QB = BB > 2 ? Ej : Mj, nB = dB = null, pB
      }

      function pB(jB) {
        return null == jB || isNaN(jB = +jB) ? zB : (nB || (nB = QB(IB.map(BB), NB, uB)))(BB(UB(jB)))
      }
      return pB.invert = function(zB) {
          return UB(jB((dB || (dB = QB(NB, IB.map(BB), pj)))(zB)))
        }, pB.domain = function(BB) {
          return arguments.length ? (IB = Array.from(BB, Lj), aB()) : IB.slice()
        }, pB.range = function(BB) {
          return arguments.length ? (NB = Array.from(BB), aB()) : NB.slice()
        }, pB.rangeRound = function(BB) {
          return NB = Array.from(BB), uB = Gj, aB()
        }, pB.clamp = function(BB) {
          return arguments.length ? (UB = !!BB || tj, aB()) : UB !== tj
        }, pB.interpolate = function(BB) {
          return arguments.length ? (uB = BB, aB()) : uB
        }, pB.unknown = function(BB) {
          return arguments.length ? (zB = BB, pB) : zB
        },
        function(zB, QB) {
          return BB = zB, jB = QB, aB()
        }
    }

    function fj() {
      return qj()(tj, tj)
    }
    var oj, Hj = zB(6132),
      Dj = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Fj(BB) {
      if (!(jB = Dj.exec(BB))) throw new Error("invalid format: " + BB);
      var jB;
      return new Yj({
        fill: jB[1],
        align: jB[2],
        sign: jB[3],
        symbol: jB[4],
        zero: jB[5],
        width: jB[6],
        comma: jB[7],
        precision: jB[8] && jB[8].slice(1),
        trim: jB[9],
        type: jB[10]
      })
    }

    function Yj(BB) {
      this.fill = void 0 === BB.fill ? " " : BB.fill + "", this.align = void 0 === BB.align ? ">" : BB.align + "", this.sign = void 0 === BB.sign ? "-" : BB.sign + "", this.symbol = void 0 === BB.symbol ? "" : BB.symbol + "", this.zero = !!BB.zero, this.width = void 0 === BB.width ? void 0 : +BB.width, this.comma = !!BB.comma, this.precision = void 0 === BB.precision ? void 0 : +BB.precision, this.trim = !!BB.trim, this.type = void 0 === BB.type ? "" : BB.type + ""
    }

    function Vj(BB, jB) {
      if (!isFinite(BB) || 0 === BB) return null;
      var zB = (BB = jB ? BB.toExponential(jB - 1) : BB.toExponential()).indexOf("e"),
        QB = BB.slice(0, zB);
      return [QB.length > 1 ? QB[0] + QB.slice(2) : QB, +BB.slice(zB + 1)]
    }

    function hj(BB) {
      return (BB = Vj(Math.abs(BB))) ? BB[1] : NaN
    }

    function Xj(BB, jB) {
      var zB = Vj(BB, jB);
      if (!zB) return BB + "";
      var QB = zB[0],
        nB = zB[1];
      return nB < 0 ? "0." + new Array(-nB).join("0") + QB : QB.length > nB + 1 ? QB.slice(0, nB + 1) + "." + QB.slice(nB + 1) : QB + new Array(nB - QB.length + 2).join("0")
    }
    Fj.prototype = Yj.prototype, Yj.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const Zj = {
      "%": (BB, jB) => (100 * BB).toFixed(jB),
      b: BB => Math.round(BB).toString(2),
      c: BB => BB + "",
      d: function(BB) {
        return Math.abs(BB = Math.round(BB)) >= 1e21 ? BB.toLocaleString("en").replace(/,/g, "") : BB.toString(10)
      },
      e: (BB, jB) => BB.toExponential(jB),
      f: (BB, jB) => BB.toFixed(jB),
      g: (BB, jB) => BB.toPrecision(jB),
      o: BB => Math.round(BB).toString(8),
      p: (BB, jB) => Xj(100 * BB, jB),
      r: Xj,
      s: function(BB, jB) {
        var zB = Vj(BB, jB);
        if (!zB) return oj = void 0, BB.toPrecision(jB);
        var QB = zB[0],
          nB = zB[1],
          dB = nB - (oj = 3 * Math.max(-8, Math.min(8, Math.floor(nB / 3)))) + 1,
          IB = QB.length;
        return dB === IB ? QB : dB > IB ? QB + new Array(dB - IB + 1).join("0") : dB > 0 ? QB.slice(0, dB) + "." + QB.slice(dB) : "0." + new Array(1 - dB).join("0") + Vj(BB, Math.max(0, jB + dB - 1))[0]
      },
      X: BB => Math.round(BB).toString(16).toUpperCase(),
      x: BB => Math.round(BB).toString(16)
    };

    function Aj(BB) {
      return BB
    }
    var Tj, Pj, Wj, ej = Array.prototype.map,
      lj = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function wj(BB) {
      var jB, zB, QB = void 0 === BB.grouping || void 0 === BB.thousands ? Aj : (jB = ej.call(BB.grouping, Number), zB = BB.thousands + "", function(BB, QB) {
          for (var nB = BB.length, dB = [], IB = 0, NB = jB[0], uB = 0; nB > 0 && NB > 0 && (uB + NB + 1 > QB && (NB = Math.max(1, QB - uB)), dB.push(BB.substring(nB -= NB, nB + NB)), !((uB += NB + 1) > QB));) NB = jB[IB = (IB + 1) % jB.length];
          return dB.reverse().join(zB)
        }),
        nB = void 0 === BB.currency ? "" : BB.currency[0] + "",
        dB = void 0 === BB.currency ? "" : BB.currency[1] + "",
        IB = void 0 === BB.decimal ? "." : BB.decimal + "",
        NB = void 0 === BB.numerals ? Aj : function(BB) {
          return function(jB) {
            return jB.replace(/[0-9]/g, (function(jB) {
              return BB[+jB]
            }))
          }
        }(ej.call(BB.numerals, String)),
        uB = void 0 === BB.percent ? "%" : BB.percent + "",
        UB = void 0 === BB.minus ? "\u2212" : BB.minus + "",
        aB = void 0 === BB.nan ? "NaN" : BB.nan + "";

      function pB(BB, jB) {
        var zB = (BB = Fj(BB)).fill,
          pB = BB.align,
          rB = BB.sign,
          sB = BB.symbol,
          JB = BB.zero,
          mB = BB.width,
          yB = BB.comma,
          kB = BB.precision,
          GB = BB.trim,
          LB = BB.type;
        "n" === LB ? (yB = !0, LB = "g") : Zj[LB] || (void 0 === kB && (kB = 12), GB = !0, LB = "g"), (JB || "0" === zB && "=" === pB) && (JB = !0, zB = "0", pB = "=");
        var gB = (jB && void 0 !== jB.prefix ? jB.prefix : "") + ("$" === sB ? nB : "#" === sB && /[boxX]/.test(LB) ? "0" + LB.toLowerCase() : ""),
          tB = ("$" === sB ? dB : /[%p]/.test(LB) ? uB : "") + (jB && void 0 !== jB.suffix ? jB.suffix : ""),
          SB = Zj[LB],
          MB = /[defgprs%]/.test(LB);

        function EB(BB) {
          var jB, nB, dB, uB = gB,
            sB = tB;
          if ("c" === LB) sB = SB(BB) + sB, BB = "";
          else {
            var EB = (BB = +BB) < 0 || 1 / BB < 0;
            if (BB = isNaN(BB) ? aB : SB(Math.abs(BB), kB), GB && (BB = function(BB) {
                BB: for (var jB, zB = BB.length, QB = 1, nB = -1; QB < zB; ++QB) switch (BB[QB]) {
                  case ".":
                    nB = jB = QB;
                    break;
                  case "0":
                    0 === nB && (nB = QB), jB = QB;
                    break;
                  default:
                    if (!+BB[QB]) break BB;
                    nB > 0 && (nB = 0)
                }
                return nB > 0 ? BB.slice(0, nB) + BB.slice(jB + 1) : BB
              }(BB)), EB && 0 === +BB && "+" !== rB && (EB = !1), uB = (EB ? "(" === rB ? rB : UB : "-" === rB || "(" === rB ? "" : rB) + uB, sB = ("s" !== LB || isNaN(BB) || void 0 === oj ? "" : lj[8 + oj / 3]) + sB + (EB && "(" === rB ? ")" : ""), MB)
              for (jB = -1, nB = BB.length; ++jB < nB;)
                if (48 > (dB = BB.charCodeAt(jB)) || dB > 57) {
                  sB = (46 === dB ? IB + BB.slice(jB + 1) : BB.slice(jB)) + sB, BB = BB.slice(0, jB);
                  break
                }
          }
          yB && !JB && (BB = QB(BB, 1 / 0));
          var iB = uB.length + BB.length + sB.length,
            qB = iB < mB ? new Array(mB - iB + 1).join(zB) : "";
          switch (yB && JB && (BB = QB(qB + BB, qB.length ? mB - sB.length : 1 / 0), qB = ""), pB) {
            case "<":
              BB = uB + BB + sB + qB;
              break;
            case "=":
              BB = uB + qB + BB + sB;
              break;
            case "^":
              BB = qB.slice(0, iB = qB.length >> 1) + uB + BB + sB + qB.slice(iB);
              break;
            default:
              BB = qB + uB + BB + sB
          }
          return NB(BB)
        }
        return kB = void 0 === kB ? 6 : /[gprs]/.test(LB) ? Math.max(1, Math.min(21, kB)) : Math.max(0, Math.min(20, kB)), EB.toString = function() {
          return BB + ""
        }, EB
      }
      return {
        format: pB,
        formatPrefix: function(BB, jB) {
          var zB = 3 * Math.max(-8, Math.min(8, Math.floor(hj(jB) / 3))),
            QB = Math.pow(10, -zB),
            nB = pB(((BB = Fj(BB)).type = "f", BB), {
              suffix: lj[8 + zB / 3]
            });
          return function(BB) {
            return nB(QB * BB)
          }
        }
      }
    }

    function xj(BB, jB, zB, QB) {
      var nB, dB = pB(BB, jB, zB);
      switch ((QB = Fj(null == QB ? ",f" : QB)).type) {
        case "s":
          var IB = Math.max(Math.abs(BB), Math.abs(jB));
          return null != QB.precision || isNaN(nB = function(BB, jB) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(hj(jB) / 3))) - hj(Math.abs(BB)))
          }(dB, IB)) || (QB.precision = nB), Wj(QB, IB);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != QB.precision || isNaN(nB = function(BB, jB) {
            return BB = Math.abs(BB), jB = Math.abs(jB) - BB, Math.max(0, hj(jB) - hj(BB)) + 1
          }(dB, Math.max(Math.abs(BB), Math.abs(jB)))) || (QB.precision = nB - ("e" === QB.type));
          break;
        case "f":
        case "%":
          null != QB.precision || isNaN(nB = function(BB) {
            return Math.max(0, -hj(Math.abs(BB)))
          }(dB)) || (QB.precision = nB - 2 * ("%" === QB.type))
      }
      return Pj(QB)
    }

    function Kj(BB) {
      var jB = BB.domain;
      return BB.ticks = function(BB) {
        var zB = jB();
        return UB(zB[0], zB[zB.length - 1], null == BB ? 10 : BB)
      }, BB.tickFormat = function(BB, zB) {
        var QB = jB();
        return xj(QB[0], QB[QB.length - 1], null == BB ? 10 : BB, zB)
      }, BB.nice = function(zB) {
        null == zB && (zB = 10);
        var QB, nB, dB = jB(),
          IB = 0,
          NB = dB.length - 1,
          uB = dB[IB],
          UB = dB[NB],
          pB = 10;
        for (UB < uB && (nB = uB, uB = UB, UB = nB, nB = IB, IB = NB, NB = nB); pB-- > 0;) {
          if ((nB = aB(uB, UB, zB)) === QB) return dB[IB] = uB, dB[NB] = UB, jB(dB);
          if (nB > 0) uB = Math.floor(uB / nB) * nB, UB = Math.ceil(UB / nB) * nB;
          else {
            if (!(nB < 0)) break;
            uB = Math.ceil(uB * nB) / nB, UB = Math.floor(UB * nB) / nB
          }
          QB = nB
        }
        return BB
      }, BB
    }

    function Cj() {
      var BB = fj();
      return BB.copy = function() {
        return ij(BB, Cj())
      }, Hj.f.apply(BB, arguments), Kj(BB)
    }

    function cj(BB) {
      var jB;

      function zB(BB) {
        return null == BB || isNaN(BB = +BB) ? jB : BB
      }
      return zB.invert = zB, zB.domain = zB.range = function(jB) {
        return arguments.length ? (BB = Array.from(jB, Lj), zB) : BB.slice()
      }, zB.unknown = function(BB) {
        return arguments.length ? (jB = BB, zB) : jB
      }, zB.copy = function() {
        return cj(BB).unknown(jB)
      }, BB = arguments.length ? Array.from(BB, Lj) : [0, 1], Kj(zB)
    }

    function bj(BB, jB) {
      var zB, QB = 0,
        nB = (BB = BB.slice()).length - 1,
        dB = BB[QB],
        IB = BB[nB];
      return IB < dB && (zB = QB, QB = nB, nB = zB, zB = dB, dB = IB, IB = zB), BB[QB] = jB.floor(dB), BB[nB] = jB.ceil(IB), BB
    }

    function vj(BB) {
      return Math.log(BB)
    }

    function Rj(BB) {
      return Math.exp(BB)
    }

    function Oj(BB) {
      return -Math.log(-BB)
    }

    function Bz(BB) {
      return -Math.exp(-BB)
    }

    function jz(BB) {
      return isFinite(BB) ? +("1e" + BB) : BB < 0 ? 0 : BB
    }

    function zz(BB) {
      return (jB, zB) => -BB(-jB, zB)
    }

    function Qz(BB) {
      const jB = BB(vj, Rj),
        zB = jB.domain;
      let QB, nB, dB = 10;

      function IB() {
        return QB = function(BB) {
          return BB === Math.E ? Math.log : 10 === BB && Math.log10 || 2 === BB && Math.log2 || (BB = Math.log(BB), jB => Math.log(jB) / BB)
        }(dB), nB = function(BB) {
          return 10 === BB ? jz : BB === Math.E ? Math.exp : jB => Math.pow(BB, jB)
        }(dB), zB()[0] < 0 ? (QB = zz(QB), nB = zz(nB), BB(Oj, Bz)) : BB(vj, Rj), jB
      }
      return jB.base = function(BB) {
        return arguments.length ? (dB = +BB, IB()) : dB
      }, jB.domain = function(BB) {
        return arguments.length ? (zB(BB), IB()) : zB()
      }, jB.ticks = BB => {
        const jB = zB();
        let IB = jB[0],
          NB = jB[jB.length - 1];
        const uB = NB < IB;
        uB && ([IB, NB] = [NB, IB]);
        let aB, pB, rB = QB(IB),
          sB = QB(NB);
        const JB = null == BB ? 10 : +BB;
        let mB = [];
        if (!(dB % 1) && sB - rB < JB) {
          if (rB = Math.floor(rB), sB = Math.ceil(sB), IB > 0) {
            for (; rB <= sB; ++rB)
              for (aB = 1; aB < dB; ++aB)
                if (pB = rB < 0 ? aB / nB(-rB) : aB * nB(rB), !(pB < IB)) {
                  if (pB > NB) break;
                  mB.push(pB)
                }
          } else
            for (; rB <= sB; ++rB)
              for (aB = dB - 1; aB >= 1; --aB)
                if (pB = rB > 0 ? aB / nB(-rB) : aB * nB(rB), !(pB < IB)) {
                  if (pB > NB) break;
                  mB.push(pB)
                } 2 * mB.length < JB && (mB = UB(IB, NB, JB))
        } else mB = UB(rB, sB, Math.min(sB - rB, JB)).map(nB);
        return uB ? mB.reverse() : mB
      }, jB.tickFormat = (BB, zB) => {
        if (null == BB && (BB = 10), null == zB && (zB = 10 === dB ? "s" : ","), "function" !== typeof zB && (dB % 1 || null != (zB = Fj(zB)).precision || (zB.trim = !0), zB = Pj(zB)), BB === 1 / 0) return zB;
        const IB = Math.max(1, dB * BB / jB.ticks().length);
        return BB => {
          let jB = BB / nB(Math.round(QB(BB)));
          return jB * dB < dB - .5 && (jB *= dB), jB <= IB ? zB(BB) : ""
        }
      }, jB.nice = () => zB(bj(zB(), {
        floor: BB => nB(Math.floor(QB(BB))),
        ceil: BB => nB(Math.ceil(QB(BB)))
      })), jB
    }

    function nz() {
      const BB = Qz(qj()).domain([1, 10]);
      return BB.copy = () => ij(BB, nz()).base(BB.base()), Hj.f.apply(BB, arguments), BB
    }

    function dz(BB) {
      return function(jB) {
        return Math.sign(jB) * Math.log1p(Math.abs(jB / BB))
      }
    }

    function Iz(BB) {
      return function(jB) {
        return Math.sign(jB) * Math.expm1(Math.abs(jB)) * BB
      }
    }

    function Nz(BB) {
      var jB = 1,
        zB = BB(dz(jB), Iz(jB));
      return zB.constant = function(zB) {
        return arguments.length ? BB(dz(jB = +zB), Iz(jB)) : jB
      }, Kj(zB)
    }

    function uz() {
      var BB = Nz(qj());
      return BB.copy = function() {
        return ij(BB, uz()).constant(BB.constant())
      }, Hj.f.apply(BB, arguments)
    }
    Tj = wj({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), Pj = Tj.format, Wj = Tj.formatPrefix;
    var Uz = zB(6136);

    function az(BB) {
      return function(jB) {
        return jB < 0 ? -Math.pow(-jB, BB) : Math.pow(jB, BB)
      }
    }

    function pz(BB) {
      return BB < 0 ? -Math.sqrt(-BB) : Math.sqrt(BB)
    }

    function rz(BB) {
      return BB < 0 ? -BB * BB : BB * BB
    }

    function sz(BB) {
      var jB = BB(tj, tj),
        zB = 1;
      return jB.exponent = function(jB) {
        return arguments.length ? 1 === (zB = +jB) ? BB(tj, tj) : .5 === zB ? BB(pz, rz) : BB(az(zB), az(1 / zB)) : zB
      }, Kj(jB)
    }

    function Jz() {
      var BB = sz(qj());
      return BB.copy = function() {
        return ij(BB, Jz()).exponent(BB.exponent())
      }, Hj.f.apply(BB, arguments), BB
    }

    function mz() {
      return Jz.apply(null, arguments).exponent(.5)
    }

    function yz(BB) {
      return Math.sign(BB) * BB * BB
    }

    function kz() {
      var BB, jB = fj(),
        zB = [0, 1],
        QB = !1;

      function nB(zB) {
        var nB = function(BB) {
          return Math.sign(BB) * Math.sqrt(Math.abs(BB))
        }(jB(zB));
        return isNaN(nB) ? BB : QB ? Math.round(nB) : nB
      }
      return nB.invert = function(BB) {
        return jB.invert(yz(BB))
      }, nB.domain = function(BB) {
        return arguments.length ? (jB.domain(BB), nB) : jB.domain()
      }, nB.range = function(BB) {
        return arguments.length ? (jB.range((zB = Array.from(BB, Lj)).map(yz)), nB) : zB.slice()
      }, nB.rangeRound = function(BB) {
        return nB.range(BB).round(!0)
      }, nB.round = function(BB) {
        return arguments.length ? (QB = !!BB, nB) : QB
      }, nB.clamp = function(BB) {
        return arguments.length ? (jB.clamp(BB), nB) : jB.clamp()
      }, nB.unknown = function(jB) {
        return arguments.length ? (BB = jB, nB) : BB
      }, nB.copy = function() {
        return kz(jB.domain(), zB).round(QB).clamp(jB.clamp()).unknown(BB)
      }, Hj.f.apply(nB, arguments), Kj(nB)
    }

    function Gz(BB, jB) {
      let zB;
      if (void 0 === jB)
        for (const QB of BB) null != QB && (zB < QB || void 0 === zB && QB >= QB) && (zB = QB);
      else {
        let QB = -1;
        for (let nB of BB) null != (nB = jB(nB, ++QB, BB)) && (zB < nB || void 0 === zB && nB >= nB) && (zB = nB)
      }
      return zB
    }

    function Lz(BB, jB) {
      let zB;
      if (void 0 === jB)
        for (const QB of BB) null != QB && (zB > QB || void 0 === zB && QB >= QB) && (zB = QB);
      else {
        let QB = -1;
        for (let nB of BB) null != (nB = jB(nB, ++QB, BB)) && (zB > nB || void 0 === zB && nB >= nB) && (zB = nB)
      }
      return zB
    }

    function gz() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rB;
      if (BB === rB) return tz;
      if ("function" !== typeof BB) throw new TypeError("compare is not a function");
      return (jB, zB) => {
        const QB = BB(jB, zB);
        return QB || 0 === QB ? QB : (0 === BB(zB, zB)) - (0 === BB(jB, jB))
      }
    }

    function tz(BB, jB) {
      return (null == BB || !(BB >= BB)) - (null == jB || !(jB >= jB)) || (BB < jB ? -1 : BB > jB ? 1 : 0)
    }

    function Sz(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        nB = arguments.length > 4 ? arguments[4] : void 0;
      if (jB = Math.floor(jB), zB = Math.floor(Math.max(0, zB)), QB = Math.floor(Math.min(BB.length - 1, QB)), !(zB <= jB && jB <= QB)) return BB;
      for (nB = void 0 === nB ? tz : gz(nB); QB > zB;) {
        if (QB - zB > 600) {
          const dB = QB - zB + 1,
            IB = jB - zB + 1,
            NB = Math.log(dB),
            uB = .5 * Math.exp(2 * NB / 3),
            UB = .5 * Math.sqrt(NB * uB * (dB - uB) / dB) * (IB - dB / 2 < 0 ? -1 : 1);
          Sz(BB, jB, Math.max(zB, Math.floor(jB - IB * uB / dB + UB)), Math.min(QB, Math.floor(jB + (dB - IB) * uB / dB + UB)), nB)
        }
        const dB = BB[jB];
        let IB = zB,
          NB = QB;
        for (Mz(BB, zB, jB), nB(BB[QB], dB) > 0 && Mz(BB, zB, QB); IB < NB;) {
          for (Mz(BB, IB, NB), ++IB, --NB; nB(BB[IB], dB) < 0;) ++IB;
          for (; nB(BB[NB], dB) > 0;) --NB
        }
        0 === nB(BB[zB], dB) ? Mz(BB, zB, NB) : (++NB, Mz(BB, NB, QB)), NB <= jB && (zB = NB + 1), jB <= NB && (QB = NB - 1)
      }
      return BB
    }

    function Mz(BB, jB, zB) {
      const QB = BB[jB];
      BB[jB] = BB[zB], BB[zB] = QB
    }

    function Ez(BB, jB, zB) {
      if (BB = Float64Array.from(function*(BB, jB) {
          if (void 0 === jB)
            for (let zB of BB) null != zB && (zB = +zB) >= zB && (yield zB);
          else {
            let zB = -1;
            for (let QB of BB) null != (QB = jB(QB, ++zB, BB)) && (QB = +QB) >= QB && (yield QB)
          }
        }(BB, zB)), (QB = BB.length) && !isNaN(jB = +jB)) {
        if (jB <= 0 || QB < 2) return Lz(BB);
        if (jB >= 1) return Gz(BB);
        var QB, nB = (QB - 1) * jB,
          dB = Math.floor(nB),
          IB = Gz(Sz(BB, dB).subarray(0, dB + 1));
        return IB + (Lz(BB.subarray(dB + 1)) - IB) * (nB - dB)
      }
    }

    function iz(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yB;
      if ((QB = BB.length) && !isNaN(jB = +jB)) {
        if (jB <= 0 || QB < 2) return +zB(BB[0], 0, BB);
        if (jB >= 1) return +zB(BB[QB - 1], QB - 1, BB);
        var QB, nB = (QB - 1) * jB,
          dB = Math.floor(nB),
          IB = +zB(BB[dB], dB, BB);
        return IB + (+zB(BB[dB + 1], dB + 1, BB) - IB) * (nB - dB)
      }
    }

    function qz() {
      var BB, jB = [],
        zB = [],
        QB = [];

      function nB() {
        var BB = 0,
          nB = Math.max(1, zB.length);
        for (QB = new Array(nB - 1); ++BB < nB;) QB[BB - 1] = iz(jB, BB / nB);
        return dB
      }

      function dB(jB) {
        return null == jB || isNaN(jB = +jB) ? BB : zB[LB(QB, jB)]
      }
      return dB.invertExtent = function(BB) {
        var nB = zB.indexOf(BB);
        return nB < 0 ? [NaN, NaN] : [nB > 0 ? QB[nB - 1] : jB[0], nB < QB.length ? QB[nB] : jB[jB.length - 1]]
      }, dB.domain = function(BB) {
        if (!arguments.length) return jB.slice();
        jB = [];
        for (let zB of BB) null == zB || isNaN(zB = +zB) || jB.push(zB);
        return jB.sort(rB), nB()
      }, dB.range = function(BB) {
        return arguments.length ? (zB = Array.from(BB), nB()) : zB.slice()
      }, dB.unknown = function(jB) {
        return arguments.length ? (BB = jB, dB) : BB
      }, dB.quantiles = function() {
        return QB.slice()
      }, dB.copy = function() {
        return qz().domain(jB).range(zB).unknown(BB)
      }, Hj.f.apply(dB, arguments)
    }

    function fz() {
      var BB, jB = 0,
        zB = 1,
        QB = 1,
        nB = [.5],
        dB = [0, 1];

      function IB(jB) {
        return null != jB && jB <= jB ? dB[LB(nB, jB, 0, QB)] : BB
      }

      function NB() {
        var BB = -1;
        for (nB = new Array(QB); ++BB < QB;) nB[BB] = ((BB + 1) * zB - (BB - QB) * jB) / (QB + 1);
        return IB
      }
      return IB.domain = function(BB) {
        return arguments.length ? ([jB, zB] = BB, jB = +jB, zB = +zB, NB()) : [jB, zB]
      }, IB.range = function(BB) {
        return arguments.length ? (QB = (dB = Array.from(BB)).length - 1, NB()) : dB.slice()
      }, IB.invertExtent = function(BB) {
        var IB = dB.indexOf(BB);
        return IB < 0 ? [NaN, NaN] : IB < 1 ? [jB, nB[0]] : IB >= QB ? [nB[QB - 1], zB] : [nB[IB - 1], nB[IB]]
      }, IB.unknown = function(jB) {
        return arguments.length ? (BB = jB, IB) : IB
      }, IB.thresholds = function() {
        return nB.slice()
      }, IB.copy = function() {
        return fz().domain([jB, zB]).range(dB).unknown(BB)
      }, Hj.f.apply(Kj(IB), arguments)
    }

    function oz() {
      var BB, jB = [.5],
        zB = [0, 1],
        QB = 1;

      function nB(nB) {
        return null != nB && nB <= nB ? zB[LB(jB, nB, 0, QB)] : BB
      }
      return nB.domain = function(BB) {
        return arguments.length ? (jB = Array.from(BB), QB = Math.min(jB.length, zB.length - 1), nB) : jB.slice()
      }, nB.range = function(BB) {
        return arguments.length ? (zB = Array.from(BB), QB = Math.min(jB.length, zB.length - 1), nB) : zB.slice()
      }, nB.invertExtent = function(BB) {
        var QB = zB.indexOf(BB);
        return [jB[QB - 1], jB[QB]]
      }, nB.unknown = function(jB) {
        return arguments.length ? (BB = jB, nB) : BB
      }, nB.copy = function() {
        return oz().domain(jB).range(zB).unknown(BB)
      }, Hj.f.apply(nB, arguments)
    }
    const Hz = 1e3,
      Dz = 6e4,
      Fz = 36e5,
      Yz = 864e5,
      Vz = 6048e5,
      hz = 2592e6,
      Xz = 31536e6,
      Zz = new Date,
      Az = new Date;

    function Tz(BB, jB, zB, QB) {
      function nB(jB) {
        return BB(jB = 0 === arguments.length ? new Date : new Date(+jB)), jB
      }
      return nB.floor = jB => (BB(jB = new Date(+jB)), jB), nB.ceil = zB => (BB(zB = new Date(zB - 1)), jB(zB, 1), BB(zB), zB), nB.round = BB => {
        const jB = nB(BB),
          zB = nB.ceil(BB);
        return BB - jB < zB - BB ? jB : zB
      }, nB.offset = (BB, zB) => (jB(BB = new Date(+BB), null == zB ? 1 : Math.floor(zB)), BB), nB.range = (zB, QB, dB) => {
        const IB = [];
        if (zB = nB.ceil(zB), dB = null == dB ? 1 : Math.floor(dB), !(zB < QB) || !(dB > 0)) return IB;
        let NB;
        do {
          IB.push(NB = new Date(+zB)), jB(zB, dB), BB(zB)
        } while (NB < zB && zB < QB);
        return IB
      }, nB.filter = zB => Tz((jB => {
        if (jB >= jB)
          for (; BB(jB), !zB(jB);) jB.setTime(jB - 1)
      }), ((BB, QB) => {
        if (BB >= BB)
          if (QB < 0)
            for (; ++QB <= 0;)
              for (; jB(BB, -1), !zB(BB););
          else
            for (; --QB >= 0;)
              for (; jB(BB, 1), !zB(BB););
      })), zB && (nB.count = (jB, QB) => (Zz.setTime(+jB), Az.setTime(+QB), BB(Zz), BB(Az), Math.floor(zB(Zz, Az))), nB.every = BB => (BB = Math.floor(BB), isFinite(BB) && BB > 0 ? BB > 1 ? nB.filter(QB ? jB => QB(jB) % BB === 0 : jB => nB.count(0, jB) % BB === 0) : nB : null)), nB
    }
    const Pz = Tz((() => {}), ((BB, jB) => {
      BB.setTime(+BB + jB)
    }), ((BB, jB) => jB - BB));
    Pz.every = BB => (BB = Math.floor(BB), isFinite(BB) && BB > 0 ? BB > 1 ? Tz((jB => {
      jB.setTime(Math.floor(jB / BB) * BB)
    }), ((jB, zB) => {
      jB.setTime(+jB + zB * BB)
    }), ((jB, zB) => (zB - jB) / BB)) : Pz : null);
    Pz.range;
    const Wz = Tz((BB => {
        BB.setTime(BB - BB.getMilliseconds())
      }), ((BB, jB) => {
        BB.setTime(+BB + jB * Hz)
      }), ((BB, jB) => (jB - BB) / Hz), (BB => BB.getUTCSeconds())),
      ez = (Wz.range, Tz((BB => {
        BB.setTime(BB - BB.getMilliseconds() - BB.getSeconds() * Hz)
      }), ((BB, jB) => {
        BB.setTime(+BB + jB * Dz)
      }), ((BB, jB) => (jB - BB) / Dz), (BB => BB.getMinutes()))),
      lz = (ez.range, Tz((BB => {
        BB.setUTCSeconds(0, 0)
      }), ((BB, jB) => {
        BB.setTime(+BB + jB * Dz)
      }), ((BB, jB) => (jB - BB) / Dz), (BB => BB.getUTCMinutes()))),
      wz = (lz.range, Tz((BB => {
        BB.setTime(BB - BB.getMilliseconds() - BB.getSeconds() * Hz - BB.getMinutes() * Dz)
      }), ((BB, jB) => {
        BB.setTime(+BB + jB * Fz)
      }), ((BB, jB) => (jB - BB) / Fz), (BB => BB.getHours()))),
      xz = (wz.range, Tz((BB => {
        BB.setUTCMinutes(0, 0, 0)
      }), ((BB, jB) => {
        BB.setTime(+BB + jB * Fz)
      }), ((BB, jB) => (jB - BB) / Fz), (BB => BB.getUTCHours()))),
      Kz = (xz.range, Tz((BB => BB.setHours(0, 0, 0, 0)), ((BB, jB) => BB.setDate(BB.getDate() + jB)), ((BB, jB) => (jB - BB - (jB.getTimezoneOffset() - BB.getTimezoneOffset()) * Dz) / Yz), (BB => BB.getDate() - 1))),
      Cz = (Kz.range, Tz((BB => {
        BB.setUTCHours(0, 0, 0, 0)
      }), ((BB, jB) => {
        BB.setUTCDate(BB.getUTCDate() + jB)
      }), ((BB, jB) => (jB - BB) / Yz), (BB => BB.getUTCDate() - 1))),
      cz = (Cz.range, Tz((BB => {
        BB.setUTCHours(0, 0, 0, 0)
      }), ((BB, jB) => {
        BB.setUTCDate(BB.getUTCDate() + jB)
      }), ((BB, jB) => (jB - BB) / Yz), (BB => Math.floor(BB / Yz))));
    cz.range;

    function bz(BB) {
      return Tz((jB => {
        jB.setDate(jB.getDate() - (jB.getDay() + 7 - BB) % 7), jB.setHours(0, 0, 0, 0)
      }), ((BB, jB) => {
        BB.setDate(BB.getDate() + 7 * jB)
      }), ((BB, jB) => (jB - BB - (jB.getTimezoneOffset() - BB.getTimezoneOffset()) * Dz) / Vz))
    }
    const vz = bz(0),
      Rz = bz(1),
      Oz = bz(2),
      BQ = bz(3),
      jQ = bz(4),
      zQ = bz(5),
      QQ = bz(6);
    vz.range, Rz.range, Oz.range, BQ.range, jQ.range, zQ.range, QQ.range;

    function nQ(BB) {
      return Tz((jB => {
        jB.setUTCDate(jB.getUTCDate() - (jB.getUTCDay() + 7 - BB) % 7), jB.setUTCHours(0, 0, 0, 0)
      }), ((BB, jB) => {
        BB.setUTCDate(BB.getUTCDate() + 7 * jB)
      }), ((BB, jB) => (jB - BB) / Vz))
    }
    const dQ = nQ(0),
      IQ = nQ(1),
      NQ = nQ(2),
      uQ = nQ(3),
      UQ = nQ(4),
      aQ = nQ(5),
      pQ = nQ(6),
      rQ = (dQ.range, IQ.range, NQ.range, uQ.range, UQ.range, aQ.range, pQ.range, Tz((BB => {
        BB.setDate(1), BB.setHours(0, 0, 0, 0)
      }), ((BB, jB) => {
        BB.setMonth(BB.getMonth() + jB)
      }), ((BB, jB) => jB.getMonth() - BB.getMonth() + 12 * (jB.getFullYear() - BB.getFullYear())), (BB => BB.getMonth()))),
      sQ = (rQ.range, Tz((BB => {
        BB.setUTCDate(1), BB.setUTCHours(0, 0, 0, 0)
      }), ((BB, jB) => {
        BB.setUTCMonth(BB.getUTCMonth() + jB)
      }), ((BB, jB) => jB.getUTCMonth() - BB.getUTCMonth() + 12 * (jB.getUTCFullYear() - BB.getUTCFullYear())), (BB => BB.getUTCMonth()))),
      JQ = (sQ.range, Tz((BB => {
        BB.setMonth(0, 1), BB.setHours(0, 0, 0, 0)
      }), ((BB, jB) => {
        BB.setFullYear(BB.getFullYear() + jB)
      }), ((BB, jB) => jB.getFullYear() - BB.getFullYear()), (BB => BB.getFullYear())));
    JQ.every = BB => isFinite(BB = Math.floor(BB)) && BB > 0 ? Tz((jB => {
      jB.setFullYear(Math.floor(jB.getFullYear() / BB) * BB), jB.setMonth(0, 1), jB.setHours(0, 0, 0, 0)
    }), ((jB, zB) => {
      jB.setFullYear(jB.getFullYear() + zB * BB)
    })) : null;
    JQ.range;
    const mQ = Tz((BB => {
      BB.setUTCMonth(0, 1), BB.setUTCHours(0, 0, 0, 0)
    }), ((BB, jB) => {
      BB.setUTCFullYear(BB.getUTCFullYear() + jB)
    }), ((BB, jB) => jB.getUTCFullYear() - BB.getUTCFullYear()), (BB => BB.getUTCFullYear()));
    mQ.every = BB => isFinite(BB = Math.floor(BB)) && BB > 0 ? Tz((jB => {
      jB.setUTCFullYear(Math.floor(jB.getUTCFullYear() / BB) * BB), jB.setUTCMonth(0, 1), jB.setUTCHours(0, 0, 0, 0)
    }), ((jB, zB) => {
      jB.setUTCFullYear(jB.getUTCFullYear() + zB * BB)
    })) : null;
    mQ.range;

    function yQ(BB, jB, zB, QB, nB, dB) {
      const IB = [
        [Wz, 1, Hz],
        [Wz, 5, 5e3],
        [Wz, 15, 15e3],
        [Wz, 30, 3e4],
        [dB, 1, Dz],
        [dB, 5, 3e5],
        [dB, 15, 9e5],
        [dB, 30, 18e5],
        [nB, 1, Fz],
        [nB, 3, 108e5],
        [nB, 6, 216e5],
        [nB, 12, 432e5],
        [QB, 1, Yz],
        [QB, 2, 1728e5],
        [zB, 1, Vz],
        [jB, 1, hz],
        [jB, 3, 7776e6],
        [BB, 1, Xz]
      ];

      function NB(jB, zB, QB) {
        const nB = Math.abs(zB - jB) / QB,
          dB = JB((BB => {
            let [, , jB] = BB;
            return jB
          })).right(IB, nB);
        if (dB === IB.length) return BB.every(pB(jB / Xz, zB / Xz, QB));
        if (0 === dB) return Pz.every(Math.max(pB(jB, zB, QB), 1));
        const [NB, uB] = IB[nB / IB[dB - 1][2] < IB[dB][2] / nB ? dB - 1 : dB];
        return NB.every(uB)
      }
      return [function(BB, jB, zB) {
        const QB = jB < BB;
        QB && ([BB, jB] = [jB, BB]);
        const nB = zB && "function" === typeof zB.range ? zB : NB(BB, jB, zB),
          dB = nB ? nB.range(BB, +jB + 1) : [];
        return QB ? dB.reverse() : dB
      }, NB]
    }
    const [kQ, GQ] = yQ(mQ, sQ, dQ, cz, xz, lz), [LQ, gQ] = yQ(JQ, rQ, vz, Kz, wz, ez);

    function tQ(BB) {
      if (0 <= BB.y && BB.y < 100) {
        var jB = new Date(-1, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L);
        return jB.setFullYear(BB.y), jB
      }
      return new Date(BB.y, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L)
    }

    function SQ(BB) {
      if (0 <= BB.y && BB.y < 100) {
        var jB = new Date(Date.UTC(-1, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L));
        return jB.setUTCFullYear(BB.y), jB
      }
      return new Date(Date.UTC(BB.y, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L))
    }

    function MQ(BB, jB, zB) {
      return {
        y: BB,
        m: jB,
        d: zB,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var EQ, iQ, qQ, fQ = {
        "-": "",
        _: " ",
        0: "0"
      },
      oQ = /^\s*\d+/,
      HQ = /^%/,
      DQ = /[\\^$*+?|[\]().{}]/g;

    function FQ(BB, jB, zB) {
      var QB = BB < 0 ? "-" : "",
        nB = (QB ? -BB : BB) + "",
        dB = nB.length;
      return QB + (dB < zB ? new Array(zB - dB + 1).join(jB) + nB : nB)
    }

    function YQ(BB) {
      return BB.replace(DQ, "\\$&")
    }

    function VQ(BB) {
      return new RegExp("^(?:" + BB.map(YQ).join("|") + ")", "i")
    }

    function hQ(BB) {
      return new Map(BB.map(((BB, jB) => [BB.toLowerCase(), jB])))
    }

    function XQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 1));
      return QB ? (BB.w = +QB[0], zB + QB[0].length) : -1
    }

    function ZQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 1));
      return QB ? (BB.u = +QB[0], zB + QB[0].length) : -1
    }

    function AQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 2));
      return QB ? (BB.U = +QB[0], zB + QB[0].length) : -1
    }

    function TQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 2));
      return QB ? (BB.V = +QB[0], zB + QB[0].length) : -1
    }

    function PQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 2));
      return QB ? (BB.W = +QB[0], zB + QB[0].length) : -1
    }

    function WQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 4));
      return QB ? (BB.y = +QB[0], zB + QB[0].length) : -1
    }

    function eQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 2));
      return QB ? (BB.y = +QB[0] + (+QB[0] > 68 ? 1900 : 2e3), zB + QB[0].length) : -1
    }

    function lQ(BB, jB, zB) {
      var QB = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(jB.slice(zB, zB + 6));
      return QB ? (BB.Z = QB[1] ? 0 : -(QB[2] + (QB[3] || "00")), zB + QB[0].length) : -1
    }

    function wQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 1));
      return QB ? (BB.q = 3 * QB[0] - 3, zB + QB[0].length) : -1
    }

    function xQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 2));
      return QB ? (BB.m = QB[0] - 1, zB + QB[0].length) : -1
    }

    function KQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 2));
      return QB ? (BB.d = +QB[0], zB + QB[0].length) : -1
    }

    function CQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 3));
      return QB ? (BB.m = 0, BB.d = +QB[0], zB + QB[0].length) : -1
    }

    function cQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 2));
      return QB ? (BB.H = +QB[0], zB + QB[0].length) : -1
    }

    function bQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 2));
      return QB ? (BB.M = +QB[0], zB + QB[0].length) : -1
    }

    function vQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 2));
      return QB ? (BB.S = +QB[0], zB + QB[0].length) : -1
    }

    function RQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 3));
      return QB ? (BB.L = +QB[0], zB + QB[0].length) : -1
    }

    function OQ(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB, zB + 6));
      return QB ? (BB.L = Math.floor(QB[0] / 1e3), zB + QB[0].length) : -1
    }

    function Bn(BB, jB, zB) {
      var QB = HQ.exec(jB.slice(zB, zB + 1));
      return QB ? zB + QB[0].length : -1
    }

    function jn(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB));
      return QB ? (BB.Q = +QB[0], zB + QB[0].length) : -1
    }

    function zn(BB, jB, zB) {
      var QB = oQ.exec(jB.slice(zB));
      return QB ? (BB.s = +QB[0], zB + QB[0].length) : -1
    }

    function Qn(BB, jB) {
      return FQ(BB.getDate(), jB, 2)
    }

    function nn(BB, jB) {
      return FQ(BB.getHours(), jB, 2)
    }

    function dn(BB, jB) {
      return FQ(BB.getHours() % 12 || 12, jB, 2)
    }

    function In(BB, jB) {
      return FQ(1 + Kz.count(JQ(BB), BB), jB, 3)
    }

    function Nn(BB, jB) {
      return FQ(BB.getMilliseconds(), jB, 3)
    }

    function un(BB, jB) {
      return Nn(BB, jB) + "000"
    }

    function Un(BB, jB) {
      return FQ(BB.getMonth() + 1, jB, 2)
    }

    function an(BB, jB) {
      return FQ(BB.getMinutes(), jB, 2)
    }

    function pn(BB, jB) {
      return FQ(BB.getSeconds(), jB, 2)
    }

    function rn(BB) {
      var jB = BB.getDay();
      return 0 === jB ? 7 : jB
    }

    function sn(BB, jB) {
      return FQ(vz.count(JQ(BB) - 1, BB), jB, 2)
    }

    function Jn(BB) {
      var jB = BB.getDay();
      return jB >= 4 || 0 === jB ? jQ(BB) : jQ.ceil(BB)
    }

    function mn(BB, jB) {
      return BB = Jn(BB), FQ(jQ.count(JQ(BB), BB) + (4 === JQ(BB).getDay()), jB, 2)
    }

    function yn(BB) {
      return BB.getDay()
    }

    function kn(BB, jB) {
      return FQ(Rz.count(JQ(BB) - 1, BB), jB, 2)
    }

    function Gn(BB, jB) {
      return FQ(BB.getFullYear() % 100, jB, 2)
    }

    function Ln(BB, jB) {
      return FQ((BB = Jn(BB)).getFullYear() % 100, jB, 2)
    }

    function gn(BB, jB) {
      return FQ(BB.getFullYear() % 1e4, jB, 4)
    }

    function tn(BB, jB) {
      var zB = BB.getDay();
      return FQ((BB = zB >= 4 || 0 === zB ? jQ(BB) : jQ.ceil(BB)).getFullYear() % 1e4, jB, 4)
    }

    function Sn(BB) {
      var jB = BB.getTimezoneOffset();
      return (jB > 0 ? "-" : (jB *= -1, "+")) + FQ(jB / 60 | 0, "0", 2) + FQ(jB % 60, "0", 2)
    }

    function Mn(BB, jB) {
      return FQ(BB.getUTCDate(), jB, 2)
    }

    function En(BB, jB) {
      return FQ(BB.getUTCHours(), jB, 2)
    }

    function qn(BB, jB) {
      return FQ(BB.getUTCHours() % 12 || 12, jB, 2)
    }

    function fn(BB, jB) {
      return FQ(1 + Cz.count(mQ(BB), BB), jB, 3)
    }

    function Hn(BB, jB) {
      return FQ(BB.getUTCMilliseconds(), jB, 3)
    }

    function Dn(BB, jB) {
      return Hn(BB, jB) + "000"
    }

    function Fn(BB, jB) {
      return FQ(BB.getUTCMonth() + 1, jB, 2)
    }

    function Yn(BB, jB) {
      return FQ(BB.getUTCMinutes(), jB, 2)
    }

    function Vn(BB, jB) {
      return FQ(BB.getUTCSeconds(), jB, 2)
    }

    function hn(BB) {
      var jB = BB.getUTCDay();
      return 0 === jB ? 7 : jB
    }

    function Xn(BB, jB) {
      return FQ(dQ.count(mQ(BB) - 1, BB), jB, 2)
    }

    function Zn(BB) {
      var jB = BB.getUTCDay();
      return jB >= 4 || 0 === jB ? UQ(BB) : UQ.ceil(BB)
    }

    function An(BB, jB) {
      return BB = Zn(BB), FQ(UQ.count(mQ(BB), BB) + (4 === mQ(BB).getUTCDay()), jB, 2)
    }

    function Tn(BB) {
      return BB.getUTCDay()
    }

    function Pn(BB, jB) {
      return FQ(IQ.count(mQ(BB) - 1, BB), jB, 2)
    }

    function Wn(BB, jB) {
      return FQ(BB.getUTCFullYear() % 100, jB, 2)
    }

    function en(BB, jB) {
      return FQ((BB = Zn(BB)).getUTCFullYear() % 100, jB, 2)
    }

    function wn(BB, jB) {
      return FQ(BB.getUTCFullYear() % 1e4, jB, 4)
    }

    function xn(BB, jB) {
      var zB = BB.getUTCDay();
      return FQ((BB = zB >= 4 || 0 === zB ? UQ(BB) : UQ.ceil(BB)).getUTCFullYear() % 1e4, jB, 4)
    }

    function Kn() {
      return "+0000"
    }

    function Cn() {
      return "%"
    }

    function cn(BB) {
      return +BB
    }

    function bn(BB) {
      return Math.floor(+BB / 1e3)
    }

    function vn(BB) {
      return new Date(BB)
    }

    function Rn(BB) {
      return BB instanceof Date ? +BB : +new Date(+BB)
    }

    function On(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB) {
      var aB = fj(),
        pB = aB.invert,
        rB = aB.domain,
        sB = UB(".%L"),
        JB = UB(":%S"),
        mB = UB("%I:%M"),
        yB = UB("%I %p"),
        kB = UB("%a %d"),
        GB = UB("%b %d"),
        LB = UB("%B"),
        gB = UB("%Y");

      function tB(BB) {
        return (uB(BB) < BB ? sB : NB(BB) < BB ? JB : IB(BB) < BB ? mB : dB(BB) < BB ? yB : QB(BB) < BB ? nB(BB) < BB ? kB : GB : zB(BB) < BB ? LB : gB)(BB)
      }
      return aB.invert = function(BB) {
        return new Date(pB(BB))
      }, aB.domain = function(BB) {
        return arguments.length ? rB(Array.from(BB, Rn)) : rB().map(vn)
      }, aB.ticks = function(jB) {
        var zB = rB();
        return BB(zB[0], zB[zB.length - 1], null == jB ? 10 : jB)
      }, aB.tickFormat = function(BB, jB) {
        return null == jB ? tB : UB(jB)
      }, aB.nice = function(BB) {
        var zB = rB();
        return BB && "function" === typeof BB.range || (BB = jB(zB[0], zB[zB.length - 1], null == BB ? 10 : BB)), BB ? rB(bj(zB, BB)) : aB
      }, aB.copy = function() {
        return ij(aB, On(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB))
      }, aB
    }

    function Bd() {
      return Hj.f.apply(On(LQ, gQ, JQ, rQ, vz, Kz, wz, ez, Wz, iQ).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function jd() {
      return Hj.f.apply(On(kQ, GQ, mQ, sQ, dQ, Cz, xz, lz, Wz, qQ).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function zd() {
      var BB, jB, zB, QB, nB, dB = 0,
        IB = 1,
        NB = tj,
        uB = !1;

      function UB(jB) {
        return null == jB || isNaN(jB = +jB) ? nB : NB(0 === zB ? .5 : (jB = (QB(jB) - BB) * zB, uB ? Math.max(0, Math.min(1, jB)) : jB))
      }

      function aB(BB) {
        return function(jB) {
          var zB, QB;
          return arguments.length ? ([zB, QB] = jB, NB = BB(zB, QB), UB) : [NB(0), NB(1)]
        }
      }
      return UB.domain = function(nB) {
          return arguments.length ? ([dB, IB] = nB, BB = QB(dB = +dB), jB = QB(IB = +IB), zB = BB === jB ? 0 : 1 / (jB - BB), UB) : [dB, IB]
        }, UB.clamp = function(BB) {
          return arguments.length ? (uB = !!BB, UB) : uB
        }, UB.interpolator = function(BB) {
          return arguments.length ? (NB = BB, UB) : NB
        }, UB.range = aB(kj), UB.rangeRound = aB(Gj), UB.unknown = function(BB) {
          return arguments.length ? (nB = BB, UB) : nB
        },
        function(nB) {
          return QB = nB, BB = nB(dB), jB = nB(IB), zB = BB === jB ? 0 : 1 / (jB - BB), UB
        }
    }

    function Qd(BB, jB) {
      return jB.domain(BB.domain()).interpolator(BB.interpolator()).clamp(BB.clamp()).unknown(BB.unknown())
    }

    function nd() {
      var BB = Kj(zd()(tj));
      return BB.copy = function() {
        return Qd(BB, nd())
      }, Hj.d.apply(BB, arguments)
    }

    function dd() {
      var BB = Qz(zd()).domain([1, 10]);
      return BB.copy = function() {
        return Qd(BB, dd()).base(BB.base())
      }, Hj.d.apply(BB, arguments)
    }

    function Id() {
      var BB = Nz(zd());
      return BB.copy = function() {
        return Qd(BB, Id()).constant(BB.constant())
      }, Hj.d.apply(BB, arguments)
    }

    function Nd() {
      var BB = sz(zd());
      return BB.copy = function() {
        return Qd(BB, Nd()).exponent(BB.exponent())
      }, Hj.d.apply(BB, arguments)
    }

    function ud() {
      return Nd.apply(null, arguments).exponent(.5)
    }

    function Ud() {
      var BB = [],
        jB = tj;

      function zB(zB) {
        if (null != zB && !isNaN(zB = +zB)) return jB((LB(BB, zB, 1) - 1) / (BB.length - 1))
      }
      return zB.domain = function(jB) {
        if (!arguments.length) return BB.slice();
        BB = [];
        for (let zB of jB) null == zB || isNaN(zB = +zB) || BB.push(zB);
        return BB.sort(rB), zB
      }, zB.interpolator = function(BB) {
        return arguments.length ? (jB = BB, zB) : jB
      }, zB.range = function() {
        return BB.map(((zB, QB) => jB(QB / (BB.length - 1))))
      }, zB.quantiles = function(jB) {
        return Array.from({
          length: jB + 1
        }, ((zB, QB) => Ez(BB, QB / jB)))
      }, zB.copy = function() {
        return Ud(jB).domain(BB)
      }, Hj.d.apply(zB, arguments)
    }

    function pd() {
      var BB, jB, zB, QB, nB, dB, IB, NB = 0,
        uB = .5,
        UB = 1,
        aB = 1,
        pB = tj,
        rB = !1;

      function sB(BB) {
        return isNaN(BB = +BB) ? IB : (BB = .5 + ((BB = +dB(BB)) - jB) * (aB * BB < aB * jB ? QB : nB), pB(rB ? Math.max(0, Math.min(1, BB)) : BB))
      }

      function JB(BB) {
        return function(jB) {
          var zB, QB, nB;
          return arguments.length ? ([zB, QB, nB] = jB, pB = function(BB, jB) {
            void 0 === jB && (jB = BB, BB = kj);
            for (var zB = 0, QB = jB.length - 1, nB = jB[0], dB = new Array(QB < 0 ? 0 : QB); zB < QB;) dB[zB] = BB(nB, nB = jB[++zB]);
            return function(BB) {
              var jB = Math.max(0, Math.min(QB - 1, Math.floor(BB *= QB)));
              return dB[jB](BB - jB)
            }
          }(BB, [zB, QB, nB]), sB) : [pB(0), pB(.5), pB(1)]
        }
      }
      return sB.domain = function(IB) {
          return arguments.length ? ([NB, uB, UB] = IB, BB = dB(NB = +NB), jB = dB(uB = +uB), zB = dB(UB = +UB), QB = BB === jB ? 0 : .5 / (jB - BB), nB = jB === zB ? 0 : .5 / (zB - jB), aB = jB < BB ? -1 : 1, sB) : [NB, uB, UB]
        }, sB.clamp = function(BB) {
          return arguments.length ? (rB = !!BB, sB) : rB
        }, sB.interpolator = function(BB) {
          return arguments.length ? (pB = BB, sB) : pB
        }, sB.range = JB(kj), sB.rangeRound = JB(Gj), sB.unknown = function(BB) {
          return arguments.length ? (IB = BB, sB) : IB
        },
        function(IB) {
          return dB = IB, BB = IB(NB), jB = IB(uB), zB = IB(UB), QB = BB === jB ? 0 : .5 / (jB - BB), nB = jB === zB ? 0 : .5 / (zB - jB), aB = jB < BB ? -1 : 1, sB
        }
    }

    function rd() {
      var BB = Kj(pd()(tj));
      return BB.copy = function() {
        return Qd(BB, rd())
      }, Hj.d.apply(BB, arguments)
    }

    function sd() {
      var BB = Qz(pd()).domain([.1, 1, 10]);
      return BB.copy = function() {
        return Qd(BB, sd()).base(BB.base())
      }, Hj.d.apply(BB, arguments)
    }

    function Jd() {
      var BB = Nz(pd());
      return BB.copy = function() {
        return Qd(BB, Jd()).constant(BB.constant())
      }, Hj.d.apply(BB, arguments)
    }

    function md() {
      var BB = sz(pd());
      return BB.copy = function() {
        return Qd(BB, md()).exponent(BB.exponent())
      }, Hj.d.apply(BB, arguments)
    }

    function yd() {
      return md.apply(null, arguments).exponent(.5)
    }

    function kd(BB, jB) {
      if ((nB = BB.length) > 1)
        for (var zB, QB, nB, dB = 1, IB = BB[jB[0]], NB = IB.length; dB < nB; ++dB)
          for (QB = IB, IB = BB[jB[dB]], zB = 0; zB < NB; ++zB) IB[zB][1] += IB[zB][0] = isNaN(QB[zB][1]) ? QB[zB][0] : QB[zB][1]
    }! function(BB) {
      EQ = function(BB) {
        var jB = BB.dateTime,
          zB = BB.date,
          QB = BB.time,
          nB = BB.periods,
          dB = BB.days,
          IB = BB.shortDays,
          NB = BB.months,
          uB = BB.shortMonths,
          UB = VQ(nB),
          aB = hQ(nB),
          pB = VQ(dB),
          rB = hQ(dB),
          sB = VQ(IB),
          JB = hQ(IB),
          mB = VQ(NB),
          yB = hQ(NB),
          kB = VQ(uB),
          GB = hQ(uB),
          LB = {
            a: function(BB) {
              return IB[BB.getDay()]
            },
            A: function(BB) {
              return dB[BB.getDay()]
            },
            b: function(BB) {
              return uB[BB.getMonth()]
            },
            B: function(BB) {
              return NB[BB.getMonth()]
            },
            c: null,
            d: Qn,
            e: Qn,
            f: un,
            g: Ln,
            G: tn,
            H: nn,
            I: dn,
            j: In,
            L: Nn,
            m: Un,
            M: an,
            p: function(BB) {
              return nB[+(BB.getHours() >= 12)]
            },
            q: function(BB) {
              return 1 + ~~(BB.getMonth() / 3)
            },
            Q: cn,
            s: bn,
            S: pn,
            u: rn,
            U: sn,
            V: mn,
            w: yn,
            W: kn,
            x: null,
            X: null,
            y: Gn,
            Y: gn,
            Z: Sn,
            "%": Cn
          },
          gB = {
            a: function(BB) {
              return IB[BB.getUTCDay()]
            },
            A: function(BB) {
              return dB[BB.getUTCDay()]
            },
            b: function(BB) {
              return uB[BB.getUTCMonth()]
            },
            B: function(BB) {
              return NB[BB.getUTCMonth()]
            },
            c: null,
            d: Mn,
            e: Mn,
            f: Dn,
            g: en,
            G: xn,
            H: En,
            I: qn,
            j: fn,
            L: Hn,
            m: Fn,
            M: Yn,
            p: function(BB) {
              return nB[+(BB.getUTCHours() >= 12)]
            },
            q: function(BB) {
              return 1 + ~~(BB.getUTCMonth() / 3)
            },
            Q: cn,
            s: bn,
            S: Vn,
            u: hn,
            U: Xn,
            V: An,
            w: Tn,
            W: Pn,
            x: null,
            X: null,
            y: Wn,
            Y: wn,
            Z: Kn,
            "%": Cn
          },
          tB = {
            a: function(BB, jB, zB) {
              var QB = sB.exec(jB.slice(zB));
              return QB ? (BB.w = JB.get(QB[0].toLowerCase()), zB + QB[0].length) : -1
            },
            A: function(BB, jB, zB) {
              var QB = pB.exec(jB.slice(zB));
              return QB ? (BB.w = rB.get(QB[0].toLowerCase()), zB + QB[0].length) : -1
            },
            b: function(BB, jB, zB) {
              var QB = kB.exec(jB.slice(zB));
              return QB ? (BB.m = GB.get(QB[0].toLowerCase()), zB + QB[0].length) : -1
            },
            B: function(BB, jB, zB) {
              var QB = mB.exec(jB.slice(zB));
              return QB ? (BB.m = yB.get(QB[0].toLowerCase()), zB + QB[0].length) : -1
            },
            c: function(BB, zB, QB) {
              return EB(BB, jB, zB, QB)
            },
            d: KQ,
            e: KQ,
            f: OQ,
            g: eQ,
            G: WQ,
            H: cQ,
            I: cQ,
            j: CQ,
            L: RQ,
            m: xQ,
            M: bQ,
            p: function(BB, jB, zB) {
              var QB = UB.exec(jB.slice(zB));
              return QB ? (BB.p = aB.get(QB[0].toLowerCase()), zB + QB[0].length) : -1
            },
            q: wQ,
            Q: jn,
            s: zn,
            S: vQ,
            u: ZQ,
            U: AQ,
            V: TQ,
            w: XQ,
            W: PQ,
            x: function(BB, jB, QB) {
              return EB(BB, zB, jB, QB)
            },
            X: function(BB, jB, zB) {
              return EB(BB, QB, jB, zB)
            },
            y: eQ,
            Y: WQ,
            Z: lQ,
            "%": Bn
          };

        function SB(BB, jB) {
          return function(zB) {
            var QB, nB, dB, IB = [],
              NB = -1,
              uB = 0,
              UB = BB.length;
            for (zB instanceof Date || (zB = new Date(+zB)); ++NB < UB;) 37 === BB.charCodeAt(NB) && (IB.push(BB.slice(uB, NB)), null != (nB = fQ[QB = BB.charAt(++NB)]) ? QB = BB.charAt(++NB) : nB = "e" === QB ? " " : "0", (dB = jB[QB]) && (QB = dB(zB, nB)), IB.push(QB), uB = NB + 1);
            return IB.push(BB.slice(uB, NB)), IB.join("")
          }
        }

        function MB(BB, jB) {
          return function(zB) {
            var QB, nB, dB = MQ(1900, void 0, 1);
            if (EB(dB, BB, zB += "", 0) != zB.length) return null;
            if ("Q" in dB) return new Date(dB.Q);
            if ("s" in dB) return new Date(1e3 * dB.s + ("L" in dB ? dB.L : 0));
            if (jB && !("Z" in dB) && (dB.Z = 0), "p" in dB && (dB.H = dB.H % 12 + 12 * dB.p), void 0 === dB.m && (dB.m = "q" in dB ? dB.q : 0), "V" in dB) {
              if (dB.V < 1 || dB.V > 53) return null;
              "w" in dB || (dB.w = 1), "Z" in dB ? (nB = (QB = SQ(MQ(dB.y, 0, 1))).getUTCDay(), QB = nB > 4 || 0 === nB ? IQ.ceil(QB) : IQ(QB), QB = Cz.offset(QB, 7 * (dB.V - 1)), dB.y = QB.getUTCFullYear(), dB.m = QB.getUTCMonth(), dB.d = QB.getUTCDate() + (dB.w + 6) % 7) : (nB = (QB = tQ(MQ(dB.y, 0, 1))).getDay(), QB = nB > 4 || 0 === nB ? Rz.ceil(QB) : Rz(QB), QB = Kz.offset(QB, 7 * (dB.V - 1)), dB.y = QB.getFullYear(), dB.m = QB.getMonth(), dB.d = QB.getDate() + (dB.w + 6) % 7)
            } else("W" in dB || "U" in dB) && ("w" in dB || (dB.w = "u" in dB ? dB.u % 7 : "W" in dB ? 1 : 0), nB = "Z" in dB ? SQ(MQ(dB.y, 0, 1)).getUTCDay() : tQ(MQ(dB.y, 0, 1)).getDay(), dB.m = 0, dB.d = "W" in dB ? (dB.w + 6) % 7 + 7 * dB.W - (nB + 5) % 7 : dB.w + 7 * dB.U - (nB + 6) % 7);
            return "Z" in dB ? (dB.H += dB.Z / 100 | 0, dB.M += dB.Z % 100, SQ(dB)) : tQ(dB)
          }
        }

        function EB(BB, jB, zB, QB) {
          for (var nB, dB, IB = 0, NB = jB.length, uB = zB.length; IB < NB;) {
            if (QB >= uB) return -1;
            if (37 === (nB = jB.charCodeAt(IB++))) {
              if (nB = jB.charAt(IB++), !(dB = tB[nB in fQ ? jB.charAt(IB++) : nB]) || (QB = dB(BB, zB, QB)) < 0) return -1
            } else if (nB != zB.charCodeAt(QB++)) return -1
          }
          return QB
        }
        return LB.x = SB(zB, LB), LB.X = SB(QB, LB), LB.c = SB(jB, LB), gB.x = SB(zB, gB), gB.X = SB(QB, gB), gB.c = SB(jB, gB), {
          format: function(BB) {
            var jB = SB(BB += "", LB);
            return jB.toString = function() {
              return BB
            }, jB
          },
          parse: function(BB) {
            var jB = MB(BB += "", !1);
            return jB.toString = function() {
              return BB
            }, jB
          },
          utcFormat: function(BB) {
            var jB = SB(BB += "", gB);
            return jB.toString = function() {
              return BB
            }, jB
          },
          utcParse: function(BB) {
            var jB = MB(BB += "", !0);
            return jB.toString = function() {
              return BB
            }, jB
          }
        }
      }(BB), iQ = EQ.format, EQ.parse, qQ = EQ.utcFormat, EQ.utcParse
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
    var Gd = zB(6198),
      Ld = zB(6087);

    function gd(BB) {
      for (var jB = BB.length, zB = new Array(jB); --jB >= 0;) zB[jB] = jB;
      return zB
    }

    function td(BB, jB) {
      return BB[jB]
    }

    function Sd(BB) {
      const jB = [];
      return jB.key = BB, jB
    }
    var Md = zB(6144),
      Ed = zB.n(Md),
      qd = zB(6162),
      fd = zB.n(qd),
      od = zB(5453),
      Hd = zB.n(od),
      Dd = zB(5319),
      Fd = zB.n(Dd),
      Yd = zB(5233),
      Vd = zB.n(Yd),
      hd = zB(5252),
      Xd = zB.n(hd),
      Zd = zB(6171),
      Ad = zB.n(Zd),
      Td = zB(5243),
      Pd = zB.n(Td),
      Wd = zB(6059),
      ed = zB.n(Wd),
      ld = zB(6176),
      wd = zB.n(ld),
      xd = zB(5539),
      Kd = zB.n(xd),
      Cd = zB(6180),
      cd = zB.n(Cd);

    function bd(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return vd(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(BB)) return Array.from(BB)
      }(BB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return vd(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return vd(BB, jB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vd(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }
    var Rd = function(BB) {
        return BB
      },
      Od = {
        "@@functional/placeholder": !0
      },
      BI = function(BB) {
        return BB === Od
      },
      jI = function(BB) {
        return function jB() {
          return 0 === arguments.length || 1 === arguments.length && BI(arguments.length <= 0 ? void 0 : arguments[0]) ? jB : BB.apply(void 0, arguments)
        }
      },
      zI = function BB(jB, zB) {
        return 1 === jB ? zB : jI((function() {
          for (var QB = arguments.length, nB = new Array(QB), dB = 0; dB < QB; dB++) nB[dB] = arguments[dB];
          var IB = nB.filter((function(BB) {
            return BB !== Od
          })).length;
          return IB >= jB ? zB.apply(void 0, nB) : BB(jB - IB, jI((function() {
            for (var BB = arguments.length, jB = new Array(BB), QB = 0; QB < BB; QB++) jB[QB] = arguments[QB];
            var dB = nB.map((function(BB) {
              return BI(BB) ? jB.shift() : BB
            }));
            return zB.apply(void 0, bd(dB).concat(jB))
          })))
        }))
      },
      QI = function(BB) {
        return zI(BB.length, BB)
      },
      nI = function(BB, jB) {
        for (var zB = [], QB = BB; QB < jB; ++QB) zB[QB - BB] = QB;
        return zB
      },
      dI = QI((function(BB, jB) {
        return Array.isArray(jB) ? jB.map(BB) : Object.keys(jB).map((function(BB) {
          return jB[BB]
        })).map(BB)
      })),
      II = function() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        if (!jB.length) return Rd;
        var QB = jB.reverse(),
          nB = QB[0],
          dB = QB.slice(1);
        return function() {
          return dB.reduce((function(BB, jB) {
            return jB(BB)
          }), nB.apply(void 0, arguments))
        }
      },
      NI = function(BB) {
        return Array.isArray(BB) ? BB.reverse() : BB.split("").reverse.join("")
      },
      uI = function(BB) {
        var jB = null,
          zB = null;
        return function() {
          for (var QB = arguments.length, nB = new Array(QB), dB = 0; dB < QB; dB++) nB[dB] = arguments[dB];
          return jB && nB.every((function(BB, zB) {
            return BB === jB[zB]
          })) ? zB : (jB = nB, zB = BB.apply(void 0, nB))
        }
      };
    const UI = {
      rangeStep: function(BB, jB, zB) {
        for (var QB = new(cd())(BB), nB = 0, dB = []; QB.lt(jB) && nB < 1e5;) dB.push(QB.toNumber()), QB = QB.add(zB), nB++;
        return dB
      },
      getDigitCount: function(BB) {
        return 0 === BB ? 1 : Math.floor(new(cd())(BB).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: QI((function(BB, jB, zB) {
        var QB = +BB;
        return QB + zB * (+jB - QB)
      })),
      uninterpolateNumber: QI((function(BB, jB, zB) {
        var QB = jB - +BB;
        return (zB - BB) / (QB = QB || 1 / 0)
      })),
      uninterpolateTruncation: QI((function(BB, jB, zB) {
        var QB = jB - +BB;
        return QB = QB || 1 / 0, Math.max(0, Math.min(1, (zB - BB) / QB))
      }))
    };

    function aI(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return sI(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(BB)) return Array.from(BB)
      }(BB) || rI(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pI(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(BB))) return;
        var zB = [],
          QB = !0,
          nB = !1,
          dB = void 0;
        try {
          for (var IB, NB = BB[Symbol.iterator](); !(QB = (IB = NB.next()).done) && (zB.push(IB.value), !jB || zB.length !== jB); QB = !0);
        } catch (uB) {
          nB = !0, dB = uB
        } finally {
          try {
            QB || null == NB.return || NB.return()
          } finally {
            if (nB) throw dB
          }
        }
        return zB
      }(BB, jB) || rI(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rI(BB, jB) {
      if (BB) {
        if ("string" === typeof BB) return sI(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === zB && BB.constructor && (zB = BB.constructor.name), "Map" === zB || "Set" === zB ? Array.from(BB) : "Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB) ? sI(BB, jB) : void 0
      }
    }

    function sI(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function JI(BB) {
      var jB = pI(BB, 2),
        zB = jB[0],
        QB = jB[1],
        nB = zB,
        dB = QB;
      return zB > QB && (nB = QB, dB = zB), [nB, dB]
    }

    function mI(BB, jB, zB) {
      if (BB.lte(0)) return new(cd())(0);
      var QB = UI.getDigitCount(BB.toNumber()),
        nB = new(cd())(10).pow(QB),
        dB = BB.div(nB),
        IB = 1 !== QB ? .05 : .1,
        NB = new(cd())(Math.ceil(dB.div(IB).toNumber())).add(zB).mul(IB).mul(nB);
      return jB ? NB : new(cd())(Math.ceil(NB))
    }

    function yI(BB, jB, zB) {
      var QB = 1,
        nB = new(cd())(BB);
      if (!nB.isint() && zB) {
        var dB = Math.abs(BB);
        dB < 1 ? (QB = new(cd())(10).pow(UI.getDigitCount(BB) - 1), nB = new(cd())(Math.floor(nB.div(QB).toNumber())).mul(QB)) : dB > 1 && (nB = new(cd())(Math.floor(BB)))
      } else 0 === BB ? nB = new(cd())(Math.floor((jB - 1) / 2)) : zB || (nB = new(cd())(Math.floor(BB)));
      var IB = Math.floor((jB - 1) / 2);
      return II(dI((function(BB) {
        return nB.add(new(cd())(BB - IB).mul(QB)).toNumber()
      })), nI)(0, jB)
    }

    function kI(BB, jB, zB, QB) {
      var nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((jB - BB) / (zB - 1))) return {
        step: new(cd())(0),
        tickMin: new(cd())(0),
        tickMax: new(cd())(0)
      };
      var dB, IB = mI(new(cd())(jB).sub(BB).div(zB - 1), QB, nB);
      dB = BB <= 0 && jB >= 0 ? new(cd())(0) : (dB = new(cd())(BB).add(jB).div(2)).sub(new(cd())(dB).mod(IB));
      var NB = Math.ceil(dB.sub(BB).div(IB).toNumber()),
        uB = Math.ceil(new(cd())(jB).sub(dB).div(IB).toNumber()),
        UB = NB + uB + 1;
      return UB > zB ? kI(BB, jB, zB, QB, nB + 1) : (UB < zB && (uB = jB > 0 ? uB + (zB - UB) : uB, NB = jB > 0 ? NB : NB + (zB - UB)), {
        step: IB,
        tickMin: dB.sub(new(cd())(NB).mul(IB)),
        tickMax: dB.add(new(cd())(uB).mul(IB))
      })
    }
    var GI = uI((function(BB) {
        var jB = pI(BB, 2),
          zB = jB[0],
          QB = jB[1],
          nB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          IB = Math.max(nB, 2),
          NB = pI(JI([zB, QB]), 2),
          uB = NB[0],
          UB = NB[1];
        if (uB === -1 / 0 || UB === 1 / 0) {
          var aB = UB === 1 / 0 ? [uB].concat(aI(nI(0, nB - 1).map((function() {
            return 1 / 0
          })))) : [].concat(aI(nI(0, nB - 1).map((function() {
            return -1 / 0
          }))), [UB]);
          return zB > QB ? NI(aB) : aB
        }
        if (uB === UB) return yI(uB, nB, dB);
        var pB = kI(uB, UB, IB, dB),
          rB = pB.step,
          sB = pB.tickMin,
          JB = pB.tickMax,
          mB = UI.rangeStep(sB, JB.add(new(cd())(.1).mul(rB)), rB);
        return zB > QB ? NI(mB) : mB
      })),
      LI = (uI((function(BB) {
        var jB = pI(BB, 2),
          zB = jB[0],
          QB = jB[1],
          nB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          IB = Math.max(nB, 2),
          NB = pI(JI([zB, QB]), 2),
          uB = NB[0],
          UB = NB[1];
        if (uB === -1 / 0 || UB === 1 / 0) return [zB, QB];
        if (uB === UB) return yI(uB, nB, dB);
        var aB = mI(new(cd())(UB).sub(uB).div(IB - 1), dB, 0),
          pB = II(dI((function(BB) {
            return new(cd())(uB).add(new(cd())(BB).mul(aB)).toNumber()
          })), nI)(0, IB).filter((function(BB) {
            return BB >= uB && BB <= UB
          }));
        return zB > QB ? NI(pB) : pB
      })), uI((function(BB, jB) {
        var zB = pI(BB, 2),
          QB = zB[0],
          nB = zB[1],
          dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          IB = pI(JI([QB, nB]), 2),
          NB = IB[0],
          uB = IB[1];
        if (NB === -1 / 0 || uB === 1 / 0) return [QB, nB];
        if (NB === uB) return [NB];
        var UB = Math.max(jB, 2),
          aB = mI(new(cd())(uB).sub(NB).div(UB - 1), dB, 0),
          pB = [].concat(aI(UI.rangeStep(new(cd())(NB), new(cd())(uB).sub(new(cd())(.99).mul(aB)), aB)), [uB]);
        return QB > nB ? NI(pB) : pB
      }))),
      gI = zB(6186),
      tI = zB(5229),
      SI = zB(5463),
      MI = zB(6190);

    function EI(BB) {
      return EI = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, EI(BB)
    }

    function iI(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return qI(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, jB) {
        if (!BB) return;
        if ("string" === typeof BB) return qI(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === zB && BB.constructor && (zB = BB.constructor.name);
        if ("Map" === zB || "Set" === zB) return Array.from(BB);
        if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return qI(BB, jB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qI(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function fI(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function oI(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? fI(Object(zB), !0).forEach((function(jB) {
          HI(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : fI(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function HI(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != EI(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != EI(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == EI(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function DI(BB, jB, zB) {
      return Hd()(BB) || Hd()(jB) ? zB : (0, tI.v)(jB) ? Xd()(BB, jB, zB) : Fd()(jB) ? jB(BB) : zB
    }

    function FI(BB, jB, zB, QB) {
      var nB = Ad()(BB, (function(BB) {
        return DI(BB, jB)
      }));
      if ("number" === zB) {
        var dB = nB.filter((function(BB) {
          return (0, tI.x)(BB) || parseFloat(BB)
        }));
        return dB.length ? [fd()(dB), Ed()(dB)] : [1 / 0, -1 / 0]
      }
      return (QB ? nB.filter((function(BB) {
        return !Hd()(BB)
      })) : nB).map((function(BB) {
        return (0, tI.v)(BB) || BB instanceof Date ? BB : ""
      }))
    }
    var YI = function(BB) {
        var jB, zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          QB = arguments.length > 2 ? arguments[2] : void 0,
          nB = arguments.length > 3 ? arguments[3] : void 0,
          dB = -1,
          IB = null !== (jB = null === zB || void 0 === zB ? void 0 : zB.length) && void 0 !== jB ? jB : 0;
        if (IB <= 1) return 0;
        if (nB && "angleAxis" === nB.axisType && Math.abs(Math.abs(nB.range[1] - nB.range[0]) - 360) <= 1e-6)
          for (var NB = nB.range, uB = 0; uB < IB; uB++) {
            var UB = uB > 0 ? QB[uB - 1].coordinate : QB[IB - 1].coordinate,
              aB = QB[uB].coordinate,
              pB = uB >= IB - 1 ? QB[0].coordinate : QB[uB + 1].coordinate,
              rB = void 0;
            if ((0, tI.B)(aB - UB) !== (0, tI.B)(pB - aB)) {
              var sB = [];
              if ((0, tI.B)(pB - aB) === (0, tI.B)(NB[1] - NB[0])) {
                rB = pB;
                var JB = aB + NB[1] - NB[0];
                sB[0] = Math.min(JB, (JB + UB) / 2), sB[1] = Math.max(JB, (JB + UB) / 2)
              } else {
                rB = UB;
                var mB = pB + NB[1] - NB[0];
                sB[0] = Math.min(aB, (mB + aB) / 2), sB[1] = Math.max(aB, (mB + aB) / 2)
              }
              var yB = [Math.min(aB, (rB + aB) / 2), Math.max(aB, (rB + aB) / 2)];
              if (BB > yB[0] && BB <= yB[1] || BB >= sB[0] && BB <= sB[1]) {
                dB = QB[uB].index;
                break
              }
            } else {
              var kB = Math.min(UB, pB),
                GB = Math.max(UB, pB);
              if (BB > (kB + aB) / 2 && BB <= (GB + aB) / 2) {
                dB = QB[uB].index;
                break
              }
            }
          } else
            for (var LB = 0; LB < IB; LB++)
              if (0 === LB && BB <= (zB[LB].coordinate + zB[LB + 1].coordinate) / 2 || LB > 0 && LB < IB - 1 && BB > (zB[LB].coordinate + zB[LB - 1].coordinate) / 2 && BB <= (zB[LB].coordinate + zB[LB + 1].coordinate) / 2 || LB === IB - 1 && BB > (zB[LB].coordinate + zB[LB - 1].coordinate) / 2) {
                dB = zB[LB].index;
                break
              } return dB
      },
      VI = function(BB) {
        var jB, zB, QB = BB.type.displayName,
          nB = null !== (jB = BB.type) && void 0 !== jB && jB.defaultProps ? oI(oI({}, BB.type.defaultProps), BB.props) : BB.props,
          dB = nB.stroke,
          IB = nB.fill;
        switch (QB) {
          case "Line":
            zB = dB;
            break;
          case "Area":
          case "Radar":
            zB = dB && "none" !== dB ? dB : IB;
            break;
          default:
            zB = IB
        }
        return zB
      },
      hI = function(BB) {
        var jB = BB.barSize,
          zB = BB.totalSize,
          QB = BB.stackGroups,
          nB = void 0 === QB ? {} : QB;
        if (!nB) return {};
        for (var dB = {}, IB = Object.keys(nB), NB = 0, uB = IB.length; NB < uB; NB++)
          for (var UB = nB[IB[NB]].stackGroups, aB = Object.keys(UB), pB = 0, rB = aB.length; pB < rB; pB++) {
            var sB = UB[aB[pB]],
              JB = sB.items,
              mB = sB.cateAxisId,
              yB = JB.filter((function(BB) {
                return (0, SI.n)(BB.type).indexOf("Bar") >= 0
              }));
            if (yB && yB.length) {
              var kB = yB[0].type.defaultProps,
                GB = void 0 !== kB ? oI(oI({}, kB), yB[0].props) : yB[0].props,
                LB = GB.barSize,
                gB = GB[mB];
              dB[gB] || (dB[gB] = []);
              var tB = Hd()(LB) ? jB : LB;
              dB[gB].push({
                item: yB[0],
                stackList: yB.slice(1),
                barSize: Hd()(tB) ? void 0 : (0, tI.m)(tB, zB, 0)
              })
            }
          }
        return dB
      },
      XI = function(BB) {
        var jB = BB.barGap,
          zB = BB.barCategoryGap,
          QB = BB.bandSize,
          nB = BB.sizeList,
          dB = void 0 === nB ? [] : nB,
          IB = BB.maxBarSize,
          NB = dB.length;
        if (NB < 1) return null;
        var uB, UB = (0, tI.m)(jB, QB, 0, !0),
          aB = [];
        if (dB[0].barSize === +dB[0].barSize) {
          var pB = !1,
            rB = QB / NB,
            sB = dB.reduce((function(BB, jB) {
              return BB + jB.barSize || 0
            }), 0);
          (sB += (NB - 1) * UB) >= QB && (sB -= (NB - 1) * UB, UB = 0), sB >= QB && rB > 0 && (pB = !0, sB = NB * (rB *= .9));
          var JB = {
            offset: ((QB - sB) / 2 | 0) - UB,
            size: 0
          };
          uB = dB.reduce((function(BB, jB) {
            var zB = {
                item: jB.item,
                position: {
                  offset: JB.offset + JB.size + UB,
                  size: pB ? rB : jB.barSize
                }
              },
              QB = [].concat(iI(BB), [zB]);
            return JB = QB[QB.length - 1].position, jB.stackList && jB.stackList.length && jB.stackList.forEach((function(BB) {
              QB.push({
                item: BB,
                position: JB
              })
            })), QB
          }), aB)
        } else {
          var mB = (0, tI.m)(zB, QB, 0, !0);
          QB - 2 * mB - (NB - 1) * UB <= 0 && (UB = 0);
          var yB = (QB - 2 * mB - (NB - 1) * UB) / NB;
          yB > 1 && (yB >>= 0);
          var kB = IB === +IB ? Math.min(yB, IB) : yB;
          uB = dB.reduce((function(BB, jB, zB) {
            var QB = [].concat(iI(BB), [{
              item: jB.item,
              position: {
                offset: mB + (yB + UB) * zB + (yB - kB) / 2,
                size: kB
              }
            }]);
            return jB.stackList && jB.stackList.length && jB.stackList.forEach((function(BB) {
              QB.push({
                item: BB,
                position: QB[QB.length - 1].position
              })
            })), QB
          }), aB)
        }
        return uB
      },
      ZI = function(BB, jB, zB, QB) {
        var nB = zB.children,
          dB = zB.width,
          IB = zB.margin,
          NB = dB - (IB.left || 0) - (IB.right || 0),
          uB = (0, MI.e)({
            children: nB,
            legendWidth: NB
          });
        if (uB) {
          var UB = QB || {},
            aB = UB.width,
            pB = UB.height,
            rB = uB.align,
            sB = uB.verticalAlign,
            JB = uB.layout;
          if (("vertical" === JB || "horizontal" === JB && "middle" === sB) && "center" !== rB && (0, tI.x)(BB[rB])) return oI(oI({}, BB), {}, HI({}, rB, BB[rB] + (aB || 0)));
          if (("horizontal" === JB || "vertical" === JB && "center" === rB) && "middle" !== sB && (0, tI.x)(BB[sB])) return oI(oI({}, BB), {}, HI({}, sB, BB[sB] + (pB || 0)))
        }
        return BB
      },
      AI = function(BB, jB, zB, QB, nB) {
        var dB = jB.props.children,
          IB = (0, SI.g)(dB, gI.b).filter((function(BB) {
            return function(BB, jB, zB) {
              return !!Hd()(jB) || ("horizontal" === BB ? "yAxis" === jB : "vertical" === BB || "x" === zB ? "xAxis" === jB : "y" !== zB || "yAxis" === jB)
            }(QB, nB, BB.props.direction)
          }));
        if (IB && IB.length) {
          var NB = IB.map((function(BB) {
            return BB.props.dataKey
          }));
          return BB.reduce((function(BB, jB) {
            var QB = DI(jB, zB);
            if (Hd()(QB)) return BB;
            var nB = Array.isArray(QB) ? [fd()(QB), Ed()(QB)] : [QB, QB],
              dB = NB.reduce((function(BB, zB) {
                var QB = DI(jB, zB, 0),
                  dB = nB[0] - Math.abs(Array.isArray(QB) ? QB[0] : QB),
                  IB = nB[1] + Math.abs(Array.isArray(QB) ? QB[1] : QB);
                return [Math.min(dB, BB[0]), Math.max(IB, BB[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(dB[0], BB[0]), Math.max(dB[1], BB[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      TI = function(BB, jB, zB, QB, nB) {
        var dB = jB.map((function(jB) {
          return AI(BB, jB, zB, nB, QB)
        })).filter((function(BB) {
          return !Hd()(BB)
        }));
        return dB && dB.length ? dB.reduce((function(BB, jB) {
          return [Math.min(BB[0], jB[0]), Math.max(BB[1], jB[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      PI = function(BB, jB, zB, QB, nB) {
        var dB = jB.map((function(jB) {
          var dB = jB.props.dataKey;
          return "number" === zB && dB && AI(BB, jB, dB, QB) || FI(BB, dB, zB, nB)
        }));
        if ("number" === zB) return dB.reduce((function(BB, jB) {
          return [Math.min(BB[0], jB[0]), Math.max(BB[1], jB[1])]
        }), [1 / 0, -1 / 0]);
        var IB = {};
        return dB.reduce((function(BB, jB) {
          for (var zB = 0, QB = jB.length; zB < QB; zB++) IB[jB[zB]] || (IB[jB[zB]] = !0, BB.push(jB[zB]));
          return BB
        }), [])
      },
      WI = function(BB, jB) {
        return "horizontal" === BB && "xAxis" === jB || "vertical" === BB && "yAxis" === jB || "centric" === BB && "angleAxis" === jB || "radial" === BB && "radiusAxis" === jB
      },
      eI = function(BB, jB, zB, QB) {
        if (QB) return BB.map((function(BB) {
          return BB.coordinate
        }));
        var nB, dB, IB = BB.map((function(BB) {
          return BB.coordinate === jB && (nB = !0), BB.coordinate === zB && (dB = !0), BB.coordinate
        }));
        return nB || IB.push(jB), dB || IB.push(zB), IB
      },
      lI = function(BB, jB, zB) {
        if (!BB) return null;
        var QB = BB.scale,
          nB = BB.duplicateDomain,
          dB = BB.type,
          IB = BB.range,
          NB = "scaleBand" === BB.realScaleType ? QB.bandwidth() / 2 : 2,
          uB = (jB || zB) && "category" === dB && QB.bandwidth ? QB.bandwidth() / NB : 0;
        return uB = "angleAxis" === BB.axisType && (null === IB || void 0 === IB ? void 0 : IB.length) >= 2 ? 2 * (0, tI.B)(IB[0] - IB[1]) * uB : uB, jB && (BB.ticks || BB.niceTicks) ? (BB.ticks || BB.niceTicks).map((function(BB) {
          var jB = nB ? nB.indexOf(BB) : BB;
          return {
            coordinate: QB(jB) + uB,
            value: BB,
            offset: uB
          }
        })).filter((function(BB) {
          return !Pd()(BB.coordinate)
        })) : BB.isCategorical && BB.categoricalDomain ? BB.categoricalDomain.map((function(BB, jB) {
          return {
            coordinate: QB(BB) + uB,
            value: BB,
            index: jB,
            offset: uB
          }
        })) : QB.ticks && !zB ? QB.ticks(BB.tickCount).map((function(BB) {
          return {
            coordinate: QB(BB) + uB,
            value: BB,
            offset: uB
          }
        })) : QB.domain().map((function(BB, jB) {
          return {
            coordinate: QB(BB) + uB,
            value: nB ? nB[BB] : BB,
            index: jB,
            offset: uB
          }
        }))
      },
      wI = new WeakMap,
      xI = function(BB, jB) {
        if ("function" !== typeof jB) return BB;
        wI.has(BB) || wI.set(BB, new WeakMap);
        var zB = wI.get(BB);
        if (zB.has(jB)) return zB.get(jB);
        var QB = function() {
          BB.apply(void 0, arguments), jB.apply(void 0, arguments)
        };
        return zB.set(jB, QB), QB
      },
      KI = function(BB, jB, zB) {
        var dB = BB.scale,
          IB = BB.type,
          NB = BB.layout,
          uB = BB.axisType;
        if ("auto" === dB) return "radial" === NB && "radiusAxis" === uB ? {
          scale: nB.d(),
          realScaleType: "band"
        } : "radial" === NB && "angleAxis" === uB ? {
          scale: Cj(),
          realScaleType: "linear"
        } : "category" === IB && jB && (jB.indexOf("LineChart") >= 0 || jB.indexOf("AreaChart") >= 0 || jB.indexOf("ComposedChart") >= 0 && !zB) ? {
          scale: nB.f(),
          realScaleType: "point"
        } : "category" === IB ? {
          scale: nB.d(),
          realScaleType: "band"
        } : {
          scale: Cj(),
          realScaleType: "linear"
        };
        if (Vd()(dB)) {
          var UB = "scale".concat(ed()(dB));
          return {
            scale: (QB[UB] || nB.f)(),
            realScaleType: QB[UB] ? UB : "point"
          }
        }
        return Fd()(dB) ? {
          scale: dB
        } : {
          scale: nB.f(),
          realScaleType: "point"
        }
      },
      CI = 1e-4,
      cI = function(BB) {
        var jB = BB.domain();
        if (jB && !(jB.length <= 2)) {
          var zB = jB.length,
            QB = BB.range(),
            nB = Math.min(QB[0], QB[1]) - CI,
            dB = Math.max(QB[0], QB[1]) + CI,
            IB = BB(jB[0]),
            NB = BB(jB[zB - 1]);
          (IB < nB || IB > dB || NB < nB || NB > dB) && BB.domain([jB[0], jB[zB - 1]])
        }
      },
      bI = function(BB, jB) {
        if (!BB) return null;
        for (var zB = 0, QB = BB.length; zB < QB; zB++)
          if (BB[zB].item === jB) return BB[zB].position;
        return null
      },
      vI = function(BB, jB) {
        if (!jB || 2 !== jB.length || !(0, tI.x)(jB[0]) || !(0, tI.x)(jB[1])) return BB;
        var zB = Math.min(jB[0], jB[1]),
          QB = Math.max(jB[0], jB[1]),
          nB = [BB[0], BB[1]];
        return (!(0, tI.x)(BB[0]) || BB[0] < zB) && (nB[0] = zB), (!(0, tI.x)(BB[1]) || BB[1] > QB) && (nB[1] = QB), nB[0] > QB && (nB[0] = QB), nB[1] < zB && (nB[1] = zB), nB
      },
      RI = {
        sign: function(BB) {
          var jB = BB.length;
          if (!(jB <= 0))
            for (var zB = 0, QB = BB[0].length; zB < QB; ++zB)
              for (var nB = 0, dB = 0, IB = 0; IB < jB; ++IB) {
                var NB = Pd()(BB[IB][zB][1]) ? BB[IB][zB][0] : BB[IB][zB][1];
                NB >= 0 ? (BB[IB][zB][0] = nB, BB[IB][zB][1] = nB + NB, nB = BB[IB][zB][1]) : (BB[IB][zB][0] = dB, BB[IB][zB][1] = dB + NB, dB = BB[IB][zB][1])
              }
        },
        expand: function(BB, jB) {
          if ((QB = BB.length) > 0) {
            for (var zB, QB, nB, dB = 0, IB = BB[0].length; dB < IB; ++dB) {
              for (nB = zB = 0; zB < QB; ++zB) nB += BB[zB][dB][1] || 0;
              if (nB)
                for (zB = 0; zB < QB; ++zB) BB[zB][dB][1] /= nB
            }
            kd(BB, jB)
          }
        },
        none: kd,
        silhouette: function(BB, jB) {
          if ((zB = BB.length) > 0) {
            for (var zB, QB = 0, nB = BB[jB[0]], dB = nB.length; QB < dB; ++QB) {
              for (var IB = 0, NB = 0; IB < zB; ++IB) NB += BB[IB][QB][1] || 0;
              nB[QB][1] += nB[QB][0] = -NB / 2
            }
            kd(BB, jB)
          }
        },
        wiggle: function(BB, jB) {
          if ((nB = BB.length) > 0 && (QB = (zB = BB[jB[0]]).length) > 0) {
            for (var zB, QB, nB, dB = 0, IB = 1; IB < QB; ++IB) {
              for (var NB = 0, uB = 0, UB = 0; NB < nB; ++NB) {
                for (var aB = BB[jB[NB]], pB = aB[IB][1] || 0, rB = (pB - (aB[IB - 1][1] || 0)) / 2, sB = 0; sB < NB; ++sB) {
                  var JB = BB[jB[sB]];
                  rB += (JB[IB][1] || 0) - (JB[IB - 1][1] || 0)
                }
                uB += pB, UB += rB * pB
              }
              zB[IB - 1][1] += zB[IB - 1][0] = dB, uB && (dB -= UB / uB)
            }
            zB[IB - 1][1] += zB[IB - 1][0] = dB, kd(BB, jB)
          }
        },
        positive: function(BB) {
          var jB = BB.length;
          if (!(jB <= 0))
            for (var zB = 0, QB = BB[0].length; zB < QB; ++zB)
              for (var nB = 0, dB = 0; dB < jB; ++dB) {
                var IB = Pd()(BB[dB][zB][1]) ? BB[dB][zB][0] : BB[dB][zB][1];
                IB >= 0 ? (BB[dB][zB][0] = nB, BB[dB][zB][1] = nB + IB, nB = BB[dB][zB][1]) : (BB[dB][zB][0] = 0, BB[dB][zB][1] = 0)
              }
        }
      },
      OI = function(BB, jB, zB) {
        var QB = jB.map((function(BB) {
            return BB.props.dataKey
          })),
          nB = RI[zB],
          dB = function() {
            var BB = (0, Ld.c)([]),
              jB = gd,
              zB = kd,
              QB = td;

            function nB(nB) {
              var dB, IB, NB = Array.from(BB.apply(this, arguments), Sd),
                uB = NB.length,
                UB = -1;
              for (const BB of nB)
                for (dB = 0, ++UB; dB < uB; ++dB)(NB[dB][UB] = [0, +QB(BB, NB[dB].key, UB, nB)]).data = BB;
              for (dB = 0, IB = (0, Gd.e)(jB(NB)); dB < uB; ++dB) NB[IB[dB]].index = dB;
              return zB(NB, IB), NB
            }
            return nB.keys = function(jB) {
              return arguments.length ? (BB = "function" === typeof jB ? jB : (0, Ld.c)(Array.from(jB)), nB) : BB
            }, nB.value = function(BB) {
              return arguments.length ? (QB = "function" === typeof BB ? BB : (0, Ld.c)(+BB), nB) : QB
            }, nB.order = function(BB) {
              return arguments.length ? (jB = null == BB ? gd : "function" === typeof BB ? BB : (0, Ld.c)(Array.from(BB)), nB) : jB
            }, nB.offset = function(BB) {
              return arguments.length ? (zB = null == BB ? kd : BB, nB) : zB
            }, nB
          }().keys(QB).value((function(BB, jB) {
            return +DI(BB, jB, 0)
          })).order(gd).offset(nB);
        return dB(BB)
      },
      BN = function(BB, jB, zB, QB, nB, dB) {
        if (!BB) return null;
        var IB = (dB ? jB.reverse() : jB).reduce((function(BB, jB) {
          var nB, dB = null !== (nB = jB.type) && void 0 !== nB && nB.defaultProps ? oI(oI({}, jB.type.defaultProps), jB.props) : jB.props,
            IB = dB.stackId;
          if (dB.hide) return BB;
          var NB = dB[zB],
            uB = BB[NB] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, tI.v)(IB)) {
            var UB = uB.stackGroups[IB] || {
              numericAxisId: zB,
              cateAxisId: QB,
              items: []
            };
            UB.items.push(jB), uB.hasStack = !0, uB.stackGroups[IB] = UB
          } else uB.stackGroups[(0, tI.D)("_stackId_")] = {
            numericAxisId: zB,
            cateAxisId: QB,
            items: [jB]
          };
          return oI(oI({}, BB), {}, HI({}, NB, uB))
        }), {});
        return Object.keys(IB).reduce((function(jB, dB) {
          var NB = IB[dB];
          if (NB.hasStack) {
            NB.stackGroups = Object.keys(NB.stackGroups).reduce((function(jB, dB) {
              var IB = NB.stackGroups[dB];
              return oI(oI({}, jB), {}, HI({}, dB, {
                numericAxisId: zB,
                cateAxisId: QB,
                items: IB.items,
                stackedData: OI(BB, IB.items, nB)
              }))
            }), {})
          }
          return oI(oI({}, jB), {}, HI({}, dB, NB))
        }), {})
      },
      jN = function(BB, jB) {
        var zB = jB.realScaleType,
          QB = jB.type,
          nB = jB.tickCount,
          dB = jB.originalDomain,
          IB = jB.allowDecimals,
          NB = zB || jB.scale;
        if ("auto" !== NB && "linear" !== NB) return null;
        if (nB && "number" === QB && dB && ("auto" === dB[0] || "auto" === dB[1])) {
          var uB = BB.domain();
          if (!uB.length) return null;
          var UB = GI(uB, nB, IB);
          return BB.domain([fd()(UB), Ed()(UB)]), {
            niceTicks: UB
          }
        }
        if (nB && "number" === QB) {
          var aB = BB.domain();
          return {
            niceTicks: LI(aB, nB, IB)
          }
        }
        return null
      };

    function zN(BB) {
      var jB = BB.axis,
        zB = BB.ticks,
        QB = BB.bandSize,
        nB = BB.entry,
        dB = BB.index,
        IB = BB.dataKey;
      if ("category" === jB.type) {
        if (!jB.allowDuplicatedCategory && jB.dataKey && !Hd()(nB[jB.dataKey])) {
          var NB = (0, tI.f)(zB, "value", nB[jB.dataKey]);
          if (NB) return NB.coordinate + QB / 2
        }
        return zB[dB] ? zB[dB].coordinate + QB / 2 : null
      }
      var uB = DI(nB, Hd()(IB) ? jB.dataKey : IB);
      return Hd()(uB) ? null : jB.scale(uB)
    }
    var QN = function(BB) {
        var jB = BB.axis,
          zB = BB.ticks,
          QB = BB.offset,
          nB = BB.bandSize,
          dB = BB.entry,
          IB = BB.index;
        if ("category" === jB.type) return zB[IB] ? zB[IB].coordinate + QB : null;
        var NB = DI(dB, jB.dataKey, jB.domain[IB]);
        return Hd()(NB) ? null : jB.scale(NB) - nB / 2 + QB
      },
      nN = function(BB) {
        var jB = BB.numericAxis,
          zB = jB.scale.domain();
        if ("number" === jB.type) {
          var QB = Math.min(zB[0], zB[1]),
            nB = Math.max(zB[0], zB[1]);
          return QB <= 0 && nB >= 0 ? 0 : nB < 0 ? nB : QB
        }
        return zB[0]
      },
      dN = function(BB, jB) {
        var zB, QB = (null !== (zB = BB.type) && void 0 !== zB && zB.defaultProps ? oI(oI({}, BB.type.defaultProps), BB.props) : BB.props).stackId;
        if ((0, tI.v)(QB)) {
          var nB = jB[QB];
          if (nB) {
            var dB = nB.items.indexOf(BB);
            return dB >= 0 ? nB.stackedData[dB] : null
          }
        }
        return null
      },
      IN = function(BB, jB, zB) {
        return Object.keys(BB).reduce((function(QB, nB) {
          var dB = BB[nB].stackedData.reduce((function(BB, QB) {
            var nB = QB.slice(jB, zB + 1).reduce((function(BB, jB) {
              return [fd()(jB.concat([BB[0]]).filter(tI.x)), Ed()(jB.concat([BB[1]]).filter(tI.x))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(BB[0], nB[0]), Math.max(BB[1], nB[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(dB[0], QB[0]), Math.max(dB[1], QB[1])]
        }), [1 / 0, -1 / 0]).map((function(BB) {
          return BB === 1 / 0 || BB === -1 / 0 ? 0 : BB
        }))
      },
      NN = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      uN = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      UN = function(BB, jB, zB) {
        if (Fd()(BB)) return BB(jB, zB);
        if (!Array.isArray(BB)) return jB;
        var QB = [];
        if ((0, tI.x)(BB[0])) QB[0] = zB ? BB[0] : Math.min(BB[0], jB[0]);
        else if (NN.test(BB[0])) {
          var nB = +NN.exec(BB[0])[1];
          QB[0] = jB[0] - nB
        } else Fd()(BB[0]) ? QB[0] = BB[0](jB[0]) : QB[0] = jB[0];
        if ((0, tI.x)(BB[1])) QB[1] = zB ? BB[1] : Math.max(BB[1], jB[1]);
        else if (uN.test(BB[1])) {
          var dB = +uN.exec(BB[1])[1];
          QB[1] = jB[1] + dB
        } else Fd()(BB[1]) ? QB[1] = BB[1](jB[1]) : QB[1] = jB[1];
        return QB
      },
      aN = function(BB, jB, zB) {
        if (BB && BB.scale && BB.scale.bandwidth) {
          var QB = BB.scale.bandwidth();
          if (!zB || QB > 0) return QB
        }
        if (BB && jB && jB.length >= 2) {
          for (var nB = Kd()(jB, (function(BB) {
              return BB.coordinate
            })), dB = 1 / 0, IB = 1, NB = nB.length; IB < NB; IB++) {
            var uB = nB[IB],
              UB = nB[IB - 1];
            dB = Math.min((uB.coordinate || 0) - (UB.coordinate || 0), dB)
          }
          return dB === 1 / 0 ? 0 : dB
        }
        return zB ? void 0 : 0
      },
      pN = function(BB, jB, zB) {
        return BB && BB.length ? wd()(BB, Xd()(zB, "type.defaultProps.domain")) ? jB : BB : jB
      },
      rN = function(BB, jB) {
        var zB = BB.type.defaultProps ? oI(oI({}, BB.type.defaultProps), BB.props) : BB.props,
          QB = zB.dataKey,
          nB = zB.name,
          dB = zB.unit,
          IB = zB.formatter,
          NB = zB.tooltipType,
          uB = zB.chartType,
          UB = zB.hide;
        return oI(oI({}, (0, SI.c)(BB, !1)), {}, {
          dataKey: QB,
          unit: dB,
          formatter: IB,
          name: nB || QB,
          color: VI(BB),
          value: DI(jB, QB),
          type: NB,
          payload: jB,
          chartType: uB,
          hide: UB
        })
      }
  },
  6117: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => rB,
      e: () => pB
    });
    var QB = zB(5981);

    function nB(BB) {
      return nB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, nB(BB)
    }

    function dB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function IB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? dB(Object(zB), !0).forEach((function(jB) {
          NB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : dB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function NB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != nB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != nB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == nB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }
    var uB = {
        widthCache: {},
        cacheCount: 0
      },
      UB = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      aB = "recharts_measurement_span";
    var pB = function(BB) {
        var jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === BB || null === BB || QB.c.isSsr) return {
          width: 0,
          height: 0
        };
        var zB = function(BB) {
            var jB = IB({}, BB);
            return Object.keys(jB).forEach((function(BB) {
              jB[BB] || delete jB[BB]
            })), jB
          }(jB),
          nB = JSON.stringify({
            text: BB,
            copyStyle: zB
          });
        if (uB.widthCache[nB]) return uB.widthCache[nB];
        try {
          var dB = document.getElementById(aB);
          dB || ((dB = document.createElement("span")).setAttribute("id", aB), dB.setAttribute("aria-hidden", "true"), document.body.appendChild(dB));
          var NB = IB(IB({}, UB), zB);
          Object.assign(dB.style, NB), dB.textContent = "".concat(BB);
          var pB = dB.getBoundingClientRect(),
            rB = {
              width: pB.width,
              height: pB.height
            };
          return uB.widthCache[nB] = rB, ++uB.cacheCount > 2e3 && (uB.cacheCount = 0, uB.widthCache = {}), rB
        } catch (sB) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      rB = function(BB) {
        return {
          top: BB.top + window.scrollY - document.documentElement.clientTop,
          left: BB.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  5229: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => JB,
      B: () => sB,
      D: () => LB,
      c: () => qB,
      f: () => EB,
      g: () => tB,
      i: () => iB,
      m: () => gB,
      n: () => SB,
      q: () => MB,
      u: () => yB,
      v: () => kB,
      x: () => mB
    });
    var QB = zB(5233),
      nB = zB.n(QB),
      dB = zB(5243),
      IB = zB.n(dB),
      NB = zB(5252),
      uB = zB.n(NB),
      UB = zB(5250),
      aB = zB.n(UB),
      pB = zB(5453),
      rB = zB.n(pB),
      sB = function(BB) {
        return 0 === BB ? 0 : BB > 0 ? 1 : -1
      },
      JB = function(BB) {
        return nB()(BB) && BB.indexOf("%") === BB.length - 1
      },
      mB = function(BB) {
        return aB()(BB) && !IB()(BB)
      },
      yB = function(BB) {
        return rB()(BB)
      },
      kB = function(BB) {
        return mB(BB) || nB()(BB)
      },
      GB = 0,
      LB = function(BB) {
        var jB = ++GB;
        return "".concat(BB || "").concat(jB)
      },
      gB = function(BB, jB) {
        var zB, QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          dB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!mB(BB) && !nB()(BB)) return QB;
        if (JB(BB)) {
          var NB = BB.indexOf("%");
          zB = jB * parseFloat(BB.slice(0, NB)) / 100
        } else zB = +BB;
        return IB()(zB) && (zB = QB), dB && zB > jB && (zB = jB), zB
      },
      tB = function(BB) {
        if (!BB) return null;
        var jB = Object.keys(BB);
        return jB && jB.length ? BB[jB[0]] : null
      },
      SB = function(BB) {
        if (!Array.isArray(BB)) return !1;
        for (var jB = BB.length, zB = {}, QB = 0; QB < jB; QB++) {
          if (zB[BB[QB]]) return !0;
          zB[BB[QB]] = !0
        }
        return !1
      },
      MB = function(BB, jB) {
        return mB(BB) && mB(jB) ? function(zB) {
          return BB + zB * (jB - BB)
        } : function() {
          return jB
        }
      };

    function EB(BB, jB, zB) {
      return BB && BB.length ? BB.find((function(BB) {
        return BB && ("function" === typeof jB ? jB(BB) : uB()(BB, jB)) === zB
      })) : null
    }
    var iB = function(BB) {
        if (!BB || !BB.length) return null;
        for (var jB = BB.length, zB = 0, QB = 0, nB = 0, dB = 0, IB = 1 / 0, NB = -1 / 0, uB = 0, UB = 0, aB = 0; aB < jB; aB++) zB += uB = BB[aB].cx || 0, QB += UB = BB[aB].cy || 0, nB += uB * UB, dB += uB * uB, IB = Math.min(IB, uB), NB = Math.max(NB, uB);
        var pB = jB * dB !== zB * zB ? (jB * nB - zB * QB) / (jB * dB - zB * zB) : 0;
        return {
          xmin: IB,
          xmax: NB,
          a: pB,
          b: (QB - pB * zB) / jB
        }
      },
      qB = function(BB, jB) {
        return mB(BB) && mB(jB) ? BB - jB : nB()(BB) && nB()(jB) ? BB.localeCompare(jB) : BB instanceof Date && jB instanceof Date ? BB.getTime() - jB.getTime() : String(BB).localeCompare(String(jB))
      }
  },
  5981: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    var QB = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(BB) {
        return QB[BB]
      },
      set: function(BB, jB) {
        if ("string" === typeof BB) QB[BB] = jB;
        else {
          var zB = Object.keys(BB);
          zB && zB.length && zB.forEach((function(jB) {
            QB[jB] = BB[jB]
          }))
        }
      }
    }
  },
  6214: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB
    });
    var QB = function(BB, jB) {
      var zB = BB.alwaysShow,
        QB = BB.ifOverflow;
      return zB && (QB = "extendDomain"), QB === jB
    }
  },
  5458: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    var QB = function(BB, jB) {
      for (var zB = arguments.length, QB = new Array(zB > 2 ? zB - 2 : 0), nB = 2; nB < zB; nB++) QB[nB - 2] = arguments[nB]
    }
  },
  6207: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB,
      h: () => rB,
      j: () => UB
    });
    zB(5453), zB(62), zB(5319);

    function QB(BB) {
      return QB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, QB(BB)
    }

    function nB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function dB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? nB(Object(zB), !0).forEach((function(jB) {
          IB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : nB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function IB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != QB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var nB = zB.call(BB, jB || "default");
            if ("object" != QB(nB)) return nB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == QB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }
    var NB = Math.PI / 180,
      uB = function(BB) {
        return 180 * BB / Math.PI
      },
      UB = function(BB, jB, zB, QB) {
        return {
          x: BB + Math.cos(-NB * QB) * zB,
          y: jB + Math.sin(-NB * QB) * zB
        }
      },
      aB = function(BB, jB) {
        var zB = BB.x,
          QB = BB.y,
          nB = jB.cx,
          dB = jB.cy,
          IB = function(BB, jB) {
            var zB = BB.x,
              QB = BB.y,
              nB = jB.x,
              dB = jB.y;
            return Math.sqrt(Math.pow(zB - nB, 2) + Math.pow(QB - dB, 2))
          }({
            x: zB,
            y: QB
          }, {
            x: nB,
            y: dB
          });
        if (IB <= 0) return {
          radius: IB
        };
        var NB = (zB - nB) / IB,
          UB = Math.acos(NB);
        return QB > dB && (UB = 2 * Math.PI - UB), {
          radius: IB,
          angle: uB(UB),
          angleInRadian: UB
        }
      },
      pB = function(BB, jB) {
        var zB = jB.startAngle,
          QB = jB.endAngle,
          nB = Math.floor(zB / 360),
          dB = Math.floor(QB / 360);
        return BB + 360 * Math.min(nB, dB)
      },
      rB = function(BB, jB) {
        var zB = BB.x,
          QB = BB.y,
          nB = aB({
            x: zB,
            y: QB
          }, jB),
          IB = nB.radius,
          NB = nB.angle,
          uB = jB.innerRadius,
          UB = jB.outerRadius;
        if (IB < uB || IB > UB) return !1;
        if (0 === IB) return !0;
        var rB, sB = function(BB) {
            var jB = BB.startAngle,
              zB = BB.endAngle,
              QB = Math.floor(jB / 360),
              nB = Math.floor(zB / 360),
              dB = Math.min(QB, nB);
            return {
              startAngle: jB - 360 * dB,
              endAngle: zB - 360 * dB
            }
          }(jB),
          JB = sB.startAngle,
          mB = sB.endAngle,
          yB = NB;
        if (JB <= mB) {
          for (; yB > mB;) yB -= 360;
          for (; yB < JB;) yB += 360;
          rB = yB >= JB && yB <= mB
        } else {
          for (; yB > JB;) yB -= 360;
          for (; yB < mB;) yB += 360;
          rB = yB >= mB && yB <= JB
        }
        return rB ? dB(dB({}, jB), {}, {
          radius: IB,
          angle: pB(yB, jB)
        }) : null
      }
  },
  5463: (BB, jB, zB) => {
    zB.d(jB, {
      D: () => ZB,
      F: () => HB,
      c: () => VB,
      g: () => fB,
      k: () => oB,
      n: () => MB,
      q: () => AB,
      t: () => YB,
      x: () => hB,
      z: () => TB
    });
    var QB = zB(5252),
      nB = zB.n(QB),
      dB = zB(5453),
      IB = zB.n(dB),
      NB = zB(5233),
      uB = zB.n(NB),
      UB = zB(5319),
      aB = zB.n(UB),
      pB = zB(5164),
      rB = zB.n(pB),
      sB = zB(62),
      JB = zB(5465),
      mB = zB(5229),
      yB = zB(5476),
      kB = zB(5485),
      GB = ["children"],
      LB = ["children"];

    function gB(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, QB)) {
            if (jB.indexOf(QB) >= 0) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function tB(BB) {
      return tB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, tB(BB)
    }
    var SB = {
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
      MB = function(BB) {
        return "string" === typeof BB ? BB : BB ? BB.displayName || BB.name || "Component" : ""
      },
      EB = null,
      iB = null,
      qB = function BB(jB) {
        if (jB === EB && Array.isArray(iB)) return iB;
        var zB = [];
        return sB.Children.forEach(jB, (function(jB) {
          IB()(jB) || ((0, JB.isFragment)(jB) ? zB = zB.concat(BB(jB.props.children)) : zB.push(jB))
        })), iB = zB, EB = jB, zB
      };

    function fB(BB, jB) {
      var zB = [],
        QB = [];
      return QB = Array.isArray(jB) ? jB.map((function(BB) {
        return MB(BB)
      })) : [MB(jB)], qB(BB).forEach((function(BB) {
        var jB = nB()(BB, "type.displayName") || nB()(BB, "type.name"); - 1 !== QB.indexOf(jB) && zB.push(BB)
      })), zB
    }

    function oB(BB, jB) {
      var zB = fB(BB, jB);
      return zB && zB[0]
    }
    var HB = function(BB) {
        if (!BB || !BB.props) return !1;
        var jB = BB.props,
          zB = jB.width,
          QB = jB.height;
        return !(!(0, mB.x)(zB) || zB <= 0 || !(0, mB.x)(QB) || QB <= 0)
      },
      DB = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      FB = function(BB) {
        return BB && BB.type && uB()(BB.type) && DB.indexOf(BB.type) >= 0
      },
      YB = function(BB) {
        return BB && "object" === tB(BB) && "clipDot" in BB
      },
      VB = function(BB, jB, zB) {
        if (!BB || "function" === typeof BB || "boolean" === typeof BB) return null;
        var QB = BB;
        if ((0, sB.isValidElement)(BB) && (QB = BB.props), !rB()(QB)) return null;
        var nB = {};
        return Object.keys(QB).forEach((function(BB) {
          var dB;
          (function(BB, jB, zB, QB) {
            var nB, dB = null !== (nB = null === kB.d || void 0 === kB.d ? void 0 : kB.d[QB]) && void 0 !== nB ? nB : [];
            return jB.startsWith("data-") || !aB()(BB) && (QB && dB.includes(jB) || kB.h.includes(jB)) || zB && kB.c.includes(jB)
          })(null === (dB = QB) || void 0 === dB ? void 0 : dB[BB], BB, jB, zB) && (nB[BB] = QB[BB])
        })), nB
      },
      hB = function BB(jB, zB) {
        if (jB === zB) return !0;
        var QB = sB.Children.count(jB);
        if (QB !== sB.Children.count(zB)) return !1;
        if (0 === QB) return !0;
        if (1 === QB) return XB(Array.isArray(jB) ? jB[0] : jB, Array.isArray(zB) ? zB[0] : zB);
        for (var nB = 0; nB < QB; nB++) {
          var dB = jB[nB],
            IB = zB[nB];
          if (Array.isArray(dB) || Array.isArray(IB)) {
            if (!BB(dB, IB)) return !1
          } else if (!XB(dB, IB)) return !1
        }
        return !0
      },
      XB = function(BB, jB) {
        if (IB()(BB) && IB()(jB)) return !0;
        if (!IB()(BB) && !IB()(jB)) {
          var zB = BB.props || {},
            QB = zB.children,
            nB = gB(zB, GB),
            dB = jB.props || {},
            NB = dB.children,
            uB = gB(dB, LB);
          return QB && NB ? (0, yB.c)(nB, uB) && hB(QB, NB) : !QB && !NB && (0, yB.c)(nB, uB)
        }
        return !1
      },
      ZB = function(BB, jB) {
        var zB = [],
          QB = {};
        return qB(BB).forEach((function(BB, nB) {
          if (FB(BB)) zB.push(BB);
          else if (BB) {
            var dB = MB(BB.type),
              IB = jB[dB] || {},
              NB = IB.handler,
              uB = IB.once;
            if (NB && (!uB || !QB[dB])) {
              var UB = NB(BB, dB, nB);
              zB.push(UB), QB[dB] = !0
            }
          }
        })), zB
      },
      AB = function(BB) {
        var jB = BB && BB.type;
        return jB && SB[jB] ? SB[jB] : null
      },
      TB = function(BB, jB) {
        return qB(jB).indexOf(BB)
      }
  },
  5476: (BB, jB, zB) => {
    function QB(BB, jB) {
      for (var zB in BB)
        if ({}.hasOwnProperty.call(BB, zB) && (!{}.hasOwnProperty.call(jB, zB) || BB[zB] !== jB[zB])) return !1;
      for (var QB in jB)
        if ({}.hasOwnProperty.call(jB, QB) && !{}.hasOwnProperty.call(BB, QB)) return !1;
      return !0
    }
    zB.d(jB, {
      c: () => QB
    })
  },
  6190: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => aB
    });
    var QB = zB(6048),
      nB = zB(6121),
      dB = zB(5463);

    function IB(BB) {
      return IB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, IB(BB)
    }

    function NB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function uB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? NB(Object(zB), !0).forEach((function(jB) {
          UB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : NB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function UB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != IB(BB) || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != IB(QB)) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == IB(jB) ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }
    var aB = function(BB) {
      var jB = BB.children,
        zB = BB.formattedGraphicalItems,
        IB = BB.legendWidth,
        NB = BB.legendContent,
        UB = (0, dB.k)(jB, QB.c);
      if (!UB) return null;
      var aB, pB = QB.c.defaultProps,
        rB = void 0 !== pB ? uB(uB({}, pB), UB.props) : {};
      return aB = UB.props && UB.props.payload ? UB.props && UB.props.payload : "children" === NB ? (zB || []).reduce((function(BB, jB) {
        var zB = jB.item,
          QB = jB.props,
          nB = QB.sectors || QB.data || [];
        return BB.concat(nB.map((function(BB) {
          return {
            type: UB.props.iconType || zB.props.legendType,
            value: BB.name,
            color: BB.fill,
            payload: BB
          }
        })))
      }), []) : (zB || []).map((function(BB) {
        var jB = BB.item,
          zB = jB.type.defaultProps,
          QB = void 0 !== zB ? uB(uB({}, zB), jB.props) : {},
          dB = QB.dataKey,
          IB = QB.name,
          NB = QB.legendType;
        return {
          inactive: QB.hide,
          dataKey: dB,
          type: rB.iconType || NB || "square",
          color: (0, nB.L)(jB),
          value: IB || dB,
          payload: QB
        }
      })), uB(uB(uB({}, rB), QB.c.getWithHeight(UB, IB)), {}, {
        payload: aB,
        item: UB
      })
    }
  },
  5985: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB
    });
    var QB = zB(5988),
      nB = zB.n(QB),
      dB = zB(5319),
      IB = zB.n(dB);

    function NB(BB, jB, zB) {
      return !0 === jB ? nB()(BB, zB) : IB()(jB) ? nB()(BB, jB) : BB
    }
  },
  5485: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => aB,
      d: () => UB,
      h: () => NB,
      j: () => pB,
      m: () => rB
    });
    var QB = zB(62),
      nB = zB(5164),
      dB = zB.n(nB);

    function IB(BB) {
      return IB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, IB(BB)
    }
    var NB = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "Ds", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      uB = ["points", "pathLength"],
      UB = {
        svg: ["viewBox", "children"],
        polygon: uB,
        polyline: uB
      },
      aB = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      pB = function(BB, jB) {
        if (!BB || "function" === typeof BB || "boolean" === typeof BB) return null;
        var zB = BB;
        if ((0, QB.isValidElement)(BB) && (zB = BB.props), !dB()(zB)) return null;
        var nB = {};
        return Object.keys(zB).forEach((function(BB) {
          aB.includes(BB) && (nB[BB] = jB || function(jB) {
            return zB[BB](zB, jB)
          })
        })), nB
      },
      rB = function(BB, jB, zB) {
        if (!dB()(BB) || "object" !== IB(BB)) return null;
        var QB = null;
        return Object.keys(BB).forEach((function(nB) {
          var dB = BB[nB];
          aB.includes(nB) && "function" === typeof dB && (QB || (QB = {}), QB[nB] = function(BB, jB, zB) {
            return function(QB) {
              return BB(jB, zB, QB), null
            }
          }(dB, jB, zB))
        })), QB
      }
  },
  5472: (BB, jB) => {
    var zB, QB = Symbol.for("react.element"),
      nB = Symbol.for("react.portal"),
      dB = Symbol.for("react.fragment"),
      IB = Symbol.for("react.strict_mode"),
      NB = Symbol.for("react.profiler"),
      uB = Symbol.for("react.provider"),
      UB = Symbol.for("react.context"),
      aB = Symbol.for("react.server_context"),
      pB = Symbol.for("react.forward_ref"),
      rB = Symbol.for("react.suspense"),
      sB = Symbol.for("react.suspense_list"),
      JB = Symbol.for("react.memo"),
      mB = Symbol.for("react.lazy"),
      yB = Symbol.for("react.offscreen");

    function kB(BB) {
      if ("object" === typeof BB && null !== BB) {
        var jB = BB.$$typeof;
        switch (jB) {
          case QB:
            switch (BB = BB.type) {
              case dB:
              case NB:
              case IB:
              case rB:
              case sB:
                return BB;
              default:
                switch (BB = BB && BB.$$typeof) {
                  case aB:
                  case UB:
                  case pB:
                  case mB:
                  case JB:
                  case uB:
                    return BB;
                  default:
                    return jB
                }
            }
          case nB:
            return jB
        }
      }
    }
    zB = Symbol.for("react.module.reference"), jB.isFragment = function(BB) {
      return kB(BB) === dB
    }
  },
  5465: (BB, jB, zB) => {
    BB.exports = zB(5472)
  },
  5146: (BB, jB, zB) => {
    function QB(BB) {
      var jB, zB, nB = "";
      if ("string" == typeof BB || "number" == typeof BB) nB += BB;
      else if ("object" == typeof BB)
        if (Array.isArray(BB)) {
          var dB = BB.length;
          for (jB = 0; jB < dB; jB++) BB[jB] && (zB = QB(BB[jB])) && (nB && (nB += " "), nB += zB)
        } else
          for (zB in BB) BB[zB] && (nB && (nB += " "), nB += zB);
      return nB
    }
    zB.d(jB, {
      e: () => nB
    });
    const nB = function() {
      for (var BB, jB, zB = 0, nB = "", dB = arguments.length; zB < dB; zB++)(BB = arguments[zB]) && (jB = QB(BB)) && (nB && (nB += " "), nB += jB);
      return nB
    }
  },
  6123: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      f: () => NB
    });
    var QB = zB(6132),
      nB = zB(6136);

    function dB() {
      var BB, jB, zB = (0, nB.e)().unknown(void 0),
        IB = zB.domain,
        NB = zB.range,
        uB = 0,
        UB = 1,
        aB = !1,
        pB = 0,
        rB = 0,
        sB = .5;

      function JB() {
        var zB = IB().length,
          QB = UB < uB,
          nB = QB ? UB : uB,
          dB = QB ? uB : UB;
        BB = (dB - nB) / Math.max(1, zB - pB + 2 * rB), aB && (BB = Math.floor(BB)), nB += (dB - nB - BB * (zB - pB)) * sB, jB = BB * (1 - pB), aB && (nB = Math.round(nB), jB = Math.round(jB));
        var JB = function(BB, jB, zB) {
          BB = +BB, jB = +jB, zB = (nB = arguments.length) < 2 ? (jB = BB, BB = 0, 1) : nB < 3 ? 1 : +zB;
          for (var QB = -1, nB = 0 | Math.max(0, Math.ceil((jB - BB) / zB)), dB = new Array(nB); ++QB < nB;) dB[QB] = BB + QB * zB;
          return dB
        }(zB).map((function(jB) {
          return nB + BB * jB
        }));
        return NB(QB ? JB.reverse() : JB)
      }
      return delete zB.unknown, zB.domain = function(BB) {
        return arguments.length ? (IB(BB), JB()) : IB()
      }, zB.range = function(BB) {
        return arguments.length ? ([uB, UB] = BB, uB = +uB, UB = +UB, JB()) : [uB, UB]
      }, zB.rangeRound = function(BB) {
        return [uB, UB] = BB, uB = +uB, UB = +UB, aB = !0, JB()
      }, zB.bandwidth = function() {
        return jB
      }, zB.step = function() {
        return BB
      }, zB.round = function(BB) {
        return arguments.length ? (aB = !!BB, JB()) : aB
      }, zB.padding = function(BB) {
        return arguments.length ? (pB = Math.min(1, rB = +BB), JB()) : pB
      }, zB.paddingInner = function(BB) {
        return arguments.length ? (pB = Math.min(1, BB), JB()) : pB
      }, zB.paddingOuter = function(BB) {
        return arguments.length ? (rB = +BB, JB()) : rB
      }, zB.align = function(BB) {
        return arguments.length ? (sB = Math.max(0, Math.min(1, BB)), JB()) : sB
      }, zB.copy = function() {
        return dB(IB(), [uB, UB]).round(aB).paddingInner(pB).paddingOuter(rB).align(sB)
      }, QB.f.apply(JB(), arguments)
    }

    function IB(BB) {
      var jB = BB.copy;
      return BB.padding = BB.paddingOuter, delete BB.paddingInner, delete BB.paddingOuter, BB.copy = function() {
        return IB(jB())
      }, BB
    }

    function NB() {
      return IB(dB.apply(null, arguments).paddingInner(1))
    }
  },
  6132: (BB, jB, zB) => {
    function QB(BB, jB) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(BB);
          break;
        default:
          this.range(jB).domain(BB)
      }
      return this
    }

    function nB(BB, jB) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof BB ? this.interpolator(BB) : this.range(BB);
          break;
        default:
          this.domain(BB), "function" === typeof jB ? this.interpolator(jB) : this.range(jB)
      }
      return this
    }
    zB.d(jB, {
      d: () => nB,
      f: () => QB
    })
  },
  6136: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => aB,
      g: () => UB
    });
    class QB extends Map {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NB;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: jB
            }
          }), null != BB)
          for (const [zB, QB] of BB) this.set(zB, QB)
      }
      get(BB) {
        return super.get(nB(this, BB))
      }
      has(BB) {
        return super.has(nB(this, BB))
      }
      set(BB, jB) {
        return super.set(dB(this, BB), jB)
      }
      delete(BB) {
        return super.delete(IB(this, BB))
      }
    }
    Set;

    function nB(BB, jB) {
      let {
        _intern: zB,
        _key: QB
      } = BB;
      const nB = QB(jB);
      return zB.has(nB) ? zB.get(nB) : jB
    }

    function dB(BB, jB) {
      let {
        _intern: zB,
        _key: QB
      } = BB;
      const nB = QB(jB);
      return zB.has(nB) ? zB.get(nB) : (zB.set(nB, jB), jB)
    }

    function IB(BB, jB) {
      let {
        _intern: zB,
        _key: QB
      } = BB;
      const nB = QB(jB);
      return zB.has(nB) && (jB = zB.get(nB), zB.delete(nB)), jB
    }

    function NB(BB) {
      return null !== BB && "object" === typeof BB ? BB.valueOf() : BB
    }
    var uB = zB(6132);
    const UB = Symbol("implicit");

    function aB() {
      var BB = new QB,
        jB = [],
        zB = [],
        nB = UB;

      function dB(QB) {
        let dB = BB.get(QB);
        if (void 0 === dB) {
          if (nB !== UB) return nB;
          BB.set(QB, dB = jB.push(QB) - 1)
        }
        return zB[dB % zB.length]
      }
      return dB.domain = function(zB) {
        if (!arguments.length) return jB.slice();
        jB = [], BB = new QB;
        for (const QB of zB) BB.has(QB) || BB.set(QB, jB.push(QB) - 1);
        return dB
      }, dB.range = function(BB) {
        return arguments.length ? (zB = Array.from(BB), dB) : zB.slice()
      }, dB.unknown = function(BB) {
        return arguments.length ? (nB = BB, dB) : nB
      }, dB.copy = function() {
        return aB(jB, zB).unknown(nB)
      }, uB.f.apply(dB, arguments), dB
    }
  },
  6198: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    Array.prototype.slice;

    function QB(BB) {
      return "object" === typeof BB && "length" in BB ? BB : Array.from(BB)
    }
  },
  6087: (BB, jB, zB) => {
    function QB(BB) {
      return function() {
        return BB
      }
    }
    zB.d(jB, {
      c: () => QB
    })
  },
  6090: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => UB
    });
    const QB = Math.PI,
      nB = 2 * QB,
      dB = 1e-6,
      IB = nB - dB;

    function NB(BB) {
      this._ += BB[0];
      for (let jB = 1, zB = BB.length; jB < zB; ++jB) this._ += arguments[jB] + BB[jB]
    }
    class uB {
      constructor(BB) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == BB ? NB : function(BB) {
          let jB = Math.floor(BB);
          if (!(jB >= 0)) throw new Error(`invalid digits: ${BB}`);
          if (jB > 15) return NB;
          const zB = 10 ** jB;
          return function(BB) {
            this._ += BB[0];
            for (let jB = 1, QB = BB.length; jB < QB; ++jB) this._ += Math.round(arguments[jB] * zB) / zB + BB[jB]
          }
        }(BB)
      }
      moveTo(BB, jB) {
        this._append`M${this._x0=this._x1=+BB},${this._y0=this._y1=+jB}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(BB, jB) {
        this._append`L${this._x1=+BB},${this._y1=+jB}`
      }
      quadraticCurveTo(BB, jB, zB, QB) {
        this._append`Q${+BB},${+jB},${this._x1=+zB},${this._y1=+QB}`
      }
      bezierCurveTo(BB, jB, zB, QB, nB, dB) {
        this._append`C${+BB},${+jB},${+zB},${+QB},${this._x1=+nB},${this._y1=+dB}`
      }
      arcTo(BB, jB, zB, nB, IB) {
        if (BB = +BB, jB = +jB, zB = +zB, nB = +nB, (IB = +IB) < 0) throw new Error(`negative radius: ${IB}`);
        let NB = this._x1,
          uB = this._y1,
          UB = zB - BB,
          aB = nB - jB,
          pB = NB - BB,
          rB = uB - jB,
          sB = pB * pB + rB * rB;
        if (null === this._x1) this._append`M${this._x1=BB},${this._y1=jB}`;
        else if (sB > dB)
          if (Math.abs(rB * UB - aB * pB) > dB && IB) {
            let JB = zB - NB,
              mB = nB - uB,
              yB = UB * UB + aB * aB,
              kB = JB * JB + mB * mB,
              GB = Math.sqrt(yB),
              LB = Math.sqrt(sB),
              gB = IB * Math.tan((QB - Math.acos((yB + sB - kB) / (2 * GB * LB))) / 2),
              tB = gB / LB,
              SB = gB / GB;
            Math.abs(tB - 1) > dB && this._append`L${BB+tB*pB},${jB+tB*rB}`, this._append`A${IB},${IB},0,0,${+(rB*JB>pB*mB)},${this._x1=BB+SB*UB},${this._y1=jB+SB*aB}`
          } else this._append`L${this._x1=BB},${this._y1=jB}`;
        else;
      }
      arc(BB, jB, zB, NB, uB, UB) {
        if (BB = +BB, jB = +jB, UB = !!UB, (zB = +zB) < 0) throw new Error(`negative radius: ${zB}`);
        let aB = zB * Math.cos(NB),
          pB = zB * Math.sin(NB),
          rB = BB + aB,
          sB = jB + pB,
          JB = 1 ^ UB,
          mB = UB ? NB - uB : uB - NB;
        null === this._x1 ? this._append`M${rB},${sB}` : (Math.abs(this._x1 - rB) > dB || Math.abs(this._y1 - sB) > dB) && this._append`L${rB},${sB}`, zB && (mB < 0 && (mB = mB % nB + nB), mB > IB ? this._append`A${zB},${zB},0,1,${JB},${BB-aB},${jB-pB}A${zB},${zB},0,1,${JB},${this._x1=rB},${this._y1=sB}` : mB > dB && this._append`A${zB},${zB},0,${+(mB>=QB)},${JB},${this._x1=BB+zB*Math.cos(uB)},${this._y1=jB+zB*Math.sin(uB)}`)
      }
      rect(BB, jB, zB, QB) {
        this._append`M${this._x0=this._x1=+BB},${this._y0=this._y1=+jB}h${zB=+zB}v${+QB}h${-zB}Z`
      }
      toString() {
        return this._
      }
    }

    function UB(BB) {
      let jB = 3;
      return BB.digits = function(zB) {
        if (!arguments.length) return jB;
        if (null == zB) jB = null;
        else {
          const BB = Math.floor(zB);
          if (!(BB >= 0)) throw new RangeError(`invalid digits: ${zB}`);
          jB = BB
        }
        return BB
      }, () => new uB(jB)
    }
    uB.prototype
  },
  5961: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = !0,
      nB = "Invariant failed";

    function dB(BB, jB) {
      if (!BB) {
        if (QB) throw new Error(nB);
        var zB = "function" === typeof jB ? jB() : jB,
          dB = zB ? "".concat(nB, ": ").concat(zB) : nB;
        throw new Error(dB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);