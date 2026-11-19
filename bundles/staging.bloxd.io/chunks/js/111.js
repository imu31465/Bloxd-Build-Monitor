/*! For license information please see qsji88.111.378f79fe.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  5681: function(TT, oT, IT) {
    var iT;
    ! function() {
      var zT, kT = 1e9,
        WT = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        XT = !0,
        BT = "[DecimalError] ",
        FT = BT + "Invalid argument: ",
        ST = BT + "Exponent out of range: ",
        DT = Math.floor,
        LT = Math.pow,
        xT = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        cT = 1e7,
        KT = 9007199254740991,
        MT = DT(1286742750677284.5),
        rT = {};

      function AT(TT, oT) {
        var IT, iT, zT, kT, WT, BT, FT, ST, DT = TT.constructor,
          LT = DT.precision;
        if (!TT.s || !oT.s) return oT.s || (oT = new DT(TT)), XT ? fT(oT, LT) : oT;
        if (FT = TT.d, ST = oT.d, WT = TT.e, zT = oT.e, FT = FT.slice(), kT = WT - zT) {
          for (kT < 0 ? (iT = FT, kT = -kT, BT = ST.length) : (iT = ST, zT = WT, BT = FT.length), kT > (BT = (WT = Math.ceil(LT / 7)) > BT ? WT + 1 : BT + 1) && (kT = BT, iT.length = 1), iT.reverse(); kT--;) iT.push(0);
          iT.reverse()
        }
        for ((BT = FT.length) - (kT = ST.length) < 0 && (kT = BT, iT = ST, ST = FT, FT = iT), IT = 0; kT;) IT = (FT[--kT] = FT[kT] + ST[kT] + IT) / cT | 0, FT[kT] %= cT;
        for (IT && (FT.unshift(IT), ++zT), BT = FT.length; 0 == FT[--BT];) FT.pop();
        return oT.d = FT, oT.e = zT, XT ? fT(oT, LT) : oT
      }

      function gT(TT, oT, IT) {
        if (TT !== ~~TT || TT < oT || TT > IT) throw Error(FT + TT)
      }

      function hT(TT) {
        var oT, IT, iT, zT = TT.length - 1,
          kT = "",
          WT = TT[0];
        if (zT > 0) {
          for (kT += WT, oT = 1; oT < zT; oT++)(IT = 7 - (iT = TT[oT] + "").length) && (kT += uT(IT)), kT += iT;
          (IT = 7 - (iT = (WT = TT[oT]) + "").length) && (kT += uT(IT))
        } else if (0 === WT) return "0";
        for (; WT % 10 === 0;) WT /= 10;
        return kT + WT
      }
      rT.absoluteValue = rT.abs = function() {
        var TT = new this.constructor(this);
        return TT.s && (TT.s = 1), TT
      }, rT.comparedTo = rT.cmp = function(TT) {
        var oT, IT, iT, zT, kT = this;
        if (TT = new kT.constructor(TT), kT.s !== TT.s) return kT.s || -TT.s;
        if (kT.e !== TT.e) return kT.e > TT.e ^ kT.s < 0 ? 1 : -1;
        for (oT = 0, IT = (iT = kT.d.length) < (zT = TT.d.length) ? iT : zT; oT < IT; ++oT)
          if (kT.d[oT] !== TT.d[oT]) return kT.d[oT] > TT.d[oT] ^ kT.s < 0 ? 1 : -1;
        return iT === zT ? 0 : iT > zT ^ kT.s < 0 ? 1 : -1
      }, rT.decimalPlaces = rT.dp = function() {
        var TT = this,
          oT = TT.d.length - 1,
          IT = 7 * (oT - TT.e);
        if (oT = TT.d[oT])
          for (; oT % 10 == 0; oT /= 10) IT--;
        return IT < 0 ? 0 : IT
      }, rT.dividedBy = rT.div = function(TT) {
        return wT(this, new this.constructor(TT))
      }, rT.dividedToIntegerBy = rT.idiv = function(TT) {
        var oT = this.constructor;
        return fT(wT(this, new oT(TT), 0, 1), oT.precision)
      }, rT.equals = rT.eq = function(TT) {
        return !this.cmp(TT)
      }, rT.exponent = function() {
        return eT(this)
      }, rT.greaterThan = rT.gt = function(TT) {
        return this.cmp(TT) > 0
      }, rT.greaterThanOrEqualTo = rT.gte = function(TT) {
        return this.cmp(TT) >= 0
      }, rT.isInteger = rT.isint = function() {
        return this.e > this.d.length - 2
      }, rT.isNegative = rT.isneg = function() {
        return this.s < 0
      }, rT.isPositive = rT.ispos = function() {
        return this.s > 0
      }, rT.isZero = function() {
        return 0 === this.s
      }, rT.lessThan = rT.lt = function(TT) {
        return this.cmp(TT) < 0
      }, rT.lessThanOrEqualTo = rT.lte = function(TT) {
        return this.cmp(TT) < 1
      }, rT.logarithm = rT.log = function(TT) {
        var oT, IT = this,
          iT = IT.constructor,
          kT = iT.precision,
          WT = kT + 5;
        if (void 0 === TT) TT = new iT(10);
        else if ((TT = new iT(TT)).s < 1 || TT.eq(zT)) throw Error(BT + "NaN");
        if (IT.s < 1) throw Error(BT + (IT.s ? "NaN" : "-Infinity"));
        return IT.eq(zT) ? new iT(0) : (XT = !1, oT = wT(vT(IT, WT), vT(TT, WT), WT), XT = !0, fT(oT, kT))
      }, rT.minus = rT.sub = function(TT) {
        var oT = this;
        return TT = new oT.constructor(TT), oT.s == TT.s ? CT(oT, TT) : AT(oT, (TT.s = -TT.s, TT))
      }, rT.modulo = rT.mod = function(TT) {
        var oT, IT = this,
          iT = IT.constructor,
          zT = iT.precision;
        if (!(TT = new iT(TT)).s) throw Error(BT + "NaN");
        return IT.s ? (XT = !1, oT = wT(IT, TT, 0, 1).times(TT), XT = !0, IT.minus(oT)) : fT(new iT(IT), zT)
      }, rT.naturalExponential = rT.exp = function() {
        return mT(this)
      }, rT.naturalLogarithm = rT.ln = function() {
        return vT(this)
      }, rT.negated = rT.neg = function() {
        var TT = new this.constructor(this);
        return TT.s = -TT.s || 0, TT
      }, rT.plus = rT.add = function(TT) {
        var oT = this;
        return TT = new oT.constructor(TT), oT.s == TT.s ? AT(oT, TT) : CT(oT, (TT.s = -TT.s, TT))
      }, rT.precision = rT.sd = function(TT) {
        var oT, IT, iT, zT = this;
        if (void 0 !== TT && TT !== !!TT && 1 !== TT && 0 !== TT) throw Error(FT + TT);
        if (oT = eT(zT) + 1, IT = 7 * (iT = zT.d.length - 1) + 1, iT = zT.d[iT]) {
          for (; iT % 10 == 0; iT /= 10) IT--;
          for (iT = zT.d[0]; iT >= 10; iT /= 10) IT++
        }
        return TT && oT > IT ? oT : IT
      }, rT.squareRoot = rT.sqrt = function() {
        var TT, oT, IT, iT, zT, kT, WT, FT = this,
          ST = FT.constructor;
        if (FT.s < 1) {
          if (!FT.s) return new ST(0);
          throw Error(BT + "NaN")
        }
        for (TT = eT(FT), XT = !1, 0 == (zT = Math.sqrt(+FT)) || zT == 1 / 0 ? (((oT = hT(FT.d)).length + TT) % 2 == 0 && (oT += "0"), zT = Math.sqrt(oT), TT = DT((TT + 1) / 2) - (TT < 0 || TT % 2), iT = new ST(oT = zT == 1 / 0 ? "1e" + TT : (oT = zT.toExponential()).slice(0, oT.indexOf("e") + 1) + TT)) : iT = new ST(zT.toString()), zT = WT = (IT = ST.precision) + 3;;)
          if (iT = (kT = iT).plus(wT(FT, kT, WT + 2)).times(.5), hT(kT.d).slice(0, WT) === (oT = hT(iT.d)).slice(0, WT)) {
            if (oT = oT.slice(WT - 3, WT + 1), zT == WT && "4999" == oT) {
              if (fT(kT, IT + 1, 0), kT.times(kT).eq(FT)) {
                iT = kT;
                break
              }
            } else if ("9999" != oT) break;
            WT += 4
          } return XT = !0, fT(iT, IT)
      }, rT.times = rT.mul = function(TT) {
        var oT, IT, iT, zT, kT, WT, BT, FT, ST, DT = this,
          LT = DT.constructor,
          xT = DT.d,
          KT = (TT = new LT(TT)).d;
        if (!DT.s || !TT.s) return new LT(0);
        for (TT.s *= DT.s, IT = DT.e + TT.e, (FT = xT.length) < (ST = KT.length) && (kT = xT, xT = KT, KT = kT, WT = FT, FT = ST, ST = WT), kT = [], iT = WT = FT + ST; iT--;) kT.push(0);
        for (iT = ST; --iT >= 0;) {
          for (oT = 0, zT = FT + iT; zT > iT;) BT = kT[zT] + KT[iT] * xT[zT - iT - 1] + oT, kT[zT--] = BT % cT | 0, oT = BT / cT | 0;
          kT[zT] = (kT[zT] + oT) % cT | 0
        }
        for (; !kT[--WT];) kT.pop();
        return oT ? ++IT : kT.shift(), TT.d = kT, TT.e = IT, XT ? fT(TT, LT.precision) : TT
      }, rT.toDecimalPlaces = rT.todp = function(TT, oT) {
        var IT = this,
          iT = IT.constructor;
        return IT = new iT(IT), void 0 === TT ? IT : (gT(TT, 0, kT), void 0 === oT ? oT = iT.rounding : gT(oT, 0, 8), fT(IT, TT + eT(IT) + 1, oT))
      }, rT.toExponential = function(TT, oT) {
        var IT, iT = this,
          zT = iT.constructor;
        return void 0 === TT ? IT = jT(iT, !0) : (gT(TT, 0, kT), void 0 === oT ? oT = zT.rounding : gT(oT, 0, 8), IT = jT(iT = fT(new zT(iT), TT + 1, oT), !0, TT + 1)), IT
      }, rT.toFixed = function(TT, oT) {
        var IT, iT, zT = this,
          WT = zT.constructor;
        return void 0 === TT ? jT(zT) : (gT(TT, 0, kT), void 0 === oT ? oT = WT.rounding : gT(oT, 0, 8), IT = jT((iT = fT(new WT(zT), TT + eT(zT) + 1, oT)).abs(), !1, TT + eT(iT) + 1), zT.isneg() && !zT.isZero() ? "-" + IT : IT)
      }, rT.toInteger = rT.toint = function() {
        var TT = this,
          oT = TT.constructor;
        return fT(new oT(TT), eT(TT) + 1, oT.rounding)
      }, rT.toNumber = function() {
        return +this
      }, rT.toPower = rT.pow = function(TT) {
        var oT, IT, iT, kT, WT, FT, ST = this,
          LT = ST.constructor,
          xT = +(TT = new LT(TT));
        if (!TT.s) return new LT(zT);
        if (!(ST = new LT(ST)).s) {
          if (TT.s < 1) throw Error(BT + "Infinity");
          return ST
        }
        if (ST.eq(zT)) return ST;
        if (iT = LT.precision, TT.eq(zT)) return fT(ST, iT);
        if (FT = (oT = TT.e) >= (IT = TT.d.length - 1), WT = ST.s, FT) {
          if ((IT = xT < 0 ? -xT : xT) <= KT) {
            for (kT = new LT(zT), oT = Math.ceil(iT / 7 + 4), XT = !1; IT % 2 && JT((kT = kT.times(ST)).d, oT), 0 !== (IT = DT(IT / 2));) JT((ST = ST.times(ST)).d, oT);
            return XT = !0, TT.s < 0 ? new LT(zT).div(kT) : fT(kT, iT)
          }
        } else if (WT < 0) throw Error(BT + "NaN");
        return WT = WT < 0 && 1 & TT.d[Math.max(oT, IT)] ? -1 : 1, ST.s = 1, XT = !1, kT = TT.times(vT(ST, iT + 12)), XT = !0, (kT = mT(kT)).s = WT, kT
      }, rT.toPrecision = function(TT, oT) {
        var IT, iT, zT = this,
          WT = zT.constructor;
        return void 0 === TT ? iT = jT(zT, (IT = eT(zT)) <= WT.toExpNeg || IT >= WT.toExpPos) : (gT(TT, 1, kT), void 0 === oT ? oT = WT.rounding : gT(oT, 0, 8), iT = jT(zT = fT(new WT(zT), TT, oT), TT <= (IT = eT(zT)) || IT <= WT.toExpNeg, TT)), iT
      }, rT.toSignificantDigits = rT.tosd = function(TT, oT) {
        var IT = this.constructor;
        return void 0 === TT ? (TT = IT.precision, oT = IT.rounding) : (gT(TT, 1, kT), void 0 === oT ? oT = IT.rounding : gT(oT, 0, 8)), fT(new IT(this), TT, oT)
      }, rT.toString = rT.valueOf = rT.val = rT.toJSON = function() {
        var TT = this,
          oT = eT(TT),
          IT = TT.constructor;
        return jT(TT, oT <= IT.toExpNeg || oT >= IT.toExpPos)
      };
      var wT = function() {
        function TT(TT, oT) {
          var IT, iT = 0,
            zT = TT.length;
          for (TT = TT.slice(); zT--;) IT = TT[zT] * oT + iT, TT[zT] = IT % cT | 0, iT = IT / cT | 0;
          return iT && TT.unshift(iT), TT
        }

        function oT(TT, oT, IT, iT) {
          var zT, kT;
          if (IT != iT) kT = IT > iT ? 1 : -1;
          else
            for (zT = kT = 0; zT < IT; zT++)
              if (TT[zT] != oT[zT]) {
                kT = TT[zT] > oT[zT] ? 1 : -1;
                break
              } return kT
        }

        function IT(TT, oT, IT) {
          for (var iT = 0; IT--;) TT[IT] -= iT, iT = TT[IT] < oT[IT] ? 1 : 0, TT[IT] = iT * cT + TT[IT] - oT[IT];
          for (; !TT[0] && TT.length > 1;) TT.shift()
        }
        return function(iT, zT, kT, WT) {
          var XT, FT, ST, DT, LT, xT, KT, MT, rT, AT, gT, hT, wT, mT, RT, uT, vT, ET, CT = iT.constructor,
            jT = iT.s == zT.s ? 1 : -1,
            JT = iT.d,
            UT = zT.d;
          if (!iT.s) return new CT(iT);
          if (!zT.s) throw Error(BT + "Division by zero");
          for (FT = iT.e - zT.e, vT = UT.length, RT = JT.length, MT = (KT = new CT(jT)).d = [], ST = 0; UT[ST] == (JT[ST] || 0);) ++ST;
          if (UT[ST] > (JT[ST] || 0) && --FT, (hT = null == kT ? kT = CT.precision : WT ? kT + (eT(iT) - eT(zT)) + 1 : kT) < 0) return new CT(0);
          if (hT = hT / 7 + 2 | 0, ST = 0, 1 == vT)
            for (DT = 0, UT = UT[0], hT++;
              (ST < RT || DT) && hT--; ST++) wT = DT * cT + (JT[ST] || 0), MT[ST] = wT / UT | 0, DT = wT % UT | 0;
          else {
            for ((DT = cT / (UT[0] + 1) | 0) > 1 && (UT = TT(UT, DT), JT = TT(JT, DT), vT = UT.length, RT = JT.length), mT = vT, AT = (rT = JT.slice(0, vT)).length; AT < vT;) rT[AT++] = 0;
            (ET = UT.slice()).unshift(0), uT = UT[0], UT[1] >= cT / 2 && ++uT;
            do {
              DT = 0, (XT = oT(UT, rT, vT, AT)) < 0 ? (gT = rT[0], vT != AT && (gT = gT * cT + (rT[1] || 0)), (DT = gT / uT | 0) > 1 ? (DT >= cT && (DT = cT - 1), 1 == (XT = oT(LT = TT(UT, DT), rT, xT = LT.length, AT = rT.length)) && (DT--, IT(LT, vT < xT ? ET : UT, xT))) : (0 == DT && (XT = DT = 1), LT = UT.slice()), (xT = LT.length) < AT && LT.unshift(0), IT(rT, LT, AT), -1 == XT && (XT = oT(UT, rT, vT, AT = rT.length)) < 1 && (DT++, IT(rT, vT < AT ? ET : UT, AT)), AT = rT.length) : 0 === XT && (DT++, rT = [0]), MT[ST++] = DT, XT && rT[0] ? rT[AT++] = JT[mT] || 0 : (rT = [JT[mT]], AT = 1)
            } while ((mT++ < RT || void 0 !== rT[0]) && hT--)
          }
          return MT[0] || MT.shift(), KT.e = FT, fT(KT, WT ? kT + eT(KT) + 1 : kT)
        }
      }();

      function mT(TT, oT) {
        var IT, iT, kT, WT, BT, FT = 0,
          DT = 0,
          xT = TT.constructor,
          cT = xT.precision;
        if (eT(TT) > 16) throw Error(ST + eT(TT));
        if (!TT.s) return new xT(zT);
        for (null == oT ? (XT = !1, BT = cT) : BT = oT, WT = new xT(.03125); TT.abs().gte(.1);) TT = TT.times(WT), DT += 5;
        for (BT += Math.log(LT(2, DT)) / Math.LN10 * 2 + 5 | 0, IT = iT = kT = new xT(zT), xT.precision = BT;;) {
          if (iT = fT(iT.times(TT), BT), IT = IT.times(++FT), hT((WT = kT.plus(wT(iT, IT, BT))).d).slice(0, BT) === hT(kT.d).slice(0, BT)) {
            for (; DT--;) kT = fT(kT.times(kT), BT);
            return xT.precision = cT, null == oT ? (XT = !0, fT(kT, cT)) : kT
          }
          kT = WT
        }
      }

      function eT(TT) {
        for (var oT = 7 * TT.e, IT = TT.d[0]; IT >= 10; IT /= 10) oT++;
        return oT
      }

      function RT(TT, oT, IT) {
        if (oT > TT.LN10.sd()) throw XT = !0, IT && (TT.precision = IT), Error(BT + "LN10 precision limit exceeded");
        return fT(new TT(TT.LN10), oT)
      }

      function uT(TT) {
        for (var oT = ""; TT--;) oT += "0";
        return oT
      }

      function vT(TT, oT) {
        var IT, iT, kT, WT, FT, ST, DT, LT, xT, cT = 1,
          KT = TT,
          MT = KT.d,
          rT = KT.constructor,
          AT = rT.precision;
        if (KT.s < 1) throw Error(BT + (KT.s ? "NaN" : "-Infinity"));
        if (KT.eq(zT)) return new rT(0);
        if (null == oT ? (XT = !1, LT = AT) : LT = oT, KT.eq(10)) return null == oT && (XT = !0), RT(rT, LT);
        if (LT += 10, rT.precision = LT, iT = (IT = hT(MT)).charAt(0), WT = eT(KT), !(Math.abs(WT) < 15e14)) return DT = RT(rT, LT + 2, AT).times(WT + ""), KT = vT(new rT(iT + "." + IT.slice(1)), LT - 10).plus(DT), rT.precision = AT, null == oT ? (XT = !0, fT(KT, AT)) : KT;
        for (; iT < 7 && 1 != iT || 1 == iT && IT.charAt(1) > 3;) iT = (IT = hT((KT = KT.times(TT)).d)).charAt(0), cT++;
        for (WT = eT(KT), iT > 1 ? (KT = new rT("0." + IT), WT++) : KT = new rT(iT + "." + IT.slice(1)), ST = FT = KT = wT(KT.minus(zT), KT.plus(zT), LT), xT = fT(KT.times(KT), LT), kT = 3;;) {
          if (FT = fT(FT.times(xT), LT), hT((DT = ST.plus(wT(FT, new rT(kT), LT))).d).slice(0, LT) === hT(ST.d).slice(0, LT)) return ST = ST.times(2), 0 !== WT && (ST = ST.plus(RT(rT, LT + 2, AT).times(WT + ""))), ST = wT(ST, new rT(cT), LT), rT.precision = AT, null == oT ? (XT = !0, fT(ST, AT)) : ST;
          ST = DT, kT += 2
        }
      }

      function ET(TT, oT) {
        var IT, iT, zT;
        for ((IT = oT.indexOf(".")) > -1 && (oT = oT.replace(".", "")), (iT = oT.search(/e/i)) > 0 ? (IT < 0 && (IT = iT), IT += +oT.slice(iT + 1), oT = oT.substring(0, iT)) : IT < 0 && (IT = oT.length), iT = 0; 48 === oT.charCodeAt(iT);) ++iT;
        for (zT = oT.length; 48 === oT.charCodeAt(zT - 1);) --zT;
        if (oT = oT.slice(iT, zT)) {
          if (zT -= iT, IT = IT - iT - 1, TT.e = DT(IT / 7), TT.d = [], iT = (IT + 1) % 7, IT < 0 && (iT += 7), iT < zT) {
            for (iT && TT.d.push(+oT.slice(0, iT)), zT -= 7; iT < zT;) TT.d.push(+oT.slice(iT, iT += 7));
            iT = 7 - (oT = oT.slice(iT)).length
          } else iT -= zT;
          for (; iT--;) oT += "0";
          if (TT.d.push(+oT), XT && (TT.e > MT || TT.e < -MT)) throw Error(ST + IT)
        } else TT.s = 0, TT.e = 0, TT.d = [0];
        return TT
      }

      function fT(TT, oT, IT) {
        var iT, zT, kT, WT, BT, FT, xT, KT, rT = TT.d;
        for (WT = 1, kT = rT[0]; kT >= 10; kT /= 10) WT++;
        if ((iT = oT - WT) < 0) iT += 7, zT = oT, xT = rT[KT = 0];
        else {
          if ((KT = Math.ceil((iT + 1) / 7)) >= (kT = rT.length)) return TT;
          for (xT = kT = rT[KT], WT = 1; kT >= 10; kT /= 10) WT++;
          zT = (iT %= 7) - 7 + WT
        }
        if (void 0 !== IT && (BT = xT / (kT = LT(10, WT - zT - 1)) % 10 | 0, FT = oT < 0 || void 0 !== rT[KT + 1] || xT % kT, FT = IT < 4 ? (BT || FT) && (0 == IT || IT == (TT.s < 0 ? 3 : 2)) : BT > 5 || 5 == BT && (4 == IT || FT || 6 == IT && (iT > 0 ? zT > 0 ? xT / LT(10, WT - zT) : 0 : rT[KT - 1]) % 10 & 1 || IT == (TT.s < 0 ? 8 : 7))), oT < 1 || !rT[0]) return FT ? (kT = eT(TT), rT.length = 1, oT = oT - kT - 1, rT[0] = LT(10, (7 - oT % 7) % 7), TT.e = DT(-oT / 7) || 0) : (rT.length = 1, rT[0] = TT.e = TT.s = 0), TT;
        if (0 == iT ? (rT.length = KT, kT = 1, KT--) : (rT.length = KT + 1, kT = LT(10, 7 - iT), rT[KT] = zT > 0 ? (xT / LT(10, WT - zT) % LT(10, zT) | 0) * kT : 0), FT)
          for (;;) {
            if (0 == KT) {
              (rT[0] += kT) == cT && (rT[0] = 1, ++TT.e);
              break
            }
            if (rT[KT] += kT, rT[KT] != cT) break;
            rT[KT--] = 0, kT = 1
          }
        for (iT = rT.length; 0 === rT[--iT];) rT.pop();
        if (XT && (TT.e > MT || TT.e < -MT)) throw Error(ST + eT(TT));
        return TT
      }

      function CT(TT, oT) {
        var IT, iT, zT, kT, WT, BT, FT, ST, DT, LT, xT = TT.constructor,
          KT = xT.precision;
        if (!TT.s || !oT.s) return oT.s ? oT.s = -oT.s : oT = new xT(TT), XT ? fT(oT, KT) : oT;
        if (FT = TT.d, LT = oT.d, iT = oT.e, ST = TT.e, FT = FT.slice(), WT = ST - iT) {
          for ((DT = WT < 0) ? (IT = FT, WT = -WT, BT = LT.length) : (IT = LT, iT = ST, BT = FT.length), WT > (zT = Math.max(Math.ceil(KT / 7), BT) + 2) && (WT = zT, IT.length = 1), IT.reverse(), zT = WT; zT--;) IT.push(0);
          IT.reverse()
        } else {
          for ((DT = (zT = FT.length) < (BT = LT.length)) && (BT = zT), zT = 0; zT < BT; zT++)
            if (FT[zT] != LT[zT]) {
              DT = FT[zT] < LT[zT];
              break
            } WT = 0
        }
        for (DT && (IT = FT, FT = LT, LT = IT, oT.s = -oT.s), BT = FT.length, zT = LT.length - BT; zT > 0; --zT) FT[BT++] = 0;
        for (zT = LT.length; zT > WT;) {
          if (FT[--zT] < LT[zT]) {
            for (kT = zT; kT && 0 === FT[--kT];) FT[kT] = cT - 1;
            --FT[kT], FT[zT] += cT
          }
          FT[zT] -= LT[zT]
        }
        for (; 0 === FT[--BT];) FT.pop();
        for (; 0 === FT[0]; FT.shift()) --iT;
        return FT[0] ? (oT.d = FT, oT.e = iT, XT ? fT(oT, KT) : oT) : new xT(0)
      }

      function jT(TT, oT, IT) {
        var iT, zT = eT(TT),
          kT = hT(TT.d),
          WT = kT.length;
        return oT ? (IT && (iT = IT - WT) > 0 ? kT = kT.charAt(0) + "." + kT.slice(1) + uT(iT) : WT > 1 && (kT = kT.charAt(0) + "." + kT.slice(1)), kT = kT + (zT < 0 ? "e" : "e+") + zT) : zT < 0 ? (kT = "0." + uT(-zT - 1) + kT, IT && (iT = IT - WT) > 0 && (kT += uT(iT))) : zT >= WT ? (kT += uT(zT + 1 - WT), IT && (iT = IT - zT - 1) > 0 && (kT = kT + "." + uT(iT))) : ((iT = zT + 1) < WT && (kT = kT.slice(0, iT) + "." + kT.slice(iT)), IT && (iT = IT - WT) > 0 && (zT + 1 === WT && (kT += "."), kT += uT(iT))), TT.s < 0 ? "-" + kT : kT
      }

      function JT(TT, oT) {
        if (TT.length > oT) return TT.length = oT, !0
      }

      function UT(TT) {
        if (!TT || "object" !== typeof TT) throw Error(BT + "Object expected");
        var oT, IT, iT, zT = ["precision", 1, kT, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (oT = 0; oT < zT.length; oT += 3)
          if (void 0 !== (iT = TT[IT = zT[oT]])) {
            if (!(DT(iT) === iT && iT >= zT[oT + 1] && iT <= zT[oT + 2])) throw Error(FT + IT + ": " + iT);
            this[IT] = iT
          } if (void 0 !== (iT = TT[IT = "LN10"])) {
          if (iT != Math.LN10) throw Error(FT + IT + ": " + iT);
          this[IT] = new this(iT)
        }
        return this
      }
      WT = function TT(oT) {
        var IT, iT, zT;

        function kT(TT) {
          var oT = this;
          if (!(oT instanceof kT)) return new kT(TT);
          if (oT.constructor = kT, TT instanceof kT) return oT.s = TT.s, oT.e = TT.e, void(oT.d = (TT = TT.d) ? TT.slice() : TT);
          if ("number" === typeof TT) {
            if (0 * TT !== 0) throw Error(FT + TT);
            if (TT > 0) oT.s = 1;
            else {
              if (!(TT < 0)) return oT.s = 0, oT.e = 0, void(oT.d = [0]);
              TT = -TT, oT.s = -1
            }
            return TT === ~~TT && TT < 1e7 ? (oT.e = 0, void(oT.d = [TT])) : ET(oT, TT.toString())
          }
          if ("string" !== typeof TT) throw Error(FT + TT);
          if (45 === TT.charCodeAt(0) ? (TT = TT.slice(1), oT.s = -1) : oT.s = 1, !xT.test(TT)) throw Error(FT + TT);
          ET(oT, TT)
        }
        if (kT.prototype = rT, kT.ROUND_UP = 0, kT.ROUND_DOWN = 1, kT.ROUND_CEIL = 2, kT.ROUND_FLOOR = 3, kT.ROUND_HALF_UP = 4, kT.ROUND_HALF_DOWN = 5, kT.ROUND_HALF_EVEN = 6, kT.ROUND_HALF_CEIL = 7, kT.ROUND_HALF_FLOOR = 8, kT.clone = TT, kT.config = kT.set = UT, void 0 === oT && (oT = {}), oT)
          for (zT = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], IT = 0; IT < zT.length;) oT.hasOwnProperty(iT = zT[IT++]) || (oT[iT] = this[iT]);
        return kT.config(oT), kT
      }(WT), WT.default = WT.Decimal = WT, zT = new WT(1), void 0 === (iT = function() {
        return WT
      }.call(oT, IT, oT, TT)) || (TT.exports = iT)
    }()
  },
  5254: (TT, oT, IT) => {
    var iT = IT(4718)(IT(4552), "DataView");
    TT.exports = iT
  },
  4698: (TT, oT, IT) => {
    var iT = IT(4702),
      zT = IT(4762),
      kT = IT(4767),
      WT = IT(4770),
      XT = IT(4779);

    function BT(TT) {
      var oT = -1,
        IT = null == TT ? 0 : TT.length;
      for (this.clear(); ++oT < IT;) {
        var iT = TT[oT];
        this.set(iT[0], iT[1])
      }
    }
    BT.prototype.clear = iT, BT.prototype.delete = zT, BT.prototype.get = kT, BT.prototype.has = WT, BT.prototype.set = XT, TT.exports = BT
  },
  4788: (TT, oT, IT) => {
    var iT = IT(4797),
      zT = IT(4804),
      kT = IT(4828),
      WT = IT(4836),
      XT = IT(4840);

    function BT(TT) {
      var oT = -1,
        IT = null == TT ? 0 : TT.length;
      for (this.clear(); ++oT < IT;) {
        var iT = TT[oT];
        this.set(iT[0], iT[1])
      }
    }
    BT.prototype.clear = iT, BT.prototype.delete = zT, BT.prototype.get = kT, BT.prototype.has = WT, BT.prototype.set = XT, TT.exports = BT
  },
  4847: (TT, oT, IT) => {
    var iT = IT(4718)(IT(4552), "Map");
    TT.exports = iT
  },
  4686: (TT, oT, IT) => {
    var iT = IT(4691),
      zT = IT(4853),
      kT = IT(4871),
      WT = IT(4875),
      XT = IT(4881);

    function BT(TT) {
      var oT = -1,
        IT = null == TT ? 0 : TT.length;
      for (this.clear(); ++oT < IT;) {
        var iT = TT[oT];
        this.set(iT[0], iT[1])
      }
    }
    BT.prototype.clear = iT, BT.prototype.delete = zT, BT.prototype.get = kT, BT.prototype.has = WT, BT.prototype.set = XT, TT.exports = BT
  },
  5262: (TT, oT, IT) => {
    var iT = IT(4718)(IT(4552), "Promise");
    TT.exports = iT
  },
  5265: (TT, oT, IT) => {
    var iT = IT(4718)(IT(4552), "Set");
    TT.exports = iT
  },
  5102: (TT, oT, IT) => {
    var iT = IT(4686),
      zT = IT(5111),
      kT = IT(5115);

    function WT(TT) {
      var oT = -1,
        IT = null == TT ? 0 : TT.length;
      for (this.__data__ = new iT; ++oT < IT;) this.add(TT[oT])
    }
    WT.prototype.add = WT.prototype.push = zT, WT.prototype.has = kT, TT.exports = WT
  },
  5043: (TT, oT, IT) => {
    var iT = IT(4788),
      zT = IT(5051),
      kT = IT(5053),
      WT = IT(5060),
      XT = IT(5067),
      BT = IT(5075);

    function FT(TT) {
      var oT = this.__data__ = new iT(TT);
      this.size = oT.size
    }
    FT.prototype.clear = zT, FT.prototype.delete = kT, FT.prototype.get = WT, FT.prototype.has = XT, FT.prototype.set = BT, TT.exports = FT
  },
  4588: (TT, oT, IT) => {
    var iT = IT(4552).Symbol;
    TT.exports = iT
  },
  5136: (TT, oT, IT) => {
    var iT = IT(4552).Uint8Array;
    TT.exports = iT
  },
  5273: (TT, oT, IT) => {
    var iT = IT(4718)(IT(4552), "WeakMap");
    TT.exports = iT
  },
  5397: TT => {
    TT.exports = function(TT, oT, IT) {
      switch (IT.length) {
        case 0:
          return TT.call(oT);
        case 1:
          return TT.call(oT, IT[0]);
        case 2:
          return TT.call(oT, IT[0], IT[1]);
        case 3:
          return TT.call(oT, IT[0], IT[1], IT[2])
      }
      return TT.apply(oT, IT)
    }
  },
  5746: TT => {
    TT.exports = function(TT, oT) {
      for (var IT = -1, iT = null == TT ? 0 : TT.length; ++IT < iT;)
        if (!oT(TT[IT], IT, TT)) return !1;
      return !0
    }
  },
  5169: TT => {
    TT.exports = function(TT, oT) {
      for (var IT = -1, iT = null == TT ? 0 : TT.length, zT = 0, kT = []; ++IT < iT;) {
        var WT = TT[IT];
        oT(WT, IT, TT) && (kT[zT++] = WT)
      }
      return kT
    }
  },
  5485: (TT, oT, IT) => {
    var iT = IT(5492);
    TT.exports = function(TT, oT) {
      return !!(null == TT ? 0 : TT.length) && iT(TT, oT, 0) > -1
    }
  },
  5509: TT => {
    TT.exports = function(TT, oT, IT) {
      for (var iT = -1, zT = null == TT ? 0 : TT.length; ++iT < zT;)
        if (IT(oT, TT[iT])) return !0;
      return !1
    }
  },
  5184: (TT, oT, IT) => {
    var iT = IT(5187),
      zT = IT(5011),
      kT = IT(4617),
      WT = IT(5196),
      XT = IT(4985),
      BT = IT(5207),
      FT = Object.prototype.hasOwnProperty;
    TT.exports = function(TT, oT) {
      var IT = kT(TT),
        ST = !IT && zT(TT),
        DT = !IT && !ST && WT(TT),
        LT = !IT && !ST && !DT && BT(TT),
        xT = IT || ST || DT || LT,
        cT = xT ? iT(TT.length, String) : [],
        KT = cT.length;
      for (var MT in TT) !oT && !FT.call(TT, MT) || xT && ("length" == MT || DT && ("offset" == MT || "parent" == MT) || LT && ("buffer" == MT || "byteLength" == MT || "byteOffset" == MT) || XT(MT, KT)) || cT.push(MT);
      return cT
    }
  },
  4900: TT => {
    TT.exports = function(TT, oT) {
      for (var IT = -1, iT = null == TT ? 0 : TT.length, zT = Array(iT); ++IT < iT;) zT[IT] = oT(TT[IT], IT, TT);
      return zT
    }
  },
  5006: TT => {
    TT.exports = function(TT, oT) {
      for (var IT = -1, iT = oT.length, zT = TT.length; ++IT < iT;) TT[zT + IT] = oT[IT];
      return TT
    }
  },
  5121: TT => {
    TT.exports = function(TT, oT) {
      for (var IT = -1, iT = null == TT ? 0 : TT.length; ++IT < iT;)
        if (oT(TT[IT], IT, TT)) return !0;
      return !1
    }
  },
  5570: TT => {
    TT.exports = function(TT) {
      return TT.split("")
    }
  },
  4813: (TT, oT, IT) => {
    var iT = IT(4819);
    TT.exports = function(TT, oT) {
      for (var IT = TT.length; IT--;)
        if (iT(TT[IT][0], oT)) return IT;
      return -1
    }
  },
  5738: (TT, oT, IT) => {
    var iT = IT(5428);
    TT.exports = function(TT, oT, IT) {
      "__proto__" == oT && iT ? iT(TT, oT, {
        configurable: !0,
        enumerable: !0,
        value: IT,
        writable: !0
      }) : TT[oT] = IT
    }
  },
  5344: (TT, oT, IT) => {
    var iT = IT(5346),
      zT = IT(5364)(iT);
    TT.exports = zT
  },
  5754: (TT, oT, IT) => {
    var iT = IT(5344);
    TT.exports = function(TT, oT) {
      var IT = !0;
      return iT(TT, (function(TT, iT, zT) {
        return IT = !!oT(TT, iT, zT)
      })), IT
    }
  },
  5644: (TT, oT, IT) => {
    var iT = IT(4573);
    TT.exports = function(TT, oT, IT) {
      for (var zT = -1, kT = TT.length; ++zT < kT;) {
        var WT = TT[zT],
          XT = oT(WT);
        if (null != XT && (void 0 === BT ? XT === XT && !iT(XT) : IT(XT, BT))) var BT = XT,
          FT = WT
      }
      return FT
    }
  },
  5498: TT => {
    TT.exports = function(TT, oT, IT, iT) {
      for (var zT = TT.length, kT = IT + (iT ? 1 : -1); iT ? kT-- : ++kT < zT;)
        if (oT(TT[kT], kT, TT)) return kT;
      return -1
    }
  },
  5004: (TT, oT, IT) => {
    var iT = IT(5006),
      zT = IT(5008);
    TT.exports = function TT(oT, IT, kT, WT, XT) {
      var BT = -1,
        FT = oT.length;
      for (kT || (kT = zT), XT || (XT = []); ++BT < FT;) {
        var ST = oT[BT];
        IT > 0 && kT(ST) ? IT > 1 ? TT(ST, IT - 1, kT, WT, XT) : iT(XT, ST) : WT || (XT[XT.length] = ST)
      }
      return XT
    }
  },
  5355: (TT, oT, IT) => {
    var iT = IT(5360)();
    TT.exports = iT
  },
  5346: (TT, oT, IT) => {
    var iT = IT(5355),
      zT = IT(5176);
    TT.exports = function(TT, oT) {
      return TT && iT(TT, oT, zT)
    }
  },
  4648: (TT, oT, IT) => {
    var iT = IT(4656),
      zT = IT(4905);
    TT.exports = function(TT, oT) {
      for (var IT = 0, kT = (oT = iT(oT, TT)).length; null != TT && IT < kT;) TT = TT[zT(oT[IT++])];
      return IT && IT == kT ? TT : void 0
    }
  },
  5161: (TT, oT, IT) => {
    var iT = IT(5006),
      zT = IT(4617);
    TT.exports = function(TT, oT, IT) {
      var kT = oT(TT);
      return zT(TT) ? kT : iT(kT, IT(TT))
    }
  },
  4581: (TT, oT, IT) => {
    var iT = IT(4588),
      zT = IT(4591),
      kT = IT(4596),
      WT = iT ? iT.toStringTag : void 0;
    TT.exports = function(TT) {
      return null == TT ? void 0 === TT ? "[object Undefined]" : "[object Null]" : WT && WT in Object(TT) ? zT(TT) : kT(TT)
    }
  },
  5652: TT => {
    TT.exports = function(TT, oT) {
      return TT > oT
    }
  },
  5306: TT => {
    TT.exports = function(TT, oT) {
      return null != TT && oT in Object(TT)
    }
  },
  5492: (TT, oT, IT) => {
    var iT = IT(5498),
      zT = IT(5502),
      kT = IT(5506);
    TT.exports = function(TT, oT, IT) {
      return oT === oT ? kT(TT, oT, IT) : iT(TT, zT, IT)
    }
  },
  5016: (TT, oT, IT) => {
    var iT = IT(4581),
      zT = IT(4603);
    TT.exports = function(TT) {
      return zT(TT) && "[object Arguments]" == iT(TT)
    }
  },
  5084: (TT, oT, IT) => {
    var iT = IT(5092),
      zT = IT(4603);
    TT.exports = function TT(oT, IT, kT, WT, XT) {
      return oT === IT || (null == oT || null == IT || !zT(oT) && !zT(IT) ? oT !== oT && IT !== IT : iT(oT, IT, kT, WT, TT, XT))
    }
  },
  5092: (TT, oT, IT) => {
    var iT = IT(5043),
      zT = IT(5097),
      kT = IT(5129),
      WT = IT(5151),
      XT = IT(5250),
      BT = IT(4617),
      FT = IT(5196),
      ST = IT(5207),
      DT = "[object Arguments]",
      LT = "[object Array]",
      xT = "[object Object]",
      cT = Object.prototype.hasOwnProperty;
    TT.exports = function(TT, oT, IT, KT, MT, rT) {
      var AT = BT(TT),
        gT = BT(oT),
        hT = AT ? LT : XT(TT),
        wT = gT ? LT : XT(oT),
        mT = (hT = hT == DT ? xT : hT) == xT,
        eT = (wT = wT == DT ? xT : wT) == xT,
        RT = hT == wT;
      if (RT && FT(TT)) {
        if (!FT(oT)) return !1;
        AT = !0, mT = !1
      }
      if (RT && !mT) return rT || (rT = new iT), AT || ST(TT) ? zT(TT, oT, IT, KT, MT, rT) : kT(TT, oT, hT, IT, KT, MT, rT);
      if (!(1 & IT)) {
        var uT = mT && cT.call(TT, "__wrapped__"),
          vT = eT && cT.call(oT, "__wrapped__");
        if (uT || vT) {
          var ET = uT ? TT.value() : TT,
            fT = vT ? oT.value() : oT;
          return rT || (rT = new iT), MT(ET, fT, IT, KT, rT)
        }
      }
      return !!RT && (rT || (rT = new iT), WT(TT, oT, IT, KT, MT, rT))
    }
  },
  5039: (TT, oT, IT) => {
    var iT = IT(5043),
      zT = IT(5084);
    TT.exports = function(TT, oT, IT, kT) {
      var WT = IT.length,
        XT = WT,
        BT = !kT;
      if (null == TT) return !XT;
      for (TT = Object(TT); WT--;) {
        var FT = IT[WT];
        if (BT && FT[2] ? FT[1] !== TT[FT[0]] : !(FT[0] in TT)) return !1
      }
      for (; ++WT < XT;) {
        var ST = (FT = IT[WT])[0],
          DT = TT[ST],
          LT = FT[1];
        if (BT && FT[2]) {
          if (void 0 === DT && !(ST in TT)) return !1
        } else {
          var xT = new iT;
          if (kT) var cT = kT(DT, LT, ST, TT, oT, xT);
          if (!(void 0 === cT ? zT(LT, DT, 3, kT, xT) : cT)) return !1
        }
      }
      return !0
    }
  },
  5502: TT => {
    TT.exports = function(TT) {
      return TT !== TT
    }
  },
  4721: (TT, oT, IT) => {
    var iT = IT(4728),
      zT = IT(4731),
      kT = IT(4548),
      WT = IT(4747),
      XT = /^\[object .+?Constructor\]$/,
      BT = Function.prototype,
      FT = Object.prototype,
      ST = BT.toString,
      DT = FT.hasOwnProperty,
      LT = RegExp("^" + ST.call(DT).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    TT.exports = function(TT) {
      return !(!kT(TT) || zT(TT)) && (iT(TT) ? LT : XT).test(WT(TT))
    }
  },
  5213: (TT, oT, IT) => {
    var iT = IT(4581),
      zT = IT(4982),
      kT = IT(4603),
      WT = {};
    WT["[object Float32Array]"] = WT["[object Float64Array]"] = WT["[object Int8Array]"] = WT["[object Int16Array]"] = WT["[object Int32Array]"] = WT["[object Uint8Array]"] = WT["[object Uint8ClampedArray]"] = WT["[object Uint16Array]"] = WT["[object Uint32Array]"] = !0, WT["[object Arguments]"] = WT["[object Array]"] = WT["[object ArrayBuffer]"] = WT["[object Boolean]"] = WT["[object DataView]"] = WT["[object Date]"] = WT["[object Error]"] = WT["[object Function]"] = WT["[object Map]"] = WT["[object Number]"] = WT["[object Object]"] = WT["[object RegExp]"] = WT["[object Set]"] = WT["[object String]"] = WT["[object WeakMap]"] = !1, TT.exports = function(TT) {
      return kT(TT) && zT(TT.length) && !!WT[iT(TT)]
    }
  },
  5026: (TT, oT, IT) => {
    var iT = IT(5035),
      zT = IT(5294),
      kT = IT(5319),
      WT = IT(4617),
      XT = IT(5322);
    TT.exports = function(TT) {
      return "function" == typeof TT ? TT : null == TT ? kT : "object" == typeof TT ? WT(TT) ? zT(TT[0], TT[1]) : iT(TT) : XT(TT)
    }
  },
  5226: (TT, oT, IT) => {
    var iT = IT(5234),
      zT = IT(5237),
      kT = Object.prototype.hasOwnProperty;
    TT.exports = function(TT) {
      if (!iT(TT)) return zT(TT);
      var oT = [];
      for (var IT in Object(TT)) kT.call(TT, IT) && "constructor" != IT && oT.push(IT);
      return oT
    }
  },
  5659: TT => {
    TT.exports = function(TT, oT) {
      return TT < oT
    }
  },
  5340: (TT, oT, IT) => {
    var iT = IT(5344),
      zT = IT(4979);
    TT.exports = function(TT, oT) {
      var IT = -1,
        kT = zT(TT) ? Array(TT.length) : [];
      return iT(TT, (function(TT, iT, zT) {
        kT[++IT] = oT(TT, iT, zT)
      })), kT
    }
  },
  5035: (TT, oT, IT) => {
    var iT = IT(5039),
      zT = IT(5277),
      kT = IT(5292);
    TT.exports = function(TT) {
      var oT = zT(TT);
      return 1 == oT.length && oT[0][2] ? kT(oT[0][0], oT[0][1]) : function(IT) {
        return IT === TT || iT(IT, TT, oT)
      }
    }
  },
  5294: (TT, oT, IT) => {
    var iT = IT(5084),
      zT = IT(4640),
      kT = IT(5300),
      WT = IT(4662),
      XT = IT(5284),
      BT = IT(5292),
      FT = IT(4905);
    TT.exports = function(TT, oT) {
      return WT(TT) && XT(oT) ? BT(FT(TT), oT) : function(IT) {
        var WT = zT(IT, TT);
        return void 0 === WT && WT === oT ? kT(IT, TT) : iT(oT, WT, 3)
      }
    }
  },
  5022: (TT, oT, IT) => {
    var iT = IT(4900),
      zT = IT(4648),
      kT = IT(5026),
      WT = IT(5340),
      XT = IT(5372),
      BT = IT(5216),
      FT = IT(5377),
      ST = IT(5319),
      DT = IT(4617);
    TT.exports = function(TT, oT, IT) {
      oT = oT.length ? iT(oT, (function(TT) {
        return DT(TT) ? function(oT) {
          return zT(oT, 1 === TT.length ? TT[0] : TT)
        } : TT
      })) : [ST];
      var LT = -1;
      oT = iT(oT, BT(kT));
      var xT = WT(TT, (function(TT, IT, zT) {
        return {
          criteria: iT(oT, (function(oT) {
            return oT(TT)
          })),
          index: ++LT,
          value: TT
        }
      }));
      return XT(xT, (function(TT, oT) {
        return FT(TT, oT, IT)
      }))
    }
  },
  5326: TT => {
    TT.exports = function(TT) {
      return function(oT) {
        return null == oT ? void 0 : oT[TT]
      }
    }
  },
  5335: (TT, oT, IT) => {
    var iT = IT(4648);
    TT.exports = function(TT) {
      return function(oT) {
        return iT(oT, TT)
      }
    }
  },
  4968: TT => {
    var oT = Math.ceil,
      IT = Math.max;
    TT.exports = function(TT, iT, zT, kT) {
      for (var WT = -1, XT = IT(oT((iT - TT) / (zT || 1)), 0), BT = Array(XT); XT--;) BT[kT ? XT : ++WT] = TT, TT += zT;
      return BT
    }
  },
  5387: (TT, oT, IT) => {
    var iT = IT(5319),
      zT = IT(5394),
      kT = IT(5404);
    TT.exports = function(TT, oT) {
      return kT(zT(TT, oT, iT), TT + "")
    }
  },
  5413: (TT, oT, IT) => {
    var iT = IT(5420),
      zT = IT(5428),
      kT = IT(5319),
      WT = zT ? function(TT, oT) {
        return zT(TT, "toString", {
          configurable: !0,
          enumerable: !1,
          value: iT(oT),
          writable: !0
        })
      } : kT;
    TT.exports = WT
  },
  5552: TT => {
    TT.exports = function(TT, oT, IT) {
      var iT = -1,
        zT = TT.length;
      oT < 0 && (oT = -oT > zT ? 0 : zT + oT), (IT = IT > zT ? zT : IT) < 0 && (IT += zT), zT = oT > IT ? 0 : IT - oT >>> 0, oT >>>= 0;
      for (var kT = Array(zT); ++iT < zT;) kT[iT] = TT[iT + oT];
      return kT
    }
  },
  5822: (TT, oT, IT) => {
    var iT = IT(5344);
    TT.exports = function(TT, oT) {
      var IT;
      return iT(TT, (function(TT, iT, zT) {
        return !(IT = oT(TT, iT, zT))
      })), !!IT
    }
  },
  5372: TT => {
    TT.exports = function(TT, oT) {
      var IT = TT.length;
      for (TT.sort(oT); IT--;) TT[IT] = TT[IT].value;
      return TT
    }
  },
  5187: TT => {
    TT.exports = function(TT, oT) {
      for (var IT = -1, iT = Array(TT); ++IT < TT;) iT[IT] = oT(IT);
      return iT
    }
  },
  4894: (TT, oT, IT) => {
    var iT = IT(4588),
      zT = IT(4900),
      kT = IT(4617),
      WT = IT(4573),
      XT = iT ? iT.prototype : void 0,
      BT = XT ? XT.toString : void 0;
    TT.exports = function TT(oT) {
      if ("string" == typeof oT) return oT;
      if (kT(oT)) return zT(oT, TT) + "";
      if (WT(oT)) return BT ? BT.call(oT) : "";
      var IT = oT + "";
      return "0" == IT && 1 / oT == -1 / 0 ? "-0" : IT
    }
  },
  4566: (TT, oT, IT) => {
    var iT = IT(4568),
      zT = /^\s+/;
    TT.exports = function(TT) {
      return TT ? TT.slice(0, iT(TT) + 1).replace(zT, "") : TT
    }
  },
  5216: TT => {
    TT.exports = function(TT) {
      return function(oT) {
        return TT(oT)
      }
    }
  },
  5483: (TT, oT, IT) => {
    var iT = IT(5102),
      zT = IT(5485),
      kT = IT(5509),
      WT = IT(5126),
      XT = IT(5512),
      BT = IT(5149);
    TT.exports = function(TT, oT, IT) {
      var FT = -1,
        ST = zT,
        DT = TT.length,
        LT = !0,
        xT = [],
        cT = xT;
      if (IT) LT = !1, ST = kT;
      else if (DT >= 200) {
        var KT = oT ? null : XT(TT);
        if (KT) return BT(KT);
        LT = !1, ST = WT, cT = new iT
      } else cT = oT ? [] : xT;
      TT: for (; ++FT < DT;) {
        var MT = TT[FT],
          rT = oT ? oT(MT) : MT;
        if (MT = IT || 0 !== MT ? MT : 0, LT && rT === rT) {
          for (var AT = cT.length; AT--;)
            if (cT[AT] === rT) continue TT;
          oT && cT.push(rT), xT.push(MT)
        } else ST(cT, rT, IT) || (cT !== xT && cT.push(rT), xT.push(MT))
      }
      return xT
    }
  },
  5126: TT => {
    TT.exports = function(TT, oT) {
      return TT.has(oT)
    }
  },
  4656: (TT, oT, IT) => {
    var iT = IT(4617),
      zT = IT(4662),
      kT = IT(4665),
      WT = IT(4890);
    TT.exports = function(TT, oT) {
      return iT(TT) ? TT : zT(TT, oT) ? [TT] : kT(WT(TT))
    }
  },
  5546: (TT, oT, IT) => {
    var iT = IT(5552);
    TT.exports = function(TT, oT, IT) {
      var zT = TT.length;
      return IT = void 0 === IT ? zT : IT, !oT && IT >= zT ? TT : iT(TT, oT, IT)
    }
  },
  5383: (TT, oT, IT) => {
    var iT = IT(4573);
    TT.exports = function(TT, oT) {
      if (TT !== oT) {
        var IT = void 0 !== TT,
          zT = null === TT,
          kT = TT === TT,
          WT = iT(TT),
          XT = void 0 !== oT,
          BT = null === oT,
          FT = oT === oT,
          ST = iT(oT);
        if (!BT && !ST && !WT && TT > oT || WT && XT && FT && !BT && !ST || zT && XT && FT || !IT && FT || !kT) return 1;
        if (!zT && !WT && !ST && TT < oT || ST && IT && kT && !zT && !WT || BT && IT && kT || !XT && kT || !FT) return -1
      }
      return 0
    }
  },
  5377: (TT, oT, IT) => {
    var iT = IT(5383);
    TT.exports = function(TT, oT, IT) {
      for (var zT = -1, kT = TT.criteria, WT = oT.criteria, XT = kT.length, BT = IT.length; ++zT < XT;) {
        var FT = iT(kT[zT], WT[zT]);
        if (FT) return zT >= BT ? FT : FT * ("desc" == IT[zT] ? -1 : 1)
      }
      return TT.index - oT.index
    }
  },
  4740: (TT, oT, IT) => {
    var iT = IT(4552)["__core-js_shared__"];
    TT.exports = iT
  },
  5364: (TT, oT, IT) => {
    var iT = IT(4979);
    TT.exports = function(TT, oT) {
      return function(IT, zT) {
        if (null == IT) return IT;
        if (!iT(IT)) return TT(IT, zT);
        for (var kT = IT.length, WT = oT ? kT : -1, XT = Object(IT);
          (oT ? WT-- : ++WT < kT) && !1 !== zT(XT[WT], WT, XT););
        return IT
      }
    }
  },
  5360: TT => {
    TT.exports = function(TT) {
      return function(oT, IT, iT) {
        for (var zT = -1, kT = Object(oT), WT = iT(oT), XT = WT.length; XT--;) {
          var BT = WT[TT ? XT : ++zT];
          if (!1 === IT(kT[BT], BT, kT)) break
        }
        return oT
      }
    }
  },
  5540: (TT, oT, IT) => {
    var iT = IT(5546),
      zT = IT(5559),
      kT = IT(5564),
      WT = IT(4890);
    TT.exports = function(TT) {
      return function(oT) {
        oT = WT(oT);
        var IT = zT(oT) ? kT(oT) : void 0,
          XT = IT ? IT[0] : oT.charAt(0),
          BT = IT ? iT(IT, 1).join("") : oT.slice(1);
        return XT[TT]() + BT
      }
    }
  },
  5835: (TT, oT, IT) => {
    var iT = IT(5026),
      zT = IT(4979),
      kT = IT(5176);
    TT.exports = function(TT) {
      return function(oT, IT, WT) {
        var XT = Object(oT);
        if (!zT(oT)) {
          var BT = iT(IT, 3);
          oT = kT(oT), IT = function(TT) {
            return BT(XT[TT], TT, XT)
          }
        }
        var FT = TT(oT, IT, WT);
        return FT > -1 ? XT[BT ? oT[FT] : FT] : void 0
      }
    }
  },
  4963: (TT, oT, IT) => {
    var iT = IT(4968),
      zT = IT(4975),
      kT = IT(4994);
    TT.exports = function(TT) {
      return function(oT, IT, WT) {
        return WT && "number" != typeof WT && zT(oT, IT, WT) && (IT = WT = void 0), oT = kT(oT), void 0 === IT ? (IT = oT, oT = 0) : IT = kT(IT), WT = void 0 === WT ? oT < IT ? 1 : -1 : kT(WT), iT(oT, IT, WT, TT)
      }
    }
  },
  5512: (TT, oT, IT) => {
    var iT = IT(5265),
      zT = IT(5521),
      kT = IT(5149),
      WT = iT && 1 / kT(new iT([, -0]))[1] == 1 / 0 ? function(TT) {
        return new iT(TT)
      } : zT;
    TT.exports = WT
  },
  5428: (TT, oT, IT) => {
    var iT = IT(4718),
      zT = function() {
        try {
          var TT = iT(Object, "defineProperty");
          return TT({}, "", {}), TT
        } catch (oT) {}
      }();
    TT.exports = zT
  },
  5097: (TT, oT, IT) => {
    var iT = IT(5102),
      zT = IT(5121),
      kT = IT(5126);
    TT.exports = function(TT, oT, IT, WT, XT, BT) {
      var FT = 1 & IT,
        ST = TT.length,
        DT = oT.length;
      if (ST != DT && !(FT && DT > ST)) return !1;
      var LT = BT.get(TT),
        xT = BT.get(oT);
      if (LT && xT) return LT == oT && xT == TT;
      var cT = -1,
        KT = !0,
        MT = 2 & IT ? new iT : void 0;
      for (BT.set(TT, oT), BT.set(oT, TT); ++cT < ST;) {
        var rT = TT[cT],
          AT = oT[cT];
        if (WT) var gT = FT ? WT(AT, rT, cT, oT, TT, BT) : WT(rT, AT, cT, TT, oT, BT);
        if (void 0 !== gT) {
          if (gT) continue;
          KT = !1;
          break
        }
        if (MT) {
          if (!zT(oT, (function(TT, oT) {
              if (!kT(MT, oT) && (rT === TT || XT(rT, TT, IT, WT, BT))) return MT.push(oT)
            }))) {
            KT = !1;
            break
          }
        } else if (rT !== AT && !XT(rT, AT, IT, WT, BT)) {
          KT = !1;
          break
        }
      }
      return BT.delete(TT), BT.delete(oT), KT
    }
  },
  5129: (TT, oT, IT) => {
    var iT = IT(4588),
      zT = IT(5136),
      kT = IT(4819),
      WT = IT(5097),
      XT = IT(5141),
      BT = IT(5149),
      FT = iT ? iT.prototype : void 0,
      ST = FT ? FT.valueOf : void 0;
    TT.exports = function(TT, oT, IT, iT, FT, DT, LT) {
      switch (IT) {
        case "[object DataView]":
          if (TT.byteLength != oT.byteLength || TT.byteOffset != oT.byteOffset) return !1;
          TT = TT.buffer, oT = oT.buffer;
        case "[object ArrayBuffer]":
          return !(TT.byteLength != oT.byteLength || !DT(new zT(TT), new zT(oT)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return kT(+TT, +oT);
        case "[object Error]":
          return TT.name == oT.name && TT.message == oT.message;
        case "[object RegExp]":
        case "[object String]":
          return TT == oT + "";
        case "[object Map]":
          var xT = XT;
        case "[object Set]":
          var cT = 1 & iT;
          if (xT || (xT = BT), TT.size != oT.size && !cT) return !1;
          var KT = LT.get(TT);
          if (KT) return KT == oT;
          iT |= 2, LT.set(TT, oT);
          var MT = WT(xT(TT), xT(oT), iT, FT, DT, LT);
          return LT.delete(TT), MT;
        case "[object Symbol]":
          if (ST) return ST.call(TT) == ST.call(oT)
      }
      return !1
    }
  },
  5151: (TT, oT, IT) => {
    var iT = IT(5154),
      zT = Object.prototype.hasOwnProperty;
    TT.exports = function(TT, oT, IT, kT, WT, XT) {
      var BT = 1 & IT,
        FT = iT(TT),
        ST = FT.length;
      if (ST != iT(oT).length && !BT) return !1;
      for (var DT = ST; DT--;) {
        var LT = FT[DT];
        if (!(BT ? LT in oT : zT.call(oT, LT))) return !1
      }
      var xT = XT.get(TT),
        cT = XT.get(oT);
      if (xT && cT) return xT == oT && cT == TT;
      var KT = !0;
      XT.set(TT, oT), XT.set(oT, TT);
      for (var MT = BT; ++DT < ST;) {
        var rT = TT[LT = FT[DT]],
          AT = oT[LT];
        if (kT) var gT = BT ? kT(AT, rT, LT, oT, TT, XT) : kT(rT, AT, LT, TT, oT, XT);
        if (!(void 0 === gT ? rT === AT || WT(rT, AT, IT, kT, XT) : gT)) {
          KT = !1;
          break
        }
        MT || (MT = "constructor" == LT)
      }
      if (KT && !MT) {
        var hT = TT.constructor,
          wT = oT.constructor;
        hT == wT || !("constructor" in TT) || !("constructor" in oT) || "function" == typeof hT && hT instanceof hT && "function" == typeof wT && wT instanceof wT || (KT = !1)
      }
      return XT.delete(TT), XT.delete(oT), KT
    }
  },
  4557: (TT, oT, IT) => {
    var iT = "object" == typeof IT.g && IT.g && IT.g.Object === Object && IT.g;
    TT.exports = iT
  },
  5154: (TT, oT, IT) => {
    var iT = IT(5161),
      zT = IT(5164),
      kT = IT(5176);
    TT.exports = function(TT) {
      return iT(TT, kT, zT)
    }
  },
  4858: (TT, oT, IT) => {
    var iT = IT(4864);
    TT.exports = function(TT, oT) {
      var IT = TT.__data__;
      return iT(oT) ? IT["string" == typeof oT ? "string" : "hash"] : IT.map
    }
  },
  5277: (TT, oT, IT) => {
    var iT = IT(5284),
      zT = IT(5176);
    TT.exports = function(TT) {
      for (var oT = zT(TT), IT = oT.length; IT--;) {
        var kT = oT[IT],
          WT = TT[kT];
        oT[IT] = [kT, WT, iT(WT)]
      }
      return oT
    }
  },
  4718: (TT, oT, IT) => {
    var iT = IT(4721),
      zT = IT(4753);
    TT.exports = function(TT, oT) {
      var IT = zT(TT, oT);
      return iT(IT) ? IT : void 0
    }
  },
  5799: (TT, oT, IT) => {
    var iT = IT(5244)(Object.getPrototypeOf, Object);
    TT.exports = iT
  },
  4591: (TT, oT, IT) => {
    var iT = IT(4588),
      zT = Object.prototype,
      kT = zT.hasOwnProperty,
      WT = zT.toString,
      XT = iT ? iT.toStringTag : void 0;
    TT.exports = function(TT) {
      var oT = kT.call(TT, XT),
        IT = TT[XT];
      try {
        TT[XT] = void 0;
        var iT = !0
      } catch (BT) {}
      var zT = WT.call(TT);
      return iT && (oT ? TT[XT] = IT : delete TT[XT]), zT
    }
  },
  5164: (TT, oT, IT) => {
    var iT = IT(5169),
      zT = IT(5174),
      kT = Object.prototype.propertyIsEnumerable,
      WT = Object.getOwnPropertySymbols,
      XT = WT ? function(TT) {
        return null == TT ? [] : (TT = Object(TT), iT(WT(TT), (function(oT) {
          return kT.call(TT, oT)
        })))
      } : zT;
    TT.exports = XT
  },
  5250: (TT, oT, IT) => {
    var iT = IT(5254),
      zT = IT(4847),
      kT = IT(5262),
      WT = IT(5265),
      XT = IT(5273),
      BT = IT(4581),
      FT = IT(4747),
      ST = "[object Map]",
      DT = "[object Promise]",
      LT = "[object Set]",
      xT = "[object WeakMap]",
      cT = "[object DataView]",
      KT = FT(iT),
      MT = FT(zT),
      rT = FT(kT),
      AT = FT(WT),
      gT = FT(XT),
      hT = BT;
    (iT && hT(new iT(new ArrayBuffer(1))) != cT || zT && hT(new zT) != ST || kT && hT(kT.resolve()) != DT || WT && hT(new WT) != LT || XT && hT(new XT) != xT) && (hT = function(TT) {
      var oT = BT(TT),
        IT = "[object Object]" == oT ? TT.constructor : void 0,
        iT = IT ? FT(IT) : "";
      if (iT) switch (iT) {
        case KT:
          return cT;
        case MT:
          return ST;
        case rT:
          return DT;
        case AT:
          return LT;
        case gT:
          return xT
      }
      return oT
    }), TT.exports = hT
  },
  4753: TT => {
    TT.exports = function(TT, oT) {
      return null == TT ? void 0 : TT[oT]
    }
  },
  5311: (TT, oT, IT) => {
    var iT = IT(4656),
      zT = IT(5011),
      kT = IT(4617),
      WT = IT(4985),
      XT = IT(4982),
      BT = IT(4905);
    TT.exports = function(TT, oT, IT) {
      for (var FT = -1, ST = (oT = iT(oT, TT)).length, DT = !1; ++FT < ST;) {
        var LT = BT(oT[FT]);
        if (!(DT = null != TT && IT(TT, LT))) break;
        TT = TT[LT]
      }
      return DT || ++FT != ST ? DT : !!(ST = null == TT ? 0 : TT.length) && XT(ST) && WT(LT, ST) && (kT(TT) || zT(TT))
    }
  },
  5559: TT => {
    var oT = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    TT.exports = function(TT) {
      return oT.test(TT)
    }
  },
  4702: (TT, oT, IT) => {
    var iT = IT(4711);
    TT.exports = function() {
      this.__data__ = iT ? iT(null) : {}, this.size = 0
    }
  },
  4762: TT => {
    TT.exports = function(TT) {
      var oT = this.has(TT) && delete this.__data__[TT];
      return this.size -= oT ? 1 : 0, oT
    }
  },
  4767: (TT, oT, IT) => {
    var iT = IT(4711),
      zT = Object.prototype.hasOwnProperty;
    TT.exports = function(TT) {
      var oT = this.__data__;
      if (iT) {
        var IT = oT[TT];
        return "__lodash_hash_undefined__" === IT ? void 0 : IT
      }
      return zT.call(oT, TT) ? oT[TT] : void 0
    }
  },
  4770: (TT, oT, IT) => {
    var iT = IT(4711),
      zT = Object.prototype.hasOwnProperty;
    TT.exports = function(TT) {
      var oT = this.__data__;
      return iT ? void 0 !== oT[TT] : zT.call(oT, TT)
    }
  },
  4779: (TT, oT, IT) => {
    var iT = IT(4711);
    TT.exports = function(TT, oT) {
      var IT = this.__data__;
      return this.size += this.has(TT) ? 0 : 1, IT[TT] = iT && void 0 === oT ? "__lodash_hash_undefined__" : oT, this
    }
  },
  5008: (TT, oT, IT) => {
    var iT = IT(4588),
      zT = IT(5011),
      kT = IT(4617),
      WT = iT ? iT.isConcatSpreadable : void 0;
    TT.exports = function(TT) {
      return kT(TT) || zT(TT) || !!(WT && TT && TT[WT])
    }
  },
  4985: TT => {
    var oT = /^(?:0|[1-9]\d*)$/;
    TT.exports = function(TT, IT) {
      var iT = typeof TT;
      return !!(IT = null == IT ? 9007199254740991 : IT) && ("number" == iT || "symbol" != iT && oT.test(TT)) && TT > -1 && TT % 1 == 0 && TT < IT
    }
  },
  4975: (TT, oT, IT) => {
    var iT = IT(4819),
      zT = IT(4979),
      kT = IT(4985),
      WT = IT(4548);
    TT.exports = function(TT, oT, IT) {
      if (!WT(IT)) return !1;
      var XT = typeof oT;
      return !!("number" == XT ? zT(IT) && kT(oT, IT.length) : "string" == XT && oT in IT) && iT(IT[oT], TT)
    }
  },
  4662: (TT, oT, IT) => {
    var iT = IT(4617),
      zT = IT(4573),
      kT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      WT = /^\w*$/;
    TT.exports = function(TT, oT) {
      if (iT(TT)) return !1;
      var IT = typeof TT;
      return !("number" != IT && "symbol" != IT && "boolean" != IT && null != TT && !zT(TT)) || (WT.test(TT) || !kT.test(TT) || null != oT && TT in Object(oT))
    }
  },
  4864: TT => {
    TT.exports = function(TT) {
      var oT = typeof TT;
      return "string" == oT || "number" == oT || "symbol" == oT || "boolean" == oT ? "__proto__" !== TT : null === TT
    }
  },
  4731: (TT, oT, IT) => {
    var iT = IT(4740),
      zT = function() {
        var TT = /[^.]+$/.exec(iT && iT.keys && iT.keys.IE_PROTO || "");
        return TT ? "Symbol(src)_1." + TT : ""
      }();
    TT.exports = function(TT) {
      return !!zT && zT in TT
    }
  },
  5234: TT => {
    var oT = Object.prototype;
    TT.exports = function(TT) {
      var IT = TT && TT.constructor;
      return TT === ("function" == typeof IT && IT.prototype || oT)
    }
  },
  5284: (TT, oT, IT) => {
    var iT = IT(4548);
    TT.exports = function(TT) {
      return TT === TT && !iT(TT)
    }
  },
  4797: TT => {
    TT.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  4804: (TT, oT, IT) => {
    var iT = IT(4813),
      zT = Array.prototype.splice;
    TT.exports = function(TT) {
      var oT = this.__data__,
        IT = iT(oT, TT);
      return !(IT < 0) && (IT == oT.length - 1 ? oT.pop() : zT.call(oT, IT, 1), --this.size, !0)
    }
  },
  4828: (TT, oT, IT) => {
    var iT = IT(4813);
    TT.exports = function(TT) {
      var oT = this.__data__,
        IT = iT(oT, TT);
      return IT < 0 ? void 0 : oT[IT][1]
    }
  },
  4836: (TT, oT, IT) => {
    var iT = IT(4813);
    TT.exports = function(TT) {
      return iT(this.__data__, TT) > -1
    }
  },
  4840: (TT, oT, IT) => {
    var iT = IT(4813);
    TT.exports = function(TT, oT) {
      var IT = this.__data__,
        zT = iT(IT, TT);
      return zT < 0 ? (++this.size, IT.push([TT, oT])) : IT[zT][1] = oT, this
    }
  },
  4691: (TT, oT, IT) => {
    var iT = IT(4698),
      zT = IT(4788),
      kT = IT(4847);
    TT.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new iT,
        map: new(kT || zT),
        string: new iT
      }
    }
  },
  4853: (TT, oT, IT) => {
    var iT = IT(4858);
    TT.exports = function(TT) {
      var oT = iT(this, TT).delete(TT);
      return this.size -= oT ? 1 : 0, oT
    }
  },
  4871: (TT, oT, IT) => {
    var iT = IT(4858);
    TT.exports = function(TT) {
      return iT(this, TT).get(TT)
    }
  },
  4875: (TT, oT, IT) => {
    var iT = IT(4858);
    TT.exports = function(TT) {
      return iT(this, TT).has(TT)
    }
  },
  4881: (TT, oT, IT) => {
    var iT = IT(4858);
    TT.exports = function(TT, oT) {
      var IT = iT(this, TT),
        zT = IT.size;
      return IT.set(TT, oT), this.size += IT.size == zT ? 0 : 1, this
    }
  },
  5141: TT => {
    TT.exports = function(TT) {
      var oT = -1,
        IT = Array(TT.size);
      return TT.forEach((function(TT, iT) {
        IT[++oT] = [iT, TT]
      })), IT
    }
  },
  5292: TT => {
    TT.exports = function(TT, oT) {
      return function(IT) {
        return null != IT && (IT[TT] === oT && (void 0 !== oT || TT in Object(IT)))
      }
    }
  },
  4672: (TT, oT, IT) => {
    var iT = IT(4677);
    TT.exports = function(TT) {
      var oT = iT(TT, (function(TT) {
          return 500 === IT.size && IT.clear(), TT
        })),
        IT = oT.cache;
      return oT
    }
  },
  4711: (TT, oT, IT) => {
    var iT = IT(4718)(Object, "create");
    TT.exports = iT
  },
  5237: (TT, oT, IT) => {
    var iT = IT(5244)(Object.keys, Object);
    TT.exports = iT
  },
  5219: (TT, oT, IT) => {
    TT = IT.nmd(TT);
    var iT = IT(4557),
      zT = oT && !oT.nodeType && oT,
      kT = zT && TT && !TT.nodeType && TT,
      WT = kT && kT.exports === zT && iT.process,
      XT = function() {
        try {
          var TT = kT && kT.require && kT.require("util").types;
          return TT || WT && WT.binding && WT.binding("util")
        } catch (oT) {}
      }();
    TT.exports = XT
  },
  4596: TT => {
    var oT = Object.prototype.toString;
    TT.exports = function(TT) {
      return oT.call(TT)
    }
  },
  5244: TT => {
    TT.exports = function(TT, oT) {
      return function(IT) {
        return TT(oT(IT))
      }
    }
  },
  5394: (TT, oT, IT) => {
    var iT = IT(5397),
      zT = Math.max;
    TT.exports = function(TT, oT, IT) {
      return oT = zT(void 0 === oT ? TT.length - 1 : oT, 0),
        function() {
          for (var kT = arguments, WT = -1, XT = zT(kT.length - oT, 0), BT = Array(XT); ++WT < XT;) BT[WT] = kT[oT + WT];
          WT = -1;
          for (var FT = Array(oT + 1); ++WT < oT;) FT[WT] = kT[WT];
          return FT[oT] = IT(BT), iT(TT, this, FT)
        }
    }
  },
  4552: (TT, oT, IT) => {
    var iT = IT(4557),
      zT = "object" == typeof self && self && self.Object === Object && self,
      kT = iT || zT || Function("return this")();
    TT.exports = kT
  },
  5111: TT => {
    TT.exports = function(TT) {
      return this.__data__.set(TT, "__lodash_hash_undefined__"), this
    }
  },
  5115: TT => {
    TT.exports = function(TT) {
      return this.__data__.has(TT)
    }
  },
  5149: TT => {
    TT.exports = function(TT) {
      var oT = -1,
        IT = Array(TT.size);
      return TT.forEach((function(TT) {
        IT[++oT] = TT
      })), IT
    }
  },
  5404: (TT, oT, IT) => {
    var iT = IT(5413),
      zT = IT(5437)(iT);
    TT.exports = zT
  },
  5437: TT => {
    var oT = Date.now;
    TT.exports = function(TT) {
      var IT = 0,
        iT = 0;
      return function() {
        var zT = oT(),
          kT = 16 - (zT - iT);
        if (iT = zT, kT > 0) {
          if (++IT >= 800) return arguments[0]
        } else IT = 0;
        return TT.apply(void 0, arguments)
      }
    }
  },
  5051: (TT, oT, IT) => {
    var iT = IT(4788);
    TT.exports = function() {
      this.__data__ = new iT, this.size = 0
    }
  },
  5053: TT => {
    TT.exports = function(TT) {
      var oT = this.__data__,
        IT = oT.delete(TT);
      return this.size = oT.size, IT
    }
  },
  5060: TT => {
    TT.exports = function(TT) {
      return this.__data__.get(TT)
    }
  },
  5067: TT => {
    TT.exports = function(TT) {
      return this.__data__.has(TT)
    }
  },
  5075: (TT, oT, IT) => {
    var iT = IT(4788),
      zT = IT(4847),
      kT = IT(4686);
    TT.exports = function(TT, oT) {
      var IT = this.__data__;
      if (IT instanceof iT) {
        var WT = IT.__data__;
        if (!zT || WT.length < 199) return WT.push([TT, oT]), this.size = ++IT.size, this;
        IT = this.__data__ = new kT(WT)
      }
      return IT.set(TT, oT), this.size = IT.size, this
    }
  },
  5506: TT => {
    TT.exports = function(TT, oT, IT) {
      for (var iT = IT - 1, zT = TT.length; ++iT < zT;)
        if (TT[iT] === oT) return iT;
      return -1
    }
  },
  5564: (TT, oT, IT) => {
    var iT = IT(5570),
      zT = IT(5559),
      kT = IT(5576);
    TT.exports = function(TT) {
      return zT(TT) ? kT(TT) : iT(TT)
    }
  },
  4665: (TT, oT, IT) => {
    var iT = IT(4672),
      zT = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      kT = /\\(\\)?/g,
      WT = iT((function(TT) {
        var oT = [];
        return 46 === TT.charCodeAt(0) && oT.push(""), TT.replace(zT, (function(TT, IT, iT, zT) {
          oT.push(iT ? zT.replace(kT, "$1") : IT || TT)
        })), oT
      }));
    TT.exports = WT
  },
  4905: (TT, oT, IT) => {
    var iT = IT(4573);
    TT.exports = function(TT) {
      if ("string" == typeof TT || iT(TT)) return TT;
      var oT = TT + "";
      return "0" == oT && 1 / TT == -1 / 0 ? "-0" : oT
    }
  },
  4747: TT => {
    var oT = Function.prototype.toString;
    TT.exports = function(TT) {
      if (null != TT) {
        try {
          return oT.call(TT)
        } catch (IT) {}
        try {
          return TT + ""
        } catch (IT) {}
      }
      return ""
    }
  },
  4568: TT => {
    var oT = /\s/;
    TT.exports = function(TT) {
      for (var IT = TT.length; IT-- && oT.test(TT.charAt(IT)););
      return IT
    }
  },
  5576: TT => {
    var oT = "\\ud800-\\udfff",
      IT = "[" + oT + "]",
      iT = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      zT = "\\ud83c[\\udffb-\\udfff]",
      kT = "[^" + oT + "]",
      WT = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      XT = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      BT = "(?:" + iT + "|" + zT + ")" + "?",
      FT = "[\\ufe0e\\ufe0f]?",
      ST = FT + BT + ("(?:\\u200d(?:" + [kT, WT, XT].join("|") + ")" + FT + BT + ")*"),
      DT = "(?:" + [kT + iT + "?", iT, WT, XT, IT].join("|") + ")",
      LT = RegExp(zT + "(?=" + zT + ")|" + DT + ST, "g");
    TT.exports = function(TT) {
      return TT.match(LT) || []
    }
  },
  5420: TT => {
    TT.exports = function(TT) {
      return function() {
        return TT
      }
    }
  },
  4546: (TT, oT, IT) => {
    var iT = IT(4548),
      zT = IT(4550),
      kT = IT(4561),
      WT = Math.max,
      XT = Math.min;
    TT.exports = function(TT, oT, IT) {
      var BT, FT, ST, DT, LT, xT, cT = 0,
        KT = !1,
        MT = !1,
        rT = !0;
      if ("function" != typeof TT) throw new TypeError("Expected a function");

      function AT(oT) {
        var IT = BT,
          iT = FT;
        return BT = FT = void 0, cT = oT, DT = TT.apply(iT, IT)
      }

      function gT(TT) {
        var IT = TT - xT;
        return void 0 === xT || IT >= oT || IT < 0 || MT && TT - cT >= ST
      }

      function hT() {
        var TT = zT();
        if (gT(TT)) return wT(TT);
        LT = setTimeout(hT, function(TT) {
          var IT = oT - (TT - xT);
          return MT ? XT(IT, ST - (TT - cT)) : IT
        }(TT))
      }

      function wT(TT) {
        return LT = void 0, rT && BT ? AT(TT) : (BT = FT = void 0, DT)
      }

      function mT() {
        var TT = zT(),
          IT = gT(TT);
        if (BT = arguments, FT = this, xT = TT, IT) {
          if (void 0 === LT) return function(TT) {
            return cT = TT, LT = setTimeout(hT, oT), KT ? AT(TT) : DT
          }(xT);
          if (MT) return clearTimeout(LT), LT = setTimeout(hT, oT), AT(xT)
        }
        return void 0 === LT && (LT = setTimeout(hT, oT)), DT
      }
      return oT = kT(oT) || 0, iT(IT) && (KT = !!IT.leading, ST = (MT = "maxWait" in IT) ? WT(kT(IT.maxWait) || 0, oT) : ST, rT = "trailing" in IT ? !!IT.trailing : rT), mT.cancel = function() {
        void 0 !== LT && clearTimeout(LT), cT = 0, BT = xT = FT = LT = void 0
      }, mT.flush = function() {
        return void 0 === LT ? DT : wT(zT())
      }, mT
    }
  },
  4819: TT => {
    TT.exports = function(TT, oT) {
      return TT === oT || TT !== TT && oT !== oT
    }
  },
  5744: (TT, oT, IT) => {
    var iT = IT(5746),
      zT = IT(5754),
      kT = IT(5026),
      WT = IT(4617),
      XT = IT(4975);
    TT.exports = function(TT, oT, IT) {
      var BT = WT(TT) ? iT : zT;
      return IT && XT(TT, oT, IT) && (oT = void 0), BT(TT, kT(oT, 3))
    }
  },
  5832: (TT, oT, IT) => {
    var iT = IT(5835)(IT(5839));
    TT.exports = iT
  },
  5839: (TT, oT, IT) => {
    var iT = IT(5498),
      zT = IT(5026),
      kT = IT(5847),
      WT = Math.max;
    TT.exports = function(TT, oT, IT) {
      var XT = null == TT ? 0 : TT.length;
      if (!XT) return -1;
      var BT = null == IT ? 0 : kT(IT);
      return BT < 0 && (BT = WT(XT + BT, 0)), iT(TT, zT(oT, 3), BT)
    }
  },
  5668: (TT, oT, IT) => {
    var iT = IT(5004),
      zT = IT(5675);
    TT.exports = function(TT, oT) {
      return iT(zT(TT, oT), 1)
    }
  },
  4640: (TT, oT, IT) => {
    var iT = IT(4648);
    TT.exports = function(TT, oT, IT) {
      var zT = null == TT ? void 0 : iT(TT, oT);
      return void 0 === zT ? IT : zT
    }
  },
  5300: (TT, oT, IT) => {
    var iT = IT(5306),
      zT = IT(5311);
    TT.exports = function(TT, oT) {
      return null != TT && zT(TT, oT, iT)
    }
  },
  5319: TT => {
    TT.exports = function(TT) {
      return TT
    }
  },
  5011: (TT, oT, IT) => {
    var iT = IT(5016),
      zT = IT(4603),
      kT = Object.prototype,
      WT = kT.hasOwnProperty,
      XT = kT.propertyIsEnumerable,
      BT = iT(function() {
        return arguments
      }()) ? iT : function(TT) {
        return zT(TT) && WT.call(TT, "callee") && !XT.call(TT, "callee")
      };
    TT.exports = BT
  },
  4617: TT => {
    var oT = Array.isArray;
    TT.exports = oT
  },
  4979: (TT, oT, IT) => {
    var iT = IT(4728),
      zT = IT(4982);
    TT.exports = function(TT) {
      return null != TT && zT(TT.length) && !iT(TT)
    }
  },
  5802: (TT, oT, IT) => {
    var iT = IT(4581),
      zT = IT(4603);
    TT.exports = function(TT) {
      return !0 === TT || !1 === TT || zT(TT) && "[object Boolean]" == iT(TT)
    }
  },
  5196: (TT, oT, IT) => {
    TT = IT.nmd(TT);
    var iT = IT(4552),
      zT = IT(5204),
      kT = oT && !oT.nodeType && oT,
      WT = kT && TT && !TT.nodeType && TT,
      XT = WT && WT.exports === kT ? iT.vc : void 0,
      BT = (XT ? XT.isBuffer : void 0) || zT;
    TT.exports = BT
  },
  5678: (TT, oT, IT) => {
    var iT = IT(5084);
    TT.exports = function(TT, oT) {
      return iT(TT, oT)
    }
  },
  4728: (TT, oT, IT) => {
    var iT = IT(4581),
      zT = IT(4548);
    TT.exports = function(TT) {
      if (!zT(TT)) return !1;
      var oT = iT(TT);
      return "[object Function]" == oT || "[object GeneratorFunction]" == oT || "[object AsyncFunction]" == oT || "[object Proxy]" == oT
    }
  },
  4982: TT => {
    TT.exports = function(TT) {
      return "number" == typeof TT && TT > -1 && TT % 1 == 0 && TT <= 9007199254740991
    }
  },
  4625: (TT, oT, IT) => {
    var iT = IT(4634);
    TT.exports = function(TT) {
      return iT(TT) && TT != +TT
    }
  },
  4908: TT => {
    TT.exports = function(TT) {
      return null == TT
    }
  },
  4634: (TT, oT, IT) => {
    var iT = IT(4581),
      zT = IT(4603);
    TT.exports = function(TT) {
      return "number" == typeof TT || zT(TT) && "[object Number]" == iT(TT)
    }
  },
  4548: TT => {
    TT.exports = function(TT) {
      var oT = typeof TT;
      return null != TT && ("object" == oT || "function" == oT)
    }
  },
  4603: TT => {
    TT.exports = function(TT) {
      return null != TT && "object" == typeof TT
    }
  },
  5791: (TT, oT, IT) => {
    var iT = IT(4581),
      zT = IT(5799),
      kT = IT(4603),
      WT = Function.prototype,
      XT = Object.prototype,
      BT = WT.toString,
      FT = XT.hasOwnProperty,
      ST = BT.call(Object);
    TT.exports = function(TT) {
      if (!kT(TT) || "[object Object]" != iT(TT)) return !1;
      var oT = zT(TT);
      if (null === oT) return !0;
      var IT = FT.call(oT, "constructor") && oT.constructor;
      return "function" == typeof IT && IT instanceof IT && BT.call(IT) == ST
    }
  },
  4611: (TT, oT, IT) => {
    var iT = IT(4581),
      zT = IT(4617),
      kT = IT(4603);
    TT.exports = function(TT) {
      return "string" == typeof TT || !zT(TT) && kT(TT) && "[object String]" == iT(TT)
    }
  },
  4573: (TT, oT, IT) => {
    var iT = IT(4581),
      zT = IT(4603);
    TT.exports = function(TT) {
      return "symbol" == typeof TT || zT(TT) && "[object Symbol]" == iT(TT)
    }
  },
  5207: (TT, oT, IT) => {
    var iT = IT(5213),
      zT = IT(5216),
      kT = IT(5219),
      WT = kT && kT.isTypedArray,
      XT = WT ? zT(WT) : iT;
    TT.exports = XT
  },
  5176: (TT, oT, IT) => {
    var iT = IT(5184),
      zT = IT(5226),
      kT = IT(4979);
    TT.exports = function(TT) {
      return kT(TT) ? iT(TT) : zT(TT)
    }
  },
  5776: TT => {
    TT.exports = function(TT) {
      var oT = null == TT ? 0 : TT.length;
      return oT ? TT[oT - 1] : void 0
    }
  },
  5675: (TT, oT, IT) => {
    var iT = IT(4900),
      zT = IT(5026),
      kT = IT(5340),
      WT = IT(4617);
    TT.exports = function(TT, oT) {
      return (WT(TT) ? iT : kT)(TT, zT(oT, 3))
    }
  },
  5729: (TT, oT, IT) => {
    var iT = IT(5738),
      zT = IT(5346),
      kT = IT(5026);
    TT.exports = function(TT, oT) {
      var IT = {};
      return oT = kT(oT, 3), zT(TT, (function(TT, zT, kT) {
        iT(IT, zT, oT(TT, zT, kT))
      })), IT
    }
  },
  5638: (TT, oT, IT) => {
    var iT = IT(5644),
      zT = IT(5652),
      kT = IT(5319);
    TT.exports = function(TT) {
      return TT && TT.length ? iT(TT, kT, zT) : void 0
    }
  },
  4677: (TT, oT, IT) => {
    var iT = IT(4686);

    function zT(TT, oT) {
      if ("function" != typeof TT || null != oT && "function" != typeof oT) throw new TypeError("Expected a function");
      var IT = function() {
        var iT = arguments,
          zT = oT ? oT.apply(this, iT) : iT[0],
          kT = IT.cache;
        if (kT.has(zT)) return kT.get(zT);
        var WT = TT.apply(this, iT);
        return IT.cache = kT.set(zT, WT) || kT, WT
      };
      return IT.cache = new(zT.Cache || iT), IT
    }
    zT.Cache = iT, TT.exports = zT
  },
  5654: (TT, oT, IT) => {
    var iT = IT(5644),
      zT = IT(5659),
      kT = IT(5319);
    TT.exports = function(TT) {
      return TT && TT.length ? iT(TT, kT, zT) : void 0
    }
  },
  5521: TT => {
    TT.exports = function() {}
  },
  4550: (TT, oT, IT) => {
    var iT = IT(4552);
    TT.exports = function() {
      return iT.Date.now()
    }
  },
  5322: (TT, oT, IT) => {
    var iT = IT(5326),
      zT = IT(5335),
      kT = IT(4662),
      WT = IT(4905);
    TT.exports = function(TT) {
      return kT(TT) ? iT(WT(TT)) : zT(TT)
    }
  },
  4961: (TT, oT, IT) => {
    var iT = IT(4963)();
    TT.exports = iT
  },
  5817: (TT, oT, IT) => {
    var iT = IT(5121),
      zT = IT(5026),
      kT = IT(5822),
      WT = IT(4617),
      XT = IT(4975);
    TT.exports = function(TT, oT, IT) {
      var BT = WT(TT) ? iT : kT;
      return IT && XT(TT, oT, IT) && (oT = void 0), BT(TT, zT(oT, 3))
    }
  },
  4998: (TT, oT, IT) => {
    var iT = IT(5004),
      zT = IT(5022),
      kT = IT(5387),
      WT = IT(4975),
      XT = kT((function(TT, oT) {
        if (null == TT) return [];
        var IT = oT.length;
        return IT > 1 && WT(TT, oT[0], oT[1]) ? oT = [] : IT > 2 && WT(oT[0], oT[1], oT[2]) && (oT = [oT[0]]), zT(TT, iT(oT, 1), [])
      }));
    TT.exports = XT
  },
  5174: TT => {
    TT.exports = function() {
      return []
    }
  },
  5204: TT => {
    TT.exports = function() {
      return !1
    }
  },
  4544: (TT, oT, IT) => {
    var iT = IT(4546),
      zT = IT(4548);
    TT.exports = function(TT, oT, IT) {
      var kT = !0,
        WT = !0;
      if ("function" != typeof TT) throw new TypeError("Expected a function");
      return zT(IT) && (kT = "leading" in IT ? !!IT.leading : kT, WT = "trailing" in IT ? !!IT.trailing : WT), iT(TT, oT, {
        leading: kT,
        maxWait: oT,
        trailing: WT
      })
    }
  },
  4994: (TT, oT, IT) => {
    var iT = IT(4561),
      zT = 1 / 0;
    TT.exports = function(TT) {
      return TT ? (TT = iT(TT)) === zT || TT === -1 / 0 ? 17976931348623157e292 * (TT < 0 ? -1 : 1) : TT === TT ? TT : 0 : 0 === TT ? TT : 0
    }
  },
  5847: (TT, oT, IT) => {
    var iT = IT(4994);
    TT.exports = function(TT) {
      var oT = iT(TT),
        IT = oT % 1;
      return oT === oT ? IT ? oT - IT : oT : 0
    }
  },
  4561: (TT, oT, IT) => {
    var iT = IT(4566),
      zT = IT(4548),
      kT = IT(4573),
      WT = /^[-+]0x[0-9a-f]+$/i,
      XT = /^0b[01]+$/i,
      BT = /^0o[0-7]+$/i,
      FT = parseInt;
    TT.exports = function(TT) {
      if ("number" == typeof TT) return TT;
      if (kT(TT)) return NaN;
      if (zT(TT)) {
        var oT = "function" == typeof TT.valueOf ? TT.valueOf() : TT;
        TT = zT(oT) ? oT + "" : oT
      }
      if ("string" != typeof TT) return 0 === TT ? TT : +TT;
      TT = iT(TT);
      var IT = XT.test(TT);
      return IT || BT.test(TT) ? FT(TT.slice(2), IT ? 2 : 8) : WT.test(TT) ? NaN : +TT
    }
  },
  4890: (TT, oT, IT) => {
    var iT = IT(4894);
    TT.exports = function(TT) {
      return null == TT ? "" : iT(TT)
    }
  },
  5475: (TT, oT, IT) => {
    var iT = IT(5026),
      zT = IT(5483);
    TT.exports = function(TT, oT) {
      return TT && TT.length ? zT(TT, iT(oT, 2)) : []
    }
  },
  5537: (TT, oT, IT) => {
    var iT = IT(5540)("toUpperCase");
    TT.exports = iT
  },
  5604: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => Qo
    });
    var iT = IT(46),
      zT = IT(4442),
      kT = IT.n(zT);
    const {
      getOwnPropertyNames: WT,
      getOwnPropertySymbols: XT
    } = Object, {
      hasOwnProperty: BT
    } = Object.prototype;

    function FT(TT, oT) {
      return function(IT, iT, zT) {
        return TT(IT, iT, zT) && oT(IT, iT, zT)
      }
    }

    function ST(TT) {
      return function(oT, IT, iT) {
        if (!oT || !IT || "object" !== typeof oT || "object" !== typeof IT) return TT(oT, IT, iT);
        const {
          cache: zT
        } = iT, kT = zT.get(oT), WT = zT.get(IT);
        if (kT && WT) return kT === IT && WT === oT;
        zT.set(oT, IT), zT.set(IT, oT);
        const XT = TT(oT, IT, iT);
        return zT.delete(oT), zT.delete(IT), XT
      }
    }

    function DT(TT) {
      return WT(TT).concat(XT(TT))
    }
    const LT = Object.hasOwn || ((TT, oT) => BT.call(TT, oT));

    function xT(TT, oT) {
      return TT === oT || !TT && !oT && TT !== TT && oT !== oT
    }
    const {
      getOwnPropertyDescriptor: cT,
      keys: KT
    } = Object;

    function MT(TT, oT) {
      return TT.byteLength === oT.byteLength && CT(new Uint8Array(TT), new Uint8Array(oT))
    }

    function rT(TT, oT, IT) {
      let iT = TT.length;
      if (oT.length !== iT) return !1;
      for (; iT-- > 0;)
        if (!IT.equals(TT[iT], oT[iT], iT, iT, TT, oT, IT)) return !1;
      return !0
    }

    function AT(TT, oT) {
      return TT.byteLength === oT.byteLength && CT(new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength), new Uint8Array(oT.buffer, oT.byteOffset, oT.byteLength))
    }

    function gT(TT, oT) {
      return xT(TT.getTime(), oT.getTime())
    }

    function hT(TT, oT) {
      return TT.name === oT.name && TT.message === oT.message && TT.cause === oT.cause && TT.stack === oT.stack
    }

    function wT(TT, oT) {
      return TT === oT
    }

    function mT(TT, oT, IT) {
      const iT = TT.size;
      if (iT !== oT.size) return !1;
      if (!iT) return !0;
      const zT = new Array(iT),
        kT = TT.entries();
      let WT, XT, BT = 0;
      for (;
        (WT = kT.next()) && !WT.done;) {
        const iT = oT.entries();
        let kT = !1,
          FT = 0;
        for (;
          (XT = iT.next()) && !XT.done;) {
          if (zT[FT]) {
            FT++;
            continue
          }
          const iT = WT.value,
            ST = XT.value;
          if (IT.equals(iT[0], ST[0], BT, FT, TT, oT, IT) && IT.equals(iT[1], ST[1], iT[0], ST[0], TT, oT, IT)) {
            kT = zT[FT] = !0;
            break
          }
          FT++
        }
        if (!kT) return !1;
        BT++
      }
      return !0
    }
    const eT = xT;

    function RT(TT, oT, IT) {
      const iT = KT(TT);
      let zT = iT.length;
      if (KT(oT).length !== zT) return !1;
      for (; zT-- > 0;)
        if (!JT(TT, oT, IT, iT[zT])) return !1;
      return !0
    }

    function uT(TT, oT, IT) {
      const iT = DT(TT);
      let zT, kT, WT, XT = iT.length;
      if (DT(oT).length !== XT) return !1;
      for (; XT-- > 0;) {
        if (zT = iT[XT], !JT(TT, oT, IT, zT)) return !1;
        if (kT = cT(TT, zT), WT = cT(oT, zT), (kT || WT) && (!kT || !WT || kT.configurable !== WT.configurable || kT.enumerable !== WT.enumerable || kT.writable !== WT.writable)) return !1
      }
      return !0
    }

    function vT(TT, oT) {
      return xT(TT.valueOf(), oT.valueOf())
    }

    function ET(TT, oT) {
      return TT.source === oT.source && TT.flags === oT.flags
    }

    function fT(TT, oT, IT) {
      const iT = TT.size;
      if (iT !== oT.size) return !1;
      if (!iT) return !0;
      const zT = new Array(iT),
        kT = TT.values();
      let WT, XT;
      for (;
        (WT = kT.next()) && !WT.done;) {
        const iT = oT.values();
        let kT = !1,
          BT = 0;
        for (;
          (XT = iT.next()) && !XT.done;) {
          if (!zT[BT] && IT.equals(WT.value, XT.value, WT.value, XT.value, TT, oT, IT)) {
            kT = zT[BT] = !0;
            break
          }
          BT++
        }
        if (!kT) return !1
      }
      return !0
    }

    function CT(TT, oT) {
      let IT = TT.byteLength;
      if (oT.byteLength !== IT || TT.byteOffset !== oT.byteOffset) return !1;
      for (; IT-- > 0;)
        if (TT[IT] !== oT[IT]) return !1;
      return !0
    }

    function jT(TT, oT) {
      return TT.hostname === oT.hostname && TT.pathname === oT.pathname && TT.protocol === oT.protocol && TT.port === oT.port && TT.hash === oT.hash && TT.username === oT.username && TT.password === oT.password
    }

    function JT(TT, oT, IT, iT) {
      return !("_owner" !== iT && "__o" !== iT && "__v" !== iT || !TT.$$typeof && !oT.$$typeof) || LT(oT, iT) && IT.equals(TT[iT], oT[iT], iT, iT, TT, oT, IT)
    }
    const UT = {
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
      aT = Object.prototype.toString;

    function YT(TT) {
      let {
        areArrayBuffersEqual: oT,
        areArraysEqual: IT,
        areDataViewsEqual: iT,
        areDatesEqual: zT,
        areErrorsEqual: kT,
        areFunctionsEqual: WT,
        areMapsEqual: XT,
        areNumbersEqual: BT,
        areObjectsEqual: FT,
        arePrimitiveWrappersEqual: ST,
        areRegExpsEqual: DT,
        areSetsEqual: LT,
        areTypedArraysEqual: xT,
        areUrlsEqual: cT,
        unknownTagComparators: KT
      } = TT;
      return function(TT, MT, rT) {
        if (TT === MT) return !0;
        if (null == TT || null == MT) return !1;
        const AT = typeof TT;
        if (AT !== typeof MT) return !1;
        if ("object" !== AT) return "number" === AT ? BT(TT, MT, rT) : "function" === AT && WT(TT, MT, rT);
        const gT = TT.constructor;
        if (gT !== MT.constructor) return !1;
        if (gT === Object) return FT(TT, MT, rT);
        if (Array.isArray(TT)) return IT(TT, MT, rT);
        if (gT === Date) return zT(TT, MT, rT);
        if (gT === RegExp) return DT(TT, MT, rT);
        if (gT === Map) return XT(TT, MT, rT);
        if (gT === Set) return LT(TT, MT, rT);
        const hT = aT.call(TT);
        if ("[object Date]" === hT) return zT(TT, MT, rT);
        if ("[object RegExp]" === hT) return DT(TT, MT, rT);
        if ("[object Map]" === hT) return XT(TT, MT, rT);
        if ("[object Set]" === hT) return LT(TT, MT, rT);
        if ("[object Object]" === hT) return "function" !== typeof TT.then && "function" !== typeof MT.then && FT(TT, MT, rT);
        if ("[object URL]" === hT) return cT(TT, MT, rT);
        if ("[object Error]" === hT) return kT(TT, MT, rT);
        if ("[object Arguments]" === hT) return FT(TT, MT, rT);
        if (UT[hT]) return xT(TT, MT, rT);
        if ("[object ArrayBuffer]" === hT) return oT(TT, MT, rT);
        if ("[object DataView]" === hT) return iT(TT, MT, rT);
        if ("[object Boolean]" === hT || "[object Number]" === hT || "[object String]" === hT) return ST(TT, MT, rT);
        if (KT) {
          let oT = KT[hT];
          if (!oT) {
            const IT = null != (wT = TT) ? wT[Symbol.toStringTag] : void 0;
            IT && (oT = KT[IT])
          }
          if (oT) return oT(TT, MT, rT)
        }
        var wT;
        return !1
      }
    }
    const QT = OT();
    OT({
      strict: !0
    }), OT({
      circular: !0
    }), OT({
      circular: !0,
      strict: !0
    }), OT({
      createInternalComparator: () => xT
    }), OT({
      strict: !0,
      createInternalComparator: () => xT
    }), OT({
      circular: !0,
      createInternalComparator: () => xT
    }), OT({
      circular: !0,
      createInternalComparator: () => xT,
      strict: !0
    });

    function OT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: oT = !1,
        createInternalComparator: IT,
        createState: iT,
        strict: zT = !1
      } = TT, kT = function(TT) {
        let {
          circular: oT,
          createCustomConfig: IT,
          strict: iT
        } = TT, zT = {
          areArrayBuffersEqual: MT,
          areArraysEqual: iT ? uT : rT,
          areDataViewsEqual: AT,
          areDatesEqual: gT,
          areErrorsEqual: hT,
          areFunctionsEqual: wT,
          areMapsEqual: iT ? FT(mT, uT) : mT,
          areNumbersEqual: eT,
          areObjectsEqual: iT ? uT : RT,
          arePrimitiveWrappersEqual: vT,
          areRegExpsEqual: ET,
          areSetsEqual: iT ? FT(fT, uT) : fT,
          areTypedArraysEqual: iT ? FT(CT, uT) : CT,
          areUrlsEqual: jT,
          unknownTagComparators: void 0
        };
        if (IT && (zT = Object.assign({}, zT, IT(zT))), oT) {
          const TT = ST(zT.areArraysEqual),
            oT = ST(zT.areMapsEqual),
            IT = ST(zT.areObjectsEqual),
            iT = ST(zT.areSetsEqual);
          zT = Object.assign({}, zT, {
            areArraysEqual: TT,
            areMapsEqual: oT,
            areObjectsEqual: IT,
            areSetsEqual: iT
          })
        }
        return zT
      }(TT), WT = YT(kT);
      var XT;
      return function(TT) {
        let {
          circular: oT,
          comparator: IT,
          createState: iT,
          equals: zT,
          strict: kT
        } = TT;
        if (iT) return function(TT, WT) {
          const {
            cache: XT = (oT ? new WeakMap : void 0),
            meta: BT
          } = iT();
          return IT(TT, WT, {
            cache: XT,
            equals: zT,
            meta: BT,
            strict: kT
          })
        };
        if (oT) return function(TT, oT) {
          return IT(TT, oT, {
            cache: new WeakMap,
            equals: zT,
            meta: void 0,
            strict: kT
          })
        };
        const WT = {
          cache: void 0,
          equals: zT,
          meta: void 0,
          strict: kT
        };
        return function(TT, oT) {
          return IT(TT, oT, WT)
        }
      }({
        circular: oT,
        comparator: WT,
        createState: iT,
        equals: IT ? IT(WT) : (XT = WT, function(TT, oT, IT, iT, zT, kT, WT) {
          return XT(TT, oT, WT)
        }),
        strict: zT
      })
    }

    function HT(TT) {
      var oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        IT = -1;
      requestAnimationFrame((function iT(zT) {
        IT < 0 && (IT = zT), zT - IT > oT ? (TT(zT), IT = -1) : function(TT) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(TT)
        }(iT)
      }))
    }

    function nT(TT) {
      return nT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, nT(TT)
    }

    function qT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return ZT(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return ZT(TT, oT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ZT(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function lT() {
      var TT = function() {
          return null
        },
        oT = !1,
        IT = function IT(iT) {
          if (!oT) {
            if (Array.isArray(iT)) {
              if (!iT.length) return;
              var zT = qT(iT),
                kT = zT[0],
                WT = zT.slice(1);
              return "number" === typeof kT ? void HT(IT.bind(null, WT), kT) : (IT(kT), void HT(IT.bind(null, WT)))
            }
            "object" === nT(iT) && TT(iT), "function" === typeof iT && iT()
          }
        };
      return {
        stop: function() {
          oT = !0
        },
        start: function(TT) {
          oT = !1, IT(TT)
        },
        subscribe: function(oT) {
          return TT = oT,
            function() {
              TT = function() {
                return null
              }
            }
        }
      }
    }

    function sT(TT) {
      return sT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, sT(TT)
    }

    function tT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function GT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? tT(Object(IT), !0).forEach((function(oT) {
          pT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : tT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function pT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" !== sT(TT) || null === TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" !== sT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" === sT(oT) ? oT : String(oT)
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }
    var bT = function(TT) {
        return TT
      },
      yT = function(TT, oT) {
        return Object.keys(oT).reduce((function(IT, iT) {
          return GT(GT({}, IT), {}, pT({}, iT, TT(iT, oT[iT])))
        }), {})
      },
      NT = function(TT, oT, IT) {
        return TT.map((function(TT) {
          return "".concat((iT = TT, iT.replace(/([A-Z])/g, (function(TT) {
            return "-".concat(TT.toLowerCase())
          }))), " ").concat(oT, "ms ").concat(IT);
          var iT
        })).join(",")
      };

    function PT(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        var IT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != IT) {
          var iT, zT, kT, WT, XT = [],
            BT = !0,
            FT = !1;
          try {
            if (kT = (IT = IT.call(TT)).next, 0 === oT) {
              if (Object(IT) !== IT) return;
              BT = !1
            } else
              for (; !(BT = (iT = kT.call(IT)).done) && (XT.push(iT.value), XT.length !== oT); BT = !0);
          } catch (TT) {
            FT = !0, zT = TT
          } finally {
            try {
              if (!BT && null != IT.return && (WT = IT.return(), Object(WT) !== WT)) return
            } finally {
              if (FT) throw zT
            }
          }
          return XT
        }
      }(TT, oT) || VT(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function dT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return To(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || VT(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function VT(TT, oT) {
      if (TT) {
        if ("string" === typeof TT) return To(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        return "Object" === IT && TT.constructor && (IT = TT.constructor.name), "Map" === IT || "Set" === IT ? Array.from(TT) : "Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT) ? To(TT, oT) : void 0
      }
    }

    function To(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }
    var oo = 1e-4,
      Io = function(TT, oT) {
        return [0, 3 * TT, 3 * oT - 6 * TT, 3 * TT - 3 * oT + 1]
      },
      io = function(TT, oT) {
        return TT.map((function(TT, IT) {
          return TT * Math.pow(oT, IT)
        })).reduce((function(TT, oT) {
          return TT + oT
        }))
      },
      zo = function(TT, oT) {
        return function(IT) {
          var iT = Io(TT, oT);
          return io(iT, IT)
        }
      },
      ko = function() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        var iT = oT[0],
          zT = oT[1],
          kT = oT[2],
          WT = oT[3];
        if (1 === oT.length) switch (oT[0]) {
          case "linear":
            iT = 0, zT = 0, kT = 1, WT = 1;
            break;
          case "ease":
            iT = .25, zT = .1, kT = .25, WT = 1;
            break;
          case "ease-in":
            iT = .42, zT = 0, kT = 1, WT = 1;
            break;
          case "ease-out":
            iT = .42, zT = 0, kT = .58, WT = 1;
            break;
          case "ease-in-out":
            iT = 0, zT = 0, kT = .58, WT = 1;
            break;
          default:
            var XT = oT[0].split("(");
            if ("cubic-bezier" === XT[0] && 4 === XT[1].split(")")[0].split(",").length) {
              var BT = PT(XT[1].split(")")[0].split(",").map((function(TT) {
                return parseFloat(TT)
              })), 4);
              iT = BT[0], zT = BT[1], kT = BT[2], WT = BT[3]
            }
        } [iT, kT, zT, WT].every((function(TT) {
          return "number" === typeof TT && TT >= 0 && TT <= 1
        }));
        var FT, ST, DT = zo(iT, kT),
          LT = zo(zT, WT),
          xT = (FT = iT, ST = kT, function(TT) {
            var oT = Io(FT, ST),
              IT = [].concat(dT(oT.map((function(TT, oT) {
                return TT * oT
              })).slice(1)), [0]);
            return io(IT, TT)
          }),
          cT = function(TT) {
            for (var oT, IT = TT > 1 ? 1 : TT, iT = IT, zT = 0; zT < 8; ++zT) {
              var kT = DT(iT) - IT,
                WT = xT(iT);
              if (Math.abs(kT - IT) < oo || WT < oo) return LT(iT);
              iT = (oT = iT - kT / WT) > 1 ? 1 : oT < 0 ? 0 : oT
            }
            return LT(iT)
          };
        return cT.isStepper = !1, cT
      },
      Wo = function() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        var iT = oT[0];
        if ("string" === typeof iT) switch (iT) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return ko(iT);
          case "spring":
            return function() {
              var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                oT = TT.stiff,
                IT = void 0 === oT ? 100 : oT,
                iT = TT.damping,
                zT = void 0 === iT ? 8 : iT,
                kT = TT.dt,
                WT = void 0 === kT ? 17 : kT,
                XT = function(TT, oT, iT) {
                  var kT = iT + (-(TT - oT) * IT - iT * zT) * WT / 1e3,
                    XT = iT * WT / 1e3 + TT;
                  return Math.abs(XT - oT) < oo && Math.abs(kT) < oo ? [oT, 0] : [XT, kT]
                };
              return XT.isStepper = !0, XT.dt = WT, XT
            }();
          default:
            if ("cubic-bezier" === iT.split("(")[0]) return ko(iT)
        }
        return "function" === typeof iT ? iT : null
      };

    function Xo(TT) {
      return Xo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, Xo(TT)
    }

    function Bo(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return co(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || xo(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Fo(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function So(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? Fo(Object(IT), !0).forEach((function(oT) {
          Do(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : Fo(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function Do(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" !== Xo(TT) || null === TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" !== Xo(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" === Xo(oT) ? oT : String(oT)
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function Lo(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        var IT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != IT) {
          var iT, zT, kT, WT, XT = [],
            BT = !0,
            FT = !1;
          try {
            if (kT = (IT = IT.call(TT)).next, 0 === oT) {
              if (Object(IT) !== IT) return;
              BT = !1
            } else
              for (; !(BT = (iT = kT.call(IT)).done) && (XT.push(iT.value), XT.length !== oT); BT = !0);
          } catch (TT) {
            FT = !0, zT = TT
          } finally {
            try {
              if (!BT && null != IT.return && (WT = IT.return(), Object(WT) !== WT)) return
            } finally {
              if (FT) throw zT
            }
          }
          return XT
        }
      }(TT, oT) || xo(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xo(TT, oT) {
      if (TT) {
        if ("string" === typeof TT) return co(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        return "Object" === IT && TT.constructor && (IT = TT.constructor.name), "Map" === IT || "Set" === IT ? Array.from(TT) : "Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT) ? co(TT, oT) : void 0
      }
    }

    function co(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }
    var Ko = function(TT, oT, IT) {
        return TT + (oT - TT) * IT
      },
      Mo = function(TT) {
        return TT.from !== TT.to
      },
      ro = function TT(oT, IT, iT) {
        var zT = yT((function(TT, IT) {
          if (Mo(IT)) {
            var iT = Lo(oT(IT.from, IT.to, IT.LM), 2),
              zT = iT[0],
              kT = iT[1];
            return So(So({}, IT), {}, {
              from: zT,
              LM: kT
            })
          }
          return IT
        }), IT);
        return iT < 1 ? yT((function(TT, oT) {
          return Mo(oT) ? So(So({}, oT), {}, {
            LM: Ko(oT.LM, zT[TT].LM, iT),
            from: Ko(oT.from, zT[TT].from, iT)
          }) : oT
        }), IT) : TT(oT, zT, iT - 1)
      };
    const Ao = function(TT, oT, IT, iT, zT) {
      var kT, WT, XT, BT, FT = (kT = TT, WT = oT, [Object.keys(kT), Object.keys(WT)].reduce((function(TT, oT) {
          return TT.filter((function(TT) {
            return oT.includes(TT)
          }))
        }))),
        ST = FT.reduce((function(IT, iT) {
          return So(So({}, IT), {}, Do({}, iT, [TT[iT], oT[iT]]))
        }), {}),
        DT = FT.reduce((function(IT, iT) {
          return So(So({}, IT), {}, Do({}, iT, {
            from: TT[iT],
            LM: 0,
            to: oT[iT]
          }))
        }), {}),
        LT = -1,
        xT = function() {
          return null
        };
      return xT = IT.isStepper ? function(iT) {
          XT || (XT = iT);
          var kT = (iT - XT) / IT.dt;
          DT = ro(IT, DT, kT), zT(So(So(So({}, TT), oT), yT((function(TT, oT) {
            return oT.from
          }), DT))), XT = iT, Object.values(DT).filter(Mo).length && (LT = requestAnimationFrame(xT))
        } : function(kT) {
          BT || (BT = kT);
          var WT = (kT - BT) / iT,
            XT = yT((function(TT, oT) {
              return Ko.apply(void 0, Bo(oT).concat([IT(WT)]))
            }), ST);
          if (zT(So(So(So({}, TT), oT), XT)), WT < 1) LT = requestAnimationFrame(xT);
          else {
            var FT = yT((function(TT, oT) {
              return Ko.apply(void 0, Bo(oT).concat([IT(1)]))
            }), ST);
            zT(So(So(So({}, TT), oT), FT))
          }
        },
        function() {
          return requestAnimationFrame(xT),
            function() {
              cancelAnimationFrame(LT)
            }
        }
    };

    function go(TT) {
      return go = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, go(TT)
    }
    var ho = ["children", "hx", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function wo(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT, iT, zT = {},
          kT = Object.keys(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || (zT[IT] = TT[IT]);
        return zT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function mo(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return eo(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return eo(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return eo(TT, oT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function eo(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function Ro(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function uo(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? Ro(Object(IT), !0).forEach((function(oT) {
          vo(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : Ro(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function vo(TT, oT, IT) {
      return (oT = fo(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function Eo(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, fo(iT.key), iT)
      }
    }

    function fo(TT) {
      var oT = function(TT, oT) {
        if ("object" !== go(TT) || null === TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" !== go(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" === go(oT) ? oT : String(oT)
    }

    function Co(TT, oT) {
      return Co = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, Co(TT, oT)
    }

    function jo(TT) {
      var oT = function() {
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
        var IT, iT = ao(TT);
        if (oT) {
          var zT = ao(this).constructor;
          IT = Reflect.construct(iT, arguments, zT)
        } else IT = iT.apply(this, arguments);
        return Jo(this, IT)
      }
    }

    function Jo(TT, oT) {
      if (oT && ("object" === go(oT) || "function" === typeof oT)) return oT;
      if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
      return Uo(TT)
    }

    function Uo(TT) {
      if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return TT
    }

    function ao(TT) {
      return ao = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, ao(TT)
    }
    var Yo = function(TT) {
      ! function(TT, oT) {
        if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(oT && oT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), oT && Co(TT, oT)
      }(WT, TT);
      var oT, IT, zT, kT = jo(WT);

      function WT(TT, oT) {
        var IT;
        ! function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, WT);
        var iT = (IT = kT.call(this, TT, oT)).props,
          zT = iT.isActive,
          XT = iT.attributeName,
          BT = iT.from,
          FT = iT.to,
          ST = iT.steps,
          DT = iT.children,
          LT = iT.duration;
        if (IT.handleStyleChange = IT.handleStyleChange.bind(Uo(IT)), IT.changeStyle = IT.changeStyle.bind(Uo(IT)), !zT || LT <= 0) return IT.state = {
          style: {}
        }, "function" === typeof DT && (IT.state = {
          style: FT
        }), Jo(IT);
        if (ST && ST.length) IT.state = {
          style: ST[0].style
        };
        else if (BT) {
          if ("function" === typeof DT) return IT.state = {
            style: BT
          }, Jo(IT);
          IT.state = {
            style: XT ? vo({}, XT, BT) : BT
          }
        } else IT.state = {
          style: {}
        };
        return IT
      }
      return oT = WT, (IT = [{
        key: "componentDidMount",
        value: function() {
          var TT = this.props,
            oT = TT.isActive,
            IT = TT.canBegin;
          this.mounted = !0, oT && IT && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(TT) {
          var oT = this.props,
            IT = oT.isActive,
            iT = oT.canBegin,
            zT = oT.attributeName,
            kT = oT.shouldReAnimate,
            WT = oT.to,
            XT = oT.from,
            BT = this.state.style;
          if (iT)
            if (IT) {
              if (!(QT(TT.to, WT) && TT.canBegin && TT.isActive)) {
                var FT = !TT.canBegin || !TT.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var ST = FT || kT ? XT : TT.to;
                if (this.state && BT) {
                  var DT = {
                    style: zT ? vo({}, zT, ST) : ST
                  };
                  (zT && BT[zT] !== ST || !zT && BT !== ST) && this.setState(DT)
                }
                this.runAnimation(uo(uo({}, this.props), {}, {
                  from: ST,
                  hx: 0
                }))
              }
            } else {
              var LT = {
                style: zT ? vo({}, zT, WT) : WT
              };
              this.state && BT && (zT && BT[zT] !== WT || !zT && BT !== WT) && this.setState(LT)
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
          var oT = this,
            IT = TT.from,
            iT = TT.to,
            zT = TT.duration,
            kT = TT.easing,
            WT = TT.hx,
            XT = TT.onAnimationEnd,
            BT = TT.onAnimationStart,
            FT = Ao(IT, iT, Wo(kT), zT, this.changeStyle);
          this.manager.start([BT, WT, function() {
            oT.stopJSAnimation = FT()
          }, zT, XT])
        }
      }, {
        key: "runStepAnimation",
        value: function(TT) {
          var oT = this,
            IT = TT.steps,
            iT = TT.hx,
            zT = TT.onAnimationStart,
            kT = IT[0],
            WT = kT.style,
            XT = kT.duration,
            BT = void 0 === XT ? 0 : XT;
          return this.manager.start([zT].concat(mo(IT.reduce((function(TT, iT, zT) {
            if (0 === zT) return TT;
            var kT = iT.duration,
              WT = iT.easing,
              XT = void 0 === WT ? "ease" : WT,
              BT = iT.style,
              FT = iT.properties,
              ST = iT.onAnimationEnd,
              DT = zT > 0 ? IT[zT - 1] : iT,
              LT = FT || Object.keys(BT);
            if ("function" === typeof XT || "spring" === XT) return [].concat(mo(TT), [oT.runJSAnimation.bind(oT, {
              from: DT.style,
              to: BT,
              duration: kT,
              easing: XT
            }), kT]);
            var xT = NT(LT, kT, XT),
              cT = uo(uo(uo({}, DT.style), BT), {}, {
                transition: xT
              });
            return [].concat(mo(TT), [cT, kT, ST]).filter(bT)
          }), [WT, Math.max(BT, iT)])), [TT.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(TT) {
          this.manager || (this.manager = lT());
          var oT = TT.hx,
            IT = TT.duration,
            iT = TT.attributeName,
            zT = TT.to,
            kT = TT.easing,
            WT = TT.onAnimationStart,
            XT = TT.onAnimationEnd,
            BT = TT.steps,
            FT = TT.children,
            ST = this.manager;
          if (this.unSubscribe = ST.subscribe(this.handleStyleChange), "function" !== typeof kT && "function" !== typeof FT && "spring" !== kT)
            if (BT.length > 1) this.runStepAnimation(TT);
            else {
              var DT = iT ? vo({}, iT, zT) : zT,
                LT = NT(Object.keys(DT), IT, kT);
              ST.start([WT, oT, uo(uo({}, DT), {}, {
                transition: LT
              }), IT, XT])
            }
          else this.runJSAnimation(TT)
        }
      }, {
        key: "render",
        value: function() {
          var TT = this.props,
            oT = TT.children,
            IT = (TT.hx, TT.duration),
            zT = (TT.attributeName, TT.easing, TT.isActive),
            kT = (TT.steps, TT.from, TT.to, TT.canBegin, TT.onAnimationEnd, TT.shouldReAnimate, TT.onAnimationReStart, wo(TT, ho)),
            WT = iT.Children.count(oT),
            XT = this.state.style;
          if ("function" === typeof oT) return oT(XT);
          if (!zT || 0 === WT || IT <= 0) return oT;
          var BT = function(TT) {
            var oT = TT.props,
              IT = oT.style,
              zT = void 0 === IT ? {} : IT,
              WT = oT.className;
            return (0, iT.cloneElement)(TT, uo(uo({}, kT), {}, {
              style: uo(uo({}, zT), XT),
              className: WT
            }))
          };
          return 1 === WT ? BT(iT.Children.only(oT)) : iT.createElement("div", null, iT.Children.map(oT, (function(TT) {
            return BT(TT)
          })))
        }
      }]) && Eo(oT.prototype, IT), zT && Eo(oT, zT), Object.defineProperty(oT, "prototype", {
        writable: !1
      }), WT
    }(iT.PureComponent);
    Yo.displayName = "Animate", Yo.defaultProps = {
      hx: 0,
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
    }, Yo.propTypes = {
      from: kT().oneOfType([kT().object, kT().string]),
      to: kT().oneOfType([kT().object, kT().string]),
      attributeName: kT().string,
      duration: kT().number,
      hx: kT().number,
      easing: kT().oneOfType([kT().string, kT().func]),
      steps: kT().arrayOf(kT().shape({
        duration: kT().number.isRequired,
        style: kT().object.isRequired,
        easing: kT().oneOfType([kT().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), kT().func]),
        properties: kT().arrayOf("string"),
        onAnimationEnd: kT().func
      })),
      children: kT().oneOfType([kT().node, kT().func]),
      isActive: kT().bool,
      canBegin: kT().bool,
      onAnimationEnd: kT().func,
      shouldReAnimate: kT().bool,
      onAnimationStart: kT().func,
      onAnimationReStart: kT().func
    };
    const Qo = Yo
  },
  5854: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => qT
    });
    var iT, zT = IT(46),
      kT = IT(4536),
      WT = IT(5604),
      XT = IT(4728),
      BT = IT.n(XT),
      FT = IT(5638),
      ST = IT.n(FT),
      DT = IT(4908),
      LT = IT.n(DT),
      xT = IT(4625),
      cT = IT.n(xT),
      KT = IT(5678),
      MT = IT.n(KT),
      rT = IT(5849),
      AT = IT(5591),
      gT = IT(5452),
      hT = IT(5773),
      wT = IT(5464),
      mT = IT(4606),
      eT = IT(5619),
      RT = IT(4918),
      uT = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      vT = ["key"];

    function ET(TT) {
      return ET = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, ET(TT)
    }

    function fT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function CT() {
      return CT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, CT.apply(this, arguments)
    }

    function jT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function JT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? jT(Object(IT), !0).forEach((function(oT) {
          HT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : jT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function UT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, nT(iT.key), iT)
      }
    }

    function aT(TT, oT, IT) {
      return oT = QT(oT),
        function(TT, oT) {
          if (oT && ("object" === ET(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, YT() ? Reflect.construct(oT, IT || [], QT(TT).constructor) : oT.apply(TT, IT))
    }

    function YT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (YT = function() {
        return !!TT
      })()
    }

    function QT(TT) {
      return QT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, QT(TT)
    }

    function OT(TT, oT) {
      return OT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, OT(TT, oT)
    }

    function HT(TT, oT, IT) {
      return (oT = nT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function nT(TT) {
      var oT = function(TT, oT) {
        if ("object" != ET(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != ET(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == ET(oT) ? oT : oT + ""
    }
    var qT = function(TT) {
      function oT() {
        var TT;
        ! function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, oT);
        for (var IT = arguments.length, iT = new Array(IT), zT = 0; zT < IT; zT++) iT[zT] = arguments[zT];
        return HT(TT = aT(this, oT, [].concat(iT)), "state", {
          isAnimationFinished: !0
        }), HT(TT, "id", (0, mT.K)("recharts-area-")), HT(TT, "handleAnimationEnd", (function() {
          var oT = TT.props.onAnimationEnd;
          TT.setState({
            isAnimationFinished: !0
          }), BT()(oT) && oT()
        })), HT(TT, "handleAnimationStart", (function() {
          var oT = TT.props.onAnimationStart;
          TT.setState({
            isAnimationFinished: !1
          }), BT()(oT) && oT()
        })), TT
      }
      return function(TT, oT) {
        if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(oT && oT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), oT && OT(TT, oT)
      }(oT, TT), IT = oT, iT = [{
        key: "renderDots",
        value: function(TT, IT, iT) {
          var kT = this.props.isAnimationActive,
            WT = this.state.isAnimationFinished;
          if (kT && !WT) return null;
          var XT = this.props,
            BT = XT.dot,
            FT = XT.points,
            ST = XT.dataKey,
            DT = (0, RT.d)(this.props, !1),
            LT = (0, RT.d)(BT, !0),
            xT = FT.map((function(TT, IT) {
              var iT = JT(JT(JT({
                key: "dot-".concat(IT),
                r: 3
              }, DT), LT), {}, {
                index: IT,
                cx: TT.x,
                cy: TT.y,
                dataKey: ST,
                value: TT.value,
                payload: TT.payload,
                points: FT
              });
              return oT.renderDotItem(BT, iT)
            })),
            cT = {
              clipPath: TT ? "url(#clipPath-".concat(IT ? "" : "dots-").concat(iT, ")") : null
            };
          return zT.createElement(gT.e, CT({
            className: "recharts-area-dots"
          }, cT), xT)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(TT) {
          var oT = this.props,
            IT = oT.baseLine,
            iT = oT.points,
            kT = oT.strokeWidth,
            WT = iT[0].x,
            XT = iT[iT.length - 1].x,
            BT = TT * Math.abs(WT - XT),
            FT = ST()(iT.map((function(TT) {
              return TT.y || 0
            })));
          return (0, mT.C)(IT) && "number" === typeof IT ? FT = Math.max(IT, FT) : IT && Array.isArray(IT) && IT.length && (FT = Math.max(ST()(IT.map((function(TT) {
            return TT.y || 0
          }))), FT)), (0, mT.C)(FT) ? zT.createElement("rect", {
            x: WT < XT ? WT : WT - BT,
            y: 0,
            width: BT,
            height: Math.floor(FT + (kT ? parseInt("".concat(kT), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(TT) {
          var oT = this.props,
            IT = oT.baseLine,
            iT = oT.points,
            kT = oT.strokeWidth,
            WT = iT[0].y,
            XT = iT[iT.length - 1].y,
            BT = TT * Math.abs(WT - XT),
            FT = ST()(iT.map((function(TT) {
              return TT.x || 0
            })));
          return (0, mT.C)(IT) && "number" === typeof IT ? FT = Math.max(IT, FT) : IT && Array.isArray(IT) && IT.length && (FT = Math.max(ST()(IT.map((function(TT) {
            return TT.x || 0
          }))), FT)), (0, mT.C)(FT) ? zT.createElement("rect", {
            x: 0,
            y: WT < XT ? WT : WT - BT,
            width: FT + (kT ? parseInt("".concat(kT), 10) : 1),
            height: Math.floor(BT)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(TT) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(TT) : this.renderHorizontalRect(TT)
        }
      }, {
        key: "renderAreaStatically",
        value: function(TT, oT, IT, iT) {
          var kT = this.props,
            WT = kT.layout,
            XT = kT.type,
            BT = kT.stroke,
            FT = kT.connectNulls,
            ST = kT.isRange,
            DT = (kT.ref, fT(kT, uT));
          return zT.createElement(gT.e, {
            clipPath: IT ? "url(#clipPath-".concat(iT, ")") : null
          }, zT.createElement(rT.d, CT({}, (0, RT.d)(DT, !0), {
            points: TT,
            connectNulls: FT,
            type: XT,
            baseLine: oT,
            layout: WT,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== BT && zT.createElement(rT.d, CT({}, (0, RT.d)(this.props, !1), {
            className: "recharts-area-curve",
            layout: WT,
            type: XT,
            connectNulls: FT,
            fill: "none",
            points: TT
          })), "none" !== BT && ST && zT.createElement(rT.d, CT({}, (0, RT.d)(this.props, !1), {
            className: "recharts-area-curve",
            layout: WT,
            type: XT,
            connectNulls: FT,
            fill: "none",
            points: oT
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(TT, oT) {
          var IT = this,
            iT = this.props,
            kT = iT.points,
            XT = iT.baseLine,
            BT = iT.isAnimationActive,
            FT = iT.animationBegin,
            ST = iT.animationDuration,
            DT = iT.animationEasing,
            xT = iT.animationId,
            KT = this.state,
            MT = KT.prevPoints,
            rT = KT.prevBaseLine;
          return zT.createElement(WT.d, {
            hx: FT,
            duration: ST,
            isActive: BT,
            easing: DT,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(xT),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(iT) {
            var WT = iT.t;
            if (MT) {
              var BT, FT = MT.length / kT.length,
                ST = kT.map((function(TT, oT) {
                  var IT = Math.floor(oT * FT);
                  if (MT[IT]) {
                    var iT = MT[IT],
                      zT = (0, mT.t)(iT.x, TT.x),
                      kT = (0, mT.t)(iT.y, TT.y);
                    return JT(JT({}, TT), {}, {
                      x: zT(WT),
                      y: kT(WT)
                    })
                  }
                  return TT
                }));
              return BT = (0, mT.C)(XT) && "number" === typeof XT ? (0, mT.t)(rT, XT)(WT) : LT()(XT) || cT()(XT) ? (0, mT.t)(rT, 0)(WT) : XT.map((function(TT, oT) {
                var IT = Math.floor(oT * FT);
                if (rT[IT]) {
                  var iT = rT[IT],
                    zT = (0, mT.t)(iT.x, TT.x),
                    kT = (0, mT.t)(iT.y, TT.y);
                  return JT(JT({}, TT), {}, {
                    x: zT(WT),
                    y: kT(WT)
                  })
                }
                return TT
              })), IT.renderAreaStatically(ST, BT, TT, oT)
            }
            return zT.createElement(gT.e, null, zT.createElement("defs", null, zT.createElement("clipPath", {
              id: "animationClipPath-".concat(oT)
            }, IT.renderClipRect(WT))), zT.createElement(gT.e, {
              clipPath: "url(#animationClipPath-".concat(oT, ")")
            }, IT.renderAreaStatically(kT, XT, TT, oT)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(TT, oT) {
          var IT = this.props,
            iT = IT.points,
            zT = IT.baseLine,
            kT = IT.isAnimationActive,
            WT = this.state,
            XT = WT.prevPoints,
            BT = WT.prevBaseLine,
            FT = WT.totalLength;
          return kT && iT && iT.length && (!XT && FT > 0 || !MT()(XT, iT) || !MT()(BT, zT)) ? this.renderAreaWithAnimation(TT, oT) : this.renderAreaStatically(iT, zT, TT, oT)
        }
      }, {
        key: "render",
        value: function() {
          var TT, oT = this.props,
            IT = oT.hide,
            iT = oT.dot,
            WT = oT.points,
            XT = oT.className,
            BT = oT.top,
            FT = oT.left,
            ST = oT.xAxis,
            DT = oT.yAxis,
            xT = oT.width,
            cT = oT.height,
            KT = oT.isAnimationActive,
            MT = oT.id;
          if (IT || !WT || !WT.length) return null;
          var rT = this.state.isAnimationFinished,
            AT = 1 === WT.length,
            wT = (0, kT.c)("recharts-area", XT),
            mT = ST && ST.allowDataOverflow,
            eT = DT && DT.allowDataOverflow,
            uT = mT || eT,
            vT = LT()(MT) ? this.id : MT,
            ET = null !== (TT = (0, RT.d)(iT, !1)) && void 0 !== TT ? TT : {
              r: 3,
              strokeWidth: 2
            },
            fT = ET.r,
            CT = void 0 === fT ? 3 : fT,
            jT = ET.strokeWidth,
            JT = void 0 === jT ? 2 : jT,
            UT = ((0, RT.r)(iT) ? iT : {}).clipDot,
            aT = void 0 === UT || UT,
            YT = 2 * CT + JT;
          return zT.createElement(gT.e, {
            className: wT
          }, mT || eT ? zT.createElement("defs", null, zT.createElement("clipPath", {
            id: "clipPath-".concat(vT)
          }, zT.createElement("rect", {
            x: mT ? FT : FT - xT / 2,
            y: eT ? BT : BT - cT / 2,
            width: mT ? xT : 2 * xT,
            height: eT ? cT : 2 * cT
          })), !aT && zT.createElement("clipPath", {
            id: "clipPath-dots-".concat(vT)
          }, zT.createElement("rect", {
            x: FT - YT / 2,
            y: BT - YT / 2,
            width: xT + YT,
            height: cT + YT
          }))) : null, AT ? null : this.renderArea(uT, vT), (iT || AT) && this.renderDots(uT, aT, vT), (!KT || rT) && hT.c.renderCallByParent(this.props, WT))
        }
      }], XT = [{
        key: "getDerivedStateFromProps",
        value: function(TT, oT) {
          return TT.animationId !== oT.prevAnimationId ? {
            prevAnimationId: TT.animationId,
            curPoints: TT.points,
            curBaseLine: TT.baseLine,
            prevPoints: oT.curPoints,
            prevBaseLine: oT.curBaseLine
          } : TT.points !== oT.curPoints || TT.baseLine !== oT.curBaseLine ? {
            curPoints: TT.points,
            curBaseLine: TT.baseLine
          } : null
        }
      }], iT && UT(IT.prototype, iT), XT && UT(IT, XT), Object.defineProperty(IT, "prototype", {
        writable: !1
      }), IT;
      var IT, iT, XT
    }(zT.PureComponent);
    iT = qT, HT(qT, "displayName", "Area"), HT(qT, "defaultProps", {
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
      isAnimationActive: !wT.b.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), HT(qT, "getBaseValue", (function(TT, oT, IT, iT) {
      var zT = TT.layout,
        kT = TT.baseValue,
        WT = oT.props.baseValue,
        XT = null !== WT && void 0 !== WT ? WT : kT;
      if ((0, mT.C)(XT) && "number" === typeof XT) return XT;
      var BT = "horizontal" === zT ? iT : IT,
        FT = BT.scale.domain();
      if ("number" === BT.type) {
        var ST = Math.max(FT[0], FT[1]),
          DT = Math.min(FT[0], FT[1]);
        return "dataMin" === XT ? DT : "dataMax" === XT || ST < 0 ? ST : Math.max(Math.min(FT[0], FT[1]), 0)
      }
      return "dataMin" === XT ? FT[0] : "dataMax" === XT ? FT[1] : FT[0]
    })), HT(qT, "getComposedData", (function(TT) {
      var oT, IT = TT.props,
        zT = TT.item,
        kT = TT.xAxis,
        WT = TT.yAxis,
        XT = TT.xAxisTicks,
        BT = TT.yAxisTicks,
        FT = TT.bandSize,
        ST = TT.dataKey,
        DT = TT.stackedData,
        LT = TT.dataStartIndex,
        xT = TT.displayedData,
        cT = TT.offset,
        KT = IT.layout,
        MT = DT && DT.length,
        rT = iT.getBaseValue(IT, zT, kT, WT),
        AT = "horizontal" === KT,
        gT = !1,
        hT = xT.map((function(TT, oT) {
          var IT;
          MT ? IT = DT[LT + oT] : (IT = (0, eT.$)(TT, ST), Array.isArray(IT) ? gT = !0 : IT = [rT, IT]);
          var iT = null == IT[1] || MT && null == (0, eT.$)(TT, ST);
          return AT ? {
            x: (0, eT.y)({
              axis: kT,
              ticks: XT,
              bandSize: FT,
              entry: TT,
              index: oT
            }),
            y: iT ? null : WT.scale(IT[1]),
            value: IT,
            payload: TT
          } : {
            x: iT ? null : kT.scale(IT[1]),
            y: (0, eT.y)({
              axis: WT,
              ticks: BT,
              bandSize: FT,
              entry: TT,
              index: oT
            }),
            value: IT,
            payload: TT
          }
        }));
      return oT = MT || gT ? hT.map((function(TT) {
        var oT = Array.isArray(TT.value) ? TT.value[0] : null;
        return AT ? {
          x: TT.x,
          y: null != oT && null != TT.y ? WT.scale(oT) : null
        } : {
          x: null != oT ? kT.scale(oT) : null,
          y: TT.y
        }
      })) : AT ? WT.scale(rT) : kT.scale(rT), JT({
        points: hT,
        baseLine: oT,
        layout: KT,
        isRange: gT
      }, cT)
    })), HT(qT, "renderDotItem", (function(TT, oT) {
      var IT;
      if (zT.isValidElement(TT)) IT = zT.cloneElement(TT, oT);
      else if (BT()(TT)) IT = TT(oT);
      else {
        var iT = (0, kT.c)("recharts-area-dot", "boolean" !== typeof TT ? TT.className : ""),
          WT = oT.key,
          XT = fT(oT, vT);
        IT = zT.createElement(AT.b, CT({}, XT, {
          key: WT,
          className: iT
        }))
      }
      return IT
    }))
  },
  5761: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => GT
    });
    var iT = IT(46),
      zT = IT(4536),
      kT = IT(5604),
      WT = IT(5678),
      XT = IT.n(WT),
      BT = IT(4908),
      FT = IT.n(BT),
      ST = IT(5452),
      DT = IT(5685),
      LT = IT(5767),
      xT = IT(5773),
      cT = IT(4606),
      KT = IT(4918),
      MT = IT(5464),
      rT = IT(5619),
      AT = IT(4945),
      gT = IT(5442),
      hT = IT(5783),
      wT = ["x", "y"];

    function mT(TT) {
      return mT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, mT(TT)
    }

    function eT() {
      return eT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, eT.apply(this, arguments)
    }

    function RT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function uT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? RT(Object(IT), !0).forEach((function(oT) {
          vT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : RT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function vT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != mT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != mT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == mT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function ET(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function fT(TT, oT) {
      var IT = TT.x,
        iT = TT.y,
        zT = ET(TT, wT),
        kT = "".concat(IT),
        WT = parseInt(kT, 10),
        XT = "".concat(iT),
        BT = parseInt(XT, 10),
        FT = "".concat(oT.height || zT.height),
        ST = parseInt(FT, 10),
        DT = "".concat(oT.width || zT.width),
        LT = parseInt(DT, 10);
      return uT(uT(uT(uT(uT({}, oT), zT), WT ? {
        x: WT
      } : {}), BT ? {
        y: BT
      } : {}), {}, {
        height: ST,
        width: LT,
        name: oT.name,
        radius: oT.radius
      })
    }

    function CT(TT) {
      return iT.createElement(hT.b, eT({
        shapeType: "rectangle",
        propTransformer: fT,
        activeClassName: "recharts-active-bar"
      }, TT))
    }
    var jT, JT = ["value", "background"];

    function UT(TT) {
      return UT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, UT(TT)
    }

    function aT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function YT() {
      return YT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, YT.apply(this, arguments)
    }

    function QT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function OT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? QT(Object(IT), !0).forEach((function(oT) {
          sT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : QT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function HT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, tT(iT.key), iT)
      }
    }

    function nT(TT, oT, IT) {
      return oT = ZT(oT),
        function(TT, oT) {
          if (oT && ("object" === UT(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, qT() ? Reflect.construct(oT, IT || [], ZT(TT).constructor) : oT.apply(TT, IT))
    }

    function qT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (qT = function() {
        return !!TT
      })()
    }

    function ZT(TT) {
      return ZT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, ZT(TT)
    }

    function lT(TT, oT) {
      return lT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, lT(TT, oT)
    }

    function sT(TT, oT, IT) {
      return (oT = tT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function tT(TT) {
      var oT = function(TT, oT) {
        if ("object" != UT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != UT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == UT(oT) ? oT : oT + ""
    }
    var GT = function(TT) {
      function oT() {
        var TT;
        ! function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, oT);
        for (var IT = arguments.length, iT = new Array(IT), zT = 0; zT < IT; zT++) iT[zT] = arguments[zT];
        return sT(TT = nT(this, oT, [].concat(iT)), "state", {
          isAnimationFinished: !1
        }), sT(TT, "id", (0, cT.K)("recharts-bar-")), sT(TT, "handleAnimationEnd", (function() {
          var oT = TT.props.onAnimationEnd;
          TT.setState({
            isAnimationFinished: !0
          }), oT && oT()
        })), sT(TT, "handleAnimationStart", (function() {
          var oT = TT.props.onAnimationStart;
          TT.setState({
            isAnimationFinished: !1
          }), oT && oT()
        })), TT
      }
      return function(TT, oT) {
        if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(oT && oT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), oT && lT(TT, oT)
      }(oT, TT), IT = oT, WT = [{
        key: "renderRectanglesStatically",
        value: function(TT) {
          var oT = this,
            IT = this.props,
            zT = IT.shape,
            kT = IT.dataKey,
            WT = IT.activeIndex,
            XT = IT.activeBar,
            BT = (0, KT.d)(this.props, !1);
          return TT && TT.map((function(TT, IT) {
            var FT = IT === WT,
              DT = FT ? XT : zT,
              LT = OT(OT(OT({}, BT), TT), {}, {
                isActive: FT,
                option: DT,
                index: IT,
                dataKey: kT,
                onAnimationStart: oT.handleAnimationStart,
                onAnimationEnd: oT.handleAnimationEnd
              });
            return iT.createElement(ST.e, YT({
              className: "recharts-bar-rectangle"
            }, (0, AT.m)(oT.props, TT, IT), {
              key: "rectangle-".concat(null === TT || void 0 === TT ? void 0 : TT.x, "-").concat(null === TT || void 0 === TT ? void 0 : TT.y, "-").concat(null === TT || void 0 === TT ? void 0 : TT.value, "-").concat(IT)
            }), iT.createElement(CT, LT))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var TT = this,
            oT = this.props,
            IT = oT.data,
            zT = oT.layout,
            WT = oT.isAnimationActive,
            XT = oT.animationBegin,
            BT = oT.animationDuration,
            FT = oT.animationEasing,
            DT = oT.animationId,
            LT = this.state.prevData;
          return iT.createElement(kT.d, {
            hx: XT,
            duration: BT,
            isActive: WT,
            easing: FT,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(DT),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(oT) {
            var kT = oT.t,
              WT = IT.map((function(TT, oT) {
                var IT = LT && LT[oT];
                if (IT) {
                  var iT = (0, cT.t)(IT.x, TT.x),
                    WT = (0, cT.t)(IT.y, TT.y),
                    XT = (0, cT.t)(IT.width, TT.width),
                    BT = (0, cT.t)(IT.height, TT.height);
                  return OT(OT({}, TT), {}, {
                    x: iT(kT),
                    y: WT(kT),
                    width: XT(kT),
                    height: BT(kT)
                  })
                }
                if ("horizontal" === zT) {
                  var FT = (0, cT.t)(0, TT.height)(kT);
                  return OT(OT({}, TT), {}, {
                    y: TT.y + TT.height - FT,
                    height: FT
                  })
                }
                var ST = (0, cT.t)(0, TT.width)(kT);
                return OT(OT({}, TT), {}, {
                  width: ST
                })
              }));
            return iT.createElement(ST.e, null, TT.renderRectanglesStatically(WT))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var TT = this.props,
            oT = TT.data,
            IT = TT.isAnimationActive,
            iT = this.state.prevData;
          return !(IT && oT && oT.length) || iT && XT()(iT, oT) ? this.renderRectanglesStatically(oT) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var TT = this,
            oT = this.props,
            IT = oT.data,
            zT = oT.dataKey,
            kT = oT.activeIndex,
            WT = (0, KT.d)(this.props.background, !1);
          return IT.map((function(oT, IT) {
            oT.value;
            var XT = oT.background,
              BT = aT(oT, JT);
            if (!XT) return null;
            var FT = OT(OT(OT(OT(OT({}, BT), {}, {
              fill: "#eee"
            }, XT), WT), (0, AT.m)(TT.props, oT, IT)), {}, {
              onAnimationStart: TT.handleAnimationStart,
              onAnimationEnd: TT.handleAnimationEnd,
              dataKey: zT,
              index: IT,
              className: "recharts-bar-background-rectangle"
            });
            return iT.createElement(CT, YT({
              key: "background-bar-".concat(IT),
              option: TT.props.background,
              isActive: IT === kT
            }, FT))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(TT, oT) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var IT = this.props,
            zT = IT.data,
            kT = IT.xAxis,
            WT = IT.yAxis,
            XT = IT.layout,
            BT = IT.children,
            FT = (0, KT.e)(BT, DT.d);
          if (!FT) return null;
          var LT = "vertical" === XT ? zT[0].height / 2 : zT[0].width / 2,
            xT = function(TT, oT) {
              var IT = Array.isArray(TT.value) ? TT.value[1] : TT.value;
              return {
                x: TT.x,
                y: TT.y,
                value: IT,
                errorVal: (0, rT.$)(TT, oT)
              }
            },
            cT = {
              clipPath: TT ? "url(#clipPath-".concat(oT, ")") : null
            };
          return iT.createElement(ST.e, cT, FT.map((function(TT) {
            return iT.cloneElement(TT, {
              key: "error-bar-".concat(oT, "-").concat(TT.props.dataKey),
              data: zT,
              xAxis: kT,
              yAxis: WT,
              layout: XT,
              offset: LT,
              dataPointFormatter: xT
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var TT = this.props,
            oT = TT.hide,
            IT = TT.data,
            kT = TT.className,
            WT = TT.xAxis,
            XT = TT.yAxis,
            BT = TT.left,
            DT = TT.top,
            LT = TT.width,
            cT = TT.height,
            KT = TT.isAnimationActive,
            MT = TT.background,
            rT = TT.id;
          if (oT || !IT || !IT.length) return null;
          var AT = this.state.isAnimationFinished,
            gT = (0, zT.c)("recharts-bar", kT),
            hT = WT && WT.allowDataOverflow,
            wT = XT && XT.allowDataOverflow,
            mT = hT || wT,
            eT = FT()(rT) ? this.id : rT;
          return iT.createElement(ST.e, {
            className: gT
          }, hT || wT ? iT.createElement("defs", null, iT.createElement("clipPath", {
            id: "clipPath-".concat(eT)
          }, iT.createElement("rect", {
            x: hT ? BT : BT - LT / 2,
            y: wT ? DT : DT - cT / 2,
            width: hT ? LT : 2 * LT,
            height: wT ? cT : 2 * cT
          }))) : null, iT.createElement(ST.e, {
            className: "recharts-bar-rectangles",
            clipPath: mT ? "url(#clipPath-".concat(eT, ")") : null
          }, MT ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(mT, eT), (!KT || AT) && xT.c.renderCallByParent(this.props, IT))
        }
      }], BT = [{
        key: "getDerivedStateFromProps",
        value: function(TT, oT) {
          return TT.animationId !== oT.prevAnimationId ? {
            prevAnimationId: TT.animationId,
            curData: TT.data,
            prevData: oT.curData
          } : TT.data !== oT.curData ? {
            curData: TT.data
          } : null
        }
      }], WT && HT(IT.prototype, WT), BT && HT(IT, BT), Object.defineProperty(IT, "prototype", {
        writable: !1
      }), IT;
      var IT, WT, BT
    }(iT.PureComponent);
    jT = GT, sT(GT, "displayName", "Bar"), sT(GT, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !MT.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), sT(GT, "getComposedData", (function(TT) {
      var oT = TT.props,
        IT = TT.item,
        iT = TT.barPosition,
        zT = TT.bandSize,
        kT = TT.xAxis,
        WT = TT.yAxis,
        XT = TT.xAxisTicks,
        BT = TT.yAxisTicks,
        FT = TT.stackedData,
        ST = TT.dataStartIndex,
        DT = TT.displayedData,
        xT = TT.offset,
        MT = (0, rT.p)(iT, IT);
      if (!MT) return null;
      var AT = oT.layout,
        hT = IT.type.defaultProps,
        wT = void 0 !== hT ? OT(OT({}, hT), IT.props) : IT.props,
        mT = wT.dataKey,
        eT = wT.children,
        RT = wT.minPointSize,
        uT = "horizontal" === AT ? WT : kT,
        vT = FT ? uT.scale.domain() : null,
        ET = (0, rT.w)({
          numericAxis: uT
        }),
        fT = (0, KT.e)(eT, LT.c),
        CT = DT.map((function(TT, oT) {
          var iT, DT, LT, xT, KT, hT;
          FT ? iT = (0, rT.kb)(FT[ST + oT], vT) : (iT = (0, rT.$)(TT, mT), Array.isArray(iT) || (iT = [ET, iT]));
          var wT = function(TT) {
            var oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(IT, iT) {
              if ("number" === typeof TT) return TT;
              var zT = (0, cT.C)(IT) || (0, cT.v)(IT);
              return zT ? TT(IT, iT) : (zT || (0, gT.c)(!1), oT)
            }
          }(RT, jT.defaultProps.minPointSize)(iT[1], oT);
          if ("horizontal" === AT) {
            var eT, uT = [WT.scale(iT[0]), WT.scale(iT[1])],
              CT = uT[0],
              JT = uT[1];
            DT = (0, rT.x)({
              axis: kT,
              ticks: XT,
              bandSize: zT,
              offset: MT.offset,
              entry: TT,
              index: oT
            }), LT = null !== (eT = null !== JT && void 0 !== JT ? JT : CT) && void 0 !== eT ? eT : void 0, xT = MT.size;
            var UT = CT - JT;
            if (KT = Number.isNaN(UT) ? 0 : UT, hT = {
                x: DT,
                y: WT.y,
                width: xT,
                height: WT.height
              }, Math.abs(wT) > 0 && Math.abs(KT) < Math.abs(wT)) {
              var aT = (0, cT.G)(KT || wT) * (Math.abs(wT) - Math.abs(KT));
              LT -= aT, KT += aT
            }
          } else {
            var YT = [kT.scale(iT[0]), kT.scale(iT[1])],
              QT = YT[0],
              HT = YT[1];
            if (DT = QT, LT = (0, rT.x)({
                axis: WT,
                ticks: BT,
                bandSize: zT,
                offset: MT.offset,
                entry: TT,
                index: oT
              }), xT = HT - QT, KT = MT.size, hT = {
                x: kT.x,
                y: LT,
                width: kT.width,
                height: KT
              }, Math.abs(wT) > 0 && Math.abs(xT) < Math.abs(wT)) xT += (0, cT.G)(xT || wT) * (Math.abs(wT) - Math.abs(xT))
          }
          return OT(OT(OT({}, TT), {}, {
            x: DT,
            y: LT,
            width: xT,
            height: KT,
            value: FT ? iT : iT[1],
            payload: TT,
            background: hT
          }, fT && fT[oT] && fT[oT].props), {}, {
            tooltipPayload: [(0, rT.X)(IT, TT)],
            tooltipPosition: {
              x: DT + xT / 2,
              y: LT + KT / 2
            }
          })
        }));
      return OT({
        data: CT,
        layout: AT
      }, xT)
    }))
  },
  5868: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => UT
    });
    var iT = IT(46),
      zT = IT(4728),
      kT = IT.n(zT),
      WT = IT(4640),
      XT = IT.n(WT),
      BT = IT(4536),
      FT = IT(4937),
      ST = IT(5452),
      DT = IT(5612),
      LT = IT(5704),
      xT = IT(4606),
      cT = IT(4945),
      KT = IT(4918),
      MT = IT(5877),
      rT = ["viewBox"],
      AT = ["viewBox"],
      gT = ["ticks"];

    function hT(TT) {
      return hT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, hT(TT)
    }

    function wT() {
      return wT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, wT.apply(this, arguments)
    }

    function mT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function eT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? mT(Object(IT), !0).forEach((function(oT) {
          jT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : mT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function RT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function uT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, JT(iT.key), iT)
      }
    }

    function vT(TT, oT, IT) {
      return oT = fT(oT),
        function(TT, oT) {
          if (oT && ("object" === hT(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, ET() ? Reflect.construct(oT, IT || [], fT(TT).constructor) : oT.apply(TT, IT))
    }

    function ET() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (ET = function() {
        return !!TT
      })()
    }

    function fT(TT) {
      return fT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, fT(TT)
    }

    function CT(TT, oT) {
      return CT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, CT(TT, oT)
    }

    function jT(TT, oT, IT) {
      return (oT = JT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function JT(TT) {
      var oT = function(TT, oT) {
        if ("object" != hT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != hT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == hT(oT) ? oT : oT + ""
    }
    var UT = function(TT) {
      function oT(TT) {
        var IT;
        return function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, oT), (IT = vT(this, oT, [TT])).state = {
          fontSize: "",
          letterSpacing: ""
        }, IT
      }
      return function(TT, oT) {
        if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(oT && oT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), oT && CT(TT, oT)
      }(oT, TT), IT = oT, WT = [{
        key: "renderTickItem",
        value: function(TT, oT, IT) {
          var zT = (0, BT.c)(oT.className, "recharts-cartesian-axis-tick-value");
          return iT.isValidElement(TT) ? iT.cloneElement(TT, eT(eT({}, oT), {}, {
            className: zT
          })) : kT()(TT) ? TT(eT(eT({}, oT), {}, {
            className: zT
          })) : iT.createElement(DT.e, wT({}, oT, {
            className: "recharts-cartesian-axis-tick-value"
          }), IT)
        }
      }], (zT = [{
        key: "shouldComponentUpdate",
        value: function(TT, oT) {
          var IT = TT.viewBox,
            iT = RT(TT, rT),
            zT = this.props,
            kT = zT.viewBox,
            WT = RT(zT, AT);
          return !(0, FT.c)(IT, kT) || !(0, FT.c)(iT, WT) || !(0, FT.c)(oT, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var TT = this.layerReference;
          if (TT) {
            var oT = TT.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            oT && this.setState({
              fontSize: window.getComputedStyle(oT).fontSize,
              letterSpacing: window.getComputedStyle(oT).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(TT) {
          var oT, IT, iT, zT, kT, WT, XT = this.props,
            BT = XT.x,
            FT = XT.y,
            ST = XT.width,
            DT = XT.height,
            LT = XT.orientation,
            cT = XT.tickSize,
            KT = XT.mirror,
            MT = XT.tickMargin,
            rT = KT ? -1 : 1,
            AT = TT.tickSize || cT,
            gT = (0, xT.C)(TT.tickCoord) ? TT.tickCoord : TT.coordinate;
          switch (LT) {
            case "top":
              oT = IT = TT.coordinate, WT = (iT = (zT = FT + +!KT * DT) - rT * AT) - rT * MT, kT = gT;
              break;
            case "left":
              iT = zT = TT.coordinate, kT = (oT = (IT = BT + +!KT * ST) - rT * AT) - rT * MT, WT = gT;
              break;
            case "right":
              iT = zT = TT.coordinate, kT = (oT = (IT = BT + +KT * ST) + rT * AT) + rT * MT, WT = gT;
              break;
            default:
              oT = IT = TT.coordinate, WT = (iT = (zT = FT + +KT * DT) + rT * AT) + rT * MT, kT = gT
          }
          return {
            line: {
              x1: oT,
              y1: iT,
              x2: IT,
              y2: zT
            },
            dD: {
              x: kT,
              y: WT
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var TT, oT = this.props,
            IT = oT.orientation,
            iT = oT.mirror;
          switch (IT) {
            case "left":
              TT = iT ? "start" : "end";
              break;
            case "right":
              TT = iT ? "end" : "start";
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
            oT = TT.orientation,
            IT = TT.mirror,
            iT = "end";
          switch (oT) {
            case "left":
            case "right":
              iT = "middle";
              break;
            case "top":
              iT = IT ? "start" : "end";
              break;
            default:
              iT = IT ? "end" : "start"
          }
          return iT
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var TT = this.props,
            oT = TT.x,
            IT = TT.y,
            zT = TT.width,
            kT = TT.height,
            WT = TT.orientation,
            FT = TT.mirror,
            ST = TT.axisLine,
            DT = eT(eT(eT({}, (0, KT.d)(this.props, !1)), (0, KT.d)(ST, !1)), {}, {
              fill: "none"
            });
          if ("top" === WT || "bottom" === WT) {
            var LT = +("top" === WT && !FT || "bottom" === WT && FT);
            DT = eT(eT({}, DT), {}, {
              x1: oT,
              y1: IT + LT * kT,
              x2: oT + zT,
              y2: IT + LT * kT
            })
          } else {
            var xT = +("left" === WT && !FT || "right" === WT && FT);
            DT = eT(eT({}, DT), {}, {
              x1: oT + xT * zT,
              y1: IT,
              x2: oT + xT * zT,
              y2: IT + kT
            })
          }
          return iT.createElement("line", wT({}, DT, {
            className: (0, BT.c)("recharts-cartesian-axis-line", XT()(ST, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(TT, IT, zT) {
          var WT = this,
            FT = this.props,
            DT = FT.tickLine,
            LT = FT.stroke,
            xT = FT.dD,
            rT = FT.tickFormatter,
            AT = FT.unit,
            gT = (0, MT.d)(eT(eT({}, this.props), {}, {
              ticks: TT
            }), IT, zT),
            hT = this.getTickTextAnchor(),
            mT = this.getTickVerticalAnchor(),
            RT = (0, KT.d)(this.props, !1),
            uT = (0, KT.d)(xT, !1),
            vT = eT(eT({}, RT), {}, {
              fill: "none"
            }, (0, KT.d)(DT, !1)),
            ET = gT.map((function(TT, IT) {
              var zT = WT.getTickLineCoord(TT),
                FT = zT.line,
                KT = zT.dD,
                MT = eT(eT(eT(eT({
                  textAnchor: hT,
                  verticalAnchor: mT
                }, RT), {}, {
                  stroke: "none",
                  fill: LT
                }, uT), KT), {}, {
                  index: IT,
                  payload: TT,
                  visibleTicksCount: gT.length,
                  tickFormatter: rT
                });
              return iT.createElement(ST.e, wT({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(TT.value, "-").concat(TT.coordinate, "-").concat(TT.tickCoord)
              }, (0, cT.m)(WT.props, TT, IT)), DT && iT.createElement("line", wT({}, vT, FT, {
                className: (0, BT.c)("recharts-cartesian-axis-tick-line", XT()(DT, "className"))
              })), xT && oT.renderTickItem(xT, MT, "".concat(kT()(rT) ? rT(TT.value, IT) : TT.value).concat(AT || "")))
            }));
          return iT.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, ET)
        }
      }, {
        key: "render",
        value: function() {
          var TT = this,
            oT = this.props,
            IT = oT.axisLine,
            zT = oT.width,
            WT = oT.height,
            XT = oT.ticksGenerator,
            FT = oT.className;
          if (oT.hide) return null;
          var DT = this.props,
            xT = DT.ticks,
            cT = RT(DT, gT),
            KT = xT;
          return kT()(XT) && (KT = xT && xT.length > 0 ? XT(this.props) : XT(cT)), zT <= 0 || WT <= 0 || !KT || !KT.length ? null : iT.createElement(ST.e, {
            className: (0, BT.c)("recharts-cartesian-axis", FT),
            ref: function(oT) {
              TT.layerReference = oT
            }
          }, IT && this.renderAxisLine(), this.renderTicks(KT, this.state.fontSize, this.state.letterSpacing), LT.c.renderCallByParent(this.props))
        }
      }]) && uT(IT.prototype, zT), WT && uT(IT, WT), Object.defineProperty(IT, "prototype", {
        writable: !1
      }), IT;
      var IT, zT, WT
    }(iT.Component);
    jT(UT, "displayName", "CartesianAxis"), jT(UT, "defaultProps", {
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
      dD: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  5883: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => jT
    });
    var iT = IT(46),
      zT = IT(4728),
      kT = IT.n(zT),
      WT = IT(4911),
      XT = IT(4606),
      BT = IT(4918),
      FT = IT(5619),
      ST = IT(5877),
      DT = IT(5868),
      LT = IT(5826),
      xT = ["x1", "y1", "x2", "y2", "key"],
      cT = ["offset"];

    function KT(TT) {
      return KT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, KT(TT)
    }

    function MT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function rT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? MT(Object(IT), !0).forEach((function(oT) {
          AT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : MT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function AT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != KT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != KT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == KT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function gT() {
      return gT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, gT.apply(this, arguments)
    }

    function hT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }
    var wT = function(TT) {
      var oT = TT.fill;
      if (!oT || "none" === oT) return null;
      var IT = TT.fillOpacity,
        zT = TT.x,
        kT = TT.y,
        WT = TT.width,
        XT = TT.height,
        BT = TT.ry;
      return iT.createElement("rect", {
        x: zT,
        y: kT,
        ry: BT,
        width: WT,
        height: XT,
        stroke: "none",
        fill: oT,
        fillOpacity: IT,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function mT(TT, oT) {
      var IT;
      if (iT.isValidElement(TT)) IT = iT.cloneElement(TT, oT);
      else if (kT()(TT)) IT = TT(oT);
      else {
        var zT = oT.x1,
          WT = oT.y1,
          XT = oT.x2,
          FT = oT.y2,
          ST = oT.key,
          DT = hT(oT, xT),
          LT = (0, BT.d)(DT, !1),
          KT = (LT.offset, hT(LT, cT));
        IT = iT.createElement("line", gT({}, KT, {
          x1: zT,
          y1: WT,
          x2: XT,
          y2: FT,
          fill: "none",
          key: ST
        }))
      }
      return IT
    }

    function eT(TT) {
      var oT = TT.x,
        IT = TT.width,
        zT = TT.horizontal,
        kT = void 0 === zT || zT,
        WT = TT.horizontalPoints;
      if (!kT || !WT || !WT.length) return null;
      var XT = WT.map((function(iT, zT) {
        var WT = rT(rT({}, TT), {}, {
          x1: oT,
          y1: iT,
          x2: oT + IT,
          y2: iT,
          key: "line-".concat(zT),
          index: zT
        });
        return mT(kT, WT)
      }));
      return iT.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, XT)
    }

    function RT(TT) {
      var oT = TT.y,
        IT = TT.height,
        zT = TT.vertical,
        kT = void 0 === zT || zT,
        WT = TT.verticalPoints;
      if (!kT || !WT || !WT.length) return null;
      var XT = WT.map((function(iT, zT) {
        var WT = rT(rT({}, TT), {}, {
          x1: iT,
          y1: oT,
          x2: iT,
          y2: oT + IT,
          key: "line-".concat(zT),
          index: zT
        });
        return mT(kT, WT)
      }));
      return iT.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, XT)
    }

    function uT(TT) {
      var oT = TT.horizontalFill,
        IT = TT.fillOpacity,
        zT = TT.x,
        kT = TT.y,
        WT = TT.width,
        XT = TT.height,
        BT = TT.horizontalPoints,
        FT = TT.horizontal;
      if (!(void 0 === FT || FT) || !oT || !oT.length) return null;
      var ST = BT.map((function(TT) {
        return Math.round(TT + kT - kT)
      })).sort((function(TT, oT) {
        return TT - oT
      }));
      kT !== ST[0] && ST.unshift(0);
      var DT = ST.map((function(TT, BT) {
        var FT = !ST[BT + 1] ? kT + XT - TT : ST[BT + 1] - TT;
        if (FT <= 0) return null;
        var DT = BT % oT.length;
        return iT.createElement("rect", {
          key: "react-".concat(BT),
          y: TT,
          x: zT,
          height: FT,
          width: WT,
          stroke: "none",
          fill: oT[DT],
          fillOpacity: IT,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return iT.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, DT)
    }

    function vT(TT) {
      var oT = TT.vertical,
        IT = void 0 === oT || oT,
        zT = TT.verticalFill,
        kT = TT.fillOpacity,
        WT = TT.x,
        XT = TT.y,
        BT = TT.width,
        FT = TT.height,
        ST = TT.verticalPoints;
      if (!IT || !zT || !zT.length) return null;
      var DT = ST.map((function(TT) {
        return Math.round(TT + WT - WT)
      })).sort((function(TT, oT) {
        return TT - oT
      }));
      WT !== DT[0] && DT.unshift(0);
      var LT = DT.map((function(TT, oT) {
        var IT = !DT[oT + 1] ? WT + BT - TT : DT[oT + 1] - TT;
        if (IT <= 0) return null;
        var ST = oT % zT.length;
        return iT.createElement("rect", {
          key: "react-".concat(oT),
          x: TT,
          y: XT,
          width: IT,
          height: FT,
          stroke: "none",
          fill: zT[ST],
          fillOpacity: kT,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return iT.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, LT)
    }
    var ET = function(TT, oT) {
        var IT = TT.xAxis,
          iT = TT.width,
          zT = TT.height,
          kT = TT.offset;
        return (0, FT.B)((0, ST.d)(rT(rT(rT({}, DT.b.defaultProps), IT), {}, {
          ticks: (0, FT.S)(IT, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: iT,
            height: zT
          }
        })), kT.left, kT.left + kT.width, oT)
      },
      fT = function(TT, oT) {
        var IT = TT.yAxis,
          iT = TT.width,
          zT = TT.height,
          kT = TT.offset;
        return (0, FT.B)((0, ST.d)(rT(rT(rT({}, DT.b.defaultProps), IT), {}, {
          ticks: (0, FT.S)(IT, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: iT,
            height: zT
          }
        })), kT.top, kT.top + kT.height, oT)
      },
      CT = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function jT(TT) {
      var oT, IT, zT, BT, FT, ST, DT = (0, LT.i)(),
        xT = (0, LT.g)(),
        cT = (0, LT.k)(),
        MT = rT(rT({}, TT), {}, {
          stroke: null !== (oT = TT.stroke) && void 0 !== oT ? oT : CT.stroke,
          fill: null !== (IT = TT.fill) && void 0 !== IT ? IT : CT.fill,
          horizontal: null !== (zT = TT.horizontal) && void 0 !== zT ? zT : CT.horizontal,
          horizontalFill: null !== (BT = TT.horizontalFill) && void 0 !== BT ? BT : CT.horizontalFill,
          vertical: null !== (FT = TT.vertical) && void 0 !== FT ? FT : CT.vertical,
          verticalFill: null !== (ST = TT.verticalFill) && void 0 !== ST ? ST : CT.verticalFill,
          x: (0, XT.C)(TT.x) ? TT.x : cT.left,
          y: (0, XT.C)(TT.y) ? TT.y : cT.top,
          width: (0, XT.C)(TT.width) ? TT.width : cT.width,
          height: (0, XT.C)(TT.height) ? TT.height : cT.height
        }),
        AT = MT.x,
        hT = MT.y,
        mT = MT.width,
        jT = MT.height,
        JT = MT.syncWithTicks,
        UT = MT.horizontalValues,
        aT = MT.verticalValues,
        YT = (0, LT.e)(),
        QT = (0, LT.r)();
      if (!(0, XT.C)(mT) || mT <= 0 || !(0, XT.C)(jT) || jT <= 0 || !(0, XT.C)(AT) || AT !== +AT || !(0, XT.C)(hT) || hT !== +hT) return null;
      var OT = MT.verticalCoordinatesGenerator || ET,
        HT = MT.horizontalCoordinatesGenerator || fT,
        nT = MT.horizontalPoints,
        qT = MT.verticalPoints;
      if ((!nT || !nT.length) && kT()(HT)) {
        var ZT = UT && UT.length,
          lT = HT({
            yAxis: QT ? rT(rT({}, QT), {}, {
              ticks: ZT ? UT : QT.ticks
            }) : void 0,
            width: DT,
            height: xT,
            offset: cT
          }, !!ZT || JT);
        (0, WT.b)(Array.isArray(lT), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(KT(lT), "]")), Array.isArray(lT) && (nT = lT)
      }
      if ((!qT || !qT.length) && kT()(OT)) {
        var sT = aT && aT.length,
          tT = OT({
            xAxis: YT ? rT(rT({}, YT), {}, {
              ticks: sT ? aT : YT.ticks
            }) : void 0,
            width: DT,
            height: xT,
            offset: cT
          }, !!sT || JT);
        (0, WT.b)(Array.isArray(tT), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(KT(tT), "]")), Array.isArray(tT) && (qT = tT)
      }
      return iT.createElement("g", {
        className: "recharts-cartesian-grid"
      }, iT.createElement(wT, {
        fill: MT.fill,
        fillOpacity: MT.fillOpacity,
        x: MT.x,
        y: MT.y,
        width: MT.width,
        height: MT.height,
        ry: MT.ry
      }), iT.createElement(eT, gT({}, MT, {
        offset: cT,
        horizontalPoints: nT,
        xAxis: YT,
        yAxis: QT
      })), iT.createElement(RT, gT({}, MT, {
        offset: cT,
        verticalPoints: qT,
        xAxis: YT,
        yAxis: QT
      })), iT.createElement(uT, gT({}, MT, {
        horizontalPoints: nT
      })), iT.createElement(vT, gT({}, MT, {
        verticalPoints: qT
      })))
    }
    jT.displayName = "CartesianGrid"
  },
  5685: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => hT
    });
    var iT = IT(46),
      zT = IT(5442),
      kT = IT(5452),
      WT = IT(4918),
      XT = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function BT(TT) {
      return BT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, BT(TT)
    }

    function FT() {
      return FT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, FT.apply(this, arguments)
    }

    function ST(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        var IT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != IT) {
          var iT, zT, kT, WT, XT = [],
            BT = !0,
            FT = !1;
          try {
            if (kT = (IT = IT.call(TT)).next, 0 === oT) {
              if (Object(IT) !== IT) return;
              BT = !1
            } else
              for (; !(BT = (iT = kT.call(IT)).done) && (XT.push(iT.value), XT.length !== oT); BT = !0);
          } catch (TT) {
            FT = !0, zT = TT
          } finally {
            try {
              if (!BT && null != IT.return && (WT = IT.return(), Object(WT) !== WT)) return
            } finally {
              if (FT) throw zT
            }
          }
          return XT
        }
      }(TT, oT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return DT(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return DT(TT, oT)
      }(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function DT(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function LT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function xT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, gT(iT.key), iT)
      }
    }

    function cT(TT, oT, IT) {
      return oT = MT(oT),
        function(TT, oT) {
          if (oT && ("object" === BT(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, KT() ? Reflect.construct(oT, IT || [], MT(TT).constructor) : oT.apply(TT, IT))
    }

    function KT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (KT = function() {
        return !!TT
      })()
    }

    function MT(TT) {
      return MT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, MT(TT)
    }

    function rT(TT, oT) {
      return rT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, rT(TT, oT)
    }

    function AT(TT, oT, IT) {
      return (oT = gT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function gT(TT) {
      var oT = function(TT, oT) {
        if ("object" != BT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != BT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == BT(oT) ? oT : oT + ""
    }
    var hT = function(TT) {
      function oT() {
        return function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, oT), cT(this, oT, arguments)
      }
      return function(TT, oT) {
        if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(oT && oT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), oT && rT(TT, oT)
      }(oT, TT), IT = oT, (BT = [{
        key: "render",
        value: function() {
          var TT = this.props,
            oT = TT.offset,
            IT = TT.layout,
            BT = TT.width,
            DT = TT.dataKey,
            xT = TT.data,
            cT = TT.dataPointFormatter,
            KT = TT.xAxis,
            MT = TT.yAxis,
            rT = LT(TT, XT),
            AT = (0, WT.d)(rT, !1);
          "x" === this.props.direction && "number" !== KT.type && (0, zT.c)(!1);
          var gT = xT.map((function(TT) {
            var zT = cT(TT, DT),
              WT = zT.x,
              XT = zT.y,
              LT = zT.value,
              xT = zT.errorVal;
            if (!xT) return null;
            var rT, gT, hT = [];
            if (Array.isArray(xT)) {
              var wT = ST(xT, 2);
              rT = wT[0], gT = wT[1]
            } else rT = gT = xT;
            if ("vertical" === IT) {
              var mT = KT.scale,
                eT = XT + oT,
                RT = eT + BT,
                uT = eT - BT,
                vT = mT(LT - rT),
                ET = mT(LT + gT);
              hT.push({
                x1: ET,
                y1: RT,
                x2: ET,
                y2: uT
              }), hT.push({
                x1: vT,
                y1: eT,
                x2: ET,
                y2: eT
              }), hT.push({
                x1: vT,
                y1: RT,
                x2: vT,
                y2: uT
              })
            } else if ("horizontal" === IT) {
              var fT = MT.scale,
                CT = WT + oT,
                jT = CT - BT,
                JT = CT + BT,
                UT = fT(LT - rT),
                aT = fT(LT + gT);
              hT.push({
                x1: jT,
                y1: aT,
                x2: JT,
                y2: aT
              }), hT.push({
                x1: CT,
                y1: UT,
                x2: CT,
                y2: aT
              }), hT.push({
                x1: jT,
                y1: UT,
                x2: JT,
                y2: UT
              })
            }
            return iT.createElement(kT.e, FT({
              className: "recharts-errorBar",
              key: "bar-".concat(hT.map((function(TT) {
                return "".concat(TT.x1, "-").concat(TT.x2, "-").concat(TT.y1, "-").concat(TT.y2)
              })))
            }, AT), hT.map((function(TT) {
              return iT.createElement("line", FT({}, TT, {
                key: "line-".concat(TT.x1, "-").concat(TT.x2, "-").concat(TT.y1, "-").concat(TT.y2)
              }))
            })))
          }));
          return iT.createElement(kT.e, {
            className: "recharts-errorBars"
          }, gT)
        }
      }]) && xT(IT.prototype, BT), DT && xT(IT, DT), Object.defineProperty(IT, "prototype", {
        writable: !1
      }), IT;
      var IT, BT, DT
    }(iT.Component);
    AT(hT, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), AT(hT, "displayName", "ErrorBar")
  },
  5862: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => HT
    });
    var iT = IT(46),
      zT = IT(5604),
      kT = IT(4728),
      WT = IT.n(kT),
      XT = IT(4908),
      BT = IT.n(XT),
      FT = IT(5678),
      ST = IT.n(FT),
      DT = IT(4536),
      LT = IT(5849),
      xT = IT(5591),
      cT = IT(5452),
      KT = IT(5773),
      MT = IT(5685),
      rT = IT(4606),
      AT = IT(4918),
      gT = IT(5464),
      hT = IT(5619),
      wT = ["type", "layout", "connectNulls", "ref"],
      mT = ["key"];

    function eT(TT) {
      return eT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, eT(TT)
    }

    function RT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function uT() {
      return uT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, uT.apply(this, arguments)
    }

    function vT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function ET(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? vT(Object(IT), !0).forEach((function(oT) {
          QT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : vT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function fT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return CT(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return CT(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return CT(TT, oT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function CT(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function jT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, OT(iT.key), iT)
      }
    }

    function JT(TT, oT, IT) {
      return oT = aT(oT),
        function(TT, oT) {
          if (oT && ("object" === eT(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, UT() ? Reflect.construct(oT, IT || [], aT(TT).constructor) : oT.apply(TT, IT))
    }

    function UT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (UT = function() {
        return !!TT
      })()
    }

    function aT(TT) {
      return aT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, aT(TT)
    }

    function YT(TT, oT) {
      return YT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, YT(TT, oT)
    }

    function QT(TT, oT, IT) {
      return (oT = OT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function OT(TT) {
      var oT = function(TT, oT) {
        if ("object" != eT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != eT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == eT(oT) ? oT : oT + ""
    }
    var HT = function(TT) {
      function oT() {
        var TT;
        ! function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, oT);
        for (var IT = arguments.length, iT = new Array(IT), zT = 0; zT < IT; zT++) iT[zT] = arguments[zT];
        return QT(TT = JT(this, oT, [].concat(iT)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), QT(TT, "generateSimpleStrokeDasharray", (function(TT, oT) {
          return "".concat(oT, "px ").concat(TT - oT, "px")
        })), QT(TT, "getStrokeDasharray", (function(IT, iT, zT) {
          var kT = zT.reduce((function(TT, oT) {
            return TT + oT
          }));
          if (!kT) return TT.generateSimpleStrokeDasharray(iT, IT);
          for (var WT = Math.floor(IT / kT), XT = IT % kT, BT = iT - IT, FT = [], ST = 0, DT = 0; ST < zT.length; DT += zT[ST], ++ST)
            if (DT + zT[ST] > XT) {
              FT = [].concat(fT(zT.slice(0, ST)), [XT - DT]);
              break
            } var LT = FT.length % 2 === 0 ? [0, BT] : [BT];
          return [].concat(fT(oT.repeat(zT, WT)), fT(FT), LT).map((function(TT) {
            return "".concat(TT, "px")
          })).join(", ")
        })), QT(TT, "id", (0, rT.K)("recharts-line-")), QT(TT, "pathRef", (function(oT) {
          TT.mainCurve = oT
        })), QT(TT, "handleAnimationEnd", (function() {
          TT.setState({
            isAnimationFinished: !0
          }), TT.props.onAnimationEnd && TT.props.onAnimationEnd()
        })), QT(TT, "handleAnimationStart", (function() {
          TT.setState({
            isAnimationFinished: !1
          }), TT.props.onAnimationStart && TT.props.onAnimationStart()
        })), TT
      }
      return function(TT, oT) {
        if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(oT && oT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), oT && YT(TT, oT)
      }(oT, TT), IT = oT, kT = [{
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
          } catch (oT) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(TT, oT) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var IT = this.props,
            zT = IT.points,
            kT = IT.xAxis,
            WT = IT.yAxis,
            XT = IT.layout,
            BT = IT.children,
            FT = (0, AT.e)(BT, MT.d);
          if (!FT) return null;
          var ST = function(TT, oT) {
              return {
                x: TT.x,
                y: TT.y,
                value: TT.value,
                errorVal: (0, hT.$)(TT.payload, oT)
              }
            },
            DT = {
              clipPath: TT ? "url(#clipPath-".concat(oT, ")") : null
            };
          return iT.createElement(cT.e, DT, FT.map((function(TT) {
            return iT.cloneElement(TT, {
              key: "bar-".concat(TT.props.dataKey),
              data: zT,
              xAxis: kT,
              yAxis: WT,
              layout: XT,
              dataPointFormatter: ST
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(TT, IT, zT) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var kT = this.props,
            WT = kT.dot,
            XT = kT.points,
            BT = kT.dataKey,
            FT = (0, AT.d)(this.props, !1),
            ST = (0, AT.d)(WT, !0),
            DT = XT.map((function(TT, IT) {
              var iT = ET(ET(ET({
                key: "dot-".concat(IT),
                r: 3
              }, FT), ST), {}, {
                index: IT,
                cx: TT.x,
                cy: TT.y,
                value: TT.value,
                dataKey: BT,
                payload: TT.payload,
                points: XT
              });
              return oT.renderDotItem(WT, iT)
            })),
            LT = {
              clipPath: TT ? "url(#clipPath-".concat(IT ? "" : "dots-").concat(zT, ")") : null
            };
          return iT.createElement(cT.e, uT({
            className: "recharts-line-dots",
            key: "dots"
          }, LT), DT)
        }
      }, {
        key: "renderCurveStatically",
        value: function(TT, oT, IT, zT) {
          var kT = this.props,
            WT = kT.type,
            XT = kT.layout,
            BT = kT.connectNulls,
            FT = (kT.ref, RT(kT, wT)),
            ST = ET(ET(ET({}, (0, AT.d)(FT, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: oT ? "url(#clipPath-".concat(IT, ")") : null,
              points: TT
            }, zT), {}, {
              type: WT,
              layout: XT,
              connectNulls: BT
            });
          return iT.createElement(LT.d, uT({}, ST, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(TT, oT) {
          var IT = this,
            kT = this.props,
            WT = kT.points,
            XT = kT.strokeDasharray,
            BT = kT.isAnimationActive,
            FT = kT.animationBegin,
            ST = kT.animationDuration,
            DT = kT.animationEasing,
            LT = kT.animationId,
            xT = kT.animateNewValues,
            cT = kT.width,
            KT = kT.height,
            MT = this.state,
            AT = MT.prevPoints,
            gT = MT.totalLength;
          return iT.createElement(zT.d, {
            hx: FT,
            duration: ST,
            isActive: BT,
            easing: DT,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(LT),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(iT) {
            var zT = iT.t;
            if (AT) {
              var kT = AT.length / WT.length,
                BT = WT.map((function(TT, oT) {
                  var IT = Math.floor(oT * kT);
                  if (AT[IT]) {
                    var iT = AT[IT],
                      WT = (0, rT.t)(iT.x, TT.x),
                      XT = (0, rT.t)(iT.y, TT.y);
                    return ET(ET({}, TT), {}, {
                      x: WT(zT),
                      y: XT(zT)
                    })
                  }
                  if (xT) {
                    var BT = (0, rT.t)(2 * cT, TT.x),
                      FT = (0, rT.t)(KT / 2, TT.y);
                    return ET(ET({}, TT), {}, {
                      x: BT(zT),
                      y: FT(zT)
                    })
                  }
                  return ET(ET({}, TT), {}, {
                    x: TT.x,
                    y: TT.y
                  })
                }));
              return IT.renderCurveStatically(BT, TT, oT)
            }
            var FT, ST = (0, rT.t)(0, gT)(zT);
            if (XT) {
              var DT = "".concat(XT).split(/[,\s]+/gim).map((function(TT) {
                return parseFloat(TT)
              }));
              FT = IT.getStrokeDasharray(ST, gT, DT)
            } else FT = IT.generateSimpleStrokeDasharray(gT, ST);
            return IT.renderCurveStatically(WT, TT, oT, {
              strokeDasharray: FT
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(TT, oT) {
          var IT = this.props,
            iT = IT.points,
            zT = IT.isAnimationActive,
            kT = this.state,
            WT = kT.prevPoints,
            XT = kT.totalLength;
          return zT && iT && iT.length && (!WT && XT > 0 || !ST()(WT, iT)) ? this.renderCurveWithAnimation(TT, oT) : this.renderCurveStatically(iT, TT, oT)
        }
      }, {
        key: "render",
        value: function() {
          var TT, oT = this.props,
            IT = oT.hide,
            zT = oT.dot,
            kT = oT.points,
            WT = oT.className,
            XT = oT.xAxis,
            FT = oT.yAxis,
            ST = oT.top,
            LT = oT.left,
            xT = oT.width,
            MT = oT.height,
            rT = oT.isAnimationActive,
            gT = oT.id;
          if (IT || !kT || !kT.length) return null;
          var hT = this.state.isAnimationFinished,
            wT = 1 === kT.length,
            mT = (0, DT.c)("recharts-line", WT),
            eT = XT && XT.allowDataOverflow,
            RT = FT && FT.allowDataOverflow,
            uT = eT || RT,
            vT = BT()(gT) ? this.id : gT,
            ET = null !== (TT = (0, AT.d)(zT, !1)) && void 0 !== TT ? TT : {
              r: 3,
              strokeWidth: 2
            },
            fT = ET.r,
            CT = void 0 === fT ? 3 : fT,
            jT = ET.strokeWidth,
            JT = void 0 === jT ? 2 : jT,
            UT = ((0, AT.r)(zT) ? zT : {}).clipDot,
            aT = void 0 === UT || UT,
            YT = 2 * CT + JT;
          return iT.createElement(cT.e, {
            className: mT
          }, eT || RT ? iT.createElement("defs", null, iT.createElement("clipPath", {
            id: "clipPath-".concat(vT)
          }, iT.createElement("rect", {
            x: eT ? LT : LT - xT / 2,
            y: RT ? ST : ST - MT / 2,
            width: eT ? xT : 2 * xT,
            height: RT ? MT : 2 * MT
          })), !aT && iT.createElement("clipPath", {
            id: "clipPath-dots-".concat(vT)
          }, iT.createElement("rect", {
            x: LT - YT / 2,
            y: ST - YT / 2,
            width: xT + YT,
            height: MT + YT
          }))) : null, !wT && this.renderCurve(uT, vT), this.renderErrorBar(uT, vT), (wT || zT) && this.renderDots(uT, aT, vT), (!rT || hT) && KT.c.renderCallByParent(this.props, kT))
        }
      }], XT = [{
        key: "getDerivedStateFromProps",
        value: function(TT, oT) {
          return TT.animationId !== oT.prevAnimationId ? {
            prevAnimationId: TT.animationId,
            curPoints: TT.points,
            prevPoints: oT.curPoints
          } : TT.points !== oT.curPoints ? {
            curPoints: TT.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(TT, oT) {
          for (var IT = TT.length % 2 !== 0 ? [].concat(fT(TT), [0]) : TT, iT = [], zT = 0; zT < oT; ++zT) iT = [].concat(fT(iT), fT(IT));
          return iT
        }
      }, {
        key: "renderDotItem",
        value: function(TT, oT) {
          var IT;
          if (iT.isValidElement(TT)) IT = iT.cloneElement(TT, oT);
          else if (WT()(TT)) IT = TT(oT);
          else {
            var zT = oT.key,
              kT = RT(oT, mT),
              XT = (0, DT.c)("recharts-line-dot", "boolean" !== typeof TT ? TT.className : "");
            IT = iT.createElement(xT.b, uT({
              key: zT
            }, kT, {
              className: XT
            }))
          }
          return IT
        }
      }], kT && jT(IT.prototype, kT), XT && jT(IT, XT), Object.defineProperty(IT, "prototype", {
        writable: !1
      }), IT;
      var IT, kT, XT
    }(iT.PureComponent);
    QT(HT, "displayName", "Line"), QT(HT, "defaultProps", {
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
      isAnimationActive: !gT.b.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), QT(HT, "getComposedData", (function(TT) {
      var oT = TT.props,
        IT = TT.xAxis,
        iT = TT.yAxis,
        zT = TT.xAxisTicks,
        kT = TT.yAxisTicks,
        WT = TT.dataKey,
        XT = TT.bandSize,
        FT = TT.displayedData,
        ST = TT.offset,
        DT = oT.layout;
      return ET({
        points: FT.map((function(TT, oT) {
          var FT = (0, hT.$)(TT, WT);
          return "horizontal" === DT ? {
            x: (0, hT.y)({
              axis: IT,
              ticks: zT,
              bandSize: XT,
              entry: TT,
              index: oT
            }),
            y: BT()(FT) ? null : iT.scale(FT),
            value: FT,
            payload: TT
          } : {
            x: BT()(FT) ? null : IT.scale(FT),
            y: (0, hT.y)({
              axis: iT,
              ticks: kT,
              bandSize: XT,
              entry: TT,
              index: oT
            }),
            value: FT,
            payload: TT
          }
        })),
        layout: DT
      }, ST)
    }))
  },
  5814: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => JT
    });
    var iT = IT(46),
      zT = IT(4728),
      kT = IT.n(zT),
      WT = IT(5817),
      XT = IT.n(WT),
      BT = IT(4536),
      FT = IT(5452),
      ST = IT(5704),
      DT = IT(5717),
      LT = IT(4606),
      xT = IT(5724),
      cT = IT(4911),
      KT = IT(4918),
      MT = IT(5826);

    function rT(TT) {
      return rT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, rT(TT)
    }

    function AT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, vT(iT.key), iT)
      }
    }

    function gT(TT, oT, IT) {
      return oT = wT(oT),
        function(TT, oT) {
          if (oT && ("object" === rT(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, hT() ? Reflect.construct(oT, IT || [], wT(TT).constructor) : oT.apply(TT, IT))
    }

    function hT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (hT = function() {
        return !!TT
      })()
    }

    function wT(TT) {
      return wT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, wT(TT)
    }

    function mT(TT, oT) {
      return mT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, mT(TT, oT)
    }

    function eT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function RT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? eT(Object(IT), !0).forEach((function(oT) {
          uT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : eT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function uT(TT, oT, IT) {
      return (oT = vT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function vT(TT) {
      var oT = function(TT, oT) {
        if ("object" != rT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != rT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == rT(oT) ? oT : oT + ""
    }

    function ET(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        var IT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != IT) {
          var iT, zT, kT, WT, XT = [],
            BT = !0,
            FT = !1;
          try {
            if (kT = (IT = IT.call(TT)).next, 0 === oT) {
              if (Object(IT) !== IT) return;
              BT = !1
            } else
              for (; !(BT = (iT = kT.call(IT)).done) && (XT.push(iT.value), XT.length !== oT); BT = !0);
          } catch (TT) {
            FT = !0, zT = TT
          } finally {
            try {
              if (!BT && null != IT.return && (WT = IT.return(), Object(WT) !== WT)) return
            } finally {
              if (FT) throw zT
            }
          }
          return XT
        }
      }(TT, oT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return fT(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return fT(TT, oT)
      }(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fT(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function CT() {
      return CT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, CT.apply(this, arguments)
    }

    function jT(TT) {
      var oT = TT.x,
        IT = TT.y,
        zT = TT.segment,
        WT = TT.xAxisId,
        rT = TT.yAxisId,
        AT = TT.shape,
        gT = TT.className,
        hT = TT.alwaysShow,
        wT = (0, MT.j)(),
        mT = (0, MT.n)(WT),
        eT = (0, MT.o)(rT),
        uT = (0, MT.m)();
      if (!wT || !uT) return null;
      (0, cT.b)(void 0 === hT, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var vT = function(TT, oT, IT, iT, zT, kT, WT, BT, FT) {
        var ST = zT.x,
          LT = zT.y,
          xT = zT.width,
          cT = zT.height;
        if (IT) {
          var KT = FT.y,
            MT = TT.y.apply(KT, {
              position: kT
            });
          if ((0, DT.b)(FT, "discard") && !TT.y.isInRange(MT)) return null;
          var rT = [{
            x: ST + xT,
            y: MT
          }, {
            x: ST,
            y: MT
          }];
          return "left" === BT ? rT.reverse() : rT
        }
        if (oT) {
          var AT = FT.x,
            gT = TT.x.apply(AT, {
              position: kT
            });
          if ((0, DT.b)(FT, "discard") && !TT.x.isInRange(gT)) return null;
          var hT = [{
            x: gT,
            y: LT + cT
          }, {
            x: gT,
            y: LT
          }];
          return "top" === WT ? hT.reverse() : hT
        }
        if (iT) {
          var wT = FT.segment.map((function(oT) {
            return TT.apply(oT, {
              position: kT
            })
          }));
          return (0, DT.b)(FT, "discard") && XT()(wT, (function(oT) {
            return !TT.isInRange(oT)
          })) ? null : wT
        }
        return null
      }((0, xT.b)({
        x: mT.scale,
        y: eT.scale
      }), (0, LT.y)(oT), (0, LT.y)(IT), zT && 2 === zT.length, uT, TT.position, mT.orientation, eT.orientation, TT);
      if (!vT) return null;
      var fT = ET(vT, 2),
        jT = fT[0],
        JT = jT.x,
        UT = jT.y,
        aT = fT[1],
        YT = aT.x,
        QT = aT.y,
        OT = RT(RT({
          clipPath: (0, DT.b)(TT, "hidden") ? "url(#".concat(wT, ")") : void 0
        }, (0, KT.d)(TT, !0)), {}, {
          x1: JT,
          y1: UT,
          x2: YT,
          y2: QT
        });
      return iT.createElement(FT.e, {
        className: (0, BT.c)("recharts-reference-line", gT)
      }, function(TT, oT) {
        return iT.isValidElement(TT) ? iT.cloneElement(TT, oT) : kT()(TT) ? TT(oT) : iT.createElement("line", CT({}, oT, {
          className: "recharts-reference-line-line"
        }))
      }(AT, OT), ST.c.renderCallByParent(TT, (0, xT.k)({
        x1: JT,
        y1: UT,
        x2: YT,
        y2: QT
      })))
    }
    var JT = function(TT) {
      function oT() {
        return function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, oT), gT(this, oT, arguments)
      }
      return function(TT, oT) {
        if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(oT && oT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), oT && mT(TT, oT)
      }(oT, TT), IT = oT, (zT = [{
        key: "render",
        value: function() {
          return iT.createElement(jT, this.props)
        }
      }]) && AT(IT.prototype, zT), kT && AT(IT, kT), Object.defineProperty(IT, "prototype", {
        writable: !1
      }), IT;
      var IT, zT, kT
    }(iT.Component);
    uT(JT, "displayName", "ReferenceLine"), uT(JT, "defaultProps", {
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
  5865: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => AT
    });
    var iT = IT(46),
      zT = IT(4536),
      kT = IT(5826),
      WT = IT(5868),
      XT = IT(5619);

    function BT(TT) {
      return BT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, BT(TT)
    }

    function FT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, KT(iT.key), iT)
      }
    }

    function ST(TT, oT, IT) {
      return oT = LT(oT),
        function(TT, oT) {
          if (oT && ("object" === BT(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, DT() ? Reflect.construct(oT, IT || [], LT(TT).constructor) : oT.apply(TT, IT))
    }

    function DT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (DT = function() {
        return !!TT
      })()
    }

    function LT(TT) {
      return LT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, LT(TT)
    }

    function xT(TT, oT) {
      return xT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, xT(TT, oT)
    }

    function cT(TT, oT, IT) {
      return (oT = KT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function KT(TT) {
      var oT = function(TT, oT) {
        if ("object" != BT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != BT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == BT(oT) ? oT : oT + ""
    }

    function MT() {
      return MT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, MT.apply(this, arguments)
    }

    function rT(TT) {
      var oT = TT.xAxisId,
        IT = (0, kT.i)(),
        BT = (0, kT.g)(),
        FT = (0, kT.n)(oT);
      return null == FT ? null : iT.createElement(WT.b, MT({}, FT, {
        className: (0, zT.c)("recharts-".concat(FT.axisType, " ").concat(FT.axisType), FT.className),
        viewBox: {
          x: 0,
          y: 0,
          width: IT,
          height: BT
        },
        ticksGenerator: function(TT) {
          return (0, XT.S)(TT, !0)
        }
      }))
    }
    var AT = function(TT) {
      function oT() {
        return function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, oT), ST(this, oT, arguments)
      }
      return function(TT, oT) {
        if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(oT && oT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), oT && xT(TT, oT)
      }(oT, TT), IT = oT, (zT = [{
        key: "render",
        value: function() {
          return iT.createElement(rT, this.props)
        }
      }]) && FT(IT.prototype, zT), kT && FT(IT, kT), Object.defineProperty(IT, "prototype", {
        writable: !1
      }), IT;
      var IT, zT, kT
    }(iT.Component);
    cT(AT, "displayName", "XAxis"), cT(AT, "defaultProps", {
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
  5879: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => AT
    });
    var iT = IT(46),
      zT = IT(4536),
      kT = IT(5826),
      WT = IT(5868),
      XT = IT(5619);

    function BT(TT) {
      return BT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, BT(TT)
    }

    function FT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, KT(iT.key), iT)
      }
    }

    function ST(TT, oT, IT) {
      return oT = LT(oT),
        function(TT, oT) {
          if (oT && ("object" === BT(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, DT() ? Reflect.construct(oT, IT || [], LT(TT).constructor) : oT.apply(TT, IT))
    }

    function DT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (DT = function() {
        return !!TT
      })()
    }

    function LT(TT) {
      return LT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, LT(TT)
    }

    function xT(TT, oT) {
      return xT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, xT(TT, oT)
    }

    function cT(TT, oT, IT) {
      return (oT = KT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function KT(TT) {
      var oT = function(TT, oT) {
        if ("object" != BT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != BT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == BT(oT) ? oT : oT + ""
    }

    function MT() {
      return MT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, MT.apply(this, arguments)
    }
    var rT = function(TT) {
        var oT = TT.yAxisId,
          IT = (0, kT.i)(),
          BT = (0, kT.g)(),
          FT = (0, kT.o)(oT);
        return null == FT ? null : iT.createElement(WT.b, MT({}, FT, {
          className: (0, zT.c)("recharts-".concat(FT.axisType, " ").concat(FT.axisType), FT.className),
          viewBox: {
            x: 0,
            y: 0,
            width: IT,
            height: BT
          },
          ticksGenerator: function(TT) {
            return (0, XT.S)(TT, !0)
          }
        }))
      },
      AT = function(TT) {
        function oT() {
          return function(TT, oT) {
            if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
          }(this, oT), ST(this, oT, arguments)
        }
        return function(TT, oT) {
          if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
          TT.prototype = Object.create(oT && oT.prototype, {
            constructor: {
              value: TT,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(TT, "prototype", {
            writable: !1
          }), oT && xT(TT, oT)
        }(oT, TT), IT = oT, (zT = [{
          key: "render",
          value: function() {
            return iT.createElement(rT, this.props)
          }
        }]) && FT(IT.prototype, zT), kT && FT(IT, kT), Object.defineProperty(IT, "prototype", {
          writable: !1
        }), IT;
        var IT, zT, kT
      }(iT.Component);
    cT(AT, "displayName", "YAxis"), cT(AT, "defaultProps", {
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
  5877: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => KT
    });
    var iT = IT(4728),
      zT = IT.n(iT),
      kT = IT(4606),
      WT = IT(5616),
      XT = IT(5464),
      BT = IT(5724);

    function FT(TT, oT, IT) {
      if (oT < 1) return [];
      if (1 === oT && void 0 === IT) return TT;
      for (var iT = [], zT = 0; zT < TT.length; zT += oT) {
        if (void 0 !== IT && !0 !== IT(TT[zT])) return;
        iT.push(TT[zT])
      }
      return iT
    }

    function ST(TT, oT, IT, iT, zT) {
      if (TT * oT < TT * iT || TT * oT > TT * zT) return !1;
      var kT = IT();
      return TT * (oT - TT * kT / 2 - iT) >= 0 && TT * (oT + TT * kT / 2 - zT) <= 0
    }

    function DT(TT) {
      return DT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, DT(TT)
    }

    function LT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function xT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? LT(Object(IT), !0).forEach((function(oT) {
          cT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : LT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function cT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != DT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != DT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == DT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function KT(TT, oT, IT) {
      var iT = TT.dD,
        DT = TT.ticks,
        LT = TT.viewBox,
        cT = TT.minTickGap,
        KT = TT.orientation,
        MT = TT.interval,
        rT = TT.tickFormatter,
        AT = TT.unit,
        gT = TT.angle;
      if (!DT || !DT.length || !iT) return [];
      if ((0, kT.C)(MT) || XT.b.isSsr) return function(TT, oT) {
        return FT(TT, oT + 1)
      }(DT, "number" === typeof MT && (0, kT.C)(MT) ? MT : 0);
      var hT = [],
        wT = "top" === KT || "bottom" === KT ? "width" : "height",
        mT = AT && "width" === wT ? (0, WT.h)(AT, {
          fontSize: oT,
          letterSpacing: IT
        }) : {
          width: 0,
          height: 0
        },
        eT = function(TT, iT) {
          var kT = zT()(rT) ? rT(TT.value, iT) : TT.value;
          return "width" === wT ? function(TT, oT, IT) {
            var iT = {
              width: TT.width + oT.width,
              height: TT.height + oT.height
            };
            return (0, BT.h)(iT, IT)
          }((0, WT.h)(kT, {
            fontSize: oT,
            letterSpacing: IT
          }), mT, gT) : (0, WT.h)(kT, {
            fontSize: oT,
            letterSpacing: IT
          })[wT]
        },
        RT = DT.length >= 2 ? (0, kT.G)(DT[1].coordinate - DT[0].coordinate) : 1,
        uT = function(TT, oT, IT) {
          var iT = "width" === IT,
            zT = TT.x,
            kT = TT.y,
            WT = TT.width,
            XT = TT.height;
          return 1 === oT ? {
            start: iT ? zT : kT,
            end: iT ? zT + WT : kT + XT
          } : {
            start: iT ? zT + WT : kT + XT,
            end: iT ? zT : kT
          }
        }(LT, RT, wT);
      return "equidistantPreserveStart" === MT ? function(TT, oT, IT, iT, zT) {
        for (var kT, WT = (iT || []).slice(), XT = oT.start, BT = oT.end, DT = 0, LT = 1, xT = XT, cT = function() {
            var oT = null === iT || void 0 === iT ? void 0 : iT[DT];
            if (void 0 === oT) return {
              v: FT(iT, LT)
            };
            var kT, WT = DT,
              cT = function() {
                return void 0 === kT && (kT = IT(oT, WT)), kT
              },
              KT = oT.coordinate,
              MT = 0 === DT || ST(TT, KT, cT, xT, BT);
            MT || (DT = 0, xT = XT, LT += 1), MT && (xT = KT + TT * (cT() / 2 + zT), DT += LT)
          }; LT <= WT.length;)
          if (kT = cT()) return kT.v;
        return []
      }(RT, uT, eT, DT, cT) : (hT = "preserveStart" === MT || "preserveStartEnd" === MT ? function(TT, oT, IT, iT, zT, kT) {
        var WT = (iT || []).slice(),
          XT = WT.length,
          BT = oT.start,
          FT = oT.end;
        if (kT) {
          var DT = iT[XT - 1],
            LT = IT(DT, XT - 1),
            cT = TT * (DT.coordinate + TT * LT / 2 - FT);
          WT[XT - 1] = DT = xT(xT({}, DT), {}, {
            tickCoord: cT > 0 ? DT.coordinate - cT * TT : DT.coordinate
          }), ST(TT, DT.tickCoord, (function() {
            return LT
          }), BT, FT) && (FT = DT.tickCoord - TT * (LT / 2 + zT), WT[XT - 1] = xT(xT({}, DT), {}, {
            isShow: !0
          }))
        }
        for (var KT = kT ? XT - 1 : XT, MT = function(oT) {
            var iT, kT = WT[oT],
              XT = function() {
                return void 0 === iT && (iT = IT(kT, oT)), iT
              };
            if (0 === oT) {
              var DT = TT * (kT.coordinate - TT * XT() / 2 - BT);
              WT[oT] = kT = xT(xT({}, kT), {}, {
                tickCoord: DT < 0 ? kT.coordinate - DT * TT : kT.coordinate
              })
            } else WT[oT] = kT = xT(xT({}, kT), {}, {
              tickCoord: kT.coordinate
            });
            ST(TT, kT.tickCoord, XT, BT, FT) && (BT = kT.tickCoord + TT * (XT() / 2 + zT), WT[oT] = xT(xT({}, kT), {}, {
              isShow: !0
            }))
          }, rT = 0; rT < KT; rT++) MT(rT);
        return WT
      }(RT, uT, eT, DT, cT, "preserveStartEnd" === MT) : function(TT, oT, IT, iT, zT) {
        for (var kT = (iT || []).slice(), WT = kT.length, XT = oT.start, BT = oT.end, FT = function(oT) {
            var iT, FT = kT[oT],
              DT = function() {
                return void 0 === iT && (iT = IT(FT, oT)), iT
              };
            if (oT === WT - 1) {
              var LT = TT * (FT.coordinate + TT * DT() / 2 - BT);
              kT[oT] = FT = xT(xT({}, FT), {}, {
                tickCoord: LT > 0 ? FT.coordinate - LT * TT : FT.coordinate
              })
            } else kT[oT] = FT = xT(xT({}, FT), {}, {
              tickCoord: FT.coordinate
            });
            ST(TT, FT.tickCoord, DT, XT, BT) && (BT = FT.tickCoord - TT * (DT() / 2 + zT), kT[oT] = xT(xT({}, FT), {}, {
              isShow: !0
            }))
          }, DT = WT - 1; DT >= 0; DT--) FT(DT);
        return kT
      }(RT, uT, eT, DT, cT), hT.filter((function(TT) {
        return TT.isShow
      })))
    }
  },
  5891: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => BT
    });
    var iT = IT(4957),
      zT = IT(5761),
      kT = IT(5865),
      WT = IT(5879),
      XT = IT(5724),
      BT = (0, iT.d)({
        chartName: "BarChart",
        GraphicalChild: zT.b,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: kT.e
        }, {
          axisType: "yAxis",
          AxisComp: WT.b
        }],
        formatAxisMap: XT.f
      })
  },
  4953: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zo
    });
    var iT = IT(4957),
      zT = IT(5854),
      kT = IT(5761),
      WT = IT(5862),
      XT = IT(46),
      BT = IT(5604),
      FT = IT(4908),
      ST = IT.n(FT),
      DT = IT(5678),
      LT = IT.n(DT),
      xT = IT(4728),
      cT = IT.n(xT),
      KT = IT(4536),
      MT = IT(5452),
      rT = IT(5773),
      AT = IT(4918),
      gT = IT(5464);

    function hT(TT) {
      return hT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, hT(TT)
    }

    function wT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, ET(iT.key), iT)
      }
    }

    function mT(TT, oT, IT) {
      return oT = RT(oT),
        function(TT, oT) {
          if (oT && ("object" === hT(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, eT() ? Reflect.construct(oT, IT || [], RT(TT).constructor) : oT.apply(TT, IT))
    }

    function eT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (eT = function() {
        return !!TT
      })()
    }

    function RT(TT) {
      return RT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, RT(TT)
    }

    function uT(TT, oT) {
      return uT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, uT(TT, oT)
    }

    function vT(TT, oT, IT) {
      return (oT = ET(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function ET(TT) {
      var oT = function(TT, oT) {
        if ("object" != hT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != hT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == hT(oT) ? oT : oT + ""
    }
    var fT = function(TT) {
      function oT() {
        return function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, oT), mT(this, oT, arguments)
      }
      return function(TT, oT) {
        if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(oT && oT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), oT && uT(TT, oT)
      }(oT, TT), IT = oT, (iT = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && wT(IT.prototype, iT), zT && wT(IT, zT), Object.defineProperty(IT, "prototype", {
        writable: !1
      }), IT;
      var IT, iT, zT
    }(XT.Component);
    vT(fT, "displayName", "ZAxis"), vT(fT, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var CT = IT(5849),
      jT = IT(5685),
      JT = IT(5767),
      UT = IT(4606),
      aT = IT(5619),
      YT = IT(4945),
      QT = IT(5534),
      OT = IT(5783),
      HT = ["option", "isActive"];

    function nT() {
      return nT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, nT.apply(this, arguments)
    }

    function qT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function ZT(TT) {
      var oT = TT.option,
        IT = TT.isActive,
        iT = qT(TT, HT);
      return "string" === typeof oT ? XT.createElement(OT.b, nT({
        option: XT.createElement(QT.e, nT({
          type: oT
        }, iT)),
        isActive: IT,
        shapeType: "symbols"
      }, iT)) : XT.createElement(OT.b, nT({
        option: oT,
        isActive: IT,
        shapeType: "symbols"
      }, iT))
    }

    function lT(TT) {
      return lT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, lT(TT)
    }

    function sT() {
      return sT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, sT.apply(this, arguments)
    }

    function tT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function GT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? tT(Object(IT), !0).forEach((function(oT) {
          dT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : tT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function pT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, VT(iT.key), iT)
      }
    }

    function bT(TT, oT, IT) {
      return oT = NT(oT),
        function(TT, oT) {
          if (oT && ("object" === lT(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, yT() ? Reflect.construct(oT, IT || [], NT(TT).constructor) : oT.apply(TT, IT))
    }

    function yT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (yT = function() {
        return !!TT
      })()
    }

    function NT(TT) {
      return NT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, NT(TT)
    }

    function PT(TT, oT) {
      return PT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, PT(TT, oT)
    }

    function dT(TT, oT, IT) {
      return (oT = VT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function VT(TT) {
      var oT = function(TT, oT) {
        if ("object" != lT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != lT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == lT(oT) ? oT : oT + ""
    }
    var To = function(TT) {
      function oT() {
        var TT;
        ! function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, oT);
        for (var IT = arguments.length, iT = new Array(IT), zT = 0; zT < IT; zT++) iT[zT] = arguments[zT];
        return dT(TT = bT(this, oT, [].concat(iT)), "state", {
          isAnimationFinished: !1
        }), dT(TT, "handleAnimationEnd", (function() {
          TT.setState({
            isAnimationFinished: !0
          })
        })), dT(TT, "handleAnimationStart", (function() {
          TT.setState({
            isAnimationFinished: !1
          })
        })), dT(TT, "id", (0, UT.K)("recharts-scatter-")), TT
      }
      return function(TT, oT) {
        if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(oT && oT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), oT && PT(TT, oT)
      }(oT, TT), IT = oT, iT = [{
        key: "renderSymbolsStatically",
        value: function(TT) {
          var oT = this,
            IT = this.props,
            iT = IT.shape,
            zT = IT.activeShape,
            kT = IT.activeIndex,
            WT = (0, AT.d)(this.props, !1);
          return TT.map((function(TT, IT) {
            var BT = kT === IT,
              FT = BT ? zT : iT,
              ST = GT(GT({}, WT), TT);
            return XT.createElement(MT.e, sT({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === TT || void 0 === TT ? void 0 : TT.cx, "-").concat(null === TT || void 0 === TT ? void 0 : TT.cy, "-").concat(null === TT || void 0 === TT ? void 0 : TT.size, "-").concat(IT)
            }, (0, YT.m)(oT.props, TT, IT), {
              role: "img"
            }), XT.createElement(ZT, sT({
              option: FT,
              isActive: BT,
              key: "symbol-".concat(IT)
            }, ST)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var TT = this,
            oT = this.props,
            IT = oT.points,
            iT = oT.isAnimationActive,
            zT = oT.animationBegin,
            kT = oT.animationDuration,
            WT = oT.animationEasing,
            FT = oT.animationId,
            ST = this.state.prevPoints;
          return XT.createElement(BT.d, {
            hx: zT,
            duration: kT,
            isActive: iT,
            easing: WT,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(FT),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(oT) {
            var iT = oT.t,
              zT = IT.map((function(TT, oT) {
                var IT = ST && ST[oT];
                if (IT) {
                  var zT = (0, UT.t)(IT.cx, TT.cx),
                    kT = (0, UT.t)(IT.cy, TT.cy),
                    WT = (0, UT.t)(IT.size, TT.size);
                  return GT(GT({}, TT), {}, {
                    cx: zT(iT),
                    cy: kT(iT),
                    size: WT(iT)
                  })
                }
                var XT = (0, UT.t)(0, TT.size);
                return GT(GT({}, TT), {}, {
                  size: XT(iT)
                })
              }));
            return XT.createElement(MT.e, null, TT.renderSymbolsStatically(zT))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var TT = this.props,
            oT = TT.points,
            IT = TT.isAnimationActive,
            iT = this.state.prevPoints;
          return !(IT && oT && oT.length) || iT && LT()(iT, oT) ? this.renderSymbolsStatically(oT) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var TT = this.props,
            oT = TT.points,
            IT = TT.xAxis,
            iT = TT.yAxis,
            zT = TT.children,
            kT = (0, AT.e)(zT, jT.d);
          return kT ? kT.map((function(TT, zT) {
            var kT = TT.props,
              WT = kT.direction,
              BT = kT.dataKey;
            return XT.cloneElement(TT, {
              key: "".concat(WT, "-").concat(BT, "-").concat(oT[zT]),
              data: oT,
              xAxis: IT,
              yAxis: iT,
              layout: "x" === WT ? "vertical" : "horizontal",
              dataPointFormatter: function(TT, oT) {
                return {
                  x: TT.cx,
                  y: TT.cy,
                  value: "x" === WT ? +TT.node.x : +TT.node.y,
                  errorVal: (0, aT.$)(TT, oT)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var TT, oT, IT = this.props,
            iT = IT.points,
            zT = IT.line,
            kT = IT.lineType,
            WT = IT.lineJointType,
            BT = (0, AT.d)(this.props, !1),
            FT = (0, AT.d)(zT, !1);
          if ("joint" === kT) TT = iT.map((function(TT) {
            return {
              x: TT.cx,
              y: TT.cy
            }
          }));
          else if ("fitting" === kT) {
            var ST = (0, UT.n)(iT),
              DT = ST.xmin,
              LT = ST.xmax,
              xT = ST.a,
              KT = ST.b,
              rT = function(TT) {
                return xT * TT + KT
              };
            TT = [{
              x: DT,
              y: rT(DT)
            }, {
              x: LT,
              y: rT(LT)
            }]
          }
          var gT = GT(GT(GT({}, BT), {}, {
            fill: "none",
            stroke: BT && BT.fill
          }, FT), {}, {
            points: TT
          });
          return oT = XT.isValidElement(zT) ? XT.cloneElement(zT, gT) : cT()(zT) ? zT(gT) : XT.createElement(CT.d, sT({}, gT, {
            type: WT
          })), XT.createElement(MT.e, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, oT)
        }
      }, {
        key: "render",
        value: function() {
          var TT = this.props,
            oT = TT.hide,
            IT = TT.points,
            iT = TT.line,
            zT = TT.className,
            kT = TT.xAxis,
            WT = TT.yAxis,
            BT = TT.left,
            FT = TT.top,
            DT = TT.width,
            LT = TT.height,
            xT = TT.id,
            cT = TT.isAnimationActive;
          if (oT || !IT || !IT.length) return null;
          var AT = this.state.isAnimationFinished,
            gT = (0, KT.c)("recharts-scatter", zT),
            hT = kT && kT.allowDataOverflow,
            wT = WT && WT.allowDataOverflow,
            mT = hT || wT,
            eT = ST()(xT) ? this.id : xT;
          return XT.createElement(MT.e, {
            className: gT,
            clipPath: mT ? "url(#clipPath-".concat(eT, ")") : null
          }, hT || wT ? XT.createElement("defs", null, XT.createElement("clipPath", {
            id: "clipPath-".concat(eT)
          }, XT.createElement("rect", {
            x: hT ? BT : BT - DT / 2,
            y: wT ? FT : FT - LT / 2,
            width: hT ? DT : 2 * DT,
            height: wT ? LT : 2 * LT
          }))) : null, iT && this.renderLine(), this.renderErrorBar(), XT.createElement(MT.e, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!cT || AT) && rT.c.renderCallByParent(this.props, IT))
        }
      }], zT = [{
        key: "getDerivedStateFromProps",
        value: function(TT, oT) {
          return TT.animationId !== oT.prevAnimationId ? {
            prevAnimationId: TT.animationId,
            curPoints: TT.points,
            prevPoints: oT.curPoints
          } : TT.points !== oT.curPoints ? {
            curPoints: TT.points
          } : null
        }
      }], iT && pT(IT.prototype, iT), zT && pT(IT, zT), Object.defineProperty(IT, "prototype", {
        writable: !1
      }), IT;
      var IT, iT, zT
    }(XT.PureComponent);
    dT(To, "displayName", "Scatter"), dT(To, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !gT.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), dT(To, "getComposedData", (function(TT) {
      var oT = TT.xAxis,
        IT = TT.yAxis,
        iT = TT.zAxis,
        zT = TT.item,
        kT = TT.displayedData,
        WT = TT.xAxisTicks,
        XT = TT.yAxisTicks,
        BT = TT.offset,
        FT = zT.props.tooltipType,
        DT = (0, AT.e)(zT.props.children, JT.c),
        LT = ST()(oT.dataKey) ? zT.props.dataKey : oT.dataKey,
        xT = ST()(IT.dataKey) ? zT.props.dataKey : IT.dataKey,
        cT = iT && iT.dataKey,
        KT = iT ? iT.range : fT.defaultProps.range,
        MT = KT && KT[0],
        rT = oT.scale.bandwidth ? oT.scale.bandwidth() : 0,
        gT = IT.scale.bandwidth ? IT.scale.bandwidth() : 0,
        hT = kT.map((function(TT, kT) {
          var BT = (0, aT.$)(TT, LT),
            KT = (0, aT.$)(TT, xT),
            AT = !ST()(cT) && (0, aT.$)(TT, cT) || "-",
            hT = [{
              name: ST()(oT.dataKey) ? zT.props.name : oT.name || oT.dataKey,
              unit: oT.unit || "",
              value: BT,
              payload: TT,
              dataKey: LT,
              type: FT
            }, {
              name: ST()(IT.dataKey) ? zT.props.name : IT.name || IT.dataKey,
              unit: IT.unit || "",
              value: KT,
              payload: TT,
              dataKey: xT,
              type: FT
            }];
          "-" !== AT && hT.push({
            name: iT.name || iT.dataKey,
            unit: iT.unit || "",
            value: AT,
            payload: TT,
            dataKey: cT,
            type: FT
          });
          var wT = (0, aT.y)({
              axis: oT,
              ticks: WT,
              bandSize: rT,
              entry: TT,
              index: kT,
              dataKey: LT
            }),
            mT = (0, aT.y)({
              axis: IT,
              ticks: XT,
              bandSize: gT,
              entry: TT,
              index: kT,
              dataKey: xT
            }),
            eT = "-" !== AT ? iT.scale(AT) : MT,
            RT = Math.sqrt(Math.max(eT, 0) / Math.PI);
          return GT(GT({}, TT), {}, {
            cx: wT,
            cy: mT,
            x: wT - RT,
            y: mT - RT,
            xAxis: oT,
            yAxis: IT,
            zAxis: iT,
            width: 2 * RT,
            height: 2 * RT,
            size: eT,
            node: {
              x: BT,
              y: KT,
              z: AT
            },
            tooltipPayload: hT,
            tooltipPosition: {
              x: wT,
              y: mT
            },
            payload: TT
          }, DT && DT[kT] && DT[kT].props)
        }));
      return GT({
        points: hT
      }, BT)
    }));
    var oo = IT(5865),
      Io = IT(5879),
      io = IT(5724),
      zo = (0, iT.d)({
        chartName: "ComposedChart",
        GraphicalChild: [WT.c, zT.b, kT.b, To],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: oo.e
        }, {
          axisType: "yAxis",
          AxisComp: Io.b
        }, {
          axisType: "zAxis",
          AxisComp: fT
        }],
        formatAxisMap: io.f
      })
  },
  4957: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => ZI
    });
    var iT = IT(46),
      zT = IT(4908),
      kT = IT.n(zT),
      WT = IT(4728),
      XT = IT.n(WT),
      BT = IT(4961),
      FT = IT.n(BT),
      ST = IT(4640),
      DT = IT.n(ST),
      LT = IT(4998),
      xT = IT.n(LT),
      cT = IT(4544),
      KT = IT.n(cT),
      MT = IT(4536),
      rT = IT(5442),
      AT = IT(5446),
      gT = IT(5452),
      hT = IT(5459),
      wT = IT(5527),
      mT = IT(5591),
      eT = IT(5595),
      RT = IT(4918),
      uT = IT(5624),
      vT = IT(5612),
      ET = IT(5619),
      fT = IT(4606);

    function CT(TT) {
      return CT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, CT(TT)
    }

    function jT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function JT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? jT(Object(IT), !0).forEach((function(oT) {
          UT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : jT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function UT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != CT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != CT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == CT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }
    var aT = ["Webkit", "Moz", "O", "ms"];

    function YT(TT) {
      return YT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, YT(TT)
    }

    function QT() {
      return QT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, QT.apply(this, arguments)
    }

    function OT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function HT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? OT(Object(IT), !0).forEach((function(oT) {
          tT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : OT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function nT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, GT(iT.key), iT)
      }
    }

    function qT(TT, oT, IT) {
      return oT = lT(oT),
        function(TT, oT) {
          if (oT && ("object" === YT(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, ZT() ? Reflect.construct(oT, IT || [], lT(TT).constructor) : oT.apply(TT, IT))
    }

    function ZT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (ZT = function() {
        return !!TT
      })()
    }

    function lT(TT) {
      return lT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, lT(TT)
    }

    function sT(TT, oT) {
      return sT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, sT(TT, oT)
    }

    function tT(TT, oT, IT) {
      return (oT = GT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function GT(TT) {
      var oT = function(TT, oT) {
        if ("object" != YT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != YT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == YT(oT) ? oT : oT + ""
    }
    var pT = function(TT) {
        return TT.changedTouches && !!TT.changedTouches.length
      },
      bT = function(TT) {
        function oT(TT) {
          var IT;
          return function(TT, oT) {
            if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
          }(this, oT), tT(IT = qT(this, oT, [TT]), "handleDrag", (function(TT) {
            IT.leaveTimer && (clearTimeout(IT.leaveTimer), IT.leaveTimer = null), IT.state.isTravellerMoving ? IT.handleTravellerMove(TT) : IT.state.isSlideMoving && IT.handleSlideDrag(TT)
          })), tT(IT, "handleTouchMove", (function(TT) {
            null != TT.changedTouches && TT.changedTouches.length > 0 && IT.handleDrag(TT.changedTouches[0])
          })), tT(IT, "handleDragEnd", (function() {
            IT.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var TT = IT.props,
                oT = TT.endIndex,
                iT = TT.onDragEnd,
                zT = TT.startIndex;
              null === iT || void 0 === iT || iT({
                endIndex: oT,
                startIndex: zT
              })
            })), IT.detachDragEndListener()
          })), tT(IT, "handleLeaveWrapper", (function() {
            (IT.state.isTravellerMoving || IT.state.isSlideMoving) && (IT.leaveTimer = window.setTimeout(IT.handleDragEnd, IT.props.leaveTimeOut))
          })), tT(IT, "handleEnterSlideOrTraveller", (function() {
            IT.setState({
              isTextActive: !0
            })
          })), tT(IT, "handleLeaveSlideOrTraveller", (function() {
            IT.setState({
              isTextActive: !1
            })
          })), tT(IT, "handleSlideDragStart", (function(TT) {
            var oT = pT(TT) ? TT.changedTouches[0] : TT;
            IT.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: oT.pageX
            }), IT.attachDragEndListener()
          })), IT.travellerDragStartHandlers = {
            startX: IT.handleTravellerDragStart.bind(IT, "startX"),
            endX: IT.handleTravellerDragStart.bind(IT, "endX")
          }, IT.state = {}, IT
        }
        return function(TT, oT) {
          if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
          TT.prototype = Object.create(oT && oT.prototype, {
            constructor: {
              value: TT,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(TT, "prototype", {
            writable: !1
          }), oT && sT(TT, oT)
        }(oT, TT), IT = oT, zT = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(TT) {
            var IT = TT.startX,
              iT = TT.endX,
              zT = this.state.scaleValues,
              kT = this.props,
              WT = kT.gap,
              XT = kT.data.length - 1,
              BT = Math.min(IT, iT),
              FT = Math.max(IT, iT),
              ST = oT.getIndexInRange(zT, BT),
              DT = oT.getIndexInRange(zT, FT);
            return {
              startIndex: ST - ST % WT,
              endIndex: DT === XT ? XT : DT - DT % WT
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(TT) {
            var oT = this.props,
              IT = oT.data,
              iT = oT.tickFormatter,
              zT = oT.dataKey,
              kT = (0, ET.$)(IT[TT], zT, TT);
            return XT()(iT) ? iT(kT, TT) : kT
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
            var oT = this.state,
              IT = oT.slideMoveStartX,
              iT = oT.startX,
              zT = oT.endX,
              kT = this.props,
              WT = kT.x,
              XT = kT.width,
              BT = kT.travellerWidth,
              FT = kT.startIndex,
              ST = kT.endIndex,
              DT = kT.onChange,
              LT = TT.pageX - IT;
            LT > 0 ? LT = Math.min(LT, WT + XT - BT - zT, WT + XT - BT - iT) : LT < 0 && (LT = Math.max(LT, WT - iT, WT - zT));
            var xT = this.getIndex({
              startX: iT + LT,
              endX: zT + LT
            });
            xT.startIndex === FT && xT.endIndex === ST || !DT || DT(xT), this.setState({
              startX: iT + LT,
              endX: zT + LT,
              slideMoveStartX: TT.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(TT, oT) {
            var IT = pT(oT) ? oT.changedTouches[0] : oT;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: TT,
              brushMoveStartX: IT.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(TT) {
            var oT = this.state,
              IT = oT.brushMoveStartX,
              iT = oT.movingTravellerId,
              zT = oT.endX,
              kT = oT.startX,
              WT = this.state[iT],
              XT = this.props,
              BT = XT.x,
              FT = XT.width,
              ST = XT.travellerWidth,
              DT = XT.onChange,
              LT = XT.gap,
              xT = XT.data,
              cT = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              KT = TT.pageX - IT;
            KT > 0 ? KT = Math.min(KT, BT + FT - ST - WT) : KT < 0 && (KT = Math.max(KT, BT - WT)), cT[iT] = WT + KT;
            var MT = this.getIndex(cT),
              rT = MT.startIndex,
              AT = MT.endIndex;
            this.setState(tT(tT({}, iT, WT + KT), "brushMoveStartX", TT.pageX), (function() {
              DT && function() {
                var TT = xT.length - 1;
                return "startX" === iT && (zT > kT ? rT % LT === 0 : AT % LT === 0) || zT < kT && AT === TT || "endX" === iT && (zT > kT ? AT % LT === 0 : rT % LT === 0) || zT > kT && AT === TT
              }() && DT(MT)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(TT, oT) {
            var IT = this,
              iT = this.state,
              zT = iT.scaleValues,
              kT = iT.startX,
              WT = iT.endX,
              XT = this.state[oT],
              BT = zT.indexOf(XT);
            if (-1 !== BT) {
              var FT = BT + TT;
              if (!(-1 === FT || FT >= zT.length)) {
                var ST = zT[FT];
                "startX" === oT && ST >= WT || "endX" === oT && ST <= kT || this.setState(tT({}, oT, ST), (function() {
                  IT.props.onChange(IT.getIndex({
                    startX: IT.state.startX,
                    endX: IT.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var TT = this.props,
              oT = TT.x,
              IT = TT.y,
              zT = TT.width,
              kT = TT.height,
              WT = TT.fill,
              XT = TT.stroke;
            return iT.createElement("rect", {
              stroke: XT,
              fill: WT,
              x: oT,
              y: IT,
              width: zT,
              height: kT
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var TT = this.props,
              oT = TT.x,
              IT = TT.y,
              zT = TT.width,
              kT = TT.height,
              WT = TT.data,
              XT = TT.children,
              BT = TT.padding,
              FT = iT.Children.only(XT);
            return FT ? iT.cloneElement(FT, {
              x: oT,
              y: IT,
              width: zT,
              height: kT,
              margin: BT,
              compact: !0,
              data: WT
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(TT, IT) {
            var zT, kT, WT = this,
              XT = this.props,
              BT = XT.y,
              FT = XT.travellerWidth,
              ST = XT.height,
              DT = XT.traveller,
              LT = XT.ariaLabel,
              xT = XT.data,
              cT = XT.startIndex,
              KT = XT.endIndex,
              MT = Math.max(TT, this.props.x),
              rT = HT(HT({}, (0, RT.d)(this.props, !1)), {}, {
                x: MT,
                y: BT,
                width: FT,
                height: ST
              }),
              AT = LT || "Min value: ".concat(null === (zT = xT[cT]) || void 0 === zT ? void 0 : zT.name, ", Max value: ").concat(null === (kT = xT[KT]) || void 0 === kT ? void 0 : kT.name);
            return iT.createElement(gT.e, {
              tabIndex: 0,
              role: "slider",
              "aria-label": AT,
              "aria-valuenow": TT,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[IT],
              onTouchStart: this.travellerDragStartHandlers[IT],
              onKeyDown: function(TT) {
                ["ArrowLeft", "ArrowRight"].includes(TT.key) && (TT.preventDefault(), TT.stopPropagation(), WT.handleTravellerMoveKeyboard("ArrowRight" === TT.key ? 1 : -1, IT))
              },
              onFocus: function() {
                WT.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                WT.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, oT.renderTraveller(DT, rT))
          }
        }, {
          key: "renderSlide",
          value: function(TT, oT) {
            var IT = this.props,
              zT = IT.y,
              kT = IT.height,
              WT = IT.stroke,
              XT = IT.travellerWidth,
              BT = Math.min(TT, oT) + XT,
              FT = Math.max(Math.abs(oT - TT) - XT, 0);
            return iT.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: WT,
              fillOpacity: .2,
              x: BT,
              y: zT,
              width: FT,
              height: kT
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var TT = this.props,
              oT = TT.startIndex,
              IT = TT.endIndex,
              zT = TT.y,
              kT = TT.height,
              WT = TT.travellerWidth,
              XT = TT.stroke,
              BT = this.state,
              FT = BT.startX,
              ST = BT.endX,
              DT = {
                pointerEvents: "none",
                fill: XT
              };
            return iT.createElement(gT.e, {
              className: "recharts-brush-texts"
            }, iT.createElement(vT.e, QT({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(FT, ST) - 5,
              y: zT + kT / 2
            }, DT), this.getTextOfTick(oT)), iT.createElement(vT.e, QT({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(FT, ST) + WT + 5,
              y: zT + kT / 2
            }, DT), this.getTextOfTick(IT)))
          }
        }, {
          key: "render",
          value: function() {
            var TT = this.props,
              oT = TT.data,
              IT = TT.className,
              zT = TT.children,
              kT = TT.x,
              WT = TT.y,
              XT = TT.width,
              BT = TT.height,
              FT = TT.alwaysShowText,
              ST = this.state,
              DT = ST.startX,
              LT = ST.endX,
              xT = ST.isTextActive,
              cT = ST.isSlideMoving,
              KT = ST.isTravellerMoving,
              rT = ST.isTravellerFocused;
            if (!oT || !oT.length || !(0, fT.C)(kT) || !(0, fT.C)(WT) || !(0, fT.C)(XT) || !(0, fT.C)(BT) || XT <= 0 || BT <= 0) return null;
            var AT = (0, MT.c)("recharts-brush", IT),
              hT = 1 === iT.Children.count(zT),
              wT = function(TT, oT) {
                if (!TT) return null;
                var IT = TT.replace(/(\w)/, (function(TT) {
                    return TT.toUpperCase()
                  })),
                  iT = aT.reduce((function(TT, iT) {
                    return JT(JT({}, TT), {}, UT({}, iT + IT, oT))
                  }), {});
                return iT[TT] = oT, iT
              }("userSelect", "none");
            return iT.createElement(gT.e, {
              className: AT,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: wT
            }, this.renderBackground(), hT && this.renderPanorama(), this.renderSlide(DT, LT), this.renderTravellerLayer(DT, "startX"), this.renderTravellerLayer(LT, "endX"), (xT || cT || KT || rT || FT) && this.renderText())
          }
        }], kT = [{
          key: "renderDefaultTraveller",
          value: function(TT) {
            var oT = TT.x,
              IT = TT.y,
              zT = TT.width,
              kT = TT.height,
              WT = TT.stroke,
              XT = Math.floor(IT + kT / 2) - 1;
            return iT.createElement(iT.Fragment, null, iT.createElement("rect", {
              x: oT,
              y: IT,
              width: zT,
              height: kT,
              fill: WT,
              stroke: "none"
            }), iT.createElement("line", {
              x1: oT + 1,
              y1: XT,
              x2: oT + zT - 1,
              y2: XT,
              fill: "none",
              stroke: "#fff"
            }), iT.createElement("line", {
              x1: oT + 1,
              y1: XT + 2,
              x2: oT + zT - 1,
              y2: XT + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(TT, IT) {
            return iT.isValidElement(TT) ? iT.cloneElement(TT, IT) : XT()(TT) ? TT(IT) : oT.renderDefaultTraveller(IT)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(TT, oT) {
            var IT = TT.data,
              iT = TT.width,
              zT = TT.x,
              kT = TT.travellerWidth,
              WT = TT.updateId,
              XT = TT.startIndex,
              BT = TT.endIndex;
            if (IT !== oT.prevData || WT !== oT.prevUpdateId) return HT({
              prevData: IT,
              prevTravellerWidth: kT,
              prevUpdateId: WT,
              prevX: zT,
              prevWidth: iT
            }, IT && IT.length ? function(TT) {
              var oT = TT.data,
                IT = TT.startIndex,
                iT = TT.endIndex,
                zT = TT.x,
                kT = TT.width,
                WT = TT.travellerWidth;
              if (!oT || !oT.length) return {};
              var XT = oT.length,
                BT = (0, uT.e)().domain(FT()(0, XT)).range([zT, zT + kT - WT]),
                ST = BT.domain().map((function(TT) {
                  return BT(TT)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: BT(IT),
                endX: BT(iT),
                scale: BT,
                scaleValues: ST
              }
            }({
              data: IT,
              width: iT,
              x: zT,
              travellerWidth: kT,
              startIndex: XT,
              endIndex: BT
            }) : {
              scale: null,
              scaleValues: null
            });
            if (oT.scale && (iT !== oT.prevWidth || zT !== oT.prevX || kT !== oT.prevTravellerWidth)) {
              oT.scale.range([zT, zT + iT - kT]);
              var ST = oT.scale.domain().map((function(TT) {
                return oT.scale(TT)
              }));
              return {
                prevData: IT,
                prevTravellerWidth: kT,
                prevUpdateId: WT,
                prevX: zT,
                prevWidth: iT,
                startX: oT.scale(TT.startIndex),
                endX: oT.scale(TT.endIndex),
                scaleValues: ST
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(TT, oT) {
            for (var IT = 0, iT = TT.length - 1; iT - IT > 1;) {
              var zT = Math.floor((IT + iT) / 2);
              TT[zT] > oT ? iT = zT : IT = zT
            }
            return oT >= TT[iT] ? iT : IT
          }
        }], zT && nT(IT.prototype, zT), kT && nT(IT, kT), Object.defineProperty(IT, "prototype", {
          writable: !1
        }), IT;
        var IT, zT, kT
      }(iT.PureComponent);
    tT(bT, "displayName", "Brush"), tT(bT, "defaultProps", {
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
    var yT = IT(5616),
      NT = IT(5691),
      PT = IT(5704),
      dT = IT(5717),
      VT = IT(5724),
      To = IT(4911);

    function oo() {
      return oo = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, oo.apply(this, arguments)
    }

    function Io(TT) {
      return Io = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, Io(TT)
    }

    function io(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function zo(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? io(Object(IT), !0).forEach((function(oT) {
          So(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : io(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function ko(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, Do(iT.key), iT)
      }
    }

    function Wo(TT, oT, IT) {
      return oT = Bo(oT),
        function(TT, oT) {
          if (oT && ("object" === Io(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, Xo() ? Reflect.construct(oT, IT || [], Bo(TT).constructor) : oT.apply(TT, IT))
    }

    function Xo() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (Xo = function() {
        return !!TT
      })()
    }

    function Bo(TT) {
      return Bo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, Bo(TT)
    }

    function Fo(TT, oT) {
      return Fo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, Fo(TT, oT)
    }

    function So(TT, oT, IT) {
      return (oT = Do(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function Do(TT) {
      var oT = function(TT, oT) {
        if ("object" != Io(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != Io(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == Io(oT) ? oT : oT + ""
    }
    var Lo = function(TT) {
      function oT() {
        return function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, oT), Wo(this, oT, arguments)
      }
      return function(TT, oT) {
        if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(oT && oT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), oT && Fo(TT, oT)
      }(oT, TT), IT = oT, (zT = [{
        key: "render",
        value: function() {
          var TT = this.props,
            IT = TT.x,
            zT = TT.y,
            kT = TT.r,
            WT = TT.alwaysShow,
            XT = TT.clipPathId,
            BT = (0, fT.y)(IT),
            FT = (0, fT.y)(zT);
          if ((0, To.b)(void 0 === WT, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !BT || !FT) return null;
          var ST = function(TT) {
            var oT = TT.x,
              IT = TT.y,
              iT = TT.xAxis,
              zT = TT.yAxis,
              kT = (0, VT.b)({
                x: iT.scale,
                y: zT.scale
              }),
              WT = kT.apply({
                x: oT,
                y: IT
              }, {
                bandAware: !0
              });
            return (0, dT.b)(TT, "discard") && !kT.isInRange(WT) ? null : WT
          }(this.props);
          if (!ST) return null;
          var DT = ST.x,
            LT = ST.y,
            xT = this.props,
            cT = xT.shape,
            KT = xT.className,
            rT = zo(zo({
              clipPath: (0, dT.b)(this.props, "hidden") ? "url(#".concat(XT, ")") : void 0
            }, (0, RT.d)(this.props, !0)), {}, {
              cx: DT,
              cy: LT
            });
          return iT.createElement(gT.e, {
            className: (0, MT.c)("recharts-reference-dot", KT)
          }, oT.renderDot(cT, rT), PT.c.renderCallByParent(this.props, {
            x: DT - kT,
            y: LT - kT,
            width: 2 * kT,
            height: 2 * kT
          }))
        }
      }]) && ko(IT.prototype, zT), kT && ko(IT, kT), Object.defineProperty(IT, "prototype", {
        writable: !1
      }), IT;
      var IT, zT, kT
    }(iT.Component);
    So(Lo, "displayName", "ReferenceDot"), So(Lo, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), So(Lo, "renderDot", (function(TT, oT) {
      return iT.isValidElement(TT) ? iT.cloneElement(TT, oT) : XT()(TT) ? TT(oT) : iT.createElement(mT.b, oo({}, oT, {
        cx: oT.cx,
        cy: oT.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var xo = IT(5814);

    function co() {
      return co = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, co.apply(this, arguments)
    }

    function Ko(TT) {
      return Ko = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, Ko(TT)
    }

    function Mo(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function ro(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? Mo(Object(IT), !0).forEach((function(oT) {
          eo(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : Mo(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function Ao(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, Ro(iT.key), iT)
      }
    }

    function go(TT, oT, IT) {
      return oT = wo(oT),
        function(TT, oT) {
          if (oT && ("object" === Ko(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, ho() ? Reflect.construct(oT, IT || [], wo(TT).constructor) : oT.apply(TT, IT))
    }

    function ho() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (ho = function() {
        return !!TT
      })()
    }

    function wo(TT) {
      return wo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, wo(TT)
    }

    function mo(TT, oT) {
      return mo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, mo(TT, oT)
    }

    function eo(TT, oT, IT) {
      return (oT = Ro(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function Ro(TT) {
      var oT = function(TT, oT) {
        if ("object" != Ko(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != Ko(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == Ko(oT) ? oT : oT + ""
    }
    var uo = function(TT) {
      function oT() {
        return function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, oT), go(this, oT, arguments)
      }
      return function(TT, oT) {
        if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(oT && oT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), oT && mo(TT, oT)
      }(oT, TT), IT = oT, (zT = [{
        key: "render",
        value: function() {
          var TT = this.props,
            IT = TT.x1,
            zT = TT.x2,
            kT = TT.y1,
            WT = TT.y2,
            XT = TT.className,
            BT = TT.alwaysShow,
            FT = TT.clipPathId;
          (0, To.b)(void 0 === BT, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var ST = (0, fT.y)(IT),
            DT = (0, fT.y)(zT),
            LT = (0, fT.y)(kT),
            xT = (0, fT.y)(WT),
            cT = this.props.shape;
          if (!ST && !DT && !LT && !xT && !cT) return null;
          var KT = function(TT, oT, IT, iT, zT) {
            var kT = zT.x1,
              WT = zT.x2,
              XT = zT.y1,
              BT = zT.y2,
              FT = zT.xAxis,
              ST = zT.yAxis;
            if (!FT || !ST) return null;
            var DT = (0, VT.b)({
                x: FT.scale,
                y: ST.scale
              }),
              LT = {
                x: TT ? DT.x.apply(kT, {
                  position: "start"
                }) : DT.x.rangeMin,
                y: IT ? DT.y.apply(XT, {
                  position: "start"
                }) : DT.y.rangeMin
              },
              xT = {
                x: oT ? DT.x.apply(WT, {
                  position: "end"
                }) : DT.x.rangeMax,
                y: iT ? DT.y.apply(BT, {
                  position: "end"
                }) : DT.y.rangeMax
              };
            return !(0, dT.b)(zT, "discard") || DT.isInRange(LT) && DT.isInRange(xT) ? (0, VT.m)(LT, xT) : null
          }(ST, DT, LT, xT, this.props);
          if (!KT && !cT) return null;
          var rT = (0, dT.b)(this.props, "hidden") ? "url(#".concat(FT, ")") : void 0;
          return iT.createElement(gT.e, {
            className: (0, MT.c)("recharts-reference-area", XT)
          }, oT.renderRect(cT, ro(ro({
            clipPath: rT
          }, (0, RT.d)(this.props, !0)), KT)), PT.c.renderCallByParent(this.props, KT))
        }
      }]) && Ao(IT.prototype, zT), kT && Ao(IT, kT), Object.defineProperty(IT, "prototype", {
        writable: !1
      }), IT;
      var IT, zT, kT
    }(iT.Component);

    function vo(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return Eo(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return Eo(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return Eo(TT, oT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Eo(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }
    eo(uo, "displayName", "ReferenceArea"), eo(uo, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), eo(uo, "renderRect", (function(TT, oT) {
      return iT.isValidElement(TT) ? iT.cloneElement(TT, oT) : XT()(TT) ? TT(oT) : iT.createElement(eT.b, co({}, oT, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var fo = function(TT, oT, IT, iT, zT) {
        var kT = (0, RT.e)(TT, xo.c),
          WT = (0, RT.e)(TT, Lo),
          XT = [].concat(vo(kT), vo(WT)),
          BT = (0, RT.e)(TT, uo),
          FT = "".concat(iT, "Id"),
          ST = iT[0],
          DT = oT;
        if (XT.length && (DT = XT.reduce((function(TT, oT) {
            if (oT.props[FT] === IT && (0, dT.b)(oT.props, "extendDomain") && (0, fT.C)(oT.props[ST])) {
              var iT = oT.props[ST];
              return [Math.min(TT[0], iT), Math.max(TT[1], iT)]
            }
            return TT
          }), DT)), BT.length) {
          var LT = "".concat(ST, "1"),
            xT = "".concat(ST, "2");
          DT = BT.reduce((function(TT, oT) {
            if (oT.props[FT] === IT && (0, dT.b)(oT.props, "extendDomain") && (0, fT.C)(oT.props[LT]) && (0, fT.C)(oT.props[xT])) {
              var iT = oT.props[LT],
                zT = oT.props[xT];
              return [Math.min(TT[0], iT, zT), Math.max(TT[1], iT, zT)]
            }
            return TT
          }), DT)
        }
        return zT && zT.length && (DT = zT.reduce((function(TT, oT) {
          return (0, fT.C)(oT) ? [Math.min(TT[0], oT), Math.max(TT[1], oT)] : TT
        }), DT)), DT
      },
      Co = IT(5712),
      jo = IT(4937),
      Jo = IT(20),
      Uo = new(IT.n(Jo)()),
      ao = "recharts.syncMouseEvents",
      Yo = IT(4945);

    function Qo(TT) {
      return Qo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, Qo(TT)
    }

    function Oo(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, no(iT.key), iT)
      }
    }

    function Ho(TT, oT, IT) {
      return (oT = no(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function no(TT) {
      var oT = function(TT, oT) {
        if ("object" != Qo(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != Qo(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == Qo(oT) ? oT : oT + ""
    }
    var qo = function() {
      return TT = function TT() {
        ! function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, TT), Ho(this, "activeIndex", 0), Ho(this, "coordinateList", []), Ho(this, "layout", "horizontal")
      }, (oT = [{
        key: "setDetails",
        value: function(TT) {
          var oT, IT = TT.coordinateList,
            iT = void 0 === IT ? null : IT,
            zT = TT.container,
            kT = void 0 === zT ? null : zT,
            WT = TT.layout,
            XT = void 0 === WT ? null : WT,
            BT = TT.offset,
            FT = void 0 === BT ? null : BT,
            ST = TT.mouseHandlerCallback,
            DT = void 0 === ST ? null : ST;
          this.coordinateList = null !== (oT = null !== iT && void 0 !== iT ? iT : this.coordinateList) && void 0 !== oT ? oT : [], this.container = null !== kT && void 0 !== kT ? kT : this.container, this.layout = null !== XT && void 0 !== XT ? XT : this.layout, this.offset = null !== FT && void 0 !== FT ? FT : this.offset, this.mouseHandlerCallback = null !== DT && void 0 !== DT ? DT : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
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
          var TT, oT;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var IT = this.container.getBoundingClientRect(),
              iT = IT.x,
              zT = IT.y,
              kT = IT.height,
              WT = this.coordinateList[this.activeIndex].coordinate,
              XT = (null === (TT = window) || void 0 === TT ? void 0 : TT.scrollX) || 0,
              BT = (null === (oT = window) || void 0 === oT ? void 0 : oT.scrollY) || 0,
              FT = iT + WT + XT,
              ST = zT + this.offset.top + kT / 2 + BT;
            this.mouseHandlerCallback({
              pageX: FT,
              pageY: ST
            })
          }
        }
      }]) && Oo(TT.prototype, oT), IT && Oo(TT, IT), Object.defineProperty(TT, "prototype", {
        writable: !1
      }), TT;
      var TT, oT, IT
    }();
    var Zo = IT(5783),
      so = IT(5849);

    function to(TT) {
      return to = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, to(TT)
    }
    var Go = ["x", "y", "top", "left", "width", "height", "className"];

    function po() {
      return po = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, po.apply(this, arguments)
    }

    function bo(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function yo(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != to(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != to(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == to(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function No(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }
    var Po = function(TT, oT, IT, iT, zT, kT) {
        return "M".concat(TT, ",").concat(zT, "v").concat(iT, "M").concat(kT, ",").concat(oT, "h").concat(IT)
      },
      Vo = function(TT) {
        var oT = TT.x,
          IT = void 0 === oT ? 0 : oT,
          zT = TT.y,
          kT = void 0 === zT ? 0 : zT,
          WT = TT.top,
          XT = void 0 === WT ? 0 : WT,
          BT = TT.left,
          FT = void 0 === BT ? 0 : BT,
          ST = TT.width,
          DT = void 0 === ST ? 0 : ST,
          LT = TT.height,
          xT = void 0 === LT ? 0 : LT,
          cT = TT.className,
          KT = function(TT) {
            for (var oT = 1; oT < arguments.length; oT++) {
              var IT = null != arguments[oT] ? arguments[oT] : {};
              oT % 2 ? bo(Object(IT), !0).forEach((function(oT) {
                yo(TT, oT, IT[oT])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : bo(Object(IT)).forEach((function(oT) {
                Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
              }))
            }
            return TT
          }({
            x: IT,
            y: kT,
            top: XT,
            left: FT,
            width: DT,
            height: xT
          }, No(TT, Go));
        return (0, fT.C)(IT) && (0, fT.C)(kT) && (0, fT.C)(DT) && (0, fT.C)(xT) && (0, fT.C)(XT) && (0, fT.C)(FT) ? iT.createElement("path", po({}, (0, RT.d)(KT, !0), {
          className: (0, MT.c)("recharts-cross", cT),
          d: Po(IT, kT, DT, xT, XT, FT)
        })) : null
      };

    function TI(TT) {
      var oT = TT.cx,
        IT = TT.cy,
        iT = TT.radius,
        zT = TT.startAngle,
        kT = TT.endAngle;
      return {
        points: [(0, Co.e)(oT, IT, iT, zT), (0, Co.e)(oT, IT, iT, kT)],
        cx: oT,
        cy: IT,
        radius: iT,
        startAngle: zT,
        endAngle: kT
      }
    }
    var oI = IT(5810);

    function II(TT, oT, IT) {
      var iT, zT, kT, WT;
      if ("horizontal" === TT) kT = iT = oT.x, zT = IT.top, WT = IT.top + IT.height;
      else if ("vertical" === TT) WT = zT = oT.y, iT = IT.left, kT = IT.left + IT.width;
      else if (null != oT.cx && null != oT.cy) {
        if ("centric" !== TT) return TI(oT);
        var XT = oT.cx,
          BT = oT.cy,
          FT = oT.innerRadius,
          ST = oT.outerRadius,
          DT = oT.angle,
          LT = (0, Co.e)(XT, BT, FT, DT),
          xT = (0, Co.e)(XT, BT, ST, DT);
        iT = LT.x, zT = LT.y, kT = xT.x, WT = xT.y
      }
      return [{
        x: iT,
        y: zT
      }, {
        x: kT,
        y: WT
      }]
    }

    function iI(TT) {
      return iI = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, iI(TT)
    }

    function zI(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function kI(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? zI(Object(IT), !0).forEach((function(oT) {
          WI(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : zI(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function WI(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != iI(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != iI(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == iI(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function XI(TT) {
      var oT, IT, zT, kT = TT.element,
        WT = TT.tooltipEventType,
        XT = TT.isActive,
        BT = TT.activeCoordinate,
        FT = TT.activePayload,
        ST = TT.offset,
        DT = TT.activeTooltipIndex,
        LT = TT.tooltipAxisBandSize,
        xT = TT.layout,
        cT = TT.chartName,
        KT = null !== (oT = kT.props.cursor) && void 0 !== oT ? oT : null === (IT = kT.type.defaultProps) || void 0 === IT ? void 0 : IT.cursor;
      if (!kT || !KT || !XT || !BT || "ScatterChart" !== cT && "axis" !== WT) return null;
      var rT = so.d;
      if ("ScatterChart" === cT) zT = BT, rT = Vo;
      else if ("BarChart" === cT) zT = function(TT, oT, IT, iT) {
        var zT = iT / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === TT ? oT.x - zT : IT.left + .5,
          y: "horizontal" === TT ? IT.top + .5 : oT.y - zT,
          width: "horizontal" === TT ? iT : IT.width - 1,
          height: "horizontal" === TT ? IT.height - 1 : iT
        }
      }(xT, BT, ST, LT), rT = eT.b;
      else if ("radial" === xT) {
        var AT = TI(BT),
          gT = AT.cx,
          hT = AT.cy,
          wT = AT.radius;
        zT = {
          cx: gT,
          cy: hT,
          startAngle: AT.startAngle,
          endAngle: AT.endAngle,
          innerRadius: wT,
          outerRadius: wT
        }, rT = oI.c
      } else zT = {
        points: II(xT, BT, ST)
      }, rT = so.d;
      var mT = kI(kI(kI(kI({
        stroke: "#ccc",
        pointerEvents: "none"
      }, ST), zT), (0, RT.d)(KT, !1)), {}, {
        payload: FT,
        payloadIndex: DT,
        className: (0, MT.c)("recharts-tooltip-cursor", KT.className)
      });
      return (0, iT.isValidElement)(KT) ? (0, iT.cloneElement)(KT, mT) : (0, iT.createElement)(rT, mT)
    }
    var BI = IT(5826),
      FI = ["item"],
      SI = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function DI(TT) {
      return DI = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, DI(TT)
    }

    function LI() {
      return LI = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, LI.apply(this, arguments)
    }

    function xI(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        var IT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != IT) {
          var iT, zT, kT, WT, XT = [],
            BT = !0,
            FT = !1;
          try {
            if (kT = (IT = IT.call(TT)).next, 0 === oT) {
              if (Object(IT) !== IT) return;
              BT = !1
            } else
              for (; !(BT = (iT = kT.call(IT)).done) && (XT.push(iT.value), XT.length !== oT); BT = !0);
          } catch (TT) {
            FT = !0, zT = TT
          } finally {
            try {
              if (!BT && null != IT.return && (WT = IT.return(), Object(WT) !== WT)) return
            } finally {
              if (FT) throw zT
            }
          }
          return XT
        }
      }(TT, oT) || wI(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cI(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function KI(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, vI(iT.key), iT)
      }
    }

    function MI(TT, oT, IT) {
      return oT = AI(oT),
        function(TT, oT) {
          if (oT && ("object" === DI(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, rI() ? Reflect.construct(oT, IT || [], AI(TT).constructor) : oT.apply(TT, IT))
    }

    function rI() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (rI = function() {
        return !!TT
      })()
    }

    function AI(TT) {
      return AI = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, AI(TT)
    }

    function gI(TT, oT) {
      return gI = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, gI(TT, oT)
    }

    function hI(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return mI(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || wI(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wI(TT, oT) {
      if (TT) {
        if ("string" === typeof TT) return mI(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        return "Object" === IT && TT.constructor && (IT = TT.constructor.name), "Map" === IT || "Set" === IT ? Array.from(TT) : "Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT) ? mI(TT, oT) : void 0
      }
    }

    function mI(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function eI(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function RI(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? eI(Object(IT), !0).forEach((function(oT) {
          uI(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : eI(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function uI(TT, oT, IT) {
      return (oT = vI(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function vI(TT) {
      var oT = function(TT, oT) {
        if ("object" != DI(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != DI(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == DI(oT) ? oT : oT + ""
    }
    var EI = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      fI = {
        width: "100%",
        height: "100%"
      },
      CI = {
        x: 0,
        y: 0
      };

    function jI(TT) {
      return TT
    }
    var JI = function(TT, oT) {
      var IT = oT.graphicalItems,
        iT = oT.dataStartIndex,
        zT = oT.dataEndIndex,
        kT = (null !== IT && void 0 !== IT ? IT : []).reduce((function(TT, oT) {
          var IT = oT.props.data;
          return IT && IT.length ? [].concat(hI(TT), hI(IT)) : TT
        }), []);
      return kT.length > 0 ? kT : TT && TT.length && (0, fT.C)(iT) && (0, fT.C)(zT) ? TT.slice(iT, zT + 1) : []
    };

    function UI(TT) {
      return "number" === TT ? [0, "auto"] : void 0
    }
    var aI = function(TT, oT, IT, iT) {
        var zT = TT.graphicalItems,
          kT = TT.tooltipAxis,
          WT = JI(oT, TT);
        return IT < 0 || !zT || !zT.length || IT >= WT.length ? null : zT.reduce((function(zT, XT) {
          var BT, FT, ST = null !== (BT = XT.props.data) && void 0 !== BT ? BT : oT;
          if (ST && TT.dataStartIndex + TT.dataEndIndex !== 0 && TT.dataEndIndex - TT.dataStartIndex >= IT && (ST = ST.slice(TT.dataStartIndex, TT.dataEndIndex + 1)), kT.dataKey && !kT.allowDuplicatedCategory) {
            var DT = void 0 === ST ? WT : ST;
            FT = (0, fT.i)(DT, kT.dataKey, iT)
          } else FT = ST && ST[IT] || WT[IT];
          return FT ? [].concat(hI(zT), [(0, ET.X)(XT, FT)]) : zT
        }), [])
      },
      YI = function(TT, oT, IT, iT) {
        var zT = iT || {
            x: TT.chartX,
            y: TT.chartY
          },
          kT = function(TT, oT) {
            return "horizontal" === oT ? TT.x : "vertical" === oT ? TT.y : "centric" === oT ? TT.angle : TT.radius
          }(zT, IT),
          WT = TT.orderedTooltipTicks,
          XT = TT.tooltipAxis,
          BT = TT.tooltipTicks,
          FT = (0, ET.i)(kT, WT, BT, XT);
        if (FT >= 0 && BT) {
          var ST = BT[FT] && BT[FT].value,
            DT = aI(TT, oT, FT, ST),
            LT = function(TT, oT, IT, iT) {
              var zT = oT.find((function(TT) {
                return TT && TT.index === IT
              }));
              if (zT) {
                if ("horizontal" === TT) return {
                  x: zT.coordinate,
                  y: iT.y
                };
                if ("vertical" === TT) return {
                  x: iT.x,
                  y: zT.coordinate
                };
                if ("centric" === TT) {
                  var kT = zT.coordinate,
                    WT = iT.radius;
                  return RI(RI(RI({}, iT), (0, Co.e)(iT.cx, iT.cy, WT, kT)), {}, {
                    angle: kT,
                    radius: WT
                  })
                }
                var XT = zT.coordinate,
                  BT = iT.angle;
                return RI(RI(RI({}, iT), (0, Co.e)(iT.cx, iT.cy, XT, BT)), {}, {
                  angle: BT,
                  radius: XT
                })
              }
              return CI
            }(IT, WT, FT, zT);
          return {
            activeTooltipIndex: FT,
            activeLabel: ST,
            activePayload: DT,
            activeCoordinate: LT
          }
        }
        return null
      },
      QI = function(TT, oT) {
        var IT = oT.axes,
          iT = oT.graphicalItems,
          zT = oT.axisType,
          WT = oT.axisIdKey,
          XT = oT.stackGroups,
          BT = oT.dataStartIndex,
          ST = oT.dataEndIndex,
          DT = TT.layout,
          LT = TT.children,
          xT = TT.stackOffset,
          cT = (0, ET.ab)(DT, zT);
        return IT.reduce((function(oT, IT) {
          var KT, MT = void 0 !== IT.type.defaultProps ? RI(RI({}, IT.type.defaultProps), IT.props) : IT.props,
            rT = MT.type,
            AT = MT.dataKey,
            gT = MT.allowDataOverflow,
            hT = MT.allowDuplicatedCategory,
            wT = MT.scale,
            mT = MT.ticks,
            eT = MT.includeHidden,
            RT = MT[WT];
          if (oT[RT]) return oT;
          var uT, vT, CT, jT = JI(TT.data, {
              graphicalItems: iT.filter((function(TT) {
                var oT;
                return (WT in TT.props ? TT.props[WT] : null === (oT = TT.type.defaultProps) || void 0 === oT ? void 0 : oT[WT]) === RT
              })),
              dataStartIndex: BT,
              dataEndIndex: ST
            }),
            JT = jT.length;
          (function(TT, oT, IT) {
            if ("number" === IT && !0 === oT && Array.isArray(TT)) {
              var iT = null === TT || void 0 === TT ? void 0 : TT[0],
                zT = null === TT || void 0 === TT ? void 0 : TT[1];
              if (iT && zT && (0, fT.C)(iT) && (0, fT.C)(zT)) return !0
            }
            return !1
          })(MT.domain, gT, rT) && (uT = (0, ET.ib)(MT.domain, null, gT), !cT || "number" !== rT && "auto" === wT || (CT = (0, ET.E)(jT, AT, "category")));
          var UT = UI(rT);
          if (!uT || 0 === uT.length) {
            var aT, YT = null !== (aT = MT.domain) && void 0 !== aT ? aT : UT;
            if (AT) {
              if (uT = (0, ET.E)(jT, AT, rT), "category" === rT && cT) {
                var QT = (0, fT.s)(uT);
                hT && QT ? (vT = uT, uT = FT()(0, JT)) : hT || (uT = (0, ET.bb)(YT, uT, IT).reduce((function(TT, oT) {
                  return TT.indexOf(oT) >= 0 ? TT : [].concat(hI(TT), [oT])
                }), []))
              } else if ("category" === rT) uT = hT ? uT.filter((function(TT) {
                return "" !== TT && !kT()(TT)
              })) : (0, ET.bb)(YT, uT, IT).reduce((function(TT, oT) {
                return TT.indexOf(oT) >= 0 || "" === oT || kT()(oT) ? TT : [].concat(hI(TT), [oT])
              }), []);
              else if ("number" === rT) {
                var OT = (0, ET.cb)(jT, iT.filter((function(TT) {
                  var oT, IT, iT = WT in TT.props ? TT.props[WT] : null === (oT = TT.type.defaultProps) || void 0 === oT ? void 0 : oT[WT],
                    zT = "hide" in TT.props ? TT.props.hide : null === (IT = TT.type.defaultProps) || void 0 === IT ? void 0 : IT.hide;
                  return iT === RT && (eT || !zT)
                })), AT, zT, DT);
                OT && (uT = OT)
              }!cT || "number" !== rT && "auto" === wT || (CT = (0, ET.E)(jT, AT, "category"))
            } else uT = cT ? FT()(0, JT) : XT && XT[RT] && XT[RT].hasStack && "number" === rT ? "expand" === xT ? [0, 1] : (0, ET.I)(XT[RT].stackGroups, BT, ST) : (0, ET.H)(jT, iT.filter((function(TT) {
              var oT = WT in TT.props ? TT.props[WT] : TT.type.defaultProps[WT],
                IT = "hide" in TT.props ? TT.props.hide : TT.type.defaultProps.hide;
              return oT === RT && (eT || !IT)
            })), rT, DT, !0);
            if ("number" === rT) uT = fo(LT, uT, RT, zT, mT), YT && (uT = (0, ET.ib)(YT, uT, gT));
            else if ("category" === rT && YT) {
              var HT = YT;
              uT.every((function(TT) {
                return HT.indexOf(TT) >= 0
              })) && (uT = HT)
            }
          }
          return RI(RI({}, oT), {}, uI({}, RT, RI(RI({}, MT), {}, {
            axisType: zT,
            domain: uT,
            categoricalDomain: CT,
            duplicateDomain: vT,
            originalDomain: null !== (KT = MT.domain) && void 0 !== KT ? KT : UT,
            isCategorical: cT,
            layout: DT
          })))
        }), {})
      },
      OI = function(TT, oT) {
        var IT = oT.axisType,
          iT = void 0 === IT ? "xAxis" : IT,
          zT = oT.AxisComp,
          kT = oT.graphicalItems,
          WT = oT.stackGroups,
          XT = oT.dataStartIndex,
          BT = oT.dataEndIndex,
          ST = TT.children,
          LT = "".concat(iT, "Id"),
          xT = (0, RT.e)(ST, zT),
          cT = {};
        return xT && xT.length ? cT = QI(TT, {
          axes: xT,
          graphicalItems: kT,
          axisType: iT,
          axisIdKey: LT,
          stackGroups: WT,
          dataStartIndex: XT,
          dataEndIndex: BT
        }) : kT && kT.length && (cT = function(TT, oT) {
          var IT = oT.graphicalItems,
            iT = oT.Axis,
            zT = oT.axisType,
            kT = oT.axisIdKey,
            WT = oT.stackGroups,
            XT = oT.dataStartIndex,
            BT = oT.dataEndIndex,
            ST = TT.layout,
            LT = TT.children,
            xT = JI(TT.data, {
              graphicalItems: IT,
              dataStartIndex: XT,
              dataEndIndex: BT
            }),
            cT = xT.length,
            KT = (0, ET.ab)(ST, zT),
            MT = -1;
          return IT.reduce((function(TT, oT) {
            var rT, AT = (void 0 !== oT.type.defaultProps ? RI(RI({}, oT.type.defaultProps), oT.props) : oT.props)[kT],
              gT = UI("number");
            return TT[AT] ? TT : (MT++, KT ? rT = FT()(0, cT) : WT && WT[AT] && WT[AT].hasStack ? (rT = (0, ET.I)(WT[AT].stackGroups, XT, BT), rT = fo(LT, rT, AT, zT)) : (rT = (0, ET.ib)(gT, (0, ET.H)(xT, IT.filter((function(TT) {
              var oT, IT, iT = kT in TT.props ? TT.props[kT] : null === (oT = TT.type.defaultProps) || void 0 === oT ? void 0 : oT[kT],
                zT = "hide" in TT.props ? TT.props.hide : null === (IT = TT.type.defaultProps) || void 0 === IT ? void 0 : IT.hide;
              return iT === AT && !zT
            })), "number", ST), iT.defaultProps.allowDataOverflow), rT = fo(LT, rT, AT, zT)), RI(RI({}, TT), {}, uI({}, AT, RI(RI({
              axisType: zT
            }, iT.defaultProps), {}, {
              hide: !0,
              orientation: DT()(EI, "".concat(zT, ".").concat(MT % 2), null),
              domain: rT,
              originalDomain: gT,
              isCategorical: KT,
              layout: ST
            }))))
          }), {})
        }(TT, {
          Axis: zT,
          graphicalItems: kT,
          axisType: iT,
          axisIdKey: LT,
          stackGroups: WT,
          dataStartIndex: XT,
          dataEndIndex: BT
        })), cT
      },
      HI = function(TT) {
        var oT = TT.children,
          IT = TT.defaultShowTooltip,
          iT = (0, RT.i)(oT, bT),
          zT = 0,
          kT = 0;
        return TT.data && 0 !== TT.data.length && (kT = TT.data.length - 1), iT && iT.props && (iT.props.startIndex >= 0 && (zT = iT.props.startIndex), iT.props.endIndex >= 0 && (kT = iT.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: zT,
          dataEndIndex: kT,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(IT)
        }
      },
      nI = function(TT) {
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
      qI = function(TT, oT) {
        return "xAxis" === oT ? TT[oT].width : "yAxis" === oT ? TT[oT].height : void 0
      },
      ZI = function(TT) {
        var oT = TT.chartName,
          IT = TT.GraphicalChild,
          zT = TT.defaultTooltipEventType,
          WT = void 0 === zT ? "axis" : zT,
          BT = TT.validateTooltipEventTypes,
          FT = void 0 === BT ? ["axis"] : BT,
          ST = TT.axisComponents,
          LT = TT.legendContent,
          cT = TT.formatAxisMap,
          uT = TT.defaultProps,
          vT = function(TT, oT) {
            var IT = oT.graphicalItems,
              iT = oT.stackGroups,
              zT = oT.offset,
              WT = oT.updateId,
              XT = oT.dataStartIndex,
              BT = oT.dataEndIndex,
              FT = TT.barSize,
              DT = TT.layout,
              LT = TT.barGap,
              xT = TT.barCategoryGap,
              cT = TT.maxBarSize,
              KT = nI(DT),
              MT = KT.numericAxisName,
              AT = KT.cateAxisName,
              gT = function(TT) {
                return !(!TT || !TT.length) && TT.some((function(TT) {
                  var oT = (0, RT.j)(TT && TT.type);
                  return oT && oT.indexOf("Bar") >= 0
                }))
              }(IT),
              hT = [];
            return IT.forEach((function(IT, KT) {
              var wT = JI(TT.data, {
                  graphicalItems: [IT],
                  dataStartIndex: XT,
                  dataEndIndex: BT
                }),
                mT = void 0 !== IT.type.defaultProps ? RI(RI({}, IT.type.defaultProps), IT.props) : IT.props,
                eT = mT.dataKey,
                uT = mT.maxBarSize,
                vT = mT["".concat(MT, "Id")],
                fT = mT["".concat(AT, "Id")],
                CT = ST.reduce((function(TT, IT) {
                  var iT = oT["".concat(IT.axisType, "Map")],
                    zT = mT["".concat(IT.axisType, "Id")];
                  iT && iT[zT] || "zAxis" === IT.axisType || (0, rT.c)(!1);
                  var kT = iT[zT];
                  return RI(RI({}, TT), {}, uI(uI({}, IT.axisType, kT), "".concat(IT.axisType, "Ticks"), (0, ET.S)(kT)))
                }), {}),
                jT = CT[AT],
                JT = CT["".concat(AT, "Ticks")],
                UT = iT && iT[vT] && iT[vT].hasStack && (0, ET.P)(IT, iT[vT].stackGroups),
                aT = (0, RT.j)(IT.type).indexOf("Bar") >= 0,
                YT = (0, ET.q)(jT, JT),
                QT = [],
                OT = gT && (0, ET.t)({
                  barSize: FT,
                  stackGroups: iT,
                  totalSize: qI(CT, AT)
                });
              if (aT) {
                var HT, nT, qT = kT()(uT) ? cT : uT,
                  ZT = null !== (HT = null !== (nT = (0, ET.q)(jT, JT, !0)) && void 0 !== nT ? nT : qT) && void 0 !== HT ? HT : 0;
                QT = (0, ET.s)({
                  barGap: LT,
                  barCategoryGap: xT,
                  bandSize: ZT !== YT ? ZT : YT,
                  sizeList: OT[fT],
                  maxBarSize: qT
                }), ZT !== YT && (QT = QT.map((function(TT) {
                  return RI(RI({}, TT), {}, {
                    position: RI(RI({}, TT.position), {}, {
                      offset: TT.position.offset - ZT / 2
                    })
                  })
                })))
              }
              var lT = IT && IT.type && IT.type.getComposedData;
              lT && hT.push({
                props: RI(RI({}, lT(RI(RI({}, CT), {}, {
                  displayedData: wT,
                  props: TT,
                  dataKey: eT,
                  item: IT,
                  bandSize: YT,
                  barPosition: QT,
                  offset: zT,
                  stackedData: UT,
                  layout: DT,
                  dataStartIndex: XT,
                  dataEndIndex: BT
                }))), {}, uI(uI(uI({
                  key: IT.key || "item-".concat(KT)
                }, MT, CT[MT]), AT, CT[AT]), "animationId", WT)),
                childIndex: (0, RT.w)(IT, TT.children),
                item: IT
              })
            })), hT
          },
          CT = function(TT, iT) {
            var zT = TT.props,
              kT = TT.dataStartIndex,
              WT = TT.dataEndIndex,
              XT = TT.updateId;
            if (!(0, RT.D)({
                props: zT
              })) return null;
            var BT = zT.children,
              FT = zT.layout,
              LT = zT.stackOffset,
              KT = zT.data,
              MT = zT.reverseStackOrder,
              rT = nI(FT),
              AT = rT.numericAxisName,
              gT = rT.cateAxisName,
              hT = (0, RT.e)(BT, IT),
              mT = (0, ET.O)(KT, hT, "".concat(AT, "Id"), "".concat(gT, "Id"), LT, MT),
              eT = ST.reduce((function(TT, oT) {
                var IT = "".concat(oT.axisType, "Map");
                return RI(RI({}, TT), {}, uI({}, IT, OI(zT, RI(RI({}, oT), {}, {
                  graphicalItems: hT,
                  stackGroups: oT.axisType === AT && mT,
                  dataStartIndex: kT,
                  dataEndIndex: WT
                }))))
              }), {}),
              uT = function(TT, oT) {
                var IT = TT.props,
                  iT = TT.graphicalItems,
                  zT = TT.xAxisMap,
                  kT = void 0 === zT ? {} : zT,
                  WT = TT.yAxisMap,
                  XT = void 0 === WT ? {} : WT,
                  BT = IT.width,
                  FT = IT.height,
                  ST = IT.children,
                  LT = IT.margin || {},
                  xT = (0, RT.i)(ST, bT),
                  cT = (0, RT.i)(ST, wT.d),
                  KT = Object.keys(XT).reduce((function(TT, oT) {
                    var IT = XT[oT],
                      iT = IT.orientation;
                    return IT.mirror || IT.hide ? TT : RI(RI({}, TT), {}, uI({}, iT, TT[iT] + IT.width))
                  }), {
                    left: LT.left || 0,
                    right: LT.right || 0
                  }),
                  MT = Object.keys(kT).reduce((function(TT, oT) {
                    var IT = kT[oT],
                      iT = IT.orientation;
                    return IT.mirror || IT.hide ? TT : RI(RI({}, TT), {}, uI({}, iT, DT()(TT, "".concat(iT)) + IT.height))
                  }), {
                    top: LT.top || 0,
                    bottom: LT.bottom || 0
                  }),
                  rT = RI(RI({}, MT), KT),
                  AT = rT.bottom;
                xT && (rT.bottom += xT.props.height || bT.defaultProps.height), cT && oT && (rT = (0, ET.e)(rT, iT, IT, oT));
                var gT = BT - rT.left - rT.right,
                  hT = FT - rT.top - rT.bottom;
                return RI(RI({
                  brushBottom: AT
                }, rT), {}, {
                  width: Math.max(gT, 0),
                  height: Math.max(hT, 0)
                })
              }(RI(RI({}, eT), {}, {
                props: zT,
                graphicalItems: hT
              }), null === iT || void 0 === iT ? void 0 : iT.legendBBox);
            Object.keys(eT).forEach((function(TT) {
              eT[TT] = cT(zT, eT[TT], uT, TT.replace("Map", ""), oT)
            }));
            var CT = function(TT) {
                var oT = (0, fT.j)(TT),
                  IT = (0, ET.S)(oT, !1, !0);
                return {
                  tooltipTicks: IT,
                  orderedTooltipTicks: xT()(IT, (function(TT) {
                    return TT.coordinate
                  })),
                  tooltipAxis: oT,
                  tooltipAxisBandSize: (0, ET.q)(oT, IT)
                }
              }(eT["".concat(gT, "Map")]),
              jT = vT(zT, RI(RI({}, eT), {}, {
                dataStartIndex: kT,
                dataEndIndex: WT,
                updateId: XT,
                graphicalItems: hT,
                stackGroups: mT,
                offset: uT
              }));
            return RI(RI({
              formattedGraphicalItems: jT,
              graphicalItems: hT,
              offset: uT,
              stackGroups: mT
            }, CT), eT)
          },
          jT = function(TT) {
            function IT(TT) {
              var zT, WT, BT;
              return function(TT, oT) {
                if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
              }(this, IT), uI(BT = MI(this, IT, [TT]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), uI(BT, "accessibilityManager", new qo), uI(BT, "handleLegendBBoxUpdate", (function(TT) {
                if (TT) {
                  var oT = BT.state,
                    IT = oT.dataStartIndex,
                    iT = oT.dataEndIndex,
                    zT = oT.updateId;
                  BT.setState(RI({
                    legendBBox: TT
                  }, CT({
                    props: BT.props,
                    dataStartIndex: IT,
                    dataEndIndex: iT,
                    updateId: zT
                  }, RI(RI({}, BT.state), {}, {
                    legendBBox: TT
                  }))))
                }
              })), uI(BT, "handleReceiveSyncEvent", (function(TT, oT, IT) {
                if (BT.props.syncId === TT) {
                  if (IT === BT.eventEmitterSymbol && "function" !== typeof BT.props.syncMethod) return;
                  BT.applySyncEvent(oT)
                }
              })), uI(BT, "handleBrushChange", (function(TT) {
                var oT = TT.startIndex,
                  IT = TT.endIndex;
                if (oT !== BT.state.dataStartIndex || IT !== BT.state.dataEndIndex) {
                  var iT = BT.state.updateId;
                  BT.setState((function() {
                    return RI({
                      dataStartIndex: oT,
                      dataEndIndex: IT
                    }, CT({
                      props: BT.props,
                      dataStartIndex: oT,
                      dataEndIndex: IT,
                      updateId: iT
                    }, BT.state))
                  })), BT.triggerSyncEvent({
                    dataStartIndex: oT,
                    dataEndIndex: IT
                  })
                }
              })), uI(BT, "handleMouseEnter", (function(TT) {
                var oT = BT.getMouseInfo(TT);
                if (oT) {
                  var IT = RI(RI({}, oT), {}, {
                    isTooltipActive: !0
                  });
                  BT.setState(IT), BT.triggerSyncEvent(IT);
                  var iT = BT.props.onMouseEnter;
                  XT()(iT) && iT(IT, TT)
                }
              })), uI(BT, "triggeredAfterMouseMove", (function(TT) {
                var oT = BT.getMouseInfo(TT),
                  IT = oT ? RI(RI({}, oT), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                BT.setState(IT), BT.triggerSyncEvent(IT);
                var iT = BT.props.onMouseMove;
                XT()(iT) && iT(IT, TT)
              })), uI(BT, "handleItemMouseEnter", (function(TT) {
                BT.setState((function() {
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
              })), uI(BT, "handleItemMouseLeave", (function() {
                BT.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), uI(BT, "handleMouseMove", (function(TT) {
                TT.persist(), BT.throttleTriggeredAfterMouseMove(TT)
              })), uI(BT, "handleMouseLeave", (function(TT) {
                BT.throttleTriggeredAfterMouseMove.cancel();
                var oT = {
                  isTooltipActive: !1
                };
                BT.setState(oT), BT.triggerSyncEvent(oT);
                var IT = BT.props.onMouseLeave;
                XT()(IT) && IT(oT, TT)
              })), uI(BT, "handleOuterEvent", (function(TT) {
                var oT, IT = (0, RT.n)(TT),
                  iT = DT()(BT.props, "".concat(IT));
                IT && XT()(iT) && iT(null !== (oT = /.*touch.*/i.test(IT) ? BT.getMouseInfo(TT.changedTouches[0]) : BT.getMouseInfo(TT)) && void 0 !== oT ? oT : {}, TT)
              })), uI(BT, "handleClick", (function(TT) {
                var oT = BT.getMouseInfo(TT);
                if (oT) {
                  var IT = RI(RI({}, oT), {}, {
                    isTooltipActive: !0
                  });
                  BT.setState(IT), BT.triggerSyncEvent(IT);
                  var iT = BT.props.onClick;
                  XT()(iT) && iT(IT, TT)
                }
              })), uI(BT, "handleMouseDown", (function(TT) {
                var oT = BT.props.onMouseDown;
                XT()(oT) && oT(BT.getMouseInfo(TT), TT)
              })), uI(BT, "handleMouseUp", (function(TT) {
                var oT = BT.props.onMouseUp;
                XT()(oT) && oT(BT.getMouseInfo(TT), TT)
              })), uI(BT, "handleTouchMove", (function(TT) {
                null != TT.changedTouches && TT.changedTouches.length > 0 && BT.throttleTriggeredAfterMouseMove(TT.changedTouches[0])
              })), uI(BT, "handleTouchStart", (function(TT) {
                null != TT.changedTouches && TT.changedTouches.length > 0 && BT.handleMouseDown(TT.changedTouches[0])
              })), uI(BT, "handleTouchEnd", (function(TT) {
                null != TT.changedTouches && TT.changedTouches.length > 0 && BT.handleMouseUp(TT.changedTouches[0])
              })), uI(BT, "handleDoubleClick", (function(TT) {
                var oT = BT.props.onDoubleClick;
                XT()(oT) && oT(BT.getMouseInfo(TT), TT)
              })), uI(BT, "handleContextMenu", (function(TT) {
                var oT = BT.props.onContextMenu;
                XT()(oT) && oT(BT.getMouseInfo(TT), TT)
              })), uI(BT, "triggerSyncEvent", (function(TT) {
                void 0 !== BT.props.syncId && Uo.emit(ao, BT.props.syncId, TT, BT.eventEmitterSymbol)
              })), uI(BT, "applySyncEvent", (function(TT) {
                var oT = BT.props,
                  IT = oT.layout,
                  iT = oT.syncMethod,
                  zT = BT.state.updateId,
                  kT = TT.dataStartIndex,
                  WT = TT.dataEndIndex;
                if (void 0 !== TT.dataStartIndex || void 0 !== TT.dataEndIndex) BT.setState(RI({
                  dataStartIndex: kT,
                  dataEndIndex: WT
                }, CT({
                  props: BT.props,
                  dataStartIndex: kT,
                  dataEndIndex: WT,
                  updateId: zT
                }, BT.state)));
                else if (void 0 !== TT.activeTooltipIndex) {
                  var XT = TT.chartX,
                    FT = TT.chartY,
                    ST = TT.activeTooltipIndex,
                    DT = BT.state,
                    LT = DT.offset,
                    xT = DT.tooltipTicks;
                  if (!LT) return;
                  if ("function" === typeof iT) ST = iT(xT, TT);
                  else if ("value" === iT) {
                    ST = -1;
                    for (var cT = 0; cT < xT.length; cT++)
                      if (xT[cT].value === TT.activeLabel) {
                        ST = cT;
                        break
                      }
                  }
                  var KT = RI(RI({}, LT), {}, {
                      x: LT.left,
                      y: LT.top
                    }),
                    MT = Math.min(XT, KT.x + KT.width),
                    rT = Math.min(FT, KT.y + KT.height),
                    AT = xT[ST] && xT[ST].value,
                    gT = aI(BT.state, BT.props.data, ST),
                    hT = xT[ST] ? {
                      x: "horizontal" === IT ? xT[ST].coordinate : MT,
                      y: "horizontal" === IT ? rT : xT[ST].coordinate
                    } : CI;
                  BT.setState(RI(RI({}, TT), {}, {
                    activeLabel: AT,
                    activeCoordinate: hT,
                    activePayload: gT,
                    activeTooltipIndex: ST
                  }))
                } else BT.setState(TT)
              })), uI(BT, "renderCursor", (function(TT) {
                var IT, zT = BT.state,
                  kT = zT.isTooltipActive,
                  WT = zT.activeCoordinate,
                  XT = zT.activePayload,
                  FT = zT.offset,
                  ST = zT.activeTooltipIndex,
                  DT = zT.tooltipAxisBandSize,
                  LT = BT.getTooltipEventType(),
                  xT = null !== (IT = TT.props.active) && void 0 !== IT ? IT : kT,
                  cT = BT.props.layout,
                  KT = TT.key || "_recharts-cursor";
                return iT.createElement(XI, {
                  key: KT,
                  activeCoordinate: WT,
                  activePayload: XT,
                  activeTooltipIndex: ST,
                  chartName: oT,
                  element: TT,
                  isActive: xT,
                  layout: cT,
                  offset: FT,
                  tooltipAxisBandSize: DT,
                  tooltipEventType: LT
                })
              })), uI(BT, "renderPolarAxis", (function(TT, oT, IT) {
                var zT = DT()(TT, "type.axisType"),
                  kT = DT()(BT.state, "".concat(zT, "Map")),
                  WT = TT.type.defaultProps,
                  XT = void 0 !== WT ? RI(RI({}, WT), TT.props) : TT.props,
                  FT = kT && kT[XT["".concat(zT, "Id")]];
                return (0, iT.cloneElement)(TT, RI(RI({}, FT), {}, {
                  className: (0, MT.c)(zT, FT.className),
                  key: TT.key || "".concat(oT, "-").concat(IT),
                  ticks: (0, ET.S)(FT, !0)
                }))
              })), uI(BT, "renderPolarGrid", (function(TT) {
                var oT = TT.props,
                  IT = oT.radialLines,
                  zT = oT.polarAngles,
                  kT = oT.polarRadius,
                  WT = BT.state,
                  XT = WT.radiusAxisMap,
                  FT = WT.angleAxisMap,
                  ST = (0, fT.j)(XT),
                  DT = (0, fT.j)(FT),
                  LT = DT.cx,
                  xT = DT.cy,
                  cT = DT.innerRadius,
                  KT = DT.outerRadius;
                return (0, iT.cloneElement)(TT, {
                  polarAngles: Array.isArray(zT) ? zT : (0, ET.S)(DT, !0).map((function(TT) {
                    return TT.coordinate
                  })),
                  polarRadius: Array.isArray(kT) ? kT : (0, ET.S)(ST, !0).map((function(TT) {
                    return TT.coordinate
                  })),
                  cx: LT,
                  cy: xT,
                  innerRadius: cT,
                  outerRadius: KT,
                  key: TT.key || "polar-grid",
                  radialLines: IT
                })
              })), uI(BT, "renderLegend", (function() {
                var TT = BT.state.formattedGraphicalItems,
                  oT = BT.props,
                  IT = oT.children,
                  zT = oT.width,
                  kT = oT.height,
                  WT = BT.props.margin || {},
                  XT = zT - (WT.left || 0) - (WT.right || 0),
                  FT = (0, NT.e)({
                    children: IT,
                    formattedGraphicalItems: TT,
                    legendWidth: XT,
                    legendContent: LT
                  });
                if (!FT) return null;
                var ST = FT.item,
                  DT = cI(FT, FI);
                return (0, iT.cloneElement)(ST, RI(RI({}, DT), {}, {
                  chartWidth: zT,
                  chartHeight: kT,
                  margin: WT,
                  onBBoxUpdate: BT.handleLegendBBoxUpdate
                }))
              })), uI(BT, "renderTooltip", (function() {
                var TT, oT = BT.props,
                  IT = oT.children,
                  zT = oT.accessibilityLayer,
                  kT = (0, RT.i)(IT, hT.d);
                if (!kT) return null;
                var WT = BT.state,
                  XT = WT.isTooltipActive,
                  FT = WT.activeCoordinate,
                  ST = WT.activePayload,
                  DT = WT.activeLabel,
                  LT = WT.offset,
                  xT = null !== (TT = kT.props.active) && void 0 !== TT ? TT : XT;
                return (0, iT.cloneElement)(kT, {
                  viewBox: RI(RI({}, LT), {}, {
                    x: LT.left,
                    y: LT.top
                  }),
                  active: xT,
                  label: DT,
                  payload: xT ? ST : [],
                  coordinate: FT,
                  accessibilityLayer: zT
                })
              })), uI(BT, "renderBrush", (function(TT) {
                var oT = BT.props,
                  IT = oT.margin,
                  zT = oT.data,
                  kT = BT.state,
                  WT = kT.offset,
                  XT = kT.dataStartIndex,
                  FT = kT.dataEndIndex,
                  ST = kT.updateId;
                return (0, iT.cloneElement)(TT, {
                  key: TT.key || "_recharts-brush",
                  onChange: (0, ET.o)(BT.handleBrushChange, TT.props.onChange),
                  data: zT,
                  x: (0, fT.C)(TT.props.x) ? TT.props.x : WT.left,
                  y: (0, fT.C)(TT.props.y) ? TT.props.y : WT.top + WT.height + WT.brushBottom - (IT.bottom || 0),
                  width: (0, fT.C)(TT.props.width) ? TT.props.width : WT.width,
                  startIndex: XT,
                  endIndex: FT,
                  updateId: "brush-".concat(ST)
                })
              })), uI(BT, "renderReferenceElement", (function(TT, oT, IT) {
                if (!TT) return null;
                var zT = BT.clipPathId,
                  kT = BT.state,
                  WT = kT.xAxisMap,
                  XT = kT.yAxisMap,
                  FT = kT.offset,
                  ST = TT.type.defaultProps || {},
                  DT = TT.props,
                  LT = DT.xAxisId,
                  xT = void 0 === LT ? ST.xAxisId : LT,
                  cT = DT.yAxisId,
                  KT = void 0 === cT ? ST.yAxisId : cT;
                return (0, iT.cloneElement)(TT, {
                  key: TT.key || "".concat(oT, "-").concat(IT),
                  xAxis: WT[xT],
                  yAxis: XT[KT],
                  viewBox: {
                    x: FT.left,
                    y: FT.top,
                    width: FT.width,
                    height: FT.height
                  },
                  clipPathId: zT
                })
              })), uI(BT, "renderActivePoints", (function(TT) {
                var oT = TT.item,
                  iT = TT.activePoint,
                  zT = TT.basePoint,
                  kT = TT.childIndex,
                  WT = TT.isRange,
                  XT = [],
                  BT = oT.props.key,
                  FT = void 0 !== oT.item.type.defaultProps ? RI(RI({}, oT.item.type.defaultProps), oT.item.props) : oT.item.props,
                  ST = FT.activeDot,
                  DT = RI(RI({
                    index: kT,
                    dataKey: FT.dataKey,
                    cx: iT.x,
                    cy: iT.y,
                    r: 4,
                    fill: (0, ET.M)(oT.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: iT.payload,
                    value: iT.value
                  }, (0, RT.d)(ST, !1)), (0, Yo.k)(ST));
                return XT.push(IT.renderActiveDot(ST, DT, "".concat(BT, "-activePoint-").concat(kT))), zT ? XT.push(IT.renderActiveDot(ST, RI(RI({}, DT), {}, {
                  cx: zT.x,
                  cy: zT.y
                }), "".concat(BT, "-basePoint-").concat(kT))) : WT && XT.push(null), XT
              })), uI(BT, "renderGraphicChild", (function(TT, oT, IT) {
                var zT = BT.filterFormatItem(TT, oT, IT);
                if (!zT) return null;
                var WT = BT.getTooltipEventType(),
                  XT = BT.state,
                  FT = XT.isTooltipActive,
                  ST = XT.tooltipAxis,
                  DT = XT.activeTooltipIndex,
                  LT = XT.activeLabel,
                  xT = BT.props.children,
                  cT = (0, RT.i)(xT, hT.d),
                  KT = zT.props,
                  MT = KT.points,
                  rT = KT.isRange,
                  AT = KT.baseLine,
                  gT = void 0 !== zT.item.type.defaultProps ? RI(RI({}, zT.item.type.defaultProps), zT.item.props) : zT.item.props,
                  wT = gT.activeDot,
                  mT = gT.hide,
                  eT = gT.activeBar,
                  uT = gT.activeShape,
                  vT = Boolean(!mT && FT && cT && (wT || eT || uT)),
                  CT = {};
                "axis" !== WT && cT && "click" === cT.props.trigger ? CT = {
                  onClick: (0, ET.o)(BT.handleItemMouseEnter, TT.props.onClick)
                } : "axis" !== WT && (CT = {
                  onMouseLeave: (0, ET.o)(BT.handleItemMouseLeave, TT.props.onMouseLeave),
                  onMouseEnter: (0, ET.o)(BT.handleItemMouseEnter, TT.props.onMouseEnter)
                });
                var jT = (0, iT.cloneElement)(TT, RI(RI({}, zT.props), CT));
                if (vT) {
                  if (!(DT >= 0)) {
                    var JT, UT = (null !== (JT = BT.getItemByXY(BT.state.activeCoordinate)) && void 0 !== JT ? JT : {
                        graphicalItem: jT
                      }).graphicalItem,
                      aT = UT.item,
                      YT = void 0 === aT ? TT : aT,
                      QT = UT.childIndex,
                      OT = RI(RI(RI({}, zT.props), CT), {}, {
                        activeIndex: QT
                      });
                    return [(0, iT.cloneElement)(YT, OT), null, null]
                  }
                  var HT, nT;
                  if (ST.dataKey && !ST.allowDuplicatedCategory) {
                    var qT = "function" === typeof ST.dataKey ? function(TT) {
                      return "function" === typeof ST.dataKey ? ST.dataKey(TT.payload) : null
                    } : "payload.".concat(ST.dataKey.toString());
                    HT = (0, fT.i)(MT, qT, LT), nT = rT && AT && (0, fT.i)(AT, qT, LT)
                  } else HT = null === MT || void 0 === MT ? void 0 : MT[DT], nT = rT && AT && AT[DT];
                  if (uT || eT) {
                    var ZT = void 0 !== TT.props.activeIndex ? TT.props.activeIndex : DT;
                    return [(0, iT.cloneElement)(TT, RI(RI(RI({}, zT.props), CT), {}, {
                      activeIndex: ZT
                    })), null, null]
                  }
                  if (!kT()(HT)) return [jT].concat(hI(BT.renderActivePoints({
                    item: zT,
                    activePoint: HT,
                    basePoint: nT,
                    childIndex: DT,
                    isRange: rT
                  })))
                }
                return rT ? [jT, null, null] : [jT, null]
              })), uI(BT, "renderCustomized", (function(TT, oT, IT) {
                return (0, iT.cloneElement)(TT, RI(RI({
                  key: "recharts-customized-".concat(IT)
                }, BT.props), BT.state))
              })), uI(BT, "renderMap", {
                CartesianGrid: {
                  handler: jI,
                  once: !0
                },
                ReferenceArea: {
                  handler: BT.renderReferenceElement
                },
                ReferenceLine: {
                  handler: jI
                },
                ReferenceDot: {
                  handler: BT.renderReferenceElement
                },
                XAxis: {
                  handler: jI
                },
                YAxis: {
                  handler: jI
                },
                Brush: {
                  handler: BT.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: BT.renderGraphicChild
                },
                Line: {
                  handler: BT.renderGraphicChild
                },
                Area: {
                  handler: BT.renderGraphicChild
                },
                Radar: {
                  handler: BT.renderGraphicChild
                },
                RadialBar: {
                  handler: BT.renderGraphicChild
                },
                Scatter: {
                  handler: BT.renderGraphicChild
                },
                Pie: {
                  handler: BT.renderGraphicChild
                },
                Funnel: {
                  handler: BT.renderGraphicChild
                },
                Tooltip: {
                  handler: BT.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: BT.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: BT.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: BT.renderPolarAxis
                },
                Customized: {
                  handler: BT.renderCustomized
                }
              }), BT.clipPathId = "".concat(null !== (zT = TT.id) && void 0 !== zT ? zT : (0, fT.K)("recharts"), "-clip"), BT.throttleTriggeredAfterMouseMove = KT()(BT.triggeredAfterMouseMove, null !== (WT = TT.throttleDelay) && void 0 !== WT ? WT : 1e3 / 60), BT.state = {}, BT
            }
            return function(TT, oT) {
              if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
              TT.prototype = Object.create(oT && oT.prototype, {
                constructor: {
                  value: TT,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(TT, "prototype", {
                writable: !1
              }), oT && gI(TT, oT)
            }(IT, TT), zT = IT, BT = [{
              key: "componentDidMount",
              value: function() {
                var TT, oT;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (TT = this.props.margin.left) && void 0 !== TT ? TT : 0,
                    top: null !== (oT = this.props.margin.top) && void 0 !== oT ? oT : 0
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
                  oT = TT.children,
                  IT = TT.data,
                  iT = TT.height,
                  zT = TT.layout,
                  kT = (0, RT.i)(oT, hT.d);
                if (kT) {
                  var WT = kT.props.defaultIndex;
                  if (!("number" !== typeof WT || WT < 0 || WT > this.state.tooltipTicks.length - 1)) {
                    var XT = this.state.tooltipTicks[WT] && this.state.tooltipTicks[WT].value,
                      BT = aI(this.state, IT, WT, XT),
                      FT = this.state.tooltipTicks[WT].coordinate,
                      ST = (this.state.offset.top + iT) / 2,
                      DT = "horizontal" === zT ? {
                        x: FT,
                        y: ST
                      } : {
                        y: FT,
                        x: ST
                      },
                      LT = this.state.formattedGraphicalItems.find((function(TT) {
                        return "Scatter" === TT.item.type.name
                      }));
                    LT && (DT = RI(RI({}, DT), LT.props.points[WT].tooltipPosition), BT = LT.props.points[WT].tooltipPayload);
                    var xT = {
                      activeTooltipIndex: WT,
                      isTooltipActive: !0,
                      activeLabel: XT,
                      activePayload: BT,
                      activeCoordinate: DT
                    };
                    this.setState(xT), this.renderCursor(kT), this.accessibilityManager.setIndex(WT)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(TT, oT) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== oT.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== TT.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== TT.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (IT = this.props.margin.left) && void 0 !== IT ? IT : 0,
                    top: null !== (iT = this.props.margin.top) && void 0 !== iT ? iT : 0
                  }
                }), null) : null;
                var IT, iT
              }
            }, {
              key: "componentDidUpdate",
              value: function(TT) {
                (0, RT.t)([(0, RT.i)(TT.children, hT.d)], [(0, RT.i)(this.props.children, hT.d)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var TT = (0, RT.i)(this.props.children, hT.d);
                if (TT && "boolean" === typeof TT.props.shared) {
                  var oT = TT.props.shared ? "axis" : "item";
                  return FT.indexOf(oT) >= 0 ? oT : WT
                }
                return WT
              }
            }, {
              key: "getMouseInfo",
              value: function(TT) {
                if (!this.container) return null;
                var oT = this.container,
                  IT = oT.getBoundingClientRect(),
                  iT = (0, yT.d)(IT),
                  zT = {
                    chartX: Math.round(TT.pageX - iT.left),
                    chartY: Math.round(TT.pageY - iT.top)
                  },
                  kT = IT.width / oT.offsetWidth || 1,
                  WT = this.inRange(zT.chartX, zT.chartY, kT);
                if (!WT) return null;
                var XT = this.state,
                  BT = XT.xAxisMap,
                  FT = XT.yAxisMap,
                  ST = this.getTooltipEventType(),
                  DT = YI(this.state, this.props.data, this.props.layout, WT);
                if ("axis" !== ST && BT && FT) {
                  var LT = (0, fT.j)(BT).scale,
                    xT = (0, fT.j)(FT).scale,
                    cT = LT && LT.invert ? LT.invert(zT.chartX) : null,
                    KT = xT && xT.invert ? xT.invert(zT.chartY) : null;
                  return RI(RI({}, zT), {}, {
                    xValue: cT,
                    yValue: KT
                  }, DT)
                }
                return DT ? RI(RI({}, zT), DT) : null
              }
            }, {
              key: "inRange",
              value: function(TT, oT) {
                var IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  iT = this.props.layout,
                  zT = TT / IT,
                  kT = oT / IT;
                if ("horizontal" === iT || "vertical" === iT) {
                  var WT = this.state.offset;
                  return zT >= WT.left && zT <= WT.left + WT.width && kT >= WT.top && kT <= WT.top + WT.height ? {
                    x: zT,
                    y: kT
                  } : null
                }
                var XT = this.state,
                  BT = XT.angleAxisMap,
                  FT = XT.radiusAxisMap;
                if (BT && FT) {
                  var ST = (0, fT.j)(BT);
                  return (0, Co.d)({
                    x: zT,
                    y: kT
                  }, ST)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var TT = this.props.children,
                  oT = this.getTooltipEventType(),
                  IT = (0, RT.i)(TT, hT.d),
                  iT = {};
                return IT && "axis" === oT && (iT = "click" === IT.props.trigger ? {
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
                }), RI(RI({}, (0, Yo.k)(this.props, this.handleOuterEvent)), iT)
              }
            }, {
              key: "addListener",
              value: function() {
                Uo.on(ao, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                Uo.removeListener(ao, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(TT, oT, IT) {
                for (var iT = this.state.formattedGraphicalItems, zT = 0, kT = iT.length; zT < kT; zT++) {
                  var WT = iT[zT];
                  if (WT.item === TT || WT.props.key === TT.key || oT === (0, RT.j)(WT.item.type) && IT === WT.childIndex) return WT
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var TT = this.clipPathId,
                  oT = this.state.offset,
                  IT = oT.left,
                  zT = oT.top,
                  kT = oT.height,
                  WT = oT.width;
                return iT.createElement("defs", null, iT.createElement("clipPath", {
                  id: TT
                }, iT.createElement("rect", {
                  x: IT,
                  y: zT,
                  height: kT,
                  width: WT
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var TT = this.state.xAxisMap;
                return TT ? Object.entries(TT).reduce((function(TT, oT) {
                  var IT = xI(oT, 2),
                    iT = IT[0],
                    zT = IT[1];
                  return RI(RI({}, TT), {}, uI({}, iT, zT.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var TT = this.state.yAxisMap;
                return TT ? Object.entries(TT).reduce((function(TT, oT) {
                  var IT = xI(oT, 2),
                    iT = IT[0],
                    zT = IT[1];
                  return RI(RI({}, TT), {}, uI({}, iT, zT.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(TT) {
                var oT;
                return null === (oT = this.state.xAxisMap) || void 0 === oT || null === (oT = oT[TT]) || void 0 === oT ? void 0 : oT.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(TT) {
                var oT;
                return null === (oT = this.state.yAxisMap) || void 0 === oT || null === (oT = oT[TT]) || void 0 === oT ? void 0 : oT.scale
              }
            }, {
              key: "getItemByXY",
              value: function(TT) {
                var oT = this.state,
                  IT = oT.formattedGraphicalItems,
                  iT = oT.activeItem;
                if (IT && IT.length)
                  for (var zT = 0, kT = IT.length; zT < kT; zT++) {
                    var WT = IT[zT],
                      XT = WT.props,
                      BT = WT.item,
                      FT = void 0 !== BT.type.defaultProps ? RI(RI({}, BT.type.defaultProps), BT.props) : BT.props,
                      ST = (0, RT.j)(BT.type);
                    if ("Bar" === ST) {
                      var DT = (XT.data || []).find((function(oT) {
                        return (0, eT.e)(TT, oT)
                      }));
                      if (DT) return {
                        graphicalItem: WT,
                        payload: DT
                      }
                    } else if ("RadialBar" === ST) {
                      var LT = (XT.data || []).find((function(oT) {
                        return (0, Co.d)(TT, oT)
                      }));
                      if (LT) return {
                        graphicalItem: WT,
                        payload: LT
                      }
                    } else if ((0, Zo.i)(WT, iT) || (0, Zo.m)(WT, iT) || (0, Zo.p)(WT, iT)) {
                      var xT = (0, Zo.f)({
                          graphicalItem: WT,
                          activeTooltipItem: iT,
                          itemData: FT.data
                        }),
                        cT = void 0 === FT.activeIndex ? xT : FT.activeIndex;
                      return {
                        graphicalItem: RI(RI({}, WT), {}, {
                          childIndex: cT
                        }),
                        payload: (0, Zo.p)(WT, iT) ? FT.data[xT] : WT.props.data[xT]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var TT = this;
                if (!(0, RT.D)(this)) return null;
                var oT, IT, zT = this.props,
                  kT = zT.children,
                  WT = zT.className,
                  XT = zT.width,
                  BT = zT.height,
                  FT = zT.style,
                  ST = zT.compact,
                  DT = zT.title,
                  LT = zT.desc,
                  xT = cI(zT, SI),
                  cT = (0, RT.d)(xT, !1);
                if (ST) return iT.createElement(BI.c, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, iT.createElement(AT.c, LI({}, cT, {
                  width: XT,
                  height: BT,
                  title: DT,
                  desc: LT
                }), this.renderClipPath(), (0, RT.z)(kT, this.renderMap)));
                this.props.accessibilityLayer && (cT.tabIndex = null !== (oT = this.props.tabIndex) && void 0 !== oT ? oT : 0, cT.role = null !== (IT = this.props.role) && void 0 !== IT ? IT : "application", cT.onKeyDown = function(oT) {
                  TT.accessibilityManager.keyboardEvent(oT)
                }, cT.onFocus = function() {
                  TT.accessibilityManager.focus()
                });
                var KT = this.parseEventsOfWrapper();
                return iT.createElement(BI.c, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, iT.createElement("div", LI({
                  className: (0, MT.c)("recharts-wrapper", WT),
                  style: RI({
                    position: "relative",
                    cursor: "default",
                    width: XT,
                    height: BT
                  }, FT)
                }, KT, {
                  ref: function(oT) {
                    TT.container = oT
                  }
                }), iT.createElement(AT.c, LI({}, cT, {
                  width: XT,
                  height: BT,
                  title: DT,
                  desc: LT,
                  style: fI
                }), this.renderClipPath(), (0, RT.z)(kT, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], BT && KI(zT.prototype, BT), ST && KI(zT, ST), Object.defineProperty(zT, "prototype", {
              writable: !1
            }), zT;
            var zT, BT, ST
          }(iT.Component);
        uI(jT, "displayName", oT), uI(jT, "defaultProps", RI({
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
        }, uT)), uI(jT, "getDerivedStateFromProps", (function(TT, oT) {
          var IT = TT.dataKey,
            iT = TT.data,
            zT = TT.children,
            WT = TT.width,
            XT = TT.height,
            BT = TT.layout,
            FT = TT.stackOffset,
            ST = TT.margin,
            DT = oT.dataStartIndex,
            LT = oT.dataEndIndex;
          if (void 0 === oT.updateId) {
            var xT = HI(TT);
            return RI(RI(RI({}, xT), {}, {
              updateId: 0
            }, CT(RI(RI({
              props: TT
            }, xT), {}, {
              updateId: 0
            }), oT)), {}, {
              prevDataKey: IT,
              prevData: iT,
              prevWidth: WT,
              prevHeight: XT,
              prevLayout: BT,
              prevStackOffset: FT,
              prevMargin: ST,
              prevChildren: zT
            })
          }
          if (IT !== oT.prevDataKey || iT !== oT.prevData || WT !== oT.prevWidth || XT !== oT.prevHeight || BT !== oT.prevLayout || FT !== oT.prevStackOffset || !(0, jo.c)(ST, oT.prevMargin)) {
            var cT = HI(TT),
              KT = {
                chartX: oT.chartX,
                chartY: oT.chartY,
                isTooltipActive: oT.isTooltipActive
              },
              MT = RI(RI({}, YI(oT, iT, BT)), {}, {
                updateId: oT.updateId + 1
              }),
              rT = RI(RI(RI({}, cT), KT), MT);
            return RI(RI(RI({}, rT), CT(RI({
              props: TT
            }, rT), oT)), {}, {
              prevDataKey: IT,
              prevData: iT,
              prevWidth: WT,
              prevHeight: XT,
              prevLayout: BT,
              prevStackOffset: FT,
              prevMargin: ST,
              prevChildren: zT
            })
          }
          if (!(0, RT.t)(zT, oT.prevChildren)) {
            var AT, gT, hT, wT, mT = (0, RT.i)(zT, bT),
              eT = mT && null !== (AT = null === (gT = mT.props) || void 0 === gT ? void 0 : gT.startIndex) && void 0 !== AT ? AT : DT,
              uT = mT && null !== (hT = null === (wT = mT.props) || void 0 === wT ? void 0 : wT.endIndex) && void 0 !== hT ? hT : LT,
              vT = eT !== DT || uT !== LT,
              ET = !kT()(iT) && !vT ? oT.updateId : oT.updateId + 1;
            return RI(RI({
              updateId: ET
            }, CT(RI(RI({
              props: TT
            }, oT), {}, {
              updateId: ET,
              dataStartIndex: eT,
              dataEndIndex: uT
            }), oT)), {}, {
              prevChildren: zT,
              dataStartIndex: eT,
              dataEndIndex: uT
            })
          }
          return null
        })), uI(jT, "renderActiveDot", (function(TT, oT, IT) {
          var zT;
          return zT = (0, iT.isValidElement)(TT) ? (0, iT.cloneElement)(TT, oT) : XT()(TT) ? TT(oT) : iT.createElement(mT.b, oT), iT.createElement(gT.e, {
            className: "recharts-active-dot",
            key: IT
          }, zT)
        }));
        var JT = (0, iT.forwardRef)((function(TT, oT) {
          return iT.createElement(jT, LI({}, TT, {
            ref: oT
          }))
        }));
        return JT.displayName = jT.displayName, JT
      }
  },
  5767: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT
    });
    var iT = function(TT) {
      return null
    };
    iT.displayName = "Cell"
  },
  5704: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => CT
    });
    var iT = IT(46),
      zT = IT(4908),
      kT = IT.n(zT),
      WT = IT(4728),
      XT = IT.n(WT),
      BT = IT(4548),
      FT = IT.n(BT),
      ST = IT(4536),
      DT = IT(5612),
      LT = IT(4918),
      xT = IT(4606),
      cT = IT(5712);

    function KT(TT) {
      return KT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, KT(TT)
    }
    var MT = ["offset"];

    function rT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return AT(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return AT(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return AT(TT, oT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AT(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function gT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function hT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function wT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? hT(Object(IT), !0).forEach((function(oT) {
          mT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : hT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function mT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != KT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != KT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == KT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function eT() {
      return eT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, eT.apply(this, arguments)
    }
    var RT = function(TT) {
        var oT = TT.value,
          IT = TT.formatter,
          iT = kT()(TT.children) ? oT : TT.children;
        return XT()(IT) ? IT(iT) : iT
      },
      uT = function(TT, oT, IT) {
        var zT, WT, XT = TT.position,
          BT = TT.viewBox,
          FT = TT.offset,
          DT = TT.className,
          LT = BT,
          KT = LT.cx,
          MT = LT.cy,
          rT = LT.innerRadius,
          AT = LT.outerRadius,
          gT = LT.startAngle,
          hT = LT.endAngle,
          wT = LT.clockWise,
          mT = (rT + AT) / 2,
          RT = function(TT, oT) {
            return (0, xT.G)(oT - TT) * Math.min(Math.abs(oT - TT), 360)
          }(gT, hT),
          uT = RT >= 0 ? 1 : -1;
        "insideStart" === XT ? (zT = gT + uT * FT, WT = wT) : "insideEnd" === XT ? (zT = hT - uT * FT, WT = !wT) : "end" === XT && (zT = hT + uT * FT, WT = wT), WT = RT <= 0 ? WT : !WT;
        var vT = (0, cT.e)(KT, MT, mT, zT),
          ET = (0, cT.e)(KT, MT, mT, zT + 359 * (WT ? 1 : -1)),
          fT = "M".concat(vT.x, ",").concat(vT.y, "\n    A").concat(mT, ",").concat(mT, ",0,1,").concat(WT ? 0 : 1, ",\n    ").concat(ET.x, ",").concat(ET.y),
          CT = kT()(TT.id) ? (0, xT.K)("recharts-radial-line-") : TT.id;
        return iT.createElement("text", eT({}, IT, {
          dominantBaseline: "central",
          className: (0, ST.c)("recharts-radial-bar-label", DT)
        }), iT.createElement("defs", null, iT.createElement("path", {
          id: CT,
          d: fT
        })), iT.createElement("textPath", {
          xlinkHref: "#".concat(CT)
        }, oT))
      },
      vT = function(TT) {
        var oT = TT.viewBox,
          IT = TT.offset,
          iT = TT.position,
          zT = oT,
          kT = zT.cx,
          WT = zT.cy,
          XT = zT.innerRadius,
          BT = zT.outerRadius,
          FT = (zT.startAngle + zT.endAngle) / 2;
        if ("outside" === iT) {
          var ST = (0, cT.e)(kT, WT, BT + IT, FT),
            DT = ST.x;
          return {
            x: DT,
            y: ST.y,
            textAnchor: DT >= kT ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === iT) return {
          x: kT,
          y: WT,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === iT) return {
          x: kT,
          y: WT,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === iT) return {
          x: kT,
          y: WT,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var LT = (XT + BT) / 2,
          xT = (0, cT.e)(kT, WT, LT, FT);
        return {
          x: xT.x,
          y: xT.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      ET = function(TT) {
        var oT = TT.viewBox,
          IT = TT.parentViewBox,
          iT = TT.offset,
          zT = TT.position,
          kT = oT,
          WT = kT.x,
          XT = kT.y,
          BT = kT.width,
          ST = kT.height,
          DT = ST >= 0 ? 1 : -1,
          LT = DT * iT,
          cT = DT > 0 ? "end" : "start",
          KT = DT > 0 ? "start" : "end",
          MT = BT >= 0 ? 1 : -1,
          rT = MT * iT,
          AT = MT > 0 ? "end" : "start",
          gT = MT > 0 ? "start" : "end";
        if ("top" === zT) return wT(wT({}, {
          x: WT + BT / 2,
          y: XT - DT * iT,
          textAnchor: "middle",
          verticalAnchor: cT
        }), IT ? {
          height: Math.max(XT - IT.y, 0),
          width: BT
        } : {});
        if ("bottom" === zT) return wT(wT({}, {
          x: WT + BT / 2,
          y: XT + ST + LT,
          textAnchor: "middle",
          verticalAnchor: KT
        }), IT ? {
          height: Math.max(IT.y + IT.height - (XT + ST), 0),
          width: BT
        } : {});
        if ("left" === zT) {
          var hT = {
            x: WT - rT,
            y: XT + ST / 2,
            textAnchor: AT,
            verticalAnchor: "middle"
          };
          return wT(wT({}, hT), IT ? {
            width: Math.max(hT.x - IT.x, 0),
            height: ST
          } : {})
        }
        if ("right" === zT) {
          var mT = {
            x: WT + BT + rT,
            y: XT + ST / 2,
            textAnchor: gT,
            verticalAnchor: "middle"
          };
          return wT(wT({}, mT), IT ? {
            width: Math.max(IT.x + IT.width - mT.x, 0),
            height: ST
          } : {})
        }
        var eT = IT ? {
          width: BT,
          height: ST
        } : {};
        return "insideLeft" === zT ? wT({
          x: WT + rT,
          y: XT + ST / 2,
          textAnchor: gT,
          verticalAnchor: "middle"
        }, eT) : "insideRight" === zT ? wT({
          x: WT + BT - rT,
          y: XT + ST / 2,
          textAnchor: AT,
          verticalAnchor: "middle"
        }, eT) : "insideTop" === zT ? wT({
          x: WT + BT / 2,
          y: XT + LT,
          textAnchor: "middle",
          verticalAnchor: KT
        }, eT) : "insideBottom" === zT ? wT({
          x: WT + BT / 2,
          y: XT + ST - LT,
          textAnchor: "middle",
          verticalAnchor: cT
        }, eT) : "insideTopLeft" === zT ? wT({
          x: WT + rT,
          y: XT + LT,
          textAnchor: gT,
          verticalAnchor: KT
        }, eT) : "insideTopRight" === zT ? wT({
          x: WT + BT - rT,
          y: XT + LT,
          textAnchor: AT,
          verticalAnchor: KT
        }, eT) : "insideBottomLeft" === zT ? wT({
          x: WT + rT,
          y: XT + ST - LT,
          textAnchor: gT,
          verticalAnchor: cT
        }, eT) : "insideBottomRight" === zT ? wT({
          x: WT + BT - rT,
          y: XT + ST - LT,
          textAnchor: AT,
          verticalAnchor: cT
        }, eT) : FT()(zT) && ((0, xT.C)(zT.x) || (0, xT.F)(zT.x)) && ((0, xT.C)(zT.y) || (0, xT.F)(zT.y)) ? wT({
          x: WT + (0, xT.r)(zT.x, BT),
          y: XT + (0, xT.r)(zT.y, ST),
          textAnchor: "end",
          verticalAnchor: "end"
        }, eT) : wT({
          x: WT + BT / 2,
          y: XT + ST / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, eT)
      },
      fT = function(TT) {
        return "cx" in TT && (0, xT.C)(TT.cx)
      };

    function CT(TT) {
      var oT, IT = TT.offset,
        zT = wT({
          offset: void 0 === IT ? 5 : IT
        }, gT(TT, MT)),
        WT = zT.viewBox,
        BT = zT.position,
        FT = zT.value,
        xT = zT.children,
        cT = zT.content,
        KT = zT.className,
        rT = void 0 === KT ? "" : KT,
        AT = zT.textBreakAll;
      if (!WT || kT()(FT) && kT()(xT) && !(0, iT.isValidElement)(cT) && !XT()(cT)) return null;
      if ((0, iT.isValidElement)(cT)) return (0, iT.cloneElement)(cT, zT);
      if (XT()(cT)) {
        if (oT = (0, iT.createElement)(cT, zT), (0, iT.isValidElement)(oT)) return oT
      } else oT = RT(zT);
      var hT = fT(WT),
        mT = (0, LT.d)(zT, !0);
      if (hT && ("insideStart" === BT || "insideEnd" === BT || "end" === BT)) return uT(zT, oT, mT);
      var CT = hT ? vT(zT) : ET(zT);
      return iT.createElement(DT.e, eT({
        className: (0, ST.c)("recharts-label", rT)
      }, mT, CT, {
        breakAll: AT
      }), oT)
    }
    CT.displayName = "Label";
    var jT = function(TT) {
      var oT = TT.cx,
        IT = TT.cy,
        iT = TT.angle,
        zT = TT.startAngle,
        kT = TT.endAngle,
        WT = TT.r,
        XT = TT.radius,
        BT = TT.innerRadius,
        FT = TT.outerRadius,
        ST = TT.x,
        DT = TT.y,
        LT = TT.top,
        cT = TT.left,
        KT = TT.width,
        MT = TT.height,
        rT = TT.clockWise,
        AT = TT.labelViewBox;
      if (AT) return AT;
      if ((0, xT.C)(KT) && (0, xT.C)(MT)) {
        if ((0, xT.C)(ST) && (0, xT.C)(DT)) return {
          x: ST,
          y: DT,
          width: KT,
          height: MT
        };
        if ((0, xT.C)(LT) && (0, xT.C)(cT)) return {
          x: LT,
          y: cT,
          width: KT,
          height: MT
        }
      }
      return (0, xT.C)(ST) && (0, xT.C)(DT) ? {
        x: ST,
        y: DT,
        width: 0,
        height: 0
      } : (0, xT.C)(oT) && (0, xT.C)(IT) ? {
        cx: oT,
        cy: IT,
        startAngle: zT || iT || 0,
        endAngle: kT || iT || 0,
        innerRadius: BT || 0,
        outerRadius: FT || XT || WT || 0,
        clockWise: rT
      } : TT.viewBox ? TT.viewBox : {}
    };
    CT.parseViewBox = jT, CT.renderCallByParent = function(TT, oT) {
      var IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!TT || !TT.children && IT && !TT.label) return null;
      var zT = TT.children,
        kT = jT(TT),
        WT = (0, LT.e)(zT, CT).map((function(TT, IT) {
          return (0, iT.cloneElement)(TT, {
            viewBox: oT || kT,
            key: "label-".concat(IT)
          })
        }));
      if (!IT) return WT;
      var BT = function(TT, oT) {
        return TT ? !0 === TT ? iT.createElement(CT, {
          key: "label-implicit",
          viewBox: oT
        }) : (0, xT.y)(TT) ? iT.createElement(CT, {
          key: "label-implicit",
          viewBox: oT,
          value: TT
        }) : (0, iT.isValidElement)(TT) ? TT.type === CT ? (0, iT.cloneElement)(TT, {
          key: "label-implicit",
          viewBox: oT
        }) : iT.createElement(CT, {
          key: "label-implicit",
          content: TT,
          viewBox: oT
        }) : XT()(TT) ? iT.createElement(CT, {
          key: "label-implicit",
          content: TT,
          viewBox: oT
        }) : FT()(TT) ? iT.createElement(CT, eT({
          viewBox: oT
        }, TT, {
          key: "label-implicit"
        })) : null : null
      }(TT.label, oT || kT);
      return [BT].concat(rT(WT))
    }
  },
  5773: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ET
    });
    var iT = IT(46),
      zT = IT(4908),
      kT = IT.n(zT),
      WT = IT(4548),
      XT = IT.n(WT),
      BT = IT(4728),
      FT = IT.n(BT),
      ST = IT(5776),
      DT = IT.n(ST),
      LT = IT(5704),
      xT = IT(5452),
      cT = IT(4918),
      KT = IT(5619);

    function MT(TT) {
      return MT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, MT(TT)
    }
    var rT = ["valueAccessor"],
      AT = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function gT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return hT(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return hT(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return hT(TT, oT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hT(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function wT() {
      return wT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, wT.apply(this, arguments)
    }

    function mT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function eT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? mT(Object(IT), !0).forEach((function(oT) {
          RT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : mT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function RT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != MT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != MT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == MT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function uT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }
    var vT = function(TT) {
      return Array.isArray(TT.value) ? DT()(TT.value) : TT.value
    };

    function ET(TT) {
      var oT = TT.valueAccessor,
        IT = void 0 === oT ? vT : oT,
        zT = uT(TT, rT),
        WT = zT.data,
        XT = zT.dataKey,
        BT = zT.clockWise,
        FT = zT.id,
        ST = zT.textBreakAll,
        DT = uT(zT, AT);
      return WT && WT.length ? iT.createElement(xT.e, {
        className: "recharts-label-list"
      }, WT.map((function(TT, oT) {
        var zT = kT()(XT) ? IT(TT, oT) : (0, KT.$)(TT && TT.payload, XT),
          WT = kT()(FT) ? {} : {
            id: "".concat(FT, "-").concat(oT)
          };
        return iT.createElement(LT.c, wT({}, (0, cT.d)(TT, !0), DT, WT, {
          parentViewBox: TT.parentViewBox,
          value: zT,
          textBreakAll: ST,
          viewBox: LT.c.parseViewBox(kT()(BT) ? TT : eT(eT({}, TT), {}, {
            clockWise: BT
          })),
          key: "label-".concat(oT),
          index: oT
        }))
      }))) : null
    }
    ET.displayName = "LabelList", ET.renderCallByParent = function(TT, oT) {
      var IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!TT || !TT.children && IT && !TT.label) return null;
      var zT = TT.children,
        kT = (0, cT.e)(zT, ET).map((function(TT, IT) {
          return (0, iT.cloneElement)(TT, {
            data: oT,
            key: "labelList-".concat(IT)
          })
        }));
      return IT ? [function(TT, oT) {
        return TT ? !0 === TT ? iT.createElement(ET, {
          key: "labelList-implicit",
          data: oT
        }) : iT.isValidElement(TT) || FT()(TT) ? iT.createElement(ET, {
          key: "labelList-implicit",
          data: oT,
          content: TT
        }) : XT()(TT) ? iT.createElement(ET, wT({
          data: oT
        }, TT, {
          key: "labelList-implicit"
        })) : null : null
      }(TT.label, oT)].concat(gT(kT)) : kT
    }
  },
  5527: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => nT
    });
    var iT = IT(46),
      zT = IT(4728),
      kT = IT.n(zT),
      WT = IT(4536),
      XT = IT(4911),
      BT = IT(5446),
      FT = IT(5534),
      ST = IT(4945);

    function DT(TT) {
      return DT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, DT(TT)
    }

    function LT() {
      return LT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, LT.apply(this, arguments)
    }

    function xT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function cT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, hT(iT.key), iT)
      }
    }

    function KT(TT, oT, IT) {
      return oT = rT(oT),
        function(TT, oT) {
          if (oT && ("object" === DT(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, MT() ? Reflect.construct(oT, IT || [], rT(TT).constructor) : oT.apply(TT, IT))
    }

    function MT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (MT = function() {
        return !!TT
      })()
    }

    function rT(TT) {
      return rT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, rT(TT)
    }

    function AT(TT, oT) {
      return AT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, AT(TT, oT)
    }

    function gT(TT, oT, IT) {
      return (oT = hT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function hT(TT) {
      var oT = function(TT, oT) {
        if ("object" != DT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != DT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == DT(oT) ? oT : oT + ""
    }
    var wT = 32,
      mT = function(TT) {
        function oT() {
          return function(TT, oT) {
            if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
          }(this, oT), KT(this, oT, arguments)
        }
        return function(TT, oT) {
          if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
          TT.prototype = Object.create(oT && oT.prototype, {
            constructor: {
              value: TT,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(TT, "prototype", {
            writable: !1
          }), oT && AT(TT, oT)
        }(oT, TT), IT = oT, zT = [{
          key: "renderIcon",
          value: function(TT) {
            var oT = this.props.inactiveColor,
              IT = 16,
              zT = wT / 6,
              kT = wT / 3,
              WT = TT.inactive ? oT : TT.color;
            if ("plainline" === TT.type) return iT.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: WT,
              strokeDasharray: TT.payload.strokeDasharray,
              x1: 0,
              y1: IT,
              x2: wT,
              y2: IT,
              className: "recharts-legend-icon"
            });
            if ("line" === TT.type) return iT.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: WT,
              d: "M0,".concat(IT, "h").concat(kT, "\n            A").concat(zT, ",").concat(zT, ",0,1,1,").concat(2 * kT, ",").concat(IT, "\n            H").concat(wT, "M").concat(2 * kT, ",").concat(IT, "\n            A").concat(zT, ",").concat(zT, ",0,1,1,").concat(kT, ",").concat(IT),
              className: "recharts-legend-icon"
            });
            if ("rect" === TT.type) return iT.createElement("path", {
              stroke: "none",
              fill: WT,
              d: "M0,".concat(4, "h").concat(wT, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (iT.isValidElement(TT.legendIcon)) {
              var XT = function(TT) {
                for (var oT = 1; oT < arguments.length; oT++) {
                  var IT = null != arguments[oT] ? arguments[oT] : {};
                  oT % 2 ? xT(Object(IT), !0).forEach((function(oT) {
                    gT(TT, oT, IT[oT])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : xT(Object(IT)).forEach((function(oT) {
                    Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
                  }))
                }
                return TT
              }({}, TT);
              return delete XT.legendIcon, iT.cloneElement(TT.legendIcon, XT)
            }
            return iT.createElement(FT.e, {
              fill: WT,
              cx: IT,
              cy: IT,
              size: wT,
              sizeType: "diameter",
              type: TT.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var TT = this,
              oT = this.props,
              IT = oT.payload,
              zT = oT.iconSize,
              FT = oT.layout,
              DT = oT.formatter,
              xT = oT.inactiveColor,
              cT = {
                x: 0,
                y: 0,
                width: wT,
                height: wT
              },
              KT = {
                display: "horizontal" === FT ? "inline-block" : "block",
                marginRight: 10
              },
              MT = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return IT.map((function(oT, IT) {
              var FT = oT.formatter || DT,
                rT = (0, WT.c)(gT(gT({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(IT), !0), "inactive", oT.inactive));
              if ("none" === oT.type) return null;
              var AT = kT()(oT.value) ? null : oT.value;
              (0, XT.b)(!kT()(oT.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var hT = oT.inactive ? xT : oT.color;
              return iT.createElement("li", LT({
                className: rT,
                style: KT,
                key: "legend-item-".concat(IT)
              }, (0, ST.m)(TT.props, oT, IT)), iT.createElement(BT.c, {
                width: zT,
                height: zT,
                viewBox: cT,
                style: MT
              }, TT.renderIcon(oT)), iT.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: hT
                }
              }, FT ? FT(AT, oT, IT) : AT))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var TT = this.props,
              oT = TT.payload,
              IT = TT.layout,
              zT = TT.align;
            if (!oT || !oT.length) return null;
            var kT = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === IT ? zT : "left"
            };
            return iT.createElement("ul", {
              className: "recharts-default-legend",
              style: kT
            }, this.renderItems())
          }
        }], zT && cT(IT.prototype, zT), DT && cT(IT, DT), Object.defineProperty(IT, "prototype", {
          writable: !1
        }), IT;
        var IT, zT, DT
      }(iT.PureComponent);
    gT(mT, "displayName", "Legend"), gT(mT, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var eT = IT(4606),
      RT = IT(5473);

    function uT(TT) {
      return uT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, uT(TT)
    }
    var vT = ["ref"];

    function ET(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function fT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? ET(Object(IT), !0).forEach((function(oT) {
          YT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : ET(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function CT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, QT(iT.key), iT)
      }
    }

    function jT(TT, oT, IT) {
      return oT = UT(oT),
        function(TT, oT) {
          if (oT && ("object" === uT(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, JT() ? Reflect.construct(oT, IT || [], UT(TT).constructor) : oT.apply(TT, IT))
    }

    function JT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (JT = function() {
        return !!TT
      })()
    }

    function UT(TT) {
      return UT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, UT(TT)
    }

    function aT(TT, oT) {
      return aT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, aT(TT, oT)
    }

    function YT(TT, oT, IT) {
      return (oT = QT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function QT(TT) {
      var oT = function(TT, oT) {
        if ("object" != uT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != uT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == uT(oT) ? oT : oT + ""
    }

    function OT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function HT(TT) {
      return TT.value
    }
    var nT = function(TT) {
      function oT() {
        var TT;
        ! function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, oT);
        for (var IT = arguments.length, iT = new Array(IT), zT = 0; zT < IT; zT++) iT[zT] = arguments[zT];
        return YT(TT = jT(this, oT, [].concat(iT)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), TT
      }
      return function(TT, oT) {
        if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(oT && oT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), oT && aT(TT, oT)
      }(oT, TT), IT = oT, kT = [{
        key: "getWithHeight",
        value: function(TT, oT) {
          var IT = fT(fT({}, this.defaultProps), TT.props).layout;
          return "vertical" === IT && (0, eT.C)(TT.props.height) ? {
            height: TT.props.height
          } : "horizontal" === IT ? {
            width: TT.props.width || oT
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
            oT = this.getBBox();
          oT ? (Math.abs(oT.width - this.lastBoundingBox.width) > 1 || Math.abs(oT.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = oT.width, this.lastBoundingBox.height = oT.height, TT && TT(oT)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, TT && TT(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? fT({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(TT) {
          var oT, IT, iT = this.props,
            zT = iT.layout,
            kT = iT.align,
            WT = iT.verticalAlign,
            XT = iT.margin,
            BT = iT.chartWidth,
            FT = iT.chartHeight;
          return TT && (void 0 !== TT.left && null !== TT.left || void 0 !== TT.right && null !== TT.right) || (oT = "center" === kT && "vertical" === zT ? {
            left: ((BT || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === kT ? {
            right: XT && XT.right || 0
          } : {
            left: XT && XT.left || 0
          }), TT && (void 0 !== TT.top && null !== TT.top || void 0 !== TT.bottom && null !== TT.bottom) || (IT = "middle" === WT ? {
            top: ((FT || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === WT ? {
            bottom: XT && XT.bottom || 0
          } : {
            top: XT && XT.top || 0
          }), fT(fT({}, oT), IT)
        }
      }, {
        key: "render",
        value: function() {
          var TT = this,
            oT = this.props,
            IT = oT.content,
            zT = oT.width,
            kT = oT.height,
            WT = oT.wrapperStyle,
            XT = oT.payloadUniqBy,
            BT = oT.payload,
            FT = fT(fT({
              position: "absolute",
              width: zT || "auto",
              height: kT || "auto"
            }, this.getDefaultPosition(WT)), WT);
          return iT.createElement("div", {
            className: "recharts-legend-wrapper",
            style: FT,
            ref: function(oT) {
              TT.wrapperNode = oT
            }
          }, function(TT, oT) {
            if (iT.isValidElement(TT)) return iT.cloneElement(TT, oT);
            if ("function" === typeof TT) return iT.createElement(TT, oT);
            oT.ref;
            var IT = OT(oT, vT);
            return iT.createElement(mT, IT)
          }(IT, fT(fT({}, this.props), {}, {
            payload: (0, RT.e)(BT, XT, HT)
          })))
        }
      }]) && CT(IT.prototype, zT), kT && CT(IT, kT), Object.defineProperty(IT, "prototype", {
        writable: !1
      }), IT;
      var IT, zT, kT
    }(iT.PureComponent);
    YT(nT, "displayName", "Legend"), YT(nT, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  4531: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => MT
    });
    var iT = IT(4536),
      zT = IT(46),
      kT = IT(4544),
      WT = IT.n(kT),
      XT = IT(4606),
      BT = IT(4911),
      FT = IT(4918);

    function ST(TT) {
      return ST = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, ST(TT)
    }

    function DT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function LT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? DT(Object(IT), !0).forEach((function(oT) {
          xT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : DT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function xT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != ST(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != ST(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == ST(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function cT(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        var IT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != IT) {
          var iT, zT, kT, WT, XT = [],
            BT = !0,
            FT = !1;
          try {
            if (kT = (IT = IT.call(TT)).next, 0 === oT) {
              if (Object(IT) !== IT) return;
              BT = !1
            } else
              for (; !(BT = (iT = kT.call(IT)).done) && (XT.push(iT.value), XT.length !== oT); BT = !0);
          } catch (TT) {
            FT = !0, zT = TT
          } finally {
            try {
              if (!BT && null != IT.return && (WT = IT.return(), Object(WT) !== WT)) return
            } finally {
              if (FT) throw zT
            }
          }
          return XT
        }
      }(TT, oT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return KT(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return KT(TT, oT)
      }(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function KT(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }
    var MT = (0, zT.forwardRef)((function(TT, oT) {
      var IT = TT.aspect,
        kT = TT.initialDimension,
        ST = void 0 === kT ? {
          width: -1,
          height: -1
        } : kT,
        DT = TT.width,
        xT = void 0 === DT ? "100%" : DT,
        KT = TT.height,
        MT = void 0 === KT ? "100%" : KT,
        rT = TT.minWidth,
        AT = void 0 === rT ? 0 : rT,
        gT = TT.minHeight,
        hT = TT.maxHeight,
        wT = TT.children,
        mT = TT.debounce,
        eT = void 0 === mT ? 0 : mT,
        RT = TT.id,
        uT = TT.className,
        vT = TT.Tm,
        ET = TT.style,
        fT = void 0 === ET ? {} : ET,
        CT = (0, zT.useRef)(null),
        jT = (0, zT.useRef)();
      jT.current = vT, (0, zT.useImperativeHandle)(oT, (function() {
        return Object.defineProperty(CT.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), CT.current
          },
          configurable: !0
        })
      }));
      var JT = cT((0, zT.useState)({
          containerWidth: ST.width,
          containerHeight: ST.height
        }), 2),
        UT = JT[0],
        aT = JT[1],
        YT = (0, zT.useCallback)((function(TT, oT) {
          aT((function(IT) {
            var iT = Math.round(TT),
              zT = Math.round(oT);
            return IT.containerWidth === iT && IT.containerHeight === zT ? IT : {
              containerWidth: iT,
              containerHeight: zT
            }
          }))
        }), []);
      (0, zT.useEffect)((function() {
        var TT = function(TT) {
          var oT, IT = TT[0].contentRect,
            iT = IT.width,
            zT = IT.height;
          YT(iT, zT), null === (oT = jT.current) || void 0 === oT || oT.call(jT, iT, zT)
        };
        eT > 0 && (TT = WT()(TT, eT, {
          trailing: !0,
          leading: !1
        }));
        var oT = new ResizeObserver(TT),
          IT = CT.current.getBoundingClientRect(),
          iT = IT.width,
          zT = IT.height;
        return YT(iT, zT), oT.observe(CT.current),
          function() {
            oT.disconnect()
          }
      }), [YT, eT]);
      var QT = (0, zT.useMemo)((function() {
        var TT = UT.containerWidth,
          oT = UT.containerHeight;
        if (TT < 0 || oT < 0) return null;
        (0, BT.b)((0, XT.F)(xT) || (0, XT.F)(MT), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", xT, MT), (0, BT.b)(!IT || IT > 0, "The aspect(%s) must be greater than zero.", IT);
        var iT = (0, XT.F)(xT) ? TT : xT,
          kT = (0, XT.F)(MT) ? oT : MT;
        IT && IT > 0 && (iT ? kT = iT / IT : kT && (iT = kT * IT), hT && kT > hT && (kT = hT)), (0, BT.b)(iT > 0 || kT > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", iT, kT, xT, MT, AT, gT, IT);
        var WT = !Array.isArray(wT) && (0, FT.j)(wT.type).endsWith("Chart");
        return zT.Children.map(wT, (function(TT) {
          return zT.isValidElement(TT) ? (0, zT.cloneElement)(TT, LT({
            width: iT,
            height: kT
          }, WT ? {
            style: LT({
              height: "100%",
              width: "100%",
              maxHeight: kT,
              maxWidth: iT
            }, TT.props.style)
          } : {})) : TT
        }))
      }), [IT, wT, MT, hT, gT, AT, UT, xT]);
      return zT.createElement("div", {
        id: RT ? "".concat(RT) : void 0,
        className: (0, iT.c)("recharts-responsive-container", uT),
        style: LT(LT({}, fT), {}, {
          width: xT,
          height: MT,
          minWidth: AT,
          minHeight: gT,
          maxHeight: hT
        }),
        ref: CT
      }, QT)
    }))
  },
  5612: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => qT
    });
    var iT = IT(46),
      zT = IT(4908),
      kT = IT.n(zT),
      WT = IT(4536),
      XT = IT(4606),
      BT = IT(5464),
      FT = IT(4918),
      ST = IT(5616);

    function DT(TT) {
      return DT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, DT(TT)
    }

    function LT(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        var IT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != IT) {
          var iT, zT, kT, WT, XT = [],
            BT = !0,
            FT = !1;
          try {
            if (kT = (IT = IT.call(TT)).next, 0 === oT) {
              if (Object(IT) !== IT) return;
              BT = !1
            } else
              for (; !(BT = (iT = kT.call(IT)).done) && (XT.push(iT.value), XT.length !== oT); BT = !0);
          } catch (TT) {
            FT = !0, zT = TT
          } finally {
            try {
              if (!BT && null != IT.return && (WT = IT.return(), Object(WT) !== WT)) return
            } finally {
              if (FT) throw zT
            }
          }
          return XT
        }
      }(TT, oT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return xT(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return xT(TT, oT)
      }(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xT(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function cT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, KT(iT.key), iT)
      }
    }

    function KT(TT) {
      var oT = function(TT, oT) {
        if ("object" != DT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != DT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == DT(oT) ? oT : oT + ""
    }
    var MT = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      rT = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      AT = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      gT = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      hT = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      wT = Object.keys(hT),
      mT = "NaN";
    var eT = function() {
      function TT(oT, IT) {
        ! function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, TT), this.num = oT, this.unit = IT, this.num = oT, this.unit = IT, Number.isNaN(oT) && (this.unit = ""), "" === IT || AT.test(IT) || (this.num = NaN, this.unit = ""), wT.includes(IT) && (this.num = function(TT, oT) {
          return TT * hT[oT]
        }(oT, IT), this.unit = "px")
      }
      return oT = TT, iT = [{
        key: "parse",
        value: function(oT) {
          var IT, iT = LT(null !== (IT = gT.exec(oT)) && void 0 !== IT ? IT : [], 3),
            zT = iT[1],
            kT = iT[2];
          return new TT(parseFloat(zT), null !== kT && void 0 !== kT ? kT : "")
        }
      }], (IT = [{
        key: "add",
        value: function(oT) {
          return this.unit !== oT.unit ? new TT(NaN, "") : new TT(this.num + oT.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(oT) {
          return this.unit !== oT.unit ? new TT(NaN, "") : new TT(this.num - oT.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(oT) {
          return "" !== this.unit && "" !== oT.unit && this.unit !== oT.unit ? new TT(NaN, "") : new TT(this.num * oT.num, this.unit || oT.unit)
        }
      }, {
        key: "divide",
        value: function(oT) {
          return "" !== this.unit && "" !== oT.unit && this.unit !== oT.unit ? new TT(NaN, "") : new TT(this.num / oT.num, this.unit || oT.unit)
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
      }]) && cT(oT.prototype, IT), iT && cT(oT, iT), Object.defineProperty(oT, "prototype", {
        writable: !1
      }), oT;
      var oT, IT, iT
    }();

    function RT(TT) {
      if (TT.includes(mT)) return mT;
      for (var oT = TT; oT.includes("*") || oT.includes("/");) {
        var IT, iT = LT(null !== (IT = MT.exec(oT)) && void 0 !== IT ? IT : [], 4),
          zT = iT[1],
          kT = iT[2],
          WT = iT[3],
          XT = eT.parse(null !== zT && void 0 !== zT ? zT : ""),
          BT = eT.parse(null !== WT && void 0 !== WT ? WT : ""),
          FT = "*" === kT ? XT.multiply(BT) : XT.divide(BT);
        if (FT.isNaN()) return mT;
        oT = oT.replace(MT, FT.toString())
      }
      for (; oT.includes("+") || /.-\d+(?:\.\d+)?/.test(oT);) {
        var ST, DT = LT(null !== (ST = rT.exec(oT)) && void 0 !== ST ? ST : [], 4),
          xT = DT[1],
          cT = DT[2],
          KT = DT[3],
          AT = eT.parse(null !== xT && void 0 !== xT ? xT : ""),
          gT = eT.parse(null !== KT && void 0 !== KT ? KT : ""),
          hT = "+" === cT ? AT.add(gT) : AT.subtract(gT);
        if (hT.isNaN()) return mT;
        oT = oT.replace(rT, hT.toString())
      }
      return oT
    }
    var uT = /\(([^()]*)\)/;

    function vT(TT) {
      var oT = TT.replace(/\s+/g, "");
      return oT = function(TT) {
        for (var oT = TT; oT.includes("(");) {
          var IT = LT(uT.exec(oT), 2)[1];
          oT = oT.replace(uT, RT(IT))
        }
        return oT
      }(oT), oT = RT(oT)
    }

    function ET(TT) {
      var oT = function(TT) {
        try {
          return vT(TT)
        } catch (oT) {
          return mT
        }
      }(TT.slice(5, -1));
      return oT === mT ? "" : oT
    }
    var fT = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      CT = ["dx", "dy", "angle", "className", "breakAll"];

    function jT() {
      return jT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, jT.apply(this, arguments)
    }

    function JT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function UT(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        var IT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != IT) {
          var iT, zT, kT, WT, XT = [],
            BT = !0,
            FT = !1;
          try {
            if (kT = (IT = IT.call(TT)).next, 0 === oT) {
              if (Object(IT) !== IT) return;
              BT = !1
            } else
              for (; !(BT = (iT = kT.call(IT)).done) && (XT.push(iT.value), XT.length !== oT); BT = !0);
          } catch (TT) {
            FT = !0, zT = TT
          } finally {
            try {
              if (!BT && null != IT.return && (WT = IT.return(), Object(WT) !== WT)) return
            } finally {
              if (FT) throw zT
            }
          }
          return XT
        }
      }(TT, oT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return aT(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return aT(TT, oT)
      }(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aT(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }
    var YT = /[ \f\n\r\t\v\u2028\u2029]+/,
      QT = function(TT) {
        var oT = TT.children,
          IT = TT.breakAll,
          iT = TT.style;
        try {
          var zT = [];
          return kT()(oT) || (zT = IT ? oT.toString().split("") : oT.toString().split(YT)), {
            wordsWithComputedWidth: zT.map((function(TT) {
              return {
                word: TT,
                width: (0, ST.h)(TT, iT).width
              }
            })),
            spaceWidth: IT ? 0 : (0, ST.h)("\xa0", iT).width
          }
        } catch (WT) {
          return null
        }
      },
      OT = function(TT) {
        return [{
          words: kT()(TT) ? [] : TT.toString().split(YT)
        }]
      },
      HT = function(TT) {
        var oT = TT.width,
          IT = TT.scaleToFit,
          iT = TT.children,
          zT = TT.style,
          kT = TT.breakAll,
          WT = TT.maxLines;
        if ((oT || IT) && !BT.b.isSsr) {
          var FT = QT({
            breakAll: kT,
            children: iT,
            style: zT
          });
          return FT ? function(TT, oT, IT, iT, zT) {
            var kT = TT.maxLines,
              WT = TT.children,
              BT = TT.style,
              FT = TT.breakAll,
              ST = (0, XT.C)(kT),
              DT = WT,
              LT = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(TT, oT) {
                  var kT = oT.word,
                    WT = oT.width,
                    XT = TT[TT.length - 1];
                  if (XT && (null == iT || zT || XT.width + WT + IT < Number(iT))) XT.words.push(kT), XT.width += WT + IT;
                  else {
                    var BT = {
                      words: [kT],
                      width: WT
                    };
                    TT.push(BT)
                  }
                  return TT
                }), [])
              },
              xT = LT(oT);
            if (!ST) return xT;
            for (var cT, KT = function(TT) {
                var oT = DT.slice(0, TT),
                  IT = QT({
                    breakAll: FT,
                    style: BT,
                    children: oT + "\u2026"
                  }).wordsWithComputedWidth,
                  zT = LT(IT),
                  WT = zT.length > kT || function(TT) {
                    return TT.reduce((function(TT, oT) {
                      return TT.width > oT.width ? TT : oT
                    }))
                  }(zT).width > Number(iT);
                return [WT, zT]
              }, MT = 0, rT = DT.length - 1, AT = 0; MT <= rT && AT <= DT.length - 1;) {
              var gT = Math.floor((MT + rT) / 2),
                hT = UT(KT(gT - 1), 2),
                wT = hT[0],
                mT = hT[1],
                eT = UT(KT(gT), 1)[0];
              if (wT || eT || (MT = gT + 1), wT && eT && (rT = gT - 1), !wT && eT) {
                cT = mT;
                break
              }
              AT++
            }
            return cT || xT
          }({
            breakAll: kT,
            children: iT,
            maxLines: WT,
            style: zT
          }, FT.wordsWithComputedWidth, FT.spaceWidth, oT, IT) : OT(iT)
        }
        return OT(iT)
      },
      nT = "#808080",
      qT = function(TT) {
        var oT = TT.x,
          IT = void 0 === oT ? 0 : oT,
          zT = TT.y,
          kT = void 0 === zT ? 0 : zT,
          BT = TT.lineHeight,
          ST = void 0 === BT ? "1em" : BT,
          DT = TT.capHeight,
          LT = void 0 === DT ? "0.71em" : DT,
          xT = TT.scaleToFit,
          cT = void 0 !== xT && xT,
          KT = TT.textAnchor,
          MT = void 0 === KT ? "start" : KT,
          rT = TT.verticalAnchor,
          AT = void 0 === rT ? "end" : rT,
          gT = TT.fill,
          hT = void 0 === gT ? nT : gT,
          wT = JT(TT, fT),
          mT = (0, iT.useMemo)((function() {
            return HT({
              breakAll: wT.breakAll,
              children: wT.children,
              maxLines: wT.maxLines,
              scaleToFit: cT,
              style: wT.style,
              width: wT.width
            })
          }), [wT.breakAll, wT.children, wT.maxLines, cT, wT.style, wT.width]),
          eT = wT.dx,
          RT = wT.dy,
          uT = wT.angle,
          vT = wT.className,
          UT = wT.breakAll,
          aT = JT(wT, CT);
        if (!(0, XT.y)(IT) || !(0, XT.y)(kT)) return null;
        var YT, QT = IT + ((0, XT.C)(eT) ? eT : 0),
          OT = kT + ((0, XT.C)(RT) ? RT : 0);
        switch (AT) {
          case "start":
            YT = ET("calc(".concat(LT, ")"));
            break;
          case "middle":
            YT = ET("calc(".concat((mT.length - 1) / 2, " * -").concat(ST, " + (").concat(LT, " / 2))"));
            break;
          default:
            YT = ET("calc(".concat(mT.length - 1, " * -").concat(ST, ")"))
        }
        var qT = [];
        if (cT) {
          var ZT = mT[0].width,
            lT = wT.width;
          qT.push("scale(".concat(((0, XT.C)(lT) ? lT / ZT : 1) / ZT, ")"))
        }
        return uT && qT.push("rotate(".concat(uT, ", ").concat(QT, ", ").concat(OT, ")")), qT.length && (aT.transform = qT.join(" ")), iT.createElement("text", jT({}, (0, FT.d)(aT, !0), {
          x: QT,
          y: OT,
          className: (0, WT.c)("recharts-text", vT),
          textAnchor: MT,
          fill: hT.includes("url") ? nT : hT
        }), mT.map((function(TT, oT) {
          var IT = TT.words.join(UT ? "" : " ");
          return iT.createElement("tspan", {
            x: QT,
            dy: 0 === oT ? YT : ST,
            key: "".concat(IT, "-").concat(oT)
          }, IT)
        })))
      }
  },
  5459: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => PT
    });
    var iT = IT(46),
      zT = IT(4998),
      kT = IT.n(zT),
      WT = IT(4908),
      XT = IT.n(WT),
      BT = IT(4536),
      FT = IT(4606);

    function ST(TT) {
      return ST = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, ST(TT)
    }

    function DT() {
      return DT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, DT.apply(this, arguments)
    }

    function LT(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        var IT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != IT) {
          var iT, zT, kT, WT, XT = [],
            BT = !0,
            FT = !1;
          try {
            if (kT = (IT = IT.call(TT)).next, 0 === oT) {
              if (Object(IT) !== IT) return;
              BT = !1
            } else
              for (; !(BT = (iT = kT.call(IT)).done) && (XT.push(iT.value), XT.length !== oT); BT = !0);
          } catch (TT) {
            FT = !0, zT = TT
          } finally {
            try {
              if (!BT && null != IT.return && (WT = IT.return(), Object(WT) !== WT)) return
            } finally {
              if (FT) throw zT
            }
          }
          return XT
        }
      }(TT, oT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return xT(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return xT(TT, oT)
      }(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xT(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function cT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function KT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? cT(Object(IT), !0).forEach((function(oT) {
          MT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : cT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function MT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != ST(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != ST(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == ST(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function rT(TT) {
      return Array.isArray(TT) && (0, FT.y)(TT[0]) && (0, FT.y)(TT[1]) ? TT.join(" ~ ") : TT
    }
    var AT = function(TT) {
      var oT = TT.separator,
        IT = void 0 === oT ? " : " : oT,
        zT = TT.contentStyle,
        WT = void 0 === zT ? {} : zT,
        ST = TT.itemStyle,
        xT = void 0 === ST ? {} : ST,
        cT = TT.labelStyle,
        MT = void 0 === cT ? {} : cT,
        AT = TT.payload,
        gT = TT.formatter,
        hT = TT.itemSorter,
        wT = TT.wrapperClassName,
        mT = TT.labelClassName,
        eT = TT.label,
        RT = TT.labelFormatter,
        uT = TT.accessibilityLayer,
        vT = void 0 !== uT && uT,
        ET = KT({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, WT),
        fT = KT({
          margin: 0
        }, MT),
        CT = !XT()(eT),
        jT = CT ? eT : "",
        JT = (0, BT.c)("recharts-default-tooltip", wT),
        UT = (0, BT.c)("recharts-tooltip-label", mT);
      CT && RT && void 0 !== AT && null !== AT && (jT = RT(eT, AT));
      var aT = vT ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return iT.createElement("div", DT({
        className: JT,
        style: ET
      }, aT), iT.createElement("p", {
        className: UT,
        style: fT
      }, iT.isValidElement(jT) ? jT : "".concat(jT)), function() {
        if (AT && AT.length) {
          var TT = (hT ? kT()(AT, hT) : AT).map((function(TT, oT) {
            if ("none" === TT.type) return null;
            var zT = KT({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: TT.color || "#000"
              }, xT),
              kT = TT.formatter || gT || rT,
              WT = TT.value,
              XT = TT.name,
              BT = WT,
              ST = XT;
            if (kT && null != BT && null != ST) {
              var DT = kT(WT, XT, TT, oT, AT);
              if (Array.isArray(DT)) {
                var cT = LT(DT, 2);
                BT = cT[0], ST = cT[1]
              } else BT = DT
            }
            return iT.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(oT),
              style: zT
            }, (0, FT.y)(ST) ? iT.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, ST) : null, (0, FT.y)(ST) ? iT.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, IT) : null, iT.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, BT), iT.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, TT.unit || ""))
          }));
          return iT.createElement("ul", {
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

    function gT(TT) {
      return gT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, gT(TT)
    }

    function hT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != gT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != gT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == gT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }
    var wT = "recharts-tooltip-wrapper",
      mT = {
        visibility: "hidden"
      };

    function eT(TT) {
      var oT = TT.coordinate,
        IT = TT.translateX,
        iT = TT.translateY;
      return (0, BT.c)(wT, hT(hT(hT(hT({}, "".concat(wT, "-right"), (0, FT.C)(IT) && oT && (0, FT.C)(oT.x) && IT >= oT.x), "".concat(wT, "-left"), (0, FT.C)(IT) && oT && (0, FT.C)(oT.x) && IT < oT.x), "".concat(wT, "-bottom"), (0, FT.C)(iT) && oT && (0, FT.C)(oT.y) && iT >= oT.y), "".concat(wT, "-top"), (0, FT.C)(iT) && oT && (0, FT.C)(oT.y) && iT < oT.y))
    }

    function RT(TT) {
      var oT = TT.allowEscapeViewBox,
        IT = TT.coordinate,
        iT = TT.key,
        zT = TT.offsetTopLeft,
        kT = TT.position,
        WT = TT.reverseDirection,
        XT = TT.tooltipDimension,
        BT = TT.viewBox,
        ST = TT.viewBoxDimension;
      if (kT && (0, FT.C)(kT[iT])) return kT[iT];
      var DT = IT[iT] - XT - zT,
        LT = IT[iT] + zT;
      return oT[iT] ? WT[iT] ? DT : LT : WT[iT] ? DT < BT[iT] ? Math.max(LT, BT[iT]) : Math.max(DT, BT[iT]) : LT + XT > BT[iT] + ST ? Math.max(DT, BT[iT]) : Math.max(LT, BT[iT])
    }

    function uT(TT) {
      return uT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, uT(TT)
    }

    function vT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function ET(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? vT(Object(IT), !0).forEach((function(oT) {
          aT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : vT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function fT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, YT(iT.key), iT)
      }
    }

    function CT(TT, oT, IT) {
      return oT = JT(oT),
        function(TT, oT) {
          if (oT && ("object" === uT(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, jT() ? Reflect.construct(oT, IT || [], JT(TT).constructor) : oT.apply(TT, IT))
    }

    function jT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (jT = function() {
        return !!TT
      })()
    }

    function JT(TT) {
      return JT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, JT(TT)
    }

    function UT(TT, oT) {
      return UT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, UT(TT, oT)
    }

    function aT(TT, oT, IT) {
      return (oT = YT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function YT(TT) {
      var oT = function(TT, oT) {
        if ("object" != uT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != uT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == uT(oT) ? oT : oT + ""
    }
    var QT = function(TT) {
        function oT() {
          var TT;
          ! function(TT, oT) {
            if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
          }(this, oT);
          for (var IT = arguments.length, iT = new Array(IT), zT = 0; zT < IT; zT++) iT[zT] = arguments[zT];
          return aT(TT = CT(this, oT, [].concat(iT)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), aT(TT, "handleKeyDown", (function(oT) {
            var IT, iT, zT, kT;
            "Escape" === oT.key && TT.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (IT = null === (iT = TT.props.coordinate) || void 0 === iT ? void 0 : iT.x) && void 0 !== IT ? IT : 0,
                y: null !== (zT = null === (kT = TT.props.coordinate) || void 0 === kT ? void 0 : kT.y) && void 0 !== zT ? zT : 0
              }
            })
          })), TT
        }
        return function(TT, oT) {
          if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
          TT.prototype = Object.create(oT && oT.prototype, {
            constructor: {
              value: TT,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(TT, "prototype", {
            writable: !1
          }), oT && UT(TT, oT)
        }(oT, TT), IT = oT, (zT = [{
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
            var TT, oT;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (TT = this.props.coordinate) || void 0 === TT ? void 0 : TT.x) === this.state.dismissedAtCoordinate.x && (null === (oT = this.props.coordinate) || void 0 === oT ? void 0 : oT.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var TT = this,
              oT = this.props,
              IT = oT.active,
              zT = oT.allowEscapeViewBox,
              kT = oT.animationDuration,
              WT = oT.animationEasing,
              XT = oT.children,
              BT = oT.coordinate,
              FT = oT.hasPayload,
              ST = oT.isAnimationActive,
              DT = oT.offset,
              LT = oT.position,
              xT = oT.reverseDirection,
              cT = oT.useTranslate3d,
              KT = oT.viewBox,
              MT = oT.wrapperStyle,
              rT = function(TT) {
                var oT, IT, iT = TT.allowEscapeViewBox,
                  zT = TT.coordinate,
                  kT = TT.offsetTopLeft,
                  WT = TT.position,
                  XT = TT.reverseDirection,
                  BT = TT.tooltipBox,
                  FT = TT.useTranslate3d,
                  ST = TT.viewBox;
                return {
                  cssProperties: BT.height > 0 && BT.width > 0 && zT ? function(TT) {
                    var oT = TT.translateX,
                      IT = TT.translateY;
                    return {
                      transform: TT.useTranslate3d ? "translate3d(".concat(oT, "px, ").concat(IT, "px, 0)") : "translate(".concat(oT, "px, ").concat(IT, "px)")
                    }
                  }({
                    translateX: oT = RT({
                      allowEscapeViewBox: iT,
                      coordinate: zT,
                      key: "x",
                      offsetTopLeft: kT,
                      position: WT,
                      reverseDirection: XT,
                      tooltipDimension: BT.width,
                      viewBox: ST,
                      viewBoxDimension: ST.width
                    }),
                    translateY: IT = RT({
                      allowEscapeViewBox: iT,
                      coordinate: zT,
                      key: "y",
                      offsetTopLeft: kT,
                      position: WT,
                      reverseDirection: XT,
                      tooltipDimension: BT.height,
                      viewBox: ST,
                      viewBoxDimension: ST.height
                    }),
                    useTranslate3d: FT
                  }) : mT,
                  cssClasses: eT({
                    translateX: oT,
                    translateY: IT,
                    coordinate: zT
                  })
                }
              }({
                allowEscapeViewBox: zT,
                coordinate: BT,
                offsetTopLeft: DT,
                position: LT,
                reverseDirection: xT,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: cT,
                viewBox: KT
              }),
              AT = rT.cssClasses,
              gT = rT.cssProperties,
              hT = ET(ET({
                transition: ST && IT ? "transform ".concat(kT, "ms ").concat(WT) : void 0
              }, gT), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && IT && FT ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, MT);
            return iT.createElement("div", {
              tabIndex: -1,
              className: AT,
              style: hT,
              ref: function(oT) {
                TT.wrapperNode = oT
              }
            }, XT)
          }
        }]) && fT(IT.prototype, zT), kT && fT(IT, kT), Object.defineProperty(IT, "prototype", {
          writable: !1
        }), IT;
        var IT, zT, kT
      }(iT.PureComponent),
      OT = IT(5464),
      HT = IT(5473);

    function nT(TT) {
      return nT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, nT(TT)
    }

    function qT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function ZT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? qT(Object(IT), !0).forEach((function(oT) {
          bT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : qT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function lT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, yT(iT.key), iT)
      }
    }

    function sT(TT, oT, IT) {
      return oT = GT(oT),
        function(TT, oT) {
          if (oT && ("object" === nT(oT) || "function" === typeof oT)) return oT;
          if (void 0 !== oT) throw new TypeError("Derived constructors may only return object or undefined");
          return function(TT) {
            if (void 0 === TT) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return TT
          }(TT)
        }(TT, tT() ? Reflect.construct(oT, IT || [], GT(TT).constructor) : oT.apply(TT, IT))
    }

    function tT() {
      try {
        var TT = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (TT) {}
      return (tT = function() {
        return !!TT
      })()
    }

    function GT(TT) {
      return GT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(TT) {
        return TT.__proto__ || Object.getPrototypeOf(TT)
      }, GT(TT)
    }

    function pT(TT, oT) {
      return pT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(TT, oT) {
        return TT.__proto__ = oT, TT
      }, pT(TT, oT)
    }

    function bT(TT, oT, IT) {
      return (oT = yT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function yT(TT) {
      var oT = function(TT, oT) {
        if ("object" != nT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != nT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == nT(oT) ? oT : oT + ""
    }

    function NT(TT) {
      return TT.dataKey
    }
    var PT = function(TT) {
      function oT() {
        return function(TT, oT) {
          if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
        }(this, oT), sT(this, oT, arguments)
      }
      return function(TT, oT) {
        if ("function" !== typeof oT && null !== oT) throw new TypeError("Super expression must either be null or a function");
        TT.prototype = Object.create(oT && oT.prototype, {
          constructor: {
            value: TT,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(TT, "prototype", {
          writable: !1
        }), oT && pT(TT, oT)
      }(oT, TT), IT = oT, (zT = [{
        key: "render",
        value: function() {
          var TT = this,
            oT = this.props,
            IT = oT.active,
            zT = oT.allowEscapeViewBox,
            kT = oT.animationDuration,
            WT = oT.animationEasing,
            XT = oT.content,
            BT = oT.coordinate,
            FT = oT.filterNull,
            ST = oT.isAnimationActive,
            DT = oT.offset,
            LT = oT.payload,
            xT = oT.payloadUniqBy,
            cT = oT.position,
            KT = oT.reverseDirection,
            MT = oT.useTranslate3d,
            rT = oT.viewBox,
            gT = oT.wrapperStyle,
            hT = null !== LT && void 0 !== LT ? LT : [];
          FT && hT.length && (hT = (0, HT.e)(LT.filter((function(oT) {
            return null != oT.value && (!0 !== oT.hide || TT.props.includeHidden)
          })), xT, NT));
          var wT = hT.length > 0;
          return iT.createElement(QT, {
            allowEscapeViewBox: zT,
            animationDuration: kT,
            animationEasing: WT,
            isAnimationActive: ST,
            active: IT,
            coordinate: BT,
            hasPayload: wT,
            offset: DT,
            position: cT,
            reverseDirection: KT,
            useTranslate3d: MT,
            viewBox: rT,
            wrapperStyle: gT
          }, function(TT, oT) {
            return iT.isValidElement(TT) ? iT.cloneElement(TT, oT) : "function" === typeof TT ? iT.createElement(TT, oT) : iT.createElement(AT, oT)
          }(XT, ZT(ZT({}, this.props), {}, {
            payload: hT
          })))
        }
      }]) && lT(IT.prototype, zT), kT && lT(IT, kT), Object.defineProperty(IT, "prototype", {
        writable: !1
      }), IT;
      var IT, zT, kT
    }(iT.PureComponent);
    bT(PT, "displayName", "Tooltip"), bT(PT, "defaultProps", {
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
      isAnimationActive: !OT.b.isSsr,
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
  5452: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => FT
    });
    var iT = IT(46),
      zT = IT(4536),
      kT = IT(4918),
      WT = ["children", "className"];

    function XT() {
      return XT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, XT.apply(this, arguments)
    }

    function BT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }
    var FT = iT.forwardRef((function(TT, oT) {
      var IT = TT.children,
        FT = TT.className,
        ST = BT(TT, WT),
        DT = (0, zT.c)("recharts-layer", FT);
      return iT.createElement("g", XT({
        className: DT
      }, (0, kT.d)(ST, !0), {
        ref: oT
      }), IT)
    }))
  },
  5446: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => FT
    });
    var iT = IT(46),
      zT = IT(4536),
      kT = IT(4918),
      WT = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function XT() {
      return XT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, XT.apply(this, arguments)
    }

    function BT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function FT(TT) {
      var oT = TT.children,
        IT = TT.width,
        FT = TT.height,
        ST = TT.viewBox,
        DT = TT.className,
        LT = TT.style,
        xT = TT.title,
        cT = TT.desc,
        KT = BT(TT, WT),
        MT = ST || {
          width: IT,
          height: FT,
          x: 0,
          y: 0
        },
        rT = (0, zT.c)("recharts-surface", DT);
      return iT.createElement("svg", XT({}, (0, kT.d)(KT, !0, "svg"), {
        className: rT,
        width: IT,
        height: FT,
        style: LT,
        viewBox: "".concat(MT.x, " ").concat(MT.y, " ").concat(MT.width, " ").concat(MT.height)
      }), iT.createElement("title", null, xT), iT.createElement("desc", null, cT), oT)
    }
  },
  5826: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => gT,
      e: () => mT,
      g: () => fT,
      i: () => ET,
      j: () => hT,
      k: () => vT,
      m: () => uT,
      n: () => wT,
      o: () => RT,
      r: () => eT
    });
    var iT = IT(46),
      zT = IT(5442),
      kT = IT(5832),
      WT = IT.n(kT),
      XT = IT(5744),
      BT = IT.n(XT),
      FT = IT(4677),
      ST = IT.n(FT)()((function(TT) {
        return {
          x: TT.left,
          y: TT.top,
          width: TT.width,
          height: TT.height
        }
      }), (function(TT) {
        return ["l", TT.left, "t", TT.top, "w", TT.width, "h", TT.height].join("")
      })),
      DT = IT(4606);
    var LT = (0, iT.createContext)(void 0),
      xT = (0, iT.createContext)(void 0),
      cT = (0, iT.createContext)(void 0),
      KT = (0, iT.createContext)({}),
      MT = (0, iT.createContext)(void 0),
      rT = (0, iT.createContext)(0),
      AT = (0, iT.createContext)(0),
      gT = function(TT) {
        var oT = TT.state,
          IT = oT.xAxisMap,
          zT = oT.yAxisMap,
          kT = oT.offset,
          WT = TT.clipPathId,
          XT = TT.children,
          BT = TT.width,
          FT = TT.height,
          DT = ST(kT);
        return iT.createElement(LT.Provider, {
          value: IT
        }, iT.createElement(xT.Provider, {
          value: zT
        }, iT.createElement(KT.Provider, {
          value: kT
        }, iT.createElement(cT.Provider, {
          value: DT
        }, iT.createElement(MT.Provider, {
          value: WT
        }, iT.createElement(rT.Provider, {
          value: FT
        }, iT.createElement(AT.Provider, {
          value: BT
        }, XT)))))))
      },
      hT = function() {
        return (0, iT.useContext)(MT)
      };
    var wT = function(TT) {
        var oT = (0, iT.useContext)(LT);
        null == oT && (0, zT.c)(!1);
        var IT = oT[TT];
        return null == IT && (0, zT.c)(!1), IT
      },
      mT = function() {
        var TT = (0, iT.useContext)(LT);
        return (0, DT.j)(TT)
      },
      eT = function() {
        var TT = (0, iT.useContext)(xT);
        return WT()(TT, (function(TT) {
          return BT()(TT.domain, Number.isFinite)
        })) || (0, DT.j)(TT)
      },
      RT = function(TT) {
        var oT = (0, iT.useContext)(xT);
        null == oT && (0, zT.c)(!1);
        var IT = oT[TT];
        return null == IT && (0, zT.c)(!1), IT
      },
      uT = function() {
        return (0, iT.useContext)(cT)
      },
      vT = function() {
        return (0, iT.useContext)(KT)
      },
      ET = function() {
        return (0, iT.useContext)(AT)
      },
      fT = function() {
        return (0, iT.useContext)(rT)
      }
  },
  5849: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => NT
    });
    var iT = IT(46);

    function zT() {}

    function kT(TT, oT, IT) {
      TT._context.bezierCurveTo((2 * TT._x0 + TT._x1) / 3, (2 * TT._y0 + TT._y1) / 3, (TT._x0 + 2 * TT._x1) / 3, (TT._y0 + 2 * TT._y1) / 3, (TT._x0 + 4 * TT._x1 + oT) / 6, (TT._y0 + 4 * TT._y1 + IT) / 6)
    }

    function WT(TT) {
      this._context = TT
    }

    function XT(TT) {
      this._context = TT
    }

    function BT(TT) {
      this._context = TT
    }
    WT.prototype = {
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
            kT(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(TT, oT) {
        switch (TT = +TT, oT = +oT, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(TT, oT) : this._context.moveTo(TT, oT);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            kT(this, TT, oT)
        }
        this._x0 = this._x1, this._x1 = TT, this._y0 = this._y1, this._y1 = oT
      }
    }, XT.prototype = {
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
      point: function(TT, oT) {
        switch (TT = +TT, oT = +oT, this._point) {
          case 0:
            this._point = 1, this._x2 = TT, this._y2 = oT;
            break;
          case 1:
            this._point = 2, this._x3 = TT, this._y3 = oT;
            break;
          case 2:
            this._point = 3, this._x4 = TT, this._y4 = oT, this._context.moveTo((this._x0 + 4 * this._x1 + TT) / 6, (this._y0 + 4 * this._y1 + oT) / 6);
            break;
          default:
            kT(this, TT, oT)
        }
        this._x0 = this._x1, this._x1 = TT, this._y0 = this._y1, this._y1 = oT
      }
    }, BT.prototype = {
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
      point: function(TT, oT) {
        switch (TT = +TT, oT = +oT, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var IT = (this._x0 + 4 * this._x1 + TT) / 6,
              iT = (this._y0 + 4 * this._y1 + oT) / 6;
            this._line ? this._context.lineTo(IT, iT) : this._context.moveTo(IT, iT);
            break;
          case 3:
            this._point = 4;
          default:
            kT(this, TT, oT)
        }
        this._x0 = this._x1, this._x1 = TT, this._y0 = this._y1, this._y1 = oT
      }
    };
    class FT {
      constructor(TT, oT) {
        this._context = TT, this._x = oT
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
      point(TT, oT) {
        switch (TT = +TT, oT = +oT, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(TT, oT) : this._context.moveTo(TT, oT);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + TT) / 2, this._y0, this._x0, oT, TT, oT) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + oT) / 2, TT, this._y0, TT, oT)
        }
        this._x0 = TT, this._y0 = oT
      }
    }

    function ST(TT) {
      this._context = TT
    }

    function DT(TT) {
      this._context = TT
    }

    function LT(TT) {
      return new DT(TT)
    }

    function xT(TT) {
      return TT < 0 ? -1 : 1
    }

    function cT(TT, oT, IT) {
      var iT = TT._x1 - TT._x0,
        zT = oT - TT._x1,
        kT = (TT._y1 - TT._y0) / (iT || zT < 0 && -0),
        WT = (IT - TT._y1) / (zT || iT < 0 && -0),
        XT = (kT * zT + WT * iT) / (iT + zT);
      return (xT(kT) + xT(WT)) * Math.min(Math.abs(kT), Math.abs(WT), .5 * Math.abs(XT)) || 0
    }

    function KT(TT, oT) {
      var IT = TT._x1 - TT._x0;
      return IT ? (3 * (TT._y1 - TT._y0) / IT - oT) / 2 : oT
    }

    function MT(TT, oT, IT) {
      var iT = TT._x0,
        zT = TT._y0,
        kT = TT._x1,
        WT = TT._y1,
        XT = (kT - iT) / 3;
      TT._context.bezierCurveTo(iT + XT, zT + XT * oT, kT - XT, WT - XT * IT, kT, WT)
    }

    function rT(TT) {
      this._context = TT
    }

    function AT(TT) {
      this._context = new gT(TT)
    }

    function gT(TT) {
      this._context = TT
    }

    function hT(TT) {
      this._context = TT
    }

    function wT(TT) {
      var oT, IT, iT = TT.length - 1,
        zT = new Array(iT),
        kT = new Array(iT),
        WT = new Array(iT);
      for (zT[0] = 0, kT[0] = 2, WT[0] = TT[0] + 2 * TT[1], oT = 1; oT < iT - 1; ++oT) zT[oT] = 1, kT[oT] = 4, WT[oT] = 4 * TT[oT] + 2 * TT[oT + 1];
      for (zT[iT - 1] = 2, kT[iT - 1] = 7, WT[iT - 1] = 8 * TT[iT - 1] + TT[iT], oT = 1; oT < iT; ++oT) IT = zT[oT] / kT[oT - 1], kT[oT] -= IT, WT[oT] -= IT * WT[oT - 1];
      for (zT[iT - 1] = WT[iT - 1] / kT[iT - 1], oT = iT - 2; oT >= 0; --oT) zT[oT] = (WT[oT] - zT[oT + 1]) / kT[oT];
      for (kT[iT - 1] = (TT[iT] + zT[iT - 1]) / 2, oT = 0; oT < iT - 1; ++oT) kT[oT] = 2 * TT[oT + 1] - zT[oT + 1];
      return [zT, kT]
    }

    function mT(TT, oT) {
      this._context = TT, this._t = oT
    }
    ST.prototype = {
      areaStart: zT,
      areaEnd: zT,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(TT, oT) {
        TT = +TT, oT = +oT, this._point ? this._context.lineTo(TT, oT) : (this._point = 1, this._context.moveTo(TT, oT))
      }
    }, DT.prototype = {
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
      point: function(TT, oT) {
        switch (TT = +TT, oT = +oT, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(TT, oT) : this._context.moveTo(TT, oT);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(TT, oT)
        }
      }
    }, rT.prototype = {
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
            MT(this, this._t0, KT(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(TT, oT) {
        var IT = NaN;
        if (oT = +oT, (TT = +TT) !== this._x1 || oT !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(TT, oT) : this._context.moveTo(TT, oT);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, MT(this, KT(this, IT = cT(this, TT, oT)), IT);
              break;
            default:
              MT(this, this._t0, IT = cT(this, TT, oT))
          }
          this._x0 = this._x1, this._x1 = TT, this._y0 = this._y1, this._y1 = oT, this._t0 = IT
        }
      }
    }, (AT.prototype = Object.create(rT.prototype)).point = function(TT, oT) {
      rT.prototype.point.call(this, oT, TT)
    }, gT.prototype = {
      moveTo: function(TT, oT) {
        this._context.moveTo(oT, TT)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(TT, oT) {
        this._context.lineTo(oT, TT)
      },
      bezierCurveTo: function(TT, oT, IT, iT, zT, kT) {
        this._context.bezierCurveTo(oT, TT, iT, IT, kT, zT)
      }
    }, hT.prototype = {
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
          oT = this._y,
          IT = TT.length;
        if (IT)
          if (this._line ? this._context.lineTo(TT[0], oT[0]) : this._context.moveTo(TT[0], oT[0]), 2 === IT) this._context.lineTo(TT[1], oT[1]);
          else
            for (var iT = wT(TT), zT = wT(oT), kT = 0, WT = 1; WT < IT; ++kT, ++WT) this._context.bezierCurveTo(iT[0][kT], zT[0][kT], iT[1][kT], zT[1][kT], TT[WT], oT[WT]);
        (this._line || 0 !== this._line && 1 === IT) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(TT, oT) {
        this._x.push(+TT), this._y.push(+oT)
      }
    }, mT.prototype = {
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
      point: function(TT, oT) {
        switch (TT = +TT, oT = +oT, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(TT, oT) : this._context.moveTo(TT, oT);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, oT), this._context.lineTo(TT, oT);
            else {
              var IT = this._x * (1 - this._t) + TT * this._t;
              this._context.lineTo(IT, this._y), this._context.lineTo(IT, oT)
            }
        }
        this._x = TT, this._y = oT
      }
    };
    var eT = IT(5696),
      RT = IT(5580),
      uT = IT(5585);

    function vT(TT) {
      return TT[0]
    }

    function ET(TT) {
      return TT[1]
    }

    function fT(TT, oT) {
      var IT = (0, RT.b)(!0),
        iT = null,
        zT = LT,
        kT = null,
        WT = (0, uT.c)(XT);

      function XT(XT) {
        var BT, FT, ST, DT = (XT = (0, eT.d)(XT)).length,
          LT = !1;
        for (null == iT && (kT = zT(ST = WT())), BT = 0; BT <= DT; ++BT) !(BT < DT && IT(FT = XT[BT], BT, XT)) === LT && ((LT = !LT) ? kT.lineStart() : kT.lineEnd()), LT && kT.point(+TT(FT, BT, XT), +oT(FT, BT, XT));
        if (ST) return kT = null, ST + "" || null
      }
      return TT = "function" === typeof TT ? TT : void 0 === TT ? vT : (0, RT.b)(TT), oT = "function" === typeof oT ? oT : void 0 === oT ? ET : (0, RT.b)(oT), XT.x = function(oT) {
        return arguments.length ? (TT = "function" === typeof oT ? oT : (0, RT.b)(+oT), XT) : TT
      }, XT.y = function(TT) {
        return arguments.length ? (oT = "function" === typeof TT ? TT : (0, RT.b)(+TT), XT) : oT
      }, XT.defined = function(TT) {
        return arguments.length ? (IT = "function" === typeof TT ? TT : (0, RT.b)(!!TT), XT) : IT
      }, XT.curve = function(TT) {
        return arguments.length ? (zT = TT, null != iT && (kT = zT(iT)), XT) : zT
      }, XT.context = function(TT) {
        return arguments.length ? (null == TT ? iT = kT = null : kT = zT(iT = TT), XT) : iT
      }, XT
    }

    function CT(TT, oT, IT) {
      var iT = null,
        zT = (0, RT.b)(!0),
        kT = null,
        WT = LT,
        XT = null,
        BT = (0, uT.c)(FT);

      function FT(FT) {
        var ST, DT, LT, xT, cT, KT = (FT = (0, eT.d)(FT)).length,
          MT = !1,
          rT = new Array(KT),
          AT = new Array(KT);
        for (null == kT && (XT = WT(cT = BT())), ST = 0; ST <= KT; ++ST) {
          if (!(ST < KT && zT(xT = FT[ST], ST, FT)) === MT)
            if (MT = !MT) DT = ST, XT.areaStart(), XT.lineStart();
            else {
              for (XT.lineEnd(), XT.lineStart(), LT = ST - 1; LT >= DT; --LT) XT.point(rT[LT], AT[LT]);
              XT.lineEnd(), XT.areaEnd()
            } MT && (rT[ST] = +TT(xT, ST, FT), AT[ST] = +oT(xT, ST, FT), XT.point(iT ? +iT(xT, ST, FT) : rT[ST], IT ? +IT(xT, ST, FT) : AT[ST]))
        }
        if (cT) return XT = null, cT + "" || null
      }

      function ST() {
        return fT().defined(zT).curve(WT).context(kT)
      }
      return TT = "function" === typeof TT ? TT : void 0 === TT ? vT : (0, RT.b)(+TT), oT = "function" === typeof oT ? oT : void 0 === oT ? (0, RT.b)(0) : (0, RT.b)(+oT), IT = "function" === typeof IT ? IT : void 0 === IT ? ET : (0, RT.b)(+IT), FT.x = function(oT) {
        return arguments.length ? (TT = "function" === typeof oT ? oT : (0, RT.b)(+oT), iT = null, FT) : TT
      }, FT.x0 = function(oT) {
        return arguments.length ? (TT = "function" === typeof oT ? oT : (0, RT.b)(+oT), FT) : TT
      }, FT.x1 = function(TT) {
        return arguments.length ? (iT = null == TT ? null : "function" === typeof TT ? TT : (0, RT.b)(+TT), FT) : iT
      }, FT.y = function(TT) {
        return arguments.length ? (oT = "function" === typeof TT ? TT : (0, RT.b)(+TT), IT = null, FT) : oT
      }, FT.y0 = function(TT) {
        return arguments.length ? (oT = "function" === typeof TT ? TT : (0, RT.b)(+TT), FT) : oT
      }, FT.y1 = function(TT) {
        return arguments.length ? (IT = null == TT ? null : "function" === typeof TT ? TT : (0, RT.b)(+TT), FT) : IT
      }, FT.lineX0 = FT.lineY0 = function() {
        return ST().x(TT).y(oT)
      }, FT.lineY1 = function() {
        return ST().x(TT).y(IT)
      }, FT.lineX1 = function() {
        return ST().x(iT).y(oT)
      }, FT.defined = function(TT) {
        return arguments.length ? (zT = "function" === typeof TT ? TT : (0, RT.b)(!!TT), FT) : zT
      }, FT.curve = function(TT) {
        return arguments.length ? (WT = TT, null != kT && (XT = WT(kT)), FT) : WT
      }, FT.context = function(TT) {
        return arguments.length ? (null == TT ? kT = XT = null : XT = WT(kT = TT), FT) : kT
      }, FT
    }
    var jT = IT(5537),
      JT = IT.n(jT),
      UT = IT(4728),
      aT = IT.n(UT),
      YT = IT(4536),
      QT = IT(4945),
      OT = IT(4918),
      HT = IT(4606);

    function nT(TT) {
      return nT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, nT(TT)
    }

    function qT() {
      return qT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, qT.apply(this, arguments)
    }

    function ZT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function lT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? ZT(Object(IT), !0).forEach((function(oT) {
          sT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : ZT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function sT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != nT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != nT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == nT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }
    var tT = {
        curveBasisClosed: function(TT) {
          return new XT(TT)
        },
        curveBasisOpen: function(TT) {
          return new BT(TT)
        },
        curveBasis: function(TT) {
          return new WT(TT)
        },
        curveBumpX: function(TT) {
          return new FT(TT, !0)
        },
        curveBumpY: function(TT) {
          return new FT(TT, !1)
        },
        curveLinearClosed: function(TT) {
          return new ST(TT)
        },
        curveLinear: LT,
        curveMonotoneX: function(TT) {
          return new rT(TT)
        },
        curveMonotoneY: function(TT) {
          return new AT(TT)
        },
        curveNatural: function(TT) {
          return new hT(TT)
        },
        curveStep: function(TT) {
          return new mT(TT, .5)
        },
        curveStepAfter: function(TT) {
          return new mT(TT, 1)
        },
        curveStepBefore: function(TT) {
          return new mT(TT, 0)
        }
      },
      GT = function(TT) {
        return TT.x === +TT.x && TT.y === +TT.y
      },
      pT = function(TT) {
        return TT.x
      },
      bT = function(TT) {
        return TT.y
      },
      yT = function(TT) {
        var oT, IT = TT.type,
          iT = void 0 === IT ? "linear" : IT,
          zT = TT.points,
          kT = void 0 === zT ? [] : zT,
          WT = TT.baseLine,
          XT = TT.layout,
          BT = TT.connectNulls,
          FT = void 0 !== BT && BT,
          ST = function(TT, oT) {
            if (aT()(TT)) return TT;
            var IT = "curve".concat(JT()(TT));
            return "curveMonotone" !== IT && "curveBump" !== IT || !oT ? tT[IT] || LT : tT["".concat(IT).concat("vertical" === oT ? "Y" : "X")]
          }(iT, XT),
          DT = FT ? kT.filter((function(TT) {
            return GT(TT)
          })) : kT;
        if (Array.isArray(WT)) {
          var xT = FT ? WT.filter((function(TT) {
              return GT(TT)
            })) : WT,
            cT = DT.map((function(TT, oT) {
              return lT(lT({}, TT), {}, {
                base: xT[oT]
              })
            }));
          return (oT = "vertical" === XT ? CT().y(bT).x1(pT).x0((function(TT) {
            return TT.base.x
          })) : CT().x(pT).y1(bT).y0((function(TT) {
            return TT.base.y
          }))).defined(GT).curve(ST), oT(cT)
        }
        return (oT = "vertical" === XT && (0, HT.C)(WT) ? CT().y(bT).x1(pT).x0(WT) : (0, HT.C)(WT) ? CT().x(pT).y1(bT).y0(WT) : fT().x(pT).y(bT)).defined(GT).curve(ST), oT(DT)
      },
      NT = function(TT) {
        var oT = TT.className,
          IT = TT.points,
          zT = TT.path,
          kT = TT.pathRef;
        if ((!IT || !IT.length) && !zT) return null;
        var WT = IT && IT.length ? yT(TT) : zT;
        return iT.createElement("path", qT({}, (0, OT.d)(TT, !1), (0, QT.k)(TT), {
          className: (0, YT.c)("recharts-curve", oT),
          d: WT,
          ref: kT
        }))
      }
  },
  5591: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => BT
    });
    var iT = IT(46),
      zT = IT(4536),
      kT = IT(4945),
      WT = IT(4918);

    function XT() {
      return XT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, XT.apply(this, arguments)
    }
    var BT = function(TT) {
      var oT = TT.cx,
        IT = TT.cy,
        BT = TT.r,
        FT = TT.className,
        ST = (0, zT.c)("recharts-dot", FT);
      return oT === +oT && IT === +IT && BT === +BT ? iT.createElement("circle", XT({}, (0, WT.d)(TT, !1), (0, kT.k)(TT), {
        className: ST,
        cx: oT,
        cy: IT,
        r: BT
      })) : null
    }
  },
  5595: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => rT,
      e: () => KT
    });
    var iT = IT(46),
      zT = IT(4536),
      kT = IT(5604),
      WT = IT(4918);

    function XT(TT) {
      return XT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, XT(TT)
    }

    function BT() {
      return BT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, BT.apply(this, arguments)
    }

    function FT(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        var IT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != IT) {
          var iT, zT, kT, WT, XT = [],
            BT = !0,
            FT = !1;
          try {
            if (kT = (IT = IT.call(TT)).next, 0 === oT) {
              if (Object(IT) !== IT) return;
              BT = !1
            } else
              for (; !(BT = (iT = kT.call(IT)).done) && (XT.push(iT.value), XT.length !== oT); BT = !0);
          } catch (TT) {
            FT = !0, zT = TT
          } finally {
            try {
              if (!BT && null != IT.return && (WT = IT.return(), Object(WT) !== WT)) return
            } finally {
              if (FT) throw zT
            }
          }
          return XT
        }
      }(TT, oT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return ST(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return ST(TT, oT)
      }(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ST(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function DT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function LT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? DT(Object(IT), !0).forEach((function(oT) {
          xT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : DT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function xT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != XT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != XT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == XT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }
    var cT = function(TT, oT, IT, iT, zT) {
        var kT, WT = Math.min(Math.abs(IT) / 2, Math.abs(iT) / 2),
          XT = iT >= 0 ? 1 : -1,
          BT = IT >= 0 ? 1 : -1,
          FT = iT >= 0 && IT >= 0 || iT < 0 && IT < 0 ? 1 : 0;
        if (WT > 0 && zT instanceof Array) {
          for (var ST = [0, 0, 0, 0], DT = 0; DT < 4; DT++) ST[DT] = zT[DT] > WT ? WT : zT[DT];
          kT = "M".concat(TT, ",").concat(oT + XT * ST[0]), ST[0] > 0 && (kT += "A ".concat(ST[0], ",").concat(ST[0], ",0,0,").concat(FT, ",").concat(TT + BT * ST[0], ",").concat(oT)), kT += "L ".concat(TT + IT - BT * ST[1], ",").concat(oT), ST[1] > 0 && (kT += "A ".concat(ST[1], ",").concat(ST[1], ",0,0,").concat(FT, ",\n        ").concat(TT + IT, ",").concat(oT + XT * ST[1])), kT += "L ".concat(TT + IT, ",").concat(oT + iT - XT * ST[2]), ST[2] > 0 && (kT += "A ".concat(ST[2], ",").concat(ST[2], ",0,0,").concat(FT, ",\n        ").concat(TT + IT - BT * ST[2], ",").concat(oT + iT)), kT += "L ".concat(TT + BT * ST[3], ",").concat(oT + iT), ST[3] > 0 && (kT += "A ".concat(ST[3], ",").concat(ST[3], ",0,0,").concat(FT, ",\n        ").concat(TT, ",").concat(oT + iT - XT * ST[3])), kT += "Z"
        } else if (WT > 0 && zT === +zT && zT > 0) {
          var LT = Math.min(WT, zT);
          kT = "M ".concat(TT, ",").concat(oT + XT * LT, "\n            A ").concat(LT, ",").concat(LT, ",0,0,").concat(FT, ",").concat(TT + BT * LT, ",").concat(oT, "\n            L ").concat(TT + IT - BT * LT, ",").concat(oT, "\n            A ").concat(LT, ",").concat(LT, ",0,0,").concat(FT, ",").concat(TT + IT, ",").concat(oT + XT * LT, "\n            L ").concat(TT + IT, ",").concat(oT + iT - XT * LT, "\n            A ").concat(LT, ",").concat(LT, ",0,0,").concat(FT, ",").concat(TT + IT - BT * LT, ",").concat(oT + iT, "\n            L ").concat(TT + BT * LT, ",").concat(oT + iT, "\n            A ").concat(LT, ",").concat(LT, ",0,0,").concat(FT, ",").concat(TT, ",").concat(oT + iT - XT * LT, " Z")
        } else kT = "M ".concat(TT, ",").concat(oT, " h ").concat(IT, " v ").concat(iT, " h ").concat(-IT, " Z");
        return kT
      },
      KT = function(TT, oT) {
        if (!TT || !oT) return !1;
        var IT = TT.x,
          iT = TT.y,
          zT = oT.x,
          kT = oT.y,
          WT = oT.width,
          XT = oT.height;
        if (Math.abs(WT) > 0 && Math.abs(XT) > 0) {
          var BT = Math.min(zT, zT + WT),
            FT = Math.max(zT, zT + WT),
            ST = Math.min(kT, kT + XT),
            DT = Math.max(kT, kT + XT);
          return IT >= BT && IT <= FT && iT >= ST && iT <= DT
        }
        return !1
      },
      MT = {
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
      rT = function(TT) {
        var oT = LT(LT({}, MT), TT),
          IT = (0, iT.useRef)(),
          XT = FT((0, iT.useState)(-1), 2),
          ST = XT[0],
          DT = XT[1];
        (0, iT.useEffect)((function() {
          if (IT.current && IT.current.getTotalLength) try {
            var TT = IT.current.getTotalLength();
            TT && DT(TT)
          } catch (oT) {}
        }), []);
        var xT = oT.x,
          KT = oT.y,
          rT = oT.width,
          AT = oT.height,
          gT = oT.radius,
          hT = oT.className,
          wT = oT.animationEasing,
          mT = oT.animationDuration,
          eT = oT.animationBegin,
          RT = oT.isAnimationActive,
          uT = oT.isUpdateAnimationActive;
        if (xT !== +xT || KT !== +KT || rT !== +rT || AT !== +AT || 0 === rT || 0 === AT) return null;
        var vT = (0, zT.c)("recharts-rectangle", hT);
        return uT ? iT.createElement(kT.d, {
          canBegin: ST > 0,
          from: {
            width: rT,
            height: AT,
            x: xT,
            y: KT
          },
          to: {
            width: rT,
            height: AT,
            x: xT,
            y: KT
          },
          duration: mT,
          animationEasing: wT,
          isActive: uT
        }, (function(TT) {
          var zT = TT.width,
            XT = TT.height,
            FT = TT.x,
            DT = TT.y;
          return iT.createElement(kT.d, {
            canBegin: ST > 0,
            from: "0px ".concat(-1 === ST ? 1 : ST, "px"),
            to: "".concat(ST, "px 0px"),
            attributeName: "strokeDasharray",
            hx: eT,
            duration: mT,
            isActive: RT,
            easing: wT
          }, iT.createElement("path", BT({}, (0, WT.d)(oT, !0), {
            className: vT,
            d: cT(FT, DT, zT, XT, gT),
            ref: IT
          })))
        })) : iT.createElement("path", BT({}, (0, WT.d)(oT, !0), {
          className: vT,
          d: cT(xT, KT, rT, AT, gT)
        }))
      }
  },
  5810: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => MT
    });
    var iT = IT(46),
      zT = IT(4536),
      kT = IT(4918),
      WT = IT(5712),
      XT = IT(4606);

    function BT(TT) {
      return BT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, BT(TT)
    }

    function FT() {
      return FT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, FT.apply(this, arguments)
    }

    function ST(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function DT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? ST(Object(IT), !0).forEach((function(oT) {
          LT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : ST(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function LT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != BT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != BT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == BT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }
    var xT = function(TT) {
        var oT = TT.cx,
          IT = TT.cy,
          iT = TT.radius,
          zT = TT.angle,
          kT = TT.sign,
          XT = TT.isExternal,
          BT = TT.cornerRadius,
          FT = TT.cornerIsExternal,
          ST = BT * (XT ? 1 : -1) + iT,
          DT = Math.asin(BT / ST) / WT.c,
          LT = FT ? zT : zT + kT * DT,
          xT = FT ? zT - kT * DT : zT;
        return {
          center: (0, WT.e)(oT, IT, ST, LT),
          circleTangency: (0, WT.e)(oT, IT, iT, LT),
          lineTangency: (0, WT.e)(oT, IT, ST * Math.cos(DT * WT.c), xT),
          ck: DT
        }
      },
      cT = function(TT) {
        var oT = TT.cx,
          IT = TT.cy,
          iT = TT.innerRadius,
          zT = TT.outerRadius,
          kT = TT.startAngle,
          BT = function(TT, oT) {
            return (0, XT.G)(oT - TT) * Math.min(Math.abs(oT - TT), 359.999)
          }(kT, TT.endAngle),
          FT = kT + BT,
          ST = (0, WT.e)(oT, IT, zT, kT),
          DT = (0, WT.e)(oT, IT, zT, FT),
          LT = "M ".concat(ST.x, ",").concat(ST.y, "\n    A ").concat(zT, ",").concat(zT, ",0,\n    ").concat(+(Math.abs(BT) > 180), ",").concat(+(kT > FT), ",\n    ").concat(DT.x, ",").concat(DT.y, "\n  ");
        if (iT > 0) {
          var xT = (0, WT.e)(oT, IT, iT, kT),
            cT = (0, WT.e)(oT, IT, iT, FT);
          LT += "L ".concat(cT.x, ",").concat(cT.y, "\n            A ").concat(iT, ",").concat(iT, ",0,\n            ").concat(+(Math.abs(BT) > 180), ",").concat(+(kT <= FT), ",\n            ").concat(xT.x, ",").concat(xT.y, " Z")
        } else LT += "L ".concat(oT, ",").concat(IT, " Z");
        return LT
      },
      KT = {
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
      MT = function(TT) {
        var oT = DT(DT({}, KT), TT),
          IT = oT.cx,
          WT = oT.cy,
          BT = oT.innerRadius,
          ST = oT.outerRadius,
          LT = oT.cornerRadius,
          MT = oT.forceCornerRadius,
          rT = oT.cornerIsExternal,
          AT = oT.startAngle,
          gT = oT.endAngle,
          hT = oT.className;
        if (ST < BT || AT === gT) return null;
        var wT, mT = (0, zT.c)("recharts-sector", hT),
          eT = ST - BT,
          RT = (0, XT.r)(LT, eT, 0, !0);
        return wT = RT > 0 && Math.abs(AT - gT) < 360 ? function(TT) {
          var oT = TT.cx,
            IT = TT.cy,
            iT = TT.innerRadius,
            zT = TT.outerRadius,
            kT = TT.cornerRadius,
            WT = TT.forceCornerRadius,
            BT = TT.cornerIsExternal,
            FT = TT.startAngle,
            ST = TT.endAngle,
            DT = (0, XT.G)(ST - FT),
            LT = xT({
              cx: oT,
              cy: IT,
              radius: zT,
              angle: FT,
              sign: DT,
              cornerRadius: kT,
              cornerIsExternal: BT
            }),
            KT = LT.circleTangency,
            MT = LT.lineTangency,
            rT = LT.ck,
            AT = xT({
              cx: oT,
              cy: IT,
              radius: zT,
              angle: ST,
              sign: -DT,
              cornerRadius: kT,
              cornerIsExternal: BT
            }),
            gT = AT.circleTangency,
            hT = AT.lineTangency,
            wT = AT.ck,
            mT = BT ? Math.abs(FT - ST) : Math.abs(FT - ST) - rT - wT;
          if (mT < 0) return WT ? "M ".concat(MT.x, ",").concat(MT.y, "\n        a").concat(kT, ",").concat(kT, ",0,0,1,").concat(2 * kT, ",0\n        a").concat(kT, ",").concat(kT, ",0,0,1,").concat(2 * -kT, ",0\n      ") : cT({
            cx: oT,
            cy: IT,
            innerRadius: iT,
            outerRadius: zT,
            startAngle: FT,
            endAngle: ST
          });
          var eT = "M ".concat(MT.x, ",").concat(MT.y, "\n    A").concat(kT, ",").concat(kT, ",0,0,").concat(+(DT < 0), ",").concat(KT.x, ",").concat(KT.y, "\n    A").concat(zT, ",").concat(zT, ",0,").concat(+(mT > 180), ",").concat(+(DT < 0), ",").concat(gT.x, ",").concat(gT.y, "\n    A").concat(kT, ",").concat(kT, ",0,0,").concat(+(DT < 0), ",").concat(hT.x, ",").concat(hT.y, "\n  ");
          if (iT > 0) {
            var RT = xT({
                cx: oT,
                cy: IT,
                radius: iT,
                angle: FT,
                sign: DT,
                isExternal: !0,
                cornerRadius: kT,
                cornerIsExternal: BT
              }),
              uT = RT.circleTangency,
              vT = RT.lineTangency,
              ET = RT.ck,
              fT = xT({
                cx: oT,
                cy: IT,
                radius: iT,
                angle: ST,
                sign: -DT,
                isExternal: !0,
                cornerRadius: kT,
                cornerIsExternal: BT
              }),
              CT = fT.circleTangency,
              jT = fT.lineTangency,
              JT = fT.ck,
              UT = BT ? Math.abs(FT - ST) : Math.abs(FT - ST) - ET - JT;
            if (UT < 0 && 0 === kT) return "".concat(eT, "L").concat(oT, ",").concat(IT, "Z");
            eT += "L".concat(jT.x, ",").concat(jT.y, "\n      A").concat(kT, ",").concat(kT, ",0,0,").concat(+(DT < 0), ",").concat(CT.x, ",").concat(CT.y, "\n      A").concat(iT, ",").concat(iT, ",0,").concat(+(UT > 180), ",").concat(+(DT > 0), ",").concat(uT.x, ",").concat(uT.y, "\n      A").concat(kT, ",").concat(kT, ",0,0,").concat(+(DT < 0), ",").concat(vT.x, ",").concat(vT.y, "Z")
          } else eT += "L".concat(oT, ",").concat(IT, "Z");
          return eT
        }({
          cx: IT,
          cy: WT,
          innerRadius: BT,
          outerRadius: ST,
          cornerRadius: Math.min(RT, eT / 2),
          forceCornerRadius: MT,
          cornerIsExternal: rT,
          startAngle: AT,
          endAngle: gT
        }) : cT({
          cx: IT,
          cy: WT,
          innerRadius: BT,
          outerRadius: ST,
          startAngle: AT,
          endAngle: gT
        }), iT.createElement("path", FT({}, (0, kT.d)(oT, !0), {
          className: mT,
          d: wT,
          role: "img"
        }))
      }
  },
  5534: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => lT
    });
    var iT = IT(46),
      zT = IT(5537),
      kT = IT.n(zT);
    Math.abs, Math.atan2;
    const WT = Math.cos,
      XT = (Math.max, Math.min, Math.sin),
      BT = Math.sqrt,
      FT = Math.PI,
      ST = 2 * FT;
    const DT = {
        draw(TT, oT) {
          const IT = BT(oT / FT);
          TT.moveTo(IT, 0), TT.arc(0, 0, IT, 0, ST)
        }
      },
      LT = {
        draw(TT, oT) {
          const IT = BT(oT / 5) / 2;
          TT.moveTo(-3 * IT, -IT), TT.lineTo(-IT, -IT), TT.lineTo(-IT, -3 * IT), TT.lineTo(IT, -3 * IT), TT.lineTo(IT, -IT), TT.lineTo(3 * IT, -IT), TT.lineTo(3 * IT, IT), TT.lineTo(IT, IT), TT.lineTo(IT, 3 * IT), TT.lineTo(-IT, 3 * IT), TT.lineTo(-IT, IT), TT.lineTo(-3 * IT, IT), TT.closePath()
        }
      },
      xT = BT(1 / 3),
      cT = 2 * xT,
      KT = {
        draw(TT, oT) {
          const IT = BT(oT / cT),
            iT = IT * xT;
          TT.moveTo(0, -IT), TT.lineTo(iT, 0), TT.lineTo(0, IT), TT.lineTo(-iT, 0), TT.closePath()
        }
      },
      MT = {
        draw(TT, oT) {
          const IT = BT(oT),
            iT = -IT / 2;
          TT.rect(iT, iT, IT, IT)
        }
      },
      rT = XT(FT / 10) / XT(7 * FT / 10),
      AT = XT(ST / 10) * rT,
      gT = -WT(ST / 10) * rT,
      hT = {
        draw(TT, oT) {
          const IT = BT(.8908130915292852 * oT),
            iT = AT * IT,
            zT = gT * IT;
          TT.moveTo(0, -IT), TT.lineTo(iT, zT);
          for (let kT = 1; kT < 5; ++kT) {
            const oT = ST * kT / 5,
              BT = WT(oT),
              FT = XT(oT);
            TT.lineTo(FT * IT, -BT * IT), TT.lineTo(BT * iT - FT * zT, FT * iT + BT * zT)
          }
          TT.closePath()
        }
      },
      wT = BT(3),
      mT = {
        draw(TT, oT) {
          const IT = -BT(oT / (3 * wT));
          TT.moveTo(0, 2 * IT), TT.lineTo(-wT * IT, -IT), TT.lineTo(wT * IT, -IT), TT.closePath()
        }
      },
      eT = -.5,
      RT = BT(3) / 2,
      uT = 1 / BT(12),
      vT = 3 * (uT / 2 + 1),
      ET = {
        draw(TT, oT) {
          const IT = BT(oT / vT),
            iT = IT / 2,
            zT = IT * uT,
            kT = iT,
            WT = IT * uT + IT,
            XT = -kT,
            FT = WT;
          TT.moveTo(iT, zT), TT.lineTo(kT, WT), TT.lineTo(XT, FT), TT.lineTo(eT * iT - RT * zT, RT * iT + eT * zT), TT.lineTo(eT * kT - RT * WT, RT * kT + eT * WT), TT.lineTo(eT * XT - RT * FT, RT * XT + eT * FT), TT.lineTo(eT * iT + RT * zT, eT * zT - RT * iT), TT.lineTo(eT * kT + RT * WT, eT * WT - RT * kT), TT.lineTo(eT * XT + RT * FT, eT * FT - RT * XT), TT.closePath()
        }
      };
    var fT = IT(5580),
      CT = IT(5585);
    BT(3), BT(3);
    var jT = IT(4536),
      JT = IT(4918);

    function UT(TT) {
      return UT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, UT(TT)
    }
    var aT = ["type", "size", "sizeType"];

    function YT() {
      return YT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, YT.apply(this, arguments)
    }

    function QT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function OT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? QT(Object(IT), !0).forEach((function(oT) {
          HT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : QT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function HT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != UT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != UT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == UT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function nT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }
    var qT = {
        symbolCircle: DT,
        symbolCross: LT,
        symbolDiamond: KT,
        symbolSquare: MT,
        symbolStar: hT,
        symbolTriangle: mT,
        symbolWye: ET
      },
      ZT = Math.PI / 180,
      lT = function(TT) {
        var oT = TT.type,
          IT = void 0 === oT ? "circle" : oT,
          zT = TT.size,
          WT = void 0 === zT ? 64 : zT,
          XT = TT.sizeType,
          BT = void 0 === XT ? "area" : XT,
          FT = OT(OT({}, nT(TT, aT)), {}, {
            type: IT,
            size: WT,
            sizeType: BT
          }),
          ST = FT.className,
          LT = FT.cx,
          xT = FT.cy,
          cT = (0, JT.d)(FT, !0);
        return LT === +LT && xT === +xT && WT === +WT ? iT.createElement("path", YT({}, cT, {
          className: (0, jT.c)("recharts-symbols", ST),
          transform: "translate(".concat(LT, ", ").concat(xT, ")"),
          d: function() {
            var TT = function(TT) {
                var oT = "symbol".concat(kT()(TT));
                return qT[oT] || DT
              }(IT),
              oT = function(TT, oT) {
                let IT = null,
                  iT = (0, CT.c)(zT);

                function zT() {
                  let zT;
                  if (IT || (IT = zT = iT()), TT.apply(this, arguments).draw(IT, +oT.apply(this, arguments)), zT) return IT = null, zT + "" || null
                }
                return TT = "function" === typeof TT ? TT : (0, fT.b)(TT || DT), oT = "function" === typeof oT ? oT : (0, fT.b)(void 0 === oT ? 64 : +oT), zT.type = function(oT) {
                  return arguments.length ? (TT = "function" === typeof oT ? oT : (0, fT.b)(oT), zT) : TT
                }, zT.size = function(TT) {
                  return arguments.length ? (oT = "function" === typeof TT ? TT : (0, fT.b)(+TT), zT) : oT
                }, zT.context = function(TT) {
                  return arguments.length ? (IT = null == TT ? null : TT, zT) : IT
                }, zT
              }().type(TT).size(function(TT, oT, IT) {
                if ("area" === oT) return TT;
                switch (IT) {
                  case "cross":
                    return 5 * TT * TT / 9;
                  case "diamond":
                    return .5 * TT * TT / Math.sqrt(3);
                  case "square":
                    return TT * TT;
                  case "star":
                    var iT = 18 * ZT;
                    return 1.25 * TT * TT * (Math.tan(iT) - Math.tan(2 * iT) * Math.pow(Math.tan(iT), 2));
                  case "triangle":
                    return Math.sqrt(3) * TT * TT / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * TT * TT / 8;
                  default:
                    return Math.PI * TT * TT / 4
                }
              }(WT, BT, IT));
            return oT()
          }()
        })) : null
      };
    lT.registerSymbol = function(TT, oT) {
      qT["symbol".concat(kT()(TT))] = oT
    }
  },
  5783: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => HT,
      f: () => GT,
      i: () => nT,
      m: () => qT,
      p: () => ZT
    });
    var iT = IT(46),
      zT = IT(4728),
      kT = IT.n(zT),
      WT = IT(5791),
      XT = IT.n(WT),
      BT = IT(5802),
      FT = IT.n(BT),
      ST = IT(5678),
      DT = IT.n(ST),
      LT = IT(5595),
      xT = IT(4536),
      cT = IT(5604),
      KT = IT(4918);

    function MT(TT) {
      return MT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, MT(TT)
    }

    function rT() {
      return rT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT) Object.prototype.hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, rT.apply(this, arguments)
    }

    function AT(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        var IT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != IT) {
          var iT, zT, kT, WT, XT = [],
            BT = !0,
            FT = !1;
          try {
            if (kT = (IT = IT.call(TT)).next, 0 === oT) {
              if (Object(IT) !== IT) return;
              BT = !1
            } else
              for (; !(BT = (iT = kT.call(IT)).done) && (XT.push(iT.value), XT.length !== oT); BT = !0);
          } catch (TT) {
            FT = !0, zT = TT
          } finally {
            try {
              if (!BT && null != IT.return && (WT = IT.return(), Object(WT) !== WT)) return
            } finally {
              if (FT) throw zT
            }
          }
          return XT
        }
      }(TT, oT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return gT(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return gT(TT, oT)
      }(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gT(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function hT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function wT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? hT(Object(IT), !0).forEach((function(oT) {
          mT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : hT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function mT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != MT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != MT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == MT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }
    var eT = function(TT, oT, IT, iT, zT) {
        var kT, WT = IT - iT;
        return kT = "M ".concat(TT, ",").concat(oT), kT += "L ".concat(TT + IT, ",").concat(oT), kT += "L ".concat(TT + IT - WT / 2, ",").concat(oT + zT), kT += "L ".concat(TT + IT - WT / 2 - iT, ",").concat(oT + zT), kT += "L ".concat(TT, ",").concat(oT, " Z")
      },
      RT = {
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
      uT = function(TT) {
        var oT = wT(wT({}, RT), TT),
          IT = (0, iT.useRef)(),
          zT = AT((0, iT.useState)(-1), 2),
          kT = zT[0],
          WT = zT[1];
        (0, iT.useEffect)((function() {
          if (IT.current && IT.current.getTotalLength) try {
            var TT = IT.current.getTotalLength();
            TT && WT(TT)
          } catch (oT) {}
        }), []);
        var XT = oT.x,
          BT = oT.y,
          FT = oT.upperWidth,
          ST = oT.lowerWidth,
          DT = oT.height,
          LT = oT.className,
          MT = oT.animationEasing,
          gT = oT.animationDuration,
          hT = oT.animationBegin,
          mT = oT.isUpdateAnimationActive;
        if (XT !== +XT || BT !== +BT || FT !== +FT || ST !== +ST || DT !== +DT || 0 === FT && 0 === ST || 0 === DT) return null;
        var uT = (0, xT.c)("recharts-trapezoid", LT);
        return mT ? iT.createElement(cT.d, {
          canBegin: kT > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: DT,
            x: XT,
            y: BT
          },
          to: {
            upperWidth: FT,
            lowerWidth: ST,
            height: DT,
            x: XT,
            y: BT
          },
          duration: gT,
          animationEasing: MT,
          isActive: mT
        }, (function(TT) {
          var zT = TT.upperWidth,
            WT = TT.lowerWidth,
            XT = TT.height,
            BT = TT.x,
            FT = TT.y;
          return iT.createElement(cT.d, {
            canBegin: kT > 0,
            from: "0px ".concat(-1 === kT ? 1 : kT, "px"),
            to: "".concat(kT, "px 0px"),
            attributeName: "strokeDasharray",
            hx: hT,
            duration: gT,
            easing: MT
          }, iT.createElement("path", rT({}, (0, KT.d)(oT, !0), {
            className: uT,
            d: eT(BT, FT, zT, WT, XT),
            ref: IT
          })))
        })) : iT.createElement("g", null, iT.createElement("path", rT({}, (0, KT.d)(oT, !0), {
          className: uT,
          d: eT(XT, BT, FT, ST, DT)
        })))
      },
      vT = IT(5810),
      ET = IT(5452),
      fT = IT(5534),
      CT = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function jT(TT) {
      return jT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, jT(TT)
    }

    function JT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function UT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function aT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? UT(Object(IT), !0).forEach((function(oT) {
          YT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : UT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function YT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != jT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != jT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == jT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function QT(TT, oT) {
      return aT(aT({}, oT), TT)
    }

    function OT(TT) {
      var oT = TT.shapeType,
        IT = TT.elementProps;
      switch (oT) {
        case "rectangle":
          return iT.createElement(LT.b, IT);
        case "trapezoid":
          return iT.createElement(uT, IT);
        case "sector":
          return iT.createElement(vT.c, IT);
        case "symbols":
          if (function(TT) {
              return "symbols" === TT
            }(oT)) return iT.createElement(fT.e, IT);
          break;
        default:
          return null
      }
    }

    function HT(TT) {
      var oT, IT = TT.option,
        zT = TT.shapeType,
        WT = TT.propTransformer,
        BT = void 0 === WT ? QT : WT,
        ST = TT.activeClassName,
        DT = void 0 === ST ? "recharts-active-shape" : ST,
        LT = TT.isActive,
        xT = JT(TT, CT);
      if ((0, iT.isValidElement)(IT)) oT = (0, iT.cloneElement)(IT, aT(aT({}, xT), function(TT) {
        return (0, iT.isValidElement)(TT) ? TT.props : TT
      }(IT)));
      else if (kT()(IT)) oT = IT(xT);
      else if (XT()(IT) && !FT()(IT)) {
        var cT = BT(IT, xT);
        oT = iT.createElement(OT, {
          shapeType: zT,
          elementProps: cT
        })
      } else {
        var KT = xT;
        oT = iT.createElement(OT, {
          shapeType: zT,
          elementProps: KT
        })
      }
      return LT ? iT.createElement(ET.e, {
        className: DT
      }, oT) : oT
    }

    function nT(TT, oT) {
      return null != oT && "trapezoids" in TT.props
    }

    function qT(TT, oT) {
      return null != oT && "sectors" in TT.props
    }

    function ZT(TT, oT) {
      return null != oT && "points" in TT.props
    }

    function lT(TT, oT) {
      var IT, iT, zT = TT.x === (null === oT || void 0 === oT || null === (IT = oT.labelViewBox) || void 0 === IT ? void 0 : IT.x) || TT.x === oT.x,
        kT = TT.y === (null === oT || void 0 === oT || null === (iT = oT.labelViewBox) || void 0 === iT ? void 0 : iT.y) || TT.y === oT.y;
      return zT && kT
    }

    function sT(TT, oT) {
      var IT = TT.endAngle === oT.endAngle,
        iT = TT.startAngle === oT.startAngle;
      return IT && iT
    }

    function tT(TT, oT) {
      var IT = TT.x === oT.x,
        iT = TT.y === oT.y,
        zT = TT.z === oT.z;
      return IT && iT && zT
    }

    function GT(TT) {
      var oT = TT.activeTooltipItem,
        IT = TT.graphicalItem,
        iT = TT.itemData,
        zT = function(TT, oT) {
          var IT;
          return nT(TT, oT) ? IT = "trapezoids" : qT(TT, oT) ? IT = "sectors" : ZT(TT, oT) && (IT = "points"), IT
        }(IT, oT),
        kT = function(TT, oT) {
          var IT, iT;
          return nT(TT, oT) ? null === (IT = oT.tooltipPayload) || void 0 === IT || null === (IT = IT[0]) || void 0 === IT || null === (IT = IT.payload) || void 0 === IT ? void 0 : IT.payload : qT(TT, oT) ? null === (iT = oT.tooltipPayload) || void 0 === iT || null === (iT = iT[0]) || void 0 === iT || null === (iT = iT.payload) || void 0 === iT ? void 0 : iT.payload : ZT(TT, oT) ? oT.payload : {}
        }(IT, oT),
        WT = iT.filter((function(TT, iT) {
          var WT = DT()(kT, TT),
            XT = IT.props[zT].filter((function(TT) {
              var iT = function(TT, oT) {
                var IT;
                return nT(TT, oT) ? IT = lT : qT(TT, oT) ? IT = sT : ZT(TT, oT) && (IT = tT), IT
              }(IT, oT);
              return iT(TT, oT)
            })),
            BT = IT.props[zT].indexOf(XT[XT.length - 1]);
          return WT && iT === BT
        }));
      return iT.indexOf(WT[WT.length - 1])
    }
  },
  5724: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => wT,
      f: () => rT,
      h: () => mT,
      k: () => gT,
      m: () => AT
    });
    var iT = IT(5729),
      zT = IT.n(iT),
      kT = IT(5744),
      WT = IT.n(kT),
      XT = IT(5619),
      BT = IT(4918),
      FT = IT(4606),
      ST = IT(5761);

    function DT(TT) {
      return DT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, DT(TT)
    }

    function LT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, MT(iT.key), iT)
      }
    }

    function xT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function cT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? xT(Object(IT), !0).forEach((function(oT) {
          KT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : xT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function KT(TT, oT, IT) {
      return (oT = MT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function MT(TT) {
      var oT = function(TT, oT) {
        if ("object" != DT(TT) || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != DT(iT)) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == DT(oT) ? oT : oT + ""
    }
    var rT = function(TT, oT, IT, iT, zT) {
        var kT = TT.width,
          WT = TT.height,
          DT = TT.layout,
          LT = TT.children,
          xT = Object.keys(oT),
          MT = {
            left: IT.left,
            leftMirror: IT.left,
            right: kT - IT.right,
            rightMirror: kT - IT.right,
            top: IT.top,
            topMirror: IT.top,
            bottom: WT - IT.bottom,
            bottomMirror: WT - IT.bottom
          },
          rT = !!(0, BT.i)(LT, ST.b);
        return xT.reduce((function(kT, WT) {
          var BT, ST, LT, xT, AT, gT = oT[WT],
            hT = gT.orientation,
            wT = gT.domain,
            mT = gT.padding,
            eT = void 0 === mT ? {} : mT,
            RT = gT.mirror,
            uT = gT.reversed,
            vT = "".concat(hT).concat(RT ? "Mirror" : "");
          if ("number" === gT.type && ("gap" === gT.padding || "no-gap" === gT.padding)) {
            var ET = wT[1] - wT[0],
              fT = 1 / 0,
              CT = gT.categoricalDomain.sort(FT.e);
            if (CT.forEach((function(TT, oT) {
                oT > 0 && (fT = Math.min((TT || 0) - (CT[oT - 1] || 0), fT))
              })), Number.isFinite(fT)) {
              var jT = fT / ET,
                JT = "vertical" === gT.layout ? IT.height : IT.width;
              if ("gap" === gT.padding && (BT = jT * JT / 2), "no-gap" === gT.padding) {
                var UT = (0, FT.r)(TT.barCategoryGap, jT * JT),
                  aT = jT * JT / 2;
                BT = aT - UT - (aT - UT) / JT * UT
              }
            }
          }
          ST = "xAxis" === iT ? [IT.left + (eT.left || 0) + (BT || 0), IT.left + IT.width - (eT.right || 0) - (BT || 0)] : "yAxis" === iT ? "horizontal" === DT ? [IT.top + IT.height - (eT.bottom || 0), IT.top + (eT.top || 0)] : [IT.top + (eT.top || 0) + (BT || 0), IT.top + IT.height - (eT.bottom || 0) - (BT || 0)] : gT.range, uT && (ST = [ST[1], ST[0]]);
          var YT = (0, XT.eb)(gT, zT, rT),
            QT = YT.scale,
            OT = YT.realScaleType;
          QT.domain(wT).range(ST), (0, XT.k)(QT);
          var HT = (0, XT.U)(QT, cT(cT({}, gT), {}, {
            realScaleType: OT
          }));
          "xAxis" === iT ? (AT = "top" === hT && !RT || "bottom" === hT && RT, LT = IT.left, xT = MT[vT] - AT * gT.height) : "yAxis" === iT && (AT = "left" === hT && !RT || "right" === hT && RT, LT = MT[vT] - AT * gT.width, xT = IT.top);
          var nT = cT(cT(cT({}, gT), HT), {}, {
            realScaleType: OT,
            x: LT,
            y: xT,
            scale: QT,
            width: "xAxis" === iT ? IT.width : gT.width,
            height: "yAxis" === iT ? IT.height : gT.height
          });
          return nT.bandSize = (0, XT.q)(nT, HT), gT.hide || "xAxis" !== iT ? gT.hide || (MT[vT] += (AT ? -1 : 1) * nT.width) : MT[vT] += (AT ? -1 : 1) * nT.height, cT(cT({}, kT), {}, KT({}, WT, nT))
        }), {})
      },
      AT = function(TT, oT) {
        var IT = TT.x,
          iT = TT.y,
          zT = oT.x,
          kT = oT.y;
        return {
          x: Math.min(IT, zT),
          y: Math.min(iT, kT),
          width: Math.abs(zT - IT),
          height: Math.abs(kT - iT)
        }
      },
      gT = function(TT) {
        var oT = TT.x1,
          IT = TT.y1,
          iT = TT.x2,
          zT = TT.y2;
        return AT({
          x: oT,
          y: IT
        }, {
          x: iT,
          y: zT
        })
      },
      hT = function() {
        function TT(oT) {
          ! function(TT, oT) {
            if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
          }(this, TT), this.scale = oT
        }
        return oT = TT, IT = [{
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
            var oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              IT = oT.bandAware,
              iT = oT.position;
            if (void 0 !== TT) {
              if (iT) switch (iT) {
                case "start":
                default:
                  return this.scale(TT);
                case "middle":
                  var zT = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(TT) + zT;
                case "end":
                  var kT = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(TT) + kT
              }
              if (IT) {
                var WT = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(TT) + WT
              }
              return this.scale(TT)
            }
          }
        }, {
          key: "isInRange",
          value: function(TT) {
            var oT = this.range(),
              IT = oT[0],
              iT = oT[oT.length - 1];
            return IT <= iT ? TT >= IT && TT <= iT : TT >= iT && TT <= IT
          }
        }], iT = [{
          key: "create",
          value: function(oT) {
            return new TT(oT)
          }
        }], IT && LT(oT.prototype, IT), iT && LT(oT, iT), Object.defineProperty(oT, "prototype", {
          writable: !1
        }), oT;
        var oT, IT, iT
      }();
    KT(hT, "EPS", 1e-4);
    var wT = function(TT) {
      var oT = Object.keys(TT).reduce((function(oT, IT) {
        return cT(cT({}, oT), {}, KT({}, IT, hT.create(TT[IT])))
      }), {});
      return cT(cT({}, oT), {}, {
        apply: function(TT) {
          var IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            iT = IT.bandAware,
            kT = IT.position;
          return zT()(TT, (function(TT, IT) {
            return oT[IT].apply(TT, {
              bandAware: iT,
              position: kT
            })
          }))
        },
        isInRange: function(TT) {
          return WT()(TT, (function(TT, IT) {
            return oT[IT].isInRange(TT)
          }))
        }
      })
    };
    var mT = function(TT) {
      var oT = TT.width,
        IT = TT.height,
        iT = function(TT) {
          return (TT % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        zT = iT * Math.PI / 180,
        kT = Math.atan(IT / oT),
        WT = zT > kT && zT < Math.PI - kT ? IT / Math.sin(zT) : oT / Math.cos(zT);
      return Math.abs(WT)
    }
  },
  5619: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => OW,
      i: () => UW,
      k: () => yW,
      o: () => GW,
      p: () => NW,
      q: () => SX,
      s: () => QW,
      t: () => YW,
      w: () => zX,
      x: () => iX,
      y: () => IX,
      B: () => lW,
      E: () => JW,
      H: () => qW,
      I: () => WX,
      M: () => aW,
      O: () => TX,
      P: () => kX,
      S: () => sW,
      U: () => oX,
      X: () => LX,
      $: () => jW,
      ab: () => ZW,
      bb: () => DX,
      cb: () => nW,
      eb: () => pW,
      ib: () => FX,
      kb: () => PW
    });
    var iT = {};
    IT.r(iT), IT.d(iT, {
      scaleBand: () => zT.d,
      scaleDiverging: () => xk,
      scaleDivergingLog: () => ck,
      scaleDivergingPow: () => Mk,
      scaleDivergingSqrt: () => rk,
      scaleDivergingSymlog: () => Kk,
      scaleIdentity: () => No,
      scaleImplicit: () => DI.f,
      scaleLinear: () => yo,
      scaleLog: () => WI,
      scaleOrdinal: () => DI.d,
      scalePoint: () => zT.e,
      scalePow: () => MI,
      scaleQuantile: () => fI,
      scaleQuantize: () => CI,
      scaleRadial: () => gI,
      scaleSequential: () => Wk,
      scaleSequentialLog: () => Xk,
      scaleSequentialPow: () => Fk,
      scaleSequentialQuantile: () => Dk,
      scaleSequentialSqrt: () => Sk,
      scaleSequentialSymlog: () => Bk,
      scaleSqrt: () => rI,
      scaleSymlog: () => SI,
      scaleThreshold: () => jI,
      scaleTime: () => Ik,
      scaleUtc: () => ik,
      tickFormat: () => po
    });
    var zT = IT(5624);
    const kT = Math.sqrt(50),
      WT = Math.sqrt(10),
      XT = Math.sqrt(2);

    function BT(TT, oT, IT) {
      const iT = (oT - TT) / Math.max(0, IT),
        zT = Math.floor(Math.log10(iT)),
        FT = iT / Math.pow(10, zT),
        ST = FT >= kT ? 10 : FT >= WT ? 5 : FT >= XT ? 2 : 1;
      let DT, LT, xT;
      return zT < 0 ? (xT = Math.pow(10, -zT) / ST, DT = Math.round(TT * xT), LT = Math.round(oT * xT), DT / xT < TT && ++DT, LT / xT > oT && --LT, xT = -xT) : (xT = Math.pow(10, zT) * ST, DT = Math.round(TT / xT), LT = Math.round(oT / xT), DT * xT < TT && ++DT, LT * xT > oT && --LT), LT < DT && .5 <= IT && IT < 2 ? BT(TT, oT, 2 * IT) : [DT, LT, xT]
    }

    function FT(TT, oT, IT) {
      if (!((IT = +IT) > 0)) return [];
      if ((TT = +TT) === (oT = +oT)) return [TT];
      const iT = oT < TT,
        [zT, kT, WT] = iT ? BT(oT, TT, IT) : BT(TT, oT, IT);
      if (!(kT >= zT)) return [];
      const XT = kT - zT + 1,
        FT = new Array(XT);
      if (iT)
        if (WT < 0)
          for (let BT = 0; BT < XT; ++BT) FT[BT] = (kT - BT) / -WT;
        else
          for (let BT = 0; BT < XT; ++BT) FT[BT] = (kT - BT) * WT;
      else if (WT < 0)
        for (let BT = 0; BT < XT; ++BT) FT[BT] = (zT + BT) / -WT;
      else
        for (let BT = 0; BT < XT; ++BT) FT[BT] = (zT + BT) * WT;
      return FT
    }

    function ST(TT, oT, IT) {
      return BT(TT = +TT, oT = +oT, IT = +IT)[2]
    }

    function DT(TT, oT, IT) {
      IT = +IT;
      const iT = (oT = +oT) < (TT = +TT),
        zT = iT ? ST(oT, TT, IT) : ST(TT, oT, IT);
      return (iT ? -1 : 1) * (zT < 0 ? 1 / -zT : zT)
    }

    function LT(TT, oT) {
      return null == TT || null == oT ? NaN : TT < oT ? -1 : TT > oT ? 1 : TT >= oT ? 0 : NaN
    }

    function xT(TT, oT) {
      return null == TT || null == oT ? NaN : oT < TT ? -1 : oT > TT ? 1 : oT >= TT ? 0 : NaN
    }

    function cT(TT) {
      let oT, IT, iT;

      function zT(TT, iT) {
        let zT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length;
        if (zT < kT) {
          if (0 !== oT(iT, iT)) return kT;
          do {
            const oT = zT + kT >>> 1;
            IT(TT[oT], iT) < 0 ? zT = oT + 1 : kT = oT
          } while (zT < kT)
        }
        return zT
      }
      return 2 !== TT.length ? (oT = LT, IT = (oT, IT) => LT(TT(oT), IT), iT = (oT, IT) => TT(oT) - IT) : (oT = TT === LT || TT === xT ? TT : KT, IT = TT, iT = TT), {
        left: zT,
        center: function(TT, oT) {
          let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const kT = zT(TT, oT, IT, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length) - 1);
          return kT > IT && iT(TT[kT - 1], oT) > -iT(TT[kT], oT) ? kT - 1 : kT
        },
        right: function(TT, iT) {
          let zT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            kT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length;
          if (zT < kT) {
            if (0 !== oT(iT, iT)) return kT;
            do {
              const oT = zT + kT >>> 1;
              IT(TT[oT], iT) <= 0 ? zT = oT + 1 : kT = oT
            } while (zT < kT)
          }
          return zT
        }
      }
    }

    function KT() {
      return 0
    }

    function MT(TT) {
      return null === TT ? NaN : +TT
    }
    const rT = cT(LT),
      AT = rT.right,
      gT = (rT.left, cT(MT).center, AT);

    function hT(TT, oT, IT) {
      TT.prototype = oT.prototype = IT, IT.constructor = TT
    }

    function wT(TT, oT) {
      var IT = Object.create(TT.prototype);
      for (var iT in oT) IT[iT] = oT[iT];
      return IT
    }

    function mT() {}
    var eT = .7,
      RT = 1 / eT,
      uT = "\\s*([+-]?\\d+)\\s*",
      vT = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      ET = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      fT = /^#([0-9a-f]{3,8})$/,
      CT = new RegExp(`^rgb\\(${uT},${uT},${uT}\\)$`),
      jT = new RegExp(`^rgb\\(${ET},${ET},${ET}\\)$`),
      JT = new RegExp(`^rgba\\(${uT},${uT},${uT},${vT}\\)$`),
      UT = new RegExp(`^rgba\\(${ET},${ET},${ET},${vT}\\)$`),
      aT = new RegExp(`^hsl\\(${vT},${ET},${ET}\\)$`),
      YT = new RegExp(`^hsla\\(${vT},${ET},${ET},${vT}\\)$`),
      QT = {
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

    function OT() {
      return this.rgb().formatHex()
    }

    function HT() {
      return this.rgb().formatRgb()
    }

    function nT(TT) {
      var oT, IT;
      return TT = (TT + "").trim().toLowerCase(), (oT = fT.exec(TT)) ? (IT = oT[1].length, oT = parseInt(oT[1], 16), 6 === IT ? qT(oT) : 3 === IT ? new sT(oT >> 8 & 15 | oT >> 4 & 240, oT >> 4 & 15 | 240 & oT, (15 & oT) << 4 | 15 & oT, 1) : 8 === IT ? ZT(oT >> 24 & 255, oT >> 16 & 255, oT >> 8 & 255, (255 & oT) / 255) : 4 === IT ? ZT(oT >> 12 & 15 | oT >> 8 & 240, oT >> 8 & 15 | oT >> 4 & 240, oT >> 4 & 15 | 240 & oT, ((15 & oT) << 4 | 15 & oT) / 255) : null) : (oT = CT.exec(TT)) ? new sT(oT[1], oT[2], oT[3], 1) : (oT = jT.exec(TT)) ? new sT(255 * oT[1] / 100, 255 * oT[2] / 100, 255 * oT[3] / 100, 1) : (oT = JT.exec(TT)) ? ZT(oT[1], oT[2], oT[3], oT[4]) : (oT = UT.exec(TT)) ? ZT(255 * oT[1] / 100, 255 * oT[2] / 100, 255 * oT[3] / 100, oT[4]) : (oT = aT.exec(TT)) ? NT(oT[1], oT[2] / 100, oT[3] / 100, 1) : (oT = YT.exec(TT)) ? NT(oT[1], oT[2] / 100, oT[3] / 100, oT[4]) : QT.hasOwnProperty(TT) ? qT(QT[TT]) : "transparent" === TT ? new sT(NaN, NaN, NaN, 0) : null
    }

    function qT(TT) {
      return new sT(TT >> 16 & 255, TT >> 8 & 255, 255 & TT, 1)
    }

    function ZT(TT, oT, IT, iT) {
      return iT <= 0 && (TT = oT = IT = NaN), new sT(TT, oT, IT, iT)
    }

    function lT(TT, oT, IT, iT) {
      return 1 === arguments.length ? ((zT = TT) instanceof mT || (zT = nT(zT)), zT ? new sT((zT = zT.rgb()).r, zT.g, zT.b, zT.opacity) : new sT) : new sT(TT, oT, IT, null == iT ? 1 : iT);
      var zT
    }

    function sT(TT, oT, IT, iT) {
      this.r = +TT, this.g = +oT, this.b = +IT, this.opacity = +iT
    }

    function tT() {
      return `#${yT(this.r)}${yT(this.g)}${yT(this.b)}`
    }

    function GT() {
      const TT = pT(this.opacity);
      return `${1===TT?"rgb(":"rgba("}${bT(this.r)}, ${bT(this.g)}, ${bT(this.b)}${1===TT?")":`, ${TT})`}`
    }

    function pT(TT) {
      return isNaN(TT) ? 1 : Math.max(0, Math.min(1, TT))
    }

    function bT(TT) {
      return Math.max(0, Math.min(255, Math.round(TT) || 0))
    }

    function yT(TT) {
      return ((TT = bT(TT)) < 16 ? "0" : "") + TT.toString(16)
    }

    function NT(TT, oT, IT, iT) {
      return iT <= 0 ? TT = oT = IT = NaN : IT <= 0 || IT >= 1 ? TT = oT = NaN : oT <= 0 && (TT = NaN), new dT(TT, oT, IT, iT)
    }

    function PT(TT) {
      if (TT instanceof dT) return new dT(TT.h, TT.s, TT.l, TT.opacity);
      if (TT instanceof mT || (TT = nT(TT)), !TT) return new dT;
      if (TT instanceof dT) return TT;
      var oT = (TT = TT.rgb()).r / 255,
        IT = TT.g / 255,
        iT = TT.b / 255,
        zT = Math.min(oT, IT, iT),
        kT = Math.max(oT, IT, iT),
        WT = NaN,
        XT = kT - zT,
        BT = (kT + zT) / 2;
      return XT ? (WT = oT === kT ? (IT - iT) / XT + 6 * (IT < iT) : IT === kT ? (iT - oT) / XT + 2 : (oT - IT) / XT + 4, XT /= BT < .5 ? kT + zT : 2 - kT - zT, WT *= 60) : XT = BT > 0 && BT < 1 ? 0 : WT, new dT(WT, XT, BT, TT.opacity)
    }

    function dT(TT, oT, IT, iT) {
      this.h = +TT, this.s = +oT, this.l = +IT, this.opacity = +iT
    }

    function VT(TT) {
      return (TT = (TT || 0) % 360) < 0 ? TT + 360 : TT
    }

    function To(TT) {
      return Math.max(0, Math.min(1, TT || 0))
    }

    function oo(TT, oT, IT) {
      return 255 * (TT < 60 ? oT + (IT - oT) * TT / 60 : TT < 180 ? IT : TT < 240 ? oT + (IT - oT) * (240 - TT) / 60 : oT)
    }

    function Io(TT, oT, IT, iT, zT) {
      var kT = TT * TT,
        WT = kT * TT;
      return ((1 - 3 * TT + 3 * kT - WT) * oT + (4 - 6 * kT + 3 * WT) * IT + (1 + 3 * TT + 3 * kT - 3 * WT) * iT + WT * zT) / 6
    }
    hT(mT, nT, {
      copy(TT) {
        return Object.assign(new this.constructor, this, TT)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: OT,
      formatHex: OT,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return PT(this).formatHsl()
      },
      formatRgb: HT,
      toString: HT
    }), hT(sT, lT, wT(mT, {
      brighter(TT) {
        return TT = null == TT ? RT : Math.pow(RT, TT), new sT(this.r * TT, this.g * TT, this.b * TT, this.opacity)
      },
      darker(TT) {
        return TT = null == TT ? eT : Math.pow(eT, TT), new sT(this.r * TT, this.g * TT, this.b * TT, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new sT(bT(this.r), bT(this.g), bT(this.b), pT(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: tT,
      formatHex: tT,
      formatHex8: function() {
        return `#${yT(this.r)}${yT(this.g)}${yT(this.b)}${yT(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: GT,
      toString: GT
    })), hT(dT, (function(TT, oT, IT, iT) {
      return 1 === arguments.length ? PT(TT) : new dT(TT, oT, IT, null == iT ? 1 : iT)
    }), wT(mT, {
      brighter(TT) {
        return TT = null == TT ? RT : Math.pow(RT, TT), new dT(this.h, this.s, this.l * TT, this.opacity)
      },
      darker(TT) {
        return TT = null == TT ? eT : Math.pow(eT, TT), new dT(this.h, this.s, this.l * TT, this.opacity)
      },
      rgb() {
        var TT = this.h % 360 + 360 * (this.h < 0),
          oT = isNaN(TT) || isNaN(this.s) ? 0 : this.s,
          IT = this.l,
          iT = IT + (IT < .5 ? IT : 1 - IT) * oT,
          zT = 2 * IT - iT;
        return new sT(oo(TT >= 240 ? TT - 240 : TT + 120, zT, iT), oo(TT, zT, iT), oo(TT < 120 ? TT + 240 : TT - 120, zT, iT), this.opacity)
      },
      clamp() {
        return new dT(VT(this.h), To(this.s), To(this.l), pT(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const TT = pT(this.opacity);
        return `${1===TT?"hsl(":"hsla("}${VT(this.h)}, ${100*To(this.s)}%, ${100*To(this.l)}%${1===TT?")":`, ${TT})`}`
      }
    }));
    const io = TT => () => TT;

    function zo(TT, oT) {
      return function(IT) {
        return TT + IT * oT
      }
    }

    function ko(TT) {
      return 1 === (TT = +TT) ? Wo : function(oT, IT) {
        return IT - oT ? function(TT, oT, IT) {
          return TT = Math.pow(TT, IT), oT = Math.pow(oT, IT) - TT, IT = 1 / IT,
            function(iT) {
              return Math.pow(TT + iT * oT, IT)
            }
        }(oT, IT, TT) : io(isNaN(oT) ? IT : oT)
      }
    }

    function Wo(TT, oT) {
      var IT = oT - TT;
      return IT ? zo(TT, IT) : io(isNaN(TT) ? oT : TT)
    }
    const Xo = function TT(oT) {
      var IT = ko(oT);

      function iT(TT, oT) {
        var iT = IT((TT = lT(TT)).r, (oT = lT(oT)).r),
          zT = IT(TT.g, oT.g),
          kT = IT(TT.b, oT.b),
          WT = Wo(TT.opacity, oT.opacity);
        return function(oT) {
          return TT.r = iT(oT), TT.g = zT(oT), TT.b = kT(oT), TT.opacity = WT(oT), TT + ""
        }
      }
      return iT.gamma = TT, iT
    }(1);

    function Bo(TT) {
      return function(oT) {
        var IT, iT, zT = oT.length,
          kT = new Array(zT),
          WT = new Array(zT),
          XT = new Array(zT);
        for (IT = 0; IT < zT; ++IT) iT = lT(oT[IT]), kT[IT] = iT.r || 0, WT[IT] = iT.g || 0, XT[IT] = iT.b || 0;
        return kT = TT(kT), WT = TT(WT), XT = TT(XT), iT.opacity = 1,
          function(TT) {
            return iT.r = kT(TT), iT.g = WT(TT), iT.b = XT(TT), iT + ""
          }
      }
    }
    Bo((function(TT) {
      var oT = TT.length - 1;
      return function(IT) {
        var iT = IT <= 0 ? IT = 0 : IT >= 1 ? (IT = 1, oT - 1) : Math.floor(IT * oT),
          zT = TT[iT],
          kT = TT[iT + 1],
          WT = iT > 0 ? TT[iT - 1] : 2 * zT - kT,
          XT = iT < oT - 1 ? TT[iT + 2] : 2 * kT - zT;
        return Io((IT - iT / oT) * oT, WT, zT, kT, XT)
      }
    })), Bo((function(TT) {
      var oT = TT.length;
      return function(IT) {
        var iT = Math.floor(((IT %= 1) < 0 ? ++IT : IT) * oT),
          zT = TT[(iT + oT - 1) % oT],
          kT = TT[iT % oT],
          WT = TT[(iT + 1) % oT],
          XT = TT[(iT + 2) % oT];
        return Io((IT - iT / oT) * oT, zT, kT, WT, XT)
      }
    }));

    function Fo(TT, oT) {
      var IT, iT = oT ? oT.length : 0,
        zT = TT ? Math.min(iT, TT.length) : 0,
        kT = new Array(zT),
        WT = new Array(iT);
      for (IT = 0; IT < zT; ++IT) kT[IT] = ro(TT[IT], oT[IT]);
      for (; IT < iT; ++IT) WT[IT] = oT[IT];
      return function(TT) {
        for (IT = 0; IT < zT; ++IT) WT[IT] = kT[IT](TT);
        return WT
      }
    }

    function So(TT, oT) {
      var IT = new Date;
      return TT = +TT, oT = +oT,
        function(iT) {
          return IT.setTime(TT * (1 - iT) + oT * iT), IT
        }
    }

    function Do(TT, oT) {
      return TT = +TT, oT = +oT,
        function(IT) {
          return TT * (1 - IT) + oT * IT
        }
    }

    function Lo(TT, oT) {
      var IT, iT = {},
        zT = {};
      for (IT in null !== TT && "object" === typeof TT || (TT = {}), null !== oT && "object" === typeof oT || (oT = {}), oT) IT in TT ? iT[IT] = ro(TT[IT], oT[IT]) : zT[IT] = oT[IT];
      return function(TT) {
        for (IT in iT) zT[IT] = iT[IT](TT);
        return zT
      }
    }
    var xo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      co = new RegExp(xo.source, "g");

    function Ko(TT, oT) {
      var IT, iT, zT, kT = xo.lastIndex = co.lastIndex = 0,
        WT = -1,
        XT = [],
        BT = [];
      for (TT += "", oT += "";
        (IT = xo.exec(TT)) && (iT = co.exec(oT));)(zT = iT.index) > kT && (zT = oT.slice(kT, zT), XT[WT] ? XT[WT] += zT : XT[++WT] = zT), (IT = IT[0]) === (iT = iT[0]) ? XT[WT] ? XT[WT] += iT : XT[++WT] = iT : (XT[++WT] = null, BT.push({
        i: WT,
        x: Do(IT, iT)
      })), kT = co.lastIndex;
      return kT < oT.length && (zT = oT.slice(kT), XT[WT] ? XT[WT] += zT : XT[++WT] = zT), XT.length < 2 ? BT[0] ? function(TT) {
        return function(oT) {
          return TT(oT) + ""
        }
      }(BT[0].x) : function(TT) {
        return function() {
          return TT
        }
      }(oT) : (oT = BT.length, function(TT) {
        for (var IT, iT = 0; iT < oT; ++iT) XT[(IT = BT[iT]).i] = IT.x(TT);
        return XT.join("")
      })
    }

    function Mo(TT, oT) {
      oT || (oT = []);
      var IT, iT = TT ? Math.min(oT.length, TT.length) : 0,
        zT = oT.slice();
      return function(kT) {
        for (IT = 0; IT < iT; ++IT) zT[IT] = TT[IT] * (1 - kT) + oT[IT] * kT;
        return zT
      }
    }

    function ro(TT, oT) {
      var IT, iT, zT = typeof oT;
      return null == oT || "boolean" === zT ? io(oT) : ("number" === zT ? Do : "string" === zT ? (IT = nT(oT)) ? (oT = IT, Xo) : Ko : oT instanceof nT ? Xo : oT instanceof Date ? So : (iT = oT, !ArrayBuffer.isView(iT) || iT instanceof DataView ? Array.isArray(oT) ? Fo : "function" !== typeof oT.valueOf && "function" !== typeof oT.toString || isNaN(oT) ? Lo : Do : Mo))(TT, oT)
    }

    function Ao(TT, oT) {
      return TT = +TT, oT = +oT,
        function(IT) {
          return Math.round(TT * (1 - IT) + oT * IT)
        }
    }

    function go(TT) {
      return +TT
    }
    var ho = [0, 1];

    function wo(TT) {
      return TT
    }

    function mo(TT, oT) {
      return (oT -= TT = +TT) ? function(IT) {
        return (IT - TT) / oT
      } : (IT = isNaN(oT) ? NaN : .5, function() {
        return IT
      });
      var IT
    }

    function eo(TT, oT, IT) {
      var iT = TT[0],
        zT = TT[1],
        kT = oT[0],
        WT = oT[1];
      return zT < iT ? (iT = mo(zT, iT), kT = IT(WT, kT)) : (iT = mo(iT, zT), kT = IT(kT, WT)),
        function(TT) {
          return kT(iT(TT))
        }
    }

    function Ro(TT, oT, IT) {
      var iT = Math.min(TT.length, oT.length) - 1,
        zT = new Array(iT),
        kT = new Array(iT),
        WT = -1;
      for (TT[iT] < TT[0] && (TT = TT.slice().reverse(), oT = oT.slice().reverse()); ++WT < iT;) zT[WT] = mo(TT[WT], TT[WT + 1]), kT[WT] = IT(oT[WT], oT[WT + 1]);
      return function(oT) {
        var IT = gT(TT, oT, 1, iT) - 1;
        return kT[IT](zT[IT](oT))
      }
    }

    function uo(TT, oT) {
      return oT.domain(TT.domain()).range(TT.range()).interpolate(TT.interpolate()).clamp(TT.clamp()).unknown(TT.unknown())
    }

    function vo() {
      var TT, oT, IT, iT, zT, kT, WT = ho,
        XT = ho,
        BT = ro,
        FT = wo;

      function ST() {
        var TT = Math.min(WT.length, XT.length);
        return FT !== wo && (FT = function(TT, oT) {
          var IT;
          return TT > oT && (IT = TT, TT = oT, oT = IT),
            function(IT) {
              return Math.max(TT, Math.min(oT, IT))
            }
        }(WT[0], WT[TT - 1])), iT = TT > 2 ? Ro : eo, zT = kT = null, DT
      }

      function DT(oT) {
        return null == oT || isNaN(oT = +oT) ? IT : (zT || (zT = iT(WT.map(TT), XT, BT)))(TT(FT(oT)))
      }
      return DT.invert = function(IT) {
          return FT(oT((kT || (kT = iT(XT, WT.map(TT), Do)))(IT)))
        }, DT.domain = function(TT) {
          return arguments.length ? (WT = Array.from(TT, go), ST()) : WT.slice()
        }, DT.range = function(TT) {
          return arguments.length ? (XT = Array.from(TT), ST()) : XT.slice()
        }, DT.rangeRound = function(TT) {
          return XT = Array.from(TT), BT = Ao, ST()
        }, DT.clamp = function(TT) {
          return arguments.length ? (FT = !!TT || wo, ST()) : FT !== wo
        }, DT.interpolate = function(TT) {
          return arguments.length ? (BT = TT, ST()) : BT
        }, DT.unknown = function(TT) {
          return arguments.length ? (IT = TT, DT) : IT
        },
        function(IT, iT) {
          return TT = IT, oT = iT, ST()
        }
    }

    function Eo() {
      return vo()(wo, wo)
    }
    var fo, Co = IT(5626),
      jo = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Jo(TT) {
      if (!(oT = jo.exec(TT))) throw new Error("invalid format: " + TT);
      var oT;
      return new Uo({
        fill: oT[1],
        align: oT[2],
        sign: oT[3],
        symbol: oT[4],
        zero: oT[5],
        width: oT[6],
        comma: oT[7],
        precision: oT[8] && oT[8].slice(1),
        trim: oT[9],
        type: oT[10]
      })
    }

    function Uo(TT) {
      this.fill = void 0 === TT.fill ? " " : TT.fill + "", this.align = void 0 === TT.align ? ">" : TT.align + "", this.sign = void 0 === TT.sign ? "-" : TT.sign + "", this.symbol = void 0 === TT.symbol ? "" : TT.symbol + "", this.zero = !!TT.zero, this.width = void 0 === TT.width ? void 0 : +TT.width, this.comma = !!TT.comma, this.precision = void 0 === TT.precision ? void 0 : +TT.precision, this.trim = !!TT.trim, this.type = void 0 === TT.type ? "" : TT.type + ""
    }

    function ao(TT, oT) {
      if (!isFinite(TT) || 0 === TT) return null;
      var IT = (TT = oT ? TT.toExponential(oT - 1) : TT.toExponential()).indexOf("e"),
        iT = TT.slice(0, IT);
      return [iT.length > 1 ? iT[0] + iT.slice(2) : iT, +TT.slice(IT + 1)]
    }

    function Yo(TT) {
      return (TT = ao(Math.abs(TT))) ? TT[1] : NaN
    }

    function Qo(TT, oT) {
      var IT = ao(TT, oT);
      if (!IT) return TT + "";
      var iT = IT[0],
        zT = IT[1];
      return zT < 0 ? "0." + new Array(-zT).join("0") + iT : iT.length > zT + 1 ? iT.slice(0, zT + 1) + "." + iT.slice(zT + 1) : iT + new Array(zT - iT.length + 2).join("0")
    }
    Jo.prototype = Uo.prototype, Uo.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const Oo = {
      "%": (TT, oT) => (100 * TT).toFixed(oT),
      b: TT => Math.round(TT).toString(2),
      c: TT => TT + "",
      d: function(TT) {
        return Math.abs(TT = Math.round(TT)) >= 1e21 ? TT.toLocaleString("en").replace(/,/g, "") : TT.toString(10)
      },
      e: (TT, oT) => TT.toExponential(oT),
      f: (TT, oT) => TT.toFixed(oT),
      g: (TT, oT) => TT.toPrecision(oT),
      o: TT => Math.round(TT).toString(8),
      p: (TT, oT) => Qo(100 * TT, oT),
      r: Qo,
      s: function(TT, oT) {
        var IT = ao(TT, oT);
        if (!IT) return fo = void 0, TT.toPrecision(oT);
        var iT = IT[0],
          zT = IT[1],
          kT = zT - (fo = 3 * Math.max(-8, Math.min(8, Math.floor(zT / 3)))) + 1,
          WT = iT.length;
        return kT === WT ? iT : kT > WT ? iT + new Array(kT - WT + 1).join("0") : kT > 0 ? iT.slice(0, kT) + "." + iT.slice(kT) : "0." + new Array(1 - kT).join("0") + ao(TT, Math.max(0, oT + kT - 1))[0]
      },
      X: TT => Math.round(TT).toString(16).toUpperCase(),
      x: TT => Math.round(TT).toString(16)
    };

    function Ho(TT) {
      return TT
    }
    var no, qo, Zo, so = Array.prototype.map,
      to = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function Go(TT) {
      var oT, IT, iT = void 0 === TT.grouping || void 0 === TT.thousands ? Ho : (oT = so.call(TT.grouping, Number), IT = TT.thousands + "", function(TT, iT) {
          for (var zT = TT.length, kT = [], WT = 0, XT = oT[0], BT = 0; zT > 0 && XT > 0 && (BT + XT + 1 > iT && (XT = Math.max(1, iT - BT)), kT.push(TT.substring(zT -= XT, zT + XT)), !((BT += XT + 1) > iT));) XT = oT[WT = (WT + 1) % oT.length];
          return kT.reverse().join(IT)
        }),
        zT = void 0 === TT.currency ? "" : TT.currency[0] + "",
        kT = void 0 === TT.currency ? "" : TT.currency[1] + "",
        WT = void 0 === TT.decimal ? "." : TT.decimal + "",
        XT = void 0 === TT.numerals ? Ho : function(TT) {
          return function(oT) {
            return oT.replace(/[0-9]/g, (function(oT) {
              return TT[+oT]
            }))
          }
        }(so.call(TT.numerals, String)),
        BT = void 0 === TT.percent ? "%" : TT.percent + "",
        FT = void 0 === TT.minus ? "\u2212" : TT.minus + "",
        ST = void 0 === TT.nan ? "NaN" : TT.nan + "";

      function DT(TT, oT) {
        var IT = (TT = Jo(TT)).fill,
          DT = TT.align,
          LT = TT.sign,
          xT = TT.symbol,
          cT = TT.zero,
          KT = TT.width,
          MT = TT.comma,
          rT = TT.precision,
          AT = TT.trim,
          gT = TT.type;
        "n" === gT ? (MT = !0, gT = "g") : Oo[gT] || (void 0 === rT && (rT = 12), AT = !0, gT = "g"), (cT || "0" === IT && "=" === DT) && (cT = !0, IT = "0", DT = "=");
        var hT = (oT && void 0 !== oT.prefix ? oT.prefix : "") + ("$" === xT ? zT : "#" === xT && /[boxX]/.test(gT) ? "0" + gT.toLowerCase() : ""),
          wT = ("$" === xT ? kT : /[%p]/.test(gT) ? BT : "") + (oT && void 0 !== oT.suffix ? oT.suffix : ""),
          mT = Oo[gT],
          eT = /[defgprs%]/.test(gT);

        function RT(TT) {
          var oT, zT, kT, BT = hT,
            xT = wT;
          if ("c" === gT) xT = mT(TT) + xT, TT = "";
          else {
            var RT = (TT = +TT) < 0 || 1 / TT < 0;
            if (TT = isNaN(TT) ? ST : mT(Math.abs(TT), rT), AT && (TT = function(TT) {
                TT: for (var oT, IT = TT.length, iT = 1, zT = -1; iT < IT; ++iT) switch (TT[iT]) {
                  case ".":
                    zT = oT = iT;
                    break;
                  case "0":
                    0 === zT && (zT = iT), oT = iT;
                    break;
                  default:
                    if (!+TT[iT]) break TT;
                    zT > 0 && (zT = 0)
                }
                return zT > 0 ? TT.slice(0, zT) + TT.slice(oT + 1) : TT
              }(TT)), RT && 0 === +TT && "+" !== LT && (RT = !1), BT = (RT ? "(" === LT ? LT : FT : "-" === LT || "(" === LT ? "" : LT) + BT, xT = ("s" !== gT || isNaN(TT) || void 0 === fo ? "" : to[8 + fo / 3]) + xT + (RT && "(" === LT ? ")" : ""), eT)
              for (oT = -1, zT = TT.length; ++oT < zT;)
                if (48 > (kT = TT.charCodeAt(oT)) || kT > 57) {
                  xT = (46 === kT ? WT + TT.slice(oT + 1) : TT.slice(oT)) + xT, TT = TT.slice(0, oT);
                  break
                }
          }
          MT && !cT && (TT = iT(TT, 1 / 0));
          var uT = BT.length + TT.length + xT.length,
            vT = uT < KT ? new Array(KT - uT + 1).join(IT) : "";
          switch (MT && cT && (TT = iT(vT + TT, vT.length ? KT - xT.length : 1 / 0), vT = ""), DT) {
            case "<":
              TT = BT + TT + xT + vT;
              break;
            case "=":
              TT = BT + vT + TT + xT;
              break;
            case "^":
              TT = vT.slice(0, uT = vT.length >> 1) + BT + TT + xT + vT.slice(uT);
              break;
            default:
              TT = vT + BT + TT + xT
          }
          return XT(TT)
        }
        return rT = void 0 === rT ? 6 : /[gprs]/.test(gT) ? Math.max(1, Math.min(21, rT)) : Math.max(0, Math.min(20, rT)), RT.toString = function() {
          return TT + ""
        }, RT
      }
      return {
        format: DT,
        formatPrefix: function(TT, oT) {
          var IT = 3 * Math.max(-8, Math.min(8, Math.floor(Yo(oT) / 3))),
            iT = Math.pow(10, -IT),
            zT = DT(((TT = Jo(TT)).type = "f", TT), {
              suffix: to[8 + IT / 3]
            });
          return function(TT) {
            return zT(iT * TT)
          }
        }
      }
    }

    function po(TT, oT, IT, iT) {
      var zT, kT = DT(TT, oT, IT);
      switch ((iT = Jo(null == iT ? ",f" : iT)).type) {
        case "s":
          var WT = Math.max(Math.abs(TT), Math.abs(oT));
          return null != iT.precision || isNaN(zT = function(TT, oT) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Yo(oT) / 3))) - Yo(Math.abs(TT)))
          }(kT, WT)) || (iT.precision = zT), Zo(iT, WT);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != iT.precision || isNaN(zT = function(TT, oT) {
            return TT = Math.abs(TT), oT = Math.abs(oT) - TT, Math.max(0, Yo(oT) - Yo(TT)) + 1
          }(kT, Math.max(Math.abs(TT), Math.abs(oT)))) || (iT.precision = zT - ("e" === iT.type));
          break;
        case "f":
        case "%":
          null != iT.precision || isNaN(zT = function(TT) {
            return Math.max(0, -Yo(Math.abs(TT)))
          }(kT)) || (iT.precision = zT - 2 * ("%" === iT.type))
      }
      return qo(iT)
    }

    function bo(TT) {
      var oT = TT.domain;
      return TT.ticks = function(TT) {
        var IT = oT();
        return FT(IT[0], IT[IT.length - 1], null == TT ? 10 : TT)
      }, TT.tickFormat = function(TT, IT) {
        var iT = oT();
        return po(iT[0], iT[iT.length - 1], null == TT ? 10 : TT, IT)
      }, TT.nice = function(IT) {
        null == IT && (IT = 10);
        var iT, zT, kT = oT(),
          WT = 0,
          XT = kT.length - 1,
          BT = kT[WT],
          FT = kT[XT],
          DT = 10;
        for (FT < BT && (zT = BT, BT = FT, FT = zT, zT = WT, WT = XT, XT = zT); DT-- > 0;) {
          if ((zT = ST(BT, FT, IT)) === iT) return kT[WT] = BT, kT[XT] = FT, oT(kT);
          if (zT > 0) BT = Math.floor(BT / zT) * zT, FT = Math.ceil(FT / zT) * zT;
          else {
            if (!(zT < 0)) break;
            BT = Math.ceil(BT * zT) / zT, FT = Math.floor(FT * zT) / zT
          }
          iT = zT
        }
        return TT
      }, TT
    }

    function yo() {
      var TT = Eo();
      return TT.copy = function() {
        return uo(TT, yo())
      }, Co.f.apply(TT, arguments), bo(TT)
    }

    function No(TT) {
      var oT;

      function IT(TT) {
        return null == TT || isNaN(TT = +TT) ? oT : TT
      }
      return IT.invert = IT, IT.domain = IT.range = function(oT) {
        return arguments.length ? (TT = Array.from(oT, go), IT) : TT.slice()
      }, IT.unknown = function(TT) {
        return arguments.length ? (oT = TT, IT) : oT
      }, IT.copy = function() {
        return No(TT).unknown(oT)
      }, TT = arguments.length ? Array.from(TT, go) : [0, 1], bo(IT)
    }

    function Po(TT, oT) {
      var IT, iT = 0,
        zT = (TT = TT.slice()).length - 1,
        kT = TT[iT],
        WT = TT[zT];
      return WT < kT && (IT = iT, iT = zT, zT = IT, IT = kT, kT = WT, WT = IT), TT[iT] = oT.floor(kT), TT[zT] = oT.ceil(WT), TT
    }

    function Vo(TT) {
      return Math.log(TT)
    }

    function TI(TT) {
      return Math.exp(TT)
    }

    function oI(TT) {
      return -Math.log(-TT)
    }

    function II(TT) {
      return -Math.exp(-TT)
    }

    function iI(TT) {
      return isFinite(TT) ? +("1e" + TT) : TT < 0 ? 0 : TT
    }

    function zI(TT) {
      return (oT, IT) => -TT(-oT, IT)
    }

    function kI(TT) {
      const oT = TT(Vo, TI),
        IT = oT.domain;
      let iT, zT, kT = 10;

      function WT() {
        return iT = function(TT) {
          return TT === Math.E ? Math.log : 10 === TT && Math.log10 || 2 === TT && Math.log2 || (TT = Math.log(TT), oT => Math.log(oT) / TT)
        }(kT), zT = function(TT) {
          return 10 === TT ? iI : TT === Math.E ? Math.exp : oT => Math.pow(TT, oT)
        }(kT), IT()[0] < 0 ? (iT = zI(iT), zT = zI(zT), TT(oI, II)) : TT(Vo, TI), oT
      }
      return oT.base = function(TT) {
        return arguments.length ? (kT = +TT, WT()) : kT
      }, oT.domain = function(TT) {
        return arguments.length ? (IT(TT), WT()) : IT()
      }, oT.ticks = TT => {
        const oT = IT();
        let WT = oT[0],
          XT = oT[oT.length - 1];
        const BT = XT < WT;
        BT && ([WT, XT] = [XT, WT]);
        let ST, DT, LT = iT(WT),
          xT = iT(XT);
        const cT = null == TT ? 10 : +TT;
        let KT = [];
        if (!(kT % 1) && xT - LT < cT) {
          if (LT = Math.floor(LT), xT = Math.ceil(xT), WT > 0) {
            for (; LT <= xT; ++LT)
              for (ST = 1; ST < kT; ++ST)
                if (DT = LT < 0 ? ST / zT(-LT) : ST * zT(LT), !(DT < WT)) {
                  if (DT > XT) break;
                  KT.push(DT)
                }
          } else
            for (; LT <= xT; ++LT)
              for (ST = kT - 1; ST >= 1; --ST)
                if (DT = LT > 0 ? ST / zT(-LT) : ST * zT(LT), !(DT < WT)) {
                  if (DT > XT) break;
                  KT.push(DT)
                } 2 * KT.length < cT && (KT = FT(WT, XT, cT))
        } else KT = FT(LT, xT, Math.min(xT - LT, cT)).map(zT);
        return BT ? KT.reverse() : KT
      }, oT.tickFormat = (TT, IT) => {
        if (null == TT && (TT = 10), null == IT && (IT = 10 === kT ? "s" : ","), "function" !== typeof IT && (kT % 1 || null != (IT = Jo(IT)).precision || (IT.trim = !0), IT = qo(IT)), TT === 1 / 0) return IT;
        const WT = Math.max(1, kT * TT / oT.ticks().length);
        return TT => {
          let oT = TT / zT(Math.round(iT(TT)));
          return oT * kT < kT - .5 && (oT *= kT), oT <= WT ? IT(TT) : ""
        }
      }, oT.nice = () => IT(Po(IT(), {
        floor: TT => zT(Math.floor(iT(TT))),
        ceil: TT => zT(Math.ceil(iT(TT)))
      })), oT
    }

    function WI() {
      const TT = kI(vo()).domain([1, 10]);
      return TT.copy = () => uo(TT, WI()).base(TT.base()), Co.f.apply(TT, arguments), TT
    }

    function XI(TT) {
      return function(oT) {
        return Math.sign(oT) * Math.log1p(Math.abs(oT / TT))
      }
    }

    function BI(TT) {
      return function(oT) {
        return Math.sign(oT) * Math.expm1(Math.abs(oT)) * TT
      }
    }

    function FI(TT) {
      var oT = 1,
        IT = TT(XI(oT), BI(oT));
      return IT.constant = function(IT) {
        return arguments.length ? TT(XI(oT = +IT), BI(oT)) : oT
      }, bo(IT)
    }

    function SI() {
      var TT = FI(vo());
      return TT.copy = function() {
        return uo(TT, SI()).constant(TT.constant())
      }, Co.f.apply(TT, arguments)
    }
    no = Go({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), qo = no.format, Zo = no.formatPrefix;
    var DI = IT(5632);

    function LI(TT) {
      return function(oT) {
        return oT < 0 ? -Math.pow(-oT, TT) : Math.pow(oT, TT)
      }
    }

    function xI(TT) {
      return TT < 0 ? -Math.sqrt(-TT) : Math.sqrt(TT)
    }

    function cI(TT) {
      return TT < 0 ? -TT * TT : TT * TT
    }

    function KI(TT) {
      var oT = TT(wo, wo),
        IT = 1;
      return oT.exponent = function(oT) {
        return arguments.length ? 1 === (IT = +oT) ? TT(wo, wo) : .5 === IT ? TT(xI, cI) : TT(LI(IT), LI(1 / IT)) : IT
      }, bo(oT)
    }

    function MI() {
      var TT = KI(vo());
      return TT.copy = function() {
        return uo(TT, MI()).exponent(TT.exponent())
      }, Co.f.apply(TT, arguments), TT
    }

    function rI() {
      return MI.apply(null, arguments).exponent(.5)
    }

    function AI(TT) {
      return Math.sign(TT) * TT * TT
    }

    function gI() {
      var TT, oT = Eo(),
        IT = [0, 1],
        iT = !1;

      function zT(IT) {
        var zT = function(TT) {
          return Math.sign(TT) * Math.sqrt(Math.abs(TT))
        }(oT(IT));
        return isNaN(zT) ? TT : iT ? Math.round(zT) : zT
      }
      return zT.invert = function(TT) {
        return oT.invert(AI(TT))
      }, zT.domain = function(TT) {
        return arguments.length ? (oT.domain(TT), zT) : oT.domain()
      }, zT.range = function(TT) {
        return arguments.length ? (oT.range((IT = Array.from(TT, go)).map(AI)), zT) : IT.slice()
      }, zT.rangeRound = function(TT) {
        return zT.range(TT).round(!0)
      }, zT.round = function(TT) {
        return arguments.length ? (iT = !!TT, zT) : iT
      }, zT.clamp = function(TT) {
        return arguments.length ? (oT.clamp(TT), zT) : oT.clamp()
      }, zT.unknown = function(oT) {
        return arguments.length ? (TT = oT, zT) : TT
      }, zT.copy = function() {
        return gI(oT.domain(), IT).round(iT).clamp(oT.clamp()).unknown(TT)
      }, Co.f.apply(zT, arguments), bo(zT)
    }

    function hI(TT, oT) {
      let IT;
      if (void 0 === oT)
        for (const iT of TT) null != iT && (IT < iT || void 0 === IT && iT >= iT) && (IT = iT);
      else {
        let iT = -1;
        for (let zT of TT) null != (zT = oT(zT, ++iT, TT)) && (IT < zT || void 0 === IT && zT >= zT) && (IT = zT)
      }
      return IT
    }

    function wI(TT, oT) {
      let IT;
      if (void 0 === oT)
        for (const iT of TT) null != iT && (IT > iT || void 0 === IT && iT >= iT) && (IT = iT);
      else {
        let iT = -1;
        for (let zT of TT) null != (zT = oT(zT, ++iT, TT)) && (IT > zT || void 0 === IT && zT >= zT) && (IT = zT)
      }
      return IT
    }

    function mI() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LT;
      if (TT === LT) return eI;
      if ("function" !== typeof TT) throw new TypeError("compare is not a function");
      return (oT, IT) => {
        const iT = TT(oT, IT);
        return iT || 0 === iT ? iT : (0 === TT(IT, IT)) - (0 === TT(oT, oT))
      }
    }

    function eI(TT, oT) {
      return (null == TT || !(TT >= TT)) - (null == oT || !(oT >= oT)) || (TT < oT ? -1 : TT > oT ? 1 : 0)
    }

    function RI(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        zT = arguments.length > 4 ? arguments[4] : void 0;
      if (oT = Math.floor(oT), IT = Math.floor(Math.max(0, IT)), iT = Math.floor(Math.min(TT.length - 1, iT)), !(IT <= oT && oT <= iT)) return TT;
      for (zT = void 0 === zT ? eI : mI(zT); iT > IT;) {
        if (iT - IT > 600) {
          const kT = iT - IT + 1,
            WT = oT - IT + 1,
            XT = Math.log(kT),
            BT = .5 * Math.exp(2 * XT / 3),
            FT = .5 * Math.sqrt(XT * BT * (kT - BT) / kT) * (WT - kT / 2 < 0 ? -1 : 1);
          RI(TT, oT, Math.max(IT, Math.floor(oT - WT * BT / kT + FT)), Math.min(iT, Math.floor(oT + (kT - WT) * BT / kT + FT)), zT)
        }
        const kT = TT[oT];
        let WT = IT,
          XT = iT;
        for (uI(TT, IT, oT), zT(TT[iT], kT) > 0 && uI(TT, IT, iT); WT < XT;) {
          for (uI(TT, WT, XT), ++WT, --XT; zT(TT[WT], kT) < 0;) ++WT;
          for (; zT(TT[XT], kT) > 0;) --XT
        }
        0 === zT(TT[IT], kT) ? uI(TT, IT, XT) : (++XT, uI(TT, XT, iT)), XT <= oT && (IT = XT + 1), oT <= XT && (iT = XT - 1)
      }
      return TT
    }

    function uI(TT, oT, IT) {
      const iT = TT[oT];
      TT[oT] = TT[IT], TT[IT] = iT
    }

    function vI(TT, oT, IT) {
      if (TT = Float64Array.from(function*(TT, oT) {
          if (void 0 === oT)
            for (let IT of TT) null != IT && (IT = +IT) >= IT && (yield IT);
          else {
            let IT = -1;
            for (let iT of TT) null != (iT = oT(iT, ++IT, TT)) && (iT = +iT) >= iT && (yield iT)
          }
        }(TT, IT)), (iT = TT.length) && !isNaN(oT = +oT)) {
        if (oT <= 0 || iT < 2) return wI(TT);
        if (oT >= 1) return hI(TT);
        var iT, zT = (iT - 1) * oT,
          kT = Math.floor(zT),
          WT = hI(RI(TT, kT).subarray(0, kT + 1));
        return WT + (wI(TT.subarray(kT + 1)) - WT) * (zT - kT)
      }
    }

    function EI(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MT;
      if ((iT = TT.length) && !isNaN(oT = +oT)) {
        if (oT <= 0 || iT < 2) return +IT(TT[0], 0, TT);
        if (oT >= 1) return +IT(TT[iT - 1], iT - 1, TT);
        var iT, zT = (iT - 1) * oT,
          kT = Math.floor(zT),
          WT = +IT(TT[kT], kT, TT);
        return WT + (+IT(TT[kT + 1], kT + 1, TT) - WT) * (zT - kT)
      }
    }

    function fI() {
      var TT, oT = [],
        IT = [],
        iT = [];

      function zT() {
        var TT = 0,
          zT = Math.max(1, IT.length);
        for (iT = new Array(zT - 1); ++TT < zT;) iT[TT - 1] = EI(oT, TT / zT);
        return kT
      }

      function kT(oT) {
        return null == oT || isNaN(oT = +oT) ? TT : IT[gT(iT, oT)]
      }
      return kT.invertExtent = function(TT) {
        var zT = IT.indexOf(TT);
        return zT < 0 ? [NaN, NaN] : [zT > 0 ? iT[zT - 1] : oT[0], zT < iT.length ? iT[zT] : oT[oT.length - 1]]
      }, kT.domain = function(TT) {
        if (!arguments.length) return oT.slice();
        oT = [];
        for (let IT of TT) null == IT || isNaN(IT = +IT) || oT.push(IT);
        return oT.sort(LT), zT()
      }, kT.range = function(TT) {
        return arguments.length ? (IT = Array.from(TT), zT()) : IT.slice()
      }, kT.unknown = function(oT) {
        return arguments.length ? (TT = oT, kT) : TT
      }, kT.quantiles = function() {
        return iT.slice()
      }, kT.copy = function() {
        return fI().domain(oT).range(IT).unknown(TT)
      }, Co.f.apply(kT, arguments)
    }

    function CI() {
      var TT, oT = 0,
        IT = 1,
        iT = 1,
        zT = [.5],
        kT = [0, 1];

      function WT(oT) {
        return null != oT && oT <= oT ? kT[gT(zT, oT, 0, iT)] : TT
      }

      function XT() {
        var TT = -1;
        for (zT = new Array(iT); ++TT < iT;) zT[TT] = ((TT + 1) * IT - (TT - iT) * oT) / (iT + 1);
        return WT
      }
      return WT.domain = function(TT) {
        return arguments.length ? ([oT, IT] = TT, oT = +oT, IT = +IT, XT()) : [oT, IT]
      }, WT.range = function(TT) {
        return arguments.length ? (iT = (kT = Array.from(TT)).length - 1, XT()) : kT.slice()
      }, WT.invertExtent = function(TT) {
        var WT = kT.indexOf(TT);
        return WT < 0 ? [NaN, NaN] : WT < 1 ? [oT, zT[0]] : WT >= iT ? [zT[iT - 1], IT] : [zT[WT - 1], zT[WT]]
      }, WT.unknown = function(oT) {
        return arguments.length ? (TT = oT, WT) : WT
      }, WT.thresholds = function() {
        return zT.slice()
      }, WT.copy = function() {
        return CI().domain([oT, IT]).range(kT).unknown(TT)
      }, Co.f.apply(bo(WT), arguments)
    }

    function jI() {
      var TT, oT = [.5],
        IT = [0, 1],
        iT = 1;

      function zT(zT) {
        return null != zT && zT <= zT ? IT[gT(oT, zT, 0, iT)] : TT
      }
      return zT.domain = function(TT) {
        return arguments.length ? (oT = Array.from(TT), iT = Math.min(oT.length, IT.length - 1), zT) : oT.slice()
      }, zT.range = function(TT) {
        return arguments.length ? (IT = Array.from(TT), iT = Math.min(oT.length, IT.length - 1), zT) : IT.slice()
      }, zT.invertExtent = function(TT) {
        var iT = IT.indexOf(TT);
        return [oT[iT - 1], oT[iT]]
      }, zT.unknown = function(oT) {
        return arguments.length ? (TT = oT, zT) : TT
      }, zT.copy = function() {
        return jI().domain(oT).range(IT).unknown(TT)
      }, Co.f.apply(zT, arguments)
    }
    const JI = 1e3,
      UI = 6e4,
      aI = 36e5,
      YI = 864e5,
      QI = 6048e5,
      OI = 2592e6,
      HI = 31536e6,
      nI = new Date,
      qI = new Date;

    function ZI(TT, oT, IT, iT) {
      function zT(oT) {
        return TT(oT = 0 === arguments.length ? new Date : new Date(+oT)), oT
      }
      return zT.floor = oT => (TT(oT = new Date(+oT)), oT), zT.ceil = IT => (TT(IT = new Date(IT - 1)), oT(IT, 1), TT(IT), IT), zT.round = TT => {
        const oT = zT(TT),
          IT = zT.ceil(TT);
        return TT - oT < IT - TT ? oT : IT
      }, zT.offset = (TT, IT) => (oT(TT = new Date(+TT), null == IT ? 1 : Math.floor(IT)), TT), zT.range = (IT, iT, kT) => {
        const WT = [];
        if (IT = zT.ceil(IT), kT = null == kT ? 1 : Math.floor(kT), !(IT < iT) || !(kT > 0)) return WT;
        let XT;
        do {
          WT.push(XT = new Date(+IT)), oT(IT, kT), TT(IT)
        } while (XT < IT && IT < iT);
        return WT
      }, zT.filter = IT => ZI((oT => {
        if (oT >= oT)
          for (; TT(oT), !IT(oT);) oT.setTime(oT - 1)
      }), ((TT, iT) => {
        if (TT >= TT)
          if (iT < 0)
            for (; ++iT <= 0;)
              for (; oT(TT, -1), !IT(TT););
          else
            for (; --iT >= 0;)
              for (; oT(TT, 1), !IT(TT););
      })), IT && (zT.count = (oT, iT) => (nI.setTime(+oT), qI.setTime(+iT), TT(nI), TT(qI), Math.floor(IT(nI, qI))), zT.every = TT => (TT = Math.floor(TT), isFinite(TT) && TT > 0 ? TT > 1 ? zT.filter(iT ? oT => iT(oT) % TT === 0 : oT => zT.count(0, oT) % TT === 0) : zT : null)), zT
    }
    const lI = ZI((() => {}), ((TT, oT) => {
      TT.setTime(+TT + oT)
    }), ((TT, oT) => oT - TT));
    lI.every = TT => (TT = Math.floor(TT), isFinite(TT) && TT > 0 ? TT > 1 ? ZI((oT => {
      oT.setTime(Math.floor(oT / TT) * TT)
    }), ((oT, IT) => {
      oT.setTime(+oT + IT * TT)
    }), ((oT, IT) => (IT - oT) / TT)) : lI : null);
    lI.range;
    const sI = ZI((TT => {
        TT.setTime(TT - TT.getMilliseconds())
      }), ((TT, oT) => {
        TT.setTime(+TT + oT * JI)
      }), ((TT, oT) => (oT - TT) / JI), (TT => TT.getUTCSeconds())),
      tI = (sI.range, ZI((TT => {
        TT.setTime(TT - TT.getMilliseconds() - TT.getSeconds() * JI)
      }), ((TT, oT) => {
        TT.setTime(+TT + oT * UI)
      }), ((TT, oT) => (oT - TT) / UI), (TT => TT.getMinutes()))),
      GI = (tI.range, ZI((TT => {
        TT.setUTCSeconds(0, 0)
      }), ((TT, oT) => {
        TT.setTime(+TT + oT * UI)
      }), ((TT, oT) => (oT - TT) / UI), (TT => TT.getUTCMinutes()))),
      pI = (GI.range, ZI((TT => {
        TT.setTime(TT - TT.getMilliseconds() - TT.getSeconds() * JI - TT.getMinutes() * UI)
      }), ((TT, oT) => {
        TT.setTime(+TT + oT * aI)
      }), ((TT, oT) => (oT - TT) / aI), (TT => TT.getHours()))),
      bI = (pI.range, ZI((TT => {
        TT.setUTCMinutes(0, 0, 0)
      }), ((TT, oT) => {
        TT.setTime(+TT + oT * aI)
      }), ((TT, oT) => (oT - TT) / aI), (TT => TT.getUTCHours()))),
      yI = (bI.range, ZI((TT => TT.setHours(0, 0, 0, 0)), ((TT, oT) => TT.setDate(TT.getDate() + oT)), ((TT, oT) => (oT - TT - (oT.getTimezoneOffset() - TT.getTimezoneOffset()) * UI) / YI), (TT => TT.getDate() - 1))),
      NI = (yI.range, ZI((TT => {
        TT.setUTCHours(0, 0, 0, 0)
      }), ((TT, oT) => {
        TT.setUTCDate(TT.getUTCDate() + oT)
      }), ((TT, oT) => (oT - TT) / YI), (TT => TT.getUTCDate() - 1))),
      PI = (NI.range, ZI((TT => {
        TT.setUTCHours(0, 0, 0, 0)
      }), ((TT, oT) => {
        TT.setUTCDate(TT.getUTCDate() + oT)
      }), ((TT, oT) => (oT - TT) / YI), (TT => Math.floor(TT / YI))));
    PI.range;

    function dI(TT) {
      return ZI((oT => {
        oT.setDate(oT.getDate() - (oT.getDay() + 7 - TT) % 7), oT.setHours(0, 0, 0, 0)
      }), ((TT, oT) => {
        TT.setDate(TT.getDate() + 7 * oT)
      }), ((TT, oT) => (oT - TT - (oT.getTimezoneOffset() - TT.getTimezoneOffset()) * UI) / QI))
    }
    const VI = dI(0),
      Ti = dI(1),
      oi = dI(2),
      Ii = dI(3),
      ii = dI(4),
      zi = dI(5),
      ki = dI(6);
    VI.range, Ti.range, oi.range, Ii.range, ii.range, zi.range, ki.range;

    function Wi(TT) {
      return ZI((oT => {
        oT.setUTCDate(oT.getUTCDate() - (oT.getUTCDay() + 7 - TT) % 7), oT.setUTCHours(0, 0, 0, 0)
      }), ((TT, oT) => {
        TT.setUTCDate(TT.getUTCDate() + 7 * oT)
      }), ((TT, oT) => (oT - TT) / QI))
    }
    const Xi = Wi(0),
      Bi = Wi(1),
      Fi = Wi(2),
      Si = Wi(3),
      Di = Wi(4),
      Li = Wi(5),
      xi = Wi(6),
      ci = (Xi.range, Bi.range, Fi.range, Si.range, Di.range, Li.range, xi.range, ZI((TT => {
        TT.setDate(1), TT.setHours(0, 0, 0, 0)
      }), ((TT, oT) => {
        TT.setMonth(TT.getMonth() + oT)
      }), ((TT, oT) => oT.getMonth() - TT.getMonth() + 12 * (oT.getFullYear() - TT.getFullYear())), (TT => TT.getMonth()))),
      Ki = (ci.range, ZI((TT => {
        TT.setUTCDate(1), TT.setUTCHours(0, 0, 0, 0)
      }), ((TT, oT) => {
        TT.setUTCMonth(TT.getUTCMonth() + oT)
      }), ((TT, oT) => oT.getUTCMonth() - TT.getUTCMonth() + 12 * (oT.getUTCFullYear() - TT.getUTCFullYear())), (TT => TT.getUTCMonth()))),
      Mi = (Ki.range, ZI((TT => {
        TT.setMonth(0, 1), TT.setHours(0, 0, 0, 0)
      }), ((TT, oT) => {
        TT.setFullYear(TT.getFullYear() + oT)
      }), ((TT, oT) => oT.getFullYear() - TT.getFullYear()), (TT => TT.getFullYear())));
    Mi.every = TT => isFinite(TT = Math.floor(TT)) && TT > 0 ? ZI((oT => {
      oT.setFullYear(Math.floor(oT.getFullYear() / TT) * TT), oT.setMonth(0, 1), oT.setHours(0, 0, 0, 0)
    }), ((oT, IT) => {
      oT.setFullYear(oT.getFullYear() + IT * TT)
    })) : null;
    Mi.range;
    const ri = ZI((TT => {
      TT.setUTCMonth(0, 1), TT.setUTCHours(0, 0, 0, 0)
    }), ((TT, oT) => {
      TT.setUTCFullYear(TT.getUTCFullYear() + oT)
    }), ((TT, oT) => oT.getUTCFullYear() - TT.getUTCFullYear()), (TT => TT.getUTCFullYear()));
    ri.every = TT => isFinite(TT = Math.floor(TT)) && TT > 0 ? ZI((oT => {
      oT.setUTCFullYear(Math.floor(oT.getUTCFullYear() / TT) * TT), oT.setUTCMonth(0, 1), oT.setUTCHours(0, 0, 0, 0)
    }), ((oT, IT) => {
      oT.setUTCFullYear(oT.getUTCFullYear() + IT * TT)
    })) : null;
    ri.range;

    function Ai(TT, oT, IT, iT, zT, kT) {
      const WT = [
        [sI, 1, JI],
        [sI, 5, 5e3],
        [sI, 15, 15e3],
        [sI, 30, 3e4],
        [kT, 1, UI],
        [kT, 5, 3e5],
        [kT, 15, 9e5],
        [kT, 30, 18e5],
        [zT, 1, aI],
        [zT, 3, 108e5],
        [zT, 6, 216e5],
        [zT, 12, 432e5],
        [iT, 1, YI],
        [iT, 2, 1728e5],
        [IT, 1, QI],
        [oT, 1, OI],
        [oT, 3, 7776e6],
        [TT, 1, HI]
      ];

      function XT(oT, IT, iT) {
        const zT = Math.abs(IT - oT) / iT,
          kT = cT((TT => {
            let [, , oT] = TT;
            return oT
          })).right(WT, zT);
        if (kT === WT.length) return TT.every(DT(oT / HI, IT / HI, iT));
        if (0 === kT) return lI.every(Math.max(DT(oT, IT, iT), 1));
        const [XT, BT] = WT[zT / WT[kT - 1][2] < WT[kT][2] / zT ? kT - 1 : kT];
        return XT.every(BT)
      }
      return [function(TT, oT, IT) {
        const iT = oT < TT;
        iT && ([TT, oT] = [oT, TT]);
        const zT = IT && "function" === typeof IT.range ? IT : XT(TT, oT, IT),
          kT = zT ? zT.range(TT, +oT + 1) : [];
        return iT ? kT.reverse() : kT
      }, XT]
    }
    const [gi, wi] = Ai(ri, Ki, Xi, PI, bI, GI), [mi, ei] = Ai(Mi, ci, VI, yI, pI, tI);

    function Ri(TT) {
      if (0 <= TT.y && TT.y < 100) {
        var oT = new Date(-1, TT.m, TT.d, TT.H, TT.M, TT.S, TT.L);
        return oT.setFullYear(TT.y), oT
      }
      return new Date(TT.y, TT.m, TT.d, TT.H, TT.M, TT.S, TT.L)
    }

    function ui(TT) {
      if (0 <= TT.y && TT.y < 100) {
        var oT = new Date(Date.UTC(-1, TT.m, TT.d, TT.H, TT.M, TT.S, TT.L));
        return oT.setUTCFullYear(TT.y), oT
      }
      return new Date(Date.UTC(TT.y, TT.m, TT.d, TT.H, TT.M, TT.S, TT.L))
    }

    function vi(TT, oT, IT) {
      return {
        y: TT,
        m: oT,
        d: IT,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var Ei, fi, Ci, ji = {
        "-": "",
        _: " ",
        0: "0"
      },
      Ji = /^\s*\d+/,
      Ui = /^%/,
      ai = /[\\^$*+?|[\]().{}]/g;

    function Yi(TT, oT, IT) {
      var iT = TT < 0 ? "-" : "",
        zT = (iT ? -TT : TT) + "",
        kT = zT.length;
      return iT + (kT < IT ? new Array(IT - kT + 1).join(oT) + zT : zT)
    }

    function Qi(TT) {
      return TT.replace(ai, "\\$&")
    }

    function Oi(TT) {
      return new RegExp("^(?:" + TT.map(Qi).join("|") + ")", "i")
    }

    function Hi(TT) {
      return new Map(TT.map(((TT, oT) => [TT.toLowerCase(), oT])))
    }

    function ni(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 1));
      return iT ? (TT.w = +iT[0], IT + iT[0].length) : -1
    }

    function qi(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 1));
      return iT ? (TT.u = +iT[0], IT + iT[0].length) : -1
    }

    function Zi(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 2));
      return iT ? (TT.U = +iT[0], IT + iT[0].length) : -1
    }

    function li(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 2));
      return iT ? (TT.V = +iT[0], IT + iT[0].length) : -1
    }

    function si(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 2));
      return iT ? (TT.W = +iT[0], IT + iT[0].length) : -1
    }

    function ti(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 4));
      return iT ? (TT.y = +iT[0], IT + iT[0].length) : -1
    }

    function Gi(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 2));
      return iT ? (TT.y = +iT[0] + (+iT[0] > 68 ? 1900 : 2e3), IT + iT[0].length) : -1
    }

    function bi(TT, oT, IT) {
      var iT = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(oT.slice(IT, IT + 6));
      return iT ? (TT.Z = iT[1] ? 0 : -(iT[2] + (iT[3] || "00")), IT + iT[0].length) : -1
    }

    function yi(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 1));
      return iT ? (TT.q = 3 * iT[0] - 3, IT + iT[0].length) : -1
    }

    function Ni(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 2));
      return iT ? (TT.m = iT[0] - 1, IT + iT[0].length) : -1
    }

    function Pi(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 2));
      return iT ? (TT.d = +iT[0], IT + iT[0].length) : -1
    }

    function di(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 3));
      return iT ? (TT.m = 0, TT.d = +iT[0], IT + iT[0].length) : -1
    }

    function Vi(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 2));
      return iT ? (TT.H = +iT[0], IT + iT[0].length) : -1
    }

    function Tz(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 2));
      return iT ? (TT.M = +iT[0], IT + iT[0].length) : -1
    }

    function oz(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 2));
      return iT ? (TT.S = +iT[0], IT + iT[0].length) : -1
    }

    function Iz(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 3));
      return iT ? (TT.L = +iT[0], IT + iT[0].length) : -1
    }

    function iz(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT, IT + 6));
      return iT ? (TT.L = Math.floor(iT[0] / 1e3), IT + iT[0].length) : -1
    }

    function zz(TT, oT, IT) {
      var iT = Ui.exec(oT.slice(IT, IT + 1));
      return iT ? IT + iT[0].length : -1
    }

    function kz(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT));
      return iT ? (TT.Q = +iT[0], IT + iT[0].length) : -1
    }

    function Wz(TT, oT, IT) {
      var iT = Ji.exec(oT.slice(IT));
      return iT ? (TT.s = +iT[0], IT + iT[0].length) : -1
    }

    function Xz(TT, oT) {
      return Yi(TT.getDate(), oT, 2)
    }

    function Bz(TT, oT) {
      return Yi(TT.getHours(), oT, 2)
    }

    function Fz(TT, oT) {
      return Yi(TT.getHours() % 12 || 12, oT, 2)
    }

    function Sz(TT, oT) {
      return Yi(1 + yI.count(Mi(TT), TT), oT, 3)
    }

    function Dz(TT, oT) {
      return Yi(TT.getMilliseconds(), oT, 3)
    }

    function Lz(TT, oT) {
      return Dz(TT, oT) + "000"
    }

    function xz(TT, oT) {
      return Yi(TT.getMonth() + 1, oT, 2)
    }

    function cz(TT, oT) {
      return Yi(TT.getMinutes(), oT, 2)
    }

    function Kz(TT, oT) {
      return Yi(TT.getSeconds(), oT, 2)
    }

    function Mz(TT) {
      var oT = TT.getDay();
      return 0 === oT ? 7 : oT
    }

    function rz(TT, oT) {
      return Yi(VI.count(Mi(TT) - 1, TT), oT, 2)
    }

    function Az(TT) {
      var oT = TT.getDay();
      return oT >= 4 || 0 === oT ? ii(TT) : ii.ceil(TT)
    }

    function gz(TT, oT) {
      return TT = Az(TT), Yi(ii.count(Mi(TT), TT) + (4 === Mi(TT).getDay()), oT, 2)
    }

    function hz(TT) {
      return TT.getDay()
    }

    function wz(TT, oT) {
      return Yi(Ti.count(Mi(TT) - 1, TT), oT, 2)
    }

    function mz(TT, oT) {
      return Yi(TT.getFullYear() % 100, oT, 2)
    }

    function ez(TT, oT) {
      return Yi((TT = Az(TT)).getFullYear() % 100, oT, 2)
    }

    function Rz(TT, oT) {
      return Yi(TT.getFullYear() % 1e4, oT, 4)
    }

    function uz(TT, oT) {
      var IT = TT.getDay();
      return Yi((TT = IT >= 4 || 0 === IT ? ii(TT) : ii.ceil(TT)).getFullYear() % 1e4, oT, 4)
    }

    function vz(TT) {
      var oT = TT.getTimezoneOffset();
      return (oT > 0 ? "-" : (oT *= -1, "+")) + Yi(oT / 60 | 0, "0", 2) + Yi(oT % 60, "0", 2)
    }

    function Ez(TT, oT) {
      return Yi(TT.getUTCDate(), oT, 2)
    }

    function fz(TT, oT) {
      return Yi(TT.getUTCHours(), oT, 2)
    }

    function Cz(TT, oT) {
      return Yi(TT.getUTCHours() % 12 || 12, oT, 2)
    }

    function jz(TT, oT) {
      return Yi(1 + NI.count(ri(TT), TT), oT, 3)
    }

    function Jz(TT, oT) {
      return Yi(TT.getUTCMilliseconds(), oT, 3)
    }

    function Uz(TT, oT) {
      return Jz(TT, oT) + "000"
    }

    function az(TT, oT) {
      return Yi(TT.getUTCMonth() + 1, oT, 2)
    }

    function Yz(TT, oT) {
      return Yi(TT.getUTCMinutes(), oT, 2)
    }

    function Qz(TT, oT) {
      return Yi(TT.getUTCSeconds(), oT, 2)
    }

    function Oz(TT) {
      var oT = TT.getUTCDay();
      return 0 === oT ? 7 : oT
    }

    function Hz(TT, oT) {
      return Yi(Xi.count(ri(TT) - 1, TT), oT, 2)
    }

    function nz(TT) {
      var oT = TT.getUTCDay();
      return oT >= 4 || 0 === oT ? Di(TT) : Di.ceil(TT)
    }

    function qz(TT, oT) {
      return TT = nz(TT), Yi(Di.count(ri(TT), TT) + (4 === ri(TT).getUTCDay()), oT, 2)
    }

    function Zz(TT) {
      return TT.getUTCDay()
    }

    function lz(TT, oT) {
      return Yi(Bi.count(ri(TT) - 1, TT), oT, 2)
    }

    function sz(TT, oT) {
      return Yi(TT.getUTCFullYear() % 100, oT, 2)
    }

    function tz(TT, oT) {
      return Yi((TT = nz(TT)).getUTCFullYear() % 100, oT, 2)
    }

    function Gz(TT, oT) {
      return Yi(TT.getUTCFullYear() % 1e4, oT, 4)
    }

    function pz(TT, oT) {
      var IT = TT.getUTCDay();
      return Yi((TT = IT >= 4 || 0 === IT ? Di(TT) : Di.ceil(TT)).getUTCFullYear() % 1e4, oT, 4)
    }

    function bz() {
      return "+0000"
    }

    function yz() {
      return "%"
    }

    function Nz(TT) {
      return +TT
    }

    function Pz(TT) {
      return Math.floor(+TT / 1e3)
    }

    function dz(TT) {
      return new Date(TT)
    }

    function Vz(TT) {
      return TT instanceof Date ? +TT : +new Date(+TT)
    }

    function Tk(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT) {
      var ST = Eo(),
        DT = ST.invert,
        LT = ST.domain,
        xT = FT(".%L"),
        cT = FT(":%S"),
        KT = FT("%I:%M"),
        MT = FT("%I %p"),
        rT = FT("%a %d"),
        AT = FT("%b %d"),
        gT = FT("%B"),
        hT = FT("%Y");

      function wT(TT) {
        return (BT(TT) < TT ? xT : XT(TT) < TT ? cT : WT(TT) < TT ? KT : kT(TT) < TT ? MT : iT(TT) < TT ? zT(TT) < TT ? rT : AT : IT(TT) < TT ? gT : hT)(TT)
      }
      return ST.invert = function(TT) {
        return new Date(DT(TT))
      }, ST.domain = function(TT) {
        return arguments.length ? LT(Array.from(TT, Vz)) : LT().map(dz)
      }, ST.ticks = function(oT) {
        var IT = LT();
        return TT(IT[0], IT[IT.length - 1], null == oT ? 10 : oT)
      }, ST.tickFormat = function(TT, oT) {
        return null == oT ? wT : FT(oT)
      }, ST.nice = function(TT) {
        var IT = LT();
        return TT && "function" === typeof TT.range || (TT = oT(IT[0], IT[IT.length - 1], null == TT ? 10 : TT)), TT ? LT(Po(IT, TT)) : ST
      }, ST.copy = function() {
        return uo(ST, Tk(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT))
      }, ST
    }

    function Ik() {
      return Co.f.apply(Tk(mi, ei, Mi, ci, VI, yI, pI, tI, sI, fi).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function ik() {
      return Co.f.apply(Tk(gi, wi, ri, Ki, Xi, NI, bI, GI, sI, Ci).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function zk() {
      var TT, oT, IT, iT, zT, kT = 0,
        WT = 1,
        XT = wo,
        BT = !1;

      function FT(oT) {
        return null == oT || isNaN(oT = +oT) ? zT : XT(0 === IT ? .5 : (oT = (iT(oT) - TT) * IT, BT ? Math.max(0, Math.min(1, oT)) : oT))
      }

      function ST(TT) {
        return function(oT) {
          var IT, iT;
          return arguments.length ? ([IT, iT] = oT, XT = TT(IT, iT), FT) : [XT(0), XT(1)]
        }
      }
      return FT.domain = function(zT) {
          return arguments.length ? ([kT, WT] = zT, TT = iT(kT = +kT), oT = iT(WT = +WT), IT = TT === oT ? 0 : 1 / (oT - TT), FT) : [kT, WT]
        }, FT.clamp = function(TT) {
          return arguments.length ? (BT = !!TT, FT) : BT
        }, FT.interpolator = function(TT) {
          return arguments.length ? (XT = TT, FT) : XT
        }, FT.range = ST(ro), FT.rangeRound = ST(Ao), FT.unknown = function(TT) {
          return arguments.length ? (zT = TT, FT) : zT
        },
        function(zT) {
          return iT = zT, TT = zT(kT), oT = zT(WT), IT = TT === oT ? 0 : 1 / (oT - TT), FT
        }
    }

    function kk(TT, oT) {
      return oT.domain(TT.domain()).interpolator(TT.interpolator()).clamp(TT.clamp()).unknown(TT.unknown())
    }

    function Wk() {
      var TT = bo(zk()(wo));
      return TT.copy = function() {
        return kk(TT, Wk())
      }, Co.e.apply(TT, arguments)
    }

    function Xk() {
      var TT = kI(zk()).domain([1, 10]);
      return TT.copy = function() {
        return kk(TT, Xk()).base(TT.base())
      }, Co.e.apply(TT, arguments)
    }

    function Bk() {
      var TT = FI(zk());
      return TT.copy = function() {
        return kk(TT, Bk()).constant(TT.constant())
      }, Co.e.apply(TT, arguments)
    }

    function Fk() {
      var TT = KI(zk());
      return TT.copy = function() {
        return kk(TT, Fk()).exponent(TT.exponent())
      }, Co.e.apply(TT, arguments)
    }

    function Sk() {
      return Fk.apply(null, arguments).exponent(.5)
    }

    function Dk() {
      var TT = [],
        oT = wo;

      function IT(IT) {
        if (null != IT && !isNaN(IT = +IT)) return oT((gT(TT, IT, 1) - 1) / (TT.length - 1))
      }
      return IT.domain = function(oT) {
        if (!arguments.length) return TT.slice();
        TT = [];
        for (let IT of oT) null == IT || isNaN(IT = +IT) || TT.push(IT);
        return TT.sort(LT), IT
      }, IT.interpolator = function(TT) {
        return arguments.length ? (oT = TT, IT) : oT
      }, IT.range = function() {
        return TT.map(((IT, iT) => oT(iT / (TT.length - 1))))
      }, IT.quantiles = function(oT) {
        return Array.from({
          length: oT + 1
        }, ((IT, iT) => vI(TT, iT / oT)))
      }, IT.copy = function() {
        return Dk(oT).domain(TT)
      }, Co.e.apply(IT, arguments)
    }

    function Lk() {
      var TT, oT, IT, iT, zT, kT, WT, XT = 0,
        BT = .5,
        FT = 1,
        ST = 1,
        DT = wo,
        LT = !1;

      function xT(TT) {
        return isNaN(TT = +TT) ? WT : (TT = .5 + ((TT = +kT(TT)) - oT) * (ST * TT < ST * oT ? iT : zT), DT(LT ? Math.max(0, Math.min(1, TT)) : TT))
      }

      function cT(TT) {
        return function(oT) {
          var IT, iT, zT;
          return arguments.length ? ([IT, iT, zT] = oT, DT = function(TT, oT) {
            void 0 === oT && (oT = TT, TT = ro);
            for (var IT = 0, iT = oT.length - 1, zT = oT[0], kT = new Array(iT < 0 ? 0 : iT); IT < iT;) kT[IT] = TT(zT, zT = oT[++IT]);
            return function(TT) {
              var oT = Math.max(0, Math.min(iT - 1, Math.floor(TT *= iT)));
              return kT[oT](TT - oT)
            }
          }(TT, [IT, iT, zT]), xT) : [DT(0), DT(.5), DT(1)]
        }
      }
      return xT.domain = function(WT) {
          return arguments.length ? ([XT, BT, FT] = WT, TT = kT(XT = +XT), oT = kT(BT = +BT), IT = kT(FT = +FT), iT = TT === oT ? 0 : .5 / (oT - TT), zT = oT === IT ? 0 : .5 / (IT - oT), ST = oT < TT ? -1 : 1, xT) : [XT, BT, FT]
        }, xT.clamp = function(TT) {
          return arguments.length ? (LT = !!TT, xT) : LT
        }, xT.interpolator = function(TT) {
          return arguments.length ? (DT = TT, xT) : DT
        }, xT.range = cT(ro), xT.rangeRound = cT(Ao), xT.unknown = function(TT) {
          return arguments.length ? (WT = TT, xT) : WT
        },
        function(WT) {
          return kT = WT, TT = WT(XT), oT = WT(BT), IT = WT(FT), iT = TT === oT ? 0 : .5 / (oT - TT), zT = oT === IT ? 0 : .5 / (IT - oT), ST = oT < TT ? -1 : 1, xT
        }
    }

    function xk() {
      var TT = bo(Lk()(wo));
      return TT.copy = function() {
        return kk(TT, xk())
      }, Co.e.apply(TT, arguments)
    }

    function ck() {
      var TT = kI(Lk()).domain([.1, 1, 10]);
      return TT.copy = function() {
        return kk(TT, ck()).base(TT.base())
      }, Co.e.apply(TT, arguments)
    }

    function Kk() {
      var TT = FI(Lk());
      return TT.copy = function() {
        return kk(TT, Kk()).constant(TT.constant())
      }, Co.e.apply(TT, arguments)
    }

    function Mk() {
      var TT = KI(Lk());
      return TT.copy = function() {
        return kk(TT, Mk()).exponent(TT.exponent())
      }, Co.e.apply(TT, arguments)
    }

    function rk() {
      return Mk.apply(null, arguments).exponent(.5)
    }

    function Ak(TT, oT) {
      if ((zT = TT.length) > 1)
        for (var IT, iT, zT, kT = 1, WT = TT[oT[0]], XT = WT.length; kT < zT; ++kT)
          for (iT = WT, WT = TT[oT[kT]], IT = 0; IT < XT; ++IT) WT[IT][1] += WT[IT][0] = isNaN(iT[IT][1]) ? iT[IT][0] : iT[IT][1]
    }! function(TT) {
      Ei = function(TT) {
        var oT = TT.dateTime,
          IT = TT.date,
          iT = TT.time,
          zT = TT.periods,
          kT = TT.days,
          WT = TT.shortDays,
          XT = TT.months,
          BT = TT.shortMonths,
          FT = Oi(zT),
          ST = Hi(zT),
          DT = Oi(kT),
          LT = Hi(kT),
          xT = Oi(WT),
          cT = Hi(WT),
          KT = Oi(XT),
          MT = Hi(XT),
          rT = Oi(BT),
          AT = Hi(BT),
          gT = {
            a: function(TT) {
              return WT[TT.getDay()]
            },
            A: function(TT) {
              return kT[TT.getDay()]
            },
            b: function(TT) {
              return BT[TT.getMonth()]
            },
            B: function(TT) {
              return XT[TT.getMonth()]
            },
            c: null,
            d: Xz,
            e: Xz,
            f: Lz,
            g: ez,
            G: uz,
            H: Bz,
            I: Fz,
            j: Sz,
            L: Dz,
            m: xz,
            M: cz,
            p: function(TT) {
              return zT[+(TT.getHours() >= 12)]
            },
            q: function(TT) {
              return 1 + ~~(TT.getMonth() / 3)
            },
            Q: Nz,
            s: Pz,
            S: Kz,
            u: Mz,
            U: rz,
            V: gz,
            w: hz,
            W: wz,
            x: null,
            X: null,
            y: mz,
            Y: Rz,
            Z: vz,
            "%": yz
          },
          hT = {
            a: function(TT) {
              return WT[TT.getUTCDay()]
            },
            A: function(TT) {
              return kT[TT.getUTCDay()]
            },
            b: function(TT) {
              return BT[TT.getUTCMonth()]
            },
            B: function(TT) {
              return XT[TT.getUTCMonth()]
            },
            c: null,
            d: Ez,
            e: Ez,
            f: Uz,
            g: tz,
            G: pz,
            H: fz,
            I: Cz,
            j: jz,
            L: Jz,
            m: az,
            M: Yz,
            p: function(TT) {
              return zT[+(TT.getUTCHours() >= 12)]
            },
            q: function(TT) {
              return 1 + ~~(TT.getUTCMonth() / 3)
            },
            Q: Nz,
            s: Pz,
            S: Qz,
            u: Oz,
            U: Hz,
            V: qz,
            w: Zz,
            W: lz,
            x: null,
            X: null,
            y: sz,
            Y: Gz,
            Z: bz,
            "%": yz
          },
          wT = {
            a: function(TT, oT, IT) {
              var iT = xT.exec(oT.slice(IT));
              return iT ? (TT.w = cT.get(iT[0].toLowerCase()), IT + iT[0].length) : -1
            },
            A: function(TT, oT, IT) {
              var iT = DT.exec(oT.slice(IT));
              return iT ? (TT.w = LT.get(iT[0].toLowerCase()), IT + iT[0].length) : -1
            },
            b: function(TT, oT, IT) {
              var iT = rT.exec(oT.slice(IT));
              return iT ? (TT.m = AT.get(iT[0].toLowerCase()), IT + iT[0].length) : -1
            },
            B: function(TT, oT, IT) {
              var iT = KT.exec(oT.slice(IT));
              return iT ? (TT.m = MT.get(iT[0].toLowerCase()), IT + iT[0].length) : -1
            },
            c: function(TT, IT, iT) {
              return RT(TT, oT, IT, iT)
            },
            d: Pi,
            e: Pi,
            f: iz,
            g: Gi,
            G: ti,
            H: Vi,
            I: Vi,
            j: di,
            L: Iz,
            m: Ni,
            M: Tz,
            p: function(TT, oT, IT) {
              var iT = FT.exec(oT.slice(IT));
              return iT ? (TT.p = ST.get(iT[0].toLowerCase()), IT + iT[0].length) : -1
            },
            q: yi,
            Q: kz,
            s: Wz,
            S: oz,
            u: qi,
            U: Zi,
            V: li,
            w: ni,
            W: si,
            x: function(TT, oT, iT) {
              return RT(TT, IT, oT, iT)
            },
            X: function(TT, oT, IT) {
              return RT(TT, iT, oT, IT)
            },
            y: Gi,
            Y: ti,
            Z: bi,
            "%": zz
          };

        function mT(TT, oT) {
          return function(IT) {
            var iT, zT, kT, WT = [],
              XT = -1,
              BT = 0,
              FT = TT.length;
            for (IT instanceof Date || (IT = new Date(+IT)); ++XT < FT;) 37 === TT.charCodeAt(XT) && (WT.push(TT.slice(BT, XT)), null != (zT = ji[iT = TT.charAt(++XT)]) ? iT = TT.charAt(++XT) : zT = "e" === iT ? " " : "0", (kT = oT[iT]) && (iT = kT(IT, zT)), WT.push(iT), BT = XT + 1);
            return WT.push(TT.slice(BT, XT)), WT.join("")
          }
        }

        function eT(TT, oT) {
          return function(IT) {
            var iT, zT, kT = vi(1900, void 0, 1);
            if (RT(kT, TT, IT += "", 0) != IT.length) return null;
            if ("Q" in kT) return new Date(kT.Q);
            if ("s" in kT) return new Date(1e3 * kT.s + ("L" in kT ? kT.L : 0));
            if (oT && !("Z" in kT) && (kT.Z = 0), "p" in kT && (kT.H = kT.H % 12 + 12 * kT.p), void 0 === kT.m && (kT.m = "q" in kT ? kT.q : 0), "V" in kT) {
              if (kT.V < 1 || kT.V > 53) return null;
              "w" in kT || (kT.w = 1), "Z" in kT ? (zT = (iT = ui(vi(kT.y, 0, 1))).getUTCDay(), iT = zT > 4 || 0 === zT ? Bi.ceil(iT) : Bi(iT), iT = NI.offset(iT, 7 * (kT.V - 1)), kT.y = iT.getUTCFullYear(), kT.m = iT.getUTCMonth(), kT.d = iT.getUTCDate() + (kT.w + 6) % 7) : (zT = (iT = Ri(vi(kT.y, 0, 1))).getDay(), iT = zT > 4 || 0 === zT ? Ti.ceil(iT) : Ti(iT), iT = yI.offset(iT, 7 * (kT.V - 1)), kT.y = iT.getFullYear(), kT.m = iT.getMonth(), kT.d = iT.getDate() + (kT.w + 6) % 7)
            } else("W" in kT || "U" in kT) && ("w" in kT || (kT.w = "u" in kT ? kT.u % 7 : "W" in kT ? 1 : 0), zT = "Z" in kT ? ui(vi(kT.y, 0, 1)).getUTCDay() : Ri(vi(kT.y, 0, 1)).getDay(), kT.m = 0, kT.d = "W" in kT ? (kT.w + 6) % 7 + 7 * kT.W - (zT + 5) % 7 : kT.w + 7 * kT.U - (zT + 6) % 7);
            return "Z" in kT ? (kT.H += kT.Z / 100 | 0, kT.M += kT.Z % 100, ui(kT)) : Ri(kT)
          }
        }

        function RT(TT, oT, IT, iT) {
          for (var zT, kT, WT = 0, XT = oT.length, BT = IT.length; WT < XT;) {
            if (iT >= BT) return -1;
            if (37 === (zT = oT.charCodeAt(WT++))) {
              if (zT = oT.charAt(WT++), !(kT = wT[zT in ji ? oT.charAt(WT++) : zT]) || (iT = kT(TT, IT, iT)) < 0) return -1
            } else if (zT != IT.charCodeAt(iT++)) return -1
          }
          return iT
        }
        return gT.x = mT(IT, gT), gT.X = mT(iT, gT), gT.c = mT(oT, gT), hT.x = mT(IT, hT), hT.X = mT(iT, hT), hT.c = mT(oT, hT), {
          format: function(TT) {
            var oT = mT(TT += "", gT);
            return oT.toString = function() {
              return TT
            }, oT
          },
          parse: function(TT) {
            var oT = eT(TT += "", !1);
            return oT.toString = function() {
              return TT
            }, oT
          },
          utcFormat: function(TT) {
            var oT = mT(TT += "", hT);
            return oT.toString = function() {
              return TT
            }, oT
          },
          utcParse: function(TT) {
            var oT = eT(TT += "", !0);
            return oT.toString = function() {
              return TT
            }, oT
          }
        }
      }(TT), fi = Ei.format, Ei.parse, Ci = Ei.utcFormat, Ei.utcParse
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
    var gk = IT(5696),
      hk = IT(5580);

    function wk(TT) {
      for (var oT = TT.length, IT = new Array(oT); --oT >= 0;) IT[oT] = oT;
      return IT
    }

    function mk(TT, oT) {
      return TT[oT]
    }

    function ek(TT) {
      const oT = [];
      return oT.key = TT, oT
    }
    var Rk = IT(5638),
      uk = IT.n(Rk),
      vk = IT(5654),
      Ek = IT.n(vk),
      fk = IT(4908),
      Ck = IT.n(fk),
      jk = IT(4728),
      Jk = IT.n(jk),
      Uk = IT(4611),
      ak = IT.n(Uk),
      Yk = IT(4640),
      Qk = IT.n(Yk),
      Ok = IT(5668),
      Hk = IT.n(Ok),
      nk = IT(4625),
      qk = IT.n(nk),
      Zk = IT(5537),
      lk = IT.n(Zk),
      sk = IT(5678),
      tk = IT.n(sk),
      Gk = IT(4998),
      pk = IT.n(Gk),
      bk = IT(5681),
      yk = IT.n(bk);

    function Nk(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return Pk(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(TT)) return Array.from(TT)
      }(TT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return Pk(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return Pk(TT, oT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Pk(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }
    var dk = function(TT) {
        return TT
      },
      Vk = {
        "@@functional/placeholder": !0
      },
      TW = function(TT) {
        return TT === Vk
      },
      oW = function(TT) {
        return function oT() {
          return 0 === arguments.length || 1 === arguments.length && TW(arguments.length <= 0 ? void 0 : arguments[0]) ? oT : TT.apply(void 0, arguments)
        }
      },
      IW = function TT(oT, IT) {
        return 1 === oT ? IT : oW((function() {
          for (var iT = arguments.length, zT = new Array(iT), kT = 0; kT < iT; kT++) zT[kT] = arguments[kT];
          var WT = zT.filter((function(TT) {
            return TT !== Vk
          })).length;
          return WT >= oT ? IT.apply(void 0, zT) : TT(oT - WT, oW((function() {
            for (var TT = arguments.length, oT = new Array(TT), iT = 0; iT < TT; iT++) oT[iT] = arguments[iT];
            var kT = zT.map((function(TT) {
              return TW(TT) ? oT.shift() : TT
            }));
            return IT.apply(void 0, Nk(kT).concat(oT))
          })))
        }))
      },
      iW = function(TT) {
        return IW(TT.length, TT)
      },
      zW = function(TT, oT) {
        for (var IT = [], iT = TT; iT < oT; ++iT) IT[iT - TT] = iT;
        return IT
      },
      kW = iW((function(TT, oT) {
        return Array.isArray(oT) ? oT.map(TT) : Object.keys(oT).map((function(TT) {
          return oT[TT]
        })).map(TT)
      })),
      WW = function() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        if (!oT.length) return dk;
        var iT = oT.reverse(),
          zT = iT[0],
          kT = iT.slice(1);
        return function() {
          return kT.reduce((function(TT, oT) {
            return oT(TT)
          }), zT.apply(void 0, arguments))
        }
      },
      XW = function(TT) {
        return Array.isArray(TT) ? TT.reverse() : TT.split("").reverse.join("")
      },
      BW = function(TT) {
        var oT = null,
          IT = null;
        return function() {
          for (var iT = arguments.length, zT = new Array(iT), kT = 0; kT < iT; kT++) zT[kT] = arguments[kT];
          return oT && zT.every((function(TT, IT) {
            return TT === oT[IT]
          })) ? IT : (oT = zT, IT = TT.apply(void 0, zT))
        }
      };
    const FW = {
      rangeStep: function(TT, oT, IT) {
        for (var iT = new(yk())(TT), zT = 0, kT = []; iT.lt(oT) && zT < 1e5;) kT.push(iT.toNumber()), iT = iT.add(IT), zT++;
        return kT
      },
      getDigitCount: function(TT) {
        return 0 === TT ? 1 : Math.floor(new(yk())(TT).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: iW((function(TT, oT, IT) {
        var iT = +TT;
        return iT + IT * (+oT - iT)
      })),
      uninterpolateNumber: iW((function(TT, oT, IT) {
        var iT = oT - +TT;
        return (IT - TT) / (iT = iT || 1 / 0)
      })),
      uninterpolateTruncation: iW((function(TT, oT, IT) {
        var iT = oT - +TT;
        return iT = iT || 1 / 0, Math.max(0, Math.min(1, (IT - TT) / iT))
      }))
    };

    function SW(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return xW(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(TT)) return Array.from(TT)
      }(TT) || LW(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function DW(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(TT))) return;
        var IT = [],
          iT = !0,
          zT = !1,
          kT = void 0;
        try {
          for (var WT, XT = TT[Symbol.iterator](); !(iT = (WT = XT.next()).done) && (IT.push(WT.value), !oT || IT.length !== oT); iT = !0);
        } catch (BT) {
          zT = !0, kT = BT
        } finally {
          try {
            iT || null == XT.return || XT.return()
          } finally {
            if (zT) throw kT
          }
        }
        return IT
      }(TT, oT) || LW(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function LW(TT, oT) {
      if (TT) {
        if ("string" === typeof TT) return xW(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        return "Object" === IT && TT.constructor && (IT = TT.constructor.name), "Map" === IT || "Set" === IT ? Array.from(TT) : "Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT) ? xW(TT, oT) : void 0
      }
    }

    function xW(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function cW(TT) {
      var oT = DW(TT, 2),
        IT = oT[0],
        iT = oT[1],
        zT = IT,
        kT = iT;
      return IT > iT && (zT = iT, kT = IT), [zT, kT]
    }

    function KW(TT, oT, IT) {
      if (TT.lte(0)) return new(yk())(0);
      var iT = FW.getDigitCount(TT.toNumber()),
        zT = new(yk())(10).pow(iT),
        kT = TT.div(zT),
        WT = 1 !== iT ? .05 : .1,
        XT = new(yk())(Math.ceil(kT.div(WT).toNumber())).add(IT).mul(WT).mul(zT);
      return oT ? XT : new(yk())(Math.ceil(XT))
    }

    function MW(TT, oT, IT) {
      var iT = 1,
        zT = new(yk())(TT);
      if (!zT.isint() && IT) {
        var kT = Math.abs(TT);
        kT < 1 ? (iT = new(yk())(10).pow(FW.getDigitCount(TT) - 1), zT = new(yk())(Math.floor(zT.div(iT).toNumber())).mul(iT)) : kT > 1 && (zT = new(yk())(Math.floor(TT)))
      } else 0 === TT ? zT = new(yk())(Math.floor((oT - 1) / 2)) : IT || (zT = new(yk())(Math.floor(TT)));
      var WT = Math.floor((oT - 1) / 2);
      return WW(kW((function(TT) {
        return zT.add(new(yk())(TT - WT).mul(iT)).toNumber()
      })), zW)(0, oT)
    }

    function rW(TT, oT, IT, iT) {
      var zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((oT - TT) / (IT - 1))) return {
        step: new(yk())(0),
        tickMin: new(yk())(0),
        tickMax: new(yk())(0)
      };
      var kT, WT = KW(new(yk())(oT).sub(TT).div(IT - 1), iT, zT);
      kT = TT <= 0 && oT >= 0 ? new(yk())(0) : (kT = new(yk())(TT).add(oT).div(2)).sub(new(yk())(kT).mod(WT));
      var XT = Math.ceil(kT.sub(TT).div(WT).toNumber()),
        BT = Math.ceil(new(yk())(oT).sub(kT).div(WT).toNumber()),
        FT = XT + BT + 1;
      return FT > IT ? rW(TT, oT, IT, iT, zT + 1) : (FT < IT && (BT = oT > 0 ? BT + (IT - FT) : BT, XT = oT > 0 ? XT : XT + (IT - FT)), {
        step: WT,
        tickMin: kT.sub(new(yk())(XT).mul(WT)),
        tickMax: kT.add(new(yk())(BT).mul(WT))
      })
    }
    var AW = BW((function(TT) {
        var oT = DW(TT, 2),
          IT = oT[0],
          iT = oT[1],
          zT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          kT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          WT = Math.max(zT, 2),
          XT = DW(cW([IT, iT]), 2),
          BT = XT[0],
          FT = XT[1];
        if (BT === -1 / 0 || FT === 1 / 0) {
          var ST = FT === 1 / 0 ? [BT].concat(SW(zW(0, zT - 1).map((function() {
            return 1 / 0
          })))) : [].concat(SW(zW(0, zT - 1).map((function() {
            return -1 / 0
          }))), [FT]);
          return IT > iT ? XW(ST) : ST
        }
        if (BT === FT) return MW(BT, zT, kT);
        var DT = rW(BT, FT, WT, kT),
          LT = DT.step,
          xT = DT.tickMin,
          cT = DT.tickMax,
          KT = FW.rangeStep(xT, cT.add(new(yk())(.1).mul(LT)), LT);
        return IT > iT ? XW(KT) : KT
      })),
      gW = (BW((function(TT) {
        var oT = DW(TT, 2),
          IT = oT[0],
          iT = oT[1],
          zT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          kT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          WT = Math.max(zT, 2),
          XT = DW(cW([IT, iT]), 2),
          BT = XT[0],
          FT = XT[1];
        if (BT === -1 / 0 || FT === 1 / 0) return [IT, iT];
        if (BT === FT) return MW(BT, zT, kT);
        var ST = KW(new(yk())(FT).sub(BT).div(WT - 1), kT, 0),
          DT = WW(kW((function(TT) {
            return new(yk())(BT).add(new(yk())(TT).mul(ST)).toNumber()
          })), zW)(0, WT).filter((function(TT) {
            return TT >= BT && TT <= FT
          }));
        return IT > iT ? XW(DT) : DT
      })), BW((function(TT, oT) {
        var IT = DW(TT, 2),
          iT = IT[0],
          zT = IT[1],
          kT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          WT = DW(cW([iT, zT]), 2),
          XT = WT[0],
          BT = WT[1];
        if (XT === -1 / 0 || BT === 1 / 0) return [iT, zT];
        if (XT === BT) return [XT];
        var FT = Math.max(oT, 2),
          ST = KW(new(yk())(BT).sub(XT).div(FT - 1), kT, 0),
          DT = [].concat(SW(FW.rangeStep(new(yk())(XT), new(yk())(BT).sub(new(yk())(.99).mul(ST)), ST)), [BT]);
        return iT > zT ? XW(DT) : DT
      }))),
      hW = IT(5685),
      wW = IT(4606),
      mW = IT(4918),
      eW = IT(5691);

    function RW(TT) {
      return RW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, RW(TT)
    }

    function uW(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return vW(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || function(TT, oT) {
        if (!TT) return;
        if ("string" === typeof TT) return vW(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        "Object" === IT && TT.constructor && (IT = TT.constructor.name);
        if ("Map" === IT || "Set" === IT) return Array.from(TT);
        if ("Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT)) return vW(TT, oT)
      }(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vW(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function EW(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function fW(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? EW(Object(IT), !0).forEach((function(oT) {
          CW(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : EW(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function CW(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != RW(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != RW(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == RW(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function jW(TT, oT, IT) {
      return Ck()(TT) || Ck()(oT) ? IT : (0, wW.y)(oT) ? Qk()(TT, oT, IT) : Jk()(oT) ? oT(TT) : IT
    }

    function JW(TT, oT, IT, iT) {
      var zT = Hk()(TT, (function(TT) {
        return jW(TT, oT)
      }));
      if ("number" === IT) {
        var kT = zT.filter((function(TT) {
          return (0, wW.C)(TT) || parseFloat(TT)
        }));
        return kT.length ? [Ek()(kT), uk()(kT)] : [1 / 0, -1 / 0]
      }
      return (iT ? zT.filter((function(TT) {
        return !Ck()(TT)
      })) : zT).map((function(TT) {
        return (0, wW.y)(TT) || TT instanceof Date ? TT : ""
      }))
    }
    var UW = function(TT) {
        var oT, IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          iT = arguments.length > 2 ? arguments[2] : void 0,
          zT = arguments.length > 3 ? arguments[3] : void 0,
          kT = -1,
          WT = null !== (oT = null === IT || void 0 === IT ? void 0 : IT.length) && void 0 !== oT ? oT : 0;
        if (WT <= 1) return 0;
        if (zT && "angleAxis" === zT.axisType && Math.abs(Math.abs(zT.range[1] - zT.range[0]) - 360) <= 1e-6)
          for (var XT = zT.range, BT = 0; BT < WT; BT++) {
            var FT = BT > 0 ? iT[BT - 1].coordinate : iT[WT - 1].coordinate,
              ST = iT[BT].coordinate,
              DT = BT >= WT - 1 ? iT[0].coordinate : iT[BT + 1].coordinate,
              LT = void 0;
            if ((0, wW.G)(ST - FT) !== (0, wW.G)(DT - ST)) {
              var xT = [];
              if ((0, wW.G)(DT - ST) === (0, wW.G)(XT[1] - XT[0])) {
                LT = DT;
                var cT = ST + XT[1] - XT[0];
                xT[0] = Math.min(cT, (cT + FT) / 2), xT[1] = Math.max(cT, (cT + FT) / 2)
              } else {
                LT = FT;
                var KT = DT + XT[1] - XT[0];
                xT[0] = Math.min(ST, (KT + ST) / 2), xT[1] = Math.max(ST, (KT + ST) / 2)
              }
              var MT = [Math.min(ST, (LT + ST) / 2), Math.max(ST, (LT + ST) / 2)];
              if (TT > MT[0] && TT <= MT[1] || TT >= xT[0] && TT <= xT[1]) {
                kT = iT[BT].index;
                break
              }
            } else {
              var rT = Math.min(FT, DT),
                AT = Math.max(FT, DT);
              if (TT > (rT + ST) / 2 && TT <= (AT + ST) / 2) {
                kT = iT[BT].index;
                break
              }
            }
          } else
            for (var gT = 0; gT < WT; gT++)
              if (0 === gT && TT <= (IT[gT].coordinate + IT[gT + 1].coordinate) / 2 || gT > 0 && gT < WT - 1 && TT > (IT[gT].coordinate + IT[gT - 1].coordinate) / 2 && TT <= (IT[gT].coordinate + IT[gT + 1].coordinate) / 2 || gT === WT - 1 && TT > (IT[gT].coordinate + IT[gT - 1].coordinate) / 2) {
                kT = IT[gT].index;
                break
              } return kT
      },
      aW = function(TT) {
        var oT, IT, iT = TT.type.displayName,
          zT = null !== (oT = TT.type) && void 0 !== oT && oT.defaultProps ? fW(fW({}, TT.type.defaultProps), TT.props) : TT.props,
          kT = zT.stroke,
          WT = zT.fill;
        switch (iT) {
          case "Line":
            IT = kT;
            break;
          case "Area":
          case "Radar":
            IT = kT && "none" !== kT ? kT : WT;
            break;
          default:
            IT = WT
        }
        return IT
      },
      YW = function(TT) {
        var oT = TT.barSize,
          IT = TT.totalSize,
          iT = TT.stackGroups,
          zT = void 0 === iT ? {} : iT;
        if (!zT) return {};
        for (var kT = {}, WT = Object.keys(zT), XT = 0, BT = WT.length; XT < BT; XT++)
          for (var FT = zT[WT[XT]].stackGroups, ST = Object.keys(FT), DT = 0, LT = ST.length; DT < LT; DT++) {
            var xT = FT[ST[DT]],
              cT = xT.items,
              KT = xT.cateAxisId,
              MT = cT.filter((function(TT) {
                return (0, mW.j)(TT.type).indexOf("Bar") >= 0
              }));
            if (MT && MT.length) {
              var rT = MT[0].type.defaultProps,
                AT = void 0 !== rT ? fW(fW({}, rT), MT[0].props) : MT[0].props,
                gT = AT.barSize,
                hT = AT[KT];
              kT[hT] || (kT[hT] = []);
              var wT = Ck()(gT) ? oT : gT;
              kT[hT].push({
                item: MT[0],
                stackList: MT.slice(1),
                barSize: Ck()(wT) ? void 0 : (0, wW.r)(wT, IT, 0)
              })
            }
          }
        return kT
      },
      QW = function(TT) {
        var oT = TT.barGap,
          IT = TT.barCategoryGap,
          iT = TT.bandSize,
          zT = TT.sizeList,
          kT = void 0 === zT ? [] : zT,
          WT = TT.maxBarSize,
          XT = kT.length;
        if (XT < 1) return null;
        var BT, FT = (0, wW.r)(oT, iT, 0, !0),
          ST = [];
        if (kT[0].barSize === +kT[0].barSize) {
          var DT = !1,
            LT = iT / XT,
            xT = kT.reduce((function(TT, oT) {
              return TT + oT.barSize || 0
            }), 0);
          (xT += (XT - 1) * FT) >= iT && (xT -= (XT - 1) * FT, FT = 0), xT >= iT && LT > 0 && (DT = !0, xT = XT * (LT *= .9));
          var cT = {
            offset: ((iT - xT) / 2 | 0) - FT,
            size: 0
          };
          BT = kT.reduce((function(TT, oT) {
            var IT = {
                item: oT.item,
                position: {
                  offset: cT.offset + cT.size + FT,
                  size: DT ? LT : oT.barSize
                }
              },
              iT = [].concat(uW(TT), [IT]);
            return cT = iT[iT.length - 1].position, oT.stackList && oT.stackList.length && oT.stackList.forEach((function(TT) {
              iT.push({
                item: TT,
                position: cT
              })
            })), iT
          }), ST)
        } else {
          var KT = (0, wW.r)(IT, iT, 0, !0);
          iT - 2 * KT - (XT - 1) * FT <= 0 && (FT = 0);
          var MT = (iT - 2 * KT - (XT - 1) * FT) / XT;
          MT > 1 && (MT >>= 0);
          var rT = WT === +WT ? Math.min(MT, WT) : MT;
          BT = kT.reduce((function(TT, oT, IT) {
            var iT = [].concat(uW(TT), [{
              item: oT.item,
              position: {
                offset: KT + (MT + FT) * IT + (MT - rT) / 2,
                size: rT
              }
            }]);
            return oT.stackList && oT.stackList.length && oT.stackList.forEach((function(TT) {
              iT.push({
                item: TT,
                position: iT[iT.length - 1].position
              })
            })), iT
          }), ST)
        }
        return BT
      },
      OW = function(TT, oT, IT, iT) {
        var zT = IT.children,
          kT = IT.width,
          WT = IT.margin,
          XT = kT - (WT.left || 0) - (WT.right || 0),
          BT = (0, eW.e)({
            children: zT,
            legendWidth: XT
          });
        if (BT) {
          var FT = iT || {},
            ST = FT.width,
            DT = FT.height,
            LT = BT.align,
            xT = BT.verticalAlign,
            cT = BT.layout;
          if (("vertical" === cT || "horizontal" === cT && "middle" === xT) && "center" !== LT && (0, wW.C)(TT[LT])) return fW(fW({}, TT), {}, CW({}, LT, TT[LT] + (ST || 0)));
          if (("horizontal" === cT || "vertical" === cT && "center" === LT) && "middle" !== xT && (0, wW.C)(TT[xT])) return fW(fW({}, TT), {}, CW({}, xT, TT[xT] + (DT || 0)))
        }
        return TT
      },
      HW = function(TT, oT, IT, iT, zT) {
        var kT = oT.props.children,
          WT = (0, mW.e)(kT, hW.d).filter((function(TT) {
            return function(TT, oT, IT) {
              return !!Ck()(oT) || ("horizontal" === TT ? "yAxis" === oT : "vertical" === TT || "x" === IT ? "xAxis" === oT : "y" !== IT || "yAxis" === oT)
            }(iT, zT, TT.props.direction)
          }));
        if (WT && WT.length) {
          var XT = WT.map((function(TT) {
            return TT.props.dataKey
          }));
          return TT.reduce((function(TT, oT) {
            var iT = jW(oT, IT);
            if (Ck()(iT)) return TT;
            var zT = Array.isArray(iT) ? [Ek()(iT), uk()(iT)] : [iT, iT],
              kT = XT.reduce((function(TT, IT) {
                var iT = jW(oT, IT, 0),
                  kT = zT[0] - Math.abs(Array.isArray(iT) ? iT[0] : iT),
                  WT = zT[1] + Math.abs(Array.isArray(iT) ? iT[1] : iT);
                return [Math.min(kT, TT[0]), Math.max(WT, TT[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(kT[0], TT[0]), Math.max(kT[1], TT[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      nW = function(TT, oT, IT, iT, zT) {
        var kT = oT.map((function(oT) {
          return HW(TT, oT, IT, zT, iT)
        })).filter((function(TT) {
          return !Ck()(TT)
        }));
        return kT && kT.length ? kT.reduce((function(TT, oT) {
          return [Math.min(TT[0], oT[0]), Math.max(TT[1], oT[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      qW = function(TT, oT, IT, iT, zT) {
        var kT = oT.map((function(oT) {
          var kT = oT.props.dataKey;
          return "number" === IT && kT && HW(TT, oT, kT, iT) || JW(TT, kT, IT, zT)
        }));
        if ("number" === IT) return kT.reduce((function(TT, oT) {
          return [Math.min(TT[0], oT[0]), Math.max(TT[1], oT[1])]
        }), [1 / 0, -1 / 0]);
        var WT = {};
        return kT.reduce((function(TT, oT) {
          for (var IT = 0, iT = oT.length; IT < iT; IT++) WT[oT[IT]] || (WT[oT[IT]] = !0, TT.push(oT[IT]));
          return TT
        }), [])
      },
      ZW = function(TT, oT) {
        return "horizontal" === TT && "xAxis" === oT || "vertical" === TT && "yAxis" === oT || "centric" === TT && "angleAxis" === oT || "radial" === TT && "radiusAxis" === oT
      },
      lW = function(TT, oT, IT, iT) {
        if (iT) return TT.map((function(TT) {
          return TT.coordinate
        }));
        var zT, kT, WT = TT.map((function(TT) {
          return TT.coordinate === oT && (zT = !0), TT.coordinate === IT && (kT = !0), TT.coordinate
        }));
        return zT || WT.push(oT), kT || WT.push(IT), WT
      },
      sW = function(TT, oT, IT) {
        if (!TT) return null;
        var iT = TT.scale,
          zT = TT.duplicateDomain,
          kT = TT.type,
          WT = TT.range,
          XT = "scaleBand" === TT.realScaleType ? iT.bandwidth() / 2 : 2,
          BT = (oT || IT) && "category" === kT && iT.bandwidth ? iT.bandwidth() / XT : 0;
        return BT = "angleAxis" === TT.axisType && (null === WT || void 0 === WT ? void 0 : WT.length) >= 2 ? 2 * (0, wW.G)(WT[0] - WT[1]) * BT : BT, oT && (TT.ticks || TT.niceTicks) ? (TT.ticks || TT.niceTicks).map((function(TT) {
          var oT = zT ? zT.indexOf(TT) : TT;
          return {
            coordinate: iT(oT) + BT,
            value: TT,
            offset: BT
          }
        })).filter((function(TT) {
          return !qk()(TT.coordinate)
        })) : TT.isCategorical && TT.categoricalDomain ? TT.categoricalDomain.map((function(TT, oT) {
          return {
            coordinate: iT(TT) + BT,
            value: TT,
            index: oT,
            offset: BT
          }
        })) : iT.ticks && !IT ? iT.ticks(TT.tickCount).map((function(TT) {
          return {
            coordinate: iT(TT) + BT,
            value: TT,
            offset: BT
          }
        })) : iT.domain().map((function(TT, oT) {
          return {
            coordinate: iT(TT) + BT,
            value: zT ? zT[TT] : TT,
            index: oT,
            offset: BT
          }
        }))
      },
      tW = new WeakMap,
      GW = function(TT, oT) {
        if ("function" !== typeof oT) return TT;
        tW.has(TT) || tW.set(TT, new WeakMap);
        var IT = tW.get(TT);
        if (IT.has(oT)) return IT.get(oT);
        var iT = function() {
          TT.apply(void 0, arguments), oT.apply(void 0, arguments)
        };
        return IT.set(oT, iT), iT
      },
      pW = function(TT, oT, IT) {
        var kT = TT.scale,
          WT = TT.type,
          XT = TT.layout,
          BT = TT.axisType;
        if ("auto" === kT) return "radial" === XT && "radiusAxis" === BT ? {
          scale: zT.d(),
          realScaleType: "band"
        } : "radial" === XT && "angleAxis" === BT ? {
          scale: yo(),
          realScaleType: "linear"
        } : "category" === WT && oT && (oT.indexOf("LineChart") >= 0 || oT.indexOf("AreaChart") >= 0 || oT.indexOf("ComposedChart") >= 0 && !IT) ? {
          scale: zT.e(),
          realScaleType: "point"
        } : "category" === WT ? {
          scale: zT.d(),
          realScaleType: "band"
        } : {
          scale: yo(),
          realScaleType: "linear"
        };
        if (ak()(kT)) {
          var FT = "scale".concat(lk()(kT));
          return {
            scale: (iT[FT] || zT.e)(),
            realScaleType: iT[FT] ? FT : "point"
          }
        }
        return Jk()(kT) ? {
          scale: kT
        } : {
          scale: zT.e(),
          realScaleType: "point"
        }
      },
      bW = 1e-4,
      yW = function(TT) {
        var oT = TT.domain();
        if (oT && !(oT.length <= 2)) {
          var IT = oT.length,
            iT = TT.range(),
            zT = Math.min(iT[0], iT[1]) - bW,
            kT = Math.max(iT[0], iT[1]) + bW,
            WT = TT(oT[0]),
            XT = TT(oT[IT - 1]);
          (WT < zT || WT > kT || XT < zT || XT > kT) && TT.domain([oT[0], oT[IT - 1]])
        }
      },
      NW = function(TT, oT) {
        if (!TT) return null;
        for (var IT = 0, iT = TT.length; IT < iT; IT++)
          if (TT[IT].item === oT) return TT[IT].position;
        return null
      },
      PW = function(TT, oT) {
        if (!oT || 2 !== oT.length || !(0, wW.C)(oT[0]) || !(0, wW.C)(oT[1])) return TT;
        var IT = Math.min(oT[0], oT[1]),
          iT = Math.max(oT[0], oT[1]),
          zT = [TT[0], TT[1]];
        return (!(0, wW.C)(TT[0]) || TT[0] < IT) && (zT[0] = IT), (!(0, wW.C)(TT[1]) || TT[1] > iT) && (zT[1] = iT), zT[0] > iT && (zT[0] = iT), zT[1] < IT && (zT[1] = IT), zT
      },
      dW = {
        sign: function(TT) {
          var oT = TT.length;
          if (!(oT <= 0))
            for (var IT = 0, iT = TT[0].length; IT < iT; ++IT)
              for (var zT = 0, kT = 0, WT = 0; WT < oT; ++WT) {
                var XT = qk()(TT[WT][IT][1]) ? TT[WT][IT][0] : TT[WT][IT][1];
                XT >= 0 ? (TT[WT][IT][0] = zT, TT[WT][IT][1] = zT + XT, zT = TT[WT][IT][1]) : (TT[WT][IT][0] = kT, TT[WT][IT][1] = kT + XT, kT = TT[WT][IT][1])
              }
        },
        expand: function(TT, oT) {
          if ((iT = TT.length) > 0) {
            for (var IT, iT, zT, kT = 0, WT = TT[0].length; kT < WT; ++kT) {
              for (zT = IT = 0; IT < iT; ++IT) zT += TT[IT][kT][1] || 0;
              if (zT)
                for (IT = 0; IT < iT; ++IT) TT[IT][kT][1] /= zT
            }
            Ak(TT, oT)
          }
        },
        none: Ak,
        silhouette: function(TT, oT) {
          if ((IT = TT.length) > 0) {
            for (var IT, iT = 0, zT = TT[oT[0]], kT = zT.length; iT < kT; ++iT) {
              for (var WT = 0, XT = 0; WT < IT; ++WT) XT += TT[WT][iT][1] || 0;
              zT[iT][1] += zT[iT][0] = -XT / 2
            }
            Ak(TT, oT)
          }
        },
        wiggle: function(TT, oT) {
          if ((zT = TT.length) > 0 && (iT = (IT = TT[oT[0]]).length) > 0) {
            for (var IT, iT, zT, kT = 0, WT = 1; WT < iT; ++WT) {
              for (var XT = 0, BT = 0, FT = 0; XT < zT; ++XT) {
                for (var ST = TT[oT[XT]], DT = ST[WT][1] || 0, LT = (DT - (ST[WT - 1][1] || 0)) / 2, xT = 0; xT < XT; ++xT) {
                  var cT = TT[oT[xT]];
                  LT += (cT[WT][1] || 0) - (cT[WT - 1][1] || 0)
                }
                BT += DT, FT += LT * DT
              }
              IT[WT - 1][1] += IT[WT - 1][0] = kT, BT && (kT -= FT / BT)
            }
            IT[WT - 1][1] += IT[WT - 1][0] = kT, Ak(TT, oT)
          }
        },
        positive: function(TT) {
          var oT = TT.length;
          if (!(oT <= 0))
            for (var IT = 0, iT = TT[0].length; IT < iT; ++IT)
              for (var zT = 0, kT = 0; kT < oT; ++kT) {
                var WT = qk()(TT[kT][IT][1]) ? TT[kT][IT][0] : TT[kT][IT][1];
                WT >= 0 ? (TT[kT][IT][0] = zT, TT[kT][IT][1] = zT + WT, zT = TT[kT][IT][1]) : (TT[kT][IT][0] = 0, TT[kT][IT][1] = 0)
              }
        }
      },
      VW = function(TT, oT, IT) {
        var iT = oT.map((function(TT) {
            return TT.props.dataKey
          })),
          zT = dW[IT],
          kT = function() {
            var TT = (0, hk.b)([]),
              oT = wk,
              IT = Ak,
              iT = mk;

            function zT(zT) {
              var kT, WT, XT = Array.from(TT.apply(this, arguments), ek),
                BT = XT.length,
                FT = -1;
              for (const TT of zT)
                for (kT = 0, ++FT; kT < BT; ++kT)(XT[kT][FT] = [0, +iT(TT, XT[kT].key, FT, zT)]).data = TT;
              for (kT = 0, WT = (0, gk.d)(oT(XT)); kT < BT; ++kT) XT[WT[kT]].index = kT;
              return IT(XT, WT), XT
            }
            return zT.keys = function(oT) {
              return arguments.length ? (TT = "function" === typeof oT ? oT : (0, hk.b)(Array.from(oT)), zT) : TT
            }, zT.value = function(TT) {
              return arguments.length ? (iT = "function" === typeof TT ? TT : (0, hk.b)(+TT), zT) : iT
            }, zT.order = function(TT) {
              return arguments.length ? (oT = null == TT ? wk : "function" === typeof TT ? TT : (0, hk.b)(Array.from(TT)), zT) : oT
            }, zT.offset = function(TT) {
              return arguments.length ? (IT = null == TT ? Ak : TT, zT) : IT
            }, zT
          }().keys(iT).value((function(TT, oT) {
            return +jW(TT, oT, 0)
          })).order(wk).offset(zT);
        return kT(TT)
      },
      TX = function(TT, oT, IT, iT, zT, kT) {
        if (!TT) return null;
        var WT = (kT ? oT.reverse() : oT).reduce((function(TT, oT) {
          var zT, kT = null !== (zT = oT.type) && void 0 !== zT && zT.defaultProps ? fW(fW({}, oT.type.defaultProps), oT.props) : oT.props,
            WT = kT.stackId;
          if (kT.hide) return TT;
          var XT = kT[IT],
            BT = TT[XT] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, wW.y)(WT)) {
            var FT = BT.stackGroups[WT] || {
              numericAxisId: IT,
              cateAxisId: iT,
              items: []
            };
            FT.items.push(oT), BT.hasStack = !0, BT.stackGroups[WT] = FT
          } else BT.stackGroups[(0, wW.K)("_stackId_")] = {
            numericAxisId: IT,
            cateAxisId: iT,
            items: [oT]
          };
          return fW(fW({}, TT), {}, CW({}, XT, BT))
        }), {});
        return Object.keys(WT).reduce((function(oT, kT) {
          var XT = WT[kT];
          if (XT.hasStack) {
            XT.stackGroups = Object.keys(XT.stackGroups).reduce((function(oT, kT) {
              var WT = XT.stackGroups[kT];
              return fW(fW({}, oT), {}, CW({}, kT, {
                numericAxisId: IT,
                cateAxisId: iT,
                items: WT.items,
                stackedData: VW(TT, WT.items, zT)
              }))
            }), {})
          }
          return fW(fW({}, oT), {}, CW({}, kT, XT))
        }), {})
      },
      oX = function(TT, oT) {
        var IT = oT.realScaleType,
          iT = oT.type,
          zT = oT.tickCount,
          kT = oT.originalDomain,
          WT = oT.allowDecimals,
          XT = IT || oT.scale;
        if ("auto" !== XT && "linear" !== XT) return null;
        if (zT && "number" === iT && kT && ("auto" === kT[0] || "auto" === kT[1])) {
          var BT = TT.domain();
          if (!BT.length) return null;
          var FT = AW(BT, zT, WT);
          return TT.domain([Ek()(FT), uk()(FT)]), {
            niceTicks: FT
          }
        }
        if (zT && "number" === iT) {
          var ST = TT.domain();
          return {
            niceTicks: gW(ST, zT, WT)
          }
        }
        return null
      };

    function IX(TT) {
      var oT = TT.axis,
        IT = TT.ticks,
        iT = TT.bandSize,
        zT = TT.entry,
        kT = TT.index,
        WT = TT.dataKey;
      if ("category" === oT.type) {
        if (!oT.allowDuplicatedCategory && oT.dataKey && !Ck()(zT[oT.dataKey])) {
          var XT = (0, wW.i)(IT, "value", zT[oT.dataKey]);
          if (XT) return XT.coordinate + iT / 2
        }
        return IT[kT] ? IT[kT].coordinate + iT / 2 : null
      }
      var BT = jW(zT, Ck()(WT) ? oT.dataKey : WT);
      return Ck()(BT) ? null : oT.scale(BT)
    }
    var iX = function(TT) {
        var oT = TT.axis,
          IT = TT.ticks,
          iT = TT.offset,
          zT = TT.bandSize,
          kT = TT.entry,
          WT = TT.index;
        if ("category" === oT.type) return IT[WT] ? IT[WT].coordinate + iT : null;
        var XT = jW(kT, oT.dataKey, oT.domain[WT]);
        return Ck()(XT) ? null : oT.scale(XT) - zT / 2 + iT
      },
      zX = function(TT) {
        var oT = TT.numericAxis,
          IT = oT.scale.domain();
        if ("number" === oT.type) {
          var iT = Math.min(IT[0], IT[1]),
            zT = Math.max(IT[0], IT[1]);
          return iT <= 0 && zT >= 0 ? 0 : zT < 0 ? zT : iT
        }
        return IT[0]
      },
      kX = function(TT, oT) {
        var IT, iT = (null !== (IT = TT.type) && void 0 !== IT && IT.defaultProps ? fW(fW({}, TT.type.defaultProps), TT.props) : TT.props).stackId;
        if ((0, wW.y)(iT)) {
          var zT = oT[iT];
          if (zT) {
            var kT = zT.items.indexOf(TT);
            return kT >= 0 ? zT.stackedData[kT] : null
          }
        }
        return null
      },
      WX = function(TT, oT, IT) {
        return Object.keys(TT).reduce((function(iT, zT) {
          var kT = TT[zT].stackedData.reduce((function(TT, iT) {
            var zT = iT.slice(oT, IT + 1).reduce((function(TT, oT) {
              return [Ek()(oT.concat([TT[0]]).filter(wW.C)), uk()(oT.concat([TT[1]]).filter(wW.C))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(TT[0], zT[0]), Math.max(TT[1], zT[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(kT[0], iT[0]), Math.max(kT[1], iT[1])]
        }), [1 / 0, -1 / 0]).map((function(TT) {
          return TT === 1 / 0 || TT === -1 / 0 ? 0 : TT
        }))
      },
      XX = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      BX = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      FX = function(TT, oT, IT) {
        if (Jk()(TT)) return TT(oT, IT);
        if (!Array.isArray(TT)) return oT;
        var iT = [];
        if ((0, wW.C)(TT[0])) iT[0] = IT ? TT[0] : Math.min(TT[0], oT[0]);
        else if (XX.test(TT[0])) {
          var zT = +XX.exec(TT[0])[1];
          iT[0] = oT[0] - zT
        } else Jk()(TT[0]) ? iT[0] = TT[0](oT[0]) : iT[0] = oT[0];
        if ((0, wW.C)(TT[1])) iT[1] = IT ? TT[1] : Math.max(TT[1], oT[1]);
        else if (BX.test(TT[1])) {
          var kT = +BX.exec(TT[1])[1];
          iT[1] = oT[1] + kT
        } else Jk()(TT[1]) ? iT[1] = TT[1](oT[1]) : iT[1] = oT[1];
        return iT
      },
      SX = function(TT, oT, IT) {
        if (TT && TT.scale && TT.scale.bandwidth) {
          var iT = TT.scale.bandwidth();
          if (!IT || iT > 0) return iT
        }
        if (TT && oT && oT.length >= 2) {
          for (var zT = pk()(oT, (function(TT) {
              return TT.coordinate
            })), kT = 1 / 0, WT = 1, XT = zT.length; WT < XT; WT++) {
            var BT = zT[WT],
              FT = zT[WT - 1];
            kT = Math.min((BT.coordinate || 0) - (FT.coordinate || 0), kT)
          }
          return kT === 1 / 0 ? 0 : kT
        }
        return IT ? void 0 : 0
      },
      DX = function(TT, oT, IT) {
        return TT && TT.length ? tk()(TT, Qk()(IT, "type.defaultProps.domain")) ? oT : TT : oT
      },
      LX = function(TT, oT) {
        var IT = TT.type.defaultProps ? fW(fW({}, TT.type.defaultProps), TT.props) : TT.props,
          iT = IT.dataKey,
          zT = IT.name,
          kT = IT.unit,
          WT = IT.formatter,
          XT = IT.tooltipType,
          BT = IT.chartType,
          FT = IT.hide;
        return fW(fW({}, (0, mW.d)(TT, !1)), {}, {
          dataKey: iT,
          unit: kT,
          formatter: WT,
          name: zT || iT,
          color: aW(TT),
          value: jW(oT, iT),
          type: XT,
          payload: oT,
          chartType: BT,
          hide: FT
        })
      }
  },
  5616: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => LT,
      h: () => DT
    });
    var iT = IT(5464);

    function zT(TT) {
      return zT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, zT(TT)
    }

    function kT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function WT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? kT(Object(IT), !0).forEach((function(oT) {
          XT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : kT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function XT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != zT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != zT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == zT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }
    var BT = {
        widthCache: {},
        cacheCount: 0
      },
      FT = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      ST = "recharts_measurement_span";
    var DT = function(TT) {
        var oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === TT || null === TT || iT.b.isSsr) return {
          width: 0,
          height: 0
        };
        var IT = function(TT) {
            var oT = WT({}, TT);
            return Object.keys(oT).forEach((function(TT) {
              oT[TT] || delete oT[TT]
            })), oT
          }(oT),
          zT = JSON.stringify({
            text: TT,
            copyStyle: IT
          });
        if (BT.widthCache[zT]) return BT.widthCache[zT];
        try {
          var kT = document.getElementById(ST);
          kT || ((kT = document.createElement("span")).setAttribute("id", ST), kT.setAttribute("aria-hidden", "true"), document.body.appendChild(kT));
          var XT = WT(WT({}, FT), IT);
          Object.assign(kT.style, XT), kT.textContent = "".concat(TT);
          var DT = kT.getBoundingClientRect(),
            LT = {
              width: DT.width,
              height: DT.height
            };
          return BT.widthCache[zT] = LT, ++BT.cacheCount > 2e3 && (BT.cacheCount = 0, BT.widthCache = {}), LT
        } catch (xT) {
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
  4606: (TT, oT, IT) => {
    IT.d(oT, {
      C: () => KT,
      F: () => cT,
      G: () => xT,
      K: () => gT,
      e: () => vT,
      i: () => RT,
      j: () => wT,
      n: () => uT,
      r: () => hT,
      s: () => mT,
      t: () => eT,
      v: () => MT,
      y: () => rT
    });
    var iT = IT(4611),
      zT = IT.n(iT),
      kT = IT(4625),
      WT = IT.n(kT),
      XT = IT(4640),
      BT = IT.n(XT),
      FT = IT(4634),
      ST = IT.n(FT),
      DT = IT(4908),
      LT = IT.n(DT),
      xT = function(TT) {
        return 0 === TT ? 0 : TT > 0 ? 1 : -1
      },
      cT = function(TT) {
        return zT()(TT) && TT.indexOf("%") === TT.length - 1
      },
      KT = function(TT) {
        return ST()(TT) && !WT()(TT)
      },
      MT = function(TT) {
        return LT()(TT)
      },
      rT = function(TT) {
        return KT(TT) || zT()(TT)
      },
      AT = 0,
      gT = function(TT) {
        var oT = ++AT;
        return "".concat(TT || "").concat(oT)
      },
      hT = function(TT, oT) {
        var IT, iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!KT(TT) && !zT()(TT)) return iT;
        if (cT(TT)) {
          var XT = TT.indexOf("%");
          IT = oT * parseFloat(TT.slice(0, XT)) / 100
        } else IT = +TT;
        return WT()(IT) && (IT = iT), kT && IT > oT && (IT = oT), IT
      },
      wT = function(TT) {
        if (!TT) return null;
        var oT = Object.keys(TT);
        return oT && oT.length ? TT[oT[0]] : null
      },
      mT = function(TT) {
        if (!Array.isArray(TT)) return !1;
        for (var oT = TT.length, IT = {}, iT = 0; iT < oT; iT++) {
          if (IT[TT[iT]]) return !0;
          IT[TT[iT]] = !0
        }
        return !1
      },
      eT = function(TT, oT) {
        return KT(TT) && KT(oT) ? function(IT) {
          return TT + IT * (oT - TT)
        } : function() {
          return oT
        }
      };

    function RT(TT, oT, IT) {
      return TT && TT.length ? TT.find((function(TT) {
        return TT && ("function" === typeof oT ? oT(TT) : BT()(TT, oT)) === IT
      })) : null
    }
    var uT = function(TT) {
        if (!TT || !TT.length) return null;
        for (var oT = TT.length, IT = 0, iT = 0, zT = 0, kT = 0, WT = 1 / 0, XT = -1 / 0, BT = 0, FT = 0, ST = 0; ST < oT; ST++) IT += BT = TT[ST].cx || 0, iT += FT = TT[ST].cy || 0, zT += BT * FT, kT += BT * BT, WT = Math.min(WT, BT), XT = Math.max(XT, BT);
        var DT = oT * kT !== IT * IT ? (oT * zT - IT * iT) / (oT * kT - IT * IT) : 0;
        return {
          xmin: WT,
          xmax: XT,
          a: DT,
          b: (iT - DT * IT) / oT
        }
      },
      vT = function(TT, oT) {
        return KT(TT) && KT(oT) ? TT - oT : zT()(TT) && zT()(oT) ? TT.localeCompare(oT) : TT instanceof Date && oT instanceof Date ? TT.getTime() - oT.getTime() : String(TT).localeCompare(String(oT))
      }
  },
  5464: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    var iT = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(TT) {
        return iT[TT]
      },
      set: function(TT, oT) {
        if ("string" === typeof TT) iT[TT] = oT;
        else {
          var IT = Object.keys(TT);
          IT && IT.length && IT.forEach((function(oT) {
            iT[oT] = TT[oT]
          }))
        }
      }
    }
  },
  5717: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    var iT = function(TT, oT) {
      var IT = TT.alwaysShow,
        iT = TT.ifOverflow;
      return IT && (iT = "extendDomain"), iT === oT
    }
  },
  4911: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    var iT = function(TT, oT) {
      for (var IT = arguments.length, iT = new Array(IT > 2 ? IT - 2 : 0), zT = 2; zT < IT; zT++) iT[zT - 2] = arguments[zT]
    }
  },
  5712: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      d: () => LT,
      e: () => FT
    });
    IT(4908), IT(46), IT(4728);

    function iT(TT) {
      return iT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, iT(TT)
    }

    function zT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function kT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? zT(Object(IT), !0).forEach((function(oT) {
          WT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : zT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function WT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != iT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var zT = IT.call(TT, oT || "default");
            if ("object" != iT(zT)) return zT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == iT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }
    var XT = Math.PI / 180,
      BT = function(TT) {
        return 180 * TT / Math.PI
      },
      FT = function(TT, oT, IT, iT) {
        return {
          x: TT + Math.cos(-XT * iT) * IT,
          y: oT + Math.sin(-XT * iT) * IT
        }
      },
      ST = function(TT, oT) {
        var IT = TT.x,
          iT = TT.y,
          zT = oT.cx,
          kT = oT.cy,
          WT = function(TT, oT) {
            var IT = TT.x,
              iT = TT.y,
              zT = oT.x,
              kT = oT.y;
            return Math.sqrt(Math.pow(IT - zT, 2) + Math.pow(iT - kT, 2))
          }({
            x: IT,
            y: iT
          }, {
            x: zT,
            y: kT
          });
        if (WT <= 0) return {
          radius: WT
        };
        var XT = (IT - zT) / WT,
          FT = Math.acos(XT);
        return iT > kT && (FT = 2 * Math.PI - FT), {
          radius: WT,
          angle: BT(FT),
          angleInRadian: FT
        }
      },
      DT = function(TT, oT) {
        var IT = oT.startAngle,
          iT = oT.endAngle,
          zT = Math.floor(IT / 360),
          kT = Math.floor(iT / 360);
        return TT + 360 * Math.min(zT, kT)
      },
      LT = function(TT, oT) {
        var IT = TT.x,
          iT = TT.y,
          zT = ST({
            x: IT,
            y: iT
          }, oT),
          WT = zT.radius,
          XT = zT.angle,
          BT = oT.innerRadius,
          FT = oT.outerRadius;
        if (WT < BT || WT > FT) return !1;
        if (0 === WT) return !0;
        var LT, xT = function(TT) {
            var oT = TT.startAngle,
              IT = TT.endAngle,
              iT = Math.floor(oT / 360),
              zT = Math.floor(IT / 360),
              kT = Math.min(iT, zT);
            return {
              startAngle: oT - 360 * kT,
              endAngle: IT - 360 * kT
            }
          }(oT),
          cT = xT.startAngle,
          KT = xT.endAngle,
          MT = XT;
        if (cT <= KT) {
          for (; MT > KT;) MT -= 360;
          for (; MT < cT;) MT += 360;
          LT = MT >= cT && MT <= KT
        } else {
          for (; MT > cT;) MT -= 360;
          for (; MT < KT;) MT += 360;
          LT = MT >= KT && MT <= cT
        }
        return LT ? kT(kT({}, oT), {}, {
          radius: WT,
          angle: DT(MT, oT)
        }) : null
      }
  },
  4918: (TT, oT, IT) => {
    IT.d(oT, {
      D: () => CT,
      d: () => aT,
      e: () => ET,
      i: () => fT,
      j: () => eT,
      n: () => HT,
      r: () => UT,
      t: () => YT,
      w: () => nT,
      z: () => OT
    });
    var iT = IT(4640),
      zT = IT.n(iT),
      kT = IT(4908),
      WT = IT.n(kT),
      XT = IT(4611),
      BT = IT.n(XT),
      FT = IT(4728),
      ST = IT.n(FT),
      DT = IT(4548),
      LT = IT.n(DT),
      xT = IT(46),
      cT = IT(4926),
      KT = IT(4606),
      MT = IT(4937),
      rT = IT(4945),
      AT = ["children"],
      gT = ["children"];

    function hT(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT = {};
        for (var iT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, iT)) {
            if (oT.indexOf(iT) >= 0) continue;
            IT[iT] = TT[iT]
          } return IT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }

    function wT(TT) {
      return wT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, wT(TT)
    }
    var mT = {
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
      RT = null,
      uT = null,
      vT = function TT(oT) {
        if (oT === RT && Array.isArray(uT)) return uT;
        var IT = [];
        return xT.Children.forEach(oT, (function(oT) {
          WT()(oT) || ((0, cT.isFragment)(oT) ? IT = IT.concat(TT(oT.props.children)) : IT.push(oT))
        })), uT = IT, RT = oT, IT
      };

    function ET(TT, oT) {
      var IT = [],
        iT = [];
      return iT = Array.isArray(oT) ? oT.map((function(TT) {
        return eT(TT)
      })) : [eT(oT)], vT(TT).forEach((function(TT) {
        var oT = zT()(TT, "type.displayName") || zT()(TT, "type.name"); - 1 !== iT.indexOf(oT) && IT.push(TT)
      })), IT
    }

    function fT(TT, oT) {
      var IT = ET(TT, oT);
      return IT && IT[0]
    }
    var CT = function(TT) {
        if (!TT || !TT.props) return !1;
        var oT = TT.props,
          IT = oT.width,
          iT = oT.height;
        return !(!(0, KT.C)(IT) || IT <= 0 || !(0, KT.C)(iT) || iT <= 0)
      },
      jT = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      JT = function(TT) {
        return TT && TT.type && BT()(TT.type) && jT.indexOf(TT.type) >= 0
      },
      UT = function(TT) {
        return TT && "object" === wT(TT) && "clipDot" in TT
      },
      aT = function(TT, oT, IT) {
        if (!TT || "function" === typeof TT || "boolean" === typeof TT) return null;
        var iT = TT;
        if ((0, xT.isValidElement)(TT) && (iT = TT.props), !LT()(iT)) return null;
        var zT = {};
        return Object.keys(iT).forEach((function(TT) {
          var kT;
          (function(TT, oT, IT, iT) {
            var zT, kT = null !== (zT = null === rT.f || void 0 === rT.f ? void 0 : rT.f[iT]) && void 0 !== zT ? zT : [];
            return oT.startsWith("data-") || !ST()(TT) && (iT && kT.includes(oT) || rT.g.includes(oT)) || IT && rT.b.includes(oT)
          })(null === (kT = iT) || void 0 === kT ? void 0 : kT[TT], TT, oT, IT) && (zT[TT] = iT[TT])
        })), zT
      },
      YT = function TT(oT, IT) {
        if (oT === IT) return !0;
        var iT = xT.Children.count(oT);
        if (iT !== xT.Children.count(IT)) return !1;
        if (0 === iT) return !0;
        if (1 === iT) return QT(Array.isArray(oT) ? oT[0] : oT, Array.isArray(IT) ? IT[0] : IT);
        for (var zT = 0; zT < iT; zT++) {
          var kT = oT[zT],
            WT = IT[zT];
          if (Array.isArray(kT) || Array.isArray(WT)) {
            if (!TT(kT, WT)) return !1
          } else if (!QT(kT, WT)) return !1
        }
        return !0
      },
      QT = function(TT, oT) {
        if (WT()(TT) && WT()(oT)) return !0;
        if (!WT()(TT) && !WT()(oT)) {
          var IT = TT.props || {},
            iT = IT.children,
            zT = hT(IT, AT),
            kT = oT.props || {},
            XT = kT.children,
            BT = hT(kT, gT);
          return iT && XT ? (0, MT.c)(zT, BT) && YT(iT, XT) : !iT && !XT && (0, MT.c)(zT, BT)
        }
        return !1
      },
      OT = function(TT, oT) {
        var IT = [],
          iT = {};
        return vT(TT).forEach((function(TT, zT) {
          if (JT(TT)) IT.push(TT);
          else if (TT) {
            var kT = eT(TT.type),
              WT = oT[kT] || {},
              XT = WT.handler,
              BT = WT.once;
            if (XT && (!BT || !iT[kT])) {
              var FT = XT(TT, kT, zT);
              IT.push(FT), iT[kT] = !0
            }
          }
        })), IT
      },
      HT = function(TT) {
        var oT = TT && TT.type;
        return oT && mT[oT] ? mT[oT] : null
      },
      nT = function(TT, oT) {
        return vT(oT).indexOf(TT)
      }
  },
  4937: (TT, oT, IT) => {
    function iT(TT, oT) {
      for (var IT in TT)
        if ({}.hasOwnProperty.call(TT, IT) && (!{}.hasOwnProperty.call(oT, IT) || TT[IT] !== oT[IT])) return !1;
      for (var iT in oT)
        if ({}.hasOwnProperty.call(oT, iT) && !{}.hasOwnProperty.call(TT, iT)) return !1;
      return !0
    }
    IT.d(oT, {
      c: () => iT
    })
  },
  5691: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => ST
    });
    var iT = IT(5527),
      zT = IT(5619),
      kT = IT(4918);

    function WT(TT) {
      return WT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, WT(TT)
    }

    function XT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function BT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? XT(Object(IT), !0).forEach((function(oT) {
          FT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : XT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function FT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != WT(TT) || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != WT(iT)) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == WT(oT) ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }
    var ST = function(TT) {
      var oT = TT.children,
        IT = TT.formattedGraphicalItems,
        WT = TT.legendWidth,
        XT = TT.legendContent,
        FT = (0, kT.i)(oT, iT.d);
      if (!FT) return null;
      var ST, DT = iT.d.defaultProps,
        LT = void 0 !== DT ? BT(BT({}, DT), FT.props) : {};
      return ST = FT.props && FT.props.payload ? FT.props && FT.props.payload : "children" === XT ? (IT || []).reduce((function(TT, oT) {
        var IT = oT.item,
          iT = oT.props,
          zT = iT.sectors || iT.data || [];
        return TT.concat(zT.map((function(TT) {
          return {
            type: FT.props.iconType || IT.props.legendType,
            value: TT.name,
            color: TT.fill,
            payload: TT
          }
        })))
      }), []) : (IT || []).map((function(TT) {
        var oT = TT.item,
          IT = oT.type.defaultProps,
          iT = void 0 !== IT ? BT(BT({}, IT), oT.props) : {},
          kT = iT.dataKey,
          WT = iT.name,
          XT = iT.legendType;
        return {
          inactive: iT.hide,
          dataKey: kT,
          type: LT.iconType || XT || "square",
          color: (0, zT.M)(oT),
          value: WT || kT,
          payload: iT
        }
      })), BT(BT(BT({}, LT), iT.d.getWithHeight(FT, WT)), {}, {
        payload: ST,
        item: FT
      })
    }
  },
  5473: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => XT
    });
    var iT = IT(5475),
      zT = IT.n(iT),
      kT = IT(4728),
      WT = IT.n(kT);

    function XT(TT, oT, IT) {
      return !0 === oT ? zT()(TT, IT) : WT()(oT) ? zT()(TT, oT) : TT
    }
  },
  4945: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => ST,
      f: () => FT,
      g: () => XT,
      k: () => DT,
      m: () => LT
    });
    var iT = IT(46),
      zT = IT(4548),
      kT = IT.n(zT);

    function WT(TT) {
      return WT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, WT(TT)
    }
    var XT = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "hx", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      BT = ["points", "pathLength"],
      FT = {
        svg: ["viewBox", "children"],
        polygon: BT,
        polyline: BT
      },
      ST = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      DT = function(TT, oT) {
        if (!TT || "function" === typeof TT || "boolean" === typeof TT) return null;
        var IT = TT;
        if ((0, iT.isValidElement)(TT) && (IT = TT.props), !kT()(IT)) return null;
        var zT = {};
        return Object.keys(IT).forEach((function(TT) {
          ST.includes(TT) && (zT[TT] = oT || function(oT) {
            return IT[TT](IT, oT)
          })
        })), zT
      },
      LT = function(TT, oT, IT) {
        if (!kT()(TT) || "object" !== WT(TT)) return null;
        var iT = null;
        return Object.keys(TT).forEach((function(zT) {
          var kT = TT[zT];
          ST.includes(zT) && "function" === typeof kT && (iT || (iT = {}), iT[zT] = function(TT, oT, IT) {
            return function(iT) {
              return TT(oT, IT, iT), null
            }
          }(kT, oT, IT))
        })), iT
      }
  },
  4933: (TT, oT) => {
    var IT, iT = Symbol.for("react.element"),
      zT = Symbol.for("react.portal"),
      kT = Symbol.for("react.fragment"),
      WT = Symbol.for("react.strict_mode"),
      XT = Symbol.for("react.profiler"),
      BT = Symbol.for("react.provider"),
      FT = Symbol.for("react.context"),
      ST = Symbol.for("react.server_context"),
      DT = Symbol.for("react.forward_ref"),
      LT = Symbol.for("react.suspense"),
      xT = Symbol.for("react.suspense_list"),
      cT = Symbol.for("react.memo"),
      KT = Symbol.for("react.lazy"),
      MT = Symbol.for("react.offscreen");

    function rT(TT) {
      if ("object" === typeof TT && null !== TT) {
        var oT = TT.$$typeof;
        switch (oT) {
          case iT:
            switch (TT = TT.type) {
              case kT:
              case XT:
              case WT:
              case LT:
              case xT:
                return TT;
              default:
                switch (TT = TT && TT.$$typeof) {
                  case ST:
                  case FT:
                  case DT:
                  case KT:
                  case cT:
                  case BT:
                    return TT;
                  default:
                    return oT
                }
            }
          case zT:
            return oT
        }
      }
    }
    IT = Symbol.for("react.module.reference"), oT.isFragment = function(TT) {
      return rT(TT) === kT
    }
  },
  4926: (TT, oT, IT) => {
    TT.exports = IT(4933)
  },
  4536: (TT, oT, IT) => {
    function iT(TT) {
      var oT, IT, zT = "";
      if ("string" == typeof TT || "number" == typeof TT) zT += TT;
      else if ("object" == typeof TT)
        if (Array.isArray(TT)) {
          var kT = TT.length;
          for (oT = 0; oT < kT; oT++) TT[oT] && (IT = iT(TT[oT])) && (zT && (zT += " "), zT += IT)
        } else
          for (IT in TT) TT[IT] && (zT && (zT += " "), zT += IT);
      return zT
    }
    IT.d(oT, {
      c: () => zT
    });
    const zT = function() {
      for (var TT, oT, IT = 0, zT = "", kT = arguments.length; IT < kT; IT++)(TT = arguments[IT]) && (oT = iT(TT)) && (zT && (zT += " "), zT += oT);
      return zT
    }
  },
  5624: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      e: () => XT
    });
    var iT = IT(5626),
      zT = IT(5632);

    function kT() {
      var TT, oT, IT = (0, zT.d)().unknown(void 0),
        WT = IT.domain,
        XT = IT.range,
        BT = 0,
        FT = 1,
        ST = !1,
        DT = 0,
        LT = 0,
        xT = .5;

      function cT() {
        var IT = WT().length,
          iT = FT < BT,
          zT = iT ? FT : BT,
          kT = iT ? BT : FT;
        TT = (kT - zT) / Math.max(1, IT - DT + 2 * LT), ST && (TT = Math.floor(TT)), zT += (kT - zT - TT * (IT - DT)) * xT, oT = TT * (1 - DT), ST && (zT = Math.round(zT), oT = Math.round(oT));
        var cT = function(TT, oT, IT) {
          TT = +TT, oT = +oT, IT = (zT = arguments.length) < 2 ? (oT = TT, TT = 0, 1) : zT < 3 ? 1 : +IT;
          for (var iT = -1, zT = 0 | Math.max(0, Math.ceil((oT - TT) / IT)), kT = new Array(zT); ++iT < zT;) kT[iT] = TT + iT * IT;
          return kT
        }(IT).map((function(oT) {
          return zT + TT * oT
        }));
        return XT(iT ? cT.reverse() : cT)
      }
      return delete IT.unknown, IT.domain = function(TT) {
        return arguments.length ? (WT(TT), cT()) : WT()
      }, IT.range = function(TT) {
        return arguments.length ? ([BT, FT] = TT, BT = +BT, FT = +FT, cT()) : [BT, FT]
      }, IT.rangeRound = function(TT) {
        return [BT, FT] = TT, BT = +BT, FT = +FT, ST = !0, cT()
      }, IT.bandwidth = function() {
        return oT
      }, IT.step = function() {
        return TT
      }, IT.round = function(TT) {
        return arguments.length ? (ST = !!TT, cT()) : ST
      }, IT.padding = function(TT) {
        return arguments.length ? (DT = Math.min(1, LT = +TT), cT()) : DT
      }, IT.paddingInner = function(TT) {
        return arguments.length ? (DT = Math.min(1, TT), cT()) : DT
      }, IT.paddingOuter = function(TT) {
        return arguments.length ? (LT = +TT, cT()) : LT
      }, IT.align = function(TT) {
        return arguments.length ? (xT = Math.max(0, Math.min(1, TT)), cT()) : xT
      }, IT.copy = function() {
        return kT(WT(), [BT, FT]).round(ST).paddingInner(DT).paddingOuter(LT).align(xT)
      }, iT.f.apply(cT(), arguments)
    }

    function WT(TT) {
      var oT = TT.copy;
      return TT.padding = TT.paddingOuter, delete TT.paddingInner, delete TT.paddingOuter, TT.copy = function() {
        return WT(oT())
      }, TT
    }

    function XT() {
      return WT(kT.apply(null, arguments).paddingInner(1))
    }
  },
  5626: (TT, oT, IT) => {
    function iT(TT, oT) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(TT);
          break;
        default:
          this.range(oT).domain(TT)
      }
      return this
    }

    function zT(TT, oT) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof TT ? this.interpolator(TT) : this.range(TT);
          break;
        default:
          this.domain(TT), "function" === typeof oT ? this.interpolator(oT) : this.range(oT)
      }
      return this
    }
    IT.d(oT, {
      e: () => zT,
      f: () => iT
    })
  },
  5632: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => ST,
      f: () => FT
    });
    class iT extends Map {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XT;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: oT
            }
          }), null != TT)
          for (const [IT, iT] of TT) this.set(IT, iT)
      }
      get(TT) {
        return super.get(zT(this, TT))
      }
      has(TT) {
        return super.has(zT(this, TT))
      }
      set(TT, oT) {
        return super.set(kT(this, TT), oT)
      }
      delete(TT) {
        return super.delete(WT(this, TT))
      }
    }
    Set;

    function zT(TT, oT) {
      let {
        _intern: IT,
        _key: iT
      } = TT;
      const zT = iT(oT);
      return IT.has(zT) ? IT.get(zT) : oT
    }

    function kT(TT, oT) {
      let {
        _intern: IT,
        _key: iT
      } = TT;
      const zT = iT(oT);
      return IT.has(zT) ? IT.get(zT) : (IT.set(zT, oT), oT)
    }

    function WT(TT, oT) {
      let {
        _intern: IT,
        _key: iT
      } = TT;
      const zT = iT(oT);
      return IT.has(zT) && (oT = IT.get(zT), IT.delete(zT)), oT
    }

    function XT(TT) {
      return null !== TT && "object" === typeof TT ? TT.valueOf() : TT
    }
    var BT = IT(5626);
    const FT = Symbol("implicit");

    function ST() {
      var TT = new iT,
        oT = [],
        IT = [],
        zT = FT;

      function kT(iT) {
        let kT = TT.get(iT);
        if (void 0 === kT) {
          if (zT !== FT) return zT;
          TT.set(iT, kT = oT.push(iT) - 1)
        }
        return IT[kT % IT.length]
      }
      return kT.domain = function(IT) {
        if (!arguments.length) return oT.slice();
        oT = [], TT = new iT;
        for (const iT of IT) TT.has(iT) || TT.set(iT, oT.push(iT) - 1);
        return kT
      }, kT.range = function(TT) {
        return arguments.length ? (IT = Array.from(TT), kT) : IT.slice()
      }, kT.unknown = function(TT) {
        return arguments.length ? (zT = TT, kT) : zT
      }, kT.copy = function() {
        return ST(oT, IT).unknown(zT)
      }, BT.f.apply(kT, arguments), kT
    }
  },
  5696: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    Array.prototype.slice;

    function iT(TT) {
      return "object" === typeof TT && "length" in TT ? TT : Array.from(TT)
    }
  },
  5580: (TT, oT, IT) => {
    function iT(TT) {
      return function() {
        return TT
      }
    }
    IT.d(oT, {
      b: () => iT
    })
  },
  5585: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => FT
    });
    const iT = Math.PI,
      zT = 2 * iT,
      kT = 1e-6,
      WT = zT - kT;

    function XT(TT) {
      this._ += TT[0];
      for (let oT = 1, IT = TT.length; oT < IT; ++oT) this._ += arguments[oT] + TT[oT]
    }
    class BT {
      constructor(TT) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == TT ? XT : function(TT) {
          let oT = Math.floor(TT);
          if (!(oT >= 0)) throw new Error(`invalid digits: ${TT}`);
          if (oT > 15) return XT;
          const IT = 10 ** oT;
          return function(TT) {
            this._ += TT[0];
            for (let oT = 1, iT = TT.length; oT < iT; ++oT) this._ += Math.round(arguments[oT] * IT) / IT + TT[oT]
          }
        }(TT)
      }
      moveTo(TT, oT) {
        this._append`M${this._x0=this._x1=+TT},${this._y0=this._y1=+oT}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(TT, oT) {
        this._append`L${this._x1=+TT},${this._y1=+oT}`
      }
      quadraticCurveTo(TT, oT, IT, iT) {
        this._append`Q${+TT},${+oT},${this._x1=+IT},${this._y1=+iT}`
      }
      bezierCurveTo(TT, oT, IT, iT, zT, kT) {
        this._append`C${+TT},${+oT},${+IT},${+iT},${this._x1=+zT},${this._y1=+kT}`
      }
      arcTo(TT, oT, IT, zT, WT) {
        if (TT = +TT, oT = +oT, IT = +IT, zT = +zT, (WT = +WT) < 0) throw new Error(`negative radius: ${WT}`);
        let XT = this._x1,
          BT = this._y1,
          FT = IT - TT,
          ST = zT - oT,
          DT = XT - TT,
          LT = BT - oT,
          xT = DT * DT + LT * LT;
        if (null === this._x1) this._append`M${this._x1=TT},${this._y1=oT}`;
        else if (xT > kT)
          if (Math.abs(LT * FT - ST * DT) > kT && WT) {
            let cT = IT - XT,
              KT = zT - BT,
              MT = FT * FT + ST * ST,
              rT = cT * cT + KT * KT,
              AT = Math.sqrt(MT),
              gT = Math.sqrt(xT),
              hT = WT * Math.tan((iT - Math.acos((MT + xT - rT) / (2 * AT * gT))) / 2),
              wT = hT / gT,
              mT = hT / AT;
            Math.abs(wT - 1) > kT && this._append`L${TT+wT*DT},${oT+wT*LT}`, this._append`A${WT},${WT},0,0,${+(LT*cT>DT*KT)},${this._x1=TT+mT*FT},${this._y1=oT+mT*ST}`
          } else this._append`L${this._x1=TT},${this._y1=oT}`;
        else;
      }
      arc(TT, oT, IT, XT, BT, FT) {
        if (TT = +TT, oT = +oT, FT = !!FT, (IT = +IT) < 0) throw new Error(`negative radius: ${IT}`);
        let ST = IT * Math.cos(XT),
          DT = IT * Math.sin(XT),
          LT = TT + ST,
          xT = oT + DT,
          cT = 1 ^ FT,
          KT = FT ? XT - BT : BT - XT;
        null === this._x1 ? this._append`M${LT},${xT}` : (Math.abs(this._x1 - LT) > kT || Math.abs(this._y1 - xT) > kT) && this._append`L${LT},${xT}`, IT && (KT < 0 && (KT = KT % zT + zT), KT > WT ? this._append`A${IT},${IT},0,1,${cT},${TT-ST},${oT-DT}A${IT},${IT},0,1,${cT},${this._x1=LT},${this._y1=xT}` : KT > kT && this._append`A${IT},${IT},0,${+(KT>=iT)},${cT},${this._x1=TT+IT*Math.cos(BT)},${this._y1=oT+IT*Math.sin(BT)}`)
      }
      rect(TT, oT, IT, iT) {
        this._append`M${this._x0=this._x1=+TT},${this._y0=this._y1=+oT}h${IT=+IT}v${+iT}h${-IT}Z`
      }
      toString() {
        return this._
      }
    }

    function FT(TT) {
      let oT = 3;
      return TT.digits = function(IT) {
        if (!arguments.length) return oT;
        if (null == IT) oT = null;
        else {
          const TT = Math.floor(IT);
          if (!(TT >= 0)) throw new RangeError(`invalid digits: ${IT}`);
          oT = TT
        }
        return TT
      }, () => new BT(oT)
    }
    BT.prototype
  },
  5442: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT
    });
    var iT = !0,
      zT = "Invariant failed";

    function kT(TT, oT) {
      if (!TT) {
        if (iT) throw new Error(zT);
        var IT = "function" === typeof oT ? oT() : oT,
          kT = IT ? "".concat(zT, ": ").concat(IT) : zT;
        throw new Error(kT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);