/*! For license information please see 98edle.95.9be7400c.chunk.js.LICENSE.txt */
export const id = 95;
export const ids = [95];
export const modules = {
  5182: function(WW, RW, MW) {
    var wW;
    ! function() {
      var CW, zR = 1e9,
        AW = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        bR = !0,
        yR = "[DecimalError] ",
        NW = yR + "Invalid argument: ",
        eW = yR + "Exponent out of range: ",
        BW = Math.floor,
        tR = Math.pow,
        TW = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        gR = 1e7,
        iR = 9007199254740991,
        YW = BW(1286742750677284.5),
        JW = {};

      function PW(WW, RW) {
        var MW, wW, CW, zR, AW, yR, NW, eW, BW = WW.constructor,
          tR = BW.precision;
        if (!WW.s || !RW.s) return RW.s || (RW = new BW(WW)), bR ? jR(RW, tR) : RW;
        if (NW = WW.d, eW = RW.d, AW = WW.e, CW = RW.e, NW = NW.slice(), zR = AW - CW) {
          for (zR < 0 ? (wW = NW, zR = -zR, yR = eW.length) : (wW = eW, CW = AW, yR = NW.length), zR > (yR = (AW = Math.ceil(tR / 7)) > yR ? AW + 1 : yR + 1) && (zR = yR, wW.length = 1), wW.reverse(); zR--;) wW.push(0);
          wW.reverse()
        }
        for ((yR = NW.length) - (zR = eW.length) < 0 && (zR = yR, wW = eW, eW = NW, NW = wW), MW = 0; zR;) MW = (NW[--zR] = NW[zR] + eW[zR] + MW) / gR | 0, NW[zR] %= gR;
        for (MW && (NW.unshift(MW), ++CW), yR = NW.length; 0 == NW[--yR];) NW.pop();
        return RW.d = NW, RW.e = CW, bR ? jR(RW, tR) : RW
      }

      function IW(WW, RW, MW) {
        if (WW !== ~~WW || WW < RW || WW > MW) throw Error(NW + WW)
      }

      function oW(WW) {
        var RW, MW, wW, CW = WW.length - 1,
          zR = "",
          AW = WW[0];
        if (CW > 0) {
          for (zR += AW, RW = 1; RW < CW; RW++)(MW = 7 - (wW = WW[RW] + "").length) && (zR += rR(MW)), zR += wW;
          (MW = 7 - (wW = (AW = WW[RW]) + "").length) && (zR += rR(MW))
        } else if (0 === AW) return "0";
        for (; AW % 10 === 0;) AW /= 10;
        return zR + AW
      }
      JW.absoluteValue = JW.abs = function() {
        var WW = new this.constructor(this);
        return WW.s && (WW.s = 1), WW
      }, JW.comparedTo = JW.cmp = function(WW) {
        var RW, MW, wW, CW, zR = this;
        if (WW = new zR.constructor(WW), zR.s !== WW.s) return zR.s || -WW.s;
        if (zR.e !== WW.e) return zR.e > WW.e ^ zR.s < 0 ? 1 : -1;
        for (RW = 0, MW = (wW = zR.d.length) < (CW = WW.d.length) ? wW : CW; RW < MW; ++RW)
          if (zR.d[RW] !== WW.d[RW]) return zR.d[RW] > WW.d[RW] ^ zR.s < 0 ? 1 : -1;
        return wW === CW ? 0 : wW > CW ^ zR.s < 0 ? 1 : -1
      }, JW.decimalPlaces = JW.dp = function() {
        var WW = this,
          RW = WW.d.length - 1,
          MW = 7 * (RW - WW.e);
        if (RW = WW.d[RW])
          for (; RW % 10 == 0; RW /= 10) MW--;
        return MW < 0 ? 0 : MW
      }, JW.dividedBy = JW.div = function(WW) {
        return lW(this, new this.constructor(WW))
      }, JW.dividedToIntegerBy = JW.idiv = function(WW) {
        var RW = this.constructor;
        return jR(lW(this, new RW(WW), 0, 1), RW.precision)
      }, JW.equals = JW.eq = function(WW) {
        return !this.cmp(WW)
      }, JW.exponent = function() {
        return fW(this)
      }, JW.greaterThan = JW.gt = function(WW) {
        return this.cmp(WW) > 0
      }, JW.greaterThanOrEqualTo = JW.gte = function(WW) {
        return this.cmp(WW) >= 0
      }, JW.isInteger = JW.isint = function() {
        return this.e > this.d.length - 2
      }, JW.isNegative = JW.isneg = function() {
        return this.s < 0
      }, JW.isPositive = JW.ispos = function() {
        return this.s > 0
      }, JW.isZero = function() {
        return 0 === this.s
      }, JW.lessThan = JW.lt = function(WW) {
        return this.cmp(WW) < 0
      }, JW.lessThanOrEqualTo = JW.lte = function(WW) {
        return this.cmp(WW) < 1
      }, JW.logarithm = JW.log = function(WW) {
        var RW, MW = this,
          wW = MW.constructor,
          zR = wW.precision,
          AW = zR + 5;
        if (void 0 === WW) WW = new wW(10);
        else if ((WW = new wW(WW)).s < 1 || WW.eq(CW)) throw Error(yR + "NaN");
        if (MW.s < 1) throw Error(yR + (MW.s ? "NaN" : "-Infinity"));
        return MW.eq(CW) ? new wW(0) : (bR = !1, RW = lW(cR(MW, AW), cR(WW, AW), AW), bR = !0, jR(RW, zR))
      }, JW.minus = JW.sub = function(WW) {
        var RW = this;
        return WW = new RW.constructor(WW), RW.s == WW.s ? kR(RW, WW) : PW(RW, (WW.s = -WW.s, WW))
      }, JW.modulo = JW.mod = function(WW) {
        var RW, MW = this,
          wW = MW.constructor,
          CW = wW.precision;
        if (!(WW = new wW(WW)).s) throw Error(yR + "NaN");
        return MW.s ? (bR = !1, RW = lW(MW, WW, 0, 1).times(WW), bR = !0, MW.minus(RW)) : jR(new wW(MW), CW)
      }, JW.naturalExponential = JW.exp = function() {
        return FW(this)
      }, JW.naturalLogarithm = JW.ln = function() {
        return cR(this)
      }, JW.negated = JW.neg = function() {
        var WW = new this.constructor(this);
        return WW.s = -WW.s || 0, WW
      }, JW.plus = JW.add = function(WW) {
        var RW = this;
        return WW = new RW.constructor(WW), RW.s == WW.s ? PW(RW, WW) : kR(RW, (WW.s = -WW.s, WW))
      }, JW.precision = JW.sd = function(WW) {
        var RW, MW, wW, CW = this;
        if (void 0 !== WW && WW !== !!WW && 1 !== WW && 0 !== WW) throw Error(NW + WW);
        if (RW = fW(CW) + 1, MW = 7 * (wW = CW.d.length - 1) + 1, wW = CW.d[wW]) {
          for (; wW % 10 == 0; wW /= 10) MW--;
          for (wW = CW.d[0]; wW >= 10; wW /= 10) MW++
        }
        return WW && RW > MW ? RW : MW
      }, JW.squareRoot = JW.sqrt = function() {
        var WW, RW, MW, wW, CW, zR, AW, NW = this,
          eW = NW.constructor;
        if (NW.s < 1) {
          if (!NW.s) return new eW(0);
          throw Error(yR + "NaN")
        }
        for (WW = fW(NW), bR = !1, 0 == (CW = Math.sqrt(+NW)) || CW == 1 / 0 ? (((RW = oW(NW.d)).length + WW) % 2 == 0 && (RW += "0"), CW = Math.sqrt(RW), WW = BW((WW + 1) / 2) - (WW < 0 || WW % 2), wW = new eW(RW = CW == 1 / 0 ? "1e" + WW : (RW = CW.toExponential()).slice(0, RW.indexOf("e") + 1) + WW)) : wW = new eW(CW.toString()), CW = AW = (MW = eW.precision) + 3;;)
          if (wW = (zR = wW).plus(lW(NW, zR, AW + 2)).times(.5), oW(zR.d).slice(0, AW) === (RW = oW(wW.d)).slice(0, AW)) {
            if (RW = RW.slice(AW - 3, AW + 1), CW == AW && "4999" == RW) {
              if (jR(zR, MW + 1, 0), zR.times(zR).eq(NW)) {
                wW = zR;
                break
              }
            } else if ("9999" != RW) break;
            AW += 4
          } return bR = !0, jR(wW, MW)
      }, JW.times = JW.mul = function(WW) {
        var RW, MW, wW, CW, zR, AW, yR, NW, eW, BW = this,
          tR = BW.constructor,
          TW = BW.d,
          iR = (WW = new tR(WW)).d;
        if (!BW.s || !WW.s) return new tR(0);
        for (WW.s *= BW.s, MW = BW.e + WW.e, (NW = TW.length) < (eW = iR.length) && (zR = TW, TW = iR, iR = zR, AW = NW, NW = eW, eW = AW), zR = [], wW = AW = NW + eW; wW--;) zR.push(0);
        for (wW = eW; --wW >= 0;) {
          for (RW = 0, CW = NW + wW; CW > wW;) yR = zR[CW] + iR[wW] * TW[CW - wW - 1] + RW, zR[CW--] = yR % gR | 0, RW = yR / gR | 0;
          zR[CW] = (zR[CW] + RW) % gR | 0
        }
        for (; !zR[--AW];) zR.pop();
        return RW ? ++MW : zR.shift(), WW.d = zR, WW.e = MW, bR ? jR(WW, tR.precision) : WW
      }, JW.toDecimalPlaces = JW.todp = function(WW, RW) {
        var MW = this,
          wW = MW.constructor;
        return MW = new wW(MW), void 0 === WW ? MW : (IW(WW, 0, zR), void 0 === RW ? RW = wW.rounding : IW(RW, 0, 8), jR(MW, WW + fW(MW) + 1, RW))
      }, JW.toExponential = function(WW, RW) {
        var MW, wW = this,
          CW = wW.constructor;
        return void 0 === WW ? MW = aR(wW, !0) : (IW(WW, 0, zR), void 0 === RW ? RW = CW.rounding : IW(RW, 0, 8), MW = aR(wW = jR(new CW(wW), WW + 1, RW), !0, WW + 1)), MW
      }, JW.toFixed = function(WW, RW) {
        var MW, wW, CW = this,
          AW = CW.constructor;
        return void 0 === WW ? aR(CW) : (IW(WW, 0, zR), void 0 === RW ? RW = AW.rounding : IW(RW, 0, 8), MW = aR((wW = jR(new AW(CW), WW + fW(CW) + 1, RW)).abs(), !1, WW + fW(wW) + 1), CW.isneg() && !CW.isZero() ? "-" + MW : MW)
      }, JW.toInteger = JW.toint = function() {
        var WW = this,
          RW = WW.constructor;
        return jR(new RW(WW), fW(WW) + 1, RW.rounding)
      }, JW.toNumber = function() {
        return +this
      }, JW.toPower = JW.pow = function(WW) {
        var RW, MW, wW, zR, AW, NW, eW = this,
          tR = eW.constructor,
          TW = +(WW = new tR(WW));
        if (!WW.s) return new tR(CW);
        if (!(eW = new tR(eW)).s) {
          if (WW.s < 1) throw Error(yR + "Infinity");
          return eW
        }
        if (eW.eq(CW)) return eW;
        if (wW = tR.precision, WW.eq(CW)) return jR(eW, wW);
        if (NW = (RW = WW.e) >= (MW = WW.d.length - 1), AW = eW.s, NW) {
          if ((MW = TW < 0 ? -TW : TW) <= iR) {
            for (zR = new tR(CW), RW = Math.ceil(wW / 7 + 4), bR = !1; MW % 2 && sW((zR = zR.times(eW)).d, RW), 0 !== (MW = BW(MW / 2));) sW((eW = eW.times(eW)).d, RW);
            return bR = !0, WW.s < 0 ? new tR(CW).div(zR) : jR(zR, wW)
          }
        } else if (AW < 0) throw Error(yR + "NaN");
        return AW = AW < 0 && 1 & WW.d[Math.max(RW, MW)] ? -1 : 1, eW.s = 1, bR = !1, zR = WW.times(cR(eW, wW + 12)), bR = !0, (zR = FW(zR)).s = AW, zR
      }, JW.toPrecision = function(WW, RW) {
        var MW, wW, CW = this,
          AW = CW.constructor;
        return void 0 === WW ? wW = aR(CW, (MW = fW(CW)) <= AW.toExpNeg || MW >= AW.toExpPos) : (IW(WW, 1, zR), void 0 === RW ? RW = AW.rounding : IW(RW, 0, 8), wW = aR(CW = jR(new AW(CW), WW, RW), WW <= (MW = fW(CW)) || MW <= AW.toExpNeg, WW)), wW
      }, JW.toSignificantDigits = JW.tosd = function(WW, RW) {
        var MW = this.constructor;
        return void 0 === WW ? (WW = MW.precision, RW = MW.rounding) : (IW(WW, 1, zR), void 0 === RW ? RW = MW.rounding : IW(RW, 0, 8)), jR(new MW(this), WW, RW)
      }, JW.toString = JW.valueOf = JW.val = JW.toJSON = function() {
        var WW = this,
          RW = fW(WW),
          MW = WW.constructor;
        return aR(WW, RW <= MW.toExpNeg || RW >= MW.toExpPos)
      };
      var lW = function() {
        function WW(WW, RW) {
          var MW, wW = 0,
            CW = WW.length;
          for (WW = WW.slice(); CW--;) MW = WW[CW] * RW + wW, WW[CW] = MW % gR | 0, wW = MW / gR | 0;
          return wW && WW.unshift(wW), WW
        }

        function RW(WW, RW, MW, wW) {
          var CW, zR;
          if (MW != wW) zR = MW > wW ? 1 : -1;
          else
            for (CW = zR = 0; CW < MW; CW++)
              if (WW[CW] != RW[CW]) {
                zR = WW[CW] > RW[CW] ? 1 : -1;
                break
              } return zR
        }

        function MW(WW, RW, MW) {
          for (var wW = 0; MW--;) WW[MW] -= wW, wW = WW[MW] < RW[MW] ? 1 : 0, WW[MW] = wW * gR + WW[MW] - RW[MW];
          for (; !WW[0] && WW.length > 1;) WW.shift()
        }
        return function(wW, CW, zR, AW) {
          var bR, NW, eW, BW, tR, TW, iR, YW, JW, PW, IW, oW, lW, FW, QW, rR, cR, XW, kR = wW.constructor,
            aR = wW.s == CW.s ? 1 : -1,
            sW = wW.d,
            dW = CW.d;
          if (!wW.s) return new kR(wW);
          if (!CW.s) throw Error(yR + "Division by zero");
          for (NW = wW.e - CW.e, cR = dW.length, QW = sW.length, YW = (iR = new kR(aR)).d = [], eW = 0; dW[eW] == (sW[eW] || 0);) ++eW;
          if (dW[eW] > (sW[eW] || 0) && --NW, (oW = null == zR ? zR = kR.precision : AW ? zR + (fW(wW) - fW(CW)) + 1 : zR) < 0) return new kR(0);
          if (oW = oW / 7 + 2 | 0, eW = 0, 1 == cR)
            for (BW = 0, dW = dW[0], oW++;
              (eW < QW || BW) && oW--; eW++) lW = BW * gR + (sW[eW] || 0), YW[eW] = lW / dW | 0, BW = lW % dW | 0;
          else {
            for ((BW = gR / (dW[0] + 1) | 0) > 1 && (dW = WW(dW, BW), sW = WW(sW, BW), cR = dW.length, QW = sW.length), FW = cR, PW = (JW = sW.slice(0, cR)).length; PW < cR;) JW[PW++] = 0;
            (XW = dW.slice()).unshift(0), rR = dW[0], dW[1] >= gR / 2 && ++rR;
            do {
              BW = 0, (bR = RW(dW, JW, cR, PW)) < 0 ? (IW = JW[0], cR != PW && (IW = IW * gR + (JW[1] || 0)), (BW = IW / rR | 0) > 1 ? (BW >= gR && (BW = gR - 1), 1 == (bR = RW(tR = WW(dW, BW), JW, TW = tR.length, PW = JW.length)) && (BW--, MW(tR, cR < TW ? XW : dW, TW))) : (0 == BW && (bR = BW = 1), tR = dW.slice()), (TW = tR.length) < PW && tR.unshift(0), MW(JW, tR, PW), -1 == bR && (bR = RW(dW, JW, cR, PW = JW.length)) < 1 && (BW++, MW(JW, cR < PW ? XW : dW, PW)), PW = JW.length) : 0 === bR && (BW++, JW = [0]), YW[eW++] = BW, bR && JW[0] ? JW[PW++] = sW[FW] || 0 : (JW = [sW[FW]], PW = 1)
            } while ((FW++ < QW || void 0 !== JW[0]) && oW--)
          }
          return YW[0] || YW.shift(), iR.e = NW, jR(iR, AW ? zR + fW(iR) + 1 : zR)
        }
      }();

      function FW(WW, RW) {
        var MW, wW, zR, AW, yR, NW = 0,
          BW = 0,
          TW = WW.constructor,
          gR = TW.precision;
        if (fW(WW) > 16) throw Error(eW + fW(WW));
        if (!WW.s) return new TW(CW);
        for (null == RW ? (bR = !1, yR = gR) : yR = RW, AW = new TW(.03125); WW.abs().gte(.1);) WW = WW.times(AW), BW += 5;
        for (yR += Math.log(tR(2, BW)) / Math.LN10 * 2 + 5 | 0, MW = wW = zR = new TW(CW), TW.precision = yR;;) {
          if (wW = jR(wW.times(WW), yR), MW = MW.times(++NW), oW((AW = zR.plus(lW(wW, MW, yR))).d).slice(0, yR) === oW(zR.d).slice(0, yR)) {
            for (; BW--;) zR = jR(zR.times(zR), yR);
            return TW.precision = gR, null == RW ? (bR = !0, jR(zR, gR)) : zR
          }
          zR = AW
        }
      }

      function fW(WW) {
        for (var RW = 7 * WW.e, MW = WW.d[0]; MW >= 10; MW /= 10) RW++;
        return RW
      }

      function QW(WW, RW, MW) {
        if (RW > WW.LN10.sd()) throw bR = !0, MW && (WW.precision = MW), Error(yR + "LN10 precision limit exceeded");
        return jR(new WW(WW.LN10), RW)
      }

      function rR(WW) {
        for (var RW = ""; WW--;) RW += "0";
        return RW
      }

      function cR(WW, RW) {
        var MW, wW, zR, AW, NW, eW, BW, tR, TW, gR = 1,
          iR = WW,
          YW = iR.d,
          JW = iR.constructor,
          PW = JW.precision;
        if (iR.s < 1) throw Error(yR + (iR.s ? "NaN" : "-Infinity"));
        if (iR.eq(CW)) return new JW(0);
        if (null == RW ? (bR = !1, tR = PW) : tR = RW, iR.eq(10)) return null == RW && (bR = !0), QW(JW, tR);
        if (tR += 10, JW.precision = tR, wW = (MW = oW(YW)).charAt(0), AW = fW(iR), !(Math.abs(AW) < 15e14)) return BW = QW(JW, tR + 2, PW).times(AW + ""), iR = cR(new JW(wW + "." + MW.slice(1)), tR - 10).plus(BW), JW.precision = PW, null == RW ? (bR = !0, jR(iR, PW)) : iR;
        for (; wW < 7 && 1 != wW || 1 == wW && MW.charAt(1) > 3;) wW = (MW = oW((iR = iR.times(WW)).d)).charAt(0), gR++;
        for (AW = fW(iR), wW > 1 ? (iR = new JW("0." + MW), AW++) : iR = new JW(wW + "." + MW.slice(1)), eW = NW = iR = lW(iR.minus(CW), iR.plus(CW), tR), TW = jR(iR.times(iR), tR), zR = 3;;) {
          if (NW = jR(NW.times(TW), tR), oW((BW = eW.plus(lW(NW, new JW(zR), tR))).d).slice(0, tR) === oW(eW.d).slice(0, tR)) return eW = eW.times(2), 0 !== AW && (eW = eW.plus(QW(JW, tR + 2, PW).times(AW + ""))), eW = lW(eW, new JW(gR), tR), JW.precision = PW, null == RW ? (bR = !0, jR(eW, PW)) : eW;
          eW = BW, zR += 2
        }
      }

      function XW(WW, RW) {
        var MW, wW, CW;
        for ((MW = RW.indexOf(".")) > -1 && (RW = RW.replace(".", "")), (wW = RW.search(/e/i)) > 0 ? (MW < 0 && (MW = wW), MW += +RW.slice(wW + 1), RW = RW.substring(0, wW)) : MW < 0 && (MW = RW.length), wW = 0; 48 === RW.charCodeAt(wW);) ++wW;
        for (CW = RW.length; 48 === RW.charCodeAt(CW - 1);) --CW;
        if (RW = RW.slice(wW, CW)) {
          if (CW -= wW, MW = MW - wW - 1, WW.e = BW(MW / 7), WW.d = [], wW = (MW + 1) % 7, MW < 0 && (wW += 7), wW < CW) {
            for (wW && WW.d.push(+RW.slice(0, wW)), CW -= 7; wW < CW;) WW.d.push(+RW.slice(wW, wW += 7));
            wW = 7 - (RW = RW.slice(wW)).length
          } else wW -= CW;
          for (; wW--;) RW += "0";
          if (WW.d.push(+RW), bR && (WW.e > YW || WW.e < -YW)) throw Error(eW + MW)
        } else WW.s = 0, WW.e = 0, WW.d = [0];
        return WW
      }

      function jR(WW, RW, MW) {
        var wW, CW, zR, AW, yR, NW, TW, iR, JW = WW.d;
        for (AW = 1, zR = JW[0]; zR >= 10; zR /= 10) AW++;
        if ((wW = RW - AW) < 0) wW += 7, CW = RW, TW = JW[iR = 0];
        else {
          if ((iR = Math.ceil((wW + 1) / 7)) >= (zR = JW.length)) return WW;
          for (TW = zR = JW[iR], AW = 1; zR >= 10; zR /= 10) AW++;
          CW = (wW %= 7) - 7 + AW
        }
        if (void 0 !== MW && (yR = TW / (zR = tR(10, AW - CW - 1)) % 10 | 0, NW = RW < 0 || void 0 !== JW[iR + 1] || TW % zR, NW = MW < 4 ? (yR || NW) && (0 == MW || MW == (WW.s < 0 ? 3 : 2)) : yR > 5 || 5 == yR && (4 == MW || NW || 6 == MW && (wW > 0 ? CW > 0 ? TW / tR(10, AW - CW) : 0 : JW[iR - 1]) % 10 & 1 || MW == (WW.s < 0 ? 8 : 7))), RW < 1 || !JW[0]) return NW ? (zR = fW(WW), JW.length = 1, RW = RW - zR - 1, JW[0] = tR(10, (7 - RW % 7) % 7), WW.e = BW(-RW / 7) || 0) : (JW.length = 1, JW[0] = WW.e = WW.s = 0), WW;
        if (0 == wW ? (JW.length = iR, zR = 1, iR--) : (JW.length = iR + 1, zR = tR(10, 7 - wW), JW[iR] = CW > 0 ? (TW / tR(10, AW - CW) % tR(10, CW) | 0) * zR : 0), NW)
          for (;;) {
            if (0 == iR) {
              (JW[0] += zR) == gR && (JW[0] = 1, ++WW.e);
              break
            }
            if (JW[iR] += zR, JW[iR] != gR) break;
            JW[iR--] = 0, zR = 1
          }
        for (wW = JW.length; 0 === JW[--wW];) JW.pop();
        if (bR && (WW.e > YW || WW.e < -YW)) throw Error(eW + fW(WW));
        return WW
      }

      function kR(WW, RW) {
        var MW, wW, CW, zR, AW, yR, NW, eW, BW, tR, TW = WW.constructor,
          iR = TW.precision;
        if (!WW.s || !RW.s) return RW.s ? RW.s = -RW.s : RW = new TW(WW), bR ? jR(RW, iR) : RW;
        if (NW = WW.d, tR = RW.d, wW = RW.e, eW = WW.e, NW = NW.slice(), AW = eW - wW) {
          for ((BW = AW < 0) ? (MW = NW, AW = -AW, yR = tR.length) : (MW = tR, wW = eW, yR = NW.length), AW > (CW = Math.max(Math.ceil(iR / 7), yR) + 2) && (AW = CW, MW.length = 1), MW.reverse(), CW = AW; CW--;) MW.push(0);
          MW.reverse()
        } else {
          for ((BW = (CW = NW.length) < (yR = tR.length)) && (yR = CW), CW = 0; CW < yR; CW++)
            if (NW[CW] != tR[CW]) {
              BW = NW[CW] < tR[CW];
              break
            } AW = 0
        }
        for (BW && (MW = NW, NW = tR, tR = MW, RW.s = -RW.s), yR = NW.length, CW = tR.length - yR; CW > 0; --CW) NW[yR++] = 0;
        for (CW = tR.length; CW > AW;) {
          if (NW[--CW] < tR[CW]) {
            for (zR = CW; zR && 0 === NW[--zR];) NW[zR] = gR - 1;
            --NW[zR], NW[CW] += gR
          }
          NW[CW] -= tR[CW]
        }
        for (; 0 === NW[--yR];) NW.pop();
        for (; 0 === NW[0]; NW.shift()) --wW;
        return NW[0] ? (RW.d = NW, RW.e = wW, bR ? jR(RW, iR) : RW) : new TW(0)
      }

      function aR(WW, RW, MW) {
        var wW, CW = fW(WW),
          zR = oW(WW.d),
          AW = zR.length;
        return RW ? (MW && (wW = MW - AW) > 0 ? zR = zR.charAt(0) + "." + zR.slice(1) + rR(wW) : AW > 1 && (zR = zR.charAt(0) + "." + zR.slice(1)), zR = zR + (CW < 0 ? "e" : "e+") + CW) : CW < 0 ? (zR = "0." + rR(-CW - 1) + zR, MW && (wW = MW - AW) > 0 && (zR += rR(wW))) : CW >= AW ? (zR += rR(CW + 1 - AW), MW && (wW = MW - CW - 1) > 0 && (zR = zR + "." + rR(wW))) : ((wW = CW + 1) < AW && (zR = zR.slice(0, wW) + "." + zR.slice(wW)), MW && (wW = MW - AW) > 0 && (CW + 1 === AW && (zR += "."), zR += rR(wW))), WW.s < 0 ? "-" + zR : zR
      }

      function sW(WW, RW) {
        if (WW.length > RW) return WW.length = RW, !0
      }

      function dW(WW) {
        if (!WW || "object" !== typeof WW) throw Error(yR + "Object expected");
        var RW, MW, wW, CW = ["precision", 1, zR, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (RW = 0; RW < CW.length; RW += 3)
          if (void 0 !== (wW = WW[MW = CW[RW]])) {
            if (!(BW(wW) === wW && wW >= CW[RW + 1] && wW <= CW[RW + 2])) throw Error(NW + MW + ": " + wW);
            this[MW] = wW
          } if (void 0 !== (wW = WW[MW = "LN10"])) {
          if (wW != Math.LN10) throw Error(NW + MW + ": " + wW);
          this[MW] = new this(wW)
        }
        return this
      }
      AW = function WW(RW) {
        var MW, wW, CW;

        function zR(WW) {
          var RW = this;
          if (!(RW instanceof zR)) return new zR(WW);
          if (RW.constructor = zR, WW instanceof zR) return RW.s = WW.s, RW.e = WW.e, void(RW.d = (WW = WW.d) ? WW.slice() : WW);
          if ("number" === typeof WW) {
            if (0 * WW !== 0) throw Error(NW + WW);
            if (WW > 0) RW.s = 1;
            else {
              if (!(WW < 0)) return RW.s = 0, RW.e = 0, void(RW.d = [0]);
              WW = -WW, RW.s = -1
            }
            return WW === ~~WW && WW < 1e7 ? (RW.e = 0, void(RW.d = [WW])) : XW(RW, WW.toString())
          }
          if ("string" !== typeof WW) throw Error(NW + WW);
          if (45 === WW.charCodeAt(0) ? (WW = WW.slice(1), RW.s = -1) : RW.s = 1, !TW.test(WW)) throw Error(NW + WW);
          XW(RW, WW)
        }
        if (zR.prototype = JW, zR.ROUND_UP = 0, zR.ROUND_DOWN = 1, zR.ROUND_CEIL = 2, zR.ROUND_FLOOR = 3, zR.ROUND_HALF_UP = 4, zR.ROUND_HALF_DOWN = 5, zR.ROUND_HALF_EVEN = 6, zR.ROUND_HALF_CEIL = 7, zR.ROUND_HALF_FLOOR = 8, zR.clone = WW, zR.config = zR.set = dW, void 0 === RW && (RW = {}), RW)
          for (CW = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], MW = 0; MW < CW.length;) RW.hasOwnProperty(wW = CW[MW++]) || (RW[wW] = this[wW]);
        return zR.config(RW), zR
      }(AW), AW.default = AW.Decimal = AW, CW = new AW(1), void 0 === (wW = function() {
        return AW
      }.call(RW, MW, RW, WW)) || (WW.exports = wW)
    }()
  },
  4760: (WW, RW, MW) => {
    var wW = MW(4200)(MW(4052), "DataView");
    WW.exports = wW
  },
  4178: (WW, RW, MW) => {
    var wW = MW(4186),
      CW = MW(4240),
      zR = MW(4245),
      AW = MW(4252),
      bR = MW(4258);

    function yR(WW) {
      var RW = -1,
        MW = null == WW ? 0 : WW.length;
      for (this.clear(); ++RW < MW;) {
        var wW = WW[RW];
        this.set(wW[0], wW[1])
      }
    }
    yR.prototype.clear = wW, yR.prototype.delete = CW, yR.prototype.get = zR, yR.prototype.has = AW, yR.prototype.set = bR, WW.exports = yR
  },
  4267: (WW, RW, MW) => {
    var wW = MW(4269),
      CW = MW(4272),
      zR = MW(4289),
      AW = MW(4296),
      bR = MW(4299);

    function yR(WW) {
      var RW = -1,
        MW = null == WW ? 0 : WW.length;
      for (this.clear(); ++RW < MW;) {
        var wW = WW[RW];
        this.set(wW[0], wW[1])
      }
    }
    yR.prototype.clear = wW, yR.prototype.delete = CW, yR.prototype.get = zR, yR.prototype.has = AW, yR.prototype.set = bR, WW.exports = yR
  },
  4307: (WW, RW, MW) => {
    var wW = MW(4200)(MW(4052), "Map");
    WW.exports = wW
  },
  4171: (WW, RW, MW) => {
    var wW = MW(4175),
      CW = MW(4314),
      zR = MW(4331),
      AW = MW(4333),
      bR = MW(4340);

    function yR(WW) {
      var RW = -1,
        MW = null == WW ? 0 : WW.length;
      for (this.clear(); ++RW < MW;) {
        var wW = WW[RW];
        this.set(wW[0], wW[1])
      }
    }
    yR.prototype.clear = wW, yR.prototype.delete = CW, yR.prototype.get = zR, yR.prototype.has = AW, yR.prototype.set = bR, WW.exports = yR
  },
  4763: (WW, RW, MW) => {
    var wW = MW(4200)(MW(4052), "Promise");
    WW.exports = wW
  },
  4770: (WW, RW, MW) => {
    var wW = MW(4200)(MW(4052), "Set");
    WW.exports = wW
  },
  4572: (WW, RW, MW) => {
    var wW = MW(4171),
      CW = MW(4574),
      zR = MW(4576);

    function AW(WW) {
      var RW = -1,
        MW = null == WW ? 0 : WW.length;
      for (this.__data__ = new wW; ++RW < MW;) this.add(WW[RW])
    }
    AW.prototype.add = AW.prototype.push = CW, AW.prototype.has = zR, WW.exports = AW
  },
  4526: (WW, RW, MW) => {
    var wW = MW(4267),
      CW = MW(4528),
      zR = MW(4535),
      AW = MW(4538),
      bR = MW(4543),
      yR = MW(4547);

    function NW(WW) {
      var RW = this.__data__ = new wW(WW);
      this.size = RW.size
    }
    NW.prototype.clear = CW, NW.prototype.delete = zR, NW.prototype.get = AW, NW.prototype.has = bR, NW.prototype.set = yR, WW.exports = NW
  },
  4086: (WW, RW, MW) => {
    var wW = MW(4052).Symbol;
    WW.exports = wW
  },
  4602: (WW, RW, MW) => {
    var wW = MW(4052).Uint8Array;
    WW.exports = wW
  },
  4773: (WW, RW, MW) => {
    var wW = MW(4200)(MW(4052), "WeakMap");
    WW.exports = wW
  },
  4890: WW => {
    WW.exports = function(WW, RW, MW) {
      switch (MW.length) {
        case 0:
          return WW.call(RW);
        case 1:
          return WW.call(RW, MW[0]);
        case 2:
          return WW.call(RW, MW[0], MW[1]);
        case 3:
          return WW.call(RW, MW[0], MW[1], MW[2])
      }
      return WW.apply(RW, MW)
    }
  },
  5244: WW => {
    WW.exports = function(WW, RW) {
      for (var MW = -1, wW = null == WW ? 0 : WW.length; ++MW < wW;)
        if (!RW(WW[MW], MW, WW)) return !1;
      return !0
    }
  },
  4646: WW => {
    WW.exports = function(WW, RW) {
      for (var MW = -1, wW = null == WW ? 0 : WW.length, CW = 0, zR = []; ++MW < wW;) {
        var AW = WW[MW];
        RW(AW, MW, WW) && (zR[CW++] = AW)
      }
      return zR
    }
  },
  4969: (WW, RW, MW) => {
    var wW = MW(4976);
    WW.exports = function(WW, RW) {
      return !!(null == WW ? 0 : WW.length) && wW(WW, RW, 0) > -1
    }
  },
  5001: WW => {
    WW.exports = function(WW, RW, MW) {
      for (var wW = -1, CW = null == WW ? 0 : WW.length; ++wW < CW;)
        if (MW(RW, WW[wW])) return !0;
      return !1
    }
  },
  4668: (WW, RW, MW) => {
    var wW = MW(4677),
      CW = MW(4495),
      zR = MW(4118),
      AW = MW(4685),
      bR = MW(4455),
      yR = MW(4698),
      NW = Object.prototype.hasOwnProperty;
    WW.exports = function(WW, RW) {
      var MW = zR(WW),
        eW = !MW && CW(WW),
        BW = !MW && !eW && AW(WW),
        tR = !MW && !eW && !BW && yR(WW),
        TW = MW || eW || BW || tR,
        gR = TW ? wW(WW.length, String) : [],
        iR = gR.length;
      for (var YW in WW) !RW && !NW.call(WW, YW) || TW && ("length" == YW || BW && ("offset" == YW || "parent" == YW) || tR && ("buffer" == YW || "byteLength" == YW || "byteOffset" == YW) || bR(YW, iR)) || gR.push(YW);
      return gR
    }
  },
  4359: WW => {
    WW.exports = function(WW, RW) {
      for (var MW = -1, wW = null == WW ? 0 : WW.length, CW = Array(wW); ++MW < wW;) CW[MW] = RW(WW[MW], MW, WW);
      return CW
    }
  },
  4484: WW => {
    WW.exports = function(WW, RW) {
      for (var MW = -1, wW = RW.length, CW = WW.length; ++MW < wW;) WW[CW + MW] = RW[MW];
      return WW
    }
  },
  4580: WW => {
    WW.exports = function(WW, RW) {
      for (var MW = -1, wW = null == WW ? 0 : WW.length; ++MW < wW;)
        if (RW(WW[MW], MW, WW)) return !0;
      return !1
    }
  },
  5066: WW => {
    WW.exports = function(WW) {
      return WW.split("")
    }
  },
  4281: (WW, RW, MW) => {
    var wW = MW(4283);
    WW.exports = function(WW, RW) {
      for (var MW = WW.length; MW--;)
        if (wW(WW[MW][0], RW)) return MW;
      return -1
    }
  },
  5240: (WW, RW, MW) => {
    var wW = MW(4910);
    WW.exports = function(WW, RW, MW) {
      "__proto__" == RW && wW ? wW(WW, RW, {
        configurable: !0,
        enumerable: !0,
        value: MW,
        writable: !0
      }) : WW[RW] = MW
    }
  },
  4839: (WW, RW, MW) => {
    var wW = MW(4844),
      CW = MW(4857)(wW);
    WW.exports = CW
  },
  5246: (WW, RW, MW) => {
    var wW = MW(4839);
    WW.exports = function(WW, RW) {
      var MW = !0;
      return wW(WW, (function(WW, wW, CW) {
        return MW = !!RW(WW, wW, CW)
      })), MW
    }
  },
  5138: (WW, RW, MW) => {
    var wW = MW(4071);
    WW.exports = function(WW, RW, MW) {
      for (var CW = -1, zR = WW.length; ++CW < zR;) {
        var AW = WW[CW],
          bR = RW(AW);
        if (null != bR && (void 0 === yR ? bR === bR && !wW(bR) : MW(bR, yR))) var yR = bR,
          NW = AW
      }
      return NW
    }
  },
  4982: WW => {
    WW.exports = function(WW, RW, MW, wW) {
      for (var CW = WW.length, zR = MW + (wW ? 1 : -1); wW ? zR-- : ++zR < CW;)
        if (RW(WW[zR], zR, WW)) return zR;
      return -1
    }
  },
  4475: (WW, RW, MW) => {
    var wW = MW(4484),
      CW = MW(4492);
    WW.exports = function WW(RW, MW, zR, AW, bR) {
      var yR = -1,
        NW = RW.length;
      for (zR || (zR = CW), bR || (bR = []); ++yR < NW;) {
        var eW = RW[yR];
        MW > 0 && zR(eW) ? MW > 1 ? WW(eW, MW - 1, zR, AW, bR) : wW(bR, eW) : AW || (bR[bR.length] = eW)
      }
      return bR
    }
  },
  4852: (WW, RW, MW) => {
    var wW = MW(4855)();
    WW.exports = wW
  },
  4844: (WW, RW, MW) => {
    var wW = MW(4852),
      CW = MW(4661);
    WW.exports = function(WW, RW) {
      return WW && wW(WW, RW, CW)
    }
  },
  4136: (WW, RW, MW) => {
    var wW = MW(4143),
      CW = MW(4365);
    WW.exports = function(WW, RW) {
      for (var MW = 0, zR = (RW = wW(RW, WW)).length; null != WW && MW < zR;) WW = WW[CW(RW[MW++])];
      return MW && MW == zR ? WW : void 0
    }
  },
  4635: (WW, RW, MW) => {
    var wW = MW(4484),
      CW = MW(4118);
    WW.exports = function(WW, RW, MW) {
      var zR = RW(WW);
      return CW(WW) ? zR : wW(zR, MW(WW))
    }
  },
  4080: (WW, RW, MW) => {
    var wW = MW(4086),
      CW = MW(4091),
      zR = MW(4093),
      AW = wW ? wW.toStringTag : void 0;
    WW.exports = function(WW) {
      return null == WW ? void 0 === WW ? "[object Undefined]" : "[object Null]" : AW && AW in Object(WW) ? CW(WW) : zR(WW)
    }
  },
  5147: WW => {
    WW.exports = function(WW, RW) {
      return WW > RW
    }
  },
  4805: WW => {
    WW.exports = function(WW, RW) {
      return null != WW && RW in Object(WW)
    }
  },
  4976: (WW, RW, MW) => {
    var wW = MW(4982),
      CW = MW(4988),
      zR = MW(4993);
    WW.exports = function(WW, RW, MW) {
      return RW === RW ? zR(WW, RW, MW) : wW(WW, CW, MW)
    }
  },
  4499: (WW, RW, MW) => {
    var wW = MW(4080),
      CW = MW(4100);
    WW.exports = function(WW) {
      return CW(WW) && "[object Arguments]" == wW(WW)
    }
  },
  4555: (WW, RW, MW) => {
    var wW = MW(4560),
      CW = MW(4100);
    WW.exports = function WW(RW, MW, zR, AW, bR) {
      return RW === MW || (null == RW || null == MW || !CW(RW) && !CW(MW) ? RW !== RW && MW !== MW : wW(RW, MW, zR, AW, WW, bR))
    }
  },
  4560: (WW, RW, MW) => {
    var wW = MW(4526),
      CW = MW(4563),
      zR = MW(4594),
      AW = MW(4619),
      bR = MW(4754),
      yR = MW(4118),
      NW = MW(4685),
      eW = MW(4698),
      BW = "[object Arguments]",
      tR = "[object Array]",
      TW = "[object Object]",
      gR = Object.prototype.hasOwnProperty;
    WW.exports = function(WW, RW, MW, iR, YW, JW) {
      var PW = yR(WW),
        IW = yR(RW),
        oW = PW ? tR : bR(WW),
        lW = IW ? tR : bR(RW),
        FW = (oW = oW == BW ? TW : oW) == TW,
        fW = (lW = lW == BW ? TW : lW) == TW,
        QW = oW == lW;
      if (QW && NW(WW)) {
        if (!NW(RW)) return !1;
        PW = !0, FW = !1
      }
      if (QW && !FW) return JW || (JW = new wW), PW || eW(WW) ? CW(WW, RW, MW, iR, YW, JW) : zR(WW, RW, oW, MW, iR, YW, JW);
      if (!(1 & MW)) {
        var rR = FW && gR.call(WW, "__wrapped__"),
          cR = fW && gR.call(RW, "__wrapped__");
        if (rR || cR) {
          var XW = rR ? WW.value() : WW,
            jR = cR ? RW.value() : RW;
          return JW || (JW = new wW), YW(XW, jR, MW, iR, JW)
        }
      }
      return !!QW && (JW || (JW = new wW), AW(WW, RW, MW, iR, YW, JW))
    }
  },
  4524: (WW, RW, MW) => {
    var wW = MW(4526),
      CW = MW(4555);
    WW.exports = function(WW, RW, MW, zR) {
      var AW = MW.length,
        bR = AW,
        yR = !zR;
      if (null == WW) return !bR;
      for (WW = Object(WW); AW--;) {
        var NW = MW[AW];
        if (yR && NW[2] ? NW[1] !== WW[NW[0]] : !(NW[0] in WW)) return !1
      }
      for (; ++AW < bR;) {
        var eW = (NW = MW[AW])[0],
          BW = WW[eW],
          tR = NW[1];
        if (yR && NW[2]) {
          if (void 0 === BW && !(eW in WW)) return !1
        } else {
          var TW = new wW;
          if (zR) var gR = zR(BW, tR, eW, WW, RW, TW);
          if (!(void 0 === gR ? CW(tR, BW, 3, zR, TW) : gR)) return !1
        }
      }
      return !0
    }
  },
  4988: WW => {
    WW.exports = function(WW) {
      return WW !== WW
    }
  },
  4208: (WW, RW, MW) => {
    var wW = MW(4216),
      CW = MW(4219),
      zR = MW(4036),
      AW = MW(4231),
      bR = /^\[object .+?Constructor\]$/,
      yR = Function.prototype,
      NW = Object.prototype,
      eW = yR.toString,
      BW = NW.hasOwnProperty,
      tR = RegExp("^" + eW.call(BW).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    WW.exports = function(WW) {
      return !(!zR(WW) || CW(WW)) && (wW(WW) ? tR : bR).test(AW(WW))
    }
  },
  4706: (WW, RW, MW) => {
    var wW = MW(4080),
      CW = MW(4450),
      zR = MW(4100),
      AW = {};
    AW["[object Float32Array]"] = AW["[object Float64Array]"] = AW["[object Int8Array]"] = AW["[object Int16Array]"] = AW["[object Int32Array]"] = AW["[object Uint8Array]"] = AW["[object Uint8ClampedArray]"] = AW["[object Uint16Array]"] = AW["[object Uint32Array]"] = !0, AW["[object Arguments]"] = AW["[object Array]"] = AW["[object ArrayBuffer]"] = AW["[object Boolean]"] = AW["[object DataView]"] = AW["[object Date]"] = AW["[object Error]"] = AW["[object Function]"] = AW["[object Map]"] = AW["[object Number]"] = AW["[object Object]"] = AW["[object RegExp]"] = AW["[object Set]"] = AW["[object String]"] = AW["[object WeakMap]"] = !1, WW.exports = function(WW) {
      return zR(WW) && CW(WW.length) && !!AW[wW(WW)]
    }
  },
  4512: (WW, RW, MW) => {
    var wW = MW(4515),
      CW = MW(4795),
      zR = MW(4815),
      AW = MW(4118),
      bR = MW(4817);
    WW.exports = function(WW) {
      return "function" == typeof WW ? WW : null == WW ? zR : "object" == typeof WW ? AW(WW) ? CW(WW[0], WW[1]) : wW(WW) : bR(WW)
    }
  },
  4723: (WW, RW, MW) => {
    var wW = MW(4732),
      CW = MW(4739),
      zR = Object.prototype.hasOwnProperty;
    WW.exports = function(WW) {
      if (!wW(WW)) return CW(WW);
      var RW = [];
      for (var MW in Object(WW)) zR.call(WW, MW) && "constructor" != MW && RW.push(MW);
      return RW
    }
  },
  5157: WW => {
    WW.exports = function(WW, RW) {
      return WW < RW
    }
  },
  4835: (WW, RW, MW) => {
    var wW = MW(4839),
      CW = MW(4443);
    WW.exports = function(WW, RW) {
      var MW = -1,
        zR = CW(WW) ? Array(WW.length) : [];
      return wW(WW, (function(WW, wW, CW) {
        zR[++MW] = RW(WW, wW, CW)
      })), zR
    }
  },
  4515: (WW, RW, MW) => {
    var wW = MW(4524),
      CW = MW(4776),
      zR = MW(4792);
    WW.exports = function(WW) {
      var RW = CW(WW);
      return 1 == RW.length && RW[0][2] ? zR(RW[0][0], RW[0][1]) : function(MW) {
        return MW === WW || wW(MW, WW, RW)
      }
    }
  },
  4795: (WW, RW, MW) => {
    var wW = MW(4555),
      CW = MW(4133),
      zR = MW(4801),
      AW = MW(4147),
      bR = MW(4783),
      yR = MW(4792),
      NW = MW(4365);
    WW.exports = function(WW, RW) {
      return AW(WW) && bR(RW) ? yR(NW(WW), RW) : function(MW) {
        var AW = CW(MW, WW);
        return void 0 === AW && AW === RW ? zR(MW, WW) : wW(RW, AW, 3)
      }
    }
  },
  4505: (WW, RW, MW) => {
    var wW = MW(4359),
      CW = MW(4136),
      zR = MW(4512),
      AW = MW(4835),
      bR = MW(4861),
      yR = MW(4708),
      NW = MW(4863),
      eW = MW(4815),
      BW = MW(4118);
    WW.exports = function(WW, RW, MW) {
      RW = RW.length ? wW(RW, (function(WW) {
        return BW(WW) ? function(RW) {
          return CW(RW, 1 === WW.length ? WW[0] : WW)
        } : WW
      })) : [eW];
      var tR = -1;
      RW = wW(RW, yR(zR));
      var TW = AW(WW, (function(WW, MW, CW) {
        return {
          criteria: wW(RW, (function(RW) {
            return RW(WW)
          })),
          index: ++tR,
          value: WW
        }
      }));
      return bR(TW, (function(WW, RW) {
        return NW(WW, RW, MW)
      }))
    }
  },
  4823: WW => {
    WW.exports = function(WW) {
      return function(RW) {
        return null == RW ? void 0 : RW[WW]
      }
    }
  },
  4830: (WW, RW, MW) => {
    var wW = MW(4136);
    WW.exports = function(WW) {
      return function(RW) {
        return wW(RW, WW)
      }
    }
  },
  4432: WW => {
    var RW = Math.ceil,
      MW = Math.max;
    WW.exports = function(WW, wW, CW, zR) {
      for (var AW = -1, bR = MW(RW((wW - WW) / (CW || 1)), 0), yR = Array(bR); bR--;) yR[zR ? bR : ++AW] = WW, WW += CW;
      return yR
    }
  },
  4879: (WW, RW, MW) => {
    var wW = MW(4815),
      CW = MW(4888),
      zR = MW(4896);
    WW.exports = function(WW, RW) {
      return zR(CW(WW, RW, wW), WW + "")
    }
  },
  4898: (WW, RW, MW) => {
    var wW = MW(4906),
      CW = MW(4910),
      zR = MW(4815),
      AW = CW ? function(WW, RW) {
        return CW(WW, "toString", {
          configurable: !0,
          enumerable: !1,
          value: wW(RW),
          writable: !0
        })
      } : zR;
    WW.exports = AW
  },
  5048: WW => {
    WW.exports = function(WW, RW, MW) {
      var wW = -1,
        CW = WW.length;
      RW < 0 && (RW = -RW > CW ? 0 : CW + RW), (MW = MW > CW ? CW : MW) < 0 && (MW += CW), CW = RW > MW ? 0 : MW - RW >>> 0, RW >>>= 0;
      for (var zR = Array(CW); ++wW < CW;) zR[wW] = WW[wW + RW];
      return zR
    }
  },
  5318: (WW, RW, MW) => {
    var wW = MW(4839);
    WW.exports = function(WW, RW) {
      var MW;
      return wW(WW, (function(WW, wW, CW) {
        return !(MW = RW(WW, wW, CW))
      })), !!MW
    }
  },
  4861: WW => {
    WW.exports = function(WW, RW) {
      var MW = WW.length;
      for (WW.sort(RW); MW--;) WW[MW] = WW[MW].value;
      return WW
    }
  },
  4677: WW => {
    WW.exports = function(WW, RW) {
      for (var MW = -1, wW = Array(WW); ++MW < WW;) wW[MW] = RW(MW);
      return wW
    }
  },
  4352: (WW, RW, MW) => {
    var wW = MW(4086),
      CW = MW(4359),
      zR = MW(4118),
      AW = MW(4071),
      bR = wW ? wW.prototype : void 0,
      yR = bR ? bR.toString : void 0;
    WW.exports = function WW(RW) {
      if ("string" == typeof RW) return RW;
      if (zR(RW)) return CW(RW, WW) + "";
      if (AW(RW)) return yR ? yR.call(RW) : "";
      var MW = RW + "";
      return "0" == MW && 1 / RW == -1 / 0 ? "-0" : MW
    }
  },
  4061: (WW, RW, MW) => {
    var wW = MW(4067),
      CW = /^\s+/;
    WW.exports = function(WW) {
      return WW ? WW.slice(0, wW(WW) + 1).replace(CW, "") : WW
    }
  },
  4708: WW => {
    WW.exports = function(WW) {
      return function(RW) {
        return WW(RW)
      }
    }
  },
  4965: (WW, RW, MW) => {
    var wW = MW(4572),
      CW = MW(4969),
      zR = MW(5001),
      AW = MW(4586),
      bR = MW(5003),
      yR = MW(4611);
    WW.exports = function(WW, RW, MW) {
      var NW = -1,
        eW = CW,
        BW = WW.length,
        tR = !0,
        TW = [],
        gR = TW;
      if (MW) tR = !1, eW = zR;
      else if (BW >= 200) {
        var iR = RW ? null : bR(WW);
        if (iR) return yR(iR);
        tR = !1, eW = AW, gR = new wW
      } else gR = RW ? [] : TW;
      WW: for (; ++NW < BW;) {
        var YW = WW[NW],
          JW = RW ? RW(YW) : YW;
        if (YW = MW || 0 !== YW ? YW : 0, tR && JW === JW) {
          for (var PW = gR.length; PW--;)
            if (gR[PW] === JW) continue WW;
          RW && gR.push(JW), TW.push(YW)
        } else eW(gR, JW, MW) || (gR !== TW && gR.push(JW), TW.push(YW))
      }
      return TW
    }
  },
  4586: WW => {
    WW.exports = function(WW, RW) {
      return WW.has(RW)
    }
  },
  4143: (WW, RW, MW) => {
    var wW = MW(4118),
      CW = MW(4147),
      zR = MW(4156),
      AW = MW(4343);
    WW.exports = function(WW, RW) {
      return wW(WW) ? WW : CW(WW, RW) ? [WW] : zR(AW(WW))
    }
  },
  5042: (WW, RW, MW) => {
    var wW = MW(5048);
    WW.exports = function(WW, RW, MW) {
      var CW = WW.length;
      return MW = void 0 === MW ? CW : MW, !RW && MW >= CW ? WW : wW(WW, RW, MW)
    }
  },
  4872: (WW, RW, MW) => {
    var wW = MW(4071);
    WW.exports = function(WW, RW) {
      if (WW !== RW) {
        var MW = void 0 !== WW,
          CW = null === WW,
          zR = WW === WW,
          AW = wW(WW),
          bR = void 0 !== RW,
          yR = null === RW,
          NW = RW === RW,
          eW = wW(RW);
        if (!yR && !eW && !AW && WW > RW || AW && bR && NW && !yR && !eW || CW && bR && NW || !MW && NW || !zR) return 1;
        if (!CW && !AW && !eW && WW < RW || eW && MW && zR && !CW && !AW || yR && MW && zR || !bR && zR || !NW) return -1
      }
      return 0
    }
  },
  4863: (WW, RW, MW) => {
    var wW = MW(4872);
    WW.exports = function(WW, RW, MW) {
      for (var CW = -1, zR = WW.criteria, AW = RW.criteria, bR = zR.length, yR = MW.length; ++CW < bR;) {
        var NW = wW(zR[CW], AW[CW]);
        if (NW) return CW >= yR ? NW : NW * ("desc" == MW[CW] ? -1 : 1)
      }
      return WW.index - RW.index
    }
  },
  4225: (WW, RW, MW) => {
    var wW = MW(4052)["__core-js_shared__"];
    WW.exports = wW
  },
  4857: (WW, RW, MW) => {
    var wW = MW(4443);
    WW.exports = function(WW, RW) {
      return function(MW, CW) {
        if (null == MW) return MW;
        if (!wW(MW)) return WW(MW, CW);
        for (var zR = MW.length, AW = RW ? zR : -1, bR = Object(MW);
          (RW ? AW-- : ++AW < zR) && !1 !== CW(bR[AW], AW, bR););
        return MW
      }
    }
  },
  4855: WW => {
    WW.exports = function(WW) {
      return function(RW, MW, wW) {
        for (var CW = -1, zR = Object(RW), AW = wW(RW), bR = AW.length; bR--;) {
          var yR = AW[WW ? bR : ++CW];
          if (!1 === MW(zR[yR], yR, zR)) break
        }
        return RW
      }
    }
  },
  5034: (WW, RW, MW) => {
    var wW = MW(5042),
      CW = MW(5051),
      zR = MW(5058),
      AW = MW(4343);
    WW.exports = function(WW) {
      return function(RW) {
        RW = AW(RW);
        var MW = CW(RW) ? zR(RW) : void 0,
          bR = MW ? MW[0] : RW.charAt(0),
          yR = MW ? wW(MW, 1).join("") : RW.slice(1);
        return bR[WW]() + yR
      }
    }
  },
  5336: (WW, RW, MW) => {
    var wW = MW(4512),
      CW = MW(4443),
      zR = MW(4661);
    WW.exports = function(WW) {
      return function(RW, MW, AW) {
        var bR = Object(RW);
        if (!CW(RW)) {
          var yR = wW(MW, 3);
          RW = zR(RW), MW = function(WW) {
            return yR(bR[WW], WW, bR)
          }
        }
        var NW = WW(RW, MW, AW);
        return NW > -1 ? bR[yR ? RW[NW] : NW] : void 0
      }
    }
  },
  4429: (WW, RW, MW) => {
    var wW = MW(4432),
      CW = MW(4436),
      zR = MW(4463);
    WW.exports = function(WW) {
      return function(RW, MW, AW) {
        return AW && "number" != typeof AW && CW(RW, MW, AW) && (MW = AW = void 0), RW = zR(RW), void 0 === MW ? (MW = RW, RW = 0) : MW = zR(MW), AW = void 0 === AW ? RW < MW ? 1 : -1 : zR(AW), wW(RW, MW, AW, WW)
      }
    }
  },
  5003: (WW, RW, MW) => {
    var wW = MW(4770),
      CW = MW(5012),
      zR = MW(4611),
      AW = wW && 1 / zR(new wW([, -0]))[1] == 1 / 0 ? function(WW) {
        return new wW(WW)
      } : CW;
    WW.exports = AW
  },
  4910: (WW, RW, MW) => {
    var wW = MW(4200),
      CW = function() {
        try {
          var WW = wW(Object, "defineProperty");
          return WW({}, "", {}), WW
        } catch (RW) {}
      }();
    WW.exports = CW
  },
  4563: (WW, RW, MW) => {
    var wW = MW(4572),
      CW = MW(4580),
      zR = MW(4586);
    WW.exports = function(WW, RW, MW, AW, bR, yR) {
      var NW = 1 & MW,
        eW = WW.length,
        BW = RW.length;
      if (eW != BW && !(NW && BW > eW)) return !1;
      var tR = yR.get(WW),
        TW = yR.get(RW);
      if (tR && TW) return tR == RW && TW == WW;
      var gR = -1,
        iR = !0,
        YW = 2 & MW ? new wW : void 0;
      for (yR.set(WW, RW), yR.set(RW, WW); ++gR < eW;) {
        var JW = WW[gR],
          PW = RW[gR];
        if (AW) var IW = NW ? AW(PW, JW, gR, RW, WW, yR) : AW(JW, PW, gR, WW, RW, yR);
        if (void 0 !== IW) {
          if (IW) continue;
          iR = !1;
          break
        }
        if (YW) {
          if (!CW(RW, (function(WW, RW) {
              if (!zR(YW, RW) && (JW === WW || bR(JW, WW, MW, AW, yR))) return YW.push(RW)
            }))) {
            iR = !1;
            break
          }
        } else if (JW !== PW && !bR(JW, PW, MW, AW, yR)) {
          iR = !1;
          break
        }
      }
      return yR.delete(WW), yR.delete(RW), iR
    }
  },
  4594: (WW, RW, MW) => {
    var wW = MW(4086),
      CW = MW(4602),
      zR = MW(4283),
      AW = MW(4563),
      bR = MW(4606),
      yR = MW(4611),
      NW = wW ? wW.prototype : void 0,
      eW = NW ? NW.valueOf : void 0;
    WW.exports = function(WW, RW, MW, wW, NW, BW, tR) {
      switch (MW) {
        case "[object DataView]":
          if (WW.byteLength != RW.byteLength || WW.byteOffset != RW.byteOffset) return !1;
          WW = WW.buffer, RW = RW.buffer;
        case "[object ArrayBuffer]":
          return !(WW.byteLength != RW.byteLength || !BW(new CW(WW), new CW(RW)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return zR(+WW, +RW);
        case "[object Error]":
          return WW.name == RW.name && WW.message == RW.message;
        case "[object RegExp]":
        case "[object String]":
          return WW == RW + "";
        case "[object Map]":
          var TW = bR;
        case "[object Set]":
          var gR = 1 & wW;
          if (TW || (TW = yR), WW.size != RW.size && !gR) return !1;
          var iR = tR.get(WW);
          if (iR) return iR == RW;
          wW |= 2, tR.set(WW, RW);
          var YW = AW(TW(WW), TW(RW), wW, NW, BW, tR);
          return tR.delete(WW), YW;
        case "[object Symbol]":
          if (eW) return eW.call(WW) == eW.call(RW)
      }
      return !1
    }
  },
  4619: (WW, RW, MW) => {
    var wW = MW(4626),
      CW = Object.prototype.hasOwnProperty;
    WW.exports = function(WW, RW, MW, zR, AW, bR) {
      var yR = 1 & MW,
        NW = wW(WW),
        eW = NW.length;
      if (eW != wW(RW).length && !yR) return !1;
      for (var BW = eW; BW--;) {
        var tR = NW[BW];
        if (!(yR ? tR in RW : CW.call(RW, tR))) return !1
      }
      var TW = bR.get(WW),
        gR = bR.get(RW);
      if (TW && gR) return TW == RW && gR == WW;
      var iR = !0;
      bR.set(WW, RW), bR.set(RW, WW);
      for (var YW = yR; ++BW < eW;) {
        var JW = WW[tR = NW[BW]],
          PW = RW[tR];
        if (zR) var IW = yR ? zR(PW, JW, tR, RW, WW, bR) : zR(JW, PW, tR, WW, RW, bR);
        if (!(void 0 === IW ? JW === PW || AW(JW, PW, MW, zR, bR) : IW)) {
          iR = !1;
          break
        }
        YW || (YW = "constructor" == tR)
      }
      if (iR && !YW) {
        var oW = WW.constructor,
          lW = RW.constructor;
        oW == lW || !("constructor" in WW) || !("constructor" in RW) || "function" == typeof oW && oW instanceof oW && "function" == typeof lW && lW instanceof lW || (iR = !1)
      }
      return bR.delete(WW), bR.delete(RW), iR
    }
  },
  4054: (WW, RW, MW) => {
    var wW = "object" == typeof MW.g && MW.g && MW.g.Object === Object && MW.g;
    WW.exports = wW
  },
  4626: (WW, RW, MW) => {
    var wW = MW(4635),
      CW = MW(4642),
      zR = MW(4661);
    WW.exports = function(WW) {
      return wW(WW, zR, CW)
    }
  },
  4319: (WW, RW, MW) => {
    var wW = MW(4326);
    WW.exports = function(WW, RW) {
      var MW = WW.__data__;
      return wW(RW) ? MW["string" == typeof RW ? "string" : "hash"] : MW.map
    }
  },
  4776: (WW, RW, MW) => {
    var wW = MW(4783),
      CW = MW(4661);
    WW.exports = function(WW) {
      for (var RW = CW(WW), MW = RW.length; MW--;) {
        var zR = RW[MW],
          AW = WW[zR];
        RW[MW] = [zR, AW, wW(AW)]
      }
      return RW
    }
  },
  4200: (WW, RW, MW) => {
    var wW = MW(4208),
      CW = MW(4234);
    WW.exports = function(WW, RW) {
      var MW = CW(WW, RW);
      return wW(MW) ? MW : void 0
    }
  },
  5290: (WW, RW, MW) => {
    var wW = MW(4748)(Object.getPrototypeOf, Object);
    WW.exports = wW
  },
  4091: (WW, RW, MW) => {
    var wW = MW(4086),
      CW = Object.prototype,
      zR = CW.hasOwnProperty,
      AW = CW.toString,
      bR = wW ? wW.toStringTag : void 0;
    WW.exports = function(WW) {
      var RW = zR.call(WW, bR),
        MW = WW[bR];
      try {
        WW[bR] = void 0;
        var wW = !0
      } catch (yR) {}
      var CW = AW.call(WW);
      return wW && (RW ? WW[bR] = MW : delete WW[bR]), CW
    }
  },
  4642: (WW, RW, MW) => {
    var wW = MW(4646),
      CW = MW(4652),
      zR = Object.prototype.propertyIsEnumerable,
      AW = Object.getOwnPropertySymbols,
      bR = AW ? function(WW) {
        return null == WW ? [] : (WW = Object(WW), wW(AW(WW), (function(RW) {
          return zR.call(WW, RW)
        })))
      } : CW;
    WW.exports = bR
  },
  4754: (WW, RW, MW) => {
    var wW = MW(4760),
      CW = MW(4307),
      zR = MW(4763),
      AW = MW(4770),
      bR = MW(4773),
      yR = MW(4080),
      NW = MW(4231),
      eW = "[object Map]",
      BW = "[object Promise]",
      tR = "[object Set]",
      TW = "[object WeakMap]",
      gR = "[object DataView]",
      iR = NW(wW),
      YW = NW(CW),
      JW = NW(zR),
      PW = NW(AW),
      IW = NW(bR),
      oW = yR;
    (wW && oW(new wW(new ArrayBuffer(1))) != gR || CW && oW(new CW) != eW || zR && oW(zR.resolve()) != BW || AW && oW(new AW) != tR || bR && oW(new bR) != TW) && (oW = function(WW) {
      var RW = yR(WW),
        MW = "[object Object]" == RW ? WW.constructor : void 0,
        wW = MW ? NW(MW) : "";
      if (wW) switch (wW) {
        case iR:
          return gR;
        case YW:
          return eW;
        case JW:
          return BW;
        case PW:
          return tR;
        case IW:
          return TW
      }
      return RW
    }), WW.exports = oW
  },
  4234: WW => {
    WW.exports = function(WW, RW) {
      return null == WW ? void 0 : WW[RW]
    }
  },
  4807: (WW, RW, MW) => {
    var wW = MW(4143),
      CW = MW(4495),
      zR = MW(4118),
      AW = MW(4455),
      bR = MW(4450),
      yR = MW(4365);
    WW.exports = function(WW, RW, MW) {
      for (var NW = -1, eW = (RW = wW(RW, WW)).length, BW = !1; ++NW < eW;) {
        var tR = yR(RW[NW]);
        if (!(BW = null != WW && MW(WW, tR))) break;
        WW = WW[tR]
      }
      return BW || ++NW != eW ? BW : !!(eW = null == WW ? 0 : WW.length) && bR(eW) && AW(tR, eW) && (zR(WW) || CW(WW))
    }
  },
  5051: WW => {
    var RW = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    WW.exports = function(WW) {
      return RW.test(WW)
    }
  },
  4186: (WW, RW, MW) => {
    var wW = MW(4191);
    WW.exports = function() {
      this.__data__ = wW ? wW(null) : {}, this.size = 0
    }
  },
  4240: WW => {
    WW.exports = function(WW) {
      var RW = this.has(WW) && delete this.__data__[WW];
      return this.size -= RW ? 1 : 0, RW
    }
  },
  4245: (WW, RW, MW) => {
    var wW = MW(4191),
      CW = Object.prototype.hasOwnProperty;
    WW.exports = function(WW) {
      var RW = this.__data__;
      if (wW) {
        var MW = RW[WW];
        return "__lodash_hash_undefined__" === MW ? void 0 : MW
      }
      return CW.call(RW, WW) ? RW[WW] : void 0
    }
  },
  4252: (WW, RW, MW) => {
    var wW = MW(4191),
      CW = Object.prototype.hasOwnProperty;
    WW.exports = function(WW) {
      var RW = this.__data__;
      return wW ? void 0 !== RW[WW] : CW.call(RW, WW)
    }
  },
  4258: (WW, RW, MW) => {
    var wW = MW(4191);
    WW.exports = function(WW, RW) {
      var MW = this.__data__;
      return this.size += this.has(WW) ? 0 : 1, MW[WW] = wW && void 0 === RW ? "__lodash_hash_undefined__" : RW, this
    }
  },
  4492: (WW, RW, MW) => {
    var wW = MW(4086),
      CW = MW(4495),
      zR = MW(4118),
      AW = wW ? wW.isConcatSpreadable : void 0;
    WW.exports = function(WW) {
      return zR(WW) || CW(WW) || !!(AW && WW && WW[AW])
    }
  },
  4455: WW => {
    var RW = /^(?:0|[1-9]\d*)$/;
    WW.exports = function(WW, MW) {
      var wW = typeof WW;
      return !!(MW = null == MW ? 9007199254740991 : MW) && ("number" == wW || "symbol" != wW && RW.test(WW)) && WW > -1 && WW % 1 == 0 && WW < MW
    }
  },
  4436: (WW, RW, MW) => {
    var wW = MW(4283),
      CW = MW(4443),
      zR = MW(4455),
      AW = MW(4036);
    WW.exports = function(WW, RW, MW) {
      if (!AW(MW)) return !1;
      var bR = typeof RW;
      return !!("number" == bR ? CW(MW) && zR(RW, MW.length) : "string" == bR && RW in MW) && wW(MW[RW], WW)
    }
  },
  4147: (WW, RW, MW) => {
    var wW = MW(4118),
      CW = MW(4071),
      zR = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      AW = /^\w*$/;
    WW.exports = function(WW, RW) {
      if (wW(WW)) return !1;
      var MW = typeof WW;
      return !("number" != MW && "symbol" != MW && "boolean" != MW && null != WW && !CW(WW)) || (AW.test(WW) || !zR.test(WW) || null != RW && WW in Object(RW))
    }
  },
  4326: WW => {
    WW.exports = function(WW) {
      var RW = typeof WW;
      return "string" == RW || "number" == RW || "symbol" == RW || "boolean" == RW ? "__proto__" !== WW : null === WW
    }
  },
  4219: (WW, RW, MW) => {
    var wW = MW(4225),
      CW = function() {
        var WW = /[^.]+$/.exec(wW && wW.keys && wW.keys.IE_PROTO || "");
        return WW ? "Symbol(src)_1." + WW : ""
      }();
    WW.exports = function(WW) {
      return !!CW && CW in WW
    }
  },
  4732: WW => {
    var RW = Object.prototype;
    WW.exports = function(WW) {
      var MW = WW && WW.constructor;
      return WW === ("function" == typeof MW && MW.prototype || RW)
    }
  },
  4783: (WW, RW, MW) => {
    var wW = MW(4036);
    WW.exports = function(WW) {
      return WW === WW && !wW(WW)
    }
  },
  4269: WW => {
    WW.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  4272: (WW, RW, MW) => {
    var wW = MW(4281),
      CW = Array.prototype.splice;
    WW.exports = function(WW) {
      var RW = this.__data__,
        MW = wW(RW, WW);
      return !(MW < 0) && (MW == RW.length - 1 ? RW.pop() : CW.call(RW, MW, 1), --this.size, !0)
    }
  },
  4289: (WW, RW, MW) => {
    var wW = MW(4281);
    WW.exports = function(WW) {
      var RW = this.__data__,
        MW = wW(RW, WW);
      return MW < 0 ? void 0 : RW[MW][1]
    }
  },
  4296: (WW, RW, MW) => {
    var wW = MW(4281);
    WW.exports = function(WW) {
      return wW(this.__data__, WW) > -1
    }
  },
  4299: (WW, RW, MW) => {
    var wW = MW(4281);
    WW.exports = function(WW, RW) {
      var MW = this.__data__,
        CW = wW(MW, WW);
      return CW < 0 ? (++this.size, MW.push([WW, RW])) : MW[CW][1] = RW, this
    }
  },
  4175: (WW, RW, MW) => {
    var wW = MW(4178),
      CW = MW(4267),
      zR = MW(4307);
    WW.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new wW,
        map: new(zR || CW),
        string: new wW
      }
    }
  },
  4314: (WW, RW, MW) => {
    var wW = MW(4319);
    WW.exports = function(WW) {
      var RW = wW(this, WW).delete(WW);
      return this.size -= RW ? 1 : 0, RW
    }
  },
  4331: (WW, RW, MW) => {
    var wW = MW(4319);
    WW.exports = function(WW) {
      return wW(this, WW).get(WW)
    }
  },
  4333: (WW, RW, MW) => {
    var wW = MW(4319);
    WW.exports = function(WW) {
      return wW(this, WW).has(WW)
    }
  },
  4340: (WW, RW, MW) => {
    var wW = MW(4319);
    WW.exports = function(WW, RW) {
      var MW = wW(this, WW),
        CW = MW.size;
      return MW.set(WW, RW), this.size += MW.size == CW ? 0 : 1, this
    }
  },
  4606: WW => {
    WW.exports = function(WW) {
      var RW = -1,
        MW = Array(WW.size);
      return WW.forEach((function(WW, wW) {
        MW[++RW] = [wW, WW]
      })), MW
    }
  },
  4792: WW => {
    WW.exports = function(WW, RW) {
      return function(MW) {
        return null != MW && (MW[WW] === RW && (void 0 !== RW || WW in Object(MW)))
      }
    }
  },
  4159: (WW, RW, MW) => {
    var wW = MW(4168);
    WW.exports = function(WW) {
      var RW = wW(WW, (function(WW) {
          return 500 === MW.size && MW.clear(), WW
        })),
        MW = RW.cache;
      return RW
    }
  },
  4191: (WW, RW, MW) => {
    var wW = MW(4200)(Object, "create");
    WW.exports = wW
  },
  4739: (WW, RW, MW) => {
    var wW = MW(4748)(Object.keys, Object);
    WW.exports = wW
  },
  4714: (WW, RW, MW) => {
    WW = MW.nmd(WW);
    var wW = MW(4054),
      CW = RW && !RW.nodeType && RW,
      zR = CW && WW && !WW.nodeType && WW,
      AW = zR && zR.exports === CW && wW.process,
      bR = function() {
        try {
          var WW = zR && zR.require && zR.require("util").types;
          return WW || AW && AW.binding && AW.binding("util")
        } catch (RW) {}
      }();
    WW.exports = bR
  },
  4093: WW => {
    var RW = Object.prototype.toString;
    WW.exports = function(WW) {
      return RW.call(WW)
    }
  },
  4748: WW => {
    WW.exports = function(WW, RW) {
      return function(MW) {
        return WW(RW(MW))
      }
    }
  },
  4888: (WW, RW, MW) => {
    var wW = MW(4890),
      CW = Math.max;
    WW.exports = function(WW, RW, MW) {
      return RW = CW(void 0 === RW ? WW.length - 1 : RW, 0),
        function() {
          for (var zR = arguments, AW = -1, bR = CW(zR.length - RW, 0), yR = Array(bR); ++AW < bR;) yR[AW] = zR[RW + AW];
          AW = -1;
          for (var NW = Array(RW + 1); ++AW < RW;) NW[AW] = zR[AW];
          return NW[RW] = MW(yR), wW(WW, this, NW)
        }
    }
  },
  4052: (WW, RW, MW) => {
    var wW = MW(4054),
      CW = "object" == typeof self && self && self.Object === Object && self,
      zR = wW || CW || Function("return this")();
    WW.exports = zR
  },
  4574: WW => {
    WW.exports = function(WW) {
      return this.__data__.set(WW, "__lodash_hash_undefined__"), this
    }
  },
  4576: WW => {
    WW.exports = function(WW) {
      return this.__data__.has(WW)
    }
  },
  4611: WW => {
    WW.exports = function(WW) {
      var RW = -1,
        MW = Array(WW.size);
      return WW.forEach((function(WW) {
        MW[++RW] = WW
      })), MW
    }
  },
  4896: (WW, RW, MW) => {
    var wW = MW(4898),
      CW = MW(4917)(wW);
    WW.exports = CW
  },
  4917: WW => {
    var RW = Date.now;
    WW.exports = function(WW) {
      var MW = 0,
        wW = 0;
      return function() {
        var CW = RW(),
          zR = 16 - (CW - wW);
        if (wW = CW, zR > 0) {
          if (++MW >= 800) return arguments[0]
        } else MW = 0;
        return WW.apply(void 0, arguments)
      }
    }
  },
  4528: (WW, RW, MW) => {
    var wW = MW(4267);
    WW.exports = function() {
      this.__data__ = new wW, this.size = 0
    }
  },
  4535: WW => {
    WW.exports = function(WW) {
      var RW = this.__data__,
        MW = RW.delete(WW);
      return this.size = RW.size, MW
    }
  },
  4538: WW => {
    WW.exports = function(WW) {
      return this.__data__.get(WW)
    }
  },
  4543: WW => {
    WW.exports = function(WW) {
      return this.__data__.has(WW)
    }
  },
  4547: (WW, RW, MW) => {
    var wW = MW(4267),
      CW = MW(4307),
      zR = MW(4171);
    WW.exports = function(WW, RW) {
      var MW = this.__data__;
      if (MW instanceof wW) {
        var AW = MW.__data__;
        if (!CW || AW.length < 199) return AW.push([WW, RW]), this.size = ++MW.size, this;
        MW = this.__data__ = new zR(AW)
      }
      return MW.set(WW, RW), this.size = MW.size, this
    }
  },
  4993: WW => {
    WW.exports = function(WW, RW, MW) {
      for (var wW = MW - 1, CW = WW.length; ++wW < CW;)
        if (WW[wW] === RW) return wW;
      return -1
    }
  },
  5058: (WW, RW, MW) => {
    var wW = MW(5066),
      CW = MW(5051),
      zR = MW(5071);
    WW.exports = function(WW) {
      return CW(WW) ? zR(WW) : wW(WW)
    }
  },
  4156: (WW, RW, MW) => {
    var wW = MW(4159),
      CW = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      zR = /\\(\\)?/g,
      AW = wW((function(WW) {
        var RW = [];
        return 46 === WW.charCodeAt(0) && RW.push(""), WW.replace(CW, (function(WW, MW, wW, CW) {
          RW.push(wW ? CW.replace(zR, "$1") : MW || WW)
        })), RW
      }));
    WW.exports = AW
  },
  4365: (WW, RW, MW) => {
    var wW = MW(4071);
    WW.exports = function(WW) {
      if ("string" == typeof WW || wW(WW)) return WW;
      var RW = WW + "";
      return "0" == RW && 1 / WW == -1 / 0 ? "-0" : RW
    }
  },
  4231: WW => {
    var RW = Function.prototype.toString;
    WW.exports = function(WW) {
      if (null != WW) {
        try {
          return RW.call(WW)
        } catch (MW) {}
        try {
          return WW + ""
        } catch (MW) {}
      }
      return ""
    }
  },
  4067: WW => {
    var RW = /\s/;
    WW.exports = function(WW) {
      for (var MW = WW.length; MW-- && RW.test(WW.charAt(MW)););
      return MW
    }
  },
  5071: WW => {
    var RW = "\\ud800-\\udfff",
      MW = "[" + RW + "]",
      wW = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      CW = "\\ud83c[\\udffb-\\udfff]",
      zR = "[^" + RW + "]",
      AW = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      bR = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      yR = "(?:" + wW + "|" + CW + ")" + "?",
      NW = "[\\ufe0e\\ufe0f]?",
      eW = NW + yR + ("(?:\\u200d(?:" + [zR, AW, bR].join("|") + ")" + NW + yR + ")*"),
      BW = "(?:" + [zR + wW + "?", wW, AW, bR, MW].join("|") + ")",
      tR = RegExp(CW + "(?=" + CW + ")|" + BW + eW, "g");
    WW.exports = function(WW) {
      return WW.match(tR) || []
    }
  },
  4906: WW => {
    WW.exports = function(WW) {
      return function() {
        return WW
      }
    }
  },
  4027: (WW, RW, MW) => {
    var wW = MW(4036),
      CW = MW(4043),
      zR = MW(4059),
      AW = Math.max,
      bR = Math.min;
    WW.exports = function(WW, RW, MW) {
      var yR, NW, eW, BW, tR, TW, gR = 0,
        iR = !1,
        YW = !1,
        JW = !0;
      if ("function" != typeof WW) throw new TypeError("Expected a function");

      function PW(RW) {
        var MW = yR,
          wW = NW;
        return yR = NW = void 0, gR = RW, BW = WW.apply(wW, MW)
      }

      function IW(WW) {
        var MW = WW - TW;
        return void 0 === TW || MW >= RW || MW < 0 || YW && WW - gR >= eW
      }

      function oW() {
        var WW = CW();
        if (IW(WW)) return lW(WW);
        tR = setTimeout(oW, function(WW) {
          var MW = RW - (WW - TW);
          return YW ? bR(MW, eW - (WW - gR)) : MW
        }(WW))
      }

      function lW(WW) {
        return tR = void 0, JW && yR ? PW(WW) : (yR = NW = void 0, BW)
      }

      function FW() {
        var WW = CW(),
          MW = IW(WW);
        if (yR = arguments, NW = this, TW = WW, MW) {
          if (void 0 === tR) return function(WW) {
            return gR = WW, tR = setTimeout(oW, RW), iR ? PW(WW) : BW
          }(TW);
          if (YW) return clearTimeout(tR), tR = setTimeout(oW, RW), PW(TW)
        }
        return void 0 === tR && (tR = setTimeout(oW, RW)), BW
      }
      return RW = zR(RW) || 0, wW(MW) && (iR = !!MW.leading, eW = (YW = "maxWait" in MW) ? AW(zR(MW.maxWait) || 0, RW) : eW, JW = "trailing" in MW ? !!MW.trailing : JW), FW.cancel = function() {
        void 0 !== tR && clearTimeout(tR), gR = 0, yR = TW = NW = tR = void 0
      }, FW.flush = function() {
        return void 0 === tR ? BW : lW(CW())
      }, FW
    }
  },
  4283: WW => {
    WW.exports = function(WW, RW) {
      return WW === RW || WW !== WW && RW !== RW
    }
  },
  5242: (WW, RW, MW) => {
    var wW = MW(5244),
      CW = MW(5246),
      zR = MW(4512),
      AW = MW(4118),
      bR = MW(4436);
    WW.exports = function(WW, RW, MW) {
      var yR = AW(WW) ? wW : CW;
      return MW && bR(WW, RW, MW) && (RW = void 0), yR(WW, zR(RW, 3))
    }
  },
  5330: (WW, RW, MW) => {
    var wW = MW(5336)(MW(5343));
    WW.exports = wW
  },
  5343: (WW, RW, MW) => {
    var wW = MW(4982),
      CW = MW(4512),
      zR = MW(5345),
      AW = Math.max;
    WW.exports = function(WW, RW, MW) {
      var bR = null == WW ? 0 : WW.length;
      if (!bR) return -1;
      var yR = null == MW ? 0 : zR(MW);
      return yR < 0 && (yR = AW(bR + yR, 0)), wW(WW, CW(RW, 3), yR)
    }
  },
  5164: (WW, RW, MW) => {
    var wW = MW(4475),
      CW = MW(5170);
    WW.exports = function(WW, RW) {
      return wW(CW(WW, RW), 1)
    }
  },
  4133: (WW, RW, MW) => {
    var wW = MW(4136);
    WW.exports = function(WW, RW, MW) {
      var CW = null == WW ? void 0 : wW(WW, RW);
      return void 0 === CW ? MW : CW
    }
  },
  4801: (WW, RW, MW) => {
    var wW = MW(4805),
      CW = MW(4807);
    WW.exports = function(WW, RW) {
      return null != WW && CW(WW, RW, wW)
    }
  },
  4815: WW => {
    WW.exports = function(WW) {
      return WW
    }
  },
  4495: (WW, RW, MW) => {
    var wW = MW(4499),
      CW = MW(4100),
      zR = Object.prototype,
      AW = zR.hasOwnProperty,
      bR = zR.propertyIsEnumerable,
      yR = wW(function() {
        return arguments
      }()) ? wW : function(WW) {
        return CW(WW) && AW.call(WW, "callee") && !bR.call(WW, "callee")
      };
    WW.exports = yR
  },
  4118: WW => {
    var RW = Array.isArray;
    WW.exports = RW
  },
  4443: (WW, RW, MW) => {
    var wW = MW(4216),
      CW = MW(4450);
    WW.exports = function(WW) {
      return null != WW && CW(WW.length) && !wW(WW)
    }
  },
  5293: (WW, RW, MW) => {
    var wW = MW(4080),
      CW = MW(4100);
    WW.exports = function(WW) {
      return !0 === WW || !1 === WW || CW(WW) && "[object Boolean]" == wW(WW)
    }
  },
  4685: (WW, RW, MW) => {
    WW = MW.nmd(WW);
    var wW = MW(4052),
      CW = MW(4694),
      zR = RW && !RW.nodeType && RW,
      AW = zR && WW && !WW.nodeType && WW,
      bR = AW && AW.exports === zR ? wW.fw : void 0,
      yR = (bR ? bR.isBuffer : void 0) || CW;
    WW.exports = yR
  },
  5175: (WW, RW, MW) => {
    var wW = MW(4555);
    WW.exports = function(WW, RW) {
      return wW(WW, RW)
    }
  },
  4216: (WW, RW, MW) => {
    var wW = MW(4080),
      CW = MW(4036);
    WW.exports = function(WW) {
      if (!CW(WW)) return !1;
      var RW = wW(WW);
      return "[object Function]" == RW || "[object GeneratorFunction]" == RW || "[object AsyncFunction]" == RW || "[object Proxy]" == RW
    }
  },
  4450: WW => {
    WW.exports = function(WW) {
      return "number" == typeof WW && WW > -1 && WW % 1 == 0 && WW <= 9007199254740991
    }
  },
  4126: (WW, RW, MW) => {
    var wW = MW(4131);
    WW.exports = function(WW) {
      return wW(WW) && WW != +WW
    }
  },
  4373: WW => {
    WW.exports = function(WW) {
      return null == WW
    }
  },
  4131: (WW, RW, MW) => {
    var wW = MW(4080),
      CW = MW(4100);
    WW.exports = function(WW) {
      return "number" == typeof WW || CW(WW) && "[object Number]" == wW(WW)
    }
  },
  4036: WW => {
    WW.exports = function(WW) {
      var RW = typeof WW;
      return null != WW && ("object" == RW || "function" == RW)
    }
  },
  4100: WW => {
    WW.exports = function(WW) {
      return null != WW && "object" == typeof WW
    }
  },
  5287: (WW, RW, MW) => {
    var wW = MW(4080),
      CW = MW(5290),
      zR = MW(4100),
      AW = Function.prototype,
      bR = Object.prototype,
      yR = AW.toString,
      NW = bR.hasOwnProperty,
      eW = yR.call(Object);
    WW.exports = function(WW) {
      if (!zR(WW) || "[object Object]" != wW(WW)) return !1;
      var RW = CW(WW);
      if (null === RW) return !0;
      var MW = NW.call(RW, "constructor") && RW.constructor;
      return "function" == typeof MW && MW instanceof MW && yR.call(MW) == eW
    }
  },
  4109: (WW, RW, MW) => {
    var wW = MW(4080),
      CW = MW(4118),
      zR = MW(4100);
    WW.exports = function(WW) {
      return "string" == typeof WW || !CW(WW) && zR(WW) && "[object String]" == wW(WW)
    }
  },
  4071: (WW, RW, MW) => {
    var wW = MW(4080),
      CW = MW(4100);
    WW.exports = function(WW) {
      return "symbol" == typeof WW || CW(WW) && "[object Symbol]" == wW(WW)
    }
  },
  4698: (WW, RW, MW) => {
    var wW = MW(4706),
      CW = MW(4708),
      zR = MW(4714),
      AW = zR && zR.isTypedArray,
      bR = AW ? CW(AW) : wW;
    WW.exports = bR
  },
  4661: (WW, RW, MW) => {
    var wW = MW(4668),
      CW = MW(4723),
      zR = MW(4443);
    WW.exports = function(WW) {
      return zR(WW) ? wW(WW) : CW(WW)
    }
  },
  5275: WW => {
    WW.exports = function(WW) {
      var RW = null == WW ? 0 : WW.length;
      return RW ? WW[RW - 1] : void 0
    }
  },
  5170: (WW, RW, MW) => {
    var wW = MW(4359),
      CW = MW(4512),
      zR = MW(4835),
      AW = MW(4118);
    WW.exports = function(WW, RW) {
      return (AW(WW) ? wW : zR)(WW, CW(RW, 3))
    }
  },
  5233: (WW, RW, MW) => {
    var wW = MW(5240),
      CW = MW(4844),
      zR = MW(4512);
    WW.exports = function(WW, RW) {
      var MW = {};
      return RW = zR(RW, 3), CW(WW, (function(WW, CW, zR) {
        wW(MW, CW, RW(WW, CW, zR))
      })), MW
    }
  },
  5136: (WW, RW, MW) => {
    var wW = MW(5138),
      CW = MW(5147),
      zR = MW(4815);
    WW.exports = function(WW) {
      return WW && WW.length ? wW(WW, zR, CW) : void 0
    }
  },
  4168: (WW, RW, MW) => {
    var wW = MW(4171);

    function CW(WW, RW) {
      if ("function" != typeof WW || null != RW && "function" != typeof RW) throw new TypeError("Expected a function");
      var MW = function() {
        var wW = arguments,
          CW = RW ? RW.apply(this, wW) : wW[0],
          zR = MW.cache;
        if (zR.has(CW)) return zR.get(CW);
        var AW = WW.apply(this, wW);
        return MW.cache = zR.set(CW, AW) || zR, AW
      };
      return MW.cache = new(CW.Cache || wW), MW
    }
    CW.Cache = wW, WW.exports = CW
  },
  5150: (WW, RW, MW) => {
    var wW = MW(5138),
      CW = MW(5157),
      zR = MW(4815);
    WW.exports = function(WW) {
      return WW && WW.length ? wW(WW, zR, CW) : void 0
    }
  },
  5012: WW => {
    WW.exports = function() {}
  },
  4043: (WW, RW, MW) => {
    var wW = MW(4052);
    WW.exports = function() {
      return wW.Date.now()
    }
  },
  4817: (WW, RW, MW) => {
    var wW = MW(4823),
      CW = MW(4830),
      zR = MW(4147),
      AW = MW(4365);
    WW.exports = function(WW) {
      return zR(WW) ? wW(AW(WW)) : CW(WW)
    }
  },
  4423: (WW, RW, MW) => {
    var wW = MW(4429)();
    WW.exports = wW
  },
  5309: (WW, RW, MW) => {
    var wW = MW(4580),
      CW = MW(4512),
      zR = MW(5318),
      AW = MW(4118),
      bR = MW(4436);
    WW.exports = function(WW, RW, MW) {
      var yR = AW(WW) ? wW : zR;
      return MW && bR(WW, RW, MW) && (RW = void 0), yR(WW, CW(RW, 3))
    }
  },
  4470: (WW, RW, MW) => {
    var wW = MW(4475),
      CW = MW(4505),
      zR = MW(4879),
      AW = MW(4436),
      bR = zR((function(WW, RW) {
        if (null == WW) return [];
        var MW = RW.length;
        return MW > 1 && AW(WW, RW[0], RW[1]) ? RW = [] : MW > 2 && AW(RW[0], RW[1], RW[2]) && (RW = [RW[0]]), CW(WW, wW(RW, 1), [])
      }));
    WW.exports = bR
  },
  4652: WW => {
    WW.exports = function() {
      return []
    }
  },
  4694: WW => {
    WW.exports = function() {
      return !1
    }
  },
  4019: (WW, RW, MW) => {
    var wW = MW(4027),
      CW = MW(4036);
    WW.exports = function(WW, RW, MW) {
      var zR = !0,
        AW = !0;
      if ("function" != typeof WW) throw new TypeError("Expected a function");
      return CW(MW) && (zR = "leading" in MW ? !!MW.leading : zR, AW = "trailing" in MW ? !!MW.trailing : AW), wW(WW, RW, {
        leading: zR,
        maxWait: RW,
        trailing: AW
      })
    }
  },
  4463: (WW, RW, MW) => {
    var wW = MW(4059),
      CW = 1 / 0;
    WW.exports = function(WW) {
      return WW ? (WW = wW(WW)) === CW || WW === -1 / 0 ? 17976931348623157e292 * (WW < 0 ? -1 : 1) : WW === WW ? WW : 0 : 0 === WW ? WW : 0
    }
  },
  5345: (WW, RW, MW) => {
    var wW = MW(4463);
    WW.exports = function(WW) {
      var RW = wW(WW),
        MW = RW % 1;
      return RW === RW ? MW ? RW - MW : RW : 0
    }
  },
  4059: (WW, RW, MW) => {
    var wW = MW(4061),
      CW = MW(4036),
      zR = MW(4071),
      AW = /^[-+]0x[0-9a-f]+$/i,
      bR = /^0b[01]+$/i,
      yR = /^0o[0-7]+$/i,
      NW = parseInt;
    WW.exports = function(WW) {
      if ("number" == typeof WW) return WW;
      if (zR(WW)) return NaN;
      if (CW(WW)) {
        var RW = "function" == typeof WW.valueOf ? WW.valueOf() : WW;
        WW = CW(RW) ? RW + "" : RW
      }
      if ("string" != typeof WW) return 0 === WW ? WW : +WW;
      WW = wW(WW);
      var MW = bR.test(WW);
      return MW || yR.test(WW) ? NW(WW.slice(2), MW ? 2 : 8) : AW.test(WW) ? NaN : +WW
    }
  },
  4343: (WW, RW, MW) => {
    var wW = MW(4352);
    WW.exports = function(WW) {
      return null == WW ? "" : wW(WW)
    }
  },
  4959: (WW, RW, MW) => {
    var wW = MW(4512),
      CW = MW(4965);
    WW.exports = function(WW, RW) {
      return WW && WW.length ? CW(WW, wW(RW, 2)) : []
    }
  },
  5028: (WW, RW, MW) => {
    var wW = MW(5034)("toUpperCase");
    WW.exports = wW
  },
  5101: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => UR
    });
    var wW = MW(75),
      CW = MW(3940),
      zR = MW.n(CW);
    const {
      getOwnPropertyNames: AW,
      getOwnPropertySymbols: bR
    } = Object, {
      hasOwnProperty: yR
    } = Object.prototype;

    function NW(WW, RW) {
      return function(MW, wW, CW) {
        return WW(MW, wW, CW) && RW(MW, wW, CW)
      }
    }

    function eW(WW) {
      return function(RW, MW, wW) {
        if (!RW || !MW || "object" !== typeof RW || "object" !== typeof MW) return WW(RW, MW, wW);
        const {
          cache: CW
        } = wW, zR = CW.get(RW), AW = CW.get(MW);
        if (zR && AW) return zR === MW && AW === RW;
        CW.set(RW, MW), CW.set(MW, RW);
        const bR = WW(RW, MW, wW);
        return CW.delete(RW), CW.delete(MW), bR
      }
    }

    function BW(WW) {
      return AW(WW).concat(bR(WW))
    }
    const tR = Object.hasOwn || ((WW, RW) => yR.call(WW, RW));

    function TW(WW, RW) {
      return WW === RW || !WW && !RW && WW !== WW && RW !== RW
    }
    const {
      getOwnPropertyDescriptor: gR,
      keys: iR
    } = Object;

    function YW(WW, RW) {
      return WW.byteLength === RW.byteLength && kR(new Uint8Array(WW), new Uint8Array(RW))
    }

    function JW(WW, RW, MW) {
      let wW = WW.length;
      if (RW.length !== wW) return !1;
      for (; wW-- > 0;)
        if (!MW.equals(WW[wW], RW[wW], wW, wW, WW, RW, MW)) return !1;
      return !0
    }

    function PW(WW, RW) {
      return WW.byteLength === RW.byteLength && kR(new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength), new Uint8Array(RW.buffer, RW.byteOffset, RW.byteLength))
    }

    function IW(WW, RW) {
      return TW(WW.getTime(), RW.getTime())
    }

    function oW(WW, RW) {
      return WW.name === RW.name && WW.message === RW.message && WW.cause === RW.cause && WW.stack === RW.stack
    }

    function lW(WW, RW) {
      return WW === RW
    }

    function FW(WW, RW, MW) {
      const wW = WW.size;
      if (wW !== RW.size) return !1;
      if (!wW) return !0;
      const CW = new Array(wW),
        zR = WW.entries();
      let AW, bR, yR = 0;
      for (;
        (AW = zR.next()) && !AW.done;) {
        const wW = RW.entries();
        let zR = !1,
          NW = 0;
        for (;
          (bR = wW.next()) && !bR.done;) {
          if (CW[NW]) {
            NW++;
            continue
          }
          const wW = AW.value,
            eW = bR.value;
          if (MW.equals(wW[0], eW[0], yR, NW, WW, RW, MW) && MW.equals(wW[1], eW[1], wW[0], eW[0], WW, RW, MW)) {
            zR = CW[NW] = !0;
            break
          }
          NW++
        }
        if (!zR) return !1;
        yR++
      }
      return !0
    }
    const fW = TW;

    function QW(WW, RW, MW) {
      const wW = iR(WW);
      let CW = wW.length;
      if (iR(RW).length !== CW) return !1;
      for (; CW-- > 0;)
        if (!sW(WW, RW, MW, wW[CW])) return !1;
      return !0
    }

    function rR(WW, RW, MW) {
      const wW = BW(WW);
      let CW, zR, AW, bR = wW.length;
      if (BW(RW).length !== bR) return !1;
      for (; bR-- > 0;) {
        if (CW = wW[bR], !sW(WW, RW, MW, CW)) return !1;
        if (zR = gR(WW, CW), AW = gR(RW, CW), (zR || AW) && (!zR || !AW || zR.configurable !== AW.configurable || zR.enumerable !== AW.enumerable || zR.writable !== AW.writable)) return !1
      }
      return !0
    }

    function cR(WW, RW) {
      return TW(WW.valueOf(), RW.valueOf())
    }

    function XW(WW, RW) {
      return WW.source === RW.source && WW.flags === RW.flags
    }

    function jR(WW, RW, MW) {
      const wW = WW.size;
      if (wW !== RW.size) return !1;
      if (!wW) return !0;
      const CW = new Array(wW),
        zR = WW.values();
      let AW, bR;
      for (;
        (AW = zR.next()) && !AW.done;) {
        const wW = RW.values();
        let zR = !1,
          yR = 0;
        for (;
          (bR = wW.next()) && !bR.done;) {
          if (!CW[yR] && MW.equals(AW.value, bR.value, AW.value, bR.value, WW, RW, MW)) {
            zR = CW[yR] = !0;
            break
          }
          yR++
        }
        if (!zR) return !1
      }
      return !0
    }

    function kR(WW, RW) {
      let MW = WW.byteLength;
      if (RW.byteLength !== MW || WW.byteOffset !== RW.byteOffset) return !1;
      for (; MW-- > 0;)
        if (WW[MW] !== RW[MW]) return !1;
      return !0
    }

    function aR(WW, RW) {
      return WW.hostname === RW.hostname && WW.pathname === RW.pathname && WW.protocol === RW.protocol && WW.port === RW.port && WW.hash === RW.hash && WW.username === RW.username && WW.password === RW.password
    }

    function sW(WW, RW, MW, wW) {
      return !("_owner" !== wW && "__o" !== wW && "__v" !== wW || !WW.$$typeof && !RW.$$typeof) || tR(RW, wW) && MW.equals(WW[wW], RW[wW], wW, wW, WW, RW, MW)
    }
    const dW = {
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
      pW = Object.prototype.toString;

    function hW(WW) {
      let {
        areArrayBuffersEqual: RW,
        areArraysEqual: MW,
        areDataViewsEqual: wW,
        areDatesEqual: CW,
        areErrorsEqual: zR,
        areFunctionsEqual: AW,
        areMapsEqual: bR,
        areNumbersEqual: yR,
        areObjectsEqual: NW,
        arePrimitiveWrappersEqual: eW,
        areRegExpsEqual: BW,
        areSetsEqual: tR,
        areTypedArraysEqual: TW,
        areUrlsEqual: gR,
        unknownTagComparators: iR
      } = WW;
      return function(WW, YW, JW) {
        if (WW === YW) return !0;
        if (null == WW || null == YW) return !1;
        const PW = typeof WW;
        if (PW !== typeof YW) return !1;
        if ("object" !== PW) return "number" === PW ? yR(WW, YW, JW) : "function" === PW && AW(WW, YW, JW);
        const IW = WW.constructor;
        if (IW !== YW.constructor) return !1;
        if (IW === Object) return NW(WW, YW, JW);
        if (Array.isArray(WW)) return MW(WW, YW, JW);
        if (IW === Date) return CW(WW, YW, JW);
        if (IW === RegExp) return BW(WW, YW, JW);
        if (IW === Map) return bR(WW, YW, JW);
        if (IW === Set) return tR(WW, YW, JW);
        const oW = pW.call(WW);
        if ("[object Date]" === oW) return CW(WW, YW, JW);
        if ("[object RegExp]" === oW) return BW(WW, YW, JW);
        if ("[object Map]" === oW) return bR(WW, YW, JW);
        if ("[object Set]" === oW) return tR(WW, YW, JW);
        if ("[object Object]" === oW) return "function" !== typeof WW.then && "function" !== typeof YW.then && NW(WW, YW, JW);
        if ("[object URL]" === oW) return gR(WW, YW, JW);
        if ("[object Error]" === oW) return zR(WW, YW, JW);
        if ("[object Arguments]" === oW) return NW(WW, YW, JW);
        if (dW[oW]) return TW(WW, YW, JW);
        if ("[object ArrayBuffer]" === oW) return RW(WW, YW, JW);
        if ("[object DataView]" === oW) return wW(WW, YW, JW);
        if ("[object Boolean]" === oW || "[object Number]" === oW || "[object String]" === oW) return eW(WW, YW, JW);
        if (iR) {
          let RW = iR[oW];
          if (!RW) {
            const MW = null != (lW = WW) ? lW[Symbol.toStringTag] : void 0;
            MW && (RW = iR[MW])
          }
          if (RW) return RW(WW, YW, JW)
        }
        var lW;
        return !1
      }
    }
    const UW = EW();
    EW({
      strict: !0
    }), EW({
      circular: !0
    }), EW({
      circular: !0,
      strict: !0
    }), EW({
      createInternalComparator: () => TW
    }), EW({
      strict: !0,
      createInternalComparator: () => TW
    }), EW({
      circular: !0,
      createInternalComparator: () => TW
    }), EW({
      circular: !0,
      createInternalComparator: () => TW,
      strict: !0
    });

    function EW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: RW = !1,
        createInternalComparator: MW,
        createState: wW,
        strict: CW = !1
      } = WW, zR = function(WW) {
        let {
          circular: RW,
          createCustomConfig: MW,
          strict: wW
        } = WW, CW = {
          areArrayBuffersEqual: YW,
          areArraysEqual: wW ? rR : JW,
          areDataViewsEqual: PW,
          areDatesEqual: IW,
          areErrorsEqual: oW,
          areFunctionsEqual: lW,
          areMapsEqual: wW ? NW(FW, rR) : FW,
          areNumbersEqual: fW,
          areObjectsEqual: wW ? rR : QW,
          arePrimitiveWrappersEqual: cR,
          areRegExpsEqual: XW,
          areSetsEqual: wW ? NW(jR, rR) : jR,
          areTypedArraysEqual: wW ? NW(kR, rR) : kR,
          areUrlsEqual: aR,
          unknownTagComparators: void 0
        };
        if (MW && (CW = Object.assign({}, CW, MW(CW))), RW) {
          const WW = eW(CW.areArraysEqual),
            RW = eW(CW.areMapsEqual),
            MW = eW(CW.areObjectsEqual),
            wW = eW(CW.areSetsEqual);
          CW = Object.assign({}, CW, {
            areArraysEqual: WW,
            areMapsEqual: RW,
            areObjectsEqual: MW,
            areSetsEqual: wW
          })
        }
        return CW
      }(WW), AW = hW(zR);
      var bR;
      return function(WW) {
        let {
          circular: RW,
          comparator: MW,
          createState: wW,
          equals: CW,
          strict: zR
        } = WW;
        if (wW) return function(WW, AW) {
          const {
            cache: bR = (RW ? new WeakMap : void 0),
            meta: yR
          } = wW();
          return MW(WW, AW, {
            cache: bR,
            equals: CW,
            meta: yR,
            strict: zR
          })
        };
        if (RW) return function(WW, RW) {
          return MW(WW, RW, {
            cache: new WeakMap,
            equals: CW,
            meta: void 0,
            strict: zR
          })
        };
        const AW = {
          cache: void 0,
          equals: CW,
          meta: void 0,
          strict: zR
        };
        return function(WW, RW) {
          return MW(WW, RW, AW)
        }
      }({
        circular: RW,
        comparator: AW,
        createState: wW,
        equals: MW ? MW(AW) : (bR = AW, function(WW, RW, MW, wW, CW, zR, AW) {
          return bR(WW, RW, AW)
        }),
        strict: CW
      })
    }

    function VW(WW) {
      var RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        MW = -1;
      requestAnimationFrame((function wW(CW) {
        MW < 0 && (MW = CW), CW - MW > RW ? (WW(CW), MW = -1) : function(WW) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(WW)
        }(wW)
      }))
    }

    function mR(WW) {
      return mR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, mR(WW)
    }

    function xR(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return vR(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return vR(WW, RW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vR(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function KW() {
      var WW = function() {
          return null
        },
        RW = !1,
        MW = function MW(wW) {
          if (!RW) {
            if (Array.isArray(wW)) {
              if (!wW.length) return;
              var CW = xR(wW),
                zR = CW[0],
                AW = CW.slice(1);
              return "number" === typeof zR ? void VW(MW.bind(null, AW), zR) : (MW(zR), void VW(MW.bind(null, AW)))
            }
            "object" === mR(wW) && WW(wW), "function" === typeof wW && wW()
          }
        };
      return {
        stop: function() {
          RW = !0
        },
        start: function(WW) {
          RW = !1, MW(WW)
        },
        subscribe: function(RW) {
          return WW = RW,
            function() {
              WW = function() {
                return null
              }
            }
        }
      }
    }

    function uW(WW) {
      return uW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, uW(WW)
    }

    function OW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function nW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? OW(Object(MW), !0).forEach((function(RW) {
          GW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : OW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function GW(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" !== uW(WW) || null === WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" !== uW(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" === uW(RW) ? RW : String(RW)
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }
    var LW = function(WW) {
        return WW
      },
      HW = function(WW, RW) {
        return Object.keys(RW).reduce((function(MW, wW) {
          return nW(nW({}, MW), {}, GW({}, wW, WW(wW, RW[wW])))
        }), {})
      },
      DW = function(WW, RW, MW) {
        return WW.map((function(WW) {
          return "".concat((wW = WW, wW.replace(/([A-Z])/g, (function(WW) {
            return "-".concat(WW.toLowerCase())
          }))), " ").concat(RW, "ms ").concat(MW);
          var wW
        })).join(",")
      };

    function qR(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        var MW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != MW) {
          var wW, CW, zR, AW, bR = [],
            yR = !0,
            NW = !1;
          try {
            if (zR = (MW = MW.call(WW)).next, 0 === RW) {
              if (Object(MW) !== MW) return;
              yR = !1
            } else
              for (; !(yR = (wW = zR.call(MW)).done) && (bR.push(wW.value), bR.length !== RW); yR = !0);
          } catch (WW) {
            NW = !0, CW = WW
          } finally {
            try {
              if (!yR && null != MW.return && (AW = MW.return(), Object(AW) !== AW)) return
            } finally {
              if (NW) throw CW
            }
          }
          return bR
        }
      }(WW, RW) || SW(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ZW(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return WR(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || SW(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function SW(WW, RW) {
      if (WW) {
        if ("string" === typeof WW) return WR(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        return "Object" === MW && WW.constructor && (MW = WW.constructor.name), "Map" === MW || "Set" === MW ? Array.from(WW) : "Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW) ? WR(WW, RW) : void 0
      }
    }

    function WR(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }
    var RR = 1e-4,
      MR = function(WW, RW) {
        return [0, 3 * WW, 3 * RW - 6 * WW, 3 * WW - 3 * RW + 1]
      },
      wR = function(WW, RW) {
        return WW.map((function(WW, MW) {
          return WW * Math.pow(RW, MW)
        })).reduce((function(WW, RW) {
          return WW + RW
        }))
      },
      CR = function(WW, RW) {
        return function(MW) {
          var wW = MR(WW, RW);
          return wR(wW, MW)
        }
      },
      zM = function() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        var wW = RW[0],
          CW = RW[1],
          zR = RW[2],
          AW = RW[3];
        if (1 === RW.length) switch (RW[0]) {
          case "linear":
            wW = 0, CW = 0, zR = 1, AW = 1;
            break;
          case "ease":
            wW = .25, CW = .1, zR = .25, AW = 1;
            break;
          case "ease-in":
            wW = .42, CW = 0, zR = 1, AW = 1;
            break;
          case "ease-out":
            wW = .42, CW = 0, zR = .58, AW = 1;
            break;
          case "ease-in-out":
            wW = 0, CW = 0, zR = .58, AW = 1;
            break;
          default:
            var bR = RW[0].split("(");
            if ("cubic-bezier" === bR[0] && 4 === bR[1].split(")")[0].split(",").length) {
              var yR = qR(bR[1].split(")")[0].split(",").map((function(WW) {
                return parseFloat(WW)
              })), 4);
              wW = yR[0], CW = yR[1], zR = yR[2], AW = yR[3]
            }
        } [wW, zR, CW, AW].every((function(WW) {
          return "number" === typeof WW && WW >= 0 && WW <= 1
        }));
        var NW, eW, BW = CR(wW, zR),
          tR = CR(CW, AW),
          TW = (NW = wW, eW = zR, function(WW) {
            var RW = MR(NW, eW),
              MW = [].concat(ZW(RW.map((function(WW, RW) {
                return WW * RW
              })).slice(1)), [0]);
            return wR(MW, WW)
          }),
          gR = function(WW) {
            for (var RW, MW = WW > 1 ? 1 : WW, wW = MW, CW = 0; CW < 8; ++CW) {
              var zR = BW(wW) - MW,
                AW = TW(wW);
              if (Math.abs(zR - MW) < RR || AW < RR) return tR(wW);
              wW = (RW = wW - zR / AW) > 1 ? 1 : RW < 0 ? 0 : RW
            }
            return tR(wW)
          };
        return gR.isStepper = !1, gR
      },
      AR = function() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        var wW = RW[0];
        if ("string" === typeof wW) switch (wW) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return zM(wW);
          case "spring":
            return function() {
              var WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                RW = WW.stiff,
                MW = void 0 === RW ? 100 : RW,
                wW = WW.damping,
                CW = void 0 === wW ? 8 : wW,
                zR = WW.dt,
                AW = void 0 === zR ? 17 : zR,
                bR = function(WW, RW, wW) {
                  var zR = wW + (-(WW - RW) * MW - wW * CW) * AW / 1e3,
                    bR = wW * AW / 1e3 + WW;
                  return Math.abs(bR - RW) < RR && Math.abs(zR) < RR ? [RW, 0] : [bR, zR]
                };
              return bR.isStepper = !0, bR.dt = AW, bR
            }();
          default:
            if ("cubic-bezier" === wW.split("(")[0]) return zM(wW)
        }
        return "function" === typeof wW ? wW : null
      };

    function bM(WW) {
      return bM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, bM(WW)
    }

    function yM(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return gM(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || TR(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function NR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function eR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? NR(Object(MW), !0).forEach((function(RW) {
          BR(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : NR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function BR(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" !== bM(WW) || null === WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" !== bM(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" === bM(RW) ? RW : String(RW)
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function tM(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        var MW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != MW) {
          var wW, CW, zR, AW, bR = [],
            yR = !0,
            NW = !1;
          try {
            if (zR = (MW = MW.call(WW)).next, 0 === RW) {
              if (Object(MW) !== MW) return;
              yR = !1
            } else
              for (; !(yR = (wW = zR.call(MW)).done) && (bR.push(wW.value), bR.length !== RW); yR = !0);
          } catch (WW) {
            NW = !0, CW = WW
          } finally {
            try {
              if (!yR && null != MW.return && (AW = MW.return(), Object(AW) !== AW)) return
            } finally {
              if (NW) throw CW
            }
          }
          return bR
        }
      }(WW, RW) || TR(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function TR(WW, RW) {
      if (WW) {
        if ("string" === typeof WW) return gM(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        return "Object" === MW && WW.constructor && (MW = WW.constructor.name), "Map" === MW || "Set" === MW ? Array.from(WW) : "Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW) ? gM(WW, RW) : void 0
      }
    }

    function gM(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }
    var iM = function(WW, RW, MW) {
        return WW + (RW - WW) * MW
      },
      YR = function(WW) {
        return WW.from !== WW.to
      },
      JR = function WW(RW, MW, wW) {
        var CW = HW((function(WW, MW) {
          if (YR(MW)) {
            var wW = tM(RW(MW.from, MW.to, MW.lA), 2),
              CW = wW[0],
              zR = wW[1];
            return eR(eR({}, MW), {}, {
              from: CW,
              lA: zR
            })
          }
          return MW
        }), MW);
        return wW < 1 ? HW((function(WW, RW) {
          return YR(RW) ? eR(eR({}, RW), {}, {
            lA: iM(RW.lA, CW[WW].lA, wW),
            from: iM(RW.from, CW[WW].from, wW)
          }) : RW
        }), MW) : WW(RW, CW, wW - 1)
      };
    const PR = function(WW, RW, MW, wW, CW) {
      var zR, AW, bR, yR, NW = (zR = WW, AW = RW, [Object.keys(zR), Object.keys(AW)].reduce((function(WW, RW) {
          return WW.filter((function(WW) {
            return RW.includes(WW)
          }))
        }))),
        eW = NW.reduce((function(MW, wW) {
          return eR(eR({}, MW), {}, BR({}, wW, [WW[wW], RW[wW]]))
        }), {}),
        BW = NW.reduce((function(MW, wW) {
          return eR(eR({}, MW), {}, BR({}, wW, {
            from: WW[wW],
            lA: 0,
            to: RW[wW]
          }))
        }), {}),
        tR = -1,
        TW = function() {
          return null
        };
      return TW = MW.isStepper ? function(wW) {
          bR || (bR = wW);
          var zR = (wW - bR) / MW.dt;
          BW = JR(MW, BW, zR), CW(eR(eR(eR({}, WW), RW), HW((function(WW, RW) {
            return RW.from
          }), BW))), bR = wW, Object.values(BW).filter(YR).length && (tR = requestAnimationFrame(TW))
        } : function(zR) {
          yR || (yR = zR);
          var AW = (zR - yR) / wW,
            bR = HW((function(WW, RW) {
              return iM.apply(void 0, yM(RW).concat([MW(AW)]))
            }), eW);
          if (CW(eR(eR(eR({}, WW), RW), bR)), AW < 1) tR = requestAnimationFrame(TW);
          else {
            var NW = HW((function(WW, RW) {
              return iM.apply(void 0, yM(RW).concat([MW(1)]))
            }), eW);
            CW(eR(eR(eR({}, WW), RW), NW))
          }
        },
        function() {
          return requestAnimationFrame(TW),
            function() {
              cancelAnimationFrame(tR)
            }
        }
    };

    function IR(WW) {
      return IR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, IR(WW)
    }
    var oR = ["children", "IM", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function lR(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW, wW, CW = {},
          zR = Object.keys(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || (CW[MW] = WW[MW]);
        return CW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function FR(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return fR(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return fR(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return fR(WW, RW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fR(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function QR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function rM(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? QR(Object(MW), !0).forEach((function(RW) {
          cM(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : QR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function cM(WW, RW, MW) {
      return (RW = jM(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function XR(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, jM(wW.key), wW)
      }
    }

    function jM(WW) {
      var RW = function(WW, RW) {
        if ("object" !== IR(WW) || null === WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" !== IR(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" === IR(RW) ? RW : String(RW)
    }

    function kM(WW, RW) {
      return kM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, kM(WW, RW)
    }

    function aM(WW) {
      var RW = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (WW) {
          return !1
        }
      }();
      return function() {
        var MW, wW = pR(WW);
        if (RW) {
          var CW = pR(this).constructor;
          MW = Reflect.construct(wW, arguments, CW)
        } else MW = wW.apply(this, arguments);
        return sR(this, MW)
      }
    }

    function sR(WW, RW) {
      if (RW && ("object" === IR(RW) || "function" === typeof RW)) return RW;
      if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
      return dR(WW)
    }

    function dR(WW) {
      if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return WW
    }

    function pR(WW) {
      return pR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, pR(WW)
    }
    var hR = function(WW) {
      ! function(WW, RW) {
        if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(RW && RW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), RW && kM(WW, RW)
      }(AW, WW);
      var RW, MW, CW, zR = aM(AW);

      function AW(WW, RW) {
        var MW;
        ! function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, AW);
        var wW = (MW = zR.call(this, WW, RW)).props,
          CW = wW.isActive,
          bR = wW.attributeName,
          yR = wW.from,
          NW = wW.to,
          eW = wW.steps,
          BW = wW.children,
          tR = wW.duration;
        if (MW.handleStyleChange = MW.handleStyleChange.bind(dR(MW)), MW.changeStyle = MW.changeStyle.bind(dR(MW)), !CW || tR <= 0) return MW.state = {
          style: {}
        }, "function" === typeof BW && (MW.state = {
          style: NW
        }), sR(MW);
        if (eW && eW.length) MW.state = {
          style: eW[0].style
        };
        else if (yR) {
          if ("function" === typeof BW) return MW.state = {
            style: yR
          }, sR(MW);
          MW.state = {
            style: bR ? cM({}, bR, yR) : yR
          }
        } else MW.state = {
          style: {}
        };
        return MW
      }
      return RW = AW, (MW = [{
        key: "componentDidMount",
        value: function() {
          var WW = this.props,
            RW = WW.isActive,
            MW = WW.canBegin;
          this.mounted = !0, RW && MW && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(WW) {
          var RW = this.props,
            MW = RW.isActive,
            wW = RW.canBegin,
            CW = RW.attributeName,
            zR = RW.shouldReAnimate,
            AW = RW.to,
            bR = RW.from,
            yR = this.state.style;
          if (wW)
            if (MW) {
              if (!(UW(WW.to, AW) && WW.canBegin && WW.isActive)) {
                var NW = !WW.canBegin || !WW.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var eW = NW || zR ? bR : WW.to;
                if (this.state && yR) {
                  var BW = {
                    style: CW ? cM({}, CW, eW) : eW
                  };
                  (CW && yR[CW] !== eW || !CW && yR !== eW) && this.setState(BW)
                }
                this.runAnimation(rM(rM({}, this.props), {}, {
                  from: eW,
                  IM: 0
                }))
              }
            } else {
              var tR = {
                style: CW ? cM({}, CW, AW) : AW
              };
              this.state && yR && (CW && yR[CW] !== AW || !CW && yR !== AW) && this.setState(tR)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var WW = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), WW && WW()
        }
      }, {
        key: "handleStyleChange",
        value: function(WW) {
          this.changeStyle(WW)
        }
      }, {
        key: "changeStyle",
        value: function(WW) {
          this.mounted && this.setState({
            style: WW
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(WW) {
          var RW = this,
            MW = WW.from,
            wW = WW.to,
            CW = WW.duration,
            zR = WW.easing,
            AW = WW.IM,
            bR = WW.onAnimationEnd,
            yR = WW.onAnimationStart,
            NW = PR(MW, wW, AR(zR), CW, this.changeStyle);
          this.manager.start([yR, AW, function() {
            RW.stopJSAnimation = NW()
          }, CW, bR])
        }
      }, {
        key: "runStepAnimation",
        value: function(WW) {
          var RW = this,
            MW = WW.steps,
            wW = WW.IM,
            CW = WW.onAnimationStart,
            zR = MW[0],
            AW = zR.style,
            bR = zR.duration,
            yR = void 0 === bR ? 0 : bR;
          return this.manager.start([CW].concat(FR(MW.reduce((function(WW, wW, CW) {
            if (0 === CW) return WW;
            var zR = wW.duration,
              AW = wW.easing,
              bR = void 0 === AW ? "ease" : AW,
              yR = wW.style,
              NW = wW.properties,
              eW = wW.onAnimationEnd,
              BW = CW > 0 ? MW[CW - 1] : wW,
              tR = NW || Object.keys(yR);
            if ("function" === typeof bR || "spring" === bR) return [].concat(FR(WW), [RW.runJSAnimation.bind(RW, {
              from: BW.style,
              to: yR,
              duration: zR,
              easing: bR
            }), zR]);
            var TW = DW(tR, zR, bR),
              gR = rM(rM(rM({}, BW.style), yR), {}, {
                transition: TW
              });
            return [].concat(FR(WW), [gR, zR, eW]).filter(LW)
          }), [AW, Math.max(yR, wW)])), [WW.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(WW) {
          this.manager || (this.manager = KW());
          var RW = WW.IM,
            MW = WW.duration,
            wW = WW.attributeName,
            CW = WW.to,
            zR = WW.easing,
            AW = WW.onAnimationStart,
            bR = WW.onAnimationEnd,
            yR = WW.steps,
            NW = WW.children,
            eW = this.manager;
          if (this.unSubscribe = eW.subscribe(this.handleStyleChange), "function" !== typeof zR && "function" !== typeof NW && "spring" !== zR)
            if (yR.length > 1) this.runStepAnimation(WW);
            else {
              var BW = wW ? cM({}, wW, CW) : CW,
                tR = DW(Object.keys(BW), MW, zR);
              eW.start([AW, RW, rM(rM({}, BW), {}, {
                transition: tR
              }), MW, bR])
            }
          else this.runJSAnimation(WW)
        }
      }, {
        key: "render",
        value: function() {
          var WW = this.props,
            RW = WW.children,
            MW = (WW.IM, WW.duration),
            CW = (WW.attributeName, WW.easing, WW.isActive),
            zR = (WW.steps, WW.from, WW.to, WW.canBegin, WW.onAnimationEnd, WW.shouldReAnimate, WW.onAnimationReStart, lR(WW, oR)),
            AW = wW.Children.count(RW),
            bR = this.state.style;
          if ("function" === typeof RW) return RW(bR);
          if (!CW || 0 === AW || MW <= 0) return RW;
          var yR = function(WW) {
            var RW = WW.props,
              MW = RW.style,
              CW = void 0 === MW ? {} : MW,
              AW = RW.className;
            return (0, wW.cloneElement)(WW, rM(rM({}, zR), {}, {
              style: rM(rM({}, CW), bR),
              className: AW
            }))
          };
          return 1 === AW ? yR(wW.Children.only(RW)) : wW.createElement("div", null, wW.Children.map(RW, (function(WW) {
            return yR(WW)
          })))
        }
      }]) && XR(RW.prototype, MW), CW && XR(RW, CW), Object.defineProperty(RW, "prototype", {
        writable: !1
      }), AW
    }(wW.PureComponent);
    hR.displayName = "Animate", hR.defaultProps = {
      IM: 0,
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
    }, hR.propTypes = {
      from: zR().oneOfType([zR().object, zR().string]),
      to: zR().oneOfType([zR().object, zR().string]),
      attributeName: zR().string,
      duration: zR().number,
      IM: zR().number,
      easing: zR().oneOfType([zR().string, zR().func]),
      steps: zR().arrayOf(zR().shape({
        duration: zR().number.isRequired,
        style: zR().object.isRequired,
        easing: zR().oneOfType([zR().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), zR().func]),
        properties: zR().arrayOf("string"),
        onAnimationEnd: zR().func
      })),
      children: zR().oneOfType([zR().node, zR().func]),
      isActive: zR().bool,
      canBegin: zR().bool,
      onAnimationEnd: zR().func,
      shouldReAnimate: zR().bool,
      onAnimationStart: zR().func,
      onAnimationReStart: zR().func
    };
    const UR = hR
  },
  5362: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => xR
    });
    var wW, CW = MW(75),
      zR = MW(4017),
      AW = MW(5101),
      bR = MW(4216),
      yR = MW.n(bR),
      NW = MW(5136),
      eW = MW.n(NW),
      BW = MW(4373),
      tR = MW.n(BW),
      TW = MW(4126),
      gR = MW.n(TW),
      iR = MW(5175),
      YW = MW.n(iR),
      JW = MW(5354),
      PW = MW(5091),
      IW = MW(4938),
      oW = MW(5266),
      lW = MW(4945),
      FW = MW(4103),
      fW = MW(5115),
      QW = MW(4381),
      rR = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      cR = ["key"];

    function XW(WW) {
      return XW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, XW(WW)
    }

    function jR(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function kR() {
      return kR = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, kR.apply(this, arguments)
    }

    function aR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function sW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? aR(Object(MW), !0).forEach((function(RW) {
          VW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : aR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function dW(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, mR(wW.key), wW)
      }
    }

    function pW(WW, RW, MW) {
      return RW = UW(RW),
        function(WW, RW) {
          if (RW && ("object" === XW(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, hW() ? Reflect.construct(RW, MW || [], UW(WW).constructor) : RW.apply(WW, MW))
    }

    function hW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (hW = function() {
        return !!WW
      })()
    }

    function UW(WW) {
      return UW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, UW(WW)
    }

    function EW(WW, RW) {
      return EW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, EW(WW, RW)
    }

    function VW(WW, RW, MW) {
      return (RW = mR(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function mR(WW) {
      var RW = function(WW, RW) {
        if ("object" != XW(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != XW(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == XW(RW) ? RW : RW + ""
    }
    var xR = function(WW) {
      function RW() {
        var WW;
        ! function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, RW);
        for (var MW = arguments.length, wW = new Array(MW), CW = 0; CW < MW; CW++) wW[CW] = arguments[CW];
        return VW(WW = pW(this, RW, [].concat(wW)), "state", {
          isAnimationFinished: !0
        }), VW(WW, "id", (0, FW.D)("recharts-area-")), VW(WW, "handleAnimationEnd", (function() {
          var RW = WW.props.onAnimationEnd;
          WW.setState({
            isAnimationFinished: !0
          }), yR()(RW) && RW()
        })), VW(WW, "handleAnimationStart", (function() {
          var RW = WW.props.onAnimationStart;
          WW.setState({
            isAnimationFinished: !1
          }), yR()(RW) && RW()
        })), WW
      }
      return function(WW, RW) {
        if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(RW && RW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), RW && EW(WW, RW)
      }(RW, WW), MW = RW, wW = [{
        key: "renderDots",
        value: function(WW, MW, wW) {
          var zR = this.props.isAnimationActive,
            AW = this.state.isAnimationFinished;
          if (zR && !AW) return null;
          var bR = this.props,
            yR = bR.dot,
            NW = bR.points,
            eW = bR.dataKey,
            BW = (0, QW.e)(this.props, !1),
            tR = (0, QW.e)(yR, !0),
            TW = NW.map((function(WW, MW) {
              var wW = sW(sW(sW({
                key: "dot-".concat(MW),
                r: 3
              }, BW), tR), {}, {
                index: MW,
                cx: WW.x,
                cy: WW.y,
                dataKey: eW,
                value: WW.value,
                payload: WW.payload,
                points: NW
              });
              return RW.renderDotItem(yR, wW)
            })),
            gR = {
              clipPath: WW ? "url(#clipPath-".concat(MW ? "" : "dots-").concat(wW, ")") : null
            };
          return CW.createElement(IW.b, kR({
            className: "recharts-area-dots"
          }, gR), TW)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(WW) {
          var RW = this.props,
            MW = RW.baseLine,
            wW = RW.points,
            zR = RW.strokeWidth,
            AW = wW[0].x,
            bR = wW[wW.length - 1].x,
            yR = WW * Math.abs(AW - bR),
            NW = eW()(wW.map((function(WW) {
              return WW.y || 0
            })));
          return (0, FW.u)(MW) && "number" === typeof MW ? NW = Math.max(MW, NW) : MW && Array.isArray(MW) && MW.length && (NW = Math.max(eW()(MW.map((function(WW) {
            return WW.y || 0
          }))), NW)), (0, FW.u)(NW) ? CW.createElement("rect", {
            x: AW < bR ? AW : AW - yR,
            y: 0,
            width: yR,
            height: Math.floor(NW + (zR ? parseInt("".concat(zR), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(WW) {
          var RW = this.props,
            MW = RW.baseLine,
            wW = RW.points,
            zR = RW.strokeWidth,
            AW = wW[0].y,
            bR = wW[wW.length - 1].y,
            yR = WW * Math.abs(AW - bR),
            NW = eW()(wW.map((function(WW) {
              return WW.x || 0
            })));
          return (0, FW.u)(MW) && "number" === typeof MW ? NW = Math.max(MW, NW) : MW && Array.isArray(MW) && MW.length && (NW = Math.max(eW()(MW.map((function(WW) {
            return WW.x || 0
          }))), NW)), (0, FW.u)(NW) ? CW.createElement("rect", {
            x: 0,
            y: AW < bR ? AW : AW - yR,
            width: NW + (zR ? parseInt("".concat(zR), 10) : 1),
            height: Math.floor(yR)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(WW) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(WW) : this.renderHorizontalRect(WW)
        }
      }, {
        key: "renderAreaStatically",
        value: function(WW, RW, MW, wW) {
          var zR = this.props,
            AW = zR.layout,
            bR = zR.type,
            yR = zR.stroke,
            NW = zR.connectNulls,
            eW = zR.isRange,
            BW = (zR.ref, jR(zR, rR));
          return CW.createElement(IW.b, {
            clipPath: MW ? "url(#clipPath-".concat(wW, ")") : null
          }, CW.createElement(JW.b, kR({}, (0, QW.e)(BW, !0), {
            points: WW,
            connectNulls: NW,
            type: bR,
            baseLine: RW,
            layout: AW,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== yR && CW.createElement(JW.b, kR({}, (0, QW.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: AW,
            type: bR,
            connectNulls: NW,
            fill: "none",
            points: WW
          })), "none" !== yR && eW && CW.createElement(JW.b, kR({}, (0, QW.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: AW,
            type: bR,
            connectNulls: NW,
            fill: "none",
            points: RW
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(WW, RW) {
          var MW = this,
            wW = this.props,
            zR = wW.points,
            bR = wW.baseLine,
            yR = wW.isAnimationActive,
            NW = wW.animationBegin,
            eW = wW.animationDuration,
            BW = wW.animationEasing,
            TW = wW.animationId,
            iR = this.state,
            YW = iR.prevPoints,
            JW = iR.prevBaseLine;
          return CW.createElement(AW.c, {
            IM: NW,
            duration: eW,
            isActive: yR,
            easing: BW,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(TW),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(wW) {
            var AW = wW.t;
            if (YW) {
              var yR, NW = YW.length / zR.length,
                eW = zR.map((function(WW, RW) {
                  var MW = Math.floor(RW * NW);
                  if (YW[MW]) {
                    var wW = YW[MW],
                      CW = (0, FW.n)(wW.x, WW.x),
                      zR = (0, FW.n)(wW.y, WW.y);
                    return sW(sW({}, WW), {}, {
                      x: CW(AW),
                      y: zR(AW)
                    })
                  }
                  return WW
                }));
              return yR = (0, FW.u)(bR) && "number" === typeof bR ? (0, FW.n)(JW, bR)(AW) : tR()(bR) || gR()(bR) ? (0, FW.n)(JW, 0)(AW) : bR.map((function(WW, RW) {
                var MW = Math.floor(RW * NW);
                if (JW[MW]) {
                  var wW = JW[MW],
                    CW = (0, FW.n)(wW.x, WW.x),
                    zR = (0, FW.n)(wW.y, WW.y);
                  return sW(sW({}, WW), {}, {
                    x: CW(AW),
                    y: zR(AW)
                  })
                }
                return WW
              })), MW.renderAreaStatically(eW, yR, WW, RW)
            }
            return CW.createElement(IW.b, null, CW.createElement("defs", null, CW.createElement("clipPath", {
              id: "animationClipPath-".concat(RW)
            }, MW.renderClipRect(AW))), CW.createElement(IW.b, {
              clipPath: "url(#animationClipPath-".concat(RW, ")")
            }, MW.renderAreaStatically(zR, bR, WW, RW)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(WW, RW) {
          var MW = this.props,
            wW = MW.points,
            CW = MW.baseLine,
            zR = MW.isAnimationActive,
            AW = this.state,
            bR = AW.prevPoints,
            yR = AW.prevBaseLine,
            NW = AW.totalLength;
          return zR && wW && wW.length && (!bR && NW > 0 || !YW()(bR, wW) || !YW()(yR, CW)) ? this.renderAreaWithAnimation(WW, RW) : this.renderAreaStatically(wW, CW, WW, RW)
        }
      }, {
        key: "render",
        value: function() {
          var WW, RW = this.props,
            MW = RW.hide,
            wW = RW.dot,
            AW = RW.points,
            bR = RW.className,
            yR = RW.top,
            NW = RW.left,
            eW = RW.xAxis,
            BW = RW.yAxis,
            TW = RW.width,
            gR = RW.height,
            iR = RW.isAnimationActive,
            YW = RW.id;
          if (MW || !AW || !AW.length) return null;
          var JW = this.state.isAnimationFinished,
            PW = 1 === AW.length,
            lW = (0, zR.c)("recharts-area", bR),
            FW = eW && eW.allowDataOverflow,
            fW = BW && BW.allowDataOverflow,
            rR = FW || fW,
            cR = tR()(YW) ? this.id : YW,
            XW = null !== (WW = (0, QW.e)(wW, !1)) && void 0 !== WW ? WW : {
              r: 3,
              strokeWidth: 2
            },
            jR = XW.r,
            kR = void 0 === jR ? 3 : jR,
            aR = XW.strokeWidth,
            sW = void 0 === aR ? 2 : aR,
            dW = ((0, QW.p)(wW) ? wW : {}).clipDot,
            pW = void 0 === dW || dW,
            hW = 2 * kR + sW;
          return CW.createElement(IW.b, {
            className: lW
          }, FW || fW ? CW.createElement("defs", null, CW.createElement("clipPath", {
            id: "clipPath-".concat(cR)
          }, CW.createElement("rect", {
            x: FW ? NW : NW - TW / 2,
            y: fW ? yR : yR - gR / 2,
            width: FW ? TW : 2 * TW,
            height: fW ? gR : 2 * gR
          })), !pW && CW.createElement("clipPath", {
            id: "clipPath-dots-".concat(cR)
          }, CW.createElement("rect", {
            x: NW - hW / 2,
            y: yR - hW / 2,
            width: TW + hW,
            height: gR + hW
          }))) : null, PW ? null : this.renderArea(rR, cR), (wW || PW) && this.renderDots(rR, pW, cR), (!iR || JW) && oW.b.renderCallByParent(this.props, AW))
        }
      }], bR = [{
        key: "getDerivedStateFromProps",
        value: function(WW, RW) {
          return WW.animationId !== RW.prevAnimationId ? {
            prevAnimationId: WW.animationId,
            curPoints: WW.points,
            curBaseLine: WW.baseLine,
            prevPoints: RW.curPoints,
            prevBaseLine: RW.curBaseLine
          } : WW.points !== RW.curPoints || WW.baseLine !== RW.curBaseLine ? {
            curPoints: WW.points,
            curBaseLine: WW.baseLine
          } : null
        }
      }], wW && dW(MW.prototype, wW), bR && dW(MW, bR), Object.defineProperty(MW, "prototype", {
        writable: !1
      }), MW;
      var MW, wW, bR
    }(CW.PureComponent);
    wW = xR, VW(xR, "displayName", "Area"), VW(xR, "defaultProps", {
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
      isAnimationActive: !lW.b.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), VW(xR, "getBaseValue", (function(WW, RW, MW, wW) {
      var CW = WW.layout,
        zR = WW.baseValue,
        AW = RW.props.baseValue,
        bR = null !== AW && void 0 !== AW ? AW : zR;
      if ((0, FW.u)(bR) && "number" === typeof bR) return bR;
      var yR = "horizontal" === CW ? wW : MW,
        NW = yR.scale.domain();
      if ("number" === yR.type) {
        var eW = Math.max(NW[0], NW[1]),
          BW = Math.min(NW[0], NW[1]);
        return "dataMin" === bR ? BW : "dataMax" === bR || eW < 0 ? eW : Math.max(Math.min(NW[0], NW[1]), 0)
      }
      return "dataMin" === bR ? NW[0] : "dataMax" === bR ? NW[1] : NW[0]
    })), VW(xR, "getComposedData", (function(WW) {
      var RW, MW = WW.props,
        CW = WW.item,
        zR = WW.xAxis,
        AW = WW.yAxis,
        bR = WW.xAxisTicks,
        yR = WW.yAxisTicks,
        NW = WW.bandSize,
        eW = WW.dataKey,
        BW = WW.stackedData,
        tR = WW.dataStartIndex,
        TW = WW.displayedData,
        gR = WW.offset,
        iR = MW.layout,
        YW = BW && BW.length,
        JW = wW.getBaseValue(MW, CW, zR, AW),
        PW = "horizontal" === iR,
        IW = !1,
        oW = TW.map((function(WW, RW) {
          var MW;
          YW ? MW = BW[tR + RW] : (MW = (0, fW.Z)(WW, eW), Array.isArray(MW) ? IW = !0 : MW = [JW, MW]);
          var wW = null == MW[1] || YW && null == (0, fW.Z)(WW, eW);
          return PW ? {
            x: (0, fW.y)({
              axis: zR,
              ticks: bR,
              bandSize: NW,
              entry: WW,
              index: RW
            }),
            y: wW ? null : AW.scale(MW[1]),
            value: MW,
            payload: WW
          } : {
            x: wW ? null : zR.scale(MW[1]),
            y: (0, fW.y)({
              axis: AW,
              ticks: yR,
              bandSize: NW,
              entry: WW,
              index: RW
            }),
            value: MW,
            payload: WW
          }
        }));
      return RW = YW || IW ? oW.map((function(WW) {
        var RW = Array.isArray(WW.value) ? WW.value[0] : null;
        return PW ? {
          x: WW.x,
          y: null != RW && null != WW.y ? AW.scale(RW) : null
        } : {
          x: null != RW ? zR.scale(RW) : null,
          y: WW.y
        }
      })) : PW ? AW.scale(JW) : zR.scale(JW), sW({
        points: oW,
        baseLine: RW,
        layout: iR,
        isRange: IW
      }, gR)
    })), VW(xR, "renderDotItem", (function(WW, RW) {
      var MW;
      if (CW.isValidElement(WW)) MW = CW.cloneElement(WW, RW);
      else if (yR()(WW)) MW = WW(RW);
      else {
        var wW = (0, zR.c)("recharts-area-dot", "boolean" !== typeof WW ? WW.className : ""),
          AW = RW.key,
          bR = jR(RW, cR);
        MW = CW.createElement(PW.c, kR({}, bR, {
          key: AW,
          className: wW
        }))
      }
      return MW
    }))
  },
  5250: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => nW
    });
    var wW = MW(75),
      CW = MW(4017),
      zR = MW(5101),
      AW = MW(5175),
      bR = MW.n(AW),
      yR = MW(4373),
      NW = MW.n(yR),
      eW = MW(4938),
      BW = MW(5191),
      tR = MW(5259),
      TW = MW(5266),
      gR = MW(4103),
      iR = MW(4381),
      YW = MW(4945),
      JW = MW(5115),
      PW = MW(4407),
      IW = MW(4925),
      oW = MW(5281),
      lW = ["x", "y"];

    function FW(WW) {
      return FW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, FW(WW)
    }

    function fW() {
      return fW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, fW.apply(this, arguments)
    }

    function QW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function rR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? QW(Object(MW), !0).forEach((function(RW) {
          cR(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : QW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function cR(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != FW(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != FW(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == FW(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function XW(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function jR(WW, RW) {
      var MW = WW.x,
        wW = WW.y,
        CW = XW(WW, lW),
        zR = "".concat(MW),
        AW = parseInt(zR, 10),
        bR = "".concat(wW),
        yR = parseInt(bR, 10),
        NW = "".concat(RW.height || CW.height),
        eW = parseInt(NW, 10),
        BW = "".concat(RW.width || CW.width),
        tR = parseInt(BW, 10);
      return rR(rR(rR(rR(rR({}, RW), CW), AW ? {
        x: AW
      } : {}), yR ? {
        y: yR
      } : {}), {}, {
        height: eW,
        width: tR,
        name: RW.name,
        radius: RW.radius
      })
    }

    function kR(WW) {
      return wW.createElement(oW.c, fW({
        shapeType: "rectangle",
        propTransformer: jR,
        activeClassName: "recharts-active-bar"
      }, WW))
    }
    var aR, sW = ["value", "background"];

    function dW(WW) {
      return dW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, dW(WW)
    }

    function pW(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function hW() {
      return hW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, hW.apply(this, arguments)
    }

    function UW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function EW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? UW(Object(MW), !0).forEach((function(RW) {
          uW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : UW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function VW(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, OW(wW.key), wW)
      }
    }

    function mR(WW, RW, MW) {
      return RW = vR(RW),
        function(WW, RW) {
          if (RW && ("object" === dW(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, xR() ? Reflect.construct(RW, MW || [], vR(WW).constructor) : RW.apply(WW, MW))
    }

    function xR() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (xR = function() {
        return !!WW
      })()
    }

    function vR(WW) {
      return vR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, vR(WW)
    }

    function KW(WW, RW) {
      return KW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, KW(WW, RW)
    }

    function uW(WW, RW, MW) {
      return (RW = OW(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function OW(WW) {
      var RW = function(WW, RW) {
        if ("object" != dW(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != dW(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == dW(RW) ? RW : RW + ""
    }
    var nW = function(WW) {
      function RW() {
        var WW;
        ! function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, RW);
        for (var MW = arguments.length, wW = new Array(MW), CW = 0; CW < MW; CW++) wW[CW] = arguments[CW];
        return uW(WW = mR(this, RW, [].concat(wW)), "state", {
          isAnimationFinished: !1
        }), uW(WW, "id", (0, gR.D)("recharts-bar-")), uW(WW, "handleAnimationEnd", (function() {
          var RW = WW.props.onAnimationEnd;
          WW.setState({
            isAnimationFinished: !0
          }), RW && RW()
        })), uW(WW, "handleAnimationStart", (function() {
          var RW = WW.props.onAnimationStart;
          WW.setState({
            isAnimationFinished: !1
          }), RW && RW()
        })), WW
      }
      return function(WW, RW) {
        if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(RW && RW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), RW && KW(WW, RW)
      }(RW, WW), MW = RW, AW = [{
        key: "renderRectanglesStatically",
        value: function(WW) {
          var RW = this,
            MW = this.props,
            CW = MW.shape,
            zR = MW.dataKey,
            AW = MW.activeIndex,
            bR = MW.activeBar,
            yR = (0, iR.e)(this.props, !1);
          return WW && WW.map((function(WW, MW) {
            var NW = MW === AW,
              BW = NW ? bR : CW,
              tR = EW(EW(EW({}, yR), WW), {}, {
                isActive: NW,
                option: BW,
                index: MW,
                dataKey: zR,
                onAnimationStart: RW.handleAnimationStart,
                onAnimationEnd: RW.handleAnimationEnd
              });
            return wW.createElement(eW.b, hW({
              className: "recharts-bar-rectangle"
            }, (0, PW.q)(RW.props, WW, MW), {
              key: "rectangle-".concat(null === WW || void 0 === WW ? void 0 : WW.x, "-").concat(null === WW || void 0 === WW ? void 0 : WW.y, "-").concat(null === WW || void 0 === WW ? void 0 : WW.value, "-").concat(MW)
            }), wW.createElement(kR, tR))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var WW = this,
            RW = this.props,
            MW = RW.data,
            CW = RW.layout,
            AW = RW.isAnimationActive,
            bR = RW.animationBegin,
            yR = RW.animationDuration,
            NW = RW.animationEasing,
            BW = RW.animationId,
            tR = this.state.prevData;
          return wW.createElement(zR.c, {
            IM: bR,
            duration: yR,
            isActive: AW,
            easing: NW,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(BW),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(RW) {
            var zR = RW.t,
              AW = MW.map((function(WW, RW) {
                var MW = tR && tR[RW];
                if (MW) {
                  var wW = (0, gR.n)(MW.x, WW.x),
                    AW = (0, gR.n)(MW.y, WW.y),
                    bR = (0, gR.n)(MW.width, WW.width),
                    yR = (0, gR.n)(MW.height, WW.height);
                  return EW(EW({}, WW), {}, {
                    x: wW(zR),
                    y: AW(zR),
                    width: bR(zR),
                    height: yR(zR)
                  })
                }
                if ("horizontal" === CW) {
                  var NW = (0, gR.n)(0, WW.height)(zR);
                  return EW(EW({}, WW), {}, {
                    y: WW.y + WW.height - NW,
                    height: NW
                  })
                }
                var eW = (0, gR.n)(0, WW.width)(zR);
                return EW(EW({}, WW), {}, {
                  width: eW
                })
              }));
            return wW.createElement(eW.b, null, WW.renderRectanglesStatically(AW))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var WW = this.props,
            RW = WW.data,
            MW = WW.isAnimationActive,
            wW = this.state.prevData;
          return !(MW && RW && RW.length) || wW && bR()(wW, RW) ? this.renderRectanglesStatically(RW) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var WW = this,
            RW = this.props,
            MW = RW.data,
            CW = RW.dataKey,
            zR = RW.activeIndex,
            AW = (0, iR.e)(this.props.background, !1);
          return MW.map((function(RW, MW) {
            RW.value;
            var bR = RW.background,
              yR = pW(RW, sW);
            if (!bR) return null;
            var NW = EW(EW(EW(EW(EW({}, yR), {}, {
              fill: "#eee"
            }, bR), AW), (0, PW.q)(WW.props, RW, MW)), {}, {
              onAnimationStart: WW.handleAnimationStart,
              onAnimationEnd: WW.handleAnimationEnd,
              dataKey: CW,
              index: MW,
              className: "recharts-bar-background-rectangle"
            });
            return wW.createElement(kR, hW({
              key: "background-bar-".concat(MW),
              option: WW.props.background,
              isActive: MW === zR
            }, NW))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(WW, RW) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var MW = this.props,
            CW = MW.data,
            zR = MW.xAxis,
            AW = MW.yAxis,
            bR = MW.layout,
            yR = MW.children,
            NW = (0, iR.f)(yR, BW.b);
          if (!NW) return null;
          var tR = "vertical" === bR ? CW[0].height / 2 : CW[0].width / 2,
            TW = function(WW, RW) {
              var MW = Array.isArray(WW.value) ? WW.value[1] : WW.value;
              return {
                x: WW.x,
                y: WW.y,
                value: MW,
                errorVal: (0, JW.Z)(WW, RW)
              }
            },
            gR = {
              clipPath: WW ? "url(#clipPath-".concat(RW, ")") : null
            };
          return wW.createElement(eW.b, gR, NW.map((function(WW) {
            return wW.cloneElement(WW, {
              key: "error-bar-".concat(RW, "-").concat(WW.props.dataKey),
              data: CW,
              xAxis: zR,
              yAxis: AW,
              layout: bR,
              offset: tR,
              dataPointFormatter: TW
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var WW = this.props,
            RW = WW.hide,
            MW = WW.data,
            zR = WW.className,
            AW = WW.xAxis,
            bR = WW.yAxis,
            yR = WW.left,
            BW = WW.top,
            tR = WW.width,
            gR = WW.height,
            iR = WW.isAnimationActive,
            YW = WW.background,
            JW = WW.id;
          if (RW || !MW || !MW.length) return null;
          var PW = this.state.isAnimationFinished,
            IW = (0, CW.c)("recharts-bar", zR),
            oW = AW && AW.allowDataOverflow,
            lW = bR && bR.allowDataOverflow,
            FW = oW || lW,
            fW = NW()(JW) ? this.id : JW;
          return wW.createElement(eW.b, {
            className: IW
          }, oW || lW ? wW.createElement("defs", null, wW.createElement("clipPath", {
            id: "clipPath-".concat(fW)
          }, wW.createElement("rect", {
            x: oW ? yR : yR - tR / 2,
            y: lW ? BW : BW - gR / 2,
            width: oW ? tR : 2 * tR,
            height: lW ? gR : 2 * gR
          }))) : null, wW.createElement(eW.b, {
            className: "recharts-bar-rectangles",
            clipPath: FW ? "url(#clipPath-".concat(fW, ")") : null
          }, YW ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(FW, fW), (!iR || PW) && TW.b.renderCallByParent(this.props, MW))
        }
      }], yR = [{
        key: "getDerivedStateFromProps",
        value: function(WW, RW) {
          return WW.animationId !== RW.prevAnimationId ? {
            prevAnimationId: WW.animationId,
            curData: WW.data,
            prevData: RW.curData
          } : WW.data !== RW.curData ? {
            curData: WW.data
          } : null
        }
      }], AW && VW(MW.prototype, AW), yR && VW(MW, yR), Object.defineProperty(MW, "prototype", {
        writable: !1
      }), MW;
      var MW, AW, yR
    }(wW.PureComponent);
    aR = nW, uW(nW, "displayName", "Bar"), uW(nW, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !YW.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), uW(nW, "getComposedData", (function(WW) {
      var RW = WW.props,
        MW = WW.item,
        wW = WW.barPosition,
        CW = WW.bandSize,
        zR = WW.xAxis,
        AW = WW.yAxis,
        bR = WW.xAxisTicks,
        yR = WW.yAxisTicks,
        NW = WW.stackedData,
        eW = WW.dataStartIndex,
        BW = WW.displayedData,
        TW = WW.offset,
        YW = (0, JW.l)(wW, MW);
      if (!YW) return null;
      var PW = RW.layout,
        oW = MW.type.defaultProps,
        lW = void 0 !== oW ? EW(EW({}, oW), MW.props) : MW.props,
        FW = lW.dataKey,
        fW = lW.children,
        QW = lW.minPointSize,
        rR = "horizontal" === PW ? AW : zR,
        cR = NW ? rR.scale.domain() : null,
        XW = (0, JW.s)({
          numericAxis: rR
        }),
        jR = (0, iR.f)(fW, tR.c),
        kR = BW.map((function(WW, RW) {
          var wW, BW, tR, TW, iR, oW;
          NW ? wW = (0, JW.nb)(NW[eW + RW], cR) : (wW = (0, JW.Z)(WW, FW), Array.isArray(wW) || (wW = [XW, wW]));
          var lW = function(WW) {
            var RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(MW, wW) {
              if ("number" === typeof WW) return WW;
              var CW = (0, gR.u)(MW) || (0, gR.q)(MW);
              return CW ? WW(MW, wW) : (CW || (0, IW.b)(!1), RW)
            }
          }(QW, aR.defaultProps.minPointSize)(wW[1], RW);
          if ("horizontal" === PW) {
            var fW, rR = [AW.scale(wW[0]), AW.scale(wW[1])],
              kR = rR[0],
              sW = rR[1];
            BW = (0, JW.w)({
              axis: zR,
              ticks: bR,
              bandSize: CW,
              offset: YW.offset,
              entry: WW,
              index: RW
            }), tR = null !== (fW = null !== sW && void 0 !== sW ? sW : kR) && void 0 !== fW ? fW : void 0, TW = YW.size;
            var dW = kR - sW;
            if (iR = Number.isNaN(dW) ? 0 : dW, oW = {
                x: BW,
                y: AW.y,
                width: TW,
                height: AW.height
              }, Math.abs(lW) > 0 && Math.abs(iR) < Math.abs(lW)) {
              var pW = (0, gR.B)(iR || lW) * (Math.abs(lW) - Math.abs(iR));
              tR -= pW, iR += pW
            }
          } else {
            var hW = [zR.scale(wW[0]), zR.scale(wW[1])],
              UW = hW[0],
              VW = hW[1];
            if (BW = UW, tR = (0, JW.w)({
                axis: AW,
                ticks: yR,
                bandSize: CW,
                offset: YW.offset,
                entry: WW,
                index: RW
              }), TW = VW - UW, iR = YW.size, oW = {
                x: zR.x,
                y: tR,
                width: zR.width,
                height: iR
              }, Math.abs(lW) > 0 && Math.abs(TW) < Math.abs(lW)) TW += (0, gR.B)(TW || lW) * (Math.abs(lW) - Math.abs(TW))
          }
          return EW(EW(EW({}, WW), {}, {
            x: BW,
            y: tR,
            width: TW,
            height: iR,
            value: NW ? wW : wW[1],
            payload: WW,
            background: oW
          }, jR && jR[RW] && jR[RW].props), {}, {
            tooltipPayload: [(0, JW.W)(MW, WW)],
            tooltipPosition: {
              x: BW + TW / 2,
              y: tR + iR / 2
            }
          })
        }));
      return EW({
        data: kR,
        layout: PW
      }, TW)
    }))
  },
  5380: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => dW
    });
    var wW = MW(75),
      CW = MW(4216),
      zR = MW.n(CW),
      AW = MW(4133),
      bR = MW.n(AW),
      yR = MW(4017),
      NW = MW(4402),
      eW = MW(4938),
      BW = MW(5103),
      tR = MW(5205),
      TW = MW(4103),
      gR = MW(4407),
      iR = MW(4381),
      YW = MW(5389),
      JW = ["viewBox"],
      PW = ["viewBox"],
      IW = ["ticks"];

    function oW(WW) {
      return oW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, oW(WW)
    }

    function lW() {
      return lW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, lW.apply(this, arguments)
    }

    function FW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function fW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? FW(Object(MW), !0).forEach((function(RW) {
          aR(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : FW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function QW(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function rR(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, sW(wW.key), wW)
      }
    }

    function cR(WW, RW, MW) {
      return RW = jR(RW),
        function(WW, RW) {
          if (RW && ("object" === oW(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, XW() ? Reflect.construct(RW, MW || [], jR(WW).constructor) : RW.apply(WW, MW))
    }

    function XW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (XW = function() {
        return !!WW
      })()
    }

    function jR(WW) {
      return jR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, jR(WW)
    }

    function kR(WW, RW) {
      return kR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, kR(WW, RW)
    }

    function aR(WW, RW, MW) {
      return (RW = sW(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function sW(WW) {
      var RW = function(WW, RW) {
        if ("object" != oW(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != oW(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == oW(RW) ? RW : RW + ""
    }
    var dW = function(WW) {
      function RW(WW) {
        var MW;
        return function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, RW), (MW = cR(this, RW, [WW])).state = {
          fontSize: "",
          letterSpacing: ""
        }, MW
      }
      return function(WW, RW) {
        if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(RW && RW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), RW && kR(WW, RW)
      }(RW, WW), MW = RW, AW = [{
        key: "renderTickItem",
        value: function(WW, RW, MW) {
          var CW = (0, yR.c)(RW.className, "recharts-cartesian-axis-tick-value");
          return wW.isValidElement(WW) ? wW.cloneElement(WW, fW(fW({}, RW), {}, {
            className: CW
          })) : zR()(WW) ? WW(fW(fW({}, RW), {}, {
            className: CW
          })) : wW.createElement(BW.b, lW({}, RW, {
            className: "recharts-cartesian-axis-tick-value"
          }), MW)
        }
      }], (CW = [{
        key: "shouldComponentUpdate",
        value: function(WW, RW) {
          var MW = WW.viewBox,
            wW = QW(WW, JW),
            CW = this.props,
            zR = CW.viewBox,
            AW = QW(CW, PW);
          return !(0, NW.c)(MW, zR) || !(0, NW.c)(wW, AW) || !(0, NW.c)(RW, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var WW = this.layerReference;
          if (WW) {
            var RW = WW.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            RW && this.setState({
              fontSize: window.getComputedStyle(RW).fontSize,
              letterSpacing: window.getComputedStyle(RW).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(WW) {
          var RW, MW, wW, CW, zR, AW, bR = this.props,
            yR = bR.x,
            NW = bR.y,
            eW = bR.width,
            BW = bR.height,
            tR = bR.orientation,
            gR = bR.tickSize,
            iR = bR.mirror,
            YW = bR.tickMargin,
            JW = iR ? -1 : 1,
            PW = WW.tickSize || gR,
            IW = (0, TW.u)(WW.tickCoord) ? WW.tickCoord : WW.coordinate;
          switch (tR) {
            case "top":
              RW = MW = WW.coordinate, AW = (wW = (CW = NW + +!iR * BW) - JW * PW) - JW * YW, zR = IW;
              break;
            case "left":
              wW = CW = WW.coordinate, zR = (RW = (MW = yR + +!iR * eW) - JW * PW) - JW * YW, AW = IW;
              break;
            case "right":
              wW = CW = WW.coordinate, zR = (RW = (MW = yR + +iR * eW) + JW * PW) + JW * YW, AW = IW;
              break;
            default:
              RW = MW = WW.coordinate, AW = (wW = (CW = NW + +iR * BW) + JW * PW) + JW * YW, zR = IW
          }
          return {
            line: {
              x1: RW,
              y1: wW,
              x2: MW,
              y2: CW
            },
            WR: {
              x: zR,
              y: AW
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var WW, RW = this.props,
            MW = RW.orientation,
            wW = RW.mirror;
          switch (MW) {
            case "left":
              WW = wW ? "start" : "end";
              break;
            case "right":
              WW = wW ? "end" : "start";
              break;
            default:
              WW = "middle"
          }
          return WW
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var WW = this.props,
            RW = WW.orientation,
            MW = WW.mirror,
            wW = "end";
          switch (RW) {
            case "left":
            case "right":
              wW = "middle";
              break;
            case "top":
              wW = MW ? "start" : "end";
              break;
            default:
              wW = MW ? "end" : "start"
          }
          return wW
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var WW = this.props,
            RW = WW.x,
            MW = WW.y,
            CW = WW.width,
            zR = WW.height,
            AW = WW.orientation,
            NW = WW.mirror,
            eW = WW.axisLine,
            BW = fW(fW(fW({}, (0, iR.e)(this.props, !1)), (0, iR.e)(eW, !1)), {}, {
              fill: "none"
            });
          if ("top" === AW || "bottom" === AW) {
            var tR = +("top" === AW && !NW || "bottom" === AW && NW);
            BW = fW(fW({}, BW), {}, {
              x1: RW,
              y1: MW + tR * zR,
              x2: RW + CW,
              y2: MW + tR * zR
            })
          } else {
            var TW = +("left" === AW && !NW || "right" === AW && NW);
            BW = fW(fW({}, BW), {}, {
              x1: RW + TW * CW,
              y1: MW,
              x2: RW + TW * CW,
              y2: MW + zR
            })
          }
          return wW.createElement("line", lW({}, BW, {
            className: (0, yR.c)("recharts-cartesian-axis-line", bR()(eW, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(WW, MW, CW) {
          var AW = this,
            NW = this.props,
            BW = NW.tickLine,
            tR = NW.stroke,
            TW = NW.WR,
            JW = NW.tickFormatter,
            PW = NW.unit,
            IW = (0, YW.c)(fW(fW({}, this.props), {}, {
              ticks: WW
            }), MW, CW),
            oW = this.getTickTextAnchor(),
            FW = this.getTickVerticalAnchor(),
            QW = (0, iR.e)(this.props, !1),
            rR = (0, iR.e)(TW, !1),
            cR = fW(fW({}, QW), {}, {
              fill: "none"
            }, (0, iR.e)(BW, !1)),
            XW = IW.map((function(WW, MW) {
              var CW = AW.getTickLineCoord(WW),
                NW = CW.line,
                iR = CW.WR,
                YW = fW(fW(fW(fW({
                  textAnchor: oW,
                  verticalAnchor: FW
                }, QW), {}, {
                  stroke: "none",
                  fill: tR
                }, rR), iR), {}, {
                  index: MW,
                  payload: WW,
                  visibleTicksCount: IW.length,
                  tickFormatter: JW
                });
              return wW.createElement(eW.b, lW({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(WW.value, "-").concat(WW.coordinate, "-").concat(WW.tickCoord)
              }, (0, gR.q)(AW.props, WW, MW)), BW && wW.createElement("line", lW({}, cR, NW, {
                className: (0, yR.c)("recharts-cartesian-axis-tick-line", bR()(BW, "className"))
              })), TW && RW.renderTickItem(TW, YW, "".concat(zR()(JW) ? JW(WW.value, MW) : WW.value).concat(PW || "")))
            }));
          return wW.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, XW)
        }
      }, {
        key: "render",
        value: function() {
          var WW = this,
            RW = this.props,
            MW = RW.axisLine,
            CW = RW.width,
            AW = RW.height,
            bR = RW.ticksGenerator,
            NW = RW.className;
          if (RW.hide) return null;
          var BW = this.props,
            TW = BW.ticks,
            gR = QW(BW, IW),
            iR = TW;
          return zR()(bR) && (iR = TW && TW.length > 0 ? bR(this.props) : bR(gR)), CW <= 0 || AW <= 0 || !iR || !iR.length ? null : wW.createElement(eW.b, {
            className: (0, yR.c)("recharts-cartesian-axis", NW),
            ref: function(RW) {
              WW.layerReference = RW
            }
          }, MW && this.renderAxisLine(), this.renderTicks(iR, this.state.fontSize, this.state.letterSpacing), tR.d.renderCallByParent(this.props))
        }
      }]) && rR(MW.prototype, CW), AW && rR(MW, AW), Object.defineProperty(MW, "prototype", {
        writable: !1
      }), MW;
      var MW, CW, AW
    }(wW.Component);
    aR(dW, "displayName", "CartesianAxis"), aR(dW, "defaultProps", {
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
      WR: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  5400: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => aR
    });
    var wW = MW(75),
      CW = MW(4216),
      zR = MW.n(CW),
      AW = MW(4376),
      bR = MW(4103),
      yR = MW(4381),
      NW = MW(5115),
      eW = MW(5389),
      BW = MW(5380),
      tR = MW(5323),
      TW = ["x1", "y1", "x2", "y2", "key"],
      gR = ["offset"];

    function iR(WW) {
      return iR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, iR(WW)
    }

    function YW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function JW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? YW(Object(MW), !0).forEach((function(RW) {
          PW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : YW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function PW(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != iR(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != iR(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == iR(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function IW() {
      return IW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, IW.apply(this, arguments)
    }

    function oW(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }
    var lW = function(WW) {
      var RW = WW.fill;
      if (!RW || "none" === RW) return null;
      var MW = WW.fillOpacity,
        CW = WW.x,
        zR = WW.y,
        AW = WW.width,
        bR = WW.height,
        yR = WW.ry;
      return wW.createElement("rect", {
        x: CW,
        y: zR,
        ry: yR,
        width: AW,
        height: bR,
        stroke: "none",
        fill: RW,
        fillOpacity: MW,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function FW(WW, RW) {
      var MW;
      if (wW.isValidElement(WW)) MW = wW.cloneElement(WW, RW);
      else if (zR()(WW)) MW = WW(RW);
      else {
        var CW = RW.x1,
          AW = RW.y1,
          bR = RW.x2,
          NW = RW.y2,
          eW = RW.key,
          BW = oW(RW, TW),
          tR = (0, yR.e)(BW, !1),
          iR = (tR.offset, oW(tR, gR));
        MW = wW.createElement("line", IW({}, iR, {
          x1: CW,
          y1: AW,
          x2: bR,
          y2: NW,
          fill: "none",
          key: eW
        }))
      }
      return MW
    }

    function fW(WW) {
      var RW = WW.x,
        MW = WW.width,
        CW = WW.horizontal,
        zR = void 0 === CW || CW,
        AW = WW.horizontalPoints;
      if (!zR || !AW || !AW.length) return null;
      var bR = AW.map((function(wW, CW) {
        var AW = JW(JW({}, WW), {}, {
          x1: RW,
          y1: wW,
          x2: RW + MW,
          y2: wW,
          key: "line-".concat(CW),
          index: CW
        });
        return FW(zR, AW)
      }));
      return wW.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, bR)
    }

    function QW(WW) {
      var RW = WW.y,
        MW = WW.height,
        CW = WW.vertical,
        zR = void 0 === CW || CW,
        AW = WW.verticalPoints;
      if (!zR || !AW || !AW.length) return null;
      var bR = AW.map((function(wW, CW) {
        var AW = JW(JW({}, WW), {}, {
          x1: wW,
          y1: RW,
          x2: wW,
          y2: RW + MW,
          key: "line-".concat(CW),
          index: CW
        });
        return FW(zR, AW)
      }));
      return wW.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, bR)
    }

    function rR(WW) {
      var RW = WW.horizontalFill,
        MW = WW.fillOpacity,
        CW = WW.x,
        zR = WW.y,
        AW = WW.width,
        bR = WW.height,
        yR = WW.horizontalPoints,
        NW = WW.horizontal;
      if (!(void 0 === NW || NW) || !RW || !RW.length) return null;
      var eW = yR.map((function(WW) {
        return Math.round(WW + zR - zR)
      })).sort((function(WW, RW) {
        return WW - RW
      }));
      zR !== eW[0] && eW.unshift(0);
      var BW = eW.map((function(WW, yR) {
        var NW = !eW[yR + 1] ? zR + bR - WW : eW[yR + 1] - WW;
        if (NW <= 0) return null;
        var BW = yR % RW.length;
        return wW.createElement("rect", {
          key: "react-".concat(yR),
          y: WW,
          x: CW,
          height: NW,
          width: AW,
          stroke: "none",
          fill: RW[BW],
          fillOpacity: MW,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return wW.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, BW)
    }

    function cR(WW) {
      var RW = WW.vertical,
        MW = void 0 === RW || RW,
        CW = WW.verticalFill,
        zR = WW.fillOpacity,
        AW = WW.x,
        bR = WW.y,
        yR = WW.width,
        NW = WW.height,
        eW = WW.verticalPoints;
      if (!MW || !CW || !CW.length) return null;
      var BW = eW.map((function(WW) {
        return Math.round(WW + AW - AW)
      })).sort((function(WW, RW) {
        return WW - RW
      }));
      AW !== BW[0] && BW.unshift(0);
      var tR = BW.map((function(WW, RW) {
        var MW = !BW[RW + 1] ? AW + yR - WW : BW[RW + 1] - WW;
        if (MW <= 0) return null;
        var eW = RW % CW.length;
        return wW.createElement("rect", {
          key: "react-".concat(RW),
          x: WW,
          y: bR,
          width: MW,
          height: NW,
          stroke: "none",
          fill: CW[eW],
          fillOpacity: zR,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return wW.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, tR)
    }
    var XW = function(WW, RW) {
        var MW = WW.xAxis,
          wW = WW.width,
          CW = WW.height,
          zR = WW.offset;
        return (0, NW.z)((0, eW.c)(JW(JW(JW({}, BW.e.defaultProps), MW), {}, {
          ticks: (0, NW.Q)(MW, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: wW,
            height: CW
          }
        })), zR.left, zR.left + zR.width, RW)
      },
      jR = function(WW, RW) {
        var MW = WW.yAxis,
          wW = WW.width,
          CW = WW.height,
          zR = WW.offset;
        return (0, NW.z)((0, eW.c)(JW(JW(JW({}, BW.e.defaultProps), MW), {}, {
          ticks: (0, NW.Q)(MW, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: wW,
            height: CW
          }
        })), zR.top, zR.top + zR.height, RW)
      },
      kR = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function aR(WW) {
      var RW, MW, CW, yR, NW, eW, BW = (0, tR.k)(),
        TW = (0, tR.j)(),
        gR = (0, tR.r)(),
        YW = JW(JW({}, WW), {}, {
          stroke: null !== (RW = WW.stroke) && void 0 !== RW ? RW : kR.stroke,
          fill: null !== (MW = WW.fill) && void 0 !== MW ? MW : kR.fill,
          horizontal: null !== (CW = WW.horizontal) && void 0 !== CW ? CW : kR.horizontal,
          horizontalFill: null !== (yR = WW.horizontalFill) && void 0 !== yR ? yR : kR.horizontalFill,
          vertical: null !== (NW = WW.vertical) && void 0 !== NW ? NW : kR.vertical,
          verticalFill: null !== (eW = WW.verticalFill) && void 0 !== eW ? eW : kR.verticalFill,
          x: (0, bR.u)(WW.x) ? WW.x : gR.left,
          y: (0, bR.u)(WW.y) ? WW.y : gR.top,
          width: (0, bR.u)(WW.width) ? WW.width : gR.width,
          height: (0, bR.u)(WW.height) ? WW.height : gR.height
        }),
        PW = YW.x,
        oW = YW.y,
        FW = YW.width,
        aR = YW.height,
        sW = YW.syncWithTicks,
        dW = YW.horizontalValues,
        pW = YW.verticalValues,
        hW = (0, tR.h)(),
        UW = (0, tR.z)();
      if (!(0, bR.u)(FW) || FW <= 0 || !(0, bR.u)(aR) || aR <= 0 || !(0, bR.u)(PW) || PW !== +PW || !(0, bR.u)(oW) || oW !== +oW) return null;
      var EW = YW.verticalCoordinatesGenerator || XW,
        VW = YW.horizontalCoordinatesGenerator || jR,
        mR = YW.horizontalPoints,
        xR = YW.verticalPoints;
      if ((!mR || !mR.length) && zR()(VW)) {
        var vR = dW && dW.length,
          KW = VW({
            yAxis: UW ? JW(JW({}, UW), {}, {
              ticks: vR ? dW : UW.ticks
            }) : void 0,
            width: BW,
            height: TW,
            offset: gR
          }, !!vR || sW);
        (0, AW.d)(Array.isArray(KW), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(iR(KW), "]")), Array.isArray(KW) && (mR = KW)
      }
      if ((!xR || !xR.length) && zR()(EW)) {
        var uW = pW && pW.length,
          OW = EW({
            xAxis: hW ? JW(JW({}, hW), {}, {
              ticks: uW ? pW : hW.ticks
            }) : void 0,
            width: BW,
            height: TW,
            offset: gR
          }, !!uW || sW);
        (0, AW.d)(Array.isArray(OW), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(iR(OW), "]")), Array.isArray(OW) && (xR = OW)
      }
      return wW.createElement("g", {
        className: "recharts-cartesian-grid"
      }, wW.createElement(lW, {
        fill: YW.fill,
        fillOpacity: YW.fillOpacity,
        x: YW.x,
        y: YW.y,
        width: YW.width,
        height: YW.height,
        ry: YW.ry
      }), wW.createElement(fW, IW({}, YW, {
        offset: gR,
        horizontalPoints: mR,
        xAxis: hW,
        yAxis: UW
      })), wW.createElement(QW, IW({}, YW, {
        offset: gR,
        verticalPoints: xR,
        xAxis: hW,
        yAxis: UW
      })), wW.createElement(rR, IW({}, YW, {
        horizontalPoints: mR
      })), wW.createElement(cR, IW({}, YW, {
        verticalPoints: xR
      })))
    }
    aR.displayName = "CartesianGrid"
  },
  5191: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => oW
    });
    var wW = MW(75),
      CW = MW(4925),
      zR = MW(4938),
      AW = MW(4381),
      bR = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function yR(WW) {
      return yR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, yR(WW)
    }

    function NW() {
      return NW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, NW.apply(this, arguments)
    }

    function eW(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        var MW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != MW) {
          var wW, CW, zR, AW, bR = [],
            yR = !0,
            NW = !1;
          try {
            if (zR = (MW = MW.call(WW)).next, 0 === RW) {
              if (Object(MW) !== MW) return;
              yR = !1
            } else
              for (; !(yR = (wW = zR.call(MW)).done) && (bR.push(wW.value), bR.length !== RW); yR = !0);
          } catch (WW) {
            NW = !0, CW = WW
          } finally {
            try {
              if (!yR && null != MW.return && (AW = MW.return(), Object(AW) !== AW)) return
            } finally {
              if (NW) throw CW
            }
          }
          return bR
        }
      }(WW, RW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return BW(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return BW(WW, RW)
      }(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function BW(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function tR(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function TW(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, IW(wW.key), wW)
      }
    }

    function gR(WW, RW, MW) {
      return RW = YW(RW),
        function(WW, RW) {
          if (RW && ("object" === yR(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, iR() ? Reflect.construct(RW, MW || [], YW(WW).constructor) : RW.apply(WW, MW))
    }

    function iR() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (iR = function() {
        return !!WW
      })()
    }

    function YW(WW) {
      return YW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, YW(WW)
    }

    function JW(WW, RW) {
      return JW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, JW(WW, RW)
    }

    function PW(WW, RW, MW) {
      return (RW = IW(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function IW(WW) {
      var RW = function(WW, RW) {
        if ("object" != yR(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != yR(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == yR(RW) ? RW : RW + ""
    }
    var oW = function(WW) {
      function RW() {
        return function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, RW), gR(this, RW, arguments)
      }
      return function(WW, RW) {
        if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(RW && RW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), RW && JW(WW, RW)
      }(RW, WW), MW = RW, (yR = [{
        key: "render",
        value: function() {
          var WW = this.props,
            RW = WW.offset,
            MW = WW.layout,
            yR = WW.width,
            BW = WW.dataKey,
            TW = WW.data,
            gR = WW.dataPointFormatter,
            iR = WW.xAxis,
            YW = WW.yAxis,
            JW = tR(WW, bR),
            PW = (0, AW.e)(JW, !1);
          "x" === this.props.direction && "number" !== iR.type && (0, CW.b)(!1);
          var IW = TW.map((function(WW) {
            var CW = gR(WW, BW),
              AW = CW.x,
              bR = CW.y,
              tR = CW.value,
              TW = CW.errorVal;
            if (!TW) return null;
            var JW, IW, oW = [];
            if (Array.isArray(TW)) {
              var lW = eW(TW, 2);
              JW = lW[0], IW = lW[1]
            } else JW = IW = TW;
            if ("vertical" === MW) {
              var FW = iR.scale,
                fW = bR + RW,
                QW = fW + yR,
                rR = fW - yR,
                cR = FW(tR - JW),
                XW = FW(tR + IW);
              oW.push({
                x1: XW,
                y1: QW,
                x2: XW,
                y2: rR
              }), oW.push({
                x1: cR,
                y1: fW,
                x2: XW,
                y2: fW
              }), oW.push({
                x1: cR,
                y1: QW,
                x2: cR,
                y2: rR
              })
            } else if ("horizontal" === MW) {
              var jR = YW.scale,
                kR = AW + RW,
                aR = kR - yR,
                sW = kR + yR,
                dW = jR(tR - JW),
                pW = jR(tR + IW);
              oW.push({
                x1: aR,
                y1: pW,
                x2: sW,
                y2: pW
              }), oW.push({
                x1: kR,
                y1: dW,
                x2: kR,
                y2: pW
              }), oW.push({
                x1: aR,
                y1: dW,
                x2: sW,
                y2: dW
              })
            }
            return wW.createElement(zR.b, NW({
              className: "recharts-errorBar",
              key: "bar-".concat(oW.map((function(WW) {
                return "".concat(WW.x1, "-").concat(WW.x2, "-").concat(WW.y1, "-").concat(WW.y2)
              })))
            }, PW), oW.map((function(WW) {
              return wW.createElement("line", NW({}, WW, {
                key: "line-".concat(WW.x1, "-").concat(WW.x2, "-").concat(WW.y1, "-").concat(WW.y2)
              }))
            })))
          }));
          return wW.createElement(zR.b, {
            className: "recharts-errorBars"
          }, IW)
        }
      }]) && TW(MW.prototype, yR), BW && TW(MW, BW), Object.defineProperty(MW, "prototype", {
        writable: !1
      }), MW;
      var MW, yR, BW
    }(wW.Component);
    PW(oW, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), PW(oW, "displayName", "ErrorBar")
  },
  5369: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => VW
    });
    var wW = MW(75),
      CW = MW(5101),
      zR = MW(4216),
      AW = MW.n(zR),
      bR = MW(4373),
      yR = MW.n(bR),
      NW = MW(5175),
      eW = MW.n(NW),
      BW = MW(4017),
      tR = MW(5354),
      TW = MW(5091),
      gR = MW(4938),
      iR = MW(5266),
      YW = MW(5191),
      JW = MW(4103),
      PW = MW(4381),
      IW = MW(4945),
      oW = MW(5115),
      lW = ["type", "layout", "connectNulls", "ref"],
      FW = ["key"];

    function fW(WW) {
      return fW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, fW(WW)
    }

    function QW(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function rR() {
      return rR = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, rR.apply(this, arguments)
    }

    function cR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function XW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? cR(Object(MW), !0).forEach((function(RW) {
          UW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : cR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function jR(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return kR(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return kR(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return kR(WW, RW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kR(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function aR(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, EW(wW.key), wW)
      }
    }

    function sW(WW, RW, MW) {
      return RW = pW(RW),
        function(WW, RW) {
          if (RW && ("object" === fW(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, dW() ? Reflect.construct(RW, MW || [], pW(WW).constructor) : RW.apply(WW, MW))
    }

    function dW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (dW = function() {
        return !!WW
      })()
    }

    function pW(WW) {
      return pW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, pW(WW)
    }

    function hW(WW, RW) {
      return hW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, hW(WW, RW)
    }

    function UW(WW, RW, MW) {
      return (RW = EW(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function EW(WW) {
      var RW = function(WW, RW) {
        if ("object" != fW(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != fW(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == fW(RW) ? RW : RW + ""
    }
    var VW = function(WW) {
      function RW() {
        var WW;
        ! function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, RW);
        for (var MW = arguments.length, wW = new Array(MW), CW = 0; CW < MW; CW++) wW[CW] = arguments[CW];
        return UW(WW = sW(this, RW, [].concat(wW)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), UW(WW, "generateSimpleStrokeDasharray", (function(WW, RW) {
          return "".concat(RW, "px ").concat(WW - RW, "px")
        })), UW(WW, "getStrokeDasharray", (function(MW, wW, CW) {
          var zR = CW.reduce((function(WW, RW) {
            return WW + RW
          }));
          if (!zR) return WW.generateSimpleStrokeDasharray(wW, MW);
          for (var AW = Math.floor(MW / zR), bR = MW % zR, yR = wW - MW, NW = [], eW = 0, BW = 0; eW < CW.length; BW += CW[eW], ++eW)
            if (BW + CW[eW] > bR) {
              NW = [].concat(jR(CW.slice(0, eW)), [bR - BW]);
              break
            } var tR = NW.length % 2 === 0 ? [0, yR] : [yR];
          return [].concat(jR(RW.repeat(CW, AW)), jR(NW), tR).map((function(WW) {
            return "".concat(WW, "px")
          })).join(", ")
        })), UW(WW, "id", (0, JW.D)("recharts-line-")), UW(WW, "pathRef", (function(RW) {
          WW.mainCurve = RW
        })), UW(WW, "handleAnimationEnd", (function() {
          WW.setState({
            isAnimationFinished: !0
          }), WW.props.onAnimationEnd && WW.props.onAnimationEnd()
        })), UW(WW, "handleAnimationStart", (function() {
          WW.setState({
            isAnimationFinished: !1
          }), WW.props.onAnimationStart && WW.props.onAnimationStart()
        })), WW
      }
      return function(WW, RW) {
        if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(RW && RW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), RW && hW(WW, RW)
      }(RW, WW), MW = RW, zR = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var WW = this.getTotalLength();
            this.setState({
              totalLength: WW
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var WW = this.getTotalLength();
            WW !== this.state.totalLength && this.setState({
              totalLength: WW
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var WW = this.mainCurve;
          try {
            return WW && WW.getTotalLength && WW.getTotalLength() || 0
          } catch (RW) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(WW, RW) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var MW = this.props,
            CW = MW.points,
            zR = MW.xAxis,
            AW = MW.yAxis,
            bR = MW.layout,
            yR = MW.children,
            NW = (0, PW.f)(yR, YW.b);
          if (!NW) return null;
          var eW = function(WW, RW) {
              return {
                x: WW.x,
                y: WW.y,
                value: WW.value,
                errorVal: (0, oW.Z)(WW.payload, RW)
              }
            },
            BW = {
              clipPath: WW ? "url(#clipPath-".concat(RW, ")") : null
            };
          return wW.createElement(gR.b, BW, NW.map((function(WW) {
            return wW.cloneElement(WW, {
              key: "bar-".concat(WW.props.dataKey),
              data: CW,
              xAxis: zR,
              yAxis: AW,
              layout: bR,
              dataPointFormatter: eW
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(WW, MW, CW) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var zR = this.props,
            AW = zR.dot,
            bR = zR.points,
            yR = zR.dataKey,
            NW = (0, PW.e)(this.props, !1),
            eW = (0, PW.e)(AW, !0),
            BW = bR.map((function(WW, MW) {
              var wW = XW(XW(XW({
                key: "dot-".concat(MW),
                r: 3
              }, NW), eW), {}, {
                index: MW,
                cx: WW.x,
                cy: WW.y,
                value: WW.value,
                dataKey: yR,
                payload: WW.payload,
                points: bR
              });
              return RW.renderDotItem(AW, wW)
            })),
            tR = {
              clipPath: WW ? "url(#clipPath-".concat(MW ? "" : "dots-").concat(CW, ")") : null
            };
          return wW.createElement(gR.b, rR({
            className: "recharts-line-dots",
            key: "dots"
          }, tR), BW)
        }
      }, {
        key: "renderCurveStatically",
        value: function(WW, RW, MW, CW) {
          var zR = this.props,
            AW = zR.type,
            bR = zR.layout,
            yR = zR.connectNulls,
            NW = (zR.ref, QW(zR, lW)),
            eW = XW(XW(XW({}, (0, PW.e)(NW, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: RW ? "url(#clipPath-".concat(MW, ")") : null,
              points: WW
            }, CW), {}, {
              type: AW,
              layout: bR,
              connectNulls: yR
            });
          return wW.createElement(tR.b, rR({}, eW, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(WW, RW) {
          var MW = this,
            zR = this.props,
            AW = zR.points,
            bR = zR.strokeDasharray,
            yR = zR.isAnimationActive,
            NW = zR.animationBegin,
            eW = zR.animationDuration,
            BW = zR.animationEasing,
            tR = zR.animationId,
            TW = zR.animateNewValues,
            gR = zR.width,
            iR = zR.height,
            YW = this.state,
            PW = YW.prevPoints,
            IW = YW.totalLength;
          return wW.createElement(CW.c, {
            IM: NW,
            duration: eW,
            isActive: yR,
            easing: BW,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(tR),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(wW) {
            var CW = wW.t;
            if (PW) {
              var zR = PW.length / AW.length,
                yR = AW.map((function(WW, RW) {
                  var MW = Math.floor(RW * zR);
                  if (PW[MW]) {
                    var wW = PW[MW],
                      AW = (0, JW.n)(wW.x, WW.x),
                      bR = (0, JW.n)(wW.y, WW.y);
                    return XW(XW({}, WW), {}, {
                      x: AW(CW),
                      y: bR(CW)
                    })
                  }
                  if (TW) {
                    var yR = (0, JW.n)(2 * gR, WW.x),
                      NW = (0, JW.n)(iR / 2, WW.y);
                    return XW(XW({}, WW), {}, {
                      x: yR(CW),
                      y: NW(CW)
                    })
                  }
                  return XW(XW({}, WW), {}, {
                    x: WW.x,
                    y: WW.y
                  })
                }));
              return MW.renderCurveStatically(yR, WW, RW)
            }
            var NW, eW = (0, JW.n)(0, IW)(CW);
            if (bR) {
              var BW = "".concat(bR).split(/[,\s]+/gim).map((function(WW) {
                return parseFloat(WW)
              }));
              NW = MW.getStrokeDasharray(eW, IW, BW)
            } else NW = MW.generateSimpleStrokeDasharray(IW, eW);
            return MW.renderCurveStatically(AW, WW, RW, {
              strokeDasharray: NW
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(WW, RW) {
          var MW = this.props,
            wW = MW.points,
            CW = MW.isAnimationActive,
            zR = this.state,
            AW = zR.prevPoints,
            bR = zR.totalLength;
          return CW && wW && wW.length && (!AW && bR > 0 || !eW()(AW, wW)) ? this.renderCurveWithAnimation(WW, RW) : this.renderCurveStatically(wW, WW, RW)
        }
      }, {
        key: "render",
        value: function() {
          var WW, RW = this.props,
            MW = RW.hide,
            CW = RW.dot,
            zR = RW.points,
            AW = RW.className,
            bR = RW.xAxis,
            NW = RW.yAxis,
            eW = RW.top,
            tR = RW.left,
            TW = RW.width,
            YW = RW.height,
            JW = RW.isAnimationActive,
            IW = RW.id;
          if (MW || !zR || !zR.length) return null;
          var oW = this.state.isAnimationFinished,
            lW = 1 === zR.length,
            FW = (0, BW.c)("recharts-line", AW),
            fW = bR && bR.allowDataOverflow,
            QW = NW && NW.allowDataOverflow,
            rR = fW || QW,
            cR = yR()(IW) ? this.id : IW,
            XW = null !== (WW = (0, PW.e)(CW, !1)) && void 0 !== WW ? WW : {
              r: 3,
              strokeWidth: 2
            },
            jR = XW.r,
            kR = void 0 === jR ? 3 : jR,
            aR = XW.strokeWidth,
            sW = void 0 === aR ? 2 : aR,
            dW = ((0, PW.p)(CW) ? CW : {}).clipDot,
            pW = void 0 === dW || dW,
            hW = 2 * kR + sW;
          return wW.createElement(gR.b, {
            className: FW
          }, fW || QW ? wW.createElement("defs", null, wW.createElement("clipPath", {
            id: "clipPath-".concat(cR)
          }, wW.createElement("rect", {
            x: fW ? tR : tR - TW / 2,
            y: QW ? eW : eW - YW / 2,
            width: fW ? TW : 2 * TW,
            height: QW ? YW : 2 * YW
          })), !pW && wW.createElement("clipPath", {
            id: "clipPath-dots-".concat(cR)
          }, wW.createElement("rect", {
            x: tR - hW / 2,
            y: eW - hW / 2,
            width: TW + hW,
            height: YW + hW
          }))) : null, !lW && this.renderCurve(rR, cR), this.renderErrorBar(rR, cR), (lW || CW) && this.renderDots(rR, pW, cR), (!JW || oW) && iR.b.renderCallByParent(this.props, zR))
        }
      }], bR = [{
        key: "getDerivedStateFromProps",
        value: function(WW, RW) {
          return WW.animationId !== RW.prevAnimationId ? {
            prevAnimationId: WW.animationId,
            curPoints: WW.points,
            prevPoints: RW.curPoints
          } : WW.points !== RW.curPoints ? {
            curPoints: WW.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(WW, RW) {
          for (var MW = WW.length % 2 !== 0 ? [].concat(jR(WW), [0]) : WW, wW = [], CW = 0; CW < RW; ++CW) wW = [].concat(jR(wW), jR(MW));
          return wW
        }
      }, {
        key: "renderDotItem",
        value: function(WW, RW) {
          var MW;
          if (wW.isValidElement(WW)) MW = wW.cloneElement(WW, RW);
          else if (AW()(WW)) MW = WW(RW);
          else {
            var CW = RW.key,
              zR = QW(RW, FW),
              bR = (0, BW.c)("recharts-line-dot", "boolean" !== typeof WW ? WW.className : "");
            MW = wW.createElement(TW.c, rR({
              key: CW
            }, zR, {
              className: bR
            }))
          }
          return MW
        }
      }], zR && aR(MW.prototype, zR), bR && aR(MW, bR), Object.defineProperty(MW, "prototype", {
        writable: !1
      }), MW;
      var MW, zR, bR
    }(wW.PureComponent);
    UW(VW, "displayName", "Line"), UW(VW, "defaultProps", {
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
      isAnimationActive: !IW.b.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), UW(VW, "getComposedData", (function(WW) {
      var RW = WW.props,
        MW = WW.xAxis,
        wW = WW.yAxis,
        CW = WW.xAxisTicks,
        zR = WW.yAxisTicks,
        AW = WW.dataKey,
        bR = WW.bandSize,
        NW = WW.displayedData,
        eW = WW.offset,
        BW = RW.layout;
      return XW({
        points: NW.map((function(WW, RW) {
          var NW = (0, oW.Z)(WW, AW);
          return "horizontal" === BW ? {
            x: (0, oW.y)({
              axis: MW,
              ticks: CW,
              bandSize: bR,
              entry: WW,
              index: RW
            }),
            y: yR()(NW) ? null : wW.scale(NW),
            value: NW,
            payload: WW
          } : {
            x: yR()(NW) ? null : MW.scale(NW),
            y: (0, oW.y)({
              axis: wW,
              ticks: zR,
              bandSize: bR,
              entry: WW,
              index: RW
            }),
            value: NW,
            payload: WW
          }
        })),
        layout: BW
      }, eW)
    }))
  },
  5302: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => sW
    });
    var wW = MW(75),
      CW = MW(4216),
      zR = MW.n(CW),
      AW = MW(5309),
      bR = MW.n(AW),
      yR = MW(4017),
      NW = MW(4938),
      eW = MW(5205),
      BW = MW(5221),
      tR = MW(4103),
      TW = MW(5229),
      gR = MW(4376),
      iR = MW(4381),
      YW = MW(5323);

    function JW(WW) {
      return JW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, JW(WW)
    }

    function PW(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, cR(wW.key), wW)
      }
    }

    function IW(WW, RW, MW) {
      return RW = lW(RW),
        function(WW, RW) {
          if (RW && ("object" === JW(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, oW() ? Reflect.construct(RW, MW || [], lW(WW).constructor) : RW.apply(WW, MW))
    }

    function oW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (oW = function() {
        return !!WW
      })()
    }

    function lW(WW) {
      return lW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, lW(WW)
    }

    function FW(WW, RW) {
      return FW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, FW(WW, RW)
    }

    function fW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function QW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? fW(Object(MW), !0).forEach((function(RW) {
          rR(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : fW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function rR(WW, RW, MW) {
      return (RW = cR(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function cR(WW) {
      var RW = function(WW, RW) {
        if ("object" != JW(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != JW(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == JW(RW) ? RW : RW + ""
    }

    function XW(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        var MW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != MW) {
          var wW, CW, zR, AW, bR = [],
            yR = !0,
            NW = !1;
          try {
            if (zR = (MW = MW.call(WW)).next, 0 === RW) {
              if (Object(MW) !== MW) return;
              yR = !1
            } else
              for (; !(yR = (wW = zR.call(MW)).done) && (bR.push(wW.value), bR.length !== RW); yR = !0);
          } catch (WW) {
            NW = !0, CW = WW
          } finally {
            try {
              if (!yR && null != MW.return && (AW = MW.return(), Object(AW) !== AW)) return
            } finally {
              if (NW) throw CW
            }
          }
          return bR
        }
      }(WW, RW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return jR(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return jR(WW, RW)
      }(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function jR(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function kR() {
      return kR = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, kR.apply(this, arguments)
    }

    function aR(WW) {
      var RW = WW.x,
        MW = WW.y,
        CW = WW.segment,
        AW = WW.xAxisId,
        JW = WW.yAxisId,
        PW = WW.shape,
        IW = WW.className,
        oW = WW.alwaysShow,
        lW = (0, YW.o)(),
        FW = (0, YW.v)(AW),
        fW = (0, YW.x)(JW),
        rR = (0, YW.u)();
      if (!lW || !rR) return null;
      (0, gR.d)(void 0 === oW, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var cR = function(WW, RW, MW, wW, CW, zR, AW, yR, NW) {
        var eW = CW.x,
          tR = CW.y,
          TW = CW.width,
          gR = CW.height;
        if (MW) {
          var iR = NW.y,
            YW = WW.y.apply(iR, {
              position: zR
            });
          if ((0, BW.b)(NW, "discard") && !WW.y.isInRange(YW)) return null;
          var JW = [{
            x: eW + TW,
            y: YW
          }, {
            x: eW,
            y: YW
          }];
          return "left" === yR ? JW.reverse() : JW
        }
        if (RW) {
          var PW = NW.x,
            IW = WW.x.apply(PW, {
              position: zR
            });
          if ((0, BW.b)(NW, "discard") && !WW.x.isInRange(IW)) return null;
          var oW = [{
            x: IW,
            y: tR + gR
          }, {
            x: IW,
            y: tR
          }];
          return "top" === AW ? oW.reverse() : oW
        }
        if (wW) {
          var lW = NW.segment.map((function(RW) {
            return WW.apply(RW, {
              position: zR
            })
          }));
          return (0, BW.b)(NW, "discard") && bR()(lW, (function(RW) {
            return !WW.isInRange(RW)
          })) ? null : lW
        }
        return null
      }((0, TW.b)({
        x: FW.scale,
        y: fW.scale
      }), (0, tR.r)(RW), (0, tR.r)(MW), CW && 2 === CW.length, rR, WW.position, FW.orientation, fW.orientation, WW);
      if (!cR) return null;
      var jR = XW(cR, 2),
        aR = jR[0],
        sW = aR.x,
        dW = aR.y,
        pW = jR[1],
        hW = pW.x,
        UW = pW.y,
        EW = QW(QW({
          clipPath: (0, BW.b)(WW, "hidden") ? "url(#".concat(lW, ")") : void 0
        }, (0, iR.e)(WW, !0)), {}, {
          x1: sW,
          y1: dW,
          x2: hW,
          y2: UW
        });
      return wW.createElement(NW.b, {
        className: (0, yR.c)("recharts-reference-line", IW)
      }, function(WW, RW) {
        return wW.isValidElement(WW) ? wW.cloneElement(WW, RW) : zR()(WW) ? WW(RW) : wW.createElement("line", kR({}, RW, {
          className: "recharts-reference-line-line"
        }))
      }(PW, EW), eW.d.renderCallByParent(WW, (0, TW.h)({
        x1: sW,
        y1: dW,
        x2: hW,
        y2: UW
      })))
    }
    var sW = function(WW) {
      function RW() {
        return function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, RW), IW(this, RW, arguments)
      }
      return function(WW, RW) {
        if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(RW && RW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), RW && FW(WW, RW)
      }(RW, WW), MW = RW, (CW = [{
        key: "render",
        value: function() {
          return wW.createElement(aR, this.props)
        }
      }]) && PW(MW.prototype, CW), zR && PW(MW, zR), Object.defineProperty(MW, "prototype", {
        writable: !1
      }), MW;
      var MW, CW, zR
    }(wW.Component);
    rR(sW, "displayName", "ReferenceLine"), rR(sW, "defaultProps", {
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
  5373: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => PW
    });
    var wW = MW(75),
      CW = MW(4017),
      zR = MW(5323),
      AW = MW(5380),
      bR = MW(5115);

    function yR(WW) {
      return yR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, yR(WW)
    }

    function NW(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, iR(wW.key), wW)
      }
    }

    function eW(WW, RW, MW) {
      return RW = tR(RW),
        function(WW, RW) {
          if (RW && ("object" === yR(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, BW() ? Reflect.construct(RW, MW || [], tR(WW).constructor) : RW.apply(WW, MW))
    }

    function BW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (BW = function() {
        return !!WW
      })()
    }

    function tR(WW) {
      return tR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, tR(WW)
    }

    function TW(WW, RW) {
      return TW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, TW(WW, RW)
    }

    function gR(WW, RW, MW) {
      return (RW = iR(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function iR(WW) {
      var RW = function(WW, RW) {
        if ("object" != yR(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != yR(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == yR(RW) ? RW : RW + ""
    }

    function YW() {
      return YW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, YW.apply(this, arguments)
    }

    function JW(WW) {
      var RW = WW.xAxisId,
        MW = (0, zR.k)(),
        yR = (0, zR.j)(),
        NW = (0, zR.v)(RW);
      return null == NW ? null : wW.createElement(AW.e, YW({}, NW, {
        className: (0, CW.c)("recharts-".concat(NW.axisType, " ").concat(NW.axisType), NW.className),
        viewBox: {
          x: 0,
          y: 0,
          width: MW,
          height: yR
        },
        ticksGenerator: function(WW) {
          return (0, bR.Q)(WW, !0)
        }
      }))
    }
    var PW = function(WW) {
      function RW() {
        return function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, RW), eW(this, RW, arguments)
      }
      return function(WW, RW) {
        if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(RW && RW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), RW && TW(WW, RW)
      }(RW, WW), MW = RW, (CW = [{
        key: "render",
        value: function() {
          return wW.createElement(JW, this.props)
        }
      }]) && NW(MW.prototype, CW), zR && NW(MW, zR), Object.defineProperty(MW, "prototype", {
        writable: !1
      }), MW;
      var MW, CW, zR
    }(wW.Component);
    gR(PW, "displayName", "XAxis"), gR(PW, "defaultProps", {
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
  5396: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => PW
    });
    var wW = MW(75),
      CW = MW(4017),
      zR = MW(5323),
      AW = MW(5380),
      bR = MW(5115);

    function yR(WW) {
      return yR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, yR(WW)
    }

    function NW(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, iR(wW.key), wW)
      }
    }

    function eW(WW, RW, MW) {
      return RW = tR(RW),
        function(WW, RW) {
          if (RW && ("object" === yR(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, BW() ? Reflect.construct(RW, MW || [], tR(WW).constructor) : RW.apply(WW, MW))
    }

    function BW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (BW = function() {
        return !!WW
      })()
    }

    function tR(WW) {
      return tR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, tR(WW)
    }

    function TW(WW, RW) {
      return TW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, TW(WW, RW)
    }

    function gR(WW, RW, MW) {
      return (RW = iR(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function iR(WW) {
      var RW = function(WW, RW) {
        if ("object" != yR(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != yR(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == yR(RW) ? RW : RW + ""
    }

    function YW() {
      return YW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, YW.apply(this, arguments)
    }
    var JW = function(WW) {
        var RW = WW.yAxisId,
          MW = (0, zR.k)(),
          yR = (0, zR.j)(),
          NW = (0, zR.x)(RW);
        return null == NW ? null : wW.createElement(AW.e, YW({}, NW, {
          className: (0, CW.c)("recharts-".concat(NW.axisType, " ").concat(NW.axisType), NW.className),
          viewBox: {
            x: 0,
            y: 0,
            width: MW,
            height: yR
          },
          ticksGenerator: function(WW) {
            return (0, bR.Q)(WW, !0)
          }
        }))
      },
      PW = function(WW) {
        function RW() {
          return function(WW, RW) {
            if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
          }(this, RW), eW(this, RW, arguments)
        }
        return function(WW, RW) {
          if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
          WW.prototype = Object.create(RW && RW.prototype, {
            constructor: {
              value: WW,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(WW, "prototype", {
            writable: !1
          }), RW && TW(WW, RW)
        }(RW, WW), MW = RW, (CW = [{
          key: "render",
          value: function() {
            return wW.createElement(JW, this.props)
          }
        }]) && NW(MW.prototype, CW), zR && NW(MW, zR), Object.defineProperty(MW, "prototype", {
          writable: !1
        }), MW;
        var MW, CW, zR
      }(wW.Component);
    gR(PW, "displayName", "YAxis"), gR(PW, "defaultProps", {
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
  5389: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => iR
    });
    var wW = MW(4216),
      CW = MW.n(wW),
      zR = MW(4103),
      AW = MW(5106),
      bR = MW(4945),
      yR = MW(5229);

    function NW(WW, RW, MW) {
      if (RW < 1) return [];
      if (1 === RW && void 0 === MW) return WW;
      for (var wW = [], CW = 0; CW < WW.length; CW += RW) {
        if (void 0 !== MW && !0 !== MW(WW[CW])) return;
        wW.push(WW[CW])
      }
      return wW
    }

    function eW(WW, RW, MW, wW, CW) {
      if (WW * RW < WW * wW || WW * RW > WW * CW) return !1;
      var zR = MW();
      return WW * (RW - WW * zR / 2 - wW) >= 0 && WW * (RW + WW * zR / 2 - CW) <= 0
    }

    function BW(WW) {
      return BW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, BW(WW)
    }

    function tR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function TW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? tR(Object(MW), !0).forEach((function(RW) {
          gR(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : tR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function gR(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != BW(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != BW(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == BW(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function iR(WW, RW, MW) {
      var wW = WW.WR,
        BW = WW.ticks,
        tR = WW.viewBox,
        gR = WW.minTickGap,
        iR = WW.orientation,
        YW = WW.interval,
        JW = WW.tickFormatter,
        PW = WW.unit,
        IW = WW.angle;
      if (!BW || !BW.length || !wW) return [];
      if ((0, zR.u)(YW) || bR.b.isSsr) return function(WW, RW) {
        return NW(WW, RW + 1)
      }(BW, "number" === typeof YW && (0, zR.u)(YW) ? YW : 0);
      var oW = [],
        lW = "top" === iR || "bottom" === iR ? "width" : "height",
        FW = PW && "width" === lW ? (0, AW.c)(PW, {
          fontSize: RW,
          letterSpacing: MW
        }) : {
          width: 0,
          height: 0
        },
        fW = function(WW, wW) {
          var zR = CW()(JW) ? JW(WW.value, wW) : WW.value;
          return "width" === lW ? function(WW, RW, MW) {
            var wW = {
              width: WW.width + RW.width,
              height: WW.height + RW.height
            };
            return (0, yR.d)(wW, MW)
          }((0, AW.c)(zR, {
            fontSize: RW,
            letterSpacing: MW
          }), FW, IW) : (0, AW.c)(zR, {
            fontSize: RW,
            letterSpacing: MW
          })[lW]
        },
        QW = BW.length >= 2 ? (0, zR.B)(BW[1].coordinate - BW[0].coordinate) : 1,
        rR = function(WW, RW, MW) {
          var wW = "width" === MW,
            CW = WW.x,
            zR = WW.y,
            AW = WW.width,
            bR = WW.height;
          return 1 === RW ? {
            start: wW ? CW : zR,
            end: wW ? CW + AW : zR + bR
          } : {
            start: wW ? CW + AW : zR + bR,
            end: wW ? CW : zR
          }
        }(tR, QW, lW);
      return "equidistantPreserveStart" === YW ? function(WW, RW, MW, wW, CW) {
        for (var zR, AW = (wW || []).slice(), bR = RW.start, yR = RW.end, BW = 0, tR = 1, TW = bR, gR = function() {
            var RW = null === wW || void 0 === wW ? void 0 : wW[BW];
            if (void 0 === RW) return {
              v: NW(wW, tR)
            };
            var zR, AW = BW,
              gR = function() {
                return void 0 === zR && (zR = MW(RW, AW)), zR
              },
              iR = RW.coordinate,
              YW = 0 === BW || eW(WW, iR, gR, TW, yR);
            YW || (BW = 0, TW = bR, tR += 1), YW && (TW = iR + WW * (gR() / 2 + CW), BW += tR)
          }; tR <= AW.length;)
          if (zR = gR()) return zR.v;
        return []
      }(QW, rR, fW, BW, gR) : (oW = "preserveStart" === YW || "preserveStartEnd" === YW ? function(WW, RW, MW, wW, CW, zR) {
        var AW = (wW || []).slice(),
          bR = AW.length,
          yR = RW.start,
          NW = RW.end;
        if (zR) {
          var BW = wW[bR - 1],
            tR = MW(BW, bR - 1),
            gR = WW * (BW.coordinate + WW * tR / 2 - NW);
          AW[bR - 1] = BW = TW(TW({}, BW), {}, {
            tickCoord: gR > 0 ? BW.coordinate - gR * WW : BW.coordinate
          }), eW(WW, BW.tickCoord, (function() {
            return tR
          }), yR, NW) && (NW = BW.tickCoord - WW * (tR / 2 + CW), AW[bR - 1] = TW(TW({}, BW), {}, {
            isShow: !0
          }))
        }
        for (var iR = zR ? bR - 1 : bR, YW = function(RW) {
            var wW, zR = AW[RW],
              bR = function() {
                return void 0 === wW && (wW = MW(zR, RW)), wW
              };
            if (0 === RW) {
              var BW = WW * (zR.coordinate - WW * bR() / 2 - yR);
              AW[RW] = zR = TW(TW({}, zR), {}, {
                tickCoord: BW < 0 ? zR.coordinate - BW * WW : zR.coordinate
              })
            } else AW[RW] = zR = TW(TW({}, zR), {}, {
              tickCoord: zR.coordinate
            });
            eW(WW, zR.tickCoord, bR, yR, NW) && (yR = zR.tickCoord + WW * (bR() / 2 + CW), AW[RW] = TW(TW({}, zR), {}, {
              isShow: !0
            }))
          }, JW = 0; JW < iR; JW++) YW(JW);
        return AW
      }(QW, rR, fW, BW, gR, "preserveStartEnd" === YW) : function(WW, RW, MW, wW, CW) {
        for (var zR = (wW || []).slice(), AW = zR.length, bR = RW.start, yR = RW.end, NW = function(RW) {
            var wW, NW = zR[RW],
              BW = function() {
                return void 0 === wW && (wW = MW(NW, RW)), wW
              };
            if (RW === AW - 1) {
              var tR = WW * (NW.coordinate + WW * BW() / 2 - yR);
              zR[RW] = NW = TW(TW({}, NW), {}, {
                tickCoord: tR > 0 ? NW.coordinate - tR * WW : NW.coordinate
              })
            } else zR[RW] = NW = TW(TW({}, NW), {}, {
              tickCoord: NW.coordinate
            });
            eW(WW, NW.tickCoord, BW, bR, yR) && (yR = NW.tickCoord - WW * (BW() / 2 + CW), zR[RW] = TW(TW({}, NW), {}, {
              isShow: !0
            }))
          }, BW = AW - 1; BW >= 0; BW--) NW(BW);
        return zR
      }(QW, rR, fW, BW, gR), oW.filter((function(WW) {
        return WW.isShow
      })))
    }
  },
  5405: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => yR
    });
    var wW = MW(4414),
      CW = MW(5250),
      zR = MW(5373),
      AW = MW(5396),
      bR = MW(5229),
      yR = (0, wW.c)({
        chartName: "BarChart",
        GraphicalChild: CW.c,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: zR.e
        }, {
          axisType: "yAxis",
          AxisComp: AW.e
        }],
        formatAxisMap: bR.c
      })
  },
  4412: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CR
    });
    var wW = MW(4414),
      CW = MW(5362),
      zR = MW(5250),
      AW = MW(5369),
      bR = MW(75),
      yR = MW(5101),
      NW = MW(4373),
      eW = MW.n(NW),
      BW = MW(5175),
      tR = MW.n(BW),
      TW = MW(4216),
      gR = MW.n(TW),
      iR = MW(4017),
      YW = MW(4938),
      JW = MW(5266),
      PW = MW(4381),
      IW = MW(4945);

    function oW(WW) {
      return oW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, oW(WW)
    }

    function lW(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, XW(wW.key), wW)
      }
    }

    function FW(WW, RW, MW) {
      return RW = QW(RW),
        function(WW, RW) {
          if (RW && ("object" === oW(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, fW() ? Reflect.construct(RW, MW || [], QW(WW).constructor) : RW.apply(WW, MW))
    }

    function fW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (fW = function() {
        return !!WW
      })()
    }

    function QW(WW) {
      return QW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, QW(WW)
    }

    function rR(WW, RW) {
      return rR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, rR(WW, RW)
    }

    function cR(WW, RW, MW) {
      return (RW = XW(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function XW(WW) {
      var RW = function(WW, RW) {
        if ("object" != oW(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != oW(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == oW(RW) ? RW : RW + ""
    }
    var jR = function(WW) {
      function RW() {
        return function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, RW), FW(this, RW, arguments)
      }
      return function(WW, RW) {
        if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(RW && RW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), RW && rR(WW, RW)
      }(RW, WW), MW = RW, (wW = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && lW(MW.prototype, wW), CW && lW(MW, CW), Object.defineProperty(MW, "prototype", {
        writable: !1
      }), MW;
      var MW, wW, CW
    }(bR.Component);
    cR(jR, "displayName", "ZAxis"), cR(jR, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var kR = MW(5354),
      aR = MW(5191),
      sW = MW(5259),
      dW = MW(4103),
      pW = MW(5115),
      hW = MW(4407),
      UW = MW(5022),
      EW = MW(5281),
      VW = ["option", "isActive"];

    function mR() {
      return mR = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, mR.apply(this, arguments)
    }

    function xR(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function vR(WW) {
      var RW = WW.option,
        MW = WW.isActive,
        wW = xR(WW, VW);
      return "string" === typeof RW ? bR.createElement(EW.c, mR({
        option: bR.createElement(UW.d, mR({
          type: RW
        }, wW)),
        isActive: MW,
        shapeType: "symbols"
      }, wW)) : bR.createElement(EW.c, mR({
        option: RW,
        isActive: MW,
        shapeType: "symbols"
      }, wW))
    }

    function KW(WW) {
      return KW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, KW(WW)
    }

    function uW() {
      return uW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, uW.apply(this, arguments)
    }

    function OW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function nW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? OW(Object(MW), !0).forEach((function(RW) {
          ZW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : OW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function GW(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, SW(wW.key), wW)
      }
    }

    function LW(WW, RW, MW) {
      return RW = DW(RW),
        function(WW, RW) {
          if (RW && ("object" === KW(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, HW() ? Reflect.construct(RW, MW || [], DW(WW).constructor) : RW.apply(WW, MW))
    }

    function HW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (HW = function() {
        return !!WW
      })()
    }

    function DW(WW) {
      return DW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, DW(WW)
    }

    function qR(WW, RW) {
      return qR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, qR(WW, RW)
    }

    function ZW(WW, RW, MW) {
      return (RW = SW(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function SW(WW) {
      var RW = function(WW, RW) {
        if ("object" != KW(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != KW(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == KW(RW) ? RW : RW + ""
    }
    var WR = function(WW) {
      function RW() {
        var WW;
        ! function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, RW);
        for (var MW = arguments.length, wW = new Array(MW), CW = 0; CW < MW; CW++) wW[CW] = arguments[CW];
        return ZW(WW = LW(this, RW, [].concat(wW)), "state", {
          isAnimationFinished: !1
        }), ZW(WW, "handleAnimationEnd", (function() {
          WW.setState({
            isAnimationFinished: !0
          })
        })), ZW(WW, "handleAnimationStart", (function() {
          WW.setState({
            isAnimationFinished: !1
          })
        })), ZW(WW, "id", (0, dW.D)("recharts-scatter-")), WW
      }
      return function(WW, RW) {
        if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(RW && RW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), RW && qR(WW, RW)
      }(RW, WW), MW = RW, wW = [{
        key: "renderSymbolsStatically",
        value: function(WW) {
          var RW = this,
            MW = this.props,
            wW = MW.shape,
            CW = MW.activeShape,
            zR = MW.activeIndex,
            AW = (0, PW.e)(this.props, !1);
          return WW.map((function(WW, MW) {
            var yR = zR === MW,
              NW = yR ? CW : wW,
              eW = nW(nW({}, AW), WW);
            return bR.createElement(YW.b, uW({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === WW || void 0 === WW ? void 0 : WW.cx, "-").concat(null === WW || void 0 === WW ? void 0 : WW.cy, "-").concat(null === WW || void 0 === WW ? void 0 : WW.size, "-").concat(MW)
            }, (0, hW.q)(RW.props, WW, MW), {
              role: "img"
            }), bR.createElement(vR, uW({
              option: NW,
              isActive: yR,
              key: "symbol-".concat(MW)
            }, eW)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var WW = this,
            RW = this.props,
            MW = RW.points,
            wW = RW.isAnimationActive,
            CW = RW.animationBegin,
            zR = RW.animationDuration,
            AW = RW.animationEasing,
            NW = RW.animationId,
            eW = this.state.prevPoints;
          return bR.createElement(yR.c, {
            IM: CW,
            duration: zR,
            isActive: wW,
            easing: AW,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(NW),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(RW) {
            var wW = RW.t,
              CW = MW.map((function(WW, RW) {
                var MW = eW && eW[RW];
                if (MW) {
                  var CW = (0, dW.n)(MW.cx, WW.cx),
                    zR = (0, dW.n)(MW.cy, WW.cy),
                    AW = (0, dW.n)(MW.size, WW.size);
                  return nW(nW({}, WW), {}, {
                    cx: CW(wW),
                    cy: zR(wW),
                    size: AW(wW)
                  })
                }
                var bR = (0, dW.n)(0, WW.size);
                return nW(nW({}, WW), {}, {
                  size: bR(wW)
                })
              }));
            return bR.createElement(YW.b, null, WW.renderSymbolsStatically(CW))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var WW = this.props,
            RW = WW.points,
            MW = WW.isAnimationActive,
            wW = this.state.prevPoints;
          return !(MW && RW && RW.length) || wW && tR()(wW, RW) ? this.renderSymbolsStatically(RW) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var WW = this.props,
            RW = WW.points,
            MW = WW.xAxis,
            wW = WW.yAxis,
            CW = WW.children,
            zR = (0, PW.f)(CW, aR.b);
          return zR ? zR.map((function(WW, CW) {
            var zR = WW.props,
              AW = zR.direction,
              yR = zR.dataKey;
            return bR.cloneElement(WW, {
              key: "".concat(AW, "-").concat(yR, "-").concat(RW[CW]),
              data: RW,
              xAxis: MW,
              yAxis: wW,
              layout: "x" === AW ? "vertical" : "horizontal",
              dataPointFormatter: function(WW, RW) {
                return {
                  x: WW.cx,
                  y: WW.cy,
                  value: "x" === AW ? +WW.node.x : +WW.node.y,
                  errorVal: (0, pW.Z)(WW, RW)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var WW, RW, MW = this.props,
            wW = MW.points,
            CW = MW.line,
            zR = MW.lineType,
            AW = MW.lineJointType,
            yR = (0, PW.e)(this.props, !1),
            NW = (0, PW.e)(CW, !1);
          if ("joint" === zR) WW = wW.map((function(WW) {
            return {
              x: WW.cx,
              y: WW.cy
            }
          }));
          else if ("fitting" === zR) {
            var eW = (0, dW.j)(wW),
              BW = eW.xmin,
              tR = eW.xmax,
              TW = eW.a,
              iR = eW.b,
              JW = function(WW) {
                return TW * WW + iR
              };
            WW = [{
              x: BW,
              y: JW(BW)
            }, {
              x: tR,
              y: JW(tR)
            }]
          }
          var IW = nW(nW(nW({}, yR), {}, {
            fill: "none",
            stroke: yR && yR.fill
          }, NW), {}, {
            points: WW
          });
          return RW = bR.isValidElement(CW) ? bR.cloneElement(CW, IW) : gR()(CW) ? CW(IW) : bR.createElement(kR.b, uW({}, IW, {
            type: AW
          })), bR.createElement(YW.b, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, RW)
        }
      }, {
        key: "render",
        value: function() {
          var WW = this.props,
            RW = WW.hide,
            MW = WW.points,
            wW = WW.line,
            CW = WW.className,
            zR = WW.xAxis,
            AW = WW.yAxis,
            yR = WW.left,
            NW = WW.top,
            BW = WW.width,
            tR = WW.height,
            TW = WW.id,
            gR = WW.isAnimationActive;
          if (RW || !MW || !MW.length) return null;
          var PW = this.state.isAnimationFinished,
            IW = (0, iR.c)("recharts-scatter", CW),
            oW = zR && zR.allowDataOverflow,
            lW = AW && AW.allowDataOverflow,
            FW = oW || lW,
            fW = eW()(TW) ? this.id : TW;
          return bR.createElement(YW.b, {
            className: IW,
            clipPath: FW ? "url(#clipPath-".concat(fW, ")") : null
          }, oW || lW ? bR.createElement("defs", null, bR.createElement("clipPath", {
            id: "clipPath-".concat(fW)
          }, bR.createElement("rect", {
            x: oW ? yR : yR - BW / 2,
            y: lW ? NW : NW - tR / 2,
            width: oW ? BW : 2 * BW,
            height: lW ? tR : 2 * tR
          }))) : null, wW && this.renderLine(), this.renderErrorBar(), bR.createElement(YW.b, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!gR || PW) && JW.b.renderCallByParent(this.props, MW))
        }
      }], CW = [{
        key: "getDerivedStateFromProps",
        value: function(WW, RW) {
          return WW.animationId !== RW.prevAnimationId ? {
            prevAnimationId: WW.animationId,
            curPoints: WW.points,
            prevPoints: RW.curPoints
          } : WW.points !== RW.curPoints ? {
            curPoints: WW.points
          } : null
        }
      }], wW && GW(MW.prototype, wW), CW && GW(MW, CW), Object.defineProperty(MW, "prototype", {
        writable: !1
      }), MW;
      var MW, wW, CW
    }(bR.PureComponent);
    ZW(WR, "displayName", "Scatter"), ZW(WR, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !IW.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), ZW(WR, "getComposedData", (function(WW) {
      var RW = WW.xAxis,
        MW = WW.yAxis,
        wW = WW.zAxis,
        CW = WW.item,
        zR = WW.displayedData,
        AW = WW.xAxisTicks,
        bR = WW.yAxisTicks,
        yR = WW.offset,
        NW = CW.props.tooltipType,
        BW = (0, PW.f)(CW.props.children, sW.c),
        tR = eW()(RW.dataKey) ? CW.props.dataKey : RW.dataKey,
        TW = eW()(MW.dataKey) ? CW.props.dataKey : MW.dataKey,
        gR = wW && wW.dataKey,
        iR = wW ? wW.range : jR.defaultProps.range,
        YW = iR && iR[0],
        JW = RW.scale.bandwidth ? RW.scale.bandwidth() : 0,
        IW = MW.scale.bandwidth ? MW.scale.bandwidth() : 0,
        oW = zR.map((function(WW, zR) {
          var yR = (0, pW.Z)(WW, tR),
            iR = (0, pW.Z)(WW, TW),
            PW = !eW()(gR) && (0, pW.Z)(WW, gR) || "-",
            oW = [{
              name: eW()(RW.dataKey) ? CW.props.name : RW.name || RW.dataKey,
              unit: RW.unit || "",
              value: yR,
              payload: WW,
              dataKey: tR,
              type: NW
            }, {
              name: eW()(MW.dataKey) ? CW.props.name : MW.name || MW.dataKey,
              unit: MW.unit || "",
              value: iR,
              payload: WW,
              dataKey: TW,
              type: NW
            }];
          "-" !== PW && oW.push({
            name: wW.name || wW.dataKey,
            unit: wW.unit || "",
            value: PW,
            payload: WW,
            dataKey: gR,
            type: NW
          });
          var lW = (0, pW.y)({
              axis: RW,
              ticks: AW,
              bandSize: JW,
              entry: WW,
              index: zR,
              dataKey: tR
            }),
            FW = (0, pW.y)({
              axis: MW,
              ticks: bR,
              bandSize: IW,
              entry: WW,
              index: zR,
              dataKey: TW
            }),
            fW = "-" !== PW ? wW.scale(PW) : YW,
            QW = Math.sqrt(Math.max(fW, 0) / Math.PI);
          return nW(nW({}, WW), {}, {
            cx: lW,
            cy: FW,
            x: lW - QW,
            y: FW - QW,
            xAxis: RW,
            yAxis: MW,
            zAxis: wW,
            width: 2 * QW,
            height: 2 * QW,
            size: fW,
            node: {
              x: yR,
              y: iR,
              z: PW
            },
            tooltipPayload: oW,
            tooltipPosition: {
              x: lW,
              y: FW
            },
            payload: WW
          }, BW && BW[zR] && BW[zR].props)
        }));
      return nW({
        points: oW
      }, yR)
    }));
    var RR = MW(5373),
      MR = MW(5396),
      wR = MW(5229),
      CR = (0, wW.c)({
        chartName: "ComposedChart",
        GraphicalChild: [AW.b, CW.b, zR.c, WR],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: RR.e
        }, {
          axisType: "yAxis",
          AxisComp: MR.e
        }, {
          axisType: "zAxis",
          AxisComp: jR
        }],
        formatAxisMap: wR.c
      })
  },
  4414: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => mw
    });
    var wW = MW(75),
      CW = MW(4373),
      zR = MW.n(CW),
      AW = MW(4216),
      bR = MW.n(AW),
      yR = MW(4423),
      NW = MW.n(yR),
      eW = MW(4133),
      BW = MW.n(eW),
      tR = MW(4470),
      TW = MW.n(tR),
      gR = MW(4019),
      iR = MW.n(gR),
      YW = MW(4017),
      JW = MW(4925),
      PW = MW(4929),
      IW = MW(4938),
      oW = MW(4940),
      lW = MW(5016),
      FW = MW(5091),
      fW = MW(5096),
      QW = MW(4381),
      rR = MW(5119),
      cR = MW(5103),
      XW = MW(5115),
      jR = MW(4103);

    function kR(WW) {
      return kR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, kR(WW)
    }

    function aR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function sW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? aR(Object(MW), !0).forEach((function(RW) {
          dW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : aR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function dW(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != kR(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != kR(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == kR(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }
    var pW = ["Webkit", "Moz", "O", "ms"];

    function hW(WW) {
      return hW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, hW(WW)
    }

    function UW() {
      return UW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, UW.apply(this, arguments)
    }

    function EW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function VW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? EW(Object(MW), !0).forEach((function(RW) {
          OW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : EW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function mR(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, nW(wW.key), wW)
      }
    }

    function xR(WW, RW, MW) {
      return RW = KW(RW),
        function(WW, RW) {
          if (RW && ("object" === hW(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, vR() ? Reflect.construct(RW, MW || [], KW(WW).constructor) : RW.apply(WW, MW))
    }

    function vR() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (vR = function() {
        return !!WW
      })()
    }

    function KW(WW) {
      return KW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, KW(WW)
    }

    function uW(WW, RW) {
      return uW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, uW(WW, RW)
    }

    function OW(WW, RW, MW) {
      return (RW = nW(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function nW(WW) {
      var RW = function(WW, RW) {
        if ("object" != hW(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != hW(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == hW(RW) ? RW : RW + ""
    }
    var GW = function(WW) {
        return WW.changedTouches && !!WW.changedTouches.length
      },
      LW = function(WW) {
        function RW(WW) {
          var MW;
          return function(WW, RW) {
            if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
          }(this, RW), OW(MW = xR(this, RW, [WW]), "handleDrag", (function(WW) {
            MW.leaveTimer && (clearTimeout(MW.leaveTimer), MW.leaveTimer = null), MW.state.isTravellerMoving ? MW.handleTravellerMove(WW) : MW.state.isSlideMoving && MW.handleSlideDrag(WW)
          })), OW(MW, "handleTouchMove", (function(WW) {
            null != WW.changedTouches && WW.changedTouches.length > 0 && MW.handleDrag(WW.changedTouches[0])
          })), OW(MW, "handleDragEnd", (function() {
            MW.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var WW = MW.props,
                RW = WW.endIndex,
                wW = WW.onDragEnd,
                CW = WW.startIndex;
              null === wW || void 0 === wW || wW({
                endIndex: RW,
                startIndex: CW
              })
            })), MW.detachDragEndListener()
          })), OW(MW, "handleLeaveWrapper", (function() {
            (MW.state.isTravellerMoving || MW.state.isSlideMoving) && (MW.leaveTimer = window.setTimeout(MW.handleDragEnd, MW.props.leaveTimeOut))
          })), OW(MW, "handleEnterSlideOrTraveller", (function() {
            MW.setState({
              isTextActive: !0
            })
          })), OW(MW, "handleLeaveSlideOrTraveller", (function() {
            MW.setState({
              isTextActive: !1
            })
          })), OW(MW, "handleSlideDragStart", (function(WW) {
            var RW = GW(WW) ? WW.changedTouches[0] : WW;
            MW.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: RW.pageX
            }), MW.attachDragEndListener()
          })), MW.travellerDragStartHandlers = {
            startX: MW.handleTravellerDragStart.bind(MW, "startX"),
            endX: MW.handleTravellerDragStart.bind(MW, "endX")
          }, MW.state = {}, MW
        }
        return function(WW, RW) {
          if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
          WW.prototype = Object.create(RW && RW.prototype, {
            constructor: {
              value: WW,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(WW, "prototype", {
            writable: !1
          }), RW && uW(WW, RW)
        }(RW, WW), MW = RW, CW = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(WW) {
            var MW = WW.startX,
              wW = WW.endX,
              CW = this.state.scaleValues,
              zR = this.props,
              AW = zR.gap,
              bR = zR.data.length - 1,
              yR = Math.min(MW, wW),
              NW = Math.max(MW, wW),
              eW = RW.getIndexInRange(CW, yR),
              BW = RW.getIndexInRange(CW, NW);
            return {
              startIndex: eW - eW % AW,
              endIndex: BW === bR ? bR : BW - BW % AW
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(WW) {
            var RW = this.props,
              MW = RW.data,
              wW = RW.tickFormatter,
              CW = RW.dataKey,
              zR = (0, XW.Z)(MW[WW], CW, WW);
            return bR()(wW) ? wW(zR, WW) : zR
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
          value: function(WW) {
            var RW = this.state,
              MW = RW.slideMoveStartX,
              wW = RW.startX,
              CW = RW.endX,
              zR = this.props,
              AW = zR.x,
              bR = zR.width,
              yR = zR.travellerWidth,
              NW = zR.startIndex,
              eW = zR.endIndex,
              BW = zR.onChange,
              tR = WW.pageX - MW;
            tR > 0 ? tR = Math.min(tR, AW + bR - yR - CW, AW + bR - yR - wW) : tR < 0 && (tR = Math.max(tR, AW - wW, AW - CW));
            var TW = this.getIndex({
              startX: wW + tR,
              endX: CW + tR
            });
            TW.startIndex === NW && TW.endIndex === eW || !BW || BW(TW), this.setState({
              startX: wW + tR,
              endX: CW + tR,
              slideMoveStartX: WW.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(WW, RW) {
            var MW = GW(RW) ? RW.changedTouches[0] : RW;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: WW,
              brushMoveStartX: MW.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(WW) {
            var RW = this.state,
              MW = RW.brushMoveStartX,
              wW = RW.movingTravellerId,
              CW = RW.endX,
              zR = RW.startX,
              AW = this.state[wW],
              bR = this.props,
              yR = bR.x,
              NW = bR.width,
              eW = bR.travellerWidth,
              BW = bR.onChange,
              tR = bR.gap,
              TW = bR.data,
              gR = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              iR = WW.pageX - MW;
            iR > 0 ? iR = Math.min(iR, yR + NW - eW - AW) : iR < 0 && (iR = Math.max(iR, yR - AW)), gR[wW] = AW + iR;
            var YW = this.getIndex(gR),
              JW = YW.startIndex,
              PW = YW.endIndex;
            this.setState(OW(OW({}, wW, AW + iR), "brushMoveStartX", WW.pageX), (function() {
              BW && function() {
                var WW = TW.length - 1;
                return "startX" === wW && (CW > zR ? JW % tR === 0 : PW % tR === 0) || CW < zR && PW === WW || "endX" === wW && (CW > zR ? PW % tR === 0 : JW % tR === 0) || CW > zR && PW === WW
              }() && BW(YW)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(WW, RW) {
            var MW = this,
              wW = this.state,
              CW = wW.scaleValues,
              zR = wW.startX,
              AW = wW.endX,
              bR = this.state[RW],
              yR = CW.indexOf(bR);
            if (-1 !== yR) {
              var NW = yR + WW;
              if (!(-1 === NW || NW >= CW.length)) {
                var eW = CW[NW];
                "startX" === RW && eW >= AW || "endX" === RW && eW <= zR || this.setState(OW({}, RW, eW), (function() {
                  MW.props.onChange(MW.getIndex({
                    startX: MW.state.startX,
                    endX: MW.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var WW = this.props,
              RW = WW.x,
              MW = WW.y,
              CW = WW.width,
              zR = WW.height,
              AW = WW.fill,
              bR = WW.stroke;
            return wW.createElement("rect", {
              stroke: bR,
              fill: AW,
              x: RW,
              y: MW,
              width: CW,
              height: zR
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var WW = this.props,
              RW = WW.x,
              MW = WW.y,
              CW = WW.width,
              zR = WW.height,
              AW = WW.data,
              bR = WW.children,
              yR = WW.padding,
              NW = wW.Children.only(bR);
            return NW ? wW.cloneElement(NW, {
              x: RW,
              y: MW,
              width: CW,
              height: zR,
              margin: yR,
              compact: !0,
              data: AW
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(WW, MW) {
            var CW, zR, AW = this,
              bR = this.props,
              yR = bR.y,
              NW = bR.travellerWidth,
              eW = bR.height,
              BW = bR.traveller,
              tR = bR.ariaLabel,
              TW = bR.data,
              gR = bR.startIndex,
              iR = bR.endIndex,
              YW = Math.max(WW, this.props.x),
              JW = VW(VW({}, (0, QW.e)(this.props, !1)), {}, {
                x: YW,
                y: yR,
                width: NW,
                height: eW
              }),
              PW = tR || "Min value: ".concat(null === (CW = TW[gR]) || void 0 === CW ? void 0 : CW.name, ", Max value: ").concat(null === (zR = TW[iR]) || void 0 === zR ? void 0 : zR.name);
            return wW.createElement(IW.b, {
              tabIndex: 0,
              role: "slider",
              "aria-label": PW,
              "aria-valuenow": WW,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[MW],
              onTouchStart: this.travellerDragStartHandlers[MW],
              onKeyDown: function(WW) {
                ["ArrowLeft", "ArrowRight"].includes(WW.key) && (WW.preventDefault(), WW.stopPropagation(), AW.handleTravellerMoveKeyboard("ArrowRight" === WW.key ? 1 : -1, MW))
              },
              onFocus: function() {
                AW.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                AW.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, RW.renderTraveller(BW, JW))
          }
        }, {
          key: "renderSlide",
          value: function(WW, RW) {
            var MW = this.props,
              CW = MW.y,
              zR = MW.height,
              AW = MW.stroke,
              bR = MW.travellerWidth,
              yR = Math.min(WW, RW) + bR,
              NW = Math.max(Math.abs(RW - WW) - bR, 0);
            return wW.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: AW,
              fillOpacity: .2,
              x: yR,
              y: CW,
              width: NW,
              height: zR
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var WW = this.props,
              RW = WW.startIndex,
              MW = WW.endIndex,
              CW = WW.y,
              zR = WW.height,
              AW = WW.travellerWidth,
              bR = WW.stroke,
              yR = this.state,
              NW = yR.startX,
              eW = yR.endX,
              BW = {
                pointerEvents: "none",
                fill: bR
              };
            return wW.createElement(IW.b, {
              className: "recharts-brush-texts"
            }, wW.createElement(cR.b, UW({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(NW, eW) - 5,
              y: CW + zR / 2
            }, BW), this.getTextOfTick(RW)), wW.createElement(cR.b, UW({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(NW, eW) + AW + 5,
              y: CW + zR / 2
            }, BW), this.getTextOfTick(MW)))
          }
        }, {
          key: "render",
          value: function() {
            var WW = this.props,
              RW = WW.data,
              MW = WW.className,
              CW = WW.children,
              zR = WW.x,
              AW = WW.y,
              bR = WW.width,
              yR = WW.height,
              NW = WW.alwaysShowText,
              eW = this.state,
              BW = eW.startX,
              tR = eW.endX,
              TW = eW.isTextActive,
              gR = eW.isSlideMoving,
              iR = eW.isTravellerMoving,
              JW = eW.isTravellerFocused;
            if (!RW || !RW.length || !(0, jR.u)(zR) || !(0, jR.u)(AW) || !(0, jR.u)(bR) || !(0, jR.u)(yR) || bR <= 0 || yR <= 0) return null;
            var PW = (0, YW.c)("recharts-brush", MW),
              oW = 1 === wW.Children.count(CW),
              lW = function(WW, RW) {
                if (!WW) return null;
                var MW = WW.replace(/(\w)/, (function(WW) {
                    return WW.toUpperCase()
                  })),
                  wW = pW.reduce((function(WW, wW) {
                    return sW(sW({}, WW), {}, dW({}, wW + MW, RW))
                  }), {});
                return wW[WW] = RW, wW
              }("userSelect", "none");
            return wW.createElement(IW.b, {
              className: PW,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: lW
            }, this.renderBackground(), oW && this.renderPanorama(), this.renderSlide(BW, tR), this.renderTravellerLayer(BW, "startX"), this.renderTravellerLayer(tR, "endX"), (TW || gR || iR || JW || NW) && this.renderText())
          }
        }], zR = [{
          key: "renderDefaultTraveller",
          value: function(WW) {
            var RW = WW.x,
              MW = WW.y,
              CW = WW.width,
              zR = WW.height,
              AW = WW.stroke,
              bR = Math.floor(MW + zR / 2) - 1;
            return wW.createElement(wW.Fragment, null, wW.createElement("rect", {
              x: RW,
              y: MW,
              width: CW,
              height: zR,
              fill: AW,
              stroke: "none"
            }), wW.createElement("line", {
              x1: RW + 1,
              y1: bR,
              x2: RW + CW - 1,
              y2: bR,
              fill: "none",
              stroke: "#fff"
            }), wW.createElement("line", {
              x1: RW + 1,
              y1: bR + 2,
              x2: RW + CW - 1,
              y2: bR + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(WW, MW) {
            return wW.isValidElement(WW) ? wW.cloneElement(WW, MW) : bR()(WW) ? WW(MW) : RW.renderDefaultTraveller(MW)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(WW, RW) {
            var MW = WW.data,
              wW = WW.width,
              CW = WW.x,
              zR = WW.travellerWidth,
              AW = WW.updateId,
              bR = WW.startIndex,
              yR = WW.endIndex;
            if (MW !== RW.prevData || AW !== RW.prevUpdateId) return VW({
              prevData: MW,
              prevTravellerWidth: zR,
              prevUpdateId: AW,
              prevX: CW,
              prevWidth: wW
            }, MW && MW.length ? function(WW) {
              var RW = WW.data,
                MW = WW.startIndex,
                wW = WW.endIndex,
                CW = WW.x,
                zR = WW.width,
                AW = WW.travellerWidth;
              if (!RW || !RW.length) return {};
              var bR = RW.length,
                yR = (0, rR.c)().domain(NW()(0, bR)).range([CW, CW + zR - AW]),
                eW = yR.domain().map((function(WW) {
                  return yR(WW)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: yR(MW),
                endX: yR(wW),
                scale: yR,
                scaleValues: eW
              }
            }({
              data: MW,
              width: wW,
              x: CW,
              travellerWidth: zR,
              startIndex: bR,
              endIndex: yR
            }) : {
              scale: null,
              scaleValues: null
            });
            if (RW.scale && (wW !== RW.prevWidth || CW !== RW.prevX || zR !== RW.prevTravellerWidth)) {
              RW.scale.range([CW, CW + wW - zR]);
              var eW = RW.scale.domain().map((function(WW) {
                return RW.scale(WW)
              }));
              return {
                prevData: MW,
                prevTravellerWidth: zR,
                prevUpdateId: AW,
                prevX: CW,
                prevWidth: wW,
                startX: RW.scale(WW.startIndex),
                endX: RW.scale(WW.endIndex),
                scaleValues: eW
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(WW, RW) {
            for (var MW = 0, wW = WW.length - 1; wW - MW > 1;) {
              var CW = Math.floor((MW + wW) / 2);
              WW[CW] > RW ? wW = CW : MW = CW
            }
            return RW >= WW[wW] ? wW : MW
          }
        }], CW && mR(MW.prototype, CW), zR && mR(MW, zR), Object.defineProperty(MW, "prototype", {
          writable: !1
        }), MW;
        var MW, CW, zR
      }(wW.PureComponent);
    OW(LW, "displayName", "Brush"), OW(LW, "defaultProps", {
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
    var HW = MW(5106),
      DW = MW(5193),
      qR = MW(5205),
      ZW = MW(5221),
      SW = MW(5229),
      WR = MW(4376);

    function RR() {
      return RR = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, RR.apply(this, arguments)
    }

    function MR(WW) {
      return MR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, MR(WW)
    }

    function wR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function CR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? wR(Object(MW), !0).forEach((function(RW) {
          eR(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : wR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function zM(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, BR(wW.key), wW)
      }
    }

    function AR(WW, RW, MW) {
      return RW = yM(RW),
        function(WW, RW) {
          if (RW && ("object" === MR(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, bM() ? Reflect.construct(RW, MW || [], yM(WW).constructor) : RW.apply(WW, MW))
    }

    function bM() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (bM = function() {
        return !!WW
      })()
    }

    function yM(WW) {
      return yM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, yM(WW)
    }

    function NR(WW, RW) {
      return NR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, NR(WW, RW)
    }

    function eR(WW, RW, MW) {
      return (RW = BR(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function BR(WW) {
      var RW = function(WW, RW) {
        if ("object" != MR(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != MR(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == MR(RW) ? RW : RW + ""
    }
    var tM = function(WW) {
      function RW() {
        return function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, RW), AR(this, RW, arguments)
      }
      return function(WW, RW) {
        if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(RW && RW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), RW && NR(WW, RW)
      }(RW, WW), MW = RW, (CW = [{
        key: "render",
        value: function() {
          var WW = this.props,
            MW = WW.x,
            CW = WW.y,
            zR = WW.r,
            AW = WW.alwaysShow,
            bR = WW.clipPathId,
            yR = (0, jR.r)(MW),
            NW = (0, jR.r)(CW);
          if ((0, WR.d)(void 0 === AW, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !yR || !NW) return null;
          var eW = function(WW) {
            var RW = WW.x,
              MW = WW.y,
              wW = WW.xAxis,
              CW = WW.yAxis,
              zR = (0, SW.b)({
                x: wW.scale,
                y: CW.scale
              }),
              AW = zR.apply({
                x: RW,
                y: MW
              }, {
                bandAware: !0
              });
            return (0, ZW.b)(WW, "discard") && !zR.isInRange(AW) ? null : AW
          }(this.props);
          if (!eW) return null;
          var BW = eW.x,
            tR = eW.y,
            TW = this.props,
            gR = TW.shape,
            iR = TW.className,
            JW = CR(CR({
              clipPath: (0, ZW.b)(this.props, "hidden") ? "url(#".concat(bR, ")") : void 0
            }, (0, QW.e)(this.props, !0)), {}, {
              cx: BW,
              cy: tR
            });
          return wW.createElement(IW.b, {
            className: (0, YW.c)("recharts-reference-dot", iR)
          }, RW.renderDot(gR, JW), qR.d.renderCallByParent(this.props, {
            x: BW - zR,
            y: tR - zR,
            width: 2 * zR,
            height: 2 * zR
          }))
        }
      }]) && zM(MW.prototype, CW), zR && zM(MW, zR), Object.defineProperty(MW, "prototype", {
        writable: !1
      }), MW;
      var MW, CW, zR
    }(wW.Component);
    eR(tM, "displayName", "ReferenceDot"), eR(tM, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), eR(tM, "renderDot", (function(WW, RW) {
      return wW.isValidElement(WW) ? wW.cloneElement(WW, RW) : bR()(WW) ? WW(RW) : wW.createElement(FW.c, RR({}, RW, {
        cx: RW.cx,
        cy: RW.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var TR = MW(5302);

    function gM() {
      return gM = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, gM.apply(this, arguments)
    }

    function iM(WW) {
      return iM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, iM(WW)
    }

    function YR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function JR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? YR(Object(MW), !0).forEach((function(RW) {
          fR(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : YR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function PR(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, QR(wW.key), wW)
      }
    }

    function IR(WW, RW, MW) {
      return RW = lR(RW),
        function(WW, RW) {
          if (RW && ("object" === iM(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, oR() ? Reflect.construct(RW, MW || [], lR(WW).constructor) : RW.apply(WW, MW))
    }

    function oR() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (oR = function() {
        return !!WW
      })()
    }

    function lR(WW) {
      return lR = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, lR(WW)
    }

    function FR(WW, RW) {
      return FR = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, FR(WW, RW)
    }

    function fR(WW, RW, MW) {
      return (RW = QR(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function QR(WW) {
      var RW = function(WW, RW) {
        if ("object" != iM(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != iM(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == iM(RW) ? RW : RW + ""
    }
    var rM = function(WW) {
      function RW() {
        return function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, RW), IR(this, RW, arguments)
      }
      return function(WW, RW) {
        if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(RW && RW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), RW && FR(WW, RW)
      }(RW, WW), MW = RW, (CW = [{
        key: "render",
        value: function() {
          var WW = this.props,
            MW = WW.x1,
            CW = WW.x2,
            zR = WW.y1,
            AW = WW.y2,
            bR = WW.className,
            yR = WW.alwaysShow,
            NW = WW.clipPathId;
          (0, WR.d)(void 0 === yR, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var eW = (0, jR.r)(MW),
            BW = (0, jR.r)(CW),
            tR = (0, jR.r)(zR),
            TW = (0, jR.r)(AW),
            gR = this.props.shape;
          if (!eW && !BW && !tR && !TW && !gR) return null;
          var iR = function(WW, RW, MW, wW, CW) {
            var zR = CW.x1,
              AW = CW.x2,
              bR = CW.y1,
              yR = CW.y2,
              NW = CW.xAxis,
              eW = CW.yAxis;
            if (!NW || !eW) return null;
            var BW = (0, SW.b)({
                x: NW.scale,
                y: eW.scale
              }),
              tR = {
                x: WW ? BW.x.apply(zR, {
                  position: "start"
                }) : BW.x.rangeMin,
                y: MW ? BW.y.apply(bR, {
                  position: "start"
                }) : BW.y.rangeMin
              },
              TW = {
                x: RW ? BW.x.apply(AW, {
                  position: "end"
                }) : BW.x.rangeMax,
                y: wW ? BW.y.apply(yR, {
                  position: "end"
                }) : BW.y.rangeMax
              };
            return !(0, ZW.b)(CW, "discard") || BW.isInRange(tR) && BW.isInRange(TW) ? (0, SW.j)(tR, TW) : null
          }(eW, BW, tR, TW, this.props);
          if (!iR && !gR) return null;
          var JW = (0, ZW.b)(this.props, "hidden") ? "url(#".concat(NW, ")") : void 0;
          return wW.createElement(IW.b, {
            className: (0, YW.c)("recharts-reference-area", bR)
          }, RW.renderRect(gR, JR(JR({
            clipPath: JW
          }, (0, QW.e)(this.props, !0)), iR)), qR.d.renderCallByParent(this.props, iR))
        }
      }]) && PR(MW.prototype, CW), zR && PR(MW, zR), Object.defineProperty(MW, "prototype", {
        writable: !1
      }), MW;
      var MW, CW, zR
    }(wW.Component);

    function cM(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return XR(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return XR(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return XR(WW, RW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function XR(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }
    fR(rM, "displayName", "ReferenceArea"), fR(rM, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), fR(rM, "renderRect", (function(WW, RW) {
      return wW.isValidElement(WW) ? wW.cloneElement(WW, RW) : bR()(WW) ? WW(RW) : wW.createElement(fW.e, gM({}, RW, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var jM = function(WW, RW, MW, wW, CW) {
        var zR = (0, QW.f)(WW, TR.e),
          AW = (0, QW.f)(WW, tM),
          bR = [].concat(cM(zR), cM(AW)),
          yR = (0, QW.f)(WW, rM),
          NW = "".concat(wW, "Id"),
          eW = wW[0],
          BW = RW;
        if (bR.length && (BW = bR.reduce((function(WW, RW) {
            if (RW.props[NW] === MW && (0, ZW.b)(RW.props, "extendDomain") && (0, jR.u)(RW.props[eW])) {
              var wW = RW.props[eW];
              return [Math.min(WW[0], wW), Math.max(WW[1], wW)]
            }
            return WW
          }), BW)), yR.length) {
          var tR = "".concat(eW, "1"),
            TW = "".concat(eW, "2");
          BW = yR.reduce((function(WW, RW) {
            if (RW.props[NW] === MW && (0, ZW.b)(RW.props, "extendDomain") && (0, jR.u)(RW.props[tR]) && (0, jR.u)(RW.props[TW])) {
              var wW = RW.props[tR],
                CW = RW.props[TW];
              return [Math.min(WW[0], wW, CW), Math.max(WW[1], wW, CW)]
            }
            return WW
          }), BW)
        }
        return CW && CW.length && (BW = CW.reduce((function(WW, RW) {
          return (0, jR.u)(RW) ? [Math.min(WW[0], RW), Math.max(WW[1], RW)] : WW
        }), BW)), BW
      },
      kM = MW(5214),
      aM = MW(4402),
      sR = MW(41),
      dR = new(MW.n(sR)()),
      pR = "recharts.syncMouseEvents",
      hR = MW(4407);

    function UR(WW) {
      return UR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, UR(WW)
    }

    function ER(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, mM(wW.key), wW)
      }
    }

    function VR(WW, RW, MW) {
      return (RW = mM(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function mM(WW) {
      var RW = function(WW, RW) {
        if ("object" != UR(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != UR(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == UR(RW) ? RW : RW + ""
    }
    var xM = function() {
      return WW = function WW() {
        ! function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, WW), VR(this, "activeIndex", 0), VR(this, "coordinateList", []), VR(this, "layout", "horizontal")
      }, (RW = [{
        key: "setDetails",
        value: function(WW) {
          var RW, MW = WW.coordinateList,
            wW = void 0 === MW ? null : MW,
            CW = WW.container,
            zR = void 0 === CW ? null : CW,
            AW = WW.layout,
            bR = void 0 === AW ? null : AW,
            yR = WW.offset,
            NW = void 0 === yR ? null : yR,
            eW = WW.mouseHandlerCallback,
            BW = void 0 === eW ? null : eW;
          this.coordinateList = null !== (RW = null !== wW && void 0 !== wW ? wW : this.coordinateList) && void 0 !== RW ? RW : [], this.container = null !== zR && void 0 !== zR ? zR : this.container, this.layout = null !== bR && void 0 !== bR ? bR : this.layout, this.offset = null !== NW && void 0 !== NW ? NW : this.offset, this.mouseHandlerCallback = null !== BW && void 0 !== BW ? BW : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(WW) {
          if (0 !== this.coordinateList.length) switch (WW.key) {
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
        value: function(WW) {
          this.activeIndex = WW
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var WW, RW;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var MW = this.container.getBoundingClientRect(),
              wW = MW.x,
              CW = MW.y,
              zR = MW.height,
              AW = this.coordinateList[this.activeIndex].coordinate,
              bR = (null === (WW = window) || void 0 === WW ? void 0 : WW.scrollX) || 0,
              yR = (null === (RW = window) || void 0 === RW ? void 0 : RW.scrollY) || 0,
              NW = wW + AW + bR,
              eW = CW + this.offset.top + zR / 2 + yR;
            this.mouseHandlerCallback({
              pageX: NW,
              pageY: eW
            })
          }
        }
      }]) && ER(WW.prototype, RW), MW && ER(WW, MW), Object.defineProperty(WW, "prototype", {
        writable: !1
      }), WW;
      var WW, RW, MW
    }();
    var vM = MW(5281),
      KR = MW(5354);

    function uR(WW) {
      return uR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, uR(WW)
    }
    var OR = ["x", "y", "top", "left", "width", "height", "className"];

    function nR() {
      return nR = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, nR.apply(this, arguments)
    }

    function GR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function LR(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != uR(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != uR(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == uR(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function HR(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }
    var DR = function(WW, RW, MW, wW, CW, zR) {
        return "M".concat(WW, ",").concat(CW, "v").concat(wW, "M").concat(zR, ",").concat(RW, "h").concat(MW)
      },
      qM = function(WW) {
        var RW = WW.x,
          MW = void 0 === RW ? 0 : RW,
          CW = WW.y,
          zR = void 0 === CW ? 0 : CW,
          AW = WW.top,
          bR = void 0 === AW ? 0 : AW,
          yR = WW.left,
          NW = void 0 === yR ? 0 : yR,
          eW = WW.width,
          BW = void 0 === eW ? 0 : eW,
          tR = WW.height,
          TW = void 0 === tR ? 0 : tR,
          gR = WW.className,
          iR = function(WW) {
            for (var RW = 1; RW < arguments.length; RW++) {
              var MW = null != arguments[RW] ? arguments[RW] : {};
              RW % 2 ? GR(Object(MW), !0).forEach((function(RW) {
                LR(WW, RW, MW[RW])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : GR(Object(MW)).forEach((function(RW) {
                Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
              }))
            }
            return WW
          }({
            x: MW,
            y: zR,
            top: bR,
            left: NW,
            width: BW,
            height: TW
          }, HR(WW, OR));
        return (0, jR.u)(MW) && (0, jR.u)(zR) && (0, jR.u)(BW) && (0, jR.u)(TW) && (0, jR.u)(bR) && (0, jR.u)(NW) ? wW.createElement("path", nR({}, (0, QW.e)(iR, !0), {
          className: (0, YW.c)("recharts-cross", gR),
          d: DR(MW, zR, BW, TW, bR, NW)
        })) : null
      };

    function ZR(WW) {
      var RW = WW.cx,
        MW = WW.cy,
        wW = WW.radius,
        CW = WW.startAngle,
        zR = WW.endAngle;
      return {
        points: [(0, kM.i)(RW, MW, wW, CW), (0, kM.i)(RW, MW, wW, zR)],
        cx: RW,
        cy: MW,
        radius: wW,
        startAngle: CW,
        endAngle: zR
      }
    }
    var SR = MW(5298);

    function WM(WW, RW, MW) {
      var wW, CW, zR, AW;
      if ("horizontal" === WW) zR = wW = RW.x, CW = MW.top, AW = MW.top + MW.height;
      else if ("vertical" === WW) AW = CW = RW.y, wW = MW.left, zR = MW.left + MW.width;
      else if (null != RW.cx && null != RW.cy) {
        if ("centric" !== WW) return ZR(RW);
        var bR = RW.cx,
          yR = RW.cy,
          NW = RW.innerRadius,
          eW = RW.outerRadius,
          BW = RW.angle,
          tR = (0, kM.i)(bR, yR, NW, BW),
          TW = (0, kM.i)(bR, yR, eW, BW);
        wW = tR.x, CW = tR.y, zR = TW.x, AW = TW.y
      }
      return [{
        x: wW,
        y: CW
      }, {
        x: zR,
        y: AW
      }]
    }

    function RM(WW) {
      return RM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, RM(WW)
    }

    function MM(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function wM(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? MM(Object(MW), !0).forEach((function(RW) {
          CM(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : MM(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function CM(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != RM(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != RM(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == RM(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function zw(WW) {
      var RW, MW, CW, zR = WW.element,
        AW = WW.tooltipEventType,
        bR = WW.isActive,
        yR = WW.activeCoordinate,
        NW = WW.activePayload,
        eW = WW.offset,
        BW = WW.activeTooltipIndex,
        tR = WW.tooltipAxisBandSize,
        TW = WW.layout,
        gR = WW.chartName,
        iR = null !== (RW = zR.props.cursor) && void 0 !== RW ? RW : null === (MW = zR.type.defaultProps) || void 0 === MW ? void 0 : MW.cursor;
      if (!zR || !iR || !bR || !yR || "ScatterChart" !== gR && "axis" !== AW) return null;
      var JW = KR.b;
      if ("ScatterChart" === gR) CW = yR, JW = qM;
      else if ("BarChart" === gR) CW = function(WW, RW, MW, wW) {
        var CW = wW / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === WW ? RW.x - CW : MW.left + .5,
          y: "horizontal" === WW ? MW.top + .5 : RW.y - CW,
          width: "horizontal" === WW ? wW : MW.width - 1,
          height: "horizontal" === WW ? MW.height - 1 : wW
        }
      }(TW, yR, eW, tR), JW = fW.e;
      else if ("radial" === TW) {
        var PW = ZR(yR),
          IW = PW.cx,
          oW = PW.cy,
          lW = PW.radius;
        CW = {
          cx: IW,
          cy: oW,
          startAngle: PW.startAngle,
          endAngle: PW.endAngle,
          innerRadius: lW,
          outerRadius: lW
        }, JW = SR.e
      } else CW = {
        points: WM(TW, yR, eW)
      }, JW = KR.b;
      var FW = wM(wM(wM(wM({
        stroke: "#ccc",
        pointerEvents: "none"
      }, eW), CW), (0, QW.e)(iR, !1)), {}, {
        payload: NW,
        payloadIndex: BW,
        className: (0, YW.c)("recharts-tooltip-cursor", iR.className)
      });
      return (0, wW.isValidElement)(iR) ? (0, wW.cloneElement)(iR, FW) : (0, wW.createElement)(JW, FW)
    }
    var AM = MW(5323),
      bw = ["item"],
      yw = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function NM(WW) {
      return NM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, NM(WW)
    }

    function eM() {
      return eM = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, eM.apply(this, arguments)
    }

    function BM(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        var MW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != MW) {
          var wW, CW, zR, AW, bR = [],
            yR = !0,
            NW = !1;
          try {
            if (zR = (MW = MW.call(WW)).next, 0 === RW) {
              if (Object(MW) !== MW) return;
              yR = !1
            } else
              for (; !(yR = (wW = zR.call(MW)).done) && (bR.push(wW.value), bR.length !== RW); yR = !0);
          } catch (WW) {
            NW = !0, CW = WW
          } finally {
            try {
              if (!yR && null != MW.return && (AW = MW.return(), Object(AW) !== AW)) return
            } finally {
              if (NW) throw CW
            }
          }
          return bR
        }
      }(WW, RW) || IM(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tw(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function TM(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, QM(wW.key), wW)
      }
    }

    function gw(WW, RW, MW) {
      return RW = YM(RW),
        function(WW, RW) {
          if (RW && ("object" === NM(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, iw() ? Reflect.construct(RW, MW || [], YM(WW).constructor) : RW.apply(WW, MW))
    }

    function iw() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (iw = function() {
        return !!WW
      })()
    }

    function YM(WW) {
      return YM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, YM(WW)
    }

    function JM(WW, RW) {
      return JM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, JM(WW, RW)
    }

    function PM(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return oM(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || IM(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IM(WW, RW) {
      if (WW) {
        if ("string" === typeof WW) return oM(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        return "Object" === MW && WW.constructor && (MW = WW.constructor.name), "Map" === MW || "Set" === MW ? Array.from(WW) : "Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW) ? oM(WW, RW) : void 0
      }
    }

    function oM(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function lM(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function FM(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? lM(Object(MW), !0).forEach((function(RW) {
          fM(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : lM(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function fM(WW, RW, MW) {
      return (RW = QM(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function QM(WW) {
      var RW = function(WW, RW) {
        if ("object" != NM(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != NM(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == NM(RW) ? RW : RW + ""
    }
    var rw = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      cwW = {
        width: "100%",
        height: "100%"
      },
      XM = {
        x: 0,
        y: 0
      };

    function jw(WW) {
      return WW
    }
    var kw = function(WW, RW) {
      var MW = RW.graphicalItems,
        wW = RW.dataStartIndex,
        CW = RW.dataEndIndex,
        zR = (null !== MW && void 0 !== MW ? MW : []).reduce((function(WW, RW) {
          var MW = RW.props.data;
          return MW && MW.length ? [].concat(PM(WW), PM(MW)) : WW
        }), []);
      return zR.length > 0 ? zR : WW && WW.length && (0, jR.u)(wW) && (0, jR.u)(CW) ? WW.slice(wW, CW + 1) : []
    };

    function aw(WW) {
      return "number" === WW ? [0, "auto"] : void 0
    }
    var sM = function(WW, RW, MW, wW) {
        var CW = WW.graphicalItems,
          zR = WW.tooltipAxis,
          AW = kw(RW, WW);
        return MW < 0 || !CW || !CW.length || MW >= AW.length ? null : CW.reduce((function(CW, bR) {
          var yR, NW, eW = null !== (yR = bR.props.data) && void 0 !== yR ? yR : RW;
          if (eW && WW.dataStartIndex + WW.dataEndIndex !== 0 && WW.dataEndIndex - WW.dataStartIndex >= MW && (eW = eW.slice(WW.dataStartIndex, WW.dataEndIndex + 1)), zR.dataKey && !zR.allowDuplicatedCategory) {
            var BW = void 0 === eW ? AW : eW;
            NW = (0, jR.g)(BW, zR.dataKey, wW)
          } else NW = eW && eW[MW] || AW[MW];
          return NW ? [].concat(PM(CW), [(0, XW.W)(bR, NW)]) : CW
        }), [])
      },
      dM = function(WW, RW, MW, wW) {
        var CW = wW || {
            x: WW.chartX,
            y: WW.chartY
          },
          zR = function(WW, RW) {
            return "horizontal" === RW ? WW.x : "vertical" === RW ? WW.y : "centric" === RW ? WW.angle : WW.radius
          }(CW, MW),
          AW = WW.orderedTooltipTicks,
          bR = WW.tooltipAxis,
          yR = WW.tooltipTicks,
          NW = (0, XW.e)(zR, AW, yR, bR);
        if (NW >= 0 && yR) {
          var eW = yR[NW] && yR[NW].value,
            BW = sM(WW, RW, NW, eW),
            tR = function(WW, RW, MW, wW) {
              var CW = RW.find((function(WW) {
                return WW && WW.index === MW
              }));
              if (CW) {
                if ("horizontal" === WW) return {
                  x: CW.coordinate,
                  y: wW.y
                };
                if ("vertical" === WW) return {
                  x: wW.x,
                  y: CW.coordinate
                };
                if ("centric" === WW) {
                  var zR = CW.coordinate,
                    AW = wW.radius;
                  return FM(FM(FM({}, wW), (0, kM.i)(wW.cx, wW.cy, AW, zR)), {}, {
                    angle: zR,
                    radius: AW
                  })
                }
                var bR = CW.coordinate,
                  yR = wW.angle;
                return FM(FM(FM({}, wW), (0, kM.i)(wW.cx, wW.cy, bR, yR)), {}, {
                  angle: yR,
                  radius: bR
                })
              }
              return XM
            }(MW, AW, NW, CW);
          return {
            activeTooltipIndex: NW,
            activeLabel: eW,
            activePayload: BW,
            activeCoordinate: tR
          }
        }
        return null
      },
      pM = function(WW, RW) {
        var MW = RW.axes,
          wW = RW.graphicalItems,
          CW = RW.axisType,
          AW = RW.axisIdKey,
          bR = RW.stackGroups,
          yR = RW.dataStartIndex,
          eW = RW.dataEndIndex,
          BW = WW.layout,
          tR = WW.children,
          TW = WW.stackOffset,
          gR = (0, XW._)(BW, CW);
        return MW.reduce((function(RW, MW) {
          var iR, YW = void 0 !== MW.type.defaultProps ? FM(FM({}, MW.type.defaultProps), MW.props) : MW.props,
            JW = YW.type,
            PW = YW.dataKey,
            IW = YW.allowDataOverflow,
            oW = YW.allowDuplicatedCategory,
            lW = YW.scale,
            FW = YW.ticks,
            fW = YW.includeHidden,
            QW = YW[AW];
          if (RW[QW]) return RW;
          var rR, cR, kR, aR = kw(WW.data, {
              graphicalItems: wW.filter((function(WW) {
                var RW;
                return (AW in WW.props ? WW.props[AW] : null === (RW = WW.type.defaultProps) || void 0 === RW ? void 0 : RW[AW]) === QW
              })),
              dataStartIndex: yR,
              dataEndIndex: eW
            }),
            sW = aR.length;
          (function(WW, RW, MW) {
            if ("number" === MW && !0 === RW && Array.isArray(WW)) {
              var wW = null === WW || void 0 === WW ? void 0 : WW[0],
                CW = null === WW || void 0 === WW ? void 0 : WW[1];
              if (wW && CW && (0, jR.u)(wW) && (0, jR.u)(CW)) return !0
            }
            return !1
          })(YW.domain, IW, JW) && (rR = (0, XW.jb)(YW.domain, null, IW), !gR || "number" !== JW && "auto" === lW || (kR = (0, XW.C)(aR, PW, "category")));
          var dW = aw(JW);
          if (!rR || 0 === rR.length) {
            var pW, hW = null !== (pW = YW.domain) && void 0 !== pW ? pW : dW;
            if (PW) {
              if (rR = (0, XW.C)(aR, PW, JW), "category" === JW && gR) {
                var UW = (0, jR.l)(rR);
                oW && UW ? (cR = rR, rR = NW()(0, sW)) : oW || (rR = (0, XW.bb)(hW, rR, MW).reduce((function(WW, RW) {
                  return WW.indexOf(RW) >= 0 ? WW : [].concat(PM(WW), [RW])
                }), []))
              } else if ("category" === JW) rR = oW ? rR.filter((function(WW) {
                return "" !== WW && !zR()(WW)
              })) : (0, XW.bb)(hW, rR, MW).reduce((function(WW, RW) {
                return WW.indexOf(RW) >= 0 || "" === RW || zR()(RW) ? WW : [].concat(PM(WW), [RW])
              }), []);
              else if ("number" === JW) {
                var EW = (0, XW.eb)(aR, wW.filter((function(WW) {
                  var RW, MW, wW = AW in WW.props ? WW.props[AW] : null === (RW = WW.type.defaultProps) || void 0 === RW ? void 0 : RW[AW],
                    CW = "hide" in WW.props ? WW.props.hide : null === (MW = WW.type.defaultProps) || void 0 === MW ? void 0 : MW.hide;
                  return wW === QW && (fW || !CW)
                })), PW, CW, BW);
                EW && (rR = EW)
              }!gR || "number" !== JW && "auto" === lW || (kR = (0, XW.C)(aR, PW, "category"))
            } else rR = gR ? NW()(0, sW) : bR && bR[QW] && bR[QW].hasStack && "number" === JW ? "expand" === TW ? [0, 1] : (0, XW.H)(bR[QW].stackGroups, yR, eW) : (0, XW.D)(aR, wW.filter((function(WW) {
              var RW = AW in WW.props ? WW.props[AW] : WW.type.defaultProps[AW],
                MW = "hide" in WW.props ? WW.props.hide : WW.type.defaultProps.hide;
              return RW === QW && (fW || !MW)
            })), JW, BW, !0);
            if ("number" === JW) rR = jM(tR, rR, QW, CW, FW), hW && (rR = (0, XW.jb)(hW, rR, IW));
            else if ("category" === JW && hW) {
              var VW = hW;
              rR.every((function(WW) {
                return VW.indexOf(WW) >= 0
              })) && (rR = VW)
            }
          }
          return FM(FM({}, RW), {}, fM({}, QW, FM(FM({}, YW), {}, {
            axisType: CW,
            domain: rR,
            categoricalDomain: kR,
            duplicateDomain: cR,
            originalDomain: null !== (iR = YW.domain) && void 0 !== iR ? iR : dW,
            isCategorical: gR,
            layout: BW
          })))
        }), {})
      },
      hM = function(WW, RW) {
        var MW = RW.axisType,
          wW = void 0 === MW ? "xAxis" : MW,
          CW = RW.AxisComp,
          zR = RW.graphicalItems,
          AW = RW.stackGroups,
          bR = RW.dataStartIndex,
          yR = RW.dataEndIndex,
          eW = WW.children,
          tR = "".concat(wW, "Id"),
          TW = (0, QW.f)(eW, CW),
          gR = {};
        return TW && TW.length ? gR = pM(WW, {
          axes: TW,
          graphicalItems: zR,
          axisType: wW,
          axisIdKey: tR,
          stackGroups: AW,
          dataStartIndex: bR,
          dataEndIndex: yR
        }) : zR && zR.length && (gR = function(WW, RW) {
          var MW = RW.graphicalItems,
            wW = RW.Axis,
            CW = RW.axisType,
            zR = RW.axisIdKey,
            AW = RW.stackGroups,
            bR = RW.dataStartIndex,
            yR = RW.dataEndIndex,
            eW = WW.layout,
            tR = WW.children,
            TW = kw(WW.data, {
              graphicalItems: MW,
              dataStartIndex: bR,
              dataEndIndex: yR
            }),
            gR = TW.length,
            iR = (0, XW._)(eW, CW),
            YW = -1;
          return MW.reduce((function(WW, RW) {
            var JW, PW = (void 0 !== RW.type.defaultProps ? FM(FM({}, RW.type.defaultProps), RW.props) : RW.props)[zR],
              IW = aw("number");
            return WW[PW] ? WW : (YW++, iR ? JW = NW()(0, gR) : AW && AW[PW] && AW[PW].hasStack ? (JW = (0, XW.H)(AW[PW].stackGroups, bR, yR), JW = jM(tR, JW, PW, CW)) : (JW = (0, XW.jb)(IW, (0, XW.D)(TW, MW.filter((function(WW) {
              var RW, MW, wW = zR in WW.props ? WW.props[zR] : null === (RW = WW.type.defaultProps) || void 0 === RW ? void 0 : RW[zR],
                CW = "hide" in WW.props ? WW.props.hide : null === (MW = WW.type.defaultProps) || void 0 === MW ? void 0 : MW.hide;
              return wW === PW && !CW
            })), "number", eW), wW.defaultProps.allowDataOverflow), JW = jM(tR, JW, PW, CW)), FM(FM({}, WW), {}, fM({}, PW, FM(FM({
              axisType: CW
            }, wW.defaultProps), {}, {
              hide: !0,
              orientation: BW()(rw, "".concat(CW, ".").concat(YW % 2), null),
              domain: JW,
              originalDomain: IW,
              isCategorical: iR,
              layout: eW
            }))))
          }), {})
        }(WW, {
          Axis: CW,
          graphicalItems: zR,
          axisType: wW,
          axisIdKey: tR,
          stackGroups: AW,
          dataStartIndex: bR,
          dataEndIndex: yR
        })), gR
      },
      UM = function(WW) {
        var RW = WW.children,
          MW = WW.defaultShowTooltip,
          wW = (0, QW.i)(RW, LW),
          CW = 0,
          zR = 0;
        return WW.data && 0 !== WW.data.length && (zR = WW.data.length - 1), wW && wW.props && (wW.props.startIndex >= 0 && (CW = wW.props.startIndex), wW.props.endIndex >= 0 && (zR = wW.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: CW,
          dataEndIndex: zR,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(MW)
        }
      },
      EM = function(WW) {
        return "horizontal" === WW ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === WW ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === WW ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      VM = function(WW, RW) {
        return "xAxis" === RW ? WW[RW].width : "yAxis" === RW ? WW[RW].height : void 0
      },
      mw = function(WW) {
        var RW = WW.chartName,
          MW = WW.GraphicalChild,
          CW = WW.defaultTooltipEventType,
          AW = void 0 === CW ? "axis" : CW,
          yR = WW.validateTooltipEventTypes,
          NW = void 0 === yR ? ["axis"] : yR,
          eW = WW.axisComponents,
          tR = WW.legendContent,
          gR = WW.formatAxisMap,
          rR = WW.defaultProps,
          cR = function(WW, RW) {
            var MW = RW.graphicalItems,
              wW = RW.stackGroups,
              CW = RW.offset,
              AW = RW.updateId,
              bR = RW.dataStartIndex,
              yR = RW.dataEndIndex,
              NW = WW.barSize,
              BW = WW.layout,
              tR = WW.barGap,
              TW = WW.barCategoryGap,
              gR = WW.maxBarSize,
              iR = EM(BW),
              YW = iR.numericAxisName,
              PW = iR.cateAxisName,
              IW = function(WW) {
                return !(!WW || !WW.length) && WW.some((function(WW) {
                  var RW = (0, QW.j)(WW && WW.type);
                  return RW && RW.indexOf("Bar") >= 0
                }))
              }(MW),
              oW = [];
            return MW.forEach((function(MW, iR) {
              var lW = kw(WW.data, {
                  graphicalItems: [MW],
                  dataStartIndex: bR,
                  dataEndIndex: yR
                }),
                FW = void 0 !== MW.type.defaultProps ? FM(FM({}, MW.type.defaultProps), MW.props) : MW.props,
                fW = FW.dataKey,
                rR = FW.maxBarSize,
                cR = FW["".concat(YW, "Id")],
                jR = FW["".concat(PW, "Id")],
                kR = eW.reduce((function(WW, MW) {
                  var wW = RW["".concat(MW.axisType, "Map")],
                    CW = FW["".concat(MW.axisType, "Id")];
                  wW && wW[CW] || "zAxis" === MW.axisType || (0, JW.b)(!1);
                  var zR = wW[CW];
                  return FM(FM({}, WW), {}, fM(fM({}, MW.axisType, zR), "".concat(MW.axisType, "Ticks"), (0, XW.Q)(zR)))
                }), {}),
                aR = kR[PW],
                sW = kR["".concat(PW, "Ticks")],
                dW = wW && wW[cR] && wW[cR].hasStack && (0, XW.O)(MW, wW[cR].stackGroups),
                pW = (0, QW.j)(MW.type).indexOf("Bar") >= 0,
                hW = (0, XW.m)(aR, sW),
                UW = [],
                EW = IW && (0, XW.q)({
                  barSize: NW,
                  stackGroups: wW,
                  totalSize: VM(kR, PW)
                });
              if (pW) {
                var VW, mR, xR = zR()(rR) ? gR : rR,
                  vR = null !== (VW = null !== (mR = (0, XW.m)(aR, sW, !0)) && void 0 !== mR ? mR : xR) && void 0 !== VW ? VW : 0;
                UW = (0, XW.n)({
                  barGap: tR,
                  barCategoryGap: TW,
                  bandSize: vR !== hW ? vR : hW,
                  sizeList: EW[jR],
                  maxBarSize: xR
                }), vR !== hW && (UW = UW.map((function(WW) {
                  return FM(FM({}, WW), {}, {
                    position: FM(FM({}, WW.position), {}, {
                      offset: WW.position.offset - vR / 2
                    })
                  })
                })))
              }
              var KW = MW && MW.type && MW.type.getComposedData;
              KW && oW.push({
                props: FM(FM({}, KW(FM(FM({}, kR), {}, {
                  displayedData: lW,
                  props: WW,
                  dataKey: fW,
                  item: MW,
                  bandSize: hW,
                  barPosition: UW,
                  offset: CW,
                  stackedData: dW,
                  layout: BW,
                  dataStartIndex: bR,
                  dataEndIndex: yR
                }))), {}, fM(fM(fM({
                  key: MW.key || "item-".concat(iR)
                }, YW, kR[YW]), PW, kR[PW]), "animationId", AW)),
                childIndex: (0, QW.t)(MW, WW.children),
                item: MW
              })
            })), oW
          },
          kR = function(WW, wW) {
            var CW = WW.props,
              zR = WW.dataStartIndex,
              AW = WW.dataEndIndex,
              bR = WW.updateId;
            if (!(0, QW.x)({
                props: CW
              })) return null;
            var yR = CW.children,
              NW = CW.layout,
              tR = CW.stackOffset,
              iR = CW.data,
              YW = CW.reverseStackOrder,
              JW = EM(NW),
              PW = JW.numericAxisName,
              IW = JW.cateAxisName,
              oW = (0, QW.f)(yR, MW),
              FW = (0, XW.K)(iR, oW, "".concat(PW, "Id"), "".concat(IW, "Id"), tR, YW),
              fW = eW.reduce((function(WW, RW) {
                var MW = "".concat(RW.axisType, "Map");
                return FM(FM({}, WW), {}, fM({}, MW, hM(CW, FM(FM({}, RW), {}, {
                  graphicalItems: oW,
                  stackGroups: RW.axisType === PW && FW,
                  dataStartIndex: zR,
                  dataEndIndex: AW
                }))))
              }), {}),
              rR = function(WW, RW) {
                var MW = WW.props,
                  wW = WW.graphicalItems,
                  CW = WW.xAxisMap,
                  zR = void 0 === CW ? {} : CW,
                  AW = WW.yAxisMap,
                  bR = void 0 === AW ? {} : AW,
                  yR = MW.width,
                  NW = MW.height,
                  eW = MW.children,
                  tR = MW.margin || {},
                  TW = (0, QW.i)(eW, LW),
                  gR = (0, QW.i)(eW, lW.b),
                  iR = Object.keys(bR).reduce((function(WW, RW) {
                    var MW = bR[RW],
                      wW = MW.orientation;
                    return MW.mirror || MW.hide ? WW : FM(FM({}, WW), {}, fM({}, wW, WW[wW] + MW.width))
                  }), {
                    left: tR.left || 0,
                    right: tR.right || 0
                  }),
                  YW = Object.keys(zR).reduce((function(WW, RW) {
                    var MW = zR[RW],
                      wW = MW.orientation;
                    return MW.mirror || MW.hide ? WW : FM(FM({}, WW), {}, fM({}, wW, BW()(WW, "".concat(wW)) + MW.height))
                  }), {
                    top: tR.top || 0,
                    bottom: tR.bottom || 0
                  }),
                  JW = FM(FM({}, YW), iR),
                  PW = JW.bottom;
                TW && (JW.bottom += TW.props.height || LW.defaultProps.height), gR && RW && (JW = (0, XW.c)(JW, wW, MW, RW));
                var IW = yR - JW.left - JW.right,
                  oW = NW - JW.top - JW.bottom;
                return FM(FM({
                  brushBottom: PW
                }, JW), {}, {
                  width: Math.max(IW, 0),
                  height: Math.max(oW, 0)
                })
              }(FM(FM({}, fW), {}, {
                props: CW,
                graphicalItems: oW
              }), null === wW || void 0 === wW ? void 0 : wW.legendBBox);
            Object.keys(fW).forEach((function(WW) {
              fW[WW] = gR(CW, fW[WW], rR, WW.replace("Map", ""), RW)
            }));
            var kR = function(WW) {
                var RW = (0, jR.h)(WW),
                  MW = (0, XW.Q)(RW, !1, !0);
                return {
                  tooltipTicks: MW,
                  orderedTooltipTicks: TW()(MW, (function(WW) {
                    return WW.coordinate
                  })),
                  tooltipAxis: RW,
                  tooltipAxisBandSize: (0, XW.m)(RW, MW)
                }
              }(fW["".concat(IW, "Map")]),
              aR = cR(CW, FM(FM({}, fW), {}, {
                dataStartIndex: zR,
                dataEndIndex: AW,
                updateId: bR,
                graphicalItems: oW,
                stackGroups: FW,
                offset: rR
              }));
            return FM(FM({
              formattedGraphicalItems: aR,
              graphicalItems: oW,
              offset: rR,
              stackGroups: FW
            }, kR), fW)
          },
          aR = function(WW) {
            function MW(WW) {
              var CW, AW, yR;
              return function(WW, RW) {
                if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
              }(this, MW), fM(yR = gw(this, MW, [WW]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), fM(yR, "accessibilityManager", new xM), fM(yR, "handleLegendBBoxUpdate", (function(WW) {
                if (WW) {
                  var RW = yR.state,
                    MW = RW.dataStartIndex,
                    wW = RW.dataEndIndex,
                    CW = RW.updateId;
                  yR.setState(FM({
                    legendBBox: WW
                  }, kR({
                    props: yR.props,
                    dataStartIndex: MW,
                    dataEndIndex: wW,
                    updateId: CW
                  }, FM(FM({}, yR.state), {}, {
                    legendBBox: WW
                  }))))
                }
              })), fM(yR, "handleReceiveSyncEvent", (function(WW, RW, MW) {
                if (yR.props.syncId === WW) {
                  if (MW === yR.eventEmitterSymbol && "function" !== typeof yR.props.syncMethod) return;
                  yR.applySyncEvent(RW)
                }
              })), fM(yR, "handleBrushChange", (function(WW) {
                var RW = WW.startIndex,
                  MW = WW.endIndex;
                if (RW !== yR.state.dataStartIndex || MW !== yR.state.dataEndIndex) {
                  var wW = yR.state.updateId;
                  yR.setState((function() {
                    return FM({
                      dataStartIndex: RW,
                      dataEndIndex: MW
                    }, kR({
                      props: yR.props,
                      dataStartIndex: RW,
                      dataEndIndex: MW,
                      updateId: wW
                    }, yR.state))
                  })), yR.triggerSyncEvent({
                    dataStartIndex: RW,
                    dataEndIndex: MW
                  })
                }
              })), fM(yR, "handleMouseEnter", (function(WW) {
                var RW = yR.getMouseInfo(WW);
                if (RW) {
                  var MW = FM(FM({}, RW), {}, {
                    isTooltipActive: !0
                  });
                  yR.setState(MW), yR.triggerSyncEvent(MW);
                  var wW = yR.props.onMouseEnter;
                  bR()(wW) && wW(MW, WW)
                }
              })), fM(yR, "triggeredAfterMouseMove", (function(WW) {
                var RW = yR.getMouseInfo(WW),
                  MW = RW ? FM(FM({}, RW), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                yR.setState(MW), yR.triggerSyncEvent(MW);
                var wW = yR.props.onMouseMove;
                bR()(wW) && wW(MW, WW)
              })), fM(yR, "handleItemMouseEnter", (function(WW) {
                yR.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: WW,
                    activePayload: WW.tooltipPayload,
                    activeCoordinate: WW.tooltipPosition || {
                      x: WW.cx,
                      y: WW.cy
                    }
                  }
                }))
              })), fM(yR, "handleItemMouseLeave", (function() {
                yR.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), fM(yR, "handleMouseMove", (function(WW) {
                WW.persist(), yR.throttleTriggeredAfterMouseMove(WW)
              })), fM(yR, "handleMouseLeave", (function(WW) {
                yR.throttleTriggeredAfterMouseMove.cancel();
                var RW = {
                  isTooltipActive: !1
                };
                yR.setState(RW), yR.triggerSyncEvent(RW);
                var MW = yR.props.onMouseLeave;
                bR()(MW) && MW(RW, WW)
              })), fM(yR, "handleOuterEvent", (function(WW) {
                var RW, MW = (0, QW.n)(WW),
                  wW = BW()(yR.props, "".concat(MW));
                MW && bR()(wW) && wW(null !== (RW = /.*touch.*/i.test(MW) ? yR.getMouseInfo(WW.changedTouches[0]) : yR.getMouseInfo(WW)) && void 0 !== RW ? RW : {}, WW)
              })), fM(yR, "handleClick", (function(WW) {
                var RW = yR.getMouseInfo(WW);
                if (RW) {
                  var MW = FM(FM({}, RW), {}, {
                    isTooltipActive: !0
                  });
                  yR.setState(MW), yR.triggerSyncEvent(MW);
                  var wW = yR.props.onClick;
                  bR()(wW) && wW(MW, WW)
                }
              })), fM(yR, "handleMouseDown", (function(WW) {
                var RW = yR.props.onMouseDown;
                bR()(RW) && RW(yR.getMouseInfo(WW), WW)
              })), fM(yR, "handleMouseUp", (function(WW) {
                var RW = yR.props.onMouseUp;
                bR()(RW) && RW(yR.getMouseInfo(WW), WW)
              })), fM(yR, "handleTouchMove", (function(WW) {
                null != WW.changedTouches && WW.changedTouches.length > 0 && yR.throttleTriggeredAfterMouseMove(WW.changedTouches[0])
              })), fM(yR, "handleTouchStart", (function(WW) {
                null != WW.changedTouches && WW.changedTouches.length > 0 && yR.handleMouseDown(WW.changedTouches[0])
              })), fM(yR, "handleTouchEnd", (function(WW) {
                null != WW.changedTouches && WW.changedTouches.length > 0 && yR.handleMouseUp(WW.changedTouches[0])
              })), fM(yR, "handleDoubleClick", (function(WW) {
                var RW = yR.props.onDoubleClick;
                bR()(RW) && RW(yR.getMouseInfo(WW), WW)
              })), fM(yR, "handleContextMenu", (function(WW) {
                var RW = yR.props.onContextMenu;
                bR()(RW) && RW(yR.getMouseInfo(WW), WW)
              })), fM(yR, "triggerSyncEvent", (function(WW) {
                void 0 !== yR.props.syncId && dR.emit(pR, yR.props.syncId, WW, yR.eventEmitterSymbol)
              })), fM(yR, "applySyncEvent", (function(WW) {
                var RW = yR.props,
                  MW = RW.layout,
                  wW = RW.syncMethod,
                  CW = yR.state.updateId,
                  zR = WW.dataStartIndex,
                  AW = WW.dataEndIndex;
                if (void 0 !== WW.dataStartIndex || void 0 !== WW.dataEndIndex) yR.setState(FM({
                  dataStartIndex: zR,
                  dataEndIndex: AW
                }, kR({
                  props: yR.props,
                  dataStartIndex: zR,
                  dataEndIndex: AW,
                  updateId: CW
                }, yR.state)));
                else if (void 0 !== WW.activeTooltipIndex) {
                  var bR = WW.chartX,
                    NW = WW.chartY,
                    eW = WW.activeTooltipIndex,
                    BW = yR.state,
                    tR = BW.offset,
                    TW = BW.tooltipTicks;
                  if (!tR) return;
                  if ("function" === typeof wW) eW = wW(TW, WW);
                  else if ("value" === wW) {
                    eW = -1;
                    for (var gR = 0; gR < TW.length; gR++)
                      if (TW[gR].value === WW.activeLabel) {
                        eW = gR;
                        break
                      }
                  }
                  var iR = FM(FM({}, tR), {}, {
                      x: tR.left,
                      y: tR.top
                    }),
                    YW = Math.min(bR, iR.x + iR.width),
                    JW = Math.min(NW, iR.y + iR.height),
                    PW = TW[eW] && TW[eW].value,
                    IW = sM(yR.state, yR.props.data, eW),
                    oW = TW[eW] ? {
                      x: "horizontal" === MW ? TW[eW].coordinate : YW,
                      y: "horizontal" === MW ? JW : TW[eW].coordinate
                    } : XM;
                  yR.setState(FM(FM({}, WW), {}, {
                    activeLabel: PW,
                    activeCoordinate: oW,
                    activePayload: IW,
                    activeTooltipIndex: eW
                  }))
                } else yR.setState(WW)
              })), fM(yR, "renderCursor", (function(WW) {
                var MW, CW = yR.state,
                  zR = CW.isTooltipActive,
                  AW = CW.activeCoordinate,
                  bR = CW.activePayload,
                  NW = CW.offset,
                  eW = CW.activeTooltipIndex,
                  BW = CW.tooltipAxisBandSize,
                  tR = yR.getTooltipEventType(),
                  TW = null !== (MW = WW.props.active) && void 0 !== MW ? MW : zR,
                  gR = yR.props.layout,
                  iR = WW.key || "_recharts-cursor";
                return wW.createElement(zw, {
                  key: iR,
                  activeCoordinate: AW,
                  activePayload: bR,
                  activeTooltipIndex: eW,
                  chartName: RW,
                  element: WW,
                  isActive: TW,
                  layout: gR,
                  offset: NW,
                  tooltipAxisBandSize: BW,
                  tooltipEventType: tR
                })
              })), fM(yR, "renderPolarAxis", (function(WW, RW, MW) {
                var CW = BW()(WW, "type.axisType"),
                  zR = BW()(yR.state, "".concat(CW, "Map")),
                  AW = WW.type.defaultProps,
                  bR = void 0 !== AW ? FM(FM({}, AW), WW.props) : WW.props,
                  NW = zR && zR[bR["".concat(CW, "Id")]];
                return (0, wW.cloneElement)(WW, FM(FM({}, NW), {}, {
                  className: (0, YW.c)(CW, NW.className),
                  key: WW.key || "".concat(RW, "-").concat(MW),
                  ticks: (0, XW.Q)(NW, !0)
                }))
              })), fM(yR, "renderPolarGrid", (function(WW) {
                var RW = WW.props,
                  MW = RW.radialLines,
                  CW = RW.polarAngles,
                  zR = RW.polarRadius,
                  AW = yR.state,
                  bR = AW.radiusAxisMap,
                  NW = AW.angleAxisMap,
                  eW = (0, jR.h)(bR),
                  BW = (0, jR.h)(NW),
                  tR = BW.cx,
                  TW = BW.cy,
                  gR = BW.innerRadius,
                  iR = BW.outerRadius;
                return (0, wW.cloneElement)(WW, {
                  polarAngles: Array.isArray(CW) ? CW : (0, XW.Q)(BW, !0).map((function(WW) {
                    return WW.coordinate
                  })),
                  polarRadius: Array.isArray(zR) ? zR : (0, XW.Q)(eW, !0).map((function(WW) {
                    return WW.coordinate
                  })),
                  cx: tR,
                  cy: TW,
                  innerRadius: gR,
                  outerRadius: iR,
                  key: WW.key || "polar-grid",
                  radialLines: MW
                })
              })), fM(yR, "renderLegend", (function() {
                var WW = yR.state.formattedGraphicalItems,
                  RW = yR.props,
                  MW = RW.children,
                  CW = RW.width,
                  zR = RW.height,
                  AW = yR.props.margin || {},
                  bR = CW - (AW.left || 0) - (AW.right || 0),
                  NW = (0, DW.b)({
                    children: MW,
                    formattedGraphicalItems: WW,
                    legendWidth: bR,
                    legendContent: tR
                  });
                if (!NW) return null;
                var eW = NW.item,
                  BW = tw(NW, bw);
                return (0, wW.cloneElement)(eW, FM(FM({}, BW), {}, {
                  chartWidth: CW,
                  chartHeight: zR,
                  margin: AW,
                  onBBoxUpdate: yR.handleLegendBBoxUpdate
                }))
              })), fM(yR, "renderTooltip", (function() {
                var WW, RW = yR.props,
                  MW = RW.children,
                  CW = RW.accessibilityLayer,
                  zR = (0, QW.i)(MW, oW.b);
                if (!zR) return null;
                var AW = yR.state,
                  bR = AW.isTooltipActive,
                  NW = AW.activeCoordinate,
                  eW = AW.activePayload,
                  BW = AW.activeLabel,
                  tR = AW.offset,
                  TW = null !== (WW = zR.props.active) && void 0 !== WW ? WW : bR;
                return (0, wW.cloneElement)(zR, {
                  viewBox: FM(FM({}, tR), {}, {
                    x: tR.left,
                    y: tR.top
                  }),
                  active: TW,
                  label: BW,
                  payload: TW ? eW : [],
                  coordinate: NW,
                  accessibilityLayer: CW
                })
              })), fM(yR, "renderBrush", (function(WW) {
                var RW = yR.props,
                  MW = RW.margin,
                  CW = RW.data,
                  zR = yR.state,
                  AW = zR.offset,
                  bR = zR.dataStartIndex,
                  NW = zR.dataEndIndex,
                  eW = zR.updateId;
                return (0, wW.cloneElement)(WW, {
                  key: WW.key || "_recharts-brush",
                  onChange: (0, XW.h)(yR.handleBrushChange, WW.props.onChange),
                  data: CW,
                  x: (0, jR.u)(WW.props.x) ? WW.props.x : AW.left,
                  y: (0, jR.u)(WW.props.y) ? WW.props.y : AW.top + AW.height + AW.brushBottom - (MW.bottom || 0),
                  width: (0, jR.u)(WW.props.width) ? WW.props.width : AW.width,
                  startIndex: bR,
                  endIndex: NW,
                  updateId: "brush-".concat(eW)
                })
              })), fM(yR, "renderReferenceElement", (function(WW, RW, MW) {
                if (!WW) return null;
                var CW = yR.clipPathId,
                  zR = yR.state,
                  AW = zR.xAxisMap,
                  bR = zR.yAxisMap,
                  NW = zR.offset,
                  eW = WW.type.defaultProps || {},
                  BW = WW.props,
                  tR = BW.xAxisId,
                  TW = void 0 === tR ? eW.xAxisId : tR,
                  gR = BW.yAxisId,
                  iR = void 0 === gR ? eW.yAxisId : gR;
                return (0, wW.cloneElement)(WW, {
                  key: WW.key || "".concat(RW, "-").concat(MW),
                  xAxis: AW[TW],
                  yAxis: bR[iR],
                  viewBox: {
                    x: NW.left,
                    y: NW.top,
                    width: NW.width,
                    height: NW.height
                  },
                  clipPathId: CW
                })
              })), fM(yR, "renderActivePoints", (function(WW) {
                var RW = WW.item,
                  wW = WW.activePoint,
                  CW = WW.basePoint,
                  zR = WW.childIndex,
                  AW = WW.isRange,
                  bR = [],
                  yR = RW.props.key,
                  NW = void 0 !== RW.item.type.defaultProps ? FM(FM({}, RW.item.type.defaultProps), RW.item.props) : RW.item.props,
                  eW = NW.activeDot,
                  BW = FM(FM({
                    index: zR,
                    dataKey: NW.dataKey,
                    cx: wW.x,
                    cy: wW.y,
                    r: 4,
                    fill: (0, XW.J)(RW.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: wW.payload,
                    value: wW.value
                  }, (0, QW.e)(eW, !1)), (0, hR.m)(eW));
                return bR.push(MW.renderActiveDot(eW, BW, "".concat(yR, "-activePoint-").concat(zR))), CW ? bR.push(MW.renderActiveDot(eW, FM(FM({}, BW), {}, {
                  cx: CW.x,
                  cy: CW.y
                }), "".concat(yR, "-basePoint-").concat(zR))) : AW && bR.push(null), bR
              })), fM(yR, "renderGraphicChild", (function(WW, RW, MW) {
                var CW = yR.filterFormatItem(WW, RW, MW);
                if (!CW) return null;
                var AW = yR.getTooltipEventType(),
                  bR = yR.state,
                  NW = bR.isTooltipActive,
                  eW = bR.tooltipAxis,
                  BW = bR.activeTooltipIndex,
                  tR = bR.activeLabel,
                  TW = yR.props.children,
                  gR = (0, QW.i)(TW, oW.b),
                  iR = CW.props,
                  YW = iR.points,
                  JW = iR.isRange,
                  PW = iR.baseLine,
                  IW = void 0 !== CW.item.type.defaultProps ? FM(FM({}, CW.item.type.defaultProps), CW.item.props) : CW.item.props,
                  lW = IW.activeDot,
                  FW = IW.hide,
                  fW = IW.activeBar,
                  rR = IW.activeShape,
                  cR = Boolean(!FW && NW && gR && (lW || fW || rR)),
                  kR = {};
                "axis" !== AW && gR && "click" === gR.props.trigger ? kR = {
                  onClick: (0, XW.h)(yR.handleItemMouseEnter, WW.props.onClick)
                } : "axis" !== AW && (kR = {
                  onMouseLeave: (0, XW.h)(yR.handleItemMouseLeave, WW.props.onMouseLeave),
                  onMouseEnter: (0, XW.h)(yR.handleItemMouseEnter, WW.props.onMouseEnter)
                });
                var aR = (0, wW.cloneElement)(WW, FM(FM({}, CW.props), kR));
                if (cR) {
                  if (!(BW >= 0)) {
                    var sW, dW = (null !== (sW = yR.getItemByXY(yR.state.activeCoordinate)) && void 0 !== sW ? sW : {
                        graphicalItem: aR
                      }).graphicalItem,
                      pW = dW.item,
                      hW = void 0 === pW ? WW : pW,
                      UW = dW.childIndex,
                      EW = FM(FM(FM({}, CW.props), kR), {}, {
                        activeIndex: UW
                      });
                    return [(0, wW.cloneElement)(hW, EW), null, null]
                  }
                  var VW, mR;
                  if (eW.dataKey && !eW.allowDuplicatedCategory) {
                    var xR = "function" === typeof eW.dataKey ? function(WW) {
                      return "function" === typeof eW.dataKey ? eW.dataKey(WW.payload) : null
                    } : "payload.".concat(eW.dataKey.toString());
                    VW = (0, jR.g)(YW, xR, tR), mR = JW && PW && (0, jR.g)(PW, xR, tR)
                  } else VW = null === YW || void 0 === YW ? void 0 : YW[BW], mR = JW && PW && PW[BW];
                  if (rR || fW) {
                    var vR = void 0 !== WW.props.activeIndex ? WW.props.activeIndex : BW;
                    return [(0, wW.cloneElement)(WW, FM(FM(FM({}, CW.props), kR), {}, {
                      activeIndex: vR
                    })), null, null]
                  }
                  if (!zR()(VW)) return [aR].concat(PM(yR.renderActivePoints({
                    item: CW,
                    activePoint: VW,
                    basePoint: mR,
                    childIndex: BW,
                    isRange: JW
                  })))
                }
                return JW ? [aR, null, null] : [aR, null]
              })), fM(yR, "renderCustomized", (function(WW, RW, MW) {
                return (0, wW.cloneElement)(WW, FM(FM({
                  key: "recharts-customized-".concat(MW)
                }, yR.props), yR.state))
              })), fM(yR, "renderMap", {
                CartesianGrid: {
                  handler: jw,
                  once: !0
                },
                ReferenceArea: {
                  handler: yR.renderReferenceElement
                },
                ReferenceLine: {
                  handler: jw
                },
                ReferenceDot: {
                  handler: yR.renderReferenceElement
                },
                XAxis: {
                  handler: jw
                },
                YAxis: {
                  handler: jw
                },
                Brush: {
                  handler: yR.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: yR.renderGraphicChild
                },
                Line: {
                  handler: yR.renderGraphicChild
                },
                Area: {
                  handler: yR.renderGraphicChild
                },
                Radar: {
                  handler: yR.renderGraphicChild
                },
                RadialBar: {
                  handler: yR.renderGraphicChild
                },
                Scatter: {
                  handler: yR.renderGraphicChild
                },
                Pie: {
                  handler: yR.renderGraphicChild
                },
                Funnel: {
                  handler: yR.renderGraphicChild
                },
                Tooltip: {
                  handler: yR.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: yR.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: yR.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: yR.renderPolarAxis
                },
                Customized: {
                  handler: yR.renderCustomized
                }
              }), yR.clipPathId = "".concat(null !== (CW = WW.id) && void 0 !== CW ? CW : (0, jR.D)("recharts"), "-clip"), yR.throttleTriggeredAfterMouseMove = iR()(yR.triggeredAfterMouseMove, null !== (AW = WW.throttleDelay) && void 0 !== AW ? AW : 1e3 / 60), yR.state = {}, yR
            }
            return function(WW, RW) {
              if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
              WW.prototype = Object.create(RW && RW.prototype, {
                constructor: {
                  value: WW,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(WW, "prototype", {
                writable: !1
              }), RW && JM(WW, RW)
            }(MW, WW), CW = MW, yR = [{
              key: "componentDidMount",
              value: function() {
                var WW, RW;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (WW = this.props.margin.left) && void 0 !== WW ? WW : 0,
                    top: null !== (RW = this.props.margin.top) && void 0 !== RW ? RW : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var WW = this.props,
                  RW = WW.children,
                  MW = WW.data,
                  wW = WW.height,
                  CW = WW.layout,
                  zR = (0, QW.i)(RW, oW.b);
                if (zR) {
                  var AW = zR.props.defaultIndex;
                  if (!("number" !== typeof AW || AW < 0 || AW > this.state.tooltipTicks.length - 1)) {
                    var bR = this.state.tooltipTicks[AW] && this.state.tooltipTicks[AW].value,
                      yR = sM(this.state, MW, AW, bR),
                      NW = this.state.tooltipTicks[AW].coordinate,
                      eW = (this.state.offset.top + wW) / 2,
                      BW = "horizontal" === CW ? {
                        x: NW,
                        y: eW
                      } : {
                        y: NW,
                        x: eW
                      },
                      tR = this.state.formattedGraphicalItems.find((function(WW) {
                        return "Scatter" === WW.item.type.name
                      }));
                    tR && (BW = FM(FM({}, BW), tR.props.points[AW].tooltipPosition), yR = tR.props.points[AW].tooltipPayload);
                    var TW = {
                      activeTooltipIndex: AW,
                      isTooltipActive: !0,
                      activeLabel: bR,
                      activePayload: yR,
                      activeCoordinate: BW
                    };
                    this.setState(TW), this.renderCursor(zR), this.accessibilityManager.setIndex(AW)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(WW, RW) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== RW.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== WW.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== WW.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (MW = this.props.margin.left) && void 0 !== MW ? MW : 0,
                    top: null !== (wW = this.props.margin.top) && void 0 !== wW ? wW : 0
                  }
                }), null) : null;
                var MW, wW
              }
            }, {
              key: "componentDidUpdate",
              value: function(WW) {
                (0, QW.q)([(0, QW.i)(WW.children, oW.b)], [(0, QW.i)(this.props.children, oW.b)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var WW = (0, QW.i)(this.props.children, oW.b);
                if (WW && "boolean" === typeof WW.props.shared) {
                  var RW = WW.props.shared ? "axis" : "item";
                  return NW.indexOf(RW) >= 0 ? RW : AW
                }
                return AW
              }
            }, {
              key: "getMouseInfo",
              value: function(WW) {
                if (!this.container) return null;
                var RW = this.container,
                  MW = RW.getBoundingClientRect(),
                  wW = (0, HW.b)(MW),
                  CW = {
                    chartX: Math.round(WW.pageX - wW.left),
                    chartY: Math.round(WW.pageY - wW.top)
                  },
                  zR = MW.width / RW.offsetWidth || 1,
                  AW = this.inRange(CW.chartX, CW.chartY, zR);
                if (!AW) return null;
                var bR = this.state,
                  yR = bR.xAxisMap,
                  NW = bR.yAxisMap,
                  eW = this.getTooltipEventType(),
                  BW = dM(this.state, this.props.data, this.props.layout, AW);
                if ("axis" !== eW && yR && NW) {
                  var tR = (0, jR.h)(yR).scale,
                    TW = (0, jR.h)(NW).scale,
                    gR = tR && tR.invert ? tR.invert(CW.chartX) : null,
                    iR = TW && TW.invert ? TW.invert(CW.chartY) : null;
                  return FM(FM({}, CW), {}, {
                    xValue: gR,
                    yValue: iR
                  }, BW)
                }
                return BW ? FM(FM({}, CW), BW) : null
              }
            }, {
              key: "inRange",
              value: function(WW, RW) {
                var MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  wW = this.props.layout,
                  CW = WW / MW,
                  zR = RW / MW;
                if ("horizontal" === wW || "vertical" === wW) {
                  var AW = this.state.offset;
                  return CW >= AW.left && CW <= AW.left + AW.width && zR >= AW.top && zR <= AW.top + AW.height ? {
                    x: CW,
                    y: zR
                  } : null
                }
                var bR = this.state,
                  yR = bR.angleAxisMap,
                  NW = bR.radiusAxisMap;
                if (yR && NW) {
                  var eW = (0, jR.h)(yR);
                  return (0, kM.h)({
                    x: CW,
                    y: zR
                  }, eW)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var WW = this.props.children,
                  RW = this.getTooltipEventType(),
                  MW = (0, QW.i)(WW, oW.b),
                  wW = {};
                return MW && "axis" === RW && (wW = "click" === MW.props.trigger ? {
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
                }), FM(FM({}, (0, hR.m)(this.props, this.handleOuterEvent)), wW)
              }
            }, {
              key: "addListener",
              value: function() {
                dR.on(pR, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                dR.removeListener(pR, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(WW, RW, MW) {
                for (var wW = this.state.formattedGraphicalItems, CW = 0, zR = wW.length; CW < zR; CW++) {
                  var AW = wW[CW];
                  if (AW.item === WW || AW.props.key === WW.key || RW === (0, QW.j)(AW.item.type) && MW === AW.childIndex) return AW
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var WW = this.clipPathId,
                  RW = this.state.offset,
                  MW = RW.left,
                  CW = RW.top,
                  zR = RW.height,
                  AW = RW.width;
                return wW.createElement("defs", null, wW.createElement("clipPath", {
                  id: WW
                }, wW.createElement("rect", {
                  x: MW,
                  y: CW,
                  height: zR,
                  width: AW
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var WW = this.state.xAxisMap;
                return WW ? Object.entries(WW).reduce((function(WW, RW) {
                  var MW = BM(RW, 2),
                    wW = MW[0],
                    CW = MW[1];
                  return FM(FM({}, WW), {}, fM({}, wW, CW.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var WW = this.state.yAxisMap;
                return WW ? Object.entries(WW).reduce((function(WW, RW) {
                  var MW = BM(RW, 2),
                    wW = MW[0],
                    CW = MW[1];
                  return FM(FM({}, WW), {}, fM({}, wW, CW.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(WW) {
                var RW;
                return null === (RW = this.state.xAxisMap) || void 0 === RW || null === (RW = RW[WW]) || void 0 === RW ? void 0 : RW.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(WW) {
                var RW;
                return null === (RW = this.state.yAxisMap) || void 0 === RW || null === (RW = RW[WW]) || void 0 === RW ? void 0 : RW.scale
              }
            }, {
              key: "getItemByXY",
              value: function(WW) {
                var RW = this.state,
                  MW = RW.formattedGraphicalItems,
                  wW = RW.activeItem;
                if (MW && MW.length)
                  for (var CW = 0, zR = MW.length; CW < zR; CW++) {
                    var AW = MW[CW],
                      bR = AW.props,
                      yR = AW.item,
                      NW = void 0 !== yR.type.defaultProps ? FM(FM({}, yR.type.defaultProps), yR.props) : yR.props,
                      eW = (0, QW.j)(yR.type);
                    if ("Bar" === eW) {
                      var BW = (bR.data || []).find((function(RW) {
                        return (0, fW.g)(WW, RW)
                      }));
                      if (BW) return {
                        graphicalItem: AW,
                        payload: BW
                      }
                    } else if ("RadialBar" === eW) {
                      var tR = (bR.data || []).find((function(RW) {
                        return (0, kM.h)(WW, RW)
                      }));
                      if (tR) return {
                        graphicalItem: AW,
                        payload: tR
                      }
                    } else if ((0, vM.j)(AW, wW) || (0, vM.m)(AW, wW) || (0, vM.n)(AW, wW)) {
                      var TW = (0, vM.f)({
                          graphicalItem: AW,
                          activeTooltipItem: wW,
                          itemData: NW.data
                        }),
                        gR = void 0 === NW.activeIndex ? TW : NW.activeIndex;
                      return {
                        graphicalItem: FM(FM({}, AW), {}, {
                          childIndex: gR
                        }),
                        payload: (0, vM.n)(AW, wW) ? NW.data[TW] : AW.props.data[TW]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var WW = this;
                if (!(0, QW.x)(this)) return null;
                var RW, MW, CW = this.props,
                  zR = CW.children,
                  AW = CW.className,
                  bR = CW.width,
                  yR = CW.height,
                  NW = CW.style,
                  eW = CW.compact,
                  BW = CW.title,
                  tR = CW.desc,
                  TW = tw(CW, yw),
                  gR = (0, QW.e)(TW, !1);
                if (eW) return wW.createElement(AM.e, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, wW.createElement(PW.d, eM({}, gR, {
                  width: bR,
                  height: yR,
                  title: BW,
                  desc: tR
                }), this.renderClipPath(), (0, QW.v)(zR, this.renderMap)));
                this.props.accessibilityLayer && (gR.tabIndex = null !== (RW = this.props.tabIndex) && void 0 !== RW ? RW : 0, gR.role = null !== (MW = this.props.role) && void 0 !== MW ? MW : "application", gR.onKeyDown = function(RW) {
                  WW.accessibilityManager.keyboardEvent(RW)
                }, gR.onFocus = function() {
                  WW.accessibilityManager.focus()
                });
                var iR = this.parseEventsOfWrapper();
                return wW.createElement(AM.e, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, wW.createElement("div", eM({
                  className: (0, YW.c)("recharts-wrapper", AW),
                  style: FM({
                    position: "relative",
                    cursor: "default",
                    width: bR,
                    height: yR
                  }, NW)
                }, iR, {
                  ref: function(RW) {
                    WW.container = RW
                  }
                }), wW.createElement(PW.d, eM({}, gR, {
                  width: bR,
                  height: yR,
                  title: BW,
                  desc: tR,
                  style: cwW
                }), this.renderClipPath(), (0, QW.v)(zR, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], yR && TM(CW.prototype, yR), eW && TM(CW, eW), Object.defineProperty(CW, "prototype", {
              writable: !1
            }), CW;
            var CW, yR, eW
          }(wW.Component);
        fM(aR, "displayName", RW), fM(aR, "defaultProps", FM({
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
        }, rR)), fM(aR, "getDerivedStateFromProps", (function(WW, RW) {
          var MW = WW.dataKey,
            wW = WW.data,
            CW = WW.children,
            AW = WW.width,
            bR = WW.height,
            yR = WW.layout,
            NW = WW.stackOffset,
            eW = WW.margin,
            BW = RW.dataStartIndex,
            tR = RW.dataEndIndex;
          if (void 0 === RW.updateId) {
            var TW = UM(WW);
            return FM(FM(FM({}, TW), {}, {
              updateId: 0
            }, kR(FM(FM({
              props: WW
            }, TW), {}, {
              updateId: 0
            }), RW)), {}, {
              prevDataKey: MW,
              prevData: wW,
              prevWidth: AW,
              prevHeight: bR,
              prevLayout: yR,
              prevStackOffset: NW,
              prevMargin: eW,
              prevChildren: CW
            })
          }
          if (MW !== RW.prevDataKey || wW !== RW.prevData || AW !== RW.prevWidth || bR !== RW.prevHeight || yR !== RW.prevLayout || NW !== RW.prevStackOffset || !(0, aM.c)(eW, RW.prevMargin)) {
            var gR = UM(WW),
              iR = {
                chartX: RW.chartX,
                chartY: RW.chartY,
                isTooltipActive: RW.isTooltipActive
              },
              YW = FM(FM({}, dM(RW, wW, yR)), {}, {
                updateId: RW.updateId + 1
              }),
              JW = FM(FM(FM({}, gR), iR), YW);
            return FM(FM(FM({}, JW), kR(FM({
              props: WW
            }, JW), RW)), {}, {
              prevDataKey: MW,
              prevData: wW,
              prevWidth: AW,
              prevHeight: bR,
              prevLayout: yR,
              prevStackOffset: NW,
              prevMargin: eW,
              prevChildren: CW
            })
          }
          if (!(0, QW.q)(CW, RW.prevChildren)) {
            var PW, IW, oW, lW, FW = (0, QW.i)(CW, LW),
              fW = FW && null !== (PW = null === (IW = FW.props) || void 0 === IW ? void 0 : IW.startIndex) && void 0 !== PW ? PW : BW,
              rR = FW && null !== (oW = null === (lW = FW.props) || void 0 === lW ? void 0 : lW.endIndex) && void 0 !== oW ? oW : tR,
              cR = fW !== BW || rR !== tR,
              XW = !zR()(wW) && !cR ? RW.updateId : RW.updateId + 1;
            return FM(FM({
              updateId: XW
            }, kR(FM(FM({
              props: WW
            }, RW), {}, {
              updateId: XW,
              dataStartIndex: fW,
              dataEndIndex: rR
            }), RW)), {}, {
              prevChildren: CW,
              dataStartIndex: fW,
              dataEndIndex: rR
            })
          }
          return null
        })), fM(aR, "renderActiveDot", (function(WW, RW, MW) {
          var CW;
          return CW = (0, wW.isValidElement)(WW) ? (0, wW.cloneElement)(WW, RW) : bR()(WW) ? WW(RW) : wW.createElement(FW.c, RW), wW.createElement(IW.b, {
            className: "recharts-active-dot",
            key: MW
          }, CW)
        }));
        var sW = (0, wW.forwardRef)((function(WW, RW) {
          return wW.createElement(aR, eM({}, WW, {
            ref: RW
          }))
        }));
        return sW.displayName = aR.displayName, sW
      }
  },
  5259: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW
    });
    var wW = function(WW) {
      return null
    };
    wW.displayName = "Cell"
  },
  5205: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => kR
    });
    var wW = MW(75),
      CW = MW(4373),
      zR = MW.n(CW),
      AW = MW(4216),
      bR = MW.n(AW),
      yR = MW(4036),
      NW = MW.n(yR),
      eW = MW(4017),
      BW = MW(5103),
      tR = MW(4381),
      TW = MW(4103),
      gR = MW(5214);

    function iR(WW) {
      return iR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, iR(WW)
    }
    var YW = ["offset"];

    function JW(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return PW(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return PW(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return PW(WW, RW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function PW(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function IW(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function oW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function lW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? oW(Object(MW), !0).forEach((function(RW) {
          FW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : oW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function FW(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != iR(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != iR(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == iR(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function fW() {
      return fW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, fW.apply(this, arguments)
    }
    var QW = function(WW) {
        var RW = WW.value,
          MW = WW.formatter,
          wW = zR()(WW.children) ? RW : WW.children;
        return bR()(MW) ? MW(wW) : wW
      },
      rR = function(WW, RW, MW) {
        var CW, AW, bR = WW.position,
          yR = WW.viewBox,
          NW = WW.offset,
          BW = WW.className,
          tR = yR,
          iR = tR.cx,
          YW = tR.cy,
          JW = tR.innerRadius,
          PW = tR.outerRadius,
          IW = tR.startAngle,
          oW = tR.endAngle,
          lW = tR.clockWise,
          FW = (JW + PW) / 2,
          QW = function(WW, RW) {
            return (0, TW.B)(RW - WW) * Math.min(Math.abs(RW - WW), 360)
          }(IW, oW),
          rR = QW >= 0 ? 1 : -1;
        "insideStart" === bR ? (CW = IW + rR * NW, AW = lW) : "insideEnd" === bR ? (CW = oW - rR * NW, AW = !lW) : "end" === bR && (CW = oW + rR * NW, AW = lW), AW = QW <= 0 ? AW : !AW;
        var cR = (0, gR.i)(iR, YW, FW, CW),
          XW = (0, gR.i)(iR, YW, FW, CW + 359 * (AW ? 1 : -1)),
          jR = "M".concat(cR.x, ",").concat(cR.y, "\n    A").concat(FW, ",").concat(FW, ",0,1,").concat(AW ? 0 : 1, ",\n    ").concat(XW.x, ",").concat(XW.y),
          kR = zR()(WW.id) ? (0, TW.D)("recharts-radial-line-") : WW.id;
        return wW.createElement("text", fW({}, MW, {
          dominantBaseline: "central",
          className: (0, eW.c)("recharts-radial-bar-label", BW)
        }), wW.createElement("defs", null, wW.createElement("path", {
          id: kR,
          d: jR
        })), wW.createElement("textPath", {
          xlinkHref: "#".concat(kR)
        }, RW))
      },
      cR = function(WW) {
        var RW = WW.viewBox,
          MW = WW.offset,
          wW = WW.position,
          CW = RW,
          zR = CW.cx,
          AW = CW.cy,
          bR = CW.innerRadius,
          yR = CW.outerRadius,
          NW = (CW.startAngle + CW.endAngle) / 2;
        if ("outside" === wW) {
          var eW = (0, gR.i)(zR, AW, yR + MW, NW),
            BW = eW.x;
          return {
            x: BW,
            y: eW.y,
            textAnchor: BW >= zR ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === wW) return {
          x: zR,
          y: AW,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === wW) return {
          x: zR,
          y: AW,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === wW) return {
          x: zR,
          y: AW,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var tR = (bR + yR) / 2,
          TW = (0, gR.i)(zR, AW, tR, NW);
        return {
          x: TW.x,
          y: TW.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      XW = function(WW) {
        var RW = WW.viewBox,
          MW = WW.parentViewBox,
          wW = WW.offset,
          CW = WW.position,
          zR = RW,
          AW = zR.x,
          bR = zR.y,
          yR = zR.width,
          eW = zR.height,
          BW = eW >= 0 ? 1 : -1,
          tR = BW * wW,
          gR = BW > 0 ? "end" : "start",
          iR = BW > 0 ? "start" : "end",
          YW = yR >= 0 ? 1 : -1,
          JW = YW * wW,
          PW = YW > 0 ? "end" : "start",
          IW = YW > 0 ? "start" : "end";
        if ("top" === CW) return lW(lW({}, {
          x: AW + yR / 2,
          y: bR - BW * wW,
          textAnchor: "middle",
          verticalAnchor: gR
        }), MW ? {
          height: Math.max(bR - MW.y, 0),
          width: yR
        } : {});
        if ("bottom" === CW) return lW(lW({}, {
          x: AW + yR / 2,
          y: bR + eW + tR,
          textAnchor: "middle",
          verticalAnchor: iR
        }), MW ? {
          height: Math.max(MW.y + MW.height - (bR + eW), 0),
          width: yR
        } : {});
        if ("left" === CW) {
          var oW = {
            x: AW - JW,
            y: bR + eW / 2,
            textAnchor: PW,
            verticalAnchor: "middle"
          };
          return lW(lW({}, oW), MW ? {
            width: Math.max(oW.x - MW.x, 0),
            height: eW
          } : {})
        }
        if ("right" === CW) {
          var FW = {
            x: AW + yR + JW,
            y: bR + eW / 2,
            textAnchor: IW,
            verticalAnchor: "middle"
          };
          return lW(lW({}, FW), MW ? {
            width: Math.max(MW.x + MW.width - FW.x, 0),
            height: eW
          } : {})
        }
        var fW = MW ? {
          width: yR,
          height: eW
        } : {};
        return "insideLeft" === CW ? lW({
          x: AW + JW,
          y: bR + eW / 2,
          textAnchor: IW,
          verticalAnchor: "middle"
        }, fW) : "insideRight" === CW ? lW({
          x: AW + yR - JW,
          y: bR + eW / 2,
          textAnchor: PW,
          verticalAnchor: "middle"
        }, fW) : "insideTop" === CW ? lW({
          x: AW + yR / 2,
          y: bR + tR,
          textAnchor: "middle",
          verticalAnchor: iR
        }, fW) : "insideBottom" === CW ? lW({
          x: AW + yR / 2,
          y: bR + eW - tR,
          textAnchor: "middle",
          verticalAnchor: gR
        }, fW) : "insideTopLeft" === CW ? lW({
          x: AW + JW,
          y: bR + tR,
          textAnchor: IW,
          verticalAnchor: iR
        }, fW) : "insideTopRight" === CW ? lW({
          x: AW + yR - JW,
          y: bR + tR,
          textAnchor: PW,
          verticalAnchor: iR
        }, fW) : "insideBottomLeft" === CW ? lW({
          x: AW + JW,
          y: bR + eW - tR,
          textAnchor: IW,
          verticalAnchor: gR
        }, fW) : "insideBottomRight" === CW ? lW({
          x: AW + yR - JW,
          y: bR + eW - tR,
          textAnchor: PW,
          verticalAnchor: gR
        }, fW) : NW()(CW) && ((0, TW.u)(CW.x) || (0, TW.x)(CW.x)) && ((0, TW.u)(CW.y) || (0, TW.x)(CW.y)) ? lW({
          x: AW + (0, TW.k)(CW.x, yR),
          y: bR + (0, TW.k)(CW.y, eW),
          textAnchor: "end",
          verticalAnchor: "end"
        }, fW) : lW({
          x: AW + yR / 2,
          y: bR + eW / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, fW)
      },
      jR = function(WW) {
        return "cx" in WW && (0, TW.u)(WW.cx)
      };

    function kR(WW) {
      var RW, MW = WW.offset,
        CW = lW({
          offset: void 0 === MW ? 5 : MW
        }, IW(WW, YW)),
        AW = CW.viewBox,
        yR = CW.position,
        NW = CW.value,
        TW = CW.children,
        gR = CW.content,
        iR = CW.className,
        JW = void 0 === iR ? "" : iR,
        PW = CW.textBreakAll;
      if (!AW || zR()(NW) && zR()(TW) && !(0, wW.isValidElement)(gR) && !bR()(gR)) return null;
      if ((0, wW.isValidElement)(gR)) return (0, wW.cloneElement)(gR, CW);
      if (bR()(gR)) {
        if (RW = (0, wW.createElement)(gR, CW), (0, wW.isValidElement)(RW)) return RW
      } else RW = QW(CW);
      var oW = jR(AW),
        FW = (0, tR.e)(CW, !0);
      if (oW && ("insideStart" === yR || "insideEnd" === yR || "end" === yR)) return rR(CW, RW, FW);
      var kR = oW ? cR(CW) : XW(CW);
      return wW.createElement(BW.b, fW({
        className: (0, eW.c)("recharts-label", JW)
      }, FW, kR, {
        breakAll: PW
      }), RW)
    }
    kR.displayName = "Label";
    var aR = function(WW) {
      var RW = WW.cx,
        MW = WW.cy,
        wW = WW.angle,
        CW = WW.startAngle,
        zR = WW.endAngle,
        AW = WW.r,
        bR = WW.radius,
        yR = WW.innerRadius,
        NW = WW.outerRadius,
        eW = WW.x,
        BW = WW.y,
        tR = WW.top,
        gR = WW.left,
        iR = WW.width,
        YW = WW.height,
        JW = WW.clockWise,
        PW = WW.labelViewBox;
      if (PW) return PW;
      if ((0, TW.u)(iR) && (0, TW.u)(YW)) {
        if ((0, TW.u)(eW) && (0, TW.u)(BW)) return {
          x: eW,
          y: BW,
          width: iR,
          height: YW
        };
        if ((0, TW.u)(tR) && (0, TW.u)(gR)) return {
          x: tR,
          y: gR,
          width: iR,
          height: YW
        }
      }
      return (0, TW.u)(eW) && (0, TW.u)(BW) ? {
        x: eW,
        y: BW,
        width: 0,
        height: 0
      } : (0, TW.u)(RW) && (0, TW.u)(MW) ? {
        cx: RW,
        cy: MW,
        startAngle: CW || wW || 0,
        endAngle: zR || wW || 0,
        innerRadius: yR || 0,
        outerRadius: NW || bR || AW || 0,
        clockWise: JW
      } : WW.viewBox ? WW.viewBox : {}
    };
    kR.parseViewBox = aR, kR.renderCallByParent = function(WW, RW) {
      var MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!WW || !WW.children && MW && !WW.label) return null;
      var CW = WW.children,
        zR = aR(WW),
        AW = (0, tR.f)(CW, kR).map((function(WW, MW) {
          return (0, wW.cloneElement)(WW, {
            viewBox: RW || zR,
            key: "label-".concat(MW)
          })
        }));
      if (!MW) return AW;
      var yR = function(WW, RW) {
        return WW ? !0 === WW ? wW.createElement(kR, {
          key: "label-implicit",
          viewBox: RW
        }) : (0, TW.r)(WW) ? wW.createElement(kR, {
          key: "label-implicit",
          viewBox: RW,
          value: WW
        }) : (0, wW.isValidElement)(WW) ? WW.type === kR ? (0, wW.cloneElement)(WW, {
          key: "label-implicit",
          viewBox: RW
        }) : wW.createElement(kR, {
          key: "label-implicit",
          content: WW,
          viewBox: RW
        }) : bR()(WW) ? wW.createElement(kR, {
          key: "label-implicit",
          content: WW,
          viewBox: RW
        }) : NW()(WW) ? wW.createElement(kR, fW({
          viewBox: RW
        }, WW, {
          key: "label-implicit"
        })) : null : null
      }(WW.label, RW || zR);
      return [yR].concat(JW(AW))
    }
  },
  5266: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => XW
    });
    var wW = MW(75),
      CW = MW(4373),
      zR = MW.n(CW),
      AW = MW(4036),
      bR = MW.n(AW),
      yR = MW(4216),
      NW = MW.n(yR),
      eW = MW(5275),
      BW = MW.n(eW),
      tR = MW(5205),
      TW = MW(4938),
      gR = MW(4381),
      iR = MW(5115);

    function YW(WW) {
      return YW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, YW(WW)
    }
    var JW = ["valueAccessor"],
      PW = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function IW(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return oW(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return oW(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return oW(WW, RW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function oW(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function lW() {
      return lW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, lW.apply(this, arguments)
    }

    function FW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function fW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? FW(Object(MW), !0).forEach((function(RW) {
          QW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : FW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function QW(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != YW(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != YW(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == YW(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function rR(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }
    var cR = function(WW) {
      return Array.isArray(WW.value) ? BW()(WW.value) : WW.value
    };

    function XW(WW) {
      var RW = WW.valueAccessor,
        MW = void 0 === RW ? cR : RW,
        CW = rR(WW, JW),
        AW = CW.data,
        bR = CW.dataKey,
        yR = CW.clockWise,
        NW = CW.id,
        eW = CW.textBreakAll,
        BW = rR(CW, PW);
      return AW && AW.length ? wW.createElement(TW.b, {
        className: "recharts-label-list"
      }, AW.map((function(WW, RW) {
        var CW = zR()(bR) ? MW(WW, RW) : (0, iR.Z)(WW && WW.payload, bR),
          AW = zR()(NW) ? {} : {
            id: "".concat(NW, "-").concat(RW)
          };
        return wW.createElement(tR.d, lW({}, (0, gR.e)(WW, !0), BW, AW, {
          parentViewBox: WW.parentViewBox,
          value: CW,
          textBreakAll: eW,
          viewBox: tR.d.parseViewBox(zR()(yR) ? WW : fW(fW({}, WW), {}, {
            clockWise: yR
          })),
          key: "label-".concat(RW),
          index: RW
        }))
      }))) : null
    }
    XW.displayName = "LabelList", XW.renderCallByParent = function(WW, RW) {
      var MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!WW || !WW.children && MW && !WW.label) return null;
      var CW = WW.children,
        zR = (0, gR.f)(CW, XW).map((function(WW, MW) {
          return (0, wW.cloneElement)(WW, {
            data: RW,
            key: "labelList-".concat(MW)
          })
        }));
      return MW ? [function(WW, RW) {
        return WW ? !0 === WW ? wW.createElement(XW, {
          key: "labelList-implicit",
          data: RW
        }) : wW.isValidElement(WW) || NW()(WW) ? wW.createElement(XW, {
          key: "labelList-implicit",
          data: RW,
          content: WW
        }) : bR()(WW) ? wW.createElement(XW, lW({
          data: RW
        }, WW, {
          key: "labelList-implicit"
        })) : null : null
      }(WW.label, RW)].concat(IW(zR)) : zR
    }
  },
  5016: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => mR
    });
    var wW = MW(75),
      CW = MW(4216),
      zR = MW.n(CW),
      AW = MW(4017),
      bR = MW(4376),
      yR = MW(4929),
      NW = MW(5022),
      eW = MW(4407);

    function BW(WW) {
      return BW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, BW(WW)
    }

    function tR() {
      return tR = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, tR.apply(this, arguments)
    }

    function TW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function gR(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, oW(wW.key), wW)
      }
    }

    function iR(WW, RW, MW) {
      return RW = JW(RW),
        function(WW, RW) {
          if (RW && ("object" === BW(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, YW() ? Reflect.construct(RW, MW || [], JW(WW).constructor) : RW.apply(WW, MW))
    }

    function YW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (YW = function() {
        return !!WW
      })()
    }

    function JW(WW) {
      return JW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, JW(WW)
    }

    function PW(WW, RW) {
      return PW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, PW(WW, RW)
    }

    function IW(WW, RW, MW) {
      return (RW = oW(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function oW(WW) {
      var RW = function(WW, RW) {
        if ("object" != BW(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != BW(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == BW(RW) ? RW : RW + ""
    }
    var lW = 32,
      FW = function(WW) {
        function RW() {
          return function(WW, RW) {
            if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
          }(this, RW), iR(this, RW, arguments)
        }
        return function(WW, RW) {
          if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
          WW.prototype = Object.create(RW && RW.prototype, {
            constructor: {
              value: WW,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(WW, "prototype", {
            writable: !1
          }), RW && PW(WW, RW)
        }(RW, WW), MW = RW, CW = [{
          key: "renderIcon",
          value: function(WW) {
            var RW = this.props.inactiveColor,
              MW = 16,
              CW = lW / 6,
              zR = lW / 3,
              AW = WW.inactive ? RW : WW.color;
            if ("plainline" === WW.type) return wW.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: AW,
              strokeDasharray: WW.payload.strokeDasharray,
              x1: 0,
              y1: MW,
              x2: lW,
              y2: MW,
              className: "recharts-legend-icon"
            });
            if ("line" === WW.type) return wW.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: AW,
              d: "M0,".concat(MW, "h").concat(zR, "\n            A").concat(CW, ",").concat(CW, ",0,1,1,").concat(2 * zR, ",").concat(MW, "\n            H").concat(lW, "M").concat(2 * zR, ",").concat(MW, "\n            A").concat(CW, ",").concat(CW, ",0,1,1,").concat(zR, ",").concat(MW),
              className: "recharts-legend-icon"
            });
            if ("rect" === WW.type) return wW.createElement("path", {
              stroke: "none",
              fill: AW,
              d: "M0,".concat(4, "h").concat(lW, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (wW.isValidElement(WW.legendIcon)) {
              var bR = function(WW) {
                for (var RW = 1; RW < arguments.length; RW++) {
                  var MW = null != arguments[RW] ? arguments[RW] : {};
                  RW % 2 ? TW(Object(MW), !0).forEach((function(RW) {
                    IW(WW, RW, MW[RW])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : TW(Object(MW)).forEach((function(RW) {
                    Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
                  }))
                }
                return WW
              }({}, WW);
              return delete bR.legendIcon, wW.cloneElement(WW.legendIcon, bR)
            }
            return wW.createElement(NW.d, {
              fill: AW,
              cx: MW,
              cy: MW,
              size: lW,
              sizeType: "diameter",
              type: WW.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var WW = this,
              RW = this.props,
              MW = RW.payload,
              CW = RW.iconSize,
              NW = RW.layout,
              BW = RW.formatter,
              TW = RW.inactiveColor,
              gR = {
                x: 0,
                y: 0,
                width: lW,
                height: lW
              },
              iR = {
                display: "horizontal" === NW ? "inline-block" : "block",
                marginRight: 10
              },
              YW = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return MW.map((function(RW, MW) {
              var NW = RW.formatter || BW,
                JW = (0, AW.c)(IW(IW({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(MW), !0), "inactive", RW.inactive));
              if ("none" === RW.type) return null;
              var PW = zR()(RW.value) ? null : RW.value;
              (0, bR.d)(!zR()(RW.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var oW = RW.inactive ? TW : RW.color;
              return wW.createElement("li", tR({
                className: JW,
                style: iR,
                key: "legend-item-".concat(MW)
              }, (0, eW.q)(WW.props, RW, MW)), wW.createElement(yR.d, {
                width: CW,
                height: CW,
                viewBox: gR,
                style: YW
              }, WW.renderIcon(RW)), wW.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: oW
                }
              }, NW ? NW(PW, RW, MW) : PW))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var WW = this.props,
              RW = WW.payload,
              MW = WW.layout,
              CW = WW.align;
            if (!RW || !RW.length) return null;
            var zR = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === MW ? CW : "left"
            };
            return wW.createElement("ul", {
              className: "recharts-default-legend",
              style: zR
            }, this.renderItems())
          }
        }], CW && gR(MW.prototype, CW), BW && gR(MW, BW), Object.defineProperty(MW, "prototype", {
          writable: !1
        }), MW;
        var MW, CW, BW
      }(wW.PureComponent);
    IW(FW, "displayName", "Legend"), IW(FW, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var fW = MW(4103),
      QW = MW(4954);

    function rR(WW) {
      return rR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, rR(WW)
    }
    var cR = ["ref"];

    function XW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function jR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? XW(Object(MW), !0).forEach((function(RW) {
          hW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : XW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function kR(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, UW(wW.key), wW)
      }
    }

    function aR(WW, RW, MW) {
      return RW = dW(RW),
        function(WW, RW) {
          if (RW && ("object" === rR(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, sW() ? Reflect.construct(RW, MW || [], dW(WW).constructor) : RW.apply(WW, MW))
    }

    function sW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (sW = function() {
        return !!WW
      })()
    }

    function dW(WW) {
      return dW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, dW(WW)
    }

    function pW(WW, RW) {
      return pW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, pW(WW, RW)
    }

    function hW(WW, RW, MW) {
      return (RW = UW(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function UW(WW) {
      var RW = function(WW, RW) {
        if ("object" != rR(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != rR(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == rR(RW) ? RW : RW + ""
    }

    function EW(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function VW(WW) {
      return WW.value
    }
    var mR = function(WW) {
      function RW() {
        var WW;
        ! function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, RW);
        for (var MW = arguments.length, wW = new Array(MW), CW = 0; CW < MW; CW++) wW[CW] = arguments[CW];
        return hW(WW = aR(this, RW, [].concat(wW)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), WW
      }
      return function(WW, RW) {
        if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(RW && RW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), RW && pW(WW, RW)
      }(RW, WW), MW = RW, zR = [{
        key: "getWithHeight",
        value: function(WW, RW) {
          var MW = jR(jR({}, this.defaultProps), WW.props).layout;
          return "vertical" === MW && (0, fW.u)(WW.props.height) ? {
            height: WW.props.height
          } : "horizontal" === MW ? {
            width: WW.props.width || RW
          } : null
        }
      }], (CW = [{
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
            var WW = this.wrapperNode.getBoundingClientRect();
            return WW.height = this.wrapperNode.offsetHeight, WW.width = this.wrapperNode.offsetWidth, WW
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var WW = this.props.onBBoxUpdate,
            RW = this.getBBox();
          RW ? (Math.abs(RW.width - this.lastBoundingBox.width) > 1 || Math.abs(RW.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = RW.width, this.lastBoundingBox.height = RW.height, WW && WW(RW)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, WW && WW(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? jR({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(WW) {
          var RW, MW, wW = this.props,
            CW = wW.layout,
            zR = wW.align,
            AW = wW.verticalAlign,
            bR = wW.margin,
            yR = wW.chartWidth,
            NW = wW.chartHeight;
          return WW && (void 0 !== WW.left && null !== WW.left || void 0 !== WW.right && null !== WW.right) || (RW = "center" === zR && "vertical" === CW ? {
            left: ((yR || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === zR ? {
            right: bR && bR.right || 0
          } : {
            left: bR && bR.left || 0
          }), WW && (void 0 !== WW.top && null !== WW.top || void 0 !== WW.bottom && null !== WW.bottom) || (MW = "middle" === AW ? {
            top: ((NW || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === AW ? {
            bottom: bR && bR.bottom || 0
          } : {
            top: bR && bR.top || 0
          }), jR(jR({}, RW), MW)
        }
      }, {
        key: "render",
        value: function() {
          var WW = this,
            RW = this.props,
            MW = RW.content,
            CW = RW.width,
            zR = RW.height,
            AW = RW.wrapperStyle,
            bR = RW.payloadUniqBy,
            yR = RW.payload,
            NW = jR(jR({
              position: "absolute",
              width: CW || "auto",
              height: zR || "auto"
            }, this.getDefaultPosition(AW)), AW);
          return wW.createElement("div", {
            className: "recharts-legend-wrapper",
            style: NW,
            ref: function(RW) {
              WW.wrapperNode = RW
            }
          }, function(WW, RW) {
            if (wW.isValidElement(WW)) return wW.cloneElement(WW, RW);
            if ("function" === typeof WW) return wW.createElement(WW, RW);
            RW.ref;
            var MW = EW(RW, cR);
            return wW.createElement(FW, MW)
          }(MW, jR(jR({}, this.props), {}, {
            payload: (0, QW.c)(yR, bR, VW)
          })))
        }
      }]) && kR(MW.prototype, CW), zR && kR(MW, zR), Object.defineProperty(MW, "prototype", {
        writable: !1
      }), MW;
      var MW, CW, zR
    }(wW.PureComponent);
    hW(mR, "displayName", "Legend"), hW(mR, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  4013: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => YW
    });
    var wW = MW(4017),
      CW = MW(75),
      zR = MW(4019),
      AW = MW.n(zR),
      bR = MW(4103),
      yR = MW(4376),
      NW = MW(4381);

    function eW(WW) {
      return eW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, eW(WW)
    }

    function BW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function tR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? BW(Object(MW), !0).forEach((function(RW) {
          TW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : BW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function TW(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != eW(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != eW(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == eW(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function gR(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        var MW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != MW) {
          var wW, CW, zR, AW, bR = [],
            yR = !0,
            NW = !1;
          try {
            if (zR = (MW = MW.call(WW)).next, 0 === RW) {
              if (Object(MW) !== MW) return;
              yR = !1
            } else
              for (; !(yR = (wW = zR.call(MW)).done) && (bR.push(wW.value), bR.length !== RW); yR = !0);
          } catch (WW) {
            NW = !0, CW = WW
          } finally {
            try {
              if (!yR && null != MW.return && (AW = MW.return(), Object(AW) !== AW)) return
            } finally {
              if (NW) throw CW
            }
          }
          return bR
        }
      }(WW, RW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return iR(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return iR(WW, RW)
      }(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iR(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }
    var YW = (0, CW.forwardRef)((function(WW, RW) {
      var MW = WW.aspect,
        zR = WW.initialDimension,
        eW = void 0 === zR ? {
          width: -1,
          height: -1
        } : zR,
        BW = WW.width,
        TW = void 0 === BW ? "100%" : BW,
        iR = WW.height,
        YW = void 0 === iR ? "100%" : iR,
        JW = WW.minWidth,
        PW = void 0 === JW ? 0 : JW,
        IW = WW.minHeight,
        oW = WW.maxHeight,
        lW = WW.children,
        FW = WW.debounce,
        fW = void 0 === FW ? 0 : FW,
        QW = WW.id,
        rR = WW.className,
        cR = WW.FQ,
        XW = WW.style,
        jR = void 0 === XW ? {} : XW,
        kR = (0, CW.useRef)(null),
        aR = (0, CW.useRef)();
      aR.current = cR, (0, CW.useImperativeHandle)(RW, (function() {
        return Object.defineProperty(kR.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), kR.current
          },
          configurable: !0
        })
      }));
      var sW = gR((0, CW.useState)({
          containerWidth: eW.width,
          containerHeight: eW.height
        }), 2),
        dW = sW[0],
        pW = sW[1],
        hW = (0, CW.useCallback)((function(WW, RW) {
          pW((function(MW) {
            var wW = Math.round(WW),
              CW = Math.round(RW);
            return MW.containerWidth === wW && MW.containerHeight === CW ? MW : {
              containerWidth: wW,
              containerHeight: CW
            }
          }))
        }), []);
      (0, CW.useEffect)((function() {
        var WW = function(WW) {
          var RW, MW = WW[0].contentRect,
            wW = MW.width,
            CW = MW.height;
          hW(wW, CW), null === (RW = aR.current) || void 0 === RW || RW.call(aR, wW, CW)
        };
        fW > 0 && (WW = AW()(WW, fW, {
          trailing: !0,
          leading: !1
        }));
        var RW = new ResizeObserver(WW),
          MW = kR.current.getBoundingClientRect(),
          wW = MW.width,
          CW = MW.height;
        return hW(wW, CW), RW.observe(kR.current),
          function() {
            RW.disconnect()
          }
      }), [hW, fW]);
      var UW = (0, CW.useMemo)((function() {
        var WW = dW.containerWidth,
          RW = dW.containerHeight;
        if (WW < 0 || RW < 0) return null;
        (0, yR.d)((0, bR.x)(TW) || (0, bR.x)(YW), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", TW, YW), (0, yR.d)(!MW || MW > 0, "The aspect(%s) must be greater than zero.", MW);
        var wW = (0, bR.x)(TW) ? WW : TW,
          zR = (0, bR.x)(YW) ? RW : YW;
        MW && MW > 0 && (wW ? zR = wW / MW : zR && (wW = zR * MW), oW && zR > oW && (zR = oW)), (0, yR.d)(wW > 0 || zR > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", wW, zR, TW, YW, PW, IW, MW);
        var AW = !Array.isArray(lW) && (0, NW.j)(lW.type).endsWith("Chart");
        return CW.Children.map(lW, (function(WW) {
          return CW.isValidElement(WW) ? (0, CW.cloneElement)(WW, tR({
            width: wW,
            height: zR
          }, AW ? {
            style: tR({
              height: "100%",
              width: "100%",
              maxHeight: zR,
              maxWidth: wW
            }, WW.props.style)
          } : {})) : WW
        }))
      }), [MW, lW, YW, oW, IW, PW, dW, TW]);
      return CW.createElement("div", {
        id: QW ? "".concat(QW) : void 0,
        className: (0, wW.c)("recharts-responsive-container", rR),
        style: tR(tR({}, jR), {}, {
          width: TW,
          height: YW,
          minWidth: PW,
          minHeight: IW,
          maxHeight: oW
        }),
        ref: kR
      }, UW)
    }))
  },
  5103: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => xR
    });
    var wW = MW(75),
      CW = MW(4373),
      zR = MW.n(CW),
      AW = MW(4017),
      bR = MW(4103),
      yR = MW(4945),
      NW = MW(4381),
      eW = MW(5106);

    function BW(WW) {
      return BW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, BW(WW)
    }

    function tR(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        var MW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != MW) {
          var wW, CW, zR, AW, bR = [],
            yR = !0,
            NW = !1;
          try {
            if (zR = (MW = MW.call(WW)).next, 0 === RW) {
              if (Object(MW) !== MW) return;
              yR = !1
            } else
              for (; !(yR = (wW = zR.call(MW)).done) && (bR.push(wW.value), bR.length !== RW); yR = !0);
          } catch (WW) {
            NW = !0, CW = WW
          } finally {
            try {
              if (!yR && null != MW.return && (AW = MW.return(), Object(AW) !== AW)) return
            } finally {
              if (NW) throw CW
            }
          }
          return bR
        }
      }(WW, RW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return TW(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return TW(WW, RW)
      }(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function TW(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function gR(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, iR(wW.key), wW)
      }
    }

    function iR(WW) {
      var RW = function(WW, RW) {
        if ("object" != BW(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != BW(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == BW(RW) ? RW : RW + ""
    }
    var YW = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      JW = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      PW = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      IW = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      oW = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      lW = Object.keys(oW),
      FW = "NaN";
    var fW = function() {
      function WW(RW, MW) {
        ! function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, WW), this.num = RW, this.unit = MW, this.num = RW, this.unit = MW, Number.isNaN(RW) && (this.unit = ""), "" === MW || PW.test(MW) || (this.num = NaN, this.unit = ""), lW.includes(MW) && (this.num = function(WW, RW) {
          return WW * oW[RW]
        }(RW, MW), this.unit = "px")
      }
      return RW = WW, wW = [{
        key: "parse",
        value: function(RW) {
          var MW, wW = tR(null !== (MW = IW.exec(RW)) && void 0 !== MW ? MW : [], 3),
            CW = wW[1],
            zR = wW[2];
          return new WW(parseFloat(CW), null !== zR && void 0 !== zR ? zR : "")
        }
      }], (MW = [{
        key: "add",
        value: function(RW) {
          return this.unit !== RW.unit ? new WW(NaN, "") : new WW(this.num + RW.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(RW) {
          return this.unit !== RW.unit ? new WW(NaN, "") : new WW(this.num - RW.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(RW) {
          return "" !== this.unit && "" !== RW.unit && this.unit !== RW.unit ? new WW(NaN, "") : new WW(this.num * RW.num, this.unit || RW.unit)
        }
      }, {
        key: "divide",
        value: function(RW) {
          return "" !== this.unit && "" !== RW.unit && this.unit !== RW.unit ? new WW(NaN, "") : new WW(this.num / RW.num, this.unit || RW.unit)
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
      }]) && gR(RW.prototype, MW), wW && gR(RW, wW), Object.defineProperty(RW, "prototype", {
        writable: !1
      }), RW;
      var RW, MW, wW
    }();

    function QW(WW) {
      if (WW.includes(FW)) return FW;
      for (var RW = WW; RW.includes("*") || RW.includes("/");) {
        var MW, wW = tR(null !== (MW = YW.exec(RW)) && void 0 !== MW ? MW : [], 4),
          CW = wW[1],
          zR = wW[2],
          AW = wW[3],
          bR = fW.parse(null !== CW && void 0 !== CW ? CW : ""),
          yR = fW.parse(null !== AW && void 0 !== AW ? AW : ""),
          NW = "*" === zR ? bR.multiply(yR) : bR.divide(yR);
        if (NW.isNaN()) return FW;
        RW = RW.replace(YW, NW.toString())
      }
      for (; RW.includes("+") || /.-\d+(?:\.\d+)?/.test(RW);) {
        var eW, BW = tR(null !== (eW = JW.exec(RW)) && void 0 !== eW ? eW : [], 4),
          TW = BW[1],
          gR = BW[2],
          iR = BW[3],
          PW = fW.parse(null !== TW && void 0 !== TW ? TW : ""),
          IW = fW.parse(null !== iR && void 0 !== iR ? iR : ""),
          oW = "+" === gR ? PW.add(IW) : PW.subtract(IW);
        if (oW.isNaN()) return FW;
        RW = RW.replace(JW, oW.toString())
      }
      return RW
    }
    var rR = /\(([^()]*)\)/;

    function cR(WW) {
      var RW = WW.replace(/\s+/g, "");
      return RW = function(WW) {
        for (var RW = WW; RW.includes("(");) {
          var MW = tR(rR.exec(RW), 2)[1];
          RW = RW.replace(rR, QW(MW))
        }
        return RW
      }(RW), RW = QW(RW)
    }

    function XW(WW) {
      var RW = function(WW) {
        try {
          return cR(WW)
        } catch (RW) {
          return FW
        }
      }(WW.slice(5, -1));
      return RW === FW ? "" : RW
    }
    var jR = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      kR = ["dx", "dy", "angle", "className", "breakAll"];

    function aR() {
      return aR = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, aR.apply(this, arguments)
    }

    function sW(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function dW(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        var MW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != MW) {
          var wW, CW, zR, AW, bR = [],
            yR = !0,
            NW = !1;
          try {
            if (zR = (MW = MW.call(WW)).next, 0 === RW) {
              if (Object(MW) !== MW) return;
              yR = !1
            } else
              for (; !(yR = (wW = zR.call(MW)).done) && (bR.push(wW.value), bR.length !== RW); yR = !0);
          } catch (WW) {
            NW = !0, CW = WW
          } finally {
            try {
              if (!yR && null != MW.return && (AW = MW.return(), Object(AW) !== AW)) return
            } finally {
              if (NW) throw CW
            }
          }
          return bR
        }
      }(WW, RW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return pW(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return pW(WW, RW)
      }(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pW(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }
    var hW = /[ \f\n\r\t\v\u2028\u2029]+/,
      UW = function(WW) {
        var RW = WW.children,
          MW = WW.breakAll,
          wW = WW.style;
        try {
          var CW = [];
          return zR()(RW) || (CW = MW ? RW.toString().split("") : RW.toString().split(hW)), {
            wordsWithComputedWidth: CW.map((function(WW) {
              return {
                word: WW,
                width: (0, eW.c)(WW, wW).width
              }
            })),
            spaceWidth: MW ? 0 : (0, eW.c)("\xa0", wW).width
          }
        } catch (AW) {
          return null
        }
      },
      EW = function(WW) {
        return [{
          words: zR()(WW) ? [] : WW.toString().split(hW)
        }]
      },
      VW = function(WW) {
        var RW = WW.width,
          MW = WW.scaleToFit,
          wW = WW.children,
          CW = WW.style,
          zR = WW.breakAll,
          AW = WW.maxLines;
        if ((RW || MW) && !yR.b.isSsr) {
          var NW = UW({
            breakAll: zR,
            children: wW,
            style: CW
          });
          return NW ? function(WW, RW, MW, wW, CW) {
            var zR = WW.maxLines,
              AW = WW.children,
              yR = WW.style,
              NW = WW.breakAll,
              eW = (0, bR.u)(zR),
              BW = AW,
              tR = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(WW, RW) {
                  var zR = RW.word,
                    AW = RW.width,
                    bR = WW[WW.length - 1];
                  if (bR && (null == wW || CW || bR.width + AW + MW < Number(wW))) bR.words.push(zR), bR.width += AW + MW;
                  else {
                    var yR = {
                      words: [zR],
                      width: AW
                    };
                    WW.push(yR)
                  }
                  return WW
                }), [])
              },
              TW = tR(RW);
            if (!eW) return TW;
            for (var gR, iR = function(WW) {
                var RW = BW.slice(0, WW),
                  MW = UW({
                    breakAll: NW,
                    style: yR,
                    children: RW + "\u2026"
                  }).wordsWithComputedWidth,
                  CW = tR(MW),
                  AW = CW.length > zR || function(WW) {
                    return WW.reduce((function(WW, RW) {
                      return WW.width > RW.width ? WW : RW
                    }))
                  }(CW).width > Number(wW);
                return [AW, CW]
              }, YW = 0, JW = BW.length - 1, PW = 0; YW <= JW && PW <= BW.length - 1;) {
              var IW = Math.floor((YW + JW) / 2),
                oW = dW(iR(IW - 1), 2),
                lW = oW[0],
                FW = oW[1],
                fW = dW(iR(IW), 1)[0];
              if (lW || fW || (YW = IW + 1), lW && fW && (JW = IW - 1), !lW && fW) {
                gR = FW;
                break
              }
              PW++
            }
            return gR || TW
          }({
            breakAll: zR,
            children: wW,
            maxLines: AW,
            style: CW
          }, NW.wordsWithComputedWidth, NW.spaceWidth, RW, MW) : EW(wW)
        }
        return EW(wW)
      },
      mR = "#808080",
      xR = function(WW) {
        var RW = WW.x,
          MW = void 0 === RW ? 0 : RW,
          CW = WW.y,
          zR = void 0 === CW ? 0 : CW,
          yR = WW.lineHeight,
          eW = void 0 === yR ? "1em" : yR,
          BW = WW.capHeight,
          tR = void 0 === BW ? "0.71em" : BW,
          TW = WW.scaleToFit,
          gR = void 0 !== TW && TW,
          iR = WW.textAnchor,
          YW = void 0 === iR ? "start" : iR,
          JW = WW.verticalAnchor,
          PW = void 0 === JW ? "end" : JW,
          IW = WW.fill,
          oW = void 0 === IW ? mR : IW,
          lW = sW(WW, jR),
          FW = (0, wW.useMemo)((function() {
            return VW({
              breakAll: lW.breakAll,
              children: lW.children,
              maxLines: lW.maxLines,
              scaleToFit: gR,
              style: lW.style,
              width: lW.width
            })
          }), [lW.breakAll, lW.children, lW.maxLines, gR, lW.style, lW.width]),
          fW = lW.dx,
          QW = lW.dy,
          rR = lW.angle,
          cR = lW.className,
          dW = lW.breakAll,
          pW = sW(lW, kR);
        if (!(0, bR.r)(MW) || !(0, bR.r)(zR)) return null;
        var hW, UW = MW + ((0, bR.u)(fW) ? fW : 0),
          EW = zR + ((0, bR.u)(QW) ? QW : 0);
        switch (PW) {
          case "start":
            hW = XW("calc(".concat(tR, ")"));
            break;
          case "middle":
            hW = XW("calc(".concat((FW.length - 1) / 2, " * -").concat(eW, " + (").concat(tR, " / 2))"));
            break;
          default:
            hW = XW("calc(".concat(FW.length - 1, " * -").concat(eW, ")"))
        }
        var xR = [];
        if (gR) {
          var vR = FW[0].width,
            KW = lW.width;
          xR.push("scale(".concat(((0, bR.u)(KW) ? KW / vR : 1) / vR, ")"))
        }
        return rR && xR.push("rotate(".concat(rR, ", ").concat(UW, ", ").concat(EW, ")")), xR.length && (pW.transform = xR.join(" ")), wW.createElement("text", aR({}, (0, NW.e)(pW, !0), {
          x: UW,
          y: EW,
          className: (0, AW.c)("recharts-text", cR),
          textAnchor: YW,
          fill: oW.includes("url") ? mR : oW
        }), FW.map((function(WW, RW) {
          var MW = WW.words.join(dW ? "" : " ");
          return wW.createElement("tspan", {
            x: UW,
            dy: 0 === RW ? hW : eW,
            key: "".concat(MW, "-").concat(RW)
          }, MW)
        })))
      }
  },
  4940: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => qR
    });
    var wW = MW(75),
      CW = MW(4470),
      zR = MW.n(CW),
      AW = MW(4373),
      bR = MW.n(AW),
      yR = MW(4017),
      NW = MW(4103);

    function eW(WW) {
      return eW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, eW(WW)
    }

    function BW() {
      return BW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, BW.apply(this, arguments)
    }

    function tR(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        var MW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != MW) {
          var wW, CW, zR, AW, bR = [],
            yR = !0,
            NW = !1;
          try {
            if (zR = (MW = MW.call(WW)).next, 0 === RW) {
              if (Object(MW) !== MW) return;
              yR = !1
            } else
              for (; !(yR = (wW = zR.call(MW)).done) && (bR.push(wW.value), bR.length !== RW); yR = !0);
          } catch (WW) {
            NW = !0, CW = WW
          } finally {
            try {
              if (!yR && null != MW.return && (AW = MW.return(), Object(AW) !== AW)) return
            } finally {
              if (NW) throw CW
            }
          }
          return bR
        }
      }(WW, RW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return TW(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return TW(WW, RW)
      }(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function TW(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function gR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function iR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? gR(Object(MW), !0).forEach((function(RW) {
          YW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : gR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function YW(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != eW(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != eW(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == eW(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function JW(WW) {
      return Array.isArray(WW) && (0, NW.r)(WW[0]) && (0, NW.r)(WW[1]) ? WW.join(" ~ ") : WW
    }
    var PW = function(WW) {
      var RW = WW.separator,
        MW = void 0 === RW ? " : " : RW,
        CW = WW.contentStyle,
        AW = void 0 === CW ? {} : CW,
        eW = WW.itemStyle,
        TW = void 0 === eW ? {} : eW,
        gR = WW.labelStyle,
        YW = void 0 === gR ? {} : gR,
        PW = WW.payload,
        IW = WW.formatter,
        oW = WW.itemSorter,
        lW = WW.wrapperClassName,
        FW = WW.labelClassName,
        fW = WW.label,
        QW = WW.labelFormatter,
        rR = WW.accessibilityLayer,
        cR = void 0 !== rR && rR,
        XW = iR({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, AW),
        jR = iR({
          margin: 0
        }, YW),
        kR = !bR()(fW),
        aR = kR ? fW : "",
        sW = (0, yR.c)("recharts-default-tooltip", lW),
        dW = (0, yR.c)("recharts-tooltip-label", FW);
      kR && QW && void 0 !== PW && null !== PW && (aR = QW(fW, PW));
      var pW = cR ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return wW.createElement("div", BW({
        className: sW,
        style: XW
      }, pW), wW.createElement("p", {
        className: dW,
        style: jR
      }, wW.isValidElement(aR) ? aR : "".concat(aR)), function() {
        if (PW && PW.length) {
          var WW = (oW ? zR()(PW, oW) : PW).map((function(WW, RW) {
            if ("none" === WW.type) return null;
            var CW = iR({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: WW.color || "#000"
              }, TW),
              zR = WW.formatter || IW || JW,
              AW = WW.value,
              bR = WW.name,
              yR = AW,
              eW = bR;
            if (zR && null != yR && null != eW) {
              var BW = zR(AW, bR, WW, RW, PW);
              if (Array.isArray(BW)) {
                var gR = tR(BW, 2);
                yR = gR[0], eW = gR[1]
              } else yR = BW
            }
            return wW.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(RW),
              style: CW
            }, (0, NW.r)(eW) ? wW.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, eW) : null, (0, NW.r)(eW) ? wW.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, MW) : null, wW.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, yR), wW.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, WW.unit || ""))
          }));
          return wW.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, WW)
        }
        return null
      }())
    };

    function IW(WW) {
      return IW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, IW(WW)
    }

    function oW(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != IW(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != IW(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == IW(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }
    var lW = "recharts-tooltip-wrapper",
      FW = {
        visibility: "hidden"
      };

    function fW(WW) {
      var RW = WW.coordinate,
        MW = WW.translateX,
        wW = WW.translateY;
      return (0, yR.c)(lW, oW(oW(oW(oW({}, "".concat(lW, "-right"), (0, NW.u)(MW) && RW && (0, NW.u)(RW.x) && MW >= RW.x), "".concat(lW, "-left"), (0, NW.u)(MW) && RW && (0, NW.u)(RW.x) && MW < RW.x), "".concat(lW, "-bottom"), (0, NW.u)(wW) && RW && (0, NW.u)(RW.y) && wW >= RW.y), "".concat(lW, "-top"), (0, NW.u)(wW) && RW && (0, NW.u)(RW.y) && wW < RW.y))
    }

    function QW(WW) {
      var RW = WW.allowEscapeViewBox,
        MW = WW.coordinate,
        wW = WW.key,
        CW = WW.offsetTopLeft,
        zR = WW.position,
        AW = WW.reverseDirection,
        bR = WW.tooltipDimension,
        yR = WW.viewBox,
        eW = WW.viewBoxDimension;
      if (zR && (0, NW.u)(zR[wW])) return zR[wW];
      var BW = MW[wW] - bR - CW,
        tR = MW[wW] + CW;
      return RW[wW] ? AW[wW] ? BW : tR : AW[wW] ? BW < yR[wW] ? Math.max(tR, yR[wW]) : Math.max(BW, yR[wW]) : tR + bR > yR[wW] + eW ? Math.max(BW, yR[wW]) : Math.max(tR, yR[wW])
    }

    function rR(WW) {
      return rR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, rR(WW)
    }

    function cR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function XW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? cR(Object(MW), !0).forEach((function(RW) {
          pW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : cR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function jR(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, hW(wW.key), wW)
      }
    }

    function kR(WW, RW, MW) {
      return RW = sW(RW),
        function(WW, RW) {
          if (RW && ("object" === rR(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, aR() ? Reflect.construct(RW, MW || [], sW(WW).constructor) : RW.apply(WW, MW))
    }

    function aR() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (aR = function() {
        return !!WW
      })()
    }

    function sW(WW) {
      return sW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, sW(WW)
    }

    function dW(WW, RW) {
      return dW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, dW(WW, RW)
    }

    function pW(WW, RW, MW) {
      return (RW = hW(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function hW(WW) {
      var RW = function(WW, RW) {
        if ("object" != rR(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != rR(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == rR(RW) ? RW : RW + ""
    }
    var UW = function(WW) {
        function RW() {
          var WW;
          ! function(WW, RW) {
            if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
          }(this, RW);
          for (var MW = arguments.length, wW = new Array(MW), CW = 0; CW < MW; CW++) wW[CW] = arguments[CW];
          return pW(WW = kR(this, RW, [].concat(wW)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), pW(WW, "handleKeyDown", (function(RW) {
            var MW, wW, CW, zR;
            "Escape" === RW.key && WW.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (MW = null === (wW = WW.props.coordinate) || void 0 === wW ? void 0 : wW.x) && void 0 !== MW ? MW : 0,
                y: null !== (CW = null === (zR = WW.props.coordinate) || void 0 === zR ? void 0 : zR.y) && void 0 !== CW ? CW : 0
              }
            })
          })), WW
        }
        return function(WW, RW) {
          if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
          WW.prototype = Object.create(RW && RW.prototype, {
            constructor: {
              value: WW,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(WW, "prototype", {
            writable: !1
          }), RW && dW(WW, RW)
        }(RW, WW), MW = RW, (CW = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var WW = this.wrapperNode.getBoundingClientRect();
              (Math.abs(WW.width - this.state.lastBoundingBox.width) > 1 || Math.abs(WW.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: WW.width,
                  height: WW.height
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
            var WW, RW;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (WW = this.props.coordinate) || void 0 === WW ? void 0 : WW.x) === this.state.dismissedAtCoordinate.x && (null === (RW = this.props.coordinate) || void 0 === RW ? void 0 : RW.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var WW = this,
              RW = this.props,
              MW = RW.active,
              CW = RW.allowEscapeViewBox,
              zR = RW.animationDuration,
              AW = RW.animationEasing,
              bR = RW.children,
              yR = RW.coordinate,
              NW = RW.hasPayload,
              eW = RW.isAnimationActive,
              BW = RW.offset,
              tR = RW.position,
              TW = RW.reverseDirection,
              gR = RW.useTranslate3d,
              iR = RW.viewBox,
              YW = RW.wrapperStyle,
              JW = function(WW) {
                var RW, MW, wW = WW.allowEscapeViewBox,
                  CW = WW.coordinate,
                  zR = WW.offsetTopLeft,
                  AW = WW.position,
                  bR = WW.reverseDirection,
                  yR = WW.tooltipBox,
                  NW = WW.useTranslate3d,
                  eW = WW.viewBox;
                return {
                  cssProperties: yR.height > 0 && yR.width > 0 && CW ? function(WW) {
                    var RW = WW.translateX,
                      MW = WW.translateY;
                    return {
                      transform: WW.useTranslate3d ? "translate3d(".concat(RW, "px, ").concat(MW, "px, 0)") : "translate(".concat(RW, "px, ").concat(MW, "px)")
                    }
                  }({
                    translateX: RW = QW({
                      allowEscapeViewBox: wW,
                      coordinate: CW,
                      key: "x",
                      offsetTopLeft: zR,
                      position: AW,
                      reverseDirection: bR,
                      tooltipDimension: yR.width,
                      viewBox: eW,
                      viewBoxDimension: eW.width
                    }),
                    translateY: MW = QW({
                      allowEscapeViewBox: wW,
                      coordinate: CW,
                      key: "y",
                      offsetTopLeft: zR,
                      position: AW,
                      reverseDirection: bR,
                      tooltipDimension: yR.height,
                      viewBox: eW,
                      viewBoxDimension: eW.height
                    }),
                    useTranslate3d: NW
                  }) : FW,
                  cssClasses: fW({
                    translateX: RW,
                    translateY: MW,
                    coordinate: CW
                  })
                }
              }({
                allowEscapeViewBox: CW,
                coordinate: yR,
                offsetTopLeft: BW,
                position: tR,
                reverseDirection: TW,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: gR,
                viewBox: iR
              }),
              PW = JW.cssClasses,
              IW = JW.cssProperties,
              oW = XW(XW({
                transition: eW && MW ? "transform ".concat(zR, "ms ").concat(AW) : void 0
              }, IW), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && MW && NW ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, YW);
            return wW.createElement("div", {
              tabIndex: -1,
              className: PW,
              style: oW,
              ref: function(RW) {
                WW.wrapperNode = RW
              }
            }, bR)
          }
        }]) && jR(MW.prototype, CW), zR && jR(MW, zR), Object.defineProperty(MW, "prototype", {
          writable: !1
        }), MW;
        var MW, CW, zR
      }(wW.PureComponent),
      EW = MW(4945),
      VW = MW(4954);

    function mR(WW) {
      return mR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, mR(WW)
    }

    function xR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function vR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? xR(Object(MW), !0).forEach((function(RW) {
          LW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : xR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function KW(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, HW(wW.key), wW)
      }
    }

    function uW(WW, RW, MW) {
      return RW = nW(RW),
        function(WW, RW) {
          if (RW && ("object" === mR(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, OW() ? Reflect.construct(RW, MW || [], nW(WW).constructor) : RW.apply(WW, MW))
    }

    function OW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (OW = function() {
        return !!WW
      })()
    }

    function nW(WW) {
      return nW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, nW(WW)
    }

    function GW(WW, RW) {
      return GW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, GW(WW, RW)
    }

    function LW(WW, RW, MW) {
      return (RW = HW(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function HW(WW) {
      var RW = function(WW, RW) {
        if ("object" != mR(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != mR(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == mR(RW) ? RW : RW + ""
    }

    function DW(WW) {
      return WW.dataKey
    }
    var qR = function(WW) {
      function RW() {
        return function(WW, RW) {
          if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
        }(this, RW), uW(this, RW, arguments)
      }
      return function(WW, RW) {
        if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(RW && RW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), RW && GW(WW, RW)
      }(RW, WW), MW = RW, (CW = [{
        key: "render",
        value: function() {
          var WW = this,
            RW = this.props,
            MW = RW.active,
            CW = RW.allowEscapeViewBox,
            zR = RW.animationDuration,
            AW = RW.animationEasing,
            bR = RW.content,
            yR = RW.coordinate,
            NW = RW.filterNull,
            eW = RW.isAnimationActive,
            BW = RW.offset,
            tR = RW.payload,
            TW = RW.payloadUniqBy,
            gR = RW.position,
            iR = RW.reverseDirection,
            YW = RW.useTranslate3d,
            JW = RW.viewBox,
            IW = RW.wrapperStyle,
            oW = null !== tR && void 0 !== tR ? tR : [];
          NW && oW.length && (oW = (0, VW.c)(tR.filter((function(RW) {
            return null != RW.value && (!0 !== RW.hide || WW.props.includeHidden)
          })), TW, DW));
          var lW = oW.length > 0;
          return wW.createElement(UW, {
            allowEscapeViewBox: CW,
            animationDuration: zR,
            animationEasing: AW,
            isAnimationActive: eW,
            active: MW,
            coordinate: yR,
            hasPayload: lW,
            offset: BW,
            position: gR,
            reverseDirection: iR,
            useTranslate3d: YW,
            viewBox: JW,
            wrapperStyle: IW
          }, function(WW, RW) {
            return wW.isValidElement(WW) ? wW.cloneElement(WW, RW) : "function" === typeof WW ? wW.createElement(WW, RW) : wW.createElement(PW, RW)
          }(bR, vR(vR({}, this.props), {}, {
            payload: oW
          })))
        }
      }]) && KW(MW.prototype, CW), zR && KW(MW, zR), Object.defineProperty(MW, "prototype", {
        writable: !1
      }), MW;
      var MW, CW, zR
    }(wW.PureComponent);
    LW(qR, "displayName", "Tooltip"), LW(qR, "defaultProps", {
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
      isAnimationActive: !EW.b.isSsr,
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
  4938: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => NW
    });
    var wW = MW(75),
      CW = MW(4017),
      zR = MW(4381),
      AW = ["children", "className"];

    function bR() {
      return bR = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, bR.apply(this, arguments)
    }

    function yR(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }
    var NW = wW.forwardRef((function(WW, RW) {
      var MW = WW.children,
        NW = WW.className,
        eW = yR(WW, AW),
        BW = (0, CW.c)("recharts-layer", NW);
      return wW.createElement("g", bR({
        className: BW
      }, (0, zR.e)(eW, !0), {
        ref: RW
      }), MW)
    }))
  },
  4929: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => NW
    });
    var wW = MW(75),
      CW = MW(4017),
      zR = MW(4381),
      AW = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function bR() {
      return bR = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, bR.apply(this, arguments)
    }

    function yR(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function NW(WW) {
      var RW = WW.children,
        MW = WW.width,
        NW = WW.height,
        eW = WW.viewBox,
        BW = WW.className,
        tR = WW.style,
        TW = WW.title,
        gR = WW.desc,
        iR = yR(WW, AW),
        YW = eW || {
          width: MW,
          height: NW,
          x: 0,
          y: 0
        },
        JW = (0, CW.c)("recharts-surface", BW);
      return wW.createElement("svg", bR({}, (0, zR.e)(iR, !0, "svg"), {
        className: JW,
        width: MW,
        height: NW,
        style: tR,
        viewBox: "".concat(YW.x, " ").concat(YW.y, " ").concat(YW.width, " ").concat(YW.height)
      }), wW.createElement("title", null, TW), wW.createElement("desc", null, gR), RW)
    }
  },
  5323: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => IW,
      h: () => FW,
      j: () => jR,
      k: () => XW,
      o: () => oW,
      r: () => cR,
      u: () => rR,
      v: () => lW,
      x: () => QW,
      z: () => fW
    });
    var wW = MW(75),
      CW = MW(4925),
      zR = MW(5330),
      AW = MW.n(zR),
      bR = MW(5242),
      yR = MW.n(bR),
      NW = MW(4168),
      eW = MW.n(NW)()((function(WW) {
        return {
          x: WW.left,
          y: WW.top,
          width: WW.width,
          height: WW.height
        }
      }), (function(WW) {
        return ["l", WW.left, "t", WW.top, "w", WW.width, "h", WW.height].join("")
      })),
      BW = MW(4103);
    var tR = (0, wW.createContext)(void 0),
      TW = (0, wW.createContext)(void 0),
      gR = (0, wW.createContext)(void 0),
      iR = (0, wW.createContext)({}),
      YW = (0, wW.createContext)(void 0),
      JW = (0, wW.createContext)(0),
      PW = (0, wW.createContext)(0),
      IW = function(WW) {
        var RW = WW.state,
          MW = RW.xAxisMap,
          CW = RW.yAxisMap,
          zR = RW.offset,
          AW = WW.clipPathId,
          bR = WW.children,
          yR = WW.width,
          NW = WW.height,
          BW = eW(zR);
        return wW.createElement(tR.Provider, {
          value: MW
        }, wW.createElement(TW.Provider, {
          value: CW
        }, wW.createElement(iR.Provider, {
          value: zR
        }, wW.createElement(gR.Provider, {
          value: BW
        }, wW.createElement(YW.Provider, {
          value: AW
        }, wW.createElement(JW.Provider, {
          value: NW
        }, wW.createElement(PW.Provider, {
          value: yR
        }, bR)))))))
      },
      oW = function() {
        return (0, wW.useContext)(YW)
      };
    var lW = function(WW) {
        var RW = (0, wW.useContext)(tR);
        null == RW && (0, CW.b)(!1);
        var MW = RW[WW];
        return null == MW && (0, CW.b)(!1), MW
      },
      FW = function() {
        var WW = (0, wW.useContext)(tR);
        return (0, BW.h)(WW)
      },
      fW = function() {
        var WW = (0, wW.useContext)(TW);
        return AW()(WW, (function(WW) {
          return yR()(WW.domain, Number.isFinite)
        })) || (0, BW.h)(WW)
      },
      QW = function(WW) {
        var RW = (0, wW.useContext)(TW);
        null == RW && (0, CW.b)(!1);
        var MW = RW[WW];
        return null == MW && (0, CW.b)(!1), MW
      },
      rR = function() {
        return (0, wW.useContext)(gR)
      },
      cR = function() {
        return (0, wW.useContext)(iR)
      },
      XW = function() {
        return (0, wW.useContext)(PW)
      },
      jR = function() {
        return (0, wW.useContext)(JW)
      }
  },
  5354: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => DW
    });
    var wW = MW(75);

    function CW() {}

    function zR(WW, RW, MW) {
      WW._context.bezierCurveTo((2 * WW._x0 + WW._x1) / 3, (2 * WW._y0 + WW._y1) / 3, (WW._x0 + 2 * WW._x1) / 3, (WW._y0 + 2 * WW._y1) / 3, (WW._x0 + 4 * WW._x1 + RW) / 6, (WW._y0 + 4 * WW._y1 + MW) / 6)
    }

    function AW(WW) {
      this._context = WW
    }

    function bR(WW) {
      this._context = WW
    }

    function yR(WW) {
      this._context = WW
    }
    AW.prototype = {
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
            zR(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(WW, RW) {
        switch (WW = +WW, RW = +RW, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(WW, RW) : this._context.moveTo(WW, RW);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            zR(this, WW, RW)
        }
        this._x0 = this._x1, this._x1 = WW, this._y0 = this._y1, this._y1 = RW
      }
    }, bR.prototype = {
      areaStart: CW,
      areaEnd: CW,
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
      point: function(WW, RW) {
        switch (WW = +WW, RW = +RW, this._point) {
          case 0:
            this._point = 1, this._x2 = WW, this._y2 = RW;
            break;
          case 1:
            this._point = 2, this._x3 = WW, this._y3 = RW;
            break;
          case 2:
            this._point = 3, this._x4 = WW, this._y4 = RW, this._context.moveTo((this._x0 + 4 * this._x1 + WW) / 6, (this._y0 + 4 * this._y1 + RW) / 6);
            break;
          default:
            zR(this, WW, RW)
        }
        this._x0 = this._x1, this._x1 = WW, this._y0 = this._y1, this._y1 = RW
      }
    }, yR.prototype = {
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
      point: function(WW, RW) {
        switch (WW = +WW, RW = +RW, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var MW = (this._x0 + 4 * this._x1 + WW) / 6,
              wW = (this._y0 + 4 * this._y1 + RW) / 6;
            this._line ? this._context.lineTo(MW, wW) : this._context.moveTo(MW, wW);
            break;
          case 3:
            this._point = 4;
          default:
            zR(this, WW, RW)
        }
        this._x0 = this._x1, this._x1 = WW, this._y0 = this._y1, this._y1 = RW
      }
    };
    class NW {
      constructor(WW, RW) {
        this._context = WW, this._x = RW
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
      point(WW, RW) {
        switch (WW = +WW, RW = +RW, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(WW, RW) : this._context.moveTo(WW, RW);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + WW) / 2, this._y0, this._x0, RW, WW, RW) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + RW) / 2, WW, this._y0, WW, RW)
        }
        this._x0 = WW, this._y0 = RW
      }
    }

    function eW(WW) {
      this._context = WW
    }

    function BW(WW) {
      this._context = WW
    }

    function tR(WW) {
      return new BW(WW)
    }

    function TW(WW) {
      return WW < 0 ? -1 : 1
    }

    function gR(WW, RW, MW) {
      var wW = WW._x1 - WW._x0,
        CW = RW - WW._x1,
        zR = (WW._y1 - WW._y0) / (wW || CW < 0 && -0),
        AW = (MW - WW._y1) / (CW || wW < 0 && -0),
        bR = (zR * CW + AW * wW) / (wW + CW);
      return (TW(zR) + TW(AW)) * Math.min(Math.abs(zR), Math.abs(AW), .5 * Math.abs(bR)) || 0
    }

    function iR(WW, RW) {
      var MW = WW._x1 - WW._x0;
      return MW ? (3 * (WW._y1 - WW._y0) / MW - RW) / 2 : RW
    }

    function YW(WW, RW, MW) {
      var wW = WW._x0,
        CW = WW._y0,
        zR = WW._x1,
        AW = WW._y1,
        bR = (zR - wW) / 3;
      WW._context.bezierCurveTo(wW + bR, CW + bR * RW, zR - bR, AW - bR * MW, zR, AW)
    }

    function JW(WW) {
      this._context = WW
    }

    function PW(WW) {
      this._context = new IW(WW)
    }

    function IW(WW) {
      this._context = WW
    }

    function oW(WW) {
      this._context = WW
    }

    function lW(WW) {
      var RW, MW, wW = WW.length - 1,
        CW = new Array(wW),
        zR = new Array(wW),
        AW = new Array(wW);
      for (CW[0] = 0, zR[0] = 2, AW[0] = WW[0] + 2 * WW[1], RW = 1; RW < wW - 1; ++RW) CW[RW] = 1, zR[RW] = 4, AW[RW] = 4 * WW[RW] + 2 * WW[RW + 1];
      for (CW[wW - 1] = 2, zR[wW - 1] = 7, AW[wW - 1] = 8 * WW[wW - 1] + WW[wW], RW = 1; RW < wW; ++RW) MW = CW[RW] / zR[RW - 1], zR[RW] -= MW, AW[RW] -= MW * AW[RW - 1];
      for (CW[wW - 1] = AW[wW - 1] / zR[wW - 1], RW = wW - 2; RW >= 0; --RW) CW[RW] = (AW[RW] - CW[RW + 1]) / zR[RW];
      for (zR[wW - 1] = (WW[wW] + CW[wW - 1]) / 2, RW = 0; RW < wW - 1; ++RW) zR[RW] = 2 * WW[RW + 1] - CW[RW + 1];
      return [CW, zR]
    }

    function FW(WW, RW) {
      this._context = WW, this._t = RW
    }
    eW.prototype = {
      areaStart: CW,
      areaEnd: CW,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(WW, RW) {
        WW = +WW, RW = +RW, this._point ? this._context.lineTo(WW, RW) : (this._point = 1, this._context.moveTo(WW, RW))
      }
    }, BW.prototype = {
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
      point: function(WW, RW) {
        switch (WW = +WW, RW = +RW, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(WW, RW) : this._context.moveTo(WW, RW);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(WW, RW)
        }
      }
    }, JW.prototype = {
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
            YW(this, this._t0, iR(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(WW, RW) {
        var MW = NaN;
        if (RW = +RW, (WW = +WW) !== this._x1 || RW !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(WW, RW) : this._context.moveTo(WW, RW);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, YW(this, iR(this, MW = gR(this, WW, RW)), MW);
              break;
            default:
              YW(this, this._t0, MW = gR(this, WW, RW))
          }
          this._x0 = this._x1, this._x1 = WW, this._y0 = this._y1, this._y1 = RW, this._t0 = MW
        }
      }
    }, (PW.prototype = Object.create(JW.prototype)).point = function(WW, RW) {
      JW.prototype.point.call(this, RW, WW)
    }, IW.prototype = {
      moveTo: function(WW, RW) {
        this._context.moveTo(RW, WW)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(WW, RW) {
        this._context.lineTo(RW, WW)
      },
      bezierCurveTo: function(WW, RW, MW, wW, CW, zR) {
        this._context.bezierCurveTo(RW, WW, wW, MW, zR, CW)
      }
    }, oW.prototype = {
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
        var WW = this._x,
          RW = this._y,
          MW = WW.length;
        if (MW)
          if (this._line ? this._context.lineTo(WW[0], RW[0]) : this._context.moveTo(WW[0], RW[0]), 2 === MW) this._context.lineTo(WW[1], RW[1]);
          else
            for (var wW = lW(WW), CW = lW(RW), zR = 0, AW = 1; AW < MW; ++zR, ++AW) this._context.bezierCurveTo(wW[0][zR], CW[0][zR], wW[1][zR], CW[1][zR], WW[AW], RW[AW]);
        (this._line || 0 !== this._line && 1 === MW) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(WW, RW) {
        this._x.push(+WW), this._y.push(+RW)
      }
    }, FW.prototype = {
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
      point: function(WW, RW) {
        switch (WW = +WW, RW = +RW, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(WW, RW) : this._context.moveTo(WW, RW);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, RW), this._context.lineTo(WW, RW);
            else {
              var MW = this._x * (1 - this._t) + WW * this._t;
              this._context.lineTo(MW, this._y), this._context.lineTo(MW, RW)
            }
        }
        this._x = WW, this._y = RW
      }
    };
    var fW = MW(5198),
      QW = MW(5080),
      rR = MW(5089);

    function cR(WW) {
      return WW[0]
    }

    function XW(WW) {
      return WW[1]
    }

    function jR(WW, RW) {
      var MW = (0, QW.b)(!0),
        wW = null,
        CW = tR,
        zR = null,
        AW = (0, rR.b)(bR);

      function bR(bR) {
        var yR, NW, eW, BW = (bR = (0, fW.b)(bR)).length,
          tR = !1;
        for (null == wW && (zR = CW(eW = AW())), yR = 0; yR <= BW; ++yR) !(yR < BW && MW(NW = bR[yR], yR, bR)) === tR && ((tR = !tR) ? zR.lineStart() : zR.lineEnd()), tR && zR.point(+WW(NW, yR, bR), +RW(NW, yR, bR));
        if (eW) return zR = null, eW + "" || null
      }
      return WW = "function" === typeof WW ? WW : void 0 === WW ? cR : (0, QW.b)(WW), RW = "function" === typeof RW ? RW : void 0 === RW ? XW : (0, QW.b)(RW), bR.x = function(RW) {
        return arguments.length ? (WW = "function" === typeof RW ? RW : (0, QW.b)(+RW), bR) : WW
      }, bR.y = function(WW) {
        return arguments.length ? (RW = "function" === typeof WW ? WW : (0, QW.b)(+WW), bR) : RW
      }, bR.defined = function(WW) {
        return arguments.length ? (MW = "function" === typeof WW ? WW : (0, QW.b)(!!WW), bR) : MW
      }, bR.curve = function(WW) {
        return arguments.length ? (CW = WW, null != wW && (zR = CW(wW)), bR) : CW
      }, bR.context = function(WW) {
        return arguments.length ? (null == WW ? wW = zR = null : zR = CW(wW = WW), bR) : wW
      }, bR
    }

    function kR(WW, RW, MW) {
      var wW = null,
        CW = (0, QW.b)(!0),
        zR = null,
        AW = tR,
        bR = null,
        yR = (0, rR.b)(NW);

      function NW(NW) {
        var eW, BW, tR, TW, gR, iR = (NW = (0, fW.b)(NW)).length,
          YW = !1,
          JW = new Array(iR),
          PW = new Array(iR);
        for (null == zR && (bR = AW(gR = yR())), eW = 0; eW <= iR; ++eW) {
          if (!(eW < iR && CW(TW = NW[eW], eW, NW)) === YW)
            if (YW = !YW) BW = eW, bR.areaStart(), bR.lineStart();
            else {
              for (bR.lineEnd(), bR.lineStart(), tR = eW - 1; tR >= BW; --tR) bR.point(JW[tR], PW[tR]);
              bR.lineEnd(), bR.areaEnd()
            } YW && (JW[eW] = +WW(TW, eW, NW), PW[eW] = +RW(TW, eW, NW), bR.point(wW ? +wW(TW, eW, NW) : JW[eW], MW ? +MW(TW, eW, NW) : PW[eW]))
        }
        if (gR) return bR = null, gR + "" || null
      }

      function eW() {
        return jR().defined(CW).curve(AW).context(zR)
      }
      return WW = "function" === typeof WW ? WW : void 0 === WW ? cR : (0, QW.b)(+WW), RW = "function" === typeof RW ? RW : void 0 === RW ? (0, QW.b)(0) : (0, QW.b)(+RW), MW = "function" === typeof MW ? MW : void 0 === MW ? XW : (0, QW.b)(+MW), NW.x = function(RW) {
        return arguments.length ? (WW = "function" === typeof RW ? RW : (0, QW.b)(+RW), wW = null, NW) : WW
      }, NW.x0 = function(RW) {
        return arguments.length ? (WW = "function" === typeof RW ? RW : (0, QW.b)(+RW), NW) : WW
      }, NW.x1 = function(WW) {
        return arguments.length ? (wW = null == WW ? null : "function" === typeof WW ? WW : (0, QW.b)(+WW), NW) : wW
      }, NW.y = function(WW) {
        return arguments.length ? (RW = "function" === typeof WW ? WW : (0, QW.b)(+WW), MW = null, NW) : RW
      }, NW.y0 = function(WW) {
        return arguments.length ? (RW = "function" === typeof WW ? WW : (0, QW.b)(+WW), NW) : RW
      }, NW.y1 = function(WW) {
        return arguments.length ? (MW = null == WW ? null : "function" === typeof WW ? WW : (0, QW.b)(+WW), NW) : MW
      }, NW.lineX0 = NW.lineY0 = function() {
        return eW().x(WW).y(RW)
      }, NW.lineY1 = function() {
        return eW().x(WW).y(MW)
      }, NW.lineX1 = function() {
        return eW().x(wW).y(RW)
      }, NW.defined = function(WW) {
        return arguments.length ? (CW = "function" === typeof WW ? WW : (0, QW.b)(!!WW), NW) : CW
      }, NW.curve = function(WW) {
        return arguments.length ? (AW = WW, null != zR && (bR = AW(zR)), NW) : AW
      }, NW.context = function(WW) {
        return arguments.length ? (null == WW ? zR = bR = null : bR = AW(zR = WW), NW) : zR
      }, NW
    }
    var aR = MW(5028),
      sW = MW.n(aR),
      dW = MW(4216),
      pW = MW.n(dW),
      hW = MW(4017),
      UW = MW(4407),
      EW = MW(4381),
      VW = MW(4103);

    function mR(WW) {
      return mR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, mR(WW)
    }

    function xR() {
      return xR = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, xR.apply(this, arguments)
    }

    function vR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function KW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? vR(Object(MW), !0).forEach((function(RW) {
          uW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : vR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function uW(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != mR(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != mR(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == mR(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }
    var OW = {
        curveBasisClosed: function(WW) {
          return new bR(WW)
        },
        curveBasisOpen: function(WW) {
          return new yR(WW)
        },
        curveBasis: function(WW) {
          return new AW(WW)
        },
        curveBumpX: function(WW) {
          return new NW(WW, !0)
        },
        curveBumpY: function(WW) {
          return new NW(WW, !1)
        },
        curveLinearClosed: function(WW) {
          return new eW(WW)
        },
        curveLinear: tR,
        curveMonotoneX: function(WW) {
          return new JW(WW)
        },
        curveMonotoneY: function(WW) {
          return new PW(WW)
        },
        curveNatural: function(WW) {
          return new oW(WW)
        },
        curveStep: function(WW) {
          return new FW(WW, .5)
        },
        curveStepAfter: function(WW) {
          return new FW(WW, 1)
        },
        curveStepBefore: function(WW) {
          return new FW(WW, 0)
        }
      },
      nW = function(WW) {
        return WW.x === +WW.x && WW.y === +WW.y
      },
      GW = function(WW) {
        return WW.x
      },
      LW = function(WW) {
        return WW.y
      },
      HW = function(WW) {
        var RW, MW = WW.type,
          wW = void 0 === MW ? "linear" : MW,
          CW = WW.points,
          zR = void 0 === CW ? [] : CW,
          AW = WW.baseLine,
          bR = WW.layout,
          yR = WW.connectNulls,
          NW = void 0 !== yR && yR,
          eW = function(WW, RW) {
            if (pW()(WW)) return WW;
            var MW = "curve".concat(sW()(WW));
            return "curveMonotone" !== MW && "curveBump" !== MW || !RW ? OW[MW] || tR : OW["".concat(MW).concat("vertical" === RW ? "Y" : "X")]
          }(wW, bR),
          BW = NW ? zR.filter((function(WW) {
            return nW(WW)
          })) : zR;
        if (Array.isArray(AW)) {
          var TW = NW ? AW.filter((function(WW) {
              return nW(WW)
            })) : AW,
            gR = BW.map((function(WW, RW) {
              return KW(KW({}, WW), {}, {
                base: TW[RW]
              })
            }));
          return (RW = "vertical" === bR ? kR().y(LW).x1(GW).x0((function(WW) {
            return WW.base.x
          })) : kR().x(GW).y1(LW).y0((function(WW) {
            return WW.base.y
          }))).defined(nW).curve(eW), RW(gR)
        }
        return (RW = "vertical" === bR && (0, VW.u)(AW) ? kR().y(LW).x1(GW).x0(AW) : (0, VW.u)(AW) ? kR().x(GW).y1(LW).y0(AW) : jR().x(GW).y(LW)).defined(nW).curve(eW), RW(BW)
      },
      DW = function(WW) {
        var RW = WW.className,
          MW = WW.points,
          CW = WW.path,
          zR = WW.pathRef;
        if ((!MW || !MW.length) && !CW) return null;
        var AW = MW && MW.length ? HW(WW) : CW;
        return wW.createElement("path", xR({}, (0, EW.e)(WW, !1), (0, UW.m)(WW), {
          className: (0, hW.c)("recharts-curve", RW),
          d: AW,
          ref: zR
        }))
      }
  },
  5091: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => yR
    });
    var wW = MW(75),
      CW = MW(4017),
      zR = MW(4407),
      AW = MW(4381);

    function bR() {
      return bR = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, bR.apply(this, arguments)
    }
    var yR = function(WW) {
      var RW = WW.cx,
        MW = WW.cy,
        yR = WW.r,
        NW = WW.className,
        eW = (0, CW.c)("recharts-dot", NW);
      return RW === +RW && MW === +MW && yR === +yR ? wW.createElement("circle", bR({}, (0, AW.e)(WW, !1), (0, zR.m)(WW), {
        className: eW,
        cx: RW,
        cy: MW,
        r: yR
      })) : null
    }
  },
  5096: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => JW,
      g: () => iR
    });
    var wW = MW(75),
      CW = MW(4017),
      zR = MW(5101),
      AW = MW(4381);

    function bR(WW) {
      return bR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, bR(WW)
    }

    function yR() {
      return yR = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, yR.apply(this, arguments)
    }

    function NW(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        var MW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != MW) {
          var wW, CW, zR, AW, bR = [],
            yR = !0,
            NW = !1;
          try {
            if (zR = (MW = MW.call(WW)).next, 0 === RW) {
              if (Object(MW) !== MW) return;
              yR = !1
            } else
              for (; !(yR = (wW = zR.call(MW)).done) && (bR.push(wW.value), bR.length !== RW); yR = !0);
          } catch (WW) {
            NW = !0, CW = WW
          } finally {
            try {
              if (!yR && null != MW.return && (AW = MW.return(), Object(AW) !== AW)) return
            } finally {
              if (NW) throw CW
            }
          }
          return bR
        }
      }(WW, RW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return eW(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return eW(WW, RW)
      }(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function eW(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function BW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function tR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? BW(Object(MW), !0).forEach((function(RW) {
          TW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : BW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function TW(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != bR(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != bR(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == bR(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }
    var gR = function(WW, RW, MW, wW, CW) {
        var zR, AW = Math.min(Math.abs(MW) / 2, Math.abs(wW) / 2),
          bR = wW >= 0 ? 1 : -1,
          yR = MW >= 0 ? 1 : -1,
          NW = wW >= 0 && MW >= 0 || wW < 0 && MW < 0 ? 1 : 0;
        if (AW > 0 && CW instanceof Array) {
          for (var eW = [0, 0, 0, 0], BW = 0; BW < 4; BW++) eW[BW] = CW[BW] > AW ? AW : CW[BW];
          zR = "M".concat(WW, ",").concat(RW + bR * eW[0]), eW[0] > 0 && (zR += "A ".concat(eW[0], ",").concat(eW[0], ",0,0,").concat(NW, ",").concat(WW + yR * eW[0], ",").concat(RW)), zR += "L ".concat(WW + MW - yR * eW[1], ",").concat(RW), eW[1] > 0 && (zR += "A ".concat(eW[1], ",").concat(eW[1], ",0,0,").concat(NW, ",\n        ").concat(WW + MW, ",").concat(RW + bR * eW[1])), zR += "L ".concat(WW + MW, ",").concat(RW + wW - bR * eW[2]), eW[2] > 0 && (zR += "A ".concat(eW[2], ",").concat(eW[2], ",0,0,").concat(NW, ",\n        ").concat(WW + MW - yR * eW[2], ",").concat(RW + wW)), zR += "L ".concat(WW + yR * eW[3], ",").concat(RW + wW), eW[3] > 0 && (zR += "A ".concat(eW[3], ",").concat(eW[3], ",0,0,").concat(NW, ",\n        ").concat(WW, ",").concat(RW + wW - bR * eW[3])), zR += "Z"
        } else if (AW > 0 && CW === +CW && CW > 0) {
          var tR = Math.min(AW, CW);
          zR = "M ".concat(WW, ",").concat(RW + bR * tR, "\n            A ").concat(tR, ",").concat(tR, ",0,0,").concat(NW, ",").concat(WW + yR * tR, ",").concat(RW, "\n            L ").concat(WW + MW - yR * tR, ",").concat(RW, "\n            A ").concat(tR, ",").concat(tR, ",0,0,").concat(NW, ",").concat(WW + MW, ",").concat(RW + bR * tR, "\n            L ").concat(WW + MW, ",").concat(RW + wW - bR * tR, "\n            A ").concat(tR, ",").concat(tR, ",0,0,").concat(NW, ",").concat(WW + MW - yR * tR, ",").concat(RW + wW, "\n            L ").concat(WW + yR * tR, ",").concat(RW + wW, "\n            A ").concat(tR, ",").concat(tR, ",0,0,").concat(NW, ",").concat(WW, ",").concat(RW + wW - bR * tR, " Z")
        } else zR = "M ".concat(WW, ",").concat(RW, " h ").concat(MW, " v ").concat(wW, " h ").concat(-MW, " Z");
        return zR
      },
      iR = function(WW, RW) {
        if (!WW || !RW) return !1;
        var MW = WW.x,
          wW = WW.y,
          CW = RW.x,
          zR = RW.y,
          AW = RW.width,
          bR = RW.height;
        if (Math.abs(AW) > 0 && Math.abs(bR) > 0) {
          var yR = Math.min(CW, CW + AW),
            NW = Math.max(CW, CW + AW),
            eW = Math.min(zR, zR + bR),
            BW = Math.max(zR, zR + bR);
          return MW >= yR && MW <= NW && wW >= eW && wW <= BW
        }
        return !1
      },
      YW = {
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
      JW = function(WW) {
        var RW = tR(tR({}, YW), WW),
          MW = (0, wW.useRef)(),
          bR = NW((0, wW.useState)(-1), 2),
          eW = bR[0],
          BW = bR[1];
        (0, wW.useEffect)((function() {
          if (MW.current && MW.current.getTotalLength) try {
            var WW = MW.current.getTotalLength();
            WW && BW(WW)
          } catch (RW) {}
        }), []);
        var TW = RW.x,
          iR = RW.y,
          JW = RW.width,
          PW = RW.height,
          IW = RW.radius,
          oW = RW.className,
          lW = RW.animationEasing,
          FW = RW.animationDuration,
          fW = RW.animationBegin,
          QW = RW.isAnimationActive,
          rR = RW.isUpdateAnimationActive;
        if (TW !== +TW || iR !== +iR || JW !== +JW || PW !== +PW || 0 === JW || 0 === PW) return null;
        var cR = (0, CW.c)("recharts-rectangle", oW);
        return rR ? wW.createElement(zR.c, {
          canBegin: eW > 0,
          from: {
            width: JW,
            height: PW,
            x: TW,
            y: iR
          },
          to: {
            width: JW,
            height: PW,
            x: TW,
            y: iR
          },
          duration: FW,
          animationEasing: lW,
          isActive: rR
        }, (function(WW) {
          var CW = WW.width,
            bR = WW.height,
            NW = WW.x,
            BW = WW.y;
          return wW.createElement(zR.c, {
            canBegin: eW > 0,
            from: "0px ".concat(-1 === eW ? 1 : eW, "px"),
            to: "".concat(eW, "px 0px"),
            attributeName: "strokeDasharray",
            IM: fW,
            duration: FW,
            isActive: QW,
            easing: lW
          }, wW.createElement("path", yR({}, (0, AW.e)(RW, !0), {
            className: cR,
            d: gR(NW, BW, CW, bR, IW),
            ref: MW
          })))
        })) : wW.createElement("path", yR({}, (0, AW.e)(RW, !0), {
          className: cR,
          d: gR(TW, iR, JW, PW, IW)
        }))
      }
  },
  5298: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => YW
    });
    var wW = MW(75),
      CW = MW(4017),
      zR = MW(4381),
      AW = MW(5214),
      bR = MW(4103);

    function yR(WW) {
      return yR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, yR(WW)
    }

    function NW() {
      return NW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, NW.apply(this, arguments)
    }

    function eW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function BW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? eW(Object(MW), !0).forEach((function(RW) {
          tR(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : eW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function tR(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != yR(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != yR(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == yR(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }
    var TW = function(WW) {
        var RW = WW.cx,
          MW = WW.cy,
          wW = WW.radius,
          CW = WW.angle,
          zR = WW.sign,
          bR = WW.isExternal,
          yR = WW.cornerRadius,
          NW = WW.cornerIsExternal,
          eW = yR * (bR ? 1 : -1) + wW,
          BW = Math.asin(yR / eW) / AW.e,
          tR = NW ? CW : CW + zR * BW,
          TW = NW ? CW - zR * BW : CW;
        return {
          center: (0, AW.i)(RW, MW, eW, tR),
          circleTangency: (0, AW.i)(RW, MW, wW, tR),
          lineTangency: (0, AW.i)(RW, MW, eW * Math.cos(BW * AW.e), TW),
          eA: BW
        }
      },
      gR = function(WW) {
        var RW = WW.cx,
          MW = WW.cy,
          wW = WW.innerRadius,
          CW = WW.outerRadius,
          zR = WW.startAngle,
          yR = function(WW, RW) {
            return (0, bR.B)(RW - WW) * Math.min(Math.abs(RW - WW), 359.999)
          }(zR, WW.endAngle),
          NW = zR + yR,
          eW = (0, AW.i)(RW, MW, CW, zR),
          BW = (0, AW.i)(RW, MW, CW, NW),
          tR = "M ".concat(eW.x, ",").concat(eW.y, "\n    A ").concat(CW, ",").concat(CW, ",0,\n    ").concat(+(Math.abs(yR) > 180), ",").concat(+(zR > NW), ",\n    ").concat(BW.x, ",").concat(BW.y, "\n  ");
        if (wW > 0) {
          var TW = (0, AW.i)(RW, MW, wW, zR),
            gR = (0, AW.i)(RW, MW, wW, NW);
          tR += "L ".concat(gR.x, ",").concat(gR.y, "\n            A ").concat(wW, ",").concat(wW, ",0,\n            ").concat(+(Math.abs(yR) > 180), ",").concat(+(zR <= NW), ",\n            ").concat(TW.x, ",").concat(TW.y, " Z")
        } else tR += "L ".concat(RW, ",").concat(MW, " Z");
        return tR
      },
      iR = {
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
      YW = function(WW) {
        var RW = BW(BW({}, iR), WW),
          MW = RW.cx,
          AW = RW.cy,
          yR = RW.innerRadius,
          eW = RW.outerRadius,
          tR = RW.cornerRadius,
          YW = RW.forceCornerRadius,
          JW = RW.cornerIsExternal,
          PW = RW.startAngle,
          IW = RW.endAngle,
          oW = RW.className;
        if (eW < yR || PW === IW) return null;
        var lW, FW = (0, CW.c)("recharts-sector", oW),
          fW = eW - yR,
          QW = (0, bR.k)(tR, fW, 0, !0);
        return lW = QW > 0 && Math.abs(PW - IW) < 360 ? function(WW) {
          var RW = WW.cx,
            MW = WW.cy,
            wW = WW.innerRadius,
            CW = WW.outerRadius,
            zR = WW.cornerRadius,
            AW = WW.forceCornerRadius,
            yR = WW.cornerIsExternal,
            NW = WW.startAngle,
            eW = WW.endAngle,
            BW = (0, bR.B)(eW - NW),
            tR = TW({
              cx: RW,
              cy: MW,
              radius: CW,
              angle: NW,
              sign: BW,
              cornerRadius: zR,
              cornerIsExternal: yR
            }),
            iR = tR.circleTangency,
            YW = tR.lineTangency,
            JW = tR.eA,
            PW = TW({
              cx: RW,
              cy: MW,
              radius: CW,
              angle: eW,
              sign: -BW,
              cornerRadius: zR,
              cornerIsExternal: yR
            }),
            IW = PW.circleTangency,
            oW = PW.lineTangency,
            lW = PW.eA,
            FW = yR ? Math.abs(NW - eW) : Math.abs(NW - eW) - JW - lW;
          if (FW < 0) return AW ? "M ".concat(YW.x, ",").concat(YW.y, "\n        a").concat(zR, ",").concat(zR, ",0,0,1,").concat(2 * zR, ",0\n        a").concat(zR, ",").concat(zR, ",0,0,1,").concat(2 * -zR, ",0\n      ") : gR({
            cx: RW,
            cy: MW,
            innerRadius: wW,
            outerRadius: CW,
            startAngle: NW,
            endAngle: eW
          });
          var fW = "M ".concat(YW.x, ",").concat(YW.y, "\n    A").concat(zR, ",").concat(zR, ",0,0,").concat(+(BW < 0), ",").concat(iR.x, ",").concat(iR.y, "\n    A").concat(CW, ",").concat(CW, ",0,").concat(+(FW > 180), ",").concat(+(BW < 0), ",").concat(IW.x, ",").concat(IW.y, "\n    A").concat(zR, ",").concat(zR, ",0,0,").concat(+(BW < 0), ",").concat(oW.x, ",").concat(oW.y, "\n  ");
          if (wW > 0) {
            var QW = TW({
                cx: RW,
                cy: MW,
                radius: wW,
                angle: NW,
                sign: BW,
                isExternal: !0,
                cornerRadius: zR,
                cornerIsExternal: yR
              }),
              rR = QW.circleTangency,
              cR = QW.lineTangency,
              XW = QW.eA,
              jR = TW({
                cx: RW,
                cy: MW,
                radius: wW,
                angle: eW,
                sign: -BW,
                isExternal: !0,
                cornerRadius: zR,
                cornerIsExternal: yR
              }),
              kR = jR.circleTangency,
              aR = jR.lineTangency,
              sW = jR.eA,
              dW = yR ? Math.abs(NW - eW) : Math.abs(NW - eW) - XW - sW;
            if (dW < 0 && 0 === zR) return "".concat(fW, "L").concat(RW, ",").concat(MW, "Z");
            fW += "L".concat(aR.x, ",").concat(aR.y, "\n      A").concat(zR, ",").concat(zR, ",0,0,").concat(+(BW < 0), ",").concat(kR.x, ",").concat(kR.y, "\n      A").concat(wW, ",").concat(wW, ",0,").concat(+(dW > 180), ",").concat(+(BW > 0), ",").concat(rR.x, ",").concat(rR.y, "\n      A").concat(zR, ",").concat(zR, ",0,0,").concat(+(BW < 0), ",").concat(cR.x, ",").concat(cR.y, "Z")
          } else fW += "L".concat(RW, ",").concat(MW, "Z");
          return fW
        }({
          cx: MW,
          cy: AW,
          innerRadius: yR,
          outerRadius: eW,
          cornerRadius: Math.min(QW, fW / 2),
          forceCornerRadius: YW,
          cornerIsExternal: JW,
          startAngle: PW,
          endAngle: IW
        }) : gR({
          cx: MW,
          cy: AW,
          innerRadius: yR,
          outerRadius: eW,
          startAngle: PW,
          endAngle: IW
        }), wW.createElement("path", NW({}, (0, zR.e)(RW, !0), {
          className: FW,
          d: lW,
          role: "img"
        }))
      }
  },
  5022: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => KW
    });
    var wW = MW(75),
      CW = MW(5028),
      zR = MW.n(CW);
    Math.abs, Math.atan2;
    const AW = Math.cos,
      bR = (Math.max, Math.min, Math.sin),
      yR = Math.sqrt,
      NW = Math.PI,
      eW = 2 * NW;
    const BW = {
        draw(WW, RW) {
          const MW = yR(RW / NW);
          WW.moveTo(MW, 0), WW.arc(0, 0, MW, 0, eW)
        }
      },
      tR = {
        draw(WW, RW) {
          const MW = yR(RW / 5) / 2;
          WW.moveTo(-3 * MW, -MW), WW.lineTo(-MW, -MW), WW.lineTo(-MW, -3 * MW), WW.lineTo(MW, -3 * MW), WW.lineTo(MW, -MW), WW.lineTo(3 * MW, -MW), WW.lineTo(3 * MW, MW), WW.lineTo(MW, MW), WW.lineTo(MW, 3 * MW), WW.lineTo(-MW, 3 * MW), WW.lineTo(-MW, MW), WW.lineTo(-3 * MW, MW), WW.closePath()
        }
      },
      TW = yR(1 / 3),
      gR = 2 * TW,
      iR = {
        draw(WW, RW) {
          const MW = yR(RW / gR),
            wW = MW * TW;
          WW.moveTo(0, -MW), WW.lineTo(wW, 0), WW.lineTo(0, MW), WW.lineTo(-wW, 0), WW.closePath()
        }
      },
      YW = {
        draw(WW, RW) {
          const MW = yR(RW),
            wW = -MW / 2;
          WW.rect(wW, wW, MW, MW)
        }
      },
      JW = bR(NW / 10) / bR(7 * NW / 10),
      PW = bR(eW / 10) * JW,
      IW = -AW(eW / 10) * JW,
      oW = {
        draw(WW, RW) {
          const MW = yR(.8908130915292852 * RW),
            wW = PW * MW,
            CW = IW * MW;
          WW.moveTo(0, -MW), WW.lineTo(wW, CW);
          for (let zR = 1; zR < 5; ++zR) {
            const RW = eW * zR / 5,
              yR = AW(RW),
              NW = bR(RW);
            WW.lineTo(NW * MW, -yR * MW), WW.lineTo(yR * wW - NW * CW, NW * wW + yR * CW)
          }
          WW.closePath()
        }
      },
      lW = yR(3),
      FW = {
        draw(WW, RW) {
          const MW = -yR(RW / (3 * lW));
          WW.moveTo(0, 2 * MW), WW.lineTo(-lW * MW, -MW), WW.lineTo(lW * MW, -MW), WW.closePath()
        }
      },
      fW = -.5,
      QW = yR(3) / 2,
      rR = 1 / yR(12),
      cR = 3 * (rR / 2 + 1),
      XW = {
        draw(WW, RW) {
          const MW = yR(RW / cR),
            wW = MW / 2,
            CW = MW * rR,
            zR = wW,
            AW = MW * rR + MW,
            bR = -zR,
            NW = AW;
          WW.moveTo(wW, CW), WW.lineTo(zR, AW), WW.lineTo(bR, NW), WW.lineTo(fW * wW - QW * CW, QW * wW + fW * CW), WW.lineTo(fW * zR - QW * AW, QW * zR + fW * AW), WW.lineTo(fW * bR - QW * NW, QW * bR + fW * NW), WW.lineTo(fW * wW + QW * CW, fW * CW - QW * wW), WW.lineTo(fW * zR + QW * AW, fW * AW - QW * zR), WW.lineTo(fW * bR + QW * NW, fW * NW - QW * bR), WW.closePath()
        }
      };
    var jR = MW(5080),
      kR = MW(5089);
    yR(3), yR(3);
    var aR = MW(4017),
      sW = MW(4381);

    function dW(WW) {
      return dW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, dW(WW)
    }
    var pW = ["type", "size", "sizeType"];

    function hW() {
      return hW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, hW.apply(this, arguments)
    }

    function UW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function EW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? UW(Object(MW), !0).forEach((function(RW) {
          VW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : UW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function VW(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != dW(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != dW(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == dW(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function mR(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }
    var xR = {
        symbolCircle: BW,
        symbolCross: tR,
        symbolDiamond: iR,
        symbolSquare: YW,
        symbolStar: oW,
        symbolTriangle: FW,
        symbolWye: XW
      },
      vR = Math.PI / 180,
      KW = function(WW) {
        var RW = WW.type,
          MW = void 0 === RW ? "circle" : RW,
          CW = WW.size,
          AW = void 0 === CW ? 64 : CW,
          bR = WW.sizeType,
          yR = void 0 === bR ? "area" : bR,
          NW = EW(EW({}, mR(WW, pW)), {}, {
            type: MW,
            size: AW,
            sizeType: yR
          }),
          eW = NW.className,
          tR = NW.cx,
          TW = NW.cy,
          gR = (0, sW.e)(NW, !0);
        return tR === +tR && TW === +TW && AW === +AW ? wW.createElement("path", hW({}, gR, {
          className: (0, aR.c)("recharts-symbols", eW),
          transform: "translate(".concat(tR, ", ").concat(TW, ")"),
          d: function() {
            var WW = function(WW) {
                var RW = "symbol".concat(zR()(WW));
                return xR[RW] || BW
              }(MW),
              RW = function(WW, RW) {
                let MW = null,
                  wW = (0, kR.b)(CW);

                function CW() {
                  let CW;
                  if (MW || (MW = CW = wW()), WW.apply(this, arguments).draw(MW, +RW.apply(this, arguments)), CW) return MW = null, CW + "" || null
                }
                return WW = "function" === typeof WW ? WW : (0, jR.b)(WW || BW), RW = "function" === typeof RW ? RW : (0, jR.b)(void 0 === RW ? 64 : +RW), CW.type = function(RW) {
                  return arguments.length ? (WW = "function" === typeof RW ? RW : (0, jR.b)(RW), CW) : WW
                }, CW.size = function(WW) {
                  return arguments.length ? (RW = "function" === typeof WW ? WW : (0, jR.b)(+WW), CW) : RW
                }, CW.context = function(WW) {
                  return arguments.length ? (MW = null == WW ? null : WW, CW) : MW
                }, CW
              }().type(WW).size(function(WW, RW, MW) {
                if ("area" === RW) return WW;
                switch (MW) {
                  case "cross":
                    return 5 * WW * WW / 9;
                  case "diamond":
                    return .5 * WW * WW / Math.sqrt(3);
                  case "square":
                    return WW * WW;
                  case "star":
                    var wW = 18 * vR;
                    return 1.25 * WW * WW * (Math.tan(wW) - Math.tan(2 * wW) * Math.pow(Math.tan(wW), 2));
                  case "triangle":
                    return Math.sqrt(3) * WW * WW / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * WW * WW / 8;
                  default:
                    return Math.PI * WW * WW / 4
                }
              }(AW, yR, MW));
            return RW()
          }()
        })) : null
      };
    KW.registerSymbol = function(WW, RW) {
      xR["symbol".concat(zR()(WW))] = RW
    }
  },
  5281: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => VW,
      f: () => nW,
      j: () => mR,
      m: () => xR,
      n: () => vR
    });
    var wW = MW(75),
      CW = MW(4216),
      zR = MW.n(CW),
      AW = MW(5287),
      bR = MW.n(AW),
      yR = MW(5293),
      NW = MW.n(yR),
      eW = MW(5175),
      BW = MW.n(eW),
      tR = MW(5096),
      TW = MW(4017),
      gR = MW(5101),
      iR = MW(4381);

    function YW(WW) {
      return YW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, YW(WW)
    }

    function JW() {
      return JW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW) Object.prototype.hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, JW.apply(this, arguments)
    }

    function PW(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        var MW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != MW) {
          var wW, CW, zR, AW, bR = [],
            yR = !0,
            NW = !1;
          try {
            if (zR = (MW = MW.call(WW)).next, 0 === RW) {
              if (Object(MW) !== MW) return;
              yR = !1
            } else
              for (; !(yR = (wW = zR.call(MW)).done) && (bR.push(wW.value), bR.length !== RW); yR = !0);
          } catch (WW) {
            NW = !0, CW = WW
          } finally {
            try {
              if (!yR && null != MW.return && (AW = MW.return(), Object(AW) !== AW)) return
            } finally {
              if (NW) throw CW
            }
          }
          return bR
        }
      }(WW, RW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return IW(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return IW(WW, RW)
      }(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IW(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function oW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function lW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? oW(Object(MW), !0).forEach((function(RW) {
          FW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : oW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function FW(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != YW(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != YW(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == YW(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }
    var fW = function(WW, RW, MW, wW, CW) {
        var zR, AW = MW - wW;
        return zR = "M ".concat(WW, ",").concat(RW), zR += "L ".concat(WW + MW, ",").concat(RW), zR += "L ".concat(WW + MW - AW / 2, ",").concat(RW + CW), zR += "L ".concat(WW + MW - AW / 2 - wW, ",").concat(RW + CW), zR += "L ".concat(WW, ",").concat(RW, " Z")
      },
      QW = {
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
      rR = function(WW) {
        var RW = lW(lW({}, QW), WW),
          MW = (0, wW.useRef)(),
          CW = PW((0, wW.useState)(-1), 2),
          zR = CW[0],
          AW = CW[1];
        (0, wW.useEffect)((function() {
          if (MW.current && MW.current.getTotalLength) try {
            var WW = MW.current.getTotalLength();
            WW && AW(WW)
          } catch (RW) {}
        }), []);
        var bR = RW.x,
          yR = RW.y,
          NW = RW.upperWidth,
          eW = RW.lowerWidth,
          BW = RW.height,
          tR = RW.className,
          YW = RW.animationEasing,
          IW = RW.animationDuration,
          oW = RW.animationBegin,
          FW = RW.isUpdateAnimationActive;
        if (bR !== +bR || yR !== +yR || NW !== +NW || eW !== +eW || BW !== +BW || 0 === NW && 0 === eW || 0 === BW) return null;
        var rR = (0, TW.c)("recharts-trapezoid", tR);
        return FW ? wW.createElement(gR.c, {
          canBegin: zR > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: BW,
            x: bR,
            y: yR
          },
          to: {
            upperWidth: NW,
            lowerWidth: eW,
            height: BW,
            x: bR,
            y: yR
          },
          duration: IW,
          animationEasing: YW,
          isActive: FW
        }, (function(WW) {
          var CW = WW.upperWidth,
            AW = WW.lowerWidth,
            bR = WW.height,
            yR = WW.x,
            NW = WW.y;
          return wW.createElement(gR.c, {
            canBegin: zR > 0,
            from: "0px ".concat(-1 === zR ? 1 : zR, "px"),
            to: "".concat(zR, "px 0px"),
            attributeName: "strokeDasharray",
            IM: oW,
            duration: IW,
            easing: YW
          }, wW.createElement("path", JW({}, (0, iR.e)(RW, !0), {
            className: rR,
            d: fW(yR, NW, CW, AW, bR),
            ref: MW
          })))
        })) : wW.createElement("g", null, wW.createElement("path", JW({}, (0, iR.e)(RW, !0), {
          className: rR,
          d: fW(bR, yR, NW, eW, BW)
        })))
      },
      cR = MW(5298),
      XW = MW(4938),
      jR = MW(5022),
      kR = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function aR(WW) {
      return aR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, aR(WW)
    }

    function sW(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function dW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function pW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? dW(Object(MW), !0).forEach((function(RW) {
          hW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : dW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function hW(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != aR(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != aR(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == aR(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function UW(WW, RW) {
      return pW(pW({}, RW), WW)
    }

    function EW(WW) {
      var RW = WW.shapeType,
        MW = WW.elementProps;
      switch (RW) {
        case "rectangle":
          return wW.createElement(tR.e, MW);
        case "trapezoid":
          return wW.createElement(rR, MW);
        case "sector":
          return wW.createElement(cR.e, MW);
        case "symbols":
          if (function(WW) {
              return "symbols" === WW
            }(RW)) return wW.createElement(jR.d, MW);
          break;
        default:
          return null
      }
    }

    function VW(WW) {
      var RW, MW = WW.option,
        CW = WW.shapeType,
        AW = WW.propTransformer,
        yR = void 0 === AW ? UW : AW,
        eW = WW.activeClassName,
        BW = void 0 === eW ? "recharts-active-shape" : eW,
        tR = WW.isActive,
        TW = sW(WW, kR);
      if ((0, wW.isValidElement)(MW)) RW = (0, wW.cloneElement)(MW, pW(pW({}, TW), function(WW) {
        return (0, wW.isValidElement)(WW) ? WW.props : WW
      }(MW)));
      else if (zR()(MW)) RW = MW(TW);
      else if (bR()(MW) && !NW()(MW)) {
        var gR = yR(MW, TW);
        RW = wW.createElement(EW, {
          shapeType: CW,
          elementProps: gR
        })
      } else {
        var iR = TW;
        RW = wW.createElement(EW, {
          shapeType: CW,
          elementProps: iR
        })
      }
      return tR ? wW.createElement(XW.b, {
        className: BW
      }, RW) : RW
    }

    function mR(WW, RW) {
      return null != RW && "trapezoids" in WW.props
    }

    function xR(WW, RW) {
      return null != RW && "sectors" in WW.props
    }

    function vR(WW, RW) {
      return null != RW && "points" in WW.props
    }

    function KW(WW, RW) {
      var MW, wW, CW = WW.x === (null === RW || void 0 === RW || null === (MW = RW.labelViewBox) || void 0 === MW ? void 0 : MW.x) || WW.x === RW.x,
        zR = WW.y === (null === RW || void 0 === RW || null === (wW = RW.labelViewBox) || void 0 === wW ? void 0 : wW.y) || WW.y === RW.y;
      return CW && zR
    }

    function uW(WW, RW) {
      var MW = WW.endAngle === RW.endAngle,
        wW = WW.startAngle === RW.startAngle;
      return MW && wW
    }

    function OW(WW, RW) {
      var MW = WW.x === RW.x,
        wW = WW.y === RW.y,
        CW = WW.z === RW.z;
      return MW && wW && CW
    }

    function nW(WW) {
      var RW = WW.activeTooltipItem,
        MW = WW.graphicalItem,
        wW = WW.itemData,
        CW = function(WW, RW) {
          var MW;
          return mR(WW, RW) ? MW = "trapezoids" : xR(WW, RW) ? MW = "sectors" : vR(WW, RW) && (MW = "points"), MW
        }(MW, RW),
        zR = function(WW, RW) {
          var MW, wW;
          return mR(WW, RW) ? null === (MW = RW.tooltipPayload) || void 0 === MW || null === (MW = MW[0]) || void 0 === MW || null === (MW = MW.payload) || void 0 === MW ? void 0 : MW.payload : xR(WW, RW) ? null === (wW = RW.tooltipPayload) || void 0 === wW || null === (wW = wW[0]) || void 0 === wW || null === (wW = wW.payload) || void 0 === wW ? void 0 : wW.payload : vR(WW, RW) ? RW.payload : {}
        }(MW, RW),
        AW = wW.filter((function(WW, wW) {
          var AW = BW()(zR, WW),
            bR = MW.props[CW].filter((function(WW) {
              var wW = function(WW, RW) {
                var MW;
                return mR(WW, RW) ? MW = KW : xR(WW, RW) ? MW = uW : vR(WW, RW) && (MW = OW), MW
              }(MW, RW);
              return wW(WW, RW)
            })),
            yR = MW.props[CW].indexOf(bR[bR.length - 1]);
          return AW && wW === yR
        }));
      return wW.indexOf(AW[AW.length - 1])
    }
  },
  5229: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => lW,
      c: () => JW,
      d: () => FW,
      h: () => IW,
      j: () => PW
    });
    var wW = MW(5233),
      CW = MW.n(wW),
      zR = MW(5242),
      AW = MW.n(zR),
      bR = MW(5115),
      yR = MW(4381),
      NW = MW(4103),
      eW = MW(5250);

    function BW(WW) {
      return BW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, BW(WW)
    }

    function tR(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, YW(wW.key), wW)
      }
    }

    function TW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function gR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? TW(Object(MW), !0).forEach((function(RW) {
          iR(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : TW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function iR(WW, RW, MW) {
      return (RW = YW(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function YW(WW) {
      var RW = function(WW, RW) {
        if ("object" != BW(WW) || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != BW(wW)) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == BW(RW) ? RW : RW + ""
    }
    var JW = function(WW, RW, MW, wW, CW) {
        var zR = WW.width,
          AW = WW.height,
          BW = WW.layout,
          tR = WW.children,
          TW = Object.keys(RW),
          YW = {
            left: MW.left,
            leftMirror: MW.left,
            right: zR - MW.right,
            rightMirror: zR - MW.right,
            top: MW.top,
            topMirror: MW.top,
            bottom: AW - MW.bottom,
            bottomMirror: AW - MW.bottom
          },
          JW = !!(0, yR.i)(tR, eW.c);
        return TW.reduce((function(zR, AW) {
          var yR, eW, tR, TW, PW, IW = RW[AW],
            oW = IW.orientation,
            lW = IW.domain,
            FW = IW.padding,
            fW = void 0 === FW ? {} : FW,
            QW = IW.mirror,
            rR = IW.reversed,
            cR = "".concat(oW).concat(QW ? "Mirror" : "");
          if ("number" === IW.type && ("gap" === IW.padding || "no-gap" === IW.padding)) {
            var XW = lW[1] - lW[0],
              jR = 1 / 0,
              kR = IW.categoricalDomain.sort(NW.e);
            if (kR.forEach((function(WW, RW) {
                RW > 0 && (jR = Math.min((WW || 0) - (kR[RW - 1] || 0), jR))
              })), Number.isFinite(jR)) {
              var aR = jR / XW,
                sW = "vertical" === IW.layout ? MW.height : MW.width;
              if ("gap" === IW.padding && (yR = aR * sW / 2), "no-gap" === IW.padding) {
                var dW = (0, NW.k)(WW.barCategoryGap, aR * sW),
                  pW = aR * sW / 2;
                yR = pW - dW - (pW - dW) / sW * dW
              }
            }
          }
          eW = "xAxis" === wW ? [MW.left + (fW.left || 0) + (yR || 0), MW.left + MW.width - (fW.right || 0) - (yR || 0)] : "yAxis" === wW ? "horizontal" === BW ? [MW.top + MW.height - (fW.bottom || 0), MW.top + (fW.top || 0)] : [MW.top + (fW.top || 0) + (yR || 0), MW.top + MW.height - (fW.bottom || 0) - (yR || 0)] : IW.range, rR && (eW = [eW[1], eW[0]]);
          var hW = (0, bR.ib)(IW, CW, JW),
            UW = hW.scale,
            EW = hW.realScaleType;
          UW.domain(lW).range(eW), (0, bR.g)(UW);
          var VW = (0, bR.T)(UW, gR(gR({}, IW), {}, {
            realScaleType: EW
          }));
          "xAxis" === wW ? (PW = "top" === oW && !QW || "bottom" === oW && QW, tR = MW.left, TW = YW[cR] - PW * IW.height) : "yAxis" === wW && (PW = "left" === oW && !QW || "right" === oW && QW, tR = YW[cR] - PW * IW.width, TW = MW.top);
          var mR = gR(gR(gR({}, IW), VW), {}, {
            realScaleType: EW,
            x: tR,
            y: TW,
            scale: UW,
            width: "xAxis" === wW ? MW.width : IW.width,
            height: "yAxis" === wW ? MW.height : IW.height
          });
          return mR.bandSize = (0, bR.m)(mR, VW), IW.hide || "xAxis" !== wW ? IW.hide || (YW[cR] += (PW ? -1 : 1) * mR.width) : YW[cR] += (PW ? -1 : 1) * mR.height, gR(gR({}, zR), {}, iR({}, AW, mR))
        }), {})
      },
      PW = function(WW, RW) {
        var MW = WW.x,
          wW = WW.y,
          CW = RW.x,
          zR = RW.y;
        return {
          x: Math.min(MW, CW),
          y: Math.min(wW, zR),
          width: Math.abs(CW - MW),
          height: Math.abs(zR - wW)
        }
      },
      IW = function(WW) {
        var RW = WW.x1,
          MW = WW.y1,
          wW = WW.x2,
          CW = WW.y2;
        return PW({
          x: RW,
          y: MW
        }, {
          x: wW,
          y: CW
        })
      },
      oW = function() {
        function WW(RW) {
          ! function(WW, RW) {
            if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
          }(this, WW), this.scale = RW
        }
        return RW = WW, MW = [{
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
          value: function(WW) {
            var RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              MW = RW.bandAware,
              wW = RW.position;
            if (void 0 !== WW) {
              if (wW) switch (wW) {
                case "start":
                default:
                  return this.scale(WW);
                case "middle":
                  var CW = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(WW) + CW;
                case "end":
                  var zR = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(WW) + zR
              }
              if (MW) {
                var AW = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(WW) + AW
              }
              return this.scale(WW)
            }
          }
        }, {
          key: "isInRange",
          value: function(WW) {
            var RW = this.range(),
              MW = RW[0],
              wW = RW[RW.length - 1];
            return MW <= wW ? WW >= MW && WW <= wW : WW >= wW && WW <= MW
          }
        }], wW = [{
          key: "create",
          value: function(RW) {
            return new WW(RW)
          }
        }], MW && tR(RW.prototype, MW), wW && tR(RW, wW), Object.defineProperty(RW, "prototype", {
          writable: !1
        }), RW;
        var RW, MW, wW
      }();
    iR(oW, "EPS", 1e-4);
    var lW = function(WW) {
      var RW = Object.keys(WW).reduce((function(RW, MW) {
        return gR(gR({}, RW), {}, iR({}, MW, oW.create(WW[MW])))
      }), {});
      return gR(gR({}, RW), {}, {
        apply: function(WW) {
          var MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            wW = MW.bandAware,
            zR = MW.position;
          return CW()(WW, (function(WW, MW) {
            return RW[MW].apply(WW, {
              bandAware: wW,
              position: zR
            })
          }))
        },
        isInRange: function(WW) {
          return AW()(WW, (function(WW, MW) {
            return RW[MW].isInRange(WW)
          }))
        }
      })
    };
    var FW = function(WW) {
      var RW = WW.width,
        MW = WW.height,
        wW = function(WW) {
          return (WW % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        CW = wW * Math.PI / 180,
        zR = Math.atan(MW / RW),
        AW = CW > zR && CW < Math.PI - zR ? MW / Math.sin(CW) : RW / Math.cos(CW);
      return Math.abs(AW)
    }
  },
  5115: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => sA,
      e: () => XA,
      g: () => uA,
      h: () => xb,
      l: () => OA,
      m: () => zy,
      n: () => ab,
      q: () => kb,
      s: () => SA,
      w: () => ZA,
      y: () => qb,
      z: () => EA,
      C: () => cb,
      D: () => hA,
      H: () => Rb,
      J: () => jb,
      K: () => HA,
      O: () => Wb,
      Q: () => VA,
      T: () => DA,
      W: () => by,
      Z: () => rb,
      _: () => UA,
      bb: () => Ab,
      eb: () => pA,
      ib: () => vb,
      jb: () => Cb,
      nb: () => nA
    });
    var wW = {};
    MW.r(wW), MW.d(wW, {
      scaleBand: () => CW.b,
      scaleDiverging: () => yA,
      scaleDivergingLog: () => Nz,
      scaleDivergingPow: () => Bz,
      scaleDivergingSqrt: () => tA,
      scaleDivergingSymlog: () => ez,
      scaleIdentity: () => HR,
      scaleImplicit: () => NM.h,
      scaleLinear: () => LR,
      scaleLog: () => CM,
      scaleOrdinal: () => NM.e,
      scalePoint: () => CW.c,
      scalePow: () => gw,
      scaleQuantile: () => cwW,
      scaleQuantize: () => XM,
      scaleRadial: () => JM,
      scaleSequential: () => Rz,
      scaleSequentialLog: () => Mz,
      scaleSequentialPow: () => Cz,
      scaleSequentialQuantile: () => Az,
      scaleSequentialSqrt: () => zA,
      scaleSequentialSymlog: () => wz,
      scaleSqrt: () => iw,
      scaleSymlog: () => yw,
      scaleThreshold: () => jw,
      scaleTime: () => qz,
      scaleUtc: () => ZC,
      tickFormat: () => nR
    });
    var CW = MW(5119);
    const zR = Math.sqrt(50),
      AW = Math.sqrt(10),
      bR = Math.sqrt(2);

    function yR(WW, RW, MW) {
      const wW = (RW - WW) / Math.max(0, MW),
        CW = Math.floor(Math.log10(wW)),
        NW = wW / Math.pow(10, CW),
        eW = NW >= zR ? 10 : NW >= AW ? 5 : NW >= bR ? 2 : 1;
      let BW, tR, TW;
      return CW < 0 ? (TW = Math.pow(10, -CW) / eW, BW = Math.round(WW * TW), tR = Math.round(RW * TW), BW / TW < WW && ++BW, tR / TW > RW && --tR, TW = -TW) : (TW = Math.pow(10, CW) * eW, BW = Math.round(WW / TW), tR = Math.round(RW / TW), BW * TW < WW && ++BW, tR * TW > RW && --tR), tR < BW && .5 <= MW && MW < 2 ? yR(WW, RW, 2 * MW) : [BW, tR, TW]
    }

    function NW(WW, RW, MW) {
      if (!((MW = +MW) > 0)) return [];
      if ((WW = +WW) === (RW = +RW)) return [WW];
      const wW = RW < WW,
        [CW, zR, AW] = wW ? yR(RW, WW, MW) : yR(WW, RW, MW);
      if (!(zR >= CW)) return [];
      const bR = zR - CW + 1,
        NW = new Array(bR);
      if (wW)
        if (AW < 0)
          for (let yR = 0; yR < bR; ++yR) NW[yR] = (zR - yR) / -AW;
        else
          for (let yR = 0; yR < bR; ++yR) NW[yR] = (zR - yR) * AW;
      else if (AW < 0)
        for (let yR = 0; yR < bR; ++yR) NW[yR] = (CW + yR) / -AW;
      else
        for (let yR = 0; yR < bR; ++yR) NW[yR] = (CW + yR) * AW;
      return NW
    }

    function eW(WW, RW, MW) {
      return yR(WW = +WW, RW = +RW, MW = +MW)[2]
    }

    function BW(WW, RW, MW) {
      MW = +MW;
      const wW = (RW = +RW) < (WW = +WW),
        CW = wW ? eW(RW, WW, MW) : eW(WW, RW, MW);
      return (wW ? -1 : 1) * (CW < 0 ? 1 / -CW : CW)
    }

    function tR(WW, RW) {
      return null == WW || null == RW ? NaN : WW < RW ? -1 : WW > RW ? 1 : WW >= RW ? 0 : NaN
    }

    function TW(WW, RW) {
      return null == WW || null == RW ? NaN : RW < WW ? -1 : RW > WW ? 1 : RW >= WW ? 0 : NaN
    }

    function gR(WW) {
      let RW, MW, wW;

      function CW(WW, wW) {
        let CW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          zR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.length;
        if (CW < zR) {
          if (0 !== RW(wW, wW)) return zR;
          do {
            const RW = CW + zR >>> 1;
            MW(WW[RW], wW) < 0 ? CW = RW + 1 : zR = RW
          } while (CW < zR)
        }
        return CW
      }
      return 2 !== WW.length ? (RW = tR, MW = (RW, MW) => tR(WW(RW), MW), wW = (RW, MW) => WW(RW) - MW) : (RW = WW === tR || WW === TW ? WW : iR, MW = WW, wW = WW), {
        left: CW,
        center: function(WW, RW) {
          let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const zR = CW(WW, RW, MW, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.length) - 1);
          return zR > MW && wW(WW[zR - 1], RW) > -wW(WW[zR], RW) ? zR - 1 : zR
        },
        right: function(WW, wW) {
          let CW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            zR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.length;
          if (CW < zR) {
            if (0 !== RW(wW, wW)) return zR;
            do {
              const RW = CW + zR >>> 1;
              MW(WW[RW], wW) <= 0 ? CW = RW + 1 : zR = RW
            } while (CW < zR)
          }
          return CW
        }
      }
    }

    function iR() {
      return 0
    }

    function YW(WW) {
      return null === WW ? NaN : +WW
    }
    const JW = gR(tR),
      PW = JW.right,
      IW = (JW.left, gR(YW).center, PW);

    function oW(WW, RW, MW) {
      WW.prototype = RW.prototype = MW, MW.constructor = WW
    }

    function lW(WW, RW) {
      var MW = Object.create(WW.prototype);
      for (var wW in RW) MW[wW] = RW[wW];
      return MW
    }

    function FW() {}
    var fW = .7,
      QW = 1 / fW,
      rR = "\\s*([+-]?\\d+)\\s*",
      cR = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      XW = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      jR = /^#([0-9a-f]{3,8})$/,
      kR = new RegExp(`^rgb\\(${rR},${rR},${rR}\\)$`),
      aR = new RegExp(`^rgb\\(${XW},${XW},${XW}\\)$`),
      sW = new RegExp(`^rgba\\(${rR},${rR},${rR},${cR}\\)$`),
      dW = new RegExp(`^rgba\\(${XW},${XW},${XW},${cR}\\)$`),
      pW = new RegExp(`^hsl\\(${cR},${XW},${XW}\\)$`),
      hW = new RegExp(`^hsla\\(${cR},${XW},${XW},${cR}\\)$`),
      UW = {
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

    function EW() {
      return this.rgb().formatHex()
    }

    function VW() {
      return this.rgb().formatRgb()
    }

    function mR(WW) {
      var RW, MW;
      return WW = (WW + "").trim().toLowerCase(), (RW = jR.exec(WW)) ? (MW = RW[1].length, RW = parseInt(RW[1], 16), 6 === MW ? xR(RW) : 3 === MW ? new uW(RW >> 8 & 15 | RW >> 4 & 240, RW >> 4 & 15 | 240 & RW, (15 & RW) << 4 | 15 & RW, 1) : 8 === MW ? vR(RW >> 24 & 255, RW >> 16 & 255, RW >> 8 & 255, (255 & RW) / 255) : 4 === MW ? vR(RW >> 12 & 15 | RW >> 8 & 240, RW >> 8 & 15 | RW >> 4 & 240, RW >> 4 & 15 | 240 & RW, ((15 & RW) << 4 | 15 & RW) / 255) : null) : (RW = kR.exec(WW)) ? new uW(RW[1], RW[2], RW[3], 1) : (RW = aR.exec(WW)) ? new uW(255 * RW[1] / 100, 255 * RW[2] / 100, 255 * RW[3] / 100, 1) : (RW = sW.exec(WW)) ? vR(RW[1], RW[2], RW[3], RW[4]) : (RW = dW.exec(WW)) ? vR(255 * RW[1] / 100, 255 * RW[2] / 100, 255 * RW[3] / 100, RW[4]) : (RW = pW.exec(WW)) ? DW(RW[1], RW[2] / 100, RW[3] / 100, 1) : (RW = hW.exec(WW)) ? DW(RW[1], RW[2] / 100, RW[3] / 100, RW[4]) : UW.hasOwnProperty(WW) ? xR(UW[WW]) : "transparent" === WW ? new uW(NaN, NaN, NaN, 0) : null
    }

    function xR(WW) {
      return new uW(WW >> 16 & 255, WW >> 8 & 255, 255 & WW, 1)
    }

    function vR(WW, RW, MW, wW) {
      return wW <= 0 && (WW = RW = MW = NaN), new uW(WW, RW, MW, wW)
    }

    function KW(WW, RW, MW, wW) {
      return 1 === arguments.length ? ((CW = WW) instanceof FW || (CW = mR(CW)), CW ? new uW((CW = CW.rgb()).r, CW.g, CW.b, CW.opacity) : new uW) : new uW(WW, RW, MW, null == wW ? 1 : wW);
      var CW
    }

    function uW(WW, RW, MW, wW) {
      this.r = +WW, this.g = +RW, this.b = +MW, this.opacity = +wW
    }

    function OW() {
      return `#${HW(this.r)}${HW(this.g)}${HW(this.b)}`
    }

    function nW() {
      const WW = GW(this.opacity);
      return `${1===WW?"rgb(":"rgba("}${LW(this.r)}, ${LW(this.g)}, ${LW(this.b)}${1===WW?")":`, ${WW})`}`
    }

    function GW(WW) {
      return isNaN(WW) ? 1 : Math.max(0, Math.min(1, WW))
    }

    function LW(WW) {
      return Math.max(0, Math.min(255, Math.round(WW) || 0))
    }

    function HW(WW) {
      return ((WW = LW(WW)) < 16 ? "0" : "") + WW.toString(16)
    }

    function DW(WW, RW, MW, wW) {
      return wW <= 0 ? WW = RW = MW = NaN : MW <= 0 || MW >= 1 ? WW = RW = NaN : RW <= 0 && (WW = NaN), new ZW(WW, RW, MW, wW)
    }

    function qR(WW) {
      if (WW instanceof ZW) return new ZW(WW.h, WW.s, WW.l, WW.opacity);
      if (WW instanceof FW || (WW = mR(WW)), !WW) return new ZW;
      if (WW instanceof ZW) return WW;
      var RW = (WW = WW.rgb()).r / 255,
        MW = WW.g / 255,
        wW = WW.b / 255,
        CW = Math.min(RW, MW, wW),
        zR = Math.max(RW, MW, wW),
        AW = NaN,
        bR = zR - CW,
        yR = (zR + CW) / 2;
      return bR ? (AW = RW === zR ? (MW - wW) / bR + 6 * (MW < wW) : MW === zR ? (wW - RW) / bR + 2 : (RW - MW) / bR + 4, bR /= yR < .5 ? zR + CW : 2 - zR - CW, AW *= 60) : bR = yR > 0 && yR < 1 ? 0 : AW, new ZW(AW, bR, yR, WW.opacity)
    }

    function ZW(WW, RW, MW, wW) {
      this.h = +WW, this.s = +RW, this.l = +MW, this.opacity = +wW
    }

    function SW(WW) {
      return (WW = (WW || 0) % 360) < 0 ? WW + 360 : WW
    }

    function WR(WW) {
      return Math.max(0, Math.min(1, WW || 0))
    }

    function RR(WW, RW, MW) {
      return 255 * (WW < 60 ? RW + (MW - RW) * WW / 60 : WW < 180 ? MW : WW < 240 ? RW + (MW - RW) * (240 - WW) / 60 : RW)
    }

    function MR(WW, RW, MW, wW, CW) {
      var zR = WW * WW,
        AW = zR * WW;
      return ((1 - 3 * WW + 3 * zR - AW) * RW + (4 - 6 * zR + 3 * AW) * MW + (1 + 3 * WW + 3 * zR - 3 * AW) * wW + AW * CW) / 6
    }
    oW(FW, mR, {
      copy(WW) {
        return Object.assign(new this.constructor, this, WW)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: EW,
      formatHex: EW,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return qR(this).formatHsl()
      },
      formatRgb: VW,
      toString: VW
    }), oW(uW, KW, lW(FW, {
      brighter(WW) {
        return WW = null == WW ? QW : Math.pow(QW, WW), new uW(this.r * WW, this.g * WW, this.b * WW, this.opacity)
      },
      darker(WW) {
        return WW = null == WW ? fW : Math.pow(fW, WW), new uW(this.r * WW, this.g * WW, this.b * WW, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new uW(LW(this.r), LW(this.g), LW(this.b), GW(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: OW,
      formatHex: OW,
      formatHex8: function() {
        return `#${HW(this.r)}${HW(this.g)}${HW(this.b)}${HW(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: nW,
      toString: nW
    })), oW(ZW, (function(WW, RW, MW, wW) {
      return 1 === arguments.length ? qR(WW) : new ZW(WW, RW, MW, null == wW ? 1 : wW)
    }), lW(FW, {
      brighter(WW) {
        return WW = null == WW ? QW : Math.pow(QW, WW), new ZW(this.h, this.s, this.l * WW, this.opacity)
      },
      darker(WW) {
        return WW = null == WW ? fW : Math.pow(fW, WW), new ZW(this.h, this.s, this.l * WW, this.opacity)
      },
      rgb() {
        var WW = this.h % 360 + 360 * (this.h < 0),
          RW = isNaN(WW) || isNaN(this.s) ? 0 : this.s,
          MW = this.l,
          wW = MW + (MW < .5 ? MW : 1 - MW) * RW,
          CW = 2 * MW - wW;
        return new uW(RR(WW >= 240 ? WW - 240 : WW + 120, CW, wW), RR(WW, CW, wW), RR(WW < 120 ? WW + 240 : WW - 120, CW, wW), this.opacity)
      },
      clamp() {
        return new ZW(SW(this.h), WR(this.s), WR(this.l), GW(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const WW = GW(this.opacity);
        return `${1===WW?"hsl(":"hsla("}${SW(this.h)}, ${100*WR(this.s)}%, ${100*WR(this.l)}%${1===WW?")":`, ${WW})`}`
      }
    }));
    const wR = WW => () => WW;

    function CR(WW, RW) {
      return function(MW) {
        return WW + MW * RW
      }
    }

    function zM(WW) {
      return 1 === (WW = +WW) ? AR : function(RW, MW) {
        return MW - RW ? function(WW, RW, MW) {
          return WW = Math.pow(WW, MW), RW = Math.pow(RW, MW) - WW, MW = 1 / MW,
            function(wW) {
              return Math.pow(WW + wW * RW, MW)
            }
        }(RW, MW, WW) : wR(isNaN(RW) ? MW : RW)
      }
    }

    function AR(WW, RW) {
      var MW = RW - WW;
      return MW ? CR(WW, MW) : wR(isNaN(WW) ? RW : WW)
    }
    const bM = function WW(RW) {
      var MW = zM(RW);

      function wW(WW, RW) {
        var wW = MW((WW = KW(WW)).r, (RW = KW(RW)).r),
          CW = MW(WW.g, RW.g),
          zR = MW(WW.b, RW.b),
          AW = AR(WW.opacity, RW.opacity);
        return function(RW) {
          return WW.r = wW(RW), WW.g = CW(RW), WW.b = zR(RW), WW.opacity = AW(RW), WW + ""
        }
      }
      return wW.gamma = WW, wW
    }(1);

    function yM(WW) {
      return function(RW) {
        var MW, wW, CW = RW.length,
          zR = new Array(CW),
          AW = new Array(CW),
          bR = new Array(CW);
        for (MW = 0; MW < CW; ++MW) wW = KW(RW[MW]), zR[MW] = wW.r || 0, AW[MW] = wW.g || 0, bR[MW] = wW.b || 0;
        return zR = WW(zR), AW = WW(AW), bR = WW(bR), wW.opacity = 1,
          function(WW) {
            return wW.r = zR(WW), wW.g = AW(WW), wW.b = bR(WW), wW + ""
          }
      }
    }
    yM((function(WW) {
      var RW = WW.length - 1;
      return function(MW) {
        var wW = MW <= 0 ? MW = 0 : MW >= 1 ? (MW = 1, RW - 1) : Math.floor(MW * RW),
          CW = WW[wW],
          zR = WW[wW + 1],
          AW = wW > 0 ? WW[wW - 1] : 2 * CW - zR,
          bR = wW < RW - 1 ? WW[wW + 2] : 2 * zR - CW;
        return MR((MW - wW / RW) * RW, AW, CW, zR, bR)
      }
    })), yM((function(WW) {
      var RW = WW.length;
      return function(MW) {
        var wW = Math.floor(((MW %= 1) < 0 ? ++MW : MW) * RW),
          CW = WW[(wW + RW - 1) % RW],
          zR = WW[wW % RW],
          AW = WW[(wW + 1) % RW],
          bR = WW[(wW + 2) % RW];
        return MR((MW - wW / RW) * RW, CW, zR, AW, bR)
      }
    }));

    function NR(WW, RW) {
      var MW, wW = RW ? RW.length : 0,
        CW = WW ? Math.min(wW, WW.length) : 0,
        zR = new Array(CW),
        AW = new Array(wW);
      for (MW = 0; MW < CW; ++MW) zR[MW] = JR(WW[MW], RW[MW]);
      for (; MW < wW; ++MW) AW[MW] = RW[MW];
      return function(WW) {
        for (MW = 0; MW < CW; ++MW) AW[MW] = zR[MW](WW);
        return AW
      }
    }

    function eR(WW, RW) {
      var MW = new Date;
      return WW = +WW, RW = +RW,
        function(wW) {
          return MW.setTime(WW * (1 - wW) + RW * wW), MW
        }
    }

    function BR(WW, RW) {
      return WW = +WW, RW = +RW,
        function(MW) {
          return WW * (1 - MW) + RW * MW
        }
    }

    function tM(WW, RW) {
      var MW, wW = {},
        CW = {};
      for (MW in null !== WW && "object" === typeof WW || (WW = {}), null !== RW && "object" === typeof RW || (RW = {}), RW) MW in WW ? wW[MW] = JR(WW[MW], RW[MW]) : CW[MW] = RW[MW];
      return function(WW) {
        for (MW in wW) CW[MW] = wW[MW](WW);
        return CW
      }
    }
    var TR = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      gM = new RegExp(TR.source, "g");

    function iM(WW, RW) {
      var MW, wW, CW, zR = TR.lastIndex = gM.lastIndex = 0,
        AW = -1,
        bR = [],
        yR = [];
      for (WW += "", RW += "";
        (MW = TR.exec(WW)) && (wW = gM.exec(RW));)(CW = wW.index) > zR && (CW = RW.slice(zR, CW), bR[AW] ? bR[AW] += CW : bR[++AW] = CW), (MW = MW[0]) === (wW = wW[0]) ? bR[AW] ? bR[AW] += wW : bR[++AW] = wW : (bR[++AW] = null, yR.push({
        i: AW,
        x: BR(MW, wW)
      })), zR = gM.lastIndex;
      return zR < RW.length && (CW = RW.slice(zR), bR[AW] ? bR[AW] += CW : bR[++AW] = CW), bR.length < 2 ? yR[0] ? function(WW) {
        return function(RW) {
          return WW(RW) + ""
        }
      }(yR[0].x) : function(WW) {
        return function() {
          return WW
        }
      }(RW) : (RW = yR.length, function(WW) {
        for (var MW, wW = 0; wW < RW; ++wW) bR[(MW = yR[wW]).i] = MW.x(WW);
        return bR.join("")
      })
    }

    function YR(WW, RW) {
      RW || (RW = []);
      var MW, wW = WW ? Math.min(RW.length, WW.length) : 0,
        CW = RW.slice();
      return function(zR) {
        for (MW = 0; MW < wW; ++MW) CW[MW] = WW[MW] * (1 - zR) + RW[MW] * zR;
        return CW
      }
    }

    function JR(WW, RW) {
      var MW, wW, CW = typeof RW;
      return null == RW || "boolean" === CW ? wR(RW) : ("number" === CW ? BR : "string" === CW ? (MW = mR(RW)) ? (RW = MW, bM) : iM : RW instanceof mR ? bM : RW instanceof Date ? eR : (wW = RW, !ArrayBuffer.isView(wW) || wW instanceof DataView ? Array.isArray(RW) ? NR : "function" !== typeof RW.valueOf && "function" !== typeof RW.toString || isNaN(RW) ? tM : BR : YR))(WW, RW)
    }

    function PR(WW, RW) {
      return WW = +WW, RW = +RW,
        function(MW) {
          return Math.round(WW * (1 - MW) + RW * MW)
        }
    }

    function IR(WW) {
      return +WW
    }
    var oR = [0, 1];

    function lR(WW) {
      return WW
    }

    function FR(WW, RW) {
      return (RW -= WW = +WW) ? function(MW) {
        return (MW - WW) / RW
      } : (MW = isNaN(RW) ? NaN : .5, function() {
        return MW
      });
      var MW
    }

    function fR(WW, RW, MW) {
      var wW = WW[0],
        CW = WW[1],
        zR = RW[0],
        AW = RW[1];
      return CW < wW ? (wW = FR(CW, wW), zR = MW(AW, zR)) : (wW = FR(wW, CW), zR = MW(zR, AW)),
        function(WW) {
          return zR(wW(WW))
        }
    }

    function QR(WW, RW, MW) {
      var wW = Math.min(WW.length, RW.length) - 1,
        CW = new Array(wW),
        zR = new Array(wW),
        AW = -1;
      for (WW[wW] < WW[0] && (WW = WW.slice().reverse(), RW = RW.slice().reverse()); ++AW < wW;) CW[AW] = FR(WW[AW], WW[AW + 1]), zR[AW] = MW(RW[AW], RW[AW + 1]);
      return function(RW) {
        var MW = IW(WW, RW, 1, wW) - 1;
        return zR[MW](CW[MW](RW))
      }
    }

    function rM(WW, RW) {
      return RW.domain(WW.domain()).range(WW.range()).interpolate(WW.interpolate()).clamp(WW.clamp()).unknown(WW.unknown())
    }

    function cM() {
      var WW, RW, MW, wW, CW, zR, AW = oR,
        bR = oR,
        yR = JR,
        NW = lR;

      function eW() {
        var WW = Math.min(AW.length, bR.length);
        return NW !== lR && (NW = function(WW, RW) {
          var MW;
          return WW > RW && (MW = WW, WW = RW, RW = MW),
            function(MW) {
              return Math.max(WW, Math.min(RW, MW))
            }
        }(AW[0], AW[WW - 1])), wW = WW > 2 ? QR : fR, CW = zR = null, BW
      }

      function BW(RW) {
        return null == RW || isNaN(RW = +RW) ? MW : (CW || (CW = wW(AW.map(WW), bR, yR)))(WW(NW(RW)))
      }
      return BW.invert = function(MW) {
          return NW(RW((zR || (zR = wW(bR, AW.map(WW), BR)))(MW)))
        }, BW.domain = function(WW) {
          return arguments.length ? (AW = Array.from(WW, IR), eW()) : AW.slice()
        }, BW.range = function(WW) {
          return arguments.length ? (bR = Array.from(WW), eW()) : bR.slice()
        }, BW.rangeRound = function(WW) {
          return bR = Array.from(WW), yR = PR, eW()
        }, BW.clamp = function(WW) {
          return arguments.length ? (NW = !!WW || lR, eW()) : NW !== lR
        }, BW.interpolate = function(WW) {
          return arguments.length ? (yR = WW, eW()) : yR
        }, BW.unknown = function(WW) {
          return arguments.length ? (MW = WW, BW) : MW
        },
        function(MW, wW) {
          return WW = MW, RW = wW, eW()
        }
    }

    function XR() {
      return cM()(lR, lR)
    }
    var jM, kM = MW(5122),
      aM = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function sR(WW) {
      if (!(RW = aM.exec(WW))) throw new Error("invalid format: " + WW);
      var RW;
      return new dR({
        fill: RW[1],
        align: RW[2],
        sign: RW[3],
        symbol: RW[4],
        zero: RW[5],
        width: RW[6],
        comma: RW[7],
        precision: RW[8] && RW[8].slice(1),
        trim: RW[9],
        type: RW[10]
      })
    }

    function dR(WW) {
      this.fill = void 0 === WW.fill ? " " : WW.fill + "", this.align = void 0 === WW.align ? ">" : WW.align + "", this.sign = void 0 === WW.sign ? "-" : WW.sign + "", this.symbol = void 0 === WW.symbol ? "" : WW.symbol + "", this.zero = !!WW.zero, this.width = void 0 === WW.width ? void 0 : +WW.width, this.comma = !!WW.comma, this.precision = void 0 === WW.precision ? void 0 : +WW.precision, this.trim = !!WW.trim, this.type = void 0 === WW.type ? "" : WW.type + ""
    }

    function pR(WW, RW) {
      if (!isFinite(WW) || 0 === WW) return null;
      var MW = (WW = RW ? WW.toExponential(RW - 1) : WW.toExponential()).indexOf("e"),
        wW = WW.slice(0, MW);
      return [wW.length > 1 ? wW[0] + wW.slice(2) : wW, +WW.slice(MW + 1)]
    }

    function hR(WW) {
      return (WW = pR(Math.abs(WW))) ? WW[1] : NaN
    }

    function UR(WW, RW) {
      var MW = pR(WW, RW);
      if (!MW) return WW + "";
      var wW = MW[0],
        CW = MW[1];
      return CW < 0 ? "0." + new Array(-CW).join("0") + wW : wW.length > CW + 1 ? wW.slice(0, CW + 1) + "." + wW.slice(CW + 1) : wW + new Array(CW - wW.length + 2).join("0")
    }
    sR.prototype = dR.prototype, dR.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const ER = {
      "%": (WW, RW) => (100 * WW).toFixed(RW),
      b: WW => Math.round(WW).toString(2),
      c: WW => WW + "",
      d: function(WW) {
        return Math.abs(WW = Math.round(WW)) >= 1e21 ? WW.toLocaleString("en").replace(/,/g, "") : WW.toString(10)
      },
      e: (WW, RW) => WW.toExponential(RW),
      f: (WW, RW) => WW.toFixed(RW),
      g: (WW, RW) => WW.toPrecision(RW),
      o: WW => Math.round(WW).toString(8),
      p: (WW, RW) => UR(100 * WW, RW),
      r: UR,
      s: function(WW, RW) {
        var MW = pR(WW, RW);
        if (!MW) return jM = void 0, WW.toPrecision(RW);
        var wW = MW[0],
          CW = MW[1],
          zR = CW - (jM = 3 * Math.max(-8, Math.min(8, Math.floor(CW / 3)))) + 1,
          AW = wW.length;
        return zR === AW ? wW : zR > AW ? wW + new Array(zR - AW + 1).join("0") : zR > 0 ? wW.slice(0, zR) + "." + wW.slice(zR) : "0." + new Array(1 - zR).join("0") + pR(WW, Math.max(0, RW + zR - 1))[0]
      },
      X: WW => Math.round(WW).toString(16).toUpperCase(),
      x: WW => Math.round(WW).toString(16)
    };

    function VR(WW) {
      return WW
    }
    var mM, xM, vM, KR = Array.prototype.map,
      uR = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function OR(WW) {
      var RW, MW, wW = void 0 === WW.grouping || void 0 === WW.thousands ? VR : (RW = KR.call(WW.grouping, Number), MW = WW.thousands + "", function(WW, wW) {
          for (var CW = WW.length, zR = [], AW = 0, bR = RW[0], yR = 0; CW > 0 && bR > 0 && (yR + bR + 1 > wW && (bR = Math.max(1, wW - yR)), zR.push(WW.substring(CW -= bR, CW + bR)), !((yR += bR + 1) > wW));) bR = RW[AW = (AW + 1) % RW.length];
          return zR.reverse().join(MW)
        }),
        CW = void 0 === WW.currency ? "" : WW.currency[0] + "",
        zR = void 0 === WW.currency ? "" : WW.currency[1] + "",
        AW = void 0 === WW.decimal ? "." : WW.decimal + "",
        bR = void 0 === WW.numerals ? VR : function(WW) {
          return function(RW) {
            return RW.replace(/[0-9]/g, (function(RW) {
              return WW[+RW]
            }))
          }
        }(KR.call(WW.numerals, String)),
        yR = void 0 === WW.percent ? "%" : WW.percent + "",
        NW = void 0 === WW.minus ? "\u2212" : WW.minus + "",
        eW = void 0 === WW.nan ? "NaN" : WW.nan + "";

      function BW(WW, RW) {
        var MW = (WW = sR(WW)).fill,
          BW = WW.align,
          tR = WW.sign,
          TW = WW.symbol,
          gR = WW.zero,
          iR = WW.width,
          YW = WW.comma,
          JW = WW.precision,
          PW = WW.trim,
          IW = WW.type;
        "n" === IW ? (YW = !0, IW = "g") : ER[IW] || (void 0 === JW && (JW = 12), PW = !0, IW = "g"), (gR || "0" === MW && "=" === BW) && (gR = !0, MW = "0", BW = "=");
        var oW = (RW && void 0 !== RW.prefix ? RW.prefix : "") + ("$" === TW ? CW : "#" === TW && /[boxX]/.test(IW) ? "0" + IW.toLowerCase() : ""),
          lW = ("$" === TW ? zR : /[%p]/.test(IW) ? yR : "") + (RW && void 0 !== RW.suffix ? RW.suffix : ""),
          FW = ER[IW],
          fW = /[defgprs%]/.test(IW);

        function QW(WW) {
          var RW, CW, zR, yR = oW,
            TW = lW;
          if ("c" === IW) TW = FW(WW) + TW, WW = "";
          else {
            var QW = (WW = +WW) < 0 || 1 / WW < 0;
            if (WW = isNaN(WW) ? eW : FW(Math.abs(WW), JW), PW && (WW = function(WW) {
                WW: for (var RW, MW = WW.length, wW = 1, CW = -1; wW < MW; ++wW) switch (WW[wW]) {
                  case ".":
                    CW = RW = wW;
                    break;
                  case "0":
                    0 === CW && (CW = wW), RW = wW;
                    break;
                  default:
                    if (!+WW[wW]) break WW;
                    CW > 0 && (CW = 0)
                }
                return CW > 0 ? WW.slice(0, CW) + WW.slice(RW + 1) : WW
              }(WW)), QW && 0 === +WW && "+" !== tR && (QW = !1), yR = (QW ? "(" === tR ? tR : NW : "-" === tR || "(" === tR ? "" : tR) + yR, TW = ("s" !== IW || isNaN(WW) || void 0 === jM ? "" : uR[8 + jM / 3]) + TW + (QW && "(" === tR ? ")" : ""), fW)
              for (RW = -1, CW = WW.length; ++RW < CW;)
                if (48 > (zR = WW.charCodeAt(RW)) || zR > 57) {
                  TW = (46 === zR ? AW + WW.slice(RW + 1) : WW.slice(RW)) + TW, WW = WW.slice(0, RW);
                  break
                }
          }
          YW && !gR && (WW = wW(WW, 1 / 0));
          var rR = yR.length + WW.length + TW.length,
            cR = rR < iR ? new Array(iR - rR + 1).join(MW) : "";
          switch (YW && gR && (WW = wW(cR + WW, cR.length ? iR - TW.length : 1 / 0), cR = ""), BW) {
            case "<":
              WW = yR + WW + TW + cR;
              break;
            case "=":
              WW = yR + cR + WW + TW;
              break;
            case "^":
              WW = cR.slice(0, rR = cR.length >> 1) + yR + WW + TW + cR.slice(rR);
              break;
            default:
              WW = cR + yR + WW + TW
          }
          return bR(WW)
        }
        return JW = void 0 === JW ? 6 : /[gprs]/.test(IW) ? Math.max(1, Math.min(21, JW)) : Math.max(0, Math.min(20, JW)), QW.toString = function() {
          return WW + ""
        }, QW
      }
      return {
        format: BW,
        formatPrefix: function(WW, RW) {
          var MW = 3 * Math.max(-8, Math.min(8, Math.floor(hR(RW) / 3))),
            wW = Math.pow(10, -MW),
            CW = BW(((WW = sR(WW)).type = "f", WW), {
              suffix: uR[8 + MW / 3]
            });
          return function(WW) {
            return CW(wW * WW)
          }
        }
      }
    }

    function nR(WW, RW, MW, wW) {
      var CW, zR = BW(WW, RW, MW);
      switch ((wW = sR(null == wW ? ",f" : wW)).type) {
        case "s":
          var AW = Math.max(Math.abs(WW), Math.abs(RW));
          return null != wW.precision || isNaN(CW = function(WW, RW) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(hR(RW) / 3))) - hR(Math.abs(WW)))
          }(zR, AW)) || (wW.precision = CW), vM(wW, AW);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != wW.precision || isNaN(CW = function(WW, RW) {
            return WW = Math.abs(WW), RW = Math.abs(RW) - WW, Math.max(0, hR(RW) - hR(WW)) + 1
          }(zR, Math.max(Math.abs(WW), Math.abs(RW)))) || (wW.precision = CW - ("e" === wW.type));
          break;
        case "f":
        case "%":
          null != wW.precision || isNaN(CW = function(WW) {
            return Math.max(0, -hR(Math.abs(WW)))
          }(zR)) || (wW.precision = CW - 2 * ("%" === wW.type))
      }
      return xM(wW)
    }

    function GR(WW) {
      var RW = WW.domain;
      return WW.ticks = function(WW) {
        var MW = RW();
        return NW(MW[0], MW[MW.length - 1], null == WW ? 10 : WW)
      }, WW.tickFormat = function(WW, MW) {
        var wW = RW();
        return nR(wW[0], wW[wW.length - 1], null == WW ? 10 : WW, MW)
      }, WW.nice = function(MW) {
        null == MW && (MW = 10);
        var wW, CW, zR = RW(),
          AW = 0,
          bR = zR.length - 1,
          yR = zR[AW],
          NW = zR[bR],
          BW = 10;
        for (NW < yR && (CW = yR, yR = NW, NW = CW, CW = AW, AW = bR, bR = CW); BW-- > 0;) {
          if ((CW = eW(yR, NW, MW)) === wW) return zR[AW] = yR, zR[bR] = NW, RW(zR);
          if (CW > 0) yR = Math.floor(yR / CW) * CW, NW = Math.ceil(NW / CW) * CW;
          else {
            if (!(CW < 0)) break;
            yR = Math.ceil(yR * CW) / CW, NW = Math.floor(NW * CW) / CW
          }
          wW = CW
        }
        return WW
      }, WW
    }

    function LR() {
      var WW = XR();
      return WW.copy = function() {
        return rM(WW, LR())
      }, kM.h.apply(WW, arguments), GR(WW)
    }

    function HR(WW) {
      var RW;

      function MW(WW) {
        return null == WW || isNaN(WW = +WW) ? RW : WW
      }
      return MW.invert = MW, MW.domain = MW.range = function(RW) {
        return arguments.length ? (WW = Array.from(RW, IR), MW) : WW.slice()
      }, MW.unknown = function(WW) {
        return arguments.length ? (RW = WW, MW) : RW
      }, MW.copy = function() {
        return HR(WW).unknown(RW)
      }, WW = arguments.length ? Array.from(WW, IR) : [0, 1], GR(MW)
    }

    function DR(WW, RW) {
      var MW, wW = 0,
        CW = (WW = WW.slice()).length - 1,
        zR = WW[wW],
        AW = WW[CW];
      return AW < zR && (MW = wW, wW = CW, CW = MW, MW = zR, zR = AW, AW = MW), WW[wW] = RW.floor(zR), WW[CW] = RW.ceil(AW), WW
    }

    function qM(WW) {
      return Math.log(WW)
    }

    function ZR(WW) {
      return Math.exp(WW)
    }

    function SR(WW) {
      return -Math.log(-WW)
    }

    function WM(WW) {
      return -Math.exp(-WW)
    }

    function RM(WW) {
      return isFinite(WW) ? +("1e" + WW) : WW < 0 ? 0 : WW
    }

    function MM(WW) {
      return (RW, MW) => -WW(-RW, MW)
    }

    function wM(WW) {
      const RW = WW(qM, ZR),
        MW = RW.domain;
      let wW, CW, zR = 10;

      function AW() {
        return wW = function(WW) {
          return WW === Math.E ? Math.log : 10 === WW && Math.log10 || 2 === WW && Math.log2 || (WW = Math.log(WW), RW => Math.log(RW) / WW)
        }(zR), CW = function(WW) {
          return 10 === WW ? RM : WW === Math.E ? Math.exp : RW => Math.pow(WW, RW)
        }(zR), MW()[0] < 0 ? (wW = MM(wW), CW = MM(CW), WW(SR, WM)) : WW(qM, ZR), RW
      }
      return RW.base = function(WW) {
        return arguments.length ? (zR = +WW, AW()) : zR
      }, RW.domain = function(WW) {
        return arguments.length ? (MW(WW), AW()) : MW()
      }, RW.ticks = WW => {
        const RW = MW();
        let AW = RW[0],
          bR = RW[RW.length - 1];
        const yR = bR < AW;
        yR && ([AW, bR] = [bR, AW]);
        let eW, BW, tR = wW(AW),
          TW = wW(bR);
        const gR = null == WW ? 10 : +WW;
        let iR = [];
        if (!(zR % 1) && TW - tR < gR) {
          if (tR = Math.floor(tR), TW = Math.ceil(TW), AW > 0) {
            for (; tR <= TW; ++tR)
              for (eW = 1; eW < zR; ++eW)
                if (BW = tR < 0 ? eW / CW(-tR) : eW * CW(tR), !(BW < AW)) {
                  if (BW > bR) break;
                  iR.push(BW)
                }
          } else
            for (; tR <= TW; ++tR)
              for (eW = zR - 1; eW >= 1; --eW)
                if (BW = tR > 0 ? eW / CW(-tR) : eW * CW(tR), !(BW < AW)) {
                  if (BW > bR) break;
                  iR.push(BW)
                } 2 * iR.length < gR && (iR = NW(AW, bR, gR))
        } else iR = NW(tR, TW, Math.min(TW - tR, gR)).map(CW);
        return yR ? iR.reverse() : iR
      }, RW.tickFormat = (WW, MW) => {
        if (null == WW && (WW = 10), null == MW && (MW = 10 === zR ? "s" : ","), "function" !== typeof MW && (zR % 1 || null != (MW = sR(MW)).precision || (MW.trim = !0), MW = xM(MW)), WW === 1 / 0) return MW;
        const AW = Math.max(1, zR * WW / RW.ticks().length);
        return WW => {
          let RW = WW / CW(Math.round(wW(WW)));
          return RW * zR < zR - .5 && (RW *= zR), RW <= AW ? MW(WW) : ""
        }
      }, RW.nice = () => MW(DR(MW(), {
        floor: WW => CW(Math.floor(wW(WW))),
        ceil: WW => CW(Math.ceil(wW(WW)))
      })), RW
    }

    function CM() {
      const WW = wM(cM()).domain([1, 10]);
      return WW.copy = () => rM(WW, CM()).base(WW.base()), kM.h.apply(WW, arguments), WW
    }

    function zw(WW) {
      return function(RW) {
        return Math.sign(RW) * Math.log1p(Math.abs(RW / WW))
      }
    }

    function AM(WW) {
      return function(RW) {
        return Math.sign(RW) * Math.expm1(Math.abs(RW)) * WW
      }
    }

    function bw(WW) {
      var RW = 1,
        MW = WW(zw(RW), AM(RW));
      return MW.constant = function(MW) {
        return arguments.length ? WW(zw(RW = +MW), AM(RW)) : RW
      }, GR(MW)
    }

    function yw() {
      var WW = bw(cM());
      return WW.copy = function() {
        return rM(WW, yw()).constant(WW.constant())
      }, kM.h.apply(WW, arguments)
    }
    mM = OR({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), xM = mM.format, vM = mM.formatPrefix;
    var NM = MW(5127);

    function eM(WW) {
      return function(RW) {
        return RW < 0 ? -Math.pow(-RW, WW) : Math.pow(RW, WW)
      }
    }

    function BM(WW) {
      return WW < 0 ? -Math.sqrt(-WW) : Math.sqrt(WW)
    }

    function tw(WW) {
      return WW < 0 ? -WW * WW : WW * WW
    }

    function TM(WW) {
      var RW = WW(lR, lR),
        MW = 1;
      return RW.exponent = function(RW) {
        return arguments.length ? 1 === (MW = +RW) ? WW(lR, lR) : .5 === MW ? WW(BM, tw) : WW(eM(MW), eM(1 / MW)) : MW
      }, GR(RW)
    }

    function gw() {
      var WW = TM(cM());
      return WW.copy = function() {
        return rM(WW, gw()).exponent(WW.exponent())
      }, kM.h.apply(WW, arguments), WW
    }

    function iw() {
      return gw.apply(null, arguments).exponent(.5)
    }

    function YM(WW) {
      return Math.sign(WW) * WW * WW
    }

    function JM() {
      var WW, RW = XR(),
        MW = [0, 1],
        wW = !1;

      function CW(MW) {
        var CW = function(WW) {
          return Math.sign(WW) * Math.sqrt(Math.abs(WW))
        }(RW(MW));
        return isNaN(CW) ? WW : wW ? Math.round(CW) : CW
      }
      return CW.invert = function(WW) {
        return RW.invert(YM(WW))
      }, CW.domain = function(WW) {
        return arguments.length ? (RW.domain(WW), CW) : RW.domain()
      }, CW.range = function(WW) {
        return arguments.length ? (RW.range((MW = Array.from(WW, IR)).map(YM)), CW) : MW.slice()
      }, CW.rangeRound = function(WW) {
        return CW.range(WW).round(!0)
      }, CW.round = function(WW) {
        return arguments.length ? (wW = !!WW, CW) : wW
      }, CW.clamp = function(WW) {
        return arguments.length ? (RW.clamp(WW), CW) : RW.clamp()
      }, CW.unknown = function(RW) {
        return arguments.length ? (WW = RW, CW) : WW
      }, CW.copy = function() {
        return JM(RW.domain(), MW).round(wW).clamp(RW.clamp()).unknown(WW)
      }, kM.h.apply(CW, arguments), GR(CW)
    }

    function PM(WW, RW) {
      let MW;
      if (void 0 === RW)
        for (const wW of WW) null != wW && (MW < wW || void 0 === MW && wW >= wW) && (MW = wW);
      else {
        let wW = -1;
        for (let CW of WW) null != (CW = RW(CW, ++wW, WW)) && (MW < CW || void 0 === MW && CW >= CW) && (MW = CW)
      }
      return MW
    }

    function IM(WW, RW) {
      let MW;
      if (void 0 === RW)
        for (const wW of WW) null != wW && (MW > wW || void 0 === MW && wW >= wW) && (MW = wW);
      else {
        let wW = -1;
        for (let CW of WW) null != (CW = RW(CW, ++wW, WW)) && (MW > CW || void 0 === MW && CW >= CW) && (MW = CW)
      }
      return MW
    }

    function oM() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tR;
      if (WW === tR) return lM;
      if ("function" !== typeof WW) throw new TypeError("compare is not a function");
      return (RW, MW) => {
        const wW = WW(RW, MW);
        return wW || 0 === wW ? wW : (0 === WW(MW, MW)) - (0 === WW(RW, RW))
      }
    }

    function lM(WW, RW) {
      return (null == WW || !(WW >= WW)) - (null == RW || !(RW >= RW)) || (WW < RW ? -1 : WW > RW ? 1 : 0)
    }

    function FM(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        CW = arguments.length > 4 ? arguments[4] : void 0;
      if (RW = Math.floor(RW), MW = Math.floor(Math.max(0, MW)), wW = Math.floor(Math.min(WW.length - 1, wW)), !(MW <= RW && RW <= wW)) return WW;
      for (CW = void 0 === CW ? lM : oM(CW); wW > MW;) {
        if (wW - MW > 600) {
          const zR = wW - MW + 1,
            AW = RW - MW + 1,
            bR = Math.log(zR),
            yR = .5 * Math.exp(2 * bR / 3),
            NW = .5 * Math.sqrt(bR * yR * (zR - yR) / zR) * (AW - zR / 2 < 0 ? -1 : 1);
          FM(WW, RW, Math.max(MW, Math.floor(RW - AW * yR / zR + NW)), Math.min(wW, Math.floor(RW + (zR - AW) * yR / zR + NW)), CW)
        }
        const zR = WW[RW];
        let AW = MW,
          bR = wW;
        for (fM(WW, MW, RW), CW(WW[wW], zR) > 0 && fM(WW, MW, wW); AW < bR;) {
          for (fM(WW, AW, bR), ++AW, --bR; CW(WW[AW], zR) < 0;) ++AW;
          for (; CW(WW[bR], zR) > 0;) --bR
        }
        0 === CW(WW[MW], zR) ? fM(WW, MW, bR) : (++bR, fM(WW, bR, wW)), bR <= RW && (MW = bR + 1), RW <= bR && (wW = bR - 1)
      }
      return WW
    }

    function fM(WW, RW, MW) {
      const wW = WW[RW];
      WW[RW] = WW[MW], WW[MW] = wW
    }

    function QM(WW, RW, MW) {
      if (WW = Float64Array.from(function*(WW, RW) {
          if (void 0 === RW)
            for (let MW of WW) null != MW && (MW = +MW) >= MW && (yield MW);
          else {
            let MW = -1;
            for (let wW of WW) null != (wW = RW(wW, ++MW, WW)) && (wW = +wW) >= wW && (yield wW)
          }
        }(WW, MW)), (wW = WW.length) && !isNaN(RW = +RW)) {
        if (RW <= 0 || wW < 2) return IM(WW);
        if (RW >= 1) return PM(WW);
        var wW, CW = (wW - 1) * RW,
          zR = Math.floor(CW),
          AW = PM(FM(WW, zR).subarray(0, zR + 1));
        return AW + (IM(WW.subarray(zR + 1)) - AW) * (CW - zR)
      }
    }

    function rw(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YW;
      if ((wW = WW.length) && !isNaN(RW = +RW)) {
        if (RW <= 0 || wW < 2) return +MW(WW[0], 0, WW);
        if (RW >= 1) return +MW(WW[wW - 1], wW - 1, WW);
        var wW, CW = (wW - 1) * RW,
          zR = Math.floor(CW),
          AW = +MW(WW[zR], zR, WW);
        return AW + (+MW(WW[zR + 1], zR + 1, WW) - AW) * (CW - zR)
      }
    }

    function cwW() {
      var WW, RW = [],
        MW = [],
        wW = [];

      function CW() {
        var WW = 0,
          CW = Math.max(1, MW.length);
        for (wW = new Array(CW - 1); ++WW < CW;) wW[WW - 1] = rw(RW, WW / CW);
        return zR
      }

      function zR(RW) {
        return null == RW || isNaN(RW = +RW) ? WW : MW[IW(wW, RW)]
      }
      return zR.invertExtent = function(WW) {
        var CW = MW.indexOf(WW);
        return CW < 0 ? [NaN, NaN] : [CW > 0 ? wW[CW - 1] : RW[0], CW < wW.length ? wW[CW] : RW[RW.length - 1]]
      }, zR.domain = function(WW) {
        if (!arguments.length) return RW.slice();
        RW = [];
        for (let MW of WW) null == MW || isNaN(MW = +MW) || RW.push(MW);
        return RW.sort(tR), CW()
      }, zR.range = function(WW) {
        return arguments.length ? (MW = Array.from(WW), CW()) : MW.slice()
      }, zR.unknown = function(RW) {
        return arguments.length ? (WW = RW, zR) : WW
      }, zR.quantiles = function() {
        return wW.slice()
      }, zR.copy = function() {
        return cwW().domain(RW).range(MW).unknown(WW)
      }, kM.h.apply(zR, arguments)
    }

    function XM() {
      var WW, RW = 0,
        MW = 1,
        wW = 1,
        CW = [.5],
        zR = [0, 1];

      function AW(RW) {
        return null != RW && RW <= RW ? zR[IW(CW, RW, 0, wW)] : WW
      }

      function bR() {
        var WW = -1;
        for (CW = new Array(wW); ++WW < wW;) CW[WW] = ((WW + 1) * MW - (WW - wW) * RW) / (wW + 1);
        return AW
      }
      return AW.domain = function(WW) {
        return arguments.length ? ([RW, MW] = WW, RW = +RW, MW = +MW, bR()) : [RW, MW]
      }, AW.range = function(WW) {
        return arguments.length ? (wW = (zR = Array.from(WW)).length - 1, bR()) : zR.slice()
      }, AW.invertExtent = function(WW) {
        var AW = zR.indexOf(WW);
        return AW < 0 ? [NaN, NaN] : AW < 1 ? [RW, CW[0]] : AW >= wW ? [CW[wW - 1], MW] : [CW[AW - 1], CW[AW]]
      }, AW.unknown = function(RW) {
        return arguments.length ? (WW = RW, AW) : AW
      }, AW.thresholds = function() {
        return CW.slice()
      }, AW.copy = function() {
        return XM().domain([RW, MW]).range(zR).unknown(WW)
      }, kM.h.apply(GR(AW), arguments)
    }

    function jw() {
      var WW, RW = [.5],
        MW = [0, 1],
        wW = 1;

      function CW(CW) {
        return null != CW && CW <= CW ? MW[IW(RW, CW, 0, wW)] : WW
      }
      return CW.domain = function(WW) {
        return arguments.length ? (RW = Array.from(WW), wW = Math.min(RW.length, MW.length - 1), CW) : RW.slice()
      }, CW.range = function(WW) {
        return arguments.length ? (MW = Array.from(WW), wW = Math.min(RW.length, MW.length - 1), CW) : MW.slice()
      }, CW.invertExtent = function(WW) {
        var wW = MW.indexOf(WW);
        return [RW[wW - 1], RW[wW]]
      }, CW.unknown = function(RW) {
        return arguments.length ? (WW = RW, CW) : WW
      }, CW.copy = function() {
        return jw().domain(RW).range(MW).unknown(WW)
      }, kM.h.apply(CW, arguments)
    }
    const kw = 1e3,
      aw = 6e4,
      sM = 36e5,
      dM = 864e5,
      pM = 6048e5,
      hM = 2592e6,
      UM = 31536e6,
      EM = new Date,
      VM = new Date;

    function mw(WW, RW, MW, wW) {
      function CW(RW) {
        return WW(RW = 0 === arguments.length ? new Date : new Date(+RW)), RW
      }
      return CW.floor = RW => (WW(RW = new Date(+RW)), RW), CW.ceil = MW => (WW(MW = new Date(MW - 1)), RW(MW, 1), WW(MW), MW), CW.round = WW => {
        const RW = CW(WW),
          MW = CW.ceil(WW);
        return WW - RW < MW - WW ? RW : MW
      }, CW.offset = (WW, MW) => (RW(WW = new Date(+WW), null == MW ? 1 : Math.floor(MW)), WW), CW.range = (MW, wW, zR) => {
        const AW = [];
        if (MW = CW.ceil(MW), zR = null == zR ? 1 : Math.floor(zR), !(MW < wW) || !(zR > 0)) return AW;
        let bR;
        do {
          AW.push(bR = new Date(+MW)), RW(MW, zR), WW(MW)
        } while (bR < MW && MW < wW);
        return AW
      }, CW.filter = MW => mw((RW => {
        if (RW >= RW)
          for (; WW(RW), !MW(RW);) RW.setTime(RW - 1)
      }), ((WW, wW) => {
        if (WW >= WW)
          if (wW < 0)
            for (; ++wW <= 0;)
              for (; RW(WW, -1), !MW(WW););
          else
            for (; --wW >= 0;)
              for (; RW(WW, 1), !MW(WW););
      })), MW && (CW.count = (RW, wW) => (EM.setTime(+RW), VM.setTime(+wW), WW(EM), WW(VM), Math.floor(MW(EM, VM))), CW.every = WW => (WW = Math.floor(WW), isFinite(WW) && WW > 0 ? WW > 1 ? CW.filter(wW ? RW => wW(RW) % WW === 0 : RW => CW.count(0, RW) % WW === 0) : CW : null)), CW
    }
    const xw = mw((() => {}), ((WW, RW) => {
      WW.setTime(+WW + RW)
    }), ((WW, RW) => RW - WW));
    xw.every = WW => (WW = Math.floor(WW), isFinite(WW) && WW > 0 ? WW > 1 ? mw((RW => {
      RW.setTime(Math.floor(RW / WW) * WW)
    }), ((RW, MW) => {
      RW.setTime(+RW + MW * WW)
    }), ((RW, MW) => (MW - RW) / WW)) : xw : null);
    xw.range;
    const vw = mw((WW => {
        WW.setTime(WW - WW.getMilliseconds())
      }), ((WW, RW) => {
        WW.setTime(+WW + RW * kw)
      }), ((WW, RW) => (RW - WW) / kw), (WW => WW.getUTCSeconds())),
      KM = (vw.range, mw((WW => {
        WW.setTime(WW - WW.getMilliseconds() - WW.getSeconds() * kw)
      }), ((WW, RW) => {
        WW.setTime(+WW + RW * aw)
      }), ((WW, RW) => (RW - WW) / aw), (WW => WW.getMinutes()))),
      uM = (KM.range, mw((WW => {
        WW.setUTCSeconds(0, 0)
      }), ((WW, RW) => {
        WW.setTime(+WW + RW * aw)
      }), ((WW, RW) => (RW - WW) / aw), (WW => WW.getUTCMinutes()))),
      OM = (uM.range, mw((WW => {
        WW.setTime(WW - WW.getMilliseconds() - WW.getSeconds() * kw - WW.getMinutes() * aw)
      }), ((WW, RW) => {
        WW.setTime(+WW + RW * sM)
      }), ((WW, RW) => (RW - WW) / sM), (WW => WW.getHours()))),
      nM = (OM.range, mw((WW => {
        WW.setUTCMinutes(0, 0, 0)
      }), ((WW, RW) => {
        WW.setTime(+WW + RW * sM)
      }), ((WW, RW) => (RW - WW) / sM), (WW => WW.getUTCHours()))),
      GM = (nM.range, mw((WW => WW.setHours(0, 0, 0, 0)), ((WW, RW) => WW.setDate(WW.getDate() + RW)), ((WW, RW) => (RW - WW - (RW.getTimezoneOffset() - WW.getTimezoneOffset()) * aw) / dM), (WW => WW.getDate() - 1))),
      LM = (GM.range, mw((WW => {
        WW.setUTCHours(0, 0, 0, 0)
      }), ((WW, RW) => {
        WW.setUTCDate(WW.getUTCDate() + RW)
      }), ((WW, RW) => (RW - WW) / dM), (WW => WW.getUTCDate() - 1))),
      HM = (LM.range, mw((WW => {
        WW.setUTCHours(0, 0, 0, 0)
      }), ((WW, RW) => {
        WW.setUTCDate(WW.getUTCDate() + RW)
      }), ((WW, RW) => (RW - WW) / dM), (WW => Math.floor(WW / dM))));
    HM.range;

    function DM(WW) {
      return mw((RW => {
        RW.setDate(RW.getDate() - (RW.getDay() + 7 - WW) % 7), RW.setHours(0, 0, 0, 0)
      }), ((WW, RW) => {
        WW.setDate(WW.getDate() + 7 * RW)
      }), ((WW, RW) => (RW - WW - (RW.getTimezoneOffset() - WW.getTimezoneOffset()) * aw) / pM))
    }
    const qw = DM(0),
      ZM = DM(1),
      SM = DM(2),
      Ww = DM(3),
      Rw = DM(4),
      Mw = DM(5),
      ww = DM(6);
    qw.range, ZM.range, SM.range, Ww.range, Rw.range, Mw.range, ww.range;

    function Cw(WW) {
      return mw((RW => {
        RW.setUTCDate(RW.getUTCDate() - (RW.getUTCDay() + 7 - WW) % 7), RW.setUTCHours(0, 0, 0, 0)
      }), ((WW, RW) => {
        WW.setUTCDate(WW.getUTCDate() + 7 * RW)
      }), ((WW, RW) => (RW - WW) / pM))
    }
    const zC = Cw(0),
      Aw = Cw(1),
      bC = Cw(2),
      yC = Cw(3),
      Nw = Cw(4),
      ew = Cw(5),
      Bw = Cw(6),
      tC = (zC.range, Aw.range, bC.range, yC.range, Nw.range, ew.range, Bw.range, mw((WW => {
        WW.setDate(1), WW.setHours(0, 0, 0, 0)
      }), ((WW, RW) => {
        WW.setMonth(WW.getMonth() + RW)
      }), ((WW, RW) => RW.getMonth() - WW.getMonth() + 12 * (RW.getFullYear() - WW.getFullYear())), (WW => WW.getMonth()))),
      Tw = (tC.range, mw((WW => {
        WW.setUTCDate(1), WW.setUTCHours(0, 0, 0, 0)
      }), ((WW, RW) => {
        WW.setUTCMonth(WW.getUTCMonth() + RW)
      }), ((WW, RW) => RW.getUTCMonth() - WW.getUTCMonth() + 12 * (RW.getUTCFullYear() - WW.getUTCFullYear())), (WW => WW.getUTCMonth()))),
      gC = (Tw.range, mw((WW => {
        WW.setMonth(0, 1), WW.setHours(0, 0, 0, 0)
      }), ((WW, RW) => {
        WW.setFullYear(WW.getFullYear() + RW)
      }), ((WW, RW) => RW.getFullYear() - WW.getFullYear()), (WW => WW.getFullYear())));
    gC.every = WW => isFinite(WW = Math.floor(WW)) && WW > 0 ? mw((RW => {
      RW.setFullYear(Math.floor(RW.getFullYear() / WW) * WW), RW.setMonth(0, 1), RW.setHours(0, 0, 0, 0)
    }), ((RW, MW) => {
      RW.setFullYear(RW.getFullYear() + MW * WW)
    })) : null;
    gC.range;
    const iC = mw((WW => {
      WW.setUTCMonth(0, 1), WW.setUTCHours(0, 0, 0, 0)
    }), ((WW, RW) => {
      WW.setUTCFullYear(WW.getUTCFullYear() + RW)
    }), ((WW, RW) => RW.getUTCFullYear() - WW.getUTCFullYear()), (WW => WW.getUTCFullYear()));
    iC.every = WW => isFinite(WW = Math.floor(WW)) && WW > 0 ? mw((RW => {
      RW.setUTCFullYear(Math.floor(RW.getUTCFullYear() / WW) * WW), RW.setUTCMonth(0, 1), RW.setUTCHours(0, 0, 0, 0)
    }), ((RW, MW) => {
      RW.setUTCFullYear(RW.getUTCFullYear() + MW * WW)
    })) : null;
    iC.range;

    function Yw(WW, RW, MW, wW, CW, zR) {
      const AW = [
        [vw, 1, kw],
        [vw, 5, 5e3],
        [vw, 15, 15e3],
        [vw, 30, 3e4],
        [zR, 1, aw],
        [zR, 5, 3e5],
        [zR, 15, 9e5],
        [zR, 30, 18e5],
        [CW, 1, sM],
        [CW, 3, 108e5],
        [CW, 6, 216e5],
        [CW, 12, 432e5],
        [wW, 1, dM],
        [wW, 2, 1728e5],
        [MW, 1, pM],
        [RW, 1, hM],
        [RW, 3, 7776e6],
        [WW, 1, UM]
      ];

      function bR(RW, MW, wW) {
        const CW = Math.abs(MW - RW) / wW,
          zR = gR((WW => {
            let [, , RW] = WW;
            return RW
          })).right(AW, CW);
        if (zR === AW.length) return WW.every(BW(RW / UM, MW / UM, wW));
        if (0 === zR) return xw.every(Math.max(BW(RW, MW, wW), 1));
        const [bR, yR] = AW[CW / AW[zR - 1][2] < AW[zR][2] / CW ? zR - 1 : zR];
        return bR.every(yR)
      }
      return [function(WW, RW, MW) {
        const wW = RW < WW;
        wW && ([WW, RW] = [RW, WW]);
        const CW = MW && "function" === typeof MW.range ? MW : bR(WW, RW, MW),
          zR = CW ? CW.range(WW, +RW + 1) : [];
        return wW ? zR.reverse() : zR
      }, bR]
    }
    const [Jw, Pw] = Yw(iC, Tw, zC, HM, nM, uM), [Iw, ow] = Yw(gC, tC, qw, GM, OM, KM);

    function lw(WW) {
      if (0 <= WW.y && WW.y < 100) {
        var RW = new Date(-1, WW.m, WW.d, WW.H, WW.M, WW.S, WW.L);
        return RW.setFullYear(WW.y), RW
      }
      return new Date(WW.y, WW.m, WW.d, WW.H, WW.M, WW.S, WW.L)
    }

    function Fw(WW) {
      if (0 <= WW.y && WW.y < 100) {
        var RW = new Date(Date.UTC(-1, WW.m, WW.d, WW.H, WW.M, WW.S, WW.L));
        return RW.setUTCFullYear(WW.y), RW
      }
      return new Date(Date.UTC(WW.y, WW.m, WW.d, WW.H, WW.M, WW.S, WW.L))
    }

    function fw(WW, RW, MW) {
      return {
        y: WW,
        m: RW,
        d: MW,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var Qw, rC, cC, Xw = {
        "-": "",
        _: " ",
        0: "0"
      },
      jC = /^\s*\d+/,
      kC = /^%/,
      aC = /[\\^$*+?|[\]().{}]/g;

    function sw(WW, RW, MW) {
      var wW = WW < 0 ? "-" : "",
        CW = (wW ? -WW : WW) + "",
        zR = CW.length;
      return wW + (zR < MW ? new Array(MW - zR + 1).join(RW) + CW : CW)
    }

    function dw(WW) {
      return WW.replace(aC, "\\$&")
    }

    function pw(WW) {
      return new RegExp("^(?:" + WW.map(dw).join("|") + ")", "i")
    }

    function hw(WW) {
      return new Map(WW.map(((WW, RW) => [WW.toLowerCase(), RW])))
    }

    function Uw(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 1));
      return wW ? (WW.w = +wW[0], MW + wW[0].length) : -1
    }

    function Ew(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 1));
      return wW ? (WW.u = +wW[0], MW + wW[0].length) : -1
    }

    function Vw(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 2));
      return wW ? (WW.U = +wW[0], MW + wW[0].length) : -1
    }

    function mC(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 2));
      return wW ? (WW.V = +wW[0], MW + wW[0].length) : -1
    }

    function xC(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 2));
      return wW ? (WW.W = +wW[0], MW + wW[0].length) : -1
    }

    function vC(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 4));
      return wW ? (WW.y = +wW[0], MW + wW[0].length) : -1
    }

    function Kw(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 2));
      return wW ? (WW.y = +wW[0] + (+wW[0] > 68 ? 1900 : 2e3), MW + wW[0].length) : -1
    }

    function uw(WW, RW, MW) {
      var wW = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(RW.slice(MW, MW + 6));
      return wW ? (WW.Z = wW[1] ? 0 : -(wW[2] + (wW[3] || "00")), MW + wW[0].length) : -1
    }

    function Ow(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 1));
      return wW ? (WW.q = 3 * wW[0] - 3, MW + wW[0].length) : -1
    }

    function nw(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 2));
      return wW ? (WW.m = wW[0] - 1, MW + wW[0].length) : -1
    }

    function Gw(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 2));
      return wW ? (WW.d = +wW[0], MW + wW[0].length) : -1
    }

    function Lw(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 3));
      return wW ? (WW.m = 0, WW.d = +wW[0], MW + wW[0].length) : -1
    }

    function Hw(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 2));
      return wW ? (WW.H = +wW[0], MW + wW[0].length) : -1
    }

    function Dw(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 2));
      return wW ? (WW.M = +wW[0], MW + wW[0].length) : -1
    }

    function qC(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 2));
      return wW ? (WW.S = +wW[0], MW + wW[0].length) : -1
    }

    function Zw(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 3));
      return wW ? (WW.L = +wW[0], MW + wW[0].length) : -1
    }

    function Sw(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW, MW + 6));
      return wW ? (WW.L = Math.floor(wW[0] / 1e3), MW + wW[0].length) : -1
    }

    function WC(WW, RW, MW) {
      var wW = kC.exec(RW.slice(MW, MW + 1));
      return wW ? MW + wW[0].length : -1
    }

    function RC(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW));
      return wW ? (WW.Q = +wW[0], MW + wW[0].length) : -1
    }

    function MC(WW, RW, MW) {
      var wW = jC.exec(RW.slice(MW));
      return wW ? (WW.s = +wW[0], MW + wW[0].length) : -1
    }

    function wC(WW, RW) {
      return sw(WW.getDate(), RW, 2)
    }

    function CC(WW, RW) {
      return sw(WW.getHours(), RW, 2)
    }

    function zz(WW, RW) {
      return sw(WW.getHours() % 12 || 12, RW, 2)
    }

    function AC(WW, RW) {
      return sw(1 + GM.count(gC(WW), WW), RW, 3)
    }

    function bz(WW, RW) {
      return sw(WW.getMilliseconds(), RW, 3)
    }

    function yz(WW, RW) {
      return bz(WW, RW) + "000"
    }

    function NC(WW, RW) {
      return sw(WW.getMonth() + 1, RW, 2)
    }

    function eC(WW, RW) {
      return sw(WW.getMinutes(), RW, 2)
    }

    function BC(WW, RW) {
      return sw(WW.getSeconds(), RW, 2)
    }

    function tz(WW) {
      var RW = WW.getDay();
      return 0 === RW ? 7 : RW
    }

    function TC(WW, RW) {
      return sw(qw.count(gC(WW) - 1, WW), RW, 2)
    }

    function gz(WW) {
      var RW = WW.getDay();
      return RW >= 4 || 0 === RW ? Rw(WW) : Rw.ceil(WW)
    }

    function iz(WW, RW) {
      return WW = gz(WW), sw(Rw.count(gC(WW), WW) + (4 === gC(WW).getDay()), RW, 2)
    }

    function YC(WW) {
      return WW.getDay()
    }

    function JC(WW, RW) {
      return sw(ZM.count(gC(WW) - 1, WW), RW, 2)
    }

    function PC(WW, RW) {
      return sw(WW.getFullYear() % 100, RW, 2)
    }

    function IC(WW, RW) {
      return sw((WW = gz(WW)).getFullYear() % 100, RW, 2)
    }

    function oC(WW, RW) {
      return sw(WW.getFullYear() % 1e4, RW, 4)
    }

    function lC(WW, RW) {
      var MW = WW.getDay();
      return sw((WW = MW >= 4 || 0 === MW ? Rw(WW) : Rw.ceil(WW)).getFullYear() % 1e4, RW, 4)
    }

    function FC(WW) {
      var RW = WW.getTimezoneOffset();
      return (RW > 0 ? "-" : (RW *= -1, "+")) + sw(RW / 60 | 0, "0", 2) + sw(RW % 60, "0", 2)
    }

    function fC(WW, RW) {
      return sw(WW.getUTCDate(), RW, 2)
    }

    function QC(WW, RW) {
      return sw(WW.getUTCHours(), RW, 2)
    }

    function rz(WW, RW) {
      return sw(WW.getUTCHours() % 12 || 12, RW, 2)
    }

    function cz(WW, RW) {
      return sw(1 + LM.count(iC(WW), WW), RW, 3)
    }

    function XC(WW, RW) {
      return sw(WW.getUTCMilliseconds(), RW, 3)
    }

    function jz(WW, RW) {
      return XC(WW, RW) + "000"
    }

    function kz(WW, RW) {
      return sw(WW.getUTCMonth() + 1, RW, 2)
    }

    function az(WW, RW) {
      return sw(WW.getUTCMinutes(), RW, 2)
    }

    function sC(WW, RW) {
      return sw(WW.getUTCSeconds(), RW, 2)
    }

    function dC(WW) {
      var RW = WW.getUTCDay();
      return 0 === RW ? 7 : RW
    }

    function pC(WW, RW) {
      return sw(zC.count(iC(WW) - 1, WW), RW, 2)
    }

    function hC(WW) {
      var RW = WW.getUTCDay();
      return RW >= 4 || 0 === RW ? Nw(WW) : Nw.ceil(WW)
    }

    function UC(WW, RW) {
      return WW = hC(WW), sw(Nw.count(iC(WW), WW) + (4 === iC(WW).getUTCDay()), RW, 2)
    }

    function EC(WW) {
      return WW.getUTCDay()
    }

    function VC(WW, RW) {
      return sw(Aw.count(iC(WW) - 1, WW), RW, 2)
    }

    function mz(WW, RW) {
      return sw(WW.getUTCFullYear() % 100, RW, 2)
    }

    function xz(WW, RW) {
      return sw((WW = hC(WW)).getUTCFullYear() % 100, RW, 2)
    }

    function vz(WW, RW) {
      return sw(WW.getUTCFullYear() % 1e4, RW, 4)
    }

    function KC(WW, RW) {
      var MW = WW.getUTCDay();
      return sw((WW = MW >= 4 || 0 === MW ? Nw(WW) : Nw.ceil(WW)).getUTCFullYear() % 1e4, RW, 4)
    }

    function uC() {
      return "+0000"
    }

    function OC() {
      return "%"
    }

    function nC(WW) {
      return +WW
    }

    function GC(WW) {
      return Math.floor(+WW / 1e3)
    }

    function LC(WW) {
      return new Date(WW)
    }

    function HC(WW) {
      return WW instanceof Date ? +WW : +new Date(+WW)
    }

    function DC(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW) {
      var eW = XR(),
        BW = eW.invert,
        tR = eW.domain,
        TW = NW(".%L"),
        gR = NW(":%S"),
        iR = NW("%I:%M"),
        YW = NW("%I %p"),
        JW = NW("%a %d"),
        PW = NW("%b %d"),
        IW = NW("%B"),
        oW = NW("%Y");

      function lW(WW) {
        return (yR(WW) < WW ? TW : bR(WW) < WW ? gR : AW(WW) < WW ? iR : zR(WW) < WW ? YW : wW(WW) < WW ? CW(WW) < WW ? JW : PW : MW(WW) < WW ? IW : oW)(WW)
      }
      return eW.invert = function(WW) {
        return new Date(BW(WW))
      }, eW.domain = function(WW) {
        return arguments.length ? tR(Array.from(WW, HC)) : tR().map(LC)
      }, eW.ticks = function(RW) {
        var MW = tR();
        return WW(MW[0], MW[MW.length - 1], null == RW ? 10 : RW)
      }, eW.tickFormat = function(WW, RW) {
        return null == RW ? lW : NW(RW)
      }, eW.nice = function(WW) {
        var MW = tR();
        return WW && "function" === typeof WW.range || (WW = RW(MW[0], MW[MW.length - 1], null == WW ? 10 : WW)), WW ? tR(DR(MW, WW)) : eW
      }, eW.copy = function() {
        return rM(eW, DC(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW))
      }, eW
    }

    function qz() {
      return kM.h.apply(DC(Iw, ow, gC, tC, qw, GM, OM, KM, vw, rC).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function ZC() {
      return kM.h.apply(DC(Jw, Pw, iC, Tw, zC, LM, nM, uM, vw, cC).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function SC() {
      var WW, RW, MW, wW, CW, zR = 0,
        AW = 1,
        bR = lR,
        yR = !1;

      function NW(RW) {
        return null == RW || isNaN(RW = +RW) ? CW : bR(0 === MW ? .5 : (RW = (wW(RW) - WW) * MW, yR ? Math.max(0, Math.min(1, RW)) : RW))
      }

      function eW(WW) {
        return function(RW) {
          var MW, wW;
          return arguments.length ? ([MW, wW] = RW, bR = WW(MW, wW), NW) : [bR(0), bR(1)]
        }
      }
      return NW.domain = function(CW) {
          return arguments.length ? ([zR, AW] = CW, WW = wW(zR = +zR), RW = wW(AW = +AW), MW = WW === RW ? 0 : 1 / (RW - WW), NW) : [zR, AW]
        }, NW.clamp = function(WW) {
          return arguments.length ? (yR = !!WW, NW) : yR
        }, NW.interpolator = function(WW) {
          return arguments.length ? (bR = WW, NW) : bR
        }, NW.range = eW(JR), NW.rangeRound = eW(PR), NW.unknown = function(WW) {
          return arguments.length ? (CW = WW, NW) : CW
        },
        function(CW) {
          return wW = CW, WW = CW(zR), RW = CW(AW), MW = WW === RW ? 0 : 1 / (RW - WW), NW
        }
    }

    function Wz(WW, RW) {
      return RW.domain(WW.domain()).interpolator(WW.interpolator()).clamp(WW.clamp()).unknown(WW.unknown())
    }

    function Rz() {
      var WW = GR(SC()(lR));
      return WW.copy = function() {
        return Wz(WW, Rz())
      }, kM.e.apply(WW, arguments)
    }

    function Mz() {
      var WW = wM(SC()).domain([1, 10]);
      return WW.copy = function() {
        return Wz(WW, Mz()).base(WW.base())
      }, kM.e.apply(WW, arguments)
    }

    function wz() {
      var WW = bw(SC());
      return WW.copy = function() {
        return Wz(WW, wz()).constant(WW.constant())
      }, kM.e.apply(WW, arguments)
    }

    function Cz() {
      var WW = TM(SC());
      return WW.copy = function() {
        return Wz(WW, Cz()).exponent(WW.exponent())
      }, kM.e.apply(WW, arguments)
    }

    function zA() {
      return Cz.apply(null, arguments).exponent(.5)
    }

    function Az() {
      var WW = [],
        RW = lR;

      function MW(MW) {
        if (null != MW && !isNaN(MW = +MW)) return RW((IW(WW, MW, 1) - 1) / (WW.length - 1))
      }
      return MW.domain = function(RW) {
        if (!arguments.length) return WW.slice();
        WW = [];
        for (let MW of RW) null == MW || isNaN(MW = +MW) || WW.push(MW);
        return WW.sort(tR), MW
      }, MW.interpolator = function(WW) {
        return arguments.length ? (RW = WW, MW) : RW
      }, MW.range = function() {
        return WW.map(((MW, wW) => RW(wW / (WW.length - 1))))
      }, MW.quantiles = function(RW) {
        return Array.from({
          length: RW + 1
        }, ((MW, wW) => QM(WW, wW / RW)))
      }, MW.copy = function() {
        return Az(RW).domain(WW)
      }, kM.e.apply(MW, arguments)
    }

    function bA() {
      var WW, RW, MW, wW, CW, zR, AW, bR = 0,
        yR = .5,
        NW = 1,
        eW = 1,
        BW = lR,
        tR = !1;

      function TW(WW) {
        return isNaN(WW = +WW) ? AW : (WW = .5 + ((WW = +zR(WW)) - RW) * (eW * WW < eW * RW ? wW : CW), BW(tR ? Math.max(0, Math.min(1, WW)) : WW))
      }

      function gR(WW) {
        return function(RW) {
          var MW, wW, CW;
          return arguments.length ? ([MW, wW, CW] = RW, BW = function(WW, RW) {
            void 0 === RW && (RW = WW, WW = JR);
            for (var MW = 0, wW = RW.length - 1, CW = RW[0], zR = new Array(wW < 0 ? 0 : wW); MW < wW;) zR[MW] = WW(CW, CW = RW[++MW]);
            return function(WW) {
              var RW = Math.max(0, Math.min(wW - 1, Math.floor(WW *= wW)));
              return zR[RW](WW - RW)
            }
          }(WW, [MW, wW, CW]), TW) : [BW(0), BW(.5), BW(1)]
        }
      }
      return TW.domain = function(AW) {
          return arguments.length ? ([bR, yR, NW] = AW, WW = zR(bR = +bR), RW = zR(yR = +yR), MW = zR(NW = +NW), wW = WW === RW ? 0 : .5 / (RW - WW), CW = RW === MW ? 0 : .5 / (MW - RW), eW = RW < WW ? -1 : 1, TW) : [bR, yR, NW]
        }, TW.clamp = function(WW) {
          return arguments.length ? (tR = !!WW, TW) : tR
        }, TW.interpolator = function(WW) {
          return arguments.length ? (BW = WW, TW) : BW
        }, TW.range = gR(JR), TW.rangeRound = gR(PR), TW.unknown = function(WW) {
          return arguments.length ? (AW = WW, TW) : AW
        },
        function(AW) {
          return zR = AW, WW = AW(bR), RW = AW(yR), MW = AW(NW), wW = WW === RW ? 0 : .5 / (RW - WW), CW = RW === MW ? 0 : .5 / (MW - RW), eW = RW < WW ? -1 : 1, TW
        }
    }

    function yA() {
      var WW = GR(bA()(lR));
      return WW.copy = function() {
        return Wz(WW, yA())
      }, kM.e.apply(WW, arguments)
    }

    function Nz() {
      var WW = wM(bA()).domain([.1, 1, 10]);
      return WW.copy = function() {
        return Wz(WW, Nz()).base(WW.base())
      }, kM.e.apply(WW, arguments)
    }

    function ez() {
      var WW = bw(bA());
      return WW.copy = function() {
        return Wz(WW, ez()).constant(WW.constant())
      }, kM.e.apply(WW, arguments)
    }

    function Bz() {
      var WW = TM(bA());
      return WW.copy = function() {
        return Wz(WW, Bz()).exponent(WW.exponent())
      }, kM.e.apply(WW, arguments)
    }

    function tA() {
      return Bz.apply(null, arguments).exponent(.5)
    }

    function Tz(WW, RW) {
      if ((CW = WW.length) > 1)
        for (var MW, wW, CW, zR = 1, AW = WW[RW[0]], bR = AW.length; zR < CW; ++zR)
          for (wW = AW, AW = WW[RW[zR]], MW = 0; MW < bR; ++MW) AW[MW][1] += AW[MW][0] = isNaN(wW[MW][1]) ? wW[MW][0] : wW[MW][1]
    }! function(WW) {
      Qw = function(WW) {
        var RW = WW.dateTime,
          MW = WW.date,
          wW = WW.time,
          CW = WW.periods,
          zR = WW.days,
          AW = WW.shortDays,
          bR = WW.months,
          yR = WW.shortMonths,
          NW = pw(CW),
          eW = hw(CW),
          BW = pw(zR),
          tR = hw(zR),
          TW = pw(AW),
          gR = hw(AW),
          iR = pw(bR),
          YW = hw(bR),
          JW = pw(yR),
          PW = hw(yR),
          IW = {
            a: function(WW) {
              return AW[WW.getDay()]
            },
            A: function(WW) {
              return zR[WW.getDay()]
            },
            b: function(WW) {
              return yR[WW.getMonth()]
            },
            B: function(WW) {
              return bR[WW.getMonth()]
            },
            c: null,
            d: wC,
            e: wC,
            f: yz,
            g: IC,
            G: lC,
            H: CC,
            I: zz,
            j: AC,
            L: bz,
            m: NC,
            M: eC,
            p: function(WW) {
              return CW[+(WW.getHours() >= 12)]
            },
            q: function(WW) {
              return 1 + ~~(WW.getMonth() / 3)
            },
            Q: nC,
            s: GC,
            S: BC,
            u: tz,
            U: TC,
            V: iz,
            w: YC,
            W: JC,
            x: null,
            X: null,
            y: PC,
            Y: oC,
            Z: FC,
            "%": OC
          },
          oW = {
            a: function(WW) {
              return AW[WW.getUTCDay()]
            },
            A: function(WW) {
              return zR[WW.getUTCDay()]
            },
            b: function(WW) {
              return yR[WW.getUTCMonth()]
            },
            B: function(WW) {
              return bR[WW.getUTCMonth()]
            },
            c: null,
            d: fC,
            e: fC,
            f: jz,
            g: xz,
            G: KC,
            H: QC,
            I: rz,
            j: cz,
            L: XC,
            m: kz,
            M: az,
            p: function(WW) {
              return CW[+(WW.getUTCHours() >= 12)]
            },
            q: function(WW) {
              return 1 + ~~(WW.getUTCMonth() / 3)
            },
            Q: nC,
            s: GC,
            S: sC,
            u: dC,
            U: pC,
            V: UC,
            w: EC,
            W: VC,
            x: null,
            X: null,
            y: mz,
            Y: vz,
            Z: uC,
            "%": OC
          },
          lW = {
            a: function(WW, RW, MW) {
              var wW = TW.exec(RW.slice(MW));
              return wW ? (WW.w = gR.get(wW[0].toLowerCase()), MW + wW[0].length) : -1
            },
            A: function(WW, RW, MW) {
              var wW = BW.exec(RW.slice(MW));
              return wW ? (WW.w = tR.get(wW[0].toLowerCase()), MW + wW[0].length) : -1
            },
            b: function(WW, RW, MW) {
              var wW = JW.exec(RW.slice(MW));
              return wW ? (WW.m = PW.get(wW[0].toLowerCase()), MW + wW[0].length) : -1
            },
            B: function(WW, RW, MW) {
              var wW = iR.exec(RW.slice(MW));
              return wW ? (WW.m = YW.get(wW[0].toLowerCase()), MW + wW[0].length) : -1
            },
            c: function(WW, MW, wW) {
              return QW(WW, RW, MW, wW)
            },
            d: Gw,
            e: Gw,
            f: Sw,
            g: Kw,
            G: vC,
            H: Hw,
            I: Hw,
            j: Lw,
            L: Zw,
            m: nw,
            M: Dw,
            p: function(WW, RW, MW) {
              var wW = NW.exec(RW.slice(MW));
              return wW ? (WW.p = eW.get(wW[0].toLowerCase()), MW + wW[0].length) : -1
            },
            q: Ow,
            Q: RC,
            s: MC,
            S: qC,
            u: Ew,
            U: Vw,
            V: mC,
            w: Uw,
            W: xC,
            x: function(WW, RW, wW) {
              return QW(WW, MW, RW, wW)
            },
            X: function(WW, RW, MW) {
              return QW(WW, wW, RW, MW)
            },
            y: Kw,
            Y: vC,
            Z: uw,
            "%": WC
          };

        function FW(WW, RW) {
          return function(MW) {
            var wW, CW, zR, AW = [],
              bR = -1,
              yR = 0,
              NW = WW.length;
            for (MW instanceof Date || (MW = new Date(+MW)); ++bR < NW;) 37 === WW.charCodeAt(bR) && (AW.push(WW.slice(yR, bR)), null != (CW = Xw[wW = WW.charAt(++bR)]) ? wW = WW.charAt(++bR) : CW = "e" === wW ? " " : "0", (zR = RW[wW]) && (wW = zR(MW, CW)), AW.push(wW), yR = bR + 1);
            return AW.push(WW.slice(yR, bR)), AW.join("")
          }
        }

        function fW(WW, RW) {
          return function(MW) {
            var wW, CW, zR = fw(1900, void 0, 1);
            if (QW(zR, WW, MW += "", 0) != MW.length) return null;
            if ("Q" in zR) return new Date(zR.Q);
            if ("s" in zR) return new Date(1e3 * zR.s + ("L" in zR ? zR.L : 0));
            if (RW && !("Z" in zR) && (zR.Z = 0), "p" in zR && (zR.H = zR.H % 12 + 12 * zR.p), void 0 === zR.m && (zR.m = "q" in zR ? zR.q : 0), "V" in zR) {
              if (zR.V < 1 || zR.V > 53) return null;
              "w" in zR || (zR.w = 1), "Z" in zR ? (CW = (wW = Fw(fw(zR.y, 0, 1))).getUTCDay(), wW = CW > 4 || 0 === CW ? Aw.ceil(wW) : Aw(wW), wW = LM.offset(wW, 7 * (zR.V - 1)), zR.y = wW.getUTCFullYear(), zR.m = wW.getUTCMonth(), zR.d = wW.getUTCDate() + (zR.w + 6) % 7) : (CW = (wW = lw(fw(zR.y, 0, 1))).getDay(), wW = CW > 4 || 0 === CW ? ZM.ceil(wW) : ZM(wW), wW = GM.offset(wW, 7 * (zR.V - 1)), zR.y = wW.getFullYear(), zR.m = wW.getMonth(), zR.d = wW.getDate() + (zR.w + 6) % 7)
            } else("W" in zR || "U" in zR) && ("w" in zR || (zR.w = "u" in zR ? zR.u % 7 : "W" in zR ? 1 : 0), CW = "Z" in zR ? Fw(fw(zR.y, 0, 1)).getUTCDay() : lw(fw(zR.y, 0, 1)).getDay(), zR.m = 0, zR.d = "W" in zR ? (zR.w + 6) % 7 + 7 * zR.W - (CW + 5) % 7 : zR.w + 7 * zR.U - (CW + 6) % 7);
            return "Z" in zR ? (zR.H += zR.Z / 100 | 0, zR.M += zR.Z % 100, Fw(zR)) : lw(zR)
          }
        }

        function QW(WW, RW, MW, wW) {
          for (var CW, zR, AW = 0, bR = RW.length, yR = MW.length; AW < bR;) {
            if (wW >= yR) return -1;
            if (37 === (CW = RW.charCodeAt(AW++))) {
              if (CW = RW.charAt(AW++), !(zR = lW[CW in Xw ? RW.charAt(AW++) : CW]) || (wW = zR(WW, MW, wW)) < 0) return -1
            } else if (CW != MW.charCodeAt(wW++)) return -1
          }
          return wW
        }
        return IW.x = FW(MW, IW), IW.X = FW(wW, IW), IW.c = FW(RW, IW), oW.x = FW(MW, oW), oW.X = FW(wW, oW), oW.c = FW(RW, oW), {
          format: function(WW) {
            var RW = FW(WW += "", IW);
            return RW.toString = function() {
              return WW
            }, RW
          },
          parse: function(WW) {
            var RW = fW(WW += "", !1);
            return RW.toString = function() {
              return WW
            }, RW
          },
          utcFormat: function(WW) {
            var RW = FW(WW += "", oW);
            return RW.toString = function() {
              return WW
            }, RW
          },
          utcParse: function(WW) {
            var RW = fW(WW += "", !0);
            return RW.toString = function() {
              return WW
            }, RW
          }
        }
      }(WW), rC = Qw.format, Qw.parse, cC = Qw.utcFormat, Qw.utcParse
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
    var gA = MW(5198),
      iA = MW(5080);

    function Yz(WW) {
      for (var RW = WW.length, MW = new Array(RW); --RW >= 0;) MW[RW] = RW;
      return MW
    }

    function Jz(WW, RW) {
      return WW[RW]
    }

    function Pz(WW) {
      const RW = [];
      return RW.key = WW, RW
    }
    var Iz = MW(5136),
      oz = MW.n(Iz),
      lz = MW(5150),
      Fz = MW.n(lz),
      fz = MW(4373),
      Qz = MW.n(fz),
      rA = MW(4216),
      cA = MW.n(rA),
      Xz = MW(4109),
      jA = MW.n(Xz),
      kA = MW(4133),
      aA = MW.n(kA),
      sz = MW(5164),
      dz = MW.n(sz),
      pz = MW(4126),
      hz = MW.n(pz),
      Uz = MW(5028),
      Ez = MW.n(Uz),
      Vz = MW(5175),
      mA = MW.n(Vz),
      xA = MW(4470),
      vA = MW.n(xA),
      Kz = MW(5182),
      uz = MW.n(Kz);

    function Oz(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return nz(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(WW)) return Array.from(WW)
      }(WW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return nz(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return nz(WW, RW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nz(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }
    var Gz = function(WW) {
        return WW
      },
      Lz = {
        "@@functional/placeholder": !0
      },
      Hz = function(WW) {
        return WW === Lz
      },
      Dz = function(WW) {
        return function RW() {
          return 0 === arguments.length || 1 === arguments.length && Hz(arguments.length <= 0 ? void 0 : arguments[0]) ? RW : WW.apply(void 0, arguments)
        }
      },
      qA = function WW(RW, MW) {
        return 1 === RW ? MW : Dz((function() {
          for (var wW = arguments.length, CW = new Array(wW), zR = 0; zR < wW; zR++) CW[zR] = arguments[zR];
          var AW = CW.filter((function(WW) {
            return WW !== Lz
          })).length;
          return AW >= RW ? MW.apply(void 0, CW) : WW(RW - AW, Dz((function() {
            for (var WW = arguments.length, RW = new Array(WW), wW = 0; wW < WW; wW++) RW[wW] = arguments[wW];
            var zR = CW.map((function(WW) {
              return Hz(WW) ? RW.shift() : WW
            }));
            return MW.apply(void 0, Oz(zR).concat(RW))
          })))
        }))
      },
      Zz = function(WW) {
        return qA(WW.length, WW)
      },
      Sz = function(WW, RW) {
        for (var MW = [], wW = WW; wW < RW; ++wW) MW[wW - WW] = wW;
        return MW
      },
      WA = Zz((function(WW, RW) {
        return Array.isArray(RW) ? RW.map(WW) : Object.keys(RW).map((function(WW) {
          return RW[WW]
        })).map(WW)
      })),
      RA = function() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        if (!RW.length) return Gz;
        var wW = RW.reverse(),
          CW = wW[0],
          zR = wW.slice(1);
        return function() {
          return zR.reduce((function(WW, RW) {
            return RW(WW)
          }), CW.apply(void 0, arguments))
        }
      },
      MA = function(WW) {
        return Array.isArray(WW) ? WW.reverse() : WW.split("").reverse.join("")
      },
      wA = function(WW) {
        var RW = null,
          MW = null;
        return function() {
          for (var wW = arguments.length, CW = new Array(wW), zR = 0; zR < wW; zR++) CW[zR] = arguments[zR];
          return RW && CW.every((function(WW, MW) {
            return WW === RW[MW]
          })) ? MW : (RW = CW, MW = WW.apply(void 0, CW))
        }
      };
    const CA = {
      rangeStep: function(WW, RW, MW) {
        for (var wW = new(uz())(WW), CW = 0, zR = []; wW.lt(RW) && CW < 1e5;) zR.push(wW.toNumber()), wW = wW.add(MW), CW++;
        return zR
      },
      getDigitCount: function(WW) {
        return 0 === WW ? 1 : Math.floor(new(uz())(WW).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: Zz((function(WW, RW, MW) {
        var wW = +WW;
        return wW + MW * (+RW - wW)
      })),
      uninterpolateNumber: Zz((function(WW, RW, MW) {
        var wW = RW - +WW;
        return (MW - WW) / (wW = wW || 1 / 0)
      })),
      uninterpolateTruncation: Zz((function(WW, RW, MW) {
        var wW = RW - +WW;
        return wW = wW || 1 / 0, Math.max(0, Math.min(1, (MW - WW) / wW))
      }))
    };

    function zb(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return yb(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(WW)) return Array.from(WW)
      }(WW) || bb(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AA(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(WW))) return;
        var MW = [],
          wW = !0,
          CW = !1,
          zR = void 0;
        try {
          for (var AW, bR = WW[Symbol.iterator](); !(wW = (AW = bR.next()).done) && (MW.push(AW.value), !RW || MW.length !== RW); wW = !0);
        } catch (yR) {
          CW = !0, zR = yR
        } finally {
          try {
            wW || null == bR.return || bR.return()
          } finally {
            if (CW) throw zR
          }
        }
        return MW
      }(WW, RW) || bb(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bb(WW, RW) {
      if (WW) {
        if ("string" === typeof WW) return yb(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        return "Object" === MW && WW.constructor && (MW = WW.constructor.name), "Map" === MW || "Set" === MW ? Array.from(WW) : "Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW) ? yb(WW, RW) : void 0
      }
    }

    function yb(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function NA(WW) {
      var RW = AA(WW, 2),
        MW = RW[0],
        wW = RW[1],
        CW = MW,
        zR = wW;
      return MW > wW && (CW = wW, zR = MW), [CW, zR]
    }

    function eA(WW, RW, MW) {
      if (WW.lte(0)) return new(uz())(0);
      var wW = CA.getDigitCount(WW.toNumber()),
        CW = new(uz())(10).pow(wW),
        zR = WW.div(CW),
        AW = 1 !== wW ? .05 : .1,
        bR = new(uz())(Math.ceil(zR.div(AW).toNumber())).add(MW).mul(AW).mul(CW);
      return RW ? bR : new(uz())(Math.ceil(bR))
    }

    function BA(WW, RW, MW) {
      var wW = 1,
        CW = new(uz())(WW);
      if (!CW.isint() && MW) {
        var zR = Math.abs(WW);
        zR < 1 ? (wW = new(uz())(10).pow(CA.getDigitCount(WW) - 1), CW = new(uz())(Math.floor(CW.div(wW).toNumber())).mul(wW)) : zR > 1 && (CW = new(uz())(Math.floor(WW)))
      } else 0 === WW ? CW = new(uz())(Math.floor((RW - 1) / 2)) : MW || (CW = new(uz())(Math.floor(WW)));
      var AW = Math.floor((RW - 1) / 2);
      return RA(WA((function(WW) {
        return CW.add(new(uz())(WW - AW).mul(wW)).toNumber()
      })), Sz)(0, RW)
    }

    function tb(WW, RW, MW, wW) {
      var CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((RW - WW) / (MW - 1))) return {
        step: new(uz())(0),
        tickMin: new(uz())(0),
        tickMax: new(uz())(0)
      };
      var zR, AW = eA(new(uz())(RW).sub(WW).div(MW - 1), wW, CW);
      zR = WW <= 0 && RW >= 0 ? new(uz())(0) : (zR = new(uz())(WW).add(RW).div(2)).sub(new(uz())(zR).mod(AW));
      var bR = Math.ceil(zR.sub(WW).div(AW).toNumber()),
        yR = Math.ceil(new(uz())(RW).sub(zR).div(AW).toNumber()),
        NW = bR + yR + 1;
      return NW > MW ? tb(WW, RW, MW, wW, CW + 1) : (NW < MW && (yR = RW > 0 ? yR + (MW - NW) : yR, bR = RW > 0 ? bR : bR + (MW - NW)), {
        step: AW,
        tickMin: zR.sub(new(uz())(bR).mul(AW)),
        tickMax: zR.add(new(uz())(yR).mul(AW))
      })
    }
    var TA = wA((function(WW) {
        var RW = AA(WW, 2),
          MW = RW[0],
          wW = RW[1],
          CW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          zR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          AW = Math.max(CW, 2),
          bR = AA(NA([MW, wW]), 2),
          yR = bR[0],
          NW = bR[1];
        if (yR === -1 / 0 || NW === 1 / 0) {
          var eW = NW === 1 / 0 ? [yR].concat(zb(Sz(0, CW - 1).map((function() {
            return 1 / 0
          })))) : [].concat(zb(Sz(0, CW - 1).map((function() {
            return -1 / 0
          }))), [NW]);
          return MW > wW ? MA(eW) : eW
        }
        if (yR === NW) return BA(yR, CW, zR);
        var BW = tb(yR, NW, AW, zR),
          tR = BW.step,
          TW = BW.tickMin,
          gR = BW.tickMax,
          iR = CA.rangeStep(TW, gR.add(new(uz())(.1).mul(tR)), tR);
        return MW > wW ? MA(iR) : iR
      })),
      gb = (wA((function(WW) {
        var RW = AA(WW, 2),
          MW = RW[0],
          wW = RW[1],
          CW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          zR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          AW = Math.max(CW, 2),
          bR = AA(NA([MW, wW]), 2),
          yR = bR[0],
          NW = bR[1];
        if (yR === -1 / 0 || NW === 1 / 0) return [MW, wW];
        if (yR === NW) return BA(yR, CW, zR);
        var eW = eA(new(uz())(NW).sub(yR).div(AW - 1), zR, 0),
          BW = RA(WA((function(WW) {
            return new(uz())(yR).add(new(uz())(WW).mul(eW)).toNumber()
          })), Sz)(0, AW).filter((function(WW) {
            return WW >= yR && WW <= NW
          }));
        return MW > wW ? MA(BW) : BW
      })), wA((function(WW, RW) {
        var MW = AA(WW, 2),
          wW = MW[0],
          CW = MW[1],
          zR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          AW = AA(NA([wW, CW]), 2),
          bR = AW[0],
          yR = AW[1];
        if (bR === -1 / 0 || yR === 1 / 0) return [wW, CW];
        if (bR === yR) return [bR];
        var NW = Math.max(RW, 2),
          eW = eA(new(uz())(yR).sub(bR).div(NW - 1), zR, 0),
          BW = [].concat(zb(CA.rangeStep(new(uz())(bR), new(uz())(yR).sub(new(uz())(.99).mul(eW)), eW)), [yR]);
        return wW > CW ? MA(BW) : BW
      }))),
      ib = MW(5191),
      YA = MW(4103),
      JA = MW(4381),
      PA = MW(5193);

    function IA(WW) {
      return IA = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, IA(WW)
    }

    function oA(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return lA(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || function(WW, RW) {
        if (!WW) return;
        if ("string" === typeof WW) return lA(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === MW && WW.constructor && (MW = WW.constructor.name);
        if ("Map" === MW || "Set" === MW) return Array.from(WW);
        if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return lA(WW, RW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lA(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function FA(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function fA(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? FA(Object(MW), !0).forEach((function(RW) {
          QA(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : FA(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function QA(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != IA(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != IA(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == IA(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function rb(WW, RW, MW) {
      return Qz()(WW) || Qz()(RW) ? MW : (0, YA.r)(RW) ? aA()(WW, RW, MW) : cA()(RW) ? RW(WW) : MW
    }

    function cb(WW, RW, MW, wW) {
      var CW = dz()(WW, (function(WW) {
        return rb(WW, RW)
      }));
      if ("number" === MW) {
        var zR = CW.filter((function(WW) {
          return (0, YA.u)(WW) || parseFloat(WW)
        }));
        return zR.length ? [Fz()(zR), oz()(zR)] : [1 / 0, -1 / 0]
      }
      return (wW ? CW.filter((function(WW) {
        return !Qz()(WW)
      })) : CW).map((function(WW) {
        return (0, YA.r)(WW) || WW instanceof Date ? WW : ""
      }))
    }
    var XA = function(WW) {
        var RW, MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          wW = arguments.length > 2 ? arguments[2] : void 0,
          CW = arguments.length > 3 ? arguments[3] : void 0,
          zR = -1,
          AW = null !== (RW = null === MW || void 0 === MW ? void 0 : MW.length) && void 0 !== RW ? RW : 0;
        if (AW <= 1) return 0;
        if (CW && "angleAxis" === CW.axisType && Math.abs(Math.abs(CW.range[1] - CW.range[0]) - 360) <= 1e-6)
          for (var bR = CW.range, yR = 0; yR < AW; yR++) {
            var NW = yR > 0 ? wW[yR - 1].coordinate : wW[AW - 1].coordinate,
              eW = wW[yR].coordinate,
              BW = yR >= AW - 1 ? wW[0].coordinate : wW[yR + 1].coordinate,
              tR = void 0;
            if ((0, YA.B)(eW - NW) !== (0, YA.B)(BW - eW)) {
              var TW = [];
              if ((0, YA.B)(BW - eW) === (0, YA.B)(bR[1] - bR[0])) {
                tR = BW;
                var gR = eW + bR[1] - bR[0];
                TW[0] = Math.min(gR, (gR + NW) / 2), TW[1] = Math.max(gR, (gR + NW) / 2)
              } else {
                tR = NW;
                var iR = BW + bR[1] - bR[0];
                TW[0] = Math.min(eW, (iR + eW) / 2), TW[1] = Math.max(eW, (iR + eW) / 2)
              }
              var YW = [Math.min(eW, (tR + eW) / 2), Math.max(eW, (tR + eW) / 2)];
              if (WW > YW[0] && WW <= YW[1] || WW >= TW[0] && WW <= TW[1]) {
                zR = wW[yR].index;
                break
              }
            } else {
              var JW = Math.min(NW, BW),
                PW = Math.max(NW, BW);
              if (WW > (JW + eW) / 2 && WW <= (PW + eW) / 2) {
                zR = wW[yR].index;
                break
              }
            }
          } else
            for (var IW = 0; IW < AW; IW++)
              if (0 === IW && WW <= (MW[IW].coordinate + MW[IW + 1].coordinate) / 2 || IW > 0 && IW < AW - 1 && WW > (MW[IW].coordinate + MW[IW - 1].coordinate) / 2 && WW <= (MW[IW].coordinate + MW[IW + 1].coordinate) / 2 || IW === AW - 1 && WW > (MW[IW].coordinate + MW[IW - 1].coordinate) / 2) {
                zR = MW[IW].index;
                break
              } return zR
      },
      jb = function(WW) {
        var RW, MW, wW = WW.type.displayName,
          CW = null !== (RW = WW.type) && void 0 !== RW && RW.defaultProps ? fA(fA({}, WW.type.defaultProps), WW.props) : WW.props,
          zR = CW.stroke,
          AW = CW.fill;
        switch (wW) {
          case "Line":
            MW = zR;
            break;
          case "Area":
          case "Radar":
            MW = zR && "none" !== zR ? zR : AW;
            break;
          default:
            MW = AW
        }
        return MW
      },
      kb = function(WW) {
        var RW = WW.barSize,
          MW = WW.totalSize,
          wW = WW.stackGroups,
          CW = void 0 === wW ? {} : wW;
        if (!CW) return {};
        for (var zR = {}, AW = Object.keys(CW), bR = 0, yR = AW.length; bR < yR; bR++)
          for (var NW = CW[AW[bR]].stackGroups, eW = Object.keys(NW), BW = 0, tR = eW.length; BW < tR; BW++) {
            var TW = NW[eW[BW]],
              gR = TW.items,
              iR = TW.cateAxisId,
              YW = gR.filter((function(WW) {
                return (0, JA.j)(WW.type).indexOf("Bar") >= 0
              }));
            if (YW && YW.length) {
              var JW = YW[0].type.defaultProps,
                PW = void 0 !== JW ? fA(fA({}, JW), YW[0].props) : YW[0].props,
                IW = PW.barSize,
                oW = PW[iR];
              zR[oW] || (zR[oW] = []);
              var lW = Qz()(IW) ? RW : IW;
              zR[oW].push({
                item: YW[0],
                stackList: YW.slice(1),
                barSize: Qz()(lW) ? void 0 : (0, YA.k)(lW, MW, 0)
              })
            }
          }
        return zR
      },
      ab = function(WW) {
        var RW = WW.barGap,
          MW = WW.barCategoryGap,
          wW = WW.bandSize,
          CW = WW.sizeList,
          zR = void 0 === CW ? [] : CW,
          AW = WW.maxBarSize,
          bR = zR.length;
        if (bR < 1) return null;
        var yR, NW = (0, YA.k)(RW, wW, 0, !0),
          eW = [];
        if (zR[0].barSize === +zR[0].barSize) {
          var BW = !1,
            tR = wW / bR,
            TW = zR.reduce((function(WW, RW) {
              return WW + RW.barSize || 0
            }), 0);
          (TW += (bR - 1) * NW) >= wW && (TW -= (bR - 1) * NW, NW = 0), TW >= wW && tR > 0 && (BW = !0, TW = bR * (tR *= .9));
          var gR = {
            offset: ((wW - TW) / 2 | 0) - NW,
            size: 0
          };
          yR = zR.reduce((function(WW, RW) {
            var MW = {
                item: RW.item,
                position: {
                  offset: gR.offset + gR.size + NW,
                  size: BW ? tR : RW.barSize
                }
              },
              wW = [].concat(oA(WW), [MW]);
            return gR = wW[wW.length - 1].position, RW.stackList && RW.stackList.length && RW.stackList.forEach((function(WW) {
              wW.push({
                item: WW,
                position: gR
              })
            })), wW
          }), eW)
        } else {
          var iR = (0, YA.k)(MW, wW, 0, !0);
          wW - 2 * iR - (bR - 1) * NW <= 0 && (NW = 0);
          var YW = (wW - 2 * iR - (bR - 1) * NW) / bR;
          YW > 1 && (YW >>= 0);
          var JW = AW === +AW ? Math.min(YW, AW) : YW;
          yR = zR.reduce((function(WW, RW, MW) {
            var wW = [].concat(oA(WW), [{
              item: RW.item,
              position: {
                offset: iR + (YW + NW) * MW + (YW - JW) / 2,
                size: JW
              }
            }]);
            return RW.stackList && RW.stackList.length && RW.stackList.forEach((function(WW) {
              wW.push({
                item: WW,
                position: wW[wW.length - 1].position
              })
            })), wW
          }), eW)
        }
        return yR
      },
      sA = function(WW, RW, MW, wW) {
        var CW = MW.children,
          zR = MW.width,
          AW = MW.margin,
          bR = zR - (AW.left || 0) - (AW.right || 0),
          yR = (0, PA.b)({
            children: CW,
            legendWidth: bR
          });
        if (yR) {
          var NW = wW || {},
            eW = NW.width,
            BW = NW.height,
            tR = yR.align,
            TW = yR.verticalAlign,
            gR = yR.layout;
          if (("vertical" === gR || "horizontal" === gR && "middle" === TW) && "center" !== tR && (0, YA.u)(WW[tR])) return fA(fA({}, WW), {}, QA({}, tR, WW[tR] + (eW || 0)));
          if (("horizontal" === gR || "vertical" === gR && "center" === tR) && "middle" !== TW && (0, YA.u)(WW[TW])) return fA(fA({}, WW), {}, QA({}, TW, WW[TW] + (BW || 0)))
        }
        return WW
      },
      dA = function(WW, RW, MW, wW, CW) {
        var zR = RW.props.children,
          AW = (0, JA.f)(zR, ib.b).filter((function(WW) {
            return function(WW, RW, MW) {
              return !!Qz()(RW) || ("horizontal" === WW ? "yAxis" === RW : "vertical" === WW || "x" === MW ? "xAxis" === RW : "y" !== MW || "yAxis" === RW)
            }(wW, CW, WW.props.direction)
          }));
        if (AW && AW.length) {
          var bR = AW.map((function(WW) {
            return WW.props.dataKey
          }));
          return WW.reduce((function(WW, RW) {
            var wW = rb(RW, MW);
            if (Qz()(wW)) return WW;
            var CW = Array.isArray(wW) ? [Fz()(wW), oz()(wW)] : [wW, wW],
              zR = bR.reduce((function(WW, MW) {
                var wW = rb(RW, MW, 0),
                  zR = CW[0] - Math.abs(Array.isArray(wW) ? wW[0] : wW),
                  AW = CW[1] + Math.abs(Array.isArray(wW) ? wW[1] : wW);
                return [Math.min(zR, WW[0]), Math.max(AW, WW[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(zR[0], WW[0]), Math.max(zR[1], WW[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      pA = function(WW, RW, MW, wW, CW) {
        var zR = RW.map((function(RW) {
          return dA(WW, RW, MW, CW, wW)
        })).filter((function(WW) {
          return !Qz()(WW)
        }));
        return zR && zR.length ? zR.reduce((function(WW, RW) {
          return [Math.min(WW[0], RW[0]), Math.max(WW[1], RW[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      hA = function(WW, RW, MW, wW, CW) {
        var zR = RW.map((function(RW) {
          var zR = RW.props.dataKey;
          return "number" === MW && zR && dA(WW, RW, zR, wW) || cb(WW, zR, MW, CW)
        }));
        if ("number" === MW) return zR.reduce((function(WW, RW) {
          return [Math.min(WW[0], RW[0]), Math.max(WW[1], RW[1])]
        }), [1 / 0, -1 / 0]);
        var AW = {};
        return zR.reduce((function(WW, RW) {
          for (var MW = 0, wW = RW.length; MW < wW; MW++) AW[RW[MW]] || (AW[RW[MW]] = !0, WW.push(RW[MW]));
          return WW
        }), [])
      },
      UA = function(WW, RW) {
        return "horizontal" === WW && "xAxis" === RW || "vertical" === WW && "yAxis" === RW || "centric" === WW && "angleAxis" === RW || "radial" === WW && "radiusAxis" === RW
      },
      EA = function(WW, RW, MW, wW) {
        if (wW) return WW.map((function(WW) {
          return WW.coordinate
        }));
        var CW, zR, AW = WW.map((function(WW) {
          return WW.coordinate === RW && (CW = !0), WW.coordinate === MW && (zR = !0), WW.coordinate
        }));
        return CW || AW.push(RW), zR || AW.push(MW), AW
      },
      VA = function(WW, RW, MW) {
        if (!WW) return null;
        var wW = WW.scale,
          CW = WW.duplicateDomain,
          zR = WW.type,
          AW = WW.range,
          bR = "scaleBand" === WW.realScaleType ? wW.bandwidth() / 2 : 2,
          yR = (RW || MW) && "category" === zR && wW.bandwidth ? wW.bandwidth() / bR : 0;
        return yR = "angleAxis" === WW.axisType && (null === AW || void 0 === AW ? void 0 : AW.length) >= 2 ? 2 * (0, YA.B)(AW[0] - AW[1]) * yR : yR, RW && (WW.ticks || WW.niceTicks) ? (WW.ticks || WW.niceTicks).map((function(WW) {
          var RW = CW ? CW.indexOf(WW) : WW;
          return {
            coordinate: wW(RW) + yR,
            value: WW,
            offset: yR
          }
        })).filter((function(WW) {
          return !hz()(WW.coordinate)
        })) : WW.isCategorical && WW.categoricalDomain ? WW.categoricalDomain.map((function(WW, RW) {
          return {
            coordinate: wW(WW) + yR,
            value: WW,
            index: RW,
            offset: yR
          }
        })) : wW.ticks && !MW ? wW.ticks(WW.tickCount).map((function(WW) {
          return {
            coordinate: wW(WW) + yR,
            value: WW,
            offset: yR
          }
        })) : wW.domain().map((function(WW, RW) {
          return {
            coordinate: wW(WW) + yR,
            value: CW ? CW[WW] : WW,
            index: RW,
            offset: yR
          }
        }))
      },
      mb = new WeakMap,
      xb = function(WW, RW) {
        if ("function" !== typeof RW) return WW;
        mb.has(WW) || mb.set(WW, new WeakMap);
        var MW = mb.get(WW);
        if (MW.has(RW)) return MW.get(RW);
        var wW = function() {
          WW.apply(void 0, arguments), RW.apply(void 0, arguments)
        };
        return MW.set(RW, wW), wW
      },
      vb = function(WW, RW, MW) {
        var zR = WW.scale,
          AW = WW.type,
          bR = WW.layout,
          yR = WW.axisType;
        if ("auto" === zR) return "radial" === bR && "radiusAxis" === yR ? {
          scale: CW.b(),
          realScaleType: "band"
        } : "radial" === bR && "angleAxis" === yR ? {
          scale: LR(),
          realScaleType: "linear"
        } : "category" === AW && RW && (RW.indexOf("LineChart") >= 0 || RW.indexOf("AreaChart") >= 0 || RW.indexOf("ComposedChart") >= 0 && !MW) ? {
          scale: CW.c(),
          realScaleType: "point"
        } : "category" === AW ? {
          scale: CW.b(),
          realScaleType: "band"
        } : {
          scale: LR(),
          realScaleType: "linear"
        };
        if (jA()(zR)) {
          var NW = "scale".concat(Ez()(zR));
          return {
            scale: (wW[NW] || CW.c)(),
            realScaleType: wW[NW] ? NW : "point"
          }
        }
        return cA()(zR) ? {
          scale: zR
        } : {
          scale: CW.c(),
          realScaleType: "point"
        }
      },
      KA = 1e-4,
      uA = function(WW) {
        var RW = WW.domain();
        if (RW && !(RW.length <= 2)) {
          var MW = RW.length,
            wW = WW.range(),
            CW = Math.min(wW[0], wW[1]) - KA,
            zR = Math.max(wW[0], wW[1]) + KA,
            AW = WW(RW[0]),
            bR = WW(RW[MW - 1]);
          (AW < CW || AW > zR || bR < CW || bR > zR) && WW.domain([RW[0], RW[MW - 1]])
        }
      },
      OA = function(WW, RW) {
        if (!WW) return null;
        for (var MW = 0, wW = WW.length; MW < wW; MW++)
          if (WW[MW].item === RW) return WW[MW].position;
        return null
      },
      nA = function(WW, RW) {
        if (!RW || 2 !== RW.length || !(0, YA.u)(RW[0]) || !(0, YA.u)(RW[1])) return WW;
        var MW = Math.min(RW[0], RW[1]),
          wW = Math.max(RW[0], RW[1]),
          CW = [WW[0], WW[1]];
        return (!(0, YA.u)(WW[0]) || WW[0] < MW) && (CW[0] = MW), (!(0, YA.u)(WW[1]) || WW[1] > wW) && (CW[1] = wW), CW[0] > wW && (CW[0] = wW), CW[1] < MW && (CW[1] = MW), CW
      },
      GA = {
        sign: function(WW) {
          var RW = WW.length;
          if (!(RW <= 0))
            for (var MW = 0, wW = WW[0].length; MW < wW; ++MW)
              for (var CW = 0, zR = 0, AW = 0; AW < RW; ++AW) {
                var bR = hz()(WW[AW][MW][1]) ? WW[AW][MW][0] : WW[AW][MW][1];
                bR >= 0 ? (WW[AW][MW][0] = CW, WW[AW][MW][1] = CW + bR, CW = WW[AW][MW][1]) : (WW[AW][MW][0] = zR, WW[AW][MW][1] = zR + bR, zR = WW[AW][MW][1])
              }
        },
        expand: function(WW, RW) {
          if ((wW = WW.length) > 0) {
            for (var MW, wW, CW, zR = 0, AW = WW[0].length; zR < AW; ++zR) {
              for (CW = MW = 0; MW < wW; ++MW) CW += WW[MW][zR][1] || 0;
              if (CW)
                for (MW = 0; MW < wW; ++MW) WW[MW][zR][1] /= CW
            }
            Tz(WW, RW)
          }
        },
        none: Tz,
        silhouette: function(WW, RW) {
          if ((MW = WW.length) > 0) {
            for (var MW, wW = 0, CW = WW[RW[0]], zR = CW.length; wW < zR; ++wW) {
              for (var AW = 0, bR = 0; AW < MW; ++AW) bR += WW[AW][wW][1] || 0;
              CW[wW][1] += CW[wW][0] = -bR / 2
            }
            Tz(WW, RW)
          }
        },
        wiggle: function(WW, RW) {
          if ((CW = WW.length) > 0 && (wW = (MW = WW[RW[0]]).length) > 0) {
            for (var MW, wW, CW, zR = 0, AW = 1; AW < wW; ++AW) {
              for (var bR = 0, yR = 0, NW = 0; bR < CW; ++bR) {
                for (var eW = WW[RW[bR]], BW = eW[AW][1] || 0, tR = (BW - (eW[AW - 1][1] || 0)) / 2, TW = 0; TW < bR; ++TW) {
                  var gR = WW[RW[TW]];
                  tR += (gR[AW][1] || 0) - (gR[AW - 1][1] || 0)
                }
                yR += BW, NW += tR * BW
              }
              MW[AW - 1][1] += MW[AW - 1][0] = zR, yR && (zR -= NW / yR)
            }
            MW[AW - 1][1] += MW[AW - 1][0] = zR, Tz(WW, RW)
          }
        },
        positive: function(WW) {
          var RW = WW.length;
          if (!(RW <= 0))
            for (var MW = 0, wW = WW[0].length; MW < wW; ++MW)
              for (var CW = 0, zR = 0; zR < RW; ++zR) {
                var AW = hz()(WW[zR][MW][1]) ? WW[zR][MW][0] : WW[zR][MW][1];
                AW >= 0 ? (WW[zR][MW][0] = CW, WW[zR][MW][1] = CW + AW, CW = WW[zR][MW][1]) : (WW[zR][MW][0] = 0, WW[zR][MW][1] = 0)
              }
        }
      },
      LA = function(WW, RW, MW) {
        var wW = RW.map((function(WW) {
            return WW.props.dataKey
          })),
          CW = GA[MW],
          zR = function() {
            var WW = (0, iA.b)([]),
              RW = Yz,
              MW = Tz,
              wW = Jz;

            function CW(CW) {
              var zR, AW, bR = Array.from(WW.apply(this, arguments), Pz),
                yR = bR.length,
                NW = -1;
              for (const WW of CW)
                for (zR = 0, ++NW; zR < yR; ++zR)(bR[zR][NW] = [0, +wW(WW, bR[zR].key, NW, CW)]).data = WW;
              for (zR = 0, AW = (0, gA.b)(RW(bR)); zR < yR; ++zR) bR[AW[zR]].index = zR;
              return MW(bR, AW), bR
            }
            return CW.keys = function(RW) {
              return arguments.length ? (WW = "function" === typeof RW ? RW : (0, iA.b)(Array.from(RW)), CW) : WW
            }, CW.value = function(WW) {
              return arguments.length ? (wW = "function" === typeof WW ? WW : (0, iA.b)(+WW), CW) : wW
            }, CW.order = function(WW) {
              return arguments.length ? (RW = null == WW ? Yz : "function" === typeof WW ? WW : (0, iA.b)(Array.from(WW)), CW) : RW
            }, CW.offset = function(WW) {
              return arguments.length ? (MW = null == WW ? Tz : WW, CW) : MW
            }, CW
          }().keys(wW).value((function(WW, RW) {
            return +rb(WW, RW, 0)
          })).order(Yz).offset(CW);
        return zR(WW)
      },
      HA = function(WW, RW, MW, wW, CW, zR) {
        if (!WW) return null;
        var AW = (zR ? RW.reverse() : RW).reduce((function(WW, RW) {
          var CW, zR = null !== (CW = RW.type) && void 0 !== CW && CW.defaultProps ? fA(fA({}, RW.type.defaultProps), RW.props) : RW.props,
            AW = zR.stackId;
          if (zR.hide) return WW;
          var bR = zR[MW],
            yR = WW[bR] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, YA.r)(AW)) {
            var NW = yR.stackGroups[AW] || {
              numericAxisId: MW,
              cateAxisId: wW,
              items: []
            };
            NW.items.push(RW), yR.hasStack = !0, yR.stackGroups[AW] = NW
          } else yR.stackGroups[(0, YA.D)("_stackId_")] = {
            numericAxisId: MW,
            cateAxisId: wW,
            items: [RW]
          };
          return fA(fA({}, WW), {}, QA({}, bR, yR))
        }), {});
        return Object.keys(AW).reduce((function(RW, zR) {
          var bR = AW[zR];
          if (bR.hasStack) {
            bR.stackGroups = Object.keys(bR.stackGroups).reduce((function(RW, zR) {
              var AW = bR.stackGroups[zR];
              return fA(fA({}, RW), {}, QA({}, zR, {
                numericAxisId: MW,
                cateAxisId: wW,
                items: AW.items,
                stackedData: LA(WW, AW.items, CW)
              }))
            }), {})
          }
          return fA(fA({}, RW), {}, QA({}, zR, bR))
        }), {})
      },
      DA = function(WW, RW) {
        var MW = RW.realScaleType,
          wW = RW.type,
          CW = RW.tickCount,
          zR = RW.originalDomain,
          AW = RW.allowDecimals,
          bR = MW || RW.scale;
        if ("auto" !== bR && "linear" !== bR) return null;
        if (CW && "number" === wW && zR && ("auto" === zR[0] || "auto" === zR[1])) {
          var yR = WW.domain();
          if (!yR.length) return null;
          var NW = TA(yR, CW, AW);
          return WW.domain([Fz()(NW), oz()(NW)]), {
            niceTicks: NW
          }
        }
        if (CW && "number" === wW) {
          var eW = WW.domain();
          return {
            niceTicks: gb(eW, CW, AW)
          }
        }
        return null
      };

    function qb(WW) {
      var RW = WW.axis,
        MW = WW.ticks,
        wW = WW.bandSize,
        CW = WW.entry,
        zR = WW.index,
        AW = WW.dataKey;
      if ("category" === RW.type) {
        if (!RW.allowDuplicatedCategory && RW.dataKey && !Qz()(CW[RW.dataKey])) {
          var bR = (0, YA.g)(MW, "value", CW[RW.dataKey]);
          if (bR) return bR.coordinate + wW / 2
        }
        return MW[zR] ? MW[zR].coordinate + wW / 2 : null
      }
      var yR = rb(CW, Qz()(AW) ? RW.dataKey : AW);
      return Qz()(yR) ? null : RW.scale(yR)
    }
    var ZA = function(WW) {
        var RW = WW.axis,
          MW = WW.ticks,
          wW = WW.offset,
          CW = WW.bandSize,
          zR = WW.entry,
          AW = WW.index;
        if ("category" === RW.type) return MW[AW] ? MW[AW].coordinate + wW : null;
        var bR = rb(zR, RW.dataKey, RW.domain[AW]);
        return Qz()(bR) ? null : RW.scale(bR) - CW / 2 + wW
      },
      SA = function(WW) {
        var RW = WW.numericAxis,
          MW = RW.scale.domain();
        if ("number" === RW.type) {
          var wW = Math.min(MW[0], MW[1]),
            CW = Math.max(MW[0], MW[1]);
          return wW <= 0 && CW >= 0 ? 0 : CW < 0 ? CW : wW
        }
        return MW[0]
      },
      Wb = function(WW, RW) {
        var MW, wW = (null !== (MW = WW.type) && void 0 !== MW && MW.defaultProps ? fA(fA({}, WW.type.defaultProps), WW.props) : WW.props).stackId;
        if ((0, YA.r)(wW)) {
          var CW = RW[wW];
          if (CW) {
            var zR = CW.items.indexOf(WW);
            return zR >= 0 ? CW.stackedData[zR] : null
          }
        }
        return null
      },
      Rb = function(WW, RW, MW) {
        return Object.keys(WW).reduce((function(wW, CW) {
          var zR = WW[CW].stackedData.reduce((function(WW, wW) {
            var CW = wW.slice(RW, MW + 1).reduce((function(WW, RW) {
              return [Fz()(RW.concat([WW[0]]).filter(YA.u)), oz()(RW.concat([WW[1]]).filter(YA.u))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(WW[0], CW[0]), Math.max(WW[1], CW[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(zR[0], wW[0]), Math.max(zR[1], wW[1])]
        }), [1 / 0, -1 / 0]).map((function(WW) {
          return WW === 1 / 0 || WW === -1 / 0 ? 0 : WW
        }))
      },
      Mb = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      wb = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Cb = function(WW, RW, MW) {
        if (cA()(WW)) return WW(RW, MW);
        if (!Array.isArray(WW)) return RW;
        var wW = [];
        if ((0, YA.u)(WW[0])) wW[0] = MW ? WW[0] : Math.min(WW[0], RW[0]);
        else if (Mb.test(WW[0])) {
          var CW = +Mb.exec(WW[0])[1];
          wW[0] = RW[0] - CW
        } else cA()(WW[0]) ? wW[0] = WW[0](RW[0]) : wW[0] = RW[0];
        if ((0, YA.u)(WW[1])) wW[1] = MW ? WW[1] : Math.max(WW[1], RW[1]);
        else if (wb.test(WW[1])) {
          var zR = +wb.exec(WW[1])[1];
          wW[1] = RW[1] + zR
        } else cA()(WW[1]) ? wW[1] = WW[1](RW[1]) : wW[1] = RW[1];
        return wW
      },
      zy = function(WW, RW, MW) {
        if (WW && WW.scale && WW.scale.bandwidth) {
          var wW = WW.scale.bandwidth();
          if (!MW || wW > 0) return wW
        }
        if (WW && RW && RW.length >= 2) {
          for (var CW = vA()(RW, (function(WW) {
              return WW.coordinate
            })), zR = 1 / 0, AW = 1, bR = CW.length; AW < bR; AW++) {
            var yR = CW[AW],
              NW = CW[AW - 1];
            zR = Math.min((yR.coordinate || 0) - (NW.coordinate || 0), zR)
          }
          return zR === 1 / 0 ? 0 : zR
        }
        return MW ? void 0 : 0
      },
      Ab = function(WW, RW, MW) {
        return WW && WW.length ? mA()(WW, aA()(MW, "type.defaultProps.domain")) ? RW : WW : RW
      },
      by = function(WW, RW) {
        var MW = WW.type.defaultProps ? fA(fA({}, WW.type.defaultProps), WW.props) : WW.props,
          wW = MW.dataKey,
          CW = MW.name,
          zR = MW.unit,
          AW = MW.formatter,
          bR = MW.tooltipType,
          yR = MW.chartType,
          NW = MW.hide;
        return fA(fA({}, (0, JA.e)(WW, !1)), {}, {
          dataKey: wW,
          unit: zR,
          formatter: AW,
          name: CW || wW,
          color: jb(WW),
          value: rb(RW, wW),
          type: bR,
          payload: RW,
          chartType: yR,
          hide: NW
        })
      }
  },
  5106: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => tR,
      c: () => BW
    });
    var wW = MW(4945);

    function CW(WW) {
      return CW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, CW(WW)
    }

    function zR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function AW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? zR(Object(MW), !0).forEach((function(RW) {
          bR(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : zR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function bR(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != CW(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != CW(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == CW(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }
    var yR = {
        widthCache: {},
        cacheCount: 0
      },
      NW = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      eW = "recharts_measurement_span";
    var BW = function(WW) {
        var RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === WW || null === WW || wW.b.isSsr) return {
          width: 0,
          height: 0
        };
        var MW = function(WW) {
            var RW = AW({}, WW);
            return Object.keys(RW).forEach((function(WW) {
              RW[WW] || delete RW[WW]
            })), RW
          }(RW),
          CW = JSON.stringify({
            text: WW,
            copyStyle: MW
          });
        if (yR.widthCache[CW]) return yR.widthCache[CW];
        try {
          var zR = document.getElementById(eW);
          zR || ((zR = document.createElement("span")).setAttribute("id", eW), zR.setAttribute("aria-hidden", "true"), document.body.appendChild(zR));
          var bR = AW(AW({}, NW), MW);
          Object.assign(zR.style, bR), zR.textContent = "".concat(WW);
          var BW = zR.getBoundingClientRect(),
            tR = {
              width: BW.width,
              height: BW.height
            };
          return yR.widthCache[CW] = tR, ++yR.cacheCount > 2e3 && (yR.cacheCount = 0, yR.widthCache = {}), tR
        } catch (TW) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      tR = function(WW) {
        return {
          top: WW.top + window.scrollY - document.documentElement.clientTop,
          left: WW.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  4103: (WW, RW, MW) => {
    MW.d(RW, {
      B: () => TW,
      D: () => IW,
      e: () => cR,
      g: () => QW,
      h: () => lW,
      j: () => rR,
      k: () => oW,
      l: () => FW,
      n: () => fW,
      q: () => YW,
      r: () => JW,
      u: () => iR,
      x: () => gR
    });
    var wW = MW(4109),
      CW = MW.n(wW),
      zR = MW(4126),
      AW = MW.n(zR),
      bR = MW(4133),
      yR = MW.n(bR),
      NW = MW(4131),
      eW = MW.n(NW),
      BW = MW(4373),
      tR = MW.n(BW),
      TW = function(WW) {
        return 0 === WW ? 0 : WW > 0 ? 1 : -1
      },
      gR = function(WW) {
        return CW()(WW) && WW.indexOf("%") === WW.length - 1
      },
      iR = function(WW) {
        return eW()(WW) && !AW()(WW)
      },
      YW = function(WW) {
        return tR()(WW)
      },
      JW = function(WW) {
        return iR(WW) || CW()(WW)
      },
      PW = 0,
      IW = function(WW) {
        var RW = ++PW;
        return "".concat(WW || "").concat(RW)
      },
      oW = function(WW, RW) {
        var MW, wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          zR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!iR(WW) && !CW()(WW)) return wW;
        if (gR(WW)) {
          var bR = WW.indexOf("%");
          MW = RW * parseFloat(WW.slice(0, bR)) / 100
        } else MW = +WW;
        return AW()(MW) && (MW = wW), zR && MW > RW && (MW = RW), MW
      },
      lW = function(WW) {
        if (!WW) return null;
        var RW = Object.keys(WW);
        return RW && RW.length ? WW[RW[0]] : null
      },
      FW = function(WW) {
        if (!Array.isArray(WW)) return !1;
        for (var RW = WW.length, MW = {}, wW = 0; wW < RW; wW++) {
          if (MW[WW[wW]]) return !0;
          MW[WW[wW]] = !0
        }
        return !1
      },
      fW = function(WW, RW) {
        return iR(WW) && iR(RW) ? function(MW) {
          return WW + MW * (RW - WW)
        } : function() {
          return RW
        }
      };

    function QW(WW, RW, MW) {
      return WW && WW.length ? WW.find((function(WW) {
        return WW && ("function" === typeof RW ? RW(WW) : yR()(WW, RW)) === MW
      })) : null
    }
    var rR = function(WW) {
        if (!WW || !WW.length) return null;
        for (var RW = WW.length, MW = 0, wW = 0, CW = 0, zR = 0, AW = 1 / 0, bR = -1 / 0, yR = 0, NW = 0, eW = 0; eW < RW; eW++) MW += yR = WW[eW].cx || 0, wW += NW = WW[eW].cy || 0, CW += yR * NW, zR += yR * yR, AW = Math.min(AW, yR), bR = Math.max(bR, yR);
        var BW = RW * zR !== MW * MW ? (RW * CW - MW * wW) / (RW * zR - MW * MW) : 0;
        return {
          xmin: AW,
          xmax: bR,
          a: BW,
          b: (wW - BW * MW) / RW
        }
      },
      cR = function(WW, RW) {
        return iR(WW) && iR(RW) ? WW - RW : CW()(WW) && CW()(RW) ? WW.localeCompare(RW) : WW instanceof Date && RW instanceof Date ? WW.getTime() - RW.getTime() : String(WW).localeCompare(String(RW))
      }
  },
  4945: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    var wW = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(WW) {
        return wW[WW]
      },
      set: function(WW, RW) {
        if ("string" === typeof WW) wW[WW] = RW;
        else {
          var MW = Object.keys(WW);
          MW && MW.length && MW.forEach((function(RW) {
            wW[RW] = WW[RW]
          }))
        }
      }
    }
  },
  5221: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    var wW = function(WW, RW) {
      var MW = WW.alwaysShow,
        wW = WW.ifOverflow;
      return MW && (wW = "extendDomain"), wW === RW
    }
  },
  4376: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW
    });
    var wW = function(WW, RW) {
      for (var MW = arguments.length, wW = new Array(MW > 2 ? MW - 2 : 0), CW = 2; CW < MW; CW++) wW[CW - 2] = arguments[CW]
    }
  },
  5214: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => bR,
      h: () => tR,
      i: () => NW
    });
    MW(4373), MW(75), MW(4216);

    function wW(WW) {
      return wW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, wW(WW)
    }

    function CW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function zR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? CW(Object(MW), !0).forEach((function(RW) {
          AW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : CW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function AW(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != wW(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var CW = MW.call(WW, RW || "default");
            if ("object" != wW(CW)) return CW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == wW(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }
    var bR = Math.PI / 180,
      yR = function(WW) {
        return 180 * WW / Math.PI
      },
      NW = function(WW, RW, MW, wW) {
        return {
          x: WW + Math.cos(-bR * wW) * MW,
          y: RW + Math.sin(-bR * wW) * MW
        }
      },
      eW = function(WW, RW) {
        var MW = WW.x,
          wW = WW.y,
          CW = RW.cx,
          zR = RW.cy,
          AW = function(WW, RW) {
            var MW = WW.x,
              wW = WW.y,
              CW = RW.x,
              zR = RW.y;
            return Math.sqrt(Math.pow(MW - CW, 2) + Math.pow(wW - zR, 2))
          }({
            x: MW,
            y: wW
          }, {
            x: CW,
            y: zR
          });
        if (AW <= 0) return {
          radius: AW
        };
        var bR = (MW - CW) / AW,
          NW = Math.acos(bR);
        return wW > zR && (NW = 2 * Math.PI - NW), {
          radius: AW,
          angle: yR(NW),
          angleInRadian: NW
        }
      },
      BW = function(WW, RW) {
        var MW = RW.startAngle,
          wW = RW.endAngle,
          CW = Math.floor(MW / 360),
          zR = Math.floor(wW / 360);
        return WW + 360 * Math.min(CW, zR)
      },
      tR = function(WW, RW) {
        var MW = WW.x,
          wW = WW.y,
          CW = eW({
            x: MW,
            y: wW
          }, RW),
          AW = CW.radius,
          bR = CW.angle,
          yR = RW.innerRadius,
          NW = RW.outerRadius;
        if (AW < yR || AW > NW) return !1;
        if (0 === AW) return !0;
        var tR, TW = function(WW) {
            var RW = WW.startAngle,
              MW = WW.endAngle,
              wW = Math.floor(RW / 360),
              CW = Math.floor(MW / 360),
              zR = Math.min(wW, CW);
            return {
              startAngle: RW - 360 * zR,
              endAngle: MW - 360 * zR
            }
          }(RW),
          gR = TW.startAngle,
          iR = TW.endAngle,
          YW = bR;
        if (gR <= iR) {
          for (; YW > iR;) YW -= 360;
          for (; YW < gR;) YW += 360;
          tR = YW >= gR && YW <= iR
        } else {
          for (; YW > gR;) YW -= 360;
          for (; YW < iR;) YW += 360;
          tR = YW >= iR && YW <= gR
        }
        return tR ? zR(zR({}, RW), {}, {
          radius: AW,
          angle: BW(YW, RW)
        }) : null
      }
  },
  4381: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => pW,
      f: () => XW,
      i: () => jR,
      j: () => fW,
      n: () => VW,
      p: () => dW,
      q: () => hW,
      t: () => mR,
      v: () => EW,
      x: () => kR
    });
    var wW = MW(4133),
      CW = MW.n(wW),
      zR = MW(4373),
      AW = MW.n(zR),
      bR = MW(4109),
      yR = MW.n(bR),
      NW = MW(4216),
      eW = MW.n(NW),
      BW = MW(4036),
      tR = MW.n(BW),
      TW = MW(75),
      gR = MW(4388),
      iR = MW(4103),
      YW = MW(4402),
      JW = MW(4407),
      PW = ["children"],
      IW = ["children"];

    function oW(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW = {};
        for (var wW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, wW)) {
            if (RW.indexOf(wW) >= 0) continue;
            MW[wW] = WW[wW]
          } return MW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }

    function lW(WW) {
      return lW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, lW(WW)
    }
    var FW = {
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
      fW = function(WW) {
        return "string" === typeof WW ? WW : WW ? WW.displayName || WW.name || "Component" : ""
      },
      QW = null,
      rR = null,
      cR = function WW(RW) {
        if (RW === QW && Array.isArray(rR)) return rR;
        var MW = [];
        return TW.Children.forEach(RW, (function(RW) {
          AW()(RW) || ((0, gR.isFragment)(RW) ? MW = MW.concat(WW(RW.props.children)) : MW.push(RW))
        })), rR = MW, QW = RW, MW
      };

    function XW(WW, RW) {
      var MW = [],
        wW = [];
      return wW = Array.isArray(RW) ? RW.map((function(WW) {
        return fW(WW)
      })) : [fW(RW)], cR(WW).forEach((function(WW) {
        var RW = CW()(WW, "type.displayName") || CW()(WW, "type.name"); - 1 !== wW.indexOf(RW) && MW.push(WW)
      })), MW
    }

    function jR(WW, RW) {
      var MW = XW(WW, RW);
      return MW && MW[0]
    }
    var kR = function(WW) {
        if (!WW || !WW.props) return !1;
        var RW = WW.props,
          MW = RW.width,
          wW = RW.height;
        return !(!(0, iR.u)(MW) || MW <= 0 || !(0, iR.u)(wW) || wW <= 0)
      },
      aR = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      sW = function(WW) {
        return WW && WW.type && yR()(WW.type) && aR.indexOf(WW.type) >= 0
      },
      dW = function(WW) {
        return WW && "object" === lW(WW) && "clipDot" in WW
      },
      pW = function(WW, RW, MW) {
        if (!WW || "function" === typeof WW || "boolean" === typeof WW) return null;
        var wW = WW;
        if ((0, TW.isValidElement)(WW) && (wW = WW.props), !tR()(wW)) return null;
        var CW = {};
        return Object.keys(wW).forEach((function(WW) {
          var zR;
          (function(WW, RW, MW, wW) {
            var CW, zR = null !== (CW = null === JW.e || void 0 === JW.e ? void 0 : JW.e[wW]) && void 0 !== CW ? CW : [];
            return RW.startsWith("data-") || !eW()(WW) && (wW && zR.includes(RW) || JW.i.includes(RW)) || MW && JW.c.includes(RW)
          })(null === (zR = wW) || void 0 === zR ? void 0 : zR[WW], WW, RW, MW) && (CW[WW] = wW[WW])
        })), CW
      },
      hW = function WW(RW, MW) {
        if (RW === MW) return !0;
        var wW = TW.Children.count(RW);
        if (wW !== TW.Children.count(MW)) return !1;
        if (0 === wW) return !0;
        if (1 === wW) return UW(Array.isArray(RW) ? RW[0] : RW, Array.isArray(MW) ? MW[0] : MW);
        for (var CW = 0; CW < wW; CW++) {
          var zR = RW[CW],
            AW = MW[CW];
          if (Array.isArray(zR) || Array.isArray(AW)) {
            if (!WW(zR, AW)) return !1
          } else if (!UW(zR, AW)) return !1
        }
        return !0
      },
      UW = function(WW, RW) {
        if (AW()(WW) && AW()(RW)) return !0;
        if (!AW()(WW) && !AW()(RW)) {
          var MW = WW.props || {},
            wW = MW.children,
            CW = oW(MW, PW),
            zR = RW.props || {},
            bR = zR.children,
            yR = oW(zR, IW);
          return wW && bR ? (0, YW.c)(CW, yR) && hW(wW, bR) : !wW && !bR && (0, YW.c)(CW, yR)
        }
        return !1
      },
      EW = function(WW, RW) {
        var MW = [],
          wW = {};
        return cR(WW).forEach((function(WW, CW) {
          if (sW(WW)) MW.push(WW);
          else if (WW) {
            var zR = fW(WW.type),
              AW = RW[zR] || {},
              bR = AW.handler,
              yR = AW.once;
            if (bR && (!yR || !wW[zR])) {
              var NW = bR(WW, zR, CW);
              MW.push(NW), wW[zR] = !0
            }
          }
        })), MW
      },
      VW = function(WW) {
        var RW = WW && WW.type;
        return RW && FW[RW] ? FW[RW] : null
      },
      mR = function(WW, RW) {
        return cR(RW).indexOf(WW)
      }
  },
  4402: (WW, RW, MW) => {
    function wW(WW, RW) {
      for (var MW in WW)
        if ({}.hasOwnProperty.call(WW, MW) && (!{}.hasOwnProperty.call(RW, MW) || WW[MW] !== RW[MW])) return !1;
      for (var wW in RW)
        if ({}.hasOwnProperty.call(RW, wW) && !{}.hasOwnProperty.call(WW, wW)) return !1;
      return !0
    }
    MW.d(RW, {
      c: () => wW
    })
  },
  5193: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => eW
    });
    var wW = MW(5016),
      CW = MW(5115),
      zR = MW(4381);

    function AW(WW) {
      return AW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, AW(WW)
    }

    function bR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function yR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? bR(Object(MW), !0).forEach((function(RW) {
          NW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : bR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function NW(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != AW(WW) || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != AW(wW)) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == AW(RW) ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }
    var eW = function(WW) {
      var RW = WW.children,
        MW = WW.formattedGraphicalItems,
        AW = WW.legendWidth,
        bR = WW.legendContent,
        NW = (0, zR.i)(RW, wW.b);
      if (!NW) return null;
      var eW, BW = wW.b.defaultProps,
        tR = void 0 !== BW ? yR(yR({}, BW), NW.props) : {};
      return eW = NW.props && NW.props.payload ? NW.props && NW.props.payload : "children" === bR ? (MW || []).reduce((function(WW, RW) {
        var MW = RW.item,
          wW = RW.props,
          CW = wW.sectors || wW.data || [];
        return WW.concat(CW.map((function(WW) {
          return {
            type: NW.props.iconType || MW.props.legendType,
            value: WW.name,
            color: WW.fill,
            payload: WW
          }
        })))
      }), []) : (MW || []).map((function(WW) {
        var RW = WW.item,
          MW = RW.type.defaultProps,
          wW = void 0 !== MW ? yR(yR({}, MW), RW.props) : {},
          zR = wW.dataKey,
          AW = wW.name,
          bR = wW.legendType;
        return {
          inactive: wW.hide,
          dataKey: zR,
          type: tR.iconType || bR || "square",
          color: (0, CW.J)(RW),
          value: AW || zR,
          payload: wW
        }
      })), yR(yR(yR({}, tR), wW.b.getWithHeight(NW, AW)), {}, {
        payload: eW,
        item: NW
      })
    }
  },
  4954: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR
    });
    var wW = MW(4959),
      CW = MW.n(wW),
      zR = MW(4216),
      AW = MW.n(zR);

    function bR(WW, RW, MW) {
      return !0 === RW ? CW()(WW, MW) : AW()(RW) ? CW()(WW, RW) : WW
    }
  },
  4407: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => eW,
      e: () => NW,
      i: () => bR,
      m: () => BW,
      q: () => tR
    });
    var wW = MW(75),
      CW = MW(4036),
      zR = MW.n(CW);

    function AW(WW) {
      return AW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, AW(WW)
    }
    var bR = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "IM", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      yR = ["points", "pathLength"],
      NW = {
        svg: ["viewBox", "children"],
        polygon: yR,
        polyline: yR
      },
      eW = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      BW = function(WW, RW) {
        if (!WW || "function" === typeof WW || "boolean" === typeof WW) return null;
        var MW = WW;
        if ((0, wW.isValidElement)(WW) && (MW = WW.props), !zR()(MW)) return null;
        var CW = {};
        return Object.keys(MW).forEach((function(WW) {
          eW.includes(WW) && (CW[WW] = RW || function(RW) {
            return MW[WW](MW, RW)
          })
        })), CW
      },
      tR = function(WW, RW, MW) {
        if (!zR()(WW) || "object" !== AW(WW)) return null;
        var wW = null;
        return Object.keys(WW).forEach((function(CW) {
          var zR = WW[CW];
          eW.includes(CW) && "function" === typeof zR && (wW || (wW = {}), wW[CW] = function(WW, RW, MW) {
            return function(wW) {
              return WW(RW, MW, wW), null
            }
          }(zR, RW, MW))
        })), wW
      }
  },
  4397: (WW, RW) => {
    var MW, wW = Symbol.for("react.element"),
      CW = Symbol.for("react.portal"),
      zR = Symbol.for("react.fragment"),
      AW = Symbol.for("react.strict_mode"),
      bR = Symbol.for("react.profiler"),
      yR = Symbol.for("react.provider"),
      NW = Symbol.for("react.context"),
      eW = Symbol.for("react.server_context"),
      BW = Symbol.for("react.forward_ref"),
      tR = Symbol.for("react.suspense"),
      TW = Symbol.for("react.suspense_list"),
      gR = Symbol.for("react.memo"),
      iR = Symbol.for("react.lazy"),
      YW = Symbol.for("react.offscreen");

    function JW(WW) {
      if ("object" === typeof WW && null !== WW) {
        var RW = WW.$$typeof;
        switch (RW) {
          case wW:
            switch (WW = WW.type) {
              case zR:
              case bR:
              case AW:
              case tR:
              case TW:
                return WW;
              default:
                switch (WW = WW && WW.$$typeof) {
                  case eW:
                  case NW:
                  case BW:
                  case iR:
                  case gR:
                  case yR:
                    return WW;
                  default:
                    return RW
                }
            }
          case CW:
            return RW
        }
      }
    }
    MW = Symbol.for("react.module.reference"), RW.isFragment = function(WW) {
      return JW(WW) === zR
    }
  },
  4388: (WW, RW, MW) => {
    WW.exports = MW(4397)
  },
  4017: (WW, RW, MW) => {
    function wW(WW) {
      var RW, MW, CW = "";
      if ("string" == typeof WW || "number" == typeof WW) CW += WW;
      else if ("object" == typeof WW)
        if (Array.isArray(WW)) {
          var zR = WW.length;
          for (RW = 0; RW < zR; RW++) WW[RW] && (MW = wW(WW[RW])) && (CW && (CW += " "), CW += MW)
        } else
          for (MW in WW) WW[MW] && (CW && (CW += " "), CW += MW);
      return CW
    }
    MW.d(RW, {
      c: () => CW
    });
    const CW = function() {
      for (var WW, RW, MW = 0, CW = "", zR = arguments.length; MW < zR; MW++)(WW = arguments[MW]) && (RW = wW(WW)) && (CW && (CW += " "), CW += RW);
      return CW
    }
  },
  5119: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR,
      c: () => bR
    });
    var wW = MW(5122),
      CW = MW(5127);

    function zR() {
      var WW, RW, MW = (0, CW.e)().unknown(void 0),
        AW = MW.domain,
        bR = MW.range,
        yR = 0,
        NW = 1,
        eW = !1,
        BW = 0,
        tR = 0,
        TW = .5;

      function gR() {
        var MW = AW().length,
          wW = NW < yR,
          CW = wW ? NW : yR,
          zR = wW ? yR : NW;
        WW = (zR - CW) / Math.max(1, MW - BW + 2 * tR), eW && (WW = Math.floor(WW)), CW += (zR - CW - WW * (MW - BW)) * TW, RW = WW * (1 - BW), eW && (CW = Math.round(CW), RW = Math.round(RW));
        var gR = function(WW, RW, MW) {
          WW = +WW, RW = +RW, MW = (CW = arguments.length) < 2 ? (RW = WW, WW = 0, 1) : CW < 3 ? 1 : +MW;
          for (var wW = -1, CW = 0 | Math.max(0, Math.ceil((RW - WW) / MW)), zR = new Array(CW); ++wW < CW;) zR[wW] = WW + wW * MW;
          return zR
        }(MW).map((function(RW) {
          return CW + WW * RW
        }));
        return bR(wW ? gR.reverse() : gR)
      }
      return delete MW.unknown, MW.domain = function(WW) {
        return arguments.length ? (AW(WW), gR()) : AW()
      }, MW.range = function(WW) {
        return arguments.length ? ([yR, NW] = WW, yR = +yR, NW = +NW, gR()) : [yR, NW]
      }, MW.rangeRound = function(WW) {
        return [yR, NW] = WW, yR = +yR, NW = +NW, eW = !0, gR()
      }, MW.bandwidth = function() {
        return RW
      }, MW.step = function() {
        return WW
      }, MW.round = function(WW) {
        return arguments.length ? (eW = !!WW, gR()) : eW
      }, MW.padding = function(WW) {
        return arguments.length ? (BW = Math.min(1, tR = +WW), gR()) : BW
      }, MW.paddingInner = function(WW) {
        return arguments.length ? (BW = Math.min(1, WW), gR()) : BW
      }, MW.paddingOuter = function(WW) {
        return arguments.length ? (tR = +WW, gR()) : tR
      }, MW.align = function(WW) {
        return arguments.length ? (TW = Math.max(0, Math.min(1, WW)), gR()) : TW
      }, MW.copy = function() {
        return zR(AW(), [yR, NW]).round(eW).paddingInner(BW).paddingOuter(tR).align(TW)
      }, wW.h.apply(gR(), arguments)
    }

    function AW(WW) {
      var RW = WW.copy;
      return WW.padding = WW.paddingOuter, delete WW.paddingInner, delete WW.paddingOuter, WW.copy = function() {
        return AW(RW())
      }, WW
    }

    function bR() {
      return AW(zR.apply(null, arguments).paddingInner(1))
    }
  },
  5122: (WW, RW, MW) => {
    function wW(WW, RW) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(WW);
          break;
        default:
          this.range(RW).domain(WW)
      }
      return this
    }

    function CW(WW, RW) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof WW ? this.interpolator(WW) : this.range(WW);
          break;
        default:
          this.domain(WW), "function" === typeof RW ? this.interpolator(RW) : this.range(RW)
      }
      return this
    }
    MW.d(RW, {
      e: () => CW,
      h: () => wW
    })
  },
  5127: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => eW,
      h: () => NW
    });
    class wW extends Map {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bR;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: RW
            }
          }), null != WW)
          for (const [MW, wW] of WW) this.set(MW, wW)
      }
      get(WW) {
        return super.get(CW(this, WW))
      }
      has(WW) {
        return super.has(CW(this, WW))
      }
      set(WW, RW) {
        return super.set(zR(this, WW), RW)
      }
      delete(WW) {
        return super.delete(AW(this, WW))
      }
    }
    Set;

    function CW(WW, RW) {
      let {
        _intern: MW,
        _key: wW
      } = WW;
      const CW = wW(RW);
      return MW.has(CW) ? MW.get(CW) : RW
    }

    function zR(WW, RW) {
      let {
        _intern: MW,
        _key: wW
      } = WW;
      const CW = wW(RW);
      return MW.has(CW) ? MW.get(CW) : (MW.set(CW, RW), RW)
    }

    function AW(WW, RW) {
      let {
        _intern: MW,
        _key: wW
      } = WW;
      const CW = wW(RW);
      return MW.has(CW) && (RW = MW.get(CW), MW.delete(CW)), RW
    }

    function bR(WW) {
      return null !== WW && "object" === typeof WW ? WW.valueOf() : WW
    }
    var yR = MW(5122);
    const NW = Symbol("implicit");

    function eW() {
      var WW = new wW,
        RW = [],
        MW = [],
        CW = NW;

      function zR(wW) {
        let zR = WW.get(wW);
        if (void 0 === zR) {
          if (CW !== NW) return CW;
          WW.set(wW, zR = RW.push(wW) - 1)
        }
        return MW[zR % MW.length]
      }
      return zR.domain = function(MW) {
        if (!arguments.length) return RW.slice();
        RW = [], WW = new wW;
        for (const wW of MW) WW.has(wW) || WW.set(wW, RW.push(wW) - 1);
        return zR
      }, zR.range = function(WW) {
        return arguments.length ? (MW = Array.from(WW), zR) : MW.slice()
      }, zR.unknown = function(WW) {
        return arguments.length ? (CW = WW, zR) : CW
      }, zR.copy = function() {
        return eW(RW, MW).unknown(CW)
      }, yR.h.apply(zR, arguments), zR
    }
  },
  5198: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    Array.prototype.slice;

    function wW(WW) {
      return "object" === typeof WW && "length" in WW ? WW : Array.from(WW)
    }
  },
  5080: (WW, RW, MW) => {
    function wW(WW) {
      return function() {
        return WW
      }
    }
    MW.d(RW, {
      b: () => wW
    })
  },
  5089: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => NW
    });
    const wW = Math.PI,
      CW = 2 * wW,
      zR = 1e-6,
      AW = CW - zR;

    function bR(WW) {
      this._ += WW[0];
      for (let RW = 1, MW = WW.length; RW < MW; ++RW) this._ += arguments[RW] + WW[RW]
    }
    class yR {
      constructor(WW) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == WW ? bR : function(WW) {
          let RW = Math.floor(WW);
          if (!(RW >= 0)) throw new Error(`invalid digits: ${WW}`);
          if (RW > 15) return bR;
          const MW = 10 ** RW;
          return function(WW) {
            this._ += WW[0];
            for (let RW = 1, wW = WW.length; RW < wW; ++RW) this._ += Math.round(arguments[RW] * MW) / MW + WW[RW]
          }
        }(WW)
      }
      moveTo(WW, RW) {
        this._append`M${this._x0=this._x1=+WW},${this._y0=this._y1=+RW}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(WW, RW) {
        this._append`L${this._x1=+WW},${this._y1=+RW}`
      }
      quadraticCurveTo(WW, RW, MW, wW) {
        this._append`Q${+WW},${+RW},${this._x1=+MW},${this._y1=+wW}`
      }
      bezierCurveTo(WW, RW, MW, wW, CW, zR) {
        this._append`C${+WW},${+RW},${+MW},${+wW},${this._x1=+CW},${this._y1=+zR}`
      }
      arcTo(WW, RW, MW, CW, AW) {
        if (WW = +WW, RW = +RW, MW = +MW, CW = +CW, (AW = +AW) < 0) throw new Error(`negative radius: ${AW}`);
        let bR = this._x1,
          yR = this._y1,
          NW = MW - WW,
          eW = CW - RW,
          BW = bR - WW,
          tR = yR - RW,
          TW = BW * BW + tR * tR;
        if (null === this._x1) this._append`M${this._x1=WW},${this._y1=RW}`;
        else if (TW > zR)
          if (Math.abs(tR * NW - eW * BW) > zR && AW) {
            let gR = MW - bR,
              iR = CW - yR,
              YW = NW * NW + eW * eW,
              JW = gR * gR + iR * iR,
              PW = Math.sqrt(YW),
              IW = Math.sqrt(TW),
              oW = AW * Math.tan((wW - Math.acos((YW + TW - JW) / (2 * PW * IW))) / 2),
              lW = oW / IW,
              FW = oW / PW;
            Math.abs(lW - 1) > zR && this._append`L${WW+lW*BW},${RW+lW*tR}`, this._append`A${AW},${AW},0,0,${+(tR*gR>BW*iR)},${this._x1=WW+FW*NW},${this._y1=RW+FW*eW}`
          } else this._append`L${this._x1=WW},${this._y1=RW}`;
        else;
      }
      arc(WW, RW, MW, bR, yR, NW) {
        if (WW = +WW, RW = +RW, NW = !!NW, (MW = +MW) < 0) throw new Error(`negative radius: ${MW}`);
        let eW = MW * Math.cos(bR),
          BW = MW * Math.sin(bR),
          tR = WW + eW,
          TW = RW + BW,
          gR = 1 ^ NW,
          iR = NW ? bR - yR : yR - bR;
        null === this._x1 ? this._append`M${tR},${TW}` : (Math.abs(this._x1 - tR) > zR || Math.abs(this._y1 - TW) > zR) && this._append`L${tR},${TW}`, MW && (iR < 0 && (iR = iR % CW + CW), iR > AW ? this._append`A${MW},${MW},0,1,${gR},${WW-eW},${RW-BW}A${MW},${MW},0,1,${gR},${this._x1=tR},${this._y1=TW}` : iR > zR && this._append`A${MW},${MW},0,${+(iR>=wW)},${gR},${this._x1=WW+MW*Math.cos(yR)},${this._y1=RW+MW*Math.sin(yR)}`)
      }
      rect(WW, RW, MW, wW) {
        this._append`M${this._x0=this._x1=+WW},${this._y0=this._y1=+RW}h${MW=+MW}v${+wW}h${-MW}Z`
      }
      toString() {
        return this._
      }
    }

    function NW(WW) {
      let RW = 3;
      return WW.digits = function(MW) {
        if (!arguments.length) return RW;
        if (null == MW) RW = null;
        else {
          const WW = Math.floor(MW);
          if (!(WW >= 0)) throw new RangeError(`invalid digits: ${MW}`);
          RW = WW
        }
        return WW
      }, () => new yR(RW)
    }
    yR.prototype
  },
  4925: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR
    });
    var wW = !0,
      CW = "Invariant failed";

    function zR(WW, RW) {
      if (!WW) {
        if (wW) throw new Error(CW);
        var MW = "function" === typeof RW ? RW() : RW,
          zR = MW ? "".concat(CW, ": ").concat(MW) : CW;
        throw new Error(zR)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);