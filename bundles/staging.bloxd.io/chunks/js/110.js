/*! For license information please see eulrrq.110.d829a530.chunk.js.LICENSE.txt */
export const id = 110;
export const ids = [110];
export const modules = {
  5881: function(UU, RU, gU) {
    var tU;
    ! function() {
      var pU, EU = 1e9,
        PU = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        TU = !0,
        qU = "[DecimalError] ",
        KU = qU + "Invalid argument: ",
        cU = qU + "Exponent out of range: ",
        GU = Math.floor,
        jU = Math.pow,
        uU = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        CU = 1e7,
        hU = 9007199254740991,
        QU = GU(1286742750677284.5),
        eU = {};

      function WU(UU, RU) {
        var gU, tU, pU, EU, PU, qU, KU, cU, GU = UU.constructor,
          jU = GU.precision;
        if (!UU.s || !RU.s) return RU.s || (RU = new GU(UU)), TU ? ZU(RU, jU) : RU;
        if (KU = UU.d, cU = RU.d, PU = UU.e, pU = RU.e, KU = KU.slice(), EU = PU - pU) {
          for (EU < 0 ? (tU = KU, EU = -EU, qU = cU.length) : (tU = cU, pU = PU, qU = KU.length), EU > (qU = (PU = Math.ceil(jU / 7)) > qU ? PU + 1 : qU + 1) && (EU = qU, tU.length = 1), tU.reverse(); EU--;) tU.push(0);
          tU.reverse()
        }
        for ((qU = KU.length) - (EU = cU.length) < 0 && (EU = qU, tU = cU, cU = KU, KU = tU), gU = 0; EU;) gU = (KU[--EU] = KU[EU] + cU[EU] + gU) / CU | 0, KU[EU] %= CU;
        for (gU && (KU.unshift(gU), ++pU), qU = KU.length; 0 == KU[--qU];) KU.pop();
        return RU.d = KU, RU.e = pU, TU ? ZU(RU, jU) : RU
      }

      function fU(UU, RU, gU) {
        if (UU !== ~~UU || UU < RU || UU > gU) throw Error(KU + UU)
      }

      function xU(UU) {
        var RU, gU, tU, pU = UU.length - 1,
          EU = "",
          PU = UU[0];
        if (pU > 0) {
          for (EU += PU, RU = 1; RU < pU; RU++)(gU = 7 - (tU = UU[RU] + "").length) && (EU += nU(gU)), EU += tU;
          (gU = 7 - (tU = (PU = UU[RU]) + "").length) && (EU += nU(gU))
        } else if (0 === PU) return "0";
        for (; PU % 10 === 0;) PU /= 10;
        return EU + PU
      }
      eU.absoluteValue = eU.abs = function() {
        var UU = new this.constructor(this);
        return UU.s && (UU.s = 1), UU
      }, eU.comparedTo = eU.cmp = function(UU) {
        var RU, gU, tU, pU, EU = this;
        if (UU = new EU.constructor(UU), EU.s !== UU.s) return EU.s || -UU.s;
        if (EU.e !== UU.e) return EU.e > UU.e ^ EU.s < 0 ? 1 : -1;
        for (RU = 0, gU = (tU = EU.d.length) < (pU = UU.d.length) ? tU : pU; RU < gU; ++RU)
          if (EU.d[RU] !== UU.d[RU]) return EU.d[RU] > UU.d[RU] ^ EU.s < 0 ? 1 : -1;
        return tU === pU ? 0 : tU > pU ^ EU.s < 0 ? 1 : -1
      }, eU.decimalPlaces = eU.dp = function() {
        var UU = this,
          RU = UU.d.length - 1,
          gU = 7 * (RU - UU.e);
        if (RU = UU.d[RU])
          for (; RU % 10 == 0; RU /= 10) gU--;
        return gU < 0 ? 0 : gU
      }, eU.dividedBy = eU.div = function(UU) {
        return mU(this, new this.constructor(UU))
      }, eU.dividedToIntegerBy = eU.idiv = function(UU) {
        var RU = this.constructor;
        return ZU(mU(this, new RU(UU), 0, 1), RU.precision)
      }, eU.equals = eU.eq = function(UU) {
        return !this.cmp(UU)
      }, eU.exponent = function() {
        return JU(this)
      }, eU.greaterThan = eU.gt = function(UU) {
        return this.cmp(UU) > 0
      }, eU.greaterThanOrEqualTo = eU.gte = function(UU) {
        return this.cmp(UU) >= 0
      }, eU.isInteger = eU.isint = function() {
        return this.e > this.d.length - 2
      }, eU.isNegative = eU.isneg = function() {
        return this.s < 0
      }, eU.isPositive = eU.ispos = function() {
        return this.s > 0
      }, eU.isZero = function() {
        return 0 === this.s
      }, eU.lessThan = eU.lt = function(UU) {
        return this.cmp(UU) < 0
      }, eU.lessThanOrEqualTo = eU.lte = function(UU) {
        return this.cmp(UU) < 1
      }, eU.logarithm = eU.log = function(UU) {
        var RU, gU = this,
          tU = gU.constructor,
          EU = tU.precision,
          PU = EU + 5;
        if (void 0 === UU) UU = new tU(10);
        else if ((UU = new tU(UU)).s < 1 || UU.eq(pU)) throw Error(qU + "NaN");
        if (gU.s < 1) throw Error(qU + (gU.s ? "NaN" : "-Infinity"));
        return gU.eq(pU) ? new tU(0) : (TU = !1, RU = mU(bU(gU, PU), bU(UU, PU), PU), TU = !0, ZU(RU, EU))
      }, eU.minus = eU.sub = function(UU) {
        var RU = this;
        return UU = new RU.constructor(UU), RU.s == UU.s ? aU(RU, UU) : WU(RU, (UU.s = -UU.s, UU))
      }, eU.modulo = eU.mod = function(UU) {
        var RU, gU = this,
          tU = gU.constructor,
          pU = tU.precision;
        if (!(UU = new tU(UU)).s) throw Error(qU + "NaN");
        return gU.s ? (TU = !1, RU = mU(gU, UU, 0, 1).times(UU), TU = !0, gU.minus(RU)) : ZU(new tU(gU), pU)
      }, eU.naturalExponential = eU.exp = function() {
        return IU(this)
      }, eU.naturalLogarithm = eU.ln = function() {
        return bU(this)
      }, eU.negated = eU.neg = function() {
        var UU = new this.constructor(this);
        return UU.s = -UU.s || 0, UU
      }, eU.plus = eU.add = function(UU) {
        var RU = this;
        return UU = new RU.constructor(UU), RU.s == UU.s ? WU(RU, UU) : aU(RU, (UU.s = -UU.s, UU))
      }, eU.precision = eU.sd = function(UU) {
        var RU, gU, tU, pU = this;
        if (void 0 !== UU && UU !== !!UU && 1 !== UU && 0 !== UU) throw Error(KU + UU);
        if (RU = JU(pU) + 1, gU = 7 * (tU = pU.d.length - 1) + 1, tU = pU.d[tU]) {
          for (; tU % 10 == 0; tU /= 10) gU--;
          for (tU = pU.d[0]; tU >= 10; tU /= 10) gU++
        }
        return UU && RU > gU ? RU : gU
      }, eU.squareRoot = eU.sqrt = function() {
        var UU, RU, gU, tU, pU, EU, PU, KU = this,
          cU = KU.constructor;
        if (KU.s < 1) {
          if (!KU.s) return new cU(0);
          throw Error(qU + "NaN")
        }
        for (UU = JU(KU), TU = !1, 0 == (pU = Math.sqrt(+KU)) || pU == 1 / 0 ? (((RU = xU(KU.d)).length + UU) % 2 == 0 && (RU += "0"), pU = Math.sqrt(RU), UU = GU((UU + 1) / 2) - (UU < 0 || UU % 2), tU = new cU(RU = pU == 1 / 0 ? "1e" + UU : (RU = pU.toExponential()).slice(0, RU.indexOf("e") + 1) + UU)) : tU = new cU(pU.toString()), pU = PU = (gU = cU.precision) + 3;;)
          if (tU = (EU = tU).plus(mU(KU, EU, PU + 2)).times(.5), xU(EU.d).slice(0, PU) === (RU = xU(tU.d)).slice(0, PU)) {
            if (RU = RU.slice(PU - 3, PU + 1), pU == PU && "4999" == RU) {
              if (ZU(EU, gU + 1, 0), EU.times(EU).eq(KU)) {
                tU = EU;
                break
              }
            } else if ("9999" != RU) break;
            PU += 4
          } return TU = !0, ZU(tU, gU)
      }, eU.times = eU.mul = function(UU) {
        var RU, gU, tU, pU, EU, PU, qU, KU, cU, GU = this,
          jU = GU.constructor,
          uU = GU.d,
          hU = (UU = new jU(UU)).d;
        if (!GU.s || !UU.s) return new jU(0);
        for (UU.s *= GU.s, gU = GU.e + UU.e, (KU = uU.length) < (cU = hU.length) && (EU = uU, uU = hU, hU = EU, PU = KU, KU = cU, cU = PU), EU = [], tU = PU = KU + cU; tU--;) EU.push(0);
        for (tU = cU; --tU >= 0;) {
          for (RU = 0, pU = KU + tU; pU > tU;) qU = EU[pU] + hU[tU] * uU[pU - tU - 1] + RU, EU[pU--] = qU % CU | 0, RU = qU / CU | 0;
          EU[pU] = (EU[pU] + RU) % CU | 0
        }
        for (; !EU[--PU];) EU.pop();
        return RU ? ++gU : EU.shift(), UU.d = EU, UU.e = gU, TU ? ZU(UU, jU.precision) : UU
      }, eU.toDecimalPlaces = eU.todp = function(UU, RU) {
        var gU = this,
          tU = gU.constructor;
        return gU = new tU(gU), void 0 === UU ? gU : (fU(UU, 0, EU), void 0 === RU ? RU = tU.rounding : fU(RU, 0, 8), ZU(gU, UU + JU(gU) + 1, RU))
      }, eU.toExponential = function(UU, RU) {
        var gU, tU = this,
          pU = tU.constructor;
        return void 0 === UU ? gU = YU(tU, !0) : (fU(UU, 0, EU), void 0 === RU ? RU = pU.rounding : fU(RU, 0, 8), gU = YU(tU = ZU(new pU(tU), UU + 1, RU), !0, UU + 1)), gU
      }, eU.toFixed = function(UU, RU) {
        var gU, tU, pU = this,
          PU = pU.constructor;
        return void 0 === UU ? YU(pU) : (fU(UU, 0, EU), void 0 === RU ? RU = PU.rounding : fU(RU, 0, 8), gU = YU((tU = ZU(new PU(pU), UU + JU(pU) + 1, RU)).abs(), !1, UU + JU(tU) + 1), pU.isneg() && !pU.isZero() ? "-" + gU : gU)
      }, eU.toInteger = eU.toint = function() {
        var UU = this,
          RU = UU.constructor;
        return ZU(new RU(UU), JU(UU) + 1, RU.rounding)
      }, eU.toNumber = function() {
        return +this
      }, eU.toPower = eU.pow = function(UU) {
        var RU, gU, tU, EU, PU, KU, cU = this,
          jU = cU.constructor,
          uU = +(UU = new jU(UU));
        if (!UU.s) return new jU(pU);
        if (!(cU = new jU(cU)).s) {
          if (UU.s < 1) throw Error(qU + "Infinity");
          return cU
        }
        if (cU.eq(pU)) return cU;
        if (tU = jU.precision, UU.eq(pU)) return ZU(cU, tU);
        if (KU = (RU = UU.e) >= (gU = UU.d.length - 1), PU = cU.s, KU) {
          if ((gU = uU < 0 ? -uU : uU) <= hU) {
            for (EU = new jU(pU), RU = Math.ceil(tU / 7 + 4), TU = !1; gU % 2 && BU((EU = EU.times(cU)).d, RU), 0 !== (gU = GU(gU / 2));) BU((cU = cU.times(cU)).d, RU);
            return TU = !0, UU.s < 0 ? new jU(pU).div(EU) : ZU(EU, tU)
          }
        } else if (PU < 0) throw Error(qU + "NaN");
        return PU = PU < 0 && 1 & UU.d[Math.max(RU, gU)] ? -1 : 1, cU.s = 1, TU = !1, EU = UU.times(bU(cU, tU + 12)), TU = !0, (EU = IU(EU)).s = PU, EU
      }, eU.toPrecision = function(UU, RU) {
        var gU, tU, pU = this,
          PU = pU.constructor;
        return void 0 === UU ? tU = YU(pU, (gU = JU(pU)) <= PU.toExpNeg || gU >= PU.toExpPos) : (fU(UU, 1, EU), void 0 === RU ? RU = PU.rounding : fU(RU, 0, 8), tU = YU(pU = ZU(new PU(pU), UU, RU), UU <= (gU = JU(pU)) || gU <= PU.toExpNeg, UU)), tU
      }, eU.toSignificantDigits = eU.tosd = function(UU, RU) {
        var gU = this.constructor;
        return void 0 === UU ? (UU = gU.precision, RU = gU.rounding) : (fU(UU, 1, EU), void 0 === RU ? RU = gU.rounding : fU(RU, 0, 8)), ZU(new gU(this), UU, RU)
      }, eU.toString = eU.valueOf = eU.val = eU.toJSON = function() {
        var UU = this,
          RU = JU(UU),
          gU = UU.constructor;
        return YU(UU, RU <= gU.toExpNeg || RU >= gU.toExpPos)
      };
      var mU = function() {
        function UU(UU, RU) {
          var gU, tU = 0,
            pU = UU.length;
          for (UU = UU.slice(); pU--;) gU = UU[pU] * RU + tU, UU[pU] = gU % CU | 0, tU = gU / CU | 0;
          return tU && UU.unshift(tU), UU
        }

        function RU(UU, RU, gU, tU) {
          var pU, EU;
          if (gU != tU) EU = gU > tU ? 1 : -1;
          else
            for (pU = EU = 0; pU < gU; pU++)
              if (UU[pU] != RU[pU]) {
                EU = UU[pU] > RU[pU] ? 1 : -1;
                break
              } return EU
        }

        function gU(UU, RU, gU) {
          for (var tU = 0; gU--;) UU[gU] -= tU, tU = UU[gU] < RU[gU] ? 1 : 0, UU[gU] = tU * CU + UU[gU] - RU[gU];
          for (; !UU[0] && UU.length > 1;) UU.shift()
        }
        return function(tU, pU, EU, PU) {
          var TU, KU, cU, GU, jU, uU, hU, QU, eU, WU, fU, xU, mU, IU, wU, nU, bU, oU, aU = tU.constructor,
            YU = tU.s == pU.s ? 1 : -1,
            BU = tU.d,
            VU = pU.d;
          if (!tU.s) return new aU(tU);
          if (!pU.s) throw Error(qU + "Division by zero");
          for (KU = tU.e - pU.e, bU = VU.length, wU = BU.length, QU = (hU = new aU(YU)).d = [], cU = 0; VU[cU] == (BU[cU] || 0);) ++cU;
          if (VU[cU] > (BU[cU] || 0) && --KU, (xU = null == EU ? EU = aU.precision : PU ? EU + (JU(tU) - JU(pU)) + 1 : EU) < 0) return new aU(0);
          if (xU = xU / 7 + 2 | 0, cU = 0, 1 == bU)
            for (GU = 0, VU = VU[0], xU++;
              (cU < wU || GU) && xU--; cU++) mU = GU * CU + (BU[cU] || 0), QU[cU] = mU / VU | 0, GU = mU % VU | 0;
          else {
            for ((GU = CU / (VU[0] + 1) | 0) > 1 && (VU = UU(VU, GU), BU = UU(BU, GU), bU = VU.length, wU = BU.length), IU = bU, WU = (eU = BU.slice(0, bU)).length; WU < bU;) eU[WU++] = 0;
            (oU = VU.slice()).unshift(0), nU = VU[0], VU[1] >= CU / 2 && ++nU;
            do {
              GU = 0, (TU = RU(VU, eU, bU, WU)) < 0 ? (fU = eU[0], bU != WU && (fU = fU * CU + (eU[1] || 0)), (GU = fU / nU | 0) > 1 ? (GU >= CU && (GU = CU - 1), 1 == (TU = RU(jU = UU(VU, GU), eU, uU = jU.length, WU = eU.length)) && (GU--, gU(jU, bU < uU ? oU : VU, uU))) : (0 == GU && (TU = GU = 1), jU = VU.slice()), (uU = jU.length) < WU && jU.unshift(0), gU(eU, jU, WU), -1 == TU && (TU = RU(VU, eU, bU, WU = eU.length)) < 1 && (GU++, gU(eU, bU < WU ? oU : VU, WU)), WU = eU.length) : 0 === TU && (GU++, eU = [0]), QU[cU++] = GU, TU && eU[0] ? eU[WU++] = BU[IU] || 0 : (eU = [BU[IU]], WU = 1)
            } while ((IU++ < wU || void 0 !== eU[0]) && xU--)
          }
          return QU[0] || QU.shift(), hU.e = KU, ZU(hU, PU ? EU + JU(hU) + 1 : EU)
        }
      }();

      function IU(UU, RU) {
        var gU, tU, EU, PU, qU, KU = 0,
          GU = 0,
          uU = UU.constructor,
          CU = uU.precision;
        if (JU(UU) > 16) throw Error(cU + JU(UU));
        if (!UU.s) return new uU(pU);
        for (null == RU ? (TU = !1, qU = CU) : qU = RU, PU = new uU(.03125); UU.abs().gte(.1);) UU = UU.times(PU), GU += 5;
        for (qU += Math.log(jU(2, GU)) / Math.LN10 * 2 + 5 | 0, gU = tU = EU = new uU(pU), uU.precision = qU;;) {
          if (tU = ZU(tU.times(UU), qU), gU = gU.times(++KU), xU((PU = EU.plus(mU(tU, gU, qU))).d).slice(0, qU) === xU(EU.d).slice(0, qU)) {
            for (; GU--;) EU = ZU(EU.times(EU), qU);
            return uU.precision = CU, null == RU ? (TU = !0, ZU(EU, CU)) : EU
          }
          EU = PU
        }
      }

      function JU(UU) {
        for (var RU = 7 * UU.e, gU = UU.d[0]; gU >= 10; gU /= 10) RU++;
        return RU
      }

      function wU(UU, RU, gU) {
        if (RU > UU.LN10.sd()) throw TU = !0, gU && (UU.precision = gU), Error(qU + "LN10 precision limit exceeded");
        return ZU(new UU(UU.LN10), RU)
      }

      function nU(UU) {
        for (var RU = ""; UU--;) RU += "0";
        return RU
      }

      function bU(UU, RU) {
        var gU, tU, EU, PU, KU, cU, GU, jU, uU, CU = 1,
          hU = UU,
          QU = hU.d,
          eU = hU.constructor,
          WU = eU.precision;
        if (hU.s < 1) throw Error(qU + (hU.s ? "NaN" : "-Infinity"));
        if (hU.eq(pU)) return new eU(0);
        if (null == RU ? (TU = !1, jU = WU) : jU = RU, hU.eq(10)) return null == RU && (TU = !0), wU(eU, jU);
        if (jU += 10, eU.precision = jU, tU = (gU = xU(QU)).charAt(0), PU = JU(hU), !(Math.abs(PU) < 15e14)) return GU = wU(eU, jU + 2, WU).times(PU + ""), hU = bU(new eU(tU + "." + gU.slice(1)), jU - 10).plus(GU), eU.precision = WU, null == RU ? (TU = !0, ZU(hU, WU)) : hU;
        for (; tU < 7 && 1 != tU || 1 == tU && gU.charAt(1) > 3;) tU = (gU = xU((hU = hU.times(UU)).d)).charAt(0), CU++;
        for (PU = JU(hU), tU > 1 ? (hU = new eU("0." + gU), PU++) : hU = new eU(tU + "." + gU.slice(1)), cU = KU = hU = mU(hU.minus(pU), hU.plus(pU), jU), uU = ZU(hU.times(hU), jU), EU = 3;;) {
          if (KU = ZU(KU.times(uU), jU), xU((GU = cU.plus(mU(KU, new eU(EU), jU))).d).slice(0, jU) === xU(cU.d).slice(0, jU)) return cU = cU.times(2), 0 !== PU && (cU = cU.plus(wU(eU, jU + 2, WU).times(PU + ""))), cU = mU(cU, new eU(CU), jU), eU.precision = WU, null == RU ? (TU = !0, ZU(cU, WU)) : cU;
          cU = GU, EU += 2
        }
      }

      function oU(UU, RU) {
        var gU, tU, pU;
        for ((gU = RU.indexOf(".")) > -1 && (RU = RU.replace(".", "")), (tU = RU.search(/e/i)) > 0 ? (gU < 0 && (gU = tU), gU += +RU.slice(tU + 1), RU = RU.substring(0, tU)) : gU < 0 && (gU = RU.length), tU = 0; 48 === RU.charCodeAt(tU);) ++tU;
        for (pU = RU.length; 48 === RU.charCodeAt(pU - 1);) --pU;
        if (RU = RU.slice(tU, pU)) {
          if (pU -= tU, gU = gU - tU - 1, UU.e = GU(gU / 7), UU.d = [], tU = (gU + 1) % 7, gU < 0 && (tU += 7), tU < pU) {
            for (tU && UU.d.push(+RU.slice(0, tU)), pU -= 7; tU < pU;) UU.d.push(+RU.slice(tU, tU += 7));
            tU = 7 - (RU = RU.slice(tU)).length
          } else tU -= pU;
          for (; tU--;) RU += "0";
          if (UU.d.push(+RU), TU && (UU.e > QU || UU.e < -QU)) throw Error(cU + gU)
        } else UU.s = 0, UU.e = 0, UU.d = [0];
        return UU
      }

      function ZU(UU, RU, gU) {
        var tU, pU, EU, PU, qU, KU, uU, hU, eU = UU.d;
        for (PU = 1, EU = eU[0]; EU >= 10; EU /= 10) PU++;
        if ((tU = RU - PU) < 0) tU += 7, pU = RU, uU = eU[hU = 0];
        else {
          if ((hU = Math.ceil((tU + 1) / 7)) >= (EU = eU.length)) return UU;
          for (uU = EU = eU[hU], PU = 1; EU >= 10; EU /= 10) PU++;
          pU = (tU %= 7) - 7 + PU
        }
        if (void 0 !== gU && (qU = uU / (EU = jU(10, PU - pU - 1)) % 10 | 0, KU = RU < 0 || void 0 !== eU[hU + 1] || uU % EU, KU = gU < 4 ? (qU || KU) && (0 == gU || gU == (UU.s < 0 ? 3 : 2)) : qU > 5 || 5 == qU && (4 == gU || KU || 6 == gU && (tU > 0 ? pU > 0 ? uU / jU(10, PU - pU) : 0 : eU[hU - 1]) % 10 & 1 || gU == (UU.s < 0 ? 8 : 7))), RU < 1 || !eU[0]) return KU ? (EU = JU(UU), eU.length = 1, RU = RU - EU - 1, eU[0] = jU(10, (7 - RU % 7) % 7), UU.e = GU(-RU / 7) || 0) : (eU.length = 1, eU[0] = UU.e = UU.s = 0), UU;
        if (0 == tU ? (eU.length = hU, EU = 1, hU--) : (eU.length = hU + 1, EU = jU(10, 7 - tU), eU[hU] = pU > 0 ? (uU / jU(10, PU - pU) % jU(10, pU) | 0) * EU : 0), KU)
          for (;;) {
            if (0 == hU) {
              (eU[0] += EU) == CU && (eU[0] = 1, ++UU.e);
              break
            }
            if (eU[hU] += EU, eU[hU] != CU) break;
            eU[hU--] = 0, EU = 1
          }
        for (tU = eU.length; 0 === eU[--tU];) eU.pop();
        if (TU && (UU.e > QU || UU.e < -QU)) throw Error(cU + JU(UU));
        return UU
      }

      function aU(UU, RU) {
        var gU, tU, pU, EU, PU, qU, KU, cU, GU, jU, uU = UU.constructor,
          hU = uU.precision;
        if (!UU.s || !RU.s) return RU.s ? RU.s = -RU.s : RU = new uU(UU), TU ? ZU(RU, hU) : RU;
        if (KU = UU.d, jU = RU.d, tU = RU.e, cU = UU.e, KU = KU.slice(), PU = cU - tU) {
          for ((GU = PU < 0) ? (gU = KU, PU = -PU, qU = jU.length) : (gU = jU, tU = cU, qU = KU.length), PU > (pU = Math.max(Math.ceil(hU / 7), qU) + 2) && (PU = pU, gU.length = 1), gU.reverse(), pU = PU; pU--;) gU.push(0);
          gU.reverse()
        } else {
          for ((GU = (pU = KU.length) < (qU = jU.length)) && (qU = pU), pU = 0; pU < qU; pU++)
            if (KU[pU] != jU[pU]) {
              GU = KU[pU] < jU[pU];
              break
            } PU = 0
        }
        for (GU && (gU = KU, KU = jU, jU = gU, RU.s = -RU.s), qU = KU.length, pU = jU.length - qU; pU > 0; --pU) KU[qU++] = 0;
        for (pU = jU.length; pU > PU;) {
          if (KU[--pU] < jU[pU]) {
            for (EU = pU; EU && 0 === KU[--EU];) KU[EU] = CU - 1;
            --KU[EU], KU[pU] += CU
          }
          KU[pU] -= jU[pU]
        }
        for (; 0 === KU[--qU];) KU.pop();
        for (; 0 === KU[0]; KU.shift()) --tU;
        return KU[0] ? (RU.d = KU, RU.e = tU, TU ? ZU(RU, hU) : RU) : new uU(0)
      }

      function YU(UU, RU, gU) {
        var tU, pU = JU(UU),
          EU = xU(UU.d),
          PU = EU.length;
        return RU ? (gU && (tU = gU - PU) > 0 ? EU = EU.charAt(0) + "." + EU.slice(1) + nU(tU) : PU > 1 && (EU = EU.charAt(0) + "." + EU.slice(1)), EU = EU + (pU < 0 ? "e" : "e+") + pU) : pU < 0 ? (EU = "0." + nU(-pU - 1) + EU, gU && (tU = gU - PU) > 0 && (EU += nU(tU))) : pU >= PU ? (EU += nU(pU + 1 - PU), gU && (tU = gU - pU - 1) > 0 && (EU = EU + "." + nU(tU))) : ((tU = pU + 1) < PU && (EU = EU.slice(0, tU) + "." + EU.slice(tU)), gU && (tU = gU - PU) > 0 && (pU + 1 === PU && (EU += "."), EU += nU(tU))), UU.s < 0 ? "-" + EU : EU
      }

      function BU(UU, RU) {
        if (UU.length > RU) return UU.length = RU, !0
      }

      function VU(UU) {
        if (!UU || "object" !== typeof UU) throw Error(qU + "Object expected");
        var RU, gU, tU, pU = ["precision", 1, EU, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (RU = 0; RU < pU.length; RU += 3)
          if (void 0 !== (tU = UU[gU = pU[RU]])) {
            if (!(GU(tU) === tU && tU >= pU[RU + 1] && tU <= pU[RU + 2])) throw Error(KU + gU + ": " + tU);
            this[gU] = tU
          } if (void 0 !== (tU = UU[gU = "LN10"])) {
          if (tU != Math.LN10) throw Error(KU + gU + ": " + tU);
          this[gU] = new this(tU)
        }
        return this
      }
      PU = function UU(RU) {
        var gU, tU, pU;

        function EU(UU) {
          var RU = this;
          if (!(RU instanceof EU)) return new EU(UU);
          if (RU.constructor = EU, UU instanceof EU) return RU.s = UU.s, RU.e = UU.e, void(RU.d = (UU = UU.d) ? UU.slice() : UU);
          if ("number" === typeof UU) {
            if (0 * UU !== 0) throw Error(KU + UU);
            if (UU > 0) RU.s = 1;
            else {
              if (!(UU < 0)) return RU.s = 0, RU.e = 0, void(RU.d = [0]);
              UU = -UU, RU.s = -1
            }
            return UU === ~~UU && UU < 1e7 ? (RU.e = 0, void(RU.d = [UU])) : oU(RU, UU.toString())
          }
          if ("string" !== typeof UU) throw Error(KU + UU);
          if (45 === UU.charCodeAt(0) ? (UU = UU.slice(1), RU.s = -1) : RU.s = 1, !uU.test(UU)) throw Error(KU + UU);
          oU(RU, UU)
        }
        if (EU.prototype = eU, EU.ROUND_UP = 0, EU.ROUND_DOWN = 1, EU.ROUND_CEIL = 2, EU.ROUND_FLOOR = 3, EU.ROUND_HALF_UP = 4, EU.ROUND_HALF_DOWN = 5, EU.ROUND_HALF_EVEN = 6, EU.ROUND_HALF_CEIL = 7, EU.ROUND_HALF_FLOOR = 8, EU.clone = UU, EU.config = EU.set = VU, void 0 === RU && (RU = {}), RU)
          for (pU = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], gU = 0; gU < pU.length;) RU.hasOwnProperty(tU = pU[gU++]) || (RU[tU] = this[tU]);
        return EU.config(RU), EU
      }(PU), PU.default = PU.Decimal = PU, pU = new PU(1), void 0 === (tU = function() {
        return PU
      }.call(RU, gU, RU, UU)) || (UU.exports = tU)
    }()
  },
  5448: (UU, RU, gU) => {
    var tU = gU(4906)(gU(4757), "DataView");
    UU.exports = tU
  },
  4887: (UU, RU, gU) => {
    var tU = gU(4892),
      pU = gU(4954),
      EU = gU(4958),
      PU = gU(4967),
      TU = gU(4975);

    function qU(UU) {
      var RU = -1,
        gU = null == UU ? 0 : UU.length;
      for (this.clear(); ++RU < gU;) {
        var tU = UU[RU];
        this.set(tU[0], tU[1])
      }
    }
    qU.prototype.clear = tU, qU.prototype.delete = pU, qU.prototype.get = EU, qU.prototype.has = PU, qU.prototype.set = TU, UU.exports = qU
  },
  4980: (UU, RU, gU) => {
    var tU = gU(4989),
      pU = gU(4998),
      EU = gU(5010),
      PU = gU(5014),
      TU = gU(5017);

    function qU(UU) {
      var RU = -1,
        gU = null == UU ? 0 : UU.length;
      for (this.clear(); ++RU < gU;) {
        var tU = UU[RU];
        this.set(tU[0], tU[1])
      }
    }
    qU.prototype.clear = tU, qU.prototype.delete = pU, qU.prototype.get = EU, qU.prototype.has = PU, qU.prototype.set = TU, UU.exports = qU
  },
  5022: (UU, RU, gU) => {
    var tU = gU(4906)(gU(4757), "Map");
    UU.exports = tU
  },
  4880: (UU, RU, gU) => {
    var tU = gU(4882),
      pU = gU(5029),
      EU = gU(5047),
      PU = gU(5056),
      TU = gU(5059);

    function qU(UU) {
      var RU = -1,
        gU = null == UU ? 0 : UU.length;
      for (this.clear(); ++RU < gU;) {
        var tU = UU[RU];
        this.set(tU[0], tU[1])
      }
    }
    qU.prototype.clear = tU, qU.prototype.delete = pU, qU.prototype.get = EU, qU.prototype.has = PU, qU.prototype.set = TU, UU.exports = qU
  },
  5450: (UU, RU, gU) => {
    var tU = gU(4906)(gU(4757), "Promise");
    UU.exports = tU
  },
  5452: (UU, RU, gU) => {
    var tU = gU(4906)(gU(4757), "Set");
    UU.exports = tU
  },
  5278: (UU, RU, gU) => {
    var tU = gU(4880),
      pU = gU(5280),
      EU = gU(5282);

    function PU(UU) {
      var RU = -1,
        gU = null == UU ? 0 : UU.length;
      for (this.__data__ = new tU; ++RU < gU;) this.add(UU[RU])
    }
    PU.prototype.add = PU.prototype.push = pU, PU.prototype.has = EU, UU.exports = PU
  },
  5228: (UU, RU, gU) => {
    var tU = gU(4980),
      pU = gU(5233),
      EU = gU(5240),
      PU = gU(5245),
      TU = gU(5252),
      qU = gU(5257);

    function KU(UU) {
      var RU = this.__data__ = new tU(UU);
      this.size = RU.size
    }
    KU.prototype.clear = pU, KU.prototype.delete = EU, KU.prototype.get = PU, KU.prototype.has = TU, KU.prototype.set = qU, UU.exports = KU
  },
  4799: (UU, RU, gU) => {
    var tU = gU(4757).Symbol;
    UU.exports = tU
  },
  5304: (UU, RU, gU) => {
    var tU = gU(4757).Uint8Array;
    UU.exports = tU
  },
  5461: (UU, RU, gU) => {
    var tU = gU(4906)(gU(4757), "WeakMap");
    UU.exports = tU
  },
  5592: UU => {
    UU.exports = function(UU, RU, gU) {
      switch (gU.length) {
        case 0:
          return UU.call(RU);
        case 1:
          return UU.call(RU, gU[0]);
        case 2:
          return UU.call(RU, gU[0], gU[1]);
        case 3:
          return UU.call(RU, gU[0], gU[1], gU[2])
      }
      return UU.apply(RU, gU)
    }
  },
  5937: UU => {
    UU.exports = function(UU, RU) {
      for (var gU = -1, tU = null == UU ? 0 : UU.length; ++gU < tU;)
        if (!RU(UU[gU], gU, UU)) return !1;
      return !0
    }
  },
  5338: UU => {
    UU.exports = function(UU, RU) {
      for (var gU = -1, tU = null == UU ? 0 : UU.length, pU = 0, EU = []; ++gU < tU;) {
        var PU = UU[gU];
        RU(PU, gU, UU) && (EU[pU++] = PU)
      }
      return EU
    }
  },
  5677: (UU, RU, gU) => {
    var tU = gU(5680);
    UU.exports = function(UU, RU) {
      return !!(null == UU ? 0 : UU.length) && tU(UU, RU, 0) > -1
    }
  },
  5701: UU => {
    UU.exports = function(UU, RU, gU) {
      for (var tU = -1, pU = null == UU ? 0 : UU.length; ++tU < pU;)
        if (gU(RU, UU[tU])) return !0;
      return !1
    }
  },
  5361: (UU, RU, gU) => {
    var tU = gU(5367),
      pU = gU(5193),
      EU = gU(4837),
      PU = gU(5376),
      TU = gU(5163),
      qU = gU(5388),
      KU = Object.prototype.hasOwnProperty;
    UU.exports = function(UU, RU) {
      var gU = EU(UU),
        cU = !gU && pU(UU),
        GU = !gU && !cU && PU(UU),
        jU = !gU && !cU && !GU && qU(UU),
        uU = gU || cU || GU || jU,
        CU = uU ? tU(UU.length, String) : [],
        hU = CU.length;
      for (var QU in UU) !RU && !KU.call(UU, QU) || uU && ("length" == QU || GU && ("offset" == QU || "parent" == QU) || jU && ("buffer" == QU || "byteLength" == QU || "byteOffset" == QU) || TU(QU, hU)) || CU.push(QU);
      return CU
    }
  },
  5074: UU => {
    UU.exports = function(UU, RU) {
      for (var gU = -1, tU = null == UU ? 0 : UU.length, pU = Array(tU); ++gU < tU;) pU[gU] = RU(UU[gU], gU, UU);
      return pU
    }
  },
  5185: UU => {
    UU.exports = function(UU, RU) {
      for (var gU = -1, tU = RU.length, pU = UU.length; ++gU < tU;) UU[pU + gU] = RU[gU];
      return UU
    }
  },
  5285: UU => {
    UU.exports = function(UU, RU) {
      for (var gU = -1, tU = null == UU ? 0 : UU.length; ++gU < tU;)
        if (RU(UU[gU], gU, UU)) return !0;
      return !1
    }
  },
  5768: UU => {
    UU.exports = function(UU) {
      return UU.split("")
    }
  },
  5e3: (UU, RU, gU) => {
    var tU = gU(5005);
    UU.exports = function(UU, RU) {
      for (var gU = UU.length; gU--;)
        if (tU(UU[gU][0], RU)) return gU;
      return -1
    }
  },
  5926: (UU, RU, gU) => {
    var tU = gU(5610);
    UU.exports = function(UU, RU, gU) {
      "__proto__" == RU && tU ? tU(UU, RU, {
        configurable: !0,
        enumerable: !0,
        value: gU,
        writable: !0
      }) : UU[RU] = gU
    }
  },
  5532: (UU, RU, gU) => {
    var tU = gU(5541),
      pU = gU(5557)(tU);
    UU.exports = pU
  },
  5941: (UU, RU, gU) => {
    var tU = gU(5532);
    UU.exports = function(UU, RU) {
      var gU = !0;
      return tU(UU, (function(UU, tU, pU) {
        return gU = !!RU(UU, tU, pU)
      })), gU
    }
  },
  5850: (UU, RU, gU) => {
    var tU = gU(4792);
    UU.exports = function(UU, RU, gU) {
      for (var pU = -1, EU = UU.length; ++pU < EU;) {
        var PU = UU[pU],
          TU = RU(PU);
        if (null != TU && (void 0 === qU ? TU === TU && !tU(TU) : gU(TU, qU))) var qU = TU,
          KU = PU
      }
      return KU
    }
  },
  5682: UU => {
    UU.exports = function(UU, RU, gU, tU) {
      for (var pU = UU.length, EU = gU + (tU ? 1 : -1); tU ? EU-- : ++EU < pU;)
        if (RU(UU[EU], EU, UU)) return EU;
      return -1
    }
  },
  5179: (UU, RU, gU) => {
    var tU = gU(5185),
      pU = gU(5191);
    UU.exports = function UU(RU, gU, EU, PU, TU) {
      var qU = -1,
        KU = RU.length;
      for (EU || (EU = pU), TU || (TU = []); ++qU < KU;) {
        var cU = RU[qU];
        gU > 0 && EU(cU) ? gU > 1 ? UU(cU, gU - 1, EU, PU, TU) : tU(TU, cU) : PU || (TU[TU.length] = cU)
      }
      return TU
    }
  },
  5549: (UU, RU, gU) => {
    var tU = gU(5555)();
    UU.exports = tU
  },
  5541: (UU, RU, gU) => {
    var tU = gU(5549),
      pU = gU(5354);
    UU.exports = function(UU, RU) {
      return UU && tU(UU, RU, pU)
    }
  },
  4849: (UU, RU, gU) => {
    var tU = gU(4855),
      pU = gU(5080);
    UU.exports = function(UU, RU) {
      for (var gU = 0, EU = (RU = tU(RU, UU)).length; null != UU && gU < EU;) UU = UU[pU(RU[gU++])];
      return gU && gU == EU ? UU : void 0
    }
  },
  5325: (UU, RU, gU) => {
    var tU = gU(5185),
      pU = gU(4837);
    UU.exports = function(UU, RU, gU) {
      var EU = RU(UU);
      return pU(UU) ? EU : tU(EU, gU(UU))
    }
  },
  4796: (UU, RU, gU) => {
    var tU = gU(4799),
      pU = gU(4808),
      EU = gU(4816),
      PU = tU ? tU.toStringTag : void 0;
    UU.exports = function(UU) {
      return null == UU ? void 0 === UU ? "[object Undefined]" : "[object Null]" : PU && PU in Object(UU) ? pU(UU) : EU(UU)
    }
  },
  5853: UU => {
    UU.exports = function(UU, RU) {
      return UU > RU
    }
  },
  5503: UU => {
    UU.exports = function(UU, RU) {
      return null != UU && RU in Object(UU)
    }
  },
  5680: (UU, RU, gU) => {
    var tU = gU(5682),
      pU = gU(5686),
      EU = gU(5694);
    UU.exports = function(UU, RU, gU) {
      return RU === RU ? EU(UU, RU, gU) : tU(UU, pU, gU)
    }
  },
  5199: (UU, RU, gU) => {
    var tU = gU(4796),
      pU = gU(4820);
    UU.exports = function(UU) {
      return pU(UU) && "[object Arguments]" == tU(UU)
    }
  },
  5262: (UU, RU, gU) => {
    var tU = gU(5269),
      pU = gU(4820);
    UU.exports = function UU(RU, gU, EU, PU, TU) {
      return RU === gU || (null == RU || null == gU || !pU(RU) && !pU(gU) ? RU !== RU && gU !== gU : tU(RU, gU, EU, PU, UU, TU))
    }
  },
  5269: (UU, RU, gU) => {
    var tU = gU(5228),
      pU = gU(5274),
      EU = gU(5296),
      PU = gU(5318),
      TU = gU(5442),
      qU = gU(4837),
      KU = gU(5376),
      cU = gU(5388),
      GU = "[object Arguments]",
      jU = "[object Array]",
      uU = "[object Object]",
      CU = Object.prototype.hasOwnProperty;
    UU.exports = function(UU, RU, gU, hU, QU, eU) {
      var WU = qU(UU),
        fU = qU(RU),
        xU = WU ? jU : TU(UU),
        mU = fU ? jU : TU(RU),
        IU = (xU = xU == GU ? uU : xU) == uU,
        JU = (mU = mU == GU ? uU : mU) == uU,
        wU = xU == mU;
      if (wU && KU(UU)) {
        if (!KU(RU)) return !1;
        WU = !0, IU = !1
      }
      if (wU && !IU) return eU || (eU = new tU), WU || cU(UU) ? pU(UU, RU, gU, hU, QU, eU) : EU(UU, RU, xU, gU, hU, QU, eU);
      if (!(1 & gU)) {
        var nU = IU && CU.call(UU, "__wrapped__"),
          bU = JU && CU.call(RU, "__wrapped__");
        if (nU || bU) {
          var oU = nU ? UU.value() : UU,
            ZU = bU ? RU.value() : RU;
          return eU || (eU = new tU), QU(oU, ZU, gU, hU, eU)
        }
      }
      return !!wU && (eU || (eU = new tU), PU(UU, RU, gU, hU, QU, eU))
    }
  },
  5220: (UU, RU, gU) => {
    var tU = gU(5228),
      pU = gU(5262);
    UU.exports = function(UU, RU, gU, EU) {
      var PU = gU.length,
        TU = PU,
        qU = !EU;
      if (null == UU) return !TU;
      for (UU = Object(UU); PU--;) {
        var KU = gU[PU];
        if (qU && KU[2] ? KU[1] !== UU[KU[0]] : !(KU[0] in UU)) return !1
      }
      for (; ++PU < TU;) {
        var cU = (KU = gU[PU])[0],
          GU = UU[cU],
          jU = KU[1];
        if (qU && KU[2]) {
          if (void 0 === GU && !(cU in UU)) return !1
        } else {
          var uU = new tU;
          if (EU) var CU = EU(GU, jU, cU, UU, RU, uU);
          if (!(void 0 === CU ? pU(jU, GU, 3, EU, uU) : CU)) return !1
        }
      }
      return !0
    }
  },
  5686: UU => {
    UU.exports = function(UU) {
      return UU !== UU
    }
  },
  4912: (UU, RU, gU) => {
    var tU = gU(4921),
      pU = gU(4929),
      EU = gU(4750),
      PU = gU(4943),
      TU = /^\[object .+?Constructor\]$/,
      qU = Function.prototype,
      KU = Object.prototype,
      cU = qU.toString,
      GU = KU.hasOwnProperty,
      jU = RegExp("^" + cU.call(GU).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    UU.exports = function(UU) {
      return !(!EU(UU) || pU(UU)) && (tU(UU) ? jU : TU).test(PU(UU))
    }
  },
  5394: (UU, RU, gU) => {
    var tU = gU(4796),
      pU = gU(5159),
      EU = gU(4820),
      PU = {};
    PU["[object Float32Array]"] = PU["[object Float64Array]"] = PU["[object Int8Array]"] = PU["[object Int16Array]"] = PU["[object Int32Array]"] = PU["[object Uint8Array]"] = PU["[object Uint8ClampedArray]"] = PU["[object Uint16Array]"] = PU["[object Uint32Array]"] = !0, PU["[object Arguments]"] = PU["[object Array]"] = PU["[object ArrayBuffer]"] = PU["[object Boolean]"] = PU["[object DataView]"] = PU["[object Date]"] = PU["[object Error]"] = PU["[object Function]"] = PU["[object Map]"] = PU["[object Number]"] = PU["[object Object]"] = PU["[object RegExp]"] = PU["[object Set]"] = PU["[object String]"] = PU["[object WeakMap]"] = !1, UU.exports = function(UU) {
      return EU(UU) && pU(UU.length) && !!PU[tU(UU)]
    }
  },
  5204: (UU, RU, gU) => {
    var tU = gU(5212),
      pU = gU(5487),
      EU = gU(5516),
      PU = gU(4837),
      TU = gU(5519);
    UU.exports = function(UU) {
      return "function" == typeof UU ? UU : null == UU ? EU : "object" == typeof UU ? PU(UU) ? pU(UU[0], UU[1]) : tU(UU) : TU(UU)
    }
  },
  5418: (UU, RU, gU) => {
    var tU = gU(5424),
      pU = gU(5428),
      EU = Object.prototype.hasOwnProperty;
    UU.exports = function(UU) {
      if (!tU(UU)) return pU(UU);
      var RU = [];
      for (var gU in Object(UU)) EU.call(UU, gU) && "constructor" != gU && RU.push(gU);
      return RU
    }
  },
  5863: UU => {
    UU.exports = function(UU, RU) {
      return UU < RU
    }
  },
  5529: (UU, RU, gU) => {
    var tU = gU(5532),
      pU = gU(5156);
    UU.exports = function(UU, RU) {
      var gU = -1,
        EU = pU(UU) ? Array(UU.length) : [];
      return tU(UU, (function(UU, tU, pU) {
        EU[++gU] = RU(UU, tU, pU)
      })), EU
    }
  },
  5212: (UU, RU, gU) => {
    var tU = gU(5220),
      pU = gU(5467),
      EU = gU(5482);
    UU.exports = function(UU) {
      var RU = pU(UU);
      return 1 == RU.length && RU[0][2] ? EU(RU[0][0], RU[0][1]) : function(gU) {
        return gU === UU || tU(gU, UU, RU)
      }
    }
  },
  5487: (UU, RU, gU) => {
    var tU = gU(5262),
      pU = gU(4846),
      EU = gU(5495),
      PU = gU(4863),
      TU = gU(5473),
      qU = gU(5482),
      KU = gU(5080);
    UU.exports = function(UU, RU) {
      return PU(UU) && TU(RU) ? qU(KU(UU), RU) : function(gU) {
        var PU = pU(gU, UU);
        return void 0 === PU && PU === RU ? EU(gU, UU) : tU(RU, PU, 3)
      }
    }
  },
  5202: (UU, RU, gU) => {
    var tU = gU(5074),
      pU = gU(4849),
      EU = gU(5204),
      PU = gU(5529),
      TU = gU(5562),
      qU = gU(5403),
      KU = gU(5565),
      cU = gU(5516),
      GU = gU(4837);
    UU.exports = function(UU, RU, gU) {
      RU = RU.length ? tU(RU, (function(UU) {
        return GU(UU) ? function(RU) {
          return pU(RU, 1 === UU.length ? UU[0] : UU)
        } : UU
      })) : [cU];
      var jU = -1;
      RU = tU(RU, qU(EU));
      var uU = PU(UU, (function(UU, gU, pU) {
        return {
          criteria: tU(RU, (function(RU) {
            return RU(UU)
          })),
          index: ++jU,
          value: UU
        }
      }));
      return TU(uU, (function(UU, RU) {
        return KU(UU, RU, gU)
      }))
    }
  },
  5522: UU => {
    UU.exports = function(UU) {
      return function(RU) {
        return null == RU ? void 0 : RU[UU]
      }
    }
  },
  5527: (UU, RU, gU) => {
    var tU = gU(4849);
    UU.exports = function(UU) {
      return function(RU) {
        return tU(RU, UU)
      }
    }
  },
  5147: UU => {
    var RU = Math.ceil,
      gU = Math.max;
    UU.exports = function(UU, tU, pU, EU) {
      for (var PU = -1, TU = gU(RU((tU - UU) / (pU || 1)), 0), qU = Array(TU); TU--;) qU[EU ? TU : ++PU] = UU, UU += pU;
      return qU
    }
  },
  5583: (UU, RU, gU) => {
    var tU = gU(5516),
      pU = gU(5590),
      EU = gU(5594);
    UU.exports = function(UU, RU) {
      return EU(pU(UU, RU, tU), UU + "")
    }
  },
  5599: (UU, RU, gU) => {
    var tU = gU(5604),
      pU = gU(5610),
      EU = gU(5516),
      PU = pU ? function(UU, RU) {
        return pU(UU, "toString", {
          configurable: !0,
          enumerable: !1,
          value: tU(RU),
          writable: !0
        })
      } : EU;
    UU.exports = PU
  },
  5749: UU => {
    UU.exports = function(UU, RU, gU) {
      var tU = -1,
        pU = UU.length;
      RU < 0 && (RU = -RU > pU ? 0 : pU + RU), (gU = gU > pU ? pU : gU) < 0 && (gU += pU), pU = RU > gU ? 0 : gU - RU >>> 0, RU >>>= 0;
      for (var EU = Array(pU); ++tU < pU;) EU[tU] = UU[tU + RU];
      return EU
    }
  },
  6010: (UU, RU, gU) => {
    var tU = gU(5532);
    UU.exports = function(UU, RU) {
      var gU;
      return tU(UU, (function(UU, tU, pU) {
        return !(gU = RU(UU, tU, pU))
      })), !!gU
    }
  },
  5562: UU => {
    UU.exports = function(UU, RU) {
      var gU = UU.length;
      for (UU.sort(RU); gU--;) UU[gU] = UU[gU].value;
      return UU
    }
  },
  5367: UU => {
    UU.exports = function(UU, RU) {
      for (var gU = -1, tU = Array(UU); ++gU < UU;) tU[gU] = RU(gU);
      return tU
    }
  },
  5066: (UU, RU, gU) => {
    var tU = gU(4799),
      pU = gU(5074),
      EU = gU(4837),
      PU = gU(4792),
      TU = tU ? tU.prototype : void 0,
      qU = TU ? TU.toString : void 0;
    UU.exports = function UU(RU) {
      if ("string" == typeof RU) return RU;
      if (EU(RU)) return pU(RU, UU) + "";
      if (PU(RU)) return qU ? qU.call(RU) : "";
      var gU = RU + "";
      return "0" == gU && 1 / RU == -1 / 0 ? "-0" : gU
    }
  },
  4776: (UU, RU, gU) => {
    var tU = gU(4785),
      pU = /^\s+/;
    UU.exports = function(UU) {
      return UU ? UU.slice(0, tU(UU) + 1).replace(pU, "") : UU
    }
  },
  5403: UU => {
    UU.exports = function(UU) {
      return function(RU) {
        return UU(RU)
      }
    }
  },
  5668: (UU, RU, gU) => {
    var tU = gU(5278),
      pU = gU(5677),
      EU = gU(5701),
      PU = gU(5292),
      TU = gU(5707),
      qU = gU(5315);
    UU.exports = function(UU, RU, gU) {
      var KU = -1,
        cU = pU,
        GU = UU.length,
        jU = !0,
        uU = [],
        CU = uU;
      if (gU) jU = !1, cU = EU;
      else if (GU >= 200) {
        var hU = RU ? null : TU(UU);
        if (hU) return qU(hU);
        jU = !1, cU = PU, CU = new tU
      } else CU = RU ? [] : uU;
      UU: for (; ++KU < GU;) {
        var QU = UU[KU],
          eU = RU ? RU(QU) : QU;
        if (QU = gU || 0 !== QU ? QU : 0, jU && eU === eU) {
          for (var WU = CU.length; WU--;)
            if (CU[WU] === eU) continue UU;
          RU && CU.push(eU), uU.push(QU)
        } else cU(CU, eU, gU) || (CU !== uU && CU.push(eU), uU.push(QU))
      }
      return uU
    }
  },
  5292: UU => {
    UU.exports = function(UU, RU) {
      return UU.has(RU)
    }
  },
  4855: (UU, RU, gU) => {
    var tU = gU(4837),
      pU = gU(4863),
      EU = gU(4868),
      PU = gU(5062);
    UU.exports = function(UU, RU) {
      return tU(UU) ? UU : pU(UU, RU) ? [UU] : EU(PU(UU))
    }
  },
  5742: (UU, RU, gU) => {
    var tU = gU(5749);
    UU.exports = function(UU, RU, gU) {
      var pU = UU.length;
      return gU = void 0 === gU ? pU : gU, !RU && gU >= pU ? UU : tU(UU, RU, gU)
    }
  },
  5574: (UU, RU, gU) => {
    var tU = gU(4792);
    UU.exports = function(UU, RU) {
      if (UU !== RU) {
        var gU = void 0 !== UU,
          pU = null === UU,
          EU = UU === UU,
          PU = tU(UU),
          TU = void 0 !== RU,
          qU = null === RU,
          KU = RU === RU,
          cU = tU(RU);
        if (!qU && !cU && !PU && UU > RU || PU && TU && KU && !qU && !cU || pU && TU && KU || !gU && KU || !EU) return 1;
        if (!pU && !PU && !cU && UU < RU || cU && gU && EU && !pU && !PU || qU && gU && EU || !TU && EU || !KU) return -1
      }
      return 0
    }
  },
  5565: (UU, RU, gU) => {
    var tU = gU(5574);
    UU.exports = function(UU, RU, gU) {
      for (var pU = -1, EU = UU.criteria, PU = RU.criteria, TU = EU.length, qU = gU.length; ++pU < TU;) {
        var KU = tU(EU[pU], PU[pU]);
        if (KU) return pU >= qU ? KU : KU * ("desc" == gU[pU] ? -1 : 1)
      }
      return UU.index - RU.index
    }
  },
  4936: (UU, RU, gU) => {
    var tU = gU(4757)["__core-js_shared__"];
    UU.exports = tU
  },
  5557: (UU, RU, gU) => {
    var tU = gU(5156);
    UU.exports = function(UU, RU) {
      return function(gU, pU) {
        if (null == gU) return gU;
        if (!tU(gU)) return UU(gU, pU);
        for (var EU = gU.length, PU = RU ? EU : -1, TU = Object(gU);
          (RU ? PU-- : ++PU < EU) && !1 !== pU(TU[PU], PU, TU););
        return gU
      }
    }
  },
  5555: UU => {
    UU.exports = function(UU) {
      return function(RU, gU, tU) {
        for (var pU = -1, EU = Object(RU), PU = tU(RU), TU = PU.length; TU--;) {
          var qU = PU[UU ? TU : ++pU];
          if (!1 === gU(EU[qU], qU, EU)) break
        }
        return RU
      }
    }
  },
  5740: (UU, RU, gU) => {
    var tU = gU(5742),
      pU = gU(5756),
      EU = gU(5760),
      PU = gU(5062);
    UU.exports = function(UU) {
      return function(RU) {
        RU = PU(RU);
        var gU = pU(RU) ? EU(RU) : void 0,
          TU = gU ? gU[0] : RU.charAt(0),
          qU = gU ? tU(gU, 1).join("") : RU.slice(1);
        return TU[UU]() + qU
      }
    }
  },
  6030: (UU, RU, gU) => {
    var tU = gU(5204),
      pU = gU(5156),
      EU = gU(5354);
    UU.exports = function(UU) {
      return function(RU, gU, PU) {
        var TU = Object(RU);
        if (!pU(RU)) {
          var qU = tU(gU, 3);
          RU = EU(RU), gU = function(UU) {
            return qU(TU[UU], UU, TU)
          }
        }
        var KU = UU(RU, gU, PU);
        return KU > -1 ? TU[qU ? RU[KU] : KU] : void 0
      }
    }
  },
  5145: (UU, RU, gU) => {
    var tU = gU(5147),
      pU = gU(5149),
      EU = gU(5165);
    UU.exports = function(UU) {
      return function(RU, gU, PU) {
        return PU && "number" != typeof PU && pU(RU, gU, PU) && (gU = PU = void 0), RU = EU(RU), void 0 === gU ? (gU = RU, RU = 0) : gU = EU(gU), PU = void 0 === PU ? RU < gU ? 1 : -1 : EU(PU), tU(RU, gU, PU, UU)
      }
    }
  },
  5707: (UU, RU, gU) => {
    var tU = gU(5452),
      pU = gU(5713),
      EU = gU(5315),
      PU = tU && 1 / EU(new tU([, -0]))[1] == 1 / 0 ? function(UU) {
        return new tU(UU)
      } : pU;
    UU.exports = PU
  },
  5610: (UU, RU, gU) => {
    var tU = gU(4906),
      pU = function() {
        try {
          var UU = tU(Object, "defineProperty");
          return UU({}, "", {}), UU
        } catch (RU) {}
      }();
    UU.exports = pU
  },
  5274: (UU, RU, gU) => {
    var tU = gU(5278),
      pU = gU(5285),
      EU = gU(5292);
    UU.exports = function(UU, RU, gU, PU, TU, qU) {
      var KU = 1 & gU,
        cU = UU.length,
        GU = RU.length;
      if (cU != GU && !(KU && GU > cU)) return !1;
      var jU = qU.get(UU),
        uU = qU.get(RU);
      if (jU && uU) return jU == RU && uU == UU;
      var CU = -1,
        hU = !0,
        QU = 2 & gU ? new tU : void 0;
      for (qU.set(UU, RU), qU.set(RU, UU); ++CU < cU;) {
        var eU = UU[CU],
          WU = RU[CU];
        if (PU) var fU = KU ? PU(WU, eU, CU, RU, UU, qU) : PU(eU, WU, CU, UU, RU, qU);
        if (void 0 !== fU) {
          if (fU) continue;
          hU = !1;
          break
        }
        if (QU) {
          if (!pU(RU, (function(UU, RU) {
              if (!EU(QU, RU) && (eU === UU || TU(eU, UU, gU, PU, qU))) return QU.push(RU)
            }))) {
            hU = !1;
            break
          }
        } else if (eU !== WU && !TU(eU, WU, gU, PU, qU)) {
          hU = !1;
          break
        }
      }
      return qU.delete(UU), qU.delete(RU), hU
    }
  },
  5296: (UU, RU, gU) => {
    var tU = gU(4799),
      pU = gU(5304),
      EU = gU(5005),
      PU = gU(5274),
      TU = gU(5307),
      qU = gU(5315),
      KU = tU ? tU.prototype : void 0,
      cU = KU ? KU.valueOf : void 0;
    UU.exports = function(UU, RU, gU, tU, KU, GU, jU) {
      switch (gU) {
        case "[object DataView]":
          if (UU.byteLength != RU.byteLength || UU.byteOffset != RU.byteOffset) return !1;
          UU = UU.buffer, RU = RU.buffer;
        case "[object ArrayBuffer]":
          return !(UU.byteLength != RU.byteLength || !GU(new pU(UU), new pU(RU)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return EU(+UU, +RU);
        case "[object Error]":
          return UU.name == RU.name && UU.message == RU.message;
        case "[object RegExp]":
        case "[object String]":
          return UU == RU + "";
        case "[object Map]":
          var uU = TU;
        case "[object Set]":
          var CU = 1 & tU;
          if (uU || (uU = qU), UU.size != RU.size && !CU) return !1;
          var hU = jU.get(UU);
          if (hU) return hU == RU;
          tU |= 2, jU.set(UU, RU);
          var QU = PU(uU(UU), uU(RU), tU, KU, GU, jU);
          return jU.delete(UU), QU;
        case "[object Symbol]":
          if (cU) return cU.call(UU) == cU.call(RU)
      }
      return !1
    }
  },
  5318: (UU, RU, gU) => {
    var tU = gU(5323),
      pU = Object.prototype.hasOwnProperty;
    UU.exports = function(UU, RU, gU, EU, PU, TU) {
      var qU = 1 & gU,
        KU = tU(UU),
        cU = KU.length;
      if (cU != tU(RU).length && !qU) return !1;
      for (var GU = cU; GU--;) {
        var jU = KU[GU];
        if (!(qU ? jU in RU : pU.call(RU, jU))) return !1
      }
      var uU = TU.get(UU),
        CU = TU.get(RU);
      if (uU && CU) return uU == RU && CU == UU;
      var hU = !0;
      TU.set(UU, RU), TU.set(RU, UU);
      for (var QU = qU; ++GU < cU;) {
        var eU = UU[jU = KU[GU]],
          WU = RU[jU];
        if (EU) var fU = qU ? EU(WU, eU, jU, RU, UU, TU) : EU(eU, WU, jU, UU, RU, TU);
        if (!(void 0 === fU ? eU === WU || PU(eU, WU, gU, EU, TU) : fU)) {
          hU = !1;
          break
        }
        QU || (QU = "constructor" == jU)
      }
      if (hU && !QU) {
        var xU = UU.constructor,
          mU = RU.constructor;
        xU == mU || !("constructor" in UU) || !("constructor" in RU) || "function" == typeof xU && xU instanceof xU && "function" == typeof mU && mU instanceof mU || (hU = !1)
      }
      return TU.delete(UU), TU.delete(RU), hU
    }
  },
  4765: (UU, RU, gU) => {
    var tU = "object" == typeof gU.g && gU.g && gU.g.Object === Object && gU.g;
    UU.exports = tU
  },
  5323: (UU, RU, gU) => {
    var tU = gU(5325),
      pU = gU(5329),
      EU = gU(5354);
    UU.exports = function(UU) {
      return tU(UU, EU, pU)
    }
  },
  5033: (UU, RU, gU) => {
    var tU = gU(5041);
    UU.exports = function(UU, RU) {
      var gU = UU.__data__;
      return tU(RU) ? gU["string" == typeof RU ? "string" : "hash"] : gU.map
    }
  },
  5467: (UU, RU, gU) => {
    var tU = gU(5473),
      pU = gU(5354);
    UU.exports = function(UU) {
      for (var RU = pU(UU), gU = RU.length; gU--;) {
        var EU = RU[gU],
          PU = UU[EU];
        RU[gU] = [EU, PU, tU(PU)]
      }
      return RU
    }
  },
  4906: (UU, RU, gU) => {
    var tU = gU(4912),
      pU = gU(4947);
    UU.exports = function(UU, RU) {
      var gU = pU(UU, RU);
      return tU(gU) ? gU : void 0
    }
  },
  5983: (UU, RU, gU) => {
    var tU = gU(5435)(Object.getPrototypeOf, Object);
    UU.exports = tU
  },
  4808: (UU, RU, gU) => {
    var tU = gU(4799),
      pU = Object.prototype,
      EU = pU.hasOwnProperty,
      PU = pU.toString,
      TU = tU ? tU.toStringTag : void 0;
    UU.exports = function(UU) {
      var RU = EU.call(UU, TU),
        gU = UU[TU];
      try {
        UU[TU] = void 0;
        var tU = !0
      } catch (qU) {}
      var pU = PU.call(UU);
      return tU && (RU ? UU[TU] = gU : delete UU[TU]), pU
    }
  },
  5329: (UU, RU, gU) => {
    var tU = gU(5338),
      pU = gU(5346),
      EU = Object.prototype.propertyIsEnumerable,
      PU = Object.getOwnPropertySymbols,
      TU = PU ? function(UU) {
        return null == UU ? [] : (UU = Object(UU), tU(PU(UU), (function(RU) {
          return EU.call(UU, RU)
        })))
      } : pU;
    UU.exports = TU
  },
  5442: (UU, RU, gU) => {
    var tU = gU(5448),
      pU = gU(5022),
      EU = gU(5450),
      PU = gU(5452),
      TU = gU(5461),
      qU = gU(4796),
      KU = gU(4943),
      cU = "[object Map]",
      GU = "[object Promise]",
      jU = "[object Set]",
      uU = "[object WeakMap]",
      CU = "[object DataView]",
      hU = KU(tU),
      QU = KU(pU),
      eU = KU(EU),
      WU = KU(PU),
      fU = KU(TU),
      xU = qU;
    (tU && xU(new tU(new ArrayBuffer(1))) != CU || pU && xU(new pU) != cU || EU && xU(EU.resolve()) != GU || PU && xU(new PU) != jU || TU && xU(new TU) != uU) && (xU = function(UU) {
      var RU = qU(UU),
        gU = "[object Object]" == RU ? UU.constructor : void 0,
        tU = gU ? KU(gU) : "";
      if (tU) switch (tU) {
        case hU:
          return CU;
        case QU:
          return cU;
        case eU:
          return GU;
        case WU:
          return jU;
        case fU:
          return uU
      }
      return RU
    }), UU.exports = xU
  },
  4947: UU => {
    UU.exports = function(UU, RU) {
      return null == UU ? void 0 : UU[RU]
    }
  },
  5510: (UU, RU, gU) => {
    var tU = gU(4855),
      pU = gU(5193),
      EU = gU(4837),
      PU = gU(5163),
      TU = gU(5159),
      qU = gU(5080);
    UU.exports = function(UU, RU, gU) {
      for (var KU = -1, cU = (RU = tU(RU, UU)).length, GU = !1; ++KU < cU;) {
        var jU = qU(RU[KU]);
        if (!(GU = null != UU && gU(UU, jU))) break;
        UU = UU[jU]
      }
      return GU || ++KU != cU ? GU : !!(cU = null == UU ? 0 : UU.length) && TU(cU) && PU(jU, cU) && (EU(UU) || pU(UU))
    }
  },
  5756: UU => {
    var RU = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    UU.exports = function(UU) {
      return RU.test(UU)
    }
  },
  4892: (UU, RU, gU) => {
    var tU = gU(4897);
    UU.exports = function() {
      this.__data__ = tU ? tU(null) : {}, this.size = 0
    }
  },
  4954: UU => {
    UU.exports = function(UU) {
      var RU = this.has(UU) && delete this.__data__[UU];
      return this.size -= RU ? 1 : 0, RU
    }
  },
  4958: (UU, RU, gU) => {
    var tU = gU(4897),
      pU = Object.prototype.hasOwnProperty;
    UU.exports = function(UU) {
      var RU = this.__data__;
      if (tU) {
        var gU = RU[UU];
        return "__lodash_hash_undefined__" === gU ? void 0 : gU
      }
      return pU.call(RU, UU) ? RU[UU] : void 0
    }
  },
  4967: (UU, RU, gU) => {
    var tU = gU(4897),
      pU = Object.prototype.hasOwnProperty;
    UU.exports = function(UU) {
      var RU = this.__data__;
      return tU ? void 0 !== RU[UU] : pU.call(RU, UU)
    }
  },
  4975: (UU, RU, gU) => {
    var tU = gU(4897);
    UU.exports = function(UU, RU) {
      var gU = this.__data__;
      return this.size += this.has(UU) ? 0 : 1, gU[UU] = tU && void 0 === RU ? "__lodash_hash_undefined__" : RU, this
    }
  },
  5191: (UU, RU, gU) => {
    var tU = gU(4799),
      pU = gU(5193),
      EU = gU(4837),
      PU = tU ? tU.isConcatSpreadable : void 0;
    UU.exports = function(UU) {
      return EU(UU) || pU(UU) || !!(PU && UU && UU[PU])
    }
  },
  5163: UU => {
    var RU = /^(?:0|[1-9]\d*)$/;
    UU.exports = function(UU, gU) {
      var tU = typeof UU;
      return !!(gU = null == gU ? 9007199254740991 : gU) && ("number" == tU || "symbol" != tU && RU.test(UU)) && UU > -1 && UU % 1 == 0 && UU < gU
    }
  },
  5149: (UU, RU, gU) => {
    var tU = gU(5005),
      pU = gU(5156),
      EU = gU(5163),
      PU = gU(4750);
    UU.exports = function(UU, RU, gU) {
      if (!PU(gU)) return !1;
      var TU = typeof RU;
      return !!("number" == TU ? pU(gU) && EU(RU, gU.length) : "string" == TU && RU in gU) && tU(gU[RU], UU)
    }
  },
  4863: (UU, RU, gU) => {
    var tU = gU(4837),
      pU = gU(4792),
      EU = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      PU = /^\w*$/;
    UU.exports = function(UU, RU) {
      if (tU(UU)) return !1;
      var gU = typeof UU;
      return !("number" != gU && "symbol" != gU && "boolean" != gU && null != UU && !pU(UU)) || (PU.test(UU) || !EU.test(UU) || null != RU && UU in Object(RU))
    }
  },
  5041: UU => {
    UU.exports = function(UU) {
      var RU = typeof UU;
      return "string" == RU || "number" == RU || "symbol" == RU || "boolean" == RU ? "__proto__" !== UU : null === UU
    }
  },
  4929: (UU, RU, gU) => {
    var tU = gU(4936),
      pU = function() {
        var UU = /[^.]+$/.exec(tU && tU.keys && tU.keys.IE_PROTO || "");
        return UU ? "Symbol(src)_1." + UU : ""
      }();
    UU.exports = function(UU) {
      return !!pU && pU in UU
    }
  },
  5424: UU => {
    var RU = Object.prototype;
    UU.exports = function(UU) {
      var gU = UU && UU.constructor;
      return UU === ("function" == typeof gU && gU.prototype || RU)
    }
  },
  5473: (UU, RU, gU) => {
    var tU = gU(4750);
    UU.exports = function(UU) {
      return UU === UU && !tU(UU)
    }
  },
  4989: UU => {
    UU.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  4998: (UU, RU, gU) => {
    var tU = gU(5e3),
      pU = Array.prototype.splice;
    UU.exports = function(UU) {
      var RU = this.__data__,
        gU = tU(RU, UU);
      return !(gU < 0) && (gU == RU.length - 1 ? RU.pop() : pU.call(RU, gU, 1), --this.size, !0)
    }
  },
  5010: (UU, RU, gU) => {
    var tU = gU(5e3);
    UU.exports = function(UU) {
      var RU = this.__data__,
        gU = tU(RU, UU);
      return gU < 0 ? void 0 : RU[gU][1]
    }
  },
  5014: (UU, RU, gU) => {
    var tU = gU(5e3);
    UU.exports = function(UU) {
      return tU(this.__data__, UU) > -1
    }
  },
  5017: (UU, RU, gU) => {
    var tU = gU(5e3);
    UU.exports = function(UU, RU) {
      var gU = this.__data__,
        pU = tU(gU, UU);
      return pU < 0 ? (++this.size, gU.push([UU, RU])) : gU[pU][1] = RU, this
    }
  },
  4882: (UU, RU, gU) => {
    var tU = gU(4887),
      pU = gU(4980),
      EU = gU(5022);
    UU.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new tU,
        map: new(EU || pU),
        string: new tU
      }
    }
  },
  5029: (UU, RU, gU) => {
    var tU = gU(5033);
    UU.exports = function(UU) {
      var RU = tU(this, UU).delete(UU);
      return this.size -= RU ? 1 : 0, RU
    }
  },
  5047: (UU, RU, gU) => {
    var tU = gU(5033);
    UU.exports = function(UU) {
      return tU(this, UU).get(UU)
    }
  },
  5056: (UU, RU, gU) => {
    var tU = gU(5033);
    UU.exports = function(UU) {
      return tU(this, UU).has(UU)
    }
  },
  5059: (UU, RU, gU) => {
    var tU = gU(5033);
    UU.exports = function(UU, RU) {
      var gU = tU(this, UU),
        pU = gU.size;
      return gU.set(UU, RU), this.size += gU.size == pU ? 0 : 1, this
    }
  },
  5307: UU => {
    UU.exports = function(UU) {
      var RU = -1,
        gU = Array(UU.size);
      return UU.forEach((function(UU, tU) {
        gU[++RU] = [tU, UU]
      })), gU
    }
  },
  5482: UU => {
    UU.exports = function(UU, RU) {
      return function(gU) {
        return null != gU && (gU[UU] === RU && (void 0 !== RU || UU in Object(gU)))
      }
    }
  },
  4871: (UU, RU, gU) => {
    var tU = gU(4875);
    UU.exports = function(UU) {
      var RU = tU(UU, (function(UU) {
          return 500 === gU.size && gU.clear(), UU
        })),
        gU = RU.cache;
      return RU
    }
  },
  4897: (UU, RU, gU) => {
    var tU = gU(4906)(Object, "create");
    UU.exports = tU
  },
  5428: (UU, RU, gU) => {
    var tU = gU(5435)(Object.keys, Object);
    UU.exports = tU
  },
  5410: (UU, RU, gU) => {
    UU = gU.nmd(UU);
    var tU = gU(4765),
      pU = RU && !RU.nodeType && RU,
      EU = pU && UU && !UU.nodeType && UU,
      PU = EU && EU.exports === pU && tU.process,
      TU = function() {
        try {
          var UU = EU && EU.require && EU.require("util").types;
          return UU || PU && PU.binding && PU.binding("util")
        } catch (RU) {}
      }();
    UU.exports = TU
  },
  4816: UU => {
    var RU = Object.prototype.toString;
    UU.exports = function(UU) {
      return RU.call(UU)
    }
  },
  5435: UU => {
    UU.exports = function(UU, RU) {
      return function(gU) {
        return UU(RU(gU))
      }
    }
  },
  5590: (UU, RU, gU) => {
    var tU = gU(5592),
      pU = Math.max;
    UU.exports = function(UU, RU, gU) {
      return RU = pU(void 0 === RU ? UU.length - 1 : RU, 0),
        function() {
          for (var EU = arguments, PU = -1, TU = pU(EU.length - RU, 0), qU = Array(TU); ++PU < TU;) qU[PU] = EU[RU + PU];
          PU = -1;
          for (var KU = Array(RU + 1); ++PU < RU;) KU[PU] = EU[PU];
          return KU[RU] = gU(qU), tU(UU, this, KU)
        }
    }
  },
  4757: (UU, RU, gU) => {
    var tU = gU(4765),
      pU = "object" == typeof self && self && self.Object === Object && self,
      EU = tU || pU || Function("return this")();
    UU.exports = EU
  },
  5280: UU => {
    UU.exports = function(UU) {
      return this.__data__.set(UU, "__lodash_hash_undefined__"), this
    }
  },
  5282: UU => {
    UU.exports = function(UU) {
      return this.__data__.has(UU)
    }
  },
  5315: UU => {
    UU.exports = function(UU) {
      var RU = -1,
        gU = Array(UU.size);
      return UU.forEach((function(UU) {
        gU[++RU] = UU
      })), gU
    }
  },
  5594: (UU, RU, gU) => {
    var tU = gU(5599),
      pU = gU(5614)(tU);
    UU.exports = pU
  },
  5614: UU => {
    var RU = Date.now;
    UU.exports = function(UU) {
      var gU = 0,
        tU = 0;
      return function() {
        var pU = RU(),
          EU = 16 - (pU - tU);
        if (tU = pU, EU > 0) {
          if (++gU >= 800) return arguments[0]
        } else gU = 0;
        return UU.apply(void 0, arguments)
      }
    }
  },
  5233: (UU, RU, gU) => {
    var tU = gU(4980);
    UU.exports = function() {
      this.__data__ = new tU, this.size = 0
    }
  },
  5240: UU => {
    UU.exports = function(UU) {
      var RU = this.__data__,
        gU = RU.delete(UU);
      return this.size = RU.size, gU
    }
  },
  5245: UU => {
    UU.exports = function(UU) {
      return this.__data__.get(UU)
    }
  },
  5252: UU => {
    UU.exports = function(UU) {
      return this.__data__.has(UU)
    }
  },
  5257: (UU, RU, gU) => {
    var tU = gU(4980),
      pU = gU(5022),
      EU = gU(4880);
    UU.exports = function(UU, RU) {
      var gU = this.__data__;
      if (gU instanceof tU) {
        var PU = gU.__data__;
        if (!pU || PU.length < 199) return PU.push([UU, RU]), this.size = ++gU.size, this;
        gU = this.__data__ = new EU(PU)
      }
      return gU.set(UU, RU), this.size = gU.size, this
    }
  },
  5694: UU => {
    UU.exports = function(UU, RU, gU) {
      for (var tU = gU - 1, pU = UU.length; ++tU < pU;)
        if (UU[tU] === RU) return tU;
      return -1
    }
  },
  5760: (UU, RU, gU) => {
    var tU = gU(5768),
      pU = gU(5756),
      EU = gU(5776);
    UU.exports = function(UU) {
      return pU(UU) ? EU(UU) : tU(UU)
    }
  },
  4868: (UU, RU, gU) => {
    var tU = gU(4871),
      pU = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      EU = /\\(\\)?/g,
      PU = tU((function(UU) {
        var RU = [];
        return 46 === UU.charCodeAt(0) && RU.push(""), UU.replace(pU, (function(UU, gU, tU, pU) {
          RU.push(tU ? pU.replace(EU, "$1") : gU || UU)
        })), RU
      }));
    UU.exports = PU
  },
  5080: (UU, RU, gU) => {
    var tU = gU(4792);
    UU.exports = function(UU) {
      if ("string" == typeof UU || tU(UU)) return UU;
      var RU = UU + "";
      return "0" == RU && 1 / UU == -1 / 0 ? "-0" : RU
    }
  },
  4943: UU => {
    var RU = Function.prototype.toString;
    UU.exports = function(UU) {
      if (null != UU) {
        try {
          return RU.call(UU)
        } catch (gU) {}
        try {
          return UU + ""
        } catch (gU) {}
      }
      return ""
    }
  },
  4785: UU => {
    var RU = /\s/;
    UU.exports = function(UU) {
      for (var gU = UU.length; gU-- && RU.test(UU.charAt(gU)););
      return gU
    }
  },
  5776: UU => {
    var RU = "\\ud800-\\udfff",
      gU = "[" + RU + "]",
      tU = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      pU = "\\ud83c[\\udffb-\\udfff]",
      EU = "[^" + RU + "]",
      PU = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      TU = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      qU = "(?:" + tU + "|" + pU + ")" + "?",
      KU = "[\\ufe0e\\ufe0f]?",
      cU = KU + qU + ("(?:\\u200d(?:" + [EU, PU, TU].join("|") + ")" + KU + qU + ")*"),
      GU = "(?:" + [EU + tU + "?", tU, PU, TU, gU].join("|") + ")",
      jU = RegExp(pU + "(?=" + pU + ")|" + GU + cU, "g");
    UU.exports = function(UU) {
      return UU.match(jU) || []
    }
  },
  5604: UU => {
    UU.exports = function(UU) {
      return function() {
        return UU
      }
    }
  },
  4747: (UU, RU, gU) => {
    var tU = gU(4750),
      pU = gU(4753),
      EU = gU(4767),
      PU = Math.max,
      TU = Math.min;
    UU.exports = function(UU, RU, gU) {
      var qU, KU, cU, GU, jU, uU, CU = 0,
        hU = !1,
        QU = !1,
        eU = !0;
      if ("function" != typeof UU) throw new TypeError("Expected a function");

      function WU(RU) {
        var gU = qU,
          tU = KU;
        return qU = KU = void 0, CU = RU, GU = UU.apply(tU, gU)
      }

      function fU(UU) {
        var gU = UU - uU;
        return void 0 === uU || gU >= RU || gU < 0 || QU && UU - CU >= cU
      }

      function xU() {
        var UU = pU();
        if (fU(UU)) return mU(UU);
        jU = setTimeout(xU, function(UU) {
          var gU = RU - (UU - uU);
          return QU ? TU(gU, cU - (UU - CU)) : gU
        }(UU))
      }

      function mU(UU) {
        return jU = void 0, eU && qU ? WU(UU) : (qU = KU = void 0, GU)
      }

      function IU() {
        var UU = pU(),
          gU = fU(UU);
        if (qU = arguments, KU = this, uU = UU, gU) {
          if (void 0 === jU) return function(UU) {
            return CU = UU, jU = setTimeout(xU, RU), hU ? WU(UU) : GU
          }(uU);
          if (QU) return clearTimeout(jU), jU = setTimeout(xU, RU), WU(uU)
        }
        return void 0 === jU && (jU = setTimeout(xU, RU)), GU
      }
      return RU = EU(RU) || 0, tU(gU) && (hU = !!gU.leading, cU = (QU = "maxWait" in gU) ? PU(EU(gU.maxWait) || 0, RU) : cU, eU = "trailing" in gU ? !!gU.trailing : eU), IU.cancel = function() {
        void 0 !== jU && clearTimeout(jU), CU = 0, qU = uU = KU = jU = void 0
      }, IU.flush = function() {
        return void 0 === jU ? GU : mU(pU())
      }, IU
    }
  },
  5005: UU => {
    UU.exports = function(UU, RU) {
      return UU === RU || UU !== UU && RU !== RU
    }
  },
  5933: (UU, RU, gU) => {
    var tU = gU(5937),
      pU = gU(5941),
      EU = gU(5204),
      PU = gU(4837),
      TU = gU(5149);
    UU.exports = function(UU, RU, gU) {
      var qU = PU(UU) ? tU : pU;
      return gU && TU(UU, RU, gU) && (RU = void 0), qU(UU, EU(RU, 3))
    }
  },
  6025: (UU, RU, gU) => {
    var tU = gU(6030)(gU(6032));
    UU.exports = tU
  },
  6032: (UU, RU, gU) => {
    var tU = gU(5682),
      pU = gU(5204),
      EU = gU(6040),
      PU = Math.max;
    UU.exports = function(UU, RU, gU) {
      var TU = null == UU ? 0 : UU.length;
      if (!TU) return -1;
      var qU = null == gU ? 0 : EU(gU);
      return qU < 0 && (qU = PU(TU + qU, 0)), tU(UU, pU(RU, 3), qU)
    }
  },
  5867: (UU, RU, gU) => {
    var tU = gU(5179),
      pU = gU(5870);
    UU.exports = function(UU, RU) {
      return tU(pU(UU, RU), 1)
    }
  },
  4846: (UU, RU, gU) => {
    var tU = gU(4849);
    UU.exports = function(UU, RU, gU) {
      var pU = null == UU ? void 0 : tU(UU, RU);
      return void 0 === pU ? gU : pU
    }
  },
  5495: (UU, RU, gU) => {
    var tU = gU(5503),
      pU = gU(5510);
    UU.exports = function(UU, RU) {
      return null != UU && pU(UU, RU, tU)
    }
  },
  5516: UU => {
    UU.exports = function(UU) {
      return UU
    }
  },
  5193: (UU, RU, gU) => {
    var tU = gU(5199),
      pU = gU(4820),
      EU = Object.prototype,
      PU = EU.hasOwnProperty,
      TU = EU.propertyIsEnumerable,
      qU = tU(function() {
        return arguments
      }()) ? tU : function(UU) {
        return pU(UU) && PU.call(UU, "callee") && !TU.call(UU, "callee")
      };
    UU.exports = qU
  },
  4837: UU => {
    var RU = Array.isArray;
    UU.exports = RU
  },
  5156: (UU, RU, gU) => {
    var tU = gU(4921),
      pU = gU(5159);
    UU.exports = function(UU) {
      return null != UU && pU(UU.length) && !tU(UU)
    }
  },
  5987: (UU, RU, gU) => {
    var tU = gU(4796),
      pU = gU(4820);
    UU.exports = function(UU) {
      return !0 === UU || !1 === UU || pU(UU) && "[object Boolean]" == tU(UU)
    }
  },
  5376: (UU, RU, gU) => {
    UU = gU.nmd(UU);
    var tU = gU(4757),
      pU = gU(5383),
      EU = RU && !RU.nodeType && RU,
      PU = EU && UU && !UU.nodeType && UU,
      TU = PU && PU.exports === EU ? tU.tC : void 0,
      qU = (TU ? TU.isBuffer : void 0) || pU;
    UU.exports = qU
  },
  5874: (UU, RU, gU) => {
    var tU = gU(5262);
    UU.exports = function(UU, RU) {
      return tU(UU, RU)
    }
  },
  4921: (UU, RU, gU) => {
    var tU = gU(4796),
      pU = gU(4750);
    UU.exports = function(UU) {
      if (!pU(UU)) return !1;
      var RU = tU(UU);
      return "[object Function]" == RU || "[object GeneratorFunction]" == RU || "[object AsyncFunction]" == RU || "[object Proxy]" == RU
    }
  },
  5159: UU => {
    UU.exports = function(UU) {
      return "number" == typeof UU && UU > -1 && UU % 1 == 0 && UU <= 9007199254740991
    }
  },
  4840: (UU, RU, gU) => {
    var tU = gU(4843);
    UU.exports = function(UU) {
      return tU(UU) && UU != +UU
    }
  },
  5087: UU => {
    UU.exports = function(UU) {
      return null == UU
    }
  },
  4843: (UU, RU, gU) => {
    var tU = gU(4796),
      pU = gU(4820);
    UU.exports = function(UU) {
      return "number" == typeof UU || pU(UU) && "[object Number]" == tU(UU)
    }
  },
  4750: UU => {
    UU.exports = function(UU) {
      var RU = typeof UU;
      return null != UU && ("object" == RU || "function" == RU)
    }
  },
  4820: UU => {
    UU.exports = function(UU) {
      return null != UU && "object" == typeof UU
    }
  },
  5979: (UU, RU, gU) => {
    var tU = gU(4796),
      pU = gU(5983),
      EU = gU(4820),
      PU = Function.prototype,
      TU = Object.prototype,
      qU = PU.toString,
      KU = TU.hasOwnProperty,
      cU = qU.call(Object);
    UU.exports = function(UU) {
      if (!EU(UU) || "[object Object]" != tU(UU)) return !1;
      var RU = pU(UU);
      if (null === RU) return !0;
      var gU = KU.call(RU, "constructor") && RU.constructor;
      return "function" == typeof gU && gU instanceof gU && qU.call(gU) == cU
    }
  },
  4835: (UU, RU, gU) => {
    var tU = gU(4796),
      pU = gU(4837),
      EU = gU(4820);
    UU.exports = function(UU) {
      return "string" == typeof UU || !pU(UU) && EU(UU) && "[object String]" == tU(UU)
    }
  },
  4792: (UU, RU, gU) => {
    var tU = gU(4796),
      pU = gU(4820);
    UU.exports = function(UU) {
      return "symbol" == typeof UU || pU(UU) && "[object Symbol]" == tU(UU)
    }
  },
  5388: (UU, RU, gU) => {
    var tU = gU(5394),
      pU = gU(5403),
      EU = gU(5410),
      PU = EU && EU.isTypedArray,
      TU = PU ? pU(PU) : tU;
    UU.exports = TU
  },
  5354: (UU, RU, gU) => {
    var tU = gU(5361),
      pU = gU(5418),
      EU = gU(5156);
    UU.exports = function(UU) {
      return EU(UU) ? tU(UU) : pU(UU)
    }
  },
  5971: UU => {
    UU.exports = function(UU) {
      var RU = null == UU ? 0 : UU.length;
      return RU ? UU[RU - 1] : void 0
    }
  },
  5870: (UU, RU, gU) => {
    var tU = gU(5074),
      pU = gU(5204),
      EU = gU(5529),
      PU = gU(4837);
    UU.exports = function(UU, RU) {
      return (PU(UU) ? tU : EU)(UU, pU(RU, 3))
    }
  },
  5922: (UU, RU, gU) => {
    var tU = gU(5926),
      pU = gU(5541),
      EU = gU(5204);
    UU.exports = function(UU, RU) {
      var gU = {};
      return RU = EU(RU, 3), pU(UU, (function(UU, pU, EU) {
        tU(gU, pU, RU(UU, pU, EU))
      })), gU
    }
  },
  5842: (UU, RU, gU) => {
    var tU = gU(5850),
      pU = gU(5853),
      EU = gU(5516);
    UU.exports = function(UU) {
      return UU && UU.length ? tU(UU, EU, pU) : void 0
    }
  },
  4875: (UU, RU, gU) => {
    var tU = gU(4880);

    function pU(UU, RU) {
      if ("function" != typeof UU || null != RU && "function" != typeof RU) throw new TypeError("Expected a function");
      var gU = function() {
        var tU = arguments,
          pU = RU ? RU.apply(this, tU) : tU[0],
          EU = gU.cache;
        if (EU.has(pU)) return EU.get(pU);
        var PU = UU.apply(this, tU);
        return gU.cache = EU.set(pU, PU) || EU, PU
      };
      return gU.cache = new(pU.Cache || tU), gU
    }
    pU.Cache = tU, UU.exports = pU
  },
  5861: (UU, RU, gU) => {
    var tU = gU(5850),
      pU = gU(5863),
      EU = gU(5516);
    UU.exports = function(UU) {
      return UU && UU.length ? tU(UU, EU, pU) : void 0
    }
  },
  5713: UU => {
    UU.exports = function() {}
  },
  4753: (UU, RU, gU) => {
    var tU = gU(4757);
    UU.exports = function() {
      return tU.Date.now()
    }
  },
  5519: (UU, RU, gU) => {
    var tU = gU(5522),
      pU = gU(5527),
      EU = gU(4863),
      PU = gU(5080);
    UU.exports = function(UU) {
      return EU(UU) ? tU(PU(UU)) : pU(UU)
    }
  },
  5141: (UU, RU, gU) => {
    var tU = gU(5145)();
    UU.exports = tU
  },
  6008: (UU, RU, gU) => {
    var tU = gU(5285),
      pU = gU(5204),
      EU = gU(6010),
      PU = gU(4837),
      TU = gU(5149);
    UU.exports = function(UU, RU, gU) {
      var qU = PU(UU) ? tU : EU;
      return gU && TU(UU, RU, gU) && (RU = void 0), qU(UU, pU(RU, 3))
    }
  },
  5170: (UU, RU, gU) => {
    var tU = gU(5179),
      pU = gU(5202),
      EU = gU(5583),
      PU = gU(5149),
      TU = EU((function(UU, RU) {
        if (null == UU) return [];
        var gU = RU.length;
        return gU > 1 && PU(UU, RU[0], RU[1]) ? RU = [] : gU > 2 && PU(RU[0], RU[1], RU[2]) && (RU = [RU[0]]), pU(UU, tU(RU, 1), [])
      }));
    UU.exports = TU
  },
  5346: UU => {
    UU.exports = function() {
      return []
    }
  },
  5383: UU => {
    UU.exports = function() {
      return !1
    }
  },
  4739: (UU, RU, gU) => {
    var tU = gU(4747),
      pU = gU(4750);
    UU.exports = function(UU, RU, gU) {
      var EU = !0,
        PU = !0;
      if ("function" != typeof UU) throw new TypeError("Expected a function");
      return pU(gU) && (EU = "leading" in gU ? !!gU.leading : EU, PU = "trailing" in gU ? !!gU.trailing : PU), tU(UU, RU, {
        leading: EU,
        maxWait: RU,
        trailing: PU
      })
    }
  },
  5165: (UU, RU, gU) => {
    var tU = gU(4767),
      pU = 1 / 0;
    UU.exports = function(UU) {
      return UU ? (UU = tU(UU)) === pU || UU === -1 / 0 ? 17976931348623157e292 * (UU < 0 ? -1 : 1) : UU === UU ? UU : 0 : 0 === UU ? UU : 0
    }
  },
  6040: (UU, RU, gU) => {
    var tU = gU(5165);
    UU.exports = function(UU) {
      var RU = tU(UU),
        gU = RU % 1;
      return RU === RU ? gU ? RU - gU : RU : 0
    }
  },
  4767: (UU, RU, gU) => {
    var tU = gU(4776),
      pU = gU(4750),
      EU = gU(4792),
      PU = /^[-+]0x[0-9a-f]+$/i,
      TU = /^0b[01]+$/i,
      qU = /^0o[0-7]+$/i,
      KU = parseInt;
    UU.exports = function(UU) {
      if ("number" == typeof UU) return UU;
      if (EU(UU)) return NaN;
      if (pU(UU)) {
        var RU = "function" == typeof UU.valueOf ? UU.valueOf() : UU;
        UU = pU(RU) ? RU + "" : RU
      }
      if ("string" != typeof UU) return 0 === UU ? UU : +UU;
      UU = tU(UU);
      var gU = TU.test(UU);
      return gU || qU.test(UU) ? KU(UU.slice(2), gU ? 2 : 8) : PU.test(UU) ? NaN : +UU
    }
  },
  5062: (UU, RU, gU) => {
    var tU = gU(5066);
    UU.exports = function(UU) {
      return null == UU ? "" : tU(UU)
    }
  },
  5665: (UU, RU, gU) => {
    var tU = gU(5204),
      pU = gU(5668);
    UU.exports = function(UU, RU) {
      return UU && UU.length ? pU(UU, tU(RU, 2)) : []
    }
  },
  5735: (UU, RU, gU) => {
    var tU = gU(5740)("toUpperCase");
    UU.exports = tU
  },
  5799: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => vR
    });
    var tU = gU(56),
      pU = gU(4626),
      EU = gU.n(pU);
    const {
      getOwnPropertyNames: PU,
      getOwnPropertySymbols: TU
    } = Object, {
      hasOwnProperty: qU
    } = Object.prototype;

    function KU(UU, RU) {
      return function(gU, tU, pU) {
        return UU(gU, tU, pU) && RU(gU, tU, pU)
      }
    }

    function cU(UU) {
      return function(RU, gU, tU) {
        if (!RU || !gU || "object" !== typeof RU || "object" !== typeof gU) return UU(RU, gU, tU);
        const {
          cache: pU
        } = tU, EU = pU.get(RU), PU = pU.get(gU);
        if (EU && PU) return EU === gU && PU === RU;
        pU.set(RU, gU), pU.set(gU, RU);
        const TU = UU(RU, gU, tU);
        return pU.delete(RU), pU.delete(gU), TU
      }
    }

    function GU(UU) {
      return PU(UU).concat(TU(UU))
    }
    const jU = Object.hasOwn || ((UU, RU) => qU.call(UU, RU));

    function uU(UU, RU) {
      return UU === RU || !UU && !RU && UU !== UU && RU !== RU
    }
    const {
      getOwnPropertyDescriptor: CU,
      keys: hU
    } = Object;

    function QU(UU, RU) {
      return UU.byteLength === RU.byteLength && aU(new Uint8Array(UU), new Uint8Array(RU))
    }

    function eU(UU, RU, gU) {
      let tU = UU.length;
      if (RU.length !== tU) return !1;
      for (; tU-- > 0;)
        if (!gU.equals(UU[tU], RU[tU], tU, tU, UU, RU, gU)) return !1;
      return !0
    }

    function WU(UU, RU) {
      return UU.byteLength === RU.byteLength && aU(new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength), new Uint8Array(RU.buffer, RU.byteOffset, RU.byteLength))
    }

    function fU(UU, RU) {
      return uU(UU.getTime(), RU.getTime())
    }

    function xU(UU, RU) {
      return UU.name === RU.name && UU.message === RU.message && UU.cause === RU.cause && UU.stack === RU.stack
    }

    function mU(UU, RU) {
      return UU === RU
    }

    function IU(UU, RU, gU) {
      const tU = UU.size;
      if (tU !== RU.size) return !1;
      if (!tU) return !0;
      const pU = new Array(tU),
        EU = UU.entries();
      let PU, TU, qU = 0;
      for (;
        (PU = EU.next()) && !PU.done;) {
        const tU = RU.entries();
        let EU = !1,
          KU = 0;
        for (;
          (TU = tU.next()) && !TU.done;) {
          if (pU[KU]) {
            KU++;
            continue
          }
          const tU = PU.value,
            cU = TU.value;
          if (gU.equals(tU[0], cU[0], qU, KU, UU, RU, gU) && gU.equals(tU[1], cU[1], tU[0], cU[0], UU, RU, gU)) {
            EU = pU[KU] = !0;
            break
          }
          KU++
        }
        if (!EU) return !1;
        qU++
      }
      return !0
    }
    const JU = uU;

    function wU(UU, RU, gU) {
      const tU = hU(UU);
      let pU = tU.length;
      if (hU(RU).length !== pU) return !1;
      for (; pU-- > 0;)
        if (!BU(UU, RU, gU, tU[pU])) return !1;
      return !0
    }

    function nU(UU, RU, gU) {
      const tU = GU(UU);
      let pU, EU, PU, TU = tU.length;
      if (GU(RU).length !== TU) return !1;
      for (; TU-- > 0;) {
        if (pU = tU[TU], !BU(UU, RU, gU, pU)) return !1;
        if (EU = CU(UU, pU), PU = CU(RU, pU), (EU || PU) && (!EU || !PU || EU.configurable !== PU.configurable || EU.enumerable !== PU.enumerable || EU.writable !== PU.writable)) return !1
      }
      return !0
    }

    function bU(UU, RU) {
      return uU(UU.valueOf(), RU.valueOf())
    }

    function oU(UU, RU) {
      return UU.source === RU.source && UU.flags === RU.flags
    }

    function ZU(UU, RU, gU) {
      const tU = UU.size;
      if (tU !== RU.size) return !1;
      if (!tU) return !0;
      const pU = new Array(tU),
        EU = UU.values();
      let PU, TU;
      for (;
        (PU = EU.next()) && !PU.done;) {
        const tU = RU.values();
        let EU = !1,
          qU = 0;
        for (;
          (TU = tU.next()) && !TU.done;) {
          if (!pU[qU] && gU.equals(PU.value, TU.value, PU.value, TU.value, UU, RU, gU)) {
            EU = pU[qU] = !0;
            break
          }
          qU++
        }
        if (!EU) return !1
      }
      return !0
    }

    function aU(UU, RU) {
      let gU = UU.byteLength;
      if (RU.byteLength !== gU || UU.byteOffset !== RU.byteOffset) return !1;
      for (; gU-- > 0;)
        if (UU[gU] !== RU[gU]) return !1;
      return !0
    }

    function YU(UU, RU) {
      return UU.hostname === RU.hostname && UU.pathname === RU.pathname && UU.protocol === RU.protocol && UU.port === RU.port && UU.hash === RU.hash && UU.username === RU.username && UU.password === RU.password
    }

    function BU(UU, RU, gU, tU) {
      return !("_owner" !== tU && "__o" !== tU && "__v" !== tU || !UU.$$typeof && !RU.$$typeof) || jU(RU, tU) && gU.equals(UU[tU], RU[tU], tU, tU, UU, RU, gU)
    }
    const VU = {
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
      rU = Object.prototype.toString;

    function XU(UU) {
      let {
        areArrayBuffersEqual: RU,
        areArraysEqual: gU,
        areDataViewsEqual: tU,
        areDatesEqual: pU,
        areErrorsEqual: EU,
        areFunctionsEqual: PU,
        areMapsEqual: TU,
        areNumbersEqual: qU,
        areObjectsEqual: KU,
        arePrimitiveWrappersEqual: cU,
        areRegExpsEqual: GU,
        areSetsEqual: jU,
        areTypedArraysEqual: uU,
        areUrlsEqual: CU,
        unknownTagComparators: hU
      } = UU;
      return function(UU, QU, eU) {
        if (UU === QU) return !0;
        if (null == UU || null == QU) return !1;
        const WU = typeof UU;
        if (WU !== typeof QU) return !1;
        if ("object" !== WU) return "number" === WU ? qU(UU, QU, eU) : "function" === WU && PU(UU, QU, eU);
        const fU = UU.constructor;
        if (fU !== QU.constructor) return !1;
        if (fU === Object) return KU(UU, QU, eU);
        if (Array.isArray(UU)) return gU(UU, QU, eU);
        if (fU === Date) return pU(UU, QU, eU);
        if (fU === RegExp) return GU(UU, QU, eU);
        if (fU === Map) return TU(UU, QU, eU);
        if (fU === Set) return jU(UU, QU, eU);
        const xU = rU.call(UU);
        if ("[object Date]" === xU) return pU(UU, QU, eU);
        if ("[object RegExp]" === xU) return GU(UU, QU, eU);
        if ("[object Map]" === xU) return TU(UU, QU, eU);
        if ("[object Set]" === xU) return jU(UU, QU, eU);
        if ("[object Object]" === xU) return "function" !== typeof UU.then && "function" !== typeof QU.then && KU(UU, QU, eU);
        if ("[object URL]" === xU) return CU(UU, QU, eU);
        if ("[object Error]" === xU) return EU(UU, QU, eU);
        if ("[object Arguments]" === xU) return KU(UU, QU, eU);
        if (VU[xU]) return uU(UU, QU, eU);
        if ("[object ArrayBuffer]" === xU) return RU(UU, QU, eU);
        if ("[object DataView]" === xU) return tU(UU, QU, eU);
        if ("[object Boolean]" === xU || "[object Number]" === xU || "[object String]" === xU) return cU(UU, QU, eU);
        if (hU) {
          let RU = hU[xU];
          if (!RU) {
            const gU = null != (mU = UU) ? mU[Symbol.toStringTag] : void 0;
            gU && (RU = hU[gU])
          }
          if (RU) return RU(UU, QU, eU)
        }
        var mU;
        return !1
      }
    }
    const vU = dU();
    dU({
      strict: !0
    }), dU({
      circular: !0
    }), dU({
      circular: !0,
      strict: !0
    }), dU({
      createInternalComparator: () => uU
    }), dU({
      strict: !0,
      createInternalComparator: () => uU
    }), dU({
      circular: !0,
      createInternalComparator: () => uU
    }), dU({
      circular: !0,
      createInternalComparator: () => uU,
      strict: !0
    });

    function dU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: RU = !1,
        createInternalComparator: gU,
        createState: tU,
        strict: pU = !1
      } = UU, EU = function(UU) {
        let {
          circular: RU,
          createCustomConfig: gU,
          strict: tU
        } = UU, pU = {
          areArrayBuffersEqual: QU,
          areArraysEqual: tU ? nU : eU,
          areDataViewsEqual: WU,
          areDatesEqual: fU,
          areErrorsEqual: xU,
          areFunctionsEqual: mU,
          areMapsEqual: tU ? KU(IU, nU) : IU,
          areNumbersEqual: JU,
          areObjectsEqual: tU ? nU : wU,
          arePrimitiveWrappersEqual: bU,
          areRegExpsEqual: oU,
          areSetsEqual: tU ? KU(ZU, nU) : ZU,
          areTypedArraysEqual: tU ? KU(aU, nU) : aU,
          areUrlsEqual: YU,
          unknownTagComparators: void 0
        };
        if (gU && (pU = Object.assign({}, pU, gU(pU))), RU) {
          const UU = cU(pU.areArraysEqual),
            RU = cU(pU.areMapsEqual),
            gU = cU(pU.areObjectsEqual),
            tU = cU(pU.areSetsEqual);
          pU = Object.assign({}, pU, {
            areArraysEqual: UU,
            areMapsEqual: RU,
            areObjectsEqual: gU,
            areSetsEqual: tU
          })
        }
        return pU
      }(UU), PU = XU(EU);
      var TU;
      return function(UU) {
        let {
          circular: RU,
          comparator: gU,
          createState: tU,
          equals: pU,
          strict: EU
        } = UU;
        if (tU) return function(UU, PU) {
          const {
            cache: TU = (RU ? new WeakMap : void 0),
            meta: qU
          } = tU();
          return gU(UU, PU, {
            cache: TU,
            equals: pU,
            meta: qU,
            strict: EU
          })
        };
        if (RU) return function(UU, RU) {
          return gU(UU, RU, {
            cache: new WeakMap,
            equals: pU,
            meta: void 0,
            strict: EU
          })
        };
        const PU = {
          cache: void 0,
          equals: pU,
          meta: void 0,
          strict: EU
        };
        return function(UU, RU) {
          return gU(UU, RU, PU)
        }
      }({
        circular: RU,
        comparator: PU,
        createState: tU,
        equals: gU ? gU(PU) : (TU = PU, function(UU, RU, gU, tU, pU, EU, PU) {
          return TU(UU, RU, PU)
        }),
        strict: pU
      })
    }

    function HU(UU) {
      var RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gU = -1;
      requestAnimationFrame((function tU(pU) {
        gU < 0 && (gU = pU), pU - gU > RU ? (UU(pU), gU = -1) : function(UU) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(UU)
        }(tU)
      }))
    }

    function SU(UU) {
      return SU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, SU(UU)
    }

    function sU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return yU(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return yU(UU, RU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function yU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function kU() {
      var UU = function() {
          return null
        },
        RU = !1,
        gU = function gU(tU) {
          if (!RU) {
            if (Array.isArray(tU)) {
              if (!tU.length) return;
              var pU = sU(tU),
                EU = pU[0],
                PU = pU.slice(1);
              return "number" === typeof EU ? void HU(gU.bind(null, PU), EU) : (gU(EU), void HU(gU.bind(null, PU)))
            }
            "object" === SU(tU) && UU(tU), "function" === typeof tU && tU()
          }
        };
      return {
        stop: function() {
          RU = !0
        },
        start: function(UU) {
          RU = !1, gU(UU)
        },
        subscribe: function(RU) {
          return UU = RU,
            function() {
              UU = function() {
                return null
              }
            }
        }
      }
    }

    function FU(UU) {
      return FU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, FU(UU)
    }

    function iU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function AU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? iU(Object(gU), !0).forEach((function(RU) {
          zU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : iU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function zU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" !== FU(UU) || null === UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" !== FU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" === FU(RU) ? RU : String(RU)
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }
    var MU = function(UU) {
        return UU
      },
      DU = function(UU, RU) {
        return Object.keys(RU).reduce((function(gU, tU) {
          return AU(AU({}, gU), {}, zU({}, tU, UU(tU, RU[tU])))
        }), {})
      },
      LU = function(UU, RU, gU) {
        return UU.map((function(UU) {
          return "".concat((tU = UU, tU.replace(/([A-Z])/g, (function(UU) {
            return "-".concat(UU.toLowerCase())
          }))), " ").concat(RU, "ms ").concat(gU);
          var tU
        })).join(",")
      };

    function NU(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        var gU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != gU) {
          var tU, pU, EU, PU, TU = [],
            qU = !0,
            KU = !1;
          try {
            if (EU = (gU = gU.call(UU)).next, 0 === RU) {
              if (Object(gU) !== gU) return;
              qU = !1
            } else
              for (; !(qU = (tU = EU.call(gU)).done) && (TU.push(tU.value), TU.length !== RU); qU = !0);
          } catch (UU) {
            KU = !0, pU = UU
          } finally {
            try {
              if (!qU && null != gU.return && (PU = gU.return(), Object(PU) !== PU)) return
            } finally {
              if (KU) throw pU
            }
          }
          return TU
        }
      }(UU, RU) || OU(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return UR(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || OU(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OU(UU, RU) {
      if (UU) {
        if ("string" === typeof UU) return UR(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        return "Object" === gU && UU.constructor && (gU = UU.constructor.name), "Map" === gU || "Set" === gU ? Array.from(UU) : "Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU) ? UR(UU, RU) : void 0
      }
    }

    function UR(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }
    var RR = 1e-4,
      gR = function(UU, RU) {
        return [0, 3 * UU, 3 * RU - 6 * UU, 3 * UU - 3 * RU + 1]
      },
      tR = function(UU, RU) {
        return UU.map((function(UU, gU) {
          return UU * Math.pow(RU, gU)
        })).reduce((function(UU, RU) {
          return UU + RU
        }))
      },
      pR = function(UU, RU) {
        return function(gU) {
          var tU = gR(UU, RU);
          return tR(tU, gU)
        }
      },
      ER = function() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        var tU = RU[0],
          pU = RU[1],
          EU = RU[2],
          PU = RU[3];
        if (1 === RU.length) switch (RU[0]) {
          case "linear":
            tU = 0, pU = 0, EU = 1, PU = 1;
            break;
          case "ease":
            tU = .25, pU = .1, EU = .25, PU = 1;
            break;
          case "ease-in":
            tU = .42, pU = 0, EU = 1, PU = 1;
            break;
          case "ease-out":
            tU = .42, pU = 0, EU = .58, PU = 1;
            break;
          case "ease-in-out":
            tU = 0, pU = 0, EU = .58, PU = 1;
            break;
          default:
            var TU = RU[0].split("(");
            if ("cubic-bezier" === TU[0] && 4 === TU[1].split(")")[0].split(",").length) {
              var qU = NU(TU[1].split(")")[0].split(",").map((function(UU) {
                return parseFloat(UU)
              })), 4);
              tU = qU[0], pU = qU[1], EU = qU[2], PU = qU[3]
            }
        } [tU, EU, pU, PU].every((function(UU) {
          return "number" === typeof UU && UU >= 0 && UU <= 1
        }));
        var KU, cU, GU = pR(tU, EU),
          jU = pR(pU, PU),
          uU = (KU = tU, cU = EU, function(UU) {
            var RU = gR(KU, cU),
              gU = [].concat(lU(RU.map((function(UU, RU) {
                return UU * RU
              })).slice(1)), [0]);
            return tR(gU, UU)
          }),
          CU = function(UU) {
            for (var RU, gU = UU > 1 ? 1 : UU, tU = gU, pU = 0; pU < 8; ++pU) {
              var EU = GU(tU) - gU,
                PU = uU(tU);
              if (Math.abs(EU - gU) < RR || PU < RR) return jU(tU);
              tU = (RU = tU - EU / PU) > 1 ? 1 : RU < 0 ? 0 : RU
            }
            return jU(tU)
          };
        return CU.isStepper = !1, CU
      },
      PR = function() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        var tU = RU[0];
        if ("string" === typeof tU) switch (tU) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return ER(tU);
          case "spring":
            return function() {
              var UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                RU = UU.stiff,
                gU = void 0 === RU ? 100 : RU,
                tU = UU.damping,
                pU = void 0 === tU ? 8 : tU,
                EU = UU.dt,
                PU = void 0 === EU ? 17 : EU,
                TU = function(UU, RU, tU) {
                  var EU = tU + (-(UU - RU) * gU - tU * pU) * PU / 1e3,
                    TU = tU * PU / 1e3 + UU;
                  return Math.abs(TU - RU) < RR && Math.abs(EU) < RR ? [RU, 0] : [TU, EU]
                };
              return TU.isStepper = !0, TU.dt = PU, TU
            }();
          default:
            if ("cubic-bezier" === tU.split("(")[0]) return ER(tU)
        }
        return "function" === typeof tU ? tU : null
      };

    function TR(UU) {
      return TR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, TR(UU)
    }

    function qR(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return CR(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || uR(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function KR(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function cR(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? KR(Object(gU), !0).forEach((function(RU) {
          GR(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : KR(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function GR(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" !== TR(UU) || null === UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" !== TR(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" === TR(RU) ? RU : String(RU)
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function jR(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        var gU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != gU) {
          var tU, pU, EU, PU, TU = [],
            qU = !0,
            KU = !1;
          try {
            if (EU = (gU = gU.call(UU)).next, 0 === RU) {
              if (Object(gU) !== gU) return;
              qU = !1
            } else
              for (; !(qU = (tU = EU.call(gU)).done) && (TU.push(tU.value), TU.length !== RU); qU = !0);
          } catch (UU) {
            KU = !0, pU = UU
          } finally {
            try {
              if (!qU && null != gU.return && (PU = gU.return(), Object(PU) !== PU)) return
            } finally {
              if (KU) throw pU
            }
          }
          return TU
        }
      }(UU, RU) || uR(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uR(UU, RU) {
      if (UU) {
        if ("string" === typeof UU) return CR(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        return "Object" === gU && UU.constructor && (gU = UU.constructor.name), "Map" === gU || "Set" === gU ? Array.from(UU) : "Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU) ? CR(UU, RU) : void 0
      }
    }

    function CR(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }
    var hR = function(UU, RU, gU) {
        return UU + (RU - UU) * gU
      },
      QR = function(UU) {
        return UU.from !== UU.to
      },
      eR = function UU(RU, gU, tU) {
        var pU = DU((function(UU, gU) {
          if (QR(gU)) {
            var tU = jR(RU(gU.from, gU.to, gU.Fh), 2),
              pU = tU[0],
              EU = tU[1];
            return cR(cR({}, gU), {}, {
              from: pU,
              Fh: EU
            })
          }
          return gU
        }), gU);
        return tU < 1 ? DU((function(UU, RU) {
          return QR(RU) ? cR(cR({}, RU), {}, {
            Fh: hR(RU.Fh, pU[UU].Fh, tU),
            from: hR(RU.from, pU[UU].from, tU)
          }) : RU
        }), gU) : UU(RU, pU, tU - 1)
      };
    const WR = function(UU, RU, gU, tU, pU) {
      var EU, PU, TU, qU, KU = (EU = UU, PU = RU, [Object.keys(EU), Object.keys(PU)].reduce((function(UU, RU) {
          return UU.filter((function(UU) {
            return RU.includes(UU)
          }))
        }))),
        cU = KU.reduce((function(gU, tU) {
          return cR(cR({}, gU), {}, GR({}, tU, [UU[tU], RU[tU]]))
        }), {}),
        GU = KU.reduce((function(gU, tU) {
          return cR(cR({}, gU), {}, GR({}, tU, {
            from: UU[tU],
            Fh: 0,
            to: RU[tU]
          }))
        }), {}),
        jU = -1,
        uU = function() {
          return null
        };
      return uU = gU.isStepper ? function(tU) {
          TU || (TU = tU);
          var EU = (tU - TU) / gU.dt;
          GU = eR(gU, GU, EU), pU(cR(cR(cR({}, UU), RU), DU((function(UU, RU) {
            return RU.from
          }), GU))), TU = tU, Object.values(GU).filter(QR).length && (jU = requestAnimationFrame(uU))
        } : function(EU) {
          qU || (qU = EU);
          var PU = (EU - qU) / tU,
            TU = DU((function(UU, RU) {
              return hR.apply(void 0, qR(RU).concat([gU(PU)]))
            }), cU);
          if (pU(cR(cR(cR({}, UU), RU), TU)), PU < 1) jU = requestAnimationFrame(uU);
          else {
            var KU = DU((function(UU, RU) {
              return hR.apply(void 0, qR(RU).concat([gU(1)]))
            }), cU);
            pU(cR(cR(cR({}, UU), RU), KU))
          }
        },
        function() {
          return requestAnimationFrame(uU),
            function() {
              cancelAnimationFrame(jU)
            }
        }
    };

    function fR(UU) {
      return fR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, fR(UU)
    }
    var xR = ["children", "pu", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function mR(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU, tU, pU = {},
          EU = Object.keys(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || (pU[gU] = UU[gU]);
        return pU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function IR(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return JR(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return JR(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return JR(UU, RU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function JR(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function wR(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function nR(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? wR(Object(gU), !0).forEach((function(RU) {
          bR(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : wR(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function bR(UU, RU, gU) {
      return (RU = ZR(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function oR(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, ZR(tU.key), tU)
      }
    }

    function ZR(UU) {
      var RU = function(UU, RU) {
        if ("object" !== fR(UU) || null === UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" !== fR(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" === fR(RU) ? RU : String(RU)
    }

    function aR(UU, RU) {
      return aR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, aR(UU, RU)
    }

    function YR(UU) {
      var RU = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (UU) {
          return !1
        }
      }();
      return function() {
        var gU, tU = rR(UU);
        if (RU) {
          var pU = rR(this).constructor;
          gU = Reflect.construct(tU, arguments, pU)
        } else gU = tU.apply(this, arguments);
        return BR(this, gU)
      }
    }

    function BR(UU, RU) {
      if (RU && ("object" === fR(RU) || "function" === typeof RU)) return RU;
      if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
      return VR(UU)
    }

    function VR(UU) {
      if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return UU
    }

    function rR(UU) {
      return rR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, rR(UU)
    }
    var XR = function(UU) {
      ! function(UU, RU) {
        if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(RU && RU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), RU && aR(UU, RU)
      }(PU, UU);
      var RU, gU, pU, EU = YR(PU);

      function PU(UU, RU) {
        var gU;
        ! function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, PU);
        var tU = (gU = EU.call(this, UU, RU)).props,
          pU = tU.isActive,
          TU = tU.attributeName,
          qU = tU.from,
          KU = tU.to,
          cU = tU.steps,
          GU = tU.children,
          jU = tU.duration;
        if (gU.handleStyleChange = gU.handleStyleChange.bind(VR(gU)), gU.changeStyle = gU.changeStyle.bind(VR(gU)), !pU || jU <= 0) return gU.state = {
          style: {}
        }, "function" === typeof GU && (gU.state = {
          style: KU
        }), BR(gU);
        if (cU && cU.length) gU.state = {
          style: cU[0].style
        };
        else if (qU) {
          if ("function" === typeof GU) return gU.state = {
            style: qU
          }, BR(gU);
          gU.state = {
            style: TU ? bR({}, TU, qU) : qU
          }
        } else gU.state = {
          style: {}
        };
        return gU
      }
      return RU = PU, (gU = [{
        key: "componentDidMount",
        value: function() {
          var UU = this.props,
            RU = UU.isActive,
            gU = UU.canBegin;
          this.mounted = !0, RU && gU && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(UU) {
          var RU = this.props,
            gU = RU.isActive,
            tU = RU.canBegin,
            pU = RU.attributeName,
            EU = RU.shouldReAnimate,
            PU = RU.to,
            TU = RU.from,
            qU = this.state.style;
          if (tU)
            if (gU) {
              if (!(vU(UU.to, PU) && UU.canBegin && UU.isActive)) {
                var KU = !UU.canBegin || !UU.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var cU = KU || EU ? TU : UU.to;
                if (this.state && qU) {
                  var GU = {
                    style: pU ? bR({}, pU, cU) : cU
                  };
                  (pU && qU[pU] !== cU || !pU && qU !== cU) && this.setState(GU)
                }
                this.runAnimation(nR(nR({}, this.props), {}, {
                  from: cU,
                  pu: 0
                }))
              }
            } else {
              var jU = {
                style: pU ? bR({}, pU, PU) : PU
              };
              this.state && qU && (pU && qU[pU] !== PU || !pU && qU !== PU) && this.setState(jU)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var UU = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), UU && UU()
        }
      }, {
        key: "handleStyleChange",
        value: function(UU) {
          this.changeStyle(UU)
        }
      }, {
        key: "changeStyle",
        value: function(UU) {
          this.mounted && this.setState({
            style: UU
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(UU) {
          var RU = this,
            gU = UU.from,
            tU = UU.to,
            pU = UU.duration,
            EU = UU.easing,
            PU = UU.pu,
            TU = UU.onAnimationEnd,
            qU = UU.onAnimationStart,
            KU = WR(gU, tU, PR(EU), pU, this.changeStyle);
          this.manager.start([qU, PU, function() {
            RU.stopJSAnimation = KU()
          }, pU, TU])
        }
      }, {
        key: "runStepAnimation",
        value: function(UU) {
          var RU = this,
            gU = UU.steps,
            tU = UU.pu,
            pU = UU.onAnimationStart,
            EU = gU[0],
            PU = EU.style,
            TU = EU.duration,
            qU = void 0 === TU ? 0 : TU;
          return this.manager.start([pU].concat(IR(gU.reduce((function(UU, tU, pU) {
            if (0 === pU) return UU;
            var EU = tU.duration,
              PU = tU.easing,
              TU = void 0 === PU ? "ease" : PU,
              qU = tU.style,
              KU = tU.properties,
              cU = tU.onAnimationEnd,
              GU = pU > 0 ? gU[pU - 1] : tU,
              jU = KU || Object.keys(qU);
            if ("function" === typeof TU || "spring" === TU) return [].concat(IR(UU), [RU.runJSAnimation.bind(RU, {
              from: GU.style,
              to: qU,
              duration: EU,
              easing: TU
            }), EU]);
            var uU = LU(jU, EU, TU),
              CU = nR(nR(nR({}, GU.style), qU), {}, {
                transition: uU
              });
            return [].concat(IR(UU), [CU, EU, cU]).filter(MU)
          }), [PU, Math.max(qU, tU)])), [UU.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(UU) {
          this.manager || (this.manager = kU());
          var RU = UU.pu,
            gU = UU.duration,
            tU = UU.attributeName,
            pU = UU.to,
            EU = UU.easing,
            PU = UU.onAnimationStart,
            TU = UU.onAnimationEnd,
            qU = UU.steps,
            KU = UU.children,
            cU = this.manager;
          if (this.unSubscribe = cU.subscribe(this.handleStyleChange), "function" !== typeof EU && "function" !== typeof KU && "spring" !== EU)
            if (qU.length > 1) this.runStepAnimation(UU);
            else {
              var GU = tU ? bR({}, tU, pU) : pU,
                jU = LU(Object.keys(GU), gU, EU);
              cU.start([PU, RU, nR(nR({}, GU), {}, {
                transition: jU
              }), gU, TU])
            }
          else this.runJSAnimation(UU)
        }
      }, {
        key: "render",
        value: function() {
          var UU = this.props,
            RU = UU.children,
            gU = (UU.pu, UU.duration),
            pU = (UU.attributeName, UU.easing, UU.isActive),
            EU = (UU.steps, UU.from, UU.to, UU.canBegin, UU.onAnimationEnd, UU.shouldReAnimate, UU.onAnimationReStart, mR(UU, xR)),
            PU = tU.Children.count(RU),
            TU = this.state.style;
          if ("function" === typeof RU) return RU(TU);
          if (!pU || 0 === PU || gU <= 0) return RU;
          var qU = function(UU) {
            var RU = UU.props,
              gU = RU.style,
              pU = void 0 === gU ? {} : gU,
              PU = RU.className;
            return (0, tU.cloneElement)(UU, nR(nR({}, EU), {}, {
              style: nR(nR({}, pU), TU),
              className: PU
            }))
          };
          return 1 === PU ? qU(tU.Children.only(RU)) : tU.createElement("div", null, tU.Children.map(RU, (function(UU) {
            return qU(UU)
          })))
        }
      }]) && oR(RU.prototype, gU), pU && oR(RU, pU), Object.defineProperty(RU, "prototype", {
        writable: !1
      }), PU
    }(tU.PureComponent);
    XR.displayName = "Animate", XR.defaultProps = {
      pu: 0,
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
    }, XR.propTypes = {
      from: EU().oneOfType([EU().object, EU().string]),
      to: EU().oneOfType([EU().object, EU().string]),
      attributeName: EU().string,
      duration: EU().number,
      pu: EU().number,
      easing: EU().oneOfType([EU().string, EU().func]),
      steps: EU().arrayOf(EU().shape({
        duration: EU().number.isRequired,
        style: EU().object.isRequired,
        easing: EU().oneOfType([EU().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), EU().func]),
        properties: EU().arrayOf("string"),
        onAnimationEnd: EU().func
      })),
      children: EU().oneOfType([EU().node, EU().func]),
      isActive: EU().bool,
      canBegin: EU().bool,
      onAnimationEnd: EU().func,
      shouldReAnimate: EU().bool,
      onAnimationStart: EU().func,
      onAnimationReStart: EU().func
    };
    const vR = XR
  },
  6057: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => sU
    });
    var tU, pU = gU(56),
      EU = gU(4733),
      PU = gU(5799),
      TU = gU(4921),
      qU = gU.n(TU),
      KU = gU(5842),
      cU = gU.n(KU),
      GU = gU(5087),
      jU = gU.n(GU),
      uU = gU(4840),
      CU = gU.n(uU),
      hU = gU(5874),
      QU = gU.n(hU),
      eU = gU(6049),
      WU = gU(5791),
      fU = gU(5633),
      xU = gU(5962),
      mU = gU(5647),
      IU = gU(4827),
      JU = gU(5817),
      wU = gU(5097),
      nU = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      bU = ["key"];

    function oU(UU) {
      return oU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, oU(UU)
    }

    function ZU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function aU() {
      return aU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, aU.apply(this, arguments)
    }

    function YU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function BU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? YU(Object(gU), !0).forEach((function(RU) {
          HU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : YU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function VU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, SU(tU.key), tU)
      }
    }

    function rU(UU, RU, gU) {
      return RU = vU(RU),
        function(UU, RU) {
          if (RU && ("object" === oU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, XU() ? Reflect.construct(RU, gU || [], vU(UU).constructor) : RU.apply(UU, gU))
    }

    function XU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (XU = function() {
        return !!UU
      })()
    }

    function vU(UU) {
      return vU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, vU(UU)
    }

    function dU(UU, RU) {
      return dU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, dU(UU, RU)
    }

    function HU(UU, RU, gU) {
      return (RU = SU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function SU(UU) {
      var RU = function(UU, RU) {
        if ("object" != oU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != oU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == oU(RU) ? RU : RU + ""
    }
    var sU = function(UU) {
      function RU() {
        var UU;
        ! function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, RU);
        for (var gU = arguments.length, tU = new Array(gU), pU = 0; pU < gU; pU++) tU[pU] = arguments[pU];
        return HU(UU = rU(this, RU, [].concat(tU)), "state", {
          isAnimationFinished: !0
        }), HU(UU, "id", (0, IU.C)("recharts-area-")), HU(UU, "handleAnimationEnd", (function() {
          var RU = UU.props.onAnimationEnd;
          UU.setState({
            isAnimationFinished: !0
          }), qU()(RU) && RU()
        })), HU(UU, "handleAnimationStart", (function() {
          var RU = UU.props.onAnimationStart;
          UU.setState({
            isAnimationFinished: !1
          }), qU()(RU) && RU()
        })), UU
      }
      return function(UU, RU) {
        if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(RU && RU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), RU && dU(UU, RU)
      }(RU, UU), gU = RU, tU = [{
        key: "renderDots",
        value: function(UU, gU, tU) {
          var EU = this.props.isAnimationActive,
            PU = this.state.isAnimationFinished;
          if (EU && !PU) return null;
          var TU = this.props,
            qU = TU.dot,
            KU = TU.points,
            cU = TU.dataKey,
            GU = (0, wU.b)(this.props, !1),
            jU = (0, wU.b)(qU, !0),
            uU = KU.map((function(UU, gU) {
              var tU = BU(BU(BU({
                key: "dot-".concat(gU),
                r: 3
              }, GU), jU), {}, {
                index: gU,
                cx: UU.x,
                cy: UU.y,
                dataKey: cU,
                value: UU.value,
                payload: UU.payload,
                points: KU
              });
              return RU.renderDotItem(qU, tU)
            })),
            CU = {
              clipPath: UU ? "url(#clipPath-".concat(gU ? "" : "dots-").concat(tU, ")") : null
            };
          return pU.createElement(fU.e, aU({
            className: "recharts-area-dots"
          }, CU), uU)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(UU) {
          var RU = this.props,
            gU = RU.baseLine,
            tU = RU.points,
            EU = RU.strokeWidth,
            PU = tU[0].x,
            TU = tU[tU.length - 1].x,
            qU = UU * Math.abs(PU - TU),
            KU = cU()(tU.map((function(UU) {
              return UU.y || 0
            })));
          return (0, IU.v)(gU) && "number" === typeof gU ? KU = Math.max(gU, KU) : gU && Array.isArray(gU) && gU.length && (KU = Math.max(cU()(gU.map((function(UU) {
            return UU.y || 0
          }))), KU)), (0, IU.v)(KU) ? pU.createElement("rect", {
            x: PU < TU ? PU : PU - qU,
            y: 0,
            width: qU,
            height: Math.floor(KU + (EU ? parseInt("".concat(EU), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(UU) {
          var RU = this.props,
            gU = RU.baseLine,
            tU = RU.points,
            EU = RU.strokeWidth,
            PU = tU[0].y,
            TU = tU[tU.length - 1].y,
            qU = UU * Math.abs(PU - TU),
            KU = cU()(tU.map((function(UU) {
              return UU.x || 0
            })));
          return (0, IU.v)(gU) && "number" === typeof gU ? KU = Math.max(gU, KU) : gU && Array.isArray(gU) && gU.length && (KU = Math.max(cU()(gU.map((function(UU) {
            return UU.x || 0
          }))), KU)), (0, IU.v)(KU) ? pU.createElement("rect", {
            x: 0,
            y: PU < TU ? PU : PU - qU,
            width: KU + (EU ? parseInt("".concat(EU), 10) : 1),
            height: Math.floor(qU)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(UU) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(UU) : this.renderHorizontalRect(UU)
        }
      }, {
        key: "renderAreaStatically",
        value: function(UU, RU, gU, tU) {
          var EU = this.props,
            PU = EU.layout,
            TU = EU.type,
            qU = EU.stroke,
            KU = EU.connectNulls,
            cU = EU.isRange,
            GU = (EU.ref, ZU(EU, nU));
          return pU.createElement(fU.e, {
            clipPath: gU ? "url(#clipPath-".concat(tU, ")") : null
          }, pU.createElement(eU.b, aU({}, (0, wU.b)(GU, !0), {
            points: UU,
            connectNulls: KU,
            type: TU,
            baseLine: RU,
            layout: PU,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== qU && pU.createElement(eU.b, aU({}, (0, wU.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: PU,
            type: TU,
            connectNulls: KU,
            fill: "none",
            points: UU
          })), "none" !== qU && cU && pU.createElement(eU.b, aU({}, (0, wU.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: PU,
            type: TU,
            connectNulls: KU,
            fill: "none",
            points: RU
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(UU, RU) {
          var gU = this,
            tU = this.props,
            EU = tU.points,
            TU = tU.baseLine,
            qU = tU.isAnimationActive,
            KU = tU.animationBegin,
            cU = tU.animationDuration,
            GU = tU.animationEasing,
            uU = tU.animationId,
            hU = this.state,
            QU = hU.prevPoints,
            eU = hU.prevBaseLine;
          return pU.createElement(PU.b, {
            pu: KU,
            duration: cU,
            isActive: qU,
            easing: GU,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(uU),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(tU) {
            var PU = tU.t;
            if (QU) {
              var qU, KU = QU.length / EU.length,
                cU = EU.map((function(UU, RU) {
                  var gU = Math.floor(RU * KU);
                  if (QU[gU]) {
                    var tU = QU[gU],
                      pU = (0, IU.p)(tU.x, UU.x),
                      EU = (0, IU.p)(tU.y, UU.y);
                    return BU(BU({}, UU), {}, {
                      x: pU(PU),
                      y: EU(PU)
                    })
                  }
                  return UU
                }));
              return qU = (0, IU.v)(TU) && "number" === typeof TU ? (0, IU.p)(eU, TU)(PU) : jU()(TU) || CU()(TU) ? (0, IU.p)(eU, 0)(PU) : TU.map((function(UU, RU) {
                var gU = Math.floor(RU * KU);
                if (eU[gU]) {
                  var tU = eU[gU],
                    pU = (0, IU.p)(tU.x, UU.x),
                    EU = (0, IU.p)(tU.y, UU.y);
                  return BU(BU({}, UU), {}, {
                    x: pU(PU),
                    y: EU(PU)
                  })
                }
                return UU
              })), gU.renderAreaStatically(cU, qU, UU, RU)
            }
            return pU.createElement(fU.e, null, pU.createElement("defs", null, pU.createElement("clipPath", {
              id: "animationClipPath-".concat(RU)
            }, gU.renderClipRect(PU))), pU.createElement(fU.e, {
              clipPath: "url(#animationClipPath-".concat(RU, ")")
            }, gU.renderAreaStatically(EU, TU, UU, RU)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(UU, RU) {
          var gU = this.props,
            tU = gU.points,
            pU = gU.baseLine,
            EU = gU.isAnimationActive,
            PU = this.state,
            TU = PU.prevPoints,
            qU = PU.prevBaseLine,
            KU = PU.totalLength;
          return EU && tU && tU.length && (!TU && KU > 0 || !QU()(TU, tU) || !QU()(qU, pU)) ? this.renderAreaWithAnimation(UU, RU) : this.renderAreaStatically(tU, pU, UU, RU)
        }
      }, {
        key: "render",
        value: function() {
          var UU, RU = this.props,
            gU = RU.hide,
            tU = RU.dot,
            PU = RU.points,
            TU = RU.className,
            qU = RU.top,
            KU = RU.left,
            cU = RU.xAxis,
            GU = RU.yAxis,
            uU = RU.width,
            CU = RU.height,
            hU = RU.isAnimationActive,
            QU = RU.id;
          if (gU || !PU || !PU.length) return null;
          var eU = this.state.isAnimationFinished,
            WU = 1 === PU.length,
            mU = (0, EU.e)("recharts-area", TU),
            IU = cU && cU.allowDataOverflow,
            JU = GU && GU.allowDataOverflow,
            nU = IU || JU,
            bU = jU()(QU) ? this.id : QU,
            oU = null !== (UU = (0, wU.b)(tU, !1)) && void 0 !== UU ? UU : {
              r: 3,
              strokeWidth: 2
            },
            ZU = oU.r,
            aU = void 0 === ZU ? 3 : ZU,
            YU = oU.strokeWidth,
            BU = void 0 === YU ? 2 : YU,
            VU = ((0, wU.m)(tU) ? tU : {}).clipDot,
            rU = void 0 === VU || VU,
            XU = 2 * aU + BU;
          return pU.createElement(fU.e, {
            className: mU
          }, IU || JU ? pU.createElement("defs", null, pU.createElement("clipPath", {
            id: "clipPath-".concat(bU)
          }, pU.createElement("rect", {
            x: IU ? KU : KU - uU / 2,
            y: JU ? qU : qU - CU / 2,
            width: IU ? uU : 2 * uU,
            height: JU ? CU : 2 * CU
          })), !rU && pU.createElement("clipPath", {
            id: "clipPath-dots-".concat(bU)
          }, pU.createElement("rect", {
            x: KU - XU / 2,
            y: qU - XU / 2,
            width: uU + XU,
            height: CU + XU
          }))) : null, WU ? null : this.renderArea(nU, bU), (tU || WU) && this.renderDots(nU, rU, bU), (!hU || eU) && xU.b.renderCallByParent(this.props, PU))
        }
      }], TU = [{
        key: "getDerivedStateFromProps",
        value: function(UU, RU) {
          return UU.animationId !== RU.prevAnimationId ? {
            prevAnimationId: UU.animationId,
            curPoints: UU.points,
            curBaseLine: UU.baseLine,
            prevPoints: RU.curPoints,
            prevBaseLine: RU.curBaseLine
          } : UU.points !== RU.curPoints || UU.baseLine !== RU.curBaseLine ? {
            curPoints: UU.points,
            curBaseLine: UU.baseLine
          } : null
        }
      }], tU && VU(gU.prototype, tU), TU && VU(gU, TU), Object.defineProperty(gU, "prototype", {
        writable: !1
      }), gU;
      var gU, tU, TU
    }(pU.PureComponent);
    tU = sU, HU(sU, "displayName", "Area"), HU(sU, "defaultProps", {
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
      isAnimationActive: !mU.b.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), HU(sU, "getBaseValue", (function(UU, RU, gU, tU) {
      var pU = UU.layout,
        EU = UU.baseValue,
        PU = RU.props.baseValue,
        TU = null !== PU && void 0 !== PU ? PU : EU;
      if ((0, IU.v)(TU) && "number" === typeof TU) return TU;
      var qU = "horizontal" === pU ? tU : gU,
        KU = qU.scale.domain();
      if ("number" === qU.type) {
        var cU = Math.max(KU[0], KU[1]),
          GU = Math.min(KU[0], KU[1]);
        return "dataMin" === TU ? GU : "dataMax" === TU || cU < 0 ? cU : Math.max(Math.min(KU[0], KU[1]), 0)
      }
      return "dataMin" === TU ? KU[0] : "dataMax" === TU ? KU[1] : KU[0]
    })), HU(sU, "getComposedData", (function(UU) {
      var RU, gU = UU.props,
        pU = UU.item,
        EU = UU.xAxis,
        PU = UU.yAxis,
        TU = UU.xAxisTicks,
        qU = UU.yAxisTicks,
        KU = UU.bandSize,
        cU = UU.dataKey,
        GU = UU.stackedData,
        jU = UU.dataStartIndex,
        uU = UU.displayedData,
        CU = UU.offset,
        hU = gU.layout,
        QU = GU && GU.length,
        eU = tU.getBaseValue(gU, pU, EU, PU),
        WU = "horizontal" === hU,
        fU = !1,
        xU = uU.map((function(UU, RU) {
          var gU;
          QU ? gU = GU[jU + RU] : (gU = (0, JU.cb)(UU, cU), Array.isArray(gU) ? fU = !0 : gU = [eU, gU]);
          var tU = null == gU[1] || QU && null == (0, JU.cb)(UU, cU);
          return WU ? {
            x: (0, JU.w)({
              axis: EU,
              ticks: TU,
              bandSize: KU,
              entry: UU,
              index: RU
            }),
            y: tU ? null : PU.scale(gU[1]),
            value: gU,
            payload: UU
          } : {
            x: tU ? null : EU.scale(gU[1]),
            y: (0, JU.w)({
              axis: PU,
              ticks: qU,
              bandSize: KU,
              entry: UU,
              index: RU
            }),
            value: gU,
            payload: UU
          }
        }));
      return RU = QU || fU ? xU.map((function(UU) {
        var RU = Array.isArray(UU.value) ? UU.value[0] : null;
        return WU ? {
          x: UU.x,
          y: null != RU && null != UU.y ? PU.scale(RU) : null
        } : {
          x: null != RU ? EU.scale(RU) : null,
          y: UU.y
        }
      })) : WU ? PU.scale(eU) : EU.scale(eU), BU({
        points: xU,
        baseLine: RU,
        layout: hU,
        isRange: fU
      }, CU)
    })), HU(sU, "renderDotItem", (function(UU, RU) {
      var gU;
      if (pU.isValidElement(UU)) gU = pU.cloneElement(UU, RU);
      else if (qU()(UU)) gU = UU(RU);
      else {
        var tU = (0, EU.e)("recharts-area-dot", "boolean" !== typeof UU ? UU.className : ""),
          PU = RU.key,
          TU = ZU(RU, bU);
        gU = pU.createElement(WU.c, aU({}, TU, {
          key: PU,
          className: tU
        }))
      }
      return gU
    }))
  },
  5948: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => AU
    });
    var tU = gU(56),
      pU = gU(4733),
      EU = gU(5799),
      PU = gU(5874),
      TU = gU.n(PU),
      qU = gU(5087),
      KU = gU.n(qU),
      cU = gU(5633),
      GU = gU(5885),
      jU = gU(5955),
      uU = gU(5962),
      CU = gU(4827),
      hU = gU(5097),
      QU = gU(5647),
      eU = gU(5817),
      WU = gU(5125),
      fU = gU(5622),
      xU = gU(5976),
      mU = ["x", "y"];

    function IU(UU) {
      return IU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, IU(UU)
    }

    function JU() {
      return JU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, JU.apply(this, arguments)
    }

    function wU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function nU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? wU(Object(gU), !0).forEach((function(RU) {
          bU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : wU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function bU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != IU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != IU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == IU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function oU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function ZU(UU, RU) {
      var gU = UU.x,
        tU = UU.y,
        pU = oU(UU, mU),
        EU = "".concat(gU),
        PU = parseInt(EU, 10),
        TU = "".concat(tU),
        qU = parseInt(TU, 10),
        KU = "".concat(RU.height || pU.height),
        cU = parseInt(KU, 10),
        GU = "".concat(RU.width || pU.width),
        jU = parseInt(GU, 10);
      return nU(nU(nU(nU(nU({}, RU), pU), PU ? {
        x: PU
      } : {}), qU ? {
        y: qU
      } : {}), {}, {
        height: cU,
        width: jU,
        name: RU.name,
        radius: RU.radius
      })
    }

    function aU(UU) {
      return tU.createElement(xU.c, JU({
        shapeType: "rectangle",
        propTransformer: ZU,
        activeClassName: "recharts-active-bar"
      }, UU))
    }
    var YU, BU = ["value", "background"];

    function VU(UU) {
      return VU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, VU(UU)
    }

    function rU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function XU() {
      return XU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, XU.apply(this, arguments)
    }

    function vU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function dU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? vU(Object(gU), !0).forEach((function(RU) {
          FU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : vU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function HU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, iU(tU.key), tU)
      }
    }

    function SU(UU, RU, gU) {
      return RU = yU(RU),
        function(UU, RU) {
          if (RU && ("object" === VU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, sU() ? Reflect.construct(RU, gU || [], yU(UU).constructor) : RU.apply(UU, gU))
    }

    function sU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (sU = function() {
        return !!UU
      })()
    }

    function yU(UU) {
      return yU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, yU(UU)
    }

    function kU(UU, RU) {
      return kU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, kU(UU, RU)
    }

    function FU(UU, RU, gU) {
      return (RU = iU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function iU(UU) {
      var RU = function(UU, RU) {
        if ("object" != VU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != VU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == VU(RU) ? RU : RU + ""
    }
    var AU = function(UU) {
      function RU() {
        var UU;
        ! function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, RU);
        for (var gU = arguments.length, tU = new Array(gU), pU = 0; pU < gU; pU++) tU[pU] = arguments[pU];
        return FU(UU = SU(this, RU, [].concat(tU)), "state", {
          isAnimationFinished: !1
        }), FU(UU, "id", (0, CU.C)("recharts-bar-")), FU(UU, "handleAnimationEnd", (function() {
          var RU = UU.props.onAnimationEnd;
          UU.setState({
            isAnimationFinished: !0
          }), RU && RU()
        })), FU(UU, "handleAnimationStart", (function() {
          var RU = UU.props.onAnimationStart;
          UU.setState({
            isAnimationFinished: !1
          }), RU && RU()
        })), UU
      }
      return function(UU, RU) {
        if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(RU && RU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), RU && kU(UU, RU)
      }(RU, UU), gU = RU, PU = [{
        key: "renderRectanglesStatically",
        value: function(UU) {
          var RU = this,
            gU = this.props,
            pU = gU.shape,
            EU = gU.dataKey,
            PU = gU.activeIndex,
            TU = gU.activeBar,
            qU = (0, hU.b)(this.props, !1);
          return UU && UU.map((function(UU, gU) {
            var KU = gU === PU,
              GU = KU ? TU : pU,
              jU = dU(dU(dU({}, qU), UU), {}, {
                isActive: KU,
                option: GU,
                index: gU,
                dataKey: EU,
                onAnimationStart: RU.handleAnimationStart,
                onAnimationEnd: RU.handleAnimationEnd
              });
            return tU.createElement(cU.e, XU({
              className: "recharts-bar-rectangle"
            }, (0, WU.p)(RU.props, UU, gU), {
              key: "rectangle-".concat(null === UU || void 0 === UU ? void 0 : UU.x, "-").concat(null === UU || void 0 === UU ? void 0 : UU.y, "-").concat(null === UU || void 0 === UU ? void 0 : UU.value, "-").concat(gU)
            }), tU.createElement(aU, jU))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var UU = this,
            RU = this.props,
            gU = RU.data,
            pU = RU.layout,
            PU = RU.isAnimationActive,
            TU = RU.animationBegin,
            qU = RU.animationDuration,
            KU = RU.animationEasing,
            GU = RU.animationId,
            jU = this.state.prevData;
          return tU.createElement(EU.b, {
            pu: TU,
            duration: qU,
            isActive: PU,
            easing: KU,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(GU),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(RU) {
            var EU = RU.t,
              PU = gU.map((function(UU, RU) {
                var gU = jU && jU[RU];
                if (gU) {
                  var tU = (0, CU.p)(gU.x, UU.x),
                    PU = (0, CU.p)(gU.y, UU.y),
                    TU = (0, CU.p)(gU.width, UU.width),
                    qU = (0, CU.p)(gU.height, UU.height);
                  return dU(dU({}, UU), {}, {
                    x: tU(EU),
                    y: PU(EU),
                    width: TU(EU),
                    height: qU(EU)
                  })
                }
                if ("horizontal" === pU) {
                  var KU = (0, CU.p)(0, UU.height)(EU);
                  return dU(dU({}, UU), {}, {
                    y: UU.y + UU.height - KU,
                    height: KU
                  })
                }
                var cU = (0, CU.p)(0, UU.width)(EU);
                return dU(dU({}, UU), {}, {
                  width: cU
                })
              }));
            return tU.createElement(cU.e, null, UU.renderRectanglesStatically(PU))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var UU = this.props,
            RU = UU.data,
            gU = UU.isAnimationActive,
            tU = this.state.prevData;
          return !(gU && RU && RU.length) || tU && TU()(tU, RU) ? this.renderRectanglesStatically(RU) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var UU = this,
            RU = this.props,
            gU = RU.data,
            pU = RU.dataKey,
            EU = RU.activeIndex,
            PU = (0, hU.b)(this.props.background, !1);
          return gU.map((function(RU, gU) {
            RU.value;
            var TU = RU.background,
              qU = rU(RU, BU);
            if (!TU) return null;
            var KU = dU(dU(dU(dU(dU({}, qU), {}, {
              fill: "#eee"
            }, TU), PU), (0, WU.p)(UU.props, RU, gU)), {}, {
              onAnimationStart: UU.handleAnimationStart,
              onAnimationEnd: UU.handleAnimationEnd,
              dataKey: pU,
              index: gU,
              className: "recharts-bar-background-rectangle"
            });
            return tU.createElement(aU, XU({
              key: "background-bar-".concat(gU),
              option: UU.props.background,
              isActive: gU === EU
            }, KU))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(UU, RU) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var gU = this.props,
            pU = gU.data,
            EU = gU.xAxis,
            PU = gU.yAxis,
            TU = gU.layout,
            qU = gU.children,
            KU = (0, hU.f)(qU, GU.c);
          if (!KU) return null;
          var jU = "vertical" === TU ? pU[0].height / 2 : pU[0].width / 2,
            uU = function(UU, RU) {
              var gU = Array.isArray(UU.value) ? UU.value[1] : UU.value;
              return {
                x: UU.x,
                y: UU.y,
                value: gU,
                errorVal: (0, eU.cb)(UU, RU)
              }
            },
            CU = {
              clipPath: UU ? "url(#clipPath-".concat(RU, ")") : null
            };
          return tU.createElement(cU.e, CU, KU.map((function(UU) {
            return tU.cloneElement(UU, {
              key: "error-bar-".concat(RU, "-").concat(UU.props.dataKey),
              data: pU,
              xAxis: EU,
              yAxis: PU,
              layout: TU,
              offset: jU,
              dataPointFormatter: uU
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var UU = this.props,
            RU = UU.hide,
            gU = UU.data,
            EU = UU.className,
            PU = UU.xAxis,
            TU = UU.yAxis,
            qU = UU.left,
            GU = UU.top,
            jU = UU.width,
            CU = UU.height,
            hU = UU.isAnimationActive,
            QU = UU.background,
            eU = UU.id;
          if (RU || !gU || !gU.length) return null;
          var WU = this.state.isAnimationFinished,
            fU = (0, pU.e)("recharts-bar", EU),
            xU = PU && PU.allowDataOverflow,
            mU = TU && TU.allowDataOverflow,
            IU = xU || mU,
            JU = KU()(eU) ? this.id : eU;
          return tU.createElement(cU.e, {
            className: fU
          }, xU || mU ? tU.createElement("defs", null, tU.createElement("clipPath", {
            id: "clipPath-".concat(JU)
          }, tU.createElement("rect", {
            x: xU ? qU : qU - jU / 2,
            y: mU ? GU : GU - CU / 2,
            width: xU ? jU : 2 * jU,
            height: mU ? CU : 2 * CU
          }))) : null, tU.createElement(cU.e, {
            className: "recharts-bar-rectangles",
            clipPath: IU ? "url(#clipPath-".concat(JU, ")") : null
          }, QU ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(IU, JU), (!hU || WU) && uU.b.renderCallByParent(this.props, gU))
        }
      }], qU = [{
        key: "getDerivedStateFromProps",
        value: function(UU, RU) {
          return UU.animationId !== RU.prevAnimationId ? {
            prevAnimationId: UU.animationId,
            curData: UU.data,
            prevData: RU.curData
          } : UU.data !== RU.curData ? {
            curData: UU.data
          } : null
        }
      }], PU && HU(gU.prototype, PU), qU && HU(gU, qU), Object.defineProperty(gU, "prototype", {
        writable: !1
      }), gU;
      var gU, PU, qU
    }(tU.PureComponent);
    YU = AU, FU(AU, "displayName", "Bar"), FU(AU, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !QU.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), FU(AU, "getComposedData", (function(UU) {
      var RU = UU.props,
        gU = UU.item,
        tU = UU.barPosition,
        pU = UU.bandSize,
        EU = UU.xAxis,
        PU = UU.yAxis,
        TU = UU.xAxisTicks,
        qU = UU.yAxisTicks,
        KU = UU.stackedData,
        cU = UU.dataStartIndex,
        GU = UU.displayedData,
        uU = UU.offset,
        QU = (0, eU.m)(tU, gU);
      if (!QU) return null;
      var WU = RU.layout,
        xU = gU.type.defaultProps,
        mU = void 0 !== xU ? dU(dU({}, xU), gU.props) : gU.props,
        IU = mU.dataKey,
        JU = mU.children,
        wU = mU.minPointSize,
        nU = "horizontal" === WU ? PU : EU,
        bU = KU ? nU.scale.domain() : null,
        oU = (0, eU.t)({
          numericAxis: nU
        }),
        ZU = (0, hU.f)(JU, jU.e),
        aU = GU.map((function(UU, RU) {
          var tU, GU, jU, uU, hU, xU;
          KU ? tU = (0, eU.qb)(KU[cU + RU], bU) : (tU = (0, eU.cb)(UU, IU), Array.isArray(tU) || (tU = [oU, tU]));
          var mU = function(UU) {
            var RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(gU, tU) {
              if ("number" === typeof UU) return UU;
              var pU = (0, CU.v)(gU) || (0, CU.q)(gU);
              return pU ? UU(gU, tU) : (pU || (0, fU.b)(!1), RU)
            }
          }(wU, YU.defaultProps.minPointSize)(tU[1], RU);
          if ("horizontal" === WU) {
            var JU, nU = [PU.scale(tU[0]), PU.scale(tU[1])],
              aU = nU[0],
              BU = nU[1];
            GU = (0, eU.u)({
              axis: EU,
              ticks: TU,
              bandSize: pU,
              offset: QU.offset,
              entry: UU,
              index: RU
            }), jU = null !== (JU = null !== BU && void 0 !== BU ? BU : aU) && void 0 !== JU ? JU : void 0, uU = QU.size;
            var VU = aU - BU;
            if (hU = Number.isNaN(VU) ? 0 : VU, xU = {
                x: GU,
                y: PU.y,
                width: uU,
                height: PU.height
              }, Math.abs(mU) > 0 && Math.abs(hU) < Math.abs(mU)) {
              var rU = (0, CU.y)(hU || mU) * (Math.abs(mU) - Math.abs(hU));
              jU -= rU, hU += rU
            }
          } else {
            var XU = [EU.scale(tU[0]), EU.scale(tU[1])],
              vU = XU[0],
              HU = XU[1];
            if (GU = vU, jU = (0, eU.u)({
                axis: PU,
                ticks: qU,
                bandSize: pU,
                offset: QU.offset,
                entry: UU,
                index: RU
              }), uU = HU - vU, hU = QU.size, xU = {
                x: EU.x,
                y: jU,
                width: EU.width,
                height: hU
              }, Math.abs(mU) > 0 && Math.abs(uU) < Math.abs(mU)) uU += (0, CU.y)(uU || mU) * (Math.abs(mU) - Math.abs(uU))
          }
          return dU(dU(dU({}, UU), {}, {
            x: GU,
            y: jU,
            width: uU,
            height: hU,
            value: KU ? tU : tU[1],
            payload: UU,
            background: xU
          }, ZU && ZU[RU] && ZU[RU].props), {}, {
            tooltipPayload: [(0, eU._)(gU, UU)],
            tooltipPosition: {
              x: GU + uU / 2,
              y: jU + hU / 2
            }
          })
        }));
      return dU({
        data: aU,
        layout: WU
      }, uU)
    }))
  },
  6070: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => VU
    });
    var tU = gU(56),
      pU = gU(4921),
      EU = gU.n(pU),
      PU = gU(4846),
      TU = gU.n(PU),
      qU = gU(4733),
      KU = gU(5121),
      cU = gU(5633),
      GU = gU(5805),
      jU = gU(5899),
      uU = gU(4827),
      CU = gU(5125),
      hU = gU(5097),
      QU = gU(6077),
      eU = ["viewBox"],
      WU = ["viewBox"],
      fU = ["ticks"];

    function xU(UU) {
      return xU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, xU(UU)
    }

    function mU() {
      return mU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, mU.apply(this, arguments)
    }

    function IU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function JU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? IU(Object(gU), !0).forEach((function(RU) {
          YU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : IU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function wU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function nU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, BU(tU.key), tU)
      }
    }

    function bU(UU, RU, gU) {
      return RU = ZU(RU),
        function(UU, RU) {
          if (RU && ("object" === xU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, oU() ? Reflect.construct(RU, gU || [], ZU(UU).constructor) : RU.apply(UU, gU))
    }

    function oU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (oU = function() {
        return !!UU
      })()
    }

    function ZU(UU) {
      return ZU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, ZU(UU)
    }

    function aU(UU, RU) {
      return aU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, aU(UU, RU)
    }

    function YU(UU, RU, gU) {
      return (RU = BU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function BU(UU) {
      var RU = function(UU, RU) {
        if ("object" != xU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != xU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == xU(RU) ? RU : RU + ""
    }
    var VU = function(UU) {
      function RU(UU) {
        var gU;
        return function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, RU), (gU = bU(this, RU, [UU])).state = {
          fontSize: "",
          letterSpacing: ""
        }, gU
      }
      return function(UU, RU) {
        if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(RU && RU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), RU && aU(UU, RU)
      }(RU, UU), gU = RU, PU = [{
        key: "renderTickItem",
        value: function(UU, RU, gU) {
          var pU = (0, qU.e)(RU.className, "recharts-cartesian-axis-tick-value");
          return tU.isValidElement(UU) ? tU.cloneElement(UU, JU(JU({}, RU), {}, {
            className: pU
          })) : EU()(UU) ? UU(JU(JU({}, RU), {}, {
            className: pU
          })) : tU.createElement(GU.b, mU({}, RU, {
            className: "recharts-cartesian-axis-tick-value"
          }), gU)
        }
      }], (pU = [{
        key: "shouldComponentUpdate",
        value: function(UU, RU) {
          var gU = UU.viewBox,
            tU = wU(UU, eU),
            pU = this.props,
            EU = pU.viewBox,
            PU = wU(pU, WU);
          return !(0, KU.c)(gU, EU) || !(0, KU.c)(tU, PU) || !(0, KU.c)(RU, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var UU = this.layerReference;
          if (UU) {
            var RU = UU.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            RU && this.setState({
              fontSize: window.getComputedStyle(RU).fontSize,
              letterSpacing: window.getComputedStyle(RU).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(UU) {
          var RU, gU, tU, pU, EU, PU, TU = this.props,
            qU = TU.x,
            KU = TU.y,
            cU = TU.width,
            GU = TU.height,
            jU = TU.orientation,
            CU = TU.tickSize,
            hU = TU.mirror,
            QU = TU.tickMargin,
            eU = hU ? -1 : 1,
            WU = UU.tickSize || CU,
            fU = (0, uU.v)(UU.tickCoord) ? UU.tickCoord : UU.coordinate;
          switch (jU) {
            case "top":
              RU = gU = UU.coordinate, PU = (tU = (pU = KU + +!hU * GU) - eU * WU) - eU * QU, EU = fU;
              break;
            case "left":
              tU = pU = UU.coordinate, EU = (RU = (gU = qU + +!hU * cU) - eU * WU) - eU * QU, PU = fU;
              break;
            case "right":
              tU = pU = UU.coordinate, EU = (RU = (gU = qU + +hU * cU) + eU * WU) + eU * QU, PU = fU;
              break;
            default:
              RU = gU = UU.coordinate, PU = (tU = (pU = KU + +hU * GU) + eU * WU) + eU * QU, EU = fU
          }
          return {
            line: {
              x1: RU,
              y1: tU,
              x2: gU,
              y2: pU
            },
            HG: {
              x: EU,
              y: PU
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var UU, RU = this.props,
            gU = RU.orientation,
            tU = RU.mirror;
          switch (gU) {
            case "left":
              UU = tU ? "start" : "end";
              break;
            case "right":
              UU = tU ? "end" : "start";
              break;
            default:
              UU = "middle"
          }
          return UU
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var UU = this.props,
            RU = UU.orientation,
            gU = UU.mirror,
            tU = "end";
          switch (RU) {
            case "left":
            case "right":
              tU = "middle";
              break;
            case "top":
              tU = gU ? "start" : "end";
              break;
            default:
              tU = gU ? "end" : "start"
          }
          return tU
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var UU = this.props,
            RU = UU.x,
            gU = UU.y,
            pU = UU.width,
            EU = UU.height,
            PU = UU.orientation,
            KU = UU.mirror,
            cU = UU.axisLine,
            GU = JU(JU(JU({}, (0, hU.b)(this.props, !1)), (0, hU.b)(cU, !1)), {}, {
              fill: "none"
            });
          if ("top" === PU || "bottom" === PU) {
            var jU = +("top" === PU && !KU || "bottom" === PU && KU);
            GU = JU(JU({}, GU), {}, {
              x1: RU,
              y1: gU + jU * EU,
              x2: RU + pU,
              y2: gU + jU * EU
            })
          } else {
            var uU = +("left" === PU && !KU || "right" === PU && KU);
            GU = JU(JU({}, GU), {}, {
              x1: RU + uU * pU,
              y1: gU,
              x2: RU + uU * pU,
              y2: gU + EU
            })
          }
          return tU.createElement("line", mU({}, GU, {
            className: (0, qU.e)("recharts-cartesian-axis-line", TU()(cU, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(UU, gU, pU) {
          var PU = this,
            KU = this.props,
            GU = KU.tickLine,
            jU = KU.stroke,
            uU = KU.HG,
            eU = KU.tickFormatter,
            WU = KU.unit,
            fU = (0, QU.d)(JU(JU({}, this.props), {}, {
              ticks: UU
            }), gU, pU),
            xU = this.getTickTextAnchor(),
            IU = this.getTickVerticalAnchor(),
            wU = (0, hU.b)(this.props, !1),
            nU = (0, hU.b)(uU, !1),
            bU = JU(JU({}, wU), {}, {
              fill: "none"
            }, (0, hU.b)(GU, !1)),
            oU = fU.map((function(UU, gU) {
              var pU = PU.getTickLineCoord(UU),
                KU = pU.line,
                hU = pU.HG,
                QU = JU(JU(JU(JU({
                  textAnchor: xU,
                  verticalAnchor: IU
                }, wU), {}, {
                  stroke: "none",
                  fill: jU
                }, nU), hU), {}, {
                  index: gU,
                  payload: UU,
                  visibleTicksCount: fU.length,
                  tickFormatter: eU
                });
              return tU.createElement(cU.e, mU({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(UU.value, "-").concat(UU.coordinate, "-").concat(UU.tickCoord)
              }, (0, CU.p)(PU.props, UU, gU)), GU && tU.createElement("line", mU({}, bU, KU, {
                className: (0, qU.e)("recharts-cartesian-axis-tick-line", TU()(GU, "className"))
              })), uU && RU.renderTickItem(uU, QU, "".concat(EU()(eU) ? eU(UU.value, gU) : UU.value).concat(WU || "")))
            }));
          return tU.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, oU)
        }
      }, {
        key: "render",
        value: function() {
          var UU = this,
            RU = this.props,
            gU = RU.axisLine,
            pU = RU.width,
            PU = RU.height,
            TU = RU.ticksGenerator,
            KU = RU.className;
          if (RU.hide) return null;
          var GU = this.props,
            uU = GU.ticks,
            CU = wU(GU, fU),
            hU = uU;
          return EU()(TU) && (hU = uU && uU.length > 0 ? TU(this.props) : TU(CU)), pU <= 0 || PU <= 0 || !hU || !hU.length ? null : tU.createElement(cU.e, {
            className: (0, qU.e)("recharts-cartesian-axis", KU),
            ref: function(RU) {
              UU.layerReference = RU
            }
          }, gU && this.renderAxisLine(), this.renderTicks(hU, this.state.fontSize, this.state.letterSpacing), jU.c.renderCallByParent(this.props))
        }
      }]) && nU(gU.prototype, pU), PU && nU(gU, PU), Object.defineProperty(gU, "prototype", {
        writable: !1
      }), gU;
      var gU, pU, PU
    }(tU.Component);
    YU(VU, "displayName", "CartesianAxis"), YU(VU, "defaultProps", {
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
      HG: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6087: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => YU
    });
    var tU = gU(56),
      pU = gU(4921),
      EU = gU.n(pU),
      PU = gU(5093),
      TU = gU(4827),
      qU = gU(5097),
      KU = gU(5817),
      cU = gU(6077),
      GU = gU(6070),
      jU = gU(6017),
      uU = ["x1", "y1", "x2", "y2", "key"],
      CU = ["offset"];

    function hU(UU) {
      return hU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, hU(UU)
    }

    function QU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function eU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? QU(Object(gU), !0).forEach((function(RU) {
          WU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : QU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function WU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != hU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != hU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == hU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function fU() {
      return fU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, fU.apply(this, arguments)
    }

    function xU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }
    var mU = function(UU) {
      var RU = UU.fill;
      if (!RU || "none" === RU) return null;
      var gU = UU.fillOpacity,
        pU = UU.x,
        EU = UU.y,
        PU = UU.width,
        TU = UU.height,
        qU = UU.ry;
      return tU.createElement("rect", {
        x: pU,
        y: EU,
        ry: qU,
        width: PU,
        height: TU,
        stroke: "none",
        fill: RU,
        fillOpacity: gU,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function IU(UU, RU) {
      var gU;
      if (tU.isValidElement(UU)) gU = tU.cloneElement(UU, RU);
      else if (EU()(UU)) gU = UU(RU);
      else {
        var pU = RU.x1,
          PU = RU.y1,
          TU = RU.x2,
          KU = RU.y2,
          cU = RU.key,
          GU = xU(RU, uU),
          jU = (0, qU.b)(GU, !1),
          hU = (jU.offset, xU(jU, CU));
        gU = tU.createElement("line", fU({}, hU, {
          x1: pU,
          y1: PU,
          x2: TU,
          y2: KU,
          fill: "none",
          key: cU
        }))
      }
      return gU
    }

    function JU(UU) {
      var RU = UU.x,
        gU = UU.width,
        pU = UU.horizontal,
        EU = void 0 === pU || pU,
        PU = UU.horizontalPoints;
      if (!EU || !PU || !PU.length) return null;
      var TU = PU.map((function(tU, pU) {
        var PU = eU(eU({}, UU), {}, {
          x1: RU,
          y1: tU,
          x2: RU + gU,
          y2: tU,
          key: "line-".concat(pU),
          index: pU
        });
        return IU(EU, PU)
      }));
      return tU.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, TU)
    }

    function wU(UU) {
      var RU = UU.y,
        gU = UU.height,
        pU = UU.vertical,
        EU = void 0 === pU || pU,
        PU = UU.verticalPoints;
      if (!EU || !PU || !PU.length) return null;
      var TU = PU.map((function(tU, pU) {
        var PU = eU(eU({}, UU), {}, {
          x1: tU,
          y1: RU,
          x2: tU,
          y2: RU + gU,
          key: "line-".concat(pU),
          index: pU
        });
        return IU(EU, PU)
      }));
      return tU.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, TU)
    }

    function nU(UU) {
      var RU = UU.horizontalFill,
        gU = UU.fillOpacity,
        pU = UU.x,
        EU = UU.y,
        PU = UU.width,
        TU = UU.height,
        qU = UU.horizontalPoints,
        KU = UU.horizontal;
      if (!(void 0 === KU || KU) || !RU || !RU.length) return null;
      var cU = qU.map((function(UU) {
        return Math.round(UU + EU - EU)
      })).sort((function(UU, RU) {
        return UU - RU
      }));
      EU !== cU[0] && cU.unshift(0);
      var GU = cU.map((function(UU, qU) {
        var KU = !cU[qU + 1] ? EU + TU - UU : cU[qU + 1] - UU;
        if (KU <= 0) return null;
        var GU = qU % RU.length;
        return tU.createElement("rect", {
          key: "react-".concat(qU),
          y: UU,
          x: pU,
          height: KU,
          width: PU,
          stroke: "none",
          fill: RU[GU],
          fillOpacity: gU,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return tU.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, GU)
    }

    function bU(UU) {
      var RU = UU.vertical,
        gU = void 0 === RU || RU,
        pU = UU.verticalFill,
        EU = UU.fillOpacity,
        PU = UU.x,
        TU = UU.y,
        qU = UU.width,
        KU = UU.height,
        cU = UU.verticalPoints;
      if (!gU || !pU || !pU.length) return null;
      var GU = cU.map((function(UU) {
        return Math.round(UU + PU - PU)
      })).sort((function(UU, RU) {
        return UU - RU
      }));
      PU !== GU[0] && GU.unshift(0);
      var jU = GU.map((function(UU, RU) {
        var gU = !GU[RU + 1] ? PU + qU - UU : GU[RU + 1] - UU;
        if (gU <= 0) return null;
        var cU = RU % pU.length;
        return tU.createElement("rect", {
          key: "react-".concat(RU),
          x: UU,
          y: TU,
          width: gU,
          height: KU,
          stroke: "none",
          fill: pU[cU],
          fillOpacity: EU,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return tU.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, jU)
    }
    var oU = function(UU, RU) {
        var gU = UU.xAxis,
          tU = UU.width,
          pU = UU.height,
          EU = UU.offset;
        return (0, KU.y)((0, cU.d)(eU(eU(eU({}, GU.d.defaultProps), gU), {}, {
          ticks: (0, KU.X)(gU, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: tU,
            height: pU
          }
        })), EU.left, EU.left + EU.width, RU)
      },
      ZU = function(UU, RU) {
        var gU = UU.yAxis,
          tU = UU.width,
          pU = UU.height,
          EU = UU.offset;
        return (0, KU.y)((0, cU.d)(eU(eU(eU({}, GU.d.defaultProps), gU), {}, {
          ticks: (0, KU.X)(gU, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: tU,
            height: pU
          }
        })), EU.top, EU.top + EU.height, RU)
      },
      aU = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function YU(UU) {
      var RU, gU, pU, qU, KU, cU, GU = (0, jU.k)(),
        uU = (0, jU.j)(),
        CU = (0, jU.p)(),
        QU = eU(eU({}, UU), {}, {
          stroke: null !== (RU = UU.stroke) && void 0 !== RU ? RU : aU.stroke,
          fill: null !== (gU = UU.fill) && void 0 !== gU ? gU : aU.fill,
          horizontal: null !== (pU = UU.horizontal) && void 0 !== pU ? pU : aU.horizontal,
          horizontalFill: null !== (qU = UU.horizontalFill) && void 0 !== qU ? qU : aU.horizontalFill,
          vertical: null !== (KU = UU.vertical) && void 0 !== KU ? KU : aU.vertical,
          verticalFill: null !== (cU = UU.verticalFill) && void 0 !== cU ? cU : aU.verticalFill,
          x: (0, TU.v)(UU.x) ? UU.x : CU.left,
          y: (0, TU.v)(UU.y) ? UU.y : CU.top,
          width: (0, TU.v)(UU.width) ? UU.width : CU.width,
          height: (0, TU.v)(UU.height) ? UU.height : CU.height
        }),
        WU = QU.x,
        xU = QU.y,
        IU = QU.width,
        YU = QU.height,
        BU = QU.syncWithTicks,
        VU = QU.horizontalValues,
        rU = QU.verticalValues,
        XU = (0, jU.g)(),
        vU = (0, jU.w)();
      if (!(0, TU.v)(IU) || IU <= 0 || !(0, TU.v)(YU) || YU <= 0 || !(0, TU.v)(WU) || WU !== +WU || !(0, TU.v)(xU) || xU !== +xU) return null;
      var dU = QU.verticalCoordinatesGenerator || oU,
        HU = QU.horizontalCoordinatesGenerator || ZU,
        SU = QU.horizontalPoints,
        sU = QU.verticalPoints;
      if ((!SU || !SU.length) && EU()(HU)) {
        var yU = VU && VU.length,
          kU = HU({
            yAxis: vU ? eU(eU({}, vU), {}, {
              ticks: yU ? VU : vU.ticks
            }) : void 0,
            width: GU,
            height: uU,
            offset: CU
          }, !!yU || BU);
        (0, PU.e)(Array.isArray(kU), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(hU(kU), "]")), Array.isArray(kU) && (SU = kU)
      }
      if ((!sU || !sU.length) && EU()(dU)) {
        var FU = rU && rU.length,
          iU = dU({
            xAxis: XU ? eU(eU({}, XU), {}, {
              ticks: FU ? rU : XU.ticks
            }) : void 0,
            width: GU,
            height: uU,
            offset: CU
          }, !!FU || BU);
        (0, PU.e)(Array.isArray(iU), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(hU(iU), "]")), Array.isArray(iU) && (sU = iU)
      }
      return tU.createElement("g", {
        className: "recharts-cartesian-grid"
      }, tU.createElement(mU, {
        fill: QU.fill,
        fillOpacity: QU.fillOpacity,
        x: QU.x,
        y: QU.y,
        width: QU.width,
        height: QU.height,
        ry: QU.ry
      }), tU.createElement(JU, fU({}, QU, {
        offset: CU,
        horizontalPoints: SU,
        xAxis: XU,
        yAxis: vU
      })), tU.createElement(wU, fU({}, QU, {
        offset: CU,
        verticalPoints: sU,
        xAxis: XU,
        yAxis: vU
      })), tU.createElement(nU, fU({}, QU, {
        horizontalPoints: SU
      })), tU.createElement(bU, fU({}, QU, {
        verticalPoints: sU
      })))
    }
    YU.displayName = "CartesianGrid"
  },
  5885: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => xU
    });
    var tU = gU(56),
      pU = gU(5622),
      EU = gU(5633),
      PU = gU(5097),
      TU = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function qU(UU) {
      return qU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, qU(UU)
    }

    function KU() {
      return KU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, KU.apply(this, arguments)
    }

    function cU(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        var gU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != gU) {
          var tU, pU, EU, PU, TU = [],
            qU = !0,
            KU = !1;
          try {
            if (EU = (gU = gU.call(UU)).next, 0 === RU) {
              if (Object(gU) !== gU) return;
              qU = !1
            } else
              for (; !(qU = (tU = EU.call(gU)).done) && (TU.push(tU.value), TU.length !== RU); qU = !0);
          } catch (UU) {
            KU = !0, pU = UU
          } finally {
            try {
              if (!qU && null != gU.return && (PU = gU.return(), Object(PU) !== PU)) return
            } finally {
              if (KU) throw pU
            }
          }
          return TU
        }
      }(UU, RU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return GU(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return GU(UU, RU)
      }(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function GU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function jU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function uU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, fU(tU.key), tU)
      }
    }

    function CU(UU, RU, gU) {
      return RU = QU(RU),
        function(UU, RU) {
          if (RU && ("object" === qU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, hU() ? Reflect.construct(RU, gU || [], QU(UU).constructor) : RU.apply(UU, gU))
    }

    function hU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (hU = function() {
        return !!UU
      })()
    }

    function QU(UU) {
      return QU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, QU(UU)
    }

    function eU(UU, RU) {
      return eU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, eU(UU, RU)
    }

    function WU(UU, RU, gU) {
      return (RU = fU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function fU(UU) {
      var RU = function(UU, RU) {
        if ("object" != qU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != qU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == qU(RU) ? RU : RU + ""
    }
    var xU = function(UU) {
      function RU() {
        return function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, RU), CU(this, RU, arguments)
      }
      return function(UU, RU) {
        if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(RU && RU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), RU && eU(UU, RU)
      }(RU, UU), gU = RU, (qU = [{
        key: "render",
        value: function() {
          var UU = this.props,
            RU = UU.offset,
            gU = UU.layout,
            qU = UU.width,
            GU = UU.dataKey,
            uU = UU.data,
            CU = UU.dataPointFormatter,
            hU = UU.xAxis,
            QU = UU.yAxis,
            eU = jU(UU, TU),
            WU = (0, PU.b)(eU, !1);
          "x" === this.props.direction && "number" !== hU.type && (0, pU.b)(!1);
          var fU = uU.map((function(UU) {
            var pU = CU(UU, GU),
              PU = pU.x,
              TU = pU.y,
              jU = pU.value,
              uU = pU.errorVal;
            if (!uU) return null;
            var eU, fU, xU = [];
            if (Array.isArray(uU)) {
              var mU = cU(uU, 2);
              eU = mU[0], fU = mU[1]
            } else eU = fU = uU;
            if ("vertical" === gU) {
              var IU = hU.scale,
                JU = TU + RU,
                wU = JU + qU,
                nU = JU - qU,
                bU = IU(jU - eU),
                oU = IU(jU + fU);
              xU.push({
                x1: oU,
                y1: wU,
                x2: oU,
                y2: nU
              }), xU.push({
                x1: bU,
                y1: JU,
                x2: oU,
                y2: JU
              }), xU.push({
                x1: bU,
                y1: wU,
                x2: bU,
                y2: nU
              })
            } else if ("horizontal" === gU) {
              var ZU = QU.scale,
                aU = PU + RU,
                YU = aU - qU,
                BU = aU + qU,
                VU = ZU(jU - eU),
                rU = ZU(jU + fU);
              xU.push({
                x1: YU,
                y1: rU,
                x2: BU,
                y2: rU
              }), xU.push({
                x1: aU,
                y1: VU,
                x2: aU,
                y2: rU
              }), xU.push({
                x1: YU,
                y1: VU,
                x2: BU,
                y2: VU
              })
            }
            return tU.createElement(EU.e, KU({
              className: "recharts-errorBar",
              key: "bar-".concat(xU.map((function(UU) {
                return "".concat(UU.x1, "-").concat(UU.x2, "-").concat(UU.y1, "-").concat(UU.y2)
              })))
            }, WU), xU.map((function(UU) {
              return tU.createElement("line", KU({}, UU, {
                key: "line-".concat(UU.x1, "-").concat(UU.x2, "-").concat(UU.y1, "-").concat(UU.y2)
              }))
            })))
          }));
          return tU.createElement(EU.e, {
            className: "recharts-errorBars"
          }, fU)
        }
      }]) && uU(gU.prototype, qU), GU && uU(gU, GU), Object.defineProperty(gU, "prototype", {
        writable: !1
      }), gU;
      var gU, qU, GU
    }(tU.Component);
    WU(xU, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), WU(xU, "displayName", "ErrorBar")
  },
  6061: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => HU
    });
    var tU = gU(56),
      pU = gU(5799),
      EU = gU(4921),
      PU = gU.n(EU),
      TU = gU(5087),
      qU = gU.n(TU),
      KU = gU(5874),
      cU = gU.n(KU),
      GU = gU(4733),
      jU = gU(6049),
      uU = gU(5791),
      CU = gU(5633),
      hU = gU(5962),
      QU = gU(5885),
      eU = gU(4827),
      WU = gU(5097),
      fU = gU(5647),
      xU = gU(5817),
      mU = ["type", "layout", "connectNulls", "ref"],
      IU = ["key"];

    function JU(UU) {
      return JU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, JU(UU)
    }

    function wU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function nU() {
      return nU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, nU.apply(this, arguments)
    }

    function bU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function oU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? bU(Object(gU), !0).forEach((function(RU) {
          vU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : bU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function ZU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return aU(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return aU(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return aU(UU, RU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function YU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, dU(tU.key), tU)
      }
    }

    function BU(UU, RU, gU) {
      return RU = rU(RU),
        function(UU, RU) {
          if (RU && ("object" === JU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, VU() ? Reflect.construct(RU, gU || [], rU(UU).constructor) : RU.apply(UU, gU))
    }

    function VU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (VU = function() {
        return !!UU
      })()
    }

    function rU(UU) {
      return rU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, rU(UU)
    }

    function XU(UU, RU) {
      return XU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, XU(UU, RU)
    }

    function vU(UU, RU, gU) {
      return (RU = dU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function dU(UU) {
      var RU = function(UU, RU) {
        if ("object" != JU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != JU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == JU(RU) ? RU : RU + ""
    }
    var HU = function(UU) {
      function RU() {
        var UU;
        ! function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, RU);
        for (var gU = arguments.length, tU = new Array(gU), pU = 0; pU < gU; pU++) tU[pU] = arguments[pU];
        return vU(UU = BU(this, RU, [].concat(tU)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), vU(UU, "generateSimpleStrokeDasharray", (function(UU, RU) {
          return "".concat(RU, "px ").concat(UU - RU, "px")
        })), vU(UU, "getStrokeDasharray", (function(gU, tU, pU) {
          var EU = pU.reduce((function(UU, RU) {
            return UU + RU
          }));
          if (!EU) return UU.generateSimpleStrokeDasharray(tU, gU);
          for (var PU = Math.floor(gU / EU), TU = gU % EU, qU = tU - gU, KU = [], cU = 0, GU = 0; cU < pU.length; GU += pU[cU], ++cU)
            if (GU + pU[cU] > TU) {
              KU = [].concat(ZU(pU.slice(0, cU)), [TU - GU]);
              break
            } var jU = KU.length % 2 === 0 ? [0, qU] : [qU];
          return [].concat(ZU(RU.repeat(pU, PU)), ZU(KU), jU).map((function(UU) {
            return "".concat(UU, "px")
          })).join(", ")
        })), vU(UU, "id", (0, eU.C)("recharts-line-")), vU(UU, "pathRef", (function(RU) {
          UU.mainCurve = RU
        })), vU(UU, "handleAnimationEnd", (function() {
          UU.setState({
            isAnimationFinished: !0
          }), UU.props.onAnimationEnd && UU.props.onAnimationEnd()
        })), vU(UU, "handleAnimationStart", (function() {
          UU.setState({
            isAnimationFinished: !1
          }), UU.props.onAnimationStart && UU.props.onAnimationStart()
        })), UU
      }
      return function(UU, RU) {
        if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(RU && RU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), RU && XU(UU, RU)
      }(RU, UU), gU = RU, EU = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var UU = this.getTotalLength();
            this.setState({
              totalLength: UU
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var UU = this.getTotalLength();
            UU !== this.state.totalLength && this.setState({
              totalLength: UU
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var UU = this.mainCurve;
          try {
            return UU && UU.getTotalLength && UU.getTotalLength() || 0
          } catch (RU) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(UU, RU) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var gU = this.props,
            pU = gU.points,
            EU = gU.xAxis,
            PU = gU.yAxis,
            TU = gU.layout,
            qU = gU.children,
            KU = (0, WU.f)(qU, QU.c);
          if (!KU) return null;
          var cU = function(UU, RU) {
              return {
                x: UU.x,
                y: UU.y,
                value: UU.value,
                errorVal: (0, xU.cb)(UU.payload, RU)
              }
            },
            GU = {
              clipPath: UU ? "url(#clipPath-".concat(RU, ")") : null
            };
          return tU.createElement(CU.e, GU, KU.map((function(UU) {
            return tU.cloneElement(UU, {
              key: "bar-".concat(UU.props.dataKey),
              data: pU,
              xAxis: EU,
              yAxis: PU,
              layout: TU,
              dataPointFormatter: cU
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(UU, gU, pU) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var EU = this.props,
            PU = EU.dot,
            TU = EU.points,
            qU = EU.dataKey,
            KU = (0, WU.b)(this.props, !1),
            cU = (0, WU.b)(PU, !0),
            GU = TU.map((function(UU, gU) {
              var tU = oU(oU(oU({
                key: "dot-".concat(gU),
                r: 3
              }, KU), cU), {}, {
                index: gU,
                cx: UU.x,
                cy: UU.y,
                value: UU.value,
                dataKey: qU,
                payload: UU.payload,
                points: TU
              });
              return RU.renderDotItem(PU, tU)
            })),
            jU = {
              clipPath: UU ? "url(#clipPath-".concat(gU ? "" : "dots-").concat(pU, ")") : null
            };
          return tU.createElement(CU.e, nU({
            className: "recharts-line-dots",
            key: "dots"
          }, jU), GU)
        }
      }, {
        key: "renderCurveStatically",
        value: function(UU, RU, gU, pU) {
          var EU = this.props,
            PU = EU.type,
            TU = EU.layout,
            qU = EU.connectNulls,
            KU = (EU.ref, wU(EU, mU)),
            cU = oU(oU(oU({}, (0, WU.b)(KU, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: RU ? "url(#clipPath-".concat(gU, ")") : null,
              points: UU
            }, pU), {}, {
              type: PU,
              layout: TU,
              connectNulls: qU
            });
          return tU.createElement(jU.b, nU({}, cU, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(UU, RU) {
          var gU = this,
            EU = this.props,
            PU = EU.points,
            TU = EU.strokeDasharray,
            qU = EU.isAnimationActive,
            KU = EU.animationBegin,
            cU = EU.animationDuration,
            GU = EU.animationEasing,
            jU = EU.animationId,
            uU = EU.animateNewValues,
            CU = EU.width,
            hU = EU.height,
            QU = this.state,
            WU = QU.prevPoints,
            fU = QU.totalLength;
          return tU.createElement(pU.b, {
            pu: KU,
            duration: cU,
            isActive: qU,
            easing: GU,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(jU),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(tU) {
            var pU = tU.t;
            if (WU) {
              var EU = WU.length / PU.length,
                qU = PU.map((function(UU, RU) {
                  var gU = Math.floor(RU * EU);
                  if (WU[gU]) {
                    var tU = WU[gU],
                      PU = (0, eU.p)(tU.x, UU.x),
                      TU = (0, eU.p)(tU.y, UU.y);
                    return oU(oU({}, UU), {}, {
                      x: PU(pU),
                      y: TU(pU)
                    })
                  }
                  if (uU) {
                    var qU = (0, eU.p)(2 * CU, UU.x),
                      KU = (0, eU.p)(hU / 2, UU.y);
                    return oU(oU({}, UU), {}, {
                      x: qU(pU),
                      y: KU(pU)
                    })
                  }
                  return oU(oU({}, UU), {}, {
                    x: UU.x,
                    y: UU.y
                  })
                }));
              return gU.renderCurveStatically(qU, UU, RU)
            }
            var KU, cU = (0, eU.p)(0, fU)(pU);
            if (TU) {
              var GU = "".concat(TU).split(/[,\s]+/gim).map((function(UU) {
                return parseFloat(UU)
              }));
              KU = gU.getStrokeDasharray(cU, fU, GU)
            } else KU = gU.generateSimpleStrokeDasharray(fU, cU);
            return gU.renderCurveStatically(PU, UU, RU, {
              strokeDasharray: KU
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(UU, RU) {
          var gU = this.props,
            tU = gU.points,
            pU = gU.isAnimationActive,
            EU = this.state,
            PU = EU.prevPoints,
            TU = EU.totalLength;
          return pU && tU && tU.length && (!PU && TU > 0 || !cU()(PU, tU)) ? this.renderCurveWithAnimation(UU, RU) : this.renderCurveStatically(tU, UU, RU)
        }
      }, {
        key: "render",
        value: function() {
          var UU, RU = this.props,
            gU = RU.hide,
            pU = RU.dot,
            EU = RU.points,
            PU = RU.className,
            TU = RU.xAxis,
            KU = RU.yAxis,
            cU = RU.top,
            jU = RU.left,
            uU = RU.width,
            QU = RU.height,
            eU = RU.isAnimationActive,
            fU = RU.id;
          if (gU || !EU || !EU.length) return null;
          var xU = this.state.isAnimationFinished,
            mU = 1 === EU.length,
            IU = (0, GU.e)("recharts-line", PU),
            JU = TU && TU.allowDataOverflow,
            wU = KU && KU.allowDataOverflow,
            nU = JU || wU,
            bU = qU()(fU) ? this.id : fU,
            oU = null !== (UU = (0, WU.b)(pU, !1)) && void 0 !== UU ? UU : {
              r: 3,
              strokeWidth: 2
            },
            ZU = oU.r,
            aU = void 0 === ZU ? 3 : ZU,
            YU = oU.strokeWidth,
            BU = void 0 === YU ? 2 : YU,
            VU = ((0, WU.m)(pU) ? pU : {}).clipDot,
            rU = void 0 === VU || VU,
            XU = 2 * aU + BU;
          return tU.createElement(CU.e, {
            className: IU
          }, JU || wU ? tU.createElement("defs", null, tU.createElement("clipPath", {
            id: "clipPath-".concat(bU)
          }, tU.createElement("rect", {
            x: JU ? jU : jU - uU / 2,
            y: wU ? cU : cU - QU / 2,
            width: JU ? uU : 2 * uU,
            height: wU ? QU : 2 * QU
          })), !rU && tU.createElement("clipPath", {
            id: "clipPath-dots-".concat(bU)
          }, tU.createElement("rect", {
            x: jU - XU / 2,
            y: cU - XU / 2,
            width: uU + XU,
            height: QU + XU
          }))) : null, !mU && this.renderCurve(nU, bU), this.renderErrorBar(nU, bU), (mU || pU) && this.renderDots(nU, rU, bU), (!eU || xU) && hU.b.renderCallByParent(this.props, EU))
        }
      }], TU = [{
        key: "getDerivedStateFromProps",
        value: function(UU, RU) {
          return UU.animationId !== RU.prevAnimationId ? {
            prevAnimationId: UU.animationId,
            curPoints: UU.points,
            prevPoints: RU.curPoints
          } : UU.points !== RU.curPoints ? {
            curPoints: UU.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(UU, RU) {
          for (var gU = UU.length % 2 !== 0 ? [].concat(ZU(UU), [0]) : UU, tU = [], pU = 0; pU < RU; ++pU) tU = [].concat(ZU(tU), ZU(gU));
          return tU
        }
      }, {
        key: "renderDotItem",
        value: function(UU, RU) {
          var gU;
          if (tU.isValidElement(UU)) gU = tU.cloneElement(UU, RU);
          else if (PU()(UU)) gU = UU(RU);
          else {
            var pU = RU.key,
              EU = wU(RU, IU),
              TU = (0, GU.e)("recharts-line-dot", "boolean" !== typeof UU ? UU.className : "");
            gU = tU.createElement(uU.c, nU({
              key: pU
            }, EU, {
              className: TU
            }))
          }
          return gU
        }
      }], EU && YU(gU.prototype, EU), TU && YU(gU, TU), Object.defineProperty(gU, "prototype", {
        writable: !1
      }), gU;
      var gU, EU, TU
    }(tU.PureComponent);
    vU(HU, "displayName", "Line"), vU(HU, "defaultProps", {
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
      isAnimationActive: !fU.b.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), vU(HU, "getComposedData", (function(UU) {
      var RU = UU.props,
        gU = UU.xAxis,
        tU = UU.yAxis,
        pU = UU.xAxisTicks,
        EU = UU.yAxisTicks,
        PU = UU.dataKey,
        TU = UU.bandSize,
        KU = UU.displayedData,
        cU = UU.offset,
        GU = RU.layout;
      return oU({
        points: KU.map((function(UU, RU) {
          var KU = (0, xU.cb)(UU, PU);
          return "horizontal" === GU ? {
            x: (0, xU.w)({
              axis: gU,
              ticks: pU,
              bandSize: TU,
              entry: UU,
              index: RU
            }),
            y: qU()(KU) ? null : tU.scale(KU),
            value: KU,
            payload: UU
          } : {
            x: qU()(KU) ? null : gU.scale(KU),
            y: (0, xU.w)({
              axis: tU,
              ticks: EU,
              bandSize: TU,
              entry: UU,
              index: RU
            }),
            value: KU,
            payload: UU
          }
        })),
        layout: GU
      }, cU)
    }))
  },
  6005: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => BU
    });
    var tU = gU(56),
      pU = gU(4921),
      EU = gU.n(pU),
      PU = gU(6008),
      TU = gU.n(PU),
      qU = gU(4733),
      KU = gU(5633),
      cU = gU(5899),
      GU = gU(5909),
      jU = gU(4827),
      uU = gU(5916),
      CU = gU(5093),
      hU = gU(5097),
      QU = gU(6017);

    function eU(UU) {
      return eU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, eU(UU)
    }

    function WU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, bU(tU.key), tU)
      }
    }

    function fU(UU, RU, gU) {
      return RU = mU(RU),
        function(UU, RU) {
          if (RU && ("object" === eU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, xU() ? Reflect.construct(RU, gU || [], mU(UU).constructor) : RU.apply(UU, gU))
    }

    function xU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (xU = function() {
        return !!UU
      })()
    }

    function mU(UU) {
      return mU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, mU(UU)
    }

    function IU(UU, RU) {
      return IU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, IU(UU, RU)
    }

    function JU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function wU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? JU(Object(gU), !0).forEach((function(RU) {
          nU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : JU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function nU(UU, RU, gU) {
      return (RU = bU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function bU(UU) {
      var RU = function(UU, RU) {
        if ("object" != eU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != eU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == eU(RU) ? RU : RU + ""
    }

    function oU(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        var gU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != gU) {
          var tU, pU, EU, PU, TU = [],
            qU = !0,
            KU = !1;
          try {
            if (EU = (gU = gU.call(UU)).next, 0 === RU) {
              if (Object(gU) !== gU) return;
              qU = !1
            } else
              for (; !(qU = (tU = EU.call(gU)).done) && (TU.push(tU.value), TU.length !== RU); qU = !0);
          } catch (UU) {
            KU = !0, pU = UU
          } finally {
            try {
              if (!qU && null != gU.return && (PU = gU.return(), Object(PU) !== PU)) return
            } finally {
              if (KU) throw pU
            }
          }
          return TU
        }
      }(UU, RU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return ZU(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return ZU(UU, RU)
      }(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ZU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function aU() {
      return aU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, aU.apply(this, arguments)
    }

    function YU(UU) {
      var RU = UU.x,
        gU = UU.y,
        pU = UU.segment,
        PU = UU.xAxisId,
        eU = UU.yAxisId,
        WU = UU.shape,
        fU = UU.className,
        xU = UU.alwaysShow,
        mU = (0, QU.o)(),
        IU = (0, QU.r)(PU),
        JU = (0, QU.v)(eU),
        nU = (0, QU.q)();
      if (!mU || !nU) return null;
      (0, CU.e)(void 0 === xU, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var bU = function(UU, RU, gU, tU, pU, EU, PU, qU, KU) {
        var cU = pU.x,
          jU = pU.y,
          uU = pU.width,
          CU = pU.height;
        if (gU) {
          var hU = KU.y,
            QU = UU.y.apply(hU, {
              position: EU
            });
          if ((0, GU.e)(KU, "discard") && !UU.y.isInRange(QU)) return null;
          var eU = [{
            x: cU + uU,
            y: QU
          }, {
            x: cU,
            y: QU
          }];
          return "left" === qU ? eU.reverse() : eU
        }
        if (RU) {
          var WU = KU.x,
            fU = UU.x.apply(WU, {
              position: EU
            });
          if ((0, GU.e)(KU, "discard") && !UU.x.isInRange(fU)) return null;
          var xU = [{
            x: fU,
            y: jU + CU
          }, {
            x: fU,
            y: jU
          }];
          return "top" === PU ? xU.reverse() : xU
        }
        if (tU) {
          var mU = KU.segment.map((function(RU) {
            return UU.apply(RU, {
              position: EU
            })
          }));
          return (0, GU.e)(KU, "discard") && TU()(mU, (function(RU) {
            return !UU.isInRange(RU)
          })) ? null : mU
        }
        return null
      }((0, uU.c)({
        x: IU.scale,
        y: JU.scale
      }), (0, jU.r)(RU), (0, jU.r)(gU), pU && 2 === pU.length, nU, UU.position, IU.orientation, JU.orientation, UU);
      if (!bU) return null;
      var ZU = oU(bU, 2),
        YU = ZU[0],
        BU = YU.x,
        VU = YU.y,
        rU = ZU[1],
        XU = rU.x,
        vU = rU.y,
        dU = wU(wU({
          clipPath: (0, GU.e)(UU, "hidden") ? "url(#".concat(mU, ")") : void 0
        }, (0, hU.b)(UU, !0)), {}, {
          x1: BU,
          y1: VU,
          x2: XU,
          y2: vU
        });
      return tU.createElement(KU.e, {
        className: (0, qU.e)("recharts-reference-line", fU)
      }, function(UU, RU) {
        return tU.isValidElement(UU) ? tU.cloneElement(UU, RU) : EU()(UU) ? UU(RU) : tU.createElement("line", aU({}, RU, {
          className: "recharts-reference-line-line"
        }))
      }(WU, dU), cU.c.renderCallByParent(UU, (0, uU.j)({
        x1: BU,
        y1: VU,
        x2: XU,
        y2: vU
      })))
    }
    var BU = function(UU) {
      function RU() {
        return function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, RU), fU(this, RU, arguments)
      }
      return function(UU, RU) {
        if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(RU && RU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), RU && IU(UU, RU)
      }(RU, UU), gU = RU, (pU = [{
        key: "render",
        value: function() {
          return tU.createElement(YU, this.props)
        }
      }]) && WU(gU.prototype, pU), EU && WU(gU, EU), Object.defineProperty(gU, "prototype", {
        writable: !1
      }), gU;
      var gU, pU, EU
    }(tU.Component);
    nU(BU, "displayName", "ReferenceLine"), nU(BU, "defaultProps", {
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
  6066: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => WU
    });
    var tU = gU(56),
      pU = gU(4733),
      EU = gU(6017),
      PU = gU(6070),
      TU = gU(5817);

    function qU(UU) {
      return qU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, qU(UU)
    }

    function KU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, hU(tU.key), tU)
      }
    }

    function cU(UU, RU, gU) {
      return RU = jU(RU),
        function(UU, RU) {
          if (RU && ("object" === qU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, GU() ? Reflect.construct(RU, gU || [], jU(UU).constructor) : RU.apply(UU, gU))
    }

    function GU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (GU = function() {
        return !!UU
      })()
    }

    function jU(UU) {
      return jU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, jU(UU)
    }

    function uU(UU, RU) {
      return uU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, uU(UU, RU)
    }

    function CU(UU, RU, gU) {
      return (RU = hU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function hU(UU) {
      var RU = function(UU, RU) {
        if ("object" != qU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != qU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == qU(RU) ? RU : RU + ""
    }

    function QU() {
      return QU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, QU.apply(this, arguments)
    }

    function eU(UU) {
      var RU = UU.xAxisId,
        gU = (0, EU.k)(),
        qU = (0, EU.j)(),
        KU = (0, EU.r)(RU);
      return null == KU ? null : tU.createElement(PU.d, QU({}, KU, {
        className: (0, pU.e)("recharts-".concat(KU.axisType, " ").concat(KU.axisType), KU.className),
        viewBox: {
          x: 0,
          y: 0,
          width: gU,
          height: qU
        },
        ticksGenerator: function(UU) {
          return (0, TU.X)(UU, !0)
        }
      }))
    }
    var WU = function(UU) {
      function RU() {
        return function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, RU), cU(this, RU, arguments)
      }
      return function(UU, RU) {
        if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(RU && RU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), RU && uU(UU, RU)
      }(RU, UU), gU = RU, (pU = [{
        key: "render",
        value: function() {
          return tU.createElement(eU, this.props)
        }
      }]) && KU(gU.prototype, pU), EU && KU(gU, EU), Object.defineProperty(gU, "prototype", {
        writable: !1
      }), gU;
      var gU, pU, EU
    }(tU.Component);
    CU(WU, "displayName", "XAxis"), CU(WU, "defaultProps", {
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
  6080: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => WU
    });
    var tU = gU(56),
      pU = gU(4733),
      EU = gU(6017),
      PU = gU(6070),
      TU = gU(5817);

    function qU(UU) {
      return qU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, qU(UU)
    }

    function KU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, hU(tU.key), tU)
      }
    }

    function cU(UU, RU, gU) {
      return RU = jU(RU),
        function(UU, RU) {
          if (RU && ("object" === qU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, GU() ? Reflect.construct(RU, gU || [], jU(UU).constructor) : RU.apply(UU, gU))
    }

    function GU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (GU = function() {
        return !!UU
      })()
    }

    function jU(UU) {
      return jU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, jU(UU)
    }

    function uU(UU, RU) {
      return uU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, uU(UU, RU)
    }

    function CU(UU, RU, gU) {
      return (RU = hU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function hU(UU) {
      var RU = function(UU, RU) {
        if ("object" != qU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != qU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == qU(RU) ? RU : RU + ""
    }

    function QU() {
      return QU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, QU.apply(this, arguments)
    }
    var eU = function(UU) {
        var RU = UU.yAxisId,
          gU = (0, EU.k)(),
          qU = (0, EU.j)(),
          KU = (0, EU.v)(RU);
        return null == KU ? null : tU.createElement(PU.d, QU({}, KU, {
          className: (0, pU.e)("recharts-".concat(KU.axisType, " ").concat(KU.axisType), KU.className),
          viewBox: {
            x: 0,
            y: 0,
            width: gU,
            height: qU
          },
          ticksGenerator: function(UU) {
            return (0, TU.X)(UU, !0)
          }
        }))
      },
      WU = function(UU) {
        function RU() {
          return function(UU, RU) {
            if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
          }(this, RU), cU(this, RU, arguments)
        }
        return function(UU, RU) {
          if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
          UU.prototype = Object.create(RU && RU.prototype, {
            constructor: {
              value: UU,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(UU, "prototype", {
            writable: !1
          }), RU && uU(UU, RU)
        }(RU, UU), gU = RU, (pU = [{
          key: "render",
          value: function() {
            return tU.createElement(eU, this.props)
          }
        }]) && KU(gU.prototype, pU), EU && KU(gU, EU), Object.defineProperty(gU, "prototype", {
          writable: !1
        }), gU;
        var gU, pU, EU
      }(tU.Component);
    CU(WU, "displayName", "YAxis"), CU(WU, "defaultProps", {
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
  6077: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => hU
    });
    var tU = gU(4921),
      pU = gU.n(tU),
      EU = gU(4827),
      PU = gU(5811),
      TU = gU(5647),
      qU = gU(5916);

    function KU(UU, RU, gU) {
      if (RU < 1) return [];
      if (1 === RU && void 0 === gU) return UU;
      for (var tU = [], pU = 0; pU < UU.length; pU += RU) {
        if (void 0 !== gU && !0 !== gU(UU[pU])) return;
        tU.push(UU[pU])
      }
      return tU
    }

    function cU(UU, RU, gU, tU, pU) {
      if (UU * RU < UU * tU || UU * RU > UU * pU) return !1;
      var EU = gU();
      return UU * (RU - UU * EU / 2 - tU) >= 0 && UU * (RU + UU * EU / 2 - pU) <= 0
    }

    function GU(UU) {
      return GU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, GU(UU)
    }

    function jU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function uU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? jU(Object(gU), !0).forEach((function(RU) {
          CU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : jU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function CU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != GU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != GU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == GU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function hU(UU, RU, gU) {
      var tU = UU.HG,
        GU = UU.ticks,
        jU = UU.viewBox,
        CU = UU.minTickGap,
        hU = UU.orientation,
        QU = UU.interval,
        eU = UU.tickFormatter,
        WU = UU.unit,
        fU = UU.angle;
      if (!GU || !GU.length || !tU) return [];
      if ((0, EU.v)(QU) || TU.b.isSsr) return function(UU, RU) {
        return KU(UU, RU + 1)
      }(GU, "number" === typeof QU && (0, EU.v)(QU) ? QU : 0);
      var xU = [],
        mU = "top" === hU || "bottom" === hU ? "width" : "height",
        IU = WU && "width" === mU ? (0, PU.f)(WU, {
          fontSize: RU,
          letterSpacing: gU
        }) : {
          width: 0,
          height: 0
        },
        JU = function(UU, tU) {
          var EU = pU()(eU) ? eU(UU.value, tU) : UU.value;
          return "width" === mU ? function(UU, RU, gU) {
            var tU = {
              width: UU.width + RU.width,
              height: UU.height + RU.height
            };
            return (0, qU.g)(tU, gU)
          }((0, PU.f)(EU, {
            fontSize: RU,
            letterSpacing: gU
          }), IU, fU) : (0, PU.f)(EU, {
            fontSize: RU,
            letterSpacing: gU
          })[mU]
        },
        wU = GU.length >= 2 ? (0, EU.y)(GU[1].coordinate - GU[0].coordinate) : 1,
        nU = function(UU, RU, gU) {
          var tU = "width" === gU,
            pU = UU.x,
            EU = UU.y,
            PU = UU.width,
            TU = UU.height;
          return 1 === RU ? {
            start: tU ? pU : EU,
            end: tU ? pU + PU : EU + TU
          } : {
            start: tU ? pU + PU : EU + TU,
            end: tU ? pU : EU
          }
        }(jU, wU, mU);
      return "equidistantPreserveStart" === QU ? function(UU, RU, gU, tU, pU) {
        for (var EU, PU = (tU || []).slice(), TU = RU.start, qU = RU.end, GU = 0, jU = 1, uU = TU, CU = function() {
            var RU = null === tU || void 0 === tU ? void 0 : tU[GU];
            if (void 0 === RU) return {
              v: KU(tU, jU)
            };
            var EU, PU = GU,
              CU = function() {
                return void 0 === EU && (EU = gU(RU, PU)), EU
              },
              hU = RU.coordinate,
              QU = 0 === GU || cU(UU, hU, CU, uU, qU);
            QU || (GU = 0, uU = TU, jU += 1), QU && (uU = hU + UU * (CU() / 2 + pU), GU += jU)
          }; jU <= PU.length;)
          if (EU = CU()) return EU.v;
        return []
      }(wU, nU, JU, GU, CU) : (xU = "preserveStart" === QU || "preserveStartEnd" === QU ? function(UU, RU, gU, tU, pU, EU) {
        var PU = (tU || []).slice(),
          TU = PU.length,
          qU = RU.start,
          KU = RU.end;
        if (EU) {
          var GU = tU[TU - 1],
            jU = gU(GU, TU - 1),
            CU = UU * (GU.coordinate + UU * jU / 2 - KU);
          PU[TU - 1] = GU = uU(uU({}, GU), {}, {
            tickCoord: CU > 0 ? GU.coordinate - CU * UU : GU.coordinate
          }), cU(UU, GU.tickCoord, (function() {
            return jU
          }), qU, KU) && (KU = GU.tickCoord - UU * (jU / 2 + pU), PU[TU - 1] = uU(uU({}, GU), {}, {
            isShow: !0
          }))
        }
        for (var hU = EU ? TU - 1 : TU, QU = function(RU) {
            var tU, EU = PU[RU],
              TU = function() {
                return void 0 === tU && (tU = gU(EU, RU)), tU
              };
            if (0 === RU) {
              var GU = UU * (EU.coordinate - UU * TU() / 2 - qU);
              PU[RU] = EU = uU(uU({}, EU), {}, {
                tickCoord: GU < 0 ? EU.coordinate - GU * UU : EU.coordinate
              })
            } else PU[RU] = EU = uU(uU({}, EU), {}, {
              tickCoord: EU.coordinate
            });
            cU(UU, EU.tickCoord, TU, qU, KU) && (qU = EU.tickCoord + UU * (TU() / 2 + pU), PU[RU] = uU(uU({}, EU), {}, {
              isShow: !0
            }))
          }, eU = 0; eU < hU; eU++) QU(eU);
        return PU
      }(wU, nU, JU, GU, CU, "preserveStartEnd" === QU) : function(UU, RU, gU, tU, pU) {
        for (var EU = (tU || []).slice(), PU = EU.length, TU = RU.start, qU = RU.end, KU = function(RU) {
            var tU, KU = EU[RU],
              GU = function() {
                return void 0 === tU && (tU = gU(KU, RU)), tU
              };
            if (RU === PU - 1) {
              var jU = UU * (KU.coordinate + UU * GU() / 2 - qU);
              EU[RU] = KU = uU(uU({}, KU), {}, {
                tickCoord: jU > 0 ? KU.coordinate - jU * UU : KU.coordinate
              })
            } else EU[RU] = KU = uU(uU({}, KU), {}, {
              tickCoord: KU.coordinate
            });
            cU(UU, KU.tickCoord, GU, TU, qU) && (qU = KU.tickCoord - UU * (GU() / 2 + pU), EU[RU] = uU(uU({}, KU), {}, {
              isShow: !0
            }))
          }, GU = PU - 1; GU >= 0; GU--) KU(GU);
        return EU
      }(wU, nU, JU, GU, CU), xU.filter((function(UU) {
        return UU.isShow
      })))
    }
  },
  6090: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => qU
    });
    var tU = gU(5138),
      pU = gU(5948),
      EU = gU(6066),
      PU = gU(6080),
      TU = gU(5916),
      qU = (0, tU.b)({
        chartName: "BarChart",
        GraphicalChild: pU.c,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: EU.c
        }, {
          axisType: "yAxis",
          AxisComp: PU.e
        }],
        formatAxisMap: TU.e
      })
  },
  5133: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pR
    });
    var tU = gU(5138),
      pU = gU(6057),
      EU = gU(5948),
      PU = gU(6061),
      TU = gU(56),
      qU = gU(5799),
      KU = gU(5087),
      cU = gU.n(KU),
      GU = gU(5874),
      jU = gU.n(GU),
      uU = gU(4921),
      CU = gU.n(uU),
      hU = gU(4733),
      QU = gU(5633),
      eU = gU(5962),
      WU = gU(5097),
      fU = gU(5647);

    function xU(UU) {
      return xU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, xU(UU)
    }

    function mU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, oU(tU.key), tU)
      }
    }

    function IU(UU, RU, gU) {
      return RU = wU(RU),
        function(UU, RU) {
          if (RU && ("object" === xU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, JU() ? Reflect.construct(RU, gU || [], wU(UU).constructor) : RU.apply(UU, gU))
    }

    function JU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (JU = function() {
        return !!UU
      })()
    }

    function wU(UU) {
      return wU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, wU(UU)
    }

    function nU(UU, RU) {
      return nU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, nU(UU, RU)
    }

    function bU(UU, RU, gU) {
      return (RU = oU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function oU(UU) {
      var RU = function(UU, RU) {
        if ("object" != xU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != xU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == xU(RU) ? RU : RU + ""
    }
    var ZU = function(UU) {
      function RU() {
        return function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, RU), IU(this, RU, arguments)
      }
      return function(UU, RU) {
        if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(RU && RU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), RU && nU(UU, RU)
      }(RU, UU), gU = RU, (tU = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && mU(gU.prototype, tU), pU && mU(gU, pU), Object.defineProperty(gU, "prototype", {
        writable: !1
      }), gU;
      var gU, tU, pU
    }(TU.Component);
    bU(ZU, "displayName", "ZAxis"), bU(ZU, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var aU = gU(6049),
      YU = gU(5885),
      BU = gU(5955),
      VU = gU(4827),
      rU = gU(5817),
      XU = gU(5125),
      vU = gU(5726),
      dU = gU(5976),
      HU = ["option", "isActive"];

    function SU() {
      return SU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, SU.apply(this, arguments)
    }

    function sU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function yU(UU) {
      var RU = UU.option,
        gU = UU.isActive,
        tU = sU(UU, HU);
      return "string" === typeof RU ? TU.createElement(dU.c, SU({
        option: TU.createElement(vU.c, SU({
          type: RU
        }, tU)),
        isActive: gU,
        shapeType: "symbols"
      }, tU)) : TU.createElement(dU.c, SU({
        option: RU,
        isActive: gU,
        shapeType: "symbols"
      }, tU))
    }

    function kU(UU) {
      return kU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, kU(UU)
    }

    function FU() {
      return FU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, FU.apply(this, arguments)
    }

    function iU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function AU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? iU(Object(gU), !0).forEach((function(RU) {
          lU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : iU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function zU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, OU(tU.key), tU)
      }
    }

    function MU(UU, RU, gU) {
      return RU = LU(RU),
        function(UU, RU) {
          if (RU && ("object" === kU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, DU() ? Reflect.construct(RU, gU || [], LU(UU).constructor) : RU.apply(UU, gU))
    }

    function DU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (DU = function() {
        return !!UU
      })()
    }

    function LU(UU) {
      return LU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, LU(UU)
    }

    function NU(UU, RU) {
      return NU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, NU(UU, RU)
    }

    function lU(UU, RU, gU) {
      return (RU = OU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function OU(UU) {
      var RU = function(UU, RU) {
        if ("object" != kU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != kU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == kU(RU) ? RU : RU + ""
    }
    var UR = function(UU) {
      function RU() {
        var UU;
        ! function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, RU);
        for (var gU = arguments.length, tU = new Array(gU), pU = 0; pU < gU; pU++) tU[pU] = arguments[pU];
        return lU(UU = MU(this, RU, [].concat(tU)), "state", {
          isAnimationFinished: !1
        }), lU(UU, "handleAnimationEnd", (function() {
          UU.setState({
            isAnimationFinished: !0
          })
        })), lU(UU, "handleAnimationStart", (function() {
          UU.setState({
            isAnimationFinished: !1
          })
        })), lU(UU, "id", (0, VU.C)("recharts-scatter-")), UU
      }
      return function(UU, RU) {
        if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(RU && RU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), RU && NU(UU, RU)
      }(RU, UU), gU = RU, tU = [{
        key: "renderSymbolsStatically",
        value: function(UU) {
          var RU = this,
            gU = this.props,
            tU = gU.shape,
            pU = gU.activeShape,
            EU = gU.activeIndex,
            PU = (0, WU.b)(this.props, !1);
          return UU.map((function(UU, gU) {
            var qU = EU === gU,
              KU = qU ? pU : tU,
              cU = AU(AU({}, PU), UU);
            return TU.createElement(QU.e, FU({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === UU || void 0 === UU ? void 0 : UU.cx, "-").concat(null === UU || void 0 === UU ? void 0 : UU.cy, "-").concat(null === UU || void 0 === UU ? void 0 : UU.size, "-").concat(gU)
            }, (0, XU.p)(RU.props, UU, gU), {
              role: "img"
            }), TU.createElement(yU, FU({
              option: KU,
              isActive: qU,
              key: "symbol-".concat(gU)
            }, cU)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var UU = this,
            RU = this.props,
            gU = RU.points,
            tU = RU.isAnimationActive,
            pU = RU.animationBegin,
            EU = RU.animationDuration,
            PU = RU.animationEasing,
            KU = RU.animationId,
            cU = this.state.prevPoints;
          return TU.createElement(qU.b, {
            pu: pU,
            duration: EU,
            isActive: tU,
            easing: PU,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(KU),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(RU) {
            var tU = RU.t,
              pU = gU.map((function(UU, RU) {
                var gU = cU && cU[RU];
                if (gU) {
                  var pU = (0, VU.p)(gU.cx, UU.cx),
                    EU = (0, VU.p)(gU.cy, UU.cy),
                    PU = (0, VU.p)(gU.size, UU.size);
                  return AU(AU({}, UU), {}, {
                    cx: pU(tU),
                    cy: EU(tU),
                    size: PU(tU)
                  })
                }
                var TU = (0, VU.p)(0, UU.size);
                return AU(AU({}, UU), {}, {
                  size: TU(tU)
                })
              }));
            return TU.createElement(QU.e, null, UU.renderSymbolsStatically(pU))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var UU = this.props,
            RU = UU.points,
            gU = UU.isAnimationActive,
            tU = this.state.prevPoints;
          return !(gU && RU && RU.length) || tU && jU()(tU, RU) ? this.renderSymbolsStatically(RU) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var UU = this.props,
            RU = UU.points,
            gU = UU.xAxis,
            tU = UU.yAxis,
            pU = UU.children,
            EU = (0, WU.f)(pU, YU.c);
          return EU ? EU.map((function(UU, pU) {
            var EU = UU.props,
              PU = EU.direction,
              qU = EU.dataKey;
            return TU.cloneElement(UU, {
              key: "".concat(PU, "-").concat(qU, "-").concat(RU[pU]),
              data: RU,
              xAxis: gU,
              yAxis: tU,
              layout: "x" === PU ? "vertical" : "horizontal",
              dataPointFormatter: function(UU, RU) {
                return {
                  x: UU.cx,
                  y: UU.cy,
                  value: "x" === PU ? +UU.node.x : +UU.node.y,
                  errorVal: (0, rU.cb)(UU, RU)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var UU, RU, gU = this.props,
            tU = gU.points,
            pU = gU.line,
            EU = gU.lineType,
            PU = gU.lineJointType,
            qU = (0, WU.b)(this.props, !1),
            KU = (0, WU.b)(pU, !1);
          if ("joint" === EU) UU = tU.map((function(UU) {
            return {
              x: UU.cx,
              y: UU.cy
            }
          }));
          else if ("fitting" === EU) {
            var cU = (0, VU.h)(tU),
              GU = cU.xmin,
              jU = cU.xmax,
              uU = cU.a,
              hU = cU.b,
              eU = function(UU) {
                return uU * UU + hU
              };
            UU = [{
              x: GU,
              y: eU(GU)
            }, {
              x: jU,
              y: eU(jU)
            }]
          }
          var fU = AU(AU(AU({}, qU), {}, {
            fill: "none",
            stroke: qU && qU.fill
          }, KU), {}, {
            points: UU
          });
          return RU = TU.isValidElement(pU) ? TU.cloneElement(pU, fU) : CU()(pU) ? pU(fU) : TU.createElement(aU.b, FU({}, fU, {
            type: PU
          })), TU.createElement(QU.e, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, RU)
        }
      }, {
        key: "render",
        value: function() {
          var UU = this.props,
            RU = UU.hide,
            gU = UU.points,
            tU = UU.line,
            pU = UU.className,
            EU = UU.xAxis,
            PU = UU.yAxis,
            qU = UU.left,
            KU = UU.top,
            GU = UU.width,
            jU = UU.height,
            uU = UU.id,
            CU = UU.isAnimationActive;
          if (RU || !gU || !gU.length) return null;
          var WU = this.state.isAnimationFinished,
            fU = (0, hU.e)("recharts-scatter", pU),
            xU = EU && EU.allowDataOverflow,
            mU = PU && PU.allowDataOverflow,
            IU = xU || mU,
            JU = cU()(uU) ? this.id : uU;
          return TU.createElement(QU.e, {
            className: fU,
            clipPath: IU ? "url(#clipPath-".concat(JU, ")") : null
          }, xU || mU ? TU.createElement("defs", null, TU.createElement("clipPath", {
            id: "clipPath-".concat(JU)
          }, TU.createElement("rect", {
            x: xU ? qU : qU - GU / 2,
            y: mU ? KU : KU - jU / 2,
            width: xU ? GU : 2 * GU,
            height: mU ? jU : 2 * jU
          }))) : null, tU && this.renderLine(), this.renderErrorBar(), TU.createElement(QU.e, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!CU || WU) && eU.b.renderCallByParent(this.props, gU))
        }
      }], pU = [{
        key: "getDerivedStateFromProps",
        value: function(UU, RU) {
          return UU.animationId !== RU.prevAnimationId ? {
            prevAnimationId: UU.animationId,
            curPoints: UU.points,
            prevPoints: RU.curPoints
          } : UU.points !== RU.curPoints ? {
            curPoints: UU.points
          } : null
        }
      }], tU && zU(gU.prototype, tU), pU && zU(gU, pU), Object.defineProperty(gU, "prototype", {
        writable: !1
      }), gU;
      var gU, tU, pU
    }(TU.PureComponent);
    lU(UR, "displayName", "Scatter"), lU(UR, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !fU.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), lU(UR, "getComposedData", (function(UU) {
      var RU = UU.xAxis,
        gU = UU.yAxis,
        tU = UU.zAxis,
        pU = UU.item,
        EU = UU.displayedData,
        PU = UU.xAxisTicks,
        TU = UU.yAxisTicks,
        qU = UU.offset,
        KU = pU.props.tooltipType,
        GU = (0, WU.f)(pU.props.children, BU.e),
        jU = cU()(RU.dataKey) ? pU.props.dataKey : RU.dataKey,
        uU = cU()(gU.dataKey) ? pU.props.dataKey : gU.dataKey,
        CU = tU && tU.dataKey,
        hU = tU ? tU.range : ZU.defaultProps.range,
        QU = hU && hU[0],
        eU = RU.scale.bandwidth ? RU.scale.bandwidth() : 0,
        fU = gU.scale.bandwidth ? gU.scale.bandwidth() : 0,
        xU = EU.map((function(UU, EU) {
          var qU = (0, rU.cb)(UU, jU),
            hU = (0, rU.cb)(UU, uU),
            WU = !cU()(CU) && (0, rU.cb)(UU, CU) || "-",
            xU = [{
              name: cU()(RU.dataKey) ? pU.props.name : RU.name || RU.dataKey,
              unit: RU.unit || "",
              value: qU,
              payload: UU,
              dataKey: jU,
              type: KU
            }, {
              name: cU()(gU.dataKey) ? pU.props.name : gU.name || gU.dataKey,
              unit: gU.unit || "",
              value: hU,
              payload: UU,
              dataKey: uU,
              type: KU
            }];
          "-" !== WU && xU.push({
            name: tU.name || tU.dataKey,
            unit: tU.unit || "",
            value: WU,
            payload: UU,
            dataKey: CU,
            type: KU
          });
          var mU = (0, rU.w)({
              axis: RU,
              ticks: PU,
              bandSize: eU,
              entry: UU,
              index: EU,
              dataKey: jU
            }),
            IU = (0, rU.w)({
              axis: gU,
              ticks: TU,
              bandSize: fU,
              entry: UU,
              index: EU,
              dataKey: uU
            }),
            JU = "-" !== WU ? tU.scale(WU) : QU,
            wU = Math.sqrt(Math.max(JU, 0) / Math.PI);
          return AU(AU({}, UU), {}, {
            cx: mU,
            cy: IU,
            x: mU - wU,
            y: IU - wU,
            xAxis: RU,
            yAxis: gU,
            zAxis: tU,
            width: 2 * wU,
            height: 2 * wU,
            size: JU,
            node: {
              x: qU,
              y: hU,
              z: WU
            },
            tooltipPayload: xU,
            tooltipPosition: {
              x: mU,
              y: IU
            },
            payload: UU
          }, GU && GU[EU] && GU[EU].props)
        }));
      return AU({
        points: xU
      }, qU)
    }));
    var RR = gU(6066),
      gR = gU(6080),
      tR = gU(5916),
      pR = (0, tU.b)({
        chartName: "ComposedChart",
        GraphicalChild: [PU.c, pU.c, EU.c, UR],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: RR.c
        }, {
          axisType: "yAxis",
          AxisComp: gR.e
        }, {
          axisType: "zAxis",
          AxisComp: ZU
        }],
        formatAxisMap: tR.e
      })
  },
  5138: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => Sg
    });
    var tU = gU(56),
      pU = gU(5087),
      EU = gU.n(pU),
      PU = gU(4921),
      TU = gU.n(PU),
      qU = gU(5141),
      KU = gU.n(qU),
      cU = gU(4846),
      GU = gU.n(cU),
      jU = gU(5170),
      uU = gU.n(jU),
      CU = gU(4739),
      hU = gU.n(CU),
      QU = gU(4733),
      eU = gU(5622),
      WU = gU(5626),
      fU = gU(5633),
      xU = gU(5639),
      mU = gU(5720),
      IU = gU(5791),
      JU = gU(5796),
      wU = gU(5097),
      nU = gU(5824),
      bU = gU(5805),
      oU = gU(5817),
      ZU = gU(4827);

    function aU(UU) {
      return aU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, aU(UU)
    }

    function YU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function BU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? YU(Object(gU), !0).forEach((function(RU) {
          VU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : YU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function VU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != aU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != aU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == aU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }
    var rU = ["Webkit", "Moz", "O", "ms"];

    function XU(UU) {
      return XU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, XU(UU)
    }

    function vU() {
      return vU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, vU.apply(this, arguments)
    }

    function dU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function HU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? dU(Object(gU), !0).forEach((function(RU) {
          iU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : dU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function SU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, AU(tU.key), tU)
      }
    }

    function sU(UU, RU, gU) {
      return RU = kU(RU),
        function(UU, RU) {
          if (RU && ("object" === XU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, yU() ? Reflect.construct(RU, gU || [], kU(UU).constructor) : RU.apply(UU, gU))
    }

    function yU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (yU = function() {
        return !!UU
      })()
    }

    function kU(UU) {
      return kU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, kU(UU)
    }

    function FU(UU, RU) {
      return FU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, FU(UU, RU)
    }

    function iU(UU, RU, gU) {
      return (RU = AU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function AU(UU) {
      var RU = function(UU, RU) {
        if ("object" != XU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != XU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == XU(RU) ? RU : RU + ""
    }
    var zU = function(UU) {
        return UU.changedTouches && !!UU.changedTouches.length
      },
      MU = function(UU) {
        function RU(UU) {
          var gU;
          return function(UU, RU) {
            if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
          }(this, RU), iU(gU = sU(this, RU, [UU]), "handleDrag", (function(UU) {
            gU.leaveTimer && (clearTimeout(gU.leaveTimer), gU.leaveTimer = null), gU.state.isTravellerMoving ? gU.handleTravellerMove(UU) : gU.state.isSlideMoving && gU.handleSlideDrag(UU)
          })), iU(gU, "handleTouchMove", (function(UU) {
            null != UU.changedTouches && UU.changedTouches.length > 0 && gU.handleDrag(UU.changedTouches[0])
          })), iU(gU, "handleDragEnd", (function() {
            gU.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var UU = gU.props,
                RU = UU.endIndex,
                tU = UU.onDragEnd,
                pU = UU.startIndex;
              null === tU || void 0 === tU || tU({
                endIndex: RU,
                startIndex: pU
              })
            })), gU.detachDragEndListener()
          })), iU(gU, "handleLeaveWrapper", (function() {
            (gU.state.isTravellerMoving || gU.state.isSlideMoving) && (gU.leaveTimer = window.setTimeout(gU.handleDragEnd, gU.props.leaveTimeOut))
          })), iU(gU, "handleEnterSlideOrTraveller", (function() {
            gU.setState({
              isTextActive: !0
            })
          })), iU(gU, "handleLeaveSlideOrTraveller", (function() {
            gU.setState({
              isTextActive: !1
            })
          })), iU(gU, "handleSlideDragStart", (function(UU) {
            var RU = zU(UU) ? UU.changedTouches[0] : UU;
            gU.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: RU.pageX
            }), gU.attachDragEndListener()
          })), gU.travellerDragStartHandlers = {
            startX: gU.handleTravellerDragStart.bind(gU, "startX"),
            endX: gU.handleTravellerDragStart.bind(gU, "endX")
          }, gU.state = {}, gU
        }
        return function(UU, RU) {
          if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
          UU.prototype = Object.create(RU && RU.prototype, {
            constructor: {
              value: UU,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(UU, "prototype", {
            writable: !1
          }), RU && FU(UU, RU)
        }(RU, UU), gU = RU, pU = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(UU) {
            var gU = UU.startX,
              tU = UU.endX,
              pU = this.state.scaleValues,
              EU = this.props,
              PU = EU.gap,
              TU = EU.data.length - 1,
              qU = Math.min(gU, tU),
              KU = Math.max(gU, tU),
              cU = RU.getIndexInRange(pU, qU),
              GU = RU.getIndexInRange(pU, KU);
            return {
              startIndex: cU - cU % PU,
              endIndex: GU === TU ? TU : GU - GU % PU
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(UU) {
            var RU = this.props,
              gU = RU.data,
              tU = RU.tickFormatter,
              pU = RU.dataKey,
              EU = (0, oU.cb)(gU[UU], pU, UU);
            return TU()(tU) ? tU(EU, UU) : EU
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
          value: function(UU) {
            var RU = this.state,
              gU = RU.slideMoveStartX,
              tU = RU.startX,
              pU = RU.endX,
              EU = this.props,
              PU = EU.x,
              TU = EU.width,
              qU = EU.travellerWidth,
              KU = EU.startIndex,
              cU = EU.endIndex,
              GU = EU.onChange,
              jU = UU.pageX - gU;
            jU > 0 ? jU = Math.min(jU, PU + TU - qU - pU, PU + TU - qU - tU) : jU < 0 && (jU = Math.max(jU, PU - tU, PU - pU));
            var uU = this.getIndex({
              startX: tU + jU,
              endX: pU + jU
            });
            uU.startIndex === KU && uU.endIndex === cU || !GU || GU(uU), this.setState({
              startX: tU + jU,
              endX: pU + jU,
              slideMoveStartX: UU.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(UU, RU) {
            var gU = zU(RU) ? RU.changedTouches[0] : RU;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: UU,
              brushMoveStartX: gU.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(UU) {
            var RU = this.state,
              gU = RU.brushMoveStartX,
              tU = RU.movingTravellerId,
              pU = RU.endX,
              EU = RU.startX,
              PU = this.state[tU],
              TU = this.props,
              qU = TU.x,
              KU = TU.width,
              cU = TU.travellerWidth,
              GU = TU.onChange,
              jU = TU.gap,
              uU = TU.data,
              CU = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              hU = UU.pageX - gU;
            hU > 0 ? hU = Math.min(hU, qU + KU - cU - PU) : hU < 0 && (hU = Math.max(hU, qU - PU)), CU[tU] = PU + hU;
            var QU = this.getIndex(CU),
              eU = QU.startIndex,
              WU = QU.endIndex;
            this.setState(iU(iU({}, tU, PU + hU), "brushMoveStartX", UU.pageX), (function() {
              GU && function() {
                var UU = uU.length - 1;
                return "startX" === tU && (pU > EU ? eU % jU === 0 : WU % jU === 0) || pU < EU && WU === UU || "endX" === tU && (pU > EU ? WU % jU === 0 : eU % jU === 0) || pU > EU && WU === UU
              }() && GU(QU)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(UU, RU) {
            var gU = this,
              tU = this.state,
              pU = tU.scaleValues,
              EU = tU.startX,
              PU = tU.endX,
              TU = this.state[RU],
              qU = pU.indexOf(TU);
            if (-1 !== qU) {
              var KU = qU + UU;
              if (!(-1 === KU || KU >= pU.length)) {
                var cU = pU[KU];
                "startX" === RU && cU >= PU || "endX" === RU && cU <= EU || this.setState(iU({}, RU, cU), (function() {
                  gU.props.onChange(gU.getIndex({
                    startX: gU.state.startX,
                    endX: gU.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var UU = this.props,
              RU = UU.x,
              gU = UU.y,
              pU = UU.width,
              EU = UU.height,
              PU = UU.fill,
              TU = UU.stroke;
            return tU.createElement("rect", {
              stroke: TU,
              fill: PU,
              x: RU,
              y: gU,
              width: pU,
              height: EU
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var UU = this.props,
              RU = UU.x,
              gU = UU.y,
              pU = UU.width,
              EU = UU.height,
              PU = UU.data,
              TU = UU.children,
              qU = UU.padding,
              KU = tU.Children.only(TU);
            return KU ? tU.cloneElement(KU, {
              x: RU,
              y: gU,
              width: pU,
              height: EU,
              margin: qU,
              compact: !0,
              data: PU
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(UU, gU) {
            var pU, EU, PU = this,
              TU = this.props,
              qU = TU.y,
              KU = TU.travellerWidth,
              cU = TU.height,
              GU = TU.traveller,
              jU = TU.ariaLabel,
              uU = TU.data,
              CU = TU.startIndex,
              hU = TU.endIndex,
              QU = Math.max(UU, this.props.x),
              eU = HU(HU({}, (0, wU.b)(this.props, !1)), {}, {
                x: QU,
                y: qU,
                width: KU,
                height: cU
              }),
              WU = jU || "Min value: ".concat(null === (pU = uU[CU]) || void 0 === pU ? void 0 : pU.name, ", Max value: ").concat(null === (EU = uU[hU]) || void 0 === EU ? void 0 : EU.name);
            return tU.createElement(fU.e, {
              tabIndex: 0,
              role: "slider",
              "aria-label": WU,
              "aria-valuenow": UU,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[gU],
              onTouchStart: this.travellerDragStartHandlers[gU],
              onKeyDown: function(UU) {
                ["ArrowLeft", "ArrowRight"].includes(UU.key) && (UU.preventDefault(), UU.stopPropagation(), PU.handleTravellerMoveKeyboard("ArrowRight" === UU.key ? 1 : -1, gU))
              },
              onFocus: function() {
                PU.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                PU.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, RU.renderTraveller(GU, eU))
          }
        }, {
          key: "renderSlide",
          value: function(UU, RU) {
            var gU = this.props,
              pU = gU.y,
              EU = gU.height,
              PU = gU.stroke,
              TU = gU.travellerWidth,
              qU = Math.min(UU, RU) + TU,
              KU = Math.max(Math.abs(RU - UU) - TU, 0);
            return tU.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: PU,
              fillOpacity: .2,
              x: qU,
              y: pU,
              width: KU,
              height: EU
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var UU = this.props,
              RU = UU.startIndex,
              gU = UU.endIndex,
              pU = UU.y,
              EU = UU.height,
              PU = UU.travellerWidth,
              TU = UU.stroke,
              qU = this.state,
              KU = qU.startX,
              cU = qU.endX,
              GU = {
                pointerEvents: "none",
                fill: TU
              };
            return tU.createElement(fU.e, {
              className: "recharts-brush-texts"
            }, tU.createElement(bU.b, vU({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(KU, cU) - 5,
              y: pU + EU / 2
            }, GU), this.getTextOfTick(RU)), tU.createElement(bU.b, vU({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(KU, cU) + PU + 5,
              y: pU + EU / 2
            }, GU), this.getTextOfTick(gU)))
          }
        }, {
          key: "render",
          value: function() {
            var UU = this.props,
              RU = UU.data,
              gU = UU.className,
              pU = UU.children,
              EU = UU.x,
              PU = UU.y,
              TU = UU.width,
              qU = UU.height,
              KU = UU.alwaysShowText,
              cU = this.state,
              GU = cU.startX,
              jU = cU.endX,
              uU = cU.isTextActive,
              CU = cU.isSlideMoving,
              hU = cU.isTravellerMoving,
              eU = cU.isTravellerFocused;
            if (!RU || !RU.length || !(0, ZU.v)(EU) || !(0, ZU.v)(PU) || !(0, ZU.v)(TU) || !(0, ZU.v)(qU) || TU <= 0 || qU <= 0) return null;
            var WU = (0, QU.e)("recharts-brush", gU),
              xU = 1 === tU.Children.count(pU),
              mU = function(UU, RU) {
                if (!UU) return null;
                var gU = UU.replace(/(\w)/, (function(UU) {
                    return UU.toUpperCase()
                  })),
                  tU = rU.reduce((function(UU, tU) {
                    return BU(BU({}, UU), {}, VU({}, tU + gU, RU))
                  }), {});
                return tU[UU] = RU, tU
              }("userSelect", "none");
            return tU.createElement(fU.e, {
              className: WU,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: mU
            }, this.renderBackground(), xU && this.renderPanorama(), this.renderSlide(GU, jU), this.renderTravellerLayer(GU, "startX"), this.renderTravellerLayer(jU, "endX"), (uU || CU || hU || eU || KU) && this.renderText())
          }
        }], EU = [{
          key: "renderDefaultTraveller",
          value: function(UU) {
            var RU = UU.x,
              gU = UU.y,
              pU = UU.width,
              EU = UU.height,
              PU = UU.stroke,
              TU = Math.floor(gU + EU / 2) - 1;
            return tU.createElement(tU.Fragment, null, tU.createElement("rect", {
              x: RU,
              y: gU,
              width: pU,
              height: EU,
              fill: PU,
              stroke: "none"
            }), tU.createElement("line", {
              x1: RU + 1,
              y1: TU,
              x2: RU + pU - 1,
              y2: TU,
              fill: "none",
              stroke: "#fff"
            }), tU.createElement("line", {
              x1: RU + 1,
              y1: TU + 2,
              x2: RU + pU - 1,
              y2: TU + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(UU, gU) {
            return tU.isValidElement(UU) ? tU.cloneElement(UU, gU) : TU()(UU) ? UU(gU) : RU.renderDefaultTraveller(gU)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(UU, RU) {
            var gU = UU.data,
              tU = UU.width,
              pU = UU.x,
              EU = UU.travellerWidth,
              PU = UU.updateId,
              TU = UU.startIndex,
              qU = UU.endIndex;
            if (gU !== RU.prevData || PU !== RU.prevUpdateId) return HU({
              prevData: gU,
              prevTravellerWidth: EU,
              prevUpdateId: PU,
              prevX: pU,
              prevWidth: tU
            }, gU && gU.length ? function(UU) {
              var RU = UU.data,
                gU = UU.startIndex,
                tU = UU.endIndex,
                pU = UU.x,
                EU = UU.width,
                PU = UU.travellerWidth;
              if (!RU || !RU.length) return {};
              var TU = RU.length,
                qU = (0, nU.e)().domain(KU()(0, TU)).range([pU, pU + EU - PU]),
                cU = qU.domain().map((function(UU) {
                  return qU(UU)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: qU(gU),
                endX: qU(tU),
                scale: qU,
                scaleValues: cU
              }
            }({
              data: gU,
              width: tU,
              x: pU,
              travellerWidth: EU,
              startIndex: TU,
              endIndex: qU
            }) : {
              scale: null,
              scaleValues: null
            });
            if (RU.scale && (tU !== RU.prevWidth || pU !== RU.prevX || EU !== RU.prevTravellerWidth)) {
              RU.scale.range([pU, pU + tU - EU]);
              var cU = RU.scale.domain().map((function(UU) {
                return RU.scale(UU)
              }));
              return {
                prevData: gU,
                prevTravellerWidth: EU,
                prevUpdateId: PU,
                prevX: pU,
                prevWidth: tU,
                startX: RU.scale(UU.startIndex),
                endX: RU.scale(UU.endIndex),
                scaleValues: cU
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(UU, RU) {
            for (var gU = 0, tU = UU.length - 1; tU - gU > 1;) {
              var pU = Math.floor((gU + tU) / 2);
              UU[pU] > RU ? tU = pU : gU = pU
            }
            return RU >= UU[tU] ? tU : gU
          }
        }], pU && SU(gU.prototype, pU), EU && SU(gU, EU), Object.defineProperty(gU, "prototype", {
          writable: !1
        }), gU;
        var gU, pU, EU
      }(tU.PureComponent);
    iU(MU, "displayName", "Brush"), iU(MU, "defaultProps", {
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
    var DU = gU(5811),
      LU = gU(5887),
      NU = gU(5899),
      lU = gU(5909),
      OU = gU(5916),
      UR = gU(5093);

    function RR() {
      return RR = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, RR.apply(this, arguments)
    }

    function gR(UU) {
      return gR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, gR(UU)
    }

    function tR(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function pR(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? tR(Object(gU), !0).forEach((function(RU) {
          cR(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : tR(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function ER(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, GR(tU.key), tU)
      }
    }

    function PR(UU, RU, gU) {
      return RU = qR(RU),
        function(UU, RU) {
          if (RU && ("object" === gR(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, TR() ? Reflect.construct(RU, gU || [], qR(UU).constructor) : RU.apply(UU, gU))
    }

    function TR() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (TR = function() {
        return !!UU
      })()
    }

    function qR(UU) {
      return qR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, qR(UU)
    }

    function KR(UU, RU) {
      return KR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, KR(UU, RU)
    }

    function cR(UU, RU, gU) {
      return (RU = GR(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function GR(UU) {
      var RU = function(UU, RU) {
        if ("object" != gR(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != gR(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == gR(RU) ? RU : RU + ""
    }
    var jR = function(UU) {
      function RU() {
        return function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, RU), PR(this, RU, arguments)
      }
      return function(UU, RU) {
        if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(RU && RU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), RU && KR(UU, RU)
      }(RU, UU), gU = RU, (pU = [{
        key: "render",
        value: function() {
          var UU = this.props,
            gU = UU.x,
            pU = UU.y,
            EU = UU.r,
            PU = UU.alwaysShow,
            TU = UU.clipPathId,
            qU = (0, ZU.r)(gU),
            KU = (0, ZU.r)(pU);
          if ((0, UR.e)(void 0 === PU, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !qU || !KU) return null;
          var cU = function(UU) {
            var RU = UU.x,
              gU = UU.y,
              tU = UU.xAxis,
              pU = UU.yAxis,
              EU = (0, OU.c)({
                x: tU.scale,
                y: pU.scale
              }),
              PU = EU.apply({
                x: RU,
                y: gU
              }, {
                bandAware: !0
              });
            return (0, lU.e)(UU, "discard") && !EU.isInRange(PU) ? null : PU
          }(this.props);
          if (!cU) return null;
          var GU = cU.x,
            jU = cU.y,
            uU = this.props,
            CU = uU.shape,
            hU = uU.className,
            eU = pR(pR({
              clipPath: (0, lU.e)(this.props, "hidden") ? "url(#".concat(TU, ")") : void 0
            }, (0, wU.b)(this.props, !0)), {}, {
              cx: GU,
              cy: jU
            });
          return tU.createElement(fU.e, {
            className: (0, QU.e)("recharts-reference-dot", hU)
          }, RU.renderDot(CU, eU), NU.c.renderCallByParent(this.props, {
            x: GU - EU,
            y: jU - EU,
            width: 2 * EU,
            height: 2 * EU
          }))
        }
      }]) && ER(gU.prototype, pU), EU && ER(gU, EU), Object.defineProperty(gU, "prototype", {
        writable: !1
      }), gU;
      var gU, pU, EU
    }(tU.Component);
    cR(jR, "displayName", "ReferenceDot"), cR(jR, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), cR(jR, "renderDot", (function(UU, RU) {
      return tU.isValidElement(UU) ? tU.cloneElement(UU, RU) : TU()(UU) ? UU(RU) : tU.createElement(IU.c, RR({}, RU, {
        cx: RU.cx,
        cy: RU.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var uR = gU(6005);

    function CR() {
      return CR = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, CR.apply(this, arguments)
    }

    function hR(UU) {
      return hR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, hR(UU)
    }

    function QR(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function eR(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? QR(Object(gU), !0).forEach((function(RU) {
          JR(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : QR(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function WR(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, wR(tU.key), tU)
      }
    }

    function fR(UU, RU, gU) {
      return RU = mR(RU),
        function(UU, RU) {
          if (RU && ("object" === hR(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, xR() ? Reflect.construct(RU, gU || [], mR(UU).constructor) : RU.apply(UU, gU))
    }

    function xR() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (xR = function() {
        return !!UU
      })()
    }

    function mR(UU) {
      return mR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, mR(UU)
    }

    function IR(UU, RU) {
      return IR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, IR(UU, RU)
    }

    function JR(UU, RU, gU) {
      return (RU = wR(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function wR(UU) {
      var RU = function(UU, RU) {
        if ("object" != hR(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != hR(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == hR(RU) ? RU : RU + ""
    }
    var nR = function(UU) {
      function RU() {
        return function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, RU), fR(this, RU, arguments)
      }
      return function(UU, RU) {
        if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(RU && RU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), RU && IR(UU, RU)
      }(RU, UU), gU = RU, (pU = [{
        key: "render",
        value: function() {
          var UU = this.props,
            gU = UU.x1,
            pU = UU.x2,
            EU = UU.y1,
            PU = UU.y2,
            TU = UU.className,
            qU = UU.alwaysShow,
            KU = UU.clipPathId;
          (0, UR.e)(void 0 === qU, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var cU = (0, ZU.r)(gU),
            GU = (0, ZU.r)(pU),
            jU = (0, ZU.r)(EU),
            uU = (0, ZU.r)(PU),
            CU = this.props.shape;
          if (!cU && !GU && !jU && !uU && !CU) return null;
          var hU = function(UU, RU, gU, tU, pU) {
            var EU = pU.x1,
              PU = pU.x2,
              TU = pU.y1,
              qU = pU.y2,
              KU = pU.xAxis,
              cU = pU.yAxis;
            if (!KU || !cU) return null;
            var GU = (0, OU.c)({
                x: KU.scale,
                y: cU.scale
              }),
              jU = {
                x: UU ? GU.x.apply(EU, {
                  position: "start"
                }) : GU.x.rangeMin,
                y: gU ? GU.y.apply(TU, {
                  position: "start"
                }) : GU.y.rangeMin
              },
              uU = {
                x: RU ? GU.x.apply(PU, {
                  position: "end"
                }) : GU.x.rangeMax,
                y: tU ? GU.y.apply(qU, {
                  position: "end"
                }) : GU.y.rangeMax
              };
            return !(0, lU.e)(pU, "discard") || GU.isInRange(jU) && GU.isInRange(uU) ? (0, OU.l)(jU, uU) : null
          }(cU, GU, jU, uU, this.props);
          if (!hU && !CU) return null;
          var eU = (0, lU.e)(this.props, "hidden") ? "url(#".concat(KU, ")") : void 0;
          return tU.createElement(fU.e, {
            className: (0, QU.e)("recharts-reference-area", TU)
          }, RU.renderRect(CU, eR(eR({
            clipPath: eU
          }, (0, wU.b)(this.props, !0)), hU)), NU.c.renderCallByParent(this.props, hU))
        }
      }]) && WR(gU.prototype, pU), EU && WR(gU, EU), Object.defineProperty(gU, "prototype", {
        writable: !1
      }), gU;
      var gU, pU, EU
    }(tU.Component);

    function bR(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return oR(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return oR(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return oR(UU, RU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function oR(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }
    JR(nR, "displayName", "ReferenceArea"), JR(nR, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), JR(nR, "renderRect", (function(UU, RU) {
      return tU.isValidElement(UU) ? tU.cloneElement(UU, RU) : TU()(UU) ? UU(RU) : tU.createElement(JU.c, CR({}, RU, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var ZR = function(UU, RU, gU, tU, pU) {
        var EU = (0, wU.f)(UU, uR.e),
          PU = (0, wU.f)(UU, jR),
          TU = [].concat(bR(EU), bR(PU)),
          qU = (0, wU.f)(UU, nR),
          KU = "".concat(tU, "Id"),
          cU = tU[0],
          GU = RU;
        if (TU.length && (GU = TU.reduce((function(UU, RU) {
            if (RU.props[KU] === gU && (0, lU.e)(RU.props, "extendDomain") && (0, ZU.v)(RU.props[cU])) {
              var tU = RU.props[cU];
              return [Math.min(UU[0], tU), Math.max(UU[1], tU)]
            }
            return UU
          }), GU)), qU.length) {
          var jU = "".concat(cU, "1"),
            uU = "".concat(cU, "2");
          GU = qU.reduce((function(UU, RU) {
            if (RU.props[KU] === gU && (0, lU.e)(RU.props, "extendDomain") && (0, ZU.v)(RU.props[jU]) && (0, ZU.v)(RU.props[uU])) {
              var tU = RU.props[jU],
                pU = RU.props[uU];
              return [Math.min(UU[0], tU, pU), Math.max(UU[1], tU, pU)]
            }
            return UU
          }), GU)
        }
        return pU && pU.length && (GU = pU.reduce((function(UU, RU) {
          return (0, ZU.v)(RU) ? [Math.min(UU[0], RU), Math.max(UU[1], RU)] : UU
        }), GU)), GU
      },
      aR = gU(5904),
      YR = gU(5121),
      BR = gU(26),
      VR = new(gU.n(BR)()),
      rR = "recharts.syncMouseEvents",
      XR = gU(5125);

    function vR(UU) {
      return vR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, vR(UU)
    }

    function dR(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, SR(tU.key), tU)
      }
    }

    function HR(UU, RU, gU) {
      return (RU = SR(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function SR(UU) {
      var RU = function(UU, RU) {
        if ("object" != vR(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != vR(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == vR(RU) ? RU : RU + ""
    }
    var sR = function() {
      return UU = function UU() {
        ! function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, UU), HR(this, "activeIndex", 0), HR(this, "coordinateList", []), HR(this, "layout", "horizontal")
      }, (RU = [{
        key: "setDetails",
        value: function(UU) {
          var RU, gU = UU.coordinateList,
            tU = void 0 === gU ? null : gU,
            pU = UU.container,
            EU = void 0 === pU ? null : pU,
            PU = UU.layout,
            TU = void 0 === PU ? null : PU,
            qU = UU.offset,
            KU = void 0 === qU ? null : qU,
            cU = UU.mouseHandlerCallback,
            GU = void 0 === cU ? null : cU;
          this.coordinateList = null !== (RU = null !== tU && void 0 !== tU ? tU : this.coordinateList) && void 0 !== RU ? RU : [], this.container = null !== EU && void 0 !== EU ? EU : this.container, this.layout = null !== TU && void 0 !== TU ? TU : this.layout, this.offset = null !== KU && void 0 !== KU ? KU : this.offset, this.mouseHandlerCallback = null !== GU && void 0 !== GU ? GU : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(UU) {
          if (0 !== this.coordinateList.length) switch (UU.key) {
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
        value: function(UU) {
          this.activeIndex = UU
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var UU, RU;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var gU = this.container.getBoundingClientRect(),
              tU = gU.x,
              pU = gU.y,
              EU = gU.height,
              PU = this.coordinateList[this.activeIndex].coordinate,
              TU = (null === (UU = window) || void 0 === UU ? void 0 : UU.scrollX) || 0,
              qU = (null === (RU = window) || void 0 === RU ? void 0 : RU.scrollY) || 0,
              KU = tU + PU + TU,
              cU = pU + this.offset.top + EU / 2 + qU;
            this.mouseHandlerCallback({
              pageX: KU,
              pageY: cU
            })
          }
        }
      }]) && dR(UU.prototype, RU), gU && dR(UU, gU), Object.defineProperty(UU, "prototype", {
        writable: !1
      }), UU;
      var UU, RU, gU
    }();
    var yR = gU(5976),
      kR = gU(6049);

    function FR(UU) {
      return FR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, FR(UU)
    }
    var iR = ["x", "y", "top", "left", "width", "height", "className"];

    function AR() {
      return AR = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, AR.apply(this, arguments)
    }

    function zR(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function MR(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != FR(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != FR(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == FR(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function DR(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }
    var LR = function(UU, RU, gU, tU, pU, EU) {
        return "M".concat(UU, ",").concat(pU, "v").concat(tU, "M").concat(EU, ",").concat(RU, "h").concat(gU)
      },
      NR = function(UU) {
        var RU = UU.x,
          gU = void 0 === RU ? 0 : RU,
          pU = UU.y,
          EU = void 0 === pU ? 0 : pU,
          PU = UU.top,
          TU = void 0 === PU ? 0 : PU,
          qU = UU.left,
          KU = void 0 === qU ? 0 : qU,
          cU = UU.width,
          GU = void 0 === cU ? 0 : cU,
          jU = UU.height,
          uU = void 0 === jU ? 0 : jU,
          CU = UU.className,
          hU = function(UU) {
            for (var RU = 1; RU < arguments.length; RU++) {
              var gU = null != arguments[RU] ? arguments[RU] : {};
              RU % 2 ? zR(Object(gU), !0).forEach((function(RU) {
                MR(UU, RU, gU[RU])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : zR(Object(gU)).forEach((function(RU) {
                Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
              }))
            }
            return UU
          }({
            x: gU,
            y: EU,
            top: TU,
            left: KU,
            width: GU,
            height: uU
          }, DR(UU, iR));
        return (0, ZU.v)(gU) && (0, ZU.v)(EU) && (0, ZU.v)(GU) && (0, ZU.v)(uU) && (0, ZU.v)(TU) && (0, ZU.v)(KU) ? tU.createElement("path", AR({}, (0, wU.b)(hU, !0), {
          className: (0, QU.e)("recharts-cross", CU),
          d: LR(gU, EU, GU, uU, TU, KU)
        })) : null
      };

    function lR(UU) {
      var RU = UU.cx,
        gU = UU.cy,
        tU = UU.radius,
        pU = UU.startAngle,
        EU = UU.endAngle;
      return {
        points: [(0, aR.f)(RU, gU, tU, pU), (0, aR.f)(RU, gU, tU, EU)],
        cx: RU,
        cy: gU,
        radius: tU,
        startAngle: pU,
        endAngle: EU
      }
    }
    var OR = gU(5996);

    function Ug(UU, RU, gU) {
      var tU, pU, EU, PU;
      if ("horizontal" === UU) EU = tU = RU.x, pU = gU.top, PU = gU.top + gU.height;
      else if ("vertical" === UU) PU = pU = RU.y, tU = gU.left, EU = gU.left + gU.width;
      else if (null != RU.cx && null != RU.cy) {
        if ("centric" !== UU) return lR(RU);
        var TU = RU.cx,
          qU = RU.cy,
          KU = RU.innerRadius,
          cU = RU.outerRadius,
          GU = RU.angle,
          jU = (0, aR.f)(TU, qU, KU, GU),
          uU = (0, aR.f)(TU, qU, cU, GU);
        tU = jU.x, pU = jU.y, EU = uU.x, PU = uU.y
      }
      return [{
        x: tU,
        y: pU
      }, {
        x: EU,
        y: PU
      }]
    }

    function Rg(UU) {
      return Rg = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, Rg(UU)
    }

    function gg(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function tg(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? gg(Object(gU), !0).forEach((function(RU) {
          pg(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : gg(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function pg(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != Rg(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != Rg(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == Rg(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function Eg(UU) {
      var RU, gU, pU, EU = UU.element,
        PU = UU.tooltipEventType,
        TU = UU.isActive,
        qU = UU.activeCoordinate,
        KU = UU.activePayload,
        cU = UU.offset,
        GU = UU.activeTooltipIndex,
        jU = UU.tooltipAxisBandSize,
        uU = UU.layout,
        CU = UU.chartName,
        hU = null !== (RU = EU.props.cursor) && void 0 !== RU ? RU : null === (gU = EU.type.defaultProps) || void 0 === gU ? void 0 : gU.cursor;
      if (!EU || !hU || !TU || !qU || "ScatterChart" !== CU && "axis" !== PU) return null;
      var eU = kR.b;
      if ("ScatterChart" === CU) pU = qU, eU = NR;
      else if ("BarChart" === CU) pU = function(UU, RU, gU, tU) {
        var pU = tU / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === UU ? RU.x - pU : gU.left + .5,
          y: "horizontal" === UU ? gU.top + .5 : RU.y - pU,
          width: "horizontal" === UU ? tU : gU.width - 1,
          height: "horizontal" === UU ? gU.height - 1 : tU
        }
      }(uU, qU, cU, jU), eU = JU.c;
      else if ("radial" === uU) {
        var WU = lR(qU),
          fU = WU.cx,
          xU = WU.cy,
          mU = WU.radius;
        pU = {
          cx: fU,
          cy: xU,
          startAngle: WU.startAngle,
          endAngle: WU.endAngle,
          innerRadius: mU,
          outerRadius: mU
        }, eU = OR.b
      } else pU = {
        points: Ug(uU, qU, cU)
      }, eU = kR.b;
      var IU = tg(tg(tg(tg({
        stroke: "#ccc",
        pointerEvents: "none"
      }, cU), pU), (0, wU.b)(hU, !1)), {}, {
        payload: KU,
        payloadIndex: GU,
        className: (0, QU.e)("recharts-tooltip-cursor", hU.className)
      });
      return (0, tU.isValidElement)(hU) ? (0, tU.cloneElement)(hU, IU) : (0, tU.createElement)(eU, IU)
    }
    var Pg = gU(6017),
      Tg = ["item"],
      qg = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function Kg(UU) {
      return Kg = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, Kg(UU)
    }

    function cg() {
      return cg = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, cg.apply(this, arguments)
    }

    function Gg(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        var gU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != gU) {
          var tU, pU, EU, PU, TU = [],
            qU = !0,
            KU = !1;
          try {
            if (EU = (gU = gU.call(UU)).next, 0 === RU) {
              if (Object(gU) !== gU) return;
              qU = !1
            } else
              for (; !(qU = (tU = EU.call(gU)).done) && (TU.push(tU.value), TU.length !== RU); qU = !0);
          } catch (UU) {
            KU = !0, pU = UU
          } finally {
            try {
              if (!qU && null != gU.return && (PU = gU.return(), Object(PU) !== PU)) return
            } finally {
              if (KU) throw pU
            }
          }
          return TU
        }
      }(UU, RU) || fg(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function jg(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function ug(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, wg(tU.key), tU)
      }
    }

    function Cg(UU, RU, gU) {
      return RU = Qg(RU),
        function(UU, RU) {
          if (RU && ("object" === Kg(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, hg() ? Reflect.construct(RU, gU || [], Qg(UU).constructor) : RU.apply(UU, gU))
    }

    function hg() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (hg = function() {
        return !!UU
      })()
    }

    function Qg(UU) {
      return Qg = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, Qg(UU)
    }

    function eg(UU, RU) {
      return eg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, eg(UU, RU)
    }

    function Wg(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return xg(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || fg(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fg(UU, RU) {
      if (UU) {
        if ("string" === typeof UU) return xg(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        return "Object" === gU && UU.constructor && (gU = UU.constructor.name), "Map" === gU || "Set" === gU ? Array.from(UU) : "Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU) ? xg(UU, RU) : void 0
      }
    }

    function xg(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function mg(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function Ig(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? mg(Object(gU), !0).forEach((function(RU) {
          Jg(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : mg(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function Jg(UU, RU, gU) {
      return (RU = wg(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function wg(UU) {
      var RU = function(UU, RU) {
        if ("object" != Kg(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != Kg(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == Kg(RU) ? RU : RU + ""
    }
    var ng = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      bg = {
        width: "100%",
        height: "100%"
      },
      og = {
        x: 0,
        y: 0
      };

    function Zg(UU) {
      return UU
    }
    var ag = function(UU, RU) {
      var gU = RU.graphicalItems,
        tU = RU.dataStartIndex,
        pU = RU.dataEndIndex,
        EU = (null !== gU && void 0 !== gU ? gU : []).reduce((function(UU, RU) {
          var gU = RU.props.data;
          return gU && gU.length ? [].concat(Wg(UU), Wg(gU)) : UU
        }), []);
      return EU.length > 0 ? EU : UU && UU.length && (0, ZU.v)(tU) && (0, ZU.v)(pU) ? UU.slice(tU, pU + 1) : []
    };

    function Yg(UU) {
      return "number" === UU ? [0, "auto"] : void 0
    }
    var Bg = function(UU, RU, gU, tU) {
        var pU = UU.graphicalItems,
          EU = UU.tooltipAxis,
          PU = ag(RU, UU);
        return gU < 0 || !pU || !pU.length || gU >= PU.length ? null : pU.reduce((function(pU, TU) {
          var qU, KU, cU = null !== (qU = TU.props.data) && void 0 !== qU ? qU : RU;
          if (cU && UU.dataStartIndex + UU.dataEndIndex !== 0 && UU.dataEndIndex - UU.dataStartIndex >= gU && (cU = cU.slice(UU.dataStartIndex, UU.dataEndIndex + 1)), EU.dataKey && !EU.allowDuplicatedCategory) {
            var GU = void 0 === cU ? PU : cU;
            KU = (0, ZU.d)(GU, EU.dataKey, tU)
          } else KU = cU && cU[gU] || PU[gU];
          return KU ? [].concat(Wg(pU), [(0, oU._)(TU, KU)]) : pU
        }), [])
      },
      Vg = function(UU, RU, gU, tU) {
        var pU = tU || {
            x: UU.chartX,
            y: UU.chartY
          },
          EU = function(UU, RU) {
            return "horizontal" === RU ? UU.x : "vertical" === RU ? UU.y : "centric" === RU ? UU.angle : UU.radius
          }(pU, gU),
          PU = UU.orderedTooltipTicks,
          TU = UU.tooltipAxis,
          qU = UU.tooltipTicks,
          KU = (0, oU.f)(EU, PU, qU, TU);
        if (KU >= 0 && qU) {
          var cU = qU[KU] && qU[KU].value,
            GU = Bg(UU, RU, KU, cU),
            jU = function(UU, RU, gU, tU) {
              var pU = RU.find((function(UU) {
                return UU && UU.index === gU
              }));
              if (pU) {
                if ("horizontal" === UU) return {
                  x: pU.coordinate,
                  y: tU.y
                };
                if ("vertical" === UU) return {
                  x: tU.x,
                  y: pU.coordinate
                };
                if ("centric" === UU) {
                  var EU = pU.coordinate,
                    PU = tU.radius;
                  return Ig(Ig(Ig({}, tU), (0, aR.f)(tU.cx, tU.cy, PU, EU)), {}, {
                    angle: EU,
                    radius: PU
                  })
                }
                var TU = pU.coordinate,
                  qU = tU.angle;
                return Ig(Ig(Ig({}, tU), (0, aR.f)(tU.cx, tU.cy, TU, qU)), {}, {
                  angle: qU,
                  radius: TU
                })
              }
              return og
            }(gU, PU, KU, pU);
          return {
            activeTooltipIndex: KU,
            activeLabel: cU,
            activePayload: GU,
            activeCoordinate: jU
          }
        }
        return null
      },
      rg = function(UU, RU) {
        var gU = RU.axes,
          tU = RU.graphicalItems,
          pU = RU.axisType,
          PU = RU.axisIdKey,
          TU = RU.stackGroups,
          qU = RU.dataStartIndex,
          cU = RU.dataEndIndex,
          GU = UU.layout,
          jU = UU.children,
          uU = UU.stackOffset,
          CU = (0, oU.db)(GU, pU);
        return gU.reduce((function(RU, gU) {
          var hU, QU = void 0 !== gU.type.defaultProps ? Ig(Ig({}, gU.type.defaultProps), gU.props) : gU.props,
            eU = QU.type,
            WU = QU.dataKey,
            fU = QU.allowDataOverflow,
            xU = QU.allowDuplicatedCategory,
            mU = QU.scale,
            IU = QU.ticks,
            JU = QU.includeHidden,
            wU = QU[PU];
          if (RU[wU]) return RU;
          var nU, bU, aU, YU = ag(UU.data, {
              graphicalItems: tU.filter((function(UU) {
                var RU;
                return (PU in UU.props ? UU.props[PU] : null === (RU = UU.type.defaultProps) || void 0 === RU ? void 0 : RU[PU]) === wU
              })),
              dataStartIndex: qU,
              dataEndIndex: cU
            }),
            BU = YU.length;
          (function(UU, RU, gU) {
            if ("number" === gU && !0 === RU && Array.isArray(UU)) {
              var tU = null === UU || void 0 === UU ? void 0 : UU[0],
                pU = null === UU || void 0 === UU ? void 0 : UU[1];
              if (tU && pU && (0, ZU.v)(tU) && (0, ZU.v)(pU)) return !0
            }
            return !1
          })(QU.domain, fU, eU) && (nU = (0, oU.ob)(QU.domain, null, fU), !CU || "number" !== eU && "auto" === mU || (aU = (0, oU.C)(YU, WU, "category")));
          var VU = Yg(eU);
          if (!nU || 0 === nU.length) {
            var rU, XU = null !== (rU = QU.domain) && void 0 !== rU ? rU : VU;
            if (WU) {
              if (nU = (0, oU.C)(YU, WU, eU), "category" === eU && CU) {
                var vU = (0, ZU.n)(nU);
                xU && vU ? (bU = nU, nU = KU()(0, BU)) : xU || (nU = (0, oU.gb)(XU, nU, gU).reduce((function(UU, RU) {
                  return UU.indexOf(RU) >= 0 ? UU : [].concat(Wg(UU), [RU])
                }), []))
              } else if ("category" === eU) nU = xU ? nU.filter((function(UU) {
                return "" !== UU && !EU()(UU)
              })) : (0, oU.gb)(XU, nU, gU).reduce((function(UU, RU) {
                return UU.indexOf(RU) >= 0 || "" === RU || EU()(RU) ? UU : [].concat(Wg(UU), [RU])
              }), []);
              else if ("number" === eU) {
                var dU = (0, oU.ib)(YU, tU.filter((function(UU) {
                  var RU, gU, tU = PU in UU.props ? UU.props[PU] : null === (RU = UU.type.defaultProps) || void 0 === RU ? void 0 : RU[PU],
                    pU = "hide" in UU.props ? UU.props.hide : null === (gU = UU.type.defaultProps) || void 0 === gU ? void 0 : gU.hide;
                  return tU === wU && (JU || !pU)
                })), WU, pU, GU);
                dU && (nU = dU)
              }!CU || "number" !== eU && "auto" === mU || (aU = (0, oU.C)(YU, WU, "category"))
            } else nU = CU ? KU()(0, BU) : TU && TU[wU] && TU[wU].hasStack && "number" === eU ? "expand" === uU ? [0, 1] : (0, oU.J)(TU[wU].stackGroups, qU, cU) : (0, oU.G)(YU, tU.filter((function(UU) {
              var RU = PU in UU.props ? UU.props[PU] : UU.type.defaultProps[PU],
                gU = "hide" in UU.props ? UU.props.hide : UU.type.defaultProps.hide;
              return RU === wU && (JU || !gU)
            })), eU, GU, !0);
            if ("number" === eU) nU = ZR(jU, nU, wU, pU, IU), XU && (nU = (0, oU.ob)(XU, nU, fU));
            else if ("category" === eU && XU) {
              var HU = XU;
              nU.every((function(UU) {
                return HU.indexOf(UU) >= 0
              })) && (nU = HU)
            }
          }
          return Ig(Ig({}, RU), {}, Jg({}, wU, Ig(Ig({}, QU), {}, {
            axisType: pU,
            domain: nU,
            categoricalDomain: aU,
            duplicateDomain: bU,
            originalDomain: null !== (hU = QU.domain) && void 0 !== hU ? hU : VU,
            isCategorical: CU,
            layout: GU
          })))
        }), {})
      },
      Xg = function(UU, RU) {
        var gU = RU.axisType,
          tU = void 0 === gU ? "xAxis" : gU,
          pU = RU.AxisComp,
          EU = RU.graphicalItems,
          PU = RU.stackGroups,
          TU = RU.dataStartIndex,
          qU = RU.dataEndIndex,
          cU = UU.children,
          jU = "".concat(tU, "Id"),
          uU = (0, wU.f)(cU, pU),
          CU = {};
        return uU && uU.length ? CU = rg(UU, {
          axes: uU,
          graphicalItems: EU,
          axisType: tU,
          axisIdKey: jU,
          stackGroups: PU,
          dataStartIndex: TU,
          dataEndIndex: qU
        }) : EU && EU.length && (CU = function(UU, RU) {
          var gU = RU.graphicalItems,
            tU = RU.Axis,
            pU = RU.axisType,
            EU = RU.axisIdKey,
            PU = RU.stackGroups,
            TU = RU.dataStartIndex,
            qU = RU.dataEndIndex,
            cU = UU.layout,
            jU = UU.children,
            uU = ag(UU.data, {
              graphicalItems: gU,
              dataStartIndex: TU,
              dataEndIndex: qU
            }),
            CU = uU.length,
            hU = (0, oU.db)(cU, pU),
            QU = -1;
          return gU.reduce((function(UU, RU) {
            var eU, WU = (void 0 !== RU.type.defaultProps ? Ig(Ig({}, RU.type.defaultProps), RU.props) : RU.props)[EU],
              fU = Yg("number");
            return UU[WU] ? UU : (QU++, hU ? eU = KU()(0, CU) : PU && PU[WU] && PU[WU].hasStack ? (eU = (0, oU.J)(PU[WU].stackGroups, TU, qU), eU = ZR(jU, eU, WU, pU)) : (eU = (0, oU.ob)(fU, (0, oU.G)(uU, gU.filter((function(UU) {
              var RU, gU, tU = EU in UU.props ? UU.props[EU] : null === (RU = UU.type.defaultProps) || void 0 === RU ? void 0 : RU[EU],
                pU = "hide" in UU.props ? UU.props.hide : null === (gU = UU.type.defaultProps) || void 0 === gU ? void 0 : gU.hide;
              return tU === WU && !pU
            })), "number", cU), tU.defaultProps.allowDataOverflow), eU = ZR(jU, eU, WU, pU)), Ig(Ig({}, UU), {}, Jg({}, WU, Ig(Ig({
              axisType: pU
            }, tU.defaultProps), {}, {
              hide: !0,
              orientation: GU()(ng, "".concat(pU, ".").concat(QU % 2), null),
              domain: eU,
              originalDomain: fU,
              isCategorical: hU,
              layout: cU
            }))))
          }), {})
        }(UU, {
          Axis: pU,
          graphicalItems: EU,
          axisType: tU,
          axisIdKey: jU,
          stackGroups: PU,
          dataStartIndex: TU,
          dataEndIndex: qU
        })), CU
      },
      vg = function(UU) {
        var RU = UU.children,
          gU = UU.defaultShowTooltip,
          tU = (0, wU.g)(RU, MU),
          pU = 0,
          EU = 0;
        return UU.data && 0 !== UU.data.length && (EU = UU.data.length - 1), tU && tU.props && (tU.props.startIndex >= 0 && (pU = tU.props.startIndex), tU.props.endIndex >= 0 && (EU = tU.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: pU,
          dataEndIndex: EU,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(gU)
        }
      },
      dg = function(UU) {
        return "horizontal" === UU ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === UU ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === UU ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      Hg = function(UU, RU) {
        return "xAxis" === RU ? UU[RU].width : "yAxis" === RU ? UU[RU].height : void 0
      },
      Sg = function(UU) {
        var RU = UU.chartName,
          gU = UU.GraphicalChild,
          pU = UU.defaultTooltipEventType,
          PU = void 0 === pU ? "axis" : pU,
          qU = UU.validateTooltipEventTypes,
          KU = void 0 === qU ? ["axis"] : qU,
          cU = UU.axisComponents,
          jU = UU.legendContent,
          CU = UU.formatAxisMap,
          nU = UU.defaultProps,
          bU = function(UU, RU) {
            var gU = RU.graphicalItems,
              tU = RU.stackGroups,
              pU = RU.offset,
              PU = RU.updateId,
              TU = RU.dataStartIndex,
              qU = RU.dataEndIndex,
              KU = UU.barSize,
              GU = UU.layout,
              jU = UU.barGap,
              uU = UU.barCategoryGap,
              CU = UU.maxBarSize,
              hU = dg(GU),
              QU = hU.numericAxisName,
              WU = hU.cateAxisName,
              fU = function(UU) {
                return !(!UU || !UU.length) && UU.some((function(UU) {
                  var RU = (0, wU.i)(UU && UU.type);
                  return RU && RU.indexOf("Bar") >= 0
                }))
              }(gU),
              xU = [];
            return gU.forEach((function(gU, hU) {
              var mU = ag(UU.data, {
                  graphicalItems: [gU],
                  dataStartIndex: TU,
                  dataEndIndex: qU
                }),
                IU = void 0 !== gU.type.defaultProps ? Ig(Ig({}, gU.type.defaultProps), gU.props) : gU.props,
                JU = IU.dataKey,
                nU = IU.maxBarSize,
                bU = IU["".concat(QU, "Id")],
                ZU = IU["".concat(WU, "Id")],
                aU = cU.reduce((function(UU, gU) {
                  var tU = RU["".concat(gU.axisType, "Map")],
                    pU = IU["".concat(gU.axisType, "Id")];
                  tU && tU[pU] || "zAxis" === gU.axisType || (0, eU.b)(!1);
                  var EU = tU[pU];
                  return Ig(Ig({}, UU), {}, Jg(Jg({}, gU.axisType, EU), "".concat(gU.axisType, "Ticks"), (0, oU.X)(EU)))
                }), {}),
                YU = aU[WU],
                BU = aU["".concat(WU, "Ticks")],
                VU = tU && tU[bU] && tU[bU].hasStack && (0, oU.T)(gU, tU[bU].stackGroups),
                rU = (0, wU.i)(gU.type).indexOf("Bar") >= 0,
                XU = (0, oU.p)(YU, BU),
                vU = [],
                dU = fU && (0, oU.s)({
                  barSize: KU,
                  stackGroups: tU,
                  totalSize: Hg(aU, WU)
                });
              if (rU) {
                var HU, SU, sU = EU()(nU) ? CU : nU,
                  yU = null !== (HU = null !== (SU = (0, oU.p)(YU, BU, !0)) && void 0 !== SU ? SU : sU) && void 0 !== HU ? HU : 0;
                vU = (0, oU.q)({
                  barGap: jU,
                  barCategoryGap: uU,
                  bandSize: yU !== XU ? yU : XU,
                  sizeList: dU[ZU],
                  maxBarSize: sU
                }), yU !== XU && (vU = vU.map((function(UU) {
                  return Ig(Ig({}, UU), {}, {
                    position: Ig(Ig({}, UU.position), {}, {
                      offset: UU.position.offset - yU / 2
                    })
                  })
                })))
              }
              var kU = gU && gU.type && gU.type.getComposedData;
              kU && xU.push({
                props: Ig(Ig({}, kU(Ig(Ig({}, aU), {}, {
                  displayedData: mU,
                  props: UU,
                  dataKey: JU,
                  item: gU,
                  bandSize: XU,
                  barPosition: vU,
                  offset: pU,
                  stackedData: VU,
                  layout: GU,
                  dataStartIndex: TU,
                  dataEndIndex: qU
                }))), {}, Jg(Jg(Jg({
                  key: gU.key || "item-".concat(hU)
                }, QU, aU[QU]), WU, aU[WU]), "animationId", PU)),
                childIndex: (0, wU.s)(gU, UU.children),
                item: gU
              })
            })), xU
          },
          aU = function(UU, tU) {
            var pU = UU.props,
              EU = UU.dataStartIndex,
              PU = UU.dataEndIndex,
              TU = UU.updateId;
            if (!(0, wU.w)({
                props: pU
              })) return null;
            var qU = pU.children,
              KU = pU.layout,
              jU = pU.stackOffset,
              hU = pU.data,
              QU = pU.reverseStackOrder,
              eU = dg(KU),
              WU = eU.numericAxisName,
              fU = eU.cateAxisName,
              xU = (0, wU.f)(qU, gU),
              IU = (0, oU.P)(hU, xU, "".concat(WU, "Id"), "".concat(fU, "Id"), jU, QU),
              JU = cU.reduce((function(UU, RU) {
                var gU = "".concat(RU.axisType, "Map");
                return Ig(Ig({}, UU), {}, Jg({}, gU, Xg(pU, Ig(Ig({}, RU), {}, {
                  graphicalItems: xU,
                  stackGroups: RU.axisType === WU && IU,
                  dataStartIndex: EU,
                  dataEndIndex: PU
                }))))
              }), {}),
              nU = function(UU, RU) {
                var gU = UU.props,
                  tU = UU.graphicalItems,
                  pU = UU.xAxisMap,
                  EU = void 0 === pU ? {} : pU,
                  PU = UU.yAxisMap,
                  TU = void 0 === PU ? {} : PU,
                  qU = gU.width,
                  KU = gU.height,
                  cU = gU.children,
                  jU = gU.margin || {},
                  uU = (0, wU.g)(cU, MU),
                  CU = (0, wU.g)(cU, mU.b),
                  hU = Object.keys(TU).reduce((function(UU, RU) {
                    var gU = TU[RU],
                      tU = gU.orientation;
                    return gU.mirror || gU.hide ? UU : Ig(Ig({}, UU), {}, Jg({}, tU, UU[tU] + gU.width))
                  }), {
                    left: jU.left || 0,
                    right: jU.right || 0
                  }),
                  QU = Object.keys(EU).reduce((function(UU, RU) {
                    var gU = EU[RU],
                      tU = gU.orientation;
                    return gU.mirror || gU.hide ? UU : Ig(Ig({}, UU), {}, Jg({}, tU, GU()(UU, "".concat(tU)) + gU.height))
                  }), {
                    top: jU.top || 0,
                    bottom: jU.bottom || 0
                  }),
                  eU = Ig(Ig({}, QU), hU),
                  WU = eU.bottom;
                uU && (eU.bottom += uU.props.height || MU.defaultProps.height), CU && RU && (eU = (0, oU.d)(eU, tU, gU, RU));
                var fU = qU - eU.left - eU.right,
                  xU = KU - eU.top - eU.bottom;
                return Ig(Ig({
                  brushBottom: WU
                }, eU), {}, {
                  width: Math.max(fU, 0),
                  height: Math.max(xU, 0)
                })
              }(Ig(Ig({}, JU), {}, {
                props: pU,
                graphicalItems: xU
              }), null === tU || void 0 === tU ? void 0 : tU.legendBBox);
            Object.keys(JU).forEach((function(UU) {
              JU[UU] = CU(pU, JU[UU], nU, UU.replace("Map", ""), RU)
            }));
            var aU = function(UU) {
                var RU = (0, ZU.e)(UU),
                  gU = (0, oU.X)(RU, !1, !0);
                return {
                  tooltipTicks: gU,
                  orderedTooltipTicks: uU()(gU, (function(UU) {
                    return UU.coordinate
                  })),
                  tooltipAxis: RU,
                  tooltipAxisBandSize: (0, oU.p)(RU, gU)
                }
              }(JU["".concat(fU, "Map")]),
              YU = bU(pU, Ig(Ig({}, JU), {}, {
                dataStartIndex: EU,
                dataEndIndex: PU,
                updateId: TU,
                graphicalItems: xU,
                stackGroups: IU,
                offset: nU
              }));
            return Ig(Ig({
              formattedGraphicalItems: YU,
              graphicalItems: xU,
              offset: nU,
              stackGroups: IU
            }, aU), JU)
          },
          YU = function(UU) {
            function gU(UU) {
              var pU, PU, qU;
              return function(UU, RU) {
                if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
              }(this, gU), Jg(qU = Cg(this, gU, [UU]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Jg(qU, "accessibilityManager", new sR), Jg(qU, "handleLegendBBoxUpdate", (function(UU) {
                if (UU) {
                  var RU = qU.state,
                    gU = RU.dataStartIndex,
                    tU = RU.dataEndIndex,
                    pU = RU.updateId;
                  qU.setState(Ig({
                    legendBBox: UU
                  }, aU({
                    props: qU.props,
                    dataStartIndex: gU,
                    dataEndIndex: tU,
                    updateId: pU
                  }, Ig(Ig({}, qU.state), {}, {
                    legendBBox: UU
                  }))))
                }
              })), Jg(qU, "handleReceiveSyncEvent", (function(UU, RU, gU) {
                if (qU.props.syncId === UU) {
                  if (gU === qU.eventEmitterSymbol && "function" !== typeof qU.props.syncMethod) return;
                  qU.applySyncEvent(RU)
                }
              })), Jg(qU, "handleBrushChange", (function(UU) {
                var RU = UU.startIndex,
                  gU = UU.endIndex;
                if (RU !== qU.state.dataStartIndex || gU !== qU.state.dataEndIndex) {
                  var tU = qU.state.updateId;
                  qU.setState((function() {
                    return Ig({
                      dataStartIndex: RU,
                      dataEndIndex: gU
                    }, aU({
                      props: qU.props,
                      dataStartIndex: RU,
                      dataEndIndex: gU,
                      updateId: tU
                    }, qU.state))
                  })), qU.triggerSyncEvent({
                    dataStartIndex: RU,
                    dataEndIndex: gU
                  })
                }
              })), Jg(qU, "handleMouseEnter", (function(UU) {
                var RU = qU.getMouseInfo(UU);
                if (RU) {
                  var gU = Ig(Ig({}, RU), {}, {
                    isTooltipActive: !0
                  });
                  qU.setState(gU), qU.triggerSyncEvent(gU);
                  var tU = qU.props.onMouseEnter;
                  TU()(tU) && tU(gU, UU)
                }
              })), Jg(qU, "triggeredAfterMouseMove", (function(UU) {
                var RU = qU.getMouseInfo(UU),
                  gU = RU ? Ig(Ig({}, RU), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                qU.setState(gU), qU.triggerSyncEvent(gU);
                var tU = qU.props.onMouseMove;
                TU()(tU) && tU(gU, UU)
              })), Jg(qU, "handleItemMouseEnter", (function(UU) {
                qU.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: UU,
                    activePayload: UU.tooltipPayload,
                    activeCoordinate: UU.tooltipPosition || {
                      x: UU.cx,
                      y: UU.cy
                    }
                  }
                }))
              })), Jg(qU, "handleItemMouseLeave", (function() {
                qU.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), Jg(qU, "handleMouseMove", (function(UU) {
                UU.persist(), qU.throttleTriggeredAfterMouseMove(UU)
              })), Jg(qU, "handleMouseLeave", (function(UU) {
                qU.throttleTriggeredAfterMouseMove.cancel();
                var RU = {
                  isTooltipActive: !1
                };
                qU.setState(RU), qU.triggerSyncEvent(RU);
                var gU = qU.props.onMouseLeave;
                TU()(gU) && gU(RU, UU)
              })), Jg(qU, "handleOuterEvent", (function(UU) {
                var RU, gU = (0, wU.j)(UU),
                  tU = GU()(qU.props, "".concat(gU));
                gU && TU()(tU) && tU(null !== (RU = /.*touch.*/i.test(gU) ? qU.getMouseInfo(UU.changedTouches[0]) : qU.getMouseInfo(UU)) && void 0 !== RU ? RU : {}, UU)
              })), Jg(qU, "handleClick", (function(UU) {
                var RU = qU.getMouseInfo(UU);
                if (RU) {
                  var gU = Ig(Ig({}, RU), {}, {
                    isTooltipActive: !0
                  });
                  qU.setState(gU), qU.triggerSyncEvent(gU);
                  var tU = qU.props.onClick;
                  TU()(tU) && tU(gU, UU)
                }
              })), Jg(qU, "handleMouseDown", (function(UU) {
                var RU = qU.props.onMouseDown;
                TU()(RU) && RU(qU.getMouseInfo(UU), UU)
              })), Jg(qU, "handleMouseUp", (function(UU) {
                var RU = qU.props.onMouseUp;
                TU()(RU) && RU(qU.getMouseInfo(UU), UU)
              })), Jg(qU, "handleTouchMove", (function(UU) {
                null != UU.changedTouches && UU.changedTouches.length > 0 && qU.throttleTriggeredAfterMouseMove(UU.changedTouches[0])
              })), Jg(qU, "handleTouchStart", (function(UU) {
                null != UU.changedTouches && UU.changedTouches.length > 0 && qU.handleMouseDown(UU.changedTouches[0])
              })), Jg(qU, "handleTouchEnd", (function(UU) {
                null != UU.changedTouches && UU.changedTouches.length > 0 && qU.handleMouseUp(UU.changedTouches[0])
              })), Jg(qU, "handleDoubleClick", (function(UU) {
                var RU = qU.props.onDoubleClick;
                TU()(RU) && RU(qU.getMouseInfo(UU), UU)
              })), Jg(qU, "handleContextMenu", (function(UU) {
                var RU = qU.props.onContextMenu;
                TU()(RU) && RU(qU.getMouseInfo(UU), UU)
              })), Jg(qU, "triggerSyncEvent", (function(UU) {
                void 0 !== qU.props.syncId && VR.emit(rR, qU.props.syncId, UU, qU.eventEmitterSymbol)
              })), Jg(qU, "applySyncEvent", (function(UU) {
                var RU = qU.props,
                  gU = RU.layout,
                  tU = RU.syncMethod,
                  pU = qU.state.updateId,
                  EU = UU.dataStartIndex,
                  PU = UU.dataEndIndex;
                if (void 0 !== UU.dataStartIndex || void 0 !== UU.dataEndIndex) qU.setState(Ig({
                  dataStartIndex: EU,
                  dataEndIndex: PU
                }, aU({
                  props: qU.props,
                  dataStartIndex: EU,
                  dataEndIndex: PU,
                  updateId: pU
                }, qU.state)));
                else if (void 0 !== UU.activeTooltipIndex) {
                  var TU = UU.chartX,
                    KU = UU.chartY,
                    cU = UU.activeTooltipIndex,
                    GU = qU.state,
                    jU = GU.offset,
                    uU = GU.tooltipTicks;
                  if (!jU) return;
                  if ("function" === typeof tU) cU = tU(uU, UU);
                  else if ("value" === tU) {
                    cU = -1;
                    for (var CU = 0; CU < uU.length; CU++)
                      if (uU[CU].value === UU.activeLabel) {
                        cU = CU;
                        break
                      }
                  }
                  var hU = Ig(Ig({}, jU), {}, {
                      x: jU.left,
                      y: jU.top
                    }),
                    QU = Math.min(TU, hU.x + hU.width),
                    eU = Math.min(KU, hU.y + hU.height),
                    WU = uU[cU] && uU[cU].value,
                    fU = Bg(qU.state, qU.props.data, cU),
                    xU = uU[cU] ? {
                      x: "horizontal" === gU ? uU[cU].coordinate : QU,
                      y: "horizontal" === gU ? eU : uU[cU].coordinate
                    } : og;
                  qU.setState(Ig(Ig({}, UU), {}, {
                    activeLabel: WU,
                    activeCoordinate: xU,
                    activePayload: fU,
                    activeTooltipIndex: cU
                  }))
                } else qU.setState(UU)
              })), Jg(qU, "renderCursor", (function(UU) {
                var gU, pU = qU.state,
                  EU = pU.isTooltipActive,
                  PU = pU.activeCoordinate,
                  TU = pU.activePayload,
                  KU = pU.offset,
                  cU = pU.activeTooltipIndex,
                  GU = pU.tooltipAxisBandSize,
                  jU = qU.getTooltipEventType(),
                  uU = null !== (gU = UU.props.active) && void 0 !== gU ? gU : EU,
                  CU = qU.props.layout,
                  hU = UU.key || "_recharts-cursor";
                return tU.createElement(Eg, {
                  key: hU,
                  activeCoordinate: PU,
                  activePayload: TU,
                  activeTooltipIndex: cU,
                  chartName: RU,
                  element: UU,
                  isActive: uU,
                  layout: CU,
                  offset: KU,
                  tooltipAxisBandSize: GU,
                  tooltipEventType: jU
                })
              })), Jg(qU, "renderPolarAxis", (function(UU, RU, gU) {
                var pU = GU()(UU, "type.axisType"),
                  EU = GU()(qU.state, "".concat(pU, "Map")),
                  PU = UU.type.defaultProps,
                  TU = void 0 !== PU ? Ig(Ig({}, PU), UU.props) : UU.props,
                  KU = EU && EU[TU["".concat(pU, "Id")]];
                return (0, tU.cloneElement)(UU, Ig(Ig({}, KU), {}, {
                  className: (0, QU.e)(pU, KU.className),
                  key: UU.key || "".concat(RU, "-").concat(gU),
                  ticks: (0, oU.X)(KU, !0)
                }))
              })), Jg(qU, "renderPolarGrid", (function(UU) {
                var RU = UU.props,
                  gU = RU.radialLines,
                  pU = RU.polarAngles,
                  EU = RU.polarRadius,
                  PU = qU.state,
                  TU = PU.radiusAxisMap,
                  KU = PU.angleAxisMap,
                  cU = (0, ZU.e)(TU),
                  GU = (0, ZU.e)(KU),
                  jU = GU.cx,
                  uU = GU.cy,
                  CU = GU.innerRadius,
                  hU = GU.outerRadius;
                return (0, tU.cloneElement)(UU, {
                  polarAngles: Array.isArray(pU) ? pU : (0, oU.X)(GU, !0).map((function(UU) {
                    return UU.coordinate
                  })),
                  polarRadius: Array.isArray(EU) ? EU : (0, oU.X)(cU, !0).map((function(UU) {
                    return UU.coordinate
                  })),
                  cx: jU,
                  cy: uU,
                  innerRadius: CU,
                  outerRadius: hU,
                  key: UU.key || "polar-grid",
                  radialLines: gU
                })
              })), Jg(qU, "renderLegend", (function() {
                var UU = qU.state.formattedGraphicalItems,
                  RU = qU.props,
                  gU = RU.children,
                  pU = RU.width,
                  EU = RU.height,
                  PU = qU.props.margin || {},
                  TU = pU - (PU.left || 0) - (PU.right || 0),
                  KU = (0, LU.c)({
                    children: gU,
                    formattedGraphicalItems: UU,
                    legendWidth: TU,
                    legendContent: jU
                  });
                if (!KU) return null;
                var cU = KU.item,
                  GU = jg(KU, Tg);
                return (0, tU.cloneElement)(cU, Ig(Ig({}, GU), {}, {
                  chartWidth: pU,
                  chartHeight: EU,
                  margin: PU,
                  onBBoxUpdate: qU.handleLegendBBoxUpdate
                }))
              })), Jg(qU, "renderTooltip", (function() {
                var UU, RU = qU.props,
                  gU = RU.children,
                  pU = RU.accessibilityLayer,
                  EU = (0, wU.g)(gU, xU.e);
                if (!EU) return null;
                var PU = qU.state,
                  TU = PU.isTooltipActive,
                  KU = PU.activeCoordinate,
                  cU = PU.activePayload,
                  GU = PU.activeLabel,
                  jU = PU.offset,
                  uU = null !== (UU = EU.props.active) && void 0 !== UU ? UU : TU;
                return (0, tU.cloneElement)(EU, {
                  viewBox: Ig(Ig({}, jU), {}, {
                    x: jU.left,
                    y: jU.top
                  }),
                  active: uU,
                  label: GU,
                  payload: uU ? cU : [],
                  coordinate: KU,
                  accessibilityLayer: pU
                })
              })), Jg(qU, "renderBrush", (function(UU) {
                var RU = qU.props,
                  gU = RU.margin,
                  pU = RU.data,
                  EU = qU.state,
                  PU = EU.offset,
                  TU = EU.dataStartIndex,
                  KU = EU.dataEndIndex,
                  cU = EU.updateId;
                return (0, tU.cloneElement)(UU, {
                  key: UU.key || "_recharts-brush",
                  onChange: (0, oU.l)(qU.handleBrushChange, UU.props.onChange),
                  data: pU,
                  x: (0, ZU.v)(UU.props.x) ? UU.props.x : PU.left,
                  y: (0, ZU.v)(UU.props.y) ? UU.props.y : PU.top + PU.height + PU.brushBottom - (gU.bottom || 0),
                  width: (0, ZU.v)(UU.props.width) ? UU.props.width : PU.width,
                  startIndex: TU,
                  endIndex: KU,
                  updateId: "brush-".concat(cU)
                })
              })), Jg(qU, "renderReferenceElement", (function(UU, RU, gU) {
                if (!UU) return null;
                var pU = qU.clipPathId,
                  EU = qU.state,
                  PU = EU.xAxisMap,
                  TU = EU.yAxisMap,
                  KU = EU.offset,
                  cU = UU.type.defaultProps || {},
                  GU = UU.props,
                  jU = GU.xAxisId,
                  uU = void 0 === jU ? cU.xAxisId : jU,
                  CU = GU.yAxisId,
                  hU = void 0 === CU ? cU.yAxisId : CU;
                return (0, tU.cloneElement)(UU, {
                  key: UU.key || "".concat(RU, "-").concat(gU),
                  xAxis: PU[uU],
                  yAxis: TU[hU],
                  viewBox: {
                    x: KU.left,
                    y: KU.top,
                    width: KU.width,
                    height: KU.height
                  },
                  clipPathId: pU
                })
              })), Jg(qU, "renderActivePoints", (function(UU) {
                var RU = UU.item,
                  tU = UU.activePoint,
                  pU = UU.basePoint,
                  EU = UU.childIndex,
                  PU = UU.isRange,
                  TU = [],
                  qU = RU.props.key,
                  KU = void 0 !== RU.item.type.defaultProps ? Ig(Ig({}, RU.item.type.defaultProps), RU.item.props) : RU.item.props,
                  cU = KU.activeDot,
                  GU = Ig(Ig({
                    index: EU,
                    dataKey: KU.dataKey,
                    cx: tU.x,
                    cy: tU.y,
                    r: 4,
                    fill: (0, oU.M)(RU.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: tU.payload,
                    value: tU.value
                  }, (0, wU.b)(cU, !1)), (0, XR.o)(cU));
                return TU.push(gU.renderActiveDot(cU, GU, "".concat(qU, "-activePoint-").concat(EU))), pU ? TU.push(gU.renderActiveDot(cU, Ig(Ig({}, GU), {}, {
                  cx: pU.x,
                  cy: pU.y
                }), "".concat(qU, "-basePoint-").concat(EU))) : PU && TU.push(null), TU
              })), Jg(qU, "renderGraphicChild", (function(UU, RU, gU) {
                var pU = qU.filterFormatItem(UU, RU, gU);
                if (!pU) return null;
                var PU = qU.getTooltipEventType(),
                  TU = qU.state,
                  KU = TU.isTooltipActive,
                  cU = TU.tooltipAxis,
                  GU = TU.activeTooltipIndex,
                  jU = TU.activeLabel,
                  uU = qU.props.children,
                  CU = (0, wU.g)(uU, xU.e),
                  hU = pU.props,
                  QU = hU.points,
                  eU = hU.isRange,
                  WU = hU.baseLine,
                  fU = void 0 !== pU.item.type.defaultProps ? Ig(Ig({}, pU.item.type.defaultProps), pU.item.props) : pU.item.props,
                  mU = fU.activeDot,
                  IU = fU.hide,
                  JU = fU.activeBar,
                  nU = fU.activeShape,
                  bU = Boolean(!IU && KU && CU && (mU || JU || nU)),
                  aU = {};
                "axis" !== PU && CU && "click" === CU.props.trigger ? aU = {
                  onClick: (0, oU.l)(qU.handleItemMouseEnter, UU.props.onClick)
                } : "axis" !== PU && (aU = {
                  onMouseLeave: (0, oU.l)(qU.handleItemMouseLeave, UU.props.onMouseLeave),
                  onMouseEnter: (0, oU.l)(qU.handleItemMouseEnter, UU.props.onMouseEnter)
                });
                var YU = (0, tU.cloneElement)(UU, Ig(Ig({}, pU.props), aU));
                if (bU) {
                  if (!(GU >= 0)) {
                    var BU, VU = (null !== (BU = qU.getItemByXY(qU.state.activeCoordinate)) && void 0 !== BU ? BU : {
                        graphicalItem: YU
                      }).graphicalItem,
                      rU = VU.item,
                      XU = void 0 === rU ? UU : rU,
                      vU = VU.childIndex,
                      dU = Ig(Ig(Ig({}, pU.props), aU), {}, {
                        activeIndex: vU
                      });
                    return [(0, tU.cloneElement)(XU, dU), null, null]
                  }
                  var HU, SU;
                  if (cU.dataKey && !cU.allowDuplicatedCategory) {
                    var sU = "function" === typeof cU.dataKey ? function(UU) {
                      return "function" === typeof cU.dataKey ? cU.dataKey(UU.payload) : null
                    } : "payload.".concat(cU.dataKey.toString());
                    HU = (0, ZU.d)(QU, sU, jU), SU = eU && WU && (0, ZU.d)(WU, sU, jU)
                  } else HU = null === QU || void 0 === QU ? void 0 : QU[GU], SU = eU && WU && WU[GU];
                  if (nU || JU) {
                    var yU = void 0 !== UU.props.activeIndex ? UU.props.activeIndex : GU;
                    return [(0, tU.cloneElement)(UU, Ig(Ig(Ig({}, pU.props), aU), {}, {
                      activeIndex: yU
                    })), null, null]
                  }
                  if (!EU()(HU)) return [YU].concat(Wg(qU.renderActivePoints({
                    item: pU,
                    activePoint: HU,
                    basePoint: SU,
                    childIndex: GU,
                    isRange: eU
                  })))
                }
                return eU ? [YU, null, null] : [YU, null]
              })), Jg(qU, "renderCustomized", (function(UU, RU, gU) {
                return (0, tU.cloneElement)(UU, Ig(Ig({
                  key: "recharts-customized-".concat(gU)
                }, qU.props), qU.state))
              })), Jg(qU, "renderMap", {
                CartesianGrid: {
                  handler: Zg,
                  once: !0
                },
                ReferenceArea: {
                  handler: qU.renderReferenceElement
                },
                ReferenceLine: {
                  handler: Zg
                },
                ReferenceDot: {
                  handler: qU.renderReferenceElement
                },
                XAxis: {
                  handler: Zg
                },
                YAxis: {
                  handler: Zg
                },
                Brush: {
                  handler: qU.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: qU.renderGraphicChild
                },
                Line: {
                  handler: qU.renderGraphicChild
                },
                Area: {
                  handler: qU.renderGraphicChild
                },
                Radar: {
                  handler: qU.renderGraphicChild
                },
                RadialBar: {
                  handler: qU.renderGraphicChild
                },
                Scatter: {
                  handler: qU.renderGraphicChild
                },
                Pie: {
                  handler: qU.renderGraphicChild
                },
                Funnel: {
                  handler: qU.renderGraphicChild
                },
                Tooltip: {
                  handler: qU.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: qU.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: qU.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: qU.renderPolarAxis
                },
                Customized: {
                  handler: qU.renderCustomized
                }
              }), qU.clipPathId = "".concat(null !== (pU = UU.id) && void 0 !== pU ? pU : (0, ZU.C)("recharts"), "-clip"), qU.throttleTriggeredAfterMouseMove = hU()(qU.triggeredAfterMouseMove, null !== (PU = UU.throttleDelay) && void 0 !== PU ? PU : 1e3 / 60), qU.state = {}, qU
            }
            return function(UU, RU) {
              if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
              UU.prototype = Object.create(RU && RU.prototype, {
                constructor: {
                  value: UU,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(UU, "prototype", {
                writable: !1
              }), RU && eg(UU, RU)
            }(gU, UU), pU = gU, qU = [{
              key: "componentDidMount",
              value: function() {
                var UU, RU;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (UU = this.props.margin.left) && void 0 !== UU ? UU : 0,
                    top: null !== (RU = this.props.margin.top) && void 0 !== RU ? RU : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var UU = this.props,
                  RU = UU.children,
                  gU = UU.data,
                  tU = UU.height,
                  pU = UU.layout,
                  EU = (0, wU.g)(RU, xU.e);
                if (EU) {
                  var PU = EU.props.defaultIndex;
                  if (!("number" !== typeof PU || PU < 0 || PU > this.state.tooltipTicks.length - 1)) {
                    var TU = this.state.tooltipTicks[PU] && this.state.tooltipTicks[PU].value,
                      qU = Bg(this.state, gU, PU, TU),
                      KU = this.state.tooltipTicks[PU].coordinate,
                      cU = (this.state.offset.top + tU) / 2,
                      GU = "horizontal" === pU ? {
                        x: KU,
                        y: cU
                      } : {
                        y: KU,
                        x: cU
                      },
                      jU = this.state.formattedGraphicalItems.find((function(UU) {
                        return "Scatter" === UU.item.type.name
                      }));
                    jU && (GU = Ig(Ig({}, GU), jU.props.points[PU].tooltipPosition), qU = jU.props.points[PU].tooltipPayload);
                    var uU = {
                      activeTooltipIndex: PU,
                      isTooltipActive: !0,
                      activeLabel: TU,
                      activePayload: qU,
                      activeCoordinate: GU
                    };
                    this.setState(uU), this.renderCursor(EU), this.accessibilityManager.setIndex(PU)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(UU, RU) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== RU.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== UU.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== UU.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (gU = this.props.margin.left) && void 0 !== gU ? gU : 0,
                    top: null !== (tU = this.props.margin.top) && void 0 !== tU ? tU : 0
                  }
                }), null) : null;
                var gU, tU
              }
            }, {
              key: "componentDidUpdate",
              value: function(UU) {
                (0, wU.q)([(0, wU.g)(UU.children, xU.e)], [(0, wU.g)(this.props.children, xU.e)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var UU = (0, wU.g)(this.props.children, xU.e);
                if (UU && "boolean" === typeof UU.props.shared) {
                  var RU = UU.props.shared ? "axis" : "item";
                  return KU.indexOf(RU) >= 0 ? RU : PU
                }
                return PU
              }
            }, {
              key: "getMouseInfo",
              value: function(UU) {
                if (!this.container) return null;
                var RU = this.container,
                  gU = RU.getBoundingClientRect(),
                  tU = (0, DU.d)(gU),
                  pU = {
                    chartX: Math.round(UU.pageX - tU.left),
                    chartY: Math.round(UU.pageY - tU.top)
                  },
                  EU = gU.width / RU.offsetWidth || 1,
                  PU = this.inRange(pU.chartX, pU.chartY, EU);
                if (!PU) return null;
                var TU = this.state,
                  qU = TU.xAxisMap,
                  KU = TU.yAxisMap,
                  cU = this.getTooltipEventType(),
                  GU = Vg(this.state, this.props.data, this.props.layout, PU);
                if ("axis" !== cU && qU && KU) {
                  var jU = (0, ZU.e)(qU).scale,
                    uU = (0, ZU.e)(KU).scale,
                    CU = jU && jU.invert ? jU.invert(pU.chartX) : null,
                    hU = uU && uU.invert ? uU.invert(pU.chartY) : null;
                  return Ig(Ig({}, pU), {}, {
                    xValue: CU,
                    yValue: hU
                  }, GU)
                }
                return GU ? Ig(Ig({}, pU), GU) : null
              }
            }, {
              key: "inRange",
              value: function(UU, RU) {
                var gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  tU = this.props.layout,
                  pU = UU / gU,
                  EU = RU / gU;
                if ("horizontal" === tU || "vertical" === tU) {
                  var PU = this.state.offset;
                  return pU >= PU.left && pU <= PU.left + PU.width && EU >= PU.top && EU <= PU.top + PU.height ? {
                    x: pU,
                    y: EU
                  } : null
                }
                var TU = this.state,
                  qU = TU.angleAxisMap,
                  KU = TU.radiusAxisMap;
                if (qU && KU) {
                  var cU = (0, ZU.e)(qU);
                  return (0, aR.e)({
                    x: pU,
                    y: EU
                  }, cU)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var UU = this.props.children,
                  RU = this.getTooltipEventType(),
                  gU = (0, wU.g)(UU, xU.e),
                  tU = {};
                return gU && "axis" === RU && (tU = "click" === gU.props.trigger ? {
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
                }), Ig(Ig({}, (0, XR.o)(this.props, this.handleOuterEvent)), tU)
              }
            }, {
              key: "addListener",
              value: function() {
                VR.on(rR, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                VR.removeListener(rR, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(UU, RU, gU) {
                for (var tU = this.state.formattedGraphicalItems, pU = 0, EU = tU.length; pU < EU; pU++) {
                  var PU = tU[pU];
                  if (PU.item === UU || PU.props.key === UU.key || RU === (0, wU.i)(PU.item.type) && gU === PU.childIndex) return PU
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var UU = this.clipPathId,
                  RU = this.state.offset,
                  gU = RU.left,
                  pU = RU.top,
                  EU = RU.height,
                  PU = RU.width;
                return tU.createElement("defs", null, tU.createElement("clipPath", {
                  id: UU
                }, tU.createElement("rect", {
                  x: gU,
                  y: pU,
                  height: EU,
                  width: PU
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var UU = this.state.xAxisMap;
                return UU ? Object.entries(UU).reduce((function(UU, RU) {
                  var gU = Gg(RU, 2),
                    tU = gU[0],
                    pU = gU[1];
                  return Ig(Ig({}, UU), {}, Jg({}, tU, pU.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var UU = this.state.yAxisMap;
                return UU ? Object.entries(UU).reduce((function(UU, RU) {
                  var gU = Gg(RU, 2),
                    tU = gU[0],
                    pU = gU[1];
                  return Ig(Ig({}, UU), {}, Jg({}, tU, pU.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(UU) {
                var RU;
                return null === (RU = this.state.xAxisMap) || void 0 === RU || null === (RU = RU[UU]) || void 0 === RU ? void 0 : RU.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(UU) {
                var RU;
                return null === (RU = this.state.yAxisMap) || void 0 === RU || null === (RU = RU[UU]) || void 0 === RU ? void 0 : RU.scale
              }
            }, {
              key: "getItemByXY",
              value: function(UU) {
                var RU = this.state,
                  gU = RU.formattedGraphicalItems,
                  tU = RU.activeItem;
                if (gU && gU.length)
                  for (var pU = 0, EU = gU.length; pU < EU; pU++) {
                    var PU = gU[pU],
                      TU = PU.props,
                      qU = PU.item,
                      KU = void 0 !== qU.type.defaultProps ? Ig(Ig({}, qU.type.defaultProps), qU.props) : qU.props,
                      cU = (0, wU.i)(qU.type);
                    if ("Bar" === cU) {
                      var GU = (TU.data || []).find((function(RU) {
                        return (0, JU.d)(UU, RU)
                      }));
                      if (GU) return {
                        graphicalItem: PU,
                        payload: GU
                      }
                    } else if ("RadialBar" === cU) {
                      var jU = (TU.data || []).find((function(RU) {
                        return (0, aR.e)(UU, RU)
                      }));
                      if (jU) return {
                        graphicalItem: PU,
                        payload: jU
                      }
                    } else if ((0, yR.j)(PU, tU) || (0, yR.l)(PU, tU) || (0, yR.m)(PU, tU)) {
                      var uU = (0, yR.f)({
                          graphicalItem: PU,
                          activeTooltipItem: tU,
                          itemData: KU.data
                        }),
                        CU = void 0 === KU.activeIndex ? uU : KU.activeIndex;
                      return {
                        graphicalItem: Ig(Ig({}, PU), {}, {
                          childIndex: CU
                        }),
                        payload: (0, yR.m)(PU, tU) ? KU.data[uU] : PU.props.data[uU]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var UU = this;
                if (!(0, wU.w)(this)) return null;
                var RU, gU, pU = this.props,
                  EU = pU.children,
                  PU = pU.className,
                  TU = pU.width,
                  qU = pU.height,
                  KU = pU.style,
                  cU = pU.compact,
                  GU = pU.title,
                  jU = pU.desc,
                  uU = jg(pU, qg),
                  CU = (0, wU.b)(uU, !1);
                if (cU) return tU.createElement(Pg.e, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, tU.createElement(WU.b, cg({}, CU, {
                  width: TU,
                  height: qU,
                  title: GU,
                  desc: jU
                }), this.renderClipPath(), (0, wU.t)(EU, this.renderMap)));
                this.props.accessibilityLayer && (CU.tabIndex = null !== (RU = this.props.tabIndex) && void 0 !== RU ? RU : 0, CU.role = null !== (gU = this.props.role) && void 0 !== gU ? gU : "application", CU.onKeyDown = function(RU) {
                  UU.accessibilityManager.keyboardEvent(RU)
                }, CU.onFocus = function() {
                  UU.accessibilityManager.focus()
                });
                var hU = this.parseEventsOfWrapper();
                return tU.createElement(Pg.e, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, tU.createElement("div", cg({
                  className: (0, QU.e)("recharts-wrapper", PU),
                  style: Ig({
                    position: "relative",
                    cursor: "default",
                    width: TU,
                    height: qU
                  }, KU)
                }, hU, {
                  ref: function(RU) {
                    UU.container = RU
                  }
                }), tU.createElement(WU.b, cg({}, CU, {
                  width: TU,
                  height: qU,
                  title: GU,
                  desc: jU,
                  style: bg
                }), this.renderClipPath(), (0, wU.t)(EU, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], qU && ug(pU.prototype, qU), cU && ug(pU, cU), Object.defineProperty(pU, "prototype", {
              writable: !1
            }), pU;
            var pU, qU, cU
          }(tU.Component);
        Jg(YU, "displayName", RU), Jg(YU, "defaultProps", Ig({
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
        }, nU)), Jg(YU, "getDerivedStateFromProps", (function(UU, RU) {
          var gU = UU.dataKey,
            tU = UU.data,
            pU = UU.children,
            PU = UU.width,
            TU = UU.height,
            qU = UU.layout,
            KU = UU.stackOffset,
            cU = UU.margin,
            GU = RU.dataStartIndex,
            jU = RU.dataEndIndex;
          if (void 0 === RU.updateId) {
            var uU = vg(UU);
            return Ig(Ig(Ig({}, uU), {}, {
              updateId: 0
            }, aU(Ig(Ig({
              props: UU
            }, uU), {}, {
              updateId: 0
            }), RU)), {}, {
              prevDataKey: gU,
              prevData: tU,
              prevWidth: PU,
              prevHeight: TU,
              prevLayout: qU,
              prevStackOffset: KU,
              prevMargin: cU,
              prevChildren: pU
            })
          }
          if (gU !== RU.prevDataKey || tU !== RU.prevData || PU !== RU.prevWidth || TU !== RU.prevHeight || qU !== RU.prevLayout || KU !== RU.prevStackOffset || !(0, YR.c)(cU, RU.prevMargin)) {
            var CU = vg(UU),
              hU = {
                chartX: RU.chartX,
                chartY: RU.chartY,
                isTooltipActive: RU.isTooltipActive
              },
              QU = Ig(Ig({}, Vg(RU, tU, qU)), {}, {
                updateId: RU.updateId + 1
              }),
              eU = Ig(Ig(Ig({}, CU), hU), QU);
            return Ig(Ig(Ig({}, eU), aU(Ig({
              props: UU
            }, eU), RU)), {}, {
              prevDataKey: gU,
              prevData: tU,
              prevWidth: PU,
              prevHeight: TU,
              prevLayout: qU,
              prevStackOffset: KU,
              prevMargin: cU,
              prevChildren: pU
            })
          }
          if (!(0, wU.q)(pU, RU.prevChildren)) {
            var WU, fU, xU, mU, IU = (0, wU.g)(pU, MU),
              JU = IU && null !== (WU = null === (fU = IU.props) || void 0 === fU ? void 0 : fU.startIndex) && void 0 !== WU ? WU : GU,
              nU = IU && null !== (xU = null === (mU = IU.props) || void 0 === mU ? void 0 : mU.endIndex) && void 0 !== xU ? xU : jU,
              bU = JU !== GU || nU !== jU,
              oU = !EU()(tU) && !bU ? RU.updateId : RU.updateId + 1;
            return Ig(Ig({
              updateId: oU
            }, aU(Ig(Ig({
              props: UU
            }, RU), {}, {
              updateId: oU,
              dataStartIndex: JU,
              dataEndIndex: nU
            }), RU)), {}, {
              prevChildren: pU,
              dataStartIndex: JU,
              dataEndIndex: nU
            })
          }
          return null
        })), Jg(YU, "renderActiveDot", (function(UU, RU, gU) {
          var pU;
          return pU = (0, tU.isValidElement)(UU) ? (0, tU.cloneElement)(UU, RU) : TU()(UU) ? UU(RU) : tU.createElement(IU.c, RU), tU.createElement(fU.e, {
            className: "recharts-active-dot",
            key: gU
          }, pU)
        }));
        var BU = (0, tU.forwardRef)((function(UU, RU) {
          return tU.createElement(YU, cg({}, UU, {
            ref: RU
          }))
        }));
        return BU.displayName = YU.displayName, BU
      }
  },
  5955: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    var tU = function(UU) {
      return null
    };
    tU.displayName = "Cell"
  },
  5899: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => aU
    });
    var tU = gU(56),
      pU = gU(5087),
      EU = gU.n(pU),
      PU = gU(4921),
      TU = gU.n(PU),
      qU = gU(4750),
      KU = gU.n(qU),
      cU = gU(4733),
      GU = gU(5805),
      jU = gU(5097),
      uU = gU(4827),
      CU = gU(5904);

    function hU(UU) {
      return hU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, hU(UU)
    }
    var QU = ["offset"];

    function eU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return WU(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return WU(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return WU(UU, RU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function WU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function fU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function xU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function mU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? xU(Object(gU), !0).forEach((function(RU) {
          IU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : xU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function IU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != hU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != hU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == hU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function JU() {
      return JU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, JU.apply(this, arguments)
    }
    var wU = function(UU) {
        var RU = UU.value,
          gU = UU.formatter,
          tU = EU()(UU.children) ? RU : UU.children;
        return TU()(gU) ? gU(tU) : tU
      },
      nU = function(UU, RU, gU) {
        var pU, PU, TU = UU.position,
          qU = UU.viewBox,
          KU = UU.offset,
          GU = UU.className,
          jU = qU,
          hU = jU.cx,
          QU = jU.cy,
          eU = jU.innerRadius,
          WU = jU.outerRadius,
          fU = jU.startAngle,
          xU = jU.endAngle,
          mU = jU.clockWise,
          IU = (eU + WU) / 2,
          wU = function(UU, RU) {
            return (0, uU.y)(RU - UU) * Math.min(Math.abs(RU - UU), 360)
          }(fU, xU),
          nU = wU >= 0 ? 1 : -1;
        "insideStart" === TU ? (pU = fU + nU * KU, PU = mU) : "insideEnd" === TU ? (pU = xU - nU * KU, PU = !mU) : "end" === TU && (pU = xU + nU * KU, PU = mU), PU = wU <= 0 ? PU : !PU;
        var bU = (0, CU.f)(hU, QU, IU, pU),
          oU = (0, CU.f)(hU, QU, IU, pU + 359 * (PU ? 1 : -1)),
          ZU = "M".concat(bU.x, ",").concat(bU.y, "\n    A").concat(IU, ",").concat(IU, ",0,1,").concat(PU ? 0 : 1, ",\n    ").concat(oU.x, ",").concat(oU.y),
          aU = EU()(UU.id) ? (0, uU.C)("recharts-radial-line-") : UU.id;
        return tU.createElement("text", JU({}, gU, {
          dominantBaseline: "central",
          className: (0, cU.e)("recharts-radial-bar-label", GU)
        }), tU.createElement("defs", null, tU.createElement("path", {
          id: aU,
          d: ZU
        })), tU.createElement("textPath", {
          xlinkHref: "#".concat(aU)
        }, RU))
      },
      bU = function(UU) {
        var RU = UU.viewBox,
          gU = UU.offset,
          tU = UU.position,
          pU = RU,
          EU = pU.cx,
          PU = pU.cy,
          TU = pU.innerRadius,
          qU = pU.outerRadius,
          KU = (pU.startAngle + pU.endAngle) / 2;
        if ("outside" === tU) {
          var cU = (0, CU.f)(EU, PU, qU + gU, KU),
            GU = cU.x;
          return {
            x: GU,
            y: cU.y,
            textAnchor: GU >= EU ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === tU) return {
          x: EU,
          y: PU,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === tU) return {
          x: EU,
          y: PU,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === tU) return {
          x: EU,
          y: PU,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var jU = (TU + qU) / 2,
          uU = (0, CU.f)(EU, PU, jU, KU);
        return {
          x: uU.x,
          y: uU.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      oU = function(UU) {
        var RU = UU.viewBox,
          gU = UU.parentViewBox,
          tU = UU.offset,
          pU = UU.position,
          EU = RU,
          PU = EU.x,
          TU = EU.y,
          qU = EU.width,
          cU = EU.height,
          GU = cU >= 0 ? 1 : -1,
          jU = GU * tU,
          CU = GU > 0 ? "end" : "start",
          hU = GU > 0 ? "start" : "end",
          QU = qU >= 0 ? 1 : -1,
          eU = QU * tU,
          WU = QU > 0 ? "end" : "start",
          fU = QU > 0 ? "start" : "end";
        if ("top" === pU) return mU(mU({}, {
          x: PU + qU / 2,
          y: TU - GU * tU,
          textAnchor: "middle",
          verticalAnchor: CU
        }), gU ? {
          height: Math.max(TU - gU.y, 0),
          width: qU
        } : {});
        if ("bottom" === pU) return mU(mU({}, {
          x: PU + qU / 2,
          y: TU + cU + jU,
          textAnchor: "middle",
          verticalAnchor: hU
        }), gU ? {
          height: Math.max(gU.y + gU.height - (TU + cU), 0),
          width: qU
        } : {});
        if ("left" === pU) {
          var xU = {
            x: PU - eU,
            y: TU + cU / 2,
            textAnchor: WU,
            verticalAnchor: "middle"
          };
          return mU(mU({}, xU), gU ? {
            width: Math.max(xU.x - gU.x, 0),
            height: cU
          } : {})
        }
        if ("right" === pU) {
          var IU = {
            x: PU + qU + eU,
            y: TU + cU / 2,
            textAnchor: fU,
            verticalAnchor: "middle"
          };
          return mU(mU({}, IU), gU ? {
            width: Math.max(gU.x + gU.width - IU.x, 0),
            height: cU
          } : {})
        }
        var JU = gU ? {
          width: qU,
          height: cU
        } : {};
        return "insideLeft" === pU ? mU({
          x: PU + eU,
          y: TU + cU / 2,
          textAnchor: fU,
          verticalAnchor: "middle"
        }, JU) : "insideRight" === pU ? mU({
          x: PU + qU - eU,
          y: TU + cU / 2,
          textAnchor: WU,
          verticalAnchor: "middle"
        }, JU) : "insideTop" === pU ? mU({
          x: PU + qU / 2,
          y: TU + jU,
          textAnchor: "middle",
          verticalAnchor: hU
        }, JU) : "insideBottom" === pU ? mU({
          x: PU + qU / 2,
          y: TU + cU - jU,
          textAnchor: "middle",
          verticalAnchor: CU
        }, JU) : "insideTopLeft" === pU ? mU({
          x: PU + eU,
          y: TU + jU,
          textAnchor: fU,
          verticalAnchor: hU
        }, JU) : "insideTopRight" === pU ? mU({
          x: PU + qU - eU,
          y: TU + jU,
          textAnchor: WU,
          verticalAnchor: hU
        }, JU) : "insideBottomLeft" === pU ? mU({
          x: PU + eU,
          y: TU + cU - jU,
          textAnchor: fU,
          verticalAnchor: CU
        }, JU) : "insideBottomRight" === pU ? mU({
          x: PU + qU - eU,
          y: TU + cU - jU,
          textAnchor: WU,
          verticalAnchor: CU
        }, JU) : KU()(pU) && ((0, uU.v)(pU.x) || (0, uU.w)(pU.x)) && ((0, uU.v)(pU.y) || (0, uU.w)(pU.y)) ? mU({
          x: PU + (0, uU.k)(pU.x, qU),
          y: TU + (0, uU.k)(pU.y, cU),
          textAnchor: "end",
          verticalAnchor: "end"
        }, JU) : mU({
          x: PU + qU / 2,
          y: TU + cU / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, JU)
      },
      ZU = function(UU) {
        return "cx" in UU && (0, uU.v)(UU.cx)
      };

    function aU(UU) {
      var RU, gU = UU.offset,
        pU = mU({
          offset: void 0 === gU ? 5 : gU
        }, fU(UU, QU)),
        PU = pU.viewBox,
        qU = pU.position,
        KU = pU.value,
        uU = pU.children,
        CU = pU.content,
        hU = pU.className,
        eU = void 0 === hU ? "" : hU,
        WU = pU.textBreakAll;
      if (!PU || EU()(KU) && EU()(uU) && !(0, tU.isValidElement)(CU) && !TU()(CU)) return null;
      if ((0, tU.isValidElement)(CU)) return (0, tU.cloneElement)(CU, pU);
      if (TU()(CU)) {
        if (RU = (0, tU.createElement)(CU, pU), (0, tU.isValidElement)(RU)) return RU
      } else RU = wU(pU);
      var xU = ZU(PU),
        IU = (0, jU.b)(pU, !0);
      if (xU && ("insideStart" === qU || "insideEnd" === qU || "end" === qU)) return nU(pU, RU, IU);
      var aU = xU ? bU(pU) : oU(pU);
      return tU.createElement(GU.b, JU({
        className: (0, cU.e)("recharts-label", eU)
      }, IU, aU, {
        breakAll: WU
      }), RU)
    }
    aU.displayName = "Label";
    var YU = function(UU) {
      var RU = UU.cx,
        gU = UU.cy,
        tU = UU.angle,
        pU = UU.startAngle,
        EU = UU.endAngle,
        PU = UU.r,
        TU = UU.radius,
        qU = UU.innerRadius,
        KU = UU.outerRadius,
        cU = UU.x,
        GU = UU.y,
        jU = UU.top,
        CU = UU.left,
        hU = UU.width,
        QU = UU.height,
        eU = UU.clockWise,
        WU = UU.labelViewBox;
      if (WU) return WU;
      if ((0, uU.v)(hU) && (0, uU.v)(QU)) {
        if ((0, uU.v)(cU) && (0, uU.v)(GU)) return {
          x: cU,
          y: GU,
          width: hU,
          height: QU
        };
        if ((0, uU.v)(jU) && (0, uU.v)(CU)) return {
          x: jU,
          y: CU,
          width: hU,
          height: QU
        }
      }
      return (0, uU.v)(cU) && (0, uU.v)(GU) ? {
        x: cU,
        y: GU,
        width: 0,
        height: 0
      } : (0, uU.v)(RU) && (0, uU.v)(gU) ? {
        cx: RU,
        cy: gU,
        startAngle: pU || tU || 0,
        endAngle: EU || tU || 0,
        innerRadius: qU || 0,
        outerRadius: KU || TU || PU || 0,
        clockWise: eU
      } : UU.viewBox ? UU.viewBox : {}
    };
    aU.parseViewBox = YU, aU.renderCallByParent = function(UU, RU) {
      var gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!UU || !UU.children && gU && !UU.label) return null;
      var pU = UU.children,
        EU = YU(UU),
        PU = (0, jU.f)(pU, aU).map((function(UU, gU) {
          return (0, tU.cloneElement)(UU, {
            viewBox: RU || EU,
            key: "label-".concat(gU)
          })
        }));
      if (!gU) return PU;
      var qU = function(UU, RU) {
        return UU ? !0 === UU ? tU.createElement(aU, {
          key: "label-implicit",
          viewBox: RU
        }) : (0, uU.r)(UU) ? tU.createElement(aU, {
          key: "label-implicit",
          viewBox: RU,
          value: UU
        }) : (0, tU.isValidElement)(UU) ? UU.type === aU ? (0, tU.cloneElement)(UU, {
          key: "label-implicit",
          viewBox: RU
        }) : tU.createElement(aU, {
          key: "label-implicit",
          content: UU,
          viewBox: RU
        }) : TU()(UU) ? tU.createElement(aU, {
          key: "label-implicit",
          content: UU,
          viewBox: RU
        }) : KU()(UU) ? tU.createElement(aU, JU({
          viewBox: RU
        }, UU, {
          key: "label-implicit"
        })) : null : null
      }(UU.label, RU || EU);
      return [qU].concat(eU(PU))
    }
  },
  5962: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => oU
    });
    var tU = gU(56),
      pU = gU(5087),
      EU = gU.n(pU),
      PU = gU(4750),
      TU = gU.n(PU),
      qU = gU(4921),
      KU = gU.n(qU),
      cU = gU(5971),
      GU = gU.n(cU),
      jU = gU(5899),
      uU = gU(5633),
      CU = gU(5097),
      hU = gU(5817);

    function QU(UU) {
      return QU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, QU(UU)
    }
    var eU = ["valueAccessor"],
      WU = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function fU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return xU(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return xU(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return xU(UU, RU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function mU() {
      return mU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, mU.apply(this, arguments)
    }

    function IU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function JU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? IU(Object(gU), !0).forEach((function(RU) {
          wU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : IU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function wU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != QU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != QU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == QU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function nU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }
    var bU = function(UU) {
      return Array.isArray(UU.value) ? GU()(UU.value) : UU.value
    };

    function oU(UU) {
      var RU = UU.valueAccessor,
        gU = void 0 === RU ? bU : RU,
        pU = nU(UU, eU),
        PU = pU.data,
        TU = pU.dataKey,
        qU = pU.clockWise,
        KU = pU.id,
        cU = pU.textBreakAll,
        GU = nU(pU, WU);
      return PU && PU.length ? tU.createElement(uU.e, {
        className: "recharts-label-list"
      }, PU.map((function(UU, RU) {
        var pU = EU()(TU) ? gU(UU, RU) : (0, hU.cb)(UU && UU.payload, TU),
          PU = EU()(KU) ? {} : {
            id: "".concat(KU, "-").concat(RU)
          };
        return tU.createElement(jU.c, mU({}, (0, CU.b)(UU, !0), GU, PU, {
          parentViewBox: UU.parentViewBox,
          value: pU,
          textBreakAll: cU,
          viewBox: jU.c.parseViewBox(EU()(qU) ? UU : JU(JU({}, UU), {}, {
            clockWise: qU
          })),
          key: "label-".concat(RU),
          index: RU
        }))
      }))) : null
    }
    oU.displayName = "LabelList", oU.renderCallByParent = function(UU, RU) {
      var gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!UU || !UU.children && gU && !UU.label) return null;
      var pU = UU.children,
        EU = (0, CU.f)(pU, oU).map((function(UU, gU) {
          return (0, tU.cloneElement)(UU, {
            data: RU,
            key: "labelList-".concat(gU)
          })
        }));
      return gU ? [function(UU, RU) {
        return UU ? !0 === UU ? tU.createElement(oU, {
          key: "labelList-implicit",
          data: RU
        }) : tU.isValidElement(UU) || KU()(UU) ? tU.createElement(oU, {
          key: "labelList-implicit",
          data: RU,
          content: UU
        }) : TU()(UU) ? tU.createElement(oU, mU({
          data: RU
        }, UU, {
          key: "labelList-implicit"
        })) : null : null
      }(UU.label, RU)].concat(fU(EU)) : EU
    }
  },
  5720: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => SU
    });
    var tU = gU(56),
      pU = gU(4921),
      EU = gU.n(pU),
      PU = gU(4733),
      TU = gU(5093),
      qU = gU(5626),
      KU = gU(5726),
      cU = gU(5125);

    function GU(UU) {
      return GU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, GU(UU)
    }

    function jU() {
      return jU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, jU.apply(this, arguments)
    }

    function uU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function CU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, xU(tU.key), tU)
      }
    }

    function hU(UU, RU, gU) {
      return RU = eU(RU),
        function(UU, RU) {
          if (RU && ("object" === GU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, QU() ? Reflect.construct(RU, gU || [], eU(UU).constructor) : RU.apply(UU, gU))
    }

    function QU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (QU = function() {
        return !!UU
      })()
    }

    function eU(UU) {
      return eU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, eU(UU)
    }

    function WU(UU, RU) {
      return WU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, WU(UU, RU)
    }

    function fU(UU, RU, gU) {
      return (RU = xU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function xU(UU) {
      var RU = function(UU, RU) {
        if ("object" != GU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != GU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == GU(RU) ? RU : RU + ""
    }
    var mU = 32,
      IU = function(UU) {
        function RU() {
          return function(UU, RU) {
            if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
          }(this, RU), hU(this, RU, arguments)
        }
        return function(UU, RU) {
          if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
          UU.prototype = Object.create(RU && RU.prototype, {
            constructor: {
              value: UU,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(UU, "prototype", {
            writable: !1
          }), RU && WU(UU, RU)
        }(RU, UU), gU = RU, pU = [{
          key: "renderIcon",
          value: function(UU) {
            var RU = this.props.inactiveColor,
              gU = 16,
              pU = mU / 6,
              EU = mU / 3,
              PU = UU.inactive ? RU : UU.color;
            if ("plainline" === UU.type) return tU.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: PU,
              strokeDasharray: UU.payload.strokeDasharray,
              x1: 0,
              y1: gU,
              x2: mU,
              y2: gU,
              className: "recharts-legend-icon"
            });
            if ("line" === UU.type) return tU.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: PU,
              d: "M0,".concat(gU, "h").concat(EU, "\n            A").concat(pU, ",").concat(pU, ",0,1,1,").concat(2 * EU, ",").concat(gU, "\n            H").concat(mU, "M").concat(2 * EU, ",").concat(gU, "\n            A").concat(pU, ",").concat(pU, ",0,1,1,").concat(EU, ",").concat(gU),
              className: "recharts-legend-icon"
            });
            if ("rect" === UU.type) return tU.createElement("path", {
              stroke: "none",
              fill: PU,
              d: "M0,".concat(4, "h").concat(mU, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (tU.isValidElement(UU.legendIcon)) {
              var TU = function(UU) {
                for (var RU = 1; RU < arguments.length; RU++) {
                  var gU = null != arguments[RU] ? arguments[RU] : {};
                  RU % 2 ? uU(Object(gU), !0).forEach((function(RU) {
                    fU(UU, RU, gU[RU])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : uU(Object(gU)).forEach((function(RU) {
                    Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
                  }))
                }
                return UU
              }({}, UU);
              return delete TU.legendIcon, tU.cloneElement(UU.legendIcon, TU)
            }
            return tU.createElement(KU.c, {
              fill: PU,
              cx: gU,
              cy: gU,
              size: mU,
              sizeType: "diameter",
              type: UU.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var UU = this,
              RU = this.props,
              gU = RU.payload,
              pU = RU.iconSize,
              KU = RU.layout,
              GU = RU.formatter,
              uU = RU.inactiveColor,
              CU = {
                x: 0,
                y: 0,
                width: mU,
                height: mU
              },
              hU = {
                display: "horizontal" === KU ? "inline-block" : "block",
                marginRight: 10
              },
              QU = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return gU.map((function(RU, gU) {
              var KU = RU.formatter || GU,
                eU = (0, PU.e)(fU(fU({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(gU), !0), "inactive", RU.inactive));
              if ("none" === RU.type) return null;
              var WU = EU()(RU.value) ? null : RU.value;
              (0, TU.e)(!EU()(RU.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var xU = RU.inactive ? uU : RU.color;
              return tU.createElement("li", jU({
                className: eU,
                style: hU,
                key: "legend-item-".concat(gU)
              }, (0, cU.p)(UU.props, RU, gU)), tU.createElement(qU.b, {
                width: pU,
                height: pU,
                viewBox: CU,
                style: QU
              }, UU.renderIcon(RU)), tU.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: xU
                }
              }, KU ? KU(WU, RU, gU) : WU))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var UU = this.props,
              RU = UU.payload,
              gU = UU.layout,
              pU = UU.align;
            if (!RU || !RU.length) return null;
            var EU = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === gU ? pU : "left"
            };
            return tU.createElement("ul", {
              className: "recharts-default-legend",
              style: EU
            }, this.renderItems())
          }
        }], pU && CU(gU.prototype, pU), GU && CU(gU, GU), Object.defineProperty(gU, "prototype", {
          writable: !1
        }), gU;
        var gU, pU, GU
      }(tU.PureComponent);
    fU(IU, "displayName", "Legend"), fU(IU, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var JU = gU(4827),
      wU = gU(5656);

    function nU(UU) {
      return nU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, nU(UU)
    }
    var bU = ["ref"];

    function oU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function ZU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? oU(Object(gU), !0).forEach((function(RU) {
          XU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : oU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function aU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, vU(tU.key), tU)
      }
    }

    function YU(UU, RU, gU) {
      return RU = VU(RU),
        function(UU, RU) {
          if (RU && ("object" === nU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, BU() ? Reflect.construct(RU, gU || [], VU(UU).constructor) : RU.apply(UU, gU))
    }

    function BU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (BU = function() {
        return !!UU
      })()
    }

    function VU(UU) {
      return VU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, VU(UU)
    }

    function rU(UU, RU) {
      return rU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, rU(UU, RU)
    }

    function XU(UU, RU, gU) {
      return (RU = vU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function vU(UU) {
      var RU = function(UU, RU) {
        if ("object" != nU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != nU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == nU(RU) ? RU : RU + ""
    }

    function dU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function HU(UU) {
      return UU.value
    }
    var SU = function(UU) {
      function RU() {
        var UU;
        ! function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, RU);
        for (var gU = arguments.length, tU = new Array(gU), pU = 0; pU < gU; pU++) tU[pU] = arguments[pU];
        return XU(UU = YU(this, RU, [].concat(tU)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), UU
      }
      return function(UU, RU) {
        if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(RU && RU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), RU && rU(UU, RU)
      }(RU, UU), gU = RU, EU = [{
        key: "getWithHeight",
        value: function(UU, RU) {
          var gU = ZU(ZU({}, this.defaultProps), UU.props).layout;
          return "vertical" === gU && (0, JU.v)(UU.props.height) ? {
            height: UU.props.height
          } : "horizontal" === gU ? {
            width: UU.props.width || RU
          } : null
        }
      }], (pU = [{
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
            var UU = this.wrapperNode.getBoundingClientRect();
            return UU.height = this.wrapperNode.offsetHeight, UU.width = this.wrapperNode.offsetWidth, UU
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var UU = this.props.onBBoxUpdate,
            RU = this.getBBox();
          RU ? (Math.abs(RU.width - this.lastBoundingBox.width) > 1 || Math.abs(RU.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = RU.width, this.lastBoundingBox.height = RU.height, UU && UU(RU)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, UU && UU(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? ZU({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(UU) {
          var RU, gU, tU = this.props,
            pU = tU.layout,
            EU = tU.align,
            PU = tU.verticalAlign,
            TU = tU.margin,
            qU = tU.chartWidth,
            KU = tU.chartHeight;
          return UU && (void 0 !== UU.left && null !== UU.left || void 0 !== UU.right && null !== UU.right) || (RU = "center" === EU && "vertical" === pU ? {
            left: ((qU || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === EU ? {
            right: TU && TU.right || 0
          } : {
            left: TU && TU.left || 0
          }), UU && (void 0 !== UU.top && null !== UU.top || void 0 !== UU.bottom && null !== UU.bottom) || (gU = "middle" === PU ? {
            top: ((KU || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === PU ? {
            bottom: TU && TU.bottom || 0
          } : {
            top: TU && TU.top || 0
          }), ZU(ZU({}, RU), gU)
        }
      }, {
        key: "render",
        value: function() {
          var UU = this,
            RU = this.props,
            gU = RU.content,
            pU = RU.width,
            EU = RU.height,
            PU = RU.wrapperStyle,
            TU = RU.payloadUniqBy,
            qU = RU.payload,
            KU = ZU(ZU({
              position: "absolute",
              width: pU || "auto",
              height: EU || "auto"
            }, this.getDefaultPosition(PU)), PU);
          return tU.createElement("div", {
            className: "recharts-legend-wrapper",
            style: KU,
            ref: function(RU) {
              UU.wrapperNode = RU
            }
          }, function(UU, RU) {
            if (tU.isValidElement(UU)) return tU.cloneElement(UU, RU);
            if ("function" === typeof UU) return tU.createElement(UU, RU);
            RU.ref;
            var gU = dU(RU, bU);
            return tU.createElement(IU, gU)
          }(gU, ZU(ZU({}, this.props), {}, {
            payload: (0, wU.e)(qU, TU, HU)
          })))
        }
      }]) && aU(gU.prototype, pU), EU && aU(gU, EU), Object.defineProperty(gU, "prototype", {
        writable: !1
      }), gU;
      var gU, pU, EU
    }(tU.PureComponent);
    XU(SU, "displayName", "Legend"), XU(SU, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  4724: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => QU
    });
    var tU = gU(4733),
      pU = gU(56),
      EU = gU(4739),
      PU = gU.n(EU),
      TU = gU(4827),
      qU = gU(5093),
      KU = gU(5097);

    function cU(UU) {
      return cU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, cU(UU)
    }

    function GU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function jU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? GU(Object(gU), !0).forEach((function(RU) {
          uU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : GU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function uU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != cU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != cU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == cU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function CU(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        var gU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != gU) {
          var tU, pU, EU, PU, TU = [],
            qU = !0,
            KU = !1;
          try {
            if (EU = (gU = gU.call(UU)).next, 0 === RU) {
              if (Object(gU) !== gU) return;
              qU = !1
            } else
              for (; !(qU = (tU = EU.call(gU)).done) && (TU.push(tU.value), TU.length !== RU); qU = !0);
          } catch (UU) {
            KU = !0, pU = UU
          } finally {
            try {
              if (!qU && null != gU.return && (PU = gU.return(), Object(PU) !== PU)) return
            } finally {
              if (KU) throw pU
            }
          }
          return TU
        }
      }(UU, RU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return hU(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return hU(UU, RU)
      }(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }
    var QU = (0, pU.forwardRef)((function(UU, RU) {
      var gU = UU.aspect,
        EU = UU.initialDimension,
        cU = void 0 === EU ? {
          width: -1,
          height: -1
        } : EU,
        GU = UU.width,
        uU = void 0 === GU ? "100%" : GU,
        hU = UU.height,
        QU = void 0 === hU ? "100%" : hU,
        eU = UU.minWidth,
        WU = void 0 === eU ? 0 : eU,
        fU = UU.minHeight,
        xU = UU.maxHeight,
        mU = UU.children,
        IU = UU.debounce,
        JU = void 0 === IU ? 0 : IU,
        wU = UU.id,
        nU = UU.className,
        bU = UU.Xx,
        oU = UU.style,
        ZU = void 0 === oU ? {} : oU,
        aU = (0, pU.useRef)(null),
        YU = (0, pU.useRef)();
      YU.current = bU, (0, pU.useImperativeHandle)(RU, (function() {
        return Object.defineProperty(aU.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), aU.current
          },
          configurable: !0
        })
      }));
      var BU = CU((0, pU.useState)({
          containerWidth: cU.width,
          containerHeight: cU.height
        }), 2),
        VU = BU[0],
        rU = BU[1],
        XU = (0, pU.useCallback)((function(UU, RU) {
          rU((function(gU) {
            var tU = Math.round(UU),
              pU = Math.round(RU);
            return gU.containerWidth === tU && gU.containerHeight === pU ? gU : {
              containerWidth: tU,
              containerHeight: pU
            }
          }))
        }), []);
      (0, pU.useEffect)((function() {
        var UU = function(UU) {
          var RU, gU = UU[0].contentRect,
            tU = gU.width,
            pU = gU.height;
          XU(tU, pU), null === (RU = YU.current) || void 0 === RU || RU.call(YU, tU, pU)
        };
        JU > 0 && (UU = PU()(UU, JU, {
          trailing: !0,
          leading: !1
        }));
        var RU = new ResizeObserver(UU),
          gU = aU.current.getBoundingClientRect(),
          tU = gU.width,
          pU = gU.height;
        return XU(tU, pU), RU.observe(aU.current),
          function() {
            RU.disconnect()
          }
      }), [XU, JU]);
      var vU = (0, pU.useMemo)((function() {
        var UU = VU.containerWidth,
          RU = VU.containerHeight;
        if (UU < 0 || RU < 0) return null;
        (0, qU.e)((0, TU.w)(uU) || (0, TU.w)(QU), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", uU, QU), (0, qU.e)(!gU || gU > 0, "The aspect(%s) must be greater than zero.", gU);
        var tU = (0, TU.w)(uU) ? UU : uU,
          EU = (0, TU.w)(QU) ? RU : QU;
        gU && gU > 0 && (tU ? EU = tU / gU : EU && (tU = EU * gU), xU && EU > xU && (EU = xU)), (0, qU.e)(tU > 0 || EU > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", tU, EU, uU, QU, WU, fU, gU);
        var PU = !Array.isArray(mU) && (0, KU.i)(mU.type).endsWith("Chart");
        return pU.Children.map(mU, (function(UU) {
          return pU.isValidElement(UU) ? (0, pU.cloneElement)(UU, jU({
            width: tU,
            height: EU
          }, PU ? {
            style: jU({
              height: "100%",
              width: "100%",
              maxHeight: EU,
              maxWidth: tU
            }, UU.props.style)
          } : {})) : UU
        }))
      }), [gU, mU, QU, xU, fU, WU, VU, uU]);
      return pU.createElement("div", {
        id: wU ? "".concat(wU) : void 0,
        className: (0, tU.e)("recharts-responsive-container", nU),
        style: jU(jU({}, ZU), {}, {
          width: uU,
          height: QU,
          minWidth: WU,
          minHeight: fU,
          maxHeight: xU
        }),
        ref: aU
      }, vU)
    }))
  },
  5805: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => sU
    });
    var tU = gU(56),
      pU = gU(5087),
      EU = gU.n(pU),
      PU = gU(4733),
      TU = gU(4827),
      qU = gU(5647),
      KU = gU(5097),
      cU = gU(5811);

    function GU(UU) {
      return GU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, GU(UU)
    }

    function jU(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        var gU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != gU) {
          var tU, pU, EU, PU, TU = [],
            qU = !0,
            KU = !1;
          try {
            if (EU = (gU = gU.call(UU)).next, 0 === RU) {
              if (Object(gU) !== gU) return;
              qU = !1
            } else
              for (; !(qU = (tU = EU.call(gU)).done) && (TU.push(tU.value), TU.length !== RU); qU = !0);
          } catch (UU) {
            KU = !0, pU = UU
          } finally {
            try {
              if (!qU && null != gU.return && (PU = gU.return(), Object(PU) !== PU)) return
            } finally {
              if (KU) throw pU
            }
          }
          return TU
        }
      }(UU, RU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return uU(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return uU(UU, RU)
      }(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function CU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, hU(tU.key), tU)
      }
    }

    function hU(UU) {
      var RU = function(UU, RU) {
        if ("object" != GU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != GU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == GU(RU) ? RU : RU + ""
    }
    var QU = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      eU = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      WU = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      fU = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      xU = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      mU = Object.keys(xU),
      IU = "NaN";
    var JU = function() {
      function UU(RU, gU) {
        ! function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, UU), this.num = RU, this.unit = gU, this.num = RU, this.unit = gU, Number.isNaN(RU) && (this.unit = ""), "" === gU || WU.test(gU) || (this.num = NaN, this.unit = ""), mU.includes(gU) && (this.num = function(UU, RU) {
          return UU * xU[RU]
        }(RU, gU), this.unit = "px")
      }
      return RU = UU, tU = [{
        key: "parse",
        value: function(RU) {
          var gU, tU = jU(null !== (gU = fU.exec(RU)) && void 0 !== gU ? gU : [], 3),
            pU = tU[1],
            EU = tU[2];
          return new UU(parseFloat(pU), null !== EU && void 0 !== EU ? EU : "")
        }
      }], (gU = [{
        key: "add",
        value: function(RU) {
          return this.unit !== RU.unit ? new UU(NaN, "") : new UU(this.num + RU.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(RU) {
          return this.unit !== RU.unit ? new UU(NaN, "") : new UU(this.num - RU.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(RU) {
          return "" !== this.unit && "" !== RU.unit && this.unit !== RU.unit ? new UU(NaN, "") : new UU(this.num * RU.num, this.unit || RU.unit)
        }
      }, {
        key: "divide",
        value: function(RU) {
          return "" !== this.unit && "" !== RU.unit && this.unit !== RU.unit ? new UU(NaN, "") : new UU(this.num / RU.num, this.unit || RU.unit)
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
      }]) && CU(RU.prototype, gU), tU && CU(RU, tU), Object.defineProperty(RU, "prototype", {
        writable: !1
      }), RU;
      var RU, gU, tU
    }();

    function wU(UU) {
      if (UU.includes(IU)) return IU;
      for (var RU = UU; RU.includes("*") || RU.includes("/");) {
        var gU, tU = jU(null !== (gU = QU.exec(RU)) && void 0 !== gU ? gU : [], 4),
          pU = tU[1],
          EU = tU[2],
          PU = tU[3],
          TU = JU.parse(null !== pU && void 0 !== pU ? pU : ""),
          qU = JU.parse(null !== PU && void 0 !== PU ? PU : ""),
          KU = "*" === EU ? TU.multiply(qU) : TU.divide(qU);
        if (KU.isNaN()) return IU;
        RU = RU.replace(QU, KU.toString())
      }
      for (; RU.includes("+") || /.-\d+(?:\.\d+)?/.test(RU);) {
        var cU, GU = jU(null !== (cU = eU.exec(RU)) && void 0 !== cU ? cU : [], 4),
          uU = GU[1],
          CU = GU[2],
          hU = GU[3],
          WU = JU.parse(null !== uU && void 0 !== uU ? uU : ""),
          fU = JU.parse(null !== hU && void 0 !== hU ? hU : ""),
          xU = "+" === CU ? WU.add(fU) : WU.subtract(fU);
        if (xU.isNaN()) return IU;
        RU = RU.replace(eU, xU.toString())
      }
      return RU
    }
    var nU = /\(([^()]*)\)/;

    function bU(UU) {
      var RU = UU.replace(/\s+/g, "");
      return RU = function(UU) {
        for (var RU = UU; RU.includes("(");) {
          var gU = jU(nU.exec(RU), 2)[1];
          RU = RU.replace(nU, wU(gU))
        }
        return RU
      }(RU), RU = wU(RU)
    }

    function oU(UU) {
      var RU = function(UU) {
        try {
          return bU(UU)
        } catch (RU) {
          return IU
        }
      }(UU.slice(5, -1));
      return RU === IU ? "" : RU
    }
    var ZU = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      aU = ["dx", "dy", "angle", "className", "breakAll"];

    function YU() {
      return YU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, YU.apply(this, arguments)
    }

    function BU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function VU(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        var gU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != gU) {
          var tU, pU, EU, PU, TU = [],
            qU = !0,
            KU = !1;
          try {
            if (EU = (gU = gU.call(UU)).next, 0 === RU) {
              if (Object(gU) !== gU) return;
              qU = !1
            } else
              for (; !(qU = (tU = EU.call(gU)).done) && (TU.push(tU.value), TU.length !== RU); qU = !0);
          } catch (UU) {
            KU = !0, pU = UU
          } finally {
            try {
              if (!qU && null != gU.return && (PU = gU.return(), Object(PU) !== PU)) return
            } finally {
              if (KU) throw pU
            }
          }
          return TU
        }
      }(UU, RU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return rU(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return rU(UU, RU)
      }(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }
    var XU = /[ \f\n\r\t\v\u2028\u2029]+/,
      vU = function(UU) {
        var RU = UU.children,
          gU = UU.breakAll,
          tU = UU.style;
        try {
          var pU = [];
          return EU()(RU) || (pU = gU ? RU.toString().split("") : RU.toString().split(XU)), {
            wordsWithComputedWidth: pU.map((function(UU) {
              return {
                word: UU,
                width: (0, cU.f)(UU, tU).width
              }
            })),
            spaceWidth: gU ? 0 : (0, cU.f)("\xa0", tU).width
          }
        } catch (PU) {
          return null
        }
      },
      dU = function(UU) {
        return [{
          words: EU()(UU) ? [] : UU.toString().split(XU)
        }]
      },
      HU = function(UU) {
        var RU = UU.width,
          gU = UU.scaleToFit,
          tU = UU.children,
          pU = UU.style,
          EU = UU.breakAll,
          PU = UU.maxLines;
        if ((RU || gU) && !qU.b.isSsr) {
          var KU = vU({
            breakAll: EU,
            children: tU,
            style: pU
          });
          return KU ? function(UU, RU, gU, tU, pU) {
            var EU = UU.maxLines,
              PU = UU.children,
              qU = UU.style,
              KU = UU.breakAll,
              cU = (0, TU.v)(EU),
              GU = PU,
              jU = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(UU, RU) {
                  var EU = RU.word,
                    PU = RU.width,
                    TU = UU[UU.length - 1];
                  if (TU && (null == tU || pU || TU.width + PU + gU < Number(tU))) TU.words.push(EU), TU.width += PU + gU;
                  else {
                    var qU = {
                      words: [EU],
                      width: PU
                    };
                    UU.push(qU)
                  }
                  return UU
                }), [])
              },
              uU = jU(RU);
            if (!cU) return uU;
            for (var CU, hU = function(UU) {
                var RU = GU.slice(0, UU),
                  gU = vU({
                    breakAll: KU,
                    style: qU,
                    children: RU + "\u2026"
                  }).wordsWithComputedWidth,
                  pU = jU(gU),
                  PU = pU.length > EU || function(UU) {
                    return UU.reduce((function(UU, RU) {
                      return UU.width > RU.width ? UU : RU
                    }))
                  }(pU).width > Number(tU);
                return [PU, pU]
              }, QU = 0, eU = GU.length - 1, WU = 0; QU <= eU && WU <= GU.length - 1;) {
              var fU = Math.floor((QU + eU) / 2),
                xU = VU(hU(fU - 1), 2),
                mU = xU[0],
                IU = xU[1],
                JU = VU(hU(fU), 1)[0];
              if (mU || JU || (QU = fU + 1), mU && JU && (eU = fU - 1), !mU && JU) {
                CU = IU;
                break
              }
              WU++
            }
            return CU || uU
          }({
            breakAll: EU,
            children: tU,
            maxLines: PU,
            style: pU
          }, KU.wordsWithComputedWidth, KU.spaceWidth, RU, gU) : dU(tU)
        }
        return dU(tU)
      },
      SU = "#808080",
      sU = function(UU) {
        var RU = UU.x,
          gU = void 0 === RU ? 0 : RU,
          pU = UU.y,
          EU = void 0 === pU ? 0 : pU,
          qU = UU.lineHeight,
          cU = void 0 === qU ? "1em" : qU,
          GU = UU.capHeight,
          jU = void 0 === GU ? "0.71em" : GU,
          uU = UU.scaleToFit,
          CU = void 0 !== uU && uU,
          hU = UU.textAnchor,
          QU = void 0 === hU ? "start" : hU,
          eU = UU.verticalAnchor,
          WU = void 0 === eU ? "end" : eU,
          fU = UU.fill,
          xU = void 0 === fU ? SU : fU,
          mU = BU(UU, ZU),
          IU = (0, tU.useMemo)((function() {
            return HU({
              breakAll: mU.breakAll,
              children: mU.children,
              maxLines: mU.maxLines,
              scaleToFit: CU,
              style: mU.style,
              width: mU.width
            })
          }), [mU.breakAll, mU.children, mU.maxLines, CU, mU.style, mU.width]),
          JU = mU.dx,
          wU = mU.dy,
          nU = mU.angle,
          bU = mU.className,
          VU = mU.breakAll,
          rU = BU(mU, aU);
        if (!(0, TU.r)(gU) || !(0, TU.r)(EU)) return null;
        var XU, vU = gU + ((0, TU.v)(JU) ? JU : 0),
          dU = EU + ((0, TU.v)(wU) ? wU : 0);
        switch (WU) {
          case "start":
            XU = oU("calc(".concat(jU, ")"));
            break;
          case "middle":
            XU = oU("calc(".concat((IU.length - 1) / 2, " * -").concat(cU, " + (").concat(jU, " / 2))"));
            break;
          default:
            XU = oU("calc(".concat(IU.length - 1, " * -").concat(cU, ")"))
        }
        var sU = [];
        if (CU) {
          var yU = IU[0].width,
            kU = mU.width;
          sU.push("scale(".concat(((0, TU.v)(kU) ? kU / yU : 1) / yU, ")"))
        }
        return nU && sU.push("rotate(".concat(nU, ", ").concat(vU, ", ").concat(dU, ")")), sU.length && (rU.transform = sU.join(" ")), tU.createElement("text", YU({}, (0, KU.b)(rU, !0), {
          x: vU,
          y: dU,
          className: (0, PU.e)("recharts-text", bU),
          textAnchor: QU,
          fill: xU.includes("url") ? SU : xU
        }), IU.map((function(UU, RU) {
          var gU = UU.words.join(VU ? "" : " ");
          return tU.createElement("tspan", {
            x: vU,
            dy: 0 === RU ? XU : cU,
            key: "".concat(gU, "-").concat(RU)
          }, gU)
        })))
      }
  },
  5639: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => NU
    });
    var tU = gU(56),
      pU = gU(5170),
      EU = gU.n(pU),
      PU = gU(5087),
      TU = gU.n(PU),
      qU = gU(4733),
      KU = gU(4827);

    function cU(UU) {
      return cU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, cU(UU)
    }

    function GU() {
      return GU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, GU.apply(this, arguments)
    }

    function jU(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        var gU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != gU) {
          var tU, pU, EU, PU, TU = [],
            qU = !0,
            KU = !1;
          try {
            if (EU = (gU = gU.call(UU)).next, 0 === RU) {
              if (Object(gU) !== gU) return;
              qU = !1
            } else
              for (; !(qU = (tU = EU.call(gU)).done) && (TU.push(tU.value), TU.length !== RU); qU = !0);
          } catch (UU) {
            KU = !0, pU = UU
          } finally {
            try {
              if (!qU && null != gU.return && (PU = gU.return(), Object(PU) !== PU)) return
            } finally {
              if (KU) throw pU
            }
          }
          return TU
        }
      }(UU, RU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return uU(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return uU(UU, RU)
      }(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function CU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function hU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? CU(Object(gU), !0).forEach((function(RU) {
          QU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : CU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function QU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != cU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != cU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == cU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function eU(UU) {
      return Array.isArray(UU) && (0, KU.r)(UU[0]) && (0, KU.r)(UU[1]) ? UU.join(" ~ ") : UU
    }
    var WU = function(UU) {
      var RU = UU.separator,
        gU = void 0 === RU ? " : " : RU,
        pU = UU.contentStyle,
        PU = void 0 === pU ? {} : pU,
        cU = UU.itemStyle,
        uU = void 0 === cU ? {} : cU,
        CU = UU.labelStyle,
        QU = void 0 === CU ? {} : CU,
        WU = UU.payload,
        fU = UU.formatter,
        xU = UU.itemSorter,
        mU = UU.wrapperClassName,
        IU = UU.labelClassName,
        JU = UU.label,
        wU = UU.labelFormatter,
        nU = UU.accessibilityLayer,
        bU = void 0 !== nU && nU,
        oU = hU({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, PU),
        ZU = hU({
          margin: 0
        }, QU),
        aU = !TU()(JU),
        YU = aU ? JU : "",
        BU = (0, qU.e)("recharts-default-tooltip", mU),
        VU = (0, qU.e)("recharts-tooltip-label", IU);
      aU && wU && void 0 !== WU && null !== WU && (YU = wU(JU, WU));
      var rU = bU ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return tU.createElement("div", GU({
        className: BU,
        style: oU
      }, rU), tU.createElement("p", {
        className: VU,
        style: ZU
      }, tU.isValidElement(YU) ? YU : "".concat(YU)), function() {
        if (WU && WU.length) {
          var UU = (xU ? EU()(WU, xU) : WU).map((function(UU, RU) {
            if ("none" === UU.type) return null;
            var pU = hU({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: UU.color || "#000"
              }, uU),
              EU = UU.formatter || fU || eU,
              PU = UU.value,
              TU = UU.name,
              qU = PU,
              cU = TU;
            if (EU && null != qU && null != cU) {
              var GU = EU(PU, TU, UU, RU, WU);
              if (Array.isArray(GU)) {
                var CU = jU(GU, 2);
                qU = CU[0], cU = CU[1]
              } else qU = GU
            }
            return tU.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(RU),
              style: pU
            }, (0, KU.r)(cU) ? tU.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, cU) : null, (0, KU.r)(cU) ? tU.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, gU) : null, tU.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, qU), tU.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, UU.unit || ""))
          }));
          return tU.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, UU)
        }
        return null
      }())
    };

    function fU(UU) {
      return fU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, fU(UU)
    }

    function xU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != fU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != fU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == fU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }
    var mU = "recharts-tooltip-wrapper",
      IU = {
        visibility: "hidden"
      };

    function JU(UU) {
      var RU = UU.coordinate,
        gU = UU.translateX,
        tU = UU.translateY;
      return (0, qU.e)(mU, xU(xU(xU(xU({}, "".concat(mU, "-right"), (0, KU.v)(gU) && RU && (0, KU.v)(RU.x) && gU >= RU.x), "".concat(mU, "-left"), (0, KU.v)(gU) && RU && (0, KU.v)(RU.x) && gU < RU.x), "".concat(mU, "-bottom"), (0, KU.v)(tU) && RU && (0, KU.v)(RU.y) && tU >= RU.y), "".concat(mU, "-top"), (0, KU.v)(tU) && RU && (0, KU.v)(RU.y) && tU < RU.y))
    }

    function wU(UU) {
      var RU = UU.allowEscapeViewBox,
        gU = UU.coordinate,
        tU = UU.key,
        pU = UU.offsetTopLeft,
        EU = UU.position,
        PU = UU.reverseDirection,
        TU = UU.tooltipDimension,
        qU = UU.viewBox,
        cU = UU.viewBoxDimension;
      if (EU && (0, KU.v)(EU[tU])) return EU[tU];
      var GU = gU[tU] - TU - pU,
        jU = gU[tU] + pU;
      return RU[tU] ? PU[tU] ? GU : jU : PU[tU] ? GU < qU[tU] ? Math.max(jU, qU[tU]) : Math.max(GU, qU[tU]) : jU + TU > qU[tU] + cU ? Math.max(GU, qU[tU]) : Math.max(jU, qU[tU])
    }

    function nU(UU) {
      return nU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, nU(UU)
    }

    function bU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function oU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? bU(Object(gU), !0).forEach((function(RU) {
          rU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : bU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function ZU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, XU(tU.key), tU)
      }
    }

    function aU(UU, RU, gU) {
      return RU = BU(RU),
        function(UU, RU) {
          if (RU && ("object" === nU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, YU() ? Reflect.construct(RU, gU || [], BU(UU).constructor) : RU.apply(UU, gU))
    }

    function YU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (YU = function() {
        return !!UU
      })()
    }

    function BU(UU) {
      return BU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, BU(UU)
    }

    function VU(UU, RU) {
      return VU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, VU(UU, RU)
    }

    function rU(UU, RU, gU) {
      return (RU = XU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function XU(UU) {
      var RU = function(UU, RU) {
        if ("object" != nU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != nU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == nU(RU) ? RU : RU + ""
    }
    var vU = function(UU) {
        function RU() {
          var UU;
          ! function(UU, RU) {
            if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
          }(this, RU);
          for (var gU = arguments.length, tU = new Array(gU), pU = 0; pU < gU; pU++) tU[pU] = arguments[pU];
          return rU(UU = aU(this, RU, [].concat(tU)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), rU(UU, "handleKeyDown", (function(RU) {
            var gU, tU, pU, EU;
            "Escape" === RU.key && UU.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (gU = null === (tU = UU.props.coordinate) || void 0 === tU ? void 0 : tU.x) && void 0 !== gU ? gU : 0,
                y: null !== (pU = null === (EU = UU.props.coordinate) || void 0 === EU ? void 0 : EU.y) && void 0 !== pU ? pU : 0
              }
            })
          })), UU
        }
        return function(UU, RU) {
          if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
          UU.prototype = Object.create(RU && RU.prototype, {
            constructor: {
              value: UU,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(UU, "prototype", {
            writable: !1
          }), RU && VU(UU, RU)
        }(RU, UU), gU = RU, (pU = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var UU = this.wrapperNode.getBoundingClientRect();
              (Math.abs(UU.width - this.state.lastBoundingBox.width) > 1 || Math.abs(UU.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: UU.width,
                  height: UU.height
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
            var UU, RU;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (UU = this.props.coordinate) || void 0 === UU ? void 0 : UU.x) === this.state.dismissedAtCoordinate.x && (null === (RU = this.props.coordinate) || void 0 === RU ? void 0 : RU.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var UU = this,
              RU = this.props,
              gU = RU.active,
              pU = RU.allowEscapeViewBox,
              EU = RU.animationDuration,
              PU = RU.animationEasing,
              TU = RU.children,
              qU = RU.coordinate,
              KU = RU.hasPayload,
              cU = RU.isAnimationActive,
              GU = RU.offset,
              jU = RU.position,
              uU = RU.reverseDirection,
              CU = RU.useTranslate3d,
              hU = RU.viewBox,
              QU = RU.wrapperStyle,
              eU = function(UU) {
                var RU, gU, tU = UU.allowEscapeViewBox,
                  pU = UU.coordinate,
                  EU = UU.offsetTopLeft,
                  PU = UU.position,
                  TU = UU.reverseDirection,
                  qU = UU.tooltipBox,
                  KU = UU.useTranslate3d,
                  cU = UU.viewBox;
                return {
                  cssProperties: qU.height > 0 && qU.width > 0 && pU ? function(UU) {
                    var RU = UU.translateX,
                      gU = UU.translateY;
                    return {
                      transform: UU.useTranslate3d ? "translate3d(".concat(RU, "px, ").concat(gU, "px, 0)") : "translate(".concat(RU, "px, ").concat(gU, "px)")
                    }
                  }({
                    translateX: RU = wU({
                      allowEscapeViewBox: tU,
                      coordinate: pU,
                      key: "x",
                      offsetTopLeft: EU,
                      position: PU,
                      reverseDirection: TU,
                      tooltipDimension: qU.width,
                      viewBox: cU,
                      viewBoxDimension: cU.width
                    }),
                    translateY: gU = wU({
                      allowEscapeViewBox: tU,
                      coordinate: pU,
                      key: "y",
                      offsetTopLeft: EU,
                      position: PU,
                      reverseDirection: TU,
                      tooltipDimension: qU.height,
                      viewBox: cU,
                      viewBoxDimension: cU.height
                    }),
                    useTranslate3d: KU
                  }) : IU,
                  cssClasses: JU({
                    translateX: RU,
                    translateY: gU,
                    coordinate: pU
                  })
                }
              }({
                allowEscapeViewBox: pU,
                coordinate: qU,
                offsetTopLeft: GU,
                position: jU,
                reverseDirection: uU,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: CU,
                viewBox: hU
              }),
              WU = eU.cssClasses,
              fU = eU.cssProperties,
              xU = oU(oU({
                transition: cU && gU ? "transform ".concat(EU, "ms ").concat(PU) : void 0
              }, fU), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && gU && KU ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, QU);
            return tU.createElement("div", {
              tabIndex: -1,
              className: WU,
              style: xU,
              ref: function(RU) {
                UU.wrapperNode = RU
              }
            }, TU)
          }
        }]) && ZU(gU.prototype, pU), EU && ZU(gU, EU), Object.defineProperty(gU, "prototype", {
          writable: !1
        }), gU;
        var gU, pU, EU
      }(tU.PureComponent),
      dU = gU(5647),
      HU = gU(5656);

    function SU(UU) {
      return SU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, SU(UU)
    }

    function sU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function yU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? sU(Object(gU), !0).forEach((function(RU) {
          MU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : sU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function kU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, DU(tU.key), tU)
      }
    }

    function FU(UU, RU, gU) {
      return RU = AU(RU),
        function(UU, RU) {
          if (RU && ("object" === SU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, iU() ? Reflect.construct(RU, gU || [], AU(UU).constructor) : RU.apply(UU, gU))
    }

    function iU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (iU = function() {
        return !!UU
      })()
    }

    function AU(UU) {
      return AU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, AU(UU)
    }

    function zU(UU, RU) {
      return zU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, zU(UU, RU)
    }

    function MU(UU, RU, gU) {
      return (RU = DU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function DU(UU) {
      var RU = function(UU, RU) {
        if ("object" != SU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != SU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == SU(RU) ? RU : RU + ""
    }

    function LU(UU) {
      return UU.dataKey
    }
    var NU = function(UU) {
      function RU() {
        return function(UU, RU) {
          if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
        }(this, RU), FU(this, RU, arguments)
      }
      return function(UU, RU) {
        if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(RU && RU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), RU && zU(UU, RU)
      }(RU, UU), gU = RU, (pU = [{
        key: "render",
        value: function() {
          var UU = this,
            RU = this.props,
            gU = RU.active,
            pU = RU.allowEscapeViewBox,
            EU = RU.animationDuration,
            PU = RU.animationEasing,
            TU = RU.content,
            qU = RU.coordinate,
            KU = RU.filterNull,
            cU = RU.isAnimationActive,
            GU = RU.offset,
            jU = RU.payload,
            uU = RU.payloadUniqBy,
            CU = RU.position,
            hU = RU.reverseDirection,
            QU = RU.useTranslate3d,
            eU = RU.viewBox,
            fU = RU.wrapperStyle,
            xU = null !== jU && void 0 !== jU ? jU : [];
          KU && xU.length && (xU = (0, HU.e)(jU.filter((function(RU) {
            return null != RU.value && (!0 !== RU.hide || UU.props.includeHidden)
          })), uU, LU));
          var mU = xU.length > 0;
          return tU.createElement(vU, {
            allowEscapeViewBox: pU,
            animationDuration: EU,
            animationEasing: PU,
            isAnimationActive: cU,
            active: gU,
            coordinate: qU,
            hasPayload: mU,
            offset: GU,
            position: CU,
            reverseDirection: hU,
            useTranslate3d: QU,
            viewBox: eU,
            wrapperStyle: fU
          }, function(UU, RU) {
            return tU.isValidElement(UU) ? tU.cloneElement(UU, RU) : "function" === typeof UU ? tU.createElement(UU, RU) : tU.createElement(WU, RU)
          }(TU, yU(yU({}, this.props), {}, {
            payload: xU
          })))
        }
      }]) && kU(gU.prototype, pU), EU && kU(gU, EU), Object.defineProperty(gU, "prototype", {
        writable: !1
      }), gU;
      var gU, pU, EU
    }(tU.PureComponent);
    MU(NU, "displayName", "Tooltip"), MU(NU, "defaultProps", {
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
      isAnimationActive: !dU.b.isSsr,
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
  5633: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => KU
    });
    var tU = gU(56),
      pU = gU(4733),
      EU = gU(5097),
      PU = ["children", "className"];

    function TU() {
      return TU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, TU.apply(this, arguments)
    }

    function qU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }
    var KU = tU.forwardRef((function(UU, RU) {
      var gU = UU.children,
        KU = UU.className,
        cU = qU(UU, PU),
        GU = (0, pU.e)("recharts-layer", KU);
      return tU.createElement("g", TU({
        className: GU
      }, (0, EU.b)(cU, !0), {
        ref: RU
      }), gU)
    }))
  },
  5626: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => KU
    });
    var tU = gU(56),
      pU = gU(4733),
      EU = gU(5097),
      PU = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function TU() {
      return TU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, TU.apply(this, arguments)
    }

    function qU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function KU(UU) {
      var RU = UU.children,
        gU = UU.width,
        KU = UU.height,
        cU = UU.viewBox,
        GU = UU.className,
        jU = UU.style,
        uU = UU.title,
        CU = UU.desc,
        hU = qU(UU, PU),
        QU = cU || {
          width: gU,
          height: KU,
          x: 0,
          y: 0
        },
        eU = (0, pU.e)("recharts-surface", GU);
      return tU.createElement("svg", TU({}, (0, EU.b)(hU, !0, "svg"), {
        className: eU,
        width: gU,
        height: KU,
        style: jU,
        viewBox: "".concat(QU.x, " ").concat(QU.y, " ").concat(QU.width, " ").concat(QU.height)
      }), tU.createElement("title", null, uU), tU.createElement("desc", null, CU), RU)
    }
  },
  6017: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => fU,
      g: () => IU,
      j: () => ZU,
      k: () => oU,
      o: () => xU,
      p: () => bU,
      q: () => nU,
      r: () => mU,
      v: () => wU,
      w: () => JU
    });
    var tU = gU(56),
      pU = gU(5622),
      EU = gU(6025),
      PU = gU.n(EU),
      TU = gU(5933),
      qU = gU.n(TU),
      KU = gU(4875),
      cU = gU.n(KU)()((function(UU) {
        return {
          x: UU.left,
          y: UU.top,
          width: UU.width,
          height: UU.height
        }
      }), (function(UU) {
        return ["l", UU.left, "t", UU.top, "w", UU.width, "h", UU.height].join("")
      })),
      GU = gU(4827);
    var jU = (0, tU.createContext)(void 0),
      uU = (0, tU.createContext)(void 0),
      CU = (0, tU.createContext)(void 0),
      hU = (0, tU.createContext)({}),
      QU = (0, tU.createContext)(void 0),
      eU = (0, tU.createContext)(0),
      WU = (0, tU.createContext)(0),
      fU = function(UU) {
        var RU = UU.state,
          gU = RU.xAxisMap,
          pU = RU.yAxisMap,
          EU = RU.offset,
          PU = UU.clipPathId,
          TU = UU.children,
          qU = UU.width,
          KU = UU.height,
          GU = cU(EU);
        return tU.createElement(jU.Provider, {
          value: gU
        }, tU.createElement(uU.Provider, {
          value: pU
        }, tU.createElement(hU.Provider, {
          value: EU
        }, tU.createElement(CU.Provider, {
          value: GU
        }, tU.createElement(QU.Provider, {
          value: PU
        }, tU.createElement(eU.Provider, {
          value: KU
        }, tU.createElement(WU.Provider, {
          value: qU
        }, TU)))))))
      },
      xU = function() {
        return (0, tU.useContext)(QU)
      };
    var mU = function(UU) {
        var RU = (0, tU.useContext)(jU);
        null == RU && (0, pU.b)(!1);
        var gU = RU[UU];
        return null == gU && (0, pU.b)(!1), gU
      },
      IU = function() {
        var UU = (0, tU.useContext)(jU);
        return (0, GU.e)(UU)
      },
      JU = function() {
        var UU = (0, tU.useContext)(uU);
        return PU()(UU, (function(UU) {
          return qU()(UU.domain, Number.isFinite)
        })) || (0, GU.e)(UU)
      },
      wU = function(UU) {
        var RU = (0, tU.useContext)(uU);
        null == RU && (0, pU.b)(!1);
        var gU = RU[UU];
        return null == gU && (0, pU.b)(!1), gU
      },
      nU = function() {
        return (0, tU.useContext)(CU)
      },
      bU = function() {
        return (0, tU.useContext)(hU)
      },
      oU = function() {
        return (0, tU.useContext)(WU)
      },
      ZU = function() {
        return (0, tU.useContext)(eU)
      }
  },
  6049: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => LU
    });
    var tU = gU(56);

    function pU() {}

    function EU(UU, RU, gU) {
      UU._context.bezierCurveTo((2 * UU._x0 + UU._x1) / 3, (2 * UU._y0 + UU._y1) / 3, (UU._x0 + 2 * UU._x1) / 3, (UU._y0 + 2 * UU._y1) / 3, (UU._x0 + 4 * UU._x1 + RU) / 6, (UU._y0 + 4 * UU._y1 + gU) / 6)
    }

    function PU(UU) {
      this._context = UU
    }

    function TU(UU) {
      this._context = UU
    }

    function qU(UU) {
      this._context = UU
    }
    PU.prototype = {
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
            EU(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(UU, RU) {
        switch (UU = +UU, RU = +RU, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(UU, RU) : this._context.moveTo(UU, RU);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            EU(this, UU, RU)
        }
        this._x0 = this._x1, this._x1 = UU, this._y0 = this._y1, this._y1 = RU
      }
    }, TU.prototype = {
      areaStart: pU,
      areaEnd: pU,
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
      point: function(UU, RU) {
        switch (UU = +UU, RU = +RU, this._point) {
          case 0:
            this._point = 1, this._x2 = UU, this._y2 = RU;
            break;
          case 1:
            this._point = 2, this._x3 = UU, this._y3 = RU;
            break;
          case 2:
            this._point = 3, this._x4 = UU, this._y4 = RU, this._context.moveTo((this._x0 + 4 * this._x1 + UU) / 6, (this._y0 + 4 * this._y1 + RU) / 6);
            break;
          default:
            EU(this, UU, RU)
        }
        this._x0 = this._x1, this._x1 = UU, this._y0 = this._y1, this._y1 = RU
      }
    }, qU.prototype = {
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
      point: function(UU, RU) {
        switch (UU = +UU, RU = +RU, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var gU = (this._x0 + 4 * this._x1 + UU) / 6,
              tU = (this._y0 + 4 * this._y1 + RU) / 6;
            this._line ? this._context.lineTo(gU, tU) : this._context.moveTo(gU, tU);
            break;
          case 3:
            this._point = 4;
          default:
            EU(this, UU, RU)
        }
        this._x0 = this._x1, this._x1 = UU, this._y0 = this._y1, this._y1 = RU
      }
    };
    class KU {
      constructor(UU, RU) {
        this._context = UU, this._x = RU
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
      point(UU, RU) {
        switch (UU = +UU, RU = +RU, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(UU, RU) : this._context.moveTo(UU, RU);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + UU) / 2, this._y0, this._x0, RU, UU, RU) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + RU) / 2, UU, this._y0, UU, RU)
        }
        this._x0 = UU, this._y0 = RU
      }
    }

    function cU(UU) {
      this._context = UU
    }

    function GU(UU) {
      this._context = UU
    }

    function jU(UU) {
      return new GU(UU)
    }

    function uU(UU) {
      return UU < 0 ? -1 : 1
    }

    function CU(UU, RU, gU) {
      var tU = UU._x1 - UU._x0,
        pU = RU - UU._x1,
        EU = (UU._y1 - UU._y0) / (tU || pU < 0 && -0),
        PU = (gU - UU._y1) / (pU || tU < 0 && -0),
        TU = (EU * pU + PU * tU) / (tU + pU);
      return (uU(EU) + uU(PU)) * Math.min(Math.abs(EU), Math.abs(PU), .5 * Math.abs(TU)) || 0
    }

    function hU(UU, RU) {
      var gU = UU._x1 - UU._x0;
      return gU ? (3 * (UU._y1 - UU._y0) / gU - RU) / 2 : RU
    }

    function QU(UU, RU, gU) {
      var tU = UU._x0,
        pU = UU._y0,
        EU = UU._x1,
        PU = UU._y1,
        TU = (EU - tU) / 3;
      UU._context.bezierCurveTo(tU + TU, pU + TU * RU, EU - TU, PU - TU * gU, EU, PU)
    }

    function eU(UU) {
      this._context = UU
    }

    function WU(UU) {
      this._context = new fU(UU)
    }

    function fU(UU) {
      this._context = UU
    }

    function xU(UU) {
      this._context = UU
    }

    function mU(UU) {
      var RU, gU, tU = UU.length - 1,
        pU = new Array(tU),
        EU = new Array(tU),
        PU = new Array(tU);
      for (pU[0] = 0, EU[0] = 2, PU[0] = UU[0] + 2 * UU[1], RU = 1; RU < tU - 1; ++RU) pU[RU] = 1, EU[RU] = 4, PU[RU] = 4 * UU[RU] + 2 * UU[RU + 1];
      for (pU[tU - 1] = 2, EU[tU - 1] = 7, PU[tU - 1] = 8 * UU[tU - 1] + UU[tU], RU = 1; RU < tU; ++RU) gU = pU[RU] / EU[RU - 1], EU[RU] -= gU, PU[RU] -= gU * PU[RU - 1];
      for (pU[tU - 1] = PU[tU - 1] / EU[tU - 1], RU = tU - 2; RU >= 0; --RU) pU[RU] = (PU[RU] - pU[RU + 1]) / EU[RU];
      for (EU[tU - 1] = (UU[tU] + pU[tU - 1]) / 2, RU = 0; RU < tU - 1; ++RU) EU[RU] = 2 * UU[RU + 1] - pU[RU + 1];
      return [pU, EU]
    }

    function IU(UU, RU) {
      this._context = UU, this._t = RU
    }
    cU.prototype = {
      areaStart: pU,
      areaEnd: pU,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(UU, RU) {
        UU = +UU, RU = +RU, this._point ? this._context.lineTo(UU, RU) : (this._point = 1, this._context.moveTo(UU, RU))
      }
    }, GU.prototype = {
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
      point: function(UU, RU) {
        switch (UU = +UU, RU = +RU, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(UU, RU) : this._context.moveTo(UU, RU);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(UU, RU)
        }
      }
    }, eU.prototype = {
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
            QU(this, this._t0, hU(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(UU, RU) {
        var gU = NaN;
        if (RU = +RU, (UU = +UU) !== this._x1 || RU !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(UU, RU) : this._context.moveTo(UU, RU);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, QU(this, hU(this, gU = CU(this, UU, RU)), gU);
              break;
            default:
              QU(this, this._t0, gU = CU(this, UU, RU))
          }
          this._x0 = this._x1, this._x1 = UU, this._y0 = this._y1, this._y1 = RU, this._t0 = gU
        }
      }
    }, (WU.prototype = Object.create(eU.prototype)).point = function(UU, RU) {
      eU.prototype.point.call(this, RU, UU)
    }, fU.prototype = {
      moveTo: function(UU, RU) {
        this._context.moveTo(RU, UU)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(UU, RU) {
        this._context.lineTo(RU, UU)
      },
      bezierCurveTo: function(UU, RU, gU, tU, pU, EU) {
        this._context.bezierCurveTo(RU, UU, tU, gU, EU, pU)
      }
    }, xU.prototype = {
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
        var UU = this._x,
          RU = this._y,
          gU = UU.length;
        if (gU)
          if (this._line ? this._context.lineTo(UU[0], RU[0]) : this._context.moveTo(UU[0], RU[0]), 2 === gU) this._context.lineTo(UU[1], RU[1]);
          else
            for (var tU = mU(UU), pU = mU(RU), EU = 0, PU = 1; PU < gU; ++EU, ++PU) this._context.bezierCurveTo(tU[0][EU], pU[0][EU], tU[1][EU], pU[1][EU], UU[PU], RU[PU]);
        (this._line || 0 !== this._line && 1 === gU) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(UU, RU) {
        this._x.push(+UU), this._y.push(+RU)
      }
    }, IU.prototype = {
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
      point: function(UU, RU) {
        switch (UU = +UU, RU = +RU, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(UU, RU) : this._context.moveTo(UU, RU);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, RU), this._context.lineTo(UU, RU);
            else {
              var gU = this._x * (1 - this._t) + UU * this._t;
              this._context.lineTo(gU, this._y), this._context.lineTo(gU, RU)
            }
        }
        this._x = UU, this._y = RU
      }
    };
    var JU = gU(5891),
      wU = gU(5780),
      nU = gU(5789);

    function bU(UU) {
      return UU[0]
    }

    function oU(UU) {
      return UU[1]
    }

    function ZU(UU, RU) {
      var gU = (0, wU.d)(!0),
        tU = null,
        pU = jU,
        EU = null,
        PU = (0, nU.d)(TU);

      function TU(TU) {
        var qU, KU, cU, GU = (TU = (0, JU.e)(TU)).length,
          jU = !1;
        for (null == tU && (EU = pU(cU = PU())), qU = 0; qU <= GU; ++qU) !(qU < GU && gU(KU = TU[qU], qU, TU)) === jU && ((jU = !jU) ? EU.lineStart() : EU.lineEnd()), jU && EU.point(+UU(KU, qU, TU), +RU(KU, qU, TU));
        if (cU) return EU = null, cU + "" || null
      }
      return UU = "function" === typeof UU ? UU : void 0 === UU ? bU : (0, wU.d)(UU), RU = "function" === typeof RU ? RU : void 0 === RU ? oU : (0, wU.d)(RU), TU.x = function(RU) {
        return arguments.length ? (UU = "function" === typeof RU ? RU : (0, wU.d)(+RU), TU) : UU
      }, TU.y = function(UU) {
        return arguments.length ? (RU = "function" === typeof UU ? UU : (0, wU.d)(+UU), TU) : RU
      }, TU.defined = function(UU) {
        return arguments.length ? (gU = "function" === typeof UU ? UU : (0, wU.d)(!!UU), TU) : gU
      }, TU.curve = function(UU) {
        return arguments.length ? (pU = UU, null != tU && (EU = pU(tU)), TU) : pU
      }, TU.context = function(UU) {
        return arguments.length ? (null == UU ? tU = EU = null : EU = pU(tU = UU), TU) : tU
      }, TU
    }

    function aU(UU, RU, gU) {
      var tU = null,
        pU = (0, wU.d)(!0),
        EU = null,
        PU = jU,
        TU = null,
        qU = (0, nU.d)(KU);

      function KU(KU) {
        var cU, GU, jU, uU, CU, hU = (KU = (0, JU.e)(KU)).length,
          QU = !1,
          eU = new Array(hU),
          WU = new Array(hU);
        for (null == EU && (TU = PU(CU = qU())), cU = 0; cU <= hU; ++cU) {
          if (!(cU < hU && pU(uU = KU[cU], cU, KU)) === QU)
            if (QU = !QU) GU = cU, TU.areaStart(), TU.lineStart();
            else {
              for (TU.lineEnd(), TU.lineStart(), jU = cU - 1; jU >= GU; --jU) TU.point(eU[jU], WU[jU]);
              TU.lineEnd(), TU.areaEnd()
            } QU && (eU[cU] = +UU(uU, cU, KU), WU[cU] = +RU(uU, cU, KU), TU.point(tU ? +tU(uU, cU, KU) : eU[cU], gU ? +gU(uU, cU, KU) : WU[cU]))
        }
        if (CU) return TU = null, CU + "" || null
      }

      function cU() {
        return ZU().defined(pU).curve(PU).context(EU)
      }
      return UU = "function" === typeof UU ? UU : void 0 === UU ? bU : (0, wU.d)(+UU), RU = "function" === typeof RU ? RU : void 0 === RU ? (0, wU.d)(0) : (0, wU.d)(+RU), gU = "function" === typeof gU ? gU : void 0 === gU ? oU : (0, wU.d)(+gU), KU.x = function(RU) {
        return arguments.length ? (UU = "function" === typeof RU ? RU : (0, wU.d)(+RU), tU = null, KU) : UU
      }, KU.x0 = function(RU) {
        return arguments.length ? (UU = "function" === typeof RU ? RU : (0, wU.d)(+RU), KU) : UU
      }, KU.x1 = function(UU) {
        return arguments.length ? (tU = null == UU ? null : "function" === typeof UU ? UU : (0, wU.d)(+UU), KU) : tU
      }, KU.y = function(UU) {
        return arguments.length ? (RU = "function" === typeof UU ? UU : (0, wU.d)(+UU), gU = null, KU) : RU
      }, KU.y0 = function(UU) {
        return arguments.length ? (RU = "function" === typeof UU ? UU : (0, wU.d)(+UU), KU) : RU
      }, KU.y1 = function(UU) {
        return arguments.length ? (gU = null == UU ? null : "function" === typeof UU ? UU : (0, wU.d)(+UU), KU) : gU
      }, KU.lineX0 = KU.lineY0 = function() {
        return cU().x(UU).y(RU)
      }, KU.lineY1 = function() {
        return cU().x(UU).y(gU)
      }, KU.lineX1 = function() {
        return cU().x(tU).y(RU)
      }, KU.defined = function(UU) {
        return arguments.length ? (pU = "function" === typeof UU ? UU : (0, wU.d)(!!UU), KU) : pU
      }, KU.curve = function(UU) {
        return arguments.length ? (PU = UU, null != EU && (TU = PU(EU)), KU) : PU
      }, KU.context = function(UU) {
        return arguments.length ? (null == UU ? EU = TU = null : TU = PU(EU = UU), KU) : EU
      }, KU
    }
    var YU = gU(5735),
      BU = gU.n(YU),
      VU = gU(4921),
      rU = gU.n(VU),
      XU = gU(4733),
      vU = gU(5125),
      dU = gU(5097),
      HU = gU(4827);

    function SU(UU) {
      return SU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, SU(UU)
    }

    function sU() {
      return sU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, sU.apply(this, arguments)
    }

    function yU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function kU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? yU(Object(gU), !0).forEach((function(RU) {
          FU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : yU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function FU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != SU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != SU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == SU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }
    var iU = {
        curveBasisClosed: function(UU) {
          return new TU(UU)
        },
        curveBasisOpen: function(UU) {
          return new qU(UU)
        },
        curveBasis: function(UU) {
          return new PU(UU)
        },
        curveBumpX: function(UU) {
          return new KU(UU, !0)
        },
        curveBumpY: function(UU) {
          return new KU(UU, !1)
        },
        curveLinearClosed: function(UU) {
          return new cU(UU)
        },
        curveLinear: jU,
        curveMonotoneX: function(UU) {
          return new eU(UU)
        },
        curveMonotoneY: function(UU) {
          return new WU(UU)
        },
        curveNatural: function(UU) {
          return new xU(UU)
        },
        curveStep: function(UU) {
          return new IU(UU, .5)
        },
        curveStepAfter: function(UU) {
          return new IU(UU, 1)
        },
        curveStepBefore: function(UU) {
          return new IU(UU, 0)
        }
      },
      AU = function(UU) {
        return UU.x === +UU.x && UU.y === +UU.y
      },
      zU = function(UU) {
        return UU.x
      },
      MU = function(UU) {
        return UU.y
      },
      DU = function(UU) {
        var RU, gU = UU.type,
          tU = void 0 === gU ? "linear" : gU,
          pU = UU.points,
          EU = void 0 === pU ? [] : pU,
          PU = UU.baseLine,
          TU = UU.layout,
          qU = UU.connectNulls,
          KU = void 0 !== qU && qU,
          cU = function(UU, RU) {
            if (rU()(UU)) return UU;
            var gU = "curve".concat(BU()(UU));
            return "curveMonotone" !== gU && "curveBump" !== gU || !RU ? iU[gU] || jU : iU["".concat(gU).concat("vertical" === RU ? "Y" : "X")]
          }(tU, TU),
          GU = KU ? EU.filter((function(UU) {
            return AU(UU)
          })) : EU;
        if (Array.isArray(PU)) {
          var uU = KU ? PU.filter((function(UU) {
              return AU(UU)
            })) : PU,
            CU = GU.map((function(UU, RU) {
              return kU(kU({}, UU), {}, {
                base: uU[RU]
              })
            }));
          return (RU = "vertical" === TU ? aU().y(MU).x1(zU).x0((function(UU) {
            return UU.base.x
          })) : aU().x(zU).y1(MU).y0((function(UU) {
            return UU.base.y
          }))).defined(AU).curve(cU), RU(CU)
        }
        return (RU = "vertical" === TU && (0, HU.v)(PU) ? aU().y(MU).x1(zU).x0(PU) : (0, HU.v)(PU) ? aU().x(zU).y1(MU).y0(PU) : ZU().x(zU).y(MU)).defined(AU).curve(cU), RU(GU)
      },
      LU = function(UU) {
        var RU = UU.className,
          gU = UU.points,
          pU = UU.path,
          EU = UU.pathRef;
        if ((!gU || !gU.length) && !pU) return null;
        var PU = gU && gU.length ? DU(UU) : pU;
        return tU.createElement("path", sU({}, (0, dU.b)(UU, !1), (0, vU.o)(UU), {
          className: (0, XU.e)("recharts-curve", RU),
          d: PU,
          ref: EU
        }))
      }
  },
  5791: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => qU
    });
    var tU = gU(56),
      pU = gU(4733),
      EU = gU(5125),
      PU = gU(5097);

    function TU() {
      return TU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, TU.apply(this, arguments)
    }
    var qU = function(UU) {
      var RU = UU.cx,
        gU = UU.cy,
        qU = UU.r,
        KU = UU.className,
        cU = (0, pU.e)("recharts-dot", KU);
      return RU === +RU && gU === +gU && qU === +qU ? tU.createElement("circle", TU({}, (0, PU.b)(UU, !1), (0, EU.o)(UU), {
        className: cU,
        cx: RU,
        cy: gU,
        r: qU
      })) : null
    }
  },
  5796: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => eU,
      d: () => hU
    });
    var tU = gU(56),
      pU = gU(4733),
      EU = gU(5799),
      PU = gU(5097);

    function TU(UU) {
      return TU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, TU(UU)
    }

    function qU() {
      return qU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, qU.apply(this, arguments)
    }

    function KU(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        var gU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != gU) {
          var tU, pU, EU, PU, TU = [],
            qU = !0,
            KU = !1;
          try {
            if (EU = (gU = gU.call(UU)).next, 0 === RU) {
              if (Object(gU) !== gU) return;
              qU = !1
            } else
              for (; !(qU = (tU = EU.call(gU)).done) && (TU.push(tU.value), TU.length !== RU); qU = !0);
          } catch (UU) {
            KU = !0, pU = UU
          } finally {
            try {
              if (!qU && null != gU.return && (PU = gU.return(), Object(PU) !== PU)) return
            } finally {
              if (KU) throw pU
            }
          }
          return TU
        }
      }(UU, RU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return cU(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return cU(UU, RU)
      }(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function GU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function jU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? GU(Object(gU), !0).forEach((function(RU) {
          uU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : GU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function uU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != TU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != TU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == TU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }
    var CU = function(UU, RU, gU, tU, pU) {
        var EU, PU = Math.min(Math.abs(gU) / 2, Math.abs(tU) / 2),
          TU = tU >= 0 ? 1 : -1,
          qU = gU >= 0 ? 1 : -1,
          KU = tU >= 0 && gU >= 0 || tU < 0 && gU < 0 ? 1 : 0;
        if (PU > 0 && pU instanceof Array) {
          for (var cU = [0, 0, 0, 0], GU = 0; GU < 4; GU++) cU[GU] = pU[GU] > PU ? PU : pU[GU];
          EU = "M".concat(UU, ",").concat(RU + TU * cU[0]), cU[0] > 0 && (EU += "A ".concat(cU[0], ",").concat(cU[0], ",0,0,").concat(KU, ",").concat(UU + qU * cU[0], ",").concat(RU)), EU += "L ".concat(UU + gU - qU * cU[1], ",").concat(RU), cU[1] > 0 && (EU += "A ".concat(cU[1], ",").concat(cU[1], ",0,0,").concat(KU, ",\n        ").concat(UU + gU, ",").concat(RU + TU * cU[1])), EU += "L ".concat(UU + gU, ",").concat(RU + tU - TU * cU[2]), cU[2] > 0 && (EU += "A ".concat(cU[2], ",").concat(cU[2], ",0,0,").concat(KU, ",\n        ").concat(UU + gU - qU * cU[2], ",").concat(RU + tU)), EU += "L ".concat(UU + qU * cU[3], ",").concat(RU + tU), cU[3] > 0 && (EU += "A ".concat(cU[3], ",").concat(cU[3], ",0,0,").concat(KU, ",\n        ").concat(UU, ",").concat(RU + tU - TU * cU[3])), EU += "Z"
        } else if (PU > 0 && pU === +pU && pU > 0) {
          var jU = Math.min(PU, pU);
          EU = "M ".concat(UU, ",").concat(RU + TU * jU, "\n            A ").concat(jU, ",").concat(jU, ",0,0,").concat(KU, ",").concat(UU + qU * jU, ",").concat(RU, "\n            L ").concat(UU + gU - qU * jU, ",").concat(RU, "\n            A ").concat(jU, ",").concat(jU, ",0,0,").concat(KU, ",").concat(UU + gU, ",").concat(RU + TU * jU, "\n            L ").concat(UU + gU, ",").concat(RU + tU - TU * jU, "\n            A ").concat(jU, ",").concat(jU, ",0,0,").concat(KU, ",").concat(UU + gU - qU * jU, ",").concat(RU + tU, "\n            L ").concat(UU + qU * jU, ",").concat(RU + tU, "\n            A ").concat(jU, ",").concat(jU, ",0,0,").concat(KU, ",").concat(UU, ",").concat(RU + tU - TU * jU, " Z")
        } else EU = "M ".concat(UU, ",").concat(RU, " h ").concat(gU, " v ").concat(tU, " h ").concat(-gU, " Z");
        return EU
      },
      hU = function(UU, RU) {
        if (!UU || !RU) return !1;
        var gU = UU.x,
          tU = UU.y,
          pU = RU.x,
          EU = RU.y,
          PU = RU.width,
          TU = RU.height;
        if (Math.abs(PU) > 0 && Math.abs(TU) > 0) {
          var qU = Math.min(pU, pU + PU),
            KU = Math.max(pU, pU + PU),
            cU = Math.min(EU, EU + TU),
            GU = Math.max(EU, EU + TU);
          return gU >= qU && gU <= KU && tU >= cU && tU <= GU
        }
        return !1
      },
      QU = {
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
      eU = function(UU) {
        var RU = jU(jU({}, QU), UU),
          gU = (0, tU.useRef)(),
          TU = KU((0, tU.useState)(-1), 2),
          cU = TU[0],
          GU = TU[1];
        (0, tU.useEffect)((function() {
          if (gU.current && gU.current.getTotalLength) try {
            var UU = gU.current.getTotalLength();
            UU && GU(UU)
          } catch (RU) {}
        }), []);
        var uU = RU.x,
          hU = RU.y,
          eU = RU.width,
          WU = RU.height,
          fU = RU.radius,
          xU = RU.className,
          mU = RU.animationEasing,
          IU = RU.animationDuration,
          JU = RU.animationBegin,
          wU = RU.isAnimationActive,
          nU = RU.isUpdateAnimationActive;
        if (uU !== +uU || hU !== +hU || eU !== +eU || WU !== +WU || 0 === eU || 0 === WU) return null;
        var bU = (0, pU.e)("recharts-rectangle", xU);
        return nU ? tU.createElement(EU.b, {
          canBegin: cU > 0,
          from: {
            width: eU,
            height: WU,
            x: uU,
            y: hU
          },
          to: {
            width: eU,
            height: WU,
            x: uU,
            y: hU
          },
          duration: IU,
          animationEasing: mU,
          isActive: nU
        }, (function(UU) {
          var pU = UU.width,
            TU = UU.height,
            KU = UU.x,
            GU = UU.y;
          return tU.createElement(EU.b, {
            canBegin: cU > 0,
            from: "0px ".concat(-1 === cU ? 1 : cU, "px"),
            to: "".concat(cU, "px 0px"),
            attributeName: "strokeDasharray",
            pu: JU,
            duration: IU,
            isActive: wU,
            easing: mU
          }, tU.createElement("path", qU({}, (0, PU.b)(RU, !0), {
            className: bU,
            d: CU(KU, GU, pU, TU, fU),
            ref: gU
          })))
        })) : tU.createElement("path", qU({}, (0, PU.b)(RU, !0), {
          className: bU,
          d: CU(uU, hU, eU, WU, fU)
        }))
      }
  },
  5996: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => QU
    });
    var tU = gU(56),
      pU = gU(4733),
      EU = gU(5097),
      PU = gU(5904),
      TU = gU(4827);

    function qU(UU) {
      return qU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, qU(UU)
    }

    function KU() {
      return KU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, KU.apply(this, arguments)
    }

    function cU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function GU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? cU(Object(gU), !0).forEach((function(RU) {
          jU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : cU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function jU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != qU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != qU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == qU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }
    var uU = function(UU) {
        var RU = UU.cx,
          gU = UU.cy,
          tU = UU.radius,
          pU = UU.angle,
          EU = UU.sign,
          TU = UU.isExternal,
          qU = UU.cornerRadius,
          KU = UU.cornerIsExternal,
          cU = qU * (TU ? 1 : -1) + tU,
          GU = Math.asin(qU / cU) / PU.b,
          jU = KU ? pU : pU + EU * GU,
          uU = KU ? pU - EU * GU : pU;
        return {
          center: (0, PU.f)(RU, gU, cU, jU),
          circleTangency: (0, PU.f)(RU, gU, tU, jU),
          lineTangency: (0, PU.f)(RU, gU, cU * Math.cos(GU * PU.b), uU),
          fp: GU
        }
      },
      CU = function(UU) {
        var RU = UU.cx,
          gU = UU.cy,
          tU = UU.innerRadius,
          pU = UU.outerRadius,
          EU = UU.startAngle,
          qU = function(UU, RU) {
            return (0, TU.y)(RU - UU) * Math.min(Math.abs(RU - UU), 359.999)
          }(EU, UU.endAngle),
          KU = EU + qU,
          cU = (0, PU.f)(RU, gU, pU, EU),
          GU = (0, PU.f)(RU, gU, pU, KU),
          jU = "M ".concat(cU.x, ",").concat(cU.y, "\n    A ").concat(pU, ",").concat(pU, ",0,\n    ").concat(+(Math.abs(qU) > 180), ",").concat(+(EU > KU), ",\n    ").concat(GU.x, ",").concat(GU.y, "\n  ");
        if (tU > 0) {
          var uU = (0, PU.f)(RU, gU, tU, EU),
            CU = (0, PU.f)(RU, gU, tU, KU);
          jU += "L ".concat(CU.x, ",").concat(CU.y, "\n            A ").concat(tU, ",").concat(tU, ",0,\n            ").concat(+(Math.abs(qU) > 180), ",").concat(+(EU <= KU), ",\n            ").concat(uU.x, ",").concat(uU.y, " Z")
        } else jU += "L ".concat(RU, ",").concat(gU, " Z");
        return jU
      },
      hU = {
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
      QU = function(UU) {
        var RU = GU(GU({}, hU), UU),
          gU = RU.cx,
          PU = RU.cy,
          qU = RU.innerRadius,
          cU = RU.outerRadius,
          jU = RU.cornerRadius,
          QU = RU.forceCornerRadius,
          eU = RU.cornerIsExternal,
          WU = RU.startAngle,
          fU = RU.endAngle,
          xU = RU.className;
        if (cU < qU || WU === fU) return null;
        var mU, IU = (0, pU.e)("recharts-sector", xU),
          JU = cU - qU,
          wU = (0, TU.k)(jU, JU, 0, !0);
        return mU = wU > 0 && Math.abs(WU - fU) < 360 ? function(UU) {
          var RU = UU.cx,
            gU = UU.cy,
            tU = UU.innerRadius,
            pU = UU.outerRadius,
            EU = UU.cornerRadius,
            PU = UU.forceCornerRadius,
            qU = UU.cornerIsExternal,
            KU = UU.startAngle,
            cU = UU.endAngle,
            GU = (0, TU.y)(cU - KU),
            jU = uU({
              cx: RU,
              cy: gU,
              radius: pU,
              angle: KU,
              sign: GU,
              cornerRadius: EU,
              cornerIsExternal: qU
            }),
            hU = jU.circleTangency,
            QU = jU.lineTangency,
            eU = jU.fp,
            WU = uU({
              cx: RU,
              cy: gU,
              radius: pU,
              angle: cU,
              sign: -GU,
              cornerRadius: EU,
              cornerIsExternal: qU
            }),
            fU = WU.circleTangency,
            xU = WU.lineTangency,
            mU = WU.fp,
            IU = qU ? Math.abs(KU - cU) : Math.abs(KU - cU) - eU - mU;
          if (IU < 0) return PU ? "M ".concat(QU.x, ",").concat(QU.y, "\n        a").concat(EU, ",").concat(EU, ",0,0,1,").concat(2 * EU, ",0\n        a").concat(EU, ",").concat(EU, ",0,0,1,").concat(2 * -EU, ",0\n      ") : CU({
            cx: RU,
            cy: gU,
            innerRadius: tU,
            outerRadius: pU,
            startAngle: KU,
            endAngle: cU
          });
          var JU = "M ".concat(QU.x, ",").concat(QU.y, "\n    A").concat(EU, ",").concat(EU, ",0,0,").concat(+(GU < 0), ",").concat(hU.x, ",").concat(hU.y, "\n    A").concat(pU, ",").concat(pU, ",0,").concat(+(IU > 180), ",").concat(+(GU < 0), ",").concat(fU.x, ",").concat(fU.y, "\n    A").concat(EU, ",").concat(EU, ",0,0,").concat(+(GU < 0), ",").concat(xU.x, ",").concat(xU.y, "\n  ");
          if (tU > 0) {
            var wU = uU({
                cx: RU,
                cy: gU,
                radius: tU,
                angle: KU,
                sign: GU,
                isExternal: !0,
                cornerRadius: EU,
                cornerIsExternal: qU
              }),
              nU = wU.circleTangency,
              bU = wU.lineTangency,
              oU = wU.fp,
              ZU = uU({
                cx: RU,
                cy: gU,
                radius: tU,
                angle: cU,
                sign: -GU,
                isExternal: !0,
                cornerRadius: EU,
                cornerIsExternal: qU
              }),
              aU = ZU.circleTangency,
              YU = ZU.lineTangency,
              BU = ZU.fp,
              VU = qU ? Math.abs(KU - cU) : Math.abs(KU - cU) - oU - BU;
            if (VU < 0 && 0 === EU) return "".concat(JU, "L").concat(RU, ",").concat(gU, "Z");
            JU += "L".concat(YU.x, ",").concat(YU.y, "\n      A").concat(EU, ",").concat(EU, ",0,0,").concat(+(GU < 0), ",").concat(aU.x, ",").concat(aU.y, "\n      A").concat(tU, ",").concat(tU, ",0,").concat(+(VU > 180), ",").concat(+(GU > 0), ",").concat(nU.x, ",").concat(nU.y, "\n      A").concat(EU, ",").concat(EU, ",0,0,").concat(+(GU < 0), ",").concat(bU.x, ",").concat(bU.y, "Z")
          } else JU += "L".concat(RU, ",").concat(gU, "Z");
          return JU
        }({
          cx: gU,
          cy: PU,
          innerRadius: qU,
          outerRadius: cU,
          cornerRadius: Math.min(wU, JU / 2),
          forceCornerRadius: QU,
          cornerIsExternal: eU,
          startAngle: WU,
          endAngle: fU
        }) : CU({
          cx: gU,
          cy: PU,
          innerRadius: qU,
          outerRadius: cU,
          startAngle: WU,
          endAngle: fU
        }), tU.createElement("path", KU({}, (0, EU.b)(RU, !0), {
          className: IU,
          d: mU,
          role: "img"
        }))
      }
  },
  5726: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => kU
    });
    var tU = gU(56),
      pU = gU(5735),
      EU = gU.n(pU);
    Math.abs, Math.atan2;
    const PU = Math.cos,
      TU = (Math.max, Math.min, Math.sin),
      qU = Math.sqrt,
      KU = Math.PI,
      cU = 2 * KU;
    const GU = {
        draw(UU, RU) {
          const gU = qU(RU / KU);
          UU.moveTo(gU, 0), UU.arc(0, 0, gU, 0, cU)
        }
      },
      jU = {
        draw(UU, RU) {
          const gU = qU(RU / 5) / 2;
          UU.moveTo(-3 * gU, -gU), UU.lineTo(-gU, -gU), UU.lineTo(-gU, -3 * gU), UU.lineTo(gU, -3 * gU), UU.lineTo(gU, -gU), UU.lineTo(3 * gU, -gU), UU.lineTo(3 * gU, gU), UU.lineTo(gU, gU), UU.lineTo(gU, 3 * gU), UU.lineTo(-gU, 3 * gU), UU.lineTo(-gU, gU), UU.lineTo(-3 * gU, gU), UU.closePath()
        }
      },
      uU = qU(1 / 3),
      CU = 2 * uU,
      hU = {
        draw(UU, RU) {
          const gU = qU(RU / CU),
            tU = gU * uU;
          UU.moveTo(0, -gU), UU.lineTo(tU, 0), UU.lineTo(0, gU), UU.lineTo(-tU, 0), UU.closePath()
        }
      },
      QU = {
        draw(UU, RU) {
          const gU = qU(RU),
            tU = -gU / 2;
          UU.rect(tU, tU, gU, gU)
        }
      },
      eU = TU(KU / 10) / TU(7 * KU / 10),
      WU = TU(cU / 10) * eU,
      fU = -PU(cU / 10) * eU,
      xU = {
        draw(UU, RU) {
          const gU = qU(.8908130915292852 * RU),
            tU = WU * gU,
            pU = fU * gU;
          UU.moveTo(0, -gU), UU.lineTo(tU, pU);
          for (let EU = 1; EU < 5; ++EU) {
            const RU = cU * EU / 5,
              qU = PU(RU),
              KU = TU(RU);
            UU.lineTo(KU * gU, -qU * gU), UU.lineTo(qU * tU - KU * pU, KU * tU + qU * pU)
          }
          UU.closePath()
        }
      },
      mU = qU(3),
      IU = {
        draw(UU, RU) {
          const gU = -qU(RU / (3 * mU));
          UU.moveTo(0, 2 * gU), UU.lineTo(-mU * gU, -gU), UU.lineTo(mU * gU, -gU), UU.closePath()
        }
      },
      JU = -.5,
      wU = qU(3) / 2,
      nU = 1 / qU(12),
      bU = 3 * (nU / 2 + 1),
      oU = {
        draw(UU, RU) {
          const gU = qU(RU / bU),
            tU = gU / 2,
            pU = gU * nU,
            EU = tU,
            PU = gU * nU + gU,
            TU = -EU,
            KU = PU;
          UU.moveTo(tU, pU), UU.lineTo(EU, PU), UU.lineTo(TU, KU), UU.lineTo(JU * tU - wU * pU, wU * tU + JU * pU), UU.lineTo(JU * EU - wU * PU, wU * EU + JU * PU), UU.lineTo(JU * TU - wU * KU, wU * TU + JU * KU), UU.lineTo(JU * tU + wU * pU, JU * pU - wU * tU), UU.lineTo(JU * EU + wU * PU, JU * PU - wU * EU), UU.lineTo(JU * TU + wU * KU, JU * KU - wU * TU), UU.closePath()
        }
      };
    var ZU = gU(5780),
      aU = gU(5789);
    qU(3), qU(3);
    var YU = gU(4733),
      BU = gU(5097);

    function VU(UU) {
      return VU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, VU(UU)
    }
    var rU = ["type", "size", "sizeType"];

    function XU() {
      return XU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, XU.apply(this, arguments)
    }

    function vU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function dU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? vU(Object(gU), !0).forEach((function(RU) {
          HU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : vU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function HU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != VU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != VU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == VU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function SU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }
    var sU = {
        symbolCircle: GU,
        symbolCross: jU,
        symbolDiamond: hU,
        symbolSquare: QU,
        symbolStar: xU,
        symbolTriangle: IU,
        symbolWye: oU
      },
      yU = Math.PI / 180,
      kU = function(UU) {
        var RU = UU.type,
          gU = void 0 === RU ? "circle" : RU,
          pU = UU.size,
          PU = void 0 === pU ? 64 : pU,
          TU = UU.sizeType,
          qU = void 0 === TU ? "area" : TU,
          KU = dU(dU({}, SU(UU, rU)), {}, {
            type: gU,
            size: PU,
            sizeType: qU
          }),
          cU = KU.className,
          jU = KU.cx,
          uU = KU.cy,
          CU = (0, BU.b)(KU, !0);
        return jU === +jU && uU === +uU && PU === +PU ? tU.createElement("path", XU({}, CU, {
          className: (0, YU.e)("recharts-symbols", cU),
          transform: "translate(".concat(jU, ", ").concat(uU, ")"),
          d: function() {
            var UU = function(UU) {
                var RU = "symbol".concat(EU()(UU));
                return sU[RU] || GU
              }(gU),
              RU = function(UU, RU) {
                let gU = null,
                  tU = (0, aU.d)(pU);

                function pU() {
                  let pU;
                  if (gU || (gU = pU = tU()), UU.apply(this, arguments).draw(gU, +RU.apply(this, arguments)), pU) return gU = null, pU + "" || null
                }
                return UU = "function" === typeof UU ? UU : (0, ZU.d)(UU || GU), RU = "function" === typeof RU ? RU : (0, ZU.d)(void 0 === RU ? 64 : +RU), pU.type = function(RU) {
                  return arguments.length ? (UU = "function" === typeof RU ? RU : (0, ZU.d)(RU), pU) : UU
                }, pU.size = function(UU) {
                  return arguments.length ? (RU = "function" === typeof UU ? UU : (0, ZU.d)(+UU), pU) : RU
                }, pU.context = function(UU) {
                  return arguments.length ? (gU = null == UU ? null : UU, pU) : gU
                }, pU
              }().type(UU).size(function(UU, RU, gU) {
                if ("area" === RU) return UU;
                switch (gU) {
                  case "cross":
                    return 5 * UU * UU / 9;
                  case "diamond":
                    return .5 * UU * UU / Math.sqrt(3);
                  case "square":
                    return UU * UU;
                  case "star":
                    var tU = 18 * yU;
                    return 1.25 * UU * UU * (Math.tan(tU) - Math.tan(2 * tU) * Math.pow(Math.tan(tU), 2));
                  case "triangle":
                    return Math.sqrt(3) * UU * UU / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * UU * UU / 8;
                  default:
                    return Math.PI * UU * UU / 4
                }
              }(PU, qU, gU));
            return RU()
          }()
        })) : null
      };
    kU.registerSymbol = function(UU, RU) {
      sU["symbol".concat(EU()(UU))] = RU
    }
  },
  5976: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => HU,
      f: () => AU,
      j: () => SU,
      l: () => sU,
      m: () => yU
    });
    var tU = gU(56),
      pU = gU(4921),
      EU = gU.n(pU),
      PU = gU(5979),
      TU = gU.n(PU),
      qU = gU(5987),
      KU = gU.n(qU),
      cU = gU(5874),
      GU = gU.n(cU),
      jU = gU(5796),
      uU = gU(4733),
      CU = gU(5799),
      hU = gU(5097);

    function QU(UU) {
      return QU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, QU(UU)
    }

    function eU() {
      return eU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU) Object.prototype.hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, eU.apply(this, arguments)
    }

    function WU(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        var gU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != gU) {
          var tU, pU, EU, PU, TU = [],
            qU = !0,
            KU = !1;
          try {
            if (EU = (gU = gU.call(UU)).next, 0 === RU) {
              if (Object(gU) !== gU) return;
              qU = !1
            } else
              for (; !(qU = (tU = EU.call(gU)).done) && (TU.push(tU.value), TU.length !== RU); qU = !0);
          } catch (UU) {
            KU = !0, pU = UU
          } finally {
            try {
              if (!qU && null != gU.return && (PU = gU.return(), Object(PU) !== PU)) return
            } finally {
              if (KU) throw pU
            }
          }
          return TU
        }
      }(UU, RU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return fU(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return fU(UU, RU)
      }(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function xU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function mU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? xU(Object(gU), !0).forEach((function(RU) {
          IU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : xU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function IU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != QU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != QU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == QU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }
    var JU = function(UU, RU, gU, tU, pU) {
        var EU, PU = gU - tU;
        return EU = "M ".concat(UU, ",").concat(RU), EU += "L ".concat(UU + gU, ",").concat(RU), EU += "L ".concat(UU + gU - PU / 2, ",").concat(RU + pU), EU += "L ".concat(UU + gU - PU / 2 - tU, ",").concat(RU + pU), EU += "L ".concat(UU, ",").concat(RU, " Z")
      },
      wU = {
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
      nU = function(UU) {
        var RU = mU(mU({}, wU), UU),
          gU = (0, tU.useRef)(),
          pU = WU((0, tU.useState)(-1), 2),
          EU = pU[0],
          PU = pU[1];
        (0, tU.useEffect)((function() {
          if (gU.current && gU.current.getTotalLength) try {
            var UU = gU.current.getTotalLength();
            UU && PU(UU)
          } catch (RU) {}
        }), []);
        var TU = RU.x,
          qU = RU.y,
          KU = RU.upperWidth,
          cU = RU.lowerWidth,
          GU = RU.height,
          jU = RU.className,
          QU = RU.animationEasing,
          fU = RU.animationDuration,
          xU = RU.animationBegin,
          IU = RU.isUpdateAnimationActive;
        if (TU !== +TU || qU !== +qU || KU !== +KU || cU !== +cU || GU !== +GU || 0 === KU && 0 === cU || 0 === GU) return null;
        var nU = (0, uU.e)("recharts-trapezoid", jU);
        return IU ? tU.createElement(CU.b, {
          canBegin: EU > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: GU,
            x: TU,
            y: qU
          },
          to: {
            upperWidth: KU,
            lowerWidth: cU,
            height: GU,
            x: TU,
            y: qU
          },
          duration: fU,
          animationEasing: QU,
          isActive: IU
        }, (function(UU) {
          var pU = UU.upperWidth,
            PU = UU.lowerWidth,
            TU = UU.height,
            qU = UU.x,
            KU = UU.y;
          return tU.createElement(CU.b, {
            canBegin: EU > 0,
            from: "0px ".concat(-1 === EU ? 1 : EU, "px"),
            to: "".concat(EU, "px 0px"),
            attributeName: "strokeDasharray",
            pu: xU,
            duration: fU,
            easing: QU
          }, tU.createElement("path", eU({}, (0, hU.b)(RU, !0), {
            className: nU,
            d: JU(qU, KU, pU, PU, TU),
            ref: gU
          })))
        })) : tU.createElement("g", null, tU.createElement("path", eU({}, (0, hU.b)(RU, !0), {
          className: nU,
          d: JU(TU, qU, KU, cU, GU)
        })))
      },
      bU = gU(5996),
      oU = gU(5633),
      ZU = gU(5726),
      aU = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function YU(UU) {
      return YU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, YU(UU)
    }

    function BU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function VU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function rU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? VU(Object(gU), !0).forEach((function(RU) {
          XU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : VU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function XU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != YU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != YU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == YU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function vU(UU, RU) {
      return rU(rU({}, RU), UU)
    }

    function dU(UU) {
      var RU = UU.shapeType,
        gU = UU.elementProps;
      switch (RU) {
        case "rectangle":
          return tU.createElement(jU.c, gU);
        case "trapezoid":
          return tU.createElement(nU, gU);
        case "sector":
          return tU.createElement(bU.b, gU);
        case "symbols":
          if (function(UU) {
              return "symbols" === UU
            }(RU)) return tU.createElement(ZU.c, gU);
          break;
        default:
          return null
      }
    }

    function HU(UU) {
      var RU, gU = UU.option,
        pU = UU.shapeType,
        PU = UU.propTransformer,
        qU = void 0 === PU ? vU : PU,
        cU = UU.activeClassName,
        GU = void 0 === cU ? "recharts-active-shape" : cU,
        jU = UU.isActive,
        uU = BU(UU, aU);
      if ((0, tU.isValidElement)(gU)) RU = (0, tU.cloneElement)(gU, rU(rU({}, uU), function(UU) {
        return (0, tU.isValidElement)(UU) ? UU.props : UU
      }(gU)));
      else if (EU()(gU)) RU = gU(uU);
      else if (TU()(gU) && !KU()(gU)) {
        var CU = qU(gU, uU);
        RU = tU.createElement(dU, {
          shapeType: pU,
          elementProps: CU
        })
      } else {
        var hU = uU;
        RU = tU.createElement(dU, {
          shapeType: pU,
          elementProps: hU
        })
      }
      return jU ? tU.createElement(oU.e, {
        className: GU
      }, RU) : RU
    }

    function SU(UU, RU) {
      return null != RU && "trapezoids" in UU.props
    }

    function sU(UU, RU) {
      return null != RU && "sectors" in UU.props
    }

    function yU(UU, RU) {
      return null != RU && "points" in UU.props
    }

    function kU(UU, RU) {
      var gU, tU, pU = UU.x === (null === RU || void 0 === RU || null === (gU = RU.labelViewBox) || void 0 === gU ? void 0 : gU.x) || UU.x === RU.x,
        EU = UU.y === (null === RU || void 0 === RU || null === (tU = RU.labelViewBox) || void 0 === tU ? void 0 : tU.y) || UU.y === RU.y;
      return pU && EU
    }

    function FU(UU, RU) {
      var gU = UU.endAngle === RU.endAngle,
        tU = UU.startAngle === RU.startAngle;
      return gU && tU
    }

    function iU(UU, RU) {
      var gU = UU.x === RU.x,
        tU = UU.y === RU.y,
        pU = UU.z === RU.z;
      return gU && tU && pU
    }

    function AU(UU) {
      var RU = UU.activeTooltipItem,
        gU = UU.graphicalItem,
        tU = UU.itemData,
        pU = function(UU, RU) {
          var gU;
          return SU(UU, RU) ? gU = "trapezoids" : sU(UU, RU) ? gU = "sectors" : yU(UU, RU) && (gU = "points"), gU
        }(gU, RU),
        EU = function(UU, RU) {
          var gU, tU;
          return SU(UU, RU) ? null === (gU = RU.tooltipPayload) || void 0 === gU || null === (gU = gU[0]) || void 0 === gU || null === (gU = gU.payload) || void 0 === gU ? void 0 : gU.payload : sU(UU, RU) ? null === (tU = RU.tooltipPayload) || void 0 === tU || null === (tU = tU[0]) || void 0 === tU || null === (tU = tU.payload) || void 0 === tU ? void 0 : tU.payload : yU(UU, RU) ? RU.payload : {}
        }(gU, RU),
        PU = tU.filter((function(UU, tU) {
          var PU = GU()(EU, UU),
            TU = gU.props[pU].filter((function(UU) {
              var tU = function(UU, RU) {
                var gU;
                return SU(UU, RU) ? gU = kU : sU(UU, RU) ? gU = FU : yU(UU, RU) && (gU = iU), gU
              }(gU, RU);
              return tU(UU, RU)
            })),
            qU = gU.props[pU].indexOf(TU[TU.length - 1]);
          return PU && tU === qU
        }));
      return tU.indexOf(PU[PU.length - 1])
    }
  },
  5916: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => mU,
      e: () => eU,
      g: () => IU,
      j: () => fU,
      l: () => WU
    });
    var tU = gU(5922),
      pU = gU.n(tU),
      EU = gU(5933),
      PU = gU.n(EU),
      TU = gU(5817),
      qU = gU(5097),
      KU = gU(4827),
      cU = gU(5948);

    function GU(UU) {
      return GU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, GU(UU)
    }

    function jU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, QU(tU.key), tU)
      }
    }

    function uU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function CU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? uU(Object(gU), !0).forEach((function(RU) {
          hU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : uU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function hU(UU, RU, gU) {
      return (RU = QU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function QU(UU) {
      var RU = function(UU, RU) {
        if ("object" != GU(UU) || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != GU(tU)) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == GU(RU) ? RU : RU + ""
    }
    var eU = function(UU, RU, gU, tU, pU) {
        var EU = UU.width,
          PU = UU.height,
          GU = UU.layout,
          jU = UU.children,
          uU = Object.keys(RU),
          QU = {
            left: gU.left,
            leftMirror: gU.left,
            right: EU - gU.right,
            rightMirror: EU - gU.right,
            top: gU.top,
            topMirror: gU.top,
            bottom: PU - gU.bottom,
            bottomMirror: PU - gU.bottom
          },
          eU = !!(0, qU.g)(jU, cU.c);
        return uU.reduce((function(EU, PU) {
          var qU, cU, jU, uU, WU, fU = RU[PU],
            xU = fU.orientation,
            mU = fU.domain,
            IU = fU.padding,
            JU = void 0 === IU ? {} : IU,
            wU = fU.mirror,
            nU = fU.reversed,
            bU = "".concat(xU).concat(wU ? "Mirror" : "");
          if ("number" === fU.type && ("gap" === fU.padding || "no-gap" === fU.padding)) {
            var oU = mU[1] - mU[0],
              ZU = 1 / 0,
              aU = fU.categoricalDomain.sort(KU.c);
            if (aU.forEach((function(UU, RU) {
                RU > 0 && (ZU = Math.min((UU || 0) - (aU[RU - 1] || 0), ZU))
              })), Number.isFinite(ZU)) {
              var YU = ZU / oU,
                BU = "vertical" === fU.layout ? gU.height : gU.width;
              if ("gap" === fU.padding && (qU = YU * BU / 2), "no-gap" === fU.padding) {
                var VU = (0, KU.k)(UU.barCategoryGap, YU * BU),
                  rU = YU * BU / 2;
                qU = rU - VU - (rU - VU) / BU * VU
              }
            }
          }
          cU = "xAxis" === tU ? [gU.left + (JU.left || 0) + (qU || 0), gU.left + gU.width - (JU.right || 0) - (qU || 0)] : "yAxis" === tU ? "horizontal" === GU ? [gU.top + gU.height - (JU.bottom || 0), gU.top + (JU.top || 0)] : [gU.top + (JU.top || 0) + (qU || 0), gU.top + gU.height - (JU.bottom || 0) - (qU || 0)] : fU.range, nU && (cU = [cU[1], cU[0]]);
          var XU = (0, TU.lb)(fU, pU, eU),
            vU = XU.scale,
            dU = XU.realScaleType;
          vU.domain(mU).range(cU), (0, TU.i)(vU);
          var HU = (0, TU.Y)(vU, CU(CU({}, fU), {}, {
            realScaleType: dU
          }));
          "xAxis" === tU ? (WU = "top" === xU && !wU || "bottom" === xU && wU, jU = gU.left, uU = QU[bU] - WU * fU.height) : "yAxis" === tU && (WU = "left" === xU && !wU || "right" === xU && wU, jU = QU[bU] - WU * fU.width, uU = gU.top);
          var SU = CU(CU(CU({}, fU), HU), {}, {
            realScaleType: dU,
            x: jU,
            y: uU,
            scale: vU,
            width: "xAxis" === tU ? gU.width : fU.width,
            height: "yAxis" === tU ? gU.height : fU.height
          });
          return SU.bandSize = (0, TU.p)(SU, HU), fU.hide || "xAxis" !== tU ? fU.hide || (QU[bU] += (WU ? -1 : 1) * SU.width) : QU[bU] += (WU ? -1 : 1) * SU.height, CU(CU({}, EU), {}, hU({}, PU, SU))
        }), {})
      },
      WU = function(UU, RU) {
        var gU = UU.x,
          tU = UU.y,
          pU = RU.x,
          EU = RU.y;
        return {
          x: Math.min(gU, pU),
          y: Math.min(tU, EU),
          width: Math.abs(pU - gU),
          height: Math.abs(EU - tU)
        }
      },
      fU = function(UU) {
        var RU = UU.x1,
          gU = UU.y1,
          tU = UU.x2,
          pU = UU.y2;
        return WU({
          x: RU,
          y: gU
        }, {
          x: tU,
          y: pU
        })
      },
      xU = function() {
        function UU(RU) {
          ! function(UU, RU) {
            if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
          }(this, UU), this.scale = RU
        }
        return RU = UU, gU = [{
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
          value: function(UU) {
            var RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              gU = RU.bandAware,
              tU = RU.position;
            if (void 0 !== UU) {
              if (tU) switch (tU) {
                case "start":
                default:
                  return this.scale(UU);
                case "middle":
                  var pU = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(UU) + pU;
                case "end":
                  var EU = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(UU) + EU
              }
              if (gU) {
                var PU = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(UU) + PU
              }
              return this.scale(UU)
            }
          }
        }, {
          key: "isInRange",
          value: function(UU) {
            var RU = this.range(),
              gU = RU[0],
              tU = RU[RU.length - 1];
            return gU <= tU ? UU >= gU && UU <= tU : UU >= tU && UU <= gU
          }
        }], tU = [{
          key: "create",
          value: function(RU) {
            return new UU(RU)
          }
        }], gU && jU(RU.prototype, gU), tU && jU(RU, tU), Object.defineProperty(RU, "prototype", {
          writable: !1
        }), RU;
        var RU, gU, tU
      }();
    hU(xU, "EPS", 1e-4);
    var mU = function(UU) {
      var RU = Object.keys(UU).reduce((function(RU, gU) {
        return CU(CU({}, RU), {}, hU({}, gU, xU.create(UU[gU])))
      }), {});
      return CU(CU({}, RU), {}, {
        apply: function(UU) {
          var gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            tU = gU.bandAware,
            EU = gU.position;
          return pU()(UU, (function(UU, gU) {
            return RU[gU].apply(UU, {
              bandAware: tU,
              position: EU
            })
          }))
        },
        isInRange: function(UU) {
          return PU()(UU, (function(UU, gU) {
            return RU[gU].isInRange(UU)
          }))
        }
      })
    };
    var IU = function(UU) {
      var RU = UU.width,
        gU = UU.height,
        tU = function(UU) {
          return (UU % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        pU = tU * Math.PI / 180,
        EU = Math.atan(gU / RU),
        PU = pU > EU && pU < Math.PI - EU ? gU / Math.sin(pU) : RU / Math.cos(pU);
      return Math.abs(PU)
    }
  },
  5817: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => rP,
      f: () => aP,
      i: () => AP,
      l: () => kP,
      m: () => zP,
      p: () => TT,
      q: () => VP,
      s: () => BP,
      t: () => RT,
      u: () => UT,
      w: () => OP,
      y: () => SP,
      C: () => ZP,
      G: () => dP,
      J: () => tT,
      M: () => YP,
      P: () => NP,
      T: () => gT,
      X: () => sP,
      Y: () => lP,
      _: () => KT,
      cb: () => oP,
      db: () => HP,
      gb: () => qT,
      ib: () => vP,
      lb: () => FP,
      ob: () => PT,
      qb: () => MP
    });
    var tU = {};
    gU.r(tU), gU.d(tU, {
      scaleBand: () => pU.c,
      scaleDiverging: () => cE,
      scaleDivergingLog: () => GE,
      scaleDivergingPow: () => uE,
      scaleDivergingSqrt: () => CE,
      scaleDivergingSymlog: () => jE,
      scaleIdentity: () => DR,
      scaleImplicit: () => Kg.d,
      scaleLinear: () => MR,
      scaleLog: () => pg,
      scaleOrdinal: () => Kg.b,
      scalePoint: () => pU.e,
      scalePow: () => Cg,
      scaleQuantile: () => bg,
      scaleQuantize: () => og,
      scaleRadial: () => eg,
      scaleSequential: () => tE,
      scaleSequentialLog: () => pE,
      scaleSequentialPow: () => PE,
      scaleSequentialQuantile: () => qE,
      scaleSequentialSqrt: () => TE,
      scaleSequentialSymlog: () => EE,
      scaleSqrt: () => hg,
      scaleSymlog: () => qg,
      scaleThreshold: () => Zg,
      scaleTime: () => Op,
      scaleUtc: () => UE,
      tickFormat: () => AR
    });
    var pU = gU(5824);
    const EU = Math.sqrt(50),
      PU = Math.sqrt(10),
      TU = Math.sqrt(2);

    function qU(UU, RU, gU) {
      const tU = (RU - UU) / Math.max(0, gU),
        pU = Math.floor(Math.log10(tU)),
        KU = tU / Math.pow(10, pU),
        cU = KU >= EU ? 10 : KU >= PU ? 5 : KU >= TU ? 2 : 1;
      let GU, jU, uU;
      return pU < 0 ? (uU = Math.pow(10, -pU) / cU, GU = Math.round(UU * uU), jU = Math.round(RU * uU), GU / uU < UU && ++GU, jU / uU > RU && --jU, uU = -uU) : (uU = Math.pow(10, pU) * cU, GU = Math.round(UU / uU), jU = Math.round(RU / uU), GU * uU < UU && ++GU, jU * uU > RU && --jU), jU < GU && .5 <= gU && gU < 2 ? qU(UU, RU, 2 * gU) : [GU, jU, uU]
    }

    function KU(UU, RU, gU) {
      if (!((gU = +gU) > 0)) return [];
      if ((UU = +UU) === (RU = +RU)) return [UU];
      const tU = RU < UU,
        [pU, EU, PU] = tU ? qU(RU, UU, gU) : qU(UU, RU, gU);
      if (!(EU >= pU)) return [];
      const TU = EU - pU + 1,
        KU = new Array(TU);
      if (tU)
        if (PU < 0)
          for (let qU = 0; qU < TU; ++qU) KU[qU] = (EU - qU) / -PU;
        else
          for (let qU = 0; qU < TU; ++qU) KU[qU] = (EU - qU) * PU;
      else if (PU < 0)
        for (let qU = 0; qU < TU; ++qU) KU[qU] = (pU + qU) / -PU;
      else
        for (let qU = 0; qU < TU; ++qU) KU[qU] = (pU + qU) * PU;
      return KU
    }

    function cU(UU, RU, gU) {
      return qU(UU = +UU, RU = +RU, gU = +gU)[2]
    }

    function GU(UU, RU, gU) {
      gU = +gU;
      const tU = (RU = +RU) < (UU = +UU),
        pU = tU ? cU(RU, UU, gU) : cU(UU, RU, gU);
      return (tU ? -1 : 1) * (pU < 0 ? 1 / -pU : pU)
    }

    function jU(UU, RU) {
      return null == UU || null == RU ? NaN : UU < RU ? -1 : UU > RU ? 1 : UU >= RU ? 0 : NaN
    }

    function uU(UU, RU) {
      return null == UU || null == RU ? NaN : RU < UU ? -1 : RU > UU ? 1 : RU >= UU ? 0 : NaN
    }

    function CU(UU) {
      let RU, gU, tU;

      function pU(UU, tU) {
        let pU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          EU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.length;
        if (pU < EU) {
          if (0 !== RU(tU, tU)) return EU;
          do {
            const RU = pU + EU >>> 1;
            gU(UU[RU], tU) < 0 ? pU = RU + 1 : EU = RU
          } while (pU < EU)
        }
        return pU
      }
      return 2 !== UU.length ? (RU = jU, gU = (RU, gU) => jU(UU(RU), gU), tU = (RU, gU) => UU(RU) - gU) : (RU = UU === jU || UU === uU ? UU : hU, gU = UU, tU = UU), {
        left: pU,
        center: function(UU, RU) {
          let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const EU = pU(UU, RU, gU, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.length) - 1);
          return EU > gU && tU(UU[EU - 1], RU) > -tU(UU[EU], RU) ? EU - 1 : EU
        },
        right: function(UU, tU) {
          let pU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            EU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.length;
          if (pU < EU) {
            if (0 !== RU(tU, tU)) return EU;
            do {
              const RU = pU + EU >>> 1;
              gU(UU[RU], tU) <= 0 ? pU = RU + 1 : EU = RU
            } while (pU < EU)
          }
          return pU
        }
      }
    }

    function hU() {
      return 0
    }

    function QU(UU) {
      return null === UU ? NaN : +UU
    }
    const eU = CU(jU),
      WU = eU.right,
      fU = (eU.left, CU(QU).center, WU);

    function xU(UU, RU, gU) {
      UU.prototype = RU.prototype = gU, gU.constructor = UU
    }

    function mU(UU, RU) {
      var gU = Object.create(UU.prototype);
      for (var tU in RU) gU[tU] = RU[tU];
      return gU
    }

    function IU() {}
    var JU = .7,
      wU = 1 / JU,
      nU = "\\s*([+-]?\\d+)\\s*",
      bU = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      oU = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      ZU = /^#([0-9a-f]{3,8})$/,
      aU = new RegExp(`^rgb\\(${nU},${nU},${nU}\\)$`),
      YU = new RegExp(`^rgb\\(${oU},${oU},${oU}\\)$`),
      BU = new RegExp(`^rgba\\(${nU},${nU},${nU},${bU}\\)$`),
      VU = new RegExp(`^rgba\\(${oU},${oU},${oU},${bU}\\)$`),
      rU = new RegExp(`^hsl\\(${bU},${oU},${oU}\\)$`),
      XU = new RegExp(`^hsla\\(${bU},${oU},${oU},${bU}\\)$`),
      vU = {
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

    function dU() {
      return this.rgb().formatHex()
    }

    function HU() {
      return this.rgb().formatRgb()
    }

    function SU(UU) {
      var RU, gU;
      return UU = (UU + "").trim().toLowerCase(), (RU = ZU.exec(UU)) ? (gU = RU[1].length, RU = parseInt(RU[1], 16), 6 === gU ? sU(RU) : 3 === gU ? new FU(RU >> 8 & 15 | RU >> 4 & 240, RU >> 4 & 15 | 240 & RU, (15 & RU) << 4 | 15 & RU, 1) : 8 === gU ? yU(RU >> 24 & 255, RU >> 16 & 255, RU >> 8 & 255, (255 & RU) / 255) : 4 === gU ? yU(RU >> 12 & 15 | RU >> 8 & 240, RU >> 8 & 15 | RU >> 4 & 240, RU >> 4 & 15 | 240 & RU, ((15 & RU) << 4 | 15 & RU) / 255) : null) : (RU = aU.exec(UU)) ? new FU(RU[1], RU[2], RU[3], 1) : (RU = YU.exec(UU)) ? new FU(255 * RU[1] / 100, 255 * RU[2] / 100, 255 * RU[3] / 100, 1) : (RU = BU.exec(UU)) ? yU(RU[1], RU[2], RU[3], RU[4]) : (RU = VU.exec(UU)) ? yU(255 * RU[1] / 100, 255 * RU[2] / 100, 255 * RU[3] / 100, RU[4]) : (RU = rU.exec(UU)) ? LU(RU[1], RU[2] / 100, RU[3] / 100, 1) : (RU = XU.exec(UU)) ? LU(RU[1], RU[2] / 100, RU[3] / 100, RU[4]) : vU.hasOwnProperty(UU) ? sU(vU[UU]) : "transparent" === UU ? new FU(NaN, NaN, NaN, 0) : null
    }

    function sU(UU) {
      return new FU(UU >> 16 & 255, UU >> 8 & 255, 255 & UU, 1)
    }

    function yU(UU, RU, gU, tU) {
      return tU <= 0 && (UU = RU = gU = NaN), new FU(UU, RU, gU, tU)
    }

    function kU(UU, RU, gU, tU) {
      return 1 === arguments.length ? ((pU = UU) instanceof IU || (pU = SU(pU)), pU ? new FU((pU = pU.rgb()).r, pU.g, pU.b, pU.opacity) : new FU) : new FU(UU, RU, gU, null == tU ? 1 : tU);
      var pU
    }

    function FU(UU, RU, gU, tU) {
      this.r = +UU, this.g = +RU, this.b = +gU, this.opacity = +tU
    }

    function iU() {
      return `#${DU(this.r)}${DU(this.g)}${DU(this.b)}`
    }

    function AU() {
      const UU = zU(this.opacity);
      return `${1===UU?"rgb(":"rgba("}${MU(this.r)}, ${MU(this.g)}, ${MU(this.b)}${1===UU?")":`, ${UU})`}`
    }

    function zU(UU) {
      return isNaN(UU) ? 1 : Math.max(0, Math.min(1, UU))
    }

    function MU(UU) {
      return Math.max(0, Math.min(255, Math.round(UU) || 0))
    }

    function DU(UU) {
      return ((UU = MU(UU)) < 16 ? "0" : "") + UU.toString(16)
    }

    function LU(UU, RU, gU, tU) {
      return tU <= 0 ? UU = RU = gU = NaN : gU <= 0 || gU >= 1 ? UU = RU = NaN : RU <= 0 && (UU = NaN), new lU(UU, RU, gU, tU)
    }

    function NU(UU) {
      if (UU instanceof lU) return new lU(UU.h, UU.s, UU.l, UU.opacity);
      if (UU instanceof IU || (UU = SU(UU)), !UU) return new lU;
      if (UU instanceof lU) return UU;
      var RU = (UU = UU.rgb()).r / 255,
        gU = UU.g / 255,
        tU = UU.b / 255,
        pU = Math.min(RU, gU, tU),
        EU = Math.max(RU, gU, tU),
        PU = NaN,
        TU = EU - pU,
        qU = (EU + pU) / 2;
      return TU ? (PU = RU === EU ? (gU - tU) / TU + 6 * (gU < tU) : gU === EU ? (tU - RU) / TU + 2 : (RU - gU) / TU + 4, TU /= qU < .5 ? EU + pU : 2 - EU - pU, PU *= 60) : TU = qU > 0 && qU < 1 ? 0 : PU, new lU(PU, TU, qU, UU.opacity)
    }

    function lU(UU, RU, gU, tU) {
      this.h = +UU, this.s = +RU, this.l = +gU, this.opacity = +tU
    }

    function OU(UU) {
      return (UU = (UU || 0) % 360) < 0 ? UU + 360 : UU
    }

    function UR(UU) {
      return Math.max(0, Math.min(1, UU || 0))
    }

    function RR(UU, RU, gU) {
      return 255 * (UU < 60 ? RU + (gU - RU) * UU / 60 : UU < 180 ? gU : UU < 240 ? RU + (gU - RU) * (240 - UU) / 60 : RU)
    }

    function gR(UU, RU, gU, tU, pU) {
      var EU = UU * UU,
        PU = EU * UU;
      return ((1 - 3 * UU + 3 * EU - PU) * RU + (4 - 6 * EU + 3 * PU) * gU + (1 + 3 * UU + 3 * EU - 3 * PU) * tU + PU * pU) / 6
    }
    xU(IU, SU, {
      copy(UU) {
        return Object.assign(new this.constructor, this, UU)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: dU,
      formatHex: dU,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return NU(this).formatHsl()
      },
      formatRgb: HU,
      toString: HU
    }), xU(FU, kU, mU(IU, {
      brighter(UU) {
        return UU = null == UU ? wU : Math.pow(wU, UU), new FU(this.r * UU, this.g * UU, this.b * UU, this.opacity)
      },
      darker(UU) {
        return UU = null == UU ? JU : Math.pow(JU, UU), new FU(this.r * UU, this.g * UU, this.b * UU, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new FU(MU(this.r), MU(this.g), MU(this.b), zU(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: iU,
      formatHex: iU,
      formatHex8: function() {
        return `#${DU(this.r)}${DU(this.g)}${DU(this.b)}${DU(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: AU,
      toString: AU
    })), xU(lU, (function(UU, RU, gU, tU) {
      return 1 === arguments.length ? NU(UU) : new lU(UU, RU, gU, null == tU ? 1 : tU)
    }), mU(IU, {
      brighter(UU) {
        return UU = null == UU ? wU : Math.pow(wU, UU), new lU(this.h, this.s, this.l * UU, this.opacity)
      },
      darker(UU) {
        return UU = null == UU ? JU : Math.pow(JU, UU), new lU(this.h, this.s, this.l * UU, this.opacity)
      },
      rgb() {
        var UU = this.h % 360 + 360 * (this.h < 0),
          RU = isNaN(UU) || isNaN(this.s) ? 0 : this.s,
          gU = this.l,
          tU = gU + (gU < .5 ? gU : 1 - gU) * RU,
          pU = 2 * gU - tU;
        return new FU(RR(UU >= 240 ? UU - 240 : UU + 120, pU, tU), RR(UU, pU, tU), RR(UU < 120 ? UU + 240 : UU - 120, pU, tU), this.opacity)
      },
      clamp() {
        return new lU(OU(this.h), UR(this.s), UR(this.l), zU(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const UU = zU(this.opacity);
        return `${1===UU?"hsl(":"hsla("}${OU(this.h)}, ${100*UR(this.s)}%, ${100*UR(this.l)}%${1===UU?")":`, ${UU})`}`
      }
    }));
    const tR = UU => () => UU;

    function pR(UU, RU) {
      return function(gU) {
        return UU + gU * RU
      }
    }

    function ER(UU) {
      return 1 === (UU = +UU) ? PR : function(RU, gU) {
        return gU - RU ? function(UU, RU, gU) {
          return UU = Math.pow(UU, gU), RU = Math.pow(RU, gU) - UU, gU = 1 / gU,
            function(tU) {
              return Math.pow(UU + tU * RU, gU)
            }
        }(RU, gU, UU) : tR(isNaN(RU) ? gU : RU)
      }
    }

    function PR(UU, RU) {
      var gU = RU - UU;
      return gU ? pR(UU, gU) : tR(isNaN(UU) ? RU : UU)
    }
    const TR = function UU(RU) {
      var gU = ER(RU);

      function tU(UU, RU) {
        var tU = gU((UU = kU(UU)).r, (RU = kU(RU)).r),
          pU = gU(UU.g, RU.g),
          EU = gU(UU.b, RU.b),
          PU = PR(UU.opacity, RU.opacity);
        return function(RU) {
          return UU.r = tU(RU), UU.g = pU(RU), UU.b = EU(RU), UU.opacity = PU(RU), UU + ""
        }
      }
      return tU.gamma = UU, tU
    }(1);

    function qR(UU) {
      return function(RU) {
        var gU, tU, pU = RU.length,
          EU = new Array(pU),
          PU = new Array(pU),
          TU = new Array(pU);
        for (gU = 0; gU < pU; ++gU) tU = kU(RU[gU]), EU[gU] = tU.r || 0, PU[gU] = tU.g || 0, TU[gU] = tU.b || 0;
        return EU = UU(EU), PU = UU(PU), TU = UU(TU), tU.opacity = 1,
          function(UU) {
            return tU.r = EU(UU), tU.g = PU(UU), tU.b = TU(UU), tU + ""
          }
      }
    }
    qR((function(UU) {
      var RU = UU.length - 1;
      return function(gU) {
        var tU = gU <= 0 ? gU = 0 : gU >= 1 ? (gU = 1, RU - 1) : Math.floor(gU * RU),
          pU = UU[tU],
          EU = UU[tU + 1],
          PU = tU > 0 ? UU[tU - 1] : 2 * pU - EU,
          TU = tU < RU - 1 ? UU[tU + 2] : 2 * EU - pU;
        return gR((gU - tU / RU) * RU, PU, pU, EU, TU)
      }
    })), qR((function(UU) {
      var RU = UU.length;
      return function(gU) {
        var tU = Math.floor(((gU %= 1) < 0 ? ++gU : gU) * RU),
          pU = UU[(tU + RU - 1) % RU],
          EU = UU[tU % RU],
          PU = UU[(tU + 1) % RU],
          TU = UU[(tU + 2) % RU];
        return gR((gU - tU / RU) * RU, pU, EU, PU, TU)
      }
    }));

    function KR(UU, RU) {
      var gU, tU = RU ? RU.length : 0,
        pU = UU ? Math.min(tU, UU.length) : 0,
        EU = new Array(pU),
        PU = new Array(tU);
      for (gU = 0; gU < pU; ++gU) EU[gU] = eR(UU[gU], RU[gU]);
      for (; gU < tU; ++gU) PU[gU] = RU[gU];
      return function(UU) {
        for (gU = 0; gU < pU; ++gU) PU[gU] = EU[gU](UU);
        return PU
      }
    }

    function cR(UU, RU) {
      var gU = new Date;
      return UU = +UU, RU = +RU,
        function(tU) {
          return gU.setTime(UU * (1 - tU) + RU * tU), gU
        }
    }

    function GR(UU, RU) {
      return UU = +UU, RU = +RU,
        function(gU) {
          return UU * (1 - gU) + RU * gU
        }
    }

    function jR(UU, RU) {
      var gU, tU = {},
        pU = {};
      for (gU in null !== UU && "object" === typeof UU || (UU = {}), null !== RU && "object" === typeof RU || (RU = {}), RU) gU in UU ? tU[gU] = eR(UU[gU], RU[gU]) : pU[gU] = RU[gU];
      return function(UU) {
        for (gU in tU) pU[gU] = tU[gU](UU);
        return pU
      }
    }
    var uR = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      CR = new RegExp(uR.source, "g");

    function hR(UU, RU) {
      var gU, tU, pU, EU = uR.lastIndex = CR.lastIndex = 0,
        PU = -1,
        TU = [],
        qU = [];
      for (UU += "", RU += "";
        (gU = uR.exec(UU)) && (tU = CR.exec(RU));)(pU = tU.index) > EU && (pU = RU.slice(EU, pU), TU[PU] ? TU[PU] += pU : TU[++PU] = pU), (gU = gU[0]) === (tU = tU[0]) ? TU[PU] ? TU[PU] += tU : TU[++PU] = tU : (TU[++PU] = null, qU.push({
        i: PU,
        x: GR(gU, tU)
      })), EU = CR.lastIndex;
      return EU < RU.length && (pU = RU.slice(EU), TU[PU] ? TU[PU] += pU : TU[++PU] = pU), TU.length < 2 ? qU[0] ? function(UU) {
        return function(RU) {
          return UU(RU) + ""
        }
      }(qU[0].x) : function(UU) {
        return function() {
          return UU
        }
      }(RU) : (RU = qU.length, function(UU) {
        for (var gU, tU = 0; tU < RU; ++tU) TU[(gU = qU[tU]).i] = gU.x(UU);
        return TU.join("")
      })
    }

    function QR(UU, RU) {
      RU || (RU = []);
      var gU, tU = UU ? Math.min(RU.length, UU.length) : 0,
        pU = RU.slice();
      return function(EU) {
        for (gU = 0; gU < tU; ++gU) pU[gU] = UU[gU] * (1 - EU) + RU[gU] * EU;
        return pU
      }
    }

    function eR(UU, RU) {
      var gU, tU, pU = typeof RU;
      return null == RU || "boolean" === pU ? tR(RU) : ("number" === pU ? GR : "string" === pU ? (gU = SU(RU)) ? (RU = gU, TR) : hR : RU instanceof SU ? TR : RU instanceof Date ? cR : (tU = RU, !ArrayBuffer.isView(tU) || tU instanceof DataView ? Array.isArray(RU) ? KR : "function" !== typeof RU.valueOf && "function" !== typeof RU.toString || isNaN(RU) ? jR : GR : QR))(UU, RU)
    }

    function WR(UU, RU) {
      return UU = +UU, RU = +RU,
        function(gU) {
          return Math.round(UU * (1 - gU) + RU * gU)
        }
    }

    function fR(UU) {
      return +UU
    }
    var xR = [0, 1];

    function mR(UU) {
      return UU
    }

    function IR(UU, RU) {
      return (RU -= UU = +UU) ? function(gU) {
        return (gU - UU) / RU
      } : (gU = isNaN(RU) ? NaN : .5, function() {
        return gU
      });
      var gU
    }

    function JR(UU, RU, gU) {
      var tU = UU[0],
        pU = UU[1],
        EU = RU[0],
        PU = RU[1];
      return pU < tU ? (tU = IR(pU, tU), EU = gU(PU, EU)) : (tU = IR(tU, pU), EU = gU(EU, PU)),
        function(UU) {
          return EU(tU(UU))
        }
    }

    function wR(UU, RU, gU) {
      var tU = Math.min(UU.length, RU.length) - 1,
        pU = new Array(tU),
        EU = new Array(tU),
        PU = -1;
      for (UU[tU] < UU[0] && (UU = UU.slice().reverse(), RU = RU.slice().reverse()); ++PU < tU;) pU[PU] = IR(UU[PU], UU[PU + 1]), EU[PU] = gU(RU[PU], RU[PU + 1]);
      return function(RU) {
        var gU = fU(UU, RU, 1, tU) - 1;
        return EU[gU](pU[gU](RU))
      }
    }

    function nR(UU, RU) {
      return RU.domain(UU.domain()).range(UU.range()).interpolate(UU.interpolate()).clamp(UU.clamp()).unknown(UU.unknown())
    }

    function bR() {
      var UU, RU, gU, tU, pU, EU, PU = xR,
        TU = xR,
        qU = eR,
        KU = mR;

      function cU() {
        var UU = Math.min(PU.length, TU.length);
        return KU !== mR && (KU = function(UU, RU) {
          var gU;
          return UU > RU && (gU = UU, UU = RU, RU = gU),
            function(gU) {
              return Math.max(UU, Math.min(RU, gU))
            }
        }(PU[0], PU[UU - 1])), tU = UU > 2 ? wR : JR, pU = EU = null, GU
      }

      function GU(RU) {
        return null == RU || isNaN(RU = +RU) ? gU : (pU || (pU = tU(PU.map(UU), TU, qU)))(UU(KU(RU)))
      }
      return GU.invert = function(gU) {
          return KU(RU((EU || (EU = tU(TU, PU.map(UU), GR)))(gU)))
        }, GU.domain = function(UU) {
          return arguments.length ? (PU = Array.from(UU, fR), cU()) : PU.slice()
        }, GU.range = function(UU) {
          return arguments.length ? (TU = Array.from(UU), cU()) : TU.slice()
        }, GU.rangeRound = function(UU) {
          return TU = Array.from(UU), qU = WR, cU()
        }, GU.clamp = function(UU) {
          return arguments.length ? (KU = !!UU || mR, cU()) : KU !== mR
        }, GU.interpolate = function(UU) {
          return arguments.length ? (qU = UU, cU()) : qU
        }, GU.unknown = function(UU) {
          return arguments.length ? (gU = UU, GU) : gU
        },
        function(gU, tU) {
          return UU = gU, RU = tU, cU()
        }
    }

    function oR() {
      return bR()(mR, mR)
    }
    var ZR, aR = gU(5826),
      YR = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function BR(UU) {
      if (!(RU = YR.exec(UU))) throw new Error("invalid format: " + UU);
      var RU;
      return new VR({
        fill: RU[1],
        align: RU[2],
        sign: RU[3],
        symbol: RU[4],
        zero: RU[5],
        width: RU[6],
        comma: RU[7],
        precision: RU[8] && RU[8].slice(1),
        trim: RU[9],
        type: RU[10]
      })
    }

    function VR(UU) {
      this.fill = void 0 === UU.fill ? " " : UU.fill + "", this.align = void 0 === UU.align ? ">" : UU.align + "", this.sign = void 0 === UU.sign ? "-" : UU.sign + "", this.symbol = void 0 === UU.symbol ? "" : UU.symbol + "", this.zero = !!UU.zero, this.width = void 0 === UU.width ? void 0 : +UU.width, this.comma = !!UU.comma, this.precision = void 0 === UU.precision ? void 0 : +UU.precision, this.trim = !!UU.trim, this.type = void 0 === UU.type ? "" : UU.type + ""
    }

    function rR(UU, RU) {
      if (!isFinite(UU) || 0 === UU) return null;
      var gU = (UU = RU ? UU.toExponential(RU - 1) : UU.toExponential()).indexOf("e"),
        tU = UU.slice(0, gU);
      return [tU.length > 1 ? tU[0] + tU.slice(2) : tU, +UU.slice(gU + 1)]
    }

    function XR(UU) {
      return (UU = rR(Math.abs(UU))) ? UU[1] : NaN
    }

    function vR(UU, RU) {
      var gU = rR(UU, RU);
      if (!gU) return UU + "";
      var tU = gU[0],
        pU = gU[1];
      return pU < 0 ? "0." + new Array(-pU).join("0") + tU : tU.length > pU + 1 ? tU.slice(0, pU + 1) + "." + tU.slice(pU + 1) : tU + new Array(pU - tU.length + 2).join("0")
    }
    BR.prototype = VR.prototype, VR.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const dR = {
      "%": (UU, RU) => (100 * UU).toFixed(RU),
      b: UU => Math.round(UU).toString(2),
      c: UU => UU + "",
      d: function(UU) {
        return Math.abs(UU = Math.round(UU)) >= 1e21 ? UU.toLocaleString("en").replace(/,/g, "") : UU.toString(10)
      },
      e: (UU, RU) => UU.toExponential(RU),
      f: (UU, RU) => UU.toFixed(RU),
      g: (UU, RU) => UU.toPrecision(RU),
      o: UU => Math.round(UU).toString(8),
      p: (UU, RU) => vR(100 * UU, RU),
      r: vR,
      s: function(UU, RU) {
        var gU = rR(UU, RU);
        if (!gU) return ZR = void 0, UU.toPrecision(RU);
        var tU = gU[0],
          pU = gU[1],
          EU = pU - (ZR = 3 * Math.max(-8, Math.min(8, Math.floor(pU / 3)))) + 1,
          PU = tU.length;
        return EU === PU ? tU : EU > PU ? tU + new Array(EU - PU + 1).join("0") : EU > 0 ? tU.slice(0, EU) + "." + tU.slice(EU) : "0." + new Array(1 - EU).join("0") + rR(UU, Math.max(0, RU + EU - 1))[0]
      },
      X: UU => Math.round(UU).toString(16).toUpperCase(),
      x: UU => Math.round(UU).toString(16)
    };

    function HR(UU) {
      return UU
    }
    var SR, sR, yR, kR = Array.prototype.map,
      FR = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function iR(UU) {
      var RU, gU, tU = void 0 === UU.grouping || void 0 === UU.thousands ? HR : (RU = kR.call(UU.grouping, Number), gU = UU.thousands + "", function(UU, tU) {
          for (var pU = UU.length, EU = [], PU = 0, TU = RU[0], qU = 0; pU > 0 && TU > 0 && (qU + TU + 1 > tU && (TU = Math.max(1, tU - qU)), EU.push(UU.substring(pU -= TU, pU + TU)), !((qU += TU + 1) > tU));) TU = RU[PU = (PU + 1) % RU.length];
          return EU.reverse().join(gU)
        }),
        pU = void 0 === UU.currency ? "" : UU.currency[0] + "",
        EU = void 0 === UU.currency ? "" : UU.currency[1] + "",
        PU = void 0 === UU.decimal ? "." : UU.decimal + "",
        TU = void 0 === UU.numerals ? HR : function(UU) {
          return function(RU) {
            return RU.replace(/[0-9]/g, (function(RU) {
              return UU[+RU]
            }))
          }
        }(kR.call(UU.numerals, String)),
        qU = void 0 === UU.percent ? "%" : UU.percent + "",
        KU = void 0 === UU.minus ? "\u2212" : UU.minus + "",
        cU = void 0 === UU.nan ? "NaN" : UU.nan + "";

      function GU(UU, RU) {
        var gU = (UU = BR(UU)).fill,
          GU = UU.align,
          jU = UU.sign,
          uU = UU.symbol,
          CU = UU.zero,
          hU = UU.width,
          QU = UU.comma,
          eU = UU.precision,
          WU = UU.trim,
          fU = UU.type;
        "n" === fU ? (QU = !0, fU = "g") : dR[fU] || (void 0 === eU && (eU = 12), WU = !0, fU = "g"), (CU || "0" === gU && "=" === GU) && (CU = !0, gU = "0", GU = "=");
        var xU = (RU && void 0 !== RU.prefix ? RU.prefix : "") + ("$" === uU ? pU : "#" === uU && /[boxX]/.test(fU) ? "0" + fU.toLowerCase() : ""),
          mU = ("$" === uU ? EU : /[%p]/.test(fU) ? qU : "") + (RU && void 0 !== RU.suffix ? RU.suffix : ""),
          IU = dR[fU],
          JU = /[defgprs%]/.test(fU);

        function wU(UU) {
          var RU, pU, EU, qU = xU,
            uU = mU;
          if ("c" === fU) uU = IU(UU) + uU, UU = "";
          else {
            var wU = (UU = +UU) < 0 || 1 / UU < 0;
            if (UU = isNaN(UU) ? cU : IU(Math.abs(UU), eU), WU && (UU = function(UU) {
                UU: for (var RU, gU = UU.length, tU = 1, pU = -1; tU < gU; ++tU) switch (UU[tU]) {
                  case ".":
                    pU = RU = tU;
                    break;
                  case "0":
                    0 === pU && (pU = tU), RU = tU;
                    break;
                  default:
                    if (!+UU[tU]) break UU;
                    pU > 0 && (pU = 0)
                }
                return pU > 0 ? UU.slice(0, pU) + UU.slice(RU + 1) : UU
              }(UU)), wU && 0 === +UU && "+" !== jU && (wU = !1), qU = (wU ? "(" === jU ? jU : KU : "-" === jU || "(" === jU ? "" : jU) + qU, uU = ("s" !== fU || isNaN(UU) || void 0 === ZR ? "" : FR[8 + ZR / 3]) + uU + (wU && "(" === jU ? ")" : ""), JU)
              for (RU = -1, pU = UU.length; ++RU < pU;)
                if (48 > (EU = UU.charCodeAt(RU)) || EU > 57) {
                  uU = (46 === EU ? PU + UU.slice(RU + 1) : UU.slice(RU)) + uU, UU = UU.slice(0, RU);
                  break
                }
          }
          QU && !CU && (UU = tU(UU, 1 / 0));
          var nU = qU.length + UU.length + uU.length,
            bU = nU < hU ? new Array(hU - nU + 1).join(gU) : "";
          switch (QU && CU && (UU = tU(bU + UU, bU.length ? hU - uU.length : 1 / 0), bU = ""), GU) {
            case "<":
              UU = qU + UU + uU + bU;
              break;
            case "=":
              UU = qU + bU + UU + uU;
              break;
            case "^":
              UU = bU.slice(0, nU = bU.length >> 1) + qU + UU + uU + bU.slice(nU);
              break;
            default:
              UU = bU + qU + UU + uU
          }
          return TU(UU)
        }
        return eU = void 0 === eU ? 6 : /[gprs]/.test(fU) ? Math.max(1, Math.min(21, eU)) : Math.max(0, Math.min(20, eU)), wU.toString = function() {
          return UU + ""
        }, wU
      }
      return {
        format: GU,
        formatPrefix: function(UU, RU) {
          var gU = 3 * Math.max(-8, Math.min(8, Math.floor(XR(RU) / 3))),
            tU = Math.pow(10, -gU),
            pU = GU(((UU = BR(UU)).type = "f", UU), {
              suffix: FR[8 + gU / 3]
            });
          return function(UU) {
            return pU(tU * UU)
          }
        }
      }
    }

    function AR(UU, RU, gU, tU) {
      var pU, EU = GU(UU, RU, gU);
      switch ((tU = BR(null == tU ? ",f" : tU)).type) {
        case "s":
          var PU = Math.max(Math.abs(UU), Math.abs(RU));
          return null != tU.precision || isNaN(pU = function(UU, RU) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(XR(RU) / 3))) - XR(Math.abs(UU)))
          }(EU, PU)) || (tU.precision = pU), yR(tU, PU);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != tU.precision || isNaN(pU = function(UU, RU) {
            return UU = Math.abs(UU), RU = Math.abs(RU) - UU, Math.max(0, XR(RU) - XR(UU)) + 1
          }(EU, Math.max(Math.abs(UU), Math.abs(RU)))) || (tU.precision = pU - ("e" === tU.type));
          break;
        case "f":
        case "%":
          null != tU.precision || isNaN(pU = function(UU) {
            return Math.max(0, -XR(Math.abs(UU)))
          }(EU)) || (tU.precision = pU - 2 * ("%" === tU.type))
      }
      return sR(tU)
    }

    function zR(UU) {
      var RU = UU.domain;
      return UU.ticks = function(UU) {
        var gU = RU();
        return KU(gU[0], gU[gU.length - 1], null == UU ? 10 : UU)
      }, UU.tickFormat = function(UU, gU) {
        var tU = RU();
        return AR(tU[0], tU[tU.length - 1], null == UU ? 10 : UU, gU)
      }, UU.nice = function(gU) {
        null == gU && (gU = 10);
        var tU, pU, EU = RU(),
          PU = 0,
          TU = EU.length - 1,
          qU = EU[PU],
          KU = EU[TU],
          GU = 10;
        for (KU < qU && (pU = qU, qU = KU, KU = pU, pU = PU, PU = TU, TU = pU); GU-- > 0;) {
          if ((pU = cU(qU, KU, gU)) === tU) return EU[PU] = qU, EU[TU] = KU, RU(EU);
          if (pU > 0) qU = Math.floor(qU / pU) * pU, KU = Math.ceil(KU / pU) * pU;
          else {
            if (!(pU < 0)) break;
            qU = Math.ceil(qU * pU) / pU, KU = Math.floor(KU * pU) / pU
          }
          tU = pU
        }
        return UU
      }, UU
    }

    function MR() {
      var UU = oR();
      return UU.copy = function() {
        return nR(UU, MR())
      }, aR.f.apply(UU, arguments), zR(UU)
    }

    function DR(UU) {
      var RU;

      function gU(UU) {
        return null == UU || isNaN(UU = +UU) ? RU : UU
      }
      return gU.invert = gU, gU.domain = gU.range = function(RU) {
        return arguments.length ? (UU = Array.from(RU, fR), gU) : UU.slice()
      }, gU.unknown = function(UU) {
        return arguments.length ? (RU = UU, gU) : RU
      }, gU.copy = function() {
        return DR(UU).unknown(RU)
      }, UU = arguments.length ? Array.from(UU, fR) : [0, 1], zR(gU)
    }

    function LR(UU, RU) {
      var gU, tU = 0,
        pU = (UU = UU.slice()).length - 1,
        EU = UU[tU],
        PU = UU[pU];
      return PU < EU && (gU = tU, tU = pU, pU = gU, gU = EU, EU = PU, PU = gU), UU[tU] = RU.floor(EU), UU[pU] = RU.ceil(PU), UU
    }

    function NR(UU) {
      return Math.log(UU)
    }

    function lR(UU) {
      return Math.exp(UU)
    }

    function OR(UU) {
      return -Math.log(-UU)
    }

    function Ug(UU) {
      return -Math.exp(-UU)
    }

    function Rg(UU) {
      return isFinite(UU) ? +("1e" + UU) : UU < 0 ? 0 : UU
    }

    function gg(UU) {
      return (RU, gU) => -UU(-RU, gU)
    }

    function tg(UU) {
      const RU = UU(NR, lR),
        gU = RU.domain;
      let tU, pU, EU = 10;

      function PU() {
        return tU = function(UU) {
          return UU === Math.E ? Math.log : 10 === UU && Math.log10 || 2 === UU && Math.log2 || (UU = Math.log(UU), RU => Math.log(RU) / UU)
        }(EU), pU = function(UU) {
          return 10 === UU ? Rg : UU === Math.E ? Math.exp : RU => Math.pow(UU, RU)
        }(EU), gU()[0] < 0 ? (tU = gg(tU), pU = gg(pU), UU(OR, Ug)) : UU(NR, lR), RU
      }
      return RU.base = function(UU) {
        return arguments.length ? (EU = +UU, PU()) : EU
      }, RU.domain = function(UU) {
        return arguments.length ? (gU(UU), PU()) : gU()
      }, RU.ticks = UU => {
        const RU = gU();
        let PU = RU[0],
          TU = RU[RU.length - 1];
        const qU = TU < PU;
        qU && ([PU, TU] = [TU, PU]);
        let cU, GU, jU = tU(PU),
          uU = tU(TU);
        const CU = null == UU ? 10 : +UU;
        let hU = [];
        if (!(EU % 1) && uU - jU < CU) {
          if (jU = Math.floor(jU), uU = Math.ceil(uU), PU > 0) {
            for (; jU <= uU; ++jU)
              for (cU = 1; cU < EU; ++cU)
                if (GU = jU < 0 ? cU / pU(-jU) : cU * pU(jU), !(GU < PU)) {
                  if (GU > TU) break;
                  hU.push(GU)
                }
          } else
            for (; jU <= uU; ++jU)
              for (cU = EU - 1; cU >= 1; --cU)
                if (GU = jU > 0 ? cU / pU(-jU) : cU * pU(jU), !(GU < PU)) {
                  if (GU > TU) break;
                  hU.push(GU)
                } 2 * hU.length < CU && (hU = KU(PU, TU, CU))
        } else hU = KU(jU, uU, Math.min(uU - jU, CU)).map(pU);
        return qU ? hU.reverse() : hU
      }, RU.tickFormat = (UU, gU) => {
        if (null == UU && (UU = 10), null == gU && (gU = 10 === EU ? "s" : ","), "function" !== typeof gU && (EU % 1 || null != (gU = BR(gU)).precision || (gU.trim = !0), gU = sR(gU)), UU === 1 / 0) return gU;
        const PU = Math.max(1, EU * UU / RU.ticks().length);
        return UU => {
          let RU = UU / pU(Math.round(tU(UU)));
          return RU * EU < EU - .5 && (RU *= EU), RU <= PU ? gU(UU) : ""
        }
      }, RU.nice = () => gU(LR(gU(), {
        floor: UU => pU(Math.floor(tU(UU))),
        ceil: UU => pU(Math.ceil(tU(UU)))
      })), RU
    }

    function pg() {
      const UU = tg(bR()).domain([1, 10]);
      return UU.copy = () => nR(UU, pg()).base(UU.base()), aR.f.apply(UU, arguments), UU
    }

    function Eg(UU) {
      return function(RU) {
        return Math.sign(RU) * Math.log1p(Math.abs(RU / UU))
      }
    }

    function Pg(UU) {
      return function(RU) {
        return Math.sign(RU) * Math.expm1(Math.abs(RU)) * UU
      }
    }

    function Tg(UU) {
      var RU = 1,
        gU = UU(Eg(RU), Pg(RU));
      return gU.constant = function(gU) {
        return arguments.length ? UU(Eg(RU = +gU), Pg(RU)) : RU
      }, zR(gU)
    }

    function qg() {
      var UU = Tg(bR());
      return UU.copy = function() {
        return nR(UU, qg()).constant(UU.constant())
      }, aR.f.apply(UU, arguments)
    }
    SR = iR({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), sR = SR.format, yR = SR.formatPrefix;
    var Kg = gU(5835);

    function cg(UU) {
      return function(RU) {
        return RU < 0 ? -Math.pow(-RU, UU) : Math.pow(RU, UU)
      }
    }

    function Gg(UU) {
      return UU < 0 ? -Math.sqrt(-UU) : Math.sqrt(UU)
    }

    function jg(UU) {
      return UU < 0 ? -UU * UU : UU * UU
    }

    function ug(UU) {
      var RU = UU(mR, mR),
        gU = 1;
      return RU.exponent = function(RU) {
        return arguments.length ? 1 === (gU = +RU) ? UU(mR, mR) : .5 === gU ? UU(Gg, jg) : UU(cg(gU), cg(1 / gU)) : gU
      }, zR(RU)
    }

    function Cg() {
      var UU = ug(bR());
      return UU.copy = function() {
        return nR(UU, Cg()).exponent(UU.exponent())
      }, aR.f.apply(UU, arguments), UU
    }

    function hg() {
      return Cg.apply(null, arguments).exponent(.5)
    }

    function Qg(UU) {
      return Math.sign(UU) * UU * UU
    }

    function eg() {
      var UU, RU = oR(),
        gU = [0, 1],
        tU = !1;

      function pU(gU) {
        var pU = function(UU) {
          return Math.sign(UU) * Math.sqrt(Math.abs(UU))
        }(RU(gU));
        return isNaN(pU) ? UU : tU ? Math.round(pU) : pU
      }
      return pU.invert = function(UU) {
        return RU.invert(Qg(UU))
      }, pU.domain = function(UU) {
        return arguments.length ? (RU.domain(UU), pU) : RU.domain()
      }, pU.range = function(UU) {
        return arguments.length ? (RU.range((gU = Array.from(UU, fR)).map(Qg)), pU) : gU.slice()
      }, pU.rangeRound = function(UU) {
        return pU.range(UU).round(!0)
      }, pU.round = function(UU) {
        return arguments.length ? (tU = !!UU, pU) : tU
      }, pU.clamp = function(UU) {
        return arguments.length ? (RU.clamp(UU), pU) : RU.clamp()
      }, pU.unknown = function(RU) {
        return arguments.length ? (UU = RU, pU) : UU
      }, pU.copy = function() {
        return eg(RU.domain(), gU).round(tU).clamp(RU.clamp()).unknown(UU)
      }, aR.f.apply(pU, arguments), zR(pU)
    }

    function Wg(UU, RU) {
      let gU;
      if (void 0 === RU)
        for (const tU of UU) null != tU && (gU < tU || void 0 === gU && tU >= tU) && (gU = tU);
      else {
        let tU = -1;
        for (let pU of UU) null != (pU = RU(pU, ++tU, UU)) && (gU < pU || void 0 === gU && pU >= pU) && (gU = pU)
      }
      return gU
    }

    function fg(UU, RU) {
      let gU;
      if (void 0 === RU)
        for (const tU of UU) null != tU && (gU > tU || void 0 === gU && tU >= tU) && (gU = tU);
      else {
        let tU = -1;
        for (let pU of UU) null != (pU = RU(pU, ++tU, UU)) && (gU > pU || void 0 === gU && pU >= pU) && (gU = pU)
      }
      return gU
    }

    function xg() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jU;
      if (UU === jU) return mg;
      if ("function" !== typeof UU) throw new TypeError("compare is not a function");
      return (RU, gU) => {
        const tU = UU(RU, gU);
        return tU || 0 === tU ? tU : (0 === UU(gU, gU)) - (0 === UU(RU, RU))
      }
    }

    function mg(UU, RU) {
      return (null == UU || !(UU >= UU)) - (null == RU || !(RU >= RU)) || (UU < RU ? -1 : UU > RU ? 1 : 0)
    }

    function Ig(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        pU = arguments.length > 4 ? arguments[4] : void 0;
      if (RU = Math.floor(RU), gU = Math.floor(Math.max(0, gU)), tU = Math.floor(Math.min(UU.length - 1, tU)), !(gU <= RU && RU <= tU)) return UU;
      for (pU = void 0 === pU ? mg : xg(pU); tU > gU;) {
        if (tU - gU > 600) {
          const EU = tU - gU + 1,
            PU = RU - gU + 1,
            TU = Math.log(EU),
            qU = .5 * Math.exp(2 * TU / 3),
            KU = .5 * Math.sqrt(TU * qU * (EU - qU) / EU) * (PU - EU / 2 < 0 ? -1 : 1);
          Ig(UU, RU, Math.max(gU, Math.floor(RU - PU * qU / EU + KU)), Math.min(tU, Math.floor(RU + (EU - PU) * qU / EU + KU)), pU)
        }
        const EU = UU[RU];
        let PU = gU,
          TU = tU;
        for (Jg(UU, gU, RU), pU(UU[tU], EU) > 0 && Jg(UU, gU, tU); PU < TU;) {
          for (Jg(UU, PU, TU), ++PU, --TU; pU(UU[PU], EU) < 0;) ++PU;
          for (; pU(UU[TU], EU) > 0;) --TU
        }
        0 === pU(UU[gU], EU) ? Jg(UU, gU, TU) : (++TU, Jg(UU, TU, tU)), TU <= RU && (gU = TU + 1), RU <= TU && (tU = TU - 1)
      }
      return UU
    }

    function Jg(UU, RU, gU) {
      const tU = UU[RU];
      UU[RU] = UU[gU], UU[gU] = tU
    }

    function wg(UU, RU, gU) {
      if (UU = Float64Array.from(function*(UU, RU) {
          if (void 0 === RU)
            for (let gU of UU) null != gU && (gU = +gU) >= gU && (yield gU);
          else {
            let gU = -1;
            for (let tU of UU) null != (tU = RU(tU, ++gU, UU)) && (tU = +tU) >= tU && (yield tU)
          }
        }(UU, gU)), (tU = UU.length) && !isNaN(RU = +RU)) {
        if (RU <= 0 || tU < 2) return fg(UU);
        if (RU >= 1) return Wg(UU);
        var tU, pU = (tU - 1) * RU,
          EU = Math.floor(pU),
          PU = Wg(Ig(UU, EU).subarray(0, EU + 1));
        return PU + (fg(UU.subarray(EU + 1)) - PU) * (pU - EU)
      }
    }

    function ng(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QU;
      if ((tU = UU.length) && !isNaN(RU = +RU)) {
        if (RU <= 0 || tU < 2) return +gU(UU[0], 0, UU);
        if (RU >= 1) return +gU(UU[tU - 1], tU - 1, UU);
        var tU, pU = (tU - 1) * RU,
          EU = Math.floor(pU),
          PU = +gU(UU[EU], EU, UU);
        return PU + (+gU(UU[EU + 1], EU + 1, UU) - PU) * (pU - EU)
      }
    }

    function bg() {
      var UU, RU = [],
        gU = [],
        tU = [];

      function pU() {
        var UU = 0,
          pU = Math.max(1, gU.length);
        for (tU = new Array(pU - 1); ++UU < pU;) tU[UU - 1] = ng(RU, UU / pU);
        return EU
      }

      function EU(RU) {
        return null == RU || isNaN(RU = +RU) ? UU : gU[fU(tU, RU)]
      }
      return EU.invertExtent = function(UU) {
        var pU = gU.indexOf(UU);
        return pU < 0 ? [NaN, NaN] : [pU > 0 ? tU[pU - 1] : RU[0], pU < tU.length ? tU[pU] : RU[RU.length - 1]]
      }, EU.domain = function(UU) {
        if (!arguments.length) return RU.slice();
        RU = [];
        for (let gU of UU) null == gU || isNaN(gU = +gU) || RU.push(gU);
        return RU.sort(jU), pU()
      }, EU.range = function(UU) {
        return arguments.length ? (gU = Array.from(UU), pU()) : gU.slice()
      }, EU.unknown = function(RU) {
        return arguments.length ? (UU = RU, EU) : UU
      }, EU.quantiles = function() {
        return tU.slice()
      }, EU.copy = function() {
        return bg().domain(RU).range(gU).unknown(UU)
      }, aR.f.apply(EU, arguments)
    }

    function og() {
      var UU, RU = 0,
        gU = 1,
        tU = 1,
        pU = [.5],
        EU = [0, 1];

      function PU(RU) {
        return null != RU && RU <= RU ? EU[fU(pU, RU, 0, tU)] : UU
      }

      function TU() {
        var UU = -1;
        for (pU = new Array(tU); ++UU < tU;) pU[UU] = ((UU + 1) * gU - (UU - tU) * RU) / (tU + 1);
        return PU
      }
      return PU.domain = function(UU) {
        return arguments.length ? ([RU, gU] = UU, RU = +RU, gU = +gU, TU()) : [RU, gU]
      }, PU.range = function(UU) {
        return arguments.length ? (tU = (EU = Array.from(UU)).length - 1, TU()) : EU.slice()
      }, PU.invertExtent = function(UU) {
        var PU = EU.indexOf(UU);
        return PU < 0 ? [NaN, NaN] : PU < 1 ? [RU, pU[0]] : PU >= tU ? [pU[tU - 1], gU] : [pU[PU - 1], pU[PU]]
      }, PU.unknown = function(RU) {
        return arguments.length ? (UU = RU, PU) : PU
      }, PU.thresholds = function() {
        return pU.slice()
      }, PU.copy = function() {
        return og().domain([RU, gU]).range(EU).unknown(UU)
      }, aR.f.apply(zR(PU), arguments)
    }

    function Zg() {
      var UU, RU = [.5],
        gU = [0, 1],
        tU = 1;

      function pU(pU) {
        return null != pU && pU <= pU ? gU[fU(RU, pU, 0, tU)] : UU
      }
      return pU.domain = function(UU) {
        return arguments.length ? (RU = Array.from(UU), tU = Math.min(RU.length, gU.length - 1), pU) : RU.slice()
      }, pU.range = function(UU) {
        return arguments.length ? (gU = Array.from(UU), tU = Math.min(RU.length, gU.length - 1), pU) : gU.slice()
      }, pU.invertExtent = function(UU) {
        var tU = gU.indexOf(UU);
        return [RU[tU - 1], RU[tU]]
      }, pU.unknown = function(RU) {
        return arguments.length ? (UU = RU, pU) : UU
      }, pU.copy = function() {
        return Zg().domain(RU).range(gU).unknown(UU)
      }, aR.f.apply(pU, arguments)
    }
    const ag = 1e3,
      Yg = 6e4,
      Bg = 36e5,
      Vg = 864e5,
      rg = 6048e5,
      Xg = 2592e6,
      vg = 31536e6,
      dg = new Date,
      Hg = new Date;

    function Sg(UU, RU, gU, tU) {
      function pU(RU) {
        return UU(RU = 0 === arguments.length ? new Date : new Date(+RU)), RU
      }
      return pU.floor = RU => (UU(RU = new Date(+RU)), RU), pU.ceil = gU => (UU(gU = new Date(gU - 1)), RU(gU, 1), UU(gU), gU), pU.round = UU => {
        const RU = pU(UU),
          gU = pU.ceil(UU);
        return UU - RU < gU - UU ? RU : gU
      }, pU.offset = (UU, gU) => (RU(UU = new Date(+UU), null == gU ? 1 : Math.floor(gU)), UU), pU.range = (gU, tU, EU) => {
        const PU = [];
        if (gU = pU.ceil(gU), EU = null == EU ? 1 : Math.floor(EU), !(gU < tU) || !(EU > 0)) return PU;
        let TU;
        do {
          PU.push(TU = new Date(+gU)), RU(gU, EU), UU(gU)
        } while (TU < gU && gU < tU);
        return PU
      }, pU.filter = gU => Sg((RU => {
        if (RU >= RU)
          for (; UU(RU), !gU(RU);) RU.setTime(RU - 1)
      }), ((UU, tU) => {
        if (UU >= UU)
          if (tU < 0)
            for (; ++tU <= 0;)
              for (; RU(UU, -1), !gU(UU););
          else
            for (; --tU >= 0;)
              for (; RU(UU, 1), !gU(UU););
      })), gU && (pU.count = (RU, tU) => (dg.setTime(+RU), Hg.setTime(+tU), UU(dg), UU(Hg), Math.floor(gU(dg, Hg))), pU.every = UU => (UU = Math.floor(UU), isFinite(UU) && UU > 0 ? UU > 1 ? pU.filter(tU ? RU => tU(RU) % UU === 0 : RU => pU.count(0, RU) % UU === 0) : pU : null)), pU
    }
    const sg = Sg((() => {}), ((UU, RU) => {
      UU.setTime(+UU + RU)
    }), ((UU, RU) => RU - UU));
    sg.every = UU => (UU = Math.floor(UU), isFinite(UU) && UU > 0 ? UU > 1 ? Sg((RU => {
      RU.setTime(Math.floor(RU / UU) * UU)
    }), ((RU, gU) => {
      RU.setTime(+RU + gU * UU)
    }), ((RU, gU) => (gU - RU) / UU)) : sg : null);
    sg.range;
    const yg = Sg((UU => {
        UU.setTime(UU - UU.getMilliseconds())
      }), ((UU, RU) => {
        UU.setTime(+UU + RU * ag)
      }), ((UU, RU) => (RU - UU) / ag), (UU => UU.getUTCSeconds())),
      kg = (yg.range, Sg((UU => {
        UU.setTime(UU - UU.getMilliseconds() - UU.getSeconds() * ag)
      }), ((UU, RU) => {
        UU.setTime(+UU + RU * Yg)
      }), ((UU, RU) => (RU - UU) / Yg), (UU => UU.getMinutes()))),
      Fg = (kg.range, Sg((UU => {
        UU.setUTCSeconds(0, 0)
      }), ((UU, RU) => {
        UU.setTime(+UU + RU * Yg)
      }), ((UU, RU) => (RU - UU) / Yg), (UU => UU.getUTCMinutes()))),
      ig = (Fg.range, Sg((UU => {
        UU.setTime(UU - UU.getMilliseconds() - UU.getSeconds() * ag - UU.getMinutes() * Yg)
      }), ((UU, RU) => {
        UU.setTime(+UU + RU * Bg)
      }), ((UU, RU) => (RU - UU) / Bg), (UU => UU.getHours()))),
      Ag = (ig.range, Sg((UU => {
        UU.setUTCMinutes(0, 0, 0)
      }), ((UU, RU) => {
        UU.setTime(+UU + RU * Bg)
      }), ((UU, RU) => (RU - UU) / Bg), (UU => UU.getUTCHours()))),
      zg = (Ag.range, Sg((UU => UU.setHours(0, 0, 0, 0)), ((UU, RU) => UU.setDate(UU.getDate() + RU)), ((UU, RU) => (RU - UU - (RU.getTimezoneOffset() - UU.getTimezoneOffset()) * Yg) / Vg), (UU => UU.getDate() - 1))),
      Mg = (zg.range, Sg((UU => {
        UU.setUTCHours(0, 0, 0, 0)
      }), ((UU, RU) => {
        UU.setUTCDate(UU.getUTCDate() + RU)
      }), ((UU, RU) => (RU - UU) / Vg), (UU => UU.getUTCDate() - 1))),
      Dg = (Mg.range, Sg((UU => {
        UU.setUTCHours(0, 0, 0, 0)
      }), ((UU, RU) => {
        UU.setUTCDate(UU.getUTCDate() + RU)
      }), ((UU, RU) => (RU - UU) / Vg), (UU => Math.floor(UU / Vg))));
    Dg.range;

    function Lg(UU) {
      return Sg((RU => {
        RU.setDate(RU.getDate() - (RU.getDay() + 7 - UU) % 7), RU.setHours(0, 0, 0, 0)
      }), ((UU, RU) => {
        UU.setDate(UU.getDate() + 7 * RU)
      }), ((UU, RU) => (RU - UU - (RU.getTimezoneOffset() - UU.getTimezoneOffset()) * Yg) / rg))
    }
    const Ng = Lg(0),
      lg = Lg(1),
      Og = Lg(2),
      Ut = Lg(3),
      Rt = Lg(4),
      gt = Lg(5),
      tt = Lg(6);
    Ng.range, lg.range, Og.range, Ut.range, Rt.range, gt.range, tt.range;

    function pt(UU) {
      return Sg((RU => {
        RU.setUTCDate(RU.getUTCDate() - (RU.getUTCDay() + 7 - UU) % 7), RU.setUTCHours(0, 0, 0, 0)
      }), ((UU, RU) => {
        UU.setUTCDate(UU.getUTCDate() + 7 * RU)
      }), ((UU, RU) => (RU - UU) / rg))
    }
    const Et = pt(0),
      Pt = pt(1),
      Tt = pt(2),
      qt = pt(3),
      Kt = pt(4),
      ct = pt(5),
      Gt = pt(6),
      jt = (Et.range, Pt.range, Tt.range, qt.range, Kt.range, ct.range, Gt.range, Sg((UU => {
        UU.setDate(1), UU.setHours(0, 0, 0, 0)
      }), ((UU, RU) => {
        UU.setMonth(UU.getMonth() + RU)
      }), ((UU, RU) => RU.getMonth() - UU.getMonth() + 12 * (RU.getFullYear() - UU.getFullYear())), (UU => UU.getMonth()))),
      ut = (jt.range, Sg((UU => {
        UU.setUTCDate(1), UU.setUTCHours(0, 0, 0, 0)
      }), ((UU, RU) => {
        UU.setUTCMonth(UU.getUTCMonth() + RU)
      }), ((UU, RU) => RU.getUTCMonth() - UU.getUTCMonth() + 12 * (RU.getUTCFullYear() - UU.getUTCFullYear())), (UU => UU.getUTCMonth()))),
      Ct = (ut.range, Sg((UU => {
        UU.setMonth(0, 1), UU.setHours(0, 0, 0, 0)
      }), ((UU, RU) => {
        UU.setFullYear(UU.getFullYear() + RU)
      }), ((UU, RU) => RU.getFullYear() - UU.getFullYear()), (UU => UU.getFullYear())));
    Ct.every = UU => isFinite(UU = Math.floor(UU)) && UU > 0 ? Sg((RU => {
      RU.setFullYear(Math.floor(RU.getFullYear() / UU) * UU), RU.setMonth(0, 1), RU.setHours(0, 0, 0, 0)
    }), ((RU, gU) => {
      RU.setFullYear(RU.getFullYear() + gU * UU)
    })) : null;
    Ct.range;
    const ht = Sg((UU => {
      UU.setUTCMonth(0, 1), UU.setUTCHours(0, 0, 0, 0)
    }), ((UU, RU) => {
      UU.setUTCFullYear(UU.getUTCFullYear() + RU)
    }), ((UU, RU) => RU.getUTCFullYear() - UU.getUTCFullYear()), (UU => UU.getUTCFullYear()));
    ht.every = UU => isFinite(UU = Math.floor(UU)) && UU > 0 ? Sg((RU => {
      RU.setUTCFullYear(Math.floor(RU.getUTCFullYear() / UU) * UU), RU.setUTCMonth(0, 1), RU.setUTCHours(0, 0, 0, 0)
    }), ((RU, gU) => {
      RU.setUTCFullYear(RU.getUTCFullYear() + gU * UU)
    })) : null;
    ht.range;

    function Qt(UU, RU, gU, tU, pU, EU) {
      const PU = [
        [yg, 1, ag],
        [yg, 5, 5e3],
        [yg, 15, 15e3],
        [yg, 30, 3e4],
        [EU, 1, Yg],
        [EU, 5, 3e5],
        [EU, 15, 9e5],
        [EU, 30, 18e5],
        [pU, 1, Bg],
        [pU, 3, 108e5],
        [pU, 6, 216e5],
        [pU, 12, 432e5],
        [tU, 1, Vg],
        [tU, 2, 1728e5],
        [gU, 1, rg],
        [RU, 1, Xg],
        [RU, 3, 7776e6],
        [UU, 1, vg]
      ];

      function TU(RU, gU, tU) {
        const pU = Math.abs(gU - RU) / tU,
          EU = CU((UU => {
            let [, , RU] = UU;
            return RU
          })).right(PU, pU);
        if (EU === PU.length) return UU.every(GU(RU / vg, gU / vg, tU));
        if (0 === EU) return sg.every(Math.max(GU(RU, gU, tU), 1));
        const [TU, qU] = PU[pU / PU[EU - 1][2] < PU[EU][2] / pU ? EU - 1 : EU];
        return TU.every(qU)
      }
      return [function(UU, RU, gU) {
        const tU = RU < UU;
        tU && ([UU, RU] = [RU, UU]);
        const pU = gU && "function" === typeof gU.range ? gU : TU(UU, RU, gU),
          EU = pU ? pU.range(UU, +RU + 1) : [];
        return tU ? EU.reverse() : EU
      }, TU]
    }
    const [et, Wt] = Qt(ht, ut, Et, Dg, Ag, Fg), [ft, xt] = Qt(Ct, jt, Ng, zg, ig, kg);

    function mt(UU) {
      if (0 <= UU.y && UU.y < 100) {
        var RU = new Date(-1, UU.m, UU.d, UU.H, UU.M, UU.S, UU.L);
        return RU.setFullYear(UU.y), RU
      }
      return new Date(UU.y, UU.m, UU.d, UU.H, UU.M, UU.S, UU.L)
    }

    function It(UU) {
      if (0 <= UU.y && UU.y < 100) {
        var RU = new Date(Date.UTC(-1, UU.m, UU.d, UU.H, UU.M, UU.S, UU.L));
        return RU.setUTCFullYear(UU.y), RU
      }
      return new Date(Date.UTC(UU.y, UU.m, UU.d, UU.H, UU.M, UU.S, UU.L))
    }

    function Jt(UU, RU, gU) {
      return {
        y: UU,
        m: RU,
        d: gU,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var wt, nt, bt, ot = {
        "-": "",
        _: " ",
        0: "0"
      },
      Zt = /^\s*\d+/,
      Yt = /^%/,
      Bt = /[\\^$*+?|[\]().{}]/g;

    function Vt(UU, RU, gU) {
      var tU = UU < 0 ? "-" : "",
        pU = (tU ? -UU : UU) + "",
        EU = pU.length;
      return tU + (EU < gU ? new Array(gU - EU + 1).join(RU) + pU : pU)
    }

    function rt(UU) {
      return UU.replace(Bt, "\\$&")
    }

    function Xt(UU) {
      return new RegExp("^(?:" + UU.map(rt).join("|") + ")", "i")
    }

    function vt(UU) {
      return new Map(UU.map(((UU, RU) => [UU.toLowerCase(), RU])))
    }

    function dt(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 1));
      return tU ? (UU.w = +tU[0], gU + tU[0].length) : -1
    }

    function Ht(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 1));
      return tU ? (UU.u = +tU[0], gU + tU[0].length) : -1
    }

    function St(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 2));
      return tU ? (UU.U = +tU[0], gU + tU[0].length) : -1
    }

    function st(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 2));
      return tU ? (UU.V = +tU[0], gU + tU[0].length) : -1
    }

    function yt(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 2));
      return tU ? (UU.W = +tU[0], gU + tU[0].length) : -1
    }

    function kt(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 4));
      return tU ? (UU.y = +tU[0], gU + tU[0].length) : -1
    }

    function Ft(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 2));
      return tU ? (UU.y = +tU[0] + (+tU[0] > 68 ? 1900 : 2e3), gU + tU[0].length) : -1
    }

    function it(UU, RU, gU) {
      var tU = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(RU.slice(gU, gU + 6));
      return tU ? (UU.Z = tU[1] ? 0 : -(tU[2] + (tU[3] || "00")), gU + tU[0].length) : -1
    }

    function At(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 1));
      return tU ? (UU.q = 3 * tU[0] - 3, gU + tU[0].length) : -1
    }

    function zt(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 2));
      return tU ? (UU.m = tU[0] - 1, gU + tU[0].length) : -1
    }

    function Mt(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 2));
      return tU ? (UU.d = +tU[0], gU + tU[0].length) : -1
    }

    function Dt(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 3));
      return tU ? (UU.m = 0, UU.d = +tU[0], gU + tU[0].length) : -1
    }

    function Lt(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 2));
      return tU ? (UU.H = +tU[0], gU + tU[0].length) : -1
    }

    function Nt(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 2));
      return tU ? (UU.M = +tU[0], gU + tU[0].length) : -1
    }

    function lt(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 2));
      return tU ? (UU.S = +tU[0], gU + tU[0].length) : -1
    }

    function Ot(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 3));
      return tU ? (UU.L = +tU[0], gU + tU[0].length) : -1
    }

    function Up(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU, gU + 6));
      return tU ? (UU.L = Math.floor(tU[0] / 1e3), gU + tU[0].length) : -1
    }

    function Rp(UU, RU, gU) {
      var tU = Yt.exec(RU.slice(gU, gU + 1));
      return tU ? gU + tU[0].length : -1
    }

    function gp(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU));
      return tU ? (UU.Q = +tU[0], gU + tU[0].length) : -1
    }

    function tp(UU, RU, gU) {
      var tU = Zt.exec(RU.slice(gU));
      return tU ? (UU.s = +tU[0], gU + tU[0].length) : -1
    }

    function pp(UU, RU) {
      return Vt(UU.getDate(), RU, 2)
    }

    function Ep(UU, RU) {
      return Vt(UU.getHours(), RU, 2)
    }

    function Pp(UU, RU) {
      return Vt(UU.getHours() % 12 || 12, RU, 2)
    }

    function Tp(UU, RU) {
      return Vt(1 + zg.count(Ct(UU), UU), RU, 3)
    }

    function qp(UU, RU) {
      return Vt(UU.getMilliseconds(), RU, 3)
    }

    function Kp(UU, RU) {
      return qp(UU, RU) + "000"
    }

    function cp(UU, RU) {
      return Vt(UU.getMonth() + 1, RU, 2)
    }

    function Gp(UU, RU) {
      return Vt(UU.getMinutes(), RU, 2)
    }

    function jp(UU, RU) {
      return Vt(UU.getSeconds(), RU, 2)
    }

    function Cp(UU) {
      var RU = UU.getDay();
      return 0 === RU ? 7 : RU
    }

    function hp(UU, RU) {
      return Vt(Ng.count(Ct(UU) - 1, UU), RU, 2)
    }

    function Qp(UU) {
      var RU = UU.getDay();
      return RU >= 4 || 0 === RU ? Rt(UU) : Rt.ceil(UU)
    }

    function ep(UU, RU) {
      return UU = Qp(UU), Vt(Rt.count(Ct(UU), UU) + (4 === Ct(UU).getDay()), RU, 2)
    }

    function Wp(UU) {
      return UU.getDay()
    }

    function fp(UU, RU) {
      return Vt(lg.count(Ct(UU) - 1, UU), RU, 2)
    }

    function xp(UU, RU) {
      return Vt(UU.getFullYear() % 100, RU, 2)
    }

    function mp(UU, RU) {
      return Vt((UU = Qp(UU)).getFullYear() % 100, RU, 2)
    }

    function Ip(UU, RU) {
      return Vt(UU.getFullYear() % 1e4, RU, 4)
    }

    function Jp(UU, RU) {
      var gU = UU.getDay();
      return Vt((UU = gU >= 4 || 0 === gU ? Rt(UU) : Rt.ceil(UU)).getFullYear() % 1e4, RU, 4)
    }

    function wp(UU) {
      var RU = UU.getTimezoneOffset();
      return (RU > 0 ? "-" : (RU *= -1, "+")) + Vt(RU / 60 | 0, "0", 2) + Vt(RU % 60, "0", 2)
    }

    function np(UU, RU) {
      return Vt(UU.getUTCDate(), RU, 2)
    }

    function bp(UU, RU) {
      return Vt(UU.getUTCHours(), RU, 2)
    }

    function op(UU, RU) {
      return Vt(UU.getUTCHours() % 12 || 12, RU, 2)
    }

    function Zp(UU, RU) {
      return Vt(1 + Mg.count(ht(UU), UU), RU, 3)
    }

    function ap(UU, RU) {
      return Vt(UU.getUTCMilliseconds(), RU, 3)
    }

    function Yp(UU, RU) {
      return ap(UU, RU) + "000"
    }

    function Bp(UU, RU) {
      return Vt(UU.getUTCMonth() + 1, RU, 2)
    }

    function Vp(UU, RU) {
      return Vt(UU.getUTCMinutes(), RU, 2)
    }

    function rp(UU, RU) {
      return Vt(UU.getUTCSeconds(), RU, 2)
    }

    function Xp(UU) {
      var RU = UU.getUTCDay();
      return 0 === RU ? 7 : RU
    }

    function vp(UU, RU) {
      return Vt(Et.count(ht(UU) - 1, UU), RU, 2)
    }

    function dp(UU) {
      var RU = UU.getUTCDay();
      return RU >= 4 || 0 === RU ? Kt(UU) : Kt.ceil(UU)
    }

    function Hp(UU, RU) {
      return UU = dp(UU), Vt(Kt.count(ht(UU), UU) + (4 === ht(UU).getUTCDay()), RU, 2)
    }

    function Sp(UU) {
      return UU.getUTCDay()
    }

    function sp(UU, RU) {
      return Vt(Pt.count(ht(UU) - 1, UU), RU, 2)
    }

    function yp(UU, RU) {
      return Vt(UU.getUTCFullYear() % 100, RU, 2)
    }

    function kp(UU, RU) {
      return Vt((UU = dp(UU)).getUTCFullYear() % 100, RU, 2)
    }

    function Fp(UU, RU) {
      return Vt(UU.getUTCFullYear() % 1e4, RU, 4)
    }

    function ip(UU, RU) {
      var gU = UU.getUTCDay();
      return Vt((UU = gU >= 4 || 0 === gU ? Kt(UU) : Kt.ceil(UU)).getUTCFullYear() % 1e4, RU, 4)
    }

    function Ap() {
      return "+0000"
    }

    function zp() {
      return "%"
    }

    function Mp(UU) {
      return +UU
    }

    function Dp(UU) {
      return Math.floor(+UU / 1e3)
    }

    function Lp(UU) {
      return new Date(UU)
    }

    function Np(UU) {
      return UU instanceof Date ? +UU : +new Date(+UU)
    }

    function lp(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU) {
      var cU = oR(),
        GU = cU.invert,
        jU = cU.domain,
        uU = KU(".%L"),
        CU = KU(":%S"),
        hU = KU("%I:%M"),
        QU = KU("%I %p"),
        eU = KU("%a %d"),
        WU = KU("%b %d"),
        fU = KU("%B"),
        xU = KU("%Y");

      function mU(UU) {
        return (qU(UU) < UU ? uU : TU(UU) < UU ? CU : PU(UU) < UU ? hU : EU(UU) < UU ? QU : tU(UU) < UU ? pU(UU) < UU ? eU : WU : gU(UU) < UU ? fU : xU)(UU)
      }
      return cU.invert = function(UU) {
        return new Date(GU(UU))
      }, cU.domain = function(UU) {
        return arguments.length ? jU(Array.from(UU, Np)) : jU().map(Lp)
      }, cU.ticks = function(RU) {
        var gU = jU();
        return UU(gU[0], gU[gU.length - 1], null == RU ? 10 : RU)
      }, cU.tickFormat = function(UU, RU) {
        return null == RU ? mU : KU(RU)
      }, cU.nice = function(UU) {
        var gU = jU();
        return UU && "function" === typeof UU.range || (UU = RU(gU[0], gU[gU.length - 1], null == UU ? 10 : UU)), UU ? jU(LR(gU, UU)) : cU
      }, cU.copy = function() {
        return nR(cU, lp(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU))
      }, cU
    }

    function Op() {
      return aR.f.apply(lp(ft, xt, Ct, jt, Ng, zg, ig, kg, yg, nt).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function UE() {
      return aR.f.apply(lp(et, Wt, ht, ut, Et, Mg, Ag, Fg, yg, bt).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function RE() {
      var UU, RU, gU, tU, pU, EU = 0,
        PU = 1,
        TU = mR,
        qU = !1;

      function KU(RU) {
        return null == RU || isNaN(RU = +RU) ? pU : TU(0 === gU ? .5 : (RU = (tU(RU) - UU) * gU, qU ? Math.max(0, Math.min(1, RU)) : RU))
      }

      function cU(UU) {
        return function(RU) {
          var gU, tU;
          return arguments.length ? ([gU, tU] = RU, TU = UU(gU, tU), KU) : [TU(0), TU(1)]
        }
      }
      return KU.domain = function(pU) {
          return arguments.length ? ([EU, PU] = pU, UU = tU(EU = +EU), RU = tU(PU = +PU), gU = UU === RU ? 0 : 1 / (RU - UU), KU) : [EU, PU]
        }, KU.clamp = function(UU) {
          return arguments.length ? (qU = !!UU, KU) : qU
        }, KU.interpolator = function(UU) {
          return arguments.length ? (TU = UU, KU) : TU
        }, KU.range = cU(eR), KU.rangeRound = cU(WR), KU.unknown = function(UU) {
          return arguments.length ? (pU = UU, KU) : pU
        },
        function(pU) {
          return tU = pU, UU = pU(EU), RU = pU(PU), gU = UU === RU ? 0 : 1 / (RU - UU), KU
        }
    }

    function gE(UU, RU) {
      return RU.domain(UU.domain()).interpolator(UU.interpolator()).clamp(UU.clamp()).unknown(UU.unknown())
    }

    function tE() {
      var UU = zR(RE()(mR));
      return UU.copy = function() {
        return gE(UU, tE())
      }, aR.c.apply(UU, arguments)
    }

    function pE() {
      var UU = tg(RE()).domain([1, 10]);
      return UU.copy = function() {
        return gE(UU, pE()).base(UU.base())
      }, aR.c.apply(UU, arguments)
    }

    function EE() {
      var UU = Tg(RE());
      return UU.copy = function() {
        return gE(UU, EE()).constant(UU.constant())
      }, aR.c.apply(UU, arguments)
    }

    function PE() {
      var UU = ug(RE());
      return UU.copy = function() {
        return gE(UU, PE()).exponent(UU.exponent())
      }, aR.c.apply(UU, arguments)
    }

    function TE() {
      return PE.apply(null, arguments).exponent(.5)
    }

    function qE() {
      var UU = [],
        RU = mR;

      function gU(gU) {
        if (null != gU && !isNaN(gU = +gU)) return RU((fU(UU, gU, 1) - 1) / (UU.length - 1))
      }
      return gU.domain = function(RU) {
        if (!arguments.length) return UU.slice();
        UU = [];
        for (let gU of RU) null == gU || isNaN(gU = +gU) || UU.push(gU);
        return UU.sort(jU), gU
      }, gU.interpolator = function(UU) {
        return arguments.length ? (RU = UU, gU) : RU
      }, gU.range = function() {
        return UU.map(((gU, tU) => RU(tU / (UU.length - 1))))
      }, gU.quantiles = function(RU) {
        return Array.from({
          length: RU + 1
        }, ((gU, tU) => wg(UU, tU / RU)))
      }, gU.copy = function() {
        return qE(RU).domain(UU)
      }, aR.c.apply(gU, arguments)
    }

    function KE() {
      var UU, RU, gU, tU, pU, EU, PU, TU = 0,
        qU = .5,
        KU = 1,
        cU = 1,
        GU = mR,
        jU = !1;

      function uU(UU) {
        return isNaN(UU = +UU) ? PU : (UU = .5 + ((UU = +EU(UU)) - RU) * (cU * UU < cU * RU ? tU : pU), GU(jU ? Math.max(0, Math.min(1, UU)) : UU))
      }

      function CU(UU) {
        return function(RU) {
          var gU, tU, pU;
          return arguments.length ? ([gU, tU, pU] = RU, GU = function(UU, RU) {
            void 0 === RU && (RU = UU, UU = eR);
            for (var gU = 0, tU = RU.length - 1, pU = RU[0], EU = new Array(tU < 0 ? 0 : tU); gU < tU;) EU[gU] = UU(pU, pU = RU[++gU]);
            return function(UU) {
              var RU = Math.max(0, Math.min(tU - 1, Math.floor(UU *= tU)));
              return EU[RU](UU - RU)
            }
          }(UU, [gU, tU, pU]), uU) : [GU(0), GU(.5), GU(1)]
        }
      }
      return uU.domain = function(PU) {
          return arguments.length ? ([TU, qU, KU] = PU, UU = EU(TU = +TU), RU = EU(qU = +qU), gU = EU(KU = +KU), tU = UU === RU ? 0 : .5 / (RU - UU), pU = RU === gU ? 0 : .5 / (gU - RU), cU = RU < UU ? -1 : 1, uU) : [TU, qU, KU]
        }, uU.clamp = function(UU) {
          return arguments.length ? (jU = !!UU, uU) : jU
        }, uU.interpolator = function(UU) {
          return arguments.length ? (GU = UU, uU) : GU
        }, uU.range = CU(eR), uU.rangeRound = CU(WR), uU.unknown = function(UU) {
          return arguments.length ? (PU = UU, uU) : PU
        },
        function(PU) {
          return EU = PU, UU = PU(TU), RU = PU(qU), gU = PU(KU), tU = UU === RU ? 0 : .5 / (RU - UU), pU = RU === gU ? 0 : .5 / (gU - RU), cU = RU < UU ? -1 : 1, uU
        }
    }

    function cE() {
      var UU = zR(KE()(mR));
      return UU.copy = function() {
        return gE(UU, cE())
      }, aR.c.apply(UU, arguments)
    }

    function GE() {
      var UU = tg(KE()).domain([.1, 1, 10]);
      return UU.copy = function() {
        return gE(UU, GE()).base(UU.base())
      }, aR.c.apply(UU, arguments)
    }

    function jE() {
      var UU = Tg(KE());
      return UU.copy = function() {
        return gE(UU, jE()).constant(UU.constant())
      }, aR.c.apply(UU, arguments)
    }

    function uE() {
      var UU = ug(KE());
      return UU.copy = function() {
        return gE(UU, uE()).exponent(UU.exponent())
      }, aR.c.apply(UU, arguments)
    }

    function CE() {
      return uE.apply(null, arguments).exponent(.5)
    }

    function hE(UU, RU) {
      if ((pU = UU.length) > 1)
        for (var gU, tU, pU, EU = 1, PU = UU[RU[0]], TU = PU.length; EU < pU; ++EU)
          for (tU = PU, PU = UU[RU[EU]], gU = 0; gU < TU; ++gU) PU[gU][1] += PU[gU][0] = isNaN(tU[gU][1]) ? tU[gU][0] : tU[gU][1]
    }! function(UU) {
      wt = function(UU) {
        var RU = UU.dateTime,
          gU = UU.date,
          tU = UU.time,
          pU = UU.periods,
          EU = UU.days,
          PU = UU.shortDays,
          TU = UU.months,
          qU = UU.shortMonths,
          KU = Xt(pU),
          cU = vt(pU),
          GU = Xt(EU),
          jU = vt(EU),
          uU = Xt(PU),
          CU = vt(PU),
          hU = Xt(TU),
          QU = vt(TU),
          eU = Xt(qU),
          WU = vt(qU),
          fU = {
            a: function(UU) {
              return PU[UU.getDay()]
            },
            A: function(UU) {
              return EU[UU.getDay()]
            },
            b: function(UU) {
              return qU[UU.getMonth()]
            },
            B: function(UU) {
              return TU[UU.getMonth()]
            },
            c: null,
            d: pp,
            e: pp,
            f: Kp,
            g: mp,
            G: Jp,
            H: Ep,
            I: Pp,
            j: Tp,
            L: qp,
            m: cp,
            M: Gp,
            p: function(UU) {
              return pU[+(UU.getHours() >= 12)]
            },
            q: function(UU) {
              return 1 + ~~(UU.getMonth() / 3)
            },
            Q: Mp,
            s: Dp,
            S: jp,
            u: Cp,
            U: hp,
            V: ep,
            w: Wp,
            W: fp,
            x: null,
            X: null,
            y: xp,
            Y: Ip,
            Z: wp,
            "%": zp
          },
          xU = {
            a: function(UU) {
              return PU[UU.getUTCDay()]
            },
            A: function(UU) {
              return EU[UU.getUTCDay()]
            },
            b: function(UU) {
              return qU[UU.getUTCMonth()]
            },
            B: function(UU) {
              return TU[UU.getUTCMonth()]
            },
            c: null,
            d: np,
            e: np,
            f: Yp,
            g: kp,
            G: ip,
            H: bp,
            I: op,
            j: Zp,
            L: ap,
            m: Bp,
            M: Vp,
            p: function(UU) {
              return pU[+(UU.getUTCHours() >= 12)]
            },
            q: function(UU) {
              return 1 + ~~(UU.getUTCMonth() / 3)
            },
            Q: Mp,
            s: Dp,
            S: rp,
            u: Xp,
            U: vp,
            V: Hp,
            w: Sp,
            W: sp,
            x: null,
            X: null,
            y: yp,
            Y: Fp,
            Z: Ap,
            "%": zp
          },
          mU = {
            a: function(UU, RU, gU) {
              var tU = uU.exec(RU.slice(gU));
              return tU ? (UU.w = CU.get(tU[0].toLowerCase()), gU + tU[0].length) : -1
            },
            A: function(UU, RU, gU) {
              var tU = GU.exec(RU.slice(gU));
              return tU ? (UU.w = jU.get(tU[0].toLowerCase()), gU + tU[0].length) : -1
            },
            b: function(UU, RU, gU) {
              var tU = eU.exec(RU.slice(gU));
              return tU ? (UU.m = WU.get(tU[0].toLowerCase()), gU + tU[0].length) : -1
            },
            B: function(UU, RU, gU) {
              var tU = hU.exec(RU.slice(gU));
              return tU ? (UU.m = QU.get(tU[0].toLowerCase()), gU + tU[0].length) : -1
            },
            c: function(UU, gU, tU) {
              return wU(UU, RU, gU, tU)
            },
            d: Mt,
            e: Mt,
            f: Up,
            g: Ft,
            G: kt,
            H: Lt,
            I: Lt,
            j: Dt,
            L: Ot,
            m: zt,
            M: Nt,
            p: function(UU, RU, gU) {
              var tU = KU.exec(RU.slice(gU));
              return tU ? (UU.p = cU.get(tU[0].toLowerCase()), gU + tU[0].length) : -1
            },
            q: At,
            Q: gp,
            s: tp,
            S: lt,
            u: Ht,
            U: St,
            V: st,
            w: dt,
            W: yt,
            x: function(UU, RU, tU) {
              return wU(UU, gU, RU, tU)
            },
            X: function(UU, RU, gU) {
              return wU(UU, tU, RU, gU)
            },
            y: Ft,
            Y: kt,
            Z: it,
            "%": Rp
          };

        function IU(UU, RU) {
          return function(gU) {
            var tU, pU, EU, PU = [],
              TU = -1,
              qU = 0,
              KU = UU.length;
            for (gU instanceof Date || (gU = new Date(+gU)); ++TU < KU;) 37 === UU.charCodeAt(TU) && (PU.push(UU.slice(qU, TU)), null != (pU = ot[tU = UU.charAt(++TU)]) ? tU = UU.charAt(++TU) : pU = "e" === tU ? " " : "0", (EU = RU[tU]) && (tU = EU(gU, pU)), PU.push(tU), qU = TU + 1);
            return PU.push(UU.slice(qU, TU)), PU.join("")
          }
        }

        function JU(UU, RU) {
          return function(gU) {
            var tU, pU, EU = Jt(1900, void 0, 1);
            if (wU(EU, UU, gU += "", 0) != gU.length) return null;
            if ("Q" in EU) return new Date(EU.Q);
            if ("s" in EU) return new Date(1e3 * EU.s + ("L" in EU ? EU.L : 0));
            if (RU && !("Z" in EU) && (EU.Z = 0), "p" in EU && (EU.H = EU.H % 12 + 12 * EU.p), void 0 === EU.m && (EU.m = "q" in EU ? EU.q : 0), "V" in EU) {
              if (EU.V < 1 || EU.V > 53) return null;
              "w" in EU || (EU.w = 1), "Z" in EU ? (pU = (tU = It(Jt(EU.y, 0, 1))).getUTCDay(), tU = pU > 4 || 0 === pU ? Pt.ceil(tU) : Pt(tU), tU = Mg.offset(tU, 7 * (EU.V - 1)), EU.y = tU.getUTCFullYear(), EU.m = tU.getUTCMonth(), EU.d = tU.getUTCDate() + (EU.w + 6) % 7) : (pU = (tU = mt(Jt(EU.y, 0, 1))).getDay(), tU = pU > 4 || 0 === pU ? lg.ceil(tU) : lg(tU), tU = zg.offset(tU, 7 * (EU.V - 1)), EU.y = tU.getFullYear(), EU.m = tU.getMonth(), EU.d = tU.getDate() + (EU.w + 6) % 7)
            } else("W" in EU || "U" in EU) && ("w" in EU || (EU.w = "u" in EU ? EU.u % 7 : "W" in EU ? 1 : 0), pU = "Z" in EU ? It(Jt(EU.y, 0, 1)).getUTCDay() : mt(Jt(EU.y, 0, 1)).getDay(), EU.m = 0, EU.d = "W" in EU ? (EU.w + 6) % 7 + 7 * EU.W - (pU + 5) % 7 : EU.w + 7 * EU.U - (pU + 6) % 7);
            return "Z" in EU ? (EU.H += EU.Z / 100 | 0, EU.M += EU.Z % 100, It(EU)) : mt(EU)
          }
        }

        function wU(UU, RU, gU, tU) {
          for (var pU, EU, PU = 0, TU = RU.length, qU = gU.length; PU < TU;) {
            if (tU >= qU) return -1;
            if (37 === (pU = RU.charCodeAt(PU++))) {
              if (pU = RU.charAt(PU++), !(EU = mU[pU in ot ? RU.charAt(PU++) : pU]) || (tU = EU(UU, gU, tU)) < 0) return -1
            } else if (pU != gU.charCodeAt(tU++)) return -1
          }
          return tU
        }
        return fU.x = IU(gU, fU), fU.X = IU(tU, fU), fU.c = IU(RU, fU), xU.x = IU(gU, xU), xU.X = IU(tU, xU), xU.c = IU(RU, xU), {
          format: function(UU) {
            var RU = IU(UU += "", fU);
            return RU.toString = function() {
              return UU
            }, RU
          },
          parse: function(UU) {
            var RU = JU(UU += "", !1);
            return RU.toString = function() {
              return UU
            }, RU
          },
          utcFormat: function(UU) {
            var RU = IU(UU += "", xU);
            return RU.toString = function() {
              return UU
            }, RU
          },
          utcParse: function(UU) {
            var RU = JU(UU += "", !0);
            return RU.toString = function() {
              return UU
            }, RU
          }
        }
      }(UU), nt = wt.format, wt.parse, bt = wt.utcFormat, wt.utcParse
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
    var QE = gU(5891),
      eE = gU(5780);

    function WE(UU) {
      for (var RU = UU.length, gU = new Array(RU); --RU >= 0;) gU[RU] = RU;
      return gU
    }

    function fE(UU, RU) {
      return UU[RU]
    }

    function xE(UU) {
      const RU = [];
      return RU.key = UU, RU
    }
    var mE = gU(5842),
      IE = gU.n(mE),
      JE = gU(5861),
      wE = gU.n(JE),
      nE = gU(5087),
      bE = gU.n(nE),
      oE = gU(4921),
      ZE = gU.n(oE),
      aE = gU(4835),
      YE = gU.n(aE),
      BE = gU(4846),
      VE = gU.n(BE),
      rE = gU(5867),
      XE = gU.n(rE),
      vE = gU(4840),
      dE = gU.n(vE),
      HE = gU(5735),
      SE = gU.n(HE),
      sE = gU(5874),
      yE = gU.n(sE),
      kE = gU(5170),
      FE = gU.n(kE),
      iE = gU(5881),
      AE = gU.n(iE);

    function zE(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return ME(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(UU)) return Array.from(UU)
      }(UU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return ME(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return ME(UU, RU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ME(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }
    var DE = function(UU) {
        return UU
      },
      LE = {
        "@@functional/placeholder": !0
      },
      NE = function(UU) {
        return UU === LE
      },
      lE = function(UU) {
        return function RU() {
          return 0 === arguments.length || 1 === arguments.length && NE(arguments.length <= 0 ? void 0 : arguments[0]) ? RU : UU.apply(void 0, arguments)
        }
      },
      OE = function UU(RU, gU) {
        return 1 === RU ? gU : lE((function() {
          for (var tU = arguments.length, pU = new Array(tU), EU = 0; EU < tU; EU++) pU[EU] = arguments[EU];
          var PU = pU.filter((function(UU) {
            return UU !== LE
          })).length;
          return PU >= RU ? gU.apply(void 0, pU) : UU(RU - PU, lE((function() {
            for (var UU = arguments.length, RU = new Array(UU), tU = 0; tU < UU; tU++) RU[tU] = arguments[tU];
            var EU = pU.map((function(UU) {
              return NE(UU) ? RU.shift() : UU
            }));
            return gU.apply(void 0, zE(EU).concat(RU))
          })))
        }))
      },
      UP = function(UU) {
        return OE(UU.length, UU)
      },
      RP = function(UU, RU) {
        for (var gU = [], tU = UU; tU < RU; ++tU) gU[tU - UU] = tU;
        return gU
      },
      gP = UP((function(UU, RU) {
        return Array.isArray(RU) ? RU.map(UU) : Object.keys(RU).map((function(UU) {
          return RU[UU]
        })).map(UU)
      })),
      tP = function() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        if (!RU.length) return DE;
        var tU = RU.reverse(),
          pU = tU[0],
          EU = tU.slice(1);
        return function() {
          return EU.reduce((function(UU, RU) {
            return RU(UU)
          }), pU.apply(void 0, arguments))
        }
      },
      pP = function(UU) {
        return Array.isArray(UU) ? UU.reverse() : UU.split("").reverse.join("")
      },
      EP = function(UU) {
        var RU = null,
          gU = null;
        return function() {
          for (var tU = arguments.length, pU = new Array(tU), EU = 0; EU < tU; EU++) pU[EU] = arguments[EU];
          return RU && pU.every((function(UU, gU) {
            return UU === RU[gU]
          })) ? gU : (RU = pU, gU = UU.apply(void 0, pU))
        }
      };
    const PP = {
      rangeStep: function(UU, RU, gU) {
        for (var tU = new(AE())(UU), pU = 0, EU = []; tU.lt(RU) && pU < 1e5;) EU.push(tU.toNumber()), tU = tU.add(gU), pU++;
        return EU
      },
      getDigitCount: function(UU) {
        return 0 === UU ? 1 : Math.floor(new(AE())(UU).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: UP((function(UU, RU, gU) {
        var tU = +UU;
        return tU + gU * (+RU - tU)
      })),
      uninterpolateNumber: UP((function(UU, RU, gU) {
        var tU = RU - +UU;
        return (gU - UU) / (tU = tU || 1 / 0)
      })),
      uninterpolateTruncation: UP((function(UU, RU, gU) {
        var tU = RU - +UU;
        return tU = tU || 1 / 0, Math.max(0, Math.min(1, (gU - UU) / tU))
      }))
    };

    function TP(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return cP(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(UU)) return Array.from(UU)
      }(UU) || KP(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qP(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(UU))) return;
        var gU = [],
          tU = !0,
          pU = !1,
          EU = void 0;
        try {
          for (var PU, TU = UU[Symbol.iterator](); !(tU = (PU = TU.next()).done) && (gU.push(PU.value), !RU || gU.length !== RU); tU = !0);
        } catch (qU) {
          pU = !0, EU = qU
        } finally {
          try {
            tU || null == TU.return || TU.return()
          } finally {
            if (pU) throw EU
          }
        }
        return gU
      }(UU, RU) || KP(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function KP(UU, RU) {
      if (UU) {
        if ("string" === typeof UU) return cP(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        return "Object" === gU && UU.constructor && (gU = UU.constructor.name), "Map" === gU || "Set" === gU ? Array.from(UU) : "Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU) ? cP(UU, RU) : void 0
      }
    }

    function cP(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function GP(UU) {
      var RU = qP(UU, 2),
        gU = RU[0],
        tU = RU[1],
        pU = gU,
        EU = tU;
      return gU > tU && (pU = tU, EU = gU), [pU, EU]
    }

    function jP(UU, RU, gU) {
      if (UU.lte(0)) return new(AE())(0);
      var tU = PP.getDigitCount(UU.toNumber()),
        pU = new(AE())(10).pow(tU),
        EU = UU.div(pU),
        PU = 1 !== tU ? .05 : .1,
        TU = new(AE())(Math.ceil(EU.div(PU).toNumber())).add(gU).mul(PU).mul(pU);
      return RU ? TU : new(AE())(Math.ceil(TU))
    }

    function uP(UU, RU, gU) {
      var tU = 1,
        pU = new(AE())(UU);
      if (!pU.isint() && gU) {
        var EU = Math.abs(UU);
        EU < 1 ? (tU = new(AE())(10).pow(PP.getDigitCount(UU) - 1), pU = new(AE())(Math.floor(pU.div(tU).toNumber())).mul(tU)) : EU > 1 && (pU = new(AE())(Math.floor(UU)))
      } else 0 === UU ? pU = new(AE())(Math.floor((RU - 1) / 2)) : gU || (pU = new(AE())(Math.floor(UU)));
      var PU = Math.floor((RU - 1) / 2);
      return tP(gP((function(UU) {
        return pU.add(new(AE())(UU - PU).mul(tU)).toNumber()
      })), RP)(0, RU)
    }

    function CP(UU, RU, gU, tU) {
      var pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((RU - UU) / (gU - 1))) return {
        step: new(AE())(0),
        tickMin: new(AE())(0),
        tickMax: new(AE())(0)
      };
      var EU, PU = jP(new(AE())(RU).sub(UU).div(gU - 1), tU, pU);
      EU = UU <= 0 && RU >= 0 ? new(AE())(0) : (EU = new(AE())(UU).add(RU).div(2)).sub(new(AE())(EU).mod(PU));
      var TU = Math.ceil(EU.sub(UU).div(PU).toNumber()),
        qU = Math.ceil(new(AE())(RU).sub(EU).div(PU).toNumber()),
        KU = TU + qU + 1;
      return KU > gU ? CP(UU, RU, gU, tU, pU + 1) : (KU < gU && (qU = RU > 0 ? qU + (gU - KU) : qU, TU = RU > 0 ? TU : TU + (gU - KU)), {
        step: PU,
        tickMin: EU.sub(new(AE())(TU).mul(PU)),
        tickMax: EU.add(new(AE())(qU).mul(PU))
      })
    }
    var hP = EP((function(UU) {
        var RU = qP(UU, 2),
          gU = RU[0],
          tU = RU[1],
          pU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          EU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          PU = Math.max(pU, 2),
          TU = qP(GP([gU, tU]), 2),
          qU = TU[0],
          KU = TU[1];
        if (qU === -1 / 0 || KU === 1 / 0) {
          var cU = KU === 1 / 0 ? [qU].concat(TP(RP(0, pU - 1).map((function() {
            return 1 / 0
          })))) : [].concat(TP(RP(0, pU - 1).map((function() {
            return -1 / 0
          }))), [KU]);
          return gU > tU ? pP(cU) : cU
        }
        if (qU === KU) return uP(qU, pU, EU);
        var GU = CP(qU, KU, PU, EU),
          jU = GU.step,
          uU = GU.tickMin,
          CU = GU.tickMax,
          hU = PP.rangeStep(uU, CU.add(new(AE())(.1).mul(jU)), jU);
        return gU > tU ? pP(hU) : hU
      })),
      QP = (EP((function(UU) {
        var RU = qP(UU, 2),
          gU = RU[0],
          tU = RU[1],
          pU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          EU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          PU = Math.max(pU, 2),
          TU = qP(GP([gU, tU]), 2),
          qU = TU[0],
          KU = TU[1];
        if (qU === -1 / 0 || KU === 1 / 0) return [gU, tU];
        if (qU === KU) return uP(qU, pU, EU);
        var cU = jP(new(AE())(KU).sub(qU).div(PU - 1), EU, 0),
          GU = tP(gP((function(UU) {
            return new(AE())(qU).add(new(AE())(UU).mul(cU)).toNumber()
          })), RP)(0, PU).filter((function(UU) {
            return UU >= qU && UU <= KU
          }));
        return gU > tU ? pP(GU) : GU
      })), EP((function(UU, RU) {
        var gU = qP(UU, 2),
          tU = gU[0],
          pU = gU[1],
          EU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          PU = qP(GP([tU, pU]), 2),
          TU = PU[0],
          qU = PU[1];
        if (TU === -1 / 0 || qU === 1 / 0) return [tU, pU];
        if (TU === qU) return [TU];
        var KU = Math.max(RU, 2),
          cU = jP(new(AE())(qU).sub(TU).div(KU - 1), EU, 0),
          GU = [].concat(TP(PP.rangeStep(new(AE())(TU), new(AE())(qU).sub(new(AE())(.99).mul(cU)), cU)), [qU]);
        return tU > pU ? pP(GU) : GU
      }))),
      eP = gU(5885),
      WP = gU(4827),
      fP = gU(5097),
      xP = gU(5887);

    function mP(UU) {
      return mP = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, mP(UU)
    }

    function IP(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return JP(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || function(UU, RU) {
        if (!UU) return;
        if ("string" === typeof UU) return JP(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === gU && UU.constructor && (gU = UU.constructor.name);
        if ("Map" === gU || "Set" === gU) return Array.from(UU);
        if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return JP(UU, RU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function JP(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function wP(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function nP(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? wP(Object(gU), !0).forEach((function(RU) {
          bP(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : wP(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function bP(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != mP(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != mP(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == mP(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function oP(UU, RU, gU) {
      return bE()(UU) || bE()(RU) ? gU : (0, WP.r)(RU) ? VE()(UU, RU, gU) : ZE()(RU) ? RU(UU) : gU
    }

    function ZP(UU, RU, gU, tU) {
      var pU = XE()(UU, (function(UU) {
        return oP(UU, RU)
      }));
      if ("number" === gU) {
        var EU = pU.filter((function(UU) {
          return (0, WP.v)(UU) || parseFloat(UU)
        }));
        return EU.length ? [wE()(EU), IE()(EU)] : [1 / 0, -1 / 0]
      }
      return (tU ? pU.filter((function(UU) {
        return !bE()(UU)
      })) : pU).map((function(UU) {
        return (0, WP.r)(UU) || UU instanceof Date ? UU : ""
      }))
    }
    var aP = function(UU) {
        var RU, gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          tU = arguments.length > 2 ? arguments[2] : void 0,
          pU = arguments.length > 3 ? arguments[3] : void 0,
          EU = -1,
          PU = null !== (RU = null === gU || void 0 === gU ? void 0 : gU.length) && void 0 !== RU ? RU : 0;
        if (PU <= 1) return 0;
        if (pU && "angleAxis" === pU.axisType && Math.abs(Math.abs(pU.range[1] - pU.range[0]) - 360) <= 1e-6)
          for (var TU = pU.range, qU = 0; qU < PU; qU++) {
            var KU = qU > 0 ? tU[qU - 1].coordinate : tU[PU - 1].coordinate,
              cU = tU[qU].coordinate,
              GU = qU >= PU - 1 ? tU[0].coordinate : tU[qU + 1].coordinate,
              jU = void 0;
            if ((0, WP.y)(cU - KU) !== (0, WP.y)(GU - cU)) {
              var uU = [];
              if ((0, WP.y)(GU - cU) === (0, WP.y)(TU[1] - TU[0])) {
                jU = GU;
                var CU = cU + TU[1] - TU[0];
                uU[0] = Math.min(CU, (CU + KU) / 2), uU[1] = Math.max(CU, (CU + KU) / 2)
              } else {
                jU = KU;
                var hU = GU + TU[1] - TU[0];
                uU[0] = Math.min(cU, (hU + cU) / 2), uU[1] = Math.max(cU, (hU + cU) / 2)
              }
              var QU = [Math.min(cU, (jU + cU) / 2), Math.max(cU, (jU + cU) / 2)];
              if (UU > QU[0] && UU <= QU[1] || UU >= uU[0] && UU <= uU[1]) {
                EU = tU[qU].index;
                break
              }
            } else {
              var eU = Math.min(KU, GU),
                WU = Math.max(KU, GU);
              if (UU > (eU + cU) / 2 && UU <= (WU + cU) / 2) {
                EU = tU[qU].index;
                break
              }
            }
          } else
            for (var fU = 0; fU < PU; fU++)
              if (0 === fU && UU <= (gU[fU].coordinate + gU[fU + 1].coordinate) / 2 || fU > 0 && fU < PU - 1 && UU > (gU[fU].coordinate + gU[fU - 1].coordinate) / 2 && UU <= (gU[fU].coordinate + gU[fU + 1].coordinate) / 2 || fU === PU - 1 && UU > (gU[fU].coordinate + gU[fU - 1].coordinate) / 2) {
                EU = gU[fU].index;
                break
              } return EU
      },
      YP = function(UU) {
        var RU, gU, tU = UU.type.displayName,
          pU = null !== (RU = UU.type) && void 0 !== RU && RU.defaultProps ? nP(nP({}, UU.type.defaultProps), UU.props) : UU.props,
          EU = pU.stroke,
          PU = pU.fill;
        switch (tU) {
          case "Line":
            gU = EU;
            break;
          case "Area":
          case "Radar":
            gU = EU && "none" !== EU ? EU : PU;
            break;
          default:
            gU = PU
        }
        return gU
      },
      BP = function(UU) {
        var RU = UU.barSize,
          gU = UU.totalSize,
          tU = UU.stackGroups,
          pU = void 0 === tU ? {} : tU;
        if (!pU) return {};
        for (var EU = {}, PU = Object.keys(pU), TU = 0, qU = PU.length; TU < qU; TU++)
          for (var KU = pU[PU[TU]].stackGroups, cU = Object.keys(KU), GU = 0, jU = cU.length; GU < jU; GU++) {
            var uU = KU[cU[GU]],
              CU = uU.items,
              hU = uU.cateAxisId,
              QU = CU.filter((function(UU) {
                return (0, fP.i)(UU.type).indexOf("Bar") >= 0
              }));
            if (QU && QU.length) {
              var eU = QU[0].type.defaultProps,
                WU = void 0 !== eU ? nP(nP({}, eU), QU[0].props) : QU[0].props,
                fU = WU.barSize,
                xU = WU[hU];
              EU[xU] || (EU[xU] = []);
              var mU = bE()(fU) ? RU : fU;
              EU[xU].push({
                item: QU[0],
                stackList: QU.slice(1),
                barSize: bE()(mU) ? void 0 : (0, WP.k)(mU, gU, 0)
              })
            }
          }
        return EU
      },
      VP = function(UU) {
        var RU = UU.barGap,
          gU = UU.barCategoryGap,
          tU = UU.bandSize,
          pU = UU.sizeList,
          EU = void 0 === pU ? [] : pU,
          PU = UU.maxBarSize,
          TU = EU.length;
        if (TU < 1) return null;
        var qU, KU = (0, WP.k)(RU, tU, 0, !0),
          cU = [];
        if (EU[0].barSize === +EU[0].barSize) {
          var GU = !1,
            jU = tU / TU,
            uU = EU.reduce((function(UU, RU) {
              return UU + RU.barSize || 0
            }), 0);
          (uU += (TU - 1) * KU) >= tU && (uU -= (TU - 1) * KU, KU = 0), uU >= tU && jU > 0 && (GU = !0, uU = TU * (jU *= .9));
          var CU = {
            offset: ((tU - uU) / 2 | 0) - KU,
            size: 0
          };
          qU = EU.reduce((function(UU, RU) {
            var gU = {
                item: RU.item,
                position: {
                  offset: CU.offset + CU.size + KU,
                  size: GU ? jU : RU.barSize
                }
              },
              tU = [].concat(IP(UU), [gU]);
            return CU = tU[tU.length - 1].position, RU.stackList && RU.stackList.length && RU.stackList.forEach((function(UU) {
              tU.push({
                item: UU,
                position: CU
              })
            })), tU
          }), cU)
        } else {
          var hU = (0, WP.k)(gU, tU, 0, !0);
          tU - 2 * hU - (TU - 1) * KU <= 0 && (KU = 0);
          var QU = (tU - 2 * hU - (TU - 1) * KU) / TU;
          QU > 1 && (QU >>= 0);
          var eU = PU === +PU ? Math.min(QU, PU) : QU;
          qU = EU.reduce((function(UU, RU, gU) {
            var tU = [].concat(IP(UU), [{
              item: RU.item,
              position: {
                offset: hU + (QU + KU) * gU + (QU - eU) / 2,
                size: eU
              }
            }]);
            return RU.stackList && RU.stackList.length && RU.stackList.forEach((function(UU) {
              tU.push({
                item: UU,
                position: tU[tU.length - 1].position
              })
            })), tU
          }), cU)
        }
        return qU
      },
      rP = function(UU, RU, gU, tU) {
        var pU = gU.children,
          EU = gU.width,
          PU = gU.margin,
          TU = EU - (PU.left || 0) - (PU.right || 0),
          qU = (0, xP.c)({
            children: pU,
            legendWidth: TU
          });
        if (qU) {
          var KU = tU || {},
            cU = KU.width,
            GU = KU.height,
            jU = qU.align,
            uU = qU.verticalAlign,
            CU = qU.layout;
          if (("vertical" === CU || "horizontal" === CU && "middle" === uU) && "center" !== jU && (0, WP.v)(UU[jU])) return nP(nP({}, UU), {}, bP({}, jU, UU[jU] + (cU || 0)));
          if (("horizontal" === CU || "vertical" === CU && "center" === jU) && "middle" !== uU && (0, WP.v)(UU[uU])) return nP(nP({}, UU), {}, bP({}, uU, UU[uU] + (GU || 0)))
        }
        return UU
      },
      XP = function(UU, RU, gU, tU, pU) {
        var EU = RU.props.children,
          PU = (0, fP.f)(EU, eP.c).filter((function(UU) {
            return function(UU, RU, gU) {
              return !!bE()(RU) || ("horizontal" === UU ? "yAxis" === RU : "vertical" === UU || "x" === gU ? "xAxis" === RU : "y" !== gU || "yAxis" === RU)
            }(tU, pU, UU.props.direction)
          }));
        if (PU && PU.length) {
          var TU = PU.map((function(UU) {
            return UU.props.dataKey
          }));
          return UU.reduce((function(UU, RU) {
            var tU = oP(RU, gU);
            if (bE()(tU)) return UU;
            var pU = Array.isArray(tU) ? [wE()(tU), IE()(tU)] : [tU, tU],
              EU = TU.reduce((function(UU, gU) {
                var tU = oP(RU, gU, 0),
                  EU = pU[0] - Math.abs(Array.isArray(tU) ? tU[0] : tU),
                  PU = pU[1] + Math.abs(Array.isArray(tU) ? tU[1] : tU);
                return [Math.min(EU, UU[0]), Math.max(PU, UU[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(EU[0], UU[0]), Math.max(EU[1], UU[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      vP = function(UU, RU, gU, tU, pU) {
        var EU = RU.map((function(RU) {
          return XP(UU, RU, gU, pU, tU)
        })).filter((function(UU) {
          return !bE()(UU)
        }));
        return EU && EU.length ? EU.reduce((function(UU, RU) {
          return [Math.min(UU[0], RU[0]), Math.max(UU[1], RU[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      dP = function(UU, RU, gU, tU, pU) {
        var EU = RU.map((function(RU) {
          var EU = RU.props.dataKey;
          return "number" === gU && EU && XP(UU, RU, EU, tU) || ZP(UU, EU, gU, pU)
        }));
        if ("number" === gU) return EU.reduce((function(UU, RU) {
          return [Math.min(UU[0], RU[0]), Math.max(UU[1], RU[1])]
        }), [1 / 0, -1 / 0]);
        var PU = {};
        return EU.reduce((function(UU, RU) {
          for (var gU = 0, tU = RU.length; gU < tU; gU++) PU[RU[gU]] || (PU[RU[gU]] = !0, UU.push(RU[gU]));
          return UU
        }), [])
      },
      HP = function(UU, RU) {
        return "horizontal" === UU && "xAxis" === RU || "vertical" === UU && "yAxis" === RU || "centric" === UU && "angleAxis" === RU || "radial" === UU && "radiusAxis" === RU
      },
      SP = function(UU, RU, gU, tU) {
        if (tU) return UU.map((function(UU) {
          return UU.coordinate
        }));
        var pU, EU, PU = UU.map((function(UU) {
          return UU.coordinate === RU && (pU = !0), UU.coordinate === gU && (EU = !0), UU.coordinate
        }));
        return pU || PU.push(RU), EU || PU.push(gU), PU
      },
      sP = function(UU, RU, gU) {
        if (!UU) return null;
        var tU = UU.scale,
          pU = UU.duplicateDomain,
          EU = UU.type,
          PU = UU.range,
          TU = "scaleBand" === UU.realScaleType ? tU.bandwidth() / 2 : 2,
          qU = (RU || gU) && "category" === EU && tU.bandwidth ? tU.bandwidth() / TU : 0;
        return qU = "angleAxis" === UU.axisType && (null === PU || void 0 === PU ? void 0 : PU.length) >= 2 ? 2 * (0, WP.y)(PU[0] - PU[1]) * qU : qU, RU && (UU.ticks || UU.niceTicks) ? (UU.ticks || UU.niceTicks).map((function(UU) {
          var RU = pU ? pU.indexOf(UU) : UU;
          return {
            coordinate: tU(RU) + qU,
            value: UU,
            offset: qU
          }
        })).filter((function(UU) {
          return !dE()(UU.coordinate)
        })) : UU.isCategorical && UU.categoricalDomain ? UU.categoricalDomain.map((function(UU, RU) {
          return {
            coordinate: tU(UU) + qU,
            value: UU,
            index: RU,
            offset: qU
          }
        })) : tU.ticks && !gU ? tU.ticks(UU.tickCount).map((function(UU) {
          return {
            coordinate: tU(UU) + qU,
            value: UU,
            offset: qU
          }
        })) : tU.domain().map((function(UU, RU) {
          return {
            coordinate: tU(UU) + qU,
            value: pU ? pU[UU] : UU,
            index: RU,
            offset: qU
          }
        }))
      },
      yP = new WeakMap,
      kP = function(UU, RU) {
        if ("function" !== typeof RU) return UU;
        yP.has(UU) || yP.set(UU, new WeakMap);
        var gU = yP.get(UU);
        if (gU.has(RU)) return gU.get(RU);
        var tU = function() {
          UU.apply(void 0, arguments), RU.apply(void 0, arguments)
        };
        return gU.set(RU, tU), tU
      },
      FP = function(UU, RU, gU) {
        var EU = UU.scale,
          PU = UU.type,
          TU = UU.layout,
          qU = UU.axisType;
        if ("auto" === EU) return "radial" === TU && "radiusAxis" === qU ? {
          scale: pU.c(),
          realScaleType: "band"
        } : "radial" === TU && "angleAxis" === qU ? {
          scale: MR(),
          realScaleType: "linear"
        } : "category" === PU && RU && (RU.indexOf("LineChart") >= 0 || RU.indexOf("AreaChart") >= 0 || RU.indexOf("ComposedChart") >= 0 && !gU) ? {
          scale: pU.e(),
          realScaleType: "point"
        } : "category" === PU ? {
          scale: pU.c(),
          realScaleType: "band"
        } : {
          scale: MR(),
          realScaleType: "linear"
        };
        if (YE()(EU)) {
          var KU = "scale".concat(SE()(EU));
          return {
            scale: (tU[KU] || pU.e)(),
            realScaleType: tU[KU] ? KU : "point"
          }
        }
        return ZE()(EU) ? {
          scale: EU
        } : {
          scale: pU.e(),
          realScaleType: "point"
        }
      },
      iP = 1e-4,
      AP = function(UU) {
        var RU = UU.domain();
        if (RU && !(RU.length <= 2)) {
          var gU = RU.length,
            tU = UU.range(),
            pU = Math.min(tU[0], tU[1]) - iP,
            EU = Math.max(tU[0], tU[1]) + iP,
            PU = UU(RU[0]),
            TU = UU(RU[gU - 1]);
          (PU < pU || PU > EU || TU < pU || TU > EU) && UU.domain([RU[0], RU[gU - 1]])
        }
      },
      zP = function(UU, RU) {
        if (!UU) return null;
        for (var gU = 0, tU = UU.length; gU < tU; gU++)
          if (UU[gU].item === RU) return UU[gU].position;
        return null
      },
      MP = function(UU, RU) {
        if (!RU || 2 !== RU.length || !(0, WP.v)(RU[0]) || !(0, WP.v)(RU[1])) return UU;
        var gU = Math.min(RU[0], RU[1]),
          tU = Math.max(RU[0], RU[1]),
          pU = [UU[0], UU[1]];
        return (!(0, WP.v)(UU[0]) || UU[0] < gU) && (pU[0] = gU), (!(0, WP.v)(UU[1]) || UU[1] > tU) && (pU[1] = tU), pU[0] > tU && (pU[0] = tU), pU[1] < gU && (pU[1] = gU), pU
      },
      DP = {
        sign: function(UU) {
          var RU = UU.length;
          if (!(RU <= 0))
            for (var gU = 0, tU = UU[0].length; gU < tU; ++gU)
              for (var pU = 0, EU = 0, PU = 0; PU < RU; ++PU) {
                var TU = dE()(UU[PU][gU][1]) ? UU[PU][gU][0] : UU[PU][gU][1];
                TU >= 0 ? (UU[PU][gU][0] = pU, UU[PU][gU][1] = pU + TU, pU = UU[PU][gU][1]) : (UU[PU][gU][0] = EU, UU[PU][gU][1] = EU + TU, EU = UU[PU][gU][1])
              }
        },
        expand: function(UU, RU) {
          if ((tU = UU.length) > 0) {
            for (var gU, tU, pU, EU = 0, PU = UU[0].length; EU < PU; ++EU) {
              for (pU = gU = 0; gU < tU; ++gU) pU += UU[gU][EU][1] || 0;
              if (pU)
                for (gU = 0; gU < tU; ++gU) UU[gU][EU][1] /= pU
            }
            hE(UU, RU)
          }
        },
        none: hE,
        silhouette: function(UU, RU) {
          if ((gU = UU.length) > 0) {
            for (var gU, tU = 0, pU = UU[RU[0]], EU = pU.length; tU < EU; ++tU) {
              for (var PU = 0, TU = 0; PU < gU; ++PU) TU += UU[PU][tU][1] || 0;
              pU[tU][1] += pU[tU][0] = -TU / 2
            }
            hE(UU, RU)
          }
        },
        wiggle: function(UU, RU) {
          if ((pU = UU.length) > 0 && (tU = (gU = UU[RU[0]]).length) > 0) {
            for (var gU, tU, pU, EU = 0, PU = 1; PU < tU; ++PU) {
              for (var TU = 0, qU = 0, KU = 0; TU < pU; ++TU) {
                for (var cU = UU[RU[TU]], GU = cU[PU][1] || 0, jU = (GU - (cU[PU - 1][1] || 0)) / 2, uU = 0; uU < TU; ++uU) {
                  var CU = UU[RU[uU]];
                  jU += (CU[PU][1] || 0) - (CU[PU - 1][1] || 0)
                }
                qU += GU, KU += jU * GU
              }
              gU[PU - 1][1] += gU[PU - 1][0] = EU, qU && (EU -= KU / qU)
            }
            gU[PU - 1][1] += gU[PU - 1][0] = EU, hE(UU, RU)
          }
        },
        positive: function(UU) {
          var RU = UU.length;
          if (!(RU <= 0))
            for (var gU = 0, tU = UU[0].length; gU < tU; ++gU)
              for (var pU = 0, EU = 0; EU < RU; ++EU) {
                var PU = dE()(UU[EU][gU][1]) ? UU[EU][gU][0] : UU[EU][gU][1];
                PU >= 0 ? (UU[EU][gU][0] = pU, UU[EU][gU][1] = pU + PU, pU = UU[EU][gU][1]) : (UU[EU][gU][0] = 0, UU[EU][gU][1] = 0)
              }
        }
      },
      LP = function(UU, RU, gU) {
        var tU = RU.map((function(UU) {
            return UU.props.dataKey
          })),
          pU = DP[gU],
          EU = function() {
            var UU = (0, eE.d)([]),
              RU = WE,
              gU = hE,
              tU = fE;

            function pU(pU) {
              var EU, PU, TU = Array.from(UU.apply(this, arguments), xE),
                qU = TU.length,
                KU = -1;
              for (const UU of pU)
                for (EU = 0, ++KU; EU < qU; ++EU)(TU[EU][KU] = [0, +tU(UU, TU[EU].key, KU, pU)]).data = UU;
              for (EU = 0, PU = (0, QE.e)(RU(TU)); EU < qU; ++EU) TU[PU[EU]].index = EU;
              return gU(TU, PU), TU
            }
            return pU.keys = function(RU) {
              return arguments.length ? (UU = "function" === typeof RU ? RU : (0, eE.d)(Array.from(RU)), pU) : UU
            }, pU.value = function(UU) {
              return arguments.length ? (tU = "function" === typeof UU ? UU : (0, eE.d)(+UU), pU) : tU
            }, pU.order = function(UU) {
              return arguments.length ? (RU = null == UU ? WE : "function" === typeof UU ? UU : (0, eE.d)(Array.from(UU)), pU) : RU
            }, pU.offset = function(UU) {
              return arguments.length ? (gU = null == UU ? hE : UU, pU) : gU
            }, pU
          }().keys(tU).value((function(UU, RU) {
            return +oP(UU, RU, 0)
          })).order(WE).offset(pU);
        return EU(UU)
      },
      NP = function(UU, RU, gU, tU, pU, EU) {
        if (!UU) return null;
        var PU = (EU ? RU.reverse() : RU).reduce((function(UU, RU) {
          var pU, EU = null !== (pU = RU.type) && void 0 !== pU && pU.defaultProps ? nP(nP({}, RU.type.defaultProps), RU.props) : RU.props,
            PU = EU.stackId;
          if (EU.hide) return UU;
          var TU = EU[gU],
            qU = UU[TU] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, WP.r)(PU)) {
            var KU = qU.stackGroups[PU] || {
              numericAxisId: gU,
              cateAxisId: tU,
              items: []
            };
            KU.items.push(RU), qU.hasStack = !0, qU.stackGroups[PU] = KU
          } else qU.stackGroups[(0, WP.C)("_stackId_")] = {
            numericAxisId: gU,
            cateAxisId: tU,
            items: [RU]
          };
          return nP(nP({}, UU), {}, bP({}, TU, qU))
        }), {});
        return Object.keys(PU).reduce((function(RU, EU) {
          var TU = PU[EU];
          if (TU.hasStack) {
            TU.stackGroups = Object.keys(TU.stackGroups).reduce((function(RU, EU) {
              var PU = TU.stackGroups[EU];
              return nP(nP({}, RU), {}, bP({}, EU, {
                numericAxisId: gU,
                cateAxisId: tU,
                items: PU.items,
                stackedData: LP(UU, PU.items, pU)
              }))
            }), {})
          }
          return nP(nP({}, RU), {}, bP({}, EU, TU))
        }), {})
      },
      lP = function(UU, RU) {
        var gU = RU.realScaleType,
          tU = RU.type,
          pU = RU.tickCount,
          EU = RU.originalDomain,
          PU = RU.allowDecimals,
          TU = gU || RU.scale;
        if ("auto" !== TU && "linear" !== TU) return null;
        if (pU && "number" === tU && EU && ("auto" === EU[0] || "auto" === EU[1])) {
          var qU = UU.domain();
          if (!qU.length) return null;
          var KU = hP(qU, pU, PU);
          return UU.domain([wE()(KU), IE()(KU)]), {
            niceTicks: KU
          }
        }
        if (pU && "number" === tU) {
          var cU = UU.domain();
          return {
            niceTicks: QP(cU, pU, PU)
          }
        }
        return null
      };

    function OP(UU) {
      var RU = UU.axis,
        gU = UU.ticks,
        tU = UU.bandSize,
        pU = UU.entry,
        EU = UU.index,
        PU = UU.dataKey;
      if ("category" === RU.type) {
        if (!RU.allowDuplicatedCategory && RU.dataKey && !bE()(pU[RU.dataKey])) {
          var TU = (0, WP.d)(gU, "value", pU[RU.dataKey]);
          if (TU) return TU.coordinate + tU / 2
        }
        return gU[EU] ? gU[EU].coordinate + tU / 2 : null
      }
      var qU = oP(pU, bE()(PU) ? RU.dataKey : PU);
      return bE()(qU) ? null : RU.scale(qU)
    }
    var UT = function(UU) {
        var RU = UU.axis,
          gU = UU.ticks,
          tU = UU.offset,
          pU = UU.bandSize,
          EU = UU.entry,
          PU = UU.index;
        if ("category" === RU.type) return gU[PU] ? gU[PU].coordinate + tU : null;
        var TU = oP(EU, RU.dataKey, RU.domain[PU]);
        return bE()(TU) ? null : RU.scale(TU) - pU / 2 + tU
      },
      RT = function(UU) {
        var RU = UU.numericAxis,
          gU = RU.scale.domain();
        if ("number" === RU.type) {
          var tU = Math.min(gU[0], gU[1]),
            pU = Math.max(gU[0], gU[1]);
          return tU <= 0 && pU >= 0 ? 0 : pU < 0 ? pU : tU
        }
        return gU[0]
      },
      gT = function(UU, RU) {
        var gU, tU = (null !== (gU = UU.type) && void 0 !== gU && gU.defaultProps ? nP(nP({}, UU.type.defaultProps), UU.props) : UU.props).stackId;
        if ((0, WP.r)(tU)) {
          var pU = RU[tU];
          if (pU) {
            var EU = pU.items.indexOf(UU);
            return EU >= 0 ? pU.stackedData[EU] : null
          }
        }
        return null
      },
      tT = function(UU, RU, gU) {
        return Object.keys(UU).reduce((function(tU, pU) {
          var EU = UU[pU].stackedData.reduce((function(UU, tU) {
            var pU = tU.slice(RU, gU + 1).reduce((function(UU, RU) {
              return [wE()(RU.concat([UU[0]]).filter(WP.v)), IE()(RU.concat([UU[1]]).filter(WP.v))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(UU[0], pU[0]), Math.max(UU[1], pU[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(EU[0], tU[0]), Math.max(EU[1], tU[1])]
        }), [1 / 0, -1 / 0]).map((function(UU) {
          return UU === 1 / 0 || UU === -1 / 0 ? 0 : UU
        }))
      },
      pT = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      ET = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      PT = function(UU, RU, gU) {
        if (ZE()(UU)) return UU(RU, gU);
        if (!Array.isArray(UU)) return RU;
        var tU = [];
        if ((0, WP.v)(UU[0])) tU[0] = gU ? UU[0] : Math.min(UU[0], RU[0]);
        else if (pT.test(UU[0])) {
          var pU = +pT.exec(UU[0])[1];
          tU[0] = RU[0] - pU
        } else ZE()(UU[0]) ? tU[0] = UU[0](RU[0]) : tU[0] = RU[0];
        if ((0, WP.v)(UU[1])) tU[1] = gU ? UU[1] : Math.max(UU[1], RU[1]);
        else if (ET.test(UU[1])) {
          var EU = +ET.exec(UU[1])[1];
          tU[1] = RU[1] + EU
        } else ZE()(UU[1]) ? tU[1] = UU[1](RU[1]) : tU[1] = RU[1];
        return tU
      },
      TT = function(UU, RU, gU) {
        if (UU && UU.scale && UU.scale.bandwidth) {
          var tU = UU.scale.bandwidth();
          if (!gU || tU > 0) return tU
        }
        if (UU && RU && RU.length >= 2) {
          for (var pU = FE()(RU, (function(UU) {
              return UU.coordinate
            })), EU = 1 / 0, PU = 1, TU = pU.length; PU < TU; PU++) {
            var qU = pU[PU],
              KU = pU[PU - 1];
            EU = Math.min((qU.coordinate || 0) - (KU.coordinate || 0), EU)
          }
          return EU === 1 / 0 ? 0 : EU
        }
        return gU ? void 0 : 0
      },
      qT = function(UU, RU, gU) {
        return UU && UU.length ? yE()(UU, VE()(gU, "type.defaultProps.domain")) ? RU : UU : RU
      },
      KT = function(UU, RU) {
        var gU = UU.type.defaultProps ? nP(nP({}, UU.type.defaultProps), UU.props) : UU.props,
          tU = gU.dataKey,
          pU = gU.name,
          EU = gU.unit,
          PU = gU.formatter,
          TU = gU.tooltipType,
          qU = gU.chartType,
          KU = gU.hide;
        return nP(nP({}, (0, fP.b)(UU, !1)), {}, {
          dataKey: tU,
          unit: EU,
          formatter: PU,
          name: pU || tU,
          color: YP(UU),
          value: oP(RU, tU),
          type: TU,
          payload: RU,
          chartType: qU,
          hide: KU
        })
      }
  },
  5811: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => jU,
      f: () => GU
    });
    var tU = gU(5647);

    function pU(UU) {
      return pU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, pU(UU)
    }

    function EU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function PU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? EU(Object(gU), !0).forEach((function(RU) {
          TU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : EU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function TU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != pU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != pU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == pU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }
    var qU = {
        widthCache: {},
        cacheCount: 0
      },
      KU = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      cU = "recharts_measurement_span";
    var GU = function(UU) {
        var RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === UU || null === UU || tU.b.isSsr) return {
          width: 0,
          height: 0
        };
        var gU = function(UU) {
            var RU = PU({}, UU);
            return Object.keys(RU).forEach((function(UU) {
              RU[UU] || delete RU[UU]
            })), RU
          }(RU),
          pU = JSON.stringify({
            text: UU,
            copyStyle: gU
          });
        if (qU.widthCache[pU]) return qU.widthCache[pU];
        try {
          var EU = document.getElementById(cU);
          EU || ((EU = document.createElement("span")).setAttribute("id", cU), EU.setAttribute("aria-hidden", "true"), document.body.appendChild(EU));
          var TU = PU(PU({}, KU), gU);
          Object.assign(EU.style, TU), EU.textContent = "".concat(UU);
          var GU = EU.getBoundingClientRect(),
            jU = {
              width: GU.width,
              height: GU.height
            };
          return qU.widthCache[pU] = jU, ++qU.cacheCount > 2e3 && (qU.cacheCount = 0, qU.widthCache = {}), jU
        } catch (uU) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      jU = function(UU) {
        return {
          top: UU.top + window.scrollY - document.documentElement.clientTop,
          left: UU.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  4827: (UU, RU, gU) => {
    gU.d(RU, {
      C: () => fU,
      c: () => bU,
      d: () => wU,
      e: () => mU,
      h: () => nU,
      k: () => xU,
      n: () => IU,
      p: () => JU,
      q: () => QU,
      r: () => eU,
      v: () => hU,
      w: () => CU,
      y: () => uU
    });
    var tU = gU(4835),
      pU = gU.n(tU),
      EU = gU(4840),
      PU = gU.n(EU),
      TU = gU(4846),
      qU = gU.n(TU),
      KU = gU(4843),
      cU = gU.n(KU),
      GU = gU(5087),
      jU = gU.n(GU),
      uU = function(UU) {
        return 0 === UU ? 0 : UU > 0 ? 1 : -1
      },
      CU = function(UU) {
        return pU()(UU) && UU.indexOf("%") === UU.length - 1
      },
      hU = function(UU) {
        return cU()(UU) && !PU()(UU)
      },
      QU = function(UU) {
        return jU()(UU)
      },
      eU = function(UU) {
        return hU(UU) || pU()(UU)
      },
      WU = 0,
      fU = function(UU) {
        var RU = ++WU;
        return "".concat(UU || "").concat(RU)
      },
      xU = function(UU, RU) {
        var gU, tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          EU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!hU(UU) && !pU()(UU)) return tU;
        if (CU(UU)) {
          var TU = UU.indexOf("%");
          gU = RU * parseFloat(UU.slice(0, TU)) / 100
        } else gU = +UU;
        return PU()(gU) && (gU = tU), EU && gU > RU && (gU = RU), gU
      },
      mU = function(UU) {
        if (!UU) return null;
        var RU = Object.keys(UU);
        return RU && RU.length ? UU[RU[0]] : null
      },
      IU = function(UU) {
        if (!Array.isArray(UU)) return !1;
        for (var RU = UU.length, gU = {}, tU = 0; tU < RU; tU++) {
          if (gU[UU[tU]]) return !0;
          gU[UU[tU]] = !0
        }
        return !1
      },
      JU = function(UU, RU) {
        return hU(UU) && hU(RU) ? function(gU) {
          return UU + gU * (RU - UU)
        } : function() {
          return RU
        }
      };

    function wU(UU, RU, gU) {
      return UU && UU.length ? UU.find((function(UU) {
        return UU && ("function" === typeof RU ? RU(UU) : qU()(UU, RU)) === gU
      })) : null
    }
    var nU = function(UU) {
        if (!UU || !UU.length) return null;
        for (var RU = UU.length, gU = 0, tU = 0, pU = 0, EU = 0, PU = 1 / 0, TU = -1 / 0, qU = 0, KU = 0, cU = 0; cU < RU; cU++) gU += qU = UU[cU].cx || 0, tU += KU = UU[cU].cy || 0, pU += qU * KU, EU += qU * qU, PU = Math.min(PU, qU), TU = Math.max(TU, qU);
        var GU = RU * EU !== gU * gU ? (RU * pU - gU * tU) / (RU * EU - gU * gU) : 0;
        return {
          xmin: PU,
          xmax: TU,
          a: GU,
          b: (tU - GU * gU) / RU
        }
      },
      bU = function(UU, RU) {
        return hU(UU) && hU(RU) ? UU - RU : pU()(UU) && pU()(RU) ? UU.localeCompare(RU) : UU instanceof Date && RU instanceof Date ? UU.getTime() - RU.getTime() : String(UU).localeCompare(String(RU))
      }
  },
  5647: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    var tU = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(UU) {
        return tU[UU]
      },
      set: function(UU, RU) {
        if ("string" === typeof UU) tU[UU] = RU;
        else {
          var gU = Object.keys(UU);
          gU && gU.length && gU.forEach((function(RU) {
            tU[RU] = UU[RU]
          }))
        }
      }
    }
  },
  5909: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    var tU = function(UU, RU) {
      var gU = UU.alwaysShow,
        tU = UU.ifOverflow;
      return gU && (tU = "extendDomain"), tU === RU
    }
  },
  5093: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    var tU = function(UU, RU) {
      for (var gU = arguments.length, tU = new Array(gU > 2 ? gU - 2 : 0), pU = 2; pU < gU; pU++) tU[pU - 2] = arguments[pU]
    }
  },
  5904: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => TU,
      e: () => jU,
      f: () => KU
    });
    gU(5087), gU(56), gU(4921);

    function tU(UU) {
      return tU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, tU(UU)
    }

    function pU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function EU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? pU(Object(gU), !0).forEach((function(RU) {
          PU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : pU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function PU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != tU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var pU = gU.call(UU, RU || "default");
            if ("object" != tU(pU)) return pU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == tU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }
    var TU = Math.PI / 180,
      qU = function(UU) {
        return 180 * UU / Math.PI
      },
      KU = function(UU, RU, gU, tU) {
        return {
          x: UU + Math.cos(-TU * tU) * gU,
          y: RU + Math.sin(-TU * tU) * gU
        }
      },
      cU = function(UU, RU) {
        var gU = UU.x,
          tU = UU.y,
          pU = RU.cx,
          EU = RU.cy,
          PU = function(UU, RU) {
            var gU = UU.x,
              tU = UU.y,
              pU = RU.x,
              EU = RU.y;
            return Math.sqrt(Math.pow(gU - pU, 2) + Math.pow(tU - EU, 2))
          }({
            x: gU,
            y: tU
          }, {
            x: pU,
            y: EU
          });
        if (PU <= 0) return {
          radius: PU
        };
        var TU = (gU - pU) / PU,
          KU = Math.acos(TU);
        return tU > EU && (KU = 2 * Math.PI - KU), {
          radius: PU,
          angle: qU(KU),
          angleInRadian: KU
        }
      },
      GU = function(UU, RU) {
        var gU = RU.startAngle,
          tU = RU.endAngle,
          pU = Math.floor(gU / 360),
          EU = Math.floor(tU / 360);
        return UU + 360 * Math.min(pU, EU)
      },
      jU = function(UU, RU) {
        var gU = UU.x,
          tU = UU.y,
          pU = cU({
            x: gU,
            y: tU
          }, RU),
          PU = pU.radius,
          TU = pU.angle,
          qU = RU.innerRadius,
          KU = RU.outerRadius;
        if (PU < qU || PU > KU) return !1;
        if (0 === PU) return !0;
        var jU, uU = function(UU) {
            var RU = UU.startAngle,
              gU = UU.endAngle,
              tU = Math.floor(RU / 360),
              pU = Math.floor(gU / 360),
              EU = Math.min(tU, pU);
            return {
              startAngle: RU - 360 * EU,
              endAngle: gU - 360 * EU
            }
          }(RU),
          CU = uU.startAngle,
          hU = uU.endAngle,
          QU = TU;
        if (CU <= hU) {
          for (; QU > hU;) QU -= 360;
          for (; QU < CU;) QU += 360;
          jU = QU >= CU && QU <= hU
        } else {
          for (; QU > CU;) QU -= 360;
          for (; QU < hU;) QU += 360;
          jU = QU >= hU && QU <= CU
        }
        return jU ? EU(EU({}, RU), {}, {
          radius: PU,
          angle: GU(QU, RU)
        }) : null
      }
  },
  5097: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => rU,
      f: () => oU,
      g: () => ZU,
      i: () => JU,
      j: () => HU,
      m: () => VU,
      q: () => XU,
      s: () => SU,
      t: () => dU,
      w: () => aU
    });
    var tU = gU(4846),
      pU = gU.n(tU),
      EU = gU(5087),
      PU = gU.n(EU),
      TU = gU(4835),
      qU = gU.n(TU),
      KU = gU(4921),
      cU = gU.n(KU),
      GU = gU(4750),
      jU = gU.n(GU),
      uU = gU(56),
      CU = gU(5106),
      hU = gU(4827),
      QU = gU(5121),
      eU = gU(5125),
      WU = ["children"],
      fU = ["children"];

    function xU(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU = {};
        for (var tU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, tU)) {
            if (RU.indexOf(tU) >= 0) continue;
            gU[tU] = UU[tU]
          } return gU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }

    function mU(UU) {
      return mU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, mU(UU)
    }
    var IU = {
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
      JU = function(UU) {
        return "string" === typeof UU ? UU : UU ? UU.displayName || UU.name || "Component" : ""
      },
      wU = null,
      nU = null,
      bU = function UU(RU) {
        if (RU === wU && Array.isArray(nU)) return nU;
        var gU = [];
        return uU.Children.forEach(RU, (function(RU) {
          PU()(RU) || ((0, CU.isFragment)(RU) ? gU = gU.concat(UU(RU.props.children)) : gU.push(RU))
        })), nU = gU, wU = RU, gU
      };

    function oU(UU, RU) {
      var gU = [],
        tU = [];
      return tU = Array.isArray(RU) ? RU.map((function(UU) {
        return JU(UU)
      })) : [JU(RU)], bU(UU).forEach((function(UU) {
        var RU = pU()(UU, "type.displayName") || pU()(UU, "type.name"); - 1 !== tU.indexOf(RU) && gU.push(UU)
      })), gU
    }

    function ZU(UU, RU) {
      var gU = oU(UU, RU);
      return gU && gU[0]
    }
    var aU = function(UU) {
        if (!UU || !UU.props) return !1;
        var RU = UU.props,
          gU = RU.width,
          tU = RU.height;
        return !(!(0, hU.v)(gU) || gU <= 0 || !(0, hU.v)(tU) || tU <= 0)
      },
      YU = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      BU = function(UU) {
        return UU && UU.type && qU()(UU.type) && YU.indexOf(UU.type) >= 0
      },
      VU = function(UU) {
        return UU && "object" === mU(UU) && "clipDot" in UU
      },
      rU = function(UU, RU, gU) {
        if (!UU || "function" === typeof UU || "boolean" === typeof UU) return null;
        var tU = UU;
        if ((0, uU.isValidElement)(UU) && (tU = UU.props), !jU()(tU)) return null;
        var pU = {};
        return Object.keys(tU).forEach((function(UU) {
          var EU;
          (function(UU, RU, gU, tU) {
            var pU, EU = null !== (pU = null === eU.g || void 0 === eU.g ? void 0 : eU.g[tU]) && void 0 !== pU ? pU : [];
            return RU.startsWith("data-") || !cU()(UU) && (tU && EU.includes(RU) || eU.k.includes(RU)) || gU && eU.c.includes(RU)
          })(null === (EU = tU) || void 0 === EU ? void 0 : EU[UU], UU, RU, gU) && (pU[UU] = tU[UU])
        })), pU
      },
      XU = function UU(RU, gU) {
        if (RU === gU) return !0;
        var tU = uU.Children.count(RU);
        if (tU !== uU.Children.count(gU)) return !1;
        if (0 === tU) return !0;
        if (1 === tU) return vU(Array.isArray(RU) ? RU[0] : RU, Array.isArray(gU) ? gU[0] : gU);
        for (var pU = 0; pU < tU; pU++) {
          var EU = RU[pU],
            PU = gU[pU];
          if (Array.isArray(EU) || Array.isArray(PU)) {
            if (!UU(EU, PU)) return !1
          } else if (!vU(EU, PU)) return !1
        }
        return !0
      },
      vU = function(UU, RU) {
        if (PU()(UU) && PU()(RU)) return !0;
        if (!PU()(UU) && !PU()(RU)) {
          var gU = UU.props || {},
            tU = gU.children,
            pU = xU(gU, WU),
            EU = RU.props || {},
            TU = EU.children,
            qU = xU(EU, fU);
          return tU && TU ? (0, QU.c)(pU, qU) && XU(tU, TU) : !tU && !TU && (0, QU.c)(pU, qU)
        }
        return !1
      },
      dU = function(UU, RU) {
        var gU = [],
          tU = {};
        return bU(UU).forEach((function(UU, pU) {
          if (BU(UU)) gU.push(UU);
          else if (UU) {
            var EU = JU(UU.type),
              PU = RU[EU] || {},
              TU = PU.handler,
              qU = PU.once;
            if (TU && (!qU || !tU[EU])) {
              var KU = TU(UU, EU, pU);
              gU.push(KU), tU[EU] = !0
            }
          }
        })), gU
      },
      HU = function(UU) {
        var RU = UU && UU.type;
        return RU && IU[RU] ? IU[RU] : null
      },
      SU = function(UU, RU) {
        return bU(RU).indexOf(UU)
      }
  },
  5121: (UU, RU, gU) => {
    function tU(UU, RU) {
      for (var gU in UU)
        if ({}.hasOwnProperty.call(UU, gU) && (!{}.hasOwnProperty.call(RU, gU) || UU[gU] !== RU[gU])) return !1;
      for (var tU in RU)
        if ({}.hasOwnProperty.call(RU, tU) && !{}.hasOwnProperty.call(UU, tU)) return !1;
      return !0
    }
    gU.d(RU, {
      c: () => tU
    })
  },
  5887: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => cU
    });
    var tU = gU(5720),
      pU = gU(5817),
      EU = gU(5097);

    function PU(UU) {
      return PU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, PU(UU)
    }

    function TU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function qU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? TU(Object(gU), !0).forEach((function(RU) {
          KU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : TU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function KU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != PU(UU) || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != PU(tU)) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == PU(RU) ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }
    var cU = function(UU) {
      var RU = UU.children,
        gU = UU.formattedGraphicalItems,
        PU = UU.legendWidth,
        TU = UU.legendContent,
        KU = (0, EU.g)(RU, tU.b);
      if (!KU) return null;
      var cU, GU = tU.b.defaultProps,
        jU = void 0 !== GU ? qU(qU({}, GU), KU.props) : {};
      return cU = KU.props && KU.props.payload ? KU.props && KU.props.payload : "children" === TU ? (gU || []).reduce((function(UU, RU) {
        var gU = RU.item,
          tU = RU.props,
          pU = tU.sectors || tU.data || [];
        return UU.concat(pU.map((function(UU) {
          return {
            type: KU.props.iconType || gU.props.legendType,
            value: UU.name,
            color: UU.fill,
            payload: UU
          }
        })))
      }), []) : (gU || []).map((function(UU) {
        var RU = UU.item,
          gU = RU.type.defaultProps,
          tU = void 0 !== gU ? qU(qU({}, gU), RU.props) : {},
          EU = tU.dataKey,
          PU = tU.name,
          TU = tU.legendType;
        return {
          inactive: tU.hide,
          dataKey: EU,
          type: jU.iconType || TU || "square",
          color: (0, pU.M)(RU),
          value: PU || EU,
          payload: tU
        }
      })), qU(qU(qU({}, jU), tU.b.getWithHeight(KU, PU)), {}, {
        payload: cU,
        item: KU
      })
    }
  },
  5656: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU
    });
    var tU = gU(5665),
      pU = gU.n(tU),
      EU = gU(4921),
      PU = gU.n(EU);

    function TU(UU, RU, gU) {
      return !0 === RU ? pU()(UU, gU) : PU()(RU) ? pU()(UU, RU) : UU
    }
  },
  5125: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => cU,
      g: () => KU,
      k: () => TU,
      o: () => GU,
      p: () => jU
    });
    var tU = gU(56),
      pU = gU(4750),
      EU = gU.n(pU);

    function PU(UU) {
      return PU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, PU(UU)
    }
    var TU = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "pu", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      qU = ["points", "pathLength"],
      KU = {
        svg: ["viewBox", "children"],
        polygon: qU,
        polyline: qU
      },
      cU = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      GU = function(UU, RU) {
        if (!UU || "function" === typeof UU || "boolean" === typeof UU) return null;
        var gU = UU;
        if ((0, tU.isValidElement)(UU) && (gU = UU.props), !EU()(gU)) return null;
        var pU = {};
        return Object.keys(gU).forEach((function(UU) {
          cU.includes(UU) && (pU[UU] = RU || function(RU) {
            return gU[UU](gU, RU)
          })
        })), pU
      },
      jU = function(UU, RU, gU) {
        if (!EU()(UU) || "object" !== PU(UU)) return null;
        var tU = null;
        return Object.keys(UU).forEach((function(pU) {
          var EU = UU[pU];
          cU.includes(pU) && "function" === typeof EU && (tU || (tU = {}), tU[pU] = function(UU, RU, gU) {
            return function(tU) {
              return UU(RU, gU, tU), null
            }
          }(EU, RU, gU))
        })), tU
      }
  },
  5112: (UU, RU) => {
    var gU, tU = Symbol.for("react.element"),
      pU = Symbol.for("react.portal"),
      EU = Symbol.for("react.fragment"),
      PU = Symbol.for("react.strict_mode"),
      TU = Symbol.for("react.profiler"),
      qU = Symbol.for("react.provider"),
      KU = Symbol.for("react.context"),
      cU = Symbol.for("react.server_context"),
      GU = Symbol.for("react.forward_ref"),
      jU = Symbol.for("react.suspense"),
      uU = Symbol.for("react.suspense_list"),
      CU = Symbol.for("react.memo"),
      hU = Symbol.for("react.lazy"),
      QU = Symbol.for("react.offscreen");

    function eU(UU) {
      if ("object" === typeof UU && null !== UU) {
        var RU = UU.$$typeof;
        switch (RU) {
          case tU:
            switch (UU = UU.type) {
              case EU:
              case TU:
              case PU:
              case jU:
              case uU:
                return UU;
              default:
                switch (UU = UU && UU.$$typeof) {
                  case cU:
                  case KU:
                  case GU:
                  case hU:
                  case CU:
                  case qU:
                    return UU;
                  default:
                    return RU
                }
            }
          case pU:
            return RU
        }
      }
    }
    gU = Symbol.for("react.module.reference"), RU.isFragment = function(UU) {
      return eU(UU) === EU
    }
  },
  5106: (UU, RU, gU) => {
    UU.exports = gU(5112)
  },
  4733: (UU, RU, gU) => {
    function tU(UU) {
      var RU, gU, pU = "";
      if ("string" == typeof UU || "number" == typeof UU) pU += UU;
      else if ("object" == typeof UU)
        if (Array.isArray(UU)) {
          var EU = UU.length;
          for (RU = 0; RU < EU; RU++) UU[RU] && (gU = tU(UU[RU])) && (pU && (pU += " "), pU += gU)
        } else
          for (gU in UU) UU[gU] && (pU && (pU += " "), pU += gU);
      return pU
    }
    gU.d(RU, {
      e: () => pU
    });
    const pU = function() {
      for (var UU, RU, gU = 0, pU = "", EU = arguments.length; gU < EU; gU++)(UU = arguments[gU]) && (RU = tU(UU)) && (pU && (pU += " "), pU += RU);
      return pU
    }
  },
  5824: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      e: () => TU
    });
    var tU = gU(5826),
      pU = gU(5835);

    function EU() {
      var UU, RU, gU = (0, pU.b)().unknown(void 0),
        PU = gU.domain,
        TU = gU.range,
        qU = 0,
        KU = 1,
        cU = !1,
        GU = 0,
        jU = 0,
        uU = .5;

      function CU() {
        var gU = PU().length,
          tU = KU < qU,
          pU = tU ? KU : qU,
          EU = tU ? qU : KU;
        UU = (EU - pU) / Math.max(1, gU - GU + 2 * jU), cU && (UU = Math.floor(UU)), pU += (EU - pU - UU * (gU - GU)) * uU, RU = UU * (1 - GU), cU && (pU = Math.round(pU), RU = Math.round(RU));
        var CU = function(UU, RU, gU) {
          UU = +UU, RU = +RU, gU = (pU = arguments.length) < 2 ? (RU = UU, UU = 0, 1) : pU < 3 ? 1 : +gU;
          for (var tU = -1, pU = 0 | Math.max(0, Math.ceil((RU - UU) / gU)), EU = new Array(pU); ++tU < pU;) EU[tU] = UU + tU * gU;
          return EU
        }(gU).map((function(RU) {
          return pU + UU * RU
        }));
        return TU(tU ? CU.reverse() : CU)
      }
      return delete gU.unknown, gU.domain = function(UU) {
        return arguments.length ? (PU(UU), CU()) : PU()
      }, gU.range = function(UU) {
        return arguments.length ? ([qU, KU] = UU, qU = +qU, KU = +KU, CU()) : [qU, KU]
      }, gU.rangeRound = function(UU) {
        return [qU, KU] = UU, qU = +qU, KU = +KU, cU = !0, CU()
      }, gU.bandwidth = function() {
        return RU
      }, gU.step = function() {
        return UU
      }, gU.round = function(UU) {
        return arguments.length ? (cU = !!UU, CU()) : cU
      }, gU.padding = function(UU) {
        return arguments.length ? (GU = Math.min(1, jU = +UU), CU()) : GU
      }, gU.paddingInner = function(UU) {
        return arguments.length ? (GU = Math.min(1, UU), CU()) : GU
      }, gU.paddingOuter = function(UU) {
        return arguments.length ? (jU = +UU, CU()) : jU
      }, gU.align = function(UU) {
        return arguments.length ? (uU = Math.max(0, Math.min(1, UU)), CU()) : uU
      }, gU.copy = function() {
        return EU(PU(), [qU, KU]).round(cU).paddingInner(GU).paddingOuter(jU).align(uU)
      }, tU.f.apply(CU(), arguments)
    }

    function PU(UU) {
      var RU = UU.copy;
      return UU.padding = UU.paddingOuter, delete UU.paddingInner, delete UU.paddingOuter, UU.copy = function() {
        return PU(RU())
      }, UU
    }

    function TU() {
      return PU(EU.apply(null, arguments).paddingInner(1))
    }
  },
  5826: (UU, RU, gU) => {
    function tU(UU, RU) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(UU);
          break;
        default:
          this.range(RU).domain(UU)
      }
      return this
    }

    function pU(UU, RU) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof UU ? this.interpolator(UU) : this.range(UU);
          break;
        default:
          this.domain(UU), "function" === typeof RU ? this.interpolator(RU) : this.range(RU)
      }
      return this
    }
    gU.d(RU, {
      c: () => pU,
      f: () => tU
    })
  },
  5835: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => cU,
      d: () => KU
    });
    class tU extends Map {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TU;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: RU
            }
          }), null != UU)
          for (const [gU, tU] of UU) this.set(gU, tU)
      }
      get(UU) {
        return super.get(pU(this, UU))
      }
      has(UU) {
        return super.has(pU(this, UU))
      }
      set(UU, RU) {
        return super.set(EU(this, UU), RU)
      }
      delete(UU) {
        return super.delete(PU(this, UU))
      }
    }
    Set;

    function pU(UU, RU) {
      let {
        _intern: gU,
        _key: tU
      } = UU;
      const pU = tU(RU);
      return gU.has(pU) ? gU.get(pU) : RU
    }

    function EU(UU, RU) {
      let {
        _intern: gU,
        _key: tU
      } = UU;
      const pU = tU(RU);
      return gU.has(pU) ? gU.get(pU) : (gU.set(pU, RU), RU)
    }

    function PU(UU, RU) {
      let {
        _intern: gU,
        _key: tU
      } = UU;
      const pU = tU(RU);
      return gU.has(pU) && (RU = gU.get(pU), gU.delete(pU)), RU
    }

    function TU(UU) {
      return null !== UU && "object" === typeof UU ? UU.valueOf() : UU
    }
    var qU = gU(5826);
    const KU = Symbol("implicit");

    function cU() {
      var UU = new tU,
        RU = [],
        gU = [],
        pU = KU;

      function EU(tU) {
        let EU = UU.get(tU);
        if (void 0 === EU) {
          if (pU !== KU) return pU;
          UU.set(tU, EU = RU.push(tU) - 1)
        }
        return gU[EU % gU.length]
      }
      return EU.domain = function(gU) {
        if (!arguments.length) return RU.slice();
        RU = [], UU = new tU;
        for (const tU of gU) UU.has(tU) || UU.set(tU, RU.push(tU) - 1);
        return EU
      }, EU.range = function(UU) {
        return arguments.length ? (gU = Array.from(UU), EU) : gU.slice()
      }, EU.unknown = function(UU) {
        return arguments.length ? (pU = UU, EU) : pU
      }, EU.copy = function() {
        return cU(RU, gU).unknown(pU)
      }, qU.f.apply(EU, arguments), EU
    }
  },
  5891: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    Array.prototype.slice;

    function tU(UU) {
      return "object" === typeof UU && "length" in UU ? UU : Array.from(UU)
    }
  },
  5780: (UU, RU, gU) => {
    function tU(UU) {
      return function() {
        return UU
      }
    }
    gU.d(RU, {
      d: () => tU
    })
  },
  5789: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => KU
    });
    const tU = Math.PI,
      pU = 2 * tU,
      EU = 1e-6,
      PU = pU - EU;

    function TU(UU) {
      this._ += UU[0];
      for (let RU = 1, gU = UU.length; RU < gU; ++RU) this._ += arguments[RU] + UU[RU]
    }
    class qU {
      constructor(UU) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == UU ? TU : function(UU) {
          let RU = Math.floor(UU);
          if (!(RU >= 0)) throw new Error(`invalid digits: ${UU}`);
          if (RU > 15) return TU;
          const gU = 10 ** RU;
          return function(UU) {
            this._ += UU[0];
            for (let RU = 1, tU = UU.length; RU < tU; ++RU) this._ += Math.round(arguments[RU] * gU) / gU + UU[RU]
          }
        }(UU)
      }
      moveTo(UU, RU) {
        this._append`M${this._x0=this._x1=+UU},${this._y0=this._y1=+RU}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(UU, RU) {
        this._append`L${this._x1=+UU},${this._y1=+RU}`
      }
      quadraticCurveTo(UU, RU, gU, tU) {
        this._append`Q${+UU},${+RU},${this._x1=+gU},${this._y1=+tU}`
      }
      bezierCurveTo(UU, RU, gU, tU, pU, EU) {
        this._append`C${+UU},${+RU},${+gU},${+tU},${this._x1=+pU},${this._y1=+EU}`
      }
      arcTo(UU, RU, gU, pU, PU) {
        if (UU = +UU, RU = +RU, gU = +gU, pU = +pU, (PU = +PU) < 0) throw new Error(`negative radius: ${PU}`);
        let TU = this._x1,
          qU = this._y1,
          KU = gU - UU,
          cU = pU - RU,
          GU = TU - UU,
          jU = qU - RU,
          uU = GU * GU + jU * jU;
        if (null === this._x1) this._append`M${this._x1=UU},${this._y1=RU}`;
        else if (uU > EU)
          if (Math.abs(jU * KU - cU * GU) > EU && PU) {
            let CU = gU - TU,
              hU = pU - qU,
              QU = KU * KU + cU * cU,
              eU = CU * CU + hU * hU,
              WU = Math.sqrt(QU),
              fU = Math.sqrt(uU),
              xU = PU * Math.tan((tU - Math.acos((QU + uU - eU) / (2 * WU * fU))) / 2),
              mU = xU / fU,
              IU = xU / WU;
            Math.abs(mU - 1) > EU && this._append`L${UU+mU*GU},${RU+mU*jU}`, this._append`A${PU},${PU},0,0,${+(jU*CU>GU*hU)},${this._x1=UU+IU*KU},${this._y1=RU+IU*cU}`
          } else this._append`L${this._x1=UU},${this._y1=RU}`;
        else;
      }
      arc(UU, RU, gU, TU, qU, KU) {
        if (UU = +UU, RU = +RU, KU = !!KU, (gU = +gU) < 0) throw new Error(`negative radius: ${gU}`);
        let cU = gU * Math.cos(TU),
          GU = gU * Math.sin(TU),
          jU = UU + cU,
          uU = RU + GU,
          CU = 1 ^ KU,
          hU = KU ? TU - qU : qU - TU;
        null === this._x1 ? this._append`M${jU},${uU}` : (Math.abs(this._x1 - jU) > EU || Math.abs(this._y1 - uU) > EU) && this._append`L${jU},${uU}`, gU && (hU < 0 && (hU = hU % pU + pU), hU > PU ? this._append`A${gU},${gU},0,1,${CU},${UU-cU},${RU-GU}A${gU},${gU},0,1,${CU},${this._x1=jU},${this._y1=uU}` : hU > EU && this._append`A${gU},${gU},0,${+(hU>=tU)},${CU},${this._x1=UU+gU*Math.cos(qU)},${this._y1=RU+gU*Math.sin(qU)}`)
      }
      rect(UU, RU, gU, tU) {
        this._append`M${this._x0=this._x1=+UU},${this._y0=this._y1=+RU}h${gU=+gU}v${+tU}h${-gU}Z`
      }
      toString() {
        return this._
      }
    }

    function KU(UU) {
      let RU = 3;
      return UU.digits = function(gU) {
        if (!arguments.length) return RU;
        if (null == gU) RU = null;
        else {
          const UU = Math.floor(gU);
          if (!(UU >= 0)) throw new RangeError(`invalid digits: ${gU}`);
          RU = UU
        }
        return UU
      }, () => new qU(RU)
    }
    qU.prototype
  },
  5622: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU
    });
    var tU = !0,
      pU = "Invariant failed";

    function EU(UU, RU) {
      if (!UU) {
        if (tU) throw new Error(pU);
        var gU = "function" === typeof RU ? RU() : RU,
          EU = gU ? "".concat(pU, ": ").concat(gU) : pU;
        throw new Error(EU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);