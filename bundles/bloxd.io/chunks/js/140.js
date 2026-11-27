/*! For license information please see 1yqdn.140.fff0327c.chunk.js.LICENSE.txt */
export const id = 140;
export const ids = [140];
export const modules = {
  7182: function(WW, iW, OW) {
    var mW;
    ! function() {
      var EW, NW = 1e9,
        PW = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        LW = !0,
        cW = "[DecimalError] ",
        wW = cW + "Invalid argument: ",
        tW = cW + "Exponent out of range: ",
        ZW = Math.floor,
        xW = Math.pow,
        lW = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        AW = 1e7,
        bW = 9007199254740991,
        jW = ZW(1286742750677284.5),
        UW = {};

      function kW(WW, iW) {
        var OW, mW, EW, NW, PW, cW, wW, tW, ZW = WW.constructor,
          xW = ZW.precision;
        if (!WW.s || !iW.s) return iW.s || (iW = new ZW(WW)), LW ? HW(iW, xW) : iW;
        if (wW = WW.d, tW = iW.d, PW = WW.e, EW = iW.e, wW = wW.slice(), NW = PW - EW) {
          for (NW < 0 ? (mW = wW, NW = -NW, cW = tW.length) : (mW = tW, EW = PW, cW = wW.length), NW > (cW = (PW = Math.ceil(xW / 7)) > cW ? PW + 1 : cW + 1) && (NW = cW, mW.length = 1), mW.reverse(); NW--;) mW.push(0);
          mW.reverse()
        }
        for ((cW = wW.length) - (NW = tW.length) < 0 && (NW = cW, mW = tW, tW = wW, wW = mW), OW = 0; NW;) OW = (wW[--NW] = wW[NW] + tW[NW] + OW) / AW | 0, wW[NW] %= AW;
        for (OW && (wW.unshift(OW), ++EW), cW = wW.length; 0 == wW[--cW];) wW.pop();
        return iW.d = wW, iW.e = EW, LW ? HW(iW, xW) : iW
      }

      function sW(WW, iW, OW) {
        if (WW !== ~~WW || WW < iW || WW > OW) throw Error(wW + WW)
      }

      function MW(WW) {
        var iW, OW, mW, EW = WW.length - 1,
          NW = "",
          PW = WW[0];
        if (EW > 0) {
          for (NW += PW, iW = 1; iW < EW; iW++)(OW = 7 - (mW = WW[iW] + "").length) && (NW += TW(OW)), NW += mW;
          (OW = 7 - (mW = (PW = WW[iW]) + "").length) && (NW += TW(OW))
        } else if (0 === PW) return "0";
        for (; PW % 10 === 0;) PW /= 10;
        return NW + PW
      }
      UW.absoluteValue = UW.abs = function() {
        var WW = new this.constructor(this);
        return WW.s && (WW.s = 1), WW
      }, UW.comparedTo = UW.cmp = function(WW) {
        var iW, OW, mW, EW, NW = this;
        if (WW = new NW.constructor(WW), NW.s !== WW.s) return NW.s || -WW.s;
        if (NW.e !== WW.e) return NW.e > WW.e ^ NW.s < 0 ? 1 : -1;
        for (iW = 0, OW = (mW = NW.d.length) < (EW = WW.d.length) ? mW : EW; iW < OW; ++iW)
          if (NW.d[iW] !== WW.d[iW]) return NW.d[iW] > WW.d[iW] ^ NW.s < 0 ? 1 : -1;
        return mW === EW ? 0 : mW > EW ^ NW.s < 0 ? 1 : -1
      }, UW.decimalPlaces = UW.dp = function() {
        var WW = this,
          iW = WW.d.length - 1,
          OW = 7 * (iW - WW.e);
        if (iW = WW.d[iW])
          for (; iW % 10 == 0; iW /= 10) OW--;
        return OW < 0 ? 0 : OW
      }, UW.dividedBy = UW.div = function(WW) {
        return KW(this, new this.constructor(WW))
      }, UW.dividedToIntegerBy = UW.idiv = function(WW) {
        var iW = this.constructor;
        return HW(KW(this, new iW(WW), 0, 1), iW.precision)
      }, UW.equals = UW.eq = function(WW) {
        return !this.cmp(WW)
      }, UW.exponent = function() {
        return YW(this)
      }, UW.greaterThan = UW.gt = function(WW) {
        return this.cmp(WW) > 0
      }, UW.greaterThanOrEqualTo = UW.gte = function(WW) {
        return this.cmp(WW) >= 0
      }, UW.isInteger = UW.isint = function() {
        return this.e > this.d.length - 2
      }, UW.isNegative = UW.isneg = function() {
        return this.s < 0
      }, UW.isPositive = UW.ispos = function() {
        return this.s > 0
      }, UW.isZero = function() {
        return 0 === this.s
      }, UW.lessThan = UW.lt = function(WW) {
        return this.cmp(WW) < 0
      }, UW.lessThanOrEqualTo = UW.lte = function(WW) {
        return this.cmp(WW) < 1
      }, UW.logarithm = UW.log = function(WW) {
        var iW, OW = this,
          mW = OW.constructor,
          NW = mW.precision,
          PW = NW + 5;
        if (void 0 === WW) WW = new mW(10);
        else if ((WW = new mW(WW)).s < 1 || WW.eq(EW)) throw Error(cW + "NaN");
        if (OW.s < 1) throw Error(cW + (OW.s ? "NaN" : "-Infinity"));
        return OW.eq(EW) ? new mW(0) : (LW = !1, iW = KW(JW(OW, PW), JW(WW, PW), PW), LW = !0, HW(iW, NW))
      }, UW.minus = UW.sub = function(WW) {
        var iW = this;
        return WW = new iW.constructor(WW), iW.s == WW.s ? nW(iW, WW) : kW(iW, (WW.s = -WW.s, WW))
      }, UW.modulo = UW.mod = function(WW) {
        var iW, OW = this,
          mW = OW.constructor,
          EW = mW.precision;
        if (!(WW = new mW(WW)).s) throw Error(cW + "NaN");
        return OW.s ? (LW = !1, iW = KW(OW, WW, 0, 1).times(WW), LW = !0, OW.minus(iW)) : HW(new mW(OW), EW)
      }, UW.naturalExponential = UW.exp = function() {
        return SW(this)
      }, UW.naturalLogarithm = UW.ln = function() {
        return JW(this)
      }, UW.negated = UW.neg = function() {
        var WW = new this.constructor(this);
        return WW.s = -WW.s || 0, WW
      }, UW.plus = UW.add = function(WW) {
        var iW = this;
        return WW = new iW.constructor(WW), iW.s == WW.s ? kW(iW, WW) : nW(iW, (WW.s = -WW.s, WW))
      }, UW.precision = UW.sd = function(WW) {
        var iW, OW, mW, EW = this;
        if (void 0 !== WW && WW !== !!WW && 1 !== WW && 0 !== WW) throw Error(wW + WW);
        if (iW = YW(EW) + 1, OW = 7 * (mW = EW.d.length - 1) + 1, mW = EW.d[mW]) {
          for (; mW % 10 == 0; mW /= 10) OW--;
          for (mW = EW.d[0]; mW >= 10; mW /= 10) OW++
        }
        return WW && iW > OW ? iW : OW
      }, UW.squareRoot = UW.sqrt = function() {
        var WW, iW, OW, mW, EW, NW, PW, wW = this,
          tW = wW.constructor;
        if (wW.s < 1) {
          if (!wW.s) return new tW(0);
          throw Error(cW + "NaN")
        }
        for (WW = YW(wW), LW = !1, 0 == (EW = Math.sqrt(+wW)) || EW == 1 / 0 ? (((iW = MW(wW.d)).length + WW) % 2 == 0 && (iW += "0"), EW = Math.sqrt(iW), WW = ZW((WW + 1) / 2) - (WW < 0 || WW % 2), mW = new tW(iW = EW == 1 / 0 ? "1e" + WW : (iW = EW.toExponential()).slice(0, iW.indexOf("e") + 1) + WW)) : mW = new tW(EW.toString()), EW = PW = (OW = tW.precision) + 3;;)
          if (mW = (NW = mW).plus(KW(wW, NW, PW + 2)).times(.5), MW(NW.d).slice(0, PW) === (iW = MW(mW.d)).slice(0, PW)) {
            if (iW = iW.slice(PW - 3, PW + 1), EW == PW && "4999" == iW) {
              if (HW(NW, OW + 1, 0), NW.times(NW).eq(wW)) {
                mW = NW;
                break
              }
            } else if ("9999" != iW) break;
            PW += 4
          } return LW = !0, HW(mW, OW)
      }, UW.times = UW.mul = function(WW) {
        var iW, OW, mW, EW, NW, PW, cW, wW, tW, ZW = this,
          xW = ZW.constructor,
          lW = ZW.d,
          bW = (WW = new xW(WW)).d;
        if (!ZW.s || !WW.s) return new xW(0);
        for (WW.s *= ZW.s, OW = ZW.e + WW.e, (wW = lW.length) < (tW = bW.length) && (NW = lW, lW = bW, bW = NW, PW = wW, wW = tW, tW = PW), NW = [], mW = PW = wW + tW; mW--;) NW.push(0);
        for (mW = tW; --mW >= 0;) {
          for (iW = 0, EW = wW + mW; EW > mW;) cW = NW[EW] + bW[mW] * lW[EW - mW - 1] + iW, NW[EW--] = cW % AW | 0, iW = cW / AW | 0;
          NW[EW] = (NW[EW] + iW) % AW | 0
        }
        for (; !NW[--PW];) NW.pop();
        return iW ? ++OW : NW.shift(), WW.d = NW, WW.e = OW, LW ? HW(WW, xW.precision) : WW
      }, UW.toDecimalPlaces = UW.todp = function(WW, iW) {
        var OW = this,
          mW = OW.constructor;
        return OW = new mW(OW), void 0 === WW ? OW : (sW(WW, 0, NW), void 0 === iW ? iW = mW.rounding : sW(iW, 0, 8), HW(OW, WW + YW(OW) + 1, iW))
      }, UW.toExponential = function(WW, iW) {
        var OW, mW = this,
          EW = mW.constructor;
        return void 0 === WW ? OW = uW(mW, !0) : (sW(WW, 0, NW), void 0 === iW ? iW = EW.rounding : sW(iW, 0, 8), OW = uW(mW = HW(new EW(mW), WW + 1, iW), !0, WW + 1)), OW
      }, UW.toFixed = function(WW, iW) {
        var OW, mW, EW = this,
          PW = EW.constructor;
        return void 0 === WW ? uW(EW) : (sW(WW, 0, NW), void 0 === iW ? iW = PW.rounding : sW(iW, 0, 8), OW = uW((mW = HW(new PW(EW), WW + YW(EW) + 1, iW)).abs(), !1, WW + YW(mW) + 1), EW.isneg() && !EW.isZero() ? "-" + OW : OW)
      }, UW.toInteger = UW.toint = function() {
        var WW = this,
          iW = WW.constructor;
        return HW(new iW(WW), YW(WW) + 1, iW.rounding)
      }, UW.toNumber = function() {
        return +this
      }, UW.toPower = UW.pow = function(WW) {
        var iW, OW, mW, NW, PW, wW, tW = this,
          xW = tW.constructor,
          lW = +(WW = new xW(WW));
        if (!WW.s) return new xW(EW);
        if (!(tW = new xW(tW)).s) {
          if (WW.s < 1) throw Error(cW + "Infinity");
          return tW
        }
        if (tW.eq(EW)) return tW;
        if (mW = xW.precision, WW.eq(EW)) return HW(tW, mW);
        if (wW = (iW = WW.e) >= (OW = WW.d.length - 1), PW = tW.s, wW) {
          if ((OW = lW < 0 ? -lW : lW) <= bW) {
            for (NW = new xW(EW), iW = Math.ceil(mW / 7 + 4), LW = !1; OW % 2 && oW((NW = NW.times(tW)).d, iW), 0 !== (OW = ZW(OW / 2));) oW((tW = tW.times(tW)).d, iW);
            return LW = !0, WW.s < 0 ? new xW(EW).div(NW) : HW(NW, mW)
          }
        } else if (PW < 0) throw Error(cW + "NaN");
        return PW = PW < 0 && 1 & WW.d[Math.max(iW, OW)] ? -1 : 1, tW.s = 1, LW = !1, NW = WW.times(JW(tW, mW + 12)), LW = !0, (NW = SW(NW)).s = PW, NW
      }, UW.toPrecision = function(WW, iW) {
        var OW, mW, EW = this,
          PW = EW.constructor;
        return void 0 === WW ? mW = uW(EW, (OW = YW(EW)) <= PW.toExpNeg || OW >= PW.toExpPos) : (sW(WW, 1, NW), void 0 === iW ? iW = PW.rounding : sW(iW, 0, 8), mW = uW(EW = HW(new PW(EW), WW, iW), WW <= (OW = YW(EW)) || OW <= PW.toExpNeg, WW)), mW
      }, UW.toSignificantDigits = UW.tosd = function(WW, iW) {
        var OW = this.constructor;
        return void 0 === WW ? (WW = OW.precision, iW = OW.rounding) : (sW(WW, 1, NW), void 0 === iW ? iW = OW.rounding : sW(iW, 0, 8)), HW(new OW(this), WW, iW)
      }, UW.toString = UW.valueOf = UW.val = UW.toJSON = function() {
        var WW = this,
          iW = YW(WW),
          OW = WW.constructor;
        return uW(WW, iW <= OW.toExpNeg || iW >= OW.toExpPos)
      };
      var KW = function() {
        function WW(WW, iW) {
          var OW, mW = 0,
            EW = WW.length;
          for (WW = WW.slice(); EW--;) OW = WW[EW] * iW + mW, WW[EW] = OW % AW | 0, mW = OW / AW | 0;
          return mW && WW.unshift(mW), WW
        }

        function iW(WW, iW, OW, mW) {
          var EW, NW;
          if (OW != mW) NW = OW > mW ? 1 : -1;
          else
            for (EW = NW = 0; EW < OW; EW++)
              if (WW[EW] != iW[EW]) {
                NW = WW[EW] > iW[EW] ? 1 : -1;
                break
              } return NW
        }

        function OW(WW, iW, OW) {
          for (var mW = 0; OW--;) WW[OW] -= mW, mW = WW[OW] < iW[OW] ? 1 : 0, WW[OW] = mW * AW + WW[OW] - iW[OW];
          for (; !WW[0] && WW.length > 1;) WW.shift()
        }
        return function(mW, EW, NW, PW) {
          var LW, wW, tW, ZW, xW, lW, bW, jW, UW, kW, sW, MW, KW, SW, yW, TW, JW, hW, nW = mW.constructor,
            uW = mW.s == EW.s ? 1 : -1,
            oW = mW.d,
            dW = EW.d;
          if (!mW.s) return new nW(mW);
          if (!EW.s) throw Error(cW + "Division by zero");
          for (wW = mW.e - EW.e, JW = dW.length, yW = oW.length, jW = (bW = new nW(uW)).d = [], tW = 0; dW[tW] == (oW[tW] || 0);) ++tW;
          if (dW[tW] > (oW[tW] || 0) && --wW, (MW = null == NW ? NW = nW.precision : PW ? NW + (YW(mW) - YW(EW)) + 1 : NW) < 0) return new nW(0);
          if (MW = MW / 7 + 2 | 0, tW = 0, 1 == JW)
            for (ZW = 0, dW = dW[0], MW++;
              (tW < yW || ZW) && MW--; tW++) KW = ZW * AW + (oW[tW] || 0), jW[tW] = KW / dW | 0, ZW = KW % dW | 0;
          else {
            for ((ZW = AW / (dW[0] + 1) | 0) > 1 && (dW = WW(dW, ZW), oW = WW(oW, ZW), JW = dW.length, yW = oW.length), SW = JW, kW = (UW = oW.slice(0, JW)).length; kW < JW;) UW[kW++] = 0;
            (hW = dW.slice()).unshift(0), TW = dW[0], dW[1] >= AW / 2 && ++TW;
            do {
              ZW = 0, (LW = iW(dW, UW, JW, kW)) < 0 ? (sW = UW[0], JW != kW && (sW = sW * AW + (UW[1] || 0)), (ZW = sW / TW | 0) > 1 ? (ZW >= AW && (ZW = AW - 1), 1 == (LW = iW(xW = WW(dW, ZW), UW, lW = xW.length, kW = UW.length)) && (ZW--, OW(xW, JW < lW ? hW : dW, lW))) : (0 == ZW && (LW = ZW = 1), xW = dW.slice()), (lW = xW.length) < kW && xW.unshift(0), OW(UW, xW, kW), -1 == LW && (LW = iW(dW, UW, JW, kW = UW.length)) < 1 && (ZW++, OW(UW, JW < kW ? hW : dW, kW)), kW = UW.length) : 0 === LW && (ZW++, UW = [0]), jW[tW++] = ZW, LW && UW[0] ? UW[kW++] = oW[SW] || 0 : (UW = [oW[SW]], kW = 1)
            } while ((SW++ < yW || void 0 !== UW[0]) && MW--)
          }
          return jW[0] || jW.shift(), bW.e = wW, HW(bW, PW ? NW + YW(bW) + 1 : NW)
        }
      }();

      function SW(WW, iW) {
        var OW, mW, NW, PW, cW, wW = 0,
          ZW = 0,
          lW = WW.constructor,
          AW = lW.precision;
        if (YW(WW) > 16) throw Error(tW + YW(WW));
        if (!WW.s) return new lW(EW);
        for (null == iW ? (LW = !1, cW = AW) : cW = iW, PW = new lW(.03125); WW.abs().gte(.1);) WW = WW.times(PW), ZW += 5;
        for (cW += Math.log(xW(2, ZW)) / Math.LN10 * 2 + 5 | 0, OW = mW = NW = new lW(EW), lW.precision = cW;;) {
          if (mW = HW(mW.times(WW), cW), OW = OW.times(++wW), MW((PW = NW.plus(KW(mW, OW, cW))).d).slice(0, cW) === MW(NW.d).slice(0, cW)) {
            for (; ZW--;) NW = HW(NW.times(NW), cW);
            return lW.precision = AW, null == iW ? (LW = !0, HW(NW, AW)) : NW
          }
          NW = PW
        }
      }

      function YW(WW) {
        for (var iW = 7 * WW.e, OW = WW.d[0]; OW >= 10; OW /= 10) iW++;
        return iW
      }

      function yW(WW, iW, OW) {
        if (iW > WW.LN10.sd()) throw LW = !0, OW && (WW.precision = OW), Error(cW + "LN10 precision limit exceeded");
        return HW(new WW(WW.LN10), iW)
      }

      function TW(WW) {
        for (var iW = ""; WW--;) iW += "0";
        return iW
      }

      function JW(WW, iW) {
        var OW, mW, NW, PW, wW, tW, ZW, xW, lW, AW = 1,
          bW = WW,
          jW = bW.d,
          UW = bW.constructor,
          kW = UW.precision;
        if (bW.s < 1) throw Error(cW + (bW.s ? "NaN" : "-Infinity"));
        if (bW.eq(EW)) return new UW(0);
        if (null == iW ? (LW = !1, xW = kW) : xW = iW, bW.eq(10)) return null == iW && (LW = !0), yW(UW, xW);
        if (xW += 10, UW.precision = xW, mW = (OW = MW(jW)).charAt(0), PW = YW(bW), !(Math.abs(PW) < 15e14)) return ZW = yW(UW, xW + 2, kW).times(PW + ""), bW = JW(new UW(mW + "." + OW.slice(1)), xW - 10).plus(ZW), UW.precision = kW, null == iW ? (LW = !0, HW(bW, kW)) : bW;
        for (; mW < 7 && 1 != mW || 1 == mW && OW.charAt(1) > 3;) mW = (OW = MW((bW = bW.times(WW)).d)).charAt(0), AW++;
        for (PW = YW(bW), mW > 1 ? (bW = new UW("0." + OW), PW++) : bW = new UW(mW + "." + OW.slice(1)), tW = wW = bW = KW(bW.minus(EW), bW.plus(EW), xW), lW = HW(bW.times(bW), xW), NW = 3;;) {
          if (wW = HW(wW.times(lW), xW), MW((ZW = tW.plus(KW(wW, new UW(NW), xW))).d).slice(0, xW) === MW(tW.d).slice(0, xW)) return tW = tW.times(2), 0 !== PW && (tW = tW.plus(yW(UW, xW + 2, kW).times(PW + ""))), tW = KW(tW, new UW(AW), xW), UW.precision = kW, null == iW ? (LW = !0, HW(tW, kW)) : tW;
          tW = ZW, NW += 2
        }
      }

      function hW(WW, iW) {
        var OW, mW, EW;
        for ((OW = iW.indexOf(".")) > -1 && (iW = iW.replace(".", "")), (mW = iW.search(/e/i)) > 0 ? (OW < 0 && (OW = mW), OW += +iW.slice(mW + 1), iW = iW.substring(0, mW)) : OW < 0 && (OW = iW.length), mW = 0; 48 === iW.charCodeAt(mW);) ++mW;
        for (EW = iW.length; 48 === iW.charCodeAt(EW - 1);) --EW;
        if (iW = iW.slice(mW, EW)) {
          if (EW -= mW, OW = OW - mW - 1, WW.e = ZW(OW / 7), WW.d = [], mW = (OW + 1) % 7, OW < 0 && (mW += 7), mW < EW) {
            for (mW && WW.d.push(+iW.slice(0, mW)), EW -= 7; mW < EW;) WW.d.push(+iW.slice(mW, mW += 7));
            mW = 7 - (iW = iW.slice(mW)).length
          } else mW -= EW;
          for (; mW--;) iW += "0";
          if (WW.d.push(+iW), LW && (WW.e > jW || WW.e < -jW)) throw Error(tW + OW)
        } else WW.s = 0, WW.e = 0, WW.d = [0];
        return WW
      }

      function HW(WW, iW, OW) {
        var mW, EW, NW, PW, cW, wW, lW, bW, UW = WW.d;
        for (PW = 1, NW = UW[0]; NW >= 10; NW /= 10) PW++;
        if ((mW = iW - PW) < 0) mW += 7, EW = iW, lW = UW[bW = 0];
        else {
          if ((bW = Math.ceil((mW + 1) / 7)) >= (NW = UW.length)) return WW;
          for (lW = NW = UW[bW], PW = 1; NW >= 10; NW /= 10) PW++;
          EW = (mW %= 7) - 7 + PW
        }
        if (void 0 !== OW && (cW = lW / (NW = xW(10, PW - EW - 1)) % 10 | 0, wW = iW < 0 || void 0 !== UW[bW + 1] || lW % NW, wW = OW < 4 ? (cW || wW) && (0 == OW || OW == (WW.s < 0 ? 3 : 2)) : cW > 5 || 5 == cW && (4 == OW || wW || 6 == OW && (mW > 0 ? EW > 0 ? lW / xW(10, PW - EW) : 0 : UW[bW - 1]) % 10 & 1 || OW == (WW.s < 0 ? 8 : 7))), iW < 1 || !UW[0]) return wW ? (NW = YW(WW), UW.length = 1, iW = iW - NW - 1, UW[0] = xW(10, (7 - iW % 7) % 7), WW.e = ZW(-iW / 7) || 0) : (UW.length = 1, UW[0] = WW.e = WW.s = 0), WW;
        if (0 == mW ? (UW.length = bW, NW = 1, bW--) : (UW.length = bW + 1, NW = xW(10, 7 - mW), UW[bW] = EW > 0 ? (lW / xW(10, PW - EW) % xW(10, EW) | 0) * NW : 0), wW)
          for (;;) {
            if (0 == bW) {
              (UW[0] += NW) == AW && (UW[0] = 1, ++WW.e);
              break
            }
            if (UW[bW] += NW, UW[bW] != AW) break;
            UW[bW--] = 0, NW = 1
          }
        for (mW = UW.length; 0 === UW[--mW];) UW.pop();
        if (LW && (WW.e > jW || WW.e < -jW)) throw Error(tW + YW(WW));
        return WW
      }

      function nW(WW, iW) {
        var OW, mW, EW, NW, PW, cW, wW, tW, ZW, xW, lW = WW.constructor,
          bW = lW.precision;
        if (!WW.s || !iW.s) return iW.s ? iW.s = -iW.s : iW = new lW(WW), LW ? HW(iW, bW) : iW;
        if (wW = WW.d, xW = iW.d, mW = iW.e, tW = WW.e, wW = wW.slice(), PW = tW - mW) {
          for ((ZW = PW < 0) ? (OW = wW, PW = -PW, cW = xW.length) : (OW = xW, mW = tW, cW = wW.length), PW > (EW = Math.max(Math.ceil(bW / 7), cW) + 2) && (PW = EW, OW.length = 1), OW.reverse(), EW = PW; EW--;) OW.push(0);
          OW.reverse()
        } else {
          for ((ZW = (EW = wW.length) < (cW = xW.length)) && (cW = EW), EW = 0; EW < cW; EW++)
            if (wW[EW] != xW[EW]) {
              ZW = wW[EW] < xW[EW];
              break
            } PW = 0
        }
        for (ZW && (OW = wW, wW = xW, xW = OW, iW.s = -iW.s), cW = wW.length, EW = xW.length - cW; EW > 0; --EW) wW[cW++] = 0;
        for (EW = xW.length; EW > PW;) {
          if (wW[--EW] < xW[EW]) {
            for (NW = EW; NW && 0 === wW[--NW];) wW[NW] = AW - 1;
            --wW[NW], wW[EW] += AW
          }
          wW[EW] -= xW[EW]
        }
        for (; 0 === wW[--cW];) wW.pop();
        for (; 0 === wW[0]; wW.shift()) --mW;
        return wW[0] ? (iW.d = wW, iW.e = mW, LW ? HW(iW, bW) : iW) : new lW(0)
      }

      function uW(WW, iW, OW) {
        var mW, EW = YW(WW),
          NW = MW(WW.d),
          PW = NW.length;
        return iW ? (OW && (mW = OW - PW) > 0 ? NW = NW.charAt(0) + "." + NW.slice(1) + TW(mW) : PW > 1 && (NW = NW.charAt(0) + "." + NW.slice(1)), NW = NW + (EW < 0 ? "e" : "e+") + EW) : EW < 0 ? (NW = "0." + TW(-EW - 1) + NW, OW && (mW = OW - PW) > 0 && (NW += TW(mW))) : EW >= PW ? (NW += TW(EW + 1 - PW), OW && (mW = OW - EW - 1) > 0 && (NW = NW + "." + TW(mW))) : ((mW = EW + 1) < PW && (NW = NW.slice(0, mW) + "." + NW.slice(mW)), OW && (mW = OW - PW) > 0 && (EW + 1 === PW && (NW += "."), NW += TW(mW))), WW.s < 0 ? "-" + NW : NW
      }

      function oW(WW, iW) {
        if (WW.length > iW) return WW.length = iW, !0
      }

      function dW(WW) {
        if (!WW || "object" !== typeof WW) throw Error(cW + "Object expected");
        var iW, OW, mW, EW = ["precision", 1, NW, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (iW = 0; iW < EW.length; iW += 3)
          if (void 0 !== (mW = WW[OW = EW[iW]])) {
            if (!(ZW(mW) === mW && mW >= EW[iW + 1] && mW <= EW[iW + 2])) throw Error(wW + OW + ": " + mW);
            this[OW] = mW
          } if (void 0 !== (mW = WW[OW = "LN10"])) {
          if (mW != Math.LN10) throw Error(wW + OW + ": " + mW);
          this[OW] = new this(mW)
        }
        return this
      }
      PW = function WW(iW) {
        var OW, mW, EW;

        function NW(WW) {
          var iW = this;
          if (!(iW instanceof NW)) return new NW(WW);
          if (iW.constructor = NW, WW instanceof NW) return iW.s = WW.s, iW.e = WW.e, void(iW.d = (WW = WW.d) ? WW.slice() : WW);
          if ("number" === typeof WW) {
            if (0 * WW !== 0) throw Error(wW + WW);
            if (WW > 0) iW.s = 1;
            else {
              if (!(WW < 0)) return iW.s = 0, iW.e = 0, void(iW.d = [0]);
              WW = -WW, iW.s = -1
            }
            return WW === ~~WW && WW < 1e7 ? (iW.e = 0, void(iW.d = [WW])) : hW(iW, WW.toString())
          }
          if ("string" !== typeof WW) throw Error(wW + WW);
          if (45 === WW.charCodeAt(0) ? (WW = WW.slice(1), iW.s = -1) : iW.s = 1, !lW.test(WW)) throw Error(wW + WW);
          hW(iW, WW)
        }
        if (NW.prototype = UW, NW.ROUND_UP = 0, NW.ROUND_DOWN = 1, NW.ROUND_CEIL = 2, NW.ROUND_FLOOR = 3, NW.ROUND_HALF_UP = 4, NW.ROUND_HALF_DOWN = 5, NW.ROUND_HALF_EVEN = 6, NW.ROUND_HALF_CEIL = 7, NW.ROUND_HALF_FLOOR = 8, NW.clone = WW, NW.config = NW.set = dW, void 0 === iW && (iW = {}), iW)
          for (EW = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], OW = 0; OW < EW.length;) iW.hasOwnProperty(mW = EW[OW++]) || (iW[mW] = this[mW]);
        return NW.config(iW), NW
      }(PW), PW.default = PW.Decimal = PW, EW = new PW(1), void 0 === (mW = function() {
        return PW
      }.call(iW, OW, iW, WW)) || (WW.exports = mW)
    }()
  },
  6761: (WW, iW, OW) => {
    var mW = OW(6211)(OW(6045), "DataView");
    WW.exports = mW
  },
  6192: (WW, iW, OW) => {
    var mW = OW(6198),
      EW = OW(6255),
      NW = OW(6257),
      PW = OW(6264),
      LW = OW(6269);

    function cW(WW) {
      var iW = -1,
        OW = null == WW ? 0 : WW.length;
      for (this.clear(); ++iW < OW;) {
        var mW = WW[iW];
        this.set(mW[0], mW[1])
      }
    }
    cW.prototype.clear = mW, cW.prototype.delete = EW, cW.prototype.get = NW, cW.prototype.has = PW, cW.prototype.set = LW, WW.exports = cW
  },
  6278: (WW, iW, OW) => {
    var mW = OW(6280),
      EW = OW(6284),
      NW = OW(6303),
      PW = OW(6310),
      LW = OW(6319);

    function cW(WW) {
      var iW = -1,
        OW = null == WW ? 0 : WW.length;
      for (this.clear(); ++iW < OW;) {
        var mW = WW[iW];
        this.set(mW[0], mW[1])
      }
    }
    cW.prototype.clear = mW, cW.prototype.delete = EW, cW.prototype.get = NW, cW.prototype.has = PW, cW.prototype.set = LW, WW.exports = cW
  },
  6324: (WW, iW, OW) => {
    var mW = OW(6211)(OW(6045), "Map");
    WW.exports = mW
  },
  6180: (WW, iW, OW) => {
    var mW = OW(6184),
      EW = OW(6328),
      NW = OW(6345),
      PW = OW(6352),
      LW = OW(6355);

    function cW(WW) {
      var iW = -1,
        OW = null == WW ? 0 : WW.length;
      for (this.clear(); ++iW < OW;) {
        var mW = WW[iW];
        this.set(mW[0], mW[1])
      }
    }
    cW.prototype.clear = mW, cW.prototype.delete = EW, cW.prototype.get = NW, cW.prototype.has = PW, cW.prototype.set = LW, WW.exports = cW
  },
  6770: (WW, iW, OW) => {
    var mW = OW(6211)(OW(6045), "Promise");
    WW.exports = mW
  },
  6772: (WW, iW, OW) => {
    var mW = OW(6211)(OW(6045), "Set");
    WW.exports = mW
  },
  6591: (WW, iW, OW) => {
    var mW = OW(6180),
      EW = OW(6599),
      NW = OW(6607);

    function PW(WW) {
      var iW = -1,
        OW = null == WW ? 0 : WW.length;
      for (this.__data__ = new mW; ++iW < OW;) this.add(WW[iW])
    }
    PW.prototype.add = PW.prototype.push = EW, PW.prototype.has = NW, WW.exports = PW
  },
  6535: (WW, iW, OW) => {
    var mW = OW(6278),
      EW = OW(6537),
      NW = OW(6546),
      PW = OW(6555),
      LW = OW(6557),
      cW = OW(6564);

    function wW(WW) {
      var iW = this.__data__ = new mW(WW);
      this.size = iW.size
    }
    wW.prototype.clear = EW, wW.prototype.delete = NW, wW.prototype.get = PW, wW.prototype.has = LW, wW.prototype.set = cW, WW.exports = wW
  },
  6081: (WW, iW, OW) => {
    var mW = OW(6045).Symbol;
    WW.exports = mW
  },
  6630: (WW, iW, OW) => {
    var mW = OW(6045).Uint8Array;
    WW.exports = mW
  },
  6775: (WW, iW, OW) => {
    var mW = OW(6211)(OW(6045), "WeakMap");
    WW.exports = mW
  },
  6878: WW => {
    WW.exports = function(WW, iW, OW) {
      switch (OW.length) {
        case 0:
          return WW.call(iW);
        case 1:
          return WW.call(iW, OW[0]);
        case 2:
          return WW.call(iW, OW[0], OW[1]);
        case 3:
          return WW.call(iW, OW[0], OW[1], OW[2])
      }
      return WW.apply(iW, OW)
    }
  },
  7239: WW => {
    WW.exports = function(WW, iW) {
      for (var OW = -1, mW = null == WW ? 0 : WW.length; ++OW < mW;)
        if (!iW(WW[OW], OW, WW)) return !1;
      return !0
    }
  },
  6663: WW => {
    WW.exports = function(WW, iW) {
      for (var OW = -1, mW = null == WW ? 0 : WW.length, EW = 0, NW = []; ++OW < mW;) {
        var PW = WW[OW];
        iW(PW, OW, WW) && (NW[EW++] = PW)
      }
      return NW
    }
  },
  6951: (WW, iW, OW) => {
    var mW = OW(6958);
    WW.exports = function(WW, iW) {
      return !!(null == WW ? 0 : WW.length) && mW(WW, iW, 0) > -1
    }
  },
  6983: WW => {
    WW.exports = function(WW, iW, OW) {
      for (var mW = -1, EW = null == WW ? 0 : WW.length; ++mW < EW;)
        if (OW(iW, WW[mW])) return !0;
      return !1
    }
  },
  6683: (WW, iW, OW) => {
    var mW = OW(6685),
      EW = OW(6503),
      NW = OW(6118),
      PW = OW(6693),
      LW = OW(6472),
      cW = OW(6701),
      wW = Object.prototype.hasOwnProperty;
    WW.exports = function(WW, iW) {
      var OW = NW(WW),
        tW = !OW && EW(WW),
        ZW = !OW && !tW && PW(WW),
        xW = !OW && !tW && !ZW && cW(WW),
        lW = OW || tW || ZW || xW,
        AW = lW ? mW(WW.length, String) : [],
        bW = AW.length;
      for (var jW in WW) !iW && !wW.call(WW, jW) || lW && ("length" == jW || ZW && ("offset" == jW || "parent" == jW) || xW && ("buffer" == jW || "byteLength" == jW || "byteOffset" == jW) || LW(jW, bW)) || AW.push(jW);
      return AW
    }
  },
  6370: WW => {
    WW.exports = function(WW, iW) {
      for (var OW = -1, mW = null == WW ? 0 : WW.length, EW = Array(mW); ++OW < mW;) EW[OW] = iW(WW[OW], OW, WW);
      return EW
    }
  },
  6493: WW => {
    WW.exports = function(WW, iW) {
      for (var OW = -1, mW = iW.length, EW = WW.length; ++OW < mW;) WW[EW + OW] = iW[OW];
      return WW
    }
  },
  6611: WW => {
    WW.exports = function(WW, iW) {
      for (var OW = -1, mW = null == WW ? 0 : WW.length; ++OW < mW;)
        if (iW(WW[OW], OW, WW)) return !0;
      return !1
    }
  },
  7047: WW => {
    WW.exports = function(WW) {
      return WW.split("")
    }
  },
  6289: (WW, iW, OW) => {
    var mW = OW(6298);
    WW.exports = function(WW, iW) {
      for (var OW = WW.length; OW--;)
        if (mW(WW[OW][0], iW)) return OW;
      return -1
    }
  },
  7227: (WW, iW, OW) => {
    var mW = OW(6904);
    WW.exports = function(WW, iW, OW) {
      "__proto__" == iW && mW ? mW(WW, iW, {
        configurable: !0,
        enumerable: !0,
        value: OW,
        writable: !0
      }) : WW[iW] = OW
    }
  },
  6830: (WW, iW, OW) => {
    var mW = OW(6836),
      EW = OW(6849)(mW);
    WW.exports = EW
  },
  7248: (WW, iW, OW) => {
    var mW = OW(6830);
    WW.exports = function(WW, iW) {
      var OW = !0;
      return mW(WW, (function(WW, mW, EW) {
        return OW = !!iW(WW, mW, EW)
      })), OW
    }
  },
  7135: (WW, iW, OW) => {
    var mW = OW(6071);
    WW.exports = function(WW, iW, OW) {
      for (var EW = -1, NW = WW.length; ++EW < NW;) {
        var PW = WW[EW],
          LW = iW(PW);
        if (null != LW && (void 0 === cW ? LW === LW && !mW(LW) : OW(LW, cW))) var cW = LW,
          wW = PW
      }
      return wW
    }
  },
  6965: WW => {
    WW.exports = function(WW, iW, OW, mW) {
      for (var EW = WW.length, NW = OW + (mW ? 1 : -1); mW ? NW-- : ++NW < EW;)
        if (iW(WW[NW], NW, WW)) return NW;
      return -1
    }
  },
  6485: (WW, iW, OW) => {
    var mW = OW(6493),
      EW = OW(6500);
    WW.exports = function WW(iW, OW, NW, PW, LW) {
      var cW = -1,
        wW = iW.length;
      for (NW || (NW = EW), LW || (LW = []); ++cW < wW;) {
        var tW = iW[cW];
        OW > 0 && NW(tW) ? OW > 1 ? WW(tW, OW - 1, NW, PW, LW) : mW(LW, tW) : PW || (LW[LW.length] = tW)
      }
      return LW
    }
  },
  6840: (WW, iW, OW) => {
    var mW = OW(6843)();
    WW.exports = mW
  },
  6836: (WW, iW, OW) => {
    var mW = OW(6840),
      EW = OW(6676);
    WW.exports = function(WW, iW) {
      return WW && mW(WW, iW, EW)
    }
  },
  6138: (WW, iW, OW) => {
    var mW = OW(6140),
      EW = OW(6377);
    WW.exports = function(WW, iW) {
      for (var OW = 0, NW = (iW = mW(iW, WW)).length; null != WW && OW < NW;) WW = WW[EW(iW[OW++])];
      return OW && OW == NW ? WW : void 0
    }
  },
  6652: (WW, iW, OW) => {
    var mW = OW(6493),
      EW = OW(6118);
    WW.exports = function(WW, iW, OW) {
      var NW = iW(WW);
      return EW(WW) ? NW : mW(NW, OW(WW))
    }
  },
  6073: (WW, iW, OW) => {
    var mW = OW(6081),
      EW = OW(6090),
      NW = OW(6094),
      PW = mW ? mW.toStringTag : void 0;
    WW.exports = function(WW) {
      return null == WW ? void 0 === WW ? "[object Undefined]" : "[object Null]" : PW && PW in Object(WW) ? EW(WW) : NW(WW)
    }
  },
  7144: WW => {
    WW.exports = function(WW, iW) {
      return WW > iW
    }
  },
  6796: WW => {
    WW.exports = function(WW, iW) {
      return null != WW && iW in Object(WW)
    }
  },
  6958: (WW, iW, OW) => {
    var mW = OW(6965),
      EW = OW(6967),
      NW = OW(6974);
    WW.exports = function(WW, iW, OW) {
      return iW === iW ? NW(WW, iW, OW) : mW(WW, EW, OW)
    }
  },
  6508: (WW, iW, OW) => {
    var mW = OW(6073),
      EW = OW(6103);
    WW.exports = function(WW) {
      return EW(WW) && "[object Arguments]" == mW(WW)
    }
  },
  6570: (WW, iW, OW) => {
    var mW = OW(6578),
      EW = OW(6103);
    WW.exports = function WW(iW, OW, NW, PW, LW) {
      return iW === OW || (null == iW || null == OW || !EW(iW) && !EW(OW) ? iW !== iW && OW !== OW : mW(iW, OW, NW, PW, WW, LW))
    }
  },
  6578: (WW, iW, OW) => {
    var mW = OW(6535),
      EW = OW(6583),
      NW = OW(6624),
      PW = OW(6642),
      LW = OW(6754),
      cW = OW(6118),
      wW = OW(6693),
      tW = OW(6701),
      ZW = "[object Arguments]",
      xW = "[object Array]",
      lW = "[object Object]",
      AW = Object.prototype.hasOwnProperty;
    WW.exports = function(WW, iW, OW, bW, jW, UW) {
      var kW = cW(WW),
        sW = cW(iW),
        MW = kW ? xW : LW(WW),
        KW = sW ? xW : LW(iW),
        SW = (MW = MW == ZW ? lW : MW) == lW,
        YW = (KW = KW == ZW ? lW : KW) == lW,
        yW = MW == KW;
      if (yW && wW(WW)) {
        if (!wW(iW)) return !1;
        kW = !0, SW = !1
      }
      if (yW && !SW) return UW || (UW = new mW), kW || tW(WW) ? EW(WW, iW, OW, bW, jW, UW) : NW(WW, iW, MW, OW, bW, jW, UW);
      if (!(1 & OW)) {
        var TW = SW && AW.call(WW, "__wrapped__"),
          JW = YW && AW.call(iW, "__wrapped__");
        if (TW || JW) {
          var hW = TW ? WW.value() : WW,
            HW = JW ? iW.value() : iW;
          return UW || (UW = new mW), jW(hW, HW, OW, bW, UW)
        }
      }
      return !!yW && (UW || (UW = new mW), PW(WW, iW, OW, bW, jW, UW))
    }
  },
  6526: (WW, iW, OW) => {
    var mW = OW(6535),
      EW = OW(6570);
    WW.exports = function(WW, iW, OW, NW) {
      var PW = OW.length,
        LW = PW,
        cW = !NW;
      if (null == WW) return !LW;
      for (WW = Object(WW); PW--;) {
        var wW = OW[PW];
        if (cW && wW[2] ? wW[1] !== WW[wW[0]] : !(wW[0] in WW)) return !1
      }
      for (; ++PW < LW;) {
        var tW = (wW = OW[PW])[0],
          ZW = WW[tW],
          xW = wW[1];
        if (cW && wW[2]) {
          if (void 0 === ZW && !(tW in WW)) return !1
        } else {
          var lW = new mW;
          if (NW) var AW = NW(ZW, xW, tW, WW, iW, lW);
          if (!(void 0 === AW ? EW(xW, ZW, 3, NW, lW) : AW)) return !1
        }
      }
      return !0
    }
  },
  6967: WW => {
    WW.exports = function(WW) {
      return WW !== WW
    }
  },
  6215: (WW, iW, OW) => {
    var mW = OW(6223),
      EW = OW(6229),
      NW = OW(6034),
      PW = OW(6243),
      LW = /^\[object .+?Constructor\]$/,
      cW = Function.prototype,
      wW = Object.prototype,
      tW = cW.toString,
      ZW = wW.hasOwnProperty,
      xW = RegExp("^" + tW.call(ZW).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    WW.exports = function(WW) {
      return !(!NW(WW) || EW(WW)) && (mW(WW) ? xW : LW).test(PW(WW))
    }
  },
  6707: (WW, iW, OW) => {
    var mW = OW(6073),
      EW = OW(6464),
      NW = OW(6103),
      PW = {};
    PW["[object Float32Array]"] = PW["[object Float64Array]"] = PW["[object Int8Array]"] = PW["[object Int16Array]"] = PW["[object Int32Array]"] = PW["[object Uint8Array]"] = PW["[object Uint8ClampedArray]"] = PW["[object Uint16Array]"] = PW["[object Uint32Array]"] = !0, PW["[object Arguments]"] = PW["[object Array]"] = PW["[object ArrayBuffer]"] = PW["[object Boolean]"] = PW["[object DataView]"] = PW["[object Date]"] = PW["[object Error]"] = PW["[object Function]"] = PW["[object Map]"] = PW["[object Number]"] = PW["[object Object]"] = PW["[object RegExp]"] = PW["[object Set]"] = PW["[object String]"] = PW["[object WeakMap]"] = !1, WW.exports = function(WW) {
      return NW(WW) && EW(WW.length) && !!PW[mW(WW)]
    }
  },
  6516: (WW, iW, OW) => {
    var mW = OW(6523),
      EW = OW(6791),
      NW = OW(6805),
      PW = OW(6118),
      LW = OW(6811);
    WW.exports = function(WW) {
      return "function" == typeof WW ? WW : null == WW ? NW : "object" == typeof WW ? PW(WW) ? EW(WW[0], WW[1]) : mW(WW) : LW(WW)
    }
  },
  6727: (WW, iW, OW) => {
    var mW = OW(6732),
      EW = OW(6739),
      NW = Object.prototype.hasOwnProperty;
    WW.exports = function(WW) {
      if (!mW(WW)) return EW(WW);
      var iW = [];
      for (var OW in Object(WW)) NW.call(WW, OW) && "constructor" != OW && iW.push(OW);
      return iW
    }
  },
  7155: WW => {
    WW.exports = function(WW, iW) {
      return WW < iW
    }
  },
  6823: (WW, iW, OW) => {
    var mW = OW(6830),
      EW = OW(6460);
    WW.exports = function(WW, iW) {
      var OW = -1,
        NW = EW(WW) ? Array(WW.length) : [];
      return mW(WW, (function(WW, mW, EW) {
        NW[++OW] = iW(WW, mW, EW)
      })), NW
    }
  },
  6523: (WW, iW, OW) => {
    var mW = OW(6526),
      EW = OW(6779),
      NW = OW(6784);
    WW.exports = function(WW) {
      var iW = EW(WW);
      return 1 == iW.length && iW[0][2] ? NW(iW[0][0], iW[0][1]) : function(OW) {
        return OW === WW || mW(OW, WW, iW)
      }
    }
  },
  6791: (WW, iW, OW) => {
    var mW = OW(6570),
      EW = OW(6135),
      NW = OW(6793),
      PW = OW(6149),
      LW = OW(6782),
      cW = OW(6784),
      wW = OW(6377);
    WW.exports = function(WW, iW) {
      return PW(WW) && LW(iW) ? cW(wW(WW), iW) : function(OW) {
        var PW = EW(OW, WW);
        return void 0 === PW && PW === iW ? NW(OW, WW) : mW(iW, PW, 3)
      }
    }
  },
  6514: (WW, iW, OW) => {
    var mW = OW(6370),
      EW = OW(6138),
      NW = OW(6516),
      PW = OW(6823),
      LW = OW(6853),
      cW = OW(6710),
      wW = OW(6862),
      tW = OW(6805),
      ZW = OW(6118);
    WW.exports = function(WW, iW, OW) {
      iW = iW.length ? mW(iW, (function(WW) {
        return ZW(WW) ? function(iW) {
          return EW(iW, 1 === WW.length ? WW[0] : WW)
        } : WW
      })) : [tW];
      var xW = -1;
      iW = mW(iW, cW(NW));
      var lW = PW(WW, (function(WW, OW, EW) {
        return {
          criteria: mW(iW, (function(iW) {
            return iW(WW)
          })),
          index: ++xW,
          value: WW
        }
      }));
      return LW(lW, (function(WW, iW) {
        return wW(WW, iW, OW)
      }))
    }
  },
  6814: WW => {
    WW.exports = function(WW) {
      return function(iW) {
        return null == iW ? void 0 : iW[WW]
      }
    }
  },
  6818: (WW, iW, OW) => {
    var mW = OW(6138);
    WW.exports = function(WW) {
      return function(iW) {
        return mW(iW, WW)
      }
    }
  },
  6446: WW => {
    var iW = Math.ceil,
      OW = Math.max;
    WW.exports = function(WW, mW, EW, NW) {
      for (var PW = -1, LW = OW(iW((mW - WW) / (EW || 1)), 0), cW = Array(LW); LW--;) cW[NW ? LW : ++PW] = WW, WW += EW;
      return cW
    }
  },
  6873: (WW, iW, OW) => {
    var mW = OW(6805),
      EW = OW(6876),
      NW = OW(6887);
    WW.exports = function(WW, iW) {
      return NW(EW(WW, iW, mW), WW + "")
    }
  },
  6891: (WW, iW, OW) => {
    var mW = OW(6897),
      EW = OW(6904),
      NW = OW(6805),
      PW = EW ? function(WW, iW) {
        return EW(WW, "toString", {
          configurable: !0,
          enumerable: !1,
          value: mW(iW),
          writable: !0
        })
      } : NW;
    WW.exports = PW
  },
  7024: WW => {
    WW.exports = function(WW, iW, OW) {
      var mW = -1,
        EW = WW.length;
      iW < 0 && (iW = -iW > EW ? 0 : EW + iW), (OW = OW > EW ? EW : OW) < 0 && (OW += EW), EW = iW > OW ? 0 : OW - iW >>> 0, iW >>>= 0;
      for (var NW = Array(EW); ++mW < EW;) NW[mW] = WW[mW + iW];
      return NW
    }
  },
  7311: (WW, iW, OW) => {
    var mW = OW(6830);
    WW.exports = function(WW, iW) {
      var OW;
      return mW(WW, (function(WW, mW, EW) {
        return !(OW = iW(WW, mW, EW))
      })), !!OW
    }
  },
  6853: WW => {
    WW.exports = function(WW, iW) {
      var OW = WW.length;
      for (WW.sort(iW); OW--;) WW[OW] = WW[OW].value;
      return WW
    }
  },
  6685: WW => {
    WW.exports = function(WW, iW) {
      for (var OW = -1, mW = Array(WW); ++OW < WW;) mW[OW] = iW(OW);
      return mW
    }
  },
  6363: (WW, iW, OW) => {
    var mW = OW(6081),
      EW = OW(6370),
      NW = OW(6118),
      PW = OW(6071),
      LW = mW ? mW.prototype : void 0,
      cW = LW ? LW.toString : void 0;
    WW.exports = function WW(iW) {
      if ("string" == typeof iW) return iW;
      if (NW(iW)) return EW(iW, WW) + "";
      if (PW(iW)) return cW ? cW.call(iW) : "";
      var OW = iW + "";
      return "0" == OW && 1 / iW == -1 / 0 ? "-0" : OW
    }
  },
  6063: (WW, iW, OW) => {
    var mW = OW(6065),
      EW = /^\s+/;
    WW.exports = function(WW) {
      return WW ? WW.slice(0, mW(WW) + 1).replace(EW, "") : WW
    }
  },
  6710: WW => {
    WW.exports = function(WW) {
      return function(iW) {
        return WW(iW)
      }
    }
  },
  6949: (WW, iW, OW) => {
    var mW = OW(6591),
      EW = OW(6951),
      NW = OW(6983),
      PW = OW(6617),
      LW = OW(6985),
      cW = OW(6639);
    WW.exports = function(WW, iW, OW) {
      var wW = -1,
        tW = EW,
        ZW = WW.length,
        xW = !0,
        lW = [],
        AW = lW;
      if (OW) xW = !1, tW = NW;
      else if (ZW >= 200) {
        var bW = iW ? null : LW(WW);
        if (bW) return cW(bW);
        xW = !1, tW = PW, AW = new mW
      } else AW = iW ? [] : lW;
      WW: for (; ++wW < ZW;) {
        var jW = WW[wW],
          UW = iW ? iW(jW) : jW;
        if (jW = OW || 0 !== jW ? jW : 0, xW && UW === UW) {
          for (var kW = AW.length; kW--;)
            if (AW[kW] === UW) continue WW;
          iW && AW.push(UW), lW.push(jW)
        } else tW(AW, UW, OW) || (AW !== lW && AW.push(UW), lW.push(jW))
      }
      return lW
    }
  },
  6617: WW => {
    WW.exports = function(WW, iW) {
      return WW.has(iW)
    }
  },
  6140: (WW, iW, OW) => {
    var mW = OW(6118),
      EW = OW(6149),
      NW = OW(6157),
      PW = OW(6358);
    WW.exports = function(WW, iW) {
      return mW(WW) ? WW : EW(WW, iW) ? [WW] : NW(PW(WW))
    }
  },
  7019: (WW, iW, OW) => {
    var mW = OW(7024);
    WW.exports = function(WW, iW, OW) {
      var EW = WW.length;
      return OW = void 0 === OW ? EW : OW, !iW && OW >= EW ? WW : mW(WW, iW, OW)
    }
  },
  6866: (WW, iW, OW) => {
    var mW = OW(6071);
    WW.exports = function(WW, iW) {
      if (WW !== iW) {
        var OW = void 0 !== WW,
          EW = null === WW,
          NW = WW === WW,
          PW = mW(WW),
          LW = void 0 !== iW,
          cW = null === iW,
          wW = iW === iW,
          tW = mW(iW);
        if (!cW && !tW && !PW && WW > iW || PW && LW && wW && !cW && !tW || EW && LW && wW || !OW && wW || !NW) return 1;
        if (!EW && !PW && !tW && WW < iW || tW && OW && NW && !EW && !PW || cW && OW && NW || !LW && NW || !wW) return -1
      }
      return 0
    }
  },
  6862: (WW, iW, OW) => {
    var mW = OW(6866);
    WW.exports = function(WW, iW, OW) {
      for (var EW = -1, NW = WW.criteria, PW = iW.criteria, LW = NW.length, cW = OW.length; ++EW < LW;) {
        var wW = mW(NW[EW], PW[EW]);
        if (wW) return EW >= cW ? wW : wW * ("desc" == OW[EW] ? -1 : 1)
      }
      return WW.index - iW.index
    }
  },
  6237: (WW, iW, OW) => {
    var mW = OW(6045)["__core-js_shared__"];
    WW.exports = mW
  },
  6849: (WW, iW, OW) => {
    var mW = OW(6460);
    WW.exports = function(WW, iW) {
      return function(OW, EW) {
        if (null == OW) return OW;
        if (!mW(OW)) return WW(OW, EW);
        for (var NW = OW.length, PW = iW ? NW : -1, LW = Object(OW);
          (iW ? PW-- : ++PW < NW) && !1 !== EW(LW[PW], PW, LW););
        return OW
      }
    }
  },
  6843: WW => {
    WW.exports = function(WW) {
      return function(iW, OW, mW) {
        for (var EW = -1, NW = Object(iW), PW = mW(iW), LW = PW.length; LW--;) {
          var cW = PW[WW ? LW : ++EW];
          if (!1 === OW(NW[cW], cW, NW)) break
        }
        return iW
      }
    }
  },
  7010: (WW, iW, OW) => {
    var mW = OW(7019),
      EW = OW(7031),
      NW = OW(7040),
      PW = OW(6358);
    WW.exports = function(WW) {
      return function(iW) {
        iW = PW(iW);
        var OW = EW(iW) ? NW(iW) : void 0,
          LW = OW ? OW[0] : iW.charAt(0),
          cW = OW ? mW(OW, 1).join("") : iW.slice(1);
        return LW[WW]() + cW
      }
    }
  },
  7331: (WW, iW, OW) => {
    var mW = OW(6516),
      EW = OW(6460),
      NW = OW(6676);
    WW.exports = function(WW) {
      return function(iW, OW, PW) {
        var LW = Object(iW);
        if (!EW(iW)) {
          var cW = mW(OW, 3);
          iW = NW(iW), OW = function(WW) {
            return cW(LW[WW], WW, LW)
          }
        }
        var wW = WW(iW, OW, PW);
        return wW > -1 ? LW[cW ? iW[wW] : wW] : void 0
      }
    }
  },
  6440: (WW, iW, OW) => {
    var mW = OW(6446),
      EW = OW(6452),
      NW = OW(6476);
    WW.exports = function(WW) {
      return function(iW, OW, PW) {
        return PW && "number" != typeof PW && EW(iW, OW, PW) && (OW = PW = void 0), iW = NW(iW), void 0 === OW ? (OW = iW, iW = 0) : OW = NW(OW), PW = void 0 === PW ? iW < OW ? 1 : -1 : NW(PW), mW(iW, OW, PW, WW)
      }
    }
  },
  6985: (WW, iW, OW) => {
    var mW = OW(6772),
      EW = OW(6987),
      NW = OW(6639),
      PW = mW && 1 / NW(new mW([, -0]))[1] == 1 / 0 ? function(WW) {
        return new mW(WW)
      } : EW;
    WW.exports = PW
  },
  6904: (WW, iW, OW) => {
    var mW = OW(6211),
      EW = function() {
        try {
          var WW = mW(Object, "defineProperty");
          return WW({}, "", {}), WW
        } catch (iW) {}
      }();
    WW.exports = EW
  },
  6583: (WW, iW, OW) => {
    var mW = OW(6591),
      EW = OW(6611),
      NW = OW(6617);
    WW.exports = function(WW, iW, OW, PW, LW, cW) {
      var wW = 1 & OW,
        tW = WW.length,
        ZW = iW.length;
      if (tW != ZW && !(wW && ZW > tW)) return !1;
      var xW = cW.get(WW),
        lW = cW.get(iW);
      if (xW && lW) return xW == iW && lW == WW;
      var AW = -1,
        bW = !0,
        jW = 2 & OW ? new mW : void 0;
      for (cW.set(WW, iW), cW.set(iW, WW); ++AW < tW;) {
        var UW = WW[AW],
          kW = iW[AW];
        if (PW) var sW = wW ? PW(kW, UW, AW, iW, WW, cW) : PW(UW, kW, AW, WW, iW, cW);
        if (void 0 !== sW) {
          if (sW) continue;
          bW = !1;
          break
        }
        if (jW) {
          if (!EW(iW, (function(WW, iW) {
              if (!NW(jW, iW) && (UW === WW || LW(UW, WW, OW, PW, cW))) return jW.push(iW)
            }))) {
            bW = !1;
            break
          }
        } else if (UW !== kW && !LW(UW, kW, OW, PW, cW)) {
          bW = !1;
          break
        }
      }
      return cW.delete(WW), cW.delete(iW), bW
    }
  },
  6624: (WW, iW, OW) => {
    var mW = OW(6081),
      EW = OW(6630),
      NW = OW(6298),
      PW = OW(6583),
      LW = OW(6633),
      cW = OW(6639),
      wW = mW ? mW.prototype : void 0,
      tW = wW ? wW.valueOf : void 0;
    WW.exports = function(WW, iW, OW, mW, wW, ZW, xW) {
      switch (OW) {
        case "[object DataView]":
          if (WW.byteLength != iW.byteLength || WW.byteOffset != iW.byteOffset) return !1;
          WW = WW.buffer, iW = iW.buffer;
        case "[object ArrayBuffer]":
          return !(WW.byteLength != iW.byteLength || !ZW(new EW(WW), new EW(iW)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return NW(+WW, +iW);
        case "[object Error]":
          return WW.name == iW.name && WW.message == iW.message;
        case "[object RegExp]":
        case "[object String]":
          return WW == iW + "";
        case "[object Map]":
          var lW = LW;
        case "[object Set]":
          var AW = 1 & mW;
          if (lW || (lW = cW), WW.size != iW.size && !AW) return !1;
          var bW = xW.get(WW);
          if (bW) return bW == iW;
          mW |= 2, xW.set(WW, iW);
          var jW = PW(lW(WW), lW(iW), mW, wW, ZW, xW);
          return xW.delete(WW), jW;
        case "[object Symbol]":
          if (tW) return tW.call(WW) == tW.call(iW)
      }
      return !1
    }
  },
  6642: (WW, iW, OW) => {
    var mW = OW(6645),
      EW = Object.prototype.hasOwnProperty;
    WW.exports = function(WW, iW, OW, NW, PW, LW) {
      var cW = 1 & OW,
        wW = mW(WW),
        tW = wW.length;
      if (tW != mW(iW).length && !cW) return !1;
      for (var ZW = tW; ZW--;) {
        var xW = wW[ZW];
        if (!(cW ? xW in iW : EW.call(iW, xW))) return !1
      }
      var lW = LW.get(WW),
        AW = LW.get(iW);
      if (lW && AW) return lW == iW && AW == WW;
      var bW = !0;
      LW.set(WW, iW), LW.set(iW, WW);
      for (var jW = cW; ++ZW < tW;) {
        var UW = WW[xW = wW[ZW]],
          kW = iW[xW];
        if (NW) var sW = cW ? NW(kW, UW, xW, iW, WW, LW) : NW(UW, kW, xW, WW, iW, LW);
        if (!(void 0 === sW ? UW === kW || PW(UW, kW, OW, NW, LW) : sW)) {
          bW = !1;
          break
        }
        jW || (jW = "constructor" == xW)
      }
      if (bW && !jW) {
        var MW = WW.constructor,
          KW = iW.constructor;
        MW == KW || !("constructor" in WW) || !("constructor" in iW) || "function" == typeof MW && MW instanceof MW && "function" == typeof KW && KW instanceof KW || (bW = !1)
      }
      return LW.delete(WW), LW.delete(iW), bW
    }
  },
  6052: (WW, iW, OW) => {
    var mW = "object" == typeof OW.g && OW.g && OW.g.Object === Object && OW.g;
    WW.exports = mW
  },
  6645: (WW, iW, OW) => {
    var mW = OW(6652),
      EW = OW(6657),
      NW = OW(6676);
    WW.exports = function(WW) {
      return mW(WW, NW, EW)
    }
  },
  6335: (WW, iW, OW) => {
    var mW = OW(6340);
    WW.exports = function(WW, iW) {
      var OW = WW.__data__;
      return mW(iW) ? OW["string" == typeof iW ? "string" : "hash"] : OW.map
    }
  },
  6779: (WW, iW, OW) => {
    var mW = OW(6782),
      EW = OW(6676);
    WW.exports = function(WW) {
      for (var iW = EW(WW), OW = iW.length; OW--;) {
        var NW = iW[OW],
          PW = WW[NW];
        iW[OW] = [NW, PW, mW(PW)]
      }
      return iW
    }
  },
  6211: (WW, iW, OW) => {
    var mW = OW(6215),
      EW = OW(6247);
    WW.exports = function(WW, iW) {
      var OW = EW(WW, iW);
      return mW(OW) ? OW : void 0
    }
  },
  7290: (WW, iW, OW) => {
    var mW = OW(6747)(Object.getPrototypeOf, Object);
    WW.exports = mW
  },
  6090: (WW, iW, OW) => {
    var mW = OW(6081),
      EW = Object.prototype,
      NW = EW.hasOwnProperty,
      PW = EW.toString,
      LW = mW ? mW.toStringTag : void 0;
    WW.exports = function(WW) {
      var iW = NW.call(WW, LW),
        OW = WW[LW];
      try {
        WW[LW] = void 0;
        var mW = !0
      } catch (cW) {}
      var EW = PW.call(WW);
      return mW && (iW ? WW[LW] = OW : delete WW[LW]), EW
    }
  },
  6657: (WW, iW, OW) => {
    var mW = OW(6663),
      EW = OW(6669),
      NW = Object.prototype.propertyIsEnumerable,
      PW = Object.getOwnPropertySymbols,
      LW = PW ? function(WW) {
        return null == WW ? [] : (WW = Object(WW), mW(PW(WW), (function(iW) {
          return NW.call(WW, iW)
        })))
      } : EW;
    WW.exports = LW
  },
  6754: (WW, iW, OW) => {
    var mW = OW(6761),
      EW = OW(6324),
      NW = OW(6770),
      PW = OW(6772),
      LW = OW(6775),
      cW = OW(6073),
      wW = OW(6243),
      tW = "[object Map]",
      ZW = "[object Promise]",
      xW = "[object Set]",
      lW = "[object WeakMap]",
      AW = "[object DataView]",
      bW = wW(mW),
      jW = wW(EW),
      UW = wW(NW),
      kW = wW(PW),
      sW = wW(LW),
      MW = cW;
    (mW && MW(new mW(new ArrayBuffer(1))) != AW || EW && MW(new EW) != tW || NW && MW(NW.resolve()) != ZW || PW && MW(new PW) != xW || LW && MW(new LW) != lW) && (MW = function(WW) {
      var iW = cW(WW),
        OW = "[object Object]" == iW ? WW.constructor : void 0,
        mW = OW ? wW(OW) : "";
      if (mW) switch (mW) {
        case bW:
          return AW;
        case jW:
          return tW;
        case UW:
          return ZW;
        case kW:
          return xW;
        case sW:
          return lW
      }
      return iW
    }), WW.exports = MW
  },
  6247: WW => {
    WW.exports = function(WW, iW) {
      return null == WW ? void 0 : WW[iW]
    }
  },
  6801: (WW, iW, OW) => {
    var mW = OW(6140),
      EW = OW(6503),
      NW = OW(6118),
      PW = OW(6472),
      LW = OW(6464),
      cW = OW(6377);
    WW.exports = function(WW, iW, OW) {
      for (var wW = -1, tW = (iW = mW(iW, WW)).length, ZW = !1; ++wW < tW;) {
        var xW = cW(iW[wW]);
        if (!(ZW = null != WW && OW(WW, xW))) break;
        WW = WW[xW]
      }
      return ZW || ++wW != tW ? ZW : !!(tW = null == WW ? 0 : WW.length) && LW(tW) && PW(xW, tW) && (NW(WW) || EW(WW))
    }
  },
  7031: WW => {
    var iW = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    WW.exports = function(WW) {
      return iW.test(WW)
    }
  },
  6198: (WW, iW, OW) => {
    var mW = OW(6204);
    WW.exports = function() {
      this.__data__ = mW ? mW(null) : {}, this.size = 0
    }
  },
  6255: WW => {
    WW.exports = function(WW) {
      var iW = this.has(WW) && delete this.__data__[WW];
      return this.size -= iW ? 1 : 0, iW
    }
  },
  6257: (WW, iW, OW) => {
    var mW = OW(6204),
      EW = Object.prototype.hasOwnProperty;
    WW.exports = function(WW) {
      var iW = this.__data__;
      if (mW) {
        var OW = iW[WW];
        return "__lodash_hash_undefined__" === OW ? void 0 : OW
      }
      return EW.call(iW, WW) ? iW[WW] : void 0
    }
  },
  6264: (WW, iW, OW) => {
    var mW = OW(6204),
      EW = Object.prototype.hasOwnProperty;
    WW.exports = function(WW) {
      var iW = this.__data__;
      return mW ? void 0 !== iW[WW] : EW.call(iW, WW)
    }
  },
  6269: (WW, iW, OW) => {
    var mW = OW(6204);
    WW.exports = function(WW, iW) {
      var OW = this.__data__;
      return this.size += this.has(WW) ? 0 : 1, OW[WW] = mW && void 0 === iW ? "__lodash_hash_undefined__" : iW, this
    }
  },
  6500: (WW, iW, OW) => {
    var mW = OW(6081),
      EW = OW(6503),
      NW = OW(6118),
      PW = mW ? mW.isConcatSpreadable : void 0;
    WW.exports = function(WW) {
      return NW(WW) || EW(WW) || !!(PW && WW && WW[PW])
    }
  },
  6472: WW => {
    var iW = /^(?:0|[1-9]\d*)$/;
    WW.exports = function(WW, OW) {
      var mW = typeof WW;
      return !!(OW = null == OW ? 9007199254740991 : OW) && ("number" == mW || "symbol" != mW && iW.test(WW)) && WW > -1 && WW % 1 == 0 && WW < OW
    }
  },
  6452: (WW, iW, OW) => {
    var mW = OW(6298),
      EW = OW(6460),
      NW = OW(6472),
      PW = OW(6034);
    WW.exports = function(WW, iW, OW) {
      if (!PW(OW)) return !1;
      var LW = typeof iW;
      return !!("number" == LW ? EW(OW) && NW(iW, OW.length) : "string" == LW && iW in OW) && mW(OW[iW], WW)
    }
  },
  6149: (WW, iW, OW) => {
    var mW = OW(6118),
      EW = OW(6071),
      NW = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      PW = /^\w*$/;
    WW.exports = function(WW, iW) {
      if (mW(WW)) return !1;
      var OW = typeof WW;
      return !("number" != OW && "symbol" != OW && "boolean" != OW && null != WW && !EW(WW)) || (PW.test(WW) || !NW.test(WW) || null != iW && WW in Object(iW))
    }
  },
  6340: WW => {
    WW.exports = function(WW) {
      var iW = typeof WW;
      return "string" == iW || "number" == iW || "symbol" == iW || "boolean" == iW ? "__proto__" !== WW : null === WW
    }
  },
  6229: (WW, iW, OW) => {
    var mW = OW(6237),
      EW = function() {
        var WW = /[^.]+$/.exec(mW && mW.keys && mW.keys.IE_PROTO || "");
        return WW ? "Symbol(src)_1." + WW : ""
      }();
    WW.exports = function(WW) {
      return !!EW && EW in WW
    }
  },
  6732: WW => {
    var iW = Object.prototype;
    WW.exports = function(WW) {
      var OW = WW && WW.constructor;
      return WW === ("function" == typeof OW && OW.prototype || iW)
    }
  },
  6782: (WW, iW, OW) => {
    var mW = OW(6034);
    WW.exports = function(WW) {
      return WW === WW && !mW(WW)
    }
  },
  6280: WW => {
    WW.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  6284: (WW, iW, OW) => {
    var mW = OW(6289),
      EW = Array.prototype.splice;
    WW.exports = function(WW) {
      var iW = this.__data__,
        OW = mW(iW, WW);
      return !(OW < 0) && (OW == iW.length - 1 ? iW.pop() : EW.call(iW, OW, 1), --this.size, !0)
    }
  },
  6303: (WW, iW, OW) => {
    var mW = OW(6289);
    WW.exports = function(WW) {
      var iW = this.__data__,
        OW = mW(iW, WW);
      return OW < 0 ? void 0 : iW[OW][1]
    }
  },
  6310: (WW, iW, OW) => {
    var mW = OW(6289);
    WW.exports = function(WW) {
      return mW(this.__data__, WW) > -1
    }
  },
  6319: (WW, iW, OW) => {
    var mW = OW(6289);
    WW.exports = function(WW, iW) {
      var OW = this.__data__,
        EW = mW(OW, WW);
      return EW < 0 ? (++this.size, OW.push([WW, iW])) : OW[EW][1] = iW, this
    }
  },
  6184: (WW, iW, OW) => {
    var mW = OW(6192),
      EW = OW(6278),
      NW = OW(6324);
    WW.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new mW,
        map: new(NW || EW),
        string: new mW
      }
    }
  },
  6328: (WW, iW, OW) => {
    var mW = OW(6335);
    WW.exports = function(WW) {
      var iW = mW(this, WW).delete(WW);
      return this.size -= iW ? 1 : 0, iW
    }
  },
  6345: (WW, iW, OW) => {
    var mW = OW(6335);
    WW.exports = function(WW) {
      return mW(this, WW).get(WW)
    }
  },
  6352: (WW, iW, OW) => {
    var mW = OW(6335);
    WW.exports = function(WW) {
      return mW(this, WW).has(WW)
    }
  },
  6355: (WW, iW, OW) => {
    var mW = OW(6335);
    WW.exports = function(WW, iW) {
      var OW = mW(this, WW),
        EW = OW.size;
      return OW.set(WW, iW), this.size += OW.size == EW ? 0 : 1, this
    }
  },
  6633: WW => {
    WW.exports = function(WW) {
      var iW = -1,
        OW = Array(WW.size);
      return WW.forEach((function(WW, mW) {
        OW[++iW] = [mW, WW]
      })), OW
    }
  },
  6784: WW => {
    WW.exports = function(WW, iW) {
      return function(OW) {
        return null != OW && (OW[WW] === iW && (void 0 !== iW || WW in Object(OW)))
      }
    }
  },
  6163: (WW, iW, OW) => {
    var mW = OW(6171);
    WW.exports = function(WW) {
      var iW = mW(WW, (function(WW) {
          return 500 === OW.size && OW.clear(), WW
        })),
        OW = iW.cache;
      return iW
    }
  },
  6204: (WW, iW, OW) => {
    var mW = OW(6211)(Object, "create");
    WW.exports = mW
  },
  6739: (WW, iW, OW) => {
    var mW = OW(6747)(Object.keys, Object);
    WW.exports = mW
  },
  6719: (WW, iW, OW) => {
    WW = OW.nmd(WW);
    var mW = OW(6052),
      EW = iW && !iW.nodeType && iW,
      NW = EW && WW && !WW.nodeType && WW,
      PW = NW && NW.exports === EW && mW.process,
      LW = function() {
        try {
          var WW = NW && NW.require && NW.require("util").types;
          return WW || PW && PW.binding && PW.binding("util")
        } catch (iW) {}
      }();
    WW.exports = LW
  },
  6094: WW => {
    var iW = Object.prototype.toString;
    WW.exports = function(WW) {
      return iW.call(WW)
    }
  },
  6747: WW => {
    WW.exports = function(WW, iW) {
      return function(OW) {
        return WW(iW(OW))
      }
    }
  },
  6876: (WW, iW, OW) => {
    var mW = OW(6878),
      EW = Math.max;
    WW.exports = function(WW, iW, OW) {
      return iW = EW(void 0 === iW ? WW.length - 1 : iW, 0),
        function() {
          for (var NW = arguments, PW = -1, LW = EW(NW.length - iW, 0), cW = Array(LW); ++PW < LW;) cW[PW] = NW[iW + PW];
          PW = -1;
          for (var wW = Array(iW + 1); ++PW < iW;) wW[PW] = NW[PW];
          return wW[iW] = OW(cW), mW(WW, this, wW)
        }
    }
  },
  6045: (WW, iW, OW) => {
    var mW = OW(6052),
      EW = "object" == typeof self && self && self.Object === Object && self,
      NW = mW || EW || Function("return this")();
    WW.exports = NW
  },
  6599: WW => {
    WW.exports = function(WW) {
      return this.__data__.set(WW, "__lodash_hash_undefined__"), this
    }
  },
  6607: WW => {
    WW.exports = function(WW) {
      return this.__data__.has(WW)
    }
  },
  6639: WW => {
    WW.exports = function(WW) {
      var iW = -1,
        OW = Array(WW.size);
      return WW.forEach((function(WW) {
        OW[++iW] = WW
      })), OW
    }
  },
  6887: (WW, iW, OW) => {
    var mW = OW(6891),
      EW = OW(6911)(mW);
    WW.exports = EW
  },
  6911: WW => {
    var iW = Date.now;
    WW.exports = function(WW) {
      var OW = 0,
        mW = 0;
      return function() {
        var EW = iW(),
          NW = 16 - (EW - mW);
        if (mW = EW, NW > 0) {
          if (++OW >= 800) return arguments[0]
        } else OW = 0;
        return WW.apply(void 0, arguments)
      }
    }
  },
  6537: (WW, iW, OW) => {
    var mW = OW(6278);
    WW.exports = function() {
      this.__data__ = new mW, this.size = 0
    }
  },
  6546: WW => {
    WW.exports = function(WW) {
      var iW = this.__data__,
        OW = iW.delete(WW);
      return this.size = iW.size, OW
    }
  },
  6555: WW => {
    WW.exports = function(WW) {
      return this.__data__.get(WW)
    }
  },
  6557: WW => {
    WW.exports = function(WW) {
      return this.__data__.has(WW)
    }
  },
  6564: (WW, iW, OW) => {
    var mW = OW(6278),
      EW = OW(6324),
      NW = OW(6180);
    WW.exports = function(WW, iW) {
      var OW = this.__data__;
      if (OW instanceof mW) {
        var PW = OW.__data__;
        if (!EW || PW.length < 199) return PW.push([WW, iW]), this.size = ++OW.size, this;
        OW = this.__data__ = new NW(PW)
      }
      return OW.set(WW, iW), this.size = OW.size, this
    }
  },
  6974: WW => {
    WW.exports = function(WW, iW, OW) {
      for (var mW = OW - 1, EW = WW.length; ++mW < EW;)
        if (WW[mW] === iW) return mW;
      return -1
    }
  },
  7040: (WW, iW, OW) => {
    var mW = OW(7047),
      EW = OW(7031),
      NW = OW(7055);
    WW.exports = function(WW) {
      return EW(WW) ? NW(WW) : mW(WW)
    }
  },
  6157: (WW, iW, OW) => {
    var mW = OW(6163),
      EW = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      NW = /\\(\\)?/g,
      PW = mW((function(WW) {
        var iW = [];
        return 46 === WW.charCodeAt(0) && iW.push(""), WW.replace(EW, (function(WW, OW, mW, EW) {
          iW.push(mW ? EW.replace(NW, "$1") : OW || WW)
        })), iW
      }));
    WW.exports = PW
  },
  6377: (WW, iW, OW) => {
    var mW = OW(6071);
    WW.exports = function(WW) {
      if ("string" == typeof WW || mW(WW)) return WW;
      var iW = WW + "";
      return "0" == iW && 1 / WW == -1 / 0 ? "-0" : iW
    }
  },
  6243: WW => {
    var iW = Function.prototype.toString;
    WW.exports = function(WW) {
      if (null != WW) {
        try {
          return iW.call(WW)
        } catch (OW) {}
        try {
          return WW + ""
        } catch (OW) {}
      }
      return ""
    }
  },
  6065: WW => {
    var iW = /\s/;
    WW.exports = function(WW) {
      for (var OW = WW.length; OW-- && iW.test(WW.charAt(OW)););
      return OW
    }
  },
  7055: WW => {
    var iW = "\\ud800-\\udfff",
      OW = "[" + iW + "]",
      mW = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      EW = "\\ud83c[\\udffb-\\udfff]",
      NW = "[^" + iW + "]",
      PW = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      LW = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      cW = "(?:" + mW + "|" + EW + ")" + "?",
      wW = "[\\ufe0e\\ufe0f]?",
      tW = wW + cW + ("(?:\\u200d(?:" + [NW, PW, LW].join("|") + ")" + wW + cW + ")*"),
      ZW = "(?:" + [NW + mW + "?", mW, PW, LW, OW].join("|") + ")",
      xW = RegExp(EW + "(?=" + EW + ")|" + ZW + tW, "g");
    WW.exports = function(WW) {
      return WW.match(xW) || []
    }
  },
  6897: WW => {
    WW.exports = function(WW) {
      return function() {
        return WW
      }
    }
  },
  6028: (WW, iW, OW) => {
    var mW = OW(6034),
      EW = OW(6037),
      NW = OW(6059),
      PW = Math.max,
      LW = Math.min;
    WW.exports = function(WW, iW, OW) {
      var cW, wW, tW, ZW, xW, lW, AW = 0,
        bW = !1,
        jW = !1,
        UW = !0;
      if ("function" != typeof WW) throw new TypeError("Expected a function");

      function kW(iW) {
        var OW = cW,
          mW = wW;
        return cW = wW = void 0, AW = iW, ZW = WW.apply(mW, OW)
      }

      function sW(WW) {
        var OW = WW - lW;
        return void 0 === lW || OW >= iW || OW < 0 || jW && WW - AW >= tW
      }

      function MW() {
        var WW = EW();
        if (sW(WW)) return KW(WW);
        xW = setTimeout(MW, function(WW) {
          var OW = iW - (WW - lW);
          return jW ? LW(OW, tW - (WW - AW)) : OW
        }(WW))
      }

      function KW(WW) {
        return xW = void 0, UW && cW ? kW(WW) : (cW = wW = void 0, ZW)
      }

      function SW() {
        var WW = EW(),
          OW = sW(WW);
        if (cW = arguments, wW = this, lW = WW, OW) {
          if (void 0 === xW) return function(WW) {
            return AW = WW, xW = setTimeout(MW, iW), bW ? kW(WW) : ZW
          }(lW);
          if (jW) return clearTimeout(xW), xW = setTimeout(MW, iW), kW(lW)
        }
        return void 0 === xW && (xW = setTimeout(MW, iW)), ZW
      }
      return iW = NW(iW) || 0, mW(OW) && (bW = !!OW.leading, tW = (jW = "maxWait" in OW) ? PW(NW(OW.maxWait) || 0, iW) : tW, UW = "trailing" in OW ? !!OW.trailing : UW), SW.cancel = function() {
        void 0 !== xW && clearTimeout(xW), AW = 0, cW = lW = wW = xW = void 0
      }, SW.flush = function() {
        return void 0 === xW ? ZW : KW(EW())
      }, SW
    }
  },
  6298: WW => {
    WW.exports = function(WW, iW) {
      return WW === iW || WW !== WW && iW !== iW
    }
  },
  7236: (WW, iW, OW) => {
    var mW = OW(7239),
      EW = OW(7248),
      NW = OW(6516),
      PW = OW(6118),
      LW = OW(6452);
    WW.exports = function(WW, iW, OW) {
      var cW = PW(WW) ? mW : EW;
      return OW && LW(WW, iW, OW) && (iW = void 0), cW(WW, NW(iW, 3))
    }
  },
  7323: (WW, iW, OW) => {
    var mW = OW(7331)(OW(7336));
    WW.exports = mW
  },
  7336: (WW, iW, OW) => {
    var mW = OW(6965),
      EW = OW(6516),
      NW = OW(7343),
      PW = Math.max;
    WW.exports = function(WW, iW, OW) {
      var LW = null == WW ? 0 : WW.length;
      if (!LW) return -1;
      var cW = null == OW ? 0 : NW(OW);
      return cW < 0 && (cW = PW(LW + cW, 0)), mW(WW, EW(iW, 3), cW)
    }
  },
  7162: (WW, iW, OW) => {
    var mW = OW(6485),
      EW = OW(7168);
    WW.exports = function(WW, iW) {
      return mW(EW(WW, iW), 1)
    }
  },
  6135: (WW, iW, OW) => {
    var mW = OW(6138);
    WW.exports = function(WW, iW, OW) {
      var EW = null == WW ? void 0 : mW(WW, iW);
      return void 0 === EW ? OW : EW
    }
  },
  6793: (WW, iW, OW) => {
    var mW = OW(6796),
      EW = OW(6801);
    WW.exports = function(WW, iW) {
      return null != WW && EW(WW, iW, mW)
    }
  },
  6805: WW => {
    WW.exports = function(WW) {
      return WW
    }
  },
  6503: (WW, iW, OW) => {
    var mW = OW(6508),
      EW = OW(6103),
      NW = Object.prototype,
      PW = NW.hasOwnProperty,
      LW = NW.propertyIsEnumerable,
      cW = mW(function() {
        return arguments
      }()) ? mW : function(WW) {
        return EW(WW) && PW.call(WW, "callee") && !LW.call(WW, "callee")
      };
    WW.exports = cW
  },
  6118: WW => {
    var iW = Array.isArray;
    WW.exports = iW
  },
  6460: (WW, iW, OW) => {
    var mW = OW(6223),
      EW = OW(6464);
    WW.exports = function(WW) {
      return null != WW && EW(WW.length) && !mW(WW)
    }
  },
  7293: (WW, iW, OW) => {
    var mW = OW(6073),
      EW = OW(6103);
    WW.exports = function(WW) {
      return !0 === WW || !1 === WW || EW(WW) && "[object Boolean]" == mW(WW)
    }
  },
  6693: (WW, iW, OW) => {
    WW = OW.nmd(WW);
    var mW = OW(6045),
      EW = OW(6697),
      NW = iW && !iW.nodeType && iW,
      PW = NW && WW && !WW.nodeType && WW,
      LW = PW && PW.exports === NW ? mW.OZ : void 0,
      cW = (LW ? LW.isBuffer : void 0) || EW;
    WW.exports = cW
  },
  7175: (WW, iW, OW) => {
    var mW = OW(6570);
    WW.exports = function(WW, iW) {
      return mW(WW, iW)
    }
  },
  6223: (WW, iW, OW) => {
    var mW = OW(6073),
      EW = OW(6034);
    WW.exports = function(WW) {
      if (!EW(WW)) return !1;
      var iW = mW(WW);
      return "[object Function]" == iW || "[object GeneratorFunction]" == iW || "[object AsyncFunction]" == iW || "[object Proxy]" == iW
    }
  },
  6464: WW => {
    WW.exports = function(WW) {
      return "number" == typeof WW && WW > -1 && WW % 1 == 0 && WW <= 9007199254740991
    }
  },
  6124: (WW, iW, OW) => {
    var mW = OW(6133);
    WW.exports = function(WW) {
      return mW(WW) && WW != +WW
    }
  },
  6382: WW => {
    WW.exports = function(WW) {
      return null == WW
    }
  },
  6133: (WW, iW, OW) => {
    var mW = OW(6073),
      EW = OW(6103);
    WW.exports = function(WW) {
      return "number" == typeof WW || EW(WW) && "[object Number]" == mW(WW)
    }
  },
  6034: WW => {
    WW.exports = function(WW) {
      var iW = typeof WW;
      return null != WW && ("object" == iW || "function" == iW)
    }
  },
  6103: WW => {
    WW.exports = function(WW) {
      return null != WW && "object" == typeof WW
    }
  },
  7284: (WW, iW, OW) => {
    var mW = OW(6073),
      EW = OW(7290),
      NW = OW(6103),
      PW = Function.prototype,
      LW = Object.prototype,
      cW = PW.toString,
      wW = LW.hasOwnProperty,
      tW = cW.call(Object);
    WW.exports = function(WW) {
      if (!NW(WW) || "[object Object]" != mW(WW)) return !1;
      var iW = EW(WW);
      if (null === iW) return !0;
      var OW = wW.call(iW, "constructor") && iW.constructor;
      return "function" == typeof OW && OW instanceof OW && cW.call(OW) == tW
    }
  },
  6115: (WW, iW, OW) => {
    var mW = OW(6073),
      EW = OW(6118),
      NW = OW(6103);
    WW.exports = function(WW) {
      return "string" == typeof WW || !EW(WW) && NW(WW) && "[object String]" == mW(WW)
    }
  },
  6071: (WW, iW, OW) => {
    var mW = OW(6073),
      EW = OW(6103);
    WW.exports = function(WW) {
      return "symbol" == typeof WW || EW(WW) && "[object Symbol]" == mW(WW)
    }
  },
  6701: (WW, iW, OW) => {
    var mW = OW(6707),
      EW = OW(6710),
      NW = OW(6719),
      PW = NW && NW.isTypedArray,
      LW = PW ? EW(PW) : mW;
    WW.exports = LW
  },
  6676: (WW, iW, OW) => {
    var mW = OW(6683),
      EW = OW(6727),
      NW = OW(6460);
    WW.exports = function(WW) {
      return NW(WW) ? mW(WW) : EW(WW)
    }
  },
  7271: WW => {
    WW.exports = function(WW) {
      var iW = null == WW ? 0 : WW.length;
      return iW ? WW[iW - 1] : void 0
    }
  },
  7168: (WW, iW, OW) => {
    var mW = OW(6370),
      EW = OW(6516),
      NW = OW(6823),
      PW = OW(6118);
    WW.exports = function(WW, iW) {
      return (PW(WW) ? mW : NW)(WW, EW(iW, 3))
    }
  },
  7224: (WW, iW, OW) => {
    var mW = OW(7227),
      EW = OW(6836),
      NW = OW(6516);
    WW.exports = function(WW, iW) {
      var OW = {};
      return iW = NW(iW, 3), EW(WW, (function(WW, EW, NW) {
        mW(OW, EW, iW(WW, EW, NW))
      })), OW
    }
  },
  7133: (WW, iW, OW) => {
    var mW = OW(7135),
      EW = OW(7144),
      NW = OW(6805);
    WW.exports = function(WW) {
      return WW && WW.length ? mW(WW, NW, EW) : void 0
    }
  },
  6171: (WW, iW, OW) => {
    var mW = OW(6180);

    function EW(WW, iW) {
      if ("function" != typeof WW || null != iW && "function" != typeof iW) throw new TypeError("Expected a function");
      var OW = function() {
        var mW = arguments,
          EW = iW ? iW.apply(this, mW) : mW[0],
          NW = OW.cache;
        if (NW.has(EW)) return NW.get(EW);
        var PW = WW.apply(this, mW);
        return OW.cache = NW.set(EW, PW) || NW, PW
      };
      return OW.cache = new(EW.Cache || mW), OW
    }
    EW.Cache = mW, WW.exports = EW
  },
  7149: (WW, iW, OW) => {
    var mW = OW(7135),
      EW = OW(7155),
      NW = OW(6805);
    WW.exports = function(WW) {
      return WW && WW.length ? mW(WW, NW, EW) : void 0
    }
  },
  6987: WW => {
    WW.exports = function() {}
  },
  6037: (WW, iW, OW) => {
    var mW = OW(6045);
    WW.exports = function() {
      return mW.Date.now()
    }
  },
  6811: (WW, iW, OW) => {
    var mW = OW(6814),
      EW = OW(6818),
      NW = OW(6149),
      PW = OW(6377);
    WW.exports = function(WW) {
      return NW(WW) ? mW(PW(WW)) : EW(WW)
    }
  },
  6433: (WW, iW, OW) => {
    var mW = OW(6440)();
    WW.exports = mW
  },
  7303: (WW, iW, OW) => {
    var mW = OW(6611),
      EW = OW(6516),
      NW = OW(7311),
      PW = OW(6118),
      LW = OW(6452);
    WW.exports = function(WW, iW, OW) {
      var cW = PW(WW) ? mW : NW;
      return OW && LW(WW, iW, OW) && (iW = void 0), cW(WW, EW(iW, 3))
    }
  },
  6483: (WW, iW, OW) => {
    var mW = OW(6485),
      EW = OW(6514),
      NW = OW(6873),
      PW = OW(6452),
      LW = NW((function(WW, iW) {
        if (null == WW) return [];
        var OW = iW.length;
        return OW > 1 && PW(WW, iW[0], iW[1]) ? iW = [] : OW > 2 && PW(iW[0], iW[1], iW[2]) && (iW = [iW[0]]), EW(WW, mW(iW, 1), [])
      }));
    WW.exports = LW
  },
  6669: WW => {
    WW.exports = function() {
      return []
    }
  },
  6697: WW => {
    WW.exports = function() {
      return !1
    }
  },
  6023: (WW, iW, OW) => {
    var mW = OW(6028),
      EW = OW(6034);
    WW.exports = function(WW, iW, OW) {
      var NW = !0,
        PW = !0;
      if ("function" != typeof WW) throw new TypeError("Expected a function");
      return EW(OW) && (NW = "leading" in OW ? !!OW.leading : NW, PW = "trailing" in OW ? !!OW.trailing : PW), mW(WW, iW, {
        leading: NW,
        maxWait: iW,
        trailing: PW
      })
    }
  },
  6476: (WW, iW, OW) => {
    var mW = OW(6059),
      EW = 1 / 0;
    WW.exports = function(WW) {
      return WW ? (WW = mW(WW)) === EW || WW === -1 / 0 ? 17976931348623157e292 * (WW < 0 ? -1 : 1) : WW === WW ? WW : 0 : 0 === WW ? WW : 0
    }
  },
  7343: (WW, iW, OW) => {
    var mW = OW(6476);
    WW.exports = function(WW) {
      var iW = mW(WW),
        OW = iW % 1;
      return iW === iW ? OW ? iW - OW : iW : 0
    }
  },
  6059: (WW, iW, OW) => {
    var mW = OW(6063),
      EW = OW(6034),
      NW = OW(6071),
      PW = /^[-+]0x[0-9a-f]+$/i,
      LW = /^0b[01]+$/i,
      cW = /^0o[0-7]+$/i,
      wW = parseInt;
    WW.exports = function(WW) {
      if ("number" == typeof WW) return WW;
      if (NW(WW)) return NaN;
      if (EW(WW)) {
        var iW = "function" == typeof WW.valueOf ? WW.valueOf() : WW;
        WW = EW(iW) ? iW + "" : iW
      }
      if ("string" != typeof WW) return 0 === WW ? WW : +WW;
      WW = mW(WW);
      var OW = LW.test(WW);
      return OW || cW.test(WW) ? wW(WW.slice(2), OW ? 2 : 8) : PW.test(WW) ? NaN : +WW
    }
  },
  6358: (WW, iW, OW) => {
    var mW = OW(6363);
    WW.exports = function(WW) {
      return null == WW ? "" : mW(WW)
    }
  },
  6947: (WW, iW, OW) => {
    var mW = OW(6516),
      EW = OW(6949);
    WW.exports = function(WW, iW) {
      return WW && WW.length ? EW(WW, mW(iW, 2)) : []
    }
  },
  7005: (WW, iW, OW) => {
    var mW = OW(7010)("toUpperCase");
    WW.exports = mW
  },
  7081: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => Di
    });
    var mW = OW(62),
      EW = OW(5868),
      NW = OW.n(EW);
    const {
      getOwnPropertyNames: PW,
      getOwnPropertySymbols: LW
    } = Object, {
      hasOwnProperty: cW
    } = Object.prototype;

    function wW(WW, iW) {
      return function(OW, mW, EW) {
        return WW(OW, mW, EW) && iW(OW, mW, EW)
      }
    }

    function tW(WW) {
      return function(iW, OW, mW) {
        if (!iW || !OW || "object" !== typeof iW || "object" !== typeof OW) return WW(iW, OW, mW);
        const {
          cache: EW
        } = mW, NW = EW.get(iW), PW = EW.get(OW);
        if (NW && PW) return NW === OW && PW === iW;
        EW.set(iW, OW), EW.set(OW, iW);
        const LW = WW(iW, OW, mW);
        return EW.delete(iW), EW.delete(OW), LW
      }
    }

    function ZW(WW) {
      return PW(WW).concat(LW(WW))
    }
    const xW = Object.hasOwn || ((WW, iW) => cW.call(WW, iW));

    function lW(WW, iW) {
      return WW === iW || !WW && !iW && WW !== WW && iW !== iW
    }
    const {
      getOwnPropertyDescriptor: AW,
      keys: bW
    } = Object;

    function jW(WW, iW) {
      return WW.byteLength === iW.byteLength && nW(new Uint8Array(WW), new Uint8Array(iW))
    }

    function UW(WW, iW, OW) {
      let mW = WW.length;
      if (iW.length !== mW) return !1;
      for (; mW-- > 0;)
        if (!OW.equals(WW[mW], iW[mW], mW, mW, WW, iW, OW)) return !1;
      return !0
    }

    function kW(WW, iW) {
      return WW.byteLength === iW.byteLength && nW(new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength), new Uint8Array(iW.buffer, iW.byteOffset, iW.byteLength))
    }

    function sW(WW, iW) {
      return lW(WW.getTime(), iW.getTime())
    }

    function MW(WW, iW) {
      return WW.name === iW.name && WW.message === iW.message && WW.cause === iW.cause && WW.stack === iW.stack
    }

    function KW(WW, iW) {
      return WW === iW
    }

    function SW(WW, iW, OW) {
      const mW = WW.size;
      if (mW !== iW.size) return !1;
      if (!mW) return !0;
      const EW = new Array(mW),
        NW = WW.entries();
      let PW, LW, cW = 0;
      for (;
        (PW = NW.next()) && !PW.done;) {
        const mW = iW.entries();
        let NW = !1,
          wW = 0;
        for (;
          (LW = mW.next()) && !LW.done;) {
          if (EW[wW]) {
            wW++;
            continue
          }
          const mW = PW.value,
            tW = LW.value;
          if (OW.equals(mW[0], tW[0], cW, wW, WW, iW, OW) && OW.equals(mW[1], tW[1], mW[0], tW[0], WW, iW, OW)) {
            NW = EW[wW] = !0;
            break
          }
          wW++
        }
        if (!NW) return !1;
        cW++
      }
      return !0
    }
    const YW = lW;

    function yW(WW, iW, OW) {
      const mW = bW(WW);
      let EW = mW.length;
      if (bW(iW).length !== EW) return !1;
      for (; EW-- > 0;)
        if (!oW(WW, iW, OW, mW[EW])) return !1;
      return !0
    }

    function TW(WW, iW, OW) {
      const mW = ZW(WW);
      let EW, NW, PW, LW = mW.length;
      if (ZW(iW).length !== LW) return !1;
      for (; LW-- > 0;) {
        if (EW = mW[LW], !oW(WW, iW, OW, EW)) return !1;
        if (NW = AW(WW, EW), PW = AW(iW, EW), (NW || PW) && (!NW || !PW || NW.configurable !== PW.configurable || NW.enumerable !== PW.enumerable || NW.writable !== PW.writable)) return !1
      }
      return !0
    }

    function JW(WW, iW) {
      return lW(WW.valueOf(), iW.valueOf())
    }

    function hW(WW, iW) {
      return WW.source === iW.source && WW.flags === iW.flags
    }

    function HW(WW, iW, OW) {
      const mW = WW.size;
      if (mW !== iW.size) return !1;
      if (!mW) return !0;
      const EW = new Array(mW),
        NW = WW.values();
      let PW, LW;
      for (;
        (PW = NW.next()) && !PW.done;) {
        const mW = iW.values();
        let NW = !1,
          cW = 0;
        for (;
          (LW = mW.next()) && !LW.done;) {
          if (!EW[cW] && OW.equals(PW.value, LW.value, PW.value, LW.value, WW, iW, OW)) {
            NW = EW[cW] = !0;
            break
          }
          cW++
        }
        if (!NW) return !1
      }
      return !0
    }

    function nW(WW, iW) {
      let OW = WW.byteLength;
      if (iW.byteLength !== OW || WW.byteOffset !== iW.byteOffset) return !1;
      for (; OW-- > 0;)
        if (WW[OW] !== iW[OW]) return !1;
      return !0
    }

    function uW(WW, iW) {
      return WW.hostname === iW.hostname && WW.pathname === iW.pathname && WW.protocol === iW.protocol && WW.port === iW.port && WW.hash === iW.hash && WW.username === iW.username && WW.password === iW.password
    }

    function oW(WW, iW, OW, mW) {
      return !("_owner" !== mW && "__o" !== mW && "__v" !== mW || !WW.$$typeof && !iW.$$typeof) || xW(iW, mW) && OW.equals(WW[mW], iW[mW], mW, mW, WW, iW, OW)
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
      eW = Object.prototype.toString;

    function vW(WW) {
      let {
        areArrayBuffersEqual: iW,
        areArraysEqual: OW,
        areDataViewsEqual: mW,
        areDatesEqual: EW,
        areErrorsEqual: NW,
        areFunctionsEqual: PW,
        areMapsEqual: LW,
        areNumbersEqual: cW,
        areObjectsEqual: wW,
        arePrimitiveWrappersEqual: tW,
        areRegExpsEqual: ZW,
        areSetsEqual: xW,
        areTypedArraysEqual: lW,
        areUrlsEqual: AW,
        unknownTagComparators: bW
      } = WW;
      return function(WW, jW, UW) {
        if (WW === jW) return !0;
        if (null == WW || null == jW) return !1;
        const kW = typeof WW;
        if (kW !== typeof jW) return !1;
        if ("object" !== kW) return "number" === kW ? cW(WW, jW, UW) : "function" === kW && PW(WW, jW, UW);
        const sW = WW.constructor;
        if (sW !== jW.constructor) return !1;
        if (sW === Object) return wW(WW, jW, UW);
        if (Array.isArray(WW)) return OW(WW, jW, UW);
        if (sW === Date) return EW(WW, jW, UW);
        if (sW === RegExp) return ZW(WW, jW, UW);
        if (sW === Map) return LW(WW, jW, UW);
        if (sW === Set) return xW(WW, jW, UW);
        const MW = eW.call(WW);
        if ("[object Date]" === MW) return EW(WW, jW, UW);
        if ("[object RegExp]" === MW) return ZW(WW, jW, UW);
        if ("[object Map]" === MW) return LW(WW, jW, UW);
        if ("[object Set]" === MW) return xW(WW, jW, UW);
        if ("[object Object]" === MW) return "function" !== typeof WW.then && "function" !== typeof jW.then && wW(WW, jW, UW);
        if ("[object URL]" === MW) return AW(WW, jW, UW);
        if ("[object Error]" === MW) return NW(WW, jW, UW);
        if ("[object Arguments]" === MW) return wW(WW, jW, UW);
        if (dW[MW]) return lW(WW, jW, UW);
        if ("[object ArrayBuffer]" === MW) return iW(WW, jW, UW);
        if ("[object DataView]" === MW) return mW(WW, jW, UW);
        if ("[object Boolean]" === MW || "[object Number]" === MW || "[object String]" === MW) return tW(WW, jW, UW);
        if (bW) {
          let iW = bW[MW];
          if (!iW) {
            const OW = null != (KW = WW) ? KW[Symbol.toStringTag] : void 0;
            OW && (iW = bW[OW])
          }
          if (iW) return iW(WW, jW, UW)
        }
        var KW;
        return !1
      }
    }
    const gW = DW();
    DW({
      strict: !0
    }), DW({
      circular: !0
    }), DW({
      circular: !0,
      strict: !0
    }), DW({
      createInternalComparator: () => lW
    }), DW({
      strict: !0,
      createInternalComparator: () => lW
    }), DW({
      circular: !0,
      createInternalComparator: () => lW
    }), DW({
      circular: !0,
      createInternalComparator: () => lW,
      strict: !0
    });

    function DW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: iW = !1,
        createInternalComparator: OW,
        createState: mW,
        strict: EW = !1
      } = WW, NW = function(WW) {
        let {
          circular: iW,
          createCustomConfig: OW,
          strict: mW
        } = WW, EW = {
          areArrayBuffersEqual: jW,
          areArraysEqual: mW ? TW : UW,
          areDataViewsEqual: kW,
          areDatesEqual: sW,
          areErrorsEqual: MW,
          areFunctionsEqual: KW,
          areMapsEqual: mW ? wW(SW, TW) : SW,
          areNumbersEqual: YW,
          areObjectsEqual: mW ? TW : yW,
          arePrimitiveWrappersEqual: JW,
          areRegExpsEqual: hW,
          areSetsEqual: mW ? wW(HW, TW) : HW,
          areTypedArraysEqual: mW ? wW(nW, TW) : nW,
          areUrlsEqual: uW,
          unknownTagComparators: void 0
        };
        if (OW && (EW = Object.assign({}, EW, OW(EW))), iW) {
          const WW = tW(EW.areArraysEqual),
            iW = tW(EW.areMapsEqual),
            OW = tW(EW.areObjectsEqual),
            mW = tW(EW.areSetsEqual);
          EW = Object.assign({}, EW, {
            areArraysEqual: WW,
            areMapsEqual: iW,
            areObjectsEqual: OW,
            areSetsEqual: mW
          })
        }
        return EW
      }(WW), PW = vW(NW);
      var LW;
      return function(WW) {
        let {
          circular: iW,
          comparator: OW,
          createState: mW,
          equals: EW,
          strict: NW
        } = WW;
        if (mW) return function(WW, PW) {
          const {
            cache: LW = (iW ? new WeakMap : void 0),
            meta: cW
          } = mW();
          return OW(WW, PW, {
            cache: LW,
            equals: EW,
            meta: cW,
            strict: NW
          })
        };
        if (iW) return function(WW, iW) {
          return OW(WW, iW, {
            cache: new WeakMap,
            equals: EW,
            meta: void 0,
            strict: NW
          })
        };
        const PW = {
          cache: void 0,
          equals: EW,
          meta: void 0,
          strict: NW
        };
        return function(WW, iW) {
          return OW(WW, iW, PW)
        }
      }({
        circular: iW,
        comparator: PW,
        createState: mW,
        equals: OW ? OW(PW) : (LW = PW, function(WW, iW, OW, mW, EW, NW, PW) {
          return LW(WW, iW, PW)
        }),
        strict: EW
      })
    }

    function VW(WW) {
      var iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        OW = -1;
      requestAnimationFrame((function mW(EW) {
        OW < 0 && (OW = EW), EW - OW > iW ? (WW(EW), OW = -1) : function(WW) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(WW)
        }(mW)
      }))
    }

    function pW(WW) {
      return pW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, pW(WW)
    }

    function fW(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return CW(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return CW(WW, iW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function CW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function XW() {
      var WW = function() {
          return null
        },
        iW = !1,
        OW = function OW(mW) {
          if (!iW) {
            if (Array.isArray(mW)) {
              if (!mW.length) return;
              var EW = fW(mW),
                NW = EW[0],
                PW = EW.slice(1);
              return "number" === typeof NW ? void VW(OW.bind(null, PW), NW) : (OW(NW), void VW(OW.bind(null, PW)))
            }
            "object" === pW(mW) && WW(mW), "function" === typeof mW && mW()
          }
        };
      return {
        stop: function() {
          iW = !0
        },
        start: function(WW) {
          iW = !1, OW(WW)
        },
        subscribe: function(iW) {
          return WW = iW,
            function() {
              WW = function() {
                return null
              }
            }
        }
      }
    }

    function BW(WW) {
      return BW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, BW(WW)
    }

    function qW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function RW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? qW(Object(OW), !0).forEach((function(iW) {
          GW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : qW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function GW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" !== BW(WW) || null === WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" !== BW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" === BW(iW) ? iW : String(iW)
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }
    var IW = function(WW) {
        return WW
      },
      aW = function(WW, iW) {
        return Object.keys(iW).reduce((function(OW, mW) {
          return RW(RW({}, OW), {}, GW({}, mW, WW(mW, iW[mW])))
        }), {})
      },
      rW = function(WW, iW, OW) {
        return WW.map((function(WW) {
          return "".concat((mW = WW, mW.replace(/([A-Z])/g, (function(WW) {
            return "-".concat(WW.toLowerCase())
          }))), " ").concat(iW, "ms ").concat(OW);
          var mW
        })).join(",")
      };

    function zW(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        var OW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != OW) {
          var mW, EW, NW, PW, LW = [],
            cW = !0,
            wW = !1;
          try {
            if (NW = (OW = OW.call(WW)).next, 0 === iW) {
              if (Object(OW) !== OW) return;
              cW = !1
            } else
              for (; !(cW = (mW = NW.call(OW)).done) && (LW.push(mW.value), LW.length !== iW); cW = !0);
          } catch (WW) {
            wW = !0, EW = WW
          } finally {
            try {
              if (!cW && null != OW.return && (PW = OW.return(), Object(PW) !== PW)) return
            } finally {
              if (wW) throw EW
            }
          }
          return LW
        }
      }(WW, iW) || QW(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function FW(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return Wi(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || QW(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function QW(WW, iW) {
      if (WW) {
        if ("string" === typeof WW) return Wi(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        return "Object" === OW && WW.constructor && (OW = WW.constructor.name), "Map" === OW || "Set" === OW ? Array.from(WW) : "Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW) ? Wi(WW, iW) : void 0
      }
    }

    function Wi(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }
    var ii = 1e-4,
      Oi = function(WW, iW) {
        return [0, 3 * WW, 3 * iW - 6 * WW, 3 * WW - 3 * iW + 1]
      },
      mi = function(WW, iW) {
        return WW.map((function(WW, OW) {
          return WW * Math.pow(iW, OW)
        })).reduce((function(WW, iW) {
          return WW + iW
        }))
      },
      Ei = function(WW, iW) {
        return function(OW) {
          var mW = Oi(WW, iW);
          return mi(mW, OW)
        }
      },
      Ni = function() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        var mW = iW[0],
          EW = iW[1],
          NW = iW[2],
          PW = iW[3];
        if (1 === iW.length) switch (iW[0]) {
          case "linear":
            mW = 0, EW = 0, NW = 1, PW = 1;
            break;
          case "ease":
            mW = .25, EW = .1, NW = .25, PW = 1;
            break;
          case "ease-in":
            mW = .42, EW = 0, NW = 1, PW = 1;
            break;
          case "ease-out":
            mW = .42, EW = 0, NW = .58, PW = 1;
            break;
          case "ease-in-out":
            mW = 0, EW = 0, NW = .58, PW = 1;
            break;
          default:
            var LW = iW[0].split("(");
            if ("cubic-bezier" === LW[0] && 4 === LW[1].split(")")[0].split(",").length) {
              var cW = zW(LW[1].split(")")[0].split(",").map((function(WW) {
                return parseFloat(WW)
              })), 4);
              mW = cW[0], EW = cW[1], NW = cW[2], PW = cW[3]
            }
        } [mW, NW, EW, PW].every((function(WW) {
          return "number" === typeof WW && WW >= 0 && WW <= 1
        }));
        var wW, tW, ZW = Ei(mW, NW),
          xW = Ei(EW, PW),
          lW = (wW = mW, tW = NW, function(WW) {
            var iW = Oi(wW, tW),
              OW = [].concat(FW(iW.map((function(WW, iW) {
                return WW * iW
              })).slice(1)), [0]);
            return mi(OW, WW)
          }),
          AW = function(WW) {
            for (var iW, OW = WW > 1 ? 1 : WW, mW = OW, EW = 0; EW < 8; ++EW) {
              var NW = ZW(mW) - OW,
                PW = lW(mW);
              if (Math.abs(NW - OW) < ii || PW < ii) return xW(mW);
              mW = (iW = mW - NW / PW) > 1 ? 1 : iW < 0 ? 0 : iW
            }
            return xW(mW)
          };
        return AW.isStepper = !1, AW
      },
      Pi = function() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        var mW = iW[0];
        if ("string" === typeof mW) switch (mW) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return Ni(mW);
          case "spring":
            return function() {
              var WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                iW = WW.stiff,
                OW = void 0 === iW ? 100 : iW,
                mW = WW.damping,
                EW = void 0 === mW ? 8 : mW,
                NW = WW.dt,
                PW = void 0 === NW ? 17 : NW,
                LW = function(WW, iW, mW) {
                  var NW = mW + (-(WW - iW) * OW - mW * EW) * PW / 1e3,
                    LW = mW * PW / 1e3 + WW;
                  return Math.abs(LW - iW) < ii && Math.abs(NW) < ii ? [iW, 0] : [LW, NW]
                };
              return LW.isStepper = !0, LW.dt = PW, LW
            }();
          default:
            if ("cubic-bezier" === mW.split("(")[0]) return Ni(mW)
        }
        return "function" === typeof mW ? mW : null
      };

    function Li(WW) {
      return Li = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, Li(WW)
    }

    function ci(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return Ai(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || li(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wi(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function ti(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? wi(Object(OW), !0).forEach((function(iW) {
          Zi(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : wi(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function Zi(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" !== Li(WW) || null === WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" !== Li(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" === Li(iW) ? iW : String(iW)
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function xi(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        var OW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != OW) {
          var mW, EW, NW, PW, LW = [],
            cW = !0,
            wW = !1;
          try {
            if (NW = (OW = OW.call(WW)).next, 0 === iW) {
              if (Object(OW) !== OW) return;
              cW = !1
            } else
              for (; !(cW = (mW = NW.call(OW)).done) && (LW.push(mW.value), LW.length !== iW); cW = !0);
          } catch (WW) {
            wW = !0, EW = WW
          } finally {
            try {
              if (!cW && null != OW.return && (PW = OW.return(), Object(PW) !== PW)) return
            } finally {
              if (wW) throw EW
            }
          }
          return LW
        }
      }(WW, iW) || li(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function li(WW, iW) {
      if (WW) {
        if ("string" === typeof WW) return Ai(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        return "Object" === OW && WW.constructor && (OW = WW.constructor.name), "Map" === OW || "Set" === OW ? Array.from(WW) : "Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW) ? Ai(WW, iW) : void 0
      }
    }

    function Ai(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }
    var bi = function(WW, iW, OW) {
        return WW + (iW - WW) * OW
      },
      ji = function(WW) {
        return WW.from !== WW.to
      },
      Ui = function WW(iW, OW, mW) {
        var EW = aW((function(WW, OW) {
          if (ji(OW)) {
            var mW = xi(iW(OW.from, OW.to, OW.Sj), 2),
              EW = mW[0],
              NW = mW[1];
            return ti(ti({}, OW), {}, {
              from: EW,
              Sj: NW
            })
          }
          return OW
        }), OW);
        return mW < 1 ? aW((function(WW, iW) {
          return ji(iW) ? ti(ti({}, iW), {}, {
            Sj: bi(iW.Sj, EW[WW].Sj, mW),
            from: bi(iW.from, EW[WW].from, mW)
          }) : iW
        }), OW) : WW(iW, EW, mW - 1)
      };
    const ki = function(WW, iW, OW, mW, EW) {
      var NW, PW, LW, cW, wW = (NW = WW, PW = iW, [Object.keys(NW), Object.keys(PW)].reduce((function(WW, iW) {
          return WW.filter((function(WW) {
            return iW.includes(WW)
          }))
        }))),
        tW = wW.reduce((function(OW, mW) {
          return ti(ti({}, OW), {}, Zi({}, mW, [WW[mW], iW[mW]]))
        }), {}),
        ZW = wW.reduce((function(OW, mW) {
          return ti(ti({}, OW), {}, Zi({}, mW, {
            from: WW[mW],
            Sj: 0,
            to: iW[mW]
          }))
        }), {}),
        xW = -1,
        lW = function() {
          return null
        };
      return lW = OW.isStepper ? function(mW) {
          LW || (LW = mW);
          var NW = (mW - LW) / OW.dt;
          ZW = Ui(OW, ZW, NW), EW(ti(ti(ti({}, WW), iW), aW((function(WW, iW) {
            return iW.from
          }), ZW))), LW = mW, Object.values(ZW).filter(ji).length && (xW = requestAnimationFrame(lW))
        } : function(NW) {
          cW || (cW = NW);
          var PW = (NW - cW) / mW,
            LW = aW((function(WW, iW) {
              return bi.apply(void 0, ci(iW).concat([OW(PW)]))
            }), tW);
          if (EW(ti(ti(ti({}, WW), iW), LW)), PW < 1) xW = requestAnimationFrame(lW);
          else {
            var wW = aW((function(WW, iW) {
              return bi.apply(void 0, ci(iW).concat([OW(1)]))
            }), tW);
            EW(ti(ti(ti({}, WW), iW), wW))
          }
        },
        function() {
          return requestAnimationFrame(lW),
            function() {
              cancelAnimationFrame(xW)
            }
        }
    };

    function si(WW) {
      return si = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, si(WW)
    }
    var Mi = ["children", "kZ", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function Ki(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW, mW, EW = {},
          NW = Object.keys(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || (EW[OW] = WW[OW]);
        return EW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function Si(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return Yi(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return Yi(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return Yi(WW, iW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Yi(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function yi(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function Ti(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? yi(Object(OW), !0).forEach((function(iW) {
          Ji(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : yi(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function Ji(WW, iW, OW) {
      return (iW = ni(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function Hi(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, ni(mW.key), mW)
      }
    }

    function ni(WW) {
      var iW = function(WW, iW) {
        if ("object" !== si(WW) || null === WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" !== si(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" === si(iW) ? iW : String(iW)
    }

    function ui(WW, iW) {
      return ui = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, ui(WW, iW)
    }

    function oi(WW) {
      var iW = function() {
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
        var OW, mW = vi(WW);
        if (iW) {
          var EW = vi(this).constructor;
          OW = Reflect.construct(mW, arguments, EW)
        } else OW = mW.apply(this, arguments);
        return di(this, OW)
      }
    }

    function di(WW, iW) {
      if (iW && ("object" === si(iW) || "function" === typeof iW)) return iW;
      if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
      return ei(WW)
    }

    function ei(WW) {
      if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return WW
    }

    function vi(WW) {
      return vi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, vi(WW)
    }
    var gi = function(WW) {
      ! function(WW, iW) {
        if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(iW && iW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), iW && ui(WW, iW)
      }(PW, WW);
      var iW, OW, EW, NW = oi(PW);

      function PW(WW, iW) {
        var OW;
        ! function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, PW);
        var mW = (OW = NW.call(this, WW, iW)).props,
          EW = mW.isActive,
          LW = mW.attributeName,
          cW = mW.from,
          wW = mW.to,
          tW = mW.steps,
          ZW = mW.children,
          xW = mW.duration;
        if (OW.handleStyleChange = OW.handleStyleChange.bind(ei(OW)), OW.changeStyle = OW.changeStyle.bind(ei(OW)), !EW || xW <= 0) return OW.state = {
          style: {}
        }, "function" === typeof ZW && (OW.state = {
          style: wW
        }), di(OW);
        if (tW && tW.length) OW.state = {
          style: tW[0].style
        };
        else if (cW) {
          if ("function" === typeof ZW) return OW.state = {
            style: cW
          }, di(OW);
          OW.state = {
            style: LW ? Ji({}, LW, cW) : cW
          }
        } else OW.state = {
          style: {}
        };
        return OW
      }
      return iW = PW, (OW = [{
        key: "componentDidMount",
        value: function() {
          var WW = this.props,
            iW = WW.isActive,
            OW = WW.canBegin;
          this.mounted = !0, iW && OW && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(WW) {
          var iW = this.props,
            OW = iW.isActive,
            mW = iW.canBegin,
            EW = iW.attributeName,
            NW = iW.shouldReAnimate,
            PW = iW.to,
            LW = iW.from,
            cW = this.state.style;
          if (mW)
            if (OW) {
              if (!(gW(WW.to, PW) && WW.canBegin && WW.isActive)) {
                var wW = !WW.canBegin || !WW.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var tW = wW || NW ? LW : WW.to;
                if (this.state && cW) {
                  var ZW = {
                    style: EW ? Ji({}, EW, tW) : tW
                  };
                  (EW && cW[EW] !== tW || !EW && cW !== tW) && this.setState(ZW)
                }
                this.runAnimation(Ti(Ti({}, this.props), {}, {
                  from: tW,
                  kZ: 0
                }))
              }
            } else {
              var xW = {
                style: EW ? Ji({}, EW, PW) : PW
              };
              this.state && cW && (EW && cW[EW] !== PW || !EW && cW !== PW) && this.setState(xW)
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
          var iW = this,
            OW = WW.from,
            mW = WW.to,
            EW = WW.duration,
            NW = WW.easing,
            PW = WW.kZ,
            LW = WW.onAnimationEnd,
            cW = WW.onAnimationStart,
            wW = ki(OW, mW, Pi(NW), EW, this.changeStyle);
          this.manager.start([cW, PW, function() {
            iW.stopJSAnimation = wW()
          }, EW, LW])
        }
      }, {
        key: "runStepAnimation",
        value: function(WW) {
          var iW = this,
            OW = WW.steps,
            mW = WW.kZ,
            EW = WW.onAnimationStart,
            NW = OW[0],
            PW = NW.style,
            LW = NW.duration,
            cW = void 0 === LW ? 0 : LW;
          return this.manager.start([EW].concat(Si(OW.reduce((function(WW, mW, EW) {
            if (0 === EW) return WW;
            var NW = mW.duration,
              PW = mW.easing,
              LW = void 0 === PW ? "ease" : PW,
              cW = mW.style,
              wW = mW.properties,
              tW = mW.onAnimationEnd,
              ZW = EW > 0 ? OW[EW - 1] : mW,
              xW = wW || Object.keys(cW);
            if ("function" === typeof LW || "spring" === LW) return [].concat(Si(WW), [iW.runJSAnimation.bind(iW, {
              from: ZW.style,
              to: cW,
              duration: NW,
              easing: LW
            }), NW]);
            var lW = rW(xW, NW, LW),
              AW = Ti(Ti(Ti({}, ZW.style), cW), {}, {
                transition: lW
              });
            return [].concat(Si(WW), [AW, NW, tW]).filter(IW)
          }), [PW, Math.max(cW, mW)])), [WW.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(WW) {
          this.manager || (this.manager = XW());
          var iW = WW.kZ,
            OW = WW.duration,
            mW = WW.attributeName,
            EW = WW.to,
            NW = WW.easing,
            PW = WW.onAnimationStart,
            LW = WW.onAnimationEnd,
            cW = WW.steps,
            wW = WW.children,
            tW = this.manager;
          if (this.unSubscribe = tW.subscribe(this.handleStyleChange), "function" !== typeof NW && "function" !== typeof wW && "spring" !== NW)
            if (cW.length > 1) this.runStepAnimation(WW);
            else {
              var ZW = mW ? Ji({}, mW, EW) : EW,
                xW = rW(Object.keys(ZW), OW, NW);
              tW.start([PW, iW, Ti(Ti({}, ZW), {}, {
                transition: xW
              }), OW, LW])
            }
          else this.runJSAnimation(WW)
        }
      }, {
        key: "render",
        value: function() {
          var WW = this.props,
            iW = WW.children,
            OW = (WW.kZ, WW.duration),
            EW = (WW.attributeName, WW.easing, WW.isActive),
            NW = (WW.steps, WW.from, WW.to, WW.canBegin, WW.onAnimationEnd, WW.shouldReAnimate, WW.onAnimationReStart, Ki(WW, Mi)),
            PW = mW.Children.count(iW),
            LW = this.state.style;
          if ("function" === typeof iW) return iW(LW);
          if (!EW || 0 === PW || OW <= 0) return iW;
          var cW = function(WW) {
            var iW = WW.props,
              OW = iW.style,
              EW = void 0 === OW ? {} : OW,
              PW = iW.className;
            return (0, mW.cloneElement)(WW, Ti(Ti({}, NW), {}, {
              style: Ti(Ti({}, EW), LW),
              className: PW
            }))
          };
          return 1 === PW ? cW(mW.Children.only(iW)) : mW.createElement("div", null, mW.Children.map(iW, (function(WW) {
            return cW(WW)
          })))
        }
      }]) && Hi(iW.prototype, OW), EW && Hi(iW, EW), Object.defineProperty(iW, "prototype", {
        writable: !1
      }), PW
    }(mW.PureComponent);
    gi.displayName = "Animate", gi.defaultProps = {
      kZ: 0,
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
    }, gi.propTypes = {
      from: NW().oneOfType([NW().object, NW().string]),
      to: NW().oneOfType([NW().object, NW().string]),
      attributeName: NW().string,
      duration: NW().number,
      kZ: NW().number,
      easing: NW().oneOfType([NW().string, NW().func]),
      steps: NW().arrayOf(NW().shape({
        duration: NW().number.isRequired,
        style: NW().object.isRequired,
        easing: NW().oneOfType([NW().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), NW().func]),
        properties: NW().arrayOf("string"),
        onAnimationEnd: NW().func
      })),
      children: NW().oneOfType([NW().node, NW().func]),
      isActive: NW().bool,
      canBegin: NW().bool,
      onAnimationEnd: NW().func,
      shouldReAnimate: NW().bool,
      onAnimationStart: NW().func,
      onAnimationReStart: NW().func
    };
    const Di = gi
  },
  7356: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => fW
    });
    var mW, EW = OW(62),
      NW = OW(6021),
      PW = OW(7081),
      LW = OW(6223),
      cW = OW.n(LW),
      wW = OW(7133),
      tW = OW.n(wW),
      ZW = OW(6382),
      xW = OW.n(ZW),
      lW = OW(6124),
      AW = OW.n(lW),
      bW = OW(7175),
      jW = OW.n(bW),
      UW = OW(7348),
      kW = OW(7065),
      sW = OW(6930),
      MW = OW(7265),
      KW = OW(6940),
      SW = OW(6107),
      YW = OW(7101),
      yW = OW(6390),
      TW = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      JW = ["key"];

    function hW(WW) {
      return hW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, hW(WW)
    }

    function HW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function nW() {
      return nW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, nW.apply(this, arguments)
    }

    function uW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function oW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? uW(Object(OW), !0).forEach((function(iW) {
          VW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : uW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function dW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, pW(mW.key), mW)
      }
    }

    function eW(WW, iW, OW) {
      return iW = gW(iW),
        function(WW, iW) {
          if (iW && ("object" === hW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, vW() ? Reflect.construct(iW, OW || [], gW(WW).constructor) : iW.apply(WW, OW))
    }

    function vW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (vW = function() {
        return !!WW
      })()
    }

    function gW(WW) {
      return gW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, gW(WW)
    }

    function DW(WW, iW) {
      return DW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, DW(WW, iW)
    }

    function VW(WW, iW, OW) {
      return (iW = pW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function pW(WW) {
      var iW = function(WW, iW) {
        if ("object" != hW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != hW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == hW(iW) ? iW : iW + ""
    }
    var fW = function(WW) {
      function iW() {
        var WW;
        ! function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, iW);
        for (var OW = arguments.length, mW = new Array(OW), EW = 0; EW < OW; EW++) mW[EW] = arguments[EW];
        return VW(WW = eW(this, iW, [].concat(mW)), "state", {
          isAnimationFinished: !0
        }), VW(WW, "id", (0, SW.B)("recharts-area-")), VW(WW, "handleAnimationEnd", (function() {
          var iW = WW.props.onAnimationEnd;
          WW.setState({
            isAnimationFinished: !0
          }), cW()(iW) && iW()
        })), VW(WW, "handleAnimationStart", (function() {
          var iW = WW.props.onAnimationStart;
          WW.setState({
            isAnimationFinished: !1
          }), cW()(iW) && iW()
        })), WW
      }
      return function(WW, iW) {
        if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(iW && iW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), iW && DW(WW, iW)
      }(iW, WW), OW = iW, mW = [{
        key: "renderDots",
        value: function(WW, OW, mW) {
          var NW = this.props.isAnimationActive,
            PW = this.state.isAnimationFinished;
          if (NW && !PW) return null;
          var LW = this.props,
            cW = LW.dot,
            wW = LW.points,
            tW = LW.dataKey,
            ZW = (0, yW.e)(this.props, !1),
            xW = (0, yW.e)(cW, !0),
            lW = wW.map((function(WW, OW) {
              var mW = oW(oW(oW({
                key: "dot-".concat(OW),
                r: 3
              }, ZW), xW), {}, {
                index: OW,
                cx: WW.x,
                cy: WW.y,
                dataKey: tW,
                value: WW.value,
                payload: WW.payload,
                points: wW
              });
              return iW.renderDotItem(cW, mW)
            })),
            AW = {
              clipPath: WW ? "url(#clipPath-".concat(OW ? "" : "dots-").concat(mW, ")") : null
            };
          return EW.createElement(sW.c, nW({
            className: "recharts-area-dots"
          }, AW), lW)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(WW) {
          var iW = this.props,
            OW = iW.baseLine,
            mW = iW.points,
            NW = iW.strokeWidth,
            PW = mW[0].x,
            LW = mW[mW.length - 1].x,
            cW = WW * Math.abs(PW - LW),
            wW = tW()(mW.map((function(WW) {
              return WW.y || 0
            })));
          return (0, SW.v)(OW) && "number" === typeof OW ? wW = Math.max(OW, wW) : OW && Array.isArray(OW) && OW.length && (wW = Math.max(tW()(OW.map((function(WW) {
            return WW.y || 0
          }))), wW)), (0, SW.v)(wW) ? EW.createElement("rect", {
            x: PW < LW ? PW : PW - cW,
            y: 0,
            width: cW,
            height: Math.floor(wW + (NW ? parseInt("".concat(NW), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(WW) {
          var iW = this.props,
            OW = iW.baseLine,
            mW = iW.points,
            NW = iW.strokeWidth,
            PW = mW[0].y,
            LW = mW[mW.length - 1].y,
            cW = WW * Math.abs(PW - LW),
            wW = tW()(mW.map((function(WW) {
              return WW.x || 0
            })));
          return (0, SW.v)(OW) && "number" === typeof OW ? wW = Math.max(OW, wW) : OW && Array.isArray(OW) && OW.length && (wW = Math.max(tW()(OW.map((function(WW) {
            return WW.x || 0
          }))), wW)), (0, SW.v)(wW) ? EW.createElement("rect", {
            x: 0,
            y: PW < LW ? PW : PW - cW,
            width: wW + (NW ? parseInt("".concat(NW), 10) : 1),
            height: Math.floor(cW)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(WW) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(WW) : this.renderHorizontalRect(WW)
        }
      }, {
        key: "renderAreaStatically",
        value: function(WW, iW, OW, mW) {
          var NW = this.props,
            PW = NW.layout,
            LW = NW.type,
            cW = NW.stroke,
            wW = NW.connectNulls,
            tW = NW.isRange,
            ZW = (NW.ref, HW(NW, TW));
          return EW.createElement(sW.c, {
            clipPath: OW ? "url(#clipPath-".concat(mW, ")") : null
          }, EW.createElement(UW.c, nW({}, (0, yW.e)(ZW, !0), {
            points: WW,
            connectNulls: wW,
            type: LW,
            baseLine: iW,
            layout: PW,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== cW && EW.createElement(UW.c, nW({}, (0, yW.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: PW,
            type: LW,
            connectNulls: wW,
            fill: "none",
            points: WW
          })), "none" !== cW && tW && EW.createElement(UW.c, nW({}, (0, yW.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: PW,
            type: LW,
            connectNulls: wW,
            fill: "none",
            points: iW
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(WW, iW) {
          var OW = this,
            mW = this.props,
            NW = mW.points,
            LW = mW.baseLine,
            cW = mW.isAnimationActive,
            wW = mW.animationBegin,
            tW = mW.animationDuration,
            ZW = mW.animationEasing,
            lW = mW.animationId,
            bW = this.state,
            jW = bW.prevPoints,
            UW = bW.prevBaseLine;
          return EW.createElement(PW.b, {
            kZ: wW,
            duration: tW,
            isActive: cW,
            easing: ZW,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(lW),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(mW) {
            var PW = mW.t;
            if (jW) {
              var cW, wW = jW.length / NW.length,
                tW = NW.map((function(WW, iW) {
                  var OW = Math.floor(iW * wW);
                  if (jW[OW]) {
                    var mW = jW[OW],
                      EW = (0, SW.o)(mW.x, WW.x),
                      NW = (0, SW.o)(mW.y, WW.y);
                    return oW(oW({}, WW), {}, {
                      x: EW(PW),
                      y: NW(PW)
                    })
                  }
                  return WW
                }));
              return cW = (0, SW.v)(LW) && "number" === typeof LW ? (0, SW.o)(UW, LW)(PW) : xW()(LW) || AW()(LW) ? (0, SW.o)(UW, 0)(PW) : LW.map((function(WW, iW) {
                var OW = Math.floor(iW * wW);
                if (UW[OW]) {
                  var mW = UW[OW],
                    EW = (0, SW.o)(mW.x, WW.x),
                    NW = (0, SW.o)(mW.y, WW.y);
                  return oW(oW({}, WW), {}, {
                    x: EW(PW),
                    y: NW(PW)
                  })
                }
                return WW
              })), OW.renderAreaStatically(tW, cW, WW, iW)
            }
            return EW.createElement(sW.c, null, EW.createElement("defs", null, EW.createElement("clipPath", {
              id: "animationClipPath-".concat(iW)
            }, OW.renderClipRect(PW))), EW.createElement(sW.c, {
              clipPath: "url(#animationClipPath-".concat(iW, ")")
            }, OW.renderAreaStatically(NW, LW, WW, iW)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(WW, iW) {
          var OW = this.props,
            mW = OW.points,
            EW = OW.baseLine,
            NW = OW.isAnimationActive,
            PW = this.state,
            LW = PW.prevPoints,
            cW = PW.prevBaseLine,
            wW = PW.totalLength;
          return NW && mW && mW.length && (!LW && wW > 0 || !jW()(LW, mW) || !jW()(cW, EW)) ? this.renderAreaWithAnimation(WW, iW) : this.renderAreaStatically(mW, EW, WW, iW)
        }
      }, {
        key: "render",
        value: function() {
          var WW, iW = this.props,
            OW = iW.hide,
            mW = iW.dot,
            PW = iW.points,
            LW = iW.className,
            cW = iW.top,
            wW = iW.left,
            tW = iW.xAxis,
            ZW = iW.yAxis,
            lW = iW.width,
            AW = iW.height,
            bW = iW.isAnimationActive,
            jW = iW.id;
          if (OW || !PW || !PW.length) return null;
          var UW = this.state.isAnimationFinished,
            kW = 1 === PW.length,
            KW = (0, NW.d)("recharts-area", LW),
            SW = tW && tW.allowDataOverflow,
            YW = ZW && ZW.allowDataOverflow,
            TW = SW || YW,
            JW = xW()(jW) ? this.id : jW,
            hW = null !== (WW = (0, yW.e)(mW, !1)) && void 0 !== WW ? WW : {
              r: 3,
              strokeWidth: 2
            },
            HW = hW.r,
            nW = void 0 === HW ? 3 : HW,
            uW = hW.strokeWidth,
            oW = void 0 === uW ? 2 : uW,
            dW = ((0, yW.v)(mW) ? mW : {}).clipDot,
            eW = void 0 === dW || dW,
            vW = 2 * nW + oW;
          return EW.createElement(sW.c, {
            className: KW
          }, SW || YW ? EW.createElement("defs", null, EW.createElement("clipPath", {
            id: "clipPath-".concat(JW)
          }, EW.createElement("rect", {
            x: SW ? wW : wW - lW / 2,
            y: YW ? cW : cW - AW / 2,
            width: SW ? lW : 2 * lW,
            height: YW ? AW : 2 * AW
          })), !eW && EW.createElement("clipPath", {
            id: "clipPath-dots-".concat(JW)
          }, EW.createElement("rect", {
            x: wW - vW / 2,
            y: cW - vW / 2,
            width: lW + vW,
            height: AW + vW
          }))) : null, kW ? null : this.renderArea(TW, JW), (mW || kW) && this.renderDots(TW, eW, JW), (!bW || UW) && MW.d.renderCallByParent(this.props, PW))
        }
      }], LW = [{
        key: "getDerivedStateFromProps",
        value: function(WW, iW) {
          return WW.animationId !== iW.prevAnimationId ? {
            prevAnimationId: WW.animationId,
            curPoints: WW.points,
            curBaseLine: WW.baseLine,
            prevPoints: iW.curPoints,
            prevBaseLine: iW.curBaseLine
          } : WW.points !== iW.curPoints || WW.baseLine !== iW.curBaseLine ? {
            curPoints: WW.points,
            curBaseLine: WW.baseLine
          } : null
        }
      }], mW && dW(OW.prototype, mW), LW && dW(OW, LW), Object.defineProperty(OW, "prototype", {
        writable: !1
      }), OW;
      var OW, mW, LW
    }(EW.PureComponent);
    mW = fW, VW(fW, "displayName", "Area"), VW(fW, "defaultProps", {
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
      isAnimationActive: !KW.d.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), VW(fW, "getBaseValue", (function(WW, iW, OW, mW) {
      var EW = WW.layout,
        NW = WW.baseValue,
        PW = iW.props.baseValue,
        LW = null !== PW && void 0 !== PW ? PW : NW;
      if ((0, SW.v)(LW) && "number" === typeof LW) return LW;
      var cW = "horizontal" === EW ? mW : OW,
        wW = cW.scale.domain();
      if ("number" === cW.type) {
        var tW = Math.max(wW[0], wW[1]),
          ZW = Math.min(wW[0], wW[1]);
        return "dataMin" === LW ? ZW : "dataMax" === LW || tW < 0 ? tW : Math.max(Math.min(wW[0], wW[1]), 0)
      }
      return "dataMin" === LW ? wW[0] : "dataMax" === LW ? wW[1] : wW[0]
    })), VW(fW, "getComposedData", (function(WW) {
      var iW, OW = WW.props,
        EW = WW.item,
        NW = WW.xAxis,
        PW = WW.yAxis,
        LW = WW.xAxisTicks,
        cW = WW.yAxisTicks,
        wW = WW.bandSize,
        tW = WW.dataKey,
        ZW = WW.stackedData,
        xW = WW.dataStartIndex,
        lW = WW.displayedData,
        AW = WW.offset,
        bW = OW.layout,
        jW = ZW && ZW.length,
        UW = mW.getBaseValue(OW, EW, NW, PW),
        kW = "horizontal" === bW,
        sW = !1,
        MW = lW.map((function(WW, iW) {
          var OW;
          jW ? OW = ZW[xW + iW] : (OW = (0, YW.fb)(WW, tW), Array.isArray(OW) ? sW = !0 : OW = [UW, OW]);
          var mW = null == OW[1] || jW && null == (0, YW.fb)(WW, tW);
          return kW ? {
            x: (0, YW.B)({
              axis: NW,
              ticks: LW,
              bandSize: wW,
              entry: WW,
              index: iW
            }),
            y: mW ? null : PW.scale(OW[1]),
            value: OW,
            payload: WW
          } : {
            x: mW ? null : NW.scale(OW[1]),
            y: (0, YW.B)({
              axis: PW,
              ticks: cW,
              bandSize: wW,
              entry: WW,
              index: iW
            }),
            value: OW,
            payload: WW
          }
        }));
      return iW = jW || sW ? MW.map((function(WW) {
        var iW = Array.isArray(WW.value) ? WW.value[0] : null;
        return kW ? {
          x: WW.x,
          y: null != iW && null != WW.y ? PW.scale(iW) : null
        } : {
          x: null != iW ? NW.scale(iW) : null,
          y: WW.y
        }
      })) : kW ? PW.scale(UW) : NW.scale(UW), oW({
        points: MW,
        baseLine: iW,
        layout: bW,
        isRange: sW
      }, AW)
    })), VW(fW, "renderDotItem", (function(WW, iW) {
      var OW;
      if (EW.isValidElement(WW)) OW = EW.cloneElement(WW, iW);
      else if (cW()(WW)) OW = WW(iW);
      else {
        var mW = (0, NW.d)("recharts-area-dot", "boolean" !== typeof WW ? WW.className : ""),
          PW = iW.key,
          LW = HW(iW, JW);
        OW = EW.createElement(kW.c, nW({}, LW, {
          key: PW,
          className: mW
        }))
      }
      return OW
    }))
  },
  7252: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => RW
    });
    var mW = OW(62),
      EW = OW(6021),
      NW = OW(7081),
      PW = OW(7175),
      LW = OW.n(PW),
      cW = OW(6382),
      wW = OW.n(cW),
      tW = OW(6930),
      ZW = OW(7190),
      xW = OW(7260),
      lW = OW(7265),
      AW = OW(6107),
      bW = OW(6390),
      jW = OW(6940),
      UW = OW(7101),
      kW = OW(6415),
      sW = OW(6919),
      MW = OW(7275),
      KW = ["x", "y"];

    function SW(WW) {
      return SW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, SW(WW)
    }

    function YW() {
      return YW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, YW.apply(this, arguments)
    }

    function yW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function TW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? yW(Object(OW), !0).forEach((function(iW) {
          JW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : yW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function JW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != SW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != SW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == SW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function hW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function HW(WW, iW) {
      var OW = WW.x,
        mW = WW.y,
        EW = hW(WW, KW),
        NW = "".concat(OW),
        PW = parseInt(NW, 10),
        LW = "".concat(mW),
        cW = parseInt(LW, 10),
        wW = "".concat(iW.height || EW.height),
        tW = parseInt(wW, 10),
        ZW = "".concat(iW.width || EW.width),
        xW = parseInt(ZW, 10);
      return TW(TW(TW(TW(TW({}, iW), EW), PW ? {
        x: PW
      } : {}), cW ? {
        y: cW
      } : {}), {}, {
        height: tW,
        width: xW,
        name: iW.name,
        radius: iW.radius
      })
    }

    function nW(WW) {
      return mW.createElement(MW.b, YW({
        shapeType: "rectangle",
        propTransformer: HW,
        activeClassName: "recharts-active-bar"
      }, WW))
    }
    var uW, oW = ["value", "background"];

    function dW(WW) {
      return dW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, dW(WW)
    }

    function eW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function vW() {
      return vW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, vW.apply(this, arguments)
    }

    function gW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function DW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? gW(Object(OW), !0).forEach((function(iW) {
          BW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : gW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function VW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, qW(mW.key), mW)
      }
    }

    function pW(WW, iW, OW) {
      return iW = CW(iW),
        function(WW, iW) {
          if (iW && ("object" === dW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, fW() ? Reflect.construct(iW, OW || [], CW(WW).constructor) : iW.apply(WW, OW))
    }

    function fW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (fW = function() {
        return !!WW
      })()
    }

    function CW(WW) {
      return CW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, CW(WW)
    }

    function XW(WW, iW) {
      return XW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, XW(WW, iW)
    }

    function BW(WW, iW, OW) {
      return (iW = qW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function qW(WW) {
      var iW = function(WW, iW) {
        if ("object" != dW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != dW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == dW(iW) ? iW : iW + ""
    }
    var RW = function(WW) {
      function iW() {
        var WW;
        ! function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, iW);
        for (var OW = arguments.length, mW = new Array(OW), EW = 0; EW < OW; EW++) mW[EW] = arguments[EW];
        return BW(WW = pW(this, iW, [].concat(mW)), "state", {
          isAnimationFinished: !1
        }), BW(WW, "id", (0, AW.B)("recharts-bar-")), BW(WW, "handleAnimationEnd", (function() {
          var iW = WW.props.onAnimationEnd;
          WW.setState({
            isAnimationFinished: !0
          }), iW && iW()
        })), BW(WW, "handleAnimationStart", (function() {
          var iW = WW.props.onAnimationStart;
          WW.setState({
            isAnimationFinished: !1
          }), iW && iW()
        })), WW
      }
      return function(WW, iW) {
        if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(iW && iW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), iW && XW(WW, iW)
      }(iW, WW), OW = iW, PW = [{
        key: "renderRectanglesStatically",
        value: function(WW) {
          var iW = this,
            OW = this.props,
            EW = OW.shape,
            NW = OW.dataKey,
            PW = OW.activeIndex,
            LW = OW.activeBar,
            cW = (0, bW.e)(this.props, !1);
          return WW && WW.map((function(WW, OW) {
            var wW = OW === PW,
              ZW = wW ? LW : EW,
              xW = DW(DW(DW({}, cW), WW), {}, {
                isActive: wW,
                option: ZW,
                index: OW,
                dataKey: NW,
                onAnimationStart: iW.handleAnimationStart,
                onAnimationEnd: iW.handleAnimationEnd
              });
            return mW.createElement(tW.c, vW({
              className: "recharts-bar-rectangle"
            }, (0, kW.l)(iW.props, WW, OW), {
              key: "rectangle-".concat(null === WW || void 0 === WW ? void 0 : WW.x, "-").concat(null === WW || void 0 === WW ? void 0 : WW.y, "-").concat(null === WW || void 0 === WW ? void 0 : WW.value, "-").concat(OW)
            }), mW.createElement(nW, xW))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var WW = this,
            iW = this.props,
            OW = iW.data,
            EW = iW.layout,
            PW = iW.isAnimationActive,
            LW = iW.animationBegin,
            cW = iW.animationDuration,
            wW = iW.animationEasing,
            ZW = iW.animationId,
            xW = this.state.prevData;
          return mW.createElement(NW.b, {
            kZ: LW,
            duration: cW,
            isActive: PW,
            easing: wW,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(ZW),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(iW) {
            var NW = iW.t,
              PW = OW.map((function(WW, iW) {
                var OW = xW && xW[iW];
                if (OW) {
                  var mW = (0, AW.o)(OW.x, WW.x),
                    PW = (0, AW.o)(OW.y, WW.y),
                    LW = (0, AW.o)(OW.width, WW.width),
                    cW = (0, AW.o)(OW.height, WW.height);
                  return DW(DW({}, WW), {}, {
                    x: mW(NW),
                    y: PW(NW),
                    width: LW(NW),
                    height: cW(NW)
                  })
                }
                if ("horizontal" === EW) {
                  var wW = (0, AW.o)(0, WW.height)(NW);
                  return DW(DW({}, WW), {}, {
                    y: WW.y + WW.height - wW,
                    height: wW
                  })
                }
                var tW = (0, AW.o)(0, WW.width)(NW);
                return DW(DW({}, WW), {}, {
                  width: tW
                })
              }));
            return mW.createElement(tW.c, null, WW.renderRectanglesStatically(PW))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var WW = this.props,
            iW = WW.data,
            OW = WW.isAnimationActive,
            mW = this.state.prevData;
          return !(OW && iW && iW.length) || mW && LW()(mW, iW) ? this.renderRectanglesStatically(iW) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var WW = this,
            iW = this.props,
            OW = iW.data,
            EW = iW.dataKey,
            NW = iW.activeIndex,
            PW = (0, bW.e)(this.props.background, !1);
          return OW.map((function(iW, OW) {
            iW.value;
            var LW = iW.background,
              cW = eW(iW, oW);
            if (!LW) return null;
            var wW = DW(DW(DW(DW(DW({}, cW), {}, {
              fill: "#eee"
            }, LW), PW), (0, kW.l)(WW.props, iW, OW)), {}, {
              onAnimationStart: WW.handleAnimationStart,
              onAnimationEnd: WW.handleAnimationEnd,
              dataKey: EW,
              index: OW,
              className: "recharts-bar-background-rectangle"
            });
            return mW.createElement(nW, vW({
              key: "background-bar-".concat(OW),
              option: WW.props.background,
              isActive: OW === NW
            }, wW))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(WW, iW) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var OW = this.props,
            EW = OW.data,
            NW = OW.xAxis,
            PW = OW.yAxis,
            LW = OW.layout,
            cW = OW.children,
            wW = (0, bW.h)(cW, ZW.b);
          if (!wW) return null;
          var xW = "vertical" === LW ? EW[0].height / 2 : EW[0].width / 2,
            lW = function(WW, iW) {
              var OW = Array.isArray(WW.value) ? WW.value[1] : WW.value;
              return {
                x: WW.x,
                y: WW.y,
                value: OW,
                errorVal: (0, UW.fb)(WW, iW)
              }
            },
            AW = {
              clipPath: WW ? "url(#clipPath-".concat(iW, ")") : null
            };
          return mW.createElement(tW.c, AW, wW.map((function(WW) {
            return mW.cloneElement(WW, {
              key: "error-bar-".concat(iW, "-").concat(WW.props.dataKey),
              data: EW,
              xAxis: NW,
              yAxis: PW,
              layout: LW,
              offset: xW,
              dataPointFormatter: lW
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var WW = this.props,
            iW = WW.hide,
            OW = WW.data,
            NW = WW.className,
            PW = WW.xAxis,
            LW = WW.yAxis,
            cW = WW.left,
            ZW = WW.top,
            xW = WW.width,
            AW = WW.height,
            bW = WW.isAnimationActive,
            jW = WW.background,
            UW = WW.id;
          if (iW || !OW || !OW.length) return null;
          var kW = this.state.isAnimationFinished,
            sW = (0, EW.d)("recharts-bar", NW),
            MW = PW && PW.allowDataOverflow,
            KW = LW && LW.allowDataOverflow,
            SW = MW || KW,
            YW = wW()(UW) ? this.id : UW;
          return mW.createElement(tW.c, {
            className: sW
          }, MW || KW ? mW.createElement("defs", null, mW.createElement("clipPath", {
            id: "clipPath-".concat(YW)
          }, mW.createElement("rect", {
            x: MW ? cW : cW - xW / 2,
            y: KW ? ZW : ZW - AW / 2,
            width: MW ? xW : 2 * xW,
            height: KW ? AW : 2 * AW
          }))) : null, mW.createElement(tW.c, {
            className: "recharts-bar-rectangles",
            clipPath: SW ? "url(#clipPath-".concat(YW, ")") : null
          }, jW ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(SW, YW), (!bW || kW) && lW.d.renderCallByParent(this.props, OW))
        }
      }], cW = [{
        key: "getDerivedStateFromProps",
        value: function(WW, iW) {
          return WW.animationId !== iW.prevAnimationId ? {
            prevAnimationId: WW.animationId,
            curData: WW.data,
            prevData: iW.curData
          } : WW.data !== iW.curData ? {
            curData: WW.data
          } : null
        }
      }], PW && VW(OW.prototype, PW), cW && VW(OW, cW), Object.defineProperty(OW, "prototype", {
        writable: !1
      }), OW;
      var OW, PW, cW
    }(mW.PureComponent);
    uW = RW, BW(RW, "displayName", "Bar"), BW(RW, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !jW.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), BW(RW, "getComposedData", (function(WW) {
      var iW = WW.props,
        OW = WW.item,
        mW = WW.barPosition,
        EW = WW.bandSize,
        NW = WW.xAxis,
        PW = WW.yAxis,
        LW = WW.xAxisTicks,
        cW = WW.yAxisTicks,
        wW = WW.stackedData,
        tW = WW.dataStartIndex,
        ZW = WW.displayedData,
        lW = WW.offset,
        jW = (0, UW.j)(mW, OW);
      if (!jW) return null;
      var kW = iW.layout,
        MW = OW.type.defaultProps,
        KW = void 0 !== MW ? DW(DW({}, MW), OW.props) : OW.props,
        SW = KW.dataKey,
        YW = KW.children,
        yW = KW.minPointSize,
        TW = "horizontal" === kW ? PW : NW,
        JW = wW ? TW.scale.domain() : null,
        hW = (0, UW.w)({
          numericAxis: TW
        }),
        HW = (0, bW.h)(YW, xW.b),
        nW = ZW.map((function(WW, iW) {
          var mW, ZW, xW, lW, bW, MW;
          wW ? mW = (0, UW.tb)(wW[tW + iW], JW) : (mW = (0, UW.fb)(WW, SW), Array.isArray(mW) || (mW = [hW, mW]));
          var KW = function(WW) {
            var iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(OW, mW) {
              if ("number" === typeof WW) return WW;
              var EW = (0, AW.v)(OW) || (0, AW.q)(OW);
              return EW ? WW(OW, mW) : (EW || (0, sW.b)(!1), iW)
            }
          }(yW, uW.defaultProps.minPointSize)(mW[1], iW);
          if ("horizontal" === kW) {
            var YW, TW = [PW.scale(mW[0]), PW.scale(mW[1])],
              nW = TW[0],
              oW = TW[1];
            ZW = (0, UW.z)({
              axis: NW,
              ticks: LW,
              bandSize: EW,
              offset: jW.offset,
              entry: WW,
              index: iW
            }), xW = null !== (YW = null !== oW && void 0 !== oW ? oW : nW) && void 0 !== YW ? YW : void 0, lW = jW.size;
            var dW = nW - oW;
            if (bW = Number.isNaN(dW) ? 0 : dW, MW = {
                x: ZW,
                y: PW.y,
                width: lW,
                height: PW.height
              }, Math.abs(KW) > 0 && Math.abs(bW) < Math.abs(KW)) {
              var eW = (0, AW.y)(bW || KW) * (Math.abs(KW) - Math.abs(bW));
              xW -= eW, bW += eW
            }
          } else {
            var vW = [NW.scale(mW[0]), NW.scale(mW[1])],
              gW = vW[0],
              VW = vW[1];
            if (ZW = gW, xW = (0, UW.z)({
                axis: PW,
                ticks: cW,
                bandSize: EW,
                offset: jW.offset,
                entry: WW,
                index: iW
              }), lW = VW - gW, bW = jW.size, MW = {
                x: NW.x,
                y: xW,
                width: NW.width,
                height: bW
              }, Math.abs(KW) > 0 && Math.abs(lW) < Math.abs(KW)) lW += (0, AW.y)(lW || KW) * (Math.abs(KW) - Math.abs(lW))
          }
          return DW(DW(DW({}, WW), {}, {
            x: ZW,
            y: xW,
            width: lW,
            height: bW,
            value: wW ? mW : mW[1],
            payload: WW,
            background: MW
          }, HW && HW[iW] && HW[iW].props), {}, {
            tooltipPayload: [(0, UW.bb)(OW, WW)],
            tooltipPosition: {
              x: ZW + lW / 2,
              y: xW + bW / 2
            }
          })
        }));
      return DW({
        data: nW,
        layout: kW
      }, lW)
    }))
  },
  7364: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => dW
    });
    var mW = OW(62),
      EW = OW(6223),
      NW = OW.n(EW),
      PW = OW(6135),
      LW = OW.n(PW),
      cW = OW(6021),
      wW = OW(6408),
      tW = OW(6930),
      ZW = OW(7090),
      xW = OW(7207),
      lW = OW(6107),
      AW = OW(6415),
      bW = OW(6390),
      jW = OW(7372),
      UW = ["viewBox"],
      kW = ["viewBox"],
      sW = ["ticks"];

    function MW(WW) {
      return MW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, MW(WW)
    }

    function KW() {
      return KW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, KW.apply(this, arguments)
    }

    function SW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function YW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? SW(Object(OW), !0).forEach((function(iW) {
          uW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : SW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function yW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function TW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, oW(mW.key), mW)
      }
    }

    function JW(WW, iW, OW) {
      return iW = HW(iW),
        function(WW, iW) {
          if (iW && ("object" === MW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, hW() ? Reflect.construct(iW, OW || [], HW(WW).constructor) : iW.apply(WW, OW))
    }

    function hW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (hW = function() {
        return !!WW
      })()
    }

    function HW(WW) {
      return HW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, HW(WW)
    }

    function nW(WW, iW) {
      return nW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, nW(WW, iW)
    }

    function uW(WW, iW, OW) {
      return (iW = oW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function oW(WW) {
      var iW = function(WW, iW) {
        if ("object" != MW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != MW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == MW(iW) ? iW : iW + ""
    }
    var dW = function(WW) {
      function iW(WW) {
        var OW;
        return function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, iW), (OW = JW(this, iW, [WW])).state = {
          fontSize: "",
          letterSpacing: ""
        }, OW
      }
      return function(WW, iW) {
        if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(iW && iW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), iW && nW(WW, iW)
      }(iW, WW), OW = iW, PW = [{
        key: "renderTickItem",
        value: function(WW, iW, OW) {
          var EW = (0, cW.d)(iW.className, "recharts-cartesian-axis-tick-value");
          return mW.isValidElement(WW) ? mW.cloneElement(WW, YW(YW({}, iW), {}, {
            className: EW
          })) : NW()(WW) ? WW(YW(YW({}, iW), {}, {
            className: EW
          })) : mW.createElement(ZW.b, KW({}, iW, {
            className: "recharts-cartesian-axis-tick-value"
          }), OW)
        }
      }], (EW = [{
        key: "shouldComponentUpdate",
        value: function(WW, iW) {
          var OW = WW.viewBox,
            mW = yW(WW, UW),
            EW = this.props,
            NW = EW.viewBox,
            PW = yW(EW, kW);
          return !(0, wW.e)(OW, NW) || !(0, wW.e)(mW, PW) || !(0, wW.e)(iW, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var WW = this.layerReference;
          if (WW) {
            var iW = WW.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            iW && this.setState({
              fontSize: window.getComputedStyle(iW).fontSize,
              letterSpacing: window.getComputedStyle(iW).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(WW) {
          var iW, OW, mW, EW, NW, PW, LW = this.props,
            cW = LW.x,
            wW = LW.y,
            tW = LW.width,
            ZW = LW.height,
            xW = LW.orientation,
            AW = LW.tickSize,
            bW = LW.mirror,
            jW = LW.tickMargin,
            UW = bW ? -1 : 1,
            kW = WW.tickSize || AW,
            sW = (0, lW.v)(WW.tickCoord) ? WW.tickCoord : WW.coordinate;
          switch (xW) {
            case "top":
              iW = OW = WW.coordinate, PW = (mW = (EW = wW + +!bW * ZW) - UW * kW) - UW * jW, NW = sW;
              break;
            case "left":
              mW = EW = WW.coordinate, NW = (iW = (OW = cW + +!bW * tW) - UW * kW) - UW * jW, PW = sW;
              break;
            case "right":
              mW = EW = WW.coordinate, NW = (iW = (OW = cW + +bW * tW) + UW * kW) + UW * jW, PW = sW;
              break;
            default:
              iW = OW = WW.coordinate, PW = (mW = (EW = wW + +bW * ZW) + UW * kW) + UW * jW, NW = sW
          }
          return {
            line: {
              x1: iW,
              y1: mW,
              x2: OW,
              y2: EW
            },
            hZ: {
              x: NW,
              y: PW
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var WW, iW = this.props,
            OW = iW.orientation,
            mW = iW.mirror;
          switch (OW) {
            case "left":
              WW = mW ? "start" : "end";
              break;
            case "right":
              WW = mW ? "end" : "start";
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
            iW = WW.orientation,
            OW = WW.mirror,
            mW = "end";
          switch (iW) {
            case "left":
            case "right":
              mW = "middle";
              break;
            case "top":
              mW = OW ? "start" : "end";
              break;
            default:
              mW = OW ? "end" : "start"
          }
          return mW
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var WW = this.props,
            iW = WW.x,
            OW = WW.y,
            EW = WW.width,
            NW = WW.height,
            PW = WW.orientation,
            wW = WW.mirror,
            tW = WW.axisLine,
            ZW = YW(YW(YW({}, (0, bW.e)(this.props, !1)), (0, bW.e)(tW, !1)), {}, {
              fill: "none"
            });
          if ("top" === PW || "bottom" === PW) {
            var xW = +("top" === PW && !wW || "bottom" === PW && wW);
            ZW = YW(YW({}, ZW), {}, {
              x1: iW,
              y1: OW + xW * NW,
              x2: iW + EW,
              y2: OW + xW * NW
            })
          } else {
            var lW = +("left" === PW && !wW || "right" === PW && wW);
            ZW = YW(YW({}, ZW), {}, {
              x1: iW + lW * EW,
              y1: OW,
              x2: iW + lW * EW,
              y2: OW + NW
            })
          }
          return mW.createElement("line", KW({}, ZW, {
            className: (0, cW.d)("recharts-cartesian-axis-line", LW()(tW, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(WW, OW, EW) {
          var PW = this,
            wW = this.props,
            ZW = wW.tickLine,
            xW = wW.stroke,
            lW = wW.hZ,
            UW = wW.tickFormatter,
            kW = wW.unit,
            sW = (0, jW.c)(YW(YW({}, this.props), {}, {
              ticks: WW
            }), OW, EW),
            MW = this.getTickTextAnchor(),
            SW = this.getTickVerticalAnchor(),
            yW = (0, bW.e)(this.props, !1),
            TW = (0, bW.e)(lW, !1),
            JW = YW(YW({}, yW), {}, {
              fill: "none"
            }, (0, bW.e)(ZW, !1)),
            hW = sW.map((function(WW, OW) {
              var EW = PW.getTickLineCoord(WW),
                wW = EW.line,
                bW = EW.hZ,
                jW = YW(YW(YW(YW({
                  textAnchor: MW,
                  verticalAnchor: SW
                }, yW), {}, {
                  stroke: "none",
                  fill: xW
                }, TW), bW), {}, {
                  index: OW,
                  payload: WW,
                  visibleTicksCount: sW.length,
                  tickFormatter: UW
                });
              return mW.createElement(tW.c, KW({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(WW.value, "-").concat(WW.coordinate, "-").concat(WW.tickCoord)
              }, (0, AW.l)(PW.props, WW, OW)), ZW && mW.createElement("line", KW({}, JW, wW, {
                className: (0, cW.d)("recharts-cartesian-axis-tick-line", LW()(ZW, "className"))
              })), lW && iW.renderTickItem(lW, jW, "".concat(NW()(UW) ? UW(WW.value, OW) : WW.value).concat(kW || "")))
            }));
          return mW.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, hW)
        }
      }, {
        key: "render",
        value: function() {
          var WW = this,
            iW = this.props,
            OW = iW.axisLine,
            EW = iW.width,
            PW = iW.height,
            LW = iW.ticksGenerator,
            wW = iW.className;
          if (iW.hide) return null;
          var ZW = this.props,
            lW = ZW.ticks,
            AW = yW(ZW, sW),
            bW = lW;
          return NW()(LW) && (bW = lW && lW.length > 0 ? LW(this.props) : LW(AW)), EW <= 0 || PW <= 0 || !bW || !bW.length ? null : mW.createElement(tW.c, {
            className: (0, cW.d)("recharts-cartesian-axis", wW),
            ref: function(iW) {
              WW.layerReference = iW
            }
          }, OW && this.renderAxisLine(), this.renderTicks(bW, this.state.fontSize, this.state.letterSpacing), xW.d.renderCallByParent(this.props))
        }
      }]) && TW(OW.prototype, EW), PW && TW(OW, PW), Object.defineProperty(OW, "prototype", {
        writable: !1
      }), OW;
      var OW, EW, PW
    }(mW.Component);
    uW(dW, "displayName", "CartesianAxis"), uW(dW, "defaultProps", {
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
      hZ: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  7382: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => uW
    });
    var mW = OW(62),
      EW = OW(6223),
      NW = OW.n(EW),
      PW = OW(6386),
      LW = OW(6107),
      cW = OW(6390),
      wW = OW(7101),
      tW = OW(7372),
      ZW = OW(7364),
      xW = OW(7316),
      lW = ["x1", "y1", "x2", "y2", "key"],
      AW = ["offset"];

    function bW(WW) {
      return bW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, bW(WW)
    }

    function jW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function UW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? jW(Object(OW), !0).forEach((function(iW) {
          kW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : jW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function kW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != bW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != bW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == bW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function sW() {
      return sW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, sW.apply(this, arguments)
    }

    function MW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }
    var KW = function(WW) {
      var iW = WW.fill;
      if (!iW || "none" === iW) return null;
      var OW = WW.fillOpacity,
        EW = WW.x,
        NW = WW.y,
        PW = WW.width,
        LW = WW.height,
        cW = WW.ry;
      return mW.createElement("rect", {
        x: EW,
        y: NW,
        ry: cW,
        width: PW,
        height: LW,
        stroke: "none",
        fill: iW,
        fillOpacity: OW,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function SW(WW, iW) {
      var OW;
      if (mW.isValidElement(WW)) OW = mW.cloneElement(WW, iW);
      else if (NW()(WW)) OW = WW(iW);
      else {
        var EW = iW.x1,
          PW = iW.y1,
          LW = iW.x2,
          wW = iW.y2,
          tW = iW.key,
          ZW = MW(iW, lW),
          xW = (0, cW.e)(ZW, !1),
          bW = (xW.offset, MW(xW, AW));
        OW = mW.createElement("line", sW({}, bW, {
          x1: EW,
          y1: PW,
          x2: LW,
          y2: wW,
          fill: "none",
          key: tW
        }))
      }
      return OW
    }

    function YW(WW) {
      var iW = WW.x,
        OW = WW.width,
        EW = WW.horizontal,
        NW = void 0 === EW || EW,
        PW = WW.horizontalPoints;
      if (!NW || !PW || !PW.length) return null;
      var LW = PW.map((function(mW, EW) {
        var PW = UW(UW({}, WW), {}, {
          x1: iW,
          y1: mW,
          x2: iW + OW,
          y2: mW,
          key: "line-".concat(EW),
          index: EW
        });
        return SW(NW, PW)
      }));
      return mW.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, LW)
    }

    function yW(WW) {
      var iW = WW.y,
        OW = WW.height,
        EW = WW.vertical,
        NW = void 0 === EW || EW,
        PW = WW.verticalPoints;
      if (!NW || !PW || !PW.length) return null;
      var LW = PW.map((function(mW, EW) {
        var PW = UW(UW({}, WW), {}, {
          x1: mW,
          y1: iW,
          x2: mW,
          y2: iW + OW,
          key: "line-".concat(EW),
          index: EW
        });
        return SW(NW, PW)
      }));
      return mW.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, LW)
    }

    function TW(WW) {
      var iW = WW.horizontalFill,
        OW = WW.fillOpacity,
        EW = WW.x,
        NW = WW.y,
        PW = WW.width,
        LW = WW.height,
        cW = WW.horizontalPoints,
        wW = WW.horizontal;
      if (!(void 0 === wW || wW) || !iW || !iW.length) return null;
      var tW = cW.map((function(WW) {
        return Math.round(WW + NW - NW)
      })).sort((function(WW, iW) {
        return WW - iW
      }));
      NW !== tW[0] && tW.unshift(0);
      var ZW = tW.map((function(WW, cW) {
        var wW = !tW[cW + 1] ? NW + LW - WW : tW[cW + 1] - WW;
        if (wW <= 0) return null;
        var ZW = cW % iW.length;
        return mW.createElement("rect", {
          key: "react-".concat(cW),
          y: WW,
          x: EW,
          height: wW,
          width: PW,
          stroke: "none",
          fill: iW[ZW],
          fillOpacity: OW,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return mW.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, ZW)
    }

    function JW(WW) {
      var iW = WW.vertical,
        OW = void 0 === iW || iW,
        EW = WW.verticalFill,
        NW = WW.fillOpacity,
        PW = WW.x,
        LW = WW.y,
        cW = WW.width,
        wW = WW.height,
        tW = WW.verticalPoints;
      if (!OW || !EW || !EW.length) return null;
      var ZW = tW.map((function(WW) {
        return Math.round(WW + PW - PW)
      })).sort((function(WW, iW) {
        return WW - iW
      }));
      PW !== ZW[0] && ZW.unshift(0);
      var xW = ZW.map((function(WW, iW) {
        var OW = !ZW[iW + 1] ? PW + cW - WW : ZW[iW + 1] - WW;
        if (OW <= 0) return null;
        var tW = iW % EW.length;
        return mW.createElement("rect", {
          key: "react-".concat(iW),
          x: WW,
          y: LW,
          width: OW,
          height: wW,
          stroke: "none",
          fill: EW[tW],
          fillOpacity: NW,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return mW.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, xW)
    }
    var hW = function(WW, iW) {
        var OW = WW.xAxis,
          mW = WW.width,
          EW = WW.height,
          NW = WW.offset;
        return (0, wW.E)((0, tW.c)(UW(UW(UW({}, ZW.d.defaultProps), OW), {}, {
          ticks: (0, wW.V)(OW, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: mW,
            height: EW
          }
        })), NW.left, NW.left + NW.width, iW)
      },
      HW = function(WW, iW) {
        var OW = WW.yAxis,
          mW = WW.width,
          EW = WW.height,
          NW = WW.offset;
        return (0, wW.E)((0, tW.c)(UW(UW(UW({}, ZW.d.defaultProps), OW), {}, {
          ticks: (0, wW.V)(OW, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: mW,
            height: EW
          }
        })), NW.top, NW.top + NW.height, iW)
      },
      nW = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function uW(WW) {
      var iW, OW, EW, cW, wW, tW, ZW = (0, xW.j)(),
        lW = (0, xW.h)(),
        AW = (0, xW.p)(),
        jW = UW(UW({}, WW), {}, {
          stroke: null !== (iW = WW.stroke) && void 0 !== iW ? iW : nW.stroke,
          fill: null !== (OW = WW.fill) && void 0 !== OW ? OW : nW.fill,
          horizontal: null !== (EW = WW.horizontal) && void 0 !== EW ? EW : nW.horizontal,
          horizontalFill: null !== (cW = WW.horizontalFill) && void 0 !== cW ? cW : nW.horizontalFill,
          vertical: null !== (wW = WW.vertical) && void 0 !== wW ? wW : nW.vertical,
          verticalFill: null !== (tW = WW.verticalFill) && void 0 !== tW ? tW : nW.verticalFill,
          x: (0, LW.v)(WW.x) ? WW.x : AW.left,
          y: (0, LW.v)(WW.y) ? WW.y : AW.top,
          width: (0, LW.v)(WW.width) ? WW.width : AW.width,
          height: (0, LW.v)(WW.height) ? WW.height : AW.height
        }),
        kW = jW.x,
        MW = jW.y,
        SW = jW.width,
        uW = jW.height,
        oW = jW.syncWithTicks,
        dW = jW.horizontalValues,
        eW = jW.verticalValues,
        vW = (0, xW.f)(),
        gW = (0, xW.A)();
      if (!(0, LW.v)(SW) || SW <= 0 || !(0, LW.v)(uW) || uW <= 0 || !(0, LW.v)(kW) || kW !== +kW || !(0, LW.v)(MW) || MW !== +MW) return null;
      var DW = jW.verticalCoordinatesGenerator || hW,
        VW = jW.horizontalCoordinatesGenerator || HW,
        pW = jW.horizontalPoints,
        fW = jW.verticalPoints;
      if ((!pW || !pW.length) && NW()(VW)) {
        var CW = dW && dW.length,
          XW = VW({
            yAxis: gW ? UW(UW({}, gW), {}, {
              ticks: CW ? dW : gW.ticks
            }) : void 0,
            width: ZW,
            height: lW,
            offset: AW
          }, !!CW || oW);
        (0, PW.d)(Array.isArray(XW), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(bW(XW), "]")), Array.isArray(XW) && (pW = XW)
      }
      if ((!fW || !fW.length) && NW()(DW)) {
        var BW = eW && eW.length,
          qW = DW({
            xAxis: vW ? UW(UW({}, vW), {}, {
              ticks: BW ? eW : vW.ticks
            }) : void 0,
            width: ZW,
            height: lW,
            offset: AW
          }, !!BW || oW);
        (0, PW.d)(Array.isArray(qW), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(bW(qW), "]")), Array.isArray(qW) && (fW = qW)
      }
      return mW.createElement("g", {
        className: "recharts-cartesian-grid"
      }, mW.createElement(KW, {
        fill: jW.fill,
        fillOpacity: jW.fillOpacity,
        x: jW.x,
        y: jW.y,
        width: jW.width,
        height: jW.height,
        ry: jW.ry
      }), mW.createElement(YW, sW({}, jW, {
        offset: AW,
        horizontalPoints: pW,
        xAxis: vW,
        yAxis: gW
      })), mW.createElement(yW, sW({}, jW, {
        offset: AW,
        verticalPoints: fW,
        xAxis: vW,
        yAxis: gW
      })), mW.createElement(TW, sW({}, jW, {
        horizontalPoints: pW
      })), mW.createElement(JW, sW({}, jW, {
        verticalPoints: fW
      })))
    }
    uW.displayName = "CartesianGrid"
  },
  7190: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => MW
    });
    var mW = OW(62),
      EW = OW(6919),
      NW = OW(6930),
      PW = OW(6390),
      LW = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function cW(WW) {
      return cW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, cW(WW)
    }

    function wW() {
      return wW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, wW.apply(this, arguments)
    }

    function tW(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        var OW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != OW) {
          var mW, EW, NW, PW, LW = [],
            cW = !0,
            wW = !1;
          try {
            if (NW = (OW = OW.call(WW)).next, 0 === iW) {
              if (Object(OW) !== OW) return;
              cW = !1
            } else
              for (; !(cW = (mW = NW.call(OW)).done) && (LW.push(mW.value), LW.length !== iW); cW = !0);
          } catch (WW) {
            wW = !0, EW = WW
          } finally {
            try {
              if (!cW && null != OW.return && (PW = OW.return(), Object(PW) !== PW)) return
            } finally {
              if (wW) throw EW
            }
          }
          return LW
        }
      }(WW, iW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return ZW(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return ZW(WW, iW)
      }(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ZW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function xW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function lW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, sW(mW.key), mW)
      }
    }

    function AW(WW, iW, OW) {
      return iW = jW(iW),
        function(WW, iW) {
          if (iW && ("object" === cW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, bW() ? Reflect.construct(iW, OW || [], jW(WW).constructor) : iW.apply(WW, OW))
    }

    function bW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (bW = function() {
        return !!WW
      })()
    }

    function jW(WW) {
      return jW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, jW(WW)
    }

    function UW(WW, iW) {
      return UW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, UW(WW, iW)
    }

    function kW(WW, iW, OW) {
      return (iW = sW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function sW(WW) {
      var iW = function(WW, iW) {
        if ("object" != cW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != cW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == cW(iW) ? iW : iW + ""
    }
    var MW = function(WW) {
      function iW() {
        return function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, iW), AW(this, iW, arguments)
      }
      return function(WW, iW) {
        if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(iW && iW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), iW && UW(WW, iW)
      }(iW, WW), OW = iW, (cW = [{
        key: "render",
        value: function() {
          var WW = this.props,
            iW = WW.offset,
            OW = WW.layout,
            cW = WW.width,
            ZW = WW.dataKey,
            lW = WW.data,
            AW = WW.dataPointFormatter,
            bW = WW.xAxis,
            jW = WW.yAxis,
            UW = xW(WW, LW),
            kW = (0, PW.e)(UW, !1);
          "x" === this.props.direction && "number" !== bW.type && (0, EW.b)(!1);
          var sW = lW.map((function(WW) {
            var EW = AW(WW, ZW),
              PW = EW.x,
              LW = EW.y,
              xW = EW.value,
              lW = EW.errorVal;
            if (!lW) return null;
            var UW, sW, MW = [];
            if (Array.isArray(lW)) {
              var KW = tW(lW, 2);
              UW = KW[0], sW = KW[1]
            } else UW = sW = lW;
            if ("vertical" === OW) {
              var SW = bW.scale,
                YW = LW + iW,
                yW = YW + cW,
                TW = YW - cW,
                JW = SW(xW - UW),
                hW = SW(xW + sW);
              MW.push({
                x1: hW,
                y1: yW,
                x2: hW,
                y2: TW
              }), MW.push({
                x1: JW,
                y1: YW,
                x2: hW,
                y2: YW
              }), MW.push({
                x1: JW,
                y1: yW,
                x2: JW,
                y2: TW
              })
            } else if ("horizontal" === OW) {
              var HW = jW.scale,
                nW = PW + iW,
                uW = nW - cW,
                oW = nW + cW,
                dW = HW(xW - UW),
                eW = HW(xW + sW);
              MW.push({
                x1: uW,
                y1: eW,
                x2: oW,
                y2: eW
              }), MW.push({
                x1: nW,
                y1: dW,
                x2: nW,
                y2: eW
              }), MW.push({
                x1: uW,
                y1: dW,
                x2: oW,
                y2: dW
              })
            }
            return mW.createElement(NW.c, wW({
              className: "recharts-errorBar",
              key: "bar-".concat(MW.map((function(WW) {
                return "".concat(WW.x1, "-").concat(WW.x2, "-").concat(WW.y1, "-").concat(WW.y2)
              })))
            }, kW), MW.map((function(WW) {
              return mW.createElement("line", wW({}, WW, {
                key: "line-".concat(WW.x1, "-").concat(WW.x2, "-").concat(WW.y1, "-").concat(WW.y2)
              }))
            })))
          }));
          return mW.createElement(NW.c, {
            className: "recharts-errorBars"
          }, sW)
        }
      }]) && lW(OW.prototype, cW), ZW && lW(OW, ZW), Object.defineProperty(OW, "prototype", {
        writable: !1
      }), OW;
      var OW, cW, ZW
    }(mW.Component);
    kW(MW, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), kW(MW, "displayName", "ErrorBar")
  },
  7358: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => VW
    });
    var mW = OW(62),
      EW = OW(7081),
      NW = OW(6223),
      PW = OW.n(NW),
      LW = OW(6382),
      cW = OW.n(LW),
      wW = OW(7175),
      tW = OW.n(wW),
      ZW = OW(6021),
      xW = OW(7348),
      lW = OW(7065),
      AW = OW(6930),
      bW = OW(7265),
      jW = OW(7190),
      UW = OW(6107),
      kW = OW(6390),
      sW = OW(6940),
      MW = OW(7101),
      KW = ["type", "layout", "connectNulls", "ref"],
      SW = ["key"];

    function YW(WW) {
      return YW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, YW(WW)
    }

    function yW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function TW() {
      return TW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, TW.apply(this, arguments)
    }

    function JW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function hW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? JW(Object(OW), !0).forEach((function(iW) {
          gW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : JW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function HW(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return nW(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return nW(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return nW(WW, iW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function uW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, DW(mW.key), mW)
      }
    }

    function oW(WW, iW, OW) {
      return iW = eW(iW),
        function(WW, iW) {
          if (iW && ("object" === YW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, dW() ? Reflect.construct(iW, OW || [], eW(WW).constructor) : iW.apply(WW, OW))
    }

    function dW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (dW = function() {
        return !!WW
      })()
    }

    function eW(WW) {
      return eW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, eW(WW)
    }

    function vW(WW, iW) {
      return vW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, vW(WW, iW)
    }

    function gW(WW, iW, OW) {
      return (iW = DW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function DW(WW) {
      var iW = function(WW, iW) {
        if ("object" != YW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != YW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == YW(iW) ? iW : iW + ""
    }
    var VW = function(WW) {
      function iW() {
        var WW;
        ! function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, iW);
        for (var OW = arguments.length, mW = new Array(OW), EW = 0; EW < OW; EW++) mW[EW] = arguments[EW];
        return gW(WW = oW(this, iW, [].concat(mW)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), gW(WW, "generateSimpleStrokeDasharray", (function(WW, iW) {
          return "".concat(iW, "px ").concat(WW - iW, "px")
        })), gW(WW, "getStrokeDasharray", (function(OW, mW, EW) {
          var NW = EW.reduce((function(WW, iW) {
            return WW + iW
          }));
          if (!NW) return WW.generateSimpleStrokeDasharray(mW, OW);
          for (var PW = Math.floor(OW / NW), LW = OW % NW, cW = mW - OW, wW = [], tW = 0, ZW = 0; tW < EW.length; ZW += EW[tW], ++tW)
            if (ZW + EW[tW] > LW) {
              wW = [].concat(HW(EW.slice(0, tW)), [LW - ZW]);
              break
            } var xW = wW.length % 2 === 0 ? [0, cW] : [cW];
          return [].concat(HW(iW.repeat(EW, PW)), HW(wW), xW).map((function(WW) {
            return "".concat(WW, "px")
          })).join(", ")
        })), gW(WW, "id", (0, UW.B)("recharts-line-")), gW(WW, "pathRef", (function(iW) {
          WW.mainCurve = iW
        })), gW(WW, "handleAnimationEnd", (function() {
          WW.setState({
            isAnimationFinished: !0
          }), WW.props.onAnimationEnd && WW.props.onAnimationEnd()
        })), gW(WW, "handleAnimationStart", (function() {
          WW.setState({
            isAnimationFinished: !1
          }), WW.props.onAnimationStart && WW.props.onAnimationStart()
        })), WW
      }
      return function(WW, iW) {
        if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(iW && iW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), iW && vW(WW, iW)
      }(iW, WW), OW = iW, NW = [{
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
          } catch (iW) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(WW, iW) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var OW = this.props,
            EW = OW.points,
            NW = OW.xAxis,
            PW = OW.yAxis,
            LW = OW.layout,
            cW = OW.children,
            wW = (0, kW.h)(cW, jW.b);
          if (!wW) return null;
          var tW = function(WW, iW) {
              return {
                x: WW.x,
                y: WW.y,
                value: WW.value,
                errorVal: (0, MW.fb)(WW.payload, iW)
              }
            },
            ZW = {
              clipPath: WW ? "url(#clipPath-".concat(iW, ")") : null
            };
          return mW.createElement(AW.c, ZW, wW.map((function(WW) {
            return mW.cloneElement(WW, {
              key: "bar-".concat(WW.props.dataKey),
              data: EW,
              xAxis: NW,
              yAxis: PW,
              layout: LW,
              dataPointFormatter: tW
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(WW, OW, EW) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var NW = this.props,
            PW = NW.dot,
            LW = NW.points,
            cW = NW.dataKey,
            wW = (0, kW.e)(this.props, !1),
            tW = (0, kW.e)(PW, !0),
            ZW = LW.map((function(WW, OW) {
              var mW = hW(hW(hW({
                key: "dot-".concat(OW),
                r: 3
              }, wW), tW), {}, {
                index: OW,
                cx: WW.x,
                cy: WW.y,
                value: WW.value,
                dataKey: cW,
                payload: WW.payload,
                points: LW
              });
              return iW.renderDotItem(PW, mW)
            })),
            xW = {
              clipPath: WW ? "url(#clipPath-".concat(OW ? "" : "dots-").concat(EW, ")") : null
            };
          return mW.createElement(AW.c, TW({
            className: "recharts-line-dots",
            key: "dots"
          }, xW), ZW)
        }
      }, {
        key: "renderCurveStatically",
        value: function(WW, iW, OW, EW) {
          var NW = this.props,
            PW = NW.type,
            LW = NW.layout,
            cW = NW.connectNulls,
            wW = (NW.ref, yW(NW, KW)),
            tW = hW(hW(hW({}, (0, kW.e)(wW, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: iW ? "url(#clipPath-".concat(OW, ")") : null,
              points: WW
            }, EW), {}, {
              type: PW,
              layout: LW,
              connectNulls: cW
            });
          return mW.createElement(xW.c, TW({}, tW, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(WW, iW) {
          var OW = this,
            NW = this.props,
            PW = NW.points,
            LW = NW.strokeDasharray,
            cW = NW.isAnimationActive,
            wW = NW.animationBegin,
            tW = NW.animationDuration,
            ZW = NW.animationEasing,
            xW = NW.animationId,
            lW = NW.animateNewValues,
            AW = NW.width,
            bW = NW.height,
            jW = this.state,
            kW = jW.prevPoints,
            sW = jW.totalLength;
          return mW.createElement(EW.b, {
            kZ: wW,
            duration: tW,
            isActive: cW,
            easing: ZW,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(xW),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(mW) {
            var EW = mW.t;
            if (kW) {
              var NW = kW.length / PW.length,
                cW = PW.map((function(WW, iW) {
                  var OW = Math.floor(iW * NW);
                  if (kW[OW]) {
                    var mW = kW[OW],
                      PW = (0, UW.o)(mW.x, WW.x),
                      LW = (0, UW.o)(mW.y, WW.y);
                    return hW(hW({}, WW), {}, {
                      x: PW(EW),
                      y: LW(EW)
                    })
                  }
                  if (lW) {
                    var cW = (0, UW.o)(2 * AW, WW.x),
                      wW = (0, UW.o)(bW / 2, WW.y);
                    return hW(hW({}, WW), {}, {
                      x: cW(EW),
                      y: wW(EW)
                    })
                  }
                  return hW(hW({}, WW), {}, {
                    x: WW.x,
                    y: WW.y
                  })
                }));
              return OW.renderCurveStatically(cW, WW, iW)
            }
            var wW, tW = (0, UW.o)(0, sW)(EW);
            if (LW) {
              var ZW = "".concat(LW).split(/[,\s]+/gim).map((function(WW) {
                return parseFloat(WW)
              }));
              wW = OW.getStrokeDasharray(tW, sW, ZW)
            } else wW = OW.generateSimpleStrokeDasharray(sW, tW);
            return OW.renderCurveStatically(PW, WW, iW, {
              strokeDasharray: wW
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(WW, iW) {
          var OW = this.props,
            mW = OW.points,
            EW = OW.isAnimationActive,
            NW = this.state,
            PW = NW.prevPoints,
            LW = NW.totalLength;
          return EW && mW && mW.length && (!PW && LW > 0 || !tW()(PW, mW)) ? this.renderCurveWithAnimation(WW, iW) : this.renderCurveStatically(mW, WW, iW)
        }
      }, {
        key: "render",
        value: function() {
          var WW, iW = this.props,
            OW = iW.hide,
            EW = iW.dot,
            NW = iW.points,
            PW = iW.className,
            LW = iW.xAxis,
            wW = iW.yAxis,
            tW = iW.top,
            xW = iW.left,
            lW = iW.width,
            jW = iW.height,
            UW = iW.isAnimationActive,
            sW = iW.id;
          if (OW || !NW || !NW.length) return null;
          var MW = this.state.isAnimationFinished,
            KW = 1 === NW.length,
            SW = (0, ZW.d)("recharts-line", PW),
            YW = LW && LW.allowDataOverflow,
            yW = wW && wW.allowDataOverflow,
            TW = YW || yW,
            JW = cW()(sW) ? this.id : sW,
            hW = null !== (WW = (0, kW.e)(EW, !1)) && void 0 !== WW ? WW : {
              r: 3,
              strokeWidth: 2
            },
            HW = hW.r,
            nW = void 0 === HW ? 3 : HW,
            uW = hW.strokeWidth,
            oW = void 0 === uW ? 2 : uW,
            dW = ((0, kW.v)(EW) ? EW : {}).clipDot,
            eW = void 0 === dW || dW,
            vW = 2 * nW + oW;
          return mW.createElement(AW.c, {
            className: SW
          }, YW || yW ? mW.createElement("defs", null, mW.createElement("clipPath", {
            id: "clipPath-".concat(JW)
          }, mW.createElement("rect", {
            x: YW ? xW : xW - lW / 2,
            y: yW ? tW : tW - jW / 2,
            width: YW ? lW : 2 * lW,
            height: yW ? jW : 2 * jW
          })), !eW && mW.createElement("clipPath", {
            id: "clipPath-dots-".concat(JW)
          }, mW.createElement("rect", {
            x: xW - vW / 2,
            y: tW - vW / 2,
            width: lW + vW,
            height: jW + vW
          }))) : null, !KW && this.renderCurve(TW, JW), this.renderErrorBar(TW, JW), (KW || EW) && this.renderDots(TW, eW, JW), (!UW || MW) && bW.d.renderCallByParent(this.props, NW))
        }
      }], LW = [{
        key: "getDerivedStateFromProps",
        value: function(WW, iW) {
          return WW.animationId !== iW.prevAnimationId ? {
            prevAnimationId: WW.animationId,
            curPoints: WW.points,
            prevPoints: iW.curPoints
          } : WW.points !== iW.curPoints ? {
            curPoints: WW.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(WW, iW) {
          for (var OW = WW.length % 2 !== 0 ? [].concat(HW(WW), [0]) : WW, mW = [], EW = 0; EW < iW; ++EW) mW = [].concat(HW(mW), HW(OW));
          return mW
        }
      }, {
        key: "renderDotItem",
        value: function(WW, iW) {
          var OW;
          if (mW.isValidElement(WW)) OW = mW.cloneElement(WW, iW);
          else if (PW()(WW)) OW = WW(iW);
          else {
            var EW = iW.key,
              NW = yW(iW, SW),
              LW = (0, ZW.d)("recharts-line-dot", "boolean" !== typeof WW ? WW.className : "");
            OW = mW.createElement(lW.c, TW({
              key: EW
            }, NW, {
              className: LW
            }))
          }
          return OW
        }
      }], NW && uW(OW.prototype, NW), LW && uW(OW, LW), Object.defineProperty(OW, "prototype", {
        writable: !1
      }), OW;
      var OW, NW, LW
    }(mW.PureComponent);
    gW(VW, "displayName", "Line"), gW(VW, "defaultProps", {
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
      isAnimationActive: !sW.d.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), gW(VW, "getComposedData", (function(WW) {
      var iW = WW.props,
        OW = WW.xAxis,
        mW = WW.yAxis,
        EW = WW.xAxisTicks,
        NW = WW.yAxisTicks,
        PW = WW.dataKey,
        LW = WW.bandSize,
        wW = WW.displayedData,
        tW = WW.offset,
        ZW = iW.layout;
      return hW({
        points: wW.map((function(WW, iW) {
          var wW = (0, MW.fb)(WW, PW);
          return "horizontal" === ZW ? {
            x: (0, MW.B)({
              axis: OW,
              ticks: EW,
              bandSize: LW,
              entry: WW,
              index: iW
            }),
            y: cW()(wW) ? null : mW.scale(wW),
            value: wW,
            payload: WW
          } : {
            x: cW()(wW) ? null : OW.scale(wW),
            y: (0, MW.B)({
              axis: mW,
              ticks: NW,
              bandSize: LW,
              entry: WW,
              index: iW
            }),
            value: wW,
            payload: WW
          }
        })),
        layout: ZW
      }, tW)
    }))
  },
  7300: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => oW
    });
    var mW = OW(62),
      EW = OW(6223),
      NW = OW.n(EW),
      PW = OW(7303),
      LW = OW.n(PW),
      cW = OW(6021),
      wW = OW(6930),
      tW = OW(7207),
      ZW = OW(7214),
      xW = OW(6107),
      lW = OW(7216),
      AW = OW(6386),
      bW = OW(6390),
      jW = OW(7316);

    function UW(WW) {
      return UW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, UW(WW)
    }

    function kW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, JW(mW.key), mW)
      }
    }

    function sW(WW, iW, OW) {
      return iW = KW(iW),
        function(WW, iW) {
          if (iW && ("object" === UW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, MW() ? Reflect.construct(iW, OW || [], KW(WW).constructor) : iW.apply(WW, OW))
    }

    function MW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (MW = function() {
        return !!WW
      })()
    }

    function KW(WW) {
      return KW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, KW(WW)
    }

    function SW(WW, iW) {
      return SW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, SW(WW, iW)
    }

    function YW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function yW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? YW(Object(OW), !0).forEach((function(iW) {
          TW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : YW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function TW(WW, iW, OW) {
      return (iW = JW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function JW(WW) {
      var iW = function(WW, iW) {
        if ("object" != UW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != UW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == UW(iW) ? iW : iW + ""
    }

    function hW(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        var OW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != OW) {
          var mW, EW, NW, PW, LW = [],
            cW = !0,
            wW = !1;
          try {
            if (NW = (OW = OW.call(WW)).next, 0 === iW) {
              if (Object(OW) !== OW) return;
              cW = !1
            } else
              for (; !(cW = (mW = NW.call(OW)).done) && (LW.push(mW.value), LW.length !== iW); cW = !0);
          } catch (WW) {
            wW = !0, EW = WW
          } finally {
            try {
              if (!cW && null != OW.return && (PW = OW.return(), Object(PW) !== PW)) return
            } finally {
              if (wW) throw EW
            }
          }
          return LW
        }
      }(WW, iW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return HW(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return HW(WW, iW)
      }(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function HW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function nW() {
      return nW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, nW.apply(this, arguments)
    }

    function uW(WW) {
      var iW = WW.x,
        OW = WW.y,
        EW = WW.segment,
        PW = WW.xAxisId,
        UW = WW.yAxisId,
        kW = WW.shape,
        sW = WW.className,
        MW = WW.alwaysShow,
        KW = (0, jW.n)(),
        SW = (0, jW.u)(PW),
        YW = (0, jW.y)(UW),
        TW = (0, jW.r)();
      if (!KW || !TW) return null;
      (0, AW.d)(void 0 === MW, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var JW = function(WW, iW, OW, mW, EW, NW, PW, cW, wW) {
        var tW = EW.x,
          xW = EW.y,
          lW = EW.width,
          AW = EW.height;
        if (OW) {
          var bW = wW.y,
            jW = WW.y.apply(bW, {
              position: NW
            });
          if ((0, ZW.d)(wW, "discard") && !WW.y.isInRange(jW)) return null;
          var UW = [{
            x: tW + lW,
            y: jW
          }, {
            x: tW,
            y: jW
          }];
          return "left" === cW ? UW.reverse() : UW
        }
        if (iW) {
          var kW = wW.x,
            sW = WW.x.apply(kW, {
              position: NW
            });
          if ((0, ZW.d)(wW, "discard") && !WW.x.isInRange(sW)) return null;
          var MW = [{
            x: sW,
            y: xW + AW
          }, {
            x: sW,
            y: xW
          }];
          return "top" === PW ? MW.reverse() : MW
        }
        if (mW) {
          var KW = wW.segment.map((function(iW) {
            return WW.apply(iW, {
              position: NW
            })
          }));
          return (0, ZW.d)(wW, "discard") && LW()(KW, (function(iW) {
            return !WW.isInRange(iW)
          })) ? null : KW
        }
        return null
      }((0, lW.e)({
        x: SW.scale,
        y: YW.scale
      }), (0, xW.u)(iW), (0, xW.u)(OW), EW && 2 === EW.length, TW, WW.position, SW.orientation, YW.orientation, WW);
      if (!JW) return null;
      var HW = hW(JW, 2),
        uW = HW[0],
        oW = uW.x,
        dW = uW.y,
        eW = HW[1],
        vW = eW.x,
        gW = eW.y,
        DW = yW(yW({
          clipPath: (0, ZW.d)(WW, "hidden") ? "url(#".concat(KW, ")") : void 0
        }, (0, bW.e)(WW, !0)), {}, {
          x1: oW,
          y1: dW,
          x2: vW,
          y2: gW
        });
      return mW.createElement(wW.c, {
        className: (0, cW.d)("recharts-reference-line", sW)
      }, function(WW, iW) {
        return mW.isValidElement(WW) ? mW.cloneElement(WW, iW) : NW()(WW) ? WW(iW) : mW.createElement("line", nW({}, iW, {
          className: "recharts-reference-line-line"
        }))
      }(kW, DW), tW.d.renderCallByParent(WW, (0, lW.i)({
        x1: oW,
        y1: dW,
        x2: vW,
        y2: gW
      })))
    }
    var oW = function(WW) {
      function iW() {
        return function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, iW), sW(this, iW, arguments)
      }
      return function(WW, iW) {
        if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(iW && iW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), iW && SW(WW, iW)
      }(iW, WW), OW = iW, (EW = [{
        key: "render",
        value: function() {
          return mW.createElement(uW, this.props)
        }
      }]) && kW(OW.prototype, EW), NW && kW(OW, NW), Object.defineProperty(OW, "prototype", {
        writable: !1
      }), OW;
      var OW, EW, NW
    }(mW.Component);
    TW(oW, "displayName", "ReferenceLine"), TW(oW, "defaultProps", {
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
  7360: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => kW
    });
    var mW = OW(62),
      EW = OW(6021),
      NW = OW(7316),
      PW = OW(7364),
      LW = OW(7101);

    function cW(WW) {
      return cW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, cW(WW)
    }

    function wW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, bW(mW.key), mW)
      }
    }

    function tW(WW, iW, OW) {
      return iW = xW(iW),
        function(WW, iW) {
          if (iW && ("object" === cW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, ZW() ? Reflect.construct(iW, OW || [], xW(WW).constructor) : iW.apply(WW, OW))
    }

    function ZW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (ZW = function() {
        return !!WW
      })()
    }

    function xW(WW) {
      return xW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, xW(WW)
    }

    function lW(WW, iW) {
      return lW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, lW(WW, iW)
    }

    function AW(WW, iW, OW) {
      return (iW = bW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function bW(WW) {
      var iW = function(WW, iW) {
        if ("object" != cW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != cW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == cW(iW) ? iW : iW + ""
    }

    function jW() {
      return jW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, jW.apply(this, arguments)
    }

    function UW(WW) {
      var iW = WW.xAxisId,
        OW = (0, NW.j)(),
        cW = (0, NW.h)(),
        wW = (0, NW.u)(iW);
      return null == wW ? null : mW.createElement(PW.d, jW({}, wW, {
        className: (0, EW.d)("recharts-".concat(wW.axisType, " ").concat(wW.axisType), wW.className),
        viewBox: {
          x: 0,
          y: 0,
          width: OW,
          height: cW
        },
        ticksGenerator: function(WW) {
          return (0, LW.V)(WW, !0)
        }
      }))
    }
    var kW = function(WW) {
      function iW() {
        return function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, iW), tW(this, iW, arguments)
      }
      return function(WW, iW) {
        if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(iW && iW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), iW && lW(WW, iW)
      }(iW, WW), OW = iW, (EW = [{
        key: "render",
        value: function() {
          return mW.createElement(UW, this.props)
        }
      }]) && wW(OW.prototype, EW), NW && wW(OW, NW), Object.defineProperty(OW, "prototype", {
        writable: !1
      }), OW;
      var OW, EW, NW
    }(mW.Component);
    AW(kW, "displayName", "XAxis"), AW(kW, "defaultProps", {
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
  7375: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => kW
    });
    var mW = OW(62),
      EW = OW(6021),
      NW = OW(7316),
      PW = OW(7364),
      LW = OW(7101);

    function cW(WW) {
      return cW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, cW(WW)
    }

    function wW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, bW(mW.key), mW)
      }
    }

    function tW(WW, iW, OW) {
      return iW = xW(iW),
        function(WW, iW) {
          if (iW && ("object" === cW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, ZW() ? Reflect.construct(iW, OW || [], xW(WW).constructor) : iW.apply(WW, OW))
    }

    function ZW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (ZW = function() {
        return !!WW
      })()
    }

    function xW(WW) {
      return xW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, xW(WW)
    }

    function lW(WW, iW) {
      return lW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, lW(WW, iW)
    }

    function AW(WW, iW, OW) {
      return (iW = bW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function bW(WW) {
      var iW = function(WW, iW) {
        if ("object" != cW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != cW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == cW(iW) ? iW : iW + ""
    }

    function jW() {
      return jW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, jW.apply(this, arguments)
    }
    var UW = function(WW) {
        var iW = WW.yAxisId,
          OW = (0, NW.j)(),
          cW = (0, NW.h)(),
          wW = (0, NW.y)(iW);
        return null == wW ? null : mW.createElement(PW.d, jW({}, wW, {
          className: (0, EW.d)("recharts-".concat(wW.axisType, " ").concat(wW.axisType), wW.className),
          viewBox: {
            x: 0,
            y: 0,
            width: OW,
            height: cW
          },
          ticksGenerator: function(WW) {
            return (0, LW.V)(WW, !0)
          }
        }))
      },
      kW = function(WW) {
        function iW() {
          return function(WW, iW) {
            if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
          }(this, iW), tW(this, iW, arguments)
        }
        return function(WW, iW) {
          if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
          WW.prototype = Object.create(iW && iW.prototype, {
            constructor: {
              value: WW,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(WW, "prototype", {
            writable: !1
          }), iW && lW(WW, iW)
        }(iW, WW), OW = iW, (EW = [{
          key: "render",
          value: function() {
            return mW.createElement(UW, this.props)
          }
        }]) && wW(OW.prototype, EW), NW && wW(OW, NW), Object.defineProperty(OW, "prototype", {
          writable: !1
        }), OW;
        var OW, EW, NW
      }(mW.Component);
    AW(kW, "displayName", "YAxis"), AW(kW, "defaultProps", {
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
  7372: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => bW
    });
    var mW = OW(6223),
      EW = OW.n(mW),
      NW = OW(6107),
      PW = OW(7098),
      LW = OW(6940),
      cW = OW(7216);

    function wW(WW, iW, OW) {
      if (iW < 1) return [];
      if (1 === iW && void 0 === OW) return WW;
      for (var mW = [], EW = 0; EW < WW.length; EW += iW) {
        if (void 0 !== OW && !0 !== OW(WW[EW])) return;
        mW.push(WW[EW])
      }
      return mW
    }

    function tW(WW, iW, OW, mW, EW) {
      if (WW * iW < WW * mW || WW * iW > WW * EW) return !1;
      var NW = OW();
      return WW * (iW - WW * NW / 2 - mW) >= 0 && WW * (iW + WW * NW / 2 - EW) <= 0
    }

    function ZW(WW) {
      return ZW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, ZW(WW)
    }

    function xW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function lW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? xW(Object(OW), !0).forEach((function(iW) {
          AW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : xW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function AW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != ZW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != ZW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == ZW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function bW(WW, iW, OW) {
      var mW = WW.hZ,
        ZW = WW.ticks,
        xW = WW.viewBox,
        AW = WW.minTickGap,
        bW = WW.orientation,
        jW = WW.interval,
        UW = WW.tickFormatter,
        kW = WW.unit,
        sW = WW.angle;
      if (!ZW || !ZW.length || !mW) return [];
      if ((0, NW.v)(jW) || LW.d.isSsr) return function(WW, iW) {
        return wW(WW, iW + 1)
      }(ZW, "number" === typeof jW && (0, NW.v)(jW) ? jW : 0);
      var MW = [],
        KW = "top" === bW || "bottom" === bW ? "width" : "height",
        SW = kW && "width" === KW ? (0, PW.g)(kW, {
          fontSize: iW,
          letterSpacing: OW
        }) : {
          width: 0,
          height: 0
        },
        YW = function(WW, mW) {
          var NW = EW()(UW) ? UW(WW.value, mW) : WW.value;
          return "width" === KW ? function(WW, iW, OW) {
            var mW = {
              width: WW.width + iW.width,
              height: WW.height + iW.height
            };
            return (0, cW.h)(mW, OW)
          }((0, PW.g)(NW, {
            fontSize: iW,
            letterSpacing: OW
          }), SW, sW) : (0, PW.g)(NW, {
            fontSize: iW,
            letterSpacing: OW
          })[KW]
        },
        yW = ZW.length >= 2 ? (0, NW.y)(ZW[1].coordinate - ZW[0].coordinate) : 1,
        TW = function(WW, iW, OW) {
          var mW = "width" === OW,
            EW = WW.x,
            NW = WW.y,
            PW = WW.width,
            LW = WW.height;
          return 1 === iW ? {
            start: mW ? EW : NW,
            end: mW ? EW + PW : NW + LW
          } : {
            start: mW ? EW + PW : NW + LW,
            end: mW ? EW : NW
          }
        }(xW, yW, KW);
      return "equidistantPreserveStart" === jW ? function(WW, iW, OW, mW, EW) {
        for (var NW, PW = (mW || []).slice(), LW = iW.start, cW = iW.end, ZW = 0, xW = 1, lW = LW, AW = function() {
            var iW = null === mW || void 0 === mW ? void 0 : mW[ZW];
            if (void 0 === iW) return {
              v: wW(mW, xW)
            };
            var NW, PW = ZW,
              AW = function() {
                return void 0 === NW && (NW = OW(iW, PW)), NW
              },
              bW = iW.coordinate,
              jW = 0 === ZW || tW(WW, bW, AW, lW, cW);
            jW || (ZW = 0, lW = LW, xW += 1), jW && (lW = bW + WW * (AW() / 2 + EW), ZW += xW)
          }; xW <= PW.length;)
          if (NW = AW()) return NW.v;
        return []
      }(yW, TW, YW, ZW, AW) : (MW = "preserveStart" === jW || "preserveStartEnd" === jW ? function(WW, iW, OW, mW, EW, NW) {
        var PW = (mW || []).slice(),
          LW = PW.length,
          cW = iW.start,
          wW = iW.end;
        if (NW) {
          var ZW = mW[LW - 1],
            xW = OW(ZW, LW - 1),
            AW = WW * (ZW.coordinate + WW * xW / 2 - wW);
          PW[LW - 1] = ZW = lW(lW({}, ZW), {}, {
            tickCoord: AW > 0 ? ZW.coordinate - AW * WW : ZW.coordinate
          }), tW(WW, ZW.tickCoord, (function() {
            return xW
          }), cW, wW) && (wW = ZW.tickCoord - WW * (xW / 2 + EW), PW[LW - 1] = lW(lW({}, ZW), {}, {
            isShow: !0
          }))
        }
        for (var bW = NW ? LW - 1 : LW, jW = function(iW) {
            var mW, NW = PW[iW],
              LW = function() {
                return void 0 === mW && (mW = OW(NW, iW)), mW
              };
            if (0 === iW) {
              var ZW = WW * (NW.coordinate - WW * LW() / 2 - cW);
              PW[iW] = NW = lW(lW({}, NW), {}, {
                tickCoord: ZW < 0 ? NW.coordinate - ZW * WW : NW.coordinate
              })
            } else PW[iW] = NW = lW(lW({}, NW), {}, {
              tickCoord: NW.coordinate
            });
            tW(WW, NW.tickCoord, LW, cW, wW) && (cW = NW.tickCoord + WW * (LW() / 2 + EW), PW[iW] = lW(lW({}, NW), {}, {
              isShow: !0
            }))
          }, UW = 0; UW < bW; UW++) jW(UW);
        return PW
      }(yW, TW, YW, ZW, AW, "preserveStartEnd" === jW) : function(WW, iW, OW, mW, EW) {
        for (var NW = (mW || []).slice(), PW = NW.length, LW = iW.start, cW = iW.end, wW = function(iW) {
            var mW, wW = NW[iW],
              ZW = function() {
                return void 0 === mW && (mW = OW(wW, iW)), mW
              };
            if (iW === PW - 1) {
              var xW = WW * (wW.coordinate + WW * ZW() / 2 - cW);
              NW[iW] = wW = lW(lW({}, wW), {}, {
                tickCoord: xW > 0 ? wW.coordinate - xW * WW : wW.coordinate
              })
            } else NW[iW] = wW = lW(lW({}, wW), {}, {
              tickCoord: wW.coordinate
            });
            tW(WW, wW.tickCoord, ZW, LW, cW) && (cW = wW.tickCoord - WW * (ZW() / 2 + EW), NW[iW] = lW(lW({}, wW), {}, {
              isShow: !0
            }))
          }, ZW = PW - 1; ZW >= 0; ZW--) wW(ZW);
        return NW
      }(yW, TW, YW, ZW, AW), MW.filter((function(WW) {
        return WW.isShow
      })))
    }
  },
  7386: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => cW
    });
    var mW = OW(6426),
      EW = OW(7252),
      NW = OW(7360),
      PW = OW(7375),
      LW = OW(7216),
      cW = (0, mW.b)({
        chartName: "BarChart",
        GraphicalChild: EW.e,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: NW.c
        }, {
          axisType: "yAxis",
          AxisComp: PW.e
        }],
        formatAxisMap: LW.f
      })
  },
  6423: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => Ei
    });
    var mW = OW(6426),
      EW = OW(7356),
      NW = OW(7252),
      PW = OW(7358),
      LW = OW(62),
      cW = OW(7081),
      wW = OW(6382),
      tW = OW.n(wW),
      ZW = OW(7175),
      xW = OW.n(ZW),
      lW = OW(6223),
      AW = OW.n(lW),
      bW = OW(6021),
      jW = OW(6930),
      UW = OW(7265),
      kW = OW(6390),
      sW = OW(6940);

    function MW(WW) {
      return MW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, MW(WW)
    }

    function KW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, hW(mW.key), mW)
      }
    }

    function SW(WW, iW, OW) {
      return iW = yW(iW),
        function(WW, iW) {
          if (iW && ("object" === MW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, YW() ? Reflect.construct(iW, OW || [], yW(WW).constructor) : iW.apply(WW, OW))
    }

    function YW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (YW = function() {
        return !!WW
      })()
    }

    function yW(WW) {
      return yW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, yW(WW)
    }

    function TW(WW, iW) {
      return TW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, TW(WW, iW)
    }

    function JW(WW, iW, OW) {
      return (iW = hW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function hW(WW) {
      var iW = function(WW, iW) {
        if ("object" != MW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != MW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == MW(iW) ? iW : iW + ""
    }
    var HW = function(WW) {
      function iW() {
        return function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, iW), SW(this, iW, arguments)
      }
      return function(WW, iW) {
        if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(iW && iW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), iW && TW(WW, iW)
      }(iW, WW), OW = iW, (mW = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && KW(OW.prototype, mW), EW && KW(OW, EW), Object.defineProperty(OW, "prototype", {
        writable: !1
      }), OW;
      var OW, mW, EW
    }(LW.Component);
    JW(HW, "displayName", "ZAxis"), JW(HW, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var nW = OW(7348),
      uW = OW(7190),
      oW = OW(7260),
      dW = OW(6107),
      eW = OW(7101),
      vW = OW(6415),
      gW = OW(6997),
      DW = OW(7275),
      VW = ["option", "isActive"];

    function pW() {
      return pW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, pW.apply(this, arguments)
    }

    function fW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function CW(WW) {
      var iW = WW.option,
        OW = WW.isActive,
        mW = fW(WW, VW);
      return "string" === typeof iW ? LW.createElement(DW.b, pW({
        option: LW.createElement(gW.e, pW({
          type: iW
        }, mW)),
        isActive: OW,
        shapeType: "symbols"
      }, mW)) : LW.createElement(DW.b, pW({
        option: iW,
        isActive: OW,
        shapeType: "symbols"
      }, mW))
    }

    function XW(WW) {
      return XW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, XW(WW)
    }

    function BW() {
      return BW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, BW.apply(this, arguments)
    }

    function qW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function RW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? qW(Object(OW), !0).forEach((function(iW) {
          FW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : qW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function GW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, QW(mW.key), mW)
      }
    }

    function IW(WW, iW, OW) {
      return iW = rW(iW),
        function(WW, iW) {
          if (iW && ("object" === XW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, aW() ? Reflect.construct(iW, OW || [], rW(WW).constructor) : iW.apply(WW, OW))
    }

    function aW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (aW = function() {
        return !!WW
      })()
    }

    function rW(WW) {
      return rW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, rW(WW)
    }

    function zW(WW, iW) {
      return zW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, zW(WW, iW)
    }

    function FW(WW, iW, OW) {
      return (iW = QW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function QW(WW) {
      var iW = function(WW, iW) {
        if ("object" != XW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != XW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == XW(iW) ? iW : iW + ""
    }
    var Wi = function(WW) {
      function iW() {
        var WW;
        ! function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, iW);
        for (var OW = arguments.length, mW = new Array(OW), EW = 0; EW < OW; EW++) mW[EW] = arguments[EW];
        return FW(WW = IW(this, iW, [].concat(mW)), "state", {
          isAnimationFinished: !1
        }), FW(WW, "handleAnimationEnd", (function() {
          WW.setState({
            isAnimationFinished: !0
          })
        })), FW(WW, "handleAnimationStart", (function() {
          WW.setState({
            isAnimationFinished: !1
          })
        })), FW(WW, "id", (0, dW.B)("recharts-scatter-")), WW
      }
      return function(WW, iW) {
        if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(iW && iW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), iW && zW(WW, iW)
      }(iW, WW), OW = iW, mW = [{
        key: "renderSymbolsStatically",
        value: function(WW) {
          var iW = this,
            OW = this.props,
            mW = OW.shape,
            EW = OW.activeShape,
            NW = OW.activeIndex,
            PW = (0, kW.e)(this.props, !1);
          return WW.map((function(WW, OW) {
            var cW = NW === OW,
              wW = cW ? EW : mW,
              tW = RW(RW({}, PW), WW);
            return LW.createElement(jW.c, BW({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === WW || void 0 === WW ? void 0 : WW.cx, "-").concat(null === WW || void 0 === WW ? void 0 : WW.cy, "-").concat(null === WW || void 0 === WW ? void 0 : WW.size, "-").concat(OW)
            }, (0, vW.l)(iW.props, WW, OW), {
              role: "img"
            }), LW.createElement(CW, BW({
              option: wW,
              isActive: cW,
              key: "symbol-".concat(OW)
            }, tW)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var WW = this,
            iW = this.props,
            OW = iW.points,
            mW = iW.isAnimationActive,
            EW = iW.animationBegin,
            NW = iW.animationDuration,
            PW = iW.animationEasing,
            wW = iW.animationId,
            tW = this.state.prevPoints;
          return LW.createElement(cW.b, {
            kZ: EW,
            duration: NW,
            isActive: mW,
            easing: PW,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(wW),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(iW) {
            var mW = iW.t,
              EW = OW.map((function(WW, iW) {
                var OW = tW && tW[iW];
                if (OW) {
                  var EW = (0, dW.o)(OW.cx, WW.cx),
                    NW = (0, dW.o)(OW.cy, WW.cy),
                    PW = (0, dW.o)(OW.size, WW.size);
                  return RW(RW({}, WW), {}, {
                    cx: EW(mW),
                    cy: NW(mW),
                    size: PW(mW)
                  })
                }
                var LW = (0, dW.o)(0, WW.size);
                return RW(RW({}, WW), {}, {
                  size: LW(mW)
                })
              }));
            return LW.createElement(jW.c, null, WW.renderSymbolsStatically(EW))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var WW = this.props,
            iW = WW.points,
            OW = WW.isAnimationActive,
            mW = this.state.prevPoints;
          return !(OW && iW && iW.length) || mW && xW()(mW, iW) ? this.renderSymbolsStatically(iW) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var WW = this.props,
            iW = WW.points,
            OW = WW.xAxis,
            mW = WW.yAxis,
            EW = WW.children,
            NW = (0, kW.h)(EW, uW.b);
          return NW ? NW.map((function(WW, EW) {
            var NW = WW.props,
              PW = NW.direction,
              cW = NW.dataKey;
            return LW.cloneElement(WW, {
              key: "".concat(PW, "-").concat(cW, "-").concat(iW[EW]),
              data: iW,
              xAxis: OW,
              yAxis: mW,
              layout: "x" === PW ? "vertical" : "horizontal",
              dataPointFormatter: function(WW, iW) {
                return {
                  x: WW.cx,
                  y: WW.cy,
                  value: "x" === PW ? +WW.node.x : +WW.node.y,
                  errorVal: (0, eW.fb)(WW, iW)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var WW, iW, OW = this.props,
            mW = OW.points,
            EW = OW.line,
            NW = OW.lineType,
            PW = OW.lineJointType,
            cW = (0, kW.e)(this.props, !1),
            wW = (0, kW.e)(EW, !1);
          if ("joint" === NW) WW = mW.map((function(WW) {
            return {
              x: WW.cx,
              y: WW.cy
            }
          }));
          else if ("fitting" === NW) {
            var tW = (0, dW.l)(mW),
              ZW = tW.xmin,
              xW = tW.xmax,
              lW = tW.a,
              bW = tW.b,
              UW = function(WW) {
                return lW * WW + bW
              };
            WW = [{
              x: ZW,
              y: UW(ZW)
            }, {
              x: xW,
              y: UW(xW)
            }]
          }
          var sW = RW(RW(RW({}, cW), {}, {
            fill: "none",
            stroke: cW && cW.fill
          }, wW), {}, {
            points: WW
          });
          return iW = LW.isValidElement(EW) ? LW.cloneElement(EW, sW) : AW()(EW) ? EW(sW) : LW.createElement(nW.c, BW({}, sW, {
            type: PW
          })), LW.createElement(jW.c, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, iW)
        }
      }, {
        key: "render",
        value: function() {
          var WW = this.props,
            iW = WW.hide,
            OW = WW.points,
            mW = WW.line,
            EW = WW.className,
            NW = WW.xAxis,
            PW = WW.yAxis,
            cW = WW.left,
            wW = WW.top,
            ZW = WW.width,
            xW = WW.height,
            lW = WW.id,
            AW = WW.isAnimationActive;
          if (iW || !OW || !OW.length) return null;
          var kW = this.state.isAnimationFinished,
            sW = (0, bW.d)("recharts-scatter", EW),
            MW = NW && NW.allowDataOverflow,
            KW = PW && PW.allowDataOverflow,
            SW = MW || KW,
            YW = tW()(lW) ? this.id : lW;
          return LW.createElement(jW.c, {
            className: sW,
            clipPath: SW ? "url(#clipPath-".concat(YW, ")") : null
          }, MW || KW ? LW.createElement("defs", null, LW.createElement("clipPath", {
            id: "clipPath-".concat(YW)
          }, LW.createElement("rect", {
            x: MW ? cW : cW - ZW / 2,
            y: KW ? wW : wW - xW / 2,
            width: MW ? ZW : 2 * ZW,
            height: KW ? xW : 2 * xW
          }))) : null, mW && this.renderLine(), this.renderErrorBar(), LW.createElement(jW.c, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!AW || kW) && UW.d.renderCallByParent(this.props, OW))
        }
      }], EW = [{
        key: "getDerivedStateFromProps",
        value: function(WW, iW) {
          return WW.animationId !== iW.prevAnimationId ? {
            prevAnimationId: WW.animationId,
            curPoints: WW.points,
            prevPoints: iW.curPoints
          } : WW.points !== iW.curPoints ? {
            curPoints: WW.points
          } : null
        }
      }], mW && GW(OW.prototype, mW), EW && GW(OW, EW), Object.defineProperty(OW, "prototype", {
        writable: !1
      }), OW;
      var OW, mW, EW
    }(LW.PureComponent);
    FW(Wi, "displayName", "Scatter"), FW(Wi, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !sW.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), FW(Wi, "getComposedData", (function(WW) {
      var iW = WW.xAxis,
        OW = WW.yAxis,
        mW = WW.zAxis,
        EW = WW.item,
        NW = WW.displayedData,
        PW = WW.xAxisTicks,
        LW = WW.yAxisTicks,
        cW = WW.offset,
        wW = EW.props.tooltipType,
        ZW = (0, kW.h)(EW.props.children, oW.b),
        xW = tW()(iW.dataKey) ? EW.props.dataKey : iW.dataKey,
        lW = tW()(OW.dataKey) ? EW.props.dataKey : OW.dataKey,
        AW = mW && mW.dataKey,
        bW = mW ? mW.range : HW.defaultProps.range,
        jW = bW && bW[0],
        UW = iW.scale.bandwidth ? iW.scale.bandwidth() : 0,
        sW = OW.scale.bandwidth ? OW.scale.bandwidth() : 0,
        MW = NW.map((function(WW, NW) {
          var cW = (0, eW.fb)(WW, xW),
            bW = (0, eW.fb)(WW, lW),
            kW = !tW()(AW) && (0, eW.fb)(WW, AW) || "-",
            MW = [{
              name: tW()(iW.dataKey) ? EW.props.name : iW.name || iW.dataKey,
              unit: iW.unit || "",
              value: cW,
              payload: WW,
              dataKey: xW,
              type: wW
            }, {
              name: tW()(OW.dataKey) ? EW.props.name : OW.name || OW.dataKey,
              unit: OW.unit || "",
              value: bW,
              payload: WW,
              dataKey: lW,
              type: wW
            }];
          "-" !== kW && MW.push({
            name: mW.name || mW.dataKey,
            unit: mW.unit || "",
            value: kW,
            payload: WW,
            dataKey: AW,
            type: wW
          });
          var KW = (0, eW.B)({
              axis: iW,
              ticks: PW,
              bandSize: UW,
              entry: WW,
              index: NW,
              dataKey: xW
            }),
            SW = (0, eW.B)({
              axis: OW,
              ticks: LW,
              bandSize: sW,
              entry: WW,
              index: NW,
              dataKey: lW
            }),
            YW = "-" !== kW ? mW.scale(kW) : jW,
            yW = Math.sqrt(Math.max(YW, 0) / Math.PI);
          return RW(RW({}, WW), {}, {
            cx: KW,
            cy: SW,
            x: KW - yW,
            y: SW - yW,
            xAxis: iW,
            yAxis: OW,
            zAxis: mW,
            width: 2 * yW,
            height: 2 * yW,
            size: YW,
            node: {
              x: cW,
              y: bW,
              z: kW
            },
            tooltipPayload: MW,
            tooltipPosition: {
              x: KW,
              y: SW
            },
            payload: WW
          }, ZW && ZW[NW] && ZW[NW].props)
        }));
      return RW({
        points: MW
      }, cW)
    }));
    var ii = OW(7360),
      Oi = OW(7375),
      mi = OW(7216),
      Ei = (0, mW.b)({
        chartName: "ComposedChart",
        GraphicalChild: [PW.c, EW.b, NW.e, Wi],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: ii.c
        }, {
          axisType: "yAxis",
          AxisComp: Oi.e
        }, {
          axisType: "zAxis",
          AxisComp: HW
        }],
        formatAxisMap: mi.f
      })
  },
  6426: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => CO
    });
    var mW = OW(62),
      EW = OW(6382),
      NW = OW.n(EW),
      PW = OW(6223),
      LW = OW.n(PW),
      cW = OW(6433),
      wW = OW.n(cW),
      tW = OW(6135),
      ZW = OW.n(tW),
      xW = OW(6483),
      lW = OW.n(xW),
      AW = OW(6023),
      bW = OW.n(AW),
      jW = OW(6021),
      UW = OW(6919),
      kW = OW(6923),
      sW = OW(6930),
      MW = OW(6936),
      KW = OW(6992),
      SW = OW(7065),
      YW = OW(7072),
      yW = OW(6390),
      TW = OW(7108),
      JW = OW(7090),
      hW = OW(7101),
      HW = OW(6107);

    function nW(WW) {
      return nW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, nW(WW)
    }

    function uW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function oW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? uW(Object(OW), !0).forEach((function(iW) {
          dW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : uW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function dW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != nW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != nW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == nW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }
    var eW = ["Webkit", "Moz", "O", "ms"];

    function vW(WW) {
      return vW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, vW(WW)
    }

    function gW() {
      return gW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, gW.apply(this, arguments)
    }

    function DW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function VW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? DW(Object(OW), !0).forEach((function(iW) {
          qW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : DW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function pW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, RW(mW.key), mW)
      }
    }

    function fW(WW, iW, OW) {
      return iW = XW(iW),
        function(WW, iW) {
          if (iW && ("object" === vW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, CW() ? Reflect.construct(iW, OW || [], XW(WW).constructor) : iW.apply(WW, OW))
    }

    function CW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (CW = function() {
        return !!WW
      })()
    }

    function XW(WW) {
      return XW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, XW(WW)
    }

    function BW(WW, iW) {
      return BW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, BW(WW, iW)
    }

    function qW(WW, iW, OW) {
      return (iW = RW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function RW(WW) {
      var iW = function(WW, iW) {
        if ("object" != vW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != vW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == vW(iW) ? iW : iW + ""
    }
    var GW = function(WW) {
        return WW.changedTouches && !!WW.changedTouches.length
      },
      IW = function(WW) {
        function iW(WW) {
          var OW;
          return function(WW, iW) {
            if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
          }(this, iW), qW(OW = fW(this, iW, [WW]), "handleDrag", (function(WW) {
            OW.leaveTimer && (clearTimeout(OW.leaveTimer), OW.leaveTimer = null), OW.state.isTravellerMoving ? OW.handleTravellerMove(WW) : OW.state.isSlideMoving && OW.handleSlideDrag(WW)
          })), qW(OW, "handleTouchMove", (function(WW) {
            null != WW.changedTouches && WW.changedTouches.length > 0 && OW.handleDrag(WW.changedTouches[0])
          })), qW(OW, "handleDragEnd", (function() {
            OW.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var WW = OW.props,
                iW = WW.endIndex,
                mW = WW.onDragEnd,
                EW = WW.startIndex;
              null === mW || void 0 === mW || mW({
                endIndex: iW,
                startIndex: EW
              })
            })), OW.detachDragEndListener()
          })), qW(OW, "handleLeaveWrapper", (function() {
            (OW.state.isTravellerMoving || OW.state.isSlideMoving) && (OW.leaveTimer = window.setTimeout(OW.handleDragEnd, OW.props.leaveTimeOut))
          })), qW(OW, "handleEnterSlideOrTraveller", (function() {
            OW.setState({
              isTextActive: !0
            })
          })), qW(OW, "handleLeaveSlideOrTraveller", (function() {
            OW.setState({
              isTextActive: !1
            })
          })), qW(OW, "handleSlideDragStart", (function(WW) {
            var iW = GW(WW) ? WW.changedTouches[0] : WW;
            OW.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: iW.pageX
            }), OW.attachDragEndListener()
          })), OW.travellerDragStartHandlers = {
            startX: OW.handleTravellerDragStart.bind(OW, "startX"),
            endX: OW.handleTravellerDragStart.bind(OW, "endX")
          }, OW.state = {}, OW
        }
        return function(WW, iW) {
          if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
          WW.prototype = Object.create(iW && iW.prototype, {
            constructor: {
              value: WW,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(WW, "prototype", {
            writable: !1
          }), iW && BW(WW, iW)
        }(iW, WW), OW = iW, EW = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(WW) {
            var OW = WW.startX,
              mW = WW.endX,
              EW = this.state.scaleValues,
              NW = this.props,
              PW = NW.gap,
              LW = NW.data.length - 1,
              cW = Math.min(OW, mW),
              wW = Math.max(OW, mW),
              tW = iW.getIndexInRange(EW, cW),
              ZW = iW.getIndexInRange(EW, wW);
            return {
              startIndex: tW - tW % PW,
              endIndex: ZW === LW ? LW : ZW - ZW % PW
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(WW) {
            var iW = this.props,
              OW = iW.data,
              mW = iW.tickFormatter,
              EW = iW.dataKey,
              NW = (0, hW.fb)(OW[WW], EW, WW);
            return LW()(mW) ? mW(NW, WW) : NW
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
            var iW = this.state,
              OW = iW.slideMoveStartX,
              mW = iW.startX,
              EW = iW.endX,
              NW = this.props,
              PW = NW.x,
              LW = NW.width,
              cW = NW.travellerWidth,
              wW = NW.startIndex,
              tW = NW.endIndex,
              ZW = NW.onChange,
              xW = WW.pageX - OW;
            xW > 0 ? xW = Math.min(xW, PW + LW - cW - EW, PW + LW - cW - mW) : xW < 0 && (xW = Math.max(xW, PW - mW, PW - EW));
            var lW = this.getIndex({
              startX: mW + xW,
              endX: EW + xW
            });
            lW.startIndex === wW && lW.endIndex === tW || !ZW || ZW(lW), this.setState({
              startX: mW + xW,
              endX: EW + xW,
              slideMoveStartX: WW.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(WW, iW) {
            var OW = GW(iW) ? iW.changedTouches[0] : iW;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: WW,
              brushMoveStartX: OW.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(WW) {
            var iW = this.state,
              OW = iW.brushMoveStartX,
              mW = iW.movingTravellerId,
              EW = iW.endX,
              NW = iW.startX,
              PW = this.state[mW],
              LW = this.props,
              cW = LW.x,
              wW = LW.width,
              tW = LW.travellerWidth,
              ZW = LW.onChange,
              xW = LW.gap,
              lW = LW.data,
              AW = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              bW = WW.pageX - OW;
            bW > 0 ? bW = Math.min(bW, cW + wW - tW - PW) : bW < 0 && (bW = Math.max(bW, cW - PW)), AW[mW] = PW + bW;
            var jW = this.getIndex(AW),
              UW = jW.startIndex,
              kW = jW.endIndex;
            this.setState(qW(qW({}, mW, PW + bW), "brushMoveStartX", WW.pageX), (function() {
              ZW && function() {
                var WW = lW.length - 1;
                return "startX" === mW && (EW > NW ? UW % xW === 0 : kW % xW === 0) || EW < NW && kW === WW || "endX" === mW && (EW > NW ? kW % xW === 0 : UW % xW === 0) || EW > NW && kW === WW
              }() && ZW(jW)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(WW, iW) {
            var OW = this,
              mW = this.state,
              EW = mW.scaleValues,
              NW = mW.startX,
              PW = mW.endX,
              LW = this.state[iW],
              cW = EW.indexOf(LW);
            if (-1 !== cW) {
              var wW = cW + WW;
              if (!(-1 === wW || wW >= EW.length)) {
                var tW = EW[wW];
                "startX" === iW && tW >= PW || "endX" === iW && tW <= NW || this.setState(qW({}, iW, tW), (function() {
                  OW.props.onChange(OW.getIndex({
                    startX: OW.state.startX,
                    endX: OW.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var WW = this.props,
              iW = WW.x,
              OW = WW.y,
              EW = WW.width,
              NW = WW.height,
              PW = WW.fill,
              LW = WW.stroke;
            return mW.createElement("rect", {
              stroke: LW,
              fill: PW,
              x: iW,
              y: OW,
              width: EW,
              height: NW
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var WW = this.props,
              iW = WW.x,
              OW = WW.y,
              EW = WW.width,
              NW = WW.height,
              PW = WW.data,
              LW = WW.children,
              cW = WW.padding,
              wW = mW.Children.only(LW);
            return wW ? mW.cloneElement(wW, {
              x: iW,
              y: OW,
              width: EW,
              height: NW,
              margin: cW,
              compact: !0,
              data: PW
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(WW, OW) {
            var EW, NW, PW = this,
              LW = this.props,
              cW = LW.y,
              wW = LW.travellerWidth,
              tW = LW.height,
              ZW = LW.traveller,
              xW = LW.ariaLabel,
              lW = LW.data,
              AW = LW.startIndex,
              bW = LW.endIndex,
              jW = Math.max(WW, this.props.x),
              UW = VW(VW({}, (0, yW.e)(this.props, !1)), {}, {
                x: jW,
                y: cW,
                width: wW,
                height: tW
              }),
              kW = xW || "Min value: ".concat(null === (EW = lW[AW]) || void 0 === EW ? void 0 : EW.name, ", Max value: ").concat(null === (NW = lW[bW]) || void 0 === NW ? void 0 : NW.name);
            return mW.createElement(sW.c, {
              tabIndex: 0,
              role: "slider",
              "aria-label": kW,
              "aria-valuenow": WW,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[OW],
              onTouchStart: this.travellerDragStartHandlers[OW],
              onKeyDown: function(WW) {
                ["ArrowLeft", "ArrowRight"].includes(WW.key) && (WW.preventDefault(), WW.stopPropagation(), PW.handleTravellerMoveKeyboard("ArrowRight" === WW.key ? 1 : -1, OW))
              },
              onFocus: function() {
                PW.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                PW.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, iW.renderTraveller(ZW, UW))
          }
        }, {
          key: "renderSlide",
          value: function(WW, iW) {
            var OW = this.props,
              EW = OW.y,
              NW = OW.height,
              PW = OW.stroke,
              LW = OW.travellerWidth,
              cW = Math.min(WW, iW) + LW,
              wW = Math.max(Math.abs(iW - WW) - LW, 0);
            return mW.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: PW,
              fillOpacity: .2,
              x: cW,
              y: EW,
              width: wW,
              height: NW
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var WW = this.props,
              iW = WW.startIndex,
              OW = WW.endIndex,
              EW = WW.y,
              NW = WW.height,
              PW = WW.travellerWidth,
              LW = WW.stroke,
              cW = this.state,
              wW = cW.startX,
              tW = cW.endX,
              ZW = {
                pointerEvents: "none",
                fill: LW
              };
            return mW.createElement(sW.c, {
              className: "recharts-brush-texts"
            }, mW.createElement(JW.b, gW({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(wW, tW) - 5,
              y: EW + NW / 2
            }, ZW), this.getTextOfTick(iW)), mW.createElement(JW.b, gW({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(wW, tW) + PW + 5,
              y: EW + NW / 2
            }, ZW), this.getTextOfTick(OW)))
          }
        }, {
          key: "render",
          value: function() {
            var WW = this.props,
              iW = WW.data,
              OW = WW.className,
              EW = WW.children,
              NW = WW.x,
              PW = WW.y,
              LW = WW.width,
              cW = WW.height,
              wW = WW.alwaysShowText,
              tW = this.state,
              ZW = tW.startX,
              xW = tW.endX,
              lW = tW.isTextActive,
              AW = tW.isSlideMoving,
              bW = tW.isTravellerMoving,
              UW = tW.isTravellerFocused;
            if (!iW || !iW.length || !(0, HW.v)(NW) || !(0, HW.v)(PW) || !(0, HW.v)(LW) || !(0, HW.v)(cW) || LW <= 0 || cW <= 0) return null;
            var kW = (0, jW.d)("recharts-brush", OW),
              MW = 1 === mW.Children.count(EW),
              KW = function(WW, iW) {
                if (!WW) return null;
                var OW = WW.replace(/(\w)/, (function(WW) {
                    return WW.toUpperCase()
                  })),
                  mW = eW.reduce((function(WW, mW) {
                    return oW(oW({}, WW), {}, dW({}, mW + OW, iW))
                  }), {});
                return mW[WW] = iW, mW
              }("userSelect", "none");
            return mW.createElement(sW.c, {
              className: kW,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: KW
            }, this.renderBackground(), MW && this.renderPanorama(), this.renderSlide(ZW, xW), this.renderTravellerLayer(ZW, "startX"), this.renderTravellerLayer(xW, "endX"), (lW || AW || bW || UW || wW) && this.renderText())
          }
        }], NW = [{
          key: "renderDefaultTraveller",
          value: function(WW) {
            var iW = WW.x,
              OW = WW.y,
              EW = WW.width,
              NW = WW.height,
              PW = WW.stroke,
              LW = Math.floor(OW + NW / 2) - 1;
            return mW.createElement(mW.Fragment, null, mW.createElement("rect", {
              x: iW,
              y: OW,
              width: EW,
              height: NW,
              fill: PW,
              stroke: "none"
            }), mW.createElement("line", {
              x1: iW + 1,
              y1: LW,
              x2: iW + EW - 1,
              y2: LW,
              fill: "none",
              stroke: "#fff"
            }), mW.createElement("line", {
              x1: iW + 1,
              y1: LW + 2,
              x2: iW + EW - 1,
              y2: LW + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(WW, OW) {
            return mW.isValidElement(WW) ? mW.cloneElement(WW, OW) : LW()(WW) ? WW(OW) : iW.renderDefaultTraveller(OW)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(WW, iW) {
            var OW = WW.data,
              mW = WW.width,
              EW = WW.x,
              NW = WW.travellerWidth,
              PW = WW.updateId,
              LW = WW.startIndex,
              cW = WW.endIndex;
            if (OW !== iW.prevData || PW !== iW.prevUpdateId) return VW({
              prevData: OW,
              prevTravellerWidth: NW,
              prevUpdateId: PW,
              prevX: EW,
              prevWidth: mW
            }, OW && OW.length ? function(WW) {
              var iW = WW.data,
                OW = WW.startIndex,
                mW = WW.endIndex,
                EW = WW.x,
                NW = WW.width,
                PW = WW.travellerWidth;
              if (!iW || !iW.length) return {};
              var LW = iW.length,
                cW = (0, TW.g)().domain(wW()(0, LW)).range([EW, EW + NW - PW]),
                tW = cW.domain().map((function(WW) {
                  return cW(WW)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: cW(OW),
                endX: cW(mW),
                scale: cW,
                scaleValues: tW
              }
            }({
              data: OW,
              width: mW,
              x: EW,
              travellerWidth: NW,
              startIndex: LW,
              endIndex: cW
            }) : {
              scale: null,
              scaleValues: null
            });
            if (iW.scale && (mW !== iW.prevWidth || EW !== iW.prevX || NW !== iW.prevTravellerWidth)) {
              iW.scale.range([EW, EW + mW - NW]);
              var tW = iW.scale.domain().map((function(WW) {
                return iW.scale(WW)
              }));
              return {
                prevData: OW,
                prevTravellerWidth: NW,
                prevUpdateId: PW,
                prevX: EW,
                prevWidth: mW,
                startX: iW.scale(WW.startIndex),
                endX: iW.scale(WW.endIndex),
                scaleValues: tW
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(WW, iW) {
            for (var OW = 0, mW = WW.length - 1; mW - OW > 1;) {
              var EW = Math.floor((OW + mW) / 2);
              WW[EW] > iW ? mW = EW : OW = EW
            }
            return iW >= WW[mW] ? mW : OW
          }
        }], EW && pW(OW.prototype, EW), NW && pW(OW, NW), Object.defineProperty(OW, "prototype", {
          writable: !1
        }), OW;
        var OW, EW, NW
      }(mW.PureComponent);
    qW(IW, "displayName", "Brush"), qW(IW, "defaultProps", {
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
    var aW = OW(7098),
      rW = OW(7196),
      zW = OW(7207),
      FW = OW(7214),
      QW = OW(7216),
      Wi = OW(6386);

    function ii() {
      return ii = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, ii.apply(this, arguments)
    }

    function Oi(WW) {
      return Oi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, Oi(WW)
    }

    function mi(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function Ei(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? mi(Object(OW), !0).forEach((function(iW) {
          ti(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : mi(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function Ni(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, Zi(mW.key), mW)
      }
    }

    function Pi(WW, iW, OW) {
      return iW = ci(iW),
        function(WW, iW) {
          if (iW && ("object" === Oi(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, Li() ? Reflect.construct(iW, OW || [], ci(WW).constructor) : iW.apply(WW, OW))
    }

    function Li() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (Li = function() {
        return !!WW
      })()
    }

    function ci(WW) {
      return ci = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, ci(WW)
    }

    function wi(WW, iW) {
      return wi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, wi(WW, iW)
    }

    function ti(WW, iW, OW) {
      return (iW = Zi(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function Zi(WW) {
      var iW = function(WW, iW) {
        if ("object" != Oi(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != Oi(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == Oi(iW) ? iW : iW + ""
    }
    var xi = function(WW) {
      function iW() {
        return function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, iW), Pi(this, iW, arguments)
      }
      return function(WW, iW) {
        if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(iW && iW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), iW && wi(WW, iW)
      }(iW, WW), OW = iW, (EW = [{
        key: "render",
        value: function() {
          var WW = this.props,
            OW = WW.x,
            EW = WW.y,
            NW = WW.r,
            PW = WW.alwaysShow,
            LW = WW.clipPathId,
            cW = (0, HW.u)(OW),
            wW = (0, HW.u)(EW);
          if ((0, Wi.d)(void 0 === PW, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !cW || !wW) return null;
          var tW = function(WW) {
            var iW = WW.x,
              OW = WW.y,
              mW = WW.xAxis,
              EW = WW.yAxis,
              NW = (0, QW.e)({
                x: mW.scale,
                y: EW.scale
              }),
              PW = NW.apply({
                x: iW,
                y: OW
              }, {
                bandAware: !0
              });
            return (0, FW.d)(WW, "discard") && !NW.isInRange(PW) ? null : PW
          }(this.props);
          if (!tW) return null;
          var ZW = tW.x,
            xW = tW.y,
            lW = this.props,
            AW = lW.shape,
            bW = lW.className,
            UW = Ei(Ei({
              clipPath: (0, FW.d)(this.props, "hidden") ? "url(#".concat(LW, ")") : void 0
            }, (0, yW.e)(this.props, !0)), {}, {
              cx: ZW,
              cy: xW
            });
          return mW.createElement(sW.c, {
            className: (0, jW.d)("recharts-reference-dot", bW)
          }, iW.renderDot(AW, UW), zW.d.renderCallByParent(this.props, {
            x: ZW - NW,
            y: xW - NW,
            width: 2 * NW,
            height: 2 * NW
          }))
        }
      }]) && Ni(OW.prototype, EW), NW && Ni(OW, NW), Object.defineProperty(OW, "prototype", {
        writable: !1
      }), OW;
      var OW, EW, NW
    }(mW.Component);
    ti(xi, "displayName", "ReferenceDot"), ti(xi, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), ti(xi, "renderDot", (function(WW, iW) {
      return mW.isValidElement(WW) ? mW.cloneElement(WW, iW) : LW()(WW) ? WW(iW) : mW.createElement(SW.c, ii({}, iW, {
        cx: iW.cx,
        cy: iW.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var li = OW(7300);

    function Ai() {
      return Ai = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, Ai.apply(this, arguments)
    }

    function bi(WW) {
      return bi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, bi(WW)
    }

    function ji(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function Ui(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? ji(Object(OW), !0).forEach((function(iW) {
          Yi(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : ji(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function ki(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, yi(mW.key), mW)
      }
    }

    function si(WW, iW, OW) {
      return iW = Ki(iW),
        function(WW, iW) {
          if (iW && ("object" === bi(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, Mi() ? Reflect.construct(iW, OW || [], Ki(WW).constructor) : iW.apply(WW, OW))
    }

    function Mi() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (Mi = function() {
        return !!WW
      })()
    }

    function Ki(WW) {
      return Ki = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, Ki(WW)
    }

    function Si(WW, iW) {
      return Si = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, Si(WW, iW)
    }

    function Yi(WW, iW, OW) {
      return (iW = yi(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function yi(WW) {
      var iW = function(WW, iW) {
        if ("object" != bi(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != bi(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == bi(iW) ? iW : iW + ""
    }
    var Ti = function(WW) {
      function iW() {
        return function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, iW), si(this, iW, arguments)
      }
      return function(WW, iW) {
        if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(iW && iW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), iW && Si(WW, iW)
      }(iW, WW), OW = iW, (EW = [{
        key: "render",
        value: function() {
          var WW = this.props,
            OW = WW.x1,
            EW = WW.x2,
            NW = WW.y1,
            PW = WW.y2,
            LW = WW.className,
            cW = WW.alwaysShow,
            wW = WW.clipPathId;
          (0, Wi.d)(void 0 === cW, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var tW = (0, HW.u)(OW),
            ZW = (0, HW.u)(EW),
            xW = (0, HW.u)(NW),
            lW = (0, HW.u)(PW),
            AW = this.props.shape;
          if (!tW && !ZW && !xW && !lW && !AW) return null;
          var bW = function(WW, iW, OW, mW, EW) {
            var NW = EW.x1,
              PW = EW.x2,
              LW = EW.y1,
              cW = EW.y2,
              wW = EW.xAxis,
              tW = EW.yAxis;
            if (!wW || !tW) return null;
            var ZW = (0, QW.e)({
                x: wW.scale,
                y: tW.scale
              }),
              xW = {
                x: WW ? ZW.x.apply(NW, {
                  position: "start"
                }) : ZW.x.rangeMin,
                y: OW ? ZW.y.apply(LW, {
                  position: "start"
                }) : ZW.y.rangeMin
              },
              lW = {
                x: iW ? ZW.x.apply(PW, {
                  position: "end"
                }) : ZW.x.rangeMax,
                y: mW ? ZW.y.apply(cW, {
                  position: "end"
                }) : ZW.y.rangeMax
              };
            return !(0, FW.d)(EW, "discard") || ZW.isInRange(xW) && ZW.isInRange(lW) ? (0, QW.m)(xW, lW) : null
          }(tW, ZW, xW, lW, this.props);
          if (!bW && !AW) return null;
          var UW = (0, FW.d)(this.props, "hidden") ? "url(#".concat(wW, ")") : void 0;
          return mW.createElement(sW.c, {
            className: (0, jW.d)("recharts-reference-area", LW)
          }, iW.renderRect(AW, Ui(Ui({
            clipPath: UW
          }, (0, yW.e)(this.props, !0)), bW)), zW.d.renderCallByParent(this.props, bW))
        }
      }]) && ki(OW.prototype, EW), NW && ki(OW, NW), Object.defineProperty(OW, "prototype", {
        writable: !1
      }), OW;
      var OW, EW, NW
    }(mW.Component);

    function Ji(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return Hi(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return Hi(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return Hi(WW, iW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Hi(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }
    Yi(Ti, "displayName", "ReferenceArea"), Yi(Ti, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), Yi(Ti, "renderRect", (function(WW, iW) {
      return mW.isValidElement(WW) ? mW.cloneElement(WW, iW) : LW()(WW) ? WW(iW) : mW.createElement(YW.e, Ai({}, iW, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var ni = function(WW, iW, OW, mW, EW) {
        var NW = (0, yW.h)(WW, li.c),
          PW = (0, yW.h)(WW, xi),
          LW = [].concat(Ji(NW), Ji(PW)),
          cW = (0, yW.h)(WW, Ti),
          wW = "".concat(mW, "Id"),
          tW = mW[0],
          ZW = iW;
        if (LW.length && (ZW = LW.reduce((function(WW, iW) {
            if (iW.props[wW] === OW && (0, FW.d)(iW.props, "extendDomain") && (0, HW.v)(iW.props[tW])) {
              var mW = iW.props[tW];
              return [Math.min(WW[0], mW), Math.max(WW[1], mW)]
            }
            return WW
          }), ZW)), cW.length) {
          var xW = "".concat(tW, "1"),
            lW = "".concat(tW, "2");
          ZW = cW.reduce((function(WW, iW) {
            if (iW.props[wW] === OW && (0, FW.d)(iW.props, "extendDomain") && (0, HW.v)(iW.props[xW]) && (0, HW.v)(iW.props[lW])) {
              var mW = iW.props[xW],
                EW = iW.props[lW];
              return [Math.min(WW[0], mW, EW), Math.max(WW[1], mW, EW)]
            }
            return WW
          }), ZW)
        }
        return EW && EW.length && (ZW = EW.reduce((function(WW, iW) {
          return (0, HW.v)(iW) ? [Math.min(WW[0], iW), Math.max(WW[1], iW)] : WW
        }), ZW)), ZW
      },
      ui = OW(7211),
      oi = OW(6408),
      di = OW(35),
      ei = new(OW.n(di)()),
      vi = "recharts.syncMouseEvents",
      gi = OW(6415);

    function Di(WW) {
      return Di = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, Di(WW)
    }

    function Vi(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, Ci(mW.key), mW)
      }
    }

    function fi(WW, iW, OW) {
      return (iW = Ci(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function Ci(WW) {
      var iW = function(WW, iW) {
        if ("object" != Di(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != Di(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == Di(iW) ? iW : iW + ""
    }
    var Xi = function() {
      return WW = function WW() {
        ! function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, WW), fi(this, "activeIndex", 0), fi(this, "coordinateList", []), fi(this, "layout", "horizontal")
      }, (iW = [{
        key: "setDetails",
        value: function(WW) {
          var iW, OW = WW.coordinateList,
            mW = void 0 === OW ? null : OW,
            EW = WW.container,
            NW = void 0 === EW ? null : EW,
            PW = WW.layout,
            LW = void 0 === PW ? null : PW,
            cW = WW.offset,
            wW = void 0 === cW ? null : cW,
            tW = WW.mouseHandlerCallback,
            ZW = void 0 === tW ? null : tW;
          this.coordinateList = null !== (iW = null !== mW && void 0 !== mW ? mW : this.coordinateList) && void 0 !== iW ? iW : [], this.container = null !== NW && void 0 !== NW ? NW : this.container, this.layout = null !== LW && void 0 !== LW ? LW : this.layout, this.offset = null !== wW && void 0 !== wW ? wW : this.offset, this.mouseHandlerCallback = null !== ZW && void 0 !== ZW ? ZW : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
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
          var WW, iW;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var OW = this.container.getBoundingClientRect(),
              mW = OW.x,
              EW = OW.y,
              NW = OW.height,
              PW = this.coordinateList[this.activeIndex].coordinate,
              LW = (null === (WW = window) || void 0 === WW ? void 0 : WW.scrollX) || 0,
              cW = (null === (iW = window) || void 0 === iW ? void 0 : iW.scrollY) || 0,
              wW = mW + PW + LW,
              tW = EW + this.offset.top + NW / 2 + cW;
            this.mouseHandlerCallback({
              pageX: wW,
              pageY: tW
            })
          }
        }
      }]) && Vi(WW.prototype, iW), OW && Vi(WW, OW), Object.defineProperty(WW, "prototype", {
        writable: !1
      }), WW;
      var WW, iW, OW
    }();
    var Bi = OW(7275),
      qi = OW(7348);

    function Ri(WW) {
      return Ri = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, Ri(WW)
    }
    var Gi = ["x", "y", "top", "left", "width", "height", "className"];

    function Ii() {
      return Ii = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, Ii.apply(this, arguments)
    }

    function ai(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function ri(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != Ri(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != Ri(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == Ri(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function zi(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }
    var Fi = function(WW, iW, OW, mW, EW, NW) {
        return "M".concat(WW, ",").concat(EW, "v").concat(mW, "M").concat(NW, ",").concat(iW, "h").concat(OW)
      },
      Qi = function(WW) {
        var iW = WW.x,
          OW = void 0 === iW ? 0 : iW,
          EW = WW.y,
          NW = void 0 === EW ? 0 : EW,
          PW = WW.top,
          LW = void 0 === PW ? 0 : PW,
          cW = WW.left,
          wW = void 0 === cW ? 0 : cW,
          tW = WW.width,
          ZW = void 0 === tW ? 0 : tW,
          xW = WW.height,
          lW = void 0 === xW ? 0 : xW,
          AW = WW.className,
          bW = function(WW) {
            for (var iW = 1; iW < arguments.length; iW++) {
              var OW = null != arguments[iW] ? arguments[iW] : {};
              iW % 2 ? ai(Object(OW), !0).forEach((function(iW) {
                ri(WW, iW, OW[iW])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : ai(Object(OW)).forEach((function(iW) {
                Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
              }))
            }
            return WW
          }({
            x: OW,
            y: NW,
            top: LW,
            left: wW,
            width: ZW,
            height: lW
          }, zi(WW, Gi));
        return (0, HW.v)(OW) && (0, HW.v)(NW) && (0, HW.v)(ZW) && (0, HW.v)(lW) && (0, HW.v)(LW) && (0, HW.v)(wW) ? mW.createElement("path", Ii({}, (0, yW.e)(bW, !0), {
          className: (0, jW.d)("recharts-cross", AW),
          d: Fi(OW, NW, ZW, lW, LW, wW)
        })) : null
      };

    function WO(WW) {
      var iW = WW.cx,
        OW = WW.cy,
        mW = WW.radius,
        EW = WW.startAngle,
        NW = WW.endAngle;
      return {
        points: [(0, ui.i)(iW, OW, mW, EW), (0, ui.i)(iW, OW, mW, NW)],
        cx: iW,
        cy: OW,
        radius: mW,
        startAngle: EW,
        endAngle: NW
      }
    }
    var iO = OW(7297);

    function OO(WW, iW, OW) {
      var mW, EW, NW, PW;
      if ("horizontal" === WW) NW = mW = iW.x, EW = OW.top, PW = OW.top + OW.height;
      else if ("vertical" === WW) PW = EW = iW.y, mW = OW.left, NW = OW.left + OW.width;
      else if (null != iW.cx && null != iW.cy) {
        if ("centric" !== WW) return WO(iW);
        var LW = iW.cx,
          cW = iW.cy,
          wW = iW.innerRadius,
          tW = iW.outerRadius,
          ZW = iW.angle,
          xW = (0, ui.i)(LW, cW, wW, ZW),
          lW = (0, ui.i)(LW, cW, tW, ZW);
        mW = xW.x, EW = xW.y, NW = lW.x, PW = lW.y
      }
      return [{
        x: mW,
        y: EW
      }, {
        x: NW,
        y: PW
      }]
    }

    function mO(WW) {
      return mO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, mO(WW)
    }

    function EO(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function NO(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? EO(Object(OW), !0).forEach((function(iW) {
          PO(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : EO(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function PO(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != mO(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != mO(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == mO(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function LO(WW) {
      var iW, OW, EW, NW = WW.element,
        PW = WW.tooltipEventType,
        LW = WW.isActive,
        cW = WW.activeCoordinate,
        wW = WW.activePayload,
        tW = WW.offset,
        ZW = WW.activeTooltipIndex,
        xW = WW.tooltipAxisBandSize,
        lW = WW.layout,
        AW = WW.chartName,
        bW = null !== (iW = NW.props.cursor) && void 0 !== iW ? iW : null === (OW = NW.type.defaultProps) || void 0 === OW ? void 0 : OW.cursor;
      if (!NW || !bW || !LW || !cW || "ScatterChart" !== AW && "axis" !== PW) return null;
      var UW = qi.c;
      if ("ScatterChart" === AW) EW = cW, UW = Qi;
      else if ("BarChart" === AW) EW = function(WW, iW, OW, mW) {
        var EW = mW / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === WW ? iW.x - EW : OW.left + .5,
          y: "horizontal" === WW ? OW.top + .5 : iW.y - EW,
          width: "horizontal" === WW ? mW : OW.width - 1,
          height: "horizontal" === WW ? OW.height - 1 : mW
        }
      }(lW, cW, tW, xW), UW = YW.e;
      else if ("radial" === lW) {
        var kW = WO(cW),
          sW = kW.cx,
          MW = kW.cy,
          KW = kW.radius;
        EW = {
          cx: sW,
          cy: MW,
          startAngle: kW.startAngle,
          endAngle: kW.endAngle,
          innerRadius: KW,
          outerRadius: KW
        }, UW = iO.d
      } else EW = {
        points: OO(lW, cW, tW)
      }, UW = qi.c;
      var SW = NO(NO(NO(NO({
        stroke: "#ccc",
        pointerEvents: "none"
      }, tW), EW), (0, yW.e)(bW, !1)), {}, {
        payload: wW,
        payloadIndex: ZW,
        className: (0, jW.d)("recharts-tooltip-cursor", bW.className)
      });
      return (0, mW.isValidElement)(bW) ? (0, mW.cloneElement)(bW, SW) : (0, mW.createElement)(UW, SW)
    }
    var cO = OW(7316),
      wO = ["item"],
      tO = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function ZO(WW) {
      return ZO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, ZO(WW)
    }

    function xO() {
      return xO = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, xO.apply(this, arguments)
    }

    function lO(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        var OW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != OW) {
          var mW, EW, NW, PW, LW = [],
            cW = !0,
            wW = !1;
          try {
            if (NW = (OW = OW.call(WW)).next, 0 === iW) {
              if (Object(OW) !== OW) return;
              cW = !1
            } else
              for (; !(cW = (mW = NW.call(OW)).done) && (LW.push(mW.value), LW.length !== iW); cW = !0);
          } catch (WW) {
            wW = !0, EW = WW
          } finally {
            try {
              if (!cW && null != OW.return && (PW = OW.return(), Object(PW) !== PW)) return
            } finally {
              if (wW) throw EW
            }
          }
          return LW
        }
      }(WW, iW) || KO(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AO(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function bO(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, JO(mW.key), mW)
      }
    }

    function jO(WW, iW, OW) {
      return iW = kO(iW),
        function(WW, iW) {
          if (iW && ("object" === ZO(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, UO() ? Reflect.construct(iW, OW || [], kO(WW).constructor) : iW.apply(WW, OW))
    }

    function UO() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (UO = function() {
        return !!WW
      })()
    }

    function kO(WW) {
      return kO = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, kO(WW)
    }

    function sO(WW, iW) {
      return sO = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, sO(WW, iW)
    }

    function MO(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return SO(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || KO(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function KO(WW, iW) {
      if (WW) {
        if ("string" === typeof WW) return SO(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        return "Object" === OW && WW.constructor && (OW = WW.constructor.name), "Map" === OW || "Set" === OW ? Array.from(WW) : "Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW) ? SO(WW, iW) : void 0
      }
    }

    function SO(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function YO(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function yO(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? YO(Object(OW), !0).forEach((function(iW) {
          TO(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : YO(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function TO(WW, iW, OW) {
      return (iW = JO(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function JO(WW) {
      var iW = function(WW, iW) {
        if ("object" != ZO(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != ZO(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == ZO(iW) ? iW : iW + ""
    }
    var hO = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      HO = {
        width: "100%",
        height: "100%"
      },
      nO = {
        x: 0,
        y: 0
      };

    function uO(WW) {
      return WW
    }
    var oO = function(WW, iW) {
      var OW = iW.graphicalItems,
        mW = iW.dataStartIndex,
        EW = iW.dataEndIndex,
        NW = (null !== OW && void 0 !== OW ? OW : []).reduce((function(WW, iW) {
          var OW = iW.props.data;
          return OW && OW.length ? [].concat(MO(WW), MO(OW)) : WW
        }), []);
      return NW.length > 0 ? NW : WW && WW.length && (0, HW.v)(mW) && (0, HW.v)(EW) ? WW.slice(mW, EW + 1) : []
    };

    function dO(WW) {
      return "number" === WW ? [0, "auto"] : void 0
    }
    var eO = function(WW, iW, OW, mW) {
        var EW = WW.graphicalItems,
          NW = WW.tooltipAxis,
          PW = oO(iW, WW);
        return OW < 0 || !EW || !EW.length || OW >= PW.length ? null : EW.reduce((function(EW, LW) {
          var cW, wW, tW = null !== (cW = LW.props.data) && void 0 !== cW ? cW : iW;
          if (tW && WW.dataStartIndex + WW.dataEndIndex !== 0 && WW.dataEndIndex - WW.dataStartIndex >= OW && (tW = tW.slice(WW.dataStartIndex, WW.dataEndIndex + 1)), NW.dataKey && !NW.allowDuplicatedCategory) {
            var ZW = void 0 === tW ? PW : tW;
            wW = (0, HW.f)(ZW, NW.dataKey, mW)
          } else wW = tW && tW[OW] || PW[OW];
          return wW ? [].concat(MO(EW), [(0, hW.bb)(LW, wW)]) : EW
        }), [])
      },
      vO = function(WW, iW, OW, mW) {
        var EW = mW || {
            x: WW.chartX,
            y: WW.chartY
          },
          NW = function(WW, iW) {
            return "horizontal" === iW ? WW.x : "vertical" === iW ? WW.y : "centric" === iW ? WW.angle : WW.radius
          }(EW, OW),
          PW = WW.orderedTooltipTicks,
          LW = WW.tooltipAxis,
          cW = WW.tooltipTicks,
          wW = (0, hW.f)(NW, PW, cW, LW);
        if (wW >= 0 && cW) {
          var tW = cW[wW] && cW[wW].value,
            ZW = eO(WW, iW, wW, tW),
            xW = function(WW, iW, OW, mW) {
              var EW = iW.find((function(WW) {
                return WW && WW.index === OW
              }));
              if (EW) {
                if ("horizontal" === WW) return {
                  x: EW.coordinate,
                  y: mW.y
                };
                if ("vertical" === WW) return {
                  x: mW.x,
                  y: EW.coordinate
                };
                if ("centric" === WW) {
                  var NW = EW.coordinate,
                    PW = mW.radius;
                  return yO(yO(yO({}, mW), (0, ui.i)(mW.cx, mW.cy, PW, NW)), {}, {
                    angle: NW,
                    radius: PW
                  })
                }
                var LW = EW.coordinate,
                  cW = mW.angle;
                return yO(yO(yO({}, mW), (0, ui.i)(mW.cx, mW.cy, LW, cW)), {}, {
                  angle: cW,
                  radius: LW
                })
              }
              return nO
            }(OW, PW, wW, EW);
          return {
            activeTooltipIndex: wW,
            activeLabel: tW,
            activePayload: ZW,
            activeCoordinate: xW
          }
        }
        return null
      },
      gO = function(WW, iW) {
        var OW = iW.axes,
          mW = iW.graphicalItems,
          EW = iW.axisType,
          PW = iW.axisIdKey,
          LW = iW.stackGroups,
          cW = iW.dataStartIndex,
          tW = iW.dataEndIndex,
          ZW = WW.layout,
          xW = WW.children,
          lW = WW.stackOffset,
          AW = (0, hW.ib)(ZW, EW);
        return OW.reduce((function(iW, OW) {
          var bW, jW = void 0 !== OW.type.defaultProps ? yO(yO({}, OW.type.defaultProps), OW.props) : OW.props,
            UW = jW.type,
            kW = jW.dataKey,
            sW = jW.allowDataOverflow,
            MW = jW.allowDuplicatedCategory,
            KW = jW.scale,
            SW = jW.ticks,
            YW = jW.includeHidden,
            yW = jW[PW];
          if (iW[yW]) return iW;
          var TW, JW, nW, uW = oO(WW.data, {
              graphicalItems: mW.filter((function(WW) {
                var iW;
                return (PW in WW.props ? WW.props[PW] : null === (iW = WW.type.defaultProps) || void 0 === iW ? void 0 : iW[PW]) === yW
              })),
              dataStartIndex: cW,
              dataEndIndex: tW
            }),
            oW = uW.length;
          (function(WW, iW, OW) {
            if ("number" === OW && !0 === iW && Array.isArray(WW)) {
              var mW = null === WW || void 0 === WW ? void 0 : WW[0],
                EW = null === WW || void 0 === WW ? void 0 : WW[1];
              if (mW && EW && (0, HW.v)(mW) && (0, HW.v)(EW)) return !0
            }
            return !1
          })(jW.domain, sW, UW) && (TW = (0, hW.pb)(jW.domain, null, sW), !AW || "number" !== UW && "auto" === KW || (nW = (0, hW.H)(uW, kW, "category")));
          var dW = dO(UW);
          if (!TW || 0 === TW.length) {
            var eW, vW = null !== (eW = jW.domain) && void 0 !== eW ? eW : dW;
            if (kW) {
              if (TW = (0, hW.H)(uW, kW, UW), "category" === UW && AW) {
                var gW = (0, HW.n)(TW);
                MW && gW ? (JW = TW, TW = wW()(0, oW)) : MW || (TW = (0, hW.jb)(vW, TW, OW).reduce((function(WW, iW) {
                  return WW.indexOf(iW) >= 0 ? WW : [].concat(MO(WW), [iW])
                }), []))
              } else if ("category" === UW) TW = MW ? TW.filter((function(WW) {
                return "" !== WW && !NW()(WW)
              })) : (0, hW.jb)(vW, TW, OW).reduce((function(WW, iW) {
                return WW.indexOf(iW) >= 0 || "" === iW || NW()(iW) ? WW : [].concat(MO(WW), [iW])
              }), []);
              else if ("number" === UW) {
                var DW = (0, hW.kb)(uW, mW.filter((function(WW) {
                  var iW, OW, mW = PW in WW.props ? WW.props[PW] : null === (iW = WW.type.defaultProps) || void 0 === iW ? void 0 : iW[PW],
                    EW = "hide" in WW.props ? WW.props.hide : null === (OW = WW.type.defaultProps) || void 0 === OW ? void 0 : OW.hide;
                  return mW === yW && (YW || !EW)
                })), kW, EW, ZW);
                DW && (TW = DW)
              }!AW || "number" !== UW && "auto" === KW || (nW = (0, hW.H)(uW, kW, "category"))
            } else TW = AW ? wW()(0, oW) : LW && LW[yW] && LW[yW].hasStack && "number" === UW ? "expand" === lW ? [0, 1] : (0, hW.N)(LW[yW].stackGroups, cW, tW) : (0, hW.K)(uW, mW.filter((function(WW) {
              var iW = PW in WW.props ? WW.props[PW] : WW.type.defaultProps[PW],
                OW = "hide" in WW.props ? WW.props.hide : WW.type.defaultProps.hide;
              return iW === yW && (YW || !OW)
            })), UW, ZW, !0);
            if ("number" === UW) TW = ni(xW, TW, yW, EW, SW), vW && (TW = (0, hW.pb)(vW, TW, sW));
            else if ("category" === UW && vW) {
              var VW = vW;
              TW.every((function(WW) {
                return VW.indexOf(WW) >= 0
              })) && (TW = VW)
            }
          }
          return yO(yO({}, iW), {}, TO({}, yW, yO(yO({}, jW), {}, {
            axisType: EW,
            domain: TW,
            categoricalDomain: nW,
            duplicateDomain: JW,
            originalDomain: null !== (bW = jW.domain) && void 0 !== bW ? bW : dW,
            isCategorical: AW,
            layout: ZW
          })))
        }), {})
      },
      DO = function(WW, iW) {
        var OW = iW.axisType,
          mW = void 0 === OW ? "xAxis" : OW,
          EW = iW.AxisComp,
          NW = iW.graphicalItems,
          PW = iW.stackGroups,
          LW = iW.dataStartIndex,
          cW = iW.dataEndIndex,
          tW = WW.children,
          xW = "".concat(mW, "Id"),
          lW = (0, yW.h)(tW, EW),
          AW = {};
        return lW && lW.length ? AW = gO(WW, {
          axes: lW,
          graphicalItems: NW,
          axisType: mW,
          axisIdKey: xW,
          stackGroups: PW,
          dataStartIndex: LW,
          dataEndIndex: cW
        }) : NW && NW.length && (AW = function(WW, iW) {
          var OW = iW.graphicalItems,
            mW = iW.Axis,
            EW = iW.axisType,
            NW = iW.axisIdKey,
            PW = iW.stackGroups,
            LW = iW.dataStartIndex,
            cW = iW.dataEndIndex,
            tW = WW.layout,
            xW = WW.children,
            lW = oO(WW.data, {
              graphicalItems: OW,
              dataStartIndex: LW,
              dataEndIndex: cW
            }),
            AW = lW.length,
            bW = (0, hW.ib)(tW, EW),
            jW = -1;
          return OW.reduce((function(WW, iW) {
            var UW, kW = (void 0 !== iW.type.defaultProps ? yO(yO({}, iW.type.defaultProps), iW.props) : iW.props)[NW],
              sW = dO("number");
            return WW[kW] ? WW : (jW++, bW ? UW = wW()(0, AW) : PW && PW[kW] && PW[kW].hasStack ? (UW = (0, hW.N)(PW[kW].stackGroups, LW, cW), UW = ni(xW, UW, kW, EW)) : (UW = (0, hW.pb)(sW, (0, hW.K)(lW, OW.filter((function(WW) {
              var iW, OW, mW = NW in WW.props ? WW.props[NW] : null === (iW = WW.type.defaultProps) || void 0 === iW ? void 0 : iW[NW],
                EW = "hide" in WW.props ? WW.props.hide : null === (OW = WW.type.defaultProps) || void 0 === OW ? void 0 : OW.hide;
              return mW === kW && !EW
            })), "number", tW), mW.defaultProps.allowDataOverflow), UW = ni(xW, UW, kW, EW)), yO(yO({}, WW), {}, TO({}, kW, yO(yO({
              axisType: EW
            }, mW.defaultProps), {}, {
              hide: !0,
              orientation: ZW()(hO, "".concat(EW, ".").concat(jW % 2), null),
              domain: UW,
              originalDomain: sW,
              isCategorical: bW,
              layout: tW
            }))))
          }), {})
        }(WW, {
          Axis: EW,
          graphicalItems: NW,
          axisType: mW,
          axisIdKey: xW,
          stackGroups: PW,
          dataStartIndex: LW,
          dataEndIndex: cW
        })), AW
      },
      VO = function(WW) {
        var iW = WW.children,
          OW = WW.defaultShowTooltip,
          mW = (0, yW.l)(iW, IW),
          EW = 0,
          NW = 0;
        return WW.data && 0 !== WW.data.length && (NW = WW.data.length - 1), mW && mW.props && (mW.props.startIndex >= 0 && (EW = mW.props.startIndex), mW.props.endIndex >= 0 && (NW = mW.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: EW,
          dataEndIndex: NW,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(OW)
        }
      },
      pO = function(WW) {
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
      fO = function(WW, iW) {
        return "xAxis" === iW ? WW[iW].width : "yAxis" === iW ? WW[iW].height : void 0
      },
      CO = function(WW) {
        var iW = WW.chartName,
          OW = WW.GraphicalChild,
          EW = WW.defaultTooltipEventType,
          PW = void 0 === EW ? "axis" : EW,
          cW = WW.validateTooltipEventTypes,
          wW = void 0 === cW ? ["axis"] : cW,
          tW = WW.axisComponents,
          xW = WW.legendContent,
          AW = WW.formatAxisMap,
          TW = WW.defaultProps,
          JW = function(WW, iW) {
            var OW = iW.graphicalItems,
              mW = iW.stackGroups,
              EW = iW.offset,
              PW = iW.updateId,
              LW = iW.dataStartIndex,
              cW = iW.dataEndIndex,
              wW = WW.barSize,
              ZW = WW.layout,
              xW = WW.barGap,
              lW = WW.barCategoryGap,
              AW = WW.maxBarSize,
              bW = pO(ZW),
              jW = bW.numericAxisName,
              kW = bW.cateAxisName,
              sW = function(WW) {
                return !(!WW || !WW.length) && WW.some((function(WW) {
                  var iW = (0, yW.p)(WW && WW.type);
                  return iW && iW.indexOf("Bar") >= 0
                }))
              }(OW),
              MW = [];
            return OW.forEach((function(OW, bW) {
              var KW = oO(WW.data, {
                  graphicalItems: [OW],
                  dataStartIndex: LW,
                  dataEndIndex: cW
                }),
                SW = void 0 !== OW.type.defaultProps ? yO(yO({}, OW.type.defaultProps), OW.props) : OW.props,
                YW = SW.dataKey,
                TW = SW.maxBarSize,
                JW = SW["".concat(jW, "Id")],
                HW = SW["".concat(kW, "Id")],
                nW = tW.reduce((function(WW, OW) {
                  var mW = iW["".concat(OW.axisType, "Map")],
                    EW = SW["".concat(OW.axisType, "Id")];
                  mW && mW[EW] || "zAxis" === OW.axisType || (0, UW.b)(!1);
                  var NW = mW[EW];
                  return yO(yO({}, WW), {}, TO(TO({}, OW.axisType, NW), "".concat(OW.axisType, "Ticks"), (0, hW.V)(NW)))
                }), {}),
                uW = nW[kW],
                oW = nW["".concat(kW, "Ticks")],
                dW = mW && mW[JW] && mW[JW].hasStack && (0, hW.S)(OW, mW[JW].stackGroups),
                eW = (0, yW.p)(OW.type).indexOf("Bar") >= 0,
                vW = (0, hW.m)(uW, oW),
                gW = [],
                DW = sW && (0, hW.t)({
                  barSize: wW,
                  stackGroups: mW,
                  totalSize: fO(nW, kW)
                });
              if (eW) {
                var VW, pW, fW = NW()(TW) ? AW : TW,
                  CW = null !== (VW = null !== (pW = (0, hW.m)(uW, oW, !0)) && void 0 !== pW ? pW : fW) && void 0 !== VW ? VW : 0;
                gW = (0, hW.p)({
                  barGap: xW,
                  barCategoryGap: lW,
                  bandSize: CW !== vW ? CW : vW,
                  sizeList: DW[HW],
                  maxBarSize: fW
                }), CW !== vW && (gW = gW.map((function(WW) {
                  return yO(yO({}, WW), {}, {
                    position: yO(yO({}, WW.position), {}, {
                      offset: WW.position.offset - CW / 2
                    })
                  })
                })))
              }
              var XW = OW && OW.type && OW.type.getComposedData;
              XW && MW.push({
                props: yO(yO({}, XW(yO(yO({}, nW), {}, {
                  displayedData: KW,
                  props: WW,
                  dataKey: YW,
                  item: OW,
                  bandSize: vW,
                  barPosition: gW,
                  offset: EW,
                  stackedData: dW,
                  layout: ZW,
                  dataStartIndex: LW,
                  dataEndIndex: cW
                }))), {}, TO(TO(TO({
                  key: OW.key || "item-".concat(bW)
                }, jW, nW[jW]), kW, nW[kW]), "animationId", PW)),
                childIndex: (0, yW.B)(OW, WW.children),
                item: OW
              })
            })), MW
          },
          nW = function(WW, mW) {
            var EW = WW.props,
              NW = WW.dataStartIndex,
              PW = WW.dataEndIndex,
              LW = WW.updateId;
            if (!(0, yW.D)({
                props: EW
              })) return null;
            var cW = EW.children,
              wW = EW.layout,
              xW = EW.stackOffset,
              bW = EW.data,
              jW = EW.reverseStackOrder,
              UW = pO(wW),
              kW = UW.numericAxisName,
              sW = UW.cateAxisName,
              MW = (0, yW.h)(cW, OW),
              SW = (0, hW.Q)(bW, MW, "".concat(kW, "Id"), "".concat(sW, "Id"), xW, jW),
              YW = tW.reduce((function(WW, iW) {
                var OW = "".concat(iW.axisType, "Map");
                return yO(yO({}, WW), {}, TO({}, OW, DO(EW, yO(yO({}, iW), {}, {
                  graphicalItems: MW,
                  stackGroups: iW.axisType === kW && SW,
                  dataStartIndex: NW,
                  dataEndIndex: PW
                }))))
              }), {}),
              TW = function(WW, iW) {
                var OW = WW.props,
                  mW = WW.graphicalItems,
                  EW = WW.xAxisMap,
                  NW = void 0 === EW ? {} : EW,
                  PW = WW.yAxisMap,
                  LW = void 0 === PW ? {} : PW,
                  cW = OW.width,
                  wW = OW.height,
                  tW = OW.children,
                  xW = OW.margin || {},
                  lW = (0, yW.l)(tW, IW),
                  AW = (0, yW.l)(tW, KW.c),
                  bW = Object.keys(LW).reduce((function(WW, iW) {
                    var OW = LW[iW],
                      mW = OW.orientation;
                    return OW.mirror || OW.hide ? WW : yO(yO({}, WW), {}, TO({}, mW, WW[mW] + OW.width))
                  }), {
                    left: xW.left || 0,
                    right: xW.right || 0
                  }),
                  jW = Object.keys(NW).reduce((function(WW, iW) {
                    var OW = NW[iW],
                      mW = OW.orientation;
                    return OW.mirror || OW.hide ? WW : yO(yO({}, WW), {}, TO({}, mW, ZW()(WW, "".concat(mW)) + OW.height))
                  }), {
                    top: xW.top || 0,
                    bottom: xW.bottom || 0
                  }),
                  UW = yO(yO({}, jW), bW),
                  kW = UW.bottom;
                lW && (UW.bottom += lW.props.height || IW.defaultProps.height), AW && iW && (UW = (0, hW.e)(UW, mW, OW, iW));
                var sW = cW - UW.left - UW.right,
                  MW = wW - UW.top - UW.bottom;
                return yO(yO({
                  brushBottom: kW
                }, UW), {}, {
                  width: Math.max(sW, 0),
                  height: Math.max(MW, 0)
                })
              }(yO(yO({}, YW), {}, {
                props: EW,
                graphicalItems: MW
              }), null === mW || void 0 === mW ? void 0 : mW.legendBBox);
            Object.keys(YW).forEach((function(WW) {
              YW[WW] = AW(EW, YW[WW], TW, WW.replace("Map", ""), iW)
            }));
            var nW = function(WW) {
                var iW = (0, HW.i)(WW),
                  OW = (0, hW.V)(iW, !1, !0);
                return {
                  tooltipTicks: OW,
                  orderedTooltipTicks: lW()(OW, (function(WW) {
                    return WW.coordinate
                  })),
                  tooltipAxis: iW,
                  tooltipAxisBandSize: (0, hW.m)(iW, OW)
                }
              }(YW["".concat(sW, "Map")]),
              uW = JW(EW, yO(yO({}, YW), {}, {
                dataStartIndex: NW,
                dataEndIndex: PW,
                updateId: LW,
                graphicalItems: MW,
                stackGroups: SW,
                offset: TW
              }));
            return yO(yO({
              formattedGraphicalItems: uW,
              graphicalItems: MW,
              offset: TW,
              stackGroups: SW
            }, nW), YW)
          },
          uW = function(WW) {
            function OW(WW) {
              var EW, PW, cW;
              return function(WW, iW) {
                if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
              }(this, OW), TO(cW = jO(this, OW, [WW]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), TO(cW, "accessibilityManager", new Xi), TO(cW, "handleLegendBBoxUpdate", (function(WW) {
                if (WW) {
                  var iW = cW.state,
                    OW = iW.dataStartIndex,
                    mW = iW.dataEndIndex,
                    EW = iW.updateId;
                  cW.setState(yO({
                    legendBBox: WW
                  }, nW({
                    props: cW.props,
                    dataStartIndex: OW,
                    dataEndIndex: mW,
                    updateId: EW
                  }, yO(yO({}, cW.state), {}, {
                    legendBBox: WW
                  }))))
                }
              })), TO(cW, "handleReceiveSyncEvent", (function(WW, iW, OW) {
                if (cW.props.syncId === WW) {
                  if (OW === cW.eventEmitterSymbol && "function" !== typeof cW.props.syncMethod) return;
                  cW.applySyncEvent(iW)
                }
              })), TO(cW, "handleBrushChange", (function(WW) {
                var iW = WW.startIndex,
                  OW = WW.endIndex;
                if (iW !== cW.state.dataStartIndex || OW !== cW.state.dataEndIndex) {
                  var mW = cW.state.updateId;
                  cW.setState((function() {
                    return yO({
                      dataStartIndex: iW,
                      dataEndIndex: OW
                    }, nW({
                      props: cW.props,
                      dataStartIndex: iW,
                      dataEndIndex: OW,
                      updateId: mW
                    }, cW.state))
                  })), cW.triggerSyncEvent({
                    dataStartIndex: iW,
                    dataEndIndex: OW
                  })
                }
              })), TO(cW, "handleMouseEnter", (function(WW) {
                var iW = cW.getMouseInfo(WW);
                if (iW) {
                  var OW = yO(yO({}, iW), {}, {
                    isTooltipActive: !0
                  });
                  cW.setState(OW), cW.triggerSyncEvent(OW);
                  var mW = cW.props.onMouseEnter;
                  LW()(mW) && mW(OW, WW)
                }
              })), TO(cW, "triggeredAfterMouseMove", (function(WW) {
                var iW = cW.getMouseInfo(WW),
                  OW = iW ? yO(yO({}, iW), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                cW.setState(OW), cW.triggerSyncEvent(OW);
                var mW = cW.props.onMouseMove;
                LW()(mW) && mW(OW, WW)
              })), TO(cW, "handleItemMouseEnter", (function(WW) {
                cW.setState((function() {
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
              })), TO(cW, "handleItemMouseLeave", (function() {
                cW.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), TO(cW, "handleMouseMove", (function(WW) {
                WW.persist(), cW.throttleTriggeredAfterMouseMove(WW)
              })), TO(cW, "handleMouseLeave", (function(WW) {
                cW.throttleTriggeredAfterMouseMove.cancel();
                var iW = {
                  isTooltipActive: !1
                };
                cW.setState(iW), cW.triggerSyncEvent(iW);
                var OW = cW.props.onMouseLeave;
                LW()(OW) && OW(iW, WW)
              })), TO(cW, "handleOuterEvent", (function(WW) {
                var iW, OW = (0, yW.r)(WW),
                  mW = ZW()(cW.props, "".concat(OW));
                OW && LW()(mW) && mW(null !== (iW = /.*touch.*/i.test(OW) ? cW.getMouseInfo(WW.changedTouches[0]) : cW.getMouseInfo(WW)) && void 0 !== iW ? iW : {}, WW)
              })), TO(cW, "handleClick", (function(WW) {
                var iW = cW.getMouseInfo(WW);
                if (iW) {
                  var OW = yO(yO({}, iW), {}, {
                    isTooltipActive: !0
                  });
                  cW.setState(OW), cW.triggerSyncEvent(OW);
                  var mW = cW.props.onClick;
                  LW()(mW) && mW(OW, WW)
                }
              })), TO(cW, "handleMouseDown", (function(WW) {
                var iW = cW.props.onMouseDown;
                LW()(iW) && iW(cW.getMouseInfo(WW), WW)
              })), TO(cW, "handleMouseUp", (function(WW) {
                var iW = cW.props.onMouseUp;
                LW()(iW) && iW(cW.getMouseInfo(WW), WW)
              })), TO(cW, "handleTouchMove", (function(WW) {
                null != WW.changedTouches && WW.changedTouches.length > 0 && cW.throttleTriggeredAfterMouseMove(WW.changedTouches[0])
              })), TO(cW, "handleTouchStart", (function(WW) {
                null != WW.changedTouches && WW.changedTouches.length > 0 && cW.handleMouseDown(WW.changedTouches[0])
              })), TO(cW, "handleTouchEnd", (function(WW) {
                null != WW.changedTouches && WW.changedTouches.length > 0 && cW.handleMouseUp(WW.changedTouches[0])
              })), TO(cW, "handleDoubleClick", (function(WW) {
                var iW = cW.props.onDoubleClick;
                LW()(iW) && iW(cW.getMouseInfo(WW), WW)
              })), TO(cW, "handleContextMenu", (function(WW) {
                var iW = cW.props.onContextMenu;
                LW()(iW) && iW(cW.getMouseInfo(WW), WW)
              })), TO(cW, "triggerSyncEvent", (function(WW) {
                void 0 !== cW.props.syncId && ei.emit(vi, cW.props.syncId, WW, cW.eventEmitterSymbol)
              })), TO(cW, "applySyncEvent", (function(WW) {
                var iW = cW.props,
                  OW = iW.layout,
                  mW = iW.syncMethod,
                  EW = cW.state.updateId,
                  NW = WW.dataStartIndex,
                  PW = WW.dataEndIndex;
                if (void 0 !== WW.dataStartIndex || void 0 !== WW.dataEndIndex) cW.setState(yO({
                  dataStartIndex: NW,
                  dataEndIndex: PW
                }, nW({
                  props: cW.props,
                  dataStartIndex: NW,
                  dataEndIndex: PW,
                  updateId: EW
                }, cW.state)));
                else if (void 0 !== WW.activeTooltipIndex) {
                  var LW = WW.chartX,
                    wW = WW.chartY,
                    tW = WW.activeTooltipIndex,
                    ZW = cW.state,
                    xW = ZW.offset,
                    lW = ZW.tooltipTicks;
                  if (!xW) return;
                  if ("function" === typeof mW) tW = mW(lW, WW);
                  else if ("value" === mW) {
                    tW = -1;
                    for (var AW = 0; AW < lW.length; AW++)
                      if (lW[AW].value === WW.activeLabel) {
                        tW = AW;
                        break
                      }
                  }
                  var bW = yO(yO({}, xW), {}, {
                      x: xW.left,
                      y: xW.top
                    }),
                    jW = Math.min(LW, bW.x + bW.width),
                    UW = Math.min(wW, bW.y + bW.height),
                    kW = lW[tW] && lW[tW].value,
                    sW = eO(cW.state, cW.props.data, tW),
                    MW = lW[tW] ? {
                      x: "horizontal" === OW ? lW[tW].coordinate : jW,
                      y: "horizontal" === OW ? UW : lW[tW].coordinate
                    } : nO;
                  cW.setState(yO(yO({}, WW), {}, {
                    activeLabel: kW,
                    activeCoordinate: MW,
                    activePayload: sW,
                    activeTooltipIndex: tW
                  }))
                } else cW.setState(WW)
              })), TO(cW, "renderCursor", (function(WW) {
                var OW, EW = cW.state,
                  NW = EW.isTooltipActive,
                  PW = EW.activeCoordinate,
                  LW = EW.activePayload,
                  wW = EW.offset,
                  tW = EW.activeTooltipIndex,
                  ZW = EW.tooltipAxisBandSize,
                  xW = cW.getTooltipEventType(),
                  lW = null !== (OW = WW.props.active) && void 0 !== OW ? OW : NW,
                  AW = cW.props.layout,
                  bW = WW.key || "_recharts-cursor";
                return mW.createElement(LO, {
                  key: bW,
                  activeCoordinate: PW,
                  activePayload: LW,
                  activeTooltipIndex: tW,
                  chartName: iW,
                  element: WW,
                  isActive: lW,
                  layout: AW,
                  offset: wW,
                  tooltipAxisBandSize: ZW,
                  tooltipEventType: xW
                })
              })), TO(cW, "renderPolarAxis", (function(WW, iW, OW) {
                var EW = ZW()(WW, "type.axisType"),
                  NW = ZW()(cW.state, "".concat(EW, "Map")),
                  PW = WW.type.defaultProps,
                  LW = void 0 !== PW ? yO(yO({}, PW), WW.props) : WW.props,
                  wW = NW && NW[LW["".concat(EW, "Id")]];
                return (0, mW.cloneElement)(WW, yO(yO({}, wW), {}, {
                  className: (0, jW.d)(EW, wW.className),
                  key: WW.key || "".concat(iW, "-").concat(OW),
                  ticks: (0, hW.V)(wW, !0)
                }))
              })), TO(cW, "renderPolarGrid", (function(WW) {
                var iW = WW.props,
                  OW = iW.radialLines,
                  EW = iW.polarAngles,
                  NW = iW.polarRadius,
                  PW = cW.state,
                  LW = PW.radiusAxisMap,
                  wW = PW.angleAxisMap,
                  tW = (0, HW.i)(LW),
                  ZW = (0, HW.i)(wW),
                  xW = ZW.cx,
                  lW = ZW.cy,
                  AW = ZW.innerRadius,
                  bW = ZW.outerRadius;
                return (0, mW.cloneElement)(WW, {
                  polarAngles: Array.isArray(EW) ? EW : (0, hW.V)(ZW, !0).map((function(WW) {
                    return WW.coordinate
                  })),
                  polarRadius: Array.isArray(NW) ? NW : (0, hW.V)(tW, !0).map((function(WW) {
                    return WW.coordinate
                  })),
                  cx: xW,
                  cy: lW,
                  innerRadius: AW,
                  outerRadius: bW,
                  key: WW.key || "polar-grid",
                  radialLines: OW
                })
              })), TO(cW, "renderLegend", (function() {
                var WW = cW.state.formattedGraphicalItems,
                  iW = cW.props,
                  OW = iW.children,
                  EW = iW.width,
                  NW = iW.height,
                  PW = cW.props.margin || {},
                  LW = EW - (PW.left || 0) - (PW.right || 0),
                  wW = (0, rW.c)({
                    children: OW,
                    formattedGraphicalItems: WW,
                    legendWidth: LW,
                    legendContent: xW
                  });
                if (!wW) return null;
                var tW = wW.item,
                  ZW = AO(wW, wO);
                return (0, mW.cloneElement)(tW, yO(yO({}, ZW), {}, {
                  chartWidth: EW,
                  chartHeight: NW,
                  margin: PW,
                  onBBoxUpdate: cW.handleLegendBBoxUpdate
                }))
              })), TO(cW, "renderTooltip", (function() {
                var WW, iW = cW.props,
                  OW = iW.children,
                  EW = iW.accessibilityLayer,
                  NW = (0, yW.l)(OW, MW.b);
                if (!NW) return null;
                var PW = cW.state,
                  LW = PW.isTooltipActive,
                  wW = PW.activeCoordinate,
                  tW = PW.activePayload,
                  ZW = PW.activeLabel,
                  xW = PW.offset,
                  lW = null !== (WW = NW.props.active) && void 0 !== WW ? WW : LW;
                return (0, mW.cloneElement)(NW, {
                  viewBox: yO(yO({}, xW), {}, {
                    x: xW.left,
                    y: xW.top
                  }),
                  active: lW,
                  label: ZW,
                  payload: lW ? tW : [],
                  coordinate: wW,
                  accessibilityLayer: EW
                })
              })), TO(cW, "renderBrush", (function(WW) {
                var iW = cW.props,
                  OW = iW.margin,
                  EW = iW.data,
                  NW = cW.state,
                  PW = NW.offset,
                  LW = NW.dataStartIndex,
                  wW = NW.dataEndIndex,
                  tW = NW.updateId;
                return (0, mW.cloneElement)(WW, {
                  key: WW.key || "_recharts-brush",
                  onChange: (0, hW.i)(cW.handleBrushChange, WW.props.onChange),
                  data: EW,
                  x: (0, HW.v)(WW.props.x) ? WW.props.x : PW.left,
                  y: (0, HW.v)(WW.props.y) ? WW.props.y : PW.top + PW.height + PW.brushBottom - (OW.bottom || 0),
                  width: (0, HW.v)(WW.props.width) ? WW.props.width : PW.width,
                  startIndex: LW,
                  endIndex: wW,
                  updateId: "brush-".concat(tW)
                })
              })), TO(cW, "renderReferenceElement", (function(WW, iW, OW) {
                if (!WW) return null;
                var EW = cW.clipPathId,
                  NW = cW.state,
                  PW = NW.xAxisMap,
                  LW = NW.yAxisMap,
                  wW = NW.offset,
                  tW = WW.type.defaultProps || {},
                  ZW = WW.props,
                  xW = ZW.xAxisId,
                  lW = void 0 === xW ? tW.xAxisId : xW,
                  AW = ZW.yAxisId,
                  bW = void 0 === AW ? tW.yAxisId : AW;
                return (0, mW.cloneElement)(WW, {
                  key: WW.key || "".concat(iW, "-").concat(OW),
                  xAxis: PW[lW],
                  yAxis: LW[bW],
                  viewBox: {
                    x: wW.left,
                    y: wW.top,
                    width: wW.width,
                    height: wW.height
                  },
                  clipPathId: EW
                })
              })), TO(cW, "renderActivePoints", (function(WW) {
                var iW = WW.item,
                  mW = WW.activePoint,
                  EW = WW.basePoint,
                  NW = WW.childIndex,
                  PW = WW.isRange,
                  LW = [],
                  cW = iW.props.key,
                  wW = void 0 !== iW.item.type.defaultProps ? yO(yO({}, iW.item.type.defaultProps), iW.item.props) : iW.item.props,
                  tW = wW.activeDot,
                  ZW = yO(yO({
                    index: NW,
                    dataKey: wW.dataKey,
                    cx: mW.x,
                    cy: mW.y,
                    r: 4,
                    fill: (0, hW.O)(iW.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: mW.payload,
                    value: mW.value
                  }, (0, yW.e)(tW, !1)), (0, gi.j)(tW));
                return LW.push(OW.renderActiveDot(tW, ZW, "".concat(cW, "-activePoint-").concat(NW))), EW ? LW.push(OW.renderActiveDot(tW, yO(yO({}, ZW), {}, {
                  cx: EW.x,
                  cy: EW.y
                }), "".concat(cW, "-basePoint-").concat(NW))) : PW && LW.push(null), LW
              })), TO(cW, "renderGraphicChild", (function(WW, iW, OW) {
                var EW = cW.filterFormatItem(WW, iW, OW);
                if (!EW) return null;
                var PW = cW.getTooltipEventType(),
                  LW = cW.state,
                  wW = LW.isTooltipActive,
                  tW = LW.tooltipAxis,
                  ZW = LW.activeTooltipIndex,
                  xW = LW.activeLabel,
                  lW = cW.props.children,
                  AW = (0, yW.l)(lW, MW.b),
                  bW = EW.props,
                  jW = bW.points,
                  UW = bW.isRange,
                  kW = bW.baseLine,
                  sW = void 0 !== EW.item.type.defaultProps ? yO(yO({}, EW.item.type.defaultProps), EW.item.props) : EW.item.props,
                  KW = sW.activeDot,
                  SW = sW.hide,
                  YW = sW.activeBar,
                  TW = sW.activeShape,
                  JW = Boolean(!SW && wW && AW && (KW || YW || TW)),
                  nW = {};
                "axis" !== PW && AW && "click" === AW.props.trigger ? nW = {
                  onClick: (0, hW.i)(cW.handleItemMouseEnter, WW.props.onClick)
                } : "axis" !== PW && (nW = {
                  onMouseLeave: (0, hW.i)(cW.handleItemMouseLeave, WW.props.onMouseLeave),
                  onMouseEnter: (0, hW.i)(cW.handleItemMouseEnter, WW.props.onMouseEnter)
                });
                var uW = (0, mW.cloneElement)(WW, yO(yO({}, EW.props), nW));
                if (JW) {
                  if (!(ZW >= 0)) {
                    var oW, dW = (null !== (oW = cW.getItemByXY(cW.state.activeCoordinate)) && void 0 !== oW ? oW : {
                        graphicalItem: uW
                      }).graphicalItem,
                      eW = dW.item,
                      vW = void 0 === eW ? WW : eW,
                      gW = dW.childIndex,
                      DW = yO(yO(yO({}, EW.props), nW), {}, {
                        activeIndex: gW
                      });
                    return [(0, mW.cloneElement)(vW, DW), null, null]
                  }
                  var VW, pW;
                  if (tW.dataKey && !tW.allowDuplicatedCategory) {
                    var fW = "function" === typeof tW.dataKey ? function(WW) {
                      return "function" === typeof tW.dataKey ? tW.dataKey(WW.payload) : null
                    } : "payload.".concat(tW.dataKey.toString());
                    VW = (0, HW.f)(jW, fW, xW), pW = UW && kW && (0, HW.f)(kW, fW, xW)
                  } else VW = null === jW || void 0 === jW ? void 0 : jW[ZW], pW = UW && kW && kW[ZW];
                  if (TW || YW) {
                    var CW = void 0 !== WW.props.activeIndex ? WW.props.activeIndex : ZW;
                    return [(0, mW.cloneElement)(WW, yO(yO(yO({}, EW.props), nW), {}, {
                      activeIndex: CW
                    })), null, null]
                  }
                  if (!NW()(VW)) return [uW].concat(MO(cW.renderActivePoints({
                    item: EW,
                    activePoint: VW,
                    basePoint: pW,
                    childIndex: ZW,
                    isRange: UW
                  })))
                }
                return UW ? [uW, null, null] : [uW, null]
              })), TO(cW, "renderCustomized", (function(WW, iW, OW) {
                return (0, mW.cloneElement)(WW, yO(yO({
                  key: "recharts-customized-".concat(OW)
                }, cW.props), cW.state))
              })), TO(cW, "renderMap", {
                CartesianGrid: {
                  handler: uO,
                  once: !0
                },
                ReferenceArea: {
                  handler: cW.renderReferenceElement
                },
                ReferenceLine: {
                  handler: uO
                },
                ReferenceDot: {
                  handler: cW.renderReferenceElement
                },
                XAxis: {
                  handler: uO
                },
                YAxis: {
                  handler: uO
                },
                Brush: {
                  handler: cW.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: cW.renderGraphicChild
                },
                Line: {
                  handler: cW.renderGraphicChild
                },
                Area: {
                  handler: cW.renderGraphicChild
                },
                Radar: {
                  handler: cW.renderGraphicChild
                },
                RadialBar: {
                  handler: cW.renderGraphicChild
                },
                Scatter: {
                  handler: cW.renderGraphicChild
                },
                Pie: {
                  handler: cW.renderGraphicChild
                },
                Funnel: {
                  handler: cW.renderGraphicChild
                },
                Tooltip: {
                  handler: cW.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: cW.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: cW.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: cW.renderPolarAxis
                },
                Customized: {
                  handler: cW.renderCustomized
                }
              }), cW.clipPathId = "".concat(null !== (EW = WW.id) && void 0 !== EW ? EW : (0, HW.B)("recharts"), "-clip"), cW.throttleTriggeredAfterMouseMove = bW()(cW.triggeredAfterMouseMove, null !== (PW = WW.throttleDelay) && void 0 !== PW ? PW : 1e3 / 60), cW.state = {}, cW
            }
            return function(WW, iW) {
              if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
              WW.prototype = Object.create(iW && iW.prototype, {
                constructor: {
                  value: WW,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(WW, "prototype", {
                writable: !1
              }), iW && sO(WW, iW)
            }(OW, WW), EW = OW, cW = [{
              key: "componentDidMount",
              value: function() {
                var WW, iW;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (WW = this.props.margin.left) && void 0 !== WW ? WW : 0,
                    top: null !== (iW = this.props.margin.top) && void 0 !== iW ? iW : 0
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
                  iW = WW.children,
                  OW = WW.data,
                  mW = WW.height,
                  EW = WW.layout,
                  NW = (0, yW.l)(iW, MW.b);
                if (NW) {
                  var PW = NW.props.defaultIndex;
                  if (!("number" !== typeof PW || PW < 0 || PW > this.state.tooltipTicks.length - 1)) {
                    var LW = this.state.tooltipTicks[PW] && this.state.tooltipTicks[PW].value,
                      cW = eO(this.state, OW, PW, LW),
                      wW = this.state.tooltipTicks[PW].coordinate,
                      tW = (this.state.offset.top + mW) / 2,
                      ZW = "horizontal" === EW ? {
                        x: wW,
                        y: tW
                      } : {
                        y: wW,
                        x: tW
                      },
                      xW = this.state.formattedGraphicalItems.find((function(WW) {
                        return "Scatter" === WW.item.type.name
                      }));
                    xW && (ZW = yO(yO({}, ZW), xW.props.points[PW].tooltipPosition), cW = xW.props.points[PW].tooltipPayload);
                    var lW = {
                      activeTooltipIndex: PW,
                      isTooltipActive: !0,
                      activeLabel: LW,
                      activePayload: cW,
                      activeCoordinate: ZW
                    };
                    this.setState(lW), this.renderCursor(NW), this.accessibilityManager.setIndex(PW)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(WW, iW) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== iW.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== WW.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== WW.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (OW = this.props.margin.left) && void 0 !== OW ? OW : 0,
                    top: null !== (mW = this.props.margin.top) && void 0 !== mW ? mW : 0
                  }
                }), null) : null;
                var OW, mW
              }
            }, {
              key: "componentDidUpdate",
              value: function(WW) {
                (0, yW.z)([(0, yW.l)(WW.children, MW.b)], [(0, yW.l)(this.props.children, MW.b)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var WW = (0, yW.l)(this.props.children, MW.b);
                if (WW && "boolean" === typeof WW.props.shared) {
                  var iW = WW.props.shared ? "axis" : "item";
                  return wW.indexOf(iW) >= 0 ? iW : PW
                }
                return PW
              }
            }, {
              key: "getMouseInfo",
              value: function(WW) {
                if (!this.container) return null;
                var iW = this.container,
                  OW = iW.getBoundingClientRect(),
                  mW = (0, aW.d)(OW),
                  EW = {
                    chartX: Math.round(WW.pageX - mW.left),
                    chartY: Math.round(WW.pageY - mW.top)
                  },
                  NW = OW.width / iW.offsetWidth || 1,
                  PW = this.inRange(EW.chartX, EW.chartY, NW);
                if (!PW) return null;
                var LW = this.state,
                  cW = LW.xAxisMap,
                  wW = LW.yAxisMap,
                  tW = this.getTooltipEventType(),
                  ZW = vO(this.state, this.props.data, this.props.layout, PW);
                if ("axis" !== tW && cW && wW) {
                  var xW = (0, HW.i)(cW).scale,
                    lW = (0, HW.i)(wW).scale,
                    AW = xW && xW.invert ? xW.invert(EW.chartX) : null,
                    bW = lW && lW.invert ? lW.invert(EW.chartY) : null;
                  return yO(yO({}, EW), {}, {
                    xValue: AW,
                    yValue: bW
                  }, ZW)
                }
                return ZW ? yO(yO({}, EW), ZW) : null
              }
            }, {
              key: "inRange",
              value: function(WW, iW) {
                var OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  mW = this.props.layout,
                  EW = WW / OW,
                  NW = iW / OW;
                if ("horizontal" === mW || "vertical" === mW) {
                  var PW = this.state.offset;
                  return EW >= PW.left && EW <= PW.left + PW.width && NW >= PW.top && NW <= PW.top + PW.height ? {
                    x: EW,
                    y: NW
                  } : null
                }
                var LW = this.state,
                  cW = LW.angleAxisMap,
                  wW = LW.radiusAxisMap;
                if (cW && wW) {
                  var tW = (0, HW.i)(cW);
                  return (0, ui.f)({
                    x: EW,
                    y: NW
                  }, tW)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var WW = this.props.children,
                  iW = this.getTooltipEventType(),
                  OW = (0, yW.l)(WW, MW.b),
                  mW = {};
                return OW && "axis" === iW && (mW = "click" === OW.props.trigger ? {
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
                }), yO(yO({}, (0, gi.j)(this.props, this.handleOuterEvent)), mW)
              }
            }, {
              key: "addListener",
              value: function() {
                ei.on(vi, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                ei.removeListener(vi, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(WW, iW, OW) {
                for (var mW = this.state.formattedGraphicalItems, EW = 0, NW = mW.length; EW < NW; EW++) {
                  var PW = mW[EW];
                  if (PW.item === WW || PW.props.key === WW.key || iW === (0, yW.p)(PW.item.type) && OW === PW.childIndex) return PW
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var WW = this.clipPathId,
                  iW = this.state.offset,
                  OW = iW.left,
                  EW = iW.top,
                  NW = iW.height,
                  PW = iW.width;
                return mW.createElement("defs", null, mW.createElement("clipPath", {
                  id: WW
                }, mW.createElement("rect", {
                  x: OW,
                  y: EW,
                  height: NW,
                  width: PW
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var WW = this.state.xAxisMap;
                return WW ? Object.entries(WW).reduce((function(WW, iW) {
                  var OW = lO(iW, 2),
                    mW = OW[0],
                    EW = OW[1];
                  return yO(yO({}, WW), {}, TO({}, mW, EW.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var WW = this.state.yAxisMap;
                return WW ? Object.entries(WW).reduce((function(WW, iW) {
                  var OW = lO(iW, 2),
                    mW = OW[0],
                    EW = OW[1];
                  return yO(yO({}, WW), {}, TO({}, mW, EW.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(WW) {
                var iW;
                return null === (iW = this.state.xAxisMap) || void 0 === iW || null === (iW = iW[WW]) || void 0 === iW ? void 0 : iW.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(WW) {
                var iW;
                return null === (iW = this.state.yAxisMap) || void 0 === iW || null === (iW = iW[WW]) || void 0 === iW ? void 0 : iW.scale
              }
            }, {
              key: "getItemByXY",
              value: function(WW) {
                var iW = this.state,
                  OW = iW.formattedGraphicalItems,
                  mW = iW.activeItem;
                if (OW && OW.length)
                  for (var EW = 0, NW = OW.length; EW < NW; EW++) {
                    var PW = OW[EW],
                      LW = PW.props,
                      cW = PW.item,
                      wW = void 0 !== cW.type.defaultProps ? yO(yO({}, cW.type.defaultProps), cW.props) : cW.props,
                      tW = (0, yW.p)(cW.type);
                    if ("Bar" === tW) {
                      var ZW = (LW.data || []).find((function(iW) {
                        return (0, YW.h)(WW, iW)
                      }));
                      if (ZW) return {
                        graphicalItem: PW,
                        payload: ZW
                      }
                    } else if ("RadialBar" === tW) {
                      var xW = (LW.data || []).find((function(iW) {
                        return (0, ui.f)(WW, iW)
                      }));
                      if (xW) return {
                        graphicalItem: PW,
                        payload: xW
                      }
                    } else if ((0, Bi.g)(PW, mW) || (0, Bi.h)(PW, mW) || (0, Bi.l)(PW, mW)) {
                      var lW = (0, Bi.f)({
                          graphicalItem: PW,
                          activeTooltipItem: mW,
                          itemData: wW.data
                        }),
                        AW = void 0 === wW.activeIndex ? lW : wW.activeIndex;
                      return {
                        graphicalItem: yO(yO({}, PW), {}, {
                          childIndex: AW
                        }),
                        payload: (0, Bi.l)(PW, mW) ? wW.data[lW] : PW.props.data[lW]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var WW = this;
                if (!(0, yW.D)(this)) return null;
                var iW, OW, EW = this.props,
                  NW = EW.children,
                  PW = EW.className,
                  LW = EW.width,
                  cW = EW.height,
                  wW = EW.style,
                  tW = EW.compact,
                  ZW = EW.title,
                  xW = EW.desc,
                  lW = AO(EW, tO),
                  AW = (0, yW.e)(lW, !1);
                if (tW) return mW.createElement(cO.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, mW.createElement(kW.c, xO({}, AW, {
                  width: LW,
                  height: cW,
                  title: ZW,
                  desc: xW
                }), this.renderClipPath(), (0, yW.C)(NW, this.renderMap)));
                this.props.accessibilityLayer && (AW.tabIndex = null !== (iW = this.props.tabIndex) && void 0 !== iW ? iW : 0, AW.role = null !== (OW = this.props.role) && void 0 !== OW ? OW : "application", AW.onKeyDown = function(iW) {
                  WW.accessibilityManager.keyboardEvent(iW)
                }, AW.onFocus = function() {
                  WW.accessibilityManager.focus()
                });
                var bW = this.parseEventsOfWrapper();
                return mW.createElement(cO.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, mW.createElement("div", xO({
                  className: (0, jW.d)("recharts-wrapper", PW),
                  style: yO({
                    position: "relative",
                    cursor: "default",
                    width: LW,
                    height: cW
                  }, wW)
                }, bW, {
                  ref: function(iW) {
                    WW.container = iW
                  }
                }), mW.createElement(kW.c, xO({}, AW, {
                  width: LW,
                  height: cW,
                  title: ZW,
                  desc: xW,
                  style: HO
                }), this.renderClipPath(), (0, yW.C)(NW, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], cW && bO(EW.prototype, cW), tW && bO(EW, tW), Object.defineProperty(EW, "prototype", {
              writable: !1
            }), EW;
            var EW, cW, tW
          }(mW.Component);
        TO(uW, "displayName", iW), TO(uW, "defaultProps", yO({
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
        }, TW)), TO(uW, "getDerivedStateFromProps", (function(WW, iW) {
          var OW = WW.dataKey,
            mW = WW.data,
            EW = WW.children,
            PW = WW.width,
            LW = WW.height,
            cW = WW.layout,
            wW = WW.stackOffset,
            tW = WW.margin,
            ZW = iW.dataStartIndex,
            xW = iW.dataEndIndex;
          if (void 0 === iW.updateId) {
            var lW = VO(WW);
            return yO(yO(yO({}, lW), {}, {
              updateId: 0
            }, nW(yO(yO({
              props: WW
            }, lW), {}, {
              updateId: 0
            }), iW)), {}, {
              prevDataKey: OW,
              prevData: mW,
              prevWidth: PW,
              prevHeight: LW,
              prevLayout: cW,
              prevStackOffset: wW,
              prevMargin: tW,
              prevChildren: EW
            })
          }
          if (OW !== iW.prevDataKey || mW !== iW.prevData || PW !== iW.prevWidth || LW !== iW.prevHeight || cW !== iW.prevLayout || wW !== iW.prevStackOffset || !(0, oi.e)(tW, iW.prevMargin)) {
            var AW = VO(WW),
              bW = {
                chartX: iW.chartX,
                chartY: iW.chartY,
                isTooltipActive: iW.isTooltipActive
              },
              jW = yO(yO({}, vO(iW, mW, cW)), {}, {
                updateId: iW.updateId + 1
              }),
              UW = yO(yO(yO({}, AW), bW), jW);
            return yO(yO(yO({}, UW), nW(yO({
              props: WW
            }, UW), iW)), {}, {
              prevDataKey: OW,
              prevData: mW,
              prevWidth: PW,
              prevHeight: LW,
              prevLayout: cW,
              prevStackOffset: wW,
              prevMargin: tW,
              prevChildren: EW
            })
          }
          if (!(0, yW.z)(EW, iW.prevChildren)) {
            var kW, sW, MW, KW, SW = (0, yW.l)(EW, IW),
              YW = SW && null !== (kW = null === (sW = SW.props) || void 0 === sW ? void 0 : sW.startIndex) && void 0 !== kW ? kW : ZW,
              TW = SW && null !== (MW = null === (KW = SW.props) || void 0 === KW ? void 0 : KW.endIndex) && void 0 !== MW ? MW : xW,
              JW = YW !== ZW || TW !== xW,
              hW = !NW()(mW) && !JW ? iW.updateId : iW.updateId + 1;
            return yO(yO({
              updateId: hW
            }, nW(yO(yO({
              props: WW
            }, iW), {}, {
              updateId: hW,
              dataStartIndex: YW,
              dataEndIndex: TW
            }), iW)), {}, {
              prevChildren: EW,
              dataStartIndex: YW,
              dataEndIndex: TW
            })
          }
          return null
        })), TO(uW, "renderActiveDot", (function(WW, iW, OW) {
          var EW;
          return EW = (0, mW.isValidElement)(WW) ? (0, mW.cloneElement)(WW, iW) : LW()(WW) ? WW(iW) : mW.createElement(SW.c, iW), mW.createElement(sW.c, {
            className: "recharts-active-dot",
            key: OW
          }, EW)
        }));
        var oW = (0, mW.forwardRef)((function(WW, iW) {
          return mW.createElement(uW, xO({}, WW, {
            ref: iW
          }))
        }));
        return oW.displayName = uW.displayName, oW
      }
  },
  7260: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW
    });
    var mW = function(WW) {
      return null
    };
    mW.displayName = "Cell"
  },
  7207: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => nW
    });
    var mW = OW(62),
      EW = OW(6382),
      NW = OW.n(EW),
      PW = OW(6223),
      LW = OW.n(PW),
      cW = OW(6034),
      wW = OW.n(cW),
      tW = OW(6021),
      ZW = OW(7090),
      xW = OW(6390),
      lW = OW(6107),
      AW = OW(7211);

    function bW(WW) {
      return bW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, bW(WW)
    }
    var jW = ["offset"];

    function UW(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return kW(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return kW(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return kW(WW, iW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function sW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function MW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function KW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? MW(Object(OW), !0).forEach((function(iW) {
          SW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : MW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function SW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != bW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != bW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == bW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function YW() {
      return YW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, YW.apply(this, arguments)
    }
    var yW = function(WW) {
        var iW = WW.value,
          OW = WW.formatter,
          mW = NW()(WW.children) ? iW : WW.children;
        return LW()(OW) ? OW(mW) : mW
      },
      TW = function(WW, iW, OW) {
        var EW, PW, LW = WW.position,
          cW = WW.viewBox,
          wW = WW.offset,
          ZW = WW.className,
          xW = cW,
          bW = xW.cx,
          jW = xW.cy,
          UW = xW.innerRadius,
          kW = xW.outerRadius,
          sW = xW.startAngle,
          MW = xW.endAngle,
          KW = xW.clockWise,
          SW = (UW + kW) / 2,
          yW = function(WW, iW) {
            return (0, lW.y)(iW - WW) * Math.min(Math.abs(iW - WW), 360)
          }(sW, MW),
          TW = yW >= 0 ? 1 : -1;
        "insideStart" === LW ? (EW = sW + TW * wW, PW = KW) : "insideEnd" === LW ? (EW = MW - TW * wW, PW = !KW) : "end" === LW && (EW = MW + TW * wW, PW = KW), PW = yW <= 0 ? PW : !PW;
        var JW = (0, AW.i)(bW, jW, SW, EW),
          hW = (0, AW.i)(bW, jW, SW, EW + 359 * (PW ? 1 : -1)),
          HW = "M".concat(JW.x, ",").concat(JW.y, "\n    A").concat(SW, ",").concat(SW, ",0,1,").concat(PW ? 0 : 1, ",\n    ").concat(hW.x, ",").concat(hW.y),
          nW = NW()(WW.id) ? (0, lW.B)("recharts-radial-line-") : WW.id;
        return mW.createElement("text", YW({}, OW, {
          dominantBaseline: "central",
          className: (0, tW.d)("recharts-radial-bar-label", ZW)
        }), mW.createElement("defs", null, mW.createElement("path", {
          id: nW,
          d: HW
        })), mW.createElement("textPath", {
          xlinkHref: "#".concat(nW)
        }, iW))
      },
      JW = function(WW) {
        var iW = WW.viewBox,
          OW = WW.offset,
          mW = WW.position,
          EW = iW,
          NW = EW.cx,
          PW = EW.cy,
          LW = EW.innerRadius,
          cW = EW.outerRadius,
          wW = (EW.startAngle + EW.endAngle) / 2;
        if ("outside" === mW) {
          var tW = (0, AW.i)(NW, PW, cW + OW, wW),
            ZW = tW.x;
          return {
            x: ZW,
            y: tW.y,
            textAnchor: ZW >= NW ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === mW) return {
          x: NW,
          y: PW,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === mW) return {
          x: NW,
          y: PW,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === mW) return {
          x: NW,
          y: PW,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var xW = (LW + cW) / 2,
          lW = (0, AW.i)(NW, PW, xW, wW);
        return {
          x: lW.x,
          y: lW.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      hW = function(WW) {
        var iW = WW.viewBox,
          OW = WW.parentViewBox,
          mW = WW.offset,
          EW = WW.position,
          NW = iW,
          PW = NW.x,
          LW = NW.y,
          cW = NW.width,
          tW = NW.height,
          ZW = tW >= 0 ? 1 : -1,
          xW = ZW * mW,
          AW = ZW > 0 ? "end" : "start",
          bW = ZW > 0 ? "start" : "end",
          jW = cW >= 0 ? 1 : -1,
          UW = jW * mW,
          kW = jW > 0 ? "end" : "start",
          sW = jW > 0 ? "start" : "end";
        if ("top" === EW) return KW(KW({}, {
          x: PW + cW / 2,
          y: LW - ZW * mW,
          textAnchor: "middle",
          verticalAnchor: AW
        }), OW ? {
          height: Math.max(LW - OW.y, 0),
          width: cW
        } : {});
        if ("bottom" === EW) return KW(KW({}, {
          x: PW + cW / 2,
          y: LW + tW + xW,
          textAnchor: "middle",
          verticalAnchor: bW
        }), OW ? {
          height: Math.max(OW.y + OW.height - (LW + tW), 0),
          width: cW
        } : {});
        if ("left" === EW) {
          var MW = {
            x: PW - UW,
            y: LW + tW / 2,
            textAnchor: kW,
            verticalAnchor: "middle"
          };
          return KW(KW({}, MW), OW ? {
            width: Math.max(MW.x - OW.x, 0),
            height: tW
          } : {})
        }
        if ("right" === EW) {
          var SW = {
            x: PW + cW + UW,
            y: LW + tW / 2,
            textAnchor: sW,
            verticalAnchor: "middle"
          };
          return KW(KW({}, SW), OW ? {
            width: Math.max(OW.x + OW.width - SW.x, 0),
            height: tW
          } : {})
        }
        var YW = OW ? {
          width: cW,
          height: tW
        } : {};
        return "insideLeft" === EW ? KW({
          x: PW + UW,
          y: LW + tW / 2,
          textAnchor: sW,
          verticalAnchor: "middle"
        }, YW) : "insideRight" === EW ? KW({
          x: PW + cW - UW,
          y: LW + tW / 2,
          textAnchor: kW,
          verticalAnchor: "middle"
        }, YW) : "insideTop" === EW ? KW({
          x: PW + cW / 2,
          y: LW + xW,
          textAnchor: "middle",
          verticalAnchor: bW
        }, YW) : "insideBottom" === EW ? KW({
          x: PW + cW / 2,
          y: LW + tW - xW,
          textAnchor: "middle",
          verticalAnchor: AW
        }, YW) : "insideTopLeft" === EW ? KW({
          x: PW + UW,
          y: LW + xW,
          textAnchor: sW,
          verticalAnchor: bW
        }, YW) : "insideTopRight" === EW ? KW({
          x: PW + cW - UW,
          y: LW + xW,
          textAnchor: kW,
          verticalAnchor: bW
        }, YW) : "insideBottomLeft" === EW ? KW({
          x: PW + UW,
          y: LW + tW - xW,
          textAnchor: sW,
          verticalAnchor: AW
        }, YW) : "insideBottomRight" === EW ? KW({
          x: PW + cW - UW,
          y: LW + tW - xW,
          textAnchor: kW,
          verticalAnchor: AW
        }, YW) : wW()(EW) && ((0, lW.v)(EW.x) || (0, lW.w)(EW.x)) && ((0, lW.v)(EW.y) || (0, lW.w)(EW.y)) ? KW({
          x: PW + (0, lW.m)(EW.x, cW),
          y: LW + (0, lW.m)(EW.y, tW),
          textAnchor: "end",
          verticalAnchor: "end"
        }, YW) : KW({
          x: PW + cW / 2,
          y: LW + tW / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, YW)
      },
      HW = function(WW) {
        return "cx" in WW && (0, lW.v)(WW.cx)
      };

    function nW(WW) {
      var iW, OW = WW.offset,
        EW = KW({
          offset: void 0 === OW ? 5 : OW
        }, sW(WW, jW)),
        PW = EW.viewBox,
        cW = EW.position,
        wW = EW.value,
        lW = EW.children,
        AW = EW.content,
        bW = EW.className,
        UW = void 0 === bW ? "" : bW,
        kW = EW.textBreakAll;
      if (!PW || NW()(wW) && NW()(lW) && !(0, mW.isValidElement)(AW) && !LW()(AW)) return null;
      if ((0, mW.isValidElement)(AW)) return (0, mW.cloneElement)(AW, EW);
      if (LW()(AW)) {
        if (iW = (0, mW.createElement)(AW, EW), (0, mW.isValidElement)(iW)) return iW
      } else iW = yW(EW);
      var MW = HW(PW),
        SW = (0, xW.e)(EW, !0);
      if (MW && ("insideStart" === cW || "insideEnd" === cW || "end" === cW)) return TW(EW, iW, SW);
      var nW = MW ? JW(EW) : hW(EW);
      return mW.createElement(ZW.b, YW({
        className: (0, tW.d)("recharts-label", UW)
      }, SW, nW, {
        breakAll: kW
      }), iW)
    }
    nW.displayName = "Label";
    var uW = function(WW) {
      var iW = WW.cx,
        OW = WW.cy,
        mW = WW.angle,
        EW = WW.startAngle,
        NW = WW.endAngle,
        PW = WW.r,
        LW = WW.radius,
        cW = WW.innerRadius,
        wW = WW.outerRadius,
        tW = WW.x,
        ZW = WW.y,
        xW = WW.top,
        AW = WW.left,
        bW = WW.width,
        jW = WW.height,
        UW = WW.clockWise,
        kW = WW.labelViewBox;
      if (kW) return kW;
      if ((0, lW.v)(bW) && (0, lW.v)(jW)) {
        if ((0, lW.v)(tW) && (0, lW.v)(ZW)) return {
          x: tW,
          y: ZW,
          width: bW,
          height: jW
        };
        if ((0, lW.v)(xW) && (0, lW.v)(AW)) return {
          x: xW,
          y: AW,
          width: bW,
          height: jW
        }
      }
      return (0, lW.v)(tW) && (0, lW.v)(ZW) ? {
        x: tW,
        y: ZW,
        width: 0,
        height: 0
      } : (0, lW.v)(iW) && (0, lW.v)(OW) ? {
        cx: iW,
        cy: OW,
        startAngle: EW || mW || 0,
        endAngle: NW || mW || 0,
        innerRadius: cW || 0,
        outerRadius: wW || LW || PW || 0,
        clockWise: UW
      } : WW.viewBox ? WW.viewBox : {}
    };
    nW.parseViewBox = uW, nW.renderCallByParent = function(WW, iW) {
      var OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!WW || !WW.children && OW && !WW.label) return null;
      var EW = WW.children,
        NW = uW(WW),
        PW = (0, xW.h)(EW, nW).map((function(WW, OW) {
          return (0, mW.cloneElement)(WW, {
            viewBox: iW || NW,
            key: "label-".concat(OW)
          })
        }));
      if (!OW) return PW;
      var cW = function(WW, iW) {
        return WW ? !0 === WW ? mW.createElement(nW, {
          key: "label-implicit",
          viewBox: iW
        }) : (0, lW.u)(WW) ? mW.createElement(nW, {
          key: "label-implicit",
          viewBox: iW,
          value: WW
        }) : (0, mW.isValidElement)(WW) ? WW.type === nW ? (0, mW.cloneElement)(WW, {
          key: "label-implicit",
          viewBox: iW
        }) : mW.createElement(nW, {
          key: "label-implicit",
          content: WW,
          viewBox: iW
        }) : LW()(WW) ? mW.createElement(nW, {
          key: "label-implicit",
          content: WW,
          viewBox: iW
        }) : wW()(WW) ? mW.createElement(nW, YW({
          viewBox: iW
        }, WW, {
          key: "label-implicit"
        })) : null : null
      }(WW.label, iW || NW);
      return [cW].concat(UW(PW))
    }
  },
  7265: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => hW
    });
    var mW = OW(62),
      EW = OW(6382),
      NW = OW.n(EW),
      PW = OW(6034),
      LW = OW.n(PW),
      cW = OW(6223),
      wW = OW.n(cW),
      tW = OW(7271),
      ZW = OW.n(tW),
      xW = OW(7207),
      lW = OW(6930),
      AW = OW(6390),
      bW = OW(7101);

    function jW(WW) {
      return jW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, jW(WW)
    }
    var UW = ["valueAccessor"],
      kW = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function sW(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return MW(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return MW(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return MW(WW, iW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function MW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function KW() {
      return KW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, KW.apply(this, arguments)
    }

    function SW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function YW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? SW(Object(OW), !0).forEach((function(iW) {
          yW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : SW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function yW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != jW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != jW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == jW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function TW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }
    var JW = function(WW) {
      return Array.isArray(WW.value) ? ZW()(WW.value) : WW.value
    };

    function hW(WW) {
      var iW = WW.valueAccessor,
        OW = void 0 === iW ? JW : iW,
        EW = TW(WW, UW),
        PW = EW.data,
        LW = EW.dataKey,
        cW = EW.clockWise,
        wW = EW.id,
        tW = EW.textBreakAll,
        ZW = TW(EW, kW);
      return PW && PW.length ? mW.createElement(lW.c, {
        className: "recharts-label-list"
      }, PW.map((function(WW, iW) {
        var EW = NW()(LW) ? OW(WW, iW) : (0, bW.fb)(WW && WW.payload, LW),
          PW = NW()(wW) ? {} : {
            id: "".concat(wW, "-").concat(iW)
          };
        return mW.createElement(xW.d, KW({}, (0, AW.e)(WW, !0), ZW, PW, {
          parentViewBox: WW.parentViewBox,
          value: EW,
          textBreakAll: tW,
          viewBox: xW.d.parseViewBox(NW()(cW) ? WW : YW(YW({}, WW), {}, {
            clockWise: cW
          })),
          key: "label-".concat(iW),
          index: iW
        }))
      }))) : null
    }
    hW.displayName = "LabelList", hW.renderCallByParent = function(WW, iW) {
      var OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!WW || !WW.children && OW && !WW.label) return null;
      var EW = WW.children,
        NW = (0, AW.h)(EW, hW).map((function(WW, OW) {
          return (0, mW.cloneElement)(WW, {
            data: iW,
            key: "labelList-".concat(OW)
          })
        }));
      return OW ? [function(WW, iW) {
        return WW ? !0 === WW ? mW.createElement(hW, {
          key: "labelList-implicit",
          data: iW
        }) : mW.isValidElement(WW) || wW()(WW) ? mW.createElement(hW, {
          key: "labelList-implicit",
          data: iW,
          content: WW
        }) : LW()(WW) ? mW.createElement(hW, KW({
          data: iW
        }, WW, {
          key: "labelList-implicit"
        })) : null : null
      }(WW.label, iW)].concat(sW(NW)) : NW
    }
  },
  6992: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => pW
    });
    var mW = OW(62),
      EW = OW(6223),
      NW = OW.n(EW),
      PW = OW(6021),
      LW = OW(6386),
      cW = OW(6923),
      wW = OW(6997),
      tW = OW(6415);

    function ZW(WW) {
      return ZW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, ZW(WW)
    }

    function xW() {
      return xW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, xW.apply(this, arguments)
    }

    function lW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function AW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, MW(mW.key), mW)
      }
    }

    function bW(WW, iW, OW) {
      return iW = UW(iW),
        function(WW, iW) {
          if (iW && ("object" === ZW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, jW() ? Reflect.construct(iW, OW || [], UW(WW).constructor) : iW.apply(WW, OW))
    }

    function jW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (jW = function() {
        return !!WW
      })()
    }

    function UW(WW) {
      return UW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, UW(WW)
    }

    function kW(WW, iW) {
      return kW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, kW(WW, iW)
    }

    function sW(WW, iW, OW) {
      return (iW = MW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function MW(WW) {
      var iW = function(WW, iW) {
        if ("object" != ZW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != ZW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == ZW(iW) ? iW : iW + ""
    }
    var KW = 32,
      SW = function(WW) {
        function iW() {
          return function(WW, iW) {
            if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
          }(this, iW), bW(this, iW, arguments)
        }
        return function(WW, iW) {
          if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
          WW.prototype = Object.create(iW && iW.prototype, {
            constructor: {
              value: WW,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(WW, "prototype", {
            writable: !1
          }), iW && kW(WW, iW)
        }(iW, WW), OW = iW, EW = [{
          key: "renderIcon",
          value: function(WW) {
            var iW = this.props.inactiveColor,
              OW = 16,
              EW = KW / 6,
              NW = KW / 3,
              PW = WW.inactive ? iW : WW.color;
            if ("plainline" === WW.type) return mW.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: PW,
              strokeDasharray: WW.payload.strokeDasharray,
              x1: 0,
              y1: OW,
              x2: KW,
              y2: OW,
              className: "recharts-legend-icon"
            });
            if ("line" === WW.type) return mW.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: PW,
              d: "M0,".concat(OW, "h").concat(NW, "\n            A").concat(EW, ",").concat(EW, ",0,1,1,").concat(2 * NW, ",").concat(OW, "\n            H").concat(KW, "M").concat(2 * NW, ",").concat(OW, "\n            A").concat(EW, ",").concat(EW, ",0,1,1,").concat(NW, ",").concat(OW),
              className: "recharts-legend-icon"
            });
            if ("rect" === WW.type) return mW.createElement("path", {
              stroke: "none",
              fill: PW,
              d: "M0,".concat(4, "h").concat(KW, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (mW.isValidElement(WW.legendIcon)) {
              var LW = function(WW) {
                for (var iW = 1; iW < arguments.length; iW++) {
                  var OW = null != arguments[iW] ? arguments[iW] : {};
                  iW % 2 ? lW(Object(OW), !0).forEach((function(iW) {
                    sW(WW, iW, OW[iW])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : lW(Object(OW)).forEach((function(iW) {
                    Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
                  }))
                }
                return WW
              }({}, WW);
              return delete LW.legendIcon, mW.cloneElement(WW.legendIcon, LW)
            }
            return mW.createElement(wW.e, {
              fill: PW,
              cx: OW,
              cy: OW,
              size: KW,
              sizeType: "diameter",
              type: WW.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var WW = this,
              iW = this.props,
              OW = iW.payload,
              EW = iW.iconSize,
              wW = iW.layout,
              ZW = iW.formatter,
              lW = iW.inactiveColor,
              AW = {
                x: 0,
                y: 0,
                width: KW,
                height: KW
              },
              bW = {
                display: "horizontal" === wW ? "inline-block" : "block",
                marginRight: 10
              },
              jW = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return OW.map((function(iW, OW) {
              var wW = iW.formatter || ZW,
                UW = (0, PW.d)(sW(sW({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(OW), !0), "inactive", iW.inactive));
              if ("none" === iW.type) return null;
              var kW = NW()(iW.value) ? null : iW.value;
              (0, LW.d)(!NW()(iW.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var MW = iW.inactive ? lW : iW.color;
              return mW.createElement("li", xW({
                className: UW,
                style: bW,
                key: "legend-item-".concat(OW)
              }, (0, tW.l)(WW.props, iW, OW)), mW.createElement(cW.c, {
                width: EW,
                height: EW,
                viewBox: AW,
                style: jW
              }, WW.renderIcon(iW)), mW.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: MW
                }
              }, wW ? wW(kW, iW, OW) : kW))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var WW = this.props,
              iW = WW.payload,
              OW = WW.layout,
              EW = WW.align;
            if (!iW || !iW.length) return null;
            var NW = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === OW ? EW : "left"
            };
            return mW.createElement("ul", {
              className: "recharts-default-legend",
              style: NW
            }, this.renderItems())
          }
        }], EW && AW(OW.prototype, EW), ZW && AW(OW, ZW), Object.defineProperty(OW, "prototype", {
          writable: !1
        }), OW;
        var OW, EW, ZW
      }(mW.PureComponent);
    sW(SW, "displayName", "Legend"), sW(SW, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var YW = OW(6107),
      yW = OW(6943);

    function TW(WW) {
      return TW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, TW(WW)
    }
    var JW = ["ref"];

    function hW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function HW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? hW(Object(OW), !0).forEach((function(iW) {
          vW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : hW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function nW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, gW(mW.key), mW)
      }
    }

    function uW(WW, iW, OW) {
      return iW = dW(iW),
        function(WW, iW) {
          if (iW && ("object" === TW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, oW() ? Reflect.construct(iW, OW || [], dW(WW).constructor) : iW.apply(WW, OW))
    }

    function oW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (oW = function() {
        return !!WW
      })()
    }

    function dW(WW) {
      return dW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, dW(WW)
    }

    function eW(WW, iW) {
      return eW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, eW(WW, iW)
    }

    function vW(WW, iW, OW) {
      return (iW = gW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function gW(WW) {
      var iW = function(WW, iW) {
        if ("object" != TW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != TW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == TW(iW) ? iW : iW + ""
    }

    function DW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function VW(WW) {
      return WW.value
    }
    var pW = function(WW) {
      function iW() {
        var WW;
        ! function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, iW);
        for (var OW = arguments.length, mW = new Array(OW), EW = 0; EW < OW; EW++) mW[EW] = arguments[EW];
        return vW(WW = uW(this, iW, [].concat(mW)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), WW
      }
      return function(WW, iW) {
        if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(iW && iW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), iW && eW(WW, iW)
      }(iW, WW), OW = iW, NW = [{
        key: "getWithHeight",
        value: function(WW, iW) {
          var OW = HW(HW({}, this.defaultProps), WW.props).layout;
          return "vertical" === OW && (0, YW.v)(WW.props.height) ? {
            height: WW.props.height
          } : "horizontal" === OW ? {
            width: WW.props.width || iW
          } : null
        }
      }], (EW = [{
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
            iW = this.getBBox();
          iW ? (Math.abs(iW.width - this.lastBoundingBox.width) > 1 || Math.abs(iW.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = iW.width, this.lastBoundingBox.height = iW.height, WW && WW(iW)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, WW && WW(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? HW({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(WW) {
          var iW, OW, mW = this.props,
            EW = mW.layout,
            NW = mW.align,
            PW = mW.verticalAlign,
            LW = mW.margin,
            cW = mW.chartWidth,
            wW = mW.chartHeight;
          return WW && (void 0 !== WW.left && null !== WW.left || void 0 !== WW.right && null !== WW.right) || (iW = "center" === NW && "vertical" === EW ? {
            left: ((cW || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === NW ? {
            right: LW && LW.right || 0
          } : {
            left: LW && LW.left || 0
          }), WW && (void 0 !== WW.top && null !== WW.top || void 0 !== WW.bottom && null !== WW.bottom) || (OW = "middle" === PW ? {
            top: ((wW || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === PW ? {
            bottom: LW && LW.bottom || 0
          } : {
            top: LW && LW.top || 0
          }), HW(HW({}, iW), OW)
        }
      }, {
        key: "render",
        value: function() {
          var WW = this,
            iW = this.props,
            OW = iW.content,
            EW = iW.width,
            NW = iW.height,
            PW = iW.wrapperStyle,
            LW = iW.payloadUniqBy,
            cW = iW.payload,
            wW = HW(HW({
              position: "absolute",
              width: EW || "auto",
              height: NW || "auto"
            }, this.getDefaultPosition(PW)), PW);
          return mW.createElement("div", {
            className: "recharts-legend-wrapper",
            style: wW,
            ref: function(iW) {
              WW.wrapperNode = iW
            }
          }, function(WW, iW) {
            if (mW.isValidElement(WW)) return mW.cloneElement(WW, iW);
            if ("function" === typeof WW) return mW.createElement(WW, iW);
            iW.ref;
            var OW = DW(iW, JW);
            return mW.createElement(SW, OW)
          }(OW, HW(HW({}, this.props), {}, {
            payload: (0, yW.d)(cW, LW, VW)
          })))
        }
      }]) && nW(OW.prototype, EW), NW && nW(OW, NW), Object.defineProperty(OW, "prototype", {
        writable: !1
      }), OW;
      var OW, EW, NW
    }(mW.PureComponent);
    vW(pW, "displayName", "Legend"), vW(pW, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  6014: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => jW
    });
    var mW = OW(6021),
      EW = OW(62),
      NW = OW(6023),
      PW = OW.n(NW),
      LW = OW(6107),
      cW = OW(6386),
      wW = OW(6390);

    function tW(WW) {
      return tW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, tW(WW)
    }

    function ZW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function xW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? ZW(Object(OW), !0).forEach((function(iW) {
          lW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : ZW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function lW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != tW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != tW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == tW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function AW(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        var OW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != OW) {
          var mW, EW, NW, PW, LW = [],
            cW = !0,
            wW = !1;
          try {
            if (NW = (OW = OW.call(WW)).next, 0 === iW) {
              if (Object(OW) !== OW) return;
              cW = !1
            } else
              for (; !(cW = (mW = NW.call(OW)).done) && (LW.push(mW.value), LW.length !== iW); cW = !0);
          } catch (WW) {
            wW = !0, EW = WW
          } finally {
            try {
              if (!cW && null != OW.return && (PW = OW.return(), Object(PW) !== PW)) return
            } finally {
              if (wW) throw EW
            }
          }
          return LW
        }
      }(WW, iW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return bW(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return bW(WW, iW)
      }(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }
    var jW = (0, EW.forwardRef)((function(WW, iW) {
      var OW = WW.aspect,
        NW = WW.initialDimension,
        tW = void 0 === NW ? {
          width: -1,
          height: -1
        } : NW,
        ZW = WW.width,
        lW = void 0 === ZW ? "100%" : ZW,
        bW = WW.height,
        jW = void 0 === bW ? "100%" : bW,
        UW = WW.minWidth,
        kW = void 0 === UW ? 0 : UW,
        sW = WW.minHeight,
        MW = WW.maxHeight,
        KW = WW.children,
        SW = WW.debounce,
        YW = void 0 === SW ? 0 : SW,
        yW = WW.id,
        TW = WW.className,
        JW = WW.Lk,
        hW = WW.style,
        HW = void 0 === hW ? {} : hW,
        nW = (0, EW.useRef)(null),
        uW = (0, EW.useRef)();
      uW.current = JW, (0, EW.useImperativeHandle)(iW, (function() {
        return Object.defineProperty(nW.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), nW.current
          },
          configurable: !0
        })
      }));
      var oW = AW((0, EW.useState)({
          containerWidth: tW.width,
          containerHeight: tW.height
        }), 2),
        dW = oW[0],
        eW = oW[1],
        vW = (0, EW.useCallback)((function(WW, iW) {
          eW((function(OW) {
            var mW = Math.round(WW),
              EW = Math.round(iW);
            return OW.containerWidth === mW && OW.containerHeight === EW ? OW : {
              containerWidth: mW,
              containerHeight: EW
            }
          }))
        }), []);
      (0, EW.useEffect)((function() {
        var WW = function(WW) {
          var iW, OW = WW[0].contentRect,
            mW = OW.width,
            EW = OW.height;
          vW(mW, EW), null === (iW = uW.current) || void 0 === iW || iW.call(uW, mW, EW)
        };
        YW > 0 && (WW = PW()(WW, YW, {
          trailing: !0,
          leading: !1
        }));
        var iW = new ResizeObserver(WW),
          OW = nW.current.getBoundingClientRect(),
          mW = OW.width,
          EW = OW.height;
        return vW(mW, EW), iW.observe(nW.current),
          function() {
            iW.disconnect()
          }
      }), [vW, YW]);
      var gW = (0, EW.useMemo)((function() {
        var WW = dW.containerWidth,
          iW = dW.containerHeight;
        if (WW < 0 || iW < 0) return null;
        (0, cW.d)((0, LW.w)(lW) || (0, LW.w)(jW), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", lW, jW), (0, cW.d)(!OW || OW > 0, "The aspect(%s) must be greater than zero.", OW);
        var mW = (0, LW.w)(lW) ? WW : lW,
          NW = (0, LW.w)(jW) ? iW : jW;
        OW && OW > 0 && (mW ? NW = mW / OW : NW && (mW = NW * OW), MW && NW > MW && (NW = MW)), (0, cW.d)(mW > 0 || NW > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", mW, NW, lW, jW, kW, sW, OW);
        var PW = !Array.isArray(KW) && (0, wW.p)(KW.type).endsWith("Chart");
        return EW.Children.map(KW, (function(WW) {
          return EW.isValidElement(WW) ? (0, EW.cloneElement)(WW, xW({
            width: mW,
            height: NW
          }, PW ? {
            style: xW({
              height: "100%",
              width: "100%",
              maxHeight: NW,
              maxWidth: mW
            }, WW.props.style)
          } : {})) : WW
        }))
      }), [OW, KW, jW, MW, sW, kW, dW, lW]);
      return EW.createElement("div", {
        id: yW ? "".concat(yW) : void 0,
        className: (0, mW.d)("recharts-responsive-container", TW),
        style: xW(xW({}, HW), {}, {
          width: lW,
          height: jW,
          minWidth: kW,
          minHeight: sW,
          maxHeight: MW
        }),
        ref: nW
      }, gW)
    }))
  },
  7090: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => fW
    });
    var mW = OW(62),
      EW = OW(6382),
      NW = OW.n(EW),
      PW = OW(6021),
      LW = OW(6107),
      cW = OW(6940),
      wW = OW(6390),
      tW = OW(7098);

    function ZW(WW) {
      return ZW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, ZW(WW)
    }

    function xW(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        var OW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != OW) {
          var mW, EW, NW, PW, LW = [],
            cW = !0,
            wW = !1;
          try {
            if (NW = (OW = OW.call(WW)).next, 0 === iW) {
              if (Object(OW) !== OW) return;
              cW = !1
            } else
              for (; !(cW = (mW = NW.call(OW)).done) && (LW.push(mW.value), LW.length !== iW); cW = !0);
          } catch (WW) {
            wW = !0, EW = WW
          } finally {
            try {
              if (!cW && null != OW.return && (PW = OW.return(), Object(PW) !== PW)) return
            } finally {
              if (wW) throw EW
            }
          }
          return LW
        }
      }(WW, iW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return lW(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return lW(WW, iW)
      }(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function AW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, bW(mW.key), mW)
      }
    }

    function bW(WW) {
      var iW = function(WW, iW) {
        if ("object" != ZW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != ZW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == ZW(iW) ? iW : iW + ""
    }
    var jW = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      UW = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      kW = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      sW = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      MW = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      KW = Object.keys(MW),
      SW = "NaN";
    var YW = function() {
      function WW(iW, OW) {
        ! function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, WW), this.num = iW, this.unit = OW, this.num = iW, this.unit = OW, Number.isNaN(iW) && (this.unit = ""), "" === OW || kW.test(OW) || (this.num = NaN, this.unit = ""), KW.includes(OW) && (this.num = function(WW, iW) {
          return WW * MW[iW]
        }(iW, OW), this.unit = "px")
      }
      return iW = WW, mW = [{
        key: "parse",
        value: function(iW) {
          var OW, mW = xW(null !== (OW = sW.exec(iW)) && void 0 !== OW ? OW : [], 3),
            EW = mW[1],
            NW = mW[2];
          return new WW(parseFloat(EW), null !== NW && void 0 !== NW ? NW : "")
        }
      }], (OW = [{
        key: "add",
        value: function(iW) {
          return this.unit !== iW.unit ? new WW(NaN, "") : new WW(this.num + iW.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(iW) {
          return this.unit !== iW.unit ? new WW(NaN, "") : new WW(this.num - iW.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(iW) {
          return "" !== this.unit && "" !== iW.unit && this.unit !== iW.unit ? new WW(NaN, "") : new WW(this.num * iW.num, this.unit || iW.unit)
        }
      }, {
        key: "divide",
        value: function(iW) {
          return "" !== this.unit && "" !== iW.unit && this.unit !== iW.unit ? new WW(NaN, "") : new WW(this.num / iW.num, this.unit || iW.unit)
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
      }]) && AW(iW.prototype, OW), mW && AW(iW, mW), Object.defineProperty(iW, "prototype", {
        writable: !1
      }), iW;
      var iW, OW, mW
    }();

    function yW(WW) {
      if (WW.includes(SW)) return SW;
      for (var iW = WW; iW.includes("*") || iW.includes("/");) {
        var OW, mW = xW(null !== (OW = jW.exec(iW)) && void 0 !== OW ? OW : [], 4),
          EW = mW[1],
          NW = mW[2],
          PW = mW[3],
          LW = YW.parse(null !== EW && void 0 !== EW ? EW : ""),
          cW = YW.parse(null !== PW && void 0 !== PW ? PW : ""),
          wW = "*" === NW ? LW.multiply(cW) : LW.divide(cW);
        if (wW.isNaN()) return SW;
        iW = iW.replace(jW, wW.toString())
      }
      for (; iW.includes("+") || /.-\d+(?:\.\d+)?/.test(iW);) {
        var tW, ZW = xW(null !== (tW = UW.exec(iW)) && void 0 !== tW ? tW : [], 4),
          lW = ZW[1],
          AW = ZW[2],
          bW = ZW[3],
          kW = YW.parse(null !== lW && void 0 !== lW ? lW : ""),
          sW = YW.parse(null !== bW && void 0 !== bW ? bW : ""),
          MW = "+" === AW ? kW.add(sW) : kW.subtract(sW);
        if (MW.isNaN()) return SW;
        iW = iW.replace(UW, MW.toString())
      }
      return iW
    }
    var TW = /\(([^()]*)\)/;

    function JW(WW) {
      var iW = WW.replace(/\s+/g, "");
      return iW = function(WW) {
        for (var iW = WW; iW.includes("(");) {
          var OW = xW(TW.exec(iW), 2)[1];
          iW = iW.replace(TW, yW(OW))
        }
        return iW
      }(iW), iW = yW(iW)
    }

    function hW(WW) {
      var iW = function(WW) {
        try {
          return JW(WW)
        } catch (iW) {
          return SW
        }
      }(WW.slice(5, -1));
      return iW === SW ? "" : iW
    }
    var HW = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      nW = ["dx", "dy", "angle", "className", "breakAll"];

    function uW() {
      return uW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, uW.apply(this, arguments)
    }

    function oW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function dW(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        var OW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != OW) {
          var mW, EW, NW, PW, LW = [],
            cW = !0,
            wW = !1;
          try {
            if (NW = (OW = OW.call(WW)).next, 0 === iW) {
              if (Object(OW) !== OW) return;
              cW = !1
            } else
              for (; !(cW = (mW = NW.call(OW)).done) && (LW.push(mW.value), LW.length !== iW); cW = !0);
          } catch (WW) {
            wW = !0, EW = WW
          } finally {
            try {
              if (!cW && null != OW.return && (PW = OW.return(), Object(PW) !== PW)) return
            } finally {
              if (wW) throw EW
            }
          }
          return LW
        }
      }(WW, iW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return eW(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return eW(WW, iW)
      }(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function eW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }
    var vW = /[ \f\n\r\t\v\u2028\u2029]+/,
      gW = function(WW) {
        var iW = WW.children,
          OW = WW.breakAll,
          mW = WW.style;
        try {
          var EW = [];
          return NW()(iW) || (EW = OW ? iW.toString().split("") : iW.toString().split(vW)), {
            wordsWithComputedWidth: EW.map((function(WW) {
              return {
                word: WW,
                width: (0, tW.g)(WW, mW).width
              }
            })),
            spaceWidth: OW ? 0 : (0, tW.g)("\xa0", mW).width
          }
        } catch (PW) {
          return null
        }
      },
      DW = function(WW) {
        return [{
          words: NW()(WW) ? [] : WW.toString().split(vW)
        }]
      },
      VW = function(WW) {
        var iW = WW.width,
          OW = WW.scaleToFit,
          mW = WW.children,
          EW = WW.style,
          NW = WW.breakAll,
          PW = WW.maxLines;
        if ((iW || OW) && !cW.d.isSsr) {
          var wW = gW({
            breakAll: NW,
            children: mW,
            style: EW
          });
          return wW ? function(WW, iW, OW, mW, EW) {
            var NW = WW.maxLines,
              PW = WW.children,
              cW = WW.style,
              wW = WW.breakAll,
              tW = (0, LW.v)(NW),
              ZW = PW,
              xW = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(WW, iW) {
                  var NW = iW.word,
                    PW = iW.width,
                    LW = WW[WW.length - 1];
                  if (LW && (null == mW || EW || LW.width + PW + OW < Number(mW))) LW.words.push(NW), LW.width += PW + OW;
                  else {
                    var cW = {
                      words: [NW],
                      width: PW
                    };
                    WW.push(cW)
                  }
                  return WW
                }), [])
              },
              lW = xW(iW);
            if (!tW) return lW;
            for (var AW, bW = function(WW) {
                var iW = ZW.slice(0, WW),
                  OW = gW({
                    breakAll: wW,
                    style: cW,
                    children: iW + "\u2026"
                  }).wordsWithComputedWidth,
                  EW = xW(OW),
                  PW = EW.length > NW || function(WW) {
                    return WW.reduce((function(WW, iW) {
                      return WW.width > iW.width ? WW : iW
                    }))
                  }(EW).width > Number(mW);
                return [PW, EW]
              }, jW = 0, UW = ZW.length - 1, kW = 0; jW <= UW && kW <= ZW.length - 1;) {
              var sW = Math.floor((jW + UW) / 2),
                MW = dW(bW(sW - 1), 2),
                KW = MW[0],
                SW = MW[1],
                YW = dW(bW(sW), 1)[0];
              if (KW || YW || (jW = sW + 1), KW && YW && (UW = sW - 1), !KW && YW) {
                AW = SW;
                break
              }
              kW++
            }
            return AW || lW
          }({
            breakAll: NW,
            children: mW,
            maxLines: PW,
            style: EW
          }, wW.wordsWithComputedWidth, wW.spaceWidth, iW, OW) : DW(mW)
        }
        return DW(mW)
      },
      pW = "#808080",
      fW = function(WW) {
        var iW = WW.x,
          OW = void 0 === iW ? 0 : iW,
          EW = WW.y,
          NW = void 0 === EW ? 0 : EW,
          cW = WW.lineHeight,
          tW = void 0 === cW ? "1em" : cW,
          ZW = WW.capHeight,
          xW = void 0 === ZW ? "0.71em" : ZW,
          lW = WW.scaleToFit,
          AW = void 0 !== lW && lW,
          bW = WW.textAnchor,
          jW = void 0 === bW ? "start" : bW,
          UW = WW.verticalAnchor,
          kW = void 0 === UW ? "end" : UW,
          sW = WW.fill,
          MW = void 0 === sW ? pW : sW,
          KW = oW(WW, HW),
          SW = (0, mW.useMemo)((function() {
            return VW({
              breakAll: KW.breakAll,
              children: KW.children,
              maxLines: KW.maxLines,
              scaleToFit: AW,
              style: KW.style,
              width: KW.width
            })
          }), [KW.breakAll, KW.children, KW.maxLines, AW, KW.style, KW.width]),
          YW = KW.dx,
          yW = KW.dy,
          TW = KW.angle,
          JW = KW.className,
          dW = KW.breakAll,
          eW = oW(KW, nW);
        if (!(0, LW.u)(OW) || !(0, LW.u)(NW)) return null;
        var vW, gW = OW + ((0, LW.v)(YW) ? YW : 0),
          DW = NW + ((0, LW.v)(yW) ? yW : 0);
        switch (kW) {
          case "start":
            vW = hW("calc(".concat(xW, ")"));
            break;
          case "middle":
            vW = hW("calc(".concat((SW.length - 1) / 2, " * -").concat(tW, " + (").concat(xW, " / 2))"));
            break;
          default:
            vW = hW("calc(".concat(SW.length - 1, " * -").concat(tW, ")"))
        }
        var fW = [];
        if (AW) {
          var CW = SW[0].width,
            XW = KW.width;
          fW.push("scale(".concat(((0, LW.v)(XW) ? XW / CW : 1) / CW, ")"))
        }
        return TW && fW.push("rotate(".concat(TW, ", ").concat(gW, ", ").concat(DW, ")")), fW.length && (eW.transform = fW.join(" ")), mW.createElement("text", uW({}, (0, wW.e)(eW, !0), {
          x: gW,
          y: DW,
          className: (0, PW.d)("recharts-text", JW),
          textAnchor: jW,
          fill: MW.includes("url") ? pW : MW
        }), SW.map((function(WW, iW) {
          var OW = WW.words.join(dW ? "" : " ");
          return mW.createElement("tspan", {
            x: gW,
            dy: 0 === iW ? vW : tW,
            key: "".concat(OW, "-").concat(iW)
          }, OW)
        })))
      }
  },
  6936: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => zW
    });
    var mW = OW(62),
      EW = OW(6483),
      NW = OW.n(EW),
      PW = OW(6382),
      LW = OW.n(PW),
      cW = OW(6021),
      wW = OW(6107);

    function tW(WW) {
      return tW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, tW(WW)
    }

    function ZW() {
      return ZW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, ZW.apply(this, arguments)
    }

    function xW(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        var OW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != OW) {
          var mW, EW, NW, PW, LW = [],
            cW = !0,
            wW = !1;
          try {
            if (NW = (OW = OW.call(WW)).next, 0 === iW) {
              if (Object(OW) !== OW) return;
              cW = !1
            } else
              for (; !(cW = (mW = NW.call(OW)).done) && (LW.push(mW.value), LW.length !== iW); cW = !0);
          } catch (WW) {
            wW = !0, EW = WW
          } finally {
            try {
              if (!cW && null != OW.return && (PW = OW.return(), Object(PW) !== PW)) return
            } finally {
              if (wW) throw EW
            }
          }
          return LW
        }
      }(WW, iW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return lW(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return lW(WW, iW)
      }(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function AW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function bW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? AW(Object(OW), !0).forEach((function(iW) {
          jW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : AW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function jW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != tW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != tW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == tW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function UW(WW) {
      return Array.isArray(WW) && (0, wW.u)(WW[0]) && (0, wW.u)(WW[1]) ? WW.join(" ~ ") : WW
    }
    var kW = function(WW) {
      var iW = WW.separator,
        OW = void 0 === iW ? " : " : iW,
        EW = WW.contentStyle,
        PW = void 0 === EW ? {} : EW,
        tW = WW.itemStyle,
        lW = void 0 === tW ? {} : tW,
        AW = WW.labelStyle,
        jW = void 0 === AW ? {} : AW,
        kW = WW.payload,
        sW = WW.formatter,
        MW = WW.itemSorter,
        KW = WW.wrapperClassName,
        SW = WW.labelClassName,
        YW = WW.label,
        yW = WW.labelFormatter,
        TW = WW.accessibilityLayer,
        JW = void 0 !== TW && TW,
        hW = bW({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, PW),
        HW = bW({
          margin: 0
        }, jW),
        nW = !LW()(YW),
        uW = nW ? YW : "",
        oW = (0, cW.d)("recharts-default-tooltip", KW),
        dW = (0, cW.d)("recharts-tooltip-label", SW);
      nW && yW && void 0 !== kW && null !== kW && (uW = yW(YW, kW));
      var eW = JW ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return mW.createElement("div", ZW({
        className: oW,
        style: hW
      }, eW), mW.createElement("p", {
        className: dW,
        style: HW
      }, mW.isValidElement(uW) ? uW : "".concat(uW)), function() {
        if (kW && kW.length) {
          var WW = (MW ? NW()(kW, MW) : kW).map((function(WW, iW) {
            if ("none" === WW.type) return null;
            var EW = bW({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: WW.color || "#000"
              }, lW),
              NW = WW.formatter || sW || UW,
              PW = WW.value,
              LW = WW.name,
              cW = PW,
              tW = LW;
            if (NW && null != cW && null != tW) {
              var ZW = NW(PW, LW, WW, iW, kW);
              if (Array.isArray(ZW)) {
                var AW = xW(ZW, 2);
                cW = AW[0], tW = AW[1]
              } else cW = ZW
            }
            return mW.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(iW),
              style: EW
            }, (0, wW.u)(tW) ? mW.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, tW) : null, (0, wW.u)(tW) ? mW.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, OW) : null, mW.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, cW), mW.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, WW.unit || ""))
          }));
          return mW.createElement("ul", {
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

    function sW(WW) {
      return sW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, sW(WW)
    }

    function MW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != sW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != sW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == sW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }
    var KW = "recharts-tooltip-wrapper",
      SW = {
        visibility: "hidden"
      };

    function YW(WW) {
      var iW = WW.coordinate,
        OW = WW.translateX,
        mW = WW.translateY;
      return (0, cW.d)(KW, MW(MW(MW(MW({}, "".concat(KW, "-right"), (0, wW.v)(OW) && iW && (0, wW.v)(iW.x) && OW >= iW.x), "".concat(KW, "-left"), (0, wW.v)(OW) && iW && (0, wW.v)(iW.x) && OW < iW.x), "".concat(KW, "-bottom"), (0, wW.v)(mW) && iW && (0, wW.v)(iW.y) && mW >= iW.y), "".concat(KW, "-top"), (0, wW.v)(mW) && iW && (0, wW.v)(iW.y) && mW < iW.y))
    }

    function yW(WW) {
      var iW = WW.allowEscapeViewBox,
        OW = WW.coordinate,
        mW = WW.key,
        EW = WW.offsetTopLeft,
        NW = WW.position,
        PW = WW.reverseDirection,
        LW = WW.tooltipDimension,
        cW = WW.viewBox,
        tW = WW.viewBoxDimension;
      if (NW && (0, wW.v)(NW[mW])) return NW[mW];
      var ZW = OW[mW] - LW - EW,
        xW = OW[mW] + EW;
      return iW[mW] ? PW[mW] ? ZW : xW : PW[mW] ? ZW < cW[mW] ? Math.max(xW, cW[mW]) : Math.max(ZW, cW[mW]) : xW + LW > cW[mW] + tW ? Math.max(ZW, cW[mW]) : Math.max(xW, cW[mW])
    }

    function TW(WW) {
      return TW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, TW(WW)
    }

    function JW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function hW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? JW(Object(OW), !0).forEach((function(iW) {
          eW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : JW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function HW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, vW(mW.key), mW)
      }
    }

    function nW(WW, iW, OW) {
      return iW = oW(iW),
        function(WW, iW) {
          if (iW && ("object" === TW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, uW() ? Reflect.construct(iW, OW || [], oW(WW).constructor) : iW.apply(WW, OW))
    }

    function uW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (uW = function() {
        return !!WW
      })()
    }

    function oW(WW) {
      return oW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, oW(WW)
    }

    function dW(WW, iW) {
      return dW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, dW(WW, iW)
    }

    function eW(WW, iW, OW) {
      return (iW = vW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function vW(WW) {
      var iW = function(WW, iW) {
        if ("object" != TW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != TW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == TW(iW) ? iW : iW + ""
    }
    var gW = function(WW) {
        function iW() {
          var WW;
          ! function(WW, iW) {
            if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
          }(this, iW);
          for (var OW = arguments.length, mW = new Array(OW), EW = 0; EW < OW; EW++) mW[EW] = arguments[EW];
          return eW(WW = nW(this, iW, [].concat(mW)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), eW(WW, "handleKeyDown", (function(iW) {
            var OW, mW, EW, NW;
            "Escape" === iW.key && WW.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (OW = null === (mW = WW.props.coordinate) || void 0 === mW ? void 0 : mW.x) && void 0 !== OW ? OW : 0,
                y: null !== (EW = null === (NW = WW.props.coordinate) || void 0 === NW ? void 0 : NW.y) && void 0 !== EW ? EW : 0
              }
            })
          })), WW
        }
        return function(WW, iW) {
          if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
          WW.prototype = Object.create(iW && iW.prototype, {
            constructor: {
              value: WW,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(WW, "prototype", {
            writable: !1
          }), iW && dW(WW, iW)
        }(iW, WW), OW = iW, (EW = [{
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
            var WW, iW;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (WW = this.props.coordinate) || void 0 === WW ? void 0 : WW.x) === this.state.dismissedAtCoordinate.x && (null === (iW = this.props.coordinate) || void 0 === iW ? void 0 : iW.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var WW = this,
              iW = this.props,
              OW = iW.active,
              EW = iW.allowEscapeViewBox,
              NW = iW.animationDuration,
              PW = iW.animationEasing,
              LW = iW.children,
              cW = iW.coordinate,
              wW = iW.hasPayload,
              tW = iW.isAnimationActive,
              ZW = iW.offset,
              xW = iW.position,
              lW = iW.reverseDirection,
              AW = iW.useTranslate3d,
              bW = iW.viewBox,
              jW = iW.wrapperStyle,
              UW = function(WW) {
                var iW, OW, mW = WW.allowEscapeViewBox,
                  EW = WW.coordinate,
                  NW = WW.offsetTopLeft,
                  PW = WW.position,
                  LW = WW.reverseDirection,
                  cW = WW.tooltipBox,
                  wW = WW.useTranslate3d,
                  tW = WW.viewBox;
                return {
                  cssProperties: cW.height > 0 && cW.width > 0 && EW ? function(WW) {
                    var iW = WW.translateX,
                      OW = WW.translateY;
                    return {
                      transform: WW.useTranslate3d ? "translate3d(".concat(iW, "px, ").concat(OW, "px, 0)") : "translate(".concat(iW, "px, ").concat(OW, "px)")
                    }
                  }({
                    translateX: iW = yW({
                      allowEscapeViewBox: mW,
                      coordinate: EW,
                      key: "x",
                      offsetTopLeft: NW,
                      position: PW,
                      reverseDirection: LW,
                      tooltipDimension: cW.width,
                      viewBox: tW,
                      viewBoxDimension: tW.width
                    }),
                    translateY: OW = yW({
                      allowEscapeViewBox: mW,
                      coordinate: EW,
                      key: "y",
                      offsetTopLeft: NW,
                      position: PW,
                      reverseDirection: LW,
                      tooltipDimension: cW.height,
                      viewBox: tW,
                      viewBoxDimension: tW.height
                    }),
                    useTranslate3d: wW
                  }) : SW,
                  cssClasses: YW({
                    translateX: iW,
                    translateY: OW,
                    coordinate: EW
                  })
                }
              }({
                allowEscapeViewBox: EW,
                coordinate: cW,
                offsetTopLeft: ZW,
                position: xW,
                reverseDirection: lW,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: AW,
                viewBox: bW
              }),
              kW = UW.cssClasses,
              sW = UW.cssProperties,
              MW = hW(hW({
                transition: tW && OW ? "transform ".concat(NW, "ms ").concat(PW) : void 0
              }, sW), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && OW && wW ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, jW);
            return mW.createElement("div", {
              tabIndex: -1,
              className: kW,
              style: MW,
              ref: function(iW) {
                WW.wrapperNode = iW
              }
            }, LW)
          }
        }]) && HW(OW.prototype, EW), NW && HW(OW, NW), Object.defineProperty(OW, "prototype", {
          writable: !1
        }), OW;
        var OW, EW, NW
      }(mW.PureComponent),
      DW = OW(6940),
      VW = OW(6943);

    function pW(WW) {
      return pW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, pW(WW)
    }

    function fW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function CW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? fW(Object(OW), !0).forEach((function(iW) {
          IW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : fW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function XW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, aW(mW.key), mW)
      }
    }

    function BW(WW, iW, OW) {
      return iW = RW(iW),
        function(WW, iW) {
          if (iW && ("object" === pW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return function(WW) {
            if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return WW
          }(WW)
        }(WW, qW() ? Reflect.construct(iW, OW || [], RW(WW).constructor) : iW.apply(WW, OW))
    }

    function qW() {
      try {
        var WW = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (WW) {}
      return (qW = function() {
        return !!WW
      })()
    }

    function RW(WW) {
      return RW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, RW(WW)
    }

    function GW(WW, iW) {
      return GW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, GW(WW, iW)
    }

    function IW(WW, iW, OW) {
      return (iW = aW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function aW(WW) {
      var iW = function(WW, iW) {
        if ("object" != pW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != pW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == pW(iW) ? iW : iW + ""
    }

    function rW(WW) {
      return WW.dataKey
    }
    var zW = function(WW) {
      function iW() {
        return function(WW, iW) {
          if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
        }(this, iW), BW(this, iW, arguments)
      }
      return function(WW, iW) {
        if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
        WW.prototype = Object.create(iW && iW.prototype, {
          constructor: {
            value: WW,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(WW, "prototype", {
          writable: !1
        }), iW && GW(WW, iW)
      }(iW, WW), OW = iW, (EW = [{
        key: "render",
        value: function() {
          var WW = this,
            iW = this.props,
            OW = iW.active,
            EW = iW.allowEscapeViewBox,
            NW = iW.animationDuration,
            PW = iW.animationEasing,
            LW = iW.content,
            cW = iW.coordinate,
            wW = iW.filterNull,
            tW = iW.isAnimationActive,
            ZW = iW.offset,
            xW = iW.payload,
            lW = iW.payloadUniqBy,
            AW = iW.position,
            bW = iW.reverseDirection,
            jW = iW.useTranslate3d,
            UW = iW.viewBox,
            sW = iW.wrapperStyle,
            MW = null !== xW && void 0 !== xW ? xW : [];
          wW && MW.length && (MW = (0, VW.d)(xW.filter((function(iW) {
            return null != iW.value && (!0 !== iW.hide || WW.props.includeHidden)
          })), lW, rW));
          var KW = MW.length > 0;
          return mW.createElement(gW, {
            allowEscapeViewBox: EW,
            animationDuration: NW,
            animationEasing: PW,
            isAnimationActive: tW,
            active: OW,
            coordinate: cW,
            hasPayload: KW,
            offset: ZW,
            position: AW,
            reverseDirection: bW,
            useTranslate3d: jW,
            viewBox: UW,
            wrapperStyle: sW
          }, function(WW, iW) {
            return mW.isValidElement(WW) ? mW.cloneElement(WW, iW) : "function" === typeof WW ? mW.createElement(WW, iW) : mW.createElement(kW, iW)
          }(LW, CW(CW({}, this.props), {}, {
            payload: MW
          })))
        }
      }]) && XW(OW.prototype, EW), NW && XW(OW, NW), Object.defineProperty(OW, "prototype", {
        writable: !1
      }), OW;
      var OW, EW, NW
    }(mW.PureComponent);
    IW(zW, "displayName", "Tooltip"), IW(zW, "defaultProps", {
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
      isAnimationActive: !DW.d.isSsr,
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
  6930: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW
    });
    var mW = OW(62),
      EW = OW(6021),
      NW = OW(6390),
      PW = ["children", "className"];

    function LW() {
      return LW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, LW.apply(this, arguments)
    }

    function cW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }
    var wW = mW.forwardRef((function(WW, iW) {
      var OW = WW.children,
        wW = WW.className,
        tW = cW(WW, PW),
        ZW = (0, EW.d)("recharts-layer", wW);
      return mW.createElement("g", LW({
        className: ZW
      }, (0, NW.e)(tW, !0), {
        ref: iW
      }), OW)
    }))
  },
  6923: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW
    });
    var mW = OW(62),
      EW = OW(6021),
      NW = OW(6390),
      PW = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function LW() {
      return LW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, LW.apply(this, arguments)
    }

    function cW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function wW(WW) {
      var iW = WW.children,
        OW = WW.width,
        wW = WW.height,
        tW = WW.viewBox,
        ZW = WW.className,
        xW = WW.style,
        lW = WW.title,
        AW = WW.desc,
        bW = cW(WW, PW),
        jW = tW || {
          width: OW,
          height: wW,
          x: 0,
          y: 0
        },
        UW = (0, EW.d)("recharts-surface", ZW);
      return mW.createElement("svg", LW({}, (0, NW.e)(bW, !0, "svg"), {
        className: UW,
        width: OW,
        height: wW,
        style: xW,
        viewBox: "".concat(jW.x, " ").concat(jW.y, " ").concat(jW.width, " ").concat(jW.height)
      }), mW.createElement("title", null, lW), mW.createElement("desc", null, AW), iW)
    }
  },
  7316: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => sW,
      f: () => SW,
      h: () => HW,
      j: () => hW,
      n: () => MW,
      p: () => JW,
      r: () => TW,
      u: () => KW,
      y: () => yW,
      A: () => YW
    });
    var mW = OW(62),
      EW = OW(6919),
      NW = OW(7323),
      PW = OW.n(NW),
      LW = OW(7236),
      cW = OW.n(LW),
      wW = OW(6171),
      tW = OW.n(wW)()((function(WW) {
        return {
          x: WW.left,
          y: WW.top,
          width: WW.width,
          height: WW.height
        }
      }), (function(WW) {
        return ["l", WW.left, "t", WW.top, "w", WW.width, "h", WW.height].join("")
      })),
      ZW = OW(6107);
    var xW = (0, mW.createContext)(void 0),
      lW = (0, mW.createContext)(void 0),
      AW = (0, mW.createContext)(void 0),
      bW = (0, mW.createContext)({}),
      jW = (0, mW.createContext)(void 0),
      UW = (0, mW.createContext)(0),
      kW = (0, mW.createContext)(0),
      sW = function(WW) {
        var iW = WW.state,
          OW = iW.xAxisMap,
          EW = iW.yAxisMap,
          NW = iW.offset,
          PW = WW.clipPathId,
          LW = WW.children,
          cW = WW.width,
          wW = WW.height,
          ZW = tW(NW);
        return mW.createElement(xW.Provider, {
          value: OW
        }, mW.createElement(lW.Provider, {
          value: EW
        }, mW.createElement(bW.Provider, {
          value: NW
        }, mW.createElement(AW.Provider, {
          value: ZW
        }, mW.createElement(jW.Provider, {
          value: PW
        }, mW.createElement(UW.Provider, {
          value: wW
        }, mW.createElement(kW.Provider, {
          value: cW
        }, LW)))))))
      },
      MW = function() {
        return (0, mW.useContext)(jW)
      };
    var KW = function(WW) {
        var iW = (0, mW.useContext)(xW);
        null == iW && (0, EW.b)(!1);
        var OW = iW[WW];
        return null == OW && (0, EW.b)(!1), OW
      },
      SW = function() {
        var WW = (0, mW.useContext)(xW);
        return (0, ZW.i)(WW)
      },
      YW = function() {
        var WW = (0, mW.useContext)(lW);
        return PW()(WW, (function(WW) {
          return cW()(WW.domain, Number.isFinite)
        })) || (0, ZW.i)(WW)
      },
      yW = function(WW) {
        var iW = (0, mW.useContext)(lW);
        null == iW && (0, EW.b)(!1);
        var OW = iW[WW];
        return null == OW && (0, EW.b)(!1), OW
      },
      TW = function() {
        return (0, mW.useContext)(AW)
      },
      JW = function() {
        return (0, mW.useContext)(bW)
      },
      hW = function() {
        return (0, mW.useContext)(kW)
      },
      HW = function() {
        return (0, mW.useContext)(UW)
      }
  },
  7348: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => rW
    });
    var mW = OW(62);

    function EW() {}

    function NW(WW, iW, OW) {
      WW._context.bezierCurveTo((2 * WW._x0 + WW._x1) / 3, (2 * WW._y0 + WW._y1) / 3, (WW._x0 + 2 * WW._x1) / 3, (WW._y0 + 2 * WW._y1) / 3, (WW._x0 + 4 * WW._x1 + iW) / 6, (WW._y0 + 4 * WW._y1 + OW) / 6)
    }

    function PW(WW) {
      this._context = WW
    }

    function LW(WW) {
      this._context = WW
    }

    function cW(WW) {
      this._context = WW
    }
    PW.prototype = {
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
            NW(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(WW, iW) {
        switch (WW = +WW, iW = +iW, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(WW, iW) : this._context.moveTo(WW, iW);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            NW(this, WW, iW)
        }
        this._x0 = this._x1, this._x1 = WW, this._y0 = this._y1, this._y1 = iW
      }
    }, LW.prototype = {
      areaStart: EW,
      areaEnd: EW,
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
      point: function(WW, iW) {
        switch (WW = +WW, iW = +iW, this._point) {
          case 0:
            this._point = 1, this._x2 = WW, this._y2 = iW;
            break;
          case 1:
            this._point = 2, this._x3 = WW, this._y3 = iW;
            break;
          case 2:
            this._point = 3, this._x4 = WW, this._y4 = iW, this._context.moveTo((this._x0 + 4 * this._x1 + WW) / 6, (this._y0 + 4 * this._y1 + iW) / 6);
            break;
          default:
            NW(this, WW, iW)
        }
        this._x0 = this._x1, this._x1 = WW, this._y0 = this._y1, this._y1 = iW
      }
    }, cW.prototype = {
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
      point: function(WW, iW) {
        switch (WW = +WW, iW = +iW, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var OW = (this._x0 + 4 * this._x1 + WW) / 6,
              mW = (this._y0 + 4 * this._y1 + iW) / 6;
            this._line ? this._context.lineTo(OW, mW) : this._context.moveTo(OW, mW);
            break;
          case 3:
            this._point = 4;
          default:
            NW(this, WW, iW)
        }
        this._x0 = this._x1, this._x1 = WW, this._y0 = this._y1, this._y1 = iW
      }
    };
    class wW {
      constructor(WW, iW) {
        this._context = WW, this._x = iW
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
      point(WW, iW) {
        switch (WW = +WW, iW = +iW, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(WW, iW) : this._context.moveTo(WW, iW);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + WW) / 2, this._y0, this._x0, iW, WW, iW) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + iW) / 2, WW, this._y0, WW, iW)
        }
        this._x0 = WW, this._y0 = iW
      }
    }

    function tW(WW) {
      this._context = WW
    }

    function ZW(WW) {
      this._context = WW
    }

    function xW(WW) {
      return new ZW(WW)
    }

    function lW(WW) {
      return WW < 0 ? -1 : 1
    }

    function AW(WW, iW, OW) {
      var mW = WW._x1 - WW._x0,
        EW = iW - WW._x1,
        NW = (WW._y1 - WW._y0) / (mW || EW < 0 && -0),
        PW = (OW - WW._y1) / (EW || mW < 0 && -0),
        LW = (NW * EW + PW * mW) / (mW + EW);
      return (lW(NW) + lW(PW)) * Math.min(Math.abs(NW), Math.abs(PW), .5 * Math.abs(LW)) || 0
    }

    function bW(WW, iW) {
      var OW = WW._x1 - WW._x0;
      return OW ? (3 * (WW._y1 - WW._y0) / OW - iW) / 2 : iW
    }

    function jW(WW, iW, OW) {
      var mW = WW._x0,
        EW = WW._y0,
        NW = WW._x1,
        PW = WW._y1,
        LW = (NW - mW) / 3;
      WW._context.bezierCurveTo(mW + LW, EW + LW * iW, NW - LW, PW - LW * OW, NW, PW)
    }

    function UW(WW) {
      this._context = WW
    }

    function kW(WW) {
      this._context = new sW(WW)
    }

    function sW(WW) {
      this._context = WW
    }

    function MW(WW) {
      this._context = WW
    }

    function KW(WW) {
      var iW, OW, mW = WW.length - 1,
        EW = new Array(mW),
        NW = new Array(mW),
        PW = new Array(mW);
      for (EW[0] = 0, NW[0] = 2, PW[0] = WW[0] + 2 * WW[1], iW = 1; iW < mW - 1; ++iW) EW[iW] = 1, NW[iW] = 4, PW[iW] = 4 * WW[iW] + 2 * WW[iW + 1];
      for (EW[mW - 1] = 2, NW[mW - 1] = 7, PW[mW - 1] = 8 * WW[mW - 1] + WW[mW], iW = 1; iW < mW; ++iW) OW = EW[iW] / NW[iW - 1], NW[iW] -= OW, PW[iW] -= OW * PW[iW - 1];
      for (EW[mW - 1] = PW[mW - 1] / NW[mW - 1], iW = mW - 2; iW >= 0; --iW) EW[iW] = (PW[iW] - EW[iW + 1]) / NW[iW];
      for (NW[mW - 1] = (WW[mW] + EW[mW - 1]) / 2, iW = 0; iW < mW - 1; ++iW) NW[iW] = 2 * WW[iW + 1] - EW[iW + 1];
      return [EW, NW]
    }

    function SW(WW, iW) {
      this._context = WW, this._t = iW
    }
    tW.prototype = {
      areaStart: EW,
      areaEnd: EW,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(WW, iW) {
        WW = +WW, iW = +iW, this._point ? this._context.lineTo(WW, iW) : (this._point = 1, this._context.moveTo(WW, iW))
      }
    }, ZW.prototype = {
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
      point: function(WW, iW) {
        switch (WW = +WW, iW = +iW, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(WW, iW) : this._context.moveTo(WW, iW);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(WW, iW)
        }
      }
    }, UW.prototype = {
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
            jW(this, this._t0, bW(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(WW, iW) {
        var OW = NaN;
        if (iW = +iW, (WW = +WW) !== this._x1 || iW !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(WW, iW) : this._context.moveTo(WW, iW);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, jW(this, bW(this, OW = AW(this, WW, iW)), OW);
              break;
            default:
              jW(this, this._t0, OW = AW(this, WW, iW))
          }
          this._x0 = this._x1, this._x1 = WW, this._y0 = this._y1, this._y1 = iW, this._t0 = OW
        }
      }
    }, (kW.prototype = Object.create(UW.prototype)).point = function(WW, iW) {
      UW.prototype.point.call(this, iW, WW)
    }, sW.prototype = {
      moveTo: function(WW, iW) {
        this._context.moveTo(iW, WW)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(WW, iW) {
        this._context.lineTo(iW, WW)
      },
      bezierCurveTo: function(WW, iW, OW, mW, EW, NW) {
        this._context.bezierCurveTo(iW, WW, mW, OW, NW, EW)
      }
    }, MW.prototype = {
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
          iW = this._y,
          OW = WW.length;
        if (OW)
          if (this._line ? this._context.lineTo(WW[0], iW[0]) : this._context.moveTo(WW[0], iW[0]), 2 === OW) this._context.lineTo(WW[1], iW[1]);
          else
            for (var mW = KW(WW), EW = KW(iW), NW = 0, PW = 1; PW < OW; ++NW, ++PW) this._context.bezierCurveTo(mW[0][NW], EW[0][NW], mW[1][NW], EW[1][NW], WW[PW], iW[PW]);
        (this._line || 0 !== this._line && 1 === OW) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(WW, iW) {
        this._x.push(+WW), this._y.push(+iW)
      }
    }, SW.prototype = {
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
      point: function(WW, iW) {
        switch (WW = +WW, iW = +iW, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(WW, iW) : this._context.moveTo(WW, iW);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, iW), this._context.lineTo(WW, iW);
            else {
              var OW = this._x * (1 - this._t) + WW * this._t;
              this._context.lineTo(OW, this._y), this._context.lineTo(OW, iW)
            }
        }
        this._x = WW, this._y = iW
      }
    };
    var YW = OW(7202),
      yW = OW(7059),
      TW = OW(7063);

    function JW(WW) {
      return WW[0]
    }

    function hW(WW) {
      return WW[1]
    }

    function HW(WW, iW) {
      var OW = (0, yW.d)(!0),
        mW = null,
        EW = xW,
        NW = null,
        PW = (0, TW.b)(LW);

      function LW(LW) {
        var cW, wW, tW, ZW = (LW = (0, YW.e)(LW)).length,
          xW = !1;
        for (null == mW && (NW = EW(tW = PW())), cW = 0; cW <= ZW; ++cW) !(cW < ZW && OW(wW = LW[cW], cW, LW)) === xW && ((xW = !xW) ? NW.lineStart() : NW.lineEnd()), xW && NW.point(+WW(wW, cW, LW), +iW(wW, cW, LW));
        if (tW) return NW = null, tW + "" || null
      }
      return WW = "function" === typeof WW ? WW : void 0 === WW ? JW : (0, yW.d)(WW), iW = "function" === typeof iW ? iW : void 0 === iW ? hW : (0, yW.d)(iW), LW.x = function(iW) {
        return arguments.length ? (WW = "function" === typeof iW ? iW : (0, yW.d)(+iW), LW) : WW
      }, LW.y = function(WW) {
        return arguments.length ? (iW = "function" === typeof WW ? WW : (0, yW.d)(+WW), LW) : iW
      }, LW.defined = function(WW) {
        return arguments.length ? (OW = "function" === typeof WW ? WW : (0, yW.d)(!!WW), LW) : OW
      }, LW.curve = function(WW) {
        return arguments.length ? (EW = WW, null != mW && (NW = EW(mW)), LW) : EW
      }, LW.context = function(WW) {
        return arguments.length ? (null == WW ? mW = NW = null : NW = EW(mW = WW), LW) : mW
      }, LW
    }

    function nW(WW, iW, OW) {
      var mW = null,
        EW = (0, yW.d)(!0),
        NW = null,
        PW = xW,
        LW = null,
        cW = (0, TW.b)(wW);

      function wW(wW) {
        var tW, ZW, xW, lW, AW, bW = (wW = (0, YW.e)(wW)).length,
          jW = !1,
          UW = new Array(bW),
          kW = new Array(bW);
        for (null == NW && (LW = PW(AW = cW())), tW = 0; tW <= bW; ++tW) {
          if (!(tW < bW && EW(lW = wW[tW], tW, wW)) === jW)
            if (jW = !jW) ZW = tW, LW.areaStart(), LW.lineStart();
            else {
              for (LW.lineEnd(), LW.lineStart(), xW = tW - 1; xW >= ZW; --xW) LW.point(UW[xW], kW[xW]);
              LW.lineEnd(), LW.areaEnd()
            } jW && (UW[tW] = +WW(lW, tW, wW), kW[tW] = +iW(lW, tW, wW), LW.point(mW ? +mW(lW, tW, wW) : UW[tW], OW ? +OW(lW, tW, wW) : kW[tW]))
        }
        if (AW) return LW = null, AW + "" || null
      }

      function tW() {
        return HW().defined(EW).curve(PW).context(NW)
      }
      return WW = "function" === typeof WW ? WW : void 0 === WW ? JW : (0, yW.d)(+WW), iW = "function" === typeof iW ? iW : void 0 === iW ? (0, yW.d)(0) : (0, yW.d)(+iW), OW = "function" === typeof OW ? OW : void 0 === OW ? hW : (0, yW.d)(+OW), wW.x = function(iW) {
        return arguments.length ? (WW = "function" === typeof iW ? iW : (0, yW.d)(+iW), mW = null, wW) : WW
      }, wW.x0 = function(iW) {
        return arguments.length ? (WW = "function" === typeof iW ? iW : (0, yW.d)(+iW), wW) : WW
      }, wW.x1 = function(WW) {
        return arguments.length ? (mW = null == WW ? null : "function" === typeof WW ? WW : (0, yW.d)(+WW), wW) : mW
      }, wW.y = function(WW) {
        return arguments.length ? (iW = "function" === typeof WW ? WW : (0, yW.d)(+WW), OW = null, wW) : iW
      }, wW.y0 = function(WW) {
        return arguments.length ? (iW = "function" === typeof WW ? WW : (0, yW.d)(+WW), wW) : iW
      }, wW.y1 = function(WW) {
        return arguments.length ? (OW = null == WW ? null : "function" === typeof WW ? WW : (0, yW.d)(+WW), wW) : OW
      }, wW.lineX0 = wW.lineY0 = function() {
        return tW().x(WW).y(iW)
      }, wW.lineY1 = function() {
        return tW().x(WW).y(OW)
      }, wW.lineX1 = function() {
        return tW().x(mW).y(iW)
      }, wW.defined = function(WW) {
        return arguments.length ? (EW = "function" === typeof WW ? WW : (0, yW.d)(!!WW), wW) : EW
      }, wW.curve = function(WW) {
        return arguments.length ? (PW = WW, null != NW && (LW = PW(NW)), wW) : PW
      }, wW.context = function(WW) {
        return arguments.length ? (null == WW ? NW = LW = null : LW = PW(NW = WW), wW) : NW
      }, wW
    }
    var uW = OW(7005),
      oW = OW.n(uW),
      dW = OW(6223),
      eW = OW.n(dW),
      vW = OW(6021),
      gW = OW(6415),
      DW = OW(6390),
      VW = OW(6107);

    function pW(WW) {
      return pW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, pW(WW)
    }

    function fW() {
      return fW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, fW.apply(this, arguments)
    }

    function CW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function XW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? CW(Object(OW), !0).forEach((function(iW) {
          BW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : CW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function BW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != pW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != pW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == pW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }
    var qW = {
        curveBasisClosed: function(WW) {
          return new LW(WW)
        },
        curveBasisOpen: function(WW) {
          return new cW(WW)
        },
        curveBasis: function(WW) {
          return new PW(WW)
        },
        curveBumpX: function(WW) {
          return new wW(WW, !0)
        },
        curveBumpY: function(WW) {
          return new wW(WW, !1)
        },
        curveLinearClosed: function(WW) {
          return new tW(WW)
        },
        curveLinear: xW,
        curveMonotoneX: function(WW) {
          return new UW(WW)
        },
        curveMonotoneY: function(WW) {
          return new kW(WW)
        },
        curveNatural: function(WW) {
          return new MW(WW)
        },
        curveStep: function(WW) {
          return new SW(WW, .5)
        },
        curveStepAfter: function(WW) {
          return new SW(WW, 1)
        },
        curveStepBefore: function(WW) {
          return new SW(WW, 0)
        }
      },
      RW = function(WW) {
        return WW.x === +WW.x && WW.y === +WW.y
      },
      GW = function(WW) {
        return WW.x
      },
      IW = function(WW) {
        return WW.y
      },
      aW = function(WW) {
        var iW, OW = WW.type,
          mW = void 0 === OW ? "linear" : OW,
          EW = WW.points,
          NW = void 0 === EW ? [] : EW,
          PW = WW.baseLine,
          LW = WW.layout,
          cW = WW.connectNulls,
          wW = void 0 !== cW && cW,
          tW = function(WW, iW) {
            if (eW()(WW)) return WW;
            var OW = "curve".concat(oW()(WW));
            return "curveMonotone" !== OW && "curveBump" !== OW || !iW ? qW[OW] || xW : qW["".concat(OW).concat("vertical" === iW ? "Y" : "X")]
          }(mW, LW),
          ZW = wW ? NW.filter((function(WW) {
            return RW(WW)
          })) : NW;
        if (Array.isArray(PW)) {
          var lW = wW ? PW.filter((function(WW) {
              return RW(WW)
            })) : PW,
            AW = ZW.map((function(WW, iW) {
              return XW(XW({}, WW), {}, {
                base: lW[iW]
              })
            }));
          return (iW = "vertical" === LW ? nW().y(IW).x1(GW).x0((function(WW) {
            return WW.base.x
          })) : nW().x(GW).y1(IW).y0((function(WW) {
            return WW.base.y
          }))).defined(RW).curve(tW), iW(AW)
        }
        return (iW = "vertical" === LW && (0, VW.v)(PW) ? nW().y(IW).x1(GW).x0(PW) : (0, VW.v)(PW) ? nW().x(GW).y1(IW).y0(PW) : HW().x(GW).y(IW)).defined(RW).curve(tW), iW(ZW)
      },
      rW = function(WW) {
        var iW = WW.className,
          OW = WW.points,
          EW = WW.path,
          NW = WW.pathRef;
        if ((!OW || !OW.length) && !EW) return null;
        var PW = OW && OW.length ? aW(WW) : EW;
        return mW.createElement("path", fW({}, (0, DW.e)(WW, !1), (0, gW.j)(WW), {
          className: (0, vW.d)("recharts-curve", iW),
          d: PW,
          ref: NW
        }))
      }
  },
  7065: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => cW
    });
    var mW = OW(62),
      EW = OW(6021),
      NW = OW(6415),
      PW = OW(6390);

    function LW() {
      return LW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, LW.apply(this, arguments)
    }
    var cW = function(WW) {
      var iW = WW.cx,
        OW = WW.cy,
        cW = WW.r,
        wW = WW.className,
        tW = (0, EW.d)("recharts-dot", wW);
      return iW === +iW && OW === +OW && cW === +cW ? mW.createElement("circle", LW({}, (0, PW.e)(WW, !1), (0, NW.j)(WW), {
        className: tW,
        cx: iW,
        cy: OW,
        r: cW
      })) : null
    }
  },
  7072: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => UW,
      h: () => bW
    });
    var mW = OW(62),
      EW = OW(6021),
      NW = OW(7081),
      PW = OW(6390);

    function LW(WW) {
      return LW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, LW(WW)
    }

    function cW() {
      return cW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, cW.apply(this, arguments)
    }

    function wW(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        var OW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != OW) {
          var mW, EW, NW, PW, LW = [],
            cW = !0,
            wW = !1;
          try {
            if (NW = (OW = OW.call(WW)).next, 0 === iW) {
              if (Object(OW) !== OW) return;
              cW = !1
            } else
              for (; !(cW = (mW = NW.call(OW)).done) && (LW.push(mW.value), LW.length !== iW); cW = !0);
          } catch (WW) {
            wW = !0, EW = WW
          } finally {
            try {
              if (!cW && null != OW.return && (PW = OW.return(), Object(PW) !== PW)) return
            } finally {
              if (wW) throw EW
            }
          }
          return LW
        }
      }(WW, iW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return tW(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return tW(WW, iW)
      }(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function ZW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function xW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? ZW(Object(OW), !0).forEach((function(iW) {
          lW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : ZW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function lW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != LW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != LW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == LW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }
    var AW = function(WW, iW, OW, mW, EW) {
        var NW, PW = Math.min(Math.abs(OW) / 2, Math.abs(mW) / 2),
          LW = mW >= 0 ? 1 : -1,
          cW = OW >= 0 ? 1 : -1,
          wW = mW >= 0 && OW >= 0 || mW < 0 && OW < 0 ? 1 : 0;
        if (PW > 0 && EW instanceof Array) {
          for (var tW = [0, 0, 0, 0], ZW = 0; ZW < 4; ZW++) tW[ZW] = EW[ZW] > PW ? PW : EW[ZW];
          NW = "M".concat(WW, ",").concat(iW + LW * tW[0]), tW[0] > 0 && (NW += "A ".concat(tW[0], ",").concat(tW[0], ",0,0,").concat(wW, ",").concat(WW + cW * tW[0], ",").concat(iW)), NW += "L ".concat(WW + OW - cW * tW[1], ",").concat(iW), tW[1] > 0 && (NW += "A ".concat(tW[1], ",").concat(tW[1], ",0,0,").concat(wW, ",\n        ").concat(WW + OW, ",").concat(iW + LW * tW[1])), NW += "L ".concat(WW + OW, ",").concat(iW + mW - LW * tW[2]), tW[2] > 0 && (NW += "A ".concat(tW[2], ",").concat(tW[2], ",0,0,").concat(wW, ",\n        ").concat(WW + OW - cW * tW[2], ",").concat(iW + mW)), NW += "L ".concat(WW + cW * tW[3], ",").concat(iW + mW), tW[3] > 0 && (NW += "A ".concat(tW[3], ",").concat(tW[3], ",0,0,").concat(wW, ",\n        ").concat(WW, ",").concat(iW + mW - LW * tW[3])), NW += "Z"
        } else if (PW > 0 && EW === +EW && EW > 0) {
          var xW = Math.min(PW, EW);
          NW = "M ".concat(WW, ",").concat(iW + LW * xW, "\n            A ").concat(xW, ",").concat(xW, ",0,0,").concat(wW, ",").concat(WW + cW * xW, ",").concat(iW, "\n            L ").concat(WW + OW - cW * xW, ",").concat(iW, "\n            A ").concat(xW, ",").concat(xW, ",0,0,").concat(wW, ",").concat(WW + OW, ",").concat(iW + LW * xW, "\n            L ").concat(WW + OW, ",").concat(iW + mW - LW * xW, "\n            A ").concat(xW, ",").concat(xW, ",0,0,").concat(wW, ",").concat(WW + OW - cW * xW, ",").concat(iW + mW, "\n            L ").concat(WW + cW * xW, ",").concat(iW + mW, "\n            A ").concat(xW, ",").concat(xW, ",0,0,").concat(wW, ",").concat(WW, ",").concat(iW + mW - LW * xW, " Z")
        } else NW = "M ".concat(WW, ",").concat(iW, " h ").concat(OW, " v ").concat(mW, " h ").concat(-OW, " Z");
        return NW
      },
      bW = function(WW, iW) {
        if (!WW || !iW) return !1;
        var OW = WW.x,
          mW = WW.y,
          EW = iW.x,
          NW = iW.y,
          PW = iW.width,
          LW = iW.height;
        if (Math.abs(PW) > 0 && Math.abs(LW) > 0) {
          var cW = Math.min(EW, EW + PW),
            wW = Math.max(EW, EW + PW),
            tW = Math.min(NW, NW + LW),
            ZW = Math.max(NW, NW + LW);
          return OW >= cW && OW <= wW && mW >= tW && mW <= ZW
        }
        return !1
      },
      jW = {
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
      UW = function(WW) {
        var iW = xW(xW({}, jW), WW),
          OW = (0, mW.useRef)(),
          LW = wW((0, mW.useState)(-1), 2),
          tW = LW[0],
          ZW = LW[1];
        (0, mW.useEffect)((function() {
          if (OW.current && OW.current.getTotalLength) try {
            var WW = OW.current.getTotalLength();
            WW && ZW(WW)
          } catch (iW) {}
        }), []);
        var lW = iW.x,
          bW = iW.y,
          UW = iW.width,
          kW = iW.height,
          sW = iW.radius,
          MW = iW.className,
          KW = iW.animationEasing,
          SW = iW.animationDuration,
          YW = iW.animationBegin,
          yW = iW.isAnimationActive,
          TW = iW.isUpdateAnimationActive;
        if (lW !== +lW || bW !== +bW || UW !== +UW || kW !== +kW || 0 === UW || 0 === kW) return null;
        var JW = (0, EW.d)("recharts-rectangle", MW);
        return TW ? mW.createElement(NW.b, {
          canBegin: tW > 0,
          from: {
            width: UW,
            height: kW,
            x: lW,
            y: bW
          },
          to: {
            width: UW,
            height: kW,
            x: lW,
            y: bW
          },
          duration: SW,
          animationEasing: KW,
          isActive: TW
        }, (function(WW) {
          var EW = WW.width,
            LW = WW.height,
            wW = WW.x,
            ZW = WW.y;
          return mW.createElement(NW.b, {
            canBegin: tW > 0,
            from: "0px ".concat(-1 === tW ? 1 : tW, "px"),
            to: "".concat(tW, "px 0px"),
            attributeName: "strokeDasharray",
            kZ: YW,
            duration: SW,
            isActive: yW,
            easing: KW
          }, mW.createElement("path", cW({}, (0, PW.e)(iW, !0), {
            className: JW,
            d: AW(wW, ZW, EW, LW, sW),
            ref: OW
          })))
        })) : mW.createElement("path", cW({}, (0, PW.e)(iW, !0), {
          className: JW,
          d: AW(lW, bW, UW, kW, sW)
        }))
      }
  },
  7297: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => jW
    });
    var mW = OW(62),
      EW = OW(6021),
      NW = OW(6390),
      PW = OW(7211),
      LW = OW(6107);

    function cW(WW) {
      return cW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, cW(WW)
    }

    function wW() {
      return wW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, wW.apply(this, arguments)
    }

    function tW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function ZW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? tW(Object(OW), !0).forEach((function(iW) {
          xW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : tW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function xW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != cW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != cW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == cW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }
    var lW = function(WW) {
        var iW = WW.cx,
          OW = WW.cy,
          mW = WW.radius,
          EW = WW.angle,
          NW = WW.sign,
          LW = WW.isExternal,
          cW = WW.cornerRadius,
          wW = WW.cornerIsExternal,
          tW = cW * (LW ? 1 : -1) + mW,
          ZW = Math.asin(cW / tW) / PW.e,
          xW = wW ? EW : EW + NW * ZW,
          lW = wW ? EW - NW * ZW : EW;
        return {
          center: (0, PW.i)(iW, OW, tW, xW),
          circleTangency: (0, PW.i)(iW, OW, mW, xW),
          lineTangency: (0, PW.i)(iW, OW, tW * Math.cos(ZW * PW.e), lW),
          PZ: ZW
        }
      },
      AW = function(WW) {
        var iW = WW.cx,
          OW = WW.cy,
          mW = WW.innerRadius,
          EW = WW.outerRadius,
          NW = WW.startAngle,
          cW = function(WW, iW) {
            return (0, LW.y)(iW - WW) * Math.min(Math.abs(iW - WW), 359.999)
          }(NW, WW.endAngle),
          wW = NW + cW,
          tW = (0, PW.i)(iW, OW, EW, NW),
          ZW = (0, PW.i)(iW, OW, EW, wW),
          xW = "M ".concat(tW.x, ",").concat(tW.y, "\n    A ").concat(EW, ",").concat(EW, ",0,\n    ").concat(+(Math.abs(cW) > 180), ",").concat(+(NW > wW), ",\n    ").concat(ZW.x, ",").concat(ZW.y, "\n  ");
        if (mW > 0) {
          var lW = (0, PW.i)(iW, OW, mW, NW),
            AW = (0, PW.i)(iW, OW, mW, wW);
          xW += "L ".concat(AW.x, ",").concat(AW.y, "\n            A ").concat(mW, ",").concat(mW, ",0,\n            ").concat(+(Math.abs(cW) > 180), ",").concat(+(NW <= wW), ",\n            ").concat(lW.x, ",").concat(lW.y, " Z")
        } else xW += "L ".concat(iW, ",").concat(OW, " Z");
        return xW
      },
      bW = {
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
      jW = function(WW) {
        var iW = ZW(ZW({}, bW), WW),
          OW = iW.cx,
          PW = iW.cy,
          cW = iW.innerRadius,
          tW = iW.outerRadius,
          xW = iW.cornerRadius,
          jW = iW.forceCornerRadius,
          UW = iW.cornerIsExternal,
          kW = iW.startAngle,
          sW = iW.endAngle,
          MW = iW.className;
        if (tW < cW || kW === sW) return null;
        var KW, SW = (0, EW.d)("recharts-sector", MW),
          YW = tW - cW,
          yW = (0, LW.m)(xW, YW, 0, !0);
        return KW = yW > 0 && Math.abs(kW - sW) < 360 ? function(WW) {
          var iW = WW.cx,
            OW = WW.cy,
            mW = WW.innerRadius,
            EW = WW.outerRadius,
            NW = WW.cornerRadius,
            PW = WW.forceCornerRadius,
            cW = WW.cornerIsExternal,
            wW = WW.startAngle,
            tW = WW.endAngle,
            ZW = (0, LW.y)(tW - wW),
            xW = lW({
              cx: iW,
              cy: OW,
              radius: EW,
              angle: wW,
              sign: ZW,
              cornerRadius: NW,
              cornerIsExternal: cW
            }),
            bW = xW.circleTangency,
            jW = xW.lineTangency,
            UW = xW.PZ,
            kW = lW({
              cx: iW,
              cy: OW,
              radius: EW,
              angle: tW,
              sign: -ZW,
              cornerRadius: NW,
              cornerIsExternal: cW
            }),
            sW = kW.circleTangency,
            MW = kW.lineTangency,
            KW = kW.PZ,
            SW = cW ? Math.abs(wW - tW) : Math.abs(wW - tW) - UW - KW;
          if (SW < 0) return PW ? "M ".concat(jW.x, ",").concat(jW.y, "\n        a").concat(NW, ",").concat(NW, ",0,0,1,").concat(2 * NW, ",0\n        a").concat(NW, ",").concat(NW, ",0,0,1,").concat(2 * -NW, ",0\n      ") : AW({
            cx: iW,
            cy: OW,
            innerRadius: mW,
            outerRadius: EW,
            startAngle: wW,
            endAngle: tW
          });
          var YW = "M ".concat(jW.x, ",").concat(jW.y, "\n    A").concat(NW, ",").concat(NW, ",0,0,").concat(+(ZW < 0), ",").concat(bW.x, ",").concat(bW.y, "\n    A").concat(EW, ",").concat(EW, ",0,").concat(+(SW > 180), ",").concat(+(ZW < 0), ",").concat(sW.x, ",").concat(sW.y, "\n    A").concat(NW, ",").concat(NW, ",0,0,").concat(+(ZW < 0), ",").concat(MW.x, ",").concat(MW.y, "\n  ");
          if (mW > 0) {
            var yW = lW({
                cx: iW,
                cy: OW,
                radius: mW,
                angle: wW,
                sign: ZW,
                isExternal: !0,
                cornerRadius: NW,
                cornerIsExternal: cW
              }),
              TW = yW.circleTangency,
              JW = yW.lineTangency,
              hW = yW.PZ,
              HW = lW({
                cx: iW,
                cy: OW,
                radius: mW,
                angle: tW,
                sign: -ZW,
                isExternal: !0,
                cornerRadius: NW,
                cornerIsExternal: cW
              }),
              nW = HW.circleTangency,
              uW = HW.lineTangency,
              oW = HW.PZ,
              dW = cW ? Math.abs(wW - tW) : Math.abs(wW - tW) - hW - oW;
            if (dW < 0 && 0 === NW) return "".concat(YW, "L").concat(iW, ",").concat(OW, "Z");
            YW += "L".concat(uW.x, ",").concat(uW.y, "\n      A").concat(NW, ",").concat(NW, ",0,0,").concat(+(ZW < 0), ",").concat(nW.x, ",").concat(nW.y, "\n      A").concat(mW, ",").concat(mW, ",0,").concat(+(dW > 180), ",").concat(+(ZW > 0), ",").concat(TW.x, ",").concat(TW.y, "\n      A").concat(NW, ",").concat(NW, ",0,0,").concat(+(ZW < 0), ",").concat(JW.x, ",").concat(JW.y, "Z")
          } else YW += "L".concat(iW, ",").concat(OW, "Z");
          return YW
        }({
          cx: OW,
          cy: PW,
          innerRadius: cW,
          outerRadius: tW,
          cornerRadius: Math.min(yW, YW / 2),
          forceCornerRadius: jW,
          cornerIsExternal: UW,
          startAngle: kW,
          endAngle: sW
        }) : AW({
          cx: OW,
          cy: PW,
          innerRadius: cW,
          outerRadius: tW,
          startAngle: kW,
          endAngle: sW
        }), mW.createElement("path", wW({}, (0, NW.e)(iW, !0), {
          className: SW,
          d: KW,
          role: "img"
        }))
      }
  },
  6997: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => XW
    });
    var mW = OW(62),
      EW = OW(7005),
      NW = OW.n(EW);
    Math.abs, Math.atan2;
    const PW = Math.cos,
      LW = (Math.max, Math.min, Math.sin),
      cW = Math.sqrt,
      wW = Math.PI,
      tW = 2 * wW;
    const ZW = {
        draw(WW, iW) {
          const OW = cW(iW / wW);
          WW.moveTo(OW, 0), WW.arc(0, 0, OW, 0, tW)
        }
      },
      xW = {
        draw(WW, iW) {
          const OW = cW(iW / 5) / 2;
          WW.moveTo(-3 * OW, -OW), WW.lineTo(-OW, -OW), WW.lineTo(-OW, -3 * OW), WW.lineTo(OW, -3 * OW), WW.lineTo(OW, -OW), WW.lineTo(3 * OW, -OW), WW.lineTo(3 * OW, OW), WW.lineTo(OW, OW), WW.lineTo(OW, 3 * OW), WW.lineTo(-OW, 3 * OW), WW.lineTo(-OW, OW), WW.lineTo(-3 * OW, OW), WW.closePath()
        }
      },
      lW = cW(1 / 3),
      AW = 2 * lW,
      bW = {
        draw(WW, iW) {
          const OW = cW(iW / AW),
            mW = OW * lW;
          WW.moveTo(0, -OW), WW.lineTo(mW, 0), WW.lineTo(0, OW), WW.lineTo(-mW, 0), WW.closePath()
        }
      },
      jW = {
        draw(WW, iW) {
          const OW = cW(iW),
            mW = -OW / 2;
          WW.rect(mW, mW, OW, OW)
        }
      },
      UW = LW(wW / 10) / LW(7 * wW / 10),
      kW = LW(tW / 10) * UW,
      sW = -PW(tW / 10) * UW,
      MW = {
        draw(WW, iW) {
          const OW = cW(.8908130915292852 * iW),
            mW = kW * OW,
            EW = sW * OW;
          WW.moveTo(0, -OW), WW.lineTo(mW, EW);
          for (let NW = 1; NW < 5; ++NW) {
            const iW = tW * NW / 5,
              cW = PW(iW),
              wW = LW(iW);
            WW.lineTo(wW * OW, -cW * OW), WW.lineTo(cW * mW - wW * EW, wW * mW + cW * EW)
          }
          WW.closePath()
        }
      },
      KW = cW(3),
      SW = {
        draw(WW, iW) {
          const OW = -cW(iW / (3 * KW));
          WW.moveTo(0, 2 * OW), WW.lineTo(-KW * OW, -OW), WW.lineTo(KW * OW, -OW), WW.closePath()
        }
      },
      YW = -.5,
      yW = cW(3) / 2,
      TW = 1 / cW(12),
      JW = 3 * (TW / 2 + 1),
      hW = {
        draw(WW, iW) {
          const OW = cW(iW / JW),
            mW = OW / 2,
            EW = OW * TW,
            NW = mW,
            PW = OW * TW + OW,
            LW = -NW,
            wW = PW;
          WW.moveTo(mW, EW), WW.lineTo(NW, PW), WW.lineTo(LW, wW), WW.lineTo(YW * mW - yW * EW, yW * mW + YW * EW), WW.lineTo(YW * NW - yW * PW, yW * NW + YW * PW), WW.lineTo(YW * LW - yW * wW, yW * LW + YW * wW), WW.lineTo(YW * mW + yW * EW, YW * EW - yW * mW), WW.lineTo(YW * NW + yW * PW, YW * PW - yW * NW), WW.lineTo(YW * LW + yW * wW, YW * wW - yW * LW), WW.closePath()
        }
      };
    var HW = OW(7059),
      nW = OW(7063);
    cW(3), cW(3);
    var uW = OW(6021),
      oW = OW(6390);

    function dW(WW) {
      return dW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, dW(WW)
    }
    var eW = ["type", "size", "sizeType"];

    function vW() {
      return vW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, vW.apply(this, arguments)
    }

    function gW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function DW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? gW(Object(OW), !0).forEach((function(iW) {
          VW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : gW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function VW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != dW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != dW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == dW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function pW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }
    var fW = {
        symbolCircle: ZW,
        symbolCross: xW,
        symbolDiamond: bW,
        symbolSquare: jW,
        symbolStar: MW,
        symbolTriangle: SW,
        symbolWye: hW
      },
      CW = Math.PI / 180,
      XW = function(WW) {
        var iW = WW.type,
          OW = void 0 === iW ? "circle" : iW,
          EW = WW.size,
          PW = void 0 === EW ? 64 : EW,
          LW = WW.sizeType,
          cW = void 0 === LW ? "area" : LW,
          wW = DW(DW({}, pW(WW, eW)), {}, {
            type: OW,
            size: PW,
            sizeType: cW
          }),
          tW = wW.className,
          xW = wW.cx,
          lW = wW.cy,
          AW = (0, oW.e)(wW, !0);
        return xW === +xW && lW === +lW && PW === +PW ? mW.createElement("path", vW({}, AW, {
          className: (0, uW.d)("recharts-symbols", tW),
          transform: "translate(".concat(xW, ", ").concat(lW, ")"),
          d: function() {
            var WW = function(WW) {
                var iW = "symbol".concat(NW()(WW));
                return fW[iW] || ZW
              }(OW),
              iW = function(WW, iW) {
                let OW = null,
                  mW = (0, nW.b)(EW);

                function EW() {
                  let EW;
                  if (OW || (OW = EW = mW()), WW.apply(this, arguments).draw(OW, +iW.apply(this, arguments)), EW) return OW = null, EW + "" || null
                }
                return WW = "function" === typeof WW ? WW : (0, HW.d)(WW || ZW), iW = "function" === typeof iW ? iW : (0, HW.d)(void 0 === iW ? 64 : +iW), EW.type = function(iW) {
                  return arguments.length ? (WW = "function" === typeof iW ? iW : (0, HW.d)(iW), EW) : WW
                }, EW.size = function(WW) {
                  return arguments.length ? (iW = "function" === typeof WW ? WW : (0, HW.d)(+WW), EW) : iW
                }, EW.context = function(WW) {
                  return arguments.length ? (OW = null == WW ? null : WW, EW) : OW
                }, EW
              }().type(WW).size(function(WW, iW, OW) {
                if ("area" === iW) return WW;
                switch (OW) {
                  case "cross":
                    return 5 * WW * WW / 9;
                  case "diamond":
                    return .5 * WW * WW / Math.sqrt(3);
                  case "square":
                    return WW * WW;
                  case "star":
                    var mW = 18 * CW;
                    return 1.25 * WW * WW * (Math.tan(mW) - Math.tan(2 * mW) * Math.pow(Math.tan(mW), 2));
                  case "triangle":
                    return Math.sqrt(3) * WW * WW / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * WW * WW / 8;
                  default:
                    return Math.PI * WW * WW / 4
                }
              }(PW, cW, OW));
            return iW()
          }()
        })) : null
      };
    XW.registerSymbol = function(WW, iW) {
      fW["symbol".concat(NW()(WW))] = iW
    }
  },
  7275: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => VW,
      f: () => RW,
      g: () => pW,
      h: () => fW,
      l: () => CW
    });
    var mW = OW(62),
      EW = OW(6223),
      NW = OW.n(EW),
      PW = OW(7284),
      LW = OW.n(PW),
      cW = OW(7293),
      wW = OW.n(cW),
      tW = OW(7175),
      ZW = OW.n(tW),
      xW = OW(7072),
      lW = OW(6021),
      AW = OW(7081),
      bW = OW(6390);

    function jW(WW) {
      return jW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, jW(WW)
    }

    function UW() {
      return UW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW) Object.prototype.hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, UW.apply(this, arguments)
    }

    function kW(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        var OW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != OW) {
          var mW, EW, NW, PW, LW = [],
            cW = !0,
            wW = !1;
          try {
            if (NW = (OW = OW.call(WW)).next, 0 === iW) {
              if (Object(OW) !== OW) return;
              cW = !1
            } else
              for (; !(cW = (mW = NW.call(OW)).done) && (LW.push(mW.value), LW.length !== iW); cW = !0);
          } catch (WW) {
            wW = !0, EW = WW
          } finally {
            try {
              if (!cW && null != OW.return && (PW = OW.return(), Object(PW) !== PW)) return
            } finally {
              if (wW) throw EW
            }
          }
          return LW
        }
      }(WW, iW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return sW(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return sW(WW, iW)
      }(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function MW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function KW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? MW(Object(OW), !0).forEach((function(iW) {
          SW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : MW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function SW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != jW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != jW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == jW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }
    var YW = function(WW, iW, OW, mW, EW) {
        var NW, PW = OW - mW;
        return NW = "M ".concat(WW, ",").concat(iW), NW += "L ".concat(WW + OW, ",").concat(iW), NW += "L ".concat(WW + OW - PW / 2, ",").concat(iW + EW), NW += "L ".concat(WW + OW - PW / 2 - mW, ",").concat(iW + EW), NW += "L ".concat(WW, ",").concat(iW, " Z")
      },
      yW = {
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
      TW = function(WW) {
        var iW = KW(KW({}, yW), WW),
          OW = (0, mW.useRef)(),
          EW = kW((0, mW.useState)(-1), 2),
          NW = EW[0],
          PW = EW[1];
        (0, mW.useEffect)((function() {
          if (OW.current && OW.current.getTotalLength) try {
            var WW = OW.current.getTotalLength();
            WW && PW(WW)
          } catch (iW) {}
        }), []);
        var LW = iW.x,
          cW = iW.y,
          wW = iW.upperWidth,
          tW = iW.lowerWidth,
          ZW = iW.height,
          xW = iW.className,
          jW = iW.animationEasing,
          sW = iW.animationDuration,
          MW = iW.animationBegin,
          SW = iW.isUpdateAnimationActive;
        if (LW !== +LW || cW !== +cW || wW !== +wW || tW !== +tW || ZW !== +ZW || 0 === wW && 0 === tW || 0 === ZW) return null;
        var TW = (0, lW.d)("recharts-trapezoid", xW);
        return SW ? mW.createElement(AW.b, {
          canBegin: NW > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: ZW,
            x: LW,
            y: cW
          },
          to: {
            upperWidth: wW,
            lowerWidth: tW,
            height: ZW,
            x: LW,
            y: cW
          },
          duration: sW,
          animationEasing: jW,
          isActive: SW
        }, (function(WW) {
          var EW = WW.upperWidth,
            PW = WW.lowerWidth,
            LW = WW.height,
            cW = WW.x,
            wW = WW.y;
          return mW.createElement(AW.b, {
            canBegin: NW > 0,
            from: "0px ".concat(-1 === NW ? 1 : NW, "px"),
            to: "".concat(NW, "px 0px"),
            attributeName: "strokeDasharray",
            kZ: MW,
            duration: sW,
            easing: jW
          }, mW.createElement("path", UW({}, (0, bW.e)(iW, !0), {
            className: TW,
            d: YW(cW, wW, EW, PW, LW),
            ref: OW
          })))
        })) : mW.createElement("g", null, mW.createElement("path", UW({}, (0, bW.e)(iW, !0), {
          className: TW,
          d: YW(LW, cW, wW, tW, ZW)
        })))
      },
      JW = OW(7297),
      hW = OW(6930),
      HW = OW(6997),
      nW = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function uW(WW) {
      return uW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, uW(WW)
    }

    function oW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function dW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function eW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? dW(Object(OW), !0).forEach((function(iW) {
          vW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : dW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function vW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != uW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != uW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == uW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function gW(WW, iW) {
      return eW(eW({}, iW), WW)
    }

    function DW(WW) {
      var iW = WW.shapeType,
        OW = WW.elementProps;
      switch (iW) {
        case "rectangle":
          return mW.createElement(xW.e, OW);
        case "trapezoid":
          return mW.createElement(TW, OW);
        case "sector":
          return mW.createElement(JW.d, OW);
        case "symbols":
          if (function(WW) {
              return "symbols" === WW
            }(iW)) return mW.createElement(HW.e, OW);
          break;
        default:
          return null
      }
    }

    function VW(WW) {
      var iW, OW = WW.option,
        EW = WW.shapeType,
        PW = WW.propTransformer,
        cW = void 0 === PW ? gW : PW,
        tW = WW.activeClassName,
        ZW = void 0 === tW ? "recharts-active-shape" : tW,
        xW = WW.isActive,
        lW = oW(WW, nW);
      if ((0, mW.isValidElement)(OW)) iW = (0, mW.cloneElement)(OW, eW(eW({}, lW), function(WW) {
        return (0, mW.isValidElement)(WW) ? WW.props : WW
      }(OW)));
      else if (NW()(OW)) iW = OW(lW);
      else if (LW()(OW) && !wW()(OW)) {
        var AW = cW(OW, lW);
        iW = mW.createElement(DW, {
          shapeType: EW,
          elementProps: AW
        })
      } else {
        var bW = lW;
        iW = mW.createElement(DW, {
          shapeType: EW,
          elementProps: bW
        })
      }
      return xW ? mW.createElement(hW.c, {
        className: ZW
      }, iW) : iW
    }

    function pW(WW, iW) {
      return null != iW && "trapezoids" in WW.props
    }

    function fW(WW, iW) {
      return null != iW && "sectors" in WW.props
    }

    function CW(WW, iW) {
      return null != iW && "points" in WW.props
    }

    function XW(WW, iW) {
      var OW, mW, EW = WW.x === (null === iW || void 0 === iW || null === (OW = iW.labelViewBox) || void 0 === OW ? void 0 : OW.x) || WW.x === iW.x,
        NW = WW.y === (null === iW || void 0 === iW || null === (mW = iW.labelViewBox) || void 0 === mW ? void 0 : mW.y) || WW.y === iW.y;
      return EW && NW
    }

    function BW(WW, iW) {
      var OW = WW.endAngle === iW.endAngle,
        mW = WW.startAngle === iW.startAngle;
      return OW && mW
    }

    function qW(WW, iW) {
      var OW = WW.x === iW.x,
        mW = WW.y === iW.y,
        EW = WW.z === iW.z;
      return OW && mW && EW
    }

    function RW(WW) {
      var iW = WW.activeTooltipItem,
        OW = WW.graphicalItem,
        mW = WW.itemData,
        EW = function(WW, iW) {
          var OW;
          return pW(WW, iW) ? OW = "trapezoids" : fW(WW, iW) ? OW = "sectors" : CW(WW, iW) && (OW = "points"), OW
        }(OW, iW),
        NW = function(WW, iW) {
          var OW, mW;
          return pW(WW, iW) ? null === (OW = iW.tooltipPayload) || void 0 === OW || null === (OW = OW[0]) || void 0 === OW || null === (OW = OW.payload) || void 0 === OW ? void 0 : OW.payload : fW(WW, iW) ? null === (mW = iW.tooltipPayload) || void 0 === mW || null === (mW = mW[0]) || void 0 === mW || null === (mW = mW.payload) || void 0 === mW ? void 0 : mW.payload : CW(WW, iW) ? iW.payload : {}
        }(OW, iW),
        PW = mW.filter((function(WW, mW) {
          var PW = ZW()(NW, WW),
            LW = OW.props[EW].filter((function(WW) {
              var mW = function(WW, iW) {
                var OW;
                return pW(WW, iW) ? OW = XW : fW(WW, iW) ? OW = BW : CW(WW, iW) && (OW = qW), OW
              }(OW, iW);
              return mW(WW, iW)
            })),
            cW = OW.props[EW].indexOf(LW[LW.length - 1]);
          return PW && mW === cW
        }));
      return mW.indexOf(PW[PW.length - 1])
    }
  },
  7216: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => KW,
      f: () => UW,
      h: () => SW,
      i: () => sW,
      m: () => kW
    });
    var mW = OW(7224),
      EW = OW.n(mW),
      NW = OW(7236),
      PW = OW.n(NW),
      LW = OW(7101),
      cW = OW(6390),
      wW = OW(6107),
      tW = OW(7252);

    function ZW(WW) {
      return ZW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, ZW(WW)
    }

    function xW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, jW(mW.key), mW)
      }
    }

    function lW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function AW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? lW(Object(OW), !0).forEach((function(iW) {
          bW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : lW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function bW(WW, iW, OW) {
      return (iW = jW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function jW(WW) {
      var iW = function(WW, iW) {
        if ("object" != ZW(WW) || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != ZW(mW)) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == ZW(iW) ? iW : iW + ""
    }
    var UW = function(WW, iW, OW, mW, EW) {
        var NW = WW.width,
          PW = WW.height,
          ZW = WW.layout,
          xW = WW.children,
          lW = Object.keys(iW),
          jW = {
            left: OW.left,
            leftMirror: OW.left,
            right: NW - OW.right,
            rightMirror: NW - OW.right,
            top: OW.top,
            topMirror: OW.top,
            bottom: PW - OW.bottom,
            bottomMirror: PW - OW.bottom
          },
          UW = !!(0, cW.l)(xW, tW.e);
        return lW.reduce((function(NW, PW) {
          var cW, tW, xW, lW, kW, sW = iW[PW],
            MW = sW.orientation,
            KW = sW.domain,
            SW = sW.padding,
            YW = void 0 === SW ? {} : SW,
            yW = sW.mirror,
            TW = sW.reversed,
            JW = "".concat(MW).concat(yW ? "Mirror" : "");
          if ("number" === sW.type && ("gap" === sW.padding || "no-gap" === sW.padding)) {
            var hW = KW[1] - KW[0],
              HW = 1 / 0,
              nW = sW.categoricalDomain.sort(wW.d);
            if (nW.forEach((function(WW, iW) {
                iW > 0 && (HW = Math.min((WW || 0) - (nW[iW - 1] || 0), HW))
              })), Number.isFinite(HW)) {
              var uW = HW / hW,
                oW = "vertical" === sW.layout ? OW.height : OW.width;
              if ("gap" === sW.padding && (cW = uW * oW / 2), "no-gap" === sW.padding) {
                var dW = (0, wW.m)(WW.barCategoryGap, uW * oW),
                  eW = uW * oW / 2;
                cW = eW - dW - (eW - dW) / oW * dW
              }
            }
          }
          tW = "xAxis" === mW ? [OW.left + (YW.left || 0) + (cW || 0), OW.left + OW.width - (YW.right || 0) - (cW || 0)] : "yAxis" === mW ? "horizontal" === ZW ? [OW.top + OW.height - (YW.bottom || 0), OW.top + (YW.top || 0)] : [OW.top + (YW.top || 0) + (cW || 0), OW.top + OW.height - (YW.bottom || 0) - (cW || 0)] : sW.range, TW && (tW = [tW[1], tW[0]]);
          var vW = (0, LW.ob)(sW, EW, UW),
            gW = vW.scale,
            DW = vW.realScaleType;
          gW.domain(KW).range(tW), (0, LW.g)(gW);
          var VW = (0, LW.Z)(gW, AW(AW({}, sW), {}, {
            realScaleType: DW
          }));
          "xAxis" === mW ? (kW = "top" === MW && !yW || "bottom" === MW && yW, xW = OW.left, lW = jW[JW] - kW * sW.height) : "yAxis" === mW && (kW = "left" === MW && !yW || "right" === MW && yW, xW = jW[JW] - kW * sW.width, lW = OW.top);
          var pW = AW(AW(AW({}, sW), VW), {}, {
            realScaleType: DW,
            x: xW,
            y: lW,
            scale: gW,
            width: "xAxis" === mW ? OW.width : sW.width,
            height: "yAxis" === mW ? OW.height : sW.height
          });
          return pW.bandSize = (0, LW.m)(pW, VW), sW.hide || "xAxis" !== mW ? sW.hide || (jW[JW] += (kW ? -1 : 1) * pW.width) : jW[JW] += (kW ? -1 : 1) * pW.height, AW(AW({}, NW), {}, bW({}, PW, pW))
        }), {})
      },
      kW = function(WW, iW) {
        var OW = WW.x,
          mW = WW.y,
          EW = iW.x,
          NW = iW.y;
        return {
          x: Math.min(OW, EW),
          y: Math.min(mW, NW),
          width: Math.abs(EW - OW),
          height: Math.abs(NW - mW)
        }
      },
      sW = function(WW) {
        var iW = WW.x1,
          OW = WW.y1,
          mW = WW.x2,
          EW = WW.y2;
        return kW({
          x: iW,
          y: OW
        }, {
          x: mW,
          y: EW
        })
      },
      MW = function() {
        function WW(iW) {
          ! function(WW, iW) {
            if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
          }(this, WW), this.scale = iW
        }
        return iW = WW, OW = [{
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
            var iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              OW = iW.bandAware,
              mW = iW.position;
            if (void 0 !== WW) {
              if (mW) switch (mW) {
                case "start":
                default:
                  return this.scale(WW);
                case "middle":
                  var EW = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(WW) + EW;
                case "end":
                  var NW = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(WW) + NW
              }
              if (OW) {
                var PW = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(WW) + PW
              }
              return this.scale(WW)
            }
          }
        }, {
          key: "isInRange",
          value: function(WW) {
            var iW = this.range(),
              OW = iW[0],
              mW = iW[iW.length - 1];
            return OW <= mW ? WW >= OW && WW <= mW : WW >= mW && WW <= OW
          }
        }], mW = [{
          key: "create",
          value: function(iW) {
            return new WW(iW)
          }
        }], OW && xW(iW.prototype, OW), mW && xW(iW, mW), Object.defineProperty(iW, "prototype", {
          writable: !1
        }), iW;
        var iW, OW, mW
      }();
    bW(MW, "EPS", 1e-4);
    var KW = function(WW) {
      var iW = Object.keys(WW).reduce((function(iW, OW) {
        return AW(AW({}, iW), {}, bW({}, OW, MW.create(WW[OW])))
      }), {});
      return AW(AW({}, iW), {}, {
        apply: function(WW) {
          var OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            mW = OW.bandAware,
            NW = OW.position;
          return EW()(WW, (function(WW, OW) {
            return iW[OW].apply(WW, {
              bandAware: mW,
              position: NW
            })
          }))
        },
        isInRange: function(WW) {
          return PW()(WW, (function(WW, OW) {
            return iW[OW].isInRange(WW)
          }))
        }
      })
    };
    var SW = function(WW) {
      var iW = WW.width,
        OW = WW.height,
        mW = function(WW) {
          return (WW % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        EW = mW * Math.PI / 180,
        NW = Math.atan(OW / iW),
        PW = EW > NW && EW < Math.PI - NW ? OW / Math.sin(EW) : iW / Math.cos(EW);
      return Math.abs(PW)
    }
  },
  7101: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => vP,
      f: () => uP,
      g: () => GP,
      i: () => BP,
      j: () => IP,
      m: () => cL,
      p: () => eP,
      t: () => dP,
      w: () => OL,
      z: () => iL,
      B: () => WL,
      E: () => fP,
      H: () => nP,
      K: () => VP,
      N: () => EL,
      O: () => oP,
      Q: () => FP,
      S: () => mL,
      V: () => CP,
      Z: () => QP,
      bb: () => tL,
      fb: () => HP,
      ib: () => pP,
      jb: () => wL,
      kb: () => DP,
      ob: () => qP,
      pb: () => LL,
      tb: () => aP
    });
    var mW = {};
    OW.r(mW), OW.d(mW, {
      scaleBand: () => EW.e,
      scaleDiverging: () => ZN,
      scaleDivergingLog: () => xN,
      scaleDivergingPow: () => AN,
      scaleDivergingSqrt: () => bN,
      scaleDivergingSymlog: () => lN,
      scaleIdentity: () => zi,
      scaleImplicit: () => ZO.g,
      scaleLinear: () => ri,
      scaleLog: () => PO,
      scaleOrdinal: () => ZO.d,
      scalePoint: () => EW.g,
      scalePow: () => jO,
      scaleQuantile: () => HO,
      scaleQuantize: () => nO,
      scaleRadial: () => sO,
      scaleSequential: () => EN,
      scaleSequentialLog: () => NN,
      scaleSequentialPow: () => LN,
      scaleSequentialQuantile: () => wN,
      scaleSequentialSqrt: () => cN,
      scaleSequentialSymlog: () => PN,
      scaleSqrt: () => UO,
      scaleSymlog: () => tO,
      scaleThreshold: () => uO,
      scaleTime: () => WN,
      scaleUtc: () => iN,
      tickFormat: () => Ii
    });
    var EW = OW(7108);
    const NW = Math.sqrt(50),
      PW = Math.sqrt(10),
      LW = Math.sqrt(2);

    function cW(WW, iW, OW) {
      const mW = (iW - WW) / Math.max(0, OW),
        EW = Math.floor(Math.log10(mW)),
        wW = mW / Math.pow(10, EW),
        tW = wW >= NW ? 10 : wW >= PW ? 5 : wW >= LW ? 2 : 1;
      let ZW, xW, lW;
      return EW < 0 ? (lW = Math.pow(10, -EW) / tW, ZW = Math.round(WW * lW), xW = Math.round(iW * lW), ZW / lW < WW && ++ZW, xW / lW > iW && --xW, lW = -lW) : (lW = Math.pow(10, EW) * tW, ZW = Math.round(WW / lW), xW = Math.round(iW / lW), ZW * lW < WW && ++ZW, xW * lW > iW && --xW), xW < ZW && .5 <= OW && OW < 2 ? cW(WW, iW, 2 * OW) : [ZW, xW, lW]
    }

    function wW(WW, iW, OW) {
      if (!((OW = +OW) > 0)) return [];
      if ((WW = +WW) === (iW = +iW)) return [WW];
      const mW = iW < WW,
        [EW, NW, PW] = mW ? cW(iW, WW, OW) : cW(WW, iW, OW);
      if (!(NW >= EW)) return [];
      const LW = NW - EW + 1,
        wW = new Array(LW);
      if (mW)
        if (PW < 0)
          for (let cW = 0; cW < LW; ++cW) wW[cW] = (NW - cW) / -PW;
        else
          for (let cW = 0; cW < LW; ++cW) wW[cW] = (NW - cW) * PW;
      else if (PW < 0)
        for (let cW = 0; cW < LW; ++cW) wW[cW] = (EW + cW) / -PW;
      else
        for (let cW = 0; cW < LW; ++cW) wW[cW] = (EW + cW) * PW;
      return wW
    }

    function tW(WW, iW, OW) {
      return cW(WW = +WW, iW = +iW, OW = +OW)[2]
    }

    function ZW(WW, iW, OW) {
      OW = +OW;
      const mW = (iW = +iW) < (WW = +WW),
        EW = mW ? tW(iW, WW, OW) : tW(WW, iW, OW);
      return (mW ? -1 : 1) * (EW < 0 ? 1 / -EW : EW)
    }

    function xW(WW, iW) {
      return null == WW || null == iW ? NaN : WW < iW ? -1 : WW > iW ? 1 : WW >= iW ? 0 : NaN
    }

    function lW(WW, iW) {
      return null == WW || null == iW ? NaN : iW < WW ? -1 : iW > WW ? 1 : iW >= WW ? 0 : NaN
    }

    function AW(WW) {
      let iW, OW, mW;

      function EW(WW, mW) {
        let EW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          NW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.length;
        if (EW < NW) {
          if (0 !== iW(mW, mW)) return NW;
          do {
            const iW = EW + NW >>> 1;
            OW(WW[iW], mW) < 0 ? EW = iW + 1 : NW = iW
          } while (EW < NW)
        }
        return EW
      }
      return 2 !== WW.length ? (iW = xW, OW = (iW, OW) => xW(WW(iW), OW), mW = (iW, OW) => WW(iW) - OW) : (iW = WW === xW || WW === lW ? WW : bW, OW = WW, mW = WW), {
        left: EW,
        center: function(WW, iW) {
          let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const NW = EW(WW, iW, OW, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.length) - 1);
          return NW > OW && mW(WW[NW - 1], iW) > -mW(WW[NW], iW) ? NW - 1 : NW
        },
        right: function(WW, mW) {
          let EW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            NW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.length;
          if (EW < NW) {
            if (0 !== iW(mW, mW)) return NW;
            do {
              const iW = EW + NW >>> 1;
              OW(WW[iW], mW) <= 0 ? EW = iW + 1 : NW = iW
            } while (EW < NW)
          }
          return EW
        }
      }
    }

    function bW() {
      return 0
    }

    function jW(WW) {
      return null === WW ? NaN : +WW
    }
    const UW = AW(xW),
      kW = UW.right,
      sW = (UW.left, AW(jW).center, kW);

    function MW(WW, iW, OW) {
      WW.prototype = iW.prototype = OW, OW.constructor = WW
    }

    function KW(WW, iW) {
      var OW = Object.create(WW.prototype);
      for (var mW in iW) OW[mW] = iW[mW];
      return OW
    }

    function SW() {}
    var YW = .7,
      yW = 1 / YW,
      TW = "\\s*([+-]?\\d+)\\s*",
      JW = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      hW = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      HW = /^#([0-9a-f]{3,8})$/,
      nW = new RegExp(`^rgb\\(${TW},${TW},${TW}\\)$`),
      uW = new RegExp(`^rgb\\(${hW},${hW},${hW}\\)$`),
      oW = new RegExp(`^rgba\\(${TW},${TW},${TW},${JW}\\)$`),
      dW = new RegExp(`^rgba\\(${hW},${hW},${hW},${JW}\\)$`),
      eW = new RegExp(`^hsl\\(${JW},${hW},${hW}\\)$`),
      vW = new RegExp(`^hsla\\(${JW},${hW},${hW},${JW}\\)$`),
      gW = {
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

    function DW() {
      return this.rgb().formatHex()
    }

    function VW() {
      return this.rgb().formatRgb()
    }

    function pW(WW) {
      var iW, OW;
      return WW = (WW + "").trim().toLowerCase(), (iW = HW.exec(WW)) ? (OW = iW[1].length, iW = parseInt(iW[1], 16), 6 === OW ? fW(iW) : 3 === OW ? new BW(iW >> 8 & 15 | iW >> 4 & 240, iW >> 4 & 15 | 240 & iW, (15 & iW) << 4 | 15 & iW, 1) : 8 === OW ? CW(iW >> 24 & 255, iW >> 16 & 255, iW >> 8 & 255, (255 & iW) / 255) : 4 === OW ? CW(iW >> 12 & 15 | iW >> 8 & 240, iW >> 8 & 15 | iW >> 4 & 240, iW >> 4 & 15 | 240 & iW, ((15 & iW) << 4 | 15 & iW) / 255) : null) : (iW = nW.exec(WW)) ? new BW(iW[1], iW[2], iW[3], 1) : (iW = uW.exec(WW)) ? new BW(255 * iW[1] / 100, 255 * iW[2] / 100, 255 * iW[3] / 100, 1) : (iW = oW.exec(WW)) ? CW(iW[1], iW[2], iW[3], iW[4]) : (iW = dW.exec(WW)) ? CW(255 * iW[1] / 100, 255 * iW[2] / 100, 255 * iW[3] / 100, iW[4]) : (iW = eW.exec(WW)) ? rW(iW[1], iW[2] / 100, iW[3] / 100, 1) : (iW = vW.exec(WW)) ? rW(iW[1], iW[2] / 100, iW[3] / 100, iW[4]) : gW.hasOwnProperty(WW) ? fW(gW[WW]) : "transparent" === WW ? new BW(NaN, NaN, NaN, 0) : null
    }

    function fW(WW) {
      return new BW(WW >> 16 & 255, WW >> 8 & 255, 255 & WW, 1)
    }

    function CW(WW, iW, OW, mW) {
      return mW <= 0 && (WW = iW = OW = NaN), new BW(WW, iW, OW, mW)
    }

    function XW(WW, iW, OW, mW) {
      return 1 === arguments.length ? ((EW = WW) instanceof SW || (EW = pW(EW)), EW ? new BW((EW = EW.rgb()).r, EW.g, EW.b, EW.opacity) : new BW) : new BW(WW, iW, OW, null == mW ? 1 : mW);
      var EW
    }

    function BW(WW, iW, OW, mW) {
      this.r = +WW, this.g = +iW, this.b = +OW, this.opacity = +mW
    }

    function qW() {
      return `#${aW(this.r)}${aW(this.g)}${aW(this.b)}`
    }

    function RW() {
      const WW = GW(this.opacity);
      return `${1===WW?"rgb(":"rgba("}${IW(this.r)}, ${IW(this.g)}, ${IW(this.b)}${1===WW?")":`, ${WW})`}`
    }

    function GW(WW) {
      return isNaN(WW) ? 1 : Math.max(0, Math.min(1, WW))
    }

    function IW(WW) {
      return Math.max(0, Math.min(255, Math.round(WW) || 0))
    }

    function aW(WW) {
      return ((WW = IW(WW)) < 16 ? "0" : "") + WW.toString(16)
    }

    function rW(WW, iW, OW, mW) {
      return mW <= 0 ? WW = iW = OW = NaN : OW <= 0 || OW >= 1 ? WW = iW = NaN : iW <= 0 && (WW = NaN), new FW(WW, iW, OW, mW)
    }

    function zW(WW) {
      if (WW instanceof FW) return new FW(WW.h, WW.s, WW.l, WW.opacity);
      if (WW instanceof SW || (WW = pW(WW)), !WW) return new FW;
      if (WW instanceof FW) return WW;
      var iW = (WW = WW.rgb()).r / 255,
        OW = WW.g / 255,
        mW = WW.b / 255,
        EW = Math.min(iW, OW, mW),
        NW = Math.max(iW, OW, mW),
        PW = NaN,
        LW = NW - EW,
        cW = (NW + EW) / 2;
      return LW ? (PW = iW === NW ? (OW - mW) / LW + 6 * (OW < mW) : OW === NW ? (mW - iW) / LW + 2 : (iW - OW) / LW + 4, LW /= cW < .5 ? NW + EW : 2 - NW - EW, PW *= 60) : LW = cW > 0 && cW < 1 ? 0 : PW, new FW(PW, LW, cW, WW.opacity)
    }

    function FW(WW, iW, OW, mW) {
      this.h = +WW, this.s = +iW, this.l = +OW, this.opacity = +mW
    }

    function QW(WW) {
      return (WW = (WW || 0) % 360) < 0 ? WW + 360 : WW
    }

    function Wi(WW) {
      return Math.max(0, Math.min(1, WW || 0))
    }

    function ii(WW, iW, OW) {
      return 255 * (WW < 60 ? iW + (OW - iW) * WW / 60 : WW < 180 ? OW : WW < 240 ? iW + (OW - iW) * (240 - WW) / 60 : iW)
    }

    function Oi(WW, iW, OW, mW, EW) {
      var NW = WW * WW,
        PW = NW * WW;
      return ((1 - 3 * WW + 3 * NW - PW) * iW + (4 - 6 * NW + 3 * PW) * OW + (1 + 3 * WW + 3 * NW - 3 * PW) * mW + PW * EW) / 6
    }
    MW(SW, pW, {
      copy(WW) {
        return Object.assign(new this.constructor, this, WW)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: DW,
      formatHex: DW,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return zW(this).formatHsl()
      },
      formatRgb: VW,
      toString: VW
    }), MW(BW, XW, KW(SW, {
      brighter(WW) {
        return WW = null == WW ? yW : Math.pow(yW, WW), new BW(this.r * WW, this.g * WW, this.b * WW, this.opacity)
      },
      darker(WW) {
        return WW = null == WW ? YW : Math.pow(YW, WW), new BW(this.r * WW, this.g * WW, this.b * WW, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new BW(IW(this.r), IW(this.g), IW(this.b), GW(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: qW,
      formatHex: qW,
      formatHex8: function() {
        return `#${aW(this.r)}${aW(this.g)}${aW(this.b)}${aW(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: RW,
      toString: RW
    })), MW(FW, (function(WW, iW, OW, mW) {
      return 1 === arguments.length ? zW(WW) : new FW(WW, iW, OW, null == mW ? 1 : mW)
    }), KW(SW, {
      brighter(WW) {
        return WW = null == WW ? yW : Math.pow(yW, WW), new FW(this.h, this.s, this.l * WW, this.opacity)
      },
      darker(WW) {
        return WW = null == WW ? YW : Math.pow(YW, WW), new FW(this.h, this.s, this.l * WW, this.opacity)
      },
      rgb() {
        var WW = this.h % 360 + 360 * (this.h < 0),
          iW = isNaN(WW) || isNaN(this.s) ? 0 : this.s,
          OW = this.l,
          mW = OW + (OW < .5 ? OW : 1 - OW) * iW,
          EW = 2 * OW - mW;
        return new BW(ii(WW >= 240 ? WW - 240 : WW + 120, EW, mW), ii(WW, EW, mW), ii(WW < 120 ? WW + 240 : WW - 120, EW, mW), this.opacity)
      },
      clamp() {
        return new FW(QW(this.h), Wi(this.s), Wi(this.l), GW(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const WW = GW(this.opacity);
        return `${1===WW?"hsl(":"hsla("}${QW(this.h)}, ${100*Wi(this.s)}%, ${100*Wi(this.l)}%${1===WW?")":`, ${WW})`}`
      }
    }));
    const mi = WW => () => WW;

    function Ei(WW, iW) {
      return function(OW) {
        return WW + OW * iW
      }
    }

    function Ni(WW) {
      return 1 === (WW = +WW) ? Pi : function(iW, OW) {
        return OW - iW ? function(WW, iW, OW) {
          return WW = Math.pow(WW, OW), iW = Math.pow(iW, OW) - WW, OW = 1 / OW,
            function(mW) {
              return Math.pow(WW + mW * iW, OW)
            }
        }(iW, OW, WW) : mi(isNaN(iW) ? OW : iW)
      }
    }

    function Pi(WW, iW) {
      var OW = iW - WW;
      return OW ? Ei(WW, OW) : mi(isNaN(WW) ? iW : WW)
    }
    const Li = function WW(iW) {
      var OW = Ni(iW);

      function mW(WW, iW) {
        var mW = OW((WW = XW(WW)).r, (iW = XW(iW)).r),
          EW = OW(WW.g, iW.g),
          NW = OW(WW.b, iW.b),
          PW = Pi(WW.opacity, iW.opacity);
        return function(iW) {
          return WW.r = mW(iW), WW.g = EW(iW), WW.b = NW(iW), WW.opacity = PW(iW), WW + ""
        }
      }
      return mW.gamma = WW, mW
    }(1);

    function ci(WW) {
      return function(iW) {
        var OW, mW, EW = iW.length,
          NW = new Array(EW),
          PW = new Array(EW),
          LW = new Array(EW);
        for (OW = 0; OW < EW; ++OW) mW = XW(iW[OW]), NW[OW] = mW.r || 0, PW[OW] = mW.g || 0, LW[OW] = mW.b || 0;
        return NW = WW(NW), PW = WW(PW), LW = WW(LW), mW.opacity = 1,
          function(WW) {
            return mW.r = NW(WW), mW.g = PW(WW), mW.b = LW(WW), mW + ""
          }
      }
    }
    ci((function(WW) {
      var iW = WW.length - 1;
      return function(OW) {
        var mW = OW <= 0 ? OW = 0 : OW >= 1 ? (OW = 1, iW - 1) : Math.floor(OW * iW),
          EW = WW[mW],
          NW = WW[mW + 1],
          PW = mW > 0 ? WW[mW - 1] : 2 * EW - NW,
          LW = mW < iW - 1 ? WW[mW + 2] : 2 * NW - EW;
        return Oi((OW - mW / iW) * iW, PW, EW, NW, LW)
      }
    })), ci((function(WW) {
      var iW = WW.length;
      return function(OW) {
        var mW = Math.floor(((OW %= 1) < 0 ? ++OW : OW) * iW),
          EW = WW[(mW + iW - 1) % iW],
          NW = WW[mW % iW],
          PW = WW[(mW + 1) % iW],
          LW = WW[(mW + 2) % iW];
        return Oi((OW - mW / iW) * iW, EW, NW, PW, LW)
      }
    }));

    function wi(WW, iW) {
      var OW, mW = iW ? iW.length : 0,
        EW = WW ? Math.min(mW, WW.length) : 0,
        NW = new Array(EW),
        PW = new Array(mW);
      for (OW = 0; OW < EW; ++OW) NW[OW] = Ui(WW[OW], iW[OW]);
      for (; OW < mW; ++OW) PW[OW] = iW[OW];
      return function(WW) {
        for (OW = 0; OW < EW; ++OW) PW[OW] = NW[OW](WW);
        return PW
      }
    }

    function ti(WW, iW) {
      var OW = new Date;
      return WW = +WW, iW = +iW,
        function(mW) {
          return OW.setTime(WW * (1 - mW) + iW * mW), OW
        }
    }

    function Zi(WW, iW) {
      return WW = +WW, iW = +iW,
        function(OW) {
          return WW * (1 - OW) + iW * OW
        }
    }

    function xi(WW, iW) {
      var OW, mW = {},
        EW = {};
      for (OW in null !== WW && "object" === typeof WW || (WW = {}), null !== iW && "object" === typeof iW || (iW = {}), iW) OW in WW ? mW[OW] = Ui(WW[OW], iW[OW]) : EW[OW] = iW[OW];
      return function(WW) {
        for (OW in mW) EW[OW] = mW[OW](WW);
        return EW
      }
    }
    var li = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Ai = new RegExp(li.source, "g");

    function bi(WW, iW) {
      var OW, mW, EW, NW = li.lastIndex = Ai.lastIndex = 0,
        PW = -1,
        LW = [],
        cW = [];
      for (WW += "", iW += "";
        (OW = li.exec(WW)) && (mW = Ai.exec(iW));)(EW = mW.index) > NW && (EW = iW.slice(NW, EW), LW[PW] ? LW[PW] += EW : LW[++PW] = EW), (OW = OW[0]) === (mW = mW[0]) ? LW[PW] ? LW[PW] += mW : LW[++PW] = mW : (LW[++PW] = null, cW.push({
        i: PW,
        x: Zi(OW, mW)
      })), NW = Ai.lastIndex;
      return NW < iW.length && (EW = iW.slice(NW), LW[PW] ? LW[PW] += EW : LW[++PW] = EW), LW.length < 2 ? cW[0] ? function(WW) {
        return function(iW) {
          return WW(iW) + ""
        }
      }(cW[0].x) : function(WW) {
        return function() {
          return WW
        }
      }(iW) : (iW = cW.length, function(WW) {
        for (var OW, mW = 0; mW < iW; ++mW) LW[(OW = cW[mW]).i] = OW.x(WW);
        return LW.join("")
      })
    }

    function ji(WW, iW) {
      iW || (iW = []);
      var OW, mW = WW ? Math.min(iW.length, WW.length) : 0,
        EW = iW.slice();
      return function(NW) {
        for (OW = 0; OW < mW; ++OW) EW[OW] = WW[OW] * (1 - NW) + iW[OW] * NW;
        return EW
      }
    }

    function Ui(WW, iW) {
      var OW, mW, EW = typeof iW;
      return null == iW || "boolean" === EW ? mi(iW) : ("number" === EW ? Zi : "string" === EW ? (OW = pW(iW)) ? (iW = OW, Li) : bi : iW instanceof pW ? Li : iW instanceof Date ? ti : (mW = iW, !ArrayBuffer.isView(mW) || mW instanceof DataView ? Array.isArray(iW) ? wi : "function" !== typeof iW.valueOf && "function" !== typeof iW.toString || isNaN(iW) ? xi : Zi : ji))(WW, iW)
    }

    function ki(WW, iW) {
      return WW = +WW, iW = +iW,
        function(OW) {
          return Math.round(WW * (1 - OW) + iW * OW)
        }
    }

    function si(WW) {
      return +WW
    }
    var Mi = [0, 1];

    function Ki(WW) {
      return WW
    }

    function Si(WW, iW) {
      return (iW -= WW = +WW) ? function(OW) {
        return (OW - WW) / iW
      } : (OW = isNaN(iW) ? NaN : .5, function() {
        return OW
      });
      var OW
    }

    function Yi(WW, iW, OW) {
      var mW = WW[0],
        EW = WW[1],
        NW = iW[0],
        PW = iW[1];
      return EW < mW ? (mW = Si(EW, mW), NW = OW(PW, NW)) : (mW = Si(mW, EW), NW = OW(NW, PW)),
        function(WW) {
          return NW(mW(WW))
        }
    }

    function yi(WW, iW, OW) {
      var mW = Math.min(WW.length, iW.length) - 1,
        EW = new Array(mW),
        NW = new Array(mW),
        PW = -1;
      for (WW[mW] < WW[0] && (WW = WW.slice().reverse(), iW = iW.slice().reverse()); ++PW < mW;) EW[PW] = Si(WW[PW], WW[PW + 1]), NW[PW] = OW(iW[PW], iW[PW + 1]);
      return function(iW) {
        var OW = sW(WW, iW, 1, mW) - 1;
        return NW[OW](EW[OW](iW))
      }
    }

    function Ti(WW, iW) {
      return iW.domain(WW.domain()).range(WW.range()).interpolate(WW.interpolate()).clamp(WW.clamp()).unknown(WW.unknown())
    }

    function Ji() {
      var WW, iW, OW, mW, EW, NW, PW = Mi,
        LW = Mi,
        cW = Ui,
        wW = Ki;

      function tW() {
        var WW = Math.min(PW.length, LW.length);
        return wW !== Ki && (wW = function(WW, iW) {
          var OW;
          return WW > iW && (OW = WW, WW = iW, iW = OW),
            function(OW) {
              return Math.max(WW, Math.min(iW, OW))
            }
        }(PW[0], PW[WW - 1])), mW = WW > 2 ? yi : Yi, EW = NW = null, ZW
      }

      function ZW(iW) {
        return null == iW || isNaN(iW = +iW) ? OW : (EW || (EW = mW(PW.map(WW), LW, cW)))(WW(wW(iW)))
      }
      return ZW.invert = function(OW) {
          return wW(iW((NW || (NW = mW(LW, PW.map(WW), Zi)))(OW)))
        }, ZW.domain = function(WW) {
          return arguments.length ? (PW = Array.from(WW, si), tW()) : PW.slice()
        }, ZW.range = function(WW) {
          return arguments.length ? (LW = Array.from(WW), tW()) : LW.slice()
        }, ZW.rangeRound = function(WW) {
          return LW = Array.from(WW), cW = ki, tW()
        }, ZW.clamp = function(WW) {
          return arguments.length ? (wW = !!WW || Ki, tW()) : wW !== Ki
        }, ZW.interpolate = function(WW) {
          return arguments.length ? (cW = WW, tW()) : cW
        }, ZW.unknown = function(WW) {
          return arguments.length ? (OW = WW, ZW) : OW
        },
        function(OW, mW) {
          return WW = OW, iW = mW, tW()
        }
    }

    function Hi() {
      return Ji()(Ki, Ki)
    }
    var ni, ui = OW(7116),
      oi = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function di(WW) {
      if (!(iW = oi.exec(WW))) throw new Error("invalid format: " + WW);
      var iW;
      return new ei({
        fill: iW[1],
        align: iW[2],
        sign: iW[3],
        symbol: iW[4],
        zero: iW[5],
        width: iW[6],
        comma: iW[7],
        precision: iW[8] && iW[8].slice(1),
        trim: iW[9],
        type: iW[10]
      })
    }

    function ei(WW) {
      this.fill = void 0 === WW.fill ? " " : WW.fill + "", this.align = void 0 === WW.align ? ">" : WW.align + "", this.sign = void 0 === WW.sign ? "-" : WW.sign + "", this.symbol = void 0 === WW.symbol ? "" : WW.symbol + "", this.zero = !!WW.zero, this.width = void 0 === WW.width ? void 0 : +WW.width, this.comma = !!WW.comma, this.precision = void 0 === WW.precision ? void 0 : +WW.precision, this.trim = !!WW.trim, this.type = void 0 === WW.type ? "" : WW.type + ""
    }

    function vi(WW, iW) {
      if (!isFinite(WW) || 0 === WW) return null;
      var OW = (WW = iW ? WW.toExponential(iW - 1) : WW.toExponential()).indexOf("e"),
        mW = WW.slice(0, OW);
      return [mW.length > 1 ? mW[0] + mW.slice(2) : mW, +WW.slice(OW + 1)]
    }

    function gi(WW) {
      return (WW = vi(Math.abs(WW))) ? WW[1] : NaN
    }

    function Di(WW, iW) {
      var OW = vi(WW, iW);
      if (!OW) return WW + "";
      var mW = OW[0],
        EW = OW[1];
      return EW < 0 ? "0." + new Array(-EW).join("0") + mW : mW.length > EW + 1 ? mW.slice(0, EW + 1) + "." + mW.slice(EW + 1) : mW + new Array(EW - mW.length + 2).join("0")
    }
    di.prototype = ei.prototype, ei.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const Vi = {
      "%": (WW, iW) => (100 * WW).toFixed(iW),
      b: WW => Math.round(WW).toString(2),
      c: WW => WW + "",
      d: function(WW) {
        return Math.abs(WW = Math.round(WW)) >= 1e21 ? WW.toLocaleString("en").replace(/,/g, "") : WW.toString(10)
      },
      e: (WW, iW) => WW.toExponential(iW),
      f: (WW, iW) => WW.toFixed(iW),
      g: (WW, iW) => WW.toPrecision(iW),
      o: WW => Math.round(WW).toString(8),
      p: (WW, iW) => Di(100 * WW, iW),
      r: Di,
      s: function(WW, iW) {
        var OW = vi(WW, iW);
        if (!OW) return ni = void 0, WW.toPrecision(iW);
        var mW = OW[0],
          EW = OW[1],
          NW = EW - (ni = 3 * Math.max(-8, Math.min(8, Math.floor(EW / 3)))) + 1,
          PW = mW.length;
        return NW === PW ? mW : NW > PW ? mW + new Array(NW - PW + 1).join("0") : NW > 0 ? mW.slice(0, NW) + "." + mW.slice(NW) : "0." + new Array(1 - NW).join("0") + vi(WW, Math.max(0, iW + NW - 1))[0]
      },
      X: WW => Math.round(WW).toString(16).toUpperCase(),
      x: WW => Math.round(WW).toString(16)
    };

    function fi(WW) {
      return WW
    }
    var Ci, Xi, Bi, qi = Array.prototype.map,
      Ri = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function Gi(WW) {
      var iW, OW, mW = void 0 === WW.grouping || void 0 === WW.thousands ? fi : (iW = qi.call(WW.grouping, Number), OW = WW.thousands + "", function(WW, mW) {
          for (var EW = WW.length, NW = [], PW = 0, LW = iW[0], cW = 0; EW > 0 && LW > 0 && (cW + LW + 1 > mW && (LW = Math.max(1, mW - cW)), NW.push(WW.substring(EW -= LW, EW + LW)), !((cW += LW + 1) > mW));) LW = iW[PW = (PW + 1) % iW.length];
          return NW.reverse().join(OW)
        }),
        EW = void 0 === WW.currency ? "" : WW.currency[0] + "",
        NW = void 0 === WW.currency ? "" : WW.currency[1] + "",
        PW = void 0 === WW.decimal ? "." : WW.decimal + "",
        LW = void 0 === WW.numerals ? fi : function(WW) {
          return function(iW) {
            return iW.replace(/[0-9]/g, (function(iW) {
              return WW[+iW]
            }))
          }
        }(qi.call(WW.numerals, String)),
        cW = void 0 === WW.percent ? "%" : WW.percent + "",
        wW = void 0 === WW.minus ? "\u2212" : WW.minus + "",
        tW = void 0 === WW.nan ? "NaN" : WW.nan + "";

      function ZW(WW, iW) {
        var OW = (WW = di(WW)).fill,
          ZW = WW.align,
          xW = WW.sign,
          lW = WW.symbol,
          AW = WW.zero,
          bW = WW.width,
          jW = WW.comma,
          UW = WW.precision,
          kW = WW.trim,
          sW = WW.type;
        "n" === sW ? (jW = !0, sW = "g") : Vi[sW] || (void 0 === UW && (UW = 12), kW = !0, sW = "g"), (AW || "0" === OW && "=" === ZW) && (AW = !0, OW = "0", ZW = "=");
        var MW = (iW && void 0 !== iW.prefix ? iW.prefix : "") + ("$" === lW ? EW : "#" === lW && /[boxX]/.test(sW) ? "0" + sW.toLowerCase() : ""),
          KW = ("$" === lW ? NW : /[%p]/.test(sW) ? cW : "") + (iW && void 0 !== iW.suffix ? iW.suffix : ""),
          SW = Vi[sW],
          YW = /[defgprs%]/.test(sW);

        function yW(WW) {
          var iW, EW, NW, cW = MW,
            lW = KW;
          if ("c" === sW) lW = SW(WW) + lW, WW = "";
          else {
            var yW = (WW = +WW) < 0 || 1 / WW < 0;
            if (WW = isNaN(WW) ? tW : SW(Math.abs(WW), UW), kW && (WW = function(WW) {
                WW: for (var iW, OW = WW.length, mW = 1, EW = -1; mW < OW; ++mW) switch (WW[mW]) {
                  case ".":
                    EW = iW = mW;
                    break;
                  case "0":
                    0 === EW && (EW = mW), iW = mW;
                    break;
                  default:
                    if (!+WW[mW]) break WW;
                    EW > 0 && (EW = 0)
                }
                return EW > 0 ? WW.slice(0, EW) + WW.slice(iW + 1) : WW
              }(WW)), yW && 0 === +WW && "+" !== xW && (yW = !1), cW = (yW ? "(" === xW ? xW : wW : "-" === xW || "(" === xW ? "" : xW) + cW, lW = ("s" !== sW || isNaN(WW) || void 0 === ni ? "" : Ri[8 + ni / 3]) + lW + (yW && "(" === xW ? ")" : ""), YW)
              for (iW = -1, EW = WW.length; ++iW < EW;)
                if (48 > (NW = WW.charCodeAt(iW)) || NW > 57) {
                  lW = (46 === NW ? PW + WW.slice(iW + 1) : WW.slice(iW)) + lW, WW = WW.slice(0, iW);
                  break
                }
          }
          jW && !AW && (WW = mW(WW, 1 / 0));
          var TW = cW.length + WW.length + lW.length,
            JW = TW < bW ? new Array(bW - TW + 1).join(OW) : "";
          switch (jW && AW && (WW = mW(JW + WW, JW.length ? bW - lW.length : 1 / 0), JW = ""), ZW) {
            case "<":
              WW = cW + WW + lW + JW;
              break;
            case "=":
              WW = cW + JW + WW + lW;
              break;
            case "^":
              WW = JW.slice(0, TW = JW.length >> 1) + cW + WW + lW + JW.slice(TW);
              break;
            default:
              WW = JW + cW + WW + lW
          }
          return LW(WW)
        }
        return UW = void 0 === UW ? 6 : /[gprs]/.test(sW) ? Math.max(1, Math.min(21, UW)) : Math.max(0, Math.min(20, UW)), yW.toString = function() {
          return WW + ""
        }, yW
      }
      return {
        format: ZW,
        formatPrefix: function(WW, iW) {
          var OW = 3 * Math.max(-8, Math.min(8, Math.floor(gi(iW) / 3))),
            mW = Math.pow(10, -OW),
            EW = ZW(((WW = di(WW)).type = "f", WW), {
              suffix: Ri[8 + OW / 3]
            });
          return function(WW) {
            return EW(mW * WW)
          }
        }
      }
    }

    function Ii(WW, iW, OW, mW) {
      var EW, NW = ZW(WW, iW, OW);
      switch ((mW = di(null == mW ? ",f" : mW)).type) {
        case "s":
          var PW = Math.max(Math.abs(WW), Math.abs(iW));
          return null != mW.precision || isNaN(EW = function(WW, iW) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(gi(iW) / 3))) - gi(Math.abs(WW)))
          }(NW, PW)) || (mW.precision = EW), Bi(mW, PW);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != mW.precision || isNaN(EW = function(WW, iW) {
            return WW = Math.abs(WW), iW = Math.abs(iW) - WW, Math.max(0, gi(iW) - gi(WW)) + 1
          }(NW, Math.max(Math.abs(WW), Math.abs(iW)))) || (mW.precision = EW - ("e" === mW.type));
          break;
        case "f":
        case "%":
          null != mW.precision || isNaN(EW = function(WW) {
            return Math.max(0, -gi(Math.abs(WW)))
          }(NW)) || (mW.precision = EW - 2 * ("%" === mW.type))
      }
      return Xi(mW)
    }

    function ai(WW) {
      var iW = WW.domain;
      return WW.ticks = function(WW) {
        var OW = iW();
        return wW(OW[0], OW[OW.length - 1], null == WW ? 10 : WW)
      }, WW.tickFormat = function(WW, OW) {
        var mW = iW();
        return Ii(mW[0], mW[mW.length - 1], null == WW ? 10 : WW, OW)
      }, WW.nice = function(OW) {
        null == OW && (OW = 10);
        var mW, EW, NW = iW(),
          PW = 0,
          LW = NW.length - 1,
          cW = NW[PW],
          wW = NW[LW],
          ZW = 10;
        for (wW < cW && (EW = cW, cW = wW, wW = EW, EW = PW, PW = LW, LW = EW); ZW-- > 0;) {
          if ((EW = tW(cW, wW, OW)) === mW) return NW[PW] = cW, NW[LW] = wW, iW(NW);
          if (EW > 0) cW = Math.floor(cW / EW) * EW, wW = Math.ceil(wW / EW) * EW;
          else {
            if (!(EW < 0)) break;
            cW = Math.ceil(cW * EW) / EW, wW = Math.floor(wW * EW) / EW
          }
          mW = EW
        }
        return WW
      }, WW
    }

    function ri() {
      var WW = Hi();
      return WW.copy = function() {
        return Ti(WW, ri())
      }, ui.f.apply(WW, arguments), ai(WW)
    }

    function zi(WW) {
      var iW;

      function OW(WW) {
        return null == WW || isNaN(WW = +WW) ? iW : WW
      }
      return OW.invert = OW, OW.domain = OW.range = function(iW) {
        return arguments.length ? (WW = Array.from(iW, si), OW) : WW.slice()
      }, OW.unknown = function(WW) {
        return arguments.length ? (iW = WW, OW) : iW
      }, OW.copy = function() {
        return zi(WW).unknown(iW)
      }, WW = arguments.length ? Array.from(WW, si) : [0, 1], ai(OW)
    }

    function Fi(WW, iW) {
      var OW, mW = 0,
        EW = (WW = WW.slice()).length - 1,
        NW = WW[mW],
        PW = WW[EW];
      return PW < NW && (OW = mW, mW = EW, EW = OW, OW = NW, NW = PW, PW = OW), WW[mW] = iW.floor(NW), WW[EW] = iW.ceil(PW), WW
    }

    function Qi(WW) {
      return Math.log(WW)
    }

    function WO(WW) {
      return Math.exp(WW)
    }

    function iO(WW) {
      return -Math.log(-WW)
    }

    function OO(WW) {
      return -Math.exp(-WW)
    }

    function mO(WW) {
      return isFinite(WW) ? +("1e" + WW) : WW < 0 ? 0 : WW
    }

    function EO(WW) {
      return (iW, OW) => -WW(-iW, OW)
    }

    function NO(WW) {
      const iW = WW(Qi, WO),
        OW = iW.domain;
      let mW, EW, NW = 10;

      function PW() {
        return mW = function(WW) {
          return WW === Math.E ? Math.log : 10 === WW && Math.log10 || 2 === WW && Math.log2 || (WW = Math.log(WW), iW => Math.log(iW) / WW)
        }(NW), EW = function(WW) {
          return 10 === WW ? mO : WW === Math.E ? Math.exp : iW => Math.pow(WW, iW)
        }(NW), OW()[0] < 0 ? (mW = EO(mW), EW = EO(EW), WW(iO, OO)) : WW(Qi, WO), iW
      }
      return iW.base = function(WW) {
        return arguments.length ? (NW = +WW, PW()) : NW
      }, iW.domain = function(WW) {
        return arguments.length ? (OW(WW), PW()) : OW()
      }, iW.ticks = WW => {
        const iW = OW();
        let PW = iW[0],
          LW = iW[iW.length - 1];
        const cW = LW < PW;
        cW && ([PW, LW] = [LW, PW]);
        let tW, ZW, xW = mW(PW),
          lW = mW(LW);
        const AW = null == WW ? 10 : +WW;
        let bW = [];
        if (!(NW % 1) && lW - xW < AW) {
          if (xW = Math.floor(xW), lW = Math.ceil(lW), PW > 0) {
            for (; xW <= lW; ++xW)
              for (tW = 1; tW < NW; ++tW)
                if (ZW = xW < 0 ? tW / EW(-xW) : tW * EW(xW), !(ZW < PW)) {
                  if (ZW > LW) break;
                  bW.push(ZW)
                }
          } else
            for (; xW <= lW; ++xW)
              for (tW = NW - 1; tW >= 1; --tW)
                if (ZW = xW > 0 ? tW / EW(-xW) : tW * EW(xW), !(ZW < PW)) {
                  if (ZW > LW) break;
                  bW.push(ZW)
                } 2 * bW.length < AW && (bW = wW(PW, LW, AW))
        } else bW = wW(xW, lW, Math.min(lW - xW, AW)).map(EW);
        return cW ? bW.reverse() : bW
      }, iW.tickFormat = (WW, OW) => {
        if (null == WW && (WW = 10), null == OW && (OW = 10 === NW ? "s" : ","), "function" !== typeof OW && (NW % 1 || null != (OW = di(OW)).precision || (OW.trim = !0), OW = Xi(OW)), WW === 1 / 0) return OW;
        const PW = Math.max(1, NW * WW / iW.ticks().length);
        return WW => {
          let iW = WW / EW(Math.round(mW(WW)));
          return iW * NW < NW - .5 && (iW *= NW), iW <= PW ? OW(WW) : ""
        }
      }, iW.nice = () => OW(Fi(OW(), {
        floor: WW => EW(Math.floor(mW(WW))),
        ceil: WW => EW(Math.ceil(mW(WW)))
      })), iW
    }

    function PO() {
      const WW = NO(Ji()).domain([1, 10]);
      return WW.copy = () => Ti(WW, PO()).base(WW.base()), ui.f.apply(WW, arguments), WW
    }

    function LO(WW) {
      return function(iW) {
        return Math.sign(iW) * Math.log1p(Math.abs(iW / WW))
      }
    }

    function cO(WW) {
      return function(iW) {
        return Math.sign(iW) * Math.expm1(Math.abs(iW)) * WW
      }
    }

    function wO(WW) {
      var iW = 1,
        OW = WW(LO(iW), cO(iW));
      return OW.constant = function(OW) {
        return arguments.length ? WW(LO(iW = +OW), cO(iW)) : iW
      }, ai(OW)
    }

    function tO() {
      var WW = wO(Ji());
      return WW.copy = function() {
        return Ti(WW, tO()).constant(WW.constant())
      }, ui.f.apply(WW, arguments)
    }
    Ci = Gi({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), Xi = Ci.format, Bi = Ci.formatPrefix;
    var ZO = OW(7125);

    function xO(WW) {
      return function(iW) {
        return iW < 0 ? -Math.pow(-iW, WW) : Math.pow(iW, WW)
      }
    }

    function lO(WW) {
      return WW < 0 ? -Math.sqrt(-WW) : Math.sqrt(WW)
    }

    function AO(WW) {
      return WW < 0 ? -WW * WW : WW * WW
    }

    function bO(WW) {
      var iW = WW(Ki, Ki),
        OW = 1;
      return iW.exponent = function(iW) {
        return arguments.length ? 1 === (OW = +iW) ? WW(Ki, Ki) : .5 === OW ? WW(lO, AO) : WW(xO(OW), xO(1 / OW)) : OW
      }, ai(iW)
    }

    function jO() {
      var WW = bO(Ji());
      return WW.copy = function() {
        return Ti(WW, jO()).exponent(WW.exponent())
      }, ui.f.apply(WW, arguments), WW
    }

    function UO() {
      return jO.apply(null, arguments).exponent(.5)
    }

    function kO(WW) {
      return Math.sign(WW) * WW * WW
    }

    function sO() {
      var WW, iW = Hi(),
        OW = [0, 1],
        mW = !1;

      function EW(OW) {
        var EW = function(WW) {
          return Math.sign(WW) * Math.sqrt(Math.abs(WW))
        }(iW(OW));
        return isNaN(EW) ? WW : mW ? Math.round(EW) : EW
      }
      return EW.invert = function(WW) {
        return iW.invert(kO(WW))
      }, EW.domain = function(WW) {
        return arguments.length ? (iW.domain(WW), EW) : iW.domain()
      }, EW.range = function(WW) {
        return arguments.length ? (iW.range((OW = Array.from(WW, si)).map(kO)), EW) : OW.slice()
      }, EW.rangeRound = function(WW) {
        return EW.range(WW).round(!0)
      }, EW.round = function(WW) {
        return arguments.length ? (mW = !!WW, EW) : mW
      }, EW.clamp = function(WW) {
        return arguments.length ? (iW.clamp(WW), EW) : iW.clamp()
      }, EW.unknown = function(iW) {
        return arguments.length ? (WW = iW, EW) : WW
      }, EW.copy = function() {
        return sO(iW.domain(), OW).round(mW).clamp(iW.clamp()).unknown(WW)
      }, ui.f.apply(EW, arguments), ai(EW)
    }

    function MO(WW, iW) {
      let OW;
      if (void 0 === iW)
        for (const mW of WW) null != mW && (OW < mW || void 0 === OW && mW >= mW) && (OW = mW);
      else {
        let mW = -1;
        for (let EW of WW) null != (EW = iW(EW, ++mW, WW)) && (OW < EW || void 0 === OW && EW >= EW) && (OW = EW)
      }
      return OW
    }

    function KO(WW, iW) {
      let OW;
      if (void 0 === iW)
        for (const mW of WW) null != mW && (OW > mW || void 0 === OW && mW >= mW) && (OW = mW);
      else {
        let mW = -1;
        for (let EW of WW) null != (EW = iW(EW, ++mW, WW)) && (OW > EW || void 0 === OW && EW >= EW) && (OW = EW)
      }
      return OW
    }

    function SO() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xW;
      if (WW === xW) return YO;
      if ("function" !== typeof WW) throw new TypeError("compare is not a function");
      return (iW, OW) => {
        const mW = WW(iW, OW);
        return mW || 0 === mW ? mW : (0 === WW(OW, OW)) - (0 === WW(iW, iW))
      }
    }

    function YO(WW, iW) {
      return (null == WW || !(WW >= WW)) - (null == iW || !(iW >= iW)) || (WW < iW ? -1 : WW > iW ? 1 : 0)
    }

    function yO(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        EW = arguments.length > 4 ? arguments[4] : void 0;
      if (iW = Math.floor(iW), OW = Math.floor(Math.max(0, OW)), mW = Math.floor(Math.min(WW.length - 1, mW)), !(OW <= iW && iW <= mW)) return WW;
      for (EW = void 0 === EW ? YO : SO(EW); mW > OW;) {
        if (mW - OW > 600) {
          const NW = mW - OW + 1,
            PW = iW - OW + 1,
            LW = Math.log(NW),
            cW = .5 * Math.exp(2 * LW / 3),
            wW = .5 * Math.sqrt(LW * cW * (NW - cW) / NW) * (PW - NW / 2 < 0 ? -1 : 1);
          yO(WW, iW, Math.max(OW, Math.floor(iW - PW * cW / NW + wW)), Math.min(mW, Math.floor(iW + (NW - PW) * cW / NW + wW)), EW)
        }
        const NW = WW[iW];
        let PW = OW,
          LW = mW;
        for (TO(WW, OW, iW), EW(WW[mW], NW) > 0 && TO(WW, OW, mW); PW < LW;) {
          for (TO(WW, PW, LW), ++PW, --LW; EW(WW[PW], NW) < 0;) ++PW;
          for (; EW(WW[LW], NW) > 0;) --LW
        }
        0 === EW(WW[OW], NW) ? TO(WW, OW, LW) : (++LW, TO(WW, LW, mW)), LW <= iW && (OW = LW + 1), iW <= LW && (mW = LW - 1)
      }
      return WW
    }

    function TO(WW, iW, OW) {
      const mW = WW[iW];
      WW[iW] = WW[OW], WW[OW] = mW
    }

    function JO(WW, iW, OW) {
      if (WW = Float64Array.from(function*(WW, iW) {
          if (void 0 === iW)
            for (let OW of WW) null != OW && (OW = +OW) >= OW && (yield OW);
          else {
            let OW = -1;
            for (let mW of WW) null != (mW = iW(mW, ++OW, WW)) && (mW = +mW) >= mW && (yield mW)
          }
        }(WW, OW)), (mW = WW.length) && !isNaN(iW = +iW)) {
        if (iW <= 0 || mW < 2) return KO(WW);
        if (iW >= 1) return MO(WW);
        var mW, EW = (mW - 1) * iW,
          NW = Math.floor(EW),
          PW = MO(yO(WW, NW).subarray(0, NW + 1));
        return PW + (KO(WW.subarray(NW + 1)) - PW) * (EW - NW)
      }
    }

    function hO(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jW;
      if ((mW = WW.length) && !isNaN(iW = +iW)) {
        if (iW <= 0 || mW < 2) return +OW(WW[0], 0, WW);
        if (iW >= 1) return +OW(WW[mW - 1], mW - 1, WW);
        var mW, EW = (mW - 1) * iW,
          NW = Math.floor(EW),
          PW = +OW(WW[NW], NW, WW);
        return PW + (+OW(WW[NW + 1], NW + 1, WW) - PW) * (EW - NW)
      }
    }

    function HO() {
      var WW, iW = [],
        OW = [],
        mW = [];

      function EW() {
        var WW = 0,
          EW = Math.max(1, OW.length);
        for (mW = new Array(EW - 1); ++WW < EW;) mW[WW - 1] = hO(iW, WW / EW);
        return NW
      }

      function NW(iW) {
        return null == iW || isNaN(iW = +iW) ? WW : OW[sW(mW, iW)]
      }
      return NW.invertExtent = function(WW) {
        var EW = OW.indexOf(WW);
        return EW < 0 ? [NaN, NaN] : [EW > 0 ? mW[EW - 1] : iW[0], EW < mW.length ? mW[EW] : iW[iW.length - 1]]
      }, NW.domain = function(WW) {
        if (!arguments.length) return iW.slice();
        iW = [];
        for (let OW of WW) null == OW || isNaN(OW = +OW) || iW.push(OW);
        return iW.sort(xW), EW()
      }, NW.range = function(WW) {
        return arguments.length ? (OW = Array.from(WW), EW()) : OW.slice()
      }, NW.unknown = function(iW) {
        return arguments.length ? (WW = iW, NW) : WW
      }, NW.quantiles = function() {
        return mW.slice()
      }, NW.copy = function() {
        return HO().domain(iW).range(OW).unknown(WW)
      }, ui.f.apply(NW, arguments)
    }

    function nO() {
      var WW, iW = 0,
        OW = 1,
        mW = 1,
        EW = [.5],
        NW = [0, 1];

      function PW(iW) {
        return null != iW && iW <= iW ? NW[sW(EW, iW, 0, mW)] : WW
      }

      function LW() {
        var WW = -1;
        for (EW = new Array(mW); ++WW < mW;) EW[WW] = ((WW + 1) * OW - (WW - mW) * iW) / (mW + 1);
        return PW
      }
      return PW.domain = function(WW) {
        return arguments.length ? ([iW, OW] = WW, iW = +iW, OW = +OW, LW()) : [iW, OW]
      }, PW.range = function(WW) {
        return arguments.length ? (mW = (NW = Array.from(WW)).length - 1, LW()) : NW.slice()
      }, PW.invertExtent = function(WW) {
        var PW = NW.indexOf(WW);
        return PW < 0 ? [NaN, NaN] : PW < 1 ? [iW, EW[0]] : PW >= mW ? [EW[mW - 1], OW] : [EW[PW - 1], EW[PW]]
      }, PW.unknown = function(iW) {
        return arguments.length ? (WW = iW, PW) : PW
      }, PW.thresholds = function() {
        return EW.slice()
      }, PW.copy = function() {
        return nO().domain([iW, OW]).range(NW).unknown(WW)
      }, ui.f.apply(ai(PW), arguments)
    }

    function uO() {
      var WW, iW = [.5],
        OW = [0, 1],
        mW = 1;

      function EW(EW) {
        return null != EW && EW <= EW ? OW[sW(iW, EW, 0, mW)] : WW
      }
      return EW.domain = function(WW) {
        return arguments.length ? (iW = Array.from(WW), mW = Math.min(iW.length, OW.length - 1), EW) : iW.slice()
      }, EW.range = function(WW) {
        return arguments.length ? (OW = Array.from(WW), mW = Math.min(iW.length, OW.length - 1), EW) : OW.slice()
      }, EW.invertExtent = function(WW) {
        var mW = OW.indexOf(WW);
        return [iW[mW - 1], iW[mW]]
      }, EW.unknown = function(iW) {
        return arguments.length ? (WW = iW, EW) : WW
      }, EW.copy = function() {
        return uO().domain(iW).range(OW).unknown(WW)
      }, ui.f.apply(EW, arguments)
    }
    const oO = 1e3,
      dO = 6e4,
      eO = 36e5,
      vO = 864e5,
      gO = 6048e5,
      DO = 2592e6,
      VO = 31536e6,
      pO = new Date,
      fO = new Date;

    function CO(WW, iW, OW, mW) {
      function EW(iW) {
        return WW(iW = 0 === arguments.length ? new Date : new Date(+iW)), iW
      }
      return EW.floor = iW => (WW(iW = new Date(+iW)), iW), EW.ceil = OW => (WW(OW = new Date(OW - 1)), iW(OW, 1), WW(OW), OW), EW.round = WW => {
        const iW = EW(WW),
          OW = EW.ceil(WW);
        return WW - iW < OW - WW ? iW : OW
      }, EW.offset = (WW, OW) => (iW(WW = new Date(+WW), null == OW ? 1 : Math.floor(OW)), WW), EW.range = (OW, mW, NW) => {
        const PW = [];
        if (OW = EW.ceil(OW), NW = null == NW ? 1 : Math.floor(NW), !(OW < mW) || !(NW > 0)) return PW;
        let LW;
        do {
          PW.push(LW = new Date(+OW)), iW(OW, NW), WW(OW)
        } while (LW < OW && OW < mW);
        return PW
      }, EW.filter = OW => CO((iW => {
        if (iW >= iW)
          for (; WW(iW), !OW(iW);) iW.setTime(iW - 1)
      }), ((WW, mW) => {
        if (WW >= WW)
          if (mW < 0)
            for (; ++mW <= 0;)
              for (; iW(WW, -1), !OW(WW););
          else
            for (; --mW >= 0;)
              for (; iW(WW, 1), !OW(WW););
      })), OW && (EW.count = (iW, mW) => (pO.setTime(+iW), fO.setTime(+mW), WW(pO), WW(fO), Math.floor(OW(pO, fO))), EW.every = WW => (WW = Math.floor(WW), isFinite(WW) && WW > 0 ? WW > 1 ? EW.filter(mW ? iW => mW(iW) % WW === 0 : iW => EW.count(0, iW) % WW === 0) : EW : null)), EW
    }
    const XO = CO((() => {}), ((WW, iW) => {
      WW.setTime(+WW + iW)
    }), ((WW, iW) => iW - WW));
    XO.every = WW => (WW = Math.floor(WW), isFinite(WW) && WW > 0 ? WW > 1 ? CO((iW => {
      iW.setTime(Math.floor(iW / WW) * WW)
    }), ((iW, OW) => {
      iW.setTime(+iW + OW * WW)
    }), ((iW, OW) => (OW - iW) / WW)) : XO : null);
    XO.range;
    const BO = CO((WW => {
        WW.setTime(WW - WW.getMilliseconds())
      }), ((WW, iW) => {
        WW.setTime(+WW + iW * oO)
      }), ((WW, iW) => (iW - WW) / oO), (WW => WW.getUTCSeconds())),
      qO = (BO.range, CO((WW => {
        WW.setTime(WW - WW.getMilliseconds() - WW.getSeconds() * oO)
      }), ((WW, iW) => {
        WW.setTime(+WW + iW * dO)
      }), ((WW, iW) => (iW - WW) / dO), (WW => WW.getMinutes()))),
      RO = (qO.range, CO((WW => {
        WW.setUTCSeconds(0, 0)
      }), ((WW, iW) => {
        WW.setTime(+WW + iW * dO)
      }), ((WW, iW) => (iW - WW) / dO), (WW => WW.getUTCMinutes()))),
      GO = (RO.range, CO((WW => {
        WW.setTime(WW - WW.getMilliseconds() - WW.getSeconds() * oO - WW.getMinutes() * dO)
      }), ((WW, iW) => {
        WW.setTime(+WW + iW * eO)
      }), ((WW, iW) => (iW - WW) / eO), (WW => WW.getHours()))),
      IO = (GO.range, CO((WW => {
        WW.setUTCMinutes(0, 0, 0)
      }), ((WW, iW) => {
        WW.setTime(+WW + iW * eO)
      }), ((WW, iW) => (iW - WW) / eO), (WW => WW.getUTCHours()))),
      aO = (IO.range, CO((WW => WW.setHours(0, 0, 0, 0)), ((WW, iW) => WW.setDate(WW.getDate() + iW)), ((WW, iW) => (iW - WW - (iW.getTimezoneOffset() - WW.getTimezoneOffset()) * dO) / vO), (WW => WW.getDate() - 1))),
      rO = (aO.range, CO((WW => {
        WW.setUTCHours(0, 0, 0, 0)
      }), ((WW, iW) => {
        WW.setUTCDate(WW.getUTCDate() + iW)
      }), ((WW, iW) => (iW - WW) / vO), (WW => WW.getUTCDate() - 1))),
      zO = (rO.range, CO((WW => {
        WW.setUTCHours(0, 0, 0, 0)
      }), ((WW, iW) => {
        WW.setUTCDate(WW.getUTCDate() + iW)
      }), ((WW, iW) => (iW - WW) / vO), (WW => Math.floor(WW / vO))));
    zO.range;

    function FO(WW) {
      return CO((iW => {
        iW.setDate(iW.getDate() - (iW.getDay() + 7 - WW) % 7), iW.setHours(0, 0, 0, 0)
      }), ((WW, iW) => {
        WW.setDate(WW.getDate() + 7 * iW)
      }), ((WW, iW) => (iW - WW - (iW.getTimezoneOffset() - WW.getTimezoneOffset()) * dO) / gO))
    }
    const QO = FO(0),
      Wm = FO(1),
      im = FO(2),
      Om = FO(3),
      mm = FO(4),
      Em = FO(5),
      Nm = FO(6);
    QO.range, Wm.range, im.range, Om.range, mm.range, Em.range, Nm.range;

    function Pm(WW) {
      return CO((iW => {
        iW.setUTCDate(iW.getUTCDate() - (iW.getUTCDay() + 7 - WW) % 7), iW.setUTCHours(0, 0, 0, 0)
      }), ((WW, iW) => {
        WW.setUTCDate(WW.getUTCDate() + 7 * iW)
      }), ((WW, iW) => (iW - WW) / gO))
    }
    const Lm = Pm(0),
      cm = Pm(1),
      wm = Pm(2),
      tm = Pm(3),
      Zm = Pm(4),
      xm = Pm(5),
      lm = Pm(6),
      Am = (Lm.range, cm.range, wm.range, tm.range, Zm.range, xm.range, lm.range, CO((WW => {
        WW.setDate(1), WW.setHours(0, 0, 0, 0)
      }), ((WW, iW) => {
        WW.setMonth(WW.getMonth() + iW)
      }), ((WW, iW) => iW.getMonth() - WW.getMonth() + 12 * (iW.getFullYear() - WW.getFullYear())), (WW => WW.getMonth()))),
      bm = (Am.range, CO((WW => {
        WW.setUTCDate(1), WW.setUTCHours(0, 0, 0, 0)
      }), ((WW, iW) => {
        WW.setUTCMonth(WW.getUTCMonth() + iW)
      }), ((WW, iW) => iW.getUTCMonth() - WW.getUTCMonth() + 12 * (iW.getUTCFullYear() - WW.getUTCFullYear())), (WW => WW.getUTCMonth()))),
      jm = (bm.range, CO((WW => {
        WW.setMonth(0, 1), WW.setHours(0, 0, 0, 0)
      }), ((WW, iW) => {
        WW.setFullYear(WW.getFullYear() + iW)
      }), ((WW, iW) => iW.getFullYear() - WW.getFullYear()), (WW => WW.getFullYear())));
    jm.every = WW => isFinite(WW = Math.floor(WW)) && WW > 0 ? CO((iW => {
      iW.setFullYear(Math.floor(iW.getFullYear() / WW) * WW), iW.setMonth(0, 1), iW.setHours(0, 0, 0, 0)
    }), ((iW, OW) => {
      iW.setFullYear(iW.getFullYear() + OW * WW)
    })) : null;
    jm.range;
    const Um = CO((WW => {
      WW.setUTCMonth(0, 1), WW.setUTCHours(0, 0, 0, 0)
    }), ((WW, iW) => {
      WW.setUTCFullYear(WW.getUTCFullYear() + iW)
    }), ((WW, iW) => iW.getUTCFullYear() - WW.getUTCFullYear()), (WW => WW.getUTCFullYear()));
    Um.every = WW => isFinite(WW = Math.floor(WW)) && WW > 0 ? CO((iW => {
      iW.setUTCFullYear(Math.floor(iW.getUTCFullYear() / WW) * WW), iW.setUTCMonth(0, 1), iW.setUTCHours(0, 0, 0, 0)
    }), ((iW, OW) => {
      iW.setUTCFullYear(iW.getUTCFullYear() + OW * WW)
    })) : null;
    Um.range;

    function km(WW, iW, OW, mW, EW, NW) {
      const PW = [
        [BO, 1, oO],
        [BO, 5, 5e3],
        [BO, 15, 15e3],
        [BO, 30, 3e4],
        [NW, 1, dO],
        [NW, 5, 3e5],
        [NW, 15, 9e5],
        [NW, 30, 18e5],
        [EW, 1, eO],
        [EW, 3, 108e5],
        [EW, 6, 216e5],
        [EW, 12, 432e5],
        [mW, 1, vO],
        [mW, 2, 1728e5],
        [OW, 1, gO],
        [iW, 1, DO],
        [iW, 3, 7776e6],
        [WW, 1, VO]
      ];

      function LW(iW, OW, mW) {
        const EW = Math.abs(OW - iW) / mW,
          NW = AW((WW => {
            let [, , iW] = WW;
            return iW
          })).right(PW, EW);
        if (NW === PW.length) return WW.every(ZW(iW / VO, OW / VO, mW));
        if (0 === NW) return XO.every(Math.max(ZW(iW, OW, mW), 1));
        const [LW, cW] = PW[EW / PW[NW - 1][2] < PW[NW][2] / EW ? NW - 1 : NW];
        return LW.every(cW)
      }
      return [function(WW, iW, OW) {
        const mW = iW < WW;
        mW && ([WW, iW] = [iW, WW]);
        const EW = OW && "function" === typeof OW.range ? OW : LW(WW, iW, OW),
          NW = EW ? EW.range(WW, +iW + 1) : [];
        return mW ? NW.reverse() : NW
      }, LW]
    }
    const [sm, Mm] = km(Um, bm, Lm, zO, IO, RO), [Km, Sm] = km(jm, Am, QO, aO, GO, qO);

    function Ym(WW) {
      if (0 <= WW.y && WW.y < 100) {
        var iW = new Date(-1, WW.m, WW.d, WW.H, WW.M, WW.S, WW.L);
        return iW.setFullYear(WW.y), iW
      }
      return new Date(WW.y, WW.m, WW.d, WW.H, WW.M, WW.S, WW.L)
    }

    function ym(WW) {
      if (0 <= WW.y && WW.y < 100) {
        var iW = new Date(Date.UTC(-1, WW.m, WW.d, WW.H, WW.M, WW.S, WW.L));
        return iW.setUTCFullYear(WW.y), iW
      }
      return new Date(Date.UTC(WW.y, WW.m, WW.d, WW.H, WW.M, WW.S, WW.L))
    }

    function Tm(WW, iW, OW) {
      return {
        y: WW,
        m: iW,
        d: OW,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var Jm, hm, Hm, nm = {
        "-": "",
        _: " ",
        0: "0"
      },
      um = /^\s*\d+/,
      om = /^%/,
      dm = /[\\^$*+?|[\]().{}]/g;

    function em(WW, iW, OW) {
      var mW = WW < 0 ? "-" : "",
        EW = (mW ? -WW : WW) + "",
        NW = EW.length;
      return mW + (NW < OW ? new Array(OW - NW + 1).join(iW) + EW : EW)
    }

    function gm(WW) {
      return WW.replace(dm, "\\$&")
    }

    function Dm(WW) {
      return new RegExp("^(?:" + WW.map(gm).join("|") + ")", "i")
    }

    function Vm(WW) {
      return new Map(WW.map(((WW, iW) => [WW.toLowerCase(), iW])))
    }

    function pm(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 1));
      return mW ? (WW.w = +mW[0], OW + mW[0].length) : -1
    }

    function fm(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 1));
      return mW ? (WW.u = +mW[0], OW + mW[0].length) : -1
    }

    function Cm(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 2));
      return mW ? (WW.U = +mW[0], OW + mW[0].length) : -1
    }

    function Xm(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 2));
      return mW ? (WW.V = +mW[0], OW + mW[0].length) : -1
    }

    function Bm(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 2));
      return mW ? (WW.W = +mW[0], OW + mW[0].length) : -1
    }

    function qm(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 4));
      return mW ? (WW.y = +mW[0], OW + mW[0].length) : -1
    }

    function Rm(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 2));
      return mW ? (WW.y = +mW[0] + (+mW[0] > 68 ? 1900 : 2e3), OW + mW[0].length) : -1
    }

    function Gm(WW, iW, OW) {
      var mW = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(iW.slice(OW, OW + 6));
      return mW ? (WW.Z = mW[1] ? 0 : -(mW[2] + (mW[3] || "00")), OW + mW[0].length) : -1
    }

    function Im(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 1));
      return mW ? (WW.q = 3 * mW[0] - 3, OW + mW[0].length) : -1
    }

    function am(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 2));
      return mW ? (WW.m = mW[0] - 1, OW + mW[0].length) : -1
    }

    function rm(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 2));
      return mW ? (WW.d = +mW[0], OW + mW[0].length) : -1
    }

    function zm(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 3));
      return mW ? (WW.m = 0, WW.d = +mW[0], OW + mW[0].length) : -1
    }

    function Fm(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 2));
      return mW ? (WW.H = +mW[0], OW + mW[0].length) : -1
    }

    function Qm(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 2));
      return mW ? (WW.M = +mW[0], OW + mW[0].length) : -1
    }

    function WE(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 2));
      return mW ? (WW.S = +mW[0], OW + mW[0].length) : -1
    }

    function iE(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 3));
      return mW ? (WW.L = +mW[0], OW + mW[0].length) : -1
    }

    function OE(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW, OW + 6));
      return mW ? (WW.L = Math.floor(mW[0] / 1e3), OW + mW[0].length) : -1
    }

    function mE(WW, iW, OW) {
      var mW = om.exec(iW.slice(OW, OW + 1));
      return mW ? OW + mW[0].length : -1
    }

    function EE(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW));
      return mW ? (WW.Q = +mW[0], OW + mW[0].length) : -1
    }

    function NE(WW, iW, OW) {
      var mW = um.exec(iW.slice(OW));
      return mW ? (WW.s = +mW[0], OW + mW[0].length) : -1
    }

    function PE(WW, iW) {
      return em(WW.getDate(), iW, 2)
    }

    function LE(WW, iW) {
      return em(WW.getHours(), iW, 2)
    }

    function cE(WW, iW) {
      return em(WW.getHours() % 12 || 12, iW, 2)
    }

    function wE(WW, iW) {
      return em(1 + aO.count(jm(WW), WW), iW, 3)
    }

    function tE(WW, iW) {
      return em(WW.getMilliseconds(), iW, 3)
    }

    function ZE(WW, iW) {
      return tE(WW, iW) + "000"
    }

    function xE(WW, iW) {
      return em(WW.getMonth() + 1, iW, 2)
    }

    function lE(WW, iW) {
      return em(WW.getMinutes(), iW, 2)
    }

    function AE(WW, iW) {
      return em(WW.getSeconds(), iW, 2)
    }

    function bE(WW) {
      var iW = WW.getDay();
      return 0 === iW ? 7 : iW
    }

    function jE(WW, iW) {
      return em(QO.count(jm(WW) - 1, WW), iW, 2)
    }

    function UE(WW) {
      var iW = WW.getDay();
      return iW >= 4 || 0 === iW ? mm(WW) : mm.ceil(WW)
    }

    function kE(WW, iW) {
      return WW = UE(WW), em(mm.count(jm(WW), WW) + (4 === jm(WW).getDay()), iW, 2)
    }

    function sE(WW) {
      return WW.getDay()
    }

    function ME(WW, iW) {
      return em(Wm.count(jm(WW) - 1, WW), iW, 2)
    }

    function KE(WW, iW) {
      return em(WW.getFullYear() % 100, iW, 2)
    }

    function SE(WW, iW) {
      return em((WW = UE(WW)).getFullYear() % 100, iW, 2)
    }

    function YE(WW, iW) {
      return em(WW.getFullYear() % 1e4, iW, 4)
    }

    function yE(WW, iW) {
      var OW = WW.getDay();
      return em((WW = OW >= 4 || 0 === OW ? mm(WW) : mm.ceil(WW)).getFullYear() % 1e4, iW, 4)
    }

    function TE(WW) {
      var iW = WW.getTimezoneOffset();
      return (iW > 0 ? "-" : (iW *= -1, "+")) + em(iW / 60 | 0, "0", 2) + em(iW % 60, "0", 2)
    }

    function JE(WW, iW) {
      return em(WW.getUTCDate(), iW, 2)
    }

    function hE(WW, iW) {
      return em(WW.getUTCHours(), iW, 2)
    }

    function HE(WW, iW) {
      return em(WW.getUTCHours() % 12 || 12, iW, 2)
    }

    function nE(WW, iW) {
      return em(1 + rO.count(Um(WW), WW), iW, 3)
    }

    function uE(WW, iW) {
      return em(WW.getUTCMilliseconds(), iW, 3)
    }

    function oE(WW, iW) {
      return uE(WW, iW) + "000"
    }

    function dE(WW, iW) {
      return em(WW.getUTCMonth() + 1, iW, 2)
    }

    function eE(WW, iW) {
      return em(WW.getUTCMinutes(), iW, 2)
    }

    function vE(WW, iW) {
      return em(WW.getUTCSeconds(), iW, 2)
    }

    function gE(WW) {
      var iW = WW.getUTCDay();
      return 0 === iW ? 7 : iW
    }

    function DE(WW, iW) {
      return em(Lm.count(Um(WW) - 1, WW), iW, 2)
    }

    function VE(WW) {
      var iW = WW.getUTCDay();
      return iW >= 4 || 0 === iW ? Zm(WW) : Zm.ceil(WW)
    }

    function pE(WW, iW) {
      return WW = VE(WW), em(Zm.count(Um(WW), WW) + (4 === Um(WW).getUTCDay()), iW, 2)
    }

    function fE(WW) {
      return WW.getUTCDay()
    }

    function CE(WW, iW) {
      return em(cm.count(Um(WW) - 1, WW), iW, 2)
    }

    function XE(WW, iW) {
      return em(WW.getUTCFullYear() % 100, iW, 2)
    }

    function BE(WW, iW) {
      return em((WW = VE(WW)).getUTCFullYear() % 100, iW, 2)
    }

    function qE(WW, iW) {
      return em(WW.getUTCFullYear() % 1e4, iW, 4)
    }

    function RE(WW, iW) {
      var OW = WW.getUTCDay();
      return em((WW = OW >= 4 || 0 === OW ? Zm(WW) : Zm.ceil(WW)).getUTCFullYear() % 1e4, iW, 4)
    }

    function GE() {
      return "+0000"
    }

    function IE() {
      return "%"
    }

    function aE(WW) {
      return +WW
    }

    function rE(WW) {
      return Math.floor(+WW / 1e3)
    }

    function zE(WW) {
      return new Date(WW)
    }

    function FE(WW) {
      return WW instanceof Date ? +WW : +new Date(+WW)
    }

    function QE(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) {
      var tW = Hi(),
        ZW = tW.invert,
        xW = tW.domain,
        lW = wW(".%L"),
        AW = wW(":%S"),
        bW = wW("%I:%M"),
        jW = wW("%I %p"),
        UW = wW("%a %d"),
        kW = wW("%b %d"),
        sW = wW("%B"),
        MW = wW("%Y");

      function KW(WW) {
        return (cW(WW) < WW ? lW : LW(WW) < WW ? AW : PW(WW) < WW ? bW : NW(WW) < WW ? jW : mW(WW) < WW ? EW(WW) < WW ? UW : kW : OW(WW) < WW ? sW : MW)(WW)
      }
      return tW.invert = function(WW) {
        return new Date(ZW(WW))
      }, tW.domain = function(WW) {
        return arguments.length ? xW(Array.from(WW, FE)) : xW().map(zE)
      }, tW.ticks = function(iW) {
        var OW = xW();
        return WW(OW[0], OW[OW.length - 1], null == iW ? 10 : iW)
      }, tW.tickFormat = function(WW, iW) {
        return null == iW ? KW : wW(iW)
      }, tW.nice = function(WW) {
        var OW = xW();
        return WW && "function" === typeof WW.range || (WW = iW(OW[0], OW[OW.length - 1], null == WW ? 10 : WW)), WW ? xW(Fi(OW, WW)) : tW
      }, tW.copy = function() {
        return Ti(tW, QE(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW))
      }, tW
    }

    function WN() {
      return ui.f.apply(QE(Km, Sm, jm, Am, QO, aO, GO, qO, BO, hm).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function iN() {
      return ui.f.apply(QE(sm, Mm, Um, bm, Lm, rO, IO, RO, BO, Hm).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function ON() {
      var WW, iW, OW, mW, EW, NW = 0,
        PW = 1,
        LW = Ki,
        cW = !1;

      function wW(iW) {
        return null == iW || isNaN(iW = +iW) ? EW : LW(0 === OW ? .5 : (iW = (mW(iW) - WW) * OW, cW ? Math.max(0, Math.min(1, iW)) : iW))
      }

      function tW(WW) {
        return function(iW) {
          var OW, mW;
          return arguments.length ? ([OW, mW] = iW, LW = WW(OW, mW), wW) : [LW(0), LW(1)]
        }
      }
      return wW.domain = function(EW) {
          return arguments.length ? ([NW, PW] = EW, WW = mW(NW = +NW), iW = mW(PW = +PW), OW = WW === iW ? 0 : 1 / (iW - WW), wW) : [NW, PW]
        }, wW.clamp = function(WW) {
          return arguments.length ? (cW = !!WW, wW) : cW
        }, wW.interpolator = function(WW) {
          return arguments.length ? (LW = WW, wW) : LW
        }, wW.range = tW(Ui), wW.rangeRound = tW(ki), wW.unknown = function(WW) {
          return arguments.length ? (EW = WW, wW) : EW
        },
        function(EW) {
          return mW = EW, WW = EW(NW), iW = EW(PW), OW = WW === iW ? 0 : 1 / (iW - WW), wW
        }
    }

    function mN(WW, iW) {
      return iW.domain(WW.domain()).interpolator(WW.interpolator()).clamp(WW.clamp()).unknown(WW.unknown())
    }

    function EN() {
      var WW = ai(ON()(Ki));
      return WW.copy = function() {
        return mN(WW, EN())
      }, ui.c.apply(WW, arguments)
    }

    function NN() {
      var WW = NO(ON()).domain([1, 10]);
      return WW.copy = function() {
        return mN(WW, NN()).base(WW.base())
      }, ui.c.apply(WW, arguments)
    }

    function PN() {
      var WW = wO(ON());
      return WW.copy = function() {
        return mN(WW, PN()).constant(WW.constant())
      }, ui.c.apply(WW, arguments)
    }

    function LN() {
      var WW = bO(ON());
      return WW.copy = function() {
        return mN(WW, LN()).exponent(WW.exponent())
      }, ui.c.apply(WW, arguments)
    }

    function cN() {
      return LN.apply(null, arguments).exponent(.5)
    }

    function wN() {
      var WW = [],
        iW = Ki;

      function OW(OW) {
        if (null != OW && !isNaN(OW = +OW)) return iW((sW(WW, OW, 1) - 1) / (WW.length - 1))
      }
      return OW.domain = function(iW) {
        if (!arguments.length) return WW.slice();
        WW = [];
        for (let OW of iW) null == OW || isNaN(OW = +OW) || WW.push(OW);
        return WW.sort(xW), OW
      }, OW.interpolator = function(WW) {
        return arguments.length ? (iW = WW, OW) : iW
      }, OW.range = function() {
        return WW.map(((OW, mW) => iW(mW / (WW.length - 1))))
      }, OW.quantiles = function(iW) {
        return Array.from({
          length: iW + 1
        }, ((OW, mW) => JO(WW, mW / iW)))
      }, OW.copy = function() {
        return wN(iW).domain(WW)
      }, ui.c.apply(OW, arguments)
    }

    function tN() {
      var WW, iW, OW, mW, EW, NW, PW, LW = 0,
        cW = .5,
        wW = 1,
        tW = 1,
        ZW = Ki,
        xW = !1;

      function lW(WW) {
        return isNaN(WW = +WW) ? PW : (WW = .5 + ((WW = +NW(WW)) - iW) * (tW * WW < tW * iW ? mW : EW), ZW(xW ? Math.max(0, Math.min(1, WW)) : WW))
      }

      function AW(WW) {
        return function(iW) {
          var OW, mW, EW;
          return arguments.length ? ([OW, mW, EW] = iW, ZW = function(WW, iW) {
            void 0 === iW && (iW = WW, WW = Ui);
            for (var OW = 0, mW = iW.length - 1, EW = iW[0], NW = new Array(mW < 0 ? 0 : mW); OW < mW;) NW[OW] = WW(EW, EW = iW[++OW]);
            return function(WW) {
              var iW = Math.max(0, Math.min(mW - 1, Math.floor(WW *= mW)));
              return NW[iW](WW - iW)
            }
          }(WW, [OW, mW, EW]), lW) : [ZW(0), ZW(.5), ZW(1)]
        }
      }
      return lW.domain = function(PW) {
          return arguments.length ? ([LW, cW, wW] = PW, WW = NW(LW = +LW), iW = NW(cW = +cW), OW = NW(wW = +wW), mW = WW === iW ? 0 : .5 / (iW - WW), EW = iW === OW ? 0 : .5 / (OW - iW), tW = iW < WW ? -1 : 1, lW) : [LW, cW, wW]
        }, lW.clamp = function(WW) {
          return arguments.length ? (xW = !!WW, lW) : xW
        }, lW.interpolator = function(WW) {
          return arguments.length ? (ZW = WW, lW) : ZW
        }, lW.range = AW(Ui), lW.rangeRound = AW(ki), lW.unknown = function(WW) {
          return arguments.length ? (PW = WW, lW) : PW
        },
        function(PW) {
          return NW = PW, WW = PW(LW), iW = PW(cW), OW = PW(wW), mW = WW === iW ? 0 : .5 / (iW - WW), EW = iW === OW ? 0 : .5 / (OW - iW), tW = iW < WW ? -1 : 1, lW
        }
    }

    function ZN() {
      var WW = ai(tN()(Ki));
      return WW.copy = function() {
        return mN(WW, ZN())
      }, ui.c.apply(WW, arguments)
    }

    function xN() {
      var WW = NO(tN()).domain([.1, 1, 10]);
      return WW.copy = function() {
        return mN(WW, xN()).base(WW.base())
      }, ui.c.apply(WW, arguments)
    }

    function lN() {
      var WW = wO(tN());
      return WW.copy = function() {
        return mN(WW, lN()).constant(WW.constant())
      }, ui.c.apply(WW, arguments)
    }

    function AN() {
      var WW = bO(tN());
      return WW.copy = function() {
        return mN(WW, AN()).exponent(WW.exponent())
      }, ui.c.apply(WW, arguments)
    }

    function bN() {
      return AN.apply(null, arguments).exponent(.5)
    }

    function jN(WW, iW) {
      if ((EW = WW.length) > 1)
        for (var OW, mW, EW, NW = 1, PW = WW[iW[0]], LW = PW.length; NW < EW; ++NW)
          for (mW = PW, PW = WW[iW[NW]], OW = 0; OW < LW; ++OW) PW[OW][1] += PW[OW][0] = isNaN(mW[OW][1]) ? mW[OW][0] : mW[OW][1]
    }! function(WW) {
      Jm = function(WW) {
        var iW = WW.dateTime,
          OW = WW.date,
          mW = WW.time,
          EW = WW.periods,
          NW = WW.days,
          PW = WW.shortDays,
          LW = WW.months,
          cW = WW.shortMonths,
          wW = Dm(EW),
          tW = Vm(EW),
          ZW = Dm(NW),
          xW = Vm(NW),
          lW = Dm(PW),
          AW = Vm(PW),
          bW = Dm(LW),
          jW = Vm(LW),
          UW = Dm(cW),
          kW = Vm(cW),
          sW = {
            a: function(WW) {
              return PW[WW.getDay()]
            },
            A: function(WW) {
              return NW[WW.getDay()]
            },
            b: function(WW) {
              return cW[WW.getMonth()]
            },
            B: function(WW) {
              return LW[WW.getMonth()]
            },
            c: null,
            d: PE,
            e: PE,
            f: ZE,
            g: SE,
            G: yE,
            H: LE,
            I: cE,
            j: wE,
            L: tE,
            m: xE,
            M: lE,
            p: function(WW) {
              return EW[+(WW.getHours() >= 12)]
            },
            q: function(WW) {
              return 1 + ~~(WW.getMonth() / 3)
            },
            Q: aE,
            s: rE,
            S: AE,
            u: bE,
            U: jE,
            V: kE,
            w: sE,
            W: ME,
            x: null,
            X: null,
            y: KE,
            Y: YE,
            Z: TE,
            "%": IE
          },
          MW = {
            a: function(WW) {
              return PW[WW.getUTCDay()]
            },
            A: function(WW) {
              return NW[WW.getUTCDay()]
            },
            b: function(WW) {
              return cW[WW.getUTCMonth()]
            },
            B: function(WW) {
              return LW[WW.getUTCMonth()]
            },
            c: null,
            d: JE,
            e: JE,
            f: oE,
            g: BE,
            G: RE,
            H: hE,
            I: HE,
            j: nE,
            L: uE,
            m: dE,
            M: eE,
            p: function(WW) {
              return EW[+(WW.getUTCHours() >= 12)]
            },
            q: function(WW) {
              return 1 + ~~(WW.getUTCMonth() / 3)
            },
            Q: aE,
            s: rE,
            S: vE,
            u: gE,
            U: DE,
            V: pE,
            w: fE,
            W: CE,
            x: null,
            X: null,
            y: XE,
            Y: qE,
            Z: GE,
            "%": IE
          },
          KW = {
            a: function(WW, iW, OW) {
              var mW = lW.exec(iW.slice(OW));
              return mW ? (WW.w = AW.get(mW[0].toLowerCase()), OW + mW[0].length) : -1
            },
            A: function(WW, iW, OW) {
              var mW = ZW.exec(iW.slice(OW));
              return mW ? (WW.w = xW.get(mW[0].toLowerCase()), OW + mW[0].length) : -1
            },
            b: function(WW, iW, OW) {
              var mW = UW.exec(iW.slice(OW));
              return mW ? (WW.m = kW.get(mW[0].toLowerCase()), OW + mW[0].length) : -1
            },
            B: function(WW, iW, OW) {
              var mW = bW.exec(iW.slice(OW));
              return mW ? (WW.m = jW.get(mW[0].toLowerCase()), OW + mW[0].length) : -1
            },
            c: function(WW, OW, mW) {
              return yW(WW, iW, OW, mW)
            },
            d: rm,
            e: rm,
            f: OE,
            g: Rm,
            G: qm,
            H: Fm,
            I: Fm,
            j: zm,
            L: iE,
            m: am,
            M: Qm,
            p: function(WW, iW, OW) {
              var mW = wW.exec(iW.slice(OW));
              return mW ? (WW.p = tW.get(mW[0].toLowerCase()), OW + mW[0].length) : -1
            },
            q: Im,
            Q: EE,
            s: NE,
            S: WE,
            u: fm,
            U: Cm,
            V: Xm,
            w: pm,
            W: Bm,
            x: function(WW, iW, mW) {
              return yW(WW, OW, iW, mW)
            },
            X: function(WW, iW, OW) {
              return yW(WW, mW, iW, OW)
            },
            y: Rm,
            Y: qm,
            Z: Gm,
            "%": mE
          };

        function SW(WW, iW) {
          return function(OW) {
            var mW, EW, NW, PW = [],
              LW = -1,
              cW = 0,
              wW = WW.length;
            for (OW instanceof Date || (OW = new Date(+OW)); ++LW < wW;) 37 === WW.charCodeAt(LW) && (PW.push(WW.slice(cW, LW)), null != (EW = nm[mW = WW.charAt(++LW)]) ? mW = WW.charAt(++LW) : EW = "e" === mW ? " " : "0", (NW = iW[mW]) && (mW = NW(OW, EW)), PW.push(mW), cW = LW + 1);
            return PW.push(WW.slice(cW, LW)), PW.join("")
          }
        }

        function YW(WW, iW) {
          return function(OW) {
            var mW, EW, NW = Tm(1900, void 0, 1);
            if (yW(NW, WW, OW += "", 0) != OW.length) return null;
            if ("Q" in NW) return new Date(NW.Q);
            if ("s" in NW) return new Date(1e3 * NW.s + ("L" in NW ? NW.L : 0));
            if (iW && !("Z" in NW) && (NW.Z = 0), "p" in NW && (NW.H = NW.H % 12 + 12 * NW.p), void 0 === NW.m && (NW.m = "q" in NW ? NW.q : 0), "V" in NW) {
              if (NW.V < 1 || NW.V > 53) return null;
              "w" in NW || (NW.w = 1), "Z" in NW ? (EW = (mW = ym(Tm(NW.y, 0, 1))).getUTCDay(), mW = EW > 4 || 0 === EW ? cm.ceil(mW) : cm(mW), mW = rO.offset(mW, 7 * (NW.V - 1)), NW.y = mW.getUTCFullYear(), NW.m = mW.getUTCMonth(), NW.d = mW.getUTCDate() + (NW.w + 6) % 7) : (EW = (mW = Ym(Tm(NW.y, 0, 1))).getDay(), mW = EW > 4 || 0 === EW ? Wm.ceil(mW) : Wm(mW), mW = aO.offset(mW, 7 * (NW.V - 1)), NW.y = mW.getFullYear(), NW.m = mW.getMonth(), NW.d = mW.getDate() + (NW.w + 6) % 7)
            } else("W" in NW || "U" in NW) && ("w" in NW || (NW.w = "u" in NW ? NW.u % 7 : "W" in NW ? 1 : 0), EW = "Z" in NW ? ym(Tm(NW.y, 0, 1)).getUTCDay() : Ym(Tm(NW.y, 0, 1)).getDay(), NW.m = 0, NW.d = "W" in NW ? (NW.w + 6) % 7 + 7 * NW.W - (EW + 5) % 7 : NW.w + 7 * NW.U - (EW + 6) % 7);
            return "Z" in NW ? (NW.H += NW.Z / 100 | 0, NW.M += NW.Z % 100, ym(NW)) : Ym(NW)
          }
        }

        function yW(WW, iW, OW, mW) {
          for (var EW, NW, PW = 0, LW = iW.length, cW = OW.length; PW < LW;) {
            if (mW >= cW) return -1;
            if (37 === (EW = iW.charCodeAt(PW++))) {
              if (EW = iW.charAt(PW++), !(NW = KW[EW in nm ? iW.charAt(PW++) : EW]) || (mW = NW(WW, OW, mW)) < 0) return -1
            } else if (EW != OW.charCodeAt(mW++)) return -1
          }
          return mW
        }
        return sW.x = SW(OW, sW), sW.X = SW(mW, sW), sW.c = SW(iW, sW), MW.x = SW(OW, MW), MW.X = SW(mW, MW), MW.c = SW(iW, MW), {
          format: function(WW) {
            var iW = SW(WW += "", sW);
            return iW.toString = function() {
              return WW
            }, iW
          },
          parse: function(WW) {
            var iW = YW(WW += "", !1);
            return iW.toString = function() {
              return WW
            }, iW
          },
          utcFormat: function(WW) {
            var iW = SW(WW += "", MW);
            return iW.toString = function() {
              return WW
            }, iW
          },
          utcParse: function(WW) {
            var iW = YW(WW += "", !0);
            return iW.toString = function() {
              return WW
            }, iW
          }
        }
      }(WW), hm = Jm.format, Jm.parse, Hm = Jm.utcFormat, Jm.utcParse
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
    var UN = OW(7202),
      kN = OW(7059);

    function sN(WW) {
      for (var iW = WW.length, OW = new Array(iW); --iW >= 0;) OW[iW] = iW;
      return OW
    }

    function MN(WW, iW) {
      return WW[iW]
    }

    function KN(WW) {
      const iW = [];
      return iW.key = WW, iW
    }
    var SN = OW(7133),
      YN = OW.n(SN),
      yN = OW(7149),
      TN = OW.n(yN),
      JN = OW(6382),
      hN = OW.n(JN),
      HN = OW(6223),
      nN = OW.n(HN),
      uN = OW(6115),
      oN = OW.n(uN),
      dN = OW(6135),
      eN = OW.n(dN),
      vN = OW(7162),
      gN = OW.n(vN),
      DN = OW(6124),
      VN = OW.n(DN),
      pN = OW(7005),
      fN = OW.n(pN),
      CN = OW(7175),
      XN = OW.n(CN),
      BN = OW(6483),
      qN = OW.n(BN),
      RN = OW(7182),
      GN = OW.n(RN);

    function IN(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return aN(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(WW)) return Array.from(WW)
      }(WW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return aN(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return aN(WW, iW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aN(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }
    var rN = function(WW) {
        return WW
      },
      zN = {
        "@@functional/placeholder": !0
      },
      FN = function(WW) {
        return WW === zN
      },
      QN = function(WW) {
        return function iW() {
          return 0 === arguments.length || 1 === arguments.length && FN(arguments.length <= 0 ? void 0 : arguments[0]) ? iW : WW.apply(void 0, arguments)
        }
      },
      WP = function WW(iW, OW) {
        return 1 === iW ? OW : QN((function() {
          for (var mW = arguments.length, EW = new Array(mW), NW = 0; NW < mW; NW++) EW[NW] = arguments[NW];
          var PW = EW.filter((function(WW) {
            return WW !== zN
          })).length;
          return PW >= iW ? OW.apply(void 0, EW) : WW(iW - PW, QN((function() {
            for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
            var NW = EW.map((function(WW) {
              return FN(WW) ? iW.shift() : WW
            }));
            return OW.apply(void 0, IN(NW).concat(iW))
          })))
        }))
      },
      iP = function(WW) {
        return WP(WW.length, WW)
      },
      OP = function(WW, iW) {
        for (var OW = [], mW = WW; mW < iW; ++mW) OW[mW - WW] = mW;
        return OW
      },
      mP = iP((function(WW, iW) {
        return Array.isArray(iW) ? iW.map(WW) : Object.keys(iW).map((function(WW) {
          return iW[WW]
        })).map(WW)
      })),
      EP = function() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        if (!iW.length) return rN;
        var mW = iW.reverse(),
          EW = mW[0],
          NW = mW.slice(1);
        return function() {
          return NW.reduce((function(WW, iW) {
            return iW(WW)
          }), EW.apply(void 0, arguments))
        }
      },
      NP = function(WW) {
        return Array.isArray(WW) ? WW.reverse() : WW.split("").reverse.join("")
      },
      PP = function(WW) {
        var iW = null,
          OW = null;
        return function() {
          for (var mW = arguments.length, EW = new Array(mW), NW = 0; NW < mW; NW++) EW[NW] = arguments[NW];
          return iW && EW.every((function(WW, OW) {
            return WW === iW[OW]
          })) ? OW : (iW = EW, OW = WW.apply(void 0, EW))
        }
      };
    const LP = {
      rangeStep: function(WW, iW, OW) {
        for (var mW = new(GN())(WW), EW = 0, NW = []; mW.lt(iW) && EW < 1e5;) NW.push(mW.toNumber()), mW = mW.add(OW), EW++;
        return NW
      },
      getDigitCount: function(WW) {
        return 0 === WW ? 1 : Math.floor(new(GN())(WW).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: iP((function(WW, iW, OW) {
        var mW = +WW;
        return mW + OW * (+iW - mW)
      })),
      uninterpolateNumber: iP((function(WW, iW, OW) {
        var mW = iW - +WW;
        return (OW - WW) / (mW = mW || 1 / 0)
      })),
      uninterpolateTruncation: iP((function(WW, iW, OW) {
        var mW = iW - +WW;
        return mW = mW || 1 / 0, Math.max(0, Math.min(1, (OW - WW) / mW))
      }))
    };

    function cP(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return ZP(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(WW)) return Array.from(WW)
      }(WW) || tP(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wP(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(WW))) return;
        var OW = [],
          mW = !0,
          EW = !1,
          NW = void 0;
        try {
          for (var PW, LW = WW[Symbol.iterator](); !(mW = (PW = LW.next()).done) && (OW.push(PW.value), !iW || OW.length !== iW); mW = !0);
        } catch (cW) {
          EW = !0, NW = cW
        } finally {
          try {
            mW || null == LW.return || LW.return()
          } finally {
            if (EW) throw NW
          }
        }
        return OW
      }(WW, iW) || tP(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tP(WW, iW) {
      if (WW) {
        if ("string" === typeof WW) return ZP(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        return "Object" === OW && WW.constructor && (OW = WW.constructor.name), "Map" === OW || "Set" === OW ? Array.from(WW) : "Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW) ? ZP(WW, iW) : void 0
      }
    }

    function ZP(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function xP(WW) {
      var iW = wP(WW, 2),
        OW = iW[0],
        mW = iW[1],
        EW = OW,
        NW = mW;
      return OW > mW && (EW = mW, NW = OW), [EW, NW]
    }

    function lP(WW, iW, OW) {
      if (WW.lte(0)) return new(GN())(0);
      var mW = LP.getDigitCount(WW.toNumber()),
        EW = new(GN())(10).pow(mW),
        NW = WW.div(EW),
        PW = 1 !== mW ? .05 : .1,
        LW = new(GN())(Math.ceil(NW.div(PW).toNumber())).add(OW).mul(PW).mul(EW);
      return iW ? LW : new(GN())(Math.ceil(LW))
    }

    function AP(WW, iW, OW) {
      var mW = 1,
        EW = new(GN())(WW);
      if (!EW.isint() && OW) {
        var NW = Math.abs(WW);
        NW < 1 ? (mW = new(GN())(10).pow(LP.getDigitCount(WW) - 1), EW = new(GN())(Math.floor(EW.div(mW).toNumber())).mul(mW)) : NW > 1 && (EW = new(GN())(Math.floor(WW)))
      } else 0 === WW ? EW = new(GN())(Math.floor((iW - 1) / 2)) : OW || (EW = new(GN())(Math.floor(WW)));
      var PW = Math.floor((iW - 1) / 2);
      return EP(mP((function(WW) {
        return EW.add(new(GN())(WW - PW).mul(mW)).toNumber()
      })), OP)(0, iW)
    }

    function bP(WW, iW, OW, mW) {
      var EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((iW - WW) / (OW - 1))) return {
        step: new(GN())(0),
        tickMin: new(GN())(0),
        tickMax: new(GN())(0)
      };
      var NW, PW = lP(new(GN())(iW).sub(WW).div(OW - 1), mW, EW);
      NW = WW <= 0 && iW >= 0 ? new(GN())(0) : (NW = new(GN())(WW).add(iW).div(2)).sub(new(GN())(NW).mod(PW));
      var LW = Math.ceil(NW.sub(WW).div(PW).toNumber()),
        cW = Math.ceil(new(GN())(iW).sub(NW).div(PW).toNumber()),
        wW = LW + cW + 1;
      return wW > OW ? bP(WW, iW, OW, mW, EW + 1) : (wW < OW && (cW = iW > 0 ? cW + (OW - wW) : cW, LW = iW > 0 ? LW : LW + (OW - wW)), {
        step: PW,
        tickMin: NW.sub(new(GN())(LW).mul(PW)),
        tickMax: NW.add(new(GN())(cW).mul(PW))
      })
    }
    var jP = PP((function(WW) {
        var iW = wP(WW, 2),
          OW = iW[0],
          mW = iW[1],
          EW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          NW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          PW = Math.max(EW, 2),
          LW = wP(xP([OW, mW]), 2),
          cW = LW[0],
          wW = LW[1];
        if (cW === -1 / 0 || wW === 1 / 0) {
          var tW = wW === 1 / 0 ? [cW].concat(cP(OP(0, EW - 1).map((function() {
            return 1 / 0
          })))) : [].concat(cP(OP(0, EW - 1).map((function() {
            return -1 / 0
          }))), [wW]);
          return OW > mW ? NP(tW) : tW
        }
        if (cW === wW) return AP(cW, EW, NW);
        var ZW = bP(cW, wW, PW, NW),
          xW = ZW.step,
          lW = ZW.tickMin,
          AW = ZW.tickMax,
          bW = LP.rangeStep(lW, AW.add(new(GN())(.1).mul(xW)), xW);
        return OW > mW ? NP(bW) : bW
      })),
      UP = (PP((function(WW) {
        var iW = wP(WW, 2),
          OW = iW[0],
          mW = iW[1],
          EW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          NW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          PW = Math.max(EW, 2),
          LW = wP(xP([OW, mW]), 2),
          cW = LW[0],
          wW = LW[1];
        if (cW === -1 / 0 || wW === 1 / 0) return [OW, mW];
        if (cW === wW) return AP(cW, EW, NW);
        var tW = lP(new(GN())(wW).sub(cW).div(PW - 1), NW, 0),
          ZW = EP(mP((function(WW) {
            return new(GN())(cW).add(new(GN())(WW).mul(tW)).toNumber()
          })), OP)(0, PW).filter((function(WW) {
            return WW >= cW && WW <= wW
          }));
        return OW > mW ? NP(ZW) : ZW
      })), PP((function(WW, iW) {
        var OW = wP(WW, 2),
          mW = OW[0],
          EW = OW[1],
          NW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          PW = wP(xP([mW, EW]), 2),
          LW = PW[0],
          cW = PW[1];
        if (LW === -1 / 0 || cW === 1 / 0) return [mW, EW];
        if (LW === cW) return [LW];
        var wW = Math.max(iW, 2),
          tW = lP(new(GN())(cW).sub(LW).div(wW - 1), NW, 0),
          ZW = [].concat(cP(LP.rangeStep(new(GN())(LW), new(GN())(cW).sub(new(GN())(.99).mul(tW)), tW)), [cW]);
        return mW > EW ? NP(ZW) : ZW
      }))),
      kP = OW(7190),
      sP = OW(6107),
      MP = OW(6390),
      KP = OW(7196);

    function SP(WW) {
      return SP = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, SP(WW)
    }

    function YP(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return yP(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || function(WW, iW) {
        if (!WW) return;
        if ("string" === typeof WW) return yP(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        "Object" === OW && WW.constructor && (OW = WW.constructor.name);
        if ("Map" === OW || "Set" === OW) return Array.from(WW);
        if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return yP(WW, iW)
      }(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function yP(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function TP(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function JP(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? TP(Object(OW), !0).forEach((function(iW) {
          hP(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : TP(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function hP(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != SP(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != SP(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == SP(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function HP(WW, iW, OW) {
      return hN()(WW) || hN()(iW) ? OW : (0, sP.u)(iW) ? eN()(WW, iW, OW) : nN()(iW) ? iW(WW) : OW
    }

    function nP(WW, iW, OW, mW) {
      var EW = gN()(WW, (function(WW) {
        return HP(WW, iW)
      }));
      if ("number" === OW) {
        var NW = EW.filter((function(WW) {
          return (0, sP.v)(WW) || parseFloat(WW)
        }));
        return NW.length ? [TN()(NW), YN()(NW)] : [1 / 0, -1 / 0]
      }
      return (mW ? EW.filter((function(WW) {
        return !hN()(WW)
      })) : EW).map((function(WW) {
        return (0, sP.u)(WW) || WW instanceof Date ? WW : ""
      }))
    }
    var uP = function(WW) {
        var iW, OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          mW = arguments.length > 2 ? arguments[2] : void 0,
          EW = arguments.length > 3 ? arguments[3] : void 0,
          NW = -1,
          PW = null !== (iW = null === OW || void 0 === OW ? void 0 : OW.length) && void 0 !== iW ? iW : 0;
        if (PW <= 1) return 0;
        if (EW && "angleAxis" === EW.axisType && Math.abs(Math.abs(EW.range[1] - EW.range[0]) - 360) <= 1e-6)
          for (var LW = EW.range, cW = 0; cW < PW; cW++) {
            var wW = cW > 0 ? mW[cW - 1].coordinate : mW[PW - 1].coordinate,
              tW = mW[cW].coordinate,
              ZW = cW >= PW - 1 ? mW[0].coordinate : mW[cW + 1].coordinate,
              xW = void 0;
            if ((0, sP.y)(tW - wW) !== (0, sP.y)(ZW - tW)) {
              var lW = [];
              if ((0, sP.y)(ZW - tW) === (0, sP.y)(LW[1] - LW[0])) {
                xW = ZW;
                var AW = tW + LW[1] - LW[0];
                lW[0] = Math.min(AW, (AW + wW) / 2), lW[1] = Math.max(AW, (AW + wW) / 2)
              } else {
                xW = wW;
                var bW = ZW + LW[1] - LW[0];
                lW[0] = Math.min(tW, (bW + tW) / 2), lW[1] = Math.max(tW, (bW + tW) / 2)
              }
              var jW = [Math.min(tW, (xW + tW) / 2), Math.max(tW, (xW + tW) / 2)];
              if (WW > jW[0] && WW <= jW[1] || WW >= lW[0] && WW <= lW[1]) {
                NW = mW[cW].index;
                break
              }
            } else {
              var UW = Math.min(wW, ZW),
                kW = Math.max(wW, ZW);
              if (WW > (UW + tW) / 2 && WW <= (kW + tW) / 2) {
                NW = mW[cW].index;
                break
              }
            }
          } else
            for (var sW = 0; sW < PW; sW++)
              if (0 === sW && WW <= (OW[sW].coordinate + OW[sW + 1].coordinate) / 2 || sW > 0 && sW < PW - 1 && WW > (OW[sW].coordinate + OW[sW - 1].coordinate) / 2 && WW <= (OW[sW].coordinate + OW[sW + 1].coordinate) / 2 || sW === PW - 1 && WW > (OW[sW].coordinate + OW[sW - 1].coordinate) / 2) {
                NW = OW[sW].index;
                break
              } return NW
      },
      oP = function(WW) {
        var iW, OW, mW = WW.type.displayName,
          EW = null !== (iW = WW.type) && void 0 !== iW && iW.defaultProps ? JP(JP({}, WW.type.defaultProps), WW.props) : WW.props,
          NW = EW.stroke,
          PW = EW.fill;
        switch (mW) {
          case "Line":
            OW = NW;
            break;
          case "Area":
          case "Radar":
            OW = NW && "none" !== NW ? NW : PW;
            break;
          default:
            OW = PW
        }
        return OW
      },
      dP = function(WW) {
        var iW = WW.barSize,
          OW = WW.totalSize,
          mW = WW.stackGroups,
          EW = void 0 === mW ? {} : mW;
        if (!EW) return {};
        for (var NW = {}, PW = Object.keys(EW), LW = 0, cW = PW.length; LW < cW; LW++)
          for (var wW = EW[PW[LW]].stackGroups, tW = Object.keys(wW), ZW = 0, xW = tW.length; ZW < xW; ZW++) {
            var lW = wW[tW[ZW]],
              AW = lW.items,
              bW = lW.cateAxisId,
              jW = AW.filter((function(WW) {
                return (0, MP.p)(WW.type).indexOf("Bar") >= 0
              }));
            if (jW && jW.length) {
              var UW = jW[0].type.defaultProps,
                kW = void 0 !== UW ? JP(JP({}, UW), jW[0].props) : jW[0].props,
                sW = kW.barSize,
                MW = kW[bW];
              NW[MW] || (NW[MW] = []);
              var KW = hN()(sW) ? iW : sW;
              NW[MW].push({
                item: jW[0],
                stackList: jW.slice(1),
                barSize: hN()(KW) ? void 0 : (0, sP.m)(KW, OW, 0)
              })
            }
          }
        return NW
      },
      eP = function(WW) {
        var iW = WW.barGap,
          OW = WW.barCategoryGap,
          mW = WW.bandSize,
          EW = WW.sizeList,
          NW = void 0 === EW ? [] : EW,
          PW = WW.maxBarSize,
          LW = NW.length;
        if (LW < 1) return null;
        var cW, wW = (0, sP.m)(iW, mW, 0, !0),
          tW = [];
        if (NW[0].barSize === +NW[0].barSize) {
          var ZW = !1,
            xW = mW / LW,
            lW = NW.reduce((function(WW, iW) {
              return WW + iW.barSize || 0
            }), 0);
          (lW += (LW - 1) * wW) >= mW && (lW -= (LW - 1) * wW, wW = 0), lW >= mW && xW > 0 && (ZW = !0, lW = LW * (xW *= .9));
          var AW = {
            offset: ((mW - lW) / 2 | 0) - wW,
            size: 0
          };
          cW = NW.reduce((function(WW, iW) {
            var OW = {
                item: iW.item,
                position: {
                  offset: AW.offset + AW.size + wW,
                  size: ZW ? xW : iW.barSize
                }
              },
              mW = [].concat(YP(WW), [OW]);
            return AW = mW[mW.length - 1].position, iW.stackList && iW.stackList.length && iW.stackList.forEach((function(WW) {
              mW.push({
                item: WW,
                position: AW
              })
            })), mW
          }), tW)
        } else {
          var bW = (0, sP.m)(OW, mW, 0, !0);
          mW - 2 * bW - (LW - 1) * wW <= 0 && (wW = 0);
          var jW = (mW - 2 * bW - (LW - 1) * wW) / LW;
          jW > 1 && (jW >>= 0);
          var UW = PW === +PW ? Math.min(jW, PW) : jW;
          cW = NW.reduce((function(WW, iW, OW) {
            var mW = [].concat(YP(WW), [{
              item: iW.item,
              position: {
                offset: bW + (jW + wW) * OW + (jW - UW) / 2,
                size: UW
              }
            }]);
            return iW.stackList && iW.stackList.length && iW.stackList.forEach((function(WW) {
              mW.push({
                item: WW,
                position: mW[mW.length - 1].position
              })
            })), mW
          }), tW)
        }
        return cW
      },
      vP = function(WW, iW, OW, mW) {
        var EW = OW.children,
          NW = OW.width,
          PW = OW.margin,
          LW = NW - (PW.left || 0) - (PW.right || 0),
          cW = (0, KP.c)({
            children: EW,
            legendWidth: LW
          });
        if (cW) {
          var wW = mW || {},
            tW = wW.width,
            ZW = wW.height,
            xW = cW.align,
            lW = cW.verticalAlign,
            AW = cW.layout;
          if (("vertical" === AW || "horizontal" === AW && "middle" === lW) && "center" !== xW && (0, sP.v)(WW[xW])) return JP(JP({}, WW), {}, hP({}, xW, WW[xW] + (tW || 0)));
          if (("horizontal" === AW || "vertical" === AW && "center" === xW) && "middle" !== lW && (0, sP.v)(WW[lW])) return JP(JP({}, WW), {}, hP({}, lW, WW[lW] + (ZW || 0)))
        }
        return WW
      },
      gP = function(WW, iW, OW, mW, EW) {
        var NW = iW.props.children,
          PW = (0, MP.h)(NW, kP.b).filter((function(WW) {
            return function(WW, iW, OW) {
              return !!hN()(iW) || ("horizontal" === WW ? "yAxis" === iW : "vertical" === WW || "x" === OW ? "xAxis" === iW : "y" !== OW || "yAxis" === iW)
            }(mW, EW, WW.props.direction)
          }));
        if (PW && PW.length) {
          var LW = PW.map((function(WW) {
            return WW.props.dataKey
          }));
          return WW.reduce((function(WW, iW) {
            var mW = HP(iW, OW);
            if (hN()(mW)) return WW;
            var EW = Array.isArray(mW) ? [TN()(mW), YN()(mW)] : [mW, mW],
              NW = LW.reduce((function(WW, OW) {
                var mW = HP(iW, OW, 0),
                  NW = EW[0] - Math.abs(Array.isArray(mW) ? mW[0] : mW),
                  PW = EW[1] + Math.abs(Array.isArray(mW) ? mW[1] : mW);
                return [Math.min(NW, WW[0]), Math.max(PW, WW[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(NW[0], WW[0]), Math.max(NW[1], WW[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      DP = function(WW, iW, OW, mW, EW) {
        var NW = iW.map((function(iW) {
          return gP(WW, iW, OW, EW, mW)
        })).filter((function(WW) {
          return !hN()(WW)
        }));
        return NW && NW.length ? NW.reduce((function(WW, iW) {
          return [Math.min(WW[0], iW[0]), Math.max(WW[1], iW[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      VP = function(WW, iW, OW, mW, EW) {
        var NW = iW.map((function(iW) {
          var NW = iW.props.dataKey;
          return "number" === OW && NW && gP(WW, iW, NW, mW) || nP(WW, NW, OW, EW)
        }));
        if ("number" === OW) return NW.reduce((function(WW, iW) {
          return [Math.min(WW[0], iW[0]), Math.max(WW[1], iW[1])]
        }), [1 / 0, -1 / 0]);
        var PW = {};
        return NW.reduce((function(WW, iW) {
          for (var OW = 0, mW = iW.length; OW < mW; OW++) PW[iW[OW]] || (PW[iW[OW]] = !0, WW.push(iW[OW]));
          return WW
        }), [])
      },
      pP = function(WW, iW) {
        return "horizontal" === WW && "xAxis" === iW || "vertical" === WW && "yAxis" === iW || "centric" === WW && "angleAxis" === iW || "radial" === WW && "radiusAxis" === iW
      },
      fP = function(WW, iW, OW, mW) {
        if (mW) return WW.map((function(WW) {
          return WW.coordinate
        }));
        var EW, NW, PW = WW.map((function(WW) {
          return WW.coordinate === iW && (EW = !0), WW.coordinate === OW && (NW = !0), WW.coordinate
        }));
        return EW || PW.push(iW), NW || PW.push(OW), PW
      },
      CP = function(WW, iW, OW) {
        if (!WW) return null;
        var mW = WW.scale,
          EW = WW.duplicateDomain,
          NW = WW.type,
          PW = WW.range,
          LW = "scaleBand" === WW.realScaleType ? mW.bandwidth() / 2 : 2,
          cW = (iW || OW) && "category" === NW && mW.bandwidth ? mW.bandwidth() / LW : 0;
        return cW = "angleAxis" === WW.axisType && (null === PW || void 0 === PW ? void 0 : PW.length) >= 2 ? 2 * (0, sP.y)(PW[0] - PW[1]) * cW : cW, iW && (WW.ticks || WW.niceTicks) ? (WW.ticks || WW.niceTicks).map((function(WW) {
          var iW = EW ? EW.indexOf(WW) : WW;
          return {
            coordinate: mW(iW) + cW,
            value: WW,
            offset: cW
          }
        })).filter((function(WW) {
          return !VN()(WW.coordinate)
        })) : WW.isCategorical && WW.categoricalDomain ? WW.categoricalDomain.map((function(WW, iW) {
          return {
            coordinate: mW(WW) + cW,
            value: WW,
            index: iW,
            offset: cW
          }
        })) : mW.ticks && !OW ? mW.ticks(WW.tickCount).map((function(WW) {
          return {
            coordinate: mW(WW) + cW,
            value: WW,
            offset: cW
          }
        })) : mW.domain().map((function(WW, iW) {
          return {
            coordinate: mW(WW) + cW,
            value: EW ? EW[WW] : WW,
            index: iW,
            offset: cW
          }
        }))
      },
      XP = new WeakMap,
      BP = function(WW, iW) {
        if ("function" !== typeof iW) return WW;
        XP.has(WW) || XP.set(WW, new WeakMap);
        var OW = XP.get(WW);
        if (OW.has(iW)) return OW.get(iW);
        var mW = function() {
          WW.apply(void 0, arguments), iW.apply(void 0, arguments)
        };
        return OW.set(iW, mW), mW
      },
      qP = function(WW, iW, OW) {
        var NW = WW.scale,
          PW = WW.type,
          LW = WW.layout,
          cW = WW.axisType;
        if ("auto" === NW) return "radial" === LW && "radiusAxis" === cW ? {
          scale: EW.e(),
          realScaleType: "band"
        } : "radial" === LW && "angleAxis" === cW ? {
          scale: ri(),
          realScaleType: "linear"
        } : "category" === PW && iW && (iW.indexOf("LineChart") >= 0 || iW.indexOf("AreaChart") >= 0 || iW.indexOf("ComposedChart") >= 0 && !OW) ? {
          scale: EW.g(),
          realScaleType: "point"
        } : "category" === PW ? {
          scale: EW.e(),
          realScaleType: "band"
        } : {
          scale: ri(),
          realScaleType: "linear"
        };
        if (oN()(NW)) {
          var wW = "scale".concat(fN()(NW));
          return {
            scale: (mW[wW] || EW.g)(),
            realScaleType: mW[wW] ? wW : "point"
          }
        }
        return nN()(NW) ? {
          scale: NW
        } : {
          scale: EW.g(),
          realScaleType: "point"
        }
      },
      RP = 1e-4,
      GP = function(WW) {
        var iW = WW.domain();
        if (iW && !(iW.length <= 2)) {
          var OW = iW.length,
            mW = WW.range(),
            EW = Math.min(mW[0], mW[1]) - RP,
            NW = Math.max(mW[0], mW[1]) + RP,
            PW = WW(iW[0]),
            LW = WW(iW[OW - 1]);
          (PW < EW || PW > NW || LW < EW || LW > NW) && WW.domain([iW[0], iW[OW - 1]])
        }
      },
      IP = function(WW, iW) {
        if (!WW) return null;
        for (var OW = 0, mW = WW.length; OW < mW; OW++)
          if (WW[OW].item === iW) return WW[OW].position;
        return null
      },
      aP = function(WW, iW) {
        if (!iW || 2 !== iW.length || !(0, sP.v)(iW[0]) || !(0, sP.v)(iW[1])) return WW;
        var OW = Math.min(iW[0], iW[1]),
          mW = Math.max(iW[0], iW[1]),
          EW = [WW[0], WW[1]];
        return (!(0, sP.v)(WW[0]) || WW[0] < OW) && (EW[0] = OW), (!(0, sP.v)(WW[1]) || WW[1] > mW) && (EW[1] = mW), EW[0] > mW && (EW[0] = mW), EW[1] < OW && (EW[1] = OW), EW
      },
      rP = {
        sign: function(WW) {
          var iW = WW.length;
          if (!(iW <= 0))
            for (var OW = 0, mW = WW[0].length; OW < mW; ++OW)
              for (var EW = 0, NW = 0, PW = 0; PW < iW; ++PW) {
                var LW = VN()(WW[PW][OW][1]) ? WW[PW][OW][0] : WW[PW][OW][1];
                LW >= 0 ? (WW[PW][OW][0] = EW, WW[PW][OW][1] = EW + LW, EW = WW[PW][OW][1]) : (WW[PW][OW][0] = NW, WW[PW][OW][1] = NW + LW, NW = WW[PW][OW][1])
              }
        },
        expand: function(WW, iW) {
          if ((mW = WW.length) > 0) {
            for (var OW, mW, EW, NW = 0, PW = WW[0].length; NW < PW; ++NW) {
              for (EW = OW = 0; OW < mW; ++OW) EW += WW[OW][NW][1] || 0;
              if (EW)
                for (OW = 0; OW < mW; ++OW) WW[OW][NW][1] /= EW
            }
            jN(WW, iW)
          }
        },
        none: jN,
        silhouette: function(WW, iW) {
          if ((OW = WW.length) > 0) {
            for (var OW, mW = 0, EW = WW[iW[0]], NW = EW.length; mW < NW; ++mW) {
              for (var PW = 0, LW = 0; PW < OW; ++PW) LW += WW[PW][mW][1] || 0;
              EW[mW][1] += EW[mW][0] = -LW / 2
            }
            jN(WW, iW)
          }
        },
        wiggle: function(WW, iW) {
          if ((EW = WW.length) > 0 && (mW = (OW = WW[iW[0]]).length) > 0) {
            for (var OW, mW, EW, NW = 0, PW = 1; PW < mW; ++PW) {
              for (var LW = 0, cW = 0, wW = 0; LW < EW; ++LW) {
                for (var tW = WW[iW[LW]], ZW = tW[PW][1] || 0, xW = (ZW - (tW[PW - 1][1] || 0)) / 2, lW = 0; lW < LW; ++lW) {
                  var AW = WW[iW[lW]];
                  xW += (AW[PW][1] || 0) - (AW[PW - 1][1] || 0)
                }
                cW += ZW, wW += xW * ZW
              }
              OW[PW - 1][1] += OW[PW - 1][0] = NW, cW && (NW -= wW / cW)
            }
            OW[PW - 1][1] += OW[PW - 1][0] = NW, jN(WW, iW)
          }
        },
        positive: function(WW) {
          var iW = WW.length;
          if (!(iW <= 0))
            for (var OW = 0, mW = WW[0].length; OW < mW; ++OW)
              for (var EW = 0, NW = 0; NW < iW; ++NW) {
                var PW = VN()(WW[NW][OW][1]) ? WW[NW][OW][0] : WW[NW][OW][1];
                PW >= 0 ? (WW[NW][OW][0] = EW, WW[NW][OW][1] = EW + PW, EW = WW[NW][OW][1]) : (WW[NW][OW][0] = 0, WW[NW][OW][1] = 0)
              }
        }
      },
      zP = function(WW, iW, OW) {
        var mW = iW.map((function(WW) {
            return WW.props.dataKey
          })),
          EW = rP[OW],
          NW = function() {
            var WW = (0, kN.d)([]),
              iW = sN,
              OW = jN,
              mW = MN;

            function EW(EW) {
              var NW, PW, LW = Array.from(WW.apply(this, arguments), KN),
                cW = LW.length,
                wW = -1;
              for (const WW of EW)
                for (NW = 0, ++wW; NW < cW; ++NW)(LW[NW][wW] = [0, +mW(WW, LW[NW].key, wW, EW)]).data = WW;
              for (NW = 0, PW = (0, UN.e)(iW(LW)); NW < cW; ++NW) LW[PW[NW]].index = NW;
              return OW(LW, PW), LW
            }
            return EW.keys = function(iW) {
              return arguments.length ? (WW = "function" === typeof iW ? iW : (0, kN.d)(Array.from(iW)), EW) : WW
            }, EW.value = function(WW) {
              return arguments.length ? (mW = "function" === typeof WW ? WW : (0, kN.d)(+WW), EW) : mW
            }, EW.order = function(WW) {
              return arguments.length ? (iW = null == WW ? sN : "function" === typeof WW ? WW : (0, kN.d)(Array.from(WW)), EW) : iW
            }, EW.offset = function(WW) {
              return arguments.length ? (OW = null == WW ? jN : WW, EW) : OW
            }, EW
          }().keys(mW).value((function(WW, iW) {
            return +HP(WW, iW, 0)
          })).order(sN).offset(EW);
        return NW(WW)
      },
      FP = function(WW, iW, OW, mW, EW, NW) {
        if (!WW) return null;
        var PW = (NW ? iW.reverse() : iW).reduce((function(WW, iW) {
          var EW, NW = null !== (EW = iW.type) && void 0 !== EW && EW.defaultProps ? JP(JP({}, iW.type.defaultProps), iW.props) : iW.props,
            PW = NW.stackId;
          if (NW.hide) return WW;
          var LW = NW[OW],
            cW = WW[LW] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, sP.u)(PW)) {
            var wW = cW.stackGroups[PW] || {
              numericAxisId: OW,
              cateAxisId: mW,
              items: []
            };
            wW.items.push(iW), cW.hasStack = !0, cW.stackGroups[PW] = wW
          } else cW.stackGroups[(0, sP.B)("_stackId_")] = {
            numericAxisId: OW,
            cateAxisId: mW,
            items: [iW]
          };
          return JP(JP({}, WW), {}, hP({}, LW, cW))
        }), {});
        return Object.keys(PW).reduce((function(iW, NW) {
          var LW = PW[NW];
          if (LW.hasStack) {
            LW.stackGroups = Object.keys(LW.stackGroups).reduce((function(iW, NW) {
              var PW = LW.stackGroups[NW];
              return JP(JP({}, iW), {}, hP({}, NW, {
                numericAxisId: OW,
                cateAxisId: mW,
                items: PW.items,
                stackedData: zP(WW, PW.items, EW)
              }))
            }), {})
          }
          return JP(JP({}, iW), {}, hP({}, NW, LW))
        }), {})
      },
      QP = function(WW, iW) {
        var OW = iW.realScaleType,
          mW = iW.type,
          EW = iW.tickCount,
          NW = iW.originalDomain,
          PW = iW.allowDecimals,
          LW = OW || iW.scale;
        if ("auto" !== LW && "linear" !== LW) return null;
        if (EW && "number" === mW && NW && ("auto" === NW[0] || "auto" === NW[1])) {
          var cW = WW.domain();
          if (!cW.length) return null;
          var wW = jP(cW, EW, PW);
          return WW.domain([TN()(wW), YN()(wW)]), {
            niceTicks: wW
          }
        }
        if (EW && "number" === mW) {
          var tW = WW.domain();
          return {
            niceTicks: UP(tW, EW, PW)
          }
        }
        return null
      };

    function WL(WW) {
      var iW = WW.axis,
        OW = WW.ticks,
        mW = WW.bandSize,
        EW = WW.entry,
        NW = WW.index,
        PW = WW.dataKey;
      if ("category" === iW.type) {
        if (!iW.allowDuplicatedCategory && iW.dataKey && !hN()(EW[iW.dataKey])) {
          var LW = (0, sP.f)(OW, "value", EW[iW.dataKey]);
          if (LW) return LW.coordinate + mW / 2
        }
        return OW[NW] ? OW[NW].coordinate + mW / 2 : null
      }
      var cW = HP(EW, hN()(PW) ? iW.dataKey : PW);
      return hN()(cW) ? null : iW.scale(cW)
    }
    var iL = function(WW) {
        var iW = WW.axis,
          OW = WW.ticks,
          mW = WW.offset,
          EW = WW.bandSize,
          NW = WW.entry,
          PW = WW.index;
        if ("category" === iW.type) return OW[PW] ? OW[PW].coordinate + mW : null;
        var LW = HP(NW, iW.dataKey, iW.domain[PW]);
        return hN()(LW) ? null : iW.scale(LW) - EW / 2 + mW
      },
      OL = function(WW) {
        var iW = WW.numericAxis,
          OW = iW.scale.domain();
        if ("number" === iW.type) {
          var mW = Math.min(OW[0], OW[1]),
            EW = Math.max(OW[0], OW[1]);
          return mW <= 0 && EW >= 0 ? 0 : EW < 0 ? EW : mW
        }
        return OW[0]
      },
      mL = function(WW, iW) {
        var OW, mW = (null !== (OW = WW.type) && void 0 !== OW && OW.defaultProps ? JP(JP({}, WW.type.defaultProps), WW.props) : WW.props).stackId;
        if ((0, sP.u)(mW)) {
          var EW = iW[mW];
          if (EW) {
            var NW = EW.items.indexOf(WW);
            return NW >= 0 ? EW.stackedData[NW] : null
          }
        }
        return null
      },
      EL = function(WW, iW, OW) {
        return Object.keys(WW).reduce((function(mW, EW) {
          var NW = WW[EW].stackedData.reduce((function(WW, mW) {
            var EW = mW.slice(iW, OW + 1).reduce((function(WW, iW) {
              return [TN()(iW.concat([WW[0]]).filter(sP.v)), YN()(iW.concat([WW[1]]).filter(sP.v))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(WW[0], EW[0]), Math.max(WW[1], EW[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(NW[0], mW[0]), Math.max(NW[1], mW[1])]
        }), [1 / 0, -1 / 0]).map((function(WW) {
          return WW === 1 / 0 || WW === -1 / 0 ? 0 : WW
        }))
      },
      NL = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      PL = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      LL = function(WW, iW, OW) {
        if (nN()(WW)) return WW(iW, OW);
        if (!Array.isArray(WW)) return iW;
        var mW = [];
        if ((0, sP.v)(WW[0])) mW[0] = OW ? WW[0] : Math.min(WW[0], iW[0]);
        else if (NL.test(WW[0])) {
          var EW = +NL.exec(WW[0])[1];
          mW[0] = iW[0] - EW
        } else nN()(WW[0]) ? mW[0] = WW[0](iW[0]) : mW[0] = iW[0];
        if ((0, sP.v)(WW[1])) mW[1] = OW ? WW[1] : Math.max(WW[1], iW[1]);
        else if (PL.test(WW[1])) {
          var NW = +PL.exec(WW[1])[1];
          mW[1] = iW[1] + NW
        } else nN()(WW[1]) ? mW[1] = WW[1](iW[1]) : mW[1] = iW[1];
        return mW
      },
      cL = function(WW, iW, OW) {
        if (WW && WW.scale && WW.scale.bandwidth) {
          var mW = WW.scale.bandwidth();
          if (!OW || mW > 0) return mW
        }
        if (WW && iW && iW.length >= 2) {
          for (var EW = qN()(iW, (function(WW) {
              return WW.coordinate
            })), NW = 1 / 0, PW = 1, LW = EW.length; PW < LW; PW++) {
            var cW = EW[PW],
              wW = EW[PW - 1];
            NW = Math.min((cW.coordinate || 0) - (wW.coordinate || 0), NW)
          }
          return NW === 1 / 0 ? 0 : NW
        }
        return OW ? void 0 : 0
      },
      wL = function(WW, iW, OW) {
        return WW && WW.length ? XN()(WW, eN()(OW, "type.defaultProps.domain")) ? iW : WW : iW
      },
      tL = function(WW, iW) {
        var OW = WW.type.defaultProps ? JP(JP({}, WW.type.defaultProps), WW.props) : WW.props,
          mW = OW.dataKey,
          EW = OW.name,
          NW = OW.unit,
          PW = OW.formatter,
          LW = OW.tooltipType,
          cW = OW.chartType,
          wW = OW.hide;
        return JP(JP({}, (0, MP.e)(WW, !1)), {}, {
          dataKey: mW,
          unit: NW,
          formatter: PW,
          name: EW || mW,
          color: oP(WW),
          value: HP(iW, mW),
          type: LW,
          payload: iW,
          chartType: cW,
          hide: wW
        })
      }
  },
  7098: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => xW,
      g: () => ZW
    });
    var mW = OW(6940);

    function EW(WW) {
      return EW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, EW(WW)
    }

    function NW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function PW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? NW(Object(OW), !0).forEach((function(iW) {
          LW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : NW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function LW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != EW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != EW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == EW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }
    var cW = {
        widthCache: {},
        cacheCount: 0
      },
      wW = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      tW = "recharts_measurement_span";
    var ZW = function(WW) {
        var iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === WW || null === WW || mW.d.isSsr) return {
          width: 0,
          height: 0
        };
        var OW = function(WW) {
            var iW = PW({}, WW);
            return Object.keys(iW).forEach((function(WW) {
              iW[WW] || delete iW[WW]
            })), iW
          }(iW),
          EW = JSON.stringify({
            text: WW,
            copyStyle: OW
          });
        if (cW.widthCache[EW]) return cW.widthCache[EW];
        try {
          var NW = document.getElementById(tW);
          NW || ((NW = document.createElement("span")).setAttribute("id", tW), NW.setAttribute("aria-hidden", "true"), document.body.appendChild(NW));
          var LW = PW(PW({}, wW), OW);
          Object.assign(NW.style, LW), NW.textContent = "".concat(WW);
          var ZW = NW.getBoundingClientRect(),
            xW = {
              width: ZW.width,
              height: ZW.height
            };
          return cW.widthCache[EW] = xW, ++cW.cacheCount > 2e3 && (cW.cacheCount = 0, cW.widthCache = {}), xW
        } catch (lW) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      xW = function(WW) {
        return {
          top: WW.top + window.scrollY - document.documentElement.clientTop,
          left: WW.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  6107: (WW, iW, OW) => {
    OW.d(iW, {
      B: () => sW,
      d: () => JW,
      f: () => yW,
      i: () => KW,
      l: () => TW,
      m: () => MW,
      n: () => SW,
      o: () => YW,
      q: () => jW,
      u: () => UW,
      v: () => bW,
      w: () => AW,
      y: () => lW
    });
    var mW = OW(6115),
      EW = OW.n(mW),
      NW = OW(6124),
      PW = OW.n(NW),
      LW = OW(6135),
      cW = OW.n(LW),
      wW = OW(6133),
      tW = OW.n(wW),
      ZW = OW(6382),
      xW = OW.n(ZW),
      lW = function(WW) {
        return 0 === WW ? 0 : WW > 0 ? 1 : -1
      },
      AW = function(WW) {
        return EW()(WW) && WW.indexOf("%") === WW.length - 1
      },
      bW = function(WW) {
        return tW()(WW) && !PW()(WW)
      },
      jW = function(WW) {
        return xW()(WW)
      },
      UW = function(WW) {
        return bW(WW) || EW()(WW)
      },
      kW = 0,
      sW = function(WW) {
        var iW = ++kW;
        return "".concat(WW || "").concat(iW)
      },
      MW = function(WW, iW) {
        var OW, mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          NW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!bW(WW) && !EW()(WW)) return mW;
        if (AW(WW)) {
          var LW = WW.indexOf("%");
          OW = iW * parseFloat(WW.slice(0, LW)) / 100
        } else OW = +WW;
        return PW()(OW) && (OW = mW), NW && OW > iW && (OW = iW), OW
      },
      KW = function(WW) {
        if (!WW) return null;
        var iW = Object.keys(WW);
        return iW && iW.length ? WW[iW[0]] : null
      },
      SW = function(WW) {
        if (!Array.isArray(WW)) return !1;
        for (var iW = WW.length, OW = {}, mW = 0; mW < iW; mW++) {
          if (OW[WW[mW]]) return !0;
          OW[WW[mW]] = !0
        }
        return !1
      },
      YW = function(WW, iW) {
        return bW(WW) && bW(iW) ? function(OW) {
          return WW + OW * (iW - WW)
        } : function() {
          return iW
        }
      };

    function yW(WW, iW, OW) {
      return WW && WW.length ? WW.find((function(WW) {
        return WW && ("function" === typeof iW ? iW(WW) : cW()(WW, iW)) === OW
      })) : null
    }
    var TW = function(WW) {
        if (!WW || !WW.length) return null;
        for (var iW = WW.length, OW = 0, mW = 0, EW = 0, NW = 0, PW = 1 / 0, LW = -1 / 0, cW = 0, wW = 0, tW = 0; tW < iW; tW++) OW += cW = WW[tW].cx || 0, mW += wW = WW[tW].cy || 0, EW += cW * wW, NW += cW * cW, PW = Math.min(PW, cW), LW = Math.max(LW, cW);
        var ZW = iW * NW !== OW * OW ? (iW * EW - OW * mW) / (iW * NW - OW * OW) : 0;
        return {
          xmin: PW,
          xmax: LW,
          a: ZW,
          b: (mW - ZW * OW) / iW
        }
      },
      JW = function(WW, iW) {
        return bW(WW) && bW(iW) ? WW - iW : EW()(WW) && EW()(iW) ? WW.localeCompare(iW) : WW instanceof Date && iW instanceof Date ? WW.getTime() - iW.getTime() : String(WW).localeCompare(String(iW))
      }
  },
  6940: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW
    });
    var mW = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(WW) {
        return mW[WW]
      },
      set: function(WW, iW) {
        if ("string" === typeof WW) mW[WW] = iW;
        else {
          var OW = Object.keys(WW);
          OW && OW.length && OW.forEach((function(iW) {
            mW[iW] = WW[iW]
          }))
        }
      }
    }
  },
  7214: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW
    });
    var mW = function(WW, iW) {
      var OW = WW.alwaysShow,
        mW = WW.ifOverflow;
      return OW && (mW = "extendDomain"), mW === iW
    }
  },
  6386: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW
    });
    var mW = function(WW, iW) {
      for (var OW = arguments.length, mW = new Array(OW > 2 ? OW - 2 : 0), EW = 2; EW < OW; EW++) mW[EW - 2] = arguments[EW]
    }
  },
  7211: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LW,
      f: () => xW,
      i: () => wW
    });
    OW(6382), OW(62), OW(6223);

    function mW(WW) {
      return mW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, mW(WW)
    }

    function EW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function NW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? EW(Object(OW), !0).forEach((function(iW) {
          PW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : EW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function PW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != mW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var EW = OW.call(WW, iW || "default");
            if ("object" != mW(EW)) return EW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == mW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }
    var LW = Math.PI / 180,
      cW = function(WW) {
        return 180 * WW / Math.PI
      },
      wW = function(WW, iW, OW, mW) {
        return {
          x: WW + Math.cos(-LW * mW) * OW,
          y: iW + Math.sin(-LW * mW) * OW
        }
      },
      tW = function(WW, iW) {
        var OW = WW.x,
          mW = WW.y,
          EW = iW.cx,
          NW = iW.cy,
          PW = function(WW, iW) {
            var OW = WW.x,
              mW = WW.y,
              EW = iW.x,
              NW = iW.y;
            return Math.sqrt(Math.pow(OW - EW, 2) + Math.pow(mW - NW, 2))
          }({
            x: OW,
            y: mW
          }, {
            x: EW,
            y: NW
          });
        if (PW <= 0) return {
          radius: PW
        };
        var LW = (OW - EW) / PW,
          wW = Math.acos(LW);
        return mW > NW && (wW = 2 * Math.PI - wW), {
          radius: PW,
          angle: cW(wW),
          angleInRadian: wW
        }
      },
      ZW = function(WW, iW) {
        var OW = iW.startAngle,
          mW = iW.endAngle,
          EW = Math.floor(OW / 360),
          NW = Math.floor(mW / 360);
        return WW + 360 * Math.min(EW, NW)
      },
      xW = function(WW, iW) {
        var OW = WW.x,
          mW = WW.y,
          EW = tW({
            x: OW,
            y: mW
          }, iW),
          PW = EW.radius,
          LW = EW.angle,
          cW = iW.innerRadius,
          wW = iW.outerRadius;
        if (PW < cW || PW > wW) return !1;
        if (0 === PW) return !0;
        var xW, lW = function(WW) {
            var iW = WW.startAngle,
              OW = WW.endAngle,
              mW = Math.floor(iW / 360),
              EW = Math.floor(OW / 360),
              NW = Math.min(mW, EW);
            return {
              startAngle: iW - 360 * NW,
              endAngle: OW - 360 * NW
            }
          }(iW),
          AW = lW.startAngle,
          bW = lW.endAngle,
          jW = LW;
        if (AW <= bW) {
          for (; jW > bW;) jW -= 360;
          for (; jW < AW;) jW += 360;
          xW = jW >= AW && jW <= bW
        } else {
          for (; jW > AW;) jW -= 360;
          for (; jW < bW;) jW += 360;
          xW = jW >= bW && jW <= AW
        }
        return xW ? NW(NW({}, iW), {}, {
          radius: PW,
          angle: ZW(jW, iW)
        }) : null
      }
  },
  6390: (WW, iW, OW) => {
    OW.d(iW, {
      B: () => pW,
      C: () => DW,
      D: () => nW,
      e: () => eW,
      h: () => hW,
      l: () => HW,
      p: () => YW,
      r: () => VW,
      v: () => dW,
      z: () => vW
    });
    var mW = OW(6135),
      EW = OW.n(mW),
      NW = OW(6382),
      PW = OW.n(NW),
      LW = OW(6115),
      cW = OW.n(LW),
      wW = OW(6223),
      tW = OW.n(wW),
      ZW = OW(6034),
      xW = OW.n(ZW),
      lW = OW(62),
      AW = OW(6398),
      bW = OW(6107),
      jW = OW(6408),
      UW = OW(6415),
      kW = ["children"],
      sW = ["children"];

    function MW(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, mW)) {
            if (iW.indexOf(mW) >= 0) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }

    function KW(WW) {
      return KW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, KW(WW)
    }
    var SW = {
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
      YW = function(WW) {
        return "string" === typeof WW ? WW : WW ? WW.displayName || WW.name || "Component" : ""
      },
      yW = null,
      TW = null,
      JW = function WW(iW) {
        if (iW === yW && Array.isArray(TW)) return TW;
        var OW = [];
        return lW.Children.forEach(iW, (function(iW) {
          PW()(iW) || ((0, AW.isFragment)(iW) ? OW = OW.concat(WW(iW.props.children)) : OW.push(iW))
        })), TW = OW, yW = iW, OW
      };

    function hW(WW, iW) {
      var OW = [],
        mW = [];
      return mW = Array.isArray(iW) ? iW.map((function(WW) {
        return YW(WW)
      })) : [YW(iW)], JW(WW).forEach((function(WW) {
        var iW = EW()(WW, "type.displayName") || EW()(WW, "type.name"); - 1 !== mW.indexOf(iW) && OW.push(WW)
      })), OW
    }

    function HW(WW, iW) {
      var OW = hW(WW, iW);
      return OW && OW[0]
    }
    var nW = function(WW) {
        if (!WW || !WW.props) return !1;
        var iW = WW.props,
          OW = iW.width,
          mW = iW.height;
        return !(!(0, bW.v)(OW) || OW <= 0 || !(0, bW.v)(mW) || mW <= 0)
      },
      uW = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      oW = function(WW) {
        return WW && WW.type && cW()(WW.type) && uW.indexOf(WW.type) >= 0
      },
      dW = function(WW) {
        return WW && "object" === KW(WW) && "clipDot" in WW
      },
      eW = function(WW, iW, OW) {
        if (!WW || "function" === typeof WW || "boolean" === typeof WW) return null;
        var mW = WW;
        if ((0, lW.isValidElement)(WW) && (mW = WW.props), !xW()(mW)) return null;
        var EW = {};
        return Object.keys(mW).forEach((function(WW) {
          var NW;
          (function(WW, iW, OW, mW) {
            var EW, NW = null !== (EW = null === UW.g || void 0 === UW.g ? void 0 : UW.g[mW]) && void 0 !== EW ? EW : [];
            return iW.startsWith("data-") || !tW()(WW) && (mW && NW.includes(iW) || UW.h.includes(iW)) || OW && UW.e.includes(iW)
          })(null === (NW = mW) || void 0 === NW ? void 0 : NW[WW], WW, iW, OW) && (EW[WW] = mW[WW])
        })), EW
      },
      vW = function WW(iW, OW) {
        if (iW === OW) return !0;
        var mW = lW.Children.count(iW);
        if (mW !== lW.Children.count(OW)) return !1;
        if (0 === mW) return !0;
        if (1 === mW) return gW(Array.isArray(iW) ? iW[0] : iW, Array.isArray(OW) ? OW[0] : OW);
        for (var EW = 0; EW < mW; EW++) {
          var NW = iW[EW],
            PW = OW[EW];
          if (Array.isArray(NW) || Array.isArray(PW)) {
            if (!WW(NW, PW)) return !1
          } else if (!gW(NW, PW)) return !1
        }
        return !0
      },
      gW = function(WW, iW) {
        if (PW()(WW) && PW()(iW)) return !0;
        if (!PW()(WW) && !PW()(iW)) {
          var OW = WW.props || {},
            mW = OW.children,
            EW = MW(OW, kW),
            NW = iW.props || {},
            LW = NW.children,
            cW = MW(NW, sW);
          return mW && LW ? (0, jW.e)(EW, cW) && vW(mW, LW) : !mW && !LW && (0, jW.e)(EW, cW)
        }
        return !1
      },
      DW = function(WW, iW) {
        var OW = [],
          mW = {};
        return JW(WW).forEach((function(WW, EW) {
          if (oW(WW)) OW.push(WW);
          else if (WW) {
            var NW = YW(WW.type),
              PW = iW[NW] || {},
              LW = PW.handler,
              cW = PW.once;
            if (LW && (!cW || !mW[NW])) {
              var wW = LW(WW, NW, EW);
              OW.push(wW), mW[NW] = !0
            }
          }
        })), OW
      },
      VW = function(WW) {
        var iW = WW && WW.type;
        return iW && SW[iW] ? SW[iW] : null
      },
      pW = function(WW, iW) {
        return JW(iW).indexOf(WW)
      }
  },
  6408: (WW, iW, OW) => {
    function mW(WW, iW) {
      for (var OW in WW)
        if ({}.hasOwnProperty.call(WW, OW) && (!{}.hasOwnProperty.call(iW, OW) || WW[OW] !== iW[OW])) return !1;
      for (var mW in iW)
        if ({}.hasOwnProperty.call(iW, mW) && !{}.hasOwnProperty.call(WW, mW)) return !1;
      return !0
    }
    OW.d(iW, {
      e: () => mW
    })
  },
  7196: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW
    });
    var mW = OW(6992),
      EW = OW(7101),
      NW = OW(6390);

    function PW(WW) {
      return PW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, PW(WW)
    }

    function LW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function cW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? LW(Object(OW), !0).forEach((function(iW) {
          wW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : LW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function wW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != PW(WW) || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != PW(mW)) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == PW(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }
    var tW = function(WW) {
      var iW = WW.children,
        OW = WW.formattedGraphicalItems,
        PW = WW.legendWidth,
        LW = WW.legendContent,
        wW = (0, NW.l)(iW, mW.c);
      if (!wW) return null;
      var tW, ZW = mW.c.defaultProps,
        xW = void 0 !== ZW ? cW(cW({}, ZW), wW.props) : {};
      return tW = wW.props && wW.props.payload ? wW.props && wW.props.payload : "children" === LW ? (OW || []).reduce((function(WW, iW) {
        var OW = iW.item,
          mW = iW.props,
          EW = mW.sectors || mW.data || [];
        return WW.concat(EW.map((function(WW) {
          return {
            type: wW.props.iconType || OW.props.legendType,
            value: WW.name,
            color: WW.fill,
            payload: WW
          }
        })))
      }), []) : (OW || []).map((function(WW) {
        var iW = WW.item,
          OW = iW.type.defaultProps,
          mW = void 0 !== OW ? cW(cW({}, OW), iW.props) : {},
          NW = mW.dataKey,
          PW = mW.name,
          LW = mW.legendType;
        return {
          inactive: mW.hide,
          dataKey: NW,
          type: xW.iconType || LW || "square",
          color: (0, EW.O)(iW),
          value: PW || NW,
          payload: mW
        }
      })), cW(cW(cW({}, xW), mW.c.getWithHeight(wW, PW)), {}, {
        payload: tW,
        item: wW
      })
    }
  },
  6943: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW
    });
    var mW = OW(6947),
      EW = OW.n(mW),
      NW = OW(6223),
      PW = OW.n(NW);

    function LW(WW, iW, OW) {
      return !0 === iW ? EW()(WW, OW) : PW()(iW) ? EW()(WW, iW) : WW
    }
  },
  6415: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => tW,
      g: () => wW,
      h: () => LW,
      j: () => ZW,
      l: () => xW
    });
    var mW = OW(62),
      EW = OW(6034),
      NW = OW.n(EW);

    function PW(WW) {
      return PW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, PW(WW)
    }
    var LW = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "kZ", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      cW = ["points", "pathLength"],
      wW = {
        svg: ["viewBox", "children"],
        polygon: cW,
        polyline: cW
      },
      tW = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      ZW = function(WW, iW) {
        if (!WW || "function" === typeof WW || "boolean" === typeof WW) return null;
        var OW = WW;
        if ((0, mW.isValidElement)(WW) && (OW = WW.props), !NW()(OW)) return null;
        var EW = {};
        return Object.keys(OW).forEach((function(WW) {
          tW.includes(WW) && (EW[WW] = iW || function(iW) {
            return OW[WW](OW, iW)
          })
        })), EW
      },
      xW = function(WW, iW, OW) {
        if (!NW()(WW) || "object" !== PW(WW)) return null;
        var mW = null;
        return Object.keys(WW).forEach((function(EW) {
          var NW = WW[EW];
          tW.includes(EW) && "function" === typeof NW && (mW || (mW = {}), mW[EW] = function(WW, iW, OW) {
            return function(mW) {
              return WW(iW, OW, mW), null
            }
          }(NW, iW, OW))
        })), mW
      }
  },
  6406: (WW, iW) => {
    var OW, mW = Symbol.for("react.element"),
      EW = Symbol.for("react.portal"),
      NW = Symbol.for("react.fragment"),
      PW = Symbol.for("react.strict_mode"),
      LW = Symbol.for("react.profiler"),
      cW = Symbol.for("react.provider"),
      wW = Symbol.for("react.context"),
      tW = Symbol.for("react.server_context"),
      ZW = Symbol.for("react.forward_ref"),
      xW = Symbol.for("react.suspense"),
      lW = Symbol.for("react.suspense_list"),
      AW = Symbol.for("react.memo"),
      bW = Symbol.for("react.lazy"),
      jW = Symbol.for("react.offscreen");

    function UW(WW) {
      if ("object" === typeof WW && null !== WW) {
        var iW = WW.$$typeof;
        switch (iW) {
          case mW:
            switch (WW = WW.type) {
              case NW:
              case LW:
              case PW:
              case xW:
              case lW:
                return WW;
              default:
                switch (WW = WW && WW.$$typeof) {
                  case tW:
                  case wW:
                  case ZW:
                  case bW:
                  case AW:
                  case cW:
                    return WW;
                  default:
                    return iW
                }
            }
          case EW:
            return iW
        }
      }
    }
    OW = Symbol.for("react.module.reference"), iW.isFragment = function(WW) {
      return UW(WW) === NW
    }
  },
  6398: (WW, iW, OW) => {
    WW.exports = OW(6406)
  },
  6021: (WW, iW, OW) => {
    function mW(WW) {
      var iW, OW, EW = "";
      if ("string" == typeof WW || "number" == typeof WW) EW += WW;
      else if ("object" == typeof WW)
        if (Array.isArray(WW)) {
          var NW = WW.length;
          for (iW = 0; iW < NW; iW++) WW[iW] && (OW = mW(WW[iW])) && (EW && (EW += " "), EW += OW)
        } else
          for (OW in WW) WW[OW] && (EW && (EW += " "), EW += OW);
      return EW
    }
    OW.d(iW, {
      d: () => EW
    });
    const EW = function() {
      for (var WW, iW, OW = 0, EW = "", NW = arguments.length; OW < NW; OW++)(WW = arguments[OW]) && (iW = mW(WW)) && (EW && (EW += " "), EW += iW);
      return EW
    }
  },
  7108: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      g: () => LW
    });
    var mW = OW(7116),
      EW = OW(7125);

    function NW() {
      var WW, iW, OW = (0, EW.d)().unknown(void 0),
        PW = OW.domain,
        LW = OW.range,
        cW = 0,
        wW = 1,
        tW = !1,
        ZW = 0,
        xW = 0,
        lW = .5;

      function AW() {
        var OW = PW().length,
          mW = wW < cW,
          EW = mW ? wW : cW,
          NW = mW ? cW : wW;
        WW = (NW - EW) / Math.max(1, OW - ZW + 2 * xW), tW && (WW = Math.floor(WW)), EW += (NW - EW - WW * (OW - ZW)) * lW, iW = WW * (1 - ZW), tW && (EW = Math.round(EW), iW = Math.round(iW));
        var AW = function(WW, iW, OW) {
          WW = +WW, iW = +iW, OW = (EW = arguments.length) < 2 ? (iW = WW, WW = 0, 1) : EW < 3 ? 1 : +OW;
          for (var mW = -1, EW = 0 | Math.max(0, Math.ceil((iW - WW) / OW)), NW = new Array(EW); ++mW < EW;) NW[mW] = WW + mW * OW;
          return NW
        }(OW).map((function(iW) {
          return EW + WW * iW
        }));
        return LW(mW ? AW.reverse() : AW)
      }
      return delete OW.unknown, OW.domain = function(WW) {
        return arguments.length ? (PW(WW), AW()) : PW()
      }, OW.range = function(WW) {
        return arguments.length ? ([cW, wW] = WW, cW = +cW, wW = +wW, AW()) : [cW, wW]
      }, OW.rangeRound = function(WW) {
        return [cW, wW] = WW, cW = +cW, wW = +wW, tW = !0, AW()
      }, OW.bandwidth = function() {
        return iW
      }, OW.step = function() {
        return WW
      }, OW.round = function(WW) {
        return arguments.length ? (tW = !!WW, AW()) : tW
      }, OW.padding = function(WW) {
        return arguments.length ? (ZW = Math.min(1, xW = +WW), AW()) : ZW
      }, OW.paddingInner = function(WW) {
        return arguments.length ? (ZW = Math.min(1, WW), AW()) : ZW
      }, OW.paddingOuter = function(WW) {
        return arguments.length ? (xW = +WW, AW()) : xW
      }, OW.align = function(WW) {
        return arguments.length ? (lW = Math.max(0, Math.min(1, WW)), AW()) : lW
      }, OW.copy = function() {
        return NW(PW(), [cW, wW]).round(tW).paddingInner(ZW).paddingOuter(xW).align(lW)
      }, mW.f.apply(AW(), arguments)
    }

    function PW(WW) {
      var iW = WW.copy;
      return WW.padding = WW.paddingOuter, delete WW.paddingInner, delete WW.paddingOuter, WW.copy = function() {
        return PW(iW())
      }, WW
    }

    function LW() {
      return PW(NW.apply(null, arguments).paddingInner(1))
    }
  },
  7116: (WW, iW, OW) => {
    function mW(WW, iW) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(WW);
          break;
        default:
          this.range(iW).domain(WW)
      }
      return this
    }

    function EW(WW, iW) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof WW ? this.interpolator(WW) : this.range(WW);
          break;
        default:
          this.domain(WW), "function" === typeof iW ? this.interpolator(iW) : this.range(iW)
      }
      return this
    }
    OW.d(iW, {
      c: () => EW,
      f: () => mW
    })
  },
  7125: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => tW,
      g: () => wW
    });
    class mW extends Map {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LW;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: iW
            }
          }), null != WW)
          for (const [OW, mW] of WW) this.set(OW, mW)
      }
      get(WW) {
        return super.get(EW(this, WW))
      }
      has(WW) {
        return super.has(EW(this, WW))
      }
      set(WW, iW) {
        return super.set(NW(this, WW), iW)
      }
      delete(WW) {
        return super.delete(PW(this, WW))
      }
    }
    Set;

    function EW(WW, iW) {
      let {
        _intern: OW,
        _key: mW
      } = WW;
      const EW = mW(iW);
      return OW.has(EW) ? OW.get(EW) : iW
    }

    function NW(WW, iW) {
      let {
        _intern: OW,
        _key: mW
      } = WW;
      const EW = mW(iW);
      return OW.has(EW) ? OW.get(EW) : (OW.set(EW, iW), iW)
    }

    function PW(WW, iW) {
      let {
        _intern: OW,
        _key: mW
      } = WW;
      const EW = mW(iW);
      return OW.has(EW) && (iW = OW.get(EW), OW.delete(EW)), iW
    }

    function LW(WW) {
      return null !== WW && "object" === typeof WW ? WW.valueOf() : WW
    }
    var cW = OW(7116);
    const wW = Symbol("implicit");

    function tW() {
      var WW = new mW,
        iW = [],
        OW = [],
        EW = wW;

      function NW(mW) {
        let NW = WW.get(mW);
        if (void 0 === NW) {
          if (EW !== wW) return EW;
          WW.set(mW, NW = iW.push(mW) - 1)
        }
        return OW[NW % OW.length]
      }
      return NW.domain = function(OW) {
        if (!arguments.length) return iW.slice();
        iW = [], WW = new mW;
        for (const mW of OW) WW.has(mW) || WW.set(mW, iW.push(mW) - 1);
        return NW
      }, NW.range = function(WW) {
        return arguments.length ? (OW = Array.from(WW), NW) : OW.slice()
      }, NW.unknown = function(WW) {
        return arguments.length ? (EW = WW, NW) : EW
      }, NW.copy = function() {
        return tW(iW, OW).unknown(EW)
      }, cW.f.apply(NW, arguments), NW
    }
  },
  7202: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    Array.prototype.slice;

    function mW(WW) {
      return "object" === typeof WW && "length" in WW ? WW : Array.from(WW)
    }
  },
  7059: (WW, iW, OW) => {
    function mW(WW) {
      return function() {
        return WW
      }
    }
    OW.d(iW, {
      d: () => mW
    })
  },
  7063: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => wW
    });
    const mW = Math.PI,
      EW = 2 * mW,
      NW = 1e-6,
      PW = EW - NW;

    function LW(WW) {
      this._ += WW[0];
      for (let iW = 1, OW = WW.length; iW < OW; ++iW) this._ += arguments[iW] + WW[iW]
    }
    class cW {
      constructor(WW) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == WW ? LW : function(WW) {
          let iW = Math.floor(WW);
          if (!(iW >= 0)) throw new Error(`invalid digits: ${WW}`);
          if (iW > 15) return LW;
          const OW = 10 ** iW;
          return function(WW) {
            this._ += WW[0];
            for (let iW = 1, mW = WW.length; iW < mW; ++iW) this._ += Math.round(arguments[iW] * OW) / OW + WW[iW]
          }
        }(WW)
      }
      moveTo(WW, iW) {
        this._append`M${this._x0=this._x1=+WW},${this._y0=this._y1=+iW}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(WW, iW) {
        this._append`L${this._x1=+WW},${this._y1=+iW}`
      }
      quadraticCurveTo(WW, iW, OW, mW) {
        this._append`Q${+WW},${+iW},${this._x1=+OW},${this._y1=+mW}`
      }
      bezierCurveTo(WW, iW, OW, mW, EW, NW) {
        this._append`C${+WW},${+iW},${+OW},${+mW},${this._x1=+EW},${this._y1=+NW}`
      }
      arcTo(WW, iW, OW, EW, PW) {
        if (WW = +WW, iW = +iW, OW = +OW, EW = +EW, (PW = +PW) < 0) throw new Error(`negative radius: ${PW}`);
        let LW = this._x1,
          cW = this._y1,
          wW = OW - WW,
          tW = EW - iW,
          ZW = LW - WW,
          xW = cW - iW,
          lW = ZW * ZW + xW * xW;
        if (null === this._x1) this._append`M${this._x1=WW},${this._y1=iW}`;
        else if (lW > NW)
          if (Math.abs(xW * wW - tW * ZW) > NW && PW) {
            let AW = OW - LW,
              bW = EW - cW,
              jW = wW * wW + tW * tW,
              UW = AW * AW + bW * bW,
              kW = Math.sqrt(jW),
              sW = Math.sqrt(lW),
              MW = PW * Math.tan((mW - Math.acos((jW + lW - UW) / (2 * kW * sW))) / 2),
              KW = MW / sW,
              SW = MW / kW;
            Math.abs(KW - 1) > NW && this._append`L${WW+KW*ZW},${iW+KW*xW}`, this._append`A${PW},${PW},0,0,${+(xW*AW>ZW*bW)},${this._x1=WW+SW*wW},${this._y1=iW+SW*tW}`
          } else this._append`L${this._x1=WW},${this._y1=iW}`;
        else;
      }
      arc(WW, iW, OW, LW, cW, wW) {
        if (WW = +WW, iW = +iW, wW = !!wW, (OW = +OW) < 0) throw new Error(`negative radius: ${OW}`);
        let tW = OW * Math.cos(LW),
          ZW = OW * Math.sin(LW),
          xW = WW + tW,
          lW = iW + ZW,
          AW = 1 ^ wW,
          bW = wW ? LW - cW : cW - LW;
        null === this._x1 ? this._append`M${xW},${lW}` : (Math.abs(this._x1 - xW) > NW || Math.abs(this._y1 - lW) > NW) && this._append`L${xW},${lW}`, OW && (bW < 0 && (bW = bW % EW + EW), bW > PW ? this._append`A${OW},${OW},0,1,${AW},${WW-tW},${iW-ZW}A${OW},${OW},0,1,${AW},${this._x1=xW},${this._y1=lW}` : bW > NW && this._append`A${OW},${OW},0,${+(bW>=mW)},${AW},${this._x1=WW+OW*Math.cos(cW)},${this._y1=iW+OW*Math.sin(cW)}`)
      }
      rect(WW, iW, OW, mW) {
        this._append`M${this._x0=this._x1=+WW},${this._y0=this._y1=+iW}h${OW=+OW}v${+mW}h${-OW}Z`
      }
      toString() {
        return this._
      }
    }

    function wW(WW) {
      let iW = 3;
      return WW.digits = function(OW) {
        if (!arguments.length) return iW;
        if (null == OW) iW = null;
        else {
          const WW = Math.floor(OW);
          if (!(WW >= 0)) throw new RangeError(`invalid digits: ${OW}`);
          iW = WW
        }
        return WW
      }, () => new cW(iW)
    }
    cW.prototype
  },
  6919: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW
    });
    var mW = !0,
      EW = "Invariant failed";

    function NW(WW, iW) {
      if (!WW) {
        if (mW) throw new Error(EW);
        var OW = "function" === typeof iW ? iW() : iW,
          NW = OW ? "".concat(EW, ": ").concat(OW) : EW;
        throw new Error(NW)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);