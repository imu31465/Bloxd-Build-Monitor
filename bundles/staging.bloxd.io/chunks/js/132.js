/*! For license information please see gw4e3a.132.fb5b08e3.chunk.js.LICENSE.txt */
export const id = 132;
export const ids = [132];
export const modules = {
  6699: function(BB, OB, GB) {
    var YB;
    ! function() {
      var DB, QB = 1e9,
        oB = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        jB = !0,
        yB = "[DecimalError] ",
        JB = yB + "Invalid argument: ",
        MB = yB + "Exponent out of range: ",
        PB = Math.floor,
        zB = Math.pow,
        lB = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        pB = 1e7,
        qB = 9007199254740991,
        ZB = PB(1286742750677284.5),
        NB = {};

      function RB(BB, OB) {
        var GB, YB, DB, QB, oB, yB, JB, MB, PB = BB.constructor,
          zB = PB.precision;
        if (!BB.s || !OB.s) return OB.s || (OB = new PB(BB)), jB ? KB(OB, zB) : OB;
        if (JB = BB.d, MB = OB.d, oB = BB.e, DB = OB.e, JB = JB.slice(), QB = oB - DB) {
          for (QB < 0 ? (YB = JB, QB = -QB, yB = MB.length) : (YB = MB, DB = oB, yB = JB.length), QB > (yB = (oB = Math.ceil(zB / 7)) > yB ? oB + 1 : yB + 1) && (QB = yB, YB.length = 1), YB.reverse(); QB--;) YB.push(0);
          YB.reverse()
        }
        for ((yB = JB.length) - (QB = MB.length) < 0 && (QB = yB, YB = MB, MB = JB, JB = YB), GB = 0; QB;) GB = (JB[--QB] = JB[QB] + MB[QB] + GB) / pB | 0, JB[QB] %= pB;
        for (GB && (JB.unshift(GB), ++DB), yB = JB.length; 0 == JB[--yB];) JB.pop();
        return OB.d = JB, OB.e = DB, jB ? KB(OB, zB) : OB
      }

      function WB(BB, OB, GB) {
        if (BB !== ~~BB || BB < OB || BB > GB) throw Error(JB + BB)
      }

      function AB(BB) {
        var OB, GB, YB, DB = BB.length - 1,
          QB = "",
          oB = BB[0];
        if (DB > 0) {
          for (QB += oB, OB = 1; OB < DB; OB++)(GB = 7 - (YB = BB[OB] + "").length) && (QB += fB(GB)), QB += YB;
          (GB = 7 - (YB = (oB = BB[OB]) + "").length) && (QB += fB(GB))
        } else if (0 === oB) return "0";
        for (; oB % 10 === 0;) oB /= 10;
        return QB + oB
      }
      NB.absoluteValue = NB.abs = function() {
        var BB = new this.constructor(this);
        return BB.s && (BB.s = 1), BB
      }, NB.comparedTo = NB.cmp = function(BB) {
        var OB, GB, YB, DB, QB = this;
        if (BB = new QB.constructor(BB), QB.s !== BB.s) return QB.s || -BB.s;
        if (QB.e !== BB.e) return QB.e > BB.e ^ QB.s < 0 ? 1 : -1;
        for (OB = 0, GB = (YB = QB.d.length) < (DB = BB.d.length) ? YB : DB; OB < GB; ++OB)
          if (QB.d[OB] !== BB.d[OB]) return QB.d[OB] > BB.d[OB] ^ QB.s < 0 ? 1 : -1;
        return YB === DB ? 0 : YB > DB ^ QB.s < 0 ? 1 : -1
      }, NB.decimalPlaces = NB.dp = function() {
        var BB = this,
          OB = BB.d.length - 1,
          GB = 7 * (OB - BB.e);
        if (OB = BB.d[OB])
          for (; OB % 10 == 0; OB /= 10) GB--;
        return GB < 0 ? 0 : GB
      }, NB.dividedBy = NB.div = function(BB) {
        return VB(this, new this.constructor(BB))
      }, NB.dividedToIntegerBy = NB.idiv = function(BB) {
        var OB = this.constructor;
        return KB(VB(this, new OB(BB), 0, 1), OB.precision)
      }, NB.equals = NB.eq = function(BB) {
        return !this.cmp(BB)
      }, NB.exponent = function() {
        return nB(this)
      }, NB.greaterThan = NB.gt = function(BB) {
        return this.cmp(BB) > 0
      }, NB.greaterThanOrEqualTo = NB.gte = function(BB) {
        return this.cmp(BB) >= 0
      }, NB.isInteger = NB.isint = function() {
        return this.e > this.d.length - 2
      }, NB.isNegative = NB.isneg = function() {
        return this.s < 0
      }, NB.isPositive = NB.ispos = function() {
        return this.s > 0
      }, NB.isZero = function() {
        return 0 === this.s
      }, NB.lessThan = NB.lt = function(BB) {
        return this.cmp(BB) < 0
      }, NB.lessThanOrEqualTo = NB.lte = function(BB) {
        return this.cmp(BB) < 1
      }, NB.logarithm = NB.log = function(BB) {
        var OB, GB = this,
          YB = GB.constructor,
          QB = YB.precision,
          oB = QB + 5;
        if (void 0 === BB) BB = new YB(10);
        else if ((BB = new YB(BB)).s < 1 || BB.eq(DB)) throw Error(yB + "NaN");
        if (GB.s < 1) throw Error(yB + (GB.s ? "NaN" : "-Infinity"));
        return GB.eq(DB) ? new YB(0) : (jB = !1, OB = VB(kB(GB, oB), kB(BB, oB), oB), jB = !0, KB(OB, QB))
      }, NB.minus = NB.sub = function(BB) {
        var OB = this;
        return BB = new OB.constructor(BB), OB.s == BB.s ? uB(OB, BB) : RB(OB, (BB.s = -BB.s, BB))
      }, NB.modulo = NB.mod = function(BB) {
        var OB, GB = this,
          YB = GB.constructor,
          DB = YB.precision;
        if (!(BB = new YB(BB)).s) throw Error(yB + "NaN");
        return GB.s ? (jB = !1, OB = VB(GB, BB, 0, 1).times(BB), jB = !0, GB.minus(OB)) : KB(new YB(GB), DB)
      }, NB.naturalExponential = NB.exp = function() {
        return SB(this)
      }, NB.naturalLogarithm = NB.ln = function() {
        return kB(this)
      }, NB.negated = NB.neg = function() {
        var BB = new this.constructor(this);
        return BB.s = -BB.s || 0, BB
      }, NB.plus = NB.add = function(BB) {
        var OB = this;
        return BB = new OB.constructor(BB), OB.s == BB.s ? RB(OB, BB) : uB(OB, (BB.s = -BB.s, BB))
      }, NB.precision = NB.sd = function(BB) {
        var OB, GB, YB, DB = this;
        if (void 0 !== BB && BB !== !!BB && 1 !== BB && 0 !== BB) throw Error(JB + BB);
        if (OB = nB(DB) + 1, GB = 7 * (YB = DB.d.length - 1) + 1, YB = DB.d[YB]) {
          for (; YB % 10 == 0; YB /= 10) GB--;
          for (YB = DB.d[0]; YB >= 10; YB /= 10) GB++
        }
        return BB && OB > GB ? OB : GB
      }, NB.squareRoot = NB.sqrt = function() {
        var BB, OB, GB, YB, DB, QB, oB, JB = this,
          MB = JB.constructor;
        if (JB.s < 1) {
          if (!JB.s) return new MB(0);
          throw Error(yB + "NaN")
        }
        for (BB = nB(JB), jB = !1, 0 == (DB = Math.sqrt(+JB)) || DB == 1 / 0 ? (((OB = AB(JB.d)).length + BB) % 2 == 0 && (OB += "0"), DB = Math.sqrt(OB), BB = PB((BB + 1) / 2) - (BB < 0 || BB % 2), YB = new MB(OB = DB == 1 / 0 ? "1e" + BB : (OB = DB.toExponential()).slice(0, OB.indexOf("e") + 1) + BB)) : YB = new MB(DB.toString()), DB = oB = (GB = MB.precision) + 3;;)
          if (YB = (QB = YB).plus(VB(JB, QB, oB + 2)).times(.5), AB(QB.d).slice(0, oB) === (OB = AB(YB.d)).slice(0, oB)) {
            if (OB = OB.slice(oB - 3, oB + 1), DB == oB && "4999" == OB) {
              if (KB(QB, GB + 1, 0), QB.times(QB).eq(JB)) {
                YB = QB;
                break
              }
            } else if ("9999" != OB) break;
            oB += 4
          } return jB = !0, KB(YB, GB)
      }, NB.times = NB.mul = function(BB) {
        var OB, GB, YB, DB, QB, oB, yB, JB, MB, PB = this,
          zB = PB.constructor,
          lB = PB.d,
          qB = (BB = new zB(BB)).d;
        if (!PB.s || !BB.s) return new zB(0);
        for (BB.s *= PB.s, GB = PB.e + BB.e, (JB = lB.length) < (MB = qB.length) && (QB = lB, lB = qB, qB = QB, oB = JB, JB = MB, MB = oB), QB = [], YB = oB = JB + MB; YB--;) QB.push(0);
        for (YB = MB; --YB >= 0;) {
          for (OB = 0, DB = JB + YB; DB > YB;) yB = QB[DB] + qB[YB] * lB[DB - YB - 1] + OB, QB[DB--] = yB % pB | 0, OB = yB / pB | 0;
          QB[DB] = (QB[DB] + OB) % pB | 0
        }
        for (; !QB[--oB];) QB.pop();
        return OB ? ++GB : QB.shift(), BB.d = QB, BB.e = GB, jB ? KB(BB, zB.precision) : BB
      }, NB.toDecimalPlaces = NB.todp = function(BB, OB) {
        var GB = this,
          YB = GB.constructor;
        return GB = new YB(GB), void 0 === BB ? GB : (WB(BB, 0, QB), void 0 === OB ? OB = YB.rounding : WB(OB, 0, 8), KB(GB, BB + nB(GB) + 1, OB))
      }, NB.toExponential = function(BB, OB) {
        var GB, YB = this,
          DB = YB.constructor;
        return void 0 === BB ? GB = mB(YB, !0) : (WB(BB, 0, QB), void 0 === OB ? OB = DB.rounding : WB(OB, 0, 8), GB = mB(YB = KB(new DB(YB), BB + 1, OB), !0, BB + 1)), GB
      }, NB.toFixed = function(BB, OB) {
        var GB, YB, DB = this,
          oB = DB.constructor;
        return void 0 === BB ? mB(DB) : (WB(BB, 0, QB), void 0 === OB ? OB = oB.rounding : WB(OB, 0, 8), GB = mB((YB = KB(new oB(DB), BB + nB(DB) + 1, OB)).abs(), !1, BB + nB(YB) + 1), DB.isneg() && !DB.isZero() ? "-" + GB : GB)
      }, NB.toInteger = NB.toint = function() {
        var BB = this,
          OB = BB.constructor;
        return KB(new OB(BB), nB(BB) + 1, OB.rounding)
      }, NB.toNumber = function() {
        return +this
      }, NB.toPower = NB.pow = function(BB) {
        var OB, GB, YB, QB, oB, JB, MB = this,
          zB = MB.constructor,
          lB = +(BB = new zB(BB));
        if (!BB.s) return new zB(DB);
        if (!(MB = new zB(MB)).s) {
          if (BB.s < 1) throw Error(yB + "Infinity");
          return MB
        }
        if (MB.eq(DB)) return MB;
        if (YB = zB.precision, BB.eq(DB)) return KB(MB, YB);
        if (JB = (OB = BB.e) >= (GB = BB.d.length - 1), oB = MB.s, JB) {
          if ((GB = lB < 0 ? -lB : lB) <= qB) {
            for (QB = new zB(DB), OB = Math.ceil(YB / 7 + 4), jB = !1; GB % 2 && IB((QB = QB.times(MB)).d, OB), 0 !== (GB = PB(GB / 2));) IB((MB = MB.times(MB)).d, OB);
            return jB = !0, BB.s < 0 ? new zB(DB).div(QB) : KB(QB, YB)
          }
        } else if (oB < 0) throw Error(yB + "NaN");
        return oB = oB < 0 && 1 & BB.d[Math.max(OB, GB)] ? -1 : 1, MB.s = 1, jB = !1, QB = BB.times(kB(MB, YB + 12)), jB = !0, (QB = SB(QB)).s = oB, QB
      }, NB.toPrecision = function(BB, OB) {
        var GB, YB, DB = this,
          oB = DB.constructor;
        return void 0 === BB ? YB = mB(DB, (GB = nB(DB)) <= oB.toExpNeg || GB >= oB.toExpPos) : (WB(BB, 1, QB), void 0 === OB ? OB = oB.rounding : WB(OB, 0, 8), YB = mB(DB = KB(new oB(DB), BB, OB), BB <= (GB = nB(DB)) || GB <= oB.toExpNeg, BB)), YB
      }, NB.toSignificantDigits = NB.tosd = function(BB, OB) {
        var GB = this.constructor;
        return void 0 === BB ? (BB = GB.precision, OB = GB.rounding) : (WB(BB, 1, QB), void 0 === OB ? OB = GB.rounding : WB(OB, 0, 8)), KB(new GB(this), BB, OB)
      }, NB.toString = NB.valueOf = NB.val = NB.toJSON = function() {
        var BB = this,
          OB = nB(BB),
          GB = BB.constructor;
        return mB(BB, OB <= GB.toExpNeg || OB >= GB.toExpPos)
      };
      var VB = function() {
        function BB(BB, OB) {
          var GB, YB = 0,
            DB = BB.length;
          for (BB = BB.slice(); DB--;) GB = BB[DB] * OB + YB, BB[DB] = GB % pB | 0, YB = GB / pB | 0;
          return YB && BB.unshift(YB), BB
        }

        function OB(BB, OB, GB, YB) {
          var DB, QB;
          if (GB != YB) QB = GB > YB ? 1 : -1;
          else
            for (DB = QB = 0; DB < GB; DB++)
              if (BB[DB] != OB[DB]) {
                QB = BB[DB] > OB[DB] ? 1 : -1;
                break
              } return QB
        }

        function GB(BB, OB, GB) {
          for (var YB = 0; GB--;) BB[GB] -= YB, YB = BB[GB] < OB[GB] ? 1 : 0, BB[GB] = YB * pB + BB[GB] - OB[GB];
          for (; !BB[0] && BB.length > 1;) BB.shift()
        }
        return function(YB, DB, QB, oB) {
          var jB, JB, MB, PB, zB, lB, qB, ZB, NB, RB, WB, AB, VB, SB, UB, fB, kB, dB, uB = YB.constructor,
            mB = YB.s == DB.s ? 1 : -1,
            IB = YB.d,
            FB = DB.d;
          if (!YB.s) return new uB(YB);
          if (!DB.s) throw Error(yB + "Division by zero");
          for (JB = YB.e - DB.e, kB = FB.length, UB = IB.length, ZB = (qB = new uB(mB)).d = [], MB = 0; FB[MB] == (IB[MB] || 0);) ++MB;
          if (FB[MB] > (IB[MB] || 0) && --JB, (AB = null == QB ? QB = uB.precision : oB ? QB + (nB(YB) - nB(DB)) + 1 : QB) < 0) return new uB(0);
          if (AB = AB / 7 + 2 | 0, MB = 0, 1 == kB)
            for (PB = 0, FB = FB[0], AB++;
              (MB < UB || PB) && AB--; MB++) VB = PB * pB + (IB[MB] || 0), ZB[MB] = VB / FB | 0, PB = VB % FB | 0;
          else {
            for ((PB = pB / (FB[0] + 1) | 0) > 1 && (FB = BB(FB, PB), IB = BB(IB, PB), kB = FB.length, UB = IB.length), SB = kB, RB = (NB = IB.slice(0, kB)).length; RB < kB;) NB[RB++] = 0;
            (dB = FB.slice()).unshift(0), fB = FB[0], FB[1] >= pB / 2 && ++fB;
            do {
              PB = 0, (jB = OB(FB, NB, kB, RB)) < 0 ? (WB = NB[0], kB != RB && (WB = WB * pB + (NB[1] || 0)), (PB = WB / fB | 0) > 1 ? (PB >= pB && (PB = pB - 1), 1 == (jB = OB(zB = BB(FB, PB), NB, lB = zB.length, RB = NB.length)) && (PB--, GB(zB, kB < lB ? dB : FB, lB))) : (0 == PB && (jB = PB = 1), zB = FB.slice()), (lB = zB.length) < RB && zB.unshift(0), GB(NB, zB, RB), -1 == jB && (jB = OB(FB, NB, kB, RB = NB.length)) < 1 && (PB++, GB(NB, kB < RB ? dB : FB, RB)), RB = NB.length) : 0 === jB && (PB++, NB = [0]), ZB[MB++] = PB, jB && NB[0] ? NB[RB++] = IB[SB] || 0 : (NB = [IB[SB]], RB = 1)
            } while ((SB++ < UB || void 0 !== NB[0]) && AB--)
          }
          return ZB[0] || ZB.shift(), qB.e = JB, KB(qB, oB ? QB + nB(qB) + 1 : QB)
        }
      }();

      function SB(BB, OB) {
        var GB, YB, QB, oB, yB, JB = 0,
          PB = 0,
          lB = BB.constructor,
          pB = lB.precision;
        if (nB(BB) > 16) throw Error(MB + nB(BB));
        if (!BB.s) return new lB(DB);
        for (null == OB ? (jB = !1, yB = pB) : yB = OB, oB = new lB(.03125); BB.abs().gte(.1);) BB = BB.times(oB), PB += 5;
        for (yB += Math.log(zB(2, PB)) / Math.LN10 * 2 + 5 | 0, GB = YB = QB = new lB(DB), lB.precision = yB;;) {
          if (YB = KB(YB.times(BB), yB), GB = GB.times(++JB), AB((oB = QB.plus(VB(YB, GB, yB))).d).slice(0, yB) === AB(QB.d).slice(0, yB)) {
            for (; PB--;) QB = KB(QB.times(QB), yB);
            return lB.precision = pB, null == OB ? (jB = !0, KB(QB, pB)) : QB
          }
          QB = oB
        }
      }

      function nB(BB) {
        for (var OB = 7 * BB.e, GB = BB.d[0]; GB >= 10; GB /= 10) OB++;
        return OB
      }

      function UB(BB, OB, GB) {
        if (OB > BB.LN10.sd()) throw jB = !0, GB && (BB.precision = GB), Error(yB + "LN10 precision limit exceeded");
        return KB(new BB(BB.LN10), OB)
      }

      function fB(BB) {
        for (var OB = ""; BB--;) OB += "0";
        return OB
      }

      function kB(BB, OB) {
        var GB, YB, QB, oB, JB, MB, PB, zB, lB, pB = 1,
          qB = BB,
          ZB = qB.d,
          NB = qB.constructor,
          RB = NB.precision;
        if (qB.s < 1) throw Error(yB + (qB.s ? "NaN" : "-Infinity"));
        if (qB.eq(DB)) return new NB(0);
        if (null == OB ? (jB = !1, zB = RB) : zB = OB, qB.eq(10)) return null == OB && (jB = !0), UB(NB, zB);
        if (zB += 10, NB.precision = zB, YB = (GB = AB(ZB)).charAt(0), oB = nB(qB), !(Math.abs(oB) < 15e14)) return PB = UB(NB, zB + 2, RB).times(oB + ""), qB = kB(new NB(YB + "." + GB.slice(1)), zB - 10).plus(PB), NB.precision = RB, null == OB ? (jB = !0, KB(qB, RB)) : qB;
        for (; YB < 7 && 1 != YB || 1 == YB && GB.charAt(1) > 3;) YB = (GB = AB((qB = qB.times(BB)).d)).charAt(0), pB++;
        for (oB = nB(qB), YB > 1 ? (qB = new NB("0." + GB), oB++) : qB = new NB(YB + "." + GB.slice(1)), MB = JB = qB = VB(qB.minus(DB), qB.plus(DB), zB), lB = KB(qB.times(qB), zB), QB = 3;;) {
          if (JB = KB(JB.times(lB), zB), AB((PB = MB.plus(VB(JB, new NB(QB), zB))).d).slice(0, zB) === AB(MB.d).slice(0, zB)) return MB = MB.times(2), 0 !== oB && (MB = MB.plus(UB(NB, zB + 2, RB).times(oB + ""))), MB = VB(MB, new NB(pB), zB), NB.precision = RB, null == OB ? (jB = !0, KB(MB, RB)) : MB;
          MB = PB, QB += 2
        }
      }

      function dB(BB, OB) {
        var GB, YB, DB;
        for ((GB = OB.indexOf(".")) > -1 && (OB = OB.replace(".", "")), (YB = OB.search(/e/i)) > 0 ? (GB < 0 && (GB = YB), GB += +OB.slice(YB + 1), OB = OB.substring(0, YB)) : GB < 0 && (GB = OB.length), YB = 0; 48 === OB.charCodeAt(YB);) ++YB;
        for (DB = OB.length; 48 === OB.charCodeAt(DB - 1);) --DB;
        if (OB = OB.slice(YB, DB)) {
          if (DB -= YB, GB = GB - YB - 1, BB.e = PB(GB / 7), BB.d = [], YB = (GB + 1) % 7, GB < 0 && (YB += 7), YB < DB) {
            for (YB && BB.d.push(+OB.slice(0, YB)), DB -= 7; YB < DB;) BB.d.push(+OB.slice(YB, YB += 7));
            YB = 7 - (OB = OB.slice(YB)).length
          } else YB -= DB;
          for (; YB--;) OB += "0";
          if (BB.d.push(+OB), jB && (BB.e > ZB || BB.e < -ZB)) throw Error(MB + GB)
        } else BB.s = 0, BB.e = 0, BB.d = [0];
        return BB
      }

      function KB(BB, OB, GB) {
        var YB, DB, QB, oB, yB, JB, lB, qB, NB = BB.d;
        for (oB = 1, QB = NB[0]; QB >= 10; QB /= 10) oB++;
        if ((YB = OB - oB) < 0) YB += 7, DB = OB, lB = NB[qB = 0];
        else {
          if ((qB = Math.ceil((YB + 1) / 7)) >= (QB = NB.length)) return BB;
          for (lB = QB = NB[qB], oB = 1; QB >= 10; QB /= 10) oB++;
          DB = (YB %= 7) - 7 + oB
        }
        if (void 0 !== GB && (yB = lB / (QB = zB(10, oB - DB - 1)) % 10 | 0, JB = OB < 0 || void 0 !== NB[qB + 1] || lB % QB, JB = GB < 4 ? (yB || JB) && (0 == GB || GB == (BB.s < 0 ? 3 : 2)) : yB > 5 || 5 == yB && (4 == GB || JB || 6 == GB && (YB > 0 ? DB > 0 ? lB / zB(10, oB - DB) : 0 : NB[qB - 1]) % 10 & 1 || GB == (BB.s < 0 ? 8 : 7))), OB < 1 || !NB[0]) return JB ? (QB = nB(BB), NB.length = 1, OB = OB - QB - 1, NB[0] = zB(10, (7 - OB % 7) % 7), BB.e = PB(-OB / 7) || 0) : (NB.length = 1, NB[0] = BB.e = BB.s = 0), BB;
        if (0 == YB ? (NB.length = qB, QB = 1, qB--) : (NB.length = qB + 1, QB = zB(10, 7 - YB), NB[qB] = DB > 0 ? (lB / zB(10, oB - DB) % zB(10, DB) | 0) * QB : 0), JB)
          for (;;) {
            if (0 == qB) {
              (NB[0] += QB) == pB && (NB[0] = 1, ++BB.e);
              break
            }
            if (NB[qB] += QB, NB[qB] != pB) break;
            NB[qB--] = 0, QB = 1
          }
        for (YB = NB.length; 0 === NB[--YB];) NB.pop();
        if (jB && (BB.e > ZB || BB.e < -ZB)) throw Error(MB + nB(BB));
        return BB
      }

      function uB(BB, OB) {
        var GB, YB, DB, QB, oB, yB, JB, MB, PB, zB, lB = BB.constructor,
          qB = lB.precision;
        if (!BB.s || !OB.s) return OB.s ? OB.s = -OB.s : OB = new lB(BB), jB ? KB(OB, qB) : OB;
        if (JB = BB.d, zB = OB.d, YB = OB.e, MB = BB.e, JB = JB.slice(), oB = MB - YB) {
          for ((PB = oB < 0) ? (GB = JB, oB = -oB, yB = zB.length) : (GB = zB, YB = MB, yB = JB.length), oB > (DB = Math.max(Math.ceil(qB / 7), yB) + 2) && (oB = DB, GB.length = 1), GB.reverse(), DB = oB; DB--;) GB.push(0);
          GB.reverse()
        } else {
          for ((PB = (DB = JB.length) < (yB = zB.length)) && (yB = DB), DB = 0; DB < yB; DB++)
            if (JB[DB] != zB[DB]) {
              PB = JB[DB] < zB[DB];
              break
            } oB = 0
        }
        for (PB && (GB = JB, JB = zB, zB = GB, OB.s = -OB.s), yB = JB.length, DB = zB.length - yB; DB > 0; --DB) JB[yB++] = 0;
        for (DB = zB.length; DB > oB;) {
          if (JB[--DB] < zB[DB]) {
            for (QB = DB; QB && 0 === JB[--QB];) JB[QB] = pB - 1;
            --JB[QB], JB[DB] += pB
          }
          JB[DB] -= zB[DB]
        }
        for (; 0 === JB[--yB];) JB.pop();
        for (; 0 === JB[0]; JB.shift()) --YB;
        return JB[0] ? (OB.d = JB, OB.e = YB, jB ? KB(OB, qB) : OB) : new lB(0)
      }

      function mB(BB, OB, GB) {
        var YB, DB = nB(BB),
          QB = AB(BB.d),
          oB = QB.length;
        return OB ? (GB && (YB = GB - oB) > 0 ? QB = QB.charAt(0) + "." + QB.slice(1) + fB(YB) : oB > 1 && (QB = QB.charAt(0) + "." + QB.slice(1)), QB = QB + (DB < 0 ? "e" : "e+") + DB) : DB < 0 ? (QB = "0." + fB(-DB - 1) + QB, GB && (YB = GB - oB) > 0 && (QB += fB(YB))) : DB >= oB ? (QB += fB(DB + 1 - oB), GB && (YB = GB - DB - 1) > 0 && (QB = QB + "." + fB(YB))) : ((YB = DB + 1) < oB && (QB = QB.slice(0, YB) + "." + QB.slice(YB)), GB && (YB = GB - oB) > 0 && (DB + 1 === oB && (QB += "."), QB += fB(YB))), BB.s < 0 ? "-" + QB : QB
      }

      function IB(BB, OB) {
        if (BB.length > OB) return BB.length = OB, !0
      }

      function FB(BB) {
        if (!BB || "object" !== typeof BB) throw Error(yB + "Object expected");
        var OB, GB, YB, DB = ["precision", 1, QB, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (OB = 0; OB < DB.length; OB += 3)
          if (void 0 !== (YB = BB[GB = DB[OB]])) {
            if (!(PB(YB) === YB && YB >= DB[OB + 1] && YB <= DB[OB + 2])) throw Error(JB + GB + ": " + YB);
            this[GB] = YB
          } if (void 0 !== (YB = BB[GB = "LN10"])) {
          if (YB != Math.LN10) throw Error(JB + GB + ": " + YB);
          this[GB] = new this(YB)
        }
        return this
      }
      oB = function BB(OB) {
        var GB, YB, DB;

        function QB(BB) {
          var OB = this;
          if (!(OB instanceof QB)) return new QB(BB);
          if (OB.constructor = QB, BB instanceof QB) return OB.s = BB.s, OB.e = BB.e, void(OB.d = (BB = BB.d) ? BB.slice() : BB);
          if ("number" === typeof BB) {
            if (0 * BB !== 0) throw Error(JB + BB);
            if (BB > 0) OB.s = 1;
            else {
              if (!(BB < 0)) return OB.s = 0, OB.e = 0, void(OB.d = [0]);
              BB = -BB, OB.s = -1
            }
            return BB === ~~BB && BB < 1e7 ? (OB.e = 0, void(OB.d = [BB])) : dB(OB, BB.toString())
          }
          if ("string" !== typeof BB) throw Error(JB + BB);
          if (45 === BB.charCodeAt(0) ? (BB = BB.slice(1), OB.s = -1) : OB.s = 1, !lB.test(BB)) throw Error(JB + BB);
          dB(OB, BB)
        }
        if (QB.prototype = NB, QB.ROUND_UP = 0, QB.ROUND_DOWN = 1, QB.ROUND_CEIL = 2, QB.ROUND_FLOOR = 3, QB.ROUND_HALF_UP = 4, QB.ROUND_HALF_DOWN = 5, QB.ROUND_HALF_EVEN = 6, QB.ROUND_HALF_CEIL = 7, QB.ROUND_HALF_FLOOR = 8, QB.clone = BB, QB.config = QB.set = FB, void 0 === OB && (OB = {}), OB)
          for (DB = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], GB = 0; GB < DB.length;) OB.hasOwnProperty(YB = DB[GB++]) || (OB[YB] = this[YB]);
        return QB.config(OB), QB
      }(oB), oB.default = oB.Decimal = oB, DB = new oB(1), void 0 === (YB = function() {
        return oB
      }.call(OB, GB, OB, BB)) || (BB.exports = YB)
    }()
  },
  6271: (BB, OB, GB) => {
    var YB = GB(5766)(GB(5608), "DataView");
    BB.exports = YB
  },
  5745: (BB, OB, GB) => {
    var YB = GB(5754),
      DB = GB(5810),
      QB = GB(5816),
      oB = GB(5818),
      jB = GB(5826);

    function yB(BB) {
      var OB = -1,
        GB = null == BB ? 0 : BB.length;
      for (this.clear(); ++OB < GB;) {
        var YB = BB[OB];
        this.set(YB[0], YB[1])
      }
    }
    yB.prototype.clear = YB, yB.prototype.delete = DB, yB.prototype.get = QB, yB.prototype.has = oB, yB.prototype.set = jB, BB.exports = yB
  },
  5833: (BB, OB, GB) => {
    var YB = GB(5836),
      DB = GB(5839),
      QB = GB(5855),
      oB = GB(5859),
      jB = GB(5863);

    function yB(BB) {
      var OB = -1,
        GB = null == BB ? 0 : BB.length;
      for (this.clear(); ++OB < GB;) {
        var YB = BB[OB];
        this.set(YB[0], YB[1])
      }
    }
    yB.prototype.clear = YB, yB.prototype.delete = DB, yB.prototype.get = QB, yB.prototype.has = oB, yB.prototype.set = jB, BB.exports = yB
  },
  5872: (BB, OB, GB) => {
    var YB = GB(5766)(GB(5608), "Map");
    BB.exports = YB
  },
  5736: (BB, OB, GB) => {
    var YB = GB(5742),
      DB = GB(5874),
      QB = GB(5895),
      oB = GB(5902),
      jB = GB(5910);

    function yB(BB) {
      var OB = -1,
        GB = null == BB ? 0 : BB.length;
      for (this.clear(); ++OB < GB;) {
        var YB = BB[OB];
        this.set(YB[0], YB[1])
      }
    }
    yB.prototype.clear = YB, yB.prototype.delete = DB, yB.prototype.get = QB, yB.prototype.has = oB, yB.prototype.set = jB, BB.exports = yB
  },
  6277: (BB, OB, GB) => {
    var YB = GB(5766)(GB(5608), "Promise");
    BB.exports = YB
  },
  6281: (BB, OB, GB) => {
    var YB = GB(5766)(GB(5608), "Set");
    BB.exports = YB
  },
  6116: (BB, OB, GB) => {
    var YB = GB(5736),
      DB = GB(6122),
      QB = GB(6127);

    function oB(BB) {
      var OB = -1,
        GB = null == BB ? 0 : BB.length;
      for (this.__data__ = new YB; ++OB < GB;) this.add(BB[OB])
    }
    oB.prototype.add = oB.prototype.push = DB, oB.prototype.has = QB, BB.exports = oB
  },
  6073: (BB, OB, GB) => {
    var YB = GB(5833),
      DB = GB(6075),
      QB = GB(6079),
      oB = GB(6082),
      jB = GB(6084),
      yB = GB(6092);

    function JB(BB) {
      var OB = this.__data__ = new YB(BB);
      this.size = OB.size
    }
    JB.prototype.clear = DB, JB.prototype.delete = QB, JB.prototype.get = oB, JB.prototype.has = jB, JB.prototype.set = yB, BB.exports = JB
  },
  5643: (BB, OB, GB) => {
    var YB = GB(5608).Symbol;
    BB.exports = YB
  },
  6146: (BB, OB, GB) => {
    var YB = GB(5608).Uint8Array;
    BB.exports = YB
  },
  6283: (BB, OB, GB) => {
    var YB = GB(5766)(GB(5608), "WeakMap");
    BB.exports = YB
  },
  6433: BB => {
    BB.exports = function(BB, OB, GB) {
      switch (GB.length) {
        case 0:
          return BB.call(OB);
        case 1:
          return BB.call(OB, GB[0]);
        case 2:
          return BB.call(OB, GB[0], GB[1]);
        case 3:
          return BB.call(OB, GB[0], GB[1], GB[2])
      }
      return BB.apply(OB, GB)
    }
  },
  6751: BB => {
    BB.exports = function(BB, OB) {
      for (var GB = -1, YB = null == BB ? 0 : BB.length; ++GB < YB;)
        if (!OB(BB[GB], GB, BB)) return !1;
      return !0
    }
  },
  6184: BB => {
    BB.exports = function(BB, OB) {
      for (var GB = -1, YB = null == BB ? 0 : BB.length, DB = 0, QB = []; ++GB < YB;) {
        var oB = BB[GB];
        OB(oB, GB, BB) && (QB[DB++] = oB)
      }
      return QB
    }
  },
  6505: (BB, OB, GB) => {
    var YB = GB(6511);
    BB.exports = function(BB, OB) {
      return !!(null == BB ? 0 : BB.length) && YB(BB, OB, 0) > -1
    }
  },
  6535: BB => {
    BB.exports = function(BB, OB, GB) {
      for (var YB = -1, DB = null == BB ? 0 : BB.length; ++YB < DB;)
        if (GB(OB, BB[YB])) return !0;
      return !1
    }
  },
  6196: (BB, OB, GB) => {
    var YB = GB(6205),
      DB = GB(6041),
      QB = GB(5684),
      oB = GB(6213),
      jB = GB(6007),
      yB = GB(6227),
      JB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB, OB) {
      var GB = QB(BB),
        MB = !GB && DB(BB),
        PB = !GB && !MB && oB(BB),
        zB = !GB && !MB && !PB && yB(BB),
        lB = GB || MB || PB || zB,
        pB = lB ? YB(BB.length, String) : [],
        qB = pB.length;
      for (var ZB in BB) !OB && !JB.call(BB, ZB) || lB && ("length" == ZB || PB && ("offset" == ZB || "parent" == ZB) || zB && ("buffer" == ZB || "byteLength" == ZB || "byteOffset" == ZB) || jB(ZB, qB)) || pB.push(ZB);
      return pB
    }
  },
  5924: BB => {
    BB.exports = function(BB, OB) {
      for (var GB = -1, YB = null == BB ? 0 : BB.length, DB = Array(YB); ++GB < YB;) DB[GB] = OB(BB[GB], GB, BB);
      return DB
    }
  },
  6033: BB => {
    BB.exports = function(BB, OB) {
      for (var GB = -1, YB = OB.length, DB = BB.length; ++GB < YB;) BB[DB + GB] = OB[GB];
      return BB
    }
  },
  6133: BB => {
    BB.exports = function(BB, OB) {
      for (var GB = -1, YB = null == BB ? 0 : BB.length; ++GB < YB;)
        if (OB(BB[GB], GB, BB)) return !0;
      return !1
    }
  },
  6596: BB => {
    BB.exports = function(BB) {
      return BB.split("")
    }
  },
  5846: (BB, OB, GB) => {
    var YB = GB(5851);
    BB.exports = function(BB, OB) {
      for (var GB = BB.length; GB--;)
        if (YB(BB[GB][0], OB)) return GB;
      return -1
    }
  },
  6741: (BB, OB, GB) => {
    var YB = GB(6450);
    BB.exports = function(BB, OB, GB) {
      "__proto__" == OB && YB ? YB(BB, OB, {
        configurable: !0,
        enumerable: !0,
        value: GB,
        writable: !0
      }) : BB[OB] = GB
    }
  },
  6364: (BB, OB, GB) => {
    var YB = GB(6368),
      DB = GB(6390)(YB);
    BB.exports = DB
  },
  6759: (BB, OB, GB) => {
    var YB = GB(6364);
    BB.exports = function(BB, OB) {
      var GB = !0;
      return YB(BB, (function(BB, YB, DB) {
        return GB = !!OB(BB, YB, DB)
      })), GB
    }
  },
  6675: (BB, OB, GB) => {
    var YB = GB(5632);
    BB.exports = function(BB, OB, GB) {
      for (var DB = -1, QB = BB.length; ++DB < QB;) {
        var oB = BB[DB],
          jB = OB(oB);
        if (null != jB && (void 0 === yB ? jB === jB && !YB(jB) : GB(jB, yB))) var yB = jB,
          JB = oB
      }
      return JB
    }
  },
  6518: BB => {
    BB.exports = function(BB, OB, GB, YB) {
      for (var DB = BB.length, QB = GB + (YB ? 1 : -1); YB ? QB-- : ++QB < DB;)
        if (OB(BB[QB], QB, BB)) return QB;
      return -1
    }
  },
  6028: (BB, OB, GB) => {
    var YB = GB(6033),
      DB = GB(6037);
    BB.exports = function BB(OB, GB, QB, oB, jB) {
      var yB = -1,
        JB = OB.length;
      for (QB || (QB = DB), jB || (jB = []); ++yB < JB;) {
        var MB = OB[yB];
        GB > 0 && QB(MB) ? GB > 1 ? BB(MB, GB - 1, QB, oB, jB) : YB(jB, MB) : oB || (jB[jB.length] = MB)
      }
      return jB
    }
  },
  6375: (BB, OB, GB) => {
    var YB = GB(6381)();
    BB.exports = YB
  },
  6368: (BB, OB, GB) => {
    var YB = GB(6375),
      DB = GB(6190);
    BB.exports = function(BB, OB) {
      return BB && YB(BB, OB, DB)
    }
  },
  5704: (BB, OB, GB) => {
    var YB = GB(5711),
      DB = GB(5928);
    BB.exports = function(BB, OB) {
      for (var GB = 0, QB = (OB = YB(OB, BB)).length; null != BB && GB < QB;) BB = BB[DB(OB[GB++])];
      return GB && GB == QB ? BB : void 0
    }
  },
  6168: (BB, OB, GB) => {
    var YB = GB(6033),
      DB = GB(5684);
    BB.exports = function(BB, OB, GB) {
      var QB = OB(BB);
      return DB(BB) ? QB : YB(QB, GB(BB))
    }
  },
  5636: (BB, OB, GB) => {
    var YB = GB(5643),
      DB = GB(5649),
      QB = GB(5657),
      oB = YB ? YB.toStringTag : void 0;
    BB.exports = function(BB) {
      return null == BB ? void 0 === BB ? "[object Undefined]" : "[object Null]" : oB && oB in Object(BB) ? DB(BB) : QB(BB)
    }
  },
  6679: BB => {
    BB.exports = function(BB, OB) {
      return BB > OB
    }
  },
  6318: BB => {
    BB.exports = function(BB, OB) {
      return null != BB && OB in Object(BB)
    }
  },
  6511: (BB, OB, GB) => {
    var YB = GB(6518),
      DB = GB(6525),
      QB = GB(6528);
    BB.exports = function(BB, OB, GB) {
      return OB === OB ? QB(BB, OB, GB) : YB(BB, DB, GB)
    }
  },
  6050: (BB, OB, GB) => {
    var YB = GB(5636),
      DB = GB(5664);
    BB.exports = function(BB) {
      return DB(BB) && "[object Arguments]" == YB(BB)
    }
  },
  6099: (BB, OB, GB) => {
    var YB = GB(6103),
      DB = GB(5664);
    BB.exports = function BB(OB, GB, QB, oB, jB) {
      return OB === GB || (null == OB || null == GB || !DB(OB) && !DB(GB) ? OB !== OB && GB !== GB : YB(OB, GB, QB, oB, BB, jB))
    }
  },
  6103: (BB, OB, GB) => {
    var YB = GB(6073),
      DB = GB(6108),
      QB = GB(6140),
      oB = GB(6158),
      jB = GB(6266),
      yB = GB(5684),
      JB = GB(6213),
      MB = GB(6227),
      PB = "[object Arguments]",
      zB = "[object Array]",
      lB = "[object Object]",
      pB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB, OB, GB, qB, ZB, NB) {
      var RB = yB(BB),
        WB = yB(OB),
        AB = RB ? zB : jB(BB),
        VB = WB ? zB : jB(OB),
        SB = (AB = AB == PB ? lB : AB) == lB,
        nB = (VB = VB == PB ? lB : VB) == lB,
        UB = AB == VB;
      if (UB && JB(BB)) {
        if (!JB(OB)) return !1;
        RB = !0, SB = !1
      }
      if (UB && !SB) return NB || (NB = new YB), RB || MB(BB) ? DB(BB, OB, GB, qB, ZB, NB) : QB(BB, OB, AB, GB, qB, ZB, NB);
      if (!(1 & GB)) {
        var fB = SB && pB.call(BB, "__wrapped__"),
          kB = nB && pB.call(OB, "__wrapped__");
        if (fB || kB) {
          var dB = fB ? BB.value() : BB,
            KB = kB ? OB.value() : OB;
          return NB || (NB = new YB), ZB(dB, KB, GB, qB, NB)
        }
      }
      return !!UB && (NB || (NB = new YB), oB(BB, OB, GB, qB, ZB, NB))
    }
  },
  6071: (BB, OB, GB) => {
    var YB = GB(6073),
      DB = GB(6099);
    BB.exports = function(BB, OB, GB, QB) {
      var oB = GB.length,
        jB = oB,
        yB = !QB;
      if (null == BB) return !jB;
      for (BB = Object(BB); oB--;) {
        var JB = GB[oB];
        if (yB && JB[2] ? JB[1] !== BB[JB[0]] : !(JB[0] in BB)) return !1
      }
      for (; ++oB < jB;) {
        var MB = (JB = GB[oB])[0],
          PB = BB[MB],
          zB = JB[1];
        if (yB && JB[2]) {
          if (void 0 === PB && !(MB in BB)) return !1
        } else {
          var lB = new YB;
          if (QB) var pB = QB(PB, zB, MB, BB, OB, lB);
          if (!(void 0 === pB ? DB(zB, PB, 3, QB, lB) : pB)) return !1
        }
      }
      return !0
    }
  },
  6525: BB => {
    BB.exports = function(BB) {
      return BB !== BB
    }
  },
  5774: (BB, OB, GB) => {
    var YB = GB(5782),
      DB = GB(5785),
      QB = GB(5597),
      oB = GB(5797),
      jB = /^\[object .+?Constructor\]$/,
      yB = Function.prototype,
      JB = Object.prototype,
      MB = yB.toString,
      PB = JB.hasOwnProperty,
      zB = RegExp("^" + MB.call(PB).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    BB.exports = function(BB) {
      return !(!QB(BB) || DB(BB)) && (YB(BB) ? zB : jB).test(oB(BB))
    }
  },
  6235: (BB, OB, GB) => {
    var YB = GB(5636),
      DB = GB(5998),
      QB = GB(5664),
      oB = {};
    oB["[object Float32Array]"] = oB["[object Float64Array]"] = oB["[object Int8Array]"] = oB["[object Int16Array]"] = oB["[object Int32Array]"] = oB["[object Uint8Array]"] = oB["[object Uint8ClampedArray]"] = oB["[object Uint16Array]"] = oB["[object Uint32Array]"] = !0, oB["[object Arguments]"] = oB["[object Array]"] = oB["[object ArrayBuffer]"] = oB["[object Boolean]"] = oB["[object DataView]"] = oB["[object Date]"] = oB["[object Error]"] = oB["[object Function]"] = oB["[object Map]"] = oB["[object Number]"] = oB["[object Object]"] = oB["[object RegExp]"] = oB["[object Set]"] = oB["[object String]"] = oB["[object WeakMap]"] = !1, BB.exports = function(BB) {
      return QB(BB) && DB(BB.length) && !!oB[YB(BB)]
    }
  },
  6057: (BB, OB, GB) => {
    var YB = GB(6062),
      DB = GB(6307),
      QB = GB(6336),
      oB = GB(5684),
      jB = GB(6340);
    BB.exports = function(BB) {
      return "function" == typeof BB ? BB : null == BB ? QB : "object" == typeof BB ? oB(BB) ? DB(BB[0], BB[1]) : YB(BB) : jB(BB)
    }
  },
  6247: (BB, OB, GB) => {
    var YB = GB(6253),
      DB = GB(6255),
      QB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB) {
      if (!YB(BB)) return DB(BB);
      var OB = [];
      for (var GB in Object(BB)) QB.call(BB, GB) && "constructor" != GB && OB.push(GB);
      return OB
    }
  },
  6686: BB => {
    BB.exports = function(BB, OB) {
      return BB < OB
    }
  },
  6361: (BB, OB, GB) => {
    var YB = GB(6364),
      DB = GB(5989);
    BB.exports = function(BB, OB) {
      var GB = -1,
        QB = DB(BB) ? Array(BB.length) : [];
      return YB(BB, (function(BB, YB, DB) {
        QB[++GB] = OB(BB, YB, DB)
      })), QB
    }
  },
  6062: (BB, OB, GB) => {
    var YB = GB(6071),
      DB = GB(6290),
      QB = GB(6304);
    BB.exports = function(BB) {
      var OB = DB(BB);
      return 1 == OB.length && OB[0][2] ? QB(OB[0][0], OB[0][1]) : function(GB) {
        return GB === BB || YB(GB, BB, OB)
      }
    }
  },
  6307: (BB, OB, GB) => {
    var YB = GB(6099),
      DB = GB(5701),
      QB = GB(6310),
      oB = GB(5715),
      jB = GB(6296),
      yB = GB(6304),
      JB = GB(5928);
    BB.exports = function(BB, OB) {
      return oB(BB) && jB(OB) ? yB(JB(BB), OB) : function(GB) {
        var oB = DB(GB, BB);
        return void 0 === oB && oB === OB ? QB(GB, BB) : YB(OB, oB, 3)
      }
    }
  },
  6054: (BB, OB, GB) => {
    var YB = GB(5924),
      DB = GB(5704),
      QB = GB(6057),
      oB = GB(6361),
      jB = GB(6399),
      yB = GB(6239),
      JB = GB(6407),
      MB = GB(6336),
      PB = GB(5684);
    BB.exports = function(BB, OB, GB) {
      OB = OB.length ? YB(OB, (function(BB) {
        return PB(BB) ? function(OB) {
          return DB(OB, 1 === BB.length ? BB[0] : BB)
        } : BB
      })) : [MB];
      var zB = -1;
      OB = YB(OB, yB(QB));
      var lB = oB(BB, (function(BB, GB, DB) {
        return {
          criteria: YB(OB, (function(OB) {
            return OB(BB)
          })),
          index: ++zB,
          value: BB
        }
      }));
      return jB(lB, (function(BB, OB) {
        return JB(BB, OB, GB)
      }))
    }
  },
  6348: BB => {
    BB.exports = function(BB) {
      return function(OB) {
        return null == OB ? void 0 : OB[BB]
      }
    }
  },
  6357: (BB, OB, GB) => {
    var YB = GB(5704);
    BB.exports = function(BB) {
      return function(OB) {
        return YB(OB, BB)
      }
    }
  },
  5980: BB => {
    var OB = Math.ceil,
      GB = Math.max;
    BB.exports = function(BB, YB, DB, QB) {
      for (var oB = -1, jB = GB(OB((YB - BB) / (DB || 1)), 0), yB = Array(jB); jB--;) yB[QB ? jB : ++oB] = BB, BB += DB;
      return yB
    }
  },
  6424: (BB, OB, GB) => {
    var YB = GB(6336),
      DB = GB(6427),
      QB = GB(6436);
    BB.exports = function(BB, OB) {
      return QB(DB(BB, OB, YB), BB + "")
    }
  },
  6442: (BB, OB, GB) => {
    var YB = GB(6448),
      DB = GB(6450),
      QB = GB(6336),
      oB = DB ? function(BB, OB) {
        return DB(BB, "toString", {
          configurable: !0,
          enumerable: !1,
          value: YB(OB),
          writable: !0
        })
      } : QB;
    BB.exports = oB
  },
  6587: BB => {
    BB.exports = function(BB, OB, GB) {
      var YB = -1,
        DB = BB.length;
      OB < 0 && (OB = -OB > DB ? 0 : DB + OB), (GB = GB > DB ? DB : GB) < 0 && (GB += DB), DB = OB > GB ? 0 : GB - OB >>> 0, OB >>>= 0;
      for (var QB = Array(DB); ++YB < DB;) QB[YB] = BB[YB + OB];
      return QB
    }
  },
  6832: (BB, OB, GB) => {
    var YB = GB(6364);
    BB.exports = function(BB, OB) {
      var GB;
      return YB(BB, (function(BB, YB, DB) {
        return !(GB = OB(BB, YB, DB))
      })), !!GB
    }
  },
  6399: BB => {
    BB.exports = function(BB, OB) {
      var GB = BB.length;
      for (BB.sort(OB); GB--;) BB[GB] = BB[GB].value;
      return BB
    }
  },
  6205: BB => {
    BB.exports = function(BB, OB) {
      for (var GB = -1, YB = Array(BB); ++GB < BB;) YB[GB] = OB(GB);
      return YB
    }
  },
  5917: (BB, OB, GB) => {
    var YB = GB(5643),
      DB = GB(5924),
      QB = GB(5684),
      oB = GB(5632),
      jB = YB ? YB.prototype : void 0,
      yB = jB ? jB.toString : void 0;
    BB.exports = function BB(OB) {
      if ("string" == typeof OB) return OB;
      if (QB(OB)) return DB(OB, BB) + "";
      if (oB(OB)) return yB ? yB.call(OB) : "";
      var GB = OB + "";
      return "0" == GB && 1 / OB == -1 / 0 ? "-0" : GB
    }
  },
  5623: (BB, OB, GB) => {
    var YB = GB(5629),
      DB = /^\s+/;
    BB.exports = function(BB) {
      return BB ? BB.slice(0, YB(BB) + 1).replace(DB, "") : BB
    }
  },
  6239: BB => {
    BB.exports = function(BB) {
      return function(OB) {
        return BB(OB)
      }
    }
  },
  6498: (BB, OB, GB) => {
    var YB = GB(6116),
      DB = GB(6505),
      QB = GB(6535),
      oB = GB(6136),
      jB = GB(6544),
      yB = GB(6150);
    BB.exports = function(BB, OB, GB) {
      var JB = -1,
        MB = DB,
        PB = BB.length,
        zB = !0,
        lB = [],
        pB = lB;
      if (GB) zB = !1, MB = QB;
      else if (PB >= 200) {
        var qB = OB ? null : jB(BB);
        if (qB) return yB(qB);
        zB = !1, MB = oB, pB = new YB
      } else pB = OB ? [] : lB;
      BB: for (; ++JB < PB;) {
        var ZB = BB[JB],
          NB = OB ? OB(ZB) : ZB;
        if (ZB = GB || 0 !== ZB ? ZB : 0, zB && NB === NB) {
          for (var RB = pB.length; RB--;)
            if (pB[RB] === NB) continue BB;
          OB && pB.push(NB), lB.push(ZB)
        } else MB(pB, NB, GB) || (pB !== lB && pB.push(NB), lB.push(ZB))
      }
      return lB
    }
  },
  6136: BB => {
    BB.exports = function(BB, OB) {
      return BB.has(OB)
    }
  },
  5711: (BB, OB, GB) => {
    var YB = GB(5684),
      DB = GB(5715),
      QB = GB(5718),
      oB = GB(5913);
    BB.exports = function(BB, OB) {
      return YB(BB) ? BB : DB(BB, OB) ? [BB] : QB(oB(BB))
    }
  },
  6579: (BB, OB, GB) => {
    var YB = GB(6587);
    BB.exports = function(BB, OB, GB) {
      var DB = BB.length;
      return GB = void 0 === GB ? DB : GB, !OB && GB >= DB ? BB : YB(BB, OB, GB)
    }
  },
  6416: (BB, OB, GB) => {
    var YB = GB(5632);
    BB.exports = function(BB, OB) {
      if (BB !== OB) {
        var GB = void 0 !== BB,
          DB = null === BB,
          QB = BB === BB,
          oB = YB(BB),
          jB = void 0 !== OB,
          yB = null === OB,
          JB = OB === OB,
          MB = YB(OB);
        if (!yB && !MB && !oB && BB > OB || oB && jB && JB && !yB && !MB || DB && jB && JB || !GB && JB || !QB) return 1;
        if (!DB && !oB && !MB && BB < OB || MB && GB && QB && !DB && !oB || yB && GB && QB || !jB && QB || !JB) return -1
      }
      return 0
    }
  },
  6407: (BB, OB, GB) => {
    var YB = GB(6416);
    BB.exports = function(BB, OB, GB) {
      for (var DB = -1, QB = BB.criteria, oB = OB.criteria, jB = QB.length, yB = GB.length; ++DB < jB;) {
        var JB = YB(QB[DB], oB[DB]);
        if (JB) return DB >= yB ? JB : JB * ("desc" == GB[DB] ? -1 : 1)
      }
      return BB.index - OB.index
    }
  },
  5792: (BB, OB, GB) => {
    var YB = GB(5608)["__core-js_shared__"];
    BB.exports = YB
  },
  6390: (BB, OB, GB) => {
    var YB = GB(5989);
    BB.exports = function(BB, OB) {
      return function(GB, DB) {
        if (null == GB) return GB;
        if (!YB(GB)) return BB(GB, DB);
        for (var QB = GB.length, oB = OB ? QB : -1, jB = Object(GB);
          (OB ? oB-- : ++oB < QB) && !1 !== DB(jB[oB], oB, jB););
        return GB
      }
    }
  },
  6381: BB => {
    BB.exports = function(BB) {
      return function(OB, GB, YB) {
        for (var DB = -1, QB = Object(OB), oB = YB(OB), jB = oB.length; jB--;) {
          var yB = oB[BB ? jB : ++DB];
          if (!1 === GB(QB[yB], yB, QB)) break
        }
        return OB
      }
    }
  },
  6573: (BB, OB, GB) => {
    var YB = GB(6579),
      DB = GB(6589),
      QB = GB(6594),
      oB = GB(5913);
    BB.exports = function(BB) {
      return function(OB) {
        OB = oB(OB);
        var GB = DB(OB) ? QB(OB) : void 0,
          jB = GB ? GB[0] : OB.charAt(0),
          yB = GB ? YB(GB, 1).join("") : OB.slice(1);
        return jB[BB]() + yB
      }
    }
  },
  6847: (BB, OB, GB) => {
    var YB = GB(6057),
      DB = GB(5989),
      QB = GB(6190);
    BB.exports = function(BB) {
      return function(OB, GB, oB) {
        var jB = Object(OB);
        if (!DB(OB)) {
          var yB = YB(GB, 3);
          OB = QB(OB), GB = function(BB) {
            return yB(jB[BB], BB, jB)
          }
        }
        var JB = BB(OB, GB, oB);
        return JB > -1 ? jB[yB ? OB[JB] : JB] : void 0
      }
    }
  },
  5978: (BB, OB, GB) => {
    var YB = GB(5980),
      DB = GB(5984),
      QB = GB(6015);
    BB.exports = function(BB) {
      return function(OB, GB, oB) {
        return oB && "number" != typeof oB && DB(OB, GB, oB) && (GB = oB = void 0), OB = QB(OB), void 0 === GB ? (GB = OB, OB = 0) : GB = QB(GB), oB = void 0 === oB ? OB < GB ? 1 : -1 : QB(oB), YB(OB, GB, oB, BB)
      }
    }
  },
  6544: (BB, OB, GB) => {
    var YB = GB(6281),
      DB = GB(6551),
      QB = GB(6150),
      oB = YB && 1 / QB(new YB([, -0]))[1] == 1 / 0 ? function(BB) {
        return new YB(BB)
      } : DB;
    BB.exports = oB
  },
  6450: (BB, OB, GB) => {
    var YB = GB(5766),
      DB = function() {
        try {
          var BB = YB(Object, "defineProperty");
          return BB({}, "", {}), BB
        } catch (OB) {}
      }();
    BB.exports = DB
  },
  6108: (BB, OB, GB) => {
    var YB = GB(6116),
      DB = GB(6133),
      QB = GB(6136);
    BB.exports = function(BB, OB, GB, oB, jB, yB) {
      var JB = 1 & GB,
        MB = BB.length,
        PB = OB.length;
      if (MB != PB && !(JB && PB > MB)) return !1;
      var zB = yB.get(BB),
        lB = yB.get(OB);
      if (zB && lB) return zB == OB && lB == BB;
      var pB = -1,
        qB = !0,
        ZB = 2 & GB ? new YB : void 0;
      for (yB.set(BB, OB), yB.set(OB, BB); ++pB < MB;) {
        var NB = BB[pB],
          RB = OB[pB];
        if (oB) var WB = JB ? oB(RB, NB, pB, OB, BB, yB) : oB(NB, RB, pB, BB, OB, yB);
        if (void 0 !== WB) {
          if (WB) continue;
          qB = !1;
          break
        }
        if (ZB) {
          if (!DB(OB, (function(BB, OB) {
              if (!QB(ZB, OB) && (NB === BB || jB(NB, BB, GB, oB, yB))) return ZB.push(OB)
            }))) {
            qB = !1;
            break
          }
        } else if (NB !== RB && !jB(NB, RB, GB, oB, yB)) {
          qB = !1;
          break
        }
      }
      return yB.delete(BB), yB.delete(OB), qB
    }
  },
  6140: (BB, OB, GB) => {
    var YB = GB(5643),
      DB = GB(6146),
      QB = GB(5851),
      oB = GB(6108),
      jB = GB(6148),
      yB = GB(6150),
      JB = YB ? YB.prototype : void 0,
      MB = JB ? JB.valueOf : void 0;
    BB.exports = function(BB, OB, GB, YB, JB, PB, zB) {
      switch (GB) {
        case "[object DataView]":
          if (BB.byteLength != OB.byteLength || BB.byteOffset != OB.byteOffset) return !1;
          BB = BB.buffer, OB = OB.buffer;
        case "[object ArrayBuffer]":
          return !(BB.byteLength != OB.byteLength || !PB(new DB(BB), new DB(OB)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return QB(+BB, +OB);
        case "[object Error]":
          return BB.name == OB.name && BB.message == OB.message;
        case "[object RegExp]":
        case "[object String]":
          return BB == OB + "";
        case "[object Map]":
          var lB = jB;
        case "[object Set]":
          var pB = 1 & YB;
          if (lB || (lB = yB), BB.size != OB.size && !pB) return !1;
          var qB = zB.get(BB);
          if (qB) return qB == OB;
          YB |= 2, zB.set(BB, OB);
          var ZB = oB(lB(BB), lB(OB), YB, JB, PB, zB);
          return zB.delete(BB), ZB;
        case "[object Symbol]":
          if (MB) return MB.call(BB) == MB.call(OB)
      }
      return !1
    }
  },
  6158: (BB, OB, GB) => {
    var YB = GB(6164),
      DB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB, OB, GB, QB, oB, jB) {
      var yB = 1 & GB,
        JB = YB(BB),
        MB = JB.length;
      if (MB != YB(OB).length && !yB) return !1;
      for (var PB = MB; PB--;) {
        var zB = JB[PB];
        if (!(yB ? zB in OB : DB.call(OB, zB))) return !1
      }
      var lB = jB.get(BB),
        pB = jB.get(OB);
      if (lB && pB) return lB == OB && pB == BB;
      var qB = !0;
      jB.set(BB, OB), jB.set(OB, BB);
      for (var ZB = yB; ++PB < MB;) {
        var NB = BB[zB = JB[PB]],
          RB = OB[zB];
        if (QB) var WB = yB ? QB(RB, NB, zB, OB, BB, jB) : QB(NB, RB, zB, BB, OB, jB);
        if (!(void 0 === WB ? NB === RB || oB(NB, RB, GB, QB, jB) : WB)) {
          qB = !1;
          break
        }
        ZB || (ZB = "constructor" == zB)
      }
      if (qB && !ZB) {
        var AB = BB.constructor,
          VB = OB.constructor;
        AB == VB || !("constructor" in BB) || !("constructor" in OB) || "function" == typeof AB && AB instanceof AB && "function" == typeof VB && VB instanceof VB || (qB = !1)
      }
      return jB.delete(BB), jB.delete(OB), qB
    }
  },
  5611: (BB, OB, GB) => {
    var YB = "object" == typeof GB.g && GB.g && GB.g.Object === Object && GB.g;
    BB.exports = YB
  },
  6164: (BB, OB, GB) => {
    var YB = GB(6168),
      DB = GB(6177),
      QB = GB(6190);
    BB.exports = function(BB) {
      return YB(BB, QB, DB)
    }
  },
  5878: (BB, OB, GB) => {
    var YB = GB(5887);
    BB.exports = function(BB, OB) {
      var GB = BB.__data__;
      return YB(OB) ? GB["string" == typeof OB ? "string" : "hash"] : GB.map
    }
  },
  6290: (BB, OB, GB) => {
    var YB = GB(6296),
      DB = GB(6190);
    BB.exports = function(BB) {
      for (var OB = DB(BB), GB = OB.length; GB--;) {
        var QB = OB[GB],
          oB = BB[QB];
        OB[GB] = [QB, oB, YB(oB)]
      }
      return OB
    }
  },
  5766: (BB, OB, GB) => {
    var YB = GB(5774),
      DB = GB(5806);
    BB.exports = function(BB, OB) {
      var GB = DB(BB, OB);
      return YB(GB) ? GB : void 0
    }
  },
  6798: (BB, OB, GB) => {
    var YB = GB(6259)(Object.getPrototypeOf, Object);
    BB.exports = YB
  },
  5649: (BB, OB, GB) => {
    var YB = GB(5643),
      DB = Object.prototype,
      QB = DB.hasOwnProperty,
      oB = DB.toString,
      jB = YB ? YB.toStringTag : void 0;
    BB.exports = function(BB) {
      var OB = QB.call(BB, jB),
        GB = BB[jB];
      try {
        BB[jB] = void 0;
        var YB = !0
      } catch (yB) {}
      var DB = oB.call(BB);
      return YB && (OB ? BB[jB] = GB : delete BB[jB]), DB
    }
  },
  6177: (BB, OB, GB) => {
    var YB = GB(6184),
      DB = GB(6186),
      QB = Object.prototype.propertyIsEnumerable,
      oB = Object.getOwnPropertySymbols,
      jB = oB ? function(BB) {
        return null == BB ? [] : (BB = Object(BB), YB(oB(BB), (function(OB) {
          return QB.call(BB, OB)
        })))
      } : DB;
    BB.exports = jB
  },
  6266: (BB, OB, GB) => {
    var YB = GB(6271),
      DB = GB(5872),
      QB = GB(6277),
      oB = GB(6281),
      jB = GB(6283),
      yB = GB(5636),
      JB = GB(5797),
      MB = "[object Map]",
      PB = "[object Promise]",
      zB = "[object Set]",
      lB = "[object WeakMap]",
      pB = "[object DataView]",
      qB = JB(YB),
      ZB = JB(DB),
      NB = JB(QB),
      RB = JB(oB),
      WB = JB(jB),
      AB = yB;
    (YB && AB(new YB(new ArrayBuffer(1))) != pB || DB && AB(new DB) != MB || QB && AB(QB.resolve()) != PB || oB && AB(new oB) != zB || jB && AB(new jB) != lB) && (AB = function(BB) {
      var OB = yB(BB),
        GB = "[object Object]" == OB ? BB.constructor : void 0,
        YB = GB ? JB(GB) : "";
      if (YB) switch (YB) {
        case qB:
          return pB;
        case ZB:
          return MB;
        case NB:
          return PB;
        case RB:
          return zB;
        case WB:
          return lB
      }
      return OB
    }), BB.exports = AB
  },
  5806: BB => {
    BB.exports = function(BB, OB) {
      return null == BB ? void 0 : BB[OB]
    }
  },
  6327: (BB, OB, GB) => {
    var YB = GB(5711),
      DB = GB(6041),
      QB = GB(5684),
      oB = GB(6007),
      jB = GB(5998),
      yB = GB(5928);
    BB.exports = function(BB, OB, GB) {
      for (var JB = -1, MB = (OB = YB(OB, BB)).length, PB = !1; ++JB < MB;) {
        var zB = yB(OB[JB]);
        if (!(PB = null != BB && GB(BB, zB))) break;
        BB = BB[zB]
      }
      return PB || ++JB != MB ? PB : !!(MB = null == BB ? 0 : BB.length) && jB(MB) && oB(zB, MB) && (QB(BB) || DB(BB))
    }
  },
  6589: BB => {
    var OB = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    BB.exports = function(BB) {
      return OB.test(BB)
    }
  },
  5754: (BB, OB, GB) => {
    var YB = GB(5762);
    BB.exports = function() {
      this.__data__ = YB ? YB(null) : {}, this.size = 0
    }
  },
  5810: BB => {
    BB.exports = function(BB) {
      var OB = this.has(BB) && delete this.__data__[BB];
      return this.size -= OB ? 1 : 0, OB
    }
  },
  5816: (BB, OB, GB) => {
    var YB = GB(5762),
      DB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB) {
      var OB = this.__data__;
      if (YB) {
        var GB = OB[BB];
        return "__lodash_hash_undefined__" === GB ? void 0 : GB
      }
      return DB.call(OB, BB) ? OB[BB] : void 0
    }
  },
  5818: (BB, OB, GB) => {
    var YB = GB(5762),
      DB = Object.prototype.hasOwnProperty;
    BB.exports = function(BB) {
      var OB = this.__data__;
      return YB ? void 0 !== OB[BB] : DB.call(OB, BB)
    }
  },
  5826: (BB, OB, GB) => {
    var YB = GB(5762);
    BB.exports = function(BB, OB) {
      var GB = this.__data__;
      return this.size += this.has(BB) ? 0 : 1, GB[BB] = YB && void 0 === OB ? "__lodash_hash_undefined__" : OB, this
    }
  },
  6037: (BB, OB, GB) => {
    var YB = GB(5643),
      DB = GB(6041),
      QB = GB(5684),
      oB = YB ? YB.isConcatSpreadable : void 0;
    BB.exports = function(BB) {
      return QB(BB) || DB(BB) || !!(oB && BB && BB[oB])
    }
  },
  6007: BB => {
    var OB = /^(?:0|[1-9]\d*)$/;
    BB.exports = function(BB, GB) {
      var YB = typeof BB;
      return !!(GB = null == GB ? 9007199254740991 : GB) && ("number" == YB || "symbol" != YB && OB.test(BB)) && BB > -1 && BB % 1 == 0 && BB < GB
    }
  },
  5984: (BB, OB, GB) => {
    var YB = GB(5851),
      DB = GB(5989),
      QB = GB(6007),
      oB = GB(5597);
    BB.exports = function(BB, OB, GB) {
      if (!oB(GB)) return !1;
      var jB = typeof OB;
      return !!("number" == jB ? DB(GB) && QB(OB, GB.length) : "string" == jB && OB in GB) && YB(GB[OB], BB)
    }
  },
  5715: (BB, OB, GB) => {
    var YB = GB(5684),
      DB = GB(5632),
      QB = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      oB = /^\w*$/;
    BB.exports = function(BB, OB) {
      if (YB(BB)) return !1;
      var GB = typeof BB;
      return !("number" != GB && "symbol" != GB && "boolean" != GB && null != BB && !DB(BB)) || (oB.test(BB) || !QB.test(BB) || null != OB && BB in Object(OB))
    }
  },
  5887: BB => {
    BB.exports = function(BB) {
      var OB = typeof BB;
      return "string" == OB || "number" == OB || "symbol" == OB || "boolean" == OB ? "__proto__" !== BB : null === BB
    }
  },
  5785: (BB, OB, GB) => {
    var YB = GB(5792),
      DB = function() {
        var BB = /[^.]+$/.exec(YB && YB.keys && YB.keys.IE_PROTO || "");
        return BB ? "Symbol(src)_1." + BB : ""
      }();
    BB.exports = function(BB) {
      return !!DB && DB in BB
    }
  },
  6253: BB => {
    var OB = Object.prototype;
    BB.exports = function(BB) {
      var GB = BB && BB.constructor;
      return BB === ("function" == typeof GB && GB.prototype || OB)
    }
  },
  6296: (BB, OB, GB) => {
    var YB = GB(5597);
    BB.exports = function(BB) {
      return BB === BB && !YB(BB)
    }
  },
  5836: BB => {
    BB.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5839: (BB, OB, GB) => {
    var YB = GB(5846),
      DB = Array.prototype.splice;
    BB.exports = function(BB) {
      var OB = this.__data__,
        GB = YB(OB, BB);
      return !(GB < 0) && (GB == OB.length - 1 ? OB.pop() : DB.call(OB, GB, 1), --this.size, !0)
    }
  },
  5855: (BB, OB, GB) => {
    var YB = GB(5846);
    BB.exports = function(BB) {
      var OB = this.__data__,
        GB = YB(OB, BB);
      return GB < 0 ? void 0 : OB[GB][1]
    }
  },
  5859: (BB, OB, GB) => {
    var YB = GB(5846);
    BB.exports = function(BB) {
      return YB(this.__data__, BB) > -1
    }
  },
  5863: (BB, OB, GB) => {
    var YB = GB(5846);
    BB.exports = function(BB, OB) {
      var GB = this.__data__,
        DB = YB(GB, BB);
      return DB < 0 ? (++this.size, GB.push([BB, OB])) : GB[DB][1] = OB, this
    }
  },
  5742: (BB, OB, GB) => {
    var YB = GB(5745),
      DB = GB(5833),
      QB = GB(5872);
    BB.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new YB,
        map: new(QB || DB),
        string: new YB
      }
    }
  },
  5874: (BB, OB, GB) => {
    var YB = GB(5878);
    BB.exports = function(BB) {
      var OB = YB(this, BB).delete(BB);
      return this.size -= OB ? 1 : 0, OB
    }
  },
  5895: (BB, OB, GB) => {
    var YB = GB(5878);
    BB.exports = function(BB) {
      return YB(this, BB).get(BB)
    }
  },
  5902: (BB, OB, GB) => {
    var YB = GB(5878);
    BB.exports = function(BB) {
      return YB(this, BB).has(BB)
    }
  },
  5910: (BB, OB, GB) => {
    var YB = GB(5878);
    BB.exports = function(BB, OB) {
      var GB = YB(this, BB),
        DB = GB.size;
      return GB.set(BB, OB), this.size += GB.size == DB ? 0 : 1, this
    }
  },
  6148: BB => {
    BB.exports = function(BB) {
      var OB = -1,
        GB = Array(BB.size);
      return BB.forEach((function(BB, YB) {
        GB[++OB] = [YB, BB]
      })), GB
    }
  },
  6304: BB => {
    BB.exports = function(BB, OB) {
      return function(GB) {
        return null != GB && (GB[BB] === OB && (void 0 !== OB || BB in Object(GB)))
      }
    }
  },
  5722: (BB, OB, GB) => {
    var YB = GB(5730);
    BB.exports = function(BB) {
      var OB = YB(BB, (function(BB) {
          return 500 === GB.size && GB.clear(), BB
        })),
        GB = OB.cache;
      return OB
    }
  },
  5762: (BB, OB, GB) => {
    var YB = GB(5766)(Object, "create");
    BB.exports = YB
  },
  6255: (BB, OB, GB) => {
    var YB = GB(6259)(Object.keys, Object);
    BB.exports = YB
  },
  6241: (BB, OB, GB) => {
    BB = GB.nmd(BB);
    var YB = GB(5611),
      DB = OB && !OB.nodeType && OB,
      QB = DB && BB && !BB.nodeType && BB,
      oB = QB && QB.exports === DB && YB.process,
      jB = function() {
        try {
          var BB = QB && QB.require && QB.require("util").types;
          return BB || oB && oB.binding && oB.binding("util")
        } catch (OB) {}
      }();
    BB.exports = jB
  },
  5657: BB => {
    var OB = Object.prototype.toString;
    BB.exports = function(BB) {
      return OB.call(BB)
    }
  },
  6259: BB => {
    BB.exports = function(BB, OB) {
      return function(GB) {
        return BB(OB(GB))
      }
    }
  },
  6427: (BB, OB, GB) => {
    var YB = GB(6433),
      DB = Math.max;
    BB.exports = function(BB, OB, GB) {
      return OB = DB(void 0 === OB ? BB.length - 1 : OB, 0),
        function() {
          for (var QB = arguments, oB = -1, jB = DB(QB.length - OB, 0), yB = Array(jB); ++oB < jB;) yB[oB] = QB[OB + oB];
          oB = -1;
          for (var JB = Array(OB + 1); ++oB < OB;) JB[oB] = QB[oB];
          return JB[OB] = GB(yB), YB(BB, this, JB)
        }
    }
  },
  5608: (BB, OB, GB) => {
    var YB = GB(5611),
      DB = "object" == typeof self && self && self.Object === Object && self,
      QB = YB || DB || Function("return this")();
    BB.exports = QB
  },
  6122: BB => {
    BB.exports = function(BB) {
      return this.__data__.set(BB, "__lodash_hash_undefined__"), this
    }
  },
  6127: BB => {
    BB.exports = function(BB) {
      return this.__data__.has(BB)
    }
  },
  6150: BB => {
    BB.exports = function(BB) {
      var OB = -1,
        GB = Array(BB.size);
      return BB.forEach((function(BB) {
        GB[++OB] = BB
      })), GB
    }
  },
  6436: (BB, OB, GB) => {
    var YB = GB(6442),
      DB = GB(6458)(YB);
    BB.exports = DB
  },
  6458: BB => {
    var OB = Date.now;
    BB.exports = function(BB) {
      var GB = 0,
        YB = 0;
      return function() {
        var DB = OB(),
          QB = 16 - (DB - YB);
        if (YB = DB, QB > 0) {
          if (++GB >= 800) return arguments[0]
        } else GB = 0;
        return BB.apply(void 0, arguments)
      }
    }
  },
  6075: (BB, OB, GB) => {
    var YB = GB(5833);
    BB.exports = function() {
      this.__data__ = new YB, this.size = 0
    }
  },
  6079: BB => {
    BB.exports = function(BB) {
      var OB = this.__data__,
        GB = OB.delete(BB);
      return this.size = OB.size, GB
    }
  },
  6082: BB => {
    BB.exports = function(BB) {
      return this.__data__.get(BB)
    }
  },
  6084: BB => {
    BB.exports = function(BB) {
      return this.__data__.has(BB)
    }
  },
  6092: (BB, OB, GB) => {
    var YB = GB(5833),
      DB = GB(5872),
      QB = GB(5736);
    BB.exports = function(BB, OB) {
      var GB = this.__data__;
      if (GB instanceof YB) {
        var oB = GB.__data__;
        if (!DB || oB.length < 199) return oB.push([BB, OB]), this.size = ++GB.size, this;
        GB = this.__data__ = new QB(oB)
      }
      return GB.set(BB, OB), this.size = GB.size, this
    }
  },
  6528: BB => {
    BB.exports = function(BB, OB, GB) {
      for (var YB = GB - 1, DB = BB.length; ++YB < DB;)
        if (BB[YB] === OB) return YB;
      return -1
    }
  },
  6594: (BB, OB, GB) => {
    var YB = GB(6596),
      DB = GB(6589),
      QB = GB(6604);
    BB.exports = function(BB) {
      return DB(BB) ? QB(BB) : YB(BB)
    }
  },
  5718: (BB, OB, GB) => {
    var YB = GB(5722),
      DB = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      QB = /\\(\\)?/g,
      oB = YB((function(BB) {
        var OB = [];
        return 46 === BB.charCodeAt(0) && OB.push(""), BB.replace(DB, (function(BB, GB, YB, DB) {
          OB.push(YB ? DB.replace(QB, "$1") : GB || BB)
        })), OB
      }));
    BB.exports = oB
  },
  5928: (BB, OB, GB) => {
    var YB = GB(5632);
    BB.exports = function(BB) {
      if ("string" == typeof BB || YB(BB)) return BB;
      var OB = BB + "";
      return "0" == OB && 1 / BB == -1 / 0 ? "-0" : OB
    }
  },
  5797: BB => {
    var OB = Function.prototype.toString;
    BB.exports = function(BB) {
      if (null != BB) {
        try {
          return OB.call(BB)
        } catch (GB) {}
        try {
          return BB + ""
        } catch (GB) {}
      }
      return ""
    }
  },
  5629: BB => {
    var OB = /\s/;
    BB.exports = function(BB) {
      for (var GB = BB.length; GB-- && OB.test(BB.charAt(GB)););
      return GB
    }
  },
  6604: BB => {
    var OB = "\\ud800-\\udfff",
      GB = "[" + OB + "]",
      YB = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      DB = "\\ud83c[\\udffb-\\udfff]",
      QB = "[^" + OB + "]",
      oB = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      jB = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      yB = "(?:" + YB + "|" + DB + ")" + "?",
      JB = "[\\ufe0e\\ufe0f]?",
      MB = JB + yB + ("(?:\\u200d(?:" + [QB, oB, jB].join("|") + ")" + JB + yB + ")*"),
      PB = "(?:" + [QB + YB + "?", YB, oB, jB, GB].join("|") + ")",
      zB = RegExp(DB + "(?=" + DB + ")|" + PB + MB, "g");
    BB.exports = function(BB) {
      return BB.match(zB) || []
    }
  },
  6448: BB => {
    BB.exports = function(BB) {
      return function() {
        return BB
      }
    }
  },
  5595: (BB, OB, GB) => {
    var YB = GB(5597),
      DB = GB(5604),
      QB = GB(5614),
      oB = Math.max,
      jB = Math.min;
    BB.exports = function(BB, OB, GB) {
      var yB, JB, MB, PB, zB, lB, pB = 0,
        qB = !1,
        ZB = !1,
        NB = !0;
      if ("function" != typeof BB) throw new TypeError("Expected a function");

      function RB(OB) {
        var GB = yB,
          YB = JB;
        return yB = JB = void 0, pB = OB, PB = BB.apply(YB, GB)
      }

      function WB(BB) {
        var GB = BB - lB;
        return void 0 === lB || GB >= OB || GB < 0 || ZB && BB - pB >= MB
      }

      function AB() {
        var BB = DB();
        if (WB(BB)) return VB(BB);
        zB = setTimeout(AB, function(BB) {
          var GB = OB - (BB - lB);
          return ZB ? jB(GB, MB - (BB - pB)) : GB
        }(BB))
      }

      function VB(BB) {
        return zB = void 0, NB && yB ? RB(BB) : (yB = JB = void 0, PB)
      }

      function SB() {
        var BB = DB(),
          GB = WB(BB);
        if (yB = arguments, JB = this, lB = BB, GB) {
          if (void 0 === zB) return function(BB) {
            return pB = BB, zB = setTimeout(AB, OB), qB ? RB(BB) : PB
          }(lB);
          if (ZB) return clearTimeout(zB), zB = setTimeout(AB, OB), RB(lB)
        }
        return void 0 === zB && (zB = setTimeout(AB, OB)), PB
      }
      return OB = QB(OB) || 0, YB(GB) && (qB = !!GB.leading, MB = (ZB = "maxWait" in GB) ? oB(QB(GB.maxWait) || 0, OB) : MB, NB = "trailing" in GB ? !!GB.trailing : NB), SB.cancel = function() {
        void 0 !== zB && clearTimeout(zB), pB = 0, yB = lB = JB = zB = void 0
      }, SB.flush = function() {
        return void 0 === zB ? PB : VB(DB())
      }, SB
    }
  },
  5851: BB => {
    BB.exports = function(BB, OB) {
      return BB === OB || BB !== BB && OB !== OB
    }
  },
  6745: (BB, OB, GB) => {
    var YB = GB(6751),
      DB = GB(6759),
      QB = GB(6057),
      oB = GB(5684),
      jB = GB(5984);
    BB.exports = function(BB, OB, GB) {
      var yB = oB(BB) ? YB : DB;
      return GB && jB(BB, OB, GB) && (OB = void 0), yB(BB, QB(OB, 3))
    }
  },
  6843: (BB, OB, GB) => {
    var YB = GB(6847)(GB(6852));
    BB.exports = YB
  },
  6852: (BB, OB, GB) => {
    var YB = GB(6518),
      DB = GB(6057),
      QB = GB(6860),
      oB = Math.max;
    BB.exports = function(BB, OB, GB) {
      var jB = null == BB ? 0 : BB.length;
      if (!jB) return -1;
      var yB = null == GB ? 0 : QB(GB);
      return yB < 0 && (yB = oB(jB + yB, 0)), YB(BB, DB(OB, 3), yB)
    }
  },
  6689: (BB, OB, GB) => {
    var YB = GB(6028),
      DB = GB(6692);
    BB.exports = function(BB, OB) {
      return YB(DB(BB, OB), 1)
    }
  },
  5701: (BB, OB, GB) => {
    var YB = GB(5704);
    BB.exports = function(BB, OB, GB) {
      var DB = null == BB ? void 0 : YB(BB, OB);
      return void 0 === DB ? GB : DB
    }
  },
  6310: (BB, OB, GB) => {
    var YB = GB(6318),
      DB = GB(6327);
    BB.exports = function(BB, OB) {
      return null != BB && DB(BB, OB, YB)
    }
  },
  6336: BB => {
    BB.exports = function(BB) {
      return BB
    }
  },
  6041: (BB, OB, GB) => {
    var YB = GB(6050),
      DB = GB(5664),
      QB = Object.prototype,
      oB = QB.hasOwnProperty,
      jB = QB.propertyIsEnumerable,
      yB = YB(function() {
        return arguments
      }()) ? YB : function(BB) {
        return DB(BB) && oB.call(BB, "callee") && !jB.call(BB, "callee")
      };
    BB.exports = yB
  },
  5684: BB => {
    var OB = Array.isArray;
    BB.exports = OB
  },
  5989: (BB, OB, GB) => {
    var YB = GB(5782),
      DB = GB(5998);
    BB.exports = function(BB) {
      return null != BB && DB(BB.length) && !YB(BB)
    }
  },
  6803: (BB, OB, GB) => {
    var YB = GB(5636),
      DB = GB(5664);
    BB.exports = function(BB) {
      return !0 === BB || !1 === BB || DB(BB) && "[object Boolean]" == YB(BB)
    }
  },
  6213: (BB, OB, GB) => {
    BB = GB.nmd(BB);
    var YB = GB(5608),
      DB = GB(6222),
      QB = OB && !OB.nodeType && OB,
      oB = QB && BB && !BB.nodeType && BB,
      jB = oB && oB.exports === QB ? YB.BP : void 0,
      yB = (jB ? jB.isBuffer : void 0) || DB;
    BB.exports = yB
  },
  6695: (BB, OB, GB) => {
    var YB = GB(6099);
    BB.exports = function(BB, OB) {
      return YB(BB, OB)
    }
  },
  5782: (BB, OB, GB) => {
    var YB = GB(5636),
      DB = GB(5597);
    BB.exports = function(BB) {
      if (!DB(BB)) return !1;
      var OB = YB(BB);
      return "[object Function]" == OB || "[object GeneratorFunction]" == OB || "[object AsyncFunction]" == OB || "[object Proxy]" == OB
    }
  },
  5998: BB => {
    BB.exports = function(BB) {
      return "number" == typeof BB && BB > -1 && BB % 1 == 0 && BB <= 9007199254740991
    }
  },
  5686: (BB, OB, GB) => {
    var YB = GB(5693);
    BB.exports = function(BB) {
      return YB(BB) && BB != +BB
    }
  },
  5930: BB => {
    BB.exports = function(BB) {
      return null == BB
    }
  },
  5693: (BB, OB, GB) => {
    var YB = GB(5636),
      DB = GB(5664);
    BB.exports = function(BB) {
      return "number" == typeof BB || DB(BB) && "[object Number]" == YB(BB)
    }
  },
  5597: BB => {
    BB.exports = function(BB) {
      var OB = typeof BB;
      return null != BB && ("object" == OB || "function" == OB)
    }
  },
  5664: BB => {
    BB.exports = function(BB) {
      return null != BB && "object" == typeof BB
    }
  },
  6791: (BB, OB, GB) => {
    var YB = GB(5636),
      DB = GB(6798),
      QB = GB(5664),
      oB = Function.prototype,
      jB = Object.prototype,
      yB = oB.toString,
      JB = jB.hasOwnProperty,
      MB = yB.call(Object);
    BB.exports = function(BB) {
      if (!QB(BB) || "[object Object]" != YB(BB)) return !1;
      var OB = DB(BB);
      if (null === OB) return !0;
      var GB = JB.call(OB, "constructor") && OB.constructor;
      return "function" == typeof GB && GB instanceof GB && yB.call(GB) == MB
    }
  },
  5678: (BB, OB, GB) => {
    var YB = GB(5636),
      DB = GB(5684),
      QB = GB(5664);
    BB.exports = function(BB) {
      return "string" == typeof BB || !DB(BB) && QB(BB) && "[object String]" == YB(BB)
    }
  },
  5632: (BB, OB, GB) => {
    var YB = GB(5636),
      DB = GB(5664);
    BB.exports = function(BB) {
      return "symbol" == typeof BB || DB(BB) && "[object Symbol]" == YB(BB)
    }
  },
  6227: (BB, OB, GB) => {
    var YB = GB(6235),
      DB = GB(6239),
      QB = GB(6241),
      oB = QB && QB.isTypedArray,
      jB = oB ? DB(oB) : YB;
    BB.exports = jB
  },
  6190: (BB, OB, GB) => {
    var YB = GB(6196),
      DB = GB(6247),
      QB = GB(5989);
    BB.exports = function(BB) {
      return QB(BB) ? YB(BB) : DB(BB)
    }
  },
  6781: BB => {
    BB.exports = function(BB) {
      var OB = null == BB ? 0 : BB.length;
      return OB ? BB[OB - 1] : void 0
    }
  },
  6692: (BB, OB, GB) => {
    var YB = GB(5924),
      DB = GB(6057),
      QB = GB(6361),
      oB = GB(5684);
    BB.exports = function(BB, OB) {
      return (oB(BB) ? YB : QB)(BB, DB(OB, 3))
    }
  },
  6736: (BB, OB, GB) => {
    var YB = GB(6741),
      DB = GB(6368),
      QB = GB(6057);
    BB.exports = function(BB, OB) {
      var GB = {};
      return OB = QB(OB, 3), DB(BB, (function(BB, DB, QB) {
        YB(GB, DB, OB(BB, DB, QB))
      })), GB
    }
  },
  6673: (BB, OB, GB) => {
    var YB = GB(6675),
      DB = GB(6679),
      QB = GB(6336);
    BB.exports = function(BB) {
      return BB && BB.length ? YB(BB, QB, DB) : void 0
    }
  },
  5730: (BB, OB, GB) => {
    var YB = GB(5736);

    function DB(BB, OB) {
      if ("function" != typeof BB || null != OB && "function" != typeof OB) throw new TypeError("Expected a function");
      var GB = function() {
        var YB = arguments,
          DB = OB ? OB.apply(this, YB) : YB[0],
          QB = GB.cache;
        if (QB.has(DB)) return QB.get(DB);
        var oB = BB.apply(this, YB);
        return GB.cache = QB.set(DB, oB) || QB, oB
      };
      return GB.cache = new(DB.Cache || YB), GB
    }
    DB.Cache = YB, BB.exports = DB
  },
  6683: (BB, OB, GB) => {
    var YB = GB(6675),
      DB = GB(6686),
      QB = GB(6336);
    BB.exports = function(BB) {
      return BB && BB.length ? YB(BB, QB, DB) : void 0
    }
  },
  6551: BB => {
    BB.exports = function() {}
  },
  5604: (BB, OB, GB) => {
    var YB = GB(5608);
    BB.exports = function() {
      return YB.Date.now()
    }
  },
  6340: (BB, OB, GB) => {
    var YB = GB(6348),
      DB = GB(6357),
      QB = GB(5715),
      oB = GB(5928);
    BB.exports = function(BB) {
      return QB(BB) ? YB(oB(BB)) : DB(BB)
    }
  },
  5973: (BB, OB, GB) => {
    var YB = GB(5978)();
    BB.exports = YB
  },
  6823: (BB, OB, GB) => {
    var YB = GB(6133),
      DB = GB(6057),
      QB = GB(6832),
      oB = GB(5684),
      jB = GB(5984);
    BB.exports = function(BB, OB, GB) {
      var yB = oB(BB) ? YB : QB;
      return GB && jB(BB, OB, GB) && (OB = void 0), yB(BB, DB(OB, 3))
    }
  },
  6022: (BB, OB, GB) => {
    var YB = GB(6028),
      DB = GB(6054),
      QB = GB(6424),
      oB = GB(5984),
      jB = QB((function(BB, OB) {
        if (null == BB) return [];
        var GB = OB.length;
        return GB > 1 && oB(BB, OB[0], OB[1]) ? OB = [] : GB > 2 && oB(OB[0], OB[1], OB[2]) && (OB = [OB[0]]), DB(BB, YB(OB, 1), [])
      }));
    BB.exports = jB
  },
  6186: BB => {
    BB.exports = function() {
      return []
    }
  },
  6222: BB => {
    BB.exports = function() {
      return !1
    }
  },
  5589: (BB, OB, GB) => {
    var YB = GB(5595),
      DB = GB(5597);
    BB.exports = function(BB, OB, GB) {
      var QB = !0,
        oB = !0;
      if ("function" != typeof BB) throw new TypeError("Expected a function");
      return DB(GB) && (QB = "leading" in GB ? !!GB.leading : QB, oB = "trailing" in GB ? !!GB.trailing : oB), YB(BB, OB, {
        leading: QB,
        maxWait: OB,
        trailing: oB
      })
    }
  },
  6015: (BB, OB, GB) => {
    var YB = GB(5614),
      DB = 1 / 0;
    BB.exports = function(BB) {
      return BB ? (BB = YB(BB)) === DB || BB === -1 / 0 ? 17976931348623157e292 * (BB < 0 ? -1 : 1) : BB === BB ? BB : 0 : 0 === BB ? BB : 0
    }
  },
  6860: (BB, OB, GB) => {
    var YB = GB(6015);
    BB.exports = function(BB) {
      var OB = YB(BB),
        GB = OB % 1;
      return OB === OB ? GB ? OB - GB : OB : 0
    }
  },
  5614: (BB, OB, GB) => {
    var YB = GB(5623),
      DB = GB(5597),
      QB = GB(5632),
      oB = /^[-+]0x[0-9a-f]+$/i,
      jB = /^0b[01]+$/i,
      yB = /^0o[0-7]+$/i,
      JB = parseInt;
    BB.exports = function(BB) {
      if ("number" == typeof BB) return BB;
      if (QB(BB)) return NaN;
      if (DB(BB)) {
        var OB = "function" == typeof BB.valueOf ? BB.valueOf() : BB;
        BB = DB(OB) ? OB + "" : OB
      }
      if ("string" != typeof BB) return 0 === BB ? BB : +BB;
      BB = YB(BB);
      var GB = jB.test(BB);
      return GB || yB.test(BB) ? JB(BB.slice(2), GB ? 2 : 8) : oB.test(BB) ? NaN : +BB
    }
  },
  5913: (BB, OB, GB) => {
    var YB = GB(5917);
    BB.exports = function(BB) {
      return null == BB ? "" : YB(BB)
    }
  },
  6491: (BB, OB, GB) => {
    var YB = GB(6057),
      DB = GB(6498);
    BB.exports = function(BB, OB) {
      return BB && BB.length ? DB(BB, YB(OB, 2)) : []
    }
  },
  6566: (BB, OB, GB) => {
    var YB = GB(6573)("toUpperCase");
    BB.exports = YB
  },
  6635: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => gO
    });
    var YB = GB(56),
      DB = GB(5456),
      QB = GB.n(DB);
    const {
      getOwnPropertyNames: oB,
      getOwnPropertySymbols: jB
    } = Object, {
      hasOwnProperty: yB
    } = Object.prototype;

    function JB(BB, OB) {
      return function(GB, YB, DB) {
        return BB(GB, YB, DB) && OB(GB, YB, DB)
      }
    }

    function MB(BB) {
      return function(OB, GB, YB) {
        if (!OB || !GB || "object" !== typeof OB || "object" !== typeof GB) return BB(OB, GB, YB);
        const {
          cache: DB
        } = YB, QB = DB.get(OB), oB = DB.get(GB);
        if (QB && oB) return QB === GB && oB === OB;
        DB.set(OB, GB), DB.set(GB, OB);
        const jB = BB(OB, GB, YB);
        return DB.delete(OB), DB.delete(GB), jB
      }
    }

    function PB(BB) {
      return oB(BB).concat(jB(BB))
    }
    const zB = Object.hasOwn || ((BB, OB) => yB.call(BB, OB));

    function lB(BB, OB) {
      return BB === OB || !BB && !OB && BB !== BB && OB !== OB
    }
    const {
      getOwnPropertyDescriptor: pB,
      keys: qB
    } = Object;

    function ZB(BB, OB) {
      return BB.byteLength === OB.byteLength && uB(new Uint8Array(BB), new Uint8Array(OB))
    }

    function NB(BB, OB, GB) {
      let YB = BB.length;
      if (OB.length !== YB) return !1;
      for (; YB-- > 0;)
        if (!GB.equals(BB[YB], OB[YB], YB, YB, BB, OB, GB)) return !1;
      return !0
    }

    function RB(BB, OB) {
      return BB.byteLength === OB.byteLength && uB(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength), new Uint8Array(OB.buffer, OB.byteOffset, OB.byteLength))
    }

    function WB(BB, OB) {
      return lB(BB.getTime(), OB.getTime())
    }

    function AB(BB, OB) {
      return BB.name === OB.name && BB.message === OB.message && BB.cause === OB.cause && BB.stack === OB.stack
    }

    function VB(BB, OB) {
      return BB === OB
    }

    function SB(BB, OB, GB) {
      const YB = BB.size;
      if (YB !== OB.size) return !1;
      if (!YB) return !0;
      const DB = new Array(YB),
        QB = BB.entries();
      let oB, jB, yB = 0;
      for (;
        (oB = QB.next()) && !oB.done;) {
        const YB = OB.entries();
        let QB = !1,
          JB = 0;
        for (;
          (jB = YB.next()) && !jB.done;) {
          if (DB[JB]) {
            JB++;
            continue
          }
          const YB = oB.value,
            MB = jB.value;
          if (GB.equals(YB[0], MB[0], yB, JB, BB, OB, GB) && GB.equals(YB[1], MB[1], YB[0], MB[0], BB, OB, GB)) {
            QB = DB[JB] = !0;
            break
          }
          JB++
        }
        if (!QB) return !1;
        yB++
      }
      return !0
    }
    const nB = lB;

    function UB(BB, OB, GB) {
      const YB = qB(BB);
      let DB = YB.length;
      if (qB(OB).length !== DB) return !1;
      for (; DB-- > 0;)
        if (!IB(BB, OB, GB, YB[DB])) return !1;
      return !0
    }

    function fB(BB, OB, GB) {
      const YB = PB(BB);
      let DB, QB, oB, jB = YB.length;
      if (PB(OB).length !== jB) return !1;
      for (; jB-- > 0;) {
        if (DB = YB[jB], !IB(BB, OB, GB, DB)) return !1;
        if (QB = pB(BB, DB), oB = pB(OB, DB), (QB || oB) && (!QB || !oB || QB.configurable !== oB.configurable || QB.enumerable !== oB.enumerable || QB.writable !== oB.writable)) return !1
      }
      return !0
    }

    function kB(BB, OB) {
      return lB(BB.valueOf(), OB.valueOf())
    }

    function dB(BB, OB) {
      return BB.source === OB.source && BB.flags === OB.flags
    }

    function KB(BB, OB, GB) {
      const YB = BB.size;
      if (YB !== OB.size) return !1;
      if (!YB) return !0;
      const DB = new Array(YB),
        QB = BB.values();
      let oB, jB;
      for (;
        (oB = QB.next()) && !oB.done;) {
        const YB = OB.values();
        let QB = !1,
          yB = 0;
        for (;
          (jB = YB.next()) && !jB.done;) {
          if (!DB[yB] && GB.equals(oB.value, jB.value, oB.value, jB.value, BB, OB, GB)) {
            QB = DB[yB] = !0;
            break
          }
          yB++
        }
        if (!QB) return !1
      }
      return !0
    }

    function uB(BB, OB) {
      let GB = BB.byteLength;
      if (OB.byteLength !== GB || BB.byteOffset !== OB.byteOffset) return !1;
      for (; GB-- > 0;)
        if (BB[GB] !== OB[GB]) return !1;
      return !0
    }

    function mB(BB, OB) {
      return BB.hostname === OB.hostname && BB.pathname === OB.pathname && BB.protocol === OB.protocol && BB.port === OB.port && BB.hash === OB.hash && BB.username === OB.username && BB.password === OB.password
    }

    function IB(BB, OB, GB, YB) {
      return !("_owner" !== YB && "__o" !== YB && "__v" !== YB || !BB.$$typeof && !OB.$$typeof) || zB(OB, YB) && GB.equals(BB[YB], OB[YB], YB, YB, BB, OB, GB)
    }
    const FB = {
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
      iB = Object.prototype.toString;

    function LB(BB) {
      let {
        areArrayBuffersEqual: OB,
        areArraysEqual: GB,
        areDataViewsEqual: YB,
        areDatesEqual: DB,
        areErrorsEqual: QB,
        areFunctionsEqual: oB,
        areMapsEqual: jB,
        areNumbersEqual: yB,
        areObjectsEqual: JB,
        arePrimitiveWrappersEqual: MB,
        areRegExpsEqual: PB,
        areSetsEqual: zB,
        areTypedArraysEqual: lB,
        areUrlsEqual: pB,
        unknownTagComparators: qB
      } = BB;
      return function(BB, ZB, NB) {
        if (BB === ZB) return !0;
        if (null == BB || null == ZB) return !1;
        const RB = typeof BB;
        if (RB !== typeof ZB) return !1;
        if ("object" !== RB) return "number" === RB ? yB(BB, ZB, NB) : "function" === RB && oB(BB, ZB, NB);
        const WB = BB.constructor;
        if (WB !== ZB.constructor) return !1;
        if (WB === Object) return JB(BB, ZB, NB);
        if (Array.isArray(BB)) return GB(BB, ZB, NB);
        if (WB === Date) return DB(BB, ZB, NB);
        if (WB === RegExp) return PB(BB, ZB, NB);
        if (WB === Map) return jB(BB, ZB, NB);
        if (WB === Set) return zB(BB, ZB, NB);
        const AB = iB.call(BB);
        if ("[object Date]" === AB) return DB(BB, ZB, NB);
        if ("[object RegExp]" === AB) return PB(BB, ZB, NB);
        if ("[object Map]" === AB) return jB(BB, ZB, NB);
        if ("[object Set]" === AB) return zB(BB, ZB, NB);
        if ("[object Object]" === AB) return "function" !== typeof BB.then && "function" !== typeof ZB.then && JB(BB, ZB, NB);
        if ("[object URL]" === AB) return pB(BB, ZB, NB);
        if ("[object Error]" === AB) return QB(BB, ZB, NB);
        if ("[object Arguments]" === AB) return JB(BB, ZB, NB);
        if (FB[AB]) return lB(BB, ZB, NB);
        if ("[object ArrayBuffer]" === AB) return OB(BB, ZB, NB);
        if ("[object DataView]" === AB) return YB(BB, ZB, NB);
        if ("[object Boolean]" === AB || "[object Number]" === AB || "[object String]" === AB) return MB(BB, ZB, NB);
        if (qB) {
          let OB = qB[AB];
          if (!OB) {
            const GB = null != (VB = BB) ? VB[Symbol.toStringTag] : void 0;
            GB && (OB = qB[GB])
          }
          if (OB) return OB(BB, ZB, NB)
        }
        var VB;
        return !1
      }
    }
    const gB = rB();
    rB({
      strict: !0
    }), rB({
      circular: !0
    }), rB({
      circular: !0,
      strict: !0
    }), rB({
      createInternalComparator: () => lB
    }), rB({
      strict: !0,
      createInternalComparator: () => lB
    }), rB({
      circular: !0,
      createInternalComparator: () => lB
    }), rB({
      circular: !0,
      createInternalComparator: () => lB,
      strict: !0
    });

    function rB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: OB = !1,
        createInternalComparator: GB,
        createState: YB,
        strict: DB = !1
      } = BB, QB = function(BB) {
        let {
          circular: OB,
          createCustomConfig: GB,
          strict: YB
        } = BB, DB = {
          areArrayBuffersEqual: ZB,
          areArraysEqual: YB ? fB : NB,
          areDataViewsEqual: RB,
          areDatesEqual: WB,
          areErrorsEqual: AB,
          areFunctionsEqual: VB,
          areMapsEqual: YB ? JB(SB, fB) : SB,
          areNumbersEqual: nB,
          areObjectsEqual: YB ? fB : UB,
          arePrimitiveWrappersEqual: kB,
          areRegExpsEqual: dB,
          areSetsEqual: YB ? JB(KB, fB) : KB,
          areTypedArraysEqual: YB ? JB(uB, fB) : uB,
          areUrlsEqual: mB,
          unknownTagComparators: void 0
        };
        if (GB && (DB = Object.assign({}, DB, GB(DB))), OB) {
          const BB = MB(DB.areArraysEqual),
            OB = MB(DB.areMapsEqual),
            GB = MB(DB.areObjectsEqual),
            YB = MB(DB.areSetsEqual);
          DB = Object.assign({}, DB, {
            areArraysEqual: BB,
            areMapsEqual: OB,
            areObjectsEqual: GB,
            areSetsEqual: YB
          })
        }
        return DB
      }(BB), oB = LB(QB);
      var jB;
      return function(BB) {
        let {
          circular: OB,
          comparator: GB,
          createState: YB,
          equals: DB,
          strict: QB
        } = BB;
        if (YB) return function(BB, oB) {
          const {
            cache: jB = (OB ? new WeakMap : void 0),
            meta: yB
          } = YB();
          return GB(BB, oB, {
            cache: jB,
            equals: DB,
            meta: yB,
            strict: QB
          })
        };
        if (OB) return function(BB, OB) {
          return GB(BB, OB, {
            cache: new WeakMap,
            equals: DB,
            meta: void 0,
            strict: QB
          })
        };
        const oB = {
          cache: void 0,
          equals: DB,
          meta: void 0,
          strict: QB
        };
        return function(BB, OB) {
          return GB(BB, OB, oB)
        }
      }({
        circular: OB,
        comparator: oB,
        createState: YB,
        equals: GB ? GB(oB) : (jB = oB, function(BB, OB, GB, YB, DB, QB, oB) {
          return jB(BB, OB, oB)
        }),
        strict: DB
      })
    }

    function XB(BB) {
      var OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        GB = -1;
      requestAnimationFrame((function YB(DB) {
        GB < 0 && (GB = DB), DB - GB > OB ? (BB(DB), GB = -1) : function(BB) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(BB)
        }(YB)
      }))
    }

    function wB(BB) {
      return wB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, wB(BB)
    }

    function EB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return cB(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return cB(BB, OB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function hB() {
      var BB = function() {
          return null
        },
        OB = !1,
        GB = function GB(YB) {
          if (!OB) {
            if (Array.isArray(YB)) {
              if (!YB.length) return;
              var DB = EB(YB),
                QB = DB[0],
                oB = DB.slice(1);
              return "number" === typeof QB ? void XB(GB.bind(null, oB), QB) : (GB(QB), void XB(GB.bind(null, oB)))
            }
            "object" === wB(YB) && BB(YB), "function" === typeof YB && YB()
          }
        };
      return {
        stop: function() {
          OB = !0
        },
        start: function(BB) {
          OB = !1, GB(BB)
        },
        subscribe: function(OB) {
          return BB = OB,
            function() {
              BB = function() {
                return null
              }
            }
        }
      }
    }

    function aB(BB) {
      return aB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, aB(BB)
    }

    function eB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function TB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? eB(Object(GB), !0).forEach((function(OB) {
          bB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : eB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function bB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" !== aB(BB) || null === BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" !== aB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" === aB(OB) ? OB : String(OB)
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }
    var CB = function(BB) {
        return BB
      },
      HB = function(BB, OB) {
        return Object.keys(OB).reduce((function(GB, YB) {
          return TB(TB({}, GB), {}, bB({}, YB, BB(YB, OB[YB])))
        }), {})
      },
      vB = function(BB, OB, GB) {
        return BB.map((function(BB) {
          return "".concat((YB = BB, YB.replace(/([A-Z])/g, (function(BB) {
            return "-".concat(BB.toLowerCase())
          }))), " ").concat(OB, "ms ").concat(GB);
          var YB
        })).join(",")
      };

    function sB(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        var GB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != GB) {
          var YB, DB, QB, oB, jB = [],
            yB = !0,
            JB = !1;
          try {
            if (QB = (GB = GB.call(BB)).next, 0 === OB) {
              if (Object(GB) !== GB) return;
              yB = !1
            } else
              for (; !(yB = (YB = QB.call(GB)).done) && (jB.push(YB.value), jB.length !== OB); yB = !0);
          } catch (BB) {
            JB = !0, DB = BB
          } finally {
            try {
              if (!yB && null != GB.return && (oB = GB.return(), Object(oB) !== oB)) return
            } finally {
              if (JB) throw DB
            }
          }
          return jB
        }
      }(BB, OB) || tB(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return BO(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || tB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tB(BB, OB) {
      if (BB) {
        if ("string" === typeof BB) return BO(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === GB && BB.constructor && (GB = BB.constructor.name), "Map" === GB || "Set" === GB ? Array.from(BB) : "Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB) ? BO(BB, OB) : void 0
      }
    }

    function BO(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }
    var OO = 1e-4,
      GO = function(BB, OB) {
        return [0, 3 * BB, 3 * OB - 6 * BB, 3 * BB - 3 * OB + 1]
      },
      YO = function(BB, OB) {
        return BB.map((function(BB, GB) {
          return BB * Math.pow(OB, GB)
        })).reduce((function(BB, OB) {
          return BB + OB
        }))
      },
      DO = function(BB, OB) {
        return function(GB) {
          var YB = GO(BB, OB);
          return YO(YB, GB)
        }
      },
      QO = function() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        var YB = OB[0],
          DB = OB[1],
          QB = OB[2],
          oB = OB[3];
        if (1 === OB.length) switch (OB[0]) {
          case "linear":
            YB = 0, DB = 0, QB = 1, oB = 1;
            break;
          case "ease":
            YB = .25, DB = .1, QB = .25, oB = 1;
            break;
          case "ease-in":
            YB = .42, DB = 0, QB = 1, oB = 1;
            break;
          case "ease-out":
            YB = .42, DB = 0, QB = .58, oB = 1;
            break;
          case "ease-in-out":
            YB = 0, DB = 0, QB = .58, oB = 1;
            break;
          default:
            var jB = OB[0].split("(");
            if ("cubic-bezier" === jB[0] && 4 === jB[1].split(")")[0].split(",").length) {
              var yB = sB(jB[1].split(")")[0].split(",").map((function(BB) {
                return parseFloat(BB)
              })), 4);
              YB = yB[0], DB = yB[1], QB = yB[2], oB = yB[3]
            }
        } [YB, QB, DB, oB].every((function(BB) {
          return "number" === typeof BB && BB >= 0 && BB <= 1
        }));
        var JB, MB, PB = DO(YB, QB),
          zB = DO(DB, oB),
          lB = (JB = YB, MB = QB, function(BB) {
            var OB = GO(JB, MB),
              GB = [].concat(xB(OB.map((function(BB, OB) {
                return BB * OB
              })).slice(1)), [0]);
            return YO(GB, BB)
          }),
          pB = function(BB) {
            for (var OB, GB = BB > 1 ? 1 : BB, YB = GB, DB = 0; DB < 8; ++DB) {
              var QB = PB(YB) - GB,
                oB = lB(YB);
              if (Math.abs(QB - GB) < OO || oB < OO) return zB(YB);
              YB = (OB = YB - QB / oB) > 1 ? 1 : OB < 0 ? 0 : OB
            }
            return zB(YB)
          };
        return pB.isStepper = !1, pB
      },
      oO = function() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        var YB = OB[0];
        if ("string" === typeof YB) switch (YB) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return QO(YB);
          case "spring":
            return function() {
              var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                OB = BB.stiff,
                GB = void 0 === OB ? 100 : OB,
                YB = BB.damping,
                DB = void 0 === YB ? 8 : YB,
                QB = BB.dt,
                oB = void 0 === QB ? 17 : QB,
                jB = function(BB, OB, YB) {
                  var QB = YB + (-(BB - OB) * GB - YB * DB) * oB / 1e3,
                    jB = YB * oB / 1e3 + BB;
                  return Math.abs(jB - OB) < OO && Math.abs(QB) < OO ? [OB, 0] : [jB, QB]
                };
              return jB.isStepper = !0, jB.dt = oB, jB
            }();
          default:
            if ("cubic-bezier" === YB.split("(")[0]) return QO(YB)
        }
        return "function" === typeof YB ? YB : null
      };

    function jO(BB) {
      return jO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, jO(BB)
    }

    function yO(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return pO(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || lO(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function JO(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function MO(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? JO(Object(GB), !0).forEach((function(OB) {
          PO(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : JO(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function PO(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" !== jO(BB) || null === BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" !== jO(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" === jO(OB) ? OB : String(OB)
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function zO(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        var GB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != GB) {
          var YB, DB, QB, oB, jB = [],
            yB = !0,
            JB = !1;
          try {
            if (QB = (GB = GB.call(BB)).next, 0 === OB) {
              if (Object(GB) !== GB) return;
              yB = !1
            } else
              for (; !(yB = (YB = QB.call(GB)).done) && (jB.push(YB.value), jB.length !== OB); yB = !0);
          } catch (BB) {
            JB = !0, DB = BB
          } finally {
            try {
              if (!yB && null != GB.return && (oB = GB.return(), Object(oB) !== oB)) return
            } finally {
              if (JB) throw DB
            }
          }
          return jB
        }
      }(BB, OB) || lO(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lO(BB, OB) {
      if (BB) {
        if ("string" === typeof BB) return pO(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === GB && BB.constructor && (GB = BB.constructor.name), "Map" === GB || "Set" === GB ? Array.from(BB) : "Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB) ? pO(BB, OB) : void 0
      }
    }

    function pO(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }
    var qO = function(BB, OB, GB) {
        return BB + (OB - BB) * GB
      },
      ZO = function(BB) {
        return BB.from !== BB.to
      },
      NO = function BB(OB, GB, YB) {
        var DB = HB((function(BB, GB) {
          if (ZO(GB)) {
            var YB = zO(OB(GB.from, GB.to, GB.lZ), 2),
              DB = YB[0],
              QB = YB[1];
            return MO(MO({}, GB), {}, {
              from: DB,
              lZ: QB
            })
          }
          return GB
        }), GB);
        return YB < 1 ? HB((function(BB, OB) {
          return ZO(OB) ? MO(MO({}, OB), {}, {
            lZ: qO(OB.lZ, DB[BB].lZ, YB),
            from: qO(OB.from, DB[BB].from, YB)
          }) : OB
        }), GB) : BB(OB, DB, YB - 1)
      };
    const RO = function(BB, OB, GB, YB, DB) {
      var QB, oB, jB, yB, JB = (QB = BB, oB = OB, [Object.keys(QB), Object.keys(oB)].reduce((function(BB, OB) {
          return BB.filter((function(BB) {
            return OB.includes(BB)
          }))
        }))),
        MB = JB.reduce((function(GB, YB) {
          return MO(MO({}, GB), {}, PO({}, YB, [BB[YB], OB[YB]]))
        }), {}),
        PB = JB.reduce((function(GB, YB) {
          return MO(MO({}, GB), {}, PO({}, YB, {
            from: BB[YB],
            lZ: 0,
            to: OB[YB]
          }))
        }), {}),
        zB = -1,
        lB = function() {
          return null
        };
      return lB = GB.isStepper ? function(YB) {
          jB || (jB = YB);
          var QB = (YB - jB) / GB.dt;
          PB = NO(GB, PB, QB), DB(MO(MO(MO({}, BB), OB), HB((function(BB, OB) {
            return OB.from
          }), PB))), jB = YB, Object.values(PB).filter(ZO).length && (zB = requestAnimationFrame(lB))
        } : function(QB) {
          yB || (yB = QB);
          var oB = (QB - yB) / YB,
            jB = HB((function(BB, OB) {
              return qO.apply(void 0, yO(OB).concat([GB(oB)]))
            }), MB);
          if (DB(MO(MO(MO({}, BB), OB), jB)), oB < 1) zB = requestAnimationFrame(lB);
          else {
            var JB = HB((function(BB, OB) {
              return qO.apply(void 0, yO(OB).concat([GB(1)]))
            }), MB);
            DB(MO(MO(MO({}, BB), OB), JB))
          }
        },
        function() {
          return requestAnimationFrame(lB),
            function() {
              cancelAnimationFrame(zB)
            }
        }
    };

    function WO(BB) {
      return WO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, WO(BB)
    }
    var AO = ["children", "ZP", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function VO(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB, YB, DB = {},
          QB = Object.keys(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || (DB[GB] = BB[GB]);
        return DB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function SO(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return nO(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return nO(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return nO(BB, OB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nO(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function UO(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function fO(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? UO(Object(GB), !0).forEach((function(OB) {
          kO(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : UO(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function kO(BB, OB, GB) {
      return (OB = KO(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function dO(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, KO(YB.key), YB)
      }
    }

    function KO(BB) {
      var OB = function(BB, OB) {
        if ("object" !== WO(BB) || null === BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" !== WO(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" === WO(OB) ? OB : String(OB)
    }

    function uO(BB, OB) {
      return uO = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, uO(BB, OB)
    }

    function mO(BB) {
      var OB = function() {
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
        var GB, YB = iO(BB);
        if (OB) {
          var DB = iO(this).constructor;
          GB = Reflect.construct(YB, arguments, DB)
        } else GB = YB.apply(this, arguments);
        return IO(this, GB)
      }
    }

    function IO(BB, OB) {
      if (OB && ("object" === WO(OB) || "function" === typeof OB)) return OB;
      if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
      return FO(BB)
    }

    function FO(BB) {
      if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return BB
    }

    function iO(BB) {
      return iO = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, iO(BB)
    }
    var LO = function(BB) {
      ! function(BB, OB) {
        if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(OB && OB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), OB && uO(BB, OB)
      }(oB, BB);
      var OB, GB, DB, QB = mO(oB);

      function oB(BB, OB) {
        var GB;
        ! function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, oB);
        var YB = (GB = QB.call(this, BB, OB)).props,
          DB = YB.isActive,
          jB = YB.attributeName,
          yB = YB.from,
          JB = YB.to,
          MB = YB.steps,
          PB = YB.children,
          zB = YB.duration;
        if (GB.handleStyleChange = GB.handleStyleChange.bind(FO(GB)), GB.changeStyle = GB.changeStyle.bind(FO(GB)), !DB || zB <= 0) return GB.state = {
          style: {}
        }, "function" === typeof PB && (GB.state = {
          style: JB
        }), IO(GB);
        if (MB && MB.length) GB.state = {
          style: MB[0].style
        };
        else if (yB) {
          if ("function" === typeof PB) return GB.state = {
            style: yB
          }, IO(GB);
          GB.state = {
            style: jB ? kO({}, jB, yB) : yB
          }
        } else GB.state = {
          style: {}
        };
        return GB
      }
      return OB = oB, (GB = [{
        key: "componentDidMount",
        value: function() {
          var BB = this.props,
            OB = BB.isActive,
            GB = BB.canBegin;
          this.mounted = !0, OB && GB && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(BB) {
          var OB = this.props,
            GB = OB.isActive,
            YB = OB.canBegin,
            DB = OB.attributeName,
            QB = OB.shouldReAnimate,
            oB = OB.to,
            jB = OB.from,
            yB = this.state.style;
          if (YB)
            if (GB) {
              if (!(gB(BB.to, oB) && BB.canBegin && BB.isActive)) {
                var JB = !BB.canBegin || !BB.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var MB = JB || QB ? jB : BB.to;
                if (this.state && yB) {
                  var PB = {
                    style: DB ? kO({}, DB, MB) : MB
                  };
                  (DB && yB[DB] !== MB || !DB && yB !== MB) && this.setState(PB)
                }
                this.runAnimation(fO(fO({}, this.props), {}, {
                  from: MB,
                  ZP: 0
                }))
              }
            } else {
              var zB = {
                style: DB ? kO({}, DB, oB) : oB
              };
              this.state && yB && (DB && yB[DB] !== oB || !DB && yB !== oB) && this.setState(zB)
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
          var OB = this,
            GB = BB.from,
            YB = BB.to,
            DB = BB.duration,
            QB = BB.easing,
            oB = BB.ZP,
            jB = BB.onAnimationEnd,
            yB = BB.onAnimationStart,
            JB = RO(GB, YB, oO(QB), DB, this.changeStyle);
          this.manager.start([yB, oB, function() {
            OB.stopJSAnimation = JB()
          }, DB, jB])
        }
      }, {
        key: "runStepAnimation",
        value: function(BB) {
          var OB = this,
            GB = BB.steps,
            YB = BB.ZP,
            DB = BB.onAnimationStart,
            QB = GB[0],
            oB = QB.style,
            jB = QB.duration,
            yB = void 0 === jB ? 0 : jB;
          return this.manager.start([DB].concat(SO(GB.reduce((function(BB, YB, DB) {
            if (0 === DB) return BB;
            var QB = YB.duration,
              oB = YB.easing,
              jB = void 0 === oB ? "ease" : oB,
              yB = YB.style,
              JB = YB.properties,
              MB = YB.onAnimationEnd,
              PB = DB > 0 ? GB[DB - 1] : YB,
              zB = JB || Object.keys(yB);
            if ("function" === typeof jB || "spring" === jB) return [].concat(SO(BB), [OB.runJSAnimation.bind(OB, {
              from: PB.style,
              to: yB,
              duration: QB,
              easing: jB
            }), QB]);
            var lB = vB(zB, QB, jB),
              pB = fO(fO(fO({}, PB.style), yB), {}, {
                transition: lB
              });
            return [].concat(SO(BB), [pB, QB, MB]).filter(CB)
          }), [oB, Math.max(yB, YB)])), [BB.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(BB) {
          this.manager || (this.manager = hB());
          var OB = BB.ZP,
            GB = BB.duration,
            YB = BB.attributeName,
            DB = BB.to,
            QB = BB.easing,
            oB = BB.onAnimationStart,
            jB = BB.onAnimationEnd,
            yB = BB.steps,
            JB = BB.children,
            MB = this.manager;
          if (this.unSubscribe = MB.subscribe(this.handleStyleChange), "function" !== typeof QB && "function" !== typeof JB && "spring" !== QB)
            if (yB.length > 1) this.runStepAnimation(BB);
            else {
              var PB = YB ? kO({}, YB, DB) : DB,
                zB = vB(Object.keys(PB), GB, QB);
              MB.start([oB, OB, fO(fO({}, PB), {}, {
                transition: zB
              }), GB, jB])
            }
          else this.runJSAnimation(BB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this.props,
            OB = BB.children,
            GB = (BB.ZP, BB.duration),
            DB = (BB.attributeName, BB.easing, BB.isActive),
            QB = (BB.steps, BB.from, BB.to, BB.canBegin, BB.onAnimationEnd, BB.shouldReAnimate, BB.onAnimationReStart, VO(BB, AO)),
            oB = YB.Children.count(OB),
            jB = this.state.style;
          if ("function" === typeof OB) return OB(jB);
          if (!DB || 0 === oB || GB <= 0) return OB;
          var yB = function(BB) {
            var OB = BB.props,
              GB = OB.style,
              DB = void 0 === GB ? {} : GB,
              oB = OB.className;
            return (0, YB.cloneElement)(BB, fO(fO({}, QB), {}, {
              style: fO(fO({}, DB), jB),
              className: oB
            }))
          };
          return 1 === oB ? yB(YB.Children.only(OB)) : YB.createElement("div", null, YB.Children.map(OB, (function(BB) {
            return yB(BB)
          })))
        }
      }]) && dO(OB.prototype, GB), DB && dO(OB, DB), Object.defineProperty(OB, "prototype", {
        writable: !1
      }), oB
    }(YB.PureComponent);
    LO.displayName = "Animate", LO.defaultProps = {
      ZP: 0,
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
    }, LO.propTypes = {
      from: QB().oneOfType([QB().object, QB().string]),
      to: QB().oneOfType([QB().object, QB().string]),
      attributeName: QB().string,
      duration: QB().number,
      ZP: QB().number,
      easing: QB().oneOfType([QB().string, QB().func]),
      steps: QB().arrayOf(QB().shape({
        duration: QB().number.isRequired,
        style: QB().object.isRequired,
        easing: QB().oneOfType([QB().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), QB().func]),
        properties: QB().arrayOf("string"),
        onAnimationEnd: QB().func
      })),
      children: QB().oneOfType([QB().node, QB().func]),
      isActive: QB().bool,
      canBegin: QB().bool,
      onAnimationEnd: QB().func,
      shouldReAnimate: QB().bool,
      onAnimationStart: QB().func,
      onAnimationReStart: QB().func
    };
    const gO = LO
  },
  6873: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => EB
    });
    var YB, DB = GB(56),
      QB = GB(5587),
      oB = GB(6635),
      jB = GB(5782),
      yB = GB.n(jB),
      JB = GB(6673),
      MB = GB.n(JB),
      PB = GB(5930),
      zB = GB.n(PB),
      lB = GB(5686),
      pB = GB.n(lB),
      qB = GB(6695),
      ZB = GB.n(qB),
      NB = GB(6866),
      RB = GB(6620),
      WB = GB(6468),
      AB = GB(6776),
      VB = GB(6485),
      SB = GB(5671),
      nB = GB(6648),
      UB = GB(5938),
      fB = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      kB = ["key"];

    function dB(BB) {
      return dB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, dB(BB)
    }

    function KB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function uB() {
      return uB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, uB.apply(this, arguments)
    }

    function mB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function IB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? mB(Object(GB), !0).forEach((function(OB) {
          XB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : mB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function FB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, wB(YB.key), YB)
      }
    }

    function iB(BB, OB, GB) {
      return OB = gB(OB),
        function(BB, OB) {
          if (OB && ("object" === dB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, LB() ? Reflect.construct(OB, GB || [], gB(BB).constructor) : OB.apply(BB, GB))
    }

    function LB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (LB = function() {
        return !!BB
      })()
    }

    function gB(BB) {
      return gB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, gB(BB)
    }

    function rB(BB, OB) {
      return rB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, rB(BB, OB)
    }

    function XB(BB, OB, GB) {
      return (OB = wB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function wB(BB) {
      var OB = function(BB, OB) {
        if ("object" != dB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != dB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == dB(OB) ? OB : OB + ""
    }
    var EB = function(BB) {
      function OB() {
        var BB;
        ! function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, OB);
        for (var GB = arguments.length, YB = new Array(GB), DB = 0; DB < GB; DB++) YB[DB] = arguments[DB];
        return XB(BB = iB(this, OB, [].concat(YB)), "state", {
          isAnimationFinished: !0
        }), XB(BB, "id", (0, SB.M)("recharts-area-")), XB(BB, "handleAnimationEnd", (function() {
          var OB = BB.props.onAnimationEnd;
          BB.setState({
            isAnimationFinished: !0
          }), yB()(OB) && OB()
        })), XB(BB, "handleAnimationStart", (function() {
          var OB = BB.props.onAnimationStart;
          BB.setState({
            isAnimationFinished: !1
          }), yB()(OB) && OB()
        })), BB
      }
      return function(BB, OB) {
        if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(OB && OB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), OB && rB(BB, OB)
      }(OB, BB), GB = OB, YB = [{
        key: "renderDots",
        value: function(BB, GB, YB) {
          var QB = this.props.isAnimationActive,
            oB = this.state.isAnimationFinished;
          if (QB && !oB) return null;
          var jB = this.props,
            yB = jB.dot,
            JB = jB.points,
            MB = jB.dataKey,
            PB = (0, UB.e)(this.props, !1),
            zB = (0, UB.e)(yB, !0),
            lB = JB.map((function(BB, GB) {
              var YB = IB(IB(IB({
                key: "dot-".concat(GB),
                r: 3
              }, PB), zB), {}, {
                index: GB,
                cx: BB.x,
                cy: BB.y,
                dataKey: MB,
                value: BB.value,
                payload: BB.payload,
                points: JB
              });
              return OB.renderDotItem(yB, YB)
            })),
            pB = {
              clipPath: BB ? "url(#clipPath-".concat(GB ? "" : "dots-").concat(YB, ")") : null
            };
          return DB.createElement(WB.b, uB({
            className: "recharts-area-dots"
          }, pB), lB)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(BB) {
          var OB = this.props,
            GB = OB.baseLine,
            YB = OB.points,
            QB = OB.strokeWidth,
            oB = YB[0].x,
            jB = YB[YB.length - 1].x,
            yB = BB * Math.abs(oB - jB),
            JB = MB()(YB.map((function(BB) {
              return BB.y || 0
            })));
          return (0, SB.C)(GB) && "number" === typeof GB ? JB = Math.max(GB, JB) : GB && Array.isArray(GB) && GB.length && (JB = Math.max(MB()(GB.map((function(BB) {
            return BB.y || 0
          }))), JB)), (0, SB.C)(JB) ? DB.createElement("rect", {
            x: oB < jB ? oB : oB - yB,
            y: 0,
            width: yB,
            height: Math.floor(JB + (QB ? parseInt("".concat(QB), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(BB) {
          var OB = this.props,
            GB = OB.baseLine,
            YB = OB.points,
            QB = OB.strokeWidth,
            oB = YB[0].y,
            jB = YB[YB.length - 1].y,
            yB = BB * Math.abs(oB - jB),
            JB = MB()(YB.map((function(BB) {
              return BB.x || 0
            })));
          return (0, SB.C)(GB) && "number" === typeof GB ? JB = Math.max(GB, JB) : GB && Array.isArray(GB) && GB.length && (JB = Math.max(MB()(GB.map((function(BB) {
            return BB.x || 0
          }))), JB)), (0, SB.C)(JB) ? DB.createElement("rect", {
            x: 0,
            y: oB < jB ? oB : oB - yB,
            width: JB + (QB ? parseInt("".concat(QB), 10) : 1),
            height: Math.floor(yB)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(BB) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(BB) : this.renderHorizontalRect(BB)
        }
      }, {
        key: "renderAreaStatically",
        value: function(BB, OB, GB, YB) {
          var QB = this.props,
            oB = QB.layout,
            jB = QB.type,
            yB = QB.stroke,
            JB = QB.connectNulls,
            MB = QB.isRange,
            PB = (QB.ref, KB(QB, fB));
          return DB.createElement(WB.b, {
            clipPath: GB ? "url(#clipPath-".concat(YB, ")") : null
          }, DB.createElement(NB.b, uB({}, (0, UB.e)(PB, !0), {
            points: BB,
            connectNulls: JB,
            type: jB,
            baseLine: OB,
            layout: oB,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== yB && DB.createElement(NB.b, uB({}, (0, UB.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: oB,
            type: jB,
            connectNulls: JB,
            fill: "none",
            points: BB
          })), "none" !== yB && MB && DB.createElement(NB.b, uB({}, (0, UB.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: oB,
            type: jB,
            connectNulls: JB,
            fill: "none",
            points: OB
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(BB, OB) {
          var GB = this,
            YB = this.props,
            QB = YB.points,
            jB = YB.baseLine,
            yB = YB.isAnimationActive,
            JB = YB.animationBegin,
            MB = YB.animationDuration,
            PB = YB.animationEasing,
            lB = YB.animationId,
            qB = this.state,
            ZB = qB.prevPoints,
            NB = qB.prevBaseLine;
          return DB.createElement(oB.e, {
            ZP: JB,
            duration: MB,
            isActive: yB,
            easing: PB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(lB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(YB) {
            var oB = YB.t;
            if (ZB) {
              var yB, JB = ZB.length / QB.length,
                MB = QB.map((function(BB, OB) {
                  var GB = Math.floor(OB * JB);
                  if (ZB[GB]) {
                    var YB = ZB[GB],
                      DB = (0, SB.v)(YB.x, BB.x),
                      QB = (0, SB.v)(YB.y, BB.y);
                    return IB(IB({}, BB), {}, {
                      x: DB(oB),
                      y: QB(oB)
                    })
                  }
                  return BB
                }));
              return yB = (0, SB.C)(jB) && "number" === typeof jB ? (0, SB.v)(NB, jB)(oB) : zB()(jB) || pB()(jB) ? (0, SB.v)(NB, 0)(oB) : jB.map((function(BB, OB) {
                var GB = Math.floor(OB * JB);
                if (NB[GB]) {
                  var YB = NB[GB],
                    DB = (0, SB.v)(YB.x, BB.x),
                    QB = (0, SB.v)(YB.y, BB.y);
                  return IB(IB({}, BB), {}, {
                    x: DB(oB),
                    y: QB(oB)
                  })
                }
                return BB
              })), GB.renderAreaStatically(MB, yB, BB, OB)
            }
            return DB.createElement(WB.b, null, DB.createElement("defs", null, DB.createElement("clipPath", {
              id: "animationClipPath-".concat(OB)
            }, GB.renderClipRect(oB))), DB.createElement(WB.b, {
              clipPath: "url(#animationClipPath-".concat(OB, ")")
            }, GB.renderAreaStatically(QB, jB, BB, OB)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(BB, OB) {
          var GB = this.props,
            YB = GB.points,
            DB = GB.baseLine,
            QB = GB.isAnimationActive,
            oB = this.state,
            jB = oB.prevPoints,
            yB = oB.prevBaseLine,
            JB = oB.totalLength;
          return QB && YB && YB.length && (!jB && JB > 0 || !ZB()(jB, YB) || !ZB()(yB, DB)) ? this.renderAreaWithAnimation(BB, OB) : this.renderAreaStatically(YB, DB, BB, OB)
        }
      }, {
        key: "render",
        value: function() {
          var BB, OB = this.props,
            GB = OB.hide,
            YB = OB.dot,
            oB = OB.points,
            jB = OB.className,
            yB = OB.top,
            JB = OB.left,
            MB = OB.xAxis,
            PB = OB.yAxis,
            lB = OB.width,
            pB = OB.height,
            qB = OB.isAnimationActive,
            ZB = OB.id;
          if (GB || !oB || !oB.length) return null;
          var NB = this.state.isAnimationFinished,
            RB = 1 === oB.length,
            VB = (0, QB.c)("recharts-area", jB),
            SB = MB && MB.allowDataOverflow,
            nB = PB && PB.allowDataOverflow,
            fB = SB || nB,
            kB = zB()(ZB) ? this.id : ZB,
            dB = null !== (BB = (0, UB.e)(YB, !1)) && void 0 !== BB ? BB : {
              r: 3,
              strokeWidth: 2
            },
            KB = dB.r,
            uB = void 0 === KB ? 3 : KB,
            mB = dB.strokeWidth,
            IB = void 0 === mB ? 2 : mB,
            FB = ((0, UB.u)(YB) ? YB : {}).clipDot,
            iB = void 0 === FB || FB,
            LB = 2 * uB + IB;
          return DB.createElement(WB.b, {
            className: VB
          }, SB || nB ? DB.createElement("defs", null, DB.createElement("clipPath", {
            id: "clipPath-".concat(kB)
          }, DB.createElement("rect", {
            x: SB ? JB : JB - lB / 2,
            y: nB ? yB : yB - pB / 2,
            width: SB ? lB : 2 * lB,
            height: nB ? pB : 2 * pB
          })), !iB && DB.createElement("clipPath", {
            id: "clipPath-dots-".concat(kB)
          }, DB.createElement("rect", {
            x: JB - LB / 2,
            y: yB - LB / 2,
            width: lB + LB,
            height: pB + LB
          }))) : null, RB ? null : this.renderArea(fB, kB), (YB || RB) && this.renderDots(fB, iB, kB), (!qB || NB) && AB.d.renderCallByParent(this.props, oB))
        }
      }], jB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, OB) {
          return BB.animationId !== OB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curPoints: BB.points,
            curBaseLine: BB.baseLine,
            prevPoints: OB.curPoints,
            prevBaseLine: OB.curBaseLine
          } : BB.points !== OB.curPoints || BB.baseLine !== OB.curBaseLine ? {
            curPoints: BB.points,
            curBaseLine: BB.baseLine
          } : null
        }
      }], YB && FB(GB.prototype, YB), jB && FB(GB, jB), Object.defineProperty(GB, "prototype", {
        writable: !1
      }), GB;
      var GB, YB, jB
    }(DB.PureComponent);
    YB = EB, XB(EB, "displayName", "Area"), XB(EB, "defaultProps", {
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
      isAnimationActive: !VB.d.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), XB(EB, "getBaseValue", (function(BB, OB, GB, YB) {
      var DB = BB.layout,
        QB = BB.baseValue,
        oB = OB.props.baseValue,
        jB = null !== oB && void 0 !== oB ? oB : QB;
      if ((0, SB.C)(jB) && "number" === typeof jB) return jB;
      var yB = "horizontal" === DB ? YB : GB,
        JB = yB.scale.domain();
      if ("number" === yB.type) {
        var MB = Math.max(JB[0], JB[1]),
          PB = Math.min(JB[0], JB[1]);
        return "dataMin" === jB ? PB : "dataMax" === jB || MB < 0 ? MB : Math.max(Math.min(JB[0], JB[1]), 0)
      }
      return "dataMin" === jB ? JB[0] : "dataMax" === jB ? JB[1] : JB[0]
    })), XB(EB, "getComposedData", (function(BB) {
      var OB, GB = BB.props,
        DB = BB.item,
        QB = BB.xAxis,
        oB = BB.yAxis,
        jB = BB.xAxisTicks,
        yB = BB.yAxisTicks,
        JB = BB.bandSize,
        MB = BB.dataKey,
        PB = BB.stackedData,
        zB = BB.dataStartIndex,
        lB = BB.displayedData,
        pB = BB.offset,
        qB = GB.layout,
        ZB = PB && PB.length,
        NB = YB.getBaseValue(GB, DB, QB, oB),
        RB = "horizontal" === qB,
        WB = !1,
        AB = lB.map((function(BB, OB) {
          var GB;
          ZB ? GB = PB[zB + OB] : (GB = (0, nB.eb)(BB, MB), Array.isArray(GB) ? WB = !0 : GB = [NB, GB]);
          var YB = null == GB[1] || ZB && null == (0, nB.eb)(BB, MB);
          return RB ? {
            x: (0, nB.B)({
              axis: QB,
              ticks: jB,
              bandSize: JB,
              entry: BB,
              index: OB
            }),
            y: YB ? null : oB.scale(GB[1]),
            value: GB,
            payload: BB
          } : {
            x: YB ? null : QB.scale(GB[1]),
            y: (0, nB.B)({
              axis: oB,
              ticks: yB,
              bandSize: JB,
              entry: BB,
              index: OB
            }),
            value: GB,
            payload: BB
          }
        }));
      return OB = ZB || WB ? AB.map((function(BB) {
        var OB = Array.isArray(BB.value) ? BB.value[0] : null;
        return RB ? {
          x: BB.x,
          y: null != OB && null != BB.y ? oB.scale(OB) : null
        } : {
          x: null != OB ? QB.scale(OB) : null,
          y: BB.y
        }
      })) : RB ? oB.scale(NB) : QB.scale(NB), IB({
        points: AB,
        baseLine: OB,
        layout: qB,
        isRange: WB
      }, pB)
    })), XB(EB, "renderDotItem", (function(BB, OB) {
      var GB;
      if (DB.isValidElement(BB)) GB = DB.cloneElement(BB, OB);
      else if (yB()(BB)) GB = BB(OB);
      else {
        var YB = (0, QB.c)("recharts-area-dot", "boolean" !== typeof BB ? BB.className : ""),
          oB = OB.key,
          jB = KB(OB, kB);
        GB = DB.createElement(RB.b, uB({}, jB, {
          key: oB,
          className: YB
        }))
      }
      return GB
    }))
  },
  6764: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => TB
    });
    var YB = GB(56),
      DB = GB(5587),
      QB = GB(6635),
      oB = GB(6695),
      jB = GB.n(oB),
      yB = GB(5930),
      JB = GB.n(yB),
      MB = GB(6468),
      PB = GB(6702),
      zB = GB(6771),
      lB = GB(6776),
      pB = GB(5671),
      qB = GB(5938),
      ZB = GB(6485),
      NB = GB(6648),
      RB = GB(5951),
      WB = GB(6463),
      AB = GB(6783),
      VB = ["x", "y"];

    function SB(BB) {
      return SB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, SB(BB)
    }

    function nB() {
      return nB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, nB.apply(this, arguments)
    }

    function UB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function fB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? UB(Object(GB), !0).forEach((function(OB) {
          kB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : UB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function kB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != SB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != SB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == SB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function dB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function KB(BB, OB) {
      var GB = BB.x,
        YB = BB.y,
        DB = dB(BB, VB),
        QB = "".concat(GB),
        oB = parseInt(QB, 10),
        jB = "".concat(YB),
        yB = parseInt(jB, 10),
        JB = "".concat(OB.height || DB.height),
        MB = parseInt(JB, 10),
        PB = "".concat(OB.width || DB.width),
        zB = parseInt(PB, 10);
      return fB(fB(fB(fB(fB({}, OB), DB), oB ? {
        x: oB
      } : {}), yB ? {
        y: yB
      } : {}), {}, {
        height: MB,
        width: zB,
        name: OB.name,
        radius: OB.radius
      })
    }

    function uB(BB) {
      return YB.createElement(AB.d, nB({
        shapeType: "rectangle",
        propTransformer: KB,
        activeClassName: "recharts-active-bar"
      }, BB))
    }
    var mB, IB = ["value", "background"];

    function FB(BB) {
      return FB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, FB(BB)
    }

    function iB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function LB() {
      return LB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, LB.apply(this, arguments)
    }

    function gB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function rB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? gB(Object(GB), !0).forEach((function(OB) {
          aB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : gB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function XB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, eB(YB.key), YB)
      }
    }

    function wB(BB, OB, GB) {
      return OB = cB(OB),
        function(BB, OB) {
          if (OB && ("object" === FB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, EB() ? Reflect.construct(OB, GB || [], cB(BB).constructor) : OB.apply(BB, GB))
    }

    function EB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (EB = function() {
        return !!BB
      })()
    }

    function cB(BB) {
      return cB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, cB(BB)
    }

    function hB(BB, OB) {
      return hB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, hB(BB, OB)
    }

    function aB(BB, OB, GB) {
      return (OB = eB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function eB(BB) {
      var OB = function(BB, OB) {
        if ("object" != FB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != FB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == FB(OB) ? OB : OB + ""
    }
    var TB = function(BB) {
      function OB() {
        var BB;
        ! function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, OB);
        for (var GB = arguments.length, YB = new Array(GB), DB = 0; DB < GB; DB++) YB[DB] = arguments[DB];
        return aB(BB = wB(this, OB, [].concat(YB)), "state", {
          isAnimationFinished: !1
        }), aB(BB, "id", (0, pB.M)("recharts-bar-")), aB(BB, "handleAnimationEnd", (function() {
          var OB = BB.props.onAnimationEnd;
          BB.setState({
            isAnimationFinished: !0
          }), OB && OB()
        })), aB(BB, "handleAnimationStart", (function() {
          var OB = BB.props.onAnimationStart;
          BB.setState({
            isAnimationFinished: !1
          }), OB && OB()
        })), BB
      }
      return function(BB, OB) {
        if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(OB && OB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), OB && hB(BB, OB)
      }(OB, BB), GB = OB, oB = [{
        key: "renderRectanglesStatically",
        value: function(BB) {
          var OB = this,
            GB = this.props,
            DB = GB.shape,
            QB = GB.dataKey,
            oB = GB.activeIndex,
            jB = GB.activeBar,
            yB = (0, qB.e)(this.props, !1);
          return BB && BB.map((function(BB, GB) {
            var JB = GB === oB,
              PB = JB ? jB : DB,
              zB = rB(rB(rB({}, yB), BB), {}, {
                isActive: JB,
                option: PB,
                index: GB,
                dataKey: QB,
                onAnimationStart: OB.handleAnimationStart,
                onAnimationEnd: OB.handleAnimationEnd
              });
            return YB.createElement(MB.b, LB({
              className: "recharts-bar-rectangle"
            }, (0, RB.j)(OB.props, BB, GB), {
              key: "rectangle-".concat(null === BB || void 0 === BB ? void 0 : BB.x, "-").concat(null === BB || void 0 === BB ? void 0 : BB.y, "-").concat(null === BB || void 0 === BB ? void 0 : BB.value, "-").concat(GB)
            }), YB.createElement(uB, zB))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var BB = this,
            OB = this.props,
            GB = OB.data,
            DB = OB.layout,
            oB = OB.isAnimationActive,
            jB = OB.animationBegin,
            yB = OB.animationDuration,
            JB = OB.animationEasing,
            PB = OB.animationId,
            zB = this.state.prevData;
          return YB.createElement(QB.e, {
            ZP: jB,
            duration: yB,
            isActive: oB,
            easing: JB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(PB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(OB) {
            var QB = OB.t,
              oB = GB.map((function(BB, OB) {
                var GB = zB && zB[OB];
                if (GB) {
                  var YB = (0, pB.v)(GB.x, BB.x),
                    oB = (0, pB.v)(GB.y, BB.y),
                    jB = (0, pB.v)(GB.width, BB.width),
                    yB = (0, pB.v)(GB.height, BB.height);
                  return rB(rB({}, BB), {}, {
                    x: YB(QB),
                    y: oB(QB),
                    width: jB(QB),
                    height: yB(QB)
                  })
                }
                if ("horizontal" === DB) {
                  var JB = (0, pB.v)(0, BB.height)(QB);
                  return rB(rB({}, BB), {}, {
                    y: BB.y + BB.height - JB,
                    height: JB
                  })
                }
                var MB = (0, pB.v)(0, BB.width)(QB);
                return rB(rB({}, BB), {}, {
                  width: MB
                })
              }));
            return YB.createElement(MB.b, null, BB.renderRectanglesStatically(oB))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var BB = this.props,
            OB = BB.data,
            GB = BB.isAnimationActive,
            YB = this.state.prevData;
          return !(GB && OB && OB.length) || YB && jB()(YB, OB) ? this.renderRectanglesStatically(OB) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var BB = this,
            OB = this.props,
            GB = OB.data,
            DB = OB.dataKey,
            QB = OB.activeIndex,
            oB = (0, qB.e)(this.props.background, !1);
          return GB.map((function(OB, GB) {
            OB.value;
            var jB = OB.background,
              yB = iB(OB, IB);
            if (!jB) return null;
            var JB = rB(rB(rB(rB(rB({}, yB), {}, {
              fill: "#eee"
            }, jB), oB), (0, RB.j)(BB.props, OB, GB)), {}, {
              onAnimationStart: BB.handleAnimationStart,
              onAnimationEnd: BB.handleAnimationEnd,
              dataKey: DB,
              index: GB,
              className: "recharts-bar-background-rectangle"
            });
            return YB.createElement(uB, LB({
              key: "background-bar-".concat(GB),
              option: BB.props.background,
              isActive: GB === QB
            }, JB))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(BB, OB) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var GB = this.props,
            DB = GB.data,
            QB = GB.xAxis,
            oB = GB.yAxis,
            jB = GB.layout,
            yB = GB.children,
            JB = (0, qB.i)(yB, PB.b);
          if (!JB) return null;
          var zB = "vertical" === jB ? DB[0].height / 2 : DB[0].width / 2,
            lB = function(BB, OB) {
              var GB = Array.isArray(BB.value) ? BB.value[1] : BB.value;
              return {
                x: BB.x,
                y: BB.y,
                value: GB,
                errorVal: (0, NB.eb)(BB, OB)
              }
            },
            pB = {
              clipPath: BB ? "url(#clipPath-".concat(OB, ")") : null
            };
          return YB.createElement(MB.b, pB, JB.map((function(BB) {
            return YB.cloneElement(BB, {
              key: "error-bar-".concat(OB, "-").concat(BB.props.dataKey),
              data: DB,
              xAxis: QB,
              yAxis: oB,
              layout: jB,
              offset: zB,
              dataPointFormatter: lB
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var BB = this.props,
            OB = BB.hide,
            GB = BB.data,
            QB = BB.className,
            oB = BB.xAxis,
            jB = BB.yAxis,
            yB = BB.left,
            PB = BB.top,
            zB = BB.width,
            pB = BB.height,
            qB = BB.isAnimationActive,
            ZB = BB.background,
            NB = BB.id;
          if (OB || !GB || !GB.length) return null;
          var RB = this.state.isAnimationFinished,
            WB = (0, DB.c)("recharts-bar", QB),
            AB = oB && oB.allowDataOverflow,
            VB = jB && jB.allowDataOverflow,
            SB = AB || VB,
            nB = JB()(NB) ? this.id : NB;
          return YB.createElement(MB.b, {
            className: WB
          }, AB || VB ? YB.createElement("defs", null, YB.createElement("clipPath", {
            id: "clipPath-".concat(nB)
          }, YB.createElement("rect", {
            x: AB ? yB : yB - zB / 2,
            y: VB ? PB : PB - pB / 2,
            width: AB ? zB : 2 * zB,
            height: VB ? pB : 2 * pB
          }))) : null, YB.createElement(MB.b, {
            className: "recharts-bar-rectangles",
            clipPath: SB ? "url(#clipPath-".concat(nB, ")") : null
          }, ZB ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(SB, nB), (!qB || RB) && lB.d.renderCallByParent(this.props, GB))
        }
      }], yB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, OB) {
          return BB.animationId !== OB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curData: BB.data,
            prevData: OB.curData
          } : BB.data !== OB.curData ? {
            curData: BB.data
          } : null
        }
      }], oB && XB(GB.prototype, oB), yB && XB(GB, yB), Object.defineProperty(GB, "prototype", {
        writable: !1
      }), GB;
      var GB, oB, yB
    }(YB.PureComponent);
    mB = TB, aB(TB, "displayName", "Bar"), aB(TB, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !ZB.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), aB(TB, "getComposedData", (function(BB) {
      var OB = BB.props,
        GB = BB.item,
        YB = BB.barPosition,
        DB = BB.bandSize,
        QB = BB.xAxis,
        oB = BB.yAxis,
        jB = BB.xAxisTicks,
        yB = BB.yAxisTicks,
        JB = BB.stackedData,
        MB = BB.dataStartIndex,
        PB = BB.displayedData,
        lB = BB.offset,
        ZB = (0, NB.m)(YB, GB);
      if (!ZB) return null;
      var RB = OB.layout,
        AB = GB.type.defaultProps,
        VB = void 0 !== AB ? rB(rB({}, AB), GB.props) : GB.props,
        SB = VB.dataKey,
        nB = VB.children,
        UB = VB.minPointSize,
        fB = "horizontal" === RB ? oB : QB,
        kB = JB ? fB.scale.domain() : null,
        dB = (0, NB.y)({
          numericAxis: fB
        }),
        KB = (0, qB.i)(nB, zB.c),
        uB = PB.map((function(BB, OB) {
          var YB, PB, zB, lB, qB, AB;
          JB ? YB = (0, NB.tb)(JB[MB + OB], kB) : (YB = (0, NB.eb)(BB, SB), Array.isArray(YB) || (YB = [dB, YB]));
          var VB = function(BB) {
            var OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(GB, YB) {
              if ("number" === typeof BB) return BB;
              var DB = (0, pB.C)(GB) || (0, pB.y)(GB);
              return DB ? BB(GB, YB) : (DB || (0, WB.d)(!1), OB)
            }
          }(UB, mB.defaultProps.minPointSize)(YB[1], OB);
          if ("horizontal" === RB) {
            var nB, fB = [oB.scale(YB[0]), oB.scale(YB[1])],
              uB = fB[0],
              IB = fB[1];
            PB = (0, NB.z)({
              axis: QB,
              ticks: jB,
              bandSize: DB,
              offset: ZB.offset,
              entry: BB,
              index: OB
            }), zB = null !== (nB = null !== IB && void 0 !== IB ? IB : uB) && void 0 !== nB ? nB : void 0, lB = ZB.size;
            var FB = uB - IB;
            if (qB = Number.isNaN(FB) ? 0 : FB, AB = {
                x: PB,
                y: oB.y,
                width: lB,
                height: oB.height
              }, Math.abs(VB) > 0 && Math.abs(qB) < Math.abs(VB)) {
              var iB = (0, pB.J)(qB || VB) * (Math.abs(VB) - Math.abs(qB));
              zB -= iB, qB += iB
            }
          } else {
            var LB = [QB.scale(YB[0]), QB.scale(YB[1])],
              gB = LB[0],
              XB = LB[1];
            if (PB = gB, zB = (0, NB.z)({
                axis: oB,
                ticks: yB,
                bandSize: DB,
                offset: ZB.offset,
                entry: BB,
                index: OB
              }), lB = XB - gB, qB = ZB.size, AB = {
                x: QB.x,
                y: zB,
                width: QB.width,
                height: qB
              }, Math.abs(VB) > 0 && Math.abs(lB) < Math.abs(VB)) lB += (0, pB.J)(lB || VB) * (Math.abs(VB) - Math.abs(lB))
          }
          return rB(rB(rB({}, BB), {}, {
            x: PB,
            y: zB,
            width: lB,
            height: qB,
            value: JB ? YB : YB[1],
            payload: BB,
            background: AB
          }, KB && KB[OB] && KB[OB].props), {}, {
            tooltipPayload: [(0, NB.ab)(GB, BB)],
            tooltipPosition: {
              x: PB + lB / 2,
              y: zB + qB / 2
            }
          })
        }));
      return rB({
        data: uB,
        layout: RB
      }, lB)
    }))
  },
  6892: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => FB
    });
    var YB = GB(56),
      DB = GB(5782),
      QB = GB.n(DB),
      oB = GB(5701),
      jB = GB.n(oB),
      yB = GB(5587),
      JB = GB(5949),
      MB = GB(6468),
      PB = GB(6639),
      zB = GB(6715),
      lB = GB(5671),
      pB = GB(5951),
      qB = GB(5938),
      ZB = GB(6900),
      NB = ["viewBox"],
      RB = ["viewBox"],
      WB = ["ticks"];

    function AB(BB) {
      return AB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, AB(BB)
    }

    function VB() {
      return VB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, VB.apply(this, arguments)
    }

    function SB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function nB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? SB(Object(GB), !0).forEach((function(OB) {
          mB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : SB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function UB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function fB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, IB(YB.key), YB)
      }
    }

    function kB(BB, OB, GB) {
      return OB = KB(OB),
        function(BB, OB) {
          if (OB && ("object" === AB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, dB() ? Reflect.construct(OB, GB || [], KB(BB).constructor) : OB.apply(BB, GB))
    }

    function dB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (dB = function() {
        return !!BB
      })()
    }

    function KB(BB) {
      return KB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, KB(BB)
    }

    function uB(BB, OB) {
      return uB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, uB(BB, OB)
    }

    function mB(BB, OB, GB) {
      return (OB = IB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function IB(BB) {
      var OB = function(BB, OB) {
        if ("object" != AB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != AB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == AB(OB) ? OB : OB + ""
    }
    var FB = function(BB) {
      function OB(BB) {
        var GB;
        return function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, OB), (GB = kB(this, OB, [BB])).state = {
          fontSize: "",
          letterSpacing: ""
        }, GB
      }
      return function(BB, OB) {
        if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(OB && OB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), OB && uB(BB, OB)
      }(OB, BB), GB = OB, oB = [{
        key: "renderTickItem",
        value: function(BB, OB, GB) {
          var DB = (0, yB.c)(OB.className, "recharts-cartesian-axis-tick-value");
          return YB.isValidElement(BB) ? YB.cloneElement(BB, nB(nB({}, OB), {}, {
            className: DB
          })) : QB()(BB) ? BB(nB(nB({}, OB), {}, {
            className: DB
          })) : YB.createElement(PB.d, VB({}, OB, {
            className: "recharts-cartesian-axis-tick-value"
          }), GB)
        }
      }], (DB = [{
        key: "shouldComponentUpdate",
        value: function(BB, OB) {
          var GB = BB.viewBox,
            YB = UB(BB, NB),
            DB = this.props,
            QB = DB.viewBox,
            oB = UB(DB, RB);
          return !(0, JB.d)(GB, QB) || !(0, JB.d)(YB, oB) || !(0, JB.d)(OB, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var BB = this.layerReference;
          if (BB) {
            var OB = BB.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            OB && this.setState({
              fontSize: window.getComputedStyle(OB).fontSize,
              letterSpacing: window.getComputedStyle(OB).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(BB) {
          var OB, GB, YB, DB, QB, oB, jB = this.props,
            yB = jB.x,
            JB = jB.y,
            MB = jB.width,
            PB = jB.height,
            zB = jB.orientation,
            pB = jB.tickSize,
            qB = jB.mirror,
            ZB = jB.tickMargin,
            NB = qB ? -1 : 1,
            RB = BB.tickSize || pB,
            WB = (0, lB.C)(BB.tickCoord) ? BB.tickCoord : BB.coordinate;
          switch (zB) {
            case "top":
              OB = GB = BB.coordinate, oB = (YB = (DB = JB + +!qB * PB) - NB * RB) - NB * ZB, QB = WB;
              break;
            case "left":
              YB = DB = BB.coordinate, QB = (OB = (GB = yB + +!qB * MB) - NB * RB) - NB * ZB, oB = WB;
              break;
            case "right":
              YB = DB = BB.coordinate, QB = (OB = (GB = yB + +qB * MB) + NB * RB) + NB * ZB, oB = WB;
              break;
            default:
              OB = GB = BB.coordinate, oB = (YB = (DB = JB + +qB * PB) + NB * RB) + NB * ZB, QB = WB
          }
          return {
            line: {
              x1: OB,
              y1: YB,
              x2: GB,
              y2: DB
            },
            kP: {
              x: QB,
              y: oB
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var BB, OB = this.props,
            GB = OB.orientation,
            YB = OB.mirror;
          switch (GB) {
            case "left":
              BB = YB ? "start" : "end";
              break;
            case "right":
              BB = YB ? "end" : "start";
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
            OB = BB.orientation,
            GB = BB.mirror,
            YB = "end";
          switch (OB) {
            case "left":
            case "right":
              YB = "middle";
              break;
            case "top":
              YB = GB ? "start" : "end";
              break;
            default:
              YB = GB ? "end" : "start"
          }
          return YB
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var BB = this.props,
            OB = BB.x,
            GB = BB.y,
            DB = BB.width,
            QB = BB.height,
            oB = BB.orientation,
            JB = BB.mirror,
            MB = BB.axisLine,
            PB = nB(nB(nB({}, (0, qB.e)(this.props, !1)), (0, qB.e)(MB, !1)), {}, {
              fill: "none"
            });
          if ("top" === oB || "bottom" === oB) {
            var zB = +("top" === oB && !JB || "bottom" === oB && JB);
            PB = nB(nB({}, PB), {}, {
              x1: OB,
              y1: GB + zB * QB,
              x2: OB + DB,
              y2: GB + zB * QB
            })
          } else {
            var lB = +("left" === oB && !JB || "right" === oB && JB);
            PB = nB(nB({}, PB), {}, {
              x1: OB + lB * DB,
              y1: GB,
              x2: OB + lB * DB,
              y2: GB + QB
            })
          }
          return YB.createElement("line", VB({}, PB, {
            className: (0, yB.c)("recharts-cartesian-axis-line", jB()(MB, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(BB, GB, DB) {
          var oB = this,
            JB = this.props,
            PB = JB.tickLine,
            zB = JB.stroke,
            lB = JB.kP,
            NB = JB.tickFormatter,
            RB = JB.unit,
            WB = (0, ZB.b)(nB(nB({}, this.props), {}, {
              ticks: BB
            }), GB, DB),
            AB = this.getTickTextAnchor(),
            SB = this.getTickVerticalAnchor(),
            UB = (0, qB.e)(this.props, !1),
            fB = (0, qB.e)(lB, !1),
            kB = nB(nB({}, UB), {}, {
              fill: "none"
            }, (0, qB.e)(PB, !1)),
            dB = WB.map((function(BB, GB) {
              var DB = oB.getTickLineCoord(BB),
                JB = DB.line,
                qB = DB.kP,
                ZB = nB(nB(nB(nB({
                  textAnchor: AB,
                  verticalAnchor: SB
                }, UB), {}, {
                  stroke: "none",
                  fill: zB
                }, fB), qB), {}, {
                  index: GB,
                  payload: BB,
                  visibleTicksCount: WB.length,
                  tickFormatter: NB
                });
              return YB.createElement(MB.b, VB({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(BB.value, "-").concat(BB.coordinate, "-").concat(BB.tickCoord)
              }, (0, pB.j)(oB.props, BB, GB)), PB && YB.createElement("line", VB({}, kB, JB, {
                className: (0, yB.c)("recharts-cartesian-axis-tick-line", jB()(PB, "className"))
              })), lB && OB.renderTickItem(lB, ZB, "".concat(QB()(NB) ? NB(BB.value, GB) : BB.value).concat(RB || "")))
            }));
          return YB.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, dB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this,
            OB = this.props,
            GB = OB.axisLine,
            DB = OB.width,
            oB = OB.height,
            jB = OB.ticksGenerator,
            JB = OB.className;
          if (OB.hide) return null;
          var PB = this.props,
            lB = PB.ticks,
            pB = UB(PB, WB),
            qB = lB;
          return QB()(jB) && (qB = lB && lB.length > 0 ? jB(this.props) : jB(pB)), DB <= 0 || oB <= 0 || !qB || !qB.length ? null : YB.createElement(MB.b, {
            className: (0, yB.c)("recharts-cartesian-axis", JB),
            ref: function(OB) {
              BB.layerReference = OB
            }
          }, GB && this.renderAxisLine(), this.renderTicks(qB, this.state.fontSize, this.state.letterSpacing), zB.b.renderCallByParent(this.props))
        }
      }]) && fB(GB.prototype, DB), oB && fB(GB, oB), Object.defineProperty(GB, "prototype", {
        writable: !1
      }), GB;
      var GB, DB, oB
    }(YB.Component);
    mB(FB, "displayName", "CartesianAxis"), mB(FB, "defaultProps", {
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
      kP: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6915: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => mB
    });
    var YB = GB(56),
      DB = GB(5782),
      QB = GB.n(DB),
      oB = GB(5935),
      jB = GB(5671),
      yB = GB(5938),
      JB = GB(6648),
      MB = GB(6900),
      PB = GB(6892),
      zB = GB(6834),
      lB = ["x1", "y1", "x2", "y2", "key"],
      pB = ["offset"];

    function qB(BB) {
      return qB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, qB(BB)
    }

    function ZB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function NB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? ZB(Object(GB), !0).forEach((function(OB) {
          RB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : ZB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function RB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != qB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != qB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == qB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function WB() {
      return WB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, WB.apply(this, arguments)
    }

    function AB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }
    var VB = function(BB) {
      var OB = BB.fill;
      if (!OB || "none" === OB) return null;
      var GB = BB.fillOpacity,
        DB = BB.x,
        QB = BB.y,
        oB = BB.width,
        jB = BB.height,
        yB = BB.ry;
      return YB.createElement("rect", {
        x: DB,
        y: QB,
        ry: yB,
        width: oB,
        height: jB,
        stroke: "none",
        fill: OB,
        fillOpacity: GB,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function SB(BB, OB) {
      var GB;
      if (YB.isValidElement(BB)) GB = YB.cloneElement(BB, OB);
      else if (QB()(BB)) GB = BB(OB);
      else {
        var DB = OB.x1,
          oB = OB.y1,
          jB = OB.x2,
          JB = OB.y2,
          MB = OB.key,
          PB = AB(OB, lB),
          zB = (0, yB.e)(PB, !1),
          qB = (zB.offset, AB(zB, pB));
        GB = YB.createElement("line", WB({}, qB, {
          x1: DB,
          y1: oB,
          x2: jB,
          y2: JB,
          fill: "none",
          key: MB
        }))
      }
      return GB
    }

    function nB(BB) {
      var OB = BB.x,
        GB = BB.width,
        DB = BB.horizontal,
        QB = void 0 === DB || DB,
        oB = BB.horizontalPoints;
      if (!QB || !oB || !oB.length) return null;
      var jB = oB.map((function(YB, DB) {
        var oB = NB(NB({}, BB), {}, {
          x1: OB,
          y1: YB,
          x2: OB + GB,
          y2: YB,
          key: "line-".concat(DB),
          index: DB
        });
        return SB(QB, oB)
      }));
      return YB.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, jB)
    }

    function UB(BB) {
      var OB = BB.y,
        GB = BB.height,
        DB = BB.vertical,
        QB = void 0 === DB || DB,
        oB = BB.verticalPoints;
      if (!QB || !oB || !oB.length) return null;
      var jB = oB.map((function(YB, DB) {
        var oB = NB(NB({}, BB), {}, {
          x1: YB,
          y1: OB,
          x2: YB,
          y2: OB + GB,
          key: "line-".concat(DB),
          index: DB
        });
        return SB(QB, oB)
      }));
      return YB.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, jB)
    }

    function fB(BB) {
      var OB = BB.horizontalFill,
        GB = BB.fillOpacity,
        DB = BB.x,
        QB = BB.y,
        oB = BB.width,
        jB = BB.height,
        yB = BB.horizontalPoints,
        JB = BB.horizontal;
      if (!(void 0 === JB || JB) || !OB || !OB.length) return null;
      var MB = yB.map((function(BB) {
        return Math.round(BB + QB - QB)
      })).sort((function(BB, OB) {
        return BB - OB
      }));
      QB !== MB[0] && MB.unshift(0);
      var PB = MB.map((function(BB, yB) {
        var JB = !MB[yB + 1] ? QB + jB - BB : MB[yB + 1] - BB;
        if (JB <= 0) return null;
        var PB = yB % OB.length;
        return YB.createElement("rect", {
          key: "react-".concat(yB),
          y: BB,
          x: DB,
          height: JB,
          width: oB,
          stroke: "none",
          fill: OB[PB],
          fillOpacity: GB,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return YB.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, PB)
    }

    function kB(BB) {
      var OB = BB.vertical,
        GB = void 0 === OB || OB,
        DB = BB.verticalFill,
        QB = BB.fillOpacity,
        oB = BB.x,
        jB = BB.y,
        yB = BB.width,
        JB = BB.height,
        MB = BB.verticalPoints;
      if (!GB || !DB || !DB.length) return null;
      var PB = MB.map((function(BB) {
        return Math.round(BB + oB - oB)
      })).sort((function(BB, OB) {
        return BB - OB
      }));
      oB !== PB[0] && PB.unshift(0);
      var zB = PB.map((function(BB, OB) {
        var GB = !PB[OB + 1] ? oB + yB - BB : PB[OB + 1] - BB;
        if (GB <= 0) return null;
        var MB = OB % DB.length;
        return YB.createElement("rect", {
          key: "react-".concat(OB),
          x: BB,
          y: jB,
          width: GB,
          height: JB,
          stroke: "none",
          fill: DB[MB],
          fillOpacity: QB,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return YB.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, zB)
    }
    var dB = function(BB, OB) {
        var GB = BB.xAxis,
          YB = BB.width,
          DB = BB.height,
          QB = BB.offset;
        return (0, JB.F)((0, MB.b)(NB(NB(NB({}, PB.b.defaultProps), GB), {}, {
          ticks: (0, JB.Y)(GB, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: YB,
            height: DB
          }
        })), QB.left, QB.left + QB.width, OB)
      },
      KB = function(BB, OB) {
        var GB = BB.yAxis,
          YB = BB.width,
          DB = BB.height,
          QB = BB.offset;
        return (0, JB.F)((0, MB.b)(NB(NB(NB({}, PB.b.defaultProps), GB), {}, {
          ticks: (0, JB.Y)(GB, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: YB,
            height: DB
          }
        })), QB.top, QB.top + QB.height, OB)
      },
      uB = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function mB(BB) {
      var OB, GB, DB, yB, JB, MB, PB = (0, zB.m)(),
        lB = (0, zB.k)(),
        pB = (0, zB.s)(),
        ZB = NB(NB({}, BB), {}, {
          stroke: null !== (OB = BB.stroke) && void 0 !== OB ? OB : uB.stroke,
          fill: null !== (GB = BB.fill) && void 0 !== GB ? GB : uB.fill,
          horizontal: null !== (DB = BB.horizontal) && void 0 !== DB ? DB : uB.horizontal,
          horizontalFill: null !== (yB = BB.horizontalFill) && void 0 !== yB ? yB : uB.horizontalFill,
          vertical: null !== (JB = BB.vertical) && void 0 !== JB ? JB : uB.vertical,
          verticalFill: null !== (MB = BB.verticalFill) && void 0 !== MB ? MB : uB.verticalFill,
          x: (0, jB.C)(BB.x) ? BB.x : pB.left,
          y: (0, jB.C)(BB.y) ? BB.y : pB.top,
          width: (0, jB.C)(BB.width) ? BB.width : pB.width,
          height: (0, jB.C)(BB.height) ? BB.height : pB.height
        }),
        RB = ZB.x,
        AB = ZB.y,
        SB = ZB.width,
        mB = ZB.height,
        IB = ZB.syncWithTicks,
        FB = ZB.horizontalValues,
        iB = ZB.verticalValues,
        LB = (0, zB.h)(),
        gB = (0, zB.B)();
      if (!(0, jB.C)(SB) || SB <= 0 || !(0, jB.C)(mB) || mB <= 0 || !(0, jB.C)(RB) || RB !== +RB || !(0, jB.C)(AB) || AB !== +AB) return null;
      var rB = ZB.verticalCoordinatesGenerator || dB,
        XB = ZB.horizontalCoordinatesGenerator || KB,
        wB = ZB.horizontalPoints,
        EB = ZB.verticalPoints;
      if ((!wB || !wB.length) && QB()(XB)) {
        var cB = FB && FB.length,
          hB = XB({
            yAxis: gB ? NB(NB({}, gB), {}, {
              ticks: cB ? FB : gB.ticks
            }) : void 0,
            width: PB,
            height: lB,
            offset: pB
          }, !!cB || IB);
        (0, oB.b)(Array.isArray(hB), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(qB(hB), "]")), Array.isArray(hB) && (wB = hB)
      }
      if ((!EB || !EB.length) && QB()(rB)) {
        var aB = iB && iB.length,
          eB = rB({
            xAxis: LB ? NB(NB({}, LB), {}, {
              ticks: aB ? iB : LB.ticks
            }) : void 0,
            width: PB,
            height: lB,
            offset: pB
          }, !!aB || IB);
        (0, oB.b)(Array.isArray(eB), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(qB(eB), "]")), Array.isArray(eB) && (EB = eB)
      }
      return YB.createElement("g", {
        className: "recharts-cartesian-grid"
      }, YB.createElement(VB, {
        fill: ZB.fill,
        fillOpacity: ZB.fillOpacity,
        x: ZB.x,
        y: ZB.y,
        width: ZB.width,
        height: ZB.height,
        ry: ZB.ry
      }), YB.createElement(nB, WB({}, ZB, {
        offset: pB,
        horizontalPoints: wB,
        xAxis: LB,
        yAxis: gB
      })), YB.createElement(UB, WB({}, ZB, {
        offset: pB,
        verticalPoints: EB,
        xAxis: LB,
        yAxis: gB
      })), YB.createElement(fB, WB({}, ZB, {
        horizontalPoints: wB
      })), YB.createElement(kB, WB({}, ZB, {
        verticalPoints: EB
      })))
    }
    mB.displayName = "CartesianGrid"
  },
  6702: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => AB
    });
    var YB = GB(56),
      DB = GB(6463),
      QB = GB(6468),
      oB = GB(5938),
      jB = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function yB(BB) {
      return yB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, yB(BB)
    }

    function JB() {
      return JB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, JB.apply(this, arguments)
    }

    function MB(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        var GB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != GB) {
          var YB, DB, QB, oB, jB = [],
            yB = !0,
            JB = !1;
          try {
            if (QB = (GB = GB.call(BB)).next, 0 === OB) {
              if (Object(GB) !== GB) return;
              yB = !1
            } else
              for (; !(yB = (YB = QB.call(GB)).done) && (jB.push(YB.value), jB.length !== OB); yB = !0);
          } catch (BB) {
            JB = !0, DB = BB
          } finally {
            try {
              if (!yB && null != GB.return && (oB = GB.return(), Object(oB) !== oB)) return
            } finally {
              if (JB) throw DB
            }
          }
          return jB
        }
      }(BB, OB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return PB(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return PB(BB, OB)
      }(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function PB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function zB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function lB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, WB(YB.key), YB)
      }
    }

    function pB(BB, OB, GB) {
      return OB = ZB(OB),
        function(BB, OB) {
          if (OB && ("object" === yB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, qB() ? Reflect.construct(OB, GB || [], ZB(BB).constructor) : OB.apply(BB, GB))
    }

    function qB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (qB = function() {
        return !!BB
      })()
    }

    function ZB(BB) {
      return ZB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, ZB(BB)
    }

    function NB(BB, OB) {
      return NB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, NB(BB, OB)
    }

    function RB(BB, OB, GB) {
      return (OB = WB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function WB(BB) {
      var OB = function(BB, OB) {
        if ("object" != yB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != yB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == yB(OB) ? OB : OB + ""
    }
    var AB = function(BB) {
      function OB() {
        return function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, OB), pB(this, OB, arguments)
      }
      return function(BB, OB) {
        if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(OB && OB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), OB && NB(BB, OB)
      }(OB, BB), GB = OB, (yB = [{
        key: "render",
        value: function() {
          var BB = this.props,
            OB = BB.offset,
            GB = BB.layout,
            yB = BB.width,
            PB = BB.dataKey,
            lB = BB.data,
            pB = BB.dataPointFormatter,
            qB = BB.xAxis,
            ZB = BB.yAxis,
            NB = zB(BB, jB),
            RB = (0, oB.e)(NB, !1);
          "x" === this.props.direction && "number" !== qB.type && (0, DB.d)(!1);
          var WB = lB.map((function(BB) {
            var DB = pB(BB, PB),
              oB = DB.x,
              jB = DB.y,
              zB = DB.value,
              lB = DB.errorVal;
            if (!lB) return null;
            var NB, WB, AB = [];
            if (Array.isArray(lB)) {
              var VB = MB(lB, 2);
              NB = VB[0], WB = VB[1]
            } else NB = WB = lB;
            if ("vertical" === GB) {
              var SB = qB.scale,
                nB = jB + OB,
                UB = nB + yB,
                fB = nB - yB,
                kB = SB(zB - NB),
                dB = SB(zB + WB);
              AB.push({
                x1: dB,
                y1: UB,
                x2: dB,
                y2: fB
              }), AB.push({
                x1: kB,
                y1: nB,
                x2: dB,
                y2: nB
              }), AB.push({
                x1: kB,
                y1: UB,
                x2: kB,
                y2: fB
              })
            } else if ("horizontal" === GB) {
              var KB = ZB.scale,
                uB = oB + OB,
                mB = uB - yB,
                IB = uB + yB,
                FB = KB(zB - NB),
                iB = KB(zB + WB);
              AB.push({
                x1: mB,
                y1: iB,
                x2: IB,
                y2: iB
              }), AB.push({
                x1: uB,
                y1: FB,
                x2: uB,
                y2: iB
              }), AB.push({
                x1: mB,
                y1: FB,
                x2: IB,
                y2: FB
              })
            }
            return YB.createElement(QB.b, JB({
              className: "recharts-errorBar",
              key: "bar-".concat(AB.map((function(BB) {
                return "".concat(BB.x1, "-").concat(BB.x2, "-").concat(BB.y1, "-").concat(BB.y2)
              })))
            }, RB), AB.map((function(BB) {
              return YB.createElement("line", JB({}, BB, {
                key: "line-".concat(BB.x1, "-").concat(BB.x2, "-").concat(BB.y1, "-").concat(BB.y2)
              }))
            })))
          }));
          return YB.createElement(QB.b, {
            className: "recharts-errorBars"
          }, WB)
        }
      }]) && lB(GB.prototype, yB), PB && lB(GB, PB), Object.defineProperty(GB, "prototype", {
        writable: !1
      }), GB;
      var GB, yB, PB
    }(YB.Component);
    RB(AB, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), RB(AB, "displayName", "ErrorBar")
  },
  6875: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => XB
    });
    var YB = GB(56),
      DB = GB(6635),
      QB = GB(5782),
      oB = GB.n(QB),
      jB = GB(5930),
      yB = GB.n(jB),
      JB = GB(6695),
      MB = GB.n(JB),
      PB = GB(5587),
      zB = GB(6866),
      lB = GB(6620),
      pB = GB(6468),
      qB = GB(6776),
      ZB = GB(6702),
      NB = GB(5671),
      RB = GB(5938),
      WB = GB(6485),
      AB = GB(6648),
      VB = ["type", "layout", "connectNulls", "ref"],
      SB = ["key"];

    function nB(BB) {
      return nB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, nB(BB)
    }

    function UB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function fB() {
      return fB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, fB.apply(this, arguments)
    }

    function kB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function dB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? kB(Object(GB), !0).forEach((function(OB) {
          gB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : kB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function KB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return uB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return uB(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return uB(BB, OB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function mB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, rB(YB.key), YB)
      }
    }

    function IB(BB, OB, GB) {
      return OB = iB(OB),
        function(BB, OB) {
          if (OB && ("object" === nB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, FB() ? Reflect.construct(OB, GB || [], iB(BB).constructor) : OB.apply(BB, GB))
    }

    function FB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (FB = function() {
        return !!BB
      })()
    }

    function iB(BB) {
      return iB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, iB(BB)
    }

    function LB(BB, OB) {
      return LB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, LB(BB, OB)
    }

    function gB(BB, OB, GB) {
      return (OB = rB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function rB(BB) {
      var OB = function(BB, OB) {
        if ("object" != nB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != nB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == nB(OB) ? OB : OB + ""
    }
    var XB = function(BB) {
      function OB() {
        var BB;
        ! function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, OB);
        for (var GB = arguments.length, YB = new Array(GB), DB = 0; DB < GB; DB++) YB[DB] = arguments[DB];
        return gB(BB = IB(this, OB, [].concat(YB)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), gB(BB, "generateSimpleStrokeDasharray", (function(BB, OB) {
          return "".concat(OB, "px ").concat(BB - OB, "px")
        })), gB(BB, "getStrokeDasharray", (function(GB, YB, DB) {
          var QB = DB.reduce((function(BB, OB) {
            return BB + OB
          }));
          if (!QB) return BB.generateSimpleStrokeDasharray(YB, GB);
          for (var oB = Math.floor(GB / QB), jB = GB % QB, yB = YB - GB, JB = [], MB = 0, PB = 0; MB < DB.length; PB += DB[MB], ++MB)
            if (PB + DB[MB] > jB) {
              JB = [].concat(KB(DB.slice(0, MB)), [jB - PB]);
              break
            } var zB = JB.length % 2 === 0 ? [0, yB] : [yB];
          return [].concat(KB(OB.repeat(DB, oB)), KB(JB), zB).map((function(BB) {
            return "".concat(BB, "px")
          })).join(", ")
        })), gB(BB, "id", (0, NB.M)("recharts-line-")), gB(BB, "pathRef", (function(OB) {
          BB.mainCurve = OB
        })), gB(BB, "handleAnimationEnd", (function() {
          BB.setState({
            isAnimationFinished: !0
          }), BB.props.onAnimationEnd && BB.props.onAnimationEnd()
        })), gB(BB, "handleAnimationStart", (function() {
          BB.setState({
            isAnimationFinished: !1
          }), BB.props.onAnimationStart && BB.props.onAnimationStart()
        })), BB
      }
      return function(BB, OB) {
        if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(OB && OB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), OB && LB(BB, OB)
      }(OB, BB), GB = OB, QB = [{
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
          } catch (OB) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(BB, OB) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var GB = this.props,
            DB = GB.points,
            QB = GB.xAxis,
            oB = GB.yAxis,
            jB = GB.layout,
            yB = GB.children,
            JB = (0, RB.i)(yB, ZB.b);
          if (!JB) return null;
          var MB = function(BB, OB) {
              return {
                x: BB.x,
                y: BB.y,
                value: BB.value,
                errorVal: (0, AB.eb)(BB.payload, OB)
              }
            },
            PB = {
              clipPath: BB ? "url(#clipPath-".concat(OB, ")") : null
            };
          return YB.createElement(pB.b, PB, JB.map((function(BB) {
            return YB.cloneElement(BB, {
              key: "bar-".concat(BB.props.dataKey),
              data: DB,
              xAxis: QB,
              yAxis: oB,
              layout: jB,
              dataPointFormatter: MB
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(BB, GB, DB) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var QB = this.props,
            oB = QB.dot,
            jB = QB.points,
            yB = QB.dataKey,
            JB = (0, RB.e)(this.props, !1),
            MB = (0, RB.e)(oB, !0),
            PB = jB.map((function(BB, GB) {
              var YB = dB(dB(dB({
                key: "dot-".concat(GB),
                r: 3
              }, JB), MB), {}, {
                index: GB,
                cx: BB.x,
                cy: BB.y,
                value: BB.value,
                dataKey: yB,
                payload: BB.payload,
                points: jB
              });
              return OB.renderDotItem(oB, YB)
            })),
            zB = {
              clipPath: BB ? "url(#clipPath-".concat(GB ? "" : "dots-").concat(DB, ")") : null
            };
          return YB.createElement(pB.b, fB({
            className: "recharts-line-dots",
            key: "dots"
          }, zB), PB)
        }
      }, {
        key: "renderCurveStatically",
        value: function(BB, OB, GB, DB) {
          var QB = this.props,
            oB = QB.type,
            jB = QB.layout,
            yB = QB.connectNulls,
            JB = (QB.ref, UB(QB, VB)),
            MB = dB(dB(dB({}, (0, RB.e)(JB, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: OB ? "url(#clipPath-".concat(GB, ")") : null,
              points: BB
            }, DB), {}, {
              type: oB,
              layout: jB,
              connectNulls: yB
            });
          return YB.createElement(zB.b, fB({}, MB, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(BB, OB) {
          var GB = this,
            QB = this.props,
            oB = QB.points,
            jB = QB.strokeDasharray,
            yB = QB.isAnimationActive,
            JB = QB.animationBegin,
            MB = QB.animationDuration,
            PB = QB.animationEasing,
            zB = QB.animationId,
            lB = QB.animateNewValues,
            pB = QB.width,
            qB = QB.height,
            ZB = this.state,
            RB = ZB.prevPoints,
            WB = ZB.totalLength;
          return YB.createElement(DB.e, {
            ZP: JB,
            duration: MB,
            isActive: yB,
            easing: PB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(zB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(YB) {
            var DB = YB.t;
            if (RB) {
              var QB = RB.length / oB.length,
                yB = oB.map((function(BB, OB) {
                  var GB = Math.floor(OB * QB);
                  if (RB[GB]) {
                    var YB = RB[GB],
                      oB = (0, NB.v)(YB.x, BB.x),
                      jB = (0, NB.v)(YB.y, BB.y);
                    return dB(dB({}, BB), {}, {
                      x: oB(DB),
                      y: jB(DB)
                    })
                  }
                  if (lB) {
                    var yB = (0, NB.v)(2 * pB, BB.x),
                      JB = (0, NB.v)(qB / 2, BB.y);
                    return dB(dB({}, BB), {}, {
                      x: yB(DB),
                      y: JB(DB)
                    })
                  }
                  return dB(dB({}, BB), {}, {
                    x: BB.x,
                    y: BB.y
                  })
                }));
              return GB.renderCurveStatically(yB, BB, OB)
            }
            var JB, MB = (0, NB.v)(0, WB)(DB);
            if (jB) {
              var PB = "".concat(jB).split(/[,\s]+/gim).map((function(BB) {
                return parseFloat(BB)
              }));
              JB = GB.getStrokeDasharray(MB, WB, PB)
            } else JB = GB.generateSimpleStrokeDasharray(WB, MB);
            return GB.renderCurveStatically(oB, BB, OB, {
              strokeDasharray: JB
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(BB, OB) {
          var GB = this.props,
            YB = GB.points,
            DB = GB.isAnimationActive,
            QB = this.state,
            oB = QB.prevPoints,
            jB = QB.totalLength;
          return DB && YB && YB.length && (!oB && jB > 0 || !MB()(oB, YB)) ? this.renderCurveWithAnimation(BB, OB) : this.renderCurveStatically(YB, BB, OB)
        }
      }, {
        key: "render",
        value: function() {
          var BB, OB = this.props,
            GB = OB.hide,
            DB = OB.dot,
            QB = OB.points,
            oB = OB.className,
            jB = OB.xAxis,
            JB = OB.yAxis,
            MB = OB.top,
            zB = OB.left,
            lB = OB.width,
            ZB = OB.height,
            NB = OB.isAnimationActive,
            WB = OB.id;
          if (GB || !QB || !QB.length) return null;
          var AB = this.state.isAnimationFinished,
            VB = 1 === QB.length,
            SB = (0, PB.c)("recharts-line", oB),
            nB = jB && jB.allowDataOverflow,
            UB = JB && JB.allowDataOverflow,
            fB = nB || UB,
            kB = yB()(WB) ? this.id : WB,
            dB = null !== (BB = (0, RB.e)(DB, !1)) && void 0 !== BB ? BB : {
              r: 3,
              strokeWidth: 2
            },
            KB = dB.r,
            uB = void 0 === KB ? 3 : KB,
            mB = dB.strokeWidth,
            IB = void 0 === mB ? 2 : mB,
            FB = ((0, RB.u)(DB) ? DB : {}).clipDot,
            iB = void 0 === FB || FB,
            LB = 2 * uB + IB;
          return YB.createElement(pB.b, {
            className: SB
          }, nB || UB ? YB.createElement("defs", null, YB.createElement("clipPath", {
            id: "clipPath-".concat(kB)
          }, YB.createElement("rect", {
            x: nB ? zB : zB - lB / 2,
            y: UB ? MB : MB - ZB / 2,
            width: nB ? lB : 2 * lB,
            height: UB ? ZB : 2 * ZB
          })), !iB && YB.createElement("clipPath", {
            id: "clipPath-dots-".concat(kB)
          }, YB.createElement("rect", {
            x: zB - LB / 2,
            y: MB - LB / 2,
            width: lB + LB,
            height: ZB + LB
          }))) : null, !VB && this.renderCurve(fB, kB), this.renderErrorBar(fB, kB), (VB || DB) && this.renderDots(fB, iB, kB), (!NB || AB) && qB.d.renderCallByParent(this.props, QB))
        }
      }], jB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, OB) {
          return BB.animationId !== OB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curPoints: BB.points,
            prevPoints: OB.curPoints
          } : BB.points !== OB.curPoints ? {
            curPoints: BB.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(BB, OB) {
          for (var GB = BB.length % 2 !== 0 ? [].concat(KB(BB), [0]) : BB, YB = [], DB = 0; DB < OB; ++DB) YB = [].concat(KB(YB), KB(GB));
          return YB
        }
      }, {
        key: "renderDotItem",
        value: function(BB, OB) {
          var GB;
          if (YB.isValidElement(BB)) GB = YB.cloneElement(BB, OB);
          else if (oB()(BB)) GB = BB(OB);
          else {
            var DB = OB.key,
              QB = UB(OB, SB),
              jB = (0, PB.c)("recharts-line-dot", "boolean" !== typeof BB ? BB.className : "");
            GB = YB.createElement(lB.b, fB({
              key: DB
            }, QB, {
              className: jB
            }))
          }
          return GB
        }
      }], QB && mB(GB.prototype, QB), jB && mB(GB, jB), Object.defineProperty(GB, "prototype", {
        writable: !1
      }), GB;
      var GB, QB, jB
    }(YB.PureComponent);
    gB(XB, "displayName", "Line"), gB(XB, "defaultProps", {
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
      isAnimationActive: !WB.d.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), gB(XB, "getComposedData", (function(BB) {
      var OB = BB.props,
        GB = BB.xAxis,
        YB = BB.yAxis,
        DB = BB.xAxisTicks,
        QB = BB.yAxisTicks,
        oB = BB.dataKey,
        jB = BB.bandSize,
        JB = BB.displayedData,
        MB = BB.offset,
        PB = OB.layout;
      return dB({
        points: JB.map((function(BB, OB) {
          var JB = (0, AB.eb)(BB, oB);
          return "horizontal" === PB ? {
            x: (0, AB.B)({
              axis: GB,
              ticks: DB,
              bandSize: jB,
              entry: BB,
              index: OB
            }),
            y: yB()(JB) ? null : YB.scale(JB),
            value: JB,
            payload: BB
          } : {
            x: yB()(JB) ? null : GB.scale(JB),
            y: (0, AB.B)({
              axis: YB,
              ticks: QB,
              bandSize: jB,
              entry: BB,
              index: OB
            }),
            value: JB,
            payload: BB
          }
        })),
        layout: PB
      }, MB)
    }))
  },
  6817: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => IB
    });
    var YB = GB(56),
      DB = GB(5782),
      QB = GB.n(DB),
      oB = GB(6823),
      jB = GB.n(oB),
      yB = GB(5587),
      JB = GB(6468),
      MB = GB(6715),
      PB = GB(6728),
      zB = GB(5671),
      lB = GB(6732),
      pB = GB(5935),
      qB = GB(5938),
      ZB = GB(6834);

    function NB(BB) {
      return NB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, NB(BB)
    }

    function RB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, kB(YB.key), YB)
      }
    }

    function WB(BB, OB, GB) {
      return OB = VB(OB),
        function(BB, OB) {
          if (OB && ("object" === NB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, AB() ? Reflect.construct(OB, GB || [], VB(BB).constructor) : OB.apply(BB, GB))
    }

    function AB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (AB = function() {
        return !!BB
      })()
    }

    function VB(BB) {
      return VB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, VB(BB)
    }

    function SB(BB, OB) {
      return SB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, SB(BB, OB)
    }

    function nB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function UB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? nB(Object(GB), !0).forEach((function(OB) {
          fB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : nB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function fB(BB, OB, GB) {
      return (OB = kB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function kB(BB) {
      var OB = function(BB, OB) {
        if ("object" != NB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != NB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == NB(OB) ? OB : OB + ""
    }

    function dB(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        var GB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != GB) {
          var YB, DB, QB, oB, jB = [],
            yB = !0,
            JB = !1;
          try {
            if (QB = (GB = GB.call(BB)).next, 0 === OB) {
              if (Object(GB) !== GB) return;
              yB = !1
            } else
              for (; !(yB = (YB = QB.call(GB)).done) && (jB.push(YB.value), jB.length !== OB); yB = !0);
          } catch (BB) {
            JB = !0, DB = BB
          } finally {
            try {
              if (!yB && null != GB.return && (oB = GB.return(), Object(oB) !== oB)) return
            } finally {
              if (JB) throw DB
            }
          }
          return jB
        }
      }(BB, OB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return KB(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return KB(BB, OB)
      }(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function KB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function uB() {
      return uB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, uB.apply(this, arguments)
    }

    function mB(BB) {
      var OB = BB.x,
        GB = BB.y,
        DB = BB.segment,
        oB = BB.xAxisId,
        NB = BB.yAxisId,
        RB = BB.shape,
        WB = BB.className,
        AB = BB.alwaysShow,
        VB = (0, ZB.p)(),
        SB = (0, ZB.u)(oB),
        nB = (0, ZB.y)(NB),
        fB = (0, ZB.t)();
      if (!VB || !fB) return null;
      (0, pB.b)(void 0 === AB, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var kB = function(BB, OB, GB, YB, DB, QB, oB, yB, JB) {
        var MB = DB.x,
          zB = DB.y,
          lB = DB.width,
          pB = DB.height;
        if (GB) {
          var qB = JB.y,
            ZB = BB.y.apply(qB, {
              position: QB
            });
          if ((0, PB.b)(JB, "discard") && !BB.y.isInRange(ZB)) return null;
          var NB = [{
            x: MB + lB,
            y: ZB
          }, {
            x: MB,
            y: ZB
          }];
          return "left" === yB ? NB.reverse() : NB
        }
        if (OB) {
          var RB = JB.x,
            WB = BB.x.apply(RB, {
              position: QB
            });
          if ((0, PB.b)(JB, "discard") && !BB.x.isInRange(WB)) return null;
          var AB = [{
            x: WB,
            y: zB + pB
          }, {
            x: WB,
            y: zB
          }];
          return "top" === oB ? AB.reverse() : AB
        }
        if (YB) {
          var VB = JB.segment.map((function(OB) {
            return BB.apply(OB, {
              position: QB
            })
          }));
          return (0, PB.b)(JB, "discard") && jB()(VB, (function(OB) {
            return !BB.isInRange(OB)
          })) ? null : VB
        }
        return null
      }((0, lB.e)({
        x: SB.scale,
        y: nB.scale
      }), (0, zB.z)(OB), (0, zB.z)(GB), DB && 2 === DB.length, fB, BB.position, SB.orientation, nB.orientation, BB);
      if (!kB) return null;
      var KB = dB(kB, 2),
        mB = KB[0],
        IB = mB.x,
        FB = mB.y,
        iB = KB[1],
        LB = iB.x,
        gB = iB.y,
        rB = UB(UB({
          clipPath: (0, PB.b)(BB, "hidden") ? "url(#".concat(VB, ")") : void 0
        }, (0, qB.e)(BB, !0)), {}, {
          x1: IB,
          y1: FB,
          x2: LB,
          y2: gB
        });
      return YB.createElement(JB.b, {
        className: (0, yB.c)("recharts-reference-line", WB)
      }, function(BB, OB) {
        return YB.isValidElement(BB) ? YB.cloneElement(BB, OB) : QB()(BB) ? BB(OB) : YB.createElement("line", uB({}, OB, {
          className: "recharts-reference-line-line"
        }))
      }(RB, rB), MB.b.renderCallByParent(BB, (0, lB.l)({
        x1: IB,
        y1: FB,
        x2: LB,
        y2: gB
      })))
    }
    var IB = function(BB) {
      function OB() {
        return function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, OB), WB(this, OB, arguments)
      }
      return function(BB, OB) {
        if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(OB && OB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), OB && SB(BB, OB)
      }(OB, BB), GB = OB, (DB = [{
        key: "render",
        value: function() {
          return YB.createElement(mB, this.props)
        }
      }]) && RB(GB.prototype, DB), QB && RB(GB, QB), Object.defineProperty(GB, "prototype", {
        writable: !1
      }), GB;
      var GB, DB, QB
    }(YB.Component);
    fB(IB, "displayName", "ReferenceLine"), fB(IB, "defaultProps", {
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
  6884: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => RB
    });
    var YB = GB(56),
      DB = GB(5587),
      QB = GB(6834),
      oB = GB(6892),
      jB = GB(6648);

    function yB(BB) {
      return yB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, yB(BB)
    }

    function JB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, qB(YB.key), YB)
      }
    }

    function MB(BB, OB, GB) {
      return OB = zB(OB),
        function(BB, OB) {
          if (OB && ("object" === yB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, PB() ? Reflect.construct(OB, GB || [], zB(BB).constructor) : OB.apply(BB, GB))
    }

    function PB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (PB = function() {
        return !!BB
      })()
    }

    function zB(BB) {
      return zB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, zB(BB)
    }

    function lB(BB, OB) {
      return lB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, lB(BB, OB)
    }

    function pB(BB, OB, GB) {
      return (OB = qB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function qB(BB) {
      var OB = function(BB, OB) {
        if ("object" != yB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != yB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == yB(OB) ? OB : OB + ""
    }

    function ZB() {
      return ZB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, ZB.apply(this, arguments)
    }

    function NB(BB) {
      var OB = BB.xAxisId,
        GB = (0, QB.m)(),
        yB = (0, QB.k)(),
        JB = (0, QB.u)(OB);
      return null == JB ? null : YB.createElement(oB.b, ZB({}, JB, {
        className: (0, DB.c)("recharts-".concat(JB.axisType, " ").concat(JB.axisType), JB.className),
        viewBox: {
          x: 0,
          y: 0,
          width: GB,
          height: yB
        },
        ticksGenerator: function(BB) {
          return (0, jB.Y)(BB, !0)
        }
      }))
    }
    var RB = function(BB) {
      function OB() {
        return function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, OB), MB(this, OB, arguments)
      }
      return function(BB, OB) {
        if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(OB && OB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), OB && lB(BB, OB)
      }(OB, BB), GB = OB, (DB = [{
        key: "render",
        value: function() {
          return YB.createElement(NB, this.props)
        }
      }]) && JB(GB.prototype, DB), QB && JB(GB, QB), Object.defineProperty(GB, "prototype", {
        writable: !1
      }), GB;
      var GB, DB, QB
    }(YB.Component);
    pB(RB, "displayName", "XAxis"), pB(RB, "defaultProps", {
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
  6906: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => RB
    });
    var YB = GB(56),
      DB = GB(5587),
      QB = GB(6834),
      oB = GB(6892),
      jB = GB(6648);

    function yB(BB) {
      return yB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, yB(BB)
    }

    function JB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, qB(YB.key), YB)
      }
    }

    function MB(BB, OB, GB) {
      return OB = zB(OB),
        function(BB, OB) {
          if (OB && ("object" === yB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, PB() ? Reflect.construct(OB, GB || [], zB(BB).constructor) : OB.apply(BB, GB))
    }

    function PB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (PB = function() {
        return !!BB
      })()
    }

    function zB(BB) {
      return zB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, zB(BB)
    }

    function lB(BB, OB) {
      return lB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, lB(BB, OB)
    }

    function pB(BB, OB, GB) {
      return (OB = qB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function qB(BB) {
      var OB = function(BB, OB) {
        if ("object" != yB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != yB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == yB(OB) ? OB : OB + ""
    }

    function ZB() {
      return ZB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, ZB.apply(this, arguments)
    }
    var NB = function(BB) {
        var OB = BB.yAxisId,
          GB = (0, QB.m)(),
          yB = (0, QB.k)(),
          JB = (0, QB.y)(OB);
        return null == JB ? null : YB.createElement(oB.b, ZB({}, JB, {
          className: (0, DB.c)("recharts-".concat(JB.axisType, " ").concat(JB.axisType), JB.className),
          viewBox: {
            x: 0,
            y: 0,
            width: GB,
            height: yB
          },
          ticksGenerator: function(BB) {
            return (0, jB.Y)(BB, !0)
          }
        }))
      },
      RB = function(BB) {
        function OB() {
          return function(BB, OB) {
            if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
          }(this, OB), MB(this, OB, arguments)
        }
        return function(BB, OB) {
          if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(OB && OB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), OB && lB(BB, OB)
        }(OB, BB), GB = OB, (DB = [{
          key: "render",
          value: function() {
            return YB.createElement(NB, this.props)
          }
        }]) && JB(GB.prototype, DB), QB && JB(GB, QB), Object.defineProperty(GB, "prototype", {
          writable: !1
        }), GB;
        var GB, DB, QB
      }(YB.Component);
    pB(RB, "displayName", "YAxis"), pB(RB, "defaultProps", {
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
  6900: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => qB
    });
    var YB = GB(5782),
      DB = GB.n(YB),
      QB = GB(5671),
      oB = GB(6645),
      jB = GB(6485),
      yB = GB(6732);

    function JB(BB, OB, GB) {
      if (OB < 1) return [];
      if (1 === OB && void 0 === GB) return BB;
      for (var YB = [], DB = 0; DB < BB.length; DB += OB) {
        if (void 0 !== GB && !0 !== GB(BB[DB])) return;
        YB.push(BB[DB])
      }
      return YB
    }

    function MB(BB, OB, GB, YB, DB) {
      if (BB * OB < BB * YB || BB * OB > BB * DB) return !1;
      var QB = GB();
      return BB * (OB - BB * QB / 2 - YB) >= 0 && BB * (OB + BB * QB / 2 - DB) <= 0
    }

    function PB(BB) {
      return PB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, PB(BB)
    }

    function zB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function lB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? zB(Object(GB), !0).forEach((function(OB) {
          pB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : zB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function pB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != PB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != PB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == PB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function qB(BB, OB, GB) {
      var YB = BB.kP,
        PB = BB.ticks,
        zB = BB.viewBox,
        pB = BB.minTickGap,
        qB = BB.orientation,
        ZB = BB.interval,
        NB = BB.tickFormatter,
        RB = BB.unit,
        WB = BB.angle;
      if (!PB || !PB.length || !YB) return [];
      if ((0, QB.C)(ZB) || jB.d.isSsr) return function(BB, OB) {
        return JB(BB, OB + 1)
      }(PB, "number" === typeof ZB && (0, QB.C)(ZB) ? ZB : 0);
      var AB = [],
        VB = "top" === qB || "bottom" === qB ? "width" : "height",
        SB = RB && "width" === VB ? (0, oB.g)(RB, {
          fontSize: OB,
          letterSpacing: GB
        }) : {
          width: 0,
          height: 0
        },
        nB = function(BB, YB) {
          var QB = DB()(NB) ? NB(BB.value, YB) : BB.value;
          return "width" === VB ? function(BB, OB, GB) {
            var YB = {
              width: BB.width + OB.width,
              height: BB.height + OB.height
            };
            return (0, yB.k)(YB, GB)
          }((0, oB.g)(QB, {
            fontSize: OB,
            letterSpacing: GB
          }), SB, WB) : (0, oB.g)(QB, {
            fontSize: OB,
            letterSpacing: GB
          })[VB]
        },
        UB = PB.length >= 2 ? (0, QB.J)(PB[1].coordinate - PB[0].coordinate) : 1,
        fB = function(BB, OB, GB) {
          var YB = "width" === GB,
            DB = BB.x,
            QB = BB.y,
            oB = BB.width,
            jB = BB.height;
          return 1 === OB ? {
            start: YB ? DB : QB,
            end: YB ? DB + oB : QB + jB
          } : {
            start: YB ? DB + oB : QB + jB,
            end: YB ? DB : QB
          }
        }(zB, UB, VB);
      return "equidistantPreserveStart" === ZB ? function(BB, OB, GB, YB, DB) {
        for (var QB, oB = (YB || []).slice(), jB = OB.start, yB = OB.end, PB = 0, zB = 1, lB = jB, pB = function() {
            var OB = null === YB || void 0 === YB ? void 0 : YB[PB];
            if (void 0 === OB) return {
              v: JB(YB, zB)
            };
            var QB, oB = PB,
              pB = function() {
                return void 0 === QB && (QB = GB(OB, oB)), QB
              },
              qB = OB.coordinate,
              ZB = 0 === PB || MB(BB, qB, pB, lB, yB);
            ZB || (PB = 0, lB = jB, zB += 1), ZB && (lB = qB + BB * (pB() / 2 + DB), PB += zB)
          }; zB <= oB.length;)
          if (QB = pB()) return QB.v;
        return []
      }(UB, fB, nB, PB, pB) : (AB = "preserveStart" === ZB || "preserveStartEnd" === ZB ? function(BB, OB, GB, YB, DB, QB) {
        var oB = (YB || []).slice(),
          jB = oB.length,
          yB = OB.start,
          JB = OB.end;
        if (QB) {
          var PB = YB[jB - 1],
            zB = GB(PB, jB - 1),
            pB = BB * (PB.coordinate + BB * zB / 2 - JB);
          oB[jB - 1] = PB = lB(lB({}, PB), {}, {
            tickCoord: pB > 0 ? PB.coordinate - pB * BB : PB.coordinate
          }), MB(BB, PB.tickCoord, (function() {
            return zB
          }), yB, JB) && (JB = PB.tickCoord - BB * (zB / 2 + DB), oB[jB - 1] = lB(lB({}, PB), {}, {
            isShow: !0
          }))
        }
        for (var qB = QB ? jB - 1 : jB, ZB = function(OB) {
            var YB, QB = oB[OB],
              jB = function() {
                return void 0 === YB && (YB = GB(QB, OB)), YB
              };
            if (0 === OB) {
              var PB = BB * (QB.coordinate - BB * jB() / 2 - yB);
              oB[OB] = QB = lB(lB({}, QB), {}, {
                tickCoord: PB < 0 ? QB.coordinate - PB * BB : QB.coordinate
              })
            } else oB[OB] = QB = lB(lB({}, QB), {}, {
              tickCoord: QB.coordinate
            });
            MB(BB, QB.tickCoord, jB, yB, JB) && (yB = QB.tickCoord + BB * (jB() / 2 + DB), oB[OB] = lB(lB({}, QB), {}, {
              isShow: !0
            }))
          }, NB = 0; NB < qB; NB++) ZB(NB);
        return oB
      }(UB, fB, nB, PB, pB, "preserveStartEnd" === ZB) : function(BB, OB, GB, YB, DB) {
        for (var QB = (YB || []).slice(), oB = QB.length, jB = OB.start, yB = OB.end, JB = function(OB) {
            var YB, JB = QB[OB],
              PB = function() {
                return void 0 === YB && (YB = GB(JB, OB)), YB
              };
            if (OB === oB - 1) {
              var zB = BB * (JB.coordinate + BB * PB() / 2 - yB);
              QB[OB] = JB = lB(lB({}, JB), {}, {
                tickCoord: zB > 0 ? JB.coordinate - zB * BB : JB.coordinate
              })
            } else QB[OB] = JB = lB(lB({}, JB), {}, {
              tickCoord: JB.coordinate
            });
            MB(BB, JB.tickCoord, PB, jB, yB) && (yB = JB.tickCoord - BB * (PB() / 2 + DB), QB[OB] = lB(lB({}, JB), {}, {
              isShow: !0
            }))
          }, PB = oB - 1; PB >= 0; PB--) JB(PB);
        return QB
      }(UB, fB, nB, PB, pB), AB.filter((function(BB) {
        return BB.isShow
      })))
    }
  },
  6917: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => yB
    });
    var YB = GB(5965),
      DB = GB(6764),
      QB = GB(6884),
      oB = GB(6906),
      jB = GB(6732),
      yB = (0, YB.b)({
        chartName: "BarChart",
        GraphicalChild: DB.d,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: QB.b
        }, {
          axisType: "yAxis",
          AxisComp: oB.e
        }],
        formatAxisMap: jB.i
      })
  },
  5958: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DO
    });
    var YB = GB(5965),
      DB = GB(6873),
      QB = GB(6764),
      oB = GB(6875),
      jB = GB(56),
      yB = GB(6635),
      JB = GB(5930),
      MB = GB.n(JB),
      PB = GB(6695),
      zB = GB.n(PB),
      lB = GB(5782),
      pB = GB.n(lB),
      qB = GB(5587),
      ZB = GB(6468),
      NB = GB(6776),
      RB = GB(5938),
      WB = GB(6485);

    function AB(BB) {
      return AB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, AB(BB)
    }

    function VB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, dB(YB.key), YB)
      }
    }

    function SB(BB, OB, GB) {
      return OB = UB(OB),
        function(BB, OB) {
          if (OB && ("object" === AB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, nB() ? Reflect.construct(OB, GB || [], UB(BB).constructor) : OB.apply(BB, GB))
    }

    function nB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (nB = function() {
        return !!BB
      })()
    }

    function UB(BB) {
      return UB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, UB(BB)
    }

    function fB(BB, OB) {
      return fB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, fB(BB, OB)
    }

    function kB(BB, OB, GB) {
      return (OB = dB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function dB(BB) {
      var OB = function(BB, OB) {
        if ("object" != AB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != AB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == AB(OB) ? OB : OB + ""
    }
    var KB = function(BB) {
      function OB() {
        return function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, OB), SB(this, OB, arguments)
      }
      return function(BB, OB) {
        if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(OB && OB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), OB && fB(BB, OB)
      }(OB, BB), GB = OB, (YB = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && VB(GB.prototype, YB), DB && VB(GB, DB), Object.defineProperty(GB, "prototype", {
        writable: !1
      }), GB;
      var GB, YB, DB
    }(jB.Component);
    kB(KB, "displayName", "ZAxis"), kB(KB, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var uB = GB(6866),
      mB = GB(6702),
      IB = GB(6771),
      FB = GB(5671),
      iB = GB(6648),
      LB = GB(5951),
      gB = GB(6561),
      rB = GB(6783),
      XB = ["option", "isActive"];

    function wB() {
      return wB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, wB.apply(this, arguments)
    }

    function EB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function cB(BB) {
      var OB = BB.option,
        GB = BB.isActive,
        YB = EB(BB, XB);
      return "string" === typeof OB ? jB.createElement(rB.d, wB({
        option: jB.createElement(gB.e, wB({
          type: OB
        }, YB)),
        isActive: GB,
        shapeType: "symbols"
      }, YB)) : jB.createElement(rB.d, wB({
        option: OB,
        isActive: GB,
        shapeType: "symbols"
      }, YB))
    }

    function hB(BB) {
      return hB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, hB(BB)
    }

    function aB() {
      return aB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, aB.apply(this, arguments)
    }

    function eB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function TB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? eB(Object(GB), !0).forEach((function(OB) {
          xB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : eB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function bB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, tB(YB.key), YB)
      }
    }

    function CB(BB, OB, GB) {
      return OB = vB(OB),
        function(BB, OB) {
          if (OB && ("object" === hB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, HB() ? Reflect.construct(OB, GB || [], vB(BB).constructor) : OB.apply(BB, GB))
    }

    function HB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (HB = function() {
        return !!BB
      })()
    }

    function vB(BB) {
      return vB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, vB(BB)
    }

    function sB(BB, OB) {
      return sB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, sB(BB, OB)
    }

    function xB(BB, OB, GB) {
      return (OB = tB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function tB(BB) {
      var OB = function(BB, OB) {
        if ("object" != hB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != hB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == hB(OB) ? OB : OB + ""
    }
    var BO = function(BB) {
      function OB() {
        var BB;
        ! function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, OB);
        for (var GB = arguments.length, YB = new Array(GB), DB = 0; DB < GB; DB++) YB[DB] = arguments[DB];
        return xB(BB = CB(this, OB, [].concat(YB)), "state", {
          isAnimationFinished: !1
        }), xB(BB, "handleAnimationEnd", (function() {
          BB.setState({
            isAnimationFinished: !0
          })
        })), xB(BB, "handleAnimationStart", (function() {
          BB.setState({
            isAnimationFinished: !1
          })
        })), xB(BB, "id", (0, FB.M)("recharts-scatter-")), BB
      }
      return function(BB, OB) {
        if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(OB && OB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), OB && sB(BB, OB)
      }(OB, BB), GB = OB, YB = [{
        key: "renderSymbolsStatically",
        value: function(BB) {
          var OB = this,
            GB = this.props,
            YB = GB.shape,
            DB = GB.activeShape,
            QB = GB.activeIndex,
            oB = (0, RB.e)(this.props, !1);
          return BB.map((function(BB, GB) {
            var yB = QB === GB,
              JB = yB ? DB : YB,
              MB = TB(TB({}, oB), BB);
            return jB.createElement(ZB.b, aB({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === BB || void 0 === BB ? void 0 : BB.cx, "-").concat(null === BB || void 0 === BB ? void 0 : BB.cy, "-").concat(null === BB || void 0 === BB ? void 0 : BB.size, "-").concat(GB)
            }, (0, LB.j)(OB.props, BB, GB), {
              role: "img"
            }), jB.createElement(cB, aB({
              option: JB,
              isActive: yB,
              key: "symbol-".concat(GB)
            }, MB)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var BB = this,
            OB = this.props,
            GB = OB.points,
            YB = OB.isAnimationActive,
            DB = OB.animationBegin,
            QB = OB.animationDuration,
            oB = OB.animationEasing,
            JB = OB.animationId,
            MB = this.state.prevPoints;
          return jB.createElement(yB.e, {
            ZP: DB,
            duration: QB,
            isActive: YB,
            easing: oB,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(JB),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(OB) {
            var YB = OB.t,
              DB = GB.map((function(BB, OB) {
                var GB = MB && MB[OB];
                if (GB) {
                  var DB = (0, FB.v)(GB.cx, BB.cx),
                    QB = (0, FB.v)(GB.cy, BB.cy),
                    oB = (0, FB.v)(GB.size, BB.size);
                  return TB(TB({}, BB), {}, {
                    cx: DB(YB),
                    cy: QB(YB),
                    size: oB(YB)
                  })
                }
                var jB = (0, FB.v)(0, BB.size);
                return TB(TB({}, BB), {}, {
                  size: jB(YB)
                })
              }));
            return jB.createElement(ZB.b, null, BB.renderSymbolsStatically(DB))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var BB = this.props,
            OB = BB.points,
            GB = BB.isAnimationActive,
            YB = this.state.prevPoints;
          return !(GB && OB && OB.length) || YB && zB()(YB, OB) ? this.renderSymbolsStatically(OB) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var BB = this.props,
            OB = BB.points,
            GB = BB.xAxis,
            YB = BB.yAxis,
            DB = BB.children,
            QB = (0, RB.i)(DB, mB.b);
          return QB ? QB.map((function(BB, DB) {
            var QB = BB.props,
              oB = QB.direction,
              yB = QB.dataKey;
            return jB.cloneElement(BB, {
              key: "".concat(oB, "-").concat(yB, "-").concat(OB[DB]),
              data: OB,
              xAxis: GB,
              yAxis: YB,
              layout: "x" === oB ? "vertical" : "horizontal",
              dataPointFormatter: function(BB, OB) {
                return {
                  x: BB.cx,
                  y: BB.cy,
                  value: "x" === oB ? +BB.node.x : +BB.node.y,
                  errorVal: (0, iB.eb)(BB, OB)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var BB, OB, GB = this.props,
            YB = GB.points,
            DB = GB.line,
            QB = GB.lineType,
            oB = GB.lineJointType,
            yB = (0, RB.e)(this.props, !1),
            JB = (0, RB.e)(DB, !1);
          if ("joint" === QB) BB = YB.map((function(BB) {
            return {
              x: BB.cx,
              y: BB.cy
            }
          }));
          else if ("fitting" === QB) {
            var MB = (0, FB.n)(YB),
              PB = MB.xmin,
              zB = MB.xmax,
              lB = MB.a,
              qB = MB.b,
              NB = function(BB) {
                return lB * BB + qB
              };
            BB = [{
              x: PB,
              y: NB(PB)
            }, {
              x: zB,
              y: NB(zB)
            }]
          }
          var WB = TB(TB(TB({}, yB), {}, {
            fill: "none",
            stroke: yB && yB.fill
          }, JB), {}, {
            points: BB
          });
          return OB = jB.isValidElement(DB) ? jB.cloneElement(DB, WB) : pB()(DB) ? DB(WB) : jB.createElement(uB.b, aB({}, WB, {
            type: oB
          })), jB.createElement(ZB.b, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, OB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this.props,
            OB = BB.hide,
            GB = BB.points,
            YB = BB.line,
            DB = BB.className,
            QB = BB.xAxis,
            oB = BB.yAxis,
            yB = BB.left,
            JB = BB.top,
            PB = BB.width,
            zB = BB.height,
            lB = BB.id,
            pB = BB.isAnimationActive;
          if (OB || !GB || !GB.length) return null;
          var RB = this.state.isAnimationFinished,
            WB = (0, qB.c)("recharts-scatter", DB),
            AB = QB && QB.allowDataOverflow,
            VB = oB && oB.allowDataOverflow,
            SB = AB || VB,
            nB = MB()(lB) ? this.id : lB;
          return jB.createElement(ZB.b, {
            className: WB,
            clipPath: SB ? "url(#clipPath-".concat(nB, ")") : null
          }, AB || VB ? jB.createElement("defs", null, jB.createElement("clipPath", {
            id: "clipPath-".concat(nB)
          }, jB.createElement("rect", {
            x: AB ? yB : yB - PB / 2,
            y: VB ? JB : JB - zB / 2,
            width: AB ? PB : 2 * PB,
            height: VB ? zB : 2 * zB
          }))) : null, YB && this.renderLine(), this.renderErrorBar(), jB.createElement(ZB.b, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!pB || RB) && NB.d.renderCallByParent(this.props, GB))
        }
      }], DB = [{
        key: "getDerivedStateFromProps",
        value: function(BB, OB) {
          return BB.animationId !== OB.prevAnimationId ? {
            prevAnimationId: BB.animationId,
            curPoints: BB.points,
            prevPoints: OB.curPoints
          } : BB.points !== OB.curPoints ? {
            curPoints: BB.points
          } : null
        }
      }], YB && bB(GB.prototype, YB), DB && bB(GB, DB), Object.defineProperty(GB, "prototype", {
        writable: !1
      }), GB;
      var GB, YB, DB
    }(jB.PureComponent);
    xB(BO, "displayName", "Scatter"), xB(BO, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !WB.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), xB(BO, "getComposedData", (function(BB) {
      var OB = BB.xAxis,
        GB = BB.yAxis,
        YB = BB.zAxis,
        DB = BB.item,
        QB = BB.displayedData,
        oB = BB.xAxisTicks,
        jB = BB.yAxisTicks,
        yB = BB.offset,
        JB = DB.props.tooltipType,
        PB = (0, RB.i)(DB.props.children, IB.c),
        zB = MB()(OB.dataKey) ? DB.props.dataKey : OB.dataKey,
        lB = MB()(GB.dataKey) ? DB.props.dataKey : GB.dataKey,
        pB = YB && YB.dataKey,
        qB = YB ? YB.range : KB.defaultProps.range,
        ZB = qB && qB[0],
        NB = OB.scale.bandwidth ? OB.scale.bandwidth() : 0,
        WB = GB.scale.bandwidth ? GB.scale.bandwidth() : 0,
        AB = QB.map((function(BB, QB) {
          var yB = (0, iB.eb)(BB, zB),
            qB = (0, iB.eb)(BB, lB),
            RB = !MB()(pB) && (0, iB.eb)(BB, pB) || "-",
            AB = [{
              name: MB()(OB.dataKey) ? DB.props.name : OB.name || OB.dataKey,
              unit: OB.unit || "",
              value: yB,
              payload: BB,
              dataKey: zB,
              type: JB
            }, {
              name: MB()(GB.dataKey) ? DB.props.name : GB.name || GB.dataKey,
              unit: GB.unit || "",
              value: qB,
              payload: BB,
              dataKey: lB,
              type: JB
            }];
          "-" !== RB && AB.push({
            name: YB.name || YB.dataKey,
            unit: YB.unit || "",
            value: RB,
            payload: BB,
            dataKey: pB,
            type: JB
          });
          var VB = (0, iB.B)({
              axis: OB,
              ticks: oB,
              bandSize: NB,
              entry: BB,
              index: QB,
              dataKey: zB
            }),
            SB = (0, iB.B)({
              axis: GB,
              ticks: jB,
              bandSize: WB,
              entry: BB,
              index: QB,
              dataKey: lB
            }),
            nB = "-" !== RB ? YB.scale(RB) : ZB,
            UB = Math.sqrt(Math.max(nB, 0) / Math.PI);
          return TB(TB({}, BB), {}, {
            cx: VB,
            cy: SB,
            x: VB - UB,
            y: SB - UB,
            xAxis: OB,
            yAxis: GB,
            zAxis: YB,
            width: 2 * UB,
            height: 2 * UB,
            size: nB,
            node: {
              x: yB,
              y: qB,
              z: RB
            },
            tooltipPayload: AB,
            tooltipPosition: {
              x: VB,
              y: SB
            },
            payload: BB
          }, PB && PB[QB] && PB[QB].props)
        }));
      return TB({
        points: AB
      }, yB)
    }));
    var OO = GB(6884),
      GO = GB(6906),
      YO = GB(6732),
      DO = (0, YB.b)({
        chartName: "ComposedChart",
        GraphicalChild: [oB.e, DB.b, QB.d, BO],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: OO.b
        }, {
          axisType: "yAxis",
          AxisComp: GO.e
        }, {
          axisType: "zAxis",
          AxisComp: KB
        }],
        formatAxisMap: YO.i
      })
  },
  5965: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => wG
    });
    var YB = GB(56),
      DB = GB(5930),
      QB = GB.n(DB),
      oB = GB(5782),
      jB = GB.n(oB),
      yB = GB(5973),
      JB = GB.n(yB),
      MB = GB(5701),
      PB = GB.n(MB),
      zB = GB(6022),
      lB = GB.n(zB),
      pB = GB(5589),
      qB = GB.n(pB),
      ZB = GB(5587),
      NB = GB(6463),
      RB = GB(6465),
      WB = GB(6468),
      AB = GB(6476),
      VB = GB(6554),
      SB = GB(6620),
      nB = GB(6629),
      UB = GB(5938),
      fB = GB(6652),
      kB = GB(6639),
      dB = GB(6648),
      KB = GB(5671);

    function uB(BB) {
      return uB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, uB(BB)
    }

    function mB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function IB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? mB(Object(GB), !0).forEach((function(OB) {
          FB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : mB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function FB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != uB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != uB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == uB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }
    var iB = ["Webkit", "Moz", "O", "ms"];

    function LB(BB) {
      return LB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, LB(BB)
    }

    function gB() {
      return gB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, gB.apply(this, arguments)
    }

    function rB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function XB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? rB(Object(GB), !0).forEach((function(OB) {
          eB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : rB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function wB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, TB(YB.key), YB)
      }
    }

    function EB(BB, OB, GB) {
      return OB = hB(OB),
        function(BB, OB) {
          if (OB && ("object" === LB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, cB() ? Reflect.construct(OB, GB || [], hB(BB).constructor) : OB.apply(BB, GB))
    }

    function cB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (cB = function() {
        return !!BB
      })()
    }

    function hB(BB) {
      return hB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, hB(BB)
    }

    function aB(BB, OB) {
      return aB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, aB(BB, OB)
    }

    function eB(BB, OB, GB) {
      return (OB = TB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function TB(BB) {
      var OB = function(BB, OB) {
        if ("object" != LB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != LB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == LB(OB) ? OB : OB + ""
    }
    var bB = function(BB) {
        return BB.changedTouches && !!BB.changedTouches.length
      },
      CB = function(BB) {
        function OB(BB) {
          var GB;
          return function(BB, OB) {
            if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
          }(this, OB), eB(GB = EB(this, OB, [BB]), "handleDrag", (function(BB) {
            GB.leaveTimer && (clearTimeout(GB.leaveTimer), GB.leaveTimer = null), GB.state.isTravellerMoving ? GB.handleTravellerMove(BB) : GB.state.isSlideMoving && GB.handleSlideDrag(BB)
          })), eB(GB, "handleTouchMove", (function(BB) {
            null != BB.changedTouches && BB.changedTouches.length > 0 && GB.handleDrag(BB.changedTouches[0])
          })), eB(GB, "handleDragEnd", (function() {
            GB.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var BB = GB.props,
                OB = BB.endIndex,
                YB = BB.onDragEnd,
                DB = BB.startIndex;
              null === YB || void 0 === YB || YB({
                endIndex: OB,
                startIndex: DB
              })
            })), GB.detachDragEndListener()
          })), eB(GB, "handleLeaveWrapper", (function() {
            (GB.state.isTravellerMoving || GB.state.isSlideMoving) && (GB.leaveTimer = window.setTimeout(GB.handleDragEnd, GB.props.leaveTimeOut))
          })), eB(GB, "handleEnterSlideOrTraveller", (function() {
            GB.setState({
              isTextActive: !0
            })
          })), eB(GB, "handleLeaveSlideOrTraveller", (function() {
            GB.setState({
              isTextActive: !1
            })
          })), eB(GB, "handleSlideDragStart", (function(BB) {
            var OB = bB(BB) ? BB.changedTouches[0] : BB;
            GB.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: OB.pageX
            }), GB.attachDragEndListener()
          })), GB.travellerDragStartHandlers = {
            startX: GB.handleTravellerDragStart.bind(GB, "startX"),
            endX: GB.handleTravellerDragStart.bind(GB, "endX")
          }, GB.state = {}, GB
        }
        return function(BB, OB) {
          if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(OB && OB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), OB && aB(BB, OB)
        }(OB, BB), GB = OB, DB = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(BB) {
            var GB = BB.startX,
              YB = BB.endX,
              DB = this.state.scaleValues,
              QB = this.props,
              oB = QB.gap,
              jB = QB.data.length - 1,
              yB = Math.min(GB, YB),
              JB = Math.max(GB, YB),
              MB = OB.getIndexInRange(DB, yB),
              PB = OB.getIndexInRange(DB, JB);
            return {
              startIndex: MB - MB % oB,
              endIndex: PB === jB ? jB : PB - PB % oB
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(BB) {
            var OB = this.props,
              GB = OB.data,
              YB = OB.tickFormatter,
              DB = OB.dataKey,
              QB = (0, dB.eb)(GB[BB], DB, BB);
            return jB()(YB) ? YB(QB, BB) : QB
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
            var OB = this.state,
              GB = OB.slideMoveStartX,
              YB = OB.startX,
              DB = OB.endX,
              QB = this.props,
              oB = QB.x,
              jB = QB.width,
              yB = QB.travellerWidth,
              JB = QB.startIndex,
              MB = QB.endIndex,
              PB = QB.onChange,
              zB = BB.pageX - GB;
            zB > 0 ? zB = Math.min(zB, oB + jB - yB - DB, oB + jB - yB - YB) : zB < 0 && (zB = Math.max(zB, oB - YB, oB - DB));
            var lB = this.getIndex({
              startX: YB + zB,
              endX: DB + zB
            });
            lB.startIndex === JB && lB.endIndex === MB || !PB || PB(lB), this.setState({
              startX: YB + zB,
              endX: DB + zB,
              slideMoveStartX: BB.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(BB, OB) {
            var GB = bB(OB) ? OB.changedTouches[0] : OB;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: BB,
              brushMoveStartX: GB.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(BB) {
            var OB = this.state,
              GB = OB.brushMoveStartX,
              YB = OB.movingTravellerId,
              DB = OB.endX,
              QB = OB.startX,
              oB = this.state[YB],
              jB = this.props,
              yB = jB.x,
              JB = jB.width,
              MB = jB.travellerWidth,
              PB = jB.onChange,
              zB = jB.gap,
              lB = jB.data,
              pB = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              qB = BB.pageX - GB;
            qB > 0 ? qB = Math.min(qB, yB + JB - MB - oB) : qB < 0 && (qB = Math.max(qB, yB - oB)), pB[YB] = oB + qB;
            var ZB = this.getIndex(pB),
              NB = ZB.startIndex,
              RB = ZB.endIndex;
            this.setState(eB(eB({}, YB, oB + qB), "brushMoveStartX", BB.pageX), (function() {
              PB && function() {
                var BB = lB.length - 1;
                return "startX" === YB && (DB > QB ? NB % zB === 0 : RB % zB === 0) || DB < QB && RB === BB || "endX" === YB && (DB > QB ? RB % zB === 0 : NB % zB === 0) || DB > QB && RB === BB
              }() && PB(ZB)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(BB, OB) {
            var GB = this,
              YB = this.state,
              DB = YB.scaleValues,
              QB = YB.startX,
              oB = YB.endX,
              jB = this.state[OB],
              yB = DB.indexOf(jB);
            if (-1 !== yB) {
              var JB = yB + BB;
              if (!(-1 === JB || JB >= DB.length)) {
                var MB = DB[JB];
                "startX" === OB && MB >= oB || "endX" === OB && MB <= QB || this.setState(eB({}, OB, MB), (function() {
                  GB.props.onChange(GB.getIndex({
                    startX: GB.state.startX,
                    endX: GB.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var BB = this.props,
              OB = BB.x,
              GB = BB.y,
              DB = BB.width,
              QB = BB.height,
              oB = BB.fill,
              jB = BB.stroke;
            return YB.createElement("rect", {
              stroke: jB,
              fill: oB,
              x: OB,
              y: GB,
              width: DB,
              height: QB
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var BB = this.props,
              OB = BB.x,
              GB = BB.y,
              DB = BB.width,
              QB = BB.height,
              oB = BB.data,
              jB = BB.children,
              yB = BB.padding,
              JB = YB.Children.only(jB);
            return JB ? YB.cloneElement(JB, {
              x: OB,
              y: GB,
              width: DB,
              height: QB,
              margin: yB,
              compact: !0,
              data: oB
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(BB, GB) {
            var DB, QB, oB = this,
              jB = this.props,
              yB = jB.y,
              JB = jB.travellerWidth,
              MB = jB.height,
              PB = jB.traveller,
              zB = jB.ariaLabel,
              lB = jB.data,
              pB = jB.startIndex,
              qB = jB.endIndex,
              ZB = Math.max(BB, this.props.x),
              NB = XB(XB({}, (0, UB.e)(this.props, !1)), {}, {
                x: ZB,
                y: yB,
                width: JB,
                height: MB
              }),
              RB = zB || "Min value: ".concat(null === (DB = lB[pB]) || void 0 === DB ? void 0 : DB.name, ", Max value: ").concat(null === (QB = lB[qB]) || void 0 === QB ? void 0 : QB.name);
            return YB.createElement(WB.b, {
              tabIndex: 0,
              role: "slider",
              "aria-label": RB,
              "aria-valuenow": BB,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[GB],
              onTouchStart: this.travellerDragStartHandlers[GB],
              onKeyDown: function(BB) {
                ["ArrowLeft", "ArrowRight"].includes(BB.key) && (BB.preventDefault(), BB.stopPropagation(), oB.handleTravellerMoveKeyboard("ArrowRight" === BB.key ? 1 : -1, GB))
              },
              onFocus: function() {
                oB.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                oB.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, OB.renderTraveller(PB, NB))
          }
        }, {
          key: "renderSlide",
          value: function(BB, OB) {
            var GB = this.props,
              DB = GB.y,
              QB = GB.height,
              oB = GB.stroke,
              jB = GB.travellerWidth,
              yB = Math.min(BB, OB) + jB,
              JB = Math.max(Math.abs(OB - BB) - jB, 0);
            return YB.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: oB,
              fillOpacity: .2,
              x: yB,
              y: DB,
              width: JB,
              height: QB
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var BB = this.props,
              OB = BB.startIndex,
              GB = BB.endIndex,
              DB = BB.y,
              QB = BB.height,
              oB = BB.travellerWidth,
              jB = BB.stroke,
              yB = this.state,
              JB = yB.startX,
              MB = yB.endX,
              PB = {
                pointerEvents: "none",
                fill: jB
              };
            return YB.createElement(WB.b, {
              className: "recharts-brush-texts"
            }, YB.createElement(kB.d, gB({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(JB, MB) - 5,
              y: DB + QB / 2
            }, PB), this.getTextOfTick(OB)), YB.createElement(kB.d, gB({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(JB, MB) + oB + 5,
              y: DB + QB / 2
            }, PB), this.getTextOfTick(GB)))
          }
        }, {
          key: "render",
          value: function() {
            var BB = this.props,
              OB = BB.data,
              GB = BB.className,
              DB = BB.children,
              QB = BB.x,
              oB = BB.y,
              jB = BB.width,
              yB = BB.height,
              JB = BB.alwaysShowText,
              MB = this.state,
              PB = MB.startX,
              zB = MB.endX,
              lB = MB.isTextActive,
              pB = MB.isSlideMoving,
              qB = MB.isTravellerMoving,
              NB = MB.isTravellerFocused;
            if (!OB || !OB.length || !(0, KB.C)(QB) || !(0, KB.C)(oB) || !(0, KB.C)(jB) || !(0, KB.C)(yB) || jB <= 0 || yB <= 0) return null;
            var RB = (0, ZB.c)("recharts-brush", GB),
              AB = 1 === YB.Children.count(DB),
              VB = function(BB, OB) {
                if (!BB) return null;
                var GB = BB.replace(/(\w)/, (function(BB) {
                    return BB.toUpperCase()
                  })),
                  YB = iB.reduce((function(BB, YB) {
                    return IB(IB({}, BB), {}, FB({}, YB + GB, OB))
                  }), {});
                return YB[BB] = OB, YB
              }("userSelect", "none");
            return YB.createElement(WB.b, {
              className: RB,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: VB
            }, this.renderBackground(), AB && this.renderPanorama(), this.renderSlide(PB, zB), this.renderTravellerLayer(PB, "startX"), this.renderTravellerLayer(zB, "endX"), (lB || pB || qB || NB || JB) && this.renderText())
          }
        }], QB = [{
          key: "renderDefaultTraveller",
          value: function(BB) {
            var OB = BB.x,
              GB = BB.y,
              DB = BB.width,
              QB = BB.height,
              oB = BB.stroke,
              jB = Math.floor(GB + QB / 2) - 1;
            return YB.createElement(YB.Fragment, null, YB.createElement("rect", {
              x: OB,
              y: GB,
              width: DB,
              height: QB,
              fill: oB,
              stroke: "none"
            }), YB.createElement("line", {
              x1: OB + 1,
              y1: jB,
              x2: OB + DB - 1,
              y2: jB,
              fill: "none",
              stroke: "#fff"
            }), YB.createElement("line", {
              x1: OB + 1,
              y1: jB + 2,
              x2: OB + DB - 1,
              y2: jB + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(BB, GB) {
            return YB.isValidElement(BB) ? YB.cloneElement(BB, GB) : jB()(BB) ? BB(GB) : OB.renderDefaultTraveller(GB)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(BB, OB) {
            var GB = BB.data,
              YB = BB.width,
              DB = BB.x,
              QB = BB.travellerWidth,
              oB = BB.updateId,
              jB = BB.startIndex,
              yB = BB.endIndex;
            if (GB !== OB.prevData || oB !== OB.prevUpdateId) return XB({
              prevData: GB,
              prevTravellerWidth: QB,
              prevUpdateId: oB,
              prevX: DB,
              prevWidth: YB
            }, GB && GB.length ? function(BB) {
              var OB = BB.data,
                GB = BB.startIndex,
                YB = BB.endIndex,
                DB = BB.x,
                QB = BB.width,
                oB = BB.travellerWidth;
              if (!OB || !OB.length) return {};
              var jB = OB.length,
                yB = (0, fB.i)().domain(JB()(0, jB)).range([DB, DB + QB - oB]),
                MB = yB.domain().map((function(BB) {
                  return yB(BB)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: yB(GB),
                endX: yB(YB),
                scale: yB,
                scaleValues: MB
              }
            }({
              data: GB,
              width: YB,
              x: DB,
              travellerWidth: QB,
              startIndex: jB,
              endIndex: yB
            }) : {
              scale: null,
              scaleValues: null
            });
            if (OB.scale && (YB !== OB.prevWidth || DB !== OB.prevX || QB !== OB.prevTravellerWidth)) {
              OB.scale.range([DB, DB + YB - QB]);
              var MB = OB.scale.domain().map((function(BB) {
                return OB.scale(BB)
              }));
              return {
                prevData: GB,
                prevTravellerWidth: QB,
                prevUpdateId: oB,
                prevX: DB,
                prevWidth: YB,
                startX: OB.scale(BB.startIndex),
                endX: OB.scale(BB.endIndex),
                scaleValues: MB
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(BB, OB) {
            for (var GB = 0, YB = BB.length - 1; YB - GB > 1;) {
              var DB = Math.floor((GB + YB) / 2);
              BB[DB] > OB ? YB = DB : GB = DB
            }
            return OB >= BB[YB] ? YB : GB
          }
        }], DB && wB(GB.prototype, DB), QB && wB(GB, QB), Object.defineProperty(GB, "prototype", {
          writable: !1
        }), GB;
        var GB, DB, QB
      }(YB.PureComponent);
    eB(CB, "displayName", "Brush"), eB(CB, "defaultProps", {
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
    var HB = GB(6645),
      vB = GB(6710),
      sB = GB(6715),
      xB = GB(6728),
      tB = GB(6732),
      BO = GB(5935);

    function OO() {
      return OO = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, OO.apply(this, arguments)
    }

    function GO(BB) {
      return GO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, GO(BB)
    }

    function YO(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function DO(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? YO(Object(GB), !0).forEach((function(OB) {
          MO(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : YO(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function QO(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, PO(YB.key), YB)
      }
    }

    function oO(BB, OB, GB) {
      return OB = yO(OB),
        function(BB, OB) {
          if (OB && ("object" === GO(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, jO() ? Reflect.construct(OB, GB || [], yO(BB).constructor) : OB.apply(BB, GB))
    }

    function jO() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (jO = function() {
        return !!BB
      })()
    }

    function yO(BB) {
      return yO = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, yO(BB)
    }

    function JO(BB, OB) {
      return JO = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, JO(BB, OB)
    }

    function MO(BB, OB, GB) {
      return (OB = PO(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function PO(BB) {
      var OB = function(BB, OB) {
        if ("object" != GO(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != GO(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == GO(OB) ? OB : OB + ""
    }
    var zO = function(BB) {
      function OB() {
        return function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, OB), oO(this, OB, arguments)
      }
      return function(BB, OB) {
        if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(OB && OB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), OB && JO(BB, OB)
      }(OB, BB), GB = OB, (DB = [{
        key: "render",
        value: function() {
          var BB = this.props,
            GB = BB.x,
            DB = BB.y,
            QB = BB.r,
            oB = BB.alwaysShow,
            jB = BB.clipPathId,
            yB = (0, KB.z)(GB),
            JB = (0, KB.z)(DB);
          if ((0, BO.b)(void 0 === oB, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !yB || !JB) return null;
          var MB = function(BB) {
            var OB = BB.x,
              GB = BB.y,
              YB = BB.xAxis,
              DB = BB.yAxis,
              QB = (0, tB.e)({
                x: YB.scale,
                y: DB.scale
              }),
              oB = QB.apply({
                x: OB,
                y: GB
              }, {
                bandAware: !0
              });
            return (0, xB.b)(BB, "discard") && !QB.isInRange(oB) ? null : oB
          }(this.props);
          if (!MB) return null;
          var PB = MB.x,
            zB = MB.y,
            lB = this.props,
            pB = lB.shape,
            qB = lB.className,
            NB = DO(DO({
              clipPath: (0, xB.b)(this.props, "hidden") ? "url(#".concat(jB, ")") : void 0
            }, (0, UB.e)(this.props, !0)), {}, {
              cx: PB,
              cy: zB
            });
          return YB.createElement(WB.b, {
            className: (0, ZB.c)("recharts-reference-dot", qB)
          }, OB.renderDot(pB, NB), sB.b.renderCallByParent(this.props, {
            x: PB - QB,
            y: zB - QB,
            width: 2 * QB,
            height: 2 * QB
          }))
        }
      }]) && QO(GB.prototype, DB), QB && QO(GB, QB), Object.defineProperty(GB, "prototype", {
        writable: !1
      }), GB;
      var GB, DB, QB
    }(YB.Component);
    MO(zO, "displayName", "ReferenceDot"), MO(zO, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), MO(zO, "renderDot", (function(BB, OB) {
      return YB.isValidElement(BB) ? YB.cloneElement(BB, OB) : jB()(BB) ? BB(OB) : YB.createElement(SB.b, OO({}, OB, {
        cx: OB.cx,
        cy: OB.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var lO = GB(6817);

    function pO() {
      return pO = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, pO.apply(this, arguments)
    }

    function qO(BB) {
      return qO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, qO(BB)
    }

    function ZO(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function NO(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? ZO(Object(GB), !0).forEach((function(OB) {
          nO(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : ZO(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function RO(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, UO(YB.key), YB)
      }
    }

    function WO(BB, OB, GB) {
      return OB = VO(OB),
        function(BB, OB) {
          if (OB && ("object" === qO(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, AO() ? Reflect.construct(OB, GB || [], VO(BB).constructor) : OB.apply(BB, GB))
    }

    function AO() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (AO = function() {
        return !!BB
      })()
    }

    function VO(BB) {
      return VO = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, VO(BB)
    }

    function SO(BB, OB) {
      return SO = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, SO(BB, OB)
    }

    function nO(BB, OB, GB) {
      return (OB = UO(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function UO(BB) {
      var OB = function(BB, OB) {
        if ("object" != qO(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != qO(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == qO(OB) ? OB : OB + ""
    }
    var fO = function(BB) {
      function OB() {
        return function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, OB), WO(this, OB, arguments)
      }
      return function(BB, OB) {
        if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(OB && OB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), OB && SO(BB, OB)
      }(OB, BB), GB = OB, (DB = [{
        key: "render",
        value: function() {
          var BB = this.props,
            GB = BB.x1,
            DB = BB.x2,
            QB = BB.y1,
            oB = BB.y2,
            jB = BB.className,
            yB = BB.alwaysShow,
            JB = BB.clipPathId;
          (0, BO.b)(void 0 === yB, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var MB = (0, KB.z)(GB),
            PB = (0, KB.z)(DB),
            zB = (0, KB.z)(QB),
            lB = (0, KB.z)(oB),
            pB = this.props.shape;
          if (!MB && !PB && !zB && !lB && !pB) return null;
          var qB = function(BB, OB, GB, YB, DB) {
            var QB = DB.x1,
              oB = DB.x2,
              jB = DB.y1,
              yB = DB.y2,
              JB = DB.xAxis,
              MB = DB.yAxis;
            if (!JB || !MB) return null;
            var PB = (0, tB.e)({
                x: JB.scale,
                y: MB.scale
              }),
              zB = {
                x: BB ? PB.x.apply(QB, {
                  position: "start"
                }) : PB.x.rangeMin,
                y: GB ? PB.y.apply(jB, {
                  position: "start"
                }) : PB.y.rangeMin
              },
              lB = {
                x: OB ? PB.x.apply(oB, {
                  position: "end"
                }) : PB.x.rangeMax,
                y: YB ? PB.y.apply(yB, {
                  position: "end"
                }) : PB.y.rangeMax
              };
            return !(0, xB.b)(DB, "discard") || PB.isInRange(zB) && PB.isInRange(lB) ? (0, tB.p)(zB, lB) : null
          }(MB, PB, zB, lB, this.props);
          if (!qB && !pB) return null;
          var NB = (0, xB.b)(this.props, "hidden") ? "url(#".concat(JB, ")") : void 0;
          return YB.createElement(WB.b, {
            className: (0, ZB.c)("recharts-reference-area", jB)
          }, OB.renderRect(pB, NO(NO({
            clipPath: NB
          }, (0, UB.e)(this.props, !0)), qB)), sB.b.renderCallByParent(this.props, qB))
        }
      }]) && RO(GB.prototype, DB), QB && RO(GB, QB), Object.defineProperty(GB, "prototype", {
        writable: !1
      }), GB;
      var GB, DB, QB
    }(YB.Component);

    function kO(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return dO(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return dO(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return dO(BB, OB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function dO(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }
    nO(fO, "displayName", "ReferenceArea"), nO(fO, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), nO(fO, "renderRect", (function(BB, OB) {
      return YB.isValidElement(BB) ? YB.cloneElement(BB, OB) : jB()(BB) ? BB(OB) : YB.createElement(nB.c, pO({}, OB, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var KO = function(BB, OB, GB, YB, DB) {
        var QB = (0, UB.i)(BB, lO.c),
          oB = (0, UB.i)(BB, zO),
          jB = [].concat(kO(QB), kO(oB)),
          yB = (0, UB.i)(BB, fO),
          JB = "".concat(YB, "Id"),
          MB = YB[0],
          PB = OB;
        if (jB.length && (PB = jB.reduce((function(BB, OB) {
            if (OB.props[JB] === GB && (0, xB.b)(OB.props, "extendDomain") && (0, KB.C)(OB.props[MB])) {
              var YB = OB.props[MB];
              return [Math.min(BB[0], YB), Math.max(BB[1], YB)]
            }
            return BB
          }), PB)), yB.length) {
          var zB = "".concat(MB, "1"),
            lB = "".concat(MB, "2");
          PB = yB.reduce((function(BB, OB) {
            if (OB.props[JB] === GB && (0, xB.b)(OB.props, "extendDomain") && (0, KB.C)(OB.props[zB]) && (0, KB.C)(OB.props[lB])) {
              var YB = OB.props[zB],
                DB = OB.props[lB];
              return [Math.min(BB[0], YB, DB), Math.max(BB[1], YB, DB)]
            }
            return BB
          }), PB)
        }
        return DB && DB.length && (PB = DB.reduce((function(BB, OB) {
          return (0, KB.C)(OB) ? [Math.min(BB[0], OB), Math.max(BB[1], OB)] : BB
        }), PB)), PB
      },
      uO = GB(6724),
      mO = GB(5949),
      IO = GB(29),
      FO = new(GB.n(IO)()),
      iO = "recharts.syncMouseEvents",
      LO = GB(5951);

    function gO(BB) {
      return gO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, gO(BB)
    }

    function rO(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, wO(YB.key), YB)
      }
    }

    function XO(BB, OB, GB) {
      return (OB = wO(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function wO(BB) {
      var OB = function(BB, OB) {
        if ("object" != gO(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != gO(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == gO(OB) ? OB : OB + ""
    }
    var EO = function() {
      return BB = function BB() {
        ! function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, BB), XO(this, "activeIndex", 0), XO(this, "coordinateList", []), XO(this, "layout", "horizontal")
      }, (OB = [{
        key: "setDetails",
        value: function(BB) {
          var OB, GB = BB.coordinateList,
            YB = void 0 === GB ? null : GB,
            DB = BB.container,
            QB = void 0 === DB ? null : DB,
            oB = BB.layout,
            jB = void 0 === oB ? null : oB,
            yB = BB.offset,
            JB = void 0 === yB ? null : yB,
            MB = BB.mouseHandlerCallback,
            PB = void 0 === MB ? null : MB;
          this.coordinateList = null !== (OB = null !== YB && void 0 !== YB ? YB : this.coordinateList) && void 0 !== OB ? OB : [], this.container = null !== QB && void 0 !== QB ? QB : this.container, this.layout = null !== jB && void 0 !== jB ? jB : this.layout, this.offset = null !== JB && void 0 !== JB ? JB : this.offset, this.mouseHandlerCallback = null !== PB && void 0 !== PB ? PB : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
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
          var BB, OB;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var GB = this.container.getBoundingClientRect(),
              YB = GB.x,
              DB = GB.y,
              QB = GB.height,
              oB = this.coordinateList[this.activeIndex].coordinate,
              jB = (null === (BB = window) || void 0 === BB ? void 0 : BB.scrollX) || 0,
              yB = (null === (OB = window) || void 0 === OB ? void 0 : OB.scrollY) || 0,
              JB = YB + oB + jB,
              MB = DB + this.offset.top + QB / 2 + yB;
            this.mouseHandlerCallback({
              pageX: JB,
              pageY: MB
            })
          }
        }
      }]) && rO(BB.prototype, OB), GB && rO(BB, GB), Object.defineProperty(BB, "prototype", {
        writable: !1
      }), BB;
      var BB, OB, GB
    }();
    var cO = GB(6783),
      hO = GB(6866);

    function aO(BB) {
      return aO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, aO(BB)
    }
    var eO = ["x", "y", "top", "left", "width", "height", "className"];

    function TO() {
      return TO = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, TO.apply(this, arguments)
    }

    function bO(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function CO(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != aO(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != aO(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == aO(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function HO(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }
    var vO = function(BB, OB, GB, YB, DB, QB) {
        return "M".concat(BB, ",").concat(DB, "v").concat(YB, "M").concat(QB, ",").concat(OB, "h").concat(GB)
      },
      sO = function(BB) {
        var OB = BB.x,
          GB = void 0 === OB ? 0 : OB,
          DB = BB.y,
          QB = void 0 === DB ? 0 : DB,
          oB = BB.top,
          jB = void 0 === oB ? 0 : oB,
          yB = BB.left,
          JB = void 0 === yB ? 0 : yB,
          MB = BB.width,
          PB = void 0 === MB ? 0 : MB,
          zB = BB.height,
          lB = void 0 === zB ? 0 : zB,
          pB = BB.className,
          qB = function(BB) {
            for (var OB = 1; OB < arguments.length; OB++) {
              var GB = null != arguments[OB] ? arguments[OB] : {};
              OB % 2 ? bO(Object(GB), !0).forEach((function(OB) {
                CO(BB, OB, GB[OB])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : bO(Object(GB)).forEach((function(OB) {
                Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
              }))
            }
            return BB
          }({
            x: GB,
            y: QB,
            top: jB,
            left: JB,
            width: PB,
            height: lB
          }, HO(BB, eO));
        return (0, KB.C)(GB) && (0, KB.C)(QB) && (0, KB.C)(PB) && (0, KB.C)(lB) && (0, KB.C)(jB) && (0, KB.C)(JB) ? YB.createElement("path", TO({}, (0, UB.e)(qB, !0), {
          className: (0, ZB.c)("recharts-cross", pB),
          d: vO(GB, QB, PB, lB, jB, JB)
        })) : null
      };

    function xO(BB) {
      var OB = BB.cx,
        GB = BB.cy,
        YB = BB.radius,
        DB = BB.startAngle,
        QB = BB.endAngle;
      return {
        points: [(0, uO.e)(OB, GB, YB, DB), (0, uO.e)(OB, GB, YB, QB)],
        cx: OB,
        cy: GB,
        radius: YB,
        startAngle: DB,
        endAngle: QB
      }
    }
    var tO = GB(6809);

    function BG(BB, OB, GB) {
      var YB, DB, QB, oB;
      if ("horizontal" === BB) QB = YB = OB.x, DB = GB.top, oB = GB.top + GB.height;
      else if ("vertical" === BB) oB = DB = OB.y, YB = GB.left, QB = GB.left + GB.width;
      else if (null != OB.cx && null != OB.cy) {
        if ("centric" !== BB) return xO(OB);
        var jB = OB.cx,
          yB = OB.cy,
          JB = OB.innerRadius,
          MB = OB.outerRadius,
          PB = OB.angle,
          zB = (0, uO.e)(jB, yB, JB, PB),
          lB = (0, uO.e)(jB, yB, MB, PB);
        YB = zB.x, DB = zB.y, QB = lB.x, oB = lB.y
      }
      return [{
        x: YB,
        y: DB
      }, {
        x: QB,
        y: oB
      }]
    }

    function OG(BB) {
      return OG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, OG(BB)
    }

    function GG(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function YG(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? GG(Object(GB), !0).forEach((function(OB) {
          DG(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : GG(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function DG(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != OG(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != OG(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == OG(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function QG(BB) {
      var OB, GB, DB, QB = BB.element,
        oB = BB.tooltipEventType,
        jB = BB.isActive,
        yB = BB.activeCoordinate,
        JB = BB.activePayload,
        MB = BB.offset,
        PB = BB.activeTooltipIndex,
        zB = BB.tooltipAxisBandSize,
        lB = BB.layout,
        pB = BB.chartName,
        qB = null !== (OB = QB.props.cursor) && void 0 !== OB ? OB : null === (GB = QB.type.defaultProps) || void 0 === GB ? void 0 : GB.cursor;
      if (!QB || !qB || !jB || !yB || "ScatterChart" !== pB && "axis" !== oB) return null;
      var NB = hO.b;
      if ("ScatterChart" === pB) DB = yB, NB = sO;
      else if ("BarChart" === pB) DB = function(BB, OB, GB, YB) {
        var DB = YB / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === BB ? OB.x - DB : GB.left + .5,
          y: "horizontal" === BB ? GB.top + .5 : OB.y - DB,
          width: "horizontal" === BB ? YB : GB.width - 1,
          height: "horizontal" === BB ? GB.height - 1 : YB
        }
      }(lB, yB, MB, zB), NB = nB.c;
      else if ("radial" === lB) {
        var RB = xO(yB),
          WB = RB.cx,
          AB = RB.cy,
          VB = RB.radius;
        DB = {
          cx: WB,
          cy: AB,
          startAngle: RB.startAngle,
          endAngle: RB.endAngle,
          innerRadius: VB,
          outerRadius: VB
        }, NB = tO.c
      } else DB = {
        points: BG(lB, yB, MB)
      }, NB = hO.b;
      var SB = YG(YG(YG(YG({
        stroke: "#ccc",
        pointerEvents: "none"
      }, MB), DB), (0, UB.e)(qB, !1)), {}, {
        payload: JB,
        payloadIndex: PB,
        className: (0, ZB.c)("recharts-tooltip-cursor", qB.className)
      });
      return (0, YB.isValidElement)(qB) ? (0, YB.cloneElement)(qB, SB) : (0, YB.createElement)(NB, SB)
    }
    var oG = GB(6834),
      jG = ["item"],
      yG = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function JG(BB) {
      return JG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, JG(BB)
    }

    function MG() {
      return MG = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, MG.apply(this, arguments)
    }

    function PG(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        var GB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != GB) {
          var YB, DB, QB, oB, jB = [],
            yB = !0,
            JB = !1;
          try {
            if (QB = (GB = GB.call(BB)).next, 0 === OB) {
              if (Object(GB) !== GB) return;
              yB = !1
            } else
              for (; !(yB = (YB = QB.call(GB)).done) && (jB.push(YB.value), jB.length !== OB); yB = !0);
          } catch (BB) {
            JB = !0, DB = BB
          } finally {
            try {
              if (!yB && null != GB.return && (oB = GB.return(), Object(oB) !== oB)) return
            } finally {
              if (JB) throw DB
            }
          }
          return jB
        }
      }(BB, OB) || WG(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function zG(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function lG(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, UG(YB.key), YB)
      }
    }

    function pG(BB, OB, GB) {
      return OB = ZG(OB),
        function(BB, OB) {
          if (OB && ("object" === JG(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, qG() ? Reflect.construct(OB, GB || [], ZG(BB).constructor) : OB.apply(BB, GB))
    }

    function qG() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (qG = function() {
        return !!BB
      })()
    }

    function ZG(BB) {
      return ZG = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, ZG(BB)
    }

    function NG(BB, OB) {
      return NG = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, NG(BB, OB)
    }

    function RG(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return AG(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || WG(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function WG(BB, OB) {
      if (BB) {
        if ("string" === typeof BB) return AG(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === GB && BB.constructor && (GB = BB.constructor.name), "Map" === GB || "Set" === GB ? Array.from(BB) : "Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB) ? AG(BB, OB) : void 0
      }
    }

    function AG(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function VG(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function SG(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? VG(Object(GB), !0).forEach((function(OB) {
          nG(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : VG(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function nG(BB, OB, GB) {
      return (OB = UG(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function UG(BB) {
      var OB = function(BB, OB) {
        if ("object" != JG(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != JG(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == JG(OB) ? OB : OB + ""
    }
    var fG = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      kG = {
        width: "100%",
        height: "100%"
      },
      dG = {
        x: 0,
        y: 0
      };

    function KG(BB) {
      return BB
    }
    var uG = function(BB, OB) {
      var GB = OB.graphicalItems,
        YB = OB.dataStartIndex,
        DB = OB.dataEndIndex,
        QB = (null !== GB && void 0 !== GB ? GB : []).reduce((function(BB, OB) {
          var GB = OB.props.data;
          return GB && GB.length ? [].concat(RG(BB), RG(GB)) : BB
        }), []);
      return QB.length > 0 ? QB : BB && BB.length && (0, KB.C)(YB) && (0, KB.C)(DB) ? BB.slice(YB, DB + 1) : []
    };

    function mG(BB) {
      return "number" === BB ? [0, "auto"] : void 0
    }
    var IG = function(BB, OB, GB, YB) {
        var DB = BB.graphicalItems,
          QB = BB.tooltipAxis,
          oB = uG(OB, BB);
        return GB < 0 || !DB || !DB.length || GB >= oB.length ? null : DB.reduce((function(DB, jB) {
          var yB, JB, MB = null !== (yB = jB.props.data) && void 0 !== yB ? yB : OB;
          if (MB && BB.dataStartIndex + BB.dataEndIndex !== 0 && BB.dataEndIndex - BB.dataStartIndex >= GB && (MB = MB.slice(BB.dataStartIndex, BB.dataEndIndex + 1)), QB.dataKey && !QB.allowDuplicatedCategory) {
            var PB = void 0 === MB ? oB : MB;
            JB = (0, KB.g)(PB, QB.dataKey, YB)
          } else JB = MB && MB[GB] || oB[GB];
          return JB ? [].concat(RG(DB), [(0, dB.ab)(jB, JB)]) : DB
        }), [])
      },
      FG = function(BB, OB, GB, YB) {
        var DB = YB || {
            x: BB.chartX,
            y: BB.chartY
          },
          QB = function(BB, OB) {
            return "horizontal" === OB ? BB.x : "vertical" === OB ? BB.y : "centric" === OB ? BB.angle : BB.radius
          }(DB, GB),
          oB = BB.orderedTooltipTicks,
          jB = BB.tooltipAxis,
          yB = BB.tooltipTicks,
          JB = (0, dB.d)(QB, oB, yB, jB);
        if (JB >= 0 && yB) {
          var MB = yB[JB] && yB[JB].value,
            PB = IG(BB, OB, JB, MB),
            zB = function(BB, OB, GB, YB) {
              var DB = OB.find((function(BB) {
                return BB && BB.index === GB
              }));
              if (DB) {
                if ("horizontal" === BB) return {
                  x: DB.coordinate,
                  y: YB.y
                };
                if ("vertical" === BB) return {
                  x: YB.x,
                  y: DB.coordinate
                };
                if ("centric" === BB) {
                  var QB = DB.coordinate,
                    oB = YB.radius;
                  return SG(SG(SG({}, YB), (0, uO.e)(YB.cx, YB.cy, oB, QB)), {}, {
                    angle: QB,
                    radius: oB
                  })
                }
                var jB = DB.coordinate,
                  yB = YB.angle;
                return SG(SG(SG({}, YB), (0, uO.e)(YB.cx, YB.cy, jB, yB)), {}, {
                  angle: yB,
                  radius: jB
                })
              }
              return dG
            }(GB, oB, JB, DB);
          return {
            activeTooltipIndex: JB,
            activeLabel: MB,
            activePayload: PB,
            activeCoordinate: zB
          }
        }
        return null
      },
      iG = function(BB, OB) {
        var GB = OB.axes,
          YB = OB.graphicalItems,
          DB = OB.axisType,
          oB = OB.axisIdKey,
          jB = OB.stackGroups,
          yB = OB.dataStartIndex,
          MB = OB.dataEndIndex,
          PB = BB.layout,
          zB = BB.children,
          lB = BB.stackOffset,
          pB = (0, dB.gb)(PB, DB);
        return GB.reduce((function(OB, GB) {
          var qB, ZB = void 0 !== GB.type.defaultProps ? SG(SG({}, GB.type.defaultProps), GB.props) : GB.props,
            NB = ZB.type,
            RB = ZB.dataKey,
            WB = ZB.allowDataOverflow,
            AB = ZB.allowDuplicatedCategory,
            VB = ZB.scale,
            SB = ZB.ticks,
            nB = ZB.includeHidden,
            UB = ZB[oB];
          if (OB[UB]) return OB;
          var fB, kB, uB, mB = uG(BB.data, {
              graphicalItems: YB.filter((function(BB) {
                var OB;
                return (oB in BB.props ? BB.props[oB] : null === (OB = BB.type.defaultProps) || void 0 === OB ? void 0 : OB[oB]) === UB
              })),
              dataStartIndex: yB,
              dataEndIndex: MB
            }),
            IB = mB.length;
          (function(BB, OB, GB) {
            if ("number" === GB && !0 === OB && Array.isArray(BB)) {
              var YB = null === BB || void 0 === BB ? void 0 : BB[0],
                DB = null === BB || void 0 === BB ? void 0 : BB[1];
              if (YB && DB && (0, KB.C)(YB) && (0, KB.C)(DB)) return !0
            }
            return !1
          })(ZB.domain, WB, NB) && (fB = (0, dB.qb)(ZB.domain, null, WB), !pB || "number" !== NB && "auto" === VB || (uB = (0, dB.I)(mB, RB, "category")));
          var FB = mG(NB);
          if (!fB || 0 === fB.length) {
            var iB, LB = null !== (iB = ZB.domain) && void 0 !== iB ? iB : FB;
            if (RB) {
              if (fB = (0, dB.I)(mB, RB, NB), "category" === NB && pB) {
                var gB = (0, KB.r)(fB);
                AB && gB ? (kB = fB, fB = JB()(0, IB)) : AB || (fB = (0, dB.hb)(LB, fB, GB).reduce((function(BB, OB) {
                  return BB.indexOf(OB) >= 0 ? BB : [].concat(RG(BB), [OB])
                }), []))
              } else if ("category" === NB) fB = AB ? fB.filter((function(BB) {
                return "" !== BB && !QB()(BB)
              })) : (0, dB.hb)(LB, fB, GB).reduce((function(BB, OB) {
                return BB.indexOf(OB) >= 0 || "" === OB || QB()(OB) ? BB : [].concat(RG(BB), [OB])
              }), []);
              else if ("number" === NB) {
                var rB = (0, dB.lb)(mB, YB.filter((function(BB) {
                  var OB, GB, YB = oB in BB.props ? BB.props[oB] : null === (OB = BB.type.defaultProps) || void 0 === OB ? void 0 : OB[oB],
                    DB = "hide" in BB.props ? BB.props.hide : null === (GB = BB.type.defaultProps) || void 0 === GB ? void 0 : GB.hide;
                  return YB === UB && (nB || !DB)
                })), RB, DB, PB);
                rB && (fB = rB)
              }!pB || "number" !== NB && "auto" === VB || (uB = (0, dB.I)(mB, RB, "category"))
            } else fB = pB ? JB()(0, IB) : jB && jB[UB] && jB[UB].hasStack && "number" === NB ? "expand" === lB ? [0, 1] : (0, dB.N)(jB[UB].stackGroups, yB, MB) : (0, dB.M)(mB, YB.filter((function(BB) {
              var OB = oB in BB.props ? BB.props[oB] : BB.type.defaultProps[oB],
                GB = "hide" in BB.props ? BB.props.hide : BB.type.defaultProps.hide;
              return OB === UB && (nB || !GB)
            })), NB, PB, !0);
            if ("number" === NB) fB = KO(zB, fB, UB, DB, SB), LB && (fB = (0, dB.qb)(LB, fB, WB));
            else if ("category" === NB && LB) {
              var XB = LB;
              fB.every((function(BB) {
                return XB.indexOf(BB) >= 0
              })) && (fB = XB)
            }
          }
          return SG(SG({}, OB), {}, nG({}, UB, SG(SG({}, ZB), {}, {
            axisType: DB,
            domain: fB,
            categoricalDomain: uB,
            duplicateDomain: kB,
            originalDomain: null !== (qB = ZB.domain) && void 0 !== qB ? qB : FB,
            isCategorical: pB,
            layout: PB
          })))
        }), {})
      },
      LG = function(BB, OB) {
        var GB = OB.axisType,
          YB = void 0 === GB ? "xAxis" : GB,
          DB = OB.AxisComp,
          QB = OB.graphicalItems,
          oB = OB.stackGroups,
          jB = OB.dataStartIndex,
          yB = OB.dataEndIndex,
          MB = BB.children,
          zB = "".concat(YB, "Id"),
          lB = (0, UB.i)(MB, DB),
          pB = {};
        return lB && lB.length ? pB = iG(BB, {
          axes: lB,
          graphicalItems: QB,
          axisType: YB,
          axisIdKey: zB,
          stackGroups: oB,
          dataStartIndex: jB,
          dataEndIndex: yB
        }) : QB && QB.length && (pB = function(BB, OB) {
          var GB = OB.graphicalItems,
            YB = OB.Axis,
            DB = OB.axisType,
            QB = OB.axisIdKey,
            oB = OB.stackGroups,
            jB = OB.dataStartIndex,
            yB = OB.dataEndIndex,
            MB = BB.layout,
            zB = BB.children,
            lB = uG(BB.data, {
              graphicalItems: GB,
              dataStartIndex: jB,
              dataEndIndex: yB
            }),
            pB = lB.length,
            qB = (0, dB.gb)(MB, DB),
            ZB = -1;
          return GB.reduce((function(BB, OB) {
            var NB, RB = (void 0 !== OB.type.defaultProps ? SG(SG({}, OB.type.defaultProps), OB.props) : OB.props)[QB],
              WB = mG("number");
            return BB[RB] ? BB : (ZB++, qB ? NB = JB()(0, pB) : oB && oB[RB] && oB[RB].hasStack ? (NB = (0, dB.N)(oB[RB].stackGroups, jB, yB), NB = KO(zB, NB, RB, DB)) : (NB = (0, dB.qb)(WB, (0, dB.M)(lB, GB.filter((function(BB) {
              var OB, GB, YB = QB in BB.props ? BB.props[QB] : null === (OB = BB.type.defaultProps) || void 0 === OB ? void 0 : OB[QB],
                DB = "hide" in BB.props ? BB.props.hide : null === (GB = BB.type.defaultProps) || void 0 === GB ? void 0 : GB.hide;
              return YB === RB && !DB
            })), "number", MB), YB.defaultProps.allowDataOverflow), NB = KO(zB, NB, RB, DB)), SG(SG({}, BB), {}, nG({}, RB, SG(SG({
              axisType: DB
            }, YB.defaultProps), {}, {
              hide: !0,
              orientation: PB()(fG, "".concat(DB, ".").concat(ZB % 2), null),
              domain: NB,
              originalDomain: WB,
              isCategorical: qB,
              layout: MB
            }))))
          }), {})
        }(BB, {
          Axis: DB,
          graphicalItems: QB,
          axisType: YB,
          axisIdKey: zB,
          stackGroups: oB,
          dataStartIndex: jB,
          dataEndIndex: yB
        })), pB
      },
      gG = function(BB) {
        var OB = BB.children,
          GB = BB.defaultShowTooltip,
          YB = (0, UB.m)(OB, CB),
          DB = 0,
          QB = 0;
        return BB.data && 0 !== BB.data.length && (QB = BB.data.length - 1), YB && YB.props && (YB.props.startIndex >= 0 && (DB = YB.props.startIndex), YB.props.endIndex >= 0 && (QB = YB.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: DB,
          dataEndIndex: QB,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(GB)
        }
      },
      rG = function(BB) {
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
      XG = function(BB, OB) {
        return "xAxis" === OB ? BB[OB].width : "yAxis" === OB ? BB[OB].height : void 0
      },
      wG = function(BB) {
        var OB = BB.chartName,
          GB = BB.GraphicalChild,
          DB = BB.defaultTooltipEventType,
          oB = void 0 === DB ? "axis" : DB,
          yB = BB.validateTooltipEventTypes,
          JB = void 0 === yB ? ["axis"] : yB,
          MB = BB.axisComponents,
          zB = BB.legendContent,
          pB = BB.formatAxisMap,
          fB = BB.defaultProps,
          kB = function(BB, OB) {
            var GB = OB.graphicalItems,
              YB = OB.stackGroups,
              DB = OB.offset,
              oB = OB.updateId,
              jB = OB.dataStartIndex,
              yB = OB.dataEndIndex,
              JB = BB.barSize,
              PB = BB.layout,
              zB = BB.barGap,
              lB = BB.barCategoryGap,
              pB = BB.maxBarSize,
              qB = rG(PB),
              ZB = qB.numericAxisName,
              RB = qB.cateAxisName,
              WB = function(BB) {
                return !(!BB || !BB.length) && BB.some((function(BB) {
                  var OB = (0, UB.q)(BB && BB.type);
                  return OB && OB.indexOf("Bar") >= 0
                }))
              }(GB),
              AB = [];
            return GB.forEach((function(GB, qB) {
              var VB = uG(BB.data, {
                  graphicalItems: [GB],
                  dataStartIndex: jB,
                  dataEndIndex: yB
                }),
                SB = void 0 !== GB.type.defaultProps ? SG(SG({}, GB.type.defaultProps), GB.props) : GB.props,
                nB = SB.dataKey,
                fB = SB.maxBarSize,
                kB = SB["".concat(ZB, "Id")],
                KB = SB["".concat(RB, "Id")],
                uB = MB.reduce((function(BB, GB) {
                  var YB = OB["".concat(GB.axisType, "Map")],
                    DB = SB["".concat(GB.axisType, "Id")];
                  YB && YB[DB] || "zAxis" === GB.axisType || (0, NB.d)(!1);
                  var QB = YB[DB];
                  return SG(SG({}, BB), {}, nG(nG({}, GB.axisType, QB), "".concat(GB.axisType, "Ticks"), (0, dB.Y)(QB)))
                }), {}),
                mB = uB[RB],
                IB = uB["".concat(RB, "Ticks")],
                FB = YB && YB[kB] && YB[kB].hasStack && (0, dB.U)(GB, YB[kB].stackGroups),
                iB = (0, UB.q)(GB.type).indexOf("Bar") >= 0,
                LB = (0, dB.q)(mB, IB),
                gB = [],
                rB = WB && (0, dB.v)({
                  barSize: JB,
                  stackGroups: YB,
                  totalSize: XG(uB, RB)
                });
              if (iB) {
                var XB, wB, EB = QB()(fB) ? pB : fB,
                  cB = null !== (XB = null !== (wB = (0, dB.q)(mB, IB, !0)) && void 0 !== wB ? wB : EB) && void 0 !== XB ? XB : 0;
                gB = (0, dB.u)({
                  barGap: zB,
                  barCategoryGap: lB,
                  bandSize: cB !== LB ? cB : LB,
                  sizeList: rB[KB],
                  maxBarSize: EB
                }), cB !== LB && (gB = gB.map((function(BB) {
                  return SG(SG({}, BB), {}, {
                    position: SG(SG({}, BB.position), {}, {
                      offset: BB.position.offset - cB / 2
                    })
                  })
                })))
              }
              var hB = GB && GB.type && GB.type.getComposedData;
              hB && AB.push({
                props: SG(SG({}, hB(SG(SG({}, uB), {}, {
                  displayedData: VB,
                  props: BB,
                  dataKey: nB,
                  item: GB,
                  bandSize: LB,
                  barPosition: gB,
                  offset: DB,
                  stackedData: FB,
                  layout: PB,
                  dataStartIndex: jB,
                  dataEndIndex: yB
                }))), {}, nG(nG(nG({
                  key: GB.key || "item-".concat(qB)
                }, ZB, uB[ZB]), RB, uB[RB]), "animationId", oB)),
                childIndex: (0, UB.A)(GB, BB.children),
                item: GB
              })
            })), AB
          },
          uB = function(BB, YB) {
            var DB = BB.props,
              QB = BB.dataStartIndex,
              oB = BB.dataEndIndex,
              jB = BB.updateId;
            if (!(0, UB.F)({
                props: DB
              })) return null;
            var yB = DB.children,
              JB = DB.layout,
              zB = DB.stackOffset,
              qB = DB.data,
              ZB = DB.reverseStackOrder,
              NB = rG(JB),
              RB = NB.numericAxisName,
              WB = NB.cateAxisName,
              AB = (0, UB.i)(yB, GB),
              SB = (0, dB.Q)(qB, AB, "".concat(RB, "Id"), "".concat(WB, "Id"), zB, ZB),
              nB = MB.reduce((function(BB, OB) {
                var GB = "".concat(OB.axisType, "Map");
                return SG(SG({}, BB), {}, nG({}, GB, LG(DB, SG(SG({}, OB), {}, {
                  graphicalItems: AB,
                  stackGroups: OB.axisType === RB && SB,
                  dataStartIndex: QB,
                  dataEndIndex: oB
                }))))
              }), {}),
              fB = function(BB, OB) {
                var GB = BB.props,
                  YB = BB.graphicalItems,
                  DB = BB.xAxisMap,
                  QB = void 0 === DB ? {} : DB,
                  oB = BB.yAxisMap,
                  jB = void 0 === oB ? {} : oB,
                  yB = GB.width,
                  JB = GB.height,
                  MB = GB.children,
                  zB = GB.margin || {},
                  lB = (0, UB.m)(MB, CB),
                  pB = (0, UB.m)(MB, VB.e),
                  qB = Object.keys(jB).reduce((function(BB, OB) {
                    var GB = jB[OB],
                      YB = GB.orientation;
                    return GB.mirror || GB.hide ? BB : SG(SG({}, BB), {}, nG({}, YB, BB[YB] + GB.width))
                  }), {
                    left: zB.left || 0,
                    right: zB.right || 0
                  }),
                  ZB = Object.keys(QB).reduce((function(BB, OB) {
                    var GB = QB[OB],
                      YB = GB.orientation;
                    return GB.mirror || GB.hide ? BB : SG(SG({}, BB), {}, nG({}, YB, PB()(BB, "".concat(YB)) + GB.height))
                  }), {
                    top: zB.top || 0,
                    bottom: zB.bottom || 0
                  }),
                  NB = SG(SG({}, ZB), qB),
                  RB = NB.bottom;
                lB && (NB.bottom += lB.props.height || CB.defaultProps.height), pB && OB && (NB = (0, dB.b)(NB, YB, GB, OB));
                var WB = yB - NB.left - NB.right,
                  AB = JB - NB.top - NB.bottom;
                return SG(SG({
                  brushBottom: RB
                }, NB), {}, {
                  width: Math.max(WB, 0),
                  height: Math.max(AB, 0)
                })
              }(SG(SG({}, nB), {}, {
                props: DB,
                graphicalItems: AB
              }), null === YB || void 0 === YB ? void 0 : YB.legendBBox);
            Object.keys(nB).forEach((function(BB) {
              nB[BB] = pB(DB, nB[BB], fB, BB.replace("Map", ""), OB)
            }));
            var uB = function(BB) {
                var OB = (0, KB.j)(BB),
                  GB = (0, dB.Y)(OB, !1, !0);
                return {
                  tooltipTicks: GB,
                  orderedTooltipTicks: lB()(GB, (function(BB) {
                    return BB.coordinate
                  })),
                  tooltipAxis: OB,
                  tooltipAxisBandSize: (0, dB.q)(OB, GB)
                }
              }(nB["".concat(WB, "Map")]),
              mB = kB(DB, SG(SG({}, nB), {}, {
                dataStartIndex: QB,
                dataEndIndex: oB,
                updateId: jB,
                graphicalItems: AB,
                stackGroups: SB,
                offset: fB
              }));
            return SG(SG({
              formattedGraphicalItems: mB,
              graphicalItems: AB,
              offset: fB,
              stackGroups: SB
            }, uB), nB)
          },
          mB = function(BB) {
            function GB(BB) {
              var DB, oB, yB;
              return function(BB, OB) {
                if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
              }(this, GB), nG(yB = pG(this, GB, [BB]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), nG(yB, "accessibilityManager", new EO), nG(yB, "handleLegendBBoxUpdate", (function(BB) {
                if (BB) {
                  var OB = yB.state,
                    GB = OB.dataStartIndex,
                    YB = OB.dataEndIndex,
                    DB = OB.updateId;
                  yB.setState(SG({
                    legendBBox: BB
                  }, uB({
                    props: yB.props,
                    dataStartIndex: GB,
                    dataEndIndex: YB,
                    updateId: DB
                  }, SG(SG({}, yB.state), {}, {
                    legendBBox: BB
                  }))))
                }
              })), nG(yB, "handleReceiveSyncEvent", (function(BB, OB, GB) {
                if (yB.props.syncId === BB) {
                  if (GB === yB.eventEmitterSymbol && "function" !== typeof yB.props.syncMethod) return;
                  yB.applySyncEvent(OB)
                }
              })), nG(yB, "handleBrushChange", (function(BB) {
                var OB = BB.startIndex,
                  GB = BB.endIndex;
                if (OB !== yB.state.dataStartIndex || GB !== yB.state.dataEndIndex) {
                  var YB = yB.state.updateId;
                  yB.setState((function() {
                    return SG({
                      dataStartIndex: OB,
                      dataEndIndex: GB
                    }, uB({
                      props: yB.props,
                      dataStartIndex: OB,
                      dataEndIndex: GB,
                      updateId: YB
                    }, yB.state))
                  })), yB.triggerSyncEvent({
                    dataStartIndex: OB,
                    dataEndIndex: GB
                  })
                }
              })), nG(yB, "handleMouseEnter", (function(BB) {
                var OB = yB.getMouseInfo(BB);
                if (OB) {
                  var GB = SG(SG({}, OB), {}, {
                    isTooltipActive: !0
                  });
                  yB.setState(GB), yB.triggerSyncEvent(GB);
                  var YB = yB.props.onMouseEnter;
                  jB()(YB) && YB(GB, BB)
                }
              })), nG(yB, "triggeredAfterMouseMove", (function(BB) {
                var OB = yB.getMouseInfo(BB),
                  GB = OB ? SG(SG({}, OB), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                yB.setState(GB), yB.triggerSyncEvent(GB);
                var YB = yB.props.onMouseMove;
                jB()(YB) && YB(GB, BB)
              })), nG(yB, "handleItemMouseEnter", (function(BB) {
                yB.setState((function() {
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
              })), nG(yB, "handleItemMouseLeave", (function() {
                yB.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), nG(yB, "handleMouseMove", (function(BB) {
                BB.persist(), yB.throttleTriggeredAfterMouseMove(BB)
              })), nG(yB, "handleMouseLeave", (function(BB) {
                yB.throttleTriggeredAfterMouseMove.cancel();
                var OB = {
                  isTooltipActive: !1
                };
                yB.setState(OB), yB.triggerSyncEvent(OB);
                var GB = yB.props.onMouseLeave;
                jB()(GB) && GB(OB, BB)
              })), nG(yB, "handleOuterEvent", (function(BB) {
                var OB, GB = (0, UB.r)(BB),
                  YB = PB()(yB.props, "".concat(GB));
                GB && jB()(YB) && YB(null !== (OB = /.*touch.*/i.test(GB) ? yB.getMouseInfo(BB.changedTouches[0]) : yB.getMouseInfo(BB)) && void 0 !== OB ? OB : {}, BB)
              })), nG(yB, "handleClick", (function(BB) {
                var OB = yB.getMouseInfo(BB);
                if (OB) {
                  var GB = SG(SG({}, OB), {}, {
                    isTooltipActive: !0
                  });
                  yB.setState(GB), yB.triggerSyncEvent(GB);
                  var YB = yB.props.onClick;
                  jB()(YB) && YB(GB, BB)
                }
              })), nG(yB, "handleMouseDown", (function(BB) {
                var OB = yB.props.onMouseDown;
                jB()(OB) && OB(yB.getMouseInfo(BB), BB)
              })), nG(yB, "handleMouseUp", (function(BB) {
                var OB = yB.props.onMouseUp;
                jB()(OB) && OB(yB.getMouseInfo(BB), BB)
              })), nG(yB, "handleTouchMove", (function(BB) {
                null != BB.changedTouches && BB.changedTouches.length > 0 && yB.throttleTriggeredAfterMouseMove(BB.changedTouches[0])
              })), nG(yB, "handleTouchStart", (function(BB) {
                null != BB.changedTouches && BB.changedTouches.length > 0 && yB.handleMouseDown(BB.changedTouches[0])
              })), nG(yB, "handleTouchEnd", (function(BB) {
                null != BB.changedTouches && BB.changedTouches.length > 0 && yB.handleMouseUp(BB.changedTouches[0])
              })), nG(yB, "handleDoubleClick", (function(BB) {
                var OB = yB.props.onDoubleClick;
                jB()(OB) && OB(yB.getMouseInfo(BB), BB)
              })), nG(yB, "handleContextMenu", (function(BB) {
                var OB = yB.props.onContextMenu;
                jB()(OB) && OB(yB.getMouseInfo(BB), BB)
              })), nG(yB, "triggerSyncEvent", (function(BB) {
                void 0 !== yB.props.syncId && FO.emit(iO, yB.props.syncId, BB, yB.eventEmitterSymbol)
              })), nG(yB, "applySyncEvent", (function(BB) {
                var OB = yB.props,
                  GB = OB.layout,
                  YB = OB.syncMethod,
                  DB = yB.state.updateId,
                  QB = BB.dataStartIndex,
                  oB = BB.dataEndIndex;
                if (void 0 !== BB.dataStartIndex || void 0 !== BB.dataEndIndex) yB.setState(SG({
                  dataStartIndex: QB,
                  dataEndIndex: oB
                }, uB({
                  props: yB.props,
                  dataStartIndex: QB,
                  dataEndIndex: oB,
                  updateId: DB
                }, yB.state)));
                else if (void 0 !== BB.activeTooltipIndex) {
                  var jB = BB.chartX,
                    JB = BB.chartY,
                    MB = BB.activeTooltipIndex,
                    PB = yB.state,
                    zB = PB.offset,
                    lB = PB.tooltipTicks;
                  if (!zB) return;
                  if ("function" === typeof YB) MB = YB(lB, BB);
                  else if ("value" === YB) {
                    MB = -1;
                    for (var pB = 0; pB < lB.length; pB++)
                      if (lB[pB].value === BB.activeLabel) {
                        MB = pB;
                        break
                      }
                  }
                  var qB = SG(SG({}, zB), {}, {
                      x: zB.left,
                      y: zB.top
                    }),
                    ZB = Math.min(jB, qB.x + qB.width),
                    NB = Math.min(JB, qB.y + qB.height),
                    RB = lB[MB] && lB[MB].value,
                    WB = IG(yB.state, yB.props.data, MB),
                    AB = lB[MB] ? {
                      x: "horizontal" === GB ? lB[MB].coordinate : ZB,
                      y: "horizontal" === GB ? NB : lB[MB].coordinate
                    } : dG;
                  yB.setState(SG(SG({}, BB), {}, {
                    activeLabel: RB,
                    activeCoordinate: AB,
                    activePayload: WB,
                    activeTooltipIndex: MB
                  }))
                } else yB.setState(BB)
              })), nG(yB, "renderCursor", (function(BB) {
                var GB, DB = yB.state,
                  QB = DB.isTooltipActive,
                  oB = DB.activeCoordinate,
                  jB = DB.activePayload,
                  JB = DB.offset,
                  MB = DB.activeTooltipIndex,
                  PB = DB.tooltipAxisBandSize,
                  zB = yB.getTooltipEventType(),
                  lB = null !== (GB = BB.props.active) && void 0 !== GB ? GB : QB,
                  pB = yB.props.layout,
                  qB = BB.key || "_recharts-cursor";
                return YB.createElement(QG, {
                  key: qB,
                  activeCoordinate: oB,
                  activePayload: jB,
                  activeTooltipIndex: MB,
                  chartName: OB,
                  element: BB,
                  isActive: lB,
                  layout: pB,
                  offset: JB,
                  tooltipAxisBandSize: PB,
                  tooltipEventType: zB
                })
              })), nG(yB, "renderPolarAxis", (function(BB, OB, GB) {
                var DB = PB()(BB, "type.axisType"),
                  QB = PB()(yB.state, "".concat(DB, "Map")),
                  oB = BB.type.defaultProps,
                  jB = void 0 !== oB ? SG(SG({}, oB), BB.props) : BB.props,
                  JB = QB && QB[jB["".concat(DB, "Id")]];
                return (0, YB.cloneElement)(BB, SG(SG({}, JB), {}, {
                  className: (0, ZB.c)(DB, JB.className),
                  key: BB.key || "".concat(OB, "-").concat(GB),
                  ticks: (0, dB.Y)(JB, !0)
                }))
              })), nG(yB, "renderPolarGrid", (function(BB) {
                var OB = BB.props,
                  GB = OB.radialLines,
                  DB = OB.polarAngles,
                  QB = OB.polarRadius,
                  oB = yB.state,
                  jB = oB.radiusAxisMap,
                  JB = oB.angleAxisMap,
                  MB = (0, KB.j)(jB),
                  PB = (0, KB.j)(JB),
                  zB = PB.cx,
                  lB = PB.cy,
                  pB = PB.innerRadius,
                  qB = PB.outerRadius;
                return (0, YB.cloneElement)(BB, {
                  polarAngles: Array.isArray(DB) ? DB : (0, dB.Y)(PB, !0).map((function(BB) {
                    return BB.coordinate
                  })),
                  polarRadius: Array.isArray(QB) ? QB : (0, dB.Y)(MB, !0).map((function(BB) {
                    return BB.coordinate
                  })),
                  cx: zB,
                  cy: lB,
                  innerRadius: pB,
                  outerRadius: qB,
                  key: BB.key || "polar-grid",
                  radialLines: GB
                })
              })), nG(yB, "renderLegend", (function() {
                var BB = yB.state.formattedGraphicalItems,
                  OB = yB.props,
                  GB = OB.children,
                  DB = OB.width,
                  QB = OB.height,
                  oB = yB.props.margin || {},
                  jB = DB - (oB.left || 0) - (oB.right || 0),
                  JB = (0, vB.c)({
                    children: GB,
                    formattedGraphicalItems: BB,
                    legendWidth: jB,
                    legendContent: zB
                  });
                if (!JB) return null;
                var MB = JB.item,
                  PB = zG(JB, jG);
                return (0, YB.cloneElement)(MB, SG(SG({}, PB), {}, {
                  chartWidth: DB,
                  chartHeight: QB,
                  margin: oB,
                  onBBoxUpdate: yB.handleLegendBBoxUpdate
                }))
              })), nG(yB, "renderTooltip", (function() {
                var BB, OB = yB.props,
                  GB = OB.children,
                  DB = OB.accessibilityLayer,
                  QB = (0, UB.m)(GB, AB.e);
                if (!QB) return null;
                var oB = yB.state,
                  jB = oB.isTooltipActive,
                  JB = oB.activeCoordinate,
                  MB = oB.activePayload,
                  PB = oB.activeLabel,
                  zB = oB.offset,
                  lB = null !== (BB = QB.props.active) && void 0 !== BB ? BB : jB;
                return (0, YB.cloneElement)(QB, {
                  viewBox: SG(SG({}, zB), {}, {
                    x: zB.left,
                    y: zB.top
                  }),
                  active: lB,
                  label: PB,
                  payload: lB ? MB : [],
                  coordinate: JB,
                  accessibilityLayer: DB
                })
              })), nG(yB, "renderBrush", (function(BB) {
                var OB = yB.props,
                  GB = OB.margin,
                  DB = OB.data,
                  QB = yB.state,
                  oB = QB.offset,
                  jB = QB.dataStartIndex,
                  JB = QB.dataEndIndex,
                  MB = QB.updateId;
                return (0, YB.cloneElement)(BB, {
                  key: BB.key || "_recharts-brush",
                  onChange: (0, dB.i)(yB.handleBrushChange, BB.props.onChange),
                  data: DB,
                  x: (0, KB.C)(BB.props.x) ? BB.props.x : oB.left,
                  y: (0, KB.C)(BB.props.y) ? BB.props.y : oB.top + oB.height + oB.brushBottom - (GB.bottom || 0),
                  width: (0, KB.C)(BB.props.width) ? BB.props.width : oB.width,
                  startIndex: jB,
                  endIndex: JB,
                  updateId: "brush-".concat(MB)
                })
              })), nG(yB, "renderReferenceElement", (function(BB, OB, GB) {
                if (!BB) return null;
                var DB = yB.clipPathId,
                  QB = yB.state,
                  oB = QB.xAxisMap,
                  jB = QB.yAxisMap,
                  JB = QB.offset,
                  MB = BB.type.defaultProps || {},
                  PB = BB.props,
                  zB = PB.xAxisId,
                  lB = void 0 === zB ? MB.xAxisId : zB,
                  pB = PB.yAxisId,
                  qB = void 0 === pB ? MB.yAxisId : pB;
                return (0, YB.cloneElement)(BB, {
                  key: BB.key || "".concat(OB, "-").concat(GB),
                  xAxis: oB[lB],
                  yAxis: jB[qB],
                  viewBox: {
                    x: JB.left,
                    y: JB.top,
                    width: JB.width,
                    height: JB.height
                  },
                  clipPathId: DB
                })
              })), nG(yB, "renderActivePoints", (function(BB) {
                var OB = BB.item,
                  YB = BB.activePoint,
                  DB = BB.basePoint,
                  QB = BB.childIndex,
                  oB = BB.isRange,
                  jB = [],
                  yB = OB.props.key,
                  JB = void 0 !== OB.item.type.defaultProps ? SG(SG({}, OB.item.type.defaultProps), OB.item.props) : OB.item.props,
                  MB = JB.activeDot,
                  PB = SG(SG({
                    index: QB,
                    dataKey: JB.dataKey,
                    cx: YB.x,
                    cy: YB.y,
                    r: 4,
                    fill: (0, dB.O)(OB.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: YB.payload,
                    value: YB.value
                  }, (0, UB.e)(MB, !1)), (0, LO.g)(MB));
                return jB.push(GB.renderActiveDot(MB, PB, "".concat(yB, "-activePoint-").concat(QB))), DB ? jB.push(GB.renderActiveDot(MB, SG(SG({}, PB), {}, {
                  cx: DB.x,
                  cy: DB.y
                }), "".concat(yB, "-basePoint-").concat(QB))) : oB && jB.push(null), jB
              })), nG(yB, "renderGraphicChild", (function(BB, OB, GB) {
                var DB = yB.filterFormatItem(BB, OB, GB);
                if (!DB) return null;
                var oB = yB.getTooltipEventType(),
                  jB = yB.state,
                  JB = jB.isTooltipActive,
                  MB = jB.tooltipAxis,
                  PB = jB.activeTooltipIndex,
                  zB = jB.activeLabel,
                  lB = yB.props.children,
                  pB = (0, UB.m)(lB, AB.e),
                  qB = DB.props,
                  ZB = qB.points,
                  NB = qB.isRange,
                  RB = qB.baseLine,
                  WB = void 0 !== DB.item.type.defaultProps ? SG(SG({}, DB.item.type.defaultProps), DB.item.props) : DB.item.props,
                  VB = WB.activeDot,
                  SB = WB.hide,
                  nB = WB.activeBar,
                  fB = WB.activeShape,
                  kB = Boolean(!SB && JB && pB && (VB || nB || fB)),
                  uB = {};
                "axis" !== oB && pB && "click" === pB.props.trigger ? uB = {
                  onClick: (0, dB.i)(yB.handleItemMouseEnter, BB.props.onClick)
                } : "axis" !== oB && (uB = {
                  onMouseLeave: (0, dB.i)(yB.handleItemMouseLeave, BB.props.onMouseLeave),
                  onMouseEnter: (0, dB.i)(yB.handleItemMouseEnter, BB.props.onMouseEnter)
                });
                var mB = (0, YB.cloneElement)(BB, SG(SG({}, DB.props), uB));
                if (kB) {
                  if (!(PB >= 0)) {
                    var IB, FB = (null !== (IB = yB.getItemByXY(yB.state.activeCoordinate)) && void 0 !== IB ? IB : {
                        graphicalItem: mB
                      }).graphicalItem,
                      iB = FB.item,
                      LB = void 0 === iB ? BB : iB,
                      gB = FB.childIndex,
                      rB = SG(SG(SG({}, DB.props), uB), {}, {
                        activeIndex: gB
                      });
                    return [(0, YB.cloneElement)(LB, rB), null, null]
                  }
                  var XB, wB;
                  if (MB.dataKey && !MB.allowDuplicatedCategory) {
                    var EB = "function" === typeof MB.dataKey ? function(BB) {
                      return "function" === typeof MB.dataKey ? MB.dataKey(BB.payload) : null
                    } : "payload.".concat(MB.dataKey.toString());
                    XB = (0, KB.g)(ZB, EB, zB), wB = NB && RB && (0, KB.g)(RB, EB, zB)
                  } else XB = null === ZB || void 0 === ZB ? void 0 : ZB[PB], wB = NB && RB && RB[PB];
                  if (fB || nB) {
                    var cB = void 0 !== BB.props.activeIndex ? BB.props.activeIndex : PB;
                    return [(0, YB.cloneElement)(BB, SG(SG(SG({}, DB.props), uB), {}, {
                      activeIndex: cB
                    })), null, null]
                  }
                  if (!QB()(XB)) return [mB].concat(RG(yB.renderActivePoints({
                    item: DB,
                    activePoint: XB,
                    basePoint: wB,
                    childIndex: PB,
                    isRange: NB
                  })))
                }
                return NB ? [mB, null, null] : [mB, null]
              })), nG(yB, "renderCustomized", (function(BB, OB, GB) {
                return (0, YB.cloneElement)(BB, SG(SG({
                  key: "recharts-customized-".concat(GB)
                }, yB.props), yB.state))
              })), nG(yB, "renderMap", {
                CartesianGrid: {
                  handler: KG,
                  once: !0
                },
                ReferenceArea: {
                  handler: yB.renderReferenceElement
                },
                ReferenceLine: {
                  handler: KG
                },
                ReferenceDot: {
                  handler: yB.renderReferenceElement
                },
                XAxis: {
                  handler: KG
                },
                YAxis: {
                  handler: KG
                },
                Brush: {
                  handler: yB.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: yB.renderGraphicChild
                },
                Line: {
                  handler: yB.renderGraphicChild
                },
                Area: {
                  handler: yB.renderGraphicChild
                },
                Radar: {
                  handler: yB.renderGraphicChild
                },
                RadialBar: {
                  handler: yB.renderGraphicChild
                },
                Scatter: {
                  handler: yB.renderGraphicChild
                },
                Pie: {
                  handler: yB.renderGraphicChild
                },
                Funnel: {
                  handler: yB.renderGraphicChild
                },
                Tooltip: {
                  handler: yB.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: yB.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: yB.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: yB.renderPolarAxis
                },
                Customized: {
                  handler: yB.renderCustomized
                }
              }), yB.clipPathId = "".concat(null !== (DB = BB.id) && void 0 !== DB ? DB : (0, KB.M)("recharts"), "-clip"), yB.throttleTriggeredAfterMouseMove = qB()(yB.triggeredAfterMouseMove, null !== (oB = BB.throttleDelay) && void 0 !== oB ? oB : 1e3 / 60), yB.state = {}, yB
            }
            return function(BB, OB) {
              if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
              BB.prototype = Object.create(OB && OB.prototype, {
                constructor: {
                  value: BB,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(BB, "prototype", {
                writable: !1
              }), OB && NG(BB, OB)
            }(GB, BB), DB = GB, yB = [{
              key: "componentDidMount",
              value: function() {
                var BB, OB;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (BB = this.props.margin.left) && void 0 !== BB ? BB : 0,
                    top: null !== (OB = this.props.margin.top) && void 0 !== OB ? OB : 0
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
                  OB = BB.children,
                  GB = BB.data,
                  YB = BB.height,
                  DB = BB.layout,
                  QB = (0, UB.m)(OB, AB.e);
                if (QB) {
                  var oB = QB.props.defaultIndex;
                  if (!("number" !== typeof oB || oB < 0 || oB > this.state.tooltipTicks.length - 1)) {
                    var jB = this.state.tooltipTicks[oB] && this.state.tooltipTicks[oB].value,
                      yB = IG(this.state, GB, oB, jB),
                      JB = this.state.tooltipTicks[oB].coordinate,
                      MB = (this.state.offset.top + YB) / 2,
                      PB = "horizontal" === DB ? {
                        x: JB,
                        y: MB
                      } : {
                        y: JB,
                        x: MB
                      },
                      zB = this.state.formattedGraphicalItems.find((function(BB) {
                        return "Scatter" === BB.item.type.name
                      }));
                    zB && (PB = SG(SG({}, PB), zB.props.points[oB].tooltipPosition), yB = zB.props.points[oB].tooltipPayload);
                    var lB = {
                      activeTooltipIndex: oB,
                      isTooltipActive: !0,
                      activeLabel: jB,
                      activePayload: yB,
                      activeCoordinate: PB
                    };
                    this.setState(lB), this.renderCursor(QB), this.accessibilityManager.setIndex(oB)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(BB, OB) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== OB.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== BB.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== BB.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (GB = this.props.margin.left) && void 0 !== GB ? GB : 0,
                    top: null !== (YB = this.props.margin.top) && void 0 !== YB ? YB : 0
                  }
                }), null) : null;
                var GB, YB
              }
            }, {
              key: "componentDidUpdate",
              value: function(BB) {
                (0, UB.y)([(0, UB.m)(BB.children, AB.e)], [(0, UB.m)(this.props.children, AB.e)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var BB = (0, UB.m)(this.props.children, AB.e);
                if (BB && "boolean" === typeof BB.props.shared) {
                  var OB = BB.props.shared ? "axis" : "item";
                  return JB.indexOf(OB) >= 0 ? OB : oB
                }
                return oB
              }
            }, {
              key: "getMouseInfo",
              value: function(BB) {
                if (!this.container) return null;
                var OB = this.container,
                  GB = OB.getBoundingClientRect(),
                  YB = (0, HB.c)(GB),
                  DB = {
                    chartX: Math.round(BB.pageX - YB.left),
                    chartY: Math.round(BB.pageY - YB.top)
                  },
                  QB = GB.width / OB.offsetWidth || 1,
                  oB = this.inRange(DB.chartX, DB.chartY, QB);
                if (!oB) return null;
                var jB = this.state,
                  yB = jB.xAxisMap,
                  JB = jB.yAxisMap,
                  MB = this.getTooltipEventType(),
                  PB = FG(this.state, this.props.data, this.props.layout, oB);
                if ("axis" !== MB && yB && JB) {
                  var zB = (0, KB.j)(yB).scale,
                    lB = (0, KB.j)(JB).scale,
                    pB = zB && zB.invert ? zB.invert(DB.chartX) : null,
                    qB = lB && lB.invert ? lB.invert(DB.chartY) : null;
                  return SG(SG({}, DB), {}, {
                    xValue: pB,
                    yValue: qB
                  }, PB)
                }
                return PB ? SG(SG({}, DB), PB) : null
              }
            }, {
              key: "inRange",
              value: function(BB, OB) {
                var GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  YB = this.props.layout,
                  DB = BB / GB,
                  QB = OB / GB;
                if ("horizontal" === YB || "vertical" === YB) {
                  var oB = this.state.offset;
                  return DB >= oB.left && DB <= oB.left + oB.width && QB >= oB.top && QB <= oB.top + oB.height ? {
                    x: DB,
                    y: QB
                  } : null
                }
                var jB = this.state,
                  yB = jB.angleAxisMap,
                  JB = jB.radiusAxisMap;
                if (yB && JB) {
                  var MB = (0, KB.j)(yB);
                  return (0, uO.c)({
                    x: DB,
                    y: QB
                  }, MB)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var BB = this.props.children,
                  OB = this.getTooltipEventType(),
                  GB = (0, UB.m)(BB, AB.e),
                  YB = {};
                return GB && "axis" === OB && (YB = "click" === GB.props.trigger ? {
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
                }), SG(SG({}, (0, LO.g)(this.props, this.handleOuterEvent)), YB)
              }
            }, {
              key: "addListener",
              value: function() {
                FO.on(iO, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                FO.removeListener(iO, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(BB, OB, GB) {
                for (var YB = this.state.formattedGraphicalItems, DB = 0, QB = YB.length; DB < QB; DB++) {
                  var oB = YB[DB];
                  if (oB.item === BB || oB.props.key === BB.key || OB === (0, UB.q)(oB.item.type) && GB === oB.childIndex) return oB
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var BB = this.clipPathId,
                  OB = this.state.offset,
                  GB = OB.left,
                  DB = OB.top,
                  QB = OB.height,
                  oB = OB.width;
                return YB.createElement("defs", null, YB.createElement("clipPath", {
                  id: BB
                }, YB.createElement("rect", {
                  x: GB,
                  y: DB,
                  height: QB,
                  width: oB
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var BB = this.state.xAxisMap;
                return BB ? Object.entries(BB).reduce((function(BB, OB) {
                  var GB = PG(OB, 2),
                    YB = GB[0],
                    DB = GB[1];
                  return SG(SG({}, BB), {}, nG({}, YB, DB.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var BB = this.state.yAxisMap;
                return BB ? Object.entries(BB).reduce((function(BB, OB) {
                  var GB = PG(OB, 2),
                    YB = GB[0],
                    DB = GB[1];
                  return SG(SG({}, BB), {}, nG({}, YB, DB.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(BB) {
                var OB;
                return null === (OB = this.state.xAxisMap) || void 0 === OB || null === (OB = OB[BB]) || void 0 === OB ? void 0 : OB.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(BB) {
                var OB;
                return null === (OB = this.state.yAxisMap) || void 0 === OB || null === (OB = OB[BB]) || void 0 === OB ? void 0 : OB.scale
              }
            }, {
              key: "getItemByXY",
              value: function(BB) {
                var OB = this.state,
                  GB = OB.formattedGraphicalItems,
                  YB = OB.activeItem;
                if (GB && GB.length)
                  for (var DB = 0, QB = GB.length; DB < QB; DB++) {
                    var oB = GB[DB],
                      jB = oB.props,
                      yB = oB.item,
                      JB = void 0 !== yB.type.defaultProps ? SG(SG({}, yB.type.defaultProps), yB.props) : yB.props,
                      MB = (0, UB.q)(yB.type);
                    if ("Bar" === MB) {
                      var PB = (jB.data || []).find((function(OB) {
                        return (0, nB.e)(BB, OB)
                      }));
                      if (PB) return {
                        graphicalItem: oB,
                        payload: PB
                      }
                    } else if ("RadialBar" === MB) {
                      var zB = (jB.data || []).find((function(OB) {
                        return (0, uO.c)(BB, OB)
                      }));
                      if (zB) return {
                        graphicalItem: oB,
                        payload: zB
                      }
                    } else if ((0, cO.i)(oB, YB) || (0, cO.j)(oB, YB) || (0, cO.m)(oB, YB)) {
                      var lB = (0, cO.e)({
                          graphicalItem: oB,
                          activeTooltipItem: YB,
                          itemData: JB.data
                        }),
                        pB = void 0 === JB.activeIndex ? lB : JB.activeIndex;
                      return {
                        graphicalItem: SG(SG({}, oB), {}, {
                          childIndex: pB
                        }),
                        payload: (0, cO.m)(oB, YB) ? JB.data[lB] : oB.props.data[lB]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var BB = this;
                if (!(0, UB.F)(this)) return null;
                var OB, GB, DB = this.props,
                  QB = DB.children,
                  oB = DB.className,
                  jB = DB.width,
                  yB = DB.height,
                  JB = DB.style,
                  MB = DB.compact,
                  PB = DB.title,
                  zB = DB.desc,
                  lB = zG(DB, yG),
                  pB = (0, UB.e)(lB, !1);
                if (MB) return YB.createElement(oG.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, YB.createElement(RB.b, MG({}, pB, {
                  width: jB,
                  height: yB,
                  title: PB,
                  desc: zB
                }), this.renderClipPath(), (0, UB.E)(QB, this.renderMap)));
                this.props.accessibilityLayer && (pB.tabIndex = null !== (OB = this.props.tabIndex) && void 0 !== OB ? OB : 0, pB.role = null !== (GB = this.props.role) && void 0 !== GB ? GB : "application", pB.onKeyDown = function(OB) {
                  BB.accessibilityManager.keyboardEvent(OB)
                }, pB.onFocus = function() {
                  BB.accessibilityManager.focus()
                });
                var qB = this.parseEventsOfWrapper();
                return YB.createElement(oG.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, YB.createElement("div", MG({
                  className: (0, ZB.c)("recharts-wrapper", oB),
                  style: SG({
                    position: "relative",
                    cursor: "default",
                    width: jB,
                    height: yB
                  }, JB)
                }, qB, {
                  ref: function(OB) {
                    BB.container = OB
                  }
                }), YB.createElement(RB.b, MG({}, pB, {
                  width: jB,
                  height: yB,
                  title: PB,
                  desc: zB,
                  style: kG
                }), this.renderClipPath(), (0, UB.E)(QB, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], yB && lG(DB.prototype, yB), MB && lG(DB, MB), Object.defineProperty(DB, "prototype", {
              writable: !1
            }), DB;
            var DB, yB, MB
          }(YB.Component);
        nG(mB, "displayName", OB), nG(mB, "defaultProps", SG({
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
        }, fB)), nG(mB, "getDerivedStateFromProps", (function(BB, OB) {
          var GB = BB.dataKey,
            YB = BB.data,
            DB = BB.children,
            oB = BB.width,
            jB = BB.height,
            yB = BB.layout,
            JB = BB.stackOffset,
            MB = BB.margin,
            PB = OB.dataStartIndex,
            zB = OB.dataEndIndex;
          if (void 0 === OB.updateId) {
            var lB = gG(BB);
            return SG(SG(SG({}, lB), {}, {
              updateId: 0
            }, uB(SG(SG({
              props: BB
            }, lB), {}, {
              updateId: 0
            }), OB)), {}, {
              prevDataKey: GB,
              prevData: YB,
              prevWidth: oB,
              prevHeight: jB,
              prevLayout: yB,
              prevStackOffset: JB,
              prevMargin: MB,
              prevChildren: DB
            })
          }
          if (GB !== OB.prevDataKey || YB !== OB.prevData || oB !== OB.prevWidth || jB !== OB.prevHeight || yB !== OB.prevLayout || JB !== OB.prevStackOffset || !(0, mO.d)(MB, OB.prevMargin)) {
            var pB = gG(BB),
              qB = {
                chartX: OB.chartX,
                chartY: OB.chartY,
                isTooltipActive: OB.isTooltipActive
              },
              ZB = SG(SG({}, FG(OB, YB, yB)), {}, {
                updateId: OB.updateId + 1
              }),
              NB = SG(SG(SG({}, pB), qB), ZB);
            return SG(SG(SG({}, NB), uB(SG({
              props: BB
            }, NB), OB)), {}, {
              prevDataKey: GB,
              prevData: YB,
              prevWidth: oB,
              prevHeight: jB,
              prevLayout: yB,
              prevStackOffset: JB,
              prevMargin: MB,
              prevChildren: DB
            })
          }
          if (!(0, UB.y)(DB, OB.prevChildren)) {
            var RB, WB, AB, VB, SB = (0, UB.m)(DB, CB),
              nB = SB && null !== (RB = null === (WB = SB.props) || void 0 === WB ? void 0 : WB.startIndex) && void 0 !== RB ? RB : PB,
              fB = SB && null !== (AB = null === (VB = SB.props) || void 0 === VB ? void 0 : VB.endIndex) && void 0 !== AB ? AB : zB,
              kB = nB !== PB || fB !== zB,
              dB = !QB()(YB) && !kB ? OB.updateId : OB.updateId + 1;
            return SG(SG({
              updateId: dB
            }, uB(SG(SG({
              props: BB
            }, OB), {}, {
              updateId: dB,
              dataStartIndex: nB,
              dataEndIndex: fB
            }), OB)), {}, {
              prevChildren: DB,
              dataStartIndex: nB,
              dataEndIndex: fB
            })
          }
          return null
        })), nG(mB, "renderActiveDot", (function(BB, OB, GB) {
          var DB;
          return DB = (0, YB.isValidElement)(BB) ? (0, YB.cloneElement)(BB, OB) : jB()(BB) ? BB(OB) : YB.createElement(SB.b, OB), YB.createElement(WB.b, {
            className: "recharts-active-dot",
            key: GB
          }, DB)
        }));
        var IB = (0, YB.forwardRef)((function(BB, OB) {
          return YB.createElement(mB, MG({}, BB, {
            ref: OB
          }))
        }));
        return IB.displayName = mB.displayName, IB
      }
  },
  6771: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    var YB = function(BB) {
      return null
    };
    YB.displayName = "Cell"
  },
  6715: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => uB
    });
    var YB = GB(56),
      DB = GB(5930),
      QB = GB.n(DB),
      oB = GB(5782),
      jB = GB.n(oB),
      yB = GB(5597),
      JB = GB.n(yB),
      MB = GB(5587),
      PB = GB(6639),
      zB = GB(5938),
      lB = GB(5671),
      pB = GB(6724);

    function qB(BB) {
      return qB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, qB(BB)
    }
    var ZB = ["offset"];

    function NB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return RB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return RB(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return RB(BB, OB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function RB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function WB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function AB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function VB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? AB(Object(GB), !0).forEach((function(OB) {
          SB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : AB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function SB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != qB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != qB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == qB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function nB() {
      return nB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, nB.apply(this, arguments)
    }
    var UB = function(BB) {
        var OB = BB.value,
          GB = BB.formatter,
          YB = QB()(BB.children) ? OB : BB.children;
        return jB()(GB) ? GB(YB) : YB
      },
      fB = function(BB, OB, GB) {
        var DB, oB, jB = BB.position,
          yB = BB.viewBox,
          JB = BB.offset,
          PB = BB.className,
          zB = yB,
          qB = zB.cx,
          ZB = zB.cy,
          NB = zB.innerRadius,
          RB = zB.outerRadius,
          WB = zB.startAngle,
          AB = zB.endAngle,
          VB = zB.clockWise,
          SB = (NB + RB) / 2,
          UB = function(BB, OB) {
            return (0, lB.J)(OB - BB) * Math.min(Math.abs(OB - BB), 360)
          }(WB, AB),
          fB = UB >= 0 ? 1 : -1;
        "insideStart" === jB ? (DB = WB + fB * JB, oB = VB) : "insideEnd" === jB ? (DB = AB - fB * JB, oB = !VB) : "end" === jB && (DB = AB + fB * JB, oB = VB), oB = UB <= 0 ? oB : !oB;
        var kB = (0, pB.e)(qB, ZB, SB, DB),
          dB = (0, pB.e)(qB, ZB, SB, DB + 359 * (oB ? 1 : -1)),
          KB = "M".concat(kB.x, ",").concat(kB.y, "\n    A").concat(SB, ",").concat(SB, ",0,1,").concat(oB ? 0 : 1, ",\n    ").concat(dB.x, ",").concat(dB.y),
          uB = QB()(BB.id) ? (0, lB.M)("recharts-radial-line-") : BB.id;
        return YB.createElement("text", nB({}, GB, {
          dominantBaseline: "central",
          className: (0, MB.c)("recharts-radial-bar-label", PB)
        }), YB.createElement("defs", null, YB.createElement("path", {
          id: uB,
          d: KB
        })), YB.createElement("textPath", {
          xlinkHref: "#".concat(uB)
        }, OB))
      },
      kB = function(BB) {
        var OB = BB.viewBox,
          GB = BB.offset,
          YB = BB.position,
          DB = OB,
          QB = DB.cx,
          oB = DB.cy,
          jB = DB.innerRadius,
          yB = DB.outerRadius,
          JB = (DB.startAngle + DB.endAngle) / 2;
        if ("outside" === YB) {
          var MB = (0, pB.e)(QB, oB, yB + GB, JB),
            PB = MB.x;
          return {
            x: PB,
            y: MB.y,
            textAnchor: PB >= QB ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === YB) return {
          x: QB,
          y: oB,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === YB) return {
          x: QB,
          y: oB,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === YB) return {
          x: QB,
          y: oB,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var zB = (jB + yB) / 2,
          lB = (0, pB.e)(QB, oB, zB, JB);
        return {
          x: lB.x,
          y: lB.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      dB = function(BB) {
        var OB = BB.viewBox,
          GB = BB.parentViewBox,
          YB = BB.offset,
          DB = BB.position,
          QB = OB,
          oB = QB.x,
          jB = QB.y,
          yB = QB.width,
          MB = QB.height,
          PB = MB >= 0 ? 1 : -1,
          zB = PB * YB,
          pB = PB > 0 ? "end" : "start",
          qB = PB > 0 ? "start" : "end",
          ZB = yB >= 0 ? 1 : -1,
          NB = ZB * YB,
          RB = ZB > 0 ? "end" : "start",
          WB = ZB > 0 ? "start" : "end";
        if ("top" === DB) return VB(VB({}, {
          x: oB + yB / 2,
          y: jB - PB * YB,
          textAnchor: "middle",
          verticalAnchor: pB
        }), GB ? {
          height: Math.max(jB - GB.y, 0),
          width: yB
        } : {});
        if ("bottom" === DB) return VB(VB({}, {
          x: oB + yB / 2,
          y: jB + MB + zB,
          textAnchor: "middle",
          verticalAnchor: qB
        }), GB ? {
          height: Math.max(GB.y + GB.height - (jB + MB), 0),
          width: yB
        } : {});
        if ("left" === DB) {
          var AB = {
            x: oB - NB,
            y: jB + MB / 2,
            textAnchor: RB,
            verticalAnchor: "middle"
          };
          return VB(VB({}, AB), GB ? {
            width: Math.max(AB.x - GB.x, 0),
            height: MB
          } : {})
        }
        if ("right" === DB) {
          var SB = {
            x: oB + yB + NB,
            y: jB + MB / 2,
            textAnchor: WB,
            verticalAnchor: "middle"
          };
          return VB(VB({}, SB), GB ? {
            width: Math.max(GB.x + GB.width - SB.x, 0),
            height: MB
          } : {})
        }
        var nB = GB ? {
          width: yB,
          height: MB
        } : {};
        return "insideLeft" === DB ? VB({
          x: oB + NB,
          y: jB + MB / 2,
          textAnchor: WB,
          verticalAnchor: "middle"
        }, nB) : "insideRight" === DB ? VB({
          x: oB + yB - NB,
          y: jB + MB / 2,
          textAnchor: RB,
          verticalAnchor: "middle"
        }, nB) : "insideTop" === DB ? VB({
          x: oB + yB / 2,
          y: jB + zB,
          textAnchor: "middle",
          verticalAnchor: qB
        }, nB) : "insideBottom" === DB ? VB({
          x: oB + yB / 2,
          y: jB + MB - zB,
          textAnchor: "middle",
          verticalAnchor: pB
        }, nB) : "insideTopLeft" === DB ? VB({
          x: oB + NB,
          y: jB + zB,
          textAnchor: WB,
          verticalAnchor: qB
        }, nB) : "insideTopRight" === DB ? VB({
          x: oB + yB - NB,
          y: jB + zB,
          textAnchor: RB,
          verticalAnchor: qB
        }, nB) : "insideBottomLeft" === DB ? VB({
          x: oB + NB,
          y: jB + MB - zB,
          textAnchor: WB,
          verticalAnchor: pB
        }, nB) : "insideBottomRight" === DB ? VB({
          x: oB + yB - NB,
          y: jB + MB - zB,
          textAnchor: RB,
          verticalAnchor: pB
        }, nB) : JB()(DB) && ((0, lB.C)(DB.x) || (0, lB.G)(DB.x)) && ((0, lB.C)(DB.y) || (0, lB.G)(DB.y)) ? VB({
          x: oB + (0, lB.p)(DB.x, yB),
          y: jB + (0, lB.p)(DB.y, MB),
          textAnchor: "end",
          verticalAnchor: "end"
        }, nB) : VB({
          x: oB + yB / 2,
          y: jB + MB / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, nB)
      },
      KB = function(BB) {
        return "cx" in BB && (0, lB.C)(BB.cx)
      };

    function uB(BB) {
      var OB, GB = BB.offset,
        DB = VB({
          offset: void 0 === GB ? 5 : GB
        }, WB(BB, ZB)),
        oB = DB.viewBox,
        yB = DB.position,
        JB = DB.value,
        lB = DB.children,
        pB = DB.content,
        qB = DB.className,
        NB = void 0 === qB ? "" : qB,
        RB = DB.textBreakAll;
      if (!oB || QB()(JB) && QB()(lB) && !(0, YB.isValidElement)(pB) && !jB()(pB)) return null;
      if ((0, YB.isValidElement)(pB)) return (0, YB.cloneElement)(pB, DB);
      if (jB()(pB)) {
        if (OB = (0, YB.createElement)(pB, DB), (0, YB.isValidElement)(OB)) return OB
      } else OB = UB(DB);
      var AB = KB(oB),
        SB = (0, zB.e)(DB, !0);
      if (AB && ("insideStart" === yB || "insideEnd" === yB || "end" === yB)) return fB(DB, OB, SB);
      var uB = AB ? kB(DB) : dB(DB);
      return YB.createElement(PB.d, nB({
        className: (0, MB.c)("recharts-label", NB)
      }, SB, uB, {
        breakAll: RB
      }), OB)
    }
    uB.displayName = "Label";
    var mB = function(BB) {
      var OB = BB.cx,
        GB = BB.cy,
        YB = BB.angle,
        DB = BB.startAngle,
        QB = BB.endAngle,
        oB = BB.r,
        jB = BB.radius,
        yB = BB.innerRadius,
        JB = BB.outerRadius,
        MB = BB.x,
        PB = BB.y,
        zB = BB.top,
        pB = BB.left,
        qB = BB.width,
        ZB = BB.height,
        NB = BB.clockWise,
        RB = BB.labelViewBox;
      if (RB) return RB;
      if ((0, lB.C)(qB) && (0, lB.C)(ZB)) {
        if ((0, lB.C)(MB) && (0, lB.C)(PB)) return {
          x: MB,
          y: PB,
          width: qB,
          height: ZB
        };
        if ((0, lB.C)(zB) && (0, lB.C)(pB)) return {
          x: zB,
          y: pB,
          width: qB,
          height: ZB
        }
      }
      return (0, lB.C)(MB) && (0, lB.C)(PB) ? {
        x: MB,
        y: PB,
        width: 0,
        height: 0
      } : (0, lB.C)(OB) && (0, lB.C)(GB) ? {
        cx: OB,
        cy: GB,
        startAngle: DB || YB || 0,
        endAngle: QB || YB || 0,
        innerRadius: yB || 0,
        outerRadius: JB || jB || oB || 0,
        clockWise: NB
      } : BB.viewBox ? BB.viewBox : {}
    };
    uB.parseViewBox = mB, uB.renderCallByParent = function(BB, OB) {
      var GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!BB || !BB.children && GB && !BB.label) return null;
      var DB = BB.children,
        QB = mB(BB),
        oB = (0, zB.i)(DB, uB).map((function(BB, GB) {
          return (0, YB.cloneElement)(BB, {
            viewBox: OB || QB,
            key: "label-".concat(GB)
          })
        }));
      if (!GB) return oB;
      var yB = function(BB, OB) {
        return BB ? !0 === BB ? YB.createElement(uB, {
          key: "label-implicit",
          viewBox: OB
        }) : (0, lB.z)(BB) ? YB.createElement(uB, {
          key: "label-implicit",
          viewBox: OB,
          value: BB
        }) : (0, YB.isValidElement)(BB) ? BB.type === uB ? (0, YB.cloneElement)(BB, {
          key: "label-implicit",
          viewBox: OB
        }) : YB.createElement(uB, {
          key: "label-implicit",
          content: BB,
          viewBox: OB
        }) : jB()(BB) ? YB.createElement(uB, {
          key: "label-implicit",
          content: BB,
          viewBox: OB
        }) : JB()(BB) ? YB.createElement(uB, nB({
          viewBox: OB
        }, BB, {
          key: "label-implicit"
        })) : null : null
      }(BB.label, OB || QB);
      return [yB].concat(NB(oB))
    }
  },
  6776: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => dB
    });
    var YB = GB(56),
      DB = GB(5930),
      QB = GB.n(DB),
      oB = GB(5597),
      jB = GB.n(oB),
      yB = GB(5782),
      JB = GB.n(yB),
      MB = GB(6781),
      PB = GB.n(MB),
      zB = GB(6715),
      lB = GB(6468),
      pB = GB(5938),
      qB = GB(6648);

    function ZB(BB) {
      return ZB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, ZB(BB)
    }
    var NB = ["valueAccessor"],
      RB = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function WB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return AB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return AB(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return AB(BB, OB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function VB() {
      return VB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, VB.apply(this, arguments)
    }

    function SB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function nB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? SB(Object(GB), !0).forEach((function(OB) {
          UB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : SB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function UB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != ZB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != ZB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == ZB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function fB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }
    var kB = function(BB) {
      return Array.isArray(BB.value) ? PB()(BB.value) : BB.value
    };

    function dB(BB) {
      var OB = BB.valueAccessor,
        GB = void 0 === OB ? kB : OB,
        DB = fB(BB, NB),
        oB = DB.data,
        jB = DB.dataKey,
        yB = DB.clockWise,
        JB = DB.id,
        MB = DB.textBreakAll,
        PB = fB(DB, RB);
      return oB && oB.length ? YB.createElement(lB.b, {
        className: "recharts-label-list"
      }, oB.map((function(BB, OB) {
        var DB = QB()(jB) ? GB(BB, OB) : (0, qB.eb)(BB && BB.payload, jB),
          oB = QB()(JB) ? {} : {
            id: "".concat(JB, "-").concat(OB)
          };
        return YB.createElement(zB.b, VB({}, (0, pB.e)(BB, !0), PB, oB, {
          parentViewBox: BB.parentViewBox,
          value: DB,
          textBreakAll: MB,
          viewBox: zB.b.parseViewBox(QB()(yB) ? BB : nB(nB({}, BB), {}, {
            clockWise: yB
          })),
          key: "label-".concat(OB),
          index: OB
        }))
      }))) : null
    }
    dB.displayName = "LabelList", dB.renderCallByParent = function(BB, OB) {
      var GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!BB || !BB.children && GB && !BB.label) return null;
      var DB = BB.children,
        QB = (0, pB.i)(DB, dB).map((function(BB, GB) {
          return (0, YB.cloneElement)(BB, {
            data: OB,
            key: "labelList-".concat(GB)
          })
        }));
      return GB ? [function(BB, OB) {
        return BB ? !0 === BB ? YB.createElement(dB, {
          key: "labelList-implicit",
          data: OB
        }) : YB.isValidElement(BB) || JB()(BB) ? YB.createElement(dB, {
          key: "labelList-implicit",
          data: OB,
          content: BB
        }) : jB()(BB) ? YB.createElement(dB, VB({
          data: OB
        }, BB, {
          key: "labelList-implicit"
        })) : null : null
      }(BB.label, OB)].concat(WB(QB)) : QB
    }
  },
  6554: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => wB
    });
    var YB = GB(56),
      DB = GB(5782),
      QB = GB.n(DB),
      oB = GB(5587),
      jB = GB(5935),
      yB = GB(6465),
      JB = GB(6561),
      MB = GB(5951);

    function PB(BB) {
      return PB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, PB(BB)
    }

    function zB() {
      return zB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, zB.apply(this, arguments)
    }

    function lB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function pB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, AB(YB.key), YB)
      }
    }

    function qB(BB, OB, GB) {
      return OB = NB(OB),
        function(BB, OB) {
          if (OB && ("object" === PB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, ZB() ? Reflect.construct(OB, GB || [], NB(BB).constructor) : OB.apply(BB, GB))
    }

    function ZB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (ZB = function() {
        return !!BB
      })()
    }

    function NB(BB) {
      return NB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, NB(BB)
    }

    function RB(BB, OB) {
      return RB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, RB(BB, OB)
    }

    function WB(BB, OB, GB) {
      return (OB = AB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function AB(BB) {
      var OB = function(BB, OB) {
        if ("object" != PB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != PB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == PB(OB) ? OB : OB + ""
    }
    var VB = 32,
      SB = function(BB) {
        function OB() {
          return function(BB, OB) {
            if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
          }(this, OB), qB(this, OB, arguments)
        }
        return function(BB, OB) {
          if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(OB && OB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), OB && RB(BB, OB)
        }(OB, BB), GB = OB, DB = [{
          key: "renderIcon",
          value: function(BB) {
            var OB = this.props.inactiveColor,
              GB = 16,
              DB = VB / 6,
              QB = VB / 3,
              oB = BB.inactive ? OB : BB.color;
            if ("plainline" === BB.type) return YB.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: oB,
              strokeDasharray: BB.payload.strokeDasharray,
              x1: 0,
              y1: GB,
              x2: VB,
              y2: GB,
              className: "recharts-legend-icon"
            });
            if ("line" === BB.type) return YB.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: oB,
              d: "M0,".concat(GB, "h").concat(QB, "\n            A").concat(DB, ",").concat(DB, ",0,1,1,").concat(2 * QB, ",").concat(GB, "\n            H").concat(VB, "M").concat(2 * QB, ",").concat(GB, "\n            A").concat(DB, ",").concat(DB, ",0,1,1,").concat(QB, ",").concat(GB),
              className: "recharts-legend-icon"
            });
            if ("rect" === BB.type) return YB.createElement("path", {
              stroke: "none",
              fill: oB,
              d: "M0,".concat(4, "h").concat(VB, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (YB.isValidElement(BB.legendIcon)) {
              var jB = function(BB) {
                for (var OB = 1; OB < arguments.length; OB++) {
                  var GB = null != arguments[OB] ? arguments[OB] : {};
                  OB % 2 ? lB(Object(GB), !0).forEach((function(OB) {
                    WB(BB, OB, GB[OB])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : lB(Object(GB)).forEach((function(OB) {
                    Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
                  }))
                }
                return BB
              }({}, BB);
              return delete jB.legendIcon, YB.cloneElement(BB.legendIcon, jB)
            }
            return YB.createElement(JB.e, {
              fill: oB,
              cx: GB,
              cy: GB,
              size: VB,
              sizeType: "diameter",
              type: BB.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var BB = this,
              OB = this.props,
              GB = OB.payload,
              DB = OB.iconSize,
              JB = OB.layout,
              PB = OB.formatter,
              lB = OB.inactiveColor,
              pB = {
                x: 0,
                y: 0,
                width: VB,
                height: VB
              },
              qB = {
                display: "horizontal" === JB ? "inline-block" : "block",
                marginRight: 10
              },
              ZB = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return GB.map((function(OB, GB) {
              var JB = OB.formatter || PB,
                NB = (0, oB.c)(WB(WB({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(GB), !0), "inactive", OB.inactive));
              if ("none" === OB.type) return null;
              var RB = QB()(OB.value) ? null : OB.value;
              (0, jB.b)(!QB()(OB.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var AB = OB.inactive ? lB : OB.color;
              return YB.createElement("li", zB({
                className: NB,
                style: qB,
                key: "legend-item-".concat(GB)
              }, (0, MB.j)(BB.props, OB, GB)), YB.createElement(yB.b, {
                width: DB,
                height: DB,
                viewBox: pB,
                style: ZB
              }, BB.renderIcon(OB)), YB.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: AB
                }
              }, JB ? JB(RB, OB, GB) : RB))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var BB = this.props,
              OB = BB.payload,
              GB = BB.layout,
              DB = BB.align;
            if (!OB || !OB.length) return null;
            var QB = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === GB ? DB : "left"
            };
            return YB.createElement("ul", {
              className: "recharts-default-legend",
              style: QB
            }, this.renderItems())
          }
        }], DB && pB(GB.prototype, DB), PB && pB(GB, PB), Object.defineProperty(GB, "prototype", {
          writable: !1
        }), GB;
        var GB, DB, PB
      }(YB.PureComponent);
    WB(SB, "displayName", "Legend"), WB(SB, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var nB = GB(5671),
      UB = GB(6488);

    function fB(BB) {
      return fB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, fB(BB)
    }
    var kB = ["ref"];

    function dB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function KB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? dB(Object(GB), !0).forEach((function(OB) {
          LB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : dB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function uB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, gB(YB.key), YB)
      }
    }

    function mB(BB, OB, GB) {
      return OB = FB(OB),
        function(BB, OB) {
          if (OB && ("object" === fB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, IB() ? Reflect.construct(OB, GB || [], FB(BB).constructor) : OB.apply(BB, GB))
    }

    function IB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (IB = function() {
        return !!BB
      })()
    }

    function FB(BB) {
      return FB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, FB(BB)
    }

    function iB(BB, OB) {
      return iB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, iB(BB, OB)
    }

    function LB(BB, OB, GB) {
      return (OB = gB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function gB(BB) {
      var OB = function(BB, OB) {
        if ("object" != fB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != fB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == fB(OB) ? OB : OB + ""
    }

    function rB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function XB(BB) {
      return BB.value
    }
    var wB = function(BB) {
      function OB() {
        var BB;
        ! function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, OB);
        for (var GB = arguments.length, YB = new Array(GB), DB = 0; DB < GB; DB++) YB[DB] = arguments[DB];
        return LB(BB = mB(this, OB, [].concat(YB)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), BB
      }
      return function(BB, OB) {
        if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(OB && OB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), OB && iB(BB, OB)
      }(OB, BB), GB = OB, QB = [{
        key: "getWithHeight",
        value: function(BB, OB) {
          var GB = KB(KB({}, this.defaultProps), BB.props).layout;
          return "vertical" === GB && (0, nB.C)(BB.props.height) ? {
            height: BB.props.height
          } : "horizontal" === GB ? {
            width: BB.props.width || OB
          } : null
        }
      }], (DB = [{
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
            OB = this.getBBox();
          OB ? (Math.abs(OB.width - this.lastBoundingBox.width) > 1 || Math.abs(OB.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = OB.width, this.lastBoundingBox.height = OB.height, BB && BB(OB)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, BB && BB(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? KB({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(BB) {
          var OB, GB, YB = this.props,
            DB = YB.layout,
            QB = YB.align,
            oB = YB.verticalAlign,
            jB = YB.margin,
            yB = YB.chartWidth,
            JB = YB.chartHeight;
          return BB && (void 0 !== BB.left && null !== BB.left || void 0 !== BB.right && null !== BB.right) || (OB = "center" === QB && "vertical" === DB ? {
            left: ((yB || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === QB ? {
            right: jB && jB.right || 0
          } : {
            left: jB && jB.left || 0
          }), BB && (void 0 !== BB.top && null !== BB.top || void 0 !== BB.bottom && null !== BB.bottom) || (GB = "middle" === oB ? {
            top: ((JB || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === oB ? {
            bottom: jB && jB.bottom || 0
          } : {
            top: jB && jB.top || 0
          }), KB(KB({}, OB), GB)
        }
      }, {
        key: "render",
        value: function() {
          var BB = this,
            OB = this.props,
            GB = OB.content,
            DB = OB.width,
            QB = OB.height,
            oB = OB.wrapperStyle,
            jB = OB.payloadUniqBy,
            yB = OB.payload,
            JB = KB(KB({
              position: "absolute",
              width: DB || "auto",
              height: QB || "auto"
            }, this.getDefaultPosition(oB)), oB);
          return YB.createElement("div", {
            className: "recharts-legend-wrapper",
            style: JB,
            ref: function(OB) {
              BB.wrapperNode = OB
            }
          }, function(BB, OB) {
            if (YB.isValidElement(BB)) return YB.cloneElement(BB, OB);
            if ("function" === typeof BB) return YB.createElement(BB, OB);
            OB.ref;
            var GB = rB(OB, kB);
            return YB.createElement(SB, GB)
          }(GB, KB(KB({}, this.props), {}, {
            payload: (0, UB.c)(yB, jB, XB)
          })))
        }
      }]) && uB(GB.prototype, DB), QB && uB(GB, QB), Object.defineProperty(GB, "prototype", {
        writable: !1
      }), GB;
      var GB, DB, QB
    }(YB.PureComponent);
    LB(wB, "displayName", "Legend"), LB(wB, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  5583: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => ZB
    });
    var YB = GB(5587),
      DB = GB(56),
      QB = GB(5589),
      oB = GB.n(QB),
      jB = GB(5671),
      yB = GB(5935),
      JB = GB(5938);

    function MB(BB) {
      return MB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, MB(BB)
    }

    function PB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function zB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? PB(Object(GB), !0).forEach((function(OB) {
          lB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : PB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function lB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != MB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != MB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == MB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function pB(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        var GB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != GB) {
          var YB, DB, QB, oB, jB = [],
            yB = !0,
            JB = !1;
          try {
            if (QB = (GB = GB.call(BB)).next, 0 === OB) {
              if (Object(GB) !== GB) return;
              yB = !1
            } else
              for (; !(yB = (YB = QB.call(GB)).done) && (jB.push(YB.value), jB.length !== OB); yB = !0);
          } catch (BB) {
            JB = !0, DB = BB
          } finally {
            try {
              if (!yB && null != GB.return && (oB = GB.return(), Object(oB) !== oB)) return
            } finally {
              if (JB) throw DB
            }
          }
          return jB
        }
      }(BB, OB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return qB(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return qB(BB, OB)
      }(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }
    var ZB = (0, DB.forwardRef)((function(BB, OB) {
      var GB = BB.aspect,
        QB = BB.initialDimension,
        MB = void 0 === QB ? {
          width: -1,
          height: -1
        } : QB,
        PB = BB.width,
        lB = void 0 === PB ? "100%" : PB,
        qB = BB.height,
        ZB = void 0 === qB ? "100%" : qB,
        NB = BB.minWidth,
        RB = void 0 === NB ? 0 : NB,
        WB = BB.minHeight,
        AB = BB.maxHeight,
        VB = BB.children,
        SB = BB.debounce,
        nB = void 0 === SB ? 0 : SB,
        UB = BB.id,
        fB = BB.className,
        kB = BB.vN,
        dB = BB.style,
        KB = void 0 === dB ? {} : dB,
        uB = (0, DB.useRef)(null),
        mB = (0, DB.useRef)();
      mB.current = kB, (0, DB.useImperativeHandle)(OB, (function() {
        return Object.defineProperty(uB.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), uB.current
          },
          configurable: !0
        })
      }));
      var IB = pB((0, DB.useState)({
          containerWidth: MB.width,
          containerHeight: MB.height
        }), 2),
        FB = IB[0],
        iB = IB[1],
        LB = (0, DB.useCallback)((function(BB, OB) {
          iB((function(GB) {
            var YB = Math.round(BB),
              DB = Math.round(OB);
            return GB.containerWidth === YB && GB.containerHeight === DB ? GB : {
              containerWidth: YB,
              containerHeight: DB
            }
          }))
        }), []);
      (0, DB.useEffect)((function() {
        var BB = function(BB) {
          var OB, GB = BB[0].contentRect,
            YB = GB.width,
            DB = GB.height;
          LB(YB, DB), null === (OB = mB.current) || void 0 === OB || OB.call(mB, YB, DB)
        };
        nB > 0 && (BB = oB()(BB, nB, {
          trailing: !0,
          leading: !1
        }));
        var OB = new ResizeObserver(BB),
          GB = uB.current.getBoundingClientRect(),
          YB = GB.width,
          DB = GB.height;
        return LB(YB, DB), OB.observe(uB.current),
          function() {
            OB.disconnect()
          }
      }), [LB, nB]);
      var gB = (0, DB.useMemo)((function() {
        var BB = FB.containerWidth,
          OB = FB.containerHeight;
        if (BB < 0 || OB < 0) return null;
        (0, yB.b)((0, jB.G)(lB) || (0, jB.G)(ZB), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", lB, ZB), (0, yB.b)(!GB || GB > 0, "The aspect(%s) must be greater than zero.", GB);
        var YB = (0, jB.G)(lB) ? BB : lB,
          QB = (0, jB.G)(ZB) ? OB : ZB;
        GB && GB > 0 && (YB ? QB = YB / GB : QB && (YB = QB * GB), AB && QB > AB && (QB = AB)), (0, yB.b)(YB > 0 || QB > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", YB, QB, lB, ZB, RB, WB, GB);
        var oB = !Array.isArray(VB) && (0, JB.q)(VB.type).endsWith("Chart");
        return DB.Children.map(VB, (function(BB) {
          return DB.isValidElement(BB) ? (0, DB.cloneElement)(BB, zB({
            width: YB,
            height: QB
          }, oB ? {
            style: zB({
              height: "100%",
              width: "100%",
              maxHeight: QB,
              maxWidth: YB
            }, BB.props.style)
          } : {})) : BB
        }))
      }), [GB, VB, ZB, AB, WB, RB, FB, lB]);
      return DB.createElement("div", {
        id: UB ? "".concat(UB) : void 0,
        className: (0, YB.c)("recharts-responsive-container", fB),
        style: zB(zB({}, KB), {}, {
          width: lB,
          height: ZB,
          minWidth: RB,
          minHeight: WB,
          maxHeight: AB
        }),
        ref: uB
      }, gB)
    }))
  },
  6639: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => EB
    });
    var YB = GB(56),
      DB = GB(5930),
      QB = GB.n(DB),
      oB = GB(5587),
      jB = GB(5671),
      yB = GB(6485),
      JB = GB(5938),
      MB = GB(6645);

    function PB(BB) {
      return PB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, PB(BB)
    }

    function zB(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        var GB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != GB) {
          var YB, DB, QB, oB, jB = [],
            yB = !0,
            JB = !1;
          try {
            if (QB = (GB = GB.call(BB)).next, 0 === OB) {
              if (Object(GB) !== GB) return;
              yB = !1
            } else
              for (; !(yB = (YB = QB.call(GB)).done) && (jB.push(YB.value), jB.length !== OB); yB = !0);
          } catch (BB) {
            JB = !0, DB = BB
          } finally {
            try {
              if (!yB && null != GB.return && (oB = GB.return(), Object(oB) !== oB)) return
            } finally {
              if (JB) throw DB
            }
          }
          return jB
        }
      }(BB, OB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return lB(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return lB(BB, OB)
      }(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function pB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, qB(YB.key), YB)
      }
    }

    function qB(BB) {
      var OB = function(BB, OB) {
        if ("object" != PB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != PB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == PB(OB) ? OB : OB + ""
    }
    var ZB = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      NB = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      RB = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      WB = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      AB = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      VB = Object.keys(AB),
      SB = "NaN";
    var nB = function() {
      function BB(OB, GB) {
        ! function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, BB), this.num = OB, this.unit = GB, this.num = OB, this.unit = GB, Number.isNaN(OB) && (this.unit = ""), "" === GB || RB.test(GB) || (this.num = NaN, this.unit = ""), VB.includes(GB) && (this.num = function(BB, OB) {
          return BB * AB[OB]
        }(OB, GB), this.unit = "px")
      }
      return OB = BB, YB = [{
        key: "parse",
        value: function(OB) {
          var GB, YB = zB(null !== (GB = WB.exec(OB)) && void 0 !== GB ? GB : [], 3),
            DB = YB[1],
            QB = YB[2];
          return new BB(parseFloat(DB), null !== QB && void 0 !== QB ? QB : "")
        }
      }], (GB = [{
        key: "add",
        value: function(OB) {
          return this.unit !== OB.unit ? new BB(NaN, "") : new BB(this.num + OB.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(OB) {
          return this.unit !== OB.unit ? new BB(NaN, "") : new BB(this.num - OB.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(OB) {
          return "" !== this.unit && "" !== OB.unit && this.unit !== OB.unit ? new BB(NaN, "") : new BB(this.num * OB.num, this.unit || OB.unit)
        }
      }, {
        key: "divide",
        value: function(OB) {
          return "" !== this.unit && "" !== OB.unit && this.unit !== OB.unit ? new BB(NaN, "") : new BB(this.num / OB.num, this.unit || OB.unit)
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
      }]) && pB(OB.prototype, GB), YB && pB(OB, YB), Object.defineProperty(OB, "prototype", {
        writable: !1
      }), OB;
      var OB, GB, YB
    }();

    function UB(BB) {
      if (BB.includes(SB)) return SB;
      for (var OB = BB; OB.includes("*") || OB.includes("/");) {
        var GB, YB = zB(null !== (GB = ZB.exec(OB)) && void 0 !== GB ? GB : [], 4),
          DB = YB[1],
          QB = YB[2],
          oB = YB[3],
          jB = nB.parse(null !== DB && void 0 !== DB ? DB : ""),
          yB = nB.parse(null !== oB && void 0 !== oB ? oB : ""),
          JB = "*" === QB ? jB.multiply(yB) : jB.divide(yB);
        if (JB.isNaN()) return SB;
        OB = OB.replace(ZB, JB.toString())
      }
      for (; OB.includes("+") || /.-\d+(?:\.\d+)?/.test(OB);) {
        var MB, PB = zB(null !== (MB = NB.exec(OB)) && void 0 !== MB ? MB : [], 4),
          lB = PB[1],
          pB = PB[2],
          qB = PB[3],
          RB = nB.parse(null !== lB && void 0 !== lB ? lB : ""),
          WB = nB.parse(null !== qB && void 0 !== qB ? qB : ""),
          AB = "+" === pB ? RB.add(WB) : RB.subtract(WB);
        if (AB.isNaN()) return SB;
        OB = OB.replace(NB, AB.toString())
      }
      return OB
    }
    var fB = /\(([^()]*)\)/;

    function kB(BB) {
      var OB = BB.replace(/\s+/g, "");
      return OB = function(BB) {
        for (var OB = BB; OB.includes("(");) {
          var GB = zB(fB.exec(OB), 2)[1];
          OB = OB.replace(fB, UB(GB))
        }
        return OB
      }(OB), OB = UB(OB)
    }

    function dB(BB) {
      var OB = function(BB) {
        try {
          return kB(BB)
        } catch (OB) {
          return SB
        }
      }(BB.slice(5, -1));
      return OB === SB ? "" : OB
    }
    var KB = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      uB = ["dx", "dy", "angle", "className", "breakAll"];

    function mB() {
      return mB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, mB.apply(this, arguments)
    }

    function IB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function FB(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        var GB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != GB) {
          var YB, DB, QB, oB, jB = [],
            yB = !0,
            JB = !1;
          try {
            if (QB = (GB = GB.call(BB)).next, 0 === OB) {
              if (Object(GB) !== GB) return;
              yB = !1
            } else
              for (; !(yB = (YB = QB.call(GB)).done) && (jB.push(YB.value), jB.length !== OB); yB = !0);
          } catch (BB) {
            JB = !0, DB = BB
          } finally {
            try {
              if (!yB && null != GB.return && (oB = GB.return(), Object(oB) !== oB)) return
            } finally {
              if (JB) throw DB
            }
          }
          return jB
        }
      }(BB, OB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return iB(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return iB(BB, OB)
      }(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }
    var LB = /[ \f\n\r\t\v\u2028\u2029]+/,
      gB = function(BB) {
        var OB = BB.children,
          GB = BB.breakAll,
          YB = BB.style;
        try {
          var DB = [];
          return QB()(OB) || (DB = GB ? OB.toString().split("") : OB.toString().split(LB)), {
            wordsWithComputedWidth: DB.map((function(BB) {
              return {
                word: BB,
                width: (0, MB.g)(BB, YB).width
              }
            })),
            spaceWidth: GB ? 0 : (0, MB.g)("\xa0", YB).width
          }
        } catch (oB) {
          return null
        }
      },
      rB = function(BB) {
        return [{
          words: QB()(BB) ? [] : BB.toString().split(LB)
        }]
      },
      XB = function(BB) {
        var OB = BB.width,
          GB = BB.scaleToFit,
          YB = BB.children,
          DB = BB.style,
          QB = BB.breakAll,
          oB = BB.maxLines;
        if ((OB || GB) && !yB.d.isSsr) {
          var JB = gB({
            breakAll: QB,
            children: YB,
            style: DB
          });
          return JB ? function(BB, OB, GB, YB, DB) {
            var QB = BB.maxLines,
              oB = BB.children,
              yB = BB.style,
              JB = BB.breakAll,
              MB = (0, jB.C)(QB),
              PB = oB,
              zB = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(BB, OB) {
                  var QB = OB.word,
                    oB = OB.width,
                    jB = BB[BB.length - 1];
                  if (jB && (null == YB || DB || jB.width + oB + GB < Number(YB))) jB.words.push(QB), jB.width += oB + GB;
                  else {
                    var yB = {
                      words: [QB],
                      width: oB
                    };
                    BB.push(yB)
                  }
                  return BB
                }), [])
              },
              lB = zB(OB);
            if (!MB) return lB;
            for (var pB, qB = function(BB) {
                var OB = PB.slice(0, BB),
                  GB = gB({
                    breakAll: JB,
                    style: yB,
                    children: OB + "\u2026"
                  }).wordsWithComputedWidth,
                  DB = zB(GB),
                  oB = DB.length > QB || function(BB) {
                    return BB.reduce((function(BB, OB) {
                      return BB.width > OB.width ? BB : OB
                    }))
                  }(DB).width > Number(YB);
                return [oB, DB]
              }, ZB = 0, NB = PB.length - 1, RB = 0; ZB <= NB && RB <= PB.length - 1;) {
              var WB = Math.floor((ZB + NB) / 2),
                AB = FB(qB(WB - 1), 2),
                VB = AB[0],
                SB = AB[1],
                nB = FB(qB(WB), 1)[0];
              if (VB || nB || (ZB = WB + 1), VB && nB && (NB = WB - 1), !VB && nB) {
                pB = SB;
                break
              }
              RB++
            }
            return pB || lB
          }({
            breakAll: QB,
            children: YB,
            maxLines: oB,
            style: DB
          }, JB.wordsWithComputedWidth, JB.spaceWidth, OB, GB) : rB(YB)
        }
        return rB(YB)
      },
      wB = "#808080",
      EB = function(BB) {
        var OB = BB.x,
          GB = void 0 === OB ? 0 : OB,
          DB = BB.y,
          QB = void 0 === DB ? 0 : DB,
          yB = BB.lineHeight,
          MB = void 0 === yB ? "1em" : yB,
          PB = BB.capHeight,
          zB = void 0 === PB ? "0.71em" : PB,
          lB = BB.scaleToFit,
          pB = void 0 !== lB && lB,
          qB = BB.textAnchor,
          ZB = void 0 === qB ? "start" : qB,
          NB = BB.verticalAnchor,
          RB = void 0 === NB ? "end" : NB,
          WB = BB.fill,
          AB = void 0 === WB ? wB : WB,
          VB = IB(BB, KB),
          SB = (0, YB.useMemo)((function() {
            return XB({
              breakAll: VB.breakAll,
              children: VB.children,
              maxLines: VB.maxLines,
              scaleToFit: pB,
              style: VB.style,
              width: VB.width
            })
          }), [VB.breakAll, VB.children, VB.maxLines, pB, VB.style, VB.width]),
          nB = VB.dx,
          UB = VB.dy,
          fB = VB.angle,
          kB = VB.className,
          FB = VB.breakAll,
          iB = IB(VB, uB);
        if (!(0, jB.z)(GB) || !(0, jB.z)(QB)) return null;
        var LB, gB = GB + ((0, jB.C)(nB) ? nB : 0),
          rB = QB + ((0, jB.C)(UB) ? UB : 0);
        switch (RB) {
          case "start":
            LB = dB("calc(".concat(zB, ")"));
            break;
          case "middle":
            LB = dB("calc(".concat((SB.length - 1) / 2, " * -").concat(MB, " + (").concat(zB, " / 2))"));
            break;
          default:
            LB = dB("calc(".concat(SB.length - 1, " * -").concat(MB, ")"))
        }
        var EB = [];
        if (pB) {
          var cB = SB[0].width,
            hB = VB.width;
          EB.push("scale(".concat(((0, jB.C)(hB) ? hB / cB : 1) / cB, ")"))
        }
        return fB && EB.push("rotate(".concat(fB, ", ").concat(gB, ", ").concat(rB, ")")), EB.length && (iB.transform = EB.join(" ")), YB.createElement("text", mB({}, (0, JB.e)(iB, !0), {
          x: gB,
          y: rB,
          className: (0, oB.c)("recharts-text", kB),
          textAnchor: ZB,
          fill: AB.includes("url") ? wB : AB
        }), SB.map((function(BB, OB) {
          var GB = BB.words.join(FB ? "" : " ");
          return YB.createElement("tspan", {
            x: gB,
            dy: 0 === OB ? LB : MB,
            key: "".concat(GB, "-").concat(OB)
          }, GB)
        })))
      }
  },
  6476: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => sB
    });
    var YB = GB(56),
      DB = GB(6022),
      QB = GB.n(DB),
      oB = GB(5930),
      jB = GB.n(oB),
      yB = GB(5587),
      JB = GB(5671);

    function MB(BB) {
      return MB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, MB(BB)
    }

    function PB() {
      return PB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, PB.apply(this, arguments)
    }

    function zB(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        var GB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != GB) {
          var YB, DB, QB, oB, jB = [],
            yB = !0,
            JB = !1;
          try {
            if (QB = (GB = GB.call(BB)).next, 0 === OB) {
              if (Object(GB) !== GB) return;
              yB = !1
            } else
              for (; !(yB = (YB = QB.call(GB)).done) && (jB.push(YB.value), jB.length !== OB); yB = !0);
          } catch (BB) {
            JB = !0, DB = BB
          } finally {
            try {
              if (!yB && null != GB.return && (oB = GB.return(), Object(oB) !== oB)) return
            } finally {
              if (JB) throw DB
            }
          }
          return jB
        }
      }(BB, OB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return lB(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return lB(BB, OB)
      }(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function pB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function qB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? pB(Object(GB), !0).forEach((function(OB) {
          ZB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : pB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function ZB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != MB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != MB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == MB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function NB(BB) {
      return Array.isArray(BB) && (0, JB.z)(BB[0]) && (0, JB.z)(BB[1]) ? BB.join(" ~ ") : BB
    }
    var RB = function(BB) {
      var OB = BB.separator,
        GB = void 0 === OB ? " : " : OB,
        DB = BB.contentStyle,
        oB = void 0 === DB ? {} : DB,
        MB = BB.itemStyle,
        lB = void 0 === MB ? {} : MB,
        pB = BB.labelStyle,
        ZB = void 0 === pB ? {} : pB,
        RB = BB.payload,
        WB = BB.formatter,
        AB = BB.itemSorter,
        VB = BB.wrapperClassName,
        SB = BB.labelClassName,
        nB = BB.label,
        UB = BB.labelFormatter,
        fB = BB.accessibilityLayer,
        kB = void 0 !== fB && fB,
        dB = qB({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, oB),
        KB = qB({
          margin: 0
        }, ZB),
        uB = !jB()(nB),
        mB = uB ? nB : "",
        IB = (0, yB.c)("recharts-default-tooltip", VB),
        FB = (0, yB.c)("recharts-tooltip-label", SB);
      uB && UB && void 0 !== RB && null !== RB && (mB = UB(nB, RB));
      var iB = kB ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return YB.createElement("div", PB({
        className: IB,
        style: dB
      }, iB), YB.createElement("p", {
        className: FB,
        style: KB
      }, YB.isValidElement(mB) ? mB : "".concat(mB)), function() {
        if (RB && RB.length) {
          var BB = (AB ? QB()(RB, AB) : RB).map((function(BB, OB) {
            if ("none" === BB.type) return null;
            var DB = qB({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: BB.color || "#000"
              }, lB),
              QB = BB.formatter || WB || NB,
              oB = BB.value,
              jB = BB.name,
              yB = oB,
              MB = jB;
            if (QB && null != yB && null != MB) {
              var PB = QB(oB, jB, BB, OB, RB);
              if (Array.isArray(PB)) {
                var pB = zB(PB, 2);
                yB = pB[0], MB = pB[1]
              } else yB = PB
            }
            return YB.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(OB),
              style: DB
            }, (0, JB.z)(MB) ? YB.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, MB) : null, (0, JB.z)(MB) ? YB.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, GB) : null, YB.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, yB), YB.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, BB.unit || ""))
          }));
          return YB.createElement("ul", {
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

    function AB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != WB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != WB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == WB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }
    var VB = "recharts-tooltip-wrapper",
      SB = {
        visibility: "hidden"
      };

    function nB(BB) {
      var OB = BB.coordinate,
        GB = BB.translateX,
        YB = BB.translateY;
      return (0, yB.c)(VB, AB(AB(AB(AB({}, "".concat(VB, "-right"), (0, JB.C)(GB) && OB && (0, JB.C)(OB.x) && GB >= OB.x), "".concat(VB, "-left"), (0, JB.C)(GB) && OB && (0, JB.C)(OB.x) && GB < OB.x), "".concat(VB, "-bottom"), (0, JB.C)(YB) && OB && (0, JB.C)(OB.y) && YB >= OB.y), "".concat(VB, "-top"), (0, JB.C)(YB) && OB && (0, JB.C)(OB.y) && YB < OB.y))
    }

    function UB(BB) {
      var OB = BB.allowEscapeViewBox,
        GB = BB.coordinate,
        YB = BB.key,
        DB = BB.offsetTopLeft,
        QB = BB.position,
        oB = BB.reverseDirection,
        jB = BB.tooltipDimension,
        yB = BB.viewBox,
        MB = BB.viewBoxDimension;
      if (QB && (0, JB.C)(QB[YB])) return QB[YB];
      var PB = GB[YB] - jB - DB,
        zB = GB[YB] + DB;
      return OB[YB] ? oB[YB] ? PB : zB : oB[YB] ? PB < yB[YB] ? Math.max(zB, yB[YB]) : Math.max(PB, yB[YB]) : zB + jB > yB[YB] + MB ? Math.max(PB, yB[YB]) : Math.max(zB, yB[YB])
    }

    function fB(BB) {
      return fB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, fB(BB)
    }

    function kB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function dB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? kB(Object(GB), !0).forEach((function(OB) {
          iB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : kB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function KB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, LB(YB.key), YB)
      }
    }

    function uB(BB, OB, GB) {
      return OB = IB(OB),
        function(BB, OB) {
          if (OB && ("object" === fB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, mB() ? Reflect.construct(OB, GB || [], IB(BB).constructor) : OB.apply(BB, GB))
    }

    function mB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (mB = function() {
        return !!BB
      })()
    }

    function IB(BB) {
      return IB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, IB(BB)
    }

    function FB(BB, OB) {
      return FB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, FB(BB, OB)
    }

    function iB(BB, OB, GB) {
      return (OB = LB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function LB(BB) {
      var OB = function(BB, OB) {
        if ("object" != fB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != fB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == fB(OB) ? OB : OB + ""
    }
    var gB = function(BB) {
        function OB() {
          var BB;
          ! function(BB, OB) {
            if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
          }(this, OB);
          for (var GB = arguments.length, YB = new Array(GB), DB = 0; DB < GB; DB++) YB[DB] = arguments[DB];
          return iB(BB = uB(this, OB, [].concat(YB)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), iB(BB, "handleKeyDown", (function(OB) {
            var GB, YB, DB, QB;
            "Escape" === OB.key && BB.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (GB = null === (YB = BB.props.coordinate) || void 0 === YB ? void 0 : YB.x) && void 0 !== GB ? GB : 0,
                y: null !== (DB = null === (QB = BB.props.coordinate) || void 0 === QB ? void 0 : QB.y) && void 0 !== DB ? DB : 0
              }
            })
          })), BB
        }
        return function(BB, OB) {
          if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
          BB.prototype = Object.create(OB && OB.prototype, {
            constructor: {
              value: BB,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), OB && FB(BB, OB)
        }(OB, BB), GB = OB, (DB = [{
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
            var BB, OB;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (BB = this.props.coordinate) || void 0 === BB ? void 0 : BB.x) === this.state.dismissedAtCoordinate.x && (null === (OB = this.props.coordinate) || void 0 === OB ? void 0 : OB.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var BB = this,
              OB = this.props,
              GB = OB.active,
              DB = OB.allowEscapeViewBox,
              QB = OB.animationDuration,
              oB = OB.animationEasing,
              jB = OB.children,
              yB = OB.coordinate,
              JB = OB.hasPayload,
              MB = OB.isAnimationActive,
              PB = OB.offset,
              zB = OB.position,
              lB = OB.reverseDirection,
              pB = OB.useTranslate3d,
              qB = OB.viewBox,
              ZB = OB.wrapperStyle,
              NB = function(BB) {
                var OB, GB, YB = BB.allowEscapeViewBox,
                  DB = BB.coordinate,
                  QB = BB.offsetTopLeft,
                  oB = BB.position,
                  jB = BB.reverseDirection,
                  yB = BB.tooltipBox,
                  JB = BB.useTranslate3d,
                  MB = BB.viewBox;
                return {
                  cssProperties: yB.height > 0 && yB.width > 0 && DB ? function(BB) {
                    var OB = BB.translateX,
                      GB = BB.translateY;
                    return {
                      transform: BB.useTranslate3d ? "translate3d(".concat(OB, "px, ").concat(GB, "px, 0)") : "translate(".concat(OB, "px, ").concat(GB, "px)")
                    }
                  }({
                    translateX: OB = UB({
                      allowEscapeViewBox: YB,
                      coordinate: DB,
                      key: "x",
                      offsetTopLeft: QB,
                      position: oB,
                      reverseDirection: jB,
                      tooltipDimension: yB.width,
                      viewBox: MB,
                      viewBoxDimension: MB.width
                    }),
                    translateY: GB = UB({
                      allowEscapeViewBox: YB,
                      coordinate: DB,
                      key: "y",
                      offsetTopLeft: QB,
                      position: oB,
                      reverseDirection: jB,
                      tooltipDimension: yB.height,
                      viewBox: MB,
                      viewBoxDimension: MB.height
                    }),
                    useTranslate3d: JB
                  }) : SB,
                  cssClasses: nB({
                    translateX: OB,
                    translateY: GB,
                    coordinate: DB
                  })
                }
              }({
                allowEscapeViewBox: DB,
                coordinate: yB,
                offsetTopLeft: PB,
                position: zB,
                reverseDirection: lB,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: pB,
                viewBox: qB
              }),
              RB = NB.cssClasses,
              WB = NB.cssProperties,
              AB = dB(dB({
                transition: MB && GB ? "transform ".concat(QB, "ms ").concat(oB) : void 0
              }, WB), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && GB && JB ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, ZB);
            return YB.createElement("div", {
              tabIndex: -1,
              className: RB,
              style: AB,
              ref: function(OB) {
                BB.wrapperNode = OB
              }
            }, jB)
          }
        }]) && KB(GB.prototype, DB), QB && KB(GB, QB), Object.defineProperty(GB, "prototype", {
          writable: !1
        }), GB;
        var GB, DB, QB
      }(YB.PureComponent),
      rB = GB(6485),
      XB = GB(6488);

    function wB(BB) {
      return wB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, wB(BB)
    }

    function EB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function cB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? EB(Object(GB), !0).forEach((function(OB) {
          CB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : EB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function hB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, HB(YB.key), YB)
      }
    }

    function aB(BB, OB, GB) {
      return OB = TB(OB),
        function(BB, OB) {
          if (OB && ("object" === wB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return function(BB) {
            if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return BB
          }(BB)
        }(BB, eB() ? Reflect.construct(OB, GB || [], TB(BB).constructor) : OB.apply(BB, GB))
    }

    function eB() {
      try {
        var BB = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (BB) {}
      return (eB = function() {
        return !!BB
      })()
    }

    function TB(BB) {
      return TB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, TB(BB)
    }

    function bB(BB, OB) {
      return bB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, bB(BB, OB)
    }

    function CB(BB, OB, GB) {
      return (OB = HB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function HB(BB) {
      var OB = function(BB, OB) {
        if ("object" != wB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != wB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == wB(OB) ? OB : OB + ""
    }

    function vB(BB) {
      return BB.dataKey
    }
    var sB = function(BB) {
      function OB() {
        return function(BB, OB) {
          if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
        }(this, OB), aB(this, OB, arguments)
      }
      return function(BB, OB) {
        if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
        BB.prototype = Object.create(OB && OB.prototype, {
          constructor: {
            value: BB,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(BB, "prototype", {
          writable: !1
        }), OB && bB(BB, OB)
      }(OB, BB), GB = OB, (DB = [{
        key: "render",
        value: function() {
          var BB = this,
            OB = this.props,
            GB = OB.active,
            DB = OB.allowEscapeViewBox,
            QB = OB.animationDuration,
            oB = OB.animationEasing,
            jB = OB.content,
            yB = OB.coordinate,
            JB = OB.filterNull,
            MB = OB.isAnimationActive,
            PB = OB.offset,
            zB = OB.payload,
            lB = OB.payloadUniqBy,
            pB = OB.position,
            qB = OB.reverseDirection,
            ZB = OB.useTranslate3d,
            NB = OB.viewBox,
            WB = OB.wrapperStyle,
            AB = null !== zB && void 0 !== zB ? zB : [];
          JB && AB.length && (AB = (0, XB.c)(zB.filter((function(OB) {
            return null != OB.value && (!0 !== OB.hide || BB.props.includeHidden)
          })), lB, vB));
          var VB = AB.length > 0;
          return YB.createElement(gB, {
            allowEscapeViewBox: DB,
            animationDuration: QB,
            animationEasing: oB,
            isAnimationActive: MB,
            active: GB,
            coordinate: yB,
            hasPayload: VB,
            offset: PB,
            position: pB,
            reverseDirection: qB,
            useTranslate3d: ZB,
            viewBox: NB,
            wrapperStyle: WB
          }, function(BB, OB) {
            return YB.isValidElement(BB) ? YB.cloneElement(BB, OB) : "function" === typeof BB ? YB.createElement(BB, OB) : YB.createElement(RB, OB)
          }(jB, cB(cB({}, this.props), {}, {
            payload: AB
          })))
        }
      }]) && hB(GB.prototype, DB), QB && hB(GB, QB), Object.defineProperty(GB, "prototype", {
        writable: !1
      }), GB;
      var GB, DB, QB
    }(YB.PureComponent);
    CB(sB, "displayName", "Tooltip"), CB(sB, "defaultProps", {
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
      isAnimationActive: !rB.d.isSsr,
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
  6468: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => JB
    });
    var YB = GB(56),
      DB = GB(5587),
      QB = GB(5938),
      oB = ["children", "className"];

    function jB() {
      return jB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, jB.apply(this, arguments)
    }

    function yB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }
    var JB = YB.forwardRef((function(BB, OB) {
      var GB = BB.children,
        JB = BB.className,
        MB = yB(BB, oB),
        PB = (0, DB.c)("recharts-layer", JB);
      return YB.createElement("g", jB({
        className: PB
      }, (0, QB.e)(MB, !0), {
        ref: OB
      }), GB)
    }))
  },
  6465: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => JB
    });
    var YB = GB(56),
      DB = GB(5587),
      QB = GB(5938),
      oB = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function jB() {
      return jB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, jB.apply(this, arguments)
    }

    function yB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function JB(BB) {
      var OB = BB.children,
        GB = BB.width,
        JB = BB.height,
        MB = BB.viewBox,
        PB = BB.className,
        zB = BB.style,
        lB = BB.title,
        pB = BB.desc,
        qB = yB(BB, oB),
        ZB = MB || {
          width: GB,
          height: JB,
          x: 0,
          y: 0
        },
        NB = (0, DB.c)("recharts-surface", PB);
      return YB.createElement("svg", jB({}, (0, QB.e)(qB, !0, "svg"), {
        className: NB,
        width: GB,
        height: JB,
        style: zB,
        viewBox: "".concat(ZB.x, " ").concat(ZB.y, " ").concat(ZB.width, " ").concat(ZB.height)
      }), YB.createElement("title", null, lB), YB.createElement("desc", null, pB), OB)
    }
  },
  6834: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => WB,
      h: () => SB,
      k: () => KB,
      m: () => dB,
      p: () => AB,
      s: () => kB,
      t: () => fB,
      u: () => VB,
      y: () => UB,
      B: () => nB
    });
    var YB = GB(56),
      DB = GB(6463),
      QB = GB(6843),
      oB = GB.n(QB),
      jB = GB(6745),
      yB = GB.n(jB),
      JB = GB(5730),
      MB = GB.n(JB)()((function(BB) {
        return {
          x: BB.left,
          y: BB.top,
          width: BB.width,
          height: BB.height
        }
      }), (function(BB) {
        return ["l", BB.left, "t", BB.top, "w", BB.width, "h", BB.height].join("")
      })),
      PB = GB(5671);
    var zB = (0, YB.createContext)(void 0),
      lB = (0, YB.createContext)(void 0),
      pB = (0, YB.createContext)(void 0),
      qB = (0, YB.createContext)({}),
      ZB = (0, YB.createContext)(void 0),
      NB = (0, YB.createContext)(0),
      RB = (0, YB.createContext)(0),
      WB = function(BB) {
        var OB = BB.state,
          GB = OB.xAxisMap,
          DB = OB.yAxisMap,
          QB = OB.offset,
          oB = BB.clipPathId,
          jB = BB.children,
          yB = BB.width,
          JB = BB.height,
          PB = MB(QB);
        return YB.createElement(zB.Provider, {
          value: GB
        }, YB.createElement(lB.Provider, {
          value: DB
        }, YB.createElement(qB.Provider, {
          value: QB
        }, YB.createElement(pB.Provider, {
          value: PB
        }, YB.createElement(ZB.Provider, {
          value: oB
        }, YB.createElement(NB.Provider, {
          value: JB
        }, YB.createElement(RB.Provider, {
          value: yB
        }, jB)))))))
      },
      AB = function() {
        return (0, YB.useContext)(ZB)
      };
    var VB = function(BB) {
        var OB = (0, YB.useContext)(zB);
        null == OB && (0, DB.d)(!1);
        var GB = OB[BB];
        return null == GB && (0, DB.d)(!1), GB
      },
      SB = function() {
        var BB = (0, YB.useContext)(zB);
        return (0, PB.j)(BB)
      },
      nB = function() {
        var BB = (0, YB.useContext)(lB);
        return oB()(BB, (function(BB) {
          return yB()(BB.domain, Number.isFinite)
        })) || (0, PB.j)(BB)
      },
      UB = function(BB) {
        var OB = (0, YB.useContext)(lB);
        null == OB && (0, DB.d)(!1);
        var GB = OB[BB];
        return null == GB && (0, DB.d)(!1), GB
      },
      fB = function() {
        return (0, YB.useContext)(pB)
      },
      kB = function() {
        return (0, YB.useContext)(qB)
      },
      dB = function() {
        return (0, YB.useContext)(RB)
      },
      KB = function() {
        return (0, YB.useContext)(NB)
      }
  },
  6866: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => vB
    });
    var YB = GB(56);

    function DB() {}

    function QB(BB, OB, GB) {
      BB._context.bezierCurveTo((2 * BB._x0 + BB._x1) / 3, (2 * BB._y0 + BB._y1) / 3, (BB._x0 + 2 * BB._x1) / 3, (BB._y0 + 2 * BB._y1) / 3, (BB._x0 + 4 * BB._x1 + OB) / 6, (BB._y0 + 4 * BB._y1 + GB) / 6)
    }

    function oB(BB) {
      this._context = BB
    }

    function jB(BB) {
      this._context = BB
    }

    function yB(BB) {
      this._context = BB
    }
    oB.prototype = {
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
            QB(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(BB, OB) {
        switch (BB = +BB, OB = +OB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, OB) : this._context.moveTo(BB, OB);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            QB(this, BB, OB)
        }
        this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = OB
      }
    }, jB.prototype = {
      areaStart: DB,
      areaEnd: DB,
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
      point: function(BB, OB) {
        switch (BB = +BB, OB = +OB, this._point) {
          case 0:
            this._point = 1, this._x2 = BB, this._y2 = OB;
            break;
          case 1:
            this._point = 2, this._x3 = BB, this._y3 = OB;
            break;
          case 2:
            this._point = 3, this._x4 = BB, this._y4 = OB, this._context.moveTo((this._x0 + 4 * this._x1 + BB) / 6, (this._y0 + 4 * this._y1 + OB) / 6);
            break;
          default:
            QB(this, BB, OB)
        }
        this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = OB
      }
    }, yB.prototype = {
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
      point: function(BB, OB) {
        switch (BB = +BB, OB = +OB, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var GB = (this._x0 + 4 * this._x1 + BB) / 6,
              YB = (this._y0 + 4 * this._y1 + OB) / 6;
            this._line ? this._context.lineTo(GB, YB) : this._context.moveTo(GB, YB);
            break;
          case 3:
            this._point = 4;
          default:
            QB(this, BB, OB)
        }
        this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = OB
      }
    };
    class JB {
      constructor(BB, OB) {
        this._context = BB, this._x = OB
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
      point(BB, OB) {
        switch (BB = +BB, OB = +OB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, OB) : this._context.moveTo(BB, OB);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + BB) / 2, this._y0, this._x0, OB, BB, OB) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + OB) / 2, BB, this._y0, BB, OB)
        }
        this._x0 = BB, this._y0 = OB
      }
    }

    function MB(BB) {
      this._context = BB
    }

    function PB(BB) {
      this._context = BB
    }

    function zB(BB) {
      return new PB(BB)
    }

    function lB(BB) {
      return BB < 0 ? -1 : 1
    }

    function pB(BB, OB, GB) {
      var YB = BB._x1 - BB._x0,
        DB = OB - BB._x1,
        QB = (BB._y1 - BB._y0) / (YB || DB < 0 && -0),
        oB = (GB - BB._y1) / (DB || YB < 0 && -0),
        jB = (QB * DB + oB * YB) / (YB + DB);
      return (lB(QB) + lB(oB)) * Math.min(Math.abs(QB), Math.abs(oB), .5 * Math.abs(jB)) || 0
    }

    function qB(BB, OB) {
      var GB = BB._x1 - BB._x0;
      return GB ? (3 * (BB._y1 - BB._y0) / GB - OB) / 2 : OB
    }

    function ZB(BB, OB, GB) {
      var YB = BB._x0,
        DB = BB._y0,
        QB = BB._x1,
        oB = BB._y1,
        jB = (QB - YB) / 3;
      BB._context.bezierCurveTo(YB + jB, DB + jB * OB, QB - jB, oB - jB * GB, QB, oB)
    }

    function NB(BB) {
      this._context = BB
    }

    function RB(BB) {
      this._context = new WB(BB)
    }

    function WB(BB) {
      this._context = BB
    }

    function AB(BB) {
      this._context = BB
    }

    function VB(BB) {
      var OB, GB, YB = BB.length - 1,
        DB = new Array(YB),
        QB = new Array(YB),
        oB = new Array(YB);
      for (DB[0] = 0, QB[0] = 2, oB[0] = BB[0] + 2 * BB[1], OB = 1; OB < YB - 1; ++OB) DB[OB] = 1, QB[OB] = 4, oB[OB] = 4 * BB[OB] + 2 * BB[OB + 1];
      for (DB[YB - 1] = 2, QB[YB - 1] = 7, oB[YB - 1] = 8 * BB[YB - 1] + BB[YB], OB = 1; OB < YB; ++OB) GB = DB[OB] / QB[OB - 1], QB[OB] -= GB, oB[OB] -= GB * oB[OB - 1];
      for (DB[YB - 1] = oB[YB - 1] / QB[YB - 1], OB = YB - 2; OB >= 0; --OB) DB[OB] = (oB[OB] - DB[OB + 1]) / QB[OB];
      for (QB[YB - 1] = (BB[YB] + DB[YB - 1]) / 2, OB = 0; OB < YB - 1; ++OB) QB[OB] = 2 * BB[OB + 1] - DB[OB + 1];
      return [DB, QB]
    }

    function SB(BB, OB) {
      this._context = BB, this._t = OB
    }
    MB.prototype = {
      areaStart: DB,
      areaEnd: DB,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(BB, OB) {
        BB = +BB, OB = +OB, this._point ? this._context.lineTo(BB, OB) : (this._point = 1, this._context.moveTo(BB, OB))
      }
    }, PB.prototype = {
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
      point: function(BB, OB) {
        switch (BB = +BB, OB = +OB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, OB) : this._context.moveTo(BB, OB);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(BB, OB)
        }
      }
    }, NB.prototype = {
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
            ZB(this, this._t0, qB(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(BB, OB) {
        var GB = NaN;
        if (OB = +OB, (BB = +BB) !== this._x1 || OB !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(BB, OB) : this._context.moveTo(BB, OB);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, ZB(this, qB(this, GB = pB(this, BB, OB)), GB);
              break;
            default:
              ZB(this, this._t0, GB = pB(this, BB, OB))
          }
          this._x0 = this._x1, this._x1 = BB, this._y0 = this._y1, this._y1 = OB, this._t0 = GB
        }
      }
    }, (RB.prototype = Object.create(NB.prototype)).point = function(BB, OB) {
      NB.prototype.point.call(this, OB, BB)
    }, WB.prototype = {
      moveTo: function(BB, OB) {
        this._context.moveTo(OB, BB)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(BB, OB) {
        this._context.lineTo(OB, BB)
      },
      bezierCurveTo: function(BB, OB, GB, YB, DB, QB) {
        this._context.bezierCurveTo(OB, BB, YB, GB, QB, DB)
      }
    }, AB.prototype = {
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
          OB = this._y,
          GB = BB.length;
        if (GB)
          if (this._line ? this._context.lineTo(BB[0], OB[0]) : this._context.moveTo(BB[0], OB[0]), 2 === GB) this._context.lineTo(BB[1], OB[1]);
          else
            for (var YB = VB(BB), DB = VB(OB), QB = 0, oB = 1; oB < GB; ++QB, ++oB) this._context.bezierCurveTo(YB[0][QB], DB[0][QB], YB[1][QB], DB[1][QB], BB[oB], OB[oB]);
        (this._line || 0 !== this._line && 1 === GB) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(BB, OB) {
        this._x.push(+BB), this._y.push(+OB)
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
      point: function(BB, OB) {
        switch (BB = +BB, OB = +OB, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(BB, OB) : this._context.moveTo(BB, OB);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, OB), this._context.lineTo(BB, OB);
            else {
              var GB = this._x * (1 - this._t) + BB * this._t;
              this._context.lineTo(GB, this._y), this._context.lineTo(GB, OB)
            }
        }
        this._x = BB, this._y = OB
      }
    };
    var nB = GB(6712),
      UB = GB(6607),
      fB = GB(6615);

    function kB(BB) {
      return BB[0]
    }

    function dB(BB) {
      return BB[1]
    }

    function KB(BB, OB) {
      var GB = (0, UB.b)(!0),
        YB = null,
        DB = zB,
        QB = null,
        oB = (0, fB.b)(jB);

      function jB(jB) {
        var yB, JB, MB, PB = (jB = (0, nB.e)(jB)).length,
          zB = !1;
        for (null == YB && (QB = DB(MB = oB())), yB = 0; yB <= PB; ++yB) !(yB < PB && GB(JB = jB[yB], yB, jB)) === zB && ((zB = !zB) ? QB.lineStart() : QB.lineEnd()), zB && QB.point(+BB(JB, yB, jB), +OB(JB, yB, jB));
        if (MB) return QB = null, MB + "" || null
      }
      return BB = "function" === typeof BB ? BB : void 0 === BB ? kB : (0, UB.b)(BB), OB = "function" === typeof OB ? OB : void 0 === OB ? dB : (0, UB.b)(OB), jB.x = function(OB) {
        return arguments.length ? (BB = "function" === typeof OB ? OB : (0, UB.b)(+OB), jB) : BB
      }, jB.y = function(BB) {
        return arguments.length ? (OB = "function" === typeof BB ? BB : (0, UB.b)(+BB), jB) : OB
      }, jB.defined = function(BB) {
        return arguments.length ? (GB = "function" === typeof BB ? BB : (0, UB.b)(!!BB), jB) : GB
      }, jB.curve = function(BB) {
        return arguments.length ? (DB = BB, null != YB && (QB = DB(YB)), jB) : DB
      }, jB.context = function(BB) {
        return arguments.length ? (null == BB ? YB = QB = null : QB = DB(YB = BB), jB) : YB
      }, jB
    }

    function uB(BB, OB, GB) {
      var YB = null,
        DB = (0, UB.b)(!0),
        QB = null,
        oB = zB,
        jB = null,
        yB = (0, fB.b)(JB);

      function JB(JB) {
        var MB, PB, zB, lB, pB, qB = (JB = (0, nB.e)(JB)).length,
          ZB = !1,
          NB = new Array(qB),
          RB = new Array(qB);
        for (null == QB && (jB = oB(pB = yB())), MB = 0; MB <= qB; ++MB) {
          if (!(MB < qB && DB(lB = JB[MB], MB, JB)) === ZB)
            if (ZB = !ZB) PB = MB, jB.areaStart(), jB.lineStart();
            else {
              for (jB.lineEnd(), jB.lineStart(), zB = MB - 1; zB >= PB; --zB) jB.point(NB[zB], RB[zB]);
              jB.lineEnd(), jB.areaEnd()
            } ZB && (NB[MB] = +BB(lB, MB, JB), RB[MB] = +OB(lB, MB, JB), jB.point(YB ? +YB(lB, MB, JB) : NB[MB], GB ? +GB(lB, MB, JB) : RB[MB]))
        }
        if (pB) return jB = null, pB + "" || null
      }

      function MB() {
        return KB().defined(DB).curve(oB).context(QB)
      }
      return BB = "function" === typeof BB ? BB : void 0 === BB ? kB : (0, UB.b)(+BB), OB = "function" === typeof OB ? OB : void 0 === OB ? (0, UB.b)(0) : (0, UB.b)(+OB), GB = "function" === typeof GB ? GB : void 0 === GB ? dB : (0, UB.b)(+GB), JB.x = function(OB) {
        return arguments.length ? (BB = "function" === typeof OB ? OB : (0, UB.b)(+OB), YB = null, JB) : BB
      }, JB.x0 = function(OB) {
        return arguments.length ? (BB = "function" === typeof OB ? OB : (0, UB.b)(+OB), JB) : BB
      }, JB.x1 = function(BB) {
        return arguments.length ? (YB = null == BB ? null : "function" === typeof BB ? BB : (0, UB.b)(+BB), JB) : YB
      }, JB.y = function(BB) {
        return arguments.length ? (OB = "function" === typeof BB ? BB : (0, UB.b)(+BB), GB = null, JB) : OB
      }, JB.y0 = function(BB) {
        return arguments.length ? (OB = "function" === typeof BB ? BB : (0, UB.b)(+BB), JB) : OB
      }, JB.y1 = function(BB) {
        return arguments.length ? (GB = null == BB ? null : "function" === typeof BB ? BB : (0, UB.b)(+BB), JB) : GB
      }, JB.lineX0 = JB.lineY0 = function() {
        return MB().x(BB).y(OB)
      }, JB.lineY1 = function() {
        return MB().x(BB).y(GB)
      }, JB.lineX1 = function() {
        return MB().x(YB).y(OB)
      }, JB.defined = function(BB) {
        return arguments.length ? (DB = "function" === typeof BB ? BB : (0, UB.b)(!!BB), JB) : DB
      }, JB.curve = function(BB) {
        return arguments.length ? (oB = BB, null != QB && (jB = oB(QB)), JB) : oB
      }, JB.context = function(BB) {
        return arguments.length ? (null == BB ? QB = jB = null : jB = oB(QB = BB), JB) : QB
      }, JB
    }
    var mB = GB(6566),
      IB = GB.n(mB),
      FB = GB(5782),
      iB = GB.n(FB),
      LB = GB(5587),
      gB = GB(5951),
      rB = GB(5938),
      XB = GB(5671);

    function wB(BB) {
      return wB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, wB(BB)
    }

    function EB() {
      return EB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, EB.apply(this, arguments)
    }

    function cB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function hB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? cB(Object(GB), !0).forEach((function(OB) {
          aB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : cB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function aB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != wB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != wB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == wB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }
    var eB = {
        curveBasisClosed: function(BB) {
          return new jB(BB)
        },
        curveBasisOpen: function(BB) {
          return new yB(BB)
        },
        curveBasis: function(BB) {
          return new oB(BB)
        },
        curveBumpX: function(BB) {
          return new JB(BB, !0)
        },
        curveBumpY: function(BB) {
          return new JB(BB, !1)
        },
        curveLinearClosed: function(BB) {
          return new MB(BB)
        },
        curveLinear: zB,
        curveMonotoneX: function(BB) {
          return new NB(BB)
        },
        curveMonotoneY: function(BB) {
          return new RB(BB)
        },
        curveNatural: function(BB) {
          return new AB(BB)
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
      TB = function(BB) {
        return BB.x === +BB.x && BB.y === +BB.y
      },
      bB = function(BB) {
        return BB.x
      },
      CB = function(BB) {
        return BB.y
      },
      HB = function(BB) {
        var OB, GB = BB.type,
          YB = void 0 === GB ? "linear" : GB,
          DB = BB.points,
          QB = void 0 === DB ? [] : DB,
          oB = BB.baseLine,
          jB = BB.layout,
          yB = BB.connectNulls,
          JB = void 0 !== yB && yB,
          MB = function(BB, OB) {
            if (iB()(BB)) return BB;
            var GB = "curve".concat(IB()(BB));
            return "curveMonotone" !== GB && "curveBump" !== GB || !OB ? eB[GB] || zB : eB["".concat(GB).concat("vertical" === OB ? "Y" : "X")]
          }(YB, jB),
          PB = JB ? QB.filter((function(BB) {
            return TB(BB)
          })) : QB;
        if (Array.isArray(oB)) {
          var lB = JB ? oB.filter((function(BB) {
              return TB(BB)
            })) : oB,
            pB = PB.map((function(BB, OB) {
              return hB(hB({}, BB), {}, {
                base: lB[OB]
              })
            }));
          return (OB = "vertical" === jB ? uB().y(CB).x1(bB).x0((function(BB) {
            return BB.base.x
          })) : uB().x(bB).y1(CB).y0((function(BB) {
            return BB.base.y
          }))).defined(TB).curve(MB), OB(pB)
        }
        return (OB = "vertical" === jB && (0, XB.C)(oB) ? uB().y(CB).x1(bB).x0(oB) : (0, XB.C)(oB) ? uB().x(bB).y1(CB).y0(oB) : KB().x(bB).y(CB)).defined(TB).curve(MB), OB(PB)
      },
      vB = function(BB) {
        var OB = BB.className,
          GB = BB.points,
          DB = BB.path,
          QB = BB.pathRef;
        if ((!GB || !GB.length) && !DB) return null;
        var oB = GB && GB.length ? HB(BB) : DB;
        return YB.createElement("path", EB({}, (0, rB.e)(BB, !1), (0, gB.g)(BB), {
          className: (0, LB.c)("recharts-curve", OB),
          d: oB,
          ref: QB
        }))
      }
  },
  6620: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => yB
    });
    var YB = GB(56),
      DB = GB(5587),
      QB = GB(5951),
      oB = GB(5938);

    function jB() {
      return jB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, jB.apply(this, arguments)
    }
    var yB = function(BB) {
      var OB = BB.cx,
        GB = BB.cy,
        yB = BB.r,
        JB = BB.className,
        MB = (0, DB.c)("recharts-dot", JB);
      return OB === +OB && GB === +GB && yB === +yB ? YB.createElement("circle", jB({}, (0, oB.e)(BB, !1), (0, QB.g)(BB), {
        className: MB,
        cx: OB,
        cy: GB,
        r: yB
      })) : null
    }
  },
  6629: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => NB,
      e: () => qB
    });
    var YB = GB(56),
      DB = GB(5587),
      QB = GB(6635),
      oB = GB(5938);

    function jB(BB) {
      return jB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, jB(BB)
    }

    function yB() {
      return yB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, yB.apply(this, arguments)
    }

    function JB(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        var GB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != GB) {
          var YB, DB, QB, oB, jB = [],
            yB = !0,
            JB = !1;
          try {
            if (QB = (GB = GB.call(BB)).next, 0 === OB) {
              if (Object(GB) !== GB) return;
              yB = !1
            } else
              for (; !(yB = (YB = QB.call(GB)).done) && (jB.push(YB.value), jB.length !== OB); yB = !0);
          } catch (BB) {
            JB = !0, DB = BB
          } finally {
            try {
              if (!yB && null != GB.return && (oB = GB.return(), Object(oB) !== oB)) return
            } finally {
              if (JB) throw DB
            }
          }
          return jB
        }
      }(BB, OB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return MB(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return MB(BB, OB)
      }(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function MB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function PB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function zB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? PB(Object(GB), !0).forEach((function(OB) {
          lB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : PB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function lB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != jB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != jB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == jB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }
    var pB = function(BB, OB, GB, YB, DB) {
        var QB, oB = Math.min(Math.abs(GB) / 2, Math.abs(YB) / 2),
          jB = YB >= 0 ? 1 : -1,
          yB = GB >= 0 ? 1 : -1,
          JB = YB >= 0 && GB >= 0 || YB < 0 && GB < 0 ? 1 : 0;
        if (oB > 0 && DB instanceof Array) {
          for (var MB = [0, 0, 0, 0], PB = 0; PB < 4; PB++) MB[PB] = DB[PB] > oB ? oB : DB[PB];
          QB = "M".concat(BB, ",").concat(OB + jB * MB[0]), MB[0] > 0 && (QB += "A ".concat(MB[0], ",").concat(MB[0], ",0,0,").concat(JB, ",").concat(BB + yB * MB[0], ",").concat(OB)), QB += "L ".concat(BB + GB - yB * MB[1], ",").concat(OB), MB[1] > 0 && (QB += "A ".concat(MB[1], ",").concat(MB[1], ",0,0,").concat(JB, ",\n        ").concat(BB + GB, ",").concat(OB + jB * MB[1])), QB += "L ".concat(BB + GB, ",").concat(OB + YB - jB * MB[2]), MB[2] > 0 && (QB += "A ".concat(MB[2], ",").concat(MB[2], ",0,0,").concat(JB, ",\n        ").concat(BB + GB - yB * MB[2], ",").concat(OB + YB)), QB += "L ".concat(BB + yB * MB[3], ",").concat(OB + YB), MB[3] > 0 && (QB += "A ".concat(MB[3], ",").concat(MB[3], ",0,0,").concat(JB, ",\n        ").concat(BB, ",").concat(OB + YB - jB * MB[3])), QB += "Z"
        } else if (oB > 0 && DB === +DB && DB > 0) {
          var zB = Math.min(oB, DB);
          QB = "M ".concat(BB, ",").concat(OB + jB * zB, "\n            A ").concat(zB, ",").concat(zB, ",0,0,").concat(JB, ",").concat(BB + yB * zB, ",").concat(OB, "\n            L ").concat(BB + GB - yB * zB, ",").concat(OB, "\n            A ").concat(zB, ",").concat(zB, ",0,0,").concat(JB, ",").concat(BB + GB, ",").concat(OB + jB * zB, "\n            L ").concat(BB + GB, ",").concat(OB + YB - jB * zB, "\n            A ").concat(zB, ",").concat(zB, ",0,0,").concat(JB, ",").concat(BB + GB - yB * zB, ",").concat(OB + YB, "\n            L ").concat(BB + yB * zB, ",").concat(OB + YB, "\n            A ").concat(zB, ",").concat(zB, ",0,0,").concat(JB, ",").concat(BB, ",").concat(OB + YB - jB * zB, " Z")
        } else QB = "M ".concat(BB, ",").concat(OB, " h ").concat(GB, " v ").concat(YB, " h ").concat(-GB, " Z");
        return QB
      },
      qB = function(BB, OB) {
        if (!BB || !OB) return !1;
        var GB = BB.x,
          YB = BB.y,
          DB = OB.x,
          QB = OB.y,
          oB = OB.width,
          jB = OB.height;
        if (Math.abs(oB) > 0 && Math.abs(jB) > 0) {
          var yB = Math.min(DB, DB + oB),
            JB = Math.max(DB, DB + oB),
            MB = Math.min(QB, QB + jB),
            PB = Math.max(QB, QB + jB);
          return GB >= yB && GB <= JB && YB >= MB && YB <= PB
        }
        return !1
      },
      ZB = {
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
      NB = function(BB) {
        var OB = zB(zB({}, ZB), BB),
          GB = (0, YB.useRef)(),
          jB = JB((0, YB.useState)(-1), 2),
          MB = jB[0],
          PB = jB[1];
        (0, YB.useEffect)((function() {
          if (GB.current && GB.current.getTotalLength) try {
            var BB = GB.current.getTotalLength();
            BB && PB(BB)
          } catch (OB) {}
        }), []);
        var lB = OB.x,
          qB = OB.y,
          NB = OB.width,
          RB = OB.height,
          WB = OB.radius,
          AB = OB.className,
          VB = OB.animationEasing,
          SB = OB.animationDuration,
          nB = OB.animationBegin,
          UB = OB.isAnimationActive,
          fB = OB.isUpdateAnimationActive;
        if (lB !== +lB || qB !== +qB || NB !== +NB || RB !== +RB || 0 === NB || 0 === RB) return null;
        var kB = (0, DB.c)("recharts-rectangle", AB);
        return fB ? YB.createElement(QB.e, {
          canBegin: MB > 0,
          from: {
            width: NB,
            height: RB,
            x: lB,
            y: qB
          },
          to: {
            width: NB,
            height: RB,
            x: lB,
            y: qB
          },
          duration: SB,
          animationEasing: VB,
          isActive: fB
        }, (function(BB) {
          var DB = BB.width,
            jB = BB.height,
            JB = BB.x,
            PB = BB.y;
          return YB.createElement(QB.e, {
            canBegin: MB > 0,
            from: "0px ".concat(-1 === MB ? 1 : MB, "px"),
            to: "".concat(MB, "px 0px"),
            attributeName: "strokeDasharray",
            ZP: nB,
            duration: SB,
            isActive: UB,
            easing: VB
          }, YB.createElement("path", yB({}, (0, oB.e)(OB, !0), {
            className: kB,
            d: pB(JB, PB, DB, jB, WB),
            ref: GB
          })))
        })) : YB.createElement("path", yB({}, (0, oB.e)(OB, !0), {
          className: kB,
          d: pB(lB, qB, NB, RB, WB)
        }))
      }
  },
  6809: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => ZB
    });
    var YB = GB(56),
      DB = GB(5587),
      QB = GB(5938),
      oB = GB(6724),
      jB = GB(5671);

    function yB(BB) {
      return yB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, yB(BB)
    }

    function JB() {
      return JB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, JB.apply(this, arguments)
    }

    function MB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function PB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? MB(Object(GB), !0).forEach((function(OB) {
          zB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : MB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function zB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != yB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != yB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == yB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }
    var lB = function(BB) {
        var OB = BB.cx,
          GB = BB.cy,
          YB = BB.radius,
          DB = BB.angle,
          QB = BB.sign,
          jB = BB.isExternal,
          yB = BB.cornerRadius,
          JB = BB.cornerIsExternal,
          MB = yB * (jB ? 1 : -1) + YB,
          PB = Math.asin(yB / MB) / oB.b,
          zB = JB ? DB : DB + QB * PB,
          lB = JB ? DB - QB * PB : DB;
        return {
          center: (0, oB.e)(OB, GB, MB, zB),
          circleTangency: (0, oB.e)(OB, GB, YB, zB),
          lineTangency: (0, oB.e)(OB, GB, MB * Math.cos(PB * oB.b), lB),
          DP: PB
        }
      },
      pB = function(BB) {
        var OB = BB.cx,
          GB = BB.cy,
          YB = BB.innerRadius,
          DB = BB.outerRadius,
          QB = BB.startAngle,
          yB = function(BB, OB) {
            return (0, jB.J)(OB - BB) * Math.min(Math.abs(OB - BB), 359.999)
          }(QB, BB.endAngle),
          JB = QB + yB,
          MB = (0, oB.e)(OB, GB, DB, QB),
          PB = (0, oB.e)(OB, GB, DB, JB),
          zB = "M ".concat(MB.x, ",").concat(MB.y, "\n    A ").concat(DB, ",").concat(DB, ",0,\n    ").concat(+(Math.abs(yB) > 180), ",").concat(+(QB > JB), ",\n    ").concat(PB.x, ",").concat(PB.y, "\n  ");
        if (YB > 0) {
          var lB = (0, oB.e)(OB, GB, YB, QB),
            pB = (0, oB.e)(OB, GB, YB, JB);
          zB += "L ".concat(pB.x, ",").concat(pB.y, "\n            A ").concat(YB, ",").concat(YB, ",0,\n            ").concat(+(Math.abs(yB) > 180), ",").concat(+(QB <= JB), ",\n            ").concat(lB.x, ",").concat(lB.y, " Z")
        } else zB += "L ".concat(OB, ",").concat(GB, " Z");
        return zB
      },
      qB = {
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
      ZB = function(BB) {
        var OB = PB(PB({}, qB), BB),
          GB = OB.cx,
          oB = OB.cy,
          yB = OB.innerRadius,
          MB = OB.outerRadius,
          zB = OB.cornerRadius,
          ZB = OB.forceCornerRadius,
          NB = OB.cornerIsExternal,
          RB = OB.startAngle,
          WB = OB.endAngle,
          AB = OB.className;
        if (MB < yB || RB === WB) return null;
        var VB, SB = (0, DB.c)("recharts-sector", AB),
          nB = MB - yB,
          UB = (0, jB.p)(zB, nB, 0, !0);
        return VB = UB > 0 && Math.abs(RB - WB) < 360 ? function(BB) {
          var OB = BB.cx,
            GB = BB.cy,
            YB = BB.innerRadius,
            DB = BB.outerRadius,
            QB = BB.cornerRadius,
            oB = BB.forceCornerRadius,
            yB = BB.cornerIsExternal,
            JB = BB.startAngle,
            MB = BB.endAngle,
            PB = (0, jB.J)(MB - JB),
            zB = lB({
              cx: OB,
              cy: GB,
              radius: DB,
              angle: JB,
              sign: PB,
              cornerRadius: QB,
              cornerIsExternal: yB
            }),
            qB = zB.circleTangency,
            ZB = zB.lineTangency,
            NB = zB.DP,
            RB = lB({
              cx: OB,
              cy: GB,
              radius: DB,
              angle: MB,
              sign: -PB,
              cornerRadius: QB,
              cornerIsExternal: yB
            }),
            WB = RB.circleTangency,
            AB = RB.lineTangency,
            VB = RB.DP,
            SB = yB ? Math.abs(JB - MB) : Math.abs(JB - MB) - NB - VB;
          if (SB < 0) return oB ? "M ".concat(ZB.x, ",").concat(ZB.y, "\n        a").concat(QB, ",").concat(QB, ",0,0,1,").concat(2 * QB, ",0\n        a").concat(QB, ",").concat(QB, ",0,0,1,").concat(2 * -QB, ",0\n      ") : pB({
            cx: OB,
            cy: GB,
            innerRadius: YB,
            outerRadius: DB,
            startAngle: JB,
            endAngle: MB
          });
          var nB = "M ".concat(ZB.x, ",").concat(ZB.y, "\n    A").concat(QB, ",").concat(QB, ",0,0,").concat(+(PB < 0), ",").concat(qB.x, ",").concat(qB.y, "\n    A").concat(DB, ",").concat(DB, ",0,").concat(+(SB > 180), ",").concat(+(PB < 0), ",").concat(WB.x, ",").concat(WB.y, "\n    A").concat(QB, ",").concat(QB, ",0,0,").concat(+(PB < 0), ",").concat(AB.x, ",").concat(AB.y, "\n  ");
          if (YB > 0) {
            var UB = lB({
                cx: OB,
                cy: GB,
                radius: YB,
                angle: JB,
                sign: PB,
                isExternal: !0,
                cornerRadius: QB,
                cornerIsExternal: yB
              }),
              fB = UB.circleTangency,
              kB = UB.lineTangency,
              dB = UB.DP,
              KB = lB({
                cx: OB,
                cy: GB,
                radius: YB,
                angle: MB,
                sign: -PB,
                isExternal: !0,
                cornerRadius: QB,
                cornerIsExternal: yB
              }),
              uB = KB.circleTangency,
              mB = KB.lineTangency,
              IB = KB.DP,
              FB = yB ? Math.abs(JB - MB) : Math.abs(JB - MB) - dB - IB;
            if (FB < 0 && 0 === QB) return "".concat(nB, "L").concat(OB, ",").concat(GB, "Z");
            nB += "L".concat(mB.x, ",").concat(mB.y, "\n      A").concat(QB, ",").concat(QB, ",0,0,").concat(+(PB < 0), ",").concat(uB.x, ",").concat(uB.y, "\n      A").concat(YB, ",").concat(YB, ",0,").concat(+(FB > 180), ",").concat(+(PB > 0), ",").concat(fB.x, ",").concat(fB.y, "\n      A").concat(QB, ",").concat(QB, ",0,0,").concat(+(PB < 0), ",").concat(kB.x, ",").concat(kB.y, "Z")
          } else nB += "L".concat(OB, ",").concat(GB, "Z");
          return nB
        }({
          cx: GB,
          cy: oB,
          innerRadius: yB,
          outerRadius: MB,
          cornerRadius: Math.min(UB, nB / 2),
          forceCornerRadius: ZB,
          cornerIsExternal: NB,
          startAngle: RB,
          endAngle: WB
        }) : pB({
          cx: GB,
          cy: oB,
          innerRadius: yB,
          outerRadius: MB,
          startAngle: RB,
          endAngle: WB
        }), YB.createElement("path", JB({}, (0, QB.e)(OB, !0), {
          className: SB,
          d: VB,
          role: "img"
        }))
      }
  },
  6561: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => hB
    });
    var YB = GB(56),
      DB = GB(6566),
      QB = GB.n(DB);
    Math.abs, Math.atan2;
    const oB = Math.cos,
      jB = (Math.max, Math.min, Math.sin),
      yB = Math.sqrt,
      JB = Math.PI,
      MB = 2 * JB;
    const PB = {
        draw(BB, OB) {
          const GB = yB(OB / JB);
          BB.moveTo(GB, 0), BB.arc(0, 0, GB, 0, MB)
        }
      },
      zB = {
        draw(BB, OB) {
          const GB = yB(OB / 5) / 2;
          BB.moveTo(-3 * GB, -GB), BB.lineTo(-GB, -GB), BB.lineTo(-GB, -3 * GB), BB.lineTo(GB, -3 * GB), BB.lineTo(GB, -GB), BB.lineTo(3 * GB, -GB), BB.lineTo(3 * GB, GB), BB.lineTo(GB, GB), BB.lineTo(GB, 3 * GB), BB.lineTo(-GB, 3 * GB), BB.lineTo(-GB, GB), BB.lineTo(-3 * GB, GB), BB.closePath()
        }
      },
      lB = yB(1 / 3),
      pB = 2 * lB,
      qB = {
        draw(BB, OB) {
          const GB = yB(OB / pB),
            YB = GB * lB;
          BB.moveTo(0, -GB), BB.lineTo(YB, 0), BB.lineTo(0, GB), BB.lineTo(-YB, 0), BB.closePath()
        }
      },
      ZB = {
        draw(BB, OB) {
          const GB = yB(OB),
            YB = -GB / 2;
          BB.rect(YB, YB, GB, GB)
        }
      },
      NB = jB(JB / 10) / jB(7 * JB / 10),
      RB = jB(MB / 10) * NB,
      WB = -oB(MB / 10) * NB,
      AB = {
        draw(BB, OB) {
          const GB = yB(.8908130915292852 * OB),
            YB = RB * GB,
            DB = WB * GB;
          BB.moveTo(0, -GB), BB.lineTo(YB, DB);
          for (let QB = 1; QB < 5; ++QB) {
            const OB = MB * QB / 5,
              yB = oB(OB),
              JB = jB(OB);
            BB.lineTo(JB * GB, -yB * GB), BB.lineTo(yB * YB - JB * DB, JB * YB + yB * DB)
          }
          BB.closePath()
        }
      },
      VB = yB(3),
      SB = {
        draw(BB, OB) {
          const GB = -yB(OB / (3 * VB));
          BB.moveTo(0, 2 * GB), BB.lineTo(-VB * GB, -GB), BB.lineTo(VB * GB, -GB), BB.closePath()
        }
      },
      nB = -.5,
      UB = yB(3) / 2,
      fB = 1 / yB(12),
      kB = 3 * (fB / 2 + 1),
      dB = {
        draw(BB, OB) {
          const GB = yB(OB / kB),
            YB = GB / 2,
            DB = GB * fB,
            QB = YB,
            oB = GB * fB + GB,
            jB = -QB,
            JB = oB;
          BB.moveTo(YB, DB), BB.lineTo(QB, oB), BB.lineTo(jB, JB), BB.lineTo(nB * YB - UB * DB, UB * YB + nB * DB), BB.lineTo(nB * QB - UB * oB, UB * QB + nB * oB), BB.lineTo(nB * jB - UB * JB, UB * jB + nB * JB), BB.lineTo(nB * YB + UB * DB, nB * DB - UB * YB), BB.lineTo(nB * QB + UB * oB, nB * oB - UB * QB), BB.lineTo(nB * jB + UB * JB, nB * JB - UB * jB), BB.closePath()
        }
      };
    var KB = GB(6607),
      uB = GB(6615);
    yB(3), yB(3);
    var mB = GB(5587),
      IB = GB(5938);

    function FB(BB) {
      return FB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, FB(BB)
    }
    var iB = ["type", "size", "sizeType"];

    function LB() {
      return LB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, LB.apply(this, arguments)
    }

    function gB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function rB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? gB(Object(GB), !0).forEach((function(OB) {
          XB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : gB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function XB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != FB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != FB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == FB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function wB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }
    var EB = {
        symbolCircle: PB,
        symbolCross: zB,
        symbolDiamond: qB,
        symbolSquare: ZB,
        symbolStar: AB,
        symbolTriangle: SB,
        symbolWye: dB
      },
      cB = Math.PI / 180,
      hB = function(BB) {
        var OB = BB.type,
          GB = void 0 === OB ? "circle" : OB,
          DB = BB.size,
          oB = void 0 === DB ? 64 : DB,
          jB = BB.sizeType,
          yB = void 0 === jB ? "area" : jB,
          JB = rB(rB({}, wB(BB, iB)), {}, {
            type: GB,
            size: oB,
            sizeType: yB
          }),
          MB = JB.className,
          zB = JB.cx,
          lB = JB.cy,
          pB = (0, IB.e)(JB, !0);
        return zB === +zB && lB === +lB && oB === +oB ? YB.createElement("path", LB({}, pB, {
          className: (0, mB.c)("recharts-symbols", MB),
          transform: "translate(".concat(zB, ", ").concat(lB, ")"),
          d: function() {
            var BB = function(BB) {
                var OB = "symbol".concat(QB()(BB));
                return EB[OB] || PB
              }(GB),
              OB = function(BB, OB) {
                let GB = null,
                  YB = (0, uB.b)(DB);

                function DB() {
                  let DB;
                  if (GB || (GB = DB = YB()), BB.apply(this, arguments).draw(GB, +OB.apply(this, arguments)), DB) return GB = null, DB + "" || null
                }
                return BB = "function" === typeof BB ? BB : (0, KB.b)(BB || PB), OB = "function" === typeof OB ? OB : (0, KB.b)(void 0 === OB ? 64 : +OB), DB.type = function(OB) {
                  return arguments.length ? (BB = "function" === typeof OB ? OB : (0, KB.b)(OB), DB) : BB
                }, DB.size = function(BB) {
                  return arguments.length ? (OB = "function" === typeof BB ? BB : (0, KB.b)(+BB), DB) : OB
                }, DB.context = function(BB) {
                  return arguments.length ? (GB = null == BB ? null : BB, DB) : GB
                }, DB
              }().type(BB).size(function(BB, OB, GB) {
                if ("area" === OB) return BB;
                switch (GB) {
                  case "cross":
                    return 5 * BB * BB / 9;
                  case "diamond":
                    return .5 * BB * BB / Math.sqrt(3);
                  case "square":
                    return BB * BB;
                  case "star":
                    var YB = 18 * cB;
                    return 1.25 * BB * BB * (Math.tan(YB) - Math.tan(2 * YB) * Math.pow(Math.tan(YB), 2));
                  case "triangle":
                    return Math.sqrt(3) * BB * BB / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * BB * BB / 8;
                  default:
                    return Math.PI * BB * BB / 4
                }
              }(oB, yB, GB));
            return OB()
          }()
        })) : null
      };
    hB.registerSymbol = function(BB, OB) {
      EB["symbol".concat(QB()(BB))] = OB
    }
  },
  6783: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => XB,
      e: () => TB,
      i: () => wB,
      j: () => EB,
      m: () => cB
    });
    var YB = GB(56),
      DB = GB(5782),
      QB = GB.n(DB),
      oB = GB(6791),
      jB = GB.n(oB),
      yB = GB(6803),
      JB = GB.n(yB),
      MB = GB(6695),
      PB = GB.n(MB),
      zB = GB(6629),
      lB = GB(5587),
      pB = GB(6635),
      qB = GB(5938);

    function ZB(BB) {
      return ZB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, ZB(BB)
    }

    function NB() {
      return NB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB) Object.prototype.hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, NB.apply(this, arguments)
    }

    function RB(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        var GB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != GB) {
          var YB, DB, QB, oB, jB = [],
            yB = !0,
            JB = !1;
          try {
            if (QB = (GB = GB.call(BB)).next, 0 === OB) {
              if (Object(GB) !== GB) return;
              yB = !1
            } else
              for (; !(yB = (YB = QB.call(GB)).done) && (jB.push(YB.value), jB.length !== OB); yB = !0);
          } catch (BB) {
            JB = !0, DB = BB
          } finally {
            try {
              if (!yB && null != GB.return && (oB = GB.return(), Object(oB) !== oB)) return
            } finally {
              if (JB) throw DB
            }
          }
          return jB
        }
      }(BB, OB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return WB(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return WB(BB, OB)
      }(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function WB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function AB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function VB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? AB(Object(GB), !0).forEach((function(OB) {
          SB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : AB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function SB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != ZB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != ZB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == ZB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }
    var nB = function(BB, OB, GB, YB, DB) {
        var QB, oB = GB - YB;
        return QB = "M ".concat(BB, ",").concat(OB), QB += "L ".concat(BB + GB, ",").concat(OB), QB += "L ".concat(BB + GB - oB / 2, ",").concat(OB + DB), QB += "L ".concat(BB + GB - oB / 2 - YB, ",").concat(OB + DB), QB += "L ".concat(BB, ",").concat(OB, " Z")
      },
      UB = {
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
      fB = function(BB) {
        var OB = VB(VB({}, UB), BB),
          GB = (0, YB.useRef)(),
          DB = RB((0, YB.useState)(-1), 2),
          QB = DB[0],
          oB = DB[1];
        (0, YB.useEffect)((function() {
          if (GB.current && GB.current.getTotalLength) try {
            var BB = GB.current.getTotalLength();
            BB && oB(BB)
          } catch (OB) {}
        }), []);
        var jB = OB.x,
          yB = OB.y,
          JB = OB.upperWidth,
          MB = OB.lowerWidth,
          PB = OB.height,
          zB = OB.className,
          ZB = OB.animationEasing,
          WB = OB.animationDuration,
          AB = OB.animationBegin,
          SB = OB.isUpdateAnimationActive;
        if (jB !== +jB || yB !== +yB || JB !== +JB || MB !== +MB || PB !== +PB || 0 === JB && 0 === MB || 0 === PB) return null;
        var fB = (0, lB.c)("recharts-trapezoid", zB);
        return SB ? YB.createElement(pB.e, {
          canBegin: QB > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: PB,
            x: jB,
            y: yB
          },
          to: {
            upperWidth: JB,
            lowerWidth: MB,
            height: PB,
            x: jB,
            y: yB
          },
          duration: WB,
          animationEasing: ZB,
          isActive: SB
        }, (function(BB) {
          var DB = BB.upperWidth,
            oB = BB.lowerWidth,
            jB = BB.height,
            yB = BB.x,
            JB = BB.y;
          return YB.createElement(pB.e, {
            canBegin: QB > 0,
            from: "0px ".concat(-1 === QB ? 1 : QB, "px"),
            to: "".concat(QB, "px 0px"),
            attributeName: "strokeDasharray",
            ZP: AB,
            duration: WB,
            easing: ZB
          }, YB.createElement("path", NB({}, (0, qB.e)(OB, !0), {
            className: fB,
            d: nB(yB, JB, DB, oB, jB),
            ref: GB
          })))
        })) : YB.createElement("g", null, YB.createElement("path", NB({}, (0, qB.e)(OB, !0), {
          className: fB,
          d: nB(jB, yB, JB, MB, PB)
        })))
      },
      kB = GB(6809),
      dB = GB(6468),
      KB = GB(6561),
      uB = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function mB(BB) {
      return mB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, mB(BB)
    }

    function IB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function FB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function iB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? FB(Object(GB), !0).forEach((function(OB) {
          LB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : FB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function LB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != mB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != mB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == mB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function gB(BB, OB) {
      return iB(iB({}, OB), BB)
    }

    function rB(BB) {
      var OB = BB.shapeType,
        GB = BB.elementProps;
      switch (OB) {
        case "rectangle":
          return YB.createElement(zB.c, GB);
        case "trapezoid":
          return YB.createElement(fB, GB);
        case "sector":
          return YB.createElement(kB.c, GB);
        case "symbols":
          if (function(BB) {
              return "symbols" === BB
            }(OB)) return YB.createElement(KB.e, GB);
          break;
        default:
          return null
      }
    }

    function XB(BB) {
      var OB, GB = BB.option,
        DB = BB.shapeType,
        oB = BB.propTransformer,
        yB = void 0 === oB ? gB : oB,
        MB = BB.activeClassName,
        PB = void 0 === MB ? "recharts-active-shape" : MB,
        zB = BB.isActive,
        lB = IB(BB, uB);
      if ((0, YB.isValidElement)(GB)) OB = (0, YB.cloneElement)(GB, iB(iB({}, lB), function(BB) {
        return (0, YB.isValidElement)(BB) ? BB.props : BB
      }(GB)));
      else if (QB()(GB)) OB = GB(lB);
      else if (jB()(GB) && !JB()(GB)) {
        var pB = yB(GB, lB);
        OB = YB.createElement(rB, {
          shapeType: DB,
          elementProps: pB
        })
      } else {
        var qB = lB;
        OB = YB.createElement(rB, {
          shapeType: DB,
          elementProps: qB
        })
      }
      return zB ? YB.createElement(dB.b, {
        className: PB
      }, OB) : OB
    }

    function wB(BB, OB) {
      return null != OB && "trapezoids" in BB.props
    }

    function EB(BB, OB) {
      return null != OB && "sectors" in BB.props
    }

    function cB(BB, OB) {
      return null != OB && "points" in BB.props
    }

    function hB(BB, OB) {
      var GB, YB, DB = BB.x === (null === OB || void 0 === OB || null === (GB = OB.labelViewBox) || void 0 === GB ? void 0 : GB.x) || BB.x === OB.x,
        QB = BB.y === (null === OB || void 0 === OB || null === (YB = OB.labelViewBox) || void 0 === YB ? void 0 : YB.y) || BB.y === OB.y;
      return DB && QB
    }

    function aB(BB, OB) {
      var GB = BB.endAngle === OB.endAngle,
        YB = BB.startAngle === OB.startAngle;
      return GB && YB
    }

    function eB(BB, OB) {
      var GB = BB.x === OB.x,
        YB = BB.y === OB.y,
        DB = BB.z === OB.z;
      return GB && YB && DB
    }

    function TB(BB) {
      var OB = BB.activeTooltipItem,
        GB = BB.graphicalItem,
        YB = BB.itemData,
        DB = function(BB, OB) {
          var GB;
          return wB(BB, OB) ? GB = "trapezoids" : EB(BB, OB) ? GB = "sectors" : cB(BB, OB) && (GB = "points"), GB
        }(GB, OB),
        QB = function(BB, OB) {
          var GB, YB;
          return wB(BB, OB) ? null === (GB = OB.tooltipPayload) || void 0 === GB || null === (GB = GB[0]) || void 0 === GB || null === (GB = GB.payload) || void 0 === GB ? void 0 : GB.payload : EB(BB, OB) ? null === (YB = OB.tooltipPayload) || void 0 === YB || null === (YB = YB[0]) || void 0 === YB || null === (YB = YB.payload) || void 0 === YB ? void 0 : YB.payload : cB(BB, OB) ? OB.payload : {}
        }(GB, OB),
        oB = YB.filter((function(BB, YB) {
          var oB = PB()(QB, BB),
            jB = GB.props[DB].filter((function(BB) {
              var YB = function(BB, OB) {
                var GB;
                return wB(BB, OB) ? GB = hB : EB(BB, OB) ? GB = aB : cB(BB, OB) && (GB = eB), GB
              }(GB, OB);
              return YB(BB, OB)
            })),
            yB = GB.props[DB].indexOf(jB[jB.length - 1]);
          return oB && YB === yB
        }));
      return YB.indexOf(oB[oB.length - 1])
    }
  },
  6732: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => VB,
      i: () => NB,
      k: () => SB,
      l: () => WB,
      p: () => RB
    });
    var YB = GB(6736),
      DB = GB.n(YB),
      QB = GB(6745),
      oB = GB.n(QB),
      jB = GB(6648),
      yB = GB(5938),
      JB = GB(5671),
      MB = GB(6764);

    function PB(BB) {
      return PB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, PB(BB)
    }

    function zB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, ZB(YB.key), YB)
      }
    }

    function lB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function pB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? lB(Object(GB), !0).forEach((function(OB) {
          qB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : lB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function qB(BB, OB, GB) {
      return (OB = ZB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function ZB(BB) {
      var OB = function(BB, OB) {
        if ("object" != PB(BB) || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != PB(YB)) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == PB(OB) ? OB : OB + ""
    }
    var NB = function(BB, OB, GB, YB, DB) {
        var QB = BB.width,
          oB = BB.height,
          PB = BB.layout,
          zB = BB.children,
          lB = Object.keys(OB),
          ZB = {
            left: GB.left,
            leftMirror: GB.left,
            right: QB - GB.right,
            rightMirror: QB - GB.right,
            top: GB.top,
            topMirror: GB.top,
            bottom: oB - GB.bottom,
            bottomMirror: oB - GB.bottom
          },
          NB = !!(0, yB.m)(zB, MB.d);
        return lB.reduce((function(QB, oB) {
          var yB, MB, zB, lB, RB, WB = OB[oB],
            AB = WB.orientation,
            VB = WB.domain,
            SB = WB.padding,
            nB = void 0 === SB ? {} : SB,
            UB = WB.mirror,
            fB = WB.reversed,
            kB = "".concat(AB).concat(UB ? "Mirror" : "");
          if ("number" === WB.type && ("gap" === WB.padding || "no-gap" === WB.padding)) {
            var dB = VB[1] - VB[0],
              KB = 1 / 0,
              uB = WB.categoricalDomain.sort(JB.d);
            if (uB.forEach((function(BB, OB) {
                OB > 0 && (KB = Math.min((BB || 0) - (uB[OB - 1] || 0), KB))
              })), Number.isFinite(KB)) {
              var mB = KB / dB,
                IB = "vertical" === WB.layout ? GB.height : GB.width;
              if ("gap" === WB.padding && (yB = mB * IB / 2), "no-gap" === WB.padding) {
                var FB = (0, JB.p)(BB.barCategoryGap, mB * IB),
                  iB = mB * IB / 2;
                yB = iB - FB - (iB - FB) / IB * FB
              }
            }
          }
          MB = "xAxis" === YB ? [GB.left + (nB.left || 0) + (yB || 0), GB.left + GB.width - (nB.right || 0) - (yB || 0)] : "yAxis" === YB ? "horizontal" === PB ? [GB.top + GB.height - (nB.bottom || 0), GB.top + (nB.top || 0)] : [GB.top + (nB.top || 0) + (yB || 0), GB.top + GB.height - (nB.bottom || 0) - (yB || 0)] : WB.range, fB && (MB = [MB[1], MB[0]]);
          var LB = (0, jB.ob)(WB, DB, NB),
            gB = LB.scale,
            rB = LB.realScaleType;
          gB.domain(VB).range(MB), (0, jB.f)(gB);
          var XB = (0, jB.$)(gB, pB(pB({}, WB), {}, {
            realScaleType: rB
          }));
          "xAxis" === YB ? (RB = "top" === AB && !UB || "bottom" === AB && UB, zB = GB.left, lB = ZB[kB] - RB * WB.height) : "yAxis" === YB && (RB = "left" === AB && !UB || "right" === AB && UB, zB = ZB[kB] - RB * WB.width, lB = GB.top);
          var wB = pB(pB(pB({}, WB), XB), {}, {
            realScaleType: rB,
            x: zB,
            y: lB,
            scale: gB,
            width: "xAxis" === YB ? GB.width : WB.width,
            height: "yAxis" === YB ? GB.height : WB.height
          });
          return wB.bandSize = (0, jB.q)(wB, XB), WB.hide || "xAxis" !== YB ? WB.hide || (ZB[kB] += (RB ? -1 : 1) * wB.width) : ZB[kB] += (RB ? -1 : 1) * wB.height, pB(pB({}, QB), {}, qB({}, oB, wB))
        }), {})
      },
      RB = function(BB, OB) {
        var GB = BB.x,
          YB = BB.y,
          DB = OB.x,
          QB = OB.y;
        return {
          x: Math.min(GB, DB),
          y: Math.min(YB, QB),
          width: Math.abs(DB - GB),
          height: Math.abs(QB - YB)
        }
      },
      WB = function(BB) {
        var OB = BB.x1,
          GB = BB.y1,
          YB = BB.x2,
          DB = BB.y2;
        return RB({
          x: OB,
          y: GB
        }, {
          x: YB,
          y: DB
        })
      },
      AB = function() {
        function BB(OB) {
          ! function(BB, OB) {
            if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
          }(this, BB), this.scale = OB
        }
        return OB = BB, GB = [{
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
            var OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              GB = OB.bandAware,
              YB = OB.position;
            if (void 0 !== BB) {
              if (YB) switch (YB) {
                case "start":
                default:
                  return this.scale(BB);
                case "middle":
                  var DB = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(BB) + DB;
                case "end":
                  var QB = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(BB) + QB
              }
              if (GB) {
                var oB = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(BB) + oB
              }
              return this.scale(BB)
            }
          }
        }, {
          key: "isInRange",
          value: function(BB) {
            var OB = this.range(),
              GB = OB[0],
              YB = OB[OB.length - 1];
            return GB <= YB ? BB >= GB && BB <= YB : BB >= YB && BB <= GB
          }
        }], YB = [{
          key: "create",
          value: function(OB) {
            return new BB(OB)
          }
        }], GB && zB(OB.prototype, GB), YB && zB(OB, YB), Object.defineProperty(OB, "prototype", {
          writable: !1
        }), OB;
        var OB, GB, YB
      }();
    qB(AB, "EPS", 1e-4);
    var VB = function(BB) {
      var OB = Object.keys(BB).reduce((function(OB, GB) {
        return pB(pB({}, OB), {}, qB({}, GB, AB.create(BB[GB])))
      }), {});
      return pB(pB({}, OB), {}, {
        apply: function(BB) {
          var GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            YB = GB.bandAware,
            QB = GB.position;
          return DB()(BB, (function(BB, GB) {
            return OB[GB].apply(BB, {
              bandAware: YB,
              position: QB
            })
          }))
        },
        isInRange: function(BB) {
          return oB()(BB, (function(BB, GB) {
            return OB[GB].isInRange(BB)
          }))
        }
      })
    };
    var SB = function(BB) {
      var OB = BB.width,
        GB = BB.height,
        YB = function(BB) {
          return (BB % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        DB = YB * Math.PI / 180,
        QB = Math.atan(GB / OB),
        oB = DB > QB && DB < Math.PI - QB ? GB / Math.sin(DB) : OB / Math.cos(DB);
      return Math.abs(oB)
    }
  },
  6648: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => io,
      d: () => uo,
      f: () => To,
      i: () => ho,
      m: () => bo,
      q: () => jj,
      u: () => Fo,
      v: () => Io,
      y: () => Oj,
      z: () => Bj,
      B: () => to,
      F: () => wo,
      I: () => Ko,
      M: () => ro,
      N: () => Yj,
      O: () => mo,
      Q: () => so,
      U: () => Gj,
      Y: () => Eo,
      $: () => xo,
      ab: () => Jj,
      eb: () => ko,
      gb: () => Xo,
      hb: () => yj,
      lb: () => go,
      ob: () => ao,
      qb: () => oj,
      tb: () => Co
    });
    var YB = {};
    GB.r(YB), GB.d(YB, {
      scaleBand: () => DB.e,
      scaleDiverging: () => yQ,
      scaleDivergingLog: () => JQ,
      scaleDivergingPow: () => PQ,
      scaleDivergingSqrt: () => zQ,
      scaleDivergingSymlog: () => MQ,
      scaleIdentity: () => HO,
      scaleImplicit: () => JG.h,
      scaleLinear: () => CO,
      scaleLog: () => DG,
      scaleOrdinal: () => JG.e,
      scalePoint: () => DB.i,
      scalePow: () => pG,
      scaleQuantile: () => kG,
      scaleQuantize: () => dG,
      scaleRadial: () => NG,
      scaleSequential: () => OQ,
      scaleSequentialLog: () => GQ,
      scaleSequentialPow: () => DQ,
      scaleSequentialQuantile: () => oQ,
      scaleSequentialSqrt: () => QQ,
      scaleSequentialSymlog: () => YQ,
      scaleSqrt: () => qG,
      scaleSymlog: () => yG,
      scaleThreshold: () => KG,
      scaleTime: () => sD,
      scaleUtc: () => xD,
      tickFormat: () => TO
    });
    var DB = GB(6652);
    const QB = Math.sqrt(50),
      oB = Math.sqrt(10),
      jB = Math.sqrt(2);

    function yB(BB, OB, GB) {
      const YB = (OB - BB) / Math.max(0, GB),
        DB = Math.floor(Math.log10(YB)),
        JB = YB / Math.pow(10, DB),
        MB = JB >= QB ? 10 : JB >= oB ? 5 : JB >= jB ? 2 : 1;
      let PB, zB, lB;
      return DB < 0 ? (lB = Math.pow(10, -DB) / MB, PB = Math.round(BB * lB), zB = Math.round(OB * lB), PB / lB < BB && ++PB, zB / lB > OB && --zB, lB = -lB) : (lB = Math.pow(10, DB) * MB, PB = Math.round(BB / lB), zB = Math.round(OB / lB), PB * lB < BB && ++PB, zB * lB > OB && --zB), zB < PB && .5 <= GB && GB < 2 ? yB(BB, OB, 2 * GB) : [PB, zB, lB]
    }

    function JB(BB, OB, GB) {
      if (!((GB = +GB) > 0)) return [];
      if ((BB = +BB) === (OB = +OB)) return [BB];
      const YB = OB < BB,
        [DB, QB, oB] = YB ? yB(OB, BB, GB) : yB(BB, OB, GB);
      if (!(QB >= DB)) return [];
      const jB = QB - DB + 1,
        JB = new Array(jB);
      if (YB)
        if (oB < 0)
          for (let yB = 0; yB < jB; ++yB) JB[yB] = (QB - yB) / -oB;
        else
          for (let yB = 0; yB < jB; ++yB) JB[yB] = (QB - yB) * oB;
      else if (oB < 0)
        for (let yB = 0; yB < jB; ++yB) JB[yB] = (DB + yB) / -oB;
      else
        for (let yB = 0; yB < jB; ++yB) JB[yB] = (DB + yB) * oB;
      return JB
    }

    function MB(BB, OB, GB) {
      return yB(BB = +BB, OB = +OB, GB = +GB)[2]
    }

    function PB(BB, OB, GB) {
      GB = +GB;
      const YB = (OB = +OB) < (BB = +BB),
        DB = YB ? MB(OB, BB, GB) : MB(BB, OB, GB);
      return (YB ? -1 : 1) * (DB < 0 ? 1 / -DB : DB)
    }

    function zB(BB, OB) {
      return null == BB || null == OB ? NaN : BB < OB ? -1 : BB > OB ? 1 : BB >= OB ? 0 : NaN
    }

    function lB(BB, OB) {
      return null == BB || null == OB ? NaN : OB < BB ? -1 : OB > BB ? 1 : OB >= BB ? 0 : NaN
    }

    function pB(BB) {
      let OB, GB, YB;

      function DB(BB, YB) {
        let DB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
        if (DB < QB) {
          if (0 !== OB(YB, YB)) return QB;
          do {
            const OB = DB + QB >>> 1;
            GB(BB[OB], YB) < 0 ? DB = OB + 1 : QB = OB
          } while (DB < QB)
        }
        return DB
      }
      return 2 !== BB.length ? (OB = zB, GB = (OB, GB) => zB(BB(OB), GB), YB = (OB, GB) => BB(OB) - GB) : (OB = BB === zB || BB === lB ? BB : qB, GB = BB, YB = BB), {
        left: DB,
        center: function(BB, OB) {
          let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const QB = DB(BB, OB, GB, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length) - 1);
          return QB > GB && YB(BB[QB - 1], OB) > -YB(BB[QB], OB) ? QB - 1 : QB
        },
        right: function(BB, YB) {
          let DB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          if (DB < QB) {
            if (0 !== OB(YB, YB)) return QB;
            do {
              const OB = DB + QB >>> 1;
              GB(BB[OB], YB) <= 0 ? DB = OB + 1 : QB = OB
            } while (DB < QB)
          }
          return DB
        }
      }
    }

    function qB() {
      return 0
    }

    function ZB(BB) {
      return null === BB ? NaN : +BB
    }
    const NB = pB(zB),
      RB = NB.right,
      WB = (NB.left, pB(ZB).center, RB);

    function AB(BB, OB, GB) {
      BB.prototype = OB.prototype = GB, GB.constructor = BB
    }

    function VB(BB, OB) {
      var GB = Object.create(BB.prototype);
      for (var YB in OB) GB[YB] = OB[YB];
      return GB
    }

    function SB() {}
    var nB = .7,
      UB = 1 / nB,
      fB = "\\s*([+-]?\\d+)\\s*",
      kB = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      dB = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      KB = /^#([0-9a-f]{3,8})$/,
      uB = new RegExp(`^rgb\\(${fB},${fB},${fB}\\)$`),
      mB = new RegExp(`^rgb\\(${dB},${dB},${dB}\\)$`),
      IB = new RegExp(`^rgba\\(${fB},${fB},${fB},${kB}\\)$`),
      FB = new RegExp(`^rgba\\(${dB},${dB},${dB},${kB}\\)$`),
      iB = new RegExp(`^hsl\\(${kB},${dB},${dB}\\)$`),
      LB = new RegExp(`^hsla\\(${kB},${dB},${dB},${kB}\\)$`),
      gB = {
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

    function rB() {
      return this.rgb().formatHex()
    }

    function XB() {
      return this.rgb().formatRgb()
    }

    function wB(BB) {
      var OB, GB;
      return BB = (BB + "").trim().toLowerCase(), (OB = KB.exec(BB)) ? (GB = OB[1].length, OB = parseInt(OB[1], 16), 6 === GB ? EB(OB) : 3 === GB ? new aB(OB >> 8 & 15 | OB >> 4 & 240, OB >> 4 & 15 | 240 & OB, (15 & OB) << 4 | 15 & OB, 1) : 8 === GB ? cB(OB >> 24 & 255, OB >> 16 & 255, OB >> 8 & 255, (255 & OB) / 255) : 4 === GB ? cB(OB >> 12 & 15 | OB >> 8 & 240, OB >> 8 & 15 | OB >> 4 & 240, OB >> 4 & 15 | 240 & OB, ((15 & OB) << 4 | 15 & OB) / 255) : null) : (OB = uB.exec(BB)) ? new aB(OB[1], OB[2], OB[3], 1) : (OB = mB.exec(BB)) ? new aB(255 * OB[1] / 100, 255 * OB[2] / 100, 255 * OB[3] / 100, 1) : (OB = IB.exec(BB)) ? cB(OB[1], OB[2], OB[3], OB[4]) : (OB = FB.exec(BB)) ? cB(255 * OB[1] / 100, 255 * OB[2] / 100, 255 * OB[3] / 100, OB[4]) : (OB = iB.exec(BB)) ? vB(OB[1], OB[2] / 100, OB[3] / 100, 1) : (OB = LB.exec(BB)) ? vB(OB[1], OB[2] / 100, OB[3] / 100, OB[4]) : gB.hasOwnProperty(BB) ? EB(gB[BB]) : "transparent" === BB ? new aB(NaN, NaN, NaN, 0) : null
    }

    function EB(BB) {
      return new aB(BB >> 16 & 255, BB >> 8 & 255, 255 & BB, 1)
    }

    function cB(BB, OB, GB, YB) {
      return YB <= 0 && (BB = OB = GB = NaN), new aB(BB, OB, GB, YB)
    }

    function hB(BB, OB, GB, YB) {
      return 1 === arguments.length ? ((DB = BB) instanceof SB || (DB = wB(DB)), DB ? new aB((DB = DB.rgb()).r, DB.g, DB.b, DB.opacity) : new aB) : new aB(BB, OB, GB, null == YB ? 1 : YB);
      var DB
    }

    function aB(BB, OB, GB, YB) {
      this.r = +BB, this.g = +OB, this.b = +GB, this.opacity = +YB
    }

    function eB() {
      return `#${HB(this.r)}${HB(this.g)}${HB(this.b)}`
    }

    function TB() {
      const BB = bB(this.opacity);
      return `${1===BB?"rgb(":"rgba("}${CB(this.r)}, ${CB(this.g)}, ${CB(this.b)}${1===BB?")":`, ${BB})`}`
    }

    function bB(BB) {
      return isNaN(BB) ? 1 : Math.max(0, Math.min(1, BB))
    }

    function CB(BB) {
      return Math.max(0, Math.min(255, Math.round(BB) || 0))
    }

    function HB(BB) {
      return ((BB = CB(BB)) < 16 ? "0" : "") + BB.toString(16)
    }

    function vB(BB, OB, GB, YB) {
      return YB <= 0 ? BB = OB = GB = NaN : GB <= 0 || GB >= 1 ? BB = OB = NaN : OB <= 0 && (BB = NaN), new xB(BB, OB, GB, YB)
    }

    function sB(BB) {
      if (BB instanceof xB) return new xB(BB.h, BB.s, BB.l, BB.opacity);
      if (BB instanceof SB || (BB = wB(BB)), !BB) return new xB;
      if (BB instanceof xB) return BB;
      var OB = (BB = BB.rgb()).r / 255,
        GB = BB.g / 255,
        YB = BB.b / 255,
        DB = Math.min(OB, GB, YB),
        QB = Math.max(OB, GB, YB),
        oB = NaN,
        jB = QB - DB,
        yB = (QB + DB) / 2;
      return jB ? (oB = OB === QB ? (GB - YB) / jB + 6 * (GB < YB) : GB === QB ? (YB - OB) / jB + 2 : (OB - GB) / jB + 4, jB /= yB < .5 ? QB + DB : 2 - QB - DB, oB *= 60) : jB = yB > 0 && yB < 1 ? 0 : oB, new xB(oB, jB, yB, BB.opacity)
    }

    function xB(BB, OB, GB, YB) {
      this.h = +BB, this.s = +OB, this.l = +GB, this.opacity = +YB
    }

    function tB(BB) {
      return (BB = (BB || 0) % 360) < 0 ? BB + 360 : BB
    }

    function BO(BB) {
      return Math.max(0, Math.min(1, BB || 0))
    }

    function OO(BB, OB, GB) {
      return 255 * (BB < 60 ? OB + (GB - OB) * BB / 60 : BB < 180 ? GB : BB < 240 ? OB + (GB - OB) * (240 - BB) / 60 : OB)
    }

    function GO(BB, OB, GB, YB, DB) {
      var QB = BB * BB,
        oB = QB * BB;
      return ((1 - 3 * BB + 3 * QB - oB) * OB + (4 - 6 * QB + 3 * oB) * GB + (1 + 3 * BB + 3 * QB - 3 * oB) * YB + oB * DB) / 6
    }
    AB(SB, wB, {
      copy(BB) {
        return Object.assign(new this.constructor, this, BB)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: rB,
      formatHex: rB,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return sB(this).formatHsl()
      },
      formatRgb: XB,
      toString: XB
    }), AB(aB, hB, VB(SB, {
      brighter(BB) {
        return BB = null == BB ? UB : Math.pow(UB, BB), new aB(this.r * BB, this.g * BB, this.b * BB, this.opacity)
      },
      darker(BB) {
        return BB = null == BB ? nB : Math.pow(nB, BB), new aB(this.r * BB, this.g * BB, this.b * BB, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new aB(CB(this.r), CB(this.g), CB(this.b), bB(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: eB,
      formatHex: eB,
      formatHex8: function() {
        return `#${HB(this.r)}${HB(this.g)}${HB(this.b)}${HB(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: TB,
      toString: TB
    })), AB(xB, (function(BB, OB, GB, YB) {
      return 1 === arguments.length ? sB(BB) : new xB(BB, OB, GB, null == YB ? 1 : YB)
    }), VB(SB, {
      brighter(BB) {
        return BB = null == BB ? UB : Math.pow(UB, BB), new xB(this.h, this.s, this.l * BB, this.opacity)
      },
      darker(BB) {
        return BB = null == BB ? nB : Math.pow(nB, BB), new xB(this.h, this.s, this.l * BB, this.opacity)
      },
      rgb() {
        var BB = this.h % 360 + 360 * (this.h < 0),
          OB = isNaN(BB) || isNaN(this.s) ? 0 : this.s,
          GB = this.l,
          YB = GB + (GB < .5 ? GB : 1 - GB) * OB,
          DB = 2 * GB - YB;
        return new aB(OO(BB >= 240 ? BB - 240 : BB + 120, DB, YB), OO(BB, DB, YB), OO(BB < 120 ? BB + 240 : BB - 120, DB, YB), this.opacity)
      },
      clamp() {
        return new xB(tB(this.h), BO(this.s), BO(this.l), bB(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const BB = bB(this.opacity);
        return `${1===BB?"hsl(":"hsla("}${tB(this.h)}, ${100*BO(this.s)}%, ${100*BO(this.l)}%${1===BB?")":`, ${BB})`}`
      }
    }));
    const YO = BB => () => BB;

    function DO(BB, OB) {
      return function(GB) {
        return BB + GB * OB
      }
    }

    function QO(BB) {
      return 1 === (BB = +BB) ? oO : function(OB, GB) {
        return GB - OB ? function(BB, OB, GB) {
          return BB = Math.pow(BB, GB), OB = Math.pow(OB, GB) - BB, GB = 1 / GB,
            function(YB) {
              return Math.pow(BB + YB * OB, GB)
            }
        }(OB, GB, BB) : YO(isNaN(OB) ? GB : OB)
      }
    }

    function oO(BB, OB) {
      var GB = OB - BB;
      return GB ? DO(BB, GB) : YO(isNaN(BB) ? OB : BB)
    }
    const jO = function BB(OB) {
      var GB = QO(OB);

      function YB(BB, OB) {
        var YB = GB((BB = hB(BB)).r, (OB = hB(OB)).r),
          DB = GB(BB.g, OB.g),
          QB = GB(BB.b, OB.b),
          oB = oO(BB.opacity, OB.opacity);
        return function(OB) {
          return BB.r = YB(OB), BB.g = DB(OB), BB.b = QB(OB), BB.opacity = oB(OB), BB + ""
        }
      }
      return YB.gamma = BB, YB
    }(1);

    function yO(BB) {
      return function(OB) {
        var GB, YB, DB = OB.length,
          QB = new Array(DB),
          oB = new Array(DB),
          jB = new Array(DB);
        for (GB = 0; GB < DB; ++GB) YB = hB(OB[GB]), QB[GB] = YB.r || 0, oB[GB] = YB.g || 0, jB[GB] = YB.b || 0;
        return QB = BB(QB), oB = BB(oB), jB = BB(jB), YB.opacity = 1,
          function(BB) {
            return YB.r = QB(BB), YB.g = oB(BB), YB.b = jB(BB), YB + ""
          }
      }
    }
    yO((function(BB) {
      var OB = BB.length - 1;
      return function(GB) {
        var YB = GB <= 0 ? GB = 0 : GB >= 1 ? (GB = 1, OB - 1) : Math.floor(GB * OB),
          DB = BB[YB],
          QB = BB[YB + 1],
          oB = YB > 0 ? BB[YB - 1] : 2 * DB - QB,
          jB = YB < OB - 1 ? BB[YB + 2] : 2 * QB - DB;
        return GO((GB - YB / OB) * OB, oB, DB, QB, jB)
      }
    })), yO((function(BB) {
      var OB = BB.length;
      return function(GB) {
        var YB = Math.floor(((GB %= 1) < 0 ? ++GB : GB) * OB),
          DB = BB[(YB + OB - 1) % OB],
          QB = BB[YB % OB],
          oB = BB[(YB + 1) % OB],
          jB = BB[(YB + 2) % OB];
        return GO((GB - YB / OB) * OB, DB, QB, oB, jB)
      }
    }));

    function JO(BB, OB) {
      var GB, YB = OB ? OB.length : 0,
        DB = BB ? Math.min(YB, BB.length) : 0,
        QB = new Array(DB),
        oB = new Array(YB);
      for (GB = 0; GB < DB; ++GB) QB[GB] = NO(BB[GB], OB[GB]);
      for (; GB < YB; ++GB) oB[GB] = OB[GB];
      return function(BB) {
        for (GB = 0; GB < DB; ++GB) oB[GB] = QB[GB](BB);
        return oB
      }
    }

    function MO(BB, OB) {
      var GB = new Date;
      return BB = +BB, OB = +OB,
        function(YB) {
          return GB.setTime(BB * (1 - YB) + OB * YB), GB
        }
    }

    function PO(BB, OB) {
      return BB = +BB, OB = +OB,
        function(GB) {
          return BB * (1 - GB) + OB * GB
        }
    }

    function zO(BB, OB) {
      var GB, YB = {},
        DB = {};
      for (GB in null !== BB && "object" === typeof BB || (BB = {}), null !== OB && "object" === typeof OB || (OB = {}), OB) GB in BB ? YB[GB] = NO(BB[GB], OB[GB]) : DB[GB] = OB[GB];
      return function(BB) {
        for (GB in YB) DB[GB] = YB[GB](BB);
        return DB
      }
    }
    var lO = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      pO = new RegExp(lO.source, "g");

    function qO(BB, OB) {
      var GB, YB, DB, QB = lO.lastIndex = pO.lastIndex = 0,
        oB = -1,
        jB = [],
        yB = [];
      for (BB += "", OB += "";
        (GB = lO.exec(BB)) && (YB = pO.exec(OB));)(DB = YB.index) > QB && (DB = OB.slice(QB, DB), jB[oB] ? jB[oB] += DB : jB[++oB] = DB), (GB = GB[0]) === (YB = YB[0]) ? jB[oB] ? jB[oB] += YB : jB[++oB] = YB : (jB[++oB] = null, yB.push({
        i: oB,
        x: PO(GB, YB)
      })), QB = pO.lastIndex;
      return QB < OB.length && (DB = OB.slice(QB), jB[oB] ? jB[oB] += DB : jB[++oB] = DB), jB.length < 2 ? yB[0] ? function(BB) {
        return function(OB) {
          return BB(OB) + ""
        }
      }(yB[0].x) : function(BB) {
        return function() {
          return BB
        }
      }(OB) : (OB = yB.length, function(BB) {
        for (var GB, YB = 0; YB < OB; ++YB) jB[(GB = yB[YB]).i] = GB.x(BB);
        return jB.join("")
      })
    }

    function ZO(BB, OB) {
      OB || (OB = []);
      var GB, YB = BB ? Math.min(OB.length, BB.length) : 0,
        DB = OB.slice();
      return function(QB) {
        for (GB = 0; GB < YB; ++GB) DB[GB] = BB[GB] * (1 - QB) + OB[GB] * QB;
        return DB
      }
    }

    function NO(BB, OB) {
      var GB, YB, DB = typeof OB;
      return null == OB || "boolean" === DB ? YO(OB) : ("number" === DB ? PO : "string" === DB ? (GB = wB(OB)) ? (OB = GB, jO) : qO : OB instanceof wB ? jO : OB instanceof Date ? MO : (YB = OB, !ArrayBuffer.isView(YB) || YB instanceof DataView ? Array.isArray(OB) ? JO : "function" !== typeof OB.valueOf && "function" !== typeof OB.toString || isNaN(OB) ? zO : PO : ZO))(BB, OB)
    }

    function RO(BB, OB) {
      return BB = +BB, OB = +OB,
        function(GB) {
          return Math.round(BB * (1 - GB) + OB * GB)
        }
    }

    function WO(BB) {
      return +BB
    }
    var AO = [0, 1];

    function VO(BB) {
      return BB
    }

    function SO(BB, OB) {
      return (OB -= BB = +BB) ? function(GB) {
        return (GB - BB) / OB
      } : (GB = isNaN(OB) ? NaN : .5, function() {
        return GB
      });
      var GB
    }

    function nO(BB, OB, GB) {
      var YB = BB[0],
        DB = BB[1],
        QB = OB[0],
        oB = OB[1];
      return DB < YB ? (YB = SO(DB, YB), QB = GB(oB, QB)) : (YB = SO(YB, DB), QB = GB(QB, oB)),
        function(BB) {
          return QB(YB(BB))
        }
    }

    function UO(BB, OB, GB) {
      var YB = Math.min(BB.length, OB.length) - 1,
        DB = new Array(YB),
        QB = new Array(YB),
        oB = -1;
      for (BB[YB] < BB[0] && (BB = BB.slice().reverse(), OB = OB.slice().reverse()); ++oB < YB;) DB[oB] = SO(BB[oB], BB[oB + 1]), QB[oB] = GB(OB[oB], OB[oB + 1]);
      return function(OB) {
        var GB = WB(BB, OB, 1, YB) - 1;
        return QB[GB](DB[GB](OB))
      }
    }

    function fO(BB, OB) {
      return OB.domain(BB.domain()).range(BB.range()).interpolate(BB.interpolate()).clamp(BB.clamp()).unknown(BB.unknown())
    }

    function kO() {
      var BB, OB, GB, YB, DB, QB, oB = AO,
        jB = AO,
        yB = NO,
        JB = VO;

      function MB() {
        var BB = Math.min(oB.length, jB.length);
        return JB !== VO && (JB = function(BB, OB) {
          var GB;
          return BB > OB && (GB = BB, BB = OB, OB = GB),
            function(GB) {
              return Math.max(BB, Math.min(OB, GB))
            }
        }(oB[0], oB[BB - 1])), YB = BB > 2 ? UO : nO, DB = QB = null, PB
      }

      function PB(OB) {
        return null == OB || isNaN(OB = +OB) ? GB : (DB || (DB = YB(oB.map(BB), jB, yB)))(BB(JB(OB)))
      }
      return PB.invert = function(GB) {
          return JB(OB((QB || (QB = YB(jB, oB.map(BB), PO)))(GB)))
        }, PB.domain = function(BB) {
          return arguments.length ? (oB = Array.from(BB, WO), MB()) : oB.slice()
        }, PB.range = function(BB) {
          return arguments.length ? (jB = Array.from(BB), MB()) : jB.slice()
        }, PB.rangeRound = function(BB) {
          return jB = Array.from(BB), yB = RO, MB()
        }, PB.clamp = function(BB) {
          return arguments.length ? (JB = !!BB || VO, MB()) : JB !== VO
        }, PB.interpolate = function(BB) {
          return arguments.length ? (yB = BB, MB()) : yB
        }, PB.unknown = function(BB) {
          return arguments.length ? (GB = BB, PB) : GB
        },
        function(GB, YB) {
          return BB = GB, OB = YB, MB()
        }
    }

    function dO() {
      return kO()(VO, VO)
    }
    var KO, uO = GB(6660),
      mO = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function IO(BB) {
      if (!(OB = mO.exec(BB))) throw new Error("invalid format: " + BB);
      var OB;
      return new FO({
        fill: OB[1],
        align: OB[2],
        sign: OB[3],
        symbol: OB[4],
        zero: OB[5],
        width: OB[6],
        comma: OB[7],
        precision: OB[8] && OB[8].slice(1),
        trim: OB[9],
        type: OB[10]
      })
    }

    function FO(BB) {
      this.fill = void 0 === BB.fill ? " " : BB.fill + "", this.align = void 0 === BB.align ? ">" : BB.align + "", this.sign = void 0 === BB.sign ? "-" : BB.sign + "", this.symbol = void 0 === BB.symbol ? "" : BB.symbol + "", this.zero = !!BB.zero, this.width = void 0 === BB.width ? void 0 : +BB.width, this.comma = !!BB.comma, this.precision = void 0 === BB.precision ? void 0 : +BB.precision, this.trim = !!BB.trim, this.type = void 0 === BB.type ? "" : BB.type + ""
    }

    function iO(BB, OB) {
      if (!isFinite(BB) || 0 === BB) return null;
      var GB = (BB = OB ? BB.toExponential(OB - 1) : BB.toExponential()).indexOf("e"),
        YB = BB.slice(0, GB);
      return [YB.length > 1 ? YB[0] + YB.slice(2) : YB, +BB.slice(GB + 1)]
    }

    function LO(BB) {
      return (BB = iO(Math.abs(BB))) ? BB[1] : NaN
    }

    function gO(BB, OB) {
      var GB = iO(BB, OB);
      if (!GB) return BB + "";
      var YB = GB[0],
        DB = GB[1];
      return DB < 0 ? "0." + new Array(-DB).join("0") + YB : YB.length > DB + 1 ? YB.slice(0, DB + 1) + "." + YB.slice(DB + 1) : YB + new Array(DB - YB.length + 2).join("0")
    }
    IO.prototype = FO.prototype, FO.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const rO = {
      "%": (BB, OB) => (100 * BB).toFixed(OB),
      b: BB => Math.round(BB).toString(2),
      c: BB => BB + "",
      d: function(BB) {
        return Math.abs(BB = Math.round(BB)) >= 1e21 ? BB.toLocaleString("en").replace(/,/g, "") : BB.toString(10)
      },
      e: (BB, OB) => BB.toExponential(OB),
      f: (BB, OB) => BB.toFixed(OB),
      g: (BB, OB) => BB.toPrecision(OB),
      o: BB => Math.round(BB).toString(8),
      p: (BB, OB) => gO(100 * BB, OB),
      r: gO,
      s: function(BB, OB) {
        var GB = iO(BB, OB);
        if (!GB) return KO = void 0, BB.toPrecision(OB);
        var YB = GB[0],
          DB = GB[1],
          QB = DB - (KO = 3 * Math.max(-8, Math.min(8, Math.floor(DB / 3)))) + 1,
          oB = YB.length;
        return QB === oB ? YB : QB > oB ? YB + new Array(QB - oB + 1).join("0") : QB > 0 ? YB.slice(0, QB) + "." + YB.slice(QB) : "0." + new Array(1 - QB).join("0") + iO(BB, Math.max(0, OB + QB - 1))[0]
      },
      X: BB => Math.round(BB).toString(16).toUpperCase(),
      x: BB => Math.round(BB).toString(16)
    };

    function XO(BB) {
      return BB
    }
    var wO, EO, cO, hO = Array.prototype.map,
      aO = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function eO(BB) {
      var OB, GB, YB = void 0 === BB.grouping || void 0 === BB.thousands ? XO : (OB = hO.call(BB.grouping, Number), GB = BB.thousands + "", function(BB, YB) {
          for (var DB = BB.length, QB = [], oB = 0, jB = OB[0], yB = 0; DB > 0 && jB > 0 && (yB + jB + 1 > YB && (jB = Math.max(1, YB - yB)), QB.push(BB.substring(DB -= jB, DB + jB)), !((yB += jB + 1) > YB));) jB = OB[oB = (oB + 1) % OB.length];
          return QB.reverse().join(GB)
        }),
        DB = void 0 === BB.currency ? "" : BB.currency[0] + "",
        QB = void 0 === BB.currency ? "" : BB.currency[1] + "",
        oB = void 0 === BB.decimal ? "." : BB.decimal + "",
        jB = void 0 === BB.numerals ? XO : function(BB) {
          return function(OB) {
            return OB.replace(/[0-9]/g, (function(OB) {
              return BB[+OB]
            }))
          }
        }(hO.call(BB.numerals, String)),
        yB = void 0 === BB.percent ? "%" : BB.percent + "",
        JB = void 0 === BB.minus ? "\u2212" : BB.minus + "",
        MB = void 0 === BB.nan ? "NaN" : BB.nan + "";

      function PB(BB, OB) {
        var GB = (BB = IO(BB)).fill,
          PB = BB.align,
          zB = BB.sign,
          lB = BB.symbol,
          pB = BB.zero,
          qB = BB.width,
          ZB = BB.comma,
          NB = BB.precision,
          RB = BB.trim,
          WB = BB.type;
        "n" === WB ? (ZB = !0, WB = "g") : rO[WB] || (void 0 === NB && (NB = 12), RB = !0, WB = "g"), (pB || "0" === GB && "=" === PB) && (pB = !0, GB = "0", PB = "=");
        var AB = (OB && void 0 !== OB.prefix ? OB.prefix : "") + ("$" === lB ? DB : "#" === lB && /[boxX]/.test(WB) ? "0" + WB.toLowerCase() : ""),
          VB = ("$" === lB ? QB : /[%p]/.test(WB) ? yB : "") + (OB && void 0 !== OB.suffix ? OB.suffix : ""),
          SB = rO[WB],
          nB = /[defgprs%]/.test(WB);

        function UB(BB) {
          var OB, DB, QB, yB = AB,
            lB = VB;
          if ("c" === WB) lB = SB(BB) + lB, BB = "";
          else {
            var UB = (BB = +BB) < 0 || 1 / BB < 0;
            if (BB = isNaN(BB) ? MB : SB(Math.abs(BB), NB), RB && (BB = function(BB) {
                BB: for (var OB, GB = BB.length, YB = 1, DB = -1; YB < GB; ++YB) switch (BB[YB]) {
                  case ".":
                    DB = OB = YB;
                    break;
                  case "0":
                    0 === DB && (DB = YB), OB = YB;
                    break;
                  default:
                    if (!+BB[YB]) break BB;
                    DB > 0 && (DB = 0)
                }
                return DB > 0 ? BB.slice(0, DB) + BB.slice(OB + 1) : BB
              }(BB)), UB && 0 === +BB && "+" !== zB && (UB = !1), yB = (UB ? "(" === zB ? zB : JB : "-" === zB || "(" === zB ? "" : zB) + yB, lB = ("s" !== WB || isNaN(BB) || void 0 === KO ? "" : aO[8 + KO / 3]) + lB + (UB && "(" === zB ? ")" : ""), nB)
              for (OB = -1, DB = BB.length; ++OB < DB;)
                if (48 > (QB = BB.charCodeAt(OB)) || QB > 57) {
                  lB = (46 === QB ? oB + BB.slice(OB + 1) : BB.slice(OB)) + lB, BB = BB.slice(0, OB);
                  break
                }
          }
          ZB && !pB && (BB = YB(BB, 1 / 0));
          var fB = yB.length + BB.length + lB.length,
            kB = fB < qB ? new Array(qB - fB + 1).join(GB) : "";
          switch (ZB && pB && (BB = YB(kB + BB, kB.length ? qB - lB.length : 1 / 0), kB = ""), PB) {
            case "<":
              BB = yB + BB + lB + kB;
              break;
            case "=":
              BB = yB + kB + BB + lB;
              break;
            case "^":
              BB = kB.slice(0, fB = kB.length >> 1) + yB + BB + lB + kB.slice(fB);
              break;
            default:
              BB = kB + yB + BB + lB
          }
          return jB(BB)
        }
        return NB = void 0 === NB ? 6 : /[gprs]/.test(WB) ? Math.max(1, Math.min(21, NB)) : Math.max(0, Math.min(20, NB)), UB.toString = function() {
          return BB + ""
        }, UB
      }
      return {
        format: PB,
        formatPrefix: function(BB, OB) {
          var GB = 3 * Math.max(-8, Math.min(8, Math.floor(LO(OB) / 3))),
            YB = Math.pow(10, -GB),
            DB = PB(((BB = IO(BB)).type = "f", BB), {
              suffix: aO[8 + GB / 3]
            });
          return function(BB) {
            return DB(YB * BB)
          }
        }
      }
    }

    function TO(BB, OB, GB, YB) {
      var DB, QB = PB(BB, OB, GB);
      switch ((YB = IO(null == YB ? ",f" : YB)).type) {
        case "s":
          var oB = Math.max(Math.abs(BB), Math.abs(OB));
          return null != YB.precision || isNaN(DB = function(BB, OB) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(LO(OB) / 3))) - LO(Math.abs(BB)))
          }(QB, oB)) || (YB.precision = DB), cO(YB, oB);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != YB.precision || isNaN(DB = function(BB, OB) {
            return BB = Math.abs(BB), OB = Math.abs(OB) - BB, Math.max(0, LO(OB) - LO(BB)) + 1
          }(QB, Math.max(Math.abs(BB), Math.abs(OB)))) || (YB.precision = DB - ("e" === YB.type));
          break;
        case "f":
        case "%":
          null != YB.precision || isNaN(DB = function(BB) {
            return Math.max(0, -LO(Math.abs(BB)))
          }(QB)) || (YB.precision = DB - 2 * ("%" === YB.type))
      }
      return EO(YB)
    }

    function bO(BB) {
      var OB = BB.domain;
      return BB.ticks = function(BB) {
        var GB = OB();
        return JB(GB[0], GB[GB.length - 1], null == BB ? 10 : BB)
      }, BB.tickFormat = function(BB, GB) {
        var YB = OB();
        return TO(YB[0], YB[YB.length - 1], null == BB ? 10 : BB, GB)
      }, BB.nice = function(GB) {
        null == GB && (GB = 10);
        var YB, DB, QB = OB(),
          oB = 0,
          jB = QB.length - 1,
          yB = QB[oB],
          JB = QB[jB],
          PB = 10;
        for (JB < yB && (DB = yB, yB = JB, JB = DB, DB = oB, oB = jB, jB = DB); PB-- > 0;) {
          if ((DB = MB(yB, JB, GB)) === YB) return QB[oB] = yB, QB[jB] = JB, OB(QB);
          if (DB > 0) yB = Math.floor(yB / DB) * DB, JB = Math.ceil(JB / DB) * DB;
          else {
            if (!(DB < 0)) break;
            yB = Math.ceil(yB * DB) / DB, JB = Math.floor(JB * DB) / DB
          }
          YB = DB
        }
        return BB
      }, BB
    }

    function CO() {
      var BB = dO();
      return BB.copy = function() {
        return fO(BB, CO())
      }, uO.g.apply(BB, arguments), bO(BB)
    }

    function HO(BB) {
      var OB;

      function GB(BB) {
        return null == BB || isNaN(BB = +BB) ? OB : BB
      }
      return GB.invert = GB, GB.domain = GB.range = function(OB) {
        return arguments.length ? (BB = Array.from(OB, WO), GB) : BB.slice()
      }, GB.unknown = function(BB) {
        return arguments.length ? (OB = BB, GB) : OB
      }, GB.copy = function() {
        return HO(BB).unknown(OB)
      }, BB = arguments.length ? Array.from(BB, WO) : [0, 1], bO(GB)
    }

    function vO(BB, OB) {
      var GB, YB = 0,
        DB = (BB = BB.slice()).length - 1,
        QB = BB[YB],
        oB = BB[DB];
      return oB < QB && (GB = YB, YB = DB, DB = GB, GB = QB, QB = oB, oB = GB), BB[YB] = OB.floor(QB), BB[DB] = OB.ceil(oB), BB
    }

    function sO(BB) {
      return Math.log(BB)
    }

    function xO(BB) {
      return Math.exp(BB)
    }

    function tO(BB) {
      return -Math.log(-BB)
    }

    function BG(BB) {
      return -Math.exp(-BB)
    }

    function OG(BB) {
      return isFinite(BB) ? +("1e" + BB) : BB < 0 ? 0 : BB
    }

    function GG(BB) {
      return (OB, GB) => -BB(-OB, GB)
    }

    function YG(BB) {
      const OB = BB(sO, xO),
        GB = OB.domain;
      let YB, DB, QB = 10;

      function oB() {
        return YB = function(BB) {
          return BB === Math.E ? Math.log : 10 === BB && Math.log10 || 2 === BB && Math.log2 || (BB = Math.log(BB), OB => Math.log(OB) / BB)
        }(QB), DB = function(BB) {
          return 10 === BB ? OG : BB === Math.E ? Math.exp : OB => Math.pow(BB, OB)
        }(QB), GB()[0] < 0 ? (YB = GG(YB), DB = GG(DB), BB(tO, BG)) : BB(sO, xO), OB
      }
      return OB.base = function(BB) {
        return arguments.length ? (QB = +BB, oB()) : QB
      }, OB.domain = function(BB) {
        return arguments.length ? (GB(BB), oB()) : GB()
      }, OB.ticks = BB => {
        const OB = GB();
        let oB = OB[0],
          jB = OB[OB.length - 1];
        const yB = jB < oB;
        yB && ([oB, jB] = [jB, oB]);
        let MB, PB, zB = YB(oB),
          lB = YB(jB);
        const pB = null == BB ? 10 : +BB;
        let qB = [];
        if (!(QB % 1) && lB - zB < pB) {
          if (zB = Math.floor(zB), lB = Math.ceil(lB), oB > 0) {
            for (; zB <= lB; ++zB)
              for (MB = 1; MB < QB; ++MB)
                if (PB = zB < 0 ? MB / DB(-zB) : MB * DB(zB), !(PB < oB)) {
                  if (PB > jB) break;
                  qB.push(PB)
                }
          } else
            for (; zB <= lB; ++zB)
              for (MB = QB - 1; MB >= 1; --MB)
                if (PB = zB > 0 ? MB / DB(-zB) : MB * DB(zB), !(PB < oB)) {
                  if (PB > jB) break;
                  qB.push(PB)
                } 2 * qB.length < pB && (qB = JB(oB, jB, pB))
        } else qB = JB(zB, lB, Math.min(lB - zB, pB)).map(DB);
        return yB ? qB.reverse() : qB
      }, OB.tickFormat = (BB, GB) => {
        if (null == BB && (BB = 10), null == GB && (GB = 10 === QB ? "s" : ","), "function" !== typeof GB && (QB % 1 || null != (GB = IO(GB)).precision || (GB.trim = !0), GB = EO(GB)), BB === 1 / 0) return GB;
        const oB = Math.max(1, QB * BB / OB.ticks().length);
        return BB => {
          let OB = BB / DB(Math.round(YB(BB)));
          return OB * QB < QB - .5 && (OB *= QB), OB <= oB ? GB(BB) : ""
        }
      }, OB.nice = () => GB(vO(GB(), {
        floor: BB => DB(Math.floor(YB(BB))),
        ceil: BB => DB(Math.ceil(YB(BB)))
      })), OB
    }

    function DG() {
      const BB = YG(kO()).domain([1, 10]);
      return BB.copy = () => fO(BB, DG()).base(BB.base()), uO.g.apply(BB, arguments), BB
    }

    function QG(BB) {
      return function(OB) {
        return Math.sign(OB) * Math.log1p(Math.abs(OB / BB))
      }
    }

    function oG(BB) {
      return function(OB) {
        return Math.sign(OB) * Math.expm1(Math.abs(OB)) * BB
      }
    }

    function jG(BB) {
      var OB = 1,
        GB = BB(QG(OB), oG(OB));
      return GB.constant = function(GB) {
        return arguments.length ? BB(QG(OB = +GB), oG(OB)) : OB
      }, bO(GB)
    }

    function yG() {
      var BB = jG(kO());
      return BB.copy = function() {
        return fO(BB, yG()).constant(BB.constant())
      }, uO.g.apply(BB, arguments)
    }
    wO = eO({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), EO = wO.format, cO = wO.formatPrefix;
    var JG = GB(6665);

    function MG(BB) {
      return function(OB) {
        return OB < 0 ? -Math.pow(-OB, BB) : Math.pow(OB, BB)
      }
    }

    function PG(BB) {
      return BB < 0 ? -Math.sqrt(-BB) : Math.sqrt(BB)
    }

    function zG(BB) {
      return BB < 0 ? -BB * BB : BB * BB
    }

    function lG(BB) {
      var OB = BB(VO, VO),
        GB = 1;
      return OB.exponent = function(OB) {
        return arguments.length ? 1 === (GB = +OB) ? BB(VO, VO) : .5 === GB ? BB(PG, zG) : BB(MG(GB), MG(1 / GB)) : GB
      }, bO(OB)
    }

    function pG() {
      var BB = lG(kO());
      return BB.copy = function() {
        return fO(BB, pG()).exponent(BB.exponent())
      }, uO.g.apply(BB, arguments), BB
    }

    function qG() {
      return pG.apply(null, arguments).exponent(.5)
    }

    function ZG(BB) {
      return Math.sign(BB) * BB * BB
    }

    function NG() {
      var BB, OB = dO(),
        GB = [0, 1],
        YB = !1;

      function DB(GB) {
        var DB = function(BB) {
          return Math.sign(BB) * Math.sqrt(Math.abs(BB))
        }(OB(GB));
        return isNaN(DB) ? BB : YB ? Math.round(DB) : DB
      }
      return DB.invert = function(BB) {
        return OB.invert(ZG(BB))
      }, DB.domain = function(BB) {
        return arguments.length ? (OB.domain(BB), DB) : OB.domain()
      }, DB.range = function(BB) {
        return arguments.length ? (OB.range((GB = Array.from(BB, WO)).map(ZG)), DB) : GB.slice()
      }, DB.rangeRound = function(BB) {
        return DB.range(BB).round(!0)
      }, DB.round = function(BB) {
        return arguments.length ? (YB = !!BB, DB) : YB
      }, DB.clamp = function(BB) {
        return arguments.length ? (OB.clamp(BB), DB) : OB.clamp()
      }, DB.unknown = function(OB) {
        return arguments.length ? (BB = OB, DB) : BB
      }, DB.copy = function() {
        return NG(OB.domain(), GB).round(YB).clamp(OB.clamp()).unknown(BB)
      }, uO.g.apply(DB, arguments), bO(DB)
    }

    function RG(BB, OB) {
      let GB;
      if (void 0 === OB)
        for (const YB of BB) null != YB && (GB < YB || void 0 === GB && YB >= YB) && (GB = YB);
      else {
        let YB = -1;
        for (let DB of BB) null != (DB = OB(DB, ++YB, BB)) && (GB < DB || void 0 === GB && DB >= DB) && (GB = DB)
      }
      return GB
    }

    function WG(BB, OB) {
      let GB;
      if (void 0 === OB)
        for (const YB of BB) null != YB && (GB > YB || void 0 === GB && YB >= YB) && (GB = YB);
      else {
        let YB = -1;
        for (let DB of BB) null != (DB = OB(DB, ++YB, BB)) && (GB > DB || void 0 === GB && DB >= DB) && (GB = DB)
      }
      return GB
    }

    function AG() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zB;
      if (BB === zB) return VG;
      if ("function" !== typeof BB) throw new TypeError("compare is not a function");
      return (OB, GB) => {
        const YB = BB(OB, GB);
        return YB || 0 === YB ? YB : (0 === BB(GB, GB)) - (0 === BB(OB, OB))
      }
    }

    function VG(BB, OB) {
      return (null == BB || !(BB >= BB)) - (null == OB || !(OB >= OB)) || (BB < OB ? -1 : BB > OB ? 1 : 0)
    }

    function SG(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        DB = arguments.length > 4 ? arguments[4] : void 0;
      if (OB = Math.floor(OB), GB = Math.floor(Math.max(0, GB)), YB = Math.floor(Math.min(BB.length - 1, YB)), !(GB <= OB && OB <= YB)) return BB;
      for (DB = void 0 === DB ? VG : AG(DB); YB > GB;) {
        if (YB - GB > 600) {
          const QB = YB - GB + 1,
            oB = OB - GB + 1,
            jB = Math.log(QB),
            yB = .5 * Math.exp(2 * jB / 3),
            JB = .5 * Math.sqrt(jB * yB * (QB - yB) / QB) * (oB - QB / 2 < 0 ? -1 : 1);
          SG(BB, OB, Math.max(GB, Math.floor(OB - oB * yB / QB + JB)), Math.min(YB, Math.floor(OB + (QB - oB) * yB / QB + JB)), DB)
        }
        const QB = BB[OB];
        let oB = GB,
          jB = YB;
        for (nG(BB, GB, OB), DB(BB[YB], QB) > 0 && nG(BB, GB, YB); oB < jB;) {
          for (nG(BB, oB, jB), ++oB, --jB; DB(BB[oB], QB) < 0;) ++oB;
          for (; DB(BB[jB], QB) > 0;) --jB
        }
        0 === DB(BB[GB], QB) ? nG(BB, GB, jB) : (++jB, nG(BB, jB, YB)), jB <= OB && (GB = jB + 1), OB <= jB && (YB = jB - 1)
      }
      return BB
    }

    function nG(BB, OB, GB) {
      const YB = BB[OB];
      BB[OB] = BB[GB], BB[GB] = YB
    }

    function UG(BB, OB, GB) {
      if (BB = Float64Array.from(function*(BB, OB) {
          if (void 0 === OB)
            for (let GB of BB) null != GB && (GB = +GB) >= GB && (yield GB);
          else {
            let GB = -1;
            for (let YB of BB) null != (YB = OB(YB, ++GB, BB)) && (YB = +YB) >= YB && (yield YB)
          }
        }(BB, GB)), (YB = BB.length) && !isNaN(OB = +OB)) {
        if (OB <= 0 || YB < 2) return WG(BB);
        if (OB >= 1) return RG(BB);
        var YB, DB = (YB - 1) * OB,
          QB = Math.floor(DB),
          oB = RG(SG(BB, QB).subarray(0, QB + 1));
        return oB + (WG(BB.subarray(QB + 1)) - oB) * (DB - QB)
      }
    }

    function fG(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ZB;
      if ((YB = BB.length) && !isNaN(OB = +OB)) {
        if (OB <= 0 || YB < 2) return +GB(BB[0], 0, BB);
        if (OB >= 1) return +GB(BB[YB - 1], YB - 1, BB);
        var YB, DB = (YB - 1) * OB,
          QB = Math.floor(DB),
          oB = +GB(BB[QB], QB, BB);
        return oB + (+GB(BB[QB + 1], QB + 1, BB) - oB) * (DB - QB)
      }
    }

    function kG() {
      var BB, OB = [],
        GB = [],
        YB = [];

      function DB() {
        var BB = 0,
          DB = Math.max(1, GB.length);
        for (YB = new Array(DB - 1); ++BB < DB;) YB[BB - 1] = fG(OB, BB / DB);
        return QB
      }

      function QB(OB) {
        return null == OB || isNaN(OB = +OB) ? BB : GB[WB(YB, OB)]
      }
      return QB.invertExtent = function(BB) {
        var DB = GB.indexOf(BB);
        return DB < 0 ? [NaN, NaN] : [DB > 0 ? YB[DB - 1] : OB[0], DB < YB.length ? YB[DB] : OB[OB.length - 1]]
      }, QB.domain = function(BB) {
        if (!arguments.length) return OB.slice();
        OB = [];
        for (let GB of BB) null == GB || isNaN(GB = +GB) || OB.push(GB);
        return OB.sort(zB), DB()
      }, QB.range = function(BB) {
        return arguments.length ? (GB = Array.from(BB), DB()) : GB.slice()
      }, QB.unknown = function(OB) {
        return arguments.length ? (BB = OB, QB) : BB
      }, QB.quantiles = function() {
        return YB.slice()
      }, QB.copy = function() {
        return kG().domain(OB).range(GB).unknown(BB)
      }, uO.g.apply(QB, arguments)
    }

    function dG() {
      var BB, OB = 0,
        GB = 1,
        YB = 1,
        DB = [.5],
        QB = [0, 1];

      function oB(OB) {
        return null != OB && OB <= OB ? QB[WB(DB, OB, 0, YB)] : BB
      }

      function jB() {
        var BB = -1;
        for (DB = new Array(YB); ++BB < YB;) DB[BB] = ((BB + 1) * GB - (BB - YB) * OB) / (YB + 1);
        return oB
      }
      return oB.domain = function(BB) {
        return arguments.length ? ([OB, GB] = BB, OB = +OB, GB = +GB, jB()) : [OB, GB]
      }, oB.range = function(BB) {
        return arguments.length ? (YB = (QB = Array.from(BB)).length - 1, jB()) : QB.slice()
      }, oB.invertExtent = function(BB) {
        var oB = QB.indexOf(BB);
        return oB < 0 ? [NaN, NaN] : oB < 1 ? [OB, DB[0]] : oB >= YB ? [DB[YB - 1], GB] : [DB[oB - 1], DB[oB]]
      }, oB.unknown = function(OB) {
        return arguments.length ? (BB = OB, oB) : oB
      }, oB.thresholds = function() {
        return DB.slice()
      }, oB.copy = function() {
        return dG().domain([OB, GB]).range(QB).unknown(BB)
      }, uO.g.apply(bO(oB), arguments)
    }

    function KG() {
      var BB, OB = [.5],
        GB = [0, 1],
        YB = 1;

      function DB(DB) {
        return null != DB && DB <= DB ? GB[WB(OB, DB, 0, YB)] : BB
      }
      return DB.domain = function(BB) {
        return arguments.length ? (OB = Array.from(BB), YB = Math.min(OB.length, GB.length - 1), DB) : OB.slice()
      }, DB.range = function(BB) {
        return arguments.length ? (GB = Array.from(BB), YB = Math.min(OB.length, GB.length - 1), DB) : GB.slice()
      }, DB.invertExtent = function(BB) {
        var YB = GB.indexOf(BB);
        return [OB[YB - 1], OB[YB]]
      }, DB.unknown = function(OB) {
        return arguments.length ? (BB = OB, DB) : BB
      }, DB.copy = function() {
        return KG().domain(OB).range(GB).unknown(BB)
      }, uO.g.apply(DB, arguments)
    }
    const uG = 1e3,
      mG = 6e4,
      IG = 36e5,
      FG = 864e5,
      iG = 6048e5,
      LG = 2592e6,
      gG = 31536e6,
      rG = new Date,
      XG = new Date;

    function wG(BB, OB, GB, YB) {
      function DB(OB) {
        return BB(OB = 0 === arguments.length ? new Date : new Date(+OB)), OB
      }
      return DB.floor = OB => (BB(OB = new Date(+OB)), OB), DB.ceil = GB => (BB(GB = new Date(GB - 1)), OB(GB, 1), BB(GB), GB), DB.round = BB => {
        const OB = DB(BB),
          GB = DB.ceil(BB);
        return BB - OB < GB - BB ? OB : GB
      }, DB.offset = (BB, GB) => (OB(BB = new Date(+BB), null == GB ? 1 : Math.floor(GB)), BB), DB.range = (GB, YB, QB) => {
        const oB = [];
        if (GB = DB.ceil(GB), QB = null == QB ? 1 : Math.floor(QB), !(GB < YB) || !(QB > 0)) return oB;
        let jB;
        do {
          oB.push(jB = new Date(+GB)), OB(GB, QB), BB(GB)
        } while (jB < GB && GB < YB);
        return oB
      }, DB.filter = GB => wG((OB => {
        if (OB >= OB)
          for (; BB(OB), !GB(OB);) OB.setTime(OB - 1)
      }), ((BB, YB) => {
        if (BB >= BB)
          if (YB < 0)
            for (; ++YB <= 0;)
              for (; OB(BB, -1), !GB(BB););
          else
            for (; --YB >= 0;)
              for (; OB(BB, 1), !GB(BB););
      })), GB && (DB.count = (OB, YB) => (rG.setTime(+OB), XG.setTime(+YB), BB(rG), BB(XG), Math.floor(GB(rG, XG))), DB.every = BB => (BB = Math.floor(BB), isFinite(BB) && BB > 0 ? BB > 1 ? DB.filter(YB ? OB => YB(OB) % BB === 0 : OB => DB.count(0, OB) % BB === 0) : DB : null)), DB
    }
    const EG = wG((() => {}), ((BB, OB) => {
      BB.setTime(+BB + OB)
    }), ((BB, OB) => OB - BB));
    EG.every = BB => (BB = Math.floor(BB), isFinite(BB) && BB > 0 ? BB > 1 ? wG((OB => {
      OB.setTime(Math.floor(OB / BB) * BB)
    }), ((OB, GB) => {
      OB.setTime(+OB + GB * BB)
    }), ((OB, GB) => (GB - OB) / BB)) : EG : null);
    EG.range;
    const cG = wG((BB => {
        BB.setTime(BB - BB.getMilliseconds())
      }), ((BB, OB) => {
        BB.setTime(+BB + OB * uG)
      }), ((BB, OB) => (OB - BB) / uG), (BB => BB.getUTCSeconds())),
      hG = (cG.range, wG((BB => {
        BB.setTime(BB - BB.getMilliseconds() - BB.getSeconds() * uG)
      }), ((BB, OB) => {
        BB.setTime(+BB + OB * mG)
      }), ((BB, OB) => (OB - BB) / mG), (BB => BB.getMinutes()))),
      aG = (hG.range, wG((BB => {
        BB.setUTCSeconds(0, 0)
      }), ((BB, OB) => {
        BB.setTime(+BB + OB * mG)
      }), ((BB, OB) => (OB - BB) / mG), (BB => BB.getUTCMinutes()))),
      eG = (aG.range, wG((BB => {
        BB.setTime(BB - BB.getMilliseconds() - BB.getSeconds() * uG - BB.getMinutes() * mG)
      }), ((BB, OB) => {
        BB.setTime(+BB + OB * IG)
      }), ((BB, OB) => (OB - BB) / IG), (BB => BB.getHours()))),
      TG = (eG.range, wG((BB => {
        BB.setUTCMinutes(0, 0, 0)
      }), ((BB, OB) => {
        BB.setTime(+BB + OB * IG)
      }), ((BB, OB) => (OB - BB) / IG), (BB => BB.getUTCHours()))),
      bG = (TG.range, wG((BB => BB.setHours(0, 0, 0, 0)), ((BB, OB) => BB.setDate(BB.getDate() + OB)), ((BB, OB) => (OB - BB - (OB.getTimezoneOffset() - BB.getTimezoneOffset()) * mG) / FG), (BB => BB.getDate() - 1))),
      CG = (bG.range, wG((BB => {
        BB.setUTCHours(0, 0, 0, 0)
      }), ((BB, OB) => {
        BB.setUTCDate(BB.getUTCDate() + OB)
      }), ((BB, OB) => (OB - BB) / FG), (BB => BB.getUTCDate() - 1))),
      HG = (CG.range, wG((BB => {
        BB.setUTCHours(0, 0, 0, 0)
      }), ((BB, OB) => {
        BB.setUTCDate(BB.getUTCDate() + OB)
      }), ((BB, OB) => (OB - BB) / FG), (BB => Math.floor(BB / FG))));
    HG.range;

    function vG(BB) {
      return wG((OB => {
        OB.setDate(OB.getDate() - (OB.getDay() + 7 - BB) % 7), OB.setHours(0, 0, 0, 0)
      }), ((BB, OB) => {
        BB.setDate(BB.getDate() + 7 * OB)
      }), ((BB, OB) => (OB - BB - (OB.getTimezoneOffset() - BB.getTimezoneOffset()) * mG) / iG))
    }
    const sG = vG(0),
      xG = vG(1),
      tG = vG(2),
      BY = vG(3),
      OY = vG(4),
      GY = vG(5),
      YY = vG(6);
    sG.range, xG.range, tG.range, BY.range, OY.range, GY.range, YY.range;

    function DY(BB) {
      return wG((OB => {
        OB.setUTCDate(OB.getUTCDate() - (OB.getUTCDay() + 7 - BB) % 7), OB.setUTCHours(0, 0, 0, 0)
      }), ((BB, OB) => {
        BB.setUTCDate(BB.getUTCDate() + 7 * OB)
      }), ((BB, OB) => (OB - BB) / iG))
    }
    const QY = DY(0),
      oY = DY(1),
      jY = DY(2),
      yY = DY(3),
      JY = DY(4),
      MY = DY(5),
      PY = DY(6),
      zY = (QY.range, oY.range, jY.range, yY.range, JY.range, MY.range, PY.range, wG((BB => {
        BB.setDate(1), BB.setHours(0, 0, 0, 0)
      }), ((BB, OB) => {
        BB.setMonth(BB.getMonth() + OB)
      }), ((BB, OB) => OB.getMonth() - BB.getMonth() + 12 * (OB.getFullYear() - BB.getFullYear())), (BB => BB.getMonth()))),
      lY = (zY.range, wG((BB => {
        BB.setUTCDate(1), BB.setUTCHours(0, 0, 0, 0)
      }), ((BB, OB) => {
        BB.setUTCMonth(BB.getUTCMonth() + OB)
      }), ((BB, OB) => OB.getUTCMonth() - BB.getUTCMonth() + 12 * (OB.getUTCFullYear() - BB.getUTCFullYear())), (BB => BB.getUTCMonth()))),
      pY = (lY.range, wG((BB => {
        BB.setMonth(0, 1), BB.setHours(0, 0, 0, 0)
      }), ((BB, OB) => {
        BB.setFullYear(BB.getFullYear() + OB)
      }), ((BB, OB) => OB.getFullYear() - BB.getFullYear()), (BB => BB.getFullYear())));
    pY.every = BB => isFinite(BB = Math.floor(BB)) && BB > 0 ? wG((OB => {
      OB.setFullYear(Math.floor(OB.getFullYear() / BB) * BB), OB.setMonth(0, 1), OB.setHours(0, 0, 0, 0)
    }), ((OB, GB) => {
      OB.setFullYear(OB.getFullYear() + GB * BB)
    })) : null;
    pY.range;
    const qY = wG((BB => {
      BB.setUTCMonth(0, 1), BB.setUTCHours(0, 0, 0, 0)
    }), ((BB, OB) => {
      BB.setUTCFullYear(BB.getUTCFullYear() + OB)
    }), ((BB, OB) => OB.getUTCFullYear() - BB.getUTCFullYear()), (BB => BB.getUTCFullYear()));
    qY.every = BB => isFinite(BB = Math.floor(BB)) && BB > 0 ? wG((OB => {
      OB.setUTCFullYear(Math.floor(OB.getUTCFullYear() / BB) * BB), OB.setUTCMonth(0, 1), OB.setUTCHours(0, 0, 0, 0)
    }), ((OB, GB) => {
      OB.setUTCFullYear(OB.getUTCFullYear() + GB * BB)
    })) : null;
    qY.range;

    function ZY(BB, OB, GB, YB, DB, QB) {
      const oB = [
        [cG, 1, uG],
        [cG, 5, 5e3],
        [cG, 15, 15e3],
        [cG, 30, 3e4],
        [QB, 1, mG],
        [QB, 5, 3e5],
        [QB, 15, 9e5],
        [QB, 30, 18e5],
        [DB, 1, IG],
        [DB, 3, 108e5],
        [DB, 6, 216e5],
        [DB, 12, 432e5],
        [YB, 1, FG],
        [YB, 2, 1728e5],
        [GB, 1, iG],
        [OB, 1, LG],
        [OB, 3, 7776e6],
        [BB, 1, gG]
      ];

      function jB(OB, GB, YB) {
        const DB = Math.abs(GB - OB) / YB,
          QB = pB((BB => {
            let [, , OB] = BB;
            return OB
          })).right(oB, DB);
        if (QB === oB.length) return BB.every(PB(OB / gG, GB / gG, YB));
        if (0 === QB) return EG.every(Math.max(PB(OB, GB, YB), 1));
        const [jB, yB] = oB[DB / oB[QB - 1][2] < oB[QB][2] / DB ? QB - 1 : QB];
        return jB.every(yB)
      }
      return [function(BB, OB, GB) {
        const YB = OB < BB;
        YB && ([BB, OB] = [OB, BB]);
        const DB = GB && "function" === typeof GB.range ? GB : jB(BB, OB, GB),
          QB = DB ? DB.range(BB, +OB + 1) : [];
        return YB ? QB.reverse() : QB
      }, jB]
    }
    const [NY, RY] = ZY(qY, lY, QY, HG, TG, aG), [WY, AY] = ZY(pY, zY, sG, bG, eG, hG);

    function VY(BB) {
      if (0 <= BB.y && BB.y < 100) {
        var OB = new Date(-1, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L);
        return OB.setFullYear(BB.y), OB
      }
      return new Date(BB.y, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L)
    }

    function SY(BB) {
      if (0 <= BB.y && BB.y < 100) {
        var OB = new Date(Date.UTC(-1, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L));
        return OB.setUTCFullYear(BB.y), OB
      }
      return new Date(Date.UTC(BB.y, BB.m, BB.d, BB.H, BB.M, BB.S, BB.L))
    }

    function nY(BB, OB, GB) {
      return {
        y: BB,
        m: OB,
        d: GB,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var UY, fY, kY, dY = {
        "-": "",
        _: " ",
        0: "0"
      },
      KY = /^\s*\d+/,
      uY = /^%/,
      mY = /[\\^$*+?|[\]().{}]/g;

    function IY(BB, OB, GB) {
      var YB = BB < 0 ? "-" : "",
        DB = (YB ? -BB : BB) + "",
        QB = DB.length;
      return YB + (QB < GB ? new Array(GB - QB + 1).join(OB) + DB : DB)
    }

    function FY(BB) {
      return BB.replace(mY, "\\$&")
    }

    function iY(BB) {
      return new RegExp("^(?:" + BB.map(FY).join("|") + ")", "i")
    }

    function LY(BB) {
      return new Map(BB.map(((BB, OB) => [BB.toLowerCase(), OB])))
    }

    function gY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 1));
      return YB ? (BB.w = +YB[0], GB + YB[0].length) : -1
    }

    function rY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 1));
      return YB ? (BB.u = +YB[0], GB + YB[0].length) : -1
    }

    function XY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 2));
      return YB ? (BB.U = +YB[0], GB + YB[0].length) : -1
    }

    function wY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 2));
      return YB ? (BB.V = +YB[0], GB + YB[0].length) : -1
    }

    function EY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 2));
      return YB ? (BB.W = +YB[0], GB + YB[0].length) : -1
    }

    function cY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 4));
      return YB ? (BB.y = +YB[0], GB + YB[0].length) : -1
    }

    function hY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 2));
      return YB ? (BB.y = +YB[0] + (+YB[0] > 68 ? 1900 : 2e3), GB + YB[0].length) : -1
    }

    function aY(BB, OB, GB) {
      var YB = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(OB.slice(GB, GB + 6));
      return YB ? (BB.Z = YB[1] ? 0 : -(YB[2] + (YB[3] || "00")), GB + YB[0].length) : -1
    }

    function eY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 1));
      return YB ? (BB.q = 3 * YB[0] - 3, GB + YB[0].length) : -1
    }

    function TY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 2));
      return YB ? (BB.m = YB[0] - 1, GB + YB[0].length) : -1
    }

    function bY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 2));
      return YB ? (BB.d = +YB[0], GB + YB[0].length) : -1
    }

    function CY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 3));
      return YB ? (BB.m = 0, BB.d = +YB[0], GB + YB[0].length) : -1
    }

    function HY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 2));
      return YB ? (BB.H = +YB[0], GB + YB[0].length) : -1
    }

    function vY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 2));
      return YB ? (BB.M = +YB[0], GB + YB[0].length) : -1
    }

    function sY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 2));
      return YB ? (BB.S = +YB[0], GB + YB[0].length) : -1
    }

    function xY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 3));
      return YB ? (BB.L = +YB[0], GB + YB[0].length) : -1
    }

    function tY(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB, GB + 6));
      return YB ? (BB.L = Math.floor(YB[0] / 1e3), GB + YB[0].length) : -1
    }

    function BD(BB, OB, GB) {
      var YB = uY.exec(OB.slice(GB, GB + 1));
      return YB ? GB + YB[0].length : -1
    }

    function OD(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB));
      return YB ? (BB.Q = +YB[0], GB + YB[0].length) : -1
    }

    function GD(BB, OB, GB) {
      var YB = KY.exec(OB.slice(GB));
      return YB ? (BB.s = +YB[0], GB + YB[0].length) : -1
    }

    function YD(BB, OB) {
      return IY(BB.getDate(), OB, 2)
    }

    function DD(BB, OB) {
      return IY(BB.getHours(), OB, 2)
    }

    function QD(BB, OB) {
      return IY(BB.getHours() % 12 || 12, OB, 2)
    }

    function oD(BB, OB) {
      return IY(1 + bG.count(pY(BB), BB), OB, 3)
    }

    function jD(BB, OB) {
      return IY(BB.getMilliseconds(), OB, 3)
    }

    function yD(BB, OB) {
      return jD(BB, OB) + "000"
    }

    function JD(BB, OB) {
      return IY(BB.getMonth() + 1, OB, 2)
    }

    function MD(BB, OB) {
      return IY(BB.getMinutes(), OB, 2)
    }

    function PD(BB, OB) {
      return IY(BB.getSeconds(), OB, 2)
    }

    function zD(BB) {
      var OB = BB.getDay();
      return 0 === OB ? 7 : OB
    }

    function lD(BB, OB) {
      return IY(sG.count(pY(BB) - 1, BB), OB, 2)
    }

    function pD(BB) {
      var OB = BB.getDay();
      return OB >= 4 || 0 === OB ? OY(BB) : OY.ceil(BB)
    }

    function qD(BB, OB) {
      return BB = pD(BB), IY(OY.count(pY(BB), BB) + (4 === pY(BB).getDay()), OB, 2)
    }

    function ZD(BB) {
      return BB.getDay()
    }

    function ND(BB, OB) {
      return IY(xG.count(pY(BB) - 1, BB), OB, 2)
    }

    function RD(BB, OB) {
      return IY(BB.getFullYear() % 100, OB, 2)
    }

    function WD(BB, OB) {
      return IY((BB = pD(BB)).getFullYear() % 100, OB, 2)
    }

    function AD(BB, OB) {
      return IY(BB.getFullYear() % 1e4, OB, 4)
    }

    function VD(BB, OB) {
      var GB = BB.getDay();
      return IY((BB = GB >= 4 || 0 === GB ? OY(BB) : OY.ceil(BB)).getFullYear() % 1e4, OB, 4)
    }

    function SD(BB) {
      var OB = BB.getTimezoneOffset();
      return (OB > 0 ? "-" : (OB *= -1, "+")) + IY(OB / 60 | 0, "0", 2) + IY(OB % 60, "0", 2)
    }

    function nD(BB, OB) {
      return IY(BB.getUTCDate(), OB, 2)
    }

    function UD(BB, OB) {
      return IY(BB.getUTCHours(), OB, 2)
    }

    function fD(BB, OB) {
      return IY(BB.getUTCHours() % 12 || 12, OB, 2)
    }

    function kD(BB, OB) {
      return IY(1 + CG.count(qY(BB), BB), OB, 3)
    }

    function dD(BB, OB) {
      return IY(BB.getUTCMilliseconds(), OB, 3)
    }

    function KD(BB, OB) {
      return dD(BB, OB) + "000"
    }

    function uD(BB, OB) {
      return IY(BB.getUTCMonth() + 1, OB, 2)
    }

    function mD(BB, OB) {
      return IY(BB.getUTCMinutes(), OB, 2)
    }

    function ID(BB, OB) {
      return IY(BB.getUTCSeconds(), OB, 2)
    }

    function FD(BB) {
      var OB = BB.getUTCDay();
      return 0 === OB ? 7 : OB
    }

    function iD(BB, OB) {
      return IY(QY.count(qY(BB) - 1, BB), OB, 2)
    }

    function LD(BB) {
      var OB = BB.getUTCDay();
      return OB >= 4 || 0 === OB ? JY(BB) : JY.ceil(BB)
    }

    function gD(BB, OB) {
      return BB = LD(BB), IY(JY.count(qY(BB), BB) + (4 === qY(BB).getUTCDay()), OB, 2)
    }

    function rD(BB) {
      return BB.getUTCDay()
    }

    function XD(BB, OB) {
      return IY(oY.count(qY(BB) - 1, BB), OB, 2)
    }

    function wD(BB, OB) {
      return IY(BB.getUTCFullYear() % 100, OB, 2)
    }

    function ED(BB, OB) {
      return IY((BB = LD(BB)).getUTCFullYear() % 100, OB, 2)
    }

    function cD(BB, OB) {
      return IY(BB.getUTCFullYear() % 1e4, OB, 4)
    }

    function hD(BB, OB) {
      var GB = BB.getUTCDay();
      return IY((BB = GB >= 4 || 0 === GB ? JY(BB) : JY.ceil(BB)).getUTCFullYear() % 1e4, OB, 4)
    }

    function aD() {
      return "+0000"
    }

    function eD() {
      return "%"
    }

    function TD(BB) {
      return +BB
    }

    function bD(BB) {
      return Math.floor(+BB / 1e3)
    }

    function CD(BB) {
      return new Date(BB)
    }

    function HD(BB) {
      return BB instanceof Date ? +BB : +new Date(+BB)
    }

    function vD(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB) {
      var MB = dO(),
        PB = MB.invert,
        zB = MB.domain,
        lB = JB(".%L"),
        pB = JB(":%S"),
        qB = JB("%I:%M"),
        ZB = JB("%I %p"),
        NB = JB("%a %d"),
        RB = JB("%b %d"),
        WB = JB("%B"),
        AB = JB("%Y");

      function VB(BB) {
        return (yB(BB) < BB ? lB : jB(BB) < BB ? pB : oB(BB) < BB ? qB : QB(BB) < BB ? ZB : YB(BB) < BB ? DB(BB) < BB ? NB : RB : GB(BB) < BB ? WB : AB)(BB)
      }
      return MB.invert = function(BB) {
        return new Date(PB(BB))
      }, MB.domain = function(BB) {
        return arguments.length ? zB(Array.from(BB, HD)) : zB().map(CD)
      }, MB.ticks = function(OB) {
        var GB = zB();
        return BB(GB[0], GB[GB.length - 1], null == OB ? 10 : OB)
      }, MB.tickFormat = function(BB, OB) {
        return null == OB ? VB : JB(OB)
      }, MB.nice = function(BB) {
        var GB = zB();
        return BB && "function" === typeof BB.range || (BB = OB(GB[0], GB[GB.length - 1], null == BB ? 10 : BB)), BB ? zB(vO(GB, BB)) : MB
      }, MB.copy = function() {
        return fO(MB, vD(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB))
      }, MB
    }

    function sD() {
      return uO.g.apply(vD(WY, AY, pY, zY, sG, bG, eG, hG, cG, fY).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function xD() {
      return uO.g.apply(vD(NY, RY, qY, lY, QY, CG, TG, aG, cG, kY).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function tD() {
      var BB, OB, GB, YB, DB, QB = 0,
        oB = 1,
        jB = VO,
        yB = !1;

      function JB(OB) {
        return null == OB || isNaN(OB = +OB) ? DB : jB(0 === GB ? .5 : (OB = (YB(OB) - BB) * GB, yB ? Math.max(0, Math.min(1, OB)) : OB))
      }

      function MB(BB) {
        return function(OB) {
          var GB, YB;
          return arguments.length ? ([GB, YB] = OB, jB = BB(GB, YB), JB) : [jB(0), jB(1)]
        }
      }
      return JB.domain = function(DB) {
          return arguments.length ? ([QB, oB] = DB, BB = YB(QB = +QB), OB = YB(oB = +oB), GB = BB === OB ? 0 : 1 / (OB - BB), JB) : [QB, oB]
        }, JB.clamp = function(BB) {
          return arguments.length ? (yB = !!BB, JB) : yB
        }, JB.interpolator = function(BB) {
          return arguments.length ? (jB = BB, JB) : jB
        }, JB.range = MB(NO), JB.rangeRound = MB(RO), JB.unknown = function(BB) {
          return arguments.length ? (DB = BB, JB) : DB
        },
        function(DB) {
          return YB = DB, BB = DB(QB), OB = DB(oB), GB = BB === OB ? 0 : 1 / (OB - BB), JB
        }
    }

    function BQ(BB, OB) {
      return OB.domain(BB.domain()).interpolator(BB.interpolator()).clamp(BB.clamp()).unknown(BB.unknown())
    }

    function OQ() {
      var BB = bO(tD()(VO));
      return BB.copy = function() {
        return BQ(BB, OQ())
      }, uO.d.apply(BB, arguments)
    }

    function GQ() {
      var BB = YG(tD()).domain([1, 10]);
      return BB.copy = function() {
        return BQ(BB, GQ()).base(BB.base())
      }, uO.d.apply(BB, arguments)
    }

    function YQ() {
      var BB = jG(tD());
      return BB.copy = function() {
        return BQ(BB, YQ()).constant(BB.constant())
      }, uO.d.apply(BB, arguments)
    }

    function DQ() {
      var BB = lG(tD());
      return BB.copy = function() {
        return BQ(BB, DQ()).exponent(BB.exponent())
      }, uO.d.apply(BB, arguments)
    }

    function QQ() {
      return DQ.apply(null, arguments).exponent(.5)
    }

    function oQ() {
      var BB = [],
        OB = VO;

      function GB(GB) {
        if (null != GB && !isNaN(GB = +GB)) return OB((WB(BB, GB, 1) - 1) / (BB.length - 1))
      }
      return GB.domain = function(OB) {
        if (!arguments.length) return BB.slice();
        BB = [];
        for (let GB of OB) null == GB || isNaN(GB = +GB) || BB.push(GB);
        return BB.sort(zB), GB
      }, GB.interpolator = function(BB) {
        return arguments.length ? (OB = BB, GB) : OB
      }, GB.range = function() {
        return BB.map(((GB, YB) => OB(YB / (BB.length - 1))))
      }, GB.quantiles = function(OB) {
        return Array.from({
          length: OB + 1
        }, ((GB, YB) => UG(BB, YB / OB)))
      }, GB.copy = function() {
        return oQ(OB).domain(BB)
      }, uO.d.apply(GB, arguments)
    }

    function jQ() {
      var BB, OB, GB, YB, DB, QB, oB, jB = 0,
        yB = .5,
        JB = 1,
        MB = 1,
        PB = VO,
        zB = !1;

      function lB(BB) {
        return isNaN(BB = +BB) ? oB : (BB = .5 + ((BB = +QB(BB)) - OB) * (MB * BB < MB * OB ? YB : DB), PB(zB ? Math.max(0, Math.min(1, BB)) : BB))
      }

      function pB(BB) {
        return function(OB) {
          var GB, YB, DB;
          return arguments.length ? ([GB, YB, DB] = OB, PB = function(BB, OB) {
            void 0 === OB && (OB = BB, BB = NO);
            for (var GB = 0, YB = OB.length - 1, DB = OB[0], QB = new Array(YB < 0 ? 0 : YB); GB < YB;) QB[GB] = BB(DB, DB = OB[++GB]);
            return function(BB) {
              var OB = Math.max(0, Math.min(YB - 1, Math.floor(BB *= YB)));
              return QB[OB](BB - OB)
            }
          }(BB, [GB, YB, DB]), lB) : [PB(0), PB(.5), PB(1)]
        }
      }
      return lB.domain = function(oB) {
          return arguments.length ? ([jB, yB, JB] = oB, BB = QB(jB = +jB), OB = QB(yB = +yB), GB = QB(JB = +JB), YB = BB === OB ? 0 : .5 / (OB - BB), DB = OB === GB ? 0 : .5 / (GB - OB), MB = OB < BB ? -1 : 1, lB) : [jB, yB, JB]
        }, lB.clamp = function(BB) {
          return arguments.length ? (zB = !!BB, lB) : zB
        }, lB.interpolator = function(BB) {
          return arguments.length ? (PB = BB, lB) : PB
        }, lB.range = pB(NO), lB.rangeRound = pB(RO), lB.unknown = function(BB) {
          return arguments.length ? (oB = BB, lB) : oB
        },
        function(oB) {
          return QB = oB, BB = oB(jB), OB = oB(yB), GB = oB(JB), YB = BB === OB ? 0 : .5 / (OB - BB), DB = OB === GB ? 0 : .5 / (GB - OB), MB = OB < BB ? -1 : 1, lB
        }
    }

    function yQ() {
      var BB = bO(jQ()(VO));
      return BB.copy = function() {
        return BQ(BB, yQ())
      }, uO.d.apply(BB, arguments)
    }

    function JQ() {
      var BB = YG(jQ()).domain([.1, 1, 10]);
      return BB.copy = function() {
        return BQ(BB, JQ()).base(BB.base())
      }, uO.d.apply(BB, arguments)
    }

    function MQ() {
      var BB = jG(jQ());
      return BB.copy = function() {
        return BQ(BB, MQ()).constant(BB.constant())
      }, uO.d.apply(BB, arguments)
    }

    function PQ() {
      var BB = lG(jQ());
      return BB.copy = function() {
        return BQ(BB, PQ()).exponent(BB.exponent())
      }, uO.d.apply(BB, arguments)
    }

    function zQ() {
      return PQ.apply(null, arguments).exponent(.5)
    }

    function lQ(BB, OB) {
      if ((DB = BB.length) > 1)
        for (var GB, YB, DB, QB = 1, oB = BB[OB[0]], jB = oB.length; QB < DB; ++QB)
          for (YB = oB, oB = BB[OB[QB]], GB = 0; GB < jB; ++GB) oB[GB][1] += oB[GB][0] = isNaN(YB[GB][1]) ? YB[GB][0] : YB[GB][1]
    }! function(BB) {
      UY = function(BB) {
        var OB = BB.dateTime,
          GB = BB.date,
          YB = BB.time,
          DB = BB.periods,
          QB = BB.days,
          oB = BB.shortDays,
          jB = BB.months,
          yB = BB.shortMonths,
          JB = iY(DB),
          MB = LY(DB),
          PB = iY(QB),
          zB = LY(QB),
          lB = iY(oB),
          pB = LY(oB),
          qB = iY(jB),
          ZB = LY(jB),
          NB = iY(yB),
          RB = LY(yB),
          WB = {
            a: function(BB) {
              return oB[BB.getDay()]
            },
            A: function(BB) {
              return QB[BB.getDay()]
            },
            b: function(BB) {
              return yB[BB.getMonth()]
            },
            B: function(BB) {
              return jB[BB.getMonth()]
            },
            c: null,
            d: YD,
            e: YD,
            f: yD,
            g: WD,
            G: VD,
            H: DD,
            I: QD,
            j: oD,
            L: jD,
            m: JD,
            M: MD,
            p: function(BB) {
              return DB[+(BB.getHours() >= 12)]
            },
            q: function(BB) {
              return 1 + ~~(BB.getMonth() / 3)
            },
            Q: TD,
            s: bD,
            S: PD,
            u: zD,
            U: lD,
            V: qD,
            w: ZD,
            W: ND,
            x: null,
            X: null,
            y: RD,
            Y: AD,
            Z: SD,
            "%": eD
          },
          AB = {
            a: function(BB) {
              return oB[BB.getUTCDay()]
            },
            A: function(BB) {
              return QB[BB.getUTCDay()]
            },
            b: function(BB) {
              return yB[BB.getUTCMonth()]
            },
            B: function(BB) {
              return jB[BB.getUTCMonth()]
            },
            c: null,
            d: nD,
            e: nD,
            f: KD,
            g: ED,
            G: hD,
            H: UD,
            I: fD,
            j: kD,
            L: dD,
            m: uD,
            M: mD,
            p: function(BB) {
              return DB[+(BB.getUTCHours() >= 12)]
            },
            q: function(BB) {
              return 1 + ~~(BB.getUTCMonth() / 3)
            },
            Q: TD,
            s: bD,
            S: ID,
            u: FD,
            U: iD,
            V: gD,
            w: rD,
            W: XD,
            x: null,
            X: null,
            y: wD,
            Y: cD,
            Z: aD,
            "%": eD
          },
          VB = {
            a: function(BB, OB, GB) {
              var YB = lB.exec(OB.slice(GB));
              return YB ? (BB.w = pB.get(YB[0].toLowerCase()), GB + YB[0].length) : -1
            },
            A: function(BB, OB, GB) {
              var YB = PB.exec(OB.slice(GB));
              return YB ? (BB.w = zB.get(YB[0].toLowerCase()), GB + YB[0].length) : -1
            },
            b: function(BB, OB, GB) {
              var YB = NB.exec(OB.slice(GB));
              return YB ? (BB.m = RB.get(YB[0].toLowerCase()), GB + YB[0].length) : -1
            },
            B: function(BB, OB, GB) {
              var YB = qB.exec(OB.slice(GB));
              return YB ? (BB.m = ZB.get(YB[0].toLowerCase()), GB + YB[0].length) : -1
            },
            c: function(BB, GB, YB) {
              return UB(BB, OB, GB, YB)
            },
            d: bY,
            e: bY,
            f: tY,
            g: hY,
            G: cY,
            H: HY,
            I: HY,
            j: CY,
            L: xY,
            m: TY,
            M: vY,
            p: function(BB, OB, GB) {
              var YB = JB.exec(OB.slice(GB));
              return YB ? (BB.p = MB.get(YB[0].toLowerCase()), GB + YB[0].length) : -1
            },
            q: eY,
            Q: OD,
            s: GD,
            S: sY,
            u: rY,
            U: XY,
            V: wY,
            w: gY,
            W: EY,
            x: function(BB, OB, YB) {
              return UB(BB, GB, OB, YB)
            },
            X: function(BB, OB, GB) {
              return UB(BB, YB, OB, GB)
            },
            y: hY,
            Y: cY,
            Z: aY,
            "%": BD
          };

        function SB(BB, OB) {
          return function(GB) {
            var YB, DB, QB, oB = [],
              jB = -1,
              yB = 0,
              JB = BB.length;
            for (GB instanceof Date || (GB = new Date(+GB)); ++jB < JB;) 37 === BB.charCodeAt(jB) && (oB.push(BB.slice(yB, jB)), null != (DB = dY[YB = BB.charAt(++jB)]) ? YB = BB.charAt(++jB) : DB = "e" === YB ? " " : "0", (QB = OB[YB]) && (YB = QB(GB, DB)), oB.push(YB), yB = jB + 1);
            return oB.push(BB.slice(yB, jB)), oB.join("")
          }
        }

        function nB(BB, OB) {
          return function(GB) {
            var YB, DB, QB = nY(1900, void 0, 1);
            if (UB(QB, BB, GB += "", 0) != GB.length) return null;
            if ("Q" in QB) return new Date(QB.Q);
            if ("s" in QB) return new Date(1e3 * QB.s + ("L" in QB ? QB.L : 0));
            if (OB && !("Z" in QB) && (QB.Z = 0), "p" in QB && (QB.H = QB.H % 12 + 12 * QB.p), void 0 === QB.m && (QB.m = "q" in QB ? QB.q : 0), "V" in QB) {
              if (QB.V < 1 || QB.V > 53) return null;
              "w" in QB || (QB.w = 1), "Z" in QB ? (DB = (YB = SY(nY(QB.y, 0, 1))).getUTCDay(), YB = DB > 4 || 0 === DB ? oY.ceil(YB) : oY(YB), YB = CG.offset(YB, 7 * (QB.V - 1)), QB.y = YB.getUTCFullYear(), QB.m = YB.getUTCMonth(), QB.d = YB.getUTCDate() + (QB.w + 6) % 7) : (DB = (YB = VY(nY(QB.y, 0, 1))).getDay(), YB = DB > 4 || 0 === DB ? xG.ceil(YB) : xG(YB), YB = bG.offset(YB, 7 * (QB.V - 1)), QB.y = YB.getFullYear(), QB.m = YB.getMonth(), QB.d = YB.getDate() + (QB.w + 6) % 7)
            } else("W" in QB || "U" in QB) && ("w" in QB || (QB.w = "u" in QB ? QB.u % 7 : "W" in QB ? 1 : 0), DB = "Z" in QB ? SY(nY(QB.y, 0, 1)).getUTCDay() : VY(nY(QB.y, 0, 1)).getDay(), QB.m = 0, QB.d = "W" in QB ? (QB.w + 6) % 7 + 7 * QB.W - (DB + 5) % 7 : QB.w + 7 * QB.U - (DB + 6) % 7);
            return "Z" in QB ? (QB.H += QB.Z / 100 | 0, QB.M += QB.Z % 100, SY(QB)) : VY(QB)
          }
        }

        function UB(BB, OB, GB, YB) {
          for (var DB, QB, oB = 0, jB = OB.length, yB = GB.length; oB < jB;) {
            if (YB >= yB) return -1;
            if (37 === (DB = OB.charCodeAt(oB++))) {
              if (DB = OB.charAt(oB++), !(QB = VB[DB in dY ? OB.charAt(oB++) : DB]) || (YB = QB(BB, GB, YB)) < 0) return -1
            } else if (DB != GB.charCodeAt(YB++)) return -1
          }
          return YB
        }
        return WB.x = SB(GB, WB), WB.X = SB(YB, WB), WB.c = SB(OB, WB), AB.x = SB(GB, AB), AB.X = SB(YB, AB), AB.c = SB(OB, AB), {
          format: function(BB) {
            var OB = SB(BB += "", WB);
            return OB.toString = function() {
              return BB
            }, OB
          },
          parse: function(BB) {
            var OB = nB(BB += "", !1);
            return OB.toString = function() {
              return BB
            }, OB
          },
          utcFormat: function(BB) {
            var OB = SB(BB += "", AB);
            return OB.toString = function() {
              return BB
            }, OB
          },
          utcParse: function(BB) {
            var OB = nB(BB += "", !0);
            return OB.toString = function() {
              return BB
            }, OB
          }
        }
      }(BB), fY = UY.format, UY.parse, kY = UY.utcFormat, UY.utcParse
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
    var pQ = GB(6712),
      qQ = GB(6607);

    function ZQ(BB) {
      for (var OB = BB.length, GB = new Array(OB); --OB >= 0;) GB[OB] = OB;
      return GB
    }

    function NQ(BB, OB) {
      return BB[OB]
    }

    function RQ(BB) {
      const OB = [];
      return OB.key = BB, OB
    }
    var WQ = GB(6673),
      AQ = GB.n(WQ),
      VQ = GB(6683),
      SQ = GB.n(VQ),
      nQ = GB(5930),
      UQ = GB.n(nQ),
      fQ = GB(5782),
      kQ = GB.n(fQ),
      dQ = GB(5678),
      KQ = GB.n(dQ),
      uQ = GB(5701),
      mQ = GB.n(uQ),
      IQ = GB(6689),
      FQ = GB.n(IQ),
      iQ = GB(5686),
      LQ = GB.n(iQ),
      gQ = GB(6566),
      rQ = GB.n(gQ),
      XQ = GB(6695),
      wQ = GB.n(XQ),
      EQ = GB(6022),
      cQ = GB.n(EQ),
      hQ = GB(6699),
      aQ = GB.n(hQ);

    function eQ(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return TQ(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(BB)) return Array.from(BB)
      }(BB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return TQ(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return TQ(BB, OB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function TQ(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }
    var bQ = function(BB) {
        return BB
      },
      CQ = {
        "@@functional/placeholder": !0
      },
      HQ = function(BB) {
        return BB === CQ
      },
      vQ = function(BB) {
        return function OB() {
          return 0 === arguments.length || 1 === arguments.length && HQ(arguments.length <= 0 ? void 0 : arguments[0]) ? OB : BB.apply(void 0, arguments)
        }
      },
      sQ = function BB(OB, GB) {
        return 1 === OB ? GB : vQ((function() {
          for (var YB = arguments.length, DB = new Array(YB), QB = 0; QB < YB; QB++) DB[QB] = arguments[QB];
          var oB = DB.filter((function(BB) {
            return BB !== CQ
          })).length;
          return oB >= OB ? GB.apply(void 0, DB) : BB(OB - oB, vQ((function() {
            for (var BB = arguments.length, OB = new Array(BB), YB = 0; YB < BB; YB++) OB[YB] = arguments[YB];
            var QB = DB.map((function(BB) {
              return HQ(BB) ? OB.shift() : BB
            }));
            return GB.apply(void 0, eQ(QB).concat(OB))
          })))
        }))
      },
      xQ = function(BB) {
        return sQ(BB.length, BB)
      },
      tQ = function(BB, OB) {
        for (var GB = [], YB = BB; YB < OB; ++YB) GB[YB - BB] = YB;
        return GB
      },
      Bo = xQ((function(BB, OB) {
        return Array.isArray(OB) ? OB.map(BB) : Object.keys(OB).map((function(BB) {
          return OB[BB]
        })).map(BB)
      })),
      Oo = function() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        if (!OB.length) return bQ;
        var YB = OB.reverse(),
          DB = YB[0],
          QB = YB.slice(1);
        return function() {
          return QB.reduce((function(BB, OB) {
            return OB(BB)
          }), DB.apply(void 0, arguments))
        }
      },
      Go = function(BB) {
        return Array.isArray(BB) ? BB.reverse() : BB.split("").reverse.join("")
      },
      Yo = function(BB) {
        var OB = null,
          GB = null;
        return function() {
          for (var YB = arguments.length, DB = new Array(YB), QB = 0; QB < YB; QB++) DB[QB] = arguments[QB];
          return OB && DB.every((function(BB, GB) {
            return BB === OB[GB]
          })) ? GB : (OB = DB, GB = BB.apply(void 0, DB))
        }
      };
    const Do = {
      rangeStep: function(BB, OB, GB) {
        for (var YB = new(aQ())(BB), DB = 0, QB = []; YB.lt(OB) && DB < 1e5;) QB.push(YB.toNumber()), YB = YB.add(GB), DB++;
        return QB
      },
      getDigitCount: function(BB) {
        return 0 === BB ? 1 : Math.floor(new(aQ())(BB).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: xQ((function(BB, OB, GB) {
        var YB = +BB;
        return YB + GB * (+OB - YB)
      })),
      uninterpolateNumber: xQ((function(BB, OB, GB) {
        var YB = OB - +BB;
        return (GB - BB) / (YB = YB || 1 / 0)
      })),
      uninterpolateTruncation: xQ((function(BB, OB, GB) {
        var YB = OB - +BB;
        return YB = YB || 1 / 0, Math.max(0, Math.min(1, (GB - BB) / YB))
      }))
    };

    function Qo(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return yo(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(BB)) return Array.from(BB)
      }(BB) || jo(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function oo(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(BB))) return;
        var GB = [],
          YB = !0,
          DB = !1,
          QB = void 0;
        try {
          for (var oB, jB = BB[Symbol.iterator](); !(YB = (oB = jB.next()).done) && (GB.push(oB.value), !OB || GB.length !== OB); YB = !0);
        } catch (yB) {
          DB = !0, QB = yB
        } finally {
          try {
            YB || null == jB.return || jB.return()
          } finally {
            if (DB) throw QB
          }
        }
        return GB
      }(BB, OB) || jo(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function jo(BB, OB) {
      if (BB) {
        if ("string" === typeof BB) return yo(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === GB && BB.constructor && (GB = BB.constructor.name), "Map" === GB || "Set" === GB ? Array.from(BB) : "Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB) ? yo(BB, OB) : void 0
      }
    }

    function yo(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function Jo(BB) {
      var OB = oo(BB, 2),
        GB = OB[0],
        YB = OB[1],
        DB = GB,
        QB = YB;
      return GB > YB && (DB = YB, QB = GB), [DB, QB]
    }

    function Mo(BB, OB, GB) {
      if (BB.lte(0)) return new(aQ())(0);
      var YB = Do.getDigitCount(BB.toNumber()),
        DB = new(aQ())(10).pow(YB),
        QB = BB.div(DB),
        oB = 1 !== YB ? .05 : .1,
        jB = new(aQ())(Math.ceil(QB.div(oB).toNumber())).add(GB).mul(oB).mul(DB);
      return OB ? jB : new(aQ())(Math.ceil(jB))
    }

    function Po(BB, OB, GB) {
      var YB = 1,
        DB = new(aQ())(BB);
      if (!DB.isint() && GB) {
        var QB = Math.abs(BB);
        QB < 1 ? (YB = new(aQ())(10).pow(Do.getDigitCount(BB) - 1), DB = new(aQ())(Math.floor(DB.div(YB).toNumber())).mul(YB)) : QB > 1 && (DB = new(aQ())(Math.floor(BB)))
      } else 0 === BB ? DB = new(aQ())(Math.floor((OB - 1) / 2)) : GB || (DB = new(aQ())(Math.floor(BB)));
      var oB = Math.floor((OB - 1) / 2);
      return Oo(Bo((function(BB) {
        return DB.add(new(aQ())(BB - oB).mul(YB)).toNumber()
      })), tQ)(0, OB)
    }

    function zo(BB, OB, GB, YB) {
      var DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((OB - BB) / (GB - 1))) return {
        step: new(aQ())(0),
        tickMin: new(aQ())(0),
        tickMax: new(aQ())(0)
      };
      var QB, oB = Mo(new(aQ())(OB).sub(BB).div(GB - 1), YB, DB);
      QB = BB <= 0 && OB >= 0 ? new(aQ())(0) : (QB = new(aQ())(BB).add(OB).div(2)).sub(new(aQ())(QB).mod(oB));
      var jB = Math.ceil(QB.sub(BB).div(oB).toNumber()),
        yB = Math.ceil(new(aQ())(OB).sub(QB).div(oB).toNumber()),
        JB = jB + yB + 1;
      return JB > GB ? zo(BB, OB, GB, YB, DB + 1) : (JB < GB && (yB = OB > 0 ? yB + (GB - JB) : yB, jB = OB > 0 ? jB : jB + (GB - JB)), {
        step: oB,
        tickMin: QB.sub(new(aQ())(jB).mul(oB)),
        tickMax: QB.add(new(aQ())(yB).mul(oB))
      })
    }
    var po = Yo((function(BB) {
        var OB = oo(BB, 2),
          GB = OB[0],
          YB = OB[1],
          DB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          QB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          oB = Math.max(DB, 2),
          jB = oo(Jo([GB, YB]), 2),
          yB = jB[0],
          JB = jB[1];
        if (yB === -1 / 0 || JB === 1 / 0) {
          var MB = JB === 1 / 0 ? [yB].concat(Qo(tQ(0, DB - 1).map((function() {
            return 1 / 0
          })))) : [].concat(Qo(tQ(0, DB - 1).map((function() {
            return -1 / 0
          }))), [JB]);
          return GB > YB ? Go(MB) : MB
        }
        if (yB === JB) return Po(yB, DB, QB);
        var PB = zo(yB, JB, oB, QB),
          zB = PB.step,
          lB = PB.tickMin,
          pB = PB.tickMax,
          qB = Do.rangeStep(lB, pB.add(new(aQ())(.1).mul(zB)), zB);
        return GB > YB ? Go(qB) : qB
      })),
      qo = (Yo((function(BB) {
        var OB = oo(BB, 2),
          GB = OB[0],
          YB = OB[1],
          DB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          QB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          oB = Math.max(DB, 2),
          jB = oo(Jo([GB, YB]), 2),
          yB = jB[0],
          JB = jB[1];
        if (yB === -1 / 0 || JB === 1 / 0) return [GB, YB];
        if (yB === JB) return Po(yB, DB, QB);
        var MB = Mo(new(aQ())(JB).sub(yB).div(oB - 1), QB, 0),
          PB = Oo(Bo((function(BB) {
            return new(aQ())(yB).add(new(aQ())(BB).mul(MB)).toNumber()
          })), tQ)(0, oB).filter((function(BB) {
            return BB >= yB && BB <= JB
          }));
        return GB > YB ? Go(PB) : PB
      })), Yo((function(BB, OB) {
        var GB = oo(BB, 2),
          YB = GB[0],
          DB = GB[1],
          QB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          oB = oo(Jo([YB, DB]), 2),
          jB = oB[0],
          yB = oB[1];
        if (jB === -1 / 0 || yB === 1 / 0) return [YB, DB];
        if (jB === yB) return [jB];
        var JB = Math.max(OB, 2),
          MB = Mo(new(aQ())(yB).sub(jB).div(JB - 1), QB, 0),
          PB = [].concat(Qo(Do.rangeStep(new(aQ())(jB), new(aQ())(yB).sub(new(aQ())(.99).mul(MB)), MB)), [yB]);
        return YB > DB ? Go(PB) : PB
      }))),
      Zo = GB(6702),
      No = GB(5671),
      Ro = GB(5938),
      Wo = GB(6710);

    function Ao(BB) {
      return Ao = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, Ao(BB)
    }

    function Vo(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return So(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || function(BB, OB) {
        if (!BB) return;
        if ("string" === typeof BB) return So(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        "Object" === GB && BB.constructor && (GB = BB.constructor.name);
        if ("Map" === GB || "Set" === GB) return Array.from(BB);
        if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return So(BB, OB)
      }(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function So(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function no(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function Uo(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? no(Object(GB), !0).forEach((function(OB) {
          fo(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : no(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function fo(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != Ao(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != Ao(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == Ao(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function ko(BB, OB, GB) {
      return UQ()(BB) || UQ()(OB) ? GB : (0, No.z)(OB) ? mQ()(BB, OB, GB) : kQ()(OB) ? OB(BB) : GB
    }

    function Ko(BB, OB, GB, YB) {
      var DB = FQ()(BB, (function(BB) {
        return ko(BB, OB)
      }));
      if ("number" === GB) {
        var QB = DB.filter((function(BB) {
          return (0, No.C)(BB) || parseFloat(BB)
        }));
        return QB.length ? [SQ()(QB), AQ()(QB)] : [1 / 0, -1 / 0]
      }
      return (YB ? DB.filter((function(BB) {
        return !UQ()(BB)
      })) : DB).map((function(BB) {
        return (0, No.z)(BB) || BB instanceof Date ? BB : ""
      }))
    }
    var uo = function(BB) {
        var OB, GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          YB = arguments.length > 2 ? arguments[2] : void 0,
          DB = arguments.length > 3 ? arguments[3] : void 0,
          QB = -1,
          oB = null !== (OB = null === GB || void 0 === GB ? void 0 : GB.length) && void 0 !== OB ? OB : 0;
        if (oB <= 1) return 0;
        if (DB && "angleAxis" === DB.axisType && Math.abs(Math.abs(DB.range[1] - DB.range[0]) - 360) <= 1e-6)
          for (var jB = DB.range, yB = 0; yB < oB; yB++) {
            var JB = yB > 0 ? YB[yB - 1].coordinate : YB[oB - 1].coordinate,
              MB = YB[yB].coordinate,
              PB = yB >= oB - 1 ? YB[0].coordinate : YB[yB + 1].coordinate,
              zB = void 0;
            if ((0, No.J)(MB - JB) !== (0, No.J)(PB - MB)) {
              var lB = [];
              if ((0, No.J)(PB - MB) === (0, No.J)(jB[1] - jB[0])) {
                zB = PB;
                var pB = MB + jB[1] - jB[0];
                lB[0] = Math.min(pB, (pB + JB) / 2), lB[1] = Math.max(pB, (pB + JB) / 2)
              } else {
                zB = JB;
                var qB = PB + jB[1] - jB[0];
                lB[0] = Math.min(MB, (qB + MB) / 2), lB[1] = Math.max(MB, (qB + MB) / 2)
              }
              var ZB = [Math.min(MB, (zB + MB) / 2), Math.max(MB, (zB + MB) / 2)];
              if (BB > ZB[0] && BB <= ZB[1] || BB >= lB[0] && BB <= lB[1]) {
                QB = YB[yB].index;
                break
              }
            } else {
              var NB = Math.min(JB, PB),
                RB = Math.max(JB, PB);
              if (BB > (NB + MB) / 2 && BB <= (RB + MB) / 2) {
                QB = YB[yB].index;
                break
              }
            }
          } else
            for (var WB = 0; WB < oB; WB++)
              if (0 === WB && BB <= (GB[WB].coordinate + GB[WB + 1].coordinate) / 2 || WB > 0 && WB < oB - 1 && BB > (GB[WB].coordinate + GB[WB - 1].coordinate) / 2 && BB <= (GB[WB].coordinate + GB[WB + 1].coordinate) / 2 || WB === oB - 1 && BB > (GB[WB].coordinate + GB[WB - 1].coordinate) / 2) {
                QB = GB[WB].index;
                break
              } return QB
      },
      mo = function(BB) {
        var OB, GB, YB = BB.type.displayName,
          DB = null !== (OB = BB.type) && void 0 !== OB && OB.defaultProps ? Uo(Uo({}, BB.type.defaultProps), BB.props) : BB.props,
          QB = DB.stroke,
          oB = DB.fill;
        switch (YB) {
          case "Line":
            GB = QB;
            break;
          case "Area":
          case "Radar":
            GB = QB && "none" !== QB ? QB : oB;
            break;
          default:
            GB = oB
        }
        return GB
      },
      Io = function(BB) {
        var OB = BB.barSize,
          GB = BB.totalSize,
          YB = BB.stackGroups,
          DB = void 0 === YB ? {} : YB;
        if (!DB) return {};
        for (var QB = {}, oB = Object.keys(DB), jB = 0, yB = oB.length; jB < yB; jB++)
          for (var JB = DB[oB[jB]].stackGroups, MB = Object.keys(JB), PB = 0, zB = MB.length; PB < zB; PB++) {
            var lB = JB[MB[PB]],
              pB = lB.items,
              qB = lB.cateAxisId,
              ZB = pB.filter((function(BB) {
                return (0, Ro.q)(BB.type).indexOf("Bar") >= 0
              }));
            if (ZB && ZB.length) {
              var NB = ZB[0].type.defaultProps,
                RB = void 0 !== NB ? Uo(Uo({}, NB), ZB[0].props) : ZB[0].props,
                WB = RB.barSize,
                AB = RB[qB];
              QB[AB] || (QB[AB] = []);
              var VB = UQ()(WB) ? OB : WB;
              QB[AB].push({
                item: ZB[0],
                stackList: ZB.slice(1),
                barSize: UQ()(VB) ? void 0 : (0, No.p)(VB, GB, 0)
              })
            }
          }
        return QB
      },
      Fo = function(BB) {
        var OB = BB.barGap,
          GB = BB.barCategoryGap,
          YB = BB.bandSize,
          DB = BB.sizeList,
          QB = void 0 === DB ? [] : DB,
          oB = BB.maxBarSize,
          jB = QB.length;
        if (jB < 1) return null;
        var yB, JB = (0, No.p)(OB, YB, 0, !0),
          MB = [];
        if (QB[0].barSize === +QB[0].barSize) {
          var PB = !1,
            zB = YB / jB,
            lB = QB.reduce((function(BB, OB) {
              return BB + OB.barSize || 0
            }), 0);
          (lB += (jB - 1) * JB) >= YB && (lB -= (jB - 1) * JB, JB = 0), lB >= YB && zB > 0 && (PB = !0, lB = jB * (zB *= .9));
          var pB = {
            offset: ((YB - lB) / 2 | 0) - JB,
            size: 0
          };
          yB = QB.reduce((function(BB, OB) {
            var GB = {
                item: OB.item,
                position: {
                  offset: pB.offset + pB.size + JB,
                  size: PB ? zB : OB.barSize
                }
              },
              YB = [].concat(Vo(BB), [GB]);
            return pB = YB[YB.length - 1].position, OB.stackList && OB.stackList.length && OB.stackList.forEach((function(BB) {
              YB.push({
                item: BB,
                position: pB
              })
            })), YB
          }), MB)
        } else {
          var qB = (0, No.p)(GB, YB, 0, !0);
          YB - 2 * qB - (jB - 1) * JB <= 0 && (JB = 0);
          var ZB = (YB - 2 * qB - (jB - 1) * JB) / jB;
          ZB > 1 && (ZB >>= 0);
          var NB = oB === +oB ? Math.min(ZB, oB) : ZB;
          yB = QB.reduce((function(BB, OB, GB) {
            var YB = [].concat(Vo(BB), [{
              item: OB.item,
              position: {
                offset: qB + (ZB + JB) * GB + (ZB - NB) / 2,
                size: NB
              }
            }]);
            return OB.stackList && OB.stackList.length && OB.stackList.forEach((function(BB) {
              YB.push({
                item: BB,
                position: YB[YB.length - 1].position
              })
            })), YB
          }), MB)
        }
        return yB
      },
      io = function(BB, OB, GB, YB) {
        var DB = GB.children,
          QB = GB.width,
          oB = GB.margin,
          jB = QB - (oB.left || 0) - (oB.right || 0),
          yB = (0, Wo.c)({
            children: DB,
            legendWidth: jB
          });
        if (yB) {
          var JB = YB || {},
            MB = JB.width,
            PB = JB.height,
            zB = yB.align,
            lB = yB.verticalAlign,
            pB = yB.layout;
          if (("vertical" === pB || "horizontal" === pB && "middle" === lB) && "center" !== zB && (0, No.C)(BB[zB])) return Uo(Uo({}, BB), {}, fo({}, zB, BB[zB] + (MB || 0)));
          if (("horizontal" === pB || "vertical" === pB && "center" === zB) && "middle" !== lB && (0, No.C)(BB[lB])) return Uo(Uo({}, BB), {}, fo({}, lB, BB[lB] + (PB || 0)))
        }
        return BB
      },
      Lo = function(BB, OB, GB, YB, DB) {
        var QB = OB.props.children,
          oB = (0, Ro.i)(QB, Zo.b).filter((function(BB) {
            return function(BB, OB, GB) {
              return !!UQ()(OB) || ("horizontal" === BB ? "yAxis" === OB : "vertical" === BB || "x" === GB ? "xAxis" === OB : "y" !== GB || "yAxis" === OB)
            }(YB, DB, BB.props.direction)
          }));
        if (oB && oB.length) {
          var jB = oB.map((function(BB) {
            return BB.props.dataKey
          }));
          return BB.reduce((function(BB, OB) {
            var YB = ko(OB, GB);
            if (UQ()(YB)) return BB;
            var DB = Array.isArray(YB) ? [SQ()(YB), AQ()(YB)] : [YB, YB],
              QB = jB.reduce((function(BB, GB) {
                var YB = ko(OB, GB, 0),
                  QB = DB[0] - Math.abs(Array.isArray(YB) ? YB[0] : YB),
                  oB = DB[1] + Math.abs(Array.isArray(YB) ? YB[1] : YB);
                return [Math.min(QB, BB[0]), Math.max(oB, BB[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(QB[0], BB[0]), Math.max(QB[1], BB[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      go = function(BB, OB, GB, YB, DB) {
        var QB = OB.map((function(OB) {
          return Lo(BB, OB, GB, DB, YB)
        })).filter((function(BB) {
          return !UQ()(BB)
        }));
        return QB && QB.length ? QB.reduce((function(BB, OB) {
          return [Math.min(BB[0], OB[0]), Math.max(BB[1], OB[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      ro = function(BB, OB, GB, YB, DB) {
        var QB = OB.map((function(OB) {
          var QB = OB.props.dataKey;
          return "number" === GB && QB && Lo(BB, OB, QB, YB) || Ko(BB, QB, GB, DB)
        }));
        if ("number" === GB) return QB.reduce((function(BB, OB) {
          return [Math.min(BB[0], OB[0]), Math.max(BB[1], OB[1])]
        }), [1 / 0, -1 / 0]);
        var oB = {};
        return QB.reduce((function(BB, OB) {
          for (var GB = 0, YB = OB.length; GB < YB; GB++) oB[OB[GB]] || (oB[OB[GB]] = !0, BB.push(OB[GB]));
          return BB
        }), [])
      },
      Xo = function(BB, OB) {
        return "horizontal" === BB && "xAxis" === OB || "vertical" === BB && "yAxis" === OB || "centric" === BB && "angleAxis" === OB || "radial" === BB && "radiusAxis" === OB
      },
      wo = function(BB, OB, GB, YB) {
        if (YB) return BB.map((function(BB) {
          return BB.coordinate
        }));
        var DB, QB, oB = BB.map((function(BB) {
          return BB.coordinate === OB && (DB = !0), BB.coordinate === GB && (QB = !0), BB.coordinate
        }));
        return DB || oB.push(OB), QB || oB.push(GB), oB
      },
      Eo = function(BB, OB, GB) {
        if (!BB) return null;
        var YB = BB.scale,
          DB = BB.duplicateDomain,
          QB = BB.type,
          oB = BB.range,
          jB = "scaleBand" === BB.realScaleType ? YB.bandwidth() / 2 : 2,
          yB = (OB || GB) && "category" === QB && YB.bandwidth ? YB.bandwidth() / jB : 0;
        return yB = "angleAxis" === BB.axisType && (null === oB || void 0 === oB ? void 0 : oB.length) >= 2 ? 2 * (0, No.J)(oB[0] - oB[1]) * yB : yB, OB && (BB.ticks || BB.niceTicks) ? (BB.ticks || BB.niceTicks).map((function(BB) {
          var OB = DB ? DB.indexOf(BB) : BB;
          return {
            coordinate: YB(OB) + yB,
            value: BB,
            offset: yB
          }
        })).filter((function(BB) {
          return !LQ()(BB.coordinate)
        })) : BB.isCategorical && BB.categoricalDomain ? BB.categoricalDomain.map((function(BB, OB) {
          return {
            coordinate: YB(BB) + yB,
            value: BB,
            index: OB,
            offset: yB
          }
        })) : YB.ticks && !GB ? YB.ticks(BB.tickCount).map((function(BB) {
          return {
            coordinate: YB(BB) + yB,
            value: BB,
            offset: yB
          }
        })) : YB.domain().map((function(BB, OB) {
          return {
            coordinate: YB(BB) + yB,
            value: DB ? DB[BB] : BB,
            index: OB,
            offset: yB
          }
        }))
      },
      co = new WeakMap,
      ho = function(BB, OB) {
        if ("function" !== typeof OB) return BB;
        co.has(BB) || co.set(BB, new WeakMap);
        var GB = co.get(BB);
        if (GB.has(OB)) return GB.get(OB);
        var YB = function() {
          BB.apply(void 0, arguments), OB.apply(void 0, arguments)
        };
        return GB.set(OB, YB), YB
      },
      ao = function(BB, OB, GB) {
        var QB = BB.scale,
          oB = BB.type,
          jB = BB.layout,
          yB = BB.axisType;
        if ("auto" === QB) return "radial" === jB && "radiusAxis" === yB ? {
          scale: DB.e(),
          realScaleType: "band"
        } : "radial" === jB && "angleAxis" === yB ? {
          scale: CO(),
          realScaleType: "linear"
        } : "category" === oB && OB && (OB.indexOf("LineChart") >= 0 || OB.indexOf("AreaChart") >= 0 || OB.indexOf("ComposedChart") >= 0 && !GB) ? {
          scale: DB.i(),
          realScaleType: "point"
        } : "category" === oB ? {
          scale: DB.e(),
          realScaleType: "band"
        } : {
          scale: CO(),
          realScaleType: "linear"
        };
        if (KQ()(QB)) {
          var JB = "scale".concat(rQ()(QB));
          return {
            scale: (YB[JB] || DB.i)(),
            realScaleType: YB[JB] ? JB : "point"
          }
        }
        return kQ()(QB) ? {
          scale: QB
        } : {
          scale: DB.i(),
          realScaleType: "point"
        }
      },
      eo = 1e-4,
      To = function(BB) {
        var OB = BB.domain();
        if (OB && !(OB.length <= 2)) {
          var GB = OB.length,
            YB = BB.range(),
            DB = Math.min(YB[0], YB[1]) - eo,
            QB = Math.max(YB[0], YB[1]) + eo,
            oB = BB(OB[0]),
            jB = BB(OB[GB - 1]);
          (oB < DB || oB > QB || jB < DB || jB > QB) && BB.domain([OB[0], OB[GB - 1]])
        }
      },
      bo = function(BB, OB) {
        if (!BB) return null;
        for (var GB = 0, YB = BB.length; GB < YB; GB++)
          if (BB[GB].item === OB) return BB[GB].position;
        return null
      },
      Co = function(BB, OB) {
        if (!OB || 2 !== OB.length || !(0, No.C)(OB[0]) || !(0, No.C)(OB[1])) return BB;
        var GB = Math.min(OB[0], OB[1]),
          YB = Math.max(OB[0], OB[1]),
          DB = [BB[0], BB[1]];
        return (!(0, No.C)(BB[0]) || BB[0] < GB) && (DB[0] = GB), (!(0, No.C)(BB[1]) || BB[1] > YB) && (DB[1] = YB), DB[0] > YB && (DB[0] = YB), DB[1] < GB && (DB[1] = GB), DB
      },
      Ho = {
        sign: function(BB) {
          var OB = BB.length;
          if (!(OB <= 0))
            for (var GB = 0, YB = BB[0].length; GB < YB; ++GB)
              for (var DB = 0, QB = 0, oB = 0; oB < OB; ++oB) {
                var jB = LQ()(BB[oB][GB][1]) ? BB[oB][GB][0] : BB[oB][GB][1];
                jB >= 0 ? (BB[oB][GB][0] = DB, BB[oB][GB][1] = DB + jB, DB = BB[oB][GB][1]) : (BB[oB][GB][0] = QB, BB[oB][GB][1] = QB + jB, QB = BB[oB][GB][1])
              }
        },
        expand: function(BB, OB) {
          if ((YB = BB.length) > 0) {
            for (var GB, YB, DB, QB = 0, oB = BB[0].length; QB < oB; ++QB) {
              for (DB = GB = 0; GB < YB; ++GB) DB += BB[GB][QB][1] || 0;
              if (DB)
                for (GB = 0; GB < YB; ++GB) BB[GB][QB][1] /= DB
            }
            lQ(BB, OB)
          }
        },
        none: lQ,
        silhouette: function(BB, OB) {
          if ((GB = BB.length) > 0) {
            for (var GB, YB = 0, DB = BB[OB[0]], QB = DB.length; YB < QB; ++YB) {
              for (var oB = 0, jB = 0; oB < GB; ++oB) jB += BB[oB][YB][1] || 0;
              DB[YB][1] += DB[YB][0] = -jB / 2
            }
            lQ(BB, OB)
          }
        },
        wiggle: function(BB, OB) {
          if ((DB = BB.length) > 0 && (YB = (GB = BB[OB[0]]).length) > 0) {
            for (var GB, YB, DB, QB = 0, oB = 1; oB < YB; ++oB) {
              for (var jB = 0, yB = 0, JB = 0; jB < DB; ++jB) {
                for (var MB = BB[OB[jB]], PB = MB[oB][1] || 0, zB = (PB - (MB[oB - 1][1] || 0)) / 2, lB = 0; lB < jB; ++lB) {
                  var pB = BB[OB[lB]];
                  zB += (pB[oB][1] || 0) - (pB[oB - 1][1] || 0)
                }
                yB += PB, JB += zB * PB
              }
              GB[oB - 1][1] += GB[oB - 1][0] = QB, yB && (QB -= JB / yB)
            }
            GB[oB - 1][1] += GB[oB - 1][0] = QB, lQ(BB, OB)
          }
        },
        positive: function(BB) {
          var OB = BB.length;
          if (!(OB <= 0))
            for (var GB = 0, YB = BB[0].length; GB < YB; ++GB)
              for (var DB = 0, QB = 0; QB < OB; ++QB) {
                var oB = LQ()(BB[QB][GB][1]) ? BB[QB][GB][0] : BB[QB][GB][1];
                oB >= 0 ? (BB[QB][GB][0] = DB, BB[QB][GB][1] = DB + oB, DB = BB[QB][GB][1]) : (BB[QB][GB][0] = 0, BB[QB][GB][1] = 0)
              }
        }
      },
      vo = function(BB, OB, GB) {
        var YB = OB.map((function(BB) {
            return BB.props.dataKey
          })),
          DB = Ho[GB],
          QB = function() {
            var BB = (0, qQ.b)([]),
              OB = ZQ,
              GB = lQ,
              YB = NQ;

            function DB(DB) {
              var QB, oB, jB = Array.from(BB.apply(this, arguments), RQ),
                yB = jB.length,
                JB = -1;
              for (const BB of DB)
                for (QB = 0, ++JB; QB < yB; ++QB)(jB[QB][JB] = [0, +YB(BB, jB[QB].key, JB, DB)]).data = BB;
              for (QB = 0, oB = (0, pQ.e)(OB(jB)); QB < yB; ++QB) jB[oB[QB]].index = QB;
              return GB(jB, oB), jB
            }
            return DB.keys = function(OB) {
              return arguments.length ? (BB = "function" === typeof OB ? OB : (0, qQ.b)(Array.from(OB)), DB) : BB
            }, DB.value = function(BB) {
              return arguments.length ? (YB = "function" === typeof BB ? BB : (0, qQ.b)(+BB), DB) : YB
            }, DB.order = function(BB) {
              return arguments.length ? (OB = null == BB ? ZQ : "function" === typeof BB ? BB : (0, qQ.b)(Array.from(BB)), DB) : OB
            }, DB.offset = function(BB) {
              return arguments.length ? (GB = null == BB ? lQ : BB, DB) : GB
            }, DB
          }().keys(YB).value((function(BB, OB) {
            return +ko(BB, OB, 0)
          })).order(ZQ).offset(DB);
        return QB(BB)
      },
      so = function(BB, OB, GB, YB, DB, QB) {
        if (!BB) return null;
        var oB = (QB ? OB.reverse() : OB).reduce((function(BB, OB) {
          var DB, QB = null !== (DB = OB.type) && void 0 !== DB && DB.defaultProps ? Uo(Uo({}, OB.type.defaultProps), OB.props) : OB.props,
            oB = QB.stackId;
          if (QB.hide) return BB;
          var jB = QB[GB],
            yB = BB[jB] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, No.z)(oB)) {
            var JB = yB.stackGroups[oB] || {
              numericAxisId: GB,
              cateAxisId: YB,
              items: []
            };
            JB.items.push(OB), yB.hasStack = !0, yB.stackGroups[oB] = JB
          } else yB.stackGroups[(0, No.M)("_stackId_")] = {
            numericAxisId: GB,
            cateAxisId: YB,
            items: [OB]
          };
          return Uo(Uo({}, BB), {}, fo({}, jB, yB))
        }), {});
        return Object.keys(oB).reduce((function(OB, QB) {
          var jB = oB[QB];
          if (jB.hasStack) {
            jB.stackGroups = Object.keys(jB.stackGroups).reduce((function(OB, QB) {
              var oB = jB.stackGroups[QB];
              return Uo(Uo({}, OB), {}, fo({}, QB, {
                numericAxisId: GB,
                cateAxisId: YB,
                items: oB.items,
                stackedData: vo(BB, oB.items, DB)
              }))
            }), {})
          }
          return Uo(Uo({}, OB), {}, fo({}, QB, jB))
        }), {})
      },
      xo = function(BB, OB) {
        var GB = OB.realScaleType,
          YB = OB.type,
          DB = OB.tickCount,
          QB = OB.originalDomain,
          oB = OB.allowDecimals,
          jB = GB || OB.scale;
        if ("auto" !== jB && "linear" !== jB) return null;
        if (DB && "number" === YB && QB && ("auto" === QB[0] || "auto" === QB[1])) {
          var yB = BB.domain();
          if (!yB.length) return null;
          var JB = po(yB, DB, oB);
          return BB.domain([SQ()(JB), AQ()(JB)]), {
            niceTicks: JB
          }
        }
        if (DB && "number" === YB) {
          var MB = BB.domain();
          return {
            niceTicks: qo(MB, DB, oB)
          }
        }
        return null
      };

    function to(BB) {
      var OB = BB.axis,
        GB = BB.ticks,
        YB = BB.bandSize,
        DB = BB.entry,
        QB = BB.index,
        oB = BB.dataKey;
      if ("category" === OB.type) {
        if (!OB.allowDuplicatedCategory && OB.dataKey && !UQ()(DB[OB.dataKey])) {
          var jB = (0, No.g)(GB, "value", DB[OB.dataKey]);
          if (jB) return jB.coordinate + YB / 2
        }
        return GB[QB] ? GB[QB].coordinate + YB / 2 : null
      }
      var yB = ko(DB, UQ()(oB) ? OB.dataKey : oB);
      return UQ()(yB) ? null : OB.scale(yB)
    }
    var Bj = function(BB) {
        var OB = BB.axis,
          GB = BB.ticks,
          YB = BB.offset,
          DB = BB.bandSize,
          QB = BB.entry,
          oB = BB.index;
        if ("category" === OB.type) return GB[oB] ? GB[oB].coordinate + YB : null;
        var jB = ko(QB, OB.dataKey, OB.domain[oB]);
        return UQ()(jB) ? null : OB.scale(jB) - DB / 2 + YB
      },
      Oj = function(BB) {
        var OB = BB.numericAxis,
          GB = OB.scale.domain();
        if ("number" === OB.type) {
          var YB = Math.min(GB[0], GB[1]),
            DB = Math.max(GB[0], GB[1]);
          return YB <= 0 && DB >= 0 ? 0 : DB < 0 ? DB : YB
        }
        return GB[0]
      },
      Gj = function(BB, OB) {
        var GB, YB = (null !== (GB = BB.type) && void 0 !== GB && GB.defaultProps ? Uo(Uo({}, BB.type.defaultProps), BB.props) : BB.props).stackId;
        if ((0, No.z)(YB)) {
          var DB = OB[YB];
          if (DB) {
            var QB = DB.items.indexOf(BB);
            return QB >= 0 ? DB.stackedData[QB] : null
          }
        }
        return null
      },
      Yj = function(BB, OB, GB) {
        return Object.keys(BB).reduce((function(YB, DB) {
          var QB = BB[DB].stackedData.reduce((function(BB, YB) {
            var DB = YB.slice(OB, GB + 1).reduce((function(BB, OB) {
              return [SQ()(OB.concat([BB[0]]).filter(No.C)), AQ()(OB.concat([BB[1]]).filter(No.C))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(BB[0], DB[0]), Math.max(BB[1], DB[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(QB[0], YB[0]), Math.max(QB[1], YB[1])]
        }), [1 / 0, -1 / 0]).map((function(BB) {
          return BB === 1 / 0 || BB === -1 / 0 ? 0 : BB
        }))
      },
      Dj = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Qj = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      oj = function(BB, OB, GB) {
        if (kQ()(BB)) return BB(OB, GB);
        if (!Array.isArray(BB)) return OB;
        var YB = [];
        if ((0, No.C)(BB[0])) YB[0] = GB ? BB[0] : Math.min(BB[0], OB[0]);
        else if (Dj.test(BB[0])) {
          var DB = +Dj.exec(BB[0])[1];
          YB[0] = OB[0] - DB
        } else kQ()(BB[0]) ? YB[0] = BB[0](OB[0]) : YB[0] = OB[0];
        if ((0, No.C)(BB[1])) YB[1] = GB ? BB[1] : Math.max(BB[1], OB[1]);
        else if (Qj.test(BB[1])) {
          var QB = +Qj.exec(BB[1])[1];
          YB[1] = OB[1] + QB
        } else kQ()(BB[1]) ? YB[1] = BB[1](OB[1]) : YB[1] = OB[1];
        return YB
      },
      jj = function(BB, OB, GB) {
        if (BB && BB.scale && BB.scale.bandwidth) {
          var YB = BB.scale.bandwidth();
          if (!GB || YB > 0) return YB
        }
        if (BB && OB && OB.length >= 2) {
          for (var DB = cQ()(OB, (function(BB) {
              return BB.coordinate
            })), QB = 1 / 0, oB = 1, jB = DB.length; oB < jB; oB++) {
            var yB = DB[oB],
              JB = DB[oB - 1];
            QB = Math.min((yB.coordinate || 0) - (JB.coordinate || 0), QB)
          }
          return QB === 1 / 0 ? 0 : QB
        }
        return GB ? void 0 : 0
      },
      yj = function(BB, OB, GB) {
        return BB && BB.length ? wQ()(BB, mQ()(GB, "type.defaultProps.domain")) ? OB : BB : OB
      },
      Jj = function(BB, OB) {
        var GB = BB.type.defaultProps ? Uo(Uo({}, BB.type.defaultProps), BB.props) : BB.props,
          YB = GB.dataKey,
          DB = GB.name,
          QB = GB.unit,
          oB = GB.formatter,
          jB = GB.tooltipType,
          yB = GB.chartType,
          JB = GB.hide;
        return Uo(Uo({}, (0, Ro.e)(BB, !1)), {}, {
          dataKey: YB,
          unit: QB,
          formatter: oB,
          name: DB || YB,
          color: mo(BB),
          value: ko(OB, YB),
          type: jB,
          payload: OB,
          chartType: yB,
          hide: JB
        })
      }
  },
  6645: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => zB,
      g: () => PB
    });
    var YB = GB(6485);

    function DB(BB) {
      return DB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, DB(BB)
    }

    function QB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function oB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? QB(Object(GB), !0).forEach((function(OB) {
          jB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : QB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function jB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != DB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != DB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == DB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }
    var yB = {
        widthCache: {},
        cacheCount: 0
      },
      JB = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      MB = "recharts_measurement_span";
    var PB = function(BB) {
        var OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === BB || null === BB || YB.d.isSsr) return {
          width: 0,
          height: 0
        };
        var GB = function(BB) {
            var OB = oB({}, BB);
            return Object.keys(OB).forEach((function(BB) {
              OB[BB] || delete OB[BB]
            })), OB
          }(OB),
          DB = JSON.stringify({
            text: BB,
            copyStyle: GB
          });
        if (yB.widthCache[DB]) return yB.widthCache[DB];
        try {
          var QB = document.getElementById(MB);
          QB || ((QB = document.createElement("span")).setAttribute("id", MB), QB.setAttribute("aria-hidden", "true"), document.body.appendChild(QB));
          var jB = oB(oB({}, JB), GB);
          Object.assign(QB.style, jB), QB.textContent = "".concat(BB);
          var PB = QB.getBoundingClientRect(),
            zB = {
              width: PB.width,
              height: PB.height
            };
          return yB.widthCache[DB] = zB, ++yB.cacheCount > 2e3 && (yB.cacheCount = 0, yB.widthCache = {}), zB
        } catch (lB) {
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
  5671: (BB, OB, GB) => {
    GB.d(OB, {
      C: () => qB,
      G: () => pB,
      J: () => lB,
      M: () => WB,
      d: () => kB,
      g: () => UB,
      j: () => VB,
      n: () => fB,
      p: () => AB,
      r: () => SB,
      v: () => nB,
      y: () => ZB,
      z: () => NB
    });
    var YB = GB(5678),
      DB = GB.n(YB),
      QB = GB(5686),
      oB = GB.n(QB),
      jB = GB(5701),
      yB = GB.n(jB),
      JB = GB(5693),
      MB = GB.n(JB),
      PB = GB(5930),
      zB = GB.n(PB),
      lB = function(BB) {
        return 0 === BB ? 0 : BB > 0 ? 1 : -1
      },
      pB = function(BB) {
        return DB()(BB) && BB.indexOf("%") === BB.length - 1
      },
      qB = function(BB) {
        return MB()(BB) && !oB()(BB)
      },
      ZB = function(BB) {
        return zB()(BB)
      },
      NB = function(BB) {
        return qB(BB) || DB()(BB)
      },
      RB = 0,
      WB = function(BB) {
        var OB = ++RB;
        return "".concat(BB || "").concat(OB)
      },
      AB = function(BB, OB) {
        var GB, YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!qB(BB) && !DB()(BB)) return YB;
        if (pB(BB)) {
          var jB = BB.indexOf("%");
          GB = OB * parseFloat(BB.slice(0, jB)) / 100
        } else GB = +BB;
        return oB()(GB) && (GB = YB), QB && GB > OB && (GB = OB), GB
      },
      VB = function(BB) {
        if (!BB) return null;
        var OB = Object.keys(BB);
        return OB && OB.length ? BB[OB[0]] : null
      },
      SB = function(BB) {
        if (!Array.isArray(BB)) return !1;
        for (var OB = BB.length, GB = {}, YB = 0; YB < OB; YB++) {
          if (GB[BB[YB]]) return !0;
          GB[BB[YB]] = !0
        }
        return !1
      },
      nB = function(BB, OB) {
        return qB(BB) && qB(OB) ? function(GB) {
          return BB + GB * (OB - BB)
        } : function() {
          return OB
        }
      };

    function UB(BB, OB, GB) {
      return BB && BB.length ? BB.find((function(BB) {
        return BB && ("function" === typeof OB ? OB(BB) : yB()(BB, OB)) === GB
      })) : null
    }
    var fB = function(BB) {
        if (!BB || !BB.length) return null;
        for (var OB = BB.length, GB = 0, YB = 0, DB = 0, QB = 0, oB = 1 / 0, jB = -1 / 0, yB = 0, JB = 0, MB = 0; MB < OB; MB++) GB += yB = BB[MB].cx || 0, YB += JB = BB[MB].cy || 0, DB += yB * JB, QB += yB * yB, oB = Math.min(oB, yB), jB = Math.max(jB, yB);
        var PB = OB * QB !== GB * GB ? (OB * DB - GB * YB) / (OB * QB - GB * GB) : 0;
        return {
          xmin: oB,
          xmax: jB,
          a: PB,
          b: (YB - PB * GB) / OB
        }
      },
      kB = function(BB, OB) {
        return qB(BB) && qB(OB) ? BB - OB : DB()(BB) && DB()(OB) ? BB.localeCompare(OB) : BB instanceof Date && OB instanceof Date ? BB.getTime() - OB.getTime() : String(BB).localeCompare(String(OB))
      }
  },
  6485: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB
    });
    var YB = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(BB) {
        return YB[BB]
      },
      set: function(BB, OB) {
        if ("string" === typeof BB) YB[BB] = OB;
        else {
          var GB = Object.keys(BB);
          GB && GB.length && GB.forEach((function(OB) {
            YB[OB] = BB[OB]
          }))
        }
      }
    }
  },
  6728: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    var YB = function(BB, OB) {
      var GB = BB.alwaysShow,
        YB = BB.ifOverflow;
      return GB && (YB = "extendDomain"), YB === OB
    }
  },
  5935: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    var YB = function(BB, OB) {
      for (var GB = arguments.length, YB = new Array(GB > 2 ? GB - 2 : 0), DB = 2; DB < GB; DB++) YB[DB - 2] = arguments[DB]
    }
  },
  6724: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB,
      c: () => zB,
      e: () => JB
    });
    GB(5930), GB(56), GB(5782);

    function YB(BB) {
      return YB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, YB(BB)
    }

    function DB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function QB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? DB(Object(GB), !0).forEach((function(OB) {
          oB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : DB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function oB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != YB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var DB = GB.call(BB, OB || "default");
            if ("object" != YB(DB)) return DB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == YB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }
    var jB = Math.PI / 180,
      yB = function(BB) {
        return 180 * BB / Math.PI
      },
      JB = function(BB, OB, GB, YB) {
        return {
          x: BB + Math.cos(-jB * YB) * GB,
          y: OB + Math.sin(-jB * YB) * GB
        }
      },
      MB = function(BB, OB) {
        var GB = BB.x,
          YB = BB.y,
          DB = OB.cx,
          QB = OB.cy,
          oB = function(BB, OB) {
            var GB = BB.x,
              YB = BB.y,
              DB = OB.x,
              QB = OB.y;
            return Math.sqrt(Math.pow(GB - DB, 2) + Math.pow(YB - QB, 2))
          }({
            x: GB,
            y: YB
          }, {
            x: DB,
            y: QB
          });
        if (oB <= 0) return {
          radius: oB
        };
        var jB = (GB - DB) / oB,
          JB = Math.acos(jB);
        return YB > QB && (JB = 2 * Math.PI - JB), {
          radius: oB,
          angle: yB(JB),
          angleInRadian: JB
        }
      },
      PB = function(BB, OB) {
        var GB = OB.startAngle,
          YB = OB.endAngle,
          DB = Math.floor(GB / 360),
          QB = Math.floor(YB / 360);
        return BB + 360 * Math.min(DB, QB)
      },
      zB = function(BB, OB) {
        var GB = BB.x,
          YB = BB.y,
          DB = MB({
            x: GB,
            y: YB
          }, OB),
          oB = DB.radius,
          jB = DB.angle,
          yB = OB.innerRadius,
          JB = OB.outerRadius;
        if (oB < yB || oB > JB) return !1;
        if (0 === oB) return !0;
        var zB, lB = function(BB) {
            var OB = BB.startAngle,
              GB = BB.endAngle,
              YB = Math.floor(OB / 360),
              DB = Math.floor(GB / 360),
              QB = Math.min(YB, DB);
            return {
              startAngle: OB - 360 * QB,
              endAngle: GB - 360 * QB
            }
          }(OB),
          pB = lB.startAngle,
          qB = lB.endAngle,
          ZB = jB;
        if (pB <= qB) {
          for (; ZB > qB;) ZB -= 360;
          for (; ZB < pB;) ZB += 360;
          zB = ZB >= pB && ZB <= qB
        } else {
          for (; ZB > pB;) ZB -= 360;
          for (; ZB < qB;) ZB += 360;
          zB = ZB >= qB && ZB <= pB
        }
        return zB ? QB(QB({}, OB), {}, {
          radius: oB,
          angle: PB(ZB, OB)
        }) : null
      }
  },
  5938: (BB, OB, GB) => {
    GB.d(OB, {
      A: () => wB,
      E: () => rB,
      F: () => uB,
      e: () => iB,
      i: () => dB,
      m: () => KB,
      q: () => nB,
      r: () => XB,
      u: () => FB,
      y: () => LB
    });
    var YB = GB(5701),
      DB = GB.n(YB),
      QB = GB(5930),
      oB = GB.n(QB),
      jB = GB(5678),
      yB = GB.n(jB),
      JB = GB(5782),
      MB = GB.n(JB),
      PB = GB(5597),
      zB = GB.n(PB),
      lB = GB(56),
      pB = GB(5942),
      qB = GB(5671),
      ZB = GB(5949),
      NB = GB(5951),
      RB = ["children"],
      WB = ["children"];

    function AB(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, YB)) {
            if (OB.indexOf(YB) >= 0) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }

    function VB(BB) {
      return VB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, VB(BB)
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
      nB = function(BB) {
        return "string" === typeof BB ? BB : BB ? BB.displayName || BB.name || "Component" : ""
      },
      UB = null,
      fB = null,
      kB = function BB(OB) {
        if (OB === UB && Array.isArray(fB)) return fB;
        var GB = [];
        return lB.Children.forEach(OB, (function(OB) {
          oB()(OB) || ((0, pB.isFragment)(OB) ? GB = GB.concat(BB(OB.props.children)) : GB.push(OB))
        })), fB = GB, UB = OB, GB
      };

    function dB(BB, OB) {
      var GB = [],
        YB = [];
      return YB = Array.isArray(OB) ? OB.map((function(BB) {
        return nB(BB)
      })) : [nB(OB)], kB(BB).forEach((function(BB) {
        var OB = DB()(BB, "type.displayName") || DB()(BB, "type.name"); - 1 !== YB.indexOf(OB) && GB.push(BB)
      })), GB
    }

    function KB(BB, OB) {
      var GB = dB(BB, OB);
      return GB && GB[0]
    }
    var uB = function(BB) {
        if (!BB || !BB.props) return !1;
        var OB = BB.props,
          GB = OB.width,
          YB = OB.height;
        return !(!(0, qB.C)(GB) || GB <= 0 || !(0, qB.C)(YB) || YB <= 0)
      },
      mB = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      IB = function(BB) {
        return BB && BB.type && yB()(BB.type) && mB.indexOf(BB.type) >= 0
      },
      FB = function(BB) {
        return BB && "object" === VB(BB) && "clipDot" in BB
      },
      iB = function(BB, OB, GB) {
        if (!BB || "function" === typeof BB || "boolean" === typeof BB) return null;
        var YB = BB;
        if ((0, lB.isValidElement)(BB) && (YB = BB.props), !zB()(YB)) return null;
        var DB = {};
        return Object.keys(YB).forEach((function(BB) {
          var QB;
          (function(BB, OB, GB, YB) {
            var DB, QB = null !== (DB = null === NB.d || void 0 === NB.d ? void 0 : NB.d[YB]) && void 0 !== DB ? DB : [];
            return OB.startsWith("data-") || !MB()(BB) && (YB && QB.includes(OB) || NB.f.includes(OB)) || GB && NB.b.includes(OB)
          })(null === (QB = YB) || void 0 === QB ? void 0 : QB[BB], BB, OB, GB) && (DB[BB] = YB[BB])
        })), DB
      },
      LB = function BB(OB, GB) {
        if (OB === GB) return !0;
        var YB = lB.Children.count(OB);
        if (YB !== lB.Children.count(GB)) return !1;
        if (0 === YB) return !0;
        if (1 === YB) return gB(Array.isArray(OB) ? OB[0] : OB, Array.isArray(GB) ? GB[0] : GB);
        for (var DB = 0; DB < YB; DB++) {
          var QB = OB[DB],
            oB = GB[DB];
          if (Array.isArray(QB) || Array.isArray(oB)) {
            if (!BB(QB, oB)) return !1
          } else if (!gB(QB, oB)) return !1
        }
        return !0
      },
      gB = function(BB, OB) {
        if (oB()(BB) && oB()(OB)) return !0;
        if (!oB()(BB) && !oB()(OB)) {
          var GB = BB.props || {},
            YB = GB.children,
            DB = AB(GB, RB),
            QB = OB.props || {},
            jB = QB.children,
            yB = AB(QB, WB);
          return YB && jB ? (0, ZB.d)(DB, yB) && LB(YB, jB) : !YB && !jB && (0, ZB.d)(DB, yB)
        }
        return !1
      },
      rB = function(BB, OB) {
        var GB = [],
          YB = {};
        return kB(BB).forEach((function(BB, DB) {
          if (IB(BB)) GB.push(BB);
          else if (BB) {
            var QB = nB(BB.type),
              oB = OB[QB] || {},
              jB = oB.handler,
              yB = oB.once;
            if (jB && (!yB || !YB[QB])) {
              var JB = jB(BB, QB, DB);
              GB.push(JB), YB[QB] = !0
            }
          }
        })), GB
      },
      XB = function(BB) {
        var OB = BB && BB.type;
        return OB && SB[OB] ? SB[OB] : null
      },
      wB = function(BB, OB) {
        return kB(OB).indexOf(BB)
      }
  },
  5949: (BB, OB, GB) => {
    function YB(BB, OB) {
      for (var GB in BB)
        if ({}.hasOwnProperty.call(BB, GB) && (!{}.hasOwnProperty.call(OB, GB) || BB[GB] !== OB[GB])) return !1;
      for (var YB in OB)
        if ({}.hasOwnProperty.call(OB, YB) && !{}.hasOwnProperty.call(BB, YB)) return !1;
      return !0
    }
    GB.d(OB, {
      d: () => YB
    })
  },
  6710: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB
    });
    var YB = GB(6554),
      DB = GB(6648),
      QB = GB(5938);

    function oB(BB) {
      return oB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, oB(BB)
    }

    function jB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function yB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? jB(Object(GB), !0).forEach((function(OB) {
          JB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : jB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function JB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != oB(BB) || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != oB(YB)) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == oB(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }
    var MB = function(BB) {
      var OB = BB.children,
        GB = BB.formattedGraphicalItems,
        oB = BB.legendWidth,
        jB = BB.legendContent,
        JB = (0, QB.m)(OB, YB.e);
      if (!JB) return null;
      var MB, PB = YB.e.defaultProps,
        zB = void 0 !== PB ? yB(yB({}, PB), JB.props) : {};
      return MB = JB.props && JB.props.payload ? JB.props && JB.props.payload : "children" === jB ? (GB || []).reduce((function(BB, OB) {
        var GB = OB.item,
          YB = OB.props,
          DB = YB.sectors || YB.data || [];
        return BB.concat(DB.map((function(BB) {
          return {
            type: JB.props.iconType || GB.props.legendType,
            value: BB.name,
            color: BB.fill,
            payload: BB
          }
        })))
      }), []) : (GB || []).map((function(BB) {
        var OB = BB.item,
          GB = OB.type.defaultProps,
          YB = void 0 !== GB ? yB(yB({}, GB), OB.props) : {},
          QB = YB.dataKey,
          oB = YB.name,
          jB = YB.legendType;
        return {
          inactive: YB.hide,
          dataKey: QB,
          type: zB.iconType || jB || "square",
          color: (0, DB.O)(OB),
          value: oB || QB,
          payload: YB
        }
      })), yB(yB(yB({}, zB), YB.e.getWithHeight(JB, oB)), {}, {
        payload: MB,
        item: JB
      })
    }
  },
  6488: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB
    });
    var YB = GB(6491),
      DB = GB.n(YB),
      QB = GB(5782),
      oB = GB.n(QB);

    function jB(BB, OB, GB) {
      return !0 === OB ? DB()(BB, GB) : oB()(OB) ? DB()(BB, OB) : BB
    }
  },
  5951: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => MB,
      d: () => JB,
      f: () => jB,
      g: () => PB,
      j: () => zB
    });
    var YB = GB(56),
      DB = GB(5597),
      QB = GB.n(DB);

    function oB(BB) {
      return oB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, oB(BB)
    }
    var jB = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "ZP", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      yB = ["points", "pathLength"],
      JB = {
        svg: ["viewBox", "children"],
        polygon: yB,
        polyline: yB
      },
      MB = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      PB = function(BB, OB) {
        if (!BB || "function" === typeof BB || "boolean" === typeof BB) return null;
        var GB = BB;
        if ((0, YB.isValidElement)(BB) && (GB = BB.props), !QB()(GB)) return null;
        var DB = {};
        return Object.keys(GB).forEach((function(BB) {
          MB.includes(BB) && (DB[BB] = OB || function(OB) {
            return GB[BB](GB, OB)
          })
        })), DB
      },
      zB = function(BB, OB, GB) {
        if (!QB()(BB) || "object" !== oB(BB)) return null;
        var YB = null;
        return Object.keys(BB).forEach((function(DB) {
          var QB = BB[DB];
          MB.includes(DB) && "function" === typeof QB && (YB || (YB = {}), YB[DB] = function(BB, OB, GB) {
            return function(YB) {
              return BB(OB, GB, YB), null
            }
          }(QB, OB, GB))
        })), YB
      }
  },
  5946: (BB, OB) => {
    var GB, YB = Symbol.for("react.element"),
      DB = Symbol.for("react.portal"),
      QB = Symbol.for("react.fragment"),
      oB = Symbol.for("react.strict_mode"),
      jB = Symbol.for("react.profiler"),
      yB = Symbol.for("react.provider"),
      JB = Symbol.for("react.context"),
      MB = Symbol.for("react.server_context"),
      PB = Symbol.for("react.forward_ref"),
      zB = Symbol.for("react.suspense"),
      lB = Symbol.for("react.suspense_list"),
      pB = Symbol.for("react.memo"),
      qB = Symbol.for("react.lazy"),
      ZB = Symbol.for("react.offscreen");

    function NB(BB) {
      if ("object" === typeof BB && null !== BB) {
        var OB = BB.$$typeof;
        switch (OB) {
          case YB:
            switch (BB = BB.type) {
              case QB:
              case jB:
              case oB:
              case zB:
              case lB:
                return BB;
              default:
                switch (BB = BB && BB.$$typeof) {
                  case MB:
                  case JB:
                  case PB:
                  case qB:
                  case pB:
                  case yB:
                    return BB;
                  default:
                    return OB
                }
            }
          case DB:
            return OB
        }
      }
    }
    GB = Symbol.for("react.module.reference"), OB.isFragment = function(BB) {
      return NB(BB) === QB
    }
  },
  5942: (BB, OB, GB) => {
    BB.exports = GB(5946)
  },
  5587: (BB, OB, GB) => {
    function YB(BB) {
      var OB, GB, DB = "";
      if ("string" == typeof BB || "number" == typeof BB) DB += BB;
      else if ("object" == typeof BB)
        if (Array.isArray(BB)) {
          var QB = BB.length;
          for (OB = 0; OB < QB; OB++) BB[OB] && (GB = YB(BB[OB])) && (DB && (DB += " "), DB += GB)
        } else
          for (GB in BB) BB[GB] && (DB && (DB += " "), DB += GB);
      return DB
    }
    GB.d(OB, {
      c: () => DB
    });
    const DB = function() {
      for (var BB, OB, GB = 0, DB = "", QB = arguments.length; GB < QB; GB++)(BB = arguments[GB]) && (OB = YB(BB)) && (DB && (DB += " "), DB += OB);
      return DB
    }
  },
  6652: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      i: () => jB
    });
    var YB = GB(6660),
      DB = GB(6665);

    function QB() {
      var BB, OB, GB = (0, DB.e)().unknown(void 0),
        oB = GB.domain,
        jB = GB.range,
        yB = 0,
        JB = 1,
        MB = !1,
        PB = 0,
        zB = 0,
        lB = .5;

      function pB() {
        var GB = oB().length,
          YB = JB < yB,
          DB = YB ? JB : yB,
          QB = YB ? yB : JB;
        BB = (QB - DB) / Math.max(1, GB - PB + 2 * zB), MB && (BB = Math.floor(BB)), DB += (QB - DB - BB * (GB - PB)) * lB, OB = BB * (1 - PB), MB && (DB = Math.round(DB), OB = Math.round(OB));
        var pB = function(BB, OB, GB) {
          BB = +BB, OB = +OB, GB = (DB = arguments.length) < 2 ? (OB = BB, BB = 0, 1) : DB < 3 ? 1 : +GB;
          for (var YB = -1, DB = 0 | Math.max(0, Math.ceil((OB - BB) / GB)), QB = new Array(DB); ++YB < DB;) QB[YB] = BB + YB * GB;
          return QB
        }(GB).map((function(OB) {
          return DB + BB * OB
        }));
        return jB(YB ? pB.reverse() : pB)
      }
      return delete GB.unknown, GB.domain = function(BB) {
        return arguments.length ? (oB(BB), pB()) : oB()
      }, GB.range = function(BB) {
        return arguments.length ? ([yB, JB] = BB, yB = +yB, JB = +JB, pB()) : [yB, JB]
      }, GB.rangeRound = function(BB) {
        return [yB, JB] = BB, yB = +yB, JB = +JB, MB = !0, pB()
      }, GB.bandwidth = function() {
        return OB
      }, GB.step = function() {
        return BB
      }, GB.round = function(BB) {
        return arguments.length ? (MB = !!BB, pB()) : MB
      }, GB.padding = function(BB) {
        return arguments.length ? (PB = Math.min(1, zB = +BB), pB()) : PB
      }, GB.paddingInner = function(BB) {
        return arguments.length ? (PB = Math.min(1, BB), pB()) : PB
      }, GB.paddingOuter = function(BB) {
        return arguments.length ? (zB = +BB, pB()) : zB
      }, GB.align = function(BB) {
        return arguments.length ? (lB = Math.max(0, Math.min(1, BB)), pB()) : lB
      }, GB.copy = function() {
        return QB(oB(), [yB, JB]).round(MB).paddingInner(PB).paddingOuter(zB).align(lB)
      }, YB.g.apply(pB(), arguments)
    }

    function oB(BB) {
      var OB = BB.copy;
      return BB.padding = BB.paddingOuter, delete BB.paddingInner, delete BB.paddingOuter, BB.copy = function() {
        return oB(OB())
      }, BB
    }

    function jB() {
      return oB(QB.apply(null, arguments).paddingInner(1))
    }
  },
  6660: (BB, OB, GB) => {
    function YB(BB, OB) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(BB);
          break;
        default:
          this.range(OB).domain(BB)
      }
      return this
    }

    function DB(BB, OB) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof BB ? this.interpolator(BB) : this.range(BB);
          break;
        default:
          this.domain(BB), "function" === typeof OB ? this.interpolator(OB) : this.range(OB)
      }
      return this
    }
    GB.d(OB, {
      d: () => DB,
      g: () => YB
    })
  },
  6665: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => MB,
      h: () => JB
    });
    class YB extends Map {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jB;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: OB
            }
          }), null != BB)
          for (const [GB, YB] of BB) this.set(GB, YB)
      }
      get(BB) {
        return super.get(DB(this, BB))
      }
      has(BB) {
        return super.has(DB(this, BB))
      }
      set(BB, OB) {
        return super.set(QB(this, BB), OB)
      }
      delete(BB) {
        return super.delete(oB(this, BB))
      }
    }
    Set;

    function DB(BB, OB) {
      let {
        _intern: GB,
        _key: YB
      } = BB;
      const DB = YB(OB);
      return GB.has(DB) ? GB.get(DB) : OB
    }

    function QB(BB, OB) {
      let {
        _intern: GB,
        _key: YB
      } = BB;
      const DB = YB(OB);
      return GB.has(DB) ? GB.get(DB) : (GB.set(DB, OB), OB)
    }

    function oB(BB, OB) {
      let {
        _intern: GB,
        _key: YB
      } = BB;
      const DB = YB(OB);
      return GB.has(DB) && (OB = GB.get(DB), GB.delete(DB)), OB
    }

    function jB(BB) {
      return null !== BB && "object" === typeof BB ? BB.valueOf() : BB
    }
    var yB = GB(6660);
    const JB = Symbol("implicit");

    function MB() {
      var BB = new YB,
        OB = [],
        GB = [],
        DB = JB;

      function QB(YB) {
        let QB = BB.get(YB);
        if (void 0 === QB) {
          if (DB !== JB) return DB;
          BB.set(YB, QB = OB.push(YB) - 1)
        }
        return GB[QB % GB.length]
      }
      return QB.domain = function(GB) {
        if (!arguments.length) return OB.slice();
        OB = [], BB = new YB;
        for (const YB of GB) BB.has(YB) || BB.set(YB, OB.push(YB) - 1);
        return QB
      }, QB.range = function(BB) {
        return arguments.length ? (GB = Array.from(BB), QB) : GB.slice()
      }, QB.unknown = function(BB) {
        return arguments.length ? (DB = BB, QB) : DB
      }, QB.copy = function() {
        return MB(OB, GB).unknown(DB)
      }, yB.g.apply(QB, arguments), QB
    }
  },
  6712: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    Array.prototype.slice;

    function YB(BB) {
      return "object" === typeof BB && "length" in BB ? BB : Array.from(BB)
    }
  },
  6607: (BB, OB, GB) => {
    function YB(BB) {
      return function() {
        return BB
      }
    }
    GB.d(OB, {
      b: () => YB
    })
  },
  6615: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => JB
    });
    const YB = Math.PI,
      DB = 2 * YB,
      QB = 1e-6,
      oB = DB - QB;

    function jB(BB) {
      this._ += BB[0];
      for (let OB = 1, GB = BB.length; OB < GB; ++OB) this._ += arguments[OB] + BB[OB]
    }
    class yB {
      constructor(BB) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == BB ? jB : function(BB) {
          let OB = Math.floor(BB);
          if (!(OB >= 0)) throw new Error(`invalid digits: ${BB}`);
          if (OB > 15) return jB;
          const GB = 10 ** OB;
          return function(BB) {
            this._ += BB[0];
            for (let OB = 1, YB = BB.length; OB < YB; ++OB) this._ += Math.round(arguments[OB] * GB) / GB + BB[OB]
          }
        }(BB)
      }
      moveTo(BB, OB) {
        this._append`M${this._x0=this._x1=+BB},${this._y0=this._y1=+OB}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(BB, OB) {
        this._append`L${this._x1=+BB},${this._y1=+OB}`
      }
      quadraticCurveTo(BB, OB, GB, YB) {
        this._append`Q${+BB},${+OB},${this._x1=+GB},${this._y1=+YB}`
      }
      bezierCurveTo(BB, OB, GB, YB, DB, QB) {
        this._append`C${+BB},${+OB},${+GB},${+YB},${this._x1=+DB},${this._y1=+QB}`
      }
      arcTo(BB, OB, GB, DB, oB) {
        if (BB = +BB, OB = +OB, GB = +GB, DB = +DB, (oB = +oB) < 0) throw new Error(`negative radius: ${oB}`);
        let jB = this._x1,
          yB = this._y1,
          JB = GB - BB,
          MB = DB - OB,
          PB = jB - BB,
          zB = yB - OB,
          lB = PB * PB + zB * zB;
        if (null === this._x1) this._append`M${this._x1=BB},${this._y1=OB}`;
        else if (lB > QB)
          if (Math.abs(zB * JB - MB * PB) > QB && oB) {
            let pB = GB - jB,
              qB = DB - yB,
              ZB = JB * JB + MB * MB,
              NB = pB * pB + qB * qB,
              RB = Math.sqrt(ZB),
              WB = Math.sqrt(lB),
              AB = oB * Math.tan((YB - Math.acos((ZB + lB - NB) / (2 * RB * WB))) / 2),
              VB = AB / WB,
              SB = AB / RB;
            Math.abs(VB - 1) > QB && this._append`L${BB+VB*PB},${OB+VB*zB}`, this._append`A${oB},${oB},0,0,${+(zB*pB>PB*qB)},${this._x1=BB+SB*JB},${this._y1=OB+SB*MB}`
          } else this._append`L${this._x1=BB},${this._y1=OB}`;
        else;
      }
      arc(BB, OB, GB, jB, yB, JB) {
        if (BB = +BB, OB = +OB, JB = !!JB, (GB = +GB) < 0) throw new Error(`negative radius: ${GB}`);
        let MB = GB * Math.cos(jB),
          PB = GB * Math.sin(jB),
          zB = BB + MB,
          lB = OB + PB,
          pB = 1 ^ JB,
          qB = JB ? jB - yB : yB - jB;
        null === this._x1 ? this._append`M${zB},${lB}` : (Math.abs(this._x1 - zB) > QB || Math.abs(this._y1 - lB) > QB) && this._append`L${zB},${lB}`, GB && (qB < 0 && (qB = qB % DB + DB), qB > oB ? this._append`A${GB},${GB},0,1,${pB},${BB-MB},${OB-PB}A${GB},${GB},0,1,${pB},${this._x1=zB},${this._y1=lB}` : qB > QB && this._append`A${GB},${GB},0,${+(qB>=YB)},${pB},${this._x1=BB+GB*Math.cos(yB)},${this._y1=OB+GB*Math.sin(yB)}`)
      }
      rect(BB, OB, GB, YB) {
        this._append`M${this._x0=this._x1=+BB},${this._y0=this._y1=+OB}h${GB=+GB}v${+YB}h${-GB}Z`
      }
      toString() {
        return this._
      }
    }

    function JB(BB) {
      let OB = 3;
      return BB.digits = function(GB) {
        if (!arguments.length) return OB;
        if (null == GB) OB = null;
        else {
          const BB = Math.floor(GB);
          if (!(BB >= 0)) throw new RangeError(`invalid digits: ${GB}`);
          OB = BB
        }
        return BB
      }, () => new yB(OB)
    }
    yB.prototype
  },
  6463: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = !0,
      DB = "Invariant failed";

    function QB(BB, OB) {
      if (!BB) {
        if (YB) throw new Error(DB);
        var GB = "function" === typeof OB ? OB() : OB,
          QB = GB ? "".concat(DB, ": ").concat(GB) : DB;
        throw new Error(QB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);