/*! For license information please see zyyatq.111.46d847ec.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  5767: function(YY, rY, DY) {
    var FY;
    ! function() {
      var AY, IY = 1e9,
        RY = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        OY = !0,
        gY = "[DecimalError] ",
        aY = gY + "Invalid argument: ",
        vY = gY + "Exponent out of range: ",
        uY = Math.floor,
        sY = Math.pow,
        iY = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        yY = 1e7,
        QY = 9007199254740991,
        oY = uY(1286742750677284.5),
        WY = {};

      function EY(YY, rY) {
        var DY, FY, AY, IY, RY, gY, aY, vY, uY = YY.constructor,
          sY = uY.precision;
        if (!YY.s || !rY.s) return rY.s || (rY = new uY(YY)), OY ? KY(rY, sY) : rY;
        if (aY = YY.d, vY = rY.d, RY = YY.e, AY = rY.e, aY = aY.slice(), IY = RY - AY) {
          for (IY < 0 ? (FY = aY, IY = -IY, gY = vY.length) : (FY = vY, AY = RY, gY = aY.length), IY > (gY = (RY = Math.ceil(sY / 7)) > gY ? RY + 1 : gY + 1) && (IY = gY, FY.length = 1), FY.reverse(); IY--;) FY.push(0);
          FY.reverse()
        }
        for ((gY = aY.length) - (IY = vY.length) < 0 && (IY = gY, FY = vY, vY = aY, aY = FY), DY = 0; IY;) DY = (aY[--IY] = aY[IY] + vY[IY] + DY) / yY | 0, aY[IY] %= yY;
        for (DY && (aY.unshift(DY), ++AY), gY = aY.length; 0 == aY[--gY];) aY.pop();
        return rY.d = aY, rY.e = AY, OY ? KY(rY, sY) : rY
      }

      function mY(YY, rY, DY) {
        if (YY !== ~~YY || YY < rY || YY > DY) throw Error(aY + YY)
      }

      function VY(YY) {
        var rY, DY, FY, AY = YY.length - 1,
          IY = "",
          RY = YY[0];
        if (AY > 0) {
          for (IY += RY, rY = 1; rY < AY; rY++)(DY = 7 - (FY = YY[rY] + "").length) && (IY += NY(DY)), IY += FY;
          (DY = 7 - (FY = (RY = YY[rY]) + "").length) && (IY += NY(DY))
        } else if (0 === RY) return "0";
        for (; RY % 10 === 0;) RY /= 10;
        return IY + RY
      }
      WY.absoluteValue = WY.abs = function() {
        var YY = new this.constructor(this);
        return YY.s && (YY.s = 1), YY
      }, WY.comparedTo = WY.cmp = function(YY) {
        var rY, DY, FY, AY, IY = this;
        if (YY = new IY.constructor(YY), IY.s !== YY.s) return IY.s || -YY.s;
        if (IY.e !== YY.e) return IY.e > YY.e ^ IY.s < 0 ? 1 : -1;
        for (rY = 0, DY = (FY = IY.d.length) < (AY = YY.d.length) ? FY : AY; rY < DY; ++rY)
          if (IY.d[rY] !== YY.d[rY]) return IY.d[rY] > YY.d[rY] ^ IY.s < 0 ? 1 : -1;
        return FY === AY ? 0 : FY > AY ^ IY.s < 0 ? 1 : -1
      }, WY.decimalPlaces = WY.dp = function() {
        var YY = this,
          rY = YY.d.length - 1,
          DY = 7 * (rY - YY.e);
        if (rY = YY.d[rY])
          for (; rY % 10 == 0; rY /= 10) DY--;
        return DY < 0 ? 0 : DY
      }, WY.dividedBy = WY.div = function(YY) {
        return SY(this, new this.constructor(YY))
      }, WY.dividedToIntegerBy = WY.idiv = function(YY) {
        var rY = this.constructor;
        return KY(SY(this, new rY(YY), 0, 1), rY.precision)
      }, WY.equals = WY.eq = function(YY) {
        return !this.cmp(YY)
      }, WY.exponent = function() {
        return TY(this)
      }, WY.greaterThan = WY.gt = function(YY) {
        return this.cmp(YY) > 0
      }, WY.greaterThanOrEqualTo = WY.gte = function(YY) {
        return this.cmp(YY) >= 0
      }, WY.isInteger = WY.isint = function() {
        return this.e > this.d.length - 2
      }, WY.isNegative = WY.isneg = function() {
        return this.s < 0
      }, WY.isPositive = WY.ispos = function() {
        return this.s > 0
      }, WY.isZero = function() {
        return 0 === this.s
      }, WY.lessThan = WY.lt = function(YY) {
        return this.cmp(YY) < 0
      }, WY.lessThanOrEqualTo = WY.lte = function(YY) {
        return this.cmp(YY) < 1
      }, WY.logarithm = WY.log = function(YY) {
        var rY, DY = this,
          FY = DY.constructor,
          IY = FY.precision,
          RY = IY + 5;
        if (void 0 === YY) YY = new FY(10);
        else if ((YY = new FY(YY)).s < 1 || YY.eq(AY)) throw Error(gY + "NaN");
        if (DY.s < 1) throw Error(gY + (DY.s ? "NaN" : "-Infinity"));
        return DY.eq(AY) ? new FY(0) : (OY = !1, rY = SY(BY(DY, RY), BY(YY, RY), RY), OY = !0, KY(rY, IY))
      }, WY.minus = WY.sub = function(YY) {
        var rY = this;
        return YY = new rY.constructor(YY), rY.s == YY.s ? HY(rY, YY) : EY(rY, (YY.s = -YY.s, YY))
      }, WY.modulo = WY.mod = function(YY) {
        var rY, DY = this,
          FY = DY.constructor,
          AY = FY.precision;
        if (!(YY = new FY(YY)).s) throw Error(gY + "NaN");
        return DY.s ? (OY = !1, rY = SY(DY, YY, 0, 1).times(YY), OY = !0, DY.minus(rY)) : KY(new FY(DY), AY)
      }, WY.naturalExponential = WY.exp = function() {
        return lY(this)
      }, WY.naturalLogarithm = WY.ln = function() {
        return BY(this)
      }, WY.negated = WY.neg = function() {
        var YY = new this.constructor(this);
        return YY.s = -YY.s || 0, YY
      }, WY.plus = WY.add = function(YY) {
        var rY = this;
        return YY = new rY.constructor(YY), rY.s == YY.s ? EY(rY, YY) : HY(rY, (YY.s = -YY.s, YY))
      }, WY.precision = WY.sd = function(YY) {
        var rY, DY, FY, AY = this;
        if (void 0 !== YY && YY !== !!YY && 1 !== YY && 0 !== YY) throw Error(aY + YY);
        if (rY = TY(AY) + 1, DY = 7 * (FY = AY.d.length - 1) + 1, FY = AY.d[FY]) {
          for (; FY % 10 == 0; FY /= 10) DY--;
          for (FY = AY.d[0]; FY >= 10; FY /= 10) DY++
        }
        return YY && rY > DY ? rY : DY
      }, WY.squareRoot = WY.sqrt = function() {
        var YY, rY, DY, FY, AY, IY, RY, aY = this,
          vY = aY.constructor;
        if (aY.s < 1) {
          if (!aY.s) return new vY(0);
          throw Error(gY + "NaN")
        }
        for (YY = TY(aY), OY = !1, 0 == (AY = Math.sqrt(+aY)) || AY == 1 / 0 ? (((rY = VY(aY.d)).length + YY) % 2 == 0 && (rY += "0"), AY = Math.sqrt(rY), YY = uY((YY + 1) / 2) - (YY < 0 || YY % 2), FY = new vY(rY = AY == 1 / 0 ? "1e" + YY : (rY = AY.toExponential()).slice(0, rY.indexOf("e") + 1) + YY)) : FY = new vY(AY.toString()), AY = RY = (DY = vY.precision) + 3;;)
          if (FY = (IY = FY).plus(SY(aY, IY, RY + 2)).times(.5), VY(IY.d).slice(0, RY) === (rY = VY(FY.d)).slice(0, RY)) {
            if (rY = rY.slice(RY - 3, RY + 1), AY == RY && "4999" == rY) {
              if (KY(IY, DY + 1, 0), IY.times(IY).eq(aY)) {
                FY = IY;
                break
              }
            } else if ("9999" != rY) break;
            RY += 4
          } return OY = !0, KY(FY, DY)
      }, WY.times = WY.mul = function(YY) {
        var rY, DY, FY, AY, IY, RY, gY, aY, vY, uY = this,
          sY = uY.constructor,
          iY = uY.d,
          QY = (YY = new sY(YY)).d;
        if (!uY.s || !YY.s) return new sY(0);
        for (YY.s *= uY.s, DY = uY.e + YY.e, (aY = iY.length) < (vY = QY.length) && (IY = iY, iY = QY, QY = IY, RY = aY, aY = vY, vY = RY), IY = [], FY = RY = aY + vY; FY--;) IY.push(0);
        for (FY = vY; --FY >= 0;) {
          for (rY = 0, AY = aY + FY; AY > FY;) gY = IY[AY] + QY[FY] * iY[AY - FY - 1] + rY, IY[AY--] = gY % yY | 0, rY = gY / yY | 0;
          IY[AY] = (IY[AY] + rY) % yY | 0
        }
        for (; !IY[--RY];) IY.pop();
        return rY ? ++DY : IY.shift(), YY.d = IY, YY.e = DY, OY ? KY(YY, sY.precision) : YY
      }, WY.toDecimalPlaces = WY.todp = function(YY, rY) {
        var DY = this,
          FY = DY.constructor;
        return DY = new FY(DY), void 0 === YY ? DY : (mY(YY, 0, IY), void 0 === rY ? rY = FY.rounding : mY(rY, 0, 8), KY(DY, YY + TY(DY) + 1, rY))
      }, WY.toExponential = function(YY, rY) {
        var DY, FY = this,
          AY = FY.constructor;
        return void 0 === YY ? DY = zY(FY, !0) : (mY(YY, 0, IY), void 0 === rY ? rY = AY.rounding : mY(rY, 0, 8), DY = zY(FY = KY(new AY(FY), YY + 1, rY), !0, YY + 1)), DY
      }, WY.toFixed = function(YY, rY) {
        var DY, FY, AY = this,
          RY = AY.constructor;
        return void 0 === YY ? zY(AY) : (mY(YY, 0, IY), void 0 === rY ? rY = RY.rounding : mY(rY, 0, 8), DY = zY((FY = KY(new RY(AY), YY + TY(AY) + 1, rY)).abs(), !1, YY + TY(FY) + 1), AY.isneg() && !AY.isZero() ? "-" + DY : DY)
      }, WY.toInteger = WY.toint = function() {
        var YY = this,
          rY = YY.constructor;
        return KY(new rY(YY), TY(YY) + 1, rY.rounding)
      }, WY.toNumber = function() {
        return +this
      }, WY.toPower = WY.pow = function(YY) {
        var rY, DY, FY, IY, RY, aY, vY = this,
          sY = vY.constructor,
          iY = +(YY = new sY(YY));
        if (!YY.s) return new sY(AY);
        if (!(vY = new sY(vY)).s) {
          if (YY.s < 1) throw Error(gY + "Infinity");
          return vY
        }
        if (vY.eq(AY)) return vY;
        if (FY = sY.precision, YY.eq(AY)) return KY(vY, FY);
        if (aY = (rY = YY.e) >= (DY = YY.d.length - 1), RY = vY.s, aY) {
          if ((DY = iY < 0 ? -iY : iY) <= QY) {
            for (IY = new sY(AY), rY = Math.ceil(FY / 7 + 4), OY = !1; DY % 2 && ZY((IY = IY.times(vY)).d, rY), 0 !== (DY = uY(DY / 2));) ZY((vY = vY.times(vY)).d, rY);
            return OY = !0, YY.s < 0 ? new sY(AY).div(IY) : KY(IY, FY)
          }
        } else if (RY < 0) throw Error(gY + "NaN");
        return RY = RY < 0 && 1 & YY.d[Math.max(rY, DY)] ? -1 : 1, vY.s = 1, OY = !1, IY = YY.times(BY(vY, FY + 12)), OY = !0, (IY = lY(IY)).s = RY, IY
      }, WY.toPrecision = function(YY, rY) {
        var DY, FY, AY = this,
          RY = AY.constructor;
        return void 0 === YY ? FY = zY(AY, (DY = TY(AY)) <= RY.toExpNeg || DY >= RY.toExpPos) : (mY(YY, 1, IY), void 0 === rY ? rY = RY.rounding : mY(rY, 0, 8), FY = zY(AY = KY(new RY(AY), YY, rY), YY <= (DY = TY(AY)) || DY <= RY.toExpNeg, YY)), FY
      }, WY.toSignificantDigits = WY.tosd = function(YY, rY) {
        var DY = this.constructor;
        return void 0 === YY ? (YY = DY.precision, rY = DY.rounding) : (mY(YY, 1, IY), void 0 === rY ? rY = DY.rounding : mY(rY, 0, 8)), KY(new DY(this), YY, rY)
      }, WY.toString = WY.valueOf = WY.val = WY.toJSON = function() {
        var YY = this,
          rY = TY(YY),
          DY = YY.constructor;
        return zY(YY, rY <= DY.toExpNeg || rY >= DY.toExpPos)
      };
      var SY = function() {
        function YY(YY, rY) {
          var DY, FY = 0,
            AY = YY.length;
          for (YY = YY.slice(); AY--;) DY = YY[AY] * rY + FY, YY[AY] = DY % yY | 0, FY = DY / yY | 0;
          return FY && YY.unshift(FY), YY
        }

        function rY(YY, rY, DY, FY) {
          var AY, IY;
          if (DY != FY) IY = DY > FY ? 1 : -1;
          else
            for (AY = IY = 0; AY < DY; AY++)
              if (YY[AY] != rY[AY]) {
                IY = YY[AY] > rY[AY] ? 1 : -1;
                break
              } return IY
        }

        function DY(YY, rY, DY) {
          for (var FY = 0; DY--;) YY[DY] -= FY, FY = YY[DY] < rY[DY] ? 1 : 0, YY[DY] = FY * yY + YY[DY] - rY[DY];
          for (; !YY[0] && YY.length > 1;) YY.shift()
        }
        return function(FY, AY, IY, RY) {
          var OY, aY, vY, uY, sY, iY, QY, oY, WY, EY, mY, VY, SY, lY, eY, NY, BY, cY, HY = FY.constructor,
            zY = FY.s == AY.s ? 1 : -1,
            ZY = FY.d,
            CY = AY.d;
          if (!FY.s) return new HY(FY);
          if (!AY.s) throw Error(gY + "Division by zero");
          for (aY = FY.e - AY.e, BY = CY.length, eY = ZY.length, oY = (QY = new HY(zY)).d = [], vY = 0; CY[vY] == (ZY[vY] || 0);) ++vY;
          if (CY[vY] > (ZY[vY] || 0) && --aY, (VY = null == IY ? IY = HY.precision : RY ? IY + (TY(FY) - TY(AY)) + 1 : IY) < 0) return new HY(0);
          if (VY = VY / 7 + 2 | 0, vY = 0, 1 == BY)
            for (uY = 0, CY = CY[0], VY++;
              (vY < eY || uY) && VY--; vY++) SY = uY * yY + (ZY[vY] || 0), oY[vY] = SY / CY | 0, uY = SY % CY | 0;
          else {
            for ((uY = yY / (CY[0] + 1) | 0) > 1 && (CY = YY(CY, uY), ZY = YY(ZY, uY), BY = CY.length, eY = ZY.length), lY = BY, EY = (WY = ZY.slice(0, BY)).length; EY < BY;) WY[EY++] = 0;
            (cY = CY.slice()).unshift(0), NY = CY[0], CY[1] >= yY / 2 && ++NY;
            do {
              uY = 0, (OY = rY(CY, WY, BY, EY)) < 0 ? (mY = WY[0], BY != EY && (mY = mY * yY + (WY[1] || 0)), (uY = mY / NY | 0) > 1 ? (uY >= yY && (uY = yY - 1), 1 == (OY = rY(sY = YY(CY, uY), WY, iY = sY.length, EY = WY.length)) && (uY--, DY(sY, BY < iY ? cY : CY, iY))) : (0 == uY && (OY = uY = 1), sY = CY.slice()), (iY = sY.length) < EY && sY.unshift(0), DY(WY, sY, EY), -1 == OY && (OY = rY(CY, WY, BY, EY = WY.length)) < 1 && (uY++, DY(WY, BY < EY ? cY : CY, EY)), EY = WY.length) : 0 === OY && (uY++, WY = [0]), oY[vY++] = uY, OY && WY[0] ? WY[EY++] = ZY[lY] || 0 : (WY = [ZY[lY]], EY = 1)
            } while ((lY++ < eY || void 0 !== WY[0]) && VY--)
          }
          return oY[0] || oY.shift(), QY.e = aY, KY(QY, RY ? IY + TY(QY) + 1 : IY)
        }
      }();

      function lY(YY, rY) {
        var DY, FY, IY, RY, gY, aY = 0,
          uY = 0,
          iY = YY.constructor,
          yY = iY.precision;
        if (TY(YY) > 16) throw Error(vY + TY(YY));
        if (!YY.s) return new iY(AY);
        for (null == rY ? (OY = !1, gY = yY) : gY = rY, RY = new iY(.03125); YY.abs().gte(.1);) YY = YY.times(RY), uY += 5;
        for (gY += Math.log(sY(2, uY)) / Math.LN10 * 2 + 5 | 0, DY = FY = IY = new iY(AY), iY.precision = gY;;) {
          if (FY = KY(FY.times(YY), gY), DY = DY.times(++aY), VY((RY = IY.plus(SY(FY, DY, gY))).d).slice(0, gY) === VY(IY.d).slice(0, gY)) {
            for (; uY--;) IY = KY(IY.times(IY), gY);
            return iY.precision = yY, null == rY ? (OY = !0, KY(IY, yY)) : IY
          }
          IY = RY
        }
      }

      function TY(YY) {
        for (var rY = 7 * YY.e, DY = YY.d[0]; DY >= 10; DY /= 10) rY++;
        return rY
      }

      function eY(YY, rY, DY) {
        if (rY > YY.LN10.sd()) throw OY = !0, DY && (YY.precision = DY), Error(gY + "LN10 precision limit exceeded");
        return KY(new YY(YY.LN10), rY)
      }

      function NY(YY) {
        for (var rY = ""; YY--;) rY += "0";
        return rY
      }

      function BY(YY, rY) {
        var DY, FY, IY, RY, aY, vY, uY, sY, iY, yY = 1,
          QY = YY,
          oY = QY.d,
          WY = QY.constructor,
          EY = WY.precision;
        if (QY.s < 1) throw Error(gY + (QY.s ? "NaN" : "-Infinity"));
        if (QY.eq(AY)) return new WY(0);
        if (null == rY ? (OY = !1, sY = EY) : sY = rY, QY.eq(10)) return null == rY && (OY = !0), eY(WY, sY);
        if (sY += 10, WY.precision = sY, FY = (DY = VY(oY)).charAt(0), RY = TY(QY), !(Math.abs(RY) < 15e14)) return uY = eY(WY, sY + 2, EY).times(RY + ""), QY = BY(new WY(FY + "." + DY.slice(1)), sY - 10).plus(uY), WY.precision = EY, null == rY ? (OY = !0, KY(QY, EY)) : QY;
        for (; FY < 7 && 1 != FY || 1 == FY && DY.charAt(1) > 3;) FY = (DY = VY((QY = QY.times(YY)).d)).charAt(0), yY++;
        for (RY = TY(QY), FY > 1 ? (QY = new WY("0." + DY), RY++) : QY = new WY(FY + "." + DY.slice(1)), vY = aY = QY = SY(QY.minus(AY), QY.plus(AY), sY), iY = KY(QY.times(QY), sY), IY = 3;;) {
          if (aY = KY(aY.times(iY), sY), VY((uY = vY.plus(SY(aY, new WY(IY), sY))).d).slice(0, sY) === VY(vY.d).slice(0, sY)) return vY = vY.times(2), 0 !== RY && (vY = vY.plus(eY(WY, sY + 2, EY).times(RY + ""))), vY = SY(vY, new WY(yY), sY), WY.precision = EY, null == rY ? (OY = !0, KY(vY, EY)) : vY;
          vY = uY, IY += 2
        }
      }

      function cY(YY, rY) {
        var DY, FY, AY;
        for ((DY = rY.indexOf(".")) > -1 && (rY = rY.replace(".", "")), (FY = rY.search(/e/i)) > 0 ? (DY < 0 && (DY = FY), DY += +rY.slice(FY + 1), rY = rY.substring(0, FY)) : DY < 0 && (DY = rY.length), FY = 0; 48 === rY.charCodeAt(FY);) ++FY;
        for (AY = rY.length; 48 === rY.charCodeAt(AY - 1);) --AY;
        if (rY = rY.slice(FY, AY)) {
          if (AY -= FY, DY = DY - FY - 1, YY.e = uY(DY / 7), YY.d = [], FY = (DY + 1) % 7, DY < 0 && (FY += 7), FY < AY) {
            for (FY && YY.d.push(+rY.slice(0, FY)), AY -= 7; FY < AY;) YY.d.push(+rY.slice(FY, FY += 7));
            FY = 7 - (rY = rY.slice(FY)).length
          } else FY -= AY;
          for (; FY--;) rY += "0";
          if (YY.d.push(+rY), OY && (YY.e > oY || YY.e < -oY)) throw Error(vY + DY)
        } else YY.s = 0, YY.e = 0, YY.d = [0];
        return YY
      }

      function KY(YY, rY, DY) {
        var FY, AY, IY, RY, gY, aY, iY, QY, WY = YY.d;
        for (RY = 1, IY = WY[0]; IY >= 10; IY /= 10) RY++;
        if ((FY = rY - RY) < 0) FY += 7, AY = rY, iY = WY[QY = 0];
        else {
          if ((QY = Math.ceil((FY + 1) / 7)) >= (IY = WY.length)) return YY;
          for (iY = IY = WY[QY], RY = 1; IY >= 10; IY /= 10) RY++;
          AY = (FY %= 7) - 7 + RY
        }
        if (void 0 !== DY && (gY = iY / (IY = sY(10, RY - AY - 1)) % 10 | 0, aY = rY < 0 || void 0 !== WY[QY + 1] || iY % IY, aY = DY < 4 ? (gY || aY) && (0 == DY || DY == (YY.s < 0 ? 3 : 2)) : gY > 5 || 5 == gY && (4 == DY || aY || 6 == DY && (FY > 0 ? AY > 0 ? iY / sY(10, RY - AY) : 0 : WY[QY - 1]) % 10 & 1 || DY == (YY.s < 0 ? 8 : 7))), rY < 1 || !WY[0]) return aY ? (IY = TY(YY), WY.length = 1, rY = rY - IY - 1, WY[0] = sY(10, (7 - rY % 7) % 7), YY.e = uY(-rY / 7) || 0) : (WY.length = 1, WY[0] = YY.e = YY.s = 0), YY;
        if (0 == FY ? (WY.length = QY, IY = 1, QY--) : (WY.length = QY + 1, IY = sY(10, 7 - FY), WY[QY] = AY > 0 ? (iY / sY(10, RY - AY) % sY(10, AY) | 0) * IY : 0), aY)
          for (;;) {
            if (0 == QY) {
              (WY[0] += IY) == yY && (WY[0] = 1, ++YY.e);
              break
            }
            if (WY[QY] += IY, WY[QY] != yY) break;
            WY[QY--] = 0, IY = 1
          }
        for (FY = WY.length; 0 === WY[--FY];) WY.pop();
        if (OY && (YY.e > oY || YY.e < -oY)) throw Error(vY + TY(YY));
        return YY
      }

      function HY(YY, rY) {
        var DY, FY, AY, IY, RY, gY, aY, vY, uY, sY, iY = YY.constructor,
          QY = iY.precision;
        if (!YY.s || !rY.s) return rY.s ? rY.s = -rY.s : rY = new iY(YY), OY ? KY(rY, QY) : rY;
        if (aY = YY.d, sY = rY.d, FY = rY.e, vY = YY.e, aY = aY.slice(), RY = vY - FY) {
          for ((uY = RY < 0) ? (DY = aY, RY = -RY, gY = sY.length) : (DY = sY, FY = vY, gY = aY.length), RY > (AY = Math.max(Math.ceil(QY / 7), gY) + 2) && (RY = AY, DY.length = 1), DY.reverse(), AY = RY; AY--;) DY.push(0);
          DY.reverse()
        } else {
          for ((uY = (AY = aY.length) < (gY = sY.length)) && (gY = AY), AY = 0; AY < gY; AY++)
            if (aY[AY] != sY[AY]) {
              uY = aY[AY] < sY[AY];
              break
            } RY = 0
        }
        for (uY && (DY = aY, aY = sY, sY = DY, rY.s = -rY.s), gY = aY.length, AY = sY.length - gY; AY > 0; --AY) aY[gY++] = 0;
        for (AY = sY.length; AY > RY;) {
          if (aY[--AY] < sY[AY]) {
            for (IY = AY; IY && 0 === aY[--IY];) aY[IY] = yY - 1;
            --aY[IY], aY[AY] += yY
          }
          aY[AY] -= sY[AY]
        }
        for (; 0 === aY[--gY];) aY.pop();
        for (; 0 === aY[0]; aY.shift()) --FY;
        return aY[0] ? (rY.d = aY, rY.e = FY, OY ? KY(rY, QY) : rY) : new iY(0)
      }

      function zY(YY, rY, DY) {
        var FY, AY = TY(YY),
          IY = VY(YY.d),
          RY = IY.length;
        return rY ? (DY && (FY = DY - RY) > 0 ? IY = IY.charAt(0) + "." + IY.slice(1) + NY(FY) : RY > 1 && (IY = IY.charAt(0) + "." + IY.slice(1)), IY = IY + (AY < 0 ? "e" : "e+") + AY) : AY < 0 ? (IY = "0." + NY(-AY - 1) + IY, DY && (FY = DY - RY) > 0 && (IY += NY(FY))) : AY >= RY ? (IY += NY(AY + 1 - RY), DY && (FY = DY - AY - 1) > 0 && (IY = IY + "." + NY(FY))) : ((FY = AY + 1) < RY && (IY = IY.slice(0, FY) + "." + IY.slice(FY)), DY && (FY = DY - RY) > 0 && (AY + 1 === RY && (IY += "."), IY += NY(FY))), YY.s < 0 ? "-" + IY : IY
      }

      function ZY(YY, rY) {
        if (YY.length > rY) return YY.length = rY, !0
      }

      function CY(YY) {
        if (!YY || "object" !== typeof YY) throw Error(gY + "Object expected");
        var rY, DY, FY, AY = ["precision", 1, IY, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (rY = 0; rY < AY.length; rY += 3)
          if (void 0 !== (FY = YY[DY = AY[rY]])) {
            if (!(uY(FY) === FY && FY >= AY[rY + 1] && FY <= AY[rY + 2])) throw Error(aY + DY + ": " + FY);
            this[DY] = FY
          } if (void 0 !== (FY = YY[DY = "LN10"])) {
          if (FY != Math.LN10) throw Error(aY + DY + ": " + FY);
          this[DY] = new this(FY)
        }
        return this
      }
      RY = function YY(rY) {
        var DY, FY, AY;

        function IY(YY) {
          var rY = this;
          if (!(rY instanceof IY)) return new IY(YY);
          if (rY.constructor = IY, YY instanceof IY) return rY.s = YY.s, rY.e = YY.e, void(rY.d = (YY = YY.d) ? YY.slice() : YY);
          if ("number" === typeof YY) {
            if (0 * YY !== 0) throw Error(aY + YY);
            if (YY > 0) rY.s = 1;
            else {
              if (!(YY < 0)) return rY.s = 0, rY.e = 0, void(rY.d = [0]);
              YY = -YY, rY.s = -1
            }
            return YY === ~~YY && YY < 1e7 ? (rY.e = 0, void(rY.d = [YY])) : cY(rY, YY.toString())
          }
          if ("string" !== typeof YY) throw Error(aY + YY);
          if (45 === YY.charCodeAt(0) ? (YY = YY.slice(1), rY.s = -1) : rY.s = 1, !iY.test(YY)) throw Error(aY + YY);
          cY(rY, YY)
        }
        if (IY.prototype = WY, IY.ROUND_UP = 0, IY.ROUND_DOWN = 1, IY.ROUND_CEIL = 2, IY.ROUND_FLOOR = 3, IY.ROUND_HALF_UP = 4, IY.ROUND_HALF_DOWN = 5, IY.ROUND_HALF_EVEN = 6, IY.ROUND_HALF_CEIL = 7, IY.ROUND_HALF_FLOOR = 8, IY.clone = YY, IY.config = IY.set = CY, void 0 === rY && (rY = {}), rY)
          for (AY = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], DY = 0; DY < AY.length;) rY.hasOwnProperty(FY = AY[DY++]) || (rY[FY] = this[FY]);
        return IY.config(rY), IY
      }(RY), RY.default = RY.Decimal = RY, AY = new RY(1), void 0 === (FY = function() {
        return RY
      }.call(rY, DY, rY, YY)) || (YY.exports = FY)
    }()
  },
  5364: (YY, rY, DY) => {
    var FY = DY(4824)(DY(4667), "DataView");
    YY.exports = FY
  },
  4805: (YY, rY, DY) => {
    var FY = DY(4813),
      AY = DY(4872),
      IY = DY(4876),
      RY = DY(4885),
      OY = DY(4891);

    function gY(YY) {
      var rY = -1,
        DY = null == YY ? 0 : YY.length;
      for (this.clear(); ++rY < DY;) {
        var FY = YY[rY];
        this.set(FY[0], FY[1])
      }
    }
    gY.prototype.clear = FY, gY.prototype.delete = AY, gY.prototype.get = IY, gY.prototype.has = RY, gY.prototype.set = OY, YY.exports = gY
  },
  4895: (YY, rY, DY) => {
    var FY = DY(4899),
      AY = DY(4907),
      IY = DY(4932),
      RY = DY(4940),
      OY = DY(4945);

    function gY(YY) {
      var rY = -1,
        DY = null == YY ? 0 : YY.length;
      for (this.clear(); ++rY < DY;) {
        var FY = YY[rY];
        this.set(FY[0], FY[1])
      }
    }
    gY.prototype.clear = FY, gY.prototype.delete = AY, gY.prototype.get = IY, gY.prototype.has = RY, gY.prototype.set = OY, YY.exports = gY
  },
  4952: (YY, rY, DY) => {
    var FY = DY(4824)(DY(4667), "Map");
    YY.exports = FY
  },
  4795: (YY, rY, DY) => {
    var FY = DY(4801),
      AY = DY(4956),
      IY = DY(4975),
      RY = DY(4977),
      OY = DY(4985);

    function gY(YY) {
      var rY = -1,
        DY = null == YY ? 0 : YY.length;
      for (this.clear(); ++rY < DY;) {
        var FY = YY[rY];
        this.set(FY[0], FY[1])
      }
    }
    gY.prototype.clear = FY, gY.prototype.delete = AY, gY.prototype.get = IY, gY.prototype.has = RY, gY.prototype.set = OY, YY.exports = gY
  },
  5370: (YY, rY, DY) => {
    var FY = DY(4824)(DY(4667), "Promise");
    YY.exports = FY
  },
  5376: (YY, rY, DY) => {
    var FY = DY(4824)(DY(4667), "Set");
    YY.exports = FY
  },
  5216: (YY, rY, DY) => {
    var FY = DY(4795),
      AY = DY(5220),
      IY = DY(5224);

    function RY(YY) {
      var rY = -1,
        DY = null == YY ? 0 : YY.length;
      for (this.__data__ = new FY; ++rY < DY;) this.add(YY[rY])
    }
    RY.prototype.add = RY.prototype.push = AY, RY.prototype.has = IY, YY.exports = RY
  },
  5163: (YY, rY, DY) => {
    var FY = DY(4895),
      AY = DY(5167),
      IY = DY(5172),
      RY = DY(5181),
      OY = DY(5184),
      gY = DY(5190);

    function aY(YY) {
      var rY = this.__data__ = new FY(YY);
      this.size = rY.size
    }
    aY.prototype.clear = AY, aY.prototype.delete = IY, aY.prototype.get = RY, aY.prototype.has = OY, aY.prototype.set = gY, YY.exports = aY
  },
  4704: (YY, rY, DY) => {
    var FY = DY(4667).Symbol;
    YY.exports = FY
  },
  5245: (YY, rY, DY) => {
    var FY = DY(4667).Uint8Array;
    YY.exports = FY
  },
  5382: (YY, rY, DY) => {
    var FY = DY(4824)(DY(4667), "WeakMap");
    YY.exports = FY
  },
  5508: YY => {
    YY.exports = function(YY, rY, DY) {
      switch (DY.length) {
        case 0:
          return YY.call(rY);
        case 1:
          return YY.call(rY, DY[0]);
        case 2:
          return YY.call(rY, DY[0], DY[1]);
        case 3:
          return YY.call(rY, DY[0], DY[1], DY[2])
      }
      return YY.apply(rY, DY)
    }
  },
  5822: YY => {
    YY.exports = function(YY, rY) {
      for (var DY = -1, FY = null == YY ? 0 : YY.length; ++DY < FY;)
        if (!rY(YY[DY], DY, YY)) return !1;
      return !0
    }
  },
  5291: YY => {
    YY.exports = function(YY, rY) {
      for (var DY = -1, FY = null == YY ? 0 : YY.length, AY = 0, IY = []; ++DY < FY;) {
        var RY = YY[DY];
        rY(RY, DY, YY) && (IY[AY++] = RY)
      }
      return IY
    }
  },
  5577: (YY, rY, DY) => {
    var FY = DY(5583);
    YY.exports = function(YY, rY) {
      return !!(null == YY ? 0 : YY.length) && FY(YY, rY, 0) > -1
    }
  },
  5602: YY => {
    YY.exports = function(YY, rY, DY) {
      for (var FY = -1, AY = null == YY ? 0 : YY.length; ++FY < AY;)
        if (DY(rY, YY[FY])) return !0;
      return !1
    }
  },
  5301: (YY, rY, DY) => {
    var FY = DY(5309),
      AY = DY(5130),
      IY = DY(4739),
      RY = DY(5313),
      OY = DY(5089),
      gY = DY(5319),
      aY = Object.prototype.hasOwnProperty;
    YY.exports = function(YY, rY) {
      var DY = IY(YY),
        vY = !DY && AY(YY),
        uY = !DY && !vY && RY(YY),
        sY = !DY && !vY && !uY && gY(YY),
        iY = DY || vY || uY || sY,
        yY = iY ? FY(YY.length, String) : [],
        QY = yY.length;
      for (var oY in YY) !rY && !aY.call(YY, oY) || iY && ("length" == oY || uY && ("offset" == oY || "parent" == oY) || sY && ("buffer" == oY || "byteLength" == oY || "byteOffset" == oY) || OY(oY, QY)) || yY.push(oY);
      return yY
    }
  },
  5e3: YY => {
    YY.exports = function(YY, rY) {
      for (var DY = -1, FY = null == YY ? 0 : YY.length, AY = Array(FY); ++DY < FY;) AY[DY] = rY(YY[DY], DY, YY);
      return AY
    }
  },
  5123: YY => {
    YY.exports = function(YY, rY) {
      for (var DY = -1, FY = rY.length, AY = YY.length; ++DY < FY;) YY[AY + DY] = rY[DY];
      return YY
    }
  },
  5227: YY => {
    YY.exports = function(YY, rY) {
      for (var DY = -1, FY = null == YY ? 0 : YY.length; ++DY < FY;)
        if (rY(YY[DY], DY, YY)) return !0;
      return !1
    }
  },
  5658: YY => {
    YY.exports = function(YY) {
      return YY.split("")
    }
  },
  4916: (YY, rY, DY) => {
    var FY = DY(4923);
    YY.exports = function(YY, rY) {
      for (var DY = YY.length; DY--;)
        if (FY(YY[DY][0], rY)) return DY;
      return -1
    }
  },
  5812: (YY, rY, DY) => {
    var FY = DY(5528);
    YY.exports = function(YY, rY, DY) {
      "__proto__" == rY && FY ? FY(YY, rY, {
        configurable: !0,
        enumerable: !0,
        value: DY,
        writable: !0
      }) : YY[rY] = DY
    }
  },
  5451: (YY, rY, DY) => {
    var FY = DY(5459),
      AY = DY(5482)(FY);
    YY.exports = AY
  },
  5828: (YY, rY, DY) => {
    var FY = DY(5451);
    YY.exports = function(YY, rY) {
      var DY = !0;
      return FY(YY, (function(YY, FY, AY) {
        return DY = !!rY(YY, FY, AY)
      })), DY
    }
  },
  5731: (YY, rY, DY) => {
    var FY = DY(4689);
    YY.exports = function(YY, rY, DY) {
      for (var AY = -1, IY = YY.length; ++AY < IY;) {
        var RY = YY[AY],
          OY = rY(RY);
        if (null != OY && (void 0 === gY ? OY === OY && !FY(OY) : DY(OY, gY))) var gY = OY,
          aY = RY
      }
      return aY
    }
  },
  5586: YY => {
    YY.exports = function(YY, rY, DY, FY) {
      for (var AY = YY.length, IY = DY + (FY ? 1 : -1); FY ? IY-- : ++IY < AY;)
        if (rY(YY[IY], IY, YY)) return IY;
      return -1
    }
  },
  5114: (YY, rY, DY) => {
    var FY = DY(5123),
      AY = DY(5125);
    YY.exports = function YY(rY, DY, IY, RY, OY) {
      var gY = -1,
        aY = rY.length;
      for (IY || (IY = AY), OY || (OY = []); ++gY < aY;) {
        var vY = rY[gY];
        DY > 0 && IY(vY) ? DY > 1 ? YY(vY, DY - 1, IY, RY, OY) : FY(OY, vY) : RY || (OY[OY.length] = vY)
      }
      return OY
    }
  },
  5467: (YY, rY, DY) => {
    var FY = DY(5473)();
    YY.exports = FY
  },
  5459: (YY, rY, DY) => {
    var FY = DY(5467),
      AY = DY(5299);
    YY.exports = function(YY, rY) {
      return YY && FY(YY, rY, AY)
    }
  },
  4756: (YY, rY, DY) => {
    var FY = DY(4761),
      AY = DY(5004);
    YY.exports = function(YY, rY) {
      for (var DY = 0, IY = (rY = FY(rY, YY)).length; null != YY && DY < IY;) YY = YY[AY(rY[DY++])];
      return DY && DY == IY ? YY : void 0
    }
  },
  5277: (YY, rY, DY) => {
    var FY = DY(5123),
      AY = DY(4739);
    YY.exports = function(YY, rY, DY) {
      var IY = rY(YY);
      return AY(YY) ? IY : FY(IY, DY(YY))
    }
  },
  4697: (YY, rY, DY) => {
    var FY = DY(4704),
      AY = DY(4711),
      IY = DY(4718),
      RY = FY ? FY.toStringTag : void 0;
    YY.exports = function(YY) {
      return null == YY ? void 0 === YY ? "[object Undefined]" : "[object Null]" : RY && RY in Object(YY) ? AY(YY) : IY(YY)
    }
  },
  5733: YY => {
    YY.exports = function(YY, rY) {
      return YY > rY
    }
  },
  5422: YY => {
    YY.exports = function(YY, rY) {
      return null != YY && rY in Object(YY)
    }
  },
  5583: (YY, rY, DY) => {
    var FY = DY(5586),
      AY = DY(5592),
      IY = DY(5597);
    YY.exports = function(YY, rY, DY) {
      return rY === rY ? IY(YY, rY, DY) : FY(YY, AY, DY)
    }
  },
  5135: (YY, rY, DY) => {
    var FY = DY(4697),
      AY = DY(4721);
    YY.exports = function(YY) {
      return AY(YY) && "[object Arguments]" == FY(YY)
    }
  },
  5196: (YY, rY, DY) => {
    var FY = DY(5204),
      AY = DY(4721);
    YY.exports = function YY(rY, DY, IY, RY, OY) {
      return rY === DY || (null == rY || null == DY || !AY(rY) && !AY(DY) ? rY !== rY && DY !== DY : FY(rY, DY, IY, RY, YY, OY))
    }
  },
  5204: (YY, rY, DY) => {
    var FY = DY(5163),
      AY = DY(5211),
      IY = DY(5239),
      RY = DY(5266),
      OY = DY(5361),
      gY = DY(4739),
      aY = DY(5313),
      vY = DY(5319),
      uY = "[object Arguments]",
      sY = "[object Array]",
      iY = "[object Object]",
      yY = Object.prototype.hasOwnProperty;
    YY.exports = function(YY, rY, DY, QY, oY, WY) {
      var EY = gY(YY),
        mY = gY(rY),
        VY = EY ? sY : OY(YY),
        SY = mY ? sY : OY(rY),
        lY = (VY = VY == uY ? iY : VY) == iY,
        TY = (SY = SY == uY ? iY : SY) == iY,
        eY = VY == SY;
      if (eY && aY(YY)) {
        if (!aY(rY)) return !1;
        EY = !0, lY = !1
      }
      if (eY && !lY) return WY || (WY = new FY), EY || vY(YY) ? AY(YY, rY, DY, QY, oY, WY) : IY(YY, rY, VY, DY, QY, oY, WY);
      if (!(1 & DY)) {
        var NY = lY && yY.call(YY, "__wrapped__"),
          BY = TY && yY.call(rY, "__wrapped__");
        if (NY || BY) {
          var cY = NY ? YY.value() : YY,
            KY = BY ? rY.value() : rY;
          return WY || (WY = new FY), oY(cY, KY, DY, QY, WY)
        }
      }
      return !!eY && (WY || (WY = new FY), RY(YY, rY, DY, QY, oY, WY))
    }
  },
  5158: (YY, rY, DY) => {
    var FY = DY(5163),
      AY = DY(5196);
    YY.exports = function(YY, rY, DY, IY) {
      var RY = DY.length,
        OY = RY,
        gY = !IY;
      if (null == YY) return !OY;
      for (YY = Object(YY); RY--;) {
        var aY = DY[RY];
        if (gY && aY[2] ? aY[1] !== YY[aY[0]] : !(aY[0] in YY)) return !1
      }
      for (; ++RY < OY;) {
        var vY = (aY = DY[RY])[0],
          uY = YY[vY],
          sY = aY[1];
        if (gY && aY[2]) {
          if (void 0 === uY && !(vY in YY)) return !1
        } else {
          var iY = new FY;
          if (IY) var yY = IY(uY, sY, vY, YY, rY, iY);
          if (!(void 0 === yY ? AY(sY, uY, 3, IY, iY) : yY)) return !1
        }
      }
      return !0
    }
  },
  5592: YY => {
    YY.exports = function(YY) {
      return YY !== YY
    }
  },
  4831: (YY, rY, DY) => {
    var FY = DY(4840),
      AY = DY(4847),
      IY = DY(4651),
      RY = DY(4858),
      OY = /^\[object .+?Constructor\]$/,
      gY = Function.prototype,
      aY = Object.prototype,
      vY = gY.toString,
      uY = aY.hasOwnProperty,
      sY = RegExp("^" + vY.call(uY).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    YY.exports = function(YY) {
      return !(!IY(YY) || AY(YY)) && (FY(YY) ? sY : OY).test(RY(YY))
    }
  },
  5324: (YY, rY, DY) => {
    var FY = DY(4697),
      AY = DY(5085),
      IY = DY(4721),
      RY = {};
    RY["[object Float32Array]"] = RY["[object Float64Array]"] = RY["[object Int8Array]"] = RY["[object Int16Array]"] = RY["[object Int32Array]"] = RY["[object Uint8Array]"] = RY["[object Uint8ClampedArray]"] = RY["[object Uint16Array]"] = RY["[object Uint32Array]"] = !0, RY["[object Arguments]"] = RY["[object Array]"] = RY["[object ArrayBuffer]"] = RY["[object Boolean]"] = RY["[object DataView]"] = RY["[object Date]"] = RY["[object Error]"] = RY["[object Function]"] = RY["[object Map]"] = RY["[object Number]"] = RY["[object Object]"] = RY["[object RegExp]"] = RY["[object Set]"] = RY["[object String]"] = RY["[object WeakMap]"] = !1, YY.exports = function(YY) {
      return IY(YY) && AY(YY.length) && !!RY[FY(YY)]
    }
  },
  5149: (YY, rY, DY) => {
    var FY = DY(5152),
      AY = DY(5407),
      IY = DY(5430),
      RY = DY(4739),
      OY = DY(5434);
    YY.exports = function(YY) {
      return "function" == typeof YY ? YY : null == YY ? IY : "object" == typeof YY ? RY(YY) ? AY(YY[0], YY[1]) : FY(YY) : OY(YY)
    }
  },
  5346: (YY, rY, DY) => {
    var FY = DY(5348),
      AY = DY(5351),
      IY = Object.prototype.hasOwnProperty;
    YY.exports = function(YY) {
      if (!FY(YY)) return AY(YY);
      var rY = [];
      for (var DY in Object(YY)) IY.call(YY, DY) && "constructor" != DY && rY.push(DY);
      return rY
    }
  },
  5747: YY => {
    YY.exports = function(YY, rY) {
      return YY < rY
    }
  },
  5446: (YY, rY, DY) => {
    var FY = DY(5451),
      AY = DY(5076);
    YY.exports = function(YY, rY) {
      var DY = -1,
        IY = AY(YY) ? Array(YY.length) : [];
      return FY(YY, (function(YY, FY, AY) {
        IY[++DY] = rY(YY, FY, AY)
      })), IY
    }
  },
  5152: (YY, rY, DY) => {
    var FY = DY(5158),
      AY = DY(5385),
      IY = DY(5398);
    YY.exports = function(YY) {
      var rY = AY(YY);
      return 1 == rY.length && rY[0][2] ? IY(rY[0][0], rY[0][1]) : function(DY) {
        return DY === YY || FY(DY, YY, rY)
      }
    }
  },
  5407: (YY, rY, DY) => {
    var FY = DY(5196),
      AY = DY(4752),
      IY = DY(5415),
      RY = DY(4766),
      OY = DY(5393),
      gY = DY(5398),
      aY = DY(5004);
    YY.exports = function(YY, rY) {
      return RY(YY) && OY(rY) ? gY(aY(YY), rY) : function(DY) {
        var RY = AY(DY, YY);
        return void 0 === RY && RY === rY ? IY(DY, YY) : FY(rY, RY, 3)
      }
    }
  },
  5144: (YY, rY, DY) => {
    var FY = DY(5e3),
      AY = DY(4756),
      IY = DY(5149),
      RY = DY(5446),
      OY = DY(5486),
      gY = DY(5332),
      aY = DY(5491),
      vY = DY(5430),
      uY = DY(4739);
    YY.exports = function(YY, rY, DY) {
      rY = rY.length ? FY(rY, (function(YY) {
        return uY(YY) ? function(rY) {
          return AY(rY, 1 === YY.length ? YY[0] : YY)
        } : YY
      })) : [vY];
      var sY = -1;
      rY = FY(rY, gY(IY));
      var iY = RY(YY, (function(YY, DY, AY) {
        return {
          criteria: FY(rY, (function(rY) {
            return rY(YY)
          })),
          index: ++sY,
          value: YY
        }
      }));
      return OY(iY, (function(YY, rY) {
        return aY(YY, rY, DY)
      }))
    }
  },
  5438: YY => {
    YY.exports = function(YY) {
      return function(rY) {
        return null == rY ? void 0 : rY[YY]
      }
    }
  },
  5444: (YY, rY, DY) => {
    var FY = DY(4756);
    YY.exports = function(YY) {
      return function(rY) {
        return FY(rY, YY)
      }
    }
  },
  5063: YY => {
    var rY = Math.ceil,
      DY = Math.max;
    YY.exports = function(YY, FY, AY, IY) {
      for (var RY = -1, OY = DY(rY((FY - YY) / (AY || 1)), 0), gY = Array(OY); OY--;) gY[IY ? OY : ++RY] = YY, YY += AY;
      return gY
    }
  },
  5498: (YY, rY, DY) => {
    var FY = DY(5430),
      AY = DY(5505),
      IY = DY(5512);
    YY.exports = function(YY, rY) {
      return IY(AY(YY, rY, FY), YY + "")
    }
  },
  5521: (YY, rY, DY) => {
    var FY = DY(5524),
      AY = DY(5528),
      IY = DY(5430),
      RY = AY ? function(YY, rY) {
        return AY(YY, "toString", {
          configurable: !0,
          enumerable: !1,
          value: FY(rY),
          writable: !0
        })
      } : IY;
    YY.exports = RY
  },
  5646: YY => {
    YY.exports = function(YY, rY, DY) {
      var FY = -1,
        AY = YY.length;
      rY < 0 && (rY = -rY > AY ? 0 : AY + rY), (DY = DY > AY ? AY : DY) < 0 && (DY += AY), AY = rY > DY ? 0 : DY - rY >>> 0, rY >>>= 0;
      for (var IY = Array(AY); ++FY < AY;) IY[FY] = YY[FY + rY];
      return IY
    }
  },
  5907: (YY, rY, DY) => {
    var FY = DY(5451);
    YY.exports = function(YY, rY) {
      var DY;
      return FY(YY, (function(YY, FY, AY) {
        return !(DY = rY(YY, FY, AY))
      })), !!DY
    }
  },
  5486: YY => {
    YY.exports = function(YY, rY) {
      var DY = YY.length;
      for (YY.sort(rY); DY--;) YY[DY] = YY[DY].value;
      return YY
    }
  },
  5309: YY => {
    YY.exports = function(YY, rY) {
      for (var DY = -1, FY = Array(YY); ++DY < YY;) FY[DY] = rY(DY);
      return FY
    }
  },
  4991: (YY, rY, DY) => {
    var FY = DY(4704),
      AY = DY(5e3),
      IY = DY(4739),
      RY = DY(4689),
      OY = FY ? FY.prototype : void 0,
      gY = OY ? OY.toString : void 0;
    YY.exports = function YY(rY) {
      if ("string" == typeof rY) return rY;
      if (IY(rY)) return AY(rY, YY) + "";
      if (RY(rY)) return gY ? gY.call(rY) : "";
      var DY = rY + "";
      return "0" == DY && 1 / rY == -1 / 0 ? "-0" : DY
    }
  },
  4677: (YY, rY, DY) => {
    var FY = DY(4685),
      AY = /^\s+/;
    YY.exports = function(YY) {
      return YY ? YY.slice(0, FY(YY) + 1).replace(AY, "") : YY
    }
  },
  5332: YY => {
    YY.exports = function(YY) {
      return function(rY) {
        return YY(rY)
      }
    }
  },
  5569: (YY, rY, DY) => {
    var FY = DY(5216),
      AY = DY(5577),
      IY = DY(5602),
      RY = DY(5234),
      OY = DY(5604),
      gY = DY(5259);
    YY.exports = function(YY, rY, DY) {
      var aY = -1,
        vY = AY,
        uY = YY.length,
        sY = !0,
        iY = [],
        yY = iY;
      if (DY) sY = !1, vY = IY;
      else if (uY >= 200) {
        var QY = rY ? null : OY(YY);
        if (QY) return gY(QY);
        sY = !1, vY = RY, yY = new FY
      } else yY = rY ? [] : iY;
      YY: for (; ++aY < uY;) {
        var oY = YY[aY],
          WY = rY ? rY(oY) : oY;
        if (oY = DY || 0 !== oY ? oY : 0, sY && WY === WY) {
          for (var EY = yY.length; EY--;)
            if (yY[EY] === WY) continue YY;
          rY && yY.push(WY), iY.push(oY)
        } else vY(yY, WY, DY) || (yY !== iY && yY.push(WY), iY.push(oY))
      }
      return iY
    }
  },
  5234: YY => {
    YY.exports = function(YY, rY) {
      return YY.has(rY)
    }
  },
  4761: (YY, rY, DY) => {
    var FY = DY(4739),
      AY = DY(4766),
      IY = DY(4775),
      RY = DY(4987);
    YY.exports = function(YY, rY) {
      return FY(YY) ? YY : AY(YY, rY) ? [YY] : IY(RY(YY))
    }
  },
  5639: (YY, rY, DY) => {
    var FY = DY(5646);
    YY.exports = function(YY, rY, DY) {
      var AY = YY.length;
      return DY = void 0 === DY ? AY : DY, !rY && DY >= AY ? YY : FY(YY, rY, DY)
    }
  },
  5495: (YY, rY, DY) => {
    var FY = DY(4689);
    YY.exports = function(YY, rY) {
      if (YY !== rY) {
        var DY = void 0 !== YY,
          AY = null === YY,
          IY = YY === YY,
          RY = FY(YY),
          OY = void 0 !== rY,
          gY = null === rY,
          aY = rY === rY,
          vY = FY(rY);
        if (!gY && !vY && !RY && YY > rY || RY && OY && aY && !gY && !vY || AY && OY && aY || !DY && aY || !IY) return 1;
        if (!AY && !RY && !vY && YY < rY || vY && DY && IY && !AY && !RY || gY && DY && IY || !OY && IY || !aY) return -1
      }
      return 0
    }
  },
  5491: (YY, rY, DY) => {
    var FY = DY(5495);
    YY.exports = function(YY, rY, DY) {
      for (var AY = -1, IY = YY.criteria, RY = rY.criteria, OY = IY.length, gY = DY.length; ++AY < OY;) {
        var aY = FY(IY[AY], RY[AY]);
        if (aY) return AY >= gY ? aY : aY * ("desc" == DY[AY] ? -1 : 1)
      }
      return YY.index - rY.index
    }
  },
  4852: (YY, rY, DY) => {
    var FY = DY(4667)["__core-js_shared__"];
    YY.exports = FY
  },
  5482: (YY, rY, DY) => {
    var FY = DY(5076);
    YY.exports = function(YY, rY) {
      return function(DY, AY) {
        if (null == DY) return DY;
        if (!FY(DY)) return YY(DY, AY);
        for (var IY = DY.length, RY = rY ? IY : -1, OY = Object(DY);
          (rY ? RY-- : ++RY < IY) && !1 !== AY(OY[RY], RY, OY););
        return DY
      }
    }
  },
  5473: YY => {
    YY.exports = function(YY) {
      return function(rY, DY, FY) {
        for (var AY = -1, IY = Object(rY), RY = FY(rY), OY = RY.length; OY--;) {
          var gY = RY[YY ? OY : ++AY];
          if (!1 === DY(IY[gY], gY, IY)) break
        }
        return rY
      }
    }
  },
  5634: (YY, rY, DY) => {
    var FY = DY(5639),
      AY = DY(5648),
      IY = DY(5651),
      RY = DY(4987);
    YY.exports = function(YY) {
      return function(rY) {
        rY = RY(rY);
        var DY = AY(rY) ? IY(rY) : void 0,
          OY = DY ? DY[0] : rY.charAt(0),
          gY = DY ? FY(DY, 1).join("") : rY.slice(1);
        return OY[YY]() + gY
      }
    }
  },
  5925: (YY, rY, DY) => {
    var FY = DY(5149),
      AY = DY(5076),
      IY = DY(5299);
    YY.exports = function(YY) {
      return function(rY, DY, RY) {
        var OY = Object(rY);
        if (!AY(rY)) {
          var gY = FY(DY, 3);
          rY = IY(rY), DY = function(YY) {
            return gY(OY[YY], YY, OY)
          }
        }
        var aY = YY(rY, DY, RY);
        return aY > -1 ? OY[gY ? rY[aY] : aY] : void 0
      }
    }
  },
  5056: (YY, rY, DY) => {
    var FY = DY(5063),
      AY = DY(5072),
      IY = DY(5097);
    YY.exports = function(YY) {
      return function(rY, DY, RY) {
        return RY && "number" != typeof RY && AY(rY, DY, RY) && (DY = RY = void 0), rY = IY(rY), void 0 === DY ? (DY = rY, rY = 0) : DY = IY(DY), RY = void 0 === RY ? rY < DY ? 1 : -1 : IY(RY), FY(rY, DY, RY, YY)
      }
    }
  },
  5604: (YY, rY, DY) => {
    var FY = DY(5376),
      AY = DY(5613),
      IY = DY(5259),
      RY = FY && 1 / IY(new FY([, -0]))[1] == 1 / 0 ? function(YY) {
        return new FY(YY)
      } : AY;
    YY.exports = RY
  },
  5528: (YY, rY, DY) => {
    var FY = DY(4824),
      AY = function() {
        try {
          var YY = FY(Object, "defineProperty");
          return YY({}, "", {}), YY
        } catch (rY) {}
      }();
    YY.exports = AY
  },
  5211: (YY, rY, DY) => {
    var FY = DY(5216),
      AY = DY(5227),
      IY = DY(5234);
    YY.exports = function(YY, rY, DY, RY, OY, gY) {
      var aY = 1 & DY,
        vY = YY.length,
        uY = rY.length;
      if (vY != uY && !(aY && uY > vY)) return !1;
      var sY = gY.get(YY),
        iY = gY.get(rY);
      if (sY && iY) return sY == rY && iY == YY;
      var yY = -1,
        QY = !0,
        oY = 2 & DY ? new FY : void 0;
      for (gY.set(YY, rY), gY.set(rY, YY); ++yY < vY;) {
        var WY = YY[yY],
          EY = rY[yY];
        if (RY) var mY = aY ? RY(EY, WY, yY, rY, YY, gY) : RY(WY, EY, yY, YY, rY, gY);
        if (void 0 !== mY) {
          if (mY) continue;
          QY = !1;
          break
        }
        if (oY) {
          if (!AY(rY, (function(YY, rY) {
              if (!IY(oY, rY) && (WY === YY || OY(WY, YY, DY, RY, gY))) return oY.push(rY)
            }))) {
            QY = !1;
            break
          }
        } else if (WY !== EY && !OY(WY, EY, DY, RY, gY)) {
          QY = !1;
          break
        }
      }
      return gY.delete(YY), gY.delete(rY), QY
    }
  },
  5239: (YY, rY, DY) => {
    var FY = DY(4704),
      AY = DY(5245),
      IY = DY(4923),
      RY = DY(5211),
      OY = DY(5252),
      gY = DY(5259),
      aY = FY ? FY.prototype : void 0,
      vY = aY ? aY.valueOf : void 0;
    YY.exports = function(YY, rY, DY, FY, aY, uY, sY) {
      switch (DY) {
        case "[object DataView]":
          if (YY.byteLength != rY.byteLength || YY.byteOffset != rY.byteOffset) return !1;
          YY = YY.buffer, rY = rY.buffer;
        case "[object ArrayBuffer]":
          return !(YY.byteLength != rY.byteLength || !uY(new AY(YY), new AY(rY)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return IY(+YY, +rY);
        case "[object Error]":
          return YY.name == rY.name && YY.message == rY.message;
        case "[object RegExp]":
        case "[object String]":
          return YY == rY + "";
        case "[object Map]":
          var iY = OY;
        case "[object Set]":
          var yY = 1 & FY;
          if (iY || (iY = gY), YY.size != rY.size && !yY) return !1;
          var QY = sY.get(YY);
          if (QY) return QY == rY;
          FY |= 2, sY.set(YY, rY);
          var oY = RY(iY(YY), iY(rY), FY, aY, uY, sY);
          return sY.delete(YY), oY;
        case "[object Symbol]":
          if (vY) return vY.call(YY) == vY.call(rY)
      }
      return !1
    }
  },
  5266: (YY, rY, DY) => {
    var FY = DY(5270),
      AY = Object.prototype.hasOwnProperty;
    YY.exports = function(YY, rY, DY, IY, RY, OY) {
      var gY = 1 & DY,
        aY = FY(YY),
        vY = aY.length;
      if (vY != FY(rY).length && !gY) return !1;
      for (var uY = vY; uY--;) {
        var sY = aY[uY];
        if (!(gY ? sY in rY : AY.call(rY, sY))) return !1
      }
      var iY = OY.get(YY),
        yY = OY.get(rY);
      if (iY && yY) return iY == rY && yY == YY;
      var QY = !0;
      OY.set(YY, rY), OY.set(rY, YY);
      for (var oY = gY; ++uY < vY;) {
        var WY = YY[sY = aY[uY]],
          EY = rY[sY];
        if (IY) var mY = gY ? IY(EY, WY, sY, rY, YY, OY) : IY(WY, EY, sY, YY, rY, OY);
        if (!(void 0 === mY ? WY === EY || RY(WY, EY, DY, IY, OY) : mY)) {
          QY = !1;
          break
        }
        oY || (oY = "constructor" == sY)
      }
      if (QY && !oY) {
        var VY = YY.constructor,
          SY = rY.constructor;
        VY == SY || !("constructor" in YY) || !("constructor" in rY) || "function" == typeof VY && VY instanceof VY && "function" == typeof SY && SY instanceof SY || (QY = !1)
      }
      return OY.delete(YY), OY.delete(rY), QY
    }
  },
  4671: (YY, rY, DY) => {
    var FY = "object" == typeof DY.g && DY.g && DY.g.Object === Object && DY.g;
    YY.exports = FY
  },
  5270: (YY, rY, DY) => {
    var FY = DY(5277),
      AY = DY(5285),
      IY = DY(5299);
    YY.exports = function(YY) {
      return FY(YY, IY, AY)
    }
  },
  4962: (YY, rY, DY) => {
    var FY = DY(4971);
    YY.exports = function(YY, rY) {
      var DY = YY.__data__;
      return FY(rY) ? DY["string" == typeof rY ? "string" : "hash"] : DY.map
    }
  },
  5385: (YY, rY, DY) => {
    var FY = DY(5393),
      AY = DY(5299);
    YY.exports = function(YY) {
      for (var rY = AY(YY), DY = rY.length; DY--;) {
        var IY = rY[DY],
          RY = YY[IY];
        rY[DY] = [IY, RY, FY(RY)]
      }
      return rY
    }
  },
  4824: (YY, rY, DY) => {
    var FY = DY(4831),
      AY = DY(4865);
    YY.exports = function(YY, rY) {
      var DY = AY(YY, rY);
      return FY(DY) ? DY : void 0
    }
  },
  5864: (YY, rY, DY) => {
    var FY = DY(5357)(Object.getPrototypeOf, Object);
    YY.exports = FY
  },
  4711: (YY, rY, DY) => {
    var FY = DY(4704),
      AY = Object.prototype,
      IY = AY.hasOwnProperty,
      RY = AY.toString,
      OY = FY ? FY.toStringTag : void 0;
    YY.exports = function(YY) {
      var rY = IY.call(YY, OY),
        DY = YY[OY];
      try {
        YY[OY] = void 0;
        var FY = !0
      } catch (gY) {}
      var AY = RY.call(YY);
      return FY && (rY ? YY[OY] = DY : delete YY[OY]), AY
    }
  },
  5285: (YY, rY, DY) => {
    var FY = DY(5291),
      AY = DY(5294),
      IY = Object.prototype.propertyIsEnumerable,
      RY = Object.getOwnPropertySymbols,
      OY = RY ? function(YY) {
        return null == YY ? [] : (YY = Object(YY), FY(RY(YY), (function(rY) {
          return IY.call(YY, rY)
        })))
      } : AY;
    YY.exports = OY
  },
  5361: (YY, rY, DY) => {
    var FY = DY(5364),
      AY = DY(4952),
      IY = DY(5370),
      RY = DY(5376),
      OY = DY(5382),
      gY = DY(4697),
      aY = DY(4858),
      vY = "[object Map]",
      uY = "[object Promise]",
      sY = "[object Set]",
      iY = "[object WeakMap]",
      yY = "[object DataView]",
      QY = aY(FY),
      oY = aY(AY),
      WY = aY(IY),
      EY = aY(RY),
      mY = aY(OY),
      VY = gY;
    (FY && VY(new FY(new ArrayBuffer(1))) != yY || AY && VY(new AY) != vY || IY && VY(IY.resolve()) != uY || RY && VY(new RY) != sY || OY && VY(new OY) != iY) && (VY = function(YY) {
      var rY = gY(YY),
        DY = "[object Object]" == rY ? YY.constructor : void 0,
        FY = DY ? aY(DY) : "";
      if (FY) switch (FY) {
        case QY:
          return yY;
        case oY:
          return vY;
        case WY:
          return uY;
        case EY:
          return sY;
        case mY:
          return iY
      }
      return rY
    }), YY.exports = VY
  },
  4865: YY => {
    YY.exports = function(YY, rY) {
      return null == YY ? void 0 : YY[rY]
    }
  },
  5426: (YY, rY, DY) => {
    var FY = DY(4761),
      AY = DY(5130),
      IY = DY(4739),
      RY = DY(5089),
      OY = DY(5085),
      gY = DY(5004);
    YY.exports = function(YY, rY, DY) {
      for (var aY = -1, vY = (rY = FY(rY, YY)).length, uY = !1; ++aY < vY;) {
        var sY = gY(rY[aY]);
        if (!(uY = null != YY && DY(YY, sY))) break;
        YY = YY[sY]
      }
      return uY || ++aY != vY ? uY : !!(vY = null == YY ? 0 : YY.length) && OY(vY) && RY(sY, vY) && (IY(YY) || AY(YY))
    }
  },
  5648: YY => {
    var rY = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    YY.exports = function(YY) {
      return rY.test(YY)
    }
  },
  4813: (YY, rY, DY) => {
    var FY = DY(4816);
    YY.exports = function() {
      this.__data__ = FY ? FY(null) : {}, this.size = 0
    }
  },
  4872: YY => {
    YY.exports = function(YY) {
      var rY = this.has(YY) && delete this.__data__[YY];
      return this.size -= rY ? 1 : 0, rY
    }
  },
  4876: (YY, rY, DY) => {
    var FY = DY(4816),
      AY = Object.prototype.hasOwnProperty;
    YY.exports = function(YY) {
      var rY = this.__data__;
      if (FY) {
        var DY = rY[YY];
        return "__lodash_hash_undefined__" === DY ? void 0 : DY
      }
      return AY.call(rY, YY) ? rY[YY] : void 0
    }
  },
  4885: (YY, rY, DY) => {
    var FY = DY(4816),
      AY = Object.prototype.hasOwnProperty;
    YY.exports = function(YY) {
      var rY = this.__data__;
      return FY ? void 0 !== rY[YY] : AY.call(rY, YY)
    }
  },
  4891: (YY, rY, DY) => {
    var FY = DY(4816);
    YY.exports = function(YY, rY) {
      var DY = this.__data__;
      return this.size += this.has(YY) ? 0 : 1, DY[YY] = FY && void 0 === rY ? "__lodash_hash_undefined__" : rY, this
    }
  },
  5125: (YY, rY, DY) => {
    var FY = DY(4704),
      AY = DY(5130),
      IY = DY(4739),
      RY = FY ? FY.isConcatSpreadable : void 0;
    YY.exports = function(YY) {
      return IY(YY) || AY(YY) || !!(RY && YY && YY[RY])
    }
  },
  5089: YY => {
    var rY = /^(?:0|[1-9]\d*)$/;
    YY.exports = function(YY, DY) {
      var FY = typeof YY;
      return !!(DY = null == DY ? 9007199254740991 : DY) && ("number" == FY || "symbol" != FY && rY.test(YY)) && YY > -1 && YY % 1 == 0 && YY < DY
    }
  },
  5072: (YY, rY, DY) => {
    var FY = DY(4923),
      AY = DY(5076),
      IY = DY(5089),
      RY = DY(4651);
    YY.exports = function(YY, rY, DY) {
      if (!RY(DY)) return !1;
      var OY = typeof rY;
      return !!("number" == OY ? AY(DY) && IY(rY, DY.length) : "string" == OY && rY in DY) && FY(DY[rY], YY)
    }
  },
  4766: (YY, rY, DY) => {
    var FY = DY(4739),
      AY = DY(4689),
      IY = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      RY = /^\w*$/;
    YY.exports = function(YY, rY) {
      if (FY(YY)) return !1;
      var DY = typeof YY;
      return !("number" != DY && "symbol" != DY && "boolean" != DY && null != YY && !AY(YY)) || (RY.test(YY) || !IY.test(YY) || null != rY && YY in Object(rY))
    }
  },
  4971: YY => {
    YY.exports = function(YY) {
      var rY = typeof YY;
      return "string" == rY || "number" == rY || "symbol" == rY || "boolean" == rY ? "__proto__" !== YY : null === YY
    }
  },
  4847: (YY, rY, DY) => {
    var FY = DY(4852),
      AY = function() {
        var YY = /[^.]+$/.exec(FY && FY.keys && FY.keys.IE_PROTO || "");
        return YY ? "Symbol(src)_1." + YY : ""
      }();
    YY.exports = function(YY) {
      return !!AY && AY in YY
    }
  },
  5348: YY => {
    var rY = Object.prototype;
    YY.exports = function(YY) {
      var DY = YY && YY.constructor;
      return YY === ("function" == typeof DY && DY.prototype || rY)
    }
  },
  5393: (YY, rY, DY) => {
    var FY = DY(4651);
    YY.exports = function(YY) {
      return YY === YY && !FY(YY)
    }
  },
  4899: YY => {
    YY.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  4907: (YY, rY, DY) => {
    var FY = DY(4916),
      AY = Array.prototype.splice;
    YY.exports = function(YY) {
      var rY = this.__data__,
        DY = FY(rY, YY);
      return !(DY < 0) && (DY == rY.length - 1 ? rY.pop() : AY.call(rY, DY, 1), --this.size, !0)
    }
  },
  4932: (YY, rY, DY) => {
    var FY = DY(4916);
    YY.exports = function(YY) {
      var rY = this.__data__,
        DY = FY(rY, YY);
      return DY < 0 ? void 0 : rY[DY][1]
    }
  },
  4940: (YY, rY, DY) => {
    var FY = DY(4916);
    YY.exports = function(YY) {
      return FY(this.__data__, YY) > -1
    }
  },
  4945: (YY, rY, DY) => {
    var FY = DY(4916);
    YY.exports = function(YY, rY) {
      var DY = this.__data__,
        AY = FY(DY, YY);
      return AY < 0 ? (++this.size, DY.push([YY, rY])) : DY[AY][1] = rY, this
    }
  },
  4801: (YY, rY, DY) => {
    var FY = DY(4805),
      AY = DY(4895),
      IY = DY(4952);
    YY.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new FY,
        map: new(IY || AY),
        string: new FY
      }
    }
  },
  4956: (YY, rY, DY) => {
    var FY = DY(4962);
    YY.exports = function(YY) {
      var rY = FY(this, YY).delete(YY);
      return this.size -= rY ? 1 : 0, rY
    }
  },
  4975: (YY, rY, DY) => {
    var FY = DY(4962);
    YY.exports = function(YY) {
      return FY(this, YY).get(YY)
    }
  },
  4977: (YY, rY, DY) => {
    var FY = DY(4962);
    YY.exports = function(YY) {
      return FY(this, YY).has(YY)
    }
  },
  4985: (YY, rY, DY) => {
    var FY = DY(4962);
    YY.exports = function(YY, rY) {
      var DY = FY(this, YY),
        AY = DY.size;
      return DY.set(YY, rY), this.size += DY.size == AY ? 0 : 1, this
    }
  },
  5252: YY => {
    YY.exports = function(YY) {
      var rY = -1,
        DY = Array(YY.size);
      return YY.forEach((function(YY, FY) {
        DY[++rY] = [FY, YY]
      })), DY
    }
  },
  5398: YY => {
    YY.exports = function(YY, rY) {
      return function(DY) {
        return null != DY && (DY[YY] === rY && (void 0 !== rY || YY in Object(DY)))
      }
    }
  },
  4781: (YY, rY, DY) => {
    var FY = DY(4788);
    YY.exports = function(YY) {
      var rY = FY(YY, (function(YY) {
          return 500 === DY.size && DY.clear(), YY
        })),
        DY = rY.cache;
      return rY
    }
  },
  4816: (YY, rY, DY) => {
    var FY = DY(4824)(Object, "create");
    YY.exports = FY
  },
  5351: (YY, rY, DY) => {
    var FY = DY(5357)(Object.keys, Object);
    YY.exports = FY
  },
  5341: (YY, rY, DY) => {
    YY = DY.nmd(YY);
    var FY = DY(4671),
      AY = rY && !rY.nodeType && rY,
      IY = AY && YY && !YY.nodeType && YY,
      RY = IY && IY.exports === AY && FY.process,
      OY = function() {
        try {
          var YY = IY && IY.require && IY.require("util").types;
          return YY || RY && RY.binding && RY.binding("util")
        } catch (rY) {}
      }();
    YY.exports = OY
  },
  4718: YY => {
    var rY = Object.prototype.toString;
    YY.exports = function(YY) {
      return rY.call(YY)
    }
  },
  5357: YY => {
    YY.exports = function(YY, rY) {
      return function(DY) {
        return YY(rY(DY))
      }
    }
  },
  5505: (YY, rY, DY) => {
    var FY = DY(5508),
      AY = Math.max;
    YY.exports = function(YY, rY, DY) {
      return rY = AY(void 0 === rY ? YY.length - 1 : rY, 0),
        function() {
          for (var IY = arguments, RY = -1, OY = AY(IY.length - rY, 0), gY = Array(OY); ++RY < OY;) gY[RY] = IY[rY + RY];
          RY = -1;
          for (var aY = Array(rY + 1); ++RY < rY;) aY[RY] = IY[RY];
          return aY[rY] = DY(gY), FY(YY, this, aY)
        }
    }
  },
  4667: (YY, rY, DY) => {
    var FY = DY(4671),
      AY = "object" == typeof self && self && self.Object === Object && self,
      IY = FY || AY || Function("return this")();
    YY.exports = IY
  },
  5220: YY => {
    YY.exports = function(YY) {
      return this.__data__.set(YY, "__lodash_hash_undefined__"), this
    }
  },
  5224: YY => {
    YY.exports = function(YY) {
      return this.__data__.has(YY)
    }
  },
  5259: YY => {
    YY.exports = function(YY) {
      var rY = -1,
        DY = Array(YY.size);
      return YY.forEach((function(YY) {
        DY[++rY] = YY
      })), DY
    }
  },
  5512: (YY, rY, DY) => {
    var FY = DY(5521),
      AY = DY(5531)(FY);
    YY.exports = AY
  },
  5531: YY => {
    var rY = Date.now;
    YY.exports = function(YY) {
      var DY = 0,
        FY = 0;
      return function() {
        var AY = rY(),
          IY = 16 - (AY - FY);
        if (FY = AY, IY > 0) {
          if (++DY >= 800) return arguments[0]
        } else DY = 0;
        return YY.apply(void 0, arguments)
      }
    }
  },
  5167: (YY, rY, DY) => {
    var FY = DY(4895);
    YY.exports = function() {
      this.__data__ = new FY, this.size = 0
    }
  },
  5172: YY => {
    YY.exports = function(YY) {
      var rY = this.__data__,
        DY = rY.delete(YY);
      return this.size = rY.size, DY
    }
  },
  5181: YY => {
    YY.exports = function(YY) {
      return this.__data__.get(YY)
    }
  },
  5184: YY => {
    YY.exports = function(YY) {
      return this.__data__.has(YY)
    }
  },
  5190: (YY, rY, DY) => {
    var FY = DY(4895),
      AY = DY(4952),
      IY = DY(4795);
    YY.exports = function(YY, rY) {
      var DY = this.__data__;
      if (DY instanceof FY) {
        var RY = DY.__data__;
        if (!AY || RY.length < 199) return RY.push([YY, rY]), this.size = ++DY.size, this;
        DY = this.__data__ = new IY(RY)
      }
      return DY.set(YY, rY), this.size = DY.size, this
    }
  },
  5597: YY => {
    YY.exports = function(YY, rY, DY) {
      for (var FY = DY - 1, AY = YY.length; ++FY < AY;)
        if (YY[FY] === rY) return FY;
      return -1
    }
  },
  5651: (YY, rY, DY) => {
    var FY = DY(5658),
      AY = DY(5648),
      IY = DY(5664);
    YY.exports = function(YY) {
      return AY(YY) ? IY(YY) : FY(YY)
    }
  },
  4775: (YY, rY, DY) => {
    var FY = DY(4781),
      AY = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      IY = /\\(\\)?/g,
      RY = FY((function(YY) {
        var rY = [];
        return 46 === YY.charCodeAt(0) && rY.push(""), YY.replace(AY, (function(YY, DY, FY, AY) {
          rY.push(FY ? AY.replace(IY, "$1") : DY || YY)
        })), rY
      }));
    YY.exports = RY
  },
  5004: (YY, rY, DY) => {
    var FY = DY(4689);
    YY.exports = function(YY) {
      if ("string" == typeof YY || FY(YY)) return YY;
      var rY = YY + "";
      return "0" == rY && 1 / YY == -1 / 0 ? "-0" : rY
    }
  },
  4858: YY => {
    var rY = Function.prototype.toString;
    YY.exports = function(YY) {
      if (null != YY) {
        try {
          return rY.call(YY)
        } catch (DY) {}
        try {
          return YY + ""
        } catch (DY) {}
      }
      return ""
    }
  },
  4685: YY => {
    var rY = /\s/;
    YY.exports = function(YY) {
      for (var DY = YY.length; DY-- && rY.test(YY.charAt(DY)););
      return DY
    }
  },
  5664: YY => {
    var rY = "\\ud800-\\udfff",
      DY = "[" + rY + "]",
      FY = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      AY = "\\ud83c[\\udffb-\\udfff]",
      IY = "[^" + rY + "]",
      RY = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      OY = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      gY = "(?:" + FY + "|" + AY + ")" + "?",
      aY = "[\\ufe0e\\ufe0f]?",
      vY = aY + gY + ("(?:\\u200d(?:" + [IY, RY, OY].join("|") + ")" + aY + gY + ")*"),
      uY = "(?:" + [IY + FY + "?", FY, RY, OY, DY].join("|") + ")",
      sY = RegExp(AY + "(?=" + AY + ")|" + uY + vY, "g");
    YY.exports = function(YY) {
      return YY.match(sY) || []
    }
  },
  5524: YY => {
    YY.exports = function(YY) {
      return function() {
        return YY
      }
    }
  },
  4648: (YY, rY, DY) => {
    var FY = DY(4651),
      AY = DY(4659),
      IY = DY(4673),
      RY = Math.max,
      OY = Math.min;
    YY.exports = function(YY, rY, DY) {
      var gY, aY, vY, uY, sY, iY, yY = 0,
        QY = !1,
        oY = !1,
        WY = !0;
      if ("function" != typeof YY) throw new TypeError("Expected a function");

      function EY(rY) {
        var DY = gY,
          FY = aY;
        return gY = aY = void 0, yY = rY, uY = YY.apply(FY, DY)
      }

      function mY(YY) {
        var DY = YY - iY;
        return void 0 === iY || DY >= rY || DY < 0 || oY && YY - yY >= vY
      }

      function VY() {
        var YY = AY();
        if (mY(YY)) return SY(YY);
        sY = setTimeout(VY, function(YY) {
          var DY = rY - (YY - iY);
          return oY ? OY(DY, vY - (YY - yY)) : DY
        }(YY))
      }

      function SY(YY) {
        return sY = void 0, WY && gY ? EY(YY) : (gY = aY = void 0, uY)
      }

      function lY() {
        var YY = AY(),
          DY = mY(YY);
        if (gY = arguments, aY = this, iY = YY, DY) {
          if (void 0 === sY) return function(YY) {
            return yY = YY, sY = setTimeout(VY, rY), QY ? EY(YY) : uY
          }(iY);
          if (oY) return clearTimeout(sY), sY = setTimeout(VY, rY), EY(iY)
        }
        return void 0 === sY && (sY = setTimeout(VY, rY)), uY
      }
      return rY = IY(rY) || 0, FY(DY) && (QY = !!DY.leading, vY = (oY = "maxWait" in DY) ? RY(IY(DY.maxWait) || 0, rY) : vY, WY = "trailing" in DY ? !!DY.trailing : WY), lY.cancel = function() {
        void 0 !== sY && clearTimeout(sY), yY = 0, gY = iY = aY = sY = void 0
      }, lY.flush = function() {
        return void 0 === sY ? uY : SY(AY())
      }, lY
    }
  },
  4923: YY => {
    YY.exports = function(YY, rY) {
      return YY === rY || YY !== YY && rY !== rY
    }
  },
  5816: (YY, rY, DY) => {
    var FY = DY(5822),
      AY = DY(5828),
      IY = DY(5149),
      RY = DY(4739),
      OY = DY(5072);
    YY.exports = function(YY, rY, DY) {
      var gY = RY(YY) ? FY : AY;
      return DY && OY(YY, rY, DY) && (rY = void 0), gY(YY, IY(rY, 3))
    }
  },
  5918: (YY, rY, DY) => {
    var FY = DY(5925)(DY(5928));
    YY.exports = FY
  },
  5928: (YY, rY, DY) => {
    var FY = DY(5586),
      AY = DY(5149),
      IY = DY(5937),
      RY = Math.max;
    YY.exports = function(YY, rY, DY) {
      var OY = null == YY ? 0 : YY.length;
      if (!OY) return -1;
      var gY = null == DY ? 0 : IY(DY);
      return gY < 0 && (gY = RY(OY + gY, 0)), FY(YY, AY(rY, 3), gY)
    }
  },
  5751: (YY, rY, DY) => {
    var FY = DY(5114),
      AY = DY(5755);
    YY.exports = function(YY, rY) {
      return FY(AY(YY, rY), 1)
    }
  },
  4752: (YY, rY, DY) => {
    var FY = DY(4756);
    YY.exports = function(YY, rY, DY) {
      var AY = null == YY ? void 0 : FY(YY, rY);
      return void 0 === AY ? DY : AY
    }
  },
  5415: (YY, rY, DY) => {
    var FY = DY(5422),
      AY = DY(5426);
    YY.exports = function(YY, rY) {
      return null != YY && AY(YY, rY, FY)
    }
  },
  5430: YY => {
    YY.exports = function(YY) {
      return YY
    }
  },
  5130: (YY, rY, DY) => {
    var FY = DY(5135),
      AY = DY(4721),
      IY = Object.prototype,
      RY = IY.hasOwnProperty,
      OY = IY.propertyIsEnumerable,
      gY = FY(function() {
        return arguments
      }()) ? FY : function(YY) {
        return AY(YY) && RY.call(YY, "callee") && !OY.call(YY, "callee")
      };
    YY.exports = gY
  },
  4739: YY => {
    var rY = Array.isArray;
    YY.exports = rY
  },
  5076: (YY, rY, DY) => {
    var FY = DY(4840),
      AY = DY(5085);
    YY.exports = function(YY) {
      return null != YY && AY(YY.length) && !FY(YY)
    }
  },
  5872: (YY, rY, DY) => {
    var FY = DY(4697),
      AY = DY(4721);
    YY.exports = function(YY) {
      return !0 === YY || !1 === YY || AY(YY) && "[object Boolean]" == FY(YY)
    }
  },
  5313: (YY, rY, DY) => {
    YY = DY.nmd(YY);
    var FY = DY(4667),
      AY = DY(5315),
      IY = rY && !rY.nodeType && rY,
      RY = IY && YY && !YY.nodeType && YY,
      OY = RY && RY.exports === IY ? FY.Ny : void 0,
      gY = (OY ? OY.isBuffer : void 0) || AY;
    YY.exports = gY
  },
  5759: (YY, rY, DY) => {
    var FY = DY(5196);
    YY.exports = function(YY, rY) {
      return FY(YY, rY)
    }
  },
  4840: (YY, rY, DY) => {
    var FY = DY(4697),
      AY = DY(4651);
    YY.exports = function(YY) {
      if (!AY(YY)) return !1;
      var rY = FY(YY);
      return "[object Function]" == rY || "[object GeneratorFunction]" == rY || "[object AsyncFunction]" == rY || "[object Proxy]" == rY
    }
  },
  5085: YY => {
    YY.exports = function(YY) {
      return "number" == typeof YY && YY > -1 && YY % 1 == 0 && YY <= 9007199254740991
    }
  },
  4743: (YY, rY, DY) => {
    var FY = DY(4745);
    YY.exports = function(YY) {
      return FY(YY) && YY != +YY
    }
  },
  5007: YY => {
    YY.exports = function(YY) {
      return null == YY
    }
  },
  4745: (YY, rY, DY) => {
    var FY = DY(4697),
      AY = DY(4721);
    YY.exports = function(YY) {
      return "number" == typeof YY || AY(YY) && "[object Number]" == FY(YY)
    }
  },
  4651: YY => {
    YY.exports = function(YY) {
      var rY = typeof YY;
      return null != YY && ("object" == rY || "function" == rY)
    }
  },
  4721: YY => {
    YY.exports = function(YY) {
      return null != YY && "object" == typeof YY
    }
  },
  5860: (YY, rY, DY) => {
    var FY = DY(4697),
      AY = DY(5864),
      IY = DY(4721),
      RY = Function.prototype,
      OY = Object.prototype,
      gY = RY.toString,
      aY = OY.hasOwnProperty,
      vY = gY.call(Object);
    YY.exports = function(YY) {
      if (!IY(YY) || "[object Object]" != FY(YY)) return !1;
      var rY = AY(YY);
      if (null === rY) return !0;
      var DY = aY.call(rY, "constructor") && rY.constructor;
      return "function" == typeof DY && DY instanceof DY && gY.call(DY) == vY
    }
  },
  4732: (YY, rY, DY) => {
    var FY = DY(4697),
      AY = DY(4739),
      IY = DY(4721);
    YY.exports = function(YY) {
      return "string" == typeof YY || !AY(YY) && IY(YY) && "[object String]" == FY(YY)
    }
  },
  4689: (YY, rY, DY) => {
    var FY = DY(4697),
      AY = DY(4721);
    YY.exports = function(YY) {
      return "symbol" == typeof YY || AY(YY) && "[object Symbol]" == FY(YY)
    }
  },
  5319: (YY, rY, DY) => {
    var FY = DY(5324),
      AY = DY(5332),
      IY = DY(5341),
      RY = IY && IY.isTypedArray,
      OY = RY ? AY(RY) : FY;
    YY.exports = OY
  },
  5299: (YY, rY, DY) => {
    var FY = DY(5301),
      AY = DY(5346),
      IY = DY(5076);
    YY.exports = function(YY) {
      return IY(YY) ? FY(YY) : AY(YY)
    }
  },
  5843: YY => {
    YY.exports = function(YY) {
      var rY = null == YY ? 0 : YY.length;
      return rY ? YY[rY - 1] : void 0
    }
  },
  5755: (YY, rY, DY) => {
    var FY = DY(5e3),
      AY = DY(5149),
      IY = DY(5446),
      RY = DY(4739);
    YY.exports = function(YY, rY) {
      return (RY(YY) ? FY : IY)(YY, AY(rY, 3))
    }
  },
  5808: (YY, rY, DY) => {
    var FY = DY(5812),
      AY = DY(5459),
      IY = DY(5149);
    YY.exports = function(YY, rY) {
      var DY = {};
      return rY = IY(rY, 3), AY(YY, (function(YY, AY, IY) {
        FY(DY, AY, rY(YY, AY, IY))
      })), DY
    }
  },
  5723: (YY, rY, DY) => {
    var FY = DY(5731),
      AY = DY(5733),
      IY = DY(5430);
    YY.exports = function(YY) {
      return YY && YY.length ? FY(YY, IY, AY) : void 0
    }
  },
  4788: (YY, rY, DY) => {
    var FY = DY(4795);

    function AY(YY, rY) {
      if ("function" != typeof YY || null != rY && "function" != typeof rY) throw new TypeError("Expected a function");
      var DY = function() {
        var FY = arguments,
          AY = rY ? rY.apply(this, FY) : FY[0],
          IY = DY.cache;
        if (IY.has(AY)) return IY.get(AY);
        var RY = YY.apply(this, FY);
        return DY.cache = IY.set(AY, RY) || IY, RY
      };
      return DY.cache = new(AY.Cache || FY), DY
    }
    AY.Cache = FY, YY.exports = AY
  },
  5739: (YY, rY, DY) => {
    var FY = DY(5731),
      AY = DY(5747),
      IY = DY(5430);
    YY.exports = function(YY) {
      return YY && YY.length ? FY(YY, IY, AY) : void 0
    }
  },
  5613: YY => {
    YY.exports = function() {}
  },
  4659: (YY, rY, DY) => {
    var FY = DY(4667);
    YY.exports = function() {
      return FY.Date.now()
    }
  },
  5434: (YY, rY, DY) => {
    var FY = DY(5438),
      AY = DY(5444),
      IY = DY(4766),
      RY = DY(5004);
    YY.exports = function(YY) {
      return IY(YY) ? FY(RY(YY)) : AY(YY)
    }
  },
  5049: (YY, rY, DY) => {
    var FY = DY(5056)();
    YY.exports = FY
  },
  5898: (YY, rY, DY) => {
    var FY = DY(5227),
      AY = DY(5149),
      IY = DY(5907),
      RY = DY(4739),
      OY = DY(5072);
    YY.exports = function(YY, rY, DY) {
      var gY = RY(YY) ? FY : IY;
      return DY && OY(YY, rY, DY) && (rY = void 0), gY(YY, AY(rY, 3))
    }
  },
  5105: (YY, rY, DY) => {
    var FY = DY(5114),
      AY = DY(5144),
      IY = DY(5498),
      RY = DY(5072),
      OY = IY((function(YY, rY) {
        if (null == YY) return [];
        var DY = rY.length;
        return DY > 1 && RY(YY, rY[0], rY[1]) ? rY = [] : DY > 2 && RY(rY[0], rY[1], rY[2]) && (rY = [rY[0]]), AY(YY, FY(rY, 1), [])
      }));
    YY.exports = OY
  },
  5294: YY => {
    YY.exports = function() {
      return []
    }
  },
  5315: YY => {
    YY.exports = function() {
      return !1
    }
  },
  4640: (YY, rY, DY) => {
    var FY = DY(4648),
      AY = DY(4651);
    YY.exports = function(YY, rY, DY) {
      var IY = !0,
        RY = !0;
      if ("function" != typeof YY) throw new TypeError("Expected a function");
      return AY(DY) && (IY = "leading" in DY ? !!DY.leading : IY, RY = "trailing" in DY ? !!DY.trailing : RY), FY(YY, rY, {
        leading: IY,
        maxWait: rY,
        trailing: RY
      })
    }
  },
  5097: (YY, rY, DY) => {
    var FY = DY(4673),
      AY = 1 / 0;
    YY.exports = function(YY) {
      return YY ? (YY = FY(YY)) === AY || YY === -1 / 0 ? 17976931348623157e292 * (YY < 0 ? -1 : 1) : YY === YY ? YY : 0 : 0 === YY ? YY : 0
    }
  },
  5937: (YY, rY, DY) => {
    var FY = DY(5097);
    YY.exports = function(YY) {
      var rY = FY(YY),
        DY = rY % 1;
      return rY === rY ? DY ? rY - DY : rY : 0
    }
  },
  4673: (YY, rY, DY) => {
    var FY = DY(4677),
      AY = DY(4651),
      IY = DY(4689),
      RY = /^[-+]0x[0-9a-f]+$/i,
      OY = /^0b[01]+$/i,
      gY = /^0o[0-7]+$/i,
      aY = parseInt;
    YY.exports = function(YY) {
      if ("number" == typeof YY) return YY;
      if (IY(YY)) return NaN;
      if (AY(YY)) {
        var rY = "function" == typeof YY.valueOf ? YY.valueOf() : YY;
        YY = AY(rY) ? rY + "" : rY
      }
      if ("string" != typeof YY) return 0 === YY ? YY : +YY;
      YY = FY(YY);
      var DY = OY.test(YY);
      return DY || gY.test(YY) ? aY(YY.slice(2), DY ? 2 : 8) : RY.test(YY) ? NaN : +YY
    }
  },
  4987: (YY, rY, DY) => {
    var FY = DY(4991);
    YY.exports = function(YY) {
      return null == YY ? "" : FY(YY)
    }
  },
  5566: (YY, rY, DY) => {
    var FY = DY(5149),
      AY = DY(5569);
    YY.exports = function(YY, rY) {
      return YY && YY.length ? AY(YY, FY(rY, 2)) : []
    }
  },
  5630: (YY, rY, DY) => {
    var FY = DY(5634)("toUpperCase");
    YY.exports = FY
  },
  5698: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => hr
    });
    var FY = DY(61),
      AY = DY(4543),
      IY = DY.n(AY);
    const {
      getOwnPropertyNames: RY,
      getOwnPropertySymbols: OY
    } = Object, {
      hasOwnProperty: gY
    } = Object.prototype;

    function aY(YY, rY) {
      return function(DY, FY, AY) {
        return YY(DY, FY, AY) && rY(DY, FY, AY)
      }
    }

    function vY(YY) {
      return function(rY, DY, FY) {
        if (!rY || !DY || "object" !== typeof rY || "object" !== typeof DY) return YY(rY, DY, FY);
        const {
          cache: AY
        } = FY, IY = AY.get(rY), RY = AY.get(DY);
        if (IY && RY) return IY === DY && RY === rY;
        AY.set(rY, DY), AY.set(DY, rY);
        const OY = YY(rY, DY, FY);
        return AY.delete(rY), AY.delete(DY), OY
      }
    }

    function uY(YY) {
      return RY(YY).concat(OY(YY))
    }
    const sY = Object.hasOwn || ((YY, rY) => gY.call(YY, rY));

    function iY(YY, rY) {
      return YY === rY || !YY && !rY && YY !== YY && rY !== rY
    }
    const {
      getOwnPropertyDescriptor: yY,
      keys: QY
    } = Object;

    function oY(YY, rY) {
      return YY.byteLength === rY.byteLength && HY(new Uint8Array(YY), new Uint8Array(rY))
    }

    function WY(YY, rY, DY) {
      let FY = YY.length;
      if (rY.length !== FY) return !1;
      for (; FY-- > 0;)
        if (!DY.equals(YY[FY], rY[FY], FY, FY, YY, rY, DY)) return !1;
      return !0
    }

    function EY(YY, rY) {
      return YY.byteLength === rY.byteLength && HY(new Uint8Array(YY.buffer, YY.byteOffset, YY.byteLength), new Uint8Array(rY.buffer, rY.byteOffset, rY.byteLength))
    }

    function mY(YY, rY) {
      return iY(YY.getTime(), rY.getTime())
    }

    function VY(YY, rY) {
      return YY.name === rY.name && YY.message === rY.message && YY.cause === rY.cause && YY.stack === rY.stack
    }

    function SY(YY, rY) {
      return YY === rY
    }

    function lY(YY, rY, DY) {
      const FY = YY.size;
      if (FY !== rY.size) return !1;
      if (!FY) return !0;
      const AY = new Array(FY),
        IY = YY.entries();
      let RY, OY, gY = 0;
      for (;
        (RY = IY.next()) && !RY.done;) {
        const FY = rY.entries();
        let IY = !1,
          aY = 0;
        for (;
          (OY = FY.next()) && !OY.done;) {
          if (AY[aY]) {
            aY++;
            continue
          }
          const FY = RY.value,
            vY = OY.value;
          if (DY.equals(FY[0], vY[0], gY, aY, YY, rY, DY) && DY.equals(FY[1], vY[1], FY[0], vY[0], YY, rY, DY)) {
            IY = AY[aY] = !0;
            break
          }
          aY++
        }
        if (!IY) return !1;
        gY++
      }
      return !0
    }
    const TY = iY;

    function eY(YY, rY, DY) {
      const FY = QY(YY);
      let AY = FY.length;
      if (QY(rY).length !== AY) return !1;
      for (; AY-- > 0;)
        if (!ZY(YY, rY, DY, FY[AY])) return !1;
      return !0
    }

    function NY(YY, rY, DY) {
      const FY = uY(YY);
      let AY, IY, RY, OY = FY.length;
      if (uY(rY).length !== OY) return !1;
      for (; OY-- > 0;) {
        if (AY = FY[OY], !ZY(YY, rY, DY, AY)) return !1;
        if (IY = yY(YY, AY), RY = yY(rY, AY), (IY || RY) && (!IY || !RY || IY.configurable !== RY.configurable || IY.enumerable !== RY.enumerable || IY.writable !== RY.writable)) return !1
      }
      return !0
    }

    function BY(YY, rY) {
      return iY(YY.valueOf(), rY.valueOf())
    }

    function cY(YY, rY) {
      return YY.source === rY.source && YY.flags === rY.flags
    }

    function KY(YY, rY, DY) {
      const FY = YY.size;
      if (FY !== rY.size) return !1;
      if (!FY) return !0;
      const AY = new Array(FY),
        IY = YY.values();
      let RY, OY;
      for (;
        (RY = IY.next()) && !RY.done;) {
        const FY = rY.values();
        let IY = !1,
          gY = 0;
        for (;
          (OY = FY.next()) && !OY.done;) {
          if (!AY[gY] && DY.equals(RY.value, OY.value, RY.value, OY.value, YY, rY, DY)) {
            IY = AY[gY] = !0;
            break
          }
          gY++
        }
        if (!IY) return !1
      }
      return !0
    }

    function HY(YY, rY) {
      let DY = YY.byteLength;
      if (rY.byteLength !== DY || YY.byteOffset !== rY.byteOffset) return !1;
      for (; DY-- > 0;)
        if (YY[DY] !== rY[DY]) return !1;
      return !0
    }

    function zY(YY, rY) {
      return YY.hostname === rY.hostname && YY.pathname === rY.pathname && YY.protocol === rY.protocol && YY.port === rY.port && YY.hash === rY.hash && YY.username === rY.username && YY.password === rY.password
    }

    function ZY(YY, rY, DY, FY) {
      return !("_owner" !== FY && "__o" !== FY && "__v" !== FY || !YY.$$typeof && !rY.$$typeof) || sY(rY, FY) && DY.equals(YY[FY], rY[FY], FY, FY, YY, rY, DY)
    }
    const CY = {
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
      fY = Object.prototype.toString;

    function jY(YY) {
      let {
        areArrayBuffersEqual: rY,
        areArraysEqual: DY,
        areDataViewsEqual: FY,
        areDatesEqual: AY,
        areErrorsEqual: IY,
        areFunctionsEqual: RY,
        areMapsEqual: OY,
        areNumbersEqual: gY,
        areObjectsEqual: aY,
        arePrimitiveWrappersEqual: vY,
        areRegExpsEqual: uY,
        areSetsEqual: sY,
        areTypedArraysEqual: iY,
        areUrlsEqual: yY,
        unknownTagComparators: QY
      } = YY;
      return function(YY, oY, WY) {
        if (YY === oY) return !0;
        if (null == YY || null == oY) return !1;
        const EY = typeof YY;
        if (EY !== typeof oY) return !1;
        if ("object" !== EY) return "number" === EY ? gY(YY, oY, WY) : "function" === EY && RY(YY, oY, WY);
        const mY = YY.constructor;
        if (mY !== oY.constructor) return !1;
        if (mY === Object) return aY(YY, oY, WY);
        if (Array.isArray(YY)) return DY(YY, oY, WY);
        if (mY === Date) return AY(YY, oY, WY);
        if (mY === RegExp) return uY(YY, oY, WY);
        if (mY === Map) return OY(YY, oY, WY);
        if (mY === Set) return sY(YY, oY, WY);
        const VY = fY.call(YY);
        if ("[object Date]" === VY) return AY(YY, oY, WY);
        if ("[object RegExp]" === VY) return uY(YY, oY, WY);
        if ("[object Map]" === VY) return OY(YY, oY, WY);
        if ("[object Set]" === VY) return sY(YY, oY, WY);
        if ("[object Object]" === VY) return "function" !== typeof YY.then && "function" !== typeof oY.then && aY(YY, oY, WY);
        if ("[object URL]" === VY) return yY(YY, oY, WY);
        if ("[object Error]" === VY) return IY(YY, oY, WY);
        if ("[object Arguments]" === VY) return aY(YY, oY, WY);
        if (CY[VY]) return iY(YY, oY, WY);
        if ("[object ArrayBuffer]" === VY) return rY(YY, oY, WY);
        if ("[object DataView]" === VY) return FY(YY, oY, WY);
        if ("[object Boolean]" === VY || "[object Number]" === VY || "[object String]" === VY) return vY(YY, oY, WY);
        if (QY) {
          let rY = QY[VY];
          if (!rY) {
            const DY = null != (SY = YY) ? SY[Symbol.toStringTag] : void 0;
            DY && (rY = QY[DY])
          }
          if (rY) return rY(YY, oY, WY)
        }
        var SY;
        return !1
      }
    }
    const hY = dY();
    dY({
      strict: !0
    }), dY({
      circular: !0
    }), dY({
      circular: !0,
      strict: !0
    }), dY({
      createInternalComparator: () => iY
    }), dY({
      strict: !0,
      createInternalComparator: () => iY
    }), dY({
      circular: !0,
      createInternalComparator: () => iY
    }), dY({
      circular: !0,
      createInternalComparator: () => iY,
      strict: !0
    });

    function dY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: rY = !1,
        createInternalComparator: DY,
        createState: FY,
        strict: AY = !1
      } = YY, IY = function(YY) {
        let {
          circular: rY,
          createCustomConfig: DY,
          strict: FY
        } = YY, AY = {
          areArrayBuffersEqual: oY,
          areArraysEqual: FY ? NY : WY,
          areDataViewsEqual: EY,
          areDatesEqual: mY,
          areErrorsEqual: VY,
          areFunctionsEqual: SY,
          areMapsEqual: FY ? aY(lY, NY) : lY,
          areNumbersEqual: TY,
          areObjectsEqual: FY ? NY : eY,
          arePrimitiveWrappersEqual: BY,
          areRegExpsEqual: cY,
          areSetsEqual: FY ? aY(KY, NY) : KY,
          areTypedArraysEqual: FY ? aY(HY, NY) : HY,
          areUrlsEqual: zY,
          unknownTagComparators: void 0
        };
        if (DY && (AY = Object.assign({}, AY, DY(AY))), rY) {
          const YY = vY(AY.areArraysEqual),
            rY = vY(AY.areMapsEqual),
            DY = vY(AY.areObjectsEqual),
            FY = vY(AY.areSetsEqual);
          AY = Object.assign({}, AY, {
            areArraysEqual: YY,
            areMapsEqual: rY,
            areObjectsEqual: DY,
            areSetsEqual: FY
          })
        }
        return AY
      }(YY), RY = jY(IY);
      var OY;
      return function(YY) {
        let {
          circular: rY,
          comparator: DY,
          createState: FY,
          equals: AY,
          strict: IY
        } = YY;
        if (FY) return function(YY, RY) {
          const {
            cache: OY = (rY ? new WeakMap : void 0),
            meta: gY
          } = FY();
          return DY(YY, RY, {
            cache: OY,
            equals: AY,
            meta: gY,
            strict: IY
          })
        };
        if (rY) return function(YY, rY) {
          return DY(YY, rY, {
            cache: new WeakMap,
            equals: AY,
            meta: void 0,
            strict: IY
          })
        };
        const RY = {
          cache: void 0,
          equals: AY,
          meta: void 0,
          strict: IY
        };
        return function(YY, rY) {
          return DY(YY, rY, RY)
        }
      }({
        circular: rY,
        comparator: RY,
        createState: FY,
        equals: DY ? DY(RY) : (OY = RY, function(YY, rY, DY, FY, AY, IY, RY) {
          return OY(YY, rY, RY)
        }),
        strict: AY
      })
    }

    function JY(YY) {
      var rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        DY = -1;
      requestAnimationFrame((function FY(AY) {
        DY < 0 && (DY = AY), AY - DY > rY ? (YY(AY), DY = -1) : function(YY) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(YY)
        }(FY)
      }))
    }

    function MY(YY) {
      return MY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, MY(YY)
    }

    function wY(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY) {
        if ("undefined" !== typeof Symbol && null != YY[Symbol.iterator] || null != YY["@@iterator"]) return Array.from(YY)
      }(YY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return bY(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return bY(YY, rY)
      }(YY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function XY() {
      var YY = function() {
          return null
        },
        rY = !1,
        DY = function DY(FY) {
          if (!rY) {
            if (Array.isArray(FY)) {
              if (!FY.length) return;
              var AY = wY(FY),
                IY = AY[0],
                RY = AY.slice(1);
              return "number" === typeof IY ? void JY(DY.bind(null, RY), IY) : (DY(IY), void JY(DY.bind(null, RY)))
            }
            "object" === MY(FY) && YY(FY), "function" === typeof FY && FY()
          }
        };
      return {
        stop: function() {
          rY = !0
        },
        start: function(YY) {
          rY = !1, DY(YY)
        },
        subscribe: function(rY) {
          return YY = rY,
            function() {
              YY = function() {
                return null
              }
            }
        }
      }
    }

    function qY(YY) {
      return qY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, qY(YY)
    }

    function pY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function kY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? pY(Object(DY), !0).forEach((function(rY) {
          GY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : pY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function GY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" !== qY(YY) || null === YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" !== qY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" === qY(rY) ? rY : String(rY)
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }
    var xY = function(YY) {
        return YY
      },
      nY = function(YY, rY) {
        return Object.keys(rY).reduce((function(DY, FY) {
          return kY(kY({}, DY), {}, GY({}, FY, YY(FY, rY[FY])))
        }), {})
      },
      PY = function(YY, rY, DY) {
        return YY.map((function(YY) {
          return "".concat((FY = YY, FY.replace(/([A-Z])/g, (function(YY) {
            return "-".concat(YY.toLowerCase())
          }))), " ").concat(rY, "ms ").concat(DY);
          var FY
        })).join(",")
      };

    function UY(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        var DY = null == YY ? null : "undefined" != typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
        if (null != DY) {
          var FY, AY, IY, RY, OY = [],
            gY = !0,
            aY = !1;
          try {
            if (IY = (DY = DY.call(YY)).next, 0 === rY) {
              if (Object(DY) !== DY) return;
              gY = !1
            } else
              for (; !(gY = (FY = IY.call(DY)).done) && (OY.push(FY.value), OY.length !== rY); gY = !0);
          } catch (YY) {
            aY = !0, AY = YY
          } finally {
            try {
              if (!gY && null != DY.return && (RY = DY.return(), Object(RY) !== RY)) return
            } finally {
              if (aY) throw AY
            }
          }
          return OY
        }
      }(YY, rY) || tY(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function LY(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return Yr(YY)
      }(YY) || function(YY) {
        if ("undefined" !== typeof Symbol && null != YY[Symbol.iterator] || null != YY["@@iterator"]) return Array.from(YY)
      }(YY) || tY(YY) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tY(YY, rY) {
      if (YY) {
        if ("string" === typeof YY) return Yr(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        return "Object" === DY && YY.constructor && (DY = YY.constructor.name), "Map" === DY || "Set" === DY ? Array.from(YY) : "Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY) ? Yr(YY, rY) : void 0
      }
    }

    function Yr(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }
    var rr = 1e-4,
      Dr = function(YY, rY) {
        return [0, 3 * YY, 3 * rY - 6 * YY, 3 * YY - 3 * rY + 1]
      },
      Fr = function(YY, rY) {
        return YY.map((function(YY, DY) {
          return YY * Math.pow(rY, DY)
        })).reduce((function(YY, rY) {
          return YY + rY
        }))
      },
      Ar = function(YY, rY) {
        return function(DY) {
          var FY = Dr(YY, rY);
          return Fr(FY, DY)
        }
      },
      Ir = function() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        var FY = rY[0],
          AY = rY[1],
          IY = rY[2],
          RY = rY[3];
        if (1 === rY.length) switch (rY[0]) {
          case "linear":
            FY = 0, AY = 0, IY = 1, RY = 1;
            break;
          case "ease":
            FY = .25, AY = .1, IY = .25, RY = 1;
            break;
          case "ease-in":
            FY = .42, AY = 0, IY = 1, RY = 1;
            break;
          case "ease-out":
            FY = .42, AY = 0, IY = .58, RY = 1;
            break;
          case "ease-in-out":
            FY = 0, AY = 0, IY = .58, RY = 1;
            break;
          default:
            var OY = rY[0].split("(");
            if ("cubic-bezier" === OY[0] && 4 === OY[1].split(")")[0].split(",").length) {
              var gY = UY(OY[1].split(")")[0].split(",").map((function(YY) {
                return parseFloat(YY)
              })), 4);
              FY = gY[0], AY = gY[1], IY = gY[2], RY = gY[3]
            }
        } [FY, IY, AY, RY].every((function(YY) {
          return "number" === typeof YY && YY >= 0 && YY <= 1
        }));
        var aY, vY, uY = Ar(FY, IY),
          sY = Ar(AY, RY),
          iY = (aY = FY, vY = IY, function(YY) {
            var rY = Dr(aY, vY),
              DY = [].concat(LY(rY.map((function(YY, rY) {
                return YY * rY
              })).slice(1)), [0]);
            return Fr(DY, YY)
          }),
          yY = function(YY) {
            for (var rY, DY = YY > 1 ? 1 : YY, FY = DY, AY = 0; AY < 8; ++AY) {
              var IY = uY(FY) - DY,
                RY = iY(FY);
              if (Math.abs(IY - DY) < rr || RY < rr) return sY(FY);
              FY = (rY = FY - IY / RY) > 1 ? 1 : rY < 0 ? 0 : rY
            }
            return sY(FY)
          };
        return yY.isStepper = !1, yY
      },
      Rr = function() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        var FY = rY[0];
        if ("string" === typeof FY) switch (FY) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return Ir(FY);
          case "spring":
            return function() {
              var YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                rY = YY.stiff,
                DY = void 0 === rY ? 100 : rY,
                FY = YY.damping,
                AY = void 0 === FY ? 8 : FY,
                IY = YY.dt,
                RY = void 0 === IY ? 17 : IY,
                OY = function(YY, rY, FY) {
                  var IY = FY + (-(YY - rY) * DY - FY * AY) * RY / 1e3,
                    OY = FY * RY / 1e3 + YY;
                  return Math.abs(OY - rY) < rr && Math.abs(IY) < rr ? [rY, 0] : [OY, IY]
                };
              return OY.isStepper = !0, OY.dt = RY, OY
            }();
          default:
            if ("cubic-bezier" === FY.split("(")[0]) return Ir(FY)
        }
        return "function" === typeof FY ? FY : null
      };

    function Or(YY) {
      return Or = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, Or(YY)
    }

    function gr(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return yr(YY)
      }(YY) || function(YY) {
        if ("undefined" !== typeof Symbol && null != YY[Symbol.iterator] || null != YY["@@iterator"]) return Array.from(YY)
      }(YY) || ir(YY) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ar(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function vr(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? ar(Object(DY), !0).forEach((function(rY) {
          ur(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : ar(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function ur(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" !== Or(YY) || null === YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" !== Or(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" === Or(rY) ? rY : String(rY)
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function sr(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        var DY = null == YY ? null : "undefined" != typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
        if (null != DY) {
          var FY, AY, IY, RY, OY = [],
            gY = !0,
            aY = !1;
          try {
            if (IY = (DY = DY.call(YY)).next, 0 === rY) {
              if (Object(DY) !== DY) return;
              gY = !1
            } else
              for (; !(gY = (FY = IY.call(DY)).done) && (OY.push(FY.value), OY.length !== rY); gY = !0);
          } catch (YY) {
            aY = !0, AY = YY
          } finally {
            try {
              if (!gY && null != DY.return && (RY = DY.return(), Object(RY) !== RY)) return
            } finally {
              if (aY) throw AY
            }
          }
          return OY
        }
      }(YY, rY) || ir(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ir(YY, rY) {
      if (YY) {
        if ("string" === typeof YY) return yr(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        return "Object" === DY && YY.constructor && (DY = YY.constructor.name), "Map" === DY || "Set" === DY ? Array.from(YY) : "Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY) ? yr(YY, rY) : void 0
      }
    }

    function yr(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }
    var Qr = function(YY, rY, DY) {
        return YY + (rY - YY) * DY
      },
      or = function(YY) {
        return YY.from !== YY.to
      },
      Wr = function YY(rY, DY, FY) {
        var AY = nY((function(YY, DY) {
          if (or(DY)) {
            var FY = sr(rY(DY.from, DY.to, DY.ci), 2),
              AY = FY[0],
              IY = FY[1];
            return vr(vr({}, DY), {}, {
              from: AY,
              ci: IY
            })
          }
          return DY
        }), DY);
        return FY < 1 ? nY((function(YY, rY) {
          return or(rY) ? vr(vr({}, rY), {}, {
            ci: Qr(rY.ci, AY[YY].ci, FY),
            from: Qr(rY.from, AY[YY].from, FY)
          }) : rY
        }), DY) : YY(rY, AY, FY - 1)
      };
    const Er = function(YY, rY, DY, FY, AY) {
      var IY, RY, OY, gY, aY = (IY = YY, RY = rY, [Object.keys(IY), Object.keys(RY)].reduce((function(YY, rY) {
          return YY.filter((function(YY) {
            return rY.includes(YY)
          }))
        }))),
        vY = aY.reduce((function(DY, FY) {
          return vr(vr({}, DY), {}, ur({}, FY, [YY[FY], rY[FY]]))
        }), {}),
        uY = aY.reduce((function(DY, FY) {
          return vr(vr({}, DY), {}, ur({}, FY, {
            from: YY[FY],
            ci: 0,
            to: rY[FY]
          }))
        }), {}),
        sY = -1,
        iY = function() {
          return null
        };
      return iY = DY.isStepper ? function(FY) {
          OY || (OY = FY);
          var IY = (FY - OY) / DY.dt;
          uY = Wr(DY, uY, IY), AY(vr(vr(vr({}, YY), rY), nY((function(YY, rY) {
            return rY.from
          }), uY))), OY = FY, Object.values(uY).filter(or).length && (sY = requestAnimationFrame(iY))
        } : function(IY) {
          gY || (gY = IY);
          var RY = (IY - gY) / FY,
            OY = nY((function(YY, rY) {
              return Qr.apply(void 0, gr(rY).concat([DY(RY)]))
            }), vY);
          if (AY(vr(vr(vr({}, YY), rY), OY)), RY < 1) sY = requestAnimationFrame(iY);
          else {
            var aY = nY((function(YY, rY) {
              return Qr.apply(void 0, gr(rY).concat([DY(1)]))
            }), vY);
            AY(vr(vr(vr({}, YY), rY), aY))
          }
        },
        function() {
          return requestAnimationFrame(iY),
            function() {
              cancelAnimationFrame(sY)
            }
        }
    };

    function mr(YY) {
      return mr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, mr(YY)
    }
    var Vr = ["children", "Ei", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function Sr(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY, FY, AY = {},
          IY = Object.keys(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || (AY[DY] = YY[DY]);
        return AY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function lr(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return Tr(YY)
      }(YY) || function(YY) {
        if ("undefined" !== typeof Symbol && null != YY[Symbol.iterator] || null != YY["@@iterator"]) return Array.from(YY)
      }(YY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return Tr(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return Tr(YY, rY)
      }(YY) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Tr(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function er(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function Nr(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? er(Object(DY), !0).forEach((function(rY) {
          Br(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : er(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function Br(YY, rY, DY) {
      return (rY = Kr(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function cr(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, Kr(FY.key), FY)
      }
    }

    function Kr(YY) {
      var rY = function(YY, rY) {
        if ("object" !== mr(YY) || null === YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" !== mr(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" === mr(rY) ? rY : String(rY)
    }

    function Hr(YY, rY) {
      return Hr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, Hr(YY, rY)
    }

    function zr(YY) {
      var rY = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (YY) {
          return !1
        }
      }();
      return function() {
        var DY, FY = fr(YY);
        if (rY) {
          var AY = fr(this).constructor;
          DY = Reflect.construct(FY, arguments, AY)
        } else DY = FY.apply(this, arguments);
        return Zr(this, DY)
      }
    }

    function Zr(YY, rY) {
      if (rY && ("object" === mr(rY) || "function" === typeof rY)) return rY;
      if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
      return Cr(YY)
    }

    function Cr(YY) {
      if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return YY
    }

    function fr(YY) {
      return fr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, fr(YY)
    }
    var jr = function(YY) {
      ! function(YY, rY) {
        if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
        YY.prototype = Object.create(rY && rY.prototype, {
          constructor: {
            value: YY,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(YY, "prototype", {
          writable: !1
        }), rY && Hr(YY, rY)
      }(RY, YY);
      var rY, DY, AY, IY = zr(RY);

      function RY(YY, rY) {
        var DY;
        ! function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, RY);
        var FY = (DY = IY.call(this, YY, rY)).props,
          AY = FY.isActive,
          OY = FY.attributeName,
          gY = FY.from,
          aY = FY.to,
          vY = FY.steps,
          uY = FY.children,
          sY = FY.duration;
        if (DY.handleStyleChange = DY.handleStyleChange.bind(Cr(DY)), DY.changeStyle = DY.changeStyle.bind(Cr(DY)), !AY || sY <= 0) return DY.state = {
          style: {}
        }, "function" === typeof uY && (DY.state = {
          style: aY
        }), Zr(DY);
        if (vY && vY.length) DY.state = {
          style: vY[0].style
        };
        else if (gY) {
          if ("function" === typeof uY) return DY.state = {
            style: gY
          }, Zr(DY);
          DY.state = {
            style: OY ? Br({}, OY, gY) : gY
          }
        } else DY.state = {
          style: {}
        };
        return DY
      }
      return rY = RY, (DY = [{
        key: "componentDidMount",
        value: function() {
          var YY = this.props,
            rY = YY.isActive,
            DY = YY.canBegin;
          this.mounted = !0, rY && DY && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(YY) {
          var rY = this.props,
            DY = rY.isActive,
            FY = rY.canBegin,
            AY = rY.attributeName,
            IY = rY.shouldReAnimate,
            RY = rY.to,
            OY = rY.from,
            gY = this.state.style;
          if (FY)
            if (DY) {
              if (!(hY(YY.to, RY) && YY.canBegin && YY.isActive)) {
                var aY = !YY.canBegin || !YY.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var vY = aY || IY ? OY : YY.to;
                if (this.state && gY) {
                  var uY = {
                    style: AY ? Br({}, AY, vY) : vY
                  };
                  (AY && gY[AY] !== vY || !AY && gY !== vY) && this.setState(uY)
                }
                this.runAnimation(Nr(Nr({}, this.props), {}, {
                  from: vY,
                  Ei: 0
                }))
              }
            } else {
              var sY = {
                style: AY ? Br({}, AY, RY) : RY
              };
              this.state && gY && (AY && gY[AY] !== RY || !AY && gY !== RY) && this.setState(sY)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var YY = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), YY && YY()
        }
      }, {
        key: "handleStyleChange",
        value: function(YY) {
          this.changeStyle(YY)
        }
      }, {
        key: "changeStyle",
        value: function(YY) {
          this.mounted && this.setState({
            style: YY
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(YY) {
          var rY = this,
            DY = YY.from,
            FY = YY.to,
            AY = YY.duration,
            IY = YY.easing,
            RY = YY.Ei,
            OY = YY.onAnimationEnd,
            gY = YY.onAnimationStart,
            aY = Er(DY, FY, Rr(IY), AY, this.changeStyle);
          this.manager.start([gY, RY, function() {
            rY.stopJSAnimation = aY()
          }, AY, OY])
        }
      }, {
        key: "runStepAnimation",
        value: function(YY) {
          var rY = this,
            DY = YY.steps,
            FY = YY.Ei,
            AY = YY.onAnimationStart,
            IY = DY[0],
            RY = IY.style,
            OY = IY.duration,
            gY = void 0 === OY ? 0 : OY;
          return this.manager.start([AY].concat(lr(DY.reduce((function(YY, FY, AY) {
            if (0 === AY) return YY;
            var IY = FY.duration,
              RY = FY.easing,
              OY = void 0 === RY ? "ease" : RY,
              gY = FY.style,
              aY = FY.properties,
              vY = FY.onAnimationEnd,
              uY = AY > 0 ? DY[AY - 1] : FY,
              sY = aY || Object.keys(gY);
            if ("function" === typeof OY || "spring" === OY) return [].concat(lr(YY), [rY.runJSAnimation.bind(rY, {
              from: uY.style,
              to: gY,
              duration: IY,
              easing: OY
            }), IY]);
            var iY = PY(sY, IY, OY),
              yY = Nr(Nr(Nr({}, uY.style), gY), {}, {
                transition: iY
              });
            return [].concat(lr(YY), [yY, IY, vY]).filter(xY)
          }), [RY, Math.max(gY, FY)])), [YY.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(YY) {
          this.manager || (this.manager = XY());
          var rY = YY.Ei,
            DY = YY.duration,
            FY = YY.attributeName,
            AY = YY.to,
            IY = YY.easing,
            RY = YY.onAnimationStart,
            OY = YY.onAnimationEnd,
            gY = YY.steps,
            aY = YY.children,
            vY = this.manager;
          if (this.unSubscribe = vY.subscribe(this.handleStyleChange), "function" !== typeof IY && "function" !== typeof aY && "spring" !== IY)
            if (gY.length > 1) this.runStepAnimation(YY);
            else {
              var uY = FY ? Br({}, FY, AY) : AY,
                sY = PY(Object.keys(uY), DY, IY);
              vY.start([RY, rY, Nr(Nr({}, uY), {}, {
                transition: sY
              }), DY, OY])
            }
          else this.runJSAnimation(YY)
        }
      }, {
        key: "render",
        value: function() {
          var YY = this.props,
            rY = YY.children,
            DY = (YY.Ei, YY.duration),
            AY = (YY.attributeName, YY.easing, YY.isActive),
            IY = (YY.steps, YY.from, YY.to, YY.canBegin, YY.onAnimationEnd, YY.shouldReAnimate, YY.onAnimationReStart, Sr(YY, Vr)),
            RY = FY.Children.count(rY),
            OY = this.state.style;
          if ("function" === typeof rY) return rY(OY);
          if (!AY || 0 === RY || DY <= 0) return rY;
          var gY = function(YY) {
            var rY = YY.props,
              DY = rY.style,
              AY = void 0 === DY ? {} : DY,
              RY = rY.className;
            return (0, FY.cloneElement)(YY, Nr(Nr({}, IY), {}, {
              style: Nr(Nr({}, AY), OY),
              className: RY
            }))
          };
          return 1 === RY ? gY(FY.Children.only(rY)) : FY.createElement("div", null, FY.Children.map(rY, (function(YY) {
            return gY(YY)
          })))
        }
      }]) && cr(rY.prototype, DY), AY && cr(rY, AY), Object.defineProperty(rY, "prototype", {
        writable: !1
      }), RY
    }(FY.PureComponent);
    jr.displayName = "Animate", jr.defaultProps = {
      Ei: 0,
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
    }, jr.propTypes = {
      from: IY().oneOfType([IY().object, IY().string]),
      to: IY().oneOfType([IY().object, IY().string]),
      attributeName: IY().string,
      duration: IY().number,
      Ei: IY().number,
      easing: IY().oneOfType([IY().string, IY().func]),
      steps: IY().arrayOf(IY().shape({
        duration: IY().number.isRequired,
        style: IY().object.isRequired,
        easing: IY().oneOfType([IY().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), IY().func]),
        properties: IY().arrayOf("string"),
        onAnimationEnd: IY().func
      })),
      children: IY().oneOfType([IY().node, IY().func]),
      isActive: IY().bool,
      canBegin: IY().bool,
      onAnimationEnd: IY().func,
      shouldReAnimate: IY().bool,
      onAnimationStart: IY().func,
      onAnimationReStart: IY().func
    };
    const hr = jr
  },
  5941: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => wY
    });
    var FY, AY = DY(61),
      IY = DY(4638),
      RY = DY(5698),
      OY = DY(4840),
      gY = DY.n(OY),
      aY = DY(5723),
      vY = DY.n(aY),
      uY = DY(5007),
      sY = DY.n(uY),
      iY = DY(4743),
      yY = DY.n(iY),
      QY = DY(5759),
      oY = DY.n(QY),
      WY = DY(5939),
      EY = DY(5684),
      mY = DY(5545),
      VY = DY(5838),
      SY = DY(5556),
      lY = DY(4723),
      TY = DY(5709),
      eY = DY(5023),
      NY = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      BY = ["key"];

    function cY(YY) {
      return cY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, cY(YY)
    }

    function KY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function HY() {
      return HY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, HY.apply(this, arguments)
    }

    function zY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function ZY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? zY(Object(DY), !0).forEach((function(rY) {
          JY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : zY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function CY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, MY(FY.key), FY)
      }
    }

    function fY(YY, rY, DY) {
      return rY = hY(rY),
        function(YY, rY) {
          if (rY && ("object" === cY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, jY() ? Reflect.construct(rY, DY || [], hY(YY).constructor) : rY.apply(YY, DY))
    }

    function jY() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (jY = function() {
        return !!YY
      })()
    }

    function hY(YY) {
      return hY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, hY(YY)
    }

    function dY(YY, rY) {
      return dY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, dY(YY, rY)
    }

    function JY(YY, rY, DY) {
      return (rY = MY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function MY(YY) {
      var rY = function(YY, rY) {
        if ("object" != cY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != cY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == cY(rY) ? rY : rY + ""
    }
    var wY = function(YY) {
      function rY() {
        var YY;
        ! function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, rY);
        for (var DY = arguments.length, FY = new Array(DY), AY = 0; AY < DY; AY++) FY[AY] = arguments[AY];
        return JY(YY = fY(this, rY, [].concat(FY)), "state", {
          isAnimationFinished: !0
        }), JY(YY, "id", (0, lY.F)("recharts-area-")), JY(YY, "handleAnimationEnd", (function() {
          var rY = YY.props.onAnimationEnd;
          YY.setState({
            isAnimationFinished: !0
          }), gY()(rY) && rY()
        })), JY(YY, "handleAnimationStart", (function() {
          var rY = YY.props.onAnimationStart;
          YY.setState({
            isAnimationFinished: !1
          }), gY()(rY) && rY()
        })), YY
      }
      return function(YY, rY) {
        if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
        YY.prototype = Object.create(rY && rY.prototype, {
          constructor: {
            value: YY,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(YY, "prototype", {
          writable: !1
        }), rY && dY(YY, rY)
      }(rY, YY), DY = rY, FY = [{
        key: "renderDots",
        value: function(YY, DY, FY) {
          var IY = this.props.isAnimationActive,
            RY = this.state.isAnimationFinished;
          if (IY && !RY) return null;
          var OY = this.props,
            gY = OY.dot,
            aY = OY.points,
            vY = OY.dataKey,
            uY = (0, eY.d)(this.props, !1),
            sY = (0, eY.d)(gY, !0),
            iY = aY.map((function(YY, DY) {
              var FY = ZY(ZY(ZY({
                key: "dot-".concat(DY),
                r: 3
              }, uY), sY), {}, {
                index: DY,
                cx: YY.x,
                cy: YY.y,
                dataKey: vY,
                value: YY.value,
                payload: YY.payload,
                points: aY
              });
              return rY.renderDotItem(gY, FY)
            })),
            yY = {
              clipPath: YY ? "url(#clipPath-".concat(DY ? "" : "dots-").concat(FY, ")") : null
            };
          return AY.createElement(mY.b, HY({
            className: "recharts-area-dots"
          }, yY), iY)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(YY) {
          var rY = this.props,
            DY = rY.baseLine,
            FY = rY.points,
            IY = rY.strokeWidth,
            RY = FY[0].x,
            OY = FY[FY.length - 1].x,
            gY = YY * Math.abs(RY - OY),
            aY = vY()(FY.map((function(YY) {
              return YY.y || 0
            })));
          return (0, lY.w)(DY) && "number" === typeof DY ? aY = Math.max(DY, aY) : DY && Array.isArray(DY) && DY.length && (aY = Math.max(vY()(DY.map((function(YY) {
            return YY.y || 0
          }))), aY)), (0, lY.w)(aY) ? AY.createElement("rect", {
            x: RY < OY ? RY : RY - gY,
            y: 0,
            width: gY,
            height: Math.floor(aY + (IY ? parseInt("".concat(IY), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(YY) {
          var rY = this.props,
            DY = rY.baseLine,
            FY = rY.points,
            IY = rY.strokeWidth,
            RY = FY[0].y,
            OY = FY[FY.length - 1].y,
            gY = YY * Math.abs(RY - OY),
            aY = vY()(FY.map((function(YY) {
              return YY.x || 0
            })));
          return (0, lY.w)(DY) && "number" === typeof DY ? aY = Math.max(DY, aY) : DY && Array.isArray(DY) && DY.length && (aY = Math.max(vY()(DY.map((function(YY) {
            return YY.x || 0
          }))), aY)), (0, lY.w)(aY) ? AY.createElement("rect", {
            x: 0,
            y: RY < OY ? RY : RY - gY,
            width: aY + (IY ? parseInt("".concat(IY), 10) : 1),
            height: Math.floor(gY)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(YY) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(YY) : this.renderHorizontalRect(YY)
        }
      }, {
        key: "renderAreaStatically",
        value: function(YY, rY, DY, FY) {
          var IY = this.props,
            RY = IY.layout,
            OY = IY.type,
            gY = IY.stroke,
            aY = IY.connectNulls,
            vY = IY.isRange,
            uY = (IY.ref, KY(IY, NY));
          return AY.createElement(mY.b, {
            clipPath: DY ? "url(#clipPath-".concat(FY, ")") : null
          }, AY.createElement(WY.d, HY({}, (0, eY.d)(uY, !0), {
            points: YY,
            connectNulls: aY,
            type: OY,
            baseLine: rY,
            layout: RY,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== gY && AY.createElement(WY.d, HY({}, (0, eY.d)(this.props, !1), {
            className: "recharts-area-curve",
            layout: RY,
            type: OY,
            connectNulls: aY,
            fill: "none",
            points: YY
          })), "none" !== gY && vY && AY.createElement(WY.d, HY({}, (0, eY.d)(this.props, !1), {
            className: "recharts-area-curve",
            layout: RY,
            type: OY,
            connectNulls: aY,
            fill: "none",
            points: rY
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(YY, rY) {
          var DY = this,
            FY = this.props,
            IY = FY.points,
            OY = FY.baseLine,
            gY = FY.isAnimationActive,
            aY = FY.animationBegin,
            vY = FY.animationDuration,
            uY = FY.animationEasing,
            iY = FY.animationId,
            QY = this.state,
            oY = QY.prevPoints,
            WY = QY.prevBaseLine;
          return AY.createElement(RY.e, {
            Ei: aY,
            duration: vY,
            isActive: gY,
            easing: uY,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(iY),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(FY) {
            var RY = FY.t;
            if (oY) {
              var gY, aY = oY.length / IY.length,
                vY = IY.map((function(YY, rY) {
                  var DY = Math.floor(rY * aY);
                  if (oY[DY]) {
                    var FY = oY[DY],
                      AY = (0, lY.r)(FY.x, YY.x),
                      IY = (0, lY.r)(FY.y, YY.y);
                    return ZY(ZY({}, YY), {}, {
                      x: AY(RY),
                      y: IY(RY)
                    })
                  }
                  return YY
                }));
              return gY = (0, lY.w)(OY) && "number" === typeof OY ? (0, lY.r)(WY, OY)(RY) : sY()(OY) || yY()(OY) ? (0, lY.r)(WY, 0)(RY) : OY.map((function(YY, rY) {
                var DY = Math.floor(rY * aY);
                if (WY[DY]) {
                  var FY = WY[DY],
                    AY = (0, lY.r)(FY.x, YY.x),
                    IY = (0, lY.r)(FY.y, YY.y);
                  return ZY(ZY({}, YY), {}, {
                    x: AY(RY),
                    y: IY(RY)
                  })
                }
                return YY
              })), DY.renderAreaStatically(vY, gY, YY, rY)
            }
            return AY.createElement(mY.b, null, AY.createElement("defs", null, AY.createElement("clipPath", {
              id: "animationClipPath-".concat(rY)
            }, DY.renderClipRect(RY))), AY.createElement(mY.b, {
              clipPath: "url(#animationClipPath-".concat(rY, ")")
            }, DY.renderAreaStatically(IY, OY, YY, rY)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(YY, rY) {
          var DY = this.props,
            FY = DY.points,
            AY = DY.baseLine,
            IY = DY.isAnimationActive,
            RY = this.state,
            OY = RY.prevPoints,
            gY = RY.prevBaseLine,
            aY = RY.totalLength;
          return IY && FY && FY.length && (!OY && aY > 0 || !oY()(OY, FY) || !oY()(gY, AY)) ? this.renderAreaWithAnimation(YY, rY) : this.renderAreaStatically(FY, AY, YY, rY)
        }
      }, {
        key: "render",
        value: function() {
          var YY, rY = this.props,
            DY = rY.hide,
            FY = rY.dot,
            RY = rY.points,
            OY = rY.className,
            gY = rY.top,
            aY = rY.left,
            vY = rY.xAxis,
            uY = rY.yAxis,
            iY = rY.width,
            yY = rY.height,
            QY = rY.isAnimationActive,
            oY = rY.id;
          if (DY || !RY || !RY.length) return null;
          var WY = this.state.isAnimationFinished,
            EY = 1 === RY.length,
            SY = (0, IY.d)("recharts-area", OY),
            lY = vY && vY.allowDataOverflow,
            TY = uY && uY.allowDataOverflow,
            NY = lY || TY,
            BY = sY()(oY) ? this.id : oY,
            cY = null !== (YY = (0, eY.d)(FY, !1)) && void 0 !== YY ? YY : {
              r: 3,
              strokeWidth: 2
            },
            KY = cY.r,
            HY = void 0 === KY ? 3 : KY,
            zY = cY.strokeWidth,
            ZY = void 0 === zY ? 2 : zY,
            CY = ((0, eY.w)(FY) ? FY : {}).clipDot,
            fY = void 0 === CY || CY,
            jY = 2 * HY + ZY;
          return AY.createElement(mY.b, {
            className: SY
          }, lY || TY ? AY.createElement("defs", null, AY.createElement("clipPath", {
            id: "clipPath-".concat(BY)
          }, AY.createElement("rect", {
            x: lY ? aY : aY - iY / 2,
            y: TY ? gY : gY - yY / 2,
            width: lY ? iY : 2 * iY,
            height: TY ? yY : 2 * yY
          })), !fY && AY.createElement("clipPath", {
            id: "clipPath-dots-".concat(BY)
          }, AY.createElement("rect", {
            x: aY - jY / 2,
            y: gY - jY / 2,
            width: iY + jY,
            height: yY + jY
          }))) : null, EY ? null : this.renderArea(NY, BY), (FY || EY) && this.renderDots(NY, fY, BY), (!QY || WY) && VY.b.renderCallByParent(this.props, RY))
        }
      }], OY = [{
        key: "getDerivedStateFromProps",
        value: function(YY, rY) {
          return YY.animationId !== rY.prevAnimationId ? {
            prevAnimationId: YY.animationId,
            curPoints: YY.points,
            curBaseLine: YY.baseLine,
            prevPoints: rY.curPoints,
            prevBaseLine: rY.curBaseLine
          } : YY.points !== rY.curPoints || YY.baseLine !== rY.curBaseLine ? {
            curPoints: YY.points,
            curBaseLine: YY.baseLine
          } : null
        }
      }], FY && CY(DY.prototype, FY), OY && CY(DY, OY), Object.defineProperty(DY, "prototype", {
        writable: !1
      }), DY;
      var DY, FY, OY
    }(AY.PureComponent);
    FY = wY, JY(wY, "displayName", "Area"), JY(wY, "defaultProps", {
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
      isAnimationActive: !SY.e.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), JY(wY, "getBaseValue", (function(YY, rY, DY, FY) {
      var AY = YY.layout,
        IY = YY.baseValue,
        RY = rY.props.baseValue,
        OY = null !== RY && void 0 !== RY ? RY : IY;
      if ((0, lY.w)(OY) && "number" === typeof OY) return OY;
      var gY = "horizontal" === AY ? FY : DY,
        aY = gY.scale.domain();
      if ("number" === gY.type) {
        var vY = Math.max(aY[0], aY[1]),
          uY = Math.min(aY[0], aY[1]);
        return "dataMin" === OY ? uY : "dataMax" === OY || vY < 0 ? vY : Math.max(Math.min(aY[0], aY[1]), 0)
      }
      return "dataMin" === OY ? aY[0] : "dataMax" === OY ? aY[1] : aY[0]
    })), JY(wY, "getComposedData", (function(YY) {
      var rY, DY = YY.props,
        AY = YY.item,
        IY = YY.xAxis,
        RY = YY.yAxis,
        OY = YY.xAxisTicks,
        gY = YY.yAxisTicks,
        aY = YY.bandSize,
        vY = YY.dataKey,
        uY = YY.stackedData,
        sY = YY.dataStartIndex,
        iY = YY.displayedData,
        yY = YY.offset,
        QY = DY.layout,
        oY = uY && uY.length,
        WY = FY.getBaseValue(DY, AY, IY, RY),
        EY = "horizontal" === QY,
        mY = !1,
        VY = iY.map((function(YY, rY) {
          var DY;
          oY ? DY = uY[sY + rY] : (DY = (0, TY.bb)(YY, vY), Array.isArray(DY) ? mY = !0 : DY = [WY, DY]);
          var FY = null == DY[1] || oY && null == (0, TY.bb)(YY, vY);
          return EY ? {
            x: (0, TY.F)({
              axis: IY,
              ticks: OY,
              bandSize: aY,
              entry: YY,
              index: rY
            }),
            y: FY ? null : RY.scale(DY[1]),
            value: DY,
            payload: YY
          } : {
            x: FY ? null : IY.scale(DY[1]),
            y: (0, TY.F)({
              axis: RY,
              ticks: gY,
              bandSize: aY,
              entry: YY,
              index: rY
            }),
            value: DY,
            payload: YY
          }
        }));
      return rY = oY || mY ? VY.map((function(YY) {
        var rY = Array.isArray(YY.value) ? YY.value[0] : null;
        return EY ? {
          x: YY.x,
          y: null != rY && null != YY.y ? RY.scale(rY) : null
        } : {
          x: null != rY ? IY.scale(rY) : null,
          y: YY.y
        }
      })) : EY ? RY.scale(WY) : IY.scale(WY), ZY({
        points: VY,
        baseLine: rY,
        layout: QY,
        isRange: mY
      }, yY)
    })), JY(wY, "renderDotItem", (function(YY, rY) {
      var DY;
      if (AY.isValidElement(YY)) DY = AY.cloneElement(YY, rY);
      else if (gY()(YY)) DY = YY(rY);
      else {
        var FY = (0, IY.d)("recharts-area-dot", "boolean" !== typeof YY ? YY.className : ""),
          RY = rY.key,
          OY = KY(rY, BY);
        DY = AY.createElement(EY.d, HY({}, OY, {
          key: RY,
          className: FY
        }))
      }
      return DY
    }))
  },
  5830: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => kY
    });
    var FY = DY(61),
      AY = DY(4638),
      IY = DY(5698),
      RY = DY(5759),
      OY = DY.n(RY),
      gY = DY(5007),
      aY = DY.n(gY),
      vY = DY(5545),
      uY = DY(5770),
      sY = DY(5835),
      iY = DY(5838),
      yY = DY(4723),
      QY = DY(5023),
      oY = DY(5556),
      WY = DY(5709),
      EY = DY(5040),
      mY = DY(5536),
      VY = DY(5851),
      SY = ["x", "y"];

    function lY(YY) {
      return lY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, lY(YY)
    }

    function TY() {
      return TY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, TY.apply(this, arguments)
    }

    function eY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function NY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? eY(Object(DY), !0).forEach((function(rY) {
          BY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : eY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function BY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != lY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != lY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == lY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function cY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function KY(YY, rY) {
      var DY = YY.x,
        FY = YY.y,
        AY = cY(YY, SY),
        IY = "".concat(DY),
        RY = parseInt(IY, 10),
        OY = "".concat(FY),
        gY = parseInt(OY, 10),
        aY = "".concat(rY.height || AY.height),
        vY = parseInt(aY, 10),
        uY = "".concat(rY.width || AY.width),
        sY = parseInt(uY, 10);
      return NY(NY(NY(NY(NY({}, rY), AY), RY ? {
        x: RY
      } : {}), gY ? {
        y: gY
      } : {}), {}, {
        height: vY,
        width: sY,
        name: rY.name,
        radius: rY.radius
      })
    }

    function HY(YY) {
      return FY.createElement(VY.d, TY({
        shapeType: "rectangle",
        propTransformer: KY,
        activeClassName: "recharts-active-bar"
      }, YY))
    }
    var zY, ZY = ["value", "background"];

    function CY(YY) {
      return CY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, CY(YY)
    }

    function fY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function jY() {
      return jY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, jY.apply(this, arguments)
    }

    function hY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function dY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? hY(Object(DY), !0).forEach((function(rY) {
          qY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : hY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function JY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, pY(FY.key), FY)
      }
    }

    function MY(YY, rY, DY) {
      return rY = bY(rY),
        function(YY, rY) {
          if (rY && ("object" === CY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, wY() ? Reflect.construct(rY, DY || [], bY(YY).constructor) : rY.apply(YY, DY))
    }

    function wY() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (wY = function() {
        return !!YY
      })()
    }

    function bY(YY) {
      return bY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, bY(YY)
    }

    function XY(YY, rY) {
      return XY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, XY(YY, rY)
    }

    function qY(YY, rY, DY) {
      return (rY = pY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function pY(YY) {
      var rY = function(YY, rY) {
        if ("object" != CY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != CY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == CY(rY) ? rY : rY + ""
    }
    var kY = function(YY) {
      function rY() {
        var YY;
        ! function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, rY);
        for (var DY = arguments.length, FY = new Array(DY), AY = 0; AY < DY; AY++) FY[AY] = arguments[AY];
        return qY(YY = MY(this, rY, [].concat(FY)), "state", {
          isAnimationFinished: !1
        }), qY(YY, "id", (0, yY.F)("recharts-bar-")), qY(YY, "handleAnimationEnd", (function() {
          var rY = YY.props.onAnimationEnd;
          YY.setState({
            isAnimationFinished: !0
          }), rY && rY()
        })), qY(YY, "handleAnimationStart", (function() {
          var rY = YY.props.onAnimationStart;
          YY.setState({
            isAnimationFinished: !1
          }), rY && rY()
        })), YY
      }
      return function(YY, rY) {
        if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
        YY.prototype = Object.create(rY && rY.prototype, {
          constructor: {
            value: YY,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(YY, "prototype", {
          writable: !1
        }), rY && XY(YY, rY)
      }(rY, YY), DY = rY, RY = [{
        key: "renderRectanglesStatically",
        value: function(YY) {
          var rY = this,
            DY = this.props,
            AY = DY.shape,
            IY = DY.dataKey,
            RY = DY.activeIndex,
            OY = DY.activeBar,
            gY = (0, QY.d)(this.props, !1);
          return YY && YY.map((function(YY, DY) {
            var aY = DY === RY,
              uY = aY ? OY : AY,
              sY = dY(dY(dY({}, gY), YY), {}, {
                isActive: aY,
                option: uY,
                index: DY,
                dataKey: IY,
                onAnimationStart: rY.handleAnimationStart,
                onAnimationEnd: rY.handleAnimationEnd
              });
            return FY.createElement(vY.b, jY({
              className: "recharts-bar-rectangle"
            }, (0, EY.r)(rY.props, YY, DY), {
              key: "rectangle-".concat(null === YY || void 0 === YY ? void 0 : YY.x, "-").concat(null === YY || void 0 === YY ? void 0 : YY.y, "-").concat(null === YY || void 0 === YY ? void 0 : YY.value, "-").concat(DY)
            }), FY.createElement(HY, sY))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var YY = this,
            rY = this.props,
            DY = rY.data,
            AY = rY.layout,
            RY = rY.isAnimationActive,
            OY = rY.animationBegin,
            gY = rY.animationDuration,
            aY = rY.animationEasing,
            uY = rY.animationId,
            sY = this.state.prevData;
          return FY.createElement(IY.e, {
            Ei: OY,
            duration: gY,
            isActive: RY,
            easing: aY,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(uY),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(rY) {
            var IY = rY.t,
              RY = DY.map((function(YY, rY) {
                var DY = sY && sY[rY];
                if (DY) {
                  var FY = (0, yY.r)(DY.x, YY.x),
                    RY = (0, yY.r)(DY.y, YY.y),
                    OY = (0, yY.r)(DY.width, YY.width),
                    gY = (0, yY.r)(DY.height, YY.height);
                  return dY(dY({}, YY), {}, {
                    x: FY(IY),
                    y: RY(IY),
                    width: OY(IY),
                    height: gY(IY)
                  })
                }
                if ("horizontal" === AY) {
                  var aY = (0, yY.r)(0, YY.height)(IY);
                  return dY(dY({}, YY), {}, {
                    y: YY.y + YY.height - aY,
                    height: aY
                  })
                }
                var vY = (0, yY.r)(0, YY.width)(IY);
                return dY(dY({}, YY), {}, {
                  width: vY
                })
              }));
            return FY.createElement(vY.b, null, YY.renderRectanglesStatically(RY))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var YY = this.props,
            rY = YY.data,
            DY = YY.isAnimationActive,
            FY = this.state.prevData;
          return !(DY && rY && rY.length) || FY && OY()(FY, rY) ? this.renderRectanglesStatically(rY) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var YY = this,
            rY = this.props,
            DY = rY.data,
            AY = rY.dataKey,
            IY = rY.activeIndex,
            RY = (0, QY.d)(this.props.background, !1);
          return DY.map((function(rY, DY) {
            rY.value;
            var OY = rY.background,
              gY = fY(rY, ZY);
            if (!OY) return null;
            var aY = dY(dY(dY(dY(dY({}, gY), {}, {
              fill: "#eee"
            }, OY), RY), (0, EY.r)(YY.props, rY, DY)), {}, {
              onAnimationStart: YY.handleAnimationStart,
              onAnimationEnd: YY.handleAnimationEnd,
              dataKey: AY,
              index: DY,
              className: "recharts-bar-background-rectangle"
            });
            return FY.createElement(HY, jY({
              key: "background-bar-".concat(DY),
              option: YY.props.background,
              isActive: DY === IY
            }, aY))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(YY, rY) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var DY = this.props,
            AY = DY.data,
            IY = DY.xAxis,
            RY = DY.yAxis,
            OY = DY.layout,
            gY = DY.children,
            aY = (0, QY.h)(gY, uY.b);
          if (!aY) return null;
          var sY = "vertical" === OY ? AY[0].height / 2 : AY[0].width / 2,
            iY = function(YY, rY) {
              var DY = Array.isArray(YY.value) ? YY.value[1] : YY.value;
              return {
                x: YY.x,
                y: YY.y,
                value: DY,
                errorVal: (0, WY.bb)(YY, rY)
              }
            },
            yY = {
              clipPath: YY ? "url(#clipPath-".concat(rY, ")") : null
            };
          return FY.createElement(vY.b, yY, aY.map((function(YY) {
            return FY.cloneElement(YY, {
              key: "error-bar-".concat(rY, "-").concat(YY.props.dataKey),
              data: AY,
              xAxis: IY,
              yAxis: RY,
              layout: OY,
              offset: sY,
              dataPointFormatter: iY
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var YY = this.props,
            rY = YY.hide,
            DY = YY.data,
            IY = YY.className,
            RY = YY.xAxis,
            OY = YY.yAxis,
            gY = YY.left,
            uY = YY.top,
            sY = YY.width,
            yY = YY.height,
            QY = YY.isAnimationActive,
            oY = YY.background,
            WY = YY.id;
          if (rY || !DY || !DY.length) return null;
          var EY = this.state.isAnimationFinished,
            mY = (0, AY.d)("recharts-bar", IY),
            VY = RY && RY.allowDataOverflow,
            SY = OY && OY.allowDataOverflow,
            lY = VY || SY,
            TY = aY()(WY) ? this.id : WY;
          return FY.createElement(vY.b, {
            className: mY
          }, VY || SY ? FY.createElement("defs", null, FY.createElement("clipPath", {
            id: "clipPath-".concat(TY)
          }, FY.createElement("rect", {
            x: VY ? gY : gY - sY / 2,
            y: SY ? uY : uY - yY / 2,
            width: VY ? sY : 2 * sY,
            height: SY ? yY : 2 * yY
          }))) : null, FY.createElement(vY.b, {
            className: "recharts-bar-rectangles",
            clipPath: lY ? "url(#clipPath-".concat(TY, ")") : null
          }, oY ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(lY, TY), (!QY || EY) && iY.b.renderCallByParent(this.props, DY))
        }
      }], gY = [{
        key: "getDerivedStateFromProps",
        value: function(YY, rY) {
          return YY.animationId !== rY.prevAnimationId ? {
            prevAnimationId: YY.animationId,
            curData: YY.data,
            prevData: rY.curData
          } : YY.data !== rY.curData ? {
            curData: YY.data
          } : null
        }
      }], RY && JY(DY.prototype, RY), gY && JY(DY, gY), Object.defineProperty(DY, "prototype", {
        writable: !1
      }), DY;
      var DY, RY, gY
    }(FY.PureComponent);
    zY = kY, qY(kY, "displayName", "Bar"), qY(kY, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !oY.e.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), qY(kY, "getComposedData", (function(YY) {
      var rY = YY.props,
        DY = YY.item,
        FY = YY.barPosition,
        AY = YY.bandSize,
        IY = YY.xAxis,
        RY = YY.yAxis,
        OY = YY.xAxisTicks,
        gY = YY.yAxisTicks,
        aY = YY.stackedData,
        vY = YY.dataStartIndex,
        uY = YY.displayedData,
        iY = YY.offset,
        oY = (0, WY.n)(FY, DY);
      if (!oY) return null;
      var EY = rY.layout,
        VY = DY.type.defaultProps,
        SY = void 0 !== VY ? dY(dY({}, VY), DY.props) : DY.props,
        lY = SY.dataKey,
        TY = SY.children,
        eY = SY.minPointSize,
        NY = "horizontal" === EY ? RY : IY,
        BY = aY ? NY.scale.domain() : null,
        cY = (0, WY.A)({
          numericAxis: NY
        }),
        KY = (0, QY.h)(TY, sY.c),
        HY = uY.map((function(YY, rY) {
          var FY, uY, sY, iY, QY, VY;
          aY ? FY = (0, WY.nb)(aY[vY + rY], BY) : (FY = (0, WY.bb)(YY, lY), Array.isArray(FY) || (FY = [cY, FY]));
          var SY = function(YY) {
            var rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(DY, FY) {
              if ("number" === typeof YY) return YY;
              var AY = (0, yY.w)(DY) || (0, yY.u)(DY);
              return AY ? YY(DY, FY) : (AY || (0, mY.c)(!1), rY)
            }
          }(eY, zY.defaultProps.minPointSize)(FY[1], rY);
          if ("horizontal" === EY) {
            var TY, NY = [RY.scale(FY[0]), RY.scale(FY[1])],
              HY = NY[0],
              ZY = NY[1];
            uY = (0, WY.D)({
              axis: IY,
              ticks: OY,
              bandSize: AY,
              offset: oY.offset,
              entry: YY,
              index: rY
            }), sY = null !== (TY = null !== ZY && void 0 !== ZY ? ZY : HY) && void 0 !== TY ? TY : void 0, iY = oY.size;
            var CY = HY - ZY;
            if (QY = Number.isNaN(CY) ? 0 : CY, VY = {
                x: uY,
                y: RY.y,
                width: iY,
                height: RY.height
              }, Math.abs(SY) > 0 && Math.abs(QY) < Math.abs(SY)) {
              var fY = (0, yY.C)(QY || SY) * (Math.abs(SY) - Math.abs(QY));
              sY -= fY, QY += fY
            }
          } else {
            var jY = [IY.scale(FY[0]), IY.scale(FY[1])],
              hY = jY[0],
              JY = jY[1];
            if (uY = hY, sY = (0, WY.D)({
                axis: RY,
                ticks: gY,
                bandSize: AY,
                offset: oY.offset,
                entry: YY,
                index: rY
              }), iY = JY - hY, QY = oY.size, VY = {
                x: IY.x,
                y: sY,
                width: IY.width,
                height: QY
              }, Math.abs(SY) > 0 && Math.abs(iY) < Math.abs(SY)) iY += (0, yY.C)(iY || SY) * (Math.abs(SY) - Math.abs(iY))
          }
          return dY(dY(dY({}, YY), {}, {
            x: uY,
            y: sY,
            width: iY,
            height: QY,
            value: aY ? FY : FY[1],
            payload: YY,
            background: VY
          }, KY && KY[rY] && KY[rY].props), {}, {
            tooltipPayload: [(0, WY.$)(DY, YY)],
            tooltipPosition: {
              x: uY + iY / 2,
              y: sY + QY / 2
            }
          })
        }));
      return dY({
        data: HY,
        layout: EY
      }, iY)
    }))
  },
  5955: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => CY
    });
    var FY = DY(61),
      AY = DY(4840),
      IY = DY.n(AY),
      RY = DY(4752),
      OY = DY.n(RY),
      gY = DY(4638),
      aY = DY(5036),
      vY = DY(5545),
      uY = DY(5702),
      sY = DY(5792),
      iY = DY(4723),
      yY = DY(5040),
      QY = DY(5023),
      oY = DY(5959),
      WY = ["viewBox"],
      EY = ["viewBox"],
      mY = ["ticks"];

    function VY(YY) {
      return VY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, VY(YY)
    }

    function SY() {
      return SY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, SY.apply(this, arguments)
    }

    function lY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function TY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? lY(Object(DY), !0).forEach((function(rY) {
          zY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : lY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function eY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function NY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, ZY(FY.key), FY)
      }
    }

    function BY(YY, rY, DY) {
      return rY = KY(rY),
        function(YY, rY) {
          if (rY && ("object" === VY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, cY() ? Reflect.construct(rY, DY || [], KY(YY).constructor) : rY.apply(YY, DY))
    }

    function cY() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (cY = function() {
        return !!YY
      })()
    }

    function KY(YY) {
      return KY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, KY(YY)
    }

    function HY(YY, rY) {
      return HY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, HY(YY, rY)
    }

    function zY(YY, rY, DY) {
      return (rY = ZY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function ZY(YY) {
      var rY = function(YY, rY) {
        if ("object" != VY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != VY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == VY(rY) ? rY : rY + ""
    }
    var CY = function(YY) {
      function rY(YY) {
        var DY;
        return function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, rY), (DY = BY(this, rY, [YY])).state = {
          fontSize: "",
          letterSpacing: ""
        }, DY
      }
      return function(YY, rY) {
        if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
        YY.prototype = Object.create(rY && rY.prototype, {
          constructor: {
            value: YY,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(YY, "prototype", {
          writable: !1
        }), rY && HY(YY, rY)
      }(rY, YY), DY = rY, RY = [{
        key: "renderTickItem",
        value: function(YY, rY, DY) {
          var AY = (0, gY.d)(rY.className, "recharts-cartesian-axis-tick-value");
          return FY.isValidElement(YY) ? FY.cloneElement(YY, TY(TY({}, rY), {}, {
            className: AY
          })) : IY()(YY) ? YY(TY(TY({}, rY), {}, {
            className: AY
          })) : FY.createElement(uY.b, SY({}, rY, {
            className: "recharts-cartesian-axis-tick-value"
          }), DY)
        }
      }], (AY = [{
        key: "shouldComponentUpdate",
        value: function(YY, rY) {
          var DY = YY.viewBox,
            FY = eY(YY, WY),
            AY = this.props,
            IY = AY.viewBox,
            RY = eY(AY, EY);
          return !(0, aY.b)(DY, IY) || !(0, aY.b)(FY, RY) || !(0, aY.b)(rY, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var YY = this.layerReference;
          if (YY) {
            var rY = YY.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            rY && this.setState({
              fontSize: window.getComputedStyle(rY).fontSize,
              letterSpacing: window.getComputedStyle(rY).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(YY) {
          var rY, DY, FY, AY, IY, RY, OY = this.props,
            gY = OY.x,
            aY = OY.y,
            vY = OY.width,
            uY = OY.height,
            sY = OY.orientation,
            yY = OY.tickSize,
            QY = OY.mirror,
            oY = OY.tickMargin,
            WY = QY ? -1 : 1,
            EY = YY.tickSize || yY,
            mY = (0, iY.w)(YY.tickCoord) ? YY.tickCoord : YY.coordinate;
          switch (sY) {
            case "top":
              rY = DY = YY.coordinate, RY = (FY = (AY = aY + +!QY * uY) - WY * EY) - WY * oY, IY = mY;
              break;
            case "left":
              FY = AY = YY.coordinate, IY = (rY = (DY = gY + +!QY * vY) - WY * EY) - WY * oY, RY = mY;
              break;
            case "right":
              FY = AY = YY.coordinate, IY = (rY = (DY = gY + +QY * vY) + WY * EY) + WY * oY, RY = mY;
              break;
            default:
              rY = DY = YY.coordinate, RY = (FY = (AY = aY + +QY * uY) + WY * EY) + WY * oY, IY = mY
          }
          return {
            line: {
              x1: rY,
              y1: FY,
              x2: DY,
              y2: AY
            },
            Zu: {
              x: IY,
              y: RY
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var YY, rY = this.props,
            DY = rY.orientation,
            FY = rY.mirror;
          switch (DY) {
            case "left":
              YY = FY ? "start" : "end";
              break;
            case "right":
              YY = FY ? "end" : "start";
              break;
            default:
              YY = "middle"
          }
          return YY
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var YY = this.props,
            rY = YY.orientation,
            DY = YY.mirror,
            FY = "end";
          switch (rY) {
            case "left":
            case "right":
              FY = "middle";
              break;
            case "top":
              FY = DY ? "start" : "end";
              break;
            default:
              FY = DY ? "end" : "start"
          }
          return FY
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var YY = this.props,
            rY = YY.x,
            DY = YY.y,
            AY = YY.width,
            IY = YY.height,
            RY = YY.orientation,
            aY = YY.mirror,
            vY = YY.axisLine,
            uY = TY(TY(TY({}, (0, QY.d)(this.props, !1)), (0, QY.d)(vY, !1)), {}, {
              fill: "none"
            });
          if ("top" === RY || "bottom" === RY) {
            var sY = +("top" === RY && !aY || "bottom" === RY && aY);
            uY = TY(TY({}, uY), {}, {
              x1: rY,
              y1: DY + sY * IY,
              x2: rY + AY,
              y2: DY + sY * IY
            })
          } else {
            var iY = +("left" === RY && !aY || "right" === RY && aY);
            uY = TY(TY({}, uY), {}, {
              x1: rY + iY * AY,
              y1: DY,
              x2: rY + iY * AY,
              y2: DY + IY
            })
          }
          return FY.createElement("line", SY({}, uY, {
            className: (0, gY.d)("recharts-cartesian-axis-line", OY()(vY, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(YY, DY, AY) {
          var RY = this,
            aY = this.props,
            uY = aY.tickLine,
            sY = aY.stroke,
            iY = aY.Zu,
            WY = aY.tickFormatter,
            EY = aY.unit,
            mY = (0, oY.d)(TY(TY({}, this.props), {}, {
              ticks: YY
            }), DY, AY),
            VY = this.getTickTextAnchor(),
            lY = this.getTickVerticalAnchor(),
            eY = (0, QY.d)(this.props, !1),
            NY = (0, QY.d)(iY, !1),
            BY = TY(TY({}, eY), {}, {
              fill: "none"
            }, (0, QY.d)(uY, !1)),
            cY = mY.map((function(YY, DY) {
              var AY = RY.getTickLineCoord(YY),
                aY = AY.line,
                QY = AY.Zu,
                oY = TY(TY(TY(TY({
                  textAnchor: VY,
                  verticalAnchor: lY
                }, eY), {}, {
                  stroke: "none",
                  fill: sY
                }, NY), QY), {}, {
                  index: DY,
                  payload: YY,
                  visibleTicksCount: mY.length,
                  tickFormatter: WY
                });
              return FY.createElement(vY.b, SY({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(YY.value, "-").concat(YY.coordinate, "-").concat(YY.tickCoord)
              }, (0, yY.r)(RY.props, YY, DY)), uY && FY.createElement("line", SY({}, BY, aY, {
                className: (0, gY.d)("recharts-cartesian-axis-tick-line", OY()(uY, "className"))
              })), iY && rY.renderTickItem(iY, oY, "".concat(IY()(WY) ? WY(YY.value, DY) : YY.value).concat(EY || "")))
            }));
          return FY.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, cY)
        }
      }, {
        key: "render",
        value: function() {
          var YY = this,
            rY = this.props,
            DY = rY.axisLine,
            AY = rY.width,
            RY = rY.height,
            OY = rY.ticksGenerator,
            aY = rY.className;
          if (rY.hide) return null;
          var uY = this.props,
            iY = uY.ticks,
            yY = eY(uY, mY),
            QY = iY;
          return IY()(OY) && (QY = iY && iY.length > 0 ? OY(this.props) : OY(yY)), AY <= 0 || RY <= 0 || !QY || !QY.length ? null : FY.createElement(vY.b, {
            className: (0, gY.d)("recharts-cartesian-axis", aY),
            ref: function(rY) {
              YY.layerReference = rY
            }
          }, DY && this.renderAxisLine(), this.renderTicks(QY, this.state.fontSize, this.state.letterSpacing), sY.c.renderCallByParent(this.props))
        }
      }]) && NY(DY.prototype, AY), RY && NY(DY, RY), Object.defineProperty(DY, "prototype", {
        writable: !1
      }), DY;
      var DY, AY, RY
    }(FY.Component);
    zY(CY, "displayName", "CartesianAxis"), zY(CY, "defaultProps", {
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
      Zu: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  5970: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => zY
    });
    var FY = DY(61),
      AY = DY(4840),
      IY = DY.n(AY),
      RY = DY(5016),
      OY = DY(4723),
      gY = DY(5023),
      aY = DY(5709),
      vY = DY(5959),
      uY = DY(5955),
      sY = DY(5913),
      iY = ["x1", "y1", "x2", "y2", "key"],
      yY = ["offset"];

    function QY(YY) {
      return QY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, QY(YY)
    }

    function oY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function WY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? oY(Object(DY), !0).forEach((function(rY) {
          EY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : oY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function EY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != QY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != QY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == QY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function mY() {
      return mY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, mY.apply(this, arguments)
    }

    function VY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }
    var SY = function(YY) {
      var rY = YY.fill;
      if (!rY || "none" === rY) return null;
      var DY = YY.fillOpacity,
        AY = YY.x,
        IY = YY.y,
        RY = YY.width,
        OY = YY.height,
        gY = YY.ry;
      return FY.createElement("rect", {
        x: AY,
        y: IY,
        ry: gY,
        width: RY,
        height: OY,
        stroke: "none",
        fill: rY,
        fillOpacity: DY,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function lY(YY, rY) {
      var DY;
      if (FY.isValidElement(YY)) DY = FY.cloneElement(YY, rY);
      else if (IY()(YY)) DY = YY(rY);
      else {
        var AY = rY.x1,
          RY = rY.y1,
          OY = rY.x2,
          aY = rY.y2,
          vY = rY.key,
          uY = VY(rY, iY),
          sY = (0, gY.d)(uY, !1),
          QY = (sY.offset, VY(sY, yY));
        DY = FY.createElement("line", mY({}, QY, {
          x1: AY,
          y1: RY,
          x2: OY,
          y2: aY,
          fill: "none",
          key: vY
        }))
      }
      return DY
    }

    function TY(YY) {
      var rY = YY.x,
        DY = YY.width,
        AY = YY.horizontal,
        IY = void 0 === AY || AY,
        RY = YY.horizontalPoints;
      if (!IY || !RY || !RY.length) return null;
      var OY = RY.map((function(FY, AY) {
        var RY = WY(WY({}, YY), {}, {
          x1: rY,
          y1: FY,
          x2: rY + DY,
          y2: FY,
          key: "line-".concat(AY),
          index: AY
        });
        return lY(IY, RY)
      }));
      return FY.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, OY)
    }

    function eY(YY) {
      var rY = YY.y,
        DY = YY.height,
        AY = YY.vertical,
        IY = void 0 === AY || AY,
        RY = YY.verticalPoints;
      if (!IY || !RY || !RY.length) return null;
      var OY = RY.map((function(FY, AY) {
        var RY = WY(WY({}, YY), {}, {
          x1: FY,
          y1: rY,
          x2: FY,
          y2: rY + DY,
          key: "line-".concat(AY),
          index: AY
        });
        return lY(IY, RY)
      }));
      return FY.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, OY)
    }

    function NY(YY) {
      var rY = YY.horizontalFill,
        DY = YY.fillOpacity,
        AY = YY.x,
        IY = YY.y,
        RY = YY.width,
        OY = YY.height,
        gY = YY.horizontalPoints,
        aY = YY.horizontal;
      if (!(void 0 === aY || aY) || !rY || !rY.length) return null;
      var vY = gY.map((function(YY) {
        return Math.round(YY + IY - IY)
      })).sort((function(YY, rY) {
        return YY - rY
      }));
      IY !== vY[0] && vY.unshift(0);
      var uY = vY.map((function(YY, gY) {
        var aY = !vY[gY + 1] ? IY + OY - YY : vY[gY + 1] - YY;
        if (aY <= 0) return null;
        var uY = gY % rY.length;
        return FY.createElement("rect", {
          key: "react-".concat(gY),
          y: YY,
          x: AY,
          height: aY,
          width: RY,
          stroke: "none",
          fill: rY[uY],
          fillOpacity: DY,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return FY.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, uY)
    }

    function BY(YY) {
      var rY = YY.vertical,
        DY = void 0 === rY || rY,
        AY = YY.verticalFill,
        IY = YY.fillOpacity,
        RY = YY.x,
        OY = YY.y,
        gY = YY.width,
        aY = YY.height,
        vY = YY.verticalPoints;
      if (!DY || !AY || !AY.length) return null;
      var uY = vY.map((function(YY) {
        return Math.round(YY + RY - RY)
      })).sort((function(YY, rY) {
        return YY - rY
      }));
      RY !== uY[0] && uY.unshift(0);
      var sY = uY.map((function(YY, rY) {
        var DY = !uY[rY + 1] ? RY + gY - YY : uY[rY + 1] - YY;
        if (DY <= 0) return null;
        var vY = rY % AY.length;
        return FY.createElement("rect", {
          key: "react-".concat(rY),
          x: YY,
          y: OY,
          width: DY,
          height: aY,
          stroke: "none",
          fill: AY[vY],
          fillOpacity: IY,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return FY.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, sY)
    }
    var cY = function(YY, rY) {
        var DY = YY.xAxis,
          FY = YY.width,
          AY = YY.height,
          IY = YY.offset;
        return (0, aY.H)((0, vY.d)(WY(WY(WY({}, uY.d.defaultProps), DY), {}, {
          ticks: (0, aY.Z)(DY, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: FY,
            height: AY
          }
        })), IY.left, IY.left + IY.width, rY)
      },
      KY = function(YY, rY) {
        var DY = YY.yAxis,
          FY = YY.width,
          AY = YY.height,
          IY = YY.offset;
        return (0, aY.H)((0, vY.d)(WY(WY(WY({}, uY.d.defaultProps), DY), {}, {
          ticks: (0, aY.Z)(DY, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: FY,
            height: AY
          }
        })), IY.top, IY.top + IY.height, rY)
      },
      HY = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function zY(YY) {
      var rY, DY, AY, gY, aY, vY, uY = (0, sY.m)(),
        iY = (0, sY.l)(),
        yY = (0, sY.o)(),
        oY = WY(WY({}, YY), {}, {
          stroke: null !== (rY = YY.stroke) && void 0 !== rY ? rY : HY.stroke,
          fill: null !== (DY = YY.fill) && void 0 !== DY ? DY : HY.fill,
          horizontal: null !== (AY = YY.horizontal) && void 0 !== AY ? AY : HY.horizontal,
          horizontalFill: null !== (gY = YY.horizontalFill) && void 0 !== gY ? gY : HY.horizontalFill,
          vertical: null !== (aY = YY.vertical) && void 0 !== aY ? aY : HY.vertical,
          verticalFill: null !== (vY = YY.verticalFill) && void 0 !== vY ? vY : HY.verticalFill,
          x: (0, OY.w)(YY.x) ? YY.x : yY.left,
          y: (0, OY.w)(YY.y) ? YY.y : yY.top,
          width: (0, OY.w)(YY.width) ? YY.width : yY.width,
          height: (0, OY.w)(YY.height) ? YY.height : yY.height
        }),
        EY = oY.x,
        VY = oY.y,
        lY = oY.width,
        zY = oY.height,
        ZY = oY.syncWithTicks,
        CY = oY.horizontalValues,
        fY = oY.verticalValues,
        jY = (0, sY.h)(),
        hY = (0, sY.x)();
      if (!(0, OY.w)(lY) || lY <= 0 || !(0, OY.w)(zY) || zY <= 0 || !(0, OY.w)(EY) || EY !== +EY || !(0, OY.w)(VY) || VY !== +VY) return null;
      var dY = oY.verticalCoordinatesGenerator || cY,
        JY = oY.horizontalCoordinatesGenerator || KY,
        MY = oY.horizontalPoints,
        wY = oY.verticalPoints;
      if ((!MY || !MY.length) && IY()(JY)) {
        var bY = CY && CY.length,
          XY = JY({
            yAxis: hY ? WY(WY({}, hY), {}, {
              ticks: bY ? CY : hY.ticks
            }) : void 0,
            width: uY,
            height: iY,
            offset: yY
          }, !!bY || ZY);
        (0, RY.d)(Array.isArray(XY), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(QY(XY), "]")), Array.isArray(XY) && (MY = XY)
      }
      if ((!wY || !wY.length) && IY()(dY)) {
        var qY = fY && fY.length,
          pY = dY({
            xAxis: jY ? WY(WY({}, jY), {}, {
              ticks: qY ? fY : jY.ticks
            }) : void 0,
            width: uY,
            height: iY,
            offset: yY
          }, !!qY || ZY);
        (0, RY.d)(Array.isArray(pY), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(QY(pY), "]")), Array.isArray(pY) && (wY = pY)
      }
      return FY.createElement("g", {
        className: "recharts-cartesian-grid"
      }, FY.createElement(SY, {
        fill: oY.fill,
        fillOpacity: oY.fillOpacity,
        x: oY.x,
        y: oY.y,
        width: oY.width,
        height: oY.height,
        ry: oY.ry
      }), FY.createElement(TY, mY({}, oY, {
        offset: yY,
        horizontalPoints: MY,
        xAxis: jY,
        yAxis: hY
      })), FY.createElement(eY, mY({}, oY, {
        offset: yY,
        verticalPoints: wY,
        xAxis: jY,
        yAxis: hY
      })), FY.createElement(NY, mY({}, oY, {
        horizontalPoints: MY
      })), FY.createElement(BY, mY({}, oY, {
        verticalPoints: wY
      })))
    }
    zY.displayName = "CartesianGrid"
  },
  5770: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => VY
    });
    var FY = DY(61),
      AY = DY(5536),
      IY = DY(5545),
      RY = DY(5023),
      OY = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function gY(YY) {
      return gY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, gY(YY)
    }

    function aY() {
      return aY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, aY.apply(this, arguments)
    }

    function vY(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        var DY = null == YY ? null : "undefined" != typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
        if (null != DY) {
          var FY, AY, IY, RY, OY = [],
            gY = !0,
            aY = !1;
          try {
            if (IY = (DY = DY.call(YY)).next, 0 === rY) {
              if (Object(DY) !== DY) return;
              gY = !1
            } else
              for (; !(gY = (FY = IY.call(DY)).done) && (OY.push(FY.value), OY.length !== rY); gY = !0);
          } catch (YY) {
            aY = !0, AY = YY
          } finally {
            try {
              if (!gY && null != DY.return && (RY = DY.return(), Object(RY) !== RY)) return
            } finally {
              if (aY) throw AY
            }
          }
          return OY
        }
      }(YY, rY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return uY(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return uY(YY, rY)
      }(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function sY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function iY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, mY(FY.key), FY)
      }
    }

    function yY(YY, rY, DY) {
      return rY = oY(rY),
        function(YY, rY) {
          if (rY && ("object" === gY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, QY() ? Reflect.construct(rY, DY || [], oY(YY).constructor) : rY.apply(YY, DY))
    }

    function QY() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (QY = function() {
        return !!YY
      })()
    }

    function oY(YY) {
      return oY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, oY(YY)
    }

    function WY(YY, rY) {
      return WY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, WY(YY, rY)
    }

    function EY(YY, rY, DY) {
      return (rY = mY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function mY(YY) {
      var rY = function(YY, rY) {
        if ("object" != gY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != gY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == gY(rY) ? rY : rY + ""
    }
    var VY = function(YY) {
      function rY() {
        return function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, rY), yY(this, rY, arguments)
      }
      return function(YY, rY) {
        if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
        YY.prototype = Object.create(rY && rY.prototype, {
          constructor: {
            value: YY,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(YY, "prototype", {
          writable: !1
        }), rY && WY(YY, rY)
      }(rY, YY), DY = rY, (gY = [{
        key: "render",
        value: function() {
          var YY = this.props,
            rY = YY.offset,
            DY = YY.layout,
            gY = YY.width,
            uY = YY.dataKey,
            iY = YY.data,
            yY = YY.dataPointFormatter,
            QY = YY.xAxis,
            oY = YY.yAxis,
            WY = sY(YY, OY),
            EY = (0, RY.d)(WY, !1);
          "x" === this.props.direction && "number" !== QY.type && (0, AY.c)(!1);
          var mY = iY.map((function(YY) {
            var AY = yY(YY, uY),
              RY = AY.x,
              OY = AY.y,
              sY = AY.value,
              iY = AY.errorVal;
            if (!iY) return null;
            var WY, mY, VY = [];
            if (Array.isArray(iY)) {
              var SY = vY(iY, 2);
              WY = SY[0], mY = SY[1]
            } else WY = mY = iY;
            if ("vertical" === DY) {
              var lY = QY.scale,
                TY = OY + rY,
                eY = TY + gY,
                NY = TY - gY,
                BY = lY(sY - WY),
                cY = lY(sY + mY);
              VY.push({
                x1: cY,
                y1: eY,
                x2: cY,
                y2: NY
              }), VY.push({
                x1: BY,
                y1: TY,
                x2: cY,
                y2: TY
              }), VY.push({
                x1: BY,
                y1: eY,
                x2: BY,
                y2: NY
              })
            } else if ("horizontal" === DY) {
              var KY = oY.scale,
                HY = RY + rY,
                zY = HY - gY,
                ZY = HY + gY,
                CY = KY(sY - WY),
                fY = KY(sY + mY);
              VY.push({
                x1: zY,
                y1: fY,
                x2: ZY,
                y2: fY
              }), VY.push({
                x1: HY,
                y1: CY,
                x2: HY,
                y2: fY
              }), VY.push({
                x1: zY,
                y1: CY,
                x2: ZY,
                y2: CY
              })
            }
            return FY.createElement(IY.b, aY({
              className: "recharts-errorBar",
              key: "bar-".concat(VY.map((function(YY) {
                return "".concat(YY.x1, "-").concat(YY.x2, "-").concat(YY.y1, "-").concat(YY.y2)
              })))
            }, EY), VY.map((function(YY) {
              return FY.createElement("line", aY({}, YY, {
                key: "line-".concat(YY.x1, "-").concat(YY.x2, "-").concat(YY.y1, "-").concat(YY.y2)
              }))
            })))
          }));
          return FY.createElement(IY.b, {
            className: "recharts-errorBars"
          }, mY)
        }
      }]) && iY(DY.prototype, gY), uY && iY(DY, uY), Object.defineProperty(DY, "prototype", {
        writable: !1
      }), DY;
      var DY, gY, uY
    }(FY.Component);
    EY(VY, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), EY(VY, "displayName", "ErrorBar")
  },
  5948: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => JY
    });
    var FY = DY(61),
      AY = DY(5698),
      IY = DY(4840),
      RY = DY.n(IY),
      OY = DY(5007),
      gY = DY.n(OY),
      aY = DY(5759),
      vY = DY.n(aY),
      uY = DY(4638),
      sY = DY(5939),
      iY = DY(5684),
      yY = DY(5545),
      QY = DY(5838),
      oY = DY(5770),
      WY = DY(4723),
      EY = DY(5023),
      mY = DY(5556),
      VY = DY(5709),
      SY = ["type", "layout", "connectNulls", "ref"],
      lY = ["key"];

    function TY(YY) {
      return TY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, TY(YY)
    }

    function eY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function NY() {
      return NY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, NY.apply(this, arguments)
    }

    function BY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function cY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? BY(Object(DY), !0).forEach((function(rY) {
          hY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : BY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function KY(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return HY(YY)
      }(YY) || function(YY) {
        if ("undefined" !== typeof Symbol && null != YY[Symbol.iterator] || null != YY["@@iterator"]) return Array.from(YY)
      }(YY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return HY(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return HY(YY, rY)
      }(YY) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function HY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function zY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, dY(FY.key), FY)
      }
    }

    function ZY(YY, rY, DY) {
      return rY = fY(rY),
        function(YY, rY) {
          if (rY && ("object" === TY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, CY() ? Reflect.construct(rY, DY || [], fY(YY).constructor) : rY.apply(YY, DY))
    }

    function CY() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (CY = function() {
        return !!YY
      })()
    }

    function fY(YY) {
      return fY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, fY(YY)
    }

    function jY(YY, rY) {
      return jY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, jY(YY, rY)
    }

    function hY(YY, rY, DY) {
      return (rY = dY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function dY(YY) {
      var rY = function(YY, rY) {
        if ("object" != TY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != TY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == TY(rY) ? rY : rY + ""
    }
    var JY = function(YY) {
      function rY() {
        var YY;
        ! function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, rY);
        for (var DY = arguments.length, FY = new Array(DY), AY = 0; AY < DY; AY++) FY[AY] = arguments[AY];
        return hY(YY = ZY(this, rY, [].concat(FY)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), hY(YY, "generateSimpleStrokeDasharray", (function(YY, rY) {
          return "".concat(rY, "px ").concat(YY - rY, "px")
        })), hY(YY, "getStrokeDasharray", (function(DY, FY, AY) {
          var IY = AY.reduce((function(YY, rY) {
            return YY + rY
          }));
          if (!IY) return YY.generateSimpleStrokeDasharray(FY, DY);
          for (var RY = Math.floor(DY / IY), OY = DY % IY, gY = FY - DY, aY = [], vY = 0, uY = 0; vY < AY.length; uY += AY[vY], ++vY)
            if (uY + AY[vY] > OY) {
              aY = [].concat(KY(AY.slice(0, vY)), [OY - uY]);
              break
            } var sY = aY.length % 2 === 0 ? [0, gY] : [gY];
          return [].concat(KY(rY.repeat(AY, RY)), KY(aY), sY).map((function(YY) {
            return "".concat(YY, "px")
          })).join(", ")
        })), hY(YY, "id", (0, WY.F)("recharts-line-")), hY(YY, "pathRef", (function(rY) {
          YY.mainCurve = rY
        })), hY(YY, "handleAnimationEnd", (function() {
          YY.setState({
            isAnimationFinished: !0
          }), YY.props.onAnimationEnd && YY.props.onAnimationEnd()
        })), hY(YY, "handleAnimationStart", (function() {
          YY.setState({
            isAnimationFinished: !1
          }), YY.props.onAnimationStart && YY.props.onAnimationStart()
        })), YY
      }
      return function(YY, rY) {
        if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
        YY.prototype = Object.create(rY && rY.prototype, {
          constructor: {
            value: YY,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(YY, "prototype", {
          writable: !1
        }), rY && jY(YY, rY)
      }(rY, YY), DY = rY, IY = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var YY = this.getTotalLength();
            this.setState({
              totalLength: YY
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var YY = this.getTotalLength();
            YY !== this.state.totalLength && this.setState({
              totalLength: YY
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var YY = this.mainCurve;
          try {
            return YY && YY.getTotalLength && YY.getTotalLength() || 0
          } catch (rY) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(YY, rY) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var DY = this.props,
            AY = DY.points,
            IY = DY.xAxis,
            RY = DY.yAxis,
            OY = DY.layout,
            gY = DY.children,
            aY = (0, EY.h)(gY, oY.b);
          if (!aY) return null;
          var vY = function(YY, rY) {
              return {
                x: YY.x,
                y: YY.y,
                value: YY.value,
                errorVal: (0, VY.bb)(YY.payload, rY)
              }
            },
            uY = {
              clipPath: YY ? "url(#clipPath-".concat(rY, ")") : null
            };
          return FY.createElement(yY.b, uY, aY.map((function(YY) {
            return FY.cloneElement(YY, {
              key: "bar-".concat(YY.props.dataKey),
              data: AY,
              xAxis: IY,
              yAxis: RY,
              layout: OY,
              dataPointFormatter: vY
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(YY, DY, AY) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var IY = this.props,
            RY = IY.dot,
            OY = IY.points,
            gY = IY.dataKey,
            aY = (0, EY.d)(this.props, !1),
            vY = (0, EY.d)(RY, !0),
            uY = OY.map((function(YY, DY) {
              var FY = cY(cY(cY({
                key: "dot-".concat(DY),
                r: 3
              }, aY), vY), {}, {
                index: DY,
                cx: YY.x,
                cy: YY.y,
                value: YY.value,
                dataKey: gY,
                payload: YY.payload,
                points: OY
              });
              return rY.renderDotItem(RY, FY)
            })),
            sY = {
              clipPath: YY ? "url(#clipPath-".concat(DY ? "" : "dots-").concat(AY, ")") : null
            };
          return FY.createElement(yY.b, NY({
            className: "recharts-line-dots",
            key: "dots"
          }, sY), uY)
        }
      }, {
        key: "renderCurveStatically",
        value: function(YY, rY, DY, AY) {
          var IY = this.props,
            RY = IY.type,
            OY = IY.layout,
            gY = IY.connectNulls,
            aY = (IY.ref, eY(IY, SY)),
            vY = cY(cY(cY({}, (0, EY.d)(aY, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: rY ? "url(#clipPath-".concat(DY, ")") : null,
              points: YY
            }, AY), {}, {
              type: RY,
              layout: OY,
              connectNulls: gY
            });
          return FY.createElement(sY.d, NY({}, vY, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(YY, rY) {
          var DY = this,
            IY = this.props,
            RY = IY.points,
            OY = IY.strokeDasharray,
            gY = IY.isAnimationActive,
            aY = IY.animationBegin,
            vY = IY.animationDuration,
            uY = IY.animationEasing,
            sY = IY.animationId,
            iY = IY.animateNewValues,
            yY = IY.width,
            QY = IY.height,
            oY = this.state,
            EY = oY.prevPoints,
            mY = oY.totalLength;
          return FY.createElement(AY.e, {
            Ei: aY,
            duration: vY,
            isActive: gY,
            easing: uY,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(sY),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(FY) {
            var AY = FY.t;
            if (EY) {
              var IY = EY.length / RY.length,
                gY = RY.map((function(YY, rY) {
                  var DY = Math.floor(rY * IY);
                  if (EY[DY]) {
                    var FY = EY[DY],
                      RY = (0, WY.r)(FY.x, YY.x),
                      OY = (0, WY.r)(FY.y, YY.y);
                    return cY(cY({}, YY), {}, {
                      x: RY(AY),
                      y: OY(AY)
                    })
                  }
                  if (iY) {
                    var gY = (0, WY.r)(2 * yY, YY.x),
                      aY = (0, WY.r)(QY / 2, YY.y);
                    return cY(cY({}, YY), {}, {
                      x: gY(AY),
                      y: aY(AY)
                    })
                  }
                  return cY(cY({}, YY), {}, {
                    x: YY.x,
                    y: YY.y
                  })
                }));
              return DY.renderCurveStatically(gY, YY, rY)
            }
            var aY, vY = (0, WY.r)(0, mY)(AY);
            if (OY) {
              var uY = "".concat(OY).split(/[,\s]+/gim).map((function(YY) {
                return parseFloat(YY)
              }));
              aY = DY.getStrokeDasharray(vY, mY, uY)
            } else aY = DY.generateSimpleStrokeDasharray(mY, vY);
            return DY.renderCurveStatically(RY, YY, rY, {
              strokeDasharray: aY
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(YY, rY) {
          var DY = this.props,
            FY = DY.points,
            AY = DY.isAnimationActive,
            IY = this.state,
            RY = IY.prevPoints,
            OY = IY.totalLength;
          return AY && FY && FY.length && (!RY && OY > 0 || !vY()(RY, FY)) ? this.renderCurveWithAnimation(YY, rY) : this.renderCurveStatically(FY, YY, rY)
        }
      }, {
        key: "render",
        value: function() {
          var YY, rY = this.props,
            DY = rY.hide,
            AY = rY.dot,
            IY = rY.points,
            RY = rY.className,
            OY = rY.xAxis,
            aY = rY.yAxis,
            vY = rY.top,
            sY = rY.left,
            iY = rY.width,
            oY = rY.height,
            WY = rY.isAnimationActive,
            mY = rY.id;
          if (DY || !IY || !IY.length) return null;
          var VY = this.state.isAnimationFinished,
            SY = 1 === IY.length,
            lY = (0, uY.d)("recharts-line", RY),
            TY = OY && OY.allowDataOverflow,
            eY = aY && aY.allowDataOverflow,
            NY = TY || eY,
            BY = gY()(mY) ? this.id : mY,
            cY = null !== (YY = (0, EY.d)(AY, !1)) && void 0 !== YY ? YY : {
              r: 3,
              strokeWidth: 2
            },
            KY = cY.r,
            HY = void 0 === KY ? 3 : KY,
            zY = cY.strokeWidth,
            ZY = void 0 === zY ? 2 : zY,
            CY = ((0, EY.w)(AY) ? AY : {}).clipDot,
            fY = void 0 === CY || CY,
            jY = 2 * HY + ZY;
          return FY.createElement(yY.b, {
            className: lY
          }, TY || eY ? FY.createElement("defs", null, FY.createElement("clipPath", {
            id: "clipPath-".concat(BY)
          }, FY.createElement("rect", {
            x: TY ? sY : sY - iY / 2,
            y: eY ? vY : vY - oY / 2,
            width: TY ? iY : 2 * iY,
            height: eY ? oY : 2 * oY
          })), !fY && FY.createElement("clipPath", {
            id: "clipPath-dots-".concat(BY)
          }, FY.createElement("rect", {
            x: sY - jY / 2,
            y: vY - jY / 2,
            width: iY + jY,
            height: oY + jY
          }))) : null, !SY && this.renderCurve(NY, BY), this.renderErrorBar(NY, BY), (SY || AY) && this.renderDots(NY, fY, BY), (!WY || VY) && QY.b.renderCallByParent(this.props, IY))
        }
      }], OY = [{
        key: "getDerivedStateFromProps",
        value: function(YY, rY) {
          return YY.animationId !== rY.prevAnimationId ? {
            prevAnimationId: YY.animationId,
            curPoints: YY.points,
            prevPoints: rY.curPoints
          } : YY.points !== rY.curPoints ? {
            curPoints: YY.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(YY, rY) {
          for (var DY = YY.length % 2 !== 0 ? [].concat(KY(YY), [0]) : YY, FY = [], AY = 0; AY < rY; ++AY) FY = [].concat(KY(FY), KY(DY));
          return FY
        }
      }, {
        key: "renderDotItem",
        value: function(YY, rY) {
          var DY;
          if (FY.isValidElement(YY)) DY = FY.cloneElement(YY, rY);
          else if (RY()(YY)) DY = YY(rY);
          else {
            var AY = rY.key,
              IY = eY(rY, lY),
              OY = (0, uY.d)("recharts-line-dot", "boolean" !== typeof YY ? YY.className : "");
            DY = FY.createElement(iY.d, NY({
              key: AY
            }, IY, {
              className: OY
            }))
          }
          return DY
        }
      }], IY && zY(DY.prototype, IY), OY && zY(DY, OY), Object.defineProperty(DY, "prototype", {
        writable: !1
      }), DY;
      var DY, IY, OY
    }(FY.PureComponent);
    hY(JY, "displayName", "Line"), hY(JY, "defaultProps", {
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
      isAnimationActive: !mY.e.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), hY(JY, "getComposedData", (function(YY) {
      var rY = YY.props,
        DY = YY.xAxis,
        FY = YY.yAxis,
        AY = YY.xAxisTicks,
        IY = YY.yAxisTicks,
        RY = YY.dataKey,
        OY = YY.bandSize,
        aY = YY.displayedData,
        vY = YY.offset,
        uY = rY.layout;
      return cY({
        points: aY.map((function(YY, rY) {
          var aY = (0, VY.bb)(YY, RY);
          return "horizontal" === uY ? {
            x: (0, VY.F)({
              axis: DY,
              ticks: AY,
              bandSize: OY,
              entry: YY,
              index: rY
            }),
            y: gY()(aY) ? null : FY.scale(aY),
            value: aY,
            payload: YY
          } : {
            x: gY()(aY) ? null : DY.scale(aY),
            y: (0, VY.F)({
              axis: FY,
              ticks: IY,
              bandSize: OY,
              entry: YY,
              index: rY
            }),
            value: aY,
            payload: YY
          }
        })),
        layout: uY
      }, vY)
    }))
  },
  5890: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => ZY
    });
    var FY = DY(61),
      AY = DY(4840),
      IY = DY.n(AY),
      RY = DY(5898),
      OY = DY.n(RY),
      gY = DY(4638),
      aY = DY(5545),
      vY = DY(5792),
      uY = DY(5801),
      sY = DY(4723),
      iY = DY(5805),
      yY = DY(5016),
      QY = DY(5023),
      oY = DY(5913);

    function WY(YY) {
      return WY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, WY(YY)
    }

    function EY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, BY(FY.key), FY)
      }
    }

    function mY(YY, rY, DY) {
      return rY = SY(rY),
        function(YY, rY) {
          if (rY && ("object" === WY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, VY() ? Reflect.construct(rY, DY || [], SY(YY).constructor) : rY.apply(YY, DY))
    }

    function VY() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (VY = function() {
        return !!YY
      })()
    }

    function SY(YY) {
      return SY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, SY(YY)
    }

    function lY(YY, rY) {
      return lY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, lY(YY, rY)
    }

    function TY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function eY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? TY(Object(DY), !0).forEach((function(rY) {
          NY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : TY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function NY(YY, rY, DY) {
      return (rY = BY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function BY(YY) {
      var rY = function(YY, rY) {
        if ("object" != WY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != WY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == WY(rY) ? rY : rY + ""
    }

    function cY(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        var DY = null == YY ? null : "undefined" != typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
        if (null != DY) {
          var FY, AY, IY, RY, OY = [],
            gY = !0,
            aY = !1;
          try {
            if (IY = (DY = DY.call(YY)).next, 0 === rY) {
              if (Object(DY) !== DY) return;
              gY = !1
            } else
              for (; !(gY = (FY = IY.call(DY)).done) && (OY.push(FY.value), OY.length !== rY); gY = !0);
          } catch (YY) {
            aY = !0, AY = YY
          } finally {
            try {
              if (!gY && null != DY.return && (RY = DY.return(), Object(RY) !== RY)) return
            } finally {
              if (aY) throw AY
            }
          }
          return OY
        }
      }(YY, rY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return KY(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return KY(YY, rY)
      }(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function KY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function HY() {
      return HY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, HY.apply(this, arguments)
    }

    function zY(YY) {
      var rY = YY.x,
        DY = YY.y,
        AY = YY.segment,
        RY = YY.xAxisId,
        WY = YY.yAxisId,
        EY = YY.shape,
        mY = YY.className,
        VY = YY.alwaysShow,
        SY = (0, oY.n)(),
        lY = (0, oY.u)(RY),
        TY = (0, oY.w)(WY),
        NY = (0, oY.r)();
      if (!SY || !NY) return null;
      (0, yY.d)(void 0 === VY, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var BY = function(YY, rY, DY, FY, AY, IY, RY, gY, aY) {
        var vY = AY.x,
          sY = AY.y,
          iY = AY.width,
          yY = AY.height;
        if (DY) {
          var QY = aY.y,
            oY = YY.y.apply(QY, {
              position: IY
            });
          if ((0, uY.d)(aY, "discard") && !YY.y.isInRange(oY)) return null;
          var WY = [{
            x: vY + iY,
            y: oY
          }, {
            x: vY,
            y: oY
          }];
          return "left" === gY ? WY.reverse() : WY
        }
        if (rY) {
          var EY = aY.x,
            mY = YY.x.apply(EY, {
              position: IY
            });
          if ((0, uY.d)(aY, "discard") && !YY.x.isInRange(mY)) return null;
          var VY = [{
            x: mY,
            y: sY + yY
          }, {
            x: mY,
            y: sY
          }];
          return "top" === RY ? VY.reverse() : VY
        }
        if (FY) {
          var SY = aY.segment.map((function(rY) {
            return YY.apply(rY, {
              position: IY
            })
          }));
          return (0, uY.d)(aY, "discard") && OY()(SY, (function(rY) {
            return !YY.isInRange(rY)
          })) ? null : SY
        }
        return null
      }((0, iY.d)({
        x: lY.scale,
        y: TY.scale
      }), (0, sY.v)(rY), (0, sY.v)(DY), AY && 2 === AY.length, NY, YY.position, lY.orientation, TY.orientation, YY);
      if (!BY) return null;
      var KY = cY(BY, 2),
        zY = KY[0],
        ZY = zY.x,
        CY = zY.y,
        fY = KY[1],
        jY = fY.x,
        hY = fY.y,
        dY = eY(eY({
          clipPath: (0, uY.d)(YY, "hidden") ? "url(#".concat(SY, ")") : void 0
        }, (0, QY.d)(YY, !0)), {}, {
          x1: ZY,
          y1: CY,
          x2: jY,
          y2: hY
        });
      return FY.createElement(aY.b, {
        className: (0, gY.d)("recharts-reference-line", mY)
      }, function(YY, rY) {
        return FY.isValidElement(YY) ? FY.cloneElement(YY, rY) : IY()(YY) ? YY(rY) : FY.createElement("line", HY({}, rY, {
          className: "recharts-reference-line-line"
        }))
      }(EY, dY), vY.c.renderCallByParent(YY, (0, iY.j)({
        x1: ZY,
        y1: CY,
        x2: jY,
        y2: hY
      })))
    }
    var ZY = function(YY) {
      function rY() {
        return function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, rY), mY(this, rY, arguments)
      }
      return function(YY, rY) {
        if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
        YY.prototype = Object.create(rY && rY.prototype, {
          constructor: {
            value: YY,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(YY, "prototype", {
          writable: !1
        }), rY && lY(YY, rY)
      }(rY, YY), DY = rY, (AY = [{
        key: "render",
        value: function() {
          return FY.createElement(zY, this.props)
        }
      }]) && EY(DY.prototype, AY), IY && EY(DY, IY), Object.defineProperty(DY, "prototype", {
        writable: !1
      }), DY;
      var DY, AY, IY
    }(FY.Component);
    NY(ZY, "displayName", "ReferenceLine"), NY(ZY, "defaultProps", {
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
  5953: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => EY
    });
    var FY = DY(61),
      AY = DY(4638),
      IY = DY(5913),
      RY = DY(5955),
      OY = DY(5709);

    function gY(YY) {
      return gY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, gY(YY)
    }

    function aY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, QY(FY.key), FY)
      }
    }

    function vY(YY, rY, DY) {
      return rY = sY(rY),
        function(YY, rY) {
          if (rY && ("object" === gY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, uY() ? Reflect.construct(rY, DY || [], sY(YY).constructor) : rY.apply(YY, DY))
    }

    function uY() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (uY = function() {
        return !!YY
      })()
    }

    function sY(YY) {
      return sY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, sY(YY)
    }

    function iY(YY, rY) {
      return iY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, iY(YY, rY)
    }

    function yY(YY, rY, DY) {
      return (rY = QY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function QY(YY) {
      var rY = function(YY, rY) {
        if ("object" != gY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != gY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == gY(rY) ? rY : rY + ""
    }

    function oY() {
      return oY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, oY.apply(this, arguments)
    }

    function WY(YY) {
      var rY = YY.xAxisId,
        DY = (0, IY.m)(),
        gY = (0, IY.l)(),
        aY = (0, IY.u)(rY);
      return null == aY ? null : FY.createElement(RY.d, oY({}, aY, {
        className: (0, AY.d)("recharts-".concat(aY.axisType, " ").concat(aY.axisType), aY.className),
        viewBox: {
          x: 0,
          y: 0,
          width: DY,
          height: gY
        },
        ticksGenerator: function(YY) {
          return (0, OY.Z)(YY, !0)
        }
      }))
    }
    var EY = function(YY) {
      function rY() {
        return function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, rY), vY(this, rY, arguments)
      }
      return function(YY, rY) {
        if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
        YY.prototype = Object.create(rY && rY.prototype, {
          constructor: {
            value: YY,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(YY, "prototype", {
          writable: !1
        }), rY && iY(YY, rY)
      }(rY, YY), DY = rY, (AY = [{
        key: "render",
        value: function() {
          return FY.createElement(WY, this.props)
        }
      }]) && aY(DY.prototype, AY), IY && aY(DY, IY), Object.defineProperty(DY, "prototype", {
        writable: !1
      }), DY;
      var DY, AY, IY
    }(FY.Component);
    yY(EY, "displayName", "XAxis"), yY(EY, "defaultProps", {
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
  5966: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => EY
    });
    var FY = DY(61),
      AY = DY(4638),
      IY = DY(5913),
      RY = DY(5955),
      OY = DY(5709);

    function gY(YY) {
      return gY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, gY(YY)
    }

    function aY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, QY(FY.key), FY)
      }
    }

    function vY(YY, rY, DY) {
      return rY = sY(rY),
        function(YY, rY) {
          if (rY && ("object" === gY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, uY() ? Reflect.construct(rY, DY || [], sY(YY).constructor) : rY.apply(YY, DY))
    }

    function uY() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (uY = function() {
        return !!YY
      })()
    }

    function sY(YY) {
      return sY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, sY(YY)
    }

    function iY(YY, rY) {
      return iY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, iY(YY, rY)
    }

    function yY(YY, rY, DY) {
      return (rY = QY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function QY(YY) {
      var rY = function(YY, rY) {
        if ("object" != gY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != gY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == gY(rY) ? rY : rY + ""
    }

    function oY() {
      return oY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, oY.apply(this, arguments)
    }
    var WY = function(YY) {
        var rY = YY.yAxisId,
          DY = (0, IY.m)(),
          gY = (0, IY.l)(),
          aY = (0, IY.w)(rY);
        return null == aY ? null : FY.createElement(RY.d, oY({}, aY, {
          className: (0, AY.d)("recharts-".concat(aY.axisType, " ").concat(aY.axisType), aY.className),
          viewBox: {
            x: 0,
            y: 0,
            width: DY,
            height: gY
          },
          ticksGenerator: function(YY) {
            return (0, OY.Z)(YY, !0)
          }
        }))
      },
      EY = function(YY) {
        function rY() {
          return function(YY, rY) {
            if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
          }(this, rY), vY(this, rY, arguments)
        }
        return function(YY, rY) {
          if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
          YY.prototype = Object.create(rY && rY.prototype, {
            constructor: {
              value: YY,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(YY, "prototype", {
            writable: !1
          }), rY && iY(YY, rY)
        }(rY, YY), DY = rY, (AY = [{
          key: "render",
          value: function() {
            return FY.createElement(WY, this.props)
          }
        }]) && aY(DY.prototype, AY), IY && aY(DY, IY), Object.defineProperty(DY, "prototype", {
          writable: !1
        }), DY;
        var DY, AY, IY
      }(FY.Component);
    yY(EY, "displayName", "YAxis"), yY(EY, "defaultProps", {
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
  5959: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => QY
    });
    var FY = DY(4840),
      AY = DY.n(FY),
      IY = DY(4723),
      RY = DY(5704),
      OY = DY(5556),
      gY = DY(5805);

    function aY(YY, rY, DY) {
      if (rY < 1) return [];
      if (1 === rY && void 0 === DY) return YY;
      for (var FY = [], AY = 0; AY < YY.length; AY += rY) {
        if (void 0 !== DY && !0 !== DY(YY[AY])) return;
        FY.push(YY[AY])
      }
      return FY
    }

    function vY(YY, rY, DY, FY, AY) {
      if (YY * rY < YY * FY || YY * rY > YY * AY) return !1;
      var IY = DY();
      return YY * (rY - YY * IY / 2 - FY) >= 0 && YY * (rY + YY * IY / 2 - AY) <= 0
    }

    function uY(YY) {
      return uY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, uY(YY)
    }

    function sY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function iY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? sY(Object(DY), !0).forEach((function(rY) {
          yY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : sY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function yY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != uY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != uY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == uY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function QY(YY, rY, DY) {
      var FY = YY.Zu,
        uY = YY.ticks,
        sY = YY.viewBox,
        yY = YY.minTickGap,
        QY = YY.orientation,
        oY = YY.interval,
        WY = YY.tickFormatter,
        EY = YY.unit,
        mY = YY.angle;
      if (!uY || !uY.length || !FY) return [];
      if ((0, IY.w)(oY) || OY.e.isSsr) return function(YY, rY) {
        return aY(YY, rY + 1)
      }(uY, "number" === typeof oY && (0, IY.w)(oY) ? oY : 0);
      var VY = [],
        SY = "top" === QY || "bottom" === QY ? "width" : "height",
        lY = EY && "width" === SY ? (0, RY.d)(EY, {
          fontSize: rY,
          letterSpacing: DY
        }) : {
          width: 0,
          height: 0
        },
        TY = function(YY, FY) {
          var IY = AY()(WY) ? WY(YY.value, FY) : YY.value;
          return "width" === SY ? function(YY, rY, DY) {
            var FY = {
              width: YY.width + rY.width,
              height: YY.height + rY.height
            };
            return (0, gY.h)(FY, DY)
          }((0, RY.d)(IY, {
            fontSize: rY,
            letterSpacing: DY
          }), lY, mY) : (0, RY.d)(IY, {
            fontSize: rY,
            letterSpacing: DY
          })[SY]
        },
        eY = uY.length >= 2 ? (0, IY.C)(uY[1].coordinate - uY[0].coordinate) : 1,
        NY = function(YY, rY, DY) {
          var FY = "width" === DY,
            AY = YY.x,
            IY = YY.y,
            RY = YY.width,
            OY = YY.height;
          return 1 === rY ? {
            start: FY ? AY : IY,
            end: FY ? AY + RY : IY + OY
          } : {
            start: FY ? AY + RY : IY + OY,
            end: FY ? AY : IY
          }
        }(sY, eY, SY);
      return "equidistantPreserveStart" === oY ? function(YY, rY, DY, FY, AY) {
        for (var IY, RY = (FY || []).slice(), OY = rY.start, gY = rY.end, uY = 0, sY = 1, iY = OY, yY = function() {
            var rY = null === FY || void 0 === FY ? void 0 : FY[uY];
            if (void 0 === rY) return {
              v: aY(FY, sY)
            };
            var IY, RY = uY,
              yY = function() {
                return void 0 === IY && (IY = DY(rY, RY)), IY
              },
              QY = rY.coordinate,
              oY = 0 === uY || vY(YY, QY, yY, iY, gY);
            oY || (uY = 0, iY = OY, sY += 1), oY && (iY = QY + YY * (yY() / 2 + AY), uY += sY)
          }; sY <= RY.length;)
          if (IY = yY()) return IY.v;
        return []
      }(eY, NY, TY, uY, yY) : (VY = "preserveStart" === oY || "preserveStartEnd" === oY ? function(YY, rY, DY, FY, AY, IY) {
        var RY = (FY || []).slice(),
          OY = RY.length,
          gY = rY.start,
          aY = rY.end;
        if (IY) {
          var uY = FY[OY - 1],
            sY = DY(uY, OY - 1),
            yY = YY * (uY.coordinate + YY * sY / 2 - aY);
          RY[OY - 1] = uY = iY(iY({}, uY), {}, {
            tickCoord: yY > 0 ? uY.coordinate - yY * YY : uY.coordinate
          }), vY(YY, uY.tickCoord, (function() {
            return sY
          }), gY, aY) && (aY = uY.tickCoord - YY * (sY / 2 + AY), RY[OY - 1] = iY(iY({}, uY), {}, {
            isShow: !0
          }))
        }
        for (var QY = IY ? OY - 1 : OY, oY = function(rY) {
            var FY, IY = RY[rY],
              OY = function() {
                return void 0 === FY && (FY = DY(IY, rY)), FY
              };
            if (0 === rY) {
              var uY = YY * (IY.coordinate - YY * OY() / 2 - gY);
              RY[rY] = IY = iY(iY({}, IY), {}, {
                tickCoord: uY < 0 ? IY.coordinate - uY * YY : IY.coordinate
              })
            } else RY[rY] = IY = iY(iY({}, IY), {}, {
              tickCoord: IY.coordinate
            });
            vY(YY, IY.tickCoord, OY, gY, aY) && (gY = IY.tickCoord + YY * (OY() / 2 + AY), RY[rY] = iY(iY({}, IY), {}, {
              isShow: !0
            }))
          }, WY = 0; WY < QY; WY++) oY(WY);
        return RY
      }(eY, NY, TY, uY, yY, "preserveStartEnd" === oY) : function(YY, rY, DY, FY, AY) {
        for (var IY = (FY || []).slice(), RY = IY.length, OY = rY.start, gY = rY.end, aY = function(rY) {
            var FY, aY = IY[rY],
              uY = function() {
                return void 0 === FY && (FY = DY(aY, rY)), FY
              };
            if (rY === RY - 1) {
              var sY = YY * (aY.coordinate + YY * uY() / 2 - gY);
              IY[rY] = aY = iY(iY({}, aY), {}, {
                tickCoord: sY > 0 ? aY.coordinate - sY * YY : aY.coordinate
              })
            } else IY[rY] = aY = iY(iY({}, aY), {}, {
              tickCoord: aY.coordinate
            });
            vY(YY, aY.tickCoord, uY, OY, gY) && (gY = aY.tickCoord - YY * (uY() / 2 + AY), IY[rY] = iY(iY({}, aY), {}, {
              isShow: !0
            }))
          }, uY = RY - 1; uY >= 0; uY--) aY(uY);
        return IY
      }(eY, NY, TY, uY, yY), VY.filter((function(YY) {
        return YY.isShow
      })))
    }
  },
  5976: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => gY
    });
    var FY = DY(5045),
      AY = DY(5830),
      IY = DY(5953),
      RY = DY(5966),
      OY = DY(5805),
      gY = (0, FY.b)({
        chartName: "BarChart",
        GraphicalChild: AY.b,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: IY.c
        }, {
          axisType: "yAxis",
          AxisComp: RY.c
        }],
        formatAxisMap: OY.f
      })
  },
  5042: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => Ar
    });
    var FY = DY(5045),
      AY = DY(5941),
      IY = DY(5830),
      RY = DY(5948),
      OY = DY(61),
      gY = DY(5698),
      aY = DY(5007),
      vY = DY.n(aY),
      uY = DY(5759),
      sY = DY.n(uY),
      iY = DY(4840),
      yY = DY.n(iY),
      QY = DY(4638),
      oY = DY(5545),
      WY = DY(5838),
      EY = DY(5023),
      mY = DY(5556);

    function VY(YY) {
      return VY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, VY(YY)
    }

    function SY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, cY(FY.key), FY)
      }
    }

    function lY(YY, rY, DY) {
      return rY = eY(rY),
        function(YY, rY) {
          if (rY && ("object" === VY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, TY() ? Reflect.construct(rY, DY || [], eY(YY).constructor) : rY.apply(YY, DY))
    }

    function TY() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (TY = function() {
        return !!YY
      })()
    }

    function eY(YY) {
      return eY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, eY(YY)
    }

    function NY(YY, rY) {
      return NY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, NY(YY, rY)
    }

    function BY(YY, rY, DY) {
      return (rY = cY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function cY(YY) {
      var rY = function(YY, rY) {
        if ("object" != VY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != VY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == VY(rY) ? rY : rY + ""
    }
    var KY = function(YY) {
      function rY() {
        return function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, rY), lY(this, rY, arguments)
      }
      return function(YY, rY) {
        if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
        YY.prototype = Object.create(rY && rY.prototype, {
          constructor: {
            value: YY,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(YY, "prototype", {
          writable: !1
        }), rY && NY(YY, rY)
      }(rY, YY), DY = rY, (FY = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && SY(DY.prototype, FY), AY && SY(DY, AY), Object.defineProperty(DY, "prototype", {
        writable: !1
      }), DY;
      var DY, FY, AY
    }(OY.Component);
    BY(KY, "displayName", "ZAxis"), BY(KY, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var HY = DY(5939),
      zY = DY(5770),
      ZY = DY(5835),
      CY = DY(4723),
      fY = DY(5709),
      jY = DY(5040),
      hY = DY(5626),
      dY = DY(5851),
      JY = ["option", "isActive"];

    function MY() {
      return MY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, MY.apply(this, arguments)
    }

    function wY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function bY(YY) {
      var rY = YY.option,
        DY = YY.isActive,
        FY = wY(YY, JY);
      return "string" === typeof rY ? OY.createElement(dY.d, MY({
        option: OY.createElement(hY.d, MY({
          type: rY
        }, FY)),
        isActive: DY,
        shapeType: "symbols"
      }, FY)) : OY.createElement(dY.d, MY({
        option: rY,
        isActive: DY,
        shapeType: "symbols"
      }, FY))
    }

    function XY(YY) {
      return XY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, XY(YY)
    }

    function qY() {
      return qY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, qY.apply(this, arguments)
    }

    function pY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function kY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? pY(Object(DY), !0).forEach((function(rY) {
          LY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : pY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function GY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, tY(FY.key), FY)
      }
    }

    function xY(YY, rY, DY) {
      return rY = PY(rY),
        function(YY, rY) {
          if (rY && ("object" === XY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, nY() ? Reflect.construct(rY, DY || [], PY(YY).constructor) : rY.apply(YY, DY))
    }

    function nY() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (nY = function() {
        return !!YY
      })()
    }

    function PY(YY) {
      return PY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, PY(YY)
    }

    function UY(YY, rY) {
      return UY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, UY(YY, rY)
    }

    function LY(YY, rY, DY) {
      return (rY = tY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function tY(YY) {
      var rY = function(YY, rY) {
        if ("object" != XY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != XY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == XY(rY) ? rY : rY + ""
    }
    var Yr = function(YY) {
      function rY() {
        var YY;
        ! function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, rY);
        for (var DY = arguments.length, FY = new Array(DY), AY = 0; AY < DY; AY++) FY[AY] = arguments[AY];
        return LY(YY = xY(this, rY, [].concat(FY)), "state", {
          isAnimationFinished: !1
        }), LY(YY, "handleAnimationEnd", (function() {
          YY.setState({
            isAnimationFinished: !0
          })
        })), LY(YY, "handleAnimationStart", (function() {
          YY.setState({
            isAnimationFinished: !1
          })
        })), LY(YY, "id", (0, CY.F)("recharts-scatter-")), YY
      }
      return function(YY, rY) {
        if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
        YY.prototype = Object.create(rY && rY.prototype, {
          constructor: {
            value: YY,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(YY, "prototype", {
          writable: !1
        }), rY && UY(YY, rY)
      }(rY, YY), DY = rY, FY = [{
        key: "renderSymbolsStatically",
        value: function(YY) {
          var rY = this,
            DY = this.props,
            FY = DY.shape,
            AY = DY.activeShape,
            IY = DY.activeIndex,
            RY = (0, EY.d)(this.props, !1);
          return YY.map((function(YY, DY) {
            var gY = IY === DY,
              aY = gY ? AY : FY,
              vY = kY(kY({}, RY), YY);
            return OY.createElement(oY.b, qY({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === YY || void 0 === YY ? void 0 : YY.cx, "-").concat(null === YY || void 0 === YY ? void 0 : YY.cy, "-").concat(null === YY || void 0 === YY ? void 0 : YY.size, "-").concat(DY)
            }, (0, jY.r)(rY.props, YY, DY), {
              role: "img"
            }), OY.createElement(bY, qY({
              option: aY,
              isActive: gY,
              key: "symbol-".concat(DY)
            }, vY)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var YY = this,
            rY = this.props,
            DY = rY.points,
            FY = rY.isAnimationActive,
            AY = rY.animationBegin,
            IY = rY.animationDuration,
            RY = rY.animationEasing,
            aY = rY.animationId,
            vY = this.state.prevPoints;
          return OY.createElement(gY.e, {
            Ei: AY,
            duration: IY,
            isActive: FY,
            easing: RY,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(aY),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(rY) {
            var FY = rY.t,
              AY = DY.map((function(YY, rY) {
                var DY = vY && vY[rY];
                if (DY) {
                  var AY = (0, CY.r)(DY.cx, YY.cx),
                    IY = (0, CY.r)(DY.cy, YY.cy),
                    RY = (0, CY.r)(DY.size, YY.size);
                  return kY(kY({}, YY), {}, {
                    cx: AY(FY),
                    cy: IY(FY),
                    size: RY(FY)
                  })
                }
                var OY = (0, CY.r)(0, YY.size);
                return kY(kY({}, YY), {}, {
                  size: OY(FY)
                })
              }));
            return OY.createElement(oY.b, null, YY.renderSymbolsStatically(AY))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var YY = this.props,
            rY = YY.points,
            DY = YY.isAnimationActive,
            FY = this.state.prevPoints;
          return !(DY && rY && rY.length) || FY && sY()(FY, rY) ? this.renderSymbolsStatically(rY) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var YY = this.props,
            rY = YY.points,
            DY = YY.xAxis,
            FY = YY.yAxis,
            AY = YY.children,
            IY = (0, EY.h)(AY, zY.b);
          return IY ? IY.map((function(YY, AY) {
            var IY = YY.props,
              RY = IY.direction,
              gY = IY.dataKey;
            return OY.cloneElement(YY, {
              key: "".concat(RY, "-").concat(gY, "-").concat(rY[AY]),
              data: rY,
              xAxis: DY,
              yAxis: FY,
              layout: "x" === RY ? "vertical" : "horizontal",
              dataPointFormatter: function(YY, rY) {
                return {
                  x: YY.cx,
                  y: YY.cy,
                  value: "x" === RY ? +YY.node.x : +YY.node.y,
                  errorVal: (0, fY.bb)(YY, rY)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var YY, rY, DY = this.props,
            FY = DY.points,
            AY = DY.line,
            IY = DY.lineType,
            RY = DY.lineJointType,
            gY = (0, EY.d)(this.props, !1),
            aY = (0, EY.d)(AY, !1);
          if ("joint" === IY) YY = FY.map((function(YY) {
            return {
              x: YY.cx,
              y: YY.cy
            }
          }));
          else if ("fitting" === IY) {
            var vY = (0, CY.k)(FY),
              uY = vY.xmin,
              sY = vY.xmax,
              iY = vY.a,
              QY = vY.b,
              WY = function(YY) {
                return iY * YY + QY
              };
            YY = [{
              x: uY,
              y: WY(uY)
            }, {
              x: sY,
              y: WY(sY)
            }]
          }
          var mY = kY(kY(kY({}, gY), {}, {
            fill: "none",
            stroke: gY && gY.fill
          }, aY), {}, {
            points: YY
          });
          return rY = OY.isValidElement(AY) ? OY.cloneElement(AY, mY) : yY()(AY) ? AY(mY) : OY.createElement(HY.d, qY({}, mY, {
            type: RY
          })), OY.createElement(oY.b, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, rY)
        }
      }, {
        key: "render",
        value: function() {
          var YY = this.props,
            rY = YY.hide,
            DY = YY.points,
            FY = YY.line,
            AY = YY.className,
            IY = YY.xAxis,
            RY = YY.yAxis,
            gY = YY.left,
            aY = YY.top,
            uY = YY.width,
            sY = YY.height,
            iY = YY.id,
            yY = YY.isAnimationActive;
          if (rY || !DY || !DY.length) return null;
          var EY = this.state.isAnimationFinished,
            mY = (0, QY.d)("recharts-scatter", AY),
            VY = IY && IY.allowDataOverflow,
            SY = RY && RY.allowDataOverflow,
            lY = VY || SY,
            TY = vY()(iY) ? this.id : iY;
          return OY.createElement(oY.b, {
            className: mY,
            clipPath: lY ? "url(#clipPath-".concat(TY, ")") : null
          }, VY || SY ? OY.createElement("defs", null, OY.createElement("clipPath", {
            id: "clipPath-".concat(TY)
          }, OY.createElement("rect", {
            x: VY ? gY : gY - uY / 2,
            y: SY ? aY : aY - sY / 2,
            width: VY ? uY : 2 * uY,
            height: SY ? sY : 2 * sY
          }))) : null, FY && this.renderLine(), this.renderErrorBar(), OY.createElement(oY.b, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!yY || EY) && WY.b.renderCallByParent(this.props, DY))
        }
      }], AY = [{
        key: "getDerivedStateFromProps",
        value: function(YY, rY) {
          return YY.animationId !== rY.prevAnimationId ? {
            prevAnimationId: YY.animationId,
            curPoints: YY.points,
            prevPoints: rY.curPoints
          } : YY.points !== rY.curPoints ? {
            curPoints: YY.points
          } : null
        }
      }], FY && GY(DY.prototype, FY), AY && GY(DY, AY), Object.defineProperty(DY, "prototype", {
        writable: !1
      }), DY;
      var DY, FY, AY
    }(OY.PureComponent);
    LY(Yr, "displayName", "Scatter"), LY(Yr, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !mY.e.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), LY(Yr, "getComposedData", (function(YY) {
      var rY = YY.xAxis,
        DY = YY.yAxis,
        FY = YY.zAxis,
        AY = YY.item,
        IY = YY.displayedData,
        RY = YY.xAxisTicks,
        OY = YY.yAxisTicks,
        gY = YY.offset,
        aY = AY.props.tooltipType,
        uY = (0, EY.h)(AY.props.children, ZY.c),
        sY = vY()(rY.dataKey) ? AY.props.dataKey : rY.dataKey,
        iY = vY()(DY.dataKey) ? AY.props.dataKey : DY.dataKey,
        yY = FY && FY.dataKey,
        QY = FY ? FY.range : KY.defaultProps.range,
        oY = QY && QY[0],
        WY = rY.scale.bandwidth ? rY.scale.bandwidth() : 0,
        mY = DY.scale.bandwidth ? DY.scale.bandwidth() : 0,
        VY = IY.map((function(YY, IY) {
          var gY = (0, fY.bb)(YY, sY),
            QY = (0, fY.bb)(YY, iY),
            EY = !vY()(yY) && (0, fY.bb)(YY, yY) || "-",
            VY = [{
              name: vY()(rY.dataKey) ? AY.props.name : rY.name || rY.dataKey,
              unit: rY.unit || "",
              value: gY,
              payload: YY,
              dataKey: sY,
              type: aY
            }, {
              name: vY()(DY.dataKey) ? AY.props.name : DY.name || DY.dataKey,
              unit: DY.unit || "",
              value: QY,
              payload: YY,
              dataKey: iY,
              type: aY
            }];
          "-" !== EY && VY.push({
            name: FY.name || FY.dataKey,
            unit: FY.unit || "",
            value: EY,
            payload: YY,
            dataKey: yY,
            type: aY
          });
          var SY = (0, fY.F)({
              axis: rY,
              ticks: RY,
              bandSize: WY,
              entry: YY,
              index: IY,
              dataKey: sY
            }),
            lY = (0, fY.F)({
              axis: DY,
              ticks: OY,
              bandSize: mY,
              entry: YY,
              index: IY,
              dataKey: iY
            }),
            TY = "-" !== EY ? FY.scale(EY) : oY,
            eY = Math.sqrt(Math.max(TY, 0) / Math.PI);
          return kY(kY({}, YY), {}, {
            cx: SY,
            cy: lY,
            x: SY - eY,
            y: lY - eY,
            xAxis: rY,
            yAxis: DY,
            zAxis: FY,
            width: 2 * eY,
            height: 2 * eY,
            size: TY,
            node: {
              x: gY,
              y: QY,
              z: EY
            },
            tooltipPayload: VY,
            tooltipPosition: {
              x: SY,
              y: lY
            },
            payload: YY
          }, uY && uY[IY] && uY[IY].props)
        }));
      return kY({
        points: VY
      }, gY)
    }));
    var rr = DY(5953),
      Dr = DY(5966),
      Fr = DY(5805),
      Ar = (0, FY.b)({
        chartName: "ComposedChart",
        GraphicalChild: [RY.c, AY.d, IY.b, Yr],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: rr.c
        }, {
          axisType: "yAxis",
          AxisComp: Dr.c
        }, {
          axisType: "zAxis",
          AxisComp: KY
        }],
        formatAxisMap: Fr.f
      })
  },
  5045: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => MD
    });
    var FY = DY(61),
      AY = DY(5007),
      IY = DY.n(AY),
      RY = DY(4840),
      OY = DY.n(RY),
      gY = DY(5049),
      aY = DY.n(gY),
      vY = DY(4752),
      uY = DY.n(vY),
      sY = DY(5105),
      iY = DY.n(sY),
      yY = DY(4640),
      QY = DY.n(yY),
      oY = DY(4638),
      WY = DY(5536),
      EY = DY(5539),
      mY = DY(5545),
      VY = DY(5551),
      SY = DY(5621),
      lY = DY(5684),
      TY = DY(5693),
      eY = DY(5023),
      NY = DY(5713),
      BY = DY(5702),
      cY = DY(5709),
      KY = DY(4723);

    function HY(YY) {
      return HY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, HY(YY)
    }

    function zY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function ZY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? zY(Object(DY), !0).forEach((function(rY) {
          CY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : zY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function CY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != HY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != HY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == HY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }
    var fY = ["Webkit", "Moz", "O", "ms"];

    function jY(YY) {
      return jY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, jY(YY)
    }

    function hY() {
      return hY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, hY.apply(this, arguments)
    }

    function dY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function JY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? dY(Object(DY), !0).forEach((function(rY) {
          pY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : dY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function MY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, kY(FY.key), FY)
      }
    }

    function wY(YY, rY, DY) {
      return rY = XY(rY),
        function(YY, rY) {
          if (rY && ("object" === jY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, bY() ? Reflect.construct(rY, DY || [], XY(YY).constructor) : rY.apply(YY, DY))
    }

    function bY() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (bY = function() {
        return !!YY
      })()
    }

    function XY(YY) {
      return XY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, XY(YY)
    }

    function qY(YY, rY) {
      return qY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, qY(YY, rY)
    }

    function pY(YY, rY, DY) {
      return (rY = kY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function kY(YY) {
      var rY = function(YY, rY) {
        if ("object" != jY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != jY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == jY(rY) ? rY : rY + ""
    }
    var GY = function(YY) {
        return YY.changedTouches && !!YY.changedTouches.length
      },
      xY = function(YY) {
        function rY(YY) {
          var DY;
          return function(YY, rY) {
            if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
          }(this, rY), pY(DY = wY(this, rY, [YY]), "handleDrag", (function(YY) {
            DY.leaveTimer && (clearTimeout(DY.leaveTimer), DY.leaveTimer = null), DY.state.isTravellerMoving ? DY.handleTravellerMove(YY) : DY.state.isSlideMoving && DY.handleSlideDrag(YY)
          })), pY(DY, "handleTouchMove", (function(YY) {
            null != YY.changedTouches && YY.changedTouches.length > 0 && DY.handleDrag(YY.changedTouches[0])
          })), pY(DY, "handleDragEnd", (function() {
            DY.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var YY = DY.props,
                rY = YY.endIndex,
                FY = YY.onDragEnd,
                AY = YY.startIndex;
              null === FY || void 0 === FY || FY({
                endIndex: rY,
                startIndex: AY
              })
            })), DY.detachDragEndListener()
          })), pY(DY, "handleLeaveWrapper", (function() {
            (DY.state.isTravellerMoving || DY.state.isSlideMoving) && (DY.leaveTimer = window.setTimeout(DY.handleDragEnd, DY.props.leaveTimeOut))
          })), pY(DY, "handleEnterSlideOrTraveller", (function() {
            DY.setState({
              isTextActive: !0
            })
          })), pY(DY, "handleLeaveSlideOrTraveller", (function() {
            DY.setState({
              isTextActive: !1
            })
          })), pY(DY, "handleSlideDragStart", (function(YY) {
            var rY = GY(YY) ? YY.changedTouches[0] : YY;
            DY.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: rY.pageX
            }), DY.attachDragEndListener()
          })), DY.travellerDragStartHandlers = {
            startX: DY.handleTravellerDragStart.bind(DY, "startX"),
            endX: DY.handleTravellerDragStart.bind(DY, "endX")
          }, DY.state = {}, DY
        }
        return function(YY, rY) {
          if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
          YY.prototype = Object.create(rY && rY.prototype, {
            constructor: {
              value: YY,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(YY, "prototype", {
            writable: !1
          }), rY && qY(YY, rY)
        }(rY, YY), DY = rY, AY = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(YY) {
            var DY = YY.startX,
              FY = YY.endX,
              AY = this.state.scaleValues,
              IY = this.props,
              RY = IY.gap,
              OY = IY.data.length - 1,
              gY = Math.min(DY, FY),
              aY = Math.max(DY, FY),
              vY = rY.getIndexInRange(AY, gY),
              uY = rY.getIndexInRange(AY, aY);
            return {
              startIndex: vY - vY % RY,
              endIndex: uY === OY ? OY : uY - uY % RY
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(YY) {
            var rY = this.props,
              DY = rY.data,
              FY = rY.tickFormatter,
              AY = rY.dataKey,
              IY = (0, cY.bb)(DY[YY], AY, YY);
            return OY()(FY) ? FY(IY, YY) : IY
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
          value: function(YY) {
            var rY = this.state,
              DY = rY.slideMoveStartX,
              FY = rY.startX,
              AY = rY.endX,
              IY = this.props,
              RY = IY.x,
              OY = IY.width,
              gY = IY.travellerWidth,
              aY = IY.startIndex,
              vY = IY.endIndex,
              uY = IY.onChange,
              sY = YY.pageX - DY;
            sY > 0 ? sY = Math.min(sY, RY + OY - gY - AY, RY + OY - gY - FY) : sY < 0 && (sY = Math.max(sY, RY - FY, RY - AY));
            var iY = this.getIndex({
              startX: FY + sY,
              endX: AY + sY
            });
            iY.startIndex === aY && iY.endIndex === vY || !uY || uY(iY), this.setState({
              startX: FY + sY,
              endX: AY + sY,
              slideMoveStartX: YY.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(YY, rY) {
            var DY = GY(rY) ? rY.changedTouches[0] : rY;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: YY,
              brushMoveStartX: DY.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(YY) {
            var rY = this.state,
              DY = rY.brushMoveStartX,
              FY = rY.movingTravellerId,
              AY = rY.endX,
              IY = rY.startX,
              RY = this.state[FY],
              OY = this.props,
              gY = OY.x,
              aY = OY.width,
              vY = OY.travellerWidth,
              uY = OY.onChange,
              sY = OY.gap,
              iY = OY.data,
              yY = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              QY = YY.pageX - DY;
            QY > 0 ? QY = Math.min(QY, gY + aY - vY - RY) : QY < 0 && (QY = Math.max(QY, gY - RY)), yY[FY] = RY + QY;
            var oY = this.getIndex(yY),
              WY = oY.startIndex,
              EY = oY.endIndex;
            this.setState(pY(pY({}, FY, RY + QY), "brushMoveStartX", YY.pageX), (function() {
              uY && function() {
                var YY = iY.length - 1;
                return "startX" === FY && (AY > IY ? WY % sY === 0 : EY % sY === 0) || AY < IY && EY === YY || "endX" === FY && (AY > IY ? EY % sY === 0 : WY % sY === 0) || AY > IY && EY === YY
              }() && uY(oY)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(YY, rY) {
            var DY = this,
              FY = this.state,
              AY = FY.scaleValues,
              IY = FY.startX,
              RY = FY.endX,
              OY = this.state[rY],
              gY = AY.indexOf(OY);
            if (-1 !== gY) {
              var aY = gY + YY;
              if (!(-1 === aY || aY >= AY.length)) {
                var vY = AY[aY];
                "startX" === rY && vY >= RY || "endX" === rY && vY <= IY || this.setState(pY({}, rY, vY), (function() {
                  DY.props.onChange(DY.getIndex({
                    startX: DY.state.startX,
                    endX: DY.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var YY = this.props,
              rY = YY.x,
              DY = YY.y,
              AY = YY.width,
              IY = YY.height,
              RY = YY.fill,
              OY = YY.stroke;
            return FY.createElement("rect", {
              stroke: OY,
              fill: RY,
              x: rY,
              y: DY,
              width: AY,
              height: IY
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var YY = this.props,
              rY = YY.x,
              DY = YY.y,
              AY = YY.width,
              IY = YY.height,
              RY = YY.data,
              OY = YY.children,
              gY = YY.padding,
              aY = FY.Children.only(OY);
            return aY ? FY.cloneElement(aY, {
              x: rY,
              y: DY,
              width: AY,
              height: IY,
              margin: gY,
              compact: !0,
              data: RY
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(YY, DY) {
            var AY, IY, RY = this,
              OY = this.props,
              gY = OY.y,
              aY = OY.travellerWidth,
              vY = OY.height,
              uY = OY.traveller,
              sY = OY.ariaLabel,
              iY = OY.data,
              yY = OY.startIndex,
              QY = OY.endIndex,
              oY = Math.max(YY, this.props.x),
              WY = JY(JY({}, (0, eY.d)(this.props, !1)), {}, {
                x: oY,
                y: gY,
                width: aY,
                height: vY
              }),
              EY = sY || "Min value: ".concat(null === (AY = iY[yY]) || void 0 === AY ? void 0 : AY.name, ", Max value: ").concat(null === (IY = iY[QY]) || void 0 === IY ? void 0 : IY.name);
            return FY.createElement(mY.b, {
              tabIndex: 0,
              role: "slider",
              "aria-label": EY,
              "aria-valuenow": YY,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[DY],
              onTouchStart: this.travellerDragStartHandlers[DY],
              onKeyDown: function(YY) {
                ["ArrowLeft", "ArrowRight"].includes(YY.key) && (YY.preventDefault(), YY.stopPropagation(), RY.handleTravellerMoveKeyboard("ArrowRight" === YY.key ? 1 : -1, DY))
              },
              onFocus: function() {
                RY.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                RY.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, rY.renderTraveller(uY, WY))
          }
        }, {
          key: "renderSlide",
          value: function(YY, rY) {
            var DY = this.props,
              AY = DY.y,
              IY = DY.height,
              RY = DY.stroke,
              OY = DY.travellerWidth,
              gY = Math.min(YY, rY) + OY,
              aY = Math.max(Math.abs(rY - YY) - OY, 0);
            return FY.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: RY,
              fillOpacity: .2,
              x: gY,
              y: AY,
              width: aY,
              height: IY
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var YY = this.props,
              rY = YY.startIndex,
              DY = YY.endIndex,
              AY = YY.y,
              IY = YY.height,
              RY = YY.travellerWidth,
              OY = YY.stroke,
              gY = this.state,
              aY = gY.startX,
              vY = gY.endX,
              uY = {
                pointerEvents: "none",
                fill: OY
              };
            return FY.createElement(mY.b, {
              className: "recharts-brush-texts"
            }, FY.createElement(BY.b, hY({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(aY, vY) - 5,
              y: AY + IY / 2
            }, uY), this.getTextOfTick(rY)), FY.createElement(BY.b, hY({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(aY, vY) + RY + 5,
              y: AY + IY / 2
            }, uY), this.getTextOfTick(DY)))
          }
        }, {
          key: "render",
          value: function() {
            var YY = this.props,
              rY = YY.data,
              DY = YY.className,
              AY = YY.children,
              IY = YY.x,
              RY = YY.y,
              OY = YY.width,
              gY = YY.height,
              aY = YY.alwaysShowText,
              vY = this.state,
              uY = vY.startX,
              sY = vY.endX,
              iY = vY.isTextActive,
              yY = vY.isSlideMoving,
              QY = vY.isTravellerMoving,
              WY = vY.isTravellerFocused;
            if (!rY || !rY.length || !(0, KY.w)(IY) || !(0, KY.w)(RY) || !(0, KY.w)(OY) || !(0, KY.w)(gY) || OY <= 0 || gY <= 0) return null;
            var EY = (0, oY.d)("recharts-brush", DY),
              VY = 1 === FY.Children.count(AY),
              SY = function(YY, rY) {
                if (!YY) return null;
                var DY = YY.replace(/(\w)/, (function(YY) {
                    return YY.toUpperCase()
                  })),
                  FY = fY.reduce((function(YY, FY) {
                    return ZY(ZY({}, YY), {}, CY({}, FY + DY, rY))
                  }), {});
                return FY[YY] = rY, FY
              }("userSelect", "none");
            return FY.createElement(mY.b, {
              className: EY,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: SY
            }, this.renderBackground(), VY && this.renderPanorama(), this.renderSlide(uY, sY), this.renderTravellerLayer(uY, "startX"), this.renderTravellerLayer(sY, "endX"), (iY || yY || QY || WY || aY) && this.renderText())
          }
        }], IY = [{
          key: "renderDefaultTraveller",
          value: function(YY) {
            var rY = YY.x,
              DY = YY.y,
              AY = YY.width,
              IY = YY.height,
              RY = YY.stroke,
              OY = Math.floor(DY + IY / 2) - 1;
            return FY.createElement(FY.Fragment, null, FY.createElement("rect", {
              x: rY,
              y: DY,
              width: AY,
              height: IY,
              fill: RY,
              stroke: "none"
            }), FY.createElement("line", {
              x1: rY + 1,
              y1: OY,
              x2: rY + AY - 1,
              y2: OY,
              fill: "none",
              stroke: "#fff"
            }), FY.createElement("line", {
              x1: rY + 1,
              y1: OY + 2,
              x2: rY + AY - 1,
              y2: OY + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(YY, DY) {
            return FY.isValidElement(YY) ? FY.cloneElement(YY, DY) : OY()(YY) ? YY(DY) : rY.renderDefaultTraveller(DY)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(YY, rY) {
            var DY = YY.data,
              FY = YY.width,
              AY = YY.x,
              IY = YY.travellerWidth,
              RY = YY.updateId,
              OY = YY.startIndex,
              gY = YY.endIndex;
            if (DY !== rY.prevData || RY !== rY.prevUpdateId) return JY({
              prevData: DY,
              prevTravellerWidth: IY,
              prevUpdateId: RY,
              prevX: AY,
              prevWidth: FY
            }, DY && DY.length ? function(YY) {
              var rY = YY.data,
                DY = YY.startIndex,
                FY = YY.endIndex,
                AY = YY.x,
                IY = YY.width,
                RY = YY.travellerWidth;
              if (!rY || !rY.length) return {};
              var OY = rY.length,
                gY = (0, NY.c)().domain(aY()(0, OY)).range([AY, AY + IY - RY]),
                vY = gY.domain().map((function(YY) {
                  return gY(YY)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: gY(DY),
                endX: gY(FY),
                scale: gY,
                scaleValues: vY
              }
            }({
              data: DY,
              width: FY,
              x: AY,
              travellerWidth: IY,
              startIndex: OY,
              endIndex: gY
            }) : {
              scale: null,
              scaleValues: null
            });
            if (rY.scale && (FY !== rY.prevWidth || AY !== rY.prevX || IY !== rY.prevTravellerWidth)) {
              rY.scale.range([AY, AY + FY - IY]);
              var vY = rY.scale.domain().map((function(YY) {
                return rY.scale(YY)
              }));
              return {
                prevData: DY,
                prevTravellerWidth: IY,
                prevUpdateId: RY,
                prevX: AY,
                prevWidth: FY,
                startX: rY.scale(YY.startIndex),
                endX: rY.scale(YY.endIndex),
                scaleValues: vY
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(YY, rY) {
            for (var DY = 0, FY = YY.length - 1; FY - DY > 1;) {
              var AY = Math.floor((DY + FY) / 2);
              YY[AY] > rY ? FY = AY : DY = AY
            }
            return rY >= YY[FY] ? FY : DY
          }
        }], AY && MY(DY.prototype, AY), IY && MY(DY, IY), Object.defineProperty(DY, "prototype", {
          writable: !1
        }), DY;
        var DY, AY, IY
      }(FY.PureComponent);
    pY(xY, "displayName", "Brush"), pY(xY, "defaultProps", {
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
    var nY = DY(5704),
      PY = DY(5775),
      UY = DY(5792),
      LY = DY(5801),
      tY = DY(5805),
      Yr = DY(5016);

    function rr() {
      return rr = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, rr.apply(this, arguments)
    }

    function Dr(YY) {
      return Dr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, Dr(YY)
    }

    function Fr(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function Ar(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? Fr(Object(DY), !0).forEach((function(rY) {
          vr(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : Fr(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function Ir(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, ur(FY.key), FY)
      }
    }

    function Rr(YY, rY, DY) {
      return rY = gr(rY),
        function(YY, rY) {
          if (rY && ("object" === Dr(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, Or() ? Reflect.construct(rY, DY || [], gr(YY).constructor) : rY.apply(YY, DY))
    }

    function Or() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (Or = function() {
        return !!YY
      })()
    }

    function gr(YY) {
      return gr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, gr(YY)
    }

    function ar(YY, rY) {
      return ar = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, ar(YY, rY)
    }

    function vr(YY, rY, DY) {
      return (rY = ur(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function ur(YY) {
      var rY = function(YY, rY) {
        if ("object" != Dr(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != Dr(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == Dr(rY) ? rY : rY + ""
    }
    var sr = function(YY) {
      function rY() {
        return function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, rY), Rr(this, rY, arguments)
      }
      return function(YY, rY) {
        if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
        YY.prototype = Object.create(rY && rY.prototype, {
          constructor: {
            value: YY,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(YY, "prototype", {
          writable: !1
        }), rY && ar(YY, rY)
      }(rY, YY), DY = rY, (AY = [{
        key: "render",
        value: function() {
          var YY = this.props,
            DY = YY.x,
            AY = YY.y,
            IY = YY.r,
            RY = YY.alwaysShow,
            OY = YY.clipPathId,
            gY = (0, KY.v)(DY),
            aY = (0, KY.v)(AY);
          if ((0, Yr.d)(void 0 === RY, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !gY || !aY) return null;
          var vY = function(YY) {
            var rY = YY.x,
              DY = YY.y,
              FY = YY.xAxis,
              AY = YY.yAxis,
              IY = (0, tY.d)({
                x: FY.scale,
                y: AY.scale
              }),
              RY = IY.apply({
                x: rY,
                y: DY
              }, {
                bandAware: !0
              });
            return (0, LY.d)(YY, "discard") && !IY.isInRange(RY) ? null : RY
          }(this.props);
          if (!vY) return null;
          var uY = vY.x,
            sY = vY.y,
            iY = this.props,
            yY = iY.shape,
            QY = iY.className,
            WY = Ar(Ar({
              clipPath: (0, LY.d)(this.props, "hidden") ? "url(#".concat(OY, ")") : void 0
            }, (0, eY.d)(this.props, !0)), {}, {
              cx: uY,
              cy: sY
            });
          return FY.createElement(mY.b, {
            className: (0, oY.d)("recharts-reference-dot", QY)
          }, rY.renderDot(yY, WY), UY.c.renderCallByParent(this.props, {
            x: uY - IY,
            y: sY - IY,
            width: 2 * IY,
            height: 2 * IY
          }))
        }
      }]) && Ir(DY.prototype, AY), IY && Ir(DY, IY), Object.defineProperty(DY, "prototype", {
        writable: !1
      }), DY;
      var DY, AY, IY
    }(FY.Component);
    vr(sr, "displayName", "ReferenceDot"), vr(sr, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), vr(sr, "renderDot", (function(YY, rY) {
      return FY.isValidElement(YY) ? FY.cloneElement(YY, rY) : OY()(YY) ? YY(rY) : FY.createElement(lY.d, rr({}, rY, {
        cx: rY.cx,
        cy: rY.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var ir = DY(5890);

    function yr() {
      return yr = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, yr.apply(this, arguments)
    }

    function Qr(YY) {
      return Qr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, Qr(YY)
    }

    function or(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function Wr(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? or(Object(DY), !0).forEach((function(rY) {
          Tr(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : or(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function Er(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, er(FY.key), FY)
      }
    }

    function mr(YY, rY, DY) {
      return rY = Sr(rY),
        function(YY, rY) {
          if (rY && ("object" === Qr(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, Vr() ? Reflect.construct(rY, DY || [], Sr(YY).constructor) : rY.apply(YY, DY))
    }

    function Vr() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (Vr = function() {
        return !!YY
      })()
    }

    function Sr(YY) {
      return Sr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, Sr(YY)
    }

    function lr(YY, rY) {
      return lr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, lr(YY, rY)
    }

    function Tr(YY, rY, DY) {
      return (rY = er(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function er(YY) {
      var rY = function(YY, rY) {
        if ("object" != Qr(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != Qr(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == Qr(rY) ? rY : rY + ""
    }
    var Nr = function(YY) {
      function rY() {
        return function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, rY), mr(this, rY, arguments)
      }
      return function(YY, rY) {
        if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
        YY.prototype = Object.create(rY && rY.prototype, {
          constructor: {
            value: YY,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(YY, "prototype", {
          writable: !1
        }), rY && lr(YY, rY)
      }(rY, YY), DY = rY, (AY = [{
        key: "render",
        value: function() {
          var YY = this.props,
            DY = YY.x1,
            AY = YY.x2,
            IY = YY.y1,
            RY = YY.y2,
            OY = YY.className,
            gY = YY.alwaysShow,
            aY = YY.clipPathId;
          (0, Yr.d)(void 0 === gY, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var vY = (0, KY.v)(DY),
            uY = (0, KY.v)(AY),
            sY = (0, KY.v)(IY),
            iY = (0, KY.v)(RY),
            yY = this.props.shape;
          if (!vY && !uY && !sY && !iY && !yY) return null;
          var QY = function(YY, rY, DY, FY, AY) {
            var IY = AY.x1,
              RY = AY.x2,
              OY = AY.y1,
              gY = AY.y2,
              aY = AY.xAxis,
              vY = AY.yAxis;
            if (!aY || !vY) return null;
            var uY = (0, tY.d)({
                x: aY.scale,
                y: vY.scale
              }),
              sY = {
                x: YY ? uY.x.apply(IY, {
                  position: "start"
                }) : uY.x.rangeMin,
                y: DY ? uY.y.apply(OY, {
                  position: "start"
                }) : uY.y.rangeMin
              },
              iY = {
                x: rY ? uY.x.apply(RY, {
                  position: "end"
                }) : uY.x.rangeMax,
                y: FY ? uY.y.apply(gY, {
                  position: "end"
                }) : uY.y.rangeMax
              };
            return !(0, LY.d)(AY, "discard") || uY.isInRange(sY) && uY.isInRange(iY) ? (0, tY.k)(sY, iY) : null
          }(vY, uY, sY, iY, this.props);
          if (!QY && !yY) return null;
          var WY = (0, LY.d)(this.props, "hidden") ? "url(#".concat(aY, ")") : void 0;
          return FY.createElement(mY.b, {
            className: (0, oY.d)("recharts-reference-area", OY)
          }, rY.renderRect(yY, Wr(Wr({
            clipPath: WY
          }, (0, eY.d)(this.props, !0)), QY)), UY.c.renderCallByParent(this.props, QY))
        }
      }]) && Er(DY.prototype, AY), IY && Er(DY, IY), Object.defineProperty(DY, "prototype", {
        writable: !1
      }), DY;
      var DY, AY, IY
    }(FY.Component);

    function Br(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return cr(YY)
      }(YY) || function(YY) {
        if ("undefined" !== typeof Symbol && null != YY[Symbol.iterator] || null != YY["@@iterator"]) return Array.from(YY)
      }(YY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return cr(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return cr(YY, rY)
      }(YY) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cr(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }
    Tr(Nr, "displayName", "ReferenceArea"), Tr(Nr, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), Tr(Nr, "renderRect", (function(YY, rY) {
      return FY.isValidElement(YY) ? FY.cloneElement(YY, rY) : OY()(YY) ? YY(rY) : FY.createElement(TY.b, yr({}, rY, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var Kr = function(YY, rY, DY, FY, AY) {
        var IY = (0, eY.h)(YY, ir.c),
          RY = (0, eY.h)(YY, sr),
          OY = [].concat(Br(IY), Br(RY)),
          gY = (0, eY.h)(YY, Nr),
          aY = "".concat(FY, "Id"),
          vY = FY[0],
          uY = rY;
        if (OY.length && (uY = OY.reduce((function(YY, rY) {
            if (rY.props[aY] === DY && (0, LY.d)(rY.props, "extendDomain") && (0, KY.w)(rY.props[vY])) {
              var FY = rY.props[vY];
              return [Math.min(YY[0], FY), Math.max(YY[1], FY)]
            }
            return YY
          }), uY)), gY.length) {
          var sY = "".concat(vY, "1"),
            iY = "".concat(vY, "2");
          uY = gY.reduce((function(YY, rY) {
            if (rY.props[aY] === DY && (0, LY.d)(rY.props, "extendDomain") && (0, KY.w)(rY.props[sY]) && (0, KY.w)(rY.props[iY])) {
              var FY = rY.props[sY],
                AY = rY.props[iY];
              return [Math.min(YY[0], FY, AY), Math.max(YY[1], FY, AY)]
            }
            return YY
          }), uY)
        }
        return AY && AY.length && (uY = AY.reduce((function(YY, rY) {
          return (0, KY.w)(rY) ? [Math.min(YY[0], rY), Math.max(YY[1], rY)] : YY
        }), uY)), uY
      },
      Hr = DY(5799),
      zr = DY(5036),
      Zr = DY(32),
      Cr = new(DY.n(Zr)()),
      fr = "recharts.syncMouseEvents",
      jr = DY(5040);

    function hr(YY) {
      return hr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, hr(YY)
    }

    function dr(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, Mr(FY.key), FY)
      }
    }

    function Jr(YY, rY, DY) {
      return (rY = Mr(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function Mr(YY) {
      var rY = function(YY, rY) {
        if ("object" != hr(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != hr(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == hr(rY) ? rY : rY + ""
    }
    var wr = function() {
      return YY = function YY() {
        ! function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, YY), Jr(this, "activeIndex", 0), Jr(this, "coordinateList", []), Jr(this, "layout", "horizontal")
      }, (rY = [{
        key: "setDetails",
        value: function(YY) {
          var rY, DY = YY.coordinateList,
            FY = void 0 === DY ? null : DY,
            AY = YY.container,
            IY = void 0 === AY ? null : AY,
            RY = YY.layout,
            OY = void 0 === RY ? null : RY,
            gY = YY.offset,
            aY = void 0 === gY ? null : gY,
            vY = YY.mouseHandlerCallback,
            uY = void 0 === vY ? null : vY;
          this.coordinateList = null !== (rY = null !== FY && void 0 !== FY ? FY : this.coordinateList) && void 0 !== rY ? rY : [], this.container = null !== IY && void 0 !== IY ? IY : this.container, this.layout = null !== OY && void 0 !== OY ? OY : this.layout, this.offset = null !== aY && void 0 !== aY ? aY : this.offset, this.mouseHandlerCallback = null !== uY && void 0 !== uY ? uY : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(YY) {
          if (0 !== this.coordinateList.length) switch (YY.key) {
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
        value: function(YY) {
          this.activeIndex = YY
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var YY, rY;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var DY = this.container.getBoundingClientRect(),
              FY = DY.x,
              AY = DY.y,
              IY = DY.height,
              RY = this.coordinateList[this.activeIndex].coordinate,
              OY = (null === (YY = window) || void 0 === YY ? void 0 : YY.scrollX) || 0,
              gY = (null === (rY = window) || void 0 === rY ? void 0 : rY.scrollY) || 0,
              aY = FY + RY + OY,
              vY = AY + this.offset.top + IY / 2 + gY;
            this.mouseHandlerCallback({
              pageX: aY,
              pageY: vY
            })
          }
        }
      }]) && dr(YY.prototype, rY), DY && dr(YY, DY), Object.defineProperty(YY, "prototype", {
        writable: !1
      }), YY;
      var YY, rY, DY
    }();
    var br = DY(5851),
      Xr = DY(5939);

    function qr(YY) {
      return qr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, qr(YY)
    }
    var pr = ["x", "y", "top", "left", "width", "height", "className"];

    function kr() {
      return kr = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, kr.apply(this, arguments)
    }

    function Gr(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function xr(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != qr(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != qr(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == qr(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function nr(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }
    var Pr = function(YY, rY, DY, FY, AY, IY) {
        return "M".concat(YY, ",").concat(AY, "v").concat(FY, "M").concat(IY, ",").concat(rY, "h").concat(DY)
      },
      Ur = function(YY) {
        var rY = YY.x,
          DY = void 0 === rY ? 0 : rY,
          AY = YY.y,
          IY = void 0 === AY ? 0 : AY,
          RY = YY.top,
          OY = void 0 === RY ? 0 : RY,
          gY = YY.left,
          aY = void 0 === gY ? 0 : gY,
          vY = YY.width,
          uY = void 0 === vY ? 0 : vY,
          sY = YY.height,
          iY = void 0 === sY ? 0 : sY,
          yY = YY.className,
          QY = function(YY) {
            for (var rY = 1; rY < arguments.length; rY++) {
              var DY = null != arguments[rY] ? arguments[rY] : {};
              rY % 2 ? Gr(Object(DY), !0).forEach((function(rY) {
                xr(YY, rY, DY[rY])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : Gr(Object(DY)).forEach((function(rY) {
                Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
              }))
            }
            return YY
          }({
            x: DY,
            y: IY,
            top: OY,
            left: aY,
            width: uY,
            height: iY
          }, nr(YY, pr));
        return (0, KY.w)(DY) && (0, KY.w)(IY) && (0, KY.w)(uY) && (0, KY.w)(iY) && (0, KY.w)(OY) && (0, KY.w)(aY) ? FY.createElement("path", kr({}, (0, eY.d)(QY, !0), {
          className: (0, oY.d)("recharts-cross", yY),
          d: Pr(DY, IY, uY, iY, OY, aY)
        })) : null
      };

    function Lr(YY) {
      var rY = YY.cx,
        DY = YY.cy,
        FY = YY.radius,
        AY = YY.startAngle,
        IY = YY.endAngle;
      return {
        points: [(0, Hr.i)(rY, DY, FY, AY), (0, Hr.i)(rY, DY, FY, IY)],
        cx: rY,
        cy: DY,
        radius: FY,
        startAngle: AY,
        endAngle: IY
      }
    }
    var tr = DY(5881);

    function YD(YY, rY, DY) {
      var FY, AY, IY, RY;
      if ("horizontal" === YY) IY = FY = rY.x, AY = DY.top, RY = DY.top + DY.height;
      else if ("vertical" === YY) RY = AY = rY.y, FY = DY.left, IY = DY.left + DY.width;
      else if (null != rY.cx && null != rY.cy) {
        if ("centric" !== YY) return Lr(rY);
        var OY = rY.cx,
          gY = rY.cy,
          aY = rY.innerRadius,
          vY = rY.outerRadius,
          uY = rY.angle,
          sY = (0, Hr.i)(OY, gY, aY, uY),
          iY = (0, Hr.i)(OY, gY, vY, uY);
        FY = sY.x, AY = sY.y, IY = iY.x, RY = iY.y
      }
      return [{
        x: FY,
        y: AY
      }, {
        x: IY,
        y: RY
      }]
    }

    function rD(YY) {
      return rD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, rD(YY)
    }

    function DD(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function FD(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? DD(Object(DY), !0).forEach((function(rY) {
          AD(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : DD(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function AD(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != rD(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != rD(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == rD(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function ID(YY) {
      var rY, DY, AY, IY = YY.element,
        RY = YY.tooltipEventType,
        OY = YY.isActive,
        gY = YY.activeCoordinate,
        aY = YY.activePayload,
        vY = YY.offset,
        uY = YY.activeTooltipIndex,
        sY = YY.tooltipAxisBandSize,
        iY = YY.layout,
        yY = YY.chartName,
        QY = null !== (rY = IY.props.cursor) && void 0 !== rY ? rY : null === (DY = IY.type.defaultProps) || void 0 === DY ? void 0 : DY.cursor;
      if (!IY || !QY || !OY || !gY || "ScatterChart" !== yY && "axis" !== RY) return null;
      var WY = Xr.d;
      if ("ScatterChart" === yY) AY = gY, WY = Ur;
      else if ("BarChart" === yY) AY = function(YY, rY, DY, FY) {
        var AY = FY / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === YY ? rY.x - AY : DY.left + .5,
          y: "horizontal" === YY ? DY.top + .5 : rY.y - AY,
          width: "horizontal" === YY ? FY : DY.width - 1,
          height: "horizontal" === YY ? DY.height - 1 : FY
        }
      }(iY, gY, vY, sY), WY = TY.b;
      else if ("radial" === iY) {
        var EY = Lr(gY),
          mY = EY.cx,
          VY = EY.cy,
          SY = EY.radius;
        AY = {
          cx: mY,
          cy: VY,
          startAngle: EY.startAngle,
          endAngle: EY.endAngle,
          innerRadius: SY,
          outerRadius: SY
        }, WY = tr.d
      } else AY = {
        points: YD(iY, gY, vY)
      }, WY = Xr.d;
      var lY = FD(FD(FD(FD({
        stroke: "#ccc",
        pointerEvents: "none"
      }, vY), AY), (0, eY.d)(QY, !1)), {}, {
        payload: aY,
        payloadIndex: uY,
        className: (0, oY.d)("recharts-tooltip-cursor", QY.className)
      });
      return (0, FY.isValidElement)(QY) ? (0, FY.cloneElement)(QY, lY) : (0, FY.createElement)(WY, lY)
    }
    var RD = DY(5913),
      OD = ["item"],
      gD = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function aD(YY) {
      return aD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, aD(YY)
    }

    function vD() {
      return vD = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, vD.apply(this, arguments)
    }

    function uD(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        var DY = null == YY ? null : "undefined" != typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
        if (null != DY) {
          var FY, AY, IY, RY, OY = [],
            gY = !0,
            aY = !1;
          try {
            if (IY = (DY = DY.call(YY)).next, 0 === rY) {
              if (Object(DY) !== DY) return;
              gY = !1
            } else
              for (; !(gY = (FY = IY.call(DY)).done) && (OY.push(FY.value), OY.length !== rY); gY = !0);
          } catch (YY) {
            aY = !0, AY = YY
          } finally {
            try {
              if (!gY && null != DY.return && (RY = DY.return(), Object(RY) !== RY)) return
            } finally {
              if (aY) throw AY
            }
          }
          return OY
        }
      }(YY, rY) || mD(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sD(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function iD(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, eD(FY.key), FY)
      }
    }

    function yD(YY, rY, DY) {
      return rY = oD(rY),
        function(YY, rY) {
          if (rY && ("object" === aD(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, QD() ? Reflect.construct(rY, DY || [], oD(YY).constructor) : rY.apply(YY, DY))
    }

    function QD() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (QD = function() {
        return !!YY
      })()
    }

    function oD(YY) {
      return oD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, oD(YY)
    }

    function WD(YY, rY) {
      return WD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, WD(YY, rY)
    }

    function ED(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return VD(YY)
      }(YY) || function(YY) {
        if ("undefined" !== typeof Symbol && null != YY[Symbol.iterator] || null != YY["@@iterator"]) return Array.from(YY)
      }(YY) || mD(YY) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mD(YY, rY) {
      if (YY) {
        if ("string" === typeof YY) return VD(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        return "Object" === DY && YY.constructor && (DY = YY.constructor.name), "Map" === DY || "Set" === DY ? Array.from(YY) : "Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY) ? VD(YY, rY) : void 0
      }
    }

    function VD(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function SD(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function lD(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? SD(Object(DY), !0).forEach((function(rY) {
          TD(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : SD(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function TD(YY, rY, DY) {
      return (rY = eD(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function eD(YY) {
      var rY = function(YY, rY) {
        if ("object" != aD(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != aD(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == aD(rY) ? rY : rY + ""
    }
    var ND = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      BD = {
        width: "100%",
        height: "100%"
      },
      cD = {
        x: 0,
        y: 0
      };

    function KD(YY) {
      return YY
    }
    var HD = function(YY, rY) {
      var DY = rY.graphicalItems,
        FY = rY.dataStartIndex,
        AY = rY.dataEndIndex,
        IY = (null !== DY && void 0 !== DY ? DY : []).reduce((function(YY, rY) {
          var DY = rY.props.data;
          return DY && DY.length ? [].concat(ED(YY), ED(DY)) : YY
        }), []);
      return IY.length > 0 ? IY : YY && YY.length && (0, KY.w)(FY) && (0, KY.w)(AY) ? YY.slice(FY, AY + 1) : []
    };

    function zD(YY) {
      return "number" === YY ? [0, "auto"] : void 0
    }
    var ZD = function(YY, rY, DY, FY) {
        var AY = YY.graphicalItems,
          IY = YY.tooltipAxis,
          RY = HD(rY, YY);
        return DY < 0 || !AY || !AY.length || DY >= RY.length ? null : AY.reduce((function(AY, OY) {
          var gY, aY, vY = null !== (gY = OY.props.data) && void 0 !== gY ? gY : rY;
          if (vY && YY.dataStartIndex + YY.dataEndIndex !== 0 && YY.dataEndIndex - YY.dataStartIndex >= DY && (vY = vY.slice(YY.dataStartIndex, YY.dataEndIndex + 1)), IY.dataKey && !IY.allowDuplicatedCategory) {
            var uY = void 0 === vY ? RY : vY;
            aY = (0, KY.d)(uY, IY.dataKey, FY)
          } else aY = vY && vY[DY] || RY[DY];
          return aY ? [].concat(ED(AY), [(0, cY.$)(OY, aY)]) : AY
        }), [])
      },
      CD = function(YY, rY, DY, FY) {
        var AY = FY || {
            x: YY.chartX,
            y: YY.chartY
          },
          IY = function(YY, rY) {
            return "horizontal" === rY ? YY.x : "vertical" === rY ? YY.y : "centric" === rY ? YY.angle : YY.radius
          }(AY, DY),
          RY = YY.orderedTooltipTicks,
          OY = YY.tooltipAxis,
          gY = YY.tooltipTicks,
          aY = (0, cY.e)(IY, RY, gY, OY);
        if (aY >= 0 && gY) {
          var vY = gY[aY] && gY[aY].value,
            uY = ZD(YY, rY, aY, vY),
            sY = function(YY, rY, DY, FY) {
              var AY = rY.find((function(YY) {
                return YY && YY.index === DY
              }));
              if (AY) {
                if ("horizontal" === YY) return {
                  x: AY.coordinate,
                  y: FY.y
                };
                if ("vertical" === YY) return {
                  x: FY.x,
                  y: AY.coordinate
                };
                if ("centric" === YY) {
                  var IY = AY.coordinate,
                    RY = FY.radius;
                  return lD(lD(lD({}, FY), (0, Hr.i)(FY.cx, FY.cy, RY, IY)), {}, {
                    angle: IY,
                    radius: RY
                  })
                }
                var OY = AY.coordinate,
                  gY = FY.angle;
                return lD(lD(lD({}, FY), (0, Hr.i)(FY.cx, FY.cy, OY, gY)), {}, {
                  angle: gY,
                  radius: OY
                })
              }
              return cD
            }(DY, RY, aY, AY);
          return {
            activeTooltipIndex: aY,
            activeLabel: vY,
            activePayload: uY,
            activeCoordinate: sY
          }
        }
        return null
      },
      fD = function(YY, rY) {
        var DY = rY.axes,
          FY = rY.graphicalItems,
          AY = rY.axisType,
          RY = rY.axisIdKey,
          OY = rY.stackGroups,
          gY = rY.dataStartIndex,
          vY = rY.dataEndIndex,
          uY = YY.layout,
          sY = YY.children,
          iY = YY.stackOffset,
          yY = (0, cY.fb)(uY, AY);
        return DY.reduce((function(rY, DY) {
          var QY, oY = void 0 !== DY.type.defaultProps ? lD(lD({}, DY.type.defaultProps), DY.props) : DY.props,
            WY = oY.type,
            EY = oY.dataKey,
            mY = oY.allowDataOverflow,
            VY = oY.allowDuplicatedCategory,
            SY = oY.scale,
            lY = oY.ticks,
            TY = oY.includeHidden,
            eY = oY[RY];
          if (rY[eY]) return rY;
          var NY, BY, HY, zY = HD(YY.data, {
              graphicalItems: FY.filter((function(YY) {
                var rY;
                return (RY in YY.props ? YY.props[RY] : null === (rY = YY.type.defaultProps) || void 0 === rY ? void 0 : rY[RY]) === eY
              })),
              dataStartIndex: gY,
              dataEndIndex: vY
            }),
            ZY = zY.length;
          (function(YY, rY, DY) {
            if ("number" === DY && !0 === rY && Array.isArray(YY)) {
              var FY = null === YY || void 0 === YY ? void 0 : YY[0],
                AY = null === YY || void 0 === YY ? void 0 : YY[1];
              if (FY && AY && (0, KY.w)(FY) && (0, KY.w)(AY)) return !0
            }
            return !1
          })(oY.domain, mY, WY) && (NY = (0, cY.lb)(oY.domain, null, mY), !yY || "number" !== WY && "auto" === SY || (HY = (0, cY.J)(zY, EY, "category")));
          var CY = zD(WY);
          if (!NY || 0 === NY.length) {
            var fY, jY = null !== (fY = oY.domain) && void 0 !== fY ? fY : CY;
            if (EY) {
              if (NY = (0, cY.J)(zY, EY, WY), "category" === WY && yY) {
                var hY = (0, KY.q)(NY);
                VY && hY ? (BY = NY, NY = aY()(0, ZY)) : VY || (NY = (0, cY.gb)(jY, NY, DY).reduce((function(YY, rY) {
                  return YY.indexOf(rY) >= 0 ? YY : [].concat(ED(YY), [rY])
                }), []))
              } else if ("category" === WY) NY = VY ? NY.filter((function(YY) {
                return "" !== YY && !IY()(YY)
              })) : (0, cY.gb)(jY, NY, DY).reduce((function(YY, rY) {
                return YY.indexOf(rY) >= 0 || "" === rY || IY()(rY) ? YY : [].concat(ED(YY), [rY])
              }), []);
              else if ("number" === WY) {
                var dY = (0, cY.ib)(zY, FY.filter((function(YY) {
                  var rY, DY, FY = RY in YY.props ? YY.props[RY] : null === (rY = YY.type.defaultProps) || void 0 === rY ? void 0 : rY[RY],
                    AY = "hide" in YY.props ? YY.props.hide : null === (DY = YY.type.defaultProps) || void 0 === DY ? void 0 : DY.hide;
                  return FY === eY && (TY || !AY)
                })), EY, AY, uY);
                dY && (NY = dY)
              }!yY || "number" !== WY && "auto" === SY || (HY = (0, cY.J)(zY, EY, "category"))
            } else NY = yY ? aY()(0, ZY) : OY && OY[eY] && OY[eY].hasStack && "number" === WY ? "expand" === iY ? [0, 1] : (0, cY.P)(OY[eY].stackGroups, gY, vY) : (0, cY.L)(zY, FY.filter((function(YY) {
              var rY = RY in YY.props ? YY.props[RY] : YY.type.defaultProps[RY],
                DY = "hide" in YY.props ? YY.props.hide : YY.type.defaultProps.hide;
              return rY === eY && (TY || !DY)
            })), WY, uY, !0);
            if ("number" === WY) NY = Kr(sY, NY, eY, AY, lY), jY && (NY = (0, cY.lb)(jY, NY, mY));
            else if ("category" === WY && jY) {
              var JY = jY;
              NY.every((function(YY) {
                return JY.indexOf(YY) >= 0
              })) && (NY = JY)
            }
          }
          return lD(lD({}, rY), {}, TD({}, eY, lD(lD({}, oY), {}, {
            axisType: AY,
            domain: NY,
            categoricalDomain: HY,
            duplicateDomain: BY,
            originalDomain: null !== (QY = oY.domain) && void 0 !== QY ? QY : CY,
            isCategorical: yY,
            layout: uY
          })))
        }), {})
      },
      jD = function(YY, rY) {
        var DY = rY.axisType,
          FY = void 0 === DY ? "xAxis" : DY,
          AY = rY.AxisComp,
          IY = rY.graphicalItems,
          RY = rY.stackGroups,
          OY = rY.dataStartIndex,
          gY = rY.dataEndIndex,
          vY = YY.children,
          sY = "".concat(FY, "Id"),
          iY = (0, eY.h)(vY, AY),
          yY = {};
        return iY && iY.length ? yY = fD(YY, {
          axes: iY,
          graphicalItems: IY,
          axisType: FY,
          axisIdKey: sY,
          stackGroups: RY,
          dataStartIndex: OY,
          dataEndIndex: gY
        }) : IY && IY.length && (yY = function(YY, rY) {
          var DY = rY.graphicalItems,
            FY = rY.Axis,
            AY = rY.axisType,
            IY = rY.axisIdKey,
            RY = rY.stackGroups,
            OY = rY.dataStartIndex,
            gY = rY.dataEndIndex,
            vY = YY.layout,
            sY = YY.children,
            iY = HD(YY.data, {
              graphicalItems: DY,
              dataStartIndex: OY,
              dataEndIndex: gY
            }),
            yY = iY.length,
            QY = (0, cY.fb)(vY, AY),
            oY = -1;
          return DY.reduce((function(YY, rY) {
            var WY, EY = (void 0 !== rY.type.defaultProps ? lD(lD({}, rY.type.defaultProps), rY.props) : rY.props)[IY],
              mY = zD("number");
            return YY[EY] ? YY : (oY++, QY ? WY = aY()(0, yY) : RY && RY[EY] && RY[EY].hasStack ? (WY = (0, cY.P)(RY[EY].stackGroups, OY, gY), WY = Kr(sY, WY, EY, AY)) : (WY = (0, cY.lb)(mY, (0, cY.L)(iY, DY.filter((function(YY) {
              var rY, DY, FY = IY in YY.props ? YY.props[IY] : null === (rY = YY.type.defaultProps) || void 0 === rY ? void 0 : rY[IY],
                AY = "hide" in YY.props ? YY.props.hide : null === (DY = YY.type.defaultProps) || void 0 === DY ? void 0 : DY.hide;
              return FY === EY && !AY
            })), "number", vY), FY.defaultProps.allowDataOverflow), WY = Kr(sY, WY, EY, AY)), lD(lD({}, YY), {}, TD({}, EY, lD(lD({
              axisType: AY
            }, FY.defaultProps), {}, {
              hide: !0,
              orientation: uY()(ND, "".concat(AY, ".").concat(oY % 2), null),
              domain: WY,
              originalDomain: mY,
              isCategorical: QY,
              layout: vY
            }))))
          }), {})
        }(YY, {
          Axis: AY,
          graphicalItems: IY,
          axisType: FY,
          axisIdKey: sY,
          stackGroups: RY,
          dataStartIndex: OY,
          dataEndIndex: gY
        })), yY
      },
      hD = function(YY) {
        var rY = YY.children,
          DY = YY.defaultShowTooltip,
          FY = (0, eY.k)(rY, xY),
          AY = 0,
          IY = 0;
        return YY.data && 0 !== YY.data.length && (IY = YY.data.length - 1), FY && FY.props && (FY.props.startIndex >= 0 && (AY = FY.props.startIndex), FY.props.endIndex >= 0 && (IY = FY.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: AY,
          dataEndIndex: IY,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(DY)
        }
      },
      dD = function(YY) {
        return "horizontal" === YY ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === YY ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === YY ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      JD = function(YY, rY) {
        return "xAxis" === rY ? YY[rY].width : "yAxis" === rY ? YY[rY].height : void 0
      },
      MD = function(YY) {
        var rY = YY.chartName,
          DY = YY.GraphicalChild,
          AY = YY.defaultTooltipEventType,
          RY = void 0 === AY ? "axis" : AY,
          gY = YY.validateTooltipEventTypes,
          aY = void 0 === gY ? ["axis"] : gY,
          vY = YY.axisComponents,
          sY = YY.legendContent,
          yY = YY.formatAxisMap,
          NY = YY.defaultProps,
          BY = function(YY, rY) {
            var DY = rY.graphicalItems,
              FY = rY.stackGroups,
              AY = rY.offset,
              RY = rY.updateId,
              OY = rY.dataStartIndex,
              gY = rY.dataEndIndex,
              aY = YY.barSize,
              uY = YY.layout,
              sY = YY.barGap,
              iY = YY.barCategoryGap,
              yY = YY.maxBarSize,
              QY = dD(uY),
              oY = QY.numericAxisName,
              EY = QY.cateAxisName,
              mY = function(YY) {
                return !(!YY || !YY.length) && YY.some((function(YY) {
                  var rY = (0, eY.o)(YY && YY.type);
                  return rY && rY.indexOf("Bar") >= 0
                }))
              }(DY),
              VY = [];
            return DY.forEach((function(DY, QY) {
              var SY = HD(YY.data, {
                  graphicalItems: [DY],
                  dataStartIndex: OY,
                  dataEndIndex: gY
                }),
                lY = void 0 !== DY.type.defaultProps ? lD(lD({}, DY.type.defaultProps), DY.props) : DY.props,
                TY = lY.dataKey,
                NY = lY.maxBarSize,
                BY = lY["".concat(oY, "Id")],
                KY = lY["".concat(EY, "Id")],
                HY = vY.reduce((function(YY, DY) {
                  var FY = rY["".concat(DY.axisType, "Map")],
                    AY = lY["".concat(DY.axisType, "Id")];
                  FY && FY[AY] || "zAxis" === DY.axisType || (0, WY.c)(!1);
                  var IY = FY[AY];
                  return lD(lD({}, YY), {}, TD(TD({}, DY.axisType, IY), "".concat(DY.axisType, "Ticks"), (0, cY.Z)(IY)))
                }), {}),
                zY = HY[EY],
                ZY = HY["".concat(EY, "Ticks")],
                CY = FY && FY[BY] && FY[BY].hasStack && (0, cY.Y)(DY, FY[BY].stackGroups),
                fY = (0, eY.o)(DY.type).indexOf("Bar") >= 0,
                jY = (0, cY.q)(zY, ZY),
                hY = [],
                dY = mY && (0, cY.w)({
                  barSize: aY,
                  stackGroups: FY,
                  totalSize: JD(HY, EY)
                });
              if (fY) {
                var JY, MY, wY = IY()(NY) ? yY : NY,
                  bY = null !== (JY = null !== (MY = (0, cY.q)(zY, ZY, !0)) && void 0 !== MY ? MY : wY) && void 0 !== JY ? JY : 0;
                hY = (0, cY.t)({
                  barGap: sY,
                  barCategoryGap: iY,
                  bandSize: bY !== jY ? bY : jY,
                  sizeList: dY[KY],
                  maxBarSize: wY
                }), bY !== jY && (hY = hY.map((function(YY) {
                  return lD(lD({}, YY), {}, {
                    position: lD(lD({}, YY.position), {}, {
                      offset: YY.position.offset - bY / 2
                    })
                  })
                })))
              }
              var XY = DY && DY.type && DY.type.getComposedData;
              XY && VY.push({
                props: lD(lD({}, XY(lD(lD({}, HY), {}, {
                  displayedData: SY,
                  props: YY,
                  dataKey: TY,
                  item: DY,
                  bandSize: jY,
                  barPosition: hY,
                  offset: AY,
                  stackedData: CY,
                  layout: uY,
                  dataStartIndex: OY,
                  dataEndIndex: gY
                }))), {}, TD(TD(TD({
                  key: DY.key || "item-".concat(QY)
                }, oY, HY[oY]), EY, HY[EY]), "animationId", RY)),
                childIndex: (0, eY.z)(DY, YY.children),
                item: DY
              })
            })), VY
          },
          HY = function(YY, FY) {
            var AY = YY.props,
              IY = YY.dataStartIndex,
              RY = YY.dataEndIndex,
              OY = YY.updateId;
            if (!(0, eY.C)({
                props: AY
              })) return null;
            var gY = AY.children,
              aY = AY.layout,
              sY = AY.stackOffset,
              QY = AY.data,
              oY = AY.reverseStackOrder,
              WY = dD(aY),
              EY = WY.numericAxisName,
              mY = WY.cateAxisName,
              VY = (0, eY.h)(gY, DY),
              lY = (0, cY.W)(QY, VY, "".concat(EY, "Id"), "".concat(mY, "Id"), sY, oY),
              TY = vY.reduce((function(YY, rY) {
                var DY = "".concat(rY.axisType, "Map");
                return lD(lD({}, YY), {}, TD({}, DY, jD(AY, lD(lD({}, rY), {}, {
                  graphicalItems: VY,
                  stackGroups: rY.axisType === EY && lY,
                  dataStartIndex: IY,
                  dataEndIndex: RY
                }))))
              }), {}),
              NY = function(YY, rY) {
                var DY = YY.props,
                  FY = YY.graphicalItems,
                  AY = YY.xAxisMap,
                  IY = void 0 === AY ? {} : AY,
                  RY = YY.yAxisMap,
                  OY = void 0 === RY ? {} : RY,
                  gY = DY.width,
                  aY = DY.height,
                  vY = DY.children,
                  sY = DY.margin || {},
                  iY = (0, eY.k)(vY, xY),
                  yY = (0, eY.k)(vY, SY.c),
                  QY = Object.keys(OY).reduce((function(YY, rY) {
                    var DY = OY[rY],
                      FY = DY.orientation;
                    return DY.mirror || DY.hide ? YY : lD(lD({}, YY), {}, TD({}, FY, YY[FY] + DY.width))
                  }), {
                    left: sY.left || 0,
                    right: sY.right || 0
                  }),
                  oY = Object.keys(IY).reduce((function(YY, rY) {
                    var DY = IY[rY],
                      FY = DY.orientation;
                    return DY.mirror || DY.hide ? YY : lD(lD({}, YY), {}, TD({}, FY, uY()(YY, "".concat(FY)) + DY.height))
                  }), {
                    top: sY.top || 0,
                    bottom: sY.bottom || 0
                  }),
                  WY = lD(lD({}, oY), QY),
                  EY = WY.bottom;
                iY && (WY.bottom += iY.props.height || xY.defaultProps.height), yY && rY && (WY = (0, cY.b)(WY, FY, DY, rY));
                var mY = gY - WY.left - WY.right,
                  VY = aY - WY.top - WY.bottom;
                return lD(lD({
                  brushBottom: EY
                }, WY), {}, {
                  width: Math.max(mY, 0),
                  height: Math.max(VY, 0)
                })
              }(lD(lD({}, TY), {}, {
                props: AY,
                graphicalItems: VY
              }), null === FY || void 0 === FY ? void 0 : FY.legendBBox);
            Object.keys(TY).forEach((function(YY) {
              TY[YY] = yY(AY, TY[YY], NY, YY.replace("Map", ""), rY)
            }));
            var HY = function(YY) {
                var rY = (0, KY.g)(YY),
                  DY = (0, cY.Z)(rY, !1, !0);
                return {
                  tooltipTicks: DY,
                  orderedTooltipTicks: iY()(DY, (function(YY) {
                    return YY.coordinate
                  })),
                  tooltipAxis: rY,
                  tooltipAxisBandSize: (0, cY.q)(rY, DY)
                }
              }(TY["".concat(mY, "Map")]),
              zY = BY(AY, lD(lD({}, TY), {}, {
                dataStartIndex: IY,
                dataEndIndex: RY,
                updateId: OY,
                graphicalItems: VY,
                stackGroups: lY,
                offset: NY
              }));
            return lD(lD({
              formattedGraphicalItems: zY,
              graphicalItems: VY,
              offset: NY,
              stackGroups: lY
            }, HY), TY)
          },
          zY = function(YY) {
            function DY(YY) {
              var AY, RY, gY;
              return function(YY, rY) {
                if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
              }(this, DY), TD(gY = yD(this, DY, [YY]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), TD(gY, "accessibilityManager", new wr), TD(gY, "handleLegendBBoxUpdate", (function(YY) {
                if (YY) {
                  var rY = gY.state,
                    DY = rY.dataStartIndex,
                    FY = rY.dataEndIndex,
                    AY = rY.updateId;
                  gY.setState(lD({
                    legendBBox: YY
                  }, HY({
                    props: gY.props,
                    dataStartIndex: DY,
                    dataEndIndex: FY,
                    updateId: AY
                  }, lD(lD({}, gY.state), {}, {
                    legendBBox: YY
                  }))))
                }
              })), TD(gY, "handleReceiveSyncEvent", (function(YY, rY, DY) {
                if (gY.props.syncId === YY) {
                  if (DY === gY.eventEmitterSymbol && "function" !== typeof gY.props.syncMethod) return;
                  gY.applySyncEvent(rY)
                }
              })), TD(gY, "handleBrushChange", (function(YY) {
                var rY = YY.startIndex,
                  DY = YY.endIndex;
                if (rY !== gY.state.dataStartIndex || DY !== gY.state.dataEndIndex) {
                  var FY = gY.state.updateId;
                  gY.setState((function() {
                    return lD({
                      dataStartIndex: rY,
                      dataEndIndex: DY
                    }, HY({
                      props: gY.props,
                      dataStartIndex: rY,
                      dataEndIndex: DY,
                      updateId: FY
                    }, gY.state))
                  })), gY.triggerSyncEvent({
                    dataStartIndex: rY,
                    dataEndIndex: DY
                  })
                }
              })), TD(gY, "handleMouseEnter", (function(YY) {
                var rY = gY.getMouseInfo(YY);
                if (rY) {
                  var DY = lD(lD({}, rY), {}, {
                    isTooltipActive: !0
                  });
                  gY.setState(DY), gY.triggerSyncEvent(DY);
                  var FY = gY.props.onMouseEnter;
                  OY()(FY) && FY(DY, YY)
                }
              })), TD(gY, "triggeredAfterMouseMove", (function(YY) {
                var rY = gY.getMouseInfo(YY),
                  DY = rY ? lD(lD({}, rY), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                gY.setState(DY), gY.triggerSyncEvent(DY);
                var FY = gY.props.onMouseMove;
                OY()(FY) && FY(DY, YY)
              })), TD(gY, "handleItemMouseEnter", (function(YY) {
                gY.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: YY,
                    activePayload: YY.tooltipPayload,
                    activeCoordinate: YY.tooltipPosition || {
                      x: YY.cx,
                      y: YY.cy
                    }
                  }
                }))
              })), TD(gY, "handleItemMouseLeave", (function() {
                gY.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), TD(gY, "handleMouseMove", (function(YY) {
                YY.persist(), gY.throttleTriggeredAfterMouseMove(YY)
              })), TD(gY, "handleMouseLeave", (function(YY) {
                gY.throttleTriggeredAfterMouseMove.cancel();
                var rY = {
                  isTooltipActive: !1
                };
                gY.setState(rY), gY.triggerSyncEvent(rY);
                var DY = gY.props.onMouseLeave;
                OY()(DY) && DY(rY, YY)
              })), TD(gY, "handleOuterEvent", (function(YY) {
                var rY, DY = (0, eY.s)(YY),
                  FY = uY()(gY.props, "".concat(DY));
                DY && OY()(FY) && FY(null !== (rY = /.*touch.*/i.test(DY) ? gY.getMouseInfo(YY.changedTouches[0]) : gY.getMouseInfo(YY)) && void 0 !== rY ? rY : {}, YY)
              })), TD(gY, "handleClick", (function(YY) {
                var rY = gY.getMouseInfo(YY);
                if (rY) {
                  var DY = lD(lD({}, rY), {}, {
                    isTooltipActive: !0
                  });
                  gY.setState(DY), gY.triggerSyncEvent(DY);
                  var FY = gY.props.onClick;
                  OY()(FY) && FY(DY, YY)
                }
              })), TD(gY, "handleMouseDown", (function(YY) {
                var rY = gY.props.onMouseDown;
                OY()(rY) && rY(gY.getMouseInfo(YY), YY)
              })), TD(gY, "handleMouseUp", (function(YY) {
                var rY = gY.props.onMouseUp;
                OY()(rY) && rY(gY.getMouseInfo(YY), YY)
              })), TD(gY, "handleTouchMove", (function(YY) {
                null != YY.changedTouches && YY.changedTouches.length > 0 && gY.throttleTriggeredAfterMouseMove(YY.changedTouches[0])
              })), TD(gY, "handleTouchStart", (function(YY) {
                null != YY.changedTouches && YY.changedTouches.length > 0 && gY.handleMouseDown(YY.changedTouches[0])
              })), TD(gY, "handleTouchEnd", (function(YY) {
                null != YY.changedTouches && YY.changedTouches.length > 0 && gY.handleMouseUp(YY.changedTouches[0])
              })), TD(gY, "handleDoubleClick", (function(YY) {
                var rY = gY.props.onDoubleClick;
                OY()(rY) && rY(gY.getMouseInfo(YY), YY)
              })), TD(gY, "handleContextMenu", (function(YY) {
                var rY = gY.props.onContextMenu;
                OY()(rY) && rY(gY.getMouseInfo(YY), YY)
              })), TD(gY, "triggerSyncEvent", (function(YY) {
                void 0 !== gY.props.syncId && Cr.emit(fr, gY.props.syncId, YY, gY.eventEmitterSymbol)
              })), TD(gY, "applySyncEvent", (function(YY) {
                var rY = gY.props,
                  DY = rY.layout,
                  FY = rY.syncMethod,
                  AY = gY.state.updateId,
                  IY = YY.dataStartIndex,
                  RY = YY.dataEndIndex;
                if (void 0 !== YY.dataStartIndex || void 0 !== YY.dataEndIndex) gY.setState(lD({
                  dataStartIndex: IY,
                  dataEndIndex: RY
                }, HY({
                  props: gY.props,
                  dataStartIndex: IY,
                  dataEndIndex: RY,
                  updateId: AY
                }, gY.state)));
                else if (void 0 !== YY.activeTooltipIndex) {
                  var OY = YY.chartX,
                    aY = YY.chartY,
                    vY = YY.activeTooltipIndex,
                    uY = gY.state,
                    sY = uY.offset,
                    iY = uY.tooltipTicks;
                  if (!sY) return;
                  if ("function" === typeof FY) vY = FY(iY, YY);
                  else if ("value" === FY) {
                    vY = -1;
                    for (var yY = 0; yY < iY.length; yY++)
                      if (iY[yY].value === YY.activeLabel) {
                        vY = yY;
                        break
                      }
                  }
                  var QY = lD(lD({}, sY), {}, {
                      x: sY.left,
                      y: sY.top
                    }),
                    oY = Math.min(OY, QY.x + QY.width),
                    WY = Math.min(aY, QY.y + QY.height),
                    EY = iY[vY] && iY[vY].value,
                    mY = ZD(gY.state, gY.props.data, vY),
                    VY = iY[vY] ? {
                      x: "horizontal" === DY ? iY[vY].coordinate : oY,
                      y: "horizontal" === DY ? WY : iY[vY].coordinate
                    } : cD;
                  gY.setState(lD(lD({}, YY), {}, {
                    activeLabel: EY,
                    activeCoordinate: VY,
                    activePayload: mY,
                    activeTooltipIndex: vY
                  }))
                } else gY.setState(YY)
              })), TD(gY, "renderCursor", (function(YY) {
                var DY, AY = gY.state,
                  IY = AY.isTooltipActive,
                  RY = AY.activeCoordinate,
                  OY = AY.activePayload,
                  aY = AY.offset,
                  vY = AY.activeTooltipIndex,
                  uY = AY.tooltipAxisBandSize,
                  sY = gY.getTooltipEventType(),
                  iY = null !== (DY = YY.props.active) && void 0 !== DY ? DY : IY,
                  yY = gY.props.layout,
                  QY = YY.key || "_recharts-cursor";
                return FY.createElement(ID, {
                  key: QY,
                  activeCoordinate: RY,
                  activePayload: OY,
                  activeTooltipIndex: vY,
                  chartName: rY,
                  element: YY,
                  isActive: iY,
                  layout: yY,
                  offset: aY,
                  tooltipAxisBandSize: uY,
                  tooltipEventType: sY
                })
              })), TD(gY, "renderPolarAxis", (function(YY, rY, DY) {
                var AY = uY()(YY, "type.axisType"),
                  IY = uY()(gY.state, "".concat(AY, "Map")),
                  RY = YY.type.defaultProps,
                  OY = void 0 !== RY ? lD(lD({}, RY), YY.props) : YY.props,
                  aY = IY && IY[OY["".concat(AY, "Id")]];
                return (0, FY.cloneElement)(YY, lD(lD({}, aY), {}, {
                  className: (0, oY.d)(AY, aY.className),
                  key: YY.key || "".concat(rY, "-").concat(DY),
                  ticks: (0, cY.Z)(aY, !0)
                }))
              })), TD(gY, "renderPolarGrid", (function(YY) {
                var rY = YY.props,
                  DY = rY.radialLines,
                  AY = rY.polarAngles,
                  IY = rY.polarRadius,
                  RY = gY.state,
                  OY = RY.radiusAxisMap,
                  aY = RY.angleAxisMap,
                  vY = (0, KY.g)(OY),
                  uY = (0, KY.g)(aY),
                  sY = uY.cx,
                  iY = uY.cy,
                  yY = uY.innerRadius,
                  QY = uY.outerRadius;
                return (0, FY.cloneElement)(YY, {
                  polarAngles: Array.isArray(AY) ? AY : (0, cY.Z)(uY, !0).map((function(YY) {
                    return YY.coordinate
                  })),
                  polarRadius: Array.isArray(IY) ? IY : (0, cY.Z)(vY, !0).map((function(YY) {
                    return YY.coordinate
                  })),
                  cx: sY,
                  cy: iY,
                  innerRadius: yY,
                  outerRadius: QY,
                  key: YY.key || "polar-grid",
                  radialLines: DY
                })
              })), TD(gY, "renderLegend", (function() {
                var YY = gY.state.formattedGraphicalItems,
                  rY = gY.props,
                  DY = rY.children,
                  AY = rY.width,
                  IY = rY.height,
                  RY = gY.props.margin || {},
                  OY = AY - (RY.left || 0) - (RY.right || 0),
                  aY = (0, PY.c)({
                    children: DY,
                    formattedGraphicalItems: YY,
                    legendWidth: OY,
                    legendContent: sY
                  });
                if (!aY) return null;
                var vY = aY.item,
                  uY = sD(aY, OD);
                return (0, FY.cloneElement)(vY, lD(lD({}, uY), {}, {
                  chartWidth: AY,
                  chartHeight: IY,
                  margin: RY,
                  onBBoxUpdate: gY.handleLegendBBoxUpdate
                }))
              })), TD(gY, "renderTooltip", (function() {
                var YY, rY = gY.props,
                  DY = rY.children,
                  AY = rY.accessibilityLayer,
                  IY = (0, eY.k)(DY, VY.d);
                if (!IY) return null;
                var RY = gY.state,
                  OY = RY.isTooltipActive,
                  aY = RY.activeCoordinate,
                  vY = RY.activePayload,
                  uY = RY.activeLabel,
                  sY = RY.offset,
                  iY = null !== (YY = IY.props.active) && void 0 !== YY ? YY : OY;
                return (0, FY.cloneElement)(IY, {
                  viewBox: lD(lD({}, sY), {}, {
                    x: sY.left,
                    y: sY.top
                  }),
                  active: iY,
                  label: uY,
                  payload: iY ? vY : [],
                  coordinate: aY,
                  accessibilityLayer: AY
                })
              })), TD(gY, "renderBrush", (function(YY) {
                var rY = gY.props,
                  DY = rY.margin,
                  AY = rY.data,
                  IY = gY.state,
                  RY = IY.offset,
                  OY = IY.dataStartIndex,
                  aY = IY.dataEndIndex,
                  vY = IY.updateId;
                return (0, FY.cloneElement)(YY, {
                  key: YY.key || "_recharts-brush",
                  onChange: (0, cY.j)(gY.handleBrushChange, YY.props.onChange),
                  data: AY,
                  x: (0, KY.w)(YY.props.x) ? YY.props.x : RY.left,
                  y: (0, KY.w)(YY.props.y) ? YY.props.y : RY.top + RY.height + RY.brushBottom - (DY.bottom || 0),
                  width: (0, KY.w)(YY.props.width) ? YY.props.width : RY.width,
                  startIndex: OY,
                  endIndex: aY,
                  updateId: "brush-".concat(vY)
                })
              })), TD(gY, "renderReferenceElement", (function(YY, rY, DY) {
                if (!YY) return null;
                var AY = gY.clipPathId,
                  IY = gY.state,
                  RY = IY.xAxisMap,
                  OY = IY.yAxisMap,
                  aY = IY.offset,
                  vY = YY.type.defaultProps || {},
                  uY = YY.props,
                  sY = uY.xAxisId,
                  iY = void 0 === sY ? vY.xAxisId : sY,
                  yY = uY.yAxisId,
                  QY = void 0 === yY ? vY.yAxisId : yY;
                return (0, FY.cloneElement)(YY, {
                  key: YY.key || "".concat(rY, "-").concat(DY),
                  xAxis: RY[iY],
                  yAxis: OY[QY],
                  viewBox: {
                    x: aY.left,
                    y: aY.top,
                    width: aY.width,
                    height: aY.height
                  },
                  clipPathId: AY
                })
              })), TD(gY, "renderActivePoints", (function(YY) {
                var rY = YY.item,
                  FY = YY.activePoint,
                  AY = YY.basePoint,
                  IY = YY.childIndex,
                  RY = YY.isRange,
                  OY = [],
                  gY = rY.props.key,
                  aY = void 0 !== rY.item.type.defaultProps ? lD(lD({}, rY.item.type.defaultProps), rY.item.props) : rY.item.props,
                  vY = aY.activeDot,
                  uY = lD(lD({
                    index: IY,
                    dataKey: aY.dataKey,
                    cx: FY.x,
                    cy: FY.y,
                    r: 4,
                    fill: (0, cY.S)(rY.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: FY.payload,
                    value: FY.value
                  }, (0, eY.d)(vY, !1)), (0, jr.n)(vY));
                return OY.push(DY.renderActiveDot(vY, uY, "".concat(gY, "-activePoint-").concat(IY))), AY ? OY.push(DY.renderActiveDot(vY, lD(lD({}, uY), {}, {
                  cx: AY.x,
                  cy: AY.y
                }), "".concat(gY, "-basePoint-").concat(IY))) : RY && OY.push(null), OY
              })), TD(gY, "renderGraphicChild", (function(YY, rY, DY) {
                var AY = gY.filterFormatItem(YY, rY, DY);
                if (!AY) return null;
                var RY = gY.getTooltipEventType(),
                  OY = gY.state,
                  aY = OY.isTooltipActive,
                  vY = OY.tooltipAxis,
                  uY = OY.activeTooltipIndex,
                  sY = OY.activeLabel,
                  iY = gY.props.children,
                  yY = (0, eY.k)(iY, VY.d),
                  QY = AY.props,
                  oY = QY.points,
                  WY = QY.isRange,
                  EY = QY.baseLine,
                  mY = void 0 !== AY.item.type.defaultProps ? lD(lD({}, AY.item.type.defaultProps), AY.item.props) : AY.item.props,
                  SY = mY.activeDot,
                  lY = mY.hide,
                  TY = mY.activeBar,
                  NY = mY.activeShape,
                  BY = Boolean(!lY && aY && yY && (SY || TY || NY)),
                  HY = {};
                "axis" !== RY && yY && "click" === yY.props.trigger ? HY = {
                  onClick: (0, cY.j)(gY.handleItemMouseEnter, YY.props.onClick)
                } : "axis" !== RY && (HY = {
                  onMouseLeave: (0, cY.j)(gY.handleItemMouseLeave, YY.props.onMouseLeave),
                  onMouseEnter: (0, cY.j)(gY.handleItemMouseEnter, YY.props.onMouseEnter)
                });
                var zY = (0, FY.cloneElement)(YY, lD(lD({}, AY.props), HY));
                if (BY) {
                  if (!(uY >= 0)) {
                    var ZY, CY = (null !== (ZY = gY.getItemByXY(gY.state.activeCoordinate)) && void 0 !== ZY ? ZY : {
                        graphicalItem: zY
                      }).graphicalItem,
                      fY = CY.item,
                      jY = void 0 === fY ? YY : fY,
                      hY = CY.childIndex,
                      dY = lD(lD(lD({}, AY.props), HY), {}, {
                        activeIndex: hY
                      });
                    return [(0, FY.cloneElement)(jY, dY), null, null]
                  }
                  var JY, MY;
                  if (vY.dataKey && !vY.allowDuplicatedCategory) {
                    var wY = "function" === typeof vY.dataKey ? function(YY) {
                      return "function" === typeof vY.dataKey ? vY.dataKey(YY.payload) : null
                    } : "payload.".concat(vY.dataKey.toString());
                    JY = (0, KY.d)(oY, wY, sY), MY = WY && EY && (0, KY.d)(EY, wY, sY)
                  } else JY = null === oY || void 0 === oY ? void 0 : oY[uY], MY = WY && EY && EY[uY];
                  if (NY || TY) {
                    var bY = void 0 !== YY.props.activeIndex ? YY.props.activeIndex : uY;
                    return [(0, FY.cloneElement)(YY, lD(lD(lD({}, AY.props), HY), {}, {
                      activeIndex: bY
                    })), null, null]
                  }
                  if (!IY()(JY)) return [zY].concat(ED(gY.renderActivePoints({
                    item: AY,
                    activePoint: JY,
                    basePoint: MY,
                    childIndex: uY,
                    isRange: WY
                  })))
                }
                return WY ? [zY, null, null] : [zY, null]
              })), TD(gY, "renderCustomized", (function(YY, rY, DY) {
                return (0, FY.cloneElement)(YY, lD(lD({
                  key: "recharts-customized-".concat(DY)
                }, gY.props), gY.state))
              })), TD(gY, "renderMap", {
                CartesianGrid: {
                  handler: KD,
                  once: !0
                },
                ReferenceArea: {
                  handler: gY.renderReferenceElement
                },
                ReferenceLine: {
                  handler: KD
                },
                ReferenceDot: {
                  handler: gY.renderReferenceElement
                },
                XAxis: {
                  handler: KD
                },
                YAxis: {
                  handler: KD
                },
                Brush: {
                  handler: gY.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: gY.renderGraphicChild
                },
                Line: {
                  handler: gY.renderGraphicChild
                },
                Area: {
                  handler: gY.renderGraphicChild
                },
                Radar: {
                  handler: gY.renderGraphicChild
                },
                RadialBar: {
                  handler: gY.renderGraphicChild
                },
                Scatter: {
                  handler: gY.renderGraphicChild
                },
                Pie: {
                  handler: gY.renderGraphicChild
                },
                Funnel: {
                  handler: gY.renderGraphicChild
                },
                Tooltip: {
                  handler: gY.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: gY.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: gY.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: gY.renderPolarAxis
                },
                Customized: {
                  handler: gY.renderCustomized
                }
              }), gY.clipPathId = "".concat(null !== (AY = YY.id) && void 0 !== AY ? AY : (0, KY.F)("recharts"), "-clip"), gY.throttleTriggeredAfterMouseMove = QY()(gY.triggeredAfterMouseMove, null !== (RY = YY.throttleDelay) && void 0 !== RY ? RY : 1e3 / 60), gY.state = {}, gY
            }
            return function(YY, rY) {
              if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
              YY.prototype = Object.create(rY && rY.prototype, {
                constructor: {
                  value: YY,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(YY, "prototype", {
                writable: !1
              }), rY && WD(YY, rY)
            }(DY, YY), AY = DY, gY = [{
              key: "componentDidMount",
              value: function() {
                var YY, rY;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (YY = this.props.margin.left) && void 0 !== YY ? YY : 0,
                    top: null !== (rY = this.props.margin.top) && void 0 !== rY ? rY : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var YY = this.props,
                  rY = YY.children,
                  DY = YY.data,
                  FY = YY.height,
                  AY = YY.layout,
                  IY = (0, eY.k)(rY, VY.d);
                if (IY) {
                  var RY = IY.props.defaultIndex;
                  if (!("number" !== typeof RY || RY < 0 || RY > this.state.tooltipTicks.length - 1)) {
                    var OY = this.state.tooltipTicks[RY] && this.state.tooltipTicks[RY].value,
                      gY = ZD(this.state, DY, RY, OY),
                      aY = this.state.tooltipTicks[RY].coordinate,
                      vY = (this.state.offset.top + FY) / 2,
                      uY = "horizontal" === AY ? {
                        x: aY,
                        y: vY
                      } : {
                        y: aY,
                        x: vY
                      },
                      sY = this.state.formattedGraphicalItems.find((function(YY) {
                        return "Scatter" === YY.item.type.name
                      }));
                    sY && (uY = lD(lD({}, uY), sY.props.points[RY].tooltipPosition), gY = sY.props.points[RY].tooltipPayload);
                    var iY = {
                      activeTooltipIndex: RY,
                      isTooltipActive: !0,
                      activeLabel: OY,
                      activePayload: gY,
                      activeCoordinate: uY
                    };
                    this.setState(iY), this.renderCursor(IY), this.accessibilityManager.setIndex(RY)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(YY, rY) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== rY.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== YY.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== YY.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (DY = this.props.margin.left) && void 0 !== DY ? DY : 0,
                    top: null !== (FY = this.props.margin.top) && void 0 !== FY ? FY : 0
                  }
                }), null) : null;
                var DY, FY
              }
            }, {
              key: "componentDidUpdate",
              value: function(YY) {
                (0, eY.y)([(0, eY.k)(YY.children, VY.d)], [(0, eY.k)(this.props.children, VY.d)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var YY = (0, eY.k)(this.props.children, VY.d);
                if (YY && "boolean" === typeof YY.props.shared) {
                  var rY = YY.props.shared ? "axis" : "item";
                  return aY.indexOf(rY) >= 0 ? rY : RY
                }
                return RY
              }
            }, {
              key: "getMouseInfo",
              value: function(YY) {
                if (!this.container) return null;
                var rY = this.container,
                  DY = rY.getBoundingClientRect(),
                  FY = (0, nY.c)(DY),
                  AY = {
                    chartX: Math.round(YY.pageX - FY.left),
                    chartY: Math.round(YY.pageY - FY.top)
                  },
                  IY = DY.width / rY.offsetWidth || 1,
                  RY = this.inRange(AY.chartX, AY.chartY, IY);
                if (!RY) return null;
                var OY = this.state,
                  gY = OY.xAxisMap,
                  aY = OY.yAxisMap,
                  vY = this.getTooltipEventType(),
                  uY = CD(this.state, this.props.data, this.props.layout, RY);
                if ("axis" !== vY && gY && aY) {
                  var sY = (0, KY.g)(gY).scale,
                    iY = (0, KY.g)(aY).scale,
                    yY = sY && sY.invert ? sY.invert(AY.chartX) : null,
                    QY = iY && iY.invert ? iY.invert(AY.chartY) : null;
                  return lD(lD({}, AY), {}, {
                    xValue: yY,
                    yValue: QY
                  }, uY)
                }
                return uY ? lD(lD({}, AY), uY) : null
              }
            }, {
              key: "inRange",
              value: function(YY, rY) {
                var DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  FY = this.props.layout,
                  AY = YY / DY,
                  IY = rY / DY;
                if ("horizontal" === FY || "vertical" === FY) {
                  var RY = this.state.offset;
                  return AY >= RY.left && AY <= RY.left + RY.width && IY >= RY.top && IY <= RY.top + RY.height ? {
                    x: AY,
                    y: IY
                  } : null
                }
                var OY = this.state,
                  gY = OY.angleAxisMap,
                  aY = OY.radiusAxisMap;
                if (gY && aY) {
                  var vY = (0, KY.g)(gY);
                  return (0, Hr.g)({
                    x: AY,
                    y: IY
                  }, vY)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var YY = this.props.children,
                  rY = this.getTooltipEventType(),
                  DY = (0, eY.k)(YY, VY.d),
                  FY = {};
                return DY && "axis" === rY && (FY = "click" === DY.props.trigger ? {
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
                }), lD(lD({}, (0, jr.n)(this.props, this.handleOuterEvent)), FY)
              }
            }, {
              key: "addListener",
              value: function() {
                Cr.on(fr, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                Cr.removeListener(fr, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(YY, rY, DY) {
                for (var FY = this.state.formattedGraphicalItems, AY = 0, IY = FY.length; AY < IY; AY++) {
                  var RY = FY[AY];
                  if (RY.item === YY || RY.props.key === YY.key || rY === (0, eY.o)(RY.item.type) && DY === RY.childIndex) return RY
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var YY = this.clipPathId,
                  rY = this.state.offset,
                  DY = rY.left,
                  AY = rY.top,
                  IY = rY.height,
                  RY = rY.width;
                return FY.createElement("defs", null, FY.createElement("clipPath", {
                  id: YY
                }, FY.createElement("rect", {
                  x: DY,
                  y: AY,
                  height: IY,
                  width: RY
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var YY = this.state.xAxisMap;
                return YY ? Object.entries(YY).reduce((function(YY, rY) {
                  var DY = uD(rY, 2),
                    FY = DY[0],
                    AY = DY[1];
                  return lD(lD({}, YY), {}, TD({}, FY, AY.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var YY = this.state.yAxisMap;
                return YY ? Object.entries(YY).reduce((function(YY, rY) {
                  var DY = uD(rY, 2),
                    FY = DY[0],
                    AY = DY[1];
                  return lD(lD({}, YY), {}, TD({}, FY, AY.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(YY) {
                var rY;
                return null === (rY = this.state.xAxisMap) || void 0 === rY || null === (rY = rY[YY]) || void 0 === rY ? void 0 : rY.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(YY) {
                var rY;
                return null === (rY = this.state.yAxisMap) || void 0 === rY || null === (rY = rY[YY]) || void 0 === rY ? void 0 : rY.scale
              }
            }, {
              key: "getItemByXY",
              value: function(YY) {
                var rY = this.state,
                  DY = rY.formattedGraphicalItems,
                  FY = rY.activeItem;
                if (DY && DY.length)
                  for (var AY = 0, IY = DY.length; AY < IY; AY++) {
                    var RY = DY[AY],
                      OY = RY.props,
                      gY = RY.item,
                      aY = void 0 !== gY.type.defaultProps ? lD(lD({}, gY.type.defaultProps), gY.props) : gY.props,
                      vY = (0, eY.o)(gY.type);
                    if ("Bar" === vY) {
                      var uY = (OY.data || []).find((function(rY) {
                        return (0, TY.e)(YY, rY)
                      }));
                      if (uY) return {
                        graphicalItem: RY,
                        payload: uY
                      }
                    } else if ("RadialBar" === vY) {
                      var sY = (OY.data || []).find((function(rY) {
                        return (0, Hr.g)(YY, rY)
                      }));
                      if (sY) return {
                        graphicalItem: RY,
                        payload: sY
                      }
                    } else if ((0, br.i)(RY, FY) || (0, br.m)(RY, FY) || (0, br.p)(RY, FY)) {
                      var iY = (0, br.h)({
                          graphicalItem: RY,
                          activeTooltipItem: FY,
                          itemData: aY.data
                        }),
                        yY = void 0 === aY.activeIndex ? iY : aY.activeIndex;
                      return {
                        graphicalItem: lD(lD({}, RY), {}, {
                          childIndex: yY
                        }),
                        payload: (0, br.p)(RY, FY) ? aY.data[iY] : RY.props.data[iY]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var YY = this;
                if (!(0, eY.C)(this)) return null;
                var rY, DY, AY = this.props,
                  IY = AY.children,
                  RY = AY.className,
                  OY = AY.width,
                  gY = AY.height,
                  aY = AY.style,
                  vY = AY.compact,
                  uY = AY.title,
                  sY = AY.desc,
                  iY = sD(AY, gD),
                  yY = (0, eY.d)(iY, !1);
                if (vY) return FY.createElement(RD.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, FY.createElement(EY.e, vD({}, yY, {
                  width: OY,
                  height: gY,
                  title: uY,
                  desc: sY
                }), this.renderClipPath(), (0, eY.B)(IY, this.renderMap)));
                this.props.accessibilityLayer && (yY.tabIndex = null !== (rY = this.props.tabIndex) && void 0 !== rY ? rY : 0, yY.role = null !== (DY = this.props.role) && void 0 !== DY ? DY : "application", yY.onKeyDown = function(rY) {
                  YY.accessibilityManager.keyboardEvent(rY)
                }, yY.onFocus = function() {
                  YY.accessibilityManager.focus()
                });
                var QY = this.parseEventsOfWrapper();
                return FY.createElement(RD.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, FY.createElement("div", vD({
                  className: (0, oY.d)("recharts-wrapper", RY),
                  style: lD({
                    position: "relative",
                    cursor: "default",
                    width: OY,
                    height: gY
                  }, aY)
                }, QY, {
                  ref: function(rY) {
                    YY.container = rY
                  }
                }), FY.createElement(EY.e, vD({}, yY, {
                  width: OY,
                  height: gY,
                  title: uY,
                  desc: sY,
                  style: BD
                }), this.renderClipPath(), (0, eY.B)(IY, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], gY && iD(AY.prototype, gY), vY && iD(AY, vY), Object.defineProperty(AY, "prototype", {
              writable: !1
            }), AY;
            var AY, gY, vY
          }(FY.Component);
        TD(zY, "displayName", rY), TD(zY, "defaultProps", lD({
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
        }, NY)), TD(zY, "getDerivedStateFromProps", (function(YY, rY) {
          var DY = YY.dataKey,
            FY = YY.data,
            AY = YY.children,
            RY = YY.width,
            OY = YY.height,
            gY = YY.layout,
            aY = YY.stackOffset,
            vY = YY.margin,
            uY = rY.dataStartIndex,
            sY = rY.dataEndIndex;
          if (void 0 === rY.updateId) {
            var iY = hD(YY);
            return lD(lD(lD({}, iY), {}, {
              updateId: 0
            }, HY(lD(lD({
              props: YY
            }, iY), {}, {
              updateId: 0
            }), rY)), {}, {
              prevDataKey: DY,
              prevData: FY,
              prevWidth: RY,
              prevHeight: OY,
              prevLayout: gY,
              prevStackOffset: aY,
              prevMargin: vY,
              prevChildren: AY
            })
          }
          if (DY !== rY.prevDataKey || FY !== rY.prevData || RY !== rY.prevWidth || OY !== rY.prevHeight || gY !== rY.prevLayout || aY !== rY.prevStackOffset || !(0, zr.b)(vY, rY.prevMargin)) {
            var yY = hD(YY),
              QY = {
                chartX: rY.chartX,
                chartY: rY.chartY,
                isTooltipActive: rY.isTooltipActive
              },
              oY = lD(lD({}, CD(rY, FY, gY)), {}, {
                updateId: rY.updateId + 1
              }),
              WY = lD(lD(lD({}, yY), QY), oY);
            return lD(lD(lD({}, WY), HY(lD({
              props: YY
            }, WY), rY)), {}, {
              prevDataKey: DY,
              prevData: FY,
              prevWidth: RY,
              prevHeight: OY,
              prevLayout: gY,
              prevStackOffset: aY,
              prevMargin: vY,
              prevChildren: AY
            })
          }
          if (!(0, eY.y)(AY, rY.prevChildren)) {
            var EY, mY, VY, SY, lY = (0, eY.k)(AY, xY),
              TY = lY && null !== (EY = null === (mY = lY.props) || void 0 === mY ? void 0 : mY.startIndex) && void 0 !== EY ? EY : uY,
              NY = lY && null !== (VY = null === (SY = lY.props) || void 0 === SY ? void 0 : SY.endIndex) && void 0 !== VY ? VY : sY,
              BY = TY !== uY || NY !== sY,
              cY = !IY()(FY) && !BY ? rY.updateId : rY.updateId + 1;
            return lD(lD({
              updateId: cY
            }, HY(lD(lD({
              props: YY
            }, rY), {}, {
              updateId: cY,
              dataStartIndex: TY,
              dataEndIndex: NY
            }), rY)), {}, {
              prevChildren: AY,
              dataStartIndex: TY,
              dataEndIndex: NY
            })
          }
          return null
        })), TD(zY, "renderActiveDot", (function(YY, rY, DY) {
          var AY;
          return AY = (0, FY.isValidElement)(YY) ? (0, FY.cloneElement)(YY, rY) : OY()(YY) ? YY(rY) : FY.createElement(lY.d, rY), FY.createElement(mY.b, {
            className: "recharts-active-dot",
            key: DY
          }, AY)
        }));
        var ZY = (0, FY.forwardRef)((function(YY, rY) {
          return FY.createElement(zY, vD({}, YY, {
            ref: rY
          }))
        }));
        return ZY.displayName = zY.displayName, ZY
      }
  },
  5835: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY
    });
    var FY = function(YY) {
      return null
    };
    FY.displayName = "Cell"
  },
  5792: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => HY
    });
    var FY = DY(61),
      AY = DY(5007),
      IY = DY.n(AY),
      RY = DY(4840),
      OY = DY.n(RY),
      gY = DY(4651),
      aY = DY.n(gY),
      vY = DY(4638),
      uY = DY(5702),
      sY = DY(5023),
      iY = DY(4723),
      yY = DY(5799);

    function QY(YY) {
      return QY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, QY(YY)
    }
    var oY = ["offset"];

    function WY(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return EY(YY)
      }(YY) || function(YY) {
        if ("undefined" !== typeof Symbol && null != YY[Symbol.iterator] || null != YY["@@iterator"]) return Array.from(YY)
      }(YY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return EY(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return EY(YY, rY)
      }(YY) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function EY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function mY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function VY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function SY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? VY(Object(DY), !0).forEach((function(rY) {
          lY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : VY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function lY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != QY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != QY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == QY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function TY() {
      return TY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, TY.apply(this, arguments)
    }
    var eY = function(YY) {
        var rY = YY.value,
          DY = YY.formatter,
          FY = IY()(YY.children) ? rY : YY.children;
        return OY()(DY) ? DY(FY) : FY
      },
      NY = function(YY, rY, DY) {
        var AY, RY, OY = YY.position,
          gY = YY.viewBox,
          aY = YY.offset,
          uY = YY.className,
          sY = gY,
          QY = sY.cx,
          oY = sY.cy,
          WY = sY.innerRadius,
          EY = sY.outerRadius,
          mY = sY.startAngle,
          VY = sY.endAngle,
          SY = sY.clockWise,
          lY = (WY + EY) / 2,
          eY = function(YY, rY) {
            return (0, iY.C)(rY - YY) * Math.min(Math.abs(rY - YY), 360)
          }(mY, VY),
          NY = eY >= 0 ? 1 : -1;
        "insideStart" === OY ? (AY = mY + NY * aY, RY = SY) : "insideEnd" === OY ? (AY = VY - NY * aY, RY = !SY) : "end" === OY && (AY = VY + NY * aY, RY = SY), RY = eY <= 0 ? RY : !RY;
        var BY = (0, yY.i)(QY, oY, lY, AY),
          cY = (0, yY.i)(QY, oY, lY, AY + 359 * (RY ? 1 : -1)),
          KY = "M".concat(BY.x, ",").concat(BY.y, "\n    A").concat(lY, ",").concat(lY, ",0,1,").concat(RY ? 0 : 1, ",\n    ").concat(cY.x, ",").concat(cY.y),
          HY = IY()(YY.id) ? (0, iY.F)("recharts-radial-line-") : YY.id;
        return FY.createElement("text", TY({}, DY, {
          dominantBaseline: "central",
          className: (0, vY.d)("recharts-radial-bar-label", uY)
        }), FY.createElement("defs", null, FY.createElement("path", {
          id: HY,
          d: KY
        })), FY.createElement("textPath", {
          xlinkHref: "#".concat(HY)
        }, rY))
      },
      BY = function(YY) {
        var rY = YY.viewBox,
          DY = YY.offset,
          FY = YY.position,
          AY = rY,
          IY = AY.cx,
          RY = AY.cy,
          OY = AY.innerRadius,
          gY = AY.outerRadius,
          aY = (AY.startAngle + AY.endAngle) / 2;
        if ("outside" === FY) {
          var vY = (0, yY.i)(IY, RY, gY + DY, aY),
            uY = vY.x;
          return {
            x: uY,
            y: vY.y,
            textAnchor: uY >= IY ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === FY) return {
          x: IY,
          y: RY,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === FY) return {
          x: IY,
          y: RY,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === FY) return {
          x: IY,
          y: RY,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var sY = (OY + gY) / 2,
          iY = (0, yY.i)(IY, RY, sY, aY);
        return {
          x: iY.x,
          y: iY.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      cY = function(YY) {
        var rY = YY.viewBox,
          DY = YY.parentViewBox,
          FY = YY.offset,
          AY = YY.position,
          IY = rY,
          RY = IY.x,
          OY = IY.y,
          gY = IY.width,
          vY = IY.height,
          uY = vY >= 0 ? 1 : -1,
          sY = uY * FY,
          yY = uY > 0 ? "end" : "start",
          QY = uY > 0 ? "start" : "end",
          oY = gY >= 0 ? 1 : -1,
          WY = oY * FY,
          EY = oY > 0 ? "end" : "start",
          mY = oY > 0 ? "start" : "end";
        if ("top" === AY) return SY(SY({}, {
          x: RY + gY / 2,
          y: OY - uY * FY,
          textAnchor: "middle",
          verticalAnchor: yY
        }), DY ? {
          height: Math.max(OY - DY.y, 0),
          width: gY
        } : {});
        if ("bottom" === AY) return SY(SY({}, {
          x: RY + gY / 2,
          y: OY + vY + sY,
          textAnchor: "middle",
          verticalAnchor: QY
        }), DY ? {
          height: Math.max(DY.y + DY.height - (OY + vY), 0),
          width: gY
        } : {});
        if ("left" === AY) {
          var VY = {
            x: RY - WY,
            y: OY + vY / 2,
            textAnchor: EY,
            verticalAnchor: "middle"
          };
          return SY(SY({}, VY), DY ? {
            width: Math.max(VY.x - DY.x, 0),
            height: vY
          } : {})
        }
        if ("right" === AY) {
          var lY = {
            x: RY + gY + WY,
            y: OY + vY / 2,
            textAnchor: mY,
            verticalAnchor: "middle"
          };
          return SY(SY({}, lY), DY ? {
            width: Math.max(DY.x + DY.width - lY.x, 0),
            height: vY
          } : {})
        }
        var TY = DY ? {
          width: gY,
          height: vY
        } : {};
        return "insideLeft" === AY ? SY({
          x: RY + WY,
          y: OY + vY / 2,
          textAnchor: mY,
          verticalAnchor: "middle"
        }, TY) : "insideRight" === AY ? SY({
          x: RY + gY - WY,
          y: OY + vY / 2,
          textAnchor: EY,
          verticalAnchor: "middle"
        }, TY) : "insideTop" === AY ? SY({
          x: RY + gY / 2,
          y: OY + sY,
          textAnchor: "middle",
          verticalAnchor: QY
        }, TY) : "insideBottom" === AY ? SY({
          x: RY + gY / 2,
          y: OY + vY - sY,
          textAnchor: "middle",
          verticalAnchor: yY
        }, TY) : "insideTopLeft" === AY ? SY({
          x: RY + WY,
          y: OY + sY,
          textAnchor: mY,
          verticalAnchor: QY
        }, TY) : "insideTopRight" === AY ? SY({
          x: RY + gY - WY,
          y: OY + sY,
          textAnchor: EY,
          verticalAnchor: QY
        }, TY) : "insideBottomLeft" === AY ? SY({
          x: RY + WY,
          y: OY + vY - sY,
          textAnchor: mY,
          verticalAnchor: yY
        }, TY) : "insideBottomRight" === AY ? SY({
          x: RY + gY - WY,
          y: OY + vY - sY,
          textAnchor: EY,
          verticalAnchor: yY
        }, TY) : aY()(AY) && ((0, iY.w)(AY.x) || (0, iY.y)(AY.x)) && ((0, iY.w)(AY.y) || (0, iY.y)(AY.y)) ? SY({
          x: RY + (0, iY.n)(AY.x, gY),
          y: OY + (0, iY.n)(AY.y, vY),
          textAnchor: "end",
          verticalAnchor: "end"
        }, TY) : SY({
          x: RY + gY / 2,
          y: OY + vY / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, TY)
      },
      KY = function(YY) {
        return "cx" in YY && (0, iY.w)(YY.cx)
      };

    function HY(YY) {
      var rY, DY = YY.offset,
        AY = SY({
          offset: void 0 === DY ? 5 : DY
        }, mY(YY, oY)),
        RY = AY.viewBox,
        gY = AY.position,
        aY = AY.value,
        iY = AY.children,
        yY = AY.content,
        QY = AY.className,
        WY = void 0 === QY ? "" : QY,
        EY = AY.textBreakAll;
      if (!RY || IY()(aY) && IY()(iY) && !(0, FY.isValidElement)(yY) && !OY()(yY)) return null;
      if ((0, FY.isValidElement)(yY)) return (0, FY.cloneElement)(yY, AY);
      if (OY()(yY)) {
        if (rY = (0, FY.createElement)(yY, AY), (0, FY.isValidElement)(rY)) return rY
      } else rY = eY(AY);
      var VY = KY(RY),
        lY = (0, sY.d)(AY, !0);
      if (VY && ("insideStart" === gY || "insideEnd" === gY || "end" === gY)) return NY(AY, rY, lY);
      var HY = VY ? BY(AY) : cY(AY);
      return FY.createElement(uY.b, TY({
        className: (0, vY.d)("recharts-label", WY)
      }, lY, HY, {
        breakAll: EY
      }), rY)
    }
    HY.displayName = "Label";
    var zY = function(YY) {
      var rY = YY.cx,
        DY = YY.cy,
        FY = YY.angle,
        AY = YY.startAngle,
        IY = YY.endAngle,
        RY = YY.r,
        OY = YY.radius,
        gY = YY.innerRadius,
        aY = YY.outerRadius,
        vY = YY.x,
        uY = YY.y,
        sY = YY.top,
        yY = YY.left,
        QY = YY.width,
        oY = YY.height,
        WY = YY.clockWise,
        EY = YY.labelViewBox;
      if (EY) return EY;
      if ((0, iY.w)(QY) && (0, iY.w)(oY)) {
        if ((0, iY.w)(vY) && (0, iY.w)(uY)) return {
          x: vY,
          y: uY,
          width: QY,
          height: oY
        };
        if ((0, iY.w)(sY) && (0, iY.w)(yY)) return {
          x: sY,
          y: yY,
          width: QY,
          height: oY
        }
      }
      return (0, iY.w)(vY) && (0, iY.w)(uY) ? {
        x: vY,
        y: uY,
        width: 0,
        height: 0
      } : (0, iY.w)(rY) && (0, iY.w)(DY) ? {
        cx: rY,
        cy: DY,
        startAngle: AY || FY || 0,
        endAngle: IY || FY || 0,
        innerRadius: gY || 0,
        outerRadius: aY || OY || RY || 0,
        clockWise: WY
      } : YY.viewBox ? YY.viewBox : {}
    };
    HY.parseViewBox = zY, HY.renderCallByParent = function(YY, rY) {
      var DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!YY || !YY.children && DY && !YY.label) return null;
      var AY = YY.children,
        IY = zY(YY),
        RY = (0, sY.h)(AY, HY).map((function(YY, DY) {
          return (0, FY.cloneElement)(YY, {
            viewBox: rY || IY,
            key: "label-".concat(DY)
          })
        }));
      if (!DY) return RY;
      var gY = function(YY, rY) {
        return YY ? !0 === YY ? FY.createElement(HY, {
          key: "label-implicit",
          viewBox: rY
        }) : (0, iY.v)(YY) ? FY.createElement(HY, {
          key: "label-implicit",
          viewBox: rY,
          value: YY
        }) : (0, FY.isValidElement)(YY) ? YY.type === HY ? (0, FY.cloneElement)(YY, {
          key: "label-implicit",
          viewBox: rY
        }) : FY.createElement(HY, {
          key: "label-implicit",
          content: YY,
          viewBox: rY
        }) : OY()(YY) ? FY.createElement(HY, {
          key: "label-implicit",
          content: YY,
          viewBox: rY
        }) : aY()(YY) ? FY.createElement(HY, TY({
          viewBox: rY
        }, YY, {
          key: "label-implicit"
        })) : null : null
      }(YY.label, rY || IY);
      return [gY].concat(WY(RY))
    }
  },
  5838: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => cY
    });
    var FY = DY(61),
      AY = DY(5007),
      IY = DY.n(AY),
      RY = DY(4651),
      OY = DY.n(RY),
      gY = DY(4840),
      aY = DY.n(gY),
      vY = DY(5843),
      uY = DY.n(vY),
      sY = DY(5792),
      iY = DY(5545),
      yY = DY(5023),
      QY = DY(5709);

    function oY(YY) {
      return oY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, oY(YY)
    }
    var WY = ["valueAccessor"],
      EY = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function mY(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return VY(YY)
      }(YY) || function(YY) {
        if ("undefined" !== typeof Symbol && null != YY[Symbol.iterator] || null != YY["@@iterator"]) return Array.from(YY)
      }(YY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return VY(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return VY(YY, rY)
      }(YY) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function VY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function SY() {
      return SY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, SY.apply(this, arguments)
    }

    function lY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function TY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? lY(Object(DY), !0).forEach((function(rY) {
          eY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : lY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function eY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != oY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != oY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == oY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function NY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }
    var BY = function(YY) {
      return Array.isArray(YY.value) ? uY()(YY.value) : YY.value
    };

    function cY(YY) {
      var rY = YY.valueAccessor,
        DY = void 0 === rY ? BY : rY,
        AY = NY(YY, WY),
        RY = AY.data,
        OY = AY.dataKey,
        gY = AY.clockWise,
        aY = AY.id,
        vY = AY.textBreakAll,
        uY = NY(AY, EY);
      return RY && RY.length ? FY.createElement(iY.b, {
        className: "recharts-label-list"
      }, RY.map((function(YY, rY) {
        var AY = IY()(OY) ? DY(YY, rY) : (0, QY.bb)(YY && YY.payload, OY),
          RY = IY()(aY) ? {} : {
            id: "".concat(aY, "-").concat(rY)
          };
        return FY.createElement(sY.c, SY({}, (0, yY.d)(YY, !0), uY, RY, {
          parentViewBox: YY.parentViewBox,
          value: AY,
          textBreakAll: vY,
          viewBox: sY.c.parseViewBox(IY()(gY) ? YY : TY(TY({}, YY), {}, {
            clockWise: gY
          })),
          key: "label-".concat(rY),
          index: rY
        }))
      }))) : null
    }
    cY.displayName = "LabelList", cY.renderCallByParent = function(YY, rY) {
      var DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!YY || !YY.children && DY && !YY.label) return null;
      var AY = YY.children,
        IY = (0, yY.h)(AY, cY).map((function(YY, DY) {
          return (0, FY.cloneElement)(YY, {
            data: rY,
            key: "labelList-".concat(DY)
          })
        }));
      return DY ? [function(YY, rY) {
        return YY ? !0 === YY ? FY.createElement(cY, {
          key: "labelList-implicit",
          data: rY
        }) : FY.isValidElement(YY) || aY()(YY) ? FY.createElement(cY, {
          key: "labelList-implicit",
          data: rY,
          content: YY
        }) : OY()(YY) ? FY.createElement(cY, SY({
          data: rY
        }, YY, {
          key: "labelList-implicit"
        })) : null : null
      }(YY.label, rY)].concat(mY(IY)) : IY
    }
  },
  5621: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => MY
    });
    var FY = DY(61),
      AY = DY(4840),
      IY = DY.n(AY),
      RY = DY(4638),
      OY = DY(5016),
      gY = DY(5539),
      aY = DY(5626),
      vY = DY(5040);

    function uY(YY) {
      return uY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, uY(YY)
    }

    function sY() {
      return sY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, sY.apply(this, arguments)
    }

    function iY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function yY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, VY(FY.key), FY)
      }
    }

    function QY(YY, rY, DY) {
      return rY = WY(rY),
        function(YY, rY) {
          if (rY && ("object" === uY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, oY() ? Reflect.construct(rY, DY || [], WY(YY).constructor) : rY.apply(YY, DY))
    }

    function oY() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (oY = function() {
        return !!YY
      })()
    }

    function WY(YY) {
      return WY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, WY(YY)
    }

    function EY(YY, rY) {
      return EY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, EY(YY, rY)
    }

    function mY(YY, rY, DY) {
      return (rY = VY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function VY(YY) {
      var rY = function(YY, rY) {
        if ("object" != uY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != uY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == uY(rY) ? rY : rY + ""
    }
    var SY = 32,
      lY = function(YY) {
        function rY() {
          return function(YY, rY) {
            if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
          }(this, rY), QY(this, rY, arguments)
        }
        return function(YY, rY) {
          if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
          YY.prototype = Object.create(rY && rY.prototype, {
            constructor: {
              value: YY,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(YY, "prototype", {
            writable: !1
          }), rY && EY(YY, rY)
        }(rY, YY), DY = rY, AY = [{
          key: "renderIcon",
          value: function(YY) {
            var rY = this.props.inactiveColor,
              DY = 16,
              AY = SY / 6,
              IY = SY / 3,
              RY = YY.inactive ? rY : YY.color;
            if ("plainline" === YY.type) return FY.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: RY,
              strokeDasharray: YY.payload.strokeDasharray,
              x1: 0,
              y1: DY,
              x2: SY,
              y2: DY,
              className: "recharts-legend-icon"
            });
            if ("line" === YY.type) return FY.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: RY,
              d: "M0,".concat(DY, "h").concat(IY, "\n            A").concat(AY, ",").concat(AY, ",0,1,1,").concat(2 * IY, ",").concat(DY, "\n            H").concat(SY, "M").concat(2 * IY, ",").concat(DY, "\n            A").concat(AY, ",").concat(AY, ",0,1,1,").concat(IY, ",").concat(DY),
              className: "recharts-legend-icon"
            });
            if ("rect" === YY.type) return FY.createElement("path", {
              stroke: "none",
              fill: RY,
              d: "M0,".concat(4, "h").concat(SY, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (FY.isValidElement(YY.legendIcon)) {
              var OY = function(YY) {
                for (var rY = 1; rY < arguments.length; rY++) {
                  var DY = null != arguments[rY] ? arguments[rY] : {};
                  rY % 2 ? iY(Object(DY), !0).forEach((function(rY) {
                    mY(YY, rY, DY[rY])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : iY(Object(DY)).forEach((function(rY) {
                    Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
                  }))
                }
                return YY
              }({}, YY);
              return delete OY.legendIcon, FY.cloneElement(YY.legendIcon, OY)
            }
            return FY.createElement(aY.d, {
              fill: RY,
              cx: DY,
              cy: DY,
              size: SY,
              sizeType: "diameter",
              type: YY.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var YY = this,
              rY = this.props,
              DY = rY.payload,
              AY = rY.iconSize,
              aY = rY.layout,
              uY = rY.formatter,
              iY = rY.inactiveColor,
              yY = {
                x: 0,
                y: 0,
                width: SY,
                height: SY
              },
              QY = {
                display: "horizontal" === aY ? "inline-block" : "block",
                marginRight: 10
              },
              oY = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return DY.map((function(rY, DY) {
              var aY = rY.formatter || uY,
                WY = (0, RY.d)(mY(mY({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(DY), !0), "inactive", rY.inactive));
              if ("none" === rY.type) return null;
              var EY = IY()(rY.value) ? null : rY.value;
              (0, OY.d)(!IY()(rY.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var VY = rY.inactive ? iY : rY.color;
              return FY.createElement("li", sY({
                className: WY,
                style: QY,
                key: "legend-item-".concat(DY)
              }, (0, vY.r)(YY.props, rY, DY)), FY.createElement(gY.e, {
                width: AY,
                height: AY,
                viewBox: yY,
                style: oY
              }, YY.renderIcon(rY)), FY.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: VY
                }
              }, aY ? aY(EY, rY, DY) : EY))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var YY = this.props,
              rY = YY.payload,
              DY = YY.layout,
              AY = YY.align;
            if (!rY || !rY.length) return null;
            var IY = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === DY ? AY : "left"
            };
            return FY.createElement("ul", {
              className: "recharts-default-legend",
              style: IY
            }, this.renderItems())
          }
        }], AY && yY(DY.prototype, AY), uY && yY(DY, uY), Object.defineProperty(DY, "prototype", {
          writable: !1
        }), DY;
        var DY, AY, uY
      }(FY.PureComponent);
    mY(lY, "displayName", "Legend"), mY(lY, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var TY = DY(4723),
      eY = DY(5563);

    function NY(YY) {
      return NY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, NY(YY)
    }
    var BY = ["ref"];

    function cY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function KY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? cY(Object(DY), !0).forEach((function(rY) {
          jY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : cY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function HY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, hY(FY.key), FY)
      }
    }

    function zY(YY, rY, DY) {
      return rY = CY(rY),
        function(YY, rY) {
          if (rY && ("object" === NY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, ZY() ? Reflect.construct(rY, DY || [], CY(YY).constructor) : rY.apply(YY, DY))
    }

    function ZY() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (ZY = function() {
        return !!YY
      })()
    }

    function CY(YY) {
      return CY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, CY(YY)
    }

    function fY(YY, rY) {
      return fY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, fY(YY, rY)
    }

    function jY(YY, rY, DY) {
      return (rY = hY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function hY(YY) {
      var rY = function(YY, rY) {
        if ("object" != NY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != NY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == NY(rY) ? rY : rY + ""
    }

    function dY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function JY(YY) {
      return YY.value
    }
    var MY = function(YY) {
      function rY() {
        var YY;
        ! function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, rY);
        for (var DY = arguments.length, FY = new Array(DY), AY = 0; AY < DY; AY++) FY[AY] = arguments[AY];
        return jY(YY = zY(this, rY, [].concat(FY)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), YY
      }
      return function(YY, rY) {
        if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
        YY.prototype = Object.create(rY && rY.prototype, {
          constructor: {
            value: YY,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(YY, "prototype", {
          writable: !1
        }), rY && fY(YY, rY)
      }(rY, YY), DY = rY, IY = [{
        key: "getWithHeight",
        value: function(YY, rY) {
          var DY = KY(KY({}, this.defaultProps), YY.props).layout;
          return "vertical" === DY && (0, TY.w)(YY.props.height) ? {
            height: YY.props.height
          } : "horizontal" === DY ? {
            width: YY.props.width || rY
          } : null
        }
      }], (AY = [{
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
            var YY = this.wrapperNode.getBoundingClientRect();
            return YY.height = this.wrapperNode.offsetHeight, YY.width = this.wrapperNode.offsetWidth, YY
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var YY = this.props.onBBoxUpdate,
            rY = this.getBBox();
          rY ? (Math.abs(rY.width - this.lastBoundingBox.width) > 1 || Math.abs(rY.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = rY.width, this.lastBoundingBox.height = rY.height, YY && YY(rY)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, YY && YY(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? KY({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(YY) {
          var rY, DY, FY = this.props,
            AY = FY.layout,
            IY = FY.align,
            RY = FY.verticalAlign,
            OY = FY.margin,
            gY = FY.chartWidth,
            aY = FY.chartHeight;
          return YY && (void 0 !== YY.left && null !== YY.left || void 0 !== YY.right && null !== YY.right) || (rY = "center" === IY && "vertical" === AY ? {
            left: ((gY || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === IY ? {
            right: OY && OY.right || 0
          } : {
            left: OY && OY.left || 0
          }), YY && (void 0 !== YY.top && null !== YY.top || void 0 !== YY.bottom && null !== YY.bottom) || (DY = "middle" === RY ? {
            top: ((aY || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === RY ? {
            bottom: OY && OY.bottom || 0
          } : {
            top: OY && OY.top || 0
          }), KY(KY({}, rY), DY)
        }
      }, {
        key: "render",
        value: function() {
          var YY = this,
            rY = this.props,
            DY = rY.content,
            AY = rY.width,
            IY = rY.height,
            RY = rY.wrapperStyle,
            OY = rY.payloadUniqBy,
            gY = rY.payload,
            aY = KY(KY({
              position: "absolute",
              width: AY || "auto",
              height: IY || "auto"
            }, this.getDefaultPosition(RY)), RY);
          return FY.createElement("div", {
            className: "recharts-legend-wrapper",
            style: aY,
            ref: function(rY) {
              YY.wrapperNode = rY
            }
          }, function(YY, rY) {
            if (FY.isValidElement(YY)) return FY.cloneElement(YY, rY);
            if ("function" === typeof YY) return FY.createElement(YY, rY);
            rY.ref;
            var DY = dY(rY, BY);
            return FY.createElement(lY, DY)
          }(DY, KY(KY({}, this.props), {}, {
            payload: (0, eY.b)(gY, OY, JY)
          })))
        }
      }]) && HY(DY.prototype, AY), IY && HY(DY, IY), Object.defineProperty(DY, "prototype", {
        writable: !1
      }), DY;
      var DY, AY, IY
    }(FY.PureComponent);
    jY(MY, "displayName", "Legend"), jY(MY, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  4634: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => oY
    });
    var FY = DY(4638),
      AY = DY(61),
      IY = DY(4640),
      RY = DY.n(IY),
      OY = DY(4723),
      gY = DY(5016),
      aY = DY(5023);

    function vY(YY) {
      return vY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, vY(YY)
    }

    function uY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function sY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? uY(Object(DY), !0).forEach((function(rY) {
          iY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : uY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function iY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != vY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != vY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == vY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function yY(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        var DY = null == YY ? null : "undefined" != typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
        if (null != DY) {
          var FY, AY, IY, RY, OY = [],
            gY = !0,
            aY = !1;
          try {
            if (IY = (DY = DY.call(YY)).next, 0 === rY) {
              if (Object(DY) !== DY) return;
              gY = !1
            } else
              for (; !(gY = (FY = IY.call(DY)).done) && (OY.push(FY.value), OY.length !== rY); gY = !0);
          } catch (YY) {
            aY = !0, AY = YY
          } finally {
            try {
              if (!gY && null != DY.return && (RY = DY.return(), Object(RY) !== RY)) return
            } finally {
              if (aY) throw AY
            }
          }
          return OY
        }
      }(YY, rY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return QY(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return QY(YY, rY)
      }(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function QY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }
    var oY = (0, AY.forwardRef)((function(YY, rY) {
      var DY = YY.aspect,
        IY = YY.initialDimension,
        vY = void 0 === IY ? {
          width: -1,
          height: -1
        } : IY,
        uY = YY.width,
        iY = void 0 === uY ? "100%" : uY,
        QY = YY.height,
        oY = void 0 === QY ? "100%" : QY,
        WY = YY.minWidth,
        EY = void 0 === WY ? 0 : WY,
        mY = YY.minHeight,
        VY = YY.maxHeight,
        SY = YY.children,
        lY = YY.debounce,
        TY = void 0 === lY ? 0 : lY,
        eY = YY.id,
        NY = YY.className,
        BY = YY.QE,
        cY = YY.style,
        KY = void 0 === cY ? {} : cY,
        HY = (0, AY.useRef)(null),
        zY = (0, AY.useRef)();
      zY.current = BY, (0, AY.useImperativeHandle)(rY, (function() {
        return Object.defineProperty(HY.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), HY.current
          },
          configurable: !0
        })
      }));
      var ZY = yY((0, AY.useState)({
          containerWidth: vY.width,
          containerHeight: vY.height
        }), 2),
        CY = ZY[0],
        fY = ZY[1],
        jY = (0, AY.useCallback)((function(YY, rY) {
          fY((function(DY) {
            var FY = Math.round(YY),
              AY = Math.round(rY);
            return DY.containerWidth === FY && DY.containerHeight === AY ? DY : {
              containerWidth: FY,
              containerHeight: AY
            }
          }))
        }), []);
      (0, AY.useEffect)((function() {
        var YY = function(YY) {
          var rY, DY = YY[0].contentRect,
            FY = DY.width,
            AY = DY.height;
          jY(FY, AY), null === (rY = zY.current) || void 0 === rY || rY.call(zY, FY, AY)
        };
        TY > 0 && (YY = RY()(YY, TY, {
          trailing: !0,
          leading: !1
        }));
        var rY = new ResizeObserver(YY),
          DY = HY.current.getBoundingClientRect(),
          FY = DY.width,
          AY = DY.height;
        return jY(FY, AY), rY.observe(HY.current),
          function() {
            rY.disconnect()
          }
      }), [jY, TY]);
      var hY = (0, AY.useMemo)((function() {
        var YY = CY.containerWidth,
          rY = CY.containerHeight;
        if (YY < 0 || rY < 0) return null;
        (0, gY.d)((0, OY.y)(iY) || (0, OY.y)(oY), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", iY, oY), (0, gY.d)(!DY || DY > 0, "The aspect(%s) must be greater than zero.", DY);
        var FY = (0, OY.y)(iY) ? YY : iY,
          IY = (0, OY.y)(oY) ? rY : oY;
        DY && DY > 0 && (FY ? IY = FY / DY : IY && (FY = IY * DY), VY && IY > VY && (IY = VY)), (0, gY.d)(FY > 0 || IY > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", FY, IY, iY, oY, EY, mY, DY);
        var RY = !Array.isArray(SY) && (0, aY.o)(SY.type).endsWith("Chart");
        return AY.Children.map(SY, (function(YY) {
          return AY.isValidElement(YY) ? (0, AY.cloneElement)(YY, sY({
            width: FY,
            height: IY
          }, RY ? {
            style: sY({
              height: "100%",
              width: "100%",
              maxHeight: IY,
              maxWidth: FY
            }, YY.props.style)
          } : {})) : YY
        }))
      }), [DY, SY, oY, VY, mY, EY, CY, iY]);
      return AY.createElement("div", {
        id: eY ? "".concat(eY) : void 0,
        className: (0, FY.d)("recharts-responsive-container", NY),
        style: sY(sY({}, KY), {}, {
          width: iY,
          height: oY,
          minWidth: EY,
          minHeight: mY,
          maxHeight: VY
        }),
        ref: HY
      }, hY)
    }))
  },
  5702: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => wY
    });
    var FY = DY(61),
      AY = DY(5007),
      IY = DY.n(AY),
      RY = DY(4638),
      OY = DY(4723),
      gY = DY(5556),
      aY = DY(5023),
      vY = DY(5704);

    function uY(YY) {
      return uY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, uY(YY)
    }

    function sY(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        var DY = null == YY ? null : "undefined" != typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
        if (null != DY) {
          var FY, AY, IY, RY, OY = [],
            gY = !0,
            aY = !1;
          try {
            if (IY = (DY = DY.call(YY)).next, 0 === rY) {
              if (Object(DY) !== DY) return;
              gY = !1
            } else
              for (; !(gY = (FY = IY.call(DY)).done) && (OY.push(FY.value), OY.length !== rY); gY = !0);
          } catch (YY) {
            aY = !0, AY = YY
          } finally {
            try {
              if (!gY && null != DY.return && (RY = DY.return(), Object(RY) !== RY)) return
            } finally {
              if (aY) throw AY
            }
          }
          return OY
        }
      }(YY, rY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return iY(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return iY(YY, rY)
      }(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function yY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, QY(FY.key), FY)
      }
    }

    function QY(YY) {
      var rY = function(YY, rY) {
        if ("object" != uY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != uY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == uY(rY) ? rY : rY + ""
    }
    var oY = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      WY = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      EY = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      mY = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      VY = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      SY = Object.keys(VY),
      lY = "NaN";
    var TY = function() {
      function YY(rY, DY) {
        ! function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, YY), this.num = rY, this.unit = DY, this.num = rY, this.unit = DY, Number.isNaN(rY) && (this.unit = ""), "" === DY || EY.test(DY) || (this.num = NaN, this.unit = ""), SY.includes(DY) && (this.num = function(YY, rY) {
          return YY * VY[rY]
        }(rY, DY), this.unit = "px")
      }
      return rY = YY, FY = [{
        key: "parse",
        value: function(rY) {
          var DY, FY = sY(null !== (DY = mY.exec(rY)) && void 0 !== DY ? DY : [], 3),
            AY = FY[1],
            IY = FY[2];
          return new YY(parseFloat(AY), null !== IY && void 0 !== IY ? IY : "")
        }
      }], (DY = [{
        key: "add",
        value: function(rY) {
          return this.unit !== rY.unit ? new YY(NaN, "") : new YY(this.num + rY.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(rY) {
          return this.unit !== rY.unit ? new YY(NaN, "") : new YY(this.num - rY.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(rY) {
          return "" !== this.unit && "" !== rY.unit && this.unit !== rY.unit ? new YY(NaN, "") : new YY(this.num * rY.num, this.unit || rY.unit)
        }
      }, {
        key: "divide",
        value: function(rY) {
          return "" !== this.unit && "" !== rY.unit && this.unit !== rY.unit ? new YY(NaN, "") : new YY(this.num / rY.num, this.unit || rY.unit)
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
      }]) && yY(rY.prototype, DY), FY && yY(rY, FY), Object.defineProperty(rY, "prototype", {
        writable: !1
      }), rY;
      var rY, DY, FY
    }();

    function eY(YY) {
      if (YY.includes(lY)) return lY;
      for (var rY = YY; rY.includes("*") || rY.includes("/");) {
        var DY, FY = sY(null !== (DY = oY.exec(rY)) && void 0 !== DY ? DY : [], 4),
          AY = FY[1],
          IY = FY[2],
          RY = FY[3],
          OY = TY.parse(null !== AY && void 0 !== AY ? AY : ""),
          gY = TY.parse(null !== RY && void 0 !== RY ? RY : ""),
          aY = "*" === IY ? OY.multiply(gY) : OY.divide(gY);
        if (aY.isNaN()) return lY;
        rY = rY.replace(oY, aY.toString())
      }
      for (; rY.includes("+") || /.-\d+(?:\.\d+)?/.test(rY);) {
        var vY, uY = sY(null !== (vY = WY.exec(rY)) && void 0 !== vY ? vY : [], 4),
          iY = uY[1],
          yY = uY[2],
          QY = uY[3],
          EY = TY.parse(null !== iY && void 0 !== iY ? iY : ""),
          mY = TY.parse(null !== QY && void 0 !== QY ? QY : ""),
          VY = "+" === yY ? EY.add(mY) : EY.subtract(mY);
        if (VY.isNaN()) return lY;
        rY = rY.replace(WY, VY.toString())
      }
      return rY
    }
    var NY = /\(([^()]*)\)/;

    function BY(YY) {
      var rY = YY.replace(/\s+/g, "");
      return rY = function(YY) {
        for (var rY = YY; rY.includes("(");) {
          var DY = sY(NY.exec(rY), 2)[1];
          rY = rY.replace(NY, eY(DY))
        }
        return rY
      }(rY), rY = eY(rY)
    }

    function cY(YY) {
      var rY = function(YY) {
        try {
          return BY(YY)
        } catch (rY) {
          return lY
        }
      }(YY.slice(5, -1));
      return rY === lY ? "" : rY
    }
    var KY = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      HY = ["dx", "dy", "angle", "className", "breakAll"];

    function zY() {
      return zY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, zY.apply(this, arguments)
    }

    function ZY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function CY(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        var DY = null == YY ? null : "undefined" != typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
        if (null != DY) {
          var FY, AY, IY, RY, OY = [],
            gY = !0,
            aY = !1;
          try {
            if (IY = (DY = DY.call(YY)).next, 0 === rY) {
              if (Object(DY) !== DY) return;
              gY = !1
            } else
              for (; !(gY = (FY = IY.call(DY)).done) && (OY.push(FY.value), OY.length !== rY); gY = !0);
          } catch (YY) {
            aY = !0, AY = YY
          } finally {
            try {
              if (!gY && null != DY.return && (RY = DY.return(), Object(RY) !== RY)) return
            } finally {
              if (aY) throw AY
            }
          }
          return OY
        }
      }(YY, rY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return fY(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return fY(YY, rY)
      }(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }
    var jY = /[ \f\n\r\t\v\u2028\u2029]+/,
      hY = function(YY) {
        var rY = YY.children,
          DY = YY.breakAll,
          FY = YY.style;
        try {
          var AY = [];
          return IY()(rY) || (AY = DY ? rY.toString().split("") : rY.toString().split(jY)), {
            wordsWithComputedWidth: AY.map((function(YY) {
              return {
                word: YY,
                width: (0, vY.d)(YY, FY).width
              }
            })),
            spaceWidth: DY ? 0 : (0, vY.d)("\xa0", FY).width
          }
        } catch (RY) {
          return null
        }
      },
      dY = function(YY) {
        return [{
          words: IY()(YY) ? [] : YY.toString().split(jY)
        }]
      },
      JY = function(YY) {
        var rY = YY.width,
          DY = YY.scaleToFit,
          FY = YY.children,
          AY = YY.style,
          IY = YY.breakAll,
          RY = YY.maxLines;
        if ((rY || DY) && !gY.e.isSsr) {
          var aY = hY({
            breakAll: IY,
            children: FY,
            style: AY
          });
          return aY ? function(YY, rY, DY, FY, AY) {
            var IY = YY.maxLines,
              RY = YY.children,
              gY = YY.style,
              aY = YY.breakAll,
              vY = (0, OY.w)(IY),
              uY = RY,
              sY = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(YY, rY) {
                  var IY = rY.word,
                    RY = rY.width,
                    OY = YY[YY.length - 1];
                  if (OY && (null == FY || AY || OY.width + RY + DY < Number(FY))) OY.words.push(IY), OY.width += RY + DY;
                  else {
                    var gY = {
                      words: [IY],
                      width: RY
                    };
                    YY.push(gY)
                  }
                  return YY
                }), [])
              },
              iY = sY(rY);
            if (!vY) return iY;
            for (var yY, QY = function(YY) {
                var rY = uY.slice(0, YY),
                  DY = hY({
                    breakAll: aY,
                    style: gY,
                    children: rY + "\u2026"
                  }).wordsWithComputedWidth,
                  AY = sY(DY),
                  RY = AY.length > IY || function(YY) {
                    return YY.reduce((function(YY, rY) {
                      return YY.width > rY.width ? YY : rY
                    }))
                  }(AY).width > Number(FY);
                return [RY, AY]
              }, oY = 0, WY = uY.length - 1, EY = 0; oY <= WY && EY <= uY.length - 1;) {
              var mY = Math.floor((oY + WY) / 2),
                VY = CY(QY(mY - 1), 2),
                SY = VY[0],
                lY = VY[1],
                TY = CY(QY(mY), 1)[0];
              if (SY || TY || (oY = mY + 1), SY && TY && (WY = mY - 1), !SY && TY) {
                yY = lY;
                break
              }
              EY++
            }
            return yY || iY
          }({
            breakAll: IY,
            children: FY,
            maxLines: RY,
            style: AY
          }, aY.wordsWithComputedWidth, aY.spaceWidth, rY, DY) : dY(FY)
        }
        return dY(FY)
      },
      MY = "#808080",
      wY = function(YY) {
        var rY = YY.x,
          DY = void 0 === rY ? 0 : rY,
          AY = YY.y,
          IY = void 0 === AY ? 0 : AY,
          gY = YY.lineHeight,
          vY = void 0 === gY ? "1em" : gY,
          uY = YY.capHeight,
          sY = void 0 === uY ? "0.71em" : uY,
          iY = YY.scaleToFit,
          yY = void 0 !== iY && iY,
          QY = YY.textAnchor,
          oY = void 0 === QY ? "start" : QY,
          WY = YY.verticalAnchor,
          EY = void 0 === WY ? "end" : WY,
          mY = YY.fill,
          VY = void 0 === mY ? MY : mY,
          SY = ZY(YY, KY),
          lY = (0, FY.useMemo)((function() {
            return JY({
              breakAll: SY.breakAll,
              children: SY.children,
              maxLines: SY.maxLines,
              scaleToFit: yY,
              style: SY.style,
              width: SY.width
            })
          }), [SY.breakAll, SY.children, SY.maxLines, yY, SY.style, SY.width]),
          TY = SY.dx,
          eY = SY.dy,
          NY = SY.angle,
          BY = SY.className,
          CY = SY.breakAll,
          fY = ZY(SY, HY);
        if (!(0, OY.v)(DY) || !(0, OY.v)(IY)) return null;
        var jY, hY = DY + ((0, OY.w)(TY) ? TY : 0),
          dY = IY + ((0, OY.w)(eY) ? eY : 0);
        switch (EY) {
          case "start":
            jY = cY("calc(".concat(sY, ")"));
            break;
          case "middle":
            jY = cY("calc(".concat((lY.length - 1) / 2, " * -").concat(vY, " + (").concat(sY, " / 2))"));
            break;
          default:
            jY = cY("calc(".concat(lY.length - 1, " * -").concat(vY, ")"))
        }
        var wY = [];
        if (yY) {
          var bY = lY[0].width,
            XY = SY.width;
          wY.push("scale(".concat(((0, OY.w)(XY) ? XY / bY : 1) / bY, ")"))
        }
        return NY && wY.push("rotate(".concat(NY, ", ").concat(hY, ", ").concat(dY, ")")), wY.length && (fY.transform = wY.join(" ")), FY.createElement("text", zY({}, (0, aY.d)(fY, !0), {
          x: hY,
          y: dY,
          className: (0, RY.d)("recharts-text", BY),
          textAnchor: oY,
          fill: VY.includes("url") ? MY : VY
        }), lY.map((function(YY, rY) {
          var DY = YY.words.join(CY ? "" : " ");
          return FY.createElement("tspan", {
            x: hY,
            dy: 0 === rY ? jY : vY,
            key: "".concat(DY, "-").concat(rY)
          }, DY)
        })))
      }
  },
  5551: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => UY
    });
    var FY = DY(61),
      AY = DY(5105),
      IY = DY.n(AY),
      RY = DY(5007),
      OY = DY.n(RY),
      gY = DY(4638),
      aY = DY(4723);

    function vY(YY) {
      return vY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, vY(YY)
    }

    function uY() {
      return uY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, uY.apply(this, arguments)
    }

    function sY(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        var DY = null == YY ? null : "undefined" != typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
        if (null != DY) {
          var FY, AY, IY, RY, OY = [],
            gY = !0,
            aY = !1;
          try {
            if (IY = (DY = DY.call(YY)).next, 0 === rY) {
              if (Object(DY) !== DY) return;
              gY = !1
            } else
              for (; !(gY = (FY = IY.call(DY)).done) && (OY.push(FY.value), OY.length !== rY); gY = !0);
          } catch (YY) {
            aY = !0, AY = YY
          } finally {
            try {
              if (!gY && null != DY.return && (RY = DY.return(), Object(RY) !== RY)) return
            } finally {
              if (aY) throw AY
            }
          }
          return OY
        }
      }(YY, rY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return iY(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return iY(YY, rY)
      }(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function yY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function QY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? yY(Object(DY), !0).forEach((function(rY) {
          oY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : yY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function oY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != vY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != vY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == vY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function WY(YY) {
      return Array.isArray(YY) && (0, aY.v)(YY[0]) && (0, aY.v)(YY[1]) ? YY.join(" ~ ") : YY
    }
    var EY = function(YY) {
      var rY = YY.separator,
        DY = void 0 === rY ? " : " : rY,
        AY = YY.contentStyle,
        RY = void 0 === AY ? {} : AY,
        vY = YY.itemStyle,
        iY = void 0 === vY ? {} : vY,
        yY = YY.labelStyle,
        oY = void 0 === yY ? {} : yY,
        EY = YY.payload,
        mY = YY.formatter,
        VY = YY.itemSorter,
        SY = YY.wrapperClassName,
        lY = YY.labelClassName,
        TY = YY.label,
        eY = YY.labelFormatter,
        NY = YY.accessibilityLayer,
        BY = void 0 !== NY && NY,
        cY = QY({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, RY),
        KY = QY({
          margin: 0
        }, oY),
        HY = !OY()(TY),
        zY = HY ? TY : "",
        ZY = (0, gY.d)("recharts-default-tooltip", SY),
        CY = (0, gY.d)("recharts-tooltip-label", lY);
      HY && eY && void 0 !== EY && null !== EY && (zY = eY(TY, EY));
      var fY = BY ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return FY.createElement("div", uY({
        className: ZY,
        style: cY
      }, fY), FY.createElement("p", {
        className: CY,
        style: KY
      }, FY.isValidElement(zY) ? zY : "".concat(zY)), function() {
        if (EY && EY.length) {
          var YY = (VY ? IY()(EY, VY) : EY).map((function(YY, rY) {
            if ("none" === YY.type) return null;
            var AY = QY({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: YY.color || "#000"
              }, iY),
              IY = YY.formatter || mY || WY,
              RY = YY.value,
              OY = YY.name,
              gY = RY,
              vY = OY;
            if (IY && null != gY && null != vY) {
              var uY = IY(RY, OY, YY, rY, EY);
              if (Array.isArray(uY)) {
                var yY = sY(uY, 2);
                gY = yY[0], vY = yY[1]
              } else gY = uY
            }
            return FY.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(rY),
              style: AY
            }, (0, aY.v)(vY) ? FY.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, vY) : null, (0, aY.v)(vY) ? FY.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, DY) : null, FY.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, gY), FY.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, YY.unit || ""))
          }));
          return FY.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, YY)
        }
        return null
      }())
    };

    function mY(YY) {
      return mY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, mY(YY)
    }

    function VY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != mY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != mY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == mY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }
    var SY = "recharts-tooltip-wrapper",
      lY = {
        visibility: "hidden"
      };

    function TY(YY) {
      var rY = YY.coordinate,
        DY = YY.translateX,
        FY = YY.translateY;
      return (0, gY.d)(SY, VY(VY(VY(VY({}, "".concat(SY, "-right"), (0, aY.w)(DY) && rY && (0, aY.w)(rY.x) && DY >= rY.x), "".concat(SY, "-left"), (0, aY.w)(DY) && rY && (0, aY.w)(rY.x) && DY < rY.x), "".concat(SY, "-bottom"), (0, aY.w)(FY) && rY && (0, aY.w)(rY.y) && FY >= rY.y), "".concat(SY, "-top"), (0, aY.w)(FY) && rY && (0, aY.w)(rY.y) && FY < rY.y))
    }

    function eY(YY) {
      var rY = YY.allowEscapeViewBox,
        DY = YY.coordinate,
        FY = YY.key,
        AY = YY.offsetTopLeft,
        IY = YY.position,
        RY = YY.reverseDirection,
        OY = YY.tooltipDimension,
        gY = YY.viewBox,
        vY = YY.viewBoxDimension;
      if (IY && (0, aY.w)(IY[FY])) return IY[FY];
      var uY = DY[FY] - OY - AY,
        sY = DY[FY] + AY;
      return rY[FY] ? RY[FY] ? uY : sY : RY[FY] ? uY < gY[FY] ? Math.max(sY, gY[FY]) : Math.max(uY, gY[FY]) : sY + OY > gY[FY] + vY ? Math.max(uY, gY[FY]) : Math.max(sY, gY[FY])
    }

    function NY(YY) {
      return NY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, NY(YY)
    }

    function BY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function cY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? BY(Object(DY), !0).forEach((function(rY) {
          fY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : BY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function KY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, jY(FY.key), FY)
      }
    }

    function HY(YY, rY, DY) {
      return rY = ZY(rY),
        function(YY, rY) {
          if (rY && ("object" === NY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, zY() ? Reflect.construct(rY, DY || [], ZY(YY).constructor) : rY.apply(YY, DY))
    }

    function zY() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (zY = function() {
        return !!YY
      })()
    }

    function ZY(YY) {
      return ZY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, ZY(YY)
    }

    function CY(YY, rY) {
      return CY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, CY(YY, rY)
    }

    function fY(YY, rY, DY) {
      return (rY = jY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function jY(YY) {
      var rY = function(YY, rY) {
        if ("object" != NY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != NY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == NY(rY) ? rY : rY + ""
    }
    var hY = function(YY) {
        function rY() {
          var YY;
          ! function(YY, rY) {
            if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
          }(this, rY);
          for (var DY = arguments.length, FY = new Array(DY), AY = 0; AY < DY; AY++) FY[AY] = arguments[AY];
          return fY(YY = HY(this, rY, [].concat(FY)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), fY(YY, "handleKeyDown", (function(rY) {
            var DY, FY, AY, IY;
            "Escape" === rY.key && YY.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (DY = null === (FY = YY.props.coordinate) || void 0 === FY ? void 0 : FY.x) && void 0 !== DY ? DY : 0,
                y: null !== (AY = null === (IY = YY.props.coordinate) || void 0 === IY ? void 0 : IY.y) && void 0 !== AY ? AY : 0
              }
            })
          })), YY
        }
        return function(YY, rY) {
          if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
          YY.prototype = Object.create(rY && rY.prototype, {
            constructor: {
              value: YY,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(YY, "prototype", {
            writable: !1
          }), rY && CY(YY, rY)
        }(rY, YY), DY = rY, (AY = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var YY = this.wrapperNode.getBoundingClientRect();
              (Math.abs(YY.width - this.state.lastBoundingBox.width) > 1 || Math.abs(YY.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: YY.width,
                  height: YY.height
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
            var YY, rY;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (YY = this.props.coordinate) || void 0 === YY ? void 0 : YY.x) === this.state.dismissedAtCoordinate.x && (null === (rY = this.props.coordinate) || void 0 === rY ? void 0 : rY.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var YY = this,
              rY = this.props,
              DY = rY.active,
              AY = rY.allowEscapeViewBox,
              IY = rY.animationDuration,
              RY = rY.animationEasing,
              OY = rY.children,
              gY = rY.coordinate,
              aY = rY.hasPayload,
              vY = rY.isAnimationActive,
              uY = rY.offset,
              sY = rY.position,
              iY = rY.reverseDirection,
              yY = rY.useTranslate3d,
              QY = rY.viewBox,
              oY = rY.wrapperStyle,
              WY = function(YY) {
                var rY, DY, FY = YY.allowEscapeViewBox,
                  AY = YY.coordinate,
                  IY = YY.offsetTopLeft,
                  RY = YY.position,
                  OY = YY.reverseDirection,
                  gY = YY.tooltipBox,
                  aY = YY.useTranslate3d,
                  vY = YY.viewBox;
                return {
                  cssProperties: gY.height > 0 && gY.width > 0 && AY ? function(YY) {
                    var rY = YY.translateX,
                      DY = YY.translateY;
                    return {
                      transform: YY.useTranslate3d ? "translate3d(".concat(rY, "px, ").concat(DY, "px, 0)") : "translate(".concat(rY, "px, ").concat(DY, "px)")
                    }
                  }({
                    translateX: rY = eY({
                      allowEscapeViewBox: FY,
                      coordinate: AY,
                      key: "x",
                      offsetTopLeft: IY,
                      position: RY,
                      reverseDirection: OY,
                      tooltipDimension: gY.width,
                      viewBox: vY,
                      viewBoxDimension: vY.width
                    }),
                    translateY: DY = eY({
                      allowEscapeViewBox: FY,
                      coordinate: AY,
                      key: "y",
                      offsetTopLeft: IY,
                      position: RY,
                      reverseDirection: OY,
                      tooltipDimension: gY.height,
                      viewBox: vY,
                      viewBoxDimension: vY.height
                    }),
                    useTranslate3d: aY
                  }) : lY,
                  cssClasses: TY({
                    translateX: rY,
                    translateY: DY,
                    coordinate: AY
                  })
                }
              }({
                allowEscapeViewBox: AY,
                coordinate: gY,
                offsetTopLeft: uY,
                position: sY,
                reverseDirection: iY,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: yY,
                viewBox: QY
              }),
              EY = WY.cssClasses,
              mY = WY.cssProperties,
              VY = cY(cY({
                transition: vY && DY ? "transform ".concat(IY, "ms ").concat(RY) : void 0
              }, mY), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && DY && aY ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, oY);
            return FY.createElement("div", {
              tabIndex: -1,
              className: EY,
              style: VY,
              ref: function(rY) {
                YY.wrapperNode = rY
              }
            }, OY)
          }
        }]) && KY(DY.prototype, AY), IY && KY(DY, IY), Object.defineProperty(DY, "prototype", {
          writable: !1
        }), DY;
        var DY, AY, IY
      }(FY.PureComponent),
      dY = DY(5556),
      JY = DY(5563);

    function MY(YY) {
      return MY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, MY(YY)
    }

    function wY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function bY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? wY(Object(DY), !0).forEach((function(rY) {
          xY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : wY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function XY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, nY(FY.key), FY)
      }
    }

    function qY(YY, rY, DY) {
      return rY = kY(rY),
        function(YY, rY) {
          if (rY && ("object" === MY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return function(YY) {
            if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return YY
          }(YY)
        }(YY, pY() ? Reflect.construct(rY, DY || [], kY(YY).constructor) : rY.apply(YY, DY))
    }

    function pY() {
      try {
        var YY = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (YY) {}
      return (pY = function() {
        return !!YY
      })()
    }

    function kY(YY) {
      return kY = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, kY(YY)
    }

    function GY(YY, rY) {
      return GY = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, GY(YY, rY)
    }

    function xY(YY, rY, DY) {
      return (rY = nY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function nY(YY) {
      var rY = function(YY, rY) {
        if ("object" != MY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != MY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == MY(rY) ? rY : rY + ""
    }

    function PY(YY) {
      return YY.dataKey
    }
    var UY = function(YY) {
      function rY() {
        return function(YY, rY) {
          if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
        }(this, rY), qY(this, rY, arguments)
      }
      return function(YY, rY) {
        if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
        YY.prototype = Object.create(rY && rY.prototype, {
          constructor: {
            value: YY,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(YY, "prototype", {
          writable: !1
        }), rY && GY(YY, rY)
      }(rY, YY), DY = rY, (AY = [{
        key: "render",
        value: function() {
          var YY = this,
            rY = this.props,
            DY = rY.active,
            AY = rY.allowEscapeViewBox,
            IY = rY.animationDuration,
            RY = rY.animationEasing,
            OY = rY.content,
            gY = rY.coordinate,
            aY = rY.filterNull,
            vY = rY.isAnimationActive,
            uY = rY.offset,
            sY = rY.payload,
            iY = rY.payloadUniqBy,
            yY = rY.position,
            QY = rY.reverseDirection,
            oY = rY.useTranslate3d,
            WY = rY.viewBox,
            mY = rY.wrapperStyle,
            VY = null !== sY && void 0 !== sY ? sY : [];
          aY && VY.length && (VY = (0, JY.b)(sY.filter((function(rY) {
            return null != rY.value && (!0 !== rY.hide || YY.props.includeHidden)
          })), iY, PY));
          var SY = VY.length > 0;
          return FY.createElement(hY, {
            allowEscapeViewBox: AY,
            animationDuration: IY,
            animationEasing: RY,
            isAnimationActive: vY,
            active: DY,
            coordinate: gY,
            hasPayload: SY,
            offset: uY,
            position: yY,
            reverseDirection: QY,
            useTranslate3d: oY,
            viewBox: WY,
            wrapperStyle: mY
          }, function(YY, rY) {
            return FY.isValidElement(YY) ? FY.cloneElement(YY, rY) : "function" === typeof YY ? FY.createElement(YY, rY) : FY.createElement(EY, rY)
          }(OY, bY(bY({}, this.props), {}, {
            payload: VY
          })))
        }
      }]) && XY(DY.prototype, AY), IY && XY(DY, IY), Object.defineProperty(DY, "prototype", {
        writable: !1
      }), DY;
      var DY, AY, IY
    }(FY.PureComponent);
    xY(UY, "displayName", "Tooltip"), xY(UY, "defaultProps", {
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
      isAnimationActive: !dY.e.isSsr,
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
  5545: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => aY
    });
    var FY = DY(61),
      AY = DY(4638),
      IY = DY(5023),
      RY = ["children", "className"];

    function OY() {
      return OY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, OY.apply(this, arguments)
    }

    function gY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }
    var aY = FY.forwardRef((function(YY, rY) {
      var DY = YY.children,
        aY = YY.className,
        vY = gY(YY, RY),
        uY = (0, AY.d)("recharts-layer", aY);
      return FY.createElement("g", OY({
        className: uY
      }, (0, IY.d)(vY, !0), {
        ref: rY
      }), DY)
    }))
  },
  5539: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => aY
    });
    var FY = DY(61),
      AY = DY(4638),
      IY = DY(5023),
      RY = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function OY() {
      return OY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, OY.apply(this, arguments)
    }

    function gY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function aY(YY) {
      var rY = YY.children,
        DY = YY.width,
        aY = YY.height,
        vY = YY.viewBox,
        uY = YY.className,
        sY = YY.style,
        iY = YY.title,
        yY = YY.desc,
        QY = gY(YY, RY),
        oY = vY || {
          width: DY,
          height: aY,
          x: 0,
          y: 0
        },
        WY = (0, AY.d)("recharts-surface", uY);
      return FY.createElement("svg", OY({}, (0, IY.d)(QY, !0, "svg"), {
        className: WY,
        width: DY,
        height: aY,
        style: sY,
        viewBox: "".concat(oY.x, " ").concat(oY.y, " ").concat(oY.width, " ").concat(oY.height)
      }), FY.createElement("title", null, iY), FY.createElement("desc", null, yY), rY)
    }
  },
  5913: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => mY,
      h: () => lY,
      l: () => KY,
      m: () => cY,
      n: () => VY,
      o: () => BY,
      r: () => NY,
      u: () => SY,
      w: () => eY,
      x: () => TY
    });
    var FY = DY(61),
      AY = DY(5536),
      IY = DY(5918),
      RY = DY.n(IY),
      OY = DY(5816),
      gY = DY.n(OY),
      aY = DY(4788),
      vY = DY.n(aY)()((function(YY) {
        return {
          x: YY.left,
          y: YY.top,
          width: YY.width,
          height: YY.height
        }
      }), (function(YY) {
        return ["l", YY.left, "t", YY.top, "w", YY.width, "h", YY.height].join("")
      })),
      uY = DY(4723);
    var sY = (0, FY.createContext)(void 0),
      iY = (0, FY.createContext)(void 0),
      yY = (0, FY.createContext)(void 0),
      QY = (0, FY.createContext)({}),
      oY = (0, FY.createContext)(void 0),
      WY = (0, FY.createContext)(0),
      EY = (0, FY.createContext)(0),
      mY = function(YY) {
        var rY = YY.state,
          DY = rY.xAxisMap,
          AY = rY.yAxisMap,
          IY = rY.offset,
          RY = YY.clipPathId,
          OY = YY.children,
          gY = YY.width,
          aY = YY.height,
          uY = vY(IY);
        return FY.createElement(sY.Provider, {
          value: DY
        }, FY.createElement(iY.Provider, {
          value: AY
        }, FY.createElement(QY.Provider, {
          value: IY
        }, FY.createElement(yY.Provider, {
          value: uY
        }, FY.createElement(oY.Provider, {
          value: RY
        }, FY.createElement(WY.Provider, {
          value: aY
        }, FY.createElement(EY.Provider, {
          value: gY
        }, OY)))))))
      },
      VY = function() {
        return (0, FY.useContext)(oY)
      };
    var SY = function(YY) {
        var rY = (0, FY.useContext)(sY);
        null == rY && (0, AY.c)(!1);
        var DY = rY[YY];
        return null == DY && (0, AY.c)(!1), DY
      },
      lY = function() {
        var YY = (0, FY.useContext)(sY);
        return (0, uY.g)(YY)
      },
      TY = function() {
        var YY = (0, FY.useContext)(iY);
        return RY()(YY, (function(YY) {
          return gY()(YY.domain, Number.isFinite)
        })) || (0, uY.g)(YY)
      },
      eY = function(YY) {
        var rY = (0, FY.useContext)(iY);
        null == rY && (0, AY.c)(!1);
        var DY = rY[YY];
        return null == DY && (0, AY.c)(!1), DY
      },
      NY = function() {
        return (0, FY.useContext)(yY)
      },
      BY = function() {
        return (0, FY.useContext)(QY)
      },
      cY = function() {
        return (0, FY.useContext)(EY)
      },
      KY = function() {
        return (0, FY.useContext)(WY)
      }
  },
  5939: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => PY
    });
    var FY = DY(61);

    function AY() {}

    function IY(YY, rY, DY) {
      YY._context.bezierCurveTo((2 * YY._x0 + YY._x1) / 3, (2 * YY._y0 + YY._y1) / 3, (YY._x0 + 2 * YY._x1) / 3, (YY._y0 + 2 * YY._y1) / 3, (YY._x0 + 4 * YY._x1 + rY) / 6, (YY._y0 + 4 * YY._y1 + DY) / 6)
    }

    function RY(YY) {
      this._context = YY
    }

    function OY(YY) {
      this._context = YY
    }

    function gY(YY) {
      this._context = YY
    }
    RY.prototype = {
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
            IY(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(YY, rY) {
        switch (YY = +YY, rY = +rY, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(YY, rY) : this._context.moveTo(YY, rY);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            IY(this, YY, rY)
        }
        this._x0 = this._x1, this._x1 = YY, this._y0 = this._y1, this._y1 = rY
      }
    }, OY.prototype = {
      areaStart: AY,
      areaEnd: AY,
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
      point: function(YY, rY) {
        switch (YY = +YY, rY = +rY, this._point) {
          case 0:
            this._point = 1, this._x2 = YY, this._y2 = rY;
            break;
          case 1:
            this._point = 2, this._x3 = YY, this._y3 = rY;
            break;
          case 2:
            this._point = 3, this._x4 = YY, this._y4 = rY, this._context.moveTo((this._x0 + 4 * this._x1 + YY) / 6, (this._y0 + 4 * this._y1 + rY) / 6);
            break;
          default:
            IY(this, YY, rY)
        }
        this._x0 = this._x1, this._x1 = YY, this._y0 = this._y1, this._y1 = rY
      }
    }, gY.prototype = {
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
      point: function(YY, rY) {
        switch (YY = +YY, rY = +rY, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var DY = (this._x0 + 4 * this._x1 + YY) / 6,
              FY = (this._y0 + 4 * this._y1 + rY) / 6;
            this._line ? this._context.lineTo(DY, FY) : this._context.moveTo(DY, FY);
            break;
          case 3:
            this._point = 4;
          default:
            IY(this, YY, rY)
        }
        this._x0 = this._x1, this._x1 = YY, this._y0 = this._y1, this._y1 = rY
      }
    };
    class aY {
      constructor(YY, rY) {
        this._context = YY, this._x = rY
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
      point(YY, rY) {
        switch (YY = +YY, rY = +rY, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(YY, rY) : this._context.moveTo(YY, rY);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + YY) / 2, this._y0, this._x0, rY, YY, rY) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + rY) / 2, YY, this._y0, YY, rY)
        }
        this._x0 = YY, this._y0 = rY
      }
    }

    function vY(YY) {
      this._context = YY
    }

    function uY(YY) {
      this._context = YY
    }

    function sY(YY) {
      return new uY(YY)
    }

    function iY(YY) {
      return YY < 0 ? -1 : 1
    }

    function yY(YY, rY, DY) {
      var FY = YY._x1 - YY._x0,
        AY = rY - YY._x1,
        IY = (YY._y1 - YY._y0) / (FY || AY < 0 && -0),
        RY = (DY - YY._y1) / (AY || FY < 0 && -0),
        OY = (IY * AY + RY * FY) / (FY + AY);
      return (iY(IY) + iY(RY)) * Math.min(Math.abs(IY), Math.abs(RY), .5 * Math.abs(OY)) || 0
    }

    function QY(YY, rY) {
      var DY = YY._x1 - YY._x0;
      return DY ? (3 * (YY._y1 - YY._y0) / DY - rY) / 2 : rY
    }

    function oY(YY, rY, DY) {
      var FY = YY._x0,
        AY = YY._y0,
        IY = YY._x1,
        RY = YY._y1,
        OY = (IY - FY) / 3;
      YY._context.bezierCurveTo(FY + OY, AY + OY * rY, IY - OY, RY - OY * DY, IY, RY)
    }

    function WY(YY) {
      this._context = YY
    }

    function EY(YY) {
      this._context = new mY(YY)
    }

    function mY(YY) {
      this._context = YY
    }

    function VY(YY) {
      this._context = YY
    }

    function SY(YY) {
      var rY, DY, FY = YY.length - 1,
        AY = new Array(FY),
        IY = new Array(FY),
        RY = new Array(FY);
      for (AY[0] = 0, IY[0] = 2, RY[0] = YY[0] + 2 * YY[1], rY = 1; rY < FY - 1; ++rY) AY[rY] = 1, IY[rY] = 4, RY[rY] = 4 * YY[rY] + 2 * YY[rY + 1];
      for (AY[FY - 1] = 2, IY[FY - 1] = 7, RY[FY - 1] = 8 * YY[FY - 1] + YY[FY], rY = 1; rY < FY; ++rY) DY = AY[rY] / IY[rY - 1], IY[rY] -= DY, RY[rY] -= DY * RY[rY - 1];
      for (AY[FY - 1] = RY[FY - 1] / IY[FY - 1], rY = FY - 2; rY >= 0; --rY) AY[rY] = (RY[rY] - AY[rY + 1]) / IY[rY];
      for (IY[FY - 1] = (YY[FY] + AY[FY - 1]) / 2, rY = 0; rY < FY - 1; ++rY) IY[rY] = 2 * YY[rY + 1] - AY[rY + 1];
      return [AY, IY]
    }

    function lY(YY, rY) {
      this._context = YY, this._t = rY
    }
    vY.prototype = {
      areaStart: AY,
      areaEnd: AY,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(YY, rY) {
        YY = +YY, rY = +rY, this._point ? this._context.lineTo(YY, rY) : (this._point = 1, this._context.moveTo(YY, rY))
      }
    }, uY.prototype = {
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
      point: function(YY, rY) {
        switch (YY = +YY, rY = +rY, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(YY, rY) : this._context.moveTo(YY, rY);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(YY, rY)
        }
      }
    }, WY.prototype = {
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
            oY(this, this._t0, QY(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(YY, rY) {
        var DY = NaN;
        if (rY = +rY, (YY = +YY) !== this._x1 || rY !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(YY, rY) : this._context.moveTo(YY, rY);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, oY(this, QY(this, DY = yY(this, YY, rY)), DY);
              break;
            default:
              oY(this, this._t0, DY = yY(this, YY, rY))
          }
          this._x0 = this._x1, this._x1 = YY, this._y0 = this._y1, this._y1 = rY, this._t0 = DY
        }
      }
    }, (EY.prototype = Object.create(WY.prototype)).point = function(YY, rY) {
      WY.prototype.point.call(this, rY, YY)
    }, mY.prototype = {
      moveTo: function(YY, rY) {
        this._context.moveTo(rY, YY)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(YY, rY) {
        this._context.lineTo(rY, YY)
      },
      bezierCurveTo: function(YY, rY, DY, FY, AY, IY) {
        this._context.bezierCurveTo(rY, YY, FY, DY, IY, AY)
      }
    }, VY.prototype = {
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
        var YY = this._x,
          rY = this._y,
          DY = YY.length;
        if (DY)
          if (this._line ? this._context.lineTo(YY[0], rY[0]) : this._context.moveTo(YY[0], rY[0]), 2 === DY) this._context.lineTo(YY[1], rY[1]);
          else
            for (var FY = SY(YY), AY = SY(rY), IY = 0, RY = 1; RY < DY; ++IY, ++RY) this._context.bezierCurveTo(FY[0][IY], AY[0][IY], FY[1][IY], AY[1][IY], YY[RY], rY[RY]);
        (this._line || 0 !== this._line && 1 === DY) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(YY, rY) {
        this._x.push(+YY), this._y.push(+rY)
      }
    }, lY.prototype = {
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
      point: function(YY, rY) {
        switch (YY = +YY, rY = +rY, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(YY, rY) : this._context.moveTo(YY, rY);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, rY), this._context.lineTo(YY, rY);
            else {
              var DY = this._x * (1 - this._t) + YY * this._t;
              this._context.lineTo(DY, this._y), this._context.lineTo(DY, rY)
            }
        }
        this._x = YY, this._y = rY
      }
    };
    var TY = DY(5783),
      eY = DY(5671),
      NY = DY(5679);

    function BY(YY) {
      return YY[0]
    }

    function cY(YY) {
      return YY[1]
    }

    function KY(YY, rY) {
      var DY = (0, eY.b)(!0),
        FY = null,
        AY = sY,
        IY = null,
        RY = (0, NY.e)(OY);

      function OY(OY) {
        var gY, aY, vY, uY = (OY = (0, TY.c)(OY)).length,
          sY = !1;
        for (null == FY && (IY = AY(vY = RY())), gY = 0; gY <= uY; ++gY) !(gY < uY && DY(aY = OY[gY], gY, OY)) === sY && ((sY = !sY) ? IY.lineStart() : IY.lineEnd()), sY && IY.point(+YY(aY, gY, OY), +rY(aY, gY, OY));
        if (vY) return IY = null, vY + "" || null
      }
      return YY = "function" === typeof YY ? YY : void 0 === YY ? BY : (0, eY.b)(YY), rY = "function" === typeof rY ? rY : void 0 === rY ? cY : (0, eY.b)(rY), OY.x = function(rY) {
        return arguments.length ? (YY = "function" === typeof rY ? rY : (0, eY.b)(+rY), OY) : YY
      }, OY.y = function(YY) {
        return arguments.length ? (rY = "function" === typeof YY ? YY : (0, eY.b)(+YY), OY) : rY
      }, OY.defined = function(YY) {
        return arguments.length ? (DY = "function" === typeof YY ? YY : (0, eY.b)(!!YY), OY) : DY
      }, OY.curve = function(YY) {
        return arguments.length ? (AY = YY, null != FY && (IY = AY(FY)), OY) : AY
      }, OY.context = function(YY) {
        return arguments.length ? (null == YY ? FY = IY = null : IY = AY(FY = YY), OY) : FY
      }, OY
    }

    function HY(YY, rY, DY) {
      var FY = null,
        AY = (0, eY.b)(!0),
        IY = null,
        RY = sY,
        OY = null,
        gY = (0, NY.e)(aY);

      function aY(aY) {
        var vY, uY, sY, iY, yY, QY = (aY = (0, TY.c)(aY)).length,
          oY = !1,
          WY = new Array(QY),
          EY = new Array(QY);
        for (null == IY && (OY = RY(yY = gY())), vY = 0; vY <= QY; ++vY) {
          if (!(vY < QY && AY(iY = aY[vY], vY, aY)) === oY)
            if (oY = !oY) uY = vY, OY.areaStart(), OY.lineStart();
            else {
              for (OY.lineEnd(), OY.lineStart(), sY = vY - 1; sY >= uY; --sY) OY.point(WY[sY], EY[sY]);
              OY.lineEnd(), OY.areaEnd()
            } oY && (WY[vY] = +YY(iY, vY, aY), EY[vY] = +rY(iY, vY, aY), OY.point(FY ? +FY(iY, vY, aY) : WY[vY], DY ? +DY(iY, vY, aY) : EY[vY]))
        }
        if (yY) return OY = null, yY + "" || null
      }

      function vY() {
        return KY().defined(AY).curve(RY).context(IY)
      }
      return YY = "function" === typeof YY ? YY : void 0 === YY ? BY : (0, eY.b)(+YY), rY = "function" === typeof rY ? rY : void 0 === rY ? (0, eY.b)(0) : (0, eY.b)(+rY), DY = "function" === typeof DY ? DY : void 0 === DY ? cY : (0, eY.b)(+DY), aY.x = function(rY) {
        return arguments.length ? (YY = "function" === typeof rY ? rY : (0, eY.b)(+rY), FY = null, aY) : YY
      }, aY.x0 = function(rY) {
        return arguments.length ? (YY = "function" === typeof rY ? rY : (0, eY.b)(+rY), aY) : YY
      }, aY.x1 = function(YY) {
        return arguments.length ? (FY = null == YY ? null : "function" === typeof YY ? YY : (0, eY.b)(+YY), aY) : FY
      }, aY.y = function(YY) {
        return arguments.length ? (rY = "function" === typeof YY ? YY : (0, eY.b)(+YY), DY = null, aY) : rY
      }, aY.y0 = function(YY) {
        return arguments.length ? (rY = "function" === typeof YY ? YY : (0, eY.b)(+YY), aY) : rY
      }, aY.y1 = function(YY) {
        return arguments.length ? (DY = null == YY ? null : "function" === typeof YY ? YY : (0, eY.b)(+YY), aY) : DY
      }, aY.lineX0 = aY.lineY0 = function() {
        return vY().x(YY).y(rY)
      }, aY.lineY1 = function() {
        return vY().x(YY).y(DY)
      }, aY.lineX1 = function() {
        return vY().x(FY).y(rY)
      }, aY.defined = function(YY) {
        return arguments.length ? (AY = "function" === typeof YY ? YY : (0, eY.b)(!!YY), aY) : AY
      }, aY.curve = function(YY) {
        return arguments.length ? (RY = YY, null != IY && (OY = RY(IY)), aY) : RY
      }, aY.context = function(YY) {
        return arguments.length ? (null == YY ? IY = OY = null : OY = RY(IY = YY), aY) : IY
      }, aY
    }
    var zY = DY(5630),
      ZY = DY.n(zY),
      CY = DY(4840),
      fY = DY.n(CY),
      jY = DY(4638),
      hY = DY(5040),
      dY = DY(5023),
      JY = DY(4723);

    function MY(YY) {
      return MY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, MY(YY)
    }

    function wY() {
      return wY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, wY.apply(this, arguments)
    }

    function bY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function XY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? bY(Object(DY), !0).forEach((function(rY) {
          qY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : bY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function qY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != MY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != MY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == MY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }
    var pY = {
        curveBasisClosed: function(YY) {
          return new OY(YY)
        },
        curveBasisOpen: function(YY) {
          return new gY(YY)
        },
        curveBasis: function(YY) {
          return new RY(YY)
        },
        curveBumpX: function(YY) {
          return new aY(YY, !0)
        },
        curveBumpY: function(YY) {
          return new aY(YY, !1)
        },
        curveLinearClosed: function(YY) {
          return new vY(YY)
        },
        curveLinear: sY,
        curveMonotoneX: function(YY) {
          return new WY(YY)
        },
        curveMonotoneY: function(YY) {
          return new EY(YY)
        },
        curveNatural: function(YY) {
          return new VY(YY)
        },
        curveStep: function(YY) {
          return new lY(YY, .5)
        },
        curveStepAfter: function(YY) {
          return new lY(YY, 1)
        },
        curveStepBefore: function(YY) {
          return new lY(YY, 0)
        }
      },
      kY = function(YY) {
        return YY.x === +YY.x && YY.y === +YY.y
      },
      GY = function(YY) {
        return YY.x
      },
      xY = function(YY) {
        return YY.y
      },
      nY = function(YY) {
        var rY, DY = YY.type,
          FY = void 0 === DY ? "linear" : DY,
          AY = YY.points,
          IY = void 0 === AY ? [] : AY,
          RY = YY.baseLine,
          OY = YY.layout,
          gY = YY.connectNulls,
          aY = void 0 !== gY && gY,
          vY = function(YY, rY) {
            if (fY()(YY)) return YY;
            var DY = "curve".concat(ZY()(YY));
            return "curveMonotone" !== DY && "curveBump" !== DY || !rY ? pY[DY] || sY : pY["".concat(DY).concat("vertical" === rY ? "Y" : "X")]
          }(FY, OY),
          uY = aY ? IY.filter((function(YY) {
            return kY(YY)
          })) : IY;
        if (Array.isArray(RY)) {
          var iY = aY ? RY.filter((function(YY) {
              return kY(YY)
            })) : RY,
            yY = uY.map((function(YY, rY) {
              return XY(XY({}, YY), {}, {
                base: iY[rY]
              })
            }));
          return (rY = "vertical" === OY ? HY().y(xY).x1(GY).x0((function(YY) {
            return YY.base.x
          })) : HY().x(GY).y1(xY).y0((function(YY) {
            return YY.base.y
          }))).defined(kY).curve(vY), rY(yY)
        }
        return (rY = "vertical" === OY && (0, JY.w)(RY) ? HY().y(xY).x1(GY).x0(RY) : (0, JY.w)(RY) ? HY().x(GY).y1(xY).y0(RY) : KY().x(GY).y(xY)).defined(kY).curve(vY), rY(uY)
      },
      PY = function(YY) {
        var rY = YY.className,
          DY = YY.points,
          AY = YY.path,
          IY = YY.pathRef;
        if ((!DY || !DY.length) && !AY) return null;
        var RY = DY && DY.length ? nY(YY) : AY;
        return FY.createElement("path", wY({}, (0, dY.d)(YY, !1), (0, hY.n)(YY), {
          className: (0, jY.d)("recharts-curve", rY),
          d: RY,
          ref: IY
        }))
      }
  },
  5684: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => gY
    });
    var FY = DY(61),
      AY = DY(4638),
      IY = DY(5040),
      RY = DY(5023);

    function OY() {
      return OY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, OY.apply(this, arguments)
    }
    var gY = function(YY) {
      var rY = YY.cx,
        DY = YY.cy,
        gY = YY.r,
        aY = YY.className,
        vY = (0, AY.d)("recharts-dot", aY);
      return rY === +rY && DY === +DY && gY === +gY ? FY.createElement("circle", OY({}, (0, RY.d)(YY, !1), (0, IY.n)(YY), {
        className: vY,
        cx: rY,
        cy: DY,
        r: gY
      })) : null
    }
  },
  5693: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => WY,
      e: () => QY
    });
    var FY = DY(61),
      AY = DY(4638),
      IY = DY(5698),
      RY = DY(5023);

    function OY(YY) {
      return OY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, OY(YY)
    }

    function gY() {
      return gY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, gY.apply(this, arguments)
    }

    function aY(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        var DY = null == YY ? null : "undefined" != typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
        if (null != DY) {
          var FY, AY, IY, RY, OY = [],
            gY = !0,
            aY = !1;
          try {
            if (IY = (DY = DY.call(YY)).next, 0 === rY) {
              if (Object(DY) !== DY) return;
              gY = !1
            } else
              for (; !(gY = (FY = IY.call(DY)).done) && (OY.push(FY.value), OY.length !== rY); gY = !0);
          } catch (YY) {
            aY = !0, AY = YY
          } finally {
            try {
              if (!gY && null != DY.return && (RY = DY.return(), Object(RY) !== RY)) return
            } finally {
              if (aY) throw AY
            }
          }
          return OY
        }
      }(YY, rY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return vY(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return vY(YY, rY)
      }(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function uY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function sY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? uY(Object(DY), !0).forEach((function(rY) {
          iY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : uY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function iY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != OY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != OY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == OY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }
    var yY = function(YY, rY, DY, FY, AY) {
        var IY, RY = Math.min(Math.abs(DY) / 2, Math.abs(FY) / 2),
          OY = FY >= 0 ? 1 : -1,
          gY = DY >= 0 ? 1 : -1,
          aY = FY >= 0 && DY >= 0 || FY < 0 && DY < 0 ? 1 : 0;
        if (RY > 0 && AY instanceof Array) {
          for (var vY = [0, 0, 0, 0], uY = 0; uY < 4; uY++) vY[uY] = AY[uY] > RY ? RY : AY[uY];
          IY = "M".concat(YY, ",").concat(rY + OY * vY[0]), vY[0] > 0 && (IY += "A ".concat(vY[0], ",").concat(vY[0], ",0,0,").concat(aY, ",").concat(YY + gY * vY[0], ",").concat(rY)), IY += "L ".concat(YY + DY - gY * vY[1], ",").concat(rY), vY[1] > 0 && (IY += "A ".concat(vY[1], ",").concat(vY[1], ",0,0,").concat(aY, ",\n        ").concat(YY + DY, ",").concat(rY + OY * vY[1])), IY += "L ".concat(YY + DY, ",").concat(rY + FY - OY * vY[2]), vY[2] > 0 && (IY += "A ".concat(vY[2], ",").concat(vY[2], ",0,0,").concat(aY, ",\n        ").concat(YY + DY - gY * vY[2], ",").concat(rY + FY)), IY += "L ".concat(YY + gY * vY[3], ",").concat(rY + FY), vY[3] > 0 && (IY += "A ".concat(vY[3], ",").concat(vY[3], ",0,0,").concat(aY, ",\n        ").concat(YY, ",").concat(rY + FY - OY * vY[3])), IY += "Z"
        } else if (RY > 0 && AY === +AY && AY > 0) {
          var sY = Math.min(RY, AY);
          IY = "M ".concat(YY, ",").concat(rY + OY * sY, "\n            A ").concat(sY, ",").concat(sY, ",0,0,").concat(aY, ",").concat(YY + gY * sY, ",").concat(rY, "\n            L ").concat(YY + DY - gY * sY, ",").concat(rY, "\n            A ").concat(sY, ",").concat(sY, ",0,0,").concat(aY, ",").concat(YY + DY, ",").concat(rY + OY * sY, "\n            L ").concat(YY + DY, ",").concat(rY + FY - OY * sY, "\n            A ").concat(sY, ",").concat(sY, ",0,0,").concat(aY, ",").concat(YY + DY - gY * sY, ",").concat(rY + FY, "\n            L ").concat(YY + gY * sY, ",").concat(rY + FY, "\n            A ").concat(sY, ",").concat(sY, ",0,0,").concat(aY, ",").concat(YY, ",").concat(rY + FY - OY * sY, " Z")
        } else IY = "M ".concat(YY, ",").concat(rY, " h ").concat(DY, " v ").concat(FY, " h ").concat(-DY, " Z");
        return IY
      },
      QY = function(YY, rY) {
        if (!YY || !rY) return !1;
        var DY = YY.x,
          FY = YY.y,
          AY = rY.x,
          IY = rY.y,
          RY = rY.width,
          OY = rY.height;
        if (Math.abs(RY) > 0 && Math.abs(OY) > 0) {
          var gY = Math.min(AY, AY + RY),
            aY = Math.max(AY, AY + RY),
            vY = Math.min(IY, IY + OY),
            uY = Math.max(IY, IY + OY);
          return DY >= gY && DY <= aY && FY >= vY && FY <= uY
        }
        return !1
      },
      oY = {
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
      WY = function(YY) {
        var rY = sY(sY({}, oY), YY),
          DY = (0, FY.useRef)(),
          OY = aY((0, FY.useState)(-1), 2),
          vY = OY[0],
          uY = OY[1];
        (0, FY.useEffect)((function() {
          if (DY.current && DY.current.getTotalLength) try {
            var YY = DY.current.getTotalLength();
            YY && uY(YY)
          } catch (rY) {}
        }), []);
        var iY = rY.x,
          QY = rY.y,
          WY = rY.width,
          EY = rY.height,
          mY = rY.radius,
          VY = rY.className,
          SY = rY.animationEasing,
          lY = rY.animationDuration,
          TY = rY.animationBegin,
          eY = rY.isAnimationActive,
          NY = rY.isUpdateAnimationActive;
        if (iY !== +iY || QY !== +QY || WY !== +WY || EY !== +EY || 0 === WY || 0 === EY) return null;
        var BY = (0, AY.d)("recharts-rectangle", VY);
        return NY ? FY.createElement(IY.e, {
          canBegin: vY > 0,
          from: {
            width: WY,
            height: EY,
            x: iY,
            y: QY
          },
          to: {
            width: WY,
            height: EY,
            x: iY,
            y: QY
          },
          duration: lY,
          animationEasing: SY,
          isActive: NY
        }, (function(YY) {
          var AY = YY.width,
            OY = YY.height,
            aY = YY.x,
            uY = YY.y;
          return FY.createElement(IY.e, {
            canBegin: vY > 0,
            from: "0px ".concat(-1 === vY ? 1 : vY, "px"),
            to: "".concat(vY, "px 0px"),
            attributeName: "strokeDasharray",
            Ei: TY,
            duration: lY,
            isActive: eY,
            easing: SY
          }, FY.createElement("path", gY({}, (0, RY.d)(rY, !0), {
            className: BY,
            d: yY(aY, uY, AY, OY, mY),
            ref: DY
          })))
        })) : FY.createElement("path", gY({}, (0, RY.d)(rY, !0), {
          className: BY,
          d: yY(iY, QY, WY, EY, mY)
        }))
      }
  },
  5881: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => oY
    });
    var FY = DY(61),
      AY = DY(4638),
      IY = DY(5023),
      RY = DY(5799),
      OY = DY(4723);

    function gY(YY) {
      return gY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, gY(YY)
    }

    function aY() {
      return aY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, aY.apply(this, arguments)
    }

    function vY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function uY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? vY(Object(DY), !0).forEach((function(rY) {
          sY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : vY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function sY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != gY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != gY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == gY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }
    var iY = function(YY) {
        var rY = YY.cx,
          DY = YY.cy,
          FY = YY.radius,
          AY = YY.angle,
          IY = YY.sign,
          OY = YY.isExternal,
          gY = YY.cornerRadius,
          aY = YY.cornerIsExternal,
          vY = gY * (OY ? 1 : -1) + FY,
          uY = Math.asin(gY / vY) / RY.e,
          sY = aY ? AY : AY + IY * uY,
          iY = aY ? AY - IY * uY : AY;
        return {
          center: (0, RY.i)(rY, DY, vY, sY),
          circleTangency: (0, RY.i)(rY, DY, FY, sY),
          lineTangency: (0, RY.i)(rY, DY, vY * Math.cos(uY * RY.e), iY),
          ta: uY
        }
      },
      yY = function(YY) {
        var rY = YY.cx,
          DY = YY.cy,
          FY = YY.innerRadius,
          AY = YY.outerRadius,
          IY = YY.startAngle,
          gY = function(YY, rY) {
            return (0, OY.C)(rY - YY) * Math.min(Math.abs(rY - YY), 359.999)
          }(IY, YY.endAngle),
          aY = IY + gY,
          vY = (0, RY.i)(rY, DY, AY, IY),
          uY = (0, RY.i)(rY, DY, AY, aY),
          sY = "M ".concat(vY.x, ",").concat(vY.y, "\n    A ").concat(AY, ",").concat(AY, ",0,\n    ").concat(+(Math.abs(gY) > 180), ",").concat(+(IY > aY), ",\n    ").concat(uY.x, ",").concat(uY.y, "\n  ");
        if (FY > 0) {
          var iY = (0, RY.i)(rY, DY, FY, IY),
            yY = (0, RY.i)(rY, DY, FY, aY);
          sY += "L ".concat(yY.x, ",").concat(yY.y, "\n            A ").concat(FY, ",").concat(FY, ",0,\n            ").concat(+(Math.abs(gY) > 180), ",").concat(+(IY <= aY), ",\n            ").concat(iY.x, ",").concat(iY.y, " Z")
        } else sY += "L ".concat(rY, ",").concat(DY, " Z");
        return sY
      },
      QY = {
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
      oY = function(YY) {
        var rY = uY(uY({}, QY), YY),
          DY = rY.cx,
          RY = rY.cy,
          gY = rY.innerRadius,
          vY = rY.outerRadius,
          sY = rY.cornerRadius,
          oY = rY.forceCornerRadius,
          WY = rY.cornerIsExternal,
          EY = rY.startAngle,
          mY = rY.endAngle,
          VY = rY.className;
        if (vY < gY || EY === mY) return null;
        var SY, lY = (0, AY.d)("recharts-sector", VY),
          TY = vY - gY,
          eY = (0, OY.n)(sY, TY, 0, !0);
        return SY = eY > 0 && Math.abs(EY - mY) < 360 ? function(YY) {
          var rY = YY.cx,
            DY = YY.cy,
            FY = YY.innerRadius,
            AY = YY.outerRadius,
            IY = YY.cornerRadius,
            RY = YY.forceCornerRadius,
            gY = YY.cornerIsExternal,
            aY = YY.startAngle,
            vY = YY.endAngle,
            uY = (0, OY.C)(vY - aY),
            sY = iY({
              cx: rY,
              cy: DY,
              radius: AY,
              angle: aY,
              sign: uY,
              cornerRadius: IY,
              cornerIsExternal: gY
            }),
            QY = sY.circleTangency,
            oY = sY.lineTangency,
            WY = sY.ta,
            EY = iY({
              cx: rY,
              cy: DY,
              radius: AY,
              angle: vY,
              sign: -uY,
              cornerRadius: IY,
              cornerIsExternal: gY
            }),
            mY = EY.circleTangency,
            VY = EY.lineTangency,
            SY = EY.ta,
            lY = gY ? Math.abs(aY - vY) : Math.abs(aY - vY) - WY - SY;
          if (lY < 0) return RY ? "M ".concat(oY.x, ",").concat(oY.y, "\n        a").concat(IY, ",").concat(IY, ",0,0,1,").concat(2 * IY, ",0\n        a").concat(IY, ",").concat(IY, ",0,0,1,").concat(2 * -IY, ",0\n      ") : yY({
            cx: rY,
            cy: DY,
            innerRadius: FY,
            outerRadius: AY,
            startAngle: aY,
            endAngle: vY
          });
          var TY = "M ".concat(oY.x, ",").concat(oY.y, "\n    A").concat(IY, ",").concat(IY, ",0,0,").concat(+(uY < 0), ",").concat(QY.x, ",").concat(QY.y, "\n    A").concat(AY, ",").concat(AY, ",0,").concat(+(lY > 180), ",").concat(+(uY < 0), ",").concat(mY.x, ",").concat(mY.y, "\n    A").concat(IY, ",").concat(IY, ",0,0,").concat(+(uY < 0), ",").concat(VY.x, ",").concat(VY.y, "\n  ");
          if (FY > 0) {
            var eY = iY({
                cx: rY,
                cy: DY,
                radius: FY,
                angle: aY,
                sign: uY,
                isExternal: !0,
                cornerRadius: IY,
                cornerIsExternal: gY
              }),
              NY = eY.circleTangency,
              BY = eY.lineTangency,
              cY = eY.ta,
              KY = iY({
                cx: rY,
                cy: DY,
                radius: FY,
                angle: vY,
                sign: -uY,
                isExternal: !0,
                cornerRadius: IY,
                cornerIsExternal: gY
              }),
              HY = KY.circleTangency,
              zY = KY.lineTangency,
              ZY = KY.ta,
              CY = gY ? Math.abs(aY - vY) : Math.abs(aY - vY) - cY - ZY;
            if (CY < 0 && 0 === IY) return "".concat(TY, "L").concat(rY, ",").concat(DY, "Z");
            TY += "L".concat(zY.x, ",").concat(zY.y, "\n      A").concat(IY, ",").concat(IY, ",0,0,").concat(+(uY < 0), ",").concat(HY.x, ",").concat(HY.y, "\n      A").concat(FY, ",").concat(FY, ",0,").concat(+(CY > 180), ",").concat(+(uY > 0), ",").concat(NY.x, ",").concat(NY.y, "\n      A").concat(IY, ",").concat(IY, ",0,0,").concat(+(uY < 0), ",").concat(BY.x, ",").concat(BY.y, "Z")
          } else TY += "L".concat(rY, ",").concat(DY, "Z");
          return TY
        }({
          cx: DY,
          cy: RY,
          innerRadius: gY,
          outerRadius: vY,
          cornerRadius: Math.min(eY, TY / 2),
          forceCornerRadius: oY,
          cornerIsExternal: WY,
          startAngle: EY,
          endAngle: mY
        }) : yY({
          cx: DY,
          cy: RY,
          innerRadius: gY,
          outerRadius: vY,
          startAngle: EY,
          endAngle: mY
        }), FY.createElement("path", aY({}, (0, IY.d)(rY, !0), {
          className: lY,
          d: SY,
          role: "img"
        }))
      }
  },
  5626: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => XY
    });
    var FY = DY(61),
      AY = DY(5630),
      IY = DY.n(AY);
    Math.abs, Math.atan2;
    const RY = Math.cos,
      OY = (Math.max, Math.min, Math.sin),
      gY = Math.sqrt,
      aY = Math.PI,
      vY = 2 * aY;
    const uY = {
        draw(YY, rY) {
          const DY = gY(rY / aY);
          YY.moveTo(DY, 0), YY.arc(0, 0, DY, 0, vY)
        }
      },
      sY = {
        draw(YY, rY) {
          const DY = gY(rY / 5) / 2;
          YY.moveTo(-3 * DY, -DY), YY.lineTo(-DY, -DY), YY.lineTo(-DY, -3 * DY), YY.lineTo(DY, -3 * DY), YY.lineTo(DY, -DY), YY.lineTo(3 * DY, -DY), YY.lineTo(3 * DY, DY), YY.lineTo(DY, DY), YY.lineTo(DY, 3 * DY), YY.lineTo(-DY, 3 * DY), YY.lineTo(-DY, DY), YY.lineTo(-3 * DY, DY), YY.closePath()
        }
      },
      iY = gY(1 / 3),
      yY = 2 * iY,
      QY = {
        draw(YY, rY) {
          const DY = gY(rY / yY),
            FY = DY * iY;
          YY.moveTo(0, -DY), YY.lineTo(FY, 0), YY.lineTo(0, DY), YY.lineTo(-FY, 0), YY.closePath()
        }
      },
      oY = {
        draw(YY, rY) {
          const DY = gY(rY),
            FY = -DY / 2;
          YY.rect(FY, FY, DY, DY)
        }
      },
      WY = OY(aY / 10) / OY(7 * aY / 10),
      EY = OY(vY / 10) * WY,
      mY = -RY(vY / 10) * WY,
      VY = {
        draw(YY, rY) {
          const DY = gY(.8908130915292852 * rY),
            FY = EY * DY,
            AY = mY * DY;
          YY.moveTo(0, -DY), YY.lineTo(FY, AY);
          for (let IY = 1; IY < 5; ++IY) {
            const rY = vY * IY / 5,
              gY = RY(rY),
              aY = OY(rY);
            YY.lineTo(aY * DY, -gY * DY), YY.lineTo(gY * FY - aY * AY, aY * FY + gY * AY)
          }
          YY.closePath()
        }
      },
      SY = gY(3),
      lY = {
        draw(YY, rY) {
          const DY = -gY(rY / (3 * SY));
          YY.moveTo(0, 2 * DY), YY.lineTo(-SY * DY, -DY), YY.lineTo(SY * DY, -DY), YY.closePath()
        }
      },
      TY = -.5,
      eY = gY(3) / 2,
      NY = 1 / gY(12),
      BY = 3 * (NY / 2 + 1),
      cY = {
        draw(YY, rY) {
          const DY = gY(rY / BY),
            FY = DY / 2,
            AY = DY * NY,
            IY = FY,
            RY = DY * NY + DY,
            OY = -IY,
            aY = RY;
          YY.moveTo(FY, AY), YY.lineTo(IY, RY), YY.lineTo(OY, aY), YY.lineTo(TY * FY - eY * AY, eY * FY + TY * AY), YY.lineTo(TY * IY - eY * RY, eY * IY + TY * RY), YY.lineTo(TY * OY - eY * aY, eY * OY + TY * aY), YY.lineTo(TY * FY + eY * AY, TY * AY - eY * FY), YY.lineTo(TY * IY + eY * RY, TY * RY - eY * IY), YY.lineTo(TY * OY + eY * aY, TY * aY - eY * OY), YY.closePath()
        }
      };
    var KY = DY(5671),
      HY = DY(5679);
    gY(3), gY(3);
    var zY = DY(4638),
      ZY = DY(5023);

    function CY(YY) {
      return CY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, CY(YY)
    }
    var fY = ["type", "size", "sizeType"];

    function jY() {
      return jY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, jY.apply(this, arguments)
    }

    function hY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function dY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? hY(Object(DY), !0).forEach((function(rY) {
          JY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : hY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function JY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != CY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != CY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == CY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function MY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }
    var wY = {
        symbolCircle: uY,
        symbolCross: sY,
        symbolDiamond: QY,
        symbolSquare: oY,
        symbolStar: VY,
        symbolTriangle: lY,
        symbolWye: cY
      },
      bY = Math.PI / 180,
      XY = function(YY) {
        var rY = YY.type,
          DY = void 0 === rY ? "circle" : rY,
          AY = YY.size,
          RY = void 0 === AY ? 64 : AY,
          OY = YY.sizeType,
          gY = void 0 === OY ? "area" : OY,
          aY = dY(dY({}, MY(YY, fY)), {}, {
            type: DY,
            size: RY,
            sizeType: gY
          }),
          vY = aY.className,
          sY = aY.cx,
          iY = aY.cy,
          yY = (0, ZY.d)(aY, !0);
        return sY === +sY && iY === +iY && RY === +RY ? FY.createElement("path", jY({}, yY, {
          className: (0, zY.d)("recharts-symbols", vY),
          transform: "translate(".concat(sY, ", ").concat(iY, ")"),
          d: function() {
            var YY = function(YY) {
                var rY = "symbol".concat(IY()(YY));
                return wY[rY] || uY
              }(DY),
              rY = function(YY, rY) {
                let DY = null,
                  FY = (0, HY.e)(AY);

                function AY() {
                  let AY;
                  if (DY || (DY = AY = FY()), YY.apply(this, arguments).draw(DY, +rY.apply(this, arguments)), AY) return DY = null, AY + "" || null
                }
                return YY = "function" === typeof YY ? YY : (0, KY.b)(YY || uY), rY = "function" === typeof rY ? rY : (0, KY.b)(void 0 === rY ? 64 : +rY), AY.type = function(rY) {
                  return arguments.length ? (YY = "function" === typeof rY ? rY : (0, KY.b)(rY), AY) : YY
                }, AY.size = function(YY) {
                  return arguments.length ? (rY = "function" === typeof YY ? YY : (0, KY.b)(+YY), AY) : rY
                }, AY.context = function(YY) {
                  return arguments.length ? (DY = null == YY ? null : YY, AY) : DY
                }, AY
              }().type(YY).size(function(YY, rY, DY) {
                if ("area" === rY) return YY;
                switch (DY) {
                  case "cross":
                    return 5 * YY * YY / 9;
                  case "diamond":
                    return .5 * YY * YY / Math.sqrt(3);
                  case "square":
                    return YY * YY;
                  case "star":
                    var FY = 18 * bY;
                    return 1.25 * YY * YY * (Math.tan(FY) - Math.tan(2 * FY) * Math.pow(Math.tan(FY), 2));
                  case "triangle":
                    return Math.sqrt(3) * YY * YY / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * YY * YY / 8;
                  default:
                    return Math.PI * YY * YY / 4
                }
              }(RY, gY, DY));
            return rY()
          }()
        })) : null
      };
    XY.registerSymbol = function(YY, rY) {
      wY["symbol".concat(IY()(YY))] = rY
    }
  },
  5851: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => JY,
      h: () => kY,
      i: () => MY,
      m: () => wY,
      p: () => bY
    });
    var FY = DY(61),
      AY = DY(4840),
      IY = DY.n(AY),
      RY = DY(5860),
      OY = DY.n(RY),
      gY = DY(5872),
      aY = DY.n(gY),
      vY = DY(5759),
      uY = DY.n(vY),
      sY = DY(5693),
      iY = DY(4638),
      yY = DY(5698),
      QY = DY(5023);

    function oY(YY) {
      return oY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, oY(YY)
    }

    function WY() {
      return WY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY) Object.prototype.hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, WY.apply(this, arguments)
    }

    function EY(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        var DY = null == YY ? null : "undefined" != typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
        if (null != DY) {
          var FY, AY, IY, RY, OY = [],
            gY = !0,
            aY = !1;
          try {
            if (IY = (DY = DY.call(YY)).next, 0 === rY) {
              if (Object(DY) !== DY) return;
              gY = !1
            } else
              for (; !(gY = (FY = IY.call(DY)).done) && (OY.push(FY.value), OY.length !== rY); gY = !0);
          } catch (YY) {
            aY = !0, AY = YY
          } finally {
            try {
              if (!gY && null != DY.return && (RY = DY.return(), Object(RY) !== RY)) return
            } finally {
              if (aY) throw AY
            }
          }
          return OY
        }
      }(YY, rY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return mY(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return mY(YY, rY)
      }(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function VY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function SY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? VY(Object(DY), !0).forEach((function(rY) {
          lY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : VY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function lY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != oY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != oY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == oY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }
    var TY = function(YY, rY, DY, FY, AY) {
        var IY, RY = DY - FY;
        return IY = "M ".concat(YY, ",").concat(rY), IY += "L ".concat(YY + DY, ",").concat(rY), IY += "L ".concat(YY + DY - RY / 2, ",").concat(rY + AY), IY += "L ".concat(YY + DY - RY / 2 - FY, ",").concat(rY + AY), IY += "L ".concat(YY, ",").concat(rY, " Z")
      },
      eY = {
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
      NY = function(YY) {
        var rY = SY(SY({}, eY), YY),
          DY = (0, FY.useRef)(),
          AY = EY((0, FY.useState)(-1), 2),
          IY = AY[0],
          RY = AY[1];
        (0, FY.useEffect)((function() {
          if (DY.current && DY.current.getTotalLength) try {
            var YY = DY.current.getTotalLength();
            YY && RY(YY)
          } catch (rY) {}
        }), []);
        var OY = rY.x,
          gY = rY.y,
          aY = rY.upperWidth,
          vY = rY.lowerWidth,
          uY = rY.height,
          sY = rY.className,
          oY = rY.animationEasing,
          mY = rY.animationDuration,
          VY = rY.animationBegin,
          lY = rY.isUpdateAnimationActive;
        if (OY !== +OY || gY !== +gY || aY !== +aY || vY !== +vY || uY !== +uY || 0 === aY && 0 === vY || 0 === uY) return null;
        var NY = (0, iY.d)("recharts-trapezoid", sY);
        return lY ? FY.createElement(yY.e, {
          canBegin: IY > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: uY,
            x: OY,
            y: gY
          },
          to: {
            upperWidth: aY,
            lowerWidth: vY,
            height: uY,
            x: OY,
            y: gY
          },
          duration: mY,
          animationEasing: oY,
          isActive: lY
        }, (function(YY) {
          var AY = YY.upperWidth,
            RY = YY.lowerWidth,
            OY = YY.height,
            gY = YY.x,
            aY = YY.y;
          return FY.createElement(yY.e, {
            canBegin: IY > 0,
            from: "0px ".concat(-1 === IY ? 1 : IY, "px"),
            to: "".concat(IY, "px 0px"),
            attributeName: "strokeDasharray",
            Ei: VY,
            duration: mY,
            easing: oY
          }, FY.createElement("path", WY({}, (0, QY.d)(rY, !0), {
            className: NY,
            d: TY(gY, aY, AY, RY, OY),
            ref: DY
          })))
        })) : FY.createElement("g", null, FY.createElement("path", WY({}, (0, QY.d)(rY, !0), {
          className: NY,
          d: TY(OY, gY, aY, vY, uY)
        })))
      },
      BY = DY(5881),
      cY = DY(5545),
      KY = DY(5626),
      HY = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function zY(YY) {
      return zY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, zY(YY)
    }

    function ZY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function CY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function fY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? CY(Object(DY), !0).forEach((function(rY) {
          jY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : CY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function jY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != zY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != zY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == zY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function hY(YY, rY) {
      return fY(fY({}, rY), YY)
    }

    function dY(YY) {
      var rY = YY.shapeType,
        DY = YY.elementProps;
      switch (rY) {
        case "rectangle":
          return FY.createElement(sY.b, DY);
        case "trapezoid":
          return FY.createElement(NY, DY);
        case "sector":
          return FY.createElement(BY.d, DY);
        case "symbols":
          if (function(YY) {
              return "symbols" === YY
            }(rY)) return FY.createElement(KY.d, DY);
          break;
        default:
          return null
      }
    }

    function JY(YY) {
      var rY, DY = YY.option,
        AY = YY.shapeType,
        RY = YY.propTransformer,
        gY = void 0 === RY ? hY : RY,
        vY = YY.activeClassName,
        uY = void 0 === vY ? "recharts-active-shape" : vY,
        sY = YY.isActive,
        iY = ZY(YY, HY);
      if ((0, FY.isValidElement)(DY)) rY = (0, FY.cloneElement)(DY, fY(fY({}, iY), function(YY) {
        return (0, FY.isValidElement)(YY) ? YY.props : YY
      }(DY)));
      else if (IY()(DY)) rY = DY(iY);
      else if (OY()(DY) && !aY()(DY)) {
        var yY = gY(DY, iY);
        rY = FY.createElement(dY, {
          shapeType: AY,
          elementProps: yY
        })
      } else {
        var QY = iY;
        rY = FY.createElement(dY, {
          shapeType: AY,
          elementProps: QY
        })
      }
      return sY ? FY.createElement(cY.b, {
        className: uY
      }, rY) : rY
    }

    function MY(YY, rY) {
      return null != rY && "trapezoids" in YY.props
    }

    function wY(YY, rY) {
      return null != rY && "sectors" in YY.props
    }

    function bY(YY, rY) {
      return null != rY && "points" in YY.props
    }

    function XY(YY, rY) {
      var DY, FY, AY = YY.x === (null === rY || void 0 === rY || null === (DY = rY.labelViewBox) || void 0 === DY ? void 0 : DY.x) || YY.x === rY.x,
        IY = YY.y === (null === rY || void 0 === rY || null === (FY = rY.labelViewBox) || void 0 === FY ? void 0 : FY.y) || YY.y === rY.y;
      return AY && IY
    }

    function qY(YY, rY) {
      var DY = YY.endAngle === rY.endAngle,
        FY = YY.startAngle === rY.startAngle;
      return DY && FY
    }

    function pY(YY, rY) {
      var DY = YY.x === rY.x,
        FY = YY.y === rY.y,
        AY = YY.z === rY.z;
      return DY && FY && AY
    }

    function kY(YY) {
      var rY = YY.activeTooltipItem,
        DY = YY.graphicalItem,
        FY = YY.itemData,
        AY = function(YY, rY) {
          var DY;
          return MY(YY, rY) ? DY = "trapezoids" : wY(YY, rY) ? DY = "sectors" : bY(YY, rY) && (DY = "points"), DY
        }(DY, rY),
        IY = function(YY, rY) {
          var DY, FY;
          return MY(YY, rY) ? null === (DY = rY.tooltipPayload) || void 0 === DY || null === (DY = DY[0]) || void 0 === DY || null === (DY = DY.payload) || void 0 === DY ? void 0 : DY.payload : wY(YY, rY) ? null === (FY = rY.tooltipPayload) || void 0 === FY || null === (FY = FY[0]) || void 0 === FY || null === (FY = FY.payload) || void 0 === FY ? void 0 : FY.payload : bY(YY, rY) ? rY.payload : {}
        }(DY, rY),
        RY = FY.filter((function(YY, FY) {
          var RY = uY()(IY, YY),
            OY = DY.props[AY].filter((function(YY) {
              var FY = function(YY, rY) {
                var DY;
                return MY(YY, rY) ? DY = XY : wY(YY, rY) ? DY = qY : bY(YY, rY) && (DY = pY), DY
              }(DY, rY);
              return FY(YY, rY)
            })),
            gY = DY.props[AY].indexOf(OY[OY.length - 1]);
          return RY && FY === gY
        }));
      return FY.indexOf(RY[RY.length - 1])
    }
  },
  5805: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => SY,
      f: () => WY,
      h: () => lY,
      j: () => mY,
      k: () => EY
    });
    var FY = DY(5808),
      AY = DY.n(FY),
      IY = DY(5816),
      RY = DY.n(IY),
      OY = DY(5709),
      gY = DY(5023),
      aY = DY(4723),
      vY = DY(5830);

    function uY(YY) {
      return uY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, uY(YY)
    }

    function sY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, oY(FY.key), FY)
      }
    }

    function iY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function yY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? iY(Object(DY), !0).forEach((function(rY) {
          QY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : iY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function QY(YY, rY, DY) {
      return (rY = oY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function oY(YY) {
      var rY = function(YY, rY) {
        if ("object" != uY(YY) || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != uY(FY)) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == uY(rY) ? rY : rY + ""
    }
    var WY = function(YY, rY, DY, FY, AY) {
        var IY = YY.width,
          RY = YY.height,
          uY = YY.layout,
          sY = YY.children,
          iY = Object.keys(rY),
          oY = {
            left: DY.left,
            leftMirror: DY.left,
            right: IY - DY.right,
            rightMirror: IY - DY.right,
            top: DY.top,
            topMirror: DY.top,
            bottom: RY - DY.bottom,
            bottomMirror: RY - DY.bottom
          },
          WY = !!(0, gY.k)(sY, vY.b);
        return iY.reduce((function(IY, RY) {
          var gY, vY, sY, iY, EY, mY = rY[RY],
            VY = mY.orientation,
            SY = mY.domain,
            lY = mY.padding,
            TY = void 0 === lY ? {} : lY,
            eY = mY.mirror,
            NY = mY.reversed,
            BY = "".concat(VY).concat(eY ? "Mirror" : "");
          if ("number" === mY.type && ("gap" === mY.padding || "no-gap" === mY.padding)) {
            var cY = SY[1] - SY[0],
              KY = 1 / 0,
              HY = mY.categoricalDomain.sort(aY.c);
            if (HY.forEach((function(YY, rY) {
                rY > 0 && (KY = Math.min((YY || 0) - (HY[rY - 1] || 0), KY))
              })), Number.isFinite(KY)) {
              var zY = KY / cY,
                ZY = "vertical" === mY.layout ? DY.height : DY.width;
              if ("gap" === mY.padding && (gY = zY * ZY / 2), "no-gap" === mY.padding) {
                var CY = (0, aY.n)(YY.barCategoryGap, zY * ZY),
                  fY = zY * ZY / 2;
                gY = fY - CY - (fY - CY) / ZY * CY
              }
            }
          }
          vY = "xAxis" === FY ? [DY.left + (TY.left || 0) + (gY || 0), DY.left + DY.width - (TY.right || 0) - (gY || 0)] : "yAxis" === FY ? "horizontal" === uY ? [DY.top + DY.height - (TY.bottom || 0), DY.top + (TY.top || 0)] : [DY.top + (TY.top || 0) + (gY || 0), DY.top + DY.height - (TY.bottom || 0) - (gY || 0)] : mY.range, NY && (vY = [vY[1], vY[0]]);
          var jY = (0, OY.jb)(mY, AY, WY),
            hY = jY.scale,
            dY = jY.realScaleType;
          hY.domain(SY).range(vY), (0, OY.h)(hY);
          var JY = (0, OY._)(hY, yY(yY({}, mY), {}, {
            realScaleType: dY
          }));
          "xAxis" === FY ? (EY = "top" === VY && !eY || "bottom" === VY && eY, sY = DY.left, iY = oY[BY] - EY * mY.height) : "yAxis" === FY && (EY = "left" === VY && !eY || "right" === VY && eY, sY = oY[BY] - EY * mY.width, iY = DY.top);
          var MY = yY(yY(yY({}, mY), JY), {}, {
            realScaleType: dY,
            x: sY,
            y: iY,
            scale: hY,
            width: "xAxis" === FY ? DY.width : mY.width,
            height: "yAxis" === FY ? DY.height : mY.height
          });
          return MY.bandSize = (0, OY.q)(MY, JY), mY.hide || "xAxis" !== FY ? mY.hide || (oY[BY] += (EY ? -1 : 1) * MY.width) : oY[BY] += (EY ? -1 : 1) * MY.height, yY(yY({}, IY), {}, QY({}, RY, MY))
        }), {})
      },
      EY = function(YY, rY) {
        var DY = YY.x,
          FY = YY.y,
          AY = rY.x,
          IY = rY.y;
        return {
          x: Math.min(DY, AY),
          y: Math.min(FY, IY),
          width: Math.abs(AY - DY),
          height: Math.abs(IY - FY)
        }
      },
      mY = function(YY) {
        var rY = YY.x1,
          DY = YY.y1,
          FY = YY.x2,
          AY = YY.y2;
        return EY({
          x: rY,
          y: DY
        }, {
          x: FY,
          y: AY
        })
      },
      VY = function() {
        function YY(rY) {
          ! function(YY, rY) {
            if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
          }(this, YY), this.scale = rY
        }
        return rY = YY, DY = [{
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
          value: function(YY) {
            var rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              DY = rY.bandAware,
              FY = rY.position;
            if (void 0 !== YY) {
              if (FY) switch (FY) {
                case "start":
                default:
                  return this.scale(YY);
                case "middle":
                  var AY = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(YY) + AY;
                case "end":
                  var IY = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(YY) + IY
              }
              if (DY) {
                var RY = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(YY) + RY
              }
              return this.scale(YY)
            }
          }
        }, {
          key: "isInRange",
          value: function(YY) {
            var rY = this.range(),
              DY = rY[0],
              FY = rY[rY.length - 1];
            return DY <= FY ? YY >= DY && YY <= FY : YY >= FY && YY <= DY
          }
        }], FY = [{
          key: "create",
          value: function(rY) {
            return new YY(rY)
          }
        }], DY && sY(rY.prototype, DY), FY && sY(rY, FY), Object.defineProperty(rY, "prototype", {
          writable: !1
        }), rY;
        var rY, DY, FY
      }();
    QY(VY, "EPS", 1e-4);
    var SY = function(YY) {
      var rY = Object.keys(YY).reduce((function(rY, DY) {
        return yY(yY({}, rY), {}, QY({}, DY, VY.create(YY[DY])))
      }), {});
      return yY(yY({}, rY), {}, {
        apply: function(YY) {
          var DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            FY = DY.bandAware,
            IY = DY.position;
          return AY()(YY, (function(YY, DY) {
            return rY[DY].apply(YY, {
              bandAware: FY,
              position: IY
            })
          }))
        },
        isInRange: function(YY) {
          return RY()(YY, (function(YY, DY) {
            return rY[DY].isInRange(YY)
          }))
        }
      })
    };
    var lY = function(YY) {
      var rY = YY.width,
        DY = YY.height,
        FY = function(YY) {
          return (YY % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        AY = FY * Math.PI / 180,
        IY = Math.atan(DY / rY),
        RY = AY > IY && AY < Math.PI - IY ? DY / Math.sin(AY) : rY / Math.cos(AY);
      return Math.abs(RY)
    }
  },
  5709: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => ZR,
      e: () => cR,
      h: () => qR,
      j: () => wR,
      n: () => pR,
      q: () => IO,
      t: () => zR,
      w: () => HR,
      A: () => tR,
      D: () => LR,
      F: () => UR,
      H: () => dR,
      J: () => BR,
      L: () => jR,
      P: () => rO,
      S: () => KR,
      W: () => nR,
      Y: () => YO,
      Z: () => JR,
      _: () => PR,
      $: () => OO,
      bb: () => NR,
      fb: () => hR,
      gb: () => RO,
      ib: () => fR,
      jb: () => bR,
      lb: () => AO,
      nb: () => kR
    });
    var FY = {};
    DY.r(FY), DY.d(FY, {
      scaleBand: () => AY.b,
      scaleDiverging: () => gI,
      scaleDivergingLog: () => aI,
      scaleDivergingPow: () => uI,
      scaleDivergingSqrt: () => sI,
      scaleDivergingSymlog: () => vI,
      scaleIdentity: () => nr,
      scaleImplicit: () => aD.f,
      scaleLinear: () => xr,
      scaleLog: () => AD,
      scaleOrdinal: () => aD.e,
      scalePoint: () => AY.c,
      scalePow: () => yD,
      scaleQuantile: () => BD,
      scaleQuantize: () => cD,
      scaleRadial: () => WD,
      scaleSequential: () => rI,
      scaleSequentialLog: () => DI,
      scaleSequentialPow: () => AI,
      scaleSequentialQuantile: () => RI,
      scaleSequentialSqrt: () => II,
      scaleSequentialSymlog: () => FI,
      scaleSqrt: () => QD,
      scaleSymlog: () => gD,
      scaleThreshold: () => KD,
      scaleTime: () => UA,
      scaleUtc: () => LA,
      tickFormat: () => kr
    });
    var AY = DY(5713);
    const IY = Math.sqrt(50),
      RY = Math.sqrt(10),
      OY = Math.sqrt(2);

    function gY(YY, rY, DY) {
      const FY = (rY - YY) / Math.max(0, DY),
        AY = Math.floor(Math.log10(FY)),
        aY = FY / Math.pow(10, AY),
        vY = aY >= IY ? 10 : aY >= RY ? 5 : aY >= OY ? 2 : 1;
      let uY, sY, iY;
      return AY < 0 ? (iY = Math.pow(10, -AY) / vY, uY = Math.round(YY * iY), sY = Math.round(rY * iY), uY / iY < YY && ++uY, sY / iY > rY && --sY, iY = -iY) : (iY = Math.pow(10, AY) * vY, uY = Math.round(YY / iY), sY = Math.round(rY / iY), uY * iY < YY && ++uY, sY * iY > rY && --sY), sY < uY && .5 <= DY && DY < 2 ? gY(YY, rY, 2 * DY) : [uY, sY, iY]
    }

    function aY(YY, rY, DY) {
      if (!((DY = +DY) > 0)) return [];
      if ((YY = +YY) === (rY = +rY)) return [YY];
      const FY = rY < YY,
        [AY, IY, RY] = FY ? gY(rY, YY, DY) : gY(YY, rY, DY);
      if (!(IY >= AY)) return [];
      const OY = IY - AY + 1,
        aY = new Array(OY);
      if (FY)
        if (RY < 0)
          for (let gY = 0; gY < OY; ++gY) aY[gY] = (IY - gY) / -RY;
        else
          for (let gY = 0; gY < OY; ++gY) aY[gY] = (IY - gY) * RY;
      else if (RY < 0)
        for (let gY = 0; gY < OY; ++gY) aY[gY] = (AY + gY) / -RY;
      else
        for (let gY = 0; gY < OY; ++gY) aY[gY] = (AY + gY) * RY;
      return aY
    }

    function vY(YY, rY, DY) {
      return gY(YY = +YY, rY = +rY, DY = +DY)[2]
    }

    function uY(YY, rY, DY) {
      DY = +DY;
      const FY = (rY = +rY) < (YY = +YY),
        AY = FY ? vY(rY, YY, DY) : vY(YY, rY, DY);
      return (FY ? -1 : 1) * (AY < 0 ? 1 / -AY : AY)
    }

    function sY(YY, rY) {
      return null == YY || null == rY ? NaN : YY < rY ? -1 : YY > rY ? 1 : YY >= rY ? 0 : NaN
    }

    function iY(YY, rY) {
      return null == YY || null == rY ? NaN : rY < YY ? -1 : rY > YY ? 1 : rY >= YY ? 0 : NaN
    }

    function yY(YY) {
      let rY, DY, FY;

      function AY(YY, FY) {
        let AY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          IY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YY.length;
        if (AY < IY) {
          if (0 !== rY(FY, FY)) return IY;
          do {
            const rY = AY + IY >>> 1;
            DY(YY[rY], FY) < 0 ? AY = rY + 1 : IY = rY
          } while (AY < IY)
        }
        return AY
      }
      return 2 !== YY.length ? (rY = sY, DY = (rY, DY) => sY(YY(rY), DY), FY = (rY, DY) => YY(rY) - DY) : (rY = YY === sY || YY === iY ? YY : QY, DY = YY, FY = YY), {
        left: AY,
        center: function(YY, rY) {
          let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const IY = AY(YY, rY, DY, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YY.length) - 1);
          return IY > DY && FY(YY[IY - 1], rY) > -FY(YY[IY], rY) ? IY - 1 : IY
        },
        right: function(YY, FY) {
          let AY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            IY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YY.length;
          if (AY < IY) {
            if (0 !== rY(FY, FY)) return IY;
            do {
              const rY = AY + IY >>> 1;
              DY(YY[rY], FY) <= 0 ? AY = rY + 1 : IY = rY
            } while (AY < IY)
          }
          return AY
        }
      }
    }

    function QY() {
      return 0
    }

    function oY(YY) {
      return null === YY ? NaN : +YY
    }
    const WY = yY(sY),
      EY = WY.right,
      mY = (WY.left, yY(oY).center, EY);

    function VY(YY, rY, DY) {
      YY.prototype = rY.prototype = DY, DY.constructor = YY
    }

    function SY(YY, rY) {
      var DY = Object.create(YY.prototype);
      for (var FY in rY) DY[FY] = rY[FY];
      return DY
    }

    function lY() {}
    var TY = .7,
      eY = 1 / TY,
      NY = "\\s*([+-]?\\d+)\\s*",
      BY = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      cY = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      KY = /^#([0-9a-f]{3,8})$/,
      HY = new RegExp(`^rgb\\(${NY},${NY},${NY}\\)$`),
      zY = new RegExp(`^rgb\\(${cY},${cY},${cY}\\)$`),
      ZY = new RegExp(`^rgba\\(${NY},${NY},${NY},${BY}\\)$`),
      CY = new RegExp(`^rgba\\(${cY},${cY},${cY},${BY}\\)$`),
      fY = new RegExp(`^hsl\\(${BY},${cY},${cY}\\)$`),
      jY = new RegExp(`^hsla\\(${BY},${cY},${cY},${BY}\\)$`),
      hY = {
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

    function dY() {
      return this.rgb().formatHex()
    }

    function JY() {
      return this.rgb().formatRgb()
    }

    function MY(YY) {
      var rY, DY;
      return YY = (YY + "").trim().toLowerCase(), (rY = KY.exec(YY)) ? (DY = rY[1].length, rY = parseInt(rY[1], 16), 6 === DY ? wY(rY) : 3 === DY ? new qY(rY >> 8 & 15 | rY >> 4 & 240, rY >> 4 & 15 | 240 & rY, (15 & rY) << 4 | 15 & rY, 1) : 8 === DY ? bY(rY >> 24 & 255, rY >> 16 & 255, rY >> 8 & 255, (255 & rY) / 255) : 4 === DY ? bY(rY >> 12 & 15 | rY >> 8 & 240, rY >> 8 & 15 | rY >> 4 & 240, rY >> 4 & 15 | 240 & rY, ((15 & rY) << 4 | 15 & rY) / 255) : null) : (rY = HY.exec(YY)) ? new qY(rY[1], rY[2], rY[3], 1) : (rY = zY.exec(YY)) ? new qY(255 * rY[1] / 100, 255 * rY[2] / 100, 255 * rY[3] / 100, 1) : (rY = ZY.exec(YY)) ? bY(rY[1], rY[2], rY[3], rY[4]) : (rY = CY.exec(YY)) ? bY(255 * rY[1] / 100, 255 * rY[2] / 100, 255 * rY[3] / 100, rY[4]) : (rY = fY.exec(YY)) ? PY(rY[1], rY[2] / 100, rY[3] / 100, 1) : (rY = jY.exec(YY)) ? PY(rY[1], rY[2] / 100, rY[3] / 100, rY[4]) : hY.hasOwnProperty(YY) ? wY(hY[YY]) : "transparent" === YY ? new qY(NaN, NaN, NaN, 0) : null
    }

    function wY(YY) {
      return new qY(YY >> 16 & 255, YY >> 8 & 255, 255 & YY, 1)
    }

    function bY(YY, rY, DY, FY) {
      return FY <= 0 && (YY = rY = DY = NaN), new qY(YY, rY, DY, FY)
    }

    function XY(YY, rY, DY, FY) {
      return 1 === arguments.length ? ((AY = YY) instanceof lY || (AY = MY(AY)), AY ? new qY((AY = AY.rgb()).r, AY.g, AY.b, AY.opacity) : new qY) : new qY(YY, rY, DY, null == FY ? 1 : FY);
      var AY
    }

    function qY(YY, rY, DY, FY) {
      this.r = +YY, this.g = +rY, this.b = +DY, this.opacity = +FY
    }

    function pY() {
      return `#${nY(this.r)}${nY(this.g)}${nY(this.b)}`
    }

    function kY() {
      const YY = GY(this.opacity);
      return `${1===YY?"rgb(":"rgba("}${xY(this.r)}, ${xY(this.g)}, ${xY(this.b)}${1===YY?")":`, ${YY})`}`
    }

    function GY(YY) {
      return isNaN(YY) ? 1 : Math.max(0, Math.min(1, YY))
    }

    function xY(YY) {
      return Math.max(0, Math.min(255, Math.round(YY) || 0))
    }

    function nY(YY) {
      return ((YY = xY(YY)) < 16 ? "0" : "") + YY.toString(16)
    }

    function PY(YY, rY, DY, FY) {
      return FY <= 0 ? YY = rY = DY = NaN : DY <= 0 || DY >= 1 ? YY = rY = NaN : rY <= 0 && (YY = NaN), new LY(YY, rY, DY, FY)
    }

    function UY(YY) {
      if (YY instanceof LY) return new LY(YY.h, YY.s, YY.l, YY.opacity);
      if (YY instanceof lY || (YY = MY(YY)), !YY) return new LY;
      if (YY instanceof LY) return YY;
      var rY = (YY = YY.rgb()).r / 255,
        DY = YY.g / 255,
        FY = YY.b / 255,
        AY = Math.min(rY, DY, FY),
        IY = Math.max(rY, DY, FY),
        RY = NaN,
        OY = IY - AY,
        gY = (IY + AY) / 2;
      return OY ? (RY = rY === IY ? (DY - FY) / OY + 6 * (DY < FY) : DY === IY ? (FY - rY) / OY + 2 : (rY - DY) / OY + 4, OY /= gY < .5 ? IY + AY : 2 - IY - AY, RY *= 60) : OY = gY > 0 && gY < 1 ? 0 : RY, new LY(RY, OY, gY, YY.opacity)
    }

    function LY(YY, rY, DY, FY) {
      this.h = +YY, this.s = +rY, this.l = +DY, this.opacity = +FY
    }

    function tY(YY) {
      return (YY = (YY || 0) % 360) < 0 ? YY + 360 : YY
    }

    function Yr(YY) {
      return Math.max(0, Math.min(1, YY || 0))
    }

    function rr(YY, rY, DY) {
      return 255 * (YY < 60 ? rY + (DY - rY) * YY / 60 : YY < 180 ? DY : YY < 240 ? rY + (DY - rY) * (240 - YY) / 60 : rY)
    }

    function Dr(YY, rY, DY, FY, AY) {
      var IY = YY * YY,
        RY = IY * YY;
      return ((1 - 3 * YY + 3 * IY - RY) * rY + (4 - 6 * IY + 3 * RY) * DY + (1 + 3 * YY + 3 * IY - 3 * RY) * FY + RY * AY) / 6
    }
    VY(lY, MY, {
      copy(YY) {
        return Object.assign(new this.constructor, this, YY)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: dY,
      formatHex: dY,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return UY(this).formatHsl()
      },
      formatRgb: JY,
      toString: JY
    }), VY(qY, XY, SY(lY, {
      brighter(YY) {
        return YY = null == YY ? eY : Math.pow(eY, YY), new qY(this.r * YY, this.g * YY, this.b * YY, this.opacity)
      },
      darker(YY) {
        return YY = null == YY ? TY : Math.pow(TY, YY), new qY(this.r * YY, this.g * YY, this.b * YY, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new qY(xY(this.r), xY(this.g), xY(this.b), GY(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: pY,
      formatHex: pY,
      formatHex8: function() {
        return `#${nY(this.r)}${nY(this.g)}${nY(this.b)}${nY(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: kY,
      toString: kY
    })), VY(LY, (function(YY, rY, DY, FY) {
      return 1 === arguments.length ? UY(YY) : new LY(YY, rY, DY, null == FY ? 1 : FY)
    }), SY(lY, {
      brighter(YY) {
        return YY = null == YY ? eY : Math.pow(eY, YY), new LY(this.h, this.s, this.l * YY, this.opacity)
      },
      darker(YY) {
        return YY = null == YY ? TY : Math.pow(TY, YY), new LY(this.h, this.s, this.l * YY, this.opacity)
      },
      rgb() {
        var YY = this.h % 360 + 360 * (this.h < 0),
          rY = isNaN(YY) || isNaN(this.s) ? 0 : this.s,
          DY = this.l,
          FY = DY + (DY < .5 ? DY : 1 - DY) * rY,
          AY = 2 * DY - FY;
        return new qY(rr(YY >= 240 ? YY - 240 : YY + 120, AY, FY), rr(YY, AY, FY), rr(YY < 120 ? YY + 240 : YY - 120, AY, FY), this.opacity)
      },
      clamp() {
        return new LY(tY(this.h), Yr(this.s), Yr(this.l), GY(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const YY = GY(this.opacity);
        return `${1===YY?"hsl(":"hsla("}${tY(this.h)}, ${100*Yr(this.s)}%, ${100*Yr(this.l)}%${1===YY?")":`, ${YY})`}`
      }
    }));
    const Fr = YY => () => YY;

    function Ar(YY, rY) {
      return function(DY) {
        return YY + DY * rY
      }
    }

    function Ir(YY) {
      return 1 === (YY = +YY) ? Rr : function(rY, DY) {
        return DY - rY ? function(YY, rY, DY) {
          return YY = Math.pow(YY, DY), rY = Math.pow(rY, DY) - YY, DY = 1 / DY,
            function(FY) {
              return Math.pow(YY + FY * rY, DY)
            }
        }(rY, DY, YY) : Fr(isNaN(rY) ? DY : rY)
      }
    }

    function Rr(YY, rY) {
      var DY = rY - YY;
      return DY ? Ar(YY, DY) : Fr(isNaN(YY) ? rY : YY)
    }
    const Or = function YY(rY) {
      var DY = Ir(rY);

      function FY(YY, rY) {
        var FY = DY((YY = XY(YY)).r, (rY = XY(rY)).r),
          AY = DY(YY.g, rY.g),
          IY = DY(YY.b, rY.b),
          RY = Rr(YY.opacity, rY.opacity);
        return function(rY) {
          return YY.r = FY(rY), YY.g = AY(rY), YY.b = IY(rY), YY.opacity = RY(rY), YY + ""
        }
      }
      return FY.gamma = YY, FY
    }(1);

    function gr(YY) {
      return function(rY) {
        var DY, FY, AY = rY.length,
          IY = new Array(AY),
          RY = new Array(AY),
          OY = new Array(AY);
        for (DY = 0; DY < AY; ++DY) FY = XY(rY[DY]), IY[DY] = FY.r || 0, RY[DY] = FY.g || 0, OY[DY] = FY.b || 0;
        return IY = YY(IY), RY = YY(RY), OY = YY(OY), FY.opacity = 1,
          function(YY) {
            return FY.r = IY(YY), FY.g = RY(YY), FY.b = OY(YY), FY + ""
          }
      }
    }
    gr((function(YY) {
      var rY = YY.length - 1;
      return function(DY) {
        var FY = DY <= 0 ? DY = 0 : DY >= 1 ? (DY = 1, rY - 1) : Math.floor(DY * rY),
          AY = YY[FY],
          IY = YY[FY + 1],
          RY = FY > 0 ? YY[FY - 1] : 2 * AY - IY,
          OY = FY < rY - 1 ? YY[FY + 2] : 2 * IY - AY;
        return Dr((DY - FY / rY) * rY, RY, AY, IY, OY)
      }
    })), gr((function(YY) {
      var rY = YY.length;
      return function(DY) {
        var FY = Math.floor(((DY %= 1) < 0 ? ++DY : DY) * rY),
          AY = YY[(FY + rY - 1) % rY],
          IY = YY[FY % rY],
          RY = YY[(FY + 1) % rY],
          OY = YY[(FY + 2) % rY];
        return Dr((DY - FY / rY) * rY, AY, IY, RY, OY)
      }
    }));

    function ar(YY, rY) {
      var DY, FY = rY ? rY.length : 0,
        AY = YY ? Math.min(FY, YY.length) : 0,
        IY = new Array(AY),
        RY = new Array(FY);
      for (DY = 0; DY < AY; ++DY) IY[DY] = Wr(YY[DY], rY[DY]);
      for (; DY < FY; ++DY) RY[DY] = rY[DY];
      return function(YY) {
        for (DY = 0; DY < AY; ++DY) RY[DY] = IY[DY](YY);
        return RY
      }
    }

    function vr(YY, rY) {
      var DY = new Date;
      return YY = +YY, rY = +rY,
        function(FY) {
          return DY.setTime(YY * (1 - FY) + rY * FY), DY
        }
    }

    function ur(YY, rY) {
      return YY = +YY, rY = +rY,
        function(DY) {
          return YY * (1 - DY) + rY * DY
        }
    }

    function sr(YY, rY) {
      var DY, FY = {},
        AY = {};
      for (DY in null !== YY && "object" === typeof YY || (YY = {}), null !== rY && "object" === typeof rY || (rY = {}), rY) DY in YY ? FY[DY] = Wr(YY[DY], rY[DY]) : AY[DY] = rY[DY];
      return function(YY) {
        for (DY in FY) AY[DY] = FY[DY](YY);
        return AY
      }
    }
    var ir = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      yr = new RegExp(ir.source, "g");

    function Qr(YY, rY) {
      var DY, FY, AY, IY = ir.lastIndex = yr.lastIndex = 0,
        RY = -1,
        OY = [],
        gY = [];
      for (YY += "", rY += "";
        (DY = ir.exec(YY)) && (FY = yr.exec(rY));)(AY = FY.index) > IY && (AY = rY.slice(IY, AY), OY[RY] ? OY[RY] += AY : OY[++RY] = AY), (DY = DY[0]) === (FY = FY[0]) ? OY[RY] ? OY[RY] += FY : OY[++RY] = FY : (OY[++RY] = null, gY.push({
        i: RY,
        x: ur(DY, FY)
      })), IY = yr.lastIndex;
      return IY < rY.length && (AY = rY.slice(IY), OY[RY] ? OY[RY] += AY : OY[++RY] = AY), OY.length < 2 ? gY[0] ? function(YY) {
        return function(rY) {
          return YY(rY) + ""
        }
      }(gY[0].x) : function(YY) {
        return function() {
          return YY
        }
      }(rY) : (rY = gY.length, function(YY) {
        for (var DY, FY = 0; FY < rY; ++FY) OY[(DY = gY[FY]).i] = DY.x(YY);
        return OY.join("")
      })
    }

    function or(YY, rY) {
      rY || (rY = []);
      var DY, FY = YY ? Math.min(rY.length, YY.length) : 0,
        AY = rY.slice();
      return function(IY) {
        for (DY = 0; DY < FY; ++DY) AY[DY] = YY[DY] * (1 - IY) + rY[DY] * IY;
        return AY
      }
    }

    function Wr(YY, rY) {
      var DY, FY, AY = typeof rY;
      return null == rY || "boolean" === AY ? Fr(rY) : ("number" === AY ? ur : "string" === AY ? (DY = MY(rY)) ? (rY = DY, Or) : Qr : rY instanceof MY ? Or : rY instanceof Date ? vr : (FY = rY, !ArrayBuffer.isView(FY) || FY instanceof DataView ? Array.isArray(rY) ? ar : "function" !== typeof rY.valueOf && "function" !== typeof rY.toString || isNaN(rY) ? sr : ur : or))(YY, rY)
    }

    function Er(YY, rY) {
      return YY = +YY, rY = +rY,
        function(DY) {
          return Math.round(YY * (1 - DY) + rY * DY)
        }
    }

    function mr(YY) {
      return +YY
    }
    var Vr = [0, 1];

    function Sr(YY) {
      return YY
    }

    function lr(YY, rY) {
      return (rY -= YY = +YY) ? function(DY) {
        return (DY - YY) / rY
      } : (DY = isNaN(rY) ? NaN : .5, function() {
        return DY
      });
      var DY
    }

    function Tr(YY, rY, DY) {
      var FY = YY[0],
        AY = YY[1],
        IY = rY[0],
        RY = rY[1];
      return AY < FY ? (FY = lr(AY, FY), IY = DY(RY, IY)) : (FY = lr(FY, AY), IY = DY(IY, RY)),
        function(YY) {
          return IY(FY(YY))
        }
    }

    function er(YY, rY, DY) {
      var FY = Math.min(YY.length, rY.length) - 1,
        AY = new Array(FY),
        IY = new Array(FY),
        RY = -1;
      for (YY[FY] < YY[0] && (YY = YY.slice().reverse(), rY = rY.slice().reverse()); ++RY < FY;) AY[RY] = lr(YY[RY], YY[RY + 1]), IY[RY] = DY(rY[RY], rY[RY + 1]);
      return function(rY) {
        var DY = mY(YY, rY, 1, FY) - 1;
        return IY[DY](AY[DY](rY))
      }
    }

    function Nr(YY, rY) {
      return rY.domain(YY.domain()).range(YY.range()).interpolate(YY.interpolate()).clamp(YY.clamp()).unknown(YY.unknown())
    }

    function Br() {
      var YY, rY, DY, FY, AY, IY, RY = Vr,
        OY = Vr,
        gY = Wr,
        aY = Sr;

      function vY() {
        var YY = Math.min(RY.length, OY.length);
        return aY !== Sr && (aY = function(YY, rY) {
          var DY;
          return YY > rY && (DY = YY, YY = rY, rY = DY),
            function(DY) {
              return Math.max(YY, Math.min(rY, DY))
            }
        }(RY[0], RY[YY - 1])), FY = YY > 2 ? er : Tr, AY = IY = null, uY
      }

      function uY(rY) {
        return null == rY || isNaN(rY = +rY) ? DY : (AY || (AY = FY(RY.map(YY), OY, gY)))(YY(aY(rY)))
      }
      return uY.invert = function(DY) {
          return aY(rY((IY || (IY = FY(OY, RY.map(YY), ur)))(DY)))
        }, uY.domain = function(YY) {
          return arguments.length ? (RY = Array.from(YY, mr), vY()) : RY.slice()
        }, uY.range = function(YY) {
          return arguments.length ? (OY = Array.from(YY), vY()) : OY.slice()
        }, uY.rangeRound = function(YY) {
          return OY = Array.from(YY), gY = Er, vY()
        }, uY.clamp = function(YY) {
          return arguments.length ? (aY = !!YY || Sr, vY()) : aY !== Sr
        }, uY.interpolate = function(YY) {
          return arguments.length ? (gY = YY, vY()) : gY
        }, uY.unknown = function(YY) {
          return arguments.length ? (DY = YY, uY) : DY
        },
        function(DY, FY) {
          return YY = DY, rY = FY, vY()
        }
    }

    function cr() {
      return Br()(Sr, Sr)
    }
    var Kr, Hr = DY(5719),
      zr = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Zr(YY) {
      if (!(rY = zr.exec(YY))) throw new Error("invalid format: " + YY);
      var rY;
      return new Cr({
        fill: rY[1],
        align: rY[2],
        sign: rY[3],
        symbol: rY[4],
        zero: rY[5],
        width: rY[6],
        comma: rY[7],
        precision: rY[8] && rY[8].slice(1),
        trim: rY[9],
        type: rY[10]
      })
    }

    function Cr(YY) {
      this.fill = void 0 === YY.fill ? " " : YY.fill + "", this.align = void 0 === YY.align ? ">" : YY.align + "", this.sign = void 0 === YY.sign ? "-" : YY.sign + "", this.symbol = void 0 === YY.symbol ? "" : YY.symbol + "", this.zero = !!YY.zero, this.width = void 0 === YY.width ? void 0 : +YY.width, this.comma = !!YY.comma, this.precision = void 0 === YY.precision ? void 0 : +YY.precision, this.trim = !!YY.trim, this.type = void 0 === YY.type ? "" : YY.type + ""
    }

    function fr(YY, rY) {
      if (!isFinite(YY) || 0 === YY) return null;
      var DY = (YY = rY ? YY.toExponential(rY - 1) : YY.toExponential()).indexOf("e"),
        FY = YY.slice(0, DY);
      return [FY.length > 1 ? FY[0] + FY.slice(2) : FY, +YY.slice(DY + 1)]
    }

    function jr(YY) {
      return (YY = fr(Math.abs(YY))) ? YY[1] : NaN
    }

    function hr(YY, rY) {
      var DY = fr(YY, rY);
      if (!DY) return YY + "";
      var FY = DY[0],
        AY = DY[1];
      return AY < 0 ? "0." + new Array(-AY).join("0") + FY : FY.length > AY + 1 ? FY.slice(0, AY + 1) + "." + FY.slice(AY + 1) : FY + new Array(AY - FY.length + 2).join("0")
    }
    Zr.prototype = Cr.prototype, Cr.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const dr = {
      "%": (YY, rY) => (100 * YY).toFixed(rY),
      b: YY => Math.round(YY).toString(2),
      c: YY => YY + "",
      d: function(YY) {
        return Math.abs(YY = Math.round(YY)) >= 1e21 ? YY.toLocaleString("en").replace(/,/g, "") : YY.toString(10)
      },
      e: (YY, rY) => YY.toExponential(rY),
      f: (YY, rY) => YY.toFixed(rY),
      g: (YY, rY) => YY.toPrecision(rY),
      o: YY => Math.round(YY).toString(8),
      p: (YY, rY) => hr(100 * YY, rY),
      r: hr,
      s: function(YY, rY) {
        var DY = fr(YY, rY);
        if (!DY) return Kr = void 0, YY.toPrecision(rY);
        var FY = DY[0],
          AY = DY[1],
          IY = AY - (Kr = 3 * Math.max(-8, Math.min(8, Math.floor(AY / 3)))) + 1,
          RY = FY.length;
        return IY === RY ? FY : IY > RY ? FY + new Array(IY - RY + 1).join("0") : IY > 0 ? FY.slice(0, IY) + "." + FY.slice(IY) : "0." + new Array(1 - IY).join("0") + fr(YY, Math.max(0, rY + IY - 1))[0]
      },
      X: YY => Math.round(YY).toString(16).toUpperCase(),
      x: YY => Math.round(YY).toString(16)
    };

    function Jr(YY) {
      return YY
    }
    var Mr, wr, br, Xr = Array.prototype.map,
      qr = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function pr(YY) {
      var rY, DY, FY = void 0 === YY.grouping || void 0 === YY.thousands ? Jr : (rY = Xr.call(YY.grouping, Number), DY = YY.thousands + "", function(YY, FY) {
          for (var AY = YY.length, IY = [], RY = 0, OY = rY[0], gY = 0; AY > 0 && OY > 0 && (gY + OY + 1 > FY && (OY = Math.max(1, FY - gY)), IY.push(YY.substring(AY -= OY, AY + OY)), !((gY += OY + 1) > FY));) OY = rY[RY = (RY + 1) % rY.length];
          return IY.reverse().join(DY)
        }),
        AY = void 0 === YY.currency ? "" : YY.currency[0] + "",
        IY = void 0 === YY.currency ? "" : YY.currency[1] + "",
        RY = void 0 === YY.decimal ? "." : YY.decimal + "",
        OY = void 0 === YY.numerals ? Jr : function(YY) {
          return function(rY) {
            return rY.replace(/[0-9]/g, (function(rY) {
              return YY[+rY]
            }))
          }
        }(Xr.call(YY.numerals, String)),
        gY = void 0 === YY.percent ? "%" : YY.percent + "",
        aY = void 0 === YY.minus ? "\u2212" : YY.minus + "",
        vY = void 0 === YY.nan ? "NaN" : YY.nan + "";

      function uY(YY, rY) {
        var DY = (YY = Zr(YY)).fill,
          uY = YY.align,
          sY = YY.sign,
          iY = YY.symbol,
          yY = YY.zero,
          QY = YY.width,
          oY = YY.comma,
          WY = YY.precision,
          EY = YY.trim,
          mY = YY.type;
        "n" === mY ? (oY = !0, mY = "g") : dr[mY] || (void 0 === WY && (WY = 12), EY = !0, mY = "g"), (yY || "0" === DY && "=" === uY) && (yY = !0, DY = "0", uY = "=");
        var VY = (rY && void 0 !== rY.prefix ? rY.prefix : "") + ("$" === iY ? AY : "#" === iY && /[boxX]/.test(mY) ? "0" + mY.toLowerCase() : ""),
          SY = ("$" === iY ? IY : /[%p]/.test(mY) ? gY : "") + (rY && void 0 !== rY.suffix ? rY.suffix : ""),
          lY = dr[mY],
          TY = /[defgprs%]/.test(mY);

        function eY(YY) {
          var rY, AY, IY, gY = VY,
            iY = SY;
          if ("c" === mY) iY = lY(YY) + iY, YY = "";
          else {
            var eY = (YY = +YY) < 0 || 1 / YY < 0;
            if (YY = isNaN(YY) ? vY : lY(Math.abs(YY), WY), EY && (YY = function(YY) {
                YY: for (var rY, DY = YY.length, FY = 1, AY = -1; FY < DY; ++FY) switch (YY[FY]) {
                  case ".":
                    AY = rY = FY;
                    break;
                  case "0":
                    0 === AY && (AY = FY), rY = FY;
                    break;
                  default:
                    if (!+YY[FY]) break YY;
                    AY > 0 && (AY = 0)
                }
                return AY > 0 ? YY.slice(0, AY) + YY.slice(rY + 1) : YY
              }(YY)), eY && 0 === +YY && "+" !== sY && (eY = !1), gY = (eY ? "(" === sY ? sY : aY : "-" === sY || "(" === sY ? "" : sY) + gY, iY = ("s" !== mY || isNaN(YY) || void 0 === Kr ? "" : qr[8 + Kr / 3]) + iY + (eY && "(" === sY ? ")" : ""), TY)
              for (rY = -1, AY = YY.length; ++rY < AY;)
                if (48 > (IY = YY.charCodeAt(rY)) || IY > 57) {
                  iY = (46 === IY ? RY + YY.slice(rY + 1) : YY.slice(rY)) + iY, YY = YY.slice(0, rY);
                  break
                }
          }
          oY && !yY && (YY = FY(YY, 1 / 0));
          var NY = gY.length + YY.length + iY.length,
            BY = NY < QY ? new Array(QY - NY + 1).join(DY) : "";
          switch (oY && yY && (YY = FY(BY + YY, BY.length ? QY - iY.length : 1 / 0), BY = ""), uY) {
            case "<":
              YY = gY + YY + iY + BY;
              break;
            case "=":
              YY = gY + BY + YY + iY;
              break;
            case "^":
              YY = BY.slice(0, NY = BY.length >> 1) + gY + YY + iY + BY.slice(NY);
              break;
            default:
              YY = BY + gY + YY + iY
          }
          return OY(YY)
        }
        return WY = void 0 === WY ? 6 : /[gprs]/.test(mY) ? Math.max(1, Math.min(21, WY)) : Math.max(0, Math.min(20, WY)), eY.toString = function() {
          return YY + ""
        }, eY
      }
      return {
        format: uY,
        formatPrefix: function(YY, rY) {
          var DY = 3 * Math.max(-8, Math.min(8, Math.floor(jr(rY) / 3))),
            FY = Math.pow(10, -DY),
            AY = uY(((YY = Zr(YY)).type = "f", YY), {
              suffix: qr[8 + DY / 3]
            });
          return function(YY) {
            return AY(FY * YY)
          }
        }
      }
    }

    function kr(YY, rY, DY, FY) {
      var AY, IY = uY(YY, rY, DY);
      switch ((FY = Zr(null == FY ? ",f" : FY)).type) {
        case "s":
          var RY = Math.max(Math.abs(YY), Math.abs(rY));
          return null != FY.precision || isNaN(AY = function(YY, rY) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(jr(rY) / 3))) - jr(Math.abs(YY)))
          }(IY, RY)) || (FY.precision = AY), br(FY, RY);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != FY.precision || isNaN(AY = function(YY, rY) {
            return YY = Math.abs(YY), rY = Math.abs(rY) - YY, Math.max(0, jr(rY) - jr(YY)) + 1
          }(IY, Math.max(Math.abs(YY), Math.abs(rY)))) || (FY.precision = AY - ("e" === FY.type));
          break;
        case "f":
        case "%":
          null != FY.precision || isNaN(AY = function(YY) {
            return Math.max(0, -jr(Math.abs(YY)))
          }(IY)) || (FY.precision = AY - 2 * ("%" === FY.type))
      }
      return wr(FY)
    }

    function Gr(YY) {
      var rY = YY.domain;
      return YY.ticks = function(YY) {
        var DY = rY();
        return aY(DY[0], DY[DY.length - 1], null == YY ? 10 : YY)
      }, YY.tickFormat = function(YY, DY) {
        var FY = rY();
        return kr(FY[0], FY[FY.length - 1], null == YY ? 10 : YY, DY)
      }, YY.nice = function(DY) {
        null == DY && (DY = 10);
        var FY, AY, IY = rY(),
          RY = 0,
          OY = IY.length - 1,
          gY = IY[RY],
          aY = IY[OY],
          uY = 10;
        for (aY < gY && (AY = gY, gY = aY, aY = AY, AY = RY, RY = OY, OY = AY); uY-- > 0;) {
          if ((AY = vY(gY, aY, DY)) === FY) return IY[RY] = gY, IY[OY] = aY, rY(IY);
          if (AY > 0) gY = Math.floor(gY / AY) * AY, aY = Math.ceil(aY / AY) * AY;
          else {
            if (!(AY < 0)) break;
            gY = Math.ceil(gY * AY) / AY, aY = Math.floor(aY * AY) / AY
          }
          FY = AY
        }
        return YY
      }, YY
    }

    function xr() {
      var YY = cr();
      return YY.copy = function() {
        return Nr(YY, xr())
      }, Hr.g.apply(YY, arguments), Gr(YY)
    }

    function nr(YY) {
      var rY;

      function DY(YY) {
        return null == YY || isNaN(YY = +YY) ? rY : YY
      }
      return DY.invert = DY, DY.domain = DY.range = function(rY) {
        return arguments.length ? (YY = Array.from(rY, mr), DY) : YY.slice()
      }, DY.unknown = function(YY) {
        return arguments.length ? (rY = YY, DY) : rY
      }, DY.copy = function() {
        return nr(YY).unknown(rY)
      }, YY = arguments.length ? Array.from(YY, mr) : [0, 1], Gr(DY)
    }

    function Pr(YY, rY) {
      var DY, FY = 0,
        AY = (YY = YY.slice()).length - 1,
        IY = YY[FY],
        RY = YY[AY];
      return RY < IY && (DY = FY, FY = AY, AY = DY, DY = IY, IY = RY, RY = DY), YY[FY] = rY.floor(IY), YY[AY] = rY.ceil(RY), YY
    }

    function Ur(YY) {
      return Math.log(YY)
    }

    function Lr(YY) {
      return Math.exp(YY)
    }

    function tr(YY) {
      return -Math.log(-YY)
    }

    function YD(YY) {
      return -Math.exp(-YY)
    }

    function rD(YY) {
      return isFinite(YY) ? +("1e" + YY) : YY < 0 ? 0 : YY
    }

    function DD(YY) {
      return (rY, DY) => -YY(-rY, DY)
    }

    function FD(YY) {
      const rY = YY(Ur, Lr),
        DY = rY.domain;
      let FY, AY, IY = 10;

      function RY() {
        return FY = function(YY) {
          return YY === Math.E ? Math.log : 10 === YY && Math.log10 || 2 === YY && Math.log2 || (YY = Math.log(YY), rY => Math.log(rY) / YY)
        }(IY), AY = function(YY) {
          return 10 === YY ? rD : YY === Math.E ? Math.exp : rY => Math.pow(YY, rY)
        }(IY), DY()[0] < 0 ? (FY = DD(FY), AY = DD(AY), YY(tr, YD)) : YY(Ur, Lr), rY
      }
      return rY.base = function(YY) {
        return arguments.length ? (IY = +YY, RY()) : IY
      }, rY.domain = function(YY) {
        return arguments.length ? (DY(YY), RY()) : DY()
      }, rY.ticks = YY => {
        const rY = DY();
        let RY = rY[0],
          OY = rY[rY.length - 1];
        const gY = OY < RY;
        gY && ([RY, OY] = [OY, RY]);
        let vY, uY, sY = FY(RY),
          iY = FY(OY);
        const yY = null == YY ? 10 : +YY;
        let QY = [];
        if (!(IY % 1) && iY - sY < yY) {
          if (sY = Math.floor(sY), iY = Math.ceil(iY), RY > 0) {
            for (; sY <= iY; ++sY)
              for (vY = 1; vY < IY; ++vY)
                if (uY = sY < 0 ? vY / AY(-sY) : vY * AY(sY), !(uY < RY)) {
                  if (uY > OY) break;
                  QY.push(uY)
                }
          } else
            for (; sY <= iY; ++sY)
              for (vY = IY - 1; vY >= 1; --vY)
                if (uY = sY > 0 ? vY / AY(-sY) : vY * AY(sY), !(uY < RY)) {
                  if (uY > OY) break;
                  QY.push(uY)
                } 2 * QY.length < yY && (QY = aY(RY, OY, yY))
        } else QY = aY(sY, iY, Math.min(iY - sY, yY)).map(AY);
        return gY ? QY.reverse() : QY
      }, rY.tickFormat = (YY, DY) => {
        if (null == YY && (YY = 10), null == DY && (DY = 10 === IY ? "s" : ","), "function" !== typeof DY && (IY % 1 || null != (DY = Zr(DY)).precision || (DY.trim = !0), DY = wr(DY)), YY === 1 / 0) return DY;
        const RY = Math.max(1, IY * YY / rY.ticks().length);
        return YY => {
          let rY = YY / AY(Math.round(FY(YY)));
          return rY * IY < IY - .5 && (rY *= IY), rY <= RY ? DY(YY) : ""
        }
      }, rY.nice = () => DY(Pr(DY(), {
        floor: YY => AY(Math.floor(FY(YY))),
        ceil: YY => AY(Math.ceil(FY(YY)))
      })), rY
    }

    function AD() {
      const YY = FD(Br()).domain([1, 10]);
      return YY.copy = () => Nr(YY, AD()).base(YY.base()), Hr.g.apply(YY, arguments), YY
    }

    function ID(YY) {
      return function(rY) {
        return Math.sign(rY) * Math.log1p(Math.abs(rY / YY))
      }
    }

    function RD(YY) {
      return function(rY) {
        return Math.sign(rY) * Math.expm1(Math.abs(rY)) * YY
      }
    }

    function OD(YY) {
      var rY = 1,
        DY = YY(ID(rY), RD(rY));
      return DY.constant = function(DY) {
        return arguments.length ? YY(ID(rY = +DY), RD(rY)) : rY
      }, Gr(DY)
    }

    function gD() {
      var YY = OD(Br());
      return YY.copy = function() {
        return Nr(YY, gD()).constant(YY.constant())
      }, Hr.g.apply(YY, arguments)
    }
    Mr = pr({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), wr = Mr.format, br = Mr.formatPrefix;
    var aD = DY(5721);

    function vD(YY) {
      return function(rY) {
        return rY < 0 ? -Math.pow(-rY, YY) : Math.pow(rY, YY)
      }
    }

    function uD(YY) {
      return YY < 0 ? -Math.sqrt(-YY) : Math.sqrt(YY)
    }

    function sD(YY) {
      return YY < 0 ? -YY * YY : YY * YY
    }

    function iD(YY) {
      var rY = YY(Sr, Sr),
        DY = 1;
      return rY.exponent = function(rY) {
        return arguments.length ? 1 === (DY = +rY) ? YY(Sr, Sr) : .5 === DY ? YY(uD, sD) : YY(vD(DY), vD(1 / DY)) : DY
      }, Gr(rY)
    }

    function yD() {
      var YY = iD(Br());
      return YY.copy = function() {
        return Nr(YY, yD()).exponent(YY.exponent())
      }, Hr.g.apply(YY, arguments), YY
    }

    function QD() {
      return yD.apply(null, arguments).exponent(.5)
    }

    function oD(YY) {
      return Math.sign(YY) * YY * YY
    }

    function WD() {
      var YY, rY = cr(),
        DY = [0, 1],
        FY = !1;

      function AY(DY) {
        var AY = function(YY) {
          return Math.sign(YY) * Math.sqrt(Math.abs(YY))
        }(rY(DY));
        return isNaN(AY) ? YY : FY ? Math.round(AY) : AY
      }
      return AY.invert = function(YY) {
        return rY.invert(oD(YY))
      }, AY.domain = function(YY) {
        return arguments.length ? (rY.domain(YY), AY) : rY.domain()
      }, AY.range = function(YY) {
        return arguments.length ? (rY.range((DY = Array.from(YY, mr)).map(oD)), AY) : DY.slice()
      }, AY.rangeRound = function(YY) {
        return AY.range(YY).round(!0)
      }, AY.round = function(YY) {
        return arguments.length ? (FY = !!YY, AY) : FY
      }, AY.clamp = function(YY) {
        return arguments.length ? (rY.clamp(YY), AY) : rY.clamp()
      }, AY.unknown = function(rY) {
        return arguments.length ? (YY = rY, AY) : YY
      }, AY.copy = function() {
        return WD(rY.domain(), DY).round(FY).clamp(rY.clamp()).unknown(YY)
      }, Hr.g.apply(AY, arguments), Gr(AY)
    }

    function ED(YY, rY) {
      let DY;
      if (void 0 === rY)
        for (const FY of YY) null != FY && (DY < FY || void 0 === DY && FY >= FY) && (DY = FY);
      else {
        let FY = -1;
        for (let AY of YY) null != (AY = rY(AY, ++FY, YY)) && (DY < AY || void 0 === DY && AY >= AY) && (DY = AY)
      }
      return DY
    }

    function mD(YY, rY) {
      let DY;
      if (void 0 === rY)
        for (const FY of YY) null != FY && (DY > FY || void 0 === DY && FY >= FY) && (DY = FY);
      else {
        let FY = -1;
        for (let AY of YY) null != (AY = rY(AY, ++FY, YY)) && (DY > AY || void 0 === DY && AY >= AY) && (DY = AY)
      }
      return DY
    }

    function VD() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sY;
      if (YY === sY) return SD;
      if ("function" !== typeof YY) throw new TypeError("compare is not a function");
      return (rY, DY) => {
        const FY = YY(rY, DY);
        return FY || 0 === FY ? FY : (0 === YY(DY, DY)) - (0 === YY(rY, rY))
      }
    }

    function SD(YY, rY) {
      return (null == YY || !(YY >= YY)) - (null == rY || !(rY >= rY)) || (YY < rY ? -1 : YY > rY ? 1 : 0)
    }

    function lD(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        AY = arguments.length > 4 ? arguments[4] : void 0;
      if (rY = Math.floor(rY), DY = Math.floor(Math.max(0, DY)), FY = Math.floor(Math.min(YY.length - 1, FY)), !(DY <= rY && rY <= FY)) return YY;
      for (AY = void 0 === AY ? SD : VD(AY); FY > DY;) {
        if (FY - DY > 600) {
          const IY = FY - DY + 1,
            RY = rY - DY + 1,
            OY = Math.log(IY),
            gY = .5 * Math.exp(2 * OY / 3),
            aY = .5 * Math.sqrt(OY * gY * (IY - gY) / IY) * (RY - IY / 2 < 0 ? -1 : 1);
          lD(YY, rY, Math.max(DY, Math.floor(rY - RY * gY / IY + aY)), Math.min(FY, Math.floor(rY + (IY - RY) * gY / IY + aY)), AY)
        }
        const IY = YY[rY];
        let RY = DY,
          OY = FY;
        for (TD(YY, DY, rY), AY(YY[FY], IY) > 0 && TD(YY, DY, FY); RY < OY;) {
          for (TD(YY, RY, OY), ++RY, --OY; AY(YY[RY], IY) < 0;) ++RY;
          for (; AY(YY[OY], IY) > 0;) --OY
        }
        0 === AY(YY[DY], IY) ? TD(YY, DY, OY) : (++OY, TD(YY, OY, FY)), OY <= rY && (DY = OY + 1), rY <= OY && (FY = OY - 1)
      }
      return YY
    }

    function TD(YY, rY, DY) {
      const FY = YY[rY];
      YY[rY] = YY[DY], YY[DY] = FY
    }

    function eD(YY, rY, DY) {
      if (YY = Float64Array.from(function*(YY, rY) {
          if (void 0 === rY)
            for (let DY of YY) null != DY && (DY = +DY) >= DY && (yield DY);
          else {
            let DY = -1;
            for (let FY of YY) null != (FY = rY(FY, ++DY, YY)) && (FY = +FY) >= FY && (yield FY)
          }
        }(YY, DY)), (FY = YY.length) && !isNaN(rY = +rY)) {
        if (rY <= 0 || FY < 2) return mD(YY);
        if (rY >= 1) return ED(YY);
        var FY, AY = (FY - 1) * rY,
          IY = Math.floor(AY),
          RY = ED(lD(YY, IY).subarray(0, IY + 1));
        return RY + (mD(YY.subarray(IY + 1)) - RY) * (AY - IY)
      }
    }

    function ND(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oY;
      if ((FY = YY.length) && !isNaN(rY = +rY)) {
        if (rY <= 0 || FY < 2) return +DY(YY[0], 0, YY);
        if (rY >= 1) return +DY(YY[FY - 1], FY - 1, YY);
        var FY, AY = (FY - 1) * rY,
          IY = Math.floor(AY),
          RY = +DY(YY[IY], IY, YY);
        return RY + (+DY(YY[IY + 1], IY + 1, YY) - RY) * (AY - IY)
      }
    }

    function BD() {
      var YY, rY = [],
        DY = [],
        FY = [];

      function AY() {
        var YY = 0,
          AY = Math.max(1, DY.length);
        for (FY = new Array(AY - 1); ++YY < AY;) FY[YY - 1] = ND(rY, YY / AY);
        return IY
      }

      function IY(rY) {
        return null == rY || isNaN(rY = +rY) ? YY : DY[mY(FY, rY)]
      }
      return IY.invertExtent = function(YY) {
        var AY = DY.indexOf(YY);
        return AY < 0 ? [NaN, NaN] : [AY > 0 ? FY[AY - 1] : rY[0], AY < FY.length ? FY[AY] : rY[rY.length - 1]]
      }, IY.domain = function(YY) {
        if (!arguments.length) return rY.slice();
        rY = [];
        for (let DY of YY) null == DY || isNaN(DY = +DY) || rY.push(DY);
        return rY.sort(sY), AY()
      }, IY.range = function(YY) {
        return arguments.length ? (DY = Array.from(YY), AY()) : DY.slice()
      }, IY.unknown = function(rY) {
        return arguments.length ? (YY = rY, IY) : YY
      }, IY.quantiles = function() {
        return FY.slice()
      }, IY.copy = function() {
        return BD().domain(rY).range(DY).unknown(YY)
      }, Hr.g.apply(IY, arguments)
    }

    function cD() {
      var YY, rY = 0,
        DY = 1,
        FY = 1,
        AY = [.5],
        IY = [0, 1];

      function RY(rY) {
        return null != rY && rY <= rY ? IY[mY(AY, rY, 0, FY)] : YY
      }

      function OY() {
        var YY = -1;
        for (AY = new Array(FY); ++YY < FY;) AY[YY] = ((YY + 1) * DY - (YY - FY) * rY) / (FY + 1);
        return RY
      }
      return RY.domain = function(YY) {
        return arguments.length ? ([rY, DY] = YY, rY = +rY, DY = +DY, OY()) : [rY, DY]
      }, RY.range = function(YY) {
        return arguments.length ? (FY = (IY = Array.from(YY)).length - 1, OY()) : IY.slice()
      }, RY.invertExtent = function(YY) {
        var RY = IY.indexOf(YY);
        return RY < 0 ? [NaN, NaN] : RY < 1 ? [rY, AY[0]] : RY >= FY ? [AY[FY - 1], DY] : [AY[RY - 1], AY[RY]]
      }, RY.unknown = function(rY) {
        return arguments.length ? (YY = rY, RY) : RY
      }, RY.thresholds = function() {
        return AY.slice()
      }, RY.copy = function() {
        return cD().domain([rY, DY]).range(IY).unknown(YY)
      }, Hr.g.apply(Gr(RY), arguments)
    }

    function KD() {
      var YY, rY = [.5],
        DY = [0, 1],
        FY = 1;

      function AY(AY) {
        return null != AY && AY <= AY ? DY[mY(rY, AY, 0, FY)] : YY
      }
      return AY.domain = function(YY) {
        return arguments.length ? (rY = Array.from(YY), FY = Math.min(rY.length, DY.length - 1), AY) : rY.slice()
      }, AY.range = function(YY) {
        return arguments.length ? (DY = Array.from(YY), FY = Math.min(rY.length, DY.length - 1), AY) : DY.slice()
      }, AY.invertExtent = function(YY) {
        var FY = DY.indexOf(YY);
        return [rY[FY - 1], rY[FY]]
      }, AY.unknown = function(rY) {
        return arguments.length ? (YY = rY, AY) : YY
      }, AY.copy = function() {
        return KD().domain(rY).range(DY).unknown(YY)
      }, Hr.g.apply(AY, arguments)
    }
    const HD = 1e3,
      zD = 6e4,
      ZD = 36e5,
      CD = 864e5,
      fD = 6048e5,
      jD = 2592e6,
      hD = 31536e6,
      dD = new Date,
      JD = new Date;

    function MD(YY, rY, DY, FY) {
      function AY(rY) {
        return YY(rY = 0 === arguments.length ? new Date : new Date(+rY)), rY
      }
      return AY.floor = rY => (YY(rY = new Date(+rY)), rY), AY.ceil = DY => (YY(DY = new Date(DY - 1)), rY(DY, 1), YY(DY), DY), AY.round = YY => {
        const rY = AY(YY),
          DY = AY.ceil(YY);
        return YY - rY < DY - YY ? rY : DY
      }, AY.offset = (YY, DY) => (rY(YY = new Date(+YY), null == DY ? 1 : Math.floor(DY)), YY), AY.range = (DY, FY, IY) => {
        const RY = [];
        if (DY = AY.ceil(DY), IY = null == IY ? 1 : Math.floor(IY), !(DY < FY) || !(IY > 0)) return RY;
        let OY;
        do {
          RY.push(OY = new Date(+DY)), rY(DY, IY), YY(DY)
        } while (OY < DY && DY < FY);
        return RY
      }, AY.filter = DY => MD((rY => {
        if (rY >= rY)
          for (; YY(rY), !DY(rY);) rY.setTime(rY - 1)
      }), ((YY, FY) => {
        if (YY >= YY)
          if (FY < 0)
            for (; ++FY <= 0;)
              for (; rY(YY, -1), !DY(YY););
          else
            for (; --FY >= 0;)
              for (; rY(YY, 1), !DY(YY););
      })), DY && (AY.count = (rY, FY) => (dD.setTime(+rY), JD.setTime(+FY), YY(dD), YY(JD), Math.floor(DY(dD, JD))), AY.every = YY => (YY = Math.floor(YY), isFinite(YY) && YY > 0 ? YY > 1 ? AY.filter(FY ? rY => FY(rY) % YY === 0 : rY => AY.count(0, rY) % YY === 0) : AY : null)), AY
    }
    const wD = MD((() => {}), ((YY, rY) => {
      YY.setTime(+YY + rY)
    }), ((YY, rY) => rY - YY));
    wD.every = YY => (YY = Math.floor(YY), isFinite(YY) && YY > 0 ? YY > 1 ? MD((rY => {
      rY.setTime(Math.floor(rY / YY) * YY)
    }), ((rY, DY) => {
      rY.setTime(+rY + DY * YY)
    }), ((rY, DY) => (DY - rY) / YY)) : wD : null);
    wD.range;
    const bD = MD((YY => {
        YY.setTime(YY - YY.getMilliseconds())
      }), ((YY, rY) => {
        YY.setTime(+YY + rY * HD)
      }), ((YY, rY) => (rY - YY) / HD), (YY => YY.getUTCSeconds())),
      XD = (bD.range, MD((YY => {
        YY.setTime(YY - YY.getMilliseconds() - YY.getSeconds() * HD)
      }), ((YY, rY) => {
        YY.setTime(+YY + rY * zD)
      }), ((YY, rY) => (rY - YY) / zD), (YY => YY.getMinutes()))),
      qD = (XD.range, MD((YY => {
        YY.setUTCSeconds(0, 0)
      }), ((YY, rY) => {
        YY.setTime(+YY + rY * zD)
      }), ((YY, rY) => (rY - YY) / zD), (YY => YY.getUTCMinutes()))),
      pD = (qD.range, MD((YY => {
        YY.setTime(YY - YY.getMilliseconds() - YY.getSeconds() * HD - YY.getMinutes() * zD)
      }), ((YY, rY) => {
        YY.setTime(+YY + rY * ZD)
      }), ((YY, rY) => (rY - YY) / ZD), (YY => YY.getHours()))),
      kD = (pD.range, MD((YY => {
        YY.setUTCMinutes(0, 0, 0)
      }), ((YY, rY) => {
        YY.setTime(+YY + rY * ZD)
      }), ((YY, rY) => (rY - YY) / ZD), (YY => YY.getUTCHours()))),
      GD = (kD.range, MD((YY => YY.setHours(0, 0, 0, 0)), ((YY, rY) => YY.setDate(YY.getDate() + rY)), ((YY, rY) => (rY - YY - (rY.getTimezoneOffset() - YY.getTimezoneOffset()) * zD) / CD), (YY => YY.getDate() - 1))),
      xD = (GD.range, MD((YY => {
        YY.setUTCHours(0, 0, 0, 0)
      }), ((YY, rY) => {
        YY.setUTCDate(YY.getUTCDate() + rY)
      }), ((YY, rY) => (rY - YY) / CD), (YY => YY.getUTCDate() - 1))),
      nD = (xD.range, MD((YY => {
        YY.setUTCHours(0, 0, 0, 0)
      }), ((YY, rY) => {
        YY.setUTCDate(YY.getUTCDate() + rY)
      }), ((YY, rY) => (rY - YY) / CD), (YY => Math.floor(YY / CD))));
    nD.range;

    function PD(YY) {
      return MD((rY => {
        rY.setDate(rY.getDate() - (rY.getDay() + 7 - YY) % 7), rY.setHours(0, 0, 0, 0)
      }), ((YY, rY) => {
        YY.setDate(YY.getDate() + 7 * rY)
      }), ((YY, rY) => (rY - YY - (rY.getTimezoneOffset() - YY.getTimezoneOffset()) * zD) / fD))
    }
    const UD = PD(0),
      LD = PD(1),
      tD = PD(2),
      YF = PD(3),
      rF = PD(4),
      DF = PD(5),
      FF = PD(6);
    UD.range, LD.range, tD.range, YF.range, rF.range, DF.range, FF.range;

    function AF(YY) {
      return MD((rY => {
        rY.setUTCDate(rY.getUTCDate() - (rY.getUTCDay() + 7 - YY) % 7), rY.setUTCHours(0, 0, 0, 0)
      }), ((YY, rY) => {
        YY.setUTCDate(YY.getUTCDate() + 7 * rY)
      }), ((YY, rY) => (rY - YY) / fD))
    }
    const IF = AF(0),
      RF = AF(1),
      OF = AF(2),
      gF = AF(3),
      aF = AF(4),
      vF = AF(5),
      uF = AF(6),
      sF = (IF.range, RF.range, OF.range, gF.range, aF.range, vF.range, uF.range, MD((YY => {
        YY.setDate(1), YY.setHours(0, 0, 0, 0)
      }), ((YY, rY) => {
        YY.setMonth(YY.getMonth() + rY)
      }), ((YY, rY) => rY.getMonth() - YY.getMonth() + 12 * (rY.getFullYear() - YY.getFullYear())), (YY => YY.getMonth()))),
      iF = (sF.range, MD((YY => {
        YY.setUTCDate(1), YY.setUTCHours(0, 0, 0, 0)
      }), ((YY, rY) => {
        YY.setUTCMonth(YY.getUTCMonth() + rY)
      }), ((YY, rY) => rY.getUTCMonth() - YY.getUTCMonth() + 12 * (rY.getUTCFullYear() - YY.getUTCFullYear())), (YY => YY.getUTCMonth()))),
      yF = (iF.range, MD((YY => {
        YY.setMonth(0, 1), YY.setHours(0, 0, 0, 0)
      }), ((YY, rY) => {
        YY.setFullYear(YY.getFullYear() + rY)
      }), ((YY, rY) => rY.getFullYear() - YY.getFullYear()), (YY => YY.getFullYear())));
    yF.every = YY => isFinite(YY = Math.floor(YY)) && YY > 0 ? MD((rY => {
      rY.setFullYear(Math.floor(rY.getFullYear() / YY) * YY), rY.setMonth(0, 1), rY.setHours(0, 0, 0, 0)
    }), ((rY, DY) => {
      rY.setFullYear(rY.getFullYear() + DY * YY)
    })) : null;
    yF.range;
    const QF = MD((YY => {
      YY.setUTCMonth(0, 1), YY.setUTCHours(0, 0, 0, 0)
    }), ((YY, rY) => {
      YY.setUTCFullYear(YY.getUTCFullYear() + rY)
    }), ((YY, rY) => rY.getUTCFullYear() - YY.getUTCFullYear()), (YY => YY.getUTCFullYear()));
    QF.every = YY => isFinite(YY = Math.floor(YY)) && YY > 0 ? MD((rY => {
      rY.setUTCFullYear(Math.floor(rY.getUTCFullYear() / YY) * YY), rY.setUTCMonth(0, 1), rY.setUTCHours(0, 0, 0, 0)
    }), ((rY, DY) => {
      rY.setUTCFullYear(rY.getUTCFullYear() + DY * YY)
    })) : null;
    QF.range;

    function oF(YY, rY, DY, FY, AY, IY) {
      const RY = [
        [bD, 1, HD],
        [bD, 5, 5e3],
        [bD, 15, 15e3],
        [bD, 30, 3e4],
        [IY, 1, zD],
        [IY, 5, 3e5],
        [IY, 15, 9e5],
        [IY, 30, 18e5],
        [AY, 1, ZD],
        [AY, 3, 108e5],
        [AY, 6, 216e5],
        [AY, 12, 432e5],
        [FY, 1, CD],
        [FY, 2, 1728e5],
        [DY, 1, fD],
        [rY, 1, jD],
        [rY, 3, 7776e6],
        [YY, 1, hD]
      ];

      function OY(rY, DY, FY) {
        const AY = Math.abs(DY - rY) / FY,
          IY = yY((YY => {
            let [, , rY] = YY;
            return rY
          })).right(RY, AY);
        if (IY === RY.length) return YY.every(uY(rY / hD, DY / hD, FY));
        if (0 === IY) return wD.every(Math.max(uY(rY, DY, FY), 1));
        const [OY, gY] = RY[AY / RY[IY - 1][2] < RY[IY][2] / AY ? IY - 1 : IY];
        return OY.every(gY)
      }
      return [function(YY, rY, DY) {
        const FY = rY < YY;
        FY && ([YY, rY] = [rY, YY]);
        const AY = DY && "function" === typeof DY.range ? DY : OY(YY, rY, DY),
          IY = AY ? AY.range(YY, +rY + 1) : [];
        return FY ? IY.reverse() : IY
      }, OY]
    }
    const [WF, EF] = oF(QF, iF, IF, nD, kD, qD), [mF, VF] = oF(yF, sF, UD, GD, pD, XD);

    function SF(YY) {
      if (0 <= YY.y && YY.y < 100) {
        var rY = new Date(-1, YY.m, YY.d, YY.H, YY.M, YY.S, YY.L);
        return rY.setFullYear(YY.y), rY
      }
      return new Date(YY.y, YY.m, YY.d, YY.H, YY.M, YY.S, YY.L)
    }

    function lF(YY) {
      if (0 <= YY.y && YY.y < 100) {
        var rY = new Date(Date.UTC(-1, YY.m, YY.d, YY.H, YY.M, YY.S, YY.L));
        return rY.setUTCFullYear(YY.y), rY
      }
      return new Date(Date.UTC(YY.y, YY.m, YY.d, YY.H, YY.M, YY.S, YY.L))
    }

    function TF(YY, rY, DY) {
      return {
        y: YY,
        m: rY,
        d: DY,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var eF, NF, BF, cF = {
        "-": "",
        _: " ",
        0: "0"
      },
      KF = /^\s*\d+/,
      HF = /^%/,
      zF = /[\\^$*+?|[\]().{}]/g;

    function ZF(YY, rY, DY) {
      var FY = YY < 0 ? "-" : "",
        AY = (FY ? -YY : YY) + "",
        IY = AY.length;
      return FY + (IY < DY ? new Array(DY - IY + 1).join(rY) + AY : AY)
    }

    function CF(YY) {
      return YY.replace(zF, "\\$&")
    }

    function fF(YY) {
      return new RegExp("^(?:" + YY.map(CF).join("|") + ")", "i")
    }

    function jF(YY) {
      return new Map(YY.map(((YY, rY) => [YY.toLowerCase(), rY])))
    }

    function hF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 1));
      return FY ? (YY.w = +FY[0], DY + FY[0].length) : -1
    }

    function dF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 1));
      return FY ? (YY.u = +FY[0], DY + FY[0].length) : -1
    }

    function JF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 2));
      return FY ? (YY.U = +FY[0], DY + FY[0].length) : -1
    }

    function MF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 2));
      return FY ? (YY.V = +FY[0], DY + FY[0].length) : -1
    }

    function wF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 2));
      return FY ? (YY.W = +FY[0], DY + FY[0].length) : -1
    }

    function bF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 4));
      return FY ? (YY.y = +FY[0], DY + FY[0].length) : -1
    }

    function XF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 2));
      return FY ? (YY.y = +FY[0] + (+FY[0] > 68 ? 1900 : 2e3), DY + FY[0].length) : -1
    }

    function qF(YY, rY, DY) {
      var FY = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(rY.slice(DY, DY + 6));
      return FY ? (YY.Z = FY[1] ? 0 : -(FY[2] + (FY[3] || "00")), DY + FY[0].length) : -1
    }

    function pF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 1));
      return FY ? (YY.q = 3 * FY[0] - 3, DY + FY[0].length) : -1
    }

    function kF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 2));
      return FY ? (YY.m = FY[0] - 1, DY + FY[0].length) : -1
    }

    function GF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 2));
      return FY ? (YY.d = +FY[0], DY + FY[0].length) : -1
    }

    function xF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 3));
      return FY ? (YY.m = 0, YY.d = +FY[0], DY + FY[0].length) : -1
    }

    function nF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 2));
      return FY ? (YY.H = +FY[0], DY + FY[0].length) : -1
    }

    function PF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 2));
      return FY ? (YY.M = +FY[0], DY + FY[0].length) : -1
    }

    function UF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 2));
      return FY ? (YY.S = +FY[0], DY + FY[0].length) : -1
    }

    function LF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 3));
      return FY ? (YY.L = +FY[0], DY + FY[0].length) : -1
    }

    function tF(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY, DY + 6));
      return FY ? (YY.L = Math.floor(FY[0] / 1e3), DY + FY[0].length) : -1
    }

    function YA(YY, rY, DY) {
      var FY = HF.exec(rY.slice(DY, DY + 1));
      return FY ? DY + FY[0].length : -1
    }

    function rA(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY));
      return FY ? (YY.Q = +FY[0], DY + FY[0].length) : -1
    }

    function DA(YY, rY, DY) {
      var FY = KF.exec(rY.slice(DY));
      return FY ? (YY.s = +FY[0], DY + FY[0].length) : -1
    }

    function FA(YY, rY) {
      return ZF(YY.getDate(), rY, 2)
    }

    function AA(YY, rY) {
      return ZF(YY.getHours(), rY, 2)
    }

    function IA(YY, rY) {
      return ZF(YY.getHours() % 12 || 12, rY, 2)
    }

    function RA(YY, rY) {
      return ZF(1 + GD.count(yF(YY), YY), rY, 3)
    }

    function OA(YY, rY) {
      return ZF(YY.getMilliseconds(), rY, 3)
    }

    function gA(YY, rY) {
      return OA(YY, rY) + "000"
    }

    function aA(YY, rY) {
      return ZF(YY.getMonth() + 1, rY, 2)
    }

    function vA(YY, rY) {
      return ZF(YY.getMinutes(), rY, 2)
    }

    function uA(YY, rY) {
      return ZF(YY.getSeconds(), rY, 2)
    }

    function sA(YY) {
      var rY = YY.getDay();
      return 0 === rY ? 7 : rY
    }

    function iA(YY, rY) {
      return ZF(UD.count(yF(YY) - 1, YY), rY, 2)
    }

    function yA(YY) {
      var rY = YY.getDay();
      return rY >= 4 || 0 === rY ? rF(YY) : rF.ceil(YY)
    }

    function QA(YY, rY) {
      return YY = yA(YY), ZF(rF.count(yF(YY), YY) + (4 === yF(YY).getDay()), rY, 2)
    }

    function oA(YY) {
      return YY.getDay()
    }

    function WA(YY, rY) {
      return ZF(LD.count(yF(YY) - 1, YY), rY, 2)
    }

    function EA(YY, rY) {
      return ZF(YY.getFullYear() % 100, rY, 2)
    }

    function mA(YY, rY) {
      return ZF((YY = yA(YY)).getFullYear() % 100, rY, 2)
    }

    function VA(YY, rY) {
      return ZF(YY.getFullYear() % 1e4, rY, 4)
    }

    function SA(YY, rY) {
      var DY = YY.getDay();
      return ZF((YY = DY >= 4 || 0 === DY ? rF(YY) : rF.ceil(YY)).getFullYear() % 1e4, rY, 4)
    }

    function lA(YY) {
      var rY = YY.getTimezoneOffset();
      return (rY > 0 ? "-" : (rY *= -1, "+")) + ZF(rY / 60 | 0, "0", 2) + ZF(rY % 60, "0", 2)
    }

    function TA(YY, rY) {
      return ZF(YY.getUTCDate(), rY, 2)
    }

    function eA(YY, rY) {
      return ZF(YY.getUTCHours(), rY, 2)
    }

    function NA(YY, rY) {
      return ZF(YY.getUTCHours() % 12 || 12, rY, 2)
    }

    function BA(YY, rY) {
      return ZF(1 + xD.count(QF(YY), YY), rY, 3)
    }

    function cA(YY, rY) {
      return ZF(YY.getUTCMilliseconds(), rY, 3)
    }

    function KA(YY, rY) {
      return cA(YY, rY) + "000"
    }

    function HA(YY, rY) {
      return ZF(YY.getUTCMonth() + 1, rY, 2)
    }

    function zA(YY, rY) {
      return ZF(YY.getUTCMinutes(), rY, 2)
    }

    function ZA(YY, rY) {
      return ZF(YY.getUTCSeconds(), rY, 2)
    }

    function CA(YY) {
      var rY = YY.getUTCDay();
      return 0 === rY ? 7 : rY
    }

    function fA(YY, rY) {
      return ZF(IF.count(QF(YY) - 1, YY), rY, 2)
    }

    function jA(YY) {
      var rY = YY.getUTCDay();
      return rY >= 4 || 0 === rY ? aF(YY) : aF.ceil(YY)
    }

    function hA(YY, rY) {
      return YY = jA(YY), ZF(aF.count(QF(YY), YY) + (4 === QF(YY).getUTCDay()), rY, 2)
    }

    function dA(YY) {
      return YY.getUTCDay()
    }

    function JA(YY, rY) {
      return ZF(RF.count(QF(YY) - 1, YY), rY, 2)
    }

    function MA(YY, rY) {
      return ZF(YY.getUTCFullYear() % 100, rY, 2)
    }

    function wA(YY, rY) {
      return ZF((YY = jA(YY)).getUTCFullYear() % 100, rY, 2)
    }

    function bA(YY, rY) {
      return ZF(YY.getUTCFullYear() % 1e4, rY, 4)
    }

    function XA(YY, rY) {
      var DY = YY.getUTCDay();
      return ZF((YY = DY >= 4 || 0 === DY ? aF(YY) : aF.ceil(YY)).getUTCFullYear() % 1e4, rY, 4)
    }

    function qA() {
      return "+0000"
    }

    function pA() {
      return "%"
    }

    function kA(YY) {
      return +YY
    }

    function GA(YY) {
      return Math.floor(+YY / 1e3)
    }

    function xA(YY) {
      return new Date(YY)
    }

    function nA(YY) {
      return YY instanceof Date ? +YY : +new Date(+YY)
    }

    function PA(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY) {
      var vY = cr(),
        uY = vY.invert,
        sY = vY.domain,
        iY = aY(".%L"),
        yY = aY(":%S"),
        QY = aY("%I:%M"),
        oY = aY("%I %p"),
        WY = aY("%a %d"),
        EY = aY("%b %d"),
        mY = aY("%B"),
        VY = aY("%Y");

      function SY(YY) {
        return (gY(YY) < YY ? iY : OY(YY) < YY ? yY : RY(YY) < YY ? QY : IY(YY) < YY ? oY : FY(YY) < YY ? AY(YY) < YY ? WY : EY : DY(YY) < YY ? mY : VY)(YY)
      }
      return vY.invert = function(YY) {
        return new Date(uY(YY))
      }, vY.domain = function(YY) {
        return arguments.length ? sY(Array.from(YY, nA)) : sY().map(xA)
      }, vY.ticks = function(rY) {
        var DY = sY();
        return YY(DY[0], DY[DY.length - 1], null == rY ? 10 : rY)
      }, vY.tickFormat = function(YY, rY) {
        return null == rY ? SY : aY(rY)
      }, vY.nice = function(YY) {
        var DY = sY();
        return YY && "function" === typeof YY.range || (YY = rY(DY[0], DY[DY.length - 1], null == YY ? 10 : YY)), YY ? sY(Pr(DY, YY)) : vY
      }, vY.copy = function() {
        return Nr(vY, PA(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY))
      }, vY
    }

    function UA() {
      return Hr.g.apply(PA(mF, VF, yF, sF, UD, GD, pD, XD, bD, NF).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function LA() {
      return Hr.g.apply(PA(WF, EF, QF, iF, IF, xD, kD, qD, bD, BF).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function tA() {
      var YY, rY, DY, FY, AY, IY = 0,
        RY = 1,
        OY = Sr,
        gY = !1;

      function aY(rY) {
        return null == rY || isNaN(rY = +rY) ? AY : OY(0 === DY ? .5 : (rY = (FY(rY) - YY) * DY, gY ? Math.max(0, Math.min(1, rY)) : rY))
      }

      function vY(YY) {
        return function(rY) {
          var DY, FY;
          return arguments.length ? ([DY, FY] = rY, OY = YY(DY, FY), aY) : [OY(0), OY(1)]
        }
      }
      return aY.domain = function(AY) {
          return arguments.length ? ([IY, RY] = AY, YY = FY(IY = +IY), rY = FY(RY = +RY), DY = YY === rY ? 0 : 1 / (rY - YY), aY) : [IY, RY]
        }, aY.clamp = function(YY) {
          return arguments.length ? (gY = !!YY, aY) : gY
        }, aY.interpolator = function(YY) {
          return arguments.length ? (OY = YY, aY) : OY
        }, aY.range = vY(Wr), aY.rangeRound = vY(Er), aY.unknown = function(YY) {
          return arguments.length ? (AY = YY, aY) : AY
        },
        function(AY) {
          return FY = AY, YY = AY(IY), rY = AY(RY), DY = YY === rY ? 0 : 1 / (rY - YY), aY
        }
    }

    function YI(YY, rY) {
      return rY.domain(YY.domain()).interpolator(YY.interpolator()).clamp(YY.clamp()).unknown(YY.unknown())
    }

    function rI() {
      var YY = Gr(tA()(Sr));
      return YY.copy = function() {
        return YI(YY, rI())
      }, Hr.e.apply(YY, arguments)
    }

    function DI() {
      var YY = FD(tA()).domain([1, 10]);
      return YY.copy = function() {
        return YI(YY, DI()).base(YY.base())
      }, Hr.e.apply(YY, arguments)
    }

    function FI() {
      var YY = OD(tA());
      return YY.copy = function() {
        return YI(YY, FI()).constant(YY.constant())
      }, Hr.e.apply(YY, arguments)
    }

    function AI() {
      var YY = iD(tA());
      return YY.copy = function() {
        return YI(YY, AI()).exponent(YY.exponent())
      }, Hr.e.apply(YY, arguments)
    }

    function II() {
      return AI.apply(null, arguments).exponent(.5)
    }

    function RI() {
      var YY = [],
        rY = Sr;

      function DY(DY) {
        if (null != DY && !isNaN(DY = +DY)) return rY((mY(YY, DY, 1) - 1) / (YY.length - 1))
      }
      return DY.domain = function(rY) {
        if (!arguments.length) return YY.slice();
        YY = [];
        for (let DY of rY) null == DY || isNaN(DY = +DY) || YY.push(DY);
        return YY.sort(sY), DY
      }, DY.interpolator = function(YY) {
        return arguments.length ? (rY = YY, DY) : rY
      }, DY.range = function() {
        return YY.map(((DY, FY) => rY(FY / (YY.length - 1))))
      }, DY.quantiles = function(rY) {
        return Array.from({
          length: rY + 1
        }, ((DY, FY) => eD(YY, FY / rY)))
      }, DY.copy = function() {
        return RI(rY).domain(YY)
      }, Hr.e.apply(DY, arguments)
    }

    function OI() {
      var YY, rY, DY, FY, AY, IY, RY, OY = 0,
        gY = .5,
        aY = 1,
        vY = 1,
        uY = Sr,
        sY = !1;

      function iY(YY) {
        return isNaN(YY = +YY) ? RY : (YY = .5 + ((YY = +IY(YY)) - rY) * (vY * YY < vY * rY ? FY : AY), uY(sY ? Math.max(0, Math.min(1, YY)) : YY))
      }

      function yY(YY) {
        return function(rY) {
          var DY, FY, AY;
          return arguments.length ? ([DY, FY, AY] = rY, uY = function(YY, rY) {
            void 0 === rY && (rY = YY, YY = Wr);
            for (var DY = 0, FY = rY.length - 1, AY = rY[0], IY = new Array(FY < 0 ? 0 : FY); DY < FY;) IY[DY] = YY(AY, AY = rY[++DY]);
            return function(YY) {
              var rY = Math.max(0, Math.min(FY - 1, Math.floor(YY *= FY)));
              return IY[rY](YY - rY)
            }
          }(YY, [DY, FY, AY]), iY) : [uY(0), uY(.5), uY(1)]
        }
      }
      return iY.domain = function(RY) {
          return arguments.length ? ([OY, gY, aY] = RY, YY = IY(OY = +OY), rY = IY(gY = +gY), DY = IY(aY = +aY), FY = YY === rY ? 0 : .5 / (rY - YY), AY = rY === DY ? 0 : .5 / (DY - rY), vY = rY < YY ? -1 : 1, iY) : [OY, gY, aY]
        }, iY.clamp = function(YY) {
          return arguments.length ? (sY = !!YY, iY) : sY
        }, iY.interpolator = function(YY) {
          return arguments.length ? (uY = YY, iY) : uY
        }, iY.range = yY(Wr), iY.rangeRound = yY(Er), iY.unknown = function(YY) {
          return arguments.length ? (RY = YY, iY) : RY
        },
        function(RY) {
          return IY = RY, YY = RY(OY), rY = RY(gY), DY = RY(aY), FY = YY === rY ? 0 : .5 / (rY - YY), AY = rY === DY ? 0 : .5 / (DY - rY), vY = rY < YY ? -1 : 1, iY
        }
    }

    function gI() {
      var YY = Gr(OI()(Sr));
      return YY.copy = function() {
        return YI(YY, gI())
      }, Hr.e.apply(YY, arguments)
    }

    function aI() {
      var YY = FD(OI()).domain([.1, 1, 10]);
      return YY.copy = function() {
        return YI(YY, aI()).base(YY.base())
      }, Hr.e.apply(YY, arguments)
    }

    function vI() {
      var YY = OD(OI());
      return YY.copy = function() {
        return YI(YY, vI()).constant(YY.constant())
      }, Hr.e.apply(YY, arguments)
    }

    function uI() {
      var YY = iD(OI());
      return YY.copy = function() {
        return YI(YY, uI()).exponent(YY.exponent())
      }, Hr.e.apply(YY, arguments)
    }

    function sI() {
      return uI.apply(null, arguments).exponent(.5)
    }

    function iI(YY, rY) {
      if ((AY = YY.length) > 1)
        for (var DY, FY, AY, IY = 1, RY = YY[rY[0]], OY = RY.length; IY < AY; ++IY)
          for (FY = RY, RY = YY[rY[IY]], DY = 0; DY < OY; ++DY) RY[DY][1] += RY[DY][0] = isNaN(FY[DY][1]) ? FY[DY][0] : FY[DY][1]
    }! function(YY) {
      eF = function(YY) {
        var rY = YY.dateTime,
          DY = YY.date,
          FY = YY.time,
          AY = YY.periods,
          IY = YY.days,
          RY = YY.shortDays,
          OY = YY.months,
          gY = YY.shortMonths,
          aY = fF(AY),
          vY = jF(AY),
          uY = fF(IY),
          sY = jF(IY),
          iY = fF(RY),
          yY = jF(RY),
          QY = fF(OY),
          oY = jF(OY),
          WY = fF(gY),
          EY = jF(gY),
          mY = {
            a: function(YY) {
              return RY[YY.getDay()]
            },
            A: function(YY) {
              return IY[YY.getDay()]
            },
            b: function(YY) {
              return gY[YY.getMonth()]
            },
            B: function(YY) {
              return OY[YY.getMonth()]
            },
            c: null,
            d: FA,
            e: FA,
            f: gA,
            g: mA,
            G: SA,
            H: AA,
            I: IA,
            j: RA,
            L: OA,
            m: aA,
            M: vA,
            p: function(YY) {
              return AY[+(YY.getHours() >= 12)]
            },
            q: function(YY) {
              return 1 + ~~(YY.getMonth() / 3)
            },
            Q: kA,
            s: GA,
            S: uA,
            u: sA,
            U: iA,
            V: QA,
            w: oA,
            W: WA,
            x: null,
            X: null,
            y: EA,
            Y: VA,
            Z: lA,
            "%": pA
          },
          VY = {
            a: function(YY) {
              return RY[YY.getUTCDay()]
            },
            A: function(YY) {
              return IY[YY.getUTCDay()]
            },
            b: function(YY) {
              return gY[YY.getUTCMonth()]
            },
            B: function(YY) {
              return OY[YY.getUTCMonth()]
            },
            c: null,
            d: TA,
            e: TA,
            f: KA,
            g: wA,
            G: XA,
            H: eA,
            I: NA,
            j: BA,
            L: cA,
            m: HA,
            M: zA,
            p: function(YY) {
              return AY[+(YY.getUTCHours() >= 12)]
            },
            q: function(YY) {
              return 1 + ~~(YY.getUTCMonth() / 3)
            },
            Q: kA,
            s: GA,
            S: ZA,
            u: CA,
            U: fA,
            V: hA,
            w: dA,
            W: JA,
            x: null,
            X: null,
            y: MA,
            Y: bA,
            Z: qA,
            "%": pA
          },
          SY = {
            a: function(YY, rY, DY) {
              var FY = iY.exec(rY.slice(DY));
              return FY ? (YY.w = yY.get(FY[0].toLowerCase()), DY + FY[0].length) : -1
            },
            A: function(YY, rY, DY) {
              var FY = uY.exec(rY.slice(DY));
              return FY ? (YY.w = sY.get(FY[0].toLowerCase()), DY + FY[0].length) : -1
            },
            b: function(YY, rY, DY) {
              var FY = WY.exec(rY.slice(DY));
              return FY ? (YY.m = EY.get(FY[0].toLowerCase()), DY + FY[0].length) : -1
            },
            B: function(YY, rY, DY) {
              var FY = QY.exec(rY.slice(DY));
              return FY ? (YY.m = oY.get(FY[0].toLowerCase()), DY + FY[0].length) : -1
            },
            c: function(YY, DY, FY) {
              return eY(YY, rY, DY, FY)
            },
            d: GF,
            e: GF,
            f: tF,
            g: XF,
            G: bF,
            H: nF,
            I: nF,
            j: xF,
            L: LF,
            m: kF,
            M: PF,
            p: function(YY, rY, DY) {
              var FY = aY.exec(rY.slice(DY));
              return FY ? (YY.p = vY.get(FY[0].toLowerCase()), DY + FY[0].length) : -1
            },
            q: pF,
            Q: rA,
            s: DA,
            S: UF,
            u: dF,
            U: JF,
            V: MF,
            w: hF,
            W: wF,
            x: function(YY, rY, FY) {
              return eY(YY, DY, rY, FY)
            },
            X: function(YY, rY, DY) {
              return eY(YY, FY, rY, DY)
            },
            y: XF,
            Y: bF,
            Z: qF,
            "%": YA
          };

        function lY(YY, rY) {
          return function(DY) {
            var FY, AY, IY, RY = [],
              OY = -1,
              gY = 0,
              aY = YY.length;
            for (DY instanceof Date || (DY = new Date(+DY)); ++OY < aY;) 37 === YY.charCodeAt(OY) && (RY.push(YY.slice(gY, OY)), null != (AY = cF[FY = YY.charAt(++OY)]) ? FY = YY.charAt(++OY) : AY = "e" === FY ? " " : "0", (IY = rY[FY]) && (FY = IY(DY, AY)), RY.push(FY), gY = OY + 1);
            return RY.push(YY.slice(gY, OY)), RY.join("")
          }
        }

        function TY(YY, rY) {
          return function(DY) {
            var FY, AY, IY = TF(1900, void 0, 1);
            if (eY(IY, YY, DY += "", 0) != DY.length) return null;
            if ("Q" in IY) return new Date(IY.Q);
            if ("s" in IY) return new Date(1e3 * IY.s + ("L" in IY ? IY.L : 0));
            if (rY && !("Z" in IY) && (IY.Z = 0), "p" in IY && (IY.H = IY.H % 12 + 12 * IY.p), void 0 === IY.m && (IY.m = "q" in IY ? IY.q : 0), "V" in IY) {
              if (IY.V < 1 || IY.V > 53) return null;
              "w" in IY || (IY.w = 1), "Z" in IY ? (AY = (FY = lF(TF(IY.y, 0, 1))).getUTCDay(), FY = AY > 4 || 0 === AY ? RF.ceil(FY) : RF(FY), FY = xD.offset(FY, 7 * (IY.V - 1)), IY.y = FY.getUTCFullYear(), IY.m = FY.getUTCMonth(), IY.d = FY.getUTCDate() + (IY.w + 6) % 7) : (AY = (FY = SF(TF(IY.y, 0, 1))).getDay(), FY = AY > 4 || 0 === AY ? LD.ceil(FY) : LD(FY), FY = GD.offset(FY, 7 * (IY.V - 1)), IY.y = FY.getFullYear(), IY.m = FY.getMonth(), IY.d = FY.getDate() + (IY.w + 6) % 7)
            } else("W" in IY || "U" in IY) && ("w" in IY || (IY.w = "u" in IY ? IY.u % 7 : "W" in IY ? 1 : 0), AY = "Z" in IY ? lF(TF(IY.y, 0, 1)).getUTCDay() : SF(TF(IY.y, 0, 1)).getDay(), IY.m = 0, IY.d = "W" in IY ? (IY.w + 6) % 7 + 7 * IY.W - (AY + 5) % 7 : IY.w + 7 * IY.U - (AY + 6) % 7);
            return "Z" in IY ? (IY.H += IY.Z / 100 | 0, IY.M += IY.Z % 100, lF(IY)) : SF(IY)
          }
        }

        function eY(YY, rY, DY, FY) {
          for (var AY, IY, RY = 0, OY = rY.length, gY = DY.length; RY < OY;) {
            if (FY >= gY) return -1;
            if (37 === (AY = rY.charCodeAt(RY++))) {
              if (AY = rY.charAt(RY++), !(IY = SY[AY in cF ? rY.charAt(RY++) : AY]) || (FY = IY(YY, DY, FY)) < 0) return -1
            } else if (AY != DY.charCodeAt(FY++)) return -1
          }
          return FY
        }
        return mY.x = lY(DY, mY), mY.X = lY(FY, mY), mY.c = lY(rY, mY), VY.x = lY(DY, VY), VY.X = lY(FY, VY), VY.c = lY(rY, VY), {
          format: function(YY) {
            var rY = lY(YY += "", mY);
            return rY.toString = function() {
              return YY
            }, rY
          },
          parse: function(YY) {
            var rY = TY(YY += "", !1);
            return rY.toString = function() {
              return YY
            }, rY
          },
          utcFormat: function(YY) {
            var rY = lY(YY += "", VY);
            return rY.toString = function() {
              return YY
            }, rY
          },
          utcParse: function(YY) {
            var rY = TY(YY += "", !0);
            return rY.toString = function() {
              return YY
            }, rY
          }
        }
      }(YY), NF = eF.format, eF.parse, BF = eF.utcFormat, eF.utcParse
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
    var yI = DY(5783),
      QI = DY(5671);

    function oI(YY) {
      for (var rY = YY.length, DY = new Array(rY); --rY >= 0;) DY[rY] = rY;
      return DY
    }

    function WI(YY, rY) {
      return YY[rY]
    }

    function EI(YY) {
      const rY = [];
      return rY.key = YY, rY
    }
    var mI = DY(5723),
      VI = DY.n(mI),
      SI = DY(5739),
      lI = DY.n(SI),
      TI = DY(5007),
      eI = DY.n(TI),
      NI = DY(4840),
      BI = DY.n(NI),
      cI = DY(4732),
      KI = DY.n(cI),
      HI = DY(4752),
      zI = DY.n(HI),
      ZI = DY(5751),
      CI = DY.n(ZI),
      fI = DY(4743),
      jI = DY.n(fI),
      hI = DY(5630),
      dI = DY.n(hI),
      JI = DY(5759),
      MI = DY.n(JI),
      wI = DY(5105),
      bI = DY.n(wI),
      XI = DY(5767),
      qI = DY.n(XI);

    function pI(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return kI(YY)
      }(YY) || function(YY) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(YY)) return Array.from(YY)
      }(YY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return kI(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return kI(YY, rY)
      }(YY) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kI(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }
    var GI = function(YY) {
        return YY
      },
      xI = {
        "@@functional/placeholder": !0
      },
      nI = function(YY) {
        return YY === xI
      },
      PI = function(YY) {
        return function rY() {
          return 0 === arguments.length || 1 === arguments.length && nI(arguments.length <= 0 ? void 0 : arguments[0]) ? rY : YY.apply(void 0, arguments)
        }
      },
      UI = function YY(rY, DY) {
        return 1 === rY ? DY : PI((function() {
          for (var FY = arguments.length, AY = new Array(FY), IY = 0; IY < FY; IY++) AY[IY] = arguments[IY];
          var RY = AY.filter((function(YY) {
            return YY !== xI
          })).length;
          return RY >= rY ? DY.apply(void 0, AY) : YY(rY - RY, PI((function() {
            for (var YY = arguments.length, rY = new Array(YY), FY = 0; FY < YY; FY++) rY[FY] = arguments[FY];
            var IY = AY.map((function(YY) {
              return nI(YY) ? rY.shift() : YY
            }));
            return DY.apply(void 0, pI(IY).concat(rY))
          })))
        }))
      },
      LI = function(YY) {
        return UI(YY.length, YY)
      },
      tI = function(YY, rY) {
        for (var DY = [], FY = YY; FY < rY; ++FY) DY[FY - YY] = FY;
        return DY
      },
      YR = LI((function(YY, rY) {
        return Array.isArray(rY) ? rY.map(YY) : Object.keys(rY).map((function(YY) {
          return rY[YY]
        })).map(YY)
      })),
      rR = function() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        if (!rY.length) return GI;
        var FY = rY.reverse(),
          AY = FY[0],
          IY = FY.slice(1);
        return function() {
          return IY.reduce((function(YY, rY) {
            return rY(YY)
          }), AY.apply(void 0, arguments))
        }
      },
      DR = function(YY) {
        return Array.isArray(YY) ? YY.reverse() : YY.split("").reverse.join("")
      },
      FR = function(YY) {
        var rY = null,
          DY = null;
        return function() {
          for (var FY = arguments.length, AY = new Array(FY), IY = 0; IY < FY; IY++) AY[IY] = arguments[IY];
          return rY && AY.every((function(YY, DY) {
            return YY === rY[DY]
          })) ? DY : (rY = AY, DY = YY.apply(void 0, AY))
        }
      };
    const AR = {
      rangeStep: function(YY, rY, DY) {
        for (var FY = new(qI())(YY), AY = 0, IY = []; FY.lt(rY) && AY < 1e5;) IY.push(FY.toNumber()), FY = FY.add(DY), AY++;
        return IY
      },
      getDigitCount: function(YY) {
        return 0 === YY ? 1 : Math.floor(new(qI())(YY).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: LI((function(YY, rY, DY) {
        var FY = +YY;
        return FY + DY * (+rY - FY)
      })),
      uninterpolateNumber: LI((function(YY, rY, DY) {
        var FY = rY - +YY;
        return (DY - YY) / (FY = FY || 1 / 0)
      })),
      uninterpolateTruncation: LI((function(YY, rY, DY) {
        var FY = rY - +YY;
        return FY = FY || 1 / 0, Math.max(0, Math.min(1, (DY - YY) / FY))
      }))
    };

    function IR(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return gR(YY)
      }(YY) || function(YY) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(YY)) return Array.from(YY)
      }(YY) || OR(YY) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function RR(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(YY))) return;
        var DY = [],
          FY = !0,
          AY = !1,
          IY = void 0;
        try {
          for (var RY, OY = YY[Symbol.iterator](); !(FY = (RY = OY.next()).done) && (DY.push(RY.value), !rY || DY.length !== rY); FY = !0);
        } catch (gY) {
          AY = !0, IY = gY
        } finally {
          try {
            FY || null == OY.return || OY.return()
          } finally {
            if (AY) throw IY
          }
        }
        return DY
      }(YY, rY) || OR(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OR(YY, rY) {
      if (YY) {
        if ("string" === typeof YY) return gR(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        return "Object" === DY && YY.constructor && (DY = YY.constructor.name), "Map" === DY || "Set" === DY ? Array.from(YY) : "Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY) ? gR(YY, rY) : void 0
      }
    }

    function gR(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function aR(YY) {
      var rY = RR(YY, 2),
        DY = rY[0],
        FY = rY[1],
        AY = DY,
        IY = FY;
      return DY > FY && (AY = FY, IY = DY), [AY, IY]
    }

    function vR(YY, rY, DY) {
      if (YY.lte(0)) return new(qI())(0);
      var FY = AR.getDigitCount(YY.toNumber()),
        AY = new(qI())(10).pow(FY),
        IY = YY.div(AY),
        RY = 1 !== FY ? .05 : .1,
        OY = new(qI())(Math.ceil(IY.div(RY).toNumber())).add(DY).mul(RY).mul(AY);
      return rY ? OY : new(qI())(Math.ceil(OY))
    }

    function uR(YY, rY, DY) {
      var FY = 1,
        AY = new(qI())(YY);
      if (!AY.isint() && DY) {
        var IY = Math.abs(YY);
        IY < 1 ? (FY = new(qI())(10).pow(AR.getDigitCount(YY) - 1), AY = new(qI())(Math.floor(AY.div(FY).toNumber())).mul(FY)) : IY > 1 && (AY = new(qI())(Math.floor(YY)))
      } else 0 === YY ? AY = new(qI())(Math.floor((rY - 1) / 2)) : DY || (AY = new(qI())(Math.floor(YY)));
      var RY = Math.floor((rY - 1) / 2);
      return rR(YR((function(YY) {
        return AY.add(new(qI())(YY - RY).mul(FY)).toNumber()
      })), tI)(0, rY)
    }

    function sR(YY, rY, DY, FY) {
      var AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((rY - YY) / (DY - 1))) return {
        step: new(qI())(0),
        tickMin: new(qI())(0),
        tickMax: new(qI())(0)
      };
      var IY, RY = vR(new(qI())(rY).sub(YY).div(DY - 1), FY, AY);
      IY = YY <= 0 && rY >= 0 ? new(qI())(0) : (IY = new(qI())(YY).add(rY).div(2)).sub(new(qI())(IY).mod(RY));
      var OY = Math.ceil(IY.sub(YY).div(RY).toNumber()),
        gY = Math.ceil(new(qI())(rY).sub(IY).div(RY).toNumber()),
        aY = OY + gY + 1;
      return aY > DY ? sR(YY, rY, DY, FY, AY + 1) : (aY < DY && (gY = rY > 0 ? gY + (DY - aY) : gY, OY = rY > 0 ? OY : OY + (DY - aY)), {
        step: RY,
        tickMin: IY.sub(new(qI())(OY).mul(RY)),
        tickMax: IY.add(new(qI())(gY).mul(RY))
      })
    }
    var iR = FR((function(YY) {
        var rY = RR(YY, 2),
          DY = rY[0],
          FY = rY[1],
          AY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          IY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          RY = Math.max(AY, 2),
          OY = RR(aR([DY, FY]), 2),
          gY = OY[0],
          aY = OY[1];
        if (gY === -1 / 0 || aY === 1 / 0) {
          var vY = aY === 1 / 0 ? [gY].concat(IR(tI(0, AY - 1).map((function() {
            return 1 / 0
          })))) : [].concat(IR(tI(0, AY - 1).map((function() {
            return -1 / 0
          }))), [aY]);
          return DY > FY ? DR(vY) : vY
        }
        if (gY === aY) return uR(gY, AY, IY);
        var uY = sR(gY, aY, RY, IY),
          sY = uY.step,
          iY = uY.tickMin,
          yY = uY.tickMax,
          QY = AR.rangeStep(iY, yY.add(new(qI())(.1).mul(sY)), sY);
        return DY > FY ? DR(QY) : QY
      })),
      yR = (FR((function(YY) {
        var rY = RR(YY, 2),
          DY = rY[0],
          FY = rY[1],
          AY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          IY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          RY = Math.max(AY, 2),
          OY = RR(aR([DY, FY]), 2),
          gY = OY[0],
          aY = OY[1];
        if (gY === -1 / 0 || aY === 1 / 0) return [DY, FY];
        if (gY === aY) return uR(gY, AY, IY);
        var vY = vR(new(qI())(aY).sub(gY).div(RY - 1), IY, 0),
          uY = rR(YR((function(YY) {
            return new(qI())(gY).add(new(qI())(YY).mul(vY)).toNumber()
          })), tI)(0, RY).filter((function(YY) {
            return YY >= gY && YY <= aY
          }));
        return DY > FY ? DR(uY) : uY
      })), FR((function(YY, rY) {
        var DY = RR(YY, 2),
          FY = DY[0],
          AY = DY[1],
          IY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          RY = RR(aR([FY, AY]), 2),
          OY = RY[0],
          gY = RY[1];
        if (OY === -1 / 0 || gY === 1 / 0) return [FY, AY];
        if (OY === gY) return [OY];
        var aY = Math.max(rY, 2),
          vY = vR(new(qI())(gY).sub(OY).div(aY - 1), IY, 0),
          uY = [].concat(IR(AR.rangeStep(new(qI())(OY), new(qI())(gY).sub(new(qI())(.99).mul(vY)), vY)), [gY]);
        return FY > AY ? DR(uY) : uY
      }))),
      QR = DY(5770),
      oR = DY(4723),
      WR = DY(5023),
      ER = DY(5775);

    function mR(YY) {
      return mR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, mR(YY)
    }

    function VR(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return SR(YY)
      }(YY) || function(YY) {
        if ("undefined" !== typeof Symbol && null != YY[Symbol.iterator] || null != YY["@@iterator"]) return Array.from(YY)
      }(YY) || function(YY, rY) {
        if (!YY) return;
        if ("string" === typeof YY) return SR(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        "Object" === DY && YY.constructor && (DY = YY.constructor.name);
        if ("Map" === DY || "Set" === DY) return Array.from(YY);
        if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return SR(YY, rY)
      }(YY) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function SR(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function lR(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function TR(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? lR(Object(DY), !0).forEach((function(rY) {
          eR(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : lR(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function eR(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != mR(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != mR(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == mR(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function NR(YY, rY, DY) {
      return eI()(YY) || eI()(rY) ? DY : (0, oR.v)(rY) ? zI()(YY, rY, DY) : BI()(rY) ? rY(YY) : DY
    }

    function BR(YY, rY, DY, FY) {
      var AY = CI()(YY, (function(YY) {
        return NR(YY, rY)
      }));
      if ("number" === DY) {
        var IY = AY.filter((function(YY) {
          return (0, oR.w)(YY) || parseFloat(YY)
        }));
        return IY.length ? [lI()(IY), VI()(IY)] : [1 / 0, -1 / 0]
      }
      return (FY ? AY.filter((function(YY) {
        return !eI()(YY)
      })) : AY).map((function(YY) {
        return (0, oR.v)(YY) || YY instanceof Date ? YY : ""
      }))
    }
    var cR = function(YY) {
        var rY, DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          FY = arguments.length > 2 ? arguments[2] : void 0,
          AY = arguments.length > 3 ? arguments[3] : void 0,
          IY = -1,
          RY = null !== (rY = null === DY || void 0 === DY ? void 0 : DY.length) && void 0 !== rY ? rY : 0;
        if (RY <= 1) return 0;
        if (AY && "angleAxis" === AY.axisType && Math.abs(Math.abs(AY.range[1] - AY.range[0]) - 360) <= 1e-6)
          for (var OY = AY.range, gY = 0; gY < RY; gY++) {
            var aY = gY > 0 ? FY[gY - 1].coordinate : FY[RY - 1].coordinate,
              vY = FY[gY].coordinate,
              uY = gY >= RY - 1 ? FY[0].coordinate : FY[gY + 1].coordinate,
              sY = void 0;
            if ((0, oR.C)(vY - aY) !== (0, oR.C)(uY - vY)) {
              var iY = [];
              if ((0, oR.C)(uY - vY) === (0, oR.C)(OY[1] - OY[0])) {
                sY = uY;
                var yY = vY + OY[1] - OY[0];
                iY[0] = Math.min(yY, (yY + aY) / 2), iY[1] = Math.max(yY, (yY + aY) / 2)
              } else {
                sY = aY;
                var QY = uY + OY[1] - OY[0];
                iY[0] = Math.min(vY, (QY + vY) / 2), iY[1] = Math.max(vY, (QY + vY) / 2)
              }
              var oY = [Math.min(vY, (sY + vY) / 2), Math.max(vY, (sY + vY) / 2)];
              if (YY > oY[0] && YY <= oY[1] || YY >= iY[0] && YY <= iY[1]) {
                IY = FY[gY].index;
                break
              }
            } else {
              var WY = Math.min(aY, uY),
                EY = Math.max(aY, uY);
              if (YY > (WY + vY) / 2 && YY <= (EY + vY) / 2) {
                IY = FY[gY].index;
                break
              }
            }
          } else
            for (var mY = 0; mY < RY; mY++)
              if (0 === mY && YY <= (DY[mY].coordinate + DY[mY + 1].coordinate) / 2 || mY > 0 && mY < RY - 1 && YY > (DY[mY].coordinate + DY[mY - 1].coordinate) / 2 && YY <= (DY[mY].coordinate + DY[mY + 1].coordinate) / 2 || mY === RY - 1 && YY > (DY[mY].coordinate + DY[mY - 1].coordinate) / 2) {
                IY = DY[mY].index;
                break
              } return IY
      },
      KR = function(YY) {
        var rY, DY, FY = YY.type.displayName,
          AY = null !== (rY = YY.type) && void 0 !== rY && rY.defaultProps ? TR(TR({}, YY.type.defaultProps), YY.props) : YY.props,
          IY = AY.stroke,
          RY = AY.fill;
        switch (FY) {
          case "Line":
            DY = IY;
            break;
          case "Area":
          case "Radar":
            DY = IY && "none" !== IY ? IY : RY;
            break;
          default:
            DY = RY
        }
        return DY
      },
      HR = function(YY) {
        var rY = YY.barSize,
          DY = YY.totalSize,
          FY = YY.stackGroups,
          AY = void 0 === FY ? {} : FY;
        if (!AY) return {};
        for (var IY = {}, RY = Object.keys(AY), OY = 0, gY = RY.length; OY < gY; OY++)
          for (var aY = AY[RY[OY]].stackGroups, vY = Object.keys(aY), uY = 0, sY = vY.length; uY < sY; uY++) {
            var iY = aY[vY[uY]],
              yY = iY.items,
              QY = iY.cateAxisId,
              oY = yY.filter((function(YY) {
                return (0, WR.o)(YY.type).indexOf("Bar") >= 0
              }));
            if (oY && oY.length) {
              var WY = oY[0].type.defaultProps,
                EY = void 0 !== WY ? TR(TR({}, WY), oY[0].props) : oY[0].props,
                mY = EY.barSize,
                VY = EY[QY];
              IY[VY] || (IY[VY] = []);
              var SY = eI()(mY) ? rY : mY;
              IY[VY].push({
                item: oY[0],
                stackList: oY.slice(1),
                barSize: eI()(SY) ? void 0 : (0, oR.n)(SY, DY, 0)
              })
            }
          }
        return IY
      },
      zR = function(YY) {
        var rY = YY.barGap,
          DY = YY.barCategoryGap,
          FY = YY.bandSize,
          AY = YY.sizeList,
          IY = void 0 === AY ? [] : AY,
          RY = YY.maxBarSize,
          OY = IY.length;
        if (OY < 1) return null;
        var gY, aY = (0, oR.n)(rY, FY, 0, !0),
          vY = [];
        if (IY[0].barSize === +IY[0].barSize) {
          var uY = !1,
            sY = FY / OY,
            iY = IY.reduce((function(YY, rY) {
              return YY + rY.barSize || 0
            }), 0);
          (iY += (OY - 1) * aY) >= FY && (iY -= (OY - 1) * aY, aY = 0), iY >= FY && sY > 0 && (uY = !0, iY = OY * (sY *= .9));
          var yY = {
            offset: ((FY - iY) / 2 | 0) - aY,
            size: 0
          };
          gY = IY.reduce((function(YY, rY) {
            var DY = {
                item: rY.item,
                position: {
                  offset: yY.offset + yY.size + aY,
                  size: uY ? sY : rY.barSize
                }
              },
              FY = [].concat(VR(YY), [DY]);
            return yY = FY[FY.length - 1].position, rY.stackList && rY.stackList.length && rY.stackList.forEach((function(YY) {
              FY.push({
                item: YY,
                position: yY
              })
            })), FY
          }), vY)
        } else {
          var QY = (0, oR.n)(DY, FY, 0, !0);
          FY - 2 * QY - (OY - 1) * aY <= 0 && (aY = 0);
          var oY = (FY - 2 * QY - (OY - 1) * aY) / OY;
          oY > 1 && (oY >>= 0);
          var WY = RY === +RY ? Math.min(oY, RY) : oY;
          gY = IY.reduce((function(YY, rY, DY) {
            var FY = [].concat(VR(YY), [{
              item: rY.item,
              position: {
                offset: QY + (oY + aY) * DY + (oY - WY) / 2,
                size: WY
              }
            }]);
            return rY.stackList && rY.stackList.length && rY.stackList.forEach((function(YY) {
              FY.push({
                item: YY,
                position: FY[FY.length - 1].position
              })
            })), FY
          }), vY)
        }
        return gY
      },
      ZR = function(YY, rY, DY, FY) {
        var AY = DY.children,
          IY = DY.width,
          RY = DY.margin,
          OY = IY - (RY.left || 0) - (RY.right || 0),
          gY = (0, ER.c)({
            children: AY,
            legendWidth: OY
          });
        if (gY) {
          var aY = FY || {},
            vY = aY.width,
            uY = aY.height,
            sY = gY.align,
            iY = gY.verticalAlign,
            yY = gY.layout;
          if (("vertical" === yY || "horizontal" === yY && "middle" === iY) && "center" !== sY && (0, oR.w)(YY[sY])) return TR(TR({}, YY), {}, eR({}, sY, YY[sY] + (vY || 0)));
          if (("horizontal" === yY || "vertical" === yY && "center" === sY) && "middle" !== iY && (0, oR.w)(YY[iY])) return TR(TR({}, YY), {}, eR({}, iY, YY[iY] + (uY || 0)))
        }
        return YY
      },
      CR = function(YY, rY, DY, FY, AY) {
        var IY = rY.props.children,
          RY = (0, WR.h)(IY, QR.b).filter((function(YY) {
            return function(YY, rY, DY) {
              return !!eI()(rY) || ("horizontal" === YY ? "yAxis" === rY : "vertical" === YY || "x" === DY ? "xAxis" === rY : "y" !== DY || "yAxis" === rY)
            }(FY, AY, YY.props.direction)
          }));
        if (RY && RY.length) {
          var OY = RY.map((function(YY) {
            return YY.props.dataKey
          }));
          return YY.reduce((function(YY, rY) {
            var FY = NR(rY, DY);
            if (eI()(FY)) return YY;
            var AY = Array.isArray(FY) ? [lI()(FY), VI()(FY)] : [FY, FY],
              IY = OY.reduce((function(YY, DY) {
                var FY = NR(rY, DY, 0),
                  IY = AY[0] - Math.abs(Array.isArray(FY) ? FY[0] : FY),
                  RY = AY[1] + Math.abs(Array.isArray(FY) ? FY[1] : FY);
                return [Math.min(IY, YY[0]), Math.max(RY, YY[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(IY[0], YY[0]), Math.max(IY[1], YY[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      fR = function(YY, rY, DY, FY, AY) {
        var IY = rY.map((function(rY) {
          return CR(YY, rY, DY, AY, FY)
        })).filter((function(YY) {
          return !eI()(YY)
        }));
        return IY && IY.length ? IY.reduce((function(YY, rY) {
          return [Math.min(YY[0], rY[0]), Math.max(YY[1], rY[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      jR = function(YY, rY, DY, FY, AY) {
        var IY = rY.map((function(rY) {
          var IY = rY.props.dataKey;
          return "number" === DY && IY && CR(YY, rY, IY, FY) || BR(YY, IY, DY, AY)
        }));
        if ("number" === DY) return IY.reduce((function(YY, rY) {
          return [Math.min(YY[0], rY[0]), Math.max(YY[1], rY[1])]
        }), [1 / 0, -1 / 0]);
        var RY = {};
        return IY.reduce((function(YY, rY) {
          for (var DY = 0, FY = rY.length; DY < FY; DY++) RY[rY[DY]] || (RY[rY[DY]] = !0, YY.push(rY[DY]));
          return YY
        }), [])
      },
      hR = function(YY, rY) {
        return "horizontal" === YY && "xAxis" === rY || "vertical" === YY && "yAxis" === rY || "centric" === YY && "angleAxis" === rY || "radial" === YY && "radiusAxis" === rY
      },
      dR = function(YY, rY, DY, FY) {
        if (FY) return YY.map((function(YY) {
          return YY.coordinate
        }));
        var AY, IY, RY = YY.map((function(YY) {
          return YY.coordinate === rY && (AY = !0), YY.coordinate === DY && (IY = !0), YY.coordinate
        }));
        return AY || RY.push(rY), IY || RY.push(DY), RY
      },
      JR = function(YY, rY, DY) {
        if (!YY) return null;
        var FY = YY.scale,
          AY = YY.duplicateDomain,
          IY = YY.type,
          RY = YY.range,
          OY = "scaleBand" === YY.realScaleType ? FY.bandwidth() / 2 : 2,
          gY = (rY || DY) && "category" === IY && FY.bandwidth ? FY.bandwidth() / OY : 0;
        return gY = "angleAxis" === YY.axisType && (null === RY || void 0 === RY ? void 0 : RY.length) >= 2 ? 2 * (0, oR.C)(RY[0] - RY[1]) * gY : gY, rY && (YY.ticks || YY.niceTicks) ? (YY.ticks || YY.niceTicks).map((function(YY) {
          var rY = AY ? AY.indexOf(YY) : YY;
          return {
            coordinate: FY(rY) + gY,
            value: YY,
            offset: gY
          }
        })).filter((function(YY) {
          return !jI()(YY.coordinate)
        })) : YY.isCategorical && YY.categoricalDomain ? YY.categoricalDomain.map((function(YY, rY) {
          return {
            coordinate: FY(YY) + gY,
            value: YY,
            index: rY,
            offset: gY
          }
        })) : FY.ticks && !DY ? FY.ticks(YY.tickCount).map((function(YY) {
          return {
            coordinate: FY(YY) + gY,
            value: YY,
            offset: gY
          }
        })) : FY.domain().map((function(YY, rY) {
          return {
            coordinate: FY(YY) + gY,
            value: AY ? AY[YY] : YY,
            index: rY,
            offset: gY
          }
        }))
      },
      MR = new WeakMap,
      wR = function(YY, rY) {
        if ("function" !== typeof rY) return YY;
        MR.has(YY) || MR.set(YY, new WeakMap);
        var DY = MR.get(YY);
        if (DY.has(rY)) return DY.get(rY);
        var FY = function() {
          YY.apply(void 0, arguments), rY.apply(void 0, arguments)
        };
        return DY.set(rY, FY), FY
      },
      bR = function(YY, rY, DY) {
        var IY = YY.scale,
          RY = YY.type,
          OY = YY.layout,
          gY = YY.axisType;
        if ("auto" === IY) return "radial" === OY && "radiusAxis" === gY ? {
          scale: AY.b(),
          realScaleType: "band"
        } : "radial" === OY && "angleAxis" === gY ? {
          scale: xr(),
          realScaleType: "linear"
        } : "category" === RY && rY && (rY.indexOf("LineChart") >= 0 || rY.indexOf("AreaChart") >= 0 || rY.indexOf("ComposedChart") >= 0 && !DY) ? {
          scale: AY.c(),
          realScaleType: "point"
        } : "category" === RY ? {
          scale: AY.b(),
          realScaleType: "band"
        } : {
          scale: xr(),
          realScaleType: "linear"
        };
        if (KI()(IY)) {
          var aY = "scale".concat(dI()(IY));
          return {
            scale: (FY[aY] || AY.c)(),
            realScaleType: FY[aY] ? aY : "point"
          }
        }
        return BI()(IY) ? {
          scale: IY
        } : {
          scale: AY.c(),
          realScaleType: "point"
        }
      },
      XR = 1e-4,
      qR = function(YY) {
        var rY = YY.domain();
        if (rY && !(rY.length <= 2)) {
          var DY = rY.length,
            FY = YY.range(),
            AY = Math.min(FY[0], FY[1]) - XR,
            IY = Math.max(FY[0], FY[1]) + XR,
            RY = YY(rY[0]),
            OY = YY(rY[DY - 1]);
          (RY < AY || RY > IY || OY < AY || OY > IY) && YY.domain([rY[0], rY[DY - 1]])
        }
      },
      pR = function(YY, rY) {
        if (!YY) return null;
        for (var DY = 0, FY = YY.length; DY < FY; DY++)
          if (YY[DY].item === rY) return YY[DY].position;
        return null
      },
      kR = function(YY, rY) {
        if (!rY || 2 !== rY.length || !(0, oR.w)(rY[0]) || !(0, oR.w)(rY[1])) return YY;
        var DY = Math.min(rY[0], rY[1]),
          FY = Math.max(rY[0], rY[1]),
          AY = [YY[0], YY[1]];
        return (!(0, oR.w)(YY[0]) || YY[0] < DY) && (AY[0] = DY), (!(0, oR.w)(YY[1]) || YY[1] > FY) && (AY[1] = FY), AY[0] > FY && (AY[0] = FY), AY[1] < DY && (AY[1] = DY), AY
      },
      GR = {
        sign: function(YY) {
          var rY = YY.length;
          if (!(rY <= 0))
            for (var DY = 0, FY = YY[0].length; DY < FY; ++DY)
              for (var AY = 0, IY = 0, RY = 0; RY < rY; ++RY) {
                var OY = jI()(YY[RY][DY][1]) ? YY[RY][DY][0] : YY[RY][DY][1];
                OY >= 0 ? (YY[RY][DY][0] = AY, YY[RY][DY][1] = AY + OY, AY = YY[RY][DY][1]) : (YY[RY][DY][0] = IY, YY[RY][DY][1] = IY + OY, IY = YY[RY][DY][1])
              }
        },
        expand: function(YY, rY) {
          if ((FY = YY.length) > 0) {
            for (var DY, FY, AY, IY = 0, RY = YY[0].length; IY < RY; ++IY) {
              for (AY = DY = 0; DY < FY; ++DY) AY += YY[DY][IY][1] || 0;
              if (AY)
                for (DY = 0; DY < FY; ++DY) YY[DY][IY][1] /= AY
            }
            iI(YY, rY)
          }
        },
        none: iI,
        silhouette: function(YY, rY) {
          if ((DY = YY.length) > 0) {
            for (var DY, FY = 0, AY = YY[rY[0]], IY = AY.length; FY < IY; ++FY) {
              for (var RY = 0, OY = 0; RY < DY; ++RY) OY += YY[RY][FY][1] || 0;
              AY[FY][1] += AY[FY][0] = -OY / 2
            }
            iI(YY, rY)
          }
        },
        wiggle: function(YY, rY) {
          if ((AY = YY.length) > 0 && (FY = (DY = YY[rY[0]]).length) > 0) {
            for (var DY, FY, AY, IY = 0, RY = 1; RY < FY; ++RY) {
              for (var OY = 0, gY = 0, aY = 0; OY < AY; ++OY) {
                for (var vY = YY[rY[OY]], uY = vY[RY][1] || 0, sY = (uY - (vY[RY - 1][1] || 0)) / 2, iY = 0; iY < OY; ++iY) {
                  var yY = YY[rY[iY]];
                  sY += (yY[RY][1] || 0) - (yY[RY - 1][1] || 0)
                }
                gY += uY, aY += sY * uY
              }
              DY[RY - 1][1] += DY[RY - 1][0] = IY, gY && (IY -= aY / gY)
            }
            DY[RY - 1][1] += DY[RY - 1][0] = IY, iI(YY, rY)
          }
        },
        positive: function(YY) {
          var rY = YY.length;
          if (!(rY <= 0))
            for (var DY = 0, FY = YY[0].length; DY < FY; ++DY)
              for (var AY = 0, IY = 0; IY < rY; ++IY) {
                var RY = jI()(YY[IY][DY][1]) ? YY[IY][DY][0] : YY[IY][DY][1];
                RY >= 0 ? (YY[IY][DY][0] = AY, YY[IY][DY][1] = AY + RY, AY = YY[IY][DY][1]) : (YY[IY][DY][0] = 0, YY[IY][DY][1] = 0)
              }
        }
      },
      xR = function(YY, rY, DY) {
        var FY = rY.map((function(YY) {
            return YY.props.dataKey
          })),
          AY = GR[DY],
          IY = function() {
            var YY = (0, QI.b)([]),
              rY = oI,
              DY = iI,
              FY = WI;

            function AY(AY) {
              var IY, RY, OY = Array.from(YY.apply(this, arguments), EI),
                gY = OY.length,
                aY = -1;
              for (const YY of AY)
                for (IY = 0, ++aY; IY < gY; ++IY)(OY[IY][aY] = [0, +FY(YY, OY[IY].key, aY, AY)]).data = YY;
              for (IY = 0, RY = (0, yI.c)(rY(OY)); IY < gY; ++IY) OY[RY[IY]].index = IY;
              return DY(OY, RY), OY
            }
            return AY.keys = function(rY) {
              return arguments.length ? (YY = "function" === typeof rY ? rY : (0, QI.b)(Array.from(rY)), AY) : YY
            }, AY.value = function(YY) {
              return arguments.length ? (FY = "function" === typeof YY ? YY : (0, QI.b)(+YY), AY) : FY
            }, AY.order = function(YY) {
              return arguments.length ? (rY = null == YY ? oI : "function" === typeof YY ? YY : (0, QI.b)(Array.from(YY)), AY) : rY
            }, AY.offset = function(YY) {
              return arguments.length ? (DY = null == YY ? iI : YY, AY) : DY
            }, AY
          }().keys(FY).value((function(YY, rY) {
            return +NR(YY, rY, 0)
          })).order(oI).offset(AY);
        return IY(YY)
      },
      nR = function(YY, rY, DY, FY, AY, IY) {
        if (!YY) return null;
        var RY = (IY ? rY.reverse() : rY).reduce((function(YY, rY) {
          var AY, IY = null !== (AY = rY.type) && void 0 !== AY && AY.defaultProps ? TR(TR({}, rY.type.defaultProps), rY.props) : rY.props,
            RY = IY.stackId;
          if (IY.hide) return YY;
          var OY = IY[DY],
            gY = YY[OY] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, oR.v)(RY)) {
            var aY = gY.stackGroups[RY] || {
              numericAxisId: DY,
              cateAxisId: FY,
              items: []
            };
            aY.items.push(rY), gY.hasStack = !0, gY.stackGroups[RY] = aY
          } else gY.stackGroups[(0, oR.F)("_stackId_")] = {
            numericAxisId: DY,
            cateAxisId: FY,
            items: [rY]
          };
          return TR(TR({}, YY), {}, eR({}, OY, gY))
        }), {});
        return Object.keys(RY).reduce((function(rY, IY) {
          var OY = RY[IY];
          if (OY.hasStack) {
            OY.stackGroups = Object.keys(OY.stackGroups).reduce((function(rY, IY) {
              var RY = OY.stackGroups[IY];
              return TR(TR({}, rY), {}, eR({}, IY, {
                numericAxisId: DY,
                cateAxisId: FY,
                items: RY.items,
                stackedData: xR(YY, RY.items, AY)
              }))
            }), {})
          }
          return TR(TR({}, rY), {}, eR({}, IY, OY))
        }), {})
      },
      PR = function(YY, rY) {
        var DY = rY.realScaleType,
          FY = rY.type,
          AY = rY.tickCount,
          IY = rY.originalDomain,
          RY = rY.allowDecimals,
          OY = DY || rY.scale;
        if ("auto" !== OY && "linear" !== OY) return null;
        if (AY && "number" === FY && IY && ("auto" === IY[0] || "auto" === IY[1])) {
          var gY = YY.domain();
          if (!gY.length) return null;
          var aY = iR(gY, AY, RY);
          return YY.domain([lI()(aY), VI()(aY)]), {
            niceTicks: aY
          }
        }
        if (AY && "number" === FY) {
          var vY = YY.domain();
          return {
            niceTicks: yR(vY, AY, RY)
          }
        }
        return null
      };

    function UR(YY) {
      var rY = YY.axis,
        DY = YY.ticks,
        FY = YY.bandSize,
        AY = YY.entry,
        IY = YY.index,
        RY = YY.dataKey;
      if ("category" === rY.type) {
        if (!rY.allowDuplicatedCategory && rY.dataKey && !eI()(AY[rY.dataKey])) {
          var OY = (0, oR.d)(DY, "value", AY[rY.dataKey]);
          if (OY) return OY.coordinate + FY / 2
        }
        return DY[IY] ? DY[IY].coordinate + FY / 2 : null
      }
      var gY = NR(AY, eI()(RY) ? rY.dataKey : RY);
      return eI()(gY) ? null : rY.scale(gY)
    }
    var LR = function(YY) {
        var rY = YY.axis,
          DY = YY.ticks,
          FY = YY.offset,
          AY = YY.bandSize,
          IY = YY.entry,
          RY = YY.index;
        if ("category" === rY.type) return DY[RY] ? DY[RY].coordinate + FY : null;
        var OY = NR(IY, rY.dataKey, rY.domain[RY]);
        return eI()(OY) ? null : rY.scale(OY) - AY / 2 + FY
      },
      tR = function(YY) {
        var rY = YY.numericAxis,
          DY = rY.scale.domain();
        if ("number" === rY.type) {
          var FY = Math.min(DY[0], DY[1]),
            AY = Math.max(DY[0], DY[1]);
          return FY <= 0 && AY >= 0 ? 0 : AY < 0 ? AY : FY
        }
        return DY[0]
      },
      YO = function(YY, rY) {
        var DY, FY = (null !== (DY = YY.type) && void 0 !== DY && DY.defaultProps ? TR(TR({}, YY.type.defaultProps), YY.props) : YY.props).stackId;
        if ((0, oR.v)(FY)) {
          var AY = rY[FY];
          if (AY) {
            var IY = AY.items.indexOf(YY);
            return IY >= 0 ? AY.stackedData[IY] : null
          }
        }
        return null
      },
      rO = function(YY, rY, DY) {
        return Object.keys(YY).reduce((function(FY, AY) {
          var IY = YY[AY].stackedData.reduce((function(YY, FY) {
            var AY = FY.slice(rY, DY + 1).reduce((function(YY, rY) {
              return [lI()(rY.concat([YY[0]]).filter(oR.w)), VI()(rY.concat([YY[1]]).filter(oR.w))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(YY[0], AY[0]), Math.max(YY[1], AY[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(IY[0], FY[0]), Math.max(IY[1], FY[1])]
        }), [1 / 0, -1 / 0]).map((function(YY) {
          return YY === 1 / 0 || YY === -1 / 0 ? 0 : YY
        }))
      },
      DO = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      FO = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      AO = function(YY, rY, DY) {
        if (BI()(YY)) return YY(rY, DY);
        if (!Array.isArray(YY)) return rY;
        var FY = [];
        if ((0, oR.w)(YY[0])) FY[0] = DY ? YY[0] : Math.min(YY[0], rY[0]);
        else if (DO.test(YY[0])) {
          var AY = +DO.exec(YY[0])[1];
          FY[0] = rY[0] - AY
        } else BI()(YY[0]) ? FY[0] = YY[0](rY[0]) : FY[0] = rY[0];
        if ((0, oR.w)(YY[1])) FY[1] = DY ? YY[1] : Math.max(YY[1], rY[1]);
        else if (FO.test(YY[1])) {
          var IY = +FO.exec(YY[1])[1];
          FY[1] = rY[1] + IY
        } else BI()(YY[1]) ? FY[1] = YY[1](rY[1]) : FY[1] = rY[1];
        return FY
      },
      IO = function(YY, rY, DY) {
        if (YY && YY.scale && YY.scale.bandwidth) {
          var FY = YY.scale.bandwidth();
          if (!DY || FY > 0) return FY
        }
        if (YY && rY && rY.length >= 2) {
          for (var AY = bI()(rY, (function(YY) {
              return YY.coordinate
            })), IY = 1 / 0, RY = 1, OY = AY.length; RY < OY; RY++) {
            var gY = AY[RY],
              aY = AY[RY - 1];
            IY = Math.min((gY.coordinate || 0) - (aY.coordinate || 0), IY)
          }
          return IY === 1 / 0 ? 0 : IY
        }
        return DY ? void 0 : 0
      },
      RO = function(YY, rY, DY) {
        return YY && YY.length ? MI()(YY, zI()(DY, "type.defaultProps.domain")) ? rY : YY : rY
      },
      OO = function(YY, rY) {
        var DY = YY.type.defaultProps ? TR(TR({}, YY.type.defaultProps), YY.props) : YY.props,
          FY = DY.dataKey,
          AY = DY.name,
          IY = DY.unit,
          RY = DY.formatter,
          OY = DY.tooltipType,
          gY = DY.chartType,
          aY = DY.hide;
        return TR(TR({}, (0, WR.d)(YY, !1)), {}, {
          dataKey: FY,
          unit: IY,
          formatter: RY,
          name: AY || FY,
          color: KR(YY),
          value: NR(rY, FY),
          type: OY,
          payload: rY,
          chartType: gY,
          hide: aY
        })
      }
  },
  5704: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => sY,
      d: () => uY
    });
    var FY = DY(5556);

    function AY(YY) {
      return AY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, AY(YY)
    }

    function IY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function RY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? IY(Object(DY), !0).forEach((function(rY) {
          OY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : IY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function OY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != AY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != AY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == AY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }
    var gY = {
        widthCache: {},
        cacheCount: 0
      },
      aY = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      vY = "recharts_measurement_span";
    var uY = function(YY) {
        var rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === YY || null === YY || FY.e.isSsr) return {
          width: 0,
          height: 0
        };
        var DY = function(YY) {
            var rY = RY({}, YY);
            return Object.keys(rY).forEach((function(YY) {
              rY[YY] || delete rY[YY]
            })), rY
          }(rY),
          AY = JSON.stringify({
            text: YY,
            copyStyle: DY
          });
        if (gY.widthCache[AY]) return gY.widthCache[AY];
        try {
          var IY = document.getElementById(vY);
          IY || ((IY = document.createElement("span")).setAttribute("id", vY), IY.setAttribute("aria-hidden", "true"), document.body.appendChild(IY));
          var OY = RY(RY({}, aY), DY);
          Object.assign(IY.style, OY), IY.textContent = "".concat(YY);
          var uY = IY.getBoundingClientRect(),
            sY = {
              width: uY.width,
              height: uY.height
            };
          return gY.widthCache[AY] = sY, ++gY.cacheCount > 2e3 && (gY.cacheCount = 0, gY.widthCache = {}), sY
        } catch (iY) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      sY = function(YY) {
        return {
          top: YY.top + window.scrollY - document.documentElement.clientTop,
          left: YY.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  4723: (YY, rY, DY) => {
    DY.d(rY, {
      C: () => iY,
      F: () => mY,
      c: () => BY,
      d: () => eY,
      g: () => SY,
      k: () => NY,
      n: () => VY,
      q: () => lY,
      r: () => TY,
      u: () => oY,
      v: () => WY,
      w: () => QY,
      y: () => yY
    });
    var FY = DY(4732),
      AY = DY.n(FY),
      IY = DY(4743),
      RY = DY.n(IY),
      OY = DY(4752),
      gY = DY.n(OY),
      aY = DY(4745),
      vY = DY.n(aY),
      uY = DY(5007),
      sY = DY.n(uY),
      iY = function(YY) {
        return 0 === YY ? 0 : YY > 0 ? 1 : -1
      },
      yY = function(YY) {
        return AY()(YY) && YY.indexOf("%") === YY.length - 1
      },
      QY = function(YY) {
        return vY()(YY) && !RY()(YY)
      },
      oY = function(YY) {
        return sY()(YY)
      },
      WY = function(YY) {
        return QY(YY) || AY()(YY)
      },
      EY = 0,
      mY = function(YY) {
        var rY = ++EY;
        return "".concat(YY || "").concat(rY)
      },
      VY = function(YY, rY) {
        var DY, FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          IY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!QY(YY) && !AY()(YY)) return FY;
        if (yY(YY)) {
          var OY = YY.indexOf("%");
          DY = rY * parseFloat(YY.slice(0, OY)) / 100
        } else DY = +YY;
        return RY()(DY) && (DY = FY), IY && DY > rY && (DY = rY), DY
      },
      SY = function(YY) {
        if (!YY) return null;
        var rY = Object.keys(YY);
        return rY && rY.length ? YY[rY[0]] : null
      },
      lY = function(YY) {
        if (!Array.isArray(YY)) return !1;
        for (var rY = YY.length, DY = {}, FY = 0; FY < rY; FY++) {
          if (DY[YY[FY]]) return !0;
          DY[YY[FY]] = !0
        }
        return !1
      },
      TY = function(YY, rY) {
        return QY(YY) && QY(rY) ? function(DY) {
          return YY + DY * (rY - YY)
        } : function() {
          return rY
        }
      };

    function eY(YY, rY, DY) {
      return YY && YY.length ? YY.find((function(YY) {
        return YY && ("function" === typeof rY ? rY(YY) : gY()(YY, rY)) === DY
      })) : null
    }
    var NY = function(YY) {
        if (!YY || !YY.length) return null;
        for (var rY = YY.length, DY = 0, FY = 0, AY = 0, IY = 0, RY = 1 / 0, OY = -1 / 0, gY = 0, aY = 0, vY = 0; vY < rY; vY++) DY += gY = YY[vY].cx || 0, FY += aY = YY[vY].cy || 0, AY += gY * aY, IY += gY * gY, RY = Math.min(RY, gY), OY = Math.max(OY, gY);
        var uY = rY * IY !== DY * DY ? (rY * AY - DY * FY) / (rY * IY - DY * DY) : 0;
        return {
          xmin: RY,
          xmax: OY,
          a: uY,
          b: (FY - uY * DY) / rY
        }
      },
      BY = function(YY, rY) {
        return QY(YY) && QY(rY) ? YY - rY : AY()(YY) && AY()(rY) ? YY.localeCompare(rY) : YY instanceof Date && rY instanceof Date ? YY.getTime() - rY.getTime() : String(YY).localeCompare(String(rY))
      }
  },
  5556: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY
    });
    var FY = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(YY) {
        return FY[YY]
      },
      set: function(YY, rY) {
        if ("string" === typeof YY) FY[YY] = rY;
        else {
          var DY = Object.keys(YY);
          DY && DY.length && DY.forEach((function(rY) {
            FY[rY] = YY[rY]
          }))
        }
      }
    }
  },
  5801: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    var FY = function(YY, rY) {
      var DY = YY.alwaysShow,
        FY = YY.ifOverflow;
      return DY && (FY = "extendDomain"), FY === rY
    }
  },
  5016: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    var FY = function(YY, rY) {
      for (var DY = arguments.length, FY = new Array(DY > 2 ? DY - 2 : 0), AY = 2; AY < DY; AY++) FY[AY - 2] = arguments[AY]
    }
  },
  5799: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY,
      g: () => sY,
      i: () => aY
    });
    DY(5007), DY(61), DY(4840);

    function FY(YY) {
      return FY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, FY(YY)
    }

    function AY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function IY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? AY(Object(DY), !0).forEach((function(rY) {
          RY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : AY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function RY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != FY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var AY = DY.call(YY, rY || "default");
            if ("object" != FY(AY)) return AY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == FY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }
    var OY = Math.PI / 180,
      gY = function(YY) {
        return 180 * YY / Math.PI
      },
      aY = function(YY, rY, DY, FY) {
        return {
          x: YY + Math.cos(-OY * FY) * DY,
          y: rY + Math.sin(-OY * FY) * DY
        }
      },
      vY = function(YY, rY) {
        var DY = YY.x,
          FY = YY.y,
          AY = rY.cx,
          IY = rY.cy,
          RY = function(YY, rY) {
            var DY = YY.x,
              FY = YY.y,
              AY = rY.x,
              IY = rY.y;
            return Math.sqrt(Math.pow(DY - AY, 2) + Math.pow(FY - IY, 2))
          }({
            x: DY,
            y: FY
          }, {
            x: AY,
            y: IY
          });
        if (RY <= 0) return {
          radius: RY
        };
        var OY = (DY - AY) / RY,
          aY = Math.acos(OY);
        return FY > IY && (aY = 2 * Math.PI - aY), {
          radius: RY,
          angle: gY(aY),
          angleInRadian: aY
        }
      },
      uY = function(YY, rY) {
        var DY = rY.startAngle,
          FY = rY.endAngle,
          AY = Math.floor(DY / 360),
          IY = Math.floor(FY / 360);
        return YY + 360 * Math.min(AY, IY)
      },
      sY = function(YY, rY) {
        var DY = YY.x,
          FY = YY.y,
          AY = vY({
            x: DY,
            y: FY
          }, rY),
          RY = AY.radius,
          OY = AY.angle,
          gY = rY.innerRadius,
          aY = rY.outerRadius;
        if (RY < gY || RY > aY) return !1;
        if (0 === RY) return !0;
        var sY, iY = function(YY) {
            var rY = YY.startAngle,
              DY = YY.endAngle,
              FY = Math.floor(rY / 360),
              AY = Math.floor(DY / 360),
              IY = Math.min(FY, AY);
            return {
              startAngle: rY - 360 * IY,
              endAngle: DY - 360 * IY
            }
          }(rY),
          yY = iY.startAngle,
          QY = iY.endAngle,
          oY = OY;
        if (yY <= QY) {
          for (; oY > QY;) oY -= 360;
          for (; oY < yY;) oY += 360;
          sY = oY >= yY && oY <= QY
        } else {
          for (; oY > yY;) oY -= 360;
          for (; oY < QY;) oY += 360;
          sY = oY >= QY && oY <= yY
        }
        return sY ? IY(IY({}, rY), {}, {
          radius: RY,
          angle: uY(oY, rY)
        }) : null
      }
  },
  5023: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => dY,
      C: () => HY,
      d: () => fY,
      h: () => cY,
      k: () => KY,
      o: () => TY,
      s: () => JY,
      w: () => CY,
      y: () => jY,
      z: () => MY
    });
    var FY = DY(4752),
      AY = DY.n(FY),
      IY = DY(5007),
      RY = DY.n(IY),
      OY = DY(4732),
      gY = DY.n(OY),
      aY = DY(4840),
      vY = DY.n(aY),
      uY = DY(4651),
      sY = DY.n(uY),
      iY = DY(61),
      yY = DY(5032),
      QY = DY(4723),
      oY = DY(5036),
      WY = DY(5040),
      EY = ["children"],
      mY = ["children"];

    function VY(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY = {};
        for (var FY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, FY)) {
            if (rY.indexOf(FY) >= 0) continue;
            DY[FY] = YY[FY]
          } return DY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }

    function SY(YY) {
      return SY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, SY(YY)
    }
    var lY = {
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
      TY = function(YY) {
        return "string" === typeof YY ? YY : YY ? YY.displayName || YY.name || "Component" : ""
      },
      eY = null,
      NY = null,
      BY = function YY(rY) {
        if (rY === eY && Array.isArray(NY)) return NY;
        var DY = [];
        return iY.Children.forEach(rY, (function(rY) {
          RY()(rY) || ((0, yY.isFragment)(rY) ? DY = DY.concat(YY(rY.props.children)) : DY.push(rY))
        })), NY = DY, eY = rY, DY
      };

    function cY(YY, rY) {
      var DY = [],
        FY = [];
      return FY = Array.isArray(rY) ? rY.map((function(YY) {
        return TY(YY)
      })) : [TY(rY)], BY(YY).forEach((function(YY) {
        var rY = AY()(YY, "type.displayName") || AY()(YY, "type.name"); - 1 !== FY.indexOf(rY) && DY.push(YY)
      })), DY
    }

    function KY(YY, rY) {
      var DY = cY(YY, rY);
      return DY && DY[0]
    }
    var HY = function(YY) {
        if (!YY || !YY.props) return !1;
        var rY = YY.props,
          DY = rY.width,
          FY = rY.height;
        return !(!(0, QY.w)(DY) || DY <= 0 || !(0, QY.w)(FY) || FY <= 0)
      },
      zY = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      ZY = function(YY) {
        return YY && YY.type && gY()(YY.type) && zY.indexOf(YY.type) >= 0
      },
      CY = function(YY) {
        return YY && "object" === SY(YY) && "clipDot" in YY
      },
      fY = function(YY, rY, DY) {
        if (!YY || "function" === typeof YY || "boolean" === typeof YY) return null;
        var FY = YY;
        if ((0, iY.isValidElement)(YY) && (FY = YY.props), !sY()(FY)) return null;
        var AY = {};
        return Object.keys(FY).forEach((function(YY) {
          var IY;
          (function(YY, rY, DY, FY) {
            var AY, IY = null !== (AY = null === WY.g || void 0 === WY.g ? void 0 : WY.g[FY]) && void 0 !== AY ? AY : [];
            return rY.startsWith("data-") || !vY()(YY) && (FY && IY.includes(rY) || WY.j.includes(rY)) || DY && WY.d.includes(rY)
          })(null === (IY = FY) || void 0 === IY ? void 0 : IY[YY], YY, rY, DY) && (AY[YY] = FY[YY])
        })), AY
      },
      jY = function YY(rY, DY) {
        if (rY === DY) return !0;
        var FY = iY.Children.count(rY);
        if (FY !== iY.Children.count(DY)) return !1;
        if (0 === FY) return !0;
        if (1 === FY) return hY(Array.isArray(rY) ? rY[0] : rY, Array.isArray(DY) ? DY[0] : DY);
        for (var AY = 0; AY < FY; AY++) {
          var IY = rY[AY],
            RY = DY[AY];
          if (Array.isArray(IY) || Array.isArray(RY)) {
            if (!YY(IY, RY)) return !1
          } else if (!hY(IY, RY)) return !1
        }
        return !0
      },
      hY = function(YY, rY) {
        if (RY()(YY) && RY()(rY)) return !0;
        if (!RY()(YY) && !RY()(rY)) {
          var DY = YY.props || {},
            FY = DY.children,
            AY = VY(DY, EY),
            IY = rY.props || {},
            OY = IY.children,
            gY = VY(IY, mY);
          return FY && OY ? (0, oY.b)(AY, gY) && jY(FY, OY) : !FY && !OY && (0, oY.b)(AY, gY)
        }
        return !1
      },
      dY = function(YY, rY) {
        var DY = [],
          FY = {};
        return BY(YY).forEach((function(YY, AY) {
          if (ZY(YY)) DY.push(YY);
          else if (YY) {
            var IY = TY(YY.type),
              RY = rY[IY] || {},
              OY = RY.handler,
              gY = RY.once;
            if (OY && (!gY || !FY[IY])) {
              var aY = OY(YY, IY, AY);
              DY.push(aY), FY[IY] = !0
            }
          }
        })), DY
      },
      JY = function(YY) {
        var rY = YY && YY.type;
        return rY && lY[rY] ? lY[rY] : null
      },
      MY = function(YY, rY) {
        return BY(rY).indexOf(YY)
      }
  },
  5036: (YY, rY, DY) => {
    function FY(YY, rY) {
      for (var DY in YY)
        if ({}.hasOwnProperty.call(YY, DY) && (!{}.hasOwnProperty.call(rY, DY) || YY[DY] !== rY[DY])) return !1;
      for (var FY in rY)
        if ({}.hasOwnProperty.call(rY, FY) && !{}.hasOwnProperty.call(YY, FY)) return !1;
      return !0
    }
    DY.d(rY, {
      b: () => FY
    })
  },
  5775: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => vY
    });
    var FY = DY(5621),
      AY = DY(5709),
      IY = DY(5023);

    function RY(YY) {
      return RY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, RY(YY)
    }

    function OY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function gY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? OY(Object(DY), !0).forEach((function(rY) {
          aY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : OY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function aY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != RY(YY) || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != RY(FY)) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == RY(rY) ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }
    var vY = function(YY) {
      var rY = YY.children,
        DY = YY.formattedGraphicalItems,
        RY = YY.legendWidth,
        OY = YY.legendContent,
        aY = (0, IY.k)(rY, FY.c);
      if (!aY) return null;
      var vY, uY = FY.c.defaultProps,
        sY = void 0 !== uY ? gY(gY({}, uY), aY.props) : {};
      return vY = aY.props && aY.props.payload ? aY.props && aY.props.payload : "children" === OY ? (DY || []).reduce((function(YY, rY) {
        var DY = rY.item,
          FY = rY.props,
          AY = FY.sectors || FY.data || [];
        return YY.concat(AY.map((function(YY) {
          return {
            type: aY.props.iconType || DY.props.legendType,
            value: YY.name,
            color: YY.fill,
            payload: YY
          }
        })))
      }), []) : (DY || []).map((function(YY) {
        var rY = YY.item,
          DY = rY.type.defaultProps,
          FY = void 0 !== DY ? gY(gY({}, DY), rY.props) : {},
          IY = FY.dataKey,
          RY = FY.name,
          OY = FY.legendType;
        return {
          inactive: FY.hide,
          dataKey: IY,
          type: sY.iconType || OY || "square",
          color: (0, AY.S)(rY),
          value: RY || IY,
          payload: FY
        }
      })), gY(gY(gY({}, sY), FY.c.getWithHeight(aY, RY)), {}, {
        payload: vY,
        item: aY
      })
    }
  },
  5563: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => OY
    });
    var FY = DY(5566),
      AY = DY.n(FY),
      IY = DY(4840),
      RY = DY.n(IY);

    function OY(YY, rY, DY) {
      return !0 === rY ? AY()(YY, DY) : RY()(rY) ? AY()(YY, rY) : YY
    }
  },
  5040: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => vY,
      g: () => aY,
      j: () => OY,
      n: () => uY,
      r: () => sY
    });
    var FY = DY(61),
      AY = DY(4651),
      IY = DY.n(AY);

    function RY(YY) {
      return RY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, RY(YY)
    }
    var OY = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "Ei", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      gY = ["points", "pathLength"],
      aY = {
        svg: ["viewBox", "children"],
        polygon: gY,
        polyline: gY
      },
      vY = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      uY = function(YY, rY) {
        if (!YY || "function" === typeof YY || "boolean" === typeof YY) return null;
        var DY = YY;
        if ((0, FY.isValidElement)(YY) && (DY = YY.props), !IY()(DY)) return null;
        var AY = {};
        return Object.keys(DY).forEach((function(YY) {
          vY.includes(YY) && (AY[YY] = rY || function(rY) {
            return DY[YY](DY, rY)
          })
        })), AY
      },
      sY = function(YY, rY, DY) {
        if (!IY()(YY) || "object" !== RY(YY)) return null;
        var FY = null;
        return Object.keys(YY).forEach((function(AY) {
          var IY = YY[AY];
          vY.includes(AY) && "function" === typeof IY && (FY || (FY = {}), FY[AY] = function(YY, rY, DY) {
            return function(FY) {
              return YY(rY, DY, FY), null
            }
          }(IY, rY, DY))
        })), FY
      }
  },
  5034: (YY, rY) => {
    var DY, FY = Symbol.for("react.element"),
      AY = Symbol.for("react.portal"),
      IY = Symbol.for("react.fragment"),
      RY = Symbol.for("react.strict_mode"),
      OY = Symbol.for("react.profiler"),
      gY = Symbol.for("react.provider"),
      aY = Symbol.for("react.context"),
      vY = Symbol.for("react.server_context"),
      uY = Symbol.for("react.forward_ref"),
      sY = Symbol.for("react.suspense"),
      iY = Symbol.for("react.suspense_list"),
      yY = Symbol.for("react.memo"),
      QY = Symbol.for("react.lazy"),
      oY = Symbol.for("react.offscreen");

    function WY(YY) {
      if ("object" === typeof YY && null !== YY) {
        var rY = YY.$$typeof;
        switch (rY) {
          case FY:
            switch (YY = YY.type) {
              case IY:
              case OY:
              case RY:
              case sY:
              case iY:
                return YY;
              default:
                switch (YY = YY && YY.$$typeof) {
                  case vY:
                  case aY:
                  case uY:
                  case QY:
                  case yY:
                  case gY:
                    return YY;
                  default:
                    return rY
                }
            }
          case AY:
            return rY
        }
      }
    }
    DY = Symbol.for("react.module.reference"), rY.isFragment = function(YY) {
      return WY(YY) === IY
    }
  },
  5032: (YY, rY, DY) => {
    YY.exports = DY(5034)
  },
  4638: (YY, rY, DY) => {
    function FY(YY) {
      var rY, DY, AY = "";
      if ("string" == typeof YY || "number" == typeof YY) AY += YY;
      else if ("object" == typeof YY)
        if (Array.isArray(YY)) {
          var IY = YY.length;
          for (rY = 0; rY < IY; rY++) YY[rY] && (DY = FY(YY[rY])) && (AY && (AY += " "), AY += DY)
        } else
          for (DY in YY) YY[DY] && (AY && (AY += " "), AY += DY);
      return AY
    }
    DY.d(rY, {
      d: () => AY
    });
    const AY = function() {
      for (var YY, rY, DY = 0, AY = "", IY = arguments.length; DY < IY; DY++)(YY = arguments[DY]) && (rY = FY(YY)) && (AY && (AY += " "), AY += rY);
      return AY
    }
  },
  5713: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      c: () => OY
    });
    var FY = DY(5719),
      AY = DY(5721);

    function IY() {
      var YY, rY, DY = (0, AY.e)().unknown(void 0),
        RY = DY.domain,
        OY = DY.range,
        gY = 0,
        aY = 1,
        vY = !1,
        uY = 0,
        sY = 0,
        iY = .5;

      function yY() {
        var DY = RY().length,
          FY = aY < gY,
          AY = FY ? aY : gY,
          IY = FY ? gY : aY;
        YY = (IY - AY) / Math.max(1, DY - uY + 2 * sY), vY && (YY = Math.floor(YY)), AY += (IY - AY - YY * (DY - uY)) * iY, rY = YY * (1 - uY), vY && (AY = Math.round(AY), rY = Math.round(rY));
        var yY = function(YY, rY, DY) {
          YY = +YY, rY = +rY, DY = (AY = arguments.length) < 2 ? (rY = YY, YY = 0, 1) : AY < 3 ? 1 : +DY;
          for (var FY = -1, AY = 0 | Math.max(0, Math.ceil((rY - YY) / DY)), IY = new Array(AY); ++FY < AY;) IY[FY] = YY + FY * DY;
          return IY
        }(DY).map((function(rY) {
          return AY + YY * rY
        }));
        return OY(FY ? yY.reverse() : yY)
      }
      return delete DY.unknown, DY.domain = function(YY) {
        return arguments.length ? (RY(YY), yY()) : RY()
      }, DY.range = function(YY) {
        return arguments.length ? ([gY, aY] = YY, gY = +gY, aY = +aY, yY()) : [gY, aY]
      }, DY.rangeRound = function(YY) {
        return [gY, aY] = YY, gY = +gY, aY = +aY, vY = !0, yY()
      }, DY.bandwidth = function() {
        return rY
      }, DY.step = function() {
        return YY
      }, DY.round = function(YY) {
        return arguments.length ? (vY = !!YY, yY()) : vY
      }, DY.padding = function(YY) {
        return arguments.length ? (uY = Math.min(1, sY = +YY), yY()) : uY
      }, DY.paddingInner = function(YY) {
        return arguments.length ? (uY = Math.min(1, YY), yY()) : uY
      }, DY.paddingOuter = function(YY) {
        return arguments.length ? (sY = +YY, yY()) : sY
      }, DY.align = function(YY) {
        return arguments.length ? (iY = Math.max(0, Math.min(1, YY)), yY()) : iY
      }, DY.copy = function() {
        return IY(RY(), [gY, aY]).round(vY).paddingInner(uY).paddingOuter(sY).align(iY)
      }, FY.g.apply(yY(), arguments)
    }

    function RY(YY) {
      var rY = YY.copy;
      return YY.padding = YY.paddingOuter, delete YY.paddingInner, delete YY.paddingOuter, YY.copy = function() {
        return RY(rY())
      }, YY
    }

    function OY() {
      return RY(IY.apply(null, arguments).paddingInner(1))
    }
  },
  5719: (YY, rY, DY) => {
    function FY(YY, rY) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(YY);
          break;
        default:
          this.range(rY).domain(YY)
      }
      return this
    }

    function AY(YY, rY) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof YY ? this.interpolator(YY) : this.range(YY);
          break;
        default:
          this.domain(YY), "function" === typeof rY ? this.interpolator(rY) : this.range(rY)
      }
      return this
    }
    DY.d(rY, {
      e: () => AY,
      g: () => FY
    })
  },
  5721: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => vY,
      f: () => aY
    });
    class FY extends Map {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OY;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: rY
            }
          }), null != YY)
          for (const [DY, FY] of YY) this.set(DY, FY)
      }
      get(YY) {
        return super.get(AY(this, YY))
      }
      has(YY) {
        return super.has(AY(this, YY))
      }
      set(YY, rY) {
        return super.set(IY(this, YY), rY)
      }
      delete(YY) {
        return super.delete(RY(this, YY))
      }
    }
    Set;

    function AY(YY, rY) {
      let {
        _intern: DY,
        _key: FY
      } = YY;
      const AY = FY(rY);
      return DY.has(AY) ? DY.get(AY) : rY
    }

    function IY(YY, rY) {
      let {
        _intern: DY,
        _key: FY
      } = YY;
      const AY = FY(rY);
      return DY.has(AY) ? DY.get(AY) : (DY.set(AY, rY), rY)
    }

    function RY(YY, rY) {
      let {
        _intern: DY,
        _key: FY
      } = YY;
      const AY = FY(rY);
      return DY.has(AY) && (rY = DY.get(AY), DY.delete(AY)), rY
    }

    function OY(YY) {
      return null !== YY && "object" === typeof YY ? YY.valueOf() : YY
    }
    var gY = DY(5719);
    const aY = Symbol("implicit");

    function vY() {
      var YY = new FY,
        rY = [],
        DY = [],
        AY = aY;

      function IY(FY) {
        let IY = YY.get(FY);
        if (void 0 === IY) {
          if (AY !== aY) return AY;
          YY.set(FY, IY = rY.push(FY) - 1)
        }
        return DY[IY % DY.length]
      }
      return IY.domain = function(DY) {
        if (!arguments.length) return rY.slice();
        rY = [], YY = new FY;
        for (const FY of DY) YY.has(FY) || YY.set(FY, rY.push(FY) - 1);
        return IY
      }, IY.range = function(YY) {
        return arguments.length ? (DY = Array.from(YY), IY) : DY.slice()
      }, IY.unknown = function(YY) {
        return arguments.length ? (AY = YY, IY) : AY
      }, IY.copy = function() {
        return vY(rY, DY).unknown(AY)
      }, gY.g.apply(IY, arguments), IY
    }
  },
  5783: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY
    });
    Array.prototype.slice;

    function FY(YY) {
      return "object" === typeof YY && "length" in YY ? YY : Array.from(YY)
    }
  },
  5671: (YY, rY, DY) => {
    function FY(YY) {
      return function() {
        return YY
      }
    }
    DY.d(rY, {
      b: () => FY
    })
  },
  5679: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => aY
    });
    const FY = Math.PI,
      AY = 2 * FY,
      IY = 1e-6,
      RY = AY - IY;

    function OY(YY) {
      this._ += YY[0];
      for (let rY = 1, DY = YY.length; rY < DY; ++rY) this._ += arguments[rY] + YY[rY]
    }
    class gY {
      constructor(YY) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == YY ? OY : function(YY) {
          let rY = Math.floor(YY);
          if (!(rY >= 0)) throw new Error(`invalid digits: ${YY}`);
          if (rY > 15) return OY;
          const DY = 10 ** rY;
          return function(YY) {
            this._ += YY[0];
            for (let rY = 1, FY = YY.length; rY < FY; ++rY) this._ += Math.round(arguments[rY] * DY) / DY + YY[rY]
          }
        }(YY)
      }
      moveTo(YY, rY) {
        this._append`M${this._x0=this._x1=+YY},${this._y0=this._y1=+rY}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(YY, rY) {
        this._append`L${this._x1=+YY},${this._y1=+rY}`
      }
      quadraticCurveTo(YY, rY, DY, FY) {
        this._append`Q${+YY},${+rY},${this._x1=+DY},${this._y1=+FY}`
      }
      bezierCurveTo(YY, rY, DY, FY, AY, IY) {
        this._append`C${+YY},${+rY},${+DY},${+FY},${this._x1=+AY},${this._y1=+IY}`
      }
      arcTo(YY, rY, DY, AY, RY) {
        if (YY = +YY, rY = +rY, DY = +DY, AY = +AY, (RY = +RY) < 0) throw new Error(`negative radius: ${RY}`);
        let OY = this._x1,
          gY = this._y1,
          aY = DY - YY,
          vY = AY - rY,
          uY = OY - YY,
          sY = gY - rY,
          iY = uY * uY + sY * sY;
        if (null === this._x1) this._append`M${this._x1=YY},${this._y1=rY}`;
        else if (iY > IY)
          if (Math.abs(sY * aY - vY * uY) > IY && RY) {
            let yY = DY - OY,
              QY = AY - gY,
              oY = aY * aY + vY * vY,
              WY = yY * yY + QY * QY,
              EY = Math.sqrt(oY),
              mY = Math.sqrt(iY),
              VY = RY * Math.tan((FY - Math.acos((oY + iY - WY) / (2 * EY * mY))) / 2),
              SY = VY / mY,
              lY = VY / EY;
            Math.abs(SY - 1) > IY && this._append`L${YY+SY*uY},${rY+SY*sY}`, this._append`A${RY},${RY},0,0,${+(sY*yY>uY*QY)},${this._x1=YY+lY*aY},${this._y1=rY+lY*vY}`
          } else this._append`L${this._x1=YY},${this._y1=rY}`;
        else;
      }
      arc(YY, rY, DY, OY, gY, aY) {
        if (YY = +YY, rY = +rY, aY = !!aY, (DY = +DY) < 0) throw new Error(`negative radius: ${DY}`);
        let vY = DY * Math.cos(OY),
          uY = DY * Math.sin(OY),
          sY = YY + vY,
          iY = rY + uY,
          yY = 1 ^ aY,
          QY = aY ? OY - gY : gY - OY;
        null === this._x1 ? this._append`M${sY},${iY}` : (Math.abs(this._x1 - sY) > IY || Math.abs(this._y1 - iY) > IY) && this._append`L${sY},${iY}`, DY && (QY < 0 && (QY = QY % AY + AY), QY > RY ? this._append`A${DY},${DY},0,1,${yY},${YY-vY},${rY-uY}A${DY},${DY},0,1,${yY},${this._x1=sY},${this._y1=iY}` : QY > IY && this._append`A${DY},${DY},0,${+(QY>=FY)},${yY},${this._x1=YY+DY*Math.cos(gY)},${this._y1=rY+DY*Math.sin(gY)}`)
      }
      rect(YY, rY, DY, FY) {
        this._append`M${this._x0=this._x1=+YY},${this._y0=this._y1=+rY}h${DY=+DY}v${+FY}h${-DY}Z`
      }
      toString() {
        return this._
      }
    }

    function aY(YY) {
      let rY = 3;
      return YY.digits = function(DY) {
        if (!arguments.length) return rY;
        if (null == DY) rY = null;
        else {
          const YY = Math.floor(DY);
          if (!(YY >= 0)) throw new RangeError(`invalid digits: ${DY}`);
          rY = YY
        }
        return YY
      }, () => new gY(rY)
    }
    gY.prototype
  },
  5536: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = !0,
      AY = "Invariant failed";

    function IY(YY, rY) {
      if (!YY) {
        if (FY) throw new Error(AY);
        var DY = "function" === typeof rY ? rY() : rY,
          IY = DY ? "".concat(AY, ": ").concat(DY) : AY;
        throw new Error(IY)
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);