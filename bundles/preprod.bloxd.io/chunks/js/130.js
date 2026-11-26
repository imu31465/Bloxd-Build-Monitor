/*! For license information please see fecih8.130.5fbd2bd8.chunk.js.LICENSE.txt */
export const id = 130;
export const ids = [130];
export const modules = {
  6802: function(UU, XU, zU) {
    var cU;
    ! function() {
      var yU, QU = 1e9,
        AU = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        FU = !0,
        oU = "[DecimalError] ",
        DU = oU + "Invalid argument: ",
        EU = oU + "Exponent out of range: ",
        YU = Math.floor,
        NU = Math.pow,
        IU = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        pU = 1e7,
        aU = 9007199254740991,
        tU = YU(1286742750677284.5),
        gU = {};

      function kU(UU, XU) {
        var zU, cU, yU, QU, AU, oU, DU, EU, YU = UU.constructor,
          NU = YU.precision;
        if (!UU.s || !XU.s) return XU.s || (XU = new YU(UU)), FU ? CU(XU, NU) : XU;
        if (DU = UU.d, EU = XU.d, AU = UU.e, yU = XU.e, DU = DU.slice(), QU = AU - yU) {
          for (QU < 0 ? (cU = DU, QU = -QU, oU = EU.length) : (cU = EU, yU = AU, oU = DU.length), QU > (oU = (AU = Math.ceil(NU / 7)) > oU ? AU + 1 : oU + 1) && (QU = oU, cU.length = 1), cU.reverse(); QU--;) cU.push(0);
          cU.reverse()
        }
        for ((oU = DU.length) - (QU = EU.length) < 0 && (QU = oU, cU = EU, EU = DU, DU = cU), zU = 0; QU;) zU = (DU[--QU] = DU[QU] + EU[QU] + zU) / pU | 0, DU[QU] %= pU;
        for (zU && (DU.unshift(zU), ++yU), oU = DU.length; 0 == DU[--oU];) DU.pop();
        return XU.d = DU, XU.e = yU, FU ? CU(XU, NU) : XU
      }

      function GU(UU, XU, zU) {
        if (UU !== ~~UU || UU < XU || UU > zU) throw Error(DU + UU)
      }

      function BU(UU) {
        var XU, zU, cU, yU = UU.length - 1,
          QU = "",
          AU = UU[0];
        if (yU > 0) {
          for (QU += AU, XU = 1; XU < yU; XU++)(zU = 7 - (cU = UU[XU] + "").length) && (QU += dU(zU)), QU += cU;
          (zU = 7 - (cU = (AU = UU[XU]) + "").length) && (QU += dU(zU))
        } else if (0 === AU) return "0";
        for (; AU % 10 === 0;) AU /= 10;
        return QU + AU
      }
      gU.absoluteValue = gU.abs = function() {
        var UU = new this.constructor(this);
        return UU.s && (UU.s = 1), UU
      }, gU.comparedTo = gU.cmp = function(UU) {
        var XU, zU, cU, yU, QU = this;
        if (UU = new QU.constructor(UU), QU.s !== UU.s) return QU.s || -UU.s;
        if (QU.e !== UU.e) return QU.e > UU.e ^ QU.s < 0 ? 1 : -1;
        for (XU = 0, zU = (cU = QU.d.length) < (yU = UU.d.length) ? cU : yU; XU < zU; ++XU)
          if (QU.d[XU] !== UU.d[XU]) return QU.d[XU] > UU.d[XU] ^ QU.s < 0 ? 1 : -1;
        return cU === yU ? 0 : cU > yU ^ QU.s < 0 ? 1 : -1
      }, gU.decimalPlaces = gU.dp = function() {
        var UU = this,
          XU = UU.d.length - 1,
          zU = 7 * (XU - UU.e);
        if (XU = UU.d[XU])
          for (; XU % 10 == 0; XU /= 10) zU--;
        return zU < 0 ? 0 : zU
      }, gU.dividedBy = gU.div = function(UU) {
        return ZU(this, new this.constructor(UU))
      }, gU.dividedToIntegerBy = gU.idiv = function(UU) {
        var XU = this.constructor;
        return CU(ZU(this, new XU(UU), 0, 1), XU.precision)
      }, gU.equals = gU.eq = function(UU) {
        return !this.cmp(UU)
      }, gU.exponent = function() {
        return PU(this)
      }, gU.greaterThan = gU.gt = function(UU) {
        return this.cmp(UU) > 0
      }, gU.greaterThanOrEqualTo = gU.gte = function(UU) {
        return this.cmp(UU) >= 0
      }, gU.isInteger = gU.isint = function() {
        return this.e > this.d.length - 2
      }, gU.isNegative = gU.isneg = function() {
        return this.s < 0
      }, gU.isPositive = gU.ispos = function() {
        return this.s > 0
      }, gU.isZero = function() {
        return 0 === this.s
      }, gU.lessThan = gU.lt = function(UU) {
        return this.cmp(UU) < 0
      }, gU.lessThanOrEqualTo = gU.lte = function(UU) {
        return this.cmp(UU) < 1
      }, gU.logarithm = gU.log = function(UU) {
        var XU, zU = this,
          cU = zU.constructor,
          QU = cU.precision,
          AU = QU + 5;
        if (void 0 === UU) UU = new cU(10);
        else if ((UU = new cU(UU)).s < 1 || UU.eq(yU)) throw Error(oU + "NaN");
        if (zU.s < 1) throw Error(oU + (zU.s ? "NaN" : "-Infinity"));
        return zU.eq(yU) ? new cU(0) : (FU = !1, XU = ZU(LU(zU, AU), LU(UU, AU), AU), FU = !0, CU(XU, QU))
      }, gU.minus = gU.sub = function(UU) {
        var XU = this;
        return UU = new XU.constructor(UU), XU.s == UU.s ? wU(XU, UU) : kU(XU, (UU.s = -UU.s, UU))
      }, gU.modulo = gU.mod = function(UU) {
        var XU, zU = this,
          cU = zU.constructor,
          yU = cU.precision;
        if (!(UU = new cU(UU)).s) throw Error(oU + "NaN");
        return zU.s ? (FU = !1, XU = ZU(zU, UU, 0, 1).times(UU), FU = !0, zU.minus(XU)) : CU(new cU(zU), yU)
      }, gU.naturalExponential = gU.exp = function() {
        return RU(this)
      }, gU.naturalLogarithm = gU.ln = function() {
        return LU(this)
      }, gU.negated = gU.neg = function() {
        var UU = new this.constructor(this);
        return UU.s = -UU.s || 0, UU
      }, gU.plus = gU.add = function(UU) {
        var XU = this;
        return UU = new XU.constructor(UU), XU.s == UU.s ? kU(XU, UU) : wU(XU, (UU.s = -UU.s, UU))
      }, gU.precision = gU.sd = function(UU) {
        var XU, zU, cU, yU = this;
        if (void 0 !== UU && UU !== !!UU && 1 !== UU && 0 !== UU) throw Error(DU + UU);
        if (XU = PU(yU) + 1, zU = 7 * (cU = yU.d.length - 1) + 1, cU = yU.d[cU]) {
          for (; cU % 10 == 0; cU /= 10) zU--;
          for (cU = yU.d[0]; cU >= 10; cU /= 10) zU++
        }
        return UU && XU > zU ? XU : zU
      }, gU.squareRoot = gU.sqrt = function() {
        var UU, XU, zU, cU, yU, QU, AU, DU = this,
          EU = DU.constructor;
        if (DU.s < 1) {
          if (!DU.s) return new EU(0);
          throw Error(oU + "NaN")
        }
        for (UU = PU(DU), FU = !1, 0 == (yU = Math.sqrt(+DU)) || yU == 1 / 0 ? (((XU = BU(DU.d)).length + UU) % 2 == 0 && (XU += "0"), yU = Math.sqrt(XU), UU = YU((UU + 1) / 2) - (UU < 0 || UU % 2), cU = new EU(XU = yU == 1 / 0 ? "1e" + UU : (XU = yU.toExponential()).slice(0, XU.indexOf("e") + 1) + UU)) : cU = new EU(yU.toString()), yU = AU = (zU = EU.precision) + 3;;)
          if (cU = (QU = cU).plus(ZU(DU, QU, AU + 2)).times(.5), BU(QU.d).slice(0, AU) === (XU = BU(cU.d)).slice(0, AU)) {
            if (XU = XU.slice(AU - 3, AU + 1), yU == AU && "4999" == XU) {
              if (CU(QU, zU + 1, 0), QU.times(QU).eq(DU)) {
                cU = QU;
                break
              }
            } else if ("9999" != XU) break;
            AU += 4
          } return FU = !0, CU(cU, zU)
      }, gU.times = gU.mul = function(UU) {
        var XU, zU, cU, yU, QU, AU, oU, DU, EU, YU = this,
          NU = YU.constructor,
          IU = YU.d,
          aU = (UU = new NU(UU)).d;
        if (!YU.s || !UU.s) return new NU(0);
        for (UU.s *= YU.s, zU = YU.e + UU.e, (DU = IU.length) < (EU = aU.length) && (QU = IU, IU = aU, aU = QU, AU = DU, DU = EU, EU = AU), QU = [], cU = AU = DU + EU; cU--;) QU.push(0);
        for (cU = EU; --cU >= 0;) {
          for (XU = 0, yU = DU + cU; yU > cU;) oU = QU[yU] + aU[cU] * IU[yU - cU - 1] + XU, QU[yU--] = oU % pU | 0, XU = oU / pU | 0;
          QU[yU] = (QU[yU] + XU) % pU | 0
        }
        for (; !QU[--AU];) QU.pop();
        return XU ? ++zU : QU.shift(), UU.d = QU, UU.e = zU, FU ? CU(UU, NU.precision) : UU
      }, gU.toDecimalPlaces = gU.todp = function(UU, XU) {
        var zU = this,
          cU = zU.constructor;
        return zU = new cU(zU), void 0 === UU ? zU : (GU(UU, 0, QU), void 0 === XU ? XU = cU.rounding : GU(XU, 0, 8), CU(zU, UU + PU(zU) + 1, XU))
      }, gU.toExponential = function(UU, XU) {
        var zU, cU = this,
          yU = cU.constructor;
        return void 0 === UU ? zU = qU(cU, !0) : (GU(UU, 0, QU), void 0 === XU ? XU = yU.rounding : GU(XU, 0, 8), zU = qU(cU = CU(new yU(cU), UU + 1, XU), !0, UU + 1)), zU
      }, gU.toFixed = function(UU, XU) {
        var zU, cU, yU = this,
          AU = yU.constructor;
        return void 0 === UU ? qU(yU) : (GU(UU, 0, QU), void 0 === XU ? XU = AU.rounding : GU(XU, 0, 8), zU = qU((cU = CU(new AU(yU), UU + PU(yU) + 1, XU)).abs(), !1, UU + PU(cU) + 1), yU.isneg() && !yU.isZero() ? "-" + zU : zU)
      }, gU.toInteger = gU.toint = function() {
        var UU = this,
          XU = UU.constructor;
        return CU(new XU(UU), PU(UU) + 1, XU.rounding)
      }, gU.toNumber = function() {
        return +this
      }, gU.toPower = gU.pow = function(UU) {
        var XU, zU, cU, QU, AU, DU, EU = this,
          NU = EU.constructor,
          IU = +(UU = new NU(UU));
        if (!UU.s) return new NU(yU);
        if (!(EU = new NU(EU)).s) {
          if (UU.s < 1) throw Error(oU + "Infinity");
          return EU
        }
        if (EU.eq(yU)) return EU;
        if (cU = NU.precision, UU.eq(yU)) return CU(EU, cU);
        if (DU = (XU = UU.e) >= (zU = UU.d.length - 1), AU = EU.s, DU) {
          if ((zU = IU < 0 ? -IU : IU) <= aU) {
            for (QU = new NU(yU), XU = Math.ceil(cU / 7 + 4), FU = !1; zU % 2 && OU((QU = QU.times(EU)).d, XU), 0 !== (zU = YU(zU / 2));) OU((EU = EU.times(EU)).d, XU);
            return FU = !0, UU.s < 0 ? new NU(yU).div(QU) : CU(QU, cU)
          }
        } else if (AU < 0) throw Error(oU + "NaN");
        return AU = AU < 0 && 1 & UU.d[Math.max(XU, zU)] ? -1 : 1, EU.s = 1, FU = !1, QU = UU.times(LU(EU, cU + 12)), FU = !0, (QU = RU(QU)).s = AU, QU
      }, gU.toPrecision = function(UU, XU) {
        var zU, cU, yU = this,
          AU = yU.constructor;
        return void 0 === UU ? cU = qU(yU, (zU = PU(yU)) <= AU.toExpNeg || zU >= AU.toExpPos) : (GU(UU, 1, QU), void 0 === XU ? XU = AU.rounding : GU(XU, 0, 8), cU = qU(yU = CU(new AU(yU), UU, XU), UU <= (zU = PU(yU)) || zU <= AU.toExpNeg, UU)), cU
      }, gU.toSignificantDigits = gU.tosd = function(UU, XU) {
        var zU = this.constructor;
        return void 0 === UU ? (UU = zU.precision, XU = zU.rounding) : (GU(UU, 1, QU), void 0 === XU ? XU = zU.rounding : GU(XU, 0, 8)), CU(new zU(this), UU, XU)
      }, gU.toString = gU.valueOf = gU.val = gU.toJSON = function() {
        var UU = this,
          XU = PU(UU),
          zU = UU.constructor;
        return qU(UU, XU <= zU.toExpNeg || XU >= zU.toExpPos)
      };
      var ZU = function() {
        function UU(UU, XU) {
          var zU, cU = 0,
            yU = UU.length;
          for (UU = UU.slice(); yU--;) zU = UU[yU] * XU + cU, UU[yU] = zU % pU | 0, cU = zU / pU | 0;
          return cU && UU.unshift(cU), UU
        }

        function XU(UU, XU, zU, cU) {
          var yU, QU;
          if (zU != cU) QU = zU > cU ? 1 : -1;
          else
            for (yU = QU = 0; yU < zU; yU++)
              if (UU[yU] != XU[yU]) {
                QU = UU[yU] > XU[yU] ? 1 : -1;
                break
              } return QU
        }

        function zU(UU, XU, zU) {
          for (var cU = 0; zU--;) UU[zU] -= cU, cU = UU[zU] < XU[zU] ? 1 : 0, UU[zU] = cU * pU + UU[zU] - XU[zU];
          for (; !UU[0] && UU.length > 1;) UU.shift()
        }
        return function(cU, yU, QU, AU) {
          var FU, DU, EU, YU, NU, IU, aU, tU, gU, kU, GU, BU, ZU, RU, WU, dU, LU, eU, wU = cU.constructor,
            qU = cU.s == yU.s ? 1 : -1,
            OU = cU.d,
            SU = yU.d;
          if (!cU.s) return new wU(cU);
          if (!yU.s) throw Error(oU + "Division by zero");
          for (DU = cU.e - yU.e, LU = SU.length, WU = OU.length, tU = (aU = new wU(qU)).d = [], EU = 0; SU[EU] == (OU[EU] || 0);) ++EU;
          if (SU[EU] > (OU[EU] || 0) && --DU, (BU = null == QU ? QU = wU.precision : AU ? QU + (PU(cU) - PU(yU)) + 1 : QU) < 0) return new wU(0);
          if (BU = BU / 7 + 2 | 0, EU = 0, 1 == LU)
            for (YU = 0, SU = SU[0], BU++;
              (EU < WU || YU) && BU--; EU++) ZU = YU * pU + (OU[EU] || 0), tU[EU] = ZU / SU | 0, YU = ZU % SU | 0;
          else {
            for ((YU = pU / (SU[0] + 1) | 0) > 1 && (SU = UU(SU, YU), OU = UU(OU, YU), LU = SU.length, WU = OU.length), RU = LU, kU = (gU = OU.slice(0, LU)).length; kU < LU;) gU[kU++] = 0;
            (eU = SU.slice()).unshift(0), dU = SU[0], SU[1] >= pU / 2 && ++dU;
            do {
              YU = 0, (FU = XU(SU, gU, LU, kU)) < 0 ? (GU = gU[0], LU != kU && (GU = GU * pU + (gU[1] || 0)), (YU = GU / dU | 0) > 1 ? (YU >= pU && (YU = pU - 1), 1 == (FU = XU(NU = UU(SU, YU), gU, IU = NU.length, kU = gU.length)) && (YU--, zU(NU, LU < IU ? eU : SU, IU))) : (0 == YU && (FU = YU = 1), NU = SU.slice()), (IU = NU.length) < kU && NU.unshift(0), zU(gU, NU, kU), -1 == FU && (FU = XU(SU, gU, LU, kU = gU.length)) < 1 && (YU++, zU(gU, LU < kU ? eU : SU, kU)), kU = gU.length) : 0 === FU && (YU++, gU = [0]), tU[EU++] = YU, FU && gU[0] ? gU[kU++] = OU[RU] || 0 : (gU = [OU[RU]], kU = 1)
            } while ((RU++ < WU || void 0 !== gU[0]) && BU--)
          }
          return tU[0] || tU.shift(), aU.e = DU, CU(aU, AU ? QU + PU(aU) + 1 : QU)
        }
      }();

      function RU(UU, XU) {
        var zU, cU, QU, AU, oU, DU = 0,
          YU = 0,
          IU = UU.constructor,
          pU = IU.precision;
        if (PU(UU) > 16) throw Error(EU + PU(UU));
        if (!UU.s) return new IU(yU);
        for (null == XU ? (FU = !1, oU = pU) : oU = XU, AU = new IU(.03125); UU.abs().gte(.1);) UU = UU.times(AU), YU += 5;
        for (oU += Math.log(NU(2, YU)) / Math.LN10 * 2 + 5 | 0, zU = cU = QU = new IU(yU), IU.precision = oU;;) {
          if (cU = CU(cU.times(UU), oU), zU = zU.times(++DU), BU((AU = QU.plus(ZU(cU, zU, oU))).d).slice(0, oU) === BU(QU.d).slice(0, oU)) {
            for (; YU--;) QU = CU(QU.times(QU), oU);
            return IU.precision = pU, null == XU ? (FU = !0, CU(QU, pU)) : QU
          }
          QU = AU
        }
      }

      function PU(UU) {
        for (var XU = 7 * UU.e, zU = UU.d[0]; zU >= 10; zU /= 10) XU++;
        return XU
      }

      function WU(UU, XU, zU) {
        if (XU > UU.LN10.sd()) throw FU = !0, zU && (UU.precision = zU), Error(oU + "LN10 precision limit exceeded");
        return CU(new UU(UU.LN10), XU)
      }

      function dU(UU) {
        for (var XU = ""; UU--;) XU += "0";
        return XU
      }

      function LU(UU, XU) {
        var zU, cU, QU, AU, DU, EU, YU, NU, IU, pU = 1,
          aU = UU,
          tU = aU.d,
          gU = aU.constructor,
          kU = gU.precision;
        if (aU.s < 1) throw Error(oU + (aU.s ? "NaN" : "-Infinity"));
        if (aU.eq(yU)) return new gU(0);
        if (null == XU ? (FU = !1, NU = kU) : NU = XU, aU.eq(10)) return null == XU && (FU = !0), WU(gU, NU);
        if (NU += 10, gU.precision = NU, cU = (zU = BU(tU)).charAt(0), AU = PU(aU), !(Math.abs(AU) < 15e14)) return YU = WU(gU, NU + 2, kU).times(AU + ""), aU = LU(new gU(cU + "." + zU.slice(1)), NU - 10).plus(YU), gU.precision = kU, null == XU ? (FU = !0, CU(aU, kU)) : aU;
        for (; cU < 7 && 1 != cU || 1 == cU && zU.charAt(1) > 3;) cU = (zU = BU((aU = aU.times(UU)).d)).charAt(0), pU++;
        for (AU = PU(aU), cU > 1 ? (aU = new gU("0." + zU), AU++) : aU = new gU(cU + "." + zU.slice(1)), EU = DU = aU = ZU(aU.minus(yU), aU.plus(yU), NU), IU = CU(aU.times(aU), NU), QU = 3;;) {
          if (DU = CU(DU.times(IU), NU), BU((YU = EU.plus(ZU(DU, new gU(QU), NU))).d).slice(0, NU) === BU(EU.d).slice(0, NU)) return EU = EU.times(2), 0 !== AU && (EU = EU.plus(WU(gU, NU + 2, kU).times(AU + ""))), EU = ZU(EU, new gU(pU), NU), gU.precision = kU, null == XU ? (FU = !0, CU(EU, kU)) : EU;
          EU = YU, QU += 2
        }
      }

      function eU(UU, XU) {
        var zU, cU, yU;
        for ((zU = XU.indexOf(".")) > -1 && (XU = XU.replace(".", "")), (cU = XU.search(/e/i)) > 0 ? (zU < 0 && (zU = cU), zU += +XU.slice(cU + 1), XU = XU.substring(0, cU)) : zU < 0 && (zU = XU.length), cU = 0; 48 === XU.charCodeAt(cU);) ++cU;
        for (yU = XU.length; 48 === XU.charCodeAt(yU - 1);) --yU;
        if (XU = XU.slice(cU, yU)) {
          if (yU -= cU, zU = zU - cU - 1, UU.e = YU(zU / 7), UU.d = [], cU = (zU + 1) % 7, zU < 0 && (cU += 7), cU < yU) {
            for (cU && UU.d.push(+XU.slice(0, cU)), yU -= 7; cU < yU;) UU.d.push(+XU.slice(cU, cU += 7));
            cU = 7 - (XU = XU.slice(cU)).length
          } else cU -= yU;
          for (; cU--;) XU += "0";
          if (UU.d.push(+XU), FU && (UU.e > tU || UU.e < -tU)) throw Error(EU + zU)
        } else UU.s = 0, UU.e = 0, UU.d = [0];
        return UU
      }

      function CU(UU, XU, zU) {
        var cU, yU, QU, AU, oU, DU, IU, aU, gU = UU.d;
        for (AU = 1, QU = gU[0]; QU >= 10; QU /= 10) AU++;
        if ((cU = XU - AU) < 0) cU += 7, yU = XU, IU = gU[aU = 0];
        else {
          if ((aU = Math.ceil((cU + 1) / 7)) >= (QU = gU.length)) return UU;
          for (IU = QU = gU[aU], AU = 1; QU >= 10; QU /= 10) AU++;
          yU = (cU %= 7) - 7 + AU
        }
        if (void 0 !== zU && (oU = IU / (QU = NU(10, AU - yU - 1)) % 10 | 0, DU = XU < 0 || void 0 !== gU[aU + 1] || IU % QU, DU = zU < 4 ? (oU || DU) && (0 == zU || zU == (UU.s < 0 ? 3 : 2)) : oU > 5 || 5 == oU && (4 == zU || DU || 6 == zU && (cU > 0 ? yU > 0 ? IU / NU(10, AU - yU) : 0 : gU[aU - 1]) % 10 & 1 || zU == (UU.s < 0 ? 8 : 7))), XU < 1 || !gU[0]) return DU ? (QU = PU(UU), gU.length = 1, XU = XU - QU - 1, gU[0] = NU(10, (7 - XU % 7) % 7), UU.e = YU(-XU / 7) || 0) : (gU.length = 1, gU[0] = UU.e = UU.s = 0), UU;
        if (0 == cU ? (gU.length = aU, QU = 1, aU--) : (gU.length = aU + 1, QU = NU(10, 7 - cU), gU[aU] = yU > 0 ? (IU / NU(10, AU - yU) % NU(10, yU) | 0) * QU : 0), DU)
          for (;;) {
            if (0 == aU) {
              (gU[0] += QU) == pU && (gU[0] = 1, ++UU.e);
              break
            }
            if (gU[aU] += QU, gU[aU] != pU) break;
            gU[aU--] = 0, QU = 1
          }
        for (cU = gU.length; 0 === gU[--cU];) gU.pop();
        if (FU && (UU.e > tU || UU.e < -tU)) throw Error(EU + PU(UU));
        return UU
      }

      function wU(UU, XU) {
        var zU, cU, yU, QU, AU, oU, DU, EU, YU, NU, IU = UU.constructor,
          aU = IU.precision;
        if (!UU.s || !XU.s) return XU.s ? XU.s = -XU.s : XU = new IU(UU), FU ? CU(XU, aU) : XU;
        if (DU = UU.d, NU = XU.d, cU = XU.e, EU = UU.e, DU = DU.slice(), AU = EU - cU) {
          for ((YU = AU < 0) ? (zU = DU, AU = -AU, oU = NU.length) : (zU = NU, cU = EU, oU = DU.length), AU > (yU = Math.max(Math.ceil(aU / 7), oU) + 2) && (AU = yU, zU.length = 1), zU.reverse(), yU = AU; yU--;) zU.push(0);
          zU.reverse()
        } else {
          for ((YU = (yU = DU.length) < (oU = NU.length)) && (oU = yU), yU = 0; yU < oU; yU++)
            if (DU[yU] != NU[yU]) {
              YU = DU[yU] < NU[yU];
              break
            } AU = 0
        }
        for (YU && (zU = DU, DU = NU, NU = zU, XU.s = -XU.s), oU = DU.length, yU = NU.length - oU; yU > 0; --yU) DU[oU++] = 0;
        for (yU = NU.length; yU > AU;) {
          if (DU[--yU] < NU[yU]) {
            for (QU = yU; QU && 0 === DU[--QU];) DU[QU] = pU - 1;
            --DU[QU], DU[yU] += pU
          }
          DU[yU] -= NU[yU]
        }
        for (; 0 === DU[--oU];) DU.pop();
        for (; 0 === DU[0]; DU.shift()) --cU;
        return DU[0] ? (XU.d = DU, XU.e = cU, FU ? CU(XU, aU) : XU) : new IU(0)
      }

      function qU(UU, XU, zU) {
        var cU, yU = PU(UU),
          QU = BU(UU.d),
          AU = QU.length;
        return XU ? (zU && (cU = zU - AU) > 0 ? QU = QU.charAt(0) + "." + QU.slice(1) + dU(cU) : AU > 1 && (QU = QU.charAt(0) + "." + QU.slice(1)), QU = QU + (yU < 0 ? "e" : "e+") + yU) : yU < 0 ? (QU = "0." + dU(-yU - 1) + QU, zU && (cU = zU - AU) > 0 && (QU += dU(cU))) : yU >= AU ? (QU += dU(yU + 1 - AU), zU && (cU = zU - yU - 1) > 0 && (QU = QU + "." + dU(cU))) : ((cU = yU + 1) < AU && (QU = QU.slice(0, cU) + "." + QU.slice(cU)), zU && (cU = zU - AU) > 0 && (yU + 1 === AU && (QU += "."), QU += dU(cU))), UU.s < 0 ? "-" + QU : QU
      }

      function OU(UU, XU) {
        if (UU.length > XU) return UU.length = XU, !0
      }

      function SU(UU) {
        if (!UU || "object" !== typeof UU) throw Error(oU + "Object expected");
        var XU, zU, cU, yU = ["precision", 1, QU, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (XU = 0; XU < yU.length; XU += 3)
          if (void 0 !== (cU = UU[zU = yU[XU]])) {
            if (!(YU(cU) === cU && cU >= yU[XU + 1] && cU <= yU[XU + 2])) throw Error(DU + zU + ": " + cU);
            this[zU] = cU
          } if (void 0 !== (cU = UU[zU = "LN10"])) {
          if (cU != Math.LN10) throw Error(DU + zU + ": " + cU);
          this[zU] = new this(cU)
        }
        return this
      }
      AU = function UU(XU) {
        var zU, cU, yU;

        function QU(UU) {
          var XU = this;
          if (!(XU instanceof QU)) return new QU(UU);
          if (XU.constructor = QU, UU instanceof QU) return XU.s = UU.s, XU.e = UU.e, void(XU.d = (UU = UU.d) ? UU.slice() : UU);
          if ("number" === typeof UU) {
            if (0 * UU !== 0) throw Error(DU + UU);
            if (UU > 0) XU.s = 1;
            else {
              if (!(UU < 0)) return XU.s = 0, XU.e = 0, void(XU.d = [0]);
              UU = -UU, XU.s = -1
            }
            return UU === ~~UU && UU < 1e7 ? (XU.e = 0, void(XU.d = [UU])) : eU(XU, UU.toString())
          }
          if ("string" !== typeof UU) throw Error(DU + UU);
          if (45 === UU.charCodeAt(0) ? (UU = UU.slice(1), XU.s = -1) : XU.s = 1, !IU.test(UU)) throw Error(DU + UU);
          eU(XU, UU)
        }
        if (QU.prototype = gU, QU.ROUND_UP = 0, QU.ROUND_DOWN = 1, QU.ROUND_CEIL = 2, QU.ROUND_FLOOR = 3, QU.ROUND_HALF_UP = 4, QU.ROUND_HALF_DOWN = 5, QU.ROUND_HALF_EVEN = 6, QU.ROUND_HALF_CEIL = 7, QU.ROUND_HALF_FLOOR = 8, QU.clone = UU, QU.config = QU.set = SU, void 0 === XU && (XU = {}), XU)
          for (yU = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], zU = 0; zU < yU.length;) XU.hasOwnProperty(cU = yU[zU++]) || (XU[cU] = this[cU]);
        return QU.config(XU), QU
      }(AU), AU.default = AU.Decimal = AU, yU = new AU(1), void 0 === (cU = function() {
        return AU
      }.call(XU, zU, XU, UU)) || (UU.exports = cU)
    }()
  },
  6358: (UU, XU, zU) => {
    var cU = zU(5836)(zU(5691), "DataView");
    UU.exports = cU
  },
  5820: (UU, XU, zU) => {
    var cU = zU(5826),
      yU = zU(5866),
      QU = zU(5872),
      AU = zU(5880),
      FU = zU(5889);

    function oU(UU) {
      var XU = -1,
        zU = null == UU ? 0 : UU.length;
      for (this.clear(); ++XU < zU;) {
        var cU = UU[XU];
        this.set(cU[0], cU[1])
      }
    }
    oU.prototype.clear = cU, oU.prototype.delete = yU, oU.prototype.get = QU, oU.prototype.has = AU, oU.prototype.set = FU, UU.exports = oU
  },
  5895: (UU, XU, zU) => {
    var cU = zU(5900),
      yU = zU(5903),
      QU = zU(5916),
      AU = zU(5924),
      FU = zU(5930);

    function oU(UU) {
      var XU = -1,
        zU = null == UU ? 0 : UU.length;
      for (this.clear(); ++XU < zU;) {
        var cU = UU[XU];
        this.set(cU[0], cU[1])
      }
    }
    oU.prototype.clear = cU, oU.prototype.delete = yU, oU.prototype.get = QU, oU.prototype.has = AU, oU.prototype.set = FU, UU.exports = oU
  },
  5933: (UU, XU, zU) => {
    var cU = zU(5836)(zU(5691), "Map");
    UU.exports = cU
  },
  5809: (UU, XU, zU) => {
    var cU = zU(5817),
      yU = zU(5939),
      QU = zU(5950),
      AU = zU(5953),
      FU = zU(5958);

    function oU(UU) {
      var XU = -1,
        zU = null == UU ? 0 : UU.length;
      for (this.clear(); ++XU < zU;) {
        var cU = UU[XU];
        this.set(cU[0], cU[1])
      }
    }
    oU.prototype.clear = cU, oU.prototype.delete = yU, oU.prototype.get = QU, oU.prototype.has = AU, oU.prototype.set = FU, UU.exports = oU
  },
  6366: (UU, XU, zU) => {
    var cU = zU(5836)(zU(5691), "Promise");
    UU.exports = cU
  },
  6375: (UU, XU, zU) => {
    var cU = zU(5836)(zU(5691), "Set");
    UU.exports = cU
  },
  6186: (UU, XU, zU) => {
    var cU = zU(5809),
      yU = zU(6195),
      QU = zU(6204);

    function AU(UU) {
      var XU = -1,
        zU = null == UU ? 0 : UU.length;
      for (this.__data__ = new cU; ++XU < zU;) this.add(UU[XU])
    }
    AU.prototype.add = AU.prototype.push = yU, AU.prototype.has = QU, UU.exports = AU
  },
  6134: (UU, XU, zU) => {
    var cU = zU(5895),
      yU = zU(6143),
      QU = zU(6147),
      AU = zU(6152),
      FU = zU(6157),
      oU = zU(6160);

    function DU(UU) {
      var XU = this.__data__ = new cU(UU);
      this.size = XU.size
    }
    DU.prototype.clear = yU, DU.prototype.delete = QU, DU.prototype.get = AU, DU.prototype.has = FU, DU.prototype.set = oU, UU.exports = DU
  },
  5725: (UU, XU, zU) => {
    var cU = zU(5691).Symbol;
    UU.exports = cU
  },
  6229: (UU, XU, zU) => {
    var cU = zU(5691).Uint8Array;
    UU.exports = cU
  },
  6383: (UU, XU, zU) => {
    var cU = zU(5836)(zU(5691), "WeakMap");
    UU.exports = cU
  },
  6524: UU => {
    UU.exports = function(UU, XU, zU) {
      switch (zU.length) {
        case 0:
          return UU.call(XU);
        case 1:
          return UU.call(XU, zU[0]);
        case 2:
          return UU.call(XU, zU[0], zU[1]);
        case 3:
          return UU.call(XU, zU[0], zU[1], zU[2])
      }
      return UU.apply(XU, zU)
    }
  },
  6849: UU => {
    UU.exports = function(UU, XU) {
      for (var zU = -1, cU = null == UU ? 0 : UU.length; ++zU < cU;)
        if (!XU(UU[zU], zU, UU)) return !1;
      return !0
    }
  },
  6270: UU => {
    UU.exports = function(UU, XU) {
      for (var zU = -1, cU = null == UU ? 0 : UU.length, yU = 0, QU = []; ++zU < cU;) {
        var AU = UU[zU];
        XU(AU, zU, UU) && (QU[yU++] = AU)
      }
      return QU
    }
  },
  6618: (UU, XU, zU) => {
    var cU = zU(6626);
    UU.exports = function(UU, XU) {
      return !!(null == UU ? 0 : UU.length) && cU(UU, XU, 0) > -1
    }
  },
  6649: UU => {
    UU.exports = function(UU, XU, zU) {
      for (var cU = -1, yU = null == UU ? 0 : UU.length; ++cU < yU;)
        if (zU(XU, UU[cU])) return !0;
      return !1
    }
  },
  6290: (UU, XU, zU) => {
    var cU = zU(6295),
      yU = zU(6112),
      QU = zU(5760),
      AU = zU(6304),
      FU = zU(6070),
      oU = zU(6311),
      DU = Object.prototype.hasOwnProperty;
    UU.exports = function(UU, XU) {
      var zU = QU(UU),
        EU = !zU && yU(UU),
        YU = !zU && !EU && AU(UU),
        NU = !zU && !EU && !YU && oU(UU),
        IU = zU || EU || YU || NU,
        pU = IU ? cU(UU.length, String) : [],
        aU = pU.length;
      for (var tU in UU) !XU && !DU.call(UU, tU) || IU && ("length" == tU || YU && ("offset" == tU || "parent" == tU) || NU && ("buffer" == tU || "byteLength" == tU || "byteOffset" == tU) || FU(tU, aU)) || pU.push(tU);
      return pU
    }
  },
  5976: UU => {
    UU.exports = function(UU, XU) {
      for (var zU = -1, cU = null == UU ? 0 : UU.length, yU = Array(cU); ++zU < cU;) yU[zU] = XU(UU[zU], zU, UU);
      return yU
    }
  },
  6097: UU => {
    UU.exports = function(UU, XU) {
      for (var zU = -1, cU = XU.length, yU = UU.length; ++zU < cU;) UU[yU + zU] = XU[zU];
      return UU
    }
  },
  6212: UU => {
    UU.exports = function(UU, XU) {
      for (var zU = -1, cU = null == UU ? 0 : UU.length; ++zU < cU;)
        if (XU(UU[zU], zU, UU)) return !0;
      return !1
    }
  },
  6702: UU => {
    UU.exports = function(UU) {
      return UU.split("")
    }
  },
  5906: (UU, XU, zU) => {
    var cU = zU(5912);
    UU.exports = function(UU, XU) {
      for (var zU = UU.length; zU--;)
        if (cU(UU[zU][0], XU)) return zU;
      return -1
    }
  },
  6840: (UU, XU, zU) => {
    var cU = zU(6553);
    UU.exports = function(UU, XU, zU) {
      "__proto__" == XU && cU ? cU(UU, XU, {
        configurable: !0,
        enumerable: !0,
        value: zU,
        writable: !0
      }) : UU[XU] = zU
    }
  },
  6477: (UU, XU, zU) => {
    var cU = zU(6482),
      yU = zU(6494)(cU);
    UU.exports = yU
  },
  6856: (UU, XU, zU) => {
    var cU = zU(6477);
    UU.exports = function(UU, XU) {
      var zU = !0;
      return cU(UU, (function(UU, cU, yU) {
        return zU = !!XU(UU, cU, yU)
      })), zU
    }
  },
  6775: (UU, XU, zU) => {
    var cU = zU(5715);
    UU.exports = function(UU, XU, zU) {
      for (var yU = -1, QU = UU.length; ++yU < QU;) {
        var AU = UU[yU],
          FU = XU(AU);
        if (null != FU && (void 0 === oU ? FU === FU && !cU(FU) : zU(FU, oU))) var oU = FU,
          DU = AU
      }
      return DU
    }
  },
  6631: UU => {
    UU.exports = function(UU, XU, zU, cU) {
      for (var yU = UU.length, QU = zU + (cU ? 1 : -1); cU ? QU-- : ++QU < yU;)
        if (XU(UU[QU], QU, UU)) return QU;
      return -1
    }
  },
  6088: (UU, XU, zU) => {
    var cU = zU(6097),
      yU = zU(6106);
    UU.exports = function UU(XU, zU, QU, AU, FU) {
      var oU = -1,
        DU = XU.length;
      for (QU || (QU = yU), FU || (FU = []); ++oU < DU;) {
        var EU = XU[oU];
        zU > 0 && QU(EU) ? zU > 1 ? UU(EU, zU - 1, QU, AU, FU) : cU(FU, EU) : AU || (FU[FU.length] = EU)
      }
      return FU
    }
  },
  6490: (UU, XU, zU) => {
    var cU = zU(6492)();
    UU.exports = cU
  },
  6482: (UU, XU, zU) => {
    var cU = zU(6490),
      yU = zU(6284);
    UU.exports = function(UU, XU) {
      return UU && cU(UU, XU, yU)
    }
  },
  5783: (UU, XU, zU) => {
    var cU = zU(5785),
      yU = zU(5985);
    UU.exports = function(UU, XU) {
      for (var zU = 0, QU = (XU = cU(XU, UU)).length; null != UU && zU < QU;) UU = UU[yU(XU[zU++])];
      return zU && zU == QU ? UU : void 0
    }
  },
  6256: (UU, XU, zU) => {
    var cU = zU(6097),
      yU = zU(5760);
    UU.exports = function(UU, XU, zU) {
      var QU = XU(UU);
      return yU(UU) ? QU : cU(QU, zU(UU))
    }
  },
  5723: (UU, XU, zU) => {
    var cU = zU(5725),
      yU = zU(5731),
      QU = zU(5738),
      AU = cU ? cU.toStringTag : void 0;
    UU.exports = function(UU) {
      return null == UU ? void 0 === UU ? "[object Undefined]" : "[object Null]" : AU && AU in Object(UU) ? yU(UU) : QU(UU)
    }
  },
  6778: UU => {
    UU.exports = function(UU, XU) {
      return UU > XU
    }
  },
  6428: UU => {
    UU.exports = function(UU, XU) {
      return null != UU && XU in Object(UU)
    }
  },
  6626: (UU, XU, zU) => {
    var cU = zU(6631),
      yU = zU(6633),
      QU = zU(6640);
    UU.exports = function(UU, XU, zU) {
      return XU === XU ? QU(UU, XU, zU) : cU(UU, yU, zU)
    }
  },
  6115: (UU, XU, zU) => {
    var cU = zU(5723),
      yU = zU(5742);
    UU.exports = function(UU) {
      return yU(UU) && "[object Arguments]" == cU(UU)
    }
  },
  6166: (UU, XU, zU) => {
    var cU = zU(6170),
      yU = zU(5742);
    UU.exports = function UU(XU, zU, QU, AU, FU) {
      return XU === zU || (null == XU || null == zU || !yU(XU) && !yU(zU) ? XU !== XU && zU !== zU : cU(XU, zU, QU, AU, UU, FU))
    }
  },
  6170: (UU, XU, zU) => {
    var cU = zU(6134),
      yU = zU(6178),
      QU = zU(6224),
      AU = zU(6245),
      FU = zU(6353),
      oU = zU(5760),
      DU = zU(6304),
      EU = zU(6311),
      YU = "[object Arguments]",
      NU = "[object Array]",
      IU = "[object Object]",
      pU = Object.prototype.hasOwnProperty;
    UU.exports = function(UU, XU, zU, aU, tU, gU) {
      var kU = oU(UU),
        GU = oU(XU),
        BU = kU ? NU : FU(UU),
        ZU = GU ? NU : FU(XU),
        RU = (BU = BU == YU ? IU : BU) == IU,
        PU = (ZU = ZU == YU ? IU : ZU) == IU,
        WU = BU == ZU;
      if (WU && DU(UU)) {
        if (!DU(XU)) return !1;
        kU = !0, RU = !1
      }
      if (WU && !RU) return gU || (gU = new cU), kU || EU(UU) ? yU(UU, XU, zU, aU, tU, gU) : QU(UU, XU, BU, zU, aU, tU, gU);
      if (!(1 & zU)) {
        var dU = RU && pU.call(UU, "__wrapped__"),
          LU = PU && pU.call(XU, "__wrapped__");
        if (dU || LU) {
          var eU = dU ? UU.value() : UU,
            CU = LU ? XU.value() : XU;
          return gU || (gU = new cU), tU(eU, CU, zU, aU, gU)
        }
      }
      return !!WU && (gU || (gU = new cU), AU(UU, XU, zU, aU, tU, gU))
    }
  },
  6130: (UU, XU, zU) => {
    var cU = zU(6134),
      yU = zU(6166);
    UU.exports = function(UU, XU, zU, QU) {
      var AU = zU.length,
        FU = AU,
        oU = !QU;
      if (null == UU) return !FU;
      for (UU = Object(UU); AU--;) {
        var DU = zU[AU];
        if (oU && DU[2] ? DU[1] !== UU[DU[0]] : !(DU[0] in UU)) return !1
      }
      for (; ++AU < FU;) {
        var EU = (DU = zU[AU])[0],
          YU = UU[EU],
          NU = DU[1];
        if (oU && DU[2]) {
          if (void 0 === YU && !(EU in UU)) return !1
        } else {
          var IU = new cU;
          if (QU) var pU = QU(YU, NU, EU, UU, XU, IU);
          if (!(void 0 === pU ? yU(NU, YU, 3, QU, IU) : pU)) return !1
        }
      }
      return !0
    }
  },
  6633: UU => {
    UU.exports = function(UU) {
      return UU !== UU
    }
  },
  5839: (UU, XU, zU) => {
    var cU = zU(5845),
      yU = zU(5851),
      QU = zU(5680),
      AU = zU(5857),
      FU = /^\[object .+?Constructor\]$/,
      oU = Function.prototype,
      DU = Object.prototype,
      EU = oU.toString,
      YU = DU.hasOwnProperty,
      NU = RegExp("^" + EU.call(YU).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    UU.exports = function(UU) {
      return !(!QU(UU) || yU(UU)) && (cU(UU) ? NU : FU).test(AU(UU))
    }
  },
  6313: (UU, XU, zU) => {
    var cU = zU(5723),
      yU = zU(6061),
      QU = zU(5742),
      AU = {};
    AU["[object Float32Array]"] = AU["[object Float64Array]"] = AU["[object Int8Array]"] = AU["[object Int16Array]"] = AU["[object Int32Array]"] = AU["[object Uint8Array]"] = AU["[object Uint8ClampedArray]"] = AU["[object Uint16Array]"] = AU["[object Uint32Array]"] = !0, AU["[object Arguments]"] = AU["[object Array]"] = AU["[object ArrayBuffer]"] = AU["[object Boolean]"] = AU["[object DataView]"] = AU["[object Date]"] = AU["[object Error]"] = AU["[object Function]"] = AU["[object Map]"] = AU["[object Number]"] = AU["[object Object]"] = AU["[object RegExp]"] = AU["[object Set]"] = AU["[object String]"] = AU["[object WeakMap]"] = !1, UU.exports = function(UU) {
      return QU(UU) && yU(UU.length) && !!AU[cU(UU)]
    }
  },
  6123: (UU, XU, zU) => {
    var cU = zU(6127),
      yU = zU(6410),
      QU = zU(6446),
      AU = zU(5760),
      FU = zU(6450);
    UU.exports = function(UU) {
      return "function" == typeof UU ? UU : null == UU ? QU : "object" == typeof UU ? AU(UU) ? yU(UU[0], UU[1]) : cU(UU) : FU(UU)
    }
  },
  6332: (UU, XU, zU) => {
    var cU = zU(6334),
      yU = zU(6336),
      QU = Object.prototype.hasOwnProperty;
    UU.exports = function(UU) {
      if (!cU(UU)) return yU(UU);
      var XU = [];
      for (var zU in Object(UU)) QU.call(UU, zU) && "constructor" != zU && XU.push(zU);
      return XU
    }
  },
  6785: UU => {
    UU.exports = function(UU, XU) {
      return UU < XU
    }
  },
  6472: (UU, XU, zU) => {
    var cU = zU(6477),
      yU = zU(6056);
    UU.exports = function(UU, XU) {
      var zU = -1,
        QU = yU(UU) ? Array(UU.length) : [];
      return cU(UU, (function(UU, cU, yU) {
        QU[++zU] = XU(UU, cU, yU)
      })), QU
    }
  },
  6127: (UU, XU, zU) => {
    var cU = zU(6130),
      yU = zU(6389),
      QU = zU(6401);
    UU.exports = function(UU) {
      var XU = yU(UU);
      return 1 == XU.length && XU[0][2] ? QU(XU[0][0], XU[0][1]) : function(zU) {
        return zU === UU || cU(zU, UU, XU)
      }
    }
  },
  6410: (UU, XU, zU) => {
    var cU = zU(6166),
      yU = zU(5781),
      QU = zU(6419),
      AU = zU(5791),
      FU = zU(6394),
      oU = zU(6401),
      DU = zU(5985);
    UU.exports = function(UU, XU) {
      return AU(UU) && FU(XU) ? oU(DU(UU), XU) : function(zU) {
        var AU = yU(zU, UU);
        return void 0 === AU && AU === XU ? QU(zU, UU) : cU(XU, AU, 3)
      }
    }
  },
  6121: (UU, XU, zU) => {
    var cU = zU(5976),
      yU = zU(5783),
      QU = zU(6123),
      AU = zU(6472),
      FU = zU(6497),
      oU = zU(6318),
      DU = zU(6502),
      EU = zU(6446),
      YU = zU(5760);
    UU.exports = function(UU, XU, zU) {
      XU = XU.length ? cU(XU, (function(UU) {
        return YU(UU) ? function(XU) {
          return yU(XU, 1 === UU.length ? UU[0] : UU)
        } : UU
      })) : [EU];
      var NU = -1;
      XU = cU(XU, oU(QU));
      var IU = AU(UU, (function(UU, zU, yU) {
        return {
          criteria: cU(XU, (function(XU) {
            return XU(UU)
          })),
          index: ++NU,
          value: UU
        }
      }));
      return FU(IU, (function(UU, XU) {
        return DU(UU, XU, zU)
      }))
    }
  },
  6459: UU => {
    UU.exports = function(UU) {
      return function(XU) {
        return null == XU ? void 0 : XU[UU]
      }
    }
  },
  6465: (UU, XU, zU) => {
    var cU = zU(5783);
    UU.exports = function(UU) {
      return function(XU) {
        return cU(XU, UU)
      }
    }
  },
  6043: UU => {
    var XU = Math.ceil,
      zU = Math.max;
    UU.exports = function(UU, cU, yU, QU) {
      for (var AU = -1, FU = zU(XU((cU - UU) / (yU || 1)), 0), oU = Array(FU); FU--;) oU[QU ? FU : ++AU] = UU, UU += yU;
      return oU
    }
  },
  6510: (UU, XU, zU) => {
    var cU = zU(6446),
      yU = zU(6519),
      QU = zU(6530);
    UU.exports = function(UU, XU) {
      return QU(yU(UU, XU, cU), UU + "")
    }
  },
  6539: (UU, XU, zU) => {
    var cU = zU(6547),
      yU = zU(6553),
      QU = zU(6446),
      AU = yU ? function(UU, XU) {
        return yU(UU, "toString", {
          configurable: !0,
          enumerable: !1,
          value: cU(XU),
          writable: !0
        })
      } : QU;
    UU.exports = AU
  },
  6689: UU => {
    UU.exports = function(UU, XU, zU) {
      var cU = -1,
        yU = UU.length;
      XU < 0 && (XU = -XU > yU ? 0 : yU + XU), (zU = zU > yU ? yU : zU) < 0 && (zU += yU), yU = XU > zU ? 0 : zU - XU >>> 0, XU >>>= 0;
      for (var QU = Array(yU); ++cU < yU;) QU[cU] = UU[cU + XU];
      return QU
    }
  },
  6919: (UU, XU, zU) => {
    var cU = zU(6477);
    UU.exports = function(UU, XU) {
      var zU;
      return cU(UU, (function(UU, cU, yU) {
        return !(zU = XU(UU, cU, yU))
      })), !!zU
    }
  },
  6497: UU => {
    UU.exports = function(UU, XU) {
      var zU = UU.length;
      for (UU.sort(XU); zU--;) UU[zU] = UU[zU].value;
      return UU
    }
  },
  6295: UU => {
    UU.exports = function(UU, XU) {
      for (var zU = -1, cU = Array(UU); ++zU < UU;) cU[zU] = XU(zU);
      return cU
    }
  },
  5967: (UU, XU, zU) => {
    var cU = zU(5725),
      yU = zU(5976),
      QU = zU(5760),
      AU = zU(5715),
      FU = cU ? cU.prototype : void 0,
      oU = FU ? FU.toString : void 0;
    UU.exports = function UU(XU) {
      if ("string" == typeof XU) return XU;
      if (QU(XU)) return yU(XU, UU) + "";
      if (AU(XU)) return oU ? oU.call(XU) : "";
      var zU = XU + "";
      return "0" == zU && 1 / XU == -1 / 0 ? "-0" : zU
    }
  },
  5707: (UU, XU, zU) => {
    var cU = zU(5712),
      yU = /^\s+/;
    UU.exports = function(UU) {
      return UU ? UU.slice(0, cU(UU) + 1).replace(yU, "") : UU
    }
  },
  6318: UU => {
    UU.exports = function(UU) {
      return function(XU) {
        return UU(XU)
      }
    }
  },
  6609: (UU, XU, zU) => {
    var cU = zU(6186),
      yU = zU(6618),
      QU = zU(6649),
      AU = zU(6215),
      FU = zU(6658),
      oU = zU(6240);
    UU.exports = function(UU, XU, zU) {
      var DU = -1,
        EU = yU,
        YU = UU.length,
        NU = !0,
        IU = [],
        pU = IU;
      if (zU) NU = !1, EU = QU;
      else if (YU >= 200) {
        var aU = XU ? null : FU(UU);
        if (aU) return oU(aU);
        NU = !1, EU = AU, pU = new cU
      } else pU = XU ? [] : IU;
      UU: for (; ++DU < YU;) {
        var tU = UU[DU],
          gU = XU ? XU(tU) : tU;
        if (tU = zU || 0 !== tU ? tU : 0, NU && gU === gU) {
          for (var kU = pU.length; kU--;)
            if (pU[kU] === gU) continue UU;
          XU && pU.push(gU), IU.push(tU)
        } else EU(pU, gU, zU) || (pU !== IU && pU.push(gU), IU.push(tU))
      }
      return IU
    }
  },
  6215: UU => {
    UU.exports = function(UU, XU) {
      return UU.has(XU)
    }
  },
  5785: (UU, XU, zU) => {
    var cU = zU(5760),
      yU = zU(5791),
      QU = zU(5796),
      AU = zU(5962);
    UU.exports = function(UU, XU) {
      return cU(UU) ? UU : yU(UU, XU) ? [UU] : QU(AU(UU))
    }
  },
  6687: (UU, XU, zU) => {
    var cU = zU(6689);
    UU.exports = function(UU, XU, zU) {
      var yU = UU.length;
      return zU = void 0 === zU ? yU : zU, !XU && zU >= yU ? UU : cU(UU, XU, zU)
    }
  },
  6508: (UU, XU, zU) => {
    var cU = zU(5715);
    UU.exports = function(UU, XU) {
      if (UU !== XU) {
        var zU = void 0 !== UU,
          yU = null === UU,
          QU = UU === UU,
          AU = cU(UU),
          FU = void 0 !== XU,
          oU = null === XU,
          DU = XU === XU,
          EU = cU(XU);
        if (!oU && !EU && !AU && UU > XU || AU && FU && DU && !oU && !EU || yU && FU && DU || !zU && DU || !QU) return 1;
        if (!yU && !AU && !EU && UU < XU || EU && zU && QU && !yU && !AU || oU && zU && QU || !FU && QU || !DU) return -1
      }
      return 0
    }
  },
  6502: (UU, XU, zU) => {
    var cU = zU(6508);
    UU.exports = function(UU, XU, zU) {
      for (var yU = -1, QU = UU.criteria, AU = XU.criteria, FU = QU.length, oU = zU.length; ++yU < FU;) {
        var DU = cU(QU[yU], AU[yU]);
        if (DU) return yU >= oU ? DU : DU * ("desc" == zU[yU] ? -1 : 1)
      }
      return UU.index - XU.index
    }
  },
  5854: (UU, XU, zU) => {
    var cU = zU(5691)["__core-js_shared__"];
    UU.exports = cU
  },
  6494: (UU, XU, zU) => {
    var cU = zU(6056);
    UU.exports = function(UU, XU) {
      return function(zU, yU) {
        if (null == zU) return zU;
        if (!cU(zU)) return UU(zU, yU);
        for (var QU = zU.length, AU = XU ? QU : -1, FU = Object(zU);
          (XU ? AU-- : ++AU < QU) && !1 !== yU(FU[AU], AU, FU););
        return zU
      }
    }
  },
  6492: UU => {
    UU.exports = function(UU) {
      return function(XU, zU, cU) {
        for (var yU = -1, QU = Object(XU), AU = cU(XU), FU = AU.length; FU--;) {
          var oU = AU[UU ? FU : ++yU];
          if (!1 === zU(QU[oU], oU, QU)) break
        }
        return XU
      }
    }
  },
  6681: (UU, XU, zU) => {
    var cU = zU(6687),
      yU = zU(6691),
      QU = zU(6695),
      AU = zU(5962);
    UU.exports = function(UU) {
      return function(XU) {
        XU = AU(XU);
        var zU = yU(XU) ? QU(XU) : void 0,
          FU = zU ? zU[0] : XU.charAt(0),
          oU = zU ? cU(zU, 1).join("") : XU.slice(1);
        return FU[UU]() + oU
      }
    }
  },
  6935: (UU, XU, zU) => {
    var cU = zU(6123),
      yU = zU(6056),
      QU = zU(6284);
    UU.exports = function(UU) {
      return function(XU, zU, AU) {
        var FU = Object(XU);
        if (!yU(XU)) {
          var oU = cU(zU, 3);
          XU = QU(XU), zU = function(UU) {
            return oU(FU[UU], UU, FU)
          }
        }
        var DU = UU(XU, zU, AU);
        return DU > -1 ? FU[oU ? XU[DU] : DU] : void 0
      }
    }
  },
  6035: (UU, XU, zU) => {
    var cU = zU(6043),
      yU = zU(6052),
      QU = zU(6075);
    UU.exports = function(UU) {
      return function(XU, zU, AU) {
        return AU && "number" != typeof AU && yU(XU, zU, AU) && (zU = AU = void 0), XU = QU(XU), void 0 === zU ? (zU = XU, XU = 0) : zU = QU(zU), AU = void 0 === AU ? XU < zU ? 1 : -1 : QU(AU), cU(XU, zU, AU, UU)
      }
    }
  },
  6658: (UU, XU, zU) => {
    var cU = zU(6375),
      yU = zU(6666),
      QU = zU(6240),
      AU = cU && 1 / QU(new cU([, -0]))[1] == 1 / 0 ? function(UU) {
        return new cU(UU)
      } : yU;
    UU.exports = AU
  },
  6553: (UU, XU, zU) => {
    var cU = zU(5836),
      yU = function() {
        try {
          var UU = cU(Object, "defineProperty");
          return UU({}, "", {}), UU
        } catch (XU) {}
      }();
    UU.exports = yU
  },
  6178: (UU, XU, zU) => {
    var cU = zU(6186),
      yU = zU(6212),
      QU = zU(6215);
    UU.exports = function(UU, XU, zU, AU, FU, oU) {
      var DU = 1 & zU,
        EU = UU.length,
        YU = XU.length;
      if (EU != YU && !(DU && YU > EU)) return !1;
      var NU = oU.get(UU),
        IU = oU.get(XU);
      if (NU && IU) return NU == XU && IU == UU;
      var pU = -1,
        aU = !0,
        tU = 2 & zU ? new cU : void 0;
      for (oU.set(UU, XU), oU.set(XU, UU); ++pU < EU;) {
        var gU = UU[pU],
          kU = XU[pU];
        if (AU) var GU = DU ? AU(kU, gU, pU, XU, UU, oU) : AU(gU, kU, pU, UU, XU, oU);
        if (void 0 !== GU) {
          if (GU) continue;
          aU = !1;
          break
        }
        if (tU) {
          if (!yU(XU, (function(UU, XU) {
              if (!QU(tU, XU) && (gU === UU || FU(gU, UU, zU, AU, oU))) return tU.push(XU)
            }))) {
            aU = !1;
            break
          }
        } else if (gU !== kU && !FU(gU, kU, zU, AU, oU)) {
          aU = !1;
          break
        }
      }
      return oU.delete(UU), oU.delete(XU), aU
    }
  },
  6224: (UU, XU, zU) => {
    var cU = zU(5725),
      yU = zU(6229),
      QU = zU(5912),
      AU = zU(6178),
      FU = zU(6232),
      oU = zU(6240),
      DU = cU ? cU.prototype : void 0,
      EU = DU ? DU.valueOf : void 0;
    UU.exports = function(UU, XU, zU, cU, DU, YU, NU) {
      switch (zU) {
        case "[object DataView]":
          if (UU.byteLength != XU.byteLength || UU.byteOffset != XU.byteOffset) return !1;
          UU = UU.buffer, XU = XU.buffer;
        case "[object ArrayBuffer]":
          return !(UU.byteLength != XU.byteLength || !YU(new yU(UU), new yU(XU)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return QU(+UU, +XU);
        case "[object Error]":
          return UU.name == XU.name && UU.message == XU.message;
        case "[object RegExp]":
        case "[object String]":
          return UU == XU + "";
        case "[object Map]":
          var IU = FU;
        case "[object Set]":
          var pU = 1 & cU;
          if (IU || (IU = oU), UU.size != XU.size && !pU) return !1;
          var aU = NU.get(UU);
          if (aU) return aU == XU;
          cU |= 2, NU.set(UU, XU);
          var tU = AU(IU(UU), IU(XU), cU, DU, YU, NU);
          return NU.delete(UU), tU;
        case "[object Symbol]":
          if (EU) return EU.call(UU) == EU.call(XU)
      }
      return !1
    }
  },
  6245: (UU, XU, zU) => {
    var cU = zU(6253),
      yU = Object.prototype.hasOwnProperty;
    UU.exports = function(UU, XU, zU, QU, AU, FU) {
      var oU = 1 & zU,
        DU = cU(UU),
        EU = DU.length;
      if (EU != cU(XU).length && !oU) return !1;
      for (var YU = EU; YU--;) {
        var NU = DU[YU];
        if (!(oU ? NU in XU : yU.call(XU, NU))) return !1
      }
      var IU = FU.get(UU),
        pU = FU.get(XU);
      if (IU && pU) return IU == XU && pU == UU;
      var aU = !0;
      FU.set(UU, XU), FU.set(XU, UU);
      for (var tU = oU; ++YU < EU;) {
        var gU = UU[NU = DU[YU]],
          kU = XU[NU];
        if (QU) var GU = oU ? QU(kU, gU, NU, XU, UU, FU) : QU(gU, kU, NU, UU, XU, FU);
        if (!(void 0 === GU ? gU === kU || AU(gU, kU, zU, QU, FU) : GU)) {
          aU = !1;
          break
        }
        tU || (tU = "constructor" == NU)
      }
      if (aU && !tU) {
        var BU = UU.constructor,
          ZU = XU.constructor;
        BU == ZU || !("constructor" in UU) || !("constructor" in XU) || "function" == typeof BU && BU instanceof BU && "function" == typeof ZU && ZU instanceof ZU || (aU = !1)
      }
      return FU.delete(UU), FU.delete(XU), aU
    }
  },
  5694: (UU, XU, zU) => {
    var cU = "object" == typeof zU.g && zU.g && zU.g.Object === Object && zU.g;
    UU.exports = cU
  },
  6253: (UU, XU, zU) => {
    var cU = zU(6256),
      yU = zU(6262),
      QU = zU(6284);
    UU.exports = function(UU) {
      return cU(UU, QU, yU)
    }
  },
  5941: (UU, XU, zU) => {
    var cU = zU(5947);
    UU.exports = function(UU, XU) {
      var zU = UU.__data__;
      return cU(XU) ? zU["string" == typeof XU ? "string" : "hash"] : zU.map
    }
  },
  6389: (UU, XU, zU) => {
    var cU = zU(6394),
      yU = zU(6284);
    UU.exports = function(UU) {
      for (var XU = yU(UU), zU = XU.length; zU--;) {
        var QU = XU[zU],
          AU = UU[QU];
        XU[zU] = [QU, AU, cU(AU)]
      }
      return XU
    }
  },
  5836: (UU, XU, zU) => {
    var cU = zU(5839),
      yU = zU(5860);
    UU.exports = function(UU, XU) {
      var zU = yU(UU, XU);
      return cU(zU) ? zU : void 0
    }
  },
  6900: (UU, XU, zU) => {
    var cU = zU(6344)(Object.getPrototypeOf, Object);
    UU.exports = cU
  },
  5731: (UU, XU, zU) => {
    var cU = zU(5725),
      yU = Object.prototype,
      QU = yU.hasOwnProperty,
      AU = yU.toString,
      FU = cU ? cU.toStringTag : void 0;
    UU.exports = function(UU) {
      var XU = QU.call(UU, FU),
        zU = UU[FU];
      try {
        UU[FU] = void 0;
        var cU = !0
      } catch (oU) {}
      var yU = AU.call(UU);
      return cU && (XU ? UU[FU] = zU : delete UU[FU]), yU
    }
  },
  6262: (UU, XU, zU) => {
    var cU = zU(6270),
      yU = zU(6277),
      QU = Object.prototype.propertyIsEnumerable,
      AU = Object.getOwnPropertySymbols,
      FU = AU ? function(UU) {
        return null == UU ? [] : (UU = Object(UU), cU(AU(UU), (function(XU) {
          return QU.call(UU, XU)
        })))
      } : yU;
    UU.exports = FU
  },
  6353: (UU, XU, zU) => {
    var cU = zU(6358),
      yU = zU(5933),
      QU = zU(6366),
      AU = zU(6375),
      FU = zU(6383),
      oU = zU(5723),
      DU = zU(5857),
      EU = "[object Map]",
      YU = "[object Promise]",
      NU = "[object Set]",
      IU = "[object WeakMap]",
      pU = "[object DataView]",
      aU = DU(cU),
      tU = DU(yU),
      gU = DU(QU),
      kU = DU(AU),
      GU = DU(FU),
      BU = oU;
    (cU && BU(new cU(new ArrayBuffer(1))) != pU || yU && BU(new yU) != EU || QU && BU(QU.resolve()) != YU || AU && BU(new AU) != NU || FU && BU(new FU) != IU) && (BU = function(UU) {
      var XU = oU(UU),
        zU = "[object Object]" == XU ? UU.constructor : void 0,
        cU = zU ? DU(zU) : "";
      if (cU) switch (cU) {
        case aU:
          return pU;
        case tU:
          return EU;
        case gU:
          return YU;
        case kU:
          return NU;
        case GU:
          return IU
      }
      return XU
    }), UU.exports = BU
  },
  5860: UU => {
    UU.exports = function(UU, XU) {
      return null == UU ? void 0 : UU[XU]
    }
  },
  6437: (UU, XU, zU) => {
    var cU = zU(5785),
      yU = zU(6112),
      QU = zU(5760),
      AU = zU(6070),
      FU = zU(6061),
      oU = zU(5985);
    UU.exports = function(UU, XU, zU) {
      for (var DU = -1, EU = (XU = cU(XU, UU)).length, YU = !1; ++DU < EU;) {
        var NU = oU(XU[DU]);
        if (!(YU = null != UU && zU(UU, NU))) break;
        UU = UU[NU]
      }
      return YU || ++DU != EU ? YU : !!(EU = null == UU ? 0 : UU.length) && FU(EU) && AU(NU, EU) && (QU(UU) || yU(UU))
    }
  },
  6691: UU => {
    var XU = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    UU.exports = function(UU) {
      return XU.test(UU)
    }
  },
  5826: (UU, XU, zU) => {
    var cU = zU(5830);
    UU.exports = function() {
      this.__data__ = cU ? cU(null) : {}, this.size = 0
    }
  },
  5866: UU => {
    UU.exports = function(UU) {
      var XU = this.has(UU) && delete this.__data__[UU];
      return this.size -= XU ? 1 : 0, XU
    }
  },
  5872: (UU, XU, zU) => {
    var cU = zU(5830),
      yU = Object.prototype.hasOwnProperty;
    UU.exports = function(UU) {
      var XU = this.__data__;
      if (cU) {
        var zU = XU[UU];
        return "__lodash_hash_undefined__" === zU ? void 0 : zU
      }
      return yU.call(XU, UU) ? XU[UU] : void 0
    }
  },
  5880: (UU, XU, zU) => {
    var cU = zU(5830),
      yU = Object.prototype.hasOwnProperty;
    UU.exports = function(UU) {
      var XU = this.__data__;
      return cU ? void 0 !== XU[UU] : yU.call(XU, UU)
    }
  },
  5889: (UU, XU, zU) => {
    var cU = zU(5830);
    UU.exports = function(UU, XU) {
      var zU = this.__data__;
      return this.size += this.has(UU) ? 0 : 1, zU[UU] = cU && void 0 === XU ? "__lodash_hash_undefined__" : XU, this
    }
  },
  6106: (UU, XU, zU) => {
    var cU = zU(5725),
      yU = zU(6112),
      QU = zU(5760),
      AU = cU ? cU.isConcatSpreadable : void 0;
    UU.exports = function(UU) {
      return QU(UU) || yU(UU) || !!(AU && UU && UU[AU])
    }
  },
  6070: UU => {
    var XU = /^(?:0|[1-9]\d*)$/;
    UU.exports = function(UU, zU) {
      var cU = typeof UU;
      return !!(zU = null == zU ? 9007199254740991 : zU) && ("number" == cU || "symbol" != cU && XU.test(UU)) && UU > -1 && UU % 1 == 0 && UU < zU
    }
  },
  6052: (UU, XU, zU) => {
    var cU = zU(5912),
      yU = zU(6056),
      QU = zU(6070),
      AU = zU(5680);
    UU.exports = function(UU, XU, zU) {
      if (!AU(zU)) return !1;
      var FU = typeof XU;
      return !!("number" == FU ? yU(zU) && QU(XU, zU.length) : "string" == FU && XU in zU) && cU(zU[XU], UU)
    }
  },
  5791: (UU, XU, zU) => {
    var cU = zU(5760),
      yU = zU(5715),
      QU = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      AU = /^\w*$/;
    UU.exports = function(UU, XU) {
      if (cU(UU)) return !1;
      var zU = typeof UU;
      return !("number" != zU && "symbol" != zU && "boolean" != zU && null != UU && !yU(UU)) || (AU.test(UU) || !QU.test(UU) || null != XU && UU in Object(XU))
    }
  },
  5947: UU => {
    UU.exports = function(UU) {
      var XU = typeof UU;
      return "string" == XU || "number" == XU || "symbol" == XU || "boolean" == XU ? "__proto__" !== UU : null === UU
    }
  },
  5851: (UU, XU, zU) => {
    var cU = zU(5854),
      yU = function() {
        var UU = /[^.]+$/.exec(cU && cU.keys && cU.keys.IE_PROTO || "");
        return UU ? "Symbol(src)_1." + UU : ""
      }();
    UU.exports = function(UU) {
      return !!yU && yU in UU
    }
  },
  6334: UU => {
    var XU = Object.prototype;
    UU.exports = function(UU) {
      var zU = UU && UU.constructor;
      return UU === ("function" == typeof zU && zU.prototype || XU)
    }
  },
  6394: (UU, XU, zU) => {
    var cU = zU(5680);
    UU.exports = function(UU) {
      return UU === UU && !cU(UU)
    }
  },
  5900: UU => {
    UU.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5903: (UU, XU, zU) => {
    var cU = zU(5906),
      yU = Array.prototype.splice;
    UU.exports = function(UU) {
      var XU = this.__data__,
        zU = cU(XU, UU);
      return !(zU < 0) && (zU == XU.length - 1 ? XU.pop() : yU.call(XU, zU, 1), --this.size, !0)
    }
  },
  5916: (UU, XU, zU) => {
    var cU = zU(5906);
    UU.exports = function(UU) {
      var XU = this.__data__,
        zU = cU(XU, UU);
      return zU < 0 ? void 0 : XU[zU][1]
    }
  },
  5924: (UU, XU, zU) => {
    var cU = zU(5906);
    UU.exports = function(UU) {
      return cU(this.__data__, UU) > -1
    }
  },
  5930: (UU, XU, zU) => {
    var cU = zU(5906);
    UU.exports = function(UU, XU) {
      var zU = this.__data__,
        yU = cU(zU, UU);
      return yU < 0 ? (++this.size, zU.push([UU, XU])) : zU[yU][1] = XU, this
    }
  },
  5817: (UU, XU, zU) => {
    var cU = zU(5820),
      yU = zU(5895),
      QU = zU(5933);
    UU.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new cU,
        map: new(QU || yU),
        string: new cU
      }
    }
  },
  5939: (UU, XU, zU) => {
    var cU = zU(5941);
    UU.exports = function(UU) {
      var XU = cU(this, UU).delete(UU);
      return this.size -= XU ? 1 : 0, XU
    }
  },
  5950: (UU, XU, zU) => {
    var cU = zU(5941);
    UU.exports = function(UU) {
      return cU(this, UU).get(UU)
    }
  },
  5953: (UU, XU, zU) => {
    var cU = zU(5941);
    UU.exports = function(UU) {
      return cU(this, UU).has(UU)
    }
  },
  5958: (UU, XU, zU) => {
    var cU = zU(5941);
    UU.exports = function(UU, XU) {
      var zU = cU(this, UU),
        yU = zU.size;
      return zU.set(UU, XU), this.size += zU.size == yU ? 0 : 1, this
    }
  },
  6232: UU => {
    UU.exports = function(UU) {
      var XU = -1,
        zU = Array(UU.size);
      return UU.forEach((function(UU, cU) {
        zU[++XU] = [cU, UU]
      })), zU
    }
  },
  6401: UU => {
    UU.exports = function(UU, XU) {
      return function(zU) {
        return null != zU && (zU[UU] === XU && (void 0 !== XU || UU in Object(zU)))
      }
    }
  },
  5800: (UU, XU, zU) => {
    var cU = zU(5804);
    UU.exports = function(UU) {
      var XU = cU(UU, (function(UU) {
          return 500 === zU.size && zU.clear(), UU
        })),
        zU = XU.cache;
      return XU
    }
  },
  5830: (UU, XU, zU) => {
    var cU = zU(5836)(Object, "create");
    UU.exports = cU
  },
  6336: (UU, XU, zU) => {
    var cU = zU(6344)(Object.keys, Object);
    UU.exports = cU
  },
  6323: (UU, XU, zU) => {
    UU = zU.nmd(UU);
    var cU = zU(5694),
      yU = XU && !XU.nodeType && XU,
      QU = yU && UU && !UU.nodeType && UU,
      AU = QU && QU.exports === yU && cU.process,
      FU = function() {
        try {
          var UU = QU && QU.require && QU.require("util").types;
          return UU || AU && AU.binding && AU.binding("util")
        } catch (XU) {}
      }();
    UU.exports = FU
  },
  5738: UU => {
    var XU = Object.prototype.toString;
    UU.exports = function(UU) {
      return XU.call(UU)
    }
  },
  6344: UU => {
    UU.exports = function(UU, XU) {
      return function(zU) {
        return UU(XU(zU))
      }
    }
  },
  6519: (UU, XU, zU) => {
    var cU = zU(6524),
      yU = Math.max;
    UU.exports = function(UU, XU, zU) {
      return XU = yU(void 0 === XU ? UU.length - 1 : XU, 0),
        function() {
          for (var QU = arguments, AU = -1, FU = yU(QU.length - XU, 0), oU = Array(FU); ++AU < FU;) oU[AU] = QU[XU + AU];
          AU = -1;
          for (var DU = Array(XU + 1); ++AU < XU;) DU[AU] = QU[AU];
          return DU[XU] = zU(oU), cU(UU, this, DU)
        }
    }
  },
  5691: (UU, XU, zU) => {
    var cU = zU(5694),
      yU = "object" == typeof self && self && self.Object === Object && self,
      QU = cU || yU || Function("return this")();
    UU.exports = QU
  },
  6195: UU => {
    UU.exports = function(UU) {
      return this.__data__.set(UU, "__lodash_hash_undefined__"), this
    }
  },
  6204: UU => {
    UU.exports = function(UU) {
      return this.__data__.has(UU)
    }
  },
  6240: UU => {
    UU.exports = function(UU) {
      var XU = -1,
        zU = Array(UU.size);
      return UU.forEach((function(UU) {
        zU[++XU] = UU
      })), zU
    }
  },
  6530: (UU, XU, zU) => {
    var cU = zU(6539),
      yU = zU(6561)(cU);
    UU.exports = yU
  },
  6561: UU => {
    var XU = Date.now;
    UU.exports = function(UU) {
      var zU = 0,
        cU = 0;
      return function() {
        var yU = XU(),
          QU = 16 - (yU - cU);
        if (cU = yU, QU > 0) {
          if (++zU >= 800) return arguments[0]
        } else zU = 0;
        return UU.apply(void 0, arguments)
      }
    }
  },
  6143: (UU, XU, zU) => {
    var cU = zU(5895);
    UU.exports = function() {
      this.__data__ = new cU, this.size = 0
    }
  },
  6147: UU => {
    UU.exports = function(UU) {
      var XU = this.__data__,
        zU = XU.delete(UU);
      return this.size = XU.size, zU
    }
  },
  6152: UU => {
    UU.exports = function(UU) {
      return this.__data__.get(UU)
    }
  },
  6157: UU => {
    UU.exports = function(UU) {
      return this.__data__.has(UU)
    }
  },
  6160: (UU, XU, zU) => {
    var cU = zU(5895),
      yU = zU(5933),
      QU = zU(5809);
    UU.exports = function(UU, XU) {
      var zU = this.__data__;
      if (zU instanceof cU) {
        var AU = zU.__data__;
        if (!yU || AU.length < 199) return AU.push([UU, XU]), this.size = ++zU.size, this;
        zU = this.__data__ = new QU(AU)
      }
      return zU.set(UU, XU), this.size = zU.size, this
    }
  },
  6640: UU => {
    UU.exports = function(UU, XU, zU) {
      for (var cU = zU - 1, yU = UU.length; ++cU < yU;)
        if (UU[cU] === XU) return cU;
      return -1
    }
  },
  6695: (UU, XU, zU) => {
    var cU = zU(6702),
      yU = zU(6691),
      QU = zU(6709);
    UU.exports = function(UU) {
      return yU(UU) ? QU(UU) : cU(UU)
    }
  },
  5796: (UU, XU, zU) => {
    var cU = zU(5800),
      yU = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      QU = /\\(\\)?/g,
      AU = cU((function(UU) {
        var XU = [];
        return 46 === UU.charCodeAt(0) && XU.push(""), UU.replace(yU, (function(UU, zU, cU, yU) {
          XU.push(cU ? yU.replace(QU, "$1") : zU || UU)
        })), XU
      }));
    UU.exports = AU
  },
  5985: (UU, XU, zU) => {
    var cU = zU(5715);
    UU.exports = function(UU) {
      if ("string" == typeof UU || cU(UU)) return UU;
      var XU = UU + "";
      return "0" == XU && 1 / UU == -1 / 0 ? "-0" : XU
    }
  },
  5857: UU => {
    var XU = Function.prototype.toString;
    UU.exports = function(UU) {
      if (null != UU) {
        try {
          return XU.call(UU)
        } catch (zU) {}
        try {
          return UU + ""
        } catch (zU) {}
      }
      return ""
    }
  },
  5712: UU => {
    var XU = /\s/;
    UU.exports = function(UU) {
      for (var zU = UU.length; zU-- && XU.test(UU.charAt(zU)););
      return zU
    }
  },
  6709: UU => {
    var XU = "\\ud800-\\udfff",
      zU = "[" + XU + "]",
      cU = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      yU = "\\ud83c[\\udffb-\\udfff]",
      QU = "[^" + XU + "]",
      AU = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      FU = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      oU = "(?:" + cU + "|" + yU + ")" + "?",
      DU = "[\\ufe0e\\ufe0f]?",
      EU = DU + oU + ("(?:\\u200d(?:" + [QU, AU, FU].join("|") + ")" + DU + oU + ")*"),
      YU = "(?:" + [QU + cU + "?", cU, AU, FU, zU].join("|") + ")",
      NU = RegExp(yU + "(?=" + yU + ")|" + YU + EU, "g");
    UU.exports = function(UU) {
      return UU.match(NU) || []
    }
  },
  6547: UU => {
    UU.exports = function(UU) {
      return function() {
        return UU
      }
    }
  },
  5673: (UU, XU, zU) => {
    var cU = zU(5680),
      yU = zU(5684),
      QU = zU(5701),
      AU = Math.max,
      FU = Math.min;
    UU.exports = function(UU, XU, zU) {
      var oU, DU, EU, YU, NU, IU, pU = 0,
        aU = !1,
        tU = !1,
        gU = !0;
      if ("function" != typeof UU) throw new TypeError("Expected a function");

      function kU(XU) {
        var zU = oU,
          cU = DU;
        return oU = DU = void 0, pU = XU, YU = UU.apply(cU, zU)
      }

      function GU(UU) {
        var zU = UU - IU;
        return void 0 === IU || zU >= XU || zU < 0 || tU && UU - pU >= EU
      }

      function BU() {
        var UU = yU();
        if (GU(UU)) return ZU(UU);
        NU = setTimeout(BU, function(UU) {
          var zU = XU - (UU - IU);
          return tU ? FU(zU, EU - (UU - pU)) : zU
        }(UU))
      }

      function ZU(UU) {
        return NU = void 0, gU && oU ? kU(UU) : (oU = DU = void 0, YU)
      }

      function RU() {
        var UU = yU(),
          zU = GU(UU);
        if (oU = arguments, DU = this, IU = UU, zU) {
          if (void 0 === NU) return function(UU) {
            return pU = UU, NU = setTimeout(BU, XU), aU ? kU(UU) : YU
          }(IU);
          if (tU) return clearTimeout(NU), NU = setTimeout(BU, XU), kU(IU)
        }
        return void 0 === NU && (NU = setTimeout(BU, XU)), YU
      }
      return XU = QU(XU) || 0, cU(zU) && (aU = !!zU.leading, EU = (tU = "maxWait" in zU) ? AU(QU(zU.maxWait) || 0, XU) : EU, gU = "trailing" in zU ? !!zU.trailing : gU), RU.cancel = function() {
        void 0 !== NU && clearTimeout(NU), pU = 0, oU = IU = DU = NU = void 0
      }, RU.flush = function() {
        return void 0 === NU ? YU : ZU(yU())
      }, RU
    }
  },
  5912: UU => {
    UU.exports = function(UU, XU) {
      return UU === XU || UU !== UU && XU !== XU
    }
  },
  6844: (UU, XU, zU) => {
    var cU = zU(6849),
      yU = zU(6856),
      QU = zU(6123),
      AU = zU(5760),
      FU = zU(6052);
    UU.exports = function(UU, XU, zU) {
      var oU = AU(UU) ? cU : yU;
      return zU && FU(UU, XU, zU) && (XU = void 0), oU(UU, QU(XU, 3))
    }
  },
  6930: (UU, XU, zU) => {
    var cU = zU(6935)(zU(6937));
    UU.exports = cU
  },
  6937: (UU, XU, zU) => {
    var cU = zU(6631),
      yU = zU(6123),
      QU = zU(6945),
      AU = Math.max;
    UU.exports = function(UU, XU, zU) {
      var FU = null == UU ? 0 : UU.length;
      if (!FU) return -1;
      var oU = null == zU ? 0 : QU(zU);
      return oU < 0 && (oU = AU(FU + oU, 0)), cU(UU, yU(XU, 3), oU)
    }
  },
  6788: (UU, XU, zU) => {
    var cU = zU(6088),
      yU = zU(6795);
    UU.exports = function(UU, XU) {
      return cU(yU(UU, XU), 1)
    }
  },
  5781: (UU, XU, zU) => {
    var cU = zU(5783);
    UU.exports = function(UU, XU, zU) {
      var yU = null == UU ? void 0 : cU(UU, XU);
      return void 0 === yU ? zU : yU
    }
  },
  6419: (UU, XU, zU) => {
    var cU = zU(6428),
      yU = zU(6437);
    UU.exports = function(UU, XU) {
      return null != UU && yU(UU, XU, cU)
    }
  },
  6446: UU => {
    UU.exports = function(UU) {
      return UU
    }
  },
  6112: (UU, XU, zU) => {
    var cU = zU(6115),
      yU = zU(5742),
      QU = Object.prototype,
      AU = QU.hasOwnProperty,
      FU = QU.propertyIsEnumerable,
      oU = cU(function() {
        return arguments
      }()) ? cU : function(UU) {
        return yU(UU) && AU.call(UU, "callee") && !FU.call(UU, "callee")
      };
    UU.exports = oU
  },
  5760: UU => {
    var XU = Array.isArray;
    UU.exports = XU
  },
  6056: (UU, XU, zU) => {
    var cU = zU(5845),
      yU = zU(6061);
    UU.exports = function(UU) {
      return null != UU && yU(UU.length) && !cU(UU)
    }
  },
  6905: (UU, XU, zU) => {
    var cU = zU(5723),
      yU = zU(5742);
    UU.exports = function(UU) {
      return !0 === UU || !1 === UU || yU(UU) && "[object Boolean]" == cU(UU)
    }
  },
  6304: (UU, XU, zU) => {
    UU = zU.nmd(UU);
    var cU = zU(5691),
      yU = zU(6307),
      QU = XU && !XU.nodeType && XU,
      AU = QU && UU && !UU.nodeType && UU,
      FU = AU && AU.exports === QU ? cU.XY : void 0,
      oU = (FU ? FU.isBuffer : void 0) || yU;
    UU.exports = oU
  },
  6797: (UU, XU, zU) => {
    var cU = zU(6166);
    UU.exports = function(UU, XU) {
      return cU(UU, XU)
    }
  },
  5845: (UU, XU, zU) => {
    var cU = zU(5723),
      yU = zU(5680);
    UU.exports = function(UU) {
      if (!yU(UU)) return !1;
      var XU = cU(UU);
      return "[object Function]" == XU || "[object GeneratorFunction]" == XU || "[object AsyncFunction]" == XU || "[object Proxy]" == XU
    }
  },
  6061: UU => {
    UU.exports = function(UU) {
      return "number" == typeof UU && UU > -1 && UU % 1 == 0 && UU <= 9007199254740991
    }
  },
  5767: (UU, XU, zU) => {
    var cU = zU(5774);
    UU.exports = function(UU) {
      return cU(UU) && UU != +UU
    }
  },
  5987: UU => {
    UU.exports = function(UU) {
      return null == UU
    }
  },
  5774: (UU, XU, zU) => {
    var cU = zU(5723),
      yU = zU(5742);
    UU.exports = function(UU) {
      return "number" == typeof UU || yU(UU) && "[object Number]" == cU(UU)
    }
  },
  5680: UU => {
    UU.exports = function(UU) {
      var XU = typeof UU;
      return null != UU && ("object" == XU || "function" == XU)
    }
  },
  5742: UU => {
    UU.exports = function(UU) {
      return null != UU && "object" == typeof UU
    }
  },
  6896: (UU, XU, zU) => {
    var cU = zU(5723),
      yU = zU(6900),
      QU = zU(5742),
      AU = Function.prototype,
      FU = Object.prototype,
      oU = AU.toString,
      DU = FU.hasOwnProperty,
      EU = oU.call(Object);
    UU.exports = function(UU) {
      if (!QU(UU) || "[object Object]" != cU(UU)) return !1;
      var XU = yU(UU);
      if (null === XU) return !0;
      var zU = DU.call(XU, "constructor") && XU.constructor;
      return "function" == typeof zU && zU instanceof zU && oU.call(zU) == EU
    }
  },
  5751: (UU, XU, zU) => {
    var cU = zU(5723),
      yU = zU(5760),
      QU = zU(5742);
    UU.exports = function(UU) {
      return "string" == typeof UU || !yU(UU) && QU(UU) && "[object String]" == cU(UU)
    }
  },
  5715: (UU, XU, zU) => {
    var cU = zU(5723),
      yU = zU(5742);
    UU.exports = function(UU) {
      return "symbol" == typeof UU || yU(UU) && "[object Symbol]" == cU(UU)
    }
  },
  6311: (UU, XU, zU) => {
    var cU = zU(6313),
      yU = zU(6318),
      QU = zU(6323),
      AU = QU && QU.isTypedArray,
      FU = AU ? yU(AU) : cU;
    UU.exports = FU
  },
  6284: (UU, XU, zU) => {
    var cU = zU(6290),
      yU = zU(6332),
      QU = zU(6056);
    UU.exports = function(UU) {
      return QU(UU) ? cU(UU) : yU(UU)
    }
  },
  6883: UU => {
    UU.exports = function(UU) {
      var XU = null == UU ? 0 : UU.length;
      return XU ? UU[XU - 1] : void 0
    }
  },
  6795: (UU, XU, zU) => {
    var cU = zU(5976),
      yU = zU(6123),
      QU = zU(6472),
      AU = zU(5760);
    UU.exports = function(UU, XU) {
      return (AU(UU) ? cU : QU)(UU, yU(XU, 3))
    }
  },
  6836: (UU, XU, zU) => {
    var cU = zU(6840),
      yU = zU(6482),
      QU = zU(6123);
    UU.exports = function(UU, XU) {
      var zU = {};
      return XU = QU(XU, 3), yU(UU, (function(UU, yU, QU) {
        cU(zU, yU, XU(UU, yU, QU))
      })), zU
    }
  },
  6766: (UU, XU, zU) => {
    var cU = zU(6775),
      yU = zU(6778),
      QU = zU(6446);
    UU.exports = function(UU) {
      return UU && UU.length ? cU(UU, QU, yU) : void 0
    }
  },
  5804: (UU, XU, zU) => {
    var cU = zU(5809);

    function yU(UU, XU) {
      if ("function" != typeof UU || null != XU && "function" != typeof XU) throw new TypeError("Expected a function");
      var zU = function() {
        var cU = arguments,
          yU = XU ? XU.apply(this, cU) : cU[0],
          QU = zU.cache;
        if (QU.has(yU)) return QU.get(yU);
        var AU = UU.apply(this, cU);
        return zU.cache = QU.set(yU, AU) || QU, AU
      };
      return zU.cache = new(yU.Cache || cU), zU
    }
    yU.Cache = cU, UU.exports = yU
  },
  6781: (UU, XU, zU) => {
    var cU = zU(6775),
      yU = zU(6785),
      QU = zU(6446);
    UU.exports = function(UU) {
      return UU && UU.length ? cU(UU, QU, yU) : void 0
    }
  },
  6666: UU => {
    UU.exports = function() {}
  },
  5684: (UU, XU, zU) => {
    var cU = zU(5691);
    UU.exports = function() {
      return cU.Date.now()
    }
  },
  6450: (UU, XU, zU) => {
    var cU = zU(6459),
      yU = zU(6465),
      QU = zU(5791),
      AU = zU(5985);
    UU.exports = function(UU) {
      return QU(UU) ? cU(AU(UU)) : yU(UU)
    }
  },
  6032: (UU, XU, zU) => {
    var cU = zU(6035)();
    UU.exports = cU
  },
  6917: (UU, XU, zU) => {
    var cU = zU(6212),
      yU = zU(6123),
      QU = zU(6919),
      AU = zU(5760),
      FU = zU(6052);
    UU.exports = function(UU, XU, zU) {
      var oU = AU(UU) ? cU : QU;
      return zU && FU(UU, XU, zU) && (XU = void 0), oU(UU, yU(XU, 3))
    }
  },
  6079: (UU, XU, zU) => {
    var cU = zU(6088),
      yU = zU(6121),
      QU = zU(6510),
      AU = zU(6052),
      FU = QU((function(UU, XU) {
        if (null == UU) return [];
        var zU = XU.length;
        return zU > 1 && AU(UU, XU[0], XU[1]) ? XU = [] : zU > 2 && AU(XU[0], XU[1], XU[2]) && (XU = [XU[0]]), yU(UU, cU(XU, 1), [])
      }));
    UU.exports = FU
  },
  6277: UU => {
    UU.exports = function() {
      return []
    }
  },
  6307: UU => {
    UU.exports = function() {
      return !1
    }
  },
  5664: (UU, XU, zU) => {
    var cU = zU(5673),
      yU = zU(5680);
    UU.exports = function(UU, XU, zU) {
      var QU = !0,
        AU = !0;
      if ("function" != typeof UU) throw new TypeError("Expected a function");
      return yU(zU) && (QU = "leading" in zU ? !!zU.leading : QU, AU = "trailing" in zU ? !!zU.trailing : AU), cU(UU, XU, {
        leading: QU,
        maxWait: XU,
        trailing: AU
      })
    }
  },
  6075: (UU, XU, zU) => {
    var cU = zU(5701),
      yU = 1 / 0;
    UU.exports = function(UU) {
      return UU ? (UU = cU(UU)) === yU || UU === -1 / 0 ? 17976931348623157e292 * (UU < 0 ? -1 : 1) : UU === UU ? UU : 0 : 0 === UU ? UU : 0
    }
  },
  6945: (UU, XU, zU) => {
    var cU = zU(6075);
    UU.exports = function(UU) {
      var XU = cU(UU),
        zU = XU % 1;
      return XU === XU ? zU ? XU - zU : XU : 0
    }
  },
  5701: (UU, XU, zU) => {
    var cU = zU(5707),
      yU = zU(5680),
      QU = zU(5715),
      AU = /^[-+]0x[0-9a-f]+$/i,
      FU = /^0b[01]+$/i,
      oU = /^0o[0-7]+$/i,
      DU = parseInt;
    UU.exports = function(UU) {
      if ("number" == typeof UU) return UU;
      if (QU(UU)) return NaN;
      if (yU(UU)) {
        var XU = "function" == typeof UU.valueOf ? UU.valueOf() : UU;
        UU = yU(XU) ? XU + "" : XU
      }
      if ("string" != typeof UU) return 0 === UU ? UU : +UU;
      UU = cU(UU);
      var zU = FU.test(UU);
      return zU || oU.test(UU) ? DU(UU.slice(2), zU ? 2 : 8) : AU.test(UU) ? NaN : +UU
    }
  },
  5962: (UU, XU, zU) => {
    var cU = zU(5967);
    UU.exports = function(UU) {
      return null == UU ? "" : cU(UU)
    }
  },
  6600: (UU, XU, zU) => {
    var cU = zU(6123),
      yU = zU(6609);
    UU.exports = function(UU, XU) {
      return UU && UU.length ? yU(UU, cU(XU, 2)) : []
    }
  },
  6679: (UU, XU, zU) => {
    var cU = zU(6681)("toUpperCase");
    UU.exports = cU
  },
  6729: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => fX
    });
    var cU = zU(61),
      yU = zU(5499),
      QU = zU.n(yU);
    const {
      getOwnPropertyNames: AU,
      getOwnPropertySymbols: FU
    } = Object, {
      hasOwnProperty: oU
    } = Object.prototype;

    function DU(UU, XU) {
      return function(zU, cU, yU) {
        return UU(zU, cU, yU) && XU(zU, cU, yU)
      }
    }

    function EU(UU) {
      return function(XU, zU, cU) {
        if (!XU || !zU || "object" !== typeof XU || "object" !== typeof zU) return UU(XU, zU, cU);
        const {
          cache: yU
        } = cU, QU = yU.get(XU), AU = yU.get(zU);
        if (QU && AU) return QU === zU && AU === XU;
        yU.set(XU, zU), yU.set(zU, XU);
        const FU = UU(XU, zU, cU);
        return yU.delete(XU), yU.delete(zU), FU
      }
    }

    function YU(UU) {
      return AU(UU).concat(FU(UU))
    }
    const NU = Object.hasOwn || ((UU, XU) => oU.call(UU, XU));

    function IU(UU, XU) {
      return UU === XU || !UU && !XU && UU !== UU && XU !== XU
    }
    const {
      getOwnPropertyDescriptor: pU,
      keys: aU
    } = Object;

    function tU(UU, XU) {
      return UU.byteLength === XU.byteLength && wU(new Uint8Array(UU), new Uint8Array(XU))
    }

    function gU(UU, XU, zU) {
      let cU = UU.length;
      if (XU.length !== cU) return !1;
      for (; cU-- > 0;)
        if (!zU.equals(UU[cU], XU[cU], cU, cU, UU, XU, zU)) return !1;
      return !0
    }

    function kU(UU, XU) {
      return UU.byteLength === XU.byteLength && wU(new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength), new Uint8Array(XU.buffer, XU.byteOffset, XU.byteLength))
    }

    function GU(UU, XU) {
      return IU(UU.getTime(), XU.getTime())
    }

    function BU(UU, XU) {
      return UU.name === XU.name && UU.message === XU.message && UU.cause === XU.cause && UU.stack === XU.stack
    }

    function ZU(UU, XU) {
      return UU === XU
    }

    function RU(UU, XU, zU) {
      const cU = UU.size;
      if (cU !== XU.size) return !1;
      if (!cU) return !0;
      const yU = new Array(cU),
        QU = UU.entries();
      let AU, FU, oU = 0;
      for (;
        (AU = QU.next()) && !AU.done;) {
        const cU = XU.entries();
        let QU = !1,
          DU = 0;
        for (;
          (FU = cU.next()) && !FU.done;) {
          if (yU[DU]) {
            DU++;
            continue
          }
          const cU = AU.value,
            EU = FU.value;
          if (zU.equals(cU[0], EU[0], oU, DU, UU, XU, zU) && zU.equals(cU[1], EU[1], cU[0], EU[0], UU, XU, zU)) {
            QU = yU[DU] = !0;
            break
          }
          DU++
        }
        if (!QU) return !1;
        oU++
      }
      return !0
    }
    const PU = IU;

    function WU(UU, XU, zU) {
      const cU = aU(UU);
      let yU = cU.length;
      if (aU(XU).length !== yU) return !1;
      for (; yU-- > 0;)
        if (!OU(UU, XU, zU, cU[yU])) return !1;
      return !0
    }

    function dU(UU, XU, zU) {
      const cU = YU(UU);
      let yU, QU, AU, FU = cU.length;
      if (YU(XU).length !== FU) return !1;
      for (; FU-- > 0;) {
        if (yU = cU[FU], !OU(UU, XU, zU, yU)) return !1;
        if (QU = pU(UU, yU), AU = pU(XU, yU), (QU || AU) && (!QU || !AU || QU.configurable !== AU.configurable || QU.enumerable !== AU.enumerable || QU.writable !== AU.writable)) return !1
      }
      return !0
    }

    function LU(UU, XU) {
      return IU(UU.valueOf(), XU.valueOf())
    }

    function eU(UU, XU) {
      return UU.source === XU.source && UU.flags === XU.flags
    }

    function CU(UU, XU, zU) {
      const cU = UU.size;
      if (cU !== XU.size) return !1;
      if (!cU) return !0;
      const yU = new Array(cU),
        QU = UU.values();
      let AU, FU;
      for (;
        (AU = QU.next()) && !AU.done;) {
        const cU = XU.values();
        let QU = !1,
          oU = 0;
        for (;
          (FU = cU.next()) && !FU.done;) {
          if (!yU[oU] && zU.equals(AU.value, FU.value, AU.value, FU.value, UU, XU, zU)) {
            QU = yU[oU] = !0;
            break
          }
          oU++
        }
        if (!QU) return !1
      }
      return !0
    }

    function wU(UU, XU) {
      let zU = UU.byteLength;
      if (XU.byteLength !== zU || UU.byteOffset !== XU.byteOffset) return !1;
      for (; zU-- > 0;)
        if (UU[zU] !== XU[zU]) return !1;
      return !0
    }

    function qU(UU, XU) {
      return UU.hostname === XU.hostname && UU.pathname === XU.pathname && UU.protocol === XU.protocol && UU.port === XU.port && UU.hash === XU.hash && UU.username === XU.username && UU.password === XU.password
    }

    function OU(UU, XU, zU, cU) {
      return !("_owner" !== cU && "__o" !== cU && "__v" !== cU || !UU.$$typeof && !XU.$$typeof) || NU(XU, cU) && zU.equals(UU[cU], XU[cU], cU, cU, UU, XU, zU)
    }
    const SU = {
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

    function uU(UU) {
      let {
        areArrayBuffersEqual: XU,
        areArraysEqual: zU,
        areDataViewsEqual: cU,
        areDatesEqual: yU,
        areErrorsEqual: QU,
        areFunctionsEqual: AU,
        areMapsEqual: FU,
        areNumbersEqual: oU,
        areObjectsEqual: DU,
        arePrimitiveWrappersEqual: EU,
        areRegExpsEqual: YU,
        areSetsEqual: NU,
        areTypedArraysEqual: IU,
        areUrlsEqual: pU,
        unknownTagComparators: aU
      } = UU;
      return function(UU, tU, gU) {
        if (UU === tU) return !0;
        if (null == UU || null == tU) return !1;
        const kU = typeof UU;
        if (kU !== typeof tU) return !1;
        if ("object" !== kU) return "number" === kU ? oU(UU, tU, gU) : "function" === kU && AU(UU, tU, gU);
        const GU = UU.constructor;
        if (GU !== tU.constructor) return !1;
        if (GU === Object) return DU(UU, tU, gU);
        if (Array.isArray(UU)) return zU(UU, tU, gU);
        if (GU === Date) return yU(UU, tU, gU);
        if (GU === RegExp) return YU(UU, tU, gU);
        if (GU === Map) return FU(UU, tU, gU);
        if (GU === Set) return NU(UU, tU, gU);
        const BU = rU.call(UU);
        if ("[object Date]" === BU) return yU(UU, tU, gU);
        if ("[object RegExp]" === BU) return YU(UU, tU, gU);
        if ("[object Map]" === BU) return FU(UU, tU, gU);
        if ("[object Set]" === BU) return NU(UU, tU, gU);
        if ("[object Object]" === BU) return "function" !== typeof UU.then && "function" !== typeof tU.then && DU(UU, tU, gU);
        if ("[object URL]" === BU) return pU(UU, tU, gU);
        if ("[object Error]" === BU) return QU(UU, tU, gU);
        if ("[object Arguments]" === BU) return DU(UU, tU, gU);
        if (SU[BU]) return IU(UU, tU, gU);
        if ("[object ArrayBuffer]" === BU) return XU(UU, tU, gU);
        if ("[object DataView]" === BU) return cU(UU, tU, gU);
        if ("[object Boolean]" === BU || "[object Number]" === BU || "[object String]" === BU) return EU(UU, tU, gU);
        if (aU) {
          let XU = aU[BU];
          if (!XU) {
            const zU = null != (ZU = UU) ? ZU[Symbol.toStringTag] : void 0;
            zU && (XU = aU[zU])
          }
          if (XU) return XU(UU, tU, gU)
        }
        var ZU;
        return !1
      }
    }
    const fU = iU();
    iU({
      strict: !0
    }), iU({
      circular: !0
    }), iU({
      circular: !0,
      strict: !0
    }), iU({
      createInternalComparator: () => IU
    }), iU({
      strict: !0,
      createInternalComparator: () => IU
    }), iU({
      circular: !0,
      createInternalComparator: () => IU
    }), iU({
      circular: !0,
      createInternalComparator: () => IU,
      strict: !0
    });

    function iU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: XU = !1,
        createInternalComparator: zU,
        createState: cU,
        strict: yU = !1
      } = UU, QU = function(UU) {
        let {
          circular: XU,
          createCustomConfig: zU,
          strict: cU
        } = UU, yU = {
          areArrayBuffersEqual: tU,
          areArraysEqual: cU ? dU : gU,
          areDataViewsEqual: kU,
          areDatesEqual: GU,
          areErrorsEqual: BU,
          areFunctionsEqual: ZU,
          areMapsEqual: cU ? DU(RU, dU) : RU,
          areNumbersEqual: PU,
          areObjectsEqual: cU ? dU : WU,
          arePrimitiveWrappersEqual: LU,
          areRegExpsEqual: eU,
          areSetsEqual: cU ? DU(CU, dU) : CU,
          areTypedArraysEqual: cU ? DU(wU, dU) : wU,
          areUrlsEqual: qU,
          unknownTagComparators: void 0
        };
        if (zU && (yU = Object.assign({}, yU, zU(yU))), XU) {
          const UU = EU(yU.areArraysEqual),
            XU = EU(yU.areMapsEqual),
            zU = EU(yU.areObjectsEqual),
            cU = EU(yU.areSetsEqual);
          yU = Object.assign({}, yU, {
            areArraysEqual: UU,
            areMapsEqual: XU,
            areObjectsEqual: zU,
            areSetsEqual: cU
          })
        }
        return yU
      }(UU), AU = uU(QU);
      var FU;
      return function(UU) {
        let {
          circular: XU,
          comparator: zU,
          createState: cU,
          equals: yU,
          strict: QU
        } = UU;
        if (cU) return function(UU, AU) {
          const {
            cache: FU = (XU ? new WeakMap : void 0),
            meta: oU
          } = cU();
          return zU(UU, AU, {
            cache: FU,
            equals: yU,
            meta: oU,
            strict: QU
          })
        };
        if (XU) return function(UU, XU) {
          return zU(UU, XU, {
            cache: new WeakMap,
            equals: yU,
            meta: void 0,
            strict: QU
          })
        };
        const AU = {
          cache: void 0,
          equals: yU,
          meta: void 0,
          strict: QU
        };
        return function(UU, XU) {
          return zU(UU, XU, AU)
        }
      }({
        circular: XU,
        comparator: AU,
        createState: cU,
        equals: zU ? zU(AU) : (FU = AU, function(UU, XU, zU, cU, yU, QU, AU) {
          return FU(UU, XU, AU)
        }),
        strict: yU
      })
    }

    function HU(UU) {
      var XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zU = -1;
      requestAnimationFrame((function cU(yU) {
        zU < 0 && (zU = yU), yU - zU > XU ? (UU(yU), zU = -1) : function(UU) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(UU)
        }(cU)
      }))
    }

    function MU(UU) {
      return MU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, MU(UU)
    }

    function vU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return VU(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return VU(UU, XU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function VU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function sU() {
      var UU = function() {
          return null
        },
        XU = !1,
        zU = function zU(cU) {
          if (!XU) {
            if (Array.isArray(cU)) {
              if (!cU.length) return;
              var yU = vU(cU),
                QU = yU[0],
                AU = yU.slice(1);
              return "number" === typeof QU ? void HU(zU.bind(null, AU), QU) : (zU(QU), void HU(zU.bind(null, AU)))
            }
            "object" === MU(cU) && UU(cU), "function" === typeof cU && cU()
          }
        };
      return {
        stop: function() {
          XU = !0
        },
        start: function(UU) {
          XU = !1, zU(UU)
        },
        subscribe: function(XU) {
          return UU = XU,
            function() {
              UU = function() {
                return null
              }
            }
        }
      }
    }

    function nU(UU) {
      return nU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, nU(UU)
    }

    function mU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function lU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? mU(Object(zU), !0).forEach((function(XU) {
          xU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : mU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function xU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" !== nU(UU) || null === UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" !== nU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" === nU(XU) ? XU : String(XU)
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }
    var JU = function(UU) {
        return UU
      },
      jU = function(UU, XU) {
        return Object.keys(XU).reduce((function(zU, cU) {
          return lU(lU({}, zU), {}, xU({}, cU, UU(cU, XU[cU])))
        }), {})
      },
      KU = function(UU, XU, zU) {
        return UU.map((function(UU) {
          return "".concat((cU = UU, cU.replace(/([A-Z])/g, (function(UU) {
            return "-".concat(UU.toLowerCase())
          }))), " ").concat(XU, "ms ").concat(zU);
          var cU
        })).join(",")
      };

    function bU(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        var zU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != zU) {
          var cU, yU, QU, AU, FU = [],
            oU = !0,
            DU = !1;
          try {
            if (QU = (zU = zU.call(UU)).next, 0 === XU) {
              if (Object(zU) !== zU) return;
              oU = !1
            } else
              for (; !(oU = (cU = QU.call(zU)).done) && (FU.push(cU.value), FU.length !== XU); oU = !0);
          } catch (UU) {
            DU = !0, yU = UU
          } finally {
            try {
              if (!oU && null != zU.return && (AU = zU.return(), Object(AU) !== AU)) return
            } finally {
              if (DU) throw yU
            }
          }
          return FU
        }
      }(UU, XU) || hU(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function TU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return UX(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || hU(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hU(UU, XU) {
      if (UU) {
        if ("string" === typeof UU) return UX(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        return "Object" === zU && UU.constructor && (zU = UU.constructor.name), "Map" === zU || "Set" === zU ? Array.from(UU) : "Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU) ? UX(UU, XU) : void 0
      }
    }

    function UX(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }
    var XX = 1e-4,
      zX = function(UU, XU) {
        return [0, 3 * UU, 3 * XU - 6 * UU, 3 * UU - 3 * XU + 1]
      },
      cX = function(UU, XU) {
        return UU.map((function(UU, zU) {
          return UU * Math.pow(XU, zU)
        })).reduce((function(UU, XU) {
          return UU + XU
        }))
      },
      yX = function(UU, XU) {
        return function(zU) {
          var cU = zX(UU, XU);
          return cX(cU, zU)
        }
      },
      QX = function() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        var cU = XU[0],
          yU = XU[1],
          QU = XU[2],
          AU = XU[3];
        if (1 === XU.length) switch (XU[0]) {
          case "linear":
            cU = 0, yU = 0, QU = 1, AU = 1;
            break;
          case "ease":
            cU = .25, yU = .1, QU = .25, AU = 1;
            break;
          case "ease-in":
            cU = .42, yU = 0, QU = 1, AU = 1;
            break;
          case "ease-out":
            cU = .42, yU = 0, QU = .58, AU = 1;
            break;
          case "ease-in-out":
            cU = 0, yU = 0, QU = .58, AU = 1;
            break;
          default:
            var FU = XU[0].split("(");
            if ("cubic-bezier" === FU[0] && 4 === FU[1].split(")")[0].split(",").length) {
              var oU = bU(FU[1].split(")")[0].split(",").map((function(UU) {
                return parseFloat(UU)
              })), 4);
              cU = oU[0], yU = oU[1], QU = oU[2], AU = oU[3]
            }
        } [cU, QU, yU, AU].every((function(UU) {
          return "number" === typeof UU && UU >= 0 && UU <= 1
        }));
        var DU, EU, YU = yX(cU, QU),
          NU = yX(yU, AU),
          IU = (DU = cU, EU = QU, function(UU) {
            var XU = zX(DU, EU),
              zU = [].concat(TU(XU.map((function(UU, XU) {
                return UU * XU
              })).slice(1)), [0]);
            return cX(zU, UU)
          }),
          pU = function(UU) {
            for (var XU, zU = UU > 1 ? 1 : UU, cU = zU, yU = 0; yU < 8; ++yU) {
              var QU = YU(cU) - zU,
                AU = IU(cU);
              if (Math.abs(QU - zU) < XX || AU < XX) return NU(cU);
              cU = (XU = cU - QU / AU) > 1 ? 1 : XU < 0 ? 0 : XU
            }
            return NU(cU)
          };
        return pU.isStepper = !1, pU
      },
      AX = function() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        var cU = XU[0];
        if ("string" === typeof cU) switch (cU) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return QX(cU);
          case "spring":
            return function() {
              var UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                XU = UU.stiff,
                zU = void 0 === XU ? 100 : XU,
                cU = UU.damping,
                yU = void 0 === cU ? 8 : cU,
                QU = UU.dt,
                AU = void 0 === QU ? 17 : QU,
                FU = function(UU, XU, cU) {
                  var QU = cU + (-(UU - XU) * zU - cU * yU) * AU / 1e3,
                    FU = cU * AU / 1e3 + UU;
                  return Math.abs(FU - XU) < XX && Math.abs(QU) < XX ? [XU, 0] : [FU, QU]
                };
              return FU.isStepper = !0, FU.dt = AU, FU
            }();
          default:
            if ("cubic-bezier" === cU.split("(")[0]) return QX(cU)
        }
        return "function" === typeof cU ? cU : null
      };

    function FX(UU) {
      return FX = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, FX(UU)
    }

    function oX(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return pX(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || IX(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function DX(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function EX(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? DX(Object(zU), !0).forEach((function(XU) {
          YX(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : DX(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function YX(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" !== FX(UU) || null === UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" !== FX(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" === FX(XU) ? XU : String(XU)
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function NX(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        var zU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != zU) {
          var cU, yU, QU, AU, FU = [],
            oU = !0,
            DU = !1;
          try {
            if (QU = (zU = zU.call(UU)).next, 0 === XU) {
              if (Object(zU) !== zU) return;
              oU = !1
            } else
              for (; !(oU = (cU = QU.call(zU)).done) && (FU.push(cU.value), FU.length !== XU); oU = !0);
          } catch (UU) {
            DU = !0, yU = UU
          } finally {
            try {
              if (!oU && null != zU.return && (AU = zU.return(), Object(AU) !== AU)) return
            } finally {
              if (DU) throw yU
            }
          }
          return FU
        }
      }(UU, XU) || IX(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IX(UU, XU) {
      if (UU) {
        if ("string" === typeof UU) return pX(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        return "Object" === zU && UU.constructor && (zU = UU.constructor.name), "Map" === zU || "Set" === zU ? Array.from(UU) : "Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU) ? pX(UU, XU) : void 0
      }
    }

    function pX(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }
    var aX = function(UU, XU, zU) {
        return UU + (XU - UU) * zU
      },
      tX = function(UU) {
        return UU.from !== UU.to
      },
      gX = function UU(XU, zU, cU) {
        var yU = jU((function(UU, zU) {
          if (tX(zU)) {
            var cU = NX(XU(zU.from, zU.to, zU.Et), 2),
              yU = cU[0],
              QU = cU[1];
            return EX(EX({}, zU), {}, {
              from: yU,
              Et: QU
            })
          }
          return zU
        }), zU);
        return cU < 1 ? jU((function(UU, XU) {
          return tX(XU) ? EX(EX({}, XU), {}, {
            Et: aX(XU.Et, yU[UU].Et, cU),
            from: aX(XU.from, yU[UU].from, cU)
          }) : XU
        }), zU) : UU(XU, yU, cU - 1)
      };
    const kX = function(UU, XU, zU, cU, yU) {
      var QU, AU, FU, oU, DU = (QU = UU, AU = XU, [Object.keys(QU), Object.keys(AU)].reduce((function(UU, XU) {
          return UU.filter((function(UU) {
            return XU.includes(UU)
          }))
        }))),
        EU = DU.reduce((function(zU, cU) {
          return EX(EX({}, zU), {}, YX({}, cU, [UU[cU], XU[cU]]))
        }), {}),
        YU = DU.reduce((function(zU, cU) {
          return EX(EX({}, zU), {}, YX({}, cU, {
            from: UU[cU],
            Et: 0,
            to: XU[cU]
          }))
        }), {}),
        NU = -1,
        IU = function() {
          return null
        };
      return IU = zU.isStepper ? function(cU) {
          FU || (FU = cU);
          var QU = (cU - FU) / zU.dt;
          YU = gX(zU, YU, QU), yU(EX(EX(EX({}, UU), XU), jU((function(UU, XU) {
            return XU.from
          }), YU))), FU = cU, Object.values(YU).filter(tX).length && (NU = requestAnimationFrame(IU))
        } : function(QU) {
          oU || (oU = QU);
          var AU = (QU - oU) / cU,
            FU = jU((function(UU, XU) {
              return aX.apply(void 0, oX(XU).concat([zU(AU)]))
            }), EU);
          if (yU(EX(EX(EX({}, UU), XU), FU)), AU < 1) NU = requestAnimationFrame(IU);
          else {
            var DU = jU((function(UU, XU) {
              return aX.apply(void 0, oX(XU).concat([zU(1)]))
            }), EU);
            yU(EX(EX(EX({}, UU), XU), DU))
          }
        },
        function() {
          return requestAnimationFrame(IU),
            function() {
              cancelAnimationFrame(NU)
            }
        }
    };

    function GX(UU) {
      return GX = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, GX(UU)
    }
    var BX = ["children", "gY", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function ZX(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU, cU, yU = {},
          QU = Object.keys(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || (yU[zU] = UU[zU]);
        return yU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function RX(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return PX(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return PX(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return PX(UU, XU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function PX(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function WX(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function dX(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? WX(Object(zU), !0).forEach((function(XU) {
          LX(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : WX(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function LX(UU, XU, zU) {
      return (XU = CX(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function eX(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, CX(cU.key), cU)
      }
    }

    function CX(UU) {
      var XU = function(UU, XU) {
        if ("object" !== GX(UU) || null === UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" !== GX(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" === GX(XU) ? XU : String(XU)
    }

    function wX(UU, XU) {
      return wX = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, wX(UU, XU)
    }

    function qX(UU) {
      var XU = function() {
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
        var zU, cU = rX(UU);
        if (XU) {
          var yU = rX(this).constructor;
          zU = Reflect.construct(cU, arguments, yU)
        } else zU = cU.apply(this, arguments);
        return OX(this, zU)
      }
    }

    function OX(UU, XU) {
      if (XU && ("object" === GX(XU) || "function" === typeof XU)) return XU;
      if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
      return SX(UU)
    }

    function SX(UU) {
      if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return UU
    }

    function rX(UU) {
      return rX = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, rX(UU)
    }
    var uX = function(UU) {
      ! function(UU, XU) {
        if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(XU && XU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), XU && wX(UU, XU)
      }(AU, UU);
      var XU, zU, yU, QU = qX(AU);

      function AU(UU, XU) {
        var zU;
        ! function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, AU);
        var cU = (zU = QU.call(this, UU, XU)).props,
          yU = cU.isActive,
          FU = cU.attributeName,
          oU = cU.from,
          DU = cU.to,
          EU = cU.steps,
          YU = cU.children,
          NU = cU.duration;
        if (zU.handleStyleChange = zU.handleStyleChange.bind(SX(zU)), zU.changeStyle = zU.changeStyle.bind(SX(zU)), !yU || NU <= 0) return zU.state = {
          style: {}
        }, "function" === typeof YU && (zU.state = {
          style: DU
        }), OX(zU);
        if (EU && EU.length) zU.state = {
          style: EU[0].style
        };
        else if (oU) {
          if ("function" === typeof YU) return zU.state = {
            style: oU
          }, OX(zU);
          zU.state = {
            style: FU ? LX({}, FU, oU) : oU
          }
        } else zU.state = {
          style: {}
        };
        return zU
      }
      return XU = AU, (zU = [{
        key: "componentDidMount",
        value: function() {
          var UU = this.props,
            XU = UU.isActive,
            zU = UU.canBegin;
          this.mounted = !0, XU && zU && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(UU) {
          var XU = this.props,
            zU = XU.isActive,
            cU = XU.canBegin,
            yU = XU.attributeName,
            QU = XU.shouldReAnimate,
            AU = XU.to,
            FU = XU.from,
            oU = this.state.style;
          if (cU)
            if (zU) {
              if (!(fU(UU.to, AU) && UU.canBegin && UU.isActive)) {
                var DU = !UU.canBegin || !UU.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var EU = DU || QU ? FU : UU.to;
                if (this.state && oU) {
                  var YU = {
                    style: yU ? LX({}, yU, EU) : EU
                  };
                  (yU && oU[yU] !== EU || !yU && oU !== EU) && this.setState(YU)
                }
                this.runAnimation(dX(dX({}, this.props), {}, {
                  from: EU,
                  gY: 0
                }))
              }
            } else {
              var NU = {
                style: yU ? LX({}, yU, AU) : AU
              };
              this.state && oU && (yU && oU[yU] !== AU || !yU && oU !== AU) && this.setState(NU)
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
          var XU = this,
            zU = UU.from,
            cU = UU.to,
            yU = UU.duration,
            QU = UU.easing,
            AU = UU.gY,
            FU = UU.onAnimationEnd,
            oU = UU.onAnimationStart,
            DU = kX(zU, cU, AX(QU), yU, this.changeStyle);
          this.manager.start([oU, AU, function() {
            XU.stopJSAnimation = DU()
          }, yU, FU])
        }
      }, {
        key: "runStepAnimation",
        value: function(UU) {
          var XU = this,
            zU = UU.steps,
            cU = UU.gY,
            yU = UU.onAnimationStart,
            QU = zU[0],
            AU = QU.style,
            FU = QU.duration,
            oU = void 0 === FU ? 0 : FU;
          return this.manager.start([yU].concat(RX(zU.reduce((function(UU, cU, yU) {
            if (0 === yU) return UU;
            var QU = cU.duration,
              AU = cU.easing,
              FU = void 0 === AU ? "ease" : AU,
              oU = cU.style,
              DU = cU.properties,
              EU = cU.onAnimationEnd,
              YU = yU > 0 ? zU[yU - 1] : cU,
              NU = DU || Object.keys(oU);
            if ("function" === typeof FU || "spring" === FU) return [].concat(RX(UU), [XU.runJSAnimation.bind(XU, {
              from: YU.style,
              to: oU,
              duration: QU,
              easing: FU
            }), QU]);
            var IU = KU(NU, QU, FU),
              pU = dX(dX(dX({}, YU.style), oU), {}, {
                transition: IU
              });
            return [].concat(RX(UU), [pU, QU, EU]).filter(JU)
          }), [AU, Math.max(oU, cU)])), [UU.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(UU) {
          this.manager || (this.manager = sU());
          var XU = UU.gY,
            zU = UU.duration,
            cU = UU.attributeName,
            yU = UU.to,
            QU = UU.easing,
            AU = UU.onAnimationStart,
            FU = UU.onAnimationEnd,
            oU = UU.steps,
            DU = UU.children,
            EU = this.manager;
          if (this.unSubscribe = EU.subscribe(this.handleStyleChange), "function" !== typeof QU && "function" !== typeof DU && "spring" !== QU)
            if (oU.length > 1) this.runStepAnimation(UU);
            else {
              var YU = cU ? LX({}, cU, yU) : yU,
                NU = KU(Object.keys(YU), zU, QU);
              EU.start([AU, XU, dX(dX({}, YU), {}, {
                transition: NU
              }), zU, FU])
            }
          else this.runJSAnimation(UU)
        }
      }, {
        key: "render",
        value: function() {
          var UU = this.props,
            XU = UU.children,
            zU = (UU.gY, UU.duration),
            yU = (UU.attributeName, UU.easing, UU.isActive),
            QU = (UU.steps, UU.from, UU.to, UU.canBegin, UU.onAnimationEnd, UU.shouldReAnimate, UU.onAnimationReStart, ZX(UU, BX)),
            AU = cU.Children.count(XU),
            FU = this.state.style;
          if ("function" === typeof XU) return XU(FU);
          if (!yU || 0 === AU || zU <= 0) return XU;
          var oU = function(UU) {
            var XU = UU.props,
              zU = XU.style,
              yU = void 0 === zU ? {} : zU,
              AU = XU.className;
            return (0, cU.cloneElement)(UU, dX(dX({}, QU), {}, {
              style: dX(dX({}, yU), FU),
              className: AU
            }))
          };
          return 1 === AU ? oU(cU.Children.only(XU)) : cU.createElement("div", null, cU.Children.map(XU, (function(UU) {
            return oU(UU)
          })))
        }
      }]) && eX(XU.prototype, zU), yU && eX(XU, yU), Object.defineProperty(XU, "prototype", {
        writable: !1
      }), AU
    }(cU.PureComponent);
    uX.displayName = "Animate", uX.defaultProps = {
      gY: 0,
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
    }, uX.propTypes = {
      from: QU().oneOfType([QU().object, QU().string]),
      to: QU().oneOfType([QU().object, QU().string]),
      attributeName: QU().string,
      duration: QU().number,
      gY: QU().number,
      easing: QU().oneOfType([QU().string, QU().func]),
      steps: QU().arrayOf(QU().shape({
        duration: QU().number.isRequired,
        style: QU().object.isRequired,
        easing: QU().oneOfType([QU().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), QU().func]),
        properties: QU().arrayOf("string"),
        onAnimationEnd: QU().func
      })),
      children: QU().oneOfType([QU().node, QU().func]),
      isActive: QU().bool,
      canBegin: QU().bool,
      onAnimationEnd: QU().func,
      shouldReAnimate: QU().bool,
      onAnimationStart: QU().func,
      onAnimationReStart: QU().func
    };
    const fX = uX
  },
  6955: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => vU
    });
    var cU, yU = zU(61),
      QU = zU(5657),
      AU = zU(6729),
      FU = zU(5845),
      oU = zU.n(FU),
      DU = zU(6766),
      EU = zU.n(DU),
      YU = zU(5987),
      NU = zU.n(YU),
      IU = zU(5767),
      pU = zU.n(IU),
      aU = zU(6797),
      tU = zU.n(aU),
      gU = zU(6948),
      kU = zU(6719),
      GU = zU(6576),
      BU = zU(6881),
      ZU = zU(6588),
      RU = zU(5746),
      PU = zU(6752),
      WU = zU(5998),
      dU = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      LU = ["key"];

    function eU(UU) {
      return eU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, eU(UU)
    }

    function CU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function wU() {
      return wU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, wU.apply(this, arguments)
    }

    function qU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function OU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? qU(Object(zU), !0).forEach((function(XU) {
          HU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : qU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function SU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, MU(cU.key), cU)
      }
    }

    function rU(UU, XU, zU) {
      return XU = fU(XU),
        function(UU, XU) {
          if (XU && ("object" === eU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, uU() ? Reflect.construct(XU, zU || [], fU(UU).constructor) : XU.apply(UU, zU))
    }

    function uU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (uU = function() {
        return !!UU
      })()
    }

    function fU(UU) {
      return fU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, fU(UU)
    }

    function iU(UU, XU) {
      return iU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, iU(UU, XU)
    }

    function HU(UU, XU, zU) {
      return (XU = MU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function MU(UU) {
      var XU = function(UU, XU) {
        if ("object" != eU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != eU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == eU(XU) ? XU : XU + ""
    }
    var vU = function(UU) {
      function XU() {
        var UU;
        ! function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, XU);
        for (var zU = arguments.length, cU = new Array(zU), yU = 0; yU < zU; yU++) cU[yU] = arguments[yU];
        return HU(UU = rU(this, XU, [].concat(cU)), "state", {
          isAnimationFinished: !0
        }), HU(UU, "id", (0, RU.J)("recharts-area-")), HU(UU, "handleAnimationEnd", (function() {
          var XU = UU.props.onAnimationEnd;
          UU.setState({
            isAnimationFinished: !0
          }), oU()(XU) && XU()
        })), HU(UU, "handleAnimationStart", (function() {
          var XU = UU.props.onAnimationStart;
          UU.setState({
            isAnimationFinished: !1
          }), oU()(XU) && XU()
        })), UU
      }
      return function(UU, XU) {
        if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(XU && XU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), XU && iU(UU, XU)
      }(XU, UU), zU = XU, cU = [{
        key: "renderDots",
        value: function(UU, zU, cU) {
          var QU = this.props.isAnimationActive,
            AU = this.state.isAnimationFinished;
          if (QU && !AU) return null;
          var FU = this.props,
            oU = FU.dot,
            DU = FU.points,
            EU = FU.dataKey,
            YU = (0, WU.c)(this.props, !1),
            NU = (0, WU.c)(oU, !0),
            IU = DU.map((function(UU, zU) {
              var cU = OU(OU(OU({
                key: "dot-".concat(zU),
                r: 3
              }, YU), NU), {}, {
                index: zU,
                cx: UU.x,
                cy: UU.y,
                dataKey: EU,
                value: UU.value,
                payload: UU.payload,
                points: DU
              });
              return XU.renderDotItem(oU, cU)
            })),
            pU = {
              clipPath: UU ? "url(#clipPath-".concat(zU ? "" : "dots-").concat(cU, ")") : null
            };
          return yU.createElement(GU.e, wU({
            className: "recharts-area-dots"
          }, pU), IU)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(UU) {
          var XU = this.props,
            zU = XU.baseLine,
            cU = XU.points,
            QU = XU.strokeWidth,
            AU = cU[0].x,
            FU = cU[cU.length - 1].x,
            oU = UU * Math.abs(AU - FU),
            DU = EU()(cU.map((function(UU) {
              return UU.y || 0
            })));
          return (0, RU.B)(zU) && "number" === typeof zU ? DU = Math.max(zU, DU) : zU && Array.isArray(zU) && zU.length && (DU = Math.max(EU()(zU.map((function(UU) {
            return UU.y || 0
          }))), DU)), (0, RU.B)(DU) ? yU.createElement("rect", {
            x: AU < FU ? AU : AU - oU,
            y: 0,
            width: oU,
            height: Math.floor(DU + (QU ? parseInt("".concat(QU), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(UU) {
          var XU = this.props,
            zU = XU.baseLine,
            cU = XU.points,
            QU = XU.strokeWidth,
            AU = cU[0].y,
            FU = cU[cU.length - 1].y,
            oU = UU * Math.abs(AU - FU),
            DU = EU()(cU.map((function(UU) {
              return UU.x || 0
            })));
          return (0, RU.B)(zU) && "number" === typeof zU ? DU = Math.max(zU, DU) : zU && Array.isArray(zU) && zU.length && (DU = Math.max(EU()(zU.map((function(UU) {
            return UU.x || 0
          }))), DU)), (0, RU.B)(DU) ? yU.createElement("rect", {
            x: 0,
            y: AU < FU ? AU : AU - oU,
            width: DU + (QU ? parseInt("".concat(QU), 10) : 1),
            height: Math.floor(oU)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(UU) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(UU) : this.renderHorizontalRect(UU)
        }
      }, {
        key: "renderAreaStatically",
        value: function(UU, XU, zU, cU) {
          var QU = this.props,
            AU = QU.layout,
            FU = QU.type,
            oU = QU.stroke,
            DU = QU.connectNulls,
            EU = QU.isRange,
            YU = (QU.ref, CU(QU, dU));
          return yU.createElement(GU.e, {
            clipPath: zU ? "url(#clipPath-".concat(cU, ")") : null
          }, yU.createElement(gU.d, wU({}, (0, WU.c)(YU, !0), {
            points: UU,
            connectNulls: DU,
            type: FU,
            baseLine: XU,
            layout: AU,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== oU && yU.createElement(gU.d, wU({}, (0, WU.c)(this.props, !1), {
            className: "recharts-area-curve",
            layout: AU,
            type: FU,
            connectNulls: DU,
            fill: "none",
            points: UU
          })), "none" !== oU && EU && yU.createElement(gU.d, wU({}, (0, WU.c)(this.props, !1), {
            className: "recharts-area-curve",
            layout: AU,
            type: FU,
            connectNulls: DU,
            fill: "none",
            points: XU
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(UU, XU) {
          var zU = this,
            cU = this.props,
            QU = cU.points,
            FU = cU.baseLine,
            oU = cU.isAnimationActive,
            DU = cU.animationBegin,
            EU = cU.animationDuration,
            YU = cU.animationEasing,
            IU = cU.animationId,
            aU = this.state,
            tU = aU.prevPoints,
            gU = aU.prevBaseLine;
          return yU.createElement(AU.e, {
            gY: DU,
            duration: EU,
            isActive: oU,
            easing: YU,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(IU),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(cU) {
            var AU = cU.t;
            if (tU) {
              var oU, DU = tU.length / QU.length,
                EU = QU.map((function(UU, XU) {
                  var zU = Math.floor(XU * DU);
                  if (tU[zU]) {
                    var cU = tU[zU],
                      yU = (0, RU.x)(cU.x, UU.x),
                      QU = (0, RU.x)(cU.y, UU.y);
                    return OU(OU({}, UU), {}, {
                      x: yU(AU),
                      y: QU(AU)
                    })
                  }
                  return UU
                }));
              return oU = (0, RU.B)(FU) && "number" === typeof FU ? (0, RU.x)(gU, FU)(AU) : NU()(FU) || pU()(FU) ? (0, RU.x)(gU, 0)(AU) : FU.map((function(UU, XU) {
                var zU = Math.floor(XU * DU);
                if (gU[zU]) {
                  var cU = gU[zU],
                    yU = (0, RU.x)(cU.x, UU.x),
                    QU = (0, RU.x)(cU.y, UU.y);
                  return OU(OU({}, UU), {}, {
                    x: yU(AU),
                    y: QU(AU)
                  })
                }
                return UU
              })), zU.renderAreaStatically(EU, oU, UU, XU)
            }
            return yU.createElement(GU.e, null, yU.createElement("defs", null, yU.createElement("clipPath", {
              id: "animationClipPath-".concat(XU)
            }, zU.renderClipRect(AU))), yU.createElement(GU.e, {
              clipPath: "url(#animationClipPath-".concat(XU, ")")
            }, zU.renderAreaStatically(QU, FU, UU, XU)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(UU, XU) {
          var zU = this.props,
            cU = zU.points,
            yU = zU.baseLine,
            QU = zU.isAnimationActive,
            AU = this.state,
            FU = AU.prevPoints,
            oU = AU.prevBaseLine,
            DU = AU.totalLength;
          return QU && cU && cU.length && (!FU && DU > 0 || !tU()(FU, cU) || !tU()(oU, yU)) ? this.renderAreaWithAnimation(UU, XU) : this.renderAreaStatically(cU, yU, UU, XU)
        }
      }, {
        key: "render",
        value: function() {
          var UU, XU = this.props,
            zU = XU.hide,
            cU = XU.dot,
            AU = XU.points,
            FU = XU.className,
            oU = XU.top,
            DU = XU.left,
            EU = XU.xAxis,
            YU = XU.yAxis,
            IU = XU.width,
            pU = XU.height,
            aU = XU.isAnimationActive,
            tU = XU.id;
          if (zU || !AU || !AU.length) return null;
          var gU = this.state.isAnimationFinished,
            kU = 1 === AU.length,
            ZU = (0, QU.c)("recharts-area", FU),
            RU = EU && EU.allowDataOverflow,
            PU = YU && YU.allowDataOverflow,
            dU = RU || PU,
            LU = NU()(tU) ? this.id : tU,
            eU = null !== (UU = (0, WU.c)(cU, !1)) && void 0 !== UU ? UU : {
              r: 3,
              strokeWidth: 2
            },
            CU = eU.r,
            wU = void 0 === CU ? 3 : CU,
            qU = eU.strokeWidth,
            OU = void 0 === qU ? 2 : qU,
            SU = ((0, WU.i)(cU) ? cU : {}).clipDot,
            rU = void 0 === SU || SU,
            uU = 2 * wU + OU;
          return yU.createElement(GU.e, {
            className: ZU
          }, RU || PU ? yU.createElement("defs", null, yU.createElement("clipPath", {
            id: "clipPath-".concat(LU)
          }, yU.createElement("rect", {
            x: RU ? DU : DU - IU / 2,
            y: PU ? oU : oU - pU / 2,
            width: RU ? IU : 2 * IU,
            height: PU ? pU : 2 * pU
          })), !rU && yU.createElement("clipPath", {
            id: "clipPath-dots-".concat(LU)
          }, yU.createElement("rect", {
            x: DU - uU / 2,
            y: oU - uU / 2,
            width: IU + uU,
            height: pU + uU
          }))) : null, kU ? null : this.renderArea(dU, LU), (cU || kU) && this.renderDots(dU, rU, LU), (!aU || gU) && BU.b.renderCallByParent(this.props, AU))
        }
      }], FU = [{
        key: "getDerivedStateFromProps",
        value: function(UU, XU) {
          return UU.animationId !== XU.prevAnimationId ? {
            prevAnimationId: UU.animationId,
            curPoints: UU.points,
            curBaseLine: UU.baseLine,
            prevPoints: XU.curPoints,
            prevBaseLine: XU.curBaseLine
          } : UU.points !== XU.curPoints || UU.baseLine !== XU.curBaseLine ? {
            curPoints: UU.points,
            curBaseLine: UU.baseLine
          } : null
        }
      }], cU && SU(zU.prototype, cU), FU && SU(zU, FU), Object.defineProperty(zU, "prototype", {
        writable: !1
      }), zU;
      var zU, cU, FU
    }(yU.PureComponent);
    cU = vU, HU(vU, "displayName", "Area"), HU(vU, "defaultProps", {
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
      isAnimationActive: !ZU.e.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), HU(vU, "getBaseValue", (function(UU, XU, zU, cU) {
      var yU = UU.layout,
        QU = UU.baseValue,
        AU = XU.props.baseValue,
        FU = null !== AU && void 0 !== AU ? AU : QU;
      if ((0, RU.B)(FU) && "number" === typeof FU) return FU;
      var oU = "horizontal" === yU ? cU : zU,
        DU = oU.scale.domain();
      if ("number" === oU.type) {
        var EU = Math.max(DU[0], DU[1]),
          YU = Math.min(DU[0], DU[1]);
        return "dataMin" === FU ? YU : "dataMax" === FU || EU < 0 ? EU : Math.max(Math.min(DU[0], DU[1]), 0)
      }
      return "dataMin" === FU ? DU[0] : "dataMax" === FU ? DU[1] : DU[0]
    })), HU(vU, "getComposedData", (function(UU) {
      var XU, zU = UU.props,
        yU = UU.item,
        QU = UU.xAxis,
        AU = UU.yAxis,
        FU = UU.xAxisTicks,
        oU = UU.yAxisTicks,
        DU = UU.bandSize,
        EU = UU.dataKey,
        YU = UU.stackedData,
        NU = UU.dataStartIndex,
        IU = UU.displayedData,
        pU = UU.offset,
        aU = zU.layout,
        tU = YU && YU.length,
        gU = cU.getBaseValue(zU, yU, QU, AU),
        kU = "horizontal" === aU,
        GU = !1,
        BU = IU.map((function(UU, XU) {
          var zU;
          tU ? zU = YU[NU + XU] : (zU = (0, PU.db)(UU, EU), Array.isArray(zU) ? GU = !0 : zU = [gU, zU]);
          var cU = null == zU[1] || tU && null == (0, PU.db)(UU, EU);
          return kU ? {
            x: (0, PU.C)({
              axis: QU,
              ticks: FU,
              bandSize: DU,
              entry: UU,
              index: XU
            }),
            y: cU ? null : AU.scale(zU[1]),
            value: zU,
            payload: UU
          } : {
            x: cU ? null : QU.scale(zU[1]),
            y: (0, PU.C)({
              axis: AU,
              ticks: oU,
              bandSize: DU,
              entry: UU,
              index: XU
            }),
            value: zU,
            payload: UU
          }
        }));
      return XU = tU || GU ? BU.map((function(UU) {
        var XU = Array.isArray(UU.value) ? UU.value[0] : null;
        return kU ? {
          x: UU.x,
          y: null != XU && null != UU.y ? AU.scale(XU) : null
        } : {
          x: null != XU ? QU.scale(XU) : null,
          y: UU.y
        }
      })) : kU ? AU.scale(gU) : QU.scale(gU), OU({
        points: BU,
        baseLine: XU,
        layout: aU,
        isRange: GU
      }, pU)
    })), HU(vU, "renderDotItem", (function(UU, XU) {
      var zU;
      if (yU.isValidElement(UU)) zU = yU.cloneElement(UU, XU);
      else if (oU()(UU)) zU = UU(XU);
      else {
        var cU = (0, QU.c)("recharts-area-dot", "boolean" !== typeof UU ? UU.className : ""),
          AU = XU.key,
          FU = CU(XU, LU);
        zU = yU.createElement(kU.d, wU({}, FU, {
          key: AU,
          className: cU
        }))
      }
      return zU
    }))
  },
  6864: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => lU
    });
    var cU = zU(61),
      yU = zU(5657),
      QU = zU(6729),
      AU = zU(6797),
      FU = zU.n(AU),
      oU = zU(5987),
      DU = zU.n(oU),
      EU = zU(6576),
      YU = zU(6805),
      NU = zU(6873),
      IU = zU(6881),
      pU = zU(5746),
      aU = zU(5998),
      tU = zU(6588),
      gU = zU(6752),
      kU = zU(6019),
      GU = zU(6565),
      BU = zU(6892),
      ZU = ["x", "y"];

    function RU(UU) {
      return RU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, RU(UU)
    }

    function PU() {
      return PU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, PU.apply(this, arguments)
    }

    function WU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function dU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? WU(Object(zU), !0).forEach((function(XU) {
          LU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : WU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function LU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != RU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != RU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == RU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function eU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function CU(UU, XU) {
      var zU = UU.x,
        cU = UU.y,
        yU = eU(UU, ZU),
        QU = "".concat(zU),
        AU = parseInt(QU, 10),
        FU = "".concat(cU),
        oU = parseInt(FU, 10),
        DU = "".concat(XU.height || yU.height),
        EU = parseInt(DU, 10),
        YU = "".concat(XU.width || yU.width),
        NU = parseInt(YU, 10);
      return dU(dU(dU(dU(dU({}, XU), yU), AU ? {
        x: AU
      } : {}), oU ? {
        y: oU
      } : {}), {}, {
        height: EU,
        width: NU,
        name: XU.name,
        radius: XU.radius
      })
    }

    function wU(UU) {
      return cU.createElement(BU.d, PU({
        shapeType: "rectangle",
        propTransformer: CU,
        activeClassName: "recharts-active-bar"
      }, UU))
    }
    var qU, OU = ["value", "background"];

    function SU(UU) {
      return SU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, SU(UU)
    }

    function rU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function uU() {
      return uU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, uU.apply(this, arguments)
    }

    function fU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function iU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? fU(Object(zU), !0).forEach((function(XU) {
          nU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : fU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function HU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, mU(cU.key), cU)
      }
    }

    function MU(UU, XU, zU) {
      return XU = VU(XU),
        function(UU, XU) {
          if (XU && ("object" === SU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, vU() ? Reflect.construct(XU, zU || [], VU(UU).constructor) : XU.apply(UU, zU))
    }

    function vU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (vU = function() {
        return !!UU
      })()
    }

    function VU(UU) {
      return VU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, VU(UU)
    }

    function sU(UU, XU) {
      return sU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, sU(UU, XU)
    }

    function nU(UU, XU, zU) {
      return (XU = mU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function mU(UU) {
      var XU = function(UU, XU) {
        if ("object" != SU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != SU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == SU(XU) ? XU : XU + ""
    }
    var lU = function(UU) {
      function XU() {
        var UU;
        ! function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, XU);
        for (var zU = arguments.length, cU = new Array(zU), yU = 0; yU < zU; yU++) cU[yU] = arguments[yU];
        return nU(UU = MU(this, XU, [].concat(cU)), "state", {
          isAnimationFinished: !1
        }), nU(UU, "id", (0, pU.J)("recharts-bar-")), nU(UU, "handleAnimationEnd", (function() {
          var XU = UU.props.onAnimationEnd;
          UU.setState({
            isAnimationFinished: !0
          }), XU && XU()
        })), nU(UU, "handleAnimationStart", (function() {
          var XU = UU.props.onAnimationStart;
          UU.setState({
            isAnimationFinished: !1
          }), XU && XU()
        })), UU
      }
      return function(UU, XU) {
        if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(XU && XU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), XU && sU(UU, XU)
      }(XU, UU), zU = XU, AU = [{
        key: "renderRectanglesStatically",
        value: function(UU) {
          var XU = this,
            zU = this.props,
            yU = zU.shape,
            QU = zU.dataKey,
            AU = zU.activeIndex,
            FU = zU.activeBar,
            oU = (0, aU.c)(this.props, !1);
          return UU && UU.map((function(UU, zU) {
            var DU = zU === AU,
              YU = DU ? FU : yU,
              NU = iU(iU(iU({}, oU), UU), {}, {
                isActive: DU,
                option: YU,
                index: zU,
                dataKey: QU,
                onAnimationStart: XU.handleAnimationStart,
                onAnimationEnd: XU.handleAnimationEnd
              });
            return cU.createElement(EU.e, uU({
              className: "recharts-bar-rectangle"
            }, (0, kU.q)(XU.props, UU, zU), {
              key: "rectangle-".concat(null === UU || void 0 === UU ? void 0 : UU.x, "-").concat(null === UU || void 0 === UU ? void 0 : UU.y, "-").concat(null === UU || void 0 === UU ? void 0 : UU.value, "-").concat(zU)
            }), cU.createElement(wU, NU))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var UU = this,
            XU = this.props,
            zU = XU.data,
            yU = XU.layout,
            AU = XU.isAnimationActive,
            FU = XU.animationBegin,
            oU = XU.animationDuration,
            DU = XU.animationEasing,
            YU = XU.animationId,
            NU = this.state.prevData;
          return cU.createElement(QU.e, {
            gY: FU,
            duration: oU,
            isActive: AU,
            easing: DU,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(YU),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(XU) {
            var QU = XU.t,
              AU = zU.map((function(UU, XU) {
                var zU = NU && NU[XU];
                if (zU) {
                  var cU = (0, pU.x)(zU.x, UU.x),
                    AU = (0, pU.x)(zU.y, UU.y),
                    FU = (0, pU.x)(zU.width, UU.width),
                    oU = (0, pU.x)(zU.height, UU.height);
                  return iU(iU({}, UU), {}, {
                    x: cU(QU),
                    y: AU(QU),
                    width: FU(QU),
                    height: oU(QU)
                  })
                }
                if ("horizontal" === yU) {
                  var DU = (0, pU.x)(0, UU.height)(QU);
                  return iU(iU({}, UU), {}, {
                    y: UU.y + UU.height - DU,
                    height: DU
                  })
                }
                var EU = (0, pU.x)(0, UU.width)(QU);
                return iU(iU({}, UU), {}, {
                  width: EU
                })
              }));
            return cU.createElement(EU.e, null, UU.renderRectanglesStatically(AU))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var UU = this.props,
            XU = UU.data,
            zU = UU.isAnimationActive,
            cU = this.state.prevData;
          return !(zU && XU && XU.length) || cU && FU()(cU, XU) ? this.renderRectanglesStatically(XU) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var UU = this,
            XU = this.props,
            zU = XU.data,
            yU = XU.dataKey,
            QU = XU.activeIndex,
            AU = (0, aU.c)(this.props.background, !1);
          return zU.map((function(XU, zU) {
            XU.value;
            var FU = XU.background,
              oU = rU(XU, OU);
            if (!FU) return null;
            var DU = iU(iU(iU(iU(iU({}, oU), {}, {
              fill: "#eee"
            }, FU), AU), (0, kU.q)(UU.props, XU, zU)), {}, {
              onAnimationStart: UU.handleAnimationStart,
              onAnimationEnd: UU.handleAnimationEnd,
              dataKey: yU,
              index: zU,
              className: "recharts-bar-background-rectangle"
            });
            return cU.createElement(wU, uU({
              key: "background-bar-".concat(zU),
              option: UU.props.background,
              isActive: zU === QU
            }, DU))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(UU, XU) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var zU = this.props,
            yU = zU.data,
            QU = zU.xAxis,
            AU = zU.yAxis,
            FU = zU.layout,
            oU = zU.children,
            DU = (0, aU.d)(oU, YU.b);
          if (!DU) return null;
          var NU = "vertical" === FU ? yU[0].height / 2 : yU[0].width / 2,
            IU = function(UU, XU) {
              var zU = Array.isArray(UU.value) ? UU.value[1] : UU.value;
              return {
                x: UU.x,
                y: UU.y,
                value: zU,
                errorVal: (0, gU.db)(UU, XU)
              }
            },
            pU = {
              clipPath: UU ? "url(#clipPath-".concat(XU, ")") : null
            };
          return cU.createElement(EU.e, pU, DU.map((function(UU) {
            return cU.cloneElement(UU, {
              key: "error-bar-".concat(XU, "-").concat(UU.props.dataKey),
              data: yU,
              xAxis: QU,
              yAxis: AU,
              layout: FU,
              offset: NU,
              dataPointFormatter: IU
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var UU = this.props,
            XU = UU.hide,
            zU = UU.data,
            QU = UU.className,
            AU = UU.xAxis,
            FU = UU.yAxis,
            oU = UU.left,
            YU = UU.top,
            NU = UU.width,
            pU = UU.height,
            aU = UU.isAnimationActive,
            tU = UU.background,
            gU = UU.id;
          if (XU || !zU || !zU.length) return null;
          var kU = this.state.isAnimationFinished,
            GU = (0, yU.c)("recharts-bar", QU),
            BU = AU && AU.allowDataOverflow,
            ZU = FU && FU.allowDataOverflow,
            RU = BU || ZU,
            PU = DU()(gU) ? this.id : gU;
          return cU.createElement(EU.e, {
            className: GU
          }, BU || ZU ? cU.createElement("defs", null, cU.createElement("clipPath", {
            id: "clipPath-".concat(PU)
          }, cU.createElement("rect", {
            x: BU ? oU : oU - NU / 2,
            y: ZU ? YU : YU - pU / 2,
            width: BU ? NU : 2 * NU,
            height: ZU ? pU : 2 * pU
          }))) : null, cU.createElement(EU.e, {
            className: "recharts-bar-rectangles",
            clipPath: RU ? "url(#clipPath-".concat(PU, ")") : null
          }, tU ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(RU, PU), (!aU || kU) && IU.b.renderCallByParent(this.props, zU))
        }
      }], oU = [{
        key: "getDerivedStateFromProps",
        value: function(UU, XU) {
          return UU.animationId !== XU.prevAnimationId ? {
            prevAnimationId: UU.animationId,
            curData: UU.data,
            prevData: XU.curData
          } : UU.data !== XU.curData ? {
            curData: UU.data
          } : null
        }
      }], AU && HU(zU.prototype, AU), oU && HU(zU, oU), Object.defineProperty(zU, "prototype", {
        writable: !1
      }), zU;
      var zU, AU, oU
    }(cU.PureComponent);
    qU = lU, nU(lU, "displayName", "Bar"), nU(lU, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !tU.e.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), nU(lU, "getComposedData", (function(UU) {
      var XU = UU.props,
        zU = UU.item,
        cU = UU.barPosition,
        yU = UU.bandSize,
        QU = UU.xAxis,
        AU = UU.yAxis,
        FU = UU.xAxisTicks,
        oU = UU.yAxisTicks,
        DU = UU.stackedData,
        EU = UU.dataStartIndex,
        YU = UU.displayedData,
        IU = UU.offset,
        tU = (0, gU.k)(cU, zU);
      if (!tU) return null;
      var kU = XU.layout,
        BU = zU.type.defaultProps,
        ZU = void 0 !== BU ? iU(iU({}, BU), zU.props) : zU.props,
        RU = ZU.dataKey,
        PU = ZU.children,
        WU = ZU.minPointSize,
        dU = "horizontal" === kU ? AU : QU,
        LU = DU ? dU.scale.domain() : null,
        eU = (0, gU.w)({
          numericAxis: dU
        }),
        CU = (0, aU.d)(PU, NU.d),
        wU = YU.map((function(UU, XU) {
          var cU, YU, NU, IU, aU, BU;
          DU ? cU = (0, gU.pb)(DU[EU + XU], LU) : (cU = (0, gU.db)(UU, RU), Array.isArray(cU) || (cU = [eU, cU]));
          var ZU = function(UU) {
            var XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(zU, cU) {
              if ("number" === typeof UU) return UU;
              var yU = (0, pU.B)(zU) || (0, pU.y)(zU);
              return yU ? UU(zU, cU) : (yU || (0, GU.d)(!1), XU)
            }
          }(WU, qU.defaultProps.minPointSize)(cU[1], XU);
          if ("horizontal" === kU) {
            var PU, dU = [AU.scale(cU[0]), AU.scale(cU[1])],
              wU = dU[0],
              OU = dU[1];
            YU = (0, gU.y)({
              axis: QU,
              ticks: FU,
              bandSize: yU,
              offset: tU.offset,
              entry: UU,
              index: XU
            }), NU = null !== (PU = null !== OU && void 0 !== OU ? OU : wU) && void 0 !== PU ? PU : void 0, IU = tU.size;
            var SU = wU - OU;
            if (aU = Number.isNaN(SU) ? 0 : SU, BU = {
                x: YU,
                y: AU.y,
                width: IU,
                height: AU.height
              }, Math.abs(ZU) > 0 && Math.abs(aU) < Math.abs(ZU)) {
              var rU = (0, pU.H)(aU || ZU) * (Math.abs(ZU) - Math.abs(aU));
              NU -= rU, aU += rU
            }
          } else {
            var uU = [QU.scale(cU[0]), QU.scale(cU[1])],
              fU = uU[0],
              HU = uU[1];
            if (YU = fU, NU = (0, gU.y)({
                axis: AU,
                ticks: oU,
                bandSize: yU,
                offset: tU.offset,
                entry: UU,
                index: XU
              }), IU = HU - fU, aU = tU.size, BU = {
                x: QU.x,
                y: NU,
                width: QU.width,
                height: aU
              }, Math.abs(ZU) > 0 && Math.abs(IU) < Math.abs(ZU)) IU += (0, pU.H)(IU || ZU) * (Math.abs(ZU) - Math.abs(IU))
          }
          return iU(iU(iU({}, UU), {}, {
            x: YU,
            y: NU,
            width: IU,
            height: aU,
            value: DU ? cU : cU[1],
            payload: UU,
            background: BU
          }, CU && CU[XU] && CU[XU].props), {}, {
            tooltipPayload: [(0, gU.bb)(zU, UU)],
            tooltipPosition: {
              x: YU + IU / 2,
              y: NU + aU / 2
            }
          })
        }));
      return iU({
        data: wU,
        layout: kU
      }, IU)
    }))
  },
  6970: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => SU
    });
    var cU = zU(61),
      yU = zU(5845),
      QU = zU.n(yU),
      AU = zU(5781),
      FU = zU.n(AU),
      oU = zU(5657),
      DU = zU(6014),
      EU = zU(6576),
      YU = zU(6735),
      NU = zU(6820),
      IU = zU(5746),
      pU = zU(6019),
      aU = zU(5998),
      tU = zU(6978),
      gU = ["viewBox"],
      kU = ["viewBox"],
      GU = ["ticks"];

    function BU(UU) {
      return BU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, BU(UU)
    }

    function ZU() {
      return ZU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, ZU.apply(this, arguments)
    }

    function RU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function PU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? RU(Object(zU), !0).forEach((function(XU) {
          qU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : RU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function WU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function dU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, OU(cU.key), cU)
      }
    }

    function LU(UU, XU, zU) {
      return XU = CU(XU),
        function(UU, XU) {
          if (XU && ("object" === BU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, eU() ? Reflect.construct(XU, zU || [], CU(UU).constructor) : XU.apply(UU, zU))
    }

    function eU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (eU = function() {
        return !!UU
      })()
    }

    function CU(UU) {
      return CU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, CU(UU)
    }

    function wU(UU, XU) {
      return wU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, wU(UU, XU)
    }

    function qU(UU, XU, zU) {
      return (XU = OU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function OU(UU) {
      var XU = function(UU, XU) {
        if ("object" != BU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != BU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == BU(XU) ? XU : XU + ""
    }
    var SU = function(UU) {
      function XU(UU) {
        var zU;
        return function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, XU), (zU = LU(this, XU, [UU])).state = {
          fontSize: "",
          letterSpacing: ""
        }, zU
      }
      return function(UU, XU) {
        if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(XU && XU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), XU && wU(UU, XU)
      }(XU, UU), zU = XU, AU = [{
        key: "renderTickItem",
        value: function(UU, XU, zU) {
          var yU = (0, oU.c)(XU.className, "recharts-cartesian-axis-tick-value");
          return cU.isValidElement(UU) ? cU.cloneElement(UU, PU(PU({}, XU), {}, {
            className: yU
          })) : QU()(UU) ? UU(PU(PU({}, XU), {}, {
            className: yU
          })) : cU.createElement(YU.c, ZU({}, XU, {
            className: "recharts-cartesian-axis-tick-value"
          }), zU)
        }
      }], (yU = [{
        key: "shouldComponentUpdate",
        value: function(UU, XU) {
          var zU = UU.viewBox,
            cU = WU(UU, gU),
            yU = this.props,
            QU = yU.viewBox,
            AU = WU(yU, kU);
          return !(0, DU.e)(zU, QU) || !(0, DU.e)(cU, AU) || !(0, DU.e)(XU, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var UU = this.layerReference;
          if (UU) {
            var XU = UU.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            XU && this.setState({
              fontSize: window.getComputedStyle(XU).fontSize,
              letterSpacing: window.getComputedStyle(XU).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(UU) {
          var XU, zU, cU, yU, QU, AU, FU = this.props,
            oU = FU.x,
            DU = FU.y,
            EU = FU.width,
            YU = FU.height,
            NU = FU.orientation,
            pU = FU.tickSize,
            aU = FU.mirror,
            tU = FU.tickMargin,
            gU = aU ? -1 : 1,
            kU = UU.tickSize || pU,
            GU = (0, IU.B)(UU.tickCoord) ? UU.tickCoord : UU.coordinate;
          switch (NU) {
            case "top":
              XU = zU = UU.coordinate, AU = (cU = (yU = DU + +!aU * YU) - gU * kU) - gU * tU, QU = GU;
              break;
            case "left":
              cU = yU = UU.coordinate, QU = (XU = (zU = oU + +!aU * EU) - gU * kU) - gU * tU, AU = GU;
              break;
            case "right":
              cU = yU = UU.coordinate, QU = (XU = (zU = oU + +aU * EU) + gU * kU) + gU * tU, AU = GU;
              break;
            default:
              XU = zU = UU.coordinate, AU = (cU = (yU = DU + +aU * YU) + gU * kU) + gU * tU, QU = GU
          }
          return {
            line: {
              x1: XU,
              y1: cU,
              x2: zU,
              y2: yU
            },
            LY: {
              x: QU,
              y: AU
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var UU, XU = this.props,
            zU = XU.orientation,
            cU = XU.mirror;
          switch (zU) {
            case "left":
              UU = cU ? "start" : "end";
              break;
            case "right":
              UU = cU ? "end" : "start";
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
            XU = UU.orientation,
            zU = UU.mirror,
            cU = "end";
          switch (XU) {
            case "left":
            case "right":
              cU = "middle";
              break;
            case "top":
              cU = zU ? "start" : "end";
              break;
            default:
              cU = zU ? "end" : "start"
          }
          return cU
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var UU = this.props,
            XU = UU.x,
            zU = UU.y,
            yU = UU.width,
            QU = UU.height,
            AU = UU.orientation,
            DU = UU.mirror,
            EU = UU.axisLine,
            YU = PU(PU(PU({}, (0, aU.c)(this.props, !1)), (0, aU.c)(EU, !1)), {}, {
              fill: "none"
            });
          if ("top" === AU || "bottom" === AU) {
            var NU = +("top" === AU && !DU || "bottom" === AU && DU);
            YU = PU(PU({}, YU), {}, {
              x1: XU,
              y1: zU + NU * QU,
              x2: XU + yU,
              y2: zU + NU * QU
            })
          } else {
            var IU = +("left" === AU && !DU || "right" === AU && DU);
            YU = PU(PU({}, YU), {}, {
              x1: XU + IU * yU,
              y1: zU,
              x2: XU + IU * yU,
              y2: zU + QU
            })
          }
          return cU.createElement("line", ZU({}, YU, {
            className: (0, oU.c)("recharts-cartesian-axis-line", FU()(EU, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(UU, zU, yU) {
          var AU = this,
            DU = this.props,
            YU = DU.tickLine,
            NU = DU.stroke,
            IU = DU.LY,
            gU = DU.tickFormatter,
            kU = DU.unit,
            GU = (0, tU.e)(PU(PU({}, this.props), {}, {
              ticks: UU
            }), zU, yU),
            BU = this.getTickTextAnchor(),
            RU = this.getTickVerticalAnchor(),
            WU = (0, aU.c)(this.props, !1),
            dU = (0, aU.c)(IU, !1),
            LU = PU(PU({}, WU), {}, {
              fill: "none"
            }, (0, aU.c)(YU, !1)),
            eU = GU.map((function(UU, zU) {
              var yU = AU.getTickLineCoord(UU),
                DU = yU.line,
                aU = yU.LY,
                tU = PU(PU(PU(PU({
                  textAnchor: BU,
                  verticalAnchor: RU
                }, WU), {}, {
                  stroke: "none",
                  fill: NU
                }, dU), aU), {}, {
                  index: zU,
                  payload: UU,
                  visibleTicksCount: GU.length,
                  tickFormatter: gU
                });
              return cU.createElement(EU.e, ZU({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(UU.value, "-").concat(UU.coordinate, "-").concat(UU.tickCoord)
              }, (0, pU.q)(AU.props, UU, zU)), YU && cU.createElement("line", ZU({}, LU, DU, {
                className: (0, oU.c)("recharts-cartesian-axis-tick-line", FU()(YU, "className"))
              })), IU && XU.renderTickItem(IU, tU, "".concat(QU()(gU) ? gU(UU.value, zU) : UU.value).concat(kU || "")))
            }));
          return cU.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, eU)
        }
      }, {
        key: "render",
        value: function() {
          var UU = this,
            XU = this.props,
            zU = XU.axisLine,
            yU = XU.width,
            AU = XU.height,
            FU = XU.ticksGenerator,
            DU = XU.className;
          if (XU.hide) return null;
          var YU = this.props,
            IU = YU.ticks,
            pU = WU(YU, GU),
            aU = IU;
          return QU()(FU) && (aU = IU && IU.length > 0 ? FU(this.props) : FU(pU)), yU <= 0 || AU <= 0 || !aU || !aU.length ? null : cU.createElement(EU.e, {
            className: (0, oU.c)("recharts-cartesian-axis", DU),
            ref: function(XU) {
              UU.layerReference = XU
            }
          }, zU && this.renderAxisLine(), this.renderTicks(aU, this.state.fontSize, this.state.letterSpacing), NU.c.renderCallByParent(this.props))
        }
      }]) && dU(zU.prototype, yU), AU && dU(zU, AU), Object.defineProperty(zU, "prototype", {
        writable: !1
      }), zU;
      var zU, yU, AU
    }(cU.Component);
    qU(SU, "displayName", "CartesianAxis"), qU(SU, "defaultProps", {
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
      LY: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6988: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => qU
    });
    var cU = zU(61),
      yU = zU(5845),
      QU = zU.n(yU),
      AU = zU(5995),
      FU = zU(5746),
      oU = zU(5998),
      DU = zU(6752),
      EU = zU(6978),
      YU = zU(6970),
      NU = zU(6921),
      IU = ["x1", "y1", "x2", "y2", "key"],
      pU = ["offset"];

    function aU(UU) {
      return aU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, aU(UU)
    }

    function tU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function gU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? tU(Object(zU), !0).forEach((function(XU) {
          kU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : tU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function kU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != aU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != aU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == aU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function GU() {
      return GU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, GU.apply(this, arguments)
    }

    function BU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }
    var ZU = function(UU) {
      var XU = UU.fill;
      if (!XU || "none" === XU) return null;
      var zU = UU.fillOpacity,
        yU = UU.x,
        QU = UU.y,
        AU = UU.width,
        FU = UU.height,
        oU = UU.ry;
      return cU.createElement("rect", {
        x: yU,
        y: QU,
        ry: oU,
        width: AU,
        height: FU,
        stroke: "none",
        fill: XU,
        fillOpacity: zU,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function RU(UU, XU) {
      var zU;
      if (cU.isValidElement(UU)) zU = cU.cloneElement(UU, XU);
      else if (QU()(UU)) zU = UU(XU);
      else {
        var yU = XU.x1,
          AU = XU.y1,
          FU = XU.x2,
          DU = XU.y2,
          EU = XU.key,
          YU = BU(XU, IU),
          NU = (0, oU.c)(YU, !1),
          aU = (NU.offset, BU(NU, pU));
        zU = cU.createElement("line", GU({}, aU, {
          x1: yU,
          y1: AU,
          x2: FU,
          y2: DU,
          fill: "none",
          key: EU
        }))
      }
      return zU
    }

    function PU(UU) {
      var XU = UU.x,
        zU = UU.width,
        yU = UU.horizontal,
        QU = void 0 === yU || yU,
        AU = UU.horizontalPoints;
      if (!QU || !AU || !AU.length) return null;
      var FU = AU.map((function(cU, yU) {
        var AU = gU(gU({}, UU), {}, {
          x1: XU,
          y1: cU,
          x2: XU + zU,
          y2: cU,
          key: "line-".concat(yU),
          index: yU
        });
        return RU(QU, AU)
      }));
      return cU.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, FU)
    }

    function WU(UU) {
      var XU = UU.y,
        zU = UU.height,
        yU = UU.vertical,
        QU = void 0 === yU || yU,
        AU = UU.verticalPoints;
      if (!QU || !AU || !AU.length) return null;
      var FU = AU.map((function(cU, yU) {
        var AU = gU(gU({}, UU), {}, {
          x1: cU,
          y1: XU,
          x2: cU,
          y2: XU + zU,
          key: "line-".concat(yU),
          index: yU
        });
        return RU(QU, AU)
      }));
      return cU.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, FU)
    }

    function dU(UU) {
      var XU = UU.horizontalFill,
        zU = UU.fillOpacity,
        yU = UU.x,
        QU = UU.y,
        AU = UU.width,
        FU = UU.height,
        oU = UU.horizontalPoints,
        DU = UU.horizontal;
      if (!(void 0 === DU || DU) || !XU || !XU.length) return null;
      var EU = oU.map((function(UU) {
        return Math.round(UU + QU - QU)
      })).sort((function(UU, XU) {
        return UU - XU
      }));
      QU !== EU[0] && EU.unshift(0);
      var YU = EU.map((function(UU, oU) {
        var DU = !EU[oU + 1] ? QU + FU - UU : EU[oU + 1] - UU;
        if (DU <= 0) return null;
        var YU = oU % XU.length;
        return cU.createElement("rect", {
          key: "react-".concat(oU),
          y: UU,
          x: yU,
          height: DU,
          width: AU,
          stroke: "none",
          fill: XU[YU],
          fillOpacity: zU,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return cU.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, YU)
    }

    function LU(UU) {
      var XU = UU.vertical,
        zU = void 0 === XU || XU,
        yU = UU.verticalFill,
        QU = UU.fillOpacity,
        AU = UU.x,
        FU = UU.y,
        oU = UU.width,
        DU = UU.height,
        EU = UU.verticalPoints;
      if (!zU || !yU || !yU.length) return null;
      var YU = EU.map((function(UU) {
        return Math.round(UU + AU - AU)
      })).sort((function(UU, XU) {
        return UU - XU
      }));
      AU !== YU[0] && YU.unshift(0);
      var NU = YU.map((function(UU, XU) {
        var zU = !YU[XU + 1] ? AU + oU - UU : YU[XU + 1] - UU;
        if (zU <= 0) return null;
        var EU = XU % yU.length;
        return cU.createElement("rect", {
          key: "react-".concat(XU),
          x: UU,
          y: FU,
          width: zU,
          height: DU,
          stroke: "none",
          fill: yU[EU],
          fillOpacity: QU,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return cU.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, NU)
    }
    var eU = function(UU, XU) {
        var zU = UU.xAxis,
          cU = UU.width,
          yU = UU.height,
          QU = UU.offset;
        return (0, DU.G)((0, EU.e)(gU(gU(gU({}, YU.c.defaultProps), zU), {}, {
          ticks: (0, DU.$)(zU, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: cU,
            height: yU
          }
        })), QU.left, QU.left + QU.width, XU)
      },
      CU = function(UU, XU) {
        var zU = UU.yAxis,
          cU = UU.width,
          yU = UU.height,
          QU = UU.offset;
        return (0, DU.G)((0, EU.e)(gU(gU(gU({}, YU.c.defaultProps), zU), {}, {
          ticks: (0, DU.$)(zU, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: cU,
            height: yU
          }
        })), QU.top, QU.top + QU.height, XU)
      },
      wU = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function qU(UU) {
      var XU, zU, yU, oU, DU, EU, YU = (0, NU.m)(),
        IU = (0, NU.k)(),
        pU = (0, NU.r)(),
        tU = gU(gU({}, UU), {}, {
          stroke: null !== (XU = UU.stroke) && void 0 !== XU ? XU : wU.stroke,
          fill: null !== (zU = UU.fill) && void 0 !== zU ? zU : wU.fill,
          horizontal: null !== (yU = UU.horizontal) && void 0 !== yU ? yU : wU.horizontal,
          horizontalFill: null !== (oU = UU.horizontalFill) && void 0 !== oU ? oU : wU.horizontalFill,
          vertical: null !== (DU = UU.vertical) && void 0 !== DU ? DU : wU.vertical,
          verticalFill: null !== (EU = UU.verticalFill) && void 0 !== EU ? EU : wU.verticalFill,
          x: (0, FU.B)(UU.x) ? UU.x : pU.left,
          y: (0, FU.B)(UU.y) ? UU.y : pU.top,
          width: (0, FU.B)(UU.width) ? UU.width : pU.width,
          height: (0, FU.B)(UU.height) ? UU.height : pU.height
        }),
        kU = tU.x,
        BU = tU.y,
        RU = tU.width,
        qU = tU.height,
        OU = tU.syncWithTicks,
        SU = tU.horizontalValues,
        rU = tU.verticalValues,
        uU = (0, NU.i)(),
        fU = (0, NU.C)();
      if (!(0, FU.B)(RU) || RU <= 0 || !(0, FU.B)(qU) || qU <= 0 || !(0, FU.B)(kU) || kU !== +kU || !(0, FU.B)(BU) || BU !== +BU) return null;
      var iU = tU.verticalCoordinatesGenerator || eU,
        HU = tU.horizontalCoordinatesGenerator || CU,
        MU = tU.horizontalPoints,
        vU = tU.verticalPoints;
      if ((!MU || !MU.length) && QU()(HU)) {
        var VU = SU && SU.length,
          sU = HU({
            yAxis: fU ? gU(gU({}, fU), {}, {
              ticks: VU ? SU : fU.ticks
            }) : void 0,
            width: YU,
            height: IU,
            offset: pU
          }, !!VU || OU);
        (0, AU.c)(Array.isArray(sU), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(aU(sU), "]")), Array.isArray(sU) && (MU = sU)
      }
      if ((!vU || !vU.length) && QU()(iU)) {
        var nU = rU && rU.length,
          mU = iU({
            xAxis: uU ? gU(gU({}, uU), {}, {
              ticks: nU ? rU : uU.ticks
            }) : void 0,
            width: YU,
            height: IU,
            offset: pU
          }, !!nU || OU);
        (0, AU.c)(Array.isArray(mU), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(aU(mU), "]")), Array.isArray(mU) && (vU = mU)
      }
      return cU.createElement("g", {
        className: "recharts-cartesian-grid"
      }, cU.createElement(ZU, {
        fill: tU.fill,
        fillOpacity: tU.fillOpacity,
        x: tU.x,
        y: tU.y,
        width: tU.width,
        height: tU.height,
        ry: tU.ry
      }), cU.createElement(PU, GU({}, tU, {
        offset: pU,
        horizontalPoints: MU,
        xAxis: uU,
        yAxis: fU
      })), cU.createElement(WU, GU({}, tU, {
        offset: pU,
        verticalPoints: vU,
        xAxis: uU,
        yAxis: fU
      })), cU.createElement(dU, GU({}, tU, {
        horizontalPoints: MU
      })), cU.createElement(LU, GU({}, tU, {
        verticalPoints: vU
      })))
    }
    qU.displayName = "CartesianGrid"
  },
  6805: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => BU
    });
    var cU = zU(61),
      yU = zU(6565),
      QU = zU(6576),
      AU = zU(5998),
      FU = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function oU(UU) {
      return oU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, oU(UU)
    }

    function DU() {
      return DU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, DU.apply(this, arguments)
    }

    function EU(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        var zU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != zU) {
          var cU, yU, QU, AU, FU = [],
            oU = !0,
            DU = !1;
          try {
            if (QU = (zU = zU.call(UU)).next, 0 === XU) {
              if (Object(zU) !== zU) return;
              oU = !1
            } else
              for (; !(oU = (cU = QU.call(zU)).done) && (FU.push(cU.value), FU.length !== XU); oU = !0);
          } catch (UU) {
            DU = !0, yU = UU
          } finally {
            try {
              if (!oU && null != zU.return && (AU = zU.return(), Object(AU) !== AU)) return
            } finally {
              if (DU) throw yU
            }
          }
          return FU
        }
      }(UU, XU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return YU(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return YU(UU, XU)
      }(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function NU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function IU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, GU(cU.key), cU)
      }
    }

    function pU(UU, XU, zU) {
      return XU = tU(XU),
        function(UU, XU) {
          if (XU && ("object" === oU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, aU() ? Reflect.construct(XU, zU || [], tU(UU).constructor) : XU.apply(UU, zU))
    }

    function aU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (aU = function() {
        return !!UU
      })()
    }

    function tU(UU) {
      return tU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, tU(UU)
    }

    function gU(UU, XU) {
      return gU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, gU(UU, XU)
    }

    function kU(UU, XU, zU) {
      return (XU = GU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function GU(UU) {
      var XU = function(UU, XU) {
        if ("object" != oU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != oU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == oU(XU) ? XU : XU + ""
    }
    var BU = function(UU) {
      function XU() {
        return function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, XU), pU(this, XU, arguments)
      }
      return function(UU, XU) {
        if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(XU && XU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), XU && gU(UU, XU)
      }(XU, UU), zU = XU, (oU = [{
        key: "render",
        value: function() {
          var UU = this.props,
            XU = UU.offset,
            zU = UU.layout,
            oU = UU.width,
            YU = UU.dataKey,
            IU = UU.data,
            pU = UU.dataPointFormatter,
            aU = UU.xAxis,
            tU = UU.yAxis,
            gU = NU(UU, FU),
            kU = (0, AU.c)(gU, !1);
          "x" === this.props.direction && "number" !== aU.type && (0, yU.d)(!1);
          var GU = IU.map((function(UU) {
            var yU = pU(UU, YU),
              AU = yU.x,
              FU = yU.y,
              NU = yU.value,
              IU = yU.errorVal;
            if (!IU) return null;
            var gU, GU, BU = [];
            if (Array.isArray(IU)) {
              var ZU = EU(IU, 2);
              gU = ZU[0], GU = ZU[1]
            } else gU = GU = IU;
            if ("vertical" === zU) {
              var RU = aU.scale,
                PU = FU + XU,
                WU = PU + oU,
                dU = PU - oU,
                LU = RU(NU - gU),
                eU = RU(NU + GU);
              BU.push({
                x1: eU,
                y1: WU,
                x2: eU,
                y2: dU
              }), BU.push({
                x1: LU,
                y1: PU,
                x2: eU,
                y2: PU
              }), BU.push({
                x1: LU,
                y1: WU,
                x2: LU,
                y2: dU
              })
            } else if ("horizontal" === zU) {
              var CU = tU.scale,
                wU = AU + XU,
                qU = wU - oU,
                OU = wU + oU,
                SU = CU(NU - gU),
                rU = CU(NU + GU);
              BU.push({
                x1: qU,
                y1: rU,
                x2: OU,
                y2: rU
              }), BU.push({
                x1: wU,
                y1: SU,
                x2: wU,
                y2: rU
              }), BU.push({
                x1: qU,
                y1: SU,
                x2: OU,
                y2: SU
              })
            }
            return cU.createElement(QU.e, DU({
              className: "recharts-errorBar",
              key: "bar-".concat(BU.map((function(UU) {
                return "".concat(UU.x1, "-").concat(UU.x2, "-").concat(UU.y1, "-").concat(UU.y2)
              })))
            }, kU), BU.map((function(UU) {
              return cU.createElement("line", DU({}, UU, {
                key: "line-".concat(UU.x1, "-").concat(UU.x2, "-").concat(UU.y1, "-").concat(UU.y2)
              }))
            })))
          }));
          return cU.createElement(QU.e, {
            className: "recharts-errorBars"
          }, GU)
        }
      }]) && IU(zU.prototype, oU), YU && IU(zU, YU), Object.defineProperty(zU, "prototype", {
        writable: !1
      }), zU;
      var zU, oU, YU
    }(cU.Component);
    kU(BU, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), kU(BU, "displayName", "ErrorBar")
  },
  6961: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => HU
    });
    var cU = zU(61),
      yU = zU(6729),
      QU = zU(5845),
      AU = zU.n(QU),
      FU = zU(5987),
      oU = zU.n(FU),
      DU = zU(6797),
      EU = zU.n(DU),
      YU = zU(5657),
      NU = zU(6948),
      IU = zU(6719),
      pU = zU(6576),
      aU = zU(6881),
      tU = zU(6805),
      gU = zU(5746),
      kU = zU(5998),
      GU = zU(6588),
      BU = zU(6752),
      ZU = ["type", "layout", "connectNulls", "ref"],
      RU = ["key"];

    function PU(UU) {
      return PU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, PU(UU)
    }

    function WU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function dU() {
      return dU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, dU.apply(this, arguments)
    }

    function LU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function eU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? LU(Object(zU), !0).forEach((function(XU) {
          fU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : LU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function CU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return wU(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return wU(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return wU(UU, XU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function qU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, iU(cU.key), cU)
      }
    }

    function OU(UU, XU, zU) {
      return XU = rU(XU),
        function(UU, XU) {
          if (XU && ("object" === PU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, SU() ? Reflect.construct(XU, zU || [], rU(UU).constructor) : XU.apply(UU, zU))
    }

    function SU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (SU = function() {
        return !!UU
      })()
    }

    function rU(UU) {
      return rU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, rU(UU)
    }

    function uU(UU, XU) {
      return uU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, uU(UU, XU)
    }

    function fU(UU, XU, zU) {
      return (XU = iU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function iU(UU) {
      var XU = function(UU, XU) {
        if ("object" != PU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != PU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == PU(XU) ? XU : XU + ""
    }
    var HU = function(UU) {
      function XU() {
        var UU;
        ! function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, XU);
        for (var zU = arguments.length, cU = new Array(zU), yU = 0; yU < zU; yU++) cU[yU] = arguments[yU];
        return fU(UU = OU(this, XU, [].concat(cU)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), fU(UU, "generateSimpleStrokeDasharray", (function(UU, XU) {
          return "".concat(XU, "px ").concat(UU - XU, "px")
        })), fU(UU, "getStrokeDasharray", (function(zU, cU, yU) {
          var QU = yU.reduce((function(UU, XU) {
            return UU + XU
          }));
          if (!QU) return UU.generateSimpleStrokeDasharray(cU, zU);
          for (var AU = Math.floor(zU / QU), FU = zU % QU, oU = cU - zU, DU = [], EU = 0, YU = 0; EU < yU.length; YU += yU[EU], ++EU)
            if (YU + yU[EU] > FU) {
              DU = [].concat(CU(yU.slice(0, EU)), [FU - YU]);
              break
            } var NU = DU.length % 2 === 0 ? [0, oU] : [oU];
          return [].concat(CU(XU.repeat(yU, AU)), CU(DU), NU).map((function(UU) {
            return "".concat(UU, "px")
          })).join(", ")
        })), fU(UU, "id", (0, gU.J)("recharts-line-")), fU(UU, "pathRef", (function(XU) {
          UU.mainCurve = XU
        })), fU(UU, "handleAnimationEnd", (function() {
          UU.setState({
            isAnimationFinished: !0
          }), UU.props.onAnimationEnd && UU.props.onAnimationEnd()
        })), fU(UU, "handleAnimationStart", (function() {
          UU.setState({
            isAnimationFinished: !1
          }), UU.props.onAnimationStart && UU.props.onAnimationStart()
        })), UU
      }
      return function(UU, XU) {
        if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(XU && XU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), XU && uU(UU, XU)
      }(XU, UU), zU = XU, QU = [{
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
          } catch (XU) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(UU, XU) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var zU = this.props,
            yU = zU.points,
            QU = zU.xAxis,
            AU = zU.yAxis,
            FU = zU.layout,
            oU = zU.children,
            DU = (0, kU.d)(oU, tU.b);
          if (!DU) return null;
          var EU = function(UU, XU) {
              return {
                x: UU.x,
                y: UU.y,
                value: UU.value,
                errorVal: (0, BU.db)(UU.payload, XU)
              }
            },
            YU = {
              clipPath: UU ? "url(#clipPath-".concat(XU, ")") : null
            };
          return cU.createElement(pU.e, YU, DU.map((function(UU) {
            return cU.cloneElement(UU, {
              key: "bar-".concat(UU.props.dataKey),
              data: yU,
              xAxis: QU,
              yAxis: AU,
              layout: FU,
              dataPointFormatter: EU
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(UU, zU, yU) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var QU = this.props,
            AU = QU.dot,
            FU = QU.points,
            oU = QU.dataKey,
            DU = (0, kU.c)(this.props, !1),
            EU = (0, kU.c)(AU, !0),
            YU = FU.map((function(UU, zU) {
              var cU = eU(eU(eU({
                key: "dot-".concat(zU),
                r: 3
              }, DU), EU), {}, {
                index: zU,
                cx: UU.x,
                cy: UU.y,
                value: UU.value,
                dataKey: oU,
                payload: UU.payload,
                points: FU
              });
              return XU.renderDotItem(AU, cU)
            })),
            NU = {
              clipPath: UU ? "url(#clipPath-".concat(zU ? "" : "dots-").concat(yU, ")") : null
            };
          return cU.createElement(pU.e, dU({
            className: "recharts-line-dots",
            key: "dots"
          }, NU), YU)
        }
      }, {
        key: "renderCurveStatically",
        value: function(UU, XU, zU, yU) {
          var QU = this.props,
            AU = QU.type,
            FU = QU.layout,
            oU = QU.connectNulls,
            DU = (QU.ref, WU(QU, ZU)),
            EU = eU(eU(eU({}, (0, kU.c)(DU, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: XU ? "url(#clipPath-".concat(zU, ")") : null,
              points: UU
            }, yU), {}, {
              type: AU,
              layout: FU,
              connectNulls: oU
            });
          return cU.createElement(NU.d, dU({}, EU, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(UU, XU) {
          var zU = this,
            QU = this.props,
            AU = QU.points,
            FU = QU.strokeDasharray,
            oU = QU.isAnimationActive,
            DU = QU.animationBegin,
            EU = QU.animationDuration,
            YU = QU.animationEasing,
            NU = QU.animationId,
            IU = QU.animateNewValues,
            pU = QU.width,
            aU = QU.height,
            tU = this.state,
            kU = tU.prevPoints,
            GU = tU.totalLength;
          return cU.createElement(yU.e, {
            gY: DU,
            duration: EU,
            isActive: oU,
            easing: YU,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(NU),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(cU) {
            var yU = cU.t;
            if (kU) {
              var QU = kU.length / AU.length,
                oU = AU.map((function(UU, XU) {
                  var zU = Math.floor(XU * QU);
                  if (kU[zU]) {
                    var cU = kU[zU],
                      AU = (0, gU.x)(cU.x, UU.x),
                      FU = (0, gU.x)(cU.y, UU.y);
                    return eU(eU({}, UU), {}, {
                      x: AU(yU),
                      y: FU(yU)
                    })
                  }
                  if (IU) {
                    var oU = (0, gU.x)(2 * pU, UU.x),
                      DU = (0, gU.x)(aU / 2, UU.y);
                    return eU(eU({}, UU), {}, {
                      x: oU(yU),
                      y: DU(yU)
                    })
                  }
                  return eU(eU({}, UU), {}, {
                    x: UU.x,
                    y: UU.y
                  })
                }));
              return zU.renderCurveStatically(oU, UU, XU)
            }
            var DU, EU = (0, gU.x)(0, GU)(yU);
            if (FU) {
              var YU = "".concat(FU).split(/[,\s]+/gim).map((function(UU) {
                return parseFloat(UU)
              }));
              DU = zU.getStrokeDasharray(EU, GU, YU)
            } else DU = zU.generateSimpleStrokeDasharray(GU, EU);
            return zU.renderCurveStatically(AU, UU, XU, {
              strokeDasharray: DU
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(UU, XU) {
          var zU = this.props,
            cU = zU.points,
            yU = zU.isAnimationActive,
            QU = this.state,
            AU = QU.prevPoints,
            FU = QU.totalLength;
          return yU && cU && cU.length && (!AU && FU > 0 || !EU()(AU, cU)) ? this.renderCurveWithAnimation(UU, XU) : this.renderCurveStatically(cU, UU, XU)
        }
      }, {
        key: "render",
        value: function() {
          var UU, XU = this.props,
            zU = XU.hide,
            yU = XU.dot,
            QU = XU.points,
            AU = XU.className,
            FU = XU.xAxis,
            DU = XU.yAxis,
            EU = XU.top,
            NU = XU.left,
            IU = XU.width,
            tU = XU.height,
            gU = XU.isAnimationActive,
            GU = XU.id;
          if (zU || !QU || !QU.length) return null;
          var BU = this.state.isAnimationFinished,
            ZU = 1 === QU.length,
            RU = (0, YU.c)("recharts-line", AU),
            PU = FU && FU.allowDataOverflow,
            WU = DU && DU.allowDataOverflow,
            dU = PU || WU,
            LU = oU()(GU) ? this.id : GU,
            eU = null !== (UU = (0, kU.c)(yU, !1)) && void 0 !== UU ? UU : {
              r: 3,
              strokeWidth: 2
            },
            CU = eU.r,
            wU = void 0 === CU ? 3 : CU,
            qU = eU.strokeWidth,
            OU = void 0 === qU ? 2 : qU,
            SU = ((0, kU.i)(yU) ? yU : {}).clipDot,
            rU = void 0 === SU || SU,
            uU = 2 * wU + OU;
          return cU.createElement(pU.e, {
            className: RU
          }, PU || WU ? cU.createElement("defs", null, cU.createElement("clipPath", {
            id: "clipPath-".concat(LU)
          }, cU.createElement("rect", {
            x: PU ? NU : NU - IU / 2,
            y: WU ? EU : EU - tU / 2,
            width: PU ? IU : 2 * IU,
            height: WU ? tU : 2 * tU
          })), !rU && cU.createElement("clipPath", {
            id: "clipPath-dots-".concat(LU)
          }, cU.createElement("rect", {
            x: NU - uU / 2,
            y: EU - uU / 2,
            width: IU + uU,
            height: tU + uU
          }))) : null, !ZU && this.renderCurve(dU, LU), this.renderErrorBar(dU, LU), (ZU || yU) && this.renderDots(dU, rU, LU), (!gU || BU) && aU.b.renderCallByParent(this.props, QU))
        }
      }], FU = [{
        key: "getDerivedStateFromProps",
        value: function(UU, XU) {
          return UU.animationId !== XU.prevAnimationId ? {
            prevAnimationId: UU.animationId,
            curPoints: UU.points,
            prevPoints: XU.curPoints
          } : UU.points !== XU.curPoints ? {
            curPoints: UU.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(UU, XU) {
          for (var zU = UU.length % 2 !== 0 ? [].concat(CU(UU), [0]) : UU, cU = [], yU = 0; yU < XU; ++yU) cU = [].concat(CU(cU), CU(zU));
          return cU
        }
      }, {
        key: "renderDotItem",
        value: function(UU, XU) {
          var zU;
          if (cU.isValidElement(UU)) zU = cU.cloneElement(UU, XU);
          else if (AU()(UU)) zU = UU(XU);
          else {
            var yU = XU.key,
              QU = WU(XU, RU),
              FU = (0, YU.c)("recharts-line-dot", "boolean" !== typeof UU ? UU.className : "");
            zU = cU.createElement(IU.d, dU({
              key: yU
            }, QU, {
              className: FU
            }))
          }
          return zU
        }
      }], QU && qU(zU.prototype, QU), FU && qU(zU, FU), Object.defineProperty(zU, "prototype", {
        writable: !1
      }), zU;
      var zU, QU, FU
    }(cU.PureComponent);
    fU(HU, "displayName", "Line"), fU(HU, "defaultProps", {
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
      isAnimationActive: !GU.e.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), fU(HU, "getComposedData", (function(UU) {
      var XU = UU.props,
        zU = UU.xAxis,
        cU = UU.yAxis,
        yU = UU.xAxisTicks,
        QU = UU.yAxisTicks,
        AU = UU.dataKey,
        FU = UU.bandSize,
        DU = UU.displayedData,
        EU = UU.offset,
        YU = XU.layout;
      return eU({
        points: DU.map((function(UU, XU) {
          var DU = (0, BU.db)(UU, AU);
          return "horizontal" === YU ? {
            x: (0, BU.C)({
              axis: zU,
              ticks: yU,
              bandSize: FU,
              entry: UU,
              index: XU
            }),
            y: oU()(DU) ? null : cU.scale(DU),
            value: DU,
            payload: UU
          } : {
            x: oU()(DU) ? null : zU.scale(DU),
            y: (0, BU.C)({
              axis: cU,
              ticks: QU,
              bandSize: FU,
              entry: UU,
              index: XU
            }),
            value: DU,
            payload: UU
          }
        })),
        layout: YU
      }, EU)
    }))
  },
  6915: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => OU
    });
    var cU = zU(61),
      yU = zU(5845),
      QU = zU.n(yU),
      AU = zU(6917),
      FU = zU.n(AU),
      oU = zU(5657),
      DU = zU(6576),
      EU = zU(6820),
      YU = zU(6830),
      NU = zU(5746),
      IU = zU(6833),
      pU = zU(5995),
      aU = zU(5998),
      tU = zU(6921);

    function gU(UU) {
      return gU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, gU(UU)
    }

    function kU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, LU(cU.key), cU)
      }
    }

    function GU(UU, XU, zU) {
      return XU = ZU(XU),
        function(UU, XU) {
          if (XU && ("object" === gU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, BU() ? Reflect.construct(XU, zU || [], ZU(UU).constructor) : XU.apply(UU, zU))
    }

    function BU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (BU = function() {
        return !!UU
      })()
    }

    function ZU(UU) {
      return ZU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, ZU(UU)
    }

    function RU(UU, XU) {
      return RU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, RU(UU, XU)
    }

    function PU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function WU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? PU(Object(zU), !0).forEach((function(XU) {
          dU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : PU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function dU(UU, XU, zU) {
      return (XU = LU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function LU(UU) {
      var XU = function(UU, XU) {
        if ("object" != gU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != gU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == gU(XU) ? XU : XU + ""
    }

    function eU(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        var zU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != zU) {
          var cU, yU, QU, AU, FU = [],
            oU = !0,
            DU = !1;
          try {
            if (QU = (zU = zU.call(UU)).next, 0 === XU) {
              if (Object(zU) !== zU) return;
              oU = !1
            } else
              for (; !(oU = (cU = QU.call(zU)).done) && (FU.push(cU.value), FU.length !== XU); oU = !0);
          } catch (UU) {
            DU = !0, yU = UU
          } finally {
            try {
              if (!oU && null != zU.return && (AU = zU.return(), Object(AU) !== AU)) return
            } finally {
              if (DU) throw yU
            }
          }
          return FU
        }
      }(UU, XU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return CU(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return CU(UU, XU)
      }(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function CU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function wU() {
      return wU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, wU.apply(this, arguments)
    }

    function qU(UU) {
      var XU = UU.x,
        zU = UU.y,
        yU = UU.segment,
        AU = UU.xAxisId,
        gU = UU.yAxisId,
        kU = UU.shape,
        GU = UU.className,
        BU = UU.alwaysShow,
        ZU = (0, tU.n)(),
        RU = (0, tU.y)(AU),
        PU = (0, tU.z)(gU),
        dU = (0, tU.v)();
      if (!ZU || !dU) return null;
      (0, pU.c)(void 0 === BU, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var LU = function(UU, XU, zU, cU, yU, QU, AU, oU, DU) {
        var EU = yU.x,
          NU = yU.y,
          IU = yU.width,
          pU = yU.height;
        if (zU) {
          var aU = DU.y,
            tU = UU.y.apply(aU, {
              position: QU
            });
          if ((0, YU.c)(DU, "discard") && !UU.y.isInRange(tU)) return null;
          var gU = [{
            x: EU + IU,
            y: tU
          }, {
            x: EU,
            y: tU
          }];
          return "left" === oU ? gU.reverse() : gU
        }
        if (XU) {
          var kU = DU.x,
            GU = UU.x.apply(kU, {
              position: QU
            });
          if ((0, YU.c)(DU, "discard") && !UU.x.isInRange(GU)) return null;
          var BU = [{
            x: GU,
            y: NU + pU
          }, {
            x: GU,
            y: NU
          }];
          return "top" === AU ? BU.reverse() : BU
        }
        if (cU) {
          var ZU = DU.segment.map((function(XU) {
            return UU.apply(XU, {
              position: QU
            })
          }));
          return (0, YU.c)(DU, "discard") && FU()(ZU, (function(XU) {
            return !UU.isInRange(XU)
          })) ? null : ZU
        }
        return null
      }((0, IU.c)({
        x: RU.scale,
        y: PU.scale
      }), (0, NU.A)(XU), (0, NU.A)(zU), yU && 2 === yU.length, dU, UU.position, RU.orientation, PU.orientation, UU);
      if (!LU) return null;
      var CU = eU(LU, 2),
        qU = CU[0],
        OU = qU.x,
        SU = qU.y,
        rU = CU[1],
        uU = rU.x,
        fU = rU.y,
        iU = WU(WU({
          clipPath: (0, YU.c)(UU, "hidden") ? "url(#".concat(ZU, ")") : void 0
        }, (0, aU.c)(UU, !0)), {}, {
          x1: OU,
          y1: SU,
          x2: uU,
          y2: fU
        });
      return cU.createElement(DU.e, {
        className: (0, oU.c)("recharts-reference-line", GU)
      }, function(UU, XU) {
        return cU.isValidElement(UU) ? cU.cloneElement(UU, XU) : QU()(UU) ? UU(XU) : cU.createElement("line", wU({}, XU, {
          className: "recharts-reference-line-line"
        }))
      }(kU, iU), EU.c.renderCallByParent(UU, (0, IU.h)({
        x1: OU,
        y1: SU,
        x2: uU,
        y2: fU
      })))
    }
    var OU = function(UU) {
      function XU() {
        return function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, XU), GU(this, XU, arguments)
      }
      return function(UU, XU) {
        if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(XU && XU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), XU && RU(UU, XU)
      }(XU, UU), zU = XU, (yU = [{
        key: "render",
        value: function() {
          return cU.createElement(qU, this.props)
        }
      }]) && kU(zU.prototype, yU), QU && kU(zU, QU), Object.defineProperty(zU, "prototype", {
        writable: !1
      }), zU;
      var zU, yU, QU
    }(cU.Component);
    dU(OU, "displayName", "ReferenceLine"), dU(OU, "defaultProps", {
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
  6967: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => kU
    });
    var cU = zU(61),
      yU = zU(5657),
      QU = zU(6921),
      AU = zU(6970),
      FU = zU(6752);

    function oU(UU) {
      return oU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, oU(UU)
    }

    function DU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, aU(cU.key), cU)
      }
    }

    function EU(UU, XU, zU) {
      return XU = NU(XU),
        function(UU, XU) {
          if (XU && ("object" === oU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, YU() ? Reflect.construct(XU, zU || [], NU(UU).constructor) : XU.apply(UU, zU))
    }

    function YU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (YU = function() {
        return !!UU
      })()
    }

    function NU(UU) {
      return NU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, NU(UU)
    }

    function IU(UU, XU) {
      return IU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, IU(UU, XU)
    }

    function pU(UU, XU, zU) {
      return (XU = aU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function aU(UU) {
      var XU = function(UU, XU) {
        if ("object" != oU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != oU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == oU(XU) ? XU : XU + ""
    }

    function tU() {
      return tU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, tU.apply(this, arguments)
    }

    function gU(UU) {
      var XU = UU.xAxisId,
        zU = (0, QU.m)(),
        oU = (0, QU.k)(),
        DU = (0, QU.y)(XU);
      return null == DU ? null : cU.createElement(AU.c, tU({}, DU, {
        className: (0, yU.c)("recharts-".concat(DU.axisType, " ").concat(DU.axisType), DU.className),
        viewBox: {
          x: 0,
          y: 0,
          width: zU,
          height: oU
        },
        ticksGenerator: function(UU) {
          return (0, FU.$)(UU, !0)
        }
      }))
    }
    var kU = function(UU) {
      function XU() {
        return function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, XU), EU(this, XU, arguments)
      }
      return function(UU, XU) {
        if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(XU && XU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), XU && IU(UU, XU)
      }(XU, UU), zU = XU, (yU = [{
        key: "render",
        value: function() {
          return cU.createElement(gU, this.props)
        }
      }]) && DU(zU.prototype, yU), QU && DU(zU, QU), Object.defineProperty(zU, "prototype", {
        writable: !1
      }), zU;
      var zU, yU, QU
    }(cU.Component);
    pU(kU, "displayName", "XAxis"), pU(kU, "defaultProps", {
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
  6984: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => kU
    });
    var cU = zU(61),
      yU = zU(5657),
      QU = zU(6921),
      AU = zU(6970),
      FU = zU(6752);

    function oU(UU) {
      return oU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, oU(UU)
    }

    function DU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, aU(cU.key), cU)
      }
    }

    function EU(UU, XU, zU) {
      return XU = NU(XU),
        function(UU, XU) {
          if (XU && ("object" === oU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, YU() ? Reflect.construct(XU, zU || [], NU(UU).constructor) : XU.apply(UU, zU))
    }

    function YU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (YU = function() {
        return !!UU
      })()
    }

    function NU(UU) {
      return NU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, NU(UU)
    }

    function IU(UU, XU) {
      return IU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, IU(UU, XU)
    }

    function pU(UU, XU, zU) {
      return (XU = aU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function aU(UU) {
      var XU = function(UU, XU) {
        if ("object" != oU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != oU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == oU(XU) ? XU : XU + ""
    }

    function tU() {
      return tU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, tU.apply(this, arguments)
    }
    var gU = function(UU) {
        var XU = UU.yAxisId,
          zU = (0, QU.m)(),
          oU = (0, QU.k)(),
          DU = (0, QU.z)(XU);
        return null == DU ? null : cU.createElement(AU.c, tU({}, DU, {
          className: (0, yU.c)("recharts-".concat(DU.axisType, " ").concat(DU.axisType), DU.className),
          viewBox: {
            x: 0,
            y: 0,
            width: zU,
            height: oU
          },
          ticksGenerator: function(UU) {
            return (0, FU.$)(UU, !0)
          }
        }))
      },
      kU = function(UU) {
        function XU() {
          return function(UU, XU) {
            if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
          }(this, XU), EU(this, XU, arguments)
        }
        return function(UU, XU) {
          if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
          UU.prototype = Object.create(XU && XU.prototype, {
            constructor: {
              value: UU,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(UU, "prototype", {
            writable: !1
          }), XU && IU(UU, XU)
        }(XU, UU), zU = XU, (yU = [{
          key: "render",
          value: function() {
            return cU.createElement(gU, this.props)
          }
        }]) && DU(zU.prototype, yU), QU && DU(zU, QU), Object.defineProperty(zU, "prototype", {
          writable: !1
        }), zU;
        var zU, yU, QU
      }(cU.Component);
    pU(kU, "displayName", "YAxis"), pU(kU, "defaultProps", {
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
  6978: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => aU
    });
    var cU = zU(5845),
      yU = zU.n(cU),
      QU = zU(5746),
      AU = zU(6743),
      FU = zU(6588),
      oU = zU(6833);

    function DU(UU, XU, zU) {
      if (XU < 1) return [];
      if (1 === XU && void 0 === zU) return UU;
      for (var cU = [], yU = 0; yU < UU.length; yU += XU) {
        if (void 0 !== zU && !0 !== zU(UU[yU])) return;
        cU.push(UU[yU])
      }
      return cU
    }

    function EU(UU, XU, zU, cU, yU) {
      if (UU * XU < UU * cU || UU * XU > UU * yU) return !1;
      var QU = zU();
      return UU * (XU - UU * QU / 2 - cU) >= 0 && UU * (XU + UU * QU / 2 - yU) <= 0
    }

    function YU(UU) {
      return YU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, YU(UU)
    }

    function NU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function IU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? NU(Object(zU), !0).forEach((function(XU) {
          pU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : NU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function pU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != YU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != YU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == YU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function aU(UU, XU, zU) {
      var cU = UU.LY,
        YU = UU.ticks,
        NU = UU.viewBox,
        pU = UU.minTickGap,
        aU = UU.orientation,
        tU = UU.interval,
        gU = UU.tickFormatter,
        kU = UU.unit,
        GU = UU.angle;
      if (!YU || !YU.length || !cU) return [];
      if ((0, QU.B)(tU) || FU.e.isSsr) return function(UU, XU) {
        return DU(UU, XU + 1)
      }(YU, "number" === typeof tU && (0, QU.B)(tU) ? tU : 0);
      var BU = [],
        ZU = "top" === aU || "bottom" === aU ? "width" : "height",
        RU = kU && "width" === ZU ? (0, AU.g)(kU, {
          fontSize: XU,
          letterSpacing: zU
        }) : {
          width: 0,
          height: 0
        },
        PU = function(UU, cU) {
          var QU = yU()(gU) ? gU(UU.value, cU) : UU.value;
          return "width" === ZU ? function(UU, XU, zU) {
            var cU = {
              width: UU.width + XU.width,
              height: UU.height + XU.height
            };
            return (0, oU.f)(cU, zU)
          }((0, AU.g)(QU, {
            fontSize: XU,
            letterSpacing: zU
          }), RU, GU) : (0, AU.g)(QU, {
            fontSize: XU,
            letterSpacing: zU
          })[ZU]
        },
        WU = YU.length >= 2 ? (0, QU.H)(YU[1].coordinate - YU[0].coordinate) : 1,
        dU = function(UU, XU, zU) {
          var cU = "width" === zU,
            yU = UU.x,
            QU = UU.y,
            AU = UU.width,
            FU = UU.height;
          return 1 === XU ? {
            start: cU ? yU : QU,
            end: cU ? yU + AU : QU + FU
          } : {
            start: cU ? yU + AU : QU + FU,
            end: cU ? yU : QU
          }
        }(NU, WU, ZU);
      return "equidistantPreserveStart" === tU ? function(UU, XU, zU, cU, yU) {
        for (var QU, AU = (cU || []).slice(), FU = XU.start, oU = XU.end, YU = 0, NU = 1, IU = FU, pU = function() {
            var XU = null === cU || void 0 === cU ? void 0 : cU[YU];
            if (void 0 === XU) return {
              v: DU(cU, NU)
            };
            var QU, AU = YU,
              pU = function() {
                return void 0 === QU && (QU = zU(XU, AU)), QU
              },
              aU = XU.coordinate,
              tU = 0 === YU || EU(UU, aU, pU, IU, oU);
            tU || (YU = 0, IU = FU, NU += 1), tU && (IU = aU + UU * (pU() / 2 + yU), YU += NU)
          }; NU <= AU.length;)
          if (QU = pU()) return QU.v;
        return []
      }(WU, dU, PU, YU, pU) : (BU = "preserveStart" === tU || "preserveStartEnd" === tU ? function(UU, XU, zU, cU, yU, QU) {
        var AU = (cU || []).slice(),
          FU = AU.length,
          oU = XU.start,
          DU = XU.end;
        if (QU) {
          var YU = cU[FU - 1],
            NU = zU(YU, FU - 1),
            pU = UU * (YU.coordinate + UU * NU / 2 - DU);
          AU[FU - 1] = YU = IU(IU({}, YU), {}, {
            tickCoord: pU > 0 ? YU.coordinate - pU * UU : YU.coordinate
          }), EU(UU, YU.tickCoord, (function() {
            return NU
          }), oU, DU) && (DU = YU.tickCoord - UU * (NU / 2 + yU), AU[FU - 1] = IU(IU({}, YU), {}, {
            isShow: !0
          }))
        }
        for (var aU = QU ? FU - 1 : FU, tU = function(XU) {
            var cU, QU = AU[XU],
              FU = function() {
                return void 0 === cU && (cU = zU(QU, XU)), cU
              };
            if (0 === XU) {
              var YU = UU * (QU.coordinate - UU * FU() / 2 - oU);
              AU[XU] = QU = IU(IU({}, QU), {}, {
                tickCoord: YU < 0 ? QU.coordinate - YU * UU : QU.coordinate
              })
            } else AU[XU] = QU = IU(IU({}, QU), {}, {
              tickCoord: QU.coordinate
            });
            EU(UU, QU.tickCoord, FU, oU, DU) && (oU = QU.tickCoord + UU * (FU() / 2 + yU), AU[XU] = IU(IU({}, QU), {}, {
              isShow: !0
            }))
          }, gU = 0; gU < aU; gU++) tU(gU);
        return AU
      }(WU, dU, PU, YU, pU, "preserveStartEnd" === tU) : function(UU, XU, zU, cU, yU) {
        for (var QU = (cU || []).slice(), AU = QU.length, FU = XU.start, oU = XU.end, DU = function(XU) {
            var cU, DU = QU[XU],
              YU = function() {
                return void 0 === cU && (cU = zU(DU, XU)), cU
              };
            if (XU === AU - 1) {
              var NU = UU * (DU.coordinate + UU * YU() / 2 - oU);
              QU[XU] = DU = IU(IU({}, DU), {}, {
                tickCoord: NU > 0 ? DU.coordinate - NU * UU : DU.coordinate
              })
            } else QU[XU] = DU = IU(IU({}, DU), {}, {
              tickCoord: DU.coordinate
            });
            EU(UU, DU.tickCoord, YU, FU, oU) && (oU = DU.tickCoord - UU * (YU() / 2 + yU), QU[XU] = IU(IU({}, DU), {}, {
              isShow: !0
            }))
          }, YU = AU - 1; YU >= 0; YU--) DU(YU);
        return QU
      }(WU, dU, PU, YU, pU), BU.filter((function(UU) {
        return UU.isShow
      })))
    }
  },
  6996: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => oU
    });
    var cU = zU(6024),
      yU = zU(6864),
      QU = zU(6967),
      AU = zU(6984),
      FU = zU(6833),
      oU = (0, cU.c)({
        chartName: "BarChart",
        GraphicalChild: yU.e,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: QU.d
        }, {
          axisType: "yAxis",
          AxisComp: AU.d
        }],
        formatAxisMap: FU.d
      })
  },
  6021: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yX
    });
    var cU = zU(6024),
      yU = zU(6955),
      QU = zU(6864),
      AU = zU(6961),
      FU = zU(61),
      oU = zU(6729),
      DU = zU(5987),
      EU = zU.n(DU),
      YU = zU(6797),
      NU = zU.n(YU),
      IU = zU(5845),
      pU = zU.n(IU),
      aU = zU(5657),
      tU = zU(6576),
      gU = zU(6881),
      kU = zU(5998),
      GU = zU(6588);

    function BU(UU) {
      return BU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, BU(UU)
    }

    function ZU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, eU(cU.key), cU)
      }
    }

    function RU(UU, XU, zU) {
      return XU = WU(XU),
        function(UU, XU) {
          if (XU && ("object" === BU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, PU() ? Reflect.construct(XU, zU || [], WU(UU).constructor) : XU.apply(UU, zU))
    }

    function PU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (PU = function() {
        return !!UU
      })()
    }

    function WU(UU) {
      return WU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, WU(UU)
    }

    function dU(UU, XU) {
      return dU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, dU(UU, XU)
    }

    function LU(UU, XU, zU) {
      return (XU = eU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function eU(UU) {
      var XU = function(UU, XU) {
        if ("object" != BU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != BU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == BU(XU) ? XU : XU + ""
    }
    var CU = function(UU) {
      function XU() {
        return function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, XU), RU(this, XU, arguments)
      }
      return function(UU, XU) {
        if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(XU && XU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), XU && dU(UU, XU)
      }(XU, UU), zU = XU, (cU = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && ZU(zU.prototype, cU), yU && ZU(zU, yU), Object.defineProperty(zU, "prototype", {
        writable: !1
      }), zU;
      var zU, cU, yU
    }(FU.Component);
    LU(CU, "displayName", "ZAxis"), LU(CU, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var wU = zU(6948),
      qU = zU(6805),
      OU = zU(6873),
      SU = zU(5746),
      rU = zU(6752),
      uU = zU(6019),
      fU = zU(6676),
      iU = zU(6892),
      HU = ["option", "isActive"];

    function MU() {
      return MU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, MU.apply(this, arguments)
    }

    function vU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function VU(UU) {
      var XU = UU.option,
        zU = UU.isActive,
        cU = vU(UU, HU);
      return "string" === typeof XU ? FU.createElement(iU.d, MU({
        option: FU.createElement(fU.c, MU({
          type: XU
        }, cU)),
        isActive: zU,
        shapeType: "symbols"
      }, cU)) : FU.createElement(iU.d, MU({
        option: XU,
        isActive: zU,
        shapeType: "symbols"
      }, cU))
    }

    function sU(UU) {
      return sU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, sU(UU)
    }

    function nU() {
      return nU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, nU.apply(this, arguments)
    }

    function mU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function lU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? mU(Object(zU), !0).forEach((function(XU) {
          TU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : mU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function xU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, hU(cU.key), cU)
      }
    }

    function JU(UU, XU, zU) {
      return XU = KU(XU),
        function(UU, XU) {
          if (XU && ("object" === sU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, jU() ? Reflect.construct(XU, zU || [], KU(UU).constructor) : XU.apply(UU, zU))
    }

    function jU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (jU = function() {
        return !!UU
      })()
    }

    function KU(UU) {
      return KU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, KU(UU)
    }

    function bU(UU, XU) {
      return bU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, bU(UU, XU)
    }

    function TU(UU, XU, zU) {
      return (XU = hU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function hU(UU) {
      var XU = function(UU, XU) {
        if ("object" != sU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != sU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == sU(XU) ? XU : XU + ""
    }
    var UX = function(UU) {
      function XU() {
        var UU;
        ! function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, XU);
        for (var zU = arguments.length, cU = new Array(zU), yU = 0; yU < zU; yU++) cU[yU] = arguments[yU];
        return TU(UU = JU(this, XU, [].concat(cU)), "state", {
          isAnimationFinished: !1
        }), TU(UU, "handleAnimationEnd", (function() {
          UU.setState({
            isAnimationFinished: !0
          })
        })), TU(UU, "handleAnimationStart", (function() {
          UU.setState({
            isAnimationFinished: !1
          })
        })), TU(UU, "id", (0, SU.J)("recharts-scatter-")), UU
      }
      return function(UU, XU) {
        if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(XU && XU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), XU && bU(UU, XU)
      }(XU, UU), zU = XU, cU = [{
        key: "renderSymbolsStatically",
        value: function(UU) {
          var XU = this,
            zU = this.props,
            cU = zU.shape,
            yU = zU.activeShape,
            QU = zU.activeIndex,
            AU = (0, kU.c)(this.props, !1);
          return UU.map((function(UU, zU) {
            var oU = QU === zU,
              DU = oU ? yU : cU,
              EU = lU(lU({}, AU), UU);
            return FU.createElement(tU.e, nU({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === UU || void 0 === UU ? void 0 : UU.cx, "-").concat(null === UU || void 0 === UU ? void 0 : UU.cy, "-").concat(null === UU || void 0 === UU ? void 0 : UU.size, "-").concat(zU)
            }, (0, uU.q)(XU.props, UU, zU), {
              role: "img"
            }), FU.createElement(VU, nU({
              option: DU,
              isActive: oU,
              key: "symbol-".concat(zU)
            }, EU)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var UU = this,
            XU = this.props,
            zU = XU.points,
            cU = XU.isAnimationActive,
            yU = XU.animationBegin,
            QU = XU.animationDuration,
            AU = XU.animationEasing,
            DU = XU.animationId,
            EU = this.state.prevPoints;
          return FU.createElement(oU.e, {
            gY: yU,
            duration: QU,
            isActive: cU,
            easing: AU,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(DU),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(XU) {
            var cU = XU.t,
              yU = zU.map((function(UU, XU) {
                var zU = EU && EU[XU];
                if (zU) {
                  var yU = (0, SU.x)(zU.cx, UU.cx),
                    QU = (0, SU.x)(zU.cy, UU.cy),
                    AU = (0, SU.x)(zU.size, UU.size);
                  return lU(lU({}, UU), {}, {
                    cx: yU(cU),
                    cy: QU(cU),
                    size: AU(cU)
                  })
                }
                var FU = (0, SU.x)(0, UU.size);
                return lU(lU({}, UU), {}, {
                  size: FU(cU)
                })
              }));
            return FU.createElement(tU.e, null, UU.renderSymbolsStatically(yU))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var UU = this.props,
            XU = UU.points,
            zU = UU.isAnimationActive,
            cU = this.state.prevPoints;
          return !(zU && XU && XU.length) || cU && NU()(cU, XU) ? this.renderSymbolsStatically(XU) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var UU = this.props,
            XU = UU.points,
            zU = UU.xAxis,
            cU = UU.yAxis,
            yU = UU.children,
            QU = (0, kU.d)(yU, qU.b);
          return QU ? QU.map((function(UU, yU) {
            var QU = UU.props,
              AU = QU.direction,
              oU = QU.dataKey;
            return FU.cloneElement(UU, {
              key: "".concat(AU, "-").concat(oU, "-").concat(XU[yU]),
              data: XU,
              xAxis: zU,
              yAxis: cU,
              layout: "x" === AU ? "vertical" : "horizontal",
              dataPointFormatter: function(UU, XU) {
                return {
                  x: UU.cx,
                  y: UU.cy,
                  value: "x" === AU ? +UU.node.x : +UU.node.y,
                  errorVal: (0, rU.db)(UU, XU)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var UU, XU, zU = this.props,
            cU = zU.points,
            yU = zU.line,
            QU = zU.lineType,
            AU = zU.lineJointType,
            oU = (0, kU.c)(this.props, !1),
            DU = (0, kU.c)(yU, !1);
          if ("joint" === QU) UU = cU.map((function(UU) {
            return {
              x: UU.cx,
              y: UU.cy
            }
          }));
          else if ("fitting" === QU) {
            var EU = (0, SU.m)(cU),
              YU = EU.xmin,
              NU = EU.xmax,
              IU = EU.a,
              aU = EU.b,
              gU = function(UU) {
                return IU * UU + aU
              };
            UU = [{
              x: YU,
              y: gU(YU)
            }, {
              x: NU,
              y: gU(NU)
            }]
          }
          var GU = lU(lU(lU({}, oU), {}, {
            fill: "none",
            stroke: oU && oU.fill
          }, DU), {}, {
            points: UU
          });
          return XU = FU.isValidElement(yU) ? FU.cloneElement(yU, GU) : pU()(yU) ? yU(GU) : FU.createElement(wU.d, nU({}, GU, {
            type: AU
          })), FU.createElement(tU.e, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, XU)
        }
      }, {
        key: "render",
        value: function() {
          var UU = this.props,
            XU = UU.hide,
            zU = UU.points,
            cU = UU.line,
            yU = UU.className,
            QU = UU.xAxis,
            AU = UU.yAxis,
            oU = UU.left,
            DU = UU.top,
            YU = UU.width,
            NU = UU.height,
            IU = UU.id,
            pU = UU.isAnimationActive;
          if (XU || !zU || !zU.length) return null;
          var kU = this.state.isAnimationFinished,
            GU = (0, aU.c)("recharts-scatter", yU),
            BU = QU && QU.allowDataOverflow,
            ZU = AU && AU.allowDataOverflow,
            RU = BU || ZU,
            PU = EU()(IU) ? this.id : IU;
          return FU.createElement(tU.e, {
            className: GU,
            clipPath: RU ? "url(#clipPath-".concat(PU, ")") : null
          }, BU || ZU ? FU.createElement("defs", null, FU.createElement("clipPath", {
            id: "clipPath-".concat(PU)
          }, FU.createElement("rect", {
            x: BU ? oU : oU - YU / 2,
            y: ZU ? DU : DU - NU / 2,
            width: BU ? YU : 2 * YU,
            height: ZU ? NU : 2 * NU
          }))) : null, cU && this.renderLine(), this.renderErrorBar(), FU.createElement(tU.e, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!pU || kU) && gU.b.renderCallByParent(this.props, zU))
        }
      }], yU = [{
        key: "getDerivedStateFromProps",
        value: function(UU, XU) {
          return UU.animationId !== XU.prevAnimationId ? {
            prevAnimationId: UU.animationId,
            curPoints: UU.points,
            prevPoints: XU.curPoints
          } : UU.points !== XU.curPoints ? {
            curPoints: UU.points
          } : null
        }
      }], cU && xU(zU.prototype, cU), yU && xU(zU, yU), Object.defineProperty(zU, "prototype", {
        writable: !1
      }), zU;
      var zU, cU, yU
    }(FU.PureComponent);
    TU(UX, "displayName", "Scatter"), TU(UX, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !GU.e.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), TU(UX, "getComposedData", (function(UU) {
      var XU = UU.xAxis,
        zU = UU.yAxis,
        cU = UU.zAxis,
        yU = UU.item,
        QU = UU.displayedData,
        AU = UU.xAxisTicks,
        FU = UU.yAxisTicks,
        oU = UU.offset,
        DU = yU.props.tooltipType,
        YU = (0, kU.d)(yU.props.children, OU.d),
        NU = EU()(XU.dataKey) ? yU.props.dataKey : XU.dataKey,
        IU = EU()(zU.dataKey) ? yU.props.dataKey : zU.dataKey,
        pU = cU && cU.dataKey,
        aU = cU ? cU.range : CU.defaultProps.range,
        tU = aU && aU[0],
        gU = XU.scale.bandwidth ? XU.scale.bandwidth() : 0,
        GU = zU.scale.bandwidth ? zU.scale.bandwidth() : 0,
        BU = QU.map((function(UU, QU) {
          var oU = (0, rU.db)(UU, NU),
            aU = (0, rU.db)(UU, IU),
            kU = !EU()(pU) && (0, rU.db)(UU, pU) || "-",
            BU = [{
              name: EU()(XU.dataKey) ? yU.props.name : XU.name || XU.dataKey,
              unit: XU.unit || "",
              value: oU,
              payload: UU,
              dataKey: NU,
              type: DU
            }, {
              name: EU()(zU.dataKey) ? yU.props.name : zU.name || zU.dataKey,
              unit: zU.unit || "",
              value: aU,
              payload: UU,
              dataKey: IU,
              type: DU
            }];
          "-" !== kU && BU.push({
            name: cU.name || cU.dataKey,
            unit: cU.unit || "",
            value: kU,
            payload: UU,
            dataKey: pU,
            type: DU
          });
          var ZU = (0, rU.C)({
              axis: XU,
              ticks: AU,
              bandSize: gU,
              entry: UU,
              index: QU,
              dataKey: NU
            }),
            RU = (0, rU.C)({
              axis: zU,
              ticks: FU,
              bandSize: GU,
              entry: UU,
              index: QU,
              dataKey: IU
            }),
            PU = "-" !== kU ? cU.scale(kU) : tU,
            WU = Math.sqrt(Math.max(PU, 0) / Math.PI);
          return lU(lU({}, UU), {}, {
            cx: ZU,
            cy: RU,
            x: ZU - WU,
            y: RU - WU,
            xAxis: XU,
            yAxis: zU,
            zAxis: cU,
            width: 2 * WU,
            height: 2 * WU,
            size: PU,
            node: {
              x: oU,
              y: aU,
              z: kU
            },
            tooltipPayload: BU,
            tooltipPosition: {
              x: ZU,
              y: RU
            },
            payload: UU
          }, YU && YU[QU] && YU[QU].props)
        }));
      return lU({
        points: BU
      }, oU)
    }));
    var XX = zU(6967),
      zX = zU(6984),
      cX = zU(6833),
      yX = (0, cU.c)({
        chartName: "ComposedChart",
        GraphicalChild: [AU.e, yU.c, QU.e, UX],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: XX.d
        }, {
          axisType: "yAxis",
          AxisComp: zX.d
        }, {
          axisType: "zAxis",
          AxisComp: CU
        }],
        formatAxisMap: cX.d
      })
  },
  6024: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => Mz
    });
    var cU = zU(61),
      yU = zU(5987),
      QU = zU.n(yU),
      AU = zU(5845),
      FU = zU.n(AU),
      oU = zU(6032),
      DU = zU.n(oU),
      EU = zU(5781),
      YU = zU.n(EU),
      NU = zU(6079),
      IU = zU.n(NU),
      pU = zU(5664),
      aU = zU.n(pU),
      tU = zU(5657),
      gU = zU(6565),
      kU = zU(6570),
      GU = zU(6576),
      BU = zU(6579),
      ZU = zU(6674),
      RU = zU(6719),
      PU = zU(6727),
      WU = zU(5998),
      dU = zU(6754),
      LU = zU(6735),
      eU = zU(6752),
      CU = zU(5746);

    function wU(UU) {
      return wU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, wU(UU)
    }

    function qU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function OU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? qU(Object(zU), !0).forEach((function(XU) {
          SU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : qU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function SU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != wU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != wU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == wU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }
    var rU = ["Webkit", "Moz", "O", "ms"];

    function uU(UU) {
      return uU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, uU(UU)
    }

    function fU() {
      return fU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, fU.apply(this, arguments)
    }

    function iU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function HU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? iU(Object(zU), !0).forEach((function(XU) {
          mU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : iU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function MU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, lU(cU.key), cU)
      }
    }

    function vU(UU, XU, zU) {
      return XU = sU(XU),
        function(UU, XU) {
          if (XU && ("object" === uU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, VU() ? Reflect.construct(XU, zU || [], sU(UU).constructor) : XU.apply(UU, zU))
    }

    function VU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (VU = function() {
        return !!UU
      })()
    }

    function sU(UU) {
      return sU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, sU(UU)
    }

    function nU(UU, XU) {
      return nU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, nU(UU, XU)
    }

    function mU(UU, XU, zU) {
      return (XU = lU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function lU(UU) {
      var XU = function(UU, XU) {
        if ("object" != uU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != uU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == uU(XU) ? XU : XU + ""
    }
    var xU = function(UU) {
        return UU.changedTouches && !!UU.changedTouches.length
      },
      JU = function(UU) {
        function XU(UU) {
          var zU;
          return function(UU, XU) {
            if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
          }(this, XU), mU(zU = vU(this, XU, [UU]), "handleDrag", (function(UU) {
            zU.leaveTimer && (clearTimeout(zU.leaveTimer), zU.leaveTimer = null), zU.state.isTravellerMoving ? zU.handleTravellerMove(UU) : zU.state.isSlideMoving && zU.handleSlideDrag(UU)
          })), mU(zU, "handleTouchMove", (function(UU) {
            null != UU.changedTouches && UU.changedTouches.length > 0 && zU.handleDrag(UU.changedTouches[0])
          })), mU(zU, "handleDragEnd", (function() {
            zU.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var UU = zU.props,
                XU = UU.endIndex,
                cU = UU.onDragEnd,
                yU = UU.startIndex;
              null === cU || void 0 === cU || cU({
                endIndex: XU,
                startIndex: yU
              })
            })), zU.detachDragEndListener()
          })), mU(zU, "handleLeaveWrapper", (function() {
            (zU.state.isTravellerMoving || zU.state.isSlideMoving) && (zU.leaveTimer = window.setTimeout(zU.handleDragEnd, zU.props.leaveTimeOut))
          })), mU(zU, "handleEnterSlideOrTraveller", (function() {
            zU.setState({
              isTextActive: !0
            })
          })), mU(zU, "handleLeaveSlideOrTraveller", (function() {
            zU.setState({
              isTextActive: !1
            })
          })), mU(zU, "handleSlideDragStart", (function(UU) {
            var XU = xU(UU) ? UU.changedTouches[0] : UU;
            zU.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: XU.pageX
            }), zU.attachDragEndListener()
          })), zU.travellerDragStartHandlers = {
            startX: zU.handleTravellerDragStart.bind(zU, "startX"),
            endX: zU.handleTravellerDragStart.bind(zU, "endX")
          }, zU.state = {}, zU
        }
        return function(UU, XU) {
          if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
          UU.prototype = Object.create(XU && XU.prototype, {
            constructor: {
              value: UU,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(UU, "prototype", {
            writable: !1
          }), XU && nU(UU, XU)
        }(XU, UU), zU = XU, yU = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(UU) {
            var zU = UU.startX,
              cU = UU.endX,
              yU = this.state.scaleValues,
              QU = this.props,
              AU = QU.gap,
              FU = QU.data.length - 1,
              oU = Math.min(zU, cU),
              DU = Math.max(zU, cU),
              EU = XU.getIndexInRange(yU, oU),
              YU = XU.getIndexInRange(yU, DU);
            return {
              startIndex: EU - EU % AU,
              endIndex: YU === FU ? FU : YU - YU % AU
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(UU) {
            var XU = this.props,
              zU = XU.data,
              cU = XU.tickFormatter,
              yU = XU.dataKey,
              QU = (0, eU.db)(zU[UU], yU, UU);
            return FU()(cU) ? cU(QU, UU) : QU
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
            var XU = this.state,
              zU = XU.slideMoveStartX,
              cU = XU.startX,
              yU = XU.endX,
              QU = this.props,
              AU = QU.x,
              FU = QU.width,
              oU = QU.travellerWidth,
              DU = QU.startIndex,
              EU = QU.endIndex,
              YU = QU.onChange,
              NU = UU.pageX - zU;
            NU > 0 ? NU = Math.min(NU, AU + FU - oU - yU, AU + FU - oU - cU) : NU < 0 && (NU = Math.max(NU, AU - cU, AU - yU));
            var IU = this.getIndex({
              startX: cU + NU,
              endX: yU + NU
            });
            IU.startIndex === DU && IU.endIndex === EU || !YU || YU(IU), this.setState({
              startX: cU + NU,
              endX: yU + NU,
              slideMoveStartX: UU.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(UU, XU) {
            var zU = xU(XU) ? XU.changedTouches[0] : XU;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: UU,
              brushMoveStartX: zU.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(UU) {
            var XU = this.state,
              zU = XU.brushMoveStartX,
              cU = XU.movingTravellerId,
              yU = XU.endX,
              QU = XU.startX,
              AU = this.state[cU],
              FU = this.props,
              oU = FU.x,
              DU = FU.width,
              EU = FU.travellerWidth,
              YU = FU.onChange,
              NU = FU.gap,
              IU = FU.data,
              pU = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              aU = UU.pageX - zU;
            aU > 0 ? aU = Math.min(aU, oU + DU - EU - AU) : aU < 0 && (aU = Math.max(aU, oU - AU)), pU[cU] = AU + aU;
            var tU = this.getIndex(pU),
              gU = tU.startIndex,
              kU = tU.endIndex;
            this.setState(mU(mU({}, cU, AU + aU), "brushMoveStartX", UU.pageX), (function() {
              YU && function() {
                var UU = IU.length - 1;
                return "startX" === cU && (yU > QU ? gU % NU === 0 : kU % NU === 0) || yU < QU && kU === UU || "endX" === cU && (yU > QU ? kU % NU === 0 : gU % NU === 0) || yU > QU && kU === UU
              }() && YU(tU)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(UU, XU) {
            var zU = this,
              cU = this.state,
              yU = cU.scaleValues,
              QU = cU.startX,
              AU = cU.endX,
              FU = this.state[XU],
              oU = yU.indexOf(FU);
            if (-1 !== oU) {
              var DU = oU + UU;
              if (!(-1 === DU || DU >= yU.length)) {
                var EU = yU[DU];
                "startX" === XU && EU >= AU || "endX" === XU && EU <= QU || this.setState(mU({}, XU, EU), (function() {
                  zU.props.onChange(zU.getIndex({
                    startX: zU.state.startX,
                    endX: zU.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var UU = this.props,
              XU = UU.x,
              zU = UU.y,
              yU = UU.width,
              QU = UU.height,
              AU = UU.fill,
              FU = UU.stroke;
            return cU.createElement("rect", {
              stroke: FU,
              fill: AU,
              x: XU,
              y: zU,
              width: yU,
              height: QU
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var UU = this.props,
              XU = UU.x,
              zU = UU.y,
              yU = UU.width,
              QU = UU.height,
              AU = UU.data,
              FU = UU.children,
              oU = UU.padding,
              DU = cU.Children.only(FU);
            return DU ? cU.cloneElement(DU, {
              x: XU,
              y: zU,
              width: yU,
              height: QU,
              margin: oU,
              compact: !0,
              data: AU
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(UU, zU) {
            var yU, QU, AU = this,
              FU = this.props,
              oU = FU.y,
              DU = FU.travellerWidth,
              EU = FU.height,
              YU = FU.traveller,
              NU = FU.ariaLabel,
              IU = FU.data,
              pU = FU.startIndex,
              aU = FU.endIndex,
              tU = Math.max(UU, this.props.x),
              gU = HU(HU({}, (0, WU.c)(this.props, !1)), {}, {
                x: tU,
                y: oU,
                width: DU,
                height: EU
              }),
              kU = NU || "Min value: ".concat(null === (yU = IU[pU]) || void 0 === yU ? void 0 : yU.name, ", Max value: ").concat(null === (QU = IU[aU]) || void 0 === QU ? void 0 : QU.name);
            return cU.createElement(GU.e, {
              tabIndex: 0,
              role: "slider",
              "aria-label": kU,
              "aria-valuenow": UU,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[zU],
              onTouchStart: this.travellerDragStartHandlers[zU],
              onKeyDown: function(UU) {
                ["ArrowLeft", "ArrowRight"].includes(UU.key) && (UU.preventDefault(), UU.stopPropagation(), AU.handleTravellerMoveKeyboard("ArrowRight" === UU.key ? 1 : -1, zU))
              },
              onFocus: function() {
                AU.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                AU.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, XU.renderTraveller(YU, gU))
          }
        }, {
          key: "renderSlide",
          value: function(UU, XU) {
            var zU = this.props,
              yU = zU.y,
              QU = zU.height,
              AU = zU.stroke,
              FU = zU.travellerWidth,
              oU = Math.min(UU, XU) + FU,
              DU = Math.max(Math.abs(XU - UU) - FU, 0);
            return cU.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: AU,
              fillOpacity: .2,
              x: oU,
              y: yU,
              width: DU,
              height: QU
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var UU = this.props,
              XU = UU.startIndex,
              zU = UU.endIndex,
              yU = UU.y,
              QU = UU.height,
              AU = UU.travellerWidth,
              FU = UU.stroke,
              oU = this.state,
              DU = oU.startX,
              EU = oU.endX,
              YU = {
                pointerEvents: "none",
                fill: FU
              };
            return cU.createElement(GU.e, {
              className: "recharts-brush-texts"
            }, cU.createElement(LU.c, fU({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(DU, EU) - 5,
              y: yU + QU / 2
            }, YU), this.getTextOfTick(XU)), cU.createElement(LU.c, fU({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(DU, EU) + AU + 5,
              y: yU + QU / 2
            }, YU), this.getTextOfTick(zU)))
          }
        }, {
          key: "render",
          value: function() {
            var UU = this.props,
              XU = UU.data,
              zU = UU.className,
              yU = UU.children,
              QU = UU.x,
              AU = UU.y,
              FU = UU.width,
              oU = UU.height,
              DU = UU.alwaysShowText,
              EU = this.state,
              YU = EU.startX,
              NU = EU.endX,
              IU = EU.isTextActive,
              pU = EU.isSlideMoving,
              aU = EU.isTravellerMoving,
              gU = EU.isTravellerFocused;
            if (!XU || !XU.length || !(0, CU.B)(QU) || !(0, CU.B)(AU) || !(0, CU.B)(FU) || !(0, CU.B)(oU) || FU <= 0 || oU <= 0) return null;
            var kU = (0, tU.c)("recharts-brush", zU),
              BU = 1 === cU.Children.count(yU),
              ZU = function(UU, XU) {
                if (!UU) return null;
                var zU = UU.replace(/(\w)/, (function(UU) {
                    return UU.toUpperCase()
                  })),
                  cU = rU.reduce((function(UU, cU) {
                    return OU(OU({}, UU), {}, SU({}, cU + zU, XU))
                  }), {});
                return cU[UU] = XU, cU
              }("userSelect", "none");
            return cU.createElement(GU.e, {
              className: kU,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: ZU
            }, this.renderBackground(), BU && this.renderPanorama(), this.renderSlide(YU, NU), this.renderTravellerLayer(YU, "startX"), this.renderTravellerLayer(NU, "endX"), (IU || pU || aU || gU || DU) && this.renderText())
          }
        }], QU = [{
          key: "renderDefaultTraveller",
          value: function(UU) {
            var XU = UU.x,
              zU = UU.y,
              yU = UU.width,
              QU = UU.height,
              AU = UU.stroke,
              FU = Math.floor(zU + QU / 2) - 1;
            return cU.createElement(cU.Fragment, null, cU.createElement("rect", {
              x: XU,
              y: zU,
              width: yU,
              height: QU,
              fill: AU,
              stroke: "none"
            }), cU.createElement("line", {
              x1: XU + 1,
              y1: FU,
              x2: XU + yU - 1,
              y2: FU,
              fill: "none",
              stroke: "#fff"
            }), cU.createElement("line", {
              x1: XU + 1,
              y1: FU + 2,
              x2: XU + yU - 1,
              y2: FU + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(UU, zU) {
            return cU.isValidElement(UU) ? cU.cloneElement(UU, zU) : FU()(UU) ? UU(zU) : XU.renderDefaultTraveller(zU)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(UU, XU) {
            var zU = UU.data,
              cU = UU.width,
              yU = UU.x,
              QU = UU.travellerWidth,
              AU = UU.updateId,
              FU = UU.startIndex,
              oU = UU.endIndex;
            if (zU !== XU.prevData || AU !== XU.prevUpdateId) return HU({
              prevData: zU,
              prevTravellerWidth: QU,
              prevUpdateId: AU,
              prevX: yU,
              prevWidth: cU
            }, zU && zU.length ? function(UU) {
              var XU = UU.data,
                zU = UU.startIndex,
                cU = UU.endIndex,
                yU = UU.x,
                QU = UU.width,
                AU = UU.travellerWidth;
              if (!XU || !XU.length) return {};
              var FU = XU.length,
                oU = (0, dU.h)().domain(DU()(0, FU)).range([yU, yU + QU - AU]),
                EU = oU.domain().map((function(UU) {
                  return oU(UU)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: oU(zU),
                endX: oU(cU),
                scale: oU,
                scaleValues: EU
              }
            }({
              data: zU,
              width: cU,
              x: yU,
              travellerWidth: QU,
              startIndex: FU,
              endIndex: oU
            }) : {
              scale: null,
              scaleValues: null
            });
            if (XU.scale && (cU !== XU.prevWidth || yU !== XU.prevX || QU !== XU.prevTravellerWidth)) {
              XU.scale.range([yU, yU + cU - QU]);
              var EU = XU.scale.domain().map((function(UU) {
                return XU.scale(UU)
              }));
              return {
                prevData: zU,
                prevTravellerWidth: QU,
                prevUpdateId: AU,
                prevX: yU,
                prevWidth: cU,
                startX: XU.scale(UU.startIndex),
                endX: XU.scale(UU.endIndex),
                scaleValues: EU
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(UU, XU) {
            for (var zU = 0, cU = UU.length - 1; cU - zU > 1;) {
              var yU = Math.floor((zU + cU) / 2);
              UU[yU] > XU ? cU = yU : zU = yU
            }
            return XU >= UU[cU] ? cU : zU
          }
        }], yU && MU(zU.prototype, yU), QU && MU(zU, QU), Object.defineProperty(zU, "prototype", {
          writable: !1
        }), zU;
        var zU, yU, QU
      }(cU.PureComponent);
    mU(JU, "displayName", "Brush"), mU(JU, "defaultProps", {
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
    var jU = zU(6743),
      KU = zU(6810),
      bU = zU(6820),
      TU = zU(6830),
      hU = zU(6833),
      UX = zU(5995);

    function XX() {
      return XX = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, XX.apply(this, arguments)
    }

    function zX(UU) {
      return zX = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, zX(UU)
    }

    function cX(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function yX(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? cX(Object(zU), !0).forEach((function(XU) {
          EX(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : cX(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function QX(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, YX(cU.key), cU)
      }
    }

    function AX(UU, XU, zU) {
      return XU = oX(XU),
        function(UU, XU) {
          if (XU && ("object" === zX(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, FX() ? Reflect.construct(XU, zU || [], oX(UU).constructor) : XU.apply(UU, zU))
    }

    function FX() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (FX = function() {
        return !!UU
      })()
    }

    function oX(UU) {
      return oX = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, oX(UU)
    }

    function DX(UU, XU) {
      return DX = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, DX(UU, XU)
    }

    function EX(UU, XU, zU) {
      return (XU = YX(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function YX(UU) {
      var XU = function(UU, XU) {
        if ("object" != zX(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != zX(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == zX(XU) ? XU : XU + ""
    }
    var NX = function(UU) {
      function XU() {
        return function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, XU), AX(this, XU, arguments)
      }
      return function(UU, XU) {
        if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(XU && XU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), XU && DX(UU, XU)
      }(XU, UU), zU = XU, (yU = [{
        key: "render",
        value: function() {
          var UU = this.props,
            zU = UU.x,
            yU = UU.y,
            QU = UU.r,
            AU = UU.alwaysShow,
            FU = UU.clipPathId,
            oU = (0, CU.A)(zU),
            DU = (0, CU.A)(yU);
          if ((0, UX.c)(void 0 === AU, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !oU || !DU) return null;
          var EU = function(UU) {
            var XU = UU.x,
              zU = UU.y,
              cU = UU.xAxis,
              yU = UU.yAxis,
              QU = (0, hU.c)({
                x: cU.scale,
                y: yU.scale
              }),
              AU = QU.apply({
                x: XU,
                y: zU
              }, {
                bandAware: !0
              });
            return (0, TU.c)(UU, "discard") && !QU.isInRange(AU) ? null : AU
          }(this.props);
          if (!EU) return null;
          var YU = EU.x,
            NU = EU.y,
            IU = this.props,
            pU = IU.shape,
            aU = IU.className,
            gU = yX(yX({
              clipPath: (0, TU.c)(this.props, "hidden") ? "url(#".concat(FU, ")") : void 0
            }, (0, WU.c)(this.props, !0)), {}, {
              cx: YU,
              cy: NU
            });
          return cU.createElement(GU.e, {
            className: (0, tU.c)("recharts-reference-dot", aU)
          }, XU.renderDot(pU, gU), bU.c.renderCallByParent(this.props, {
            x: YU - QU,
            y: NU - QU,
            width: 2 * QU,
            height: 2 * QU
          }))
        }
      }]) && QX(zU.prototype, yU), QU && QX(zU, QU), Object.defineProperty(zU, "prototype", {
        writable: !1
      }), zU;
      var zU, yU, QU
    }(cU.Component);
    EX(NX, "displayName", "ReferenceDot"), EX(NX, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), EX(NX, "renderDot", (function(UU, XU) {
      return cU.isValidElement(UU) ? cU.cloneElement(UU, XU) : FU()(UU) ? UU(XU) : cU.createElement(RU.d, XX({}, XU, {
        cx: XU.cx,
        cy: XU.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var IX = zU(6915);

    function pX() {
      return pX = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, pX.apply(this, arguments)
    }

    function aX(UU) {
      return aX = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, aX(UU)
    }

    function tX(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function gX(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? tX(Object(zU), !0).forEach((function(XU) {
          PX(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : tX(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function kX(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, WX(cU.key), cU)
      }
    }

    function GX(UU, XU, zU) {
      return XU = ZX(XU),
        function(UU, XU) {
          if (XU && ("object" === aX(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, BX() ? Reflect.construct(XU, zU || [], ZX(UU).constructor) : XU.apply(UU, zU))
    }

    function BX() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (BX = function() {
        return !!UU
      })()
    }

    function ZX(UU) {
      return ZX = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, ZX(UU)
    }

    function RX(UU, XU) {
      return RX = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, RX(UU, XU)
    }

    function PX(UU, XU, zU) {
      return (XU = WX(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function WX(UU) {
      var XU = function(UU, XU) {
        if ("object" != aX(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != aX(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == aX(XU) ? XU : XU + ""
    }
    var dX = function(UU) {
      function XU() {
        return function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, XU), GX(this, XU, arguments)
      }
      return function(UU, XU) {
        if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(XU && XU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), XU && RX(UU, XU)
      }(XU, UU), zU = XU, (yU = [{
        key: "render",
        value: function() {
          var UU = this.props,
            zU = UU.x1,
            yU = UU.x2,
            QU = UU.y1,
            AU = UU.y2,
            FU = UU.className,
            oU = UU.alwaysShow,
            DU = UU.clipPathId;
          (0, UX.c)(void 0 === oU, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var EU = (0, CU.A)(zU),
            YU = (0, CU.A)(yU),
            NU = (0, CU.A)(QU),
            IU = (0, CU.A)(AU),
            pU = this.props.shape;
          if (!EU && !YU && !NU && !IU && !pU) return null;
          var aU = function(UU, XU, zU, cU, yU) {
            var QU = yU.x1,
              AU = yU.x2,
              FU = yU.y1,
              oU = yU.y2,
              DU = yU.xAxis,
              EU = yU.yAxis;
            if (!DU || !EU) return null;
            var YU = (0, hU.c)({
                x: DU.scale,
                y: EU.scale
              }),
              NU = {
                x: UU ? YU.x.apply(QU, {
                  position: "start"
                }) : YU.x.rangeMin,
                y: zU ? YU.y.apply(FU, {
                  position: "start"
                }) : YU.y.rangeMin
              },
              IU = {
                x: XU ? YU.x.apply(AU, {
                  position: "end"
                }) : YU.x.rangeMax,
                y: cU ? YU.y.apply(oU, {
                  position: "end"
                }) : YU.y.rangeMax
              };
            return !(0, TU.c)(yU, "discard") || YU.isInRange(NU) && YU.isInRange(IU) ? (0, hU.i)(NU, IU) : null
          }(EU, YU, NU, IU, this.props);
          if (!aU && !pU) return null;
          var gU = (0, TU.c)(this.props, "hidden") ? "url(#".concat(DU, ")") : void 0;
          return cU.createElement(GU.e, {
            className: (0, tU.c)("recharts-reference-area", FU)
          }, XU.renderRect(pU, gX(gX({
            clipPath: gU
          }, (0, WU.c)(this.props, !0)), aU)), bU.c.renderCallByParent(this.props, aU))
        }
      }]) && kX(zU.prototype, yU), QU && kX(zU, QU), Object.defineProperty(zU, "prototype", {
        writable: !1
      }), zU;
      var zU, yU, QU
    }(cU.Component);

    function LX(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return eX(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return eX(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return eX(UU, XU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function eX(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }
    PX(dX, "displayName", "ReferenceArea"), PX(dX, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), PX(dX, "renderRect", (function(UU, XU) {
      return cU.isValidElement(UU) ? cU.cloneElement(UU, XU) : FU()(UU) ? UU(XU) : cU.createElement(PU.b, pX({}, XU, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var CX = function(UU, XU, zU, cU, yU) {
        var QU = (0, WU.d)(UU, IX.b),
          AU = (0, WU.d)(UU, NX),
          FU = [].concat(LX(QU), LX(AU)),
          oU = (0, WU.d)(UU, dX),
          DU = "".concat(cU, "Id"),
          EU = cU[0],
          YU = XU;
        if (FU.length && (YU = FU.reduce((function(UU, XU) {
            if (XU.props[DU] === zU && (0, TU.c)(XU.props, "extendDomain") && (0, CU.B)(XU.props[EU])) {
              var cU = XU.props[EU];
              return [Math.min(UU[0], cU), Math.max(UU[1], cU)]
            }
            return UU
          }), YU)), oU.length) {
          var NU = "".concat(EU, "1"),
            IU = "".concat(EU, "2");
          YU = oU.reduce((function(UU, XU) {
            if (XU.props[DU] === zU && (0, TU.c)(XU.props, "extendDomain") && (0, CU.B)(XU.props[NU]) && (0, CU.B)(XU.props[IU])) {
              var cU = XU.props[NU],
                yU = XU.props[IU];
              return [Math.min(UU[0], cU, yU), Math.max(UU[1], cU, yU)]
            }
            return UU
          }), YU)
        }
        return yU && yU.length && (YU = yU.reduce((function(UU, XU) {
          return (0, CU.B)(XU) ? [Math.min(UU[0], XU), Math.max(UU[1], XU)] : UU
        }), YU)), YU
      },
      wX = zU(6822),
      qX = zU(6014),
      OX = zU(40),
      SX = new(zU.n(OX)()),
      rX = "recharts.syncMouseEvents",
      uX = zU(6019);

    function fX(UU) {
      return fX = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, fX(UU)
    }

    function iX(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, MX(cU.key), cU)
      }
    }

    function HX(UU, XU, zU) {
      return (XU = MX(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function MX(UU) {
      var XU = function(UU, XU) {
        if ("object" != fX(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != fX(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == fX(XU) ? XU : XU + ""
    }
    var vX = function() {
      return UU = function UU() {
        ! function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, UU), HX(this, "activeIndex", 0), HX(this, "coordinateList", []), HX(this, "layout", "horizontal")
      }, (XU = [{
        key: "setDetails",
        value: function(UU) {
          var XU, zU = UU.coordinateList,
            cU = void 0 === zU ? null : zU,
            yU = UU.container,
            QU = void 0 === yU ? null : yU,
            AU = UU.layout,
            FU = void 0 === AU ? null : AU,
            oU = UU.offset,
            DU = void 0 === oU ? null : oU,
            EU = UU.mouseHandlerCallback,
            YU = void 0 === EU ? null : EU;
          this.coordinateList = null !== (XU = null !== cU && void 0 !== cU ? cU : this.coordinateList) && void 0 !== XU ? XU : [], this.container = null !== QU && void 0 !== QU ? QU : this.container, this.layout = null !== FU && void 0 !== FU ? FU : this.layout, this.offset = null !== DU && void 0 !== DU ? DU : this.offset, this.mouseHandlerCallback = null !== YU && void 0 !== YU ? YU : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
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
          var UU, XU;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var zU = this.container.getBoundingClientRect(),
              cU = zU.x,
              yU = zU.y,
              QU = zU.height,
              AU = this.coordinateList[this.activeIndex].coordinate,
              FU = (null === (UU = window) || void 0 === UU ? void 0 : UU.scrollX) || 0,
              oU = (null === (XU = window) || void 0 === XU ? void 0 : XU.scrollY) || 0,
              DU = cU + AU + FU,
              EU = yU + this.offset.top + QU / 2 + oU;
            this.mouseHandlerCallback({
              pageX: DU,
              pageY: EU
            })
          }
        }
      }]) && iX(UU.prototype, XU), zU && iX(UU, zU), Object.defineProperty(UU, "prototype", {
        writable: !1
      }), UU;
      var UU, XU, zU
    }();
    var VX = zU(6892),
      sX = zU(6948);

    function nX(UU) {
      return nX = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, nX(UU)
    }
    var mX = ["x", "y", "top", "left", "width", "height", "className"];

    function lX() {
      return lX = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, lX.apply(this, arguments)
    }

    function xX(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function JX(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != nX(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != nX(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == nX(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function jX(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }
    var KX = function(UU, XU, zU, cU, yU, QU) {
        return "M".concat(UU, ",").concat(yU, "v").concat(cU, "M").concat(QU, ",").concat(XU, "h").concat(zU)
      },
      bX = function(UU) {
        var XU = UU.x,
          zU = void 0 === XU ? 0 : XU,
          yU = UU.y,
          QU = void 0 === yU ? 0 : yU,
          AU = UU.top,
          FU = void 0 === AU ? 0 : AU,
          oU = UU.left,
          DU = void 0 === oU ? 0 : oU,
          EU = UU.width,
          YU = void 0 === EU ? 0 : EU,
          NU = UU.height,
          IU = void 0 === NU ? 0 : NU,
          pU = UU.className,
          aU = function(UU) {
            for (var XU = 1; XU < arguments.length; XU++) {
              var zU = null != arguments[XU] ? arguments[XU] : {};
              XU % 2 ? xX(Object(zU), !0).forEach((function(XU) {
                JX(UU, XU, zU[XU])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : xX(Object(zU)).forEach((function(XU) {
                Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
              }))
            }
            return UU
          }({
            x: zU,
            y: QU,
            top: FU,
            left: DU,
            width: YU,
            height: IU
          }, jX(UU, mX));
        return (0, CU.B)(zU) && (0, CU.B)(QU) && (0, CU.B)(YU) && (0, CU.B)(IU) && (0, CU.B)(FU) && (0, CU.B)(DU) ? cU.createElement("path", lX({}, (0, WU.c)(aU, !0), {
          className: (0, tU.c)("recharts-cross", pU),
          d: KX(zU, QU, YU, IU, FU, DU)
        })) : null
      };

    function TX(UU) {
      var XU = UU.cx,
        zU = UU.cy,
        cU = UU.radius,
        yU = UU.startAngle,
        QU = UU.endAngle;
      return {
        points: [(0, wX.f)(XU, zU, cU, yU), (0, wX.f)(XU, zU, cU, QU)],
        cx: XU,
        cy: zU,
        radius: cU,
        startAngle: yU,
        endAngle: QU
      }
    }
    var hX = zU(6911);

    function Uz(UU, XU, zU) {
      var cU, yU, QU, AU;
      if ("horizontal" === UU) QU = cU = XU.x, yU = zU.top, AU = zU.top + zU.height;
      else if ("vertical" === UU) AU = yU = XU.y, cU = zU.left, QU = zU.left + zU.width;
      else if (null != XU.cx && null != XU.cy) {
        if ("centric" !== UU) return TX(XU);
        var FU = XU.cx,
          oU = XU.cy,
          DU = XU.innerRadius,
          EU = XU.outerRadius,
          YU = XU.angle,
          NU = (0, wX.f)(FU, oU, DU, YU),
          IU = (0, wX.f)(FU, oU, EU, YU);
        cU = NU.x, yU = NU.y, QU = IU.x, AU = IU.y
      }
      return [{
        x: cU,
        y: yU
      }, {
        x: QU,
        y: AU
      }]
    }

    function Xz(UU) {
      return Xz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, Xz(UU)
    }

    function zz(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function cz(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? zz(Object(zU), !0).forEach((function(XU) {
          yz(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : zz(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function yz(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != Xz(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != Xz(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == Xz(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function Qz(UU) {
      var XU, zU, yU, QU = UU.element,
        AU = UU.tooltipEventType,
        FU = UU.isActive,
        oU = UU.activeCoordinate,
        DU = UU.activePayload,
        EU = UU.offset,
        YU = UU.activeTooltipIndex,
        NU = UU.tooltipAxisBandSize,
        IU = UU.layout,
        pU = UU.chartName,
        aU = null !== (XU = QU.props.cursor) && void 0 !== XU ? XU : null === (zU = QU.type.defaultProps) || void 0 === zU ? void 0 : zU.cursor;
      if (!QU || !aU || !FU || !oU || "ScatterChart" !== pU && "axis" !== AU) return null;
      var gU = sX.d;
      if ("ScatterChart" === pU) yU = oU, gU = bX;
      else if ("BarChart" === pU) yU = function(UU, XU, zU, cU) {
        var yU = cU / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === UU ? XU.x - yU : zU.left + .5,
          y: "horizontal" === UU ? zU.top + .5 : XU.y - yU,
          width: "horizontal" === UU ? cU : zU.width - 1,
          height: "horizontal" === UU ? zU.height - 1 : cU
        }
      }(IU, oU, EU, NU), gU = PU.b;
      else if ("radial" === IU) {
        var kU = TX(oU),
          GU = kU.cx,
          BU = kU.cy,
          ZU = kU.radius;
        yU = {
          cx: GU,
          cy: BU,
          startAngle: kU.startAngle,
          endAngle: kU.endAngle,
          innerRadius: ZU,
          outerRadius: ZU
        }, gU = hX.e
      } else yU = {
        points: Uz(IU, oU, EU)
      }, gU = sX.d;
      var RU = cz(cz(cz(cz({
        stroke: "#ccc",
        pointerEvents: "none"
      }, EU), yU), (0, WU.c)(aU, !1)), {}, {
        payload: DU,
        payloadIndex: YU,
        className: (0, tU.c)("recharts-tooltip-cursor", aU.className)
      });
      return (0, cU.isValidElement)(aU) ? (0, cU.cloneElement)(aU, RU) : (0, cU.createElement)(gU, RU)
    }
    var Az = zU(6921),
      Fz = ["item"],
      oz = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function Dz(UU) {
      return Dz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, Dz(UU)
    }

    function Ez() {
      return Ez = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, Ez.apply(this, arguments)
    }

    function Yz(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        var zU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != zU) {
          var cU, yU, QU, AU, FU = [],
            oU = !0,
            DU = !1;
          try {
            if (QU = (zU = zU.call(UU)).next, 0 === XU) {
              if (Object(zU) !== zU) return;
              oU = !1
            } else
              for (; !(oU = (cU = QU.call(zU)).done) && (FU.push(cU.value), FU.length !== XU); oU = !0);
          } catch (UU) {
            DU = !0, yU = UU
          } finally {
            try {
              if (!oU && null != zU.return && (AU = zU.return(), Object(AU) !== AU)) return
            } finally {
              if (DU) throw yU
            }
          }
          return FU
        }
      }(UU, XU) || Gz(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Nz(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function Iz(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, Wz(cU.key), cU)
      }
    }

    function pz(UU, XU, zU) {
      return XU = tz(XU),
        function(UU, XU) {
          if (XU && ("object" === Dz(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, az() ? Reflect.construct(XU, zU || [], tz(UU).constructor) : XU.apply(UU, zU))
    }

    function az() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (az = function() {
        return !!UU
      })()
    }

    function tz(UU) {
      return tz = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, tz(UU)
    }

    function gz(UU, XU) {
      return gz = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, gz(UU, XU)
    }

    function kz(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return Bz(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || Gz(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Gz(UU, XU) {
      if (UU) {
        if ("string" === typeof UU) return Bz(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        return "Object" === zU && UU.constructor && (zU = UU.constructor.name), "Map" === zU || "Set" === zU ? Array.from(UU) : "Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU) ? Bz(UU, XU) : void 0
      }
    }

    function Bz(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function Zz(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function Rz(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? Zz(Object(zU), !0).forEach((function(XU) {
          Pz(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : Zz(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function Pz(UU, XU, zU) {
      return (XU = Wz(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function Wz(UU) {
      var XU = function(UU, XU) {
        if ("object" != Dz(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != Dz(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == Dz(XU) ? XU : XU + ""
    }
    var dz = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      Lz = {
        width: "100%",
        height: "100%"
      },
      ez = {
        x: 0,
        y: 0
      };

    function Cz(UU) {
      return UU
    }
    var wz = function(UU, XU) {
      var zU = XU.graphicalItems,
        cU = XU.dataStartIndex,
        yU = XU.dataEndIndex,
        QU = (null !== zU && void 0 !== zU ? zU : []).reduce((function(UU, XU) {
          var zU = XU.props.data;
          return zU && zU.length ? [].concat(kz(UU), kz(zU)) : UU
        }), []);
      return QU.length > 0 ? QU : UU && UU.length && (0, CU.B)(cU) && (0, CU.B)(yU) ? UU.slice(cU, yU + 1) : []
    };

    function qz(UU) {
      return "number" === UU ? [0, "auto"] : void 0
    }
    var Oz = function(UU, XU, zU, cU) {
        var yU = UU.graphicalItems,
          QU = UU.tooltipAxis,
          AU = wz(XU, UU);
        return zU < 0 || !yU || !yU.length || zU >= AU.length ? null : yU.reduce((function(yU, FU) {
          var oU, DU, EU = null !== (oU = FU.props.data) && void 0 !== oU ? oU : XU;
          if (EU && UU.dataStartIndex + UU.dataEndIndex !== 0 && UU.dataEndIndex - UU.dataStartIndex >= zU && (EU = EU.slice(UU.dataStartIndex, UU.dataEndIndex + 1)), QU.dataKey && !QU.allowDuplicatedCategory) {
            var YU = void 0 === EU ? AU : EU;
            DU = (0, CU.e)(YU, QU.dataKey, cU)
          } else DU = EU && EU[zU] || AU[zU];
          return DU ? [].concat(kz(yU), [(0, eU.bb)(FU, DU)]) : yU
        }), [])
      },
      Sz = function(UU, XU, zU, cU) {
        var yU = cU || {
            x: UU.chartX,
            y: UU.chartY
          },
          QU = function(UU, XU) {
            return "horizontal" === XU ? UU.x : "vertical" === XU ? UU.y : "centric" === XU ? UU.angle : UU.radius
          }(yU, zU),
          AU = UU.orderedTooltipTicks,
          FU = UU.tooltipAxis,
          oU = UU.tooltipTicks,
          DU = (0, eU.d)(QU, AU, oU, FU);
        if (DU >= 0 && oU) {
          var EU = oU[DU] && oU[DU].value,
            YU = Oz(UU, XU, DU, EU),
            NU = function(UU, XU, zU, cU) {
              var yU = XU.find((function(UU) {
                return UU && UU.index === zU
              }));
              if (yU) {
                if ("horizontal" === UU) return {
                  x: yU.coordinate,
                  y: cU.y
                };
                if ("vertical" === UU) return {
                  x: cU.x,
                  y: yU.coordinate
                };
                if ("centric" === UU) {
                  var QU = yU.coordinate,
                    AU = cU.radius;
                  return Rz(Rz(Rz({}, cU), (0, wX.f)(cU.cx, cU.cy, AU, QU)), {}, {
                    angle: QU,
                    radius: AU
                  })
                }
                var FU = yU.coordinate,
                  oU = cU.angle;
                return Rz(Rz(Rz({}, cU), (0, wX.f)(cU.cx, cU.cy, FU, oU)), {}, {
                  angle: oU,
                  radius: FU
                })
              }
              return ez
            }(zU, AU, DU, yU);
          return {
            activeTooltipIndex: DU,
            activeLabel: EU,
            activePayload: YU,
            activeCoordinate: NU
          }
        }
        return null
      },
      rz = function(UU, XU) {
        var zU = XU.axes,
          cU = XU.graphicalItems,
          yU = XU.axisType,
          AU = XU.axisIdKey,
          FU = XU.stackGroups,
          oU = XU.dataStartIndex,
          EU = XU.dataEndIndex,
          YU = UU.layout,
          NU = UU.children,
          IU = UU.stackOffset,
          pU = (0, eU.eb)(YU, yU);
        return zU.reduce((function(XU, zU) {
          var aU, tU = void 0 !== zU.type.defaultProps ? Rz(Rz({}, zU.type.defaultProps), zU.props) : zU.props,
            gU = tU.type,
            kU = tU.dataKey,
            GU = tU.allowDataOverflow,
            BU = tU.allowDuplicatedCategory,
            ZU = tU.scale,
            RU = tU.ticks,
            PU = tU.includeHidden,
            WU = tU[AU];
          if (XU[WU]) return XU;
          var dU, LU, wU, qU = wz(UU.data, {
              graphicalItems: cU.filter((function(UU) {
                var XU;
                return (AU in UU.props ? UU.props[AU] : null === (XU = UU.type.defaultProps) || void 0 === XU ? void 0 : XU[AU]) === WU
              })),
              dataStartIndex: oU,
              dataEndIndex: EU
            }),
            OU = qU.length;
          (function(UU, XU, zU) {
            if ("number" === zU && !0 === XU && Array.isArray(UU)) {
              var cU = null === UU || void 0 === UU ? void 0 : UU[0],
                yU = null === UU || void 0 === UU ? void 0 : UU[1];
              if (cU && yU && (0, CU.B)(cU) && (0, CU.B)(yU)) return !0
            }
            return !1
          })(tU.domain, GU, gU) && (dU = (0, eU.ob)(tU.domain, null, GU), !pU || "number" !== gU && "auto" === ZU || (wU = (0, eU.I)(qU, kU, "category")));
          var SU = qz(gU);
          if (!dU || 0 === dU.length) {
            var rU, uU = null !== (rU = tU.domain) && void 0 !== rU ? rU : SU;
            if (kU) {
              if (dU = (0, eU.I)(qU, kU, gU), "category" === gU && pU) {
                var fU = (0, CU.t)(dU);
                BU && fU ? (LU = dU, dU = DU()(0, OU)) : BU || (dU = (0, eU.fb)(uU, dU, zU).reduce((function(UU, XU) {
                  return UU.indexOf(XU) >= 0 ? UU : [].concat(kz(UU), [XU])
                }), []))
              } else if ("category" === gU) dU = BU ? dU.filter((function(UU) {
                return "" !== UU && !QU()(UU)
              })) : (0, eU.fb)(uU, dU, zU).reduce((function(UU, XU) {
                return UU.indexOf(XU) >= 0 || "" === XU || QU()(XU) ? UU : [].concat(kz(UU), [XU])
              }), []);
              else if ("number" === gU) {
                var iU = (0, eU.jb)(qU, cU.filter((function(UU) {
                  var XU, zU, cU = AU in UU.props ? UU.props[AU] : null === (XU = UU.type.defaultProps) || void 0 === XU ? void 0 : XU[AU],
                    yU = "hide" in UU.props ? UU.props.hide : null === (zU = UU.type.defaultProps) || void 0 === zU ? void 0 : zU.hide;
                  return cU === WU && (PU || !yU)
                })), kU, yU, YU);
                iU && (dU = iU)
              }!pU || "number" !== gU && "auto" === ZU || (wU = (0, eU.I)(qU, kU, "category"))
            } else dU = pU ? DU()(0, OU) : FU && FU[WU] && FU[WU].hasStack && "number" === gU ? "expand" === IU ? [0, 1] : (0, eU.P)(FU[WU].stackGroups, oU, EU) : (0, eU.L)(qU, cU.filter((function(UU) {
              var XU = AU in UU.props ? UU.props[AU] : UU.type.defaultProps[AU],
                zU = "hide" in UU.props ? UU.props.hide : UU.type.defaultProps.hide;
              return XU === WU && (PU || !zU)
            })), gU, YU, !0);
            if ("number" === gU) dU = CX(NU, dU, WU, yU, RU), uU && (dU = (0, eU.ob)(uU, dU, GU));
            else if ("category" === gU && uU) {
              var HU = uU;
              dU.every((function(UU) {
                return HU.indexOf(UU) >= 0
              })) && (dU = HU)
            }
          }
          return Rz(Rz({}, XU), {}, Pz({}, WU, Rz(Rz({}, tU), {}, {
            axisType: yU,
            domain: dU,
            categoricalDomain: wU,
            duplicateDomain: LU,
            originalDomain: null !== (aU = tU.domain) && void 0 !== aU ? aU : SU,
            isCategorical: pU,
            layout: YU
          })))
        }), {})
      },
      uz = function(UU, XU) {
        var zU = XU.axisType,
          cU = void 0 === zU ? "xAxis" : zU,
          yU = XU.AxisComp,
          QU = XU.graphicalItems,
          AU = XU.stackGroups,
          FU = XU.dataStartIndex,
          oU = XU.dataEndIndex,
          EU = UU.children,
          NU = "".concat(cU, "Id"),
          IU = (0, WU.d)(EU, yU),
          pU = {};
        return IU && IU.length ? pU = rz(UU, {
          axes: IU,
          graphicalItems: QU,
          axisType: cU,
          axisIdKey: NU,
          stackGroups: AU,
          dataStartIndex: FU,
          dataEndIndex: oU
        }) : QU && QU.length && (pU = function(UU, XU) {
          var zU = XU.graphicalItems,
            cU = XU.Axis,
            yU = XU.axisType,
            QU = XU.axisIdKey,
            AU = XU.stackGroups,
            FU = XU.dataStartIndex,
            oU = XU.dataEndIndex,
            EU = UU.layout,
            NU = UU.children,
            IU = wz(UU.data, {
              graphicalItems: zU,
              dataStartIndex: FU,
              dataEndIndex: oU
            }),
            pU = IU.length,
            aU = (0, eU.eb)(EU, yU),
            tU = -1;
          return zU.reduce((function(UU, XU) {
            var gU, kU = (void 0 !== XU.type.defaultProps ? Rz(Rz({}, XU.type.defaultProps), XU.props) : XU.props)[QU],
              GU = qz("number");
            return UU[kU] ? UU : (tU++, aU ? gU = DU()(0, pU) : AU && AU[kU] && AU[kU].hasStack ? (gU = (0, eU.P)(AU[kU].stackGroups, FU, oU), gU = CX(NU, gU, kU, yU)) : (gU = (0, eU.ob)(GU, (0, eU.L)(IU, zU.filter((function(UU) {
              var XU, zU, cU = QU in UU.props ? UU.props[QU] : null === (XU = UU.type.defaultProps) || void 0 === XU ? void 0 : XU[QU],
                yU = "hide" in UU.props ? UU.props.hide : null === (zU = UU.type.defaultProps) || void 0 === zU ? void 0 : zU.hide;
              return cU === kU && !yU
            })), "number", EU), cU.defaultProps.allowDataOverflow), gU = CX(NU, gU, kU, yU)), Rz(Rz({}, UU), {}, Pz({}, kU, Rz(Rz({
              axisType: yU
            }, cU.defaultProps), {}, {
              hide: !0,
              orientation: YU()(dz, "".concat(yU, ".").concat(tU % 2), null),
              domain: gU,
              originalDomain: GU,
              isCategorical: aU,
              layout: EU
            }))))
          }), {})
        }(UU, {
          Axis: yU,
          graphicalItems: QU,
          axisType: cU,
          axisIdKey: NU,
          stackGroups: AU,
          dataStartIndex: FU,
          dataEndIndex: oU
        })), pU
      },
      fz = function(UU) {
        var XU = UU.children,
          zU = UU.defaultShowTooltip,
          cU = (0, WU.e)(XU, JU),
          yU = 0,
          QU = 0;
        return UU.data && 0 !== UU.data.length && (QU = UU.data.length - 1), cU && cU.props && (cU.props.startIndex >= 0 && (yU = cU.props.startIndex), cU.props.endIndex >= 0 && (QU = cU.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: yU,
          dataEndIndex: QU,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(zU)
        }
      },
      iz = function(UU) {
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
      Hz = function(UU, XU) {
        return "xAxis" === XU ? UU[XU].width : "yAxis" === XU ? UU[XU].height : void 0
      },
      Mz = function(UU) {
        var XU = UU.chartName,
          zU = UU.GraphicalChild,
          yU = UU.defaultTooltipEventType,
          AU = void 0 === yU ? "axis" : yU,
          oU = UU.validateTooltipEventTypes,
          DU = void 0 === oU ? ["axis"] : oU,
          EU = UU.axisComponents,
          NU = UU.legendContent,
          pU = UU.formatAxisMap,
          dU = UU.defaultProps,
          LU = function(UU, XU) {
            var zU = XU.graphicalItems,
              cU = XU.stackGroups,
              yU = XU.offset,
              AU = XU.updateId,
              FU = XU.dataStartIndex,
              oU = XU.dataEndIndex,
              DU = UU.barSize,
              YU = UU.layout,
              NU = UU.barGap,
              IU = UU.barCategoryGap,
              pU = UU.maxBarSize,
              aU = iz(YU),
              tU = aU.numericAxisName,
              kU = aU.cateAxisName,
              GU = function(UU) {
                return !(!UU || !UU.length) && UU.some((function(UU) {
                  var XU = (0, WU.f)(UU && UU.type);
                  return XU && XU.indexOf("Bar") >= 0
                }))
              }(zU),
              BU = [];
            return zU.forEach((function(zU, aU) {
              var ZU = wz(UU.data, {
                  graphicalItems: [zU],
                  dataStartIndex: FU,
                  dataEndIndex: oU
                }),
                RU = void 0 !== zU.type.defaultProps ? Rz(Rz({}, zU.type.defaultProps), zU.props) : zU.props,
                PU = RU.dataKey,
                dU = RU.maxBarSize,
                LU = RU["".concat(tU, "Id")],
                CU = RU["".concat(kU, "Id")],
                wU = EU.reduce((function(UU, zU) {
                  var cU = XU["".concat(zU.axisType, "Map")],
                    yU = RU["".concat(zU.axisType, "Id")];
                  cU && cU[yU] || "zAxis" === zU.axisType || (0, gU.d)(!1);
                  var QU = cU[yU];
                  return Rz(Rz({}, UU), {}, Pz(Pz({}, zU.axisType, QU), "".concat(zU.axisType, "Ticks"), (0, eU.$)(QU)))
                }), {}),
                qU = wU[kU],
                OU = wU["".concat(kU, "Ticks")],
                SU = cU && cU[LU] && cU[LU].hasStack && (0, eU.Y)(zU, cU[LU].stackGroups),
                rU = (0, WU.f)(zU.type).indexOf("Bar") >= 0,
                uU = (0, eU.n)(qU, OU),
                fU = [],
                iU = GU && (0, eU.s)({
                  barSize: DU,
                  stackGroups: cU,
                  totalSize: Hz(wU, kU)
                });
              if (rU) {
                var HU, MU, vU = QU()(dU) ? pU : dU,
                  VU = null !== (HU = null !== (MU = (0, eU.n)(qU, OU, !0)) && void 0 !== MU ? MU : vU) && void 0 !== HU ? HU : 0;
                fU = (0, eU.p)({
                  barGap: NU,
                  barCategoryGap: IU,
                  bandSize: VU !== uU ? VU : uU,
                  sizeList: iU[CU],
                  maxBarSize: vU
                }), VU !== uU && (fU = fU.map((function(UU) {
                  return Rz(Rz({}, UU), {}, {
                    position: Rz(Rz({}, UU.position), {}, {
                      offset: UU.position.offset - VU / 2
                    })
                  })
                })))
              }
              var sU = zU && zU.type && zU.type.getComposedData;
              sU && BU.push({
                props: Rz(Rz({}, sU(Rz(Rz({}, wU), {}, {
                  displayedData: ZU,
                  props: UU,
                  dataKey: PU,
                  item: zU,
                  bandSize: uU,
                  barPosition: fU,
                  offset: yU,
                  stackedData: SU,
                  layout: YU,
                  dataStartIndex: FU,
                  dataEndIndex: oU
                }))), {}, Pz(Pz(Pz({
                  key: zU.key || "item-".concat(aU)
                }, tU, wU[tU]), kU, wU[kU]), "animationId", AU)),
                childIndex: (0, WU.p)(zU, UU.children),
                item: zU
              })
            })), BU
          },
          wU = function(UU, cU) {
            var yU = UU.props,
              QU = UU.dataStartIndex,
              AU = UU.dataEndIndex,
              FU = UU.updateId;
            if (!(0, WU.u)({
                props: yU
              })) return null;
            var oU = yU.children,
              DU = yU.layout,
              NU = yU.stackOffset,
              aU = yU.data,
              tU = yU.reverseStackOrder,
              gU = iz(DU),
              kU = gU.numericAxisName,
              GU = gU.cateAxisName,
              BU = (0, WU.d)(oU, zU),
              RU = (0, eU.V)(aU, BU, "".concat(kU, "Id"), "".concat(GU, "Id"), NU, tU),
              PU = EU.reduce((function(UU, XU) {
                var zU = "".concat(XU.axisType, "Map");
                return Rz(Rz({}, UU), {}, Pz({}, zU, uz(yU, Rz(Rz({}, XU), {}, {
                  graphicalItems: BU,
                  stackGroups: XU.axisType === kU && RU,
                  dataStartIndex: QU,
                  dataEndIndex: AU
                }))))
              }), {}),
              dU = function(UU, XU) {
                var zU = UU.props,
                  cU = UU.graphicalItems,
                  yU = UU.xAxisMap,
                  QU = void 0 === yU ? {} : yU,
                  AU = UU.yAxisMap,
                  FU = void 0 === AU ? {} : AU,
                  oU = zU.width,
                  DU = zU.height,
                  EU = zU.children,
                  NU = zU.margin || {},
                  IU = (0, WU.e)(EU, JU),
                  pU = (0, WU.e)(EU, ZU.b),
                  aU = Object.keys(FU).reduce((function(UU, XU) {
                    var zU = FU[XU],
                      cU = zU.orientation;
                    return zU.mirror || zU.hide ? UU : Rz(Rz({}, UU), {}, Pz({}, cU, UU[cU] + zU.width))
                  }), {
                    left: NU.left || 0,
                    right: NU.right || 0
                  }),
                  tU = Object.keys(QU).reduce((function(UU, XU) {
                    var zU = QU[XU],
                      cU = zU.orientation;
                    return zU.mirror || zU.hide ? UU : Rz(Rz({}, UU), {}, Pz({}, cU, YU()(UU, "".concat(cU)) + zU.height))
                  }), {
                    top: NU.top || 0,
                    bottom: NU.bottom || 0
                  }),
                  gU = Rz(Rz({}, tU), aU),
                  kU = gU.bottom;
                IU && (gU.bottom += IU.props.height || JU.defaultProps.height), pU && XU && (gU = (0, eU.c)(gU, cU, zU, XU));
                var GU = oU - gU.left - gU.right,
                  BU = DU - gU.top - gU.bottom;
                return Rz(Rz({
                  brushBottom: kU
                }, gU), {}, {
                  width: Math.max(GU, 0),
                  height: Math.max(BU, 0)
                })
              }(Rz(Rz({}, PU), {}, {
                props: yU,
                graphicalItems: BU
              }), null === cU || void 0 === cU ? void 0 : cU.legendBBox);
            Object.keys(PU).forEach((function(UU) {
              PU[UU] = pU(yU, PU[UU], dU, UU.replace("Map", ""), XU)
            }));
            var wU = function(UU) {
                var XU = (0, CU.i)(UU),
                  zU = (0, eU.$)(XU, !1, !0);
                return {
                  tooltipTicks: zU,
                  orderedTooltipTicks: IU()(zU, (function(UU) {
                    return UU.coordinate
                  })),
                  tooltipAxis: XU,
                  tooltipAxisBandSize: (0, eU.n)(XU, zU)
                }
              }(PU["".concat(GU, "Map")]),
              qU = LU(yU, Rz(Rz({}, PU), {}, {
                dataStartIndex: QU,
                dataEndIndex: AU,
                updateId: FU,
                graphicalItems: BU,
                stackGroups: RU,
                offset: dU
              }));
            return Rz(Rz({
              formattedGraphicalItems: qU,
              graphicalItems: BU,
              offset: dU,
              stackGroups: RU
            }, wU), PU)
          },
          qU = function(UU) {
            function zU(UU) {
              var yU, AU, oU;
              return function(UU, XU) {
                if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
              }(this, zU), Pz(oU = pz(this, zU, [UU]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Pz(oU, "accessibilityManager", new vX), Pz(oU, "handleLegendBBoxUpdate", (function(UU) {
                if (UU) {
                  var XU = oU.state,
                    zU = XU.dataStartIndex,
                    cU = XU.dataEndIndex,
                    yU = XU.updateId;
                  oU.setState(Rz({
                    legendBBox: UU
                  }, wU({
                    props: oU.props,
                    dataStartIndex: zU,
                    dataEndIndex: cU,
                    updateId: yU
                  }, Rz(Rz({}, oU.state), {}, {
                    legendBBox: UU
                  }))))
                }
              })), Pz(oU, "handleReceiveSyncEvent", (function(UU, XU, zU) {
                if (oU.props.syncId === UU) {
                  if (zU === oU.eventEmitterSymbol && "function" !== typeof oU.props.syncMethod) return;
                  oU.applySyncEvent(XU)
                }
              })), Pz(oU, "handleBrushChange", (function(UU) {
                var XU = UU.startIndex,
                  zU = UU.endIndex;
                if (XU !== oU.state.dataStartIndex || zU !== oU.state.dataEndIndex) {
                  var cU = oU.state.updateId;
                  oU.setState((function() {
                    return Rz({
                      dataStartIndex: XU,
                      dataEndIndex: zU
                    }, wU({
                      props: oU.props,
                      dataStartIndex: XU,
                      dataEndIndex: zU,
                      updateId: cU
                    }, oU.state))
                  })), oU.triggerSyncEvent({
                    dataStartIndex: XU,
                    dataEndIndex: zU
                  })
                }
              })), Pz(oU, "handleMouseEnter", (function(UU) {
                var XU = oU.getMouseInfo(UU);
                if (XU) {
                  var zU = Rz(Rz({}, XU), {}, {
                    isTooltipActive: !0
                  });
                  oU.setState(zU), oU.triggerSyncEvent(zU);
                  var cU = oU.props.onMouseEnter;
                  FU()(cU) && cU(zU, UU)
                }
              })), Pz(oU, "triggeredAfterMouseMove", (function(UU) {
                var XU = oU.getMouseInfo(UU),
                  zU = XU ? Rz(Rz({}, XU), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                oU.setState(zU), oU.triggerSyncEvent(zU);
                var cU = oU.props.onMouseMove;
                FU()(cU) && cU(zU, UU)
              })), Pz(oU, "handleItemMouseEnter", (function(UU) {
                oU.setState((function() {
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
              })), Pz(oU, "handleItemMouseLeave", (function() {
                oU.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), Pz(oU, "handleMouseMove", (function(UU) {
                UU.persist(), oU.throttleTriggeredAfterMouseMove(UU)
              })), Pz(oU, "handleMouseLeave", (function(UU) {
                oU.throttleTriggeredAfterMouseMove.cancel();
                var XU = {
                  isTooltipActive: !1
                };
                oU.setState(XU), oU.triggerSyncEvent(XU);
                var zU = oU.props.onMouseLeave;
                FU()(zU) && zU(XU, UU)
              })), Pz(oU, "handleOuterEvent", (function(UU) {
                var XU, zU = (0, WU.h)(UU),
                  cU = YU()(oU.props, "".concat(zU));
                zU && FU()(cU) && cU(null !== (XU = /.*touch.*/i.test(zU) ? oU.getMouseInfo(UU.changedTouches[0]) : oU.getMouseInfo(UU)) && void 0 !== XU ? XU : {}, UU)
              })), Pz(oU, "handleClick", (function(UU) {
                var XU = oU.getMouseInfo(UU);
                if (XU) {
                  var zU = Rz(Rz({}, XU), {}, {
                    isTooltipActive: !0
                  });
                  oU.setState(zU), oU.triggerSyncEvent(zU);
                  var cU = oU.props.onClick;
                  FU()(cU) && cU(zU, UU)
                }
              })), Pz(oU, "handleMouseDown", (function(UU) {
                var XU = oU.props.onMouseDown;
                FU()(XU) && XU(oU.getMouseInfo(UU), UU)
              })), Pz(oU, "handleMouseUp", (function(UU) {
                var XU = oU.props.onMouseUp;
                FU()(XU) && XU(oU.getMouseInfo(UU), UU)
              })), Pz(oU, "handleTouchMove", (function(UU) {
                null != UU.changedTouches && UU.changedTouches.length > 0 && oU.throttleTriggeredAfterMouseMove(UU.changedTouches[0])
              })), Pz(oU, "handleTouchStart", (function(UU) {
                null != UU.changedTouches && UU.changedTouches.length > 0 && oU.handleMouseDown(UU.changedTouches[0])
              })), Pz(oU, "handleTouchEnd", (function(UU) {
                null != UU.changedTouches && UU.changedTouches.length > 0 && oU.handleMouseUp(UU.changedTouches[0])
              })), Pz(oU, "handleDoubleClick", (function(UU) {
                var XU = oU.props.onDoubleClick;
                FU()(XU) && XU(oU.getMouseInfo(UU), UU)
              })), Pz(oU, "handleContextMenu", (function(UU) {
                var XU = oU.props.onContextMenu;
                FU()(XU) && XU(oU.getMouseInfo(UU), UU)
              })), Pz(oU, "triggerSyncEvent", (function(UU) {
                void 0 !== oU.props.syncId && SX.emit(rX, oU.props.syncId, UU, oU.eventEmitterSymbol)
              })), Pz(oU, "applySyncEvent", (function(UU) {
                var XU = oU.props,
                  zU = XU.layout,
                  cU = XU.syncMethod,
                  yU = oU.state.updateId,
                  QU = UU.dataStartIndex,
                  AU = UU.dataEndIndex;
                if (void 0 !== UU.dataStartIndex || void 0 !== UU.dataEndIndex) oU.setState(Rz({
                  dataStartIndex: QU,
                  dataEndIndex: AU
                }, wU({
                  props: oU.props,
                  dataStartIndex: QU,
                  dataEndIndex: AU,
                  updateId: yU
                }, oU.state)));
                else if (void 0 !== UU.activeTooltipIndex) {
                  var FU = UU.chartX,
                    DU = UU.chartY,
                    EU = UU.activeTooltipIndex,
                    YU = oU.state,
                    NU = YU.offset,
                    IU = YU.tooltipTicks;
                  if (!NU) return;
                  if ("function" === typeof cU) EU = cU(IU, UU);
                  else if ("value" === cU) {
                    EU = -1;
                    for (var pU = 0; pU < IU.length; pU++)
                      if (IU[pU].value === UU.activeLabel) {
                        EU = pU;
                        break
                      }
                  }
                  var aU = Rz(Rz({}, NU), {}, {
                      x: NU.left,
                      y: NU.top
                    }),
                    tU = Math.min(FU, aU.x + aU.width),
                    gU = Math.min(DU, aU.y + aU.height),
                    kU = IU[EU] && IU[EU].value,
                    GU = Oz(oU.state, oU.props.data, EU),
                    BU = IU[EU] ? {
                      x: "horizontal" === zU ? IU[EU].coordinate : tU,
                      y: "horizontal" === zU ? gU : IU[EU].coordinate
                    } : ez;
                  oU.setState(Rz(Rz({}, UU), {}, {
                    activeLabel: kU,
                    activeCoordinate: BU,
                    activePayload: GU,
                    activeTooltipIndex: EU
                  }))
                } else oU.setState(UU)
              })), Pz(oU, "renderCursor", (function(UU) {
                var zU, yU = oU.state,
                  QU = yU.isTooltipActive,
                  AU = yU.activeCoordinate,
                  FU = yU.activePayload,
                  DU = yU.offset,
                  EU = yU.activeTooltipIndex,
                  YU = yU.tooltipAxisBandSize,
                  NU = oU.getTooltipEventType(),
                  IU = null !== (zU = UU.props.active) && void 0 !== zU ? zU : QU,
                  pU = oU.props.layout,
                  aU = UU.key || "_recharts-cursor";
                return cU.createElement(Qz, {
                  key: aU,
                  activeCoordinate: AU,
                  activePayload: FU,
                  activeTooltipIndex: EU,
                  chartName: XU,
                  element: UU,
                  isActive: IU,
                  layout: pU,
                  offset: DU,
                  tooltipAxisBandSize: YU,
                  tooltipEventType: NU
                })
              })), Pz(oU, "renderPolarAxis", (function(UU, XU, zU) {
                var yU = YU()(UU, "type.axisType"),
                  QU = YU()(oU.state, "".concat(yU, "Map")),
                  AU = UU.type.defaultProps,
                  FU = void 0 !== AU ? Rz(Rz({}, AU), UU.props) : UU.props,
                  DU = QU && QU[FU["".concat(yU, "Id")]];
                return (0, cU.cloneElement)(UU, Rz(Rz({}, DU), {}, {
                  className: (0, tU.c)(yU, DU.className),
                  key: UU.key || "".concat(XU, "-").concat(zU),
                  ticks: (0, eU.$)(DU, !0)
                }))
              })), Pz(oU, "renderPolarGrid", (function(UU) {
                var XU = UU.props,
                  zU = XU.radialLines,
                  yU = XU.polarAngles,
                  QU = XU.polarRadius,
                  AU = oU.state,
                  FU = AU.radiusAxisMap,
                  DU = AU.angleAxisMap,
                  EU = (0, CU.i)(FU),
                  YU = (0, CU.i)(DU),
                  NU = YU.cx,
                  IU = YU.cy,
                  pU = YU.innerRadius,
                  aU = YU.outerRadius;
                return (0, cU.cloneElement)(UU, {
                  polarAngles: Array.isArray(yU) ? yU : (0, eU.$)(YU, !0).map((function(UU) {
                    return UU.coordinate
                  })),
                  polarRadius: Array.isArray(QU) ? QU : (0, eU.$)(EU, !0).map((function(UU) {
                    return UU.coordinate
                  })),
                  cx: NU,
                  cy: IU,
                  innerRadius: pU,
                  outerRadius: aU,
                  key: UU.key || "polar-grid",
                  radialLines: zU
                })
              })), Pz(oU, "renderLegend", (function() {
                var UU = oU.state.formattedGraphicalItems,
                  XU = oU.props,
                  zU = XU.children,
                  yU = XU.width,
                  QU = XU.height,
                  AU = oU.props.margin || {},
                  FU = yU - (AU.left || 0) - (AU.right || 0),
                  DU = (0, KU.b)({
                    children: zU,
                    formattedGraphicalItems: UU,
                    legendWidth: FU,
                    legendContent: NU
                  });
                if (!DU) return null;
                var EU = DU.item,
                  YU = Nz(DU, Fz);
                return (0, cU.cloneElement)(EU, Rz(Rz({}, YU), {}, {
                  chartWidth: yU,
                  chartHeight: QU,
                  margin: AU,
                  onBBoxUpdate: oU.handleLegendBBoxUpdate
                }))
              })), Pz(oU, "renderTooltip", (function() {
                var UU, XU = oU.props,
                  zU = XU.children,
                  yU = XU.accessibilityLayer,
                  QU = (0, WU.e)(zU, BU.c);
                if (!QU) return null;
                var AU = oU.state,
                  FU = AU.isTooltipActive,
                  DU = AU.activeCoordinate,
                  EU = AU.activePayload,
                  YU = AU.activeLabel,
                  NU = AU.offset,
                  IU = null !== (UU = QU.props.active) && void 0 !== UU ? UU : FU;
                return (0, cU.cloneElement)(QU, {
                  viewBox: Rz(Rz({}, NU), {}, {
                    x: NU.left,
                    y: NU.top
                  }),
                  active: IU,
                  label: YU,
                  payload: IU ? EU : [],
                  coordinate: DU,
                  accessibilityLayer: yU
                })
              })), Pz(oU, "renderBrush", (function(UU) {
                var XU = oU.props,
                  zU = XU.margin,
                  yU = XU.data,
                  QU = oU.state,
                  AU = QU.offset,
                  FU = QU.dataStartIndex,
                  DU = QU.dataEndIndex,
                  EU = QU.updateId;
                return (0, cU.cloneElement)(UU, {
                  key: UU.key || "_recharts-brush",
                  onChange: (0, eU.i)(oU.handleBrushChange, UU.props.onChange),
                  data: yU,
                  x: (0, CU.B)(UU.props.x) ? UU.props.x : AU.left,
                  y: (0, CU.B)(UU.props.y) ? UU.props.y : AU.top + AU.height + AU.brushBottom - (zU.bottom || 0),
                  width: (0, CU.B)(UU.props.width) ? UU.props.width : AU.width,
                  startIndex: FU,
                  endIndex: DU,
                  updateId: "brush-".concat(EU)
                })
              })), Pz(oU, "renderReferenceElement", (function(UU, XU, zU) {
                if (!UU) return null;
                var yU = oU.clipPathId,
                  QU = oU.state,
                  AU = QU.xAxisMap,
                  FU = QU.yAxisMap,
                  DU = QU.offset,
                  EU = UU.type.defaultProps || {},
                  YU = UU.props,
                  NU = YU.xAxisId,
                  IU = void 0 === NU ? EU.xAxisId : NU,
                  pU = YU.yAxisId,
                  aU = void 0 === pU ? EU.yAxisId : pU;
                return (0, cU.cloneElement)(UU, {
                  key: UU.key || "".concat(XU, "-").concat(zU),
                  xAxis: AU[IU],
                  yAxis: FU[aU],
                  viewBox: {
                    x: DU.left,
                    y: DU.top,
                    width: DU.width,
                    height: DU.height
                  },
                  clipPathId: yU
                })
              })), Pz(oU, "renderActivePoints", (function(UU) {
                var XU = UU.item,
                  cU = UU.activePoint,
                  yU = UU.basePoint,
                  QU = UU.childIndex,
                  AU = UU.isRange,
                  FU = [],
                  oU = XU.props.key,
                  DU = void 0 !== XU.item.type.defaultProps ? Rz(Rz({}, XU.item.type.defaultProps), XU.item.props) : XU.item.props,
                  EU = DU.activeDot,
                  YU = Rz(Rz({
                    index: QU,
                    dataKey: DU.dataKey,
                    cx: cU.x,
                    cy: cU.y,
                    r: 4,
                    fill: (0, eU.T)(XU.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: cU.payload,
                    value: cU.value
                  }, (0, WU.c)(EU, !1)), (0, uX.m)(EU));
                return FU.push(zU.renderActiveDot(EU, YU, "".concat(oU, "-activePoint-").concat(QU))), yU ? FU.push(zU.renderActiveDot(EU, Rz(Rz({}, YU), {}, {
                  cx: yU.x,
                  cy: yU.y
                }), "".concat(oU, "-basePoint-").concat(QU))) : AU && FU.push(null), FU
              })), Pz(oU, "renderGraphicChild", (function(UU, XU, zU) {
                var yU = oU.filterFormatItem(UU, XU, zU);
                if (!yU) return null;
                var AU = oU.getTooltipEventType(),
                  FU = oU.state,
                  DU = FU.isTooltipActive,
                  EU = FU.tooltipAxis,
                  YU = FU.activeTooltipIndex,
                  NU = FU.activeLabel,
                  IU = oU.props.children,
                  pU = (0, WU.e)(IU, BU.c),
                  aU = yU.props,
                  tU = aU.points,
                  gU = aU.isRange,
                  kU = aU.baseLine,
                  GU = void 0 !== yU.item.type.defaultProps ? Rz(Rz({}, yU.item.type.defaultProps), yU.item.props) : yU.item.props,
                  ZU = GU.activeDot,
                  RU = GU.hide,
                  PU = GU.activeBar,
                  dU = GU.activeShape,
                  LU = Boolean(!RU && DU && pU && (ZU || PU || dU)),
                  wU = {};
                "axis" !== AU && pU && "click" === pU.props.trigger ? wU = {
                  onClick: (0, eU.i)(oU.handleItemMouseEnter, UU.props.onClick)
                } : "axis" !== AU && (wU = {
                  onMouseLeave: (0, eU.i)(oU.handleItemMouseLeave, UU.props.onMouseLeave),
                  onMouseEnter: (0, eU.i)(oU.handleItemMouseEnter, UU.props.onMouseEnter)
                });
                var qU = (0, cU.cloneElement)(UU, Rz(Rz({}, yU.props), wU));
                if (LU) {
                  if (!(YU >= 0)) {
                    var OU, SU = (null !== (OU = oU.getItemByXY(oU.state.activeCoordinate)) && void 0 !== OU ? OU : {
                        graphicalItem: qU
                      }).graphicalItem,
                      rU = SU.item,
                      uU = void 0 === rU ? UU : rU,
                      fU = SU.childIndex,
                      iU = Rz(Rz(Rz({}, yU.props), wU), {}, {
                        activeIndex: fU
                      });
                    return [(0, cU.cloneElement)(uU, iU), null, null]
                  }
                  var HU, MU;
                  if (EU.dataKey && !EU.allowDuplicatedCategory) {
                    var vU = "function" === typeof EU.dataKey ? function(UU) {
                      return "function" === typeof EU.dataKey ? EU.dataKey(UU.payload) : null
                    } : "payload.".concat(EU.dataKey.toString());
                    HU = (0, CU.e)(tU, vU, NU), MU = gU && kU && (0, CU.e)(kU, vU, NU)
                  } else HU = null === tU || void 0 === tU ? void 0 : tU[YU], MU = gU && kU && kU[YU];
                  if (dU || PU) {
                    var VU = void 0 !== UU.props.activeIndex ? UU.props.activeIndex : YU;
                    return [(0, cU.cloneElement)(UU, Rz(Rz(Rz({}, yU.props), wU), {}, {
                      activeIndex: VU
                    })), null, null]
                  }
                  if (!QU()(HU)) return [qU].concat(kz(oU.renderActivePoints({
                    item: yU,
                    activePoint: HU,
                    basePoint: MU,
                    childIndex: YU,
                    isRange: gU
                  })))
                }
                return gU ? [qU, null, null] : [qU, null]
              })), Pz(oU, "renderCustomized", (function(UU, XU, zU) {
                return (0, cU.cloneElement)(UU, Rz(Rz({
                  key: "recharts-customized-".concat(zU)
                }, oU.props), oU.state))
              })), Pz(oU, "renderMap", {
                CartesianGrid: {
                  handler: Cz,
                  once: !0
                },
                ReferenceArea: {
                  handler: oU.renderReferenceElement
                },
                ReferenceLine: {
                  handler: Cz
                },
                ReferenceDot: {
                  handler: oU.renderReferenceElement
                },
                XAxis: {
                  handler: Cz
                },
                YAxis: {
                  handler: Cz
                },
                Brush: {
                  handler: oU.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: oU.renderGraphicChild
                },
                Line: {
                  handler: oU.renderGraphicChild
                },
                Area: {
                  handler: oU.renderGraphicChild
                },
                Radar: {
                  handler: oU.renderGraphicChild
                },
                RadialBar: {
                  handler: oU.renderGraphicChild
                },
                Scatter: {
                  handler: oU.renderGraphicChild
                },
                Pie: {
                  handler: oU.renderGraphicChild
                },
                Funnel: {
                  handler: oU.renderGraphicChild
                },
                Tooltip: {
                  handler: oU.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: oU.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: oU.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: oU.renderPolarAxis
                },
                Customized: {
                  handler: oU.renderCustomized
                }
              }), oU.clipPathId = "".concat(null !== (yU = UU.id) && void 0 !== yU ? yU : (0, CU.J)("recharts"), "-clip"), oU.throttleTriggeredAfterMouseMove = aU()(oU.triggeredAfterMouseMove, null !== (AU = UU.throttleDelay) && void 0 !== AU ? AU : 1e3 / 60), oU.state = {}, oU
            }
            return function(UU, XU) {
              if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
              UU.prototype = Object.create(XU && XU.prototype, {
                constructor: {
                  value: UU,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(UU, "prototype", {
                writable: !1
              }), XU && gz(UU, XU)
            }(zU, UU), yU = zU, oU = [{
              key: "componentDidMount",
              value: function() {
                var UU, XU;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (UU = this.props.margin.left) && void 0 !== UU ? UU : 0,
                    top: null !== (XU = this.props.margin.top) && void 0 !== XU ? XU : 0
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
                  XU = UU.children,
                  zU = UU.data,
                  cU = UU.height,
                  yU = UU.layout,
                  QU = (0, WU.e)(XU, BU.c);
                if (QU) {
                  var AU = QU.props.defaultIndex;
                  if (!("number" !== typeof AU || AU < 0 || AU > this.state.tooltipTicks.length - 1)) {
                    var FU = this.state.tooltipTicks[AU] && this.state.tooltipTicks[AU].value,
                      oU = Oz(this.state, zU, AU, FU),
                      DU = this.state.tooltipTicks[AU].coordinate,
                      EU = (this.state.offset.top + cU) / 2,
                      YU = "horizontal" === yU ? {
                        x: DU,
                        y: EU
                      } : {
                        y: DU,
                        x: EU
                      },
                      NU = this.state.formattedGraphicalItems.find((function(UU) {
                        return "Scatter" === UU.item.type.name
                      }));
                    NU && (YU = Rz(Rz({}, YU), NU.props.points[AU].tooltipPosition), oU = NU.props.points[AU].tooltipPayload);
                    var IU = {
                      activeTooltipIndex: AU,
                      isTooltipActive: !0,
                      activeLabel: FU,
                      activePayload: oU,
                      activeCoordinate: YU
                    };
                    this.setState(IU), this.renderCursor(QU), this.accessibilityManager.setIndex(AU)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(UU, XU) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== XU.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== UU.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== UU.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (zU = this.props.margin.left) && void 0 !== zU ? zU : 0,
                    top: null !== (cU = this.props.margin.top) && void 0 !== cU ? cU : 0
                  }
                }), null) : null;
                var zU, cU
              }
            }, {
              key: "componentDidUpdate",
              value: function(UU) {
                (0, WU.m)([(0, WU.e)(UU.children, BU.c)], [(0, WU.e)(this.props.children, BU.c)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var UU = (0, WU.e)(this.props.children, BU.c);
                if (UU && "boolean" === typeof UU.props.shared) {
                  var XU = UU.props.shared ? "axis" : "item";
                  return DU.indexOf(XU) >= 0 ? XU : AU
                }
                return AU
              }
            }, {
              key: "getMouseInfo",
              value: function(UU) {
                if (!this.container) return null;
                var XU = this.container,
                  zU = XU.getBoundingClientRect(),
                  cU = (0, jU.d)(zU),
                  yU = {
                    chartX: Math.round(UU.pageX - cU.left),
                    chartY: Math.round(UU.pageY - cU.top)
                  },
                  QU = zU.width / XU.offsetWidth || 1,
                  AU = this.inRange(yU.chartX, yU.chartY, QU);
                if (!AU) return null;
                var FU = this.state,
                  oU = FU.xAxisMap,
                  DU = FU.yAxisMap,
                  EU = this.getTooltipEventType(),
                  YU = Sz(this.state, this.props.data, this.props.layout, AU);
                if ("axis" !== EU && oU && DU) {
                  var NU = (0, CU.i)(oU).scale,
                    IU = (0, CU.i)(DU).scale,
                    pU = NU && NU.invert ? NU.invert(yU.chartX) : null,
                    aU = IU && IU.invert ? IU.invert(yU.chartY) : null;
                  return Rz(Rz({}, yU), {}, {
                    xValue: pU,
                    yValue: aU
                  }, YU)
                }
                return YU ? Rz(Rz({}, yU), YU) : null
              }
            }, {
              key: "inRange",
              value: function(UU, XU) {
                var zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  cU = this.props.layout,
                  yU = UU / zU,
                  QU = XU / zU;
                if ("horizontal" === cU || "vertical" === cU) {
                  var AU = this.state.offset;
                  return yU >= AU.left && yU <= AU.left + AU.width && QU >= AU.top && QU <= AU.top + AU.height ? {
                    x: yU,
                    y: QU
                  } : null
                }
                var FU = this.state,
                  oU = FU.angleAxisMap,
                  DU = FU.radiusAxisMap;
                if (oU && DU) {
                  var EU = (0, CU.i)(oU);
                  return (0, wX.d)({
                    x: yU,
                    y: QU
                  }, EU)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var UU = this.props.children,
                  XU = this.getTooltipEventType(),
                  zU = (0, WU.e)(UU, BU.c),
                  cU = {};
                return zU && "axis" === XU && (cU = "click" === zU.props.trigger ? {
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
                }), Rz(Rz({}, (0, uX.m)(this.props, this.handleOuterEvent)), cU)
              }
            }, {
              key: "addListener",
              value: function() {
                SX.on(rX, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                SX.removeListener(rX, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(UU, XU, zU) {
                for (var cU = this.state.formattedGraphicalItems, yU = 0, QU = cU.length; yU < QU; yU++) {
                  var AU = cU[yU];
                  if (AU.item === UU || AU.props.key === UU.key || XU === (0, WU.f)(AU.item.type) && zU === AU.childIndex) return AU
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var UU = this.clipPathId,
                  XU = this.state.offset,
                  zU = XU.left,
                  yU = XU.top,
                  QU = XU.height,
                  AU = XU.width;
                return cU.createElement("defs", null, cU.createElement("clipPath", {
                  id: UU
                }, cU.createElement("rect", {
                  x: zU,
                  y: yU,
                  height: QU,
                  width: AU
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var UU = this.state.xAxisMap;
                return UU ? Object.entries(UU).reduce((function(UU, XU) {
                  var zU = Yz(XU, 2),
                    cU = zU[0],
                    yU = zU[1];
                  return Rz(Rz({}, UU), {}, Pz({}, cU, yU.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var UU = this.state.yAxisMap;
                return UU ? Object.entries(UU).reduce((function(UU, XU) {
                  var zU = Yz(XU, 2),
                    cU = zU[0],
                    yU = zU[1];
                  return Rz(Rz({}, UU), {}, Pz({}, cU, yU.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(UU) {
                var XU;
                return null === (XU = this.state.xAxisMap) || void 0 === XU || null === (XU = XU[UU]) || void 0 === XU ? void 0 : XU.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(UU) {
                var XU;
                return null === (XU = this.state.yAxisMap) || void 0 === XU || null === (XU = XU[UU]) || void 0 === XU ? void 0 : XU.scale
              }
            }, {
              key: "getItemByXY",
              value: function(UU) {
                var XU = this.state,
                  zU = XU.formattedGraphicalItems,
                  cU = XU.activeItem;
                if (zU && zU.length)
                  for (var yU = 0, QU = zU.length; yU < QU; yU++) {
                    var AU = zU[yU],
                      FU = AU.props,
                      oU = AU.item,
                      DU = void 0 !== oU.type.defaultProps ? Rz(Rz({}, oU.type.defaultProps), oU.props) : oU.props,
                      EU = (0, WU.f)(oU.type);
                    if ("Bar" === EU) {
                      var YU = (FU.data || []).find((function(XU) {
                        return (0, PU.d)(UU, XU)
                      }));
                      if (YU) return {
                        graphicalItem: AU,
                        payload: YU
                      }
                    } else if ("RadialBar" === EU) {
                      var NU = (FU.data || []).find((function(XU) {
                        return (0, wX.d)(UU, XU)
                      }));
                      if (NU) return {
                        graphicalItem: AU,
                        payload: NU
                      }
                    } else if ((0, VX.j)(AU, cU) || (0, VX.n)(AU, cU) || (0, VX.p)(AU, cU)) {
                      var IU = (0, VX.g)({
                          graphicalItem: AU,
                          activeTooltipItem: cU,
                          itemData: DU.data
                        }),
                        pU = void 0 === DU.activeIndex ? IU : DU.activeIndex;
                      return {
                        graphicalItem: Rz(Rz({}, AU), {}, {
                          childIndex: pU
                        }),
                        payload: (0, VX.p)(AU, cU) ? DU.data[IU] : AU.props.data[IU]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var UU = this;
                if (!(0, WU.u)(this)) return null;
                var XU, zU, yU = this.props,
                  QU = yU.children,
                  AU = yU.className,
                  FU = yU.width,
                  oU = yU.height,
                  DU = yU.style,
                  EU = yU.compact,
                  YU = yU.title,
                  NU = yU.desc,
                  IU = Nz(yU, oz),
                  pU = (0, WU.c)(IU, !1);
                if (EU) return cU.createElement(Az.e, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, cU.createElement(kU.c, Ez({}, pU, {
                  width: FU,
                  height: oU,
                  title: YU,
                  desc: NU
                }), this.renderClipPath(), (0, WU.t)(QU, this.renderMap)));
                this.props.accessibilityLayer && (pU.tabIndex = null !== (XU = this.props.tabIndex) && void 0 !== XU ? XU : 0, pU.role = null !== (zU = this.props.role) && void 0 !== zU ? zU : "application", pU.onKeyDown = function(XU) {
                  UU.accessibilityManager.keyboardEvent(XU)
                }, pU.onFocus = function() {
                  UU.accessibilityManager.focus()
                });
                var aU = this.parseEventsOfWrapper();
                return cU.createElement(Az.e, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, cU.createElement("div", Ez({
                  className: (0, tU.c)("recharts-wrapper", AU),
                  style: Rz({
                    position: "relative",
                    cursor: "default",
                    width: FU,
                    height: oU
                  }, DU)
                }, aU, {
                  ref: function(XU) {
                    UU.container = XU
                  }
                }), cU.createElement(kU.c, Ez({}, pU, {
                  width: FU,
                  height: oU,
                  title: YU,
                  desc: NU,
                  style: Lz
                }), this.renderClipPath(), (0, WU.t)(QU, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], oU && Iz(yU.prototype, oU), EU && Iz(yU, EU), Object.defineProperty(yU, "prototype", {
              writable: !1
            }), yU;
            var yU, oU, EU
          }(cU.Component);
        Pz(qU, "displayName", XU), Pz(qU, "defaultProps", Rz({
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
        }, dU)), Pz(qU, "getDerivedStateFromProps", (function(UU, XU) {
          var zU = UU.dataKey,
            cU = UU.data,
            yU = UU.children,
            AU = UU.width,
            FU = UU.height,
            oU = UU.layout,
            DU = UU.stackOffset,
            EU = UU.margin,
            YU = XU.dataStartIndex,
            NU = XU.dataEndIndex;
          if (void 0 === XU.updateId) {
            var IU = fz(UU);
            return Rz(Rz(Rz({}, IU), {}, {
              updateId: 0
            }, wU(Rz(Rz({
              props: UU
            }, IU), {}, {
              updateId: 0
            }), XU)), {}, {
              prevDataKey: zU,
              prevData: cU,
              prevWidth: AU,
              prevHeight: FU,
              prevLayout: oU,
              prevStackOffset: DU,
              prevMargin: EU,
              prevChildren: yU
            })
          }
          if (zU !== XU.prevDataKey || cU !== XU.prevData || AU !== XU.prevWidth || FU !== XU.prevHeight || oU !== XU.prevLayout || DU !== XU.prevStackOffset || !(0, qX.e)(EU, XU.prevMargin)) {
            var pU = fz(UU),
              aU = {
                chartX: XU.chartX,
                chartY: XU.chartY,
                isTooltipActive: XU.isTooltipActive
              },
              tU = Rz(Rz({}, Sz(XU, cU, oU)), {}, {
                updateId: XU.updateId + 1
              }),
              gU = Rz(Rz(Rz({}, pU), aU), tU);
            return Rz(Rz(Rz({}, gU), wU(Rz({
              props: UU
            }, gU), XU)), {}, {
              prevDataKey: zU,
              prevData: cU,
              prevWidth: AU,
              prevHeight: FU,
              prevLayout: oU,
              prevStackOffset: DU,
              prevMargin: EU,
              prevChildren: yU
            })
          }
          if (!(0, WU.m)(yU, XU.prevChildren)) {
            var kU, GU, BU, ZU, RU = (0, WU.e)(yU, JU),
              PU = RU && null !== (kU = null === (GU = RU.props) || void 0 === GU ? void 0 : GU.startIndex) && void 0 !== kU ? kU : YU,
              dU = RU && null !== (BU = null === (ZU = RU.props) || void 0 === ZU ? void 0 : ZU.endIndex) && void 0 !== BU ? BU : NU,
              LU = PU !== YU || dU !== NU,
              eU = !QU()(cU) && !LU ? XU.updateId : XU.updateId + 1;
            return Rz(Rz({
              updateId: eU
            }, wU(Rz(Rz({
              props: UU
            }, XU), {}, {
              updateId: eU,
              dataStartIndex: PU,
              dataEndIndex: dU
            }), XU)), {}, {
              prevChildren: yU,
              dataStartIndex: PU,
              dataEndIndex: dU
            })
          }
          return null
        })), Pz(qU, "renderActiveDot", (function(UU, XU, zU) {
          var yU;
          return yU = (0, cU.isValidElement)(UU) ? (0, cU.cloneElement)(UU, XU) : FU()(UU) ? UU(XU) : cU.createElement(RU.d, XU), cU.createElement(GU.e, {
            className: "recharts-active-dot",
            key: zU
          }, yU)
        }));
        var OU = (0, cU.forwardRef)((function(UU, XU) {
          return cU.createElement(qU, Ez({}, UU, {
            ref: XU
          }))
        }));
        return OU.displayName = qU.displayName, OU
      }
  },
  6873: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    var cU = function(UU) {
      return null
    };
    cU.displayName = "Cell"
  },
  6820: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => wU
    });
    var cU = zU(61),
      yU = zU(5987),
      QU = zU.n(yU),
      AU = zU(5845),
      FU = zU.n(AU),
      oU = zU(5680),
      DU = zU.n(oU),
      EU = zU(5657),
      YU = zU(6735),
      NU = zU(5998),
      IU = zU(5746),
      pU = zU(6822);

    function aU(UU) {
      return aU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, aU(UU)
    }
    var tU = ["offset"];

    function gU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return kU(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return kU(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return kU(UU, XU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function GU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function BU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function ZU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? BU(Object(zU), !0).forEach((function(XU) {
          RU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : BU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function RU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != aU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != aU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == aU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function PU() {
      return PU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, PU.apply(this, arguments)
    }
    var WU = function(UU) {
        var XU = UU.value,
          zU = UU.formatter,
          cU = QU()(UU.children) ? XU : UU.children;
        return FU()(zU) ? zU(cU) : cU
      },
      dU = function(UU, XU, zU) {
        var yU, AU, FU = UU.position,
          oU = UU.viewBox,
          DU = UU.offset,
          YU = UU.className,
          NU = oU,
          aU = NU.cx,
          tU = NU.cy,
          gU = NU.innerRadius,
          kU = NU.outerRadius,
          GU = NU.startAngle,
          BU = NU.endAngle,
          ZU = NU.clockWise,
          RU = (gU + kU) / 2,
          WU = function(UU, XU) {
            return (0, IU.H)(XU - UU) * Math.min(Math.abs(XU - UU), 360)
          }(GU, BU),
          dU = WU >= 0 ? 1 : -1;
        "insideStart" === FU ? (yU = GU + dU * DU, AU = ZU) : "insideEnd" === FU ? (yU = BU - dU * DU, AU = !ZU) : "end" === FU && (yU = BU + dU * DU, AU = ZU), AU = WU <= 0 ? AU : !AU;
        var LU = (0, pU.f)(aU, tU, RU, yU),
          eU = (0, pU.f)(aU, tU, RU, yU + 359 * (AU ? 1 : -1)),
          CU = "M".concat(LU.x, ",").concat(LU.y, "\n    A").concat(RU, ",").concat(RU, ",0,1,").concat(AU ? 0 : 1, ",\n    ").concat(eU.x, ",").concat(eU.y),
          wU = QU()(UU.id) ? (0, IU.J)("recharts-radial-line-") : UU.id;
        return cU.createElement("text", PU({}, zU, {
          dominantBaseline: "central",
          className: (0, EU.c)("recharts-radial-bar-label", YU)
        }), cU.createElement("defs", null, cU.createElement("path", {
          id: wU,
          d: CU
        })), cU.createElement("textPath", {
          xlinkHref: "#".concat(wU)
        }, XU))
      },
      LU = function(UU) {
        var XU = UU.viewBox,
          zU = UU.offset,
          cU = UU.position,
          yU = XU,
          QU = yU.cx,
          AU = yU.cy,
          FU = yU.innerRadius,
          oU = yU.outerRadius,
          DU = (yU.startAngle + yU.endAngle) / 2;
        if ("outside" === cU) {
          var EU = (0, pU.f)(QU, AU, oU + zU, DU),
            YU = EU.x;
          return {
            x: YU,
            y: EU.y,
            textAnchor: YU >= QU ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === cU) return {
          x: QU,
          y: AU,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === cU) return {
          x: QU,
          y: AU,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === cU) return {
          x: QU,
          y: AU,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var NU = (FU + oU) / 2,
          IU = (0, pU.f)(QU, AU, NU, DU);
        return {
          x: IU.x,
          y: IU.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      eU = function(UU) {
        var XU = UU.viewBox,
          zU = UU.parentViewBox,
          cU = UU.offset,
          yU = UU.position,
          QU = XU,
          AU = QU.x,
          FU = QU.y,
          oU = QU.width,
          EU = QU.height,
          YU = EU >= 0 ? 1 : -1,
          NU = YU * cU,
          pU = YU > 0 ? "end" : "start",
          aU = YU > 0 ? "start" : "end",
          tU = oU >= 0 ? 1 : -1,
          gU = tU * cU,
          kU = tU > 0 ? "end" : "start",
          GU = tU > 0 ? "start" : "end";
        if ("top" === yU) return ZU(ZU({}, {
          x: AU + oU / 2,
          y: FU - YU * cU,
          textAnchor: "middle",
          verticalAnchor: pU
        }), zU ? {
          height: Math.max(FU - zU.y, 0),
          width: oU
        } : {});
        if ("bottom" === yU) return ZU(ZU({}, {
          x: AU + oU / 2,
          y: FU + EU + NU,
          textAnchor: "middle",
          verticalAnchor: aU
        }), zU ? {
          height: Math.max(zU.y + zU.height - (FU + EU), 0),
          width: oU
        } : {});
        if ("left" === yU) {
          var BU = {
            x: AU - gU,
            y: FU + EU / 2,
            textAnchor: kU,
            verticalAnchor: "middle"
          };
          return ZU(ZU({}, BU), zU ? {
            width: Math.max(BU.x - zU.x, 0),
            height: EU
          } : {})
        }
        if ("right" === yU) {
          var RU = {
            x: AU + oU + gU,
            y: FU + EU / 2,
            textAnchor: GU,
            verticalAnchor: "middle"
          };
          return ZU(ZU({}, RU), zU ? {
            width: Math.max(zU.x + zU.width - RU.x, 0),
            height: EU
          } : {})
        }
        var PU = zU ? {
          width: oU,
          height: EU
        } : {};
        return "insideLeft" === yU ? ZU({
          x: AU + gU,
          y: FU + EU / 2,
          textAnchor: GU,
          verticalAnchor: "middle"
        }, PU) : "insideRight" === yU ? ZU({
          x: AU + oU - gU,
          y: FU + EU / 2,
          textAnchor: kU,
          verticalAnchor: "middle"
        }, PU) : "insideTop" === yU ? ZU({
          x: AU + oU / 2,
          y: FU + NU,
          textAnchor: "middle",
          verticalAnchor: aU
        }, PU) : "insideBottom" === yU ? ZU({
          x: AU + oU / 2,
          y: FU + EU - NU,
          textAnchor: "middle",
          verticalAnchor: pU
        }, PU) : "insideTopLeft" === yU ? ZU({
          x: AU + gU,
          y: FU + NU,
          textAnchor: GU,
          verticalAnchor: aU
        }, PU) : "insideTopRight" === yU ? ZU({
          x: AU + oU - gU,
          y: FU + NU,
          textAnchor: kU,
          verticalAnchor: aU
        }, PU) : "insideBottomLeft" === yU ? ZU({
          x: AU + gU,
          y: FU + EU - NU,
          textAnchor: GU,
          verticalAnchor: pU
        }, PU) : "insideBottomRight" === yU ? ZU({
          x: AU + oU - gU,
          y: FU + EU - NU,
          textAnchor: kU,
          verticalAnchor: pU
        }, PU) : DU()(yU) && ((0, IU.B)(yU.x) || (0, IU.D)(yU.x)) && ((0, IU.B)(yU.y) || (0, IU.D)(yU.y)) ? ZU({
          x: AU + (0, IU.q)(yU.x, oU),
          y: FU + (0, IU.q)(yU.y, EU),
          textAnchor: "end",
          verticalAnchor: "end"
        }, PU) : ZU({
          x: AU + oU / 2,
          y: FU + EU / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, PU)
      },
      CU = function(UU) {
        return "cx" in UU && (0, IU.B)(UU.cx)
      };

    function wU(UU) {
      var XU, zU = UU.offset,
        yU = ZU({
          offset: void 0 === zU ? 5 : zU
        }, GU(UU, tU)),
        AU = yU.viewBox,
        oU = yU.position,
        DU = yU.value,
        IU = yU.children,
        pU = yU.content,
        aU = yU.className,
        gU = void 0 === aU ? "" : aU,
        kU = yU.textBreakAll;
      if (!AU || QU()(DU) && QU()(IU) && !(0, cU.isValidElement)(pU) && !FU()(pU)) return null;
      if ((0, cU.isValidElement)(pU)) return (0, cU.cloneElement)(pU, yU);
      if (FU()(pU)) {
        if (XU = (0, cU.createElement)(pU, yU), (0, cU.isValidElement)(XU)) return XU
      } else XU = WU(yU);
      var BU = CU(AU),
        RU = (0, NU.c)(yU, !0);
      if (BU && ("insideStart" === oU || "insideEnd" === oU || "end" === oU)) return dU(yU, XU, RU);
      var wU = BU ? LU(yU) : eU(yU);
      return cU.createElement(YU.c, PU({
        className: (0, EU.c)("recharts-label", gU)
      }, RU, wU, {
        breakAll: kU
      }), XU)
    }
    wU.displayName = "Label";
    var qU = function(UU) {
      var XU = UU.cx,
        zU = UU.cy,
        cU = UU.angle,
        yU = UU.startAngle,
        QU = UU.endAngle,
        AU = UU.r,
        FU = UU.radius,
        oU = UU.innerRadius,
        DU = UU.outerRadius,
        EU = UU.x,
        YU = UU.y,
        NU = UU.top,
        pU = UU.left,
        aU = UU.width,
        tU = UU.height,
        gU = UU.clockWise,
        kU = UU.labelViewBox;
      if (kU) return kU;
      if ((0, IU.B)(aU) && (0, IU.B)(tU)) {
        if ((0, IU.B)(EU) && (0, IU.B)(YU)) return {
          x: EU,
          y: YU,
          width: aU,
          height: tU
        };
        if ((0, IU.B)(NU) && (0, IU.B)(pU)) return {
          x: NU,
          y: pU,
          width: aU,
          height: tU
        }
      }
      return (0, IU.B)(EU) && (0, IU.B)(YU) ? {
        x: EU,
        y: YU,
        width: 0,
        height: 0
      } : (0, IU.B)(XU) && (0, IU.B)(zU) ? {
        cx: XU,
        cy: zU,
        startAngle: yU || cU || 0,
        endAngle: QU || cU || 0,
        innerRadius: oU || 0,
        outerRadius: DU || FU || AU || 0,
        clockWise: gU
      } : UU.viewBox ? UU.viewBox : {}
    };
    wU.parseViewBox = qU, wU.renderCallByParent = function(UU, XU) {
      var zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!UU || !UU.children && zU && !UU.label) return null;
      var yU = UU.children,
        QU = qU(UU),
        AU = (0, NU.d)(yU, wU).map((function(UU, zU) {
          return (0, cU.cloneElement)(UU, {
            viewBox: XU || QU,
            key: "label-".concat(zU)
          })
        }));
      if (!zU) return AU;
      var oU = function(UU, XU) {
        return UU ? !0 === UU ? cU.createElement(wU, {
          key: "label-implicit",
          viewBox: XU
        }) : (0, IU.A)(UU) ? cU.createElement(wU, {
          key: "label-implicit",
          viewBox: XU,
          value: UU
        }) : (0, cU.isValidElement)(UU) ? UU.type === wU ? (0, cU.cloneElement)(UU, {
          key: "label-implicit",
          viewBox: XU
        }) : cU.createElement(wU, {
          key: "label-implicit",
          content: UU,
          viewBox: XU
        }) : FU()(UU) ? cU.createElement(wU, {
          key: "label-implicit",
          content: UU,
          viewBox: XU
        }) : DU()(UU) ? cU.createElement(wU, PU({
          viewBox: XU
        }, UU, {
          key: "label-implicit"
        })) : null : null
      }(UU.label, XU || QU);
      return [oU].concat(gU(AU))
    }
  },
  6881: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => eU
    });
    var cU = zU(61),
      yU = zU(5987),
      QU = zU.n(yU),
      AU = zU(5680),
      FU = zU.n(AU),
      oU = zU(5845),
      DU = zU.n(oU),
      EU = zU(6883),
      YU = zU.n(EU),
      NU = zU(6820),
      IU = zU(6576),
      pU = zU(5998),
      aU = zU(6752);

    function tU(UU) {
      return tU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, tU(UU)
    }
    var gU = ["valueAccessor"],
      kU = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function GU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return BU(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return BU(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return BU(UU, XU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function BU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function ZU() {
      return ZU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, ZU.apply(this, arguments)
    }

    function RU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function PU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? RU(Object(zU), !0).forEach((function(XU) {
          WU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : RU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function WU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != tU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != tU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == tU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function dU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }
    var LU = function(UU) {
      return Array.isArray(UU.value) ? YU()(UU.value) : UU.value
    };

    function eU(UU) {
      var XU = UU.valueAccessor,
        zU = void 0 === XU ? LU : XU,
        yU = dU(UU, gU),
        AU = yU.data,
        FU = yU.dataKey,
        oU = yU.clockWise,
        DU = yU.id,
        EU = yU.textBreakAll,
        YU = dU(yU, kU);
      return AU && AU.length ? cU.createElement(IU.e, {
        className: "recharts-label-list"
      }, AU.map((function(UU, XU) {
        var yU = QU()(FU) ? zU(UU, XU) : (0, aU.db)(UU && UU.payload, FU),
          AU = QU()(DU) ? {} : {
            id: "".concat(DU, "-").concat(XU)
          };
        return cU.createElement(NU.c, ZU({}, (0, pU.c)(UU, !0), YU, AU, {
          parentViewBox: UU.parentViewBox,
          value: yU,
          textBreakAll: EU,
          viewBox: NU.c.parseViewBox(QU()(oU) ? UU : PU(PU({}, UU), {}, {
            clockWise: oU
          })),
          key: "label-".concat(XU),
          index: XU
        }))
      }))) : null
    }
    eU.displayName = "LabelList", eU.renderCallByParent = function(UU, XU) {
      var zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!UU || !UU.children && zU && !UU.label) return null;
      var yU = UU.children,
        QU = (0, pU.d)(yU, eU).map((function(UU, zU) {
          return (0, cU.cloneElement)(UU, {
            data: XU,
            key: "labelList-".concat(zU)
          })
        }));
      return zU ? [function(UU, XU) {
        return UU ? !0 === UU ? cU.createElement(eU, {
          key: "labelList-implicit",
          data: XU
        }) : cU.isValidElement(UU) || DU()(UU) ? cU.createElement(eU, {
          key: "labelList-implicit",
          data: XU,
          content: UU
        }) : FU()(UU) ? cU.createElement(eU, ZU({
          data: XU
        }, UU, {
          key: "labelList-implicit"
        })) : null : null
      }(UU.label, XU)].concat(GU(QU)) : QU
    }
  },
  6674: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => MU
    });
    var cU = zU(61),
      yU = zU(5845),
      QU = zU.n(yU),
      AU = zU(5657),
      FU = zU(5995),
      oU = zU(6570),
      DU = zU(6676),
      EU = zU(6019);

    function YU(UU) {
      return YU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, YU(UU)
    }

    function NU() {
      return NU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, NU.apply(this, arguments)
    }

    function IU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function pU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, BU(cU.key), cU)
      }
    }

    function aU(UU, XU, zU) {
      return XU = gU(XU),
        function(UU, XU) {
          if (XU && ("object" === YU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, tU() ? Reflect.construct(XU, zU || [], gU(UU).constructor) : XU.apply(UU, zU))
    }

    function tU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (tU = function() {
        return !!UU
      })()
    }

    function gU(UU) {
      return gU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, gU(UU)
    }

    function kU(UU, XU) {
      return kU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, kU(UU, XU)
    }

    function GU(UU, XU, zU) {
      return (XU = BU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function BU(UU) {
      var XU = function(UU, XU) {
        if ("object" != YU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != YU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == YU(XU) ? XU : XU + ""
    }
    var ZU = 32,
      RU = function(UU) {
        function XU() {
          return function(UU, XU) {
            if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
          }(this, XU), aU(this, XU, arguments)
        }
        return function(UU, XU) {
          if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
          UU.prototype = Object.create(XU && XU.prototype, {
            constructor: {
              value: UU,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(UU, "prototype", {
            writable: !1
          }), XU && kU(UU, XU)
        }(XU, UU), zU = XU, yU = [{
          key: "renderIcon",
          value: function(UU) {
            var XU = this.props.inactiveColor,
              zU = 16,
              yU = ZU / 6,
              QU = ZU / 3,
              AU = UU.inactive ? XU : UU.color;
            if ("plainline" === UU.type) return cU.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: AU,
              strokeDasharray: UU.payload.strokeDasharray,
              x1: 0,
              y1: zU,
              x2: ZU,
              y2: zU,
              className: "recharts-legend-icon"
            });
            if ("line" === UU.type) return cU.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: AU,
              d: "M0,".concat(zU, "h").concat(QU, "\n            A").concat(yU, ",").concat(yU, ",0,1,1,").concat(2 * QU, ",").concat(zU, "\n            H").concat(ZU, "M").concat(2 * QU, ",").concat(zU, "\n            A").concat(yU, ",").concat(yU, ",0,1,1,").concat(QU, ",").concat(zU),
              className: "recharts-legend-icon"
            });
            if ("rect" === UU.type) return cU.createElement("path", {
              stroke: "none",
              fill: AU,
              d: "M0,".concat(4, "h").concat(ZU, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (cU.isValidElement(UU.legendIcon)) {
              var FU = function(UU) {
                for (var XU = 1; XU < arguments.length; XU++) {
                  var zU = null != arguments[XU] ? arguments[XU] : {};
                  XU % 2 ? IU(Object(zU), !0).forEach((function(XU) {
                    GU(UU, XU, zU[XU])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : IU(Object(zU)).forEach((function(XU) {
                    Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
                  }))
                }
                return UU
              }({}, UU);
              return delete FU.legendIcon, cU.cloneElement(UU.legendIcon, FU)
            }
            return cU.createElement(DU.c, {
              fill: AU,
              cx: zU,
              cy: zU,
              size: ZU,
              sizeType: "diameter",
              type: UU.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var UU = this,
              XU = this.props,
              zU = XU.payload,
              yU = XU.iconSize,
              DU = XU.layout,
              YU = XU.formatter,
              IU = XU.inactiveColor,
              pU = {
                x: 0,
                y: 0,
                width: ZU,
                height: ZU
              },
              aU = {
                display: "horizontal" === DU ? "inline-block" : "block",
                marginRight: 10
              },
              tU = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return zU.map((function(XU, zU) {
              var DU = XU.formatter || YU,
                gU = (0, AU.c)(GU(GU({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(zU), !0), "inactive", XU.inactive));
              if ("none" === XU.type) return null;
              var kU = QU()(XU.value) ? null : XU.value;
              (0, FU.c)(!QU()(XU.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var BU = XU.inactive ? IU : XU.color;
              return cU.createElement("li", NU({
                className: gU,
                style: aU,
                key: "legend-item-".concat(zU)
              }, (0, EU.q)(UU.props, XU, zU)), cU.createElement(oU.c, {
                width: yU,
                height: yU,
                viewBox: pU,
                style: tU
              }, UU.renderIcon(XU)), cU.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: BU
                }
              }, DU ? DU(kU, XU, zU) : kU))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var UU = this.props,
              XU = UU.payload,
              zU = UU.layout,
              yU = UU.align;
            if (!XU || !XU.length) return null;
            var QU = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === zU ? yU : "left"
            };
            return cU.createElement("ul", {
              className: "recharts-default-legend",
              style: QU
            }, this.renderItems())
          }
        }], yU && pU(zU.prototype, yU), YU && pU(zU, YU), Object.defineProperty(zU, "prototype", {
          writable: !1
        }), zU;
        var zU, yU, YU
      }(cU.PureComponent);
    GU(RU, "displayName", "Legend"), GU(RU, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var PU = zU(5746),
      WU = zU(6597);

    function dU(UU) {
      return dU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, dU(UU)
    }
    var LU = ["ref"];

    function eU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function CU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? eU(Object(zU), !0).forEach((function(XU) {
          uU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : eU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function wU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, fU(cU.key), cU)
      }
    }

    function qU(UU, XU, zU) {
      return XU = SU(XU),
        function(UU, XU) {
          if (XU && ("object" === dU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, OU() ? Reflect.construct(XU, zU || [], SU(UU).constructor) : XU.apply(UU, zU))
    }

    function OU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (OU = function() {
        return !!UU
      })()
    }

    function SU(UU) {
      return SU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, SU(UU)
    }

    function rU(UU, XU) {
      return rU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, rU(UU, XU)
    }

    function uU(UU, XU, zU) {
      return (XU = fU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function fU(UU) {
      var XU = function(UU, XU) {
        if ("object" != dU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != dU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == dU(XU) ? XU : XU + ""
    }

    function iU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function HU(UU) {
      return UU.value
    }
    var MU = function(UU) {
      function XU() {
        var UU;
        ! function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, XU);
        for (var zU = arguments.length, cU = new Array(zU), yU = 0; yU < zU; yU++) cU[yU] = arguments[yU];
        return uU(UU = qU(this, XU, [].concat(cU)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), UU
      }
      return function(UU, XU) {
        if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(XU && XU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), XU && rU(UU, XU)
      }(XU, UU), zU = XU, QU = [{
        key: "getWithHeight",
        value: function(UU, XU) {
          var zU = CU(CU({}, this.defaultProps), UU.props).layout;
          return "vertical" === zU && (0, PU.B)(UU.props.height) ? {
            height: UU.props.height
          } : "horizontal" === zU ? {
            width: UU.props.width || XU
          } : null
        }
      }], (yU = [{
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
            XU = this.getBBox();
          XU ? (Math.abs(XU.width - this.lastBoundingBox.width) > 1 || Math.abs(XU.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = XU.width, this.lastBoundingBox.height = XU.height, UU && UU(XU)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, UU && UU(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? CU({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(UU) {
          var XU, zU, cU = this.props,
            yU = cU.layout,
            QU = cU.align,
            AU = cU.verticalAlign,
            FU = cU.margin,
            oU = cU.chartWidth,
            DU = cU.chartHeight;
          return UU && (void 0 !== UU.left && null !== UU.left || void 0 !== UU.right && null !== UU.right) || (XU = "center" === QU && "vertical" === yU ? {
            left: ((oU || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === QU ? {
            right: FU && FU.right || 0
          } : {
            left: FU && FU.left || 0
          }), UU && (void 0 !== UU.top && null !== UU.top || void 0 !== UU.bottom && null !== UU.bottom) || (zU = "middle" === AU ? {
            top: ((DU || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === AU ? {
            bottom: FU && FU.bottom || 0
          } : {
            top: FU && FU.top || 0
          }), CU(CU({}, XU), zU)
        }
      }, {
        key: "render",
        value: function() {
          var UU = this,
            XU = this.props,
            zU = XU.content,
            yU = XU.width,
            QU = XU.height,
            AU = XU.wrapperStyle,
            FU = XU.payloadUniqBy,
            oU = XU.payload,
            DU = CU(CU({
              position: "absolute",
              width: yU || "auto",
              height: QU || "auto"
            }, this.getDefaultPosition(AU)), AU);
          return cU.createElement("div", {
            className: "recharts-legend-wrapper",
            style: DU,
            ref: function(XU) {
              UU.wrapperNode = XU
            }
          }, function(UU, XU) {
            if (cU.isValidElement(UU)) return cU.cloneElement(UU, XU);
            if ("function" === typeof UU) return cU.createElement(UU, XU);
            XU.ref;
            var zU = iU(XU, LU);
            return cU.createElement(RU, zU)
          }(zU, CU(CU({}, this.props), {}, {
            payload: (0, WU.d)(oU, FU, HU)
          })))
        }
      }]) && wU(zU.prototype, yU), QU && wU(zU, QU), Object.defineProperty(zU, "prototype", {
        writable: !1
      }), zU;
      var zU, yU, QU
    }(cU.PureComponent);
    uU(MU, "displayName", "Legend"), uU(MU, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  5648: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => tU
    });
    var cU = zU(5657),
      yU = zU(61),
      QU = zU(5664),
      AU = zU.n(QU),
      FU = zU(5746),
      oU = zU(5995),
      DU = zU(5998);

    function EU(UU) {
      return EU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, EU(UU)
    }

    function YU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function NU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? YU(Object(zU), !0).forEach((function(XU) {
          IU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : YU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function IU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != EU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != EU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == EU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function pU(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        var zU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != zU) {
          var cU, yU, QU, AU, FU = [],
            oU = !0,
            DU = !1;
          try {
            if (QU = (zU = zU.call(UU)).next, 0 === XU) {
              if (Object(zU) !== zU) return;
              oU = !1
            } else
              for (; !(oU = (cU = QU.call(zU)).done) && (FU.push(cU.value), FU.length !== XU); oU = !0);
          } catch (UU) {
            DU = !0, yU = UU
          } finally {
            try {
              if (!oU && null != zU.return && (AU = zU.return(), Object(AU) !== AU)) return
            } finally {
              if (DU) throw yU
            }
          }
          return FU
        }
      }(UU, XU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return aU(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return aU(UU, XU)
      }(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }
    var tU = (0, yU.forwardRef)((function(UU, XU) {
      var zU = UU.aspect,
        QU = UU.initialDimension,
        EU = void 0 === QU ? {
          width: -1,
          height: -1
        } : QU,
        YU = UU.width,
        IU = void 0 === YU ? "100%" : YU,
        aU = UU.height,
        tU = void 0 === aU ? "100%" : aU,
        gU = UU.minWidth,
        kU = void 0 === gU ? 0 : gU,
        GU = UU.minHeight,
        BU = UU.maxHeight,
        ZU = UU.children,
        RU = UU.debounce,
        PU = void 0 === RU ? 0 : RU,
        WU = UU.id,
        dU = UU.className,
        LU = UU.QG,
        eU = UU.style,
        CU = void 0 === eU ? {} : eU,
        wU = (0, yU.useRef)(null),
        qU = (0, yU.useRef)();
      qU.current = LU, (0, yU.useImperativeHandle)(XU, (function() {
        return Object.defineProperty(wU.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), wU.current
          },
          configurable: !0
        })
      }));
      var OU = pU((0, yU.useState)({
          containerWidth: EU.width,
          containerHeight: EU.height
        }), 2),
        SU = OU[0],
        rU = OU[1],
        uU = (0, yU.useCallback)((function(UU, XU) {
          rU((function(zU) {
            var cU = Math.round(UU),
              yU = Math.round(XU);
            return zU.containerWidth === cU && zU.containerHeight === yU ? zU : {
              containerWidth: cU,
              containerHeight: yU
            }
          }))
        }), []);
      (0, yU.useEffect)((function() {
        var UU = function(UU) {
          var XU, zU = UU[0].contentRect,
            cU = zU.width,
            yU = zU.height;
          uU(cU, yU), null === (XU = qU.current) || void 0 === XU || XU.call(qU, cU, yU)
        };
        PU > 0 && (UU = AU()(UU, PU, {
          trailing: !0,
          leading: !1
        }));
        var XU = new ResizeObserver(UU),
          zU = wU.current.getBoundingClientRect(),
          cU = zU.width,
          yU = zU.height;
        return uU(cU, yU), XU.observe(wU.current),
          function() {
            XU.disconnect()
          }
      }), [uU, PU]);
      var fU = (0, yU.useMemo)((function() {
        var UU = SU.containerWidth,
          XU = SU.containerHeight;
        if (UU < 0 || XU < 0) return null;
        (0, oU.c)((0, FU.D)(IU) || (0, FU.D)(tU), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", IU, tU), (0, oU.c)(!zU || zU > 0, "The aspect(%s) must be greater than zero.", zU);
        var cU = (0, FU.D)(IU) ? UU : IU,
          QU = (0, FU.D)(tU) ? XU : tU;
        zU && zU > 0 && (cU ? QU = cU / zU : QU && (cU = QU * zU), BU && QU > BU && (QU = BU)), (0, oU.c)(cU > 0 || QU > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", cU, QU, IU, tU, kU, GU, zU);
        var AU = !Array.isArray(ZU) && (0, DU.f)(ZU.type).endsWith("Chart");
        return yU.Children.map(ZU, (function(UU) {
          return yU.isValidElement(UU) ? (0, yU.cloneElement)(UU, NU({
            width: cU,
            height: QU
          }, AU ? {
            style: NU({
              height: "100%",
              width: "100%",
              maxHeight: QU,
              maxWidth: cU
            }, UU.props.style)
          } : {})) : UU
        }))
      }), [zU, ZU, tU, BU, GU, kU, SU, IU]);
      return yU.createElement("div", {
        id: WU ? "".concat(WU) : void 0,
        className: (0, cU.c)("recharts-responsive-container", dU),
        style: NU(NU({}, CU), {}, {
          width: IU,
          height: tU,
          minWidth: kU,
          minHeight: GU,
          maxHeight: BU
        }),
        ref: wU
      }, fU)
    }))
  },
  6735: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => vU
    });
    var cU = zU(61),
      yU = zU(5987),
      QU = zU.n(yU),
      AU = zU(5657),
      FU = zU(5746),
      oU = zU(6588),
      DU = zU(5998),
      EU = zU(6743);

    function YU(UU) {
      return YU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, YU(UU)
    }

    function NU(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        var zU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != zU) {
          var cU, yU, QU, AU, FU = [],
            oU = !0,
            DU = !1;
          try {
            if (QU = (zU = zU.call(UU)).next, 0 === XU) {
              if (Object(zU) !== zU) return;
              oU = !1
            } else
              for (; !(oU = (cU = QU.call(zU)).done) && (FU.push(cU.value), FU.length !== XU); oU = !0);
          } catch (UU) {
            DU = !0, yU = UU
          } finally {
            try {
              if (!oU && null != zU.return && (AU = zU.return(), Object(AU) !== AU)) return
            } finally {
              if (DU) throw yU
            }
          }
          return FU
        }
      }(UU, XU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return IU(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return IU(UU, XU)
      }(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function pU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, aU(cU.key), cU)
      }
    }

    function aU(UU) {
      var XU = function(UU, XU) {
        if ("object" != YU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != YU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == YU(XU) ? XU : XU + ""
    }
    var tU = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      gU = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      kU = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      GU = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      BU = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      ZU = Object.keys(BU),
      RU = "NaN";
    var PU = function() {
      function UU(XU, zU) {
        ! function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, UU), this.num = XU, this.unit = zU, this.num = XU, this.unit = zU, Number.isNaN(XU) && (this.unit = ""), "" === zU || kU.test(zU) || (this.num = NaN, this.unit = ""), ZU.includes(zU) && (this.num = function(UU, XU) {
          return UU * BU[XU]
        }(XU, zU), this.unit = "px")
      }
      return XU = UU, cU = [{
        key: "parse",
        value: function(XU) {
          var zU, cU = NU(null !== (zU = GU.exec(XU)) && void 0 !== zU ? zU : [], 3),
            yU = cU[1],
            QU = cU[2];
          return new UU(parseFloat(yU), null !== QU && void 0 !== QU ? QU : "")
        }
      }], (zU = [{
        key: "add",
        value: function(XU) {
          return this.unit !== XU.unit ? new UU(NaN, "") : new UU(this.num + XU.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(XU) {
          return this.unit !== XU.unit ? new UU(NaN, "") : new UU(this.num - XU.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(XU) {
          return "" !== this.unit && "" !== XU.unit && this.unit !== XU.unit ? new UU(NaN, "") : new UU(this.num * XU.num, this.unit || XU.unit)
        }
      }, {
        key: "divide",
        value: function(XU) {
          return "" !== this.unit && "" !== XU.unit && this.unit !== XU.unit ? new UU(NaN, "") : new UU(this.num / XU.num, this.unit || XU.unit)
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
      }]) && pU(XU.prototype, zU), cU && pU(XU, cU), Object.defineProperty(XU, "prototype", {
        writable: !1
      }), XU;
      var XU, zU, cU
    }();

    function WU(UU) {
      if (UU.includes(RU)) return RU;
      for (var XU = UU; XU.includes("*") || XU.includes("/");) {
        var zU, cU = NU(null !== (zU = tU.exec(XU)) && void 0 !== zU ? zU : [], 4),
          yU = cU[1],
          QU = cU[2],
          AU = cU[3],
          FU = PU.parse(null !== yU && void 0 !== yU ? yU : ""),
          oU = PU.parse(null !== AU && void 0 !== AU ? AU : ""),
          DU = "*" === QU ? FU.multiply(oU) : FU.divide(oU);
        if (DU.isNaN()) return RU;
        XU = XU.replace(tU, DU.toString())
      }
      for (; XU.includes("+") || /.-\d+(?:\.\d+)?/.test(XU);) {
        var EU, YU = NU(null !== (EU = gU.exec(XU)) && void 0 !== EU ? EU : [], 4),
          IU = YU[1],
          pU = YU[2],
          aU = YU[3],
          kU = PU.parse(null !== IU && void 0 !== IU ? IU : ""),
          GU = PU.parse(null !== aU && void 0 !== aU ? aU : ""),
          BU = "+" === pU ? kU.add(GU) : kU.subtract(GU);
        if (BU.isNaN()) return RU;
        XU = XU.replace(gU, BU.toString())
      }
      return XU
    }
    var dU = /\(([^()]*)\)/;

    function LU(UU) {
      var XU = UU.replace(/\s+/g, "");
      return XU = function(UU) {
        for (var XU = UU; XU.includes("(");) {
          var zU = NU(dU.exec(XU), 2)[1];
          XU = XU.replace(dU, WU(zU))
        }
        return XU
      }(XU), XU = WU(XU)
    }

    function eU(UU) {
      var XU = function(UU) {
        try {
          return LU(UU)
        } catch (XU) {
          return RU
        }
      }(UU.slice(5, -1));
      return XU === RU ? "" : XU
    }
    var CU = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      wU = ["dx", "dy", "angle", "className", "breakAll"];

    function qU() {
      return qU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, qU.apply(this, arguments)
    }

    function OU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function SU(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        var zU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != zU) {
          var cU, yU, QU, AU, FU = [],
            oU = !0,
            DU = !1;
          try {
            if (QU = (zU = zU.call(UU)).next, 0 === XU) {
              if (Object(zU) !== zU) return;
              oU = !1
            } else
              for (; !(oU = (cU = QU.call(zU)).done) && (FU.push(cU.value), FU.length !== XU); oU = !0);
          } catch (UU) {
            DU = !0, yU = UU
          } finally {
            try {
              if (!oU && null != zU.return && (AU = zU.return(), Object(AU) !== AU)) return
            } finally {
              if (DU) throw yU
            }
          }
          return FU
        }
      }(UU, XU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return rU(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return rU(UU, XU)
      }(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }
    var uU = /[ \f\n\r\t\v\u2028\u2029]+/,
      fU = function(UU) {
        var XU = UU.children,
          zU = UU.breakAll,
          cU = UU.style;
        try {
          var yU = [];
          return QU()(XU) || (yU = zU ? XU.toString().split("") : XU.toString().split(uU)), {
            wordsWithComputedWidth: yU.map((function(UU) {
              return {
                word: UU,
                width: (0, EU.g)(UU, cU).width
              }
            })),
            spaceWidth: zU ? 0 : (0, EU.g)("\xa0", cU).width
          }
        } catch (AU) {
          return null
        }
      },
      iU = function(UU) {
        return [{
          words: QU()(UU) ? [] : UU.toString().split(uU)
        }]
      },
      HU = function(UU) {
        var XU = UU.width,
          zU = UU.scaleToFit,
          cU = UU.children,
          yU = UU.style,
          QU = UU.breakAll,
          AU = UU.maxLines;
        if ((XU || zU) && !oU.e.isSsr) {
          var DU = fU({
            breakAll: QU,
            children: cU,
            style: yU
          });
          return DU ? function(UU, XU, zU, cU, yU) {
            var QU = UU.maxLines,
              AU = UU.children,
              oU = UU.style,
              DU = UU.breakAll,
              EU = (0, FU.B)(QU),
              YU = AU,
              NU = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(UU, XU) {
                  var QU = XU.word,
                    AU = XU.width,
                    FU = UU[UU.length - 1];
                  if (FU && (null == cU || yU || FU.width + AU + zU < Number(cU))) FU.words.push(QU), FU.width += AU + zU;
                  else {
                    var oU = {
                      words: [QU],
                      width: AU
                    };
                    UU.push(oU)
                  }
                  return UU
                }), [])
              },
              IU = NU(XU);
            if (!EU) return IU;
            for (var pU, aU = function(UU) {
                var XU = YU.slice(0, UU),
                  zU = fU({
                    breakAll: DU,
                    style: oU,
                    children: XU + "\u2026"
                  }).wordsWithComputedWidth,
                  yU = NU(zU),
                  AU = yU.length > QU || function(UU) {
                    return UU.reduce((function(UU, XU) {
                      return UU.width > XU.width ? UU : XU
                    }))
                  }(yU).width > Number(cU);
                return [AU, yU]
              }, tU = 0, gU = YU.length - 1, kU = 0; tU <= gU && kU <= YU.length - 1;) {
              var GU = Math.floor((tU + gU) / 2),
                BU = SU(aU(GU - 1), 2),
                ZU = BU[0],
                RU = BU[1],
                PU = SU(aU(GU), 1)[0];
              if (ZU || PU || (tU = GU + 1), ZU && PU && (gU = GU - 1), !ZU && PU) {
                pU = RU;
                break
              }
              kU++
            }
            return pU || IU
          }({
            breakAll: QU,
            children: cU,
            maxLines: AU,
            style: yU
          }, DU.wordsWithComputedWidth, DU.spaceWidth, XU, zU) : iU(cU)
        }
        return iU(cU)
      },
      MU = "#808080",
      vU = function(UU) {
        var XU = UU.x,
          zU = void 0 === XU ? 0 : XU,
          yU = UU.y,
          QU = void 0 === yU ? 0 : yU,
          oU = UU.lineHeight,
          EU = void 0 === oU ? "1em" : oU,
          YU = UU.capHeight,
          NU = void 0 === YU ? "0.71em" : YU,
          IU = UU.scaleToFit,
          pU = void 0 !== IU && IU,
          aU = UU.textAnchor,
          tU = void 0 === aU ? "start" : aU,
          gU = UU.verticalAnchor,
          kU = void 0 === gU ? "end" : gU,
          GU = UU.fill,
          BU = void 0 === GU ? MU : GU,
          ZU = OU(UU, CU),
          RU = (0, cU.useMemo)((function() {
            return HU({
              breakAll: ZU.breakAll,
              children: ZU.children,
              maxLines: ZU.maxLines,
              scaleToFit: pU,
              style: ZU.style,
              width: ZU.width
            })
          }), [ZU.breakAll, ZU.children, ZU.maxLines, pU, ZU.style, ZU.width]),
          PU = ZU.dx,
          WU = ZU.dy,
          dU = ZU.angle,
          LU = ZU.className,
          SU = ZU.breakAll,
          rU = OU(ZU, wU);
        if (!(0, FU.A)(zU) || !(0, FU.A)(QU)) return null;
        var uU, fU = zU + ((0, FU.B)(PU) ? PU : 0),
          iU = QU + ((0, FU.B)(WU) ? WU : 0);
        switch (kU) {
          case "start":
            uU = eU("calc(".concat(NU, ")"));
            break;
          case "middle":
            uU = eU("calc(".concat((RU.length - 1) / 2, " * -").concat(EU, " + (").concat(NU, " / 2))"));
            break;
          default:
            uU = eU("calc(".concat(RU.length - 1, " * -").concat(EU, ")"))
        }
        var vU = [];
        if (pU) {
          var VU = RU[0].width,
            sU = ZU.width;
          vU.push("scale(".concat(((0, FU.B)(sU) ? sU / VU : 1) / VU, ")"))
        }
        return dU && vU.push("rotate(".concat(dU, ", ").concat(fU, ", ").concat(iU, ")")), vU.length && (rU.transform = vU.join(" ")), cU.createElement("text", qU({}, (0, DU.c)(rU, !0), {
          x: fU,
          y: iU,
          className: (0, AU.c)("recharts-text", LU),
          textAnchor: tU,
          fill: BU.includes("url") ? MU : BU
        }), RU.map((function(UU, XU) {
          var zU = UU.words.join(SU ? "" : " ");
          return cU.createElement("tspan", {
            x: fU,
            dy: 0 === XU ? uU : EU,
            key: "".concat(zU, "-").concat(XU)
          }, zU)
        })))
      }
  },
  6579: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => bU
    });
    var cU = zU(61),
      yU = zU(6079),
      QU = zU.n(yU),
      AU = zU(5987),
      FU = zU.n(AU),
      oU = zU(5657),
      DU = zU(5746);

    function EU(UU) {
      return EU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, EU(UU)
    }

    function YU() {
      return YU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, YU.apply(this, arguments)
    }

    function NU(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        var zU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != zU) {
          var cU, yU, QU, AU, FU = [],
            oU = !0,
            DU = !1;
          try {
            if (QU = (zU = zU.call(UU)).next, 0 === XU) {
              if (Object(zU) !== zU) return;
              oU = !1
            } else
              for (; !(oU = (cU = QU.call(zU)).done) && (FU.push(cU.value), FU.length !== XU); oU = !0);
          } catch (UU) {
            DU = !0, yU = UU
          } finally {
            try {
              if (!oU && null != zU.return && (AU = zU.return(), Object(AU) !== AU)) return
            } finally {
              if (DU) throw yU
            }
          }
          return FU
        }
      }(UU, XU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return IU(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return IU(UU, XU)
      }(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function pU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function aU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? pU(Object(zU), !0).forEach((function(XU) {
          tU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : pU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function tU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != EU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != EU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == EU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function gU(UU) {
      return Array.isArray(UU) && (0, DU.A)(UU[0]) && (0, DU.A)(UU[1]) ? UU.join(" ~ ") : UU
    }
    var kU = function(UU) {
      var XU = UU.separator,
        zU = void 0 === XU ? " : " : XU,
        yU = UU.contentStyle,
        AU = void 0 === yU ? {} : yU,
        EU = UU.itemStyle,
        IU = void 0 === EU ? {} : EU,
        pU = UU.labelStyle,
        tU = void 0 === pU ? {} : pU,
        kU = UU.payload,
        GU = UU.formatter,
        BU = UU.itemSorter,
        ZU = UU.wrapperClassName,
        RU = UU.labelClassName,
        PU = UU.label,
        WU = UU.labelFormatter,
        dU = UU.accessibilityLayer,
        LU = void 0 !== dU && dU,
        eU = aU({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, AU),
        CU = aU({
          margin: 0
        }, tU),
        wU = !FU()(PU),
        qU = wU ? PU : "",
        OU = (0, oU.c)("recharts-default-tooltip", ZU),
        SU = (0, oU.c)("recharts-tooltip-label", RU);
      wU && WU && void 0 !== kU && null !== kU && (qU = WU(PU, kU));
      var rU = LU ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return cU.createElement("div", YU({
        className: OU,
        style: eU
      }, rU), cU.createElement("p", {
        className: SU,
        style: CU
      }, cU.isValidElement(qU) ? qU : "".concat(qU)), function() {
        if (kU && kU.length) {
          var UU = (BU ? QU()(kU, BU) : kU).map((function(UU, XU) {
            if ("none" === UU.type) return null;
            var yU = aU({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: UU.color || "#000"
              }, IU),
              QU = UU.formatter || GU || gU,
              AU = UU.value,
              FU = UU.name,
              oU = AU,
              EU = FU;
            if (QU && null != oU && null != EU) {
              var YU = QU(AU, FU, UU, XU, kU);
              if (Array.isArray(YU)) {
                var pU = NU(YU, 2);
                oU = pU[0], EU = pU[1]
              } else oU = YU
            }
            return cU.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(XU),
              style: yU
            }, (0, DU.A)(EU) ? cU.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, EU) : null, (0, DU.A)(EU) ? cU.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, zU) : null, cU.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, oU), cU.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, UU.unit || ""))
          }));
          return cU.createElement("ul", {
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

    function GU(UU) {
      return GU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, GU(UU)
    }

    function BU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != GU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != GU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == GU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }
    var ZU = "recharts-tooltip-wrapper",
      RU = {
        visibility: "hidden"
      };

    function PU(UU) {
      var XU = UU.coordinate,
        zU = UU.translateX,
        cU = UU.translateY;
      return (0, oU.c)(ZU, BU(BU(BU(BU({}, "".concat(ZU, "-right"), (0, DU.B)(zU) && XU && (0, DU.B)(XU.x) && zU >= XU.x), "".concat(ZU, "-left"), (0, DU.B)(zU) && XU && (0, DU.B)(XU.x) && zU < XU.x), "".concat(ZU, "-bottom"), (0, DU.B)(cU) && XU && (0, DU.B)(XU.y) && cU >= XU.y), "".concat(ZU, "-top"), (0, DU.B)(cU) && XU && (0, DU.B)(XU.y) && cU < XU.y))
    }

    function WU(UU) {
      var XU = UU.allowEscapeViewBox,
        zU = UU.coordinate,
        cU = UU.key,
        yU = UU.offsetTopLeft,
        QU = UU.position,
        AU = UU.reverseDirection,
        FU = UU.tooltipDimension,
        oU = UU.viewBox,
        EU = UU.viewBoxDimension;
      if (QU && (0, DU.B)(QU[cU])) return QU[cU];
      var YU = zU[cU] - FU - yU,
        NU = zU[cU] + yU;
      return XU[cU] ? AU[cU] ? YU : NU : AU[cU] ? YU < oU[cU] ? Math.max(NU, oU[cU]) : Math.max(YU, oU[cU]) : NU + FU > oU[cU] + EU ? Math.max(YU, oU[cU]) : Math.max(NU, oU[cU])
    }

    function dU(UU) {
      return dU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, dU(UU)
    }

    function LU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function eU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? LU(Object(zU), !0).forEach((function(XU) {
          rU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : LU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function CU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, uU(cU.key), cU)
      }
    }

    function wU(UU, XU, zU) {
      return XU = OU(XU),
        function(UU, XU) {
          if (XU && ("object" === dU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, qU() ? Reflect.construct(XU, zU || [], OU(UU).constructor) : XU.apply(UU, zU))
    }

    function qU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (qU = function() {
        return !!UU
      })()
    }

    function OU(UU) {
      return OU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, OU(UU)
    }

    function SU(UU, XU) {
      return SU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, SU(UU, XU)
    }

    function rU(UU, XU, zU) {
      return (XU = uU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function uU(UU) {
      var XU = function(UU, XU) {
        if ("object" != dU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != dU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == dU(XU) ? XU : XU + ""
    }
    var fU = function(UU) {
        function XU() {
          var UU;
          ! function(UU, XU) {
            if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
          }(this, XU);
          for (var zU = arguments.length, cU = new Array(zU), yU = 0; yU < zU; yU++) cU[yU] = arguments[yU];
          return rU(UU = wU(this, XU, [].concat(cU)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), rU(UU, "handleKeyDown", (function(XU) {
            var zU, cU, yU, QU;
            "Escape" === XU.key && UU.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (zU = null === (cU = UU.props.coordinate) || void 0 === cU ? void 0 : cU.x) && void 0 !== zU ? zU : 0,
                y: null !== (yU = null === (QU = UU.props.coordinate) || void 0 === QU ? void 0 : QU.y) && void 0 !== yU ? yU : 0
              }
            })
          })), UU
        }
        return function(UU, XU) {
          if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
          UU.prototype = Object.create(XU && XU.prototype, {
            constructor: {
              value: UU,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(UU, "prototype", {
            writable: !1
          }), XU && SU(UU, XU)
        }(XU, UU), zU = XU, (yU = [{
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
            var UU, XU;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (UU = this.props.coordinate) || void 0 === UU ? void 0 : UU.x) === this.state.dismissedAtCoordinate.x && (null === (XU = this.props.coordinate) || void 0 === XU ? void 0 : XU.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var UU = this,
              XU = this.props,
              zU = XU.active,
              yU = XU.allowEscapeViewBox,
              QU = XU.animationDuration,
              AU = XU.animationEasing,
              FU = XU.children,
              oU = XU.coordinate,
              DU = XU.hasPayload,
              EU = XU.isAnimationActive,
              YU = XU.offset,
              NU = XU.position,
              IU = XU.reverseDirection,
              pU = XU.useTranslate3d,
              aU = XU.viewBox,
              tU = XU.wrapperStyle,
              gU = function(UU) {
                var XU, zU, cU = UU.allowEscapeViewBox,
                  yU = UU.coordinate,
                  QU = UU.offsetTopLeft,
                  AU = UU.position,
                  FU = UU.reverseDirection,
                  oU = UU.tooltipBox,
                  DU = UU.useTranslate3d,
                  EU = UU.viewBox;
                return {
                  cssProperties: oU.height > 0 && oU.width > 0 && yU ? function(UU) {
                    var XU = UU.translateX,
                      zU = UU.translateY;
                    return {
                      transform: UU.useTranslate3d ? "translate3d(".concat(XU, "px, ").concat(zU, "px, 0)") : "translate(".concat(XU, "px, ").concat(zU, "px)")
                    }
                  }({
                    translateX: XU = WU({
                      allowEscapeViewBox: cU,
                      coordinate: yU,
                      key: "x",
                      offsetTopLeft: QU,
                      position: AU,
                      reverseDirection: FU,
                      tooltipDimension: oU.width,
                      viewBox: EU,
                      viewBoxDimension: EU.width
                    }),
                    translateY: zU = WU({
                      allowEscapeViewBox: cU,
                      coordinate: yU,
                      key: "y",
                      offsetTopLeft: QU,
                      position: AU,
                      reverseDirection: FU,
                      tooltipDimension: oU.height,
                      viewBox: EU,
                      viewBoxDimension: EU.height
                    }),
                    useTranslate3d: DU
                  }) : RU,
                  cssClasses: PU({
                    translateX: XU,
                    translateY: zU,
                    coordinate: yU
                  })
                }
              }({
                allowEscapeViewBox: yU,
                coordinate: oU,
                offsetTopLeft: YU,
                position: NU,
                reverseDirection: IU,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: pU,
                viewBox: aU
              }),
              kU = gU.cssClasses,
              GU = gU.cssProperties,
              BU = eU(eU({
                transition: EU && zU ? "transform ".concat(QU, "ms ").concat(AU) : void 0
              }, GU), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && zU && DU ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, tU);
            return cU.createElement("div", {
              tabIndex: -1,
              className: kU,
              style: BU,
              ref: function(XU) {
                UU.wrapperNode = XU
              }
            }, FU)
          }
        }]) && CU(zU.prototype, yU), QU && CU(zU, QU), Object.defineProperty(zU, "prototype", {
          writable: !1
        }), zU;
        var zU, yU, QU
      }(cU.PureComponent),
      iU = zU(6588),
      HU = zU(6597);

    function MU(UU) {
      return MU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, MU(UU)
    }

    function vU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function VU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? vU(Object(zU), !0).forEach((function(XU) {
          JU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : vU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function sU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, jU(cU.key), cU)
      }
    }

    function nU(UU, XU, zU) {
      return XU = lU(XU),
        function(UU, XU) {
          if (XU && ("object" === MU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return function(UU) {
            if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return UU
          }(UU)
        }(UU, mU() ? Reflect.construct(XU, zU || [], lU(UU).constructor) : XU.apply(UU, zU))
    }

    function mU() {
      try {
        var UU = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (UU) {}
      return (mU = function() {
        return !!UU
      })()
    }

    function lU(UU) {
      return lU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, lU(UU)
    }

    function xU(UU, XU) {
      return xU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, xU(UU, XU)
    }

    function JU(UU, XU, zU) {
      return (XU = jU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function jU(UU) {
      var XU = function(UU, XU) {
        if ("object" != MU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != MU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == MU(XU) ? XU : XU + ""
    }

    function KU(UU) {
      return UU.dataKey
    }
    var bU = function(UU) {
      function XU() {
        return function(UU, XU) {
          if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
        }(this, XU), nU(this, XU, arguments)
      }
      return function(UU, XU) {
        if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
        UU.prototype = Object.create(XU && XU.prototype, {
          constructor: {
            value: UU,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(UU, "prototype", {
          writable: !1
        }), XU && xU(UU, XU)
      }(XU, UU), zU = XU, (yU = [{
        key: "render",
        value: function() {
          var UU = this,
            XU = this.props,
            zU = XU.active,
            yU = XU.allowEscapeViewBox,
            QU = XU.animationDuration,
            AU = XU.animationEasing,
            FU = XU.content,
            oU = XU.coordinate,
            DU = XU.filterNull,
            EU = XU.isAnimationActive,
            YU = XU.offset,
            NU = XU.payload,
            IU = XU.payloadUniqBy,
            pU = XU.position,
            aU = XU.reverseDirection,
            tU = XU.useTranslate3d,
            gU = XU.viewBox,
            GU = XU.wrapperStyle,
            BU = null !== NU && void 0 !== NU ? NU : [];
          DU && BU.length && (BU = (0, HU.d)(NU.filter((function(XU) {
            return null != XU.value && (!0 !== XU.hide || UU.props.includeHidden)
          })), IU, KU));
          var ZU = BU.length > 0;
          return cU.createElement(fU, {
            allowEscapeViewBox: yU,
            animationDuration: QU,
            animationEasing: AU,
            isAnimationActive: EU,
            active: zU,
            coordinate: oU,
            hasPayload: ZU,
            offset: YU,
            position: pU,
            reverseDirection: aU,
            useTranslate3d: tU,
            viewBox: gU,
            wrapperStyle: GU
          }, function(UU, XU) {
            return cU.isValidElement(UU) ? cU.cloneElement(UU, XU) : "function" === typeof UU ? cU.createElement(UU, XU) : cU.createElement(kU, XU)
          }(FU, VU(VU({}, this.props), {}, {
            payload: BU
          })))
        }
      }]) && sU(zU.prototype, yU), QU && sU(zU, QU), Object.defineProperty(zU, "prototype", {
        writable: !1
      }), zU;
      var zU, yU, QU
    }(cU.PureComponent);
    JU(bU, "displayName", "Tooltip"), JU(bU, "defaultProps", {
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
      isAnimationActive: !iU.e.isSsr,
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
  6576: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => DU
    });
    var cU = zU(61),
      yU = zU(5657),
      QU = zU(5998),
      AU = ["children", "className"];

    function FU() {
      return FU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, FU.apply(this, arguments)
    }

    function oU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }
    var DU = cU.forwardRef((function(UU, XU) {
      var zU = UU.children,
        DU = UU.className,
        EU = oU(UU, AU),
        YU = (0, yU.c)("recharts-layer", DU);
      return cU.createElement("g", FU({
        className: YU
      }, (0, QU.c)(EU, !0), {
        ref: XU
      }), zU)
    }))
  },
  6570: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => DU
    });
    var cU = zU(61),
      yU = zU(5657),
      QU = zU(5998),
      AU = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function FU() {
      return FU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, FU.apply(this, arguments)
    }

    function oU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function DU(UU) {
      var XU = UU.children,
        zU = UU.width,
        DU = UU.height,
        EU = UU.viewBox,
        YU = UU.className,
        NU = UU.style,
        IU = UU.title,
        pU = UU.desc,
        aU = oU(UU, AU),
        tU = EU || {
          width: zU,
          height: DU,
          x: 0,
          y: 0
        },
        gU = (0, yU.c)("recharts-surface", YU);
      return cU.createElement("svg", FU({}, (0, QU.c)(aU, !0, "svg"), {
        className: gU,
        width: zU,
        height: DU,
        style: NU,
        viewBox: "".concat(tU.x, " ").concat(tU.y, " ").concat(tU.width, " ").concat(tU.height)
      }), cU.createElement("title", null, IU), cU.createElement("desc", null, pU), XU)
    }
  },
  6921: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => GU,
      i: () => RU,
      k: () => CU,
      m: () => eU,
      n: () => BU,
      r: () => LU,
      v: () => dU,
      y: () => ZU,
      z: () => WU,
      C: () => PU
    });
    var cU = zU(61),
      yU = zU(6565),
      QU = zU(6930),
      AU = zU.n(QU),
      FU = zU(6844),
      oU = zU.n(FU),
      DU = zU(5804),
      EU = zU.n(DU)()((function(UU) {
        return {
          x: UU.left,
          y: UU.top,
          width: UU.width,
          height: UU.height
        }
      }), (function(UU) {
        return ["l", UU.left, "t", UU.top, "w", UU.width, "h", UU.height].join("")
      })),
      YU = zU(5746);
    var NU = (0, cU.createContext)(void 0),
      IU = (0, cU.createContext)(void 0),
      pU = (0, cU.createContext)(void 0),
      aU = (0, cU.createContext)({}),
      tU = (0, cU.createContext)(void 0),
      gU = (0, cU.createContext)(0),
      kU = (0, cU.createContext)(0),
      GU = function(UU) {
        var XU = UU.state,
          zU = XU.xAxisMap,
          yU = XU.yAxisMap,
          QU = XU.offset,
          AU = UU.clipPathId,
          FU = UU.children,
          oU = UU.width,
          DU = UU.height,
          YU = EU(QU);
        return cU.createElement(NU.Provider, {
          value: zU
        }, cU.createElement(IU.Provider, {
          value: yU
        }, cU.createElement(aU.Provider, {
          value: QU
        }, cU.createElement(pU.Provider, {
          value: YU
        }, cU.createElement(tU.Provider, {
          value: AU
        }, cU.createElement(gU.Provider, {
          value: DU
        }, cU.createElement(kU.Provider, {
          value: oU
        }, FU)))))))
      },
      BU = function() {
        return (0, cU.useContext)(tU)
      };
    var ZU = function(UU) {
        var XU = (0, cU.useContext)(NU);
        null == XU && (0, yU.d)(!1);
        var zU = XU[UU];
        return null == zU && (0, yU.d)(!1), zU
      },
      RU = function() {
        var UU = (0, cU.useContext)(NU);
        return (0, YU.i)(UU)
      },
      PU = function() {
        var UU = (0, cU.useContext)(IU);
        return AU()(UU, (function(UU) {
          return oU()(UU.domain, Number.isFinite)
        })) || (0, YU.i)(UU)
      },
      WU = function(UU) {
        var XU = (0, cU.useContext)(IU);
        null == XU && (0, yU.d)(!1);
        var zU = XU[UU];
        return null == zU && (0, yU.d)(!1), zU
      },
      dU = function() {
        return (0, cU.useContext)(pU)
      },
      LU = function() {
        return (0, cU.useContext)(aU)
      },
      eU = function() {
        return (0, cU.useContext)(kU)
      },
      CU = function() {
        return (0, cU.useContext)(gU)
      }
  },
  6948: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => KU
    });
    var cU = zU(61);

    function yU() {}

    function QU(UU, XU, zU) {
      UU._context.bezierCurveTo((2 * UU._x0 + UU._x1) / 3, (2 * UU._y0 + UU._y1) / 3, (UU._x0 + 2 * UU._x1) / 3, (UU._y0 + 2 * UU._y1) / 3, (UU._x0 + 4 * UU._x1 + XU) / 6, (UU._y0 + 4 * UU._y1 + zU) / 6)
    }

    function AU(UU) {
      this._context = UU
    }

    function FU(UU) {
      this._context = UU
    }

    function oU(UU) {
      this._context = UU
    }
    AU.prototype = {
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
            QU(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(UU, XU) {
        switch (UU = +UU, XU = +XU, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(UU, XU) : this._context.moveTo(UU, XU);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            QU(this, UU, XU)
        }
        this._x0 = this._x1, this._x1 = UU, this._y0 = this._y1, this._y1 = XU
      }
    }, FU.prototype = {
      areaStart: yU,
      areaEnd: yU,
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
      point: function(UU, XU) {
        switch (UU = +UU, XU = +XU, this._point) {
          case 0:
            this._point = 1, this._x2 = UU, this._y2 = XU;
            break;
          case 1:
            this._point = 2, this._x3 = UU, this._y3 = XU;
            break;
          case 2:
            this._point = 3, this._x4 = UU, this._y4 = XU, this._context.moveTo((this._x0 + 4 * this._x1 + UU) / 6, (this._y0 + 4 * this._y1 + XU) / 6);
            break;
          default:
            QU(this, UU, XU)
        }
        this._x0 = this._x1, this._x1 = UU, this._y0 = this._y1, this._y1 = XU
      }
    }, oU.prototype = {
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
      point: function(UU, XU) {
        switch (UU = +UU, XU = +XU, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var zU = (this._x0 + 4 * this._x1 + UU) / 6,
              cU = (this._y0 + 4 * this._y1 + XU) / 6;
            this._line ? this._context.lineTo(zU, cU) : this._context.moveTo(zU, cU);
            break;
          case 3:
            this._point = 4;
          default:
            QU(this, UU, XU)
        }
        this._x0 = this._x1, this._x1 = UU, this._y0 = this._y1, this._y1 = XU
      }
    };
    class DU {
      constructor(UU, XU) {
        this._context = UU, this._x = XU
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
      point(UU, XU) {
        switch (UU = +UU, XU = +XU, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(UU, XU) : this._context.moveTo(UU, XU);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + UU) / 2, this._y0, this._x0, XU, UU, XU) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + XU) / 2, UU, this._y0, UU, XU)
        }
        this._x0 = UU, this._y0 = XU
      }
    }

    function EU(UU) {
      this._context = UU
    }

    function YU(UU) {
      this._context = UU
    }

    function NU(UU) {
      return new YU(UU)
    }

    function IU(UU) {
      return UU < 0 ? -1 : 1
    }

    function pU(UU, XU, zU) {
      var cU = UU._x1 - UU._x0,
        yU = XU - UU._x1,
        QU = (UU._y1 - UU._y0) / (cU || yU < 0 && -0),
        AU = (zU - UU._y1) / (yU || cU < 0 && -0),
        FU = (QU * yU + AU * cU) / (cU + yU);
      return (IU(QU) + IU(AU)) * Math.min(Math.abs(QU), Math.abs(AU), .5 * Math.abs(FU)) || 0
    }

    function aU(UU, XU) {
      var zU = UU._x1 - UU._x0;
      return zU ? (3 * (UU._y1 - UU._y0) / zU - XU) / 2 : XU
    }

    function tU(UU, XU, zU) {
      var cU = UU._x0,
        yU = UU._y0,
        QU = UU._x1,
        AU = UU._y1,
        FU = (QU - cU) / 3;
      UU._context.bezierCurveTo(cU + FU, yU + FU * XU, QU - FU, AU - FU * zU, QU, AU)
    }

    function gU(UU) {
      this._context = UU
    }

    function kU(UU) {
      this._context = new GU(UU)
    }

    function GU(UU) {
      this._context = UU
    }

    function BU(UU) {
      this._context = UU
    }

    function ZU(UU) {
      var XU, zU, cU = UU.length - 1,
        yU = new Array(cU),
        QU = new Array(cU),
        AU = new Array(cU);
      for (yU[0] = 0, QU[0] = 2, AU[0] = UU[0] + 2 * UU[1], XU = 1; XU < cU - 1; ++XU) yU[XU] = 1, QU[XU] = 4, AU[XU] = 4 * UU[XU] + 2 * UU[XU + 1];
      for (yU[cU - 1] = 2, QU[cU - 1] = 7, AU[cU - 1] = 8 * UU[cU - 1] + UU[cU], XU = 1; XU < cU; ++XU) zU = yU[XU] / QU[XU - 1], QU[XU] -= zU, AU[XU] -= zU * AU[XU - 1];
      for (yU[cU - 1] = AU[cU - 1] / QU[cU - 1], XU = cU - 2; XU >= 0; --XU) yU[XU] = (AU[XU] - yU[XU + 1]) / QU[XU];
      for (QU[cU - 1] = (UU[cU] + yU[cU - 1]) / 2, XU = 0; XU < cU - 1; ++XU) QU[XU] = 2 * UU[XU + 1] - yU[XU + 1];
      return [yU, QU]
    }

    function RU(UU, XU) {
      this._context = UU, this._t = XU
    }
    EU.prototype = {
      areaStart: yU,
      areaEnd: yU,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(UU, XU) {
        UU = +UU, XU = +XU, this._point ? this._context.lineTo(UU, XU) : (this._point = 1, this._context.moveTo(UU, XU))
      }
    }, YU.prototype = {
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
      point: function(UU, XU) {
        switch (UU = +UU, XU = +XU, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(UU, XU) : this._context.moveTo(UU, XU);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(UU, XU)
        }
      }
    }, gU.prototype = {
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
            tU(this, this._t0, aU(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(UU, XU) {
        var zU = NaN;
        if (XU = +XU, (UU = +UU) !== this._x1 || XU !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(UU, XU) : this._context.moveTo(UU, XU);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, tU(this, aU(this, zU = pU(this, UU, XU)), zU);
              break;
            default:
              tU(this, this._t0, zU = pU(this, UU, XU))
          }
          this._x0 = this._x1, this._x1 = UU, this._y0 = this._y1, this._y1 = XU, this._t0 = zU
        }
      }
    }, (kU.prototype = Object.create(gU.prototype)).point = function(UU, XU) {
      gU.prototype.point.call(this, XU, UU)
    }, GU.prototype = {
      moveTo: function(UU, XU) {
        this._context.moveTo(XU, UU)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(UU, XU) {
        this._context.lineTo(XU, UU)
      },
      bezierCurveTo: function(UU, XU, zU, cU, yU, QU) {
        this._context.bezierCurveTo(XU, UU, cU, zU, QU, yU)
      }
    }, BU.prototype = {
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
          XU = this._y,
          zU = UU.length;
        if (zU)
          if (this._line ? this._context.lineTo(UU[0], XU[0]) : this._context.moveTo(UU[0], XU[0]), 2 === zU) this._context.lineTo(UU[1], XU[1]);
          else
            for (var cU = ZU(UU), yU = ZU(XU), QU = 0, AU = 1; AU < zU; ++QU, ++AU) this._context.bezierCurveTo(cU[0][QU], yU[0][QU], cU[1][QU], yU[1][QU], UU[AU], XU[AU]);
        (this._line || 0 !== this._line && 1 === zU) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(UU, XU) {
        this._x.push(+UU), this._y.push(+XU)
      }
    }, RU.prototype = {
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
      point: function(UU, XU) {
        switch (UU = +UU, XU = +XU, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(UU, XU) : this._context.moveTo(UU, XU);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, XU), this._context.lineTo(UU, XU);
            else {
              var zU = this._x * (1 - this._t) + UU * this._t;
              this._context.lineTo(zU, this._y), this._context.lineTo(zU, XU)
            }
        }
        this._x = UU, this._y = XU
      }
    };
    var PU = zU(6813),
      WU = zU(6715),
      dU = zU(6717);

    function LU(UU) {
      return UU[0]
    }

    function eU(UU) {
      return UU[1]
    }

    function CU(UU, XU) {
      var zU = (0, WU.b)(!0),
        cU = null,
        yU = NU,
        QU = null,
        AU = (0, dU.b)(FU);

      function FU(FU) {
        var oU, DU, EU, YU = (FU = (0, PU.d)(FU)).length,
          NU = !1;
        for (null == cU && (QU = yU(EU = AU())), oU = 0; oU <= YU; ++oU) !(oU < YU && zU(DU = FU[oU], oU, FU)) === NU && ((NU = !NU) ? QU.lineStart() : QU.lineEnd()), NU && QU.point(+UU(DU, oU, FU), +XU(DU, oU, FU));
        if (EU) return QU = null, EU + "" || null
      }
      return UU = "function" === typeof UU ? UU : void 0 === UU ? LU : (0, WU.b)(UU), XU = "function" === typeof XU ? XU : void 0 === XU ? eU : (0, WU.b)(XU), FU.x = function(XU) {
        return arguments.length ? (UU = "function" === typeof XU ? XU : (0, WU.b)(+XU), FU) : UU
      }, FU.y = function(UU) {
        return arguments.length ? (XU = "function" === typeof UU ? UU : (0, WU.b)(+UU), FU) : XU
      }, FU.defined = function(UU) {
        return arguments.length ? (zU = "function" === typeof UU ? UU : (0, WU.b)(!!UU), FU) : zU
      }, FU.curve = function(UU) {
        return arguments.length ? (yU = UU, null != cU && (QU = yU(cU)), FU) : yU
      }, FU.context = function(UU) {
        return arguments.length ? (null == UU ? cU = QU = null : QU = yU(cU = UU), FU) : cU
      }, FU
    }

    function wU(UU, XU, zU) {
      var cU = null,
        yU = (0, WU.b)(!0),
        QU = null,
        AU = NU,
        FU = null,
        oU = (0, dU.b)(DU);

      function DU(DU) {
        var EU, YU, NU, IU, pU, aU = (DU = (0, PU.d)(DU)).length,
          tU = !1,
          gU = new Array(aU),
          kU = new Array(aU);
        for (null == QU && (FU = AU(pU = oU())), EU = 0; EU <= aU; ++EU) {
          if (!(EU < aU && yU(IU = DU[EU], EU, DU)) === tU)
            if (tU = !tU) YU = EU, FU.areaStart(), FU.lineStart();
            else {
              for (FU.lineEnd(), FU.lineStart(), NU = EU - 1; NU >= YU; --NU) FU.point(gU[NU], kU[NU]);
              FU.lineEnd(), FU.areaEnd()
            } tU && (gU[EU] = +UU(IU, EU, DU), kU[EU] = +XU(IU, EU, DU), FU.point(cU ? +cU(IU, EU, DU) : gU[EU], zU ? +zU(IU, EU, DU) : kU[EU]))
        }
        if (pU) return FU = null, pU + "" || null
      }

      function EU() {
        return CU().defined(yU).curve(AU).context(QU)
      }
      return UU = "function" === typeof UU ? UU : void 0 === UU ? LU : (0, WU.b)(+UU), XU = "function" === typeof XU ? XU : void 0 === XU ? (0, WU.b)(0) : (0, WU.b)(+XU), zU = "function" === typeof zU ? zU : void 0 === zU ? eU : (0, WU.b)(+zU), DU.x = function(XU) {
        return arguments.length ? (UU = "function" === typeof XU ? XU : (0, WU.b)(+XU), cU = null, DU) : UU
      }, DU.x0 = function(XU) {
        return arguments.length ? (UU = "function" === typeof XU ? XU : (0, WU.b)(+XU), DU) : UU
      }, DU.x1 = function(UU) {
        return arguments.length ? (cU = null == UU ? null : "function" === typeof UU ? UU : (0, WU.b)(+UU), DU) : cU
      }, DU.y = function(UU) {
        return arguments.length ? (XU = "function" === typeof UU ? UU : (0, WU.b)(+UU), zU = null, DU) : XU
      }, DU.y0 = function(UU) {
        return arguments.length ? (XU = "function" === typeof UU ? UU : (0, WU.b)(+UU), DU) : XU
      }, DU.y1 = function(UU) {
        return arguments.length ? (zU = null == UU ? null : "function" === typeof UU ? UU : (0, WU.b)(+UU), DU) : zU
      }, DU.lineX0 = DU.lineY0 = function() {
        return EU().x(UU).y(XU)
      }, DU.lineY1 = function() {
        return EU().x(UU).y(zU)
      }, DU.lineX1 = function() {
        return EU().x(cU).y(XU)
      }, DU.defined = function(UU) {
        return arguments.length ? (yU = "function" === typeof UU ? UU : (0, WU.b)(!!UU), DU) : yU
      }, DU.curve = function(UU) {
        return arguments.length ? (AU = UU, null != QU && (FU = AU(QU)), DU) : AU
      }, DU.context = function(UU) {
        return arguments.length ? (null == UU ? QU = FU = null : FU = AU(QU = UU), DU) : QU
      }, DU
    }
    var qU = zU(6679),
      OU = zU.n(qU),
      SU = zU(5845),
      rU = zU.n(SU),
      uU = zU(5657),
      fU = zU(6019),
      iU = zU(5998),
      HU = zU(5746);

    function MU(UU) {
      return MU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, MU(UU)
    }

    function vU() {
      return vU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, vU.apply(this, arguments)
    }

    function VU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function sU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? VU(Object(zU), !0).forEach((function(XU) {
          nU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : VU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function nU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != MU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != MU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == MU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }
    var mU = {
        curveBasisClosed: function(UU) {
          return new FU(UU)
        },
        curveBasisOpen: function(UU) {
          return new oU(UU)
        },
        curveBasis: function(UU) {
          return new AU(UU)
        },
        curveBumpX: function(UU) {
          return new DU(UU, !0)
        },
        curveBumpY: function(UU) {
          return new DU(UU, !1)
        },
        curveLinearClosed: function(UU) {
          return new EU(UU)
        },
        curveLinear: NU,
        curveMonotoneX: function(UU) {
          return new gU(UU)
        },
        curveMonotoneY: function(UU) {
          return new kU(UU)
        },
        curveNatural: function(UU) {
          return new BU(UU)
        },
        curveStep: function(UU) {
          return new RU(UU, .5)
        },
        curveStepAfter: function(UU) {
          return new RU(UU, 1)
        },
        curveStepBefore: function(UU) {
          return new RU(UU, 0)
        }
      },
      lU = function(UU) {
        return UU.x === +UU.x && UU.y === +UU.y
      },
      xU = function(UU) {
        return UU.x
      },
      JU = function(UU) {
        return UU.y
      },
      jU = function(UU) {
        var XU, zU = UU.type,
          cU = void 0 === zU ? "linear" : zU,
          yU = UU.points,
          QU = void 0 === yU ? [] : yU,
          AU = UU.baseLine,
          FU = UU.layout,
          oU = UU.connectNulls,
          DU = void 0 !== oU && oU,
          EU = function(UU, XU) {
            if (rU()(UU)) return UU;
            var zU = "curve".concat(OU()(UU));
            return "curveMonotone" !== zU && "curveBump" !== zU || !XU ? mU[zU] || NU : mU["".concat(zU).concat("vertical" === XU ? "Y" : "X")]
          }(cU, FU),
          YU = DU ? QU.filter((function(UU) {
            return lU(UU)
          })) : QU;
        if (Array.isArray(AU)) {
          var IU = DU ? AU.filter((function(UU) {
              return lU(UU)
            })) : AU,
            pU = YU.map((function(UU, XU) {
              return sU(sU({}, UU), {}, {
                base: IU[XU]
              })
            }));
          return (XU = "vertical" === FU ? wU().y(JU).x1(xU).x0((function(UU) {
            return UU.base.x
          })) : wU().x(xU).y1(JU).y0((function(UU) {
            return UU.base.y
          }))).defined(lU).curve(EU), XU(pU)
        }
        return (XU = "vertical" === FU && (0, HU.B)(AU) ? wU().y(JU).x1(xU).x0(AU) : (0, HU.B)(AU) ? wU().x(xU).y1(JU).y0(AU) : CU().x(xU).y(JU)).defined(lU).curve(EU), XU(YU)
      },
      KU = function(UU) {
        var XU = UU.className,
          zU = UU.points,
          yU = UU.path,
          QU = UU.pathRef;
        if ((!zU || !zU.length) && !yU) return null;
        var AU = zU && zU.length ? jU(UU) : yU;
        return cU.createElement("path", vU({}, (0, iU.c)(UU, !1), (0, fU.m)(UU), {
          className: (0, uU.c)("recharts-curve", XU),
          d: AU,
          ref: QU
        }))
      }
  },
  6719: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => oU
    });
    var cU = zU(61),
      yU = zU(5657),
      QU = zU(6019),
      AU = zU(5998);

    function FU() {
      return FU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, FU.apply(this, arguments)
    }
    var oU = function(UU) {
      var XU = UU.cx,
        zU = UU.cy,
        oU = UU.r,
        DU = UU.className,
        EU = (0, yU.c)("recharts-dot", DU);
      return XU === +XU && zU === +zU && oU === +oU ? cU.createElement("circle", FU({}, (0, AU.c)(UU, !1), (0, QU.m)(UU), {
        className: EU,
        cx: XU,
        cy: zU,
        r: oU
      })) : null
    }
  },
  6727: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => gU,
      d: () => aU
    });
    var cU = zU(61),
      yU = zU(5657),
      QU = zU(6729),
      AU = zU(5998);

    function FU(UU) {
      return FU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, FU(UU)
    }

    function oU() {
      return oU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, oU.apply(this, arguments)
    }

    function DU(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        var zU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != zU) {
          var cU, yU, QU, AU, FU = [],
            oU = !0,
            DU = !1;
          try {
            if (QU = (zU = zU.call(UU)).next, 0 === XU) {
              if (Object(zU) !== zU) return;
              oU = !1
            } else
              for (; !(oU = (cU = QU.call(zU)).done) && (FU.push(cU.value), FU.length !== XU); oU = !0);
          } catch (UU) {
            DU = !0, yU = UU
          } finally {
            try {
              if (!oU && null != zU.return && (AU = zU.return(), Object(AU) !== AU)) return
            } finally {
              if (DU) throw yU
            }
          }
          return FU
        }
      }(UU, XU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return EU(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return EU(UU, XU)
      }(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function EU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function YU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function NU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? YU(Object(zU), !0).forEach((function(XU) {
          IU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : YU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function IU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != FU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != FU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == FU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }
    var pU = function(UU, XU, zU, cU, yU) {
        var QU, AU = Math.min(Math.abs(zU) / 2, Math.abs(cU) / 2),
          FU = cU >= 0 ? 1 : -1,
          oU = zU >= 0 ? 1 : -1,
          DU = cU >= 0 && zU >= 0 || cU < 0 && zU < 0 ? 1 : 0;
        if (AU > 0 && yU instanceof Array) {
          for (var EU = [0, 0, 0, 0], YU = 0; YU < 4; YU++) EU[YU] = yU[YU] > AU ? AU : yU[YU];
          QU = "M".concat(UU, ",").concat(XU + FU * EU[0]), EU[0] > 0 && (QU += "A ".concat(EU[0], ",").concat(EU[0], ",0,0,").concat(DU, ",").concat(UU + oU * EU[0], ",").concat(XU)), QU += "L ".concat(UU + zU - oU * EU[1], ",").concat(XU), EU[1] > 0 && (QU += "A ".concat(EU[1], ",").concat(EU[1], ",0,0,").concat(DU, ",\n        ").concat(UU + zU, ",").concat(XU + FU * EU[1])), QU += "L ".concat(UU + zU, ",").concat(XU + cU - FU * EU[2]), EU[2] > 0 && (QU += "A ".concat(EU[2], ",").concat(EU[2], ",0,0,").concat(DU, ",\n        ").concat(UU + zU - oU * EU[2], ",").concat(XU + cU)), QU += "L ".concat(UU + oU * EU[3], ",").concat(XU + cU), EU[3] > 0 && (QU += "A ".concat(EU[3], ",").concat(EU[3], ",0,0,").concat(DU, ",\n        ").concat(UU, ",").concat(XU + cU - FU * EU[3])), QU += "Z"
        } else if (AU > 0 && yU === +yU && yU > 0) {
          var NU = Math.min(AU, yU);
          QU = "M ".concat(UU, ",").concat(XU + FU * NU, "\n            A ").concat(NU, ",").concat(NU, ",0,0,").concat(DU, ",").concat(UU + oU * NU, ",").concat(XU, "\n            L ").concat(UU + zU - oU * NU, ",").concat(XU, "\n            A ").concat(NU, ",").concat(NU, ",0,0,").concat(DU, ",").concat(UU + zU, ",").concat(XU + FU * NU, "\n            L ").concat(UU + zU, ",").concat(XU + cU - FU * NU, "\n            A ").concat(NU, ",").concat(NU, ",0,0,").concat(DU, ",").concat(UU + zU - oU * NU, ",").concat(XU + cU, "\n            L ").concat(UU + oU * NU, ",").concat(XU + cU, "\n            A ").concat(NU, ",").concat(NU, ",0,0,").concat(DU, ",").concat(UU, ",").concat(XU + cU - FU * NU, " Z")
        } else QU = "M ".concat(UU, ",").concat(XU, " h ").concat(zU, " v ").concat(cU, " h ").concat(-zU, " Z");
        return QU
      },
      aU = function(UU, XU) {
        if (!UU || !XU) return !1;
        var zU = UU.x,
          cU = UU.y,
          yU = XU.x,
          QU = XU.y,
          AU = XU.width,
          FU = XU.height;
        if (Math.abs(AU) > 0 && Math.abs(FU) > 0) {
          var oU = Math.min(yU, yU + AU),
            DU = Math.max(yU, yU + AU),
            EU = Math.min(QU, QU + FU),
            YU = Math.max(QU, QU + FU);
          return zU >= oU && zU <= DU && cU >= EU && cU <= YU
        }
        return !1
      },
      tU = {
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
      gU = function(UU) {
        var XU = NU(NU({}, tU), UU),
          zU = (0, cU.useRef)(),
          FU = DU((0, cU.useState)(-1), 2),
          EU = FU[0],
          YU = FU[1];
        (0, cU.useEffect)((function() {
          if (zU.current && zU.current.getTotalLength) try {
            var UU = zU.current.getTotalLength();
            UU && YU(UU)
          } catch (XU) {}
        }), []);
        var IU = XU.x,
          aU = XU.y,
          gU = XU.width,
          kU = XU.height,
          GU = XU.radius,
          BU = XU.className,
          ZU = XU.animationEasing,
          RU = XU.animationDuration,
          PU = XU.animationBegin,
          WU = XU.isAnimationActive,
          dU = XU.isUpdateAnimationActive;
        if (IU !== +IU || aU !== +aU || gU !== +gU || kU !== +kU || 0 === gU || 0 === kU) return null;
        var LU = (0, yU.c)("recharts-rectangle", BU);
        return dU ? cU.createElement(QU.e, {
          canBegin: EU > 0,
          from: {
            width: gU,
            height: kU,
            x: IU,
            y: aU
          },
          to: {
            width: gU,
            height: kU,
            x: IU,
            y: aU
          },
          duration: RU,
          animationEasing: ZU,
          isActive: dU
        }, (function(UU) {
          var yU = UU.width,
            FU = UU.height,
            DU = UU.x,
            YU = UU.y;
          return cU.createElement(QU.e, {
            canBegin: EU > 0,
            from: "0px ".concat(-1 === EU ? 1 : EU, "px"),
            to: "".concat(EU, "px 0px"),
            attributeName: "strokeDasharray",
            gY: PU,
            duration: RU,
            isActive: WU,
            easing: ZU
          }, cU.createElement("path", oU({}, (0, AU.c)(XU, !0), {
            className: LU,
            d: pU(DU, YU, yU, FU, GU),
            ref: zU
          })))
        })) : cU.createElement("path", oU({}, (0, AU.c)(XU, !0), {
          className: LU,
          d: pU(IU, aU, gU, kU, GU)
        }))
      }
  },
  6911: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => tU
    });
    var cU = zU(61),
      yU = zU(5657),
      QU = zU(5998),
      AU = zU(6822),
      FU = zU(5746);

    function oU(UU) {
      return oU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, oU(UU)
    }

    function DU() {
      return DU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, DU.apply(this, arguments)
    }

    function EU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function YU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? EU(Object(zU), !0).forEach((function(XU) {
          NU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : EU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function NU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != oU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != oU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == oU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }
    var IU = function(UU) {
        var XU = UU.cx,
          zU = UU.cy,
          cU = UU.radius,
          yU = UU.angle,
          QU = UU.sign,
          FU = UU.isExternal,
          oU = UU.cornerRadius,
          DU = UU.cornerIsExternal,
          EU = oU * (FU ? 1 : -1) + cU,
          YU = Math.asin(oU / EU) / AU.b,
          NU = DU ? yU : yU + QU * YU,
          IU = DU ? yU - QU * YU : yU;
        return {
          center: (0, AU.f)(XU, zU, EU, NU),
          circleTangency: (0, AU.f)(XU, zU, cU, NU),
          lineTangency: (0, AU.f)(XU, zU, EU * Math.cos(YU * AU.b), IU),
          QY: YU
        }
      },
      pU = function(UU) {
        var XU = UU.cx,
          zU = UU.cy,
          cU = UU.innerRadius,
          yU = UU.outerRadius,
          QU = UU.startAngle,
          oU = function(UU, XU) {
            return (0, FU.H)(XU - UU) * Math.min(Math.abs(XU - UU), 359.999)
          }(QU, UU.endAngle),
          DU = QU + oU,
          EU = (0, AU.f)(XU, zU, yU, QU),
          YU = (0, AU.f)(XU, zU, yU, DU),
          NU = "M ".concat(EU.x, ",").concat(EU.y, "\n    A ").concat(yU, ",").concat(yU, ",0,\n    ").concat(+(Math.abs(oU) > 180), ",").concat(+(QU > DU), ",\n    ").concat(YU.x, ",").concat(YU.y, "\n  ");
        if (cU > 0) {
          var IU = (0, AU.f)(XU, zU, cU, QU),
            pU = (0, AU.f)(XU, zU, cU, DU);
          NU += "L ".concat(pU.x, ",").concat(pU.y, "\n            A ").concat(cU, ",").concat(cU, ",0,\n            ").concat(+(Math.abs(oU) > 180), ",").concat(+(QU <= DU), ",\n            ").concat(IU.x, ",").concat(IU.y, " Z")
        } else NU += "L ".concat(XU, ",").concat(zU, " Z");
        return NU
      },
      aU = {
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
      tU = function(UU) {
        var XU = YU(YU({}, aU), UU),
          zU = XU.cx,
          AU = XU.cy,
          oU = XU.innerRadius,
          EU = XU.outerRadius,
          NU = XU.cornerRadius,
          tU = XU.forceCornerRadius,
          gU = XU.cornerIsExternal,
          kU = XU.startAngle,
          GU = XU.endAngle,
          BU = XU.className;
        if (EU < oU || kU === GU) return null;
        var ZU, RU = (0, yU.c)("recharts-sector", BU),
          PU = EU - oU,
          WU = (0, FU.q)(NU, PU, 0, !0);
        return ZU = WU > 0 && Math.abs(kU - GU) < 360 ? function(UU) {
          var XU = UU.cx,
            zU = UU.cy,
            cU = UU.innerRadius,
            yU = UU.outerRadius,
            QU = UU.cornerRadius,
            AU = UU.forceCornerRadius,
            oU = UU.cornerIsExternal,
            DU = UU.startAngle,
            EU = UU.endAngle,
            YU = (0, FU.H)(EU - DU),
            NU = IU({
              cx: XU,
              cy: zU,
              radius: yU,
              angle: DU,
              sign: YU,
              cornerRadius: QU,
              cornerIsExternal: oU
            }),
            aU = NU.circleTangency,
            tU = NU.lineTangency,
            gU = NU.QY,
            kU = IU({
              cx: XU,
              cy: zU,
              radius: yU,
              angle: EU,
              sign: -YU,
              cornerRadius: QU,
              cornerIsExternal: oU
            }),
            GU = kU.circleTangency,
            BU = kU.lineTangency,
            ZU = kU.QY,
            RU = oU ? Math.abs(DU - EU) : Math.abs(DU - EU) - gU - ZU;
          if (RU < 0) return AU ? "M ".concat(tU.x, ",").concat(tU.y, "\n        a").concat(QU, ",").concat(QU, ",0,0,1,").concat(2 * QU, ",0\n        a").concat(QU, ",").concat(QU, ",0,0,1,").concat(2 * -QU, ",0\n      ") : pU({
            cx: XU,
            cy: zU,
            innerRadius: cU,
            outerRadius: yU,
            startAngle: DU,
            endAngle: EU
          });
          var PU = "M ".concat(tU.x, ",").concat(tU.y, "\n    A").concat(QU, ",").concat(QU, ",0,0,").concat(+(YU < 0), ",").concat(aU.x, ",").concat(aU.y, "\n    A").concat(yU, ",").concat(yU, ",0,").concat(+(RU > 180), ",").concat(+(YU < 0), ",").concat(GU.x, ",").concat(GU.y, "\n    A").concat(QU, ",").concat(QU, ",0,0,").concat(+(YU < 0), ",").concat(BU.x, ",").concat(BU.y, "\n  ");
          if (cU > 0) {
            var WU = IU({
                cx: XU,
                cy: zU,
                radius: cU,
                angle: DU,
                sign: YU,
                isExternal: !0,
                cornerRadius: QU,
                cornerIsExternal: oU
              }),
              dU = WU.circleTangency,
              LU = WU.lineTangency,
              eU = WU.QY,
              CU = IU({
                cx: XU,
                cy: zU,
                radius: cU,
                angle: EU,
                sign: -YU,
                isExternal: !0,
                cornerRadius: QU,
                cornerIsExternal: oU
              }),
              wU = CU.circleTangency,
              qU = CU.lineTangency,
              OU = CU.QY,
              SU = oU ? Math.abs(DU - EU) : Math.abs(DU - EU) - eU - OU;
            if (SU < 0 && 0 === QU) return "".concat(PU, "L").concat(XU, ",").concat(zU, "Z");
            PU += "L".concat(qU.x, ",").concat(qU.y, "\n      A").concat(QU, ",").concat(QU, ",0,0,").concat(+(YU < 0), ",").concat(wU.x, ",").concat(wU.y, "\n      A").concat(cU, ",").concat(cU, ",0,").concat(+(SU > 180), ",").concat(+(YU > 0), ",").concat(dU.x, ",").concat(dU.y, "\n      A").concat(QU, ",").concat(QU, ",0,0,").concat(+(YU < 0), ",").concat(LU.x, ",").concat(LU.y, "Z")
          } else PU += "L".concat(XU, ",").concat(zU, "Z");
          return PU
        }({
          cx: zU,
          cy: AU,
          innerRadius: oU,
          outerRadius: EU,
          cornerRadius: Math.min(WU, PU / 2),
          forceCornerRadius: tU,
          cornerIsExternal: gU,
          startAngle: kU,
          endAngle: GU
        }) : pU({
          cx: zU,
          cy: AU,
          innerRadius: oU,
          outerRadius: EU,
          startAngle: kU,
          endAngle: GU
        }), cU.createElement("path", DU({}, (0, QU.c)(XU, !0), {
          className: RU,
          d: ZU,
          role: "img"
        }))
      }
  },
  6676: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => sU
    });
    var cU = zU(61),
      yU = zU(6679),
      QU = zU.n(yU);
    Math.abs, Math.atan2;
    const AU = Math.cos,
      FU = (Math.max, Math.min, Math.sin),
      oU = Math.sqrt,
      DU = Math.PI,
      EU = 2 * DU;
    const YU = {
        draw(UU, XU) {
          const zU = oU(XU / DU);
          UU.moveTo(zU, 0), UU.arc(0, 0, zU, 0, EU)
        }
      },
      NU = {
        draw(UU, XU) {
          const zU = oU(XU / 5) / 2;
          UU.moveTo(-3 * zU, -zU), UU.lineTo(-zU, -zU), UU.lineTo(-zU, -3 * zU), UU.lineTo(zU, -3 * zU), UU.lineTo(zU, -zU), UU.lineTo(3 * zU, -zU), UU.lineTo(3 * zU, zU), UU.lineTo(zU, zU), UU.lineTo(zU, 3 * zU), UU.lineTo(-zU, 3 * zU), UU.lineTo(-zU, zU), UU.lineTo(-3 * zU, zU), UU.closePath()
        }
      },
      IU = oU(1 / 3),
      pU = 2 * IU,
      aU = {
        draw(UU, XU) {
          const zU = oU(XU / pU),
            cU = zU * IU;
          UU.moveTo(0, -zU), UU.lineTo(cU, 0), UU.lineTo(0, zU), UU.lineTo(-cU, 0), UU.closePath()
        }
      },
      tU = {
        draw(UU, XU) {
          const zU = oU(XU),
            cU = -zU / 2;
          UU.rect(cU, cU, zU, zU)
        }
      },
      gU = FU(DU / 10) / FU(7 * DU / 10),
      kU = FU(EU / 10) * gU,
      GU = -AU(EU / 10) * gU,
      BU = {
        draw(UU, XU) {
          const zU = oU(.8908130915292852 * XU),
            cU = kU * zU,
            yU = GU * zU;
          UU.moveTo(0, -zU), UU.lineTo(cU, yU);
          for (let QU = 1; QU < 5; ++QU) {
            const XU = EU * QU / 5,
              oU = AU(XU),
              DU = FU(XU);
            UU.lineTo(DU * zU, -oU * zU), UU.lineTo(oU * cU - DU * yU, DU * cU + oU * yU)
          }
          UU.closePath()
        }
      },
      ZU = oU(3),
      RU = {
        draw(UU, XU) {
          const zU = -oU(XU / (3 * ZU));
          UU.moveTo(0, 2 * zU), UU.lineTo(-ZU * zU, -zU), UU.lineTo(ZU * zU, -zU), UU.closePath()
        }
      },
      PU = -.5,
      WU = oU(3) / 2,
      dU = 1 / oU(12),
      LU = 3 * (dU / 2 + 1),
      eU = {
        draw(UU, XU) {
          const zU = oU(XU / LU),
            cU = zU / 2,
            yU = zU * dU,
            QU = cU,
            AU = zU * dU + zU,
            FU = -QU,
            DU = AU;
          UU.moveTo(cU, yU), UU.lineTo(QU, AU), UU.lineTo(FU, DU), UU.lineTo(PU * cU - WU * yU, WU * cU + PU * yU), UU.lineTo(PU * QU - WU * AU, WU * QU + PU * AU), UU.lineTo(PU * FU - WU * DU, WU * FU + PU * DU), UU.lineTo(PU * cU + WU * yU, PU * yU - WU * cU), UU.lineTo(PU * QU + WU * AU, PU * AU - WU * QU), UU.lineTo(PU * FU + WU * DU, PU * DU - WU * FU), UU.closePath()
        }
      };
    var CU = zU(6715),
      wU = zU(6717);
    oU(3), oU(3);
    var qU = zU(5657),
      OU = zU(5998);

    function SU(UU) {
      return SU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, SU(UU)
    }
    var rU = ["type", "size", "sizeType"];

    function uU() {
      return uU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, uU.apply(this, arguments)
    }

    function fU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function iU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? fU(Object(zU), !0).forEach((function(XU) {
          HU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : fU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function HU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != SU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != SU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == SU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function MU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }
    var vU = {
        symbolCircle: YU,
        symbolCross: NU,
        symbolDiamond: aU,
        symbolSquare: tU,
        symbolStar: BU,
        symbolTriangle: RU,
        symbolWye: eU
      },
      VU = Math.PI / 180,
      sU = function(UU) {
        var XU = UU.type,
          zU = void 0 === XU ? "circle" : XU,
          yU = UU.size,
          AU = void 0 === yU ? 64 : yU,
          FU = UU.sizeType,
          oU = void 0 === FU ? "area" : FU,
          DU = iU(iU({}, MU(UU, rU)), {}, {
            type: zU,
            size: AU,
            sizeType: oU
          }),
          EU = DU.className,
          NU = DU.cx,
          IU = DU.cy,
          pU = (0, OU.c)(DU, !0);
        return NU === +NU && IU === +IU && AU === +AU ? cU.createElement("path", uU({}, pU, {
          className: (0, qU.c)("recharts-symbols", EU),
          transform: "translate(".concat(NU, ", ").concat(IU, ")"),
          d: function() {
            var UU = function(UU) {
                var XU = "symbol".concat(QU()(UU));
                return vU[XU] || YU
              }(zU),
              XU = function(UU, XU) {
                let zU = null,
                  cU = (0, wU.b)(yU);

                function yU() {
                  let yU;
                  if (zU || (zU = yU = cU()), UU.apply(this, arguments).draw(zU, +XU.apply(this, arguments)), yU) return zU = null, yU + "" || null
                }
                return UU = "function" === typeof UU ? UU : (0, CU.b)(UU || YU), XU = "function" === typeof XU ? XU : (0, CU.b)(void 0 === XU ? 64 : +XU), yU.type = function(XU) {
                  return arguments.length ? (UU = "function" === typeof XU ? XU : (0, CU.b)(XU), yU) : UU
                }, yU.size = function(UU) {
                  return arguments.length ? (XU = "function" === typeof UU ? UU : (0, CU.b)(+UU), yU) : XU
                }, yU.context = function(UU) {
                  return arguments.length ? (zU = null == UU ? null : UU, yU) : zU
                }, yU
              }().type(UU).size(function(UU, XU, zU) {
                if ("area" === XU) return UU;
                switch (zU) {
                  case "cross":
                    return 5 * UU * UU / 9;
                  case "diamond":
                    return .5 * UU * UU / Math.sqrt(3);
                  case "square":
                    return UU * UU;
                  case "star":
                    var cU = 18 * VU;
                    return 1.25 * UU * UU * (Math.tan(cU) - Math.tan(2 * cU) * Math.pow(Math.tan(cU), 2));
                  case "triangle":
                    return Math.sqrt(3) * UU * UU / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * UU * UU / 8;
                  default:
                    return Math.PI * UU * UU / 4
                }
              }(AU, oU, zU));
            return XU()
          }()
        })) : null
      };
    sU.registerSymbol = function(UU, XU) {
      vU["symbol".concat(QU()(UU))] = XU
    }
  },
  6892: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => HU,
      g: () => lU,
      j: () => MU,
      n: () => vU,
      p: () => VU
    });
    var cU = zU(61),
      yU = zU(5845),
      QU = zU.n(yU),
      AU = zU(6896),
      FU = zU.n(AU),
      oU = zU(6905),
      DU = zU.n(oU),
      EU = zU(6797),
      YU = zU.n(EU),
      NU = zU(6727),
      IU = zU(5657),
      pU = zU(6729),
      aU = zU(5998);

    function tU(UU) {
      return tU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, tU(UU)
    }

    function gU() {
      return gU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU) Object.prototype.hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, gU.apply(this, arguments)
    }

    function kU(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        var zU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != zU) {
          var cU, yU, QU, AU, FU = [],
            oU = !0,
            DU = !1;
          try {
            if (QU = (zU = zU.call(UU)).next, 0 === XU) {
              if (Object(zU) !== zU) return;
              oU = !1
            } else
              for (; !(oU = (cU = QU.call(zU)).done) && (FU.push(cU.value), FU.length !== XU); oU = !0);
          } catch (UU) {
            DU = !0, yU = UU
          } finally {
            try {
              if (!oU && null != zU.return && (AU = zU.return(), Object(AU) !== AU)) return
            } finally {
              if (DU) throw yU
            }
          }
          return FU
        }
      }(UU, XU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return GU(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return GU(UU, XU)
      }(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function GU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function BU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function ZU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? BU(Object(zU), !0).forEach((function(XU) {
          RU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : BU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function RU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != tU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != tU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == tU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }
    var PU = function(UU, XU, zU, cU, yU) {
        var QU, AU = zU - cU;
        return QU = "M ".concat(UU, ",").concat(XU), QU += "L ".concat(UU + zU, ",").concat(XU), QU += "L ".concat(UU + zU - AU / 2, ",").concat(XU + yU), QU += "L ".concat(UU + zU - AU / 2 - cU, ",").concat(XU + yU), QU += "L ".concat(UU, ",").concat(XU, " Z")
      },
      WU = {
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
      dU = function(UU) {
        var XU = ZU(ZU({}, WU), UU),
          zU = (0, cU.useRef)(),
          yU = kU((0, cU.useState)(-1), 2),
          QU = yU[0],
          AU = yU[1];
        (0, cU.useEffect)((function() {
          if (zU.current && zU.current.getTotalLength) try {
            var UU = zU.current.getTotalLength();
            UU && AU(UU)
          } catch (XU) {}
        }), []);
        var FU = XU.x,
          oU = XU.y,
          DU = XU.upperWidth,
          EU = XU.lowerWidth,
          YU = XU.height,
          NU = XU.className,
          tU = XU.animationEasing,
          GU = XU.animationDuration,
          BU = XU.animationBegin,
          RU = XU.isUpdateAnimationActive;
        if (FU !== +FU || oU !== +oU || DU !== +DU || EU !== +EU || YU !== +YU || 0 === DU && 0 === EU || 0 === YU) return null;
        var dU = (0, IU.c)("recharts-trapezoid", NU);
        return RU ? cU.createElement(pU.e, {
          canBegin: QU > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: YU,
            x: FU,
            y: oU
          },
          to: {
            upperWidth: DU,
            lowerWidth: EU,
            height: YU,
            x: FU,
            y: oU
          },
          duration: GU,
          animationEasing: tU,
          isActive: RU
        }, (function(UU) {
          var yU = UU.upperWidth,
            AU = UU.lowerWidth,
            FU = UU.height,
            oU = UU.x,
            DU = UU.y;
          return cU.createElement(pU.e, {
            canBegin: QU > 0,
            from: "0px ".concat(-1 === QU ? 1 : QU, "px"),
            to: "".concat(QU, "px 0px"),
            attributeName: "strokeDasharray",
            gY: BU,
            duration: GU,
            easing: tU
          }, cU.createElement("path", gU({}, (0, aU.c)(XU, !0), {
            className: dU,
            d: PU(oU, DU, yU, AU, FU),
            ref: zU
          })))
        })) : cU.createElement("g", null, cU.createElement("path", gU({}, (0, aU.c)(XU, !0), {
          className: dU,
          d: PU(FU, oU, DU, EU, YU)
        })))
      },
      LU = zU(6911),
      eU = zU(6576),
      CU = zU(6676),
      wU = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function qU(UU) {
      return qU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, qU(UU)
    }

    function OU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function SU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function rU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? SU(Object(zU), !0).forEach((function(XU) {
          uU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : SU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function uU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != qU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != qU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == qU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function fU(UU, XU) {
      return rU(rU({}, XU), UU)
    }

    function iU(UU) {
      var XU = UU.shapeType,
        zU = UU.elementProps;
      switch (XU) {
        case "rectangle":
          return cU.createElement(NU.b, zU);
        case "trapezoid":
          return cU.createElement(dU, zU);
        case "sector":
          return cU.createElement(LU.e, zU);
        case "symbols":
          if (function(UU) {
              return "symbols" === UU
            }(XU)) return cU.createElement(CU.c, zU);
          break;
        default:
          return null
      }
    }

    function HU(UU) {
      var XU, zU = UU.option,
        yU = UU.shapeType,
        AU = UU.propTransformer,
        oU = void 0 === AU ? fU : AU,
        EU = UU.activeClassName,
        YU = void 0 === EU ? "recharts-active-shape" : EU,
        NU = UU.isActive,
        IU = OU(UU, wU);
      if ((0, cU.isValidElement)(zU)) XU = (0, cU.cloneElement)(zU, rU(rU({}, IU), function(UU) {
        return (0, cU.isValidElement)(UU) ? UU.props : UU
      }(zU)));
      else if (QU()(zU)) XU = zU(IU);
      else if (FU()(zU) && !DU()(zU)) {
        var pU = oU(zU, IU);
        XU = cU.createElement(iU, {
          shapeType: yU,
          elementProps: pU
        })
      } else {
        var aU = IU;
        XU = cU.createElement(iU, {
          shapeType: yU,
          elementProps: aU
        })
      }
      return NU ? cU.createElement(eU.e, {
        className: YU
      }, XU) : XU
    }

    function MU(UU, XU) {
      return null != XU && "trapezoids" in UU.props
    }

    function vU(UU, XU) {
      return null != XU && "sectors" in UU.props
    }

    function VU(UU, XU) {
      return null != XU && "points" in UU.props
    }

    function sU(UU, XU) {
      var zU, cU, yU = UU.x === (null === XU || void 0 === XU || null === (zU = XU.labelViewBox) || void 0 === zU ? void 0 : zU.x) || UU.x === XU.x,
        QU = UU.y === (null === XU || void 0 === XU || null === (cU = XU.labelViewBox) || void 0 === cU ? void 0 : cU.y) || UU.y === XU.y;
      return yU && QU
    }

    function nU(UU, XU) {
      var zU = UU.endAngle === XU.endAngle,
        cU = UU.startAngle === XU.startAngle;
      return zU && cU
    }

    function mU(UU, XU) {
      var zU = UU.x === XU.x,
        cU = UU.y === XU.y,
        yU = UU.z === XU.z;
      return zU && cU && yU
    }

    function lU(UU) {
      var XU = UU.activeTooltipItem,
        zU = UU.graphicalItem,
        cU = UU.itemData,
        yU = function(UU, XU) {
          var zU;
          return MU(UU, XU) ? zU = "trapezoids" : vU(UU, XU) ? zU = "sectors" : VU(UU, XU) && (zU = "points"), zU
        }(zU, XU),
        QU = function(UU, XU) {
          var zU, cU;
          return MU(UU, XU) ? null === (zU = XU.tooltipPayload) || void 0 === zU || null === (zU = zU[0]) || void 0 === zU || null === (zU = zU.payload) || void 0 === zU ? void 0 : zU.payload : vU(UU, XU) ? null === (cU = XU.tooltipPayload) || void 0 === cU || null === (cU = cU[0]) || void 0 === cU || null === (cU = cU.payload) || void 0 === cU ? void 0 : cU.payload : VU(UU, XU) ? XU.payload : {}
        }(zU, XU),
        AU = cU.filter((function(UU, cU) {
          var AU = YU()(QU, UU),
            FU = zU.props[yU].filter((function(UU) {
              var cU = function(UU, XU) {
                var zU;
                return MU(UU, XU) ? zU = sU : vU(UU, XU) ? zU = nU : VU(UU, XU) && (zU = mU), zU
              }(zU, XU);
              return cU(UU, XU)
            })),
            oU = zU.props[yU].indexOf(FU[FU.length - 1]);
          return AU && cU === oU
        }));
      return cU.indexOf(AU[AU.length - 1])
    }
  },
  6833: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => ZU,
      d: () => gU,
      f: () => RU,
      h: () => GU,
      i: () => kU
    });
    var cU = zU(6836),
      yU = zU.n(cU),
      QU = zU(6844),
      AU = zU.n(QU),
      FU = zU(6752),
      oU = zU(5998),
      DU = zU(5746),
      EU = zU(6864);

    function YU(UU) {
      return YU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, YU(UU)
    }

    function NU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, tU(cU.key), cU)
      }
    }

    function IU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function pU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? IU(Object(zU), !0).forEach((function(XU) {
          aU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : IU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function aU(UU, XU, zU) {
      return (XU = tU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function tU(UU) {
      var XU = function(UU, XU) {
        if ("object" != YU(UU) || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != YU(cU)) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == YU(XU) ? XU : XU + ""
    }
    var gU = function(UU, XU, zU, cU, yU) {
        var QU = UU.width,
          AU = UU.height,
          YU = UU.layout,
          NU = UU.children,
          IU = Object.keys(XU),
          tU = {
            left: zU.left,
            leftMirror: zU.left,
            right: QU - zU.right,
            rightMirror: QU - zU.right,
            top: zU.top,
            topMirror: zU.top,
            bottom: AU - zU.bottom,
            bottomMirror: AU - zU.bottom
          },
          gU = !!(0, oU.e)(NU, EU.e);
        return IU.reduce((function(QU, AU) {
          var oU, EU, NU, IU, kU, GU = XU[AU],
            BU = GU.orientation,
            ZU = GU.domain,
            RU = GU.padding,
            PU = void 0 === RU ? {} : RU,
            WU = GU.mirror,
            dU = GU.reversed,
            LU = "".concat(BU).concat(WU ? "Mirror" : "");
          if ("number" === GU.type && ("gap" === GU.padding || "no-gap" === GU.padding)) {
            var eU = ZU[1] - ZU[0],
              CU = 1 / 0,
              wU = GU.categoricalDomain.sort(DU.c);
            if (wU.forEach((function(UU, XU) {
                XU > 0 && (CU = Math.min((UU || 0) - (wU[XU - 1] || 0), CU))
              })), Number.isFinite(CU)) {
              var qU = CU / eU,
                OU = "vertical" === GU.layout ? zU.height : zU.width;
              if ("gap" === GU.padding && (oU = qU * OU / 2), "no-gap" === GU.padding) {
                var SU = (0, DU.q)(UU.barCategoryGap, qU * OU),
                  rU = qU * OU / 2;
                oU = rU - SU - (rU - SU) / OU * SU
              }
            }
          }
          EU = "xAxis" === cU ? [zU.left + (PU.left || 0) + (oU || 0), zU.left + zU.width - (PU.right || 0) - (oU || 0)] : "yAxis" === cU ? "horizontal" === YU ? [zU.top + zU.height - (PU.bottom || 0), zU.top + (PU.top || 0)] : [zU.top + (PU.top || 0) + (oU || 0), zU.top + zU.height - (PU.bottom || 0) - (oU || 0)] : GU.range, dU && (EU = [EU[1], EU[0]]);
          var uU = (0, FU.kb)(GU, yU, gU),
            fU = uU.scale,
            iU = uU.realScaleType;
          fU.domain(ZU).range(EU), (0, FU.e)(fU);
          var HU = (0, FU.ab)(fU, pU(pU({}, GU), {}, {
            realScaleType: iU
          }));
          "xAxis" === cU ? (kU = "top" === BU && !WU || "bottom" === BU && WU, NU = zU.left, IU = tU[LU] - kU * GU.height) : "yAxis" === cU && (kU = "left" === BU && !WU || "right" === BU && WU, NU = tU[LU] - kU * GU.width, IU = zU.top);
          var MU = pU(pU(pU({}, GU), HU), {}, {
            realScaleType: iU,
            x: NU,
            y: IU,
            scale: fU,
            width: "xAxis" === cU ? zU.width : GU.width,
            height: "yAxis" === cU ? zU.height : GU.height
          });
          return MU.bandSize = (0, FU.n)(MU, HU), GU.hide || "xAxis" !== cU ? GU.hide || (tU[LU] += (kU ? -1 : 1) * MU.width) : tU[LU] += (kU ? -1 : 1) * MU.height, pU(pU({}, QU), {}, aU({}, AU, MU))
        }), {})
      },
      kU = function(UU, XU) {
        var zU = UU.x,
          cU = UU.y,
          yU = XU.x,
          QU = XU.y;
        return {
          x: Math.min(zU, yU),
          y: Math.min(cU, QU),
          width: Math.abs(yU - zU),
          height: Math.abs(QU - cU)
        }
      },
      GU = function(UU) {
        var XU = UU.x1,
          zU = UU.y1,
          cU = UU.x2,
          yU = UU.y2;
        return kU({
          x: XU,
          y: zU
        }, {
          x: cU,
          y: yU
        })
      },
      BU = function() {
        function UU(XU) {
          ! function(UU, XU) {
            if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
          }(this, UU), this.scale = XU
        }
        return XU = UU, zU = [{
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
            var XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              zU = XU.bandAware,
              cU = XU.position;
            if (void 0 !== UU) {
              if (cU) switch (cU) {
                case "start":
                default:
                  return this.scale(UU);
                case "middle":
                  var yU = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(UU) + yU;
                case "end":
                  var QU = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(UU) + QU
              }
              if (zU) {
                var AU = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(UU) + AU
              }
              return this.scale(UU)
            }
          }
        }, {
          key: "isInRange",
          value: function(UU) {
            var XU = this.range(),
              zU = XU[0],
              cU = XU[XU.length - 1];
            return zU <= cU ? UU >= zU && UU <= cU : UU >= cU && UU <= zU
          }
        }], cU = [{
          key: "create",
          value: function(XU) {
            return new UU(XU)
          }
        }], zU && NU(XU.prototype, zU), cU && NU(XU, cU), Object.defineProperty(XU, "prototype", {
          writable: !1
        }), XU;
        var XU, zU, cU
      }();
    aU(BU, "EPS", 1e-4);
    var ZU = function(UU) {
      var XU = Object.keys(UU).reduce((function(XU, zU) {
        return pU(pU({}, XU), {}, aU({}, zU, BU.create(UU[zU])))
      }), {});
      return pU(pU({}, XU), {}, {
        apply: function(UU) {
          var zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            cU = zU.bandAware,
            QU = zU.position;
          return yU()(UU, (function(UU, zU) {
            return XU[zU].apply(UU, {
              bandAware: cU,
              position: QU
            })
          }))
        },
        isInRange: function(UU) {
          return AU()(UU, (function(UU, zU) {
            return XU[zU].isInRange(UU)
          }))
        }
      })
    };
    var RU = function(UU) {
      var XU = UU.width,
        zU = UU.height,
        cU = function(UU) {
          return (UU % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        yU = cU * Math.PI / 180,
        QU = Math.atan(zU / XU),
        AU = yU > QU && yU < Math.PI - QU ? zU / Math.sin(yU) : XU / Math.cos(yU);
      return Math.abs(AU)
    }
  },
  6752: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => OA,
      d: () => eA,
      e: () => nA,
      i: () => vA,
      k: () => mA,
      n: () => QF,
      p: () => qA,
      s: () => wA,
      w: () => hA,
      y: () => TA,
      C: () => bA,
      G: () => iA,
      I: () => LA,
      L: () => uA,
      P: () => XF,
      T: () => CA,
      V: () => jA,
      Y: () => UF,
      $: () => HA,
      ab: () => KA,
      bb: () => FF,
      db: () => dA,
      eb: () => fA,
      fb: () => AF,
      jb: () => rA,
      kb: () => VA,
      ob: () => yF,
      pb: () => lA
    });
    var cU = {};
    zU.r(cU), zU.d(cU, {
      scaleBand: () => yU.e,
      scaleDiverging: () => oQ,
      scaleDivergingLog: () => DQ,
      scaleDivergingPow: () => YQ,
      scaleDivergingSqrt: () => NQ,
      scaleDivergingSymlog: () => EQ,
      scaleIdentity: () => jX,
      scaleImplicit: () => Dz.g,
      scaleLinear: () => JX,
      scaleLog: () => yz,
      scaleOrdinal: () => Dz.e,
      scalePoint: () => yU.h,
      scalePow: () => pz,
      scaleQuantile: () => Lz,
      scaleQuantize: () => ez,
      scaleRadial: () => gz,
      scaleSequential: () => XQ,
      scaleSequentialLog: () => zQ,
      scaleSequentialPow: () => yQ,
      scaleSequentialQuantile: () => AQ,
      scaleSequentialSqrt: () => QQ,
      scaleSequentialSymlog: () => cQ,
      scaleSqrt: () => az,
      scaleSymlog: () => oz,
      scaleThreshold: () => Cz,
      scaleTime: () => by,
      scaleUtc: () => Ty,
      tickFormat: () => lX
    });
    var yU = zU(6754);
    const QU = Math.sqrt(50),
      AU = Math.sqrt(10),
      FU = Math.sqrt(2);

    function oU(UU, XU, zU) {
      const cU = (XU - UU) / Math.max(0, zU),
        yU = Math.floor(Math.log10(cU)),
        DU = cU / Math.pow(10, yU),
        EU = DU >= QU ? 10 : DU >= AU ? 5 : DU >= FU ? 2 : 1;
      let YU, NU, IU;
      return yU < 0 ? (IU = Math.pow(10, -yU) / EU, YU = Math.round(UU * IU), NU = Math.round(XU * IU), YU / IU < UU && ++YU, NU / IU > XU && --NU, IU = -IU) : (IU = Math.pow(10, yU) * EU, YU = Math.round(UU / IU), NU = Math.round(XU / IU), YU * IU < UU && ++YU, NU * IU > XU && --NU), NU < YU && .5 <= zU && zU < 2 ? oU(UU, XU, 2 * zU) : [YU, NU, IU]
    }

    function DU(UU, XU, zU) {
      if (!((zU = +zU) > 0)) return [];
      if ((UU = +UU) === (XU = +XU)) return [UU];
      const cU = XU < UU,
        [yU, QU, AU] = cU ? oU(XU, UU, zU) : oU(UU, XU, zU);
      if (!(QU >= yU)) return [];
      const FU = QU - yU + 1,
        DU = new Array(FU);
      if (cU)
        if (AU < 0)
          for (let oU = 0; oU < FU; ++oU) DU[oU] = (QU - oU) / -AU;
        else
          for (let oU = 0; oU < FU; ++oU) DU[oU] = (QU - oU) * AU;
      else if (AU < 0)
        for (let oU = 0; oU < FU; ++oU) DU[oU] = (yU + oU) / -AU;
      else
        for (let oU = 0; oU < FU; ++oU) DU[oU] = (yU + oU) * AU;
      return DU
    }

    function EU(UU, XU, zU) {
      return oU(UU = +UU, XU = +XU, zU = +zU)[2]
    }

    function YU(UU, XU, zU) {
      zU = +zU;
      const cU = (XU = +XU) < (UU = +UU),
        yU = cU ? EU(XU, UU, zU) : EU(UU, XU, zU);
      return (cU ? -1 : 1) * (yU < 0 ? 1 / -yU : yU)
    }

    function NU(UU, XU) {
      return null == UU || null == XU ? NaN : UU < XU ? -1 : UU > XU ? 1 : UU >= XU ? 0 : NaN
    }

    function IU(UU, XU) {
      return null == UU || null == XU ? NaN : XU < UU ? -1 : XU > UU ? 1 : XU >= UU ? 0 : NaN
    }

    function pU(UU) {
      let XU, zU, cU;

      function yU(UU, cU) {
        let yU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.length;
        if (yU < QU) {
          if (0 !== XU(cU, cU)) return QU;
          do {
            const XU = yU + QU >>> 1;
            zU(UU[XU], cU) < 0 ? yU = XU + 1 : QU = XU
          } while (yU < QU)
        }
        return yU
      }
      return 2 !== UU.length ? (XU = NU, zU = (XU, zU) => NU(UU(XU), zU), cU = (XU, zU) => UU(XU) - zU) : (XU = UU === NU || UU === IU ? UU : aU, zU = UU, cU = UU), {
        left: yU,
        center: function(UU, XU) {
          let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const QU = yU(UU, XU, zU, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.length) - 1);
          return QU > zU && cU(UU[QU - 1], XU) > -cU(UU[QU], XU) ? QU - 1 : QU
        },
        right: function(UU, cU) {
          let yU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            QU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.length;
          if (yU < QU) {
            if (0 !== XU(cU, cU)) return QU;
            do {
              const XU = yU + QU >>> 1;
              zU(UU[XU], cU) <= 0 ? yU = XU + 1 : QU = XU
            } while (yU < QU)
          }
          return yU
        }
      }
    }

    function aU() {
      return 0
    }

    function tU(UU) {
      return null === UU ? NaN : +UU
    }
    const gU = pU(NU),
      kU = gU.right,
      GU = (gU.left, pU(tU).center, kU);

    function BU(UU, XU, zU) {
      UU.prototype = XU.prototype = zU, zU.constructor = UU
    }

    function ZU(UU, XU) {
      var zU = Object.create(UU.prototype);
      for (var cU in XU) zU[cU] = XU[cU];
      return zU
    }

    function RU() {}
    var PU = .7,
      WU = 1 / PU,
      dU = "\\s*([+-]?\\d+)\\s*",
      LU = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      eU = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      CU = /^#([0-9a-f]{3,8})$/,
      wU = new RegExp(`^rgb\\(${dU},${dU},${dU}\\)$`),
      qU = new RegExp(`^rgb\\(${eU},${eU},${eU}\\)$`),
      OU = new RegExp(`^rgba\\(${dU},${dU},${dU},${LU}\\)$`),
      SU = new RegExp(`^rgba\\(${eU},${eU},${eU},${LU}\\)$`),
      rU = new RegExp(`^hsl\\(${LU},${eU},${eU}\\)$`),
      uU = new RegExp(`^hsla\\(${LU},${eU},${eU},${LU}\\)$`),
      fU = {
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

    function iU() {
      return this.rgb().formatHex()
    }

    function HU() {
      return this.rgb().formatRgb()
    }

    function MU(UU) {
      var XU, zU;
      return UU = (UU + "").trim().toLowerCase(), (XU = CU.exec(UU)) ? (zU = XU[1].length, XU = parseInt(XU[1], 16), 6 === zU ? vU(XU) : 3 === zU ? new nU(XU >> 8 & 15 | XU >> 4 & 240, XU >> 4 & 15 | 240 & XU, (15 & XU) << 4 | 15 & XU, 1) : 8 === zU ? VU(XU >> 24 & 255, XU >> 16 & 255, XU >> 8 & 255, (255 & XU) / 255) : 4 === zU ? VU(XU >> 12 & 15 | XU >> 8 & 240, XU >> 8 & 15 | XU >> 4 & 240, XU >> 4 & 15 | 240 & XU, ((15 & XU) << 4 | 15 & XU) / 255) : null) : (XU = wU.exec(UU)) ? new nU(XU[1], XU[2], XU[3], 1) : (XU = qU.exec(UU)) ? new nU(255 * XU[1] / 100, 255 * XU[2] / 100, 255 * XU[3] / 100, 1) : (XU = OU.exec(UU)) ? VU(XU[1], XU[2], XU[3], XU[4]) : (XU = SU.exec(UU)) ? VU(255 * XU[1] / 100, 255 * XU[2] / 100, 255 * XU[3] / 100, XU[4]) : (XU = rU.exec(UU)) ? KU(XU[1], XU[2] / 100, XU[3] / 100, 1) : (XU = uU.exec(UU)) ? KU(XU[1], XU[2] / 100, XU[3] / 100, XU[4]) : fU.hasOwnProperty(UU) ? vU(fU[UU]) : "transparent" === UU ? new nU(NaN, NaN, NaN, 0) : null
    }

    function vU(UU) {
      return new nU(UU >> 16 & 255, UU >> 8 & 255, 255 & UU, 1)
    }

    function VU(UU, XU, zU, cU) {
      return cU <= 0 && (UU = XU = zU = NaN), new nU(UU, XU, zU, cU)
    }

    function sU(UU, XU, zU, cU) {
      return 1 === arguments.length ? ((yU = UU) instanceof RU || (yU = MU(yU)), yU ? new nU((yU = yU.rgb()).r, yU.g, yU.b, yU.opacity) : new nU) : new nU(UU, XU, zU, null == cU ? 1 : cU);
      var yU
    }

    function nU(UU, XU, zU, cU) {
      this.r = +UU, this.g = +XU, this.b = +zU, this.opacity = +cU
    }

    function mU() {
      return `#${jU(this.r)}${jU(this.g)}${jU(this.b)}`
    }

    function lU() {
      const UU = xU(this.opacity);
      return `${1===UU?"rgb(":"rgba("}${JU(this.r)}, ${JU(this.g)}, ${JU(this.b)}${1===UU?")":`, ${UU})`}`
    }

    function xU(UU) {
      return isNaN(UU) ? 1 : Math.max(0, Math.min(1, UU))
    }

    function JU(UU) {
      return Math.max(0, Math.min(255, Math.round(UU) || 0))
    }

    function jU(UU) {
      return ((UU = JU(UU)) < 16 ? "0" : "") + UU.toString(16)
    }

    function KU(UU, XU, zU, cU) {
      return cU <= 0 ? UU = XU = zU = NaN : zU <= 0 || zU >= 1 ? UU = XU = NaN : XU <= 0 && (UU = NaN), new TU(UU, XU, zU, cU)
    }

    function bU(UU) {
      if (UU instanceof TU) return new TU(UU.h, UU.s, UU.l, UU.opacity);
      if (UU instanceof RU || (UU = MU(UU)), !UU) return new TU;
      if (UU instanceof TU) return UU;
      var XU = (UU = UU.rgb()).r / 255,
        zU = UU.g / 255,
        cU = UU.b / 255,
        yU = Math.min(XU, zU, cU),
        QU = Math.max(XU, zU, cU),
        AU = NaN,
        FU = QU - yU,
        oU = (QU + yU) / 2;
      return FU ? (AU = XU === QU ? (zU - cU) / FU + 6 * (zU < cU) : zU === QU ? (cU - XU) / FU + 2 : (XU - zU) / FU + 4, FU /= oU < .5 ? QU + yU : 2 - QU - yU, AU *= 60) : FU = oU > 0 && oU < 1 ? 0 : AU, new TU(AU, FU, oU, UU.opacity)
    }

    function TU(UU, XU, zU, cU) {
      this.h = +UU, this.s = +XU, this.l = +zU, this.opacity = +cU
    }

    function hU(UU) {
      return (UU = (UU || 0) % 360) < 0 ? UU + 360 : UU
    }

    function UX(UU) {
      return Math.max(0, Math.min(1, UU || 0))
    }

    function XX(UU, XU, zU) {
      return 255 * (UU < 60 ? XU + (zU - XU) * UU / 60 : UU < 180 ? zU : UU < 240 ? XU + (zU - XU) * (240 - UU) / 60 : XU)
    }

    function zX(UU, XU, zU, cU, yU) {
      var QU = UU * UU,
        AU = QU * UU;
      return ((1 - 3 * UU + 3 * QU - AU) * XU + (4 - 6 * QU + 3 * AU) * zU + (1 + 3 * UU + 3 * QU - 3 * AU) * cU + AU * yU) / 6
    }
    BU(RU, MU, {
      copy(UU) {
        return Object.assign(new this.constructor, this, UU)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: iU,
      formatHex: iU,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return bU(this).formatHsl()
      },
      formatRgb: HU,
      toString: HU
    }), BU(nU, sU, ZU(RU, {
      brighter(UU) {
        return UU = null == UU ? WU : Math.pow(WU, UU), new nU(this.r * UU, this.g * UU, this.b * UU, this.opacity)
      },
      darker(UU) {
        return UU = null == UU ? PU : Math.pow(PU, UU), new nU(this.r * UU, this.g * UU, this.b * UU, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new nU(JU(this.r), JU(this.g), JU(this.b), xU(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: mU,
      formatHex: mU,
      formatHex8: function() {
        return `#${jU(this.r)}${jU(this.g)}${jU(this.b)}${jU(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: lU,
      toString: lU
    })), BU(TU, (function(UU, XU, zU, cU) {
      return 1 === arguments.length ? bU(UU) : new TU(UU, XU, zU, null == cU ? 1 : cU)
    }), ZU(RU, {
      brighter(UU) {
        return UU = null == UU ? WU : Math.pow(WU, UU), new TU(this.h, this.s, this.l * UU, this.opacity)
      },
      darker(UU) {
        return UU = null == UU ? PU : Math.pow(PU, UU), new TU(this.h, this.s, this.l * UU, this.opacity)
      },
      rgb() {
        var UU = this.h % 360 + 360 * (this.h < 0),
          XU = isNaN(UU) || isNaN(this.s) ? 0 : this.s,
          zU = this.l,
          cU = zU + (zU < .5 ? zU : 1 - zU) * XU,
          yU = 2 * zU - cU;
        return new nU(XX(UU >= 240 ? UU - 240 : UU + 120, yU, cU), XX(UU, yU, cU), XX(UU < 120 ? UU + 240 : UU - 120, yU, cU), this.opacity)
      },
      clamp() {
        return new TU(hU(this.h), UX(this.s), UX(this.l), xU(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const UU = xU(this.opacity);
        return `${1===UU?"hsl(":"hsla("}${hU(this.h)}, ${100*UX(this.s)}%, ${100*UX(this.l)}%${1===UU?")":`, ${UU})`}`
      }
    }));
    const cX = UU => () => UU;

    function yX(UU, XU) {
      return function(zU) {
        return UU + zU * XU
      }
    }

    function QX(UU) {
      return 1 === (UU = +UU) ? AX : function(XU, zU) {
        return zU - XU ? function(UU, XU, zU) {
          return UU = Math.pow(UU, zU), XU = Math.pow(XU, zU) - UU, zU = 1 / zU,
            function(cU) {
              return Math.pow(UU + cU * XU, zU)
            }
        }(XU, zU, UU) : cX(isNaN(XU) ? zU : XU)
      }
    }

    function AX(UU, XU) {
      var zU = XU - UU;
      return zU ? yX(UU, zU) : cX(isNaN(UU) ? XU : UU)
    }
    const FX = function UU(XU) {
      var zU = QX(XU);

      function cU(UU, XU) {
        var cU = zU((UU = sU(UU)).r, (XU = sU(XU)).r),
          yU = zU(UU.g, XU.g),
          QU = zU(UU.b, XU.b),
          AU = AX(UU.opacity, XU.opacity);
        return function(XU) {
          return UU.r = cU(XU), UU.g = yU(XU), UU.b = QU(XU), UU.opacity = AU(XU), UU + ""
        }
      }
      return cU.gamma = UU, cU
    }(1);

    function oX(UU) {
      return function(XU) {
        var zU, cU, yU = XU.length,
          QU = new Array(yU),
          AU = new Array(yU),
          FU = new Array(yU);
        for (zU = 0; zU < yU; ++zU) cU = sU(XU[zU]), QU[zU] = cU.r || 0, AU[zU] = cU.g || 0, FU[zU] = cU.b || 0;
        return QU = UU(QU), AU = UU(AU), FU = UU(FU), cU.opacity = 1,
          function(UU) {
            return cU.r = QU(UU), cU.g = AU(UU), cU.b = FU(UU), cU + ""
          }
      }
    }
    oX((function(UU) {
      var XU = UU.length - 1;
      return function(zU) {
        var cU = zU <= 0 ? zU = 0 : zU >= 1 ? (zU = 1, XU - 1) : Math.floor(zU * XU),
          yU = UU[cU],
          QU = UU[cU + 1],
          AU = cU > 0 ? UU[cU - 1] : 2 * yU - QU,
          FU = cU < XU - 1 ? UU[cU + 2] : 2 * QU - yU;
        return zX((zU - cU / XU) * XU, AU, yU, QU, FU)
      }
    })), oX((function(UU) {
      var XU = UU.length;
      return function(zU) {
        var cU = Math.floor(((zU %= 1) < 0 ? ++zU : zU) * XU),
          yU = UU[(cU + XU - 1) % XU],
          QU = UU[cU % XU],
          AU = UU[(cU + 1) % XU],
          FU = UU[(cU + 2) % XU];
        return zX((zU - cU / XU) * XU, yU, QU, AU, FU)
      }
    }));

    function DX(UU, XU) {
      var zU, cU = XU ? XU.length : 0,
        yU = UU ? Math.min(cU, UU.length) : 0,
        QU = new Array(yU),
        AU = new Array(cU);
      for (zU = 0; zU < yU; ++zU) QU[zU] = gX(UU[zU], XU[zU]);
      for (; zU < cU; ++zU) AU[zU] = XU[zU];
      return function(UU) {
        for (zU = 0; zU < yU; ++zU) AU[zU] = QU[zU](UU);
        return AU
      }
    }

    function EX(UU, XU) {
      var zU = new Date;
      return UU = +UU, XU = +XU,
        function(cU) {
          return zU.setTime(UU * (1 - cU) + XU * cU), zU
        }
    }

    function YX(UU, XU) {
      return UU = +UU, XU = +XU,
        function(zU) {
          return UU * (1 - zU) + XU * zU
        }
    }

    function NX(UU, XU) {
      var zU, cU = {},
        yU = {};
      for (zU in null !== UU && "object" === typeof UU || (UU = {}), null !== XU && "object" === typeof XU || (XU = {}), XU) zU in UU ? cU[zU] = gX(UU[zU], XU[zU]) : yU[zU] = XU[zU];
      return function(UU) {
        for (zU in cU) yU[zU] = cU[zU](UU);
        return yU
      }
    }
    var IX = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      pX = new RegExp(IX.source, "g");

    function aX(UU, XU) {
      var zU, cU, yU, QU = IX.lastIndex = pX.lastIndex = 0,
        AU = -1,
        FU = [],
        oU = [];
      for (UU += "", XU += "";
        (zU = IX.exec(UU)) && (cU = pX.exec(XU));)(yU = cU.index) > QU && (yU = XU.slice(QU, yU), FU[AU] ? FU[AU] += yU : FU[++AU] = yU), (zU = zU[0]) === (cU = cU[0]) ? FU[AU] ? FU[AU] += cU : FU[++AU] = cU : (FU[++AU] = null, oU.push({
        i: AU,
        x: YX(zU, cU)
      })), QU = pX.lastIndex;
      return QU < XU.length && (yU = XU.slice(QU), FU[AU] ? FU[AU] += yU : FU[++AU] = yU), FU.length < 2 ? oU[0] ? function(UU) {
        return function(XU) {
          return UU(XU) + ""
        }
      }(oU[0].x) : function(UU) {
        return function() {
          return UU
        }
      }(XU) : (XU = oU.length, function(UU) {
        for (var zU, cU = 0; cU < XU; ++cU) FU[(zU = oU[cU]).i] = zU.x(UU);
        return FU.join("")
      })
    }

    function tX(UU, XU) {
      XU || (XU = []);
      var zU, cU = UU ? Math.min(XU.length, UU.length) : 0,
        yU = XU.slice();
      return function(QU) {
        for (zU = 0; zU < cU; ++zU) yU[zU] = UU[zU] * (1 - QU) + XU[zU] * QU;
        return yU
      }
    }

    function gX(UU, XU) {
      var zU, cU, yU = typeof XU;
      return null == XU || "boolean" === yU ? cX(XU) : ("number" === yU ? YX : "string" === yU ? (zU = MU(XU)) ? (XU = zU, FX) : aX : XU instanceof MU ? FX : XU instanceof Date ? EX : (cU = XU, !ArrayBuffer.isView(cU) || cU instanceof DataView ? Array.isArray(XU) ? DX : "function" !== typeof XU.valueOf && "function" !== typeof XU.toString || isNaN(XU) ? NX : YX : tX))(UU, XU)
    }

    function kX(UU, XU) {
      return UU = +UU, XU = +XU,
        function(zU) {
          return Math.round(UU * (1 - zU) + XU * zU)
        }
    }

    function GX(UU) {
      return +UU
    }
    var BX = [0, 1];

    function ZX(UU) {
      return UU
    }

    function RX(UU, XU) {
      return (XU -= UU = +UU) ? function(zU) {
        return (zU - UU) / XU
      } : (zU = isNaN(XU) ? NaN : .5, function() {
        return zU
      });
      var zU
    }

    function PX(UU, XU, zU) {
      var cU = UU[0],
        yU = UU[1],
        QU = XU[0],
        AU = XU[1];
      return yU < cU ? (cU = RX(yU, cU), QU = zU(AU, QU)) : (cU = RX(cU, yU), QU = zU(QU, AU)),
        function(UU) {
          return QU(cU(UU))
        }
    }

    function WX(UU, XU, zU) {
      var cU = Math.min(UU.length, XU.length) - 1,
        yU = new Array(cU),
        QU = new Array(cU),
        AU = -1;
      for (UU[cU] < UU[0] && (UU = UU.slice().reverse(), XU = XU.slice().reverse()); ++AU < cU;) yU[AU] = RX(UU[AU], UU[AU + 1]), QU[AU] = zU(XU[AU], XU[AU + 1]);
      return function(XU) {
        var zU = GU(UU, XU, 1, cU) - 1;
        return QU[zU](yU[zU](XU))
      }
    }

    function dX(UU, XU) {
      return XU.domain(UU.domain()).range(UU.range()).interpolate(UU.interpolate()).clamp(UU.clamp()).unknown(UU.unknown())
    }

    function LX() {
      var UU, XU, zU, cU, yU, QU, AU = BX,
        FU = BX,
        oU = gX,
        DU = ZX;

      function EU() {
        var UU = Math.min(AU.length, FU.length);
        return DU !== ZX && (DU = function(UU, XU) {
          var zU;
          return UU > XU && (zU = UU, UU = XU, XU = zU),
            function(zU) {
              return Math.max(UU, Math.min(XU, zU))
            }
        }(AU[0], AU[UU - 1])), cU = UU > 2 ? WX : PX, yU = QU = null, YU
      }

      function YU(XU) {
        return null == XU || isNaN(XU = +XU) ? zU : (yU || (yU = cU(AU.map(UU), FU, oU)))(UU(DU(XU)))
      }
      return YU.invert = function(zU) {
          return DU(XU((QU || (QU = cU(FU, AU.map(UU), YX)))(zU)))
        }, YU.domain = function(UU) {
          return arguments.length ? (AU = Array.from(UU, GX), EU()) : AU.slice()
        }, YU.range = function(UU) {
          return arguments.length ? (FU = Array.from(UU), EU()) : FU.slice()
        }, YU.rangeRound = function(UU) {
          return FU = Array.from(UU), oU = kX, EU()
        }, YU.clamp = function(UU) {
          return arguments.length ? (DU = !!UU || ZX, EU()) : DU !== ZX
        }, YU.interpolate = function(UU) {
          return arguments.length ? (oU = UU, EU()) : oU
        }, YU.unknown = function(UU) {
          return arguments.length ? (zU = UU, YU) : zU
        },
        function(zU, cU) {
          return UU = zU, XU = cU, EU()
        }
    }

    function eX() {
      return LX()(ZX, ZX)
    }
    var CX, wX = zU(6758),
      qX = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function OX(UU) {
      if (!(XU = qX.exec(UU))) throw new Error("invalid format: " + UU);
      var XU;
      return new SX({
        fill: XU[1],
        align: XU[2],
        sign: XU[3],
        symbol: XU[4],
        zero: XU[5],
        width: XU[6],
        comma: XU[7],
        precision: XU[8] && XU[8].slice(1),
        trim: XU[9],
        type: XU[10]
      })
    }

    function SX(UU) {
      this.fill = void 0 === UU.fill ? " " : UU.fill + "", this.align = void 0 === UU.align ? ">" : UU.align + "", this.sign = void 0 === UU.sign ? "-" : UU.sign + "", this.symbol = void 0 === UU.symbol ? "" : UU.symbol + "", this.zero = !!UU.zero, this.width = void 0 === UU.width ? void 0 : +UU.width, this.comma = !!UU.comma, this.precision = void 0 === UU.precision ? void 0 : +UU.precision, this.trim = !!UU.trim, this.type = void 0 === UU.type ? "" : UU.type + ""
    }

    function rX(UU, XU) {
      if (!isFinite(UU) || 0 === UU) return null;
      var zU = (UU = XU ? UU.toExponential(XU - 1) : UU.toExponential()).indexOf("e"),
        cU = UU.slice(0, zU);
      return [cU.length > 1 ? cU[0] + cU.slice(2) : cU, +UU.slice(zU + 1)]
    }

    function uX(UU) {
      return (UU = rX(Math.abs(UU))) ? UU[1] : NaN
    }

    function fX(UU, XU) {
      var zU = rX(UU, XU);
      if (!zU) return UU + "";
      var cU = zU[0],
        yU = zU[1];
      return yU < 0 ? "0." + new Array(-yU).join("0") + cU : cU.length > yU + 1 ? cU.slice(0, yU + 1) + "." + cU.slice(yU + 1) : cU + new Array(yU - cU.length + 2).join("0")
    }
    OX.prototype = SX.prototype, SX.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const iX = {
      "%": (UU, XU) => (100 * UU).toFixed(XU),
      b: UU => Math.round(UU).toString(2),
      c: UU => UU + "",
      d: function(UU) {
        return Math.abs(UU = Math.round(UU)) >= 1e21 ? UU.toLocaleString("en").replace(/,/g, "") : UU.toString(10)
      },
      e: (UU, XU) => UU.toExponential(XU),
      f: (UU, XU) => UU.toFixed(XU),
      g: (UU, XU) => UU.toPrecision(XU),
      o: UU => Math.round(UU).toString(8),
      p: (UU, XU) => fX(100 * UU, XU),
      r: fX,
      s: function(UU, XU) {
        var zU = rX(UU, XU);
        if (!zU) return CX = void 0, UU.toPrecision(XU);
        var cU = zU[0],
          yU = zU[1],
          QU = yU - (CX = 3 * Math.max(-8, Math.min(8, Math.floor(yU / 3)))) + 1,
          AU = cU.length;
        return QU === AU ? cU : QU > AU ? cU + new Array(QU - AU + 1).join("0") : QU > 0 ? cU.slice(0, QU) + "." + cU.slice(QU) : "0." + new Array(1 - QU).join("0") + rX(UU, Math.max(0, XU + QU - 1))[0]
      },
      X: UU => Math.round(UU).toString(16).toUpperCase(),
      x: UU => Math.round(UU).toString(16)
    };

    function HX(UU) {
      return UU
    }
    var MX, vX, VX, sX = Array.prototype.map,
      nX = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function mX(UU) {
      var XU, zU, cU = void 0 === UU.grouping || void 0 === UU.thousands ? HX : (XU = sX.call(UU.grouping, Number), zU = UU.thousands + "", function(UU, cU) {
          for (var yU = UU.length, QU = [], AU = 0, FU = XU[0], oU = 0; yU > 0 && FU > 0 && (oU + FU + 1 > cU && (FU = Math.max(1, cU - oU)), QU.push(UU.substring(yU -= FU, yU + FU)), !((oU += FU + 1) > cU));) FU = XU[AU = (AU + 1) % XU.length];
          return QU.reverse().join(zU)
        }),
        yU = void 0 === UU.currency ? "" : UU.currency[0] + "",
        QU = void 0 === UU.currency ? "" : UU.currency[1] + "",
        AU = void 0 === UU.decimal ? "." : UU.decimal + "",
        FU = void 0 === UU.numerals ? HX : function(UU) {
          return function(XU) {
            return XU.replace(/[0-9]/g, (function(XU) {
              return UU[+XU]
            }))
          }
        }(sX.call(UU.numerals, String)),
        oU = void 0 === UU.percent ? "%" : UU.percent + "",
        DU = void 0 === UU.minus ? "\u2212" : UU.minus + "",
        EU = void 0 === UU.nan ? "NaN" : UU.nan + "";

      function YU(UU, XU) {
        var zU = (UU = OX(UU)).fill,
          YU = UU.align,
          NU = UU.sign,
          IU = UU.symbol,
          pU = UU.zero,
          aU = UU.width,
          tU = UU.comma,
          gU = UU.precision,
          kU = UU.trim,
          GU = UU.type;
        "n" === GU ? (tU = !0, GU = "g") : iX[GU] || (void 0 === gU && (gU = 12), kU = !0, GU = "g"), (pU || "0" === zU && "=" === YU) && (pU = !0, zU = "0", YU = "=");
        var BU = (XU && void 0 !== XU.prefix ? XU.prefix : "") + ("$" === IU ? yU : "#" === IU && /[boxX]/.test(GU) ? "0" + GU.toLowerCase() : ""),
          ZU = ("$" === IU ? QU : /[%p]/.test(GU) ? oU : "") + (XU && void 0 !== XU.suffix ? XU.suffix : ""),
          RU = iX[GU],
          PU = /[defgprs%]/.test(GU);

        function WU(UU) {
          var XU, yU, QU, oU = BU,
            IU = ZU;
          if ("c" === GU) IU = RU(UU) + IU, UU = "";
          else {
            var WU = (UU = +UU) < 0 || 1 / UU < 0;
            if (UU = isNaN(UU) ? EU : RU(Math.abs(UU), gU), kU && (UU = function(UU) {
                UU: for (var XU, zU = UU.length, cU = 1, yU = -1; cU < zU; ++cU) switch (UU[cU]) {
                  case ".":
                    yU = XU = cU;
                    break;
                  case "0":
                    0 === yU && (yU = cU), XU = cU;
                    break;
                  default:
                    if (!+UU[cU]) break UU;
                    yU > 0 && (yU = 0)
                }
                return yU > 0 ? UU.slice(0, yU) + UU.slice(XU + 1) : UU
              }(UU)), WU && 0 === +UU && "+" !== NU && (WU = !1), oU = (WU ? "(" === NU ? NU : DU : "-" === NU || "(" === NU ? "" : NU) + oU, IU = ("s" !== GU || isNaN(UU) || void 0 === CX ? "" : nX[8 + CX / 3]) + IU + (WU && "(" === NU ? ")" : ""), PU)
              for (XU = -1, yU = UU.length; ++XU < yU;)
                if (48 > (QU = UU.charCodeAt(XU)) || QU > 57) {
                  IU = (46 === QU ? AU + UU.slice(XU + 1) : UU.slice(XU)) + IU, UU = UU.slice(0, XU);
                  break
                }
          }
          tU && !pU && (UU = cU(UU, 1 / 0));
          var dU = oU.length + UU.length + IU.length,
            LU = dU < aU ? new Array(aU - dU + 1).join(zU) : "";
          switch (tU && pU && (UU = cU(LU + UU, LU.length ? aU - IU.length : 1 / 0), LU = ""), YU) {
            case "<":
              UU = oU + UU + IU + LU;
              break;
            case "=":
              UU = oU + LU + UU + IU;
              break;
            case "^":
              UU = LU.slice(0, dU = LU.length >> 1) + oU + UU + IU + LU.slice(dU);
              break;
            default:
              UU = LU + oU + UU + IU
          }
          return FU(UU)
        }
        return gU = void 0 === gU ? 6 : /[gprs]/.test(GU) ? Math.max(1, Math.min(21, gU)) : Math.max(0, Math.min(20, gU)), WU.toString = function() {
          return UU + ""
        }, WU
      }
      return {
        format: YU,
        formatPrefix: function(UU, XU) {
          var zU = 3 * Math.max(-8, Math.min(8, Math.floor(uX(XU) / 3))),
            cU = Math.pow(10, -zU),
            yU = YU(((UU = OX(UU)).type = "f", UU), {
              suffix: nX[8 + zU / 3]
            });
          return function(UU) {
            return yU(cU * UU)
          }
        }
      }
    }

    function lX(UU, XU, zU, cU) {
      var yU, QU = YU(UU, XU, zU);
      switch ((cU = OX(null == cU ? ",f" : cU)).type) {
        case "s":
          var AU = Math.max(Math.abs(UU), Math.abs(XU));
          return null != cU.precision || isNaN(yU = function(UU, XU) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(uX(XU) / 3))) - uX(Math.abs(UU)))
          }(QU, AU)) || (cU.precision = yU), VX(cU, AU);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != cU.precision || isNaN(yU = function(UU, XU) {
            return UU = Math.abs(UU), XU = Math.abs(XU) - UU, Math.max(0, uX(XU) - uX(UU)) + 1
          }(QU, Math.max(Math.abs(UU), Math.abs(XU)))) || (cU.precision = yU - ("e" === cU.type));
          break;
        case "f":
        case "%":
          null != cU.precision || isNaN(yU = function(UU) {
            return Math.max(0, -uX(Math.abs(UU)))
          }(QU)) || (cU.precision = yU - 2 * ("%" === cU.type))
      }
      return vX(cU)
    }

    function xX(UU) {
      var XU = UU.domain;
      return UU.ticks = function(UU) {
        var zU = XU();
        return DU(zU[0], zU[zU.length - 1], null == UU ? 10 : UU)
      }, UU.tickFormat = function(UU, zU) {
        var cU = XU();
        return lX(cU[0], cU[cU.length - 1], null == UU ? 10 : UU, zU)
      }, UU.nice = function(zU) {
        null == zU && (zU = 10);
        var cU, yU, QU = XU(),
          AU = 0,
          FU = QU.length - 1,
          oU = QU[AU],
          DU = QU[FU],
          YU = 10;
        for (DU < oU && (yU = oU, oU = DU, DU = yU, yU = AU, AU = FU, FU = yU); YU-- > 0;) {
          if ((yU = EU(oU, DU, zU)) === cU) return QU[AU] = oU, QU[FU] = DU, XU(QU);
          if (yU > 0) oU = Math.floor(oU / yU) * yU, DU = Math.ceil(DU / yU) * yU;
          else {
            if (!(yU < 0)) break;
            oU = Math.ceil(oU * yU) / yU, DU = Math.floor(DU * yU) / yU
          }
          cU = yU
        }
        return UU
      }, UU
    }

    function JX() {
      var UU = eX();
      return UU.copy = function() {
        return dX(UU, JX())
      }, wX.g.apply(UU, arguments), xX(UU)
    }

    function jX(UU) {
      var XU;

      function zU(UU) {
        return null == UU || isNaN(UU = +UU) ? XU : UU
      }
      return zU.invert = zU, zU.domain = zU.range = function(XU) {
        return arguments.length ? (UU = Array.from(XU, GX), zU) : UU.slice()
      }, zU.unknown = function(UU) {
        return arguments.length ? (XU = UU, zU) : XU
      }, zU.copy = function() {
        return jX(UU).unknown(XU)
      }, UU = arguments.length ? Array.from(UU, GX) : [0, 1], xX(zU)
    }

    function KX(UU, XU) {
      var zU, cU = 0,
        yU = (UU = UU.slice()).length - 1,
        QU = UU[cU],
        AU = UU[yU];
      return AU < QU && (zU = cU, cU = yU, yU = zU, zU = QU, QU = AU, AU = zU), UU[cU] = XU.floor(QU), UU[yU] = XU.ceil(AU), UU
    }

    function bX(UU) {
      return Math.log(UU)
    }

    function TX(UU) {
      return Math.exp(UU)
    }

    function hX(UU) {
      return -Math.log(-UU)
    }

    function Uz(UU) {
      return -Math.exp(-UU)
    }

    function Xz(UU) {
      return isFinite(UU) ? +("1e" + UU) : UU < 0 ? 0 : UU
    }

    function zz(UU) {
      return (XU, zU) => -UU(-XU, zU)
    }

    function cz(UU) {
      const XU = UU(bX, TX),
        zU = XU.domain;
      let cU, yU, QU = 10;

      function AU() {
        return cU = function(UU) {
          return UU === Math.E ? Math.log : 10 === UU && Math.log10 || 2 === UU && Math.log2 || (UU = Math.log(UU), XU => Math.log(XU) / UU)
        }(QU), yU = function(UU) {
          return 10 === UU ? Xz : UU === Math.E ? Math.exp : XU => Math.pow(UU, XU)
        }(QU), zU()[0] < 0 ? (cU = zz(cU), yU = zz(yU), UU(hX, Uz)) : UU(bX, TX), XU
      }
      return XU.base = function(UU) {
        return arguments.length ? (QU = +UU, AU()) : QU
      }, XU.domain = function(UU) {
        return arguments.length ? (zU(UU), AU()) : zU()
      }, XU.ticks = UU => {
        const XU = zU();
        let AU = XU[0],
          FU = XU[XU.length - 1];
        const oU = FU < AU;
        oU && ([AU, FU] = [FU, AU]);
        let EU, YU, NU = cU(AU),
          IU = cU(FU);
        const pU = null == UU ? 10 : +UU;
        let aU = [];
        if (!(QU % 1) && IU - NU < pU) {
          if (NU = Math.floor(NU), IU = Math.ceil(IU), AU > 0) {
            for (; NU <= IU; ++NU)
              for (EU = 1; EU < QU; ++EU)
                if (YU = NU < 0 ? EU / yU(-NU) : EU * yU(NU), !(YU < AU)) {
                  if (YU > FU) break;
                  aU.push(YU)
                }
          } else
            for (; NU <= IU; ++NU)
              for (EU = QU - 1; EU >= 1; --EU)
                if (YU = NU > 0 ? EU / yU(-NU) : EU * yU(NU), !(YU < AU)) {
                  if (YU > FU) break;
                  aU.push(YU)
                } 2 * aU.length < pU && (aU = DU(AU, FU, pU))
        } else aU = DU(NU, IU, Math.min(IU - NU, pU)).map(yU);
        return oU ? aU.reverse() : aU
      }, XU.tickFormat = (UU, zU) => {
        if (null == UU && (UU = 10), null == zU && (zU = 10 === QU ? "s" : ","), "function" !== typeof zU && (QU % 1 || null != (zU = OX(zU)).precision || (zU.trim = !0), zU = vX(zU)), UU === 1 / 0) return zU;
        const AU = Math.max(1, QU * UU / XU.ticks().length);
        return UU => {
          let XU = UU / yU(Math.round(cU(UU)));
          return XU * QU < QU - .5 && (XU *= QU), XU <= AU ? zU(UU) : ""
        }
      }, XU.nice = () => zU(KX(zU(), {
        floor: UU => yU(Math.floor(cU(UU))),
        ceil: UU => yU(Math.ceil(cU(UU)))
      })), XU
    }

    function yz() {
      const UU = cz(LX()).domain([1, 10]);
      return UU.copy = () => dX(UU, yz()).base(UU.base()), wX.g.apply(UU, arguments), UU
    }

    function Qz(UU) {
      return function(XU) {
        return Math.sign(XU) * Math.log1p(Math.abs(XU / UU))
      }
    }

    function Az(UU) {
      return function(XU) {
        return Math.sign(XU) * Math.expm1(Math.abs(XU)) * UU
      }
    }

    function Fz(UU) {
      var XU = 1,
        zU = UU(Qz(XU), Az(XU));
      return zU.constant = function(zU) {
        return arguments.length ? UU(Qz(XU = +zU), Az(XU)) : XU
      }, xX(zU)
    }

    function oz() {
      var UU = Fz(LX());
      return UU.copy = function() {
        return dX(UU, oz()).constant(UU.constant())
      }, wX.g.apply(UU, arguments)
    }
    MX = mX({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), vX = MX.format, VX = MX.formatPrefix;
    var Dz = zU(6762);

    function Ez(UU) {
      return function(XU) {
        return XU < 0 ? -Math.pow(-XU, UU) : Math.pow(XU, UU)
      }
    }

    function Yz(UU) {
      return UU < 0 ? -Math.sqrt(-UU) : Math.sqrt(UU)
    }

    function Nz(UU) {
      return UU < 0 ? -UU * UU : UU * UU
    }

    function Iz(UU) {
      var XU = UU(ZX, ZX),
        zU = 1;
      return XU.exponent = function(XU) {
        return arguments.length ? 1 === (zU = +XU) ? UU(ZX, ZX) : .5 === zU ? UU(Yz, Nz) : UU(Ez(zU), Ez(1 / zU)) : zU
      }, xX(XU)
    }

    function pz() {
      var UU = Iz(LX());
      return UU.copy = function() {
        return dX(UU, pz()).exponent(UU.exponent())
      }, wX.g.apply(UU, arguments), UU
    }

    function az() {
      return pz.apply(null, arguments).exponent(.5)
    }

    function tz(UU) {
      return Math.sign(UU) * UU * UU
    }

    function gz() {
      var UU, XU = eX(),
        zU = [0, 1],
        cU = !1;

      function yU(zU) {
        var yU = function(UU) {
          return Math.sign(UU) * Math.sqrt(Math.abs(UU))
        }(XU(zU));
        return isNaN(yU) ? UU : cU ? Math.round(yU) : yU
      }
      return yU.invert = function(UU) {
        return XU.invert(tz(UU))
      }, yU.domain = function(UU) {
        return arguments.length ? (XU.domain(UU), yU) : XU.domain()
      }, yU.range = function(UU) {
        return arguments.length ? (XU.range((zU = Array.from(UU, GX)).map(tz)), yU) : zU.slice()
      }, yU.rangeRound = function(UU) {
        return yU.range(UU).round(!0)
      }, yU.round = function(UU) {
        return arguments.length ? (cU = !!UU, yU) : cU
      }, yU.clamp = function(UU) {
        return arguments.length ? (XU.clamp(UU), yU) : XU.clamp()
      }, yU.unknown = function(XU) {
        return arguments.length ? (UU = XU, yU) : UU
      }, yU.copy = function() {
        return gz(XU.domain(), zU).round(cU).clamp(XU.clamp()).unknown(UU)
      }, wX.g.apply(yU, arguments), xX(yU)
    }

    function kz(UU, XU) {
      let zU;
      if (void 0 === XU)
        for (const cU of UU) null != cU && (zU < cU || void 0 === zU && cU >= cU) && (zU = cU);
      else {
        let cU = -1;
        for (let yU of UU) null != (yU = XU(yU, ++cU, UU)) && (zU < yU || void 0 === zU && yU >= yU) && (zU = yU)
      }
      return zU
    }

    function Gz(UU, XU) {
      let zU;
      if (void 0 === XU)
        for (const cU of UU) null != cU && (zU > cU || void 0 === zU && cU >= cU) && (zU = cU);
      else {
        let cU = -1;
        for (let yU of UU) null != (yU = XU(yU, ++cU, UU)) && (zU > yU || void 0 === zU && yU >= yU) && (zU = yU)
      }
      return zU
    }

    function Bz() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NU;
      if (UU === NU) return Zz;
      if ("function" !== typeof UU) throw new TypeError("compare is not a function");
      return (XU, zU) => {
        const cU = UU(XU, zU);
        return cU || 0 === cU ? cU : (0 === UU(zU, zU)) - (0 === UU(XU, XU))
      }
    }

    function Zz(UU, XU) {
      return (null == UU || !(UU >= UU)) - (null == XU || !(XU >= XU)) || (UU < XU ? -1 : UU > XU ? 1 : 0)
    }

    function Rz(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        yU = arguments.length > 4 ? arguments[4] : void 0;
      if (XU = Math.floor(XU), zU = Math.floor(Math.max(0, zU)), cU = Math.floor(Math.min(UU.length - 1, cU)), !(zU <= XU && XU <= cU)) return UU;
      for (yU = void 0 === yU ? Zz : Bz(yU); cU > zU;) {
        if (cU - zU > 600) {
          const QU = cU - zU + 1,
            AU = XU - zU + 1,
            FU = Math.log(QU),
            oU = .5 * Math.exp(2 * FU / 3),
            DU = .5 * Math.sqrt(FU * oU * (QU - oU) / QU) * (AU - QU / 2 < 0 ? -1 : 1);
          Rz(UU, XU, Math.max(zU, Math.floor(XU - AU * oU / QU + DU)), Math.min(cU, Math.floor(XU + (QU - AU) * oU / QU + DU)), yU)
        }
        const QU = UU[XU];
        let AU = zU,
          FU = cU;
        for (Pz(UU, zU, XU), yU(UU[cU], QU) > 0 && Pz(UU, zU, cU); AU < FU;) {
          for (Pz(UU, AU, FU), ++AU, --FU; yU(UU[AU], QU) < 0;) ++AU;
          for (; yU(UU[FU], QU) > 0;) --FU
        }
        0 === yU(UU[zU], QU) ? Pz(UU, zU, FU) : (++FU, Pz(UU, FU, cU)), FU <= XU && (zU = FU + 1), XU <= FU && (cU = FU - 1)
      }
      return UU
    }

    function Pz(UU, XU, zU) {
      const cU = UU[XU];
      UU[XU] = UU[zU], UU[zU] = cU
    }

    function Wz(UU, XU, zU) {
      if (UU = Float64Array.from(function*(UU, XU) {
          if (void 0 === XU)
            for (let zU of UU) null != zU && (zU = +zU) >= zU && (yield zU);
          else {
            let zU = -1;
            for (let cU of UU) null != (cU = XU(cU, ++zU, UU)) && (cU = +cU) >= cU && (yield cU)
          }
        }(UU, zU)), (cU = UU.length) && !isNaN(XU = +XU)) {
        if (XU <= 0 || cU < 2) return Gz(UU);
        if (XU >= 1) return kz(UU);
        var cU, yU = (cU - 1) * XU,
          QU = Math.floor(yU),
          AU = kz(Rz(UU, QU).subarray(0, QU + 1));
        return AU + (Gz(UU.subarray(QU + 1)) - AU) * (yU - QU)
      }
    }

    function dz(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tU;
      if ((cU = UU.length) && !isNaN(XU = +XU)) {
        if (XU <= 0 || cU < 2) return +zU(UU[0], 0, UU);
        if (XU >= 1) return +zU(UU[cU - 1], cU - 1, UU);
        var cU, yU = (cU - 1) * XU,
          QU = Math.floor(yU),
          AU = +zU(UU[QU], QU, UU);
        return AU + (+zU(UU[QU + 1], QU + 1, UU) - AU) * (yU - QU)
      }
    }

    function Lz() {
      var UU, XU = [],
        zU = [],
        cU = [];

      function yU() {
        var UU = 0,
          yU = Math.max(1, zU.length);
        for (cU = new Array(yU - 1); ++UU < yU;) cU[UU - 1] = dz(XU, UU / yU);
        return QU
      }

      function QU(XU) {
        return null == XU || isNaN(XU = +XU) ? UU : zU[GU(cU, XU)]
      }
      return QU.invertExtent = function(UU) {
        var yU = zU.indexOf(UU);
        return yU < 0 ? [NaN, NaN] : [yU > 0 ? cU[yU - 1] : XU[0], yU < cU.length ? cU[yU] : XU[XU.length - 1]]
      }, QU.domain = function(UU) {
        if (!arguments.length) return XU.slice();
        XU = [];
        for (let zU of UU) null == zU || isNaN(zU = +zU) || XU.push(zU);
        return XU.sort(NU), yU()
      }, QU.range = function(UU) {
        return arguments.length ? (zU = Array.from(UU), yU()) : zU.slice()
      }, QU.unknown = function(XU) {
        return arguments.length ? (UU = XU, QU) : UU
      }, QU.quantiles = function() {
        return cU.slice()
      }, QU.copy = function() {
        return Lz().domain(XU).range(zU).unknown(UU)
      }, wX.g.apply(QU, arguments)
    }

    function ez() {
      var UU, XU = 0,
        zU = 1,
        cU = 1,
        yU = [.5],
        QU = [0, 1];

      function AU(XU) {
        return null != XU && XU <= XU ? QU[GU(yU, XU, 0, cU)] : UU
      }

      function FU() {
        var UU = -1;
        for (yU = new Array(cU); ++UU < cU;) yU[UU] = ((UU + 1) * zU - (UU - cU) * XU) / (cU + 1);
        return AU
      }
      return AU.domain = function(UU) {
        return arguments.length ? ([XU, zU] = UU, XU = +XU, zU = +zU, FU()) : [XU, zU]
      }, AU.range = function(UU) {
        return arguments.length ? (cU = (QU = Array.from(UU)).length - 1, FU()) : QU.slice()
      }, AU.invertExtent = function(UU) {
        var AU = QU.indexOf(UU);
        return AU < 0 ? [NaN, NaN] : AU < 1 ? [XU, yU[0]] : AU >= cU ? [yU[cU - 1], zU] : [yU[AU - 1], yU[AU]]
      }, AU.unknown = function(XU) {
        return arguments.length ? (UU = XU, AU) : AU
      }, AU.thresholds = function() {
        return yU.slice()
      }, AU.copy = function() {
        return ez().domain([XU, zU]).range(QU).unknown(UU)
      }, wX.g.apply(xX(AU), arguments)
    }

    function Cz() {
      var UU, XU = [.5],
        zU = [0, 1],
        cU = 1;

      function yU(yU) {
        return null != yU && yU <= yU ? zU[GU(XU, yU, 0, cU)] : UU
      }
      return yU.domain = function(UU) {
        return arguments.length ? (XU = Array.from(UU), cU = Math.min(XU.length, zU.length - 1), yU) : XU.slice()
      }, yU.range = function(UU) {
        return arguments.length ? (zU = Array.from(UU), cU = Math.min(XU.length, zU.length - 1), yU) : zU.slice()
      }, yU.invertExtent = function(UU) {
        var cU = zU.indexOf(UU);
        return [XU[cU - 1], XU[cU]]
      }, yU.unknown = function(XU) {
        return arguments.length ? (UU = XU, yU) : UU
      }, yU.copy = function() {
        return Cz().domain(XU).range(zU).unknown(UU)
      }, wX.g.apply(yU, arguments)
    }
    const wz = 1e3,
      qz = 6e4,
      Oz = 36e5,
      Sz = 864e5,
      rz = 6048e5,
      uz = 2592e6,
      fz = 31536e6,
      iz = new Date,
      Hz = new Date;

    function Mz(UU, XU, zU, cU) {
      function yU(XU) {
        return UU(XU = 0 === arguments.length ? new Date : new Date(+XU)), XU
      }
      return yU.floor = XU => (UU(XU = new Date(+XU)), XU), yU.ceil = zU => (UU(zU = new Date(zU - 1)), XU(zU, 1), UU(zU), zU), yU.round = UU => {
        const XU = yU(UU),
          zU = yU.ceil(UU);
        return UU - XU < zU - UU ? XU : zU
      }, yU.offset = (UU, zU) => (XU(UU = new Date(+UU), null == zU ? 1 : Math.floor(zU)), UU), yU.range = (zU, cU, QU) => {
        const AU = [];
        if (zU = yU.ceil(zU), QU = null == QU ? 1 : Math.floor(QU), !(zU < cU) || !(QU > 0)) return AU;
        let FU;
        do {
          AU.push(FU = new Date(+zU)), XU(zU, QU), UU(zU)
        } while (FU < zU && zU < cU);
        return AU
      }, yU.filter = zU => Mz((XU => {
        if (XU >= XU)
          for (; UU(XU), !zU(XU);) XU.setTime(XU - 1)
      }), ((UU, cU) => {
        if (UU >= UU)
          if (cU < 0)
            for (; ++cU <= 0;)
              for (; XU(UU, -1), !zU(UU););
          else
            for (; --cU >= 0;)
              for (; XU(UU, 1), !zU(UU););
      })), zU && (yU.count = (XU, cU) => (iz.setTime(+XU), Hz.setTime(+cU), UU(iz), UU(Hz), Math.floor(zU(iz, Hz))), yU.every = UU => (UU = Math.floor(UU), isFinite(UU) && UU > 0 ? UU > 1 ? yU.filter(cU ? XU => cU(XU) % UU === 0 : XU => yU.count(0, XU) % UU === 0) : yU : null)), yU
    }
    const vz = Mz((() => {}), ((UU, XU) => {
      UU.setTime(+UU + XU)
    }), ((UU, XU) => XU - UU));
    vz.every = UU => (UU = Math.floor(UU), isFinite(UU) && UU > 0 ? UU > 1 ? Mz((XU => {
      XU.setTime(Math.floor(XU / UU) * UU)
    }), ((XU, zU) => {
      XU.setTime(+XU + zU * UU)
    }), ((XU, zU) => (zU - XU) / UU)) : vz : null);
    vz.range;
    const Vz = Mz((UU => {
        UU.setTime(UU - UU.getMilliseconds())
      }), ((UU, XU) => {
        UU.setTime(+UU + XU * wz)
      }), ((UU, XU) => (XU - UU) / wz), (UU => UU.getUTCSeconds())),
      sz = (Vz.range, Mz((UU => {
        UU.setTime(UU - UU.getMilliseconds() - UU.getSeconds() * wz)
      }), ((UU, XU) => {
        UU.setTime(+UU + XU * qz)
      }), ((UU, XU) => (XU - UU) / qz), (UU => UU.getMinutes()))),
      nz = (sz.range, Mz((UU => {
        UU.setUTCSeconds(0, 0)
      }), ((UU, XU) => {
        UU.setTime(+UU + XU * qz)
      }), ((UU, XU) => (XU - UU) / qz), (UU => UU.getUTCMinutes()))),
      mz = (nz.range, Mz((UU => {
        UU.setTime(UU - UU.getMilliseconds() - UU.getSeconds() * wz - UU.getMinutes() * qz)
      }), ((UU, XU) => {
        UU.setTime(+UU + XU * Oz)
      }), ((UU, XU) => (XU - UU) / Oz), (UU => UU.getHours()))),
      lz = (mz.range, Mz((UU => {
        UU.setUTCMinutes(0, 0, 0)
      }), ((UU, XU) => {
        UU.setTime(+UU + XU * Oz)
      }), ((UU, XU) => (XU - UU) / Oz), (UU => UU.getUTCHours()))),
      xz = (lz.range, Mz((UU => UU.setHours(0, 0, 0, 0)), ((UU, XU) => UU.setDate(UU.getDate() + XU)), ((UU, XU) => (XU - UU - (XU.getTimezoneOffset() - UU.getTimezoneOffset()) * qz) / Sz), (UU => UU.getDate() - 1))),
      Jz = (xz.range, Mz((UU => {
        UU.setUTCHours(0, 0, 0, 0)
      }), ((UU, XU) => {
        UU.setUTCDate(UU.getUTCDate() + XU)
      }), ((UU, XU) => (XU - UU) / Sz), (UU => UU.getUTCDate() - 1))),
      jz = (Jz.range, Mz((UU => {
        UU.setUTCHours(0, 0, 0, 0)
      }), ((UU, XU) => {
        UU.setUTCDate(UU.getUTCDate() + XU)
      }), ((UU, XU) => (XU - UU) / Sz), (UU => Math.floor(UU / Sz))));
    jz.range;

    function Kz(UU) {
      return Mz((XU => {
        XU.setDate(XU.getDate() - (XU.getDay() + 7 - UU) % 7), XU.setHours(0, 0, 0, 0)
      }), ((UU, XU) => {
        UU.setDate(UU.getDate() + 7 * XU)
      }), ((UU, XU) => (XU - UU - (XU.getTimezoneOffset() - UU.getTimezoneOffset()) * qz) / rz))
    }
    const bz = Kz(0),
      Tz = Kz(1),
      hz = Kz(2),
      Uc = Kz(3),
      Xc = Kz(4),
      zc = Kz(5),
      cc = Kz(6);
    bz.range, Tz.range, hz.range, Uc.range, Xc.range, zc.range, cc.range;

    function yc(UU) {
      return Mz((XU => {
        XU.setUTCDate(XU.getUTCDate() - (XU.getUTCDay() + 7 - UU) % 7), XU.setUTCHours(0, 0, 0, 0)
      }), ((UU, XU) => {
        UU.setUTCDate(UU.getUTCDate() + 7 * XU)
      }), ((UU, XU) => (XU - UU) / rz))
    }
    const Qc = yc(0),
      Ac = yc(1),
      Fc = yc(2),
      oc = yc(3),
      Dc = yc(4),
      Ec = yc(5),
      Yc = yc(6),
      Nc = (Qc.range, Ac.range, Fc.range, oc.range, Dc.range, Ec.range, Yc.range, Mz((UU => {
        UU.setDate(1), UU.setHours(0, 0, 0, 0)
      }), ((UU, XU) => {
        UU.setMonth(UU.getMonth() + XU)
      }), ((UU, XU) => XU.getMonth() - UU.getMonth() + 12 * (XU.getFullYear() - UU.getFullYear())), (UU => UU.getMonth()))),
      Ic = (Nc.range, Mz((UU => {
        UU.setUTCDate(1), UU.setUTCHours(0, 0, 0, 0)
      }), ((UU, XU) => {
        UU.setUTCMonth(UU.getUTCMonth() + XU)
      }), ((UU, XU) => XU.getUTCMonth() - UU.getUTCMonth() + 12 * (XU.getUTCFullYear() - UU.getUTCFullYear())), (UU => UU.getUTCMonth()))),
      pc = (Ic.range, Mz((UU => {
        UU.setMonth(0, 1), UU.setHours(0, 0, 0, 0)
      }), ((UU, XU) => {
        UU.setFullYear(UU.getFullYear() + XU)
      }), ((UU, XU) => XU.getFullYear() - UU.getFullYear()), (UU => UU.getFullYear())));
    pc.every = UU => isFinite(UU = Math.floor(UU)) && UU > 0 ? Mz((XU => {
      XU.setFullYear(Math.floor(XU.getFullYear() / UU) * UU), XU.setMonth(0, 1), XU.setHours(0, 0, 0, 0)
    }), ((XU, zU) => {
      XU.setFullYear(XU.getFullYear() + zU * UU)
    })) : null;
    pc.range;
    const ac = Mz((UU => {
      UU.setUTCMonth(0, 1), UU.setUTCHours(0, 0, 0, 0)
    }), ((UU, XU) => {
      UU.setUTCFullYear(UU.getUTCFullYear() + XU)
    }), ((UU, XU) => XU.getUTCFullYear() - UU.getUTCFullYear()), (UU => UU.getUTCFullYear()));
    ac.every = UU => isFinite(UU = Math.floor(UU)) && UU > 0 ? Mz((XU => {
      XU.setUTCFullYear(Math.floor(XU.getUTCFullYear() / UU) * UU), XU.setUTCMonth(0, 1), XU.setUTCHours(0, 0, 0, 0)
    }), ((XU, zU) => {
      XU.setUTCFullYear(XU.getUTCFullYear() + zU * UU)
    })) : null;
    ac.range;

    function tc(UU, XU, zU, cU, yU, QU) {
      const AU = [
        [Vz, 1, wz],
        [Vz, 5, 5e3],
        [Vz, 15, 15e3],
        [Vz, 30, 3e4],
        [QU, 1, qz],
        [QU, 5, 3e5],
        [QU, 15, 9e5],
        [QU, 30, 18e5],
        [yU, 1, Oz],
        [yU, 3, 108e5],
        [yU, 6, 216e5],
        [yU, 12, 432e5],
        [cU, 1, Sz],
        [cU, 2, 1728e5],
        [zU, 1, rz],
        [XU, 1, uz],
        [XU, 3, 7776e6],
        [UU, 1, fz]
      ];

      function FU(XU, zU, cU) {
        const yU = Math.abs(zU - XU) / cU,
          QU = pU((UU => {
            let [, , XU] = UU;
            return XU
          })).right(AU, yU);
        if (QU === AU.length) return UU.every(YU(XU / fz, zU / fz, cU));
        if (0 === QU) return vz.every(Math.max(YU(XU, zU, cU), 1));
        const [FU, oU] = AU[yU / AU[QU - 1][2] < AU[QU][2] / yU ? QU - 1 : QU];
        return FU.every(oU)
      }
      return [function(UU, XU, zU) {
        const cU = XU < UU;
        cU && ([UU, XU] = [XU, UU]);
        const yU = zU && "function" === typeof zU.range ? zU : FU(UU, XU, zU),
          QU = yU ? yU.range(UU, +XU + 1) : [];
        return cU ? QU.reverse() : QU
      }, FU]
    }
    const [gc, kc] = tc(ac, Ic, Qc, jz, lz, nz), [Gc, Bc] = tc(pc, Nc, bz, xz, mz, sz);

    function Zc(UU) {
      if (0 <= UU.y && UU.y < 100) {
        var XU = new Date(-1, UU.m, UU.d, UU.H, UU.M, UU.S, UU.L);
        return XU.setFullYear(UU.y), XU
      }
      return new Date(UU.y, UU.m, UU.d, UU.H, UU.M, UU.S, UU.L)
    }

    function Rc(UU) {
      if (0 <= UU.y && UU.y < 100) {
        var XU = new Date(Date.UTC(-1, UU.m, UU.d, UU.H, UU.M, UU.S, UU.L));
        return XU.setUTCFullYear(UU.y), XU
      }
      return new Date(Date.UTC(UU.y, UU.m, UU.d, UU.H, UU.M, UU.S, UU.L))
    }

    function Pc(UU, XU, zU) {
      return {
        y: UU,
        m: XU,
        d: zU,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var Wc, dc, Lc, ec = {
        "-": "",
        _: " ",
        0: "0"
      },
      Cc = /^\s*\d+/,
      wc = /^%/,
      qc = /[\\^$*+?|[\]().{}]/g;

    function Oc(UU, XU, zU) {
      var cU = UU < 0 ? "-" : "",
        yU = (cU ? -UU : UU) + "",
        QU = yU.length;
      return cU + (QU < zU ? new Array(zU - QU + 1).join(XU) + yU : yU)
    }

    function Sc(UU) {
      return UU.replace(qc, "\\$&")
    }

    function rc(UU) {
      return new RegExp("^(?:" + UU.map(Sc).join("|") + ")", "i")
    }

    function uc(UU) {
      return new Map(UU.map(((UU, XU) => [UU.toLowerCase(), XU])))
    }

    function fc(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 1));
      return cU ? (UU.w = +cU[0], zU + cU[0].length) : -1
    }

    function ic(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 1));
      return cU ? (UU.u = +cU[0], zU + cU[0].length) : -1
    }

    function Hc(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 2));
      return cU ? (UU.U = +cU[0], zU + cU[0].length) : -1
    }

    function Mc(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 2));
      return cU ? (UU.V = +cU[0], zU + cU[0].length) : -1
    }

    function vc(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 2));
      return cU ? (UU.W = +cU[0], zU + cU[0].length) : -1
    }

    function Vc(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 4));
      return cU ? (UU.y = +cU[0], zU + cU[0].length) : -1
    }

    function sc(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 2));
      return cU ? (UU.y = +cU[0] + (+cU[0] > 68 ? 1900 : 2e3), zU + cU[0].length) : -1
    }

    function nc(UU, XU, zU) {
      var cU = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(XU.slice(zU, zU + 6));
      return cU ? (UU.Z = cU[1] ? 0 : -(cU[2] + (cU[3] || "00")), zU + cU[0].length) : -1
    }

    function mc(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 1));
      return cU ? (UU.q = 3 * cU[0] - 3, zU + cU[0].length) : -1
    }

    function lc(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 2));
      return cU ? (UU.m = cU[0] - 1, zU + cU[0].length) : -1
    }

    function xc(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 2));
      return cU ? (UU.d = +cU[0], zU + cU[0].length) : -1
    }

    function Jc(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 3));
      return cU ? (UU.m = 0, UU.d = +cU[0], zU + cU[0].length) : -1
    }

    function jc(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 2));
      return cU ? (UU.H = +cU[0], zU + cU[0].length) : -1
    }

    function Kc(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 2));
      return cU ? (UU.M = +cU[0], zU + cU[0].length) : -1
    }

    function bc(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 2));
      return cU ? (UU.S = +cU[0], zU + cU[0].length) : -1
    }

    function Tc(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 3));
      return cU ? (UU.L = +cU[0], zU + cU[0].length) : -1
    }

    function hc(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU, zU + 6));
      return cU ? (UU.L = Math.floor(cU[0] / 1e3), zU + cU[0].length) : -1
    }

    function Uy(UU, XU, zU) {
      var cU = wc.exec(XU.slice(zU, zU + 1));
      return cU ? zU + cU[0].length : -1
    }

    function Xy(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU));
      return cU ? (UU.Q = +cU[0], zU + cU[0].length) : -1
    }

    function zy(UU, XU, zU) {
      var cU = Cc.exec(XU.slice(zU));
      return cU ? (UU.s = +cU[0], zU + cU[0].length) : -1
    }

    function cy(UU, XU) {
      return Oc(UU.getDate(), XU, 2)
    }

    function yy(UU, XU) {
      return Oc(UU.getHours(), XU, 2)
    }

    function Qy(UU, XU) {
      return Oc(UU.getHours() % 12 || 12, XU, 2)
    }

    function Ay(UU, XU) {
      return Oc(1 + xz.count(pc(UU), UU), XU, 3)
    }

    function Fy(UU, XU) {
      return Oc(UU.getMilliseconds(), XU, 3)
    }

    function oy(UU, XU) {
      return Fy(UU, XU) + "000"
    }

    function Dy(UU, XU) {
      return Oc(UU.getMonth() + 1, XU, 2)
    }

    function Ey(UU, XU) {
      return Oc(UU.getMinutes(), XU, 2)
    }

    function Yy(UU, XU) {
      return Oc(UU.getSeconds(), XU, 2)
    }

    function Ny(UU) {
      var XU = UU.getDay();
      return 0 === XU ? 7 : XU
    }

    function Iy(UU, XU) {
      return Oc(bz.count(pc(UU) - 1, UU), XU, 2)
    }

    function py(UU) {
      var XU = UU.getDay();
      return XU >= 4 || 0 === XU ? Xc(UU) : Xc.ceil(UU)
    }

    function ay(UU, XU) {
      return UU = py(UU), Oc(Xc.count(pc(UU), UU) + (4 === pc(UU).getDay()), XU, 2)
    }

    function ty(UU) {
      return UU.getDay()
    }

    function gy(UU, XU) {
      return Oc(Tz.count(pc(UU) - 1, UU), XU, 2)
    }

    function ky(UU, XU) {
      return Oc(UU.getFullYear() % 100, XU, 2)
    }

    function Gy(UU, XU) {
      return Oc((UU = py(UU)).getFullYear() % 100, XU, 2)
    }

    function By(UU, XU) {
      return Oc(UU.getFullYear() % 1e4, XU, 4)
    }

    function Zy(UU, XU) {
      var zU = UU.getDay();
      return Oc((UU = zU >= 4 || 0 === zU ? Xc(UU) : Xc.ceil(UU)).getFullYear() % 1e4, XU, 4)
    }

    function Ry(UU) {
      var XU = UU.getTimezoneOffset();
      return (XU > 0 ? "-" : (XU *= -1, "+")) + Oc(XU / 60 | 0, "0", 2) + Oc(XU % 60, "0", 2)
    }

    function Py(UU, XU) {
      return Oc(UU.getUTCDate(), XU, 2)
    }

    function Wy(UU, XU) {
      return Oc(UU.getUTCHours(), XU, 2)
    }

    function dy(UU, XU) {
      return Oc(UU.getUTCHours() % 12 || 12, XU, 2)
    }

    function Ly(UU, XU) {
      return Oc(1 + Jz.count(ac(UU), UU), XU, 3)
    }

    function ey(UU, XU) {
      return Oc(UU.getUTCMilliseconds(), XU, 3)
    }

    function Cy(UU, XU) {
      return ey(UU, XU) + "000"
    }

    function wy(UU, XU) {
      return Oc(UU.getUTCMonth() + 1, XU, 2)
    }

    function qy(UU, XU) {
      return Oc(UU.getUTCMinutes(), XU, 2)
    }

    function Oy(UU, XU) {
      return Oc(UU.getUTCSeconds(), XU, 2)
    }

    function Sy(UU) {
      var XU = UU.getUTCDay();
      return 0 === XU ? 7 : XU
    }

    function ry(UU, XU) {
      return Oc(Qc.count(ac(UU) - 1, UU), XU, 2)
    }

    function uy(UU) {
      var XU = UU.getUTCDay();
      return XU >= 4 || 0 === XU ? Dc(UU) : Dc.ceil(UU)
    }

    function fy(UU, XU) {
      return UU = uy(UU), Oc(Dc.count(ac(UU), UU) + (4 === ac(UU).getUTCDay()), XU, 2)
    }

    function iy(UU) {
      return UU.getUTCDay()
    }

    function Hy(UU, XU) {
      return Oc(Ac.count(ac(UU) - 1, UU), XU, 2)
    }

    function My(UU, XU) {
      return Oc(UU.getUTCFullYear() % 100, XU, 2)
    }

    function vy(UU, XU) {
      return Oc((UU = uy(UU)).getUTCFullYear() % 100, XU, 2)
    }

    function Vy(UU, XU) {
      return Oc(UU.getUTCFullYear() % 1e4, XU, 4)
    }

    function sy(UU, XU) {
      var zU = UU.getUTCDay();
      return Oc((UU = zU >= 4 || 0 === zU ? Dc(UU) : Dc.ceil(UU)).getUTCFullYear() % 1e4, XU, 4)
    }

    function ny() {
      return "+0000"
    }

    function my() {
      return "%"
    }

    function ly(UU) {
      return +UU
    }

    function xy(UU) {
      return Math.floor(+UU / 1e3)
    }

    function Jy(UU) {
      return new Date(UU)
    }

    function jy(UU) {
      return UU instanceof Date ? +UU : +new Date(+UU)
    }

    function Ky(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) {
      var EU = eX(),
        YU = EU.invert,
        NU = EU.domain,
        IU = DU(".%L"),
        pU = DU(":%S"),
        aU = DU("%I:%M"),
        tU = DU("%I %p"),
        gU = DU("%a %d"),
        kU = DU("%b %d"),
        GU = DU("%B"),
        BU = DU("%Y");

      function ZU(UU) {
        return (oU(UU) < UU ? IU : FU(UU) < UU ? pU : AU(UU) < UU ? aU : QU(UU) < UU ? tU : cU(UU) < UU ? yU(UU) < UU ? gU : kU : zU(UU) < UU ? GU : BU)(UU)
      }
      return EU.invert = function(UU) {
        return new Date(YU(UU))
      }, EU.domain = function(UU) {
        return arguments.length ? NU(Array.from(UU, jy)) : NU().map(Jy)
      }, EU.ticks = function(XU) {
        var zU = NU();
        return UU(zU[0], zU[zU.length - 1], null == XU ? 10 : XU)
      }, EU.tickFormat = function(UU, XU) {
        return null == XU ? ZU : DU(XU)
      }, EU.nice = function(UU) {
        var zU = NU();
        return UU && "function" === typeof UU.range || (UU = XU(zU[0], zU[zU.length - 1], null == UU ? 10 : UU)), UU ? NU(KX(zU, UU)) : EU
      }, EU.copy = function() {
        return dX(EU, Ky(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU))
      }, EU
    }

    function by() {
      return wX.g.apply(Ky(Gc, Bc, pc, Nc, bz, xz, mz, sz, Vz, dc).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function Ty() {
      return wX.g.apply(Ky(gc, kc, ac, Ic, Qc, Jz, lz, nz, Vz, Lc).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function hy() {
      var UU, XU, zU, cU, yU, QU = 0,
        AU = 1,
        FU = ZX,
        oU = !1;

      function DU(XU) {
        return null == XU || isNaN(XU = +XU) ? yU : FU(0 === zU ? .5 : (XU = (cU(XU) - UU) * zU, oU ? Math.max(0, Math.min(1, XU)) : XU))
      }

      function EU(UU) {
        return function(XU) {
          var zU, cU;
          return arguments.length ? ([zU, cU] = XU, FU = UU(zU, cU), DU) : [FU(0), FU(1)]
        }
      }
      return DU.domain = function(yU) {
          return arguments.length ? ([QU, AU] = yU, UU = cU(QU = +QU), XU = cU(AU = +AU), zU = UU === XU ? 0 : 1 / (XU - UU), DU) : [QU, AU]
        }, DU.clamp = function(UU) {
          return arguments.length ? (oU = !!UU, DU) : oU
        }, DU.interpolator = function(UU) {
          return arguments.length ? (FU = UU, DU) : FU
        }, DU.range = EU(gX), DU.rangeRound = EU(kX), DU.unknown = function(UU) {
          return arguments.length ? (yU = UU, DU) : yU
        },
        function(yU) {
          return cU = yU, UU = yU(QU), XU = yU(AU), zU = UU === XU ? 0 : 1 / (XU - UU), DU
        }
    }

    function UQ(UU, XU) {
      return XU.domain(UU.domain()).interpolator(UU.interpolator()).clamp(UU.clamp()).unknown(UU.unknown())
    }

    function XQ() {
      var UU = xX(hy()(ZX));
      return UU.copy = function() {
        return UQ(UU, XQ())
      }, wX.c.apply(UU, arguments)
    }

    function zQ() {
      var UU = cz(hy()).domain([1, 10]);
      return UU.copy = function() {
        return UQ(UU, zQ()).base(UU.base())
      }, wX.c.apply(UU, arguments)
    }

    function cQ() {
      var UU = Fz(hy());
      return UU.copy = function() {
        return UQ(UU, cQ()).constant(UU.constant())
      }, wX.c.apply(UU, arguments)
    }

    function yQ() {
      var UU = Iz(hy());
      return UU.copy = function() {
        return UQ(UU, yQ()).exponent(UU.exponent())
      }, wX.c.apply(UU, arguments)
    }

    function QQ() {
      return yQ.apply(null, arguments).exponent(.5)
    }

    function AQ() {
      var UU = [],
        XU = ZX;

      function zU(zU) {
        if (null != zU && !isNaN(zU = +zU)) return XU((GU(UU, zU, 1) - 1) / (UU.length - 1))
      }
      return zU.domain = function(XU) {
        if (!arguments.length) return UU.slice();
        UU = [];
        for (let zU of XU) null == zU || isNaN(zU = +zU) || UU.push(zU);
        return UU.sort(NU), zU
      }, zU.interpolator = function(UU) {
        return arguments.length ? (XU = UU, zU) : XU
      }, zU.range = function() {
        return UU.map(((zU, cU) => XU(cU / (UU.length - 1))))
      }, zU.quantiles = function(XU) {
        return Array.from({
          length: XU + 1
        }, ((zU, cU) => Wz(UU, cU / XU)))
      }, zU.copy = function() {
        return AQ(XU).domain(UU)
      }, wX.c.apply(zU, arguments)
    }

    function FQ() {
      var UU, XU, zU, cU, yU, QU, AU, FU = 0,
        oU = .5,
        DU = 1,
        EU = 1,
        YU = ZX,
        NU = !1;

      function IU(UU) {
        return isNaN(UU = +UU) ? AU : (UU = .5 + ((UU = +QU(UU)) - XU) * (EU * UU < EU * XU ? cU : yU), YU(NU ? Math.max(0, Math.min(1, UU)) : UU))
      }

      function pU(UU) {
        return function(XU) {
          var zU, cU, yU;
          return arguments.length ? ([zU, cU, yU] = XU, YU = function(UU, XU) {
            void 0 === XU && (XU = UU, UU = gX);
            for (var zU = 0, cU = XU.length - 1, yU = XU[0], QU = new Array(cU < 0 ? 0 : cU); zU < cU;) QU[zU] = UU(yU, yU = XU[++zU]);
            return function(UU) {
              var XU = Math.max(0, Math.min(cU - 1, Math.floor(UU *= cU)));
              return QU[XU](UU - XU)
            }
          }(UU, [zU, cU, yU]), IU) : [YU(0), YU(.5), YU(1)]
        }
      }
      return IU.domain = function(AU) {
          return arguments.length ? ([FU, oU, DU] = AU, UU = QU(FU = +FU), XU = QU(oU = +oU), zU = QU(DU = +DU), cU = UU === XU ? 0 : .5 / (XU - UU), yU = XU === zU ? 0 : .5 / (zU - XU), EU = XU < UU ? -1 : 1, IU) : [FU, oU, DU]
        }, IU.clamp = function(UU) {
          return arguments.length ? (NU = !!UU, IU) : NU
        }, IU.interpolator = function(UU) {
          return arguments.length ? (YU = UU, IU) : YU
        }, IU.range = pU(gX), IU.rangeRound = pU(kX), IU.unknown = function(UU) {
          return arguments.length ? (AU = UU, IU) : AU
        },
        function(AU) {
          return QU = AU, UU = AU(FU), XU = AU(oU), zU = AU(DU), cU = UU === XU ? 0 : .5 / (XU - UU), yU = XU === zU ? 0 : .5 / (zU - XU), EU = XU < UU ? -1 : 1, IU
        }
    }

    function oQ() {
      var UU = xX(FQ()(ZX));
      return UU.copy = function() {
        return UQ(UU, oQ())
      }, wX.c.apply(UU, arguments)
    }

    function DQ() {
      var UU = cz(FQ()).domain([.1, 1, 10]);
      return UU.copy = function() {
        return UQ(UU, DQ()).base(UU.base())
      }, wX.c.apply(UU, arguments)
    }

    function EQ() {
      var UU = Fz(FQ());
      return UU.copy = function() {
        return UQ(UU, EQ()).constant(UU.constant())
      }, wX.c.apply(UU, arguments)
    }

    function YQ() {
      var UU = Iz(FQ());
      return UU.copy = function() {
        return UQ(UU, YQ()).exponent(UU.exponent())
      }, wX.c.apply(UU, arguments)
    }

    function NQ() {
      return YQ.apply(null, arguments).exponent(.5)
    }

    function IQ(UU, XU) {
      if ((yU = UU.length) > 1)
        for (var zU, cU, yU, QU = 1, AU = UU[XU[0]], FU = AU.length; QU < yU; ++QU)
          for (cU = AU, AU = UU[XU[QU]], zU = 0; zU < FU; ++zU) AU[zU][1] += AU[zU][0] = isNaN(cU[zU][1]) ? cU[zU][0] : cU[zU][1]
    }! function(UU) {
      Wc = function(UU) {
        var XU = UU.dateTime,
          zU = UU.date,
          cU = UU.time,
          yU = UU.periods,
          QU = UU.days,
          AU = UU.shortDays,
          FU = UU.months,
          oU = UU.shortMonths,
          DU = rc(yU),
          EU = uc(yU),
          YU = rc(QU),
          NU = uc(QU),
          IU = rc(AU),
          pU = uc(AU),
          aU = rc(FU),
          tU = uc(FU),
          gU = rc(oU),
          kU = uc(oU),
          GU = {
            a: function(UU) {
              return AU[UU.getDay()]
            },
            A: function(UU) {
              return QU[UU.getDay()]
            },
            b: function(UU) {
              return oU[UU.getMonth()]
            },
            B: function(UU) {
              return FU[UU.getMonth()]
            },
            c: null,
            d: cy,
            e: cy,
            f: oy,
            g: Gy,
            G: Zy,
            H: yy,
            I: Qy,
            j: Ay,
            L: Fy,
            m: Dy,
            M: Ey,
            p: function(UU) {
              return yU[+(UU.getHours() >= 12)]
            },
            q: function(UU) {
              return 1 + ~~(UU.getMonth() / 3)
            },
            Q: ly,
            s: xy,
            S: Yy,
            u: Ny,
            U: Iy,
            V: ay,
            w: ty,
            W: gy,
            x: null,
            X: null,
            y: ky,
            Y: By,
            Z: Ry,
            "%": my
          },
          BU = {
            a: function(UU) {
              return AU[UU.getUTCDay()]
            },
            A: function(UU) {
              return QU[UU.getUTCDay()]
            },
            b: function(UU) {
              return oU[UU.getUTCMonth()]
            },
            B: function(UU) {
              return FU[UU.getUTCMonth()]
            },
            c: null,
            d: Py,
            e: Py,
            f: Cy,
            g: vy,
            G: sy,
            H: Wy,
            I: dy,
            j: Ly,
            L: ey,
            m: wy,
            M: qy,
            p: function(UU) {
              return yU[+(UU.getUTCHours() >= 12)]
            },
            q: function(UU) {
              return 1 + ~~(UU.getUTCMonth() / 3)
            },
            Q: ly,
            s: xy,
            S: Oy,
            u: Sy,
            U: ry,
            V: fy,
            w: iy,
            W: Hy,
            x: null,
            X: null,
            y: My,
            Y: Vy,
            Z: ny,
            "%": my
          },
          ZU = {
            a: function(UU, XU, zU) {
              var cU = IU.exec(XU.slice(zU));
              return cU ? (UU.w = pU.get(cU[0].toLowerCase()), zU + cU[0].length) : -1
            },
            A: function(UU, XU, zU) {
              var cU = YU.exec(XU.slice(zU));
              return cU ? (UU.w = NU.get(cU[0].toLowerCase()), zU + cU[0].length) : -1
            },
            b: function(UU, XU, zU) {
              var cU = gU.exec(XU.slice(zU));
              return cU ? (UU.m = kU.get(cU[0].toLowerCase()), zU + cU[0].length) : -1
            },
            B: function(UU, XU, zU) {
              var cU = aU.exec(XU.slice(zU));
              return cU ? (UU.m = tU.get(cU[0].toLowerCase()), zU + cU[0].length) : -1
            },
            c: function(UU, zU, cU) {
              return WU(UU, XU, zU, cU)
            },
            d: xc,
            e: xc,
            f: hc,
            g: sc,
            G: Vc,
            H: jc,
            I: jc,
            j: Jc,
            L: Tc,
            m: lc,
            M: Kc,
            p: function(UU, XU, zU) {
              var cU = DU.exec(XU.slice(zU));
              return cU ? (UU.p = EU.get(cU[0].toLowerCase()), zU + cU[0].length) : -1
            },
            q: mc,
            Q: Xy,
            s: zy,
            S: bc,
            u: ic,
            U: Hc,
            V: Mc,
            w: fc,
            W: vc,
            x: function(UU, XU, cU) {
              return WU(UU, zU, XU, cU)
            },
            X: function(UU, XU, zU) {
              return WU(UU, cU, XU, zU)
            },
            y: sc,
            Y: Vc,
            Z: nc,
            "%": Uy
          };

        function RU(UU, XU) {
          return function(zU) {
            var cU, yU, QU, AU = [],
              FU = -1,
              oU = 0,
              DU = UU.length;
            for (zU instanceof Date || (zU = new Date(+zU)); ++FU < DU;) 37 === UU.charCodeAt(FU) && (AU.push(UU.slice(oU, FU)), null != (yU = ec[cU = UU.charAt(++FU)]) ? cU = UU.charAt(++FU) : yU = "e" === cU ? " " : "0", (QU = XU[cU]) && (cU = QU(zU, yU)), AU.push(cU), oU = FU + 1);
            return AU.push(UU.slice(oU, FU)), AU.join("")
          }
        }

        function PU(UU, XU) {
          return function(zU) {
            var cU, yU, QU = Pc(1900, void 0, 1);
            if (WU(QU, UU, zU += "", 0) != zU.length) return null;
            if ("Q" in QU) return new Date(QU.Q);
            if ("s" in QU) return new Date(1e3 * QU.s + ("L" in QU ? QU.L : 0));
            if (XU && !("Z" in QU) && (QU.Z = 0), "p" in QU && (QU.H = QU.H % 12 + 12 * QU.p), void 0 === QU.m && (QU.m = "q" in QU ? QU.q : 0), "V" in QU) {
              if (QU.V < 1 || QU.V > 53) return null;
              "w" in QU || (QU.w = 1), "Z" in QU ? (yU = (cU = Rc(Pc(QU.y, 0, 1))).getUTCDay(), cU = yU > 4 || 0 === yU ? Ac.ceil(cU) : Ac(cU), cU = Jz.offset(cU, 7 * (QU.V - 1)), QU.y = cU.getUTCFullYear(), QU.m = cU.getUTCMonth(), QU.d = cU.getUTCDate() + (QU.w + 6) % 7) : (yU = (cU = Zc(Pc(QU.y, 0, 1))).getDay(), cU = yU > 4 || 0 === yU ? Tz.ceil(cU) : Tz(cU), cU = xz.offset(cU, 7 * (QU.V - 1)), QU.y = cU.getFullYear(), QU.m = cU.getMonth(), QU.d = cU.getDate() + (QU.w + 6) % 7)
            } else("W" in QU || "U" in QU) && ("w" in QU || (QU.w = "u" in QU ? QU.u % 7 : "W" in QU ? 1 : 0), yU = "Z" in QU ? Rc(Pc(QU.y, 0, 1)).getUTCDay() : Zc(Pc(QU.y, 0, 1)).getDay(), QU.m = 0, QU.d = "W" in QU ? (QU.w + 6) % 7 + 7 * QU.W - (yU + 5) % 7 : QU.w + 7 * QU.U - (yU + 6) % 7);
            return "Z" in QU ? (QU.H += QU.Z / 100 | 0, QU.M += QU.Z % 100, Rc(QU)) : Zc(QU)
          }
        }

        function WU(UU, XU, zU, cU) {
          for (var yU, QU, AU = 0, FU = XU.length, oU = zU.length; AU < FU;) {
            if (cU >= oU) return -1;
            if (37 === (yU = XU.charCodeAt(AU++))) {
              if (yU = XU.charAt(AU++), !(QU = ZU[yU in ec ? XU.charAt(AU++) : yU]) || (cU = QU(UU, zU, cU)) < 0) return -1
            } else if (yU != zU.charCodeAt(cU++)) return -1
          }
          return cU
        }
        return GU.x = RU(zU, GU), GU.X = RU(cU, GU), GU.c = RU(XU, GU), BU.x = RU(zU, BU), BU.X = RU(cU, BU), BU.c = RU(XU, BU), {
          format: function(UU) {
            var XU = RU(UU += "", GU);
            return XU.toString = function() {
              return UU
            }, XU
          },
          parse: function(UU) {
            var XU = PU(UU += "", !1);
            return XU.toString = function() {
              return UU
            }, XU
          },
          utcFormat: function(UU) {
            var XU = RU(UU += "", BU);
            return XU.toString = function() {
              return UU
            }, XU
          },
          utcParse: function(UU) {
            var XU = PU(UU += "", !0);
            return XU.toString = function() {
              return UU
            }, XU
          }
        }
      }(UU), dc = Wc.format, Wc.parse, Lc = Wc.utcFormat, Wc.utcParse
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
    var pQ = zU(6813),
      aQ = zU(6715);

    function tQ(UU) {
      for (var XU = UU.length, zU = new Array(XU); --XU >= 0;) zU[XU] = XU;
      return zU
    }

    function gQ(UU, XU) {
      return UU[XU]
    }

    function kQ(UU) {
      const XU = [];
      return XU.key = UU, XU
    }
    var GQ = zU(6766),
      BQ = zU.n(GQ),
      ZQ = zU(6781),
      RQ = zU.n(ZQ),
      PQ = zU(5987),
      WQ = zU.n(PQ),
      dQ = zU(5845),
      LQ = zU.n(dQ),
      eQ = zU(5751),
      CQ = zU.n(eQ),
      wQ = zU(5781),
      qQ = zU.n(wQ),
      OQ = zU(6788),
      SQ = zU.n(OQ),
      rQ = zU(5767),
      uQ = zU.n(rQ),
      fQ = zU(6679),
      iQ = zU.n(fQ),
      HQ = zU(6797),
      MQ = zU.n(HQ),
      vQ = zU(6079),
      VQ = zU.n(vQ),
      sQ = zU(6802),
      nQ = zU.n(sQ);

    function mQ(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return lQ(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(UU)) return Array.from(UU)
      }(UU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return lQ(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return lQ(UU, XU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lQ(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }
    var xQ = function(UU) {
        return UU
      },
      JQ = {
        "@@functional/placeholder": !0
      },
      jQ = function(UU) {
        return UU === JQ
      },
      KQ = function(UU) {
        return function XU() {
          return 0 === arguments.length || 1 === arguments.length && jQ(arguments.length <= 0 ? void 0 : arguments[0]) ? XU : UU.apply(void 0, arguments)
        }
      },
      bQ = function UU(XU, zU) {
        return 1 === XU ? zU : KQ((function() {
          for (var cU = arguments.length, yU = new Array(cU), QU = 0; QU < cU; QU++) yU[QU] = arguments[QU];
          var AU = yU.filter((function(UU) {
            return UU !== JQ
          })).length;
          return AU >= XU ? zU.apply(void 0, yU) : UU(XU - AU, KQ((function() {
            for (var UU = arguments.length, XU = new Array(UU), cU = 0; cU < UU; cU++) XU[cU] = arguments[cU];
            var QU = yU.map((function(UU) {
              return jQ(UU) ? XU.shift() : UU
            }));
            return zU.apply(void 0, mQ(QU).concat(XU))
          })))
        }))
      },
      TQ = function(UU) {
        return bQ(UU.length, UU)
      },
      hQ = function(UU, XU) {
        for (var zU = [], cU = UU; cU < XU; ++cU) zU[cU - UU] = cU;
        return zU
      },
      UA = TQ((function(UU, XU) {
        return Array.isArray(XU) ? XU.map(UU) : Object.keys(XU).map((function(UU) {
          return XU[UU]
        })).map(UU)
      })),
      XA = function() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        if (!XU.length) return xQ;
        var cU = XU.reverse(),
          yU = cU[0],
          QU = cU.slice(1);
        return function() {
          return QU.reduce((function(UU, XU) {
            return XU(UU)
          }), yU.apply(void 0, arguments))
        }
      },
      zA = function(UU) {
        return Array.isArray(UU) ? UU.reverse() : UU.split("").reverse.join("")
      },
      cA = function(UU) {
        var XU = null,
          zU = null;
        return function() {
          for (var cU = arguments.length, yU = new Array(cU), QU = 0; QU < cU; QU++) yU[QU] = arguments[QU];
          return XU && yU.every((function(UU, zU) {
            return UU === XU[zU]
          })) ? zU : (XU = yU, zU = UU.apply(void 0, yU))
        }
      };
    const yA = {
      rangeStep: function(UU, XU, zU) {
        for (var cU = new(nQ())(UU), yU = 0, QU = []; cU.lt(XU) && yU < 1e5;) QU.push(cU.toNumber()), cU = cU.add(zU), yU++;
        return QU
      },
      getDigitCount: function(UU) {
        return 0 === UU ? 1 : Math.floor(new(nQ())(UU).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: TQ((function(UU, XU, zU) {
        var cU = +UU;
        return cU + zU * (+XU - cU)
      })),
      uninterpolateNumber: TQ((function(UU, XU, zU) {
        var cU = XU - +UU;
        return (zU - UU) / (cU = cU || 1 / 0)
      })),
      uninterpolateTruncation: TQ((function(UU, XU, zU) {
        var cU = XU - +UU;
        return cU = cU || 1 / 0, Math.max(0, Math.min(1, (zU - UU) / cU))
      }))
    };

    function QA(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return oA(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(UU)) return Array.from(UU)
      }(UU) || FA(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AA(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(UU))) return;
        var zU = [],
          cU = !0,
          yU = !1,
          QU = void 0;
        try {
          for (var AU, FU = UU[Symbol.iterator](); !(cU = (AU = FU.next()).done) && (zU.push(AU.value), !XU || zU.length !== XU); cU = !0);
        } catch (oU) {
          yU = !0, QU = oU
        } finally {
          try {
            cU || null == FU.return || FU.return()
          } finally {
            if (yU) throw QU
          }
        }
        return zU
      }(UU, XU) || FA(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function FA(UU, XU) {
      if (UU) {
        if ("string" === typeof UU) return oA(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        return "Object" === zU && UU.constructor && (zU = UU.constructor.name), "Map" === zU || "Set" === zU ? Array.from(UU) : "Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU) ? oA(UU, XU) : void 0
      }
    }

    function oA(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function DA(UU) {
      var XU = AA(UU, 2),
        zU = XU[0],
        cU = XU[1],
        yU = zU,
        QU = cU;
      return zU > cU && (yU = cU, QU = zU), [yU, QU]
    }

    function EA(UU, XU, zU) {
      if (UU.lte(0)) return new(nQ())(0);
      var cU = yA.getDigitCount(UU.toNumber()),
        yU = new(nQ())(10).pow(cU),
        QU = UU.div(yU),
        AU = 1 !== cU ? .05 : .1,
        FU = new(nQ())(Math.ceil(QU.div(AU).toNumber())).add(zU).mul(AU).mul(yU);
      return XU ? FU : new(nQ())(Math.ceil(FU))
    }

    function YA(UU, XU, zU) {
      var cU = 1,
        yU = new(nQ())(UU);
      if (!yU.isint() && zU) {
        var QU = Math.abs(UU);
        QU < 1 ? (cU = new(nQ())(10).pow(yA.getDigitCount(UU) - 1), yU = new(nQ())(Math.floor(yU.div(cU).toNumber())).mul(cU)) : QU > 1 && (yU = new(nQ())(Math.floor(UU)))
      } else 0 === UU ? yU = new(nQ())(Math.floor((XU - 1) / 2)) : zU || (yU = new(nQ())(Math.floor(UU)));
      var AU = Math.floor((XU - 1) / 2);
      return XA(UA((function(UU) {
        return yU.add(new(nQ())(UU - AU).mul(cU)).toNumber()
      })), hQ)(0, XU)
    }

    function NA(UU, XU, zU, cU) {
      var yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((XU - UU) / (zU - 1))) return {
        step: new(nQ())(0),
        tickMin: new(nQ())(0),
        tickMax: new(nQ())(0)
      };
      var QU, AU = EA(new(nQ())(XU).sub(UU).div(zU - 1), cU, yU);
      QU = UU <= 0 && XU >= 0 ? new(nQ())(0) : (QU = new(nQ())(UU).add(XU).div(2)).sub(new(nQ())(QU).mod(AU));
      var FU = Math.ceil(QU.sub(UU).div(AU).toNumber()),
        oU = Math.ceil(new(nQ())(XU).sub(QU).div(AU).toNumber()),
        DU = FU + oU + 1;
      return DU > zU ? NA(UU, XU, zU, cU, yU + 1) : (DU < zU && (oU = XU > 0 ? oU + (zU - DU) : oU, FU = XU > 0 ? FU : FU + (zU - DU)), {
        step: AU,
        tickMin: QU.sub(new(nQ())(FU).mul(AU)),
        tickMax: QU.add(new(nQ())(oU).mul(AU))
      })
    }
    var IA = cA((function(UU) {
        var XU = AA(UU, 2),
          zU = XU[0],
          cU = XU[1],
          yU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          QU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          AU = Math.max(yU, 2),
          FU = AA(DA([zU, cU]), 2),
          oU = FU[0],
          DU = FU[1];
        if (oU === -1 / 0 || DU === 1 / 0) {
          var EU = DU === 1 / 0 ? [oU].concat(QA(hQ(0, yU - 1).map((function() {
            return 1 / 0
          })))) : [].concat(QA(hQ(0, yU - 1).map((function() {
            return -1 / 0
          }))), [DU]);
          return zU > cU ? zA(EU) : EU
        }
        if (oU === DU) return YA(oU, yU, QU);
        var YU = NA(oU, DU, AU, QU),
          NU = YU.step,
          IU = YU.tickMin,
          pU = YU.tickMax,
          aU = yA.rangeStep(IU, pU.add(new(nQ())(.1).mul(NU)), NU);
        return zU > cU ? zA(aU) : aU
      })),
      pA = (cA((function(UU) {
        var XU = AA(UU, 2),
          zU = XU[0],
          cU = XU[1],
          yU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          QU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          AU = Math.max(yU, 2),
          FU = AA(DA([zU, cU]), 2),
          oU = FU[0],
          DU = FU[1];
        if (oU === -1 / 0 || DU === 1 / 0) return [zU, cU];
        if (oU === DU) return YA(oU, yU, QU);
        var EU = EA(new(nQ())(DU).sub(oU).div(AU - 1), QU, 0),
          YU = XA(UA((function(UU) {
            return new(nQ())(oU).add(new(nQ())(UU).mul(EU)).toNumber()
          })), hQ)(0, AU).filter((function(UU) {
            return UU >= oU && UU <= DU
          }));
        return zU > cU ? zA(YU) : YU
      })), cA((function(UU, XU) {
        var zU = AA(UU, 2),
          cU = zU[0],
          yU = zU[1],
          QU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          AU = AA(DA([cU, yU]), 2),
          FU = AU[0],
          oU = AU[1];
        if (FU === -1 / 0 || oU === 1 / 0) return [cU, yU];
        if (FU === oU) return [FU];
        var DU = Math.max(XU, 2),
          EU = EA(new(nQ())(oU).sub(FU).div(DU - 1), QU, 0),
          YU = [].concat(QA(yA.rangeStep(new(nQ())(FU), new(nQ())(oU).sub(new(nQ())(.99).mul(EU)), EU)), [oU]);
        return cU > yU ? zA(YU) : YU
      }))),
      aA = zU(6805),
      tA = zU(5746),
      gA = zU(5998),
      kA = zU(6810);

    function GA(UU) {
      return GA = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, GA(UU)
    }

    function BA(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return ZA(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || function(UU, XU) {
        if (!UU) return;
        if ("string" === typeof UU) return ZA(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        "Object" === zU && UU.constructor && (zU = UU.constructor.name);
        if ("Map" === zU || "Set" === zU) return Array.from(UU);
        if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return ZA(UU, XU)
      }(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ZA(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function RA(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function PA(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? RA(Object(zU), !0).forEach((function(XU) {
          WA(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : RA(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function WA(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != GA(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != GA(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == GA(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function dA(UU, XU, zU) {
      return WQ()(UU) || WQ()(XU) ? zU : (0, tA.A)(XU) ? qQ()(UU, XU, zU) : LQ()(XU) ? XU(UU) : zU
    }

    function LA(UU, XU, zU, cU) {
      var yU = SQ()(UU, (function(UU) {
        return dA(UU, XU)
      }));
      if ("number" === zU) {
        var QU = yU.filter((function(UU) {
          return (0, tA.B)(UU) || parseFloat(UU)
        }));
        return QU.length ? [RQ()(QU), BQ()(QU)] : [1 / 0, -1 / 0]
      }
      return (cU ? yU.filter((function(UU) {
        return !WQ()(UU)
      })) : yU).map((function(UU) {
        return (0, tA.A)(UU) || UU instanceof Date ? UU : ""
      }))
    }
    var eA = function(UU) {
        var XU, zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          cU = arguments.length > 2 ? arguments[2] : void 0,
          yU = arguments.length > 3 ? arguments[3] : void 0,
          QU = -1,
          AU = null !== (XU = null === zU || void 0 === zU ? void 0 : zU.length) && void 0 !== XU ? XU : 0;
        if (AU <= 1) return 0;
        if (yU && "angleAxis" === yU.axisType && Math.abs(Math.abs(yU.range[1] - yU.range[0]) - 360) <= 1e-6)
          for (var FU = yU.range, oU = 0; oU < AU; oU++) {
            var DU = oU > 0 ? cU[oU - 1].coordinate : cU[AU - 1].coordinate,
              EU = cU[oU].coordinate,
              YU = oU >= AU - 1 ? cU[0].coordinate : cU[oU + 1].coordinate,
              NU = void 0;
            if ((0, tA.H)(EU - DU) !== (0, tA.H)(YU - EU)) {
              var IU = [];
              if ((0, tA.H)(YU - EU) === (0, tA.H)(FU[1] - FU[0])) {
                NU = YU;
                var pU = EU + FU[1] - FU[0];
                IU[0] = Math.min(pU, (pU + DU) / 2), IU[1] = Math.max(pU, (pU + DU) / 2)
              } else {
                NU = DU;
                var aU = YU + FU[1] - FU[0];
                IU[0] = Math.min(EU, (aU + EU) / 2), IU[1] = Math.max(EU, (aU + EU) / 2)
              }
              var tU = [Math.min(EU, (NU + EU) / 2), Math.max(EU, (NU + EU) / 2)];
              if (UU > tU[0] && UU <= tU[1] || UU >= IU[0] && UU <= IU[1]) {
                QU = cU[oU].index;
                break
              }
            } else {
              var gU = Math.min(DU, YU),
                kU = Math.max(DU, YU);
              if (UU > (gU + EU) / 2 && UU <= (kU + EU) / 2) {
                QU = cU[oU].index;
                break
              }
            }
          } else
            for (var GU = 0; GU < AU; GU++)
              if (0 === GU && UU <= (zU[GU].coordinate + zU[GU + 1].coordinate) / 2 || GU > 0 && GU < AU - 1 && UU > (zU[GU].coordinate + zU[GU - 1].coordinate) / 2 && UU <= (zU[GU].coordinate + zU[GU + 1].coordinate) / 2 || GU === AU - 1 && UU > (zU[GU].coordinate + zU[GU - 1].coordinate) / 2) {
                QU = zU[GU].index;
                break
              } return QU
      },
      CA = function(UU) {
        var XU, zU, cU = UU.type.displayName,
          yU = null !== (XU = UU.type) && void 0 !== XU && XU.defaultProps ? PA(PA({}, UU.type.defaultProps), UU.props) : UU.props,
          QU = yU.stroke,
          AU = yU.fill;
        switch (cU) {
          case "Line":
            zU = QU;
            break;
          case "Area":
          case "Radar":
            zU = QU && "none" !== QU ? QU : AU;
            break;
          default:
            zU = AU
        }
        return zU
      },
      wA = function(UU) {
        var XU = UU.barSize,
          zU = UU.totalSize,
          cU = UU.stackGroups,
          yU = void 0 === cU ? {} : cU;
        if (!yU) return {};
        for (var QU = {}, AU = Object.keys(yU), FU = 0, oU = AU.length; FU < oU; FU++)
          for (var DU = yU[AU[FU]].stackGroups, EU = Object.keys(DU), YU = 0, NU = EU.length; YU < NU; YU++) {
            var IU = DU[EU[YU]],
              pU = IU.items,
              aU = IU.cateAxisId,
              tU = pU.filter((function(UU) {
                return (0, gA.f)(UU.type).indexOf("Bar") >= 0
              }));
            if (tU && tU.length) {
              var gU = tU[0].type.defaultProps,
                kU = void 0 !== gU ? PA(PA({}, gU), tU[0].props) : tU[0].props,
                GU = kU.barSize,
                BU = kU[aU];
              QU[BU] || (QU[BU] = []);
              var ZU = WQ()(GU) ? XU : GU;
              QU[BU].push({
                item: tU[0],
                stackList: tU.slice(1),
                barSize: WQ()(ZU) ? void 0 : (0, tA.q)(ZU, zU, 0)
              })
            }
          }
        return QU
      },
      qA = function(UU) {
        var XU = UU.barGap,
          zU = UU.barCategoryGap,
          cU = UU.bandSize,
          yU = UU.sizeList,
          QU = void 0 === yU ? [] : yU,
          AU = UU.maxBarSize,
          FU = QU.length;
        if (FU < 1) return null;
        var oU, DU = (0, tA.q)(XU, cU, 0, !0),
          EU = [];
        if (QU[0].barSize === +QU[0].barSize) {
          var YU = !1,
            NU = cU / FU,
            IU = QU.reduce((function(UU, XU) {
              return UU + XU.barSize || 0
            }), 0);
          (IU += (FU - 1) * DU) >= cU && (IU -= (FU - 1) * DU, DU = 0), IU >= cU && NU > 0 && (YU = !0, IU = FU * (NU *= .9));
          var pU = {
            offset: ((cU - IU) / 2 | 0) - DU,
            size: 0
          };
          oU = QU.reduce((function(UU, XU) {
            var zU = {
                item: XU.item,
                position: {
                  offset: pU.offset + pU.size + DU,
                  size: YU ? NU : XU.barSize
                }
              },
              cU = [].concat(BA(UU), [zU]);
            return pU = cU[cU.length - 1].position, XU.stackList && XU.stackList.length && XU.stackList.forEach((function(UU) {
              cU.push({
                item: UU,
                position: pU
              })
            })), cU
          }), EU)
        } else {
          var aU = (0, tA.q)(zU, cU, 0, !0);
          cU - 2 * aU - (FU - 1) * DU <= 0 && (DU = 0);
          var tU = (cU - 2 * aU - (FU - 1) * DU) / FU;
          tU > 1 && (tU >>= 0);
          var gU = AU === +AU ? Math.min(tU, AU) : tU;
          oU = QU.reduce((function(UU, XU, zU) {
            var cU = [].concat(BA(UU), [{
              item: XU.item,
              position: {
                offset: aU + (tU + DU) * zU + (tU - gU) / 2,
                size: gU
              }
            }]);
            return XU.stackList && XU.stackList.length && XU.stackList.forEach((function(UU) {
              cU.push({
                item: UU,
                position: cU[cU.length - 1].position
              })
            })), cU
          }), EU)
        }
        return oU
      },
      OA = function(UU, XU, zU, cU) {
        var yU = zU.children,
          QU = zU.width,
          AU = zU.margin,
          FU = QU - (AU.left || 0) - (AU.right || 0),
          oU = (0, kA.b)({
            children: yU,
            legendWidth: FU
          });
        if (oU) {
          var DU = cU || {},
            EU = DU.width,
            YU = DU.height,
            NU = oU.align,
            IU = oU.verticalAlign,
            pU = oU.layout;
          if (("vertical" === pU || "horizontal" === pU && "middle" === IU) && "center" !== NU && (0, tA.B)(UU[NU])) return PA(PA({}, UU), {}, WA({}, NU, UU[NU] + (EU || 0)));
          if (("horizontal" === pU || "vertical" === pU && "center" === NU) && "middle" !== IU && (0, tA.B)(UU[IU])) return PA(PA({}, UU), {}, WA({}, IU, UU[IU] + (YU || 0)))
        }
        return UU
      },
      SA = function(UU, XU, zU, cU, yU) {
        var QU = XU.props.children,
          AU = (0, gA.d)(QU, aA.b).filter((function(UU) {
            return function(UU, XU, zU) {
              return !!WQ()(XU) || ("horizontal" === UU ? "yAxis" === XU : "vertical" === UU || "x" === zU ? "xAxis" === XU : "y" !== zU || "yAxis" === XU)
            }(cU, yU, UU.props.direction)
          }));
        if (AU && AU.length) {
          var FU = AU.map((function(UU) {
            return UU.props.dataKey
          }));
          return UU.reduce((function(UU, XU) {
            var cU = dA(XU, zU);
            if (WQ()(cU)) return UU;
            var yU = Array.isArray(cU) ? [RQ()(cU), BQ()(cU)] : [cU, cU],
              QU = FU.reduce((function(UU, zU) {
                var cU = dA(XU, zU, 0),
                  QU = yU[0] - Math.abs(Array.isArray(cU) ? cU[0] : cU),
                  AU = yU[1] + Math.abs(Array.isArray(cU) ? cU[1] : cU);
                return [Math.min(QU, UU[0]), Math.max(AU, UU[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(QU[0], UU[0]), Math.max(QU[1], UU[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      rA = function(UU, XU, zU, cU, yU) {
        var QU = XU.map((function(XU) {
          return SA(UU, XU, zU, yU, cU)
        })).filter((function(UU) {
          return !WQ()(UU)
        }));
        return QU && QU.length ? QU.reduce((function(UU, XU) {
          return [Math.min(UU[0], XU[0]), Math.max(UU[1], XU[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      uA = function(UU, XU, zU, cU, yU) {
        var QU = XU.map((function(XU) {
          var QU = XU.props.dataKey;
          return "number" === zU && QU && SA(UU, XU, QU, cU) || LA(UU, QU, zU, yU)
        }));
        if ("number" === zU) return QU.reduce((function(UU, XU) {
          return [Math.min(UU[0], XU[0]), Math.max(UU[1], XU[1])]
        }), [1 / 0, -1 / 0]);
        var AU = {};
        return QU.reduce((function(UU, XU) {
          for (var zU = 0, cU = XU.length; zU < cU; zU++) AU[XU[zU]] || (AU[XU[zU]] = !0, UU.push(XU[zU]));
          return UU
        }), [])
      },
      fA = function(UU, XU) {
        return "horizontal" === UU && "xAxis" === XU || "vertical" === UU && "yAxis" === XU || "centric" === UU && "angleAxis" === XU || "radial" === UU && "radiusAxis" === XU
      },
      iA = function(UU, XU, zU, cU) {
        if (cU) return UU.map((function(UU) {
          return UU.coordinate
        }));
        var yU, QU, AU = UU.map((function(UU) {
          return UU.coordinate === XU && (yU = !0), UU.coordinate === zU && (QU = !0), UU.coordinate
        }));
        return yU || AU.push(XU), QU || AU.push(zU), AU
      },
      HA = function(UU, XU, zU) {
        if (!UU) return null;
        var cU = UU.scale,
          yU = UU.duplicateDomain,
          QU = UU.type,
          AU = UU.range,
          FU = "scaleBand" === UU.realScaleType ? cU.bandwidth() / 2 : 2,
          oU = (XU || zU) && "category" === QU && cU.bandwidth ? cU.bandwidth() / FU : 0;
        return oU = "angleAxis" === UU.axisType && (null === AU || void 0 === AU ? void 0 : AU.length) >= 2 ? 2 * (0, tA.H)(AU[0] - AU[1]) * oU : oU, XU && (UU.ticks || UU.niceTicks) ? (UU.ticks || UU.niceTicks).map((function(UU) {
          var XU = yU ? yU.indexOf(UU) : UU;
          return {
            coordinate: cU(XU) + oU,
            value: UU,
            offset: oU
          }
        })).filter((function(UU) {
          return !uQ()(UU.coordinate)
        })) : UU.isCategorical && UU.categoricalDomain ? UU.categoricalDomain.map((function(UU, XU) {
          return {
            coordinate: cU(UU) + oU,
            value: UU,
            index: XU,
            offset: oU
          }
        })) : cU.ticks && !zU ? cU.ticks(UU.tickCount).map((function(UU) {
          return {
            coordinate: cU(UU) + oU,
            value: UU,
            offset: oU
          }
        })) : cU.domain().map((function(UU, XU) {
          return {
            coordinate: cU(UU) + oU,
            value: yU ? yU[UU] : UU,
            index: XU,
            offset: oU
          }
        }))
      },
      MA = new WeakMap,
      vA = function(UU, XU) {
        if ("function" !== typeof XU) return UU;
        MA.has(UU) || MA.set(UU, new WeakMap);
        var zU = MA.get(UU);
        if (zU.has(XU)) return zU.get(XU);
        var cU = function() {
          UU.apply(void 0, arguments), XU.apply(void 0, arguments)
        };
        return zU.set(XU, cU), cU
      },
      VA = function(UU, XU, zU) {
        var QU = UU.scale,
          AU = UU.type,
          FU = UU.layout,
          oU = UU.axisType;
        if ("auto" === QU) return "radial" === FU && "radiusAxis" === oU ? {
          scale: yU.e(),
          realScaleType: "band"
        } : "radial" === FU && "angleAxis" === oU ? {
          scale: JX(),
          realScaleType: "linear"
        } : "category" === AU && XU && (XU.indexOf("LineChart") >= 0 || XU.indexOf("AreaChart") >= 0 || XU.indexOf("ComposedChart") >= 0 && !zU) ? {
          scale: yU.h(),
          realScaleType: "point"
        } : "category" === AU ? {
          scale: yU.e(),
          realScaleType: "band"
        } : {
          scale: JX(),
          realScaleType: "linear"
        };
        if (CQ()(QU)) {
          var DU = "scale".concat(iQ()(QU));
          return {
            scale: (cU[DU] || yU.h)(),
            realScaleType: cU[DU] ? DU : "point"
          }
        }
        return LQ()(QU) ? {
          scale: QU
        } : {
          scale: yU.h(),
          realScaleType: "point"
        }
      },
      sA = 1e-4,
      nA = function(UU) {
        var XU = UU.domain();
        if (XU && !(XU.length <= 2)) {
          var zU = XU.length,
            cU = UU.range(),
            yU = Math.min(cU[0], cU[1]) - sA,
            QU = Math.max(cU[0], cU[1]) + sA,
            AU = UU(XU[0]),
            FU = UU(XU[zU - 1]);
          (AU < yU || AU > QU || FU < yU || FU > QU) && UU.domain([XU[0], XU[zU - 1]])
        }
      },
      mA = function(UU, XU) {
        if (!UU) return null;
        for (var zU = 0, cU = UU.length; zU < cU; zU++)
          if (UU[zU].item === XU) return UU[zU].position;
        return null
      },
      lA = function(UU, XU) {
        if (!XU || 2 !== XU.length || !(0, tA.B)(XU[0]) || !(0, tA.B)(XU[1])) return UU;
        var zU = Math.min(XU[0], XU[1]),
          cU = Math.max(XU[0], XU[1]),
          yU = [UU[0], UU[1]];
        return (!(0, tA.B)(UU[0]) || UU[0] < zU) && (yU[0] = zU), (!(0, tA.B)(UU[1]) || UU[1] > cU) && (yU[1] = cU), yU[0] > cU && (yU[0] = cU), yU[1] < zU && (yU[1] = zU), yU
      },
      xA = {
        sign: function(UU) {
          var XU = UU.length;
          if (!(XU <= 0))
            for (var zU = 0, cU = UU[0].length; zU < cU; ++zU)
              for (var yU = 0, QU = 0, AU = 0; AU < XU; ++AU) {
                var FU = uQ()(UU[AU][zU][1]) ? UU[AU][zU][0] : UU[AU][zU][1];
                FU >= 0 ? (UU[AU][zU][0] = yU, UU[AU][zU][1] = yU + FU, yU = UU[AU][zU][1]) : (UU[AU][zU][0] = QU, UU[AU][zU][1] = QU + FU, QU = UU[AU][zU][1])
              }
        },
        expand: function(UU, XU) {
          if ((cU = UU.length) > 0) {
            for (var zU, cU, yU, QU = 0, AU = UU[0].length; QU < AU; ++QU) {
              for (yU = zU = 0; zU < cU; ++zU) yU += UU[zU][QU][1] || 0;
              if (yU)
                for (zU = 0; zU < cU; ++zU) UU[zU][QU][1] /= yU
            }
            IQ(UU, XU)
          }
        },
        none: IQ,
        silhouette: function(UU, XU) {
          if ((zU = UU.length) > 0) {
            for (var zU, cU = 0, yU = UU[XU[0]], QU = yU.length; cU < QU; ++cU) {
              for (var AU = 0, FU = 0; AU < zU; ++AU) FU += UU[AU][cU][1] || 0;
              yU[cU][1] += yU[cU][0] = -FU / 2
            }
            IQ(UU, XU)
          }
        },
        wiggle: function(UU, XU) {
          if ((yU = UU.length) > 0 && (cU = (zU = UU[XU[0]]).length) > 0) {
            for (var zU, cU, yU, QU = 0, AU = 1; AU < cU; ++AU) {
              for (var FU = 0, oU = 0, DU = 0; FU < yU; ++FU) {
                for (var EU = UU[XU[FU]], YU = EU[AU][1] || 0, NU = (YU - (EU[AU - 1][1] || 0)) / 2, IU = 0; IU < FU; ++IU) {
                  var pU = UU[XU[IU]];
                  NU += (pU[AU][1] || 0) - (pU[AU - 1][1] || 0)
                }
                oU += YU, DU += NU * YU
              }
              zU[AU - 1][1] += zU[AU - 1][0] = QU, oU && (QU -= DU / oU)
            }
            zU[AU - 1][1] += zU[AU - 1][0] = QU, IQ(UU, XU)
          }
        },
        positive: function(UU) {
          var XU = UU.length;
          if (!(XU <= 0))
            for (var zU = 0, cU = UU[0].length; zU < cU; ++zU)
              for (var yU = 0, QU = 0; QU < XU; ++QU) {
                var AU = uQ()(UU[QU][zU][1]) ? UU[QU][zU][0] : UU[QU][zU][1];
                AU >= 0 ? (UU[QU][zU][0] = yU, UU[QU][zU][1] = yU + AU, yU = UU[QU][zU][1]) : (UU[QU][zU][0] = 0, UU[QU][zU][1] = 0)
              }
        }
      },
      JA = function(UU, XU, zU) {
        var cU = XU.map((function(UU) {
            return UU.props.dataKey
          })),
          yU = xA[zU],
          QU = function() {
            var UU = (0, aQ.b)([]),
              XU = tQ,
              zU = IQ,
              cU = gQ;

            function yU(yU) {
              var QU, AU, FU = Array.from(UU.apply(this, arguments), kQ),
                oU = FU.length,
                DU = -1;
              for (const UU of yU)
                for (QU = 0, ++DU; QU < oU; ++QU)(FU[QU][DU] = [0, +cU(UU, FU[QU].key, DU, yU)]).data = UU;
              for (QU = 0, AU = (0, pQ.d)(XU(FU)); QU < oU; ++QU) FU[AU[QU]].index = QU;
              return zU(FU, AU), FU
            }
            return yU.keys = function(XU) {
              return arguments.length ? (UU = "function" === typeof XU ? XU : (0, aQ.b)(Array.from(XU)), yU) : UU
            }, yU.value = function(UU) {
              return arguments.length ? (cU = "function" === typeof UU ? UU : (0, aQ.b)(+UU), yU) : cU
            }, yU.order = function(UU) {
              return arguments.length ? (XU = null == UU ? tQ : "function" === typeof UU ? UU : (0, aQ.b)(Array.from(UU)), yU) : XU
            }, yU.offset = function(UU) {
              return arguments.length ? (zU = null == UU ? IQ : UU, yU) : zU
            }, yU
          }().keys(cU).value((function(UU, XU) {
            return +dA(UU, XU, 0)
          })).order(tQ).offset(yU);
        return QU(UU)
      },
      jA = function(UU, XU, zU, cU, yU, QU) {
        if (!UU) return null;
        var AU = (QU ? XU.reverse() : XU).reduce((function(UU, XU) {
          var yU, QU = null !== (yU = XU.type) && void 0 !== yU && yU.defaultProps ? PA(PA({}, XU.type.defaultProps), XU.props) : XU.props,
            AU = QU.stackId;
          if (QU.hide) return UU;
          var FU = QU[zU],
            oU = UU[FU] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, tA.A)(AU)) {
            var DU = oU.stackGroups[AU] || {
              numericAxisId: zU,
              cateAxisId: cU,
              items: []
            };
            DU.items.push(XU), oU.hasStack = !0, oU.stackGroups[AU] = DU
          } else oU.stackGroups[(0, tA.J)("_stackId_")] = {
            numericAxisId: zU,
            cateAxisId: cU,
            items: [XU]
          };
          return PA(PA({}, UU), {}, WA({}, FU, oU))
        }), {});
        return Object.keys(AU).reduce((function(XU, QU) {
          var FU = AU[QU];
          if (FU.hasStack) {
            FU.stackGroups = Object.keys(FU.stackGroups).reduce((function(XU, QU) {
              var AU = FU.stackGroups[QU];
              return PA(PA({}, XU), {}, WA({}, QU, {
                numericAxisId: zU,
                cateAxisId: cU,
                items: AU.items,
                stackedData: JA(UU, AU.items, yU)
              }))
            }), {})
          }
          return PA(PA({}, XU), {}, WA({}, QU, FU))
        }), {})
      },
      KA = function(UU, XU) {
        var zU = XU.realScaleType,
          cU = XU.type,
          yU = XU.tickCount,
          QU = XU.originalDomain,
          AU = XU.allowDecimals,
          FU = zU || XU.scale;
        if ("auto" !== FU && "linear" !== FU) return null;
        if (yU && "number" === cU && QU && ("auto" === QU[0] || "auto" === QU[1])) {
          var oU = UU.domain();
          if (!oU.length) return null;
          var DU = IA(oU, yU, AU);
          return UU.domain([RQ()(DU), BQ()(DU)]), {
            niceTicks: DU
          }
        }
        if (yU && "number" === cU) {
          var EU = UU.domain();
          return {
            niceTicks: pA(EU, yU, AU)
          }
        }
        return null
      };

    function bA(UU) {
      var XU = UU.axis,
        zU = UU.ticks,
        cU = UU.bandSize,
        yU = UU.entry,
        QU = UU.index,
        AU = UU.dataKey;
      if ("category" === XU.type) {
        if (!XU.allowDuplicatedCategory && XU.dataKey && !WQ()(yU[XU.dataKey])) {
          var FU = (0, tA.e)(zU, "value", yU[XU.dataKey]);
          if (FU) return FU.coordinate + cU / 2
        }
        return zU[QU] ? zU[QU].coordinate + cU / 2 : null
      }
      var oU = dA(yU, WQ()(AU) ? XU.dataKey : AU);
      return WQ()(oU) ? null : XU.scale(oU)
    }
    var TA = function(UU) {
        var XU = UU.axis,
          zU = UU.ticks,
          cU = UU.offset,
          yU = UU.bandSize,
          QU = UU.entry,
          AU = UU.index;
        if ("category" === XU.type) return zU[AU] ? zU[AU].coordinate + cU : null;
        var FU = dA(QU, XU.dataKey, XU.domain[AU]);
        return WQ()(FU) ? null : XU.scale(FU) - yU / 2 + cU
      },
      hA = function(UU) {
        var XU = UU.numericAxis,
          zU = XU.scale.domain();
        if ("number" === XU.type) {
          var cU = Math.min(zU[0], zU[1]),
            yU = Math.max(zU[0], zU[1]);
          return cU <= 0 && yU >= 0 ? 0 : yU < 0 ? yU : cU
        }
        return zU[0]
      },
      UF = function(UU, XU) {
        var zU, cU = (null !== (zU = UU.type) && void 0 !== zU && zU.defaultProps ? PA(PA({}, UU.type.defaultProps), UU.props) : UU.props).stackId;
        if ((0, tA.A)(cU)) {
          var yU = XU[cU];
          if (yU) {
            var QU = yU.items.indexOf(UU);
            return QU >= 0 ? yU.stackedData[QU] : null
          }
        }
        return null
      },
      XF = function(UU, XU, zU) {
        return Object.keys(UU).reduce((function(cU, yU) {
          var QU = UU[yU].stackedData.reduce((function(UU, cU) {
            var yU = cU.slice(XU, zU + 1).reduce((function(UU, XU) {
              return [RQ()(XU.concat([UU[0]]).filter(tA.B)), BQ()(XU.concat([UU[1]]).filter(tA.B))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(UU[0], yU[0]), Math.max(UU[1], yU[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(QU[0], cU[0]), Math.max(QU[1], cU[1])]
        }), [1 / 0, -1 / 0]).map((function(UU) {
          return UU === 1 / 0 || UU === -1 / 0 ? 0 : UU
        }))
      },
      zF = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      cF = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      yF = function(UU, XU, zU) {
        if (LQ()(UU)) return UU(XU, zU);
        if (!Array.isArray(UU)) return XU;
        var cU = [];
        if ((0, tA.B)(UU[0])) cU[0] = zU ? UU[0] : Math.min(UU[0], XU[0]);
        else if (zF.test(UU[0])) {
          var yU = +zF.exec(UU[0])[1];
          cU[0] = XU[0] - yU
        } else LQ()(UU[0]) ? cU[0] = UU[0](XU[0]) : cU[0] = XU[0];
        if ((0, tA.B)(UU[1])) cU[1] = zU ? UU[1] : Math.max(UU[1], XU[1]);
        else if (cF.test(UU[1])) {
          var QU = +cF.exec(UU[1])[1];
          cU[1] = XU[1] + QU
        } else LQ()(UU[1]) ? cU[1] = UU[1](XU[1]) : cU[1] = XU[1];
        return cU
      },
      QF = function(UU, XU, zU) {
        if (UU && UU.scale && UU.scale.bandwidth) {
          var cU = UU.scale.bandwidth();
          if (!zU || cU > 0) return cU
        }
        if (UU && XU && XU.length >= 2) {
          for (var yU = VQ()(XU, (function(UU) {
              return UU.coordinate
            })), QU = 1 / 0, AU = 1, FU = yU.length; AU < FU; AU++) {
            var oU = yU[AU],
              DU = yU[AU - 1];
            QU = Math.min((oU.coordinate || 0) - (DU.coordinate || 0), QU)
          }
          return QU === 1 / 0 ? 0 : QU
        }
        return zU ? void 0 : 0
      },
      AF = function(UU, XU, zU) {
        return UU && UU.length ? MQ()(UU, qQ()(zU, "type.defaultProps.domain")) ? XU : UU : XU
      },
      FF = function(UU, XU) {
        var zU = UU.type.defaultProps ? PA(PA({}, UU.type.defaultProps), UU.props) : UU.props,
          cU = zU.dataKey,
          yU = zU.name,
          QU = zU.unit,
          AU = zU.formatter,
          FU = zU.tooltipType,
          oU = zU.chartType,
          DU = zU.hide;
        return PA(PA({}, (0, gA.c)(UU, !1)), {}, {
          dataKey: cU,
          unit: QU,
          formatter: AU,
          name: yU || cU,
          color: CA(UU),
          value: dA(XU, cU),
          type: FU,
          payload: XU,
          chartType: oU,
          hide: DU
        })
      }
  },
  6743: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => NU,
      g: () => YU
    });
    var cU = zU(6588);

    function yU(UU) {
      return yU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, yU(UU)
    }

    function QU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function AU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? QU(Object(zU), !0).forEach((function(XU) {
          FU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : QU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function FU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != yU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != yU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == yU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }
    var oU = {
        widthCache: {},
        cacheCount: 0
      },
      DU = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      EU = "recharts_measurement_span";
    var YU = function(UU) {
        var XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === UU || null === UU || cU.e.isSsr) return {
          width: 0,
          height: 0
        };
        var zU = function(UU) {
            var XU = AU({}, UU);
            return Object.keys(XU).forEach((function(UU) {
              XU[UU] || delete XU[UU]
            })), XU
          }(XU),
          yU = JSON.stringify({
            text: UU,
            copyStyle: zU
          });
        if (oU.widthCache[yU]) return oU.widthCache[yU];
        try {
          var QU = document.getElementById(EU);
          QU || ((QU = document.createElement("span")).setAttribute("id", EU), QU.setAttribute("aria-hidden", "true"), document.body.appendChild(QU));
          var FU = AU(AU({}, DU), zU);
          Object.assign(QU.style, FU), QU.textContent = "".concat(UU);
          var YU = QU.getBoundingClientRect(),
            NU = {
              width: YU.width,
              height: YU.height
            };
          return oU.widthCache[yU] = NU, ++oU.cacheCount > 2e3 && (oU.cacheCount = 0, oU.widthCache = {}), NU
        } catch (IU) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      NU = function(UU) {
        return {
          top: UU.top + window.scrollY - document.documentElement.clientTop,
          left: UU.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  5746: (UU, XU, zU) => {
    zU.d(XU, {
      A: () => gU,
      B: () => aU,
      D: () => pU,
      H: () => IU,
      J: () => GU,
      c: () => LU,
      e: () => WU,
      i: () => ZU,
      m: () => dU,
      q: () => BU,
      t: () => RU,
      x: () => PU,
      y: () => tU
    });
    var cU = zU(5751),
      yU = zU.n(cU),
      QU = zU(5767),
      AU = zU.n(QU),
      FU = zU(5781),
      oU = zU.n(FU),
      DU = zU(5774),
      EU = zU.n(DU),
      YU = zU(5987),
      NU = zU.n(YU),
      IU = function(UU) {
        return 0 === UU ? 0 : UU > 0 ? 1 : -1
      },
      pU = function(UU) {
        return yU()(UU) && UU.indexOf("%") === UU.length - 1
      },
      aU = function(UU) {
        return EU()(UU) && !AU()(UU)
      },
      tU = function(UU) {
        return NU()(UU)
      },
      gU = function(UU) {
        return aU(UU) || yU()(UU)
      },
      kU = 0,
      GU = function(UU) {
        var XU = ++kU;
        return "".concat(UU || "").concat(XU)
      },
      BU = function(UU, XU) {
        var zU, cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!aU(UU) && !yU()(UU)) return cU;
        if (pU(UU)) {
          var FU = UU.indexOf("%");
          zU = XU * parseFloat(UU.slice(0, FU)) / 100
        } else zU = +UU;
        return AU()(zU) && (zU = cU), QU && zU > XU && (zU = XU), zU
      },
      ZU = function(UU) {
        if (!UU) return null;
        var XU = Object.keys(UU);
        return XU && XU.length ? UU[XU[0]] : null
      },
      RU = function(UU) {
        if (!Array.isArray(UU)) return !1;
        for (var XU = UU.length, zU = {}, cU = 0; cU < XU; cU++) {
          if (zU[UU[cU]]) return !0;
          zU[UU[cU]] = !0
        }
        return !1
      },
      PU = function(UU, XU) {
        return aU(UU) && aU(XU) ? function(zU) {
          return UU + zU * (XU - UU)
        } : function() {
          return XU
        }
      };

    function WU(UU, XU, zU) {
      return UU && UU.length ? UU.find((function(UU) {
        return UU && ("function" === typeof XU ? XU(UU) : oU()(UU, XU)) === zU
      })) : null
    }
    var dU = function(UU) {
        if (!UU || !UU.length) return null;
        for (var XU = UU.length, zU = 0, cU = 0, yU = 0, QU = 0, AU = 1 / 0, FU = -1 / 0, oU = 0, DU = 0, EU = 0; EU < XU; EU++) zU += oU = UU[EU].cx || 0, cU += DU = UU[EU].cy || 0, yU += oU * DU, QU += oU * oU, AU = Math.min(AU, oU), FU = Math.max(FU, oU);
        var YU = XU * QU !== zU * zU ? (XU * yU - zU * cU) / (XU * QU - zU * zU) : 0;
        return {
          xmin: AU,
          xmax: FU,
          a: YU,
          b: (cU - YU * zU) / XU
        }
      },
      LU = function(UU, XU) {
        return aU(UU) && aU(XU) ? UU - XU : yU()(UU) && yU()(XU) ? UU.localeCompare(XU) : UU instanceof Date && XU instanceof Date ? UU.getTime() - XU.getTime() : String(UU).localeCompare(String(XU))
      }
  },
  6588: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU
    });
    var cU = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(UU) {
        return cU[UU]
      },
      set: function(UU, XU) {
        if ("string" === typeof UU) cU[UU] = XU;
        else {
          var zU = Object.keys(UU);
          zU && zU.length && zU.forEach((function(XU) {
            cU[XU] = UU[XU]
          }))
        }
      }
    }
  },
  6830: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU
    });
    var cU = function(UU, XU) {
      var zU = UU.alwaysShow,
        cU = UU.ifOverflow;
      return zU && (cU = "extendDomain"), cU === XU
    }
  },
  5995: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU
    });
    var cU = function(UU, XU) {
      for (var zU = arguments.length, cU = new Array(zU > 2 ? zU - 2 : 0), yU = 2; yU < zU; yU++) cU[yU - 2] = arguments[yU]
    }
  },
  6822: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU,
      d: () => NU,
      f: () => DU
    });
    zU(5987), zU(61), zU(5845);

    function cU(UU) {
      return cU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, cU(UU)
    }

    function yU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function QU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? yU(Object(zU), !0).forEach((function(XU) {
          AU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : yU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function AU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != cU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var yU = zU.call(UU, XU || "default");
            if ("object" != cU(yU)) return yU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == cU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }
    var FU = Math.PI / 180,
      oU = function(UU) {
        return 180 * UU / Math.PI
      },
      DU = function(UU, XU, zU, cU) {
        return {
          x: UU + Math.cos(-FU * cU) * zU,
          y: XU + Math.sin(-FU * cU) * zU
        }
      },
      EU = function(UU, XU) {
        var zU = UU.x,
          cU = UU.y,
          yU = XU.cx,
          QU = XU.cy,
          AU = function(UU, XU) {
            var zU = UU.x,
              cU = UU.y,
              yU = XU.x,
              QU = XU.y;
            return Math.sqrt(Math.pow(zU - yU, 2) + Math.pow(cU - QU, 2))
          }({
            x: zU,
            y: cU
          }, {
            x: yU,
            y: QU
          });
        if (AU <= 0) return {
          radius: AU
        };
        var FU = (zU - yU) / AU,
          DU = Math.acos(FU);
        return cU > QU && (DU = 2 * Math.PI - DU), {
          radius: AU,
          angle: oU(DU),
          angleInRadian: DU
        }
      },
      YU = function(UU, XU) {
        var zU = XU.startAngle,
          cU = XU.endAngle,
          yU = Math.floor(zU / 360),
          QU = Math.floor(cU / 360);
        return UU + 360 * Math.min(yU, QU)
      },
      NU = function(UU, XU) {
        var zU = UU.x,
          cU = UU.y,
          yU = EU({
            x: zU,
            y: cU
          }, XU),
          AU = yU.radius,
          FU = yU.angle,
          oU = XU.innerRadius,
          DU = XU.outerRadius;
        if (AU < oU || AU > DU) return !1;
        if (0 === AU) return !0;
        var NU, IU = function(UU) {
            var XU = UU.startAngle,
              zU = UU.endAngle,
              cU = Math.floor(XU / 360),
              yU = Math.floor(zU / 360),
              QU = Math.min(cU, yU);
            return {
              startAngle: XU - 360 * QU,
              endAngle: zU - 360 * QU
            }
          }(XU),
          pU = IU.startAngle,
          aU = IU.endAngle,
          tU = FU;
        if (pU <= aU) {
          for (; tU > aU;) tU -= 360;
          for (; tU < pU;) tU += 360;
          NU = tU >= pU && tU <= aU
        } else {
          for (; tU > pU;) tU -= 360;
          for (; tU < aU;) tU += 360;
          NU = tU >= aU && tU <= pU
        }
        return NU ? QU(QU({}, XU), {}, {
          radius: AU,
          angle: YU(tU, XU)
        }) : null
      }
  },
  5998: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => rU,
      d: () => eU,
      e: () => CU,
      f: () => PU,
      h: () => HU,
      i: () => SU,
      m: () => uU,
      p: () => MU,
      t: () => iU,
      u: () => wU
    });
    var cU = zU(5781),
      yU = zU.n(cU),
      QU = zU(5987),
      AU = zU.n(QU),
      FU = zU(5751),
      oU = zU.n(FU),
      DU = zU(5845),
      EU = zU.n(DU),
      YU = zU(5680),
      NU = zU.n(YU),
      IU = zU(61),
      pU = zU(6004),
      aU = zU(5746),
      tU = zU(6014),
      gU = zU(6019),
      kU = ["children"],
      GU = ["children"];

    function BU(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, cU)) {
            if (XU.indexOf(cU) >= 0) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }

    function ZU(UU) {
      return ZU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, ZU(UU)
    }
    var RU = {
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
      PU = function(UU) {
        return "string" === typeof UU ? UU : UU ? UU.displayName || UU.name || "Component" : ""
      },
      WU = null,
      dU = null,
      LU = function UU(XU) {
        if (XU === WU && Array.isArray(dU)) return dU;
        var zU = [];
        return IU.Children.forEach(XU, (function(XU) {
          AU()(XU) || ((0, pU.isFragment)(XU) ? zU = zU.concat(UU(XU.props.children)) : zU.push(XU))
        })), dU = zU, WU = XU, zU
      };

    function eU(UU, XU) {
      var zU = [],
        cU = [];
      return cU = Array.isArray(XU) ? XU.map((function(UU) {
        return PU(UU)
      })) : [PU(XU)], LU(UU).forEach((function(UU) {
        var XU = yU()(UU, "type.displayName") || yU()(UU, "type.name"); - 1 !== cU.indexOf(XU) && zU.push(UU)
      })), zU
    }

    function CU(UU, XU) {
      var zU = eU(UU, XU);
      return zU && zU[0]
    }
    var wU = function(UU) {
        if (!UU || !UU.props) return !1;
        var XU = UU.props,
          zU = XU.width,
          cU = XU.height;
        return !(!(0, aU.B)(zU) || zU <= 0 || !(0, aU.B)(cU) || cU <= 0)
      },
      qU = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      OU = function(UU) {
        return UU && UU.type && oU()(UU.type) && qU.indexOf(UU.type) >= 0
      },
      SU = function(UU) {
        return UU && "object" === ZU(UU) && "clipDot" in UU
      },
      rU = function(UU, XU, zU) {
        if (!UU || "function" === typeof UU || "boolean" === typeof UU) return null;
        var cU = UU;
        if ((0, IU.isValidElement)(UU) && (cU = UU.props), !NU()(cU)) return null;
        var yU = {};
        return Object.keys(cU).forEach((function(UU) {
          var QU;
          (function(UU, XU, zU, cU) {
            var yU, QU = null !== (yU = null === gU.g || void 0 === gU.g ? void 0 : gU.g[cU]) && void 0 !== yU ? yU : [];
            return XU.startsWith("data-") || !EU()(UU) && (cU && QU.includes(XU) || gU.k.includes(XU)) || zU && gU.c.includes(XU)
          })(null === (QU = cU) || void 0 === QU ? void 0 : QU[UU], UU, XU, zU) && (yU[UU] = cU[UU])
        })), yU
      },
      uU = function UU(XU, zU) {
        if (XU === zU) return !0;
        var cU = IU.Children.count(XU);
        if (cU !== IU.Children.count(zU)) return !1;
        if (0 === cU) return !0;
        if (1 === cU) return fU(Array.isArray(XU) ? XU[0] : XU, Array.isArray(zU) ? zU[0] : zU);
        for (var yU = 0; yU < cU; yU++) {
          var QU = XU[yU],
            AU = zU[yU];
          if (Array.isArray(QU) || Array.isArray(AU)) {
            if (!UU(QU, AU)) return !1
          } else if (!fU(QU, AU)) return !1
        }
        return !0
      },
      fU = function(UU, XU) {
        if (AU()(UU) && AU()(XU)) return !0;
        if (!AU()(UU) && !AU()(XU)) {
          var zU = UU.props || {},
            cU = zU.children,
            yU = BU(zU, kU),
            QU = XU.props || {},
            FU = QU.children,
            oU = BU(QU, GU);
          return cU && FU ? (0, tU.e)(yU, oU) && uU(cU, FU) : !cU && !FU && (0, tU.e)(yU, oU)
        }
        return !1
      },
      iU = function(UU, XU) {
        var zU = [],
          cU = {};
        return LU(UU).forEach((function(UU, yU) {
          if (OU(UU)) zU.push(UU);
          else if (UU) {
            var QU = PU(UU.type),
              AU = XU[QU] || {},
              FU = AU.handler,
              oU = AU.once;
            if (FU && (!oU || !cU[QU])) {
              var DU = FU(UU, QU, yU);
              zU.push(DU), cU[QU] = !0
            }
          }
        })), zU
      },
      HU = function(UU) {
        var XU = UU && UU.type;
        return XU && RU[XU] ? RU[XU] : null
      },
      MU = function(UU, XU) {
        return LU(XU).indexOf(UU)
      }
  },
  6014: (UU, XU, zU) => {
    function cU(UU, XU) {
      for (var zU in UU)
        if ({}.hasOwnProperty.call(UU, zU) && (!{}.hasOwnProperty.call(XU, zU) || UU[zU] !== XU[zU])) return !1;
      for (var cU in XU)
        if ({}.hasOwnProperty.call(XU, cU) && !{}.hasOwnProperty.call(UU, cU)) return !1;
      return !0
    }
    zU.d(XU, {
      e: () => cU
    })
  },
  6810: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => EU
    });
    var cU = zU(6674),
      yU = zU(6752),
      QU = zU(5998);

    function AU(UU) {
      return AU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, AU(UU)
    }

    function FU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function oU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? FU(Object(zU), !0).forEach((function(XU) {
          DU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : FU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function DU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != AU(UU) || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != AU(cU)) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == AU(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }
    var EU = function(UU) {
      var XU = UU.children,
        zU = UU.formattedGraphicalItems,
        AU = UU.legendWidth,
        FU = UU.legendContent,
        DU = (0, QU.e)(XU, cU.b);
      if (!DU) return null;
      var EU, YU = cU.b.defaultProps,
        NU = void 0 !== YU ? oU(oU({}, YU), DU.props) : {};
      return EU = DU.props && DU.props.payload ? DU.props && DU.props.payload : "children" === FU ? (zU || []).reduce((function(UU, XU) {
        var zU = XU.item,
          cU = XU.props,
          yU = cU.sectors || cU.data || [];
        return UU.concat(yU.map((function(UU) {
          return {
            type: DU.props.iconType || zU.props.legendType,
            value: UU.name,
            color: UU.fill,
            payload: UU
          }
        })))
      }), []) : (zU || []).map((function(UU) {
        var XU = UU.item,
          zU = XU.type.defaultProps,
          cU = void 0 !== zU ? oU(oU({}, zU), XU.props) : {},
          QU = cU.dataKey,
          AU = cU.name,
          FU = cU.legendType;
        return {
          inactive: cU.hide,
          dataKey: QU,
          type: NU.iconType || FU || "square",
          color: (0, yU.T)(XU),
          value: AU || QU,
          payload: cU
        }
      })), oU(oU(oU({}, NU), cU.b.getWithHeight(DU, AU)), {}, {
        payload: EU,
        item: DU
      })
    }
  },
  6597: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU
    });
    var cU = zU(6600),
      yU = zU.n(cU),
      QU = zU(5845),
      AU = zU.n(QU);

    function FU(UU, XU, zU) {
      return !0 === XU ? yU()(UU, zU) : AU()(XU) ? yU()(UU, XU) : UU
    }
  },
  6019: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => EU,
      g: () => DU,
      k: () => FU,
      m: () => YU,
      q: () => NU
    });
    var cU = zU(61),
      yU = zU(5680),
      QU = zU.n(yU);

    function AU(UU) {
      return AU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, AU(UU)
    }
    var FU = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "gY", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      oU = ["points", "pathLength"],
      DU = {
        svg: ["viewBox", "children"],
        polygon: oU,
        polyline: oU
      },
      EU = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      YU = function(UU, XU) {
        if (!UU || "function" === typeof UU || "boolean" === typeof UU) return null;
        var zU = UU;
        if ((0, cU.isValidElement)(UU) && (zU = UU.props), !QU()(zU)) return null;
        var yU = {};
        return Object.keys(zU).forEach((function(UU) {
          EU.includes(UU) && (yU[UU] = XU || function(XU) {
            return zU[UU](zU, XU)
          })
        })), yU
      },
      NU = function(UU, XU, zU) {
        if (!QU()(UU) || "object" !== AU(UU)) return null;
        var cU = null;
        return Object.keys(UU).forEach((function(yU) {
          var QU = UU[yU];
          EU.includes(yU) && "function" === typeof QU && (cU || (cU = {}), cU[yU] = function(UU, XU, zU) {
            return function(cU) {
              return UU(XU, zU, cU), null
            }
          }(QU, XU, zU))
        })), cU
      }
  },
  6012: (UU, XU) => {
    var zU, cU = Symbol.for("react.element"),
      yU = Symbol.for("react.portal"),
      QU = Symbol.for("react.fragment"),
      AU = Symbol.for("react.strict_mode"),
      FU = Symbol.for("react.profiler"),
      oU = Symbol.for("react.provider"),
      DU = Symbol.for("react.context"),
      EU = Symbol.for("react.server_context"),
      YU = Symbol.for("react.forward_ref"),
      NU = Symbol.for("react.suspense"),
      IU = Symbol.for("react.suspense_list"),
      pU = Symbol.for("react.memo"),
      aU = Symbol.for("react.lazy"),
      tU = Symbol.for("react.offscreen");

    function gU(UU) {
      if ("object" === typeof UU && null !== UU) {
        var XU = UU.$$typeof;
        switch (XU) {
          case cU:
            switch (UU = UU.type) {
              case QU:
              case FU:
              case AU:
              case NU:
              case IU:
                return UU;
              default:
                switch (UU = UU && UU.$$typeof) {
                  case EU:
                  case DU:
                  case YU:
                  case aU:
                  case pU:
                  case oU:
                    return UU;
                  default:
                    return XU
                }
            }
          case yU:
            return XU
        }
      }
    }
    zU = Symbol.for("react.module.reference"), XU.isFragment = function(UU) {
      return gU(UU) === QU
    }
  },
  6004: (UU, XU, zU) => {
    UU.exports = zU(6012)
  },
  5657: (UU, XU, zU) => {
    function cU(UU) {
      var XU, zU, yU = "";
      if ("string" == typeof UU || "number" == typeof UU) yU += UU;
      else if ("object" == typeof UU)
        if (Array.isArray(UU)) {
          var QU = UU.length;
          for (XU = 0; XU < QU; XU++) UU[XU] && (zU = cU(UU[XU])) && (yU && (yU += " "), yU += zU)
        } else
          for (zU in UU) UU[zU] && (yU && (yU += " "), yU += zU);
      return yU
    }
    zU.d(XU, {
      c: () => yU
    });
    const yU = function() {
      for (var UU, XU, zU = 0, yU = "", QU = arguments.length; zU < QU; zU++)(UU = arguments[zU]) && (XU = cU(UU)) && (yU && (yU += " "), yU += XU);
      return yU
    }
  },
  6754: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      h: () => FU
    });
    var cU = zU(6758),
      yU = zU(6762);

    function QU() {
      var UU, XU, zU = (0, yU.e)().unknown(void 0),
        AU = zU.domain,
        FU = zU.range,
        oU = 0,
        DU = 1,
        EU = !1,
        YU = 0,
        NU = 0,
        IU = .5;

      function pU() {
        var zU = AU().length,
          cU = DU < oU,
          yU = cU ? DU : oU,
          QU = cU ? oU : DU;
        UU = (QU - yU) / Math.max(1, zU - YU + 2 * NU), EU && (UU = Math.floor(UU)), yU += (QU - yU - UU * (zU - YU)) * IU, XU = UU * (1 - YU), EU && (yU = Math.round(yU), XU = Math.round(XU));
        var pU = function(UU, XU, zU) {
          UU = +UU, XU = +XU, zU = (yU = arguments.length) < 2 ? (XU = UU, UU = 0, 1) : yU < 3 ? 1 : +zU;
          for (var cU = -1, yU = 0 | Math.max(0, Math.ceil((XU - UU) / zU)), QU = new Array(yU); ++cU < yU;) QU[cU] = UU + cU * zU;
          return QU
        }(zU).map((function(XU) {
          return yU + UU * XU
        }));
        return FU(cU ? pU.reverse() : pU)
      }
      return delete zU.unknown, zU.domain = function(UU) {
        return arguments.length ? (AU(UU), pU()) : AU()
      }, zU.range = function(UU) {
        return arguments.length ? ([oU, DU] = UU, oU = +oU, DU = +DU, pU()) : [oU, DU]
      }, zU.rangeRound = function(UU) {
        return [oU, DU] = UU, oU = +oU, DU = +DU, EU = !0, pU()
      }, zU.bandwidth = function() {
        return XU
      }, zU.step = function() {
        return UU
      }, zU.round = function(UU) {
        return arguments.length ? (EU = !!UU, pU()) : EU
      }, zU.padding = function(UU) {
        return arguments.length ? (YU = Math.min(1, NU = +UU), pU()) : YU
      }, zU.paddingInner = function(UU) {
        return arguments.length ? (YU = Math.min(1, UU), pU()) : YU
      }, zU.paddingOuter = function(UU) {
        return arguments.length ? (NU = +UU, pU()) : NU
      }, zU.align = function(UU) {
        return arguments.length ? (IU = Math.max(0, Math.min(1, UU)), pU()) : IU
      }, zU.copy = function() {
        return QU(AU(), [oU, DU]).round(EU).paddingInner(YU).paddingOuter(NU).align(IU)
      }, cU.g.apply(pU(), arguments)
    }

    function AU(UU) {
      var XU = UU.copy;
      return UU.padding = UU.paddingOuter, delete UU.paddingInner, delete UU.paddingOuter, UU.copy = function() {
        return AU(XU())
      }, UU
    }

    function FU() {
      return AU(QU.apply(null, arguments).paddingInner(1))
    }
  },
  6758: (UU, XU, zU) => {
    function cU(UU, XU) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(UU);
          break;
        default:
          this.range(XU).domain(UU)
      }
      return this
    }

    function yU(UU, XU) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof UU ? this.interpolator(UU) : this.range(UU);
          break;
        default:
          this.domain(UU), "function" === typeof XU ? this.interpolator(XU) : this.range(XU)
      }
      return this
    }
    zU.d(XU, {
      c: () => yU,
      g: () => cU
    })
  },
  6762: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      g: () => DU
    });
    class cU extends Map {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FU;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: XU
            }
          }), null != UU)
          for (const [zU, cU] of UU) this.set(zU, cU)
      }
      get(UU) {
        return super.get(yU(this, UU))
      }
      has(UU) {
        return super.has(yU(this, UU))
      }
      set(UU, XU) {
        return super.set(QU(this, UU), XU)
      }
      delete(UU) {
        return super.delete(AU(this, UU))
      }
    }
    Set;

    function yU(UU, XU) {
      let {
        _intern: zU,
        _key: cU
      } = UU;
      const yU = cU(XU);
      return zU.has(yU) ? zU.get(yU) : XU
    }

    function QU(UU, XU) {
      let {
        _intern: zU,
        _key: cU
      } = UU;
      const yU = cU(XU);
      return zU.has(yU) ? zU.get(yU) : (zU.set(yU, XU), XU)
    }

    function AU(UU, XU) {
      let {
        _intern: zU,
        _key: cU
      } = UU;
      const yU = cU(XU);
      return zU.has(yU) && (XU = zU.get(yU), zU.delete(yU)), XU
    }

    function FU(UU) {
      return null !== UU && "object" === typeof UU ? UU.valueOf() : UU
    }
    var oU = zU(6758);
    const DU = Symbol("implicit");

    function EU() {
      var UU = new cU,
        XU = [],
        zU = [],
        yU = DU;

      function QU(cU) {
        let QU = UU.get(cU);
        if (void 0 === QU) {
          if (yU !== DU) return yU;
          UU.set(cU, QU = XU.push(cU) - 1)
        }
        return zU[QU % zU.length]
      }
      return QU.domain = function(zU) {
        if (!arguments.length) return XU.slice();
        XU = [], UU = new cU;
        for (const cU of zU) UU.has(cU) || UU.set(cU, XU.push(cU) - 1);
        return QU
      }, QU.range = function(UU) {
        return arguments.length ? (zU = Array.from(UU), QU) : zU.slice()
      }, QU.unknown = function(UU) {
        return arguments.length ? (yU = UU, QU) : yU
      }, QU.copy = function() {
        return EU(XU, zU).unknown(yU)
      }, oU.g.apply(QU, arguments), QU
    }
  },
  6813: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    Array.prototype.slice;

    function cU(UU) {
      return "object" === typeof UU && "length" in UU ? UU : Array.from(UU)
    }
  },
  6715: (UU, XU, zU) => {
    function cU(UU) {
      return function() {
        return UU
      }
    }
    zU.d(XU, {
      b: () => cU
    })
  },
  6717: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => DU
    });
    const cU = Math.PI,
      yU = 2 * cU,
      QU = 1e-6,
      AU = yU - QU;

    function FU(UU) {
      this._ += UU[0];
      for (let XU = 1, zU = UU.length; XU < zU; ++XU) this._ += arguments[XU] + UU[XU]
    }
    class oU {
      constructor(UU) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == UU ? FU : function(UU) {
          let XU = Math.floor(UU);
          if (!(XU >= 0)) throw new Error(`invalid digits: ${UU}`);
          if (XU > 15) return FU;
          const zU = 10 ** XU;
          return function(UU) {
            this._ += UU[0];
            for (let XU = 1, cU = UU.length; XU < cU; ++XU) this._ += Math.round(arguments[XU] * zU) / zU + UU[XU]
          }
        }(UU)
      }
      moveTo(UU, XU) {
        this._append`M${this._x0=this._x1=+UU},${this._y0=this._y1=+XU}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(UU, XU) {
        this._append`L${this._x1=+UU},${this._y1=+XU}`
      }
      quadraticCurveTo(UU, XU, zU, cU) {
        this._append`Q${+UU},${+XU},${this._x1=+zU},${this._y1=+cU}`
      }
      bezierCurveTo(UU, XU, zU, cU, yU, QU) {
        this._append`C${+UU},${+XU},${+zU},${+cU},${this._x1=+yU},${this._y1=+QU}`
      }
      arcTo(UU, XU, zU, yU, AU) {
        if (UU = +UU, XU = +XU, zU = +zU, yU = +yU, (AU = +AU) < 0) throw new Error(`negative radius: ${AU}`);
        let FU = this._x1,
          oU = this._y1,
          DU = zU - UU,
          EU = yU - XU,
          YU = FU - UU,
          NU = oU - XU,
          IU = YU * YU + NU * NU;
        if (null === this._x1) this._append`M${this._x1=UU},${this._y1=XU}`;
        else if (IU > QU)
          if (Math.abs(NU * DU - EU * YU) > QU && AU) {
            let pU = zU - FU,
              aU = yU - oU,
              tU = DU * DU + EU * EU,
              gU = pU * pU + aU * aU,
              kU = Math.sqrt(tU),
              GU = Math.sqrt(IU),
              BU = AU * Math.tan((cU - Math.acos((tU + IU - gU) / (2 * kU * GU))) / 2),
              ZU = BU / GU,
              RU = BU / kU;
            Math.abs(ZU - 1) > QU && this._append`L${UU+ZU*YU},${XU+ZU*NU}`, this._append`A${AU},${AU},0,0,${+(NU*pU>YU*aU)},${this._x1=UU+RU*DU},${this._y1=XU+RU*EU}`
          } else this._append`L${this._x1=UU},${this._y1=XU}`;
        else;
      }
      arc(UU, XU, zU, FU, oU, DU) {
        if (UU = +UU, XU = +XU, DU = !!DU, (zU = +zU) < 0) throw new Error(`negative radius: ${zU}`);
        let EU = zU * Math.cos(FU),
          YU = zU * Math.sin(FU),
          NU = UU + EU,
          IU = XU + YU,
          pU = 1 ^ DU,
          aU = DU ? FU - oU : oU - FU;
        null === this._x1 ? this._append`M${NU},${IU}` : (Math.abs(this._x1 - NU) > QU || Math.abs(this._y1 - IU) > QU) && this._append`L${NU},${IU}`, zU && (aU < 0 && (aU = aU % yU + yU), aU > AU ? this._append`A${zU},${zU},0,1,${pU},${UU-EU},${XU-YU}A${zU},${zU},0,1,${pU},${this._x1=NU},${this._y1=IU}` : aU > QU && this._append`A${zU},${zU},0,${+(aU>=cU)},${pU},${this._x1=UU+zU*Math.cos(oU)},${this._y1=XU+zU*Math.sin(oU)}`)
      }
      rect(UU, XU, zU, cU) {
        this._append`M${this._x0=this._x1=+UU},${this._y0=this._y1=+XU}h${zU=+zU}v${+cU}h${-zU}Z`
      }
      toString() {
        return this._
      }
    }

    function DU(UU) {
      let XU = 3;
      return UU.digits = function(zU) {
        if (!arguments.length) return XU;
        if (null == zU) XU = null;
        else {
          const UU = Math.floor(zU);
          if (!(UU >= 0)) throw new RangeError(`invalid digits: ${zU}`);
          XU = UU
        }
        return UU
      }, () => new oU(XU)
    }
    oU.prototype
  },
  6565: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU
    });
    var cU = !0,
      yU = "Invariant failed";

    function QU(UU, XU) {
      if (!UU) {
        if (cU) throw new Error(yU);
        var zU = "function" === typeof XU ? XU() : XU,
          QU = zU ? "".concat(yU, ": ").concat(zU) : yU;
        throw new Error(QU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);