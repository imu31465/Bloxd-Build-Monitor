/*! For license information please see tz47m9.117.8dd6798b.chunk.js.LICENSE.txt */
export const id = 117;
export const ids = [117];
export const modules = {
  6242: function(DD, zD, wD) {
    var pD;
    ! function() {
      var sD, KD = 1e9,
        rD = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        LD = !0,
        cD = "[DecimalError] ",
        gD = cD + "Invalid argument: ",
        RD = cD + "Exponent out of range: ",
        AD = Math.floor,
        UD = Math.pow,
        fD = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        ID = 1e7,
        BD = 9007199254740991,
        GD = AD(1286742750677284.5),
        hD = {};

      function nD(DD, zD) {
        var wD, pD, sD, KD, rD, cD, gD, RD, AD = DD.constructor,
          UD = AD.precision;
        if (!DD.s || !zD.s) return zD.s || (zD = new AD(DD)), LD ? xD(zD, UD) : zD;
        if (gD = DD.d, RD = zD.d, rD = DD.e, sD = zD.e, gD = gD.slice(), KD = rD - sD) {
          for (KD < 0 ? (pD = gD, KD = -KD, cD = RD.length) : (pD = RD, sD = rD, cD = gD.length), KD > (cD = (rD = Math.ceil(UD / 7)) > cD ? rD + 1 : cD + 1) && (KD = cD, pD.length = 1), pD.reverse(); KD--;) pD.push(0);
          pD.reverse()
        }
        for ((cD = gD.length) - (KD = RD.length) < 0 && (KD = cD, pD = RD, RD = gD, gD = pD), wD = 0; KD;) wD = (gD[--KD] = gD[KD] + RD[KD] + wD) / ID | 0, gD[KD] %= ID;
        for (wD && (gD.unshift(wD), ++sD), cD = gD.length; 0 == gD[--cD];) gD.pop();
        return zD.d = gD, zD.e = sD, LD ? xD(zD, UD) : zD
      }

      function MD(DD, zD, wD) {
        if (DD !== ~~DD || DD < zD || DD > wD) throw Error(gD + DD)
      }

      function OD(DD) {
        var zD, wD, pD, sD = DD.length - 1,
          KD = "",
          rD = DD[0];
        if (sD > 0) {
          for (KD += rD, zD = 1; zD < sD; zD++)(wD = 7 - (pD = DD[zD] + "").length) && (KD += VD(wD)), KD += pD;
          (wD = 7 - (pD = (rD = DD[zD]) + "").length) && (KD += VD(wD))
        } else if (0 === rD) return "0";
        for (; rD % 10 === 0;) rD /= 10;
        return KD + rD
      }
      hD.absoluteValue = hD.abs = function() {
        var DD = new this.constructor(this);
        return DD.s && (DD.s = 1), DD
      }, hD.comparedTo = hD.cmp = function(DD) {
        var zD, wD, pD, sD, KD = this;
        if (DD = new KD.constructor(DD), KD.s !== DD.s) return KD.s || -DD.s;
        if (KD.e !== DD.e) return KD.e > DD.e ^ KD.s < 0 ? 1 : -1;
        for (zD = 0, wD = (pD = KD.d.length) < (sD = DD.d.length) ? pD : sD; zD < wD; ++zD)
          if (KD.d[zD] !== DD.d[zD]) return KD.d[zD] > DD.d[zD] ^ KD.s < 0 ? 1 : -1;
        return pD === sD ? 0 : pD > sD ^ KD.s < 0 ? 1 : -1
      }, hD.decimalPlaces = hD.dp = function() {
        var DD = this,
          zD = DD.d.length - 1,
          wD = 7 * (zD - DD.e);
        if (zD = DD.d[zD])
          for (; zD % 10 == 0; zD /= 10) wD--;
        return wD < 0 ? 0 : wD
      }, hD.dividedBy = hD.div = function(DD) {
        return JD(this, new this.constructor(DD))
      }, hD.dividedToIntegerBy = hD.idiv = function(DD) {
        var zD = this.constructor;
        return xD(JD(this, new zD(DD), 0, 1), zD.precision)
      }, hD.equals = hD.eq = function(DD) {
        return !this.cmp(DD)
      }, hD.exponent = function() {
        return QD(this)
      }, hD.greaterThan = hD.gt = function(DD) {
        return this.cmp(DD) > 0
      }, hD.greaterThanOrEqualTo = hD.gte = function(DD) {
        return this.cmp(DD) >= 0
      }, hD.isInteger = hD.isint = function() {
        return this.e > this.d.length - 2
      }, hD.isNegative = hD.isneg = function() {
        return this.s < 0
      }, hD.isPositive = hD.ispos = function() {
        return this.s > 0
      }, hD.isZero = function() {
        return 0 === this.s
      }, hD.lessThan = hD.lt = function(DD) {
        return this.cmp(DD) < 0
      }, hD.lessThanOrEqualTo = hD.lte = function(DD) {
        return this.cmp(DD) < 1
      }, hD.logarithm = hD.log = function(DD) {
        var zD, wD = this,
          pD = wD.constructor,
          KD = pD.precision,
          rD = KD + 5;
        if (void 0 === DD) DD = new pD(10);
        else if ((DD = new pD(DD)).s < 1 || DD.eq(sD)) throw Error(cD + "NaN");
        if (wD.s < 1) throw Error(cD + (wD.s ? "NaN" : "-Infinity"));
        return wD.eq(sD) ? new pD(0) : (LD = !1, zD = JD(PD(wD, rD), PD(DD, rD), rD), LD = !0, xD(zD, KD))
      }, hD.minus = hD.sub = function(DD) {
        var zD = this;
        return DD = new zD.constructor(DD), zD.s == DD.s ? TD(zD, DD) : nD(zD, (DD.s = -DD.s, DD))
      }, hD.modulo = hD.mod = function(DD) {
        var zD, wD = this,
          pD = wD.constructor,
          sD = pD.precision;
        if (!(DD = new pD(DD)).s) throw Error(cD + "NaN");
        return wD.s ? (LD = !1, zD = JD(wD, DD, 0, 1).times(DD), LD = !0, wD.minus(zD)) : xD(new pD(wD), sD)
      }, hD.naturalExponential = hD.exp = function() {
        return ED(this)
      }, hD.naturalLogarithm = hD.ln = function() {
        return PD(this)
      }, hD.negated = hD.neg = function() {
        var DD = new this.constructor(this);
        return DD.s = -DD.s || 0, DD
      }, hD.plus = hD.add = function(DD) {
        var zD = this;
        return DD = new zD.constructor(DD), zD.s == DD.s ? nD(zD, DD) : TD(zD, (DD.s = -DD.s, DD))
      }, hD.precision = hD.sd = function(DD) {
        var zD, wD, pD, sD = this;
        if (void 0 !== DD && DD !== !!DD && 1 !== DD && 0 !== DD) throw Error(gD + DD);
        if (zD = QD(sD) + 1, wD = 7 * (pD = sD.d.length - 1) + 1, pD = sD.d[pD]) {
          for (; pD % 10 == 0; pD /= 10) wD--;
          for (pD = sD.d[0]; pD >= 10; pD /= 10) wD++
        }
        return DD && zD > wD ? zD : wD
      }, hD.squareRoot = hD.sqrt = function() {
        var DD, zD, wD, pD, sD, KD, rD, gD = this,
          RD = gD.constructor;
        if (gD.s < 1) {
          if (!gD.s) return new RD(0);
          throw Error(cD + "NaN")
        }
        for (DD = QD(gD), LD = !1, 0 == (sD = Math.sqrt(+gD)) || sD == 1 / 0 ? (((zD = OD(gD.d)).length + DD) % 2 == 0 && (zD += "0"), sD = Math.sqrt(zD), DD = AD((DD + 1) / 2) - (DD < 0 || DD % 2), pD = new RD(zD = sD == 1 / 0 ? "1e" + DD : (zD = sD.toExponential()).slice(0, zD.indexOf("e") + 1) + DD)) : pD = new RD(sD.toString()), sD = rD = (wD = RD.precision) + 3;;)
          if (pD = (KD = pD).plus(JD(gD, KD, rD + 2)).times(.5), OD(KD.d).slice(0, rD) === (zD = OD(pD.d)).slice(0, rD)) {
            if (zD = zD.slice(rD - 3, rD + 1), sD == rD && "4999" == zD) {
              if (xD(KD, wD + 1, 0), KD.times(KD).eq(gD)) {
                pD = KD;
                break
              }
            } else if ("9999" != zD) break;
            rD += 4
          } return LD = !0, xD(pD, wD)
      }, hD.times = hD.mul = function(DD) {
        var zD, wD, pD, sD, KD, rD, cD, gD, RD, AD = this,
          UD = AD.constructor,
          fD = AD.d,
          BD = (DD = new UD(DD)).d;
        if (!AD.s || !DD.s) return new UD(0);
        for (DD.s *= AD.s, wD = AD.e + DD.e, (gD = fD.length) < (RD = BD.length) && (KD = fD, fD = BD, BD = KD, rD = gD, gD = RD, RD = rD), KD = [], pD = rD = gD + RD; pD--;) KD.push(0);
        for (pD = RD; --pD >= 0;) {
          for (zD = 0, sD = gD + pD; sD > pD;) cD = KD[sD] + BD[pD] * fD[sD - pD - 1] + zD, KD[sD--] = cD % ID | 0, zD = cD / ID | 0;
          KD[sD] = (KD[sD] + zD) % ID | 0
        }
        for (; !KD[--rD];) KD.pop();
        return zD ? ++wD : KD.shift(), DD.d = KD, DD.e = wD, LD ? xD(DD, UD.precision) : DD
      }, hD.toDecimalPlaces = hD.todp = function(DD, zD) {
        var wD = this,
          pD = wD.constructor;
        return wD = new pD(wD), void 0 === DD ? wD : (MD(DD, 0, KD), void 0 === zD ? zD = pD.rounding : MD(zD, 0, 8), xD(wD, DD + QD(wD) + 1, zD))
      }, hD.toExponential = function(DD, zD) {
        var wD, pD = this,
          sD = pD.constructor;
        return void 0 === DD ? wD = bD(pD, !0) : (MD(DD, 0, KD), void 0 === zD ? zD = sD.rounding : MD(zD, 0, 8), wD = bD(pD = xD(new sD(pD), DD + 1, zD), !0, DD + 1)), wD
      }, hD.toFixed = function(DD, zD) {
        var wD, pD, sD = this,
          rD = sD.constructor;
        return void 0 === DD ? bD(sD) : (MD(DD, 0, KD), void 0 === zD ? zD = rD.rounding : MD(zD, 0, 8), wD = bD((pD = xD(new rD(sD), DD + QD(sD) + 1, zD)).abs(), !1, DD + QD(pD) + 1), sD.isneg() && !sD.isZero() ? "-" + wD : wD)
      }, hD.toInteger = hD.toint = function() {
        var DD = this,
          zD = DD.constructor;
        return xD(new zD(DD), QD(DD) + 1, zD.rounding)
      }, hD.toNumber = function() {
        return +this
      }, hD.toPower = hD.pow = function(DD) {
        var zD, wD, pD, KD, rD, gD, RD = this,
          UD = RD.constructor,
          fD = +(DD = new UD(DD));
        if (!DD.s) return new UD(sD);
        if (!(RD = new UD(RD)).s) {
          if (DD.s < 1) throw Error(cD + "Infinity");
          return RD
        }
        if (RD.eq(sD)) return RD;
        if (pD = UD.precision, DD.eq(sD)) return xD(RD, pD);
        if (gD = (zD = DD.e) >= (wD = DD.d.length - 1), rD = RD.s, gD) {
          if ((wD = fD < 0 ? -fD : fD) <= BD) {
            for (KD = new UD(sD), zD = Math.ceil(pD / 7 + 4), LD = !1; wD % 2 && jD((KD = KD.times(RD)).d, zD), 0 !== (wD = AD(wD / 2));) jD((RD = RD.times(RD)).d, zD);
            return LD = !0, DD.s < 0 ? new UD(sD).div(KD) : xD(KD, pD)
          }
        } else if (rD < 0) throw Error(cD + "NaN");
        return rD = rD < 0 && 1 & DD.d[Math.max(zD, wD)] ? -1 : 1, RD.s = 1, LD = !1, KD = DD.times(PD(RD, pD + 12)), LD = !0, (KD = ED(KD)).s = rD, KD
      }, hD.toPrecision = function(DD, zD) {
        var wD, pD, sD = this,
          rD = sD.constructor;
        return void 0 === DD ? pD = bD(sD, (wD = QD(sD)) <= rD.toExpNeg || wD >= rD.toExpPos) : (MD(DD, 1, KD), void 0 === zD ? zD = rD.rounding : MD(zD, 0, 8), pD = bD(sD = xD(new rD(sD), DD, zD), DD <= (wD = QD(sD)) || wD <= rD.toExpNeg, DD)), pD
      }, hD.toSignificantDigits = hD.tosd = function(DD, zD) {
        var wD = this.constructor;
        return void 0 === DD ? (DD = wD.precision, zD = wD.rounding) : (MD(DD, 1, KD), void 0 === zD ? zD = wD.rounding : MD(zD, 0, 8)), xD(new wD(this), DD, zD)
      }, hD.toString = hD.valueOf = hD.val = hD.toJSON = function() {
        var DD = this,
          zD = QD(DD),
          wD = DD.constructor;
        return bD(DD, zD <= wD.toExpNeg || zD >= wD.toExpPos)
      };
      var JD = function() {
        function DD(DD, zD) {
          var wD, pD = 0,
            sD = DD.length;
          for (DD = DD.slice(); sD--;) wD = DD[sD] * zD + pD, DD[sD] = wD % ID | 0, pD = wD / ID | 0;
          return pD && DD.unshift(pD), DD
        }

        function zD(DD, zD, wD, pD) {
          var sD, KD;
          if (wD != pD) KD = wD > pD ? 1 : -1;
          else
            for (sD = KD = 0; sD < wD; sD++)
              if (DD[sD] != zD[sD]) {
                KD = DD[sD] > zD[sD] ? 1 : -1;
                break
              } return KD
        }

        function wD(DD, zD, wD) {
          for (var pD = 0; wD--;) DD[wD] -= pD, pD = DD[wD] < zD[wD] ? 1 : 0, DD[wD] = pD * ID + DD[wD] - zD[wD];
          for (; !DD[0] && DD.length > 1;) DD.shift()
        }
        return function(pD, sD, KD, rD) {
          var LD, gD, RD, AD, UD, fD, BD, GD, hD, nD, MD, OD, JD, ED, XD, VD, PD, CD, TD = pD.constructor,
            bD = pD.s == sD.s ? 1 : -1,
            jD = pD.d,
            dD = sD.d;
          if (!pD.s) return new TD(pD);
          if (!sD.s) throw Error(cD + "Division by zero");
          for (gD = pD.e - sD.e, PD = dD.length, XD = jD.length, GD = (BD = new TD(bD)).d = [], RD = 0; dD[RD] == (jD[RD] || 0);) ++RD;
          if (dD[RD] > (jD[RD] || 0) && --gD, (OD = null == KD ? KD = TD.precision : rD ? KD + (QD(pD) - QD(sD)) + 1 : KD) < 0) return new TD(0);
          if (OD = OD / 7 + 2 | 0, RD = 0, 1 == PD)
            for (AD = 0, dD = dD[0], OD++;
              (RD < XD || AD) && OD--; RD++) JD = AD * ID + (jD[RD] || 0), GD[RD] = JD / dD | 0, AD = JD % dD | 0;
          else {
            for ((AD = ID / (dD[0] + 1) | 0) > 1 && (dD = DD(dD, AD), jD = DD(jD, AD), PD = dD.length, XD = jD.length), ED = PD, nD = (hD = jD.slice(0, PD)).length; nD < PD;) hD[nD++] = 0;
            (CD = dD.slice()).unshift(0), VD = dD[0], dD[1] >= ID / 2 && ++VD;
            do {
              AD = 0, (LD = zD(dD, hD, PD, nD)) < 0 ? (MD = hD[0], PD != nD && (MD = MD * ID + (hD[1] || 0)), (AD = MD / VD | 0) > 1 ? (AD >= ID && (AD = ID - 1), 1 == (LD = zD(UD = DD(dD, AD), hD, fD = UD.length, nD = hD.length)) && (AD--, wD(UD, PD < fD ? CD : dD, fD))) : (0 == AD && (LD = AD = 1), UD = dD.slice()), (fD = UD.length) < nD && UD.unshift(0), wD(hD, UD, nD), -1 == LD && (LD = zD(dD, hD, PD, nD = hD.length)) < 1 && (AD++, wD(hD, PD < nD ? CD : dD, nD)), nD = hD.length) : 0 === LD && (AD++, hD = [0]), GD[RD++] = AD, LD && hD[0] ? hD[nD++] = jD[ED] || 0 : (hD = [jD[ED]], nD = 1)
            } while ((ED++ < XD || void 0 !== hD[0]) && OD--)
          }
          return GD[0] || GD.shift(), BD.e = gD, xD(BD, rD ? KD + QD(BD) + 1 : KD)
        }
      }();

      function ED(DD, zD) {
        var wD, pD, KD, rD, cD, gD = 0,
          AD = 0,
          fD = DD.constructor,
          ID = fD.precision;
        if (QD(DD) > 16) throw Error(RD + QD(DD));
        if (!DD.s) return new fD(sD);
        for (null == zD ? (LD = !1, cD = ID) : cD = zD, rD = new fD(.03125); DD.abs().gte(.1);) DD = DD.times(rD), AD += 5;
        for (cD += Math.log(UD(2, AD)) / Math.LN10 * 2 + 5 | 0, wD = pD = KD = new fD(sD), fD.precision = cD;;) {
          if (pD = xD(pD.times(DD), cD), wD = wD.times(++gD), OD((rD = KD.plus(JD(pD, wD, cD))).d).slice(0, cD) === OD(KD.d).slice(0, cD)) {
            for (; AD--;) KD = xD(KD.times(KD), cD);
            return fD.precision = ID, null == zD ? (LD = !0, xD(KD, ID)) : KD
          }
          KD = rD
        }
      }

      function QD(DD) {
        for (var zD = 7 * DD.e, wD = DD.d[0]; wD >= 10; wD /= 10) zD++;
        return zD
      }

      function XD(DD, zD, wD) {
        if (zD > DD.LN10.sd()) throw LD = !0, wD && (DD.precision = wD), Error(cD + "LN10 precision limit exceeded");
        return xD(new DD(DD.LN10), zD)
      }

      function VD(DD) {
        for (var zD = ""; DD--;) zD += "0";
        return zD
      }

      function PD(DD, zD) {
        var wD, pD, KD, rD, gD, RD, AD, UD, fD, ID = 1,
          BD = DD,
          GD = BD.d,
          hD = BD.constructor,
          nD = hD.precision;
        if (BD.s < 1) throw Error(cD + (BD.s ? "NaN" : "-Infinity"));
        if (BD.eq(sD)) return new hD(0);
        if (null == zD ? (LD = !1, UD = nD) : UD = zD, BD.eq(10)) return null == zD && (LD = !0), XD(hD, UD);
        if (UD += 10, hD.precision = UD, pD = (wD = OD(GD)).charAt(0), rD = QD(BD), !(Math.abs(rD) < 15e14)) return AD = XD(hD, UD + 2, nD).times(rD + ""), BD = PD(new hD(pD + "." + wD.slice(1)), UD - 10).plus(AD), hD.precision = nD, null == zD ? (LD = !0, xD(BD, nD)) : BD;
        for (; pD < 7 && 1 != pD || 1 == pD && wD.charAt(1) > 3;) pD = (wD = OD((BD = BD.times(DD)).d)).charAt(0), ID++;
        for (rD = QD(BD), pD > 1 ? (BD = new hD("0." + wD), rD++) : BD = new hD(pD + "." + wD.slice(1)), RD = gD = BD = JD(BD.minus(sD), BD.plus(sD), UD), fD = xD(BD.times(BD), UD), KD = 3;;) {
          if (gD = xD(gD.times(fD), UD), OD((AD = RD.plus(JD(gD, new hD(KD), UD))).d).slice(0, UD) === OD(RD.d).slice(0, UD)) return RD = RD.times(2), 0 !== rD && (RD = RD.plus(XD(hD, UD + 2, nD).times(rD + ""))), RD = JD(RD, new hD(ID), UD), hD.precision = nD, null == zD ? (LD = !0, xD(RD, nD)) : RD;
          RD = AD, KD += 2
        }
      }

      function CD(DD, zD) {
        var wD, pD, sD;
        for ((wD = zD.indexOf(".")) > -1 && (zD = zD.replace(".", "")), (pD = zD.search(/e/i)) > 0 ? (wD < 0 && (wD = pD), wD += +zD.slice(pD + 1), zD = zD.substring(0, pD)) : wD < 0 && (wD = zD.length), pD = 0; 48 === zD.charCodeAt(pD);) ++pD;
        for (sD = zD.length; 48 === zD.charCodeAt(sD - 1);) --sD;
        if (zD = zD.slice(pD, sD)) {
          if (sD -= pD, wD = wD - pD - 1, DD.e = AD(wD / 7), DD.d = [], pD = (wD + 1) % 7, wD < 0 && (pD += 7), pD < sD) {
            for (pD && DD.d.push(+zD.slice(0, pD)), sD -= 7; pD < sD;) DD.d.push(+zD.slice(pD, pD += 7));
            pD = 7 - (zD = zD.slice(pD)).length
          } else pD -= sD;
          for (; pD--;) zD += "0";
          if (DD.d.push(+zD), LD && (DD.e > GD || DD.e < -GD)) throw Error(RD + wD)
        } else DD.s = 0, DD.e = 0, DD.d = [0];
        return DD
      }

      function xD(DD, zD, wD) {
        var pD, sD, KD, rD, cD, gD, fD, BD, hD = DD.d;
        for (rD = 1, KD = hD[0]; KD >= 10; KD /= 10) rD++;
        if ((pD = zD - rD) < 0) pD += 7, sD = zD, fD = hD[BD = 0];
        else {
          if ((BD = Math.ceil((pD + 1) / 7)) >= (KD = hD.length)) return DD;
          for (fD = KD = hD[BD], rD = 1; KD >= 10; KD /= 10) rD++;
          sD = (pD %= 7) - 7 + rD
        }
        if (void 0 !== wD && (cD = fD / (KD = UD(10, rD - sD - 1)) % 10 | 0, gD = zD < 0 || void 0 !== hD[BD + 1] || fD % KD, gD = wD < 4 ? (cD || gD) && (0 == wD || wD == (DD.s < 0 ? 3 : 2)) : cD > 5 || 5 == cD && (4 == wD || gD || 6 == wD && (pD > 0 ? sD > 0 ? fD / UD(10, rD - sD) : 0 : hD[BD - 1]) % 10 & 1 || wD == (DD.s < 0 ? 8 : 7))), zD < 1 || !hD[0]) return gD ? (KD = QD(DD), hD.length = 1, zD = zD - KD - 1, hD[0] = UD(10, (7 - zD % 7) % 7), DD.e = AD(-zD / 7) || 0) : (hD.length = 1, hD[0] = DD.e = DD.s = 0), DD;
        if (0 == pD ? (hD.length = BD, KD = 1, BD--) : (hD.length = BD + 1, KD = UD(10, 7 - pD), hD[BD] = sD > 0 ? (fD / UD(10, rD - sD) % UD(10, sD) | 0) * KD : 0), gD)
          for (;;) {
            if (0 == BD) {
              (hD[0] += KD) == ID && (hD[0] = 1, ++DD.e);
              break
            }
            if (hD[BD] += KD, hD[BD] != ID) break;
            hD[BD--] = 0, KD = 1
          }
        for (pD = hD.length; 0 === hD[--pD];) hD.pop();
        if (LD && (DD.e > GD || DD.e < -GD)) throw Error(RD + QD(DD));
        return DD
      }

      function TD(DD, zD) {
        var wD, pD, sD, KD, rD, cD, gD, RD, AD, UD, fD = DD.constructor,
          BD = fD.precision;
        if (!DD.s || !zD.s) return zD.s ? zD.s = -zD.s : zD = new fD(DD), LD ? xD(zD, BD) : zD;
        if (gD = DD.d, UD = zD.d, pD = zD.e, RD = DD.e, gD = gD.slice(), rD = RD - pD) {
          for ((AD = rD < 0) ? (wD = gD, rD = -rD, cD = UD.length) : (wD = UD, pD = RD, cD = gD.length), rD > (sD = Math.max(Math.ceil(BD / 7), cD) + 2) && (rD = sD, wD.length = 1), wD.reverse(), sD = rD; sD--;) wD.push(0);
          wD.reverse()
        } else {
          for ((AD = (sD = gD.length) < (cD = UD.length)) && (cD = sD), sD = 0; sD < cD; sD++)
            if (gD[sD] != UD[sD]) {
              AD = gD[sD] < UD[sD];
              break
            } rD = 0
        }
        for (AD && (wD = gD, gD = UD, UD = wD, zD.s = -zD.s), cD = gD.length, sD = UD.length - cD; sD > 0; --sD) gD[cD++] = 0;
        for (sD = UD.length; sD > rD;) {
          if (gD[--sD] < UD[sD]) {
            for (KD = sD; KD && 0 === gD[--KD];) gD[KD] = ID - 1;
            --gD[KD], gD[sD] += ID
          }
          gD[sD] -= UD[sD]
        }
        for (; 0 === gD[--cD];) gD.pop();
        for (; 0 === gD[0]; gD.shift()) --pD;
        return gD[0] ? (zD.d = gD, zD.e = pD, LD ? xD(zD, BD) : zD) : new fD(0)
      }

      function bD(DD, zD, wD) {
        var pD, sD = QD(DD),
          KD = OD(DD.d),
          rD = KD.length;
        return zD ? (wD && (pD = wD - rD) > 0 ? KD = KD.charAt(0) + "." + KD.slice(1) + VD(pD) : rD > 1 && (KD = KD.charAt(0) + "." + KD.slice(1)), KD = KD + (sD < 0 ? "e" : "e+") + sD) : sD < 0 ? (KD = "0." + VD(-sD - 1) + KD, wD && (pD = wD - rD) > 0 && (KD += VD(pD))) : sD >= rD ? (KD += VD(sD + 1 - rD), wD && (pD = wD - sD - 1) > 0 && (KD = KD + "." + VD(pD))) : ((pD = sD + 1) < rD && (KD = KD.slice(0, pD) + "." + KD.slice(pD)), wD && (pD = wD - rD) > 0 && (sD + 1 === rD && (KD += "."), KD += VD(pD))), DD.s < 0 ? "-" + KD : KD
      }

      function jD(DD, zD) {
        if (DD.length > zD) return DD.length = zD, !0
      }

      function dD(DD) {
        if (!DD || "object" !== typeof DD) throw Error(cD + "Object expected");
        var zD, wD, pD, sD = ["precision", 1, KD, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (zD = 0; zD < sD.length; zD += 3)
          if (void 0 !== (pD = DD[wD = sD[zD]])) {
            if (!(AD(pD) === pD && pD >= sD[zD + 1] && pD <= sD[zD + 2])) throw Error(gD + wD + ": " + pD);
            this[wD] = pD
          } if (void 0 !== (pD = DD[wD = "LN10"])) {
          if (pD != Math.LN10) throw Error(gD + wD + ": " + pD);
          this[wD] = new this(pD)
        }
        return this
      }
      rD = function DD(zD) {
        var wD, pD, sD;

        function KD(DD) {
          var zD = this;
          if (!(zD instanceof KD)) return new KD(DD);
          if (zD.constructor = KD, DD instanceof KD) return zD.s = DD.s, zD.e = DD.e, void(zD.d = (DD = DD.d) ? DD.slice() : DD);
          if ("number" === typeof DD) {
            if (0 * DD !== 0) throw Error(gD + DD);
            if (DD > 0) zD.s = 1;
            else {
              if (!(DD < 0)) return zD.s = 0, zD.e = 0, void(zD.d = [0]);
              DD = -DD, zD.s = -1
            }
            return DD === ~~DD && DD < 1e7 ? (zD.e = 0, void(zD.d = [DD])) : CD(zD, DD.toString())
          }
          if ("string" !== typeof DD) throw Error(gD + DD);
          if (45 === DD.charCodeAt(0) ? (DD = DD.slice(1), zD.s = -1) : zD.s = 1, !fD.test(DD)) throw Error(gD + DD);
          CD(zD, DD)
        }
        if (KD.prototype = hD, KD.ROUND_UP = 0, KD.ROUND_DOWN = 1, KD.ROUND_CEIL = 2, KD.ROUND_FLOOR = 3, KD.ROUND_HALF_UP = 4, KD.ROUND_HALF_DOWN = 5, KD.ROUND_HALF_EVEN = 6, KD.ROUND_HALF_CEIL = 7, KD.ROUND_HALF_FLOOR = 8, KD.clone = DD, KD.config = KD.set = dD, void 0 === zD && (zD = {}), zD)
          for (sD = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], wD = 0; wD < sD.length;) zD.hasOwnProperty(pD = sD[wD++]) || (zD[pD] = this[pD]);
        return KD.config(zD), KD
      }(rD), rD.default = rD.Decimal = rD, sD = new rD(1), void 0 === (pD = function() {
        return rD
      }.call(zD, wD, zD, DD)) || (DD.exports = pD)
    }()
  },
  5822: (DD, zD, wD) => {
    var pD = wD(5322)(wD(5153), "DataView");
    DD.exports = pD
  },
  5309: (DD, zD, wD) => {
    var pD = wD(5315),
      sD = wD(5358),
      KD = wD(5361),
      rD = wD(5366),
      LD = wD(5375);

    function cD(DD) {
      var zD = -1,
        wD = null == DD ? 0 : DD.length;
      for (this.clear(); ++zD < wD;) {
        var pD = DD[zD];
        this.set(pD[0], pD[1])
      }
    }
    cD.prototype.clear = pD, cD.prototype.delete = sD, cD.prototype.get = KD, cD.prototype.has = rD, cD.prototype.set = LD, DD.exports = cD
  },
  5377: (DD, zD, wD) => {
    var pD = wD(5383),
      sD = wD(5389),
      KD = wD(5408),
      rD = wD(5413),
      LD = wD(5420);

    function cD(DD) {
      var zD = -1,
        wD = null == DD ? 0 : DD.length;
      for (this.clear(); ++zD < wD;) {
        var pD = DD[zD];
        this.set(pD[0], pD[1])
      }
    }
    cD.prototype.clear = pD, cD.prototype.delete = sD, cD.prototype.get = KD, cD.prototype.has = rD, cD.prototype.set = LD, DD.exports = cD
  },
  5422: (DD, zD, wD) => {
    var pD = wD(5322)(wD(5153), "Map");
    DD.exports = pD
  },
  5298: (DD, zD, wD) => {
    var pD = wD(5306),
      sD = wD(5426),
      KD = wD(5448),
      rD = wD(5453),
      LD = wD(5455);

    function cD(DD) {
      var zD = -1,
        wD = null == DD ? 0 : DD.length;
      for (this.clear(); ++zD < wD;) {
        var pD = DD[zD];
        this.set(pD[0], pD[1])
      }
    }
    cD.prototype.clear = pD, cD.prototype.delete = sD, cD.prototype.get = KD, cD.prototype.has = rD, cD.prototype.set = LD, DD.exports = cD
  },
  5831: (DD, zD, wD) => {
    var pD = wD(5322)(wD(5153), "Promise");
    DD.exports = pD
  },
  5836: (DD, zD, wD) => {
    var pD = wD(5322)(wD(5153), "Set");
    DD.exports = pD
  },
  5662: (DD, zD, wD) => {
    var pD = wD(5298),
      sD = wD(5664),
      KD = wD(5668);

    function rD(DD) {
      var zD = -1,
        wD = null == DD ? 0 : DD.length;
      for (this.__data__ = new pD; ++zD < wD;) this.add(DD[zD])
    }
    rD.prototype.add = rD.prototype.push = sD, rD.prototype.has = KD, DD.exports = rD
  },
  5618: (DD, zD, wD) => {
    var pD = wD(5377),
      sD = wD(5624),
      KD = wD(5632),
      rD = wD(5640),
      LD = wD(5644),
      cD = wD(5647);

    function gD(DD) {
      var zD = this.__data__ = new pD(DD);
      this.size = zD.size
    }
    gD.prototype.clear = sD, gD.prototype.delete = KD, gD.prototype.get = rD, gD.prototype.has = LD, gD.prototype.set = cD, DD.exports = gD
  },
  5192: (DD, zD, wD) => {
    var pD = wD(5153).Symbol;
    DD.exports = pD
  },
  5688: (DD, zD, wD) => {
    var pD = wD(5153).Uint8Array;
    DD.exports = pD
  },
  5840: (DD, zD, wD) => {
    var pD = wD(5322)(wD(5153), "WeakMap");
    DD.exports = pD
  },
  5964: DD => {
    DD.exports = function(DD, zD, wD) {
      switch (wD.length) {
        case 0:
          return DD.call(zD);
        case 1:
          return DD.call(zD, wD[0]);
        case 2:
          return DD.call(zD, wD[0], wD[1]);
        case 3:
          return DD.call(zD, wD[0], wD[1], wD[2])
      }
      return DD.apply(zD, wD)
    }
  },
  6309: DD => {
    DD.exports = function(DD, zD) {
      for (var wD = -1, pD = null == DD ? 0 : DD.length; ++wD < pD;)
        if (!zD(DD[wD], wD, DD)) return !1;
      return !0
    }
  },
  5727: DD => {
    DD.exports = function(DD, zD) {
      for (var wD = -1, pD = null == DD ? 0 : DD.length, sD = 0, KD = []; ++wD < pD;) {
        var rD = DD[wD];
        zD(rD, wD, DD) && (KD[sD++] = rD)
      }
      return KD
    }
  },
  6028: (DD, zD, wD) => {
    var pD = wD(6034);
    DD.exports = function(DD, zD) {
      return !!(null == DD ? 0 : DD.length) && pD(DD, zD, 0) > -1
    }
  },
  6056: DD => {
    DD.exports = function(DD, zD, wD) {
      for (var pD = -1, sD = null == DD ? 0 : DD.length; ++pD < sD;)
        if (wD(zD, DD[pD])) return !0;
      return !1
    }
  },
  5742: (DD, zD, wD) => {
    var pD = wD(5751),
      sD = wD(5584),
      KD = wD(5239),
      rD = wD(5758),
      LD = wD(5555),
      cD = wD(5773),
      gD = Object.prototype.hasOwnProperty;
    DD.exports = function(DD, zD) {
      var wD = KD(DD),
        RD = !wD && sD(DD),
        AD = !wD && !RD && rD(DD),
        UD = !wD && !RD && !AD && cD(DD),
        fD = wD || RD || AD || UD,
        ID = fD ? pD(DD.length, String) : [],
        BD = ID.length;
      for (var GD in DD) !zD && !gD.call(DD, GD) || fD && ("length" == GD || AD && ("offset" == GD || "parent" == GD) || UD && ("buffer" == GD || "byteLength" == GD || "byteOffset" == GD) || LD(GD, BD)) || ID.push(GD);
      return ID
    }
  },
  5470: DD => {
    DD.exports = function(DD, zD) {
      for (var wD = -1, pD = null == DD ? 0 : DD.length, sD = Array(pD); ++wD < pD;) sD[wD] = zD(DD[wD], wD, DD);
      return sD
    }
  },
  5579: DD => {
    DD.exports = function(DD, zD) {
      for (var wD = -1, pD = zD.length, sD = DD.length; ++wD < pD;) DD[sD + wD] = zD[wD];
      return DD
    }
  },
  5675: DD => {
    DD.exports = function(DD, zD) {
      for (var wD = -1, pD = null == DD ? 0 : DD.length; ++wD < pD;)
        if (zD(DD[wD], wD, DD)) return !0;
      return !1
    }
  },
  6122: DD => {
    DD.exports = function(DD) {
      return DD.split("")
    }
  },
  5398: (DD, zD, wD) => {
    var pD = wD(5405);
    DD.exports = function(DD, zD) {
      for (var wD = DD.length; wD--;)
        if (pD(DD[wD][0], zD)) return wD;
      return -1
    }
  },
  6295: (DD, zD, wD) => {
    var pD = wD(5982);
    DD.exports = function(DD, zD, wD) {
      "__proto__" == zD && pD ? pD(DD, zD, {
        configurable: !0,
        enumerable: !0,
        value: wD,
        writable: !0
      }) : DD[zD] = wD
    }
  },
  5918: (DD, zD, wD) => {
    var pD = wD(5922),
      sD = wD(5939)(pD);
    DD.exports = sD
  },
  6316: (DD, zD, wD) => {
    var pD = wD(5918);
    DD.exports = function(DD, zD) {
      var wD = !0;
      return pD(DD, (function(DD, pD, sD) {
        return wD = !!zD(DD, pD, sD)
      })), wD
    }
  },
  6208: (DD, zD, wD) => {
    var pD = wD(5186);
    DD.exports = function(DD, zD, wD) {
      for (var sD = -1, KD = DD.length; ++sD < KD;) {
        var rD = DD[sD],
          LD = zD(rD);
        if (null != LD && (void 0 === cD ? LD === LD && !pD(LD) : wD(LD, cD))) var cD = LD,
          gD = rD
      }
      return gD
    }
  },
  6040: DD => {
    DD.exports = function(DD, zD, wD, pD) {
      for (var sD = DD.length, KD = wD + (pD ? 1 : -1); pD ? KD-- : ++KD < sD;)
        if (zD(DD[KD], KD, DD)) return KD;
      return -1
    }
  },
  5570: (DD, zD, wD) => {
    var pD = wD(5579),
      sD = wD(5581);
    DD.exports = function DD(zD, wD, KD, rD, LD) {
      var cD = -1,
        gD = zD.length;
      for (KD || (KD = sD), LD || (LD = []); ++cD < gD;) {
        var RD = zD[cD];
        wD > 0 && KD(RD) ? wD > 1 ? DD(RD, wD - 1, KD, rD, LD) : pD(LD, RD) : rD || (LD[LD.length] = RD)
      }
      return LD
    }
  },
  5929: (DD, zD, wD) => {
    var pD = wD(5936)();
    DD.exports = pD
  },
  5922: (DD, zD, wD) => {
    var pD = wD(5929),
      sD = wD(5733);
    DD.exports = function(DD, zD) {
      return DD && pD(DD, zD, sD)
    }
  },
  5259: (DD, zD, wD) => {
    var pD = wD(5265),
      sD = wD(5473);
    DD.exports = function(DD, zD) {
      for (var wD = 0, KD = (zD = pD(zD, DD)).length; null != DD && wD < KD;) DD = DD[sD(zD[wD++])];
      return wD && wD == KD ? DD : void 0
    }
  },
  5717: (DD, zD, wD) => {
    var pD = wD(5579),
      sD = wD(5239);
    DD.exports = function(DD, zD, wD) {
      var KD = zD(DD);
      return sD(DD) ? KD : pD(KD, wD(DD))
    }
  },
  5190: (DD, zD, wD) => {
    var pD = wD(5192),
      sD = wD(5201),
      KD = wD(5209),
      rD = pD ? pD.toStringTag : void 0;
    DD.exports = function(DD) {
      return null == DD ? void 0 === DD ? "[object Undefined]" : "[object Null]" : rD && rD in Object(DD) ? sD(DD) : KD(DD)
    }
  },
  6210: DD => {
    DD.exports = function(DD, zD) {
      return DD > zD
    }
  },
  5872: DD => {
    DD.exports = function(DD, zD) {
      return null != DD && zD in Object(DD)
    }
  },
  6034: (DD, zD, wD) => {
    var pD = wD(6040),
      sD = wD(6047),
      KD = wD(6054);
    DD.exports = function(DD, zD, wD) {
      return zD === zD ? KD(DD, zD, wD) : pD(DD, sD, wD)
    }
  },
  5591: (DD, zD, wD) => {
    var pD = wD(5190),
      sD = wD(5218);
    DD.exports = function(DD) {
      return sD(DD) && "[object Arguments]" == pD(DD)
    }
  },
  5654: (DD, zD, wD) => {
    var pD = wD(5658),
      sD = wD(5218);
    DD.exports = function DD(zD, wD, KD, rD, LD) {
      return zD === wD || (null == zD || null == wD || !sD(zD) && !sD(wD) ? zD !== zD && wD !== wD : pD(zD, wD, KD, rD, DD, LD))
    }
  },
  5658: (DD, zD, wD) => {
    var pD = wD(5618),
      sD = wD(5660),
      KD = wD(5680),
      rD = wD(5705),
      LD = wD(5818),
      cD = wD(5239),
      gD = wD(5758),
      RD = wD(5773),
      AD = "[object Arguments]",
      UD = "[object Array]",
      fD = "[object Object]",
      ID = Object.prototype.hasOwnProperty;
    DD.exports = function(DD, zD, wD, BD, GD, hD) {
      var nD = cD(DD),
        MD = cD(zD),
        OD = nD ? UD : LD(DD),
        JD = MD ? UD : LD(zD),
        ED = (OD = OD == AD ? fD : OD) == fD,
        QD = (JD = JD == AD ? fD : JD) == fD,
        XD = OD == JD;
      if (XD && gD(DD)) {
        if (!gD(zD)) return !1;
        nD = !0, ED = !1
      }
      if (XD && !ED) return hD || (hD = new pD), nD || RD(DD) ? sD(DD, zD, wD, BD, GD, hD) : KD(DD, zD, OD, wD, BD, GD, hD);
      if (!(1 & wD)) {
        var VD = ED && ID.call(DD, "__wrapped__"),
          PD = QD && ID.call(zD, "__wrapped__");
        if (VD || PD) {
          var CD = VD ? DD.value() : DD,
            xD = PD ? zD.value() : zD;
          return hD || (hD = new pD), GD(CD, xD, wD, BD, hD)
        }
      }
      return !!XD && (hD || (hD = new pD), rD(DD, zD, wD, BD, GD, hD))
    }
  },
  5613: (DD, zD, wD) => {
    var pD = wD(5618),
      sD = wD(5654);
    DD.exports = function(DD, zD, wD, KD) {
      var rD = wD.length,
        LD = rD,
        cD = !KD;
      if (null == DD) return !LD;
      for (DD = Object(DD); rD--;) {
        var gD = wD[rD];
        if (cD && gD[2] ? gD[1] !== DD[gD[0]] : !(gD[0] in DD)) return !1
      }
      for (; ++rD < LD;) {
        var RD = (gD = wD[rD])[0],
          AD = DD[RD],
          UD = gD[1];
        if (cD && gD[2]) {
          if (void 0 === AD && !(RD in DD)) return !1
        } else {
          var fD = new pD;
          if (KD) var ID = KD(AD, UD, RD, DD, zD, fD);
          if (!(void 0 === ID ? sD(UD, AD, 3, KD, fD) : ID)) return !1
        }
      }
      return !0
    }
  },
  6047: DD => {
    DD.exports = function(DD) {
      return DD !== DD
    }
  },
  5328: (DD, zD, wD) => {
    var pD = wD(5333),
      sD = wD(5340),
      KD = wD(5144),
      rD = wD(5346),
      LD = /^\[object .+?Constructor\]$/,
      cD = Function.prototype,
      gD = Object.prototype,
      RD = cD.toString,
      AD = gD.hasOwnProperty,
      UD = RegExp("^" + RD.call(AD).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    DD.exports = function(DD) {
      return !(!KD(DD) || sD(DD)) && (pD(DD) ? UD : LD).test(rD(DD))
    }
  },
  5779: (DD, zD, wD) => {
    var pD = wD(5190),
      sD = wD(5551),
      KD = wD(5218),
      rD = {};
    rD["[object Float32Array]"] = rD["[object Float64Array]"] = rD["[object Int8Array]"] = rD["[object Int16Array]"] = rD["[object Int32Array]"] = rD["[object Uint8Array]"] = rD["[object Uint8ClampedArray]"] = rD["[object Uint16Array]"] = rD["[object Uint32Array]"] = !0, rD["[object Arguments]"] = rD["[object Array]"] = rD["[object ArrayBuffer]"] = rD["[object Boolean]"] = rD["[object DataView]"] = rD["[object Date]"] = rD["[object Error]"] = rD["[object Function]"] = rD["[object Map]"] = rD["[object Number]"] = rD["[object Object]"] = rD["[object RegExp]"] = rD["[object Set]"] = rD["[object String]"] = rD["[object WeakMap]"] = !1, DD.exports = function(DD) {
      return KD(DD) && sD(DD.length) && !!rD[pD(DD)]
    }
  },
  5600: (DD, zD, wD) => {
    var pD = wD(5604),
      sD = wD(5865),
      KD = wD(5887),
      rD = wD(5239),
      LD = wD(5893);
    DD.exports = function(DD) {
      return "function" == typeof DD ? DD : null == DD ? KD : "object" == typeof DD ? rD(DD) ? sD(DD[0], DD[1]) : pD(DD) : LD(DD)
    }
  },
  5790: (DD, zD, wD) => {
    var pD = wD(5799),
      sD = wD(5807),
      KD = Object.prototype.hasOwnProperty;
    DD.exports = function(DD) {
      if (!pD(DD)) return sD(DD);
      var zD = [];
      for (var wD in Object(DD)) KD.call(DD, wD) && "constructor" != wD && zD.push(wD);
      return zD
    }
  },
  6217: DD => {
    DD.exports = function(DD, zD) {
      return DD < zD
    }
  },
  5913: (DD, zD, wD) => {
    var pD = wD(5918),
      sD = wD(5545);
    DD.exports = function(DD, zD) {
      var wD = -1,
        KD = sD(DD) ? Array(DD.length) : [];
      return pD(DD, (function(DD, pD, sD) {
        KD[++wD] = zD(DD, pD, sD)
      })), KD
    }
  },
  5604: (DD, zD, wD) => {
    var pD = wD(5613),
      sD = wD(5846),
      KD = wD(5863);
    DD.exports = function(DD) {
      var zD = sD(DD);
      return 1 == zD.length && zD[0][2] ? KD(zD[0][0], zD[0][1]) : function(wD) {
        return wD === DD || pD(wD, DD, zD)
      }
    }
  },
  5865: (DD, zD, wD) => {
    var pD = wD(5654),
      sD = wD(5254),
      KD = wD(5870),
      rD = wD(5272),
      LD = wD(5854),
      cD = wD(5863),
      gD = wD(5473);
    DD.exports = function(DD, zD) {
      return rD(DD) && LD(zD) ? cD(gD(DD), zD) : function(wD) {
        var rD = sD(wD, DD);
        return void 0 === rD && rD === zD ? KD(wD, DD) : pD(zD, rD, 3)
      }
    }
  },
  5596: (DD, zD, wD) => {
    var pD = wD(5470),
      sD = wD(5259),
      KD = wD(5600),
      rD = wD(5913),
      LD = wD(5941),
      cD = wD(5782),
      gD = wD(5946),
      RD = wD(5887),
      AD = wD(5239);
    DD.exports = function(DD, zD, wD) {
      zD = zD.length ? pD(zD, (function(DD) {
        return AD(DD) ? function(zD) {
          return sD(zD, 1 === DD.length ? DD[0] : DD)
        } : DD
      })) : [RD];
      var UD = -1;
      zD = pD(zD, cD(KD));
      var fD = rD(DD, (function(DD, wD, sD) {
        return {
          criteria: pD(zD, (function(zD) {
            return zD(DD)
          })),
          index: ++UD,
          value: DD
        }
      }));
      return LD(fD, (function(DD, zD) {
        return gD(DD, zD, wD)
      }))
    }
  },
  5902: DD => {
    DD.exports = function(DD) {
      return function(zD) {
        return null == zD ? void 0 : zD[DD]
      }
    }
  },
  5911: (DD, zD, wD) => {
    var pD = wD(5259);
    DD.exports = function(DD) {
      return function(zD) {
        return pD(zD, DD)
      }
    }
  },
  5534: DD => {
    var zD = Math.ceil,
      wD = Math.max;
    DD.exports = function(DD, pD, sD, KD) {
      for (var rD = -1, LD = wD(zD((pD - DD) / (sD || 1)), 0), cD = Array(LD); LD--;) cD[KD ? LD : ++rD] = DD, DD += sD;
      return cD
    }
  },
  5955: (DD, zD, wD) => {
    var pD = wD(5887),
      sD = wD(5960),
      KD = wD(5967);
    DD.exports = function(DD, zD) {
      return KD(sD(DD, zD, pD), DD + "")
    }
  },
  5974: (DD, zD, wD) => {
    var pD = wD(5976),
      sD = wD(5982),
      KD = wD(5887),
      rD = sD ? function(DD, zD) {
        return sD(DD, "toString", {
          configurable: !0,
          enumerable: !1,
          value: pD(zD),
          writable: !0
        })
      } : KD;
    DD.exports = rD
  },
  6108: DD => {
    DD.exports = function(DD, zD, wD) {
      var pD = -1,
        sD = DD.length;
      zD < 0 && (zD = -zD > sD ? 0 : sD + zD), (wD = wD > sD ? sD : wD) < 0 && (wD += sD), sD = zD > wD ? 0 : wD - zD >>> 0, zD >>>= 0;
      for (var KD = Array(sD); ++pD < sD;) KD[pD] = DD[pD + zD];
      return KD
    }
  },
  6377: (DD, zD, wD) => {
    var pD = wD(5918);
    DD.exports = function(DD, zD) {
      var wD;
      return pD(DD, (function(DD, pD, sD) {
        return !(wD = zD(DD, pD, sD))
      })), !!wD
    }
  },
  5941: DD => {
    DD.exports = function(DD, zD) {
      var wD = DD.length;
      for (DD.sort(zD); wD--;) DD[wD] = DD[wD].value;
      return DD
    }
  },
  5751: DD => {
    DD.exports = function(DD, zD) {
      for (var wD = -1, pD = Array(DD); ++wD < DD;) pD[wD] = zD(wD);
      return pD
    }
  },
  5464: (DD, zD, wD) => {
    var pD = wD(5192),
      sD = wD(5470),
      KD = wD(5239),
      rD = wD(5186),
      LD = pD ? pD.prototype : void 0,
      cD = LD ? LD.toString : void 0;
    DD.exports = function DD(zD) {
      if ("string" == typeof zD) return zD;
      if (KD(zD)) return sD(zD, DD) + "";
      if (rD(zD)) return cD ? cD.call(zD) : "";
      var wD = zD + "";
      return "0" == wD && 1 / zD == -1 / 0 ? "-0" : wD
    }
  },
  5174: (DD, zD, wD) => {
    var pD = wD(5182),
      sD = /^\s+/;
    DD.exports = function(DD) {
      return DD ? DD.slice(0, pD(DD) + 1).replace(sD, "") : DD
    }
  },
  5782: DD => {
    DD.exports = function(DD) {
      return function(zD) {
        return DD(zD)
      }
    }
  },
  6025: (DD, zD, wD) => {
    var pD = wD(5662),
      sD = wD(6028),
      KD = wD(6056),
      rD = wD(5678),
      LD = wD(6064),
      cD = wD(5697);
    DD.exports = function(DD, zD, wD) {
      var gD = -1,
        RD = sD,
        AD = DD.length,
        UD = !0,
        fD = [],
        ID = fD;
      if (wD) UD = !1, RD = KD;
      else if (AD >= 200) {
        var BD = zD ? null : LD(DD);
        if (BD) return cD(BD);
        UD = !1, RD = rD, ID = new pD
      } else ID = zD ? [] : fD;
      DD: for (; ++gD < AD;) {
        var GD = DD[gD],
          hD = zD ? zD(GD) : GD;
        if (GD = wD || 0 !== GD ? GD : 0, UD && hD === hD) {
          for (var nD = ID.length; nD--;)
            if (ID[nD] === hD) continue DD;
          zD && ID.push(hD), fD.push(GD)
        } else RD(ID, hD, wD) || (ID !== fD && ID.push(hD), fD.push(GD))
      }
      return fD
    }
  },
  5678: DD => {
    DD.exports = function(DD, zD) {
      return DD.has(zD)
    }
  },
  5265: (DD, zD, wD) => {
    var pD = wD(5239),
      sD = wD(5272),
      KD = wD(5281),
      rD = wD(5461);
    DD.exports = function(DD, zD) {
      return pD(DD) ? DD : sD(DD, zD) ? [DD] : KD(rD(DD))
    }
  },
  6102: (DD, zD, wD) => {
    var pD = wD(6108);
    DD.exports = function(DD, zD, wD) {
      var sD = DD.length;
      return wD = void 0 === wD ? sD : wD, !zD && wD >= sD ? DD : pD(DD, zD, wD)
    }
  },
  5952: (DD, zD, wD) => {
    var pD = wD(5186);
    DD.exports = function(DD, zD) {
      if (DD !== zD) {
        var wD = void 0 !== DD,
          sD = null === DD,
          KD = DD === DD,
          rD = pD(DD),
          LD = void 0 !== zD,
          cD = null === zD,
          gD = zD === zD,
          RD = pD(zD);
        if (!cD && !RD && !rD && DD > zD || rD && LD && gD && !cD && !RD || sD && LD && gD || !wD && gD || !KD) return 1;
        if (!sD && !rD && !RD && DD < zD || RD && wD && KD && !sD && !rD || cD && wD && KD || !LD && KD || !gD) return -1
      }
      return 0
    }
  },
  5946: (DD, zD, wD) => {
    var pD = wD(5952);
    DD.exports = function(DD, zD, wD) {
      for (var sD = -1, KD = DD.criteria, rD = zD.criteria, LD = KD.length, cD = wD.length; ++sD < LD;) {
        var gD = pD(KD[sD], rD[sD]);
        if (gD) return sD >= cD ? gD : gD * ("desc" == wD[sD] ? -1 : 1)
      }
      return DD.index - zD.index
    }
  },
  5344: (DD, zD, wD) => {
    var pD = wD(5153)["__core-js_shared__"];
    DD.exports = pD
  },
  5939: (DD, zD, wD) => {
    var pD = wD(5545);
    DD.exports = function(DD, zD) {
      return function(wD, sD) {
        if (null == wD) return wD;
        if (!pD(wD)) return DD(wD, sD);
        for (var KD = wD.length, rD = zD ? KD : -1, LD = Object(wD);
          (zD ? rD-- : ++rD < KD) && !1 !== sD(LD[rD], rD, LD););
        return wD
      }
    }
  },
  5936: DD => {
    DD.exports = function(DD) {
      return function(zD, wD, pD) {
        for (var sD = -1, KD = Object(zD), rD = pD(zD), LD = rD.length; LD--;) {
          var cD = rD[DD ? LD : ++sD];
          if (!1 === wD(KD[cD], cD, KD)) break
        }
        return zD
      }
    }
  },
  6095: (DD, zD, wD) => {
    var pD = wD(6102),
      sD = wD(6113),
      KD = wD(6116),
      rD = wD(5461);
    DD.exports = function(DD) {
      return function(zD) {
        zD = rD(zD);
        var wD = sD(zD) ? KD(zD) : void 0,
          LD = wD ? wD[0] : zD.charAt(0),
          cD = wD ? pD(wD, 1).join("") : zD.slice(1);
        return LD[DD]() + cD
      }
    }
  },
  6392: (DD, zD, wD) => {
    var pD = wD(5600),
      sD = wD(5545),
      KD = wD(5733);
    DD.exports = function(DD) {
      return function(zD, wD, rD) {
        var LD = Object(zD);
        if (!sD(zD)) {
          var cD = pD(wD, 3);
          zD = KD(zD), wD = function(DD) {
            return cD(LD[DD], DD, LD)
          }
        }
        var gD = DD(zD, wD, rD);
        return gD > -1 ? LD[cD ? zD[gD] : gD] : void 0
      }
    }
  },
  5528: (DD, zD, wD) => {
    var pD = wD(5534),
      sD = wD(5542),
      KD = wD(5560);
    DD.exports = function(DD) {
      return function(zD, wD, rD) {
        return rD && "number" != typeof rD && sD(zD, wD, rD) && (wD = rD = void 0), zD = KD(zD), void 0 === wD ? (wD = zD, zD = 0) : wD = KD(wD), rD = void 0 === rD ? zD < wD ? 1 : -1 : KD(rD), pD(zD, wD, rD, DD)
      }
    }
  },
  6064: (DD, zD, wD) => {
    var pD = wD(5836),
      sD = wD(6072),
      KD = wD(5697),
      rD = pD && 1 / KD(new pD([, -0]))[1] == 1 / 0 ? function(DD) {
        return new pD(DD)
      } : sD;
    DD.exports = rD
  },
  5982: (DD, zD, wD) => {
    var pD = wD(5322),
      sD = function() {
        try {
          var DD = pD(Object, "defineProperty");
          return DD({}, "", {}), DD
        } catch (zD) {}
      }();
    DD.exports = sD
  },
  5660: (DD, zD, wD) => {
    var pD = wD(5662),
      sD = wD(5675),
      KD = wD(5678);
    DD.exports = function(DD, zD, wD, rD, LD, cD) {
      var gD = 1 & wD,
        RD = DD.length,
        AD = zD.length;
      if (RD != AD && !(gD && AD > RD)) return !1;
      var UD = cD.get(DD),
        fD = cD.get(zD);
      if (UD && fD) return UD == zD && fD == DD;
      var ID = -1,
        BD = !0,
        GD = 2 & wD ? new pD : void 0;
      for (cD.set(DD, zD), cD.set(zD, DD); ++ID < RD;) {
        var hD = DD[ID],
          nD = zD[ID];
        if (rD) var MD = gD ? rD(nD, hD, ID, zD, DD, cD) : rD(hD, nD, ID, DD, zD, cD);
        if (void 0 !== MD) {
          if (MD) continue;
          BD = !1;
          break
        }
        if (GD) {
          if (!sD(zD, (function(DD, zD) {
              if (!KD(GD, zD) && (hD === DD || LD(hD, DD, wD, rD, cD))) return GD.push(zD)
            }))) {
            BD = !1;
            break
          }
        } else if (hD !== nD && !LD(hD, nD, wD, rD, cD)) {
          BD = !1;
          break
        }
      }
      return cD.delete(DD), cD.delete(zD), BD
    }
  },
  5680: (DD, zD, wD) => {
    var pD = wD(5192),
      sD = wD(5688),
      KD = wD(5405),
      rD = wD(5660),
      LD = wD(5692),
      cD = wD(5697),
      gD = pD ? pD.prototype : void 0,
      RD = gD ? gD.valueOf : void 0;
    DD.exports = function(DD, zD, wD, pD, gD, AD, UD) {
      switch (wD) {
        case "[object DataView]":
          if (DD.byteLength != zD.byteLength || DD.byteOffset != zD.byteOffset) return !1;
          DD = DD.buffer, zD = zD.buffer;
        case "[object ArrayBuffer]":
          return !(DD.byteLength != zD.byteLength || !AD(new sD(DD), new sD(zD)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return KD(+DD, +zD);
        case "[object Error]":
          return DD.name == zD.name && DD.message == zD.message;
        case "[object RegExp]":
        case "[object String]":
          return DD == zD + "";
        case "[object Map]":
          var fD = LD;
        case "[object Set]":
          var ID = 1 & pD;
          if (fD || (fD = cD), DD.size != zD.size && !ID) return !1;
          var BD = UD.get(DD);
          if (BD) return BD == zD;
          pD |= 2, UD.set(DD, zD);
          var GD = rD(fD(DD), fD(zD), pD, gD, AD, UD);
          return UD.delete(DD), GD;
        case "[object Symbol]":
          if (RD) return RD.call(DD) == RD.call(zD)
      }
      return !1
    }
  },
  5705: (DD, zD, wD) => {
    var pD = wD(5714),
      sD = Object.prototype.hasOwnProperty;
    DD.exports = function(DD, zD, wD, KD, rD, LD) {
      var cD = 1 & wD,
        gD = pD(DD),
        RD = gD.length;
      if (RD != pD(zD).length && !cD) return !1;
      for (var AD = RD; AD--;) {
        var UD = gD[AD];
        if (!(cD ? UD in zD : sD.call(zD, UD))) return !1
      }
      var fD = LD.get(DD),
        ID = LD.get(zD);
      if (fD && ID) return fD == zD && ID == DD;
      var BD = !0;
      LD.set(DD, zD), LD.set(zD, DD);
      for (var GD = cD; ++AD < RD;) {
        var hD = DD[UD = gD[AD]],
          nD = zD[UD];
        if (KD) var MD = cD ? KD(nD, hD, UD, zD, DD, LD) : KD(hD, nD, UD, DD, zD, LD);
        if (!(void 0 === MD ? hD === nD || rD(hD, nD, wD, KD, LD) : MD)) {
          BD = !1;
          break
        }
        GD || (GD = "constructor" == UD)
      }
      if (BD && !GD) {
        var OD = DD.constructor,
          JD = zD.constructor;
        OD == JD || !("constructor" in DD) || !("constructor" in zD) || "function" == typeof OD && OD instanceof OD && "function" == typeof JD && JD instanceof JD || (BD = !1)
      }
      return LD.delete(DD), LD.delete(zD), BD
    }
  },
  5162: (DD, zD, wD) => {
    var pD = "object" == typeof wD.g && wD.g && wD.g.Object === Object && wD.g;
    DD.exports = pD
  },
  5714: (DD, zD, wD) => {
    var pD = wD(5717),
      sD = wD(5725),
      KD = wD(5733);
    DD.exports = function(DD) {
      return pD(DD, KD, sD)
    }
  },
  5432: (DD, zD, wD) => {
    var pD = wD(5439);
    DD.exports = function(DD, zD) {
      var wD = DD.__data__;
      return pD(zD) ? wD["string" == typeof zD ? "string" : "hash"] : wD.map
    }
  },
  5846: (DD, zD, wD) => {
    var pD = wD(5854),
      sD = wD(5733);
    DD.exports = function(DD) {
      for (var zD = sD(DD), wD = zD.length; wD--;) {
        var KD = zD[wD],
          rD = DD[KD];
        zD[wD] = [KD, rD, pD(rD)]
      }
      return zD
    }
  },
  5322: (DD, zD, wD) => {
    var pD = wD(5328),
      sD = wD(5353);
    DD.exports = function(DD, zD) {
      var wD = sD(DD, zD);
      return pD(wD) ? wD : void 0
    }
  },
  6347: (DD, zD, wD) => {
    var pD = wD(5816)(Object.getPrototypeOf, Object);
    DD.exports = pD
  },
  5201: (DD, zD, wD) => {
    var pD = wD(5192),
      sD = Object.prototype,
      KD = sD.hasOwnProperty,
      rD = sD.toString,
      LD = pD ? pD.toStringTag : void 0;
    DD.exports = function(DD) {
      var zD = KD.call(DD, LD),
        wD = DD[LD];
      try {
        DD[LD] = void 0;
        var pD = !0
      } catch (cD) {}
      var sD = rD.call(DD);
      return pD && (zD ? DD[LD] = wD : delete DD[LD]), sD
    }
  },
  5725: (DD, zD, wD) => {
    var pD = wD(5727),
      sD = wD(5729),
      KD = Object.prototype.propertyIsEnumerable,
      rD = Object.getOwnPropertySymbols,
      LD = rD ? function(DD) {
        return null == DD ? [] : (DD = Object(DD), pD(rD(DD), (function(zD) {
          return KD.call(DD, zD)
        })))
      } : sD;
    DD.exports = LD
  },
  5818: (DD, zD, wD) => {
    var pD = wD(5822),
      sD = wD(5422),
      KD = wD(5831),
      rD = wD(5836),
      LD = wD(5840),
      cD = wD(5190),
      gD = wD(5346),
      RD = "[object Map]",
      AD = "[object Promise]",
      UD = "[object Set]",
      fD = "[object WeakMap]",
      ID = "[object DataView]",
      BD = gD(pD),
      GD = gD(sD),
      hD = gD(KD),
      nD = gD(rD),
      MD = gD(LD),
      OD = cD;
    (pD && OD(new pD(new ArrayBuffer(1))) != ID || sD && OD(new sD) != RD || KD && OD(KD.resolve()) != AD || rD && OD(new rD) != UD || LD && OD(new LD) != fD) && (OD = function(DD) {
      var zD = cD(DD),
        wD = "[object Object]" == zD ? DD.constructor : void 0,
        pD = wD ? gD(wD) : "";
      if (pD) switch (pD) {
        case BD:
          return ID;
        case GD:
          return RD;
        case hD:
          return AD;
        case nD:
          return UD;
        case MD:
          return fD
      }
      return zD
    }), DD.exports = OD
  },
  5353: DD => {
    DD.exports = function(DD, zD) {
      return null == DD ? void 0 : DD[zD]
    }
  },
  5880: (DD, zD, wD) => {
    var pD = wD(5265),
      sD = wD(5584),
      KD = wD(5239),
      rD = wD(5555),
      LD = wD(5551),
      cD = wD(5473);
    DD.exports = function(DD, zD, wD) {
      for (var gD = -1, RD = (zD = pD(zD, DD)).length, AD = !1; ++gD < RD;) {
        var UD = cD(zD[gD]);
        if (!(AD = null != DD && wD(DD, UD))) break;
        DD = DD[UD]
      }
      return AD || ++gD != RD ? AD : !!(RD = null == DD ? 0 : DD.length) && LD(RD) && rD(UD, RD) && (KD(DD) || sD(DD))
    }
  },
  6113: DD => {
    var zD = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    DD.exports = function(DD) {
      return zD.test(DD)
    }
  },
  5315: (DD, zD, wD) => {
    var pD = wD(5317);
    DD.exports = function() {
      this.__data__ = pD ? pD(null) : {}, this.size = 0
    }
  },
  5358: DD => {
    DD.exports = function(DD) {
      var zD = this.has(DD) && delete this.__data__[DD];
      return this.size -= zD ? 1 : 0, zD
    }
  },
  5361: (DD, zD, wD) => {
    var pD = wD(5317),
      sD = Object.prototype.hasOwnProperty;
    DD.exports = function(DD) {
      var zD = this.__data__;
      if (pD) {
        var wD = zD[DD];
        return "__lodash_hash_undefined__" === wD ? void 0 : wD
      }
      return sD.call(zD, DD) ? zD[DD] : void 0
    }
  },
  5366: (DD, zD, wD) => {
    var pD = wD(5317),
      sD = Object.prototype.hasOwnProperty;
    DD.exports = function(DD) {
      var zD = this.__data__;
      return pD ? void 0 !== zD[DD] : sD.call(zD, DD)
    }
  },
  5375: (DD, zD, wD) => {
    var pD = wD(5317);
    DD.exports = function(DD, zD) {
      var wD = this.__data__;
      return this.size += this.has(DD) ? 0 : 1, wD[DD] = pD && void 0 === zD ? "__lodash_hash_undefined__" : zD, this
    }
  },
  5581: (DD, zD, wD) => {
    var pD = wD(5192),
      sD = wD(5584),
      KD = wD(5239),
      rD = pD ? pD.isConcatSpreadable : void 0;
    DD.exports = function(DD) {
      return KD(DD) || sD(DD) || !!(rD && DD && DD[rD])
    }
  },
  5555: DD => {
    var zD = /^(?:0|[1-9]\d*)$/;
    DD.exports = function(DD, wD) {
      var pD = typeof DD;
      return !!(wD = null == wD ? 9007199254740991 : wD) && ("number" == pD || "symbol" != pD && zD.test(DD)) && DD > -1 && DD % 1 == 0 && DD < wD
    }
  },
  5542: (DD, zD, wD) => {
    var pD = wD(5405),
      sD = wD(5545),
      KD = wD(5555),
      rD = wD(5144);
    DD.exports = function(DD, zD, wD) {
      if (!rD(wD)) return !1;
      var LD = typeof zD;
      return !!("number" == LD ? sD(wD) && KD(zD, wD.length) : "string" == LD && zD in wD) && pD(wD[zD], DD)
    }
  },
  5272: (DD, zD, wD) => {
    var pD = wD(5239),
      sD = wD(5186),
      KD = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      rD = /^\w*$/;
    DD.exports = function(DD, zD) {
      if (pD(DD)) return !1;
      var wD = typeof DD;
      return !("number" != wD && "symbol" != wD && "boolean" != wD && null != DD && !sD(DD)) || (rD.test(DD) || !KD.test(DD) || null != zD && DD in Object(zD))
    }
  },
  5439: DD => {
    DD.exports = function(DD) {
      var zD = typeof DD;
      return "string" == zD || "number" == zD || "symbol" == zD || "boolean" == zD ? "__proto__" !== DD : null === DD
    }
  },
  5340: (DD, zD, wD) => {
    var pD = wD(5344),
      sD = function() {
        var DD = /[^.]+$/.exec(pD && pD.keys && pD.keys.IE_PROTO || "");
        return DD ? "Symbol(src)_1." + DD : ""
      }();
    DD.exports = function(DD) {
      return !!sD && sD in DD
    }
  },
  5799: DD => {
    var zD = Object.prototype;
    DD.exports = function(DD) {
      var wD = DD && DD.constructor;
      return DD === ("function" == typeof wD && wD.prototype || zD)
    }
  },
  5854: (DD, zD, wD) => {
    var pD = wD(5144);
    DD.exports = function(DD) {
      return DD === DD && !pD(DD)
    }
  },
  5383: DD => {
    DD.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5389: (DD, zD, wD) => {
    var pD = wD(5398),
      sD = Array.prototype.splice;
    DD.exports = function(DD) {
      var zD = this.__data__,
        wD = pD(zD, DD);
      return !(wD < 0) && (wD == zD.length - 1 ? zD.pop() : sD.call(zD, wD, 1), --this.size, !0)
    }
  },
  5408: (DD, zD, wD) => {
    var pD = wD(5398);
    DD.exports = function(DD) {
      var zD = this.__data__,
        wD = pD(zD, DD);
      return wD < 0 ? void 0 : zD[wD][1]
    }
  },
  5413: (DD, zD, wD) => {
    var pD = wD(5398);
    DD.exports = function(DD) {
      return pD(this.__data__, DD) > -1
    }
  },
  5420: (DD, zD, wD) => {
    var pD = wD(5398);
    DD.exports = function(DD, zD) {
      var wD = this.__data__,
        sD = pD(wD, DD);
      return sD < 0 ? (++this.size, wD.push([DD, zD])) : wD[sD][1] = zD, this
    }
  },
  5306: (DD, zD, wD) => {
    var pD = wD(5309),
      sD = wD(5377),
      KD = wD(5422);
    DD.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new pD,
        map: new(KD || sD),
        string: new pD
      }
    }
  },
  5426: (DD, zD, wD) => {
    var pD = wD(5432);
    DD.exports = function(DD) {
      var zD = pD(this, DD).delete(DD);
      return this.size -= zD ? 1 : 0, zD
    }
  },
  5448: (DD, zD, wD) => {
    var pD = wD(5432);
    DD.exports = function(DD) {
      return pD(this, DD).get(DD)
    }
  },
  5453: (DD, zD, wD) => {
    var pD = wD(5432);
    DD.exports = function(DD) {
      return pD(this, DD).has(DD)
    }
  },
  5455: (DD, zD, wD) => {
    var pD = wD(5432);
    DD.exports = function(DD, zD) {
      var wD = pD(this, DD),
        sD = wD.size;
      return wD.set(DD, zD), this.size += wD.size == sD ? 0 : 1, this
    }
  },
  5692: DD => {
    DD.exports = function(DD) {
      var zD = -1,
        wD = Array(DD.size);
      return DD.forEach((function(DD, pD) {
        wD[++zD] = [pD, DD]
      })), wD
    }
  },
  5863: DD => {
    DD.exports = function(DD, zD) {
      return function(wD) {
        return null != wD && (wD[DD] === zD && (void 0 !== zD || DD in Object(wD)))
      }
    }
  },
  5287: (DD, zD, wD) => {
    var pD = wD(5289);
    DD.exports = function(DD) {
      var zD = pD(DD, (function(DD) {
          return 500 === wD.size && wD.clear(), DD
        })),
        wD = zD.cache;
      return zD
    }
  },
  5317: (DD, zD, wD) => {
    var pD = wD(5322)(Object, "create");
    DD.exports = pD
  },
  5807: (DD, zD, wD) => {
    var pD = wD(5816)(Object.keys, Object);
    DD.exports = pD
  },
  5786: (DD, zD, wD) => {
    DD = wD.nmd(DD);
    var pD = wD(5162),
      sD = zD && !zD.nodeType && zD,
      KD = sD && DD && !DD.nodeType && DD,
      rD = KD && KD.exports === sD && pD.process,
      LD = function() {
        try {
          var DD = KD && KD.require && KD.require("util").types;
          return DD || rD && rD.binding && rD.binding("util")
        } catch (zD) {}
      }();
    DD.exports = LD
  },
  5209: DD => {
    var zD = Object.prototype.toString;
    DD.exports = function(DD) {
      return zD.call(DD)
    }
  },
  5816: DD => {
    DD.exports = function(DD, zD) {
      return function(wD) {
        return DD(zD(wD))
      }
    }
  },
  5960: (DD, zD, wD) => {
    var pD = wD(5964),
      sD = Math.max;
    DD.exports = function(DD, zD, wD) {
      return zD = sD(void 0 === zD ? DD.length - 1 : zD, 0),
        function() {
          for (var KD = arguments, rD = -1, LD = sD(KD.length - zD, 0), cD = Array(LD); ++rD < LD;) cD[rD] = KD[zD + rD];
          rD = -1;
          for (var gD = Array(zD + 1); ++rD < zD;) gD[rD] = KD[rD];
          return gD[zD] = wD(cD), pD(DD, this, gD)
        }
    }
  },
  5153: (DD, zD, wD) => {
    var pD = wD(5162),
      sD = "object" == typeof self && self && self.Object === Object && self,
      KD = pD || sD || Function("return this")();
    DD.exports = KD
  },
  5664: DD => {
    DD.exports = function(DD) {
      return this.__data__.set(DD, "__lodash_hash_undefined__"), this
    }
  },
  5668: DD => {
    DD.exports = function(DD) {
      return this.__data__.has(DD)
    }
  },
  5697: DD => {
    DD.exports = function(DD) {
      var zD = -1,
        wD = Array(DD.size);
      return DD.forEach((function(DD) {
        wD[++zD] = DD
      })), wD
    }
  },
  5967: (DD, zD, wD) => {
    var pD = wD(5974),
      sD = wD(5987)(pD);
    DD.exports = sD
  },
  5987: DD => {
    var zD = Date.now;
    DD.exports = function(DD) {
      var wD = 0,
        pD = 0;
      return function() {
        var sD = zD(),
          KD = 16 - (sD - pD);
        if (pD = sD, KD > 0) {
          if (++wD >= 800) return arguments[0]
        } else wD = 0;
        return DD.apply(void 0, arguments)
      }
    }
  },
  5624: (DD, zD, wD) => {
    var pD = wD(5377);
    DD.exports = function() {
      this.__data__ = new pD, this.size = 0
    }
  },
  5632: DD => {
    DD.exports = function(DD) {
      var zD = this.__data__,
        wD = zD.delete(DD);
      return this.size = zD.size, wD
    }
  },
  5640: DD => {
    DD.exports = function(DD) {
      return this.__data__.get(DD)
    }
  },
  5644: DD => {
    DD.exports = function(DD) {
      return this.__data__.has(DD)
    }
  },
  5647: (DD, zD, wD) => {
    var pD = wD(5377),
      sD = wD(5422),
      KD = wD(5298);
    DD.exports = function(DD, zD) {
      var wD = this.__data__;
      if (wD instanceof pD) {
        var rD = wD.__data__;
        if (!sD || rD.length < 199) return rD.push([DD, zD]), this.size = ++wD.size, this;
        wD = this.__data__ = new KD(rD)
      }
      return wD.set(DD, zD), this.size = wD.size, this
    }
  },
  6054: DD => {
    DD.exports = function(DD, zD, wD) {
      for (var pD = wD - 1, sD = DD.length; ++pD < sD;)
        if (DD[pD] === zD) return pD;
      return -1
    }
  },
  6116: (DD, zD, wD) => {
    var pD = wD(6122),
      sD = wD(6113),
      KD = wD(6127);
    DD.exports = function(DD) {
      return sD(DD) ? KD(DD) : pD(DD)
    }
  },
  5281: (DD, zD, wD) => {
    var pD = wD(5287),
      sD = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      KD = /\\(\\)?/g,
      rD = pD((function(DD) {
        var zD = [];
        return 46 === DD.charCodeAt(0) && zD.push(""), DD.replace(sD, (function(DD, wD, pD, sD) {
          zD.push(pD ? sD.replace(KD, "$1") : wD || DD)
        })), zD
      }));
    DD.exports = rD
  },
  5473: (DD, zD, wD) => {
    var pD = wD(5186);
    DD.exports = function(DD) {
      if ("string" == typeof DD || pD(DD)) return DD;
      var zD = DD + "";
      return "0" == zD && 1 / DD == -1 / 0 ? "-0" : zD
    }
  },
  5346: DD => {
    var zD = Function.prototype.toString;
    DD.exports = function(DD) {
      if (null != DD) {
        try {
          return zD.call(DD)
        } catch (wD) {}
        try {
          return DD + ""
        } catch (wD) {}
      }
      return ""
    }
  },
  5182: DD => {
    var zD = /\s/;
    DD.exports = function(DD) {
      for (var wD = DD.length; wD-- && zD.test(DD.charAt(wD)););
      return wD
    }
  },
  6127: DD => {
    var zD = "\\ud800-\\udfff",
      wD = "[" + zD + "]",
      pD = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      sD = "\\ud83c[\\udffb-\\udfff]",
      KD = "[^" + zD + "]",
      rD = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      LD = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      cD = "(?:" + pD + "|" + sD + ")" + "?",
      gD = "[\\ufe0e\\ufe0f]?",
      RD = gD + cD + ("(?:\\u200d(?:" + [KD, rD, LD].join("|") + ")" + gD + cD + ")*"),
      AD = "(?:" + [KD + pD + "?", pD, rD, LD, wD].join("|") + ")",
      UD = RegExp(sD + "(?=" + sD + ")|" + AD + RD, "g");
    DD.exports = function(DD) {
      return DD.match(UD) || []
    }
  },
  5976: DD => {
    DD.exports = function(DD) {
      return function() {
        return DD
      }
    }
  },
  5135: (DD, zD, wD) => {
    var pD = wD(5144),
      sD = wD(5149),
      KD = wD(5169),
      rD = Math.max,
      LD = Math.min;
    DD.exports = function(DD, zD, wD) {
      var cD, gD, RD, AD, UD, fD, ID = 0,
        BD = !1,
        GD = !1,
        hD = !0;
      if ("function" != typeof DD) throw new TypeError("Expected a function");

      function nD(zD) {
        var wD = cD,
          pD = gD;
        return cD = gD = void 0, ID = zD, AD = DD.apply(pD, wD)
      }

      function MD(DD) {
        var wD = DD - fD;
        return void 0 === fD || wD >= zD || wD < 0 || GD && DD - ID >= RD
      }

      function OD() {
        var DD = sD();
        if (MD(DD)) return JD(DD);
        UD = setTimeout(OD, function(DD) {
          var wD = zD - (DD - fD);
          return GD ? LD(wD, RD - (DD - ID)) : wD
        }(DD))
      }

      function JD(DD) {
        return UD = void 0, hD && cD ? nD(DD) : (cD = gD = void 0, AD)
      }

      function ED() {
        var DD = sD(),
          wD = MD(DD);
        if (cD = arguments, gD = this, fD = DD, wD) {
          if (void 0 === UD) return function(DD) {
            return ID = DD, UD = setTimeout(OD, zD), BD ? nD(DD) : AD
          }(fD);
          if (GD) return clearTimeout(UD), UD = setTimeout(OD, zD), nD(fD)
        }
        return void 0 === UD && (UD = setTimeout(OD, zD)), AD
      }
      return zD = KD(zD) || 0, pD(wD) && (BD = !!wD.leading, RD = (GD = "maxWait" in wD) ? rD(KD(wD.maxWait) || 0, zD) : RD, hD = "trailing" in wD ? !!wD.trailing : hD), ED.cancel = function() {
        void 0 !== UD && clearTimeout(UD), ID = 0, cD = fD = gD = UD = void 0
      }, ED.flush = function() {
        return void 0 === UD ? AD : JD(sD())
      }, ED
    }
  },
  5405: DD => {
    DD.exports = function(DD, zD) {
      return DD === zD || DD !== DD && zD !== zD
    }
  },
  6302: (DD, zD, wD) => {
    var pD = wD(6309),
      sD = wD(6316),
      KD = wD(5600),
      rD = wD(5239),
      LD = wD(5542);
    DD.exports = function(DD, zD, wD) {
      var cD = rD(DD) ? pD : sD;
      return wD && LD(DD, zD, wD) && (zD = void 0), cD(DD, KD(zD, 3))
    }
  },
  6390: (DD, zD, wD) => {
    var pD = wD(6392)(wD(6400));
    DD.exports = pD
  },
  6400: (DD, zD, wD) => {
    var pD = wD(6040),
      sD = wD(5600),
      KD = wD(6409),
      rD = Math.max;
    DD.exports = function(DD, zD, wD) {
      var LD = null == DD ? 0 : DD.length;
      if (!LD) return -1;
      var cD = null == wD ? 0 : KD(wD);
      return cD < 0 && (cD = rD(LD + cD, 0)), pD(DD, sD(zD, 3), cD)
    }
  },
  6221: (DD, zD, wD) => {
    var pD = wD(5570),
      sD = wD(6230);
    DD.exports = function(DD, zD) {
      return pD(sD(DD, zD), 1)
    }
  },
  5254: (DD, zD, wD) => {
    var pD = wD(5259);
    DD.exports = function(DD, zD, wD) {
      var sD = null == DD ? void 0 : pD(DD, zD);
      return void 0 === sD ? wD : sD
    }
  },
  5870: (DD, zD, wD) => {
    var pD = wD(5872),
      sD = wD(5880);
    DD.exports = function(DD, zD) {
      return null != DD && sD(DD, zD, pD)
    }
  },
  5887: DD => {
    DD.exports = function(DD) {
      return DD
    }
  },
  5584: (DD, zD, wD) => {
    var pD = wD(5591),
      sD = wD(5218),
      KD = Object.prototype,
      rD = KD.hasOwnProperty,
      LD = KD.propertyIsEnumerable,
      cD = pD(function() {
        return arguments
      }()) ? pD : function(DD) {
        return sD(DD) && rD.call(DD, "callee") && !LD.call(DD, "callee")
      };
    DD.exports = cD
  },
  5239: DD => {
    var zD = Array.isArray;
    DD.exports = zD
  },
  5545: (DD, zD, wD) => {
    var pD = wD(5333),
      sD = wD(5551);
    DD.exports = function(DD) {
      return null != DD && sD(DD.length) && !pD(DD)
    }
  },
  6353: (DD, zD, wD) => {
    var pD = wD(5190),
      sD = wD(5218);
    DD.exports = function(DD) {
      return !0 === DD || !1 === DD || sD(DD) && "[object Boolean]" == pD(DD)
    }
  },
  5758: (DD, zD, wD) => {
    DD = wD.nmd(DD);
    var pD = wD(5153),
      sD = wD(5767),
      KD = zD && !zD.nodeType && zD,
      rD = KD && DD && !DD.nodeType && DD,
      LD = rD && rD.exports === KD ? pD.nI : void 0,
      cD = (LD ? LD.isBuffer : void 0) || sD;
    DD.exports = cD
  },
  6239: (DD, zD, wD) => {
    var pD = wD(5654);
    DD.exports = function(DD, zD) {
      return pD(DD, zD)
    }
  },
  5333: (DD, zD, wD) => {
    var pD = wD(5190),
      sD = wD(5144);
    DD.exports = function(DD) {
      if (!sD(DD)) return !1;
      var zD = pD(DD);
      return "[object Function]" == zD || "[object GeneratorFunction]" == zD || "[object AsyncFunction]" == zD || "[object Proxy]" == zD
    }
  },
  5551: DD => {
    DD.exports = function(DD) {
      return "number" == typeof DD && DD > -1 && DD % 1 == 0 && DD <= 9007199254740991
    }
  },
  5241: (DD, zD, wD) => {
    var pD = wD(5248);
    DD.exports = function(DD) {
      return pD(DD) && DD != +DD
    }
  },
  5478: DD => {
    DD.exports = function(DD) {
      return null == DD
    }
  },
  5248: (DD, zD, wD) => {
    var pD = wD(5190),
      sD = wD(5218);
    DD.exports = function(DD) {
      return "number" == typeof DD || sD(DD) && "[object Number]" == pD(DD)
    }
  },
  5144: DD => {
    DD.exports = function(DD) {
      var zD = typeof DD;
      return null != DD && ("object" == zD || "function" == zD)
    }
  },
  5218: DD => {
    DD.exports = function(DD) {
      return null != DD && "object" == typeof DD
    }
  },
  6344: (DD, zD, wD) => {
    var pD = wD(5190),
      sD = wD(6347),
      KD = wD(5218),
      rD = Function.prototype,
      LD = Object.prototype,
      cD = rD.toString,
      gD = LD.hasOwnProperty,
      RD = cD.call(Object);
    DD.exports = function(DD) {
      if (!KD(DD) || "[object Object]" != pD(DD)) return !1;
      var zD = sD(DD);
      if (null === zD) return !0;
      var wD = gD.call(zD, "constructor") && zD.constructor;
      return "function" == typeof wD && wD instanceof wD && cD.call(wD) == RD
    }
  },
  5232: (DD, zD, wD) => {
    var pD = wD(5190),
      sD = wD(5239),
      KD = wD(5218);
    DD.exports = function(DD) {
      return "string" == typeof DD || !sD(DD) && KD(DD) && "[object String]" == pD(DD)
    }
  },
  5186: (DD, zD, wD) => {
    var pD = wD(5190),
      sD = wD(5218);
    DD.exports = function(DD) {
      return "symbol" == typeof DD || sD(DD) && "[object Symbol]" == pD(DD)
    }
  },
  5773: (DD, zD, wD) => {
    var pD = wD(5779),
      sD = wD(5782),
      KD = wD(5786),
      rD = KD && KD.isTypedArray,
      LD = rD ? sD(rD) : pD;
    DD.exports = LD
  },
  5733: (DD, zD, wD) => {
    var pD = wD(5742),
      sD = wD(5790),
      KD = wD(5545);
    DD.exports = function(DD) {
      return KD(DD) ? pD(DD) : sD(DD)
    }
  },
  6333: DD => {
    DD.exports = function(DD) {
      var zD = null == DD ? 0 : DD.length;
      return zD ? DD[zD - 1] : void 0
    }
  },
  6230: (DD, zD, wD) => {
    var pD = wD(5470),
      sD = wD(5600),
      KD = wD(5913),
      rD = wD(5239);
    DD.exports = function(DD, zD) {
      return (rD(DD) ? pD : KD)(DD, sD(zD, 3))
    }
  },
  6288: (DD, zD, wD) => {
    var pD = wD(6295),
      sD = wD(5922),
      KD = wD(5600);
    DD.exports = function(DD, zD) {
      var wD = {};
      return zD = KD(zD, 3), sD(DD, (function(DD, sD, KD) {
        pD(wD, sD, zD(DD, sD, KD))
      })), wD
    }
  },
  6206: (DD, zD, wD) => {
    var pD = wD(6208),
      sD = wD(6210),
      KD = wD(5887);
    DD.exports = function(DD) {
      return DD && DD.length ? pD(DD, KD, sD) : void 0
    }
  },
  5289: (DD, zD, wD) => {
    var pD = wD(5298);

    function sD(DD, zD) {
      if ("function" != typeof DD || null != zD && "function" != typeof zD) throw new TypeError("Expected a function");
      var wD = function() {
        var pD = arguments,
          sD = zD ? zD.apply(this, pD) : pD[0],
          KD = wD.cache;
        if (KD.has(sD)) return KD.get(sD);
        var rD = DD.apply(this, pD);
        return wD.cache = KD.set(sD, rD) || KD, rD
      };
      return wD.cache = new(sD.Cache || pD), wD
    }
    sD.Cache = pD, DD.exports = sD
  },
  6212: (DD, zD, wD) => {
    var pD = wD(6208),
      sD = wD(6217),
      KD = wD(5887);
    DD.exports = function(DD) {
      return DD && DD.length ? pD(DD, KD, sD) : void 0
    }
  },
  6072: DD => {
    DD.exports = function() {}
  },
  5149: (DD, zD, wD) => {
    var pD = wD(5153);
    DD.exports = function() {
      return pD.Date.now()
    }
  },
  5893: (DD, zD, wD) => {
    var pD = wD(5902),
      sD = wD(5911),
      KD = wD(5272),
      rD = wD(5473);
    DD.exports = function(DD) {
      return KD(DD) ? pD(rD(DD)) : sD(DD)
    }
  },
  5524: (DD, zD, wD) => {
    var pD = wD(5528)();
    DD.exports = pD
  },
  6369: (DD, zD, wD) => {
    var pD = wD(5675),
      sD = wD(5600),
      KD = wD(6377),
      rD = wD(5239),
      LD = wD(5542);
    DD.exports = function(DD, zD, wD) {
      var cD = rD(DD) ? pD : KD;
      return wD && LD(DD, zD, wD) && (zD = void 0), cD(DD, sD(zD, 3))
    }
  },
  5565: (DD, zD, wD) => {
    var pD = wD(5570),
      sD = wD(5596),
      KD = wD(5955),
      rD = wD(5542),
      LD = KD((function(DD, zD) {
        if (null == DD) return [];
        var wD = zD.length;
        return wD > 1 && rD(DD, zD[0], zD[1]) ? zD = [] : wD > 2 && rD(zD[0], zD[1], zD[2]) && (zD = [zD[0]]), sD(DD, pD(zD, 1), [])
      }));
    DD.exports = LD
  },
  5729: DD => {
    DD.exports = function() {
      return []
    }
  },
  5767: DD => {
    DD.exports = function() {
      return !1
    }
  },
  5128: (DD, zD, wD) => {
    var pD = wD(5135),
      sD = wD(5144);
    DD.exports = function(DD, zD, wD) {
      var KD = !0,
        rD = !0;
      if ("function" != typeof DD) throw new TypeError("Expected a function");
      return sD(wD) && (KD = "leading" in wD ? !!wD.leading : KD, rD = "trailing" in wD ? !!wD.trailing : rD), pD(DD, zD, {
        leading: KD,
        maxWait: zD,
        trailing: rD
      })
    }
  },
  5560: (DD, zD, wD) => {
    var pD = wD(5169),
      sD = 1 / 0;
    DD.exports = function(DD) {
      return DD ? (DD = pD(DD)) === sD || DD === -1 / 0 ? 17976931348623157e292 * (DD < 0 ? -1 : 1) : DD === DD ? DD : 0 : 0 === DD ? DD : 0
    }
  },
  6409: (DD, zD, wD) => {
    var pD = wD(5560);
    DD.exports = function(DD) {
      var zD = pD(DD),
        wD = zD % 1;
      return zD === zD ? wD ? zD - wD : zD : 0
    }
  },
  5169: (DD, zD, wD) => {
    var pD = wD(5174),
      sD = wD(5144),
      KD = wD(5186),
      rD = /^[-+]0x[0-9a-f]+$/i,
      LD = /^0b[01]+$/i,
      cD = /^0o[0-7]+$/i,
      gD = parseInt;
    DD.exports = function(DD) {
      if ("number" == typeof DD) return DD;
      if (KD(DD)) return NaN;
      if (sD(DD)) {
        var zD = "function" == typeof DD.valueOf ? DD.valueOf() : DD;
        DD = sD(zD) ? zD + "" : zD
      }
      if ("string" != typeof DD) return 0 === DD ? DD : +DD;
      DD = pD(DD);
      var wD = LD.test(DD);
      return wD || cD.test(DD) ? gD(DD.slice(2), wD ? 2 : 8) : rD.test(DD) ? NaN : +DD
    }
  },
  5461: (DD, zD, wD) => {
    var pD = wD(5464);
    DD.exports = function(DD) {
      return null == DD ? "" : pD(DD)
    }
  },
  6023: (DD, zD, wD) => {
    var pD = wD(5600),
      sD = wD(6025);
    DD.exports = function(DD, zD) {
      return DD && DD.length ? sD(DD, pD(zD, 2)) : []
    }
  },
  6089: (DD, zD, wD) => {
    var pD = wD(6095)("toUpperCase");
    DD.exports = pD
  },
  6158: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => lz
    });
    var pD = wD(58),
      sD = wD(4981),
      KD = wD.n(sD);
    const {
      getOwnPropertyNames: rD,
      getOwnPropertySymbols: LD
    } = Object, {
      hasOwnProperty: cD
    } = Object.prototype;

    function gD(DD, zD) {
      return function(wD, pD, sD) {
        return DD(wD, pD, sD) && zD(wD, pD, sD)
      }
    }

    function RD(DD) {
      return function(zD, wD, pD) {
        if (!zD || !wD || "object" !== typeof zD || "object" !== typeof wD) return DD(zD, wD, pD);
        const {
          cache: sD
        } = pD, KD = sD.get(zD), rD = sD.get(wD);
        if (KD && rD) return KD === wD && rD === zD;
        sD.set(zD, wD), sD.set(wD, zD);
        const LD = DD(zD, wD, pD);
        return sD.delete(zD), sD.delete(wD), LD
      }
    }

    function AD(DD) {
      return rD(DD).concat(LD(DD))
    }
    const UD = Object.hasOwn || ((DD, zD) => cD.call(DD, zD));

    function fD(DD, zD) {
      return DD === zD || !DD && !zD && DD !== DD && zD !== zD
    }
    const {
      getOwnPropertyDescriptor: ID,
      keys: BD
    } = Object;

    function GD(DD, zD) {
      return DD.byteLength === zD.byteLength && TD(new Uint8Array(DD), new Uint8Array(zD))
    }

    function hD(DD, zD, wD) {
      let pD = DD.length;
      if (zD.length !== pD) return !1;
      for (; pD-- > 0;)
        if (!wD.equals(DD[pD], zD[pD], pD, pD, DD, zD, wD)) return !1;
      return !0
    }

    function nD(DD, zD) {
      return DD.byteLength === zD.byteLength && TD(new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength), new Uint8Array(zD.buffer, zD.byteOffset, zD.byteLength))
    }

    function MD(DD, zD) {
      return fD(DD.getTime(), zD.getTime())
    }

    function OD(DD, zD) {
      return DD.name === zD.name && DD.message === zD.message && DD.cause === zD.cause && DD.stack === zD.stack
    }

    function JD(DD, zD) {
      return DD === zD
    }

    function ED(DD, zD, wD) {
      const pD = DD.size;
      if (pD !== zD.size) return !1;
      if (!pD) return !0;
      const sD = new Array(pD),
        KD = DD.entries();
      let rD, LD, cD = 0;
      for (;
        (rD = KD.next()) && !rD.done;) {
        const pD = zD.entries();
        let KD = !1,
          gD = 0;
        for (;
          (LD = pD.next()) && !LD.done;) {
          if (sD[gD]) {
            gD++;
            continue
          }
          const pD = rD.value,
            RD = LD.value;
          if (wD.equals(pD[0], RD[0], cD, gD, DD, zD, wD) && wD.equals(pD[1], RD[1], pD[0], RD[0], DD, zD, wD)) {
            KD = sD[gD] = !0;
            break
          }
          gD++
        }
        if (!KD) return !1;
        cD++
      }
      return !0
    }
    const QD = fD;

    function XD(DD, zD, wD) {
      const pD = BD(DD);
      let sD = pD.length;
      if (BD(zD).length !== sD) return !1;
      for (; sD-- > 0;)
        if (!jD(DD, zD, wD, pD[sD])) return !1;
      return !0
    }

    function VD(DD, zD, wD) {
      const pD = AD(DD);
      let sD, KD, rD, LD = pD.length;
      if (AD(zD).length !== LD) return !1;
      for (; LD-- > 0;) {
        if (sD = pD[LD], !jD(DD, zD, wD, sD)) return !1;
        if (KD = ID(DD, sD), rD = ID(zD, sD), (KD || rD) && (!KD || !rD || KD.configurable !== rD.configurable || KD.enumerable !== rD.enumerable || KD.writable !== rD.writable)) return !1
      }
      return !0
    }

    function PD(DD, zD) {
      return fD(DD.valueOf(), zD.valueOf())
    }

    function CD(DD, zD) {
      return DD.source === zD.source && DD.flags === zD.flags
    }

    function xD(DD, zD, wD) {
      const pD = DD.size;
      if (pD !== zD.size) return !1;
      if (!pD) return !0;
      const sD = new Array(pD),
        KD = DD.values();
      let rD, LD;
      for (;
        (rD = KD.next()) && !rD.done;) {
        const pD = zD.values();
        let KD = !1,
          cD = 0;
        for (;
          (LD = pD.next()) && !LD.done;) {
          if (!sD[cD] && wD.equals(rD.value, LD.value, rD.value, LD.value, DD, zD, wD)) {
            KD = sD[cD] = !0;
            break
          }
          cD++
        }
        if (!KD) return !1
      }
      return !0
    }

    function TD(DD, zD) {
      let wD = DD.byteLength;
      if (zD.byteLength !== wD || DD.byteOffset !== zD.byteOffset) return !1;
      for (; wD-- > 0;)
        if (DD[wD] !== zD[wD]) return !1;
      return !0
    }

    function bD(DD, zD) {
      return DD.hostname === zD.hostname && DD.pathname === zD.pathname && DD.protocol === zD.protocol && DD.port === zD.port && DD.hash === zD.hash && DD.username === zD.username && DD.password === zD.password
    }

    function jD(DD, zD, wD, pD) {
      return !("_owner" !== pD && "__o" !== pD && "__v" !== pD || !DD.$$typeof && !zD.$$typeof) || UD(zD, pD) && wD.equals(DD[pD], zD[pD], pD, pD, DD, zD, wD)
    }
    const dD = {
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
      SD = Object.prototype.toString;

    function iD(DD) {
      let {
        areArrayBuffersEqual: zD,
        areArraysEqual: wD,
        areDataViewsEqual: pD,
        areDatesEqual: sD,
        areErrorsEqual: KD,
        areFunctionsEqual: rD,
        areMapsEqual: LD,
        areNumbersEqual: cD,
        areObjectsEqual: gD,
        arePrimitiveWrappersEqual: RD,
        areRegExpsEqual: AD,
        areSetsEqual: UD,
        areTypedArraysEqual: fD,
        areUrlsEqual: ID,
        unknownTagComparators: BD
      } = DD;
      return function(DD, GD, hD) {
        if (DD === GD) return !0;
        if (null == DD || null == GD) return !1;
        const nD = typeof DD;
        if (nD !== typeof GD) return !1;
        if ("object" !== nD) return "number" === nD ? cD(DD, GD, hD) : "function" === nD && rD(DD, GD, hD);
        const MD = DD.constructor;
        if (MD !== GD.constructor) return !1;
        if (MD === Object) return gD(DD, GD, hD);
        if (Array.isArray(DD)) return wD(DD, GD, hD);
        if (MD === Date) return sD(DD, GD, hD);
        if (MD === RegExp) return AD(DD, GD, hD);
        if (MD === Map) return LD(DD, GD, hD);
        if (MD === Set) return UD(DD, GD, hD);
        const OD = SD.call(DD);
        if ("[object Date]" === OD) return sD(DD, GD, hD);
        if ("[object RegExp]" === OD) return AD(DD, GD, hD);
        if ("[object Map]" === OD) return LD(DD, GD, hD);
        if ("[object Set]" === OD) return UD(DD, GD, hD);
        if ("[object Object]" === OD) return "function" !== typeof DD.then && "function" !== typeof GD.then && gD(DD, GD, hD);
        if ("[object URL]" === OD) return ID(DD, GD, hD);
        if ("[object Error]" === OD) return KD(DD, GD, hD);
        if ("[object Arguments]" === OD) return gD(DD, GD, hD);
        if (dD[OD]) return fD(DD, GD, hD);
        if ("[object ArrayBuffer]" === OD) return zD(DD, GD, hD);
        if ("[object DataView]" === OD) return pD(DD, GD, hD);
        if ("[object Boolean]" === OD || "[object Number]" === OD || "[object String]" === OD) return RD(DD, GD, hD);
        if (BD) {
          let zD = BD[OD];
          if (!zD) {
            const wD = null != (JD = DD) ? JD[Symbol.toStringTag] : void 0;
            wD && (zD = BD[wD])
          }
          if (zD) return zD(DD, GD, hD)
        }
        var JD;
        return !1
      }
    }
    const lD = WD();
    WD({
      strict: !0
    }), WD({
      circular: !0
    }), WD({
      circular: !0,
      strict: !0
    }), WD({
      createInternalComparator: () => fD
    }), WD({
      strict: !0,
      createInternalComparator: () => fD
    }), WD({
      circular: !0,
      createInternalComparator: () => fD
    }), WD({
      circular: !0,
      createInternalComparator: () => fD,
      strict: !0
    });

    function WD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: zD = !1,
        createInternalComparator: wD,
        createState: pD,
        strict: sD = !1
      } = DD, KD = function(DD) {
        let {
          circular: zD,
          createCustomConfig: wD,
          strict: pD
        } = DD, sD = {
          areArrayBuffersEqual: GD,
          areArraysEqual: pD ? VD : hD,
          areDataViewsEqual: nD,
          areDatesEqual: MD,
          areErrorsEqual: OD,
          areFunctionsEqual: JD,
          areMapsEqual: pD ? gD(ED, VD) : ED,
          areNumbersEqual: QD,
          areObjectsEqual: pD ? VD : XD,
          arePrimitiveWrappersEqual: PD,
          areRegExpsEqual: CD,
          areSetsEqual: pD ? gD(xD, VD) : xD,
          areTypedArraysEqual: pD ? gD(TD, VD) : TD,
          areUrlsEqual: bD,
          unknownTagComparators: void 0
        };
        if (wD && (sD = Object.assign({}, sD, wD(sD))), zD) {
          const DD = RD(sD.areArraysEqual),
            zD = RD(sD.areMapsEqual),
            wD = RD(sD.areObjectsEqual),
            pD = RD(sD.areSetsEqual);
          sD = Object.assign({}, sD, {
            areArraysEqual: DD,
            areMapsEqual: zD,
            areObjectsEqual: wD,
            areSetsEqual: pD
          })
        }
        return sD
      }(DD), rD = iD(KD);
      var LD;
      return function(DD) {
        let {
          circular: zD,
          comparator: wD,
          createState: pD,
          equals: sD,
          strict: KD
        } = DD;
        if (pD) return function(DD, rD) {
          const {
            cache: LD = (zD ? new WeakMap : void 0),
            meta: cD
          } = pD();
          return wD(DD, rD, {
            cache: LD,
            equals: sD,
            meta: cD,
            strict: KD
          })
        };
        if (zD) return function(DD, zD) {
          return wD(DD, zD, {
            cache: new WeakMap,
            equals: sD,
            meta: void 0,
            strict: KD
          })
        };
        const rD = {
          cache: void 0,
          equals: sD,
          meta: void 0,
          strict: KD
        };
        return function(DD, zD) {
          return wD(DD, zD, rD)
        }
      }({
        circular: zD,
        comparator: rD,
        createState: pD,
        equals: wD ? wD(rD) : (LD = rD, function(DD, zD, wD, pD, sD, KD, rD) {
          return LD(DD, zD, rD)
        }),
        strict: sD
      })
    }

    function ND(DD) {
      var zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wD = -1;
      requestAnimationFrame((function pD(sD) {
        wD < 0 && (wD = sD), sD - wD > zD ? (DD(sD), wD = -1) : function(DD) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(DD)
        }(pD)
      }))
    }

    function ZD(DD) {
      return ZD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, ZD(DD)
    }

    function yD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return kD(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return kD(DD, zD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function mD() {
      var DD = function() {
          return null
        },
        zD = !1,
        wD = function wD(pD) {
          if (!zD) {
            if (Array.isArray(pD)) {
              if (!pD.length) return;
              var sD = yD(pD),
                KD = sD[0],
                rD = sD.slice(1);
              return "number" === typeof KD ? void ND(wD.bind(null, rD), KD) : (wD(KD), void ND(wD.bind(null, rD)))
            }
            "object" === ZD(pD) && DD(pD), "function" === typeof pD && pD()
          }
        };
      return {
        stop: function() {
          zD = !0
        },
        start: function(DD) {
          zD = !1, wD(DD)
        },
        subscribe: function(zD) {
          return DD = zD,
            function() {
              DD = function() {
                return null
              }
            }
        }
      }
    }

    function eD(DD) {
      return eD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, eD(DD)
    }

    function oD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function aD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? oD(Object(wD), !0).forEach((function(zD) {
          uD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : oD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function uD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" !== eD(DD) || null === DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" !== eD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" === eD(zD) ? zD : String(zD)
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }
    var vD = function(DD) {
        return DD
      },
      tD = function(DD, zD) {
        return Object.keys(zD).reduce((function(wD, pD) {
          return aD(aD({}, wD), {}, uD({}, pD, DD(pD, zD[pD])))
        }), {})
      },
      FD = function(DD, zD, wD) {
        return DD.map((function(DD) {
          return "".concat((pD = DD, pD.replace(/([A-Z])/g, (function(DD) {
            return "-".concat(DD.toLowerCase())
          }))), " ").concat(zD, "ms ").concat(wD);
          var pD
        })).join(",")
      };

    function YD(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        var wD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != wD) {
          var pD, sD, KD, rD, LD = [],
            cD = !0,
            gD = !1;
          try {
            if (KD = (wD = wD.call(DD)).next, 0 === zD) {
              if (Object(wD) !== wD) return;
              cD = !1
            } else
              for (; !(cD = (pD = KD.call(wD)).done) && (LD.push(pD.value), LD.length !== zD); cD = !0);
          } catch (DD) {
            gD = !0, sD = DD
          } finally {
            try {
              if (!cD && null != wD.return && (rD = wD.return(), Object(rD) !== rD)) return
            } finally {
              if (gD) throw sD
            }
          }
          return LD
        }
      }(DD, zD) || qD(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function HD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return Dz(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || qD(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qD(DD, zD) {
      if (DD) {
        if ("string" === typeof DD) return Dz(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        return "Object" === wD && DD.constructor && (wD = DD.constructor.name), "Map" === wD || "Set" === wD ? Array.from(DD) : "Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD) ? Dz(DD, zD) : void 0
      }
    }

    function Dz(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }
    var zz = 1e-4,
      wz = function(DD, zD) {
        return [0, 3 * DD, 3 * zD - 6 * DD, 3 * DD - 3 * zD + 1]
      },
      pz = function(DD, zD) {
        return DD.map((function(DD, wD) {
          return DD * Math.pow(zD, wD)
        })).reduce((function(DD, zD) {
          return DD + zD
        }))
      },
      sz = function(DD, zD) {
        return function(wD) {
          var pD = wz(DD, zD);
          return pz(pD, wD)
        }
      },
      Kz = function() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        var pD = zD[0],
          sD = zD[1],
          KD = zD[2],
          rD = zD[3];
        if (1 === zD.length) switch (zD[0]) {
          case "linear":
            pD = 0, sD = 0, KD = 1, rD = 1;
            break;
          case "ease":
            pD = .25, sD = .1, KD = .25, rD = 1;
            break;
          case "ease-in":
            pD = .42, sD = 0, KD = 1, rD = 1;
            break;
          case "ease-out":
            pD = .42, sD = 0, KD = .58, rD = 1;
            break;
          case "ease-in-out":
            pD = 0, sD = 0, KD = .58, rD = 1;
            break;
          default:
            var LD = zD[0].split("(");
            if ("cubic-bezier" === LD[0] && 4 === LD[1].split(")")[0].split(",").length) {
              var cD = YD(LD[1].split(")")[0].split(",").map((function(DD) {
                return parseFloat(DD)
              })), 4);
              pD = cD[0], sD = cD[1], KD = cD[2], rD = cD[3]
            }
        } [pD, KD, sD, rD].every((function(DD) {
          return "number" === typeof DD && DD >= 0 && DD <= 1
        }));
        var gD, RD, AD = sz(pD, KD),
          UD = sz(sD, rD),
          fD = (gD = pD, RD = KD, function(DD) {
            var zD = wz(gD, RD),
              wD = [].concat(HD(zD.map((function(DD, zD) {
                return DD * zD
              })).slice(1)), [0]);
            return pz(wD, DD)
          }),
          ID = function(DD) {
            for (var zD, wD = DD > 1 ? 1 : DD, pD = wD, sD = 0; sD < 8; ++sD) {
              var KD = AD(pD) - wD,
                rD = fD(pD);
              if (Math.abs(KD - wD) < zz || rD < zz) return UD(pD);
              pD = (zD = pD - KD / rD) > 1 ? 1 : zD < 0 ? 0 : zD
            }
            return UD(pD)
          };
        return ID.isStepper = !1, ID
      },
      rz = function() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        var pD = zD[0];
        if ("string" === typeof pD) switch (pD) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return Kz(pD);
          case "spring":
            return function() {
              var DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                zD = DD.stiff,
                wD = void 0 === zD ? 100 : zD,
                pD = DD.damping,
                sD = void 0 === pD ? 8 : pD,
                KD = DD.dt,
                rD = void 0 === KD ? 17 : KD,
                LD = function(DD, zD, pD) {
                  var KD = pD + (-(DD - zD) * wD - pD * sD) * rD / 1e3,
                    LD = pD * rD / 1e3 + DD;
                  return Math.abs(LD - zD) < zz && Math.abs(KD) < zz ? [zD, 0] : [LD, KD]
                };
              return LD.isStepper = !0, LD.dt = rD, LD
            }();
          default:
            if ("cubic-bezier" === pD.split("(")[0]) return Kz(pD)
        }
        return "function" === typeof pD ? pD : null
      };

    function Lz(DD) {
      return Lz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, Lz(DD)
    }

    function cz(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return Iz(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || fz(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gz(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function Rz(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? gz(Object(wD), !0).forEach((function(zD) {
          Az(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : gz(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function Az(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" !== Lz(DD) || null === DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" !== Lz(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" === Lz(zD) ? zD : String(zD)
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function Uz(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        var wD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != wD) {
          var pD, sD, KD, rD, LD = [],
            cD = !0,
            gD = !1;
          try {
            if (KD = (wD = wD.call(DD)).next, 0 === zD) {
              if (Object(wD) !== wD) return;
              cD = !1
            } else
              for (; !(cD = (pD = KD.call(wD)).done) && (LD.push(pD.value), LD.length !== zD); cD = !0);
          } catch (DD) {
            gD = !0, sD = DD
          } finally {
            try {
              if (!cD && null != wD.return && (rD = wD.return(), Object(rD) !== rD)) return
            } finally {
              if (gD) throw sD
            }
          }
          return LD
        }
      }(DD, zD) || fz(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fz(DD, zD) {
      if (DD) {
        if ("string" === typeof DD) return Iz(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        return "Object" === wD && DD.constructor && (wD = DD.constructor.name), "Map" === wD || "Set" === wD ? Array.from(DD) : "Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD) ? Iz(DD, zD) : void 0
      }
    }

    function Iz(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }
    var Bz = function(DD, zD, wD) {
        return DD + (zD - DD) * wD
      },
      Gz = function(DD) {
        return DD.from !== DD.to
      },
      hz = function DD(zD, wD, pD) {
        var sD = tD((function(DD, wD) {
          if (Gz(wD)) {
            var pD = Uz(zD(wD.from, wD.to, wD.UG), 2),
              sD = pD[0],
              KD = pD[1];
            return Rz(Rz({}, wD), {}, {
              from: sD,
              UG: KD
            })
          }
          return wD
        }), wD);
        return pD < 1 ? tD((function(DD, zD) {
          return Gz(zD) ? Rz(Rz({}, zD), {}, {
            UG: Bz(zD.UG, sD[DD].UG, pD),
            from: Bz(zD.from, sD[DD].from, pD)
          }) : zD
        }), wD) : DD(zD, sD, pD - 1)
      };
    const nz = function(DD, zD, wD, pD, sD) {
      var KD, rD, LD, cD, gD = (KD = DD, rD = zD, [Object.keys(KD), Object.keys(rD)].reduce((function(DD, zD) {
          return DD.filter((function(DD) {
            return zD.includes(DD)
          }))
        }))),
        RD = gD.reduce((function(wD, pD) {
          return Rz(Rz({}, wD), {}, Az({}, pD, [DD[pD], zD[pD]]))
        }), {}),
        AD = gD.reduce((function(wD, pD) {
          return Rz(Rz({}, wD), {}, Az({}, pD, {
            from: DD[pD],
            UG: 0,
            to: zD[pD]
          }))
        }), {}),
        UD = -1,
        fD = function() {
          return null
        };
      return fD = wD.isStepper ? function(pD) {
          LD || (LD = pD);
          var KD = (pD - LD) / wD.dt;
          AD = hz(wD, AD, KD), sD(Rz(Rz(Rz({}, DD), zD), tD((function(DD, zD) {
            return zD.from
          }), AD))), LD = pD, Object.values(AD).filter(Gz).length && (UD = requestAnimationFrame(fD))
        } : function(KD) {
          cD || (cD = KD);
          var rD = (KD - cD) / pD,
            LD = tD((function(DD, zD) {
              return Bz.apply(void 0, cz(zD).concat([wD(rD)]))
            }), RD);
          if (sD(Rz(Rz(Rz({}, DD), zD), LD)), rD < 1) UD = requestAnimationFrame(fD);
          else {
            var gD = tD((function(DD, zD) {
              return Bz.apply(void 0, cz(zD).concat([wD(1)]))
            }), RD);
            sD(Rz(Rz(Rz({}, DD), zD), gD))
          }
        },
        function() {
          return requestAnimationFrame(fD),
            function() {
              cancelAnimationFrame(UD)
            }
        }
    };

    function Mz(DD) {
      return Mz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, Mz(DD)
    }
    var Oz = ["children", "Jf", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function Jz(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD, pD, sD = {},
          KD = Object.keys(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || (sD[wD] = DD[wD]);
        return sD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function Ez(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return Qz(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return Qz(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return Qz(DD, zD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Qz(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function Xz(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function Vz(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? Xz(Object(wD), !0).forEach((function(zD) {
          Pz(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : Xz(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function Pz(DD, zD, wD) {
      return (zD = xz(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function Cz(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, xz(pD.key), pD)
      }
    }

    function xz(DD) {
      var zD = function(DD, zD) {
        if ("object" !== Mz(DD) || null === DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" !== Mz(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" === Mz(zD) ? zD : String(zD)
    }

    function Tz(DD, zD) {
      return Tz = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, Tz(DD, zD)
    }

    function bz(DD) {
      var zD = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (DD) {
          return !1
        }
      }();
      return function() {
        var wD, pD = Sz(DD);
        if (zD) {
          var sD = Sz(this).constructor;
          wD = Reflect.construct(pD, arguments, sD)
        } else wD = pD.apply(this, arguments);
        return jz(this, wD)
      }
    }

    function jz(DD, zD) {
      if (zD && ("object" === Mz(zD) || "function" === typeof zD)) return zD;
      if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
      return dz(DD)
    }

    function dz(DD) {
      if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return DD
    }

    function Sz(DD) {
      return Sz = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, Sz(DD)
    }
    var iz = function(DD) {
      ! function(DD, zD) {
        if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(zD && zD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), zD && Tz(DD, zD)
      }(rD, DD);
      var zD, wD, sD, KD = bz(rD);

      function rD(DD, zD) {
        var wD;
        ! function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, rD);
        var pD = (wD = KD.call(this, DD, zD)).props,
          sD = pD.isActive,
          LD = pD.attributeName,
          cD = pD.from,
          gD = pD.to,
          RD = pD.steps,
          AD = pD.children,
          UD = pD.duration;
        if (wD.handleStyleChange = wD.handleStyleChange.bind(dz(wD)), wD.changeStyle = wD.changeStyle.bind(dz(wD)), !sD || UD <= 0) return wD.state = {
          style: {}
        }, "function" === typeof AD && (wD.state = {
          style: gD
        }), jz(wD);
        if (RD && RD.length) wD.state = {
          style: RD[0].style
        };
        else if (cD) {
          if ("function" === typeof AD) return wD.state = {
            style: cD
          }, jz(wD);
          wD.state = {
            style: LD ? Pz({}, LD, cD) : cD
          }
        } else wD.state = {
          style: {}
        };
        return wD
      }
      return zD = rD, (wD = [{
        key: "componentDidMount",
        value: function() {
          var DD = this.props,
            zD = DD.isActive,
            wD = DD.canBegin;
          this.mounted = !0, zD && wD && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(DD) {
          var zD = this.props,
            wD = zD.isActive,
            pD = zD.canBegin,
            sD = zD.attributeName,
            KD = zD.shouldReAnimate,
            rD = zD.to,
            LD = zD.from,
            cD = this.state.style;
          if (pD)
            if (wD) {
              if (!(lD(DD.to, rD) && DD.canBegin && DD.isActive)) {
                var gD = !DD.canBegin || !DD.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var RD = gD || KD ? LD : DD.to;
                if (this.state && cD) {
                  var AD = {
                    style: sD ? Pz({}, sD, RD) : RD
                  };
                  (sD && cD[sD] !== RD || !sD && cD !== RD) && this.setState(AD)
                }
                this.runAnimation(Vz(Vz({}, this.props), {}, {
                  from: RD,
                  Jf: 0
                }))
              }
            } else {
              var UD = {
                style: sD ? Pz({}, sD, rD) : rD
              };
              this.state && cD && (sD && cD[sD] !== rD || !sD && cD !== rD) && this.setState(UD)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var DD = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), DD && DD()
        }
      }, {
        key: "handleStyleChange",
        value: function(DD) {
          this.changeStyle(DD)
        }
      }, {
        key: "changeStyle",
        value: function(DD) {
          this.mounted && this.setState({
            style: DD
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(DD) {
          var zD = this,
            wD = DD.from,
            pD = DD.to,
            sD = DD.duration,
            KD = DD.easing,
            rD = DD.Jf,
            LD = DD.onAnimationEnd,
            cD = DD.onAnimationStart,
            gD = nz(wD, pD, rz(KD), sD, this.changeStyle);
          this.manager.start([cD, rD, function() {
            zD.stopJSAnimation = gD()
          }, sD, LD])
        }
      }, {
        key: "runStepAnimation",
        value: function(DD) {
          var zD = this,
            wD = DD.steps,
            pD = DD.Jf,
            sD = DD.onAnimationStart,
            KD = wD[0],
            rD = KD.style,
            LD = KD.duration,
            cD = void 0 === LD ? 0 : LD;
          return this.manager.start([sD].concat(Ez(wD.reduce((function(DD, pD, sD) {
            if (0 === sD) return DD;
            var KD = pD.duration,
              rD = pD.easing,
              LD = void 0 === rD ? "ease" : rD,
              cD = pD.style,
              gD = pD.properties,
              RD = pD.onAnimationEnd,
              AD = sD > 0 ? wD[sD - 1] : pD,
              UD = gD || Object.keys(cD);
            if ("function" === typeof LD || "spring" === LD) return [].concat(Ez(DD), [zD.runJSAnimation.bind(zD, {
              from: AD.style,
              to: cD,
              duration: KD,
              easing: LD
            }), KD]);
            var fD = FD(UD, KD, LD),
              ID = Vz(Vz(Vz({}, AD.style), cD), {}, {
                transition: fD
              });
            return [].concat(Ez(DD), [ID, KD, RD]).filter(vD)
          }), [rD, Math.max(cD, pD)])), [DD.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(DD) {
          this.manager || (this.manager = mD());
          var zD = DD.Jf,
            wD = DD.duration,
            pD = DD.attributeName,
            sD = DD.to,
            KD = DD.easing,
            rD = DD.onAnimationStart,
            LD = DD.onAnimationEnd,
            cD = DD.steps,
            gD = DD.children,
            RD = this.manager;
          if (this.unSubscribe = RD.subscribe(this.handleStyleChange), "function" !== typeof KD && "function" !== typeof gD && "spring" !== KD)
            if (cD.length > 1) this.runStepAnimation(DD);
            else {
              var AD = pD ? Pz({}, pD, sD) : sD,
                UD = FD(Object.keys(AD), wD, KD);
              RD.start([rD, zD, Vz(Vz({}, AD), {}, {
                transition: UD
              }), wD, LD])
            }
          else this.runJSAnimation(DD)
        }
      }, {
        key: "render",
        value: function() {
          var DD = this.props,
            zD = DD.children,
            wD = (DD.Jf, DD.duration),
            sD = (DD.attributeName, DD.easing, DD.isActive),
            KD = (DD.steps, DD.from, DD.to, DD.canBegin, DD.onAnimationEnd, DD.shouldReAnimate, DD.onAnimationReStart, Jz(DD, Oz)),
            rD = pD.Children.count(zD),
            LD = this.state.style;
          if ("function" === typeof zD) return zD(LD);
          if (!sD || 0 === rD || wD <= 0) return zD;
          var cD = function(DD) {
            var zD = DD.props,
              wD = zD.style,
              sD = void 0 === wD ? {} : wD,
              rD = zD.className;
            return (0, pD.cloneElement)(DD, Vz(Vz({}, KD), {}, {
              style: Vz(Vz({}, sD), LD),
              className: rD
            }))
          };
          return 1 === rD ? cD(pD.Children.only(zD)) : pD.createElement("div", null, pD.Children.map(zD, (function(DD) {
            return cD(DD)
          })))
        }
      }]) && Cz(zD.prototype, wD), sD && Cz(zD, sD), Object.defineProperty(zD, "prototype", {
        writable: !1
      }), rD
    }(pD.PureComponent);
    iz.displayName = "Animate", iz.defaultProps = {
      Jf: 0,
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
    }, iz.propTypes = {
      from: KD().oneOfType([KD().object, KD().string]),
      to: KD().oneOfType([KD().object, KD().string]),
      attributeName: KD().string,
      duration: KD().number,
      Jf: KD().number,
      easing: KD().oneOfType([KD().string, KD().func]),
      steps: KD().arrayOf(KD().shape({
        duration: KD().number.isRequired,
        style: KD().object.isRequired,
        easing: KD().oneOfType([KD().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), KD().func]),
        properties: KD().arrayOf("string"),
        onAnimationEnd: KD().func
      })),
      children: KD().oneOfType([KD().node, KD().func]),
      isActive: KD().bool,
      canBegin: KD().bool,
      onAnimationEnd: KD().func,
      shouldReAnimate: KD().bool,
      onAnimationStart: KD().func,
      onAnimationReStart: KD().func
    };
    const lz = iz
  },
  6414: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => yD
    });
    var pD, sD = wD(58),
      KD = wD(5121),
      rD = wD(6158),
      LD = wD(5333),
      cD = wD.n(LD),
      gD = wD(6206),
      RD = wD.n(gD),
      AD = wD(5478),
      UD = wD.n(AD),
      fD = wD(5241),
      ID = wD.n(fD),
      BD = wD(6239),
      GD = wD.n(BD),
      hD = wD(6412),
      nD = wD(6146),
      MD = wD(6004),
      OD = wD(6327),
      JD = wD(6012),
      ED = wD(5223),
      QD = wD(6177),
      XD = wD(5484),
      VD = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      PD = ["key"];

    function CD(DD) {
      return CD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, CD(DD)
    }

    function xD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function TD() {
      return TD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, TD.apply(this, arguments)
    }

    function bD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function jD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? bD(Object(wD), !0).forEach((function(zD) {
          ND(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : bD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function dD(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, ZD(pD.key), pD)
      }
    }

    function SD(DD, zD, wD) {
      return zD = lD(zD),
        function(DD, zD) {
          if (zD && ("object" === CD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, iD() ? Reflect.construct(zD, wD || [], lD(DD).constructor) : zD.apply(DD, wD))
    }

    function iD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (iD = function() {
        return !!DD
      })()
    }

    function lD(DD) {
      return lD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, lD(DD)
    }

    function WD(DD, zD) {
      return WD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, WD(DD, zD)
    }

    function ND(DD, zD, wD) {
      return (zD = ZD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function ZD(DD) {
      var zD = function(DD, zD) {
        if ("object" != CD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != CD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == CD(zD) ? zD : zD + ""
    }
    var yD = function(DD) {
      function zD() {
        var DD;
        ! function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, zD);
        for (var wD = arguments.length, pD = new Array(wD), sD = 0; sD < wD; sD++) pD[sD] = arguments[sD];
        return ND(DD = SD(this, zD, [].concat(pD)), "state", {
          isAnimationFinished: !0
        }), ND(DD, "id", (0, ED.I)("recharts-area-")), ND(DD, "handleAnimationEnd", (function() {
          var zD = DD.props.onAnimationEnd;
          DD.setState({
            isAnimationFinished: !0
          }), cD()(zD) && zD()
        })), ND(DD, "handleAnimationStart", (function() {
          var zD = DD.props.onAnimationStart;
          DD.setState({
            isAnimationFinished: !1
          }), cD()(zD) && zD()
        })), DD
      }
      return function(DD, zD) {
        if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(zD && zD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), zD && WD(DD, zD)
      }(zD, DD), wD = zD, pD = [{
        key: "renderDots",
        value: function(DD, wD, pD) {
          var KD = this.props.isAnimationActive,
            rD = this.state.isAnimationFinished;
          if (KD && !rD) return null;
          var LD = this.props,
            cD = LD.dot,
            gD = LD.points,
            RD = LD.dataKey,
            AD = (0, XD.e)(this.props, !1),
            UD = (0, XD.e)(cD, !0),
            fD = gD.map((function(DD, wD) {
              var pD = jD(jD(jD({
                key: "dot-".concat(wD),
                r: 3
              }, AD), UD), {}, {
                index: wD,
                cx: DD.x,
                cy: DD.y,
                dataKey: RD,
                value: DD.value,
                payload: DD.payload,
                points: gD
              });
              return zD.renderDotItem(cD, pD)
            })),
            ID = {
              clipPath: DD ? "url(#clipPath-".concat(wD ? "" : "dots-").concat(pD, ")") : null
            };
          return sD.createElement(MD.c, TD({
            className: "recharts-area-dots"
          }, ID), fD)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(DD) {
          var zD = this.props,
            wD = zD.baseLine,
            pD = zD.points,
            KD = zD.strokeWidth,
            rD = pD[0].x,
            LD = pD[pD.length - 1].x,
            cD = DD * Math.abs(rD - LD),
            gD = RD()(pD.map((function(DD) {
              return DD.y || 0
            })));
          return (0, ED.y)(wD) && "number" === typeof wD ? gD = Math.max(wD, gD) : wD && Array.isArray(wD) && wD.length && (gD = Math.max(RD()(wD.map((function(DD) {
            return DD.y || 0
          }))), gD)), (0, ED.y)(gD) ? sD.createElement("rect", {
            x: rD < LD ? rD : rD - cD,
            y: 0,
            width: cD,
            height: Math.floor(gD + (KD ? parseInt("".concat(KD), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(DD) {
          var zD = this.props,
            wD = zD.baseLine,
            pD = zD.points,
            KD = zD.strokeWidth,
            rD = pD[0].y,
            LD = pD[pD.length - 1].y,
            cD = DD * Math.abs(rD - LD),
            gD = RD()(pD.map((function(DD) {
              return DD.x || 0
            })));
          return (0, ED.y)(wD) && "number" === typeof wD ? gD = Math.max(wD, gD) : wD && Array.isArray(wD) && wD.length && (gD = Math.max(RD()(wD.map((function(DD) {
            return DD.x || 0
          }))), gD)), (0, ED.y)(gD) ? sD.createElement("rect", {
            x: 0,
            y: rD < LD ? rD : rD - cD,
            width: gD + (KD ? parseInt("".concat(KD), 10) : 1),
            height: Math.floor(cD)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(DD) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(DD) : this.renderHorizontalRect(DD)
        }
      }, {
        key: "renderAreaStatically",
        value: function(DD, zD, wD, pD) {
          var KD = this.props,
            rD = KD.layout,
            LD = KD.type,
            cD = KD.stroke,
            gD = KD.connectNulls,
            RD = KD.isRange,
            AD = (KD.ref, xD(KD, VD));
          return sD.createElement(MD.c, {
            clipPath: wD ? "url(#clipPath-".concat(pD, ")") : null
          }, sD.createElement(hD.e, TD({}, (0, XD.e)(AD, !0), {
            points: DD,
            connectNulls: gD,
            type: LD,
            baseLine: zD,
            layout: rD,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== cD && sD.createElement(hD.e, TD({}, (0, XD.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: rD,
            type: LD,
            connectNulls: gD,
            fill: "none",
            points: DD
          })), "none" !== cD && RD && sD.createElement(hD.e, TD({}, (0, XD.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: rD,
            type: LD,
            connectNulls: gD,
            fill: "none",
            points: zD
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(DD, zD) {
          var wD = this,
            pD = this.props,
            KD = pD.points,
            LD = pD.baseLine,
            cD = pD.isAnimationActive,
            gD = pD.animationBegin,
            RD = pD.animationDuration,
            AD = pD.animationEasing,
            fD = pD.animationId,
            BD = this.state,
            GD = BD.prevPoints,
            hD = BD.prevBaseLine;
          return sD.createElement(rD.e, {
            Jf: gD,
            duration: RD,
            isActive: cD,
            easing: AD,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(fD),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(pD) {
            var rD = pD.t;
            if (GD) {
              var cD, gD = GD.length / KD.length,
                RD = KD.map((function(DD, zD) {
                  var wD = Math.floor(zD * gD);
                  if (GD[wD]) {
                    var pD = GD[wD],
                      sD = (0, ED.q)(pD.x, DD.x),
                      KD = (0, ED.q)(pD.y, DD.y);
                    return jD(jD({}, DD), {}, {
                      x: sD(rD),
                      y: KD(rD)
                    })
                  }
                  return DD
                }));
              return cD = (0, ED.y)(LD) && "number" === typeof LD ? (0, ED.q)(hD, LD)(rD) : UD()(LD) || ID()(LD) ? (0, ED.q)(hD, 0)(rD) : LD.map((function(DD, zD) {
                var wD = Math.floor(zD * gD);
                if (hD[wD]) {
                  var pD = hD[wD],
                    sD = (0, ED.q)(pD.x, DD.x),
                    KD = (0, ED.q)(pD.y, DD.y);
                  return jD(jD({}, DD), {}, {
                    x: sD(rD),
                    y: KD(rD)
                  })
                }
                return DD
              })), wD.renderAreaStatically(RD, cD, DD, zD)
            }
            return sD.createElement(MD.c, null, sD.createElement("defs", null, sD.createElement("clipPath", {
              id: "animationClipPath-".concat(zD)
            }, wD.renderClipRect(rD))), sD.createElement(MD.c, {
              clipPath: "url(#animationClipPath-".concat(zD, ")")
            }, wD.renderAreaStatically(KD, LD, DD, zD)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(DD, zD) {
          var wD = this.props,
            pD = wD.points,
            sD = wD.baseLine,
            KD = wD.isAnimationActive,
            rD = this.state,
            LD = rD.prevPoints,
            cD = rD.prevBaseLine,
            gD = rD.totalLength;
          return KD && pD && pD.length && (!LD && gD > 0 || !GD()(LD, pD) || !GD()(cD, sD)) ? this.renderAreaWithAnimation(DD, zD) : this.renderAreaStatically(pD, sD, DD, zD)
        }
      }, {
        key: "render",
        value: function() {
          var DD, zD = this.props,
            wD = zD.hide,
            pD = zD.dot,
            rD = zD.points,
            LD = zD.className,
            cD = zD.top,
            gD = zD.left,
            RD = zD.xAxis,
            AD = zD.yAxis,
            fD = zD.width,
            ID = zD.height,
            BD = zD.isAnimationActive,
            GD = zD.id;
          if (wD || !rD || !rD.length) return null;
          var hD = this.state.isAnimationFinished,
            nD = 1 === rD.length,
            JD = (0, KD.b)("recharts-area", LD),
            ED = RD && RD.allowDataOverflow,
            QD = AD && AD.allowDataOverflow,
            VD = ED || QD,
            PD = UD()(GD) ? this.id : GD,
            CD = null !== (DD = (0, XD.e)(pD, !1)) && void 0 !== DD ? DD : {
              r: 3,
              strokeWidth: 2
            },
            xD = CD.r,
            TD = void 0 === xD ? 3 : xD,
            bD = CD.strokeWidth,
            jD = void 0 === bD ? 2 : bD,
            dD = ((0, XD.o)(pD) ? pD : {}).clipDot,
            SD = void 0 === dD || dD,
            iD = 2 * TD + jD;
          return sD.createElement(MD.c, {
            className: JD
          }, ED || QD ? sD.createElement("defs", null, sD.createElement("clipPath", {
            id: "clipPath-".concat(PD)
          }, sD.createElement("rect", {
            x: ED ? gD : gD - fD / 2,
            y: QD ? cD : cD - ID / 2,
            width: ED ? fD : 2 * fD,
            height: QD ? ID : 2 * ID
          })), !SD && sD.createElement("clipPath", {
            id: "clipPath-dots-".concat(PD)
          }, sD.createElement("rect", {
            x: gD - iD / 2,
            y: cD - iD / 2,
            width: fD + iD,
            height: ID + iD
          }))) : null, nD ? null : this.renderArea(VD, PD), (pD || nD) && this.renderDots(VD, SD, PD), (!BD || hD) && OD.d.renderCallByParent(this.props, rD))
        }
      }], LD = [{
        key: "getDerivedStateFromProps",
        value: function(DD, zD) {
          return DD.animationId !== zD.prevAnimationId ? {
            prevAnimationId: DD.animationId,
            curPoints: DD.points,
            curBaseLine: DD.baseLine,
            prevPoints: zD.curPoints,
            prevBaseLine: zD.curBaseLine
          } : DD.points !== zD.curPoints || DD.baseLine !== zD.curBaseLine ? {
            curPoints: DD.points,
            curBaseLine: DD.baseLine
          } : null
        }
      }], pD && dD(wD.prototype, pD), LD && dD(wD, LD), Object.defineProperty(wD, "prototype", {
        writable: !1
      }), wD;
      var wD, pD, LD
    }(sD.PureComponent);
    pD = yD, ND(yD, "displayName", "Area"), ND(yD, "defaultProps", {
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
      isAnimationActive: !JD.c.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), ND(yD, "getBaseValue", (function(DD, zD, wD, pD) {
      var sD = DD.layout,
        KD = DD.baseValue,
        rD = zD.props.baseValue,
        LD = null !== rD && void 0 !== rD ? rD : KD;
      if ((0, ED.y)(LD) && "number" === typeof LD) return LD;
      var cD = "horizontal" === sD ? pD : wD,
        gD = cD.scale.domain();
      if ("number" === cD.type) {
        var RD = Math.max(gD[0], gD[1]),
          AD = Math.min(gD[0], gD[1]);
        return "dataMin" === LD ? AD : "dataMax" === LD || RD < 0 ? RD : Math.max(Math.min(gD[0], gD[1]), 0)
      }
      return "dataMin" === LD ? gD[0] : "dataMax" === LD ? gD[1] : gD[0]
    })), ND(yD, "getComposedData", (function(DD) {
      var zD, wD = DD.props,
        sD = DD.item,
        KD = DD.xAxis,
        rD = DD.yAxis,
        LD = DD.xAxisTicks,
        cD = DD.yAxisTicks,
        gD = DD.bandSize,
        RD = DD.dataKey,
        AD = DD.stackedData,
        UD = DD.dataStartIndex,
        fD = DD.displayedData,
        ID = DD.offset,
        BD = wD.layout,
        GD = AD && AD.length,
        hD = pD.getBaseValue(wD, sD, KD, rD),
        nD = "horizontal" === BD,
        MD = !1,
        OD = fD.map((function(DD, zD) {
          var wD;
          GD ? wD = AD[UD + zD] : (wD = (0, QD.Z)(DD, RD), Array.isArray(wD) ? MD = !0 : wD = [hD, wD]);
          var pD = null == wD[1] || GD && null == (0, QD.Z)(DD, RD);
          return nD ? {
            x: (0, QD.A)({
              axis: KD,
              ticks: LD,
              bandSize: gD,
              entry: DD,
              index: zD
            }),
            y: pD ? null : rD.scale(wD[1]),
            value: wD,
            payload: DD
          } : {
            x: pD ? null : KD.scale(wD[1]),
            y: (0, QD.A)({
              axis: rD,
              ticks: cD,
              bandSize: gD,
              entry: DD,
              index: zD
            }),
            value: wD,
            payload: DD
          }
        }));
      return zD = GD || MD ? OD.map((function(DD) {
        var zD = Array.isArray(DD.value) ? DD.value[0] : null;
        return nD ? {
          x: DD.x,
          y: null != zD && null != DD.y ? rD.scale(zD) : null
        } : {
          x: null != zD ? KD.scale(zD) : null,
          y: DD.y
        }
      })) : nD ? rD.scale(hD) : KD.scale(hD), jD({
        points: OD,
        baseLine: zD,
        layout: BD,
        isRange: MD
      }, ID)
    })), ND(yD, "renderDotItem", (function(DD, zD) {
      var wD;
      if (sD.isValidElement(DD)) wD = sD.cloneElement(DD, zD);
      else if (cD()(DD)) wD = DD(zD);
      else {
        var pD = (0, KD.b)("recharts-area-dot", "boolean" !== typeof DD ? DD.className : ""),
          rD = zD.key,
          LD = xD(zD, PD);
        wD = sD.createElement(nD.e, TD({}, LD, {
          key: rD,
          className: pD
        }))
      }
      return wD
    }))
  },
  6318: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => aD
    });
    var pD = wD(58),
      sD = wD(5121),
      KD = wD(6158),
      rD = wD(6239),
      LD = wD.n(rD),
      cD = wD(5478),
      gD = wD.n(cD),
      RD = wD(6004),
      AD = wD(6248),
      UD = wD(6324),
      fD = wD(6327),
      ID = wD(5223),
      BD = wD(5484),
      GD = wD(6012),
      hD = wD(6177),
      nD = wD(5505),
      MD = wD(5995),
      OD = wD(6337),
      JD = ["x", "y"];

    function ED(DD) {
      return ED = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, ED(DD)
    }

    function QD() {
      return QD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, QD.apply(this, arguments)
    }

    function XD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function VD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? XD(Object(wD), !0).forEach((function(zD) {
          PD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : XD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function PD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != ED(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != ED(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == ED(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function CD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function xD(DD, zD) {
      var wD = DD.x,
        pD = DD.y,
        sD = CD(DD, JD),
        KD = "".concat(wD),
        rD = parseInt(KD, 10),
        LD = "".concat(pD),
        cD = parseInt(LD, 10),
        gD = "".concat(zD.height || sD.height),
        RD = parseInt(gD, 10),
        AD = "".concat(zD.width || sD.width),
        UD = parseInt(AD, 10);
      return VD(VD(VD(VD(VD({}, zD), sD), rD ? {
        x: rD
      } : {}), cD ? {
        y: cD
      } : {}), {}, {
        height: RD,
        width: UD,
        name: zD.name,
        radius: zD.radius
      })
    }

    function TD(DD) {
      return pD.createElement(OD.c, QD({
        shapeType: "rectangle",
        propTransformer: xD,
        activeClassName: "recharts-active-bar"
      }, DD))
    }
    var bD, jD = ["value", "background"];

    function dD(DD) {
      return dD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, dD(DD)
    }

    function SD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function iD() {
      return iD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, iD.apply(this, arguments)
    }

    function lD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function WD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? lD(Object(wD), !0).forEach((function(zD) {
          eD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : lD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function ND(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, oD(pD.key), pD)
      }
    }

    function ZD(DD, zD, wD) {
      return zD = kD(zD),
        function(DD, zD) {
          if (zD && ("object" === dD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, yD() ? Reflect.construct(zD, wD || [], kD(DD).constructor) : zD.apply(DD, wD))
    }

    function yD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (yD = function() {
        return !!DD
      })()
    }

    function kD(DD) {
      return kD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, kD(DD)
    }

    function mD(DD, zD) {
      return mD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, mD(DD, zD)
    }

    function eD(DD, zD, wD) {
      return (zD = oD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function oD(DD) {
      var zD = function(DD, zD) {
        if ("object" != dD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != dD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == dD(zD) ? zD : zD + ""
    }
    var aD = function(DD) {
      function zD() {
        var DD;
        ! function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, zD);
        for (var wD = arguments.length, pD = new Array(wD), sD = 0; sD < wD; sD++) pD[sD] = arguments[sD];
        return eD(DD = ZD(this, zD, [].concat(pD)), "state", {
          isAnimationFinished: !1
        }), eD(DD, "id", (0, ID.I)("recharts-bar-")), eD(DD, "handleAnimationEnd", (function() {
          var zD = DD.props.onAnimationEnd;
          DD.setState({
            isAnimationFinished: !0
          }), zD && zD()
        })), eD(DD, "handleAnimationStart", (function() {
          var zD = DD.props.onAnimationStart;
          DD.setState({
            isAnimationFinished: !1
          }), zD && zD()
        })), DD
      }
      return function(DD, zD) {
        if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(zD && zD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), zD && mD(DD, zD)
      }(zD, DD), wD = zD, rD = [{
        key: "renderRectanglesStatically",
        value: function(DD) {
          var zD = this,
            wD = this.props,
            sD = wD.shape,
            KD = wD.dataKey,
            rD = wD.activeIndex,
            LD = wD.activeBar,
            cD = (0, BD.e)(this.props, !1);
          return DD && DD.map((function(DD, wD) {
            var gD = wD === rD,
              AD = gD ? LD : sD,
              UD = WD(WD(WD({}, cD), DD), {}, {
                isActive: gD,
                option: AD,
                index: wD,
                dataKey: KD,
                onAnimationStart: zD.handleAnimationStart,
                onAnimationEnd: zD.handleAnimationEnd
              });
            return pD.createElement(RD.c, iD({
              className: "recharts-bar-rectangle"
            }, (0, nD.j)(zD.props, DD, wD), {
              key: "rectangle-".concat(null === DD || void 0 === DD ? void 0 : DD.x, "-").concat(null === DD || void 0 === DD ? void 0 : DD.y, "-").concat(null === DD || void 0 === DD ? void 0 : DD.value, "-").concat(wD)
            }), pD.createElement(TD, UD))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var DD = this,
            zD = this.props,
            wD = zD.data,
            sD = zD.layout,
            rD = zD.isAnimationActive,
            LD = zD.animationBegin,
            cD = zD.animationDuration,
            gD = zD.animationEasing,
            AD = zD.animationId,
            UD = this.state.prevData;
          return pD.createElement(KD.e, {
            Jf: LD,
            duration: cD,
            isActive: rD,
            easing: gD,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(AD),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(zD) {
            var KD = zD.t,
              rD = wD.map((function(DD, zD) {
                var wD = UD && UD[zD];
                if (wD) {
                  var pD = (0, ID.q)(wD.x, DD.x),
                    rD = (0, ID.q)(wD.y, DD.y),
                    LD = (0, ID.q)(wD.width, DD.width),
                    cD = (0, ID.q)(wD.height, DD.height);
                  return WD(WD({}, DD), {}, {
                    x: pD(KD),
                    y: rD(KD),
                    width: LD(KD),
                    height: cD(KD)
                  })
                }
                if ("horizontal" === sD) {
                  var gD = (0, ID.q)(0, DD.height)(KD);
                  return WD(WD({}, DD), {}, {
                    y: DD.y + DD.height - gD,
                    height: gD
                  })
                }
                var RD = (0, ID.q)(0, DD.width)(KD);
                return WD(WD({}, DD), {}, {
                  width: RD
                })
              }));
            return pD.createElement(RD.c, null, DD.renderRectanglesStatically(rD))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var DD = this.props,
            zD = DD.data,
            wD = DD.isAnimationActive,
            pD = this.state.prevData;
          return !(wD && zD && zD.length) || pD && LD()(pD, zD) ? this.renderRectanglesStatically(zD) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var DD = this,
            zD = this.props,
            wD = zD.data,
            sD = zD.dataKey,
            KD = zD.activeIndex,
            rD = (0, BD.e)(this.props.background, !1);
          return wD.map((function(zD, wD) {
            zD.value;
            var LD = zD.background,
              cD = SD(zD, jD);
            if (!LD) return null;
            var gD = WD(WD(WD(WD(WD({}, cD), {}, {
              fill: "#eee"
            }, LD), rD), (0, nD.j)(DD.props, zD, wD)), {}, {
              onAnimationStart: DD.handleAnimationStart,
              onAnimationEnd: DD.handleAnimationEnd,
              dataKey: sD,
              index: wD,
              className: "recharts-bar-background-rectangle"
            });
            return pD.createElement(TD, iD({
              key: "background-bar-".concat(wD),
              option: DD.props.background,
              isActive: wD === KD
            }, gD))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(DD, zD) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var wD = this.props,
            sD = wD.data,
            KD = wD.xAxis,
            rD = wD.yAxis,
            LD = wD.layout,
            cD = wD.children,
            gD = (0, BD.g)(cD, AD.d);
          if (!gD) return null;
          var UD = "vertical" === LD ? sD[0].height / 2 : sD[0].width / 2,
            fD = function(DD, zD) {
              var wD = Array.isArray(DD.value) ? DD.value[1] : DD.value;
              return {
                x: DD.x,
                y: DD.y,
                value: wD,
                errorVal: (0, hD.Z)(DD, zD)
              }
            },
            ID = {
              clipPath: DD ? "url(#clipPath-".concat(zD, ")") : null
            };
          return pD.createElement(RD.c, ID, gD.map((function(DD) {
            return pD.cloneElement(DD, {
              key: "error-bar-".concat(zD, "-").concat(DD.props.dataKey),
              data: sD,
              xAxis: KD,
              yAxis: rD,
              layout: LD,
              offset: UD,
              dataPointFormatter: fD
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var DD = this.props,
            zD = DD.hide,
            wD = DD.data,
            KD = DD.className,
            rD = DD.xAxis,
            LD = DD.yAxis,
            cD = DD.left,
            AD = DD.top,
            UD = DD.width,
            ID = DD.height,
            BD = DD.isAnimationActive,
            GD = DD.background,
            hD = DD.id;
          if (zD || !wD || !wD.length) return null;
          var nD = this.state.isAnimationFinished,
            MD = (0, sD.b)("recharts-bar", KD),
            OD = rD && rD.allowDataOverflow,
            JD = LD && LD.allowDataOverflow,
            ED = OD || JD,
            QD = gD()(hD) ? this.id : hD;
          return pD.createElement(RD.c, {
            className: MD
          }, OD || JD ? pD.createElement("defs", null, pD.createElement("clipPath", {
            id: "clipPath-".concat(QD)
          }, pD.createElement("rect", {
            x: OD ? cD : cD - UD / 2,
            y: JD ? AD : AD - ID / 2,
            width: OD ? UD : 2 * UD,
            height: JD ? ID : 2 * ID
          }))) : null, pD.createElement(RD.c, {
            className: "recharts-bar-rectangles",
            clipPath: ED ? "url(#clipPath-".concat(QD, ")") : null
          }, GD ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(ED, QD), (!BD || nD) && fD.d.renderCallByParent(this.props, wD))
        }
      }], cD = [{
        key: "getDerivedStateFromProps",
        value: function(DD, zD) {
          return DD.animationId !== zD.prevAnimationId ? {
            prevAnimationId: DD.animationId,
            curData: DD.data,
            prevData: zD.curData
          } : DD.data !== zD.curData ? {
            curData: DD.data
          } : null
        }
      }], rD && ND(wD.prototype, rD), cD && ND(wD, cD), Object.defineProperty(wD, "prototype", {
        writable: !1
      }), wD;
      var wD, rD, cD
    }(pD.PureComponent);
    bD = aD, eD(aD, "displayName", "Bar"), eD(aD, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !GD.c.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), eD(aD, "getComposedData", (function(DD) {
      var zD = DD.props,
        wD = DD.item,
        pD = DD.barPosition,
        sD = DD.bandSize,
        KD = DD.xAxis,
        rD = DD.yAxis,
        LD = DD.xAxisTicks,
        cD = DD.yAxisTicks,
        gD = DD.stackedData,
        RD = DD.dataStartIndex,
        AD = DD.displayedData,
        fD = DD.offset,
        GD = (0, hD.l)(pD, wD);
      if (!GD) return null;
      var nD = zD.layout,
        OD = wD.type.defaultProps,
        JD = void 0 !== OD ? WD(WD({}, OD), wD.props) : wD.props,
        ED = JD.dataKey,
        QD = JD.children,
        XD = JD.minPointSize,
        VD = "horizontal" === nD ? rD : KD,
        PD = gD ? VD.scale.domain() : null,
        CD = (0, hD.w)({
          numericAxis: VD
        }),
        xD = (0, BD.g)(QD, UD.c),
        TD = AD.map((function(DD, zD) {
          var pD, AD, UD, fD, BD, OD;
          gD ? pD = (0, hD.lb)(gD[RD + zD], PD) : (pD = (0, hD.Z)(DD, ED), Array.isArray(pD) || (pD = [CD, pD]));
          var JD = function(DD) {
            var zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(wD, pD) {
              if ("number" === typeof DD) return DD;
              var sD = (0, ID.y)(wD) || (0, ID.u)(wD);
              return sD ? DD(wD, pD) : (sD || (0, MD.c)(!1), zD)
            }
          }(XD, bD.defaultProps.minPointSize)(pD[1], zD);
          if ("horizontal" === nD) {
            var QD, VD = [rD.scale(pD[0]), rD.scale(pD[1])],
              TD = VD[0],
              jD = VD[1];
            AD = (0, hD.x)({
              axis: KD,
              ticks: LD,
              bandSize: sD,
              offset: GD.offset,
              entry: DD,
              index: zD
            }), UD = null !== (QD = null !== jD && void 0 !== jD ? jD : TD) && void 0 !== QD ? QD : void 0, fD = GD.size;
            var dD = TD - jD;
            if (BD = Number.isNaN(dD) ? 0 : dD, OD = {
                x: AD,
                y: rD.y,
                width: fD,
                height: rD.height
              }, Math.abs(JD) > 0 && Math.abs(BD) < Math.abs(JD)) {
              var SD = (0, ID.F)(BD || JD) * (Math.abs(JD) - Math.abs(BD));
              UD -= SD, BD += SD
            }
          } else {
            var iD = [KD.scale(pD[0]), KD.scale(pD[1])],
              lD = iD[0],
              ND = iD[1];
            if (AD = lD, UD = (0, hD.x)({
                axis: rD,
                ticks: cD,
                bandSize: sD,
                offset: GD.offset,
                entry: DD,
                index: zD
              }), fD = ND - lD, BD = GD.size, OD = {
                x: KD.x,
                y: UD,
                width: KD.width,
                height: BD
              }, Math.abs(JD) > 0 && Math.abs(fD) < Math.abs(JD)) fD += (0, ID.F)(fD || JD) * (Math.abs(JD) - Math.abs(fD))
          }
          return WD(WD(WD({}, DD), {}, {
            x: AD,
            y: UD,
            width: fD,
            height: BD,
            value: gD ? pD : pD[1],
            payload: DD,
            background: OD
          }, xD && xD[zD] && xD[zD].props), {}, {
            tooltipPayload: [(0, hD.X)(wD, DD)],
            tooltipPosition: {
              x: AD + fD / 2,
              y: UD + BD / 2
            }
          })
        }));
      return WD({
        data: TD,
        layout: nD
      }, fD)
    }))
  },
  6428: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => dD
    });
    var pD = wD(58),
      sD = wD(5333),
      KD = wD.n(sD),
      rD = wD(5254),
      LD = wD.n(rD),
      cD = wD(5121),
      gD = wD(5500),
      RD = wD(6004),
      AD = wD(6166),
      UD = wD(6265),
      fD = wD(5223),
      ID = wD(5505),
      BD = wD(5484),
      GD = wD(6436),
      hD = ["viewBox"],
      nD = ["viewBox"],
      MD = ["ticks"];

    function OD(DD) {
      return OD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, OD(DD)
    }

    function JD() {
      return JD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, JD.apply(this, arguments)
    }

    function ED(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function QD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? ED(Object(wD), !0).forEach((function(zD) {
          bD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : ED(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function XD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function VD(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, jD(pD.key), pD)
      }
    }

    function PD(DD, zD, wD) {
      return zD = xD(zD),
        function(DD, zD) {
          if (zD && ("object" === OD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, CD() ? Reflect.construct(zD, wD || [], xD(DD).constructor) : zD.apply(DD, wD))
    }

    function CD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (CD = function() {
        return !!DD
      })()
    }

    function xD(DD) {
      return xD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, xD(DD)
    }

    function TD(DD, zD) {
      return TD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, TD(DD, zD)
    }

    function bD(DD, zD, wD) {
      return (zD = jD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function jD(DD) {
      var zD = function(DD, zD) {
        if ("object" != OD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != OD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == OD(zD) ? zD : zD + ""
    }
    var dD = function(DD) {
      function zD(DD) {
        var wD;
        return function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, zD), (wD = PD(this, zD, [DD])).state = {
          fontSize: "",
          letterSpacing: ""
        }, wD
      }
      return function(DD, zD) {
        if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(zD && zD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), zD && TD(DD, zD)
      }(zD, DD), wD = zD, rD = [{
        key: "renderTickItem",
        value: function(DD, zD, wD) {
          var sD = (0, cD.b)(zD.className, "recharts-cartesian-axis-tick-value");
          return pD.isValidElement(DD) ? pD.cloneElement(DD, QD(QD({}, zD), {}, {
            className: sD
          })) : KD()(DD) ? DD(QD(QD({}, zD), {}, {
            className: sD
          })) : pD.createElement(AD.d, JD({}, zD, {
            className: "recharts-cartesian-axis-tick-value"
          }), wD)
        }
      }], (sD = [{
        key: "shouldComponentUpdate",
        value: function(DD, zD) {
          var wD = DD.viewBox,
            pD = XD(DD, hD),
            sD = this.props,
            KD = sD.viewBox,
            rD = XD(sD, nD);
          return !(0, gD.d)(wD, KD) || !(0, gD.d)(pD, rD) || !(0, gD.d)(zD, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var DD = this.layerReference;
          if (DD) {
            var zD = DD.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            zD && this.setState({
              fontSize: window.getComputedStyle(zD).fontSize,
              letterSpacing: window.getComputedStyle(zD).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(DD) {
          var zD, wD, pD, sD, KD, rD, LD = this.props,
            cD = LD.x,
            gD = LD.y,
            RD = LD.width,
            AD = LD.height,
            UD = LD.orientation,
            ID = LD.tickSize,
            BD = LD.mirror,
            GD = LD.tickMargin,
            hD = BD ? -1 : 1,
            nD = DD.tickSize || ID,
            MD = (0, fD.y)(DD.tickCoord) ? DD.tickCoord : DD.coordinate;
          switch (UD) {
            case "top":
              zD = wD = DD.coordinate, rD = (pD = (sD = gD + +!BD * AD) - hD * nD) - hD * GD, KD = MD;
              break;
            case "left":
              pD = sD = DD.coordinate, KD = (zD = (wD = cD + +!BD * RD) - hD * nD) - hD * GD, rD = MD;
              break;
            case "right":
              pD = sD = DD.coordinate, KD = (zD = (wD = cD + +BD * RD) + hD * nD) + hD * GD, rD = MD;
              break;
            default:
              zD = wD = DD.coordinate, rD = (pD = (sD = gD + +BD * AD) + hD * nD) + hD * GD, KD = MD
          }
          return {
            line: {
              x1: zD,
              y1: pD,
              x2: wD,
              y2: sD
            },
            DU: {
              x: KD,
              y: rD
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var DD, zD = this.props,
            wD = zD.orientation,
            pD = zD.mirror;
          switch (wD) {
            case "left":
              DD = pD ? "start" : "end";
              break;
            case "right":
              DD = pD ? "end" : "start";
              break;
            default:
              DD = "middle"
          }
          return DD
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var DD = this.props,
            zD = DD.orientation,
            wD = DD.mirror,
            pD = "end";
          switch (zD) {
            case "left":
            case "right":
              pD = "middle";
              break;
            case "top":
              pD = wD ? "start" : "end";
              break;
            default:
              pD = wD ? "end" : "start"
          }
          return pD
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var DD = this.props,
            zD = DD.x,
            wD = DD.y,
            sD = DD.width,
            KD = DD.height,
            rD = DD.orientation,
            gD = DD.mirror,
            RD = DD.axisLine,
            AD = QD(QD(QD({}, (0, BD.e)(this.props, !1)), (0, BD.e)(RD, !1)), {}, {
              fill: "none"
            });
          if ("top" === rD || "bottom" === rD) {
            var UD = +("top" === rD && !gD || "bottom" === rD && gD);
            AD = QD(QD({}, AD), {}, {
              x1: zD,
              y1: wD + UD * KD,
              x2: zD + sD,
              y2: wD + UD * KD
            })
          } else {
            var fD = +("left" === rD && !gD || "right" === rD && gD);
            AD = QD(QD({}, AD), {}, {
              x1: zD + fD * sD,
              y1: wD,
              x2: zD + fD * sD,
              y2: wD + KD
            })
          }
          return pD.createElement("line", JD({}, AD, {
            className: (0, cD.b)("recharts-cartesian-axis-line", LD()(RD, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(DD, wD, sD) {
          var rD = this,
            gD = this.props,
            AD = gD.tickLine,
            UD = gD.stroke,
            fD = gD.DU,
            hD = gD.tickFormatter,
            nD = gD.unit,
            MD = (0, GD.d)(QD(QD({}, this.props), {}, {
              ticks: DD
            }), wD, sD),
            OD = this.getTickTextAnchor(),
            ED = this.getTickVerticalAnchor(),
            XD = (0, BD.e)(this.props, !1),
            VD = (0, BD.e)(fD, !1),
            PD = QD(QD({}, XD), {}, {
              fill: "none"
            }, (0, BD.e)(AD, !1)),
            CD = MD.map((function(DD, wD) {
              var sD = rD.getTickLineCoord(DD),
                gD = sD.line,
                BD = sD.DU,
                GD = QD(QD(QD(QD({
                  textAnchor: OD,
                  verticalAnchor: ED
                }, XD), {}, {
                  stroke: "none",
                  fill: UD
                }, VD), BD), {}, {
                  index: wD,
                  payload: DD,
                  visibleTicksCount: MD.length,
                  tickFormatter: hD
                });
              return pD.createElement(RD.c, JD({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(DD.value, "-").concat(DD.coordinate, "-").concat(DD.tickCoord)
              }, (0, ID.j)(rD.props, DD, wD)), AD && pD.createElement("line", JD({}, PD, gD, {
                className: (0, cD.b)("recharts-cartesian-axis-tick-line", LD()(AD, "className"))
              })), fD && zD.renderTickItem(fD, GD, "".concat(KD()(hD) ? hD(DD.value, wD) : DD.value).concat(nD || "")))
            }));
          return pD.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, CD)
        }
      }, {
        key: "render",
        value: function() {
          var DD = this,
            zD = this.props,
            wD = zD.axisLine,
            sD = zD.width,
            rD = zD.height,
            LD = zD.ticksGenerator,
            gD = zD.className;
          if (zD.hide) return null;
          var AD = this.props,
            fD = AD.ticks,
            ID = XD(AD, MD),
            BD = fD;
          return KD()(LD) && (BD = fD && fD.length > 0 ? LD(this.props) : LD(ID)), sD <= 0 || rD <= 0 || !BD || !BD.length ? null : pD.createElement(RD.c, {
            className: (0, cD.b)("recharts-cartesian-axis", gD),
            ref: function(zD) {
              DD.layerReference = zD
            }
          }, wD && this.renderAxisLine(), this.renderTicks(BD, this.state.fontSize, this.state.letterSpacing), UD.d.renderCallByParent(this.props))
        }
      }]) && VD(wD.prototype, sD), rD && VD(wD, rD), Object.defineProperty(wD, "prototype", {
        writable: !1
      }), wD;
      var wD, sD, rD
    }(pD.Component);
    bD(dD, "displayName", "CartesianAxis"), bD(dD, "defaultProps", {
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
      DU: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6445: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => bD
    });
    var pD = wD(58),
      sD = wD(5333),
      KD = wD.n(sD),
      rD = wD(5480),
      LD = wD(5223),
      cD = wD(5484),
      gD = wD(6177),
      RD = wD(6436),
      AD = wD(6428),
      UD = wD(6383),
      fD = ["x1", "y1", "x2", "y2", "key"],
      ID = ["offset"];

    function BD(DD) {
      return BD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, BD(DD)
    }

    function GD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function hD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? GD(Object(wD), !0).forEach((function(zD) {
          nD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : GD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function nD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != BD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != BD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == BD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function MD() {
      return MD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, MD.apply(this, arguments)
    }

    function OD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }
    var JD = function(DD) {
      var zD = DD.fill;
      if (!zD || "none" === zD) return null;
      var wD = DD.fillOpacity,
        sD = DD.x,
        KD = DD.y,
        rD = DD.width,
        LD = DD.height,
        cD = DD.ry;
      return pD.createElement("rect", {
        x: sD,
        y: KD,
        ry: cD,
        width: rD,
        height: LD,
        stroke: "none",
        fill: zD,
        fillOpacity: wD,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function ED(DD, zD) {
      var wD;
      if (pD.isValidElement(DD)) wD = pD.cloneElement(DD, zD);
      else if (KD()(DD)) wD = DD(zD);
      else {
        var sD = zD.x1,
          rD = zD.y1,
          LD = zD.x2,
          gD = zD.y2,
          RD = zD.key,
          AD = OD(zD, fD),
          UD = (0, cD.e)(AD, !1),
          BD = (UD.offset, OD(UD, ID));
        wD = pD.createElement("line", MD({}, BD, {
          x1: sD,
          y1: rD,
          x2: LD,
          y2: gD,
          fill: "none",
          key: RD
        }))
      }
      return wD
    }

    function QD(DD) {
      var zD = DD.x,
        wD = DD.width,
        sD = DD.horizontal,
        KD = void 0 === sD || sD,
        rD = DD.horizontalPoints;
      if (!KD || !rD || !rD.length) return null;
      var LD = rD.map((function(pD, sD) {
        var rD = hD(hD({}, DD), {}, {
          x1: zD,
          y1: pD,
          x2: zD + wD,
          y2: pD,
          key: "line-".concat(sD),
          index: sD
        });
        return ED(KD, rD)
      }));
      return pD.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, LD)
    }

    function XD(DD) {
      var zD = DD.y,
        wD = DD.height,
        sD = DD.vertical,
        KD = void 0 === sD || sD,
        rD = DD.verticalPoints;
      if (!KD || !rD || !rD.length) return null;
      var LD = rD.map((function(pD, sD) {
        var rD = hD(hD({}, DD), {}, {
          x1: pD,
          y1: zD,
          x2: pD,
          y2: zD + wD,
          key: "line-".concat(sD),
          index: sD
        });
        return ED(KD, rD)
      }));
      return pD.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, LD)
    }

    function VD(DD) {
      var zD = DD.horizontalFill,
        wD = DD.fillOpacity,
        sD = DD.x,
        KD = DD.y,
        rD = DD.width,
        LD = DD.height,
        cD = DD.horizontalPoints,
        gD = DD.horizontal;
      if (!(void 0 === gD || gD) || !zD || !zD.length) return null;
      var RD = cD.map((function(DD) {
        return Math.round(DD + KD - KD)
      })).sort((function(DD, zD) {
        return DD - zD
      }));
      KD !== RD[0] && RD.unshift(0);
      var AD = RD.map((function(DD, cD) {
        var gD = !RD[cD + 1] ? KD + LD - DD : RD[cD + 1] - DD;
        if (gD <= 0) return null;
        var AD = cD % zD.length;
        return pD.createElement("rect", {
          key: "react-".concat(cD),
          y: DD,
          x: sD,
          height: gD,
          width: rD,
          stroke: "none",
          fill: zD[AD],
          fillOpacity: wD,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return pD.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, AD)
    }

    function PD(DD) {
      var zD = DD.vertical,
        wD = void 0 === zD || zD,
        sD = DD.verticalFill,
        KD = DD.fillOpacity,
        rD = DD.x,
        LD = DD.y,
        cD = DD.width,
        gD = DD.height,
        RD = DD.verticalPoints;
      if (!wD || !sD || !sD.length) return null;
      var AD = RD.map((function(DD) {
        return Math.round(DD + rD - rD)
      })).sort((function(DD, zD) {
        return DD - zD
      }));
      rD !== AD[0] && AD.unshift(0);
      var UD = AD.map((function(DD, zD) {
        var wD = !AD[zD + 1] ? rD + cD - DD : AD[zD + 1] - DD;
        if (wD <= 0) return null;
        var RD = zD % sD.length;
        return pD.createElement("rect", {
          key: "react-".concat(zD),
          x: DD,
          y: LD,
          width: wD,
          height: gD,
          stroke: "none",
          fill: sD[RD],
          fillOpacity: KD,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return pD.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, UD)
    }
    var CD = function(DD, zD) {
        var wD = DD.xAxis,
          pD = DD.width,
          sD = DD.height,
          KD = DD.offset;
        return (0, gD.E)((0, RD.d)(hD(hD(hD({}, AD.b.defaultProps), wD), {}, {
          ticks: (0, gD.T)(wD, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: pD,
            height: sD
          }
        })), KD.left, KD.left + KD.width, zD)
      },
      xD = function(DD, zD) {
        var wD = DD.yAxis,
          pD = DD.width,
          sD = DD.height,
          KD = DD.offset;
        return (0, gD.E)((0, RD.d)(hD(hD(hD({}, AD.b.defaultProps), wD), {}, {
          ticks: (0, gD.T)(wD, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: pD,
            height: sD
          }
        })), KD.top, KD.top + KD.height, zD)
      },
      TD = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function bD(DD) {
      var zD, wD, sD, cD, gD, RD, AD = (0, UD.l)(),
        fD = (0, UD.h)(),
        ID = (0, UD.r)(),
        GD = hD(hD({}, DD), {}, {
          stroke: null !== (zD = DD.stroke) && void 0 !== zD ? zD : TD.stroke,
          fill: null !== (wD = DD.fill) && void 0 !== wD ? wD : TD.fill,
          horizontal: null !== (sD = DD.horizontal) && void 0 !== sD ? sD : TD.horizontal,
          horizontalFill: null !== (cD = DD.horizontalFill) && void 0 !== cD ? cD : TD.horizontalFill,
          vertical: null !== (gD = DD.vertical) && void 0 !== gD ? gD : TD.vertical,
          verticalFill: null !== (RD = DD.verticalFill) && void 0 !== RD ? RD : TD.verticalFill,
          x: (0, LD.y)(DD.x) ? DD.x : ID.left,
          y: (0, LD.y)(DD.y) ? DD.y : ID.top,
          width: (0, LD.y)(DD.width) ? DD.width : ID.width,
          height: (0, LD.y)(DD.height) ? DD.height : ID.height
        }),
        nD = GD.x,
        OD = GD.y,
        ED = GD.width,
        bD = GD.height,
        jD = GD.syncWithTicks,
        dD = GD.horizontalValues,
        SD = GD.verticalValues,
        iD = (0, UD.f)(),
        lD = (0, UD.B)();
      if (!(0, LD.y)(ED) || ED <= 0 || !(0, LD.y)(bD) || bD <= 0 || !(0, LD.y)(nD) || nD !== +nD || !(0, LD.y)(OD) || OD !== +OD) return null;
      var WD = GD.verticalCoordinatesGenerator || CD,
        ND = GD.horizontalCoordinatesGenerator || xD,
        ZD = GD.horizontalPoints,
        yD = GD.verticalPoints;
      if ((!ZD || !ZD.length) && KD()(ND)) {
        var kD = dD && dD.length,
          mD = ND({
            yAxis: lD ? hD(hD({}, lD), {}, {
              ticks: kD ? dD : lD.ticks
            }) : void 0,
            width: AD,
            height: fD,
            offset: ID
          }, !!kD || jD);
        (0, rD.d)(Array.isArray(mD), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(BD(mD), "]")), Array.isArray(mD) && (ZD = mD)
      }
      if ((!yD || !yD.length) && KD()(WD)) {
        var eD = SD && SD.length,
          oD = WD({
            xAxis: iD ? hD(hD({}, iD), {}, {
              ticks: eD ? SD : iD.ticks
            }) : void 0,
            width: AD,
            height: fD,
            offset: ID
          }, !!eD || jD);
        (0, rD.d)(Array.isArray(oD), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(BD(oD), "]")), Array.isArray(oD) && (yD = oD)
      }
      return pD.createElement("g", {
        className: "recharts-cartesian-grid"
      }, pD.createElement(JD, {
        fill: GD.fill,
        fillOpacity: GD.fillOpacity,
        x: GD.x,
        y: GD.y,
        width: GD.width,
        height: GD.height,
        ry: GD.ry
      }), pD.createElement(QD, MD({}, GD, {
        offset: ID,
        horizontalPoints: ZD,
        xAxis: iD,
        yAxis: lD
      })), pD.createElement(XD, MD({}, GD, {
        offset: ID,
        verticalPoints: yD,
        xAxis: iD,
        yAxis: lD
      })), pD.createElement(VD, MD({}, GD, {
        horizontalPoints: ZD
      })), pD.createElement(PD, MD({}, GD, {
        verticalPoints: yD
      })))
    }
    bD.displayName = "CartesianGrid"
  },
  6248: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => OD
    });
    var pD = wD(58),
      sD = wD(5995),
      KD = wD(6004),
      rD = wD(5484),
      LD = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function cD(DD) {
      return cD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, cD(DD)
    }

    function gD() {
      return gD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, gD.apply(this, arguments)
    }

    function RD(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        var wD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != wD) {
          var pD, sD, KD, rD, LD = [],
            cD = !0,
            gD = !1;
          try {
            if (KD = (wD = wD.call(DD)).next, 0 === zD) {
              if (Object(wD) !== wD) return;
              cD = !1
            } else
              for (; !(cD = (pD = KD.call(wD)).done) && (LD.push(pD.value), LD.length !== zD); cD = !0);
          } catch (DD) {
            gD = !0, sD = DD
          } finally {
            try {
              if (!cD && null != wD.return && (rD = wD.return(), Object(rD) !== rD)) return
            } finally {
              if (gD) throw sD
            }
          }
          return LD
        }
      }(DD, zD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return AD(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return AD(DD, zD)
      }(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function UD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function fD(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, MD(pD.key), pD)
      }
    }

    function ID(DD, zD, wD) {
      return zD = GD(zD),
        function(DD, zD) {
          if (zD && ("object" === cD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, BD() ? Reflect.construct(zD, wD || [], GD(DD).constructor) : zD.apply(DD, wD))
    }

    function BD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (BD = function() {
        return !!DD
      })()
    }

    function GD(DD) {
      return GD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, GD(DD)
    }

    function hD(DD, zD) {
      return hD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, hD(DD, zD)
    }

    function nD(DD, zD, wD) {
      return (zD = MD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function MD(DD) {
      var zD = function(DD, zD) {
        if ("object" != cD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != cD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == cD(zD) ? zD : zD + ""
    }
    var OD = function(DD) {
      function zD() {
        return function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, zD), ID(this, zD, arguments)
      }
      return function(DD, zD) {
        if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(zD && zD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), zD && hD(DD, zD)
      }(zD, DD), wD = zD, (cD = [{
        key: "render",
        value: function() {
          var DD = this.props,
            zD = DD.offset,
            wD = DD.layout,
            cD = DD.width,
            AD = DD.dataKey,
            fD = DD.data,
            ID = DD.dataPointFormatter,
            BD = DD.xAxis,
            GD = DD.yAxis,
            hD = UD(DD, LD),
            nD = (0, rD.e)(hD, !1);
          "x" === this.props.direction && "number" !== BD.type && (0, sD.c)(!1);
          var MD = fD.map((function(DD) {
            var sD = ID(DD, AD),
              rD = sD.x,
              LD = sD.y,
              UD = sD.value,
              fD = sD.errorVal;
            if (!fD) return null;
            var hD, MD, OD = [];
            if (Array.isArray(fD)) {
              var JD = RD(fD, 2);
              hD = JD[0], MD = JD[1]
            } else hD = MD = fD;
            if ("vertical" === wD) {
              var ED = BD.scale,
                QD = LD + zD,
                XD = QD + cD,
                VD = QD - cD,
                PD = ED(UD - hD),
                CD = ED(UD + MD);
              OD.push({
                x1: CD,
                y1: XD,
                x2: CD,
                y2: VD
              }), OD.push({
                x1: PD,
                y1: QD,
                x2: CD,
                y2: QD
              }), OD.push({
                x1: PD,
                y1: XD,
                x2: PD,
                y2: VD
              })
            } else if ("horizontal" === wD) {
              var xD = GD.scale,
                TD = rD + zD,
                bD = TD - cD,
                jD = TD + cD,
                dD = xD(UD - hD),
                SD = xD(UD + MD);
              OD.push({
                x1: bD,
                y1: SD,
                x2: jD,
                y2: SD
              }), OD.push({
                x1: TD,
                y1: dD,
                x2: TD,
                y2: SD
              }), OD.push({
                x1: bD,
                y1: dD,
                x2: jD,
                y2: dD
              })
            }
            return pD.createElement(KD.c, gD({
              className: "recharts-errorBar",
              key: "bar-".concat(OD.map((function(DD) {
                return "".concat(DD.x1, "-").concat(DD.x2, "-").concat(DD.y1, "-").concat(DD.y2)
              })))
            }, nD), OD.map((function(DD) {
              return pD.createElement("line", gD({}, DD, {
                key: "line-".concat(DD.x1, "-").concat(DD.x2, "-").concat(DD.y1, "-").concat(DD.y2)
              }))
            })))
          }));
          return pD.createElement(KD.c, {
            className: "recharts-errorBars"
          }, MD)
        }
      }]) && fD(wD.prototype, cD), AD && fD(wD, AD), Object.defineProperty(wD, "prototype", {
        writable: !1
      }), wD;
      var wD, cD, AD
    }(pD.Component);
    nD(OD, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), nD(OD, "displayName", "ErrorBar")
  },
  6421: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => ND
    });
    var pD = wD(58),
      sD = wD(6158),
      KD = wD(5333),
      rD = wD.n(KD),
      LD = wD(5478),
      cD = wD.n(LD),
      gD = wD(6239),
      RD = wD.n(gD),
      AD = wD(5121),
      UD = wD(6412),
      fD = wD(6146),
      ID = wD(6004),
      BD = wD(6327),
      GD = wD(6248),
      hD = wD(5223),
      nD = wD(5484),
      MD = wD(6012),
      OD = wD(6177),
      JD = ["type", "layout", "connectNulls", "ref"],
      ED = ["key"];

    function QD(DD) {
      return QD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, QD(DD)
    }

    function XD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function VD() {
      return VD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, VD.apply(this, arguments)
    }

    function PD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function CD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? PD(Object(wD), !0).forEach((function(zD) {
          lD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : PD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function xD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return TD(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return TD(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return TD(DD, zD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function TD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function bD(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, WD(pD.key), pD)
      }
    }

    function jD(DD, zD, wD) {
      return zD = SD(zD),
        function(DD, zD) {
          if (zD && ("object" === QD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, dD() ? Reflect.construct(zD, wD || [], SD(DD).constructor) : zD.apply(DD, wD))
    }

    function dD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (dD = function() {
        return !!DD
      })()
    }

    function SD(DD) {
      return SD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, SD(DD)
    }

    function iD(DD, zD) {
      return iD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, iD(DD, zD)
    }

    function lD(DD, zD, wD) {
      return (zD = WD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function WD(DD) {
      var zD = function(DD, zD) {
        if ("object" != QD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != QD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == QD(zD) ? zD : zD + ""
    }
    var ND = function(DD) {
      function zD() {
        var DD;
        ! function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, zD);
        for (var wD = arguments.length, pD = new Array(wD), sD = 0; sD < wD; sD++) pD[sD] = arguments[sD];
        return lD(DD = jD(this, zD, [].concat(pD)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), lD(DD, "generateSimpleStrokeDasharray", (function(DD, zD) {
          return "".concat(zD, "px ").concat(DD - zD, "px")
        })), lD(DD, "getStrokeDasharray", (function(wD, pD, sD) {
          var KD = sD.reduce((function(DD, zD) {
            return DD + zD
          }));
          if (!KD) return DD.generateSimpleStrokeDasharray(pD, wD);
          for (var rD = Math.floor(wD / KD), LD = wD % KD, cD = pD - wD, gD = [], RD = 0, AD = 0; RD < sD.length; AD += sD[RD], ++RD)
            if (AD + sD[RD] > LD) {
              gD = [].concat(xD(sD.slice(0, RD)), [LD - AD]);
              break
            } var UD = gD.length % 2 === 0 ? [0, cD] : [cD];
          return [].concat(xD(zD.repeat(sD, rD)), xD(gD), UD).map((function(DD) {
            return "".concat(DD, "px")
          })).join(", ")
        })), lD(DD, "id", (0, hD.I)("recharts-line-")), lD(DD, "pathRef", (function(zD) {
          DD.mainCurve = zD
        })), lD(DD, "handleAnimationEnd", (function() {
          DD.setState({
            isAnimationFinished: !0
          }), DD.props.onAnimationEnd && DD.props.onAnimationEnd()
        })), lD(DD, "handleAnimationStart", (function() {
          DD.setState({
            isAnimationFinished: !1
          }), DD.props.onAnimationStart && DD.props.onAnimationStart()
        })), DD
      }
      return function(DD, zD) {
        if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(zD && zD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), zD && iD(DD, zD)
      }(zD, DD), wD = zD, KD = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var DD = this.getTotalLength();
            this.setState({
              totalLength: DD
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var DD = this.getTotalLength();
            DD !== this.state.totalLength && this.setState({
              totalLength: DD
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var DD = this.mainCurve;
          try {
            return DD && DD.getTotalLength && DD.getTotalLength() || 0
          } catch (zD) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(DD, zD) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var wD = this.props,
            sD = wD.points,
            KD = wD.xAxis,
            rD = wD.yAxis,
            LD = wD.layout,
            cD = wD.children,
            gD = (0, nD.g)(cD, GD.d);
          if (!gD) return null;
          var RD = function(DD, zD) {
              return {
                x: DD.x,
                y: DD.y,
                value: DD.value,
                errorVal: (0, OD.Z)(DD.payload, zD)
              }
            },
            AD = {
              clipPath: DD ? "url(#clipPath-".concat(zD, ")") : null
            };
          return pD.createElement(ID.c, AD, gD.map((function(DD) {
            return pD.cloneElement(DD, {
              key: "bar-".concat(DD.props.dataKey),
              data: sD,
              xAxis: KD,
              yAxis: rD,
              layout: LD,
              dataPointFormatter: RD
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(DD, wD, sD) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var KD = this.props,
            rD = KD.dot,
            LD = KD.points,
            cD = KD.dataKey,
            gD = (0, nD.e)(this.props, !1),
            RD = (0, nD.e)(rD, !0),
            AD = LD.map((function(DD, wD) {
              var pD = CD(CD(CD({
                key: "dot-".concat(wD),
                r: 3
              }, gD), RD), {}, {
                index: wD,
                cx: DD.x,
                cy: DD.y,
                value: DD.value,
                dataKey: cD,
                payload: DD.payload,
                points: LD
              });
              return zD.renderDotItem(rD, pD)
            })),
            UD = {
              clipPath: DD ? "url(#clipPath-".concat(wD ? "" : "dots-").concat(sD, ")") : null
            };
          return pD.createElement(ID.c, VD({
            className: "recharts-line-dots",
            key: "dots"
          }, UD), AD)
        }
      }, {
        key: "renderCurveStatically",
        value: function(DD, zD, wD, sD) {
          var KD = this.props,
            rD = KD.type,
            LD = KD.layout,
            cD = KD.connectNulls,
            gD = (KD.ref, XD(KD, JD)),
            RD = CD(CD(CD({}, (0, nD.e)(gD, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: zD ? "url(#clipPath-".concat(wD, ")") : null,
              points: DD
            }, sD), {}, {
              type: rD,
              layout: LD,
              connectNulls: cD
            });
          return pD.createElement(UD.e, VD({}, RD, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(DD, zD) {
          var wD = this,
            KD = this.props,
            rD = KD.points,
            LD = KD.strokeDasharray,
            cD = KD.isAnimationActive,
            gD = KD.animationBegin,
            RD = KD.animationDuration,
            AD = KD.animationEasing,
            UD = KD.animationId,
            fD = KD.animateNewValues,
            ID = KD.width,
            BD = KD.height,
            GD = this.state,
            nD = GD.prevPoints,
            MD = GD.totalLength;
          return pD.createElement(sD.e, {
            Jf: gD,
            duration: RD,
            isActive: cD,
            easing: AD,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(UD),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(pD) {
            var sD = pD.t;
            if (nD) {
              var KD = nD.length / rD.length,
                cD = rD.map((function(DD, zD) {
                  var wD = Math.floor(zD * KD);
                  if (nD[wD]) {
                    var pD = nD[wD],
                      rD = (0, hD.q)(pD.x, DD.x),
                      LD = (0, hD.q)(pD.y, DD.y);
                    return CD(CD({}, DD), {}, {
                      x: rD(sD),
                      y: LD(sD)
                    })
                  }
                  if (fD) {
                    var cD = (0, hD.q)(2 * ID, DD.x),
                      gD = (0, hD.q)(BD / 2, DD.y);
                    return CD(CD({}, DD), {}, {
                      x: cD(sD),
                      y: gD(sD)
                    })
                  }
                  return CD(CD({}, DD), {}, {
                    x: DD.x,
                    y: DD.y
                  })
                }));
              return wD.renderCurveStatically(cD, DD, zD)
            }
            var gD, RD = (0, hD.q)(0, MD)(sD);
            if (LD) {
              var AD = "".concat(LD).split(/[,\s]+/gim).map((function(DD) {
                return parseFloat(DD)
              }));
              gD = wD.getStrokeDasharray(RD, MD, AD)
            } else gD = wD.generateSimpleStrokeDasharray(MD, RD);
            return wD.renderCurveStatically(rD, DD, zD, {
              strokeDasharray: gD
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(DD, zD) {
          var wD = this.props,
            pD = wD.points,
            sD = wD.isAnimationActive,
            KD = this.state,
            rD = KD.prevPoints,
            LD = KD.totalLength;
          return sD && pD && pD.length && (!rD && LD > 0 || !RD()(rD, pD)) ? this.renderCurveWithAnimation(DD, zD) : this.renderCurveStatically(pD, DD, zD)
        }
      }, {
        key: "render",
        value: function() {
          var DD, zD = this.props,
            wD = zD.hide,
            sD = zD.dot,
            KD = zD.points,
            rD = zD.className,
            LD = zD.xAxis,
            gD = zD.yAxis,
            RD = zD.top,
            UD = zD.left,
            fD = zD.width,
            GD = zD.height,
            hD = zD.isAnimationActive,
            MD = zD.id;
          if (wD || !KD || !KD.length) return null;
          var OD = this.state.isAnimationFinished,
            JD = 1 === KD.length,
            ED = (0, AD.b)("recharts-line", rD),
            QD = LD && LD.allowDataOverflow,
            XD = gD && gD.allowDataOverflow,
            VD = QD || XD,
            PD = cD()(MD) ? this.id : MD,
            CD = null !== (DD = (0, nD.e)(sD, !1)) && void 0 !== DD ? DD : {
              r: 3,
              strokeWidth: 2
            },
            xD = CD.r,
            TD = void 0 === xD ? 3 : xD,
            bD = CD.strokeWidth,
            jD = void 0 === bD ? 2 : bD,
            dD = ((0, nD.o)(sD) ? sD : {}).clipDot,
            SD = void 0 === dD || dD,
            iD = 2 * TD + jD;
          return pD.createElement(ID.c, {
            className: ED
          }, QD || XD ? pD.createElement("defs", null, pD.createElement("clipPath", {
            id: "clipPath-".concat(PD)
          }, pD.createElement("rect", {
            x: QD ? UD : UD - fD / 2,
            y: XD ? RD : RD - GD / 2,
            width: QD ? fD : 2 * fD,
            height: XD ? GD : 2 * GD
          })), !SD && pD.createElement("clipPath", {
            id: "clipPath-dots-".concat(PD)
          }, pD.createElement("rect", {
            x: UD - iD / 2,
            y: RD - iD / 2,
            width: fD + iD,
            height: GD + iD
          }))) : null, !JD && this.renderCurve(VD, PD), this.renderErrorBar(VD, PD), (JD || sD) && this.renderDots(VD, SD, PD), (!hD || OD) && BD.d.renderCallByParent(this.props, KD))
        }
      }], LD = [{
        key: "getDerivedStateFromProps",
        value: function(DD, zD) {
          return DD.animationId !== zD.prevAnimationId ? {
            prevAnimationId: DD.animationId,
            curPoints: DD.points,
            prevPoints: zD.curPoints
          } : DD.points !== zD.curPoints ? {
            curPoints: DD.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(DD, zD) {
          for (var wD = DD.length % 2 !== 0 ? [].concat(xD(DD), [0]) : DD, pD = [], sD = 0; sD < zD; ++sD) pD = [].concat(xD(pD), xD(wD));
          return pD
        }
      }, {
        key: "renderDotItem",
        value: function(DD, zD) {
          var wD;
          if (pD.isValidElement(DD)) wD = pD.cloneElement(DD, zD);
          else if (rD()(DD)) wD = DD(zD);
          else {
            var sD = zD.key,
              KD = XD(zD, ED),
              LD = (0, AD.b)("recharts-line-dot", "boolean" !== typeof DD ? DD.className : "");
            wD = pD.createElement(fD.e, VD({
              key: sD
            }, KD, {
              className: LD
            }))
          }
          return wD
        }
      }], KD && bD(wD.prototype, KD), LD && bD(wD, LD), Object.defineProperty(wD, "prototype", {
        writable: !1
      }), wD;
      var wD, KD, LD
    }(pD.PureComponent);
    lD(ND, "displayName", "Line"), lD(ND, "defaultProps", {
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
      isAnimationActive: !MD.c.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), lD(ND, "getComposedData", (function(DD) {
      var zD = DD.props,
        wD = DD.xAxis,
        pD = DD.yAxis,
        sD = DD.xAxisTicks,
        KD = DD.yAxisTicks,
        rD = DD.dataKey,
        LD = DD.bandSize,
        gD = DD.displayedData,
        RD = DD.offset,
        AD = zD.layout;
      return CD({
        points: gD.map((function(DD, zD) {
          var gD = (0, OD.Z)(DD, rD);
          return "horizontal" === AD ? {
            x: (0, OD.A)({
              axis: wD,
              ticks: sD,
              bandSize: LD,
              entry: DD,
              index: zD
            }),
            y: cD()(gD) ? null : pD.scale(gD),
            value: gD,
            payload: DD
          } : {
            x: cD()(gD) ? null : wD.scale(gD),
            y: (0, OD.A)({
              axis: pD,
              ticks: KD,
              bandSize: LD,
              entry: DD,
              index: zD
            }),
            value: gD,
            payload: DD
          }
        })),
        layout: AD
      }, RD)
    }))
  },
  6365: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => jD
    });
    var pD = wD(58),
      sD = wD(5333),
      KD = wD.n(sD),
      rD = wD(6369),
      LD = wD.n(rD),
      cD = wD(5121),
      gD = wD(6004),
      RD = wD(6265),
      AD = wD(6277),
      UD = wD(5223),
      fD = wD(6286),
      ID = wD(5480),
      BD = wD(5484),
      GD = wD(6383);

    function hD(DD) {
      return hD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, hD(DD)
    }

    function nD(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, PD(pD.key), pD)
      }
    }

    function MD(DD, zD, wD) {
      return zD = JD(zD),
        function(DD, zD) {
          if (zD && ("object" === hD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, OD() ? Reflect.construct(zD, wD || [], JD(DD).constructor) : zD.apply(DD, wD))
    }

    function OD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (OD = function() {
        return !!DD
      })()
    }

    function JD(DD) {
      return JD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, JD(DD)
    }

    function ED(DD, zD) {
      return ED = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, ED(DD, zD)
    }

    function QD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function XD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? QD(Object(wD), !0).forEach((function(zD) {
          VD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : QD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function VD(DD, zD, wD) {
      return (zD = PD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function PD(DD) {
      var zD = function(DD, zD) {
        if ("object" != hD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != hD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == hD(zD) ? zD : zD + ""
    }

    function CD(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        var wD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != wD) {
          var pD, sD, KD, rD, LD = [],
            cD = !0,
            gD = !1;
          try {
            if (KD = (wD = wD.call(DD)).next, 0 === zD) {
              if (Object(wD) !== wD) return;
              cD = !1
            } else
              for (; !(cD = (pD = KD.call(wD)).done) && (LD.push(pD.value), LD.length !== zD); cD = !0);
          } catch (DD) {
            gD = !0, sD = DD
          } finally {
            try {
              if (!cD && null != wD.return && (rD = wD.return(), Object(rD) !== rD)) return
            } finally {
              if (gD) throw sD
            }
          }
          return LD
        }
      }(DD, zD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return xD(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return xD(DD, zD)
      }(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function TD() {
      return TD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, TD.apply(this, arguments)
    }

    function bD(DD) {
      var zD = DD.x,
        wD = DD.y,
        sD = DD.segment,
        rD = DD.xAxisId,
        hD = DD.yAxisId,
        nD = DD.shape,
        MD = DD.className,
        OD = DD.alwaysShow,
        JD = (0, GD.n)(),
        ED = (0, GD.x)(rD),
        QD = (0, GD.y)(hD),
        VD = (0, GD.v)();
      if (!JD || !VD) return null;
      (0, ID.d)(void 0 === OD, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var PD = function(DD, zD, wD, pD, sD, KD, rD, cD, gD) {
        var RD = sD.x,
          UD = sD.y,
          fD = sD.width,
          ID = sD.height;
        if (wD) {
          var BD = gD.y,
            GD = DD.y.apply(BD, {
              position: KD
            });
          if ((0, AD.c)(gD, "discard") && !DD.y.isInRange(GD)) return null;
          var hD = [{
            x: RD + fD,
            y: GD
          }, {
            x: RD,
            y: GD
          }];
          return "left" === cD ? hD.reverse() : hD
        }
        if (zD) {
          var nD = gD.x,
            MD = DD.x.apply(nD, {
              position: KD
            });
          if ((0, AD.c)(gD, "discard") && !DD.x.isInRange(MD)) return null;
          var OD = [{
            x: MD,
            y: UD + ID
          }, {
            x: MD,
            y: UD
          }];
          return "top" === rD ? OD.reverse() : OD
        }
        if (pD) {
          var JD = gD.segment.map((function(zD) {
            return DD.apply(zD, {
              position: KD
            })
          }));
          return (0, AD.c)(gD, "discard") && LD()(JD, (function(zD) {
            return !DD.isInRange(zD)
          })) ? null : JD
        }
        return null
      }((0, fD.d)({
        x: ED.scale,
        y: QD.scale
      }), (0, UD.x)(zD), (0, UD.x)(wD), sD && 2 === sD.length, VD, DD.position, ED.orientation, QD.orientation, DD);
      if (!PD) return null;
      var xD = CD(PD, 2),
        bD = xD[0],
        jD = bD.x,
        dD = bD.y,
        SD = xD[1],
        iD = SD.x,
        lD = SD.y,
        WD = XD(XD({
          clipPath: (0, AD.c)(DD, "hidden") ? "url(#".concat(JD, ")") : void 0
        }, (0, BD.e)(DD, !0)), {}, {
          x1: jD,
          y1: dD,
          x2: iD,
          y2: lD
        });
      return pD.createElement(gD.c, {
        className: (0, cD.b)("recharts-reference-line", MD)
      }, function(DD, zD) {
        return pD.isValidElement(DD) ? pD.cloneElement(DD, zD) : KD()(DD) ? DD(zD) : pD.createElement("line", TD({}, zD, {
          className: "recharts-reference-line-line"
        }))
      }(nD, WD), RD.d.renderCallByParent(DD, (0, fD.k)({
        x1: jD,
        y1: dD,
        x2: iD,
        y2: lD
      })))
    }
    var jD = function(DD) {
      function zD() {
        return function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, zD), MD(this, zD, arguments)
      }
      return function(DD, zD) {
        if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(zD && zD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), zD && ED(DD, zD)
      }(zD, DD), wD = zD, (sD = [{
        key: "render",
        value: function() {
          return pD.createElement(bD, this.props)
        }
      }]) && nD(wD.prototype, sD), KD && nD(wD, KD), Object.defineProperty(wD, "prototype", {
        writable: !1
      }), wD;
      var wD, sD, KD
    }(pD.Component);
    VD(jD, "displayName", "ReferenceLine"), VD(jD, "defaultProps", {
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
  6426: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => nD
    });
    var pD = wD(58),
      sD = wD(5121),
      KD = wD(6383),
      rD = wD(6428),
      LD = wD(6177);

    function cD(DD) {
      return cD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, cD(DD)
    }

    function gD(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, BD(pD.key), pD)
      }
    }

    function RD(DD, zD, wD) {
      return zD = UD(zD),
        function(DD, zD) {
          if (zD && ("object" === cD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, AD() ? Reflect.construct(zD, wD || [], UD(DD).constructor) : zD.apply(DD, wD))
    }

    function AD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (AD = function() {
        return !!DD
      })()
    }

    function UD(DD) {
      return UD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, UD(DD)
    }

    function fD(DD, zD) {
      return fD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, fD(DD, zD)
    }

    function ID(DD, zD, wD) {
      return (zD = BD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function BD(DD) {
      var zD = function(DD, zD) {
        if ("object" != cD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != cD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == cD(zD) ? zD : zD + ""
    }

    function GD() {
      return GD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, GD.apply(this, arguments)
    }

    function hD(DD) {
      var zD = DD.xAxisId,
        wD = (0, KD.l)(),
        cD = (0, KD.h)(),
        gD = (0, KD.x)(zD);
      return null == gD ? null : pD.createElement(rD.b, GD({}, gD, {
        className: (0, sD.b)("recharts-".concat(gD.axisType, " ").concat(gD.axisType), gD.className),
        viewBox: {
          x: 0,
          y: 0,
          width: wD,
          height: cD
        },
        ticksGenerator: function(DD) {
          return (0, LD.T)(DD, !0)
        }
      }))
    }
    var nD = function(DD) {
      function zD() {
        return function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, zD), RD(this, zD, arguments)
      }
      return function(DD, zD) {
        if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(zD && zD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), zD && fD(DD, zD)
      }(zD, DD), wD = zD, (sD = [{
        key: "render",
        value: function() {
          return pD.createElement(hD, this.props)
        }
      }]) && gD(wD.prototype, sD), KD && gD(wD, KD), Object.defineProperty(wD, "prototype", {
        writable: !1
      }), wD;
      var wD, sD, KD
    }(pD.Component);
    ID(nD, "displayName", "XAxis"), ID(nD, "defaultProps", {
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
  6439: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => nD
    });
    var pD = wD(58),
      sD = wD(5121),
      KD = wD(6383),
      rD = wD(6428),
      LD = wD(6177);

    function cD(DD) {
      return cD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, cD(DD)
    }

    function gD(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, BD(pD.key), pD)
      }
    }

    function RD(DD, zD, wD) {
      return zD = UD(zD),
        function(DD, zD) {
          if (zD && ("object" === cD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, AD() ? Reflect.construct(zD, wD || [], UD(DD).constructor) : zD.apply(DD, wD))
    }

    function AD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (AD = function() {
        return !!DD
      })()
    }

    function UD(DD) {
      return UD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, UD(DD)
    }

    function fD(DD, zD) {
      return fD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, fD(DD, zD)
    }

    function ID(DD, zD, wD) {
      return (zD = BD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function BD(DD) {
      var zD = function(DD, zD) {
        if ("object" != cD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != cD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == cD(zD) ? zD : zD + ""
    }

    function GD() {
      return GD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, GD.apply(this, arguments)
    }
    var hD = function(DD) {
        var zD = DD.yAxisId,
          wD = (0, KD.l)(),
          cD = (0, KD.h)(),
          gD = (0, KD.y)(zD);
        return null == gD ? null : pD.createElement(rD.b, GD({}, gD, {
          className: (0, sD.b)("recharts-".concat(gD.axisType, " ").concat(gD.axisType), gD.className),
          viewBox: {
            x: 0,
            y: 0,
            width: wD,
            height: cD
          },
          ticksGenerator: function(DD) {
            return (0, LD.T)(DD, !0)
          }
        }))
      },
      nD = function(DD) {
        function zD() {
          return function(DD, zD) {
            if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
          }(this, zD), RD(this, zD, arguments)
        }
        return function(DD, zD) {
          if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
          DD.prototype = Object.create(zD && zD.prototype, {
            constructor: {
              value: DD,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(DD, "prototype", {
            writable: !1
          }), zD && fD(DD, zD)
        }(zD, DD), wD = zD, (sD = [{
          key: "render",
          value: function() {
            return pD.createElement(hD, this.props)
          }
        }]) && gD(wD.prototype, sD), KD && gD(wD, KD), Object.defineProperty(wD, "prototype", {
          writable: !1
        }), wD;
        var wD, sD, KD
      }(pD.Component);
    ID(nD, "displayName", "YAxis"), ID(nD, "defaultProps", {
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
  6436: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => BD
    });
    var pD = wD(5333),
      sD = wD.n(pD),
      KD = wD(5223),
      rD = wD(6169),
      LD = wD(6012),
      cD = wD(6286);

    function gD(DD, zD, wD) {
      if (zD < 1) return [];
      if (1 === zD && void 0 === wD) return DD;
      for (var pD = [], sD = 0; sD < DD.length; sD += zD) {
        if (void 0 !== wD && !0 !== wD(DD[sD])) return;
        pD.push(DD[sD])
      }
      return pD
    }

    function RD(DD, zD, wD, pD, sD) {
      if (DD * zD < DD * pD || DD * zD > DD * sD) return !1;
      var KD = wD();
      return DD * (zD - DD * KD / 2 - pD) >= 0 && DD * (zD + DD * KD / 2 - sD) <= 0
    }

    function AD(DD) {
      return AD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, AD(DD)
    }

    function UD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function fD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? UD(Object(wD), !0).forEach((function(zD) {
          ID(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : UD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function ID(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != AD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != AD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == AD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function BD(DD, zD, wD) {
      var pD = DD.DU,
        AD = DD.ticks,
        UD = DD.viewBox,
        ID = DD.minTickGap,
        BD = DD.orientation,
        GD = DD.interval,
        hD = DD.tickFormatter,
        nD = DD.unit,
        MD = DD.angle;
      if (!AD || !AD.length || !pD) return [];
      if ((0, KD.y)(GD) || LD.c.isSsr) return function(DD, zD) {
        return gD(DD, zD + 1)
      }(AD, "number" === typeof GD && (0, KD.y)(GD) ? GD : 0);
      var OD = [],
        JD = "top" === BD || "bottom" === BD ? "width" : "height",
        ED = nD && "width" === JD ? (0, rD.h)(nD, {
          fontSize: zD,
          letterSpacing: wD
        }) : {
          width: 0,
          height: 0
        },
        QD = function(DD, pD) {
          var KD = sD()(hD) ? hD(DD.value, pD) : DD.value;
          return "width" === JD ? function(DD, zD, wD) {
            var pD = {
              width: DD.width + zD.width,
              height: DD.height + zD.height
            };
            return (0, cD.h)(pD, wD)
          }((0, rD.h)(KD, {
            fontSize: zD,
            letterSpacing: wD
          }), ED, MD) : (0, rD.h)(KD, {
            fontSize: zD,
            letterSpacing: wD
          })[JD]
        },
        XD = AD.length >= 2 ? (0, KD.F)(AD[1].coordinate - AD[0].coordinate) : 1,
        VD = function(DD, zD, wD) {
          var pD = "width" === wD,
            sD = DD.x,
            KD = DD.y,
            rD = DD.width,
            LD = DD.height;
          return 1 === zD ? {
            start: pD ? sD : KD,
            end: pD ? sD + rD : KD + LD
          } : {
            start: pD ? sD + rD : KD + LD,
            end: pD ? sD : KD
          }
        }(UD, XD, JD);
      return "equidistantPreserveStart" === GD ? function(DD, zD, wD, pD, sD) {
        for (var KD, rD = (pD || []).slice(), LD = zD.start, cD = zD.end, AD = 0, UD = 1, fD = LD, ID = function() {
            var zD = null === pD || void 0 === pD ? void 0 : pD[AD];
            if (void 0 === zD) return {
              v: gD(pD, UD)
            };
            var KD, rD = AD,
              ID = function() {
                return void 0 === KD && (KD = wD(zD, rD)), KD
              },
              BD = zD.coordinate,
              GD = 0 === AD || RD(DD, BD, ID, fD, cD);
            GD || (AD = 0, fD = LD, UD += 1), GD && (fD = BD + DD * (ID() / 2 + sD), AD += UD)
          }; UD <= rD.length;)
          if (KD = ID()) return KD.v;
        return []
      }(XD, VD, QD, AD, ID) : (OD = "preserveStart" === GD || "preserveStartEnd" === GD ? function(DD, zD, wD, pD, sD, KD) {
        var rD = (pD || []).slice(),
          LD = rD.length,
          cD = zD.start,
          gD = zD.end;
        if (KD) {
          var AD = pD[LD - 1],
            UD = wD(AD, LD - 1),
            ID = DD * (AD.coordinate + DD * UD / 2 - gD);
          rD[LD - 1] = AD = fD(fD({}, AD), {}, {
            tickCoord: ID > 0 ? AD.coordinate - ID * DD : AD.coordinate
          }), RD(DD, AD.tickCoord, (function() {
            return UD
          }), cD, gD) && (gD = AD.tickCoord - DD * (UD / 2 + sD), rD[LD - 1] = fD(fD({}, AD), {}, {
            isShow: !0
          }))
        }
        for (var BD = KD ? LD - 1 : LD, GD = function(zD) {
            var pD, KD = rD[zD],
              LD = function() {
                return void 0 === pD && (pD = wD(KD, zD)), pD
              };
            if (0 === zD) {
              var AD = DD * (KD.coordinate - DD * LD() / 2 - cD);
              rD[zD] = KD = fD(fD({}, KD), {}, {
                tickCoord: AD < 0 ? KD.coordinate - AD * DD : KD.coordinate
              })
            } else rD[zD] = KD = fD(fD({}, KD), {}, {
              tickCoord: KD.coordinate
            });
            RD(DD, KD.tickCoord, LD, cD, gD) && (cD = KD.tickCoord + DD * (LD() / 2 + sD), rD[zD] = fD(fD({}, KD), {}, {
              isShow: !0
            }))
          }, hD = 0; hD < BD; hD++) GD(hD);
        return rD
      }(XD, VD, QD, AD, ID, "preserveStartEnd" === GD) : function(DD, zD, wD, pD, sD) {
        for (var KD = (pD || []).slice(), rD = KD.length, LD = zD.start, cD = zD.end, gD = function(zD) {
            var pD, gD = KD[zD],
              AD = function() {
                return void 0 === pD && (pD = wD(gD, zD)), pD
              };
            if (zD === rD - 1) {
              var UD = DD * (gD.coordinate + DD * AD() / 2 - cD);
              KD[zD] = gD = fD(fD({}, gD), {}, {
                tickCoord: UD > 0 ? gD.coordinate - UD * DD : gD.coordinate
              })
            } else KD[zD] = gD = fD(fD({}, gD), {}, {
              tickCoord: gD.coordinate
            });
            RD(DD, gD.tickCoord, AD, LD, cD) && (cD = gD.tickCoord - DD * (AD() / 2 + sD), KD[zD] = fD(fD({}, gD), {}, {
              isShow: !0
            }))
          }, AD = rD - 1; AD >= 0; AD--) gD(AD);
        return KD
      }(XD, VD, QD, AD, ID), OD.filter((function(DD) {
        return DD.isShow
      })))
    }
  },
  6452: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => cD
    });
    var pD = wD(5515),
      sD = wD(6318),
      KD = wD(6426),
      rD = wD(6439),
      LD = wD(6286),
      cD = (0, pD.e)({
        chartName: "BarChart",
        GraphicalChild: sD.e,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: KD.e
        }, {
          axisType: "yAxis",
          AxisComp: rD.b
        }],
        formatAxisMap: LD.e
      })
  },
  5508: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sz
    });
    var pD = wD(5515),
      sD = wD(6414),
      KD = wD(6318),
      rD = wD(6421),
      LD = wD(58),
      cD = wD(6158),
      gD = wD(5478),
      RD = wD.n(gD),
      AD = wD(6239),
      UD = wD.n(AD),
      fD = wD(5333),
      ID = wD.n(fD),
      BD = wD(5121),
      GD = wD(6004),
      hD = wD(6327),
      nD = wD(5484),
      MD = wD(6012);

    function OD(DD) {
      return OD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, OD(DD)
    }

    function JD(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, CD(pD.key), pD)
      }
    }

    function ED(DD, zD, wD) {
      return zD = XD(zD),
        function(DD, zD) {
          if (zD && ("object" === OD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, QD() ? Reflect.construct(zD, wD || [], XD(DD).constructor) : zD.apply(DD, wD))
    }

    function QD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (QD = function() {
        return !!DD
      })()
    }

    function XD(DD) {
      return XD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, XD(DD)
    }

    function VD(DD, zD) {
      return VD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, VD(DD, zD)
    }

    function PD(DD, zD, wD) {
      return (zD = CD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function CD(DD) {
      var zD = function(DD, zD) {
        if ("object" != OD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != OD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == OD(zD) ? zD : zD + ""
    }
    var xD = function(DD) {
      function zD() {
        return function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, zD), ED(this, zD, arguments)
      }
      return function(DD, zD) {
        if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(zD && zD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), zD && VD(DD, zD)
      }(zD, DD), wD = zD, (pD = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && JD(wD.prototype, pD), sD && JD(wD, sD), Object.defineProperty(wD, "prototype", {
        writable: !1
      }), wD;
      var wD, pD, sD
    }(LD.Component);
    PD(xD, "displayName", "ZAxis"), PD(xD, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var TD = wD(6412),
      bD = wD(6248),
      jD = wD(6324),
      dD = wD(5223),
      SD = wD(6177),
      iD = wD(5505),
      lD = wD(6083),
      WD = wD(6337),
      ND = ["option", "isActive"];

    function ZD() {
      return ZD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, ZD.apply(this, arguments)
    }

    function yD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function kD(DD) {
      var zD = DD.option,
        wD = DD.isActive,
        pD = yD(DD, ND);
      return "string" === typeof zD ? LD.createElement(WD.c, ZD({
        option: LD.createElement(lD.d, ZD({
          type: zD
        }, pD)),
        isActive: wD,
        shapeType: "symbols"
      }, pD)) : LD.createElement(WD.c, ZD({
        option: zD,
        isActive: wD,
        shapeType: "symbols"
      }, pD))
    }

    function mD(DD) {
      return mD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, mD(DD)
    }

    function eD() {
      return eD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, eD.apply(this, arguments)
    }

    function oD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function aD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? oD(Object(wD), !0).forEach((function(zD) {
          HD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : oD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function uD(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, qD(pD.key), pD)
      }
    }

    function vD(DD, zD, wD) {
      return zD = FD(zD),
        function(DD, zD) {
          if (zD && ("object" === mD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, tD() ? Reflect.construct(zD, wD || [], FD(DD).constructor) : zD.apply(DD, wD))
    }

    function tD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (tD = function() {
        return !!DD
      })()
    }

    function FD(DD) {
      return FD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, FD(DD)
    }

    function YD(DD, zD) {
      return YD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, YD(DD, zD)
    }

    function HD(DD, zD, wD) {
      return (zD = qD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function qD(DD) {
      var zD = function(DD, zD) {
        if ("object" != mD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != mD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == mD(zD) ? zD : zD + ""
    }
    var Dz = function(DD) {
      function zD() {
        var DD;
        ! function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, zD);
        for (var wD = arguments.length, pD = new Array(wD), sD = 0; sD < wD; sD++) pD[sD] = arguments[sD];
        return HD(DD = vD(this, zD, [].concat(pD)), "state", {
          isAnimationFinished: !1
        }), HD(DD, "handleAnimationEnd", (function() {
          DD.setState({
            isAnimationFinished: !0
          })
        })), HD(DD, "handleAnimationStart", (function() {
          DD.setState({
            isAnimationFinished: !1
          })
        })), HD(DD, "id", (0, dD.I)("recharts-scatter-")), DD
      }
      return function(DD, zD) {
        if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(zD && zD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), zD && YD(DD, zD)
      }(zD, DD), wD = zD, pD = [{
        key: "renderSymbolsStatically",
        value: function(DD) {
          var zD = this,
            wD = this.props,
            pD = wD.shape,
            sD = wD.activeShape,
            KD = wD.activeIndex,
            rD = (0, nD.e)(this.props, !1);
          return DD.map((function(DD, wD) {
            var cD = KD === wD,
              gD = cD ? sD : pD,
              RD = aD(aD({}, rD), DD);
            return LD.createElement(GD.c, eD({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === DD || void 0 === DD ? void 0 : DD.cx, "-").concat(null === DD || void 0 === DD ? void 0 : DD.cy, "-").concat(null === DD || void 0 === DD ? void 0 : DD.size, "-").concat(wD)
            }, (0, iD.j)(zD.props, DD, wD), {
              role: "img"
            }), LD.createElement(kD, eD({
              option: gD,
              isActive: cD,
              key: "symbol-".concat(wD)
            }, RD)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var DD = this,
            zD = this.props,
            wD = zD.points,
            pD = zD.isAnimationActive,
            sD = zD.animationBegin,
            KD = zD.animationDuration,
            rD = zD.animationEasing,
            gD = zD.animationId,
            RD = this.state.prevPoints;
          return LD.createElement(cD.e, {
            Jf: sD,
            duration: KD,
            isActive: pD,
            easing: rD,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(gD),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(zD) {
            var pD = zD.t,
              sD = wD.map((function(DD, zD) {
                var wD = RD && RD[zD];
                if (wD) {
                  var sD = (0, dD.q)(wD.cx, DD.cx),
                    KD = (0, dD.q)(wD.cy, DD.cy),
                    rD = (0, dD.q)(wD.size, DD.size);
                  return aD(aD({}, DD), {}, {
                    cx: sD(pD),
                    cy: KD(pD),
                    size: rD(pD)
                  })
                }
                var LD = (0, dD.q)(0, DD.size);
                return aD(aD({}, DD), {}, {
                  size: LD(pD)
                })
              }));
            return LD.createElement(GD.c, null, DD.renderSymbolsStatically(sD))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var DD = this.props,
            zD = DD.points,
            wD = DD.isAnimationActive,
            pD = this.state.prevPoints;
          return !(wD && zD && zD.length) || pD && UD()(pD, zD) ? this.renderSymbolsStatically(zD) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var DD = this.props,
            zD = DD.points,
            wD = DD.xAxis,
            pD = DD.yAxis,
            sD = DD.children,
            KD = (0, nD.g)(sD, bD.d);
          return KD ? KD.map((function(DD, sD) {
            var KD = DD.props,
              rD = KD.direction,
              cD = KD.dataKey;
            return LD.cloneElement(DD, {
              key: "".concat(rD, "-").concat(cD, "-").concat(zD[sD]),
              data: zD,
              xAxis: wD,
              yAxis: pD,
              layout: "x" === rD ? "vertical" : "horizontal",
              dataPointFormatter: function(DD, zD) {
                return {
                  x: DD.cx,
                  y: DD.cy,
                  value: "x" === rD ? +DD.node.x : +DD.node.y,
                  errorVal: (0, SD.Z)(DD, zD)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var DD, zD, wD = this.props,
            pD = wD.points,
            sD = wD.line,
            KD = wD.lineType,
            rD = wD.lineJointType,
            cD = (0, nD.e)(this.props, !1),
            gD = (0, nD.e)(sD, !1);
          if ("joint" === KD) DD = pD.map((function(DD) {
            return {
              x: DD.cx,
              y: DD.cy
            }
          }));
          else if ("fitting" === KD) {
            var RD = (0, dD.k)(pD),
              AD = RD.xmin,
              UD = RD.xmax,
              fD = RD.a,
              BD = RD.b,
              hD = function(DD) {
                return fD * DD + BD
              };
            DD = [{
              x: AD,
              y: hD(AD)
            }, {
              x: UD,
              y: hD(UD)
            }]
          }
          var MD = aD(aD(aD({}, cD), {}, {
            fill: "none",
            stroke: cD && cD.fill
          }, gD), {}, {
            points: DD
          });
          return zD = LD.isValidElement(sD) ? LD.cloneElement(sD, MD) : ID()(sD) ? sD(MD) : LD.createElement(TD.e, eD({}, MD, {
            type: rD
          })), LD.createElement(GD.c, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, zD)
        }
      }, {
        key: "render",
        value: function() {
          var DD = this.props,
            zD = DD.hide,
            wD = DD.points,
            pD = DD.line,
            sD = DD.className,
            KD = DD.xAxis,
            rD = DD.yAxis,
            cD = DD.left,
            gD = DD.top,
            AD = DD.width,
            UD = DD.height,
            fD = DD.id,
            ID = DD.isAnimationActive;
          if (zD || !wD || !wD.length) return null;
          var nD = this.state.isAnimationFinished,
            MD = (0, BD.b)("recharts-scatter", sD),
            OD = KD && KD.allowDataOverflow,
            JD = rD && rD.allowDataOverflow,
            ED = OD || JD,
            QD = RD()(fD) ? this.id : fD;
          return LD.createElement(GD.c, {
            className: MD,
            clipPath: ED ? "url(#clipPath-".concat(QD, ")") : null
          }, OD || JD ? LD.createElement("defs", null, LD.createElement("clipPath", {
            id: "clipPath-".concat(QD)
          }, LD.createElement("rect", {
            x: OD ? cD : cD - AD / 2,
            y: JD ? gD : gD - UD / 2,
            width: OD ? AD : 2 * AD,
            height: JD ? UD : 2 * UD
          }))) : null, pD && this.renderLine(), this.renderErrorBar(), LD.createElement(GD.c, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!ID || nD) && hD.d.renderCallByParent(this.props, wD))
        }
      }], sD = [{
        key: "getDerivedStateFromProps",
        value: function(DD, zD) {
          return DD.animationId !== zD.prevAnimationId ? {
            prevAnimationId: DD.animationId,
            curPoints: DD.points,
            prevPoints: zD.curPoints
          } : DD.points !== zD.curPoints ? {
            curPoints: DD.points
          } : null
        }
      }], pD && uD(wD.prototype, pD), sD && uD(wD, sD), Object.defineProperty(wD, "prototype", {
        writable: !1
      }), wD;
      var wD, pD, sD
    }(LD.PureComponent);
    HD(Dz, "displayName", "Scatter"), HD(Dz, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !MD.c.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), HD(Dz, "getComposedData", (function(DD) {
      var zD = DD.xAxis,
        wD = DD.yAxis,
        pD = DD.zAxis,
        sD = DD.item,
        KD = DD.displayedData,
        rD = DD.xAxisTicks,
        LD = DD.yAxisTicks,
        cD = DD.offset,
        gD = sD.props.tooltipType,
        AD = (0, nD.g)(sD.props.children, jD.c),
        UD = RD()(zD.dataKey) ? sD.props.dataKey : zD.dataKey,
        fD = RD()(wD.dataKey) ? sD.props.dataKey : wD.dataKey,
        ID = pD && pD.dataKey,
        BD = pD ? pD.range : xD.defaultProps.range,
        GD = BD && BD[0],
        hD = zD.scale.bandwidth ? zD.scale.bandwidth() : 0,
        MD = wD.scale.bandwidth ? wD.scale.bandwidth() : 0,
        OD = KD.map((function(DD, KD) {
          var cD = (0, SD.Z)(DD, UD),
            BD = (0, SD.Z)(DD, fD),
            nD = !RD()(ID) && (0, SD.Z)(DD, ID) || "-",
            OD = [{
              name: RD()(zD.dataKey) ? sD.props.name : zD.name || zD.dataKey,
              unit: zD.unit || "",
              value: cD,
              payload: DD,
              dataKey: UD,
              type: gD
            }, {
              name: RD()(wD.dataKey) ? sD.props.name : wD.name || wD.dataKey,
              unit: wD.unit || "",
              value: BD,
              payload: DD,
              dataKey: fD,
              type: gD
            }];
          "-" !== nD && OD.push({
            name: pD.name || pD.dataKey,
            unit: pD.unit || "",
            value: nD,
            payload: DD,
            dataKey: ID,
            type: gD
          });
          var JD = (0, SD.A)({
              axis: zD,
              ticks: rD,
              bandSize: hD,
              entry: DD,
              index: KD,
              dataKey: UD
            }),
            ED = (0, SD.A)({
              axis: wD,
              ticks: LD,
              bandSize: MD,
              entry: DD,
              index: KD,
              dataKey: fD
            }),
            QD = "-" !== nD ? pD.scale(nD) : GD,
            XD = Math.sqrt(Math.max(QD, 0) / Math.PI);
          return aD(aD({}, DD), {}, {
            cx: JD,
            cy: ED,
            x: JD - XD,
            y: ED - XD,
            xAxis: zD,
            yAxis: wD,
            zAxis: pD,
            width: 2 * XD,
            height: 2 * XD,
            size: QD,
            node: {
              x: cD,
              y: BD,
              z: nD
            },
            tooltipPayload: OD,
            tooltipPosition: {
              x: JD,
              y: ED
            },
            payload: DD
          }, AD && AD[KD] && AD[KD].props)
        }));
      return aD({
        points: OD
      }, cD)
    }));
    var zz = wD(6426),
      wz = wD(6439),
      pz = wD(6286),
      sz = (0, pD.e)({
        chartName: "ComposedChart",
        GraphicalChild: [rD.e, sD.e, KD.e, Dz],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: zz.e
        }, {
          axisType: "yAxis",
          AxisComp: wz.b
        }, {
          axisType: "zAxis",
          AxisComp: xD
        }],
        formatAxisMap: pz.e
      })
  },
  5515: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => yw
    });
    var pD = wD(58),
      sD = wD(5478),
      KD = wD.n(sD),
      rD = wD(5333),
      LD = wD.n(rD),
      cD = wD(5524),
      gD = wD.n(cD),
      RD = wD(5254),
      AD = wD.n(RD),
      UD = wD(5565),
      fD = wD.n(UD),
      ID = wD(5128),
      BD = wD.n(ID),
      GD = wD(5121),
      hD = wD(5995),
      nD = wD(5997),
      MD = wD(6004),
      OD = wD(6008),
      JD = wD(6080),
      ED = wD(6146),
      QD = wD(6154),
      XD = wD(5484),
      VD = wD(6184),
      PD = wD(6166),
      CD = wD(6177),
      xD = wD(5223);

    function TD(DD) {
      return TD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, TD(DD)
    }

    function bD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function jD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? bD(Object(wD), !0).forEach((function(zD) {
          dD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : bD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function dD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != TD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != TD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == TD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }
    var SD = ["Webkit", "Moz", "O", "ms"];

    function iD(DD) {
      return iD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, iD(DD)
    }

    function lD() {
      return lD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, lD.apply(this, arguments)
    }

    function WD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function ND(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? WD(Object(wD), !0).forEach((function(zD) {
          oD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : WD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function ZD(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, aD(pD.key), pD)
      }
    }

    function yD(DD, zD, wD) {
      return zD = mD(zD),
        function(DD, zD) {
          if (zD && ("object" === iD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, kD() ? Reflect.construct(zD, wD || [], mD(DD).constructor) : zD.apply(DD, wD))
    }

    function kD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (kD = function() {
        return !!DD
      })()
    }

    function mD(DD) {
      return mD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, mD(DD)
    }

    function eD(DD, zD) {
      return eD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, eD(DD, zD)
    }

    function oD(DD, zD, wD) {
      return (zD = aD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function aD(DD) {
      var zD = function(DD, zD) {
        if ("object" != iD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != iD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == iD(zD) ? zD : zD + ""
    }
    var uD = function(DD) {
        return DD.changedTouches && !!DD.changedTouches.length
      },
      vD = function(DD) {
        function zD(DD) {
          var wD;
          return function(DD, zD) {
            if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
          }(this, zD), oD(wD = yD(this, zD, [DD]), "handleDrag", (function(DD) {
            wD.leaveTimer && (clearTimeout(wD.leaveTimer), wD.leaveTimer = null), wD.state.isTravellerMoving ? wD.handleTravellerMove(DD) : wD.state.isSlideMoving && wD.handleSlideDrag(DD)
          })), oD(wD, "handleTouchMove", (function(DD) {
            null != DD.changedTouches && DD.changedTouches.length > 0 && wD.handleDrag(DD.changedTouches[0])
          })), oD(wD, "handleDragEnd", (function() {
            wD.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var DD = wD.props,
                zD = DD.endIndex,
                pD = DD.onDragEnd,
                sD = DD.startIndex;
              null === pD || void 0 === pD || pD({
                endIndex: zD,
                startIndex: sD
              })
            })), wD.detachDragEndListener()
          })), oD(wD, "handleLeaveWrapper", (function() {
            (wD.state.isTravellerMoving || wD.state.isSlideMoving) && (wD.leaveTimer = window.setTimeout(wD.handleDragEnd, wD.props.leaveTimeOut))
          })), oD(wD, "handleEnterSlideOrTraveller", (function() {
            wD.setState({
              isTextActive: !0
            })
          })), oD(wD, "handleLeaveSlideOrTraveller", (function() {
            wD.setState({
              isTextActive: !1
            })
          })), oD(wD, "handleSlideDragStart", (function(DD) {
            var zD = uD(DD) ? DD.changedTouches[0] : DD;
            wD.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: zD.pageX
            }), wD.attachDragEndListener()
          })), wD.travellerDragStartHandlers = {
            startX: wD.handleTravellerDragStart.bind(wD, "startX"),
            endX: wD.handleTravellerDragStart.bind(wD, "endX")
          }, wD.state = {}, wD
        }
        return function(DD, zD) {
          if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
          DD.prototype = Object.create(zD && zD.prototype, {
            constructor: {
              value: DD,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(DD, "prototype", {
            writable: !1
          }), zD && eD(DD, zD)
        }(zD, DD), wD = zD, sD = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(DD) {
            var wD = DD.startX,
              pD = DD.endX,
              sD = this.state.scaleValues,
              KD = this.props,
              rD = KD.gap,
              LD = KD.data.length - 1,
              cD = Math.min(wD, pD),
              gD = Math.max(wD, pD),
              RD = zD.getIndexInRange(sD, cD),
              AD = zD.getIndexInRange(sD, gD);
            return {
              startIndex: RD - RD % rD,
              endIndex: AD === LD ? LD : AD - AD % rD
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(DD) {
            var zD = this.props,
              wD = zD.data,
              pD = zD.tickFormatter,
              sD = zD.dataKey,
              KD = (0, CD.Z)(wD[DD], sD, DD);
            return LD()(pD) ? pD(KD, DD) : KD
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
          value: function(DD) {
            var zD = this.state,
              wD = zD.slideMoveStartX,
              pD = zD.startX,
              sD = zD.endX,
              KD = this.props,
              rD = KD.x,
              LD = KD.width,
              cD = KD.travellerWidth,
              gD = KD.startIndex,
              RD = KD.endIndex,
              AD = KD.onChange,
              UD = DD.pageX - wD;
            UD > 0 ? UD = Math.min(UD, rD + LD - cD - sD, rD + LD - cD - pD) : UD < 0 && (UD = Math.max(UD, rD - pD, rD - sD));
            var fD = this.getIndex({
              startX: pD + UD,
              endX: sD + UD
            });
            fD.startIndex === gD && fD.endIndex === RD || !AD || AD(fD), this.setState({
              startX: pD + UD,
              endX: sD + UD,
              slideMoveStartX: DD.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(DD, zD) {
            var wD = uD(zD) ? zD.changedTouches[0] : zD;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: DD,
              brushMoveStartX: wD.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(DD) {
            var zD = this.state,
              wD = zD.brushMoveStartX,
              pD = zD.movingTravellerId,
              sD = zD.endX,
              KD = zD.startX,
              rD = this.state[pD],
              LD = this.props,
              cD = LD.x,
              gD = LD.width,
              RD = LD.travellerWidth,
              AD = LD.onChange,
              UD = LD.gap,
              fD = LD.data,
              ID = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              BD = DD.pageX - wD;
            BD > 0 ? BD = Math.min(BD, cD + gD - RD - rD) : BD < 0 && (BD = Math.max(BD, cD - rD)), ID[pD] = rD + BD;
            var GD = this.getIndex(ID),
              hD = GD.startIndex,
              nD = GD.endIndex;
            this.setState(oD(oD({}, pD, rD + BD), "brushMoveStartX", DD.pageX), (function() {
              AD && function() {
                var DD = fD.length - 1;
                return "startX" === pD && (sD > KD ? hD % UD === 0 : nD % UD === 0) || sD < KD && nD === DD || "endX" === pD && (sD > KD ? nD % UD === 0 : hD % UD === 0) || sD > KD && nD === DD
              }() && AD(GD)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(DD, zD) {
            var wD = this,
              pD = this.state,
              sD = pD.scaleValues,
              KD = pD.startX,
              rD = pD.endX,
              LD = this.state[zD],
              cD = sD.indexOf(LD);
            if (-1 !== cD) {
              var gD = cD + DD;
              if (!(-1 === gD || gD >= sD.length)) {
                var RD = sD[gD];
                "startX" === zD && RD >= rD || "endX" === zD && RD <= KD || this.setState(oD({}, zD, RD), (function() {
                  wD.props.onChange(wD.getIndex({
                    startX: wD.state.startX,
                    endX: wD.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var DD = this.props,
              zD = DD.x,
              wD = DD.y,
              sD = DD.width,
              KD = DD.height,
              rD = DD.fill,
              LD = DD.stroke;
            return pD.createElement("rect", {
              stroke: LD,
              fill: rD,
              x: zD,
              y: wD,
              width: sD,
              height: KD
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var DD = this.props,
              zD = DD.x,
              wD = DD.y,
              sD = DD.width,
              KD = DD.height,
              rD = DD.data,
              LD = DD.children,
              cD = DD.padding,
              gD = pD.Children.only(LD);
            return gD ? pD.cloneElement(gD, {
              x: zD,
              y: wD,
              width: sD,
              height: KD,
              margin: cD,
              compact: !0,
              data: rD
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(DD, wD) {
            var sD, KD, rD = this,
              LD = this.props,
              cD = LD.y,
              gD = LD.travellerWidth,
              RD = LD.height,
              AD = LD.traveller,
              UD = LD.ariaLabel,
              fD = LD.data,
              ID = LD.startIndex,
              BD = LD.endIndex,
              GD = Math.max(DD, this.props.x),
              hD = ND(ND({}, (0, XD.e)(this.props, !1)), {}, {
                x: GD,
                y: cD,
                width: gD,
                height: RD
              }),
              nD = UD || "Min value: ".concat(null === (sD = fD[ID]) || void 0 === sD ? void 0 : sD.name, ", Max value: ").concat(null === (KD = fD[BD]) || void 0 === KD ? void 0 : KD.name);
            return pD.createElement(MD.c, {
              tabIndex: 0,
              role: "slider",
              "aria-label": nD,
              "aria-valuenow": DD,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[wD],
              onTouchStart: this.travellerDragStartHandlers[wD],
              onKeyDown: function(DD) {
                ["ArrowLeft", "ArrowRight"].includes(DD.key) && (DD.preventDefault(), DD.stopPropagation(), rD.handleTravellerMoveKeyboard("ArrowRight" === DD.key ? 1 : -1, wD))
              },
              onFocus: function() {
                rD.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                rD.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, zD.renderTraveller(AD, hD))
          }
        }, {
          key: "renderSlide",
          value: function(DD, zD) {
            var wD = this.props,
              sD = wD.y,
              KD = wD.height,
              rD = wD.stroke,
              LD = wD.travellerWidth,
              cD = Math.min(DD, zD) + LD,
              gD = Math.max(Math.abs(zD - DD) - LD, 0);
            return pD.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: rD,
              fillOpacity: .2,
              x: cD,
              y: sD,
              width: gD,
              height: KD
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var DD = this.props,
              zD = DD.startIndex,
              wD = DD.endIndex,
              sD = DD.y,
              KD = DD.height,
              rD = DD.travellerWidth,
              LD = DD.stroke,
              cD = this.state,
              gD = cD.startX,
              RD = cD.endX,
              AD = {
                pointerEvents: "none",
                fill: LD
              };
            return pD.createElement(MD.c, {
              className: "recharts-brush-texts"
            }, pD.createElement(PD.d, lD({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(gD, RD) - 5,
              y: sD + KD / 2
            }, AD), this.getTextOfTick(zD)), pD.createElement(PD.d, lD({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(gD, RD) + rD + 5,
              y: sD + KD / 2
            }, AD), this.getTextOfTick(wD)))
          }
        }, {
          key: "render",
          value: function() {
            var DD = this.props,
              zD = DD.data,
              wD = DD.className,
              sD = DD.children,
              KD = DD.x,
              rD = DD.y,
              LD = DD.width,
              cD = DD.height,
              gD = DD.alwaysShowText,
              RD = this.state,
              AD = RD.startX,
              UD = RD.endX,
              fD = RD.isTextActive,
              ID = RD.isSlideMoving,
              BD = RD.isTravellerMoving,
              hD = RD.isTravellerFocused;
            if (!zD || !zD.length || !(0, xD.y)(KD) || !(0, xD.y)(rD) || !(0, xD.y)(LD) || !(0, xD.y)(cD) || LD <= 0 || cD <= 0) return null;
            var nD = (0, GD.b)("recharts-brush", wD),
              OD = 1 === pD.Children.count(sD),
              JD = function(DD, zD) {
                if (!DD) return null;
                var wD = DD.replace(/(\w)/, (function(DD) {
                    return DD.toUpperCase()
                  })),
                  pD = SD.reduce((function(DD, pD) {
                    return jD(jD({}, DD), {}, dD({}, pD + wD, zD))
                  }), {});
                return pD[DD] = zD, pD
              }("userSelect", "none");
            return pD.createElement(MD.c, {
              className: nD,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: JD
            }, this.renderBackground(), OD && this.renderPanorama(), this.renderSlide(AD, UD), this.renderTravellerLayer(AD, "startX"), this.renderTravellerLayer(UD, "endX"), (fD || ID || BD || hD || gD) && this.renderText())
          }
        }], KD = [{
          key: "renderDefaultTraveller",
          value: function(DD) {
            var zD = DD.x,
              wD = DD.y,
              sD = DD.width,
              KD = DD.height,
              rD = DD.stroke,
              LD = Math.floor(wD + KD / 2) - 1;
            return pD.createElement(pD.Fragment, null, pD.createElement("rect", {
              x: zD,
              y: wD,
              width: sD,
              height: KD,
              fill: rD,
              stroke: "none"
            }), pD.createElement("line", {
              x1: zD + 1,
              y1: LD,
              x2: zD + sD - 1,
              y2: LD,
              fill: "none",
              stroke: "#fff"
            }), pD.createElement("line", {
              x1: zD + 1,
              y1: LD + 2,
              x2: zD + sD - 1,
              y2: LD + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(DD, wD) {
            return pD.isValidElement(DD) ? pD.cloneElement(DD, wD) : LD()(DD) ? DD(wD) : zD.renderDefaultTraveller(wD)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(DD, zD) {
            var wD = DD.data,
              pD = DD.width,
              sD = DD.x,
              KD = DD.travellerWidth,
              rD = DD.updateId,
              LD = DD.startIndex,
              cD = DD.endIndex;
            if (wD !== zD.prevData || rD !== zD.prevUpdateId) return ND({
              prevData: wD,
              prevTravellerWidth: KD,
              prevUpdateId: rD,
              prevX: sD,
              prevWidth: pD
            }, wD && wD.length ? function(DD) {
              var zD = DD.data,
                wD = DD.startIndex,
                pD = DD.endIndex,
                sD = DD.x,
                KD = DD.width,
                rD = DD.travellerWidth;
              if (!zD || !zD.length) return {};
              var LD = zD.length,
                cD = (0, VD.i)().domain(gD()(0, LD)).range([sD, sD + KD - rD]),
                RD = cD.domain().map((function(DD) {
                  return cD(DD)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: cD(wD),
                endX: cD(pD),
                scale: cD,
                scaleValues: RD
              }
            }({
              data: wD,
              width: pD,
              x: sD,
              travellerWidth: KD,
              startIndex: LD,
              endIndex: cD
            }) : {
              scale: null,
              scaleValues: null
            });
            if (zD.scale && (pD !== zD.prevWidth || sD !== zD.prevX || KD !== zD.prevTravellerWidth)) {
              zD.scale.range([sD, sD + pD - KD]);
              var RD = zD.scale.domain().map((function(DD) {
                return zD.scale(DD)
              }));
              return {
                prevData: wD,
                prevTravellerWidth: KD,
                prevUpdateId: rD,
                prevX: sD,
                prevWidth: pD,
                startX: zD.scale(DD.startIndex),
                endX: zD.scale(DD.endIndex),
                scaleValues: RD
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(DD, zD) {
            for (var wD = 0, pD = DD.length - 1; pD - wD > 1;) {
              var sD = Math.floor((wD + pD) / 2);
              DD[sD] > zD ? pD = sD : wD = sD
            }
            return zD >= DD[pD] ? pD : wD
          }
        }], sD && ZD(wD.prototype, sD), KD && ZD(wD, KD), Object.defineProperty(wD, "prototype", {
          writable: !1
        }), wD;
        var wD, sD, KD
      }(pD.PureComponent);
    oD(vD, "displayName", "Brush"), oD(vD, "defaultProps", {
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
    var tD = wD(6169),
      FD = wD(6250),
      YD = wD(6265),
      HD = wD(6277),
      qD = wD(6286),
      Dz = wD(5480);

    function zz() {
      return zz = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, zz.apply(this, arguments)
    }

    function wz(DD) {
      return wz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, wz(DD)
    }

    function pz(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function sz(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? pz(Object(wD), !0).forEach((function(zD) {
          Rz(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : pz(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function Kz(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, Az(pD.key), pD)
      }
    }

    function rz(DD, zD, wD) {
      return zD = cz(zD),
        function(DD, zD) {
          if (zD && ("object" === wz(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, Lz() ? Reflect.construct(zD, wD || [], cz(DD).constructor) : zD.apply(DD, wD))
    }

    function Lz() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (Lz = function() {
        return !!DD
      })()
    }

    function cz(DD) {
      return cz = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, cz(DD)
    }

    function gz(DD, zD) {
      return gz = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, gz(DD, zD)
    }

    function Rz(DD, zD, wD) {
      return (zD = Az(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function Az(DD) {
      var zD = function(DD, zD) {
        if ("object" != wz(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != wz(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == wz(zD) ? zD : zD + ""
    }
    var Uz = function(DD) {
      function zD() {
        return function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, zD), rz(this, zD, arguments)
      }
      return function(DD, zD) {
        if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(zD && zD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), zD && gz(DD, zD)
      }(zD, DD), wD = zD, (sD = [{
        key: "render",
        value: function() {
          var DD = this.props,
            wD = DD.x,
            sD = DD.y,
            KD = DD.r,
            rD = DD.alwaysShow,
            LD = DD.clipPathId,
            cD = (0, xD.x)(wD),
            gD = (0, xD.x)(sD);
          if ((0, Dz.d)(void 0 === rD, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !cD || !gD) return null;
          var RD = function(DD) {
            var zD = DD.x,
              wD = DD.y,
              pD = DD.xAxis,
              sD = DD.yAxis,
              KD = (0, qD.d)({
                x: pD.scale,
                y: sD.scale
              }),
              rD = KD.apply({
                x: zD,
                y: wD
              }, {
                bandAware: !0
              });
            return (0, HD.c)(DD, "discard") && !KD.isInRange(rD) ? null : rD
          }(this.props);
          if (!RD) return null;
          var AD = RD.x,
            UD = RD.y,
            fD = this.props,
            ID = fD.shape,
            BD = fD.className,
            hD = sz(sz({
              clipPath: (0, HD.c)(this.props, "hidden") ? "url(#".concat(LD, ")") : void 0
            }, (0, XD.e)(this.props, !0)), {}, {
              cx: AD,
              cy: UD
            });
          return pD.createElement(MD.c, {
            className: (0, GD.b)("recharts-reference-dot", BD)
          }, zD.renderDot(ID, hD), YD.d.renderCallByParent(this.props, {
            x: AD - KD,
            y: UD - KD,
            width: 2 * KD,
            height: 2 * KD
          }))
        }
      }]) && Kz(wD.prototype, sD), KD && Kz(wD, KD), Object.defineProperty(wD, "prototype", {
        writable: !1
      }), wD;
      var wD, sD, KD
    }(pD.Component);
    Rz(Uz, "displayName", "ReferenceDot"), Rz(Uz, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), Rz(Uz, "renderDot", (function(DD, zD) {
      return pD.isValidElement(DD) ? pD.cloneElement(DD, zD) : LD()(DD) ? DD(zD) : pD.createElement(ED.e, zz({}, zD, {
        cx: zD.cx,
        cy: zD.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var fz = wD(6365);

    function Iz() {
      return Iz = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, Iz.apply(this, arguments)
    }

    function Bz(DD) {
      return Bz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, Bz(DD)
    }

    function Gz(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function hz(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? Gz(Object(wD), !0).forEach((function(zD) {
          Qz(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : Gz(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function nz(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, Xz(pD.key), pD)
      }
    }

    function Mz(DD, zD, wD) {
      return zD = Jz(zD),
        function(DD, zD) {
          if (zD && ("object" === Bz(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, Oz() ? Reflect.construct(zD, wD || [], Jz(DD).constructor) : zD.apply(DD, wD))
    }

    function Oz() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (Oz = function() {
        return !!DD
      })()
    }

    function Jz(DD) {
      return Jz = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, Jz(DD)
    }

    function Ez(DD, zD) {
      return Ez = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, Ez(DD, zD)
    }

    function Qz(DD, zD, wD) {
      return (zD = Xz(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function Xz(DD) {
      var zD = function(DD, zD) {
        if ("object" != Bz(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != Bz(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == Bz(zD) ? zD : zD + ""
    }
    var Vz = function(DD) {
      function zD() {
        return function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, zD), Mz(this, zD, arguments)
      }
      return function(DD, zD) {
        if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(zD && zD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), zD && Ez(DD, zD)
      }(zD, DD), wD = zD, (sD = [{
        key: "render",
        value: function() {
          var DD = this.props,
            wD = DD.x1,
            sD = DD.x2,
            KD = DD.y1,
            rD = DD.y2,
            LD = DD.className,
            cD = DD.alwaysShow,
            gD = DD.clipPathId;
          (0, Dz.d)(void 0 === cD, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var RD = (0, xD.x)(wD),
            AD = (0, xD.x)(sD),
            UD = (0, xD.x)(KD),
            fD = (0, xD.x)(rD),
            ID = this.props.shape;
          if (!RD && !AD && !UD && !fD && !ID) return null;
          var BD = function(DD, zD, wD, pD, sD) {
            var KD = sD.x1,
              rD = sD.x2,
              LD = sD.y1,
              cD = sD.y2,
              gD = sD.xAxis,
              RD = sD.yAxis;
            if (!gD || !RD) return null;
            var AD = (0, qD.d)({
                x: gD.scale,
                y: RD.scale
              }),
              UD = {
                x: DD ? AD.x.apply(KD, {
                  position: "start"
                }) : AD.x.rangeMin,
                y: wD ? AD.y.apply(LD, {
                  position: "start"
                }) : AD.y.rangeMin
              },
              fD = {
                x: zD ? AD.x.apply(rD, {
                  position: "end"
                }) : AD.x.rangeMax,
                y: pD ? AD.y.apply(cD, {
                  position: "end"
                }) : AD.y.rangeMax
              };
            return !(0, HD.c)(sD, "discard") || AD.isInRange(UD) && AD.isInRange(fD) ? (0, qD.l)(UD, fD) : null
          }(RD, AD, UD, fD, this.props);
          if (!BD && !ID) return null;
          var hD = (0, HD.c)(this.props, "hidden") ? "url(#".concat(gD, ")") : void 0;
          return pD.createElement(MD.c, {
            className: (0, GD.b)("recharts-reference-area", LD)
          }, zD.renderRect(ID, hz(hz({
            clipPath: hD
          }, (0, XD.e)(this.props, !0)), BD)), YD.d.renderCallByParent(this.props, BD))
        }
      }]) && nz(wD.prototype, sD), KD && nz(wD, KD), Object.defineProperty(wD, "prototype", {
        writable: !1
      }), wD;
      var wD, sD, KD
    }(pD.Component);

    function Pz(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return Cz(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return Cz(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return Cz(DD, zD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Cz(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }
    Qz(Vz, "displayName", "ReferenceArea"), Qz(Vz, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), Qz(Vz, "renderRect", (function(DD, zD) {
      return pD.isValidElement(DD) ? pD.cloneElement(DD, zD) : LD()(DD) ? DD(zD) : pD.createElement(QD.c, Iz({}, zD, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var xz = function(DD, zD, wD, pD, sD) {
        var KD = (0, XD.g)(DD, fz.d),
          rD = (0, XD.g)(DD, Uz),
          LD = [].concat(Pz(KD), Pz(rD)),
          cD = (0, XD.g)(DD, Vz),
          gD = "".concat(pD, "Id"),
          RD = pD[0],
          AD = zD;
        if (LD.length && (AD = LD.reduce((function(DD, zD) {
            if (zD.props[gD] === wD && (0, HD.c)(zD.props, "extendDomain") && (0, xD.y)(zD.props[RD])) {
              var pD = zD.props[RD];
              return [Math.min(DD[0], pD), Math.max(DD[1], pD)]
            }
            return DD
          }), AD)), cD.length) {
          var UD = "".concat(RD, "1"),
            fD = "".concat(RD, "2");
          AD = cD.reduce((function(DD, zD) {
            if (zD.props[gD] === wD && (0, HD.c)(zD.props, "extendDomain") && (0, xD.y)(zD.props[UD]) && (0, xD.y)(zD.props[fD])) {
              var pD = zD.props[UD],
                sD = zD.props[fD];
              return [Math.min(DD[0], pD, sD), Math.max(DD[1], pD, sD)]
            }
            return DD
          }), AD)
        }
        return sD && sD.length && (AD = sD.reduce((function(DD, zD) {
          return (0, xD.y)(zD) ? [Math.min(DD[0], zD), Math.max(DD[1], zD)] : DD
        }), AD)), AD
      },
      Tz = wD(6270),
      bz = wD(5500),
      jz = wD(28),
      dz = new(wD.n(jz)()),
      Sz = "recharts.syncMouseEvents",
      iz = wD(5505);

    function lz(DD) {
      return lz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, lz(DD)
    }

    function Wz(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, Zz(pD.key), pD)
      }
    }

    function Nz(DD, zD, wD) {
      return (zD = Zz(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function Zz(DD) {
      var zD = function(DD, zD) {
        if ("object" != lz(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != lz(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == lz(zD) ? zD : zD + ""
    }
    var yz = function() {
      return DD = function DD() {
        ! function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, DD), Nz(this, "activeIndex", 0), Nz(this, "coordinateList", []), Nz(this, "layout", "horizontal")
      }, (zD = [{
        key: "setDetails",
        value: function(DD) {
          var zD, wD = DD.coordinateList,
            pD = void 0 === wD ? null : wD,
            sD = DD.container,
            KD = void 0 === sD ? null : sD,
            rD = DD.layout,
            LD = void 0 === rD ? null : rD,
            cD = DD.offset,
            gD = void 0 === cD ? null : cD,
            RD = DD.mouseHandlerCallback,
            AD = void 0 === RD ? null : RD;
          this.coordinateList = null !== (zD = null !== pD && void 0 !== pD ? pD : this.coordinateList) && void 0 !== zD ? zD : [], this.container = null !== KD && void 0 !== KD ? KD : this.container, this.layout = null !== LD && void 0 !== LD ? LD : this.layout, this.offset = null !== gD && void 0 !== gD ? gD : this.offset, this.mouseHandlerCallback = null !== AD && void 0 !== AD ? AD : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(DD) {
          if (0 !== this.coordinateList.length) switch (DD.key) {
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
        value: function(DD) {
          this.activeIndex = DD
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var DD, zD;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var wD = this.container.getBoundingClientRect(),
              pD = wD.x,
              sD = wD.y,
              KD = wD.height,
              rD = this.coordinateList[this.activeIndex].coordinate,
              LD = (null === (DD = window) || void 0 === DD ? void 0 : DD.scrollX) || 0,
              cD = (null === (zD = window) || void 0 === zD ? void 0 : zD.scrollY) || 0,
              gD = pD + rD + LD,
              RD = sD + this.offset.top + KD / 2 + cD;
            this.mouseHandlerCallback({
              pageX: gD,
              pageY: RD
            })
          }
        }
      }]) && Wz(DD.prototype, zD), wD && Wz(DD, wD), Object.defineProperty(DD, "prototype", {
        writable: !1
      }), DD;
      var DD, zD, wD
    }();
    var kz = wD(6337),
      mz = wD(6412);

    function ez(DD) {
      return ez = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, ez(DD)
    }
    var oz = ["x", "y", "top", "left", "width", "height", "className"];

    function az() {
      return az = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, az.apply(this, arguments)
    }

    function uz(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function vz(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != ez(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != ez(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == ez(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function tz(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }
    var Fz = function(DD, zD, wD, pD, sD, KD) {
        return "M".concat(DD, ",").concat(sD, "v").concat(pD, "M").concat(KD, ",").concat(zD, "h").concat(wD)
      },
      Yz = function(DD) {
        var zD = DD.x,
          wD = void 0 === zD ? 0 : zD,
          sD = DD.y,
          KD = void 0 === sD ? 0 : sD,
          rD = DD.top,
          LD = void 0 === rD ? 0 : rD,
          cD = DD.left,
          gD = void 0 === cD ? 0 : cD,
          RD = DD.width,
          AD = void 0 === RD ? 0 : RD,
          UD = DD.height,
          fD = void 0 === UD ? 0 : UD,
          ID = DD.className,
          BD = function(DD) {
            for (var zD = 1; zD < arguments.length; zD++) {
              var wD = null != arguments[zD] ? arguments[zD] : {};
              zD % 2 ? uz(Object(wD), !0).forEach((function(zD) {
                vz(DD, zD, wD[zD])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : uz(Object(wD)).forEach((function(zD) {
                Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
              }))
            }
            return DD
          }({
            x: wD,
            y: KD,
            top: LD,
            left: gD,
            width: AD,
            height: fD
          }, tz(DD, oz));
        return (0, xD.y)(wD) && (0, xD.y)(KD) && (0, xD.y)(AD) && (0, xD.y)(fD) && (0, xD.y)(LD) && (0, xD.y)(gD) ? pD.createElement("path", az({}, (0, XD.e)(BD, !0), {
          className: (0, GD.b)("recharts-cross", ID),
          d: Fz(wD, KD, AD, fD, LD, gD)
        })) : null
      };

    function Hz(DD) {
      var zD = DD.cx,
        wD = DD.cy,
        pD = DD.radius,
        sD = DD.startAngle,
        KD = DD.endAngle;
      return {
        points: [(0, Tz.f)(zD, wD, pD, sD), (0, Tz.f)(zD, wD, pD, KD)],
        cx: zD,
        cy: wD,
        radius: pD,
        startAngle: sD,
        endAngle: KD
      }
    }
    var qz = wD(6357);

    function Dw(DD, zD, wD) {
      var pD, sD, KD, rD;
      if ("horizontal" === DD) KD = pD = zD.x, sD = wD.top, rD = wD.top + wD.height;
      else if ("vertical" === DD) rD = sD = zD.y, pD = wD.left, KD = wD.left + wD.width;
      else if (null != zD.cx && null != zD.cy) {
        if ("centric" !== DD) return Hz(zD);
        var LD = zD.cx,
          cD = zD.cy,
          gD = zD.innerRadius,
          RD = zD.outerRadius,
          AD = zD.angle,
          UD = (0, Tz.f)(LD, cD, gD, AD),
          fD = (0, Tz.f)(LD, cD, RD, AD);
        pD = UD.x, sD = UD.y, KD = fD.x, rD = fD.y
      }
      return [{
        x: pD,
        y: sD
      }, {
        x: KD,
        y: rD
      }]
    }

    function zw(DD) {
      return zw = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, zw(DD)
    }

    function ww(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function pw(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? ww(Object(wD), !0).forEach((function(zD) {
          sw(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : ww(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function sw(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != zw(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != zw(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == zw(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function Kw(DD) {
      var zD, wD, sD, KD = DD.element,
        rD = DD.tooltipEventType,
        LD = DD.isActive,
        cD = DD.activeCoordinate,
        gD = DD.activePayload,
        RD = DD.offset,
        AD = DD.activeTooltipIndex,
        UD = DD.tooltipAxisBandSize,
        fD = DD.layout,
        ID = DD.chartName,
        BD = null !== (zD = KD.props.cursor) && void 0 !== zD ? zD : null === (wD = KD.type.defaultProps) || void 0 === wD ? void 0 : wD.cursor;
      if (!KD || !BD || !LD || !cD || "ScatterChart" !== ID && "axis" !== rD) return null;
      var hD = mz.e;
      if ("ScatterChart" === ID) sD = cD, hD = Yz;
      else if ("BarChart" === ID) sD = function(DD, zD, wD, pD) {
        var sD = pD / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === DD ? zD.x - sD : wD.left + .5,
          y: "horizontal" === DD ? wD.top + .5 : zD.y - sD,
          width: "horizontal" === DD ? pD : wD.width - 1,
          height: "horizontal" === DD ? wD.height - 1 : pD
        }
      }(fD, cD, RD, UD), hD = QD.c;
      else if ("radial" === fD) {
        var nD = Hz(cD),
          MD = nD.cx,
          OD = nD.cy,
          JD = nD.radius;
        sD = {
          cx: MD,
          cy: OD,
          startAngle: nD.startAngle,
          endAngle: nD.endAngle,
          innerRadius: JD,
          outerRadius: JD
        }, hD = qz.c
      } else sD = {
        points: Dw(fD, cD, RD)
      }, hD = mz.e;
      var ED = pw(pw(pw(pw({
        stroke: "#ccc",
        pointerEvents: "none"
      }, RD), sD), (0, XD.e)(BD, !1)), {}, {
        payload: gD,
        payloadIndex: AD,
        className: (0, GD.b)("recharts-tooltip-cursor", BD.className)
      });
      return (0, pD.isValidElement)(BD) ? (0, pD.cloneElement)(BD, ED) : (0, pD.createElement)(hD, ED)
    }
    var rw = wD(6383),
      Lw = ["item"],
      gw = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function Rw(DD) {
      return Rw = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, Rw(DD)
    }

    function Aw() {
      return Aw = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, Aw.apply(this, arguments)
    }

    function Uw(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        var wD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != wD) {
          var pD, sD, KD, rD, LD = [],
            cD = !0,
            gD = !1;
          try {
            if (KD = (wD = wD.call(DD)).next, 0 === zD) {
              if (Object(wD) !== wD) return;
              cD = !1
            } else
              for (; !(cD = (pD = KD.call(wD)).done) && (LD.push(pD.value), LD.length !== zD); cD = !0);
          } catch (DD) {
            gD = !0, sD = DD
          } finally {
            try {
              if (!cD && null != wD.return && (rD = wD.return(), Object(rD) !== rD)) return
            } finally {
              if (gD) throw sD
            }
          }
          return LD
        }
      }(DD, zD) || Ow(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fw(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function Iw(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, Vw(pD.key), pD)
      }
    }

    function Bw(DD, zD, wD) {
      return zD = hw(zD),
        function(DD, zD) {
          if (zD && ("object" === Rw(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, Gw() ? Reflect.construct(zD, wD || [], hw(DD).constructor) : zD.apply(DD, wD))
    }

    function Gw() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (Gw = function() {
        return !!DD
      })()
    }

    function hw(DD) {
      return hw = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, hw(DD)
    }

    function nw(DD, zD) {
      return nw = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, nw(DD, zD)
    }

    function Mw(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return Jw(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || Ow(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ow(DD, zD) {
      if (DD) {
        if ("string" === typeof DD) return Jw(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        return "Object" === wD && DD.constructor && (wD = DD.constructor.name), "Map" === wD || "Set" === wD ? Array.from(DD) : "Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD) ? Jw(DD, zD) : void 0
      }
    }

    function Jw(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function Ew(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function Qw(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? Ew(Object(wD), !0).forEach((function(zD) {
          Xw(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : Ew(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function Xw(DD, zD, wD) {
      return (zD = Vw(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function Vw(DD) {
      var zD = function(DD, zD) {
        if ("object" != Rw(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != Rw(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == Rw(zD) ? zD : zD + ""
    }
    var Pw = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      Cw = {
        width: "100%",
        height: "100%"
      },
      xw = {
        x: 0,
        y: 0
      };

    function Tw(DD) {
      return DD
    }
    var bw = function(DD, zD) {
      var wD = zD.graphicalItems,
        pD = zD.dataStartIndex,
        sD = zD.dataEndIndex,
        KD = (null !== wD && void 0 !== wD ? wD : []).reduce((function(DD, zD) {
          var wD = zD.props.data;
          return wD && wD.length ? [].concat(Mw(DD), Mw(wD)) : DD
        }), []);
      return KD.length > 0 ? KD : DD && DD.length && (0, xD.y)(pD) && (0, xD.y)(sD) ? DD.slice(pD, sD + 1) : []
    };

    function jw(DD) {
      return "number" === DD ? [0, "auto"] : void 0
    }
    var dw = function(DD, zD, wD, pD) {
        var sD = DD.graphicalItems,
          KD = DD.tooltipAxis,
          rD = bw(zD, DD);
        return wD < 0 || !sD || !sD.length || wD >= rD.length ? null : sD.reduce((function(sD, LD) {
          var cD, gD, RD = null !== (cD = LD.props.data) && void 0 !== cD ? cD : zD;
          if (RD && DD.dataStartIndex + DD.dataEndIndex !== 0 && DD.dataEndIndex - DD.dataStartIndex >= wD && (RD = RD.slice(DD.dataStartIndex, DD.dataEndIndex + 1)), KD.dataKey && !KD.allowDuplicatedCategory) {
            var AD = void 0 === RD ? rD : RD;
            gD = (0, xD.e)(AD, KD.dataKey, pD)
          } else gD = RD && RD[wD] || rD[wD];
          return gD ? [].concat(Mw(sD), [(0, CD.X)(LD, gD)]) : sD
        }), [])
      },
      Sw = function(DD, zD, wD, pD) {
        var sD = pD || {
            x: DD.chartX,
            y: DD.chartY
          },
          KD = function(DD, zD) {
            return "horizontal" === zD ? DD.x : "vertical" === zD ? DD.y : "centric" === zD ? DD.angle : DD.radius
          }(sD, wD),
          rD = DD.orderedTooltipTicks,
          LD = DD.tooltipAxis,
          cD = DD.tooltipTicks,
          gD = (0, CD.h)(KD, rD, cD, LD);
        if (gD >= 0 && cD) {
          var RD = cD[gD] && cD[gD].value,
            AD = dw(DD, zD, gD, RD),
            UD = function(DD, zD, wD, pD) {
              var sD = zD.find((function(DD) {
                return DD && DD.index === wD
              }));
              if (sD) {
                if ("horizontal" === DD) return {
                  x: sD.coordinate,
                  y: pD.y
                };
                if ("vertical" === DD) return {
                  x: pD.x,
                  y: sD.coordinate
                };
                if ("centric" === DD) {
                  var KD = sD.coordinate,
                    rD = pD.radius;
                  return Qw(Qw(Qw({}, pD), (0, Tz.f)(pD.cx, pD.cy, rD, KD)), {}, {
                    angle: KD,
                    radius: rD
                  })
                }
                var LD = sD.coordinate,
                  cD = pD.angle;
                return Qw(Qw(Qw({}, pD), (0, Tz.f)(pD.cx, pD.cy, LD, cD)), {}, {
                  angle: cD,
                  radius: LD
                })
              }
              return xw
            }(wD, rD, gD, sD);
          return {
            activeTooltipIndex: gD,
            activeLabel: RD,
            activePayload: AD,
            activeCoordinate: UD
          }
        }
        return null
      },
      iw = function(DD, zD) {
        var wD = zD.axes,
          pD = zD.graphicalItems,
          sD = zD.axisType,
          rD = zD.axisIdKey,
          LD = zD.stackGroups,
          cD = zD.dataStartIndex,
          RD = zD.dataEndIndex,
          AD = DD.layout,
          UD = DD.children,
          fD = DD.stackOffset,
          ID = (0, CD.$)(AD, sD);
        return wD.reduce((function(zD, wD) {
          var BD, GD = void 0 !== wD.type.defaultProps ? Qw(Qw({}, wD.type.defaultProps), wD.props) : wD.props,
            hD = GD.type,
            nD = GD.dataKey,
            MD = GD.allowDataOverflow,
            OD = GD.allowDuplicatedCategory,
            JD = GD.scale,
            ED = GD.ticks,
            QD = GD.includeHidden,
            XD = GD[rD];
          if (zD[XD]) return zD;
          var VD, PD, TD, bD = bw(DD.data, {
              graphicalItems: pD.filter((function(DD) {
                var zD;
                return (rD in DD.props ? DD.props[rD] : null === (zD = DD.type.defaultProps) || void 0 === zD ? void 0 : zD[rD]) === XD
              })),
              dataStartIndex: cD,
              dataEndIndex: RD
            }),
            jD = bD.length;
          (function(DD, zD, wD) {
            if ("number" === wD && !0 === zD && Array.isArray(DD)) {
              var pD = null === DD || void 0 === DD ? void 0 : DD[0],
                sD = null === DD || void 0 === DD ? void 0 : DD[1];
              if (pD && sD && (0, xD.y)(pD) && (0, xD.y)(sD)) return !0
            }
            return !1
          })(GD.domain, MD, hD) && (VD = (0, CD.jb)(GD.domain, null, MD), !ID || "number" !== hD && "auto" === JD || (TD = (0, CD.H)(bD, nD, "category")));
          var dD = jw(hD);
          if (!VD || 0 === VD.length) {
            var SD, iD = null !== (SD = GD.domain) && void 0 !== SD ? SD : dD;
            if (nD) {
              if (VD = (0, CD.H)(bD, nD, hD), "category" === hD && ID) {
                var lD = (0, xD.p)(VD);
                OD && lD ? (PD = VD, VD = gD()(0, jD)) : OD || (VD = (0, CD.bb)(iD, VD, wD).reduce((function(DD, zD) {
                  return DD.indexOf(zD) >= 0 ? DD : [].concat(Mw(DD), [zD])
                }), []))
              } else if ("category" === hD) VD = OD ? VD.filter((function(DD) {
                return "" !== DD && !KD()(DD)
              })) : (0, CD.bb)(iD, VD, wD).reduce((function(DD, zD) {
                return DD.indexOf(zD) >= 0 || "" === zD || KD()(zD) ? DD : [].concat(Mw(DD), [zD])
              }), []);
              else if ("number" === hD) {
                var WD = (0, CD.eb)(bD, pD.filter((function(DD) {
                  var zD, wD, pD = rD in DD.props ? DD.props[rD] : null === (zD = DD.type.defaultProps) || void 0 === zD ? void 0 : zD[rD],
                    sD = "hide" in DD.props ? DD.props.hide : null === (wD = DD.type.defaultProps) || void 0 === wD ? void 0 : wD.hide;
                  return pD === XD && (QD || !sD)
                })), nD, sD, AD);
                WD && (VD = WD)
              }!ID || "number" !== hD && "auto" === JD || (TD = (0, CD.H)(bD, nD, "category"))
            } else VD = ID ? gD()(0, jD) : LD && LD[XD] && LD[XD].hasStack && "number" === hD ? "expand" === fD ? [0, 1] : (0, CD.M)(LD[XD].stackGroups, cD, RD) : (0, CD.K)(bD, pD.filter((function(DD) {
              var zD = rD in DD.props ? DD.props[rD] : DD.type.defaultProps[rD],
                wD = "hide" in DD.props ? DD.props.hide : DD.type.defaultProps.hide;
              return zD === XD && (QD || !wD)
            })), hD, AD, !0);
            if ("number" === hD) VD = xz(UD, VD, XD, sD, ED), iD && (VD = (0, CD.jb)(iD, VD, MD));
            else if ("category" === hD && iD) {
              var ND = iD;
              VD.every((function(DD) {
                return ND.indexOf(DD) >= 0
              })) && (VD = ND)
            }
          }
          return Qw(Qw({}, zD), {}, Xw({}, XD, Qw(Qw({}, GD), {}, {
            axisType: sD,
            domain: VD,
            categoricalDomain: TD,
            duplicateDomain: PD,
            originalDomain: null !== (BD = GD.domain) && void 0 !== BD ? BD : dD,
            isCategorical: ID,
            layout: AD
          })))
        }), {})
      },
      lw = function(DD, zD) {
        var wD = zD.axisType,
          pD = void 0 === wD ? "xAxis" : wD,
          sD = zD.AxisComp,
          KD = zD.graphicalItems,
          rD = zD.stackGroups,
          LD = zD.dataStartIndex,
          cD = zD.dataEndIndex,
          RD = DD.children,
          UD = "".concat(pD, "Id"),
          fD = (0, XD.g)(RD, sD),
          ID = {};
        return fD && fD.length ? ID = iw(DD, {
          axes: fD,
          graphicalItems: KD,
          axisType: pD,
          axisIdKey: UD,
          stackGroups: rD,
          dataStartIndex: LD,
          dataEndIndex: cD
        }) : KD && KD.length && (ID = function(DD, zD) {
          var wD = zD.graphicalItems,
            pD = zD.Axis,
            sD = zD.axisType,
            KD = zD.axisIdKey,
            rD = zD.stackGroups,
            LD = zD.dataStartIndex,
            cD = zD.dataEndIndex,
            RD = DD.layout,
            UD = DD.children,
            fD = bw(DD.data, {
              graphicalItems: wD,
              dataStartIndex: LD,
              dataEndIndex: cD
            }),
            ID = fD.length,
            BD = (0, CD.$)(RD, sD),
            GD = -1;
          return wD.reduce((function(DD, zD) {
            var hD, nD = (void 0 !== zD.type.defaultProps ? Qw(Qw({}, zD.type.defaultProps), zD.props) : zD.props)[KD],
              MD = jw("number");
            return DD[nD] ? DD : (GD++, BD ? hD = gD()(0, ID) : rD && rD[nD] && rD[nD].hasStack ? (hD = (0, CD.M)(rD[nD].stackGroups, LD, cD), hD = xz(UD, hD, nD, sD)) : (hD = (0, CD.jb)(MD, (0, CD.K)(fD, wD.filter((function(DD) {
              var zD, wD, pD = KD in DD.props ? DD.props[KD] : null === (zD = DD.type.defaultProps) || void 0 === zD ? void 0 : zD[KD],
                sD = "hide" in DD.props ? DD.props.hide : null === (wD = DD.type.defaultProps) || void 0 === wD ? void 0 : wD.hide;
              return pD === nD && !sD
            })), "number", RD), pD.defaultProps.allowDataOverflow), hD = xz(UD, hD, nD, sD)), Qw(Qw({}, DD), {}, Xw({}, nD, Qw(Qw({
              axisType: sD
            }, pD.defaultProps), {}, {
              hide: !0,
              orientation: AD()(Pw, "".concat(sD, ".").concat(GD % 2), null),
              domain: hD,
              originalDomain: MD,
              isCategorical: BD,
              layout: RD
            }))))
          }), {})
        }(DD, {
          Axis: sD,
          graphicalItems: KD,
          axisType: pD,
          axisIdKey: UD,
          stackGroups: rD,
          dataStartIndex: LD,
          dataEndIndex: cD
        })), ID
      },
      Ww = function(DD) {
        var zD = DD.children,
          wD = DD.defaultShowTooltip,
          pD = (0, XD.h)(zD, vD),
          sD = 0,
          KD = 0;
        return DD.data && 0 !== DD.data.length && (KD = DD.data.length - 1), pD && pD.props && (pD.props.startIndex >= 0 && (sD = pD.props.startIndex), pD.props.endIndex >= 0 && (KD = pD.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: sD,
          dataEndIndex: KD,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(wD)
        }
      },
      Nw = function(DD) {
        return "horizontal" === DD ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === DD ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === DD ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      Zw = function(DD, zD) {
        return "xAxis" === zD ? DD[zD].width : "yAxis" === zD ? DD[zD].height : void 0
      },
      yw = function(DD) {
        var zD = DD.chartName,
          wD = DD.GraphicalChild,
          sD = DD.defaultTooltipEventType,
          rD = void 0 === sD ? "axis" : sD,
          cD = DD.validateTooltipEventTypes,
          gD = void 0 === cD ? ["axis"] : cD,
          RD = DD.axisComponents,
          UD = DD.legendContent,
          ID = DD.formatAxisMap,
          VD = DD.defaultProps,
          PD = function(DD, zD) {
            var wD = zD.graphicalItems,
              pD = zD.stackGroups,
              sD = zD.offset,
              rD = zD.updateId,
              LD = zD.dataStartIndex,
              cD = zD.dataEndIndex,
              gD = DD.barSize,
              AD = DD.layout,
              UD = DD.barGap,
              fD = DD.barCategoryGap,
              ID = DD.maxBarSize,
              BD = Nw(AD),
              GD = BD.numericAxisName,
              nD = BD.cateAxisName,
              MD = function(DD) {
                return !(!DD || !DD.length) && DD.some((function(DD) {
                  var zD = (0, XD.j)(DD && DD.type);
                  return zD && zD.indexOf("Bar") >= 0
                }))
              }(wD),
              OD = [];
            return wD.forEach((function(wD, BD) {
              var JD = bw(DD.data, {
                  graphicalItems: [wD],
                  dataStartIndex: LD,
                  dataEndIndex: cD
                }),
                ED = void 0 !== wD.type.defaultProps ? Qw(Qw({}, wD.type.defaultProps), wD.props) : wD.props,
                QD = ED.dataKey,
                VD = ED.maxBarSize,
                PD = ED["".concat(GD, "Id")],
                xD = ED["".concat(nD, "Id")],
                TD = RD.reduce((function(DD, wD) {
                  var pD = zD["".concat(wD.axisType, "Map")],
                    sD = ED["".concat(wD.axisType, "Id")];
                  pD && pD[sD] || "zAxis" === wD.axisType || (0, hD.c)(!1);
                  var KD = pD[sD];
                  return Qw(Qw({}, DD), {}, Xw(Xw({}, wD.axisType, KD), "".concat(wD.axisType, "Ticks"), (0, CD.T)(KD)))
                }), {}),
                bD = TD[nD],
                jD = TD["".concat(nD, "Ticks")],
                dD = pD && pD[PD] && pD[PD].hasStack && (0, CD.S)(wD, pD[PD].stackGroups),
                SD = (0, XD.j)(wD.type).indexOf("Bar") >= 0,
                iD = (0, CD.m)(bD, jD),
                lD = [],
                WD = MD && (0, CD.t)({
                  barSize: gD,
                  stackGroups: pD,
                  totalSize: Zw(TD, nD)
                });
              if (SD) {
                var ND, ZD, yD = KD()(VD) ? ID : VD,
                  kD = null !== (ND = null !== (ZD = (0, CD.m)(bD, jD, !0)) && void 0 !== ZD ? ZD : yD) && void 0 !== ND ? ND : 0;
                lD = (0, CD.p)({
                  barGap: UD,
                  barCategoryGap: fD,
                  bandSize: kD !== iD ? kD : iD,
                  sizeList: WD[xD],
                  maxBarSize: yD
                }), kD !== iD && (lD = lD.map((function(DD) {
                  return Qw(Qw({}, DD), {}, {
                    position: Qw(Qw({}, DD.position), {}, {
                      offset: DD.position.offset - kD / 2
                    })
                  })
                })))
              }
              var mD = wD && wD.type && wD.type.getComposedData;
              mD && OD.push({
                props: Qw(Qw({}, mD(Qw(Qw({}, TD), {}, {
                  displayedData: JD,
                  props: DD,
                  dataKey: QD,
                  item: wD,
                  bandSize: iD,
                  barPosition: lD,
                  offset: sD,
                  stackedData: dD,
                  layout: AD,
                  dataStartIndex: LD,
                  dataEndIndex: cD
                }))), {}, Xw(Xw(Xw({
                  key: wD.key || "item-".concat(BD)
                }, GD, TD[GD]), nD, TD[nD]), "animationId", rD)),
                childIndex: (0, XD.r)(wD, DD.children),
                item: wD
              })
            })), OD
          },
          TD = function(DD, pD) {
            var sD = DD.props,
              KD = DD.dataStartIndex,
              rD = DD.dataEndIndex,
              LD = DD.updateId;
            if (!(0, XD.x)({
                props: sD
              })) return null;
            var cD = sD.children,
              gD = sD.layout,
              UD = sD.stackOffset,
              BD = sD.data,
              GD = sD.reverseStackOrder,
              hD = Nw(gD),
              nD = hD.numericAxisName,
              MD = hD.cateAxisName,
              OD = (0, XD.g)(cD, wD),
              ED = (0, CD.P)(BD, OD, "".concat(nD, "Id"), "".concat(MD, "Id"), UD, GD),
              QD = RD.reduce((function(DD, zD) {
                var wD = "".concat(zD.axisType, "Map");
                return Qw(Qw({}, DD), {}, Xw({}, wD, lw(sD, Qw(Qw({}, zD), {}, {
                  graphicalItems: OD,
                  stackGroups: zD.axisType === nD && ED,
                  dataStartIndex: KD,
                  dataEndIndex: rD
                }))))
              }), {}),
              VD = function(DD, zD) {
                var wD = DD.props,
                  pD = DD.graphicalItems,
                  sD = DD.xAxisMap,
                  KD = void 0 === sD ? {} : sD,
                  rD = DD.yAxisMap,
                  LD = void 0 === rD ? {} : rD,
                  cD = wD.width,
                  gD = wD.height,
                  RD = wD.children,
                  UD = wD.margin || {},
                  fD = (0, XD.h)(RD, vD),
                  ID = (0, XD.h)(RD, JD.b),
                  BD = Object.keys(LD).reduce((function(DD, zD) {
                    var wD = LD[zD],
                      pD = wD.orientation;
                    return wD.mirror || wD.hide ? DD : Qw(Qw({}, DD), {}, Xw({}, pD, DD[pD] + wD.width))
                  }), {
                    left: UD.left || 0,
                    right: UD.right || 0
                  }),
                  GD = Object.keys(KD).reduce((function(DD, zD) {
                    var wD = KD[zD],
                      pD = wD.orientation;
                    return wD.mirror || wD.hide ? DD : Qw(Qw({}, DD), {}, Xw({}, pD, AD()(DD, "".concat(pD)) + wD.height))
                  }), {
                    top: UD.top || 0,
                    bottom: UD.bottom || 0
                  }),
                  hD = Qw(Qw({}, GD), BD),
                  nD = hD.bottom;
                fD && (hD.bottom += fD.props.height || vD.defaultProps.height), ID && zD && (hD = (0, CD.e)(hD, pD, wD, zD));
                var MD = cD - hD.left - hD.right,
                  OD = gD - hD.top - hD.bottom;
                return Qw(Qw({
                  brushBottom: nD
                }, hD), {}, {
                  width: Math.max(MD, 0),
                  height: Math.max(OD, 0)
                })
              }(Qw(Qw({}, QD), {}, {
                props: sD,
                graphicalItems: OD
              }), null === pD || void 0 === pD ? void 0 : pD.legendBBox);
            Object.keys(QD).forEach((function(DD) {
              QD[DD] = ID(sD, QD[DD], VD, DD.replace("Map", ""), zD)
            }));
            var TD = function(DD) {
                var zD = (0, xD.h)(DD),
                  wD = (0, CD.T)(zD, !1, !0);
                return {
                  tooltipTicks: wD,
                  orderedTooltipTicks: fD()(wD, (function(DD) {
                    return DD.coordinate
                  })),
                  tooltipAxis: zD,
                  tooltipAxisBandSize: (0, CD.m)(zD, wD)
                }
              }(QD["".concat(MD, "Map")]),
              bD = PD(sD, Qw(Qw({}, QD), {}, {
                dataStartIndex: KD,
                dataEndIndex: rD,
                updateId: LD,
                graphicalItems: OD,
                stackGroups: ED,
                offset: VD
              }));
            return Qw(Qw({
              formattedGraphicalItems: bD,
              graphicalItems: OD,
              offset: VD,
              stackGroups: ED
            }, TD), QD)
          },
          bD = function(DD) {
            function wD(DD) {
              var sD, rD, cD;
              return function(DD, zD) {
                if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
              }(this, wD), Xw(cD = Bw(this, wD, [DD]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Xw(cD, "accessibilityManager", new yz), Xw(cD, "handleLegendBBoxUpdate", (function(DD) {
                if (DD) {
                  var zD = cD.state,
                    wD = zD.dataStartIndex,
                    pD = zD.dataEndIndex,
                    sD = zD.updateId;
                  cD.setState(Qw({
                    legendBBox: DD
                  }, TD({
                    props: cD.props,
                    dataStartIndex: wD,
                    dataEndIndex: pD,
                    updateId: sD
                  }, Qw(Qw({}, cD.state), {}, {
                    legendBBox: DD
                  }))))
                }
              })), Xw(cD, "handleReceiveSyncEvent", (function(DD, zD, wD) {
                if (cD.props.syncId === DD) {
                  if (wD === cD.eventEmitterSymbol && "function" !== typeof cD.props.syncMethod) return;
                  cD.applySyncEvent(zD)
                }
              })), Xw(cD, "handleBrushChange", (function(DD) {
                var zD = DD.startIndex,
                  wD = DD.endIndex;
                if (zD !== cD.state.dataStartIndex || wD !== cD.state.dataEndIndex) {
                  var pD = cD.state.updateId;
                  cD.setState((function() {
                    return Qw({
                      dataStartIndex: zD,
                      dataEndIndex: wD
                    }, TD({
                      props: cD.props,
                      dataStartIndex: zD,
                      dataEndIndex: wD,
                      updateId: pD
                    }, cD.state))
                  })), cD.triggerSyncEvent({
                    dataStartIndex: zD,
                    dataEndIndex: wD
                  })
                }
              })), Xw(cD, "handleMouseEnter", (function(DD) {
                var zD = cD.getMouseInfo(DD);
                if (zD) {
                  var wD = Qw(Qw({}, zD), {}, {
                    isTooltipActive: !0
                  });
                  cD.setState(wD), cD.triggerSyncEvent(wD);
                  var pD = cD.props.onMouseEnter;
                  LD()(pD) && pD(wD, DD)
                }
              })), Xw(cD, "triggeredAfterMouseMove", (function(DD) {
                var zD = cD.getMouseInfo(DD),
                  wD = zD ? Qw(Qw({}, zD), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                cD.setState(wD), cD.triggerSyncEvent(wD);
                var pD = cD.props.onMouseMove;
                LD()(pD) && pD(wD, DD)
              })), Xw(cD, "handleItemMouseEnter", (function(DD) {
                cD.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: DD,
                    activePayload: DD.tooltipPayload,
                    activeCoordinate: DD.tooltipPosition || {
                      x: DD.cx,
                      y: DD.cy
                    }
                  }
                }))
              })), Xw(cD, "handleItemMouseLeave", (function() {
                cD.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), Xw(cD, "handleMouseMove", (function(DD) {
                DD.persist(), cD.throttleTriggeredAfterMouseMove(DD)
              })), Xw(cD, "handleMouseLeave", (function(DD) {
                cD.throttleTriggeredAfterMouseMove.cancel();
                var zD = {
                  isTooltipActive: !1
                };
                cD.setState(zD), cD.triggerSyncEvent(zD);
                var wD = cD.props.onMouseLeave;
                LD()(wD) && wD(zD, DD)
              })), Xw(cD, "handleOuterEvent", (function(DD) {
                var zD, wD = (0, XD.k)(DD),
                  pD = AD()(cD.props, "".concat(wD));
                wD && LD()(pD) && pD(null !== (zD = /.*touch.*/i.test(wD) ? cD.getMouseInfo(DD.changedTouches[0]) : cD.getMouseInfo(DD)) && void 0 !== zD ? zD : {}, DD)
              })), Xw(cD, "handleClick", (function(DD) {
                var zD = cD.getMouseInfo(DD);
                if (zD) {
                  var wD = Qw(Qw({}, zD), {}, {
                    isTooltipActive: !0
                  });
                  cD.setState(wD), cD.triggerSyncEvent(wD);
                  var pD = cD.props.onClick;
                  LD()(pD) && pD(wD, DD)
                }
              })), Xw(cD, "handleMouseDown", (function(DD) {
                var zD = cD.props.onMouseDown;
                LD()(zD) && zD(cD.getMouseInfo(DD), DD)
              })), Xw(cD, "handleMouseUp", (function(DD) {
                var zD = cD.props.onMouseUp;
                LD()(zD) && zD(cD.getMouseInfo(DD), DD)
              })), Xw(cD, "handleTouchMove", (function(DD) {
                null != DD.changedTouches && DD.changedTouches.length > 0 && cD.throttleTriggeredAfterMouseMove(DD.changedTouches[0])
              })), Xw(cD, "handleTouchStart", (function(DD) {
                null != DD.changedTouches && DD.changedTouches.length > 0 && cD.handleMouseDown(DD.changedTouches[0])
              })), Xw(cD, "handleTouchEnd", (function(DD) {
                null != DD.changedTouches && DD.changedTouches.length > 0 && cD.handleMouseUp(DD.changedTouches[0])
              })), Xw(cD, "handleDoubleClick", (function(DD) {
                var zD = cD.props.onDoubleClick;
                LD()(zD) && zD(cD.getMouseInfo(DD), DD)
              })), Xw(cD, "handleContextMenu", (function(DD) {
                var zD = cD.props.onContextMenu;
                LD()(zD) && zD(cD.getMouseInfo(DD), DD)
              })), Xw(cD, "triggerSyncEvent", (function(DD) {
                void 0 !== cD.props.syncId && dz.emit(Sz, cD.props.syncId, DD, cD.eventEmitterSymbol)
              })), Xw(cD, "applySyncEvent", (function(DD) {
                var zD = cD.props,
                  wD = zD.layout,
                  pD = zD.syncMethod,
                  sD = cD.state.updateId,
                  KD = DD.dataStartIndex,
                  rD = DD.dataEndIndex;
                if (void 0 !== DD.dataStartIndex || void 0 !== DD.dataEndIndex) cD.setState(Qw({
                  dataStartIndex: KD,
                  dataEndIndex: rD
                }, TD({
                  props: cD.props,
                  dataStartIndex: KD,
                  dataEndIndex: rD,
                  updateId: sD
                }, cD.state)));
                else if (void 0 !== DD.activeTooltipIndex) {
                  var LD = DD.chartX,
                    gD = DD.chartY,
                    RD = DD.activeTooltipIndex,
                    AD = cD.state,
                    UD = AD.offset,
                    fD = AD.tooltipTicks;
                  if (!UD) return;
                  if ("function" === typeof pD) RD = pD(fD, DD);
                  else if ("value" === pD) {
                    RD = -1;
                    for (var ID = 0; ID < fD.length; ID++)
                      if (fD[ID].value === DD.activeLabel) {
                        RD = ID;
                        break
                      }
                  }
                  var BD = Qw(Qw({}, UD), {}, {
                      x: UD.left,
                      y: UD.top
                    }),
                    GD = Math.min(LD, BD.x + BD.width),
                    hD = Math.min(gD, BD.y + BD.height),
                    nD = fD[RD] && fD[RD].value,
                    MD = dw(cD.state, cD.props.data, RD),
                    OD = fD[RD] ? {
                      x: "horizontal" === wD ? fD[RD].coordinate : GD,
                      y: "horizontal" === wD ? hD : fD[RD].coordinate
                    } : xw;
                  cD.setState(Qw(Qw({}, DD), {}, {
                    activeLabel: nD,
                    activeCoordinate: OD,
                    activePayload: MD,
                    activeTooltipIndex: RD
                  }))
                } else cD.setState(DD)
              })), Xw(cD, "renderCursor", (function(DD) {
                var wD, sD = cD.state,
                  KD = sD.isTooltipActive,
                  rD = sD.activeCoordinate,
                  LD = sD.activePayload,
                  gD = sD.offset,
                  RD = sD.activeTooltipIndex,
                  AD = sD.tooltipAxisBandSize,
                  UD = cD.getTooltipEventType(),
                  fD = null !== (wD = DD.props.active) && void 0 !== wD ? wD : KD,
                  ID = cD.props.layout,
                  BD = DD.key || "_recharts-cursor";
                return pD.createElement(Kw, {
                  key: BD,
                  activeCoordinate: rD,
                  activePayload: LD,
                  activeTooltipIndex: RD,
                  chartName: zD,
                  element: DD,
                  isActive: fD,
                  layout: ID,
                  offset: gD,
                  tooltipAxisBandSize: AD,
                  tooltipEventType: UD
                })
              })), Xw(cD, "renderPolarAxis", (function(DD, zD, wD) {
                var sD = AD()(DD, "type.axisType"),
                  KD = AD()(cD.state, "".concat(sD, "Map")),
                  rD = DD.type.defaultProps,
                  LD = void 0 !== rD ? Qw(Qw({}, rD), DD.props) : DD.props,
                  gD = KD && KD[LD["".concat(sD, "Id")]];
                return (0, pD.cloneElement)(DD, Qw(Qw({}, gD), {}, {
                  className: (0, GD.b)(sD, gD.className),
                  key: DD.key || "".concat(zD, "-").concat(wD),
                  ticks: (0, CD.T)(gD, !0)
                }))
              })), Xw(cD, "renderPolarGrid", (function(DD) {
                var zD = DD.props,
                  wD = zD.radialLines,
                  sD = zD.polarAngles,
                  KD = zD.polarRadius,
                  rD = cD.state,
                  LD = rD.radiusAxisMap,
                  gD = rD.angleAxisMap,
                  RD = (0, xD.h)(LD),
                  AD = (0, xD.h)(gD),
                  UD = AD.cx,
                  fD = AD.cy,
                  ID = AD.innerRadius,
                  BD = AD.outerRadius;
                return (0, pD.cloneElement)(DD, {
                  polarAngles: Array.isArray(sD) ? sD : (0, CD.T)(AD, !0).map((function(DD) {
                    return DD.coordinate
                  })),
                  polarRadius: Array.isArray(KD) ? KD : (0, CD.T)(RD, !0).map((function(DD) {
                    return DD.coordinate
                  })),
                  cx: UD,
                  cy: fD,
                  innerRadius: ID,
                  outerRadius: BD,
                  key: DD.key || "polar-grid",
                  radialLines: wD
                })
              })), Xw(cD, "renderLegend", (function() {
                var DD = cD.state.formattedGraphicalItems,
                  zD = cD.props,
                  wD = zD.children,
                  sD = zD.width,
                  KD = zD.height,
                  rD = cD.props.margin || {},
                  LD = sD - (rD.left || 0) - (rD.right || 0),
                  gD = (0, FD.e)({
                    children: wD,
                    formattedGraphicalItems: DD,
                    legendWidth: LD,
                    legendContent: UD
                  });
                if (!gD) return null;
                var RD = gD.item,
                  AD = fw(gD, Lw);
                return (0, pD.cloneElement)(RD, Qw(Qw({}, AD), {}, {
                  chartWidth: sD,
                  chartHeight: KD,
                  margin: rD,
                  onBBoxUpdate: cD.handleLegendBBoxUpdate
                }))
              })), Xw(cD, "renderTooltip", (function() {
                var DD, zD = cD.props,
                  wD = zD.children,
                  sD = zD.accessibilityLayer,
                  KD = (0, XD.h)(wD, OD.e);
                if (!KD) return null;
                var rD = cD.state,
                  LD = rD.isTooltipActive,
                  gD = rD.activeCoordinate,
                  RD = rD.activePayload,
                  AD = rD.activeLabel,
                  UD = rD.offset,
                  fD = null !== (DD = KD.props.active) && void 0 !== DD ? DD : LD;
                return (0, pD.cloneElement)(KD, {
                  viewBox: Qw(Qw({}, UD), {}, {
                    x: UD.left,
                    y: UD.top
                  }),
                  active: fD,
                  label: AD,
                  payload: fD ? RD : [],
                  coordinate: gD,
                  accessibilityLayer: sD
                })
              })), Xw(cD, "renderBrush", (function(DD) {
                var zD = cD.props,
                  wD = zD.margin,
                  sD = zD.data,
                  KD = cD.state,
                  rD = KD.offset,
                  LD = KD.dataStartIndex,
                  gD = KD.dataEndIndex,
                  RD = KD.updateId;
                return (0, pD.cloneElement)(DD, {
                  key: DD.key || "_recharts-brush",
                  onChange: (0, CD.k)(cD.handleBrushChange, DD.props.onChange),
                  data: sD,
                  x: (0, xD.y)(DD.props.x) ? DD.props.x : rD.left,
                  y: (0, xD.y)(DD.props.y) ? DD.props.y : rD.top + rD.height + rD.brushBottom - (wD.bottom || 0),
                  width: (0, xD.y)(DD.props.width) ? DD.props.width : rD.width,
                  startIndex: LD,
                  endIndex: gD,
                  updateId: "brush-".concat(RD)
                })
              })), Xw(cD, "renderReferenceElement", (function(DD, zD, wD) {
                if (!DD) return null;
                var sD = cD.clipPathId,
                  KD = cD.state,
                  rD = KD.xAxisMap,
                  LD = KD.yAxisMap,
                  gD = KD.offset,
                  RD = DD.type.defaultProps || {},
                  AD = DD.props,
                  UD = AD.xAxisId,
                  fD = void 0 === UD ? RD.xAxisId : UD,
                  ID = AD.yAxisId,
                  BD = void 0 === ID ? RD.yAxisId : ID;
                return (0, pD.cloneElement)(DD, {
                  key: DD.key || "".concat(zD, "-").concat(wD),
                  xAxis: rD[fD],
                  yAxis: LD[BD],
                  viewBox: {
                    x: gD.left,
                    y: gD.top,
                    width: gD.width,
                    height: gD.height
                  },
                  clipPathId: sD
                })
              })), Xw(cD, "renderActivePoints", (function(DD) {
                var zD = DD.item,
                  pD = DD.activePoint,
                  sD = DD.basePoint,
                  KD = DD.childIndex,
                  rD = DD.isRange,
                  LD = [],
                  cD = zD.props.key,
                  gD = void 0 !== zD.item.type.defaultProps ? Qw(Qw({}, zD.item.type.defaultProps), zD.item.props) : zD.item.props,
                  RD = gD.activeDot,
                  AD = Qw(Qw({
                    index: KD,
                    dataKey: gD.dataKey,
                    cx: pD.x,
                    cy: pD.y,
                    r: 4,
                    fill: (0, CD.N)(zD.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: pD.payload,
                    value: pD.value
                  }, (0, XD.e)(RD, !1)), (0, iz.i)(RD));
                return LD.push(wD.renderActiveDot(RD, AD, "".concat(cD, "-activePoint-").concat(KD))), sD ? LD.push(wD.renderActiveDot(RD, Qw(Qw({}, AD), {}, {
                  cx: sD.x,
                  cy: sD.y
                }), "".concat(cD, "-basePoint-").concat(KD))) : rD && LD.push(null), LD
              })), Xw(cD, "renderGraphicChild", (function(DD, zD, wD) {
                var sD = cD.filterFormatItem(DD, zD, wD);
                if (!sD) return null;
                var rD = cD.getTooltipEventType(),
                  LD = cD.state,
                  gD = LD.isTooltipActive,
                  RD = LD.tooltipAxis,
                  AD = LD.activeTooltipIndex,
                  UD = LD.activeLabel,
                  fD = cD.props.children,
                  ID = (0, XD.h)(fD, OD.e),
                  BD = sD.props,
                  GD = BD.points,
                  hD = BD.isRange,
                  nD = BD.baseLine,
                  MD = void 0 !== sD.item.type.defaultProps ? Qw(Qw({}, sD.item.type.defaultProps), sD.item.props) : sD.item.props,
                  JD = MD.activeDot,
                  ED = MD.hide,
                  QD = MD.activeBar,
                  VD = MD.activeShape,
                  PD = Boolean(!ED && gD && ID && (JD || QD || VD)),
                  TD = {};
                "axis" !== rD && ID && "click" === ID.props.trigger ? TD = {
                  onClick: (0, CD.k)(cD.handleItemMouseEnter, DD.props.onClick)
                } : "axis" !== rD && (TD = {
                  onMouseLeave: (0, CD.k)(cD.handleItemMouseLeave, DD.props.onMouseLeave),
                  onMouseEnter: (0, CD.k)(cD.handleItemMouseEnter, DD.props.onMouseEnter)
                });
                var bD = (0, pD.cloneElement)(DD, Qw(Qw({}, sD.props), TD));
                if (PD) {
                  if (!(AD >= 0)) {
                    var jD, dD = (null !== (jD = cD.getItemByXY(cD.state.activeCoordinate)) && void 0 !== jD ? jD : {
                        graphicalItem: bD
                      }).graphicalItem,
                      SD = dD.item,
                      iD = void 0 === SD ? DD : SD,
                      lD = dD.childIndex,
                      WD = Qw(Qw(Qw({}, sD.props), TD), {}, {
                        activeIndex: lD
                      });
                    return [(0, pD.cloneElement)(iD, WD), null, null]
                  }
                  var ND, ZD;
                  if (RD.dataKey && !RD.allowDuplicatedCategory) {
                    var yD = "function" === typeof RD.dataKey ? function(DD) {
                      return "function" === typeof RD.dataKey ? RD.dataKey(DD.payload) : null
                    } : "payload.".concat(RD.dataKey.toString());
                    ND = (0, xD.e)(GD, yD, UD), ZD = hD && nD && (0, xD.e)(nD, yD, UD)
                  } else ND = null === GD || void 0 === GD ? void 0 : GD[AD], ZD = hD && nD && nD[AD];
                  if (VD || QD) {
                    var kD = void 0 !== DD.props.activeIndex ? DD.props.activeIndex : AD;
                    return [(0, pD.cloneElement)(DD, Qw(Qw(Qw({}, sD.props), TD), {}, {
                      activeIndex: kD
                    })), null, null]
                  }
                  if (!KD()(ND)) return [bD].concat(Mw(cD.renderActivePoints({
                    item: sD,
                    activePoint: ND,
                    basePoint: ZD,
                    childIndex: AD,
                    isRange: hD
                  })))
                }
                return hD ? [bD, null, null] : [bD, null]
              })), Xw(cD, "renderCustomized", (function(DD, zD, wD) {
                return (0, pD.cloneElement)(DD, Qw(Qw({
                  key: "recharts-customized-".concat(wD)
                }, cD.props), cD.state))
              })), Xw(cD, "renderMap", {
                CartesianGrid: {
                  handler: Tw,
                  once: !0
                },
                ReferenceArea: {
                  handler: cD.renderReferenceElement
                },
                ReferenceLine: {
                  handler: Tw
                },
                ReferenceDot: {
                  handler: cD.renderReferenceElement
                },
                XAxis: {
                  handler: Tw
                },
                YAxis: {
                  handler: Tw
                },
                Brush: {
                  handler: cD.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: cD.renderGraphicChild
                },
                Line: {
                  handler: cD.renderGraphicChild
                },
                Area: {
                  handler: cD.renderGraphicChild
                },
                Radar: {
                  handler: cD.renderGraphicChild
                },
                RadialBar: {
                  handler: cD.renderGraphicChild
                },
                Scatter: {
                  handler: cD.renderGraphicChild
                },
                Pie: {
                  handler: cD.renderGraphicChild
                },
                Funnel: {
                  handler: cD.renderGraphicChild
                },
                Tooltip: {
                  handler: cD.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: cD.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: cD.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: cD.renderPolarAxis
                },
                Customized: {
                  handler: cD.renderCustomized
                }
              }), cD.clipPathId = "".concat(null !== (sD = DD.id) && void 0 !== sD ? sD : (0, xD.I)("recharts"), "-clip"), cD.throttleTriggeredAfterMouseMove = BD()(cD.triggeredAfterMouseMove, null !== (rD = DD.throttleDelay) && void 0 !== rD ? rD : 1e3 / 60), cD.state = {}, cD
            }
            return function(DD, zD) {
              if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
              DD.prototype = Object.create(zD && zD.prototype, {
                constructor: {
                  value: DD,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(DD, "prototype", {
                writable: !1
              }), zD && nw(DD, zD)
            }(wD, DD), sD = wD, cD = [{
              key: "componentDidMount",
              value: function() {
                var DD, zD;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (DD = this.props.margin.left) && void 0 !== DD ? DD : 0,
                    top: null !== (zD = this.props.margin.top) && void 0 !== zD ? zD : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var DD = this.props,
                  zD = DD.children,
                  wD = DD.data,
                  pD = DD.height,
                  sD = DD.layout,
                  KD = (0, XD.h)(zD, OD.e);
                if (KD) {
                  var rD = KD.props.defaultIndex;
                  if (!("number" !== typeof rD || rD < 0 || rD > this.state.tooltipTicks.length - 1)) {
                    var LD = this.state.tooltipTicks[rD] && this.state.tooltipTicks[rD].value,
                      cD = dw(this.state, wD, rD, LD),
                      gD = this.state.tooltipTicks[rD].coordinate,
                      RD = (this.state.offset.top + pD) / 2,
                      AD = "horizontal" === sD ? {
                        x: gD,
                        y: RD
                      } : {
                        y: gD,
                        x: RD
                      },
                      UD = this.state.formattedGraphicalItems.find((function(DD) {
                        return "Scatter" === DD.item.type.name
                      }));
                    UD && (AD = Qw(Qw({}, AD), UD.props.points[rD].tooltipPosition), cD = UD.props.points[rD].tooltipPayload);
                    var fD = {
                      activeTooltipIndex: rD,
                      isTooltipActive: !0,
                      activeLabel: LD,
                      activePayload: cD,
                      activeCoordinate: AD
                    };
                    this.setState(fD), this.renderCursor(KD), this.accessibilityManager.setIndex(rD)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(DD, zD) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== zD.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== DD.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== DD.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (wD = this.props.margin.left) && void 0 !== wD ? wD : 0,
                    top: null !== (pD = this.props.margin.top) && void 0 !== pD ? pD : 0
                  }
                }), null) : null;
                var wD, pD
              }
            }, {
              key: "componentDidUpdate",
              value: function(DD) {
                (0, XD.q)([(0, XD.h)(DD.children, OD.e)], [(0, XD.h)(this.props.children, OD.e)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var DD = (0, XD.h)(this.props.children, OD.e);
                if (DD && "boolean" === typeof DD.props.shared) {
                  var zD = DD.props.shared ? "axis" : "item";
                  return gD.indexOf(zD) >= 0 ? zD : rD
                }
                return rD
              }
            }, {
              key: "getMouseInfo",
              value: function(DD) {
                if (!this.container) return null;
                var zD = this.container,
                  wD = zD.getBoundingClientRect(),
                  pD = (0, tD.e)(wD),
                  sD = {
                    chartX: Math.round(DD.pageX - pD.left),
                    chartY: Math.round(DD.pageY - pD.top)
                  },
                  KD = wD.width / zD.offsetWidth || 1,
                  rD = this.inRange(sD.chartX, sD.chartY, KD);
                if (!rD) return null;
                var LD = this.state,
                  cD = LD.xAxisMap,
                  gD = LD.yAxisMap,
                  RD = this.getTooltipEventType(),
                  AD = Sw(this.state, this.props.data, this.props.layout, rD);
                if ("axis" !== RD && cD && gD) {
                  var UD = (0, xD.h)(cD).scale,
                    fD = (0, xD.h)(gD).scale,
                    ID = UD && UD.invert ? UD.invert(sD.chartX) : null,
                    BD = fD && fD.invert ? fD.invert(sD.chartY) : null;
                  return Qw(Qw({}, sD), {}, {
                    xValue: ID,
                    yValue: BD
                  }, AD)
                }
                return AD ? Qw(Qw({}, sD), AD) : null
              }
            }, {
              key: "inRange",
              value: function(DD, zD) {
                var wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  pD = this.props.layout,
                  sD = DD / wD,
                  KD = zD / wD;
                if ("horizontal" === pD || "vertical" === pD) {
                  var rD = this.state.offset;
                  return sD >= rD.left && sD <= rD.left + rD.width && KD >= rD.top && KD <= rD.top + rD.height ? {
                    x: sD,
                    y: KD
                  } : null
                }
                var LD = this.state,
                  cD = LD.angleAxisMap,
                  gD = LD.radiusAxisMap;
                if (cD && gD) {
                  var RD = (0, xD.h)(cD);
                  return (0, Tz.d)({
                    x: sD,
                    y: KD
                  }, RD)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var DD = this.props.children,
                  zD = this.getTooltipEventType(),
                  wD = (0, XD.h)(DD, OD.e),
                  pD = {};
                return wD && "axis" === zD && (pD = "click" === wD.props.trigger ? {
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
                }), Qw(Qw({}, (0, iz.i)(this.props, this.handleOuterEvent)), pD)
              }
            }, {
              key: "addListener",
              value: function() {
                dz.on(Sz, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                dz.removeListener(Sz, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(DD, zD, wD) {
                for (var pD = this.state.formattedGraphicalItems, sD = 0, KD = pD.length; sD < KD; sD++) {
                  var rD = pD[sD];
                  if (rD.item === DD || rD.props.key === DD.key || zD === (0, XD.j)(rD.item.type) && wD === rD.childIndex) return rD
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var DD = this.clipPathId,
                  zD = this.state.offset,
                  wD = zD.left,
                  sD = zD.top,
                  KD = zD.height,
                  rD = zD.width;
                return pD.createElement("defs", null, pD.createElement("clipPath", {
                  id: DD
                }, pD.createElement("rect", {
                  x: wD,
                  y: sD,
                  height: KD,
                  width: rD
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var DD = this.state.xAxisMap;
                return DD ? Object.entries(DD).reduce((function(DD, zD) {
                  var wD = Uw(zD, 2),
                    pD = wD[0],
                    sD = wD[1];
                  return Qw(Qw({}, DD), {}, Xw({}, pD, sD.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var DD = this.state.yAxisMap;
                return DD ? Object.entries(DD).reduce((function(DD, zD) {
                  var wD = Uw(zD, 2),
                    pD = wD[0],
                    sD = wD[1];
                  return Qw(Qw({}, DD), {}, Xw({}, pD, sD.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(DD) {
                var zD;
                return null === (zD = this.state.xAxisMap) || void 0 === zD || null === (zD = zD[DD]) || void 0 === zD ? void 0 : zD.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(DD) {
                var zD;
                return null === (zD = this.state.yAxisMap) || void 0 === zD || null === (zD = zD[DD]) || void 0 === zD ? void 0 : zD.scale
              }
            }, {
              key: "getItemByXY",
              value: function(DD) {
                var zD = this.state,
                  wD = zD.formattedGraphicalItems,
                  pD = zD.activeItem;
                if (wD && wD.length)
                  for (var sD = 0, KD = wD.length; sD < KD; sD++) {
                    var rD = wD[sD],
                      LD = rD.props,
                      cD = rD.item,
                      gD = void 0 !== cD.type.defaultProps ? Qw(Qw({}, cD.type.defaultProps), cD.props) : cD.props,
                      RD = (0, XD.j)(cD.type);
                    if ("Bar" === RD) {
                      var AD = (LD.data || []).find((function(zD) {
                        return (0, QD.d)(DD, zD)
                      }));
                      if (AD) return {
                        graphicalItem: rD,
                        payload: AD
                      }
                    } else if ("RadialBar" === RD) {
                      var UD = (LD.data || []).find((function(zD) {
                        return (0, Tz.d)(DD, zD)
                      }));
                      if (UD) return {
                        graphicalItem: rD,
                        payload: UD
                      }
                    } else if ((0, kz.f)(rD, pD) || (0, kz.g)(rD, pD) || (0, kz.j)(rD, pD)) {
                      var fD = (0, kz.d)({
                          graphicalItem: rD,
                          activeTooltipItem: pD,
                          itemData: gD.data
                        }),
                        ID = void 0 === gD.activeIndex ? fD : gD.activeIndex;
                      return {
                        graphicalItem: Qw(Qw({}, rD), {}, {
                          childIndex: ID
                        }),
                        payload: (0, kz.j)(rD, pD) ? gD.data[fD] : rD.props.data[fD]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var DD = this;
                if (!(0, XD.x)(this)) return null;
                var zD, wD, sD = this.props,
                  KD = sD.children,
                  rD = sD.className,
                  LD = sD.width,
                  cD = sD.height,
                  gD = sD.style,
                  RD = sD.compact,
                  AD = sD.title,
                  UD = sD.desc,
                  fD = fw(sD, gw),
                  ID = (0, XD.e)(fD, !1);
                if (RD) return pD.createElement(rw.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, pD.createElement(nD.c, Aw({}, ID, {
                  width: LD,
                  height: cD,
                  title: AD,
                  desc: UD
                }), this.renderClipPath(), (0, XD.u)(KD, this.renderMap)));
                this.props.accessibilityLayer && (ID.tabIndex = null !== (zD = this.props.tabIndex) && void 0 !== zD ? zD : 0, ID.role = null !== (wD = this.props.role) && void 0 !== wD ? wD : "application", ID.onKeyDown = function(zD) {
                  DD.accessibilityManager.keyboardEvent(zD)
                }, ID.onFocus = function() {
                  DD.accessibilityManager.focus()
                });
                var BD = this.parseEventsOfWrapper();
                return pD.createElement(rw.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, pD.createElement("div", Aw({
                  className: (0, GD.b)("recharts-wrapper", rD),
                  style: Qw({
                    position: "relative",
                    cursor: "default",
                    width: LD,
                    height: cD
                  }, gD)
                }, BD, {
                  ref: function(zD) {
                    DD.container = zD
                  }
                }), pD.createElement(nD.c, Aw({}, ID, {
                  width: LD,
                  height: cD,
                  title: AD,
                  desc: UD,
                  style: Cw
                }), this.renderClipPath(), (0, XD.u)(KD, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], cD && Iw(sD.prototype, cD), RD && Iw(sD, RD), Object.defineProperty(sD, "prototype", {
              writable: !1
            }), sD;
            var sD, cD, RD
          }(pD.Component);
        Xw(bD, "displayName", zD), Xw(bD, "defaultProps", Qw({
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
        }, VD)), Xw(bD, "getDerivedStateFromProps", (function(DD, zD) {
          var wD = DD.dataKey,
            pD = DD.data,
            sD = DD.children,
            rD = DD.width,
            LD = DD.height,
            cD = DD.layout,
            gD = DD.stackOffset,
            RD = DD.margin,
            AD = zD.dataStartIndex,
            UD = zD.dataEndIndex;
          if (void 0 === zD.updateId) {
            var fD = Ww(DD);
            return Qw(Qw(Qw({}, fD), {}, {
              updateId: 0
            }, TD(Qw(Qw({
              props: DD
            }, fD), {}, {
              updateId: 0
            }), zD)), {}, {
              prevDataKey: wD,
              prevData: pD,
              prevWidth: rD,
              prevHeight: LD,
              prevLayout: cD,
              prevStackOffset: gD,
              prevMargin: RD,
              prevChildren: sD
            })
          }
          if (wD !== zD.prevDataKey || pD !== zD.prevData || rD !== zD.prevWidth || LD !== zD.prevHeight || cD !== zD.prevLayout || gD !== zD.prevStackOffset || !(0, bz.d)(RD, zD.prevMargin)) {
            var ID = Ww(DD),
              BD = {
                chartX: zD.chartX,
                chartY: zD.chartY,
                isTooltipActive: zD.isTooltipActive
              },
              GD = Qw(Qw({}, Sw(zD, pD, cD)), {}, {
                updateId: zD.updateId + 1
              }),
              hD = Qw(Qw(Qw({}, ID), BD), GD);
            return Qw(Qw(Qw({}, hD), TD(Qw({
              props: DD
            }, hD), zD)), {}, {
              prevDataKey: wD,
              prevData: pD,
              prevWidth: rD,
              prevHeight: LD,
              prevLayout: cD,
              prevStackOffset: gD,
              prevMargin: RD,
              prevChildren: sD
            })
          }
          if (!(0, XD.q)(sD, zD.prevChildren)) {
            var nD, MD, OD, JD, ED = (0, XD.h)(sD, vD),
              QD = ED && null !== (nD = null === (MD = ED.props) || void 0 === MD ? void 0 : MD.startIndex) && void 0 !== nD ? nD : AD,
              VD = ED && null !== (OD = null === (JD = ED.props) || void 0 === JD ? void 0 : JD.endIndex) && void 0 !== OD ? OD : UD,
              PD = QD !== AD || VD !== UD,
              CD = !KD()(pD) && !PD ? zD.updateId : zD.updateId + 1;
            return Qw(Qw({
              updateId: CD
            }, TD(Qw(Qw({
              props: DD
            }, zD), {}, {
              updateId: CD,
              dataStartIndex: QD,
              dataEndIndex: VD
            }), zD)), {}, {
              prevChildren: sD,
              dataStartIndex: QD,
              dataEndIndex: VD
            })
          }
          return null
        })), Xw(bD, "renderActiveDot", (function(DD, zD, wD) {
          var sD;
          return sD = (0, pD.isValidElement)(DD) ? (0, pD.cloneElement)(DD, zD) : LD()(DD) ? DD(zD) : pD.createElement(ED.e, zD), pD.createElement(MD.c, {
            className: "recharts-active-dot",
            key: wD
          }, sD)
        }));
        var jD = (0, pD.forwardRef)((function(DD, zD) {
          return pD.createElement(bD, Aw({}, DD, {
            ref: zD
          }))
        }));
        return jD.displayName = bD.displayName, jD
      }
  },
  6324: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD
    });
    var pD = function(DD) {
      return null
    };
    pD.displayName = "Cell"
  },
  6265: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => TD
    });
    var pD = wD(58),
      sD = wD(5478),
      KD = wD.n(sD),
      rD = wD(5333),
      LD = wD.n(rD),
      cD = wD(5144),
      gD = wD.n(cD),
      RD = wD(5121),
      AD = wD(6166),
      UD = wD(5484),
      fD = wD(5223),
      ID = wD(6270);

    function BD(DD) {
      return BD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, BD(DD)
    }
    var GD = ["offset"];

    function hD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return nD(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return nD(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return nD(DD, zD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function MD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function OD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function JD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? OD(Object(wD), !0).forEach((function(zD) {
          ED(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : OD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function ED(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != BD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != BD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == BD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function QD() {
      return QD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, QD.apply(this, arguments)
    }
    var XD = function(DD) {
        var zD = DD.value,
          wD = DD.formatter,
          pD = KD()(DD.children) ? zD : DD.children;
        return LD()(wD) ? wD(pD) : pD
      },
      VD = function(DD, zD, wD) {
        var sD, rD, LD = DD.position,
          cD = DD.viewBox,
          gD = DD.offset,
          AD = DD.className,
          UD = cD,
          BD = UD.cx,
          GD = UD.cy,
          hD = UD.innerRadius,
          nD = UD.outerRadius,
          MD = UD.startAngle,
          OD = UD.endAngle,
          JD = UD.clockWise,
          ED = (hD + nD) / 2,
          XD = function(DD, zD) {
            return (0, fD.F)(zD - DD) * Math.min(Math.abs(zD - DD), 360)
          }(MD, OD),
          VD = XD >= 0 ? 1 : -1;
        "insideStart" === LD ? (sD = MD + VD * gD, rD = JD) : "insideEnd" === LD ? (sD = OD - VD * gD, rD = !JD) : "end" === LD && (sD = OD + VD * gD, rD = JD), rD = XD <= 0 ? rD : !rD;
        var PD = (0, ID.f)(BD, GD, ED, sD),
          CD = (0, ID.f)(BD, GD, ED, sD + 359 * (rD ? 1 : -1)),
          xD = "M".concat(PD.x, ",").concat(PD.y, "\n    A").concat(ED, ",").concat(ED, ",0,1,").concat(rD ? 0 : 1, ",\n    ").concat(CD.x, ",").concat(CD.y),
          TD = KD()(DD.id) ? (0, fD.I)("recharts-radial-line-") : DD.id;
        return pD.createElement("text", QD({}, wD, {
          dominantBaseline: "central",
          className: (0, RD.b)("recharts-radial-bar-label", AD)
        }), pD.createElement("defs", null, pD.createElement("path", {
          id: TD,
          d: xD
        })), pD.createElement("textPath", {
          xlinkHref: "#".concat(TD)
        }, zD))
      },
      PD = function(DD) {
        var zD = DD.viewBox,
          wD = DD.offset,
          pD = DD.position,
          sD = zD,
          KD = sD.cx,
          rD = sD.cy,
          LD = sD.innerRadius,
          cD = sD.outerRadius,
          gD = (sD.startAngle + sD.endAngle) / 2;
        if ("outside" === pD) {
          var RD = (0, ID.f)(KD, rD, cD + wD, gD),
            AD = RD.x;
          return {
            x: AD,
            y: RD.y,
            textAnchor: AD >= KD ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === pD) return {
          x: KD,
          y: rD,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === pD) return {
          x: KD,
          y: rD,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === pD) return {
          x: KD,
          y: rD,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var UD = (LD + cD) / 2,
          fD = (0, ID.f)(KD, rD, UD, gD);
        return {
          x: fD.x,
          y: fD.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      CD = function(DD) {
        var zD = DD.viewBox,
          wD = DD.parentViewBox,
          pD = DD.offset,
          sD = DD.position,
          KD = zD,
          rD = KD.x,
          LD = KD.y,
          cD = KD.width,
          RD = KD.height,
          AD = RD >= 0 ? 1 : -1,
          UD = AD * pD,
          ID = AD > 0 ? "end" : "start",
          BD = AD > 0 ? "start" : "end",
          GD = cD >= 0 ? 1 : -1,
          hD = GD * pD,
          nD = GD > 0 ? "end" : "start",
          MD = GD > 0 ? "start" : "end";
        if ("top" === sD) return JD(JD({}, {
          x: rD + cD / 2,
          y: LD - AD * pD,
          textAnchor: "middle",
          verticalAnchor: ID
        }), wD ? {
          height: Math.max(LD - wD.y, 0),
          width: cD
        } : {});
        if ("bottom" === sD) return JD(JD({}, {
          x: rD + cD / 2,
          y: LD + RD + UD,
          textAnchor: "middle",
          verticalAnchor: BD
        }), wD ? {
          height: Math.max(wD.y + wD.height - (LD + RD), 0),
          width: cD
        } : {});
        if ("left" === sD) {
          var OD = {
            x: rD - hD,
            y: LD + RD / 2,
            textAnchor: nD,
            verticalAnchor: "middle"
          };
          return JD(JD({}, OD), wD ? {
            width: Math.max(OD.x - wD.x, 0),
            height: RD
          } : {})
        }
        if ("right" === sD) {
          var ED = {
            x: rD + cD + hD,
            y: LD + RD / 2,
            textAnchor: MD,
            verticalAnchor: "middle"
          };
          return JD(JD({}, ED), wD ? {
            width: Math.max(wD.x + wD.width - ED.x, 0),
            height: RD
          } : {})
        }
        var QD = wD ? {
          width: cD,
          height: RD
        } : {};
        return "insideLeft" === sD ? JD({
          x: rD + hD,
          y: LD + RD / 2,
          textAnchor: MD,
          verticalAnchor: "middle"
        }, QD) : "insideRight" === sD ? JD({
          x: rD + cD - hD,
          y: LD + RD / 2,
          textAnchor: nD,
          verticalAnchor: "middle"
        }, QD) : "insideTop" === sD ? JD({
          x: rD + cD / 2,
          y: LD + UD,
          textAnchor: "middle",
          verticalAnchor: BD
        }, QD) : "insideBottom" === sD ? JD({
          x: rD + cD / 2,
          y: LD + RD - UD,
          textAnchor: "middle",
          verticalAnchor: ID
        }, QD) : "insideTopLeft" === sD ? JD({
          x: rD + hD,
          y: LD + UD,
          textAnchor: MD,
          verticalAnchor: BD
        }, QD) : "insideTopRight" === sD ? JD({
          x: rD + cD - hD,
          y: LD + UD,
          textAnchor: nD,
          verticalAnchor: BD
        }, QD) : "insideBottomLeft" === sD ? JD({
          x: rD + hD,
          y: LD + RD - UD,
          textAnchor: MD,
          verticalAnchor: ID
        }, QD) : "insideBottomRight" === sD ? JD({
          x: rD + cD - hD,
          y: LD + RD - UD,
          textAnchor: nD,
          verticalAnchor: ID
        }, QD) : gD()(sD) && ((0, fD.y)(sD.x) || (0, fD.B)(sD.x)) && ((0, fD.y)(sD.y) || (0, fD.B)(sD.y)) ? JD({
          x: rD + (0, fD.n)(sD.x, cD),
          y: LD + (0, fD.n)(sD.y, RD),
          textAnchor: "end",
          verticalAnchor: "end"
        }, QD) : JD({
          x: rD + cD / 2,
          y: LD + RD / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, QD)
      },
      xD = function(DD) {
        return "cx" in DD && (0, fD.y)(DD.cx)
      };

    function TD(DD) {
      var zD, wD = DD.offset,
        sD = JD({
          offset: void 0 === wD ? 5 : wD
        }, MD(DD, GD)),
        rD = sD.viewBox,
        cD = sD.position,
        gD = sD.value,
        fD = sD.children,
        ID = sD.content,
        BD = sD.className,
        hD = void 0 === BD ? "" : BD,
        nD = sD.textBreakAll;
      if (!rD || KD()(gD) && KD()(fD) && !(0, pD.isValidElement)(ID) && !LD()(ID)) return null;
      if ((0, pD.isValidElement)(ID)) return (0, pD.cloneElement)(ID, sD);
      if (LD()(ID)) {
        if (zD = (0, pD.createElement)(ID, sD), (0, pD.isValidElement)(zD)) return zD
      } else zD = XD(sD);
      var OD = xD(rD),
        ED = (0, UD.e)(sD, !0);
      if (OD && ("insideStart" === cD || "insideEnd" === cD || "end" === cD)) return VD(sD, zD, ED);
      var TD = OD ? PD(sD) : CD(sD);
      return pD.createElement(AD.d, QD({
        className: (0, RD.b)("recharts-label", hD)
      }, ED, TD, {
        breakAll: nD
      }), zD)
    }
    TD.displayName = "Label";
    var bD = function(DD) {
      var zD = DD.cx,
        wD = DD.cy,
        pD = DD.angle,
        sD = DD.startAngle,
        KD = DD.endAngle,
        rD = DD.r,
        LD = DD.radius,
        cD = DD.innerRadius,
        gD = DD.outerRadius,
        RD = DD.x,
        AD = DD.y,
        UD = DD.top,
        ID = DD.left,
        BD = DD.width,
        GD = DD.height,
        hD = DD.clockWise,
        nD = DD.labelViewBox;
      if (nD) return nD;
      if ((0, fD.y)(BD) && (0, fD.y)(GD)) {
        if ((0, fD.y)(RD) && (0, fD.y)(AD)) return {
          x: RD,
          y: AD,
          width: BD,
          height: GD
        };
        if ((0, fD.y)(UD) && (0, fD.y)(ID)) return {
          x: UD,
          y: ID,
          width: BD,
          height: GD
        }
      }
      return (0, fD.y)(RD) && (0, fD.y)(AD) ? {
        x: RD,
        y: AD,
        width: 0,
        height: 0
      } : (0, fD.y)(zD) && (0, fD.y)(wD) ? {
        cx: zD,
        cy: wD,
        startAngle: sD || pD || 0,
        endAngle: KD || pD || 0,
        innerRadius: cD || 0,
        outerRadius: gD || LD || rD || 0,
        clockWise: hD
      } : DD.viewBox ? DD.viewBox : {}
    };
    TD.parseViewBox = bD, TD.renderCallByParent = function(DD, zD) {
      var wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!DD || !DD.children && wD && !DD.label) return null;
      var sD = DD.children,
        KD = bD(DD),
        rD = (0, UD.g)(sD, TD).map((function(DD, wD) {
          return (0, pD.cloneElement)(DD, {
            viewBox: zD || KD,
            key: "label-".concat(wD)
          })
        }));
      if (!wD) return rD;
      var cD = function(DD, zD) {
        return DD ? !0 === DD ? pD.createElement(TD, {
          key: "label-implicit",
          viewBox: zD
        }) : (0, fD.x)(DD) ? pD.createElement(TD, {
          key: "label-implicit",
          viewBox: zD,
          value: DD
        }) : (0, pD.isValidElement)(DD) ? DD.type === TD ? (0, pD.cloneElement)(DD, {
          key: "label-implicit",
          viewBox: zD
        }) : pD.createElement(TD, {
          key: "label-implicit",
          content: DD,
          viewBox: zD
        }) : LD()(DD) ? pD.createElement(TD, {
          key: "label-implicit",
          content: DD,
          viewBox: zD
        }) : gD()(DD) ? pD.createElement(TD, QD({
          viewBox: zD
        }, DD, {
          key: "label-implicit"
        })) : null : null
      }(DD.label, zD || KD);
      return [cD].concat(hD(rD))
    }
  },
  6327: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => CD
    });
    var pD = wD(58),
      sD = wD(5478),
      KD = wD.n(sD),
      rD = wD(5144),
      LD = wD.n(rD),
      cD = wD(5333),
      gD = wD.n(cD),
      RD = wD(6333),
      AD = wD.n(RD),
      UD = wD(6265),
      fD = wD(6004),
      ID = wD(5484),
      BD = wD(6177);

    function GD(DD) {
      return GD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, GD(DD)
    }
    var hD = ["valueAccessor"],
      nD = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function MD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return OD(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return OD(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return OD(DD, zD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function JD() {
      return JD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, JD.apply(this, arguments)
    }

    function ED(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function QD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? ED(Object(wD), !0).forEach((function(zD) {
          XD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : ED(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function XD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != GD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != GD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == GD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function VD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }
    var PD = function(DD) {
      return Array.isArray(DD.value) ? AD()(DD.value) : DD.value
    };

    function CD(DD) {
      var zD = DD.valueAccessor,
        wD = void 0 === zD ? PD : zD,
        sD = VD(DD, hD),
        rD = sD.data,
        LD = sD.dataKey,
        cD = sD.clockWise,
        gD = sD.id,
        RD = sD.textBreakAll,
        AD = VD(sD, nD);
      return rD && rD.length ? pD.createElement(fD.c, {
        className: "recharts-label-list"
      }, rD.map((function(DD, zD) {
        var sD = KD()(LD) ? wD(DD, zD) : (0, BD.Z)(DD && DD.payload, LD),
          rD = KD()(gD) ? {} : {
            id: "".concat(gD, "-").concat(zD)
          };
        return pD.createElement(UD.d, JD({}, (0, ID.e)(DD, !0), AD, rD, {
          parentViewBox: DD.parentViewBox,
          value: sD,
          textBreakAll: RD,
          viewBox: UD.d.parseViewBox(KD()(cD) ? DD : QD(QD({}, DD), {}, {
            clockWise: cD
          })),
          key: "label-".concat(zD),
          index: zD
        }))
      }))) : null
    }
    CD.displayName = "LabelList", CD.renderCallByParent = function(DD, zD) {
      var wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!DD || !DD.children && wD && !DD.label) return null;
      var sD = DD.children,
        KD = (0, ID.g)(sD, CD).map((function(DD, wD) {
          return (0, pD.cloneElement)(DD, {
            data: zD,
            key: "labelList-".concat(wD)
          })
        }));
      return wD ? [function(DD, zD) {
        return DD ? !0 === DD ? pD.createElement(CD, {
          key: "labelList-implicit",
          data: zD
        }) : pD.isValidElement(DD) || gD()(DD) ? pD.createElement(CD, {
          key: "labelList-implicit",
          data: zD,
          content: DD
        }) : LD()(DD) ? pD.createElement(CD, JD({
          data: zD
        }, DD, {
          key: "labelList-implicit"
        })) : null : null
      }(DD.label, zD)].concat(MD(KD)) : KD
    }
  },
  6080: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => ZD
    });
    var pD = wD(58),
      sD = wD(5333),
      KD = wD.n(sD),
      rD = wD(5121),
      LD = wD(5480),
      cD = wD(5997),
      gD = wD(6083),
      RD = wD(5505);

    function AD(DD) {
      return AD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, AD(DD)
    }

    function UD() {
      return UD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, UD.apply(this, arguments)
    }

    function fD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function ID(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, OD(pD.key), pD)
      }
    }

    function BD(DD, zD, wD) {
      return zD = hD(zD),
        function(DD, zD) {
          if (zD && ("object" === AD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, GD() ? Reflect.construct(zD, wD || [], hD(DD).constructor) : zD.apply(DD, wD))
    }

    function GD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (GD = function() {
        return !!DD
      })()
    }

    function hD(DD) {
      return hD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, hD(DD)
    }

    function nD(DD, zD) {
      return nD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, nD(DD, zD)
    }

    function MD(DD, zD, wD) {
      return (zD = OD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function OD(DD) {
      var zD = function(DD, zD) {
        if ("object" != AD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != AD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == AD(zD) ? zD : zD + ""
    }
    var JD = 32,
      ED = function(DD) {
        function zD() {
          return function(DD, zD) {
            if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
          }(this, zD), BD(this, zD, arguments)
        }
        return function(DD, zD) {
          if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
          DD.prototype = Object.create(zD && zD.prototype, {
            constructor: {
              value: DD,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(DD, "prototype", {
            writable: !1
          }), zD && nD(DD, zD)
        }(zD, DD), wD = zD, sD = [{
          key: "renderIcon",
          value: function(DD) {
            var zD = this.props.inactiveColor,
              wD = 16,
              sD = JD / 6,
              KD = JD / 3,
              rD = DD.inactive ? zD : DD.color;
            if ("plainline" === DD.type) return pD.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: rD,
              strokeDasharray: DD.payload.strokeDasharray,
              x1: 0,
              y1: wD,
              x2: JD,
              y2: wD,
              className: "recharts-legend-icon"
            });
            if ("line" === DD.type) return pD.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: rD,
              d: "M0,".concat(wD, "h").concat(KD, "\n            A").concat(sD, ",").concat(sD, ",0,1,1,").concat(2 * KD, ",").concat(wD, "\n            H").concat(JD, "M").concat(2 * KD, ",").concat(wD, "\n            A").concat(sD, ",").concat(sD, ",0,1,1,").concat(KD, ",").concat(wD),
              className: "recharts-legend-icon"
            });
            if ("rect" === DD.type) return pD.createElement("path", {
              stroke: "none",
              fill: rD,
              d: "M0,".concat(4, "h").concat(JD, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (pD.isValidElement(DD.legendIcon)) {
              var LD = function(DD) {
                for (var zD = 1; zD < arguments.length; zD++) {
                  var wD = null != arguments[zD] ? arguments[zD] : {};
                  zD % 2 ? fD(Object(wD), !0).forEach((function(zD) {
                    MD(DD, zD, wD[zD])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : fD(Object(wD)).forEach((function(zD) {
                    Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
                  }))
                }
                return DD
              }({}, DD);
              return delete LD.legendIcon, pD.cloneElement(DD.legendIcon, LD)
            }
            return pD.createElement(gD.d, {
              fill: rD,
              cx: wD,
              cy: wD,
              size: JD,
              sizeType: "diameter",
              type: DD.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var DD = this,
              zD = this.props,
              wD = zD.payload,
              sD = zD.iconSize,
              gD = zD.layout,
              AD = zD.formatter,
              fD = zD.inactiveColor,
              ID = {
                x: 0,
                y: 0,
                width: JD,
                height: JD
              },
              BD = {
                display: "horizontal" === gD ? "inline-block" : "block",
                marginRight: 10
              },
              GD = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return wD.map((function(zD, wD) {
              var gD = zD.formatter || AD,
                hD = (0, rD.b)(MD(MD({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(wD), !0), "inactive", zD.inactive));
              if ("none" === zD.type) return null;
              var nD = KD()(zD.value) ? null : zD.value;
              (0, LD.d)(!KD()(zD.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var OD = zD.inactive ? fD : zD.color;
              return pD.createElement("li", UD({
                className: hD,
                style: BD,
                key: "legend-item-".concat(wD)
              }, (0, RD.j)(DD.props, zD, wD)), pD.createElement(cD.c, {
                width: sD,
                height: sD,
                viewBox: ID,
                style: GD
              }, DD.renderIcon(zD)), pD.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: OD
                }
              }, gD ? gD(nD, zD, wD) : nD))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var DD = this.props,
              zD = DD.payload,
              wD = DD.layout,
              sD = DD.align;
            if (!zD || !zD.length) return null;
            var KD = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === wD ? sD : "left"
            };
            return pD.createElement("ul", {
              className: "recharts-default-legend",
              style: KD
            }, this.renderItems())
          }
        }], sD && ID(wD.prototype, sD), AD && ID(wD, AD), Object.defineProperty(wD, "prototype", {
          writable: !1
        }), wD;
        var wD, sD, AD
      }(pD.PureComponent);
    MD(ED, "displayName", "Legend"), MD(ED, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var QD = wD(5223),
      XD = wD(6021);

    function VD(DD) {
      return VD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, VD(DD)
    }
    var PD = ["ref"];

    function CD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function xD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? CD(Object(wD), !0).forEach((function(zD) {
          iD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : CD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function TD(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, lD(pD.key), pD)
      }
    }

    function bD(DD, zD, wD) {
      return zD = dD(zD),
        function(DD, zD) {
          if (zD && ("object" === VD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, jD() ? Reflect.construct(zD, wD || [], dD(DD).constructor) : zD.apply(DD, wD))
    }

    function jD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (jD = function() {
        return !!DD
      })()
    }

    function dD(DD) {
      return dD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, dD(DD)
    }

    function SD(DD, zD) {
      return SD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, SD(DD, zD)
    }

    function iD(DD, zD, wD) {
      return (zD = lD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function lD(DD) {
      var zD = function(DD, zD) {
        if ("object" != VD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != VD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == VD(zD) ? zD : zD + ""
    }

    function WD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function ND(DD) {
      return DD.value
    }
    var ZD = function(DD) {
      function zD() {
        var DD;
        ! function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, zD);
        for (var wD = arguments.length, pD = new Array(wD), sD = 0; sD < wD; sD++) pD[sD] = arguments[sD];
        return iD(DD = bD(this, zD, [].concat(pD)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), DD
      }
      return function(DD, zD) {
        if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(zD && zD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), zD && SD(DD, zD)
      }(zD, DD), wD = zD, KD = [{
        key: "getWithHeight",
        value: function(DD, zD) {
          var wD = xD(xD({}, this.defaultProps), DD.props).layout;
          return "vertical" === wD && (0, QD.y)(DD.props.height) ? {
            height: DD.props.height
          } : "horizontal" === wD ? {
            width: DD.props.width || zD
          } : null
        }
      }], (sD = [{
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
            var DD = this.wrapperNode.getBoundingClientRect();
            return DD.height = this.wrapperNode.offsetHeight, DD.width = this.wrapperNode.offsetWidth, DD
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var DD = this.props.onBBoxUpdate,
            zD = this.getBBox();
          zD ? (Math.abs(zD.width - this.lastBoundingBox.width) > 1 || Math.abs(zD.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = zD.width, this.lastBoundingBox.height = zD.height, DD && DD(zD)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, DD && DD(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? xD({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(DD) {
          var zD, wD, pD = this.props,
            sD = pD.layout,
            KD = pD.align,
            rD = pD.verticalAlign,
            LD = pD.margin,
            cD = pD.chartWidth,
            gD = pD.chartHeight;
          return DD && (void 0 !== DD.left && null !== DD.left || void 0 !== DD.right && null !== DD.right) || (zD = "center" === KD && "vertical" === sD ? {
            left: ((cD || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === KD ? {
            right: LD && LD.right || 0
          } : {
            left: LD && LD.left || 0
          }), DD && (void 0 !== DD.top && null !== DD.top || void 0 !== DD.bottom && null !== DD.bottom) || (wD = "middle" === rD ? {
            top: ((gD || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === rD ? {
            bottom: LD && LD.bottom || 0
          } : {
            top: LD && LD.top || 0
          }), xD(xD({}, zD), wD)
        }
      }, {
        key: "render",
        value: function() {
          var DD = this,
            zD = this.props,
            wD = zD.content,
            sD = zD.width,
            KD = zD.height,
            rD = zD.wrapperStyle,
            LD = zD.payloadUniqBy,
            cD = zD.payload,
            gD = xD(xD({
              position: "absolute",
              width: sD || "auto",
              height: KD || "auto"
            }, this.getDefaultPosition(rD)), rD);
          return pD.createElement("div", {
            className: "recharts-legend-wrapper",
            style: gD,
            ref: function(zD) {
              DD.wrapperNode = zD
            }
          }, function(DD, zD) {
            if (pD.isValidElement(DD)) return pD.cloneElement(DD, zD);
            if ("function" === typeof DD) return pD.createElement(DD, zD);
            zD.ref;
            var wD = WD(zD, PD);
            return pD.createElement(ED, wD)
          }(wD, xD(xD({}, this.props), {}, {
            payload: (0, XD.b)(cD, LD, ND)
          })))
        }
      }]) && TD(wD.prototype, sD), KD && TD(wD, KD), Object.defineProperty(wD, "prototype", {
        writable: !1
      }), wD;
      var wD, sD, KD
    }(pD.PureComponent);
    iD(ZD, "displayName", "Legend"), iD(ZD, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  5115: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => GD
    });
    var pD = wD(5121),
      sD = wD(58),
      KD = wD(5128),
      rD = wD.n(KD),
      LD = wD(5223),
      cD = wD(5480),
      gD = wD(5484);

    function RD(DD) {
      return RD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, RD(DD)
    }

    function AD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function UD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? AD(Object(wD), !0).forEach((function(zD) {
          fD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : AD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function fD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != RD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != RD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == RD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function ID(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        var wD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != wD) {
          var pD, sD, KD, rD, LD = [],
            cD = !0,
            gD = !1;
          try {
            if (KD = (wD = wD.call(DD)).next, 0 === zD) {
              if (Object(wD) !== wD) return;
              cD = !1
            } else
              for (; !(cD = (pD = KD.call(wD)).done) && (LD.push(pD.value), LD.length !== zD); cD = !0);
          } catch (DD) {
            gD = !0, sD = DD
          } finally {
            try {
              if (!cD && null != wD.return && (rD = wD.return(), Object(rD) !== rD)) return
            } finally {
              if (gD) throw sD
            }
          }
          return LD
        }
      }(DD, zD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return BD(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return BD(DD, zD)
      }(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function BD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }
    var GD = (0, sD.forwardRef)((function(DD, zD) {
      var wD = DD.aspect,
        KD = DD.initialDimension,
        RD = void 0 === KD ? {
          width: -1,
          height: -1
        } : KD,
        AD = DD.width,
        fD = void 0 === AD ? "100%" : AD,
        BD = DD.height,
        GD = void 0 === BD ? "100%" : BD,
        hD = DD.minWidth,
        nD = void 0 === hD ? 0 : hD,
        MD = DD.minHeight,
        OD = DD.maxHeight,
        JD = DD.children,
        ED = DD.debounce,
        QD = void 0 === ED ? 0 : ED,
        XD = DD.id,
        VD = DD.className,
        PD = DD.GJ,
        CD = DD.style,
        xD = void 0 === CD ? {} : CD,
        TD = (0, sD.useRef)(null),
        bD = (0, sD.useRef)();
      bD.current = PD, (0, sD.useImperativeHandle)(zD, (function() {
        return Object.defineProperty(TD.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), TD.current
          },
          configurable: !0
        })
      }));
      var jD = ID((0, sD.useState)({
          containerWidth: RD.width,
          containerHeight: RD.height
        }), 2),
        dD = jD[0],
        SD = jD[1],
        iD = (0, sD.useCallback)((function(DD, zD) {
          SD((function(wD) {
            var pD = Math.round(DD),
              sD = Math.round(zD);
            return wD.containerWidth === pD && wD.containerHeight === sD ? wD : {
              containerWidth: pD,
              containerHeight: sD
            }
          }))
        }), []);
      (0, sD.useEffect)((function() {
        var DD = function(DD) {
          var zD, wD = DD[0].contentRect,
            pD = wD.width,
            sD = wD.height;
          iD(pD, sD), null === (zD = bD.current) || void 0 === zD || zD.call(bD, pD, sD)
        };
        QD > 0 && (DD = rD()(DD, QD, {
          trailing: !0,
          leading: !1
        }));
        var zD = new ResizeObserver(DD),
          wD = TD.current.getBoundingClientRect(),
          pD = wD.width,
          sD = wD.height;
        return iD(pD, sD), zD.observe(TD.current),
          function() {
            zD.disconnect()
          }
      }), [iD, QD]);
      var lD = (0, sD.useMemo)((function() {
        var DD = dD.containerWidth,
          zD = dD.containerHeight;
        if (DD < 0 || zD < 0) return null;
        (0, cD.d)((0, LD.B)(fD) || (0, LD.B)(GD), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", fD, GD), (0, cD.d)(!wD || wD > 0, "The aspect(%s) must be greater than zero.", wD);
        var pD = (0, LD.B)(fD) ? DD : fD,
          KD = (0, LD.B)(GD) ? zD : GD;
        wD && wD > 0 && (pD ? KD = pD / wD : KD && (pD = KD * wD), OD && KD > OD && (KD = OD)), (0, cD.d)(pD > 0 || KD > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", pD, KD, fD, GD, nD, MD, wD);
        var rD = !Array.isArray(JD) && (0, gD.j)(JD.type).endsWith("Chart");
        return sD.Children.map(JD, (function(DD) {
          return sD.isValidElement(DD) ? (0, sD.cloneElement)(DD, UD({
            width: pD,
            height: KD
          }, rD ? {
            style: UD({
              height: "100%",
              width: "100%",
              maxHeight: KD,
              maxWidth: pD
            }, DD.props.style)
          } : {})) : DD
        }))
      }), [wD, JD, GD, OD, MD, nD, dD, fD]);
      return sD.createElement("div", {
        id: XD ? "".concat(XD) : void 0,
        className: (0, pD.b)("recharts-responsive-container", VD),
        style: UD(UD({}, xD), {}, {
          width: fD,
          height: GD,
          minWidth: nD,
          minHeight: MD,
          maxHeight: OD
        }),
        ref: TD
      }, lD)
    }))
  },
  6166: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => yD
    });
    var pD = wD(58),
      sD = wD(5478),
      KD = wD.n(sD),
      rD = wD(5121),
      LD = wD(5223),
      cD = wD(6012),
      gD = wD(5484),
      RD = wD(6169);

    function AD(DD) {
      return AD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, AD(DD)
    }

    function UD(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        var wD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != wD) {
          var pD, sD, KD, rD, LD = [],
            cD = !0,
            gD = !1;
          try {
            if (KD = (wD = wD.call(DD)).next, 0 === zD) {
              if (Object(wD) !== wD) return;
              cD = !1
            } else
              for (; !(cD = (pD = KD.call(wD)).done) && (LD.push(pD.value), LD.length !== zD); cD = !0);
          } catch (DD) {
            gD = !0, sD = DD
          } finally {
            try {
              if (!cD && null != wD.return && (rD = wD.return(), Object(rD) !== rD)) return
            } finally {
              if (gD) throw sD
            }
          }
          return LD
        }
      }(DD, zD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return fD(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return fD(DD, zD)
      }(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function ID(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, BD(pD.key), pD)
      }
    }

    function BD(DD) {
      var zD = function(DD, zD) {
        if ("object" != AD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != AD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == AD(zD) ? zD : zD + ""
    }
    var GD = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      hD = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      nD = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      MD = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      OD = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      JD = Object.keys(OD),
      ED = "NaN";
    var QD = function() {
      function DD(zD, wD) {
        ! function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, DD), this.num = zD, this.unit = wD, this.num = zD, this.unit = wD, Number.isNaN(zD) && (this.unit = ""), "" === wD || nD.test(wD) || (this.num = NaN, this.unit = ""), JD.includes(wD) && (this.num = function(DD, zD) {
          return DD * OD[zD]
        }(zD, wD), this.unit = "px")
      }
      return zD = DD, pD = [{
        key: "parse",
        value: function(zD) {
          var wD, pD = UD(null !== (wD = MD.exec(zD)) && void 0 !== wD ? wD : [], 3),
            sD = pD[1],
            KD = pD[2];
          return new DD(parseFloat(sD), null !== KD && void 0 !== KD ? KD : "")
        }
      }], (wD = [{
        key: "add",
        value: function(zD) {
          return this.unit !== zD.unit ? new DD(NaN, "") : new DD(this.num + zD.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(zD) {
          return this.unit !== zD.unit ? new DD(NaN, "") : new DD(this.num - zD.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(zD) {
          return "" !== this.unit && "" !== zD.unit && this.unit !== zD.unit ? new DD(NaN, "") : new DD(this.num * zD.num, this.unit || zD.unit)
        }
      }, {
        key: "divide",
        value: function(zD) {
          return "" !== this.unit && "" !== zD.unit && this.unit !== zD.unit ? new DD(NaN, "") : new DD(this.num / zD.num, this.unit || zD.unit)
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
      }]) && ID(zD.prototype, wD), pD && ID(zD, pD), Object.defineProperty(zD, "prototype", {
        writable: !1
      }), zD;
      var zD, wD, pD
    }();

    function XD(DD) {
      if (DD.includes(ED)) return ED;
      for (var zD = DD; zD.includes("*") || zD.includes("/");) {
        var wD, pD = UD(null !== (wD = GD.exec(zD)) && void 0 !== wD ? wD : [], 4),
          sD = pD[1],
          KD = pD[2],
          rD = pD[3],
          LD = QD.parse(null !== sD && void 0 !== sD ? sD : ""),
          cD = QD.parse(null !== rD && void 0 !== rD ? rD : ""),
          gD = "*" === KD ? LD.multiply(cD) : LD.divide(cD);
        if (gD.isNaN()) return ED;
        zD = zD.replace(GD, gD.toString())
      }
      for (; zD.includes("+") || /.-\d+(?:\.\d+)?/.test(zD);) {
        var RD, AD = UD(null !== (RD = hD.exec(zD)) && void 0 !== RD ? RD : [], 4),
          fD = AD[1],
          ID = AD[2],
          BD = AD[3],
          nD = QD.parse(null !== fD && void 0 !== fD ? fD : ""),
          MD = QD.parse(null !== BD && void 0 !== BD ? BD : ""),
          OD = "+" === ID ? nD.add(MD) : nD.subtract(MD);
        if (OD.isNaN()) return ED;
        zD = zD.replace(hD, OD.toString())
      }
      return zD
    }
    var VD = /\(([^()]*)\)/;

    function PD(DD) {
      var zD = DD.replace(/\s+/g, "");
      return zD = function(DD) {
        for (var zD = DD; zD.includes("(");) {
          var wD = UD(VD.exec(zD), 2)[1];
          zD = zD.replace(VD, XD(wD))
        }
        return zD
      }(zD), zD = XD(zD)
    }

    function CD(DD) {
      var zD = function(DD) {
        try {
          return PD(DD)
        } catch (zD) {
          return ED
        }
      }(DD.slice(5, -1));
      return zD === ED ? "" : zD
    }
    var xD = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      TD = ["dx", "dy", "angle", "className", "breakAll"];

    function bD() {
      return bD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, bD.apply(this, arguments)
    }

    function jD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function dD(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        var wD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != wD) {
          var pD, sD, KD, rD, LD = [],
            cD = !0,
            gD = !1;
          try {
            if (KD = (wD = wD.call(DD)).next, 0 === zD) {
              if (Object(wD) !== wD) return;
              cD = !1
            } else
              for (; !(cD = (pD = KD.call(wD)).done) && (LD.push(pD.value), LD.length !== zD); cD = !0);
          } catch (DD) {
            gD = !0, sD = DD
          } finally {
            try {
              if (!cD && null != wD.return && (rD = wD.return(), Object(rD) !== rD)) return
            } finally {
              if (gD) throw sD
            }
          }
          return LD
        }
      }(DD, zD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return SD(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return SD(DD, zD)
      }(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function SD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }
    var iD = /[ \f\n\r\t\v\u2028\u2029]+/,
      lD = function(DD) {
        var zD = DD.children,
          wD = DD.breakAll,
          pD = DD.style;
        try {
          var sD = [];
          return KD()(zD) || (sD = wD ? zD.toString().split("") : zD.toString().split(iD)), {
            wordsWithComputedWidth: sD.map((function(DD) {
              return {
                word: DD,
                width: (0, RD.h)(DD, pD).width
              }
            })),
            spaceWidth: wD ? 0 : (0, RD.h)("\xa0", pD).width
          }
        } catch (rD) {
          return null
        }
      },
      WD = function(DD) {
        return [{
          words: KD()(DD) ? [] : DD.toString().split(iD)
        }]
      },
      ND = function(DD) {
        var zD = DD.width,
          wD = DD.scaleToFit,
          pD = DD.children,
          sD = DD.style,
          KD = DD.breakAll,
          rD = DD.maxLines;
        if ((zD || wD) && !cD.c.isSsr) {
          var gD = lD({
            breakAll: KD,
            children: pD,
            style: sD
          });
          return gD ? function(DD, zD, wD, pD, sD) {
            var KD = DD.maxLines,
              rD = DD.children,
              cD = DD.style,
              gD = DD.breakAll,
              RD = (0, LD.y)(KD),
              AD = rD,
              UD = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(DD, zD) {
                  var KD = zD.word,
                    rD = zD.width,
                    LD = DD[DD.length - 1];
                  if (LD && (null == pD || sD || LD.width + rD + wD < Number(pD))) LD.words.push(KD), LD.width += rD + wD;
                  else {
                    var cD = {
                      words: [KD],
                      width: rD
                    };
                    DD.push(cD)
                  }
                  return DD
                }), [])
              },
              fD = UD(zD);
            if (!RD) return fD;
            for (var ID, BD = function(DD) {
                var zD = AD.slice(0, DD),
                  wD = lD({
                    breakAll: gD,
                    style: cD,
                    children: zD + "\u2026"
                  }).wordsWithComputedWidth,
                  sD = UD(wD),
                  rD = sD.length > KD || function(DD) {
                    return DD.reduce((function(DD, zD) {
                      return DD.width > zD.width ? DD : zD
                    }))
                  }(sD).width > Number(pD);
                return [rD, sD]
              }, GD = 0, hD = AD.length - 1, nD = 0; GD <= hD && nD <= AD.length - 1;) {
              var MD = Math.floor((GD + hD) / 2),
                OD = dD(BD(MD - 1), 2),
                JD = OD[0],
                ED = OD[1],
                QD = dD(BD(MD), 1)[0];
              if (JD || QD || (GD = MD + 1), JD && QD && (hD = MD - 1), !JD && QD) {
                ID = ED;
                break
              }
              nD++
            }
            return ID || fD
          }({
            breakAll: KD,
            children: pD,
            maxLines: rD,
            style: sD
          }, gD.wordsWithComputedWidth, gD.spaceWidth, zD, wD) : WD(pD)
        }
        return WD(pD)
      },
      ZD = "#808080",
      yD = function(DD) {
        var zD = DD.x,
          wD = void 0 === zD ? 0 : zD,
          sD = DD.y,
          KD = void 0 === sD ? 0 : sD,
          cD = DD.lineHeight,
          RD = void 0 === cD ? "1em" : cD,
          AD = DD.capHeight,
          UD = void 0 === AD ? "0.71em" : AD,
          fD = DD.scaleToFit,
          ID = void 0 !== fD && fD,
          BD = DD.textAnchor,
          GD = void 0 === BD ? "start" : BD,
          hD = DD.verticalAnchor,
          nD = void 0 === hD ? "end" : hD,
          MD = DD.fill,
          OD = void 0 === MD ? ZD : MD,
          JD = jD(DD, xD),
          ED = (0, pD.useMemo)((function() {
            return ND({
              breakAll: JD.breakAll,
              children: JD.children,
              maxLines: JD.maxLines,
              scaleToFit: ID,
              style: JD.style,
              width: JD.width
            })
          }), [JD.breakAll, JD.children, JD.maxLines, ID, JD.style, JD.width]),
          QD = JD.dx,
          XD = JD.dy,
          VD = JD.angle,
          PD = JD.className,
          dD = JD.breakAll,
          SD = jD(JD, TD);
        if (!(0, LD.x)(wD) || !(0, LD.x)(KD)) return null;
        var iD, lD = wD + ((0, LD.y)(QD) ? QD : 0),
          WD = KD + ((0, LD.y)(XD) ? XD : 0);
        switch (nD) {
          case "start":
            iD = CD("calc(".concat(UD, ")"));
            break;
          case "middle":
            iD = CD("calc(".concat((ED.length - 1) / 2, " * -").concat(RD, " + (").concat(UD, " / 2))"));
            break;
          default:
            iD = CD("calc(".concat(ED.length - 1, " * -").concat(RD, ")"))
        }
        var yD = [];
        if (ID) {
          var kD = ED[0].width,
            mD = JD.width;
          yD.push("scale(".concat(((0, LD.y)(mD) ? mD / kD : 1) / kD, ")"))
        }
        return VD && yD.push("rotate(".concat(VD, ", ").concat(lD, ", ").concat(WD, ")")), yD.length && (SD.transform = yD.join(" ")), pD.createElement("text", bD({}, (0, gD.e)(SD, !0), {
          x: lD,
          y: WD,
          className: (0, rD.b)("recharts-text", PD),
          textAnchor: GD,
          fill: OD.includes("url") ? ZD : OD
        }), ED.map((function(DD, zD) {
          var wD = DD.words.join(dD ? "" : " ");
          return pD.createElement("tspan", {
            x: lD,
            dy: 0 === zD ? iD : RD,
            key: "".concat(wD, "-").concat(zD)
          }, wD)
        })))
      }
  },
  6008: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => YD
    });
    var pD = wD(58),
      sD = wD(5565),
      KD = wD.n(sD),
      rD = wD(5478),
      LD = wD.n(rD),
      cD = wD(5121),
      gD = wD(5223);

    function RD(DD) {
      return RD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, RD(DD)
    }

    function AD() {
      return AD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, AD.apply(this, arguments)
    }

    function UD(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        var wD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != wD) {
          var pD, sD, KD, rD, LD = [],
            cD = !0,
            gD = !1;
          try {
            if (KD = (wD = wD.call(DD)).next, 0 === zD) {
              if (Object(wD) !== wD) return;
              cD = !1
            } else
              for (; !(cD = (pD = KD.call(wD)).done) && (LD.push(pD.value), LD.length !== zD); cD = !0);
          } catch (DD) {
            gD = !0, sD = DD
          } finally {
            try {
              if (!cD && null != wD.return && (rD = wD.return(), Object(rD) !== rD)) return
            } finally {
              if (gD) throw sD
            }
          }
          return LD
        }
      }(DD, zD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return fD(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return fD(DD, zD)
      }(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function ID(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function BD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? ID(Object(wD), !0).forEach((function(zD) {
          GD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : ID(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function GD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != RD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != RD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == RD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function hD(DD) {
      return Array.isArray(DD) && (0, gD.x)(DD[0]) && (0, gD.x)(DD[1]) ? DD.join(" ~ ") : DD
    }
    var nD = function(DD) {
      var zD = DD.separator,
        wD = void 0 === zD ? " : " : zD,
        sD = DD.contentStyle,
        rD = void 0 === sD ? {} : sD,
        RD = DD.itemStyle,
        fD = void 0 === RD ? {} : RD,
        ID = DD.labelStyle,
        GD = void 0 === ID ? {} : ID,
        nD = DD.payload,
        MD = DD.formatter,
        OD = DD.itemSorter,
        JD = DD.wrapperClassName,
        ED = DD.labelClassName,
        QD = DD.label,
        XD = DD.labelFormatter,
        VD = DD.accessibilityLayer,
        PD = void 0 !== VD && VD,
        CD = BD({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, rD),
        xD = BD({
          margin: 0
        }, GD),
        TD = !LD()(QD),
        bD = TD ? QD : "",
        jD = (0, cD.b)("recharts-default-tooltip", JD),
        dD = (0, cD.b)("recharts-tooltip-label", ED);
      TD && XD && void 0 !== nD && null !== nD && (bD = XD(QD, nD));
      var SD = PD ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return pD.createElement("div", AD({
        className: jD,
        style: CD
      }, SD), pD.createElement("p", {
        className: dD,
        style: xD
      }, pD.isValidElement(bD) ? bD : "".concat(bD)), function() {
        if (nD && nD.length) {
          var DD = (OD ? KD()(nD, OD) : nD).map((function(DD, zD) {
            if ("none" === DD.type) return null;
            var sD = BD({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: DD.color || "#000"
              }, fD),
              KD = DD.formatter || MD || hD,
              rD = DD.value,
              LD = DD.name,
              cD = rD,
              RD = LD;
            if (KD && null != cD && null != RD) {
              var AD = KD(rD, LD, DD, zD, nD);
              if (Array.isArray(AD)) {
                var ID = UD(AD, 2);
                cD = ID[0], RD = ID[1]
              } else cD = AD
            }
            return pD.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(zD),
              style: sD
            }, (0, gD.x)(RD) ? pD.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, RD) : null, (0, gD.x)(RD) ? pD.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, wD) : null, pD.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, cD), pD.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, DD.unit || ""))
          }));
          return pD.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, DD)
        }
        return null
      }())
    };

    function MD(DD) {
      return MD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, MD(DD)
    }

    function OD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != MD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != MD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == MD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }
    var JD = "recharts-tooltip-wrapper",
      ED = {
        visibility: "hidden"
      };

    function QD(DD) {
      var zD = DD.coordinate,
        wD = DD.translateX,
        pD = DD.translateY;
      return (0, cD.b)(JD, OD(OD(OD(OD({}, "".concat(JD, "-right"), (0, gD.y)(wD) && zD && (0, gD.y)(zD.x) && wD >= zD.x), "".concat(JD, "-left"), (0, gD.y)(wD) && zD && (0, gD.y)(zD.x) && wD < zD.x), "".concat(JD, "-bottom"), (0, gD.y)(pD) && zD && (0, gD.y)(zD.y) && pD >= zD.y), "".concat(JD, "-top"), (0, gD.y)(pD) && zD && (0, gD.y)(zD.y) && pD < zD.y))
    }

    function XD(DD) {
      var zD = DD.allowEscapeViewBox,
        wD = DD.coordinate,
        pD = DD.key,
        sD = DD.offsetTopLeft,
        KD = DD.position,
        rD = DD.reverseDirection,
        LD = DD.tooltipDimension,
        cD = DD.viewBox,
        RD = DD.viewBoxDimension;
      if (KD && (0, gD.y)(KD[pD])) return KD[pD];
      var AD = wD[pD] - LD - sD,
        UD = wD[pD] + sD;
      return zD[pD] ? rD[pD] ? AD : UD : rD[pD] ? AD < cD[pD] ? Math.max(UD, cD[pD]) : Math.max(AD, cD[pD]) : UD + LD > cD[pD] + RD ? Math.max(AD, cD[pD]) : Math.max(UD, cD[pD])
    }

    function VD(DD) {
      return VD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, VD(DD)
    }

    function PD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function CD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? PD(Object(wD), !0).forEach((function(zD) {
          SD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : PD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function xD(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, iD(pD.key), pD)
      }
    }

    function TD(DD, zD, wD) {
      return zD = jD(zD),
        function(DD, zD) {
          if (zD && ("object" === VD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, bD() ? Reflect.construct(zD, wD || [], jD(DD).constructor) : zD.apply(DD, wD))
    }

    function bD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (bD = function() {
        return !!DD
      })()
    }

    function jD(DD) {
      return jD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, jD(DD)
    }

    function dD(DD, zD) {
      return dD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, dD(DD, zD)
    }

    function SD(DD, zD, wD) {
      return (zD = iD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function iD(DD) {
      var zD = function(DD, zD) {
        if ("object" != VD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != VD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == VD(zD) ? zD : zD + ""
    }
    var lD = function(DD) {
        function zD() {
          var DD;
          ! function(DD, zD) {
            if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
          }(this, zD);
          for (var wD = arguments.length, pD = new Array(wD), sD = 0; sD < wD; sD++) pD[sD] = arguments[sD];
          return SD(DD = TD(this, zD, [].concat(pD)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), SD(DD, "handleKeyDown", (function(zD) {
            var wD, pD, sD, KD;
            "Escape" === zD.key && DD.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (wD = null === (pD = DD.props.coordinate) || void 0 === pD ? void 0 : pD.x) && void 0 !== wD ? wD : 0,
                y: null !== (sD = null === (KD = DD.props.coordinate) || void 0 === KD ? void 0 : KD.y) && void 0 !== sD ? sD : 0
              }
            })
          })), DD
        }
        return function(DD, zD) {
          if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
          DD.prototype = Object.create(zD && zD.prototype, {
            constructor: {
              value: DD,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(DD, "prototype", {
            writable: !1
          }), zD && dD(DD, zD)
        }(zD, DD), wD = zD, (sD = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var DD = this.wrapperNode.getBoundingClientRect();
              (Math.abs(DD.width - this.state.lastBoundingBox.width) > 1 || Math.abs(DD.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: DD.width,
                  height: DD.height
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
            var DD, zD;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (DD = this.props.coordinate) || void 0 === DD ? void 0 : DD.x) === this.state.dismissedAtCoordinate.x && (null === (zD = this.props.coordinate) || void 0 === zD ? void 0 : zD.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var DD = this,
              zD = this.props,
              wD = zD.active,
              sD = zD.allowEscapeViewBox,
              KD = zD.animationDuration,
              rD = zD.animationEasing,
              LD = zD.children,
              cD = zD.coordinate,
              gD = zD.hasPayload,
              RD = zD.isAnimationActive,
              AD = zD.offset,
              UD = zD.position,
              fD = zD.reverseDirection,
              ID = zD.useTranslate3d,
              BD = zD.viewBox,
              GD = zD.wrapperStyle,
              hD = function(DD) {
                var zD, wD, pD = DD.allowEscapeViewBox,
                  sD = DD.coordinate,
                  KD = DD.offsetTopLeft,
                  rD = DD.position,
                  LD = DD.reverseDirection,
                  cD = DD.tooltipBox,
                  gD = DD.useTranslate3d,
                  RD = DD.viewBox;
                return {
                  cssProperties: cD.height > 0 && cD.width > 0 && sD ? function(DD) {
                    var zD = DD.translateX,
                      wD = DD.translateY;
                    return {
                      transform: DD.useTranslate3d ? "translate3d(".concat(zD, "px, ").concat(wD, "px, 0)") : "translate(".concat(zD, "px, ").concat(wD, "px)")
                    }
                  }({
                    translateX: zD = XD({
                      allowEscapeViewBox: pD,
                      coordinate: sD,
                      key: "x",
                      offsetTopLeft: KD,
                      position: rD,
                      reverseDirection: LD,
                      tooltipDimension: cD.width,
                      viewBox: RD,
                      viewBoxDimension: RD.width
                    }),
                    translateY: wD = XD({
                      allowEscapeViewBox: pD,
                      coordinate: sD,
                      key: "y",
                      offsetTopLeft: KD,
                      position: rD,
                      reverseDirection: LD,
                      tooltipDimension: cD.height,
                      viewBox: RD,
                      viewBoxDimension: RD.height
                    }),
                    useTranslate3d: gD
                  }) : ED,
                  cssClasses: QD({
                    translateX: zD,
                    translateY: wD,
                    coordinate: sD
                  })
                }
              }({
                allowEscapeViewBox: sD,
                coordinate: cD,
                offsetTopLeft: AD,
                position: UD,
                reverseDirection: fD,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: ID,
                viewBox: BD
              }),
              nD = hD.cssClasses,
              MD = hD.cssProperties,
              OD = CD(CD({
                transition: RD && wD ? "transform ".concat(KD, "ms ").concat(rD) : void 0
              }, MD), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && wD && gD ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, GD);
            return pD.createElement("div", {
              tabIndex: -1,
              className: nD,
              style: OD,
              ref: function(zD) {
                DD.wrapperNode = zD
              }
            }, LD)
          }
        }]) && xD(wD.prototype, sD), KD && xD(wD, KD), Object.defineProperty(wD, "prototype", {
          writable: !1
        }), wD;
        var wD, sD, KD
      }(pD.PureComponent),
      WD = wD(6012),
      ND = wD(6021);

    function ZD(DD) {
      return ZD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, ZD(DD)
    }

    function yD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function kD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? yD(Object(wD), !0).forEach((function(zD) {
          vD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : yD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function mD(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, tD(pD.key), pD)
      }
    }

    function eD(DD, zD, wD) {
      return zD = aD(zD),
        function(DD, zD) {
          if (zD && ("object" === ZD(zD) || "function" === typeof zD)) return zD;
          if (void 0 !== zD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, oD() ? Reflect.construct(zD, wD || [], aD(DD).constructor) : zD.apply(DD, wD))
    }

    function oD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (oD = function() {
        return !!DD
      })()
    }

    function aD(DD) {
      return aD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, aD(DD)
    }

    function uD(DD, zD) {
      return uD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, zD) {
        return DD.__proto__ = zD, DD
      }, uD(DD, zD)
    }

    function vD(DD, zD, wD) {
      return (zD = tD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function tD(DD) {
      var zD = function(DD, zD) {
        if ("object" != ZD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != ZD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == ZD(zD) ? zD : zD + ""
    }

    function FD(DD) {
      return DD.dataKey
    }
    var YD = function(DD) {
      function zD() {
        return function(DD, zD) {
          if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
        }(this, zD), eD(this, zD, arguments)
      }
      return function(DD, zD) {
        if ("function" !== typeof zD && null !== zD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(zD && zD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), zD && uD(DD, zD)
      }(zD, DD), wD = zD, (sD = [{
        key: "render",
        value: function() {
          var DD = this,
            zD = this.props,
            wD = zD.active,
            sD = zD.allowEscapeViewBox,
            KD = zD.animationDuration,
            rD = zD.animationEasing,
            LD = zD.content,
            cD = zD.coordinate,
            gD = zD.filterNull,
            RD = zD.isAnimationActive,
            AD = zD.offset,
            UD = zD.payload,
            fD = zD.payloadUniqBy,
            ID = zD.position,
            BD = zD.reverseDirection,
            GD = zD.useTranslate3d,
            hD = zD.viewBox,
            MD = zD.wrapperStyle,
            OD = null !== UD && void 0 !== UD ? UD : [];
          gD && OD.length && (OD = (0, ND.b)(UD.filter((function(zD) {
            return null != zD.value && (!0 !== zD.hide || DD.props.includeHidden)
          })), fD, FD));
          var JD = OD.length > 0;
          return pD.createElement(lD, {
            allowEscapeViewBox: sD,
            animationDuration: KD,
            animationEasing: rD,
            isAnimationActive: RD,
            active: wD,
            coordinate: cD,
            hasPayload: JD,
            offset: AD,
            position: ID,
            reverseDirection: BD,
            useTranslate3d: GD,
            viewBox: hD,
            wrapperStyle: MD
          }, function(DD, zD) {
            return pD.isValidElement(DD) ? pD.cloneElement(DD, zD) : "function" === typeof DD ? pD.createElement(DD, zD) : pD.createElement(nD, zD)
          }(LD, kD(kD({}, this.props), {}, {
            payload: OD
          })))
        }
      }]) && mD(wD.prototype, sD), KD && mD(wD, KD), Object.defineProperty(wD, "prototype", {
        writable: !1
      }), wD;
      var wD, sD, KD
    }(pD.PureComponent);
    vD(YD, "displayName", "Tooltip"), vD(YD, "defaultProps", {
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
      isAnimationActive: !WD.c.isSsr,
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
  6004: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => gD
    });
    var pD = wD(58),
      sD = wD(5121),
      KD = wD(5484),
      rD = ["children", "className"];

    function LD() {
      return LD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, LD.apply(this, arguments)
    }

    function cD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }
    var gD = pD.forwardRef((function(DD, zD) {
      var wD = DD.children,
        gD = DD.className,
        RD = cD(DD, rD),
        AD = (0, sD.b)("recharts-layer", gD);
      return pD.createElement("g", LD({
        className: AD
      }, (0, KD.e)(RD, !0), {
        ref: zD
      }), wD)
    }))
  },
  5997: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => gD
    });
    var pD = wD(58),
      sD = wD(5121),
      KD = wD(5484),
      rD = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function LD() {
      return LD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, LD.apply(this, arguments)
    }

    function cD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function gD(DD) {
      var zD = DD.children,
        wD = DD.width,
        gD = DD.height,
        RD = DD.viewBox,
        AD = DD.className,
        UD = DD.style,
        fD = DD.title,
        ID = DD.desc,
        BD = cD(DD, rD),
        GD = RD || {
          width: wD,
          height: gD,
          x: 0,
          y: 0
        },
        hD = (0, sD.b)("recharts-surface", AD);
      return pD.createElement("svg", LD({}, (0, KD.e)(BD, !0, "svg"), {
        className: hD,
        width: wD,
        height: gD,
        style: UD,
        viewBox: "".concat(GD.x, " ").concat(GD.y, " ").concat(GD.width, " ").concat(GD.height)
      }), pD.createElement("title", null, fD), pD.createElement("desc", null, ID), zD)
    }
  },
  6383: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => MD,
      f: () => ED,
      h: () => xD,
      l: () => CD,
      n: () => OD,
      r: () => PD,
      v: () => VD,
      x: () => JD,
      y: () => XD,
      B: () => QD
    });
    var pD = wD(58),
      sD = wD(5995),
      KD = wD(6390),
      rD = wD.n(KD),
      LD = wD(6302),
      cD = wD.n(LD),
      gD = wD(5289),
      RD = wD.n(gD)()((function(DD) {
        return {
          x: DD.left,
          y: DD.top,
          width: DD.width,
          height: DD.height
        }
      }), (function(DD) {
        return ["l", DD.left, "t", DD.top, "w", DD.width, "h", DD.height].join("")
      })),
      AD = wD(5223);
    var UD = (0, pD.createContext)(void 0),
      fD = (0, pD.createContext)(void 0),
      ID = (0, pD.createContext)(void 0),
      BD = (0, pD.createContext)({}),
      GD = (0, pD.createContext)(void 0),
      hD = (0, pD.createContext)(0),
      nD = (0, pD.createContext)(0),
      MD = function(DD) {
        var zD = DD.state,
          wD = zD.xAxisMap,
          sD = zD.yAxisMap,
          KD = zD.offset,
          rD = DD.clipPathId,
          LD = DD.children,
          cD = DD.width,
          gD = DD.height,
          AD = RD(KD);
        return pD.createElement(UD.Provider, {
          value: wD
        }, pD.createElement(fD.Provider, {
          value: sD
        }, pD.createElement(BD.Provider, {
          value: KD
        }, pD.createElement(ID.Provider, {
          value: AD
        }, pD.createElement(GD.Provider, {
          value: rD
        }, pD.createElement(hD.Provider, {
          value: gD
        }, pD.createElement(nD.Provider, {
          value: cD
        }, LD)))))))
      },
      OD = function() {
        return (0, pD.useContext)(GD)
      };
    var JD = function(DD) {
        var zD = (0, pD.useContext)(UD);
        null == zD && (0, sD.c)(!1);
        var wD = zD[DD];
        return null == wD && (0, sD.c)(!1), wD
      },
      ED = function() {
        var DD = (0, pD.useContext)(UD);
        return (0, AD.h)(DD)
      },
      QD = function() {
        var DD = (0, pD.useContext)(fD);
        return rD()(DD, (function(DD) {
          return cD()(DD.domain, Number.isFinite)
        })) || (0, AD.h)(DD)
      },
      XD = function(DD) {
        var zD = (0, pD.useContext)(fD);
        null == zD && (0, sD.c)(!1);
        var wD = zD[DD];
        return null == wD && (0, sD.c)(!1), wD
      },
      VD = function() {
        return (0, pD.useContext)(ID)
      },
      PD = function() {
        return (0, pD.useContext)(BD)
      },
      CD = function() {
        return (0, pD.useContext)(nD)
      },
      xD = function() {
        return (0, pD.useContext)(hD)
      }
  },
  6412: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => FD
    });
    var pD = wD(58);

    function sD() {}

    function KD(DD, zD, wD) {
      DD._context.bezierCurveTo((2 * DD._x0 + DD._x1) / 3, (2 * DD._y0 + DD._y1) / 3, (DD._x0 + 2 * DD._x1) / 3, (DD._y0 + 2 * DD._y1) / 3, (DD._x0 + 4 * DD._x1 + zD) / 6, (DD._y0 + 4 * DD._y1 + wD) / 6)
    }

    function rD(DD) {
      this._context = DD
    }

    function LD(DD) {
      this._context = DD
    }

    function cD(DD) {
      this._context = DD
    }
    rD.prototype = {
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
            KD(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(DD, zD) {
        switch (DD = +DD, zD = +zD, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(DD, zD) : this._context.moveTo(DD, zD);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            KD(this, DD, zD)
        }
        this._x0 = this._x1, this._x1 = DD, this._y0 = this._y1, this._y1 = zD
      }
    }, LD.prototype = {
      areaStart: sD,
      areaEnd: sD,
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
      point: function(DD, zD) {
        switch (DD = +DD, zD = +zD, this._point) {
          case 0:
            this._point = 1, this._x2 = DD, this._y2 = zD;
            break;
          case 1:
            this._point = 2, this._x3 = DD, this._y3 = zD;
            break;
          case 2:
            this._point = 3, this._x4 = DD, this._y4 = zD, this._context.moveTo((this._x0 + 4 * this._x1 + DD) / 6, (this._y0 + 4 * this._y1 + zD) / 6);
            break;
          default:
            KD(this, DD, zD)
        }
        this._x0 = this._x1, this._x1 = DD, this._y0 = this._y1, this._y1 = zD
      }
    }, cD.prototype = {
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
      point: function(DD, zD) {
        switch (DD = +DD, zD = +zD, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var wD = (this._x0 + 4 * this._x1 + DD) / 6,
              pD = (this._y0 + 4 * this._y1 + zD) / 6;
            this._line ? this._context.lineTo(wD, pD) : this._context.moveTo(wD, pD);
            break;
          case 3:
            this._point = 4;
          default:
            KD(this, DD, zD)
        }
        this._x0 = this._x1, this._x1 = DD, this._y0 = this._y1, this._y1 = zD
      }
    };
    class gD {
      constructor(DD, zD) {
        this._context = DD, this._x = zD
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
      point(DD, zD) {
        switch (DD = +DD, zD = +zD, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(DD, zD) : this._context.moveTo(DD, zD);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + DD) / 2, this._y0, this._x0, zD, DD, zD) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + zD) / 2, DD, this._y0, DD, zD)
        }
        this._x0 = DD, this._y0 = zD
      }
    }

    function RD(DD) {
      this._context = DD
    }

    function AD(DD) {
      this._context = DD
    }

    function UD(DD) {
      return new AD(DD)
    }

    function fD(DD) {
      return DD < 0 ? -1 : 1
    }

    function ID(DD, zD, wD) {
      var pD = DD._x1 - DD._x0,
        sD = zD - DD._x1,
        KD = (DD._y1 - DD._y0) / (pD || sD < 0 && -0),
        rD = (wD - DD._y1) / (sD || pD < 0 && -0),
        LD = (KD * sD + rD * pD) / (pD + sD);
      return (fD(KD) + fD(rD)) * Math.min(Math.abs(KD), Math.abs(rD), .5 * Math.abs(LD)) || 0
    }

    function BD(DD, zD) {
      var wD = DD._x1 - DD._x0;
      return wD ? (3 * (DD._y1 - DD._y0) / wD - zD) / 2 : zD
    }

    function GD(DD, zD, wD) {
      var pD = DD._x0,
        sD = DD._y0,
        KD = DD._x1,
        rD = DD._y1,
        LD = (KD - pD) / 3;
      DD._context.bezierCurveTo(pD + LD, sD + LD * zD, KD - LD, rD - LD * wD, KD, rD)
    }

    function hD(DD) {
      this._context = DD
    }

    function nD(DD) {
      this._context = new MD(DD)
    }

    function MD(DD) {
      this._context = DD
    }

    function OD(DD) {
      this._context = DD
    }

    function JD(DD) {
      var zD, wD, pD = DD.length - 1,
        sD = new Array(pD),
        KD = new Array(pD),
        rD = new Array(pD);
      for (sD[0] = 0, KD[0] = 2, rD[0] = DD[0] + 2 * DD[1], zD = 1; zD < pD - 1; ++zD) sD[zD] = 1, KD[zD] = 4, rD[zD] = 4 * DD[zD] + 2 * DD[zD + 1];
      for (sD[pD - 1] = 2, KD[pD - 1] = 7, rD[pD - 1] = 8 * DD[pD - 1] + DD[pD], zD = 1; zD < pD; ++zD) wD = sD[zD] / KD[zD - 1], KD[zD] -= wD, rD[zD] -= wD * rD[zD - 1];
      for (sD[pD - 1] = rD[pD - 1] / KD[pD - 1], zD = pD - 2; zD >= 0; --zD) sD[zD] = (rD[zD] - sD[zD + 1]) / KD[zD];
      for (KD[pD - 1] = (DD[pD] + sD[pD - 1]) / 2, zD = 0; zD < pD - 1; ++zD) KD[zD] = 2 * DD[zD + 1] - sD[zD + 1];
      return [sD, KD]
    }

    function ED(DD, zD) {
      this._context = DD, this._t = zD
    }
    RD.prototype = {
      areaStart: sD,
      areaEnd: sD,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(DD, zD) {
        DD = +DD, zD = +zD, this._point ? this._context.lineTo(DD, zD) : (this._point = 1, this._context.moveTo(DD, zD))
      }
    }, AD.prototype = {
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
      point: function(DD, zD) {
        switch (DD = +DD, zD = +zD, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(DD, zD) : this._context.moveTo(DD, zD);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(DD, zD)
        }
      }
    }, hD.prototype = {
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
            GD(this, this._t0, BD(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(DD, zD) {
        var wD = NaN;
        if (zD = +zD, (DD = +DD) !== this._x1 || zD !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(DD, zD) : this._context.moveTo(DD, zD);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, GD(this, BD(this, wD = ID(this, DD, zD)), wD);
              break;
            default:
              GD(this, this._t0, wD = ID(this, DD, zD))
          }
          this._x0 = this._x1, this._x1 = DD, this._y0 = this._y1, this._y1 = zD, this._t0 = wD
        }
      }
    }, (nD.prototype = Object.create(hD.prototype)).point = function(DD, zD) {
      hD.prototype.point.call(this, zD, DD)
    }, MD.prototype = {
      moveTo: function(DD, zD) {
        this._context.moveTo(zD, DD)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(DD, zD) {
        this._context.lineTo(zD, DD)
      },
      bezierCurveTo: function(DD, zD, wD, pD, sD, KD) {
        this._context.bezierCurveTo(zD, DD, pD, wD, KD, sD)
      }
    }, OD.prototype = {
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
        var DD = this._x,
          zD = this._y,
          wD = DD.length;
        if (wD)
          if (this._line ? this._context.lineTo(DD[0], zD[0]) : this._context.moveTo(DD[0], zD[0]), 2 === wD) this._context.lineTo(DD[1], zD[1]);
          else
            for (var pD = JD(DD), sD = JD(zD), KD = 0, rD = 1; rD < wD; ++KD, ++rD) this._context.bezierCurveTo(pD[0][KD], sD[0][KD], pD[1][KD], sD[1][KD], DD[rD], zD[rD]);
        (this._line || 0 !== this._line && 1 === wD) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(DD, zD) {
        this._x.push(+DD), this._y.push(+zD)
      }
    }, ED.prototype = {
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
      point: function(DD, zD) {
        switch (DD = +DD, zD = +zD, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(DD, zD) : this._context.moveTo(DD, zD);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, zD), this._context.lineTo(DD, zD);
            else {
              var wD = this._x * (1 - this._t) + DD * this._t;
              this._context.lineTo(wD, this._y), this._context.lineTo(wD, zD)
            }
        }
        this._x = DD, this._y = zD
      }
    };
    var QD = wD(6259),
      XD = wD(6131),
      VD = wD(6140);

    function PD(DD) {
      return DD[0]
    }

    function CD(DD) {
      return DD[1]
    }

    function xD(DD, zD) {
      var wD = (0, XD.c)(!0),
        pD = null,
        sD = UD,
        KD = null,
        rD = (0, VD.e)(LD);

      function LD(LD) {
        var cD, gD, RD, AD = (LD = (0, QD.d)(LD)).length,
          UD = !1;
        for (null == pD && (KD = sD(RD = rD())), cD = 0; cD <= AD; ++cD) !(cD < AD && wD(gD = LD[cD], cD, LD)) === UD && ((UD = !UD) ? KD.lineStart() : KD.lineEnd()), UD && KD.point(+DD(gD, cD, LD), +zD(gD, cD, LD));
        if (RD) return KD = null, RD + "" || null
      }
      return DD = "function" === typeof DD ? DD : void 0 === DD ? PD : (0, XD.c)(DD), zD = "function" === typeof zD ? zD : void 0 === zD ? CD : (0, XD.c)(zD), LD.x = function(zD) {
        return arguments.length ? (DD = "function" === typeof zD ? zD : (0, XD.c)(+zD), LD) : DD
      }, LD.y = function(DD) {
        return arguments.length ? (zD = "function" === typeof DD ? DD : (0, XD.c)(+DD), LD) : zD
      }, LD.defined = function(DD) {
        return arguments.length ? (wD = "function" === typeof DD ? DD : (0, XD.c)(!!DD), LD) : wD
      }, LD.curve = function(DD) {
        return arguments.length ? (sD = DD, null != pD && (KD = sD(pD)), LD) : sD
      }, LD.context = function(DD) {
        return arguments.length ? (null == DD ? pD = KD = null : KD = sD(pD = DD), LD) : pD
      }, LD
    }

    function TD(DD, zD, wD) {
      var pD = null,
        sD = (0, XD.c)(!0),
        KD = null,
        rD = UD,
        LD = null,
        cD = (0, VD.e)(gD);

      function gD(gD) {
        var RD, AD, UD, fD, ID, BD = (gD = (0, QD.d)(gD)).length,
          GD = !1,
          hD = new Array(BD),
          nD = new Array(BD);
        for (null == KD && (LD = rD(ID = cD())), RD = 0; RD <= BD; ++RD) {
          if (!(RD < BD && sD(fD = gD[RD], RD, gD)) === GD)
            if (GD = !GD) AD = RD, LD.areaStart(), LD.lineStart();
            else {
              for (LD.lineEnd(), LD.lineStart(), UD = RD - 1; UD >= AD; --UD) LD.point(hD[UD], nD[UD]);
              LD.lineEnd(), LD.areaEnd()
            } GD && (hD[RD] = +DD(fD, RD, gD), nD[RD] = +zD(fD, RD, gD), LD.point(pD ? +pD(fD, RD, gD) : hD[RD], wD ? +wD(fD, RD, gD) : nD[RD]))
        }
        if (ID) return LD = null, ID + "" || null
      }

      function RD() {
        return xD().defined(sD).curve(rD).context(KD)
      }
      return DD = "function" === typeof DD ? DD : void 0 === DD ? PD : (0, XD.c)(+DD), zD = "function" === typeof zD ? zD : void 0 === zD ? (0, XD.c)(0) : (0, XD.c)(+zD), wD = "function" === typeof wD ? wD : void 0 === wD ? CD : (0, XD.c)(+wD), gD.x = function(zD) {
        return arguments.length ? (DD = "function" === typeof zD ? zD : (0, XD.c)(+zD), pD = null, gD) : DD
      }, gD.x0 = function(zD) {
        return arguments.length ? (DD = "function" === typeof zD ? zD : (0, XD.c)(+zD), gD) : DD
      }, gD.x1 = function(DD) {
        return arguments.length ? (pD = null == DD ? null : "function" === typeof DD ? DD : (0, XD.c)(+DD), gD) : pD
      }, gD.y = function(DD) {
        return arguments.length ? (zD = "function" === typeof DD ? DD : (0, XD.c)(+DD), wD = null, gD) : zD
      }, gD.y0 = function(DD) {
        return arguments.length ? (zD = "function" === typeof DD ? DD : (0, XD.c)(+DD), gD) : zD
      }, gD.y1 = function(DD) {
        return arguments.length ? (wD = null == DD ? null : "function" === typeof DD ? DD : (0, XD.c)(+DD), gD) : wD
      }, gD.lineX0 = gD.lineY0 = function() {
        return RD().x(DD).y(zD)
      }, gD.lineY1 = function() {
        return RD().x(DD).y(wD)
      }, gD.lineX1 = function() {
        return RD().x(pD).y(zD)
      }, gD.defined = function(DD) {
        return arguments.length ? (sD = "function" === typeof DD ? DD : (0, XD.c)(!!DD), gD) : sD
      }, gD.curve = function(DD) {
        return arguments.length ? (rD = DD, null != KD && (LD = rD(KD)), gD) : rD
      }, gD.context = function(DD) {
        return arguments.length ? (null == DD ? KD = LD = null : LD = rD(KD = DD), gD) : KD
      }, gD
    }
    var bD = wD(6089),
      jD = wD.n(bD),
      dD = wD(5333),
      SD = wD.n(dD),
      iD = wD(5121),
      lD = wD(5505),
      WD = wD(5484),
      ND = wD(5223);

    function ZD(DD) {
      return ZD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, ZD(DD)
    }

    function yD() {
      return yD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, yD.apply(this, arguments)
    }

    function kD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function mD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? kD(Object(wD), !0).forEach((function(zD) {
          eD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : kD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function eD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != ZD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != ZD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == ZD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }
    var oD = {
        curveBasisClosed: function(DD) {
          return new LD(DD)
        },
        curveBasisOpen: function(DD) {
          return new cD(DD)
        },
        curveBasis: function(DD) {
          return new rD(DD)
        },
        curveBumpX: function(DD) {
          return new gD(DD, !0)
        },
        curveBumpY: function(DD) {
          return new gD(DD, !1)
        },
        curveLinearClosed: function(DD) {
          return new RD(DD)
        },
        curveLinear: UD,
        curveMonotoneX: function(DD) {
          return new hD(DD)
        },
        curveMonotoneY: function(DD) {
          return new nD(DD)
        },
        curveNatural: function(DD) {
          return new OD(DD)
        },
        curveStep: function(DD) {
          return new ED(DD, .5)
        },
        curveStepAfter: function(DD) {
          return new ED(DD, 1)
        },
        curveStepBefore: function(DD) {
          return new ED(DD, 0)
        }
      },
      aD = function(DD) {
        return DD.x === +DD.x && DD.y === +DD.y
      },
      uD = function(DD) {
        return DD.x
      },
      vD = function(DD) {
        return DD.y
      },
      tD = function(DD) {
        var zD, wD = DD.type,
          pD = void 0 === wD ? "linear" : wD,
          sD = DD.points,
          KD = void 0 === sD ? [] : sD,
          rD = DD.baseLine,
          LD = DD.layout,
          cD = DD.connectNulls,
          gD = void 0 !== cD && cD,
          RD = function(DD, zD) {
            if (SD()(DD)) return DD;
            var wD = "curve".concat(jD()(DD));
            return "curveMonotone" !== wD && "curveBump" !== wD || !zD ? oD[wD] || UD : oD["".concat(wD).concat("vertical" === zD ? "Y" : "X")]
          }(pD, LD),
          AD = gD ? KD.filter((function(DD) {
            return aD(DD)
          })) : KD;
        if (Array.isArray(rD)) {
          var fD = gD ? rD.filter((function(DD) {
              return aD(DD)
            })) : rD,
            ID = AD.map((function(DD, zD) {
              return mD(mD({}, DD), {}, {
                base: fD[zD]
              })
            }));
          return (zD = "vertical" === LD ? TD().y(vD).x1(uD).x0((function(DD) {
            return DD.base.x
          })) : TD().x(uD).y1(vD).y0((function(DD) {
            return DD.base.y
          }))).defined(aD).curve(RD), zD(ID)
        }
        return (zD = "vertical" === LD && (0, ND.y)(rD) ? TD().y(vD).x1(uD).x0(rD) : (0, ND.y)(rD) ? TD().x(uD).y1(vD).y0(rD) : xD().x(uD).y(vD)).defined(aD).curve(RD), zD(AD)
      },
      FD = function(DD) {
        var zD = DD.className,
          wD = DD.points,
          sD = DD.path,
          KD = DD.pathRef;
        if ((!wD || !wD.length) && !sD) return null;
        var rD = wD && wD.length ? tD(DD) : sD;
        return pD.createElement("path", yD({}, (0, WD.e)(DD, !1), (0, lD.i)(DD), {
          className: (0, iD.b)("recharts-curve", zD),
          d: rD,
          ref: KD
        }))
      }
  },
  6146: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => cD
    });
    var pD = wD(58),
      sD = wD(5121),
      KD = wD(5505),
      rD = wD(5484);

    function LD() {
      return LD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, LD.apply(this, arguments)
    }
    var cD = function(DD) {
      var zD = DD.cx,
        wD = DD.cy,
        cD = DD.r,
        gD = DD.className,
        RD = (0, sD.b)("recharts-dot", gD);
      return zD === +zD && wD === +wD && cD === +cD ? pD.createElement("circle", LD({}, (0, rD.e)(DD, !1), (0, KD.i)(DD), {
        className: RD,
        cx: zD,
        cy: wD,
        r: cD
      })) : null
    }
  },
  6154: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => hD,
      d: () => BD
    });
    var pD = wD(58),
      sD = wD(5121),
      KD = wD(6158),
      rD = wD(5484);

    function LD(DD) {
      return LD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, LD(DD)
    }

    function cD() {
      return cD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, cD.apply(this, arguments)
    }

    function gD(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        var wD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != wD) {
          var pD, sD, KD, rD, LD = [],
            cD = !0,
            gD = !1;
          try {
            if (KD = (wD = wD.call(DD)).next, 0 === zD) {
              if (Object(wD) !== wD) return;
              cD = !1
            } else
              for (; !(cD = (pD = KD.call(wD)).done) && (LD.push(pD.value), LD.length !== zD); cD = !0);
          } catch (DD) {
            gD = !0, sD = DD
          } finally {
            try {
              if (!cD && null != wD.return && (rD = wD.return(), Object(rD) !== rD)) return
            } finally {
              if (gD) throw sD
            }
          }
          return LD
        }
      }(DD, zD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return RD(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return RD(DD, zD)
      }(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function RD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function AD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function UD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? AD(Object(wD), !0).forEach((function(zD) {
          fD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : AD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function fD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != LD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != LD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == LD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }
    var ID = function(DD, zD, wD, pD, sD) {
        var KD, rD = Math.min(Math.abs(wD) / 2, Math.abs(pD) / 2),
          LD = pD >= 0 ? 1 : -1,
          cD = wD >= 0 ? 1 : -1,
          gD = pD >= 0 && wD >= 0 || pD < 0 && wD < 0 ? 1 : 0;
        if (rD > 0 && sD instanceof Array) {
          for (var RD = [0, 0, 0, 0], AD = 0; AD < 4; AD++) RD[AD] = sD[AD] > rD ? rD : sD[AD];
          KD = "M".concat(DD, ",").concat(zD + LD * RD[0]), RD[0] > 0 && (KD += "A ".concat(RD[0], ",").concat(RD[0], ",0,0,").concat(gD, ",").concat(DD + cD * RD[0], ",").concat(zD)), KD += "L ".concat(DD + wD - cD * RD[1], ",").concat(zD), RD[1] > 0 && (KD += "A ".concat(RD[1], ",").concat(RD[1], ",0,0,").concat(gD, ",\n        ").concat(DD + wD, ",").concat(zD + LD * RD[1])), KD += "L ".concat(DD + wD, ",").concat(zD + pD - LD * RD[2]), RD[2] > 0 && (KD += "A ".concat(RD[2], ",").concat(RD[2], ",0,0,").concat(gD, ",\n        ").concat(DD + wD - cD * RD[2], ",").concat(zD + pD)), KD += "L ".concat(DD + cD * RD[3], ",").concat(zD + pD), RD[3] > 0 && (KD += "A ".concat(RD[3], ",").concat(RD[3], ",0,0,").concat(gD, ",\n        ").concat(DD, ",").concat(zD + pD - LD * RD[3])), KD += "Z"
        } else if (rD > 0 && sD === +sD && sD > 0) {
          var UD = Math.min(rD, sD);
          KD = "M ".concat(DD, ",").concat(zD + LD * UD, "\n            A ").concat(UD, ",").concat(UD, ",0,0,").concat(gD, ",").concat(DD + cD * UD, ",").concat(zD, "\n            L ").concat(DD + wD - cD * UD, ",").concat(zD, "\n            A ").concat(UD, ",").concat(UD, ",0,0,").concat(gD, ",").concat(DD + wD, ",").concat(zD + LD * UD, "\n            L ").concat(DD + wD, ",").concat(zD + pD - LD * UD, "\n            A ").concat(UD, ",").concat(UD, ",0,0,").concat(gD, ",").concat(DD + wD - cD * UD, ",").concat(zD + pD, "\n            L ").concat(DD + cD * UD, ",").concat(zD + pD, "\n            A ").concat(UD, ",").concat(UD, ",0,0,").concat(gD, ",").concat(DD, ",").concat(zD + pD - LD * UD, " Z")
        } else KD = "M ".concat(DD, ",").concat(zD, " h ").concat(wD, " v ").concat(pD, " h ").concat(-wD, " Z");
        return KD
      },
      BD = function(DD, zD) {
        if (!DD || !zD) return !1;
        var wD = DD.x,
          pD = DD.y,
          sD = zD.x,
          KD = zD.y,
          rD = zD.width,
          LD = zD.height;
        if (Math.abs(rD) > 0 && Math.abs(LD) > 0) {
          var cD = Math.min(sD, sD + rD),
            gD = Math.max(sD, sD + rD),
            RD = Math.min(KD, KD + LD),
            AD = Math.max(KD, KD + LD);
          return wD >= cD && wD <= gD && pD >= RD && pD <= AD
        }
        return !1
      },
      GD = {
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
      hD = function(DD) {
        var zD = UD(UD({}, GD), DD),
          wD = (0, pD.useRef)(),
          LD = gD((0, pD.useState)(-1), 2),
          RD = LD[0],
          AD = LD[1];
        (0, pD.useEffect)((function() {
          if (wD.current && wD.current.getTotalLength) try {
            var DD = wD.current.getTotalLength();
            DD && AD(DD)
          } catch (zD) {}
        }), []);
        var fD = zD.x,
          BD = zD.y,
          hD = zD.width,
          nD = zD.height,
          MD = zD.radius,
          OD = zD.className,
          JD = zD.animationEasing,
          ED = zD.animationDuration,
          QD = zD.animationBegin,
          XD = zD.isAnimationActive,
          VD = zD.isUpdateAnimationActive;
        if (fD !== +fD || BD !== +BD || hD !== +hD || nD !== +nD || 0 === hD || 0 === nD) return null;
        var PD = (0, sD.b)("recharts-rectangle", OD);
        return VD ? pD.createElement(KD.e, {
          canBegin: RD > 0,
          from: {
            width: hD,
            height: nD,
            x: fD,
            y: BD
          },
          to: {
            width: hD,
            height: nD,
            x: fD,
            y: BD
          },
          duration: ED,
          animationEasing: JD,
          isActive: VD
        }, (function(DD) {
          var sD = DD.width,
            LD = DD.height,
            gD = DD.x,
            AD = DD.y;
          return pD.createElement(KD.e, {
            canBegin: RD > 0,
            from: "0px ".concat(-1 === RD ? 1 : RD, "px"),
            to: "".concat(RD, "px 0px"),
            attributeName: "strokeDasharray",
            Jf: QD,
            duration: ED,
            isActive: XD,
            easing: JD
          }, pD.createElement("path", cD({}, (0, rD.e)(zD, !0), {
            className: PD,
            d: ID(gD, AD, sD, LD, MD),
            ref: wD
          })))
        })) : pD.createElement("path", cD({}, (0, rD.e)(zD, !0), {
          className: PD,
          d: ID(fD, BD, hD, nD, MD)
        }))
      }
  },
  6357: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => GD
    });
    var pD = wD(58),
      sD = wD(5121),
      KD = wD(5484),
      rD = wD(6270),
      LD = wD(5223);

    function cD(DD) {
      return cD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, cD(DD)
    }

    function gD() {
      return gD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, gD.apply(this, arguments)
    }

    function RD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function AD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? RD(Object(wD), !0).forEach((function(zD) {
          UD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : RD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function UD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != cD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != cD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == cD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }
    var fD = function(DD) {
        var zD = DD.cx,
          wD = DD.cy,
          pD = DD.radius,
          sD = DD.angle,
          KD = DD.sign,
          LD = DD.isExternal,
          cD = DD.cornerRadius,
          gD = DD.cornerIsExternal,
          RD = cD * (LD ? 1 : -1) + pD,
          AD = Math.asin(cD / RD) / rD.c,
          UD = gD ? sD : sD + KD * AD,
          fD = gD ? sD - KD * AD : sD;
        return {
          center: (0, rD.f)(zD, wD, RD, UD),
          circleTangency: (0, rD.f)(zD, wD, pD, UD),
          lineTangency: (0, rD.f)(zD, wD, RD * Math.cos(AD * rD.c), fD),
          pg: AD
        }
      },
      ID = function(DD) {
        var zD = DD.cx,
          wD = DD.cy,
          pD = DD.innerRadius,
          sD = DD.outerRadius,
          KD = DD.startAngle,
          cD = function(DD, zD) {
            return (0, LD.F)(zD - DD) * Math.min(Math.abs(zD - DD), 359.999)
          }(KD, DD.endAngle),
          gD = KD + cD,
          RD = (0, rD.f)(zD, wD, sD, KD),
          AD = (0, rD.f)(zD, wD, sD, gD),
          UD = "M ".concat(RD.x, ",").concat(RD.y, "\n    A ").concat(sD, ",").concat(sD, ",0,\n    ").concat(+(Math.abs(cD) > 180), ",").concat(+(KD > gD), ",\n    ").concat(AD.x, ",").concat(AD.y, "\n  ");
        if (pD > 0) {
          var fD = (0, rD.f)(zD, wD, pD, KD),
            ID = (0, rD.f)(zD, wD, pD, gD);
          UD += "L ".concat(ID.x, ",").concat(ID.y, "\n            A ").concat(pD, ",").concat(pD, ",0,\n            ").concat(+(Math.abs(cD) > 180), ",").concat(+(KD <= gD), ",\n            ").concat(fD.x, ",").concat(fD.y, " Z")
        } else UD += "L ".concat(zD, ",").concat(wD, " Z");
        return UD
      },
      BD = {
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
      GD = function(DD) {
        var zD = AD(AD({}, BD), DD),
          wD = zD.cx,
          rD = zD.cy,
          cD = zD.innerRadius,
          RD = zD.outerRadius,
          UD = zD.cornerRadius,
          GD = zD.forceCornerRadius,
          hD = zD.cornerIsExternal,
          nD = zD.startAngle,
          MD = zD.endAngle,
          OD = zD.className;
        if (RD < cD || nD === MD) return null;
        var JD, ED = (0, sD.b)("recharts-sector", OD),
          QD = RD - cD,
          XD = (0, LD.n)(UD, QD, 0, !0);
        return JD = XD > 0 && Math.abs(nD - MD) < 360 ? function(DD) {
          var zD = DD.cx,
            wD = DD.cy,
            pD = DD.innerRadius,
            sD = DD.outerRadius,
            KD = DD.cornerRadius,
            rD = DD.forceCornerRadius,
            cD = DD.cornerIsExternal,
            gD = DD.startAngle,
            RD = DD.endAngle,
            AD = (0, LD.F)(RD - gD),
            UD = fD({
              cx: zD,
              cy: wD,
              radius: sD,
              angle: gD,
              sign: AD,
              cornerRadius: KD,
              cornerIsExternal: cD
            }),
            BD = UD.circleTangency,
            GD = UD.lineTangency,
            hD = UD.pg,
            nD = fD({
              cx: zD,
              cy: wD,
              radius: sD,
              angle: RD,
              sign: -AD,
              cornerRadius: KD,
              cornerIsExternal: cD
            }),
            MD = nD.circleTangency,
            OD = nD.lineTangency,
            JD = nD.pg,
            ED = cD ? Math.abs(gD - RD) : Math.abs(gD - RD) - hD - JD;
          if (ED < 0) return rD ? "M ".concat(GD.x, ",").concat(GD.y, "\n        a").concat(KD, ",").concat(KD, ",0,0,1,").concat(2 * KD, ",0\n        a").concat(KD, ",").concat(KD, ",0,0,1,").concat(2 * -KD, ",0\n      ") : ID({
            cx: zD,
            cy: wD,
            innerRadius: pD,
            outerRadius: sD,
            startAngle: gD,
            endAngle: RD
          });
          var QD = "M ".concat(GD.x, ",").concat(GD.y, "\n    A").concat(KD, ",").concat(KD, ",0,0,").concat(+(AD < 0), ",").concat(BD.x, ",").concat(BD.y, "\n    A").concat(sD, ",").concat(sD, ",0,").concat(+(ED > 180), ",").concat(+(AD < 0), ",").concat(MD.x, ",").concat(MD.y, "\n    A").concat(KD, ",").concat(KD, ",0,0,").concat(+(AD < 0), ",").concat(OD.x, ",").concat(OD.y, "\n  ");
          if (pD > 0) {
            var XD = fD({
                cx: zD,
                cy: wD,
                radius: pD,
                angle: gD,
                sign: AD,
                isExternal: !0,
                cornerRadius: KD,
                cornerIsExternal: cD
              }),
              VD = XD.circleTangency,
              PD = XD.lineTangency,
              CD = XD.pg,
              xD = fD({
                cx: zD,
                cy: wD,
                radius: pD,
                angle: RD,
                sign: -AD,
                isExternal: !0,
                cornerRadius: KD,
                cornerIsExternal: cD
              }),
              TD = xD.circleTangency,
              bD = xD.lineTangency,
              jD = xD.pg,
              dD = cD ? Math.abs(gD - RD) : Math.abs(gD - RD) - CD - jD;
            if (dD < 0 && 0 === KD) return "".concat(QD, "L").concat(zD, ",").concat(wD, "Z");
            QD += "L".concat(bD.x, ",").concat(bD.y, "\n      A").concat(KD, ",").concat(KD, ",0,0,").concat(+(AD < 0), ",").concat(TD.x, ",").concat(TD.y, "\n      A").concat(pD, ",").concat(pD, ",0,").concat(+(dD > 180), ",").concat(+(AD > 0), ",").concat(VD.x, ",").concat(VD.y, "\n      A").concat(KD, ",").concat(KD, ",0,0,").concat(+(AD < 0), ",").concat(PD.x, ",").concat(PD.y, "Z")
          } else QD += "L".concat(zD, ",").concat(wD, "Z");
          return QD
        }({
          cx: wD,
          cy: rD,
          innerRadius: cD,
          outerRadius: RD,
          cornerRadius: Math.min(XD, QD / 2),
          forceCornerRadius: GD,
          cornerIsExternal: hD,
          startAngle: nD,
          endAngle: MD
        }) : ID({
          cx: wD,
          cy: rD,
          innerRadius: cD,
          outerRadius: RD,
          startAngle: nD,
          endAngle: MD
        }), pD.createElement("path", gD({}, (0, KD.e)(zD, !0), {
          className: ED,
          d: JD,
          role: "img"
        }))
      }
  },
  6083: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => mD
    });
    var pD = wD(58),
      sD = wD(6089),
      KD = wD.n(sD);
    Math.abs, Math.atan2;
    const rD = Math.cos,
      LD = (Math.max, Math.min, Math.sin),
      cD = Math.sqrt,
      gD = Math.PI,
      RD = 2 * gD;
    const AD = {
        draw(DD, zD) {
          const wD = cD(zD / gD);
          DD.moveTo(wD, 0), DD.arc(0, 0, wD, 0, RD)
        }
      },
      UD = {
        draw(DD, zD) {
          const wD = cD(zD / 5) / 2;
          DD.moveTo(-3 * wD, -wD), DD.lineTo(-wD, -wD), DD.lineTo(-wD, -3 * wD), DD.lineTo(wD, -3 * wD), DD.lineTo(wD, -wD), DD.lineTo(3 * wD, -wD), DD.lineTo(3 * wD, wD), DD.lineTo(wD, wD), DD.lineTo(wD, 3 * wD), DD.lineTo(-wD, 3 * wD), DD.lineTo(-wD, wD), DD.lineTo(-3 * wD, wD), DD.closePath()
        }
      },
      fD = cD(1 / 3),
      ID = 2 * fD,
      BD = {
        draw(DD, zD) {
          const wD = cD(zD / ID),
            pD = wD * fD;
          DD.moveTo(0, -wD), DD.lineTo(pD, 0), DD.lineTo(0, wD), DD.lineTo(-pD, 0), DD.closePath()
        }
      },
      GD = {
        draw(DD, zD) {
          const wD = cD(zD),
            pD = -wD / 2;
          DD.rect(pD, pD, wD, wD)
        }
      },
      hD = LD(gD / 10) / LD(7 * gD / 10),
      nD = LD(RD / 10) * hD,
      MD = -rD(RD / 10) * hD,
      OD = {
        draw(DD, zD) {
          const wD = cD(.8908130915292852 * zD),
            pD = nD * wD,
            sD = MD * wD;
          DD.moveTo(0, -wD), DD.lineTo(pD, sD);
          for (let KD = 1; KD < 5; ++KD) {
            const zD = RD * KD / 5,
              cD = rD(zD),
              gD = LD(zD);
            DD.lineTo(gD * wD, -cD * wD), DD.lineTo(cD * pD - gD * sD, gD * pD + cD * sD)
          }
          DD.closePath()
        }
      },
      JD = cD(3),
      ED = {
        draw(DD, zD) {
          const wD = -cD(zD / (3 * JD));
          DD.moveTo(0, 2 * wD), DD.lineTo(-JD * wD, -wD), DD.lineTo(JD * wD, -wD), DD.closePath()
        }
      },
      QD = -.5,
      XD = cD(3) / 2,
      VD = 1 / cD(12),
      PD = 3 * (VD / 2 + 1),
      CD = {
        draw(DD, zD) {
          const wD = cD(zD / PD),
            pD = wD / 2,
            sD = wD * VD,
            KD = pD,
            rD = wD * VD + wD,
            LD = -KD,
            gD = rD;
          DD.moveTo(pD, sD), DD.lineTo(KD, rD), DD.lineTo(LD, gD), DD.lineTo(QD * pD - XD * sD, XD * pD + QD * sD), DD.lineTo(QD * KD - XD * rD, XD * KD + QD * rD), DD.lineTo(QD * LD - XD * gD, XD * LD + QD * gD), DD.lineTo(QD * pD + XD * sD, QD * sD - XD * pD), DD.lineTo(QD * KD + XD * rD, QD * rD - XD * KD), DD.lineTo(QD * LD + XD * gD, QD * gD - XD * LD), DD.closePath()
        }
      };
    var xD = wD(6131),
      TD = wD(6140);
    cD(3), cD(3);
    var bD = wD(5121),
      jD = wD(5484);

    function dD(DD) {
      return dD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, dD(DD)
    }
    var SD = ["type", "size", "sizeType"];

    function iD() {
      return iD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, iD.apply(this, arguments)
    }

    function lD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function WD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? lD(Object(wD), !0).forEach((function(zD) {
          ND(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : lD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function ND(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != dD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != dD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == dD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function ZD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }
    var yD = {
        symbolCircle: AD,
        symbolCross: UD,
        symbolDiamond: BD,
        symbolSquare: GD,
        symbolStar: OD,
        symbolTriangle: ED,
        symbolWye: CD
      },
      kD = Math.PI / 180,
      mD = function(DD) {
        var zD = DD.type,
          wD = void 0 === zD ? "circle" : zD,
          sD = DD.size,
          rD = void 0 === sD ? 64 : sD,
          LD = DD.sizeType,
          cD = void 0 === LD ? "area" : LD,
          gD = WD(WD({}, ZD(DD, SD)), {}, {
            type: wD,
            size: rD,
            sizeType: cD
          }),
          RD = gD.className,
          UD = gD.cx,
          fD = gD.cy,
          ID = (0, jD.e)(gD, !0);
        return UD === +UD && fD === +fD && rD === +rD ? pD.createElement("path", iD({}, ID, {
          className: (0, bD.b)("recharts-symbols", RD),
          transform: "translate(".concat(UD, ", ").concat(fD, ")"),
          d: function() {
            var DD = function(DD) {
                var zD = "symbol".concat(KD()(DD));
                return yD[zD] || AD
              }(wD),
              zD = function(DD, zD) {
                let wD = null,
                  pD = (0, TD.e)(sD);

                function sD() {
                  let sD;
                  if (wD || (wD = sD = pD()), DD.apply(this, arguments).draw(wD, +zD.apply(this, arguments)), sD) return wD = null, sD + "" || null
                }
                return DD = "function" === typeof DD ? DD : (0, xD.c)(DD || AD), zD = "function" === typeof zD ? zD : (0, xD.c)(void 0 === zD ? 64 : +zD), sD.type = function(zD) {
                  return arguments.length ? (DD = "function" === typeof zD ? zD : (0, xD.c)(zD), sD) : DD
                }, sD.size = function(DD) {
                  return arguments.length ? (zD = "function" === typeof DD ? DD : (0, xD.c)(+DD), sD) : zD
                }, sD.context = function(DD) {
                  return arguments.length ? (wD = null == DD ? null : DD, sD) : wD
                }, sD
              }().type(DD).size(function(DD, zD, wD) {
                if ("area" === zD) return DD;
                switch (wD) {
                  case "cross":
                    return 5 * DD * DD / 9;
                  case "diamond":
                    return .5 * DD * DD / Math.sqrt(3);
                  case "square":
                    return DD * DD;
                  case "star":
                    var pD = 18 * kD;
                    return 1.25 * DD * DD * (Math.tan(pD) - Math.tan(2 * pD) * Math.pow(Math.tan(pD), 2));
                  case "triangle":
                    return Math.sqrt(3) * DD * DD / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * DD * DD / 8;
                  default:
                    return Math.PI * DD * DD / 4
                }
              }(rD, cD, wD));
            return zD()
          }()
        })) : null
      };
    mD.registerSymbol = function(DD, zD) {
      yD["symbol".concat(KD()(DD))] = zD
    }
  },
  6337: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => ND,
      d: () => aD,
      f: () => ZD,
      g: () => yD,
      j: () => kD
    });
    var pD = wD(58),
      sD = wD(5333),
      KD = wD.n(sD),
      rD = wD(6344),
      LD = wD.n(rD),
      cD = wD(6353),
      gD = wD.n(cD),
      RD = wD(6239),
      AD = wD.n(RD),
      UD = wD(6154),
      fD = wD(5121),
      ID = wD(6158),
      BD = wD(5484);

    function GD(DD) {
      return GD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, GD(DD)
    }

    function hD() {
      return hD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD) Object.prototype.hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, hD.apply(this, arguments)
    }

    function nD(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        var wD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != wD) {
          var pD, sD, KD, rD, LD = [],
            cD = !0,
            gD = !1;
          try {
            if (KD = (wD = wD.call(DD)).next, 0 === zD) {
              if (Object(wD) !== wD) return;
              cD = !1
            } else
              for (; !(cD = (pD = KD.call(wD)).done) && (LD.push(pD.value), LD.length !== zD); cD = !0);
          } catch (DD) {
            gD = !0, sD = DD
          } finally {
            try {
              if (!cD && null != wD.return && (rD = wD.return(), Object(rD) !== rD)) return
            } finally {
              if (gD) throw sD
            }
          }
          return LD
        }
      }(DD, zD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return MD(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return MD(DD, zD)
      }(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function MD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function OD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function JD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? OD(Object(wD), !0).forEach((function(zD) {
          ED(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : OD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function ED(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != GD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != GD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == GD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }
    var QD = function(DD, zD, wD, pD, sD) {
        var KD, rD = wD - pD;
        return KD = "M ".concat(DD, ",").concat(zD), KD += "L ".concat(DD + wD, ",").concat(zD), KD += "L ".concat(DD + wD - rD / 2, ",").concat(zD + sD), KD += "L ".concat(DD + wD - rD / 2 - pD, ",").concat(zD + sD), KD += "L ".concat(DD, ",").concat(zD, " Z")
      },
      XD = {
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
      VD = function(DD) {
        var zD = JD(JD({}, XD), DD),
          wD = (0, pD.useRef)(),
          sD = nD((0, pD.useState)(-1), 2),
          KD = sD[0],
          rD = sD[1];
        (0, pD.useEffect)((function() {
          if (wD.current && wD.current.getTotalLength) try {
            var DD = wD.current.getTotalLength();
            DD && rD(DD)
          } catch (zD) {}
        }), []);
        var LD = zD.x,
          cD = zD.y,
          gD = zD.upperWidth,
          RD = zD.lowerWidth,
          AD = zD.height,
          UD = zD.className,
          GD = zD.animationEasing,
          MD = zD.animationDuration,
          OD = zD.animationBegin,
          ED = zD.isUpdateAnimationActive;
        if (LD !== +LD || cD !== +cD || gD !== +gD || RD !== +RD || AD !== +AD || 0 === gD && 0 === RD || 0 === AD) return null;
        var VD = (0, fD.b)("recharts-trapezoid", UD);
        return ED ? pD.createElement(ID.e, {
          canBegin: KD > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: AD,
            x: LD,
            y: cD
          },
          to: {
            upperWidth: gD,
            lowerWidth: RD,
            height: AD,
            x: LD,
            y: cD
          },
          duration: MD,
          animationEasing: GD,
          isActive: ED
        }, (function(DD) {
          var sD = DD.upperWidth,
            rD = DD.lowerWidth,
            LD = DD.height,
            cD = DD.x,
            gD = DD.y;
          return pD.createElement(ID.e, {
            canBegin: KD > 0,
            from: "0px ".concat(-1 === KD ? 1 : KD, "px"),
            to: "".concat(KD, "px 0px"),
            attributeName: "strokeDasharray",
            Jf: OD,
            duration: MD,
            easing: GD
          }, pD.createElement("path", hD({}, (0, BD.e)(zD, !0), {
            className: VD,
            d: QD(cD, gD, sD, rD, LD),
            ref: wD
          })))
        })) : pD.createElement("g", null, pD.createElement("path", hD({}, (0, BD.e)(zD, !0), {
          className: VD,
          d: QD(LD, cD, gD, RD, AD)
        })))
      },
      PD = wD(6357),
      CD = wD(6004),
      xD = wD(6083),
      TD = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function bD(DD) {
      return bD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, bD(DD)
    }

    function jD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function dD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function SD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? dD(Object(wD), !0).forEach((function(zD) {
          iD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : dD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function iD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != bD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != bD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == bD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function lD(DD, zD) {
      return SD(SD({}, zD), DD)
    }

    function WD(DD) {
      var zD = DD.shapeType,
        wD = DD.elementProps;
      switch (zD) {
        case "rectangle":
          return pD.createElement(UD.c, wD);
        case "trapezoid":
          return pD.createElement(VD, wD);
        case "sector":
          return pD.createElement(PD.c, wD);
        case "symbols":
          if (function(DD) {
              return "symbols" === DD
            }(zD)) return pD.createElement(xD.d, wD);
          break;
        default:
          return null
      }
    }

    function ND(DD) {
      var zD, wD = DD.option,
        sD = DD.shapeType,
        rD = DD.propTransformer,
        cD = void 0 === rD ? lD : rD,
        RD = DD.activeClassName,
        AD = void 0 === RD ? "recharts-active-shape" : RD,
        UD = DD.isActive,
        fD = jD(DD, TD);
      if ((0, pD.isValidElement)(wD)) zD = (0, pD.cloneElement)(wD, SD(SD({}, fD), function(DD) {
        return (0, pD.isValidElement)(DD) ? DD.props : DD
      }(wD)));
      else if (KD()(wD)) zD = wD(fD);
      else if (LD()(wD) && !gD()(wD)) {
        var ID = cD(wD, fD);
        zD = pD.createElement(WD, {
          shapeType: sD,
          elementProps: ID
        })
      } else {
        var BD = fD;
        zD = pD.createElement(WD, {
          shapeType: sD,
          elementProps: BD
        })
      }
      return UD ? pD.createElement(CD.c, {
        className: AD
      }, zD) : zD
    }

    function ZD(DD, zD) {
      return null != zD && "trapezoids" in DD.props
    }

    function yD(DD, zD) {
      return null != zD && "sectors" in DD.props
    }

    function kD(DD, zD) {
      return null != zD && "points" in DD.props
    }

    function mD(DD, zD) {
      var wD, pD, sD = DD.x === (null === zD || void 0 === zD || null === (wD = zD.labelViewBox) || void 0 === wD ? void 0 : wD.x) || DD.x === zD.x,
        KD = DD.y === (null === zD || void 0 === zD || null === (pD = zD.labelViewBox) || void 0 === pD ? void 0 : pD.y) || DD.y === zD.y;
      return sD && KD
    }

    function eD(DD, zD) {
      var wD = DD.endAngle === zD.endAngle,
        pD = DD.startAngle === zD.startAngle;
      return wD && pD
    }

    function oD(DD, zD) {
      var wD = DD.x === zD.x,
        pD = DD.y === zD.y,
        sD = DD.z === zD.z;
      return wD && pD && sD
    }

    function aD(DD) {
      var zD = DD.activeTooltipItem,
        wD = DD.graphicalItem,
        pD = DD.itemData,
        sD = function(DD, zD) {
          var wD;
          return ZD(DD, zD) ? wD = "trapezoids" : yD(DD, zD) ? wD = "sectors" : kD(DD, zD) && (wD = "points"), wD
        }(wD, zD),
        KD = function(DD, zD) {
          var wD, pD;
          return ZD(DD, zD) ? null === (wD = zD.tooltipPayload) || void 0 === wD || null === (wD = wD[0]) || void 0 === wD || null === (wD = wD.payload) || void 0 === wD ? void 0 : wD.payload : yD(DD, zD) ? null === (pD = zD.tooltipPayload) || void 0 === pD || null === (pD = pD[0]) || void 0 === pD || null === (pD = pD.payload) || void 0 === pD ? void 0 : pD.payload : kD(DD, zD) ? zD.payload : {}
        }(wD, zD),
        rD = pD.filter((function(DD, pD) {
          var rD = AD()(KD, DD),
            LD = wD.props[sD].filter((function(DD) {
              var pD = function(DD, zD) {
                var wD;
                return ZD(DD, zD) ? wD = mD : yD(DD, zD) ? wD = eD : kD(DD, zD) && (wD = oD), wD
              }(wD, zD);
              return pD(DD, zD)
            })),
            cD = wD.props[sD].indexOf(LD[LD.length - 1]);
          return rD && pD === cD
        }));
      return pD.indexOf(rD[rD.length - 1])
    }
  },
  6286: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => JD,
      e: () => hD,
      h: () => ED,
      k: () => MD,
      l: () => nD
    });
    var pD = wD(6288),
      sD = wD.n(pD),
      KD = wD(6302),
      rD = wD.n(KD),
      LD = wD(6177),
      cD = wD(5484),
      gD = wD(5223),
      RD = wD(6318);

    function AD(DD) {
      return AD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, AD(DD)
    }

    function UD(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, GD(pD.key), pD)
      }
    }

    function fD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function ID(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? fD(Object(wD), !0).forEach((function(zD) {
          BD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : fD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function BD(DD, zD, wD) {
      return (zD = GD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function GD(DD) {
      var zD = function(DD, zD) {
        if ("object" != AD(DD) || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != AD(pD)) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == AD(zD) ? zD : zD + ""
    }
    var hD = function(DD, zD, wD, pD, sD) {
        var KD = DD.width,
          rD = DD.height,
          AD = DD.layout,
          UD = DD.children,
          fD = Object.keys(zD),
          GD = {
            left: wD.left,
            leftMirror: wD.left,
            right: KD - wD.right,
            rightMirror: KD - wD.right,
            top: wD.top,
            topMirror: wD.top,
            bottom: rD - wD.bottom,
            bottomMirror: rD - wD.bottom
          },
          hD = !!(0, cD.h)(UD, RD.e);
        return fD.reduce((function(KD, rD) {
          var cD, RD, UD, fD, nD, MD = zD[rD],
            OD = MD.orientation,
            JD = MD.domain,
            ED = MD.padding,
            QD = void 0 === ED ? {} : ED,
            XD = MD.mirror,
            VD = MD.reversed,
            PD = "".concat(OD).concat(XD ? "Mirror" : "");
          if ("number" === MD.type && ("gap" === MD.padding || "no-gap" === MD.padding)) {
            var CD = JD[1] - JD[0],
              xD = 1 / 0,
              TD = MD.categoricalDomain.sort(gD.c);
            if (TD.forEach((function(DD, zD) {
                zD > 0 && (xD = Math.min((DD || 0) - (TD[zD - 1] || 0), xD))
              })), Number.isFinite(xD)) {
              var bD = xD / CD,
                jD = "vertical" === MD.layout ? wD.height : wD.width;
              if ("gap" === MD.padding && (cD = bD * jD / 2), "no-gap" === MD.padding) {
                var dD = (0, gD.n)(DD.barCategoryGap, bD * jD),
                  SD = bD * jD / 2;
                cD = SD - dD - (SD - dD) / jD * dD
              }
            }
          }
          RD = "xAxis" === pD ? [wD.left + (QD.left || 0) + (cD || 0), wD.left + wD.width - (QD.right || 0) - (cD || 0)] : "yAxis" === pD ? "horizontal" === AD ? [wD.top + wD.height - (QD.bottom || 0), wD.top + (QD.top || 0)] : [wD.top + (QD.top || 0) + (cD || 0), wD.top + wD.height - (QD.bottom || 0) - (cD || 0)] : MD.range, VD && (RD = [RD[1], RD[0]]);
          var iD = (0, LD.fb)(MD, sD, hD),
            lD = iD.scale,
            WD = iD.realScaleType;
          lD.domain(JD).range(RD), (0, LD.i)(lD);
          var ND = (0, LD.V)(lD, ID(ID({}, MD), {}, {
            realScaleType: WD
          }));
          "xAxis" === pD ? (nD = "top" === OD && !XD || "bottom" === OD && XD, UD = wD.left, fD = GD[PD] - nD * MD.height) : "yAxis" === pD && (nD = "left" === OD && !XD || "right" === OD && XD, UD = GD[PD] - nD * MD.width, fD = wD.top);
          var ZD = ID(ID(ID({}, MD), ND), {}, {
            realScaleType: WD,
            x: UD,
            y: fD,
            scale: lD,
            width: "xAxis" === pD ? wD.width : MD.width,
            height: "yAxis" === pD ? wD.height : MD.height
          });
          return ZD.bandSize = (0, LD.m)(ZD, ND), MD.hide || "xAxis" !== pD ? MD.hide || (GD[PD] += (nD ? -1 : 1) * ZD.width) : GD[PD] += (nD ? -1 : 1) * ZD.height, ID(ID({}, KD), {}, BD({}, rD, ZD))
        }), {})
      },
      nD = function(DD, zD) {
        var wD = DD.x,
          pD = DD.y,
          sD = zD.x,
          KD = zD.y;
        return {
          x: Math.min(wD, sD),
          y: Math.min(pD, KD),
          width: Math.abs(sD - wD),
          height: Math.abs(KD - pD)
        }
      },
      MD = function(DD) {
        var zD = DD.x1,
          wD = DD.y1,
          pD = DD.x2,
          sD = DD.y2;
        return nD({
          x: zD,
          y: wD
        }, {
          x: pD,
          y: sD
        })
      },
      OD = function() {
        function DD(zD) {
          ! function(DD, zD) {
            if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
          }(this, DD), this.scale = zD
        }
        return zD = DD, wD = [{
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
          value: function(DD) {
            var zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              wD = zD.bandAware,
              pD = zD.position;
            if (void 0 !== DD) {
              if (pD) switch (pD) {
                case "start":
                default:
                  return this.scale(DD);
                case "middle":
                  var sD = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(DD) + sD;
                case "end":
                  var KD = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(DD) + KD
              }
              if (wD) {
                var rD = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(DD) + rD
              }
              return this.scale(DD)
            }
          }
        }, {
          key: "isInRange",
          value: function(DD) {
            var zD = this.range(),
              wD = zD[0],
              pD = zD[zD.length - 1];
            return wD <= pD ? DD >= wD && DD <= pD : DD >= pD && DD <= wD
          }
        }], pD = [{
          key: "create",
          value: function(zD) {
            return new DD(zD)
          }
        }], wD && UD(zD.prototype, wD), pD && UD(zD, pD), Object.defineProperty(zD, "prototype", {
          writable: !1
        }), zD;
        var zD, wD, pD
      }();
    BD(OD, "EPS", 1e-4);
    var JD = function(DD) {
      var zD = Object.keys(DD).reduce((function(zD, wD) {
        return ID(ID({}, zD), {}, BD({}, wD, OD.create(DD[wD])))
      }), {});
      return ID(ID({}, zD), {}, {
        apply: function(DD) {
          var wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            pD = wD.bandAware,
            KD = wD.position;
          return sD()(DD, (function(DD, wD) {
            return zD[wD].apply(DD, {
              bandAware: pD,
              position: KD
            })
          }))
        },
        isInRange: function(DD) {
          return rD()(DD, (function(DD, wD) {
            return zD[wD].isInRange(DD)
          }))
        }
      })
    };
    var ED = function(DD) {
      var zD = DD.width,
        wD = DD.height,
        pD = function(DD) {
          return (DD % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        sD = pD * Math.PI / 180,
        KD = Math.atan(wD / zD),
        rD = sD > KD && sD < Math.PI - KD ? wD / Math.sin(sD) : zD / Math.cos(sD);
      return Math.abs(rD)
    }
  },
  6177: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => lr,
      h: () => jr,
      i: () => vr,
      k: () => or,
      l: () => tr,
      m: () => gL,
      p: () => ir,
      t: () => Sr,
      w: () => pL,
      x: () => wL,
      A: () => zL,
      E: () => kr,
      H: () => br,
      K: () => Zr,
      M: () => KL,
      N: () => dr,
      P: () => qr,
      S: () => sL,
      T: () => mr,
      V: () => DL,
      X: () => AL,
      Z: () => Tr,
      $: () => yr,
      bb: () => RL,
      eb: () => Nr,
      fb: () => ar,
      jb: () => cL,
      lb: () => Fr
    });
    var pD = {};
    wD.r(pD), wD.d(pD, {
      scaleBand: () => sD.e,
      scaleDiverging: () => UK,
      scaleDivergingLog: () => fK,
      scaleDivergingPow: () => BK,
      scaleDivergingSqrt: () => GK,
      scaleDivergingSymlog: () => IK,
      scaleIdentity: () => tz,
      scaleImplicit: () => Rw.d,
      scaleLinear: () => vz,
      scaleLog: () => sw,
      scaleOrdinal: () => Rw.b,
      scalePoint: () => sD.i,
      scalePow: () => Bw,
      scaleQuantile: () => Cw,
      scaleQuantize: () => xw,
      scaleRadial: () => nw,
      scaleSequential: () => KK,
      scaleSequentialLog: () => rK,
      scaleSequentialPow: () => cK,
      scaleSequentialQuantile: () => RK,
      scaleSequentialSqrt: () => gK,
      scaleSequentialSymlog: () => LK,
      scaleSqrt: () => Gw,
      scaleSymlog: () => gw,
      scaleThreshold: () => Tw,
      scaleTime: () => zK,
      scaleUtc: () => wK,
      tickFormat: () => az
    });
    var sD = wD(6184);
    const KD = Math.sqrt(50),
      rD = Math.sqrt(10),
      LD = Math.sqrt(2);

    function cD(DD, zD, wD) {
      const pD = (zD - DD) / Math.max(0, wD),
        sD = Math.floor(Math.log10(pD)),
        gD = pD / Math.pow(10, sD),
        RD = gD >= KD ? 10 : gD >= rD ? 5 : gD >= LD ? 2 : 1;
      let AD, UD, fD;
      return sD < 0 ? (fD = Math.pow(10, -sD) / RD, AD = Math.round(DD * fD), UD = Math.round(zD * fD), AD / fD < DD && ++AD, UD / fD > zD && --UD, fD = -fD) : (fD = Math.pow(10, sD) * RD, AD = Math.round(DD / fD), UD = Math.round(zD / fD), AD * fD < DD && ++AD, UD * fD > zD && --UD), UD < AD && .5 <= wD && wD < 2 ? cD(DD, zD, 2 * wD) : [AD, UD, fD]
    }

    function gD(DD, zD, wD) {
      if (!((wD = +wD) > 0)) return [];
      if ((DD = +DD) === (zD = +zD)) return [DD];
      const pD = zD < DD,
        [sD, KD, rD] = pD ? cD(zD, DD, wD) : cD(DD, zD, wD);
      if (!(KD >= sD)) return [];
      const LD = KD - sD + 1,
        gD = new Array(LD);
      if (pD)
        if (rD < 0)
          for (let cD = 0; cD < LD; ++cD) gD[cD] = (KD - cD) / -rD;
        else
          for (let cD = 0; cD < LD; ++cD) gD[cD] = (KD - cD) * rD;
      else if (rD < 0)
        for (let cD = 0; cD < LD; ++cD) gD[cD] = (sD + cD) / -rD;
      else
        for (let cD = 0; cD < LD; ++cD) gD[cD] = (sD + cD) * rD;
      return gD
    }

    function RD(DD, zD, wD) {
      return cD(DD = +DD, zD = +zD, wD = +wD)[2]
    }

    function AD(DD, zD, wD) {
      wD = +wD;
      const pD = (zD = +zD) < (DD = +DD),
        sD = pD ? RD(zD, DD, wD) : RD(DD, zD, wD);
      return (pD ? -1 : 1) * (sD < 0 ? 1 / -sD : sD)
    }

    function UD(DD, zD) {
      return null == DD || null == zD ? NaN : DD < zD ? -1 : DD > zD ? 1 : DD >= zD ? 0 : NaN
    }

    function fD(DD, zD) {
      return null == DD || null == zD ? NaN : zD < DD ? -1 : zD > DD ? 1 : zD >= DD ? 0 : NaN
    }

    function ID(DD) {
      let zD, wD, pD;

      function sD(DD, pD) {
        let sD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          KD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.length;
        if (sD < KD) {
          if (0 !== zD(pD, pD)) return KD;
          do {
            const zD = sD + KD >>> 1;
            wD(DD[zD], pD) < 0 ? sD = zD + 1 : KD = zD
          } while (sD < KD)
        }
        return sD
      }
      return 2 !== DD.length ? (zD = UD, wD = (zD, wD) => UD(DD(zD), wD), pD = (zD, wD) => DD(zD) - wD) : (zD = DD === UD || DD === fD ? DD : BD, wD = DD, pD = DD), {
        left: sD,
        center: function(DD, zD) {
          let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const KD = sD(DD, zD, wD, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.length) - 1);
          return KD > wD && pD(DD[KD - 1], zD) > -pD(DD[KD], zD) ? KD - 1 : KD
        },
        right: function(DD, pD) {
          let sD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            KD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.length;
          if (sD < KD) {
            if (0 !== zD(pD, pD)) return KD;
            do {
              const zD = sD + KD >>> 1;
              wD(DD[zD], pD) <= 0 ? sD = zD + 1 : KD = zD
            } while (sD < KD)
          }
          return sD
        }
      }
    }

    function BD() {
      return 0
    }

    function GD(DD) {
      return null === DD ? NaN : +DD
    }
    const hD = ID(UD),
      nD = hD.right,
      MD = (hD.left, ID(GD).center, nD);

    function OD(DD, zD, wD) {
      DD.prototype = zD.prototype = wD, wD.constructor = DD
    }

    function JD(DD, zD) {
      var wD = Object.create(DD.prototype);
      for (var pD in zD) wD[pD] = zD[pD];
      return wD
    }

    function ED() {}
    var QD = .7,
      XD = 1 / QD,
      VD = "\\s*([+-]?\\d+)\\s*",
      PD = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      CD = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      xD = /^#([0-9a-f]{3,8})$/,
      TD = new RegExp(`^rgb\\(${VD},${VD},${VD}\\)$`),
      bD = new RegExp(`^rgb\\(${CD},${CD},${CD}\\)$`),
      jD = new RegExp(`^rgba\\(${VD},${VD},${VD},${PD}\\)$`),
      dD = new RegExp(`^rgba\\(${CD},${CD},${CD},${PD}\\)$`),
      SD = new RegExp(`^hsl\\(${PD},${CD},${CD}\\)$`),
      iD = new RegExp(`^hsla\\(${PD},${CD},${CD},${PD}\\)$`),
      lD = {
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

    function WD() {
      return this.rgb().formatHex()
    }

    function ND() {
      return this.rgb().formatRgb()
    }

    function ZD(DD) {
      var zD, wD;
      return DD = (DD + "").trim().toLowerCase(), (zD = xD.exec(DD)) ? (wD = zD[1].length, zD = parseInt(zD[1], 16), 6 === wD ? yD(zD) : 3 === wD ? new eD(zD >> 8 & 15 | zD >> 4 & 240, zD >> 4 & 15 | 240 & zD, (15 & zD) << 4 | 15 & zD, 1) : 8 === wD ? kD(zD >> 24 & 255, zD >> 16 & 255, zD >> 8 & 255, (255 & zD) / 255) : 4 === wD ? kD(zD >> 12 & 15 | zD >> 8 & 240, zD >> 8 & 15 | zD >> 4 & 240, zD >> 4 & 15 | 240 & zD, ((15 & zD) << 4 | 15 & zD) / 255) : null) : (zD = TD.exec(DD)) ? new eD(zD[1], zD[2], zD[3], 1) : (zD = bD.exec(DD)) ? new eD(255 * zD[1] / 100, 255 * zD[2] / 100, 255 * zD[3] / 100, 1) : (zD = jD.exec(DD)) ? kD(zD[1], zD[2], zD[3], zD[4]) : (zD = dD.exec(DD)) ? kD(255 * zD[1] / 100, 255 * zD[2] / 100, 255 * zD[3] / 100, zD[4]) : (zD = SD.exec(DD)) ? FD(zD[1], zD[2] / 100, zD[3] / 100, 1) : (zD = iD.exec(DD)) ? FD(zD[1], zD[2] / 100, zD[3] / 100, zD[4]) : lD.hasOwnProperty(DD) ? yD(lD[DD]) : "transparent" === DD ? new eD(NaN, NaN, NaN, 0) : null
    }

    function yD(DD) {
      return new eD(DD >> 16 & 255, DD >> 8 & 255, 255 & DD, 1)
    }

    function kD(DD, zD, wD, pD) {
      return pD <= 0 && (DD = zD = wD = NaN), new eD(DD, zD, wD, pD)
    }

    function mD(DD, zD, wD, pD) {
      return 1 === arguments.length ? ((sD = DD) instanceof ED || (sD = ZD(sD)), sD ? new eD((sD = sD.rgb()).r, sD.g, sD.b, sD.opacity) : new eD) : new eD(DD, zD, wD, null == pD ? 1 : pD);
      var sD
    }

    function eD(DD, zD, wD, pD) {
      this.r = +DD, this.g = +zD, this.b = +wD, this.opacity = +pD
    }

    function oD() {
      return `#${tD(this.r)}${tD(this.g)}${tD(this.b)}`
    }

    function aD() {
      const DD = uD(this.opacity);
      return `${1===DD?"rgb(":"rgba("}${vD(this.r)}, ${vD(this.g)}, ${vD(this.b)}${1===DD?")":`, ${DD})`}`
    }

    function uD(DD) {
      return isNaN(DD) ? 1 : Math.max(0, Math.min(1, DD))
    }

    function vD(DD) {
      return Math.max(0, Math.min(255, Math.round(DD) || 0))
    }

    function tD(DD) {
      return ((DD = vD(DD)) < 16 ? "0" : "") + DD.toString(16)
    }

    function FD(DD, zD, wD, pD) {
      return pD <= 0 ? DD = zD = wD = NaN : wD <= 0 || wD >= 1 ? DD = zD = NaN : zD <= 0 && (DD = NaN), new HD(DD, zD, wD, pD)
    }

    function YD(DD) {
      if (DD instanceof HD) return new HD(DD.h, DD.s, DD.l, DD.opacity);
      if (DD instanceof ED || (DD = ZD(DD)), !DD) return new HD;
      if (DD instanceof HD) return DD;
      var zD = (DD = DD.rgb()).r / 255,
        wD = DD.g / 255,
        pD = DD.b / 255,
        sD = Math.min(zD, wD, pD),
        KD = Math.max(zD, wD, pD),
        rD = NaN,
        LD = KD - sD,
        cD = (KD + sD) / 2;
      return LD ? (rD = zD === KD ? (wD - pD) / LD + 6 * (wD < pD) : wD === KD ? (pD - zD) / LD + 2 : (zD - wD) / LD + 4, LD /= cD < .5 ? KD + sD : 2 - KD - sD, rD *= 60) : LD = cD > 0 && cD < 1 ? 0 : rD, new HD(rD, LD, cD, DD.opacity)
    }

    function HD(DD, zD, wD, pD) {
      this.h = +DD, this.s = +zD, this.l = +wD, this.opacity = +pD
    }

    function qD(DD) {
      return (DD = (DD || 0) % 360) < 0 ? DD + 360 : DD
    }

    function Dz(DD) {
      return Math.max(0, Math.min(1, DD || 0))
    }

    function zz(DD, zD, wD) {
      return 255 * (DD < 60 ? zD + (wD - zD) * DD / 60 : DD < 180 ? wD : DD < 240 ? zD + (wD - zD) * (240 - DD) / 60 : zD)
    }

    function wz(DD, zD, wD, pD, sD) {
      var KD = DD * DD,
        rD = KD * DD;
      return ((1 - 3 * DD + 3 * KD - rD) * zD + (4 - 6 * KD + 3 * rD) * wD + (1 + 3 * DD + 3 * KD - 3 * rD) * pD + rD * sD) / 6
    }
    OD(ED, ZD, {
      copy(DD) {
        return Object.assign(new this.constructor, this, DD)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: WD,
      formatHex: WD,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return YD(this).formatHsl()
      },
      formatRgb: ND,
      toString: ND
    }), OD(eD, mD, JD(ED, {
      brighter(DD) {
        return DD = null == DD ? XD : Math.pow(XD, DD), new eD(this.r * DD, this.g * DD, this.b * DD, this.opacity)
      },
      darker(DD) {
        return DD = null == DD ? QD : Math.pow(QD, DD), new eD(this.r * DD, this.g * DD, this.b * DD, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new eD(vD(this.r), vD(this.g), vD(this.b), uD(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: oD,
      formatHex: oD,
      formatHex8: function() {
        return `#${tD(this.r)}${tD(this.g)}${tD(this.b)}${tD(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: aD,
      toString: aD
    })), OD(HD, (function(DD, zD, wD, pD) {
      return 1 === arguments.length ? YD(DD) : new HD(DD, zD, wD, null == pD ? 1 : pD)
    }), JD(ED, {
      brighter(DD) {
        return DD = null == DD ? XD : Math.pow(XD, DD), new HD(this.h, this.s, this.l * DD, this.opacity)
      },
      darker(DD) {
        return DD = null == DD ? QD : Math.pow(QD, DD), new HD(this.h, this.s, this.l * DD, this.opacity)
      },
      rgb() {
        var DD = this.h % 360 + 360 * (this.h < 0),
          zD = isNaN(DD) || isNaN(this.s) ? 0 : this.s,
          wD = this.l,
          pD = wD + (wD < .5 ? wD : 1 - wD) * zD,
          sD = 2 * wD - pD;
        return new eD(zz(DD >= 240 ? DD - 240 : DD + 120, sD, pD), zz(DD, sD, pD), zz(DD < 120 ? DD + 240 : DD - 120, sD, pD), this.opacity)
      },
      clamp() {
        return new HD(qD(this.h), Dz(this.s), Dz(this.l), uD(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const DD = uD(this.opacity);
        return `${1===DD?"hsl(":"hsla("}${qD(this.h)}, ${100*Dz(this.s)}%, ${100*Dz(this.l)}%${1===DD?")":`, ${DD})`}`
      }
    }));
    const pz = DD => () => DD;

    function sz(DD, zD) {
      return function(wD) {
        return DD + wD * zD
      }
    }

    function Kz(DD) {
      return 1 === (DD = +DD) ? rz : function(zD, wD) {
        return wD - zD ? function(DD, zD, wD) {
          return DD = Math.pow(DD, wD), zD = Math.pow(zD, wD) - DD, wD = 1 / wD,
            function(pD) {
              return Math.pow(DD + pD * zD, wD)
            }
        }(zD, wD, DD) : pz(isNaN(zD) ? wD : zD)
      }
    }

    function rz(DD, zD) {
      var wD = zD - DD;
      return wD ? sz(DD, wD) : pz(isNaN(DD) ? zD : DD)
    }
    const Lz = function DD(zD) {
      var wD = Kz(zD);

      function pD(DD, zD) {
        var pD = wD((DD = mD(DD)).r, (zD = mD(zD)).r),
          sD = wD(DD.g, zD.g),
          KD = wD(DD.b, zD.b),
          rD = rz(DD.opacity, zD.opacity);
        return function(zD) {
          return DD.r = pD(zD), DD.g = sD(zD), DD.b = KD(zD), DD.opacity = rD(zD), DD + ""
        }
      }
      return pD.gamma = DD, pD
    }(1);

    function cz(DD) {
      return function(zD) {
        var wD, pD, sD = zD.length,
          KD = new Array(sD),
          rD = new Array(sD),
          LD = new Array(sD);
        for (wD = 0; wD < sD; ++wD) pD = mD(zD[wD]), KD[wD] = pD.r || 0, rD[wD] = pD.g || 0, LD[wD] = pD.b || 0;
        return KD = DD(KD), rD = DD(rD), LD = DD(LD), pD.opacity = 1,
          function(DD) {
            return pD.r = KD(DD), pD.g = rD(DD), pD.b = LD(DD), pD + ""
          }
      }
    }
    cz((function(DD) {
      var zD = DD.length - 1;
      return function(wD) {
        var pD = wD <= 0 ? wD = 0 : wD >= 1 ? (wD = 1, zD - 1) : Math.floor(wD * zD),
          sD = DD[pD],
          KD = DD[pD + 1],
          rD = pD > 0 ? DD[pD - 1] : 2 * sD - KD,
          LD = pD < zD - 1 ? DD[pD + 2] : 2 * KD - sD;
        return wz((wD - pD / zD) * zD, rD, sD, KD, LD)
      }
    })), cz((function(DD) {
      var zD = DD.length;
      return function(wD) {
        var pD = Math.floor(((wD %= 1) < 0 ? ++wD : wD) * zD),
          sD = DD[(pD + zD - 1) % zD],
          KD = DD[pD % zD],
          rD = DD[(pD + 1) % zD],
          LD = DD[(pD + 2) % zD];
        return wz((wD - pD / zD) * zD, sD, KD, rD, LD)
      }
    }));

    function gz(DD, zD) {
      var wD, pD = zD ? zD.length : 0,
        sD = DD ? Math.min(pD, DD.length) : 0,
        KD = new Array(sD),
        rD = new Array(pD);
      for (wD = 0; wD < sD; ++wD) KD[wD] = hz(DD[wD], zD[wD]);
      for (; wD < pD; ++wD) rD[wD] = zD[wD];
      return function(DD) {
        for (wD = 0; wD < sD; ++wD) rD[wD] = KD[wD](DD);
        return rD
      }
    }

    function Rz(DD, zD) {
      var wD = new Date;
      return DD = +DD, zD = +zD,
        function(pD) {
          return wD.setTime(DD * (1 - pD) + zD * pD), wD
        }
    }

    function Az(DD, zD) {
      return DD = +DD, zD = +zD,
        function(wD) {
          return DD * (1 - wD) + zD * wD
        }
    }

    function Uz(DD, zD) {
      var wD, pD = {},
        sD = {};
      for (wD in null !== DD && "object" === typeof DD || (DD = {}), null !== zD && "object" === typeof zD || (zD = {}), zD) wD in DD ? pD[wD] = hz(DD[wD], zD[wD]) : sD[wD] = zD[wD];
      return function(DD) {
        for (wD in pD) sD[wD] = pD[wD](DD);
        return sD
      }
    }
    var fz = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Iz = new RegExp(fz.source, "g");

    function Bz(DD, zD) {
      var wD, pD, sD, KD = fz.lastIndex = Iz.lastIndex = 0,
        rD = -1,
        LD = [],
        cD = [];
      for (DD += "", zD += "";
        (wD = fz.exec(DD)) && (pD = Iz.exec(zD));)(sD = pD.index) > KD && (sD = zD.slice(KD, sD), LD[rD] ? LD[rD] += sD : LD[++rD] = sD), (wD = wD[0]) === (pD = pD[0]) ? LD[rD] ? LD[rD] += pD : LD[++rD] = pD : (LD[++rD] = null, cD.push({
        i: rD,
        x: Az(wD, pD)
      })), KD = Iz.lastIndex;
      return KD < zD.length && (sD = zD.slice(KD), LD[rD] ? LD[rD] += sD : LD[++rD] = sD), LD.length < 2 ? cD[0] ? function(DD) {
        return function(zD) {
          return DD(zD) + ""
        }
      }(cD[0].x) : function(DD) {
        return function() {
          return DD
        }
      }(zD) : (zD = cD.length, function(DD) {
        for (var wD, pD = 0; pD < zD; ++pD) LD[(wD = cD[pD]).i] = wD.x(DD);
        return LD.join("")
      })
    }

    function Gz(DD, zD) {
      zD || (zD = []);
      var wD, pD = DD ? Math.min(zD.length, DD.length) : 0,
        sD = zD.slice();
      return function(KD) {
        for (wD = 0; wD < pD; ++wD) sD[wD] = DD[wD] * (1 - KD) + zD[wD] * KD;
        return sD
      }
    }

    function hz(DD, zD) {
      var wD, pD, sD = typeof zD;
      return null == zD || "boolean" === sD ? pz(zD) : ("number" === sD ? Az : "string" === sD ? (wD = ZD(zD)) ? (zD = wD, Lz) : Bz : zD instanceof ZD ? Lz : zD instanceof Date ? Rz : (pD = zD, !ArrayBuffer.isView(pD) || pD instanceof DataView ? Array.isArray(zD) ? gz : "function" !== typeof zD.valueOf && "function" !== typeof zD.toString || isNaN(zD) ? Uz : Az : Gz))(DD, zD)
    }

    function nz(DD, zD) {
      return DD = +DD, zD = +zD,
        function(wD) {
          return Math.round(DD * (1 - wD) + zD * wD)
        }
    }

    function Mz(DD) {
      return +DD
    }
    var Oz = [0, 1];

    function Jz(DD) {
      return DD
    }

    function Ez(DD, zD) {
      return (zD -= DD = +DD) ? function(wD) {
        return (wD - DD) / zD
      } : (wD = isNaN(zD) ? NaN : .5, function() {
        return wD
      });
      var wD
    }

    function Qz(DD, zD, wD) {
      var pD = DD[0],
        sD = DD[1],
        KD = zD[0],
        rD = zD[1];
      return sD < pD ? (pD = Ez(sD, pD), KD = wD(rD, KD)) : (pD = Ez(pD, sD), KD = wD(KD, rD)),
        function(DD) {
          return KD(pD(DD))
        }
    }

    function Xz(DD, zD, wD) {
      var pD = Math.min(DD.length, zD.length) - 1,
        sD = new Array(pD),
        KD = new Array(pD),
        rD = -1;
      for (DD[pD] < DD[0] && (DD = DD.slice().reverse(), zD = zD.slice().reverse()); ++rD < pD;) sD[rD] = Ez(DD[rD], DD[rD + 1]), KD[rD] = wD(zD[rD], zD[rD + 1]);
      return function(zD) {
        var wD = MD(DD, zD, 1, pD) - 1;
        return KD[wD](sD[wD](zD))
      }
    }

    function Vz(DD, zD) {
      return zD.domain(DD.domain()).range(DD.range()).interpolate(DD.interpolate()).clamp(DD.clamp()).unknown(DD.unknown())
    }

    function Pz() {
      var DD, zD, wD, pD, sD, KD, rD = Oz,
        LD = Oz,
        cD = hz,
        gD = Jz;

      function RD() {
        var DD = Math.min(rD.length, LD.length);
        return gD !== Jz && (gD = function(DD, zD) {
          var wD;
          return DD > zD && (wD = DD, DD = zD, zD = wD),
            function(wD) {
              return Math.max(DD, Math.min(zD, wD))
            }
        }(rD[0], rD[DD - 1])), pD = DD > 2 ? Xz : Qz, sD = KD = null, AD
      }

      function AD(zD) {
        return null == zD || isNaN(zD = +zD) ? wD : (sD || (sD = pD(rD.map(DD), LD, cD)))(DD(gD(zD)))
      }
      return AD.invert = function(wD) {
          return gD(zD((KD || (KD = pD(LD, rD.map(DD), Az)))(wD)))
        }, AD.domain = function(DD) {
          return arguments.length ? (rD = Array.from(DD, Mz), RD()) : rD.slice()
        }, AD.range = function(DD) {
          return arguments.length ? (LD = Array.from(DD), RD()) : LD.slice()
        }, AD.rangeRound = function(DD) {
          return LD = Array.from(DD), cD = nz, RD()
        }, AD.clamp = function(DD) {
          return arguments.length ? (gD = !!DD || Jz, RD()) : gD !== Jz
        }, AD.interpolate = function(DD) {
          return arguments.length ? (cD = DD, RD()) : cD
        }, AD.unknown = function(DD) {
          return arguments.length ? (wD = DD, AD) : wD
        },
        function(wD, pD) {
          return DD = wD, zD = pD, RD()
        }
    }

    function Cz() {
      return Pz()(Jz, Jz)
    }
    var xz, Tz = wD(6193),
      bz = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function jz(DD) {
      if (!(zD = bz.exec(DD))) throw new Error("invalid format: " + DD);
      var zD;
      return new dz({
        fill: zD[1],
        align: zD[2],
        sign: zD[3],
        symbol: zD[4],
        zero: zD[5],
        width: zD[6],
        comma: zD[7],
        precision: zD[8] && zD[8].slice(1),
        trim: zD[9],
        type: zD[10]
      })
    }

    function dz(DD) {
      this.fill = void 0 === DD.fill ? " " : DD.fill + "", this.align = void 0 === DD.align ? ">" : DD.align + "", this.sign = void 0 === DD.sign ? "-" : DD.sign + "", this.symbol = void 0 === DD.symbol ? "" : DD.symbol + "", this.zero = !!DD.zero, this.width = void 0 === DD.width ? void 0 : +DD.width, this.comma = !!DD.comma, this.precision = void 0 === DD.precision ? void 0 : +DD.precision, this.trim = !!DD.trim, this.type = void 0 === DD.type ? "" : DD.type + ""
    }

    function Sz(DD, zD) {
      if (!isFinite(DD) || 0 === DD) return null;
      var wD = (DD = zD ? DD.toExponential(zD - 1) : DD.toExponential()).indexOf("e"),
        pD = DD.slice(0, wD);
      return [pD.length > 1 ? pD[0] + pD.slice(2) : pD, +DD.slice(wD + 1)]
    }

    function iz(DD) {
      return (DD = Sz(Math.abs(DD))) ? DD[1] : NaN
    }

    function lz(DD, zD) {
      var wD = Sz(DD, zD);
      if (!wD) return DD + "";
      var pD = wD[0],
        sD = wD[1];
      return sD < 0 ? "0." + new Array(-sD).join("0") + pD : pD.length > sD + 1 ? pD.slice(0, sD + 1) + "." + pD.slice(sD + 1) : pD + new Array(sD - pD.length + 2).join("0")
    }
    jz.prototype = dz.prototype, dz.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const Wz = {
      "%": (DD, zD) => (100 * DD).toFixed(zD),
      b: DD => Math.round(DD).toString(2),
      c: DD => DD + "",
      d: function(DD) {
        return Math.abs(DD = Math.round(DD)) >= 1e21 ? DD.toLocaleString("en").replace(/,/g, "") : DD.toString(10)
      },
      e: (DD, zD) => DD.toExponential(zD),
      f: (DD, zD) => DD.toFixed(zD),
      g: (DD, zD) => DD.toPrecision(zD),
      o: DD => Math.round(DD).toString(8),
      p: (DD, zD) => lz(100 * DD, zD),
      r: lz,
      s: function(DD, zD) {
        var wD = Sz(DD, zD);
        if (!wD) return xz = void 0, DD.toPrecision(zD);
        var pD = wD[0],
          sD = wD[1],
          KD = sD - (xz = 3 * Math.max(-8, Math.min(8, Math.floor(sD / 3)))) + 1,
          rD = pD.length;
        return KD === rD ? pD : KD > rD ? pD + new Array(KD - rD + 1).join("0") : KD > 0 ? pD.slice(0, KD) + "." + pD.slice(KD) : "0." + new Array(1 - KD).join("0") + Sz(DD, Math.max(0, zD + KD - 1))[0]
      },
      X: DD => Math.round(DD).toString(16).toUpperCase(),
      x: DD => Math.round(DD).toString(16)
    };

    function Nz(DD) {
      return DD
    }
    var Zz, yz, kz, mz = Array.prototype.map,
      ez = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function oz(DD) {
      var zD, wD, pD = void 0 === DD.grouping || void 0 === DD.thousands ? Nz : (zD = mz.call(DD.grouping, Number), wD = DD.thousands + "", function(DD, pD) {
          for (var sD = DD.length, KD = [], rD = 0, LD = zD[0], cD = 0; sD > 0 && LD > 0 && (cD + LD + 1 > pD && (LD = Math.max(1, pD - cD)), KD.push(DD.substring(sD -= LD, sD + LD)), !((cD += LD + 1) > pD));) LD = zD[rD = (rD + 1) % zD.length];
          return KD.reverse().join(wD)
        }),
        sD = void 0 === DD.currency ? "" : DD.currency[0] + "",
        KD = void 0 === DD.currency ? "" : DD.currency[1] + "",
        rD = void 0 === DD.decimal ? "." : DD.decimal + "",
        LD = void 0 === DD.numerals ? Nz : function(DD) {
          return function(zD) {
            return zD.replace(/[0-9]/g, (function(zD) {
              return DD[+zD]
            }))
          }
        }(mz.call(DD.numerals, String)),
        cD = void 0 === DD.percent ? "%" : DD.percent + "",
        gD = void 0 === DD.minus ? "\u2212" : DD.minus + "",
        RD = void 0 === DD.nan ? "NaN" : DD.nan + "";

      function AD(DD, zD) {
        var wD = (DD = jz(DD)).fill,
          AD = DD.align,
          UD = DD.sign,
          fD = DD.symbol,
          ID = DD.zero,
          BD = DD.width,
          GD = DD.comma,
          hD = DD.precision,
          nD = DD.trim,
          MD = DD.type;
        "n" === MD ? (GD = !0, MD = "g") : Wz[MD] || (void 0 === hD && (hD = 12), nD = !0, MD = "g"), (ID || "0" === wD && "=" === AD) && (ID = !0, wD = "0", AD = "=");
        var OD = (zD && void 0 !== zD.prefix ? zD.prefix : "") + ("$" === fD ? sD : "#" === fD && /[boxX]/.test(MD) ? "0" + MD.toLowerCase() : ""),
          JD = ("$" === fD ? KD : /[%p]/.test(MD) ? cD : "") + (zD && void 0 !== zD.suffix ? zD.suffix : ""),
          ED = Wz[MD],
          QD = /[defgprs%]/.test(MD);

        function XD(DD) {
          var zD, sD, KD, cD = OD,
            fD = JD;
          if ("c" === MD) fD = ED(DD) + fD, DD = "";
          else {
            var XD = (DD = +DD) < 0 || 1 / DD < 0;
            if (DD = isNaN(DD) ? RD : ED(Math.abs(DD), hD), nD && (DD = function(DD) {
                DD: for (var zD, wD = DD.length, pD = 1, sD = -1; pD < wD; ++pD) switch (DD[pD]) {
                  case ".":
                    sD = zD = pD;
                    break;
                  case "0":
                    0 === sD && (sD = pD), zD = pD;
                    break;
                  default:
                    if (!+DD[pD]) break DD;
                    sD > 0 && (sD = 0)
                }
                return sD > 0 ? DD.slice(0, sD) + DD.slice(zD + 1) : DD
              }(DD)), XD && 0 === +DD && "+" !== UD && (XD = !1), cD = (XD ? "(" === UD ? UD : gD : "-" === UD || "(" === UD ? "" : UD) + cD, fD = ("s" !== MD || isNaN(DD) || void 0 === xz ? "" : ez[8 + xz / 3]) + fD + (XD && "(" === UD ? ")" : ""), QD)
              for (zD = -1, sD = DD.length; ++zD < sD;)
                if (48 > (KD = DD.charCodeAt(zD)) || KD > 57) {
                  fD = (46 === KD ? rD + DD.slice(zD + 1) : DD.slice(zD)) + fD, DD = DD.slice(0, zD);
                  break
                }
          }
          GD && !ID && (DD = pD(DD, 1 / 0));
          var VD = cD.length + DD.length + fD.length,
            PD = VD < BD ? new Array(BD - VD + 1).join(wD) : "";
          switch (GD && ID && (DD = pD(PD + DD, PD.length ? BD - fD.length : 1 / 0), PD = ""), AD) {
            case "<":
              DD = cD + DD + fD + PD;
              break;
            case "=":
              DD = cD + PD + DD + fD;
              break;
            case "^":
              DD = PD.slice(0, VD = PD.length >> 1) + cD + DD + fD + PD.slice(VD);
              break;
            default:
              DD = PD + cD + DD + fD
          }
          return LD(DD)
        }
        return hD = void 0 === hD ? 6 : /[gprs]/.test(MD) ? Math.max(1, Math.min(21, hD)) : Math.max(0, Math.min(20, hD)), XD.toString = function() {
          return DD + ""
        }, XD
      }
      return {
        format: AD,
        formatPrefix: function(DD, zD) {
          var wD = 3 * Math.max(-8, Math.min(8, Math.floor(iz(zD) / 3))),
            pD = Math.pow(10, -wD),
            sD = AD(((DD = jz(DD)).type = "f", DD), {
              suffix: ez[8 + wD / 3]
            });
          return function(DD) {
            return sD(pD * DD)
          }
        }
      }
    }

    function az(DD, zD, wD, pD) {
      var sD, KD = AD(DD, zD, wD);
      switch ((pD = jz(null == pD ? ",f" : pD)).type) {
        case "s":
          var rD = Math.max(Math.abs(DD), Math.abs(zD));
          return null != pD.precision || isNaN(sD = function(DD, zD) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(iz(zD) / 3))) - iz(Math.abs(DD)))
          }(KD, rD)) || (pD.precision = sD), kz(pD, rD);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != pD.precision || isNaN(sD = function(DD, zD) {
            return DD = Math.abs(DD), zD = Math.abs(zD) - DD, Math.max(0, iz(zD) - iz(DD)) + 1
          }(KD, Math.max(Math.abs(DD), Math.abs(zD)))) || (pD.precision = sD - ("e" === pD.type));
          break;
        case "f":
        case "%":
          null != pD.precision || isNaN(sD = function(DD) {
            return Math.max(0, -iz(Math.abs(DD)))
          }(KD)) || (pD.precision = sD - 2 * ("%" === pD.type))
      }
      return yz(pD)
    }

    function uz(DD) {
      var zD = DD.domain;
      return DD.ticks = function(DD) {
        var wD = zD();
        return gD(wD[0], wD[wD.length - 1], null == DD ? 10 : DD)
      }, DD.tickFormat = function(DD, wD) {
        var pD = zD();
        return az(pD[0], pD[pD.length - 1], null == DD ? 10 : DD, wD)
      }, DD.nice = function(wD) {
        null == wD && (wD = 10);
        var pD, sD, KD = zD(),
          rD = 0,
          LD = KD.length - 1,
          cD = KD[rD],
          gD = KD[LD],
          AD = 10;
        for (gD < cD && (sD = cD, cD = gD, gD = sD, sD = rD, rD = LD, LD = sD); AD-- > 0;) {
          if ((sD = RD(cD, gD, wD)) === pD) return KD[rD] = cD, KD[LD] = gD, zD(KD);
          if (sD > 0) cD = Math.floor(cD / sD) * sD, gD = Math.ceil(gD / sD) * sD;
          else {
            if (!(sD < 0)) break;
            cD = Math.ceil(cD * sD) / sD, gD = Math.floor(gD * sD) / sD
          }
          pD = sD
        }
        return DD
      }, DD
    }

    function vz() {
      var DD = Cz();
      return DD.copy = function() {
        return Vz(DD, vz())
      }, Tz.d.apply(DD, arguments), uz(DD)
    }

    function tz(DD) {
      var zD;

      function wD(DD) {
        return null == DD || isNaN(DD = +DD) ? zD : DD
      }
      return wD.invert = wD, wD.domain = wD.range = function(zD) {
        return arguments.length ? (DD = Array.from(zD, Mz), wD) : DD.slice()
      }, wD.unknown = function(DD) {
        return arguments.length ? (zD = DD, wD) : zD
      }, wD.copy = function() {
        return tz(DD).unknown(zD)
      }, DD = arguments.length ? Array.from(DD, Mz) : [0, 1], uz(wD)
    }

    function Fz(DD, zD) {
      var wD, pD = 0,
        sD = (DD = DD.slice()).length - 1,
        KD = DD[pD],
        rD = DD[sD];
      return rD < KD && (wD = pD, pD = sD, sD = wD, wD = KD, KD = rD, rD = wD), DD[pD] = zD.floor(KD), DD[sD] = zD.ceil(rD), DD
    }

    function Yz(DD) {
      return Math.log(DD)
    }

    function Hz(DD) {
      return Math.exp(DD)
    }

    function qz(DD) {
      return -Math.log(-DD)
    }

    function Dw(DD) {
      return -Math.exp(-DD)
    }

    function zw(DD) {
      return isFinite(DD) ? +("1e" + DD) : DD < 0 ? 0 : DD
    }

    function ww(DD) {
      return (zD, wD) => -DD(-zD, wD)
    }

    function pw(DD) {
      const zD = DD(Yz, Hz),
        wD = zD.domain;
      let pD, sD, KD = 10;

      function rD() {
        return pD = function(DD) {
          return DD === Math.E ? Math.log : 10 === DD && Math.log10 || 2 === DD && Math.log2 || (DD = Math.log(DD), zD => Math.log(zD) / DD)
        }(KD), sD = function(DD) {
          return 10 === DD ? zw : DD === Math.E ? Math.exp : zD => Math.pow(DD, zD)
        }(KD), wD()[0] < 0 ? (pD = ww(pD), sD = ww(sD), DD(qz, Dw)) : DD(Yz, Hz), zD
      }
      return zD.base = function(DD) {
        return arguments.length ? (KD = +DD, rD()) : KD
      }, zD.domain = function(DD) {
        return arguments.length ? (wD(DD), rD()) : wD()
      }, zD.ticks = DD => {
        const zD = wD();
        let rD = zD[0],
          LD = zD[zD.length - 1];
        const cD = LD < rD;
        cD && ([rD, LD] = [LD, rD]);
        let RD, AD, UD = pD(rD),
          fD = pD(LD);
        const ID = null == DD ? 10 : +DD;
        let BD = [];
        if (!(KD % 1) && fD - UD < ID) {
          if (UD = Math.floor(UD), fD = Math.ceil(fD), rD > 0) {
            for (; UD <= fD; ++UD)
              for (RD = 1; RD < KD; ++RD)
                if (AD = UD < 0 ? RD / sD(-UD) : RD * sD(UD), !(AD < rD)) {
                  if (AD > LD) break;
                  BD.push(AD)
                }
          } else
            for (; UD <= fD; ++UD)
              for (RD = KD - 1; RD >= 1; --RD)
                if (AD = UD > 0 ? RD / sD(-UD) : RD * sD(UD), !(AD < rD)) {
                  if (AD > LD) break;
                  BD.push(AD)
                } 2 * BD.length < ID && (BD = gD(rD, LD, ID))
        } else BD = gD(UD, fD, Math.min(fD - UD, ID)).map(sD);
        return cD ? BD.reverse() : BD
      }, zD.tickFormat = (DD, wD) => {
        if (null == DD && (DD = 10), null == wD && (wD = 10 === KD ? "s" : ","), "function" !== typeof wD && (KD % 1 || null != (wD = jz(wD)).precision || (wD.trim = !0), wD = yz(wD)), DD === 1 / 0) return wD;
        const rD = Math.max(1, KD * DD / zD.ticks().length);
        return DD => {
          let zD = DD / sD(Math.round(pD(DD)));
          return zD * KD < KD - .5 && (zD *= KD), zD <= rD ? wD(DD) : ""
        }
      }, zD.nice = () => wD(Fz(wD(), {
        floor: DD => sD(Math.floor(pD(DD))),
        ceil: DD => sD(Math.ceil(pD(DD)))
      })), zD
    }

    function sw() {
      const DD = pw(Pz()).domain([1, 10]);
      return DD.copy = () => Vz(DD, sw()).base(DD.base()), Tz.d.apply(DD, arguments), DD
    }

    function Kw(DD) {
      return function(zD) {
        return Math.sign(zD) * Math.log1p(Math.abs(zD / DD))
      }
    }

    function rw(DD) {
      return function(zD) {
        return Math.sign(zD) * Math.expm1(Math.abs(zD)) * DD
      }
    }

    function Lw(DD) {
      var zD = 1,
        wD = DD(Kw(zD), rw(zD));
      return wD.constant = function(wD) {
        return arguments.length ? DD(Kw(zD = +wD), rw(zD)) : zD
      }, uz(wD)
    }

    function gw() {
      var DD = Lw(Pz());
      return DD.copy = function() {
        return Vz(DD, gw()).constant(DD.constant())
      }, Tz.d.apply(DD, arguments)
    }
    Zz = oz({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), yz = Zz.format, kz = Zz.formatPrefix;
    var Rw = wD(6198);

    function Aw(DD) {
      return function(zD) {
        return zD < 0 ? -Math.pow(-zD, DD) : Math.pow(zD, DD)
      }
    }

    function Uw(DD) {
      return DD < 0 ? -Math.sqrt(-DD) : Math.sqrt(DD)
    }

    function fw(DD) {
      return DD < 0 ? -DD * DD : DD * DD
    }

    function Iw(DD) {
      var zD = DD(Jz, Jz),
        wD = 1;
      return zD.exponent = function(zD) {
        return arguments.length ? 1 === (wD = +zD) ? DD(Jz, Jz) : .5 === wD ? DD(Uw, fw) : DD(Aw(wD), Aw(1 / wD)) : wD
      }, uz(zD)
    }

    function Bw() {
      var DD = Iw(Pz());
      return DD.copy = function() {
        return Vz(DD, Bw()).exponent(DD.exponent())
      }, Tz.d.apply(DD, arguments), DD
    }

    function Gw() {
      return Bw.apply(null, arguments).exponent(.5)
    }

    function hw(DD) {
      return Math.sign(DD) * DD * DD
    }

    function nw() {
      var DD, zD = Cz(),
        wD = [0, 1],
        pD = !1;

      function sD(wD) {
        var sD = function(DD) {
          return Math.sign(DD) * Math.sqrt(Math.abs(DD))
        }(zD(wD));
        return isNaN(sD) ? DD : pD ? Math.round(sD) : sD
      }
      return sD.invert = function(DD) {
        return zD.invert(hw(DD))
      }, sD.domain = function(DD) {
        return arguments.length ? (zD.domain(DD), sD) : zD.domain()
      }, sD.range = function(DD) {
        return arguments.length ? (zD.range((wD = Array.from(DD, Mz)).map(hw)), sD) : wD.slice()
      }, sD.rangeRound = function(DD) {
        return sD.range(DD).round(!0)
      }, sD.round = function(DD) {
        return arguments.length ? (pD = !!DD, sD) : pD
      }, sD.clamp = function(DD) {
        return arguments.length ? (zD.clamp(DD), sD) : zD.clamp()
      }, sD.unknown = function(zD) {
        return arguments.length ? (DD = zD, sD) : DD
      }, sD.copy = function() {
        return nw(zD.domain(), wD).round(pD).clamp(zD.clamp()).unknown(DD)
      }, Tz.d.apply(sD, arguments), uz(sD)
    }

    function Mw(DD, zD) {
      let wD;
      if (void 0 === zD)
        for (const pD of DD) null != pD && (wD < pD || void 0 === wD && pD >= pD) && (wD = pD);
      else {
        let pD = -1;
        for (let sD of DD) null != (sD = zD(sD, ++pD, DD)) && (wD < sD || void 0 === wD && sD >= sD) && (wD = sD)
      }
      return wD
    }

    function Ow(DD, zD) {
      let wD;
      if (void 0 === zD)
        for (const pD of DD) null != pD && (wD > pD || void 0 === wD && pD >= pD) && (wD = pD);
      else {
        let pD = -1;
        for (let sD of DD) null != (sD = zD(sD, ++pD, DD)) && (wD > sD || void 0 === wD && sD >= sD) && (wD = sD)
      }
      return wD
    }

    function Jw() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UD;
      if (DD === UD) return Ew;
      if ("function" !== typeof DD) throw new TypeError("compare is not a function");
      return (zD, wD) => {
        const pD = DD(zD, wD);
        return pD || 0 === pD ? pD : (0 === DD(wD, wD)) - (0 === DD(zD, zD))
      }
    }

    function Ew(DD, zD) {
      return (null == DD || !(DD >= DD)) - (null == zD || !(zD >= zD)) || (DD < zD ? -1 : DD > zD ? 1 : 0)
    }

    function Qw(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        sD = arguments.length > 4 ? arguments[4] : void 0;
      if (zD = Math.floor(zD), wD = Math.floor(Math.max(0, wD)), pD = Math.floor(Math.min(DD.length - 1, pD)), !(wD <= zD && zD <= pD)) return DD;
      for (sD = void 0 === sD ? Ew : Jw(sD); pD > wD;) {
        if (pD - wD > 600) {
          const KD = pD - wD + 1,
            rD = zD - wD + 1,
            LD = Math.log(KD),
            cD = .5 * Math.exp(2 * LD / 3),
            gD = .5 * Math.sqrt(LD * cD * (KD - cD) / KD) * (rD - KD / 2 < 0 ? -1 : 1);
          Qw(DD, zD, Math.max(wD, Math.floor(zD - rD * cD / KD + gD)), Math.min(pD, Math.floor(zD + (KD - rD) * cD / KD + gD)), sD)
        }
        const KD = DD[zD];
        let rD = wD,
          LD = pD;
        for (Xw(DD, wD, zD), sD(DD[pD], KD) > 0 && Xw(DD, wD, pD); rD < LD;) {
          for (Xw(DD, rD, LD), ++rD, --LD; sD(DD[rD], KD) < 0;) ++rD;
          for (; sD(DD[LD], KD) > 0;) --LD
        }
        0 === sD(DD[wD], KD) ? Xw(DD, wD, LD) : (++LD, Xw(DD, LD, pD)), LD <= zD && (wD = LD + 1), zD <= LD && (pD = LD - 1)
      }
      return DD
    }

    function Xw(DD, zD, wD) {
      const pD = DD[zD];
      DD[zD] = DD[wD], DD[wD] = pD
    }

    function Vw(DD, zD, wD) {
      if (DD = Float64Array.from(function*(DD, zD) {
          if (void 0 === zD)
            for (let wD of DD) null != wD && (wD = +wD) >= wD && (yield wD);
          else {
            let wD = -1;
            for (let pD of DD) null != (pD = zD(pD, ++wD, DD)) && (pD = +pD) >= pD && (yield pD)
          }
        }(DD, wD)), (pD = DD.length) && !isNaN(zD = +zD)) {
        if (zD <= 0 || pD < 2) return Ow(DD);
        if (zD >= 1) return Mw(DD);
        var pD, sD = (pD - 1) * zD,
          KD = Math.floor(sD),
          rD = Mw(Qw(DD, KD).subarray(0, KD + 1));
        return rD + (Ow(DD.subarray(KD + 1)) - rD) * (sD - KD)
      }
    }

    function Pw(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GD;
      if ((pD = DD.length) && !isNaN(zD = +zD)) {
        if (zD <= 0 || pD < 2) return +wD(DD[0], 0, DD);
        if (zD >= 1) return +wD(DD[pD - 1], pD - 1, DD);
        var pD, sD = (pD - 1) * zD,
          KD = Math.floor(sD),
          rD = +wD(DD[KD], KD, DD);
        return rD + (+wD(DD[KD + 1], KD + 1, DD) - rD) * (sD - KD)
      }
    }

    function Cw() {
      var DD, zD = [],
        wD = [],
        pD = [];

      function sD() {
        var DD = 0,
          sD = Math.max(1, wD.length);
        for (pD = new Array(sD - 1); ++DD < sD;) pD[DD - 1] = Pw(zD, DD / sD);
        return KD
      }

      function KD(zD) {
        return null == zD || isNaN(zD = +zD) ? DD : wD[MD(pD, zD)]
      }
      return KD.invertExtent = function(DD) {
        var sD = wD.indexOf(DD);
        return sD < 0 ? [NaN, NaN] : [sD > 0 ? pD[sD - 1] : zD[0], sD < pD.length ? pD[sD] : zD[zD.length - 1]]
      }, KD.domain = function(DD) {
        if (!arguments.length) return zD.slice();
        zD = [];
        for (let wD of DD) null == wD || isNaN(wD = +wD) || zD.push(wD);
        return zD.sort(UD), sD()
      }, KD.range = function(DD) {
        return arguments.length ? (wD = Array.from(DD), sD()) : wD.slice()
      }, KD.unknown = function(zD) {
        return arguments.length ? (DD = zD, KD) : DD
      }, KD.quantiles = function() {
        return pD.slice()
      }, KD.copy = function() {
        return Cw().domain(zD).range(wD).unknown(DD)
      }, Tz.d.apply(KD, arguments)
    }

    function xw() {
      var DD, zD = 0,
        wD = 1,
        pD = 1,
        sD = [.5],
        KD = [0, 1];

      function rD(zD) {
        return null != zD && zD <= zD ? KD[MD(sD, zD, 0, pD)] : DD
      }

      function LD() {
        var DD = -1;
        for (sD = new Array(pD); ++DD < pD;) sD[DD] = ((DD + 1) * wD - (DD - pD) * zD) / (pD + 1);
        return rD
      }
      return rD.domain = function(DD) {
        return arguments.length ? ([zD, wD] = DD, zD = +zD, wD = +wD, LD()) : [zD, wD]
      }, rD.range = function(DD) {
        return arguments.length ? (pD = (KD = Array.from(DD)).length - 1, LD()) : KD.slice()
      }, rD.invertExtent = function(DD) {
        var rD = KD.indexOf(DD);
        return rD < 0 ? [NaN, NaN] : rD < 1 ? [zD, sD[0]] : rD >= pD ? [sD[pD - 1], wD] : [sD[rD - 1], sD[rD]]
      }, rD.unknown = function(zD) {
        return arguments.length ? (DD = zD, rD) : rD
      }, rD.thresholds = function() {
        return sD.slice()
      }, rD.copy = function() {
        return xw().domain([zD, wD]).range(KD).unknown(DD)
      }, Tz.d.apply(uz(rD), arguments)
    }

    function Tw() {
      var DD, zD = [.5],
        wD = [0, 1],
        pD = 1;

      function sD(sD) {
        return null != sD && sD <= sD ? wD[MD(zD, sD, 0, pD)] : DD
      }
      return sD.domain = function(DD) {
        return arguments.length ? (zD = Array.from(DD), pD = Math.min(zD.length, wD.length - 1), sD) : zD.slice()
      }, sD.range = function(DD) {
        return arguments.length ? (wD = Array.from(DD), pD = Math.min(zD.length, wD.length - 1), sD) : wD.slice()
      }, sD.invertExtent = function(DD) {
        var pD = wD.indexOf(DD);
        return [zD[pD - 1], zD[pD]]
      }, sD.unknown = function(zD) {
        return arguments.length ? (DD = zD, sD) : DD
      }, sD.copy = function() {
        return Tw().domain(zD).range(wD).unknown(DD)
      }, Tz.d.apply(sD, arguments)
    }
    const bw = 1e3,
      jw = 6e4,
      dw = 36e5,
      Sw = 864e5,
      iw = 6048e5,
      lw = 2592e6,
      Ww = 31536e6,
      Nw = new Date,
      Zw = new Date;

    function yw(DD, zD, wD, pD) {
      function sD(zD) {
        return DD(zD = 0 === arguments.length ? new Date : new Date(+zD)), zD
      }
      return sD.floor = zD => (DD(zD = new Date(+zD)), zD), sD.ceil = wD => (DD(wD = new Date(wD - 1)), zD(wD, 1), DD(wD), wD), sD.round = DD => {
        const zD = sD(DD),
          wD = sD.ceil(DD);
        return DD - zD < wD - DD ? zD : wD
      }, sD.offset = (DD, wD) => (zD(DD = new Date(+DD), null == wD ? 1 : Math.floor(wD)), DD), sD.range = (wD, pD, KD) => {
        const rD = [];
        if (wD = sD.ceil(wD), KD = null == KD ? 1 : Math.floor(KD), !(wD < pD) || !(KD > 0)) return rD;
        let LD;
        do {
          rD.push(LD = new Date(+wD)), zD(wD, KD), DD(wD)
        } while (LD < wD && wD < pD);
        return rD
      }, sD.filter = wD => yw((zD => {
        if (zD >= zD)
          for (; DD(zD), !wD(zD);) zD.setTime(zD - 1)
      }), ((DD, pD) => {
        if (DD >= DD)
          if (pD < 0)
            for (; ++pD <= 0;)
              for (; zD(DD, -1), !wD(DD););
          else
            for (; --pD >= 0;)
              for (; zD(DD, 1), !wD(DD););
      })), wD && (sD.count = (zD, pD) => (Nw.setTime(+zD), Zw.setTime(+pD), DD(Nw), DD(Zw), Math.floor(wD(Nw, Zw))), sD.every = DD => (DD = Math.floor(DD), isFinite(DD) && DD > 0 ? DD > 1 ? sD.filter(pD ? zD => pD(zD) % DD === 0 : zD => sD.count(0, zD) % DD === 0) : sD : null)), sD
    }
    const kw = yw((() => {}), ((DD, zD) => {
      DD.setTime(+DD + zD)
    }), ((DD, zD) => zD - DD));
    kw.every = DD => (DD = Math.floor(DD), isFinite(DD) && DD > 0 ? DD > 1 ? yw((zD => {
      zD.setTime(Math.floor(zD / DD) * DD)
    }), ((zD, wD) => {
      zD.setTime(+zD + wD * DD)
    }), ((zD, wD) => (wD - zD) / DD)) : kw : null);
    kw.range;
    const mw = yw((DD => {
        DD.setTime(DD - DD.getMilliseconds())
      }), ((DD, zD) => {
        DD.setTime(+DD + zD * bw)
      }), ((DD, zD) => (zD - DD) / bw), (DD => DD.getUTCSeconds())),
      ew = (mw.range, yw((DD => {
        DD.setTime(DD - DD.getMilliseconds() - DD.getSeconds() * bw)
      }), ((DD, zD) => {
        DD.setTime(+DD + zD * jw)
      }), ((DD, zD) => (zD - DD) / jw), (DD => DD.getMinutes()))),
      ow = (ew.range, yw((DD => {
        DD.setUTCSeconds(0, 0)
      }), ((DD, zD) => {
        DD.setTime(+DD + zD * jw)
      }), ((DD, zD) => (zD - DD) / jw), (DD => DD.getUTCMinutes()))),
      aw = (ow.range, yw((DD => {
        DD.setTime(DD - DD.getMilliseconds() - DD.getSeconds() * bw - DD.getMinutes() * jw)
      }), ((DD, zD) => {
        DD.setTime(+DD + zD * dw)
      }), ((DD, zD) => (zD - DD) / dw), (DD => DD.getHours()))),
      uw = (aw.range, yw((DD => {
        DD.setUTCMinutes(0, 0, 0)
      }), ((DD, zD) => {
        DD.setTime(+DD + zD * dw)
      }), ((DD, zD) => (zD - DD) / dw), (DD => DD.getUTCHours()))),
      vw = (uw.range, yw((DD => DD.setHours(0, 0, 0, 0)), ((DD, zD) => DD.setDate(DD.getDate() + zD)), ((DD, zD) => (zD - DD - (zD.getTimezoneOffset() - DD.getTimezoneOffset()) * jw) / Sw), (DD => DD.getDate() - 1))),
      tw = (vw.range, yw((DD => {
        DD.setUTCHours(0, 0, 0, 0)
      }), ((DD, zD) => {
        DD.setUTCDate(DD.getUTCDate() + zD)
      }), ((DD, zD) => (zD - DD) / Sw), (DD => DD.getUTCDate() - 1))),
      Fw = (tw.range, yw((DD => {
        DD.setUTCHours(0, 0, 0, 0)
      }), ((DD, zD) => {
        DD.setUTCDate(DD.getUTCDate() + zD)
      }), ((DD, zD) => (zD - DD) / Sw), (DD => Math.floor(DD / Sw))));
    Fw.range;

    function Yw(DD) {
      return yw((zD => {
        zD.setDate(zD.getDate() - (zD.getDay() + 7 - DD) % 7), zD.setHours(0, 0, 0, 0)
      }), ((DD, zD) => {
        DD.setDate(DD.getDate() + 7 * zD)
      }), ((DD, zD) => (zD - DD - (zD.getTimezoneOffset() - DD.getTimezoneOffset()) * jw) / iw))
    }
    const Hw = Yw(0),
      qw = Yw(1),
      Dp = Yw(2),
      zp = Yw(3),
      wp = Yw(4),
      pp = Yw(5),
      sp = Yw(6);
    Hw.range, qw.range, Dp.range, zp.range, wp.range, pp.range, sp.range;

    function Kp(DD) {
      return yw((zD => {
        zD.setUTCDate(zD.getUTCDate() - (zD.getUTCDay() + 7 - DD) % 7), zD.setUTCHours(0, 0, 0, 0)
      }), ((DD, zD) => {
        DD.setUTCDate(DD.getUTCDate() + 7 * zD)
      }), ((DD, zD) => (zD - DD) / iw))
    }
    const rp = Kp(0),
      Lp = Kp(1),
      cp = Kp(2),
      gp = Kp(3),
      Rp = Kp(4),
      Ap = Kp(5),
      Up = Kp(6),
      fp = (rp.range, Lp.range, cp.range, gp.range, Rp.range, Ap.range, Up.range, yw((DD => {
        DD.setDate(1), DD.setHours(0, 0, 0, 0)
      }), ((DD, zD) => {
        DD.setMonth(DD.getMonth() + zD)
      }), ((DD, zD) => zD.getMonth() - DD.getMonth() + 12 * (zD.getFullYear() - DD.getFullYear())), (DD => DD.getMonth()))),
      Ip = (fp.range, yw((DD => {
        DD.setUTCDate(1), DD.setUTCHours(0, 0, 0, 0)
      }), ((DD, zD) => {
        DD.setUTCMonth(DD.getUTCMonth() + zD)
      }), ((DD, zD) => zD.getUTCMonth() - DD.getUTCMonth() + 12 * (zD.getUTCFullYear() - DD.getUTCFullYear())), (DD => DD.getUTCMonth()))),
      Bp = (Ip.range, yw((DD => {
        DD.setMonth(0, 1), DD.setHours(0, 0, 0, 0)
      }), ((DD, zD) => {
        DD.setFullYear(DD.getFullYear() + zD)
      }), ((DD, zD) => zD.getFullYear() - DD.getFullYear()), (DD => DD.getFullYear())));
    Bp.every = DD => isFinite(DD = Math.floor(DD)) && DD > 0 ? yw((zD => {
      zD.setFullYear(Math.floor(zD.getFullYear() / DD) * DD), zD.setMonth(0, 1), zD.setHours(0, 0, 0, 0)
    }), ((zD, wD) => {
      zD.setFullYear(zD.getFullYear() + wD * DD)
    })) : null;
    Bp.range;
    const Gp = yw((DD => {
      DD.setUTCMonth(0, 1), DD.setUTCHours(0, 0, 0, 0)
    }), ((DD, zD) => {
      DD.setUTCFullYear(DD.getUTCFullYear() + zD)
    }), ((DD, zD) => zD.getUTCFullYear() - DD.getUTCFullYear()), (DD => DD.getUTCFullYear()));
    Gp.every = DD => isFinite(DD = Math.floor(DD)) && DD > 0 ? yw((zD => {
      zD.setUTCFullYear(Math.floor(zD.getUTCFullYear() / DD) * DD), zD.setUTCMonth(0, 1), zD.setUTCHours(0, 0, 0, 0)
    }), ((zD, wD) => {
      zD.setUTCFullYear(zD.getUTCFullYear() + wD * DD)
    })) : null;
    Gp.range;

    function hp(DD, zD, wD, pD, sD, KD) {
      const rD = [
        [mw, 1, bw],
        [mw, 5, 5e3],
        [mw, 15, 15e3],
        [mw, 30, 3e4],
        [KD, 1, jw],
        [KD, 5, 3e5],
        [KD, 15, 9e5],
        [KD, 30, 18e5],
        [sD, 1, dw],
        [sD, 3, 108e5],
        [sD, 6, 216e5],
        [sD, 12, 432e5],
        [pD, 1, Sw],
        [pD, 2, 1728e5],
        [wD, 1, iw],
        [zD, 1, lw],
        [zD, 3, 7776e6],
        [DD, 1, Ww]
      ];

      function LD(zD, wD, pD) {
        const sD = Math.abs(wD - zD) / pD,
          KD = ID((DD => {
            let [, , zD] = DD;
            return zD
          })).right(rD, sD);
        if (KD === rD.length) return DD.every(AD(zD / Ww, wD / Ww, pD));
        if (0 === KD) return kw.every(Math.max(AD(zD, wD, pD), 1));
        const [LD, cD] = rD[sD / rD[KD - 1][2] < rD[KD][2] / sD ? KD - 1 : KD];
        return LD.every(cD)
      }
      return [function(DD, zD, wD) {
        const pD = zD < DD;
        pD && ([DD, zD] = [zD, DD]);
        const sD = wD && "function" === typeof wD.range ? wD : LD(DD, zD, wD),
          KD = sD ? sD.range(DD, +zD + 1) : [];
        return pD ? KD.reverse() : KD
      }, LD]
    }
    const [np, Mp] = hp(Gp, Ip, rp, Fw, uw, ow), [Op, Jp] = hp(Bp, fp, Hw, vw, aw, ew);

    function Ep(DD) {
      if (0 <= DD.y && DD.y < 100) {
        var zD = new Date(-1, DD.m, DD.d, DD.H, DD.M, DD.S, DD.L);
        return zD.setFullYear(DD.y), zD
      }
      return new Date(DD.y, DD.m, DD.d, DD.H, DD.M, DD.S, DD.L)
    }

    function Qp(DD) {
      if (0 <= DD.y && DD.y < 100) {
        var zD = new Date(Date.UTC(-1, DD.m, DD.d, DD.H, DD.M, DD.S, DD.L));
        return zD.setUTCFullYear(DD.y), zD
      }
      return new Date(Date.UTC(DD.y, DD.m, DD.d, DD.H, DD.M, DD.S, DD.L))
    }

    function Xp(DD, zD, wD) {
      return {
        y: DD,
        m: zD,
        d: wD,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var Vp, Pp, Cp, xp = {
        "-": "",
        _: " ",
        0: "0"
      },
      Tp = /^\s*\d+/,
      bp = /^%/,
      jp = /[\\^$*+?|[\]().{}]/g;

    function dp(DD, zD, wD) {
      var pD = DD < 0 ? "-" : "",
        sD = (pD ? -DD : DD) + "",
        KD = sD.length;
      return pD + (KD < wD ? new Array(wD - KD + 1).join(zD) + sD : sD)
    }

    function Sp(DD) {
      return DD.replace(jp, "\\$&")
    }

    function ip(DD) {
      return new RegExp("^(?:" + DD.map(Sp).join("|") + ")", "i")
    }

    function lp(DD) {
      return new Map(DD.map(((DD, zD) => [DD.toLowerCase(), zD])))
    }

    function Wp(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 1));
      return pD ? (DD.w = +pD[0], wD + pD[0].length) : -1
    }

    function Np(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 1));
      return pD ? (DD.u = +pD[0], wD + pD[0].length) : -1
    }

    function Zp(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 2));
      return pD ? (DD.U = +pD[0], wD + pD[0].length) : -1
    }

    function yp(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 2));
      return pD ? (DD.V = +pD[0], wD + pD[0].length) : -1
    }

    function kp(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 2));
      return pD ? (DD.W = +pD[0], wD + pD[0].length) : -1
    }

    function mp(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 4));
      return pD ? (DD.y = +pD[0], wD + pD[0].length) : -1
    }

    function ep(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 2));
      return pD ? (DD.y = +pD[0] + (+pD[0] > 68 ? 1900 : 2e3), wD + pD[0].length) : -1
    }

    function op(DD, zD, wD) {
      var pD = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(zD.slice(wD, wD + 6));
      return pD ? (DD.Z = pD[1] ? 0 : -(pD[2] + (pD[3] || "00")), wD + pD[0].length) : -1
    }

    function ap(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 1));
      return pD ? (DD.q = 3 * pD[0] - 3, wD + pD[0].length) : -1
    }

    function vp(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 2));
      return pD ? (DD.m = pD[0] - 1, wD + pD[0].length) : -1
    }

    function tp(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 2));
      return pD ? (DD.d = +pD[0], wD + pD[0].length) : -1
    }

    function Fp(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 3));
      return pD ? (DD.m = 0, DD.d = +pD[0], wD + pD[0].length) : -1
    }

    function Yp(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 2));
      return pD ? (DD.H = +pD[0], wD + pD[0].length) : -1
    }

    function Hp(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 2));
      return pD ? (DD.M = +pD[0], wD + pD[0].length) : -1
    }

    function qp(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 2));
      return pD ? (DD.S = +pD[0], wD + pD[0].length) : -1
    }

    function Ds(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 3));
      return pD ? (DD.L = +pD[0], wD + pD[0].length) : -1
    }

    function zs(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD, wD + 6));
      return pD ? (DD.L = Math.floor(pD[0] / 1e3), wD + pD[0].length) : -1
    }

    function ws(DD, zD, wD) {
      var pD = bp.exec(zD.slice(wD, wD + 1));
      return pD ? wD + pD[0].length : -1
    }

    function ps(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD));
      return pD ? (DD.Q = +pD[0], wD + pD[0].length) : -1
    }

    function ss(DD, zD, wD) {
      var pD = Tp.exec(zD.slice(wD));
      return pD ? (DD.s = +pD[0], wD + pD[0].length) : -1
    }

    function Ks(DD, zD) {
      return dp(DD.getDate(), zD, 2)
    }

    function rs(DD, zD) {
      return dp(DD.getHours(), zD, 2)
    }

    function Ls(DD, zD) {
      return dp(DD.getHours() % 12 || 12, zD, 2)
    }

    function cs(DD, zD) {
      return dp(1 + vw.count(Bp(DD), DD), zD, 3)
    }

    function gs(DD, zD) {
      return dp(DD.getMilliseconds(), zD, 3)
    }

    function Rs(DD, zD) {
      return gs(DD, zD) + "000"
    }

    function As(DD, zD) {
      return dp(DD.getMonth() + 1, zD, 2)
    }

    function Us(DD, zD) {
      return dp(DD.getMinutes(), zD, 2)
    }

    function fs(DD, zD) {
      return dp(DD.getSeconds(), zD, 2)
    }

    function Is(DD) {
      var zD = DD.getDay();
      return 0 === zD ? 7 : zD
    }

    function Bs(DD, zD) {
      return dp(Hw.count(Bp(DD) - 1, DD), zD, 2)
    }

    function Gs(DD) {
      var zD = DD.getDay();
      return zD >= 4 || 0 === zD ? wp(DD) : wp.ceil(DD)
    }

    function hs(DD, zD) {
      return DD = Gs(DD), dp(wp.count(Bp(DD), DD) + (4 === Bp(DD).getDay()), zD, 2)
    }

    function ns(DD) {
      return DD.getDay()
    }

    function Ms(DD, zD) {
      return dp(qw.count(Bp(DD) - 1, DD), zD, 2)
    }

    function Os(DD, zD) {
      return dp(DD.getFullYear() % 100, zD, 2)
    }

    function Es(DD, zD) {
      return dp((DD = Gs(DD)).getFullYear() % 100, zD, 2)
    }

    function Qs(DD, zD) {
      return dp(DD.getFullYear() % 1e4, zD, 4)
    }

    function Xs(DD, zD) {
      var wD = DD.getDay();
      return dp((DD = wD >= 4 || 0 === wD ? wp(DD) : wp.ceil(DD)).getFullYear() % 1e4, zD, 4)
    }

    function Vs(DD) {
      var zD = DD.getTimezoneOffset();
      return (zD > 0 ? "-" : (zD *= -1, "+")) + dp(zD / 60 | 0, "0", 2) + dp(zD % 60, "0", 2)
    }

    function Ps(DD, zD) {
      return dp(DD.getUTCDate(), zD, 2)
    }

    function Cs(DD, zD) {
      return dp(DD.getUTCHours(), zD, 2)
    }

    function xs(DD, zD) {
      return dp(DD.getUTCHours() % 12 || 12, zD, 2)
    }

    function Ts(DD, zD) {
      return dp(1 + tw.count(Gp(DD), DD), zD, 3)
    }

    function bs(DD, zD) {
      return dp(DD.getUTCMilliseconds(), zD, 3)
    }

    function ds(DD, zD) {
      return bs(DD, zD) + "000"
    }

    function Ss(DD, zD) {
      return dp(DD.getUTCMonth() + 1, zD, 2)
    }

    function is(DD, zD) {
      return dp(DD.getUTCMinutes(), zD, 2)
    }

    function ls(DD, zD) {
      return dp(DD.getUTCSeconds(), zD, 2)
    }

    function Ws(DD) {
      var zD = DD.getUTCDay();
      return 0 === zD ? 7 : zD
    }

    function Ns(DD, zD) {
      return dp(rp.count(Gp(DD) - 1, DD), zD, 2)
    }

    function Zs(DD) {
      var zD = DD.getUTCDay();
      return zD >= 4 || 0 === zD ? Rp(DD) : Rp.ceil(DD)
    }

    function ys(DD, zD) {
      return DD = Zs(DD), dp(Rp.count(Gp(DD), DD) + (4 === Gp(DD).getUTCDay()), zD, 2)
    }

    function ks(DD) {
      return DD.getUTCDay()
    }

    function ms(DD, zD) {
      return dp(Lp.count(Gp(DD) - 1, DD), zD, 2)
    }

    function es(DD, zD) {
      return dp(DD.getUTCFullYear() % 100, zD, 2)
    }

    function os(DD, zD) {
      return dp((DD = Zs(DD)).getUTCFullYear() % 100, zD, 2)
    }

    function as(DD, zD) {
      return dp(DD.getUTCFullYear() % 1e4, zD, 4)
    }

    function us(DD, zD) {
      var wD = DD.getUTCDay();
      return dp((DD = wD >= 4 || 0 === wD ? Rp(DD) : Rp.ceil(DD)).getUTCFullYear() % 1e4, zD, 4)
    }

    function vs() {
      return "+0000"
    }

    function ts() {
      return "%"
    }

    function Fs(DD) {
      return +DD
    }

    function Ys(DD) {
      return Math.floor(+DD / 1e3)
    }

    function Hs(DD) {
      return new Date(DD)
    }

    function qs(DD) {
      return DD instanceof Date ? +DD : +new Date(+DD)
    }

    function DK(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
      var RD = Cz(),
        AD = RD.invert,
        UD = RD.domain,
        fD = gD(".%L"),
        ID = gD(":%S"),
        BD = gD("%I:%M"),
        GD = gD("%I %p"),
        hD = gD("%a %d"),
        nD = gD("%b %d"),
        MD = gD("%B"),
        OD = gD("%Y");

      function JD(DD) {
        return (cD(DD) < DD ? fD : LD(DD) < DD ? ID : rD(DD) < DD ? BD : KD(DD) < DD ? GD : pD(DD) < DD ? sD(DD) < DD ? hD : nD : wD(DD) < DD ? MD : OD)(DD)
      }
      return RD.invert = function(DD) {
        return new Date(AD(DD))
      }, RD.domain = function(DD) {
        return arguments.length ? UD(Array.from(DD, qs)) : UD().map(Hs)
      }, RD.ticks = function(zD) {
        var wD = UD();
        return DD(wD[0], wD[wD.length - 1], null == zD ? 10 : zD)
      }, RD.tickFormat = function(DD, zD) {
        return null == zD ? JD : gD(zD)
      }, RD.nice = function(DD) {
        var wD = UD();
        return DD && "function" === typeof DD.range || (DD = zD(wD[0], wD[wD.length - 1], null == DD ? 10 : DD)), DD ? UD(Fz(wD, DD)) : RD
      }, RD.copy = function() {
        return Vz(RD, DK(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD))
      }, RD
    }

    function zK() {
      return Tz.d.apply(DK(Op, Jp, Bp, fp, Hw, vw, aw, ew, mw, Pp).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function wK() {
      return Tz.d.apply(DK(np, Mp, Gp, Ip, rp, tw, uw, ow, mw, Cp).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function pK() {
      var DD, zD, wD, pD, sD, KD = 0,
        rD = 1,
        LD = Jz,
        cD = !1;

      function gD(zD) {
        return null == zD || isNaN(zD = +zD) ? sD : LD(0 === wD ? .5 : (zD = (pD(zD) - DD) * wD, cD ? Math.max(0, Math.min(1, zD)) : zD))
      }

      function RD(DD) {
        return function(zD) {
          var wD, pD;
          return arguments.length ? ([wD, pD] = zD, LD = DD(wD, pD), gD) : [LD(0), LD(1)]
        }
      }
      return gD.domain = function(sD) {
          return arguments.length ? ([KD, rD] = sD, DD = pD(KD = +KD), zD = pD(rD = +rD), wD = DD === zD ? 0 : 1 / (zD - DD), gD) : [KD, rD]
        }, gD.clamp = function(DD) {
          return arguments.length ? (cD = !!DD, gD) : cD
        }, gD.interpolator = function(DD) {
          return arguments.length ? (LD = DD, gD) : LD
        }, gD.range = RD(hz), gD.rangeRound = RD(nz), gD.unknown = function(DD) {
          return arguments.length ? (sD = DD, gD) : sD
        },
        function(sD) {
          return pD = sD, DD = sD(KD), zD = sD(rD), wD = DD === zD ? 0 : 1 / (zD - DD), gD
        }
    }

    function sK(DD, zD) {
      return zD.domain(DD.domain()).interpolator(DD.interpolator()).clamp(DD.clamp()).unknown(DD.unknown())
    }

    function KK() {
      var DD = uz(pK()(Jz));
      return DD.copy = function() {
        return sK(DD, KK())
      }, Tz.b.apply(DD, arguments)
    }

    function rK() {
      var DD = pw(pK()).domain([1, 10]);
      return DD.copy = function() {
        return sK(DD, rK()).base(DD.base())
      }, Tz.b.apply(DD, arguments)
    }

    function LK() {
      var DD = Lw(pK());
      return DD.copy = function() {
        return sK(DD, LK()).constant(DD.constant())
      }, Tz.b.apply(DD, arguments)
    }

    function cK() {
      var DD = Iw(pK());
      return DD.copy = function() {
        return sK(DD, cK()).exponent(DD.exponent())
      }, Tz.b.apply(DD, arguments)
    }

    function gK() {
      return cK.apply(null, arguments).exponent(.5)
    }

    function RK() {
      var DD = [],
        zD = Jz;

      function wD(wD) {
        if (null != wD && !isNaN(wD = +wD)) return zD((MD(DD, wD, 1) - 1) / (DD.length - 1))
      }
      return wD.domain = function(zD) {
        if (!arguments.length) return DD.slice();
        DD = [];
        for (let wD of zD) null == wD || isNaN(wD = +wD) || DD.push(wD);
        return DD.sort(UD), wD
      }, wD.interpolator = function(DD) {
        return arguments.length ? (zD = DD, wD) : zD
      }, wD.range = function() {
        return DD.map(((wD, pD) => zD(pD / (DD.length - 1))))
      }, wD.quantiles = function(zD) {
        return Array.from({
          length: zD + 1
        }, ((wD, pD) => Vw(DD, pD / zD)))
      }, wD.copy = function() {
        return RK(zD).domain(DD)
      }, Tz.b.apply(wD, arguments)
    }

    function AK() {
      var DD, zD, wD, pD, sD, KD, rD, LD = 0,
        cD = .5,
        gD = 1,
        RD = 1,
        AD = Jz,
        UD = !1;

      function fD(DD) {
        return isNaN(DD = +DD) ? rD : (DD = .5 + ((DD = +KD(DD)) - zD) * (RD * DD < RD * zD ? pD : sD), AD(UD ? Math.max(0, Math.min(1, DD)) : DD))
      }

      function ID(DD) {
        return function(zD) {
          var wD, pD, sD;
          return arguments.length ? ([wD, pD, sD] = zD, AD = function(DD, zD) {
            void 0 === zD && (zD = DD, DD = hz);
            for (var wD = 0, pD = zD.length - 1, sD = zD[0], KD = new Array(pD < 0 ? 0 : pD); wD < pD;) KD[wD] = DD(sD, sD = zD[++wD]);
            return function(DD) {
              var zD = Math.max(0, Math.min(pD - 1, Math.floor(DD *= pD)));
              return KD[zD](DD - zD)
            }
          }(DD, [wD, pD, sD]), fD) : [AD(0), AD(.5), AD(1)]
        }
      }
      return fD.domain = function(rD) {
          return arguments.length ? ([LD, cD, gD] = rD, DD = KD(LD = +LD), zD = KD(cD = +cD), wD = KD(gD = +gD), pD = DD === zD ? 0 : .5 / (zD - DD), sD = zD === wD ? 0 : .5 / (wD - zD), RD = zD < DD ? -1 : 1, fD) : [LD, cD, gD]
        }, fD.clamp = function(DD) {
          return arguments.length ? (UD = !!DD, fD) : UD
        }, fD.interpolator = function(DD) {
          return arguments.length ? (AD = DD, fD) : AD
        }, fD.range = ID(hz), fD.rangeRound = ID(nz), fD.unknown = function(DD) {
          return arguments.length ? (rD = DD, fD) : rD
        },
        function(rD) {
          return KD = rD, DD = rD(LD), zD = rD(cD), wD = rD(gD), pD = DD === zD ? 0 : .5 / (zD - DD), sD = zD === wD ? 0 : .5 / (wD - zD), RD = zD < DD ? -1 : 1, fD
        }
    }

    function UK() {
      var DD = uz(AK()(Jz));
      return DD.copy = function() {
        return sK(DD, UK())
      }, Tz.b.apply(DD, arguments)
    }

    function fK() {
      var DD = pw(AK()).domain([.1, 1, 10]);
      return DD.copy = function() {
        return sK(DD, fK()).base(DD.base())
      }, Tz.b.apply(DD, arguments)
    }

    function IK() {
      var DD = Lw(AK());
      return DD.copy = function() {
        return sK(DD, IK()).constant(DD.constant())
      }, Tz.b.apply(DD, arguments)
    }

    function BK() {
      var DD = Iw(AK());
      return DD.copy = function() {
        return sK(DD, BK()).exponent(DD.exponent())
      }, Tz.b.apply(DD, arguments)
    }

    function GK() {
      return BK.apply(null, arguments).exponent(.5)
    }

    function hK(DD, zD) {
      if ((sD = DD.length) > 1)
        for (var wD, pD, sD, KD = 1, rD = DD[zD[0]], LD = rD.length; KD < sD; ++KD)
          for (pD = rD, rD = DD[zD[KD]], wD = 0; wD < LD; ++wD) rD[wD][1] += rD[wD][0] = isNaN(pD[wD][1]) ? pD[wD][0] : pD[wD][1]
    }! function(DD) {
      Vp = function(DD) {
        var zD = DD.dateTime,
          wD = DD.date,
          pD = DD.time,
          sD = DD.periods,
          KD = DD.days,
          rD = DD.shortDays,
          LD = DD.months,
          cD = DD.shortMonths,
          gD = ip(sD),
          RD = lp(sD),
          AD = ip(KD),
          UD = lp(KD),
          fD = ip(rD),
          ID = lp(rD),
          BD = ip(LD),
          GD = lp(LD),
          hD = ip(cD),
          nD = lp(cD),
          MD = {
            a: function(DD) {
              return rD[DD.getDay()]
            },
            A: function(DD) {
              return KD[DD.getDay()]
            },
            b: function(DD) {
              return cD[DD.getMonth()]
            },
            B: function(DD) {
              return LD[DD.getMonth()]
            },
            c: null,
            d: Ks,
            e: Ks,
            f: Rs,
            g: Es,
            G: Xs,
            H: rs,
            I: Ls,
            j: cs,
            L: gs,
            m: As,
            M: Us,
            p: function(DD) {
              return sD[+(DD.getHours() >= 12)]
            },
            q: function(DD) {
              return 1 + ~~(DD.getMonth() / 3)
            },
            Q: Fs,
            s: Ys,
            S: fs,
            u: Is,
            U: Bs,
            V: hs,
            w: ns,
            W: Ms,
            x: null,
            X: null,
            y: Os,
            Y: Qs,
            Z: Vs,
            "%": ts
          },
          OD = {
            a: function(DD) {
              return rD[DD.getUTCDay()]
            },
            A: function(DD) {
              return KD[DD.getUTCDay()]
            },
            b: function(DD) {
              return cD[DD.getUTCMonth()]
            },
            B: function(DD) {
              return LD[DD.getUTCMonth()]
            },
            c: null,
            d: Ps,
            e: Ps,
            f: ds,
            g: os,
            G: us,
            H: Cs,
            I: xs,
            j: Ts,
            L: bs,
            m: Ss,
            M: is,
            p: function(DD) {
              return sD[+(DD.getUTCHours() >= 12)]
            },
            q: function(DD) {
              return 1 + ~~(DD.getUTCMonth() / 3)
            },
            Q: Fs,
            s: Ys,
            S: ls,
            u: Ws,
            U: Ns,
            V: ys,
            w: ks,
            W: ms,
            x: null,
            X: null,
            y: es,
            Y: as,
            Z: vs,
            "%": ts
          },
          JD = {
            a: function(DD, zD, wD) {
              var pD = fD.exec(zD.slice(wD));
              return pD ? (DD.w = ID.get(pD[0].toLowerCase()), wD + pD[0].length) : -1
            },
            A: function(DD, zD, wD) {
              var pD = AD.exec(zD.slice(wD));
              return pD ? (DD.w = UD.get(pD[0].toLowerCase()), wD + pD[0].length) : -1
            },
            b: function(DD, zD, wD) {
              var pD = hD.exec(zD.slice(wD));
              return pD ? (DD.m = nD.get(pD[0].toLowerCase()), wD + pD[0].length) : -1
            },
            B: function(DD, zD, wD) {
              var pD = BD.exec(zD.slice(wD));
              return pD ? (DD.m = GD.get(pD[0].toLowerCase()), wD + pD[0].length) : -1
            },
            c: function(DD, wD, pD) {
              return XD(DD, zD, wD, pD)
            },
            d: tp,
            e: tp,
            f: zs,
            g: ep,
            G: mp,
            H: Yp,
            I: Yp,
            j: Fp,
            L: Ds,
            m: vp,
            M: Hp,
            p: function(DD, zD, wD) {
              var pD = gD.exec(zD.slice(wD));
              return pD ? (DD.p = RD.get(pD[0].toLowerCase()), wD + pD[0].length) : -1
            },
            q: ap,
            Q: ps,
            s: ss,
            S: qp,
            u: Np,
            U: Zp,
            V: yp,
            w: Wp,
            W: kp,
            x: function(DD, zD, pD) {
              return XD(DD, wD, zD, pD)
            },
            X: function(DD, zD, wD) {
              return XD(DD, pD, zD, wD)
            },
            y: ep,
            Y: mp,
            Z: op,
            "%": ws
          };

        function ED(DD, zD) {
          return function(wD) {
            var pD, sD, KD, rD = [],
              LD = -1,
              cD = 0,
              gD = DD.length;
            for (wD instanceof Date || (wD = new Date(+wD)); ++LD < gD;) 37 === DD.charCodeAt(LD) && (rD.push(DD.slice(cD, LD)), null != (sD = xp[pD = DD.charAt(++LD)]) ? pD = DD.charAt(++LD) : sD = "e" === pD ? " " : "0", (KD = zD[pD]) && (pD = KD(wD, sD)), rD.push(pD), cD = LD + 1);
            return rD.push(DD.slice(cD, LD)), rD.join("")
          }
        }

        function QD(DD, zD) {
          return function(wD) {
            var pD, sD, KD = Xp(1900, void 0, 1);
            if (XD(KD, DD, wD += "", 0) != wD.length) return null;
            if ("Q" in KD) return new Date(KD.Q);
            if ("s" in KD) return new Date(1e3 * KD.s + ("L" in KD ? KD.L : 0));
            if (zD && !("Z" in KD) && (KD.Z = 0), "p" in KD && (KD.H = KD.H % 12 + 12 * KD.p), void 0 === KD.m && (KD.m = "q" in KD ? KD.q : 0), "V" in KD) {
              if (KD.V < 1 || KD.V > 53) return null;
              "w" in KD || (KD.w = 1), "Z" in KD ? (sD = (pD = Qp(Xp(KD.y, 0, 1))).getUTCDay(), pD = sD > 4 || 0 === sD ? Lp.ceil(pD) : Lp(pD), pD = tw.offset(pD, 7 * (KD.V - 1)), KD.y = pD.getUTCFullYear(), KD.m = pD.getUTCMonth(), KD.d = pD.getUTCDate() + (KD.w + 6) % 7) : (sD = (pD = Ep(Xp(KD.y, 0, 1))).getDay(), pD = sD > 4 || 0 === sD ? qw.ceil(pD) : qw(pD), pD = vw.offset(pD, 7 * (KD.V - 1)), KD.y = pD.getFullYear(), KD.m = pD.getMonth(), KD.d = pD.getDate() + (KD.w + 6) % 7)
            } else("W" in KD || "U" in KD) && ("w" in KD || (KD.w = "u" in KD ? KD.u % 7 : "W" in KD ? 1 : 0), sD = "Z" in KD ? Qp(Xp(KD.y, 0, 1)).getUTCDay() : Ep(Xp(KD.y, 0, 1)).getDay(), KD.m = 0, KD.d = "W" in KD ? (KD.w + 6) % 7 + 7 * KD.W - (sD + 5) % 7 : KD.w + 7 * KD.U - (sD + 6) % 7);
            return "Z" in KD ? (KD.H += KD.Z / 100 | 0, KD.M += KD.Z % 100, Qp(KD)) : Ep(KD)
          }
        }

        function XD(DD, zD, wD, pD) {
          for (var sD, KD, rD = 0, LD = zD.length, cD = wD.length; rD < LD;) {
            if (pD >= cD) return -1;
            if (37 === (sD = zD.charCodeAt(rD++))) {
              if (sD = zD.charAt(rD++), !(KD = JD[sD in xp ? zD.charAt(rD++) : sD]) || (pD = KD(DD, wD, pD)) < 0) return -1
            } else if (sD != wD.charCodeAt(pD++)) return -1
          }
          return pD
        }
        return MD.x = ED(wD, MD), MD.X = ED(pD, MD), MD.c = ED(zD, MD), OD.x = ED(wD, OD), OD.X = ED(pD, OD), OD.c = ED(zD, OD), {
          format: function(DD) {
            var zD = ED(DD += "", MD);
            return zD.toString = function() {
              return DD
            }, zD
          },
          parse: function(DD) {
            var zD = QD(DD += "", !1);
            return zD.toString = function() {
              return DD
            }, zD
          },
          utcFormat: function(DD) {
            var zD = ED(DD += "", OD);
            return zD.toString = function() {
              return DD
            }, zD
          },
          utcParse: function(DD) {
            var zD = QD(DD += "", !0);
            return zD.toString = function() {
              return DD
            }, zD
          }
        }
      }(DD), Pp = Vp.format, Vp.parse, Cp = Vp.utcFormat, Vp.utcParse
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
    var nK = wD(6259),
      MK = wD(6131);

    function OK(DD) {
      for (var zD = DD.length, wD = new Array(zD); --zD >= 0;) wD[zD] = zD;
      return wD
    }

    function JK(DD, zD) {
      return DD[zD]
    }

    function EK(DD) {
      const zD = [];
      return zD.key = DD, zD
    }
    var QK = wD(6206),
      XK = wD.n(QK),
      VK = wD(6212),
      PK = wD.n(VK),
      CK = wD(5478),
      xK = wD.n(CK),
      TK = wD(5333),
      bK = wD.n(TK),
      jK = wD(5232),
      dK = wD.n(jK),
      SK = wD(5254),
      iK = wD.n(SK),
      lK = wD(6221),
      WK = wD.n(lK),
      NK = wD(5241),
      ZK = wD.n(NK),
      yK = wD(6089),
      kK = wD.n(yK),
      mK = wD(6239),
      eK = wD.n(mK),
      oK = wD(5565),
      aK = wD.n(oK),
      uK = wD(6242),
      vK = wD.n(uK);

    function tK(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return FK(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(DD)) return Array.from(DD)
      }(DD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return FK(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return FK(DD, zD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function FK(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }
    var YK = function(DD) {
        return DD
      },
      HK = {
        "@@functional/placeholder": !0
      },
      qK = function(DD) {
        return DD === HK
      },
      Dr = function(DD) {
        return function zD() {
          return 0 === arguments.length || 1 === arguments.length && qK(arguments.length <= 0 ? void 0 : arguments[0]) ? zD : DD.apply(void 0, arguments)
        }
      },
      zr = function DD(zD, wD) {
        return 1 === zD ? wD : Dr((function() {
          for (var pD = arguments.length, sD = new Array(pD), KD = 0; KD < pD; KD++) sD[KD] = arguments[KD];
          var rD = sD.filter((function(DD) {
            return DD !== HK
          })).length;
          return rD >= zD ? wD.apply(void 0, sD) : DD(zD - rD, Dr((function() {
            for (var DD = arguments.length, zD = new Array(DD), pD = 0; pD < DD; pD++) zD[pD] = arguments[pD];
            var KD = sD.map((function(DD) {
              return qK(DD) ? zD.shift() : DD
            }));
            return wD.apply(void 0, tK(KD).concat(zD))
          })))
        }))
      },
      wr = function(DD) {
        return zr(DD.length, DD)
      },
      pr = function(DD, zD) {
        for (var wD = [], pD = DD; pD < zD; ++pD) wD[pD - DD] = pD;
        return wD
      },
      sr = wr((function(DD, zD) {
        return Array.isArray(zD) ? zD.map(DD) : Object.keys(zD).map((function(DD) {
          return zD[DD]
        })).map(DD)
      })),
      Kr = function() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        if (!zD.length) return YK;
        var pD = zD.reverse(),
          sD = pD[0],
          KD = pD.slice(1);
        return function() {
          return KD.reduce((function(DD, zD) {
            return zD(DD)
          }), sD.apply(void 0, arguments))
        }
      },
      rr = function(DD) {
        return Array.isArray(DD) ? DD.reverse() : DD.split("").reverse.join("")
      },
      Lr = function(DD) {
        var zD = null,
          wD = null;
        return function() {
          for (var pD = arguments.length, sD = new Array(pD), KD = 0; KD < pD; KD++) sD[KD] = arguments[KD];
          return zD && sD.every((function(DD, wD) {
            return DD === zD[wD]
          })) ? wD : (zD = sD, wD = DD.apply(void 0, sD))
        }
      };
    const cr = {
      rangeStep: function(DD, zD, wD) {
        for (var pD = new(vK())(DD), sD = 0, KD = []; pD.lt(zD) && sD < 1e5;) KD.push(pD.toNumber()), pD = pD.add(wD), sD++;
        return KD
      },
      getDigitCount: function(DD) {
        return 0 === DD ? 1 : Math.floor(new(vK())(DD).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: wr((function(DD, zD, wD) {
        var pD = +DD;
        return pD + wD * (+zD - pD)
      })),
      uninterpolateNumber: wr((function(DD, zD, wD) {
        var pD = zD - +DD;
        return (wD - DD) / (pD = pD || 1 / 0)
      })),
      uninterpolateTruncation: wr((function(DD, zD, wD) {
        var pD = zD - +DD;
        return pD = pD || 1 / 0, Math.max(0, Math.min(1, (wD - DD) / pD))
      }))
    };

    function gr(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return Ur(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(DD)) return Array.from(DD)
      }(DD) || Ar(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Rr(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(DD))) return;
        var wD = [],
          pD = !0,
          sD = !1,
          KD = void 0;
        try {
          for (var rD, LD = DD[Symbol.iterator](); !(pD = (rD = LD.next()).done) && (wD.push(rD.value), !zD || wD.length !== zD); pD = !0);
        } catch (cD) {
          sD = !0, KD = cD
        } finally {
          try {
            pD || null == LD.return || LD.return()
          } finally {
            if (sD) throw KD
          }
        }
        return wD
      }(DD, zD) || Ar(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ar(DD, zD) {
      if (DD) {
        if ("string" === typeof DD) return Ur(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        return "Object" === wD && DD.constructor && (wD = DD.constructor.name), "Map" === wD || "Set" === wD ? Array.from(DD) : "Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD) ? Ur(DD, zD) : void 0
      }
    }

    function Ur(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function fr(DD) {
      var zD = Rr(DD, 2),
        wD = zD[0],
        pD = zD[1],
        sD = wD,
        KD = pD;
      return wD > pD && (sD = pD, KD = wD), [sD, KD]
    }

    function Ir(DD, zD, wD) {
      if (DD.lte(0)) return new(vK())(0);
      var pD = cr.getDigitCount(DD.toNumber()),
        sD = new(vK())(10).pow(pD),
        KD = DD.div(sD),
        rD = 1 !== pD ? .05 : .1,
        LD = new(vK())(Math.ceil(KD.div(rD).toNumber())).add(wD).mul(rD).mul(sD);
      return zD ? LD : new(vK())(Math.ceil(LD))
    }

    function Br(DD, zD, wD) {
      var pD = 1,
        sD = new(vK())(DD);
      if (!sD.isint() && wD) {
        var KD = Math.abs(DD);
        KD < 1 ? (pD = new(vK())(10).pow(cr.getDigitCount(DD) - 1), sD = new(vK())(Math.floor(sD.div(pD).toNumber())).mul(pD)) : KD > 1 && (sD = new(vK())(Math.floor(DD)))
      } else 0 === DD ? sD = new(vK())(Math.floor((zD - 1) / 2)) : wD || (sD = new(vK())(Math.floor(DD)));
      var rD = Math.floor((zD - 1) / 2);
      return Kr(sr((function(DD) {
        return sD.add(new(vK())(DD - rD).mul(pD)).toNumber()
      })), pr)(0, zD)
    }

    function Gr(DD, zD, wD, pD) {
      var sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((zD - DD) / (wD - 1))) return {
        step: new(vK())(0),
        tickMin: new(vK())(0),
        tickMax: new(vK())(0)
      };
      var KD, rD = Ir(new(vK())(zD).sub(DD).div(wD - 1), pD, sD);
      KD = DD <= 0 && zD >= 0 ? new(vK())(0) : (KD = new(vK())(DD).add(zD).div(2)).sub(new(vK())(KD).mod(rD));
      var LD = Math.ceil(KD.sub(DD).div(rD).toNumber()),
        cD = Math.ceil(new(vK())(zD).sub(KD).div(rD).toNumber()),
        gD = LD + cD + 1;
      return gD > wD ? Gr(DD, zD, wD, pD, sD + 1) : (gD < wD && (cD = zD > 0 ? cD + (wD - gD) : cD, LD = zD > 0 ? LD : LD + (wD - gD)), {
        step: rD,
        tickMin: KD.sub(new(vK())(LD).mul(rD)),
        tickMax: KD.add(new(vK())(cD).mul(rD))
      })
    }
    var hr = Lr((function(DD) {
        var zD = Rr(DD, 2),
          wD = zD[0],
          pD = zD[1],
          sD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          KD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          rD = Math.max(sD, 2),
          LD = Rr(fr([wD, pD]), 2),
          cD = LD[0],
          gD = LD[1];
        if (cD === -1 / 0 || gD === 1 / 0) {
          var RD = gD === 1 / 0 ? [cD].concat(gr(pr(0, sD - 1).map((function() {
            return 1 / 0
          })))) : [].concat(gr(pr(0, sD - 1).map((function() {
            return -1 / 0
          }))), [gD]);
          return wD > pD ? rr(RD) : RD
        }
        if (cD === gD) return Br(cD, sD, KD);
        var AD = Gr(cD, gD, rD, KD),
          UD = AD.step,
          fD = AD.tickMin,
          ID = AD.tickMax,
          BD = cr.rangeStep(fD, ID.add(new(vK())(.1).mul(UD)), UD);
        return wD > pD ? rr(BD) : BD
      })),
      nr = (Lr((function(DD) {
        var zD = Rr(DD, 2),
          wD = zD[0],
          pD = zD[1],
          sD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          KD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          rD = Math.max(sD, 2),
          LD = Rr(fr([wD, pD]), 2),
          cD = LD[0],
          gD = LD[1];
        if (cD === -1 / 0 || gD === 1 / 0) return [wD, pD];
        if (cD === gD) return Br(cD, sD, KD);
        var RD = Ir(new(vK())(gD).sub(cD).div(rD - 1), KD, 0),
          AD = Kr(sr((function(DD) {
            return new(vK())(cD).add(new(vK())(DD).mul(RD)).toNumber()
          })), pr)(0, rD).filter((function(DD) {
            return DD >= cD && DD <= gD
          }));
        return wD > pD ? rr(AD) : AD
      })), Lr((function(DD, zD) {
        var wD = Rr(DD, 2),
          pD = wD[0],
          sD = wD[1],
          KD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          rD = Rr(fr([pD, sD]), 2),
          LD = rD[0],
          cD = rD[1];
        if (LD === -1 / 0 || cD === 1 / 0) return [pD, sD];
        if (LD === cD) return [LD];
        var gD = Math.max(zD, 2),
          RD = Ir(new(vK())(cD).sub(LD).div(gD - 1), KD, 0),
          AD = [].concat(gr(cr.rangeStep(new(vK())(LD), new(vK())(cD).sub(new(vK())(.99).mul(RD)), RD)), [cD]);
        return pD > sD ? rr(AD) : AD
      }))),
      Mr = wD(6248),
      Or = wD(5223),
      Jr = wD(5484),
      Er = wD(6250);

    function Qr(DD) {
      return Qr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, Qr(DD)
    }

    function Xr(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return Vr(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || function(DD, zD) {
        if (!DD) return;
        if ("string" === typeof DD) return Vr(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === wD && DD.constructor && (wD = DD.constructor.name);
        if ("Map" === wD || "Set" === wD) return Array.from(DD);
        if ("Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD)) return Vr(DD, zD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Vr(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function Pr(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function Cr(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? Pr(Object(wD), !0).forEach((function(zD) {
          xr(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : Pr(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function xr(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != Qr(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != Qr(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == Qr(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function Tr(DD, zD, wD) {
      return xK()(DD) || xK()(zD) ? wD : (0, Or.x)(zD) ? iK()(DD, zD, wD) : bK()(zD) ? zD(DD) : wD
    }

    function br(DD, zD, wD, pD) {
      var sD = WK()(DD, (function(DD) {
        return Tr(DD, zD)
      }));
      if ("number" === wD) {
        var KD = sD.filter((function(DD) {
          return (0, Or.y)(DD) || parseFloat(DD)
        }));
        return KD.length ? [PK()(KD), XK()(KD)] : [1 / 0, -1 / 0]
      }
      return (pD ? sD.filter((function(DD) {
        return !xK()(DD)
      })) : sD).map((function(DD) {
        return (0, Or.x)(DD) || DD instanceof Date ? DD : ""
      }))
    }
    var jr = function(DD) {
        var zD, wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          pD = arguments.length > 2 ? arguments[2] : void 0,
          sD = arguments.length > 3 ? arguments[3] : void 0,
          KD = -1,
          rD = null !== (zD = null === wD || void 0 === wD ? void 0 : wD.length) && void 0 !== zD ? zD : 0;
        if (rD <= 1) return 0;
        if (sD && "angleAxis" === sD.axisType && Math.abs(Math.abs(sD.range[1] - sD.range[0]) - 360) <= 1e-6)
          for (var LD = sD.range, cD = 0; cD < rD; cD++) {
            var gD = cD > 0 ? pD[cD - 1].coordinate : pD[rD - 1].coordinate,
              RD = pD[cD].coordinate,
              AD = cD >= rD - 1 ? pD[0].coordinate : pD[cD + 1].coordinate,
              UD = void 0;
            if ((0, Or.F)(RD - gD) !== (0, Or.F)(AD - RD)) {
              var fD = [];
              if ((0, Or.F)(AD - RD) === (0, Or.F)(LD[1] - LD[0])) {
                UD = AD;
                var ID = RD + LD[1] - LD[0];
                fD[0] = Math.min(ID, (ID + gD) / 2), fD[1] = Math.max(ID, (ID + gD) / 2)
              } else {
                UD = gD;
                var BD = AD + LD[1] - LD[0];
                fD[0] = Math.min(RD, (BD + RD) / 2), fD[1] = Math.max(RD, (BD + RD) / 2)
              }
              var GD = [Math.min(RD, (UD + RD) / 2), Math.max(RD, (UD + RD) / 2)];
              if (DD > GD[0] && DD <= GD[1] || DD >= fD[0] && DD <= fD[1]) {
                KD = pD[cD].index;
                break
              }
            } else {
              var hD = Math.min(gD, AD),
                nD = Math.max(gD, AD);
              if (DD > (hD + RD) / 2 && DD <= (nD + RD) / 2) {
                KD = pD[cD].index;
                break
              }
            }
          } else
            for (var MD = 0; MD < rD; MD++)
              if (0 === MD && DD <= (wD[MD].coordinate + wD[MD + 1].coordinate) / 2 || MD > 0 && MD < rD - 1 && DD > (wD[MD].coordinate + wD[MD - 1].coordinate) / 2 && DD <= (wD[MD].coordinate + wD[MD + 1].coordinate) / 2 || MD === rD - 1 && DD > (wD[MD].coordinate + wD[MD - 1].coordinate) / 2) {
                KD = wD[MD].index;
                break
              } return KD
      },
      dr = function(DD) {
        var zD, wD, pD = DD.type.displayName,
          sD = null !== (zD = DD.type) && void 0 !== zD && zD.defaultProps ? Cr(Cr({}, DD.type.defaultProps), DD.props) : DD.props,
          KD = sD.stroke,
          rD = sD.fill;
        switch (pD) {
          case "Line":
            wD = KD;
            break;
          case "Area":
          case "Radar":
            wD = KD && "none" !== KD ? KD : rD;
            break;
          default:
            wD = rD
        }
        return wD
      },
      Sr = function(DD) {
        var zD = DD.barSize,
          wD = DD.totalSize,
          pD = DD.stackGroups,
          sD = void 0 === pD ? {} : pD;
        if (!sD) return {};
        for (var KD = {}, rD = Object.keys(sD), LD = 0, cD = rD.length; LD < cD; LD++)
          for (var gD = sD[rD[LD]].stackGroups, RD = Object.keys(gD), AD = 0, UD = RD.length; AD < UD; AD++) {
            var fD = gD[RD[AD]],
              ID = fD.items,
              BD = fD.cateAxisId,
              GD = ID.filter((function(DD) {
                return (0, Jr.j)(DD.type).indexOf("Bar") >= 0
              }));
            if (GD && GD.length) {
              var hD = GD[0].type.defaultProps,
                nD = void 0 !== hD ? Cr(Cr({}, hD), GD[0].props) : GD[0].props,
                MD = nD.barSize,
                OD = nD[BD];
              KD[OD] || (KD[OD] = []);
              var JD = xK()(MD) ? zD : MD;
              KD[OD].push({
                item: GD[0],
                stackList: GD.slice(1),
                barSize: xK()(JD) ? void 0 : (0, Or.n)(JD, wD, 0)
              })
            }
          }
        return KD
      },
      ir = function(DD) {
        var zD = DD.barGap,
          wD = DD.barCategoryGap,
          pD = DD.bandSize,
          sD = DD.sizeList,
          KD = void 0 === sD ? [] : sD,
          rD = DD.maxBarSize,
          LD = KD.length;
        if (LD < 1) return null;
        var cD, gD = (0, Or.n)(zD, pD, 0, !0),
          RD = [];
        if (KD[0].barSize === +KD[0].barSize) {
          var AD = !1,
            UD = pD / LD,
            fD = KD.reduce((function(DD, zD) {
              return DD + zD.barSize || 0
            }), 0);
          (fD += (LD - 1) * gD) >= pD && (fD -= (LD - 1) * gD, gD = 0), fD >= pD && UD > 0 && (AD = !0, fD = LD * (UD *= .9));
          var ID = {
            offset: ((pD - fD) / 2 | 0) - gD,
            size: 0
          };
          cD = KD.reduce((function(DD, zD) {
            var wD = {
                item: zD.item,
                position: {
                  offset: ID.offset + ID.size + gD,
                  size: AD ? UD : zD.barSize
                }
              },
              pD = [].concat(Xr(DD), [wD]);
            return ID = pD[pD.length - 1].position, zD.stackList && zD.stackList.length && zD.stackList.forEach((function(DD) {
              pD.push({
                item: DD,
                position: ID
              })
            })), pD
          }), RD)
        } else {
          var BD = (0, Or.n)(wD, pD, 0, !0);
          pD - 2 * BD - (LD - 1) * gD <= 0 && (gD = 0);
          var GD = (pD - 2 * BD - (LD - 1) * gD) / LD;
          GD > 1 && (GD >>= 0);
          var hD = rD === +rD ? Math.min(GD, rD) : GD;
          cD = KD.reduce((function(DD, zD, wD) {
            var pD = [].concat(Xr(DD), [{
              item: zD.item,
              position: {
                offset: BD + (GD + gD) * wD + (GD - hD) / 2,
                size: hD
              }
            }]);
            return zD.stackList && zD.stackList.length && zD.stackList.forEach((function(DD) {
              pD.push({
                item: DD,
                position: pD[pD.length - 1].position
              })
            })), pD
          }), RD)
        }
        return cD
      },
      lr = function(DD, zD, wD, pD) {
        var sD = wD.children,
          KD = wD.width,
          rD = wD.margin,
          LD = KD - (rD.left || 0) - (rD.right || 0),
          cD = (0, Er.e)({
            children: sD,
            legendWidth: LD
          });
        if (cD) {
          var gD = pD || {},
            RD = gD.width,
            AD = gD.height,
            UD = cD.align,
            fD = cD.verticalAlign,
            ID = cD.layout;
          if (("vertical" === ID || "horizontal" === ID && "middle" === fD) && "center" !== UD && (0, Or.y)(DD[UD])) return Cr(Cr({}, DD), {}, xr({}, UD, DD[UD] + (RD || 0)));
          if (("horizontal" === ID || "vertical" === ID && "center" === UD) && "middle" !== fD && (0, Or.y)(DD[fD])) return Cr(Cr({}, DD), {}, xr({}, fD, DD[fD] + (AD || 0)))
        }
        return DD
      },
      Wr = function(DD, zD, wD, pD, sD) {
        var KD = zD.props.children,
          rD = (0, Jr.g)(KD, Mr.d).filter((function(DD) {
            return function(DD, zD, wD) {
              return !!xK()(zD) || ("horizontal" === DD ? "yAxis" === zD : "vertical" === DD || "x" === wD ? "xAxis" === zD : "y" !== wD || "yAxis" === zD)
            }(pD, sD, DD.props.direction)
          }));
        if (rD && rD.length) {
          var LD = rD.map((function(DD) {
            return DD.props.dataKey
          }));
          return DD.reduce((function(DD, zD) {
            var pD = Tr(zD, wD);
            if (xK()(pD)) return DD;
            var sD = Array.isArray(pD) ? [PK()(pD), XK()(pD)] : [pD, pD],
              KD = LD.reduce((function(DD, wD) {
                var pD = Tr(zD, wD, 0),
                  KD = sD[0] - Math.abs(Array.isArray(pD) ? pD[0] : pD),
                  rD = sD[1] + Math.abs(Array.isArray(pD) ? pD[1] : pD);
                return [Math.min(KD, DD[0]), Math.max(rD, DD[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(KD[0], DD[0]), Math.max(KD[1], DD[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      Nr = function(DD, zD, wD, pD, sD) {
        var KD = zD.map((function(zD) {
          return Wr(DD, zD, wD, sD, pD)
        })).filter((function(DD) {
          return !xK()(DD)
        }));
        return KD && KD.length ? KD.reduce((function(DD, zD) {
          return [Math.min(DD[0], zD[0]), Math.max(DD[1], zD[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      Zr = function(DD, zD, wD, pD, sD) {
        var KD = zD.map((function(zD) {
          var KD = zD.props.dataKey;
          return "number" === wD && KD && Wr(DD, zD, KD, pD) || br(DD, KD, wD, sD)
        }));
        if ("number" === wD) return KD.reduce((function(DD, zD) {
          return [Math.min(DD[0], zD[0]), Math.max(DD[1], zD[1])]
        }), [1 / 0, -1 / 0]);
        var rD = {};
        return KD.reduce((function(DD, zD) {
          for (var wD = 0, pD = zD.length; wD < pD; wD++) rD[zD[wD]] || (rD[zD[wD]] = !0, DD.push(zD[wD]));
          return DD
        }), [])
      },
      yr = function(DD, zD) {
        return "horizontal" === DD && "xAxis" === zD || "vertical" === DD && "yAxis" === zD || "centric" === DD && "angleAxis" === zD || "radial" === DD && "radiusAxis" === zD
      },
      kr = function(DD, zD, wD, pD) {
        if (pD) return DD.map((function(DD) {
          return DD.coordinate
        }));
        var sD, KD, rD = DD.map((function(DD) {
          return DD.coordinate === zD && (sD = !0), DD.coordinate === wD && (KD = !0), DD.coordinate
        }));
        return sD || rD.push(zD), KD || rD.push(wD), rD
      },
      mr = function(DD, zD, wD) {
        if (!DD) return null;
        var pD = DD.scale,
          sD = DD.duplicateDomain,
          KD = DD.type,
          rD = DD.range,
          LD = "scaleBand" === DD.realScaleType ? pD.bandwidth() / 2 : 2,
          cD = (zD || wD) && "category" === KD && pD.bandwidth ? pD.bandwidth() / LD : 0;
        return cD = "angleAxis" === DD.axisType && (null === rD || void 0 === rD ? void 0 : rD.length) >= 2 ? 2 * (0, Or.F)(rD[0] - rD[1]) * cD : cD, zD && (DD.ticks || DD.niceTicks) ? (DD.ticks || DD.niceTicks).map((function(DD) {
          var zD = sD ? sD.indexOf(DD) : DD;
          return {
            coordinate: pD(zD) + cD,
            value: DD,
            offset: cD
          }
        })).filter((function(DD) {
          return !ZK()(DD.coordinate)
        })) : DD.isCategorical && DD.categoricalDomain ? DD.categoricalDomain.map((function(DD, zD) {
          return {
            coordinate: pD(DD) + cD,
            value: DD,
            index: zD,
            offset: cD
          }
        })) : pD.ticks && !wD ? pD.ticks(DD.tickCount).map((function(DD) {
          return {
            coordinate: pD(DD) + cD,
            value: DD,
            offset: cD
          }
        })) : pD.domain().map((function(DD, zD) {
          return {
            coordinate: pD(DD) + cD,
            value: sD ? sD[DD] : DD,
            index: zD,
            offset: cD
          }
        }))
      },
      er = new WeakMap,
      or = function(DD, zD) {
        if ("function" !== typeof zD) return DD;
        er.has(DD) || er.set(DD, new WeakMap);
        var wD = er.get(DD);
        if (wD.has(zD)) return wD.get(zD);
        var pD = function() {
          DD.apply(void 0, arguments), zD.apply(void 0, arguments)
        };
        return wD.set(zD, pD), pD
      },
      ar = function(DD, zD, wD) {
        var KD = DD.scale,
          rD = DD.type,
          LD = DD.layout,
          cD = DD.axisType;
        if ("auto" === KD) return "radial" === LD && "radiusAxis" === cD ? {
          scale: sD.e(),
          realScaleType: "band"
        } : "radial" === LD && "angleAxis" === cD ? {
          scale: vz(),
          realScaleType: "linear"
        } : "category" === rD && zD && (zD.indexOf("LineChart") >= 0 || zD.indexOf("AreaChart") >= 0 || zD.indexOf("ComposedChart") >= 0 && !wD) ? {
          scale: sD.i(),
          realScaleType: "point"
        } : "category" === rD ? {
          scale: sD.e(),
          realScaleType: "band"
        } : {
          scale: vz(),
          realScaleType: "linear"
        };
        if (dK()(KD)) {
          var gD = "scale".concat(kK()(KD));
          return {
            scale: (pD[gD] || sD.i)(),
            realScaleType: pD[gD] ? gD : "point"
          }
        }
        return bK()(KD) ? {
          scale: KD
        } : {
          scale: sD.i(),
          realScaleType: "point"
        }
      },
      ur = 1e-4,
      vr = function(DD) {
        var zD = DD.domain();
        if (zD && !(zD.length <= 2)) {
          var wD = zD.length,
            pD = DD.range(),
            sD = Math.min(pD[0], pD[1]) - ur,
            KD = Math.max(pD[0], pD[1]) + ur,
            rD = DD(zD[0]),
            LD = DD(zD[wD - 1]);
          (rD < sD || rD > KD || LD < sD || LD > KD) && DD.domain([zD[0], zD[wD - 1]])
        }
      },
      tr = function(DD, zD) {
        if (!DD) return null;
        for (var wD = 0, pD = DD.length; wD < pD; wD++)
          if (DD[wD].item === zD) return DD[wD].position;
        return null
      },
      Fr = function(DD, zD) {
        if (!zD || 2 !== zD.length || !(0, Or.y)(zD[0]) || !(0, Or.y)(zD[1])) return DD;
        var wD = Math.min(zD[0], zD[1]),
          pD = Math.max(zD[0], zD[1]),
          sD = [DD[0], DD[1]];
        return (!(0, Or.y)(DD[0]) || DD[0] < wD) && (sD[0] = wD), (!(0, Or.y)(DD[1]) || DD[1] > pD) && (sD[1] = pD), sD[0] > pD && (sD[0] = pD), sD[1] < wD && (sD[1] = wD), sD
      },
      Yr = {
        sign: function(DD) {
          var zD = DD.length;
          if (!(zD <= 0))
            for (var wD = 0, pD = DD[0].length; wD < pD; ++wD)
              for (var sD = 0, KD = 0, rD = 0; rD < zD; ++rD) {
                var LD = ZK()(DD[rD][wD][1]) ? DD[rD][wD][0] : DD[rD][wD][1];
                LD >= 0 ? (DD[rD][wD][0] = sD, DD[rD][wD][1] = sD + LD, sD = DD[rD][wD][1]) : (DD[rD][wD][0] = KD, DD[rD][wD][1] = KD + LD, KD = DD[rD][wD][1])
              }
        },
        expand: function(DD, zD) {
          if ((pD = DD.length) > 0) {
            for (var wD, pD, sD, KD = 0, rD = DD[0].length; KD < rD; ++KD) {
              for (sD = wD = 0; wD < pD; ++wD) sD += DD[wD][KD][1] || 0;
              if (sD)
                for (wD = 0; wD < pD; ++wD) DD[wD][KD][1] /= sD
            }
            hK(DD, zD)
          }
        },
        none: hK,
        silhouette: function(DD, zD) {
          if ((wD = DD.length) > 0) {
            for (var wD, pD = 0, sD = DD[zD[0]], KD = sD.length; pD < KD; ++pD) {
              for (var rD = 0, LD = 0; rD < wD; ++rD) LD += DD[rD][pD][1] || 0;
              sD[pD][1] += sD[pD][0] = -LD / 2
            }
            hK(DD, zD)
          }
        },
        wiggle: function(DD, zD) {
          if ((sD = DD.length) > 0 && (pD = (wD = DD[zD[0]]).length) > 0) {
            for (var wD, pD, sD, KD = 0, rD = 1; rD < pD; ++rD) {
              for (var LD = 0, cD = 0, gD = 0; LD < sD; ++LD) {
                for (var RD = DD[zD[LD]], AD = RD[rD][1] || 0, UD = (AD - (RD[rD - 1][1] || 0)) / 2, fD = 0; fD < LD; ++fD) {
                  var ID = DD[zD[fD]];
                  UD += (ID[rD][1] || 0) - (ID[rD - 1][1] || 0)
                }
                cD += AD, gD += UD * AD
              }
              wD[rD - 1][1] += wD[rD - 1][0] = KD, cD && (KD -= gD / cD)
            }
            wD[rD - 1][1] += wD[rD - 1][0] = KD, hK(DD, zD)
          }
        },
        positive: function(DD) {
          var zD = DD.length;
          if (!(zD <= 0))
            for (var wD = 0, pD = DD[0].length; wD < pD; ++wD)
              for (var sD = 0, KD = 0; KD < zD; ++KD) {
                var rD = ZK()(DD[KD][wD][1]) ? DD[KD][wD][0] : DD[KD][wD][1];
                rD >= 0 ? (DD[KD][wD][0] = sD, DD[KD][wD][1] = sD + rD, sD = DD[KD][wD][1]) : (DD[KD][wD][0] = 0, DD[KD][wD][1] = 0)
              }
        }
      },
      Hr = function(DD, zD, wD) {
        var pD = zD.map((function(DD) {
            return DD.props.dataKey
          })),
          sD = Yr[wD],
          KD = function() {
            var DD = (0, MK.c)([]),
              zD = OK,
              wD = hK,
              pD = JK;

            function sD(sD) {
              var KD, rD, LD = Array.from(DD.apply(this, arguments), EK),
                cD = LD.length,
                gD = -1;
              for (const DD of sD)
                for (KD = 0, ++gD; KD < cD; ++KD)(LD[KD][gD] = [0, +pD(DD, LD[KD].key, gD, sD)]).data = DD;
              for (KD = 0, rD = (0, nK.d)(zD(LD)); KD < cD; ++KD) LD[rD[KD]].index = KD;
              return wD(LD, rD), LD
            }
            return sD.keys = function(zD) {
              return arguments.length ? (DD = "function" === typeof zD ? zD : (0, MK.c)(Array.from(zD)), sD) : DD
            }, sD.value = function(DD) {
              return arguments.length ? (pD = "function" === typeof DD ? DD : (0, MK.c)(+DD), sD) : pD
            }, sD.order = function(DD) {
              return arguments.length ? (zD = null == DD ? OK : "function" === typeof DD ? DD : (0, MK.c)(Array.from(DD)), sD) : zD
            }, sD.offset = function(DD) {
              return arguments.length ? (wD = null == DD ? hK : DD, sD) : wD
            }, sD
          }().keys(pD).value((function(DD, zD) {
            return +Tr(DD, zD, 0)
          })).order(OK).offset(sD);
        return KD(DD)
      },
      qr = function(DD, zD, wD, pD, sD, KD) {
        if (!DD) return null;
        var rD = (KD ? zD.reverse() : zD).reduce((function(DD, zD) {
          var sD, KD = null !== (sD = zD.type) && void 0 !== sD && sD.defaultProps ? Cr(Cr({}, zD.type.defaultProps), zD.props) : zD.props,
            rD = KD.stackId;
          if (KD.hide) return DD;
          var LD = KD[wD],
            cD = DD[LD] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, Or.x)(rD)) {
            var gD = cD.stackGroups[rD] || {
              numericAxisId: wD,
              cateAxisId: pD,
              items: []
            };
            gD.items.push(zD), cD.hasStack = !0, cD.stackGroups[rD] = gD
          } else cD.stackGroups[(0, Or.I)("_stackId_")] = {
            numericAxisId: wD,
            cateAxisId: pD,
            items: [zD]
          };
          return Cr(Cr({}, DD), {}, xr({}, LD, cD))
        }), {});
        return Object.keys(rD).reduce((function(zD, KD) {
          var LD = rD[KD];
          if (LD.hasStack) {
            LD.stackGroups = Object.keys(LD.stackGroups).reduce((function(zD, KD) {
              var rD = LD.stackGroups[KD];
              return Cr(Cr({}, zD), {}, xr({}, KD, {
                numericAxisId: wD,
                cateAxisId: pD,
                items: rD.items,
                stackedData: Hr(DD, rD.items, sD)
              }))
            }), {})
          }
          return Cr(Cr({}, zD), {}, xr({}, KD, LD))
        }), {})
      },
      DL = function(DD, zD) {
        var wD = zD.realScaleType,
          pD = zD.type,
          sD = zD.tickCount,
          KD = zD.originalDomain,
          rD = zD.allowDecimals,
          LD = wD || zD.scale;
        if ("auto" !== LD && "linear" !== LD) return null;
        if (sD && "number" === pD && KD && ("auto" === KD[0] || "auto" === KD[1])) {
          var cD = DD.domain();
          if (!cD.length) return null;
          var gD = hr(cD, sD, rD);
          return DD.domain([PK()(gD), XK()(gD)]), {
            niceTicks: gD
          }
        }
        if (sD && "number" === pD) {
          var RD = DD.domain();
          return {
            niceTicks: nr(RD, sD, rD)
          }
        }
        return null
      };

    function zL(DD) {
      var zD = DD.axis,
        wD = DD.ticks,
        pD = DD.bandSize,
        sD = DD.entry,
        KD = DD.index,
        rD = DD.dataKey;
      if ("category" === zD.type) {
        if (!zD.allowDuplicatedCategory && zD.dataKey && !xK()(sD[zD.dataKey])) {
          var LD = (0, Or.e)(wD, "value", sD[zD.dataKey]);
          if (LD) return LD.coordinate + pD / 2
        }
        return wD[KD] ? wD[KD].coordinate + pD / 2 : null
      }
      var cD = Tr(sD, xK()(rD) ? zD.dataKey : rD);
      return xK()(cD) ? null : zD.scale(cD)
    }
    var wL = function(DD) {
        var zD = DD.axis,
          wD = DD.ticks,
          pD = DD.offset,
          sD = DD.bandSize,
          KD = DD.entry,
          rD = DD.index;
        if ("category" === zD.type) return wD[rD] ? wD[rD].coordinate + pD : null;
        var LD = Tr(KD, zD.dataKey, zD.domain[rD]);
        return xK()(LD) ? null : zD.scale(LD) - sD / 2 + pD
      },
      pL = function(DD) {
        var zD = DD.numericAxis,
          wD = zD.scale.domain();
        if ("number" === zD.type) {
          var pD = Math.min(wD[0], wD[1]),
            sD = Math.max(wD[0], wD[1]);
          return pD <= 0 && sD >= 0 ? 0 : sD < 0 ? sD : pD
        }
        return wD[0]
      },
      sL = function(DD, zD) {
        var wD, pD = (null !== (wD = DD.type) && void 0 !== wD && wD.defaultProps ? Cr(Cr({}, DD.type.defaultProps), DD.props) : DD.props).stackId;
        if ((0, Or.x)(pD)) {
          var sD = zD[pD];
          if (sD) {
            var KD = sD.items.indexOf(DD);
            return KD >= 0 ? sD.stackedData[KD] : null
          }
        }
        return null
      },
      KL = function(DD, zD, wD) {
        return Object.keys(DD).reduce((function(pD, sD) {
          var KD = DD[sD].stackedData.reduce((function(DD, pD) {
            var sD = pD.slice(zD, wD + 1).reduce((function(DD, zD) {
              return [PK()(zD.concat([DD[0]]).filter(Or.y)), XK()(zD.concat([DD[1]]).filter(Or.y))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(DD[0], sD[0]), Math.max(DD[1], sD[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(KD[0], pD[0]), Math.max(KD[1], pD[1])]
        }), [1 / 0, -1 / 0]).map((function(DD) {
          return DD === 1 / 0 || DD === -1 / 0 ? 0 : DD
        }))
      },
      rL = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      LL = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      cL = function(DD, zD, wD) {
        if (bK()(DD)) return DD(zD, wD);
        if (!Array.isArray(DD)) return zD;
        var pD = [];
        if ((0, Or.y)(DD[0])) pD[0] = wD ? DD[0] : Math.min(DD[0], zD[0]);
        else if (rL.test(DD[0])) {
          var sD = +rL.exec(DD[0])[1];
          pD[0] = zD[0] - sD
        } else bK()(DD[0]) ? pD[0] = DD[0](zD[0]) : pD[0] = zD[0];
        if ((0, Or.y)(DD[1])) pD[1] = wD ? DD[1] : Math.max(DD[1], zD[1]);
        else if (LL.test(DD[1])) {
          var KD = +LL.exec(DD[1])[1];
          pD[1] = zD[1] + KD
        } else bK()(DD[1]) ? pD[1] = DD[1](zD[1]) : pD[1] = zD[1];
        return pD
      },
      gL = function(DD, zD, wD) {
        if (DD && DD.scale && DD.scale.bandwidth) {
          var pD = DD.scale.bandwidth();
          if (!wD || pD > 0) return pD
        }
        if (DD && zD && zD.length >= 2) {
          for (var sD = aK()(zD, (function(DD) {
              return DD.coordinate
            })), KD = 1 / 0, rD = 1, LD = sD.length; rD < LD; rD++) {
            var cD = sD[rD],
              gD = sD[rD - 1];
            KD = Math.min((cD.coordinate || 0) - (gD.coordinate || 0), KD)
          }
          return KD === 1 / 0 ? 0 : KD
        }
        return wD ? void 0 : 0
      },
      RL = function(DD, zD, wD) {
        return DD && DD.length ? eK()(DD, iK()(wD, "type.defaultProps.domain")) ? zD : DD : zD
      },
      AL = function(DD, zD) {
        var wD = DD.type.defaultProps ? Cr(Cr({}, DD.type.defaultProps), DD.props) : DD.props,
          pD = wD.dataKey,
          sD = wD.name,
          KD = wD.unit,
          rD = wD.formatter,
          LD = wD.tooltipType,
          cD = wD.chartType,
          gD = wD.hide;
        return Cr(Cr({}, (0, Jr.e)(DD, !1)), {}, {
          dataKey: pD,
          unit: KD,
          formatter: rD,
          name: sD || pD,
          color: dr(DD),
          value: Tr(zD, pD),
          type: LD,
          payload: zD,
          chartType: cD,
          hide: gD
        })
      }
  },
  6169: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => UD,
      h: () => AD
    });
    var pD = wD(6012);

    function sD(DD) {
      return sD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, sD(DD)
    }

    function KD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function rD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? KD(Object(wD), !0).forEach((function(zD) {
          LD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : KD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function LD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != sD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != sD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == sD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }
    var cD = {
        widthCache: {},
        cacheCount: 0
      },
      gD = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      RD = "recharts_measurement_span";
    var AD = function(DD) {
        var zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === DD || null === DD || pD.c.isSsr) return {
          width: 0,
          height: 0
        };
        var wD = function(DD) {
            var zD = rD({}, DD);
            return Object.keys(zD).forEach((function(DD) {
              zD[DD] || delete zD[DD]
            })), zD
          }(zD),
          sD = JSON.stringify({
            text: DD,
            copyStyle: wD
          });
        if (cD.widthCache[sD]) return cD.widthCache[sD];
        try {
          var KD = document.getElementById(RD);
          KD || ((KD = document.createElement("span")).setAttribute("id", RD), KD.setAttribute("aria-hidden", "true"), document.body.appendChild(KD));
          var LD = rD(rD({}, gD), wD);
          Object.assign(KD.style, LD), KD.textContent = "".concat(DD);
          var AD = KD.getBoundingClientRect(),
            UD = {
              width: AD.width,
              height: AD.height
            };
          return cD.widthCache[sD] = UD, ++cD.cacheCount > 2e3 && (cD.cacheCount = 0, cD.widthCache = {}), UD
        } catch (fD) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      UD = function(DD) {
        return {
          top: DD.top + window.scrollY - document.documentElement.clientTop,
          left: DD.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  5223: (DD, zD, wD) => {
    wD.d(zD, {
      B: () => ID,
      F: () => fD,
      I: () => MD,
      c: () => PD,
      e: () => XD,
      h: () => JD,
      k: () => VD,
      n: () => OD,
      p: () => ED,
      q: () => QD,
      u: () => GD,
      x: () => hD,
      y: () => BD
    });
    var pD = wD(5232),
      sD = wD.n(pD),
      KD = wD(5241),
      rD = wD.n(KD),
      LD = wD(5254),
      cD = wD.n(LD),
      gD = wD(5248),
      RD = wD.n(gD),
      AD = wD(5478),
      UD = wD.n(AD),
      fD = function(DD) {
        return 0 === DD ? 0 : DD > 0 ? 1 : -1
      },
      ID = function(DD) {
        return sD()(DD) && DD.indexOf("%") === DD.length - 1
      },
      BD = function(DD) {
        return RD()(DD) && !rD()(DD)
      },
      GD = function(DD) {
        return UD()(DD)
      },
      hD = function(DD) {
        return BD(DD) || sD()(DD)
      },
      nD = 0,
      MD = function(DD) {
        var zD = ++nD;
        return "".concat(DD || "").concat(zD)
      },
      OD = function(DD, zD) {
        var wD, pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          KD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!BD(DD) && !sD()(DD)) return pD;
        if (ID(DD)) {
          var LD = DD.indexOf("%");
          wD = zD * parseFloat(DD.slice(0, LD)) / 100
        } else wD = +DD;
        return rD()(wD) && (wD = pD), KD && wD > zD && (wD = zD), wD
      },
      JD = function(DD) {
        if (!DD) return null;
        var zD = Object.keys(DD);
        return zD && zD.length ? DD[zD[0]] : null
      },
      ED = function(DD) {
        if (!Array.isArray(DD)) return !1;
        for (var zD = DD.length, wD = {}, pD = 0; pD < zD; pD++) {
          if (wD[DD[pD]]) return !0;
          wD[DD[pD]] = !0
        }
        return !1
      },
      QD = function(DD, zD) {
        return BD(DD) && BD(zD) ? function(wD) {
          return DD + wD * (zD - DD)
        } : function() {
          return zD
        }
      };

    function XD(DD, zD, wD) {
      return DD && DD.length ? DD.find((function(DD) {
        return DD && ("function" === typeof zD ? zD(DD) : cD()(DD, zD)) === wD
      })) : null
    }
    var VD = function(DD) {
        if (!DD || !DD.length) return null;
        for (var zD = DD.length, wD = 0, pD = 0, sD = 0, KD = 0, rD = 1 / 0, LD = -1 / 0, cD = 0, gD = 0, RD = 0; RD < zD; RD++) wD += cD = DD[RD].cx || 0, pD += gD = DD[RD].cy || 0, sD += cD * gD, KD += cD * cD, rD = Math.min(rD, cD), LD = Math.max(LD, cD);
        var AD = zD * KD !== wD * wD ? (zD * sD - wD * pD) / (zD * KD - wD * wD) : 0;
        return {
          xmin: rD,
          xmax: LD,
          a: AD,
          b: (pD - AD * wD) / zD
        }
      },
      PD = function(DD, zD) {
        return BD(DD) && BD(zD) ? DD - zD : sD()(DD) && sD()(zD) ? DD.localeCompare(zD) : DD instanceof Date && zD instanceof Date ? DD.getTime() - zD.getTime() : String(DD).localeCompare(String(zD))
      }
  },
  6012: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD
    });
    var pD = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(DD) {
        return pD[DD]
      },
      set: function(DD, zD) {
        if ("string" === typeof DD) pD[DD] = zD;
        else {
          var wD = Object.keys(DD);
          wD && wD.length && wD.forEach((function(zD) {
            pD[zD] = DD[zD]
          }))
        }
      }
    }
  },
  6277: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD
    });
    var pD = function(DD, zD) {
      var wD = DD.alwaysShow,
        pD = DD.ifOverflow;
      return wD && (pD = "extendDomain"), pD === zD
    }
  },
  5480: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    var pD = function(DD, zD) {
      for (var wD = arguments.length, pD = new Array(wD > 2 ? wD - 2 : 0), sD = 2; sD < wD; sD++) pD[sD - 2] = arguments[sD]
    }
  },
  6270: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      d: () => UD,
      f: () => gD
    });
    wD(5478), wD(58), wD(5333);

    function pD(DD) {
      return pD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, pD(DD)
    }

    function sD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function KD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? sD(Object(wD), !0).forEach((function(zD) {
          rD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : sD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function rD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != pD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var sD = wD.call(DD, zD || "default");
            if ("object" != pD(sD)) return sD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == pD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }
    var LD = Math.PI / 180,
      cD = function(DD) {
        return 180 * DD / Math.PI
      },
      gD = function(DD, zD, wD, pD) {
        return {
          x: DD + Math.cos(-LD * pD) * wD,
          y: zD + Math.sin(-LD * pD) * wD
        }
      },
      RD = function(DD, zD) {
        var wD = DD.x,
          pD = DD.y,
          sD = zD.cx,
          KD = zD.cy,
          rD = function(DD, zD) {
            var wD = DD.x,
              pD = DD.y,
              sD = zD.x,
              KD = zD.y;
            return Math.sqrt(Math.pow(wD - sD, 2) + Math.pow(pD - KD, 2))
          }({
            x: wD,
            y: pD
          }, {
            x: sD,
            y: KD
          });
        if (rD <= 0) return {
          radius: rD
        };
        var LD = (wD - sD) / rD,
          gD = Math.acos(LD);
        return pD > KD && (gD = 2 * Math.PI - gD), {
          radius: rD,
          angle: cD(gD),
          angleInRadian: gD
        }
      },
      AD = function(DD, zD) {
        var wD = zD.startAngle,
          pD = zD.endAngle,
          sD = Math.floor(wD / 360),
          KD = Math.floor(pD / 360);
        return DD + 360 * Math.min(sD, KD)
      },
      UD = function(DD, zD) {
        var wD = DD.x,
          pD = DD.y,
          sD = RD({
            x: wD,
            y: pD
          }, zD),
          rD = sD.radius,
          LD = sD.angle,
          cD = zD.innerRadius,
          gD = zD.outerRadius;
        if (rD < cD || rD > gD) return !1;
        if (0 === rD) return !0;
        var UD, fD = function(DD) {
            var zD = DD.startAngle,
              wD = DD.endAngle,
              pD = Math.floor(zD / 360),
              sD = Math.floor(wD / 360),
              KD = Math.min(pD, sD);
            return {
              startAngle: zD - 360 * KD,
              endAngle: wD - 360 * KD
            }
          }(zD),
          ID = fD.startAngle,
          BD = fD.endAngle,
          GD = LD;
        if (ID <= BD) {
          for (; GD > BD;) GD -= 360;
          for (; GD < ID;) GD += 360;
          UD = GD >= ID && GD <= BD
        } else {
          for (; GD > ID;) GD -= 360;
          for (; GD < BD;) GD += 360;
          UD = GD >= BD && GD <= ID
        }
        return UD ? KD(KD({}, zD), {}, {
          radius: rD,
          angle: AD(GD, zD)
        }) : null
      }
  },
  5484: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => SD,
      g: () => CD,
      h: () => xD,
      j: () => QD,
      k: () => ND,
      o: () => dD,
      q: () => iD,
      r: () => ZD,
      u: () => WD,
      x: () => TD
    });
    var pD = wD(5254),
      sD = wD.n(pD),
      KD = wD(5478),
      rD = wD.n(KD),
      LD = wD(5232),
      cD = wD.n(LD),
      gD = wD(5333),
      RD = wD.n(gD),
      AD = wD(5144),
      UD = wD.n(AD),
      fD = wD(58),
      ID = wD(5487),
      BD = wD(5223),
      GD = wD(5500),
      hD = wD(5505),
      nD = ["children"],
      MD = ["children"];

    function OD(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD = {};
        for (var pD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, pD)) {
            if (zD.indexOf(pD) >= 0) continue;
            wD[pD] = DD[pD]
          } return wD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }

    function JD(DD) {
      return JD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, JD(DD)
    }
    var ED = {
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
      QD = function(DD) {
        return "string" === typeof DD ? DD : DD ? DD.displayName || DD.name || "Component" : ""
      },
      XD = null,
      VD = null,
      PD = function DD(zD) {
        if (zD === XD && Array.isArray(VD)) return VD;
        var wD = [];
        return fD.Children.forEach(zD, (function(zD) {
          rD()(zD) || ((0, ID.isFragment)(zD) ? wD = wD.concat(DD(zD.props.children)) : wD.push(zD))
        })), VD = wD, XD = zD, wD
      };

    function CD(DD, zD) {
      var wD = [],
        pD = [];
      return pD = Array.isArray(zD) ? zD.map((function(DD) {
        return QD(DD)
      })) : [QD(zD)], PD(DD).forEach((function(DD) {
        var zD = sD()(DD, "type.displayName") || sD()(DD, "type.name"); - 1 !== pD.indexOf(zD) && wD.push(DD)
      })), wD
    }

    function xD(DD, zD) {
      var wD = CD(DD, zD);
      return wD && wD[0]
    }
    var TD = function(DD) {
        if (!DD || !DD.props) return !1;
        var zD = DD.props,
          wD = zD.width,
          pD = zD.height;
        return !(!(0, BD.y)(wD) || wD <= 0 || !(0, BD.y)(pD) || pD <= 0)
      },
      bD = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      jD = function(DD) {
        return DD && DD.type && cD()(DD.type) && bD.indexOf(DD.type) >= 0
      },
      dD = function(DD) {
        return DD && "object" === JD(DD) && "clipDot" in DD
      },
      SD = function(DD, zD, wD) {
        if (!DD || "function" === typeof DD || "boolean" === typeof DD) return null;
        var pD = DD;
        if ((0, fD.isValidElement)(DD) && (pD = DD.props), !UD()(pD)) return null;
        var sD = {};
        return Object.keys(pD).forEach((function(DD) {
          var KD;
          (function(DD, zD, wD, pD) {
            var sD, KD = null !== (sD = null === hD.d || void 0 === hD.d ? void 0 : hD.d[pD]) && void 0 !== sD ? sD : [];
            return zD.startsWith("data-") || !RD()(DD) && (pD && KD.includes(zD) || hD.h.includes(zD)) || wD && hD.c.includes(zD)
          })(null === (KD = pD) || void 0 === KD ? void 0 : KD[DD], DD, zD, wD) && (sD[DD] = pD[DD])
        })), sD
      },
      iD = function DD(zD, wD) {
        if (zD === wD) return !0;
        var pD = fD.Children.count(zD);
        if (pD !== fD.Children.count(wD)) return !1;
        if (0 === pD) return !0;
        if (1 === pD) return lD(Array.isArray(zD) ? zD[0] : zD, Array.isArray(wD) ? wD[0] : wD);
        for (var sD = 0; sD < pD; sD++) {
          var KD = zD[sD],
            rD = wD[sD];
          if (Array.isArray(KD) || Array.isArray(rD)) {
            if (!DD(KD, rD)) return !1
          } else if (!lD(KD, rD)) return !1
        }
        return !0
      },
      lD = function(DD, zD) {
        if (rD()(DD) && rD()(zD)) return !0;
        if (!rD()(DD) && !rD()(zD)) {
          var wD = DD.props || {},
            pD = wD.children,
            sD = OD(wD, nD),
            KD = zD.props || {},
            LD = KD.children,
            cD = OD(KD, MD);
          return pD && LD ? (0, GD.d)(sD, cD) && iD(pD, LD) : !pD && !LD && (0, GD.d)(sD, cD)
        }
        return !1
      },
      WD = function(DD, zD) {
        var wD = [],
          pD = {};
        return PD(DD).forEach((function(DD, sD) {
          if (jD(DD)) wD.push(DD);
          else if (DD) {
            var KD = QD(DD.type),
              rD = zD[KD] || {},
              LD = rD.handler,
              cD = rD.once;
            if (LD && (!cD || !pD[KD])) {
              var gD = LD(DD, KD, sD);
              wD.push(gD), pD[KD] = !0
            }
          }
        })), wD
      },
      ND = function(DD) {
        var zD = DD && DD.type;
        return zD && ED[zD] ? ED[zD] : null
      },
      ZD = function(DD, zD) {
        return PD(zD).indexOf(DD)
      }
  },
  5500: (DD, zD, wD) => {
    function pD(DD, zD) {
      for (var wD in DD)
        if ({}.hasOwnProperty.call(DD, wD) && (!{}.hasOwnProperty.call(zD, wD) || DD[wD] !== zD[wD])) return !1;
      for (var pD in zD)
        if ({}.hasOwnProperty.call(zD, pD) && !{}.hasOwnProperty.call(DD, pD)) return !1;
      return !0
    }
    wD.d(zD, {
      d: () => pD
    })
  },
  6250: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => RD
    });
    var pD = wD(6080),
      sD = wD(6177),
      KD = wD(5484);

    function rD(DD) {
      return rD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, rD(DD)
    }

    function LD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function cD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? LD(Object(wD), !0).forEach((function(zD) {
          gD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : LD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function gD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != rD(DD) || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != rD(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == rD(zD) ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }
    var RD = function(DD) {
      var zD = DD.children,
        wD = DD.formattedGraphicalItems,
        rD = DD.legendWidth,
        LD = DD.legendContent,
        gD = (0, KD.h)(zD, pD.b);
      if (!gD) return null;
      var RD, AD = pD.b.defaultProps,
        UD = void 0 !== AD ? cD(cD({}, AD), gD.props) : {};
      return RD = gD.props && gD.props.payload ? gD.props && gD.props.payload : "children" === LD ? (wD || []).reduce((function(DD, zD) {
        var wD = zD.item,
          pD = zD.props,
          sD = pD.sectors || pD.data || [];
        return DD.concat(sD.map((function(DD) {
          return {
            type: gD.props.iconType || wD.props.legendType,
            value: DD.name,
            color: DD.fill,
            payload: DD
          }
        })))
      }), []) : (wD || []).map((function(DD) {
        var zD = DD.item,
          wD = zD.type.defaultProps,
          pD = void 0 !== wD ? cD(cD({}, wD), zD.props) : {},
          KD = pD.dataKey,
          rD = pD.name,
          LD = pD.legendType;
        return {
          inactive: pD.hide,
          dataKey: KD,
          type: UD.iconType || LD || "square",
          color: (0, sD.N)(zD),
          value: rD || KD,
          payload: pD
        }
      })), cD(cD(cD({}, UD), pD.b.getWithHeight(gD, rD)), {}, {
        payload: RD,
        item: gD
      })
    }
  },
  6021: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => LD
    });
    var pD = wD(6023),
      sD = wD.n(pD),
      KD = wD(5333),
      rD = wD.n(KD);

    function LD(DD, zD, wD) {
      return !0 === zD ? sD()(DD, wD) : rD()(zD) ? sD()(DD, zD) : DD
    }
  },
  5505: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => RD,
      d: () => gD,
      h: () => LD,
      i: () => AD,
      j: () => UD
    });
    var pD = wD(58),
      sD = wD(5144),
      KD = wD.n(sD);

    function rD(DD) {
      return rD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, rD(DD)
    }
    var LD = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "Jf", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      cD = ["points", "pathLength"],
      gD = {
        svg: ["viewBox", "children"],
        polygon: cD,
        polyline: cD
      },
      RD = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      AD = function(DD, zD) {
        if (!DD || "function" === typeof DD || "boolean" === typeof DD) return null;
        var wD = DD;
        if ((0, pD.isValidElement)(DD) && (wD = DD.props), !KD()(wD)) return null;
        var sD = {};
        return Object.keys(wD).forEach((function(DD) {
          RD.includes(DD) && (sD[DD] = zD || function(zD) {
            return wD[DD](wD, zD)
          })
        })), sD
      },
      UD = function(DD, zD, wD) {
        if (!KD()(DD) || "object" !== rD(DD)) return null;
        var pD = null;
        return Object.keys(DD).forEach((function(sD) {
          var KD = DD[sD];
          RD.includes(sD) && "function" === typeof KD && (pD || (pD = {}), pD[sD] = function(DD, zD, wD) {
            return function(pD) {
              return DD(zD, wD, pD), null
            }
          }(KD, zD, wD))
        })), pD
      }
  },
  5492: (DD, zD) => {
    var wD, pD = Symbol.for("react.element"),
      sD = Symbol.for("react.portal"),
      KD = Symbol.for("react.fragment"),
      rD = Symbol.for("react.strict_mode"),
      LD = Symbol.for("react.profiler"),
      cD = Symbol.for("react.provider"),
      gD = Symbol.for("react.context"),
      RD = Symbol.for("react.server_context"),
      AD = Symbol.for("react.forward_ref"),
      UD = Symbol.for("react.suspense"),
      fD = Symbol.for("react.suspense_list"),
      ID = Symbol.for("react.memo"),
      BD = Symbol.for("react.lazy"),
      GD = Symbol.for("react.offscreen");

    function hD(DD) {
      if ("object" === typeof DD && null !== DD) {
        var zD = DD.$$typeof;
        switch (zD) {
          case pD:
            switch (DD = DD.type) {
              case KD:
              case LD:
              case rD:
              case UD:
              case fD:
                return DD;
              default:
                switch (DD = DD && DD.$$typeof) {
                  case RD:
                  case gD:
                  case AD:
                  case BD:
                  case ID:
                  case cD:
                    return DD;
                  default:
                    return zD
                }
            }
          case sD:
            return zD
        }
      }
    }
    wD = Symbol.for("react.module.reference"), zD.isFragment = function(DD) {
      return hD(DD) === KD
    }
  },
  5487: (DD, zD, wD) => {
    DD.exports = wD(5492)
  },
  5121: (DD, zD, wD) => {
    function pD(DD) {
      var zD, wD, sD = "";
      if ("string" == typeof DD || "number" == typeof DD) sD += DD;
      else if ("object" == typeof DD)
        if (Array.isArray(DD)) {
          var KD = DD.length;
          for (zD = 0; zD < KD; zD++) DD[zD] && (wD = pD(DD[zD])) && (sD && (sD += " "), sD += wD)
        } else
          for (wD in DD) DD[wD] && (sD && (sD += " "), sD += wD);
      return sD
    }
    wD.d(zD, {
      b: () => sD
    });
    const sD = function() {
      for (var DD, zD, wD = 0, sD = "", KD = arguments.length; wD < KD; wD++)(DD = arguments[wD]) && (zD = pD(DD)) && (sD && (sD += " "), sD += zD);
      return sD
    }
  },
  6184: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      i: () => LD
    });
    var pD = wD(6193),
      sD = wD(6198);

    function KD() {
      var DD, zD, wD = (0, sD.b)().unknown(void 0),
        rD = wD.domain,
        LD = wD.range,
        cD = 0,
        gD = 1,
        RD = !1,
        AD = 0,
        UD = 0,
        fD = .5;

      function ID() {
        var wD = rD().length,
          pD = gD < cD,
          sD = pD ? gD : cD,
          KD = pD ? cD : gD;
        DD = (KD - sD) / Math.max(1, wD - AD + 2 * UD), RD && (DD = Math.floor(DD)), sD += (KD - sD - DD * (wD - AD)) * fD, zD = DD * (1 - AD), RD && (sD = Math.round(sD), zD = Math.round(zD));
        var ID = function(DD, zD, wD) {
          DD = +DD, zD = +zD, wD = (sD = arguments.length) < 2 ? (zD = DD, DD = 0, 1) : sD < 3 ? 1 : +wD;
          for (var pD = -1, sD = 0 | Math.max(0, Math.ceil((zD - DD) / wD)), KD = new Array(sD); ++pD < sD;) KD[pD] = DD + pD * wD;
          return KD
        }(wD).map((function(zD) {
          return sD + DD * zD
        }));
        return LD(pD ? ID.reverse() : ID)
      }
      return delete wD.unknown, wD.domain = function(DD) {
        return arguments.length ? (rD(DD), ID()) : rD()
      }, wD.range = function(DD) {
        return arguments.length ? ([cD, gD] = DD, cD = +cD, gD = +gD, ID()) : [cD, gD]
      }, wD.rangeRound = function(DD) {
        return [cD, gD] = DD, cD = +cD, gD = +gD, RD = !0, ID()
      }, wD.bandwidth = function() {
        return zD
      }, wD.step = function() {
        return DD
      }, wD.round = function(DD) {
        return arguments.length ? (RD = !!DD, ID()) : RD
      }, wD.padding = function(DD) {
        return arguments.length ? (AD = Math.min(1, UD = +DD), ID()) : AD
      }, wD.paddingInner = function(DD) {
        return arguments.length ? (AD = Math.min(1, DD), ID()) : AD
      }, wD.paddingOuter = function(DD) {
        return arguments.length ? (UD = +DD, ID()) : UD
      }, wD.align = function(DD) {
        return arguments.length ? (fD = Math.max(0, Math.min(1, DD)), ID()) : fD
      }, wD.copy = function() {
        return KD(rD(), [cD, gD]).round(RD).paddingInner(AD).paddingOuter(UD).align(fD)
      }, pD.d.apply(ID(), arguments)
    }

    function rD(DD) {
      var zD = DD.copy;
      return DD.padding = DD.paddingOuter, delete DD.paddingInner, delete DD.paddingOuter, DD.copy = function() {
        return rD(zD())
      }, DD
    }

    function LD() {
      return rD(KD.apply(null, arguments).paddingInner(1))
    }
  },
  6193: (DD, zD, wD) => {
    function pD(DD, zD) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(DD);
          break;
        default:
          this.range(zD).domain(DD)
      }
      return this
    }

    function sD(DD, zD) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof DD ? this.interpolator(DD) : this.range(DD);
          break;
        default:
          this.domain(DD), "function" === typeof zD ? this.interpolator(zD) : this.range(zD)
      }
      return this
    }
    wD.d(zD, {
      b: () => sD,
      d: () => pD
    })
  },
  6198: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => RD,
      d: () => gD
    });
    class pD extends Map {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LD;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: zD
            }
          }), null != DD)
          for (const [wD, pD] of DD) this.set(wD, pD)
      }
      get(DD) {
        return super.get(sD(this, DD))
      }
      has(DD) {
        return super.has(sD(this, DD))
      }
      set(DD, zD) {
        return super.set(KD(this, DD), zD)
      }
      delete(DD) {
        return super.delete(rD(this, DD))
      }
    }
    Set;

    function sD(DD, zD) {
      let {
        _intern: wD,
        _key: pD
      } = DD;
      const sD = pD(zD);
      return wD.has(sD) ? wD.get(sD) : zD
    }

    function KD(DD, zD) {
      let {
        _intern: wD,
        _key: pD
      } = DD;
      const sD = pD(zD);
      return wD.has(sD) ? wD.get(sD) : (wD.set(sD, zD), zD)
    }

    function rD(DD, zD) {
      let {
        _intern: wD,
        _key: pD
      } = DD;
      const sD = pD(zD);
      return wD.has(sD) && (zD = wD.get(sD), wD.delete(sD)), zD
    }

    function LD(DD) {
      return null !== DD && "object" === typeof DD ? DD.valueOf() : DD
    }
    var cD = wD(6193);
    const gD = Symbol("implicit");

    function RD() {
      var DD = new pD,
        zD = [],
        wD = [],
        sD = gD;

      function KD(pD) {
        let KD = DD.get(pD);
        if (void 0 === KD) {
          if (sD !== gD) return sD;
          DD.set(pD, KD = zD.push(pD) - 1)
        }
        return wD[KD % wD.length]
      }
      return KD.domain = function(wD) {
        if (!arguments.length) return zD.slice();
        zD = [], DD = new pD;
        for (const pD of wD) DD.has(pD) || DD.set(pD, zD.push(pD) - 1);
        return KD
      }, KD.range = function(DD) {
        return arguments.length ? (wD = Array.from(DD), KD) : wD.slice()
      }, KD.unknown = function(DD) {
        return arguments.length ? (sD = DD, KD) : sD
      }, KD.copy = function() {
        return RD(zD, wD).unknown(sD)
      }, cD.d.apply(KD, arguments), KD
    }
  },
  6259: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    Array.prototype.slice;

    function pD(DD) {
      return "object" === typeof DD && "length" in DD ? DD : Array.from(DD)
    }
  },
  6131: (DD, zD, wD) => {
    function pD(DD) {
      return function() {
        return DD
      }
    }
    wD.d(zD, {
      c: () => pD
    })
  },
  6140: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => gD
    });
    const pD = Math.PI,
      sD = 2 * pD,
      KD = 1e-6,
      rD = sD - KD;

    function LD(DD) {
      this._ += DD[0];
      for (let zD = 1, wD = DD.length; zD < wD; ++zD) this._ += arguments[zD] + DD[zD]
    }
    class cD {
      constructor(DD) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == DD ? LD : function(DD) {
          let zD = Math.floor(DD);
          if (!(zD >= 0)) throw new Error(`invalid digits: ${DD}`);
          if (zD > 15) return LD;
          const wD = 10 ** zD;
          return function(DD) {
            this._ += DD[0];
            for (let zD = 1, pD = DD.length; zD < pD; ++zD) this._ += Math.round(arguments[zD] * wD) / wD + DD[zD]
          }
        }(DD)
      }
      moveTo(DD, zD) {
        this._append`M${this._x0=this._x1=+DD},${this._y0=this._y1=+zD}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(DD, zD) {
        this._append`L${this._x1=+DD},${this._y1=+zD}`
      }
      quadraticCurveTo(DD, zD, wD, pD) {
        this._append`Q${+DD},${+zD},${this._x1=+wD},${this._y1=+pD}`
      }
      bezierCurveTo(DD, zD, wD, pD, sD, KD) {
        this._append`C${+DD},${+zD},${+wD},${+pD},${this._x1=+sD},${this._y1=+KD}`
      }
      arcTo(DD, zD, wD, sD, rD) {
        if (DD = +DD, zD = +zD, wD = +wD, sD = +sD, (rD = +rD) < 0) throw new Error(`negative radius: ${rD}`);
        let LD = this._x1,
          cD = this._y1,
          gD = wD - DD,
          RD = sD - zD,
          AD = LD - DD,
          UD = cD - zD,
          fD = AD * AD + UD * UD;
        if (null === this._x1) this._append`M${this._x1=DD},${this._y1=zD}`;
        else if (fD > KD)
          if (Math.abs(UD * gD - RD * AD) > KD && rD) {
            let ID = wD - LD,
              BD = sD - cD,
              GD = gD * gD + RD * RD,
              hD = ID * ID + BD * BD,
              nD = Math.sqrt(GD),
              MD = Math.sqrt(fD),
              OD = rD * Math.tan((pD - Math.acos((GD + fD - hD) / (2 * nD * MD))) / 2),
              JD = OD / MD,
              ED = OD / nD;
            Math.abs(JD - 1) > KD && this._append`L${DD+JD*AD},${zD+JD*UD}`, this._append`A${rD},${rD},0,0,${+(UD*ID>AD*BD)},${this._x1=DD+ED*gD},${this._y1=zD+ED*RD}`
          } else this._append`L${this._x1=DD},${this._y1=zD}`;
        else;
      }
      arc(DD, zD, wD, LD, cD, gD) {
        if (DD = +DD, zD = +zD, gD = !!gD, (wD = +wD) < 0) throw new Error(`negative radius: ${wD}`);
        let RD = wD * Math.cos(LD),
          AD = wD * Math.sin(LD),
          UD = DD + RD,
          fD = zD + AD,
          ID = 1 ^ gD,
          BD = gD ? LD - cD : cD - LD;
        null === this._x1 ? this._append`M${UD},${fD}` : (Math.abs(this._x1 - UD) > KD || Math.abs(this._y1 - fD) > KD) && this._append`L${UD},${fD}`, wD && (BD < 0 && (BD = BD % sD + sD), BD > rD ? this._append`A${wD},${wD},0,1,${ID},${DD-RD},${zD-AD}A${wD},${wD},0,1,${ID},${this._x1=UD},${this._y1=fD}` : BD > KD && this._append`A${wD},${wD},0,${+(BD>=pD)},${ID},${this._x1=DD+wD*Math.cos(cD)},${this._y1=zD+wD*Math.sin(cD)}`)
      }
      rect(DD, zD, wD, pD) {
        this._append`M${this._x0=this._x1=+DD},${this._y0=this._y1=+zD}h${wD=+wD}v${+pD}h${-wD}Z`
      }
      toString() {
        return this._
      }
    }

    function gD(DD) {
      let zD = 3;
      return DD.digits = function(wD) {
        if (!arguments.length) return zD;
        if (null == wD) zD = null;
        else {
          const DD = Math.floor(wD);
          if (!(DD >= 0)) throw new RangeError(`invalid digits: ${wD}`);
          zD = DD
        }
        return DD
      }, () => new cD(zD)
    }
    cD.prototype
  },
  5995: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD
    });
    var pD = !0,
      sD = "Invariant failed";

    function KD(DD, zD) {
      if (!DD) {
        if (pD) throw new Error(sD);
        var wD = "function" === typeof zD ? zD() : zD,
          KD = wD ? "".concat(sD, ": ").concat(wD) : sD;
        throw new Error(KD)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);