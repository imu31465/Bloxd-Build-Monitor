/*! For license information please see pxmq3aq.132.8ddc2e35.chunk.js.LICENSE.txt */
export const id = 132;
export const ids = [132];
export const modules = {
  6759: function(VV, eV, xV) {
    var JV;
    ! function() {
      var YV, UV = 1e9,
        yV = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        pV = !0,
        QV = "[DecimalError] ",
        nV = QV + "Invalid argument: ",
        wV = QV + "Exponent out of range: ",
        ZV = Math.floor,
        vV = Math.pow,
        rV = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        kV = 1e7,
        bV = 9007199254740991,
        EV = ZV(1286742750677284.5),
        BV = {};

      function jV(VV, eV) {
        var xV, JV, YV, UV, yV, QV, nV, wV, ZV = VV.constructor,
          vV = ZV.precision;
        if (!VV.s || !eV.s) return eV.s || (eV = new ZV(VV)), pV ? zV(eV, vV) : eV;
        if (nV = VV.d, wV = eV.d, yV = VV.e, YV = eV.e, nV = nV.slice(), UV = yV - YV) {
          for (UV < 0 ? (JV = nV, UV = -UV, QV = wV.length) : (JV = wV, YV = yV, QV = nV.length), UV > (QV = (yV = Math.ceil(vV / 7)) > QV ? yV + 1 : QV + 1) && (UV = QV, JV.length = 1), JV.reverse(); UV--;) JV.push(0);
          JV.reverse()
        }
        for ((QV = nV.length) - (UV = wV.length) < 0 && (UV = QV, JV = wV, wV = nV, nV = JV), xV = 0; UV;) xV = (nV[--UV] = nV[UV] + wV[UV] + xV) / kV | 0, nV[UV] %= kV;
        for (xV && (nV.unshift(xV), ++YV), QV = nV.length; 0 == nV[--QV];) nV.pop();
        return eV.d = nV, eV.e = YV, pV ? zV(eV, vV) : eV
      }

      function qV(VV, eV, xV) {
        if (VV !== ~~VV || VV < eV || VV > xV) throw Error(nV + VV)
      }

      function tV(VV) {
        var eV, xV, JV, YV = VV.length - 1,
          UV = "",
          yV = VV[0];
        if (YV > 0) {
          for (UV += yV, eV = 1; eV < YV; eV++)(xV = 7 - (JV = VV[eV] + "").length) && (UV += NV(xV)), UV += JV;
          (xV = 7 - (JV = (yV = VV[eV]) + "").length) && (UV += NV(xV))
        } else if (0 === yV) return "0";
        for (; yV % 10 === 0;) yV /= 10;
        return UV + yV
      }
      BV.absoluteValue = BV.abs = function() {
        var VV = new this.constructor(this);
        return VV.s && (VV.s = 1), VV
      }, BV.comparedTo = BV.cmp = function(VV) {
        var eV, xV, JV, YV, UV = this;
        if (VV = new UV.constructor(VV), UV.s !== VV.s) return UV.s || -VV.s;
        if (UV.e !== VV.e) return UV.e > VV.e ^ UV.s < 0 ? 1 : -1;
        for (eV = 0, xV = (JV = UV.d.length) < (YV = VV.d.length) ? JV : YV; eV < xV; ++eV)
          if (UV.d[eV] !== VV.d[eV]) return UV.d[eV] > VV.d[eV] ^ UV.s < 0 ? 1 : -1;
        return JV === YV ? 0 : JV > YV ^ UV.s < 0 ? 1 : -1
      }, BV.decimalPlaces = BV.dp = function() {
        var VV = this,
          eV = VV.d.length - 1,
          xV = 7 * (eV - VV.e);
        if (eV = VV.d[eV])
          for (; eV % 10 == 0; eV /= 10) xV--;
        return xV < 0 ? 0 : xV
      }, BV.dividedBy = BV.div = function(VV) {
        return FV(this, new this.constructor(VV))
      }, BV.dividedToIntegerBy = BV.idiv = function(VV) {
        var eV = this.constructor;
        return zV(FV(this, new eV(VV), 0, 1), eV.precision)
      }, BV.equals = BV.eq = function(VV) {
        return !this.cmp(VV)
      }, BV.exponent = function() {
        return PV(this)
      }, BV.greaterThan = BV.gt = function(VV) {
        return this.cmp(VV) > 0
      }, BV.greaterThanOrEqualTo = BV.gte = function(VV) {
        return this.cmp(VV) >= 0
      }, BV.isInteger = BV.isint = function() {
        return this.e > this.d.length - 2
      }, BV.isNegative = BV.isneg = function() {
        return this.s < 0
      }, BV.isPositive = BV.ispos = function() {
        return this.s > 0
      }, BV.isZero = function() {
        return 0 === this.s
      }, BV.lessThan = BV.lt = function(VV) {
        return this.cmp(VV) < 0
      }, BV.lessThanOrEqualTo = BV.lte = function(VV) {
        return this.cmp(VV) < 1
      }, BV.logarithm = BV.log = function(VV) {
        var eV, xV = this,
          JV = xV.constructor,
          UV = JV.precision,
          yV = UV + 5;
        if (void 0 === VV) VV = new JV(10);
        else if ((VV = new JV(VV)).s < 1 || VV.eq(YV)) throw Error(QV + "NaN");
        if (xV.s < 1) throw Error(QV + (xV.s ? "NaN" : "-Infinity"));
        return xV.eq(YV) ? new JV(0) : (pV = !1, eV = FV(XV(xV, yV), XV(VV, yV), yV), pV = !0, zV(eV, UV))
      }, BV.minus = BV.sub = function(VV) {
        var eV = this;
        return VV = new eV.constructor(VV), eV.s == VV.s ? GV(eV, VV) : jV(eV, (VV.s = -VV.s, VV))
      }, BV.modulo = BV.mod = function(VV) {
        var eV, xV = this,
          JV = xV.constructor,
          YV = JV.precision;
        if (!(VV = new JV(VV)).s) throw Error(QV + "NaN");
        return xV.s ? (pV = !1, eV = FV(xV, VV, 0, 1).times(VV), pV = !0, xV.minus(eV)) : zV(new JV(xV), YV)
      }, BV.naturalExponential = BV.exp = function() {
        return TV(this)
      }, BV.naturalLogarithm = BV.ln = function() {
        return XV(this)
      }, BV.negated = BV.neg = function() {
        var VV = new this.constructor(this);
        return VV.s = -VV.s || 0, VV
      }, BV.plus = BV.add = function(VV) {
        var eV = this;
        return VV = new eV.constructor(VV), eV.s == VV.s ? jV(eV, VV) : GV(eV, (VV.s = -VV.s, VV))
      }, BV.precision = BV.sd = function(VV) {
        var eV, xV, JV, YV = this;
        if (void 0 !== VV && VV !== !!VV && 1 !== VV && 0 !== VV) throw Error(nV + VV);
        if (eV = PV(YV) + 1, xV = 7 * (JV = YV.d.length - 1) + 1, JV = YV.d[JV]) {
          for (; JV % 10 == 0; JV /= 10) xV--;
          for (JV = YV.d[0]; JV >= 10; JV /= 10) xV++
        }
        return VV && eV > xV ? eV : xV
      }, BV.squareRoot = BV.sqrt = function() {
        var VV, eV, xV, JV, YV, UV, yV, nV = this,
          wV = nV.constructor;
        if (nV.s < 1) {
          if (!nV.s) return new wV(0);
          throw Error(QV + "NaN")
        }
        for (VV = PV(nV), pV = !1, 0 == (YV = Math.sqrt(+nV)) || YV == 1 / 0 ? (((eV = tV(nV.d)).length + VV) % 2 == 0 && (eV += "0"), YV = Math.sqrt(eV), VV = ZV((VV + 1) / 2) - (VV < 0 || VV % 2), JV = new wV(eV = YV == 1 / 0 ? "1e" + VV : (eV = YV.toExponential()).slice(0, eV.indexOf("e") + 1) + VV)) : JV = new wV(YV.toString()), YV = yV = (xV = wV.precision) + 3;;)
          if (JV = (UV = JV).plus(FV(nV, UV, yV + 2)).times(.5), tV(UV.d).slice(0, yV) === (eV = tV(JV.d)).slice(0, yV)) {
            if (eV = eV.slice(yV - 3, yV + 1), YV == yV && "4999" == eV) {
              if (zV(UV, xV + 1, 0), UV.times(UV).eq(nV)) {
                JV = UV;
                break
              }
            } else if ("9999" != eV) break;
            yV += 4
          } return pV = !0, zV(JV, xV)
      }, BV.times = BV.mul = function(VV) {
        var eV, xV, JV, YV, UV, yV, QV, nV, wV, ZV = this,
          vV = ZV.constructor,
          rV = ZV.d,
          bV = (VV = new vV(VV)).d;
        if (!ZV.s || !VV.s) return new vV(0);
        for (VV.s *= ZV.s, xV = ZV.e + VV.e, (nV = rV.length) < (wV = bV.length) && (UV = rV, rV = bV, bV = UV, yV = nV, nV = wV, wV = yV), UV = [], JV = yV = nV + wV; JV--;) UV.push(0);
        for (JV = wV; --JV >= 0;) {
          for (eV = 0, YV = nV + JV; YV > JV;) QV = UV[YV] + bV[JV] * rV[YV - JV - 1] + eV, UV[YV--] = QV % kV | 0, eV = QV / kV | 0;
          UV[YV] = (UV[YV] + eV) % kV | 0
        }
        for (; !UV[--yV];) UV.pop();
        return eV ? ++xV : UV.shift(), VV.d = UV, VV.e = xV, pV ? zV(VV, vV.precision) : VV
      }, BV.toDecimalPlaces = BV.todp = function(VV, eV) {
        var xV = this,
          JV = xV.constructor;
        return xV = new JV(xV), void 0 === VV ? xV : (qV(VV, 0, UV), void 0 === eV ? eV = JV.rounding : qV(eV, 0, 8), zV(xV, VV + PV(xV) + 1, eV))
      }, BV.toExponential = function(VV, eV) {
        var xV, JV = this,
          YV = JV.constructor;
        return void 0 === VV ? xV = WV(JV, !0) : (qV(VV, 0, UV), void 0 === eV ? eV = YV.rounding : qV(eV, 0, 8), xV = WV(JV = zV(new YV(JV), VV + 1, eV), !0, VV + 1)), xV
      }, BV.toFixed = function(VV, eV) {
        var xV, JV, YV = this,
          yV = YV.constructor;
        return void 0 === VV ? WV(YV) : (qV(VV, 0, UV), void 0 === eV ? eV = yV.rounding : qV(eV, 0, 8), xV = WV((JV = zV(new yV(YV), VV + PV(YV) + 1, eV)).abs(), !1, VV + PV(JV) + 1), YV.isneg() && !YV.isZero() ? "-" + xV : xV)
      }, BV.toInteger = BV.toint = function() {
        var VV = this,
          eV = VV.constructor;
        return zV(new eV(VV), PV(VV) + 1, eV.rounding)
      }, BV.toNumber = function() {
        return +this
      }, BV.toPower = BV.pow = function(VV) {
        var eV, xV, JV, UV, yV, nV, wV = this,
          vV = wV.constructor,
          rV = +(VV = new vV(VV));
        if (!VV.s) return new vV(YV);
        if (!(wV = new vV(wV)).s) {
          if (VV.s < 1) throw Error(QV + "Infinity");
          return wV
        }
        if (wV.eq(YV)) return wV;
        if (JV = vV.precision, VV.eq(YV)) return zV(wV, JV);
        if (nV = (eV = VV.e) >= (xV = VV.d.length - 1), yV = wV.s, nV) {
          if ((xV = rV < 0 ? -rV : rV) <= bV) {
            for (UV = new vV(YV), eV = Math.ceil(JV / 7 + 4), pV = !1; xV % 2 && RV((UV = UV.times(wV)).d, eV), 0 !== (xV = ZV(xV / 2));) RV((wV = wV.times(wV)).d, eV);
            return pV = !0, VV.s < 0 ? new vV(YV).div(UV) : zV(UV, JV)
          }
        } else if (yV < 0) throw Error(QV + "NaN");
        return yV = yV < 0 && 1 & VV.d[Math.max(eV, xV)] ? -1 : 1, wV.s = 1, pV = !1, UV = VV.times(XV(wV, JV + 12)), pV = !0, (UV = TV(UV)).s = yV, UV
      }, BV.toPrecision = function(VV, eV) {
        var xV, JV, YV = this,
          yV = YV.constructor;
        return void 0 === VV ? JV = WV(YV, (xV = PV(YV)) <= yV.toExpNeg || xV >= yV.toExpPos) : (qV(VV, 1, UV), void 0 === eV ? eV = yV.rounding : qV(eV, 0, 8), JV = WV(YV = zV(new yV(YV), VV, eV), VV <= (xV = PV(YV)) || xV <= yV.toExpNeg, VV)), JV
      }, BV.toSignificantDigits = BV.tosd = function(VV, eV) {
        var xV = this.constructor;
        return void 0 === VV ? (VV = xV.precision, eV = xV.rounding) : (qV(VV, 1, UV), void 0 === eV ? eV = xV.rounding : qV(eV, 0, 8)), zV(new xV(this), VV, eV)
      }, BV.toString = BV.valueOf = BV.val = BV.toJSON = function() {
        var VV = this,
          eV = PV(VV),
          xV = VV.constructor;
        return WV(VV, eV <= xV.toExpNeg || eV >= xV.toExpPos)
      };
      var FV = function() {
        function VV(VV, eV) {
          var xV, JV = 0,
            YV = VV.length;
          for (VV = VV.slice(); YV--;) xV = VV[YV] * eV + JV, VV[YV] = xV % kV | 0, JV = xV / kV | 0;
          return JV && VV.unshift(JV), VV
        }

        function eV(VV, eV, xV, JV) {
          var YV, UV;
          if (xV != JV) UV = xV > JV ? 1 : -1;
          else
            for (YV = UV = 0; YV < xV; YV++)
              if (VV[YV] != eV[YV]) {
                UV = VV[YV] > eV[YV] ? 1 : -1;
                break
              } return UV
        }

        function xV(VV, eV, xV) {
          for (var JV = 0; xV--;) VV[xV] -= JV, JV = VV[xV] < eV[xV] ? 1 : 0, VV[xV] = JV * kV + VV[xV] - eV[xV];
          for (; !VV[0] && VV.length > 1;) VV.shift()
        }
        return function(JV, YV, UV, yV) {
          var pV, nV, wV, ZV, vV, rV, bV, EV, BV, jV, qV, tV, FV, TV, AV, NV, XV, MV, GV = JV.constructor,
            WV = JV.s == YV.s ? 1 : -1,
            RV = JV.d,
            gV = YV.d;
          if (!JV.s) return new GV(JV);
          if (!YV.s) throw Error(QV + "Division by zero");
          for (nV = JV.e - YV.e, XV = gV.length, AV = RV.length, EV = (bV = new GV(WV)).d = [], wV = 0; gV[wV] == (RV[wV] || 0);) ++wV;
          if (gV[wV] > (RV[wV] || 0) && --nV, (tV = null == UV ? UV = GV.precision : yV ? UV + (PV(JV) - PV(YV)) + 1 : UV) < 0) return new GV(0);
          if (tV = tV / 7 + 2 | 0, wV = 0, 1 == XV)
            for (ZV = 0, gV = gV[0], tV++;
              (wV < AV || ZV) && tV--; wV++) FV = ZV * kV + (RV[wV] || 0), EV[wV] = FV / gV | 0, ZV = FV % gV | 0;
          else {
            for ((ZV = kV / (gV[0] + 1) | 0) > 1 && (gV = VV(gV, ZV), RV = VV(RV, ZV), XV = gV.length, AV = RV.length), TV = XV, jV = (BV = RV.slice(0, XV)).length; jV < XV;) BV[jV++] = 0;
            (MV = gV.slice()).unshift(0), NV = gV[0], gV[1] >= kV / 2 && ++NV;
            do {
              ZV = 0, (pV = eV(gV, BV, XV, jV)) < 0 ? (qV = BV[0], XV != jV && (qV = qV * kV + (BV[1] || 0)), (ZV = qV / NV | 0) > 1 ? (ZV >= kV && (ZV = kV - 1), 1 == (pV = eV(vV = VV(gV, ZV), BV, rV = vV.length, jV = BV.length)) && (ZV--, xV(vV, XV < rV ? MV : gV, rV))) : (0 == ZV && (pV = ZV = 1), vV = gV.slice()), (rV = vV.length) < jV && vV.unshift(0), xV(BV, vV, jV), -1 == pV && (pV = eV(gV, BV, XV, jV = BV.length)) < 1 && (ZV++, xV(BV, XV < jV ? MV : gV, jV)), jV = BV.length) : 0 === pV && (ZV++, BV = [0]), EV[wV++] = ZV, pV && BV[0] ? BV[jV++] = RV[TV] || 0 : (BV = [RV[TV]], jV = 1)
            } while ((TV++ < AV || void 0 !== BV[0]) && tV--)
          }
          return EV[0] || EV.shift(), bV.e = nV, zV(bV, yV ? UV + PV(bV) + 1 : UV)
        }
      }();

      function TV(VV, eV) {
        var xV, JV, UV, yV, QV, nV = 0,
          ZV = 0,
          rV = VV.constructor,
          kV = rV.precision;
        if (PV(VV) > 16) throw Error(wV + PV(VV));
        if (!VV.s) return new rV(YV);
        for (null == eV ? (pV = !1, QV = kV) : QV = eV, yV = new rV(.03125); VV.abs().gte(.1);) VV = VV.times(yV), ZV += 5;
        for (QV += Math.log(vV(2, ZV)) / Math.LN10 * 2 + 5 | 0, xV = JV = UV = new rV(YV), rV.precision = QV;;) {
          if (JV = zV(JV.times(VV), QV), xV = xV.times(++nV), tV((yV = UV.plus(FV(JV, xV, QV))).d).slice(0, QV) === tV(UV.d).slice(0, QV)) {
            for (; ZV--;) UV = zV(UV.times(UV), QV);
            return rV.precision = kV, null == eV ? (pV = !0, zV(UV, kV)) : UV
          }
          UV = yV
        }
      }

      function PV(VV) {
        for (var eV = 7 * VV.e, xV = VV.d[0]; xV >= 10; xV /= 10) eV++;
        return eV
      }

      function AV(VV, eV, xV) {
        if (eV > VV.LN10.sd()) throw pV = !0, xV && (VV.precision = xV), Error(QV + "LN10 precision limit exceeded");
        return zV(new VV(VV.LN10), eV)
      }

      function NV(VV) {
        for (var eV = ""; VV--;) eV += "0";
        return eV
      }

      function XV(VV, eV) {
        var xV, JV, UV, yV, nV, wV, ZV, vV, rV, kV = 1,
          bV = VV,
          EV = bV.d,
          BV = bV.constructor,
          jV = BV.precision;
        if (bV.s < 1) throw Error(QV + (bV.s ? "NaN" : "-Infinity"));
        if (bV.eq(YV)) return new BV(0);
        if (null == eV ? (pV = !1, vV = jV) : vV = eV, bV.eq(10)) return null == eV && (pV = !0), AV(BV, vV);
        if (vV += 10, BV.precision = vV, JV = (xV = tV(EV)).charAt(0), yV = PV(bV), !(Math.abs(yV) < 15e14)) return ZV = AV(BV, vV + 2, jV).times(yV + ""), bV = XV(new BV(JV + "." + xV.slice(1)), vV - 10).plus(ZV), BV.precision = jV, null == eV ? (pV = !0, zV(bV, jV)) : bV;
        for (; JV < 7 && 1 != JV || 1 == JV && xV.charAt(1) > 3;) JV = (xV = tV((bV = bV.times(VV)).d)).charAt(0), kV++;
        for (yV = PV(bV), JV > 1 ? (bV = new BV("0." + xV), yV++) : bV = new BV(JV + "." + xV.slice(1)), wV = nV = bV = FV(bV.minus(YV), bV.plus(YV), vV), rV = zV(bV.times(bV), vV), UV = 3;;) {
          if (nV = zV(nV.times(rV), vV), tV((ZV = wV.plus(FV(nV, new BV(UV), vV))).d).slice(0, vV) === tV(wV.d).slice(0, vV)) return wV = wV.times(2), 0 !== yV && (wV = wV.plus(AV(BV, vV + 2, jV).times(yV + ""))), wV = FV(wV, new BV(kV), vV), BV.precision = jV, null == eV ? (pV = !0, zV(wV, jV)) : wV;
          wV = ZV, UV += 2
        }
      }

      function MV(VV, eV) {
        var xV, JV, YV;
        for ((xV = eV.indexOf(".")) > -1 && (eV = eV.replace(".", "")), (JV = eV.search(/e/i)) > 0 ? (xV < 0 && (xV = JV), xV += +eV.slice(JV + 1), eV = eV.substring(0, JV)) : xV < 0 && (xV = eV.length), JV = 0; 48 === eV.charCodeAt(JV);) ++JV;
        for (YV = eV.length; 48 === eV.charCodeAt(YV - 1);) --YV;
        if (eV = eV.slice(JV, YV)) {
          if (YV -= JV, xV = xV - JV - 1, VV.e = ZV(xV / 7), VV.d = [], JV = (xV + 1) % 7, xV < 0 && (JV += 7), JV < YV) {
            for (JV && VV.d.push(+eV.slice(0, JV)), YV -= 7; JV < YV;) VV.d.push(+eV.slice(JV, JV += 7));
            JV = 7 - (eV = eV.slice(JV)).length
          } else JV -= YV;
          for (; JV--;) eV += "0";
          if (VV.d.push(+eV), pV && (VV.e > EV || VV.e < -EV)) throw Error(wV + xV)
        } else VV.s = 0, VV.e = 0, VV.d = [0];
        return VV
      }

      function zV(VV, eV, xV) {
        var JV, YV, UV, yV, QV, nV, rV, bV, BV = VV.d;
        for (yV = 1, UV = BV[0]; UV >= 10; UV /= 10) yV++;
        if ((JV = eV - yV) < 0) JV += 7, YV = eV, rV = BV[bV = 0];
        else {
          if ((bV = Math.ceil((JV + 1) / 7)) >= (UV = BV.length)) return VV;
          for (rV = UV = BV[bV], yV = 1; UV >= 10; UV /= 10) yV++;
          YV = (JV %= 7) - 7 + yV
        }
        if (void 0 !== xV && (QV = rV / (UV = vV(10, yV - YV - 1)) % 10 | 0, nV = eV < 0 || void 0 !== BV[bV + 1] || rV % UV, nV = xV < 4 ? (QV || nV) && (0 == xV || xV == (VV.s < 0 ? 3 : 2)) : QV > 5 || 5 == QV && (4 == xV || nV || 6 == xV && (JV > 0 ? YV > 0 ? rV / vV(10, yV - YV) : 0 : BV[bV - 1]) % 10 & 1 || xV == (VV.s < 0 ? 8 : 7))), eV < 1 || !BV[0]) return nV ? (UV = PV(VV), BV.length = 1, eV = eV - UV - 1, BV[0] = vV(10, (7 - eV % 7) % 7), VV.e = ZV(-eV / 7) || 0) : (BV.length = 1, BV[0] = VV.e = VV.s = 0), VV;
        if (0 == JV ? (BV.length = bV, UV = 1, bV--) : (BV.length = bV + 1, UV = vV(10, 7 - JV), BV[bV] = YV > 0 ? (rV / vV(10, yV - YV) % vV(10, YV) | 0) * UV : 0), nV)
          for (;;) {
            if (0 == bV) {
              (BV[0] += UV) == kV && (BV[0] = 1, ++VV.e);
              break
            }
            if (BV[bV] += UV, BV[bV] != kV) break;
            BV[bV--] = 0, UV = 1
          }
        for (JV = BV.length; 0 === BV[--JV];) BV.pop();
        if (pV && (VV.e > EV || VV.e < -EV)) throw Error(wV + PV(VV));
        return VV
      }

      function GV(VV, eV) {
        var xV, JV, YV, UV, yV, QV, nV, wV, ZV, vV, rV = VV.constructor,
          bV = rV.precision;
        if (!VV.s || !eV.s) return eV.s ? eV.s = -eV.s : eV = new rV(VV), pV ? zV(eV, bV) : eV;
        if (nV = VV.d, vV = eV.d, JV = eV.e, wV = VV.e, nV = nV.slice(), yV = wV - JV) {
          for ((ZV = yV < 0) ? (xV = nV, yV = -yV, QV = vV.length) : (xV = vV, JV = wV, QV = nV.length), yV > (YV = Math.max(Math.ceil(bV / 7), QV) + 2) && (yV = YV, xV.length = 1), xV.reverse(), YV = yV; YV--;) xV.push(0);
          xV.reverse()
        } else {
          for ((ZV = (YV = nV.length) < (QV = vV.length)) && (QV = YV), YV = 0; YV < QV; YV++)
            if (nV[YV] != vV[YV]) {
              ZV = nV[YV] < vV[YV];
              break
            } yV = 0
        }
        for (ZV && (xV = nV, nV = vV, vV = xV, eV.s = -eV.s), QV = nV.length, YV = vV.length - QV; YV > 0; --YV) nV[QV++] = 0;
        for (YV = vV.length; YV > yV;) {
          if (nV[--YV] < vV[YV]) {
            for (UV = YV; UV && 0 === nV[--UV];) nV[UV] = kV - 1;
            --nV[UV], nV[YV] += kV
          }
          nV[YV] -= vV[YV]
        }
        for (; 0 === nV[--QV];) nV.pop();
        for (; 0 === nV[0]; nV.shift()) --JV;
        return nV[0] ? (eV.d = nV, eV.e = JV, pV ? zV(eV, bV) : eV) : new rV(0)
      }

      function WV(VV, eV, xV) {
        var JV, YV = PV(VV),
          UV = tV(VV.d),
          yV = UV.length;
        return eV ? (xV && (JV = xV - yV) > 0 ? UV = UV.charAt(0) + "." + UV.slice(1) + NV(JV) : yV > 1 && (UV = UV.charAt(0) + "." + UV.slice(1)), UV = UV + (YV < 0 ? "e" : "e+") + YV) : YV < 0 ? (UV = "0." + NV(-YV - 1) + UV, xV && (JV = xV - yV) > 0 && (UV += NV(JV))) : YV >= yV ? (UV += NV(YV + 1 - yV), xV && (JV = xV - YV - 1) > 0 && (UV = UV + "." + NV(JV))) : ((JV = YV + 1) < yV && (UV = UV.slice(0, JV) + "." + UV.slice(JV)), xV && (JV = xV - yV) > 0 && (YV + 1 === yV && (UV += "."), UV += NV(JV))), VV.s < 0 ? "-" + UV : UV
      }

      function RV(VV, eV) {
        if (VV.length > eV) return VV.length = eV, !0
      }

      function gV(VV) {
        if (!VV || "object" !== typeof VV) throw Error(QV + "Object expected");
        var eV, xV, JV, YV = ["precision", 1, UV, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (eV = 0; eV < YV.length; eV += 3)
          if (void 0 !== (JV = VV[xV = YV[eV]])) {
            if (!(ZV(JV) === JV && JV >= YV[eV + 1] && JV <= YV[eV + 2])) throw Error(nV + xV + ": " + JV);
            this[xV] = JV
          } if (void 0 !== (JV = VV[xV = "LN10"])) {
          if (JV != Math.LN10) throw Error(nV + xV + ": " + JV);
          this[xV] = new this(JV)
        }
        return this
      }
      yV = function VV(eV) {
        var xV, JV, YV;

        function UV(VV) {
          var eV = this;
          if (!(eV instanceof UV)) return new UV(VV);
          if (eV.constructor = UV, VV instanceof UV) return eV.s = VV.s, eV.e = VV.e, void(eV.d = (VV = VV.d) ? VV.slice() : VV);
          if ("number" === typeof VV) {
            if (0 * VV !== 0) throw Error(nV + VV);
            if (VV > 0) eV.s = 1;
            else {
              if (!(VV < 0)) return eV.s = 0, eV.e = 0, void(eV.d = [0]);
              VV = -VV, eV.s = -1
            }
            return VV === ~~VV && VV < 1e7 ? (eV.e = 0, void(eV.d = [VV])) : MV(eV, VV.toString())
          }
          if ("string" !== typeof VV) throw Error(nV + VV);
          if (45 === VV.charCodeAt(0) ? (VV = VV.slice(1), eV.s = -1) : eV.s = 1, !rV.test(VV)) throw Error(nV + VV);
          MV(eV, VV)
        }
        if (UV.prototype = BV, UV.ROUND_UP = 0, UV.ROUND_DOWN = 1, UV.ROUND_CEIL = 2, UV.ROUND_FLOOR = 3, UV.ROUND_HALF_UP = 4, UV.ROUND_HALF_DOWN = 5, UV.ROUND_HALF_EVEN = 6, UV.ROUND_HALF_CEIL = 7, UV.ROUND_HALF_FLOOR = 8, UV.clone = VV, UV.config = UV.set = gV, void 0 === eV && (eV = {}), eV)
          for (YV = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], xV = 0; xV < YV.length;) eV.hasOwnProperty(JV = YV[xV++]) || (eV[JV] = this[JV]);
        return UV.config(eV), UV
      }(yV), yV.default = yV.Decimal = yV, YV = new yV(1), void 0 === (JV = function() {
        return yV
      }.call(eV, xV, eV, VV)) || (VV.exports = JV)
    }()
  },
  6344: (VV, eV, xV) => {
    var JV = xV(5817)(xV(5645), "DataView");
    VV.exports = JV
  },
  5805: (VV, eV, xV) => {
    var JV = xV(5808),
      YV = xV(5842),
      UV = xV(5851),
      yV = xV(5859),
      pV = xV(5865);

    function QV(VV) {
      var eV = -1,
        xV = null == VV ? 0 : VV.length;
      for (this.clear(); ++eV < xV;) {
        var JV = VV[eV];
        this.set(JV[0], JV[1])
      }
    }
    QV.prototype.clear = JV, QV.prototype.delete = YV, QV.prototype.get = UV, QV.prototype.has = yV, QV.prototype.set = pV, VV.exports = QV
  },
  5874: (VV, eV, xV) => {
    var JV = xV(5881),
      YV = xV(5885),
      UV = xV(5902),
      yV = xV(5907),
      pV = xV(5913);

    function QV(VV) {
      var eV = -1,
        xV = null == VV ? 0 : VV.length;
      for (this.clear(); ++eV < xV;) {
        var JV = VV[eV];
        this.set(JV[0], JV[1])
      }
    }
    QV.prototype.clear = JV, QV.prototype.delete = YV, QV.prototype.get = UV, QV.prototype.has = yV, QV.prototype.set = pV, VV.exports = QV
  },
  5916: (VV, eV, xV) => {
    var JV = xV(5817)(xV(5645), "Map");
    VV.exports = JV
  },
  5795: (VV, eV, xV) => {
    var JV = xV(5800),
      YV = xV(5919),
      UV = xV(5939),
      yV = xV(5944),
      pV = xV(5951);

    function QV(VV) {
      var eV = -1,
        xV = null == VV ? 0 : VV.length;
      for (this.clear(); ++eV < xV;) {
        var JV = VV[eV];
        this.set(JV[0], JV[1])
      }
    }
    QV.prototype.clear = JV, QV.prototype.delete = YV, QV.prototype.get = UV, QV.prototype.has = yV, QV.prototype.set = pV, VV.exports = QV
  },
  6348: (VV, eV, xV) => {
    var JV = xV(5817)(xV(5645), "Promise");
    VV.exports = JV
  },
  6350: (VV, eV, xV) => {
    var JV = xV(5817)(xV(5645), "Set");
    VV.exports = JV
  },
  6186: (VV, eV, xV) => {
    var JV = xV(5795),
      YV = xV(6195),
      UV = xV(6203);

    function yV(VV) {
      var eV = -1,
        xV = null == VV ? 0 : VV.length;
      for (this.__data__ = new JV; ++eV < xV;) this.add(VV[eV])
    }
    yV.prototype.add = yV.prototype.push = YV, yV.prototype.has = UV, VV.exports = yV
  },
  6136: (VV, eV, xV) => {
    var JV = xV(5874),
      YV = xV(6144),
      UV = xV(6147),
      yV = xV(6152),
      pV = xV(6159),
      QV = xV(6166);

    function nV(VV) {
      var eV = this.__data__ = new JV(VV);
      this.size = eV.size
    }
    nV.prototype.clear = YV, nV.prototype.delete = UV, nV.prototype.get = yV, nV.prototype.has = pV, nV.prototype.set = QV, VV.exports = nV
  },
  5691: (VV, eV, xV) => {
    var JV = xV(5645).Symbol;
    VV.exports = JV
  },
  6224: (VV, eV, xV) => {
    var JV = xV(5645).Uint8Array;
    VV.exports = JV
  },
  6357: (VV, eV, xV) => {
    var JV = xV(5817)(xV(5645), "WeakMap");
    VV.exports = JV
  },
  6476: VV => {
    VV.exports = function(VV, eV, xV) {
      switch (xV.length) {
        case 0:
          return VV.call(eV);
        case 1:
          return VV.call(eV, xV[0]);
        case 2:
          return VV.call(eV, xV[0], xV[1]);
        case 3:
          return VV.call(eV, xV[0], xV[1], xV[2])
      }
      return VV.apply(eV, xV)
    }
  },
  6818: VV => {
    VV.exports = function(VV, eV) {
      for (var xV = -1, JV = null == VV ? 0 : VV.length; ++xV < JV;)
        if (!eV(VV[xV], xV, VV)) return !1;
      return !0
    }
  },
  6257: VV => {
    VV.exports = function(VV, eV) {
      for (var xV = -1, JV = null == VV ? 0 : VV.length, YV = 0, UV = []; ++xV < JV;) {
        var yV = VV[xV];
        eV(yV, xV, VV) && (UV[YV++] = yV)
      }
      return UV
    }
  },
  6552: (VV, eV, xV) => {
    var JV = xV(6560);
    VV.exports = function(VV, eV) {
      return !!(null == VV ? 0 : VV.length) && JV(VV, eV, 0) > -1
    }
  },
  6582: VV => {
    VV.exports = function(VV, eV, xV) {
      for (var JV = -1, YV = null == VV ? 0 : VV.length; ++JV < YV;)
        if (xV(eV, VV[JV])) return !0;
      return !1
    }
  },
  6275: (VV, eV, xV) => {
    var JV = xV(6284),
      YV = xV(6101),
      UV = xV(5724),
      yV = xV(6287),
      pV = xV(6070),
      QV = xV(6297),
      nV = Object.prototype.hasOwnProperty;
    VV.exports = function(VV, eV) {
      var xV = UV(VV),
        wV = !xV && YV(VV),
        ZV = !xV && !wV && yV(VV),
        vV = !xV && !wV && !ZV && QV(VV),
        rV = xV || wV || ZV || vV,
        kV = rV ? JV(VV.length, String) : [],
        bV = kV.length;
      for (var EV in VV) !eV && !nV.call(VV, EV) || rV && ("length" == EV || ZV && ("offset" == EV || "parent" == EV) || vV && ("buffer" == EV || "byteLength" == EV || "byteOffset" == EV) || pV(EV, bV)) || kV.push(EV);
      return kV
    }
  },
  5963: VV => {
    VV.exports = function(VV, eV) {
      for (var xV = -1, JV = null == VV ? 0 : VV.length, YV = Array(JV); ++xV < JV;) YV[xV] = eV(VV[xV], xV, VV);
      return YV
    }
  },
  6092: VV => {
    VV.exports = function(VV, eV) {
      for (var xV = -1, JV = eV.length, YV = VV.length; ++xV < JV;) VV[YV + xV] = eV[xV];
      return VV
    }
  },
  6207: VV => {
    VV.exports = function(VV, eV) {
      for (var xV = -1, JV = null == VV ? 0 : VV.length; ++xV < JV;)
        if (eV(VV[xV], xV, VV)) return !0;
      return !1
    }
  },
  6644: VV => {
    VV.exports = function(VV) {
      return VV.split("")
    }
  },
  5891: (VV, eV, xV) => {
    var JV = xV(5896);
    VV.exports = function(VV, eV) {
      for (var xV = VV.length; xV--;)
        if (JV(VV[xV][0], eV)) return xV;
      return -1
    }
  },
  6805: (VV, eV, xV) => {
    var JV = xV(6499);
    VV.exports = function(VV, eV, xV) {
      "__proto__" == eV && JV ? JV(VV, eV, {
        configurable: !0,
        enumerable: !0,
        value: xV,
        writable: !0
      }) : VV[eV] = xV
    }
  },
  6421: (VV, eV, xV) => {
    var JV = xV(6428),
      YV = xV(6440)(JV);
    VV.exports = YV
  },
  6821: (VV, eV, xV) => {
    var JV = xV(6421);
    VV.exports = function(VV, eV) {
      var xV = !0;
      return JV(VV, (function(VV, JV, YV) {
        return xV = !!eV(VV, JV, YV)
      })), xV
    }
  },
  6719: (VV, eV, xV) => {
    var JV = xV(5680);
    VV.exports = function(VV, eV, xV) {
      for (var YV = -1, UV = VV.length; ++YV < UV;) {
        var yV = VV[YV],
          pV = eV(yV);
        if (null != pV && (void 0 === QV ? pV === pV && !JV(pV) : xV(pV, QV))) var QV = pV,
          nV = yV
      }
      return nV
    }
  },
  6566: VV => {
    VV.exports = function(VV, eV, xV, JV) {
      for (var YV = VV.length, UV = xV + (JV ? 1 : -1); JV ? UV-- : ++UV < YV;)
        if (eV(VV[UV], UV, VV)) return UV;
      return -1
    }
  },
  6086: (VV, eV, xV) => {
    var JV = xV(6092),
      YV = xV(6096);
    VV.exports = function VV(eV, xV, UV, yV, pV) {
      var QV = -1,
        nV = eV.length;
      for (UV || (UV = YV), pV || (pV = []); ++QV < nV;) {
        var wV = eV[QV];
        xV > 0 && UV(wV) ? xV > 1 ? VV(wV, xV - 1, UV, yV, pV) : JV(pV, wV) : yV || (pV[pV.length] = wV)
      }
      return pV
    }
  },
  6432: (VV, eV, xV) => {
    var JV = xV(6434)();
    VV.exports = JV
  },
  6428: (VV, eV, xV) => {
    var JV = xV(6432),
      YV = xV(6266);
    VV.exports = function(VV, eV) {
      return VV && JV(VV, eV, YV)
    }
  },
  5752: (VV, eV, xV) => {
    var JV = xV(5758),
      YV = xV(5966);
    VV.exports = function(VV, eV) {
      for (var xV = 0, UV = (eV = JV(eV, VV)).length; null != VV && xV < UV;) VV = VV[YV(eV[xV++])];
      return xV && xV == UV ? VV : void 0
    }
  },
  6246: (VV, eV, xV) => {
    var JV = xV(6092),
      YV = xV(5724);
    VV.exports = function(VV, eV, xV) {
      var UV = eV(VV);
      return YV(VV) ? UV : JV(UV, xV(VV))
    }
  },
  5689: (VV, eV, xV) => {
    var JV = xV(5691),
      YV = xV(5695),
      UV = xV(5699),
      yV = JV ? JV.toStringTag : void 0;
    VV.exports = function(VV) {
      return null == VV ? void 0 === VV ? "[object Undefined]" : "[object Null]" : yV && yV in Object(VV) ? YV(VV) : UV(VV)
    }
  },
  6721: VV => {
    VV.exports = function(VV, eV) {
      return VV > eV
    }
  },
  6386: VV => {
    VV.exports = function(VV, eV) {
      return null != VV && eV in Object(VV)
    }
  },
  6560: (VV, eV, xV) => {
    var JV = xV(6566),
      YV = xV(6574),
      UV = xV(6580);
    VV.exports = function(VV, eV, xV) {
      return eV === eV ? UV(VV, eV, xV) : JV(VV, YV, xV)
    }
  },
  6108: (VV, eV, xV) => {
    var JV = xV(5689),
      YV = xV(5705);
    VV.exports = function(VV) {
      return YV(VV) && "[object Arguments]" == JV(VV)
    }
  },
  6171: (VV, eV, xV) => {
    var JV = xV(6177),
      YV = xV(5705);
    VV.exports = function VV(eV, xV, UV, yV, pV) {
      return eV === xV || (null == eV || null == xV || !YV(eV) && !YV(xV) ? eV !== eV && xV !== xV : JV(eV, xV, UV, yV, VV, pV))
    }
  },
  6177: (VV, eV, xV) => {
    var JV = xV(6136),
      YV = xV(6180),
      UV = xV(6220),
      yV = xV(6235),
      pV = xV(6340),
      QV = xV(5724),
      nV = xV(6287),
      wV = xV(6297),
      ZV = "[object Arguments]",
      vV = "[object Array]",
      rV = "[object Object]",
      kV = Object.prototype.hasOwnProperty;
    VV.exports = function(VV, eV, xV, bV, EV, BV) {
      var jV = QV(VV),
        qV = QV(eV),
        tV = jV ? vV : pV(VV),
        FV = qV ? vV : pV(eV),
        TV = (tV = tV == ZV ? rV : tV) == rV,
        PV = (FV = FV == ZV ? rV : FV) == rV,
        AV = tV == FV;
      if (AV && nV(VV)) {
        if (!nV(eV)) return !1;
        jV = !0, TV = !1
      }
      if (AV && !TV) return BV || (BV = new JV), jV || wV(VV) ? YV(VV, eV, xV, bV, EV, BV) : UV(VV, eV, tV, xV, bV, EV, BV);
      if (!(1 & xV)) {
        var NV = TV && kV.call(VV, "__wrapped__"),
          XV = PV && kV.call(eV, "__wrapped__");
        if (NV || XV) {
          var MV = NV ? VV.value() : VV,
            zV = XV ? eV.value() : eV;
          return BV || (BV = new JV), EV(MV, zV, xV, bV, BV)
        }
      }
      return !!AV && (BV || (BV = new JV), yV(VV, eV, xV, bV, EV, BV))
    }
  },
  6131: (VV, eV, xV) => {
    var JV = xV(6136),
      YV = xV(6171);
    VV.exports = function(VV, eV, xV, UV) {
      var yV = xV.length,
        pV = yV,
        QV = !UV;
      if (null == VV) return !pV;
      for (VV = Object(VV); yV--;) {
        var nV = xV[yV];
        if (QV && nV[2] ? nV[1] !== VV[nV[0]] : !(nV[0] in VV)) return !1
      }
      for (; ++yV < pV;) {
        var wV = (nV = xV[yV])[0],
          ZV = VV[wV],
          vV = nV[1];
        if (QV && nV[2]) {
          if (void 0 === ZV && !(wV in VV)) return !1
        } else {
          var rV = new JV;
          if (UV) var kV = UV(ZV, vV, wV, VV, eV, rV);
          if (!(void 0 === kV ? YV(vV, ZV, 3, UV, rV) : kV)) return !1
        }
      }
      return !0
    }
  },
  6574: VV => {
    VV.exports = function(VV) {
      return VV !== VV
    }
  },
  5819: (VV, eV, xV) => {
    var JV = xV(5824),
      YV = xV(5826),
      UV = xV(5631),
      yV = xV(5834),
      pV = /^\[object .+?Constructor\]$/,
      QV = Function.prototype,
      nV = Object.prototype,
      wV = QV.toString,
      ZV = nV.hasOwnProperty,
      vV = RegExp("^" + wV.call(ZV).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    VV.exports = function(VV) {
      return !(!UV(VV) || YV(VV)) && (JV(VV) ? vV : pV).test(yV(VV))
    }
  },
  6303: (VV, eV, xV) => {
    var JV = xV(5689),
      YV = xV(6063),
      UV = xV(5705),
      yV = {};
    yV["[object Float32Array]"] = yV["[object Float64Array]"] = yV["[object Int8Array]"] = yV["[object Int16Array]"] = yV["[object Int32Array]"] = yV["[object Uint8Array]"] = yV["[object Uint8ClampedArray]"] = yV["[object Uint16Array]"] = yV["[object Uint32Array]"] = !0, yV["[object Arguments]"] = yV["[object Array]"] = yV["[object ArrayBuffer]"] = yV["[object Boolean]"] = yV["[object DataView]"] = yV["[object Date]"] = yV["[object Error]"] = yV["[object Function]"] = yV["[object Map]"] = yV["[object Number]"] = yV["[object Object]"] = yV["[object RegExp]"] = yV["[object Set]"] = yV["[object String]"] = yV["[object WeakMap]"] = !1, VV.exports = function(VV) {
      return UV(VV) && YV(VV.length) && !!yV[JV(VV)]
    }
  },
  6119: (VV, eV, xV) => {
    var JV = xV(6128),
      YV = xV(6375),
      UV = xV(6398),
      yV = xV(5724),
      pV = xV(6400);
    VV.exports = function(VV) {
      return "function" == typeof VV ? VV : null == VV ? UV : "object" == typeof VV ? yV(VV) ? YV(VV[0], VV[1]) : JV(VV) : pV(VV)
    }
  },
  6323: (VV, eV, xV) => {
    var JV = xV(6327),
      YV = xV(6331),
      UV = Object.prototype.hasOwnProperty;
    VV.exports = function(VV) {
      if (!JV(VV)) return YV(VV);
      var eV = [];
      for (var xV in Object(VV)) UV.call(VV, xV) && "constructor" != xV && eV.push(xV);
      return eV
    }
  },
  6732: VV => {
    VV.exports = function(VV, eV) {
      return VV < eV
    }
  },
  6419: (VV, eV, xV) => {
    var JV = xV(6421),
      YV = xV(6056);
    VV.exports = function(VV, eV) {
      var xV = -1,
        UV = YV(VV) ? Array(VV.length) : [];
      return JV(VV, (function(VV, JV, YV) {
        UV[++xV] = eV(VV, JV, YV)
      })), UV
    }
  },
  6128: (VV, eV, xV) => {
    var JV = xV(6131),
      YV = xV(6362),
      UV = xV(6373);
    VV.exports = function(VV) {
      var eV = YV(VV);
      return 1 == eV.length && eV[0][2] ? UV(eV[0][0], eV[0][1]) : function(xV) {
        return xV === VV || JV(xV, VV, eV)
      }
    }
  },
  6375: (VV, eV, xV) => {
    var JV = xV(6171),
      YV = xV(5746),
      UV = xV(6380),
      yV = xV(5765),
      pV = xV(6370),
      QV = xV(6373),
      nV = xV(5966);
    VV.exports = function(VV, eV) {
      return yV(VV) && pV(eV) ? QV(nV(VV), eV) : function(xV) {
        var yV = YV(xV, VV);
        return void 0 === yV && yV === eV ? UV(xV, VV) : JV(eV, yV, 3)
      }
    }
  },
  6114: (VV, eV, xV) => {
    var JV = xV(5963),
      YV = xV(5752),
      UV = xV(6119),
      yV = xV(6419),
      pV = xV(6445),
      QV = xV(6308),
      nV = xV(6452),
      wV = xV(6398),
      ZV = xV(5724);
    VV.exports = function(VV, eV, xV) {
      eV = eV.length ? JV(eV, (function(VV) {
        return ZV(VV) ? function(eV) {
          return YV(eV, 1 === VV.length ? VV[0] : VV)
        } : VV
      })) : [wV];
      var vV = -1;
      eV = JV(eV, QV(UV));
      var rV = yV(VV, (function(VV, xV, YV) {
        return {
          criteria: JV(eV, (function(eV) {
            return eV(VV)
          })),
          index: ++vV,
          value: VV
        }
      }));
      return pV(rV, (function(VV, eV) {
        return nV(VV, eV, xV)
      }))
    }
  },
  6407: VV => {
    VV.exports = function(VV) {
      return function(eV) {
        return null == eV ? void 0 : eV[VV]
      }
    }
  },
  6412: (VV, eV, xV) => {
    var JV = xV(5752);
    VV.exports = function(VV) {
      return function(eV) {
        return JV(eV, VV)
      }
    }
  },
  6047: VV => {
    var eV = Math.ceil,
      xV = Math.max;
    VV.exports = function(VV, JV, YV, UV) {
      for (var yV = -1, pV = xV(eV((JV - VV) / (YV || 1)), 0), QV = Array(pV); pV--;) QV[UV ? pV : ++yV] = VV, VV += YV;
      return QV
    }
  },
  6467: (VV, eV, xV) => {
    var JV = xV(6398),
      YV = xV(6471),
      UV = xV(6482);
    VV.exports = function(VV, eV) {
      return UV(YV(VV, eV, JV), VV + "")
    }
  },
  6489: (VV, eV, xV) => {
    var JV = xV(6496),
      YV = xV(6499),
      UV = xV(6398),
      yV = YV ? function(VV, eV) {
        return YV(VV, "toString", {
          configurable: !0,
          enumerable: !1,
          value: JV(eV),
          writable: !0
        })
      } : UV;
    VV.exports = yV
  },
  6625: VV => {
    VV.exports = function(VV, eV, xV) {
      var JV = -1,
        YV = VV.length;
      eV < 0 && (eV = -eV > YV ? 0 : YV + eV), (xV = xV > YV ? YV : xV) < 0 && (xV += YV), YV = eV > xV ? 0 : xV - eV >>> 0, eV >>>= 0;
      for (var UV = Array(YV); ++JV < YV;) UV[JV] = VV[JV + eV];
      return UV
    }
  },
  6878: (VV, eV, xV) => {
    var JV = xV(6421);
    VV.exports = function(VV, eV) {
      var xV;
      return JV(VV, (function(VV, JV, YV) {
        return !(xV = eV(VV, JV, YV))
      })), !!xV
    }
  },
  6445: VV => {
    VV.exports = function(VV, eV) {
      var xV = VV.length;
      for (VV.sort(eV); xV--;) VV[xV] = VV[xV].value;
      return VV
    }
  },
  6284: VV => {
    VV.exports = function(VV, eV) {
      for (var xV = -1, JV = Array(VV); ++xV < VV;) JV[xV] = eV(xV);
      return JV
    }
  },
  5961: (VV, eV, xV) => {
    var JV = xV(5691),
      YV = xV(5963),
      UV = xV(5724),
      yV = xV(5680),
      pV = JV ? JV.prototype : void 0,
      QV = pV ? pV.toString : void 0;
    VV.exports = function VV(eV) {
      if ("string" == typeof eV) return eV;
      if (UV(eV)) return YV(eV, VV) + "";
      if (yV(eV)) return QV ? QV.call(eV) : "";
      var xV = eV + "";
      return "0" == xV && 1 / eV == -1 / 0 ? "-0" : xV
    }
  },
  5667: (VV, eV, xV) => {
    var JV = xV(5673),
      YV = /^\s+/;
    VV.exports = function(VV) {
      return VV ? VV.slice(0, JV(VV) + 1).replace(YV, "") : VV
    }
  },
  6308: VV => {
    VV.exports = function(VV) {
      return function(eV) {
        return VV(eV)
      }
    }
  },
  6549: (VV, eV, xV) => {
    var JV = xV(6186),
      YV = xV(6552),
      UV = xV(6582),
      yV = xV(6213),
      pV = xV(6587),
      QV = xV(6229);
    VV.exports = function(VV, eV, xV) {
      var nV = -1,
        wV = YV,
        ZV = VV.length,
        vV = !0,
        rV = [],
        kV = rV;
      if (xV) vV = !1, wV = UV;
      else if (ZV >= 200) {
        var bV = eV ? null : pV(VV);
        if (bV) return QV(bV);
        vV = !1, wV = yV, kV = new JV
      } else kV = eV ? [] : rV;
      VV: for (; ++nV < ZV;) {
        var EV = VV[nV],
          BV = eV ? eV(EV) : EV;
        if (EV = xV || 0 !== EV ? EV : 0, vV && BV === BV) {
          for (var jV = kV.length; jV--;)
            if (kV[jV] === BV) continue VV;
          eV && kV.push(BV), rV.push(EV)
        } else wV(kV, BV, xV) || (kV !== rV && kV.push(BV), rV.push(EV))
      }
      return rV
    }
  },
  6213: VV => {
    VV.exports = function(VV, eV) {
      return VV.has(eV)
    }
  },
  5758: (VV, eV, xV) => {
    var JV = xV(5724),
      YV = xV(5765),
      UV = xV(5774),
      yV = xV(5955);
    VV.exports = function(VV, eV) {
      return JV(VV) ? VV : YV(VV, eV) ? [VV] : UV(yV(VV))
    }
  },
  6621: (VV, eV, xV) => {
    var JV = xV(6625);
    VV.exports = function(VV, eV, xV) {
      var YV = VV.length;
      return xV = void 0 === xV ? YV : xV, !eV && xV >= YV ? VV : JV(VV, eV, xV)
    }
  },
  6459: (VV, eV, xV) => {
    var JV = xV(5680);
    VV.exports = function(VV, eV) {
      if (VV !== eV) {
        var xV = void 0 !== VV,
          YV = null === VV,
          UV = VV === VV,
          yV = JV(VV),
          pV = void 0 !== eV,
          QV = null === eV,
          nV = eV === eV,
          wV = JV(eV);
        if (!QV && !wV && !yV && VV > eV || yV && pV && nV && !QV && !wV || YV && pV && nV || !xV && nV || !UV) return 1;
        if (!YV && !yV && !wV && VV < eV || wV && xV && UV && !YV && !yV || QV && xV && UV || !pV && UV || !nV) return -1
      }
      return 0
    }
  },
  6452: (VV, eV, xV) => {
    var JV = xV(6459);
    VV.exports = function(VV, eV, xV) {
      for (var YV = -1, UV = VV.criteria, yV = eV.criteria, pV = UV.length, QV = xV.length; ++YV < pV;) {
        var nV = JV(UV[YV], yV[YV]);
        if (nV) return YV >= QV ? nV : nV * ("desc" == xV[YV] ? -1 : 1)
      }
      return VV.index - eV.index
    }
  },
  5829: (VV, eV, xV) => {
    var JV = xV(5645)["__core-js_shared__"];
    VV.exports = JV
  },
  6440: (VV, eV, xV) => {
    var JV = xV(6056);
    VV.exports = function(VV, eV) {
      return function(xV, YV) {
        if (null == xV) return xV;
        if (!JV(xV)) return VV(xV, YV);
        for (var UV = xV.length, yV = eV ? UV : -1, pV = Object(xV);
          (eV ? yV-- : ++yV < UV) && !1 !== YV(pV[yV], yV, pV););
        return xV
      }
    }
  },
  6434: VV => {
    VV.exports = function(VV) {
      return function(eV, xV, JV) {
        for (var YV = -1, UV = Object(eV), yV = JV(eV), pV = yV.length; pV--;) {
          var QV = yV[VV ? pV : ++YV];
          if (!1 === xV(UV[QV], QV, UV)) break
        }
        return eV
      }
    }
  },
  6614: (VV, eV, xV) => {
    var JV = xV(6621),
      YV = xV(6632),
      UV = xV(6640),
      yV = xV(5955);
    VV.exports = function(VV) {
      return function(eV) {
        eV = yV(eV);
        var xV = YV(eV) ? UV(eV) : void 0,
          pV = xV ? xV[0] : eV.charAt(0),
          QV = xV ? JV(xV, 1).join("") : eV.slice(1);
        return pV[VV]() + QV
      }
    }
  },
  6899: (VV, eV, xV) => {
    var JV = xV(6119),
      YV = xV(6056),
      UV = xV(6266);
    VV.exports = function(VV) {
      return function(eV, xV, yV) {
        var pV = Object(eV);
        if (!YV(eV)) {
          var QV = JV(xV, 3);
          eV = UV(eV), xV = function(VV) {
            return QV(pV[VV], VV, pV)
          }
        }
        var nV = VV(eV, xV, yV);
        return nV > -1 ? pV[QV ? eV[nV] : nV] : void 0
      }
    }
  },
  6042: (VV, eV, xV) => {
    var JV = xV(6047),
      YV = xV(6052),
      UV = xV(6074);
    VV.exports = function(VV) {
      return function(eV, xV, yV) {
        return yV && "number" != typeof yV && YV(eV, xV, yV) && (xV = yV = void 0), eV = UV(eV), void 0 === xV ? (xV = eV, eV = 0) : xV = UV(xV), yV = void 0 === yV ? eV < xV ? 1 : -1 : UV(yV), JV(eV, xV, yV, VV)
      }
    }
  },
  6587: (VV, eV, xV) => {
    var JV = xV(6350),
      YV = xV(6592),
      UV = xV(6229),
      yV = JV && 1 / UV(new JV([, -0]))[1] == 1 / 0 ? function(VV) {
        return new JV(VV)
      } : YV;
    VV.exports = yV
  },
  6499: (VV, eV, xV) => {
    var JV = xV(5817),
      YV = function() {
        try {
          var VV = JV(Object, "defineProperty");
          return VV({}, "", {}), VV
        } catch (eV) {}
      }();
    VV.exports = YV
  },
  6180: (VV, eV, xV) => {
    var JV = xV(6186),
      YV = xV(6207),
      UV = xV(6213);
    VV.exports = function(VV, eV, xV, yV, pV, QV) {
      var nV = 1 & xV,
        wV = VV.length,
        ZV = eV.length;
      if (wV != ZV && !(nV && ZV > wV)) return !1;
      var vV = QV.get(VV),
        rV = QV.get(eV);
      if (vV && rV) return vV == eV && rV == VV;
      var kV = -1,
        bV = !0,
        EV = 2 & xV ? new JV : void 0;
      for (QV.set(VV, eV), QV.set(eV, VV); ++kV < wV;) {
        var BV = VV[kV],
          jV = eV[kV];
        if (yV) var qV = nV ? yV(jV, BV, kV, eV, VV, QV) : yV(BV, jV, kV, VV, eV, QV);
        if (void 0 !== qV) {
          if (qV) continue;
          bV = !1;
          break
        }
        if (EV) {
          if (!YV(eV, (function(VV, eV) {
              if (!UV(EV, eV) && (BV === VV || pV(BV, VV, xV, yV, QV))) return EV.push(eV)
            }))) {
            bV = !1;
            break
          }
        } else if (BV !== jV && !pV(BV, jV, xV, yV, QV)) {
          bV = !1;
          break
        }
      }
      return QV.delete(VV), QV.delete(eV), bV
    }
  },
  6220: (VV, eV, xV) => {
    var JV = xV(5691),
      YV = xV(6224),
      UV = xV(5896),
      yV = xV(6180),
      pV = xV(6227),
      QV = xV(6229),
      nV = JV ? JV.prototype : void 0,
      wV = nV ? nV.valueOf : void 0;
    VV.exports = function(VV, eV, xV, JV, nV, ZV, vV) {
      switch (xV) {
        case "[object DataView]":
          if (VV.byteLength != eV.byteLength || VV.byteOffset != eV.byteOffset) return !1;
          VV = VV.buffer, eV = eV.buffer;
        case "[object ArrayBuffer]":
          return !(VV.byteLength != eV.byteLength || !ZV(new YV(VV), new YV(eV)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return UV(+VV, +eV);
        case "[object Error]":
          return VV.name == eV.name && VV.message == eV.message;
        case "[object RegExp]":
        case "[object String]":
          return VV == eV + "";
        case "[object Map]":
          var rV = pV;
        case "[object Set]":
          var kV = 1 & JV;
          if (rV || (rV = QV), VV.size != eV.size && !kV) return !1;
          var bV = vV.get(VV);
          if (bV) return bV == eV;
          JV |= 2, vV.set(VV, eV);
          var EV = yV(rV(VV), rV(eV), JV, nV, ZV, vV);
          return vV.delete(VV), EV;
        case "[object Symbol]":
          if (wV) return wV.call(VV) == wV.call(eV)
      }
      return !1
    }
  },
  6235: (VV, eV, xV) => {
    var JV = xV(6243),
      YV = Object.prototype.hasOwnProperty;
    VV.exports = function(VV, eV, xV, UV, yV, pV) {
      var QV = 1 & xV,
        nV = JV(VV),
        wV = nV.length;
      if (wV != JV(eV).length && !QV) return !1;
      for (var ZV = wV; ZV--;) {
        var vV = nV[ZV];
        if (!(QV ? vV in eV : YV.call(eV, vV))) return !1
      }
      var rV = pV.get(VV),
        kV = pV.get(eV);
      if (rV && kV) return rV == eV && kV == VV;
      var bV = !0;
      pV.set(VV, eV), pV.set(eV, VV);
      for (var EV = QV; ++ZV < wV;) {
        var BV = VV[vV = nV[ZV]],
          jV = eV[vV];
        if (UV) var qV = QV ? UV(jV, BV, vV, eV, VV, pV) : UV(BV, jV, vV, VV, eV, pV);
        if (!(void 0 === qV ? BV === jV || yV(BV, jV, xV, UV, pV) : qV)) {
          bV = !1;
          break
        }
        EV || (EV = "constructor" == vV)
      }
      if (bV && !EV) {
        var tV = VV.constructor,
          FV = eV.constructor;
        tV == FV || !("constructor" in VV) || !("constructor" in eV) || "function" == typeof tV && tV instanceof tV && "function" == typeof FV && FV instanceof FV || (bV = !1)
      }
      return pV.delete(VV), pV.delete(eV), bV
    }
  },
  5650: (VV, eV, xV) => {
    var JV = "object" == typeof xV.g && xV.g && xV.g.Object === Object && xV.g;
    VV.exports = JV
  },
  6243: (VV, eV, xV) => {
    var JV = xV(6246),
      YV = xV(6251),
      UV = xV(6266);
    VV.exports = function(VV) {
      return JV(VV, UV, YV)
    }
  },
  5928: (VV, eV, xV) => {
    var JV = xV(5932);
    VV.exports = function(VV, eV) {
      var xV = VV.__data__;
      return JV(eV) ? xV["string" == typeof eV ? "string" : "hash"] : xV.map
    }
  },
  6362: (VV, eV, xV) => {
    var JV = xV(6370),
      YV = xV(6266);
    VV.exports = function(VV) {
      for (var eV = YV(VV), xV = eV.length; xV--;) {
        var UV = eV[xV],
          yV = VV[UV];
        eV[xV] = [UV, yV, JV(yV)]
      }
      return eV
    }
  },
  5817: (VV, eV, xV) => {
    var JV = xV(5819),
      YV = xV(5838);
    VV.exports = function(VV, eV) {
      var xV = YV(VV, eV);
      return JV(xV) ? xV : void 0
    }
  },
  6860: (VV, eV, xV) => {
    var JV = xV(6334)(Object.getPrototypeOf, Object);
    VV.exports = JV
  },
  5695: (VV, eV, xV) => {
    var JV = xV(5691),
      YV = Object.prototype,
      UV = YV.hasOwnProperty,
      yV = YV.toString,
      pV = JV ? JV.toStringTag : void 0;
    VV.exports = function(VV) {
      var eV = UV.call(VV, pV),
        xV = VV[pV];
      try {
        VV[pV] = void 0;
        var JV = !0
      } catch (QV) {}
      var YV = yV.call(VV);
      return JV && (eV ? VV[pV] = xV : delete VV[pV]), YV
    }
  },
  6251: (VV, eV, xV) => {
    var JV = xV(6257),
      YV = xV(6261),
      UV = Object.prototype.propertyIsEnumerable,
      yV = Object.getOwnPropertySymbols,
      pV = yV ? function(VV) {
        return null == VV ? [] : (VV = Object(VV), JV(yV(VV), (function(eV) {
          return UV.call(VV, eV)
        })))
      } : YV;
    VV.exports = pV
  },
  6340: (VV, eV, xV) => {
    var JV = xV(6344),
      YV = xV(5916),
      UV = xV(6348),
      yV = xV(6350),
      pV = xV(6357),
      QV = xV(5689),
      nV = xV(5834),
      wV = "[object Map]",
      ZV = "[object Promise]",
      vV = "[object Set]",
      rV = "[object WeakMap]",
      kV = "[object DataView]",
      bV = nV(JV),
      EV = nV(YV),
      BV = nV(UV),
      jV = nV(yV),
      qV = nV(pV),
      tV = QV;
    (JV && tV(new JV(new ArrayBuffer(1))) != kV || YV && tV(new YV) != wV || UV && tV(UV.resolve()) != ZV || yV && tV(new yV) != vV || pV && tV(new pV) != rV) && (tV = function(VV) {
      var eV = QV(VV),
        xV = "[object Object]" == eV ? VV.constructor : void 0,
        JV = xV ? nV(xV) : "";
      if (JV) switch (JV) {
        case bV:
          return kV;
        case EV:
          return wV;
        case BV:
          return ZV;
        case jV:
          return vV;
        case qV:
          return rV
      }
      return eV
    }), VV.exports = tV
  },
  5838: VV => {
    VV.exports = function(VV, eV) {
      return null == VV ? void 0 : VV[eV]
    }
  },
  6392: (VV, eV, xV) => {
    var JV = xV(5758),
      YV = xV(6101),
      UV = xV(5724),
      yV = xV(6070),
      pV = xV(6063),
      QV = xV(5966);
    VV.exports = function(VV, eV, xV) {
      for (var nV = -1, wV = (eV = JV(eV, VV)).length, ZV = !1; ++nV < wV;) {
        var vV = QV(eV[nV]);
        if (!(ZV = null != VV && xV(VV, vV))) break;
        VV = VV[vV]
      }
      return ZV || ++nV != wV ? ZV : !!(wV = null == VV ? 0 : VV.length) && pV(wV) && yV(vV, wV) && (UV(VV) || YV(VV))
    }
  },
  6632: VV => {
    var eV = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    VV.exports = function(VV) {
      return eV.test(VV)
    }
  },
  5808: (VV, eV, xV) => {
    var JV = xV(5814);
    VV.exports = function() {
      this.__data__ = JV ? JV(null) : {}, this.size = 0
    }
  },
  5842: VV => {
    VV.exports = function(VV) {
      var eV = this.has(VV) && delete this.__data__[VV];
      return this.size -= eV ? 1 : 0, eV
    }
  },
  5851: (VV, eV, xV) => {
    var JV = xV(5814),
      YV = Object.prototype.hasOwnProperty;
    VV.exports = function(VV) {
      var eV = this.__data__;
      if (JV) {
        var xV = eV[VV];
        return "__lodash_hash_undefined__" === xV ? void 0 : xV
      }
      return YV.call(eV, VV) ? eV[VV] : void 0
    }
  },
  5859: (VV, eV, xV) => {
    var JV = xV(5814),
      YV = Object.prototype.hasOwnProperty;
    VV.exports = function(VV) {
      var eV = this.__data__;
      return JV ? void 0 !== eV[VV] : YV.call(eV, VV)
    }
  },
  5865: (VV, eV, xV) => {
    var JV = xV(5814);
    VV.exports = function(VV, eV) {
      var xV = this.__data__;
      return this.size += this.has(VV) ? 0 : 1, xV[VV] = JV && void 0 === eV ? "__lodash_hash_undefined__" : eV, this
    }
  },
  6096: (VV, eV, xV) => {
    var JV = xV(5691),
      YV = xV(6101),
      UV = xV(5724),
      yV = JV ? JV.isConcatSpreadable : void 0;
    VV.exports = function(VV) {
      return UV(VV) || YV(VV) || !!(yV && VV && VV[yV])
    }
  },
  6070: VV => {
    var eV = /^(?:0|[1-9]\d*)$/;
    VV.exports = function(VV, xV) {
      var JV = typeof VV;
      return !!(xV = null == xV ? 9007199254740991 : xV) && ("number" == JV || "symbol" != JV && eV.test(VV)) && VV > -1 && VV % 1 == 0 && VV < xV
    }
  },
  6052: (VV, eV, xV) => {
    var JV = xV(5896),
      YV = xV(6056),
      UV = xV(6070),
      yV = xV(5631);
    VV.exports = function(VV, eV, xV) {
      if (!yV(xV)) return !1;
      var pV = typeof eV;
      return !!("number" == pV ? YV(xV) && UV(eV, xV.length) : "string" == pV && eV in xV) && JV(xV[eV], VV)
    }
  },
  5765: (VV, eV, xV) => {
    var JV = xV(5724),
      YV = xV(5680),
      UV = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      yV = /^\w*$/;
    VV.exports = function(VV, eV) {
      if (JV(VV)) return !1;
      var xV = typeof VV;
      return !("number" != xV && "symbol" != xV && "boolean" != xV && null != VV && !YV(VV)) || (yV.test(VV) || !UV.test(VV) || null != eV && VV in Object(eV))
    }
  },
  5932: VV => {
    VV.exports = function(VV) {
      var eV = typeof VV;
      return "string" == eV || "number" == eV || "symbol" == eV || "boolean" == eV ? "__proto__" !== VV : null === VV
    }
  },
  5826: (VV, eV, xV) => {
    var JV = xV(5829),
      YV = function() {
        var VV = /[^.]+$/.exec(JV && JV.keys && JV.keys.IE_PROTO || "");
        return VV ? "Symbol(src)_1." + VV : ""
      }();
    VV.exports = function(VV) {
      return !!YV && YV in VV
    }
  },
  6327: VV => {
    var eV = Object.prototype;
    VV.exports = function(VV) {
      var xV = VV && VV.constructor;
      return VV === ("function" == typeof xV && xV.prototype || eV)
    }
  },
  6370: (VV, eV, xV) => {
    var JV = xV(5631);
    VV.exports = function(VV) {
      return VV === VV && !JV(VV)
    }
  },
  5881: VV => {
    VV.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5885: (VV, eV, xV) => {
    var JV = xV(5891),
      YV = Array.prototype.splice;
    VV.exports = function(VV) {
      var eV = this.__data__,
        xV = JV(eV, VV);
      return !(xV < 0) && (xV == eV.length - 1 ? eV.pop() : YV.call(eV, xV, 1), --this.size, !0)
    }
  },
  5902: (VV, eV, xV) => {
    var JV = xV(5891);
    VV.exports = function(VV) {
      var eV = this.__data__,
        xV = JV(eV, VV);
      return xV < 0 ? void 0 : eV[xV][1]
    }
  },
  5907: (VV, eV, xV) => {
    var JV = xV(5891);
    VV.exports = function(VV) {
      return JV(this.__data__, VV) > -1
    }
  },
  5913: (VV, eV, xV) => {
    var JV = xV(5891);
    VV.exports = function(VV, eV) {
      var xV = this.__data__,
        YV = JV(xV, VV);
      return YV < 0 ? (++this.size, xV.push([VV, eV])) : xV[YV][1] = eV, this
    }
  },
  5800: (VV, eV, xV) => {
    var JV = xV(5805),
      YV = xV(5874),
      UV = xV(5916);
    VV.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new JV,
        map: new(UV || YV),
        string: new JV
      }
    }
  },
  5919: (VV, eV, xV) => {
    var JV = xV(5928);
    VV.exports = function(VV) {
      var eV = JV(this, VV).delete(VV);
      return this.size -= eV ? 1 : 0, eV
    }
  },
  5939: (VV, eV, xV) => {
    var JV = xV(5928);
    VV.exports = function(VV) {
      return JV(this, VV).get(VV)
    }
  },
  5944: (VV, eV, xV) => {
    var JV = xV(5928);
    VV.exports = function(VV) {
      return JV(this, VV).has(VV)
    }
  },
  5951: (VV, eV, xV) => {
    var JV = xV(5928);
    VV.exports = function(VV, eV) {
      var xV = JV(this, VV),
        YV = xV.size;
      return xV.set(VV, eV), this.size += xV.size == YV ? 0 : 1, this
    }
  },
  6227: VV => {
    VV.exports = function(VV) {
      var eV = -1,
        xV = Array(VV.size);
      return VV.forEach((function(VV, JV) {
        xV[++eV] = [JV, VV]
      })), xV
    }
  },
  6373: VV => {
    VV.exports = function(VV, eV) {
      return function(xV) {
        return null != xV && (xV[VV] === eV && (void 0 !== eV || VV in Object(xV)))
      }
    }
  },
  5783: (VV, eV, xV) => {
    var JV = xV(5792);
    VV.exports = function(VV) {
      var eV = JV(VV, (function(VV) {
          return 500 === xV.size && xV.clear(), VV
        })),
        xV = eV.cache;
      return eV
    }
  },
  5814: (VV, eV, xV) => {
    var JV = xV(5817)(Object, "create");
    VV.exports = JV
  },
  6331: (VV, eV, xV) => {
    var JV = xV(6334)(Object.keys, Object);
    VV.exports = JV
  },
  6315: (VV, eV, xV) => {
    VV = xV.nmd(VV);
    var JV = xV(5650),
      YV = eV && !eV.nodeType && eV,
      UV = YV && VV && !VV.nodeType && VV,
      yV = UV && UV.exports === YV && JV.process,
      pV = function() {
        try {
          var VV = UV && UV.require && UV.require("util").types;
          return VV || yV && yV.binding && yV.binding("util")
        } catch (eV) {}
      }();
    VV.exports = pV
  },
  5699: VV => {
    var eV = Object.prototype.toString;
    VV.exports = function(VV) {
      return eV.call(VV)
    }
  },
  6334: VV => {
    VV.exports = function(VV, eV) {
      return function(xV) {
        return VV(eV(xV))
      }
    }
  },
  6471: (VV, eV, xV) => {
    var JV = xV(6476),
      YV = Math.max;
    VV.exports = function(VV, eV, xV) {
      return eV = YV(void 0 === eV ? VV.length - 1 : eV, 0),
        function() {
          for (var UV = arguments, yV = -1, pV = YV(UV.length - eV, 0), QV = Array(pV); ++yV < pV;) QV[yV] = UV[eV + yV];
          yV = -1;
          for (var nV = Array(eV + 1); ++yV < eV;) nV[yV] = UV[yV];
          return nV[eV] = xV(QV), JV(VV, this, nV)
        }
    }
  },
  5645: (VV, eV, xV) => {
    var JV = xV(5650),
      YV = "object" == typeof self && self && self.Object === Object && self,
      UV = JV || YV || Function("return this")();
    VV.exports = UV
  },
  6195: VV => {
    VV.exports = function(VV) {
      return this.__data__.set(VV, "__lodash_hash_undefined__"), this
    }
  },
  6203: VV => {
    VV.exports = function(VV) {
      return this.__data__.has(VV)
    }
  },
  6229: VV => {
    VV.exports = function(VV) {
      var eV = -1,
        xV = Array(VV.size);
      return VV.forEach((function(VV) {
        xV[++eV] = VV
      })), xV
    }
  },
  6482: (VV, eV, xV) => {
    var JV = xV(6489),
      YV = xV(6507)(JV);
    VV.exports = YV
  },
  6507: VV => {
    var eV = Date.now;
    VV.exports = function(VV) {
      var xV = 0,
        JV = 0;
      return function() {
        var YV = eV(),
          UV = 16 - (YV - JV);
        if (JV = YV, UV > 0) {
          if (++xV >= 800) return arguments[0]
        } else xV = 0;
        return VV.apply(void 0, arguments)
      }
    }
  },
  6144: (VV, eV, xV) => {
    var JV = xV(5874);
    VV.exports = function() {
      this.__data__ = new JV, this.size = 0
    }
  },
  6147: VV => {
    VV.exports = function(VV) {
      var eV = this.__data__,
        xV = eV.delete(VV);
      return this.size = eV.size, xV
    }
  },
  6152: VV => {
    VV.exports = function(VV) {
      return this.__data__.get(VV)
    }
  },
  6159: VV => {
    VV.exports = function(VV) {
      return this.__data__.has(VV)
    }
  },
  6166: (VV, eV, xV) => {
    var JV = xV(5874),
      YV = xV(5916),
      UV = xV(5795);
    VV.exports = function(VV, eV) {
      var xV = this.__data__;
      if (xV instanceof JV) {
        var yV = xV.__data__;
        if (!YV || yV.length < 199) return yV.push([VV, eV]), this.size = ++xV.size, this;
        xV = this.__data__ = new UV(yV)
      }
      return xV.set(VV, eV), this.size = xV.size, this
    }
  },
  6580: VV => {
    VV.exports = function(VV, eV, xV) {
      for (var JV = xV - 1, YV = VV.length; ++JV < YV;)
        if (VV[JV] === eV) return JV;
      return -1
    }
  },
  6640: (VV, eV, xV) => {
    var JV = xV(6644),
      YV = xV(6632),
      UV = xV(6647);
    VV.exports = function(VV) {
      return YV(VV) ? UV(VV) : JV(VV)
    }
  },
  5774: (VV, eV, xV) => {
    var JV = xV(5783),
      YV = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      UV = /\\(\\)?/g,
      yV = JV((function(VV) {
        var eV = [];
        return 46 === VV.charCodeAt(0) && eV.push(""), VV.replace(YV, (function(VV, xV, JV, YV) {
          eV.push(JV ? YV.replace(UV, "$1") : xV || VV)
        })), eV
      }));
    VV.exports = yV
  },
  5966: (VV, eV, xV) => {
    var JV = xV(5680);
    VV.exports = function(VV) {
      if ("string" == typeof VV || JV(VV)) return VV;
      var eV = VV + "";
      return "0" == eV && 1 / VV == -1 / 0 ? "-0" : eV
    }
  },
  5834: VV => {
    var eV = Function.prototype.toString;
    VV.exports = function(VV) {
      if (null != VV) {
        try {
          return eV.call(VV)
        } catch (xV) {}
        try {
          return VV + ""
        } catch (xV) {}
      }
      return ""
    }
  },
  5673: VV => {
    var eV = /\s/;
    VV.exports = function(VV) {
      for (var xV = VV.length; xV-- && eV.test(VV.charAt(xV)););
      return xV
    }
  },
  6647: VV => {
    var eV = "\\ud800-\\udfff",
      xV = "[" + eV + "]",
      JV = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      YV = "\\ud83c[\\udffb-\\udfff]",
      UV = "[^" + eV + "]",
      yV = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      pV = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      QV = "(?:" + JV + "|" + YV + ")" + "?",
      nV = "[\\ufe0e\\ufe0f]?",
      wV = nV + QV + ("(?:\\u200d(?:" + [UV, yV, pV].join("|") + ")" + nV + QV + ")*"),
      ZV = "(?:" + [UV + JV + "?", JV, yV, pV, xV].join("|") + ")",
      vV = RegExp(YV + "(?=" + YV + ")|" + ZV + wV, "g");
    VV.exports = function(VV) {
      return VV.match(vV) || []
    }
  },
  6496: VV => {
    VV.exports = function(VV) {
      return function() {
        return VV
      }
    }
  },
  5622: (VV, eV, xV) => {
    var JV = xV(5631),
      YV = xV(5640),
      UV = xV(5658),
      yV = Math.max,
      pV = Math.min;
    VV.exports = function(VV, eV, xV) {
      var QV, nV, wV, ZV, vV, rV, kV = 0,
        bV = !1,
        EV = !1,
        BV = !0;
      if ("function" != typeof VV) throw new TypeError("Expected a function");

      function jV(eV) {
        var xV = QV,
          JV = nV;
        return QV = nV = void 0, kV = eV, ZV = VV.apply(JV, xV)
      }

      function qV(VV) {
        var xV = VV - rV;
        return void 0 === rV || xV >= eV || xV < 0 || EV && VV - kV >= wV
      }

      function tV() {
        var VV = YV();
        if (qV(VV)) return FV(VV);
        vV = setTimeout(tV, function(VV) {
          var xV = eV - (VV - rV);
          return EV ? pV(xV, wV - (VV - kV)) : xV
        }(VV))
      }

      function FV(VV) {
        return vV = void 0, BV && QV ? jV(VV) : (QV = nV = void 0, ZV)
      }

      function TV() {
        var VV = YV(),
          xV = qV(VV);
        if (QV = arguments, nV = this, rV = VV, xV) {
          if (void 0 === vV) return function(VV) {
            return kV = VV, vV = setTimeout(tV, eV), bV ? jV(VV) : ZV
          }(rV);
          if (EV) return clearTimeout(vV), vV = setTimeout(tV, eV), jV(rV)
        }
        return void 0 === vV && (vV = setTimeout(tV, eV)), ZV
      }
      return eV = UV(eV) || 0, JV(xV) && (bV = !!xV.leading, wV = (EV = "maxWait" in xV) ? yV(UV(xV.maxWait) || 0, eV) : wV, BV = "trailing" in xV ? !!xV.trailing : BV), TV.cancel = function() {
        void 0 !== vV && clearTimeout(vV), kV = 0, QV = rV = nV = vV = void 0
      }, TV.flush = function() {
        return void 0 === vV ? ZV : FV(YV())
      }, TV
    }
  },
  5896: VV => {
    VV.exports = function(VV, eV) {
      return VV === eV || VV !== VV && eV !== eV
    }
  },
  6813: (VV, eV, xV) => {
    var JV = xV(6818),
      YV = xV(6821),
      UV = xV(6119),
      yV = xV(5724),
      pV = xV(6052);
    VV.exports = function(VV, eV, xV) {
      var QV = yV(VV) ? JV : YV;
      return xV && pV(VV, eV, xV) && (eV = void 0), QV(VV, UV(eV, 3))
    }
  },
  6891: (VV, eV, xV) => {
    var JV = xV(6899)(xV(6905));
    VV.exports = JV
  },
  6905: (VV, eV, xV) => {
    var JV = xV(6566),
      YV = xV(6119),
      UV = xV(6913),
      yV = Math.max;
    VV.exports = function(VV, eV, xV) {
      var pV = null == VV ? 0 : VV.length;
      if (!pV) return -1;
      var QV = null == xV ? 0 : UV(xV);
      return QV < 0 && (QV = yV(pV + QV, 0)), JV(VV, YV(eV, 3), QV)
    }
  },
  6741: (VV, eV, xV) => {
    var JV = xV(6086),
      YV = xV(6746);
    VV.exports = function(VV, eV) {
      return JV(YV(VV, eV), 1)
    }
  },
  5746: (VV, eV, xV) => {
    var JV = xV(5752);
    VV.exports = function(VV, eV, xV) {
      var YV = null == VV ? void 0 : JV(VV, eV);
      return void 0 === YV ? xV : YV
    }
  },
  6380: (VV, eV, xV) => {
    var JV = xV(6386),
      YV = xV(6392);
    VV.exports = function(VV, eV) {
      return null != VV && YV(VV, eV, JV)
    }
  },
  6398: VV => {
    VV.exports = function(VV) {
      return VV
    }
  },
  6101: (VV, eV, xV) => {
    var JV = xV(6108),
      YV = xV(5705),
      UV = Object.prototype,
      yV = UV.hasOwnProperty,
      pV = UV.propertyIsEnumerable,
      QV = JV(function() {
        return arguments
      }()) ? JV : function(VV) {
        return YV(VV) && yV.call(VV, "callee") && !pV.call(VV, "callee")
      };
    VV.exports = QV
  },
  5724: VV => {
    var eV = Array.isArray;
    VV.exports = eV
  },
  6056: (VV, eV, xV) => {
    var JV = xV(5824),
      YV = xV(6063);
    VV.exports = function(VV) {
      return null != VV && YV(VV.length) && !JV(VV)
    }
  },
  6866: (VV, eV, xV) => {
    var JV = xV(5689),
      YV = xV(5705);
    VV.exports = function(VV) {
      return !0 === VV || !1 === VV || YV(VV) && "[object Boolean]" == JV(VV)
    }
  },
  6287: (VV, eV, xV) => {
    VV = xV.nmd(VV);
    var JV = xV(5645),
      YV = xV(6289),
      UV = eV && !eV.nodeType && eV,
      yV = UV && VV && !VV.nodeType && VV,
      pV = yV && yV.exports === UV ? JV.nZ : void 0,
      QV = (pV ? pV.isBuffer : void 0) || YV;
    VV.exports = QV
  },
  6752: (VV, eV, xV) => {
    var JV = xV(6171);
    VV.exports = function(VV, eV) {
      return JV(VV, eV)
    }
  },
  5824: (VV, eV, xV) => {
    var JV = xV(5689),
      YV = xV(5631);
    VV.exports = function(VV) {
      if (!YV(VV)) return !1;
      var eV = JV(VV);
      return "[object Function]" == eV || "[object GeneratorFunction]" == eV || "[object AsyncFunction]" == eV || "[object Proxy]" == eV
    }
  },
  6063: VV => {
    VV.exports = function(VV) {
      return "number" == typeof VV && VV > -1 && VV % 1 == 0 && VV <= 9007199254740991
    }
  },
  5731: (VV, eV, xV) => {
    var JV = xV(5739);
    VV.exports = function(VV) {
      return JV(VV) && VV != +VV
    }
  },
  5974: VV => {
    VV.exports = function(VV) {
      return null == VV
    }
  },
  5739: (VV, eV, xV) => {
    var JV = xV(5689),
      YV = xV(5705);
    VV.exports = function(VV) {
      return "number" == typeof VV || YV(VV) && "[object Number]" == JV(VV)
    }
  },
  5631: VV => {
    VV.exports = function(VV) {
      var eV = typeof VV;
      return null != VV && ("object" == eV || "function" == eV)
    }
  },
  5705: VV => {
    VV.exports = function(VV) {
      return null != VV && "object" == typeof VV
    }
  },
  6856: (VV, eV, xV) => {
    var JV = xV(5689),
      YV = xV(6860),
      UV = xV(5705),
      yV = Function.prototype,
      pV = Object.prototype,
      QV = yV.toString,
      nV = pV.hasOwnProperty,
      wV = QV.call(Object);
    VV.exports = function(VV) {
      if (!UV(VV) || "[object Object]" != JV(VV)) return !1;
      var eV = YV(VV);
      if (null === eV) return !0;
      var xV = nV.call(eV, "constructor") && eV.constructor;
      return "function" == typeof xV && xV instanceof xV && QV.call(xV) == wV
    }
  },
  5716: (VV, eV, xV) => {
    var JV = xV(5689),
      YV = xV(5724),
      UV = xV(5705);
    VV.exports = function(VV) {
      return "string" == typeof VV || !YV(VV) && UV(VV) && "[object String]" == JV(VV)
    }
  },
  5680: (VV, eV, xV) => {
    var JV = xV(5689),
      YV = xV(5705);
    VV.exports = function(VV) {
      return "symbol" == typeof VV || YV(VV) && "[object Symbol]" == JV(VV)
    }
  },
  6297: (VV, eV, xV) => {
    var JV = xV(6303),
      YV = xV(6308),
      UV = xV(6315),
      yV = UV && UV.isTypedArray,
      pV = yV ? YV(yV) : JV;
    VV.exports = pV
  },
  6266: (VV, eV, xV) => {
    var JV = xV(6275),
      YV = xV(6323),
      UV = xV(6056);
    VV.exports = function(VV) {
      return UV(VV) ? JV(VV) : YV(VV)
    }
  },
  6841: VV => {
    VV.exports = function(VV) {
      var eV = null == VV ? 0 : VV.length;
      return eV ? VV[eV - 1] : void 0
    }
  },
  6746: (VV, eV, xV) => {
    var JV = xV(5963),
      YV = xV(6119),
      UV = xV(6419),
      yV = xV(5724);
    VV.exports = function(VV, eV) {
      return (yV(VV) ? JV : UV)(VV, YV(eV, 3))
    }
  },
  6798: (VV, eV, xV) => {
    var JV = xV(6805),
      YV = xV(6428),
      UV = xV(6119);
    VV.exports = function(VV, eV) {
      var xV = {};
      return eV = UV(eV, 3), YV(VV, (function(VV, YV, UV) {
        JV(xV, YV, eV(VV, YV, UV))
      })), xV
    }
  },
  6715: (VV, eV, xV) => {
    var JV = xV(6719),
      YV = xV(6721),
      UV = xV(6398);
    VV.exports = function(VV) {
      return VV && VV.length ? JV(VV, UV, YV) : void 0
    }
  },
  5792: (VV, eV, xV) => {
    var JV = xV(5795);

    function YV(VV, eV) {
      if ("function" != typeof VV || null != eV && "function" != typeof eV) throw new TypeError("Expected a function");
      var xV = function() {
        var JV = arguments,
          YV = eV ? eV.apply(this, JV) : JV[0],
          UV = xV.cache;
        if (UV.has(YV)) return UV.get(YV);
        var yV = VV.apply(this, JV);
        return xV.cache = UV.set(YV, yV) || UV, yV
      };
      return xV.cache = new(YV.Cache || JV), xV
    }
    YV.Cache = JV, VV.exports = YV
  },
  6729: (VV, eV, xV) => {
    var JV = xV(6719),
      YV = xV(6732),
      UV = xV(6398);
    VV.exports = function(VV) {
      return VV && VV.length ? JV(VV, UV, YV) : void 0
    }
  },
  6592: VV => {
    VV.exports = function() {}
  },
  5640: (VV, eV, xV) => {
    var JV = xV(5645);
    VV.exports = function() {
      return JV.Date.now()
    }
  },
  6400: (VV, eV, xV) => {
    var JV = xV(6407),
      YV = xV(6412),
      UV = xV(5765),
      yV = xV(5966);
    VV.exports = function(VV) {
      return UV(VV) ? JV(yV(VV)) : YV(VV)
    }
  },
  6037: (VV, eV, xV) => {
    var JV = xV(6042)();
    VV.exports = JV
  },
  6875: (VV, eV, xV) => {
    var JV = xV(6207),
      YV = xV(6119),
      UV = xV(6878),
      yV = xV(5724),
      pV = xV(6052);
    VV.exports = function(VV, eV, xV) {
      var QV = yV(VV) ? JV : UV;
      return xV && pV(VV, eV, xV) && (eV = void 0), QV(VV, YV(eV, 3))
    }
  },
  6082: (VV, eV, xV) => {
    var JV = xV(6086),
      YV = xV(6114),
      UV = xV(6467),
      yV = xV(6052),
      pV = UV((function(VV, eV) {
        if (null == VV) return [];
        var xV = eV.length;
        return xV > 1 && yV(VV, eV[0], eV[1]) ? eV = [] : xV > 2 && yV(eV[0], eV[1], eV[2]) && (eV = [eV[0]]), YV(VV, JV(eV, 1), [])
      }));
    VV.exports = pV
  },
  6261: VV => {
    VV.exports = function() {
      return []
    }
  },
  6289: VV => {
    VV.exports = function() {
      return !1
    }
  },
  5614: (VV, eV, xV) => {
    var JV = xV(5622),
      YV = xV(5631);
    VV.exports = function(VV, eV, xV) {
      var UV = !0,
        yV = !0;
      if ("function" != typeof VV) throw new TypeError("Expected a function");
      return YV(xV) && (UV = "leading" in xV ? !!xV.leading : UV, yV = "trailing" in xV ? !!xV.trailing : yV), JV(VV, eV, {
        leading: UV,
        maxWait: eV,
        trailing: yV
      })
    }
  },
  6074: (VV, eV, xV) => {
    var JV = xV(5658),
      YV = 1 / 0;
    VV.exports = function(VV) {
      return VV ? (VV = JV(VV)) === YV || VV === -1 / 0 ? 17976931348623157e292 * (VV < 0 ? -1 : 1) : VV === VV ? VV : 0 : 0 === VV ? VV : 0
    }
  },
  6913: (VV, eV, xV) => {
    var JV = xV(6074);
    VV.exports = function(VV) {
      var eV = JV(VV),
        xV = eV % 1;
      return eV === eV ? xV ? eV - xV : eV : 0
    }
  },
  5658: (VV, eV, xV) => {
    var JV = xV(5667),
      YV = xV(5631),
      UV = xV(5680),
      yV = /^[-+]0x[0-9a-f]+$/i,
      pV = /^0b[01]+$/i,
      QV = /^0o[0-7]+$/i,
      nV = parseInt;
    VV.exports = function(VV) {
      if ("number" == typeof VV) return VV;
      if (UV(VV)) return NaN;
      if (YV(VV)) {
        var eV = "function" == typeof VV.valueOf ? VV.valueOf() : VV;
        VV = YV(eV) ? eV + "" : eV
      }
      if ("string" != typeof VV) return 0 === VV ? VV : +VV;
      VV = JV(VV);
      var xV = pV.test(VV);
      return xV || QV.test(VV) ? nV(VV.slice(2), xV ? 2 : 8) : yV.test(VV) ? NaN : +VV
    }
  },
  5955: (VV, eV, xV) => {
    var JV = xV(5961);
    VV.exports = function(VV) {
      return null == VV ? "" : JV(VV)
    }
  },
  6540: (VV, eV, xV) => {
    var JV = xV(6119),
      YV = xV(6549);
    VV.exports = function(VV, eV) {
      return VV && VV.length ? YV(VV, JV(eV, 2)) : []
    }
  },
  6612: (VV, eV, xV) => {
    var JV = xV(6614)("toUpperCase");
    VV.exports = JV
  },
  6672: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => Ce
    });
    var JV = xV(62),
      YV = xV(5453),
      UV = xV.n(YV);
    const {
      getOwnPropertyNames: yV,
      getOwnPropertySymbols: pV
    } = Object, {
      hasOwnProperty: QV
    } = Object.prototype;

    function nV(VV, eV) {
      return function(xV, JV, YV) {
        return VV(xV, JV, YV) && eV(xV, JV, YV)
      }
    }

    function wV(VV) {
      return function(eV, xV, JV) {
        if (!eV || !xV || "object" !== typeof eV || "object" !== typeof xV) return VV(eV, xV, JV);
        const {
          cache: YV
        } = JV, UV = YV.get(eV), yV = YV.get(xV);
        if (UV && yV) return UV === xV && yV === eV;
        YV.set(eV, xV), YV.set(xV, eV);
        const pV = VV(eV, xV, JV);
        return YV.delete(eV), YV.delete(xV), pV
      }
    }

    function ZV(VV) {
      return yV(VV).concat(pV(VV))
    }
    const vV = Object.hasOwn || ((VV, eV) => QV.call(VV, eV));

    function rV(VV, eV) {
      return VV === eV || !VV && !eV && VV !== VV && eV !== eV
    }
    const {
      getOwnPropertyDescriptor: kV,
      keys: bV
    } = Object;

    function EV(VV, eV) {
      return VV.byteLength === eV.byteLength && GV(new Uint8Array(VV), new Uint8Array(eV))
    }

    function BV(VV, eV, xV) {
      let JV = VV.length;
      if (eV.length !== JV) return !1;
      for (; JV-- > 0;)
        if (!xV.equals(VV[JV], eV[JV], JV, JV, VV, eV, xV)) return !1;
      return !0
    }

    function jV(VV, eV) {
      return VV.byteLength === eV.byteLength && GV(new Uint8Array(VV.buffer, VV.byteOffset, VV.byteLength), new Uint8Array(eV.buffer, eV.byteOffset, eV.byteLength))
    }

    function qV(VV, eV) {
      return rV(VV.getTime(), eV.getTime())
    }

    function tV(VV, eV) {
      return VV.name === eV.name && VV.message === eV.message && VV.cause === eV.cause && VV.stack === eV.stack
    }

    function FV(VV, eV) {
      return VV === eV
    }

    function TV(VV, eV, xV) {
      const JV = VV.size;
      if (JV !== eV.size) return !1;
      if (!JV) return !0;
      const YV = new Array(JV),
        UV = VV.entries();
      let yV, pV, QV = 0;
      for (;
        (yV = UV.next()) && !yV.done;) {
        const JV = eV.entries();
        let UV = !1,
          nV = 0;
        for (;
          (pV = JV.next()) && !pV.done;) {
          if (YV[nV]) {
            nV++;
            continue
          }
          const JV = yV.value,
            wV = pV.value;
          if (xV.equals(JV[0], wV[0], QV, nV, VV, eV, xV) && xV.equals(JV[1], wV[1], JV[0], wV[0], VV, eV, xV)) {
            UV = YV[nV] = !0;
            break
          }
          nV++
        }
        if (!UV) return !1;
        QV++
      }
      return !0
    }
    const PV = rV;

    function AV(VV, eV, xV) {
      const JV = bV(VV);
      let YV = JV.length;
      if (bV(eV).length !== YV) return !1;
      for (; YV-- > 0;)
        if (!RV(VV, eV, xV, JV[YV])) return !1;
      return !0
    }

    function NV(VV, eV, xV) {
      const JV = ZV(VV);
      let YV, UV, yV, pV = JV.length;
      if (ZV(eV).length !== pV) return !1;
      for (; pV-- > 0;) {
        if (YV = JV[pV], !RV(VV, eV, xV, YV)) return !1;
        if (UV = kV(VV, YV), yV = kV(eV, YV), (UV || yV) && (!UV || !yV || UV.configurable !== yV.configurable || UV.enumerable !== yV.enumerable || UV.writable !== yV.writable)) return !1
      }
      return !0
    }

    function XV(VV, eV) {
      return rV(VV.valueOf(), eV.valueOf())
    }

    function MV(VV, eV) {
      return VV.source === eV.source && VV.flags === eV.flags
    }

    function zV(VV, eV, xV) {
      const JV = VV.size;
      if (JV !== eV.size) return !1;
      if (!JV) return !0;
      const YV = new Array(JV),
        UV = VV.values();
      let yV, pV;
      for (;
        (yV = UV.next()) && !yV.done;) {
        const JV = eV.values();
        let UV = !1,
          QV = 0;
        for (;
          (pV = JV.next()) && !pV.done;) {
          if (!YV[QV] && xV.equals(yV.value, pV.value, yV.value, pV.value, VV, eV, xV)) {
            UV = YV[QV] = !0;
            break
          }
          QV++
        }
        if (!UV) return !1
      }
      return !0
    }

    function GV(VV, eV) {
      let xV = VV.byteLength;
      if (eV.byteLength !== xV || VV.byteOffset !== eV.byteOffset) return !1;
      for (; xV-- > 0;)
        if (VV[xV] !== eV[xV]) return !1;
      return !0
    }

    function WV(VV, eV) {
      return VV.hostname === eV.hostname && VV.pathname === eV.pathname && VV.protocol === eV.protocol && VV.port === eV.port && VV.hash === eV.hash && VV.username === eV.username && VV.password === eV.password
    }

    function RV(VV, eV, xV, JV) {
      return !("_owner" !== JV && "__o" !== JV && "__v" !== JV || !VV.$$typeof && !eV.$$typeof) || vV(eV, JV) && xV.equals(VV[JV], eV[JV], JV, JV, VV, eV, xV)
    }
    const gV = {
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
      DV = Object.prototype.toString;

    function iV(VV) {
      let {
        areArrayBuffersEqual: eV,
        areArraysEqual: xV,
        areDataViewsEqual: JV,
        areDatesEqual: YV,
        areErrorsEqual: UV,
        areFunctionsEqual: yV,
        areMapsEqual: pV,
        areNumbersEqual: QV,
        areObjectsEqual: nV,
        arePrimitiveWrappersEqual: wV,
        areRegExpsEqual: ZV,
        areSetsEqual: vV,
        areTypedArraysEqual: rV,
        areUrlsEqual: kV,
        unknownTagComparators: bV
      } = VV;
      return function(VV, EV, BV) {
        if (VV === EV) return !0;
        if (null == VV || null == EV) return !1;
        const jV = typeof VV;
        if (jV !== typeof EV) return !1;
        if ("object" !== jV) return "number" === jV ? QV(VV, EV, BV) : "function" === jV && yV(VV, EV, BV);
        const qV = VV.constructor;
        if (qV !== EV.constructor) return !1;
        if (qV === Object) return nV(VV, EV, BV);
        if (Array.isArray(VV)) return xV(VV, EV, BV);
        if (qV === Date) return YV(VV, EV, BV);
        if (qV === RegExp) return ZV(VV, EV, BV);
        if (qV === Map) return pV(VV, EV, BV);
        if (qV === Set) return vV(VV, EV, BV);
        const tV = DV.call(VV);
        if ("[object Date]" === tV) return YV(VV, EV, BV);
        if ("[object RegExp]" === tV) return ZV(VV, EV, BV);
        if ("[object Map]" === tV) return pV(VV, EV, BV);
        if ("[object Set]" === tV) return vV(VV, EV, BV);
        if ("[object Object]" === tV) return "function" !== typeof VV.then && "function" !== typeof EV.then && nV(VV, EV, BV);
        if ("[object URL]" === tV) return kV(VV, EV, BV);
        if ("[object Error]" === tV) return UV(VV, EV, BV);
        if ("[object Arguments]" === tV) return nV(VV, EV, BV);
        if (gV[tV]) return rV(VV, EV, BV);
        if ("[object ArrayBuffer]" === tV) return eV(VV, EV, BV);
        if ("[object DataView]" === tV) return JV(VV, EV, BV);
        if ("[object Boolean]" === tV || "[object Number]" === tV || "[object String]" === tV) return wV(VV, EV, BV);
        if (bV) {
          let eV = bV[tV];
          if (!eV) {
            const xV = null != (FV = VV) ? FV[Symbol.toStringTag] : void 0;
            xV && (eV = bV[xV])
          }
          if (eV) return eV(VV, EV, BV)
        }
        var FV;
        return !1
      }
    }
    const CV = aV();
    aV({
      strict: !0
    }), aV({
      circular: !0
    }), aV({
      circular: !0,
      strict: !0
    }), aV({
      createInternalComparator: () => rV
    }), aV({
      strict: !0,
      createInternalComparator: () => rV
    }), aV({
      circular: !0,
      createInternalComparator: () => rV
    }), aV({
      circular: !0,
      createInternalComparator: () => rV,
      strict: !0
    });

    function aV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: eV = !1,
        createInternalComparator: xV,
        createState: JV,
        strict: YV = !1
      } = VV, UV = function(VV) {
        let {
          circular: eV,
          createCustomConfig: xV,
          strict: JV
        } = VV, YV = {
          areArrayBuffersEqual: EV,
          areArraysEqual: JV ? NV : BV,
          areDataViewsEqual: jV,
          areDatesEqual: qV,
          areErrorsEqual: tV,
          areFunctionsEqual: FV,
          areMapsEqual: JV ? nV(TV, NV) : TV,
          areNumbersEqual: PV,
          areObjectsEqual: JV ? NV : AV,
          arePrimitiveWrappersEqual: XV,
          areRegExpsEqual: MV,
          areSetsEqual: JV ? nV(zV, NV) : zV,
          areTypedArraysEqual: JV ? nV(GV, NV) : GV,
          areUrlsEqual: WV,
          unknownTagComparators: void 0
        };
        if (xV && (YV = Object.assign({}, YV, xV(YV))), eV) {
          const VV = wV(YV.areArraysEqual),
            eV = wV(YV.areMapsEqual),
            xV = wV(YV.areObjectsEqual),
            JV = wV(YV.areSetsEqual);
          YV = Object.assign({}, YV, {
            areArraysEqual: VV,
            areMapsEqual: eV,
            areObjectsEqual: xV,
            areSetsEqual: JV
          })
        }
        return YV
      }(VV), yV = iV(UV);
      var pV;
      return function(VV) {
        let {
          circular: eV,
          comparator: xV,
          createState: JV,
          equals: YV,
          strict: UV
        } = VV;
        if (JV) return function(VV, yV) {
          const {
            cache: pV = (eV ? new WeakMap : void 0),
            meta: QV
          } = JV();
          return xV(VV, yV, {
            cache: pV,
            equals: YV,
            meta: QV,
            strict: UV
          })
        };
        if (eV) return function(VV, eV) {
          return xV(VV, eV, {
            cache: new WeakMap,
            equals: YV,
            meta: void 0,
            strict: UV
          })
        };
        const yV = {
          cache: void 0,
          equals: YV,
          meta: void 0,
          strict: UV
        };
        return function(VV, eV) {
          return xV(VV, eV, yV)
        }
      }({
        circular: eV,
        comparator: yV,
        createState: JV,
        equals: xV ? xV(yV) : (pV = yV, function(VV, eV, xV, JV, YV, UV, yV) {
          return pV(VV, eV, yV)
        }),
        strict: YV
      })
    }

    function oV(VV) {
      var eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        xV = -1;
      requestAnimationFrame((function JV(YV) {
        xV < 0 && (xV = YV), YV - xV > eV ? (VV(YV), xV = -1) : function(VV) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(VV)
        }(JV)
      }))
    }

    function cV(VV) {
      return cV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, cV(VV)
    }

    function hV(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV) {
        if ("undefined" !== typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
      }(VV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return lV(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return lV(VV, eV)
      }(VV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function LV() {
      var VV = function() {
          return null
        },
        eV = !1,
        xV = function xV(JV) {
          if (!eV) {
            if (Array.isArray(JV)) {
              if (!JV.length) return;
              var YV = hV(JV),
                UV = YV[0],
                yV = YV.slice(1);
              return "number" === typeof UV ? void oV(xV.bind(null, yV), UV) : (xV(UV), void oV(xV.bind(null, yV)))
            }
            "object" === cV(JV) && VV(JV), "function" === typeof JV && JV()
          }
        };
      return {
        stop: function() {
          eV = !0
        },
        start: function(VV) {
          eV = !1, xV(VV)
        },
        subscribe: function(eV) {
          return VV = eV,
            function() {
              VV = function() {
                return null
              }
            }
        }
      }
    }

    function fV(VV) {
      return fV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, fV(VV)
    }

    function mV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function KV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? mV(Object(xV), !0).forEach((function(eV) {
          HV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : mV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function HV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" !== fV(VV) || null === VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" !== fV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" === fV(eV) ? eV : String(eV)
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }
    var uV = function(VV) {
        return VV
      },
      sV = function(VV, eV) {
        return Object.keys(eV).reduce((function(xV, JV) {
          return KV(KV({}, xV), {}, HV({}, JV, VV(JV, eV[JV])))
        }), {})
      },
      SV = function(VV, eV, xV) {
        return VV.map((function(VV) {
          return "".concat((JV = VV, JV.replace(/([A-Z])/g, (function(VV) {
            return "-".concat(VV.toLowerCase())
          }))), " ").concat(eV, "ms ").concat(xV);
          var JV
        })).join(",")
      };

    function IV(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        var xV = null == VV ? null : "undefined" != typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
        if (null != xV) {
          var JV, YV, UV, yV, pV = [],
            QV = !0,
            nV = !1;
          try {
            if (UV = (xV = xV.call(VV)).next, 0 === eV) {
              if (Object(xV) !== xV) return;
              QV = !1
            } else
              for (; !(QV = (JV = UV.call(xV)).done) && (pV.push(JV.value), pV.length !== eV); QV = !0);
          } catch (VV) {
            nV = !0, YV = VV
          } finally {
            try {
              if (!QV && null != xV.return && (yV = xV.return(), Object(yV) !== yV)) return
            } finally {
              if (nV) throw YV
            }
          }
          return pV
        }
      }(VV, eV) || OV(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function dV(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return Ve(VV)
      }(VV) || function(VV) {
        if ("undefined" !== typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
      }(VV) || OV(VV) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OV(VV, eV) {
      if (VV) {
        if ("string" === typeof VV) return Ve(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        return "Object" === xV && VV.constructor && (xV = VV.constructor.name), "Map" === xV || "Set" === xV ? Array.from(VV) : "Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV) ? Ve(VV, eV) : void 0
      }
    }

    function Ve(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }
    var ee = 1e-4,
      xe = function(VV, eV) {
        return [0, 3 * VV, 3 * eV - 6 * VV, 3 * VV - 3 * eV + 1]
      },
      Je = function(VV, eV) {
        return VV.map((function(VV, xV) {
          return VV * Math.pow(eV, xV)
        })).reduce((function(VV, eV) {
          return VV + eV
        }))
      },
      Ye = function(VV, eV) {
        return function(xV) {
          var JV = xe(VV, eV);
          return Je(JV, xV)
        }
      },
      Ue = function() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        var JV = eV[0],
          YV = eV[1],
          UV = eV[2],
          yV = eV[3];
        if (1 === eV.length) switch (eV[0]) {
          case "linear":
            JV = 0, YV = 0, UV = 1, yV = 1;
            break;
          case "ease":
            JV = .25, YV = .1, UV = .25, yV = 1;
            break;
          case "ease-in":
            JV = .42, YV = 0, UV = 1, yV = 1;
            break;
          case "ease-out":
            JV = .42, YV = 0, UV = .58, yV = 1;
            break;
          case "ease-in-out":
            JV = 0, YV = 0, UV = .58, yV = 1;
            break;
          default:
            var pV = eV[0].split("(");
            if ("cubic-bezier" === pV[0] && 4 === pV[1].split(")")[0].split(",").length) {
              var QV = IV(pV[1].split(")")[0].split(",").map((function(VV) {
                return parseFloat(VV)
              })), 4);
              JV = QV[0], YV = QV[1], UV = QV[2], yV = QV[3]
            }
        } [JV, UV, YV, yV].every((function(VV) {
          return "number" === typeof VV && VV >= 0 && VV <= 1
        }));
        var nV, wV, ZV = Ye(JV, UV),
          vV = Ye(YV, yV),
          rV = (nV = JV, wV = UV, function(VV) {
            var eV = xe(nV, wV),
              xV = [].concat(dV(eV.map((function(VV, eV) {
                return VV * eV
              })).slice(1)), [0]);
            return Je(xV, VV)
          }),
          kV = function(VV) {
            for (var eV, xV = VV > 1 ? 1 : VV, JV = xV, YV = 0; YV < 8; ++YV) {
              var UV = ZV(JV) - xV,
                yV = rV(JV);
              if (Math.abs(UV - xV) < ee || yV < ee) return vV(JV);
              JV = (eV = JV - UV / yV) > 1 ? 1 : eV < 0 ? 0 : eV
            }
            return vV(JV)
          };
        return kV.isStepper = !1, kV
      },
      ye = function() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        var JV = eV[0];
        if ("string" === typeof JV) switch (JV) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return Ue(JV);
          case "spring":
            return function() {
              var VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                eV = VV.stiff,
                xV = void 0 === eV ? 100 : eV,
                JV = VV.damping,
                YV = void 0 === JV ? 8 : JV,
                UV = VV.dt,
                yV = void 0 === UV ? 17 : UV,
                pV = function(VV, eV, JV) {
                  var UV = JV + (-(VV - eV) * xV - JV * YV) * yV / 1e3,
                    pV = JV * yV / 1e3 + VV;
                  return Math.abs(pV - eV) < ee && Math.abs(UV) < ee ? [eV, 0] : [pV, UV]
                };
              return pV.isStepper = !0, pV.dt = yV, pV
            }();
          default:
            if ("cubic-bezier" === JV.split("(")[0]) return Ue(JV)
        }
        return "function" === typeof JV ? JV : null
      };

    function pe(VV) {
      return pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, pe(VV)
    }

    function Qe(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return ke(VV)
      }(VV) || function(VV) {
        if ("undefined" !== typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
      }(VV) || re(VV) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ne(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function we(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? ne(Object(xV), !0).forEach((function(eV) {
          Ze(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : ne(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function Ze(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" !== pe(VV) || null === VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" !== pe(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" === pe(eV) ? eV : String(eV)
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function ve(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        var xV = null == VV ? null : "undefined" != typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
        if (null != xV) {
          var JV, YV, UV, yV, pV = [],
            QV = !0,
            nV = !1;
          try {
            if (UV = (xV = xV.call(VV)).next, 0 === eV) {
              if (Object(xV) !== xV) return;
              QV = !1
            } else
              for (; !(QV = (JV = UV.call(xV)).done) && (pV.push(JV.value), pV.length !== eV); QV = !0);
          } catch (VV) {
            nV = !0, YV = VV
          } finally {
            try {
              if (!QV && null != xV.return && (yV = xV.return(), Object(yV) !== yV)) return
            } finally {
              if (nV) throw YV
            }
          }
          return pV
        }
      }(VV, eV) || re(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function re(VV, eV) {
      if (VV) {
        if ("string" === typeof VV) return ke(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        return "Object" === xV && VV.constructor && (xV = VV.constructor.name), "Map" === xV || "Set" === xV ? Array.from(VV) : "Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV) ? ke(VV, eV) : void 0
      }
    }

    function ke(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }
    var be = function(VV, eV, xV) {
        return VV + (eV - VV) * xV
      },
      Ee = function(VV) {
        return VV.from !== VV.to
      },
      Be = function VV(eV, xV, JV) {
        var YV = sV((function(VV, xV) {
          if (Ee(xV)) {
            var JV = ve(eV(xV.from, xV.to, xV.ME), 2),
              YV = JV[0],
              UV = JV[1];
            return we(we({}, xV), {}, {
              from: YV,
              ME: UV
            })
          }
          return xV
        }), xV);
        return JV < 1 ? sV((function(VV, eV) {
          return Ee(eV) ? we(we({}, eV), {}, {
            ME: be(eV.ME, YV[VV].ME, JV),
            from: be(eV.from, YV[VV].from, JV)
          }) : eV
        }), xV) : VV(eV, YV, JV - 1)
      };
    const je = function(VV, eV, xV, JV, YV) {
      var UV, yV, pV, QV, nV = (UV = VV, yV = eV, [Object.keys(UV), Object.keys(yV)].reduce((function(VV, eV) {
          return VV.filter((function(VV) {
            return eV.includes(VV)
          }))
        }))),
        wV = nV.reduce((function(xV, JV) {
          return we(we({}, xV), {}, Ze({}, JV, [VV[JV], eV[JV]]))
        }), {}),
        ZV = nV.reduce((function(xV, JV) {
          return we(we({}, xV), {}, Ze({}, JV, {
            from: VV[JV],
            ME: 0,
            to: eV[JV]
          }))
        }), {}),
        vV = -1,
        rV = function() {
          return null
        };
      return rV = xV.isStepper ? function(JV) {
          pV || (pV = JV);
          var UV = (JV - pV) / xV.dt;
          ZV = Be(xV, ZV, UV), YV(we(we(we({}, VV), eV), sV((function(VV, eV) {
            return eV.from
          }), ZV))), pV = JV, Object.values(ZV).filter(Ee).length && (vV = requestAnimationFrame(rV))
        } : function(UV) {
          QV || (QV = UV);
          var yV = (UV - QV) / JV,
            pV = sV((function(VV, eV) {
              return be.apply(void 0, Qe(eV).concat([xV(yV)]))
            }), wV);
          if (YV(we(we(we({}, VV), eV), pV)), yV < 1) vV = requestAnimationFrame(rV);
          else {
            var nV = sV((function(VV, eV) {
              return be.apply(void 0, Qe(eV).concat([xV(1)]))
            }), wV);
            YV(we(we(we({}, VV), eV), nV))
          }
        },
        function() {
          return requestAnimationFrame(rV),
            function() {
              cancelAnimationFrame(vV)
            }
        }
    };

    function qe(VV) {
      return qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, qe(VV)
    }
    var te = ["children", "NZ", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function Fe(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV, JV, YV = {},
          UV = Object.keys(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || (YV[xV] = VV[xV]);
        return YV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function Te(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return Pe(VV)
      }(VV) || function(VV) {
        if ("undefined" !== typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
      }(VV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return Pe(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return Pe(VV, eV)
      }(VV) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Pe(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function Ae(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function Ne(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? Ae(Object(xV), !0).forEach((function(eV) {
          Xe(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : Ae(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function Xe(VV, eV, xV) {
      return (eV = ze(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function Me(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, ze(JV.key), JV)
      }
    }

    function ze(VV) {
      var eV = function(VV, eV) {
        if ("object" !== qe(VV) || null === VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" !== qe(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" === qe(eV) ? eV : String(eV)
    }

    function Ge(VV, eV) {
      return Ge = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, Ge(VV, eV)
    }

    function We(VV) {
      var eV = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (VV) {
          return !1
        }
      }();
      return function() {
        var xV, JV = De(VV);
        if (eV) {
          var YV = De(this).constructor;
          xV = Reflect.construct(JV, arguments, YV)
        } else xV = JV.apply(this, arguments);
        return Re(this, xV)
      }
    }

    function Re(VV, eV) {
      if (eV && ("object" === qe(eV) || "function" === typeof eV)) return eV;
      if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
      return ge(VV)
    }

    function ge(VV) {
      if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return VV
    }

    function De(VV) {
      return De = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, De(VV)
    }
    var ie = function(VV) {
      ! function(VV, eV) {
        if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
        VV.prototype = Object.create(eV && eV.prototype, {
          constructor: {
            value: VV,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(VV, "prototype", {
          writable: !1
        }), eV && Ge(VV, eV)
      }(yV, VV);
      var eV, xV, YV, UV = We(yV);

      function yV(VV, eV) {
        var xV;
        ! function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, yV);
        var JV = (xV = UV.call(this, VV, eV)).props,
          YV = JV.isActive,
          pV = JV.attributeName,
          QV = JV.from,
          nV = JV.to,
          wV = JV.steps,
          ZV = JV.children,
          vV = JV.duration;
        if (xV.handleStyleChange = xV.handleStyleChange.bind(ge(xV)), xV.changeStyle = xV.changeStyle.bind(ge(xV)), !YV || vV <= 0) return xV.state = {
          style: {}
        }, "function" === typeof ZV && (xV.state = {
          style: nV
        }), Re(xV);
        if (wV && wV.length) xV.state = {
          style: wV[0].style
        };
        else if (QV) {
          if ("function" === typeof ZV) return xV.state = {
            style: QV
          }, Re(xV);
          xV.state = {
            style: pV ? Xe({}, pV, QV) : QV
          }
        } else xV.state = {
          style: {}
        };
        return xV
      }
      return eV = yV, (xV = [{
        key: "componentDidMount",
        value: function() {
          var VV = this.props,
            eV = VV.isActive,
            xV = VV.canBegin;
          this.mounted = !0, eV && xV && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(VV) {
          var eV = this.props,
            xV = eV.isActive,
            JV = eV.canBegin,
            YV = eV.attributeName,
            UV = eV.shouldReAnimate,
            yV = eV.to,
            pV = eV.from,
            QV = this.state.style;
          if (JV)
            if (xV) {
              if (!(CV(VV.to, yV) && VV.canBegin && VV.isActive)) {
                var nV = !VV.canBegin || !VV.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var wV = nV || UV ? pV : VV.to;
                if (this.state && QV) {
                  var ZV = {
                    style: YV ? Xe({}, YV, wV) : wV
                  };
                  (YV && QV[YV] !== wV || !YV && QV !== wV) && this.setState(ZV)
                }
                this.runAnimation(Ne(Ne({}, this.props), {}, {
                  from: wV,
                  NZ: 0
                }))
              }
            } else {
              var vV = {
                style: YV ? Xe({}, YV, yV) : yV
              };
              this.state && QV && (YV && QV[YV] !== yV || !YV && QV !== yV) && this.setState(vV)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var VV = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), VV && VV()
        }
      }, {
        key: "handleStyleChange",
        value: function(VV) {
          this.changeStyle(VV)
        }
      }, {
        key: "changeStyle",
        value: function(VV) {
          this.mounted && this.setState({
            style: VV
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(VV) {
          var eV = this,
            xV = VV.from,
            JV = VV.to,
            YV = VV.duration,
            UV = VV.easing,
            yV = VV.NZ,
            pV = VV.onAnimationEnd,
            QV = VV.onAnimationStart,
            nV = je(xV, JV, ye(UV), YV, this.changeStyle);
          this.manager.start([QV, yV, function() {
            eV.stopJSAnimation = nV()
          }, YV, pV])
        }
      }, {
        key: "runStepAnimation",
        value: function(VV) {
          var eV = this,
            xV = VV.steps,
            JV = VV.NZ,
            YV = VV.onAnimationStart,
            UV = xV[0],
            yV = UV.style,
            pV = UV.duration,
            QV = void 0 === pV ? 0 : pV;
          return this.manager.start([YV].concat(Te(xV.reduce((function(VV, JV, YV) {
            if (0 === YV) return VV;
            var UV = JV.duration,
              yV = JV.easing,
              pV = void 0 === yV ? "ease" : yV,
              QV = JV.style,
              nV = JV.properties,
              wV = JV.onAnimationEnd,
              ZV = YV > 0 ? xV[YV - 1] : JV,
              vV = nV || Object.keys(QV);
            if ("function" === typeof pV || "spring" === pV) return [].concat(Te(VV), [eV.runJSAnimation.bind(eV, {
              from: ZV.style,
              to: QV,
              duration: UV,
              easing: pV
            }), UV]);
            var rV = SV(vV, UV, pV),
              kV = Ne(Ne(Ne({}, ZV.style), QV), {}, {
                transition: rV
              });
            return [].concat(Te(VV), [kV, UV, wV]).filter(uV)
          }), [yV, Math.max(QV, JV)])), [VV.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(VV) {
          this.manager || (this.manager = LV());
          var eV = VV.NZ,
            xV = VV.duration,
            JV = VV.attributeName,
            YV = VV.to,
            UV = VV.easing,
            yV = VV.onAnimationStart,
            pV = VV.onAnimationEnd,
            QV = VV.steps,
            nV = VV.children,
            wV = this.manager;
          if (this.unSubscribe = wV.subscribe(this.handleStyleChange), "function" !== typeof UV && "function" !== typeof nV && "spring" !== UV)
            if (QV.length > 1) this.runStepAnimation(VV);
            else {
              var ZV = JV ? Xe({}, JV, YV) : YV,
                vV = SV(Object.keys(ZV), xV, UV);
              wV.start([yV, eV, Ne(Ne({}, ZV), {}, {
                transition: vV
              }), xV, pV])
            }
          else this.runJSAnimation(VV)
        }
      }, {
        key: "render",
        value: function() {
          var VV = this.props,
            eV = VV.children,
            xV = (VV.NZ, VV.duration),
            YV = (VV.attributeName, VV.easing, VV.isActive),
            UV = (VV.steps, VV.from, VV.to, VV.canBegin, VV.onAnimationEnd, VV.shouldReAnimate, VV.onAnimationReStart, Fe(VV, te)),
            yV = JV.Children.count(eV),
            pV = this.state.style;
          if ("function" === typeof eV) return eV(pV);
          if (!YV || 0 === yV || xV <= 0) return eV;
          var QV = function(VV) {
            var eV = VV.props,
              xV = eV.style,
              YV = void 0 === xV ? {} : xV,
              yV = eV.className;
            return (0, JV.cloneElement)(VV, Ne(Ne({}, UV), {}, {
              style: Ne(Ne({}, YV), pV),
              className: yV
            }))
          };
          return 1 === yV ? QV(JV.Children.only(eV)) : JV.createElement("div", null, JV.Children.map(eV, (function(VV) {
            return QV(VV)
          })))
        }
      }]) && Me(eV.prototype, xV), YV && Me(eV, YV), Object.defineProperty(eV, "prototype", {
        writable: !1
      }), yV
    }(JV.PureComponent);
    ie.displayName = "Animate", ie.defaultProps = {
      NZ: 0,
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
    }, ie.propTypes = {
      from: UV().oneOfType([UV().object, UV().string]),
      to: UV().oneOfType([UV().object, UV().string]),
      attributeName: UV().string,
      duration: UV().number,
      NZ: UV().number,
      easing: UV().oneOfType([UV().string, UV().func]),
      steps: UV().arrayOf(UV().shape({
        duration: UV().number.isRequired,
        style: UV().object.isRequired,
        easing: UV().oneOfType([UV().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), UV().func]),
        properties: UV().arrayOf("string"),
        onAnimationEnd: UV().func
      })),
      children: UV().oneOfType([UV().node, UV().func]),
      isActive: UV().bool,
      canBegin: UV().bool,
      onAnimationEnd: UV().func,
      shouldReAnimate: UV().bool,
      onAnimationStart: UV().func,
      onAnimationReStart: UV().func
    };
    const Ce = ie
  },
  6927: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => hV
    });
    var JV, YV = xV(62),
      UV = xV(5609),
      yV = xV(6672),
      pV = xV(5824),
      QV = xV.n(pV),
      nV = xV(6715),
      wV = xV.n(nV),
      ZV = xV(5974),
      vV = xV.n(ZV),
      rV = xV(5731),
      kV = xV.n(rV),
      bV = xV(6752),
      EV = xV.n(bV),
      BV = xV(6922),
      jV = xV(6665),
      qV = xV(6518),
      tV = xV(6833),
      FV = xV(6531),
      TV = xV(5713),
      PV = xV(6696),
      AV = xV(5990),
      NV = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      XV = ["key"];

    function MV(VV) {
      return MV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, MV(VV)
    }

    function zV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function GV() {
      return GV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, GV.apply(this, arguments)
    }

    function WV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function RV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? WV(Object(xV), !0).forEach((function(eV) {
          oV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : WV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function gV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, cV(JV.key), JV)
      }
    }

    function DV(VV, eV, xV) {
      return eV = CV(eV),
        function(VV, eV) {
          if (eV && ("object" === MV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, iV() ? Reflect.construct(eV, xV || [], CV(VV).constructor) : eV.apply(VV, xV))
    }

    function iV() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (iV = function() {
        return !!VV
      })()
    }

    function CV(VV) {
      return CV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, CV(VV)
    }

    function aV(VV, eV) {
      return aV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, aV(VV, eV)
    }

    function oV(VV, eV, xV) {
      return (eV = cV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function cV(VV) {
      var eV = function(VV, eV) {
        if ("object" != MV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != MV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == MV(eV) ? eV : eV + ""
    }
    var hV = function(VV) {
      function eV() {
        var VV;
        ! function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, eV);
        for (var xV = arguments.length, JV = new Array(xV), YV = 0; YV < xV; YV++) JV[YV] = arguments[YV];
        return oV(VV = DV(this, eV, [].concat(JV)), "state", {
          isAnimationFinished: !0
        }), oV(VV, "id", (0, TV.H)("recharts-area-")), oV(VV, "handleAnimationEnd", (function() {
          var eV = VV.props.onAnimationEnd;
          VV.setState({
            isAnimationFinished: !0
          }), QV()(eV) && eV()
        })), oV(VV, "handleAnimationStart", (function() {
          var eV = VV.props.onAnimationStart;
          VV.setState({
            isAnimationFinished: !1
          }), QV()(eV) && eV()
        })), VV
      }
      return function(VV, eV) {
        if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
        VV.prototype = Object.create(eV && eV.prototype, {
          constructor: {
            value: VV,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(VV, "prototype", {
          writable: !1
        }), eV && aV(VV, eV)
      }(eV, VV), xV = eV, JV = [{
        key: "renderDots",
        value: function(VV, xV, JV) {
          var UV = this.props.isAnimationActive,
            yV = this.state.isAnimationFinished;
          if (UV && !yV) return null;
          var pV = this.props,
            QV = pV.dot,
            nV = pV.points,
            wV = pV.dataKey,
            ZV = (0, AV.c)(this.props, !1),
            vV = (0, AV.c)(QV, !0),
            rV = nV.map((function(VV, xV) {
              var JV = RV(RV(RV({
                key: "dot-".concat(xV),
                r: 3
              }, ZV), vV), {}, {
                index: xV,
                cx: VV.x,
                cy: VV.y,
                dataKey: wV,
                value: VV.value,
                payload: VV.payload,
                points: nV
              });
              return eV.renderDotItem(QV, JV)
            })),
            kV = {
              clipPath: VV ? "url(#clipPath-".concat(xV ? "" : "dots-").concat(JV, ")") : null
            };
          return YV.createElement(qV.e, GV({
            className: "recharts-area-dots"
          }, kV), rV)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(VV) {
          var eV = this.props,
            xV = eV.baseLine,
            JV = eV.points,
            UV = eV.strokeWidth,
            yV = JV[0].x,
            pV = JV[JV.length - 1].x,
            QV = VV * Math.abs(yV - pV),
            nV = wV()(JV.map((function(VV) {
              return VV.y || 0
            })));
          return (0, TV.A)(xV) && "number" === typeof xV ? nV = Math.max(xV, nV) : xV && Array.isArray(xV) && xV.length && (nV = Math.max(wV()(xV.map((function(VV) {
            return VV.y || 0
          }))), nV)), (0, TV.A)(nV) ? YV.createElement("rect", {
            x: yV < pV ? yV : yV - QV,
            y: 0,
            width: QV,
            height: Math.floor(nV + (UV ? parseInt("".concat(UV), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(VV) {
          var eV = this.props,
            xV = eV.baseLine,
            JV = eV.points,
            UV = eV.strokeWidth,
            yV = JV[0].y,
            pV = JV[JV.length - 1].y,
            QV = VV * Math.abs(yV - pV),
            nV = wV()(JV.map((function(VV) {
              return VV.x || 0
            })));
          return (0, TV.A)(xV) && "number" === typeof xV ? nV = Math.max(xV, nV) : xV && Array.isArray(xV) && xV.length && (nV = Math.max(wV()(xV.map((function(VV) {
            return VV.x || 0
          }))), nV)), (0, TV.A)(nV) ? YV.createElement("rect", {
            x: 0,
            y: yV < pV ? yV : yV - QV,
            width: nV + (UV ? parseInt("".concat(UV), 10) : 1),
            height: Math.floor(QV)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(VV) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(VV) : this.renderHorizontalRect(VV)
        }
      }, {
        key: "renderAreaStatically",
        value: function(VV, eV, xV, JV) {
          var UV = this.props,
            yV = UV.layout,
            pV = UV.type,
            QV = UV.stroke,
            nV = UV.connectNulls,
            wV = UV.isRange,
            ZV = (UV.ref, zV(UV, NV));
          return YV.createElement(qV.e, {
            clipPath: xV ? "url(#clipPath-".concat(JV, ")") : null
          }, YV.createElement(BV.b, GV({}, (0, AV.c)(ZV, !0), {
            points: VV,
            connectNulls: nV,
            type: pV,
            baseLine: eV,
            layout: yV,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== QV && YV.createElement(BV.b, GV({}, (0, AV.c)(this.props, !1), {
            className: "recharts-area-curve",
            layout: yV,
            type: pV,
            connectNulls: nV,
            fill: "none",
            points: VV
          })), "none" !== QV && wV && YV.createElement(BV.b, GV({}, (0, AV.c)(this.props, !1), {
            className: "recharts-area-curve",
            layout: yV,
            type: pV,
            connectNulls: nV,
            fill: "none",
            points: eV
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(VV, eV) {
          var xV = this,
            JV = this.props,
            UV = JV.points,
            pV = JV.baseLine,
            QV = JV.isAnimationActive,
            nV = JV.animationBegin,
            wV = JV.animationDuration,
            ZV = JV.animationEasing,
            rV = JV.animationId,
            bV = this.state,
            EV = bV.prevPoints,
            BV = bV.prevBaseLine;
          return YV.createElement(yV.e, {
            NZ: nV,
            duration: wV,
            isActive: QV,
            easing: ZV,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(rV),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(JV) {
            var yV = JV.t;
            if (EV) {
              var QV, nV = EV.length / UV.length,
                wV = UV.map((function(VV, eV) {
                  var xV = Math.floor(eV * nV);
                  if (EV[xV]) {
                    var JV = EV[xV],
                      YV = (0, TV.s)(JV.x, VV.x),
                      UV = (0, TV.s)(JV.y, VV.y);
                    return RV(RV({}, VV), {}, {
                      x: YV(yV),
                      y: UV(yV)
                    })
                  }
                  return VV
                }));
              return QV = (0, TV.A)(pV) && "number" === typeof pV ? (0, TV.s)(BV, pV)(yV) : vV()(pV) || kV()(pV) ? (0, TV.s)(BV, 0)(yV) : pV.map((function(VV, eV) {
                var xV = Math.floor(eV * nV);
                if (BV[xV]) {
                  var JV = BV[xV],
                    YV = (0, TV.s)(JV.x, VV.x),
                    UV = (0, TV.s)(JV.y, VV.y);
                  return RV(RV({}, VV), {}, {
                    x: YV(yV),
                    y: UV(yV)
                  })
                }
                return VV
              })), xV.renderAreaStatically(wV, QV, VV, eV)
            }
            return YV.createElement(qV.e, null, YV.createElement("defs", null, YV.createElement("clipPath", {
              id: "animationClipPath-".concat(eV)
            }, xV.renderClipRect(yV))), YV.createElement(qV.e, {
              clipPath: "url(#animationClipPath-".concat(eV, ")")
            }, xV.renderAreaStatically(UV, pV, VV, eV)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(VV, eV) {
          var xV = this.props,
            JV = xV.points,
            YV = xV.baseLine,
            UV = xV.isAnimationActive,
            yV = this.state,
            pV = yV.prevPoints,
            QV = yV.prevBaseLine,
            nV = yV.totalLength;
          return UV && JV && JV.length && (!pV && nV > 0 || !EV()(pV, JV) || !EV()(QV, YV)) ? this.renderAreaWithAnimation(VV, eV) : this.renderAreaStatically(JV, YV, VV, eV)
        }
      }, {
        key: "render",
        value: function() {
          var VV, eV = this.props,
            xV = eV.hide,
            JV = eV.dot,
            yV = eV.points,
            pV = eV.className,
            QV = eV.top,
            nV = eV.left,
            wV = eV.xAxis,
            ZV = eV.yAxis,
            rV = eV.width,
            kV = eV.height,
            bV = eV.isAnimationActive,
            EV = eV.id;
          if (xV || !yV || !yV.length) return null;
          var BV = this.state.isAnimationFinished,
            jV = 1 === yV.length,
            FV = (0, UV.c)("recharts-area", pV),
            TV = wV && wV.allowDataOverflow,
            PV = ZV && ZV.allowDataOverflow,
            NV = TV || PV,
            XV = vV()(EV) ? this.id : EV,
            MV = null !== (VV = (0, AV.c)(JV, !1)) && void 0 !== VV ? VV : {
              r: 3,
              strokeWidth: 2
            },
            zV = MV.r,
            GV = void 0 === zV ? 3 : zV,
            WV = MV.strokeWidth,
            RV = void 0 === WV ? 2 : WV,
            gV = ((0, AV.r)(JV) ? JV : {}).clipDot,
            DV = void 0 === gV || gV,
            iV = 2 * GV + RV;
          return YV.createElement(qV.e, {
            className: FV
          }, TV || PV ? YV.createElement("defs", null, YV.createElement("clipPath", {
            id: "clipPath-".concat(XV)
          }, YV.createElement("rect", {
            x: TV ? nV : nV - rV / 2,
            y: PV ? QV : QV - kV / 2,
            width: TV ? rV : 2 * rV,
            height: PV ? kV : 2 * kV
          })), !DV && YV.createElement("clipPath", {
            id: "clipPath-dots-".concat(XV)
          }, YV.createElement("rect", {
            x: nV - iV / 2,
            y: QV - iV / 2,
            width: rV + iV,
            height: kV + iV
          }))) : null, jV ? null : this.renderArea(NV, XV), (JV || jV) && this.renderDots(NV, DV, XV), (!bV || BV) && tV.c.renderCallByParent(this.props, yV))
        }
      }], pV = [{
        key: "getDerivedStateFromProps",
        value: function(VV, eV) {
          return VV.animationId !== eV.prevAnimationId ? {
            prevAnimationId: VV.animationId,
            curPoints: VV.points,
            curBaseLine: VV.baseLine,
            prevPoints: eV.curPoints,
            prevBaseLine: eV.curBaseLine
          } : VV.points !== eV.curPoints || VV.baseLine !== eV.curBaseLine ? {
            curPoints: VV.points,
            curBaseLine: VV.baseLine
          } : null
        }
      }], JV && gV(xV.prototype, JV), pV && gV(xV, pV), Object.defineProperty(xV, "prototype", {
        writable: !1
      }), xV;
      var xV, JV, pV
    }(YV.PureComponent);
    JV = hV, oV(hV, "displayName", "Area"), oV(hV, "defaultProps", {
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
      isAnimationActive: !FV.e.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), oV(hV, "getBaseValue", (function(VV, eV, xV, JV) {
      var YV = VV.layout,
        UV = VV.baseValue,
        yV = eV.props.baseValue,
        pV = null !== yV && void 0 !== yV ? yV : UV;
      if ((0, TV.A)(pV) && "number" === typeof pV) return pV;
      var QV = "horizontal" === YV ? JV : xV,
        nV = QV.scale.domain();
      if ("number" === QV.type) {
        var wV = Math.max(nV[0], nV[1]),
          ZV = Math.min(nV[0], nV[1]);
        return "dataMin" === pV ? ZV : "dataMax" === pV || wV < 0 ? wV : Math.max(Math.min(nV[0], nV[1]), 0)
      }
      return "dataMin" === pV ? nV[0] : "dataMax" === pV ? nV[1] : nV[0]
    })), oV(hV, "getComposedData", (function(VV) {
      var eV, xV = VV.props,
        YV = VV.item,
        UV = VV.xAxis,
        yV = VV.yAxis,
        pV = VV.xAxisTicks,
        QV = VV.yAxisTicks,
        nV = VV.bandSize,
        wV = VV.dataKey,
        ZV = VV.stackedData,
        vV = VV.dataStartIndex,
        rV = VV.displayedData,
        kV = VV.offset,
        bV = xV.layout,
        EV = ZV && ZV.length,
        BV = JV.getBaseValue(xV, YV, UV, yV),
        jV = "horizontal" === bV,
        qV = !1,
        tV = rV.map((function(VV, eV) {
          var xV;
          EV ? xV = ZV[vV + eV] : (xV = (0, PV.V)(VV, wV), Array.isArray(xV) ? qV = !0 : xV = [BV, xV]);
          var JV = null == xV[1] || EV && null == (0, PV.V)(VV, wV);
          return jV ? {
            x: (0, PV.z)({
              axis: UV,
              ticks: pV,
              bandSize: nV,
              entry: VV,
              index: eV
            }),
            y: JV ? null : yV.scale(xV[1]),
            value: xV,
            payload: VV
          } : {
            x: JV ? null : UV.scale(xV[1]),
            y: (0, PV.z)({
              axis: yV,
              ticks: QV,
              bandSize: nV,
              entry: VV,
              index: eV
            }),
            value: xV,
            payload: VV
          }
        }));
      return eV = EV || qV ? tV.map((function(VV) {
        var eV = Array.isArray(VV.value) ? VV.value[0] : null;
        return jV ? {
          x: VV.x,
          y: null != eV && null != VV.y ? yV.scale(eV) : null
        } : {
          x: null != eV ? UV.scale(eV) : null,
          y: VV.y
        }
      })) : jV ? yV.scale(BV) : UV.scale(BV), RV({
        points: tV,
        baseLine: eV,
        layout: bV,
        isRange: qV
      }, kV)
    })), oV(hV, "renderDotItem", (function(VV, eV) {
      var xV;
      if (YV.isValidElement(VV)) xV = YV.cloneElement(VV, eV);
      else if (QV()(VV)) xV = VV(eV);
      else {
        var JV = (0, UV.c)("recharts-area-dot", "boolean" !== typeof VV ? VV.className : ""),
          yV = eV.key,
          pV = zV(eV, XV);
        xV = YV.createElement(jV.e, GV({}, pV, {
          key: yV,
          className: JV
        }))
      }
      return xV
    }))
  },
  6824: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => KV
    });
    var JV = xV(62),
      YV = xV(5609),
      UV = xV(6672),
      yV = xV(6752),
      pV = xV.n(yV),
      QV = xV(5974),
      nV = xV.n(QV),
      wV = xV(6518),
      ZV = xV(6765),
      vV = xV(6826),
      rV = xV(6833),
      kV = xV(5713),
      bV = xV(5990),
      EV = xV(6531),
      BV = xV(6696),
      jV = xV(6012),
      qV = xV(6509),
      tV = xV(6850),
      FV = ["x", "y"];

    function TV(VV) {
      return TV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, TV(VV)
    }

    function PV() {
      return PV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, PV.apply(this, arguments)
    }

    function AV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function NV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? AV(Object(xV), !0).forEach((function(eV) {
          XV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : AV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function XV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != TV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != TV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == TV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function MV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function zV(VV, eV) {
      var xV = VV.x,
        JV = VV.y,
        YV = MV(VV, FV),
        UV = "".concat(xV),
        yV = parseInt(UV, 10),
        pV = "".concat(JV),
        QV = parseInt(pV, 10),
        nV = "".concat(eV.height || YV.height),
        wV = parseInt(nV, 10),
        ZV = "".concat(eV.width || YV.width),
        vV = parseInt(ZV, 10);
      return NV(NV(NV(NV(NV({}, eV), YV), yV ? {
        x: yV
      } : {}), QV ? {
        y: QV
      } : {}), {}, {
        height: wV,
        width: vV,
        name: eV.name,
        radius: eV.radius
      })
    }

    function GV(VV) {
      return JV.createElement(tV.d, PV({
        shapeType: "rectangle",
        propTransformer: zV,
        activeClassName: "recharts-active-bar"
      }, VV))
    }
    var WV, RV = ["value", "background"];

    function gV(VV) {
      return gV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, gV(VV)
    }

    function DV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function iV() {
      return iV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, iV.apply(this, arguments)
    }

    function CV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function aV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? CV(Object(xV), !0).forEach((function(eV) {
          fV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : CV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function oV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, mV(JV.key), JV)
      }
    }

    function cV(VV, eV, xV) {
      return eV = lV(eV),
        function(VV, eV) {
          if (eV && ("object" === gV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, hV() ? Reflect.construct(eV, xV || [], lV(VV).constructor) : eV.apply(VV, xV))
    }

    function hV() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (hV = function() {
        return !!VV
      })()
    }

    function lV(VV) {
      return lV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, lV(VV)
    }

    function LV(VV, eV) {
      return LV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, LV(VV, eV)
    }

    function fV(VV, eV, xV) {
      return (eV = mV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function mV(VV) {
      var eV = function(VV, eV) {
        if ("object" != gV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != gV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == gV(eV) ? eV : eV + ""
    }
    var KV = function(VV) {
      function eV() {
        var VV;
        ! function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, eV);
        for (var xV = arguments.length, JV = new Array(xV), YV = 0; YV < xV; YV++) JV[YV] = arguments[YV];
        return fV(VV = cV(this, eV, [].concat(JV)), "state", {
          isAnimationFinished: !1
        }), fV(VV, "id", (0, kV.H)("recharts-bar-")), fV(VV, "handleAnimationEnd", (function() {
          var eV = VV.props.onAnimationEnd;
          VV.setState({
            isAnimationFinished: !0
          }), eV && eV()
        })), fV(VV, "handleAnimationStart", (function() {
          var eV = VV.props.onAnimationStart;
          VV.setState({
            isAnimationFinished: !1
          }), eV && eV()
        })), VV
      }
      return function(VV, eV) {
        if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
        VV.prototype = Object.create(eV && eV.prototype, {
          constructor: {
            value: VV,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(VV, "prototype", {
          writable: !1
        }), eV && LV(VV, eV)
      }(eV, VV), xV = eV, yV = [{
        key: "renderRectanglesStatically",
        value: function(VV) {
          var eV = this,
            xV = this.props,
            YV = xV.shape,
            UV = xV.dataKey,
            yV = xV.activeIndex,
            pV = xV.activeBar,
            QV = (0, bV.c)(this.props, !1);
          return VV && VV.map((function(VV, xV) {
            var nV = xV === yV,
              ZV = nV ? pV : YV,
              vV = aV(aV(aV({}, QV), VV), {}, {
                isActive: nV,
                option: ZV,
                index: xV,
                dataKey: UV,
                onAnimationStart: eV.handleAnimationStart,
                onAnimationEnd: eV.handleAnimationEnd
              });
            return JV.createElement(wV.e, iV({
              className: "recharts-bar-rectangle"
            }, (0, jV.l)(eV.props, VV, xV), {
              key: "rectangle-".concat(null === VV || void 0 === VV ? void 0 : VV.x, "-").concat(null === VV || void 0 === VV ? void 0 : VV.y, "-").concat(null === VV || void 0 === VV ? void 0 : VV.value, "-").concat(xV)
            }), JV.createElement(GV, vV))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var VV = this,
            eV = this.props,
            xV = eV.data,
            YV = eV.layout,
            yV = eV.isAnimationActive,
            pV = eV.animationBegin,
            QV = eV.animationDuration,
            nV = eV.animationEasing,
            ZV = eV.animationId,
            vV = this.state.prevData;
          return JV.createElement(UV.e, {
            NZ: pV,
            duration: QV,
            isActive: yV,
            easing: nV,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(ZV),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(eV) {
            var UV = eV.t,
              yV = xV.map((function(VV, eV) {
                var xV = vV && vV[eV];
                if (xV) {
                  var JV = (0, kV.s)(xV.x, VV.x),
                    yV = (0, kV.s)(xV.y, VV.y),
                    pV = (0, kV.s)(xV.width, VV.width),
                    QV = (0, kV.s)(xV.height, VV.height);
                  return aV(aV({}, VV), {}, {
                    x: JV(UV),
                    y: yV(UV),
                    width: pV(UV),
                    height: QV(UV)
                  })
                }
                if ("horizontal" === YV) {
                  var nV = (0, kV.s)(0, VV.height)(UV);
                  return aV(aV({}, VV), {}, {
                    y: VV.y + VV.height - nV,
                    height: nV
                  })
                }
                var wV = (0, kV.s)(0, VV.width)(UV);
                return aV(aV({}, VV), {}, {
                  width: wV
                })
              }));
            return JV.createElement(wV.e, null, VV.renderRectanglesStatically(yV))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var VV = this.props,
            eV = VV.data,
            xV = VV.isAnimationActive,
            JV = this.state.prevData;
          return !(xV && eV && eV.length) || JV && pV()(JV, eV) ? this.renderRectanglesStatically(eV) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var VV = this,
            eV = this.props,
            xV = eV.data,
            YV = eV.dataKey,
            UV = eV.activeIndex,
            yV = (0, bV.c)(this.props.background, !1);
          return xV.map((function(eV, xV) {
            eV.value;
            var pV = eV.background,
              QV = DV(eV, RV);
            if (!pV) return null;
            var nV = aV(aV(aV(aV(aV({}, QV), {}, {
              fill: "#eee"
            }, pV), yV), (0, jV.l)(VV.props, eV, xV)), {}, {
              onAnimationStart: VV.handleAnimationStart,
              onAnimationEnd: VV.handleAnimationEnd,
              dataKey: YV,
              index: xV,
              className: "recharts-bar-background-rectangle"
            });
            return JV.createElement(GV, iV({
              key: "background-bar-".concat(xV),
              option: VV.props.background,
              isActive: xV === UV
            }, nV))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(VV, eV) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var xV = this.props,
            YV = xV.data,
            UV = xV.xAxis,
            yV = xV.yAxis,
            pV = xV.layout,
            QV = xV.children,
            nV = (0, bV.g)(QV, ZV.e);
          if (!nV) return null;
          var vV = "vertical" === pV ? YV[0].height / 2 : YV[0].width / 2,
            rV = function(VV, eV) {
              var xV = Array.isArray(VV.value) ? VV.value[1] : VV.value;
              return {
                x: VV.x,
                y: VV.y,
                value: xV,
                errorVal: (0, BV.V)(VV, eV)
              }
            },
            kV = {
              clipPath: VV ? "url(#clipPath-".concat(eV, ")") : null
            };
          return JV.createElement(wV.e, kV, nV.map((function(VV) {
            return JV.cloneElement(VV, {
              key: "error-bar-".concat(eV, "-").concat(VV.props.dataKey),
              data: YV,
              xAxis: UV,
              yAxis: yV,
              layout: pV,
              offset: vV,
              dataPointFormatter: rV
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var VV = this.props,
            eV = VV.hide,
            xV = VV.data,
            UV = VV.className,
            yV = VV.xAxis,
            pV = VV.yAxis,
            QV = VV.left,
            ZV = VV.top,
            vV = VV.width,
            kV = VV.height,
            bV = VV.isAnimationActive,
            EV = VV.background,
            BV = VV.id;
          if (eV || !xV || !xV.length) return null;
          var jV = this.state.isAnimationFinished,
            qV = (0, YV.c)("recharts-bar", UV),
            tV = yV && yV.allowDataOverflow,
            FV = pV && pV.allowDataOverflow,
            TV = tV || FV,
            PV = nV()(BV) ? this.id : BV;
          return JV.createElement(wV.e, {
            className: qV
          }, tV || FV ? JV.createElement("defs", null, JV.createElement("clipPath", {
            id: "clipPath-".concat(PV)
          }, JV.createElement("rect", {
            x: tV ? QV : QV - vV / 2,
            y: FV ? ZV : ZV - kV / 2,
            width: tV ? vV : 2 * vV,
            height: FV ? kV : 2 * kV
          }))) : null, JV.createElement(wV.e, {
            className: "recharts-bar-rectangles",
            clipPath: TV ? "url(#clipPath-".concat(PV, ")") : null
          }, EV ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(TV, PV), (!bV || jV) && rV.c.renderCallByParent(this.props, xV))
        }
      }], QV = [{
        key: "getDerivedStateFromProps",
        value: function(VV, eV) {
          return VV.animationId !== eV.prevAnimationId ? {
            prevAnimationId: VV.animationId,
            curData: VV.data,
            prevData: eV.curData
          } : VV.data !== eV.curData ? {
            curData: VV.data
          } : null
        }
      }], yV && oV(xV.prototype, yV), QV && oV(xV, QV), Object.defineProperty(xV, "prototype", {
        writable: !1
      }), xV;
      var xV, yV, QV
    }(JV.PureComponent);
    WV = KV, fV(KV, "displayName", "Bar"), fV(KV, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !EV.e.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), fV(KV, "getComposedData", (function(VV) {
      var eV = VV.props,
        xV = VV.item,
        JV = VV.barPosition,
        YV = VV.bandSize,
        UV = VV.xAxis,
        yV = VV.yAxis,
        pV = VV.xAxisTicks,
        QV = VV.yAxisTicks,
        nV = VV.stackedData,
        wV = VV.dataStartIndex,
        ZV = VV.displayedData,
        rV = VV.offset,
        EV = (0, BV.j)(JV, xV);
      if (!EV) return null;
      var jV = eV.layout,
        tV = xV.type.defaultProps,
        FV = void 0 !== tV ? aV(aV({}, tV), xV.props) : xV.props,
        TV = FV.dataKey,
        PV = FV.children,
        AV = FV.minPointSize,
        NV = "horizontal" === jV ? yV : UV,
        XV = nV ? NV.scale.domain() : null,
        MV = (0, BV.w)({
          numericAxis: NV
        }),
        zV = (0, bV.g)(PV, vV.d),
        GV = ZV.map((function(VV, eV) {
          var JV, ZV, vV, rV, bV, tV;
          nV ? JV = (0, BV.hb)(nV[wV + eV], XV) : (JV = (0, BV.V)(VV, TV), Array.isArray(JV) || (JV = [MV, JV]));
          var FV = function(VV) {
            var eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(xV, JV) {
              if ("number" === typeof VV) return VV;
              var YV = (0, kV.A)(xV) || (0, kV.v)(xV);
              return YV ? VV(xV, JV) : (YV || (0, qV.e)(!1), eV)
            }
          }(AV, WV.defaultProps.minPointSize)(JV[1], eV);
          if ("horizontal" === jV) {
            var PV, NV = [yV.scale(JV[0]), yV.scale(JV[1])],
              GV = NV[0],
              RV = NV[1];
            ZV = (0, BV.y)({
              axis: UV,
              ticks: pV,
              bandSize: YV,
              offset: EV.offset,
              entry: VV,
              index: eV
            }), vV = null !== (PV = null !== RV && void 0 !== RV ? RV : GV) && void 0 !== PV ? PV : void 0, rV = EV.size;
            var gV = GV - RV;
            if (bV = Number.isNaN(gV) ? 0 : gV, tV = {
                x: ZV,
                y: yV.y,
                width: rV,
                height: yV.height
              }, Math.abs(FV) > 0 && Math.abs(bV) < Math.abs(FV)) {
              var DV = (0, kV.D)(bV || FV) * (Math.abs(FV) - Math.abs(bV));
              vV -= DV, bV += DV
            }
          } else {
            var iV = [UV.scale(JV[0]), UV.scale(JV[1])],
              CV = iV[0],
              oV = iV[1];
            if (ZV = CV, vV = (0, BV.y)({
                axis: yV,
                ticks: QV,
                bandSize: YV,
                offset: EV.offset,
                entry: VV,
                index: eV
              }), rV = oV - CV, bV = EV.size, tV = {
                x: UV.x,
                y: vV,
                width: UV.width,
                height: bV
              }, Math.abs(FV) > 0 && Math.abs(rV) < Math.abs(FV)) rV += (0, kV.D)(rV || FV) * (Math.abs(FV) - Math.abs(rV))
          }
          return aV(aV(aV({}, VV), {}, {
            x: ZV,
            y: vV,
            width: rV,
            height: bV,
            value: nV ? JV : JV[1],
            payload: VV,
            background: tV
          }, zV && zV[eV] && zV[eV].props), {}, {
            tooltipPayload: [(0, BV.U)(xV, VV)],
            tooltipPosition: {
              x: ZV + rV / 2,
              y: vV + bV / 2
            }
          })
        }));
      return aV({
        data: GV,
        layout: jV
      }, rV)
    }))
  },
  6944: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => gV
    });
    var JV = xV(62),
      YV = xV(5824),
      UV = xV.n(YV),
      yV = xV(5746),
      pV = xV.n(yV),
      QV = xV(5609),
      nV = xV(6010),
      wV = xV(6518),
      ZV = xV(6680),
      vV = xV(6782),
      rV = xV(5713),
      kV = xV(6012),
      bV = xV(5990),
      EV = xV(6950),
      BV = ["viewBox"],
      jV = ["viewBox"],
      qV = ["ticks"];

    function tV(VV) {
      return tV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, tV(VV)
    }

    function FV() {
      return FV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, FV.apply(this, arguments)
    }

    function TV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function PV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? TV(Object(xV), !0).forEach((function(eV) {
          WV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : TV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function AV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function NV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, RV(JV.key), JV)
      }
    }

    function XV(VV, eV, xV) {
      return eV = zV(eV),
        function(VV, eV) {
          if (eV && ("object" === tV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, MV() ? Reflect.construct(eV, xV || [], zV(VV).constructor) : eV.apply(VV, xV))
    }

    function MV() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (MV = function() {
        return !!VV
      })()
    }

    function zV(VV) {
      return zV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, zV(VV)
    }

    function GV(VV, eV) {
      return GV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, GV(VV, eV)
    }

    function WV(VV, eV, xV) {
      return (eV = RV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function RV(VV) {
      var eV = function(VV, eV) {
        if ("object" != tV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != tV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == tV(eV) ? eV : eV + ""
    }
    var gV = function(VV) {
      function eV(VV) {
        var xV;
        return function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, eV), (xV = XV(this, eV, [VV])).state = {
          fontSize: "",
          letterSpacing: ""
        }, xV
      }
      return function(VV, eV) {
        if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
        VV.prototype = Object.create(eV && eV.prototype, {
          constructor: {
            value: VV,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(VV, "prototype", {
          writable: !1
        }), eV && GV(VV, eV)
      }(eV, VV), xV = eV, yV = [{
        key: "renderTickItem",
        value: function(VV, eV, xV) {
          var YV = (0, QV.c)(eV.className, "recharts-cartesian-axis-tick-value");
          return JV.isValidElement(VV) ? JV.cloneElement(VV, PV(PV({}, eV), {}, {
            className: YV
          })) : UV()(VV) ? VV(PV(PV({}, eV), {}, {
            className: YV
          })) : JV.createElement(ZV.e, FV({}, eV, {
            className: "recharts-cartesian-axis-tick-value"
          }), xV)
        }
      }], (YV = [{
        key: "shouldComponentUpdate",
        value: function(VV, eV) {
          var xV = VV.viewBox,
            JV = AV(VV, BV),
            YV = this.props,
            UV = YV.viewBox,
            yV = AV(YV, jV);
          return !(0, nV.e)(xV, UV) || !(0, nV.e)(JV, yV) || !(0, nV.e)(eV, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var VV = this.layerReference;
          if (VV) {
            var eV = VV.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            eV && this.setState({
              fontSize: window.getComputedStyle(eV).fontSize,
              letterSpacing: window.getComputedStyle(eV).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(VV) {
          var eV, xV, JV, YV, UV, yV, pV = this.props,
            QV = pV.x,
            nV = pV.y,
            wV = pV.width,
            ZV = pV.height,
            vV = pV.orientation,
            kV = pV.tickSize,
            bV = pV.mirror,
            EV = pV.tickMargin,
            BV = bV ? -1 : 1,
            jV = VV.tickSize || kV,
            qV = (0, rV.A)(VV.tickCoord) ? VV.tickCoord : VV.coordinate;
          switch (vV) {
            case "top":
              eV = xV = VV.coordinate, yV = (JV = (YV = nV + +!bV * ZV) - BV * jV) - BV * EV, UV = qV;
              break;
            case "left":
              JV = YV = VV.coordinate, UV = (eV = (xV = QV + +!bV * wV) - BV * jV) - BV * EV, yV = qV;
              break;
            case "right":
              JV = YV = VV.coordinate, UV = (eV = (xV = QV + +bV * wV) + BV * jV) + BV * EV, yV = qV;
              break;
            default:
              eV = xV = VV.coordinate, yV = (JV = (YV = nV + +bV * ZV) + BV * jV) + BV * EV, UV = qV
          }
          return {
            line: {
              x1: eV,
              y1: JV,
              x2: xV,
              y2: YV
            },
            iZ: {
              x: UV,
              y: yV
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var VV, eV = this.props,
            xV = eV.orientation,
            JV = eV.mirror;
          switch (xV) {
            case "left":
              VV = JV ? "start" : "end";
              break;
            case "right":
              VV = JV ? "end" : "start";
              break;
            default:
              VV = "middle"
          }
          return VV
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var VV = this.props,
            eV = VV.orientation,
            xV = VV.mirror,
            JV = "end";
          switch (eV) {
            case "left":
            case "right":
              JV = "middle";
              break;
            case "top":
              JV = xV ? "start" : "end";
              break;
            default:
              JV = xV ? "end" : "start"
          }
          return JV
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var VV = this.props,
            eV = VV.x,
            xV = VV.y,
            YV = VV.width,
            UV = VV.height,
            yV = VV.orientation,
            nV = VV.mirror,
            wV = VV.axisLine,
            ZV = PV(PV(PV({}, (0, bV.c)(this.props, !1)), (0, bV.c)(wV, !1)), {}, {
              fill: "none"
            });
          if ("top" === yV || "bottom" === yV) {
            var vV = +("top" === yV && !nV || "bottom" === yV && nV);
            ZV = PV(PV({}, ZV), {}, {
              x1: eV,
              y1: xV + vV * UV,
              x2: eV + YV,
              y2: xV + vV * UV
            })
          } else {
            var rV = +("left" === yV && !nV || "right" === yV && nV);
            ZV = PV(PV({}, ZV), {}, {
              x1: eV + rV * YV,
              y1: xV,
              x2: eV + rV * YV,
              y2: xV + UV
            })
          }
          return JV.createElement("line", FV({}, ZV, {
            className: (0, QV.c)("recharts-cartesian-axis-line", pV()(wV, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(VV, xV, YV) {
          var yV = this,
            nV = this.props,
            ZV = nV.tickLine,
            vV = nV.stroke,
            rV = nV.iZ,
            BV = nV.tickFormatter,
            jV = nV.unit,
            qV = (0, EV.e)(PV(PV({}, this.props), {}, {
              ticks: VV
            }), xV, YV),
            tV = this.getTickTextAnchor(),
            TV = this.getTickVerticalAnchor(),
            AV = (0, bV.c)(this.props, !1),
            NV = (0, bV.c)(rV, !1),
            XV = PV(PV({}, AV), {}, {
              fill: "none"
            }, (0, bV.c)(ZV, !1)),
            MV = qV.map((function(VV, xV) {
              var YV = yV.getTickLineCoord(VV),
                nV = YV.line,
                bV = YV.iZ,
                EV = PV(PV(PV(PV({
                  textAnchor: tV,
                  verticalAnchor: TV
                }, AV), {}, {
                  stroke: "none",
                  fill: vV
                }, NV), bV), {}, {
                  index: xV,
                  payload: VV,
                  visibleTicksCount: qV.length,
                  tickFormatter: BV
                });
              return JV.createElement(wV.e, FV({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(VV.value, "-").concat(VV.coordinate, "-").concat(VV.tickCoord)
              }, (0, kV.l)(yV.props, VV, xV)), ZV && JV.createElement("line", FV({}, XV, nV, {
                className: (0, QV.c)("recharts-cartesian-axis-tick-line", pV()(ZV, "className"))
              })), rV && eV.renderTickItem(rV, EV, "".concat(UV()(BV) ? BV(VV.value, xV) : VV.value).concat(jV || "")))
            }));
          return JV.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, MV)
        }
      }, {
        key: "render",
        value: function() {
          var VV = this,
            eV = this.props,
            xV = eV.axisLine,
            YV = eV.width,
            yV = eV.height,
            pV = eV.ticksGenerator,
            nV = eV.className;
          if (eV.hide) return null;
          var ZV = this.props,
            rV = ZV.ticks,
            kV = AV(ZV, qV),
            bV = rV;
          return UV()(pV) && (bV = rV && rV.length > 0 ? pV(this.props) : pV(kV)), YV <= 0 || yV <= 0 || !bV || !bV.length ? null : JV.createElement(wV.e, {
            className: (0, QV.c)("recharts-cartesian-axis", nV),
            ref: function(eV) {
              VV.layerReference = eV
            }
          }, xV && this.renderAxisLine(), this.renderTicks(bV, this.state.fontSize, this.state.letterSpacing), vV.b.renderCallByParent(this.props))
        }
      }]) && NV(xV.prototype, YV), yV && NV(xV, yV), Object.defineProperty(xV, "prototype", {
        writable: !1
      }), xV;
      var xV, YV, yV
    }(JV.Component);
    WV(gV, "displayName", "CartesianAxis"), WV(gV, "defaultProps", {
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
      iZ: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6962: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => WV
    });
    var JV = xV(62),
      YV = xV(5824),
      UV = xV.n(YV),
      yV = xV(5982),
      pV = xV(5713),
      QV = xV(5990),
      nV = xV(6696),
      wV = xV(6950),
      ZV = xV(6944),
      vV = xV(6887),
      rV = ["x1", "y1", "x2", "y2", "key"],
      kV = ["offset"];

    function bV(VV) {
      return bV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, bV(VV)
    }

    function EV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function BV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? EV(Object(xV), !0).forEach((function(eV) {
          jV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : EV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function jV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != bV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != bV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == bV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function qV() {
      return qV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, qV.apply(this, arguments)
    }

    function tV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }
    var FV = function(VV) {
      var eV = VV.fill;
      if (!eV || "none" === eV) return null;
      var xV = VV.fillOpacity,
        YV = VV.x,
        UV = VV.y,
        yV = VV.width,
        pV = VV.height,
        QV = VV.ry;
      return JV.createElement("rect", {
        x: YV,
        y: UV,
        ry: QV,
        width: yV,
        height: pV,
        stroke: "none",
        fill: eV,
        fillOpacity: xV,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function TV(VV, eV) {
      var xV;
      if (JV.isValidElement(VV)) xV = JV.cloneElement(VV, eV);
      else if (UV()(VV)) xV = VV(eV);
      else {
        var YV = eV.x1,
          yV = eV.y1,
          pV = eV.x2,
          nV = eV.y2,
          wV = eV.key,
          ZV = tV(eV, rV),
          vV = (0, QV.c)(ZV, !1),
          bV = (vV.offset, tV(vV, kV));
        xV = JV.createElement("line", qV({}, bV, {
          x1: YV,
          y1: yV,
          x2: pV,
          y2: nV,
          fill: "none",
          key: wV
        }))
      }
      return xV
    }

    function PV(VV) {
      var eV = VV.x,
        xV = VV.width,
        YV = VV.horizontal,
        UV = void 0 === YV || YV,
        yV = VV.horizontalPoints;
      if (!UV || !yV || !yV.length) return null;
      var pV = yV.map((function(JV, YV) {
        var yV = BV(BV({}, VV), {}, {
          x1: eV,
          y1: JV,
          x2: eV + xV,
          y2: JV,
          key: "line-".concat(YV),
          index: YV
        });
        return TV(UV, yV)
      }));
      return JV.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, pV)
    }

    function AV(VV) {
      var eV = VV.y,
        xV = VV.height,
        YV = VV.vertical,
        UV = void 0 === YV || YV,
        yV = VV.verticalPoints;
      if (!UV || !yV || !yV.length) return null;
      var pV = yV.map((function(JV, YV) {
        var yV = BV(BV({}, VV), {}, {
          x1: JV,
          y1: eV,
          x2: JV,
          y2: eV + xV,
          key: "line-".concat(YV),
          index: YV
        });
        return TV(UV, yV)
      }));
      return JV.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, pV)
    }

    function NV(VV) {
      var eV = VV.horizontalFill,
        xV = VV.fillOpacity,
        YV = VV.x,
        UV = VV.y,
        yV = VV.width,
        pV = VV.height,
        QV = VV.horizontalPoints,
        nV = VV.horizontal;
      if (!(void 0 === nV || nV) || !eV || !eV.length) return null;
      var wV = QV.map((function(VV) {
        return Math.round(VV + UV - UV)
      })).sort((function(VV, eV) {
        return VV - eV
      }));
      UV !== wV[0] && wV.unshift(0);
      var ZV = wV.map((function(VV, QV) {
        var nV = !wV[QV + 1] ? UV + pV - VV : wV[QV + 1] - VV;
        if (nV <= 0) return null;
        var ZV = QV % eV.length;
        return JV.createElement("rect", {
          key: "react-".concat(QV),
          y: VV,
          x: YV,
          height: nV,
          width: yV,
          stroke: "none",
          fill: eV[ZV],
          fillOpacity: xV,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return JV.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, ZV)
    }

    function XV(VV) {
      var eV = VV.vertical,
        xV = void 0 === eV || eV,
        YV = VV.verticalFill,
        UV = VV.fillOpacity,
        yV = VV.x,
        pV = VV.y,
        QV = VV.width,
        nV = VV.height,
        wV = VV.verticalPoints;
      if (!xV || !YV || !YV.length) return null;
      var ZV = wV.map((function(VV) {
        return Math.round(VV + yV - yV)
      })).sort((function(VV, eV) {
        return VV - eV
      }));
      yV !== ZV[0] && ZV.unshift(0);
      var vV = ZV.map((function(VV, eV) {
        var xV = !ZV[eV + 1] ? yV + QV - VV : ZV[eV + 1] - VV;
        if (xV <= 0) return null;
        var wV = eV % YV.length;
        return JV.createElement("rect", {
          key: "react-".concat(eV),
          x: VV,
          y: pV,
          width: xV,
          height: nV,
          stroke: "none",
          fill: YV[wV],
          fillOpacity: UV,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return JV.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, vV)
    }
    var MV = function(VV, eV) {
        var xV = VV.xAxis,
          JV = VV.width,
          YV = VV.height,
          UV = VV.offset;
        return (0, nV.C)((0, wV.e)(BV(BV(BV({}, ZV.e.defaultProps), xV), {}, {
          ticks: (0, nV.R)(xV, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: JV,
            height: YV
          }
        })), UV.left, UV.left + UV.width, eV)
      },
      zV = function(VV, eV) {
        var xV = VV.yAxis,
          JV = VV.width,
          YV = VV.height,
          UV = VV.offset;
        return (0, nV.C)((0, wV.e)(BV(BV(BV({}, ZV.e.defaultProps), xV), {}, {
          ticks: (0, nV.R)(xV, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: JV,
            height: YV
          }
        })), UV.top, UV.top + UV.height, eV)
      },
      GV = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function WV(VV) {
      var eV, xV, YV, QV, nV, wV, ZV = (0, vV.j)(),
        rV = (0, vV.h)(),
        kV = (0, vV.p)(),
        EV = BV(BV({}, VV), {}, {
          stroke: null !== (eV = VV.stroke) && void 0 !== eV ? eV : GV.stroke,
          fill: null !== (xV = VV.fill) && void 0 !== xV ? xV : GV.fill,
          horizontal: null !== (YV = VV.horizontal) && void 0 !== YV ? YV : GV.horizontal,
          horizontalFill: null !== (QV = VV.horizontalFill) && void 0 !== QV ? QV : GV.horizontalFill,
          vertical: null !== (nV = VV.vertical) && void 0 !== nV ? nV : GV.vertical,
          verticalFill: null !== (wV = VV.verticalFill) && void 0 !== wV ? wV : GV.verticalFill,
          x: (0, pV.A)(VV.x) ? VV.x : kV.left,
          y: (0, pV.A)(VV.y) ? VV.y : kV.top,
          width: (0, pV.A)(VV.width) ? VV.width : kV.width,
          height: (0, pV.A)(VV.height) ? VV.height : kV.height
        }),
        jV = EV.x,
        tV = EV.y,
        TV = EV.width,
        WV = EV.height,
        RV = EV.syncWithTicks,
        gV = EV.horizontalValues,
        DV = EV.verticalValues,
        iV = (0, vV.e)(),
        CV = (0, vV.x)();
      if (!(0, pV.A)(TV) || TV <= 0 || !(0, pV.A)(WV) || WV <= 0 || !(0, pV.A)(jV) || jV !== +jV || !(0, pV.A)(tV) || tV !== +tV) return null;
      var aV = EV.verticalCoordinatesGenerator || MV,
        oV = EV.horizontalCoordinatesGenerator || zV,
        cV = EV.horizontalPoints,
        hV = EV.verticalPoints;
      if ((!cV || !cV.length) && UV()(oV)) {
        var lV = gV && gV.length,
          LV = oV({
            yAxis: CV ? BV(BV({}, CV), {}, {
              ticks: lV ? gV : CV.ticks
            }) : void 0,
            width: ZV,
            height: rV,
            offset: kV
          }, !!lV || RV);
        (0, yV.c)(Array.isArray(LV), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(bV(LV), "]")), Array.isArray(LV) && (cV = LV)
      }
      if ((!hV || !hV.length) && UV()(aV)) {
        var fV = DV && DV.length,
          mV = aV({
            xAxis: iV ? BV(BV({}, iV), {}, {
              ticks: fV ? DV : iV.ticks
            }) : void 0,
            width: ZV,
            height: rV,
            offset: kV
          }, !!fV || RV);
        (0, yV.c)(Array.isArray(mV), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(bV(mV), "]")), Array.isArray(mV) && (hV = mV)
      }
      return JV.createElement("g", {
        className: "recharts-cartesian-grid"
      }, JV.createElement(FV, {
        fill: EV.fill,
        fillOpacity: EV.fillOpacity,
        x: EV.x,
        y: EV.y,
        width: EV.width,
        height: EV.height,
        ry: EV.ry
      }), JV.createElement(PV, qV({}, EV, {
        offset: kV,
        horizontalPoints: cV,
        xAxis: iV,
        yAxis: CV
      })), JV.createElement(AV, qV({}, EV, {
        offset: kV,
        verticalPoints: hV,
        xAxis: iV,
        yAxis: CV
      })), JV.createElement(NV, qV({}, EV, {
        horizontalPoints: cV
      })), JV.createElement(XV, qV({}, EV, {
        verticalPoints: hV
      })))
    }
    WV.displayName = "CartesianGrid"
  },
  6765: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => tV
    });
    var JV = xV(62),
      YV = xV(6509),
      UV = xV(6518),
      yV = xV(5990),
      pV = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function QV(VV) {
      return QV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, QV(VV)
    }

    function nV() {
      return nV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, nV.apply(this, arguments)
    }

    function wV(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        var xV = null == VV ? null : "undefined" != typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
        if (null != xV) {
          var JV, YV, UV, yV, pV = [],
            QV = !0,
            nV = !1;
          try {
            if (UV = (xV = xV.call(VV)).next, 0 === eV) {
              if (Object(xV) !== xV) return;
              QV = !1
            } else
              for (; !(QV = (JV = UV.call(xV)).done) && (pV.push(JV.value), pV.length !== eV); QV = !0);
          } catch (VV) {
            nV = !0, YV = VV
          } finally {
            try {
              if (!QV && null != xV.return && (yV = xV.return(), Object(yV) !== yV)) return
            } finally {
              if (nV) throw YV
            }
          }
          return pV
        }
      }(VV, eV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return ZV(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return ZV(VV, eV)
      }(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ZV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function vV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function rV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, qV(JV.key), JV)
      }
    }

    function kV(VV, eV, xV) {
      return eV = EV(eV),
        function(VV, eV) {
          if (eV && ("object" === QV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, bV() ? Reflect.construct(eV, xV || [], EV(VV).constructor) : eV.apply(VV, xV))
    }

    function bV() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (bV = function() {
        return !!VV
      })()
    }

    function EV(VV) {
      return EV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, EV(VV)
    }

    function BV(VV, eV) {
      return BV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, BV(VV, eV)
    }

    function jV(VV, eV, xV) {
      return (eV = qV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function qV(VV) {
      var eV = function(VV, eV) {
        if ("object" != QV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != QV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == QV(eV) ? eV : eV + ""
    }
    var tV = function(VV) {
      function eV() {
        return function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, eV), kV(this, eV, arguments)
      }
      return function(VV, eV) {
        if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
        VV.prototype = Object.create(eV && eV.prototype, {
          constructor: {
            value: VV,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(VV, "prototype", {
          writable: !1
        }), eV && BV(VV, eV)
      }(eV, VV), xV = eV, (QV = [{
        key: "render",
        value: function() {
          var VV = this.props,
            eV = VV.offset,
            xV = VV.layout,
            QV = VV.width,
            ZV = VV.dataKey,
            rV = VV.data,
            kV = VV.dataPointFormatter,
            bV = VV.xAxis,
            EV = VV.yAxis,
            BV = vV(VV, pV),
            jV = (0, yV.c)(BV, !1);
          "x" === this.props.direction && "number" !== bV.type && (0, YV.e)(!1);
          var qV = rV.map((function(VV) {
            var YV = kV(VV, ZV),
              yV = YV.x,
              pV = YV.y,
              vV = YV.value,
              rV = YV.errorVal;
            if (!rV) return null;
            var BV, qV, tV = [];
            if (Array.isArray(rV)) {
              var FV = wV(rV, 2);
              BV = FV[0], qV = FV[1]
            } else BV = qV = rV;
            if ("vertical" === xV) {
              var TV = bV.scale,
                PV = pV + eV,
                AV = PV + QV,
                NV = PV - QV,
                XV = TV(vV - BV),
                MV = TV(vV + qV);
              tV.push({
                x1: MV,
                y1: AV,
                x2: MV,
                y2: NV
              }), tV.push({
                x1: XV,
                y1: PV,
                x2: MV,
                y2: PV
              }), tV.push({
                x1: XV,
                y1: AV,
                x2: XV,
                y2: NV
              })
            } else if ("horizontal" === xV) {
              var zV = EV.scale,
                GV = yV + eV,
                WV = GV - QV,
                RV = GV + QV,
                gV = zV(vV - BV),
                DV = zV(vV + qV);
              tV.push({
                x1: WV,
                y1: DV,
                x2: RV,
                y2: DV
              }), tV.push({
                x1: GV,
                y1: gV,
                x2: GV,
                y2: DV
              }), tV.push({
                x1: WV,
                y1: gV,
                x2: RV,
                y2: gV
              })
            }
            return JV.createElement(UV.e, nV({
              className: "recharts-errorBar",
              key: "bar-".concat(tV.map((function(VV) {
                return "".concat(VV.x1, "-").concat(VV.x2, "-").concat(VV.y1, "-").concat(VV.y2)
              })))
            }, jV), tV.map((function(VV) {
              return JV.createElement("line", nV({}, VV, {
                key: "line-".concat(VV.x1, "-").concat(VV.x2, "-").concat(VV.y1, "-").concat(VV.y2)
              }))
            })))
          }));
          return JV.createElement(UV.e, {
            className: "recharts-errorBars"
          }, qV)
        }
      }]) && rV(xV.prototype, QV), ZV && rV(xV, ZV), Object.defineProperty(xV, "prototype", {
        writable: !1
      }), xV;
      var xV, QV, ZV
    }(JV.Component);
    jV(tV, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), jV(tV, "displayName", "ErrorBar")
  },
  6931: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => oV
    });
    var JV = xV(62),
      YV = xV(6672),
      UV = xV(5824),
      yV = xV.n(UV),
      pV = xV(5974),
      QV = xV.n(pV),
      nV = xV(6752),
      wV = xV.n(nV),
      ZV = xV(5609),
      vV = xV(6922),
      rV = xV(6665),
      kV = xV(6518),
      bV = xV(6833),
      EV = xV(6765),
      BV = xV(5713),
      jV = xV(5990),
      qV = xV(6531),
      tV = xV(6696),
      FV = ["type", "layout", "connectNulls", "ref"],
      TV = ["key"];

    function PV(VV) {
      return PV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, PV(VV)
    }

    function AV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function NV() {
      return NV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, NV.apply(this, arguments)
    }

    function XV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function MV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? XV(Object(xV), !0).forEach((function(eV) {
          CV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : XV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function zV(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return GV(VV)
      }(VV) || function(VV) {
        if ("undefined" !== typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
      }(VV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return GV(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return GV(VV, eV)
      }(VV) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function GV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function WV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, aV(JV.key), JV)
      }
    }

    function RV(VV, eV, xV) {
      return eV = DV(eV),
        function(VV, eV) {
          if (eV && ("object" === PV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, gV() ? Reflect.construct(eV, xV || [], DV(VV).constructor) : eV.apply(VV, xV))
    }

    function gV() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (gV = function() {
        return !!VV
      })()
    }

    function DV(VV) {
      return DV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, DV(VV)
    }

    function iV(VV, eV) {
      return iV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, iV(VV, eV)
    }

    function CV(VV, eV, xV) {
      return (eV = aV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function aV(VV) {
      var eV = function(VV, eV) {
        if ("object" != PV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != PV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == PV(eV) ? eV : eV + ""
    }
    var oV = function(VV) {
      function eV() {
        var VV;
        ! function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, eV);
        for (var xV = arguments.length, JV = new Array(xV), YV = 0; YV < xV; YV++) JV[YV] = arguments[YV];
        return CV(VV = RV(this, eV, [].concat(JV)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), CV(VV, "generateSimpleStrokeDasharray", (function(VV, eV) {
          return "".concat(eV, "px ").concat(VV - eV, "px")
        })), CV(VV, "getStrokeDasharray", (function(xV, JV, YV) {
          var UV = YV.reduce((function(VV, eV) {
            return VV + eV
          }));
          if (!UV) return VV.generateSimpleStrokeDasharray(JV, xV);
          for (var yV = Math.floor(xV / UV), pV = xV % UV, QV = JV - xV, nV = [], wV = 0, ZV = 0; wV < YV.length; ZV += YV[wV], ++wV)
            if (ZV + YV[wV] > pV) {
              nV = [].concat(zV(YV.slice(0, wV)), [pV - ZV]);
              break
            } var vV = nV.length % 2 === 0 ? [0, QV] : [QV];
          return [].concat(zV(eV.repeat(YV, yV)), zV(nV), vV).map((function(VV) {
            return "".concat(VV, "px")
          })).join(", ")
        })), CV(VV, "id", (0, BV.H)("recharts-line-")), CV(VV, "pathRef", (function(eV) {
          VV.mainCurve = eV
        })), CV(VV, "handleAnimationEnd", (function() {
          VV.setState({
            isAnimationFinished: !0
          }), VV.props.onAnimationEnd && VV.props.onAnimationEnd()
        })), CV(VV, "handleAnimationStart", (function() {
          VV.setState({
            isAnimationFinished: !1
          }), VV.props.onAnimationStart && VV.props.onAnimationStart()
        })), VV
      }
      return function(VV, eV) {
        if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
        VV.prototype = Object.create(eV && eV.prototype, {
          constructor: {
            value: VV,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(VV, "prototype", {
          writable: !1
        }), eV && iV(VV, eV)
      }(eV, VV), xV = eV, UV = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var VV = this.getTotalLength();
            this.setState({
              totalLength: VV
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var VV = this.getTotalLength();
            VV !== this.state.totalLength && this.setState({
              totalLength: VV
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var VV = this.mainCurve;
          try {
            return VV && VV.getTotalLength && VV.getTotalLength() || 0
          } catch (eV) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(VV, eV) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var xV = this.props,
            YV = xV.points,
            UV = xV.xAxis,
            yV = xV.yAxis,
            pV = xV.layout,
            QV = xV.children,
            nV = (0, jV.g)(QV, EV.e);
          if (!nV) return null;
          var wV = function(VV, eV) {
              return {
                x: VV.x,
                y: VV.y,
                value: VV.value,
                errorVal: (0, tV.V)(VV.payload, eV)
              }
            },
            ZV = {
              clipPath: VV ? "url(#clipPath-".concat(eV, ")") : null
            };
          return JV.createElement(kV.e, ZV, nV.map((function(VV) {
            return JV.cloneElement(VV, {
              key: "bar-".concat(VV.props.dataKey),
              data: YV,
              xAxis: UV,
              yAxis: yV,
              layout: pV,
              dataPointFormatter: wV
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(VV, xV, YV) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var UV = this.props,
            yV = UV.dot,
            pV = UV.points,
            QV = UV.dataKey,
            nV = (0, jV.c)(this.props, !1),
            wV = (0, jV.c)(yV, !0),
            ZV = pV.map((function(VV, xV) {
              var JV = MV(MV(MV({
                key: "dot-".concat(xV),
                r: 3
              }, nV), wV), {}, {
                index: xV,
                cx: VV.x,
                cy: VV.y,
                value: VV.value,
                dataKey: QV,
                payload: VV.payload,
                points: pV
              });
              return eV.renderDotItem(yV, JV)
            })),
            vV = {
              clipPath: VV ? "url(#clipPath-".concat(xV ? "" : "dots-").concat(YV, ")") : null
            };
          return JV.createElement(kV.e, NV({
            className: "recharts-line-dots",
            key: "dots"
          }, vV), ZV)
        }
      }, {
        key: "renderCurveStatically",
        value: function(VV, eV, xV, YV) {
          var UV = this.props,
            yV = UV.type,
            pV = UV.layout,
            QV = UV.connectNulls,
            nV = (UV.ref, AV(UV, FV)),
            wV = MV(MV(MV({}, (0, jV.c)(nV, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: eV ? "url(#clipPath-".concat(xV, ")") : null,
              points: VV
            }, YV), {}, {
              type: yV,
              layout: pV,
              connectNulls: QV
            });
          return JV.createElement(vV.b, NV({}, wV, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(VV, eV) {
          var xV = this,
            UV = this.props,
            yV = UV.points,
            pV = UV.strokeDasharray,
            QV = UV.isAnimationActive,
            nV = UV.animationBegin,
            wV = UV.animationDuration,
            ZV = UV.animationEasing,
            vV = UV.animationId,
            rV = UV.animateNewValues,
            kV = UV.width,
            bV = UV.height,
            EV = this.state,
            jV = EV.prevPoints,
            qV = EV.totalLength;
          return JV.createElement(YV.e, {
            NZ: nV,
            duration: wV,
            isActive: QV,
            easing: ZV,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(vV),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(JV) {
            var YV = JV.t;
            if (jV) {
              var UV = jV.length / yV.length,
                QV = yV.map((function(VV, eV) {
                  var xV = Math.floor(eV * UV);
                  if (jV[xV]) {
                    var JV = jV[xV],
                      yV = (0, BV.s)(JV.x, VV.x),
                      pV = (0, BV.s)(JV.y, VV.y);
                    return MV(MV({}, VV), {}, {
                      x: yV(YV),
                      y: pV(YV)
                    })
                  }
                  if (rV) {
                    var QV = (0, BV.s)(2 * kV, VV.x),
                      nV = (0, BV.s)(bV / 2, VV.y);
                    return MV(MV({}, VV), {}, {
                      x: QV(YV),
                      y: nV(YV)
                    })
                  }
                  return MV(MV({}, VV), {}, {
                    x: VV.x,
                    y: VV.y
                  })
                }));
              return xV.renderCurveStatically(QV, VV, eV)
            }
            var nV, wV = (0, BV.s)(0, qV)(YV);
            if (pV) {
              var ZV = "".concat(pV).split(/[,\s]+/gim).map((function(VV) {
                return parseFloat(VV)
              }));
              nV = xV.getStrokeDasharray(wV, qV, ZV)
            } else nV = xV.generateSimpleStrokeDasharray(qV, wV);
            return xV.renderCurveStatically(yV, VV, eV, {
              strokeDasharray: nV
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(VV, eV) {
          var xV = this.props,
            JV = xV.points,
            YV = xV.isAnimationActive,
            UV = this.state,
            yV = UV.prevPoints,
            pV = UV.totalLength;
          return YV && JV && JV.length && (!yV && pV > 0 || !wV()(yV, JV)) ? this.renderCurveWithAnimation(VV, eV) : this.renderCurveStatically(JV, VV, eV)
        }
      }, {
        key: "render",
        value: function() {
          var VV, eV = this.props,
            xV = eV.hide,
            YV = eV.dot,
            UV = eV.points,
            yV = eV.className,
            pV = eV.xAxis,
            nV = eV.yAxis,
            wV = eV.top,
            vV = eV.left,
            rV = eV.width,
            EV = eV.height,
            BV = eV.isAnimationActive,
            qV = eV.id;
          if (xV || !UV || !UV.length) return null;
          var tV = this.state.isAnimationFinished,
            FV = 1 === UV.length,
            TV = (0, ZV.c)("recharts-line", yV),
            PV = pV && pV.allowDataOverflow,
            AV = nV && nV.allowDataOverflow,
            NV = PV || AV,
            XV = QV()(qV) ? this.id : qV,
            MV = null !== (VV = (0, jV.c)(YV, !1)) && void 0 !== VV ? VV : {
              r: 3,
              strokeWidth: 2
            },
            zV = MV.r,
            GV = void 0 === zV ? 3 : zV,
            WV = MV.strokeWidth,
            RV = void 0 === WV ? 2 : WV,
            gV = ((0, jV.r)(YV) ? YV : {}).clipDot,
            DV = void 0 === gV || gV,
            iV = 2 * GV + RV;
          return JV.createElement(kV.e, {
            className: TV
          }, PV || AV ? JV.createElement("defs", null, JV.createElement("clipPath", {
            id: "clipPath-".concat(XV)
          }, JV.createElement("rect", {
            x: PV ? vV : vV - rV / 2,
            y: AV ? wV : wV - EV / 2,
            width: PV ? rV : 2 * rV,
            height: AV ? EV : 2 * EV
          })), !DV && JV.createElement("clipPath", {
            id: "clipPath-dots-".concat(XV)
          }, JV.createElement("rect", {
            x: vV - iV / 2,
            y: wV - iV / 2,
            width: rV + iV,
            height: EV + iV
          }))) : null, !FV && this.renderCurve(NV, XV), this.renderErrorBar(NV, XV), (FV || YV) && this.renderDots(NV, DV, XV), (!BV || tV) && bV.c.renderCallByParent(this.props, UV))
        }
      }], pV = [{
        key: "getDerivedStateFromProps",
        value: function(VV, eV) {
          return VV.animationId !== eV.prevAnimationId ? {
            prevAnimationId: VV.animationId,
            curPoints: VV.points,
            prevPoints: eV.curPoints
          } : VV.points !== eV.curPoints ? {
            curPoints: VV.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(VV, eV) {
          for (var xV = VV.length % 2 !== 0 ? [].concat(zV(VV), [0]) : VV, JV = [], YV = 0; YV < eV; ++YV) JV = [].concat(zV(JV), zV(xV));
          return JV
        }
      }, {
        key: "renderDotItem",
        value: function(VV, eV) {
          var xV;
          if (JV.isValidElement(VV)) xV = JV.cloneElement(VV, eV);
          else if (yV()(VV)) xV = VV(eV);
          else {
            var YV = eV.key,
              UV = AV(eV, TV),
              pV = (0, ZV.c)("recharts-line-dot", "boolean" !== typeof VV ? VV.className : "");
            xV = JV.createElement(rV.e, NV({
              key: YV
            }, UV, {
              className: pV
            }))
          }
          return xV
        }
      }], UV && WV(xV.prototype, UV), pV && WV(xV, pV), Object.defineProperty(xV, "prototype", {
        writable: !1
      }), xV;
      var xV, UV, pV
    }(JV.PureComponent);
    CV(oV, "displayName", "Line"), CV(oV, "defaultProps", {
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
      isAnimationActive: !qV.e.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), CV(oV, "getComposedData", (function(VV) {
      var eV = VV.props,
        xV = VV.xAxis,
        JV = VV.yAxis,
        YV = VV.xAxisTicks,
        UV = VV.yAxisTicks,
        yV = VV.dataKey,
        pV = VV.bandSize,
        nV = VV.displayedData,
        wV = VV.offset,
        ZV = eV.layout;
      return MV({
        points: nV.map((function(VV, eV) {
          var nV = (0, tV.V)(VV, yV);
          return "horizontal" === ZV ? {
            x: (0, tV.z)({
              axis: xV,
              ticks: YV,
              bandSize: pV,
              entry: VV,
              index: eV
            }),
            y: QV()(nV) ? null : JV.scale(nV),
            value: nV,
            payload: VV
          } : {
            x: QV()(nV) ? null : xV.scale(nV),
            y: (0, tV.z)({
              axis: JV,
              ticks: UV,
              bandSize: pV,
              entry: VV,
              index: eV
            }),
            value: nV,
            payload: VV
          }
        })),
        layout: ZV
      }, wV)
    }))
  },
  6873: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => RV
    });
    var JV = xV(62),
      YV = xV(5824),
      UV = xV.n(YV),
      yV = xV(6875),
      pV = xV.n(yV),
      QV = xV(5609),
      nV = xV(6518),
      wV = xV(6782),
      ZV = xV(6787),
      vV = xV(5713),
      rV = xV(6792),
      kV = xV(5982),
      bV = xV(5990),
      EV = xV(6887);

    function BV(VV) {
      return BV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, BV(VV)
    }

    function jV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, XV(JV.key), JV)
      }
    }

    function qV(VV, eV, xV) {
      return eV = FV(eV),
        function(VV, eV) {
          if (eV && ("object" === BV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, tV() ? Reflect.construct(eV, xV || [], FV(VV).constructor) : eV.apply(VV, xV))
    }

    function tV() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (tV = function() {
        return !!VV
      })()
    }

    function FV(VV) {
      return FV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, FV(VV)
    }

    function TV(VV, eV) {
      return TV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, TV(VV, eV)
    }

    function PV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function AV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? PV(Object(xV), !0).forEach((function(eV) {
          NV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : PV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function NV(VV, eV, xV) {
      return (eV = XV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function XV(VV) {
      var eV = function(VV, eV) {
        if ("object" != BV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != BV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == BV(eV) ? eV : eV + ""
    }

    function MV(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        var xV = null == VV ? null : "undefined" != typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
        if (null != xV) {
          var JV, YV, UV, yV, pV = [],
            QV = !0,
            nV = !1;
          try {
            if (UV = (xV = xV.call(VV)).next, 0 === eV) {
              if (Object(xV) !== xV) return;
              QV = !1
            } else
              for (; !(QV = (JV = UV.call(xV)).done) && (pV.push(JV.value), pV.length !== eV); QV = !0);
          } catch (VV) {
            nV = !0, YV = VV
          } finally {
            try {
              if (!QV && null != xV.return && (yV = xV.return(), Object(yV) !== yV)) return
            } finally {
              if (nV) throw YV
            }
          }
          return pV
        }
      }(VV, eV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return zV(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return zV(VV, eV)
      }(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function zV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function GV() {
      return GV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, GV.apply(this, arguments)
    }

    function WV(VV) {
      var eV = VV.x,
        xV = VV.y,
        YV = VV.segment,
        yV = VV.xAxisId,
        BV = VV.yAxisId,
        jV = VV.shape,
        qV = VV.className,
        tV = VV.alwaysShow,
        FV = (0, EV.n)(),
        TV = (0, EV.r)(yV),
        PV = (0, EV.v)(BV),
        NV = (0, EV.q)();
      if (!FV || !NV) return null;
      (0, kV.c)(void 0 === tV, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var XV = function(VV, eV, xV, JV, YV, UV, yV, QV, nV) {
        var wV = YV.x,
          vV = YV.y,
          rV = YV.width,
          kV = YV.height;
        if (xV) {
          var bV = nV.y,
            EV = VV.y.apply(bV, {
              position: UV
            });
          if ((0, ZV.c)(nV, "discard") && !VV.y.isInRange(EV)) return null;
          var BV = [{
            x: wV + rV,
            y: EV
          }, {
            x: wV,
            y: EV
          }];
          return "left" === QV ? BV.reverse() : BV
        }
        if (eV) {
          var jV = nV.x,
            qV = VV.x.apply(jV, {
              position: UV
            });
          if ((0, ZV.c)(nV, "discard") && !VV.x.isInRange(qV)) return null;
          var tV = [{
            x: qV,
            y: vV + kV
          }, {
            x: qV,
            y: vV
          }];
          return "top" === yV ? tV.reverse() : tV
        }
        if (JV) {
          var FV = nV.segment.map((function(eV) {
            return VV.apply(eV, {
              position: UV
            })
          }));
          return (0, ZV.c)(nV, "discard") && pV()(FV, (function(eV) {
            return !VV.isInRange(eV)
          })) ? null : FV
        }
        return null
      }((0, rV.d)({
        x: TV.scale,
        y: PV.scale
      }), (0, vV.w)(eV), (0, vV.w)(xV), YV && 2 === YV.length, NV, VV.position, TV.orientation, PV.orientation, VV);
      if (!XV) return null;
      var zV = MV(XV, 2),
        WV = zV[0],
        RV = WV.x,
        gV = WV.y,
        DV = zV[1],
        iV = DV.x,
        CV = DV.y,
        aV = AV(AV({
          clipPath: (0, ZV.c)(VV, "hidden") ? "url(#".concat(FV, ")") : void 0
        }, (0, bV.c)(VV, !0)), {}, {
          x1: RV,
          y1: gV,
          x2: iV,
          y2: CV
        });
      return JV.createElement(nV.e, {
        className: (0, QV.c)("recharts-reference-line", qV)
      }, function(VV, eV) {
        return JV.isValidElement(VV) ? JV.cloneElement(VV, eV) : UV()(VV) ? VV(eV) : JV.createElement("line", GV({}, eV, {
          className: "recharts-reference-line-line"
        }))
      }(jV, aV), wV.b.renderCallByParent(VV, (0, rV.n)({
        x1: RV,
        y1: gV,
        x2: iV,
        y2: CV
      })))
    }
    var RV = function(VV) {
      function eV() {
        return function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, eV), qV(this, eV, arguments)
      }
      return function(VV, eV) {
        if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
        VV.prototype = Object.create(eV && eV.prototype, {
          constructor: {
            value: VV,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(VV, "prototype", {
          writable: !1
        }), eV && TV(VV, eV)
      }(eV, VV), xV = eV, (YV = [{
        key: "render",
        value: function() {
          return JV.createElement(WV, this.props)
        }
      }]) && jV(xV.prototype, YV), UV && jV(xV, UV), Object.defineProperty(xV, "prototype", {
        writable: !1
      }), xV;
      var xV, YV, UV
    }(JV.Component);
    NV(RV, "displayName", "ReferenceLine"), NV(RV, "defaultProps", {
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
  6938: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => jV
    });
    var JV = xV(62),
      YV = xV(5609),
      UV = xV(6887),
      yV = xV(6944),
      pV = xV(6696);

    function QV(VV) {
      return QV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, QV(VV)
    }

    function nV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, bV(JV.key), JV)
      }
    }

    function wV(VV, eV, xV) {
      return eV = vV(eV),
        function(VV, eV) {
          if (eV && ("object" === QV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, ZV() ? Reflect.construct(eV, xV || [], vV(VV).constructor) : eV.apply(VV, xV))
    }

    function ZV() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (ZV = function() {
        return !!VV
      })()
    }

    function vV(VV) {
      return vV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, vV(VV)
    }

    function rV(VV, eV) {
      return rV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, rV(VV, eV)
    }

    function kV(VV, eV, xV) {
      return (eV = bV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function bV(VV) {
      var eV = function(VV, eV) {
        if ("object" != QV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != QV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == QV(eV) ? eV : eV + ""
    }

    function EV() {
      return EV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, EV.apply(this, arguments)
    }

    function BV(VV) {
      var eV = VV.xAxisId,
        xV = (0, UV.j)(),
        QV = (0, UV.h)(),
        nV = (0, UV.r)(eV);
      return null == nV ? null : JV.createElement(yV.e, EV({}, nV, {
        className: (0, YV.c)("recharts-".concat(nV.axisType, " ").concat(nV.axisType), nV.className),
        viewBox: {
          x: 0,
          y: 0,
          width: xV,
          height: QV
        },
        ticksGenerator: function(VV) {
          return (0, pV.R)(VV, !0)
        }
      }))
    }
    var jV = function(VV) {
      function eV() {
        return function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, eV), wV(this, eV, arguments)
      }
      return function(VV, eV) {
        if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
        VV.prototype = Object.create(eV && eV.prototype, {
          constructor: {
            value: VV,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(VV, "prototype", {
          writable: !1
        }), eV && rV(VV, eV)
      }(eV, VV), xV = eV, (YV = [{
        key: "render",
        value: function() {
          return JV.createElement(BV, this.props)
        }
      }]) && nV(xV.prototype, YV), UV && nV(xV, UV), Object.defineProperty(xV, "prototype", {
        writable: !1
      }), xV;
      var xV, YV, UV
    }(JV.Component);
    kV(jV, "displayName", "XAxis"), kV(jV, "defaultProps", {
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
  6959: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => jV
    });
    var JV = xV(62),
      YV = xV(5609),
      UV = xV(6887),
      yV = xV(6944),
      pV = xV(6696);

    function QV(VV) {
      return QV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, QV(VV)
    }

    function nV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, bV(JV.key), JV)
      }
    }

    function wV(VV, eV, xV) {
      return eV = vV(eV),
        function(VV, eV) {
          if (eV && ("object" === QV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, ZV() ? Reflect.construct(eV, xV || [], vV(VV).constructor) : eV.apply(VV, xV))
    }

    function ZV() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (ZV = function() {
        return !!VV
      })()
    }

    function vV(VV) {
      return vV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, vV(VV)
    }

    function rV(VV, eV) {
      return rV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, rV(VV, eV)
    }

    function kV(VV, eV, xV) {
      return (eV = bV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function bV(VV) {
      var eV = function(VV, eV) {
        if ("object" != QV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != QV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == QV(eV) ? eV : eV + ""
    }

    function EV() {
      return EV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, EV.apply(this, arguments)
    }
    var BV = function(VV) {
        var eV = VV.yAxisId,
          xV = (0, UV.j)(),
          QV = (0, UV.h)(),
          nV = (0, UV.v)(eV);
        return null == nV ? null : JV.createElement(yV.e, EV({}, nV, {
          className: (0, YV.c)("recharts-".concat(nV.axisType, " ").concat(nV.axisType), nV.className),
          viewBox: {
            x: 0,
            y: 0,
            width: xV,
            height: QV
          },
          ticksGenerator: function(VV) {
            return (0, pV.R)(VV, !0)
          }
        }))
      },
      jV = function(VV) {
        function eV() {
          return function(VV, eV) {
            if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
          }(this, eV), wV(this, eV, arguments)
        }
        return function(VV, eV) {
          if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
          VV.prototype = Object.create(eV && eV.prototype, {
            constructor: {
              value: VV,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(VV, "prototype", {
            writable: !1
          }), eV && rV(VV, eV)
        }(eV, VV), xV = eV, (YV = [{
          key: "render",
          value: function() {
            return JV.createElement(BV, this.props)
          }
        }]) && nV(xV.prototype, YV), UV && nV(xV, UV), Object.defineProperty(xV, "prototype", {
          writable: !1
        }), xV;
        var xV, YV, UV
      }(JV.Component);
    kV(jV, "displayName", "YAxis"), kV(jV, "defaultProps", {
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
  6950: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => bV
    });
    var JV = xV(5824),
      YV = xV.n(JV),
      UV = xV(5713),
      yV = xV(6687),
      pV = xV(6531),
      QV = xV(6792);

    function nV(VV, eV, xV) {
      if (eV < 1) return [];
      if (1 === eV && void 0 === xV) return VV;
      for (var JV = [], YV = 0; YV < VV.length; YV += eV) {
        if (void 0 !== xV && !0 !== xV(VV[YV])) return;
        JV.push(VV[YV])
      }
      return JV
    }

    function wV(VV, eV, xV, JV, YV) {
      if (VV * eV < VV * JV || VV * eV > VV * YV) return !1;
      var UV = xV();
      return VV * (eV - VV * UV / 2 - JV) >= 0 && VV * (eV + VV * UV / 2 - YV) <= 0
    }

    function ZV(VV) {
      return ZV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, ZV(VV)
    }

    function vV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function rV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? vV(Object(xV), !0).forEach((function(eV) {
          kV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : vV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function kV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != ZV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != ZV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == ZV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function bV(VV, eV, xV) {
      var JV = VV.iZ,
        ZV = VV.ticks,
        vV = VV.viewBox,
        kV = VV.minTickGap,
        bV = VV.orientation,
        EV = VV.interval,
        BV = VV.tickFormatter,
        jV = VV.unit,
        qV = VV.angle;
      if (!ZV || !ZV.length || !JV) return [];
      if ((0, UV.A)(EV) || pV.e.isSsr) return function(VV, eV) {
        return nV(VV, eV + 1)
      }(ZV, "number" === typeof EV && (0, UV.A)(EV) ? EV : 0);
      var tV = [],
        FV = "top" === bV || "bottom" === bV ? "width" : "height",
        TV = jV && "width" === FV ? (0, yV.h)(jV, {
          fontSize: eV,
          letterSpacing: xV
        }) : {
          width: 0,
          height: 0
        },
        PV = function(VV, JV) {
          var UV = YV()(BV) ? BV(VV.value, JV) : VV.value;
          return "width" === FV ? function(VV, eV, xV) {
            var JV = {
              width: VV.width + eV.width,
              height: VV.height + eV.height
            };
            return (0, QV.j)(JV, xV)
          }((0, yV.h)(UV, {
            fontSize: eV,
            letterSpacing: xV
          }), TV, qV) : (0, yV.h)(UV, {
            fontSize: eV,
            letterSpacing: xV
          })[FV]
        },
        AV = ZV.length >= 2 ? (0, UV.D)(ZV[1].coordinate - ZV[0].coordinate) : 1,
        NV = function(VV, eV, xV) {
          var JV = "width" === xV,
            YV = VV.x,
            UV = VV.y,
            yV = VV.width,
            pV = VV.height;
          return 1 === eV ? {
            start: JV ? YV : UV,
            end: JV ? YV + yV : UV + pV
          } : {
            start: JV ? YV + yV : UV + pV,
            end: JV ? YV : UV
          }
        }(vV, AV, FV);
      return "equidistantPreserveStart" === EV ? function(VV, eV, xV, JV, YV) {
        for (var UV, yV = (JV || []).slice(), pV = eV.start, QV = eV.end, ZV = 0, vV = 1, rV = pV, kV = function() {
            var eV = null === JV || void 0 === JV ? void 0 : JV[ZV];
            if (void 0 === eV) return {
              v: nV(JV, vV)
            };
            var UV, yV = ZV,
              kV = function() {
                return void 0 === UV && (UV = xV(eV, yV)), UV
              },
              bV = eV.coordinate,
              EV = 0 === ZV || wV(VV, bV, kV, rV, QV);
            EV || (ZV = 0, rV = pV, vV += 1), EV && (rV = bV + VV * (kV() / 2 + YV), ZV += vV)
          }; vV <= yV.length;)
          if (UV = kV()) return UV.v;
        return []
      }(AV, NV, PV, ZV, kV) : (tV = "preserveStart" === EV || "preserveStartEnd" === EV ? function(VV, eV, xV, JV, YV, UV) {
        var yV = (JV || []).slice(),
          pV = yV.length,
          QV = eV.start,
          nV = eV.end;
        if (UV) {
          var ZV = JV[pV - 1],
            vV = xV(ZV, pV - 1),
            kV = VV * (ZV.coordinate + VV * vV / 2 - nV);
          yV[pV - 1] = ZV = rV(rV({}, ZV), {}, {
            tickCoord: kV > 0 ? ZV.coordinate - kV * VV : ZV.coordinate
          }), wV(VV, ZV.tickCoord, (function() {
            return vV
          }), QV, nV) && (nV = ZV.tickCoord - VV * (vV / 2 + YV), yV[pV - 1] = rV(rV({}, ZV), {}, {
            isShow: !0
          }))
        }
        for (var bV = UV ? pV - 1 : pV, EV = function(eV) {
            var JV, UV = yV[eV],
              pV = function() {
                return void 0 === JV && (JV = xV(UV, eV)), JV
              };
            if (0 === eV) {
              var ZV = VV * (UV.coordinate - VV * pV() / 2 - QV);
              yV[eV] = UV = rV(rV({}, UV), {}, {
                tickCoord: ZV < 0 ? UV.coordinate - ZV * VV : UV.coordinate
              })
            } else yV[eV] = UV = rV(rV({}, UV), {}, {
              tickCoord: UV.coordinate
            });
            wV(VV, UV.tickCoord, pV, QV, nV) && (QV = UV.tickCoord + VV * (pV() / 2 + YV), yV[eV] = rV(rV({}, UV), {}, {
              isShow: !0
            }))
          }, BV = 0; BV < bV; BV++) EV(BV);
        return yV
      }(AV, NV, PV, ZV, kV, "preserveStartEnd" === EV) : function(VV, eV, xV, JV, YV) {
        for (var UV = (JV || []).slice(), yV = UV.length, pV = eV.start, QV = eV.end, nV = function(eV) {
            var JV, nV = UV[eV],
              ZV = function() {
                return void 0 === JV && (JV = xV(nV, eV)), JV
              };
            if (eV === yV - 1) {
              var vV = VV * (nV.coordinate + VV * ZV() / 2 - QV);
              UV[eV] = nV = rV(rV({}, nV), {}, {
                tickCoord: vV > 0 ? nV.coordinate - vV * VV : nV.coordinate
              })
            } else UV[eV] = nV = rV(rV({}, nV), {}, {
              tickCoord: nV.coordinate
            });
            wV(VV, nV.tickCoord, ZV, pV, QV) && (QV = nV.tickCoord - VV * (ZV() / 2 + YV), UV[eV] = rV(rV({}, nV), {}, {
              isShow: !0
            }))
          }, ZV = yV - 1; ZV >= 0; ZV--) nV(ZV);
        return UV
      }(AV, NV, PV, ZV, kV), tV.filter((function(VV) {
        return VV.isShow
      })))
    }
  },
  6964: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => QV
    });
    var JV = xV(6029),
      YV = xV(6824),
      UV = xV(6938),
      yV = xV(6959),
      pV = xV(6792),
      QV = (0, JV.e)({
        chartName: "BarChart",
        GraphicalChild: YV.b,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: UV.c
        }, {
          axisType: "yAxis",
          AxisComp: yV.e
        }],
        formatAxisMap: pV.h
      })
  },
  6020: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => Ye
    });
    var JV = xV(6029),
      YV = xV(6927),
      UV = xV(6824),
      yV = xV(6931),
      pV = xV(62),
      QV = xV(6672),
      nV = xV(5974),
      wV = xV.n(nV),
      ZV = xV(6752),
      vV = xV.n(ZV),
      rV = xV(5824),
      kV = xV.n(rV),
      bV = xV(5609),
      EV = xV(6518),
      BV = xV(6833),
      jV = xV(5990),
      qV = xV(6531);

    function tV(VV) {
      return tV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, tV(VV)
    }

    function FV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, MV(JV.key), JV)
      }
    }

    function TV(VV, eV, xV) {
      return eV = AV(eV),
        function(VV, eV) {
          if (eV && ("object" === tV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, PV() ? Reflect.construct(eV, xV || [], AV(VV).constructor) : eV.apply(VV, xV))
    }

    function PV() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (PV = function() {
        return !!VV
      })()
    }

    function AV(VV) {
      return AV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, AV(VV)
    }

    function NV(VV, eV) {
      return NV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, NV(VV, eV)
    }

    function XV(VV, eV, xV) {
      return (eV = MV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function MV(VV) {
      var eV = function(VV, eV) {
        if ("object" != tV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != tV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == tV(eV) ? eV : eV + ""
    }
    var zV = function(VV) {
      function eV() {
        return function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, eV), TV(this, eV, arguments)
      }
      return function(VV, eV) {
        if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
        VV.prototype = Object.create(eV && eV.prototype, {
          constructor: {
            value: VV,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(VV, "prototype", {
          writable: !1
        }), eV && NV(VV, eV)
      }(eV, VV), xV = eV, (JV = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && FV(xV.prototype, JV), YV && FV(xV, YV), Object.defineProperty(xV, "prototype", {
        writable: !1
      }), xV;
      var xV, JV, YV
    }(pV.Component);
    XV(zV, "displayName", "ZAxis"), XV(zV, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var GV = xV(6922),
      WV = xV(6765),
      RV = xV(6826),
      gV = xV(5713),
      DV = xV(6696),
      iV = xV(6012),
      CV = xV(6606),
      aV = xV(6850),
      oV = ["option", "isActive"];

    function cV() {
      return cV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, cV.apply(this, arguments)
    }

    function hV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function lV(VV) {
      var eV = VV.option,
        xV = VV.isActive,
        JV = hV(VV, oV);
      return "string" === typeof eV ? pV.createElement(aV.d, cV({
        option: pV.createElement(CV.b, cV({
          type: eV
        }, JV)),
        isActive: xV,
        shapeType: "symbols"
      }, JV)) : pV.createElement(aV.d, cV({
        option: eV,
        isActive: xV,
        shapeType: "symbols"
      }, JV))
    }

    function LV(VV) {
      return LV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, LV(VV)
    }

    function fV() {
      return fV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, fV.apply(this, arguments)
    }

    function mV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function KV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? mV(Object(xV), !0).forEach((function(eV) {
          dV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : mV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function HV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, OV(JV.key), JV)
      }
    }

    function uV(VV, eV, xV) {
      return eV = SV(eV),
        function(VV, eV) {
          if (eV && ("object" === LV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, sV() ? Reflect.construct(eV, xV || [], SV(VV).constructor) : eV.apply(VV, xV))
    }

    function sV() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (sV = function() {
        return !!VV
      })()
    }

    function SV(VV) {
      return SV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, SV(VV)
    }

    function IV(VV, eV) {
      return IV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, IV(VV, eV)
    }

    function dV(VV, eV, xV) {
      return (eV = OV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function OV(VV) {
      var eV = function(VV, eV) {
        if ("object" != LV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != LV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == LV(eV) ? eV : eV + ""
    }
    var Ve = function(VV) {
      function eV() {
        var VV;
        ! function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, eV);
        for (var xV = arguments.length, JV = new Array(xV), YV = 0; YV < xV; YV++) JV[YV] = arguments[YV];
        return dV(VV = uV(this, eV, [].concat(JV)), "state", {
          isAnimationFinished: !1
        }), dV(VV, "handleAnimationEnd", (function() {
          VV.setState({
            isAnimationFinished: !0
          })
        })), dV(VV, "handleAnimationStart", (function() {
          VV.setState({
            isAnimationFinished: !1
          })
        })), dV(VV, "id", (0, gV.H)("recharts-scatter-")), VV
      }
      return function(VV, eV) {
        if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
        VV.prototype = Object.create(eV && eV.prototype, {
          constructor: {
            value: VV,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(VV, "prototype", {
          writable: !1
        }), eV && IV(VV, eV)
      }(eV, VV), xV = eV, JV = [{
        key: "renderSymbolsStatically",
        value: function(VV) {
          var eV = this,
            xV = this.props,
            JV = xV.shape,
            YV = xV.activeShape,
            UV = xV.activeIndex,
            yV = (0, jV.c)(this.props, !1);
          return VV.map((function(VV, xV) {
            var QV = UV === xV,
              nV = QV ? YV : JV,
              wV = KV(KV({}, yV), VV);
            return pV.createElement(EV.e, fV({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === VV || void 0 === VV ? void 0 : VV.cx, "-").concat(null === VV || void 0 === VV ? void 0 : VV.cy, "-").concat(null === VV || void 0 === VV ? void 0 : VV.size, "-").concat(xV)
            }, (0, iV.l)(eV.props, VV, xV), {
              role: "img"
            }), pV.createElement(lV, fV({
              option: nV,
              isActive: QV,
              key: "symbol-".concat(xV)
            }, wV)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var VV = this,
            eV = this.props,
            xV = eV.points,
            JV = eV.isAnimationActive,
            YV = eV.animationBegin,
            UV = eV.animationDuration,
            yV = eV.animationEasing,
            nV = eV.animationId,
            wV = this.state.prevPoints;
          return pV.createElement(QV.e, {
            NZ: YV,
            duration: UV,
            isActive: JV,
            easing: yV,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(nV),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(eV) {
            var JV = eV.t,
              YV = xV.map((function(VV, eV) {
                var xV = wV && wV[eV];
                if (xV) {
                  var YV = (0, gV.s)(xV.cx, VV.cx),
                    UV = (0, gV.s)(xV.cy, VV.cy),
                    yV = (0, gV.s)(xV.size, VV.size);
                  return KV(KV({}, VV), {}, {
                    cx: YV(JV),
                    cy: UV(JV),
                    size: yV(JV)
                  })
                }
                var pV = (0, gV.s)(0, VV.size);
                return KV(KV({}, VV), {}, {
                  size: pV(JV)
                })
              }));
            return pV.createElement(EV.e, null, VV.renderSymbolsStatically(YV))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var VV = this.props,
            eV = VV.points,
            xV = VV.isAnimationActive,
            JV = this.state.prevPoints;
          return !(xV && eV && eV.length) || JV && vV()(JV, eV) ? this.renderSymbolsStatically(eV) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var VV = this.props,
            eV = VV.points,
            xV = VV.xAxis,
            JV = VV.yAxis,
            YV = VV.children,
            UV = (0, jV.g)(YV, WV.e);
          return UV ? UV.map((function(VV, YV) {
            var UV = VV.props,
              yV = UV.direction,
              QV = UV.dataKey;
            return pV.cloneElement(VV, {
              key: "".concat(yV, "-").concat(QV, "-").concat(eV[YV]),
              data: eV,
              xAxis: xV,
              yAxis: JV,
              layout: "x" === yV ? "vertical" : "horizontal",
              dataPointFormatter: function(VV, eV) {
                return {
                  x: VV.cx,
                  y: VV.cy,
                  value: "x" === yV ? +VV.node.x : +VV.node.y,
                  errorVal: (0, DV.V)(VV, eV)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var VV, eV, xV = this.props,
            JV = xV.points,
            YV = xV.line,
            UV = xV.lineType,
            yV = xV.lineJointType,
            QV = (0, jV.c)(this.props, !1),
            nV = (0, jV.c)(YV, !1);
          if ("joint" === UV) VV = JV.map((function(VV) {
            return {
              x: VV.cx,
              y: VV.cy
            }
          }));
          else if ("fitting" === UV) {
            var wV = (0, gV.i)(JV),
              ZV = wV.xmin,
              vV = wV.xmax,
              rV = wV.a,
              bV = wV.b,
              BV = function(VV) {
                return rV * VV + bV
              };
            VV = [{
              x: ZV,
              y: BV(ZV)
            }, {
              x: vV,
              y: BV(vV)
            }]
          }
          var qV = KV(KV(KV({}, QV), {}, {
            fill: "none",
            stroke: QV && QV.fill
          }, nV), {}, {
            points: VV
          });
          return eV = pV.isValidElement(YV) ? pV.cloneElement(YV, qV) : kV()(YV) ? YV(qV) : pV.createElement(GV.b, fV({}, qV, {
            type: yV
          })), pV.createElement(EV.e, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, eV)
        }
      }, {
        key: "render",
        value: function() {
          var VV = this.props,
            eV = VV.hide,
            xV = VV.points,
            JV = VV.line,
            YV = VV.className,
            UV = VV.xAxis,
            yV = VV.yAxis,
            QV = VV.left,
            nV = VV.top,
            ZV = VV.width,
            vV = VV.height,
            rV = VV.id,
            kV = VV.isAnimationActive;
          if (eV || !xV || !xV.length) return null;
          var jV = this.state.isAnimationFinished,
            qV = (0, bV.c)("recharts-scatter", YV),
            tV = UV && UV.allowDataOverflow,
            FV = yV && yV.allowDataOverflow,
            TV = tV || FV,
            PV = wV()(rV) ? this.id : rV;
          return pV.createElement(EV.e, {
            className: qV,
            clipPath: TV ? "url(#clipPath-".concat(PV, ")") : null
          }, tV || FV ? pV.createElement("defs", null, pV.createElement("clipPath", {
            id: "clipPath-".concat(PV)
          }, pV.createElement("rect", {
            x: tV ? QV : QV - ZV / 2,
            y: FV ? nV : nV - vV / 2,
            width: tV ? ZV : 2 * ZV,
            height: FV ? vV : 2 * vV
          }))) : null, JV && this.renderLine(), this.renderErrorBar(), pV.createElement(EV.e, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!kV || jV) && BV.c.renderCallByParent(this.props, xV))
        }
      }], YV = [{
        key: "getDerivedStateFromProps",
        value: function(VV, eV) {
          return VV.animationId !== eV.prevAnimationId ? {
            prevAnimationId: VV.animationId,
            curPoints: VV.points,
            prevPoints: eV.curPoints
          } : VV.points !== eV.curPoints ? {
            curPoints: VV.points
          } : null
        }
      }], JV && HV(xV.prototype, JV), YV && HV(xV, YV), Object.defineProperty(xV, "prototype", {
        writable: !1
      }), xV;
      var xV, JV, YV
    }(pV.PureComponent);
    dV(Ve, "displayName", "Scatter"), dV(Ve, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !qV.e.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), dV(Ve, "getComposedData", (function(VV) {
      var eV = VV.xAxis,
        xV = VV.yAxis,
        JV = VV.zAxis,
        YV = VV.item,
        UV = VV.displayedData,
        yV = VV.xAxisTicks,
        pV = VV.yAxisTicks,
        QV = VV.offset,
        nV = YV.props.tooltipType,
        ZV = (0, jV.g)(YV.props.children, RV.d),
        vV = wV()(eV.dataKey) ? YV.props.dataKey : eV.dataKey,
        rV = wV()(xV.dataKey) ? YV.props.dataKey : xV.dataKey,
        kV = JV && JV.dataKey,
        bV = JV ? JV.range : zV.defaultProps.range,
        EV = bV && bV[0],
        BV = eV.scale.bandwidth ? eV.scale.bandwidth() : 0,
        qV = xV.scale.bandwidth ? xV.scale.bandwidth() : 0,
        tV = UV.map((function(VV, UV) {
          var QV = (0, DV.V)(VV, vV),
            bV = (0, DV.V)(VV, rV),
            jV = !wV()(kV) && (0, DV.V)(VV, kV) || "-",
            tV = [{
              name: wV()(eV.dataKey) ? YV.props.name : eV.name || eV.dataKey,
              unit: eV.unit || "",
              value: QV,
              payload: VV,
              dataKey: vV,
              type: nV
            }, {
              name: wV()(xV.dataKey) ? YV.props.name : xV.name || xV.dataKey,
              unit: xV.unit || "",
              value: bV,
              payload: VV,
              dataKey: rV,
              type: nV
            }];
          "-" !== jV && tV.push({
            name: JV.name || JV.dataKey,
            unit: JV.unit || "",
            value: jV,
            payload: VV,
            dataKey: kV,
            type: nV
          });
          var FV = (0, DV.z)({
              axis: eV,
              ticks: yV,
              bandSize: BV,
              entry: VV,
              index: UV,
              dataKey: vV
            }),
            TV = (0, DV.z)({
              axis: xV,
              ticks: pV,
              bandSize: qV,
              entry: VV,
              index: UV,
              dataKey: rV
            }),
            PV = "-" !== jV ? JV.scale(jV) : EV,
            AV = Math.sqrt(Math.max(PV, 0) / Math.PI);
          return KV(KV({}, VV), {}, {
            cx: FV,
            cy: TV,
            x: FV - AV,
            y: TV - AV,
            xAxis: eV,
            yAxis: xV,
            zAxis: JV,
            width: 2 * AV,
            height: 2 * AV,
            size: PV,
            node: {
              x: QV,
              y: bV,
              z: jV
            },
            tooltipPayload: tV,
            tooltipPosition: {
              x: FV,
              y: TV
            },
            payload: VV
          }, ZV && ZV[UV] && ZV[UV].props)
        }));
      return KV({
        points: tV
      }, QV)
    }));
    var ee = xV(6938),
      xe = xV(6959),
      Je = xV(6792),
      Ye = (0, JV.e)({
        chartName: "ComposedChart",
        GraphicalChild: [yV.d, YV.c, UV.b, Ve],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: ee.c
        }, {
          axisType: "yAxis",
          AxisComp: xe.e
        }, {
          axisType: "zAxis",
          AxisComp: zV
        }],
        formatAxisMap: Je.h
      })
  },
  6029: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => cx
    });
    var JV = xV(62),
      YV = xV(5974),
      UV = xV.n(YV),
      yV = xV(5824),
      pV = xV.n(yV),
      QV = xV(6037),
      nV = xV.n(QV),
      wV = xV(5746),
      ZV = xV.n(wV),
      vV = xV(6082),
      rV = xV.n(vV),
      kV = xV(5614),
      bV = xV.n(kV),
      EV = xV(5609),
      BV = xV(6509),
      jV = xV(6511),
      qV = xV(6518),
      tV = xV(6524),
      FV = xV(6601),
      TV = xV(6665),
      PV = xV(6667),
      AV = xV(5990),
      NV = xV(6698),
      XV = xV(6680),
      MV = xV(6696),
      zV = xV(5713);

    function GV(VV) {
      return GV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, GV(VV)
    }

    function WV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function RV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? WV(Object(xV), !0).forEach((function(eV) {
          gV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : WV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function gV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != GV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != GV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == GV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }
    var DV = ["Webkit", "Moz", "O", "ms"];

    function iV(VV) {
      return iV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, iV(VV)
    }

    function CV() {
      return CV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, CV.apply(this, arguments)
    }

    function aV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function oV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? aV(Object(xV), !0).forEach((function(eV) {
          mV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : aV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function cV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, KV(JV.key), JV)
      }
    }

    function hV(VV, eV, xV) {
      return eV = LV(eV),
        function(VV, eV) {
          if (eV && ("object" === iV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, lV() ? Reflect.construct(eV, xV || [], LV(VV).constructor) : eV.apply(VV, xV))
    }

    function lV() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (lV = function() {
        return !!VV
      })()
    }

    function LV(VV) {
      return LV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, LV(VV)
    }

    function fV(VV, eV) {
      return fV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, fV(VV, eV)
    }

    function mV(VV, eV, xV) {
      return (eV = KV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function KV(VV) {
      var eV = function(VV, eV) {
        if ("object" != iV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != iV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == iV(eV) ? eV : eV + ""
    }
    var HV = function(VV) {
        return VV.changedTouches && !!VV.changedTouches.length
      },
      uV = function(VV) {
        function eV(VV) {
          var xV;
          return function(VV, eV) {
            if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
          }(this, eV), mV(xV = hV(this, eV, [VV]), "handleDrag", (function(VV) {
            xV.leaveTimer && (clearTimeout(xV.leaveTimer), xV.leaveTimer = null), xV.state.isTravellerMoving ? xV.handleTravellerMove(VV) : xV.state.isSlideMoving && xV.handleSlideDrag(VV)
          })), mV(xV, "handleTouchMove", (function(VV) {
            null != VV.changedTouches && VV.changedTouches.length > 0 && xV.handleDrag(VV.changedTouches[0])
          })), mV(xV, "handleDragEnd", (function() {
            xV.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var VV = xV.props,
                eV = VV.endIndex,
                JV = VV.onDragEnd,
                YV = VV.startIndex;
              null === JV || void 0 === JV || JV({
                endIndex: eV,
                startIndex: YV
              })
            })), xV.detachDragEndListener()
          })), mV(xV, "handleLeaveWrapper", (function() {
            (xV.state.isTravellerMoving || xV.state.isSlideMoving) && (xV.leaveTimer = window.setTimeout(xV.handleDragEnd, xV.props.leaveTimeOut))
          })), mV(xV, "handleEnterSlideOrTraveller", (function() {
            xV.setState({
              isTextActive: !0
            })
          })), mV(xV, "handleLeaveSlideOrTraveller", (function() {
            xV.setState({
              isTextActive: !1
            })
          })), mV(xV, "handleSlideDragStart", (function(VV) {
            var eV = HV(VV) ? VV.changedTouches[0] : VV;
            xV.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: eV.pageX
            }), xV.attachDragEndListener()
          })), xV.travellerDragStartHandlers = {
            startX: xV.handleTravellerDragStart.bind(xV, "startX"),
            endX: xV.handleTravellerDragStart.bind(xV, "endX")
          }, xV.state = {}, xV
        }
        return function(VV, eV) {
          if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
          VV.prototype = Object.create(eV && eV.prototype, {
            constructor: {
              value: VV,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(VV, "prototype", {
            writable: !1
          }), eV && fV(VV, eV)
        }(eV, VV), xV = eV, YV = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(VV) {
            var xV = VV.startX,
              JV = VV.endX,
              YV = this.state.scaleValues,
              UV = this.props,
              yV = UV.gap,
              pV = UV.data.length - 1,
              QV = Math.min(xV, JV),
              nV = Math.max(xV, JV),
              wV = eV.getIndexInRange(YV, QV),
              ZV = eV.getIndexInRange(YV, nV);
            return {
              startIndex: wV - wV % yV,
              endIndex: ZV === pV ? pV : ZV - ZV % yV
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(VV) {
            var eV = this.props,
              xV = eV.data,
              JV = eV.tickFormatter,
              YV = eV.dataKey,
              UV = (0, MV.V)(xV[VV], YV, VV);
            return pV()(JV) ? JV(UV, VV) : UV
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
          value: function(VV) {
            var eV = this.state,
              xV = eV.slideMoveStartX,
              JV = eV.startX,
              YV = eV.endX,
              UV = this.props,
              yV = UV.x,
              pV = UV.width,
              QV = UV.travellerWidth,
              nV = UV.startIndex,
              wV = UV.endIndex,
              ZV = UV.onChange,
              vV = VV.pageX - xV;
            vV > 0 ? vV = Math.min(vV, yV + pV - QV - YV, yV + pV - QV - JV) : vV < 0 && (vV = Math.max(vV, yV - JV, yV - YV));
            var rV = this.getIndex({
              startX: JV + vV,
              endX: YV + vV
            });
            rV.startIndex === nV && rV.endIndex === wV || !ZV || ZV(rV), this.setState({
              startX: JV + vV,
              endX: YV + vV,
              slideMoveStartX: VV.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(VV, eV) {
            var xV = HV(eV) ? eV.changedTouches[0] : eV;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: VV,
              brushMoveStartX: xV.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(VV) {
            var eV = this.state,
              xV = eV.brushMoveStartX,
              JV = eV.movingTravellerId,
              YV = eV.endX,
              UV = eV.startX,
              yV = this.state[JV],
              pV = this.props,
              QV = pV.x,
              nV = pV.width,
              wV = pV.travellerWidth,
              ZV = pV.onChange,
              vV = pV.gap,
              rV = pV.data,
              kV = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              bV = VV.pageX - xV;
            bV > 0 ? bV = Math.min(bV, QV + nV - wV - yV) : bV < 0 && (bV = Math.max(bV, QV - yV)), kV[JV] = yV + bV;
            var EV = this.getIndex(kV),
              BV = EV.startIndex,
              jV = EV.endIndex;
            this.setState(mV(mV({}, JV, yV + bV), "brushMoveStartX", VV.pageX), (function() {
              ZV && function() {
                var VV = rV.length - 1;
                return "startX" === JV && (YV > UV ? BV % vV === 0 : jV % vV === 0) || YV < UV && jV === VV || "endX" === JV && (YV > UV ? jV % vV === 0 : BV % vV === 0) || YV > UV && jV === VV
              }() && ZV(EV)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(VV, eV) {
            var xV = this,
              JV = this.state,
              YV = JV.scaleValues,
              UV = JV.startX,
              yV = JV.endX,
              pV = this.state[eV],
              QV = YV.indexOf(pV);
            if (-1 !== QV) {
              var nV = QV + VV;
              if (!(-1 === nV || nV >= YV.length)) {
                var wV = YV[nV];
                "startX" === eV && wV >= yV || "endX" === eV && wV <= UV || this.setState(mV({}, eV, wV), (function() {
                  xV.props.onChange(xV.getIndex({
                    startX: xV.state.startX,
                    endX: xV.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var VV = this.props,
              eV = VV.x,
              xV = VV.y,
              YV = VV.width,
              UV = VV.height,
              yV = VV.fill,
              pV = VV.stroke;
            return JV.createElement("rect", {
              stroke: pV,
              fill: yV,
              x: eV,
              y: xV,
              width: YV,
              height: UV
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var VV = this.props,
              eV = VV.x,
              xV = VV.y,
              YV = VV.width,
              UV = VV.height,
              yV = VV.data,
              pV = VV.children,
              QV = VV.padding,
              nV = JV.Children.only(pV);
            return nV ? JV.cloneElement(nV, {
              x: eV,
              y: xV,
              width: YV,
              height: UV,
              margin: QV,
              compact: !0,
              data: yV
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(VV, xV) {
            var YV, UV, yV = this,
              pV = this.props,
              QV = pV.y,
              nV = pV.travellerWidth,
              wV = pV.height,
              ZV = pV.traveller,
              vV = pV.ariaLabel,
              rV = pV.data,
              kV = pV.startIndex,
              bV = pV.endIndex,
              EV = Math.max(VV, this.props.x),
              BV = oV(oV({}, (0, AV.c)(this.props, !1)), {}, {
                x: EV,
                y: QV,
                width: nV,
                height: wV
              }),
              jV = vV || "Min value: ".concat(null === (YV = rV[kV]) || void 0 === YV ? void 0 : YV.name, ", Max value: ").concat(null === (UV = rV[bV]) || void 0 === UV ? void 0 : UV.name);
            return JV.createElement(qV.e, {
              tabIndex: 0,
              role: "slider",
              "aria-label": jV,
              "aria-valuenow": VV,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[xV],
              onTouchStart: this.travellerDragStartHandlers[xV],
              onKeyDown: function(VV) {
                ["ArrowLeft", "ArrowRight"].includes(VV.key) && (VV.preventDefault(), VV.stopPropagation(), yV.handleTravellerMoveKeyboard("ArrowRight" === VV.key ? 1 : -1, xV))
              },
              onFocus: function() {
                yV.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                yV.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, eV.renderTraveller(ZV, BV))
          }
        }, {
          key: "renderSlide",
          value: function(VV, eV) {
            var xV = this.props,
              YV = xV.y,
              UV = xV.height,
              yV = xV.stroke,
              pV = xV.travellerWidth,
              QV = Math.min(VV, eV) + pV,
              nV = Math.max(Math.abs(eV - VV) - pV, 0);
            return JV.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: yV,
              fillOpacity: .2,
              x: QV,
              y: YV,
              width: nV,
              height: UV
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var VV = this.props,
              eV = VV.startIndex,
              xV = VV.endIndex,
              YV = VV.y,
              UV = VV.height,
              yV = VV.travellerWidth,
              pV = VV.stroke,
              QV = this.state,
              nV = QV.startX,
              wV = QV.endX,
              ZV = {
                pointerEvents: "none",
                fill: pV
              };
            return JV.createElement(qV.e, {
              className: "recharts-brush-texts"
            }, JV.createElement(XV.e, CV({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(nV, wV) - 5,
              y: YV + UV / 2
            }, ZV), this.getTextOfTick(eV)), JV.createElement(XV.e, CV({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(nV, wV) + yV + 5,
              y: YV + UV / 2
            }, ZV), this.getTextOfTick(xV)))
          }
        }, {
          key: "render",
          value: function() {
            var VV = this.props,
              eV = VV.data,
              xV = VV.className,
              YV = VV.children,
              UV = VV.x,
              yV = VV.y,
              pV = VV.width,
              QV = VV.height,
              nV = VV.alwaysShowText,
              wV = this.state,
              ZV = wV.startX,
              vV = wV.endX,
              rV = wV.isTextActive,
              kV = wV.isSlideMoving,
              bV = wV.isTravellerMoving,
              BV = wV.isTravellerFocused;
            if (!eV || !eV.length || !(0, zV.A)(UV) || !(0, zV.A)(yV) || !(0, zV.A)(pV) || !(0, zV.A)(QV) || pV <= 0 || QV <= 0) return null;
            var jV = (0, EV.c)("recharts-brush", xV),
              tV = 1 === JV.Children.count(YV),
              FV = function(VV, eV) {
                if (!VV) return null;
                var xV = VV.replace(/(\w)/, (function(VV) {
                    return VV.toUpperCase()
                  })),
                  JV = DV.reduce((function(VV, JV) {
                    return RV(RV({}, VV), {}, gV({}, JV + xV, eV))
                  }), {});
                return JV[VV] = eV, JV
              }("userSelect", "none");
            return JV.createElement(qV.e, {
              className: jV,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: FV
            }, this.renderBackground(), tV && this.renderPanorama(), this.renderSlide(ZV, vV), this.renderTravellerLayer(ZV, "startX"), this.renderTravellerLayer(vV, "endX"), (rV || kV || bV || BV || nV) && this.renderText())
          }
        }], UV = [{
          key: "renderDefaultTraveller",
          value: function(VV) {
            var eV = VV.x,
              xV = VV.y,
              YV = VV.width,
              UV = VV.height,
              yV = VV.stroke,
              pV = Math.floor(xV + UV / 2) - 1;
            return JV.createElement(JV.Fragment, null, JV.createElement("rect", {
              x: eV,
              y: xV,
              width: YV,
              height: UV,
              fill: yV,
              stroke: "none"
            }), JV.createElement("line", {
              x1: eV + 1,
              y1: pV,
              x2: eV + YV - 1,
              y2: pV,
              fill: "none",
              stroke: "#fff"
            }), JV.createElement("line", {
              x1: eV + 1,
              y1: pV + 2,
              x2: eV + YV - 1,
              y2: pV + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(VV, xV) {
            return JV.isValidElement(VV) ? JV.cloneElement(VV, xV) : pV()(VV) ? VV(xV) : eV.renderDefaultTraveller(xV)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(VV, eV) {
            var xV = VV.data,
              JV = VV.width,
              YV = VV.x,
              UV = VV.travellerWidth,
              yV = VV.updateId,
              pV = VV.startIndex,
              QV = VV.endIndex;
            if (xV !== eV.prevData || yV !== eV.prevUpdateId) return oV({
              prevData: xV,
              prevTravellerWidth: UV,
              prevUpdateId: yV,
              prevX: YV,
              prevWidth: JV
            }, xV && xV.length ? function(VV) {
              var eV = VV.data,
                xV = VV.startIndex,
                JV = VV.endIndex,
                YV = VV.x,
                UV = VV.width,
                yV = VV.travellerWidth;
              if (!eV || !eV.length) return {};
              var pV = eV.length,
                QV = (0, NV.d)().domain(nV()(0, pV)).range([YV, YV + UV - yV]),
                wV = QV.domain().map((function(VV) {
                  return QV(VV)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: QV(xV),
                endX: QV(JV),
                scale: QV,
                scaleValues: wV
              }
            }({
              data: xV,
              width: JV,
              x: YV,
              travellerWidth: UV,
              startIndex: pV,
              endIndex: QV
            }) : {
              scale: null,
              scaleValues: null
            });
            if (eV.scale && (JV !== eV.prevWidth || YV !== eV.prevX || UV !== eV.prevTravellerWidth)) {
              eV.scale.range([YV, YV + JV - UV]);
              var wV = eV.scale.domain().map((function(VV) {
                return eV.scale(VV)
              }));
              return {
                prevData: xV,
                prevTravellerWidth: UV,
                prevUpdateId: yV,
                prevX: YV,
                prevWidth: JV,
                startX: eV.scale(VV.startIndex),
                endX: eV.scale(VV.endIndex),
                scaleValues: wV
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(VV, eV) {
            for (var xV = 0, JV = VV.length - 1; JV - xV > 1;) {
              var YV = Math.floor((xV + JV) / 2);
              VV[YV] > eV ? JV = YV : xV = YV
            }
            return eV >= VV[JV] ? JV : xV
          }
        }], YV && cV(xV.prototype, YV), UV && cV(xV, UV), Object.defineProperty(xV, "prototype", {
          writable: !1
        }), xV;
        var xV, YV, UV
      }(JV.PureComponent);
    mV(uV, "displayName", "Brush"), mV(uV, "defaultProps", {
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
    var sV = xV(6687),
      SV = xV(6771),
      IV = xV(6782),
      dV = xV(6787),
      OV = xV(6792),
      Ve = xV(5982);

    function ee() {
      return ee = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, ee.apply(this, arguments)
    }

    function xe(VV) {
      return xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, xe(VV)
    }

    function Je(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function Ye(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? Je(Object(xV), !0).forEach((function(eV) {
          we(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : Je(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function Ue(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, Ze(JV.key), JV)
      }
    }

    function ye(VV, eV, xV) {
      return eV = Qe(eV),
        function(VV, eV) {
          if (eV && ("object" === xe(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, pe() ? Reflect.construct(eV, xV || [], Qe(VV).constructor) : eV.apply(VV, xV))
    }

    function pe() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (pe = function() {
        return !!VV
      })()
    }

    function Qe(VV) {
      return Qe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, Qe(VV)
    }

    function ne(VV, eV) {
      return ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, ne(VV, eV)
    }

    function we(VV, eV, xV) {
      return (eV = Ze(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function Ze(VV) {
      var eV = function(VV, eV) {
        if ("object" != xe(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != xe(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == xe(eV) ? eV : eV + ""
    }
    var ve = function(VV) {
      function eV() {
        return function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, eV), ye(this, eV, arguments)
      }
      return function(VV, eV) {
        if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
        VV.prototype = Object.create(eV && eV.prototype, {
          constructor: {
            value: VV,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(VV, "prototype", {
          writable: !1
        }), eV && ne(VV, eV)
      }(eV, VV), xV = eV, (YV = [{
        key: "render",
        value: function() {
          var VV = this.props,
            xV = VV.x,
            YV = VV.y,
            UV = VV.r,
            yV = VV.alwaysShow,
            pV = VV.clipPathId,
            QV = (0, zV.w)(xV),
            nV = (0, zV.w)(YV);
          if ((0, Ve.c)(void 0 === yV, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !QV || !nV) return null;
          var wV = function(VV) {
            var eV = VV.x,
              xV = VV.y,
              JV = VV.xAxis,
              YV = VV.yAxis,
              UV = (0, OV.d)({
                x: JV.scale,
                y: YV.scale
              }),
              yV = UV.apply({
                x: eV,
                y: xV
              }, {
                bandAware: !0
              });
            return (0, dV.c)(VV, "discard") && !UV.isInRange(yV) ? null : yV
          }(this.props);
          if (!wV) return null;
          var ZV = wV.x,
            vV = wV.y,
            rV = this.props,
            kV = rV.shape,
            bV = rV.className,
            BV = Ye(Ye({
              clipPath: (0, dV.c)(this.props, "hidden") ? "url(#".concat(pV, ")") : void 0
            }, (0, AV.c)(this.props, !0)), {}, {
              cx: ZV,
              cy: vV
            });
          return JV.createElement(qV.e, {
            className: (0, EV.c)("recharts-reference-dot", bV)
          }, eV.renderDot(kV, BV), IV.b.renderCallByParent(this.props, {
            x: ZV - UV,
            y: vV - UV,
            width: 2 * UV,
            height: 2 * UV
          }))
        }
      }]) && Ue(xV.prototype, YV), UV && Ue(xV, UV), Object.defineProperty(xV, "prototype", {
        writable: !1
      }), xV;
      var xV, YV, UV
    }(JV.Component);
    we(ve, "displayName", "ReferenceDot"), we(ve, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), we(ve, "renderDot", (function(VV, eV) {
      return JV.isValidElement(VV) ? JV.cloneElement(VV, eV) : pV()(VV) ? VV(eV) : JV.createElement(TV.e, ee({}, eV, {
        cx: eV.cx,
        cy: eV.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var re = xV(6873);

    function ke() {
      return ke = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, ke.apply(this, arguments)
    }

    function be(VV) {
      return be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, be(VV)
    }

    function Ee(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function Be(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? Ee(Object(xV), !0).forEach((function(eV) {
          Pe(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : Ee(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function je(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, Ae(JV.key), JV)
      }
    }

    function qe(VV, eV, xV) {
      return eV = Fe(eV),
        function(VV, eV) {
          if (eV && ("object" === be(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, te() ? Reflect.construct(eV, xV || [], Fe(VV).constructor) : eV.apply(VV, xV))
    }

    function te() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (te = function() {
        return !!VV
      })()
    }

    function Fe(VV) {
      return Fe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, Fe(VV)
    }

    function Te(VV, eV) {
      return Te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, Te(VV, eV)
    }

    function Pe(VV, eV, xV) {
      return (eV = Ae(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function Ae(VV) {
      var eV = function(VV, eV) {
        if ("object" != be(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != be(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == be(eV) ? eV : eV + ""
    }
    var Ne = function(VV) {
      function eV() {
        return function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, eV), qe(this, eV, arguments)
      }
      return function(VV, eV) {
        if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
        VV.prototype = Object.create(eV && eV.prototype, {
          constructor: {
            value: VV,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(VV, "prototype", {
          writable: !1
        }), eV && Te(VV, eV)
      }(eV, VV), xV = eV, (YV = [{
        key: "render",
        value: function() {
          var VV = this.props,
            xV = VV.x1,
            YV = VV.x2,
            UV = VV.y1,
            yV = VV.y2,
            pV = VV.className,
            QV = VV.alwaysShow,
            nV = VV.clipPathId;
          (0, Ve.c)(void 0 === QV, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var wV = (0, zV.w)(xV),
            ZV = (0, zV.w)(YV),
            vV = (0, zV.w)(UV),
            rV = (0, zV.w)(yV),
            kV = this.props.shape;
          if (!wV && !ZV && !vV && !rV && !kV) return null;
          var bV = function(VV, eV, xV, JV, YV) {
            var UV = YV.x1,
              yV = YV.x2,
              pV = YV.y1,
              QV = YV.y2,
              nV = YV.xAxis,
              wV = YV.yAxis;
            if (!nV || !wV) return null;
            var ZV = (0, OV.d)({
                x: nV.scale,
                y: wV.scale
              }),
              vV = {
                x: VV ? ZV.x.apply(UV, {
                  position: "start"
                }) : ZV.x.rangeMin,
                y: xV ? ZV.y.apply(pV, {
                  position: "start"
                }) : ZV.y.rangeMin
              },
              rV = {
                x: eV ? ZV.x.apply(yV, {
                  position: "end"
                }) : ZV.x.rangeMax,
                y: JV ? ZV.y.apply(QV, {
                  position: "end"
                }) : ZV.y.rangeMax
              };
            return !(0, dV.c)(YV, "discard") || ZV.isInRange(vV) && ZV.isInRange(rV) ? (0, OV.r)(vV, rV) : null
          }(wV, ZV, vV, rV, this.props);
          if (!bV && !kV) return null;
          var BV = (0, dV.c)(this.props, "hidden") ? "url(#".concat(nV, ")") : void 0;
          return JV.createElement(qV.e, {
            className: (0, EV.c)("recharts-reference-area", pV)
          }, eV.renderRect(kV, Be(Be({
            clipPath: BV
          }, (0, AV.c)(this.props, !0)), bV)), IV.b.renderCallByParent(this.props, bV))
        }
      }]) && je(xV.prototype, YV), UV && je(xV, UV), Object.defineProperty(xV, "prototype", {
        writable: !1
      }), xV;
      var xV, YV, UV
    }(JV.Component);

    function Xe(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return Me(VV)
      }(VV) || function(VV) {
        if ("undefined" !== typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
      }(VV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return Me(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return Me(VV, eV)
      }(VV) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Me(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }
    Pe(Ne, "displayName", "ReferenceArea"), Pe(Ne, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), Pe(Ne, "renderRect", (function(VV, eV) {
      return JV.isValidElement(VV) ? JV.cloneElement(VV, eV) : pV()(VV) ? VV(eV) : JV.createElement(PV.d, ke({}, eV, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var ze = function(VV, eV, xV, JV, YV) {
        var UV = (0, AV.g)(VV, re.c),
          yV = (0, AV.g)(VV, ve),
          pV = [].concat(Xe(UV), Xe(yV)),
          QV = (0, AV.g)(VV, Ne),
          nV = "".concat(JV, "Id"),
          wV = JV[0],
          ZV = eV;
        if (pV.length && (ZV = pV.reduce((function(VV, eV) {
            if (eV.props[nV] === xV && (0, dV.c)(eV.props, "extendDomain") && (0, zV.A)(eV.props[wV])) {
              var JV = eV.props[wV];
              return [Math.min(VV[0], JV), Math.max(VV[1], JV)]
            }
            return VV
          }), ZV)), QV.length) {
          var vV = "".concat(wV, "1"),
            rV = "".concat(wV, "2");
          ZV = QV.reduce((function(VV, eV) {
            if (eV.props[nV] === xV && (0, dV.c)(eV.props, "extendDomain") && (0, zV.A)(eV.props[vV]) && (0, zV.A)(eV.props[rV])) {
              var JV = eV.props[vV],
                YV = eV.props[rV];
              return [Math.min(VV[0], JV, YV), Math.max(VV[1], JV, YV)]
            }
            return VV
          }), ZV)
        }
        return YV && YV.length && (ZV = YV.reduce((function(VV, eV) {
          return (0, zV.A)(eV) ? [Math.min(VV[0], eV), Math.max(VV[1], eV)] : VV
        }), ZV)), ZV
      },
      Ge = xV(6784),
      We = xV(6010),
      Re = xV(35),
      ge = new(xV.n(Re)()),
      De = "recharts.syncMouseEvents",
      ie = xV(6012);

    function Ce(VV) {
      return Ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, Ce(VV)
    }

    function ae(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, ce(JV.key), JV)
      }
    }

    function oe(VV, eV, xV) {
      return (eV = ce(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function ce(VV) {
      var eV = function(VV, eV) {
        if ("object" != Ce(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != Ce(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == Ce(eV) ? eV : eV + ""
    }
    var he = function() {
      return VV = function VV() {
        ! function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, VV), oe(this, "activeIndex", 0), oe(this, "coordinateList", []), oe(this, "layout", "horizontal")
      }, (eV = [{
        key: "setDetails",
        value: function(VV) {
          var eV, xV = VV.coordinateList,
            JV = void 0 === xV ? null : xV,
            YV = VV.container,
            UV = void 0 === YV ? null : YV,
            yV = VV.layout,
            pV = void 0 === yV ? null : yV,
            QV = VV.offset,
            nV = void 0 === QV ? null : QV,
            wV = VV.mouseHandlerCallback,
            ZV = void 0 === wV ? null : wV;
          this.coordinateList = null !== (eV = null !== JV && void 0 !== JV ? JV : this.coordinateList) && void 0 !== eV ? eV : [], this.container = null !== UV && void 0 !== UV ? UV : this.container, this.layout = null !== pV && void 0 !== pV ? pV : this.layout, this.offset = null !== nV && void 0 !== nV ? nV : this.offset, this.mouseHandlerCallback = null !== ZV && void 0 !== ZV ? ZV : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(VV) {
          if (0 !== this.coordinateList.length) switch (VV.key) {
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
        value: function(VV) {
          this.activeIndex = VV
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var VV, eV;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var xV = this.container.getBoundingClientRect(),
              JV = xV.x,
              YV = xV.y,
              UV = xV.height,
              yV = this.coordinateList[this.activeIndex].coordinate,
              pV = (null === (VV = window) || void 0 === VV ? void 0 : VV.scrollX) || 0,
              QV = (null === (eV = window) || void 0 === eV ? void 0 : eV.scrollY) || 0,
              nV = JV + yV + pV,
              wV = YV + this.offset.top + UV / 2 + QV;
            this.mouseHandlerCallback({
              pageX: nV,
              pageY: wV
            })
          }
        }
      }]) && ae(VV.prototype, eV), xV && ae(VV, xV), Object.defineProperty(VV, "prototype", {
        writable: !1
      }), VV;
      var VV, eV, xV
    }();
    var le = xV(6850),
      Le = xV(6922);

    function fe(VV) {
      return fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, fe(VV)
    }
    var me = ["x", "y", "top", "left", "width", "height", "className"];

    function Ke() {
      return Ke = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, Ke.apply(this, arguments)
    }

    function He(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function ue(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != fe(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != fe(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == fe(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function se(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }
    var Se = function(VV, eV, xV, JV, YV, UV) {
        return "M".concat(VV, ",").concat(YV, "v").concat(JV, "M").concat(UV, ",").concat(eV, "h").concat(xV)
      },
      Ie = function(VV) {
        var eV = VV.x,
          xV = void 0 === eV ? 0 : eV,
          YV = VV.y,
          UV = void 0 === YV ? 0 : YV,
          yV = VV.top,
          pV = void 0 === yV ? 0 : yV,
          QV = VV.left,
          nV = void 0 === QV ? 0 : QV,
          wV = VV.width,
          ZV = void 0 === wV ? 0 : wV,
          vV = VV.height,
          rV = void 0 === vV ? 0 : vV,
          kV = VV.className,
          bV = function(VV) {
            for (var eV = 1; eV < arguments.length; eV++) {
              var xV = null != arguments[eV] ? arguments[eV] : {};
              eV % 2 ? He(Object(xV), !0).forEach((function(eV) {
                ue(VV, eV, xV[eV])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : He(Object(xV)).forEach((function(eV) {
                Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
              }))
            }
            return VV
          }({
            x: xV,
            y: UV,
            top: pV,
            left: nV,
            width: ZV,
            height: rV
          }, se(VV, me));
        return (0, zV.A)(xV) && (0, zV.A)(UV) && (0, zV.A)(ZV) && (0, zV.A)(rV) && (0, zV.A)(pV) && (0, zV.A)(nV) ? JV.createElement("path", Ke({}, (0, AV.c)(bV, !0), {
          className: (0, EV.c)("recharts-cross", kV),
          d: Se(xV, UV, ZV, rV, pV, nV)
        })) : null
      };

    function de(VV) {
      var eV = VV.cx,
        xV = VV.cy,
        JV = VV.radius,
        YV = VV.startAngle,
        UV = VV.endAngle;
      return {
        points: [(0, Ge.e)(eV, xV, JV, YV), (0, Ge.e)(eV, xV, JV, UV)],
        cx: eV,
        cy: xV,
        radius: JV,
        startAngle: YV,
        endAngle: UV
      }
    }
    var Oe = xV(6871);

    function Vx(VV, eV, xV) {
      var JV, YV, UV, yV;
      if ("horizontal" === VV) UV = JV = eV.x, YV = xV.top, yV = xV.top + xV.height;
      else if ("vertical" === VV) yV = YV = eV.y, JV = xV.left, UV = xV.left + xV.width;
      else if (null != eV.cx && null != eV.cy) {
        if ("centric" !== VV) return de(eV);
        var pV = eV.cx,
          QV = eV.cy,
          nV = eV.innerRadius,
          wV = eV.outerRadius,
          ZV = eV.angle,
          vV = (0, Ge.e)(pV, QV, nV, ZV),
          rV = (0, Ge.e)(pV, QV, wV, ZV);
        JV = vV.x, YV = vV.y, UV = rV.x, yV = rV.y
      }
      return [{
        x: JV,
        y: YV
      }, {
        x: UV,
        y: yV
      }]
    }

    function ex(VV) {
      return ex = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, ex(VV)
    }

    function xx(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function Jx(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? xx(Object(xV), !0).forEach((function(eV) {
          Yx(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : xx(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function Yx(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != ex(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != ex(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == ex(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function Ux(VV) {
      var eV, xV, YV, UV = VV.element,
        yV = VV.tooltipEventType,
        pV = VV.isActive,
        QV = VV.activeCoordinate,
        nV = VV.activePayload,
        wV = VV.offset,
        ZV = VV.activeTooltipIndex,
        vV = VV.tooltipAxisBandSize,
        rV = VV.layout,
        kV = VV.chartName,
        bV = null !== (eV = UV.props.cursor) && void 0 !== eV ? eV : null === (xV = UV.type.defaultProps) || void 0 === xV ? void 0 : xV.cursor;
      if (!UV || !bV || !pV || !QV || "ScatterChart" !== kV && "axis" !== yV) return null;
      var BV = Le.b;
      if ("ScatterChart" === kV) YV = QV, BV = Ie;
      else if ("BarChart" === kV) YV = function(VV, eV, xV, JV) {
        var YV = JV / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === VV ? eV.x - YV : xV.left + .5,
          y: "horizontal" === VV ? xV.top + .5 : eV.y - YV,
          width: "horizontal" === VV ? JV : xV.width - 1,
          height: "horizontal" === VV ? xV.height - 1 : JV
        }
      }(rV, QV, wV, vV), BV = PV.d;
      else if ("radial" === rV) {
        var jV = de(QV),
          qV = jV.cx,
          tV = jV.cy,
          FV = jV.radius;
        YV = {
          cx: qV,
          cy: tV,
          startAngle: jV.startAngle,
          endAngle: jV.endAngle,
          innerRadius: FV,
          outerRadius: FV
        }, BV = Oe.c
      } else YV = {
        points: Vx(rV, QV, wV)
      }, BV = Le.b;
      var TV = Jx(Jx(Jx(Jx({
        stroke: "#ccc",
        pointerEvents: "none"
      }, wV), YV), (0, AV.c)(bV, !1)), {}, {
        payload: nV,
        payloadIndex: ZV,
        className: (0, EV.c)("recharts-tooltip-cursor", bV.className)
      });
      return (0, JV.isValidElement)(bV) ? (0, JV.cloneElement)(bV, TV) : (0, JV.createElement)(BV, TV)
    }
    var yx = xV(6887),
      px = ["item"],
      Qx = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function nx(VV) {
      return nx = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, nx(VV)
    }

    function wx() {
      return wx = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, wx.apply(this, arguments)
    }

    function Zx(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        var xV = null == VV ? null : "undefined" != typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
        if (null != xV) {
          var JV, YV, UV, yV, pV = [],
            QV = !0,
            nV = !1;
          try {
            if (UV = (xV = xV.call(VV)).next, 0 === eV) {
              if (Object(xV) !== xV) return;
              QV = !1
            } else
              for (; !(QV = (JV = UV.call(xV)).done) && (pV.push(JV.value), pV.length !== eV); QV = !0);
          } catch (VV) {
            nV = !0, YV = VV
          } finally {
            try {
              if (!QV && null != xV.return && (yV = xV.return(), Object(yV) !== yV)) return
            } finally {
              if (nV) throw YV
            }
          }
          return pV
        }
      }(VV, eV) || qx(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vx(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function rx(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, Ax(JV.key), JV)
      }
    }

    function kx(VV, eV, xV) {
      return eV = Ex(eV),
        function(VV, eV) {
          if (eV && ("object" === nx(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, bx() ? Reflect.construct(eV, xV || [], Ex(VV).constructor) : eV.apply(VV, xV))
    }

    function bx() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (bx = function() {
        return !!VV
      })()
    }

    function Ex(VV) {
      return Ex = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, Ex(VV)
    }

    function Bx(VV, eV) {
      return Bx = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, Bx(VV, eV)
    }

    function jx(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return tx(VV)
      }(VV) || function(VV) {
        if ("undefined" !== typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
      }(VV) || qx(VV) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qx(VV, eV) {
      if (VV) {
        if ("string" === typeof VV) return tx(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        return "Object" === xV && VV.constructor && (xV = VV.constructor.name), "Map" === xV || "Set" === xV ? Array.from(VV) : "Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV) ? tx(VV, eV) : void 0
      }
    }

    function tx(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function Fx(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function Tx(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? Fx(Object(xV), !0).forEach((function(eV) {
          Px(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : Fx(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function Px(VV, eV, xV) {
      return (eV = Ax(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function Ax(VV) {
      var eV = function(VV, eV) {
        if ("object" != nx(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != nx(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == nx(eV) ? eV : eV + ""
    }
    var Nx = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      Xx = {
        width: "100%",
        height: "100%"
      },
      Mx = {
        x: 0,
        y: 0
      };

    function zx(VV) {
      return VV
    }
    var Gx = function(VV, eV) {
      var xV = eV.graphicalItems,
        JV = eV.dataStartIndex,
        YV = eV.dataEndIndex,
        UV = (null !== xV && void 0 !== xV ? xV : []).reduce((function(VV, eV) {
          var xV = eV.props.data;
          return xV && xV.length ? [].concat(jx(VV), jx(xV)) : VV
        }), []);
      return UV.length > 0 ? UV : VV && VV.length && (0, zV.A)(JV) && (0, zV.A)(YV) ? VV.slice(JV, YV + 1) : []
    };

    function Wx(VV) {
      return "number" === VV ? [0, "auto"] : void 0
    }
    var Rx = function(VV, eV, xV, JV) {
        var YV = VV.graphicalItems,
          UV = VV.tooltipAxis,
          yV = Gx(eV, VV);
        return xV < 0 || !YV || !YV.length || xV >= yV.length ? null : YV.reduce((function(YV, pV) {
          var QV, nV, wV = null !== (QV = pV.props.data) && void 0 !== QV ? QV : eV;
          if (wV && VV.dataStartIndex + VV.dataEndIndex !== 0 && VV.dataEndIndex - VV.dataStartIndex >= xV && (wV = wV.slice(VV.dataStartIndex, VV.dataEndIndex + 1)), UV.dataKey && !UV.allowDuplicatedCategory) {
            var ZV = void 0 === wV ? yV : wV;
            nV = (0, zV.d)(ZV, UV.dataKey, JV)
          } else nV = wV && wV[xV] || yV[xV];
          return nV ? [].concat(jx(YV), [(0, MV.U)(pV, nV)]) : YV
        }), [])
      },
      gx = function(VV, eV, xV, JV) {
        var YV = JV || {
            x: VV.chartX,
            y: VV.chartY
          },
          UV = function(VV, eV) {
            return "horizontal" === eV ? VV.x : "vertical" === eV ? VV.y : "centric" === eV ? VV.angle : VV.radius
          }(YV, xV),
          yV = VV.orderedTooltipTicks,
          pV = VV.tooltipAxis,
          QV = VV.tooltipTicks,
          nV = (0, MV.e)(UV, yV, QV, pV);
        if (nV >= 0 && QV) {
          var wV = QV[nV] && QV[nV].value,
            ZV = Rx(VV, eV, nV, wV),
            vV = function(VV, eV, xV, JV) {
              var YV = eV.find((function(VV) {
                return VV && VV.index === xV
              }));
              if (YV) {
                if ("horizontal" === VV) return {
                  x: YV.coordinate,
                  y: JV.y
                };
                if ("vertical" === VV) return {
                  x: JV.x,
                  y: YV.coordinate
                };
                if ("centric" === VV) {
                  var UV = YV.coordinate,
                    yV = JV.radius;
                  return Tx(Tx(Tx({}, JV), (0, Ge.e)(JV.cx, JV.cy, yV, UV)), {}, {
                    angle: UV,
                    radius: yV
                  })
                }
                var pV = YV.coordinate,
                  QV = JV.angle;
                return Tx(Tx(Tx({}, JV), (0, Ge.e)(JV.cx, JV.cy, pV, QV)), {}, {
                  angle: QV,
                  radius: pV
                })
              }
              return Mx
            }(xV, yV, nV, YV);
          return {
            activeTooltipIndex: nV,
            activeLabel: wV,
            activePayload: ZV,
            activeCoordinate: vV
          }
        }
        return null
      },
      Dx = function(VV, eV) {
        var xV = eV.axes,
          JV = eV.graphicalItems,
          YV = eV.axisType,
          yV = eV.axisIdKey,
          pV = eV.stackGroups,
          QV = eV.dataStartIndex,
          wV = eV.dataEndIndex,
          ZV = VV.layout,
          vV = VV.children,
          rV = VV.stackOffset,
          kV = (0, MV.Y)(ZV, YV);
        return xV.reduce((function(eV, xV) {
          var bV, EV = void 0 !== xV.type.defaultProps ? Tx(Tx({}, xV.type.defaultProps), xV.props) : xV.props,
            BV = EV.type,
            jV = EV.dataKey,
            qV = EV.allowDataOverflow,
            tV = EV.allowDuplicatedCategory,
            FV = EV.scale,
            TV = EV.ticks,
            PV = EV.includeHidden,
            AV = EV[yV];
          if (eV[AV]) return eV;
          var NV, XV, GV, WV = Gx(VV.data, {
              graphicalItems: JV.filter((function(VV) {
                var eV;
                return (yV in VV.props ? VV.props[yV] : null === (eV = VV.type.defaultProps) || void 0 === eV ? void 0 : eV[yV]) === AV
              })),
              dataStartIndex: QV,
              dataEndIndex: wV
            }),
            RV = WV.length;
          (function(VV, eV, xV) {
            if ("number" === xV && !0 === eV && Array.isArray(VV)) {
              var JV = null === VV || void 0 === VV ? void 0 : VV[0],
                YV = null === VV || void 0 === VV ? void 0 : VV[1];
              if (JV && YV && (0, zV.A)(JV) && (0, zV.A)(YV)) return !0
            }
            return !1
          })(EV.domain, qV, BV) && (NV = (0, MV.db)(EV.domain, null, qV), !kV || "number" !== BV && "auto" === FV || (GV = (0, MV.E)(WV, jV, "category")));
          var gV = Wx(BV);
          if (!NV || 0 === NV.length) {
            var DV, iV = null !== (DV = EV.domain) && void 0 !== DV ? DV : gV;
            if (jV) {
              if (NV = (0, MV.E)(WV, jV, BV), "category" === BV && kV) {
                var CV = (0, zV.q)(NV);
                tV && CV ? (XV = NV, NV = nV()(0, RV)) : tV || (NV = (0, MV._)(iV, NV, xV).reduce((function(VV, eV) {
                  return VV.indexOf(eV) >= 0 ? VV : [].concat(jx(VV), [eV])
                }), []))
              } else if ("category" === BV) NV = tV ? NV.filter((function(VV) {
                return "" !== VV && !UV()(VV)
              })) : (0, MV._)(iV, NV, xV).reduce((function(VV, eV) {
                return VV.indexOf(eV) >= 0 || "" === eV || UV()(eV) ? VV : [].concat(jx(VV), [eV])
              }), []);
              else if ("number" === BV) {
                var aV = (0, MV.bb)(WV, JV.filter((function(VV) {
                  var eV, xV, JV = yV in VV.props ? VV.props[yV] : null === (eV = VV.type.defaultProps) || void 0 === eV ? void 0 : eV[yV],
                    YV = "hide" in VV.props ? VV.props.hide : null === (xV = VV.type.defaultProps) || void 0 === xV ? void 0 : xV.hide;
                  return JV === AV && (PV || !YV)
                })), jV, YV, ZV);
                aV && (NV = aV)
              }!kV || "number" !== BV && "auto" === FV || (GV = (0, MV.E)(WV, jV, "category"))
            } else NV = kV ? nV()(0, RV) : pV && pV[AV] && pV[AV].hasStack && "number" === BV ? "expand" === rV ? [0, 1] : (0, MV.I)(pV[AV].stackGroups, QV, wV) : (0, MV.G)(WV, JV.filter((function(VV) {
              var eV = yV in VV.props ? VV.props[yV] : VV.type.defaultProps[yV],
                xV = "hide" in VV.props ? VV.props.hide : VV.type.defaultProps.hide;
              return eV === AV && (PV || !xV)
            })), BV, ZV, !0);
            if ("number" === BV) NV = ze(vV, NV, AV, YV, TV), iV && (NV = (0, MV.db)(iV, NV, qV));
            else if ("category" === BV && iV) {
              var oV = iV;
              NV.every((function(VV) {
                return oV.indexOf(VV) >= 0
              })) && (NV = oV)
            }
          }
          return Tx(Tx({}, eV), {}, Px({}, AV, Tx(Tx({}, EV), {}, {
            axisType: YV,
            domain: NV,
            categoricalDomain: GV,
            duplicateDomain: XV,
            originalDomain: null !== (bV = EV.domain) && void 0 !== bV ? bV : gV,
            isCategorical: kV,
            layout: ZV
          })))
        }), {})
      },
      ix = function(VV, eV) {
        var xV = eV.axisType,
          JV = void 0 === xV ? "xAxis" : xV,
          YV = eV.AxisComp,
          UV = eV.graphicalItems,
          yV = eV.stackGroups,
          pV = eV.dataStartIndex,
          QV = eV.dataEndIndex,
          wV = VV.children,
          vV = "".concat(JV, "Id"),
          rV = (0, AV.g)(wV, YV),
          kV = {};
        return rV && rV.length ? kV = Dx(VV, {
          axes: rV,
          graphicalItems: UV,
          axisType: JV,
          axisIdKey: vV,
          stackGroups: yV,
          dataStartIndex: pV,
          dataEndIndex: QV
        }) : UV && UV.length && (kV = function(VV, eV) {
          var xV = eV.graphicalItems,
            JV = eV.Axis,
            YV = eV.axisType,
            UV = eV.axisIdKey,
            yV = eV.stackGroups,
            pV = eV.dataStartIndex,
            QV = eV.dataEndIndex,
            wV = VV.layout,
            vV = VV.children,
            rV = Gx(VV.data, {
              graphicalItems: xV,
              dataStartIndex: pV,
              dataEndIndex: QV
            }),
            kV = rV.length,
            bV = (0, MV.Y)(wV, YV),
            EV = -1;
          return xV.reduce((function(VV, eV) {
            var BV, jV = (void 0 !== eV.type.defaultProps ? Tx(Tx({}, eV.type.defaultProps), eV.props) : eV.props)[UV],
              qV = Wx("number");
            return VV[jV] ? VV : (EV++, bV ? BV = nV()(0, kV) : yV && yV[jV] && yV[jV].hasStack ? (BV = (0, MV.I)(yV[jV].stackGroups, pV, QV), BV = ze(vV, BV, jV, YV)) : (BV = (0, MV.db)(qV, (0, MV.G)(rV, xV.filter((function(VV) {
              var eV, xV, JV = UV in VV.props ? VV.props[UV] : null === (eV = VV.type.defaultProps) || void 0 === eV ? void 0 : eV[UV],
                YV = "hide" in VV.props ? VV.props.hide : null === (xV = VV.type.defaultProps) || void 0 === xV ? void 0 : xV.hide;
              return JV === jV && !YV
            })), "number", wV), JV.defaultProps.allowDataOverflow), BV = ze(vV, BV, jV, YV)), Tx(Tx({}, VV), {}, Px({}, jV, Tx(Tx({
              axisType: YV
            }, JV.defaultProps), {}, {
              hide: !0,
              orientation: ZV()(Nx, "".concat(YV, ".").concat(EV % 2), null),
              domain: BV,
              originalDomain: qV,
              isCategorical: bV,
              layout: wV
            }))))
          }), {})
        }(VV, {
          Axis: YV,
          graphicalItems: UV,
          axisType: JV,
          axisIdKey: vV,
          stackGroups: yV,
          dataStartIndex: pV,
          dataEndIndex: QV
        })), kV
      },
      Cx = function(VV) {
        var eV = VV.children,
          xV = VV.defaultShowTooltip,
          JV = (0, AV.j)(eV, uV),
          YV = 0,
          UV = 0;
        return VV.data && 0 !== VV.data.length && (UV = VV.data.length - 1), JV && JV.props && (JV.props.startIndex >= 0 && (YV = JV.props.startIndex), JV.props.endIndex >= 0 && (UV = JV.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: YV,
          dataEndIndex: UV,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(xV)
        }
      },
      ax = function(VV) {
        return "horizontal" === VV ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === VV ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === VV ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      ox = function(VV, eV) {
        return "xAxis" === eV ? VV[eV].width : "yAxis" === eV ? VV[eV].height : void 0
      },
      cx = function(VV) {
        var eV = VV.chartName,
          xV = VV.GraphicalChild,
          YV = VV.defaultTooltipEventType,
          yV = void 0 === YV ? "axis" : YV,
          QV = VV.validateTooltipEventTypes,
          nV = void 0 === QV ? ["axis"] : QV,
          wV = VV.axisComponents,
          vV = VV.legendContent,
          kV = VV.formatAxisMap,
          NV = VV.defaultProps,
          XV = function(VV, eV) {
            var xV = eV.graphicalItems,
              JV = eV.stackGroups,
              YV = eV.offset,
              yV = eV.updateId,
              pV = eV.dataStartIndex,
              QV = eV.dataEndIndex,
              nV = VV.barSize,
              ZV = VV.layout,
              vV = VV.barGap,
              rV = VV.barCategoryGap,
              kV = VV.maxBarSize,
              bV = ax(ZV),
              EV = bV.numericAxisName,
              jV = bV.cateAxisName,
              qV = function(VV) {
                return !(!VV || !VV.length) && VV.some((function(VV) {
                  var eV = (0, AV.n)(VV && VV.type);
                  return eV && eV.indexOf("Bar") >= 0
                }))
              }(xV),
              tV = [];
            return xV.forEach((function(xV, bV) {
              var FV = Gx(VV.data, {
                  graphicalItems: [xV],
                  dataStartIndex: pV,
                  dataEndIndex: QV
                }),
                TV = void 0 !== xV.type.defaultProps ? Tx(Tx({}, xV.type.defaultProps), xV.props) : xV.props,
                PV = TV.dataKey,
                NV = TV.maxBarSize,
                XV = TV["".concat(EV, "Id")],
                zV = TV["".concat(jV, "Id")],
                GV = wV.reduce((function(VV, xV) {
                  var JV = eV["".concat(xV.axisType, "Map")],
                    YV = TV["".concat(xV.axisType, "Id")];
                  JV && JV[YV] || "zAxis" === xV.axisType || (0, BV.e)(!1);
                  var UV = JV[YV];
                  return Tx(Tx({}, VV), {}, Px(Px({}, xV.axisType, UV), "".concat(xV.axisType, "Ticks"), (0, MV.R)(UV)))
                }), {}),
                WV = GV[jV],
                RV = GV["".concat(jV, "Ticks")],
                gV = JV && JV[XV] && JV[XV].hasStack && (0, MV.Q)(xV, JV[XV].stackGroups),
                DV = (0, AV.n)(xV.type).indexOf("Bar") >= 0,
                iV = (0, MV.n)(WV, RV),
                CV = [],
                aV = qV && (0, MV.t)({
                  barSize: nV,
                  stackGroups: JV,
                  totalSize: ox(GV, jV)
                });
              if (DV) {
                var oV, cV, hV = UV()(NV) ? kV : NV,
                  lV = null !== (oV = null !== (cV = (0, MV.n)(WV, RV, !0)) && void 0 !== cV ? cV : hV) && void 0 !== oV ? oV : 0;
                CV = (0, MV.p)({
                  barGap: vV,
                  barCategoryGap: rV,
                  bandSize: lV !== iV ? lV : iV,
                  sizeList: aV[zV],
                  maxBarSize: hV
                }), lV !== iV && (CV = CV.map((function(VV) {
                  return Tx(Tx({}, VV), {}, {
                    position: Tx(Tx({}, VV.position), {}, {
                      offset: VV.position.offset - lV / 2
                    })
                  })
                })))
              }
              var LV = xV && xV.type && xV.type.getComposedData;
              LV && tV.push({
                props: Tx(Tx({}, LV(Tx(Tx({}, GV), {}, {
                  displayedData: FV,
                  props: VV,
                  dataKey: PV,
                  item: xV,
                  bandSize: iV,
                  barPosition: CV,
                  offset: YV,
                  stackedData: gV,
                  layout: ZV,
                  dataStartIndex: pV,
                  dataEndIndex: QV
                }))), {}, Px(Px(Px({
                  key: xV.key || "item-".concat(bV)
                }, EV, GV[EV]), jV, GV[jV]), "animationId", yV)),
                childIndex: (0, AV.v)(xV, VV.children),
                item: xV
              })
            })), tV
          },
          GV = function(VV, JV) {
            var YV = VV.props,
              UV = VV.dataStartIndex,
              yV = VV.dataEndIndex,
              pV = VV.updateId;
            if (!(0, AV.B)({
                props: YV
              })) return null;
            var QV = YV.children,
              nV = YV.layout,
              vV = YV.stackOffset,
              bV = YV.data,
              EV = YV.reverseStackOrder,
              BV = ax(nV),
              jV = BV.numericAxisName,
              qV = BV.cateAxisName,
              tV = (0, AV.g)(QV, xV),
              TV = (0, MV.N)(bV, tV, "".concat(jV, "Id"), "".concat(qV, "Id"), vV, EV),
              PV = wV.reduce((function(VV, eV) {
                var xV = "".concat(eV.axisType, "Map");
                return Tx(Tx({}, VV), {}, Px({}, xV, ix(YV, Tx(Tx({}, eV), {}, {
                  graphicalItems: tV,
                  stackGroups: eV.axisType === jV && TV,
                  dataStartIndex: UV,
                  dataEndIndex: yV
                }))))
              }), {}),
              NV = function(VV, eV) {
                var xV = VV.props,
                  JV = VV.graphicalItems,
                  YV = VV.xAxisMap,
                  UV = void 0 === YV ? {} : YV,
                  yV = VV.yAxisMap,
                  pV = void 0 === yV ? {} : yV,
                  QV = xV.width,
                  nV = xV.height,
                  wV = xV.children,
                  vV = xV.margin || {},
                  rV = (0, AV.j)(wV, uV),
                  kV = (0, AV.j)(wV, FV.c),
                  bV = Object.keys(pV).reduce((function(VV, eV) {
                    var xV = pV[eV],
                      JV = xV.orientation;
                    return xV.mirror || xV.hide ? VV : Tx(Tx({}, VV), {}, Px({}, JV, VV[JV] + xV.width))
                  }), {
                    left: vV.left || 0,
                    right: vV.right || 0
                  }),
                  EV = Object.keys(UV).reduce((function(VV, eV) {
                    var xV = UV[eV],
                      JV = xV.orientation;
                    return xV.mirror || xV.hide ? VV : Tx(Tx({}, VV), {}, Px({}, JV, ZV()(VV, "".concat(JV)) + xV.height))
                  }), {
                    top: vV.top || 0,
                    bottom: vV.bottom || 0
                  }),
                  BV = Tx(Tx({}, EV), bV),
                  jV = BV.bottom;
                rV && (BV.bottom += rV.props.height || uV.defaultProps.height), kV && eV && (BV = (0, MV.b)(BV, JV, xV, eV));
                var qV = QV - BV.left - BV.right,
                  tV = nV - BV.top - BV.bottom;
                return Tx(Tx({
                  brushBottom: jV
                }, BV), {}, {
                  width: Math.max(qV, 0),
                  height: Math.max(tV, 0)
                })
              }(Tx(Tx({}, PV), {}, {
                props: YV,
                graphicalItems: tV
              }), null === JV || void 0 === JV ? void 0 : JV.legendBBox);
            Object.keys(PV).forEach((function(VV) {
              PV[VV] = kV(YV, PV[VV], NV, VV.replace("Map", ""), eV)
            }));
            var GV = function(VV) {
                var eV = (0, zV.g)(VV),
                  xV = (0, MV.R)(eV, !1, !0);
                return {
                  tooltipTicks: xV,
                  orderedTooltipTicks: rV()(xV, (function(VV) {
                    return VV.coordinate
                  })),
                  tooltipAxis: eV,
                  tooltipAxisBandSize: (0, MV.n)(eV, xV)
                }
              }(PV["".concat(qV, "Map")]),
              WV = XV(YV, Tx(Tx({}, PV), {}, {
                dataStartIndex: UV,
                dataEndIndex: yV,
                updateId: pV,
                graphicalItems: tV,
                stackGroups: TV,
                offset: NV
              }));
            return Tx(Tx({
              formattedGraphicalItems: WV,
              graphicalItems: tV,
              offset: NV,
              stackGroups: TV
            }, GV), PV)
          },
          WV = function(VV) {
            function xV(VV) {
              var YV, yV, QV;
              return function(VV, eV) {
                if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
              }(this, xV), Px(QV = kx(this, xV, [VV]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Px(QV, "accessibilityManager", new he), Px(QV, "handleLegendBBoxUpdate", (function(VV) {
                if (VV) {
                  var eV = QV.state,
                    xV = eV.dataStartIndex,
                    JV = eV.dataEndIndex,
                    YV = eV.updateId;
                  QV.setState(Tx({
                    legendBBox: VV
                  }, GV({
                    props: QV.props,
                    dataStartIndex: xV,
                    dataEndIndex: JV,
                    updateId: YV
                  }, Tx(Tx({}, QV.state), {}, {
                    legendBBox: VV
                  }))))
                }
              })), Px(QV, "handleReceiveSyncEvent", (function(VV, eV, xV) {
                if (QV.props.syncId === VV) {
                  if (xV === QV.eventEmitterSymbol && "function" !== typeof QV.props.syncMethod) return;
                  QV.applySyncEvent(eV)
                }
              })), Px(QV, "handleBrushChange", (function(VV) {
                var eV = VV.startIndex,
                  xV = VV.endIndex;
                if (eV !== QV.state.dataStartIndex || xV !== QV.state.dataEndIndex) {
                  var JV = QV.state.updateId;
                  QV.setState((function() {
                    return Tx({
                      dataStartIndex: eV,
                      dataEndIndex: xV
                    }, GV({
                      props: QV.props,
                      dataStartIndex: eV,
                      dataEndIndex: xV,
                      updateId: JV
                    }, QV.state))
                  })), QV.triggerSyncEvent({
                    dataStartIndex: eV,
                    dataEndIndex: xV
                  })
                }
              })), Px(QV, "handleMouseEnter", (function(VV) {
                var eV = QV.getMouseInfo(VV);
                if (eV) {
                  var xV = Tx(Tx({}, eV), {}, {
                    isTooltipActive: !0
                  });
                  QV.setState(xV), QV.triggerSyncEvent(xV);
                  var JV = QV.props.onMouseEnter;
                  pV()(JV) && JV(xV, VV)
                }
              })), Px(QV, "triggeredAfterMouseMove", (function(VV) {
                var eV = QV.getMouseInfo(VV),
                  xV = eV ? Tx(Tx({}, eV), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                QV.setState(xV), QV.triggerSyncEvent(xV);
                var JV = QV.props.onMouseMove;
                pV()(JV) && JV(xV, VV)
              })), Px(QV, "handleItemMouseEnter", (function(VV) {
                QV.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: VV,
                    activePayload: VV.tooltipPayload,
                    activeCoordinate: VV.tooltipPosition || {
                      x: VV.cx,
                      y: VV.cy
                    }
                  }
                }))
              })), Px(QV, "handleItemMouseLeave", (function() {
                QV.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), Px(QV, "handleMouseMove", (function(VV) {
                VV.persist(), QV.throttleTriggeredAfterMouseMove(VV)
              })), Px(QV, "handleMouseLeave", (function(VV) {
                QV.throttleTriggeredAfterMouseMove.cancel();
                var eV = {
                  isTooltipActive: !1
                };
                QV.setState(eV), QV.triggerSyncEvent(eV);
                var xV = QV.props.onMouseLeave;
                pV()(xV) && xV(eV, VV)
              })), Px(QV, "handleOuterEvent", (function(VV) {
                var eV, xV = (0, AV.o)(VV),
                  JV = ZV()(QV.props, "".concat(xV));
                xV && pV()(JV) && JV(null !== (eV = /.*touch.*/i.test(xV) ? QV.getMouseInfo(VV.changedTouches[0]) : QV.getMouseInfo(VV)) && void 0 !== eV ? eV : {}, VV)
              })), Px(QV, "handleClick", (function(VV) {
                var eV = QV.getMouseInfo(VV);
                if (eV) {
                  var xV = Tx(Tx({}, eV), {}, {
                    isTooltipActive: !0
                  });
                  QV.setState(xV), QV.triggerSyncEvent(xV);
                  var JV = QV.props.onClick;
                  pV()(JV) && JV(xV, VV)
                }
              })), Px(QV, "handleMouseDown", (function(VV) {
                var eV = QV.props.onMouseDown;
                pV()(eV) && eV(QV.getMouseInfo(VV), VV)
              })), Px(QV, "handleMouseUp", (function(VV) {
                var eV = QV.props.onMouseUp;
                pV()(eV) && eV(QV.getMouseInfo(VV), VV)
              })), Px(QV, "handleTouchMove", (function(VV) {
                null != VV.changedTouches && VV.changedTouches.length > 0 && QV.throttleTriggeredAfterMouseMove(VV.changedTouches[0])
              })), Px(QV, "handleTouchStart", (function(VV) {
                null != VV.changedTouches && VV.changedTouches.length > 0 && QV.handleMouseDown(VV.changedTouches[0])
              })), Px(QV, "handleTouchEnd", (function(VV) {
                null != VV.changedTouches && VV.changedTouches.length > 0 && QV.handleMouseUp(VV.changedTouches[0])
              })), Px(QV, "handleDoubleClick", (function(VV) {
                var eV = QV.props.onDoubleClick;
                pV()(eV) && eV(QV.getMouseInfo(VV), VV)
              })), Px(QV, "handleContextMenu", (function(VV) {
                var eV = QV.props.onContextMenu;
                pV()(eV) && eV(QV.getMouseInfo(VV), VV)
              })), Px(QV, "triggerSyncEvent", (function(VV) {
                void 0 !== QV.props.syncId && ge.emit(De, QV.props.syncId, VV, QV.eventEmitterSymbol)
              })), Px(QV, "applySyncEvent", (function(VV) {
                var eV = QV.props,
                  xV = eV.layout,
                  JV = eV.syncMethod,
                  YV = QV.state.updateId,
                  UV = VV.dataStartIndex,
                  yV = VV.dataEndIndex;
                if (void 0 !== VV.dataStartIndex || void 0 !== VV.dataEndIndex) QV.setState(Tx({
                  dataStartIndex: UV,
                  dataEndIndex: yV
                }, GV({
                  props: QV.props,
                  dataStartIndex: UV,
                  dataEndIndex: yV,
                  updateId: YV
                }, QV.state)));
                else if (void 0 !== VV.activeTooltipIndex) {
                  var pV = VV.chartX,
                    nV = VV.chartY,
                    wV = VV.activeTooltipIndex,
                    ZV = QV.state,
                    vV = ZV.offset,
                    rV = ZV.tooltipTicks;
                  if (!vV) return;
                  if ("function" === typeof JV) wV = JV(rV, VV);
                  else if ("value" === JV) {
                    wV = -1;
                    for (var kV = 0; kV < rV.length; kV++)
                      if (rV[kV].value === VV.activeLabel) {
                        wV = kV;
                        break
                      }
                  }
                  var bV = Tx(Tx({}, vV), {}, {
                      x: vV.left,
                      y: vV.top
                    }),
                    EV = Math.min(pV, bV.x + bV.width),
                    BV = Math.min(nV, bV.y + bV.height),
                    jV = rV[wV] && rV[wV].value,
                    qV = Rx(QV.state, QV.props.data, wV),
                    tV = rV[wV] ? {
                      x: "horizontal" === xV ? rV[wV].coordinate : EV,
                      y: "horizontal" === xV ? BV : rV[wV].coordinate
                    } : Mx;
                  QV.setState(Tx(Tx({}, VV), {}, {
                    activeLabel: jV,
                    activeCoordinate: tV,
                    activePayload: qV,
                    activeTooltipIndex: wV
                  }))
                } else QV.setState(VV)
              })), Px(QV, "renderCursor", (function(VV) {
                var xV, YV = QV.state,
                  UV = YV.isTooltipActive,
                  yV = YV.activeCoordinate,
                  pV = YV.activePayload,
                  nV = YV.offset,
                  wV = YV.activeTooltipIndex,
                  ZV = YV.tooltipAxisBandSize,
                  vV = QV.getTooltipEventType(),
                  rV = null !== (xV = VV.props.active) && void 0 !== xV ? xV : UV,
                  kV = QV.props.layout,
                  bV = VV.key || "_recharts-cursor";
                return JV.createElement(Ux, {
                  key: bV,
                  activeCoordinate: yV,
                  activePayload: pV,
                  activeTooltipIndex: wV,
                  chartName: eV,
                  element: VV,
                  isActive: rV,
                  layout: kV,
                  offset: nV,
                  tooltipAxisBandSize: ZV,
                  tooltipEventType: vV
                })
              })), Px(QV, "renderPolarAxis", (function(VV, eV, xV) {
                var YV = ZV()(VV, "type.axisType"),
                  UV = ZV()(QV.state, "".concat(YV, "Map")),
                  yV = VV.type.defaultProps,
                  pV = void 0 !== yV ? Tx(Tx({}, yV), VV.props) : VV.props,
                  nV = UV && UV[pV["".concat(YV, "Id")]];
                return (0, JV.cloneElement)(VV, Tx(Tx({}, nV), {}, {
                  className: (0, EV.c)(YV, nV.className),
                  key: VV.key || "".concat(eV, "-").concat(xV),
                  ticks: (0, MV.R)(nV, !0)
                }))
              })), Px(QV, "renderPolarGrid", (function(VV) {
                var eV = VV.props,
                  xV = eV.radialLines,
                  YV = eV.polarAngles,
                  UV = eV.polarRadius,
                  yV = QV.state,
                  pV = yV.radiusAxisMap,
                  nV = yV.angleAxisMap,
                  wV = (0, zV.g)(pV),
                  ZV = (0, zV.g)(nV),
                  vV = ZV.cx,
                  rV = ZV.cy,
                  kV = ZV.innerRadius,
                  bV = ZV.outerRadius;
                return (0, JV.cloneElement)(VV, {
                  polarAngles: Array.isArray(YV) ? YV : (0, MV.R)(ZV, !0).map((function(VV) {
                    return VV.coordinate
                  })),
                  polarRadius: Array.isArray(UV) ? UV : (0, MV.R)(wV, !0).map((function(VV) {
                    return VV.coordinate
                  })),
                  cx: vV,
                  cy: rV,
                  innerRadius: kV,
                  outerRadius: bV,
                  key: VV.key || "polar-grid",
                  radialLines: xV
                })
              })), Px(QV, "renderLegend", (function() {
                var VV = QV.state.formattedGraphicalItems,
                  eV = QV.props,
                  xV = eV.children,
                  YV = eV.width,
                  UV = eV.height,
                  yV = QV.props.margin || {},
                  pV = YV - (yV.left || 0) - (yV.right || 0),
                  nV = (0, SV.d)({
                    children: xV,
                    formattedGraphicalItems: VV,
                    legendWidth: pV,
                    legendContent: vV
                  });
                if (!nV) return null;
                var wV = nV.item,
                  ZV = vx(nV, px);
                return (0, JV.cloneElement)(wV, Tx(Tx({}, ZV), {}, {
                  chartWidth: YV,
                  chartHeight: UV,
                  margin: yV,
                  onBBoxUpdate: QV.handleLegendBBoxUpdate
                }))
              })), Px(QV, "renderTooltip", (function() {
                var VV, eV = QV.props,
                  xV = eV.children,
                  YV = eV.accessibilityLayer,
                  UV = (0, AV.j)(xV, tV.c);
                if (!UV) return null;
                var yV = QV.state,
                  pV = yV.isTooltipActive,
                  nV = yV.activeCoordinate,
                  wV = yV.activePayload,
                  ZV = yV.activeLabel,
                  vV = yV.offset,
                  rV = null !== (VV = UV.props.active) && void 0 !== VV ? VV : pV;
                return (0, JV.cloneElement)(UV, {
                  viewBox: Tx(Tx({}, vV), {}, {
                    x: vV.left,
                    y: vV.top
                  }),
                  active: rV,
                  label: ZV,
                  payload: rV ? wV : [],
                  coordinate: nV,
                  accessibilityLayer: YV
                })
              })), Px(QV, "renderBrush", (function(VV) {
                var eV = QV.props,
                  xV = eV.margin,
                  YV = eV.data,
                  UV = QV.state,
                  yV = UV.offset,
                  pV = UV.dataStartIndex,
                  nV = UV.dataEndIndex,
                  wV = UV.updateId;
                return (0, JV.cloneElement)(VV, {
                  key: VV.key || "_recharts-brush",
                  onChange: (0, MV.h)(QV.handleBrushChange, VV.props.onChange),
                  data: YV,
                  x: (0, zV.A)(VV.props.x) ? VV.props.x : yV.left,
                  y: (0, zV.A)(VV.props.y) ? VV.props.y : yV.top + yV.height + yV.brushBottom - (xV.bottom || 0),
                  width: (0, zV.A)(VV.props.width) ? VV.props.width : yV.width,
                  startIndex: pV,
                  endIndex: nV,
                  updateId: "brush-".concat(wV)
                })
              })), Px(QV, "renderReferenceElement", (function(VV, eV, xV) {
                if (!VV) return null;
                var YV = QV.clipPathId,
                  UV = QV.state,
                  yV = UV.xAxisMap,
                  pV = UV.yAxisMap,
                  nV = UV.offset,
                  wV = VV.type.defaultProps || {},
                  ZV = VV.props,
                  vV = ZV.xAxisId,
                  rV = void 0 === vV ? wV.xAxisId : vV,
                  kV = ZV.yAxisId,
                  bV = void 0 === kV ? wV.yAxisId : kV;
                return (0, JV.cloneElement)(VV, {
                  key: VV.key || "".concat(eV, "-").concat(xV),
                  xAxis: yV[rV],
                  yAxis: pV[bV],
                  viewBox: {
                    x: nV.left,
                    y: nV.top,
                    width: nV.width,
                    height: nV.height
                  },
                  clipPathId: YV
                })
              })), Px(QV, "renderActivePoints", (function(VV) {
                var eV = VV.item,
                  JV = VV.activePoint,
                  YV = VV.basePoint,
                  UV = VV.childIndex,
                  yV = VV.isRange,
                  pV = [],
                  QV = eV.props.key,
                  nV = void 0 !== eV.item.type.defaultProps ? Tx(Tx({}, eV.item.type.defaultProps), eV.item.props) : eV.item.props,
                  wV = nV.activeDot,
                  ZV = Tx(Tx({
                    index: UV,
                    dataKey: nV.dataKey,
                    cx: JV.x,
                    cy: JV.y,
                    r: 4,
                    fill: (0, MV.M)(eV.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: JV.payload,
                    value: JV.value
                  }, (0, AV.c)(wV, !1)), (0, ie.k)(wV));
                return pV.push(xV.renderActiveDot(wV, ZV, "".concat(QV, "-activePoint-").concat(UV))), YV ? pV.push(xV.renderActiveDot(wV, Tx(Tx({}, ZV), {}, {
                  cx: YV.x,
                  cy: YV.y
                }), "".concat(QV, "-basePoint-").concat(UV))) : yV && pV.push(null), pV
              })), Px(QV, "renderGraphicChild", (function(VV, eV, xV) {
                var YV = QV.filterFormatItem(VV, eV, xV);
                if (!YV) return null;
                var yV = QV.getTooltipEventType(),
                  pV = QV.state,
                  nV = pV.isTooltipActive,
                  wV = pV.tooltipAxis,
                  ZV = pV.activeTooltipIndex,
                  vV = pV.activeLabel,
                  rV = QV.props.children,
                  kV = (0, AV.j)(rV, tV.c),
                  bV = YV.props,
                  EV = bV.points,
                  BV = bV.isRange,
                  jV = bV.baseLine,
                  qV = void 0 !== YV.item.type.defaultProps ? Tx(Tx({}, YV.item.type.defaultProps), YV.item.props) : YV.item.props,
                  FV = qV.activeDot,
                  TV = qV.hide,
                  PV = qV.activeBar,
                  NV = qV.activeShape,
                  XV = Boolean(!TV && nV && kV && (FV || PV || NV)),
                  GV = {};
                "axis" !== yV && kV && "click" === kV.props.trigger ? GV = {
                  onClick: (0, MV.h)(QV.handleItemMouseEnter, VV.props.onClick)
                } : "axis" !== yV && (GV = {
                  onMouseLeave: (0, MV.h)(QV.handleItemMouseLeave, VV.props.onMouseLeave),
                  onMouseEnter: (0, MV.h)(QV.handleItemMouseEnter, VV.props.onMouseEnter)
                });
                var WV = (0, JV.cloneElement)(VV, Tx(Tx({}, YV.props), GV));
                if (XV) {
                  if (!(ZV >= 0)) {
                    var RV, gV = (null !== (RV = QV.getItemByXY(QV.state.activeCoordinate)) && void 0 !== RV ? RV : {
                        graphicalItem: WV
                      }).graphicalItem,
                      DV = gV.item,
                      iV = void 0 === DV ? VV : DV,
                      CV = gV.childIndex,
                      aV = Tx(Tx(Tx({}, YV.props), GV), {}, {
                        activeIndex: CV
                      });
                    return [(0, JV.cloneElement)(iV, aV), null, null]
                  }
                  var oV, cV;
                  if (wV.dataKey && !wV.allowDuplicatedCategory) {
                    var hV = "function" === typeof wV.dataKey ? function(VV) {
                      return "function" === typeof wV.dataKey ? wV.dataKey(VV.payload) : null
                    } : "payload.".concat(wV.dataKey.toString());
                    oV = (0, zV.d)(EV, hV, vV), cV = BV && jV && (0, zV.d)(jV, hV, vV)
                  } else oV = null === EV || void 0 === EV ? void 0 : EV[ZV], cV = BV && jV && jV[ZV];
                  if (NV || PV) {
                    var lV = void 0 !== VV.props.activeIndex ? VV.props.activeIndex : ZV;
                    return [(0, JV.cloneElement)(VV, Tx(Tx(Tx({}, YV.props), GV), {}, {
                      activeIndex: lV
                    })), null, null]
                  }
                  if (!UV()(oV)) return [WV].concat(jx(QV.renderActivePoints({
                    item: YV,
                    activePoint: oV,
                    basePoint: cV,
                    childIndex: ZV,
                    isRange: BV
                  })))
                }
                return BV ? [WV, null, null] : [WV, null]
              })), Px(QV, "renderCustomized", (function(VV, eV, xV) {
                return (0, JV.cloneElement)(VV, Tx(Tx({
                  key: "recharts-customized-".concat(xV)
                }, QV.props), QV.state))
              })), Px(QV, "renderMap", {
                CartesianGrid: {
                  handler: zx,
                  once: !0
                },
                ReferenceArea: {
                  handler: QV.renderReferenceElement
                },
                ReferenceLine: {
                  handler: zx
                },
                ReferenceDot: {
                  handler: QV.renderReferenceElement
                },
                XAxis: {
                  handler: zx
                },
                YAxis: {
                  handler: zx
                },
                Brush: {
                  handler: QV.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: QV.renderGraphicChild
                },
                Line: {
                  handler: QV.renderGraphicChild
                },
                Area: {
                  handler: QV.renderGraphicChild
                },
                Radar: {
                  handler: QV.renderGraphicChild
                },
                RadialBar: {
                  handler: QV.renderGraphicChild
                },
                Scatter: {
                  handler: QV.renderGraphicChild
                },
                Pie: {
                  handler: QV.renderGraphicChild
                },
                Funnel: {
                  handler: QV.renderGraphicChild
                },
                Tooltip: {
                  handler: QV.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: QV.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: QV.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: QV.renderPolarAxis
                },
                Customized: {
                  handler: QV.renderCustomized
                }
              }), QV.clipPathId = "".concat(null !== (YV = VV.id) && void 0 !== YV ? YV : (0, zV.H)("recharts"), "-clip"), QV.throttleTriggeredAfterMouseMove = bV()(QV.triggeredAfterMouseMove, null !== (yV = VV.throttleDelay) && void 0 !== yV ? yV : 1e3 / 60), QV.state = {}, QV
            }
            return function(VV, eV) {
              if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
              VV.prototype = Object.create(eV && eV.prototype, {
                constructor: {
                  value: VV,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(VV, "prototype", {
                writable: !1
              }), eV && Bx(VV, eV)
            }(xV, VV), YV = xV, QV = [{
              key: "componentDidMount",
              value: function() {
                var VV, eV;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (VV = this.props.margin.left) && void 0 !== VV ? VV : 0,
                    top: null !== (eV = this.props.margin.top) && void 0 !== eV ? eV : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var VV = this.props,
                  eV = VV.children,
                  xV = VV.data,
                  JV = VV.height,
                  YV = VV.layout,
                  UV = (0, AV.j)(eV, tV.c);
                if (UV) {
                  var yV = UV.props.defaultIndex;
                  if (!("number" !== typeof yV || yV < 0 || yV > this.state.tooltipTicks.length - 1)) {
                    var pV = this.state.tooltipTicks[yV] && this.state.tooltipTicks[yV].value,
                      QV = Rx(this.state, xV, yV, pV),
                      nV = this.state.tooltipTicks[yV].coordinate,
                      wV = (this.state.offset.top + JV) / 2,
                      ZV = "horizontal" === YV ? {
                        x: nV,
                        y: wV
                      } : {
                        y: nV,
                        x: wV
                      },
                      vV = this.state.formattedGraphicalItems.find((function(VV) {
                        return "Scatter" === VV.item.type.name
                      }));
                    vV && (ZV = Tx(Tx({}, ZV), vV.props.points[yV].tooltipPosition), QV = vV.props.points[yV].tooltipPayload);
                    var rV = {
                      activeTooltipIndex: yV,
                      isTooltipActive: !0,
                      activeLabel: pV,
                      activePayload: QV,
                      activeCoordinate: ZV
                    };
                    this.setState(rV), this.renderCursor(UV), this.accessibilityManager.setIndex(yV)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(VV, eV) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== eV.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== VV.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== VV.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (xV = this.props.margin.left) && void 0 !== xV ? xV : 0,
                    top: null !== (JV = this.props.margin.top) && void 0 !== JV ? JV : 0
                  }
                }), null) : null;
                var xV, JV
              }
            }, {
              key: "componentDidUpdate",
              value: function(VV) {
                (0, AV.s)([(0, AV.j)(VV.children, tV.c)], [(0, AV.j)(this.props.children, tV.c)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var VV = (0, AV.j)(this.props.children, tV.c);
                if (VV && "boolean" === typeof VV.props.shared) {
                  var eV = VV.props.shared ? "axis" : "item";
                  return nV.indexOf(eV) >= 0 ? eV : yV
                }
                return yV
              }
            }, {
              key: "getMouseInfo",
              value: function(VV) {
                if (!this.container) return null;
                var eV = this.container,
                  xV = eV.getBoundingClientRect(),
                  JV = (0, sV.e)(xV),
                  YV = {
                    chartX: Math.round(VV.pageX - JV.left),
                    chartY: Math.round(VV.pageY - JV.top)
                  },
                  UV = xV.width / eV.offsetWidth || 1,
                  yV = this.inRange(YV.chartX, YV.chartY, UV);
                if (!yV) return null;
                var pV = this.state,
                  QV = pV.xAxisMap,
                  nV = pV.yAxisMap,
                  wV = this.getTooltipEventType(),
                  ZV = gx(this.state, this.props.data, this.props.layout, yV);
                if ("axis" !== wV && QV && nV) {
                  var vV = (0, zV.g)(QV).scale,
                    rV = (0, zV.g)(nV).scale,
                    kV = vV && vV.invert ? vV.invert(YV.chartX) : null,
                    bV = rV && rV.invert ? rV.invert(YV.chartY) : null;
                  return Tx(Tx({}, YV), {}, {
                    xValue: kV,
                    yValue: bV
                  }, ZV)
                }
                return ZV ? Tx(Tx({}, YV), ZV) : null
              }
            }, {
              key: "inRange",
              value: function(VV, eV) {
                var xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  JV = this.props.layout,
                  YV = VV / xV,
                  UV = eV / xV;
                if ("horizontal" === JV || "vertical" === JV) {
                  var yV = this.state.offset;
                  return YV >= yV.left && YV <= yV.left + yV.width && UV >= yV.top && UV <= yV.top + yV.height ? {
                    x: YV,
                    y: UV
                  } : null
                }
                var pV = this.state,
                  QV = pV.angleAxisMap,
                  nV = pV.radiusAxisMap;
                if (QV && nV) {
                  var wV = (0, zV.g)(QV);
                  return (0, Ge.c)({
                    x: YV,
                    y: UV
                  }, wV)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var VV = this.props.children,
                  eV = this.getTooltipEventType(),
                  xV = (0, AV.j)(VV, tV.c),
                  JV = {};
                return xV && "axis" === eV && (JV = "click" === xV.props.trigger ? {
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
                }), Tx(Tx({}, (0, ie.k)(this.props, this.handleOuterEvent)), JV)
              }
            }, {
              key: "addListener",
              value: function() {
                ge.on(De, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                ge.removeListener(De, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(VV, eV, xV) {
                for (var JV = this.state.formattedGraphicalItems, YV = 0, UV = JV.length; YV < UV; YV++) {
                  var yV = JV[YV];
                  if (yV.item === VV || yV.props.key === VV.key || eV === (0, AV.n)(yV.item.type) && xV === yV.childIndex) return yV
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var VV = this.clipPathId,
                  eV = this.state.offset,
                  xV = eV.left,
                  YV = eV.top,
                  UV = eV.height,
                  yV = eV.width;
                return JV.createElement("defs", null, JV.createElement("clipPath", {
                  id: VV
                }, JV.createElement("rect", {
                  x: xV,
                  y: YV,
                  height: UV,
                  width: yV
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var VV = this.state.xAxisMap;
                return VV ? Object.entries(VV).reduce((function(VV, eV) {
                  var xV = Zx(eV, 2),
                    JV = xV[0],
                    YV = xV[1];
                  return Tx(Tx({}, VV), {}, Px({}, JV, YV.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var VV = this.state.yAxisMap;
                return VV ? Object.entries(VV).reduce((function(VV, eV) {
                  var xV = Zx(eV, 2),
                    JV = xV[0],
                    YV = xV[1];
                  return Tx(Tx({}, VV), {}, Px({}, JV, YV.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(VV) {
                var eV;
                return null === (eV = this.state.xAxisMap) || void 0 === eV || null === (eV = eV[VV]) || void 0 === eV ? void 0 : eV.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(VV) {
                var eV;
                return null === (eV = this.state.yAxisMap) || void 0 === eV || null === (eV = eV[VV]) || void 0 === eV ? void 0 : eV.scale
              }
            }, {
              key: "getItemByXY",
              value: function(VV) {
                var eV = this.state,
                  xV = eV.formattedGraphicalItems,
                  JV = eV.activeItem;
                if (xV && xV.length)
                  for (var YV = 0, UV = xV.length; YV < UV; YV++) {
                    var yV = xV[YV],
                      pV = yV.props,
                      QV = yV.item,
                      nV = void 0 !== QV.type.defaultProps ? Tx(Tx({}, QV.type.defaultProps), QV.props) : QV.props,
                      wV = (0, AV.n)(QV.type);
                    if ("Bar" === wV) {
                      var ZV = (pV.data || []).find((function(eV) {
                        return (0, PV.e)(VV, eV)
                      }));
                      if (ZV) return {
                        graphicalItem: yV,
                        payload: ZV
                      }
                    } else if ("RadialBar" === wV) {
                      var vV = (pV.data || []).find((function(eV) {
                        return (0, Ge.c)(VV, eV)
                      }));
                      if (vV) return {
                        graphicalItem: yV,
                        payload: vV
                      }
                    } else if ((0, le.l)(yV, JV) || (0, le.o)(yV, JV) || (0, le.q)(yV, JV)) {
                      var rV = (0, le.h)({
                          graphicalItem: yV,
                          activeTooltipItem: JV,
                          itemData: nV.data
                        }),
                        kV = void 0 === nV.activeIndex ? rV : nV.activeIndex;
                      return {
                        graphicalItem: Tx(Tx({}, yV), {}, {
                          childIndex: kV
                        }),
                        payload: (0, le.q)(yV, JV) ? nV.data[rV] : yV.props.data[rV]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var VV = this;
                if (!(0, AV.B)(this)) return null;
                var eV, xV, YV = this.props,
                  UV = YV.children,
                  yV = YV.className,
                  pV = YV.width,
                  QV = YV.height,
                  nV = YV.style,
                  wV = YV.compact,
                  ZV = YV.title,
                  vV = YV.desc,
                  rV = vx(YV, Qx),
                  kV = (0, AV.c)(rV, !1);
                if (wV) return JV.createElement(yx.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, JV.createElement(jV.c, wx({}, kV, {
                  width: pV,
                  height: QV,
                  title: ZV,
                  desc: vV
                }), this.renderClipPath(), (0, AV.x)(UV, this.renderMap)));
                this.props.accessibilityLayer && (kV.tabIndex = null !== (eV = this.props.tabIndex) && void 0 !== eV ? eV : 0, kV.role = null !== (xV = this.props.role) && void 0 !== xV ? xV : "application", kV.onKeyDown = function(eV) {
                  VV.accessibilityManager.keyboardEvent(eV)
                }, kV.onFocus = function() {
                  VV.accessibilityManager.focus()
                });
                var bV = this.parseEventsOfWrapper();
                return JV.createElement(yx.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, JV.createElement("div", wx({
                  className: (0, EV.c)("recharts-wrapper", yV),
                  style: Tx({
                    position: "relative",
                    cursor: "default",
                    width: pV,
                    height: QV
                  }, nV)
                }, bV, {
                  ref: function(eV) {
                    VV.container = eV
                  }
                }), JV.createElement(jV.c, wx({}, kV, {
                  width: pV,
                  height: QV,
                  title: ZV,
                  desc: vV,
                  style: Xx
                }), this.renderClipPath(), (0, AV.x)(UV, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], QV && rx(YV.prototype, QV), wV && rx(YV, wV), Object.defineProperty(YV, "prototype", {
              writable: !1
            }), YV;
            var YV, QV, wV
          }(JV.Component);
        Px(WV, "displayName", eV), Px(WV, "defaultProps", Tx({
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
        }, NV)), Px(WV, "getDerivedStateFromProps", (function(VV, eV) {
          var xV = VV.dataKey,
            JV = VV.data,
            YV = VV.children,
            yV = VV.width,
            pV = VV.height,
            QV = VV.layout,
            nV = VV.stackOffset,
            wV = VV.margin,
            ZV = eV.dataStartIndex,
            vV = eV.dataEndIndex;
          if (void 0 === eV.updateId) {
            var rV = Cx(VV);
            return Tx(Tx(Tx({}, rV), {}, {
              updateId: 0
            }, GV(Tx(Tx({
              props: VV
            }, rV), {}, {
              updateId: 0
            }), eV)), {}, {
              prevDataKey: xV,
              prevData: JV,
              prevWidth: yV,
              prevHeight: pV,
              prevLayout: QV,
              prevStackOffset: nV,
              prevMargin: wV,
              prevChildren: YV
            })
          }
          if (xV !== eV.prevDataKey || JV !== eV.prevData || yV !== eV.prevWidth || pV !== eV.prevHeight || QV !== eV.prevLayout || nV !== eV.prevStackOffset || !(0, We.e)(wV, eV.prevMargin)) {
            var kV = Cx(VV),
              bV = {
                chartX: eV.chartX,
                chartY: eV.chartY,
                isTooltipActive: eV.isTooltipActive
              },
              EV = Tx(Tx({}, gx(eV, JV, QV)), {}, {
                updateId: eV.updateId + 1
              }),
              BV = Tx(Tx(Tx({}, kV), bV), EV);
            return Tx(Tx(Tx({}, BV), GV(Tx({
              props: VV
            }, BV), eV)), {}, {
              prevDataKey: xV,
              prevData: JV,
              prevWidth: yV,
              prevHeight: pV,
              prevLayout: QV,
              prevStackOffset: nV,
              prevMargin: wV,
              prevChildren: YV
            })
          }
          if (!(0, AV.s)(YV, eV.prevChildren)) {
            var jV, qV, tV, FV, TV = (0, AV.j)(YV, uV),
              PV = TV && null !== (jV = null === (qV = TV.props) || void 0 === qV ? void 0 : qV.startIndex) && void 0 !== jV ? jV : ZV,
              NV = TV && null !== (tV = null === (FV = TV.props) || void 0 === FV ? void 0 : FV.endIndex) && void 0 !== tV ? tV : vV,
              XV = PV !== ZV || NV !== vV,
              MV = !UV()(JV) && !XV ? eV.updateId : eV.updateId + 1;
            return Tx(Tx({
              updateId: MV
            }, GV(Tx(Tx({
              props: VV
            }, eV), {}, {
              updateId: MV,
              dataStartIndex: PV,
              dataEndIndex: NV
            }), eV)), {}, {
              prevChildren: YV,
              dataStartIndex: PV,
              dataEndIndex: NV
            })
          }
          return null
        })), Px(WV, "renderActiveDot", (function(VV, eV, xV) {
          var YV;
          return YV = (0, JV.isValidElement)(VV) ? (0, JV.cloneElement)(VV, eV) : pV()(VV) ? VV(eV) : JV.createElement(TV.e, eV), JV.createElement(qV.e, {
            className: "recharts-active-dot",
            key: xV
          }, YV)
        }));
        var RV = (0, JV.forwardRef)((function(VV, eV) {
          return JV.createElement(WV, wx({}, VV, {
            ref: eV
          }))
        }));
        return RV.displayName = WV.displayName, RV
      }
  },
  6826: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV
    });
    var JV = function(VV) {
      return null
    };
    JV.displayName = "Cell"
  },
  6782: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => GV
    });
    var JV = xV(62),
      YV = xV(5974),
      UV = xV.n(YV),
      yV = xV(5824),
      pV = xV.n(yV),
      QV = xV(5631),
      nV = xV.n(QV),
      wV = xV(5609),
      ZV = xV(6680),
      vV = xV(5990),
      rV = xV(5713),
      kV = xV(6784);

    function bV(VV) {
      return bV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, bV(VV)
    }
    var EV = ["offset"];

    function BV(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return jV(VV)
      }(VV) || function(VV) {
        if ("undefined" !== typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
      }(VV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return jV(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return jV(VV, eV)
      }(VV) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function jV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function qV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function tV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function FV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? tV(Object(xV), !0).forEach((function(eV) {
          TV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : tV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function TV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != bV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != bV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == bV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function PV() {
      return PV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, PV.apply(this, arguments)
    }
    var AV = function(VV) {
        var eV = VV.value,
          xV = VV.formatter,
          JV = UV()(VV.children) ? eV : VV.children;
        return pV()(xV) ? xV(JV) : JV
      },
      NV = function(VV, eV, xV) {
        var YV, yV, pV = VV.position,
          QV = VV.viewBox,
          nV = VV.offset,
          ZV = VV.className,
          vV = QV,
          bV = vV.cx,
          EV = vV.cy,
          BV = vV.innerRadius,
          jV = vV.outerRadius,
          qV = vV.startAngle,
          tV = vV.endAngle,
          FV = vV.clockWise,
          TV = (BV + jV) / 2,
          AV = function(VV, eV) {
            return (0, rV.D)(eV - VV) * Math.min(Math.abs(eV - VV), 360)
          }(qV, tV),
          NV = AV >= 0 ? 1 : -1;
        "insideStart" === pV ? (YV = qV + NV * nV, yV = FV) : "insideEnd" === pV ? (YV = tV - NV * nV, yV = !FV) : "end" === pV && (YV = tV + NV * nV, yV = FV), yV = AV <= 0 ? yV : !yV;
        var XV = (0, kV.e)(bV, EV, TV, YV),
          MV = (0, kV.e)(bV, EV, TV, YV + 359 * (yV ? 1 : -1)),
          zV = "M".concat(XV.x, ",").concat(XV.y, "\n    A").concat(TV, ",").concat(TV, ",0,1,").concat(yV ? 0 : 1, ",\n    ").concat(MV.x, ",").concat(MV.y),
          GV = UV()(VV.id) ? (0, rV.H)("recharts-radial-line-") : VV.id;
        return JV.createElement("text", PV({}, xV, {
          dominantBaseline: "central",
          className: (0, wV.c)("recharts-radial-bar-label", ZV)
        }), JV.createElement("defs", null, JV.createElement("path", {
          id: GV,
          d: zV
        })), JV.createElement("textPath", {
          xlinkHref: "#".concat(GV)
        }, eV))
      },
      XV = function(VV) {
        var eV = VV.viewBox,
          xV = VV.offset,
          JV = VV.position,
          YV = eV,
          UV = YV.cx,
          yV = YV.cy,
          pV = YV.innerRadius,
          QV = YV.outerRadius,
          nV = (YV.startAngle + YV.endAngle) / 2;
        if ("outside" === JV) {
          var wV = (0, kV.e)(UV, yV, QV + xV, nV),
            ZV = wV.x;
          return {
            x: ZV,
            y: wV.y,
            textAnchor: ZV >= UV ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === JV) return {
          x: UV,
          y: yV,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === JV) return {
          x: UV,
          y: yV,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === JV) return {
          x: UV,
          y: yV,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var vV = (pV + QV) / 2,
          rV = (0, kV.e)(UV, yV, vV, nV);
        return {
          x: rV.x,
          y: rV.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      MV = function(VV) {
        var eV = VV.viewBox,
          xV = VV.parentViewBox,
          JV = VV.offset,
          YV = VV.position,
          UV = eV,
          yV = UV.x,
          pV = UV.y,
          QV = UV.width,
          wV = UV.height,
          ZV = wV >= 0 ? 1 : -1,
          vV = ZV * JV,
          kV = ZV > 0 ? "end" : "start",
          bV = ZV > 0 ? "start" : "end",
          EV = QV >= 0 ? 1 : -1,
          BV = EV * JV,
          jV = EV > 0 ? "end" : "start",
          qV = EV > 0 ? "start" : "end";
        if ("top" === YV) return FV(FV({}, {
          x: yV + QV / 2,
          y: pV - ZV * JV,
          textAnchor: "middle",
          verticalAnchor: kV
        }), xV ? {
          height: Math.max(pV - xV.y, 0),
          width: QV
        } : {});
        if ("bottom" === YV) return FV(FV({}, {
          x: yV + QV / 2,
          y: pV + wV + vV,
          textAnchor: "middle",
          verticalAnchor: bV
        }), xV ? {
          height: Math.max(xV.y + xV.height - (pV + wV), 0),
          width: QV
        } : {});
        if ("left" === YV) {
          var tV = {
            x: yV - BV,
            y: pV + wV / 2,
            textAnchor: jV,
            verticalAnchor: "middle"
          };
          return FV(FV({}, tV), xV ? {
            width: Math.max(tV.x - xV.x, 0),
            height: wV
          } : {})
        }
        if ("right" === YV) {
          var TV = {
            x: yV + QV + BV,
            y: pV + wV / 2,
            textAnchor: qV,
            verticalAnchor: "middle"
          };
          return FV(FV({}, TV), xV ? {
            width: Math.max(xV.x + xV.width - TV.x, 0),
            height: wV
          } : {})
        }
        var PV = xV ? {
          width: QV,
          height: wV
        } : {};
        return "insideLeft" === YV ? FV({
          x: yV + BV,
          y: pV + wV / 2,
          textAnchor: qV,
          verticalAnchor: "middle"
        }, PV) : "insideRight" === YV ? FV({
          x: yV + QV - BV,
          y: pV + wV / 2,
          textAnchor: jV,
          verticalAnchor: "middle"
        }, PV) : "insideTop" === YV ? FV({
          x: yV + QV / 2,
          y: pV + vV,
          textAnchor: "middle",
          verticalAnchor: bV
        }, PV) : "insideBottom" === YV ? FV({
          x: yV + QV / 2,
          y: pV + wV - vV,
          textAnchor: "middle",
          verticalAnchor: kV
        }, PV) : "insideTopLeft" === YV ? FV({
          x: yV + BV,
          y: pV + vV,
          textAnchor: qV,
          verticalAnchor: bV
        }, PV) : "insideTopRight" === YV ? FV({
          x: yV + QV - BV,
          y: pV + vV,
          textAnchor: jV,
          verticalAnchor: bV
        }, PV) : "insideBottomLeft" === YV ? FV({
          x: yV + BV,
          y: pV + wV - vV,
          textAnchor: qV,
          verticalAnchor: kV
        }, PV) : "insideBottomRight" === YV ? FV({
          x: yV + QV - BV,
          y: pV + wV - vV,
          textAnchor: jV,
          verticalAnchor: kV
        }, PV) : nV()(YV) && ((0, rV.A)(YV.x) || (0, rV.C)(YV.x)) && ((0, rV.A)(YV.y) || (0, rV.C)(YV.y)) ? FV({
          x: yV + (0, rV.m)(YV.x, QV),
          y: pV + (0, rV.m)(YV.y, wV),
          textAnchor: "end",
          verticalAnchor: "end"
        }, PV) : FV({
          x: yV + QV / 2,
          y: pV + wV / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, PV)
      },
      zV = function(VV) {
        return "cx" in VV && (0, rV.A)(VV.cx)
      };

    function GV(VV) {
      var eV, xV = VV.offset,
        YV = FV({
          offset: void 0 === xV ? 5 : xV
        }, qV(VV, EV)),
        yV = YV.viewBox,
        QV = YV.position,
        nV = YV.value,
        rV = YV.children,
        kV = YV.content,
        bV = YV.className,
        BV = void 0 === bV ? "" : bV,
        jV = YV.textBreakAll;
      if (!yV || UV()(nV) && UV()(rV) && !(0, JV.isValidElement)(kV) && !pV()(kV)) return null;
      if ((0, JV.isValidElement)(kV)) return (0, JV.cloneElement)(kV, YV);
      if (pV()(kV)) {
        if (eV = (0, JV.createElement)(kV, YV), (0, JV.isValidElement)(eV)) return eV
      } else eV = AV(YV);
      var tV = zV(yV),
        TV = (0, vV.c)(YV, !0);
      if (tV && ("insideStart" === QV || "insideEnd" === QV || "end" === QV)) return NV(YV, eV, TV);
      var GV = tV ? XV(YV) : MV(YV);
      return JV.createElement(ZV.e, PV({
        className: (0, wV.c)("recharts-label", BV)
      }, TV, GV, {
        breakAll: jV
      }), eV)
    }
    GV.displayName = "Label";
    var WV = function(VV) {
      var eV = VV.cx,
        xV = VV.cy,
        JV = VV.angle,
        YV = VV.startAngle,
        UV = VV.endAngle,
        yV = VV.r,
        pV = VV.radius,
        QV = VV.innerRadius,
        nV = VV.outerRadius,
        wV = VV.x,
        ZV = VV.y,
        vV = VV.top,
        kV = VV.left,
        bV = VV.width,
        EV = VV.height,
        BV = VV.clockWise,
        jV = VV.labelViewBox;
      if (jV) return jV;
      if ((0, rV.A)(bV) && (0, rV.A)(EV)) {
        if ((0, rV.A)(wV) && (0, rV.A)(ZV)) return {
          x: wV,
          y: ZV,
          width: bV,
          height: EV
        };
        if ((0, rV.A)(vV) && (0, rV.A)(kV)) return {
          x: vV,
          y: kV,
          width: bV,
          height: EV
        }
      }
      return (0, rV.A)(wV) && (0, rV.A)(ZV) ? {
        x: wV,
        y: ZV,
        width: 0,
        height: 0
      } : (0, rV.A)(eV) && (0, rV.A)(xV) ? {
        cx: eV,
        cy: xV,
        startAngle: YV || JV || 0,
        endAngle: UV || JV || 0,
        innerRadius: QV || 0,
        outerRadius: nV || pV || yV || 0,
        clockWise: BV
      } : VV.viewBox ? VV.viewBox : {}
    };
    GV.parseViewBox = WV, GV.renderCallByParent = function(VV, eV) {
      var xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!VV || !VV.children && xV && !VV.label) return null;
      var YV = VV.children,
        UV = WV(VV),
        yV = (0, vV.g)(YV, GV).map((function(VV, xV) {
          return (0, JV.cloneElement)(VV, {
            viewBox: eV || UV,
            key: "label-".concat(xV)
          })
        }));
      if (!xV) return yV;
      var QV = function(VV, eV) {
        return VV ? !0 === VV ? JV.createElement(GV, {
          key: "label-implicit",
          viewBox: eV
        }) : (0, rV.w)(VV) ? JV.createElement(GV, {
          key: "label-implicit",
          viewBox: eV,
          value: VV
        }) : (0, JV.isValidElement)(VV) ? VV.type === GV ? (0, JV.cloneElement)(VV, {
          key: "label-implicit",
          viewBox: eV
        }) : JV.createElement(GV, {
          key: "label-implicit",
          content: VV,
          viewBox: eV
        }) : pV()(VV) ? JV.createElement(GV, {
          key: "label-implicit",
          content: VV,
          viewBox: eV
        }) : nV()(VV) ? JV.createElement(GV, PV({
          viewBox: eV
        }, VV, {
          key: "label-implicit"
        })) : null : null
      }(VV.label, eV || UV);
      return [QV].concat(BV(yV))
    }
  },
  6833: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => MV
    });
    var JV = xV(62),
      YV = xV(5974),
      UV = xV.n(YV),
      yV = xV(5631),
      pV = xV.n(yV),
      QV = xV(5824),
      nV = xV.n(QV),
      wV = xV(6841),
      ZV = xV.n(wV),
      vV = xV(6782),
      rV = xV(6518),
      kV = xV(5990),
      bV = xV(6696);

    function EV(VV) {
      return EV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, EV(VV)
    }
    var BV = ["valueAccessor"],
      jV = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function qV(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return tV(VV)
      }(VV) || function(VV) {
        if ("undefined" !== typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
      }(VV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return tV(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return tV(VV, eV)
      }(VV) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function FV() {
      return FV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, FV.apply(this, arguments)
    }

    function TV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function PV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? TV(Object(xV), !0).forEach((function(eV) {
          AV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : TV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function AV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != EV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != EV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == EV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function NV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }
    var XV = function(VV) {
      return Array.isArray(VV.value) ? ZV()(VV.value) : VV.value
    };

    function MV(VV) {
      var eV = VV.valueAccessor,
        xV = void 0 === eV ? XV : eV,
        YV = NV(VV, BV),
        yV = YV.data,
        pV = YV.dataKey,
        QV = YV.clockWise,
        nV = YV.id,
        wV = YV.textBreakAll,
        ZV = NV(YV, jV);
      return yV && yV.length ? JV.createElement(rV.e, {
        className: "recharts-label-list"
      }, yV.map((function(VV, eV) {
        var YV = UV()(pV) ? xV(VV, eV) : (0, bV.V)(VV && VV.payload, pV),
          yV = UV()(nV) ? {} : {
            id: "".concat(nV, "-").concat(eV)
          };
        return JV.createElement(vV.b, FV({}, (0, kV.c)(VV, !0), ZV, yV, {
          parentViewBox: VV.parentViewBox,
          value: YV,
          textBreakAll: wV,
          viewBox: vV.b.parseViewBox(UV()(QV) ? VV : PV(PV({}, VV), {}, {
            clockWise: QV
          })),
          key: "label-".concat(eV),
          index: eV
        }))
      }))) : null
    }
    MV.displayName = "LabelList", MV.renderCallByParent = function(VV, eV) {
      var xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!VV || !VV.children && xV && !VV.label) return null;
      var YV = VV.children,
        UV = (0, kV.g)(YV, MV).map((function(VV, xV) {
          return (0, JV.cloneElement)(VV, {
            data: eV,
            key: "labelList-".concat(xV)
          })
        }));
      return xV ? [function(VV, eV) {
        return VV ? !0 === VV ? JV.createElement(MV, {
          key: "labelList-implicit",
          data: eV
        }) : JV.isValidElement(VV) || nV()(VV) ? JV.createElement(MV, {
          key: "labelList-implicit",
          data: eV,
          content: VV
        }) : pV()(VV) ? JV.createElement(MV, FV({
          data: eV
        }, VV, {
          key: "labelList-implicit"
        })) : null : null
      }(VV.label, eV)].concat(qV(UV)) : UV
    }
  },
  6601: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => cV
    });
    var JV = xV(62),
      YV = xV(5824),
      UV = xV.n(YV),
      yV = xV(5609),
      pV = xV(5982),
      QV = xV(6511),
      nV = xV(6606),
      wV = xV(6012);

    function ZV(VV) {
      return ZV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, ZV(VV)
    }

    function vV() {
      return vV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, vV.apply(this, arguments)
    }

    function rV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function kV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, tV(JV.key), JV)
      }
    }

    function bV(VV, eV, xV) {
      return eV = BV(eV),
        function(VV, eV) {
          if (eV && ("object" === ZV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, EV() ? Reflect.construct(eV, xV || [], BV(VV).constructor) : eV.apply(VV, xV))
    }

    function EV() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (EV = function() {
        return !!VV
      })()
    }

    function BV(VV) {
      return BV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, BV(VV)
    }

    function jV(VV, eV) {
      return jV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, jV(VV, eV)
    }

    function qV(VV, eV, xV) {
      return (eV = tV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function tV(VV) {
      var eV = function(VV, eV) {
        if ("object" != ZV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != ZV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == ZV(eV) ? eV : eV + ""
    }
    var FV = 32,
      TV = function(VV) {
        function eV() {
          return function(VV, eV) {
            if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
          }(this, eV), bV(this, eV, arguments)
        }
        return function(VV, eV) {
          if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
          VV.prototype = Object.create(eV && eV.prototype, {
            constructor: {
              value: VV,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(VV, "prototype", {
            writable: !1
          }), eV && jV(VV, eV)
        }(eV, VV), xV = eV, YV = [{
          key: "renderIcon",
          value: function(VV) {
            var eV = this.props.inactiveColor,
              xV = 16,
              YV = FV / 6,
              UV = FV / 3,
              yV = VV.inactive ? eV : VV.color;
            if ("plainline" === VV.type) return JV.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: yV,
              strokeDasharray: VV.payload.strokeDasharray,
              x1: 0,
              y1: xV,
              x2: FV,
              y2: xV,
              className: "recharts-legend-icon"
            });
            if ("line" === VV.type) return JV.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: yV,
              d: "M0,".concat(xV, "h").concat(UV, "\n            A").concat(YV, ",").concat(YV, ",0,1,1,").concat(2 * UV, ",").concat(xV, "\n            H").concat(FV, "M").concat(2 * UV, ",").concat(xV, "\n            A").concat(YV, ",").concat(YV, ",0,1,1,").concat(UV, ",").concat(xV),
              className: "recharts-legend-icon"
            });
            if ("rect" === VV.type) return JV.createElement("path", {
              stroke: "none",
              fill: yV,
              d: "M0,".concat(4, "h").concat(FV, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (JV.isValidElement(VV.legendIcon)) {
              var pV = function(VV) {
                for (var eV = 1; eV < arguments.length; eV++) {
                  var xV = null != arguments[eV] ? arguments[eV] : {};
                  eV % 2 ? rV(Object(xV), !0).forEach((function(eV) {
                    qV(VV, eV, xV[eV])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : rV(Object(xV)).forEach((function(eV) {
                    Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
                  }))
                }
                return VV
              }({}, VV);
              return delete pV.legendIcon, JV.cloneElement(VV.legendIcon, pV)
            }
            return JV.createElement(nV.b, {
              fill: yV,
              cx: xV,
              cy: xV,
              size: FV,
              sizeType: "diameter",
              type: VV.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var VV = this,
              eV = this.props,
              xV = eV.payload,
              YV = eV.iconSize,
              nV = eV.layout,
              ZV = eV.formatter,
              rV = eV.inactiveColor,
              kV = {
                x: 0,
                y: 0,
                width: FV,
                height: FV
              },
              bV = {
                display: "horizontal" === nV ? "inline-block" : "block",
                marginRight: 10
              },
              EV = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return xV.map((function(eV, xV) {
              var nV = eV.formatter || ZV,
                BV = (0, yV.c)(qV(qV({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(xV), !0), "inactive", eV.inactive));
              if ("none" === eV.type) return null;
              var jV = UV()(eV.value) ? null : eV.value;
              (0, pV.c)(!UV()(eV.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var tV = eV.inactive ? rV : eV.color;
              return JV.createElement("li", vV({
                className: BV,
                style: bV,
                key: "legend-item-".concat(xV)
              }, (0, wV.l)(VV.props, eV, xV)), JV.createElement(QV.c, {
                width: YV,
                height: YV,
                viewBox: kV,
                style: EV
              }, VV.renderIcon(eV)), JV.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: tV
                }
              }, nV ? nV(jV, eV, xV) : jV))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var VV = this.props,
              eV = VV.payload,
              xV = VV.layout,
              YV = VV.align;
            if (!eV || !eV.length) return null;
            var UV = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === xV ? YV : "left"
            };
            return JV.createElement("ul", {
              className: "recharts-default-legend",
              style: UV
            }, this.renderItems())
          }
        }], YV && kV(xV.prototype, YV), ZV && kV(xV, ZV), Object.defineProperty(xV, "prototype", {
          writable: !1
        }), xV;
        var xV, YV, ZV
      }(JV.PureComponent);
    qV(TV, "displayName", "Legend"), qV(TV, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var PV = xV(5713),
      AV = xV(6537);

    function NV(VV) {
      return NV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, NV(VV)
    }
    var XV = ["ref"];

    function MV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function zV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? MV(Object(xV), !0).forEach((function(eV) {
          iV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : MV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function GV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, CV(JV.key), JV)
      }
    }

    function WV(VV, eV, xV) {
      return eV = gV(eV),
        function(VV, eV) {
          if (eV && ("object" === NV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, RV() ? Reflect.construct(eV, xV || [], gV(VV).constructor) : eV.apply(VV, xV))
    }

    function RV() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (RV = function() {
        return !!VV
      })()
    }

    function gV(VV) {
      return gV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, gV(VV)
    }

    function DV(VV, eV) {
      return DV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, DV(VV, eV)
    }

    function iV(VV, eV, xV) {
      return (eV = CV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function CV(VV) {
      var eV = function(VV, eV) {
        if ("object" != NV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != NV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == NV(eV) ? eV : eV + ""
    }

    function aV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function oV(VV) {
      return VV.value
    }
    var cV = function(VV) {
      function eV() {
        var VV;
        ! function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, eV);
        for (var xV = arguments.length, JV = new Array(xV), YV = 0; YV < xV; YV++) JV[YV] = arguments[YV];
        return iV(VV = WV(this, eV, [].concat(JV)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), VV
      }
      return function(VV, eV) {
        if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
        VV.prototype = Object.create(eV && eV.prototype, {
          constructor: {
            value: VV,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(VV, "prototype", {
          writable: !1
        }), eV && DV(VV, eV)
      }(eV, VV), xV = eV, UV = [{
        key: "getWithHeight",
        value: function(VV, eV) {
          var xV = zV(zV({}, this.defaultProps), VV.props).layout;
          return "vertical" === xV && (0, PV.A)(VV.props.height) ? {
            height: VV.props.height
          } : "horizontal" === xV ? {
            width: VV.props.width || eV
          } : null
        }
      }], (YV = [{
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
            var VV = this.wrapperNode.getBoundingClientRect();
            return VV.height = this.wrapperNode.offsetHeight, VV.width = this.wrapperNode.offsetWidth, VV
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var VV = this.props.onBBoxUpdate,
            eV = this.getBBox();
          eV ? (Math.abs(eV.width - this.lastBoundingBox.width) > 1 || Math.abs(eV.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = eV.width, this.lastBoundingBox.height = eV.height, VV && VV(eV)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, VV && VV(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? zV({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(VV) {
          var eV, xV, JV = this.props,
            YV = JV.layout,
            UV = JV.align,
            yV = JV.verticalAlign,
            pV = JV.margin,
            QV = JV.chartWidth,
            nV = JV.chartHeight;
          return VV && (void 0 !== VV.left && null !== VV.left || void 0 !== VV.right && null !== VV.right) || (eV = "center" === UV && "vertical" === YV ? {
            left: ((QV || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === UV ? {
            right: pV && pV.right || 0
          } : {
            left: pV && pV.left || 0
          }), VV && (void 0 !== VV.top && null !== VV.top || void 0 !== VV.bottom && null !== VV.bottom) || (xV = "middle" === yV ? {
            top: ((nV || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === yV ? {
            bottom: pV && pV.bottom || 0
          } : {
            top: pV && pV.top || 0
          }), zV(zV({}, eV), xV)
        }
      }, {
        key: "render",
        value: function() {
          var VV = this,
            eV = this.props,
            xV = eV.content,
            YV = eV.width,
            UV = eV.height,
            yV = eV.wrapperStyle,
            pV = eV.payloadUniqBy,
            QV = eV.payload,
            nV = zV(zV({
              position: "absolute",
              width: YV || "auto",
              height: UV || "auto"
            }, this.getDefaultPosition(yV)), yV);
          return JV.createElement("div", {
            className: "recharts-legend-wrapper",
            style: nV,
            ref: function(eV) {
              VV.wrapperNode = eV
            }
          }, function(VV, eV) {
            if (JV.isValidElement(VV)) return JV.cloneElement(VV, eV);
            if ("function" === typeof VV) return JV.createElement(VV, eV);
            eV.ref;
            var xV = aV(eV, XV);
            return JV.createElement(TV, xV)
          }(xV, zV(zV({}, this.props), {}, {
            payload: (0, AV.e)(QV, pV, oV)
          })))
        }
      }]) && GV(xV.prototype, YV), UV && GV(xV, UV), Object.defineProperty(xV, "prototype", {
        writable: !1
      }), xV;
      var xV, YV, UV
    }(JV.PureComponent);
    iV(cV, "displayName", "Legend"), iV(cV, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  5603: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => EV
    });
    var JV = xV(5609),
      YV = xV(62),
      UV = xV(5614),
      yV = xV.n(UV),
      pV = xV(5713),
      QV = xV(5982),
      nV = xV(5990);

    function wV(VV) {
      return wV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, wV(VV)
    }

    function ZV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function vV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? ZV(Object(xV), !0).forEach((function(eV) {
          rV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : ZV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function rV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != wV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != wV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == wV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function kV(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        var xV = null == VV ? null : "undefined" != typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
        if (null != xV) {
          var JV, YV, UV, yV, pV = [],
            QV = !0,
            nV = !1;
          try {
            if (UV = (xV = xV.call(VV)).next, 0 === eV) {
              if (Object(xV) !== xV) return;
              QV = !1
            } else
              for (; !(QV = (JV = UV.call(xV)).done) && (pV.push(JV.value), pV.length !== eV); QV = !0);
          } catch (VV) {
            nV = !0, YV = VV
          } finally {
            try {
              if (!QV && null != xV.return && (yV = xV.return(), Object(yV) !== yV)) return
            } finally {
              if (nV) throw YV
            }
          }
          return pV
        }
      }(VV, eV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return bV(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return bV(VV, eV)
      }(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }
    var EV = (0, YV.forwardRef)((function(VV, eV) {
      var xV = VV.aspect,
        UV = VV.initialDimension,
        wV = void 0 === UV ? {
          width: -1,
          height: -1
        } : UV,
        ZV = VV.width,
        rV = void 0 === ZV ? "100%" : ZV,
        bV = VV.height,
        EV = void 0 === bV ? "100%" : bV,
        BV = VV.minWidth,
        jV = void 0 === BV ? 0 : BV,
        qV = VV.minHeight,
        tV = VV.maxHeight,
        FV = VV.children,
        TV = VV.debounce,
        PV = void 0 === TV ? 0 : TV,
        AV = VV.id,
        NV = VV.className,
        XV = VV.hq,
        MV = VV.style,
        zV = void 0 === MV ? {} : MV,
        GV = (0, YV.useRef)(null),
        WV = (0, YV.useRef)();
      WV.current = XV, (0, YV.useImperativeHandle)(eV, (function() {
        return Object.defineProperty(GV.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), GV.current
          },
          configurable: !0
        })
      }));
      var RV = kV((0, YV.useState)({
          containerWidth: wV.width,
          containerHeight: wV.height
        }), 2),
        gV = RV[0],
        DV = RV[1],
        iV = (0, YV.useCallback)((function(VV, eV) {
          DV((function(xV) {
            var JV = Math.round(VV),
              YV = Math.round(eV);
            return xV.containerWidth === JV && xV.containerHeight === YV ? xV : {
              containerWidth: JV,
              containerHeight: YV
            }
          }))
        }), []);
      (0, YV.useEffect)((function() {
        var VV = function(VV) {
          var eV, xV = VV[0].contentRect,
            JV = xV.width,
            YV = xV.height;
          iV(JV, YV), null === (eV = WV.current) || void 0 === eV || eV.call(WV, JV, YV)
        };
        PV > 0 && (VV = yV()(VV, PV, {
          trailing: !0,
          leading: !1
        }));
        var eV = new ResizeObserver(VV),
          xV = GV.current.getBoundingClientRect(),
          JV = xV.width,
          YV = xV.height;
        return iV(JV, YV), eV.observe(GV.current),
          function() {
            eV.disconnect()
          }
      }), [iV, PV]);
      var CV = (0, YV.useMemo)((function() {
        var VV = gV.containerWidth,
          eV = gV.containerHeight;
        if (VV < 0 || eV < 0) return null;
        (0, QV.c)((0, pV.C)(rV) || (0, pV.C)(EV), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", rV, EV), (0, QV.c)(!xV || xV > 0, "The aspect(%s) must be greater than zero.", xV);
        var JV = (0, pV.C)(rV) ? VV : rV,
          UV = (0, pV.C)(EV) ? eV : EV;
        xV && xV > 0 && (JV ? UV = JV / xV : UV && (JV = UV * xV), tV && UV > tV && (UV = tV)), (0, QV.c)(JV > 0 || UV > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", JV, UV, rV, EV, jV, qV, xV);
        var yV = !Array.isArray(FV) && (0, nV.n)(FV.type).endsWith("Chart");
        return YV.Children.map(FV, (function(VV) {
          return YV.isValidElement(VV) ? (0, YV.cloneElement)(VV, vV({
            width: JV,
            height: UV
          }, yV ? {
            style: vV({
              height: "100%",
              width: "100%",
              maxHeight: UV,
              maxWidth: JV
            }, VV.props.style)
          } : {})) : VV
        }))
      }), [xV, FV, EV, tV, qV, jV, gV, rV]);
      return YV.createElement("div", {
        id: AV ? "".concat(AV) : void 0,
        className: (0, JV.c)("recharts-responsive-container", NV),
        style: vV(vV({}, zV), {}, {
          width: rV,
          height: EV,
          minWidth: jV,
          minHeight: qV,
          maxHeight: tV
        }),
        ref: GV
      }, CV)
    }))
  },
  6680: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => hV
    });
    var JV = xV(62),
      YV = xV(5974),
      UV = xV.n(YV),
      yV = xV(5609),
      pV = xV(5713),
      QV = xV(6531),
      nV = xV(5990),
      wV = xV(6687);

    function ZV(VV) {
      return ZV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, ZV(VV)
    }

    function vV(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        var xV = null == VV ? null : "undefined" != typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
        if (null != xV) {
          var JV, YV, UV, yV, pV = [],
            QV = !0,
            nV = !1;
          try {
            if (UV = (xV = xV.call(VV)).next, 0 === eV) {
              if (Object(xV) !== xV) return;
              QV = !1
            } else
              for (; !(QV = (JV = UV.call(xV)).done) && (pV.push(JV.value), pV.length !== eV); QV = !0);
          } catch (VV) {
            nV = !0, YV = VV
          } finally {
            try {
              if (!QV && null != xV.return && (yV = xV.return(), Object(yV) !== yV)) return
            } finally {
              if (nV) throw YV
            }
          }
          return pV
        }
      }(VV, eV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return rV(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return rV(VV, eV)
      }(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function kV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, bV(JV.key), JV)
      }
    }

    function bV(VV) {
      var eV = function(VV, eV) {
        if ("object" != ZV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != ZV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == ZV(eV) ? eV : eV + ""
    }
    var EV = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      BV = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      jV = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      qV = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      tV = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      FV = Object.keys(tV),
      TV = "NaN";
    var PV = function() {
      function VV(eV, xV) {
        ! function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, VV), this.num = eV, this.unit = xV, this.num = eV, this.unit = xV, Number.isNaN(eV) && (this.unit = ""), "" === xV || jV.test(xV) || (this.num = NaN, this.unit = ""), FV.includes(xV) && (this.num = function(VV, eV) {
          return VV * tV[eV]
        }(eV, xV), this.unit = "px")
      }
      return eV = VV, JV = [{
        key: "parse",
        value: function(eV) {
          var xV, JV = vV(null !== (xV = qV.exec(eV)) && void 0 !== xV ? xV : [], 3),
            YV = JV[1],
            UV = JV[2];
          return new VV(parseFloat(YV), null !== UV && void 0 !== UV ? UV : "")
        }
      }], (xV = [{
        key: "add",
        value: function(eV) {
          return this.unit !== eV.unit ? new VV(NaN, "") : new VV(this.num + eV.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(eV) {
          return this.unit !== eV.unit ? new VV(NaN, "") : new VV(this.num - eV.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(eV) {
          return "" !== this.unit && "" !== eV.unit && this.unit !== eV.unit ? new VV(NaN, "") : new VV(this.num * eV.num, this.unit || eV.unit)
        }
      }, {
        key: "divide",
        value: function(eV) {
          return "" !== this.unit && "" !== eV.unit && this.unit !== eV.unit ? new VV(NaN, "") : new VV(this.num / eV.num, this.unit || eV.unit)
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
      }]) && kV(eV.prototype, xV), JV && kV(eV, JV), Object.defineProperty(eV, "prototype", {
        writable: !1
      }), eV;
      var eV, xV, JV
    }();

    function AV(VV) {
      if (VV.includes(TV)) return TV;
      for (var eV = VV; eV.includes("*") || eV.includes("/");) {
        var xV, JV = vV(null !== (xV = EV.exec(eV)) && void 0 !== xV ? xV : [], 4),
          YV = JV[1],
          UV = JV[2],
          yV = JV[3],
          pV = PV.parse(null !== YV && void 0 !== YV ? YV : ""),
          QV = PV.parse(null !== yV && void 0 !== yV ? yV : ""),
          nV = "*" === UV ? pV.multiply(QV) : pV.divide(QV);
        if (nV.isNaN()) return TV;
        eV = eV.replace(EV, nV.toString())
      }
      for (; eV.includes("+") || /.-\d+(?:\.\d+)?/.test(eV);) {
        var wV, ZV = vV(null !== (wV = BV.exec(eV)) && void 0 !== wV ? wV : [], 4),
          rV = ZV[1],
          kV = ZV[2],
          bV = ZV[3],
          jV = PV.parse(null !== rV && void 0 !== rV ? rV : ""),
          qV = PV.parse(null !== bV && void 0 !== bV ? bV : ""),
          tV = "+" === kV ? jV.add(qV) : jV.subtract(qV);
        if (tV.isNaN()) return TV;
        eV = eV.replace(BV, tV.toString())
      }
      return eV
    }
    var NV = /\(([^()]*)\)/;

    function XV(VV) {
      var eV = VV.replace(/\s+/g, "");
      return eV = function(VV) {
        for (var eV = VV; eV.includes("(");) {
          var xV = vV(NV.exec(eV), 2)[1];
          eV = eV.replace(NV, AV(xV))
        }
        return eV
      }(eV), eV = AV(eV)
    }

    function MV(VV) {
      var eV = function(VV) {
        try {
          return XV(VV)
        } catch (eV) {
          return TV
        }
      }(VV.slice(5, -1));
      return eV === TV ? "" : eV
    }
    var zV = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      GV = ["dx", "dy", "angle", "className", "breakAll"];

    function WV() {
      return WV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, WV.apply(this, arguments)
    }

    function RV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function gV(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        var xV = null == VV ? null : "undefined" != typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
        if (null != xV) {
          var JV, YV, UV, yV, pV = [],
            QV = !0,
            nV = !1;
          try {
            if (UV = (xV = xV.call(VV)).next, 0 === eV) {
              if (Object(xV) !== xV) return;
              QV = !1
            } else
              for (; !(QV = (JV = UV.call(xV)).done) && (pV.push(JV.value), pV.length !== eV); QV = !0);
          } catch (VV) {
            nV = !0, YV = VV
          } finally {
            try {
              if (!QV && null != xV.return && (yV = xV.return(), Object(yV) !== yV)) return
            } finally {
              if (nV) throw YV
            }
          }
          return pV
        }
      }(VV, eV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return DV(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return DV(VV, eV)
      }(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function DV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }
    var iV = /[ \f\n\r\t\v\u2028\u2029]+/,
      CV = function(VV) {
        var eV = VV.children,
          xV = VV.breakAll,
          JV = VV.style;
        try {
          var YV = [];
          return UV()(eV) || (YV = xV ? eV.toString().split("") : eV.toString().split(iV)), {
            wordsWithComputedWidth: YV.map((function(VV) {
              return {
                word: VV,
                width: (0, wV.h)(VV, JV).width
              }
            })),
            spaceWidth: xV ? 0 : (0, wV.h)("\xa0", JV).width
          }
        } catch (yV) {
          return null
        }
      },
      aV = function(VV) {
        return [{
          words: UV()(VV) ? [] : VV.toString().split(iV)
        }]
      },
      oV = function(VV) {
        var eV = VV.width,
          xV = VV.scaleToFit,
          JV = VV.children,
          YV = VV.style,
          UV = VV.breakAll,
          yV = VV.maxLines;
        if ((eV || xV) && !QV.e.isSsr) {
          var nV = CV({
            breakAll: UV,
            children: JV,
            style: YV
          });
          return nV ? function(VV, eV, xV, JV, YV) {
            var UV = VV.maxLines,
              yV = VV.children,
              QV = VV.style,
              nV = VV.breakAll,
              wV = (0, pV.A)(UV),
              ZV = yV,
              vV = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(VV, eV) {
                  var UV = eV.word,
                    yV = eV.width,
                    pV = VV[VV.length - 1];
                  if (pV && (null == JV || YV || pV.width + yV + xV < Number(JV))) pV.words.push(UV), pV.width += yV + xV;
                  else {
                    var QV = {
                      words: [UV],
                      width: yV
                    };
                    VV.push(QV)
                  }
                  return VV
                }), [])
              },
              rV = vV(eV);
            if (!wV) return rV;
            for (var kV, bV = function(VV) {
                var eV = ZV.slice(0, VV),
                  xV = CV({
                    breakAll: nV,
                    style: QV,
                    children: eV + "\u2026"
                  }).wordsWithComputedWidth,
                  YV = vV(xV),
                  yV = YV.length > UV || function(VV) {
                    return VV.reduce((function(VV, eV) {
                      return VV.width > eV.width ? VV : eV
                    }))
                  }(YV).width > Number(JV);
                return [yV, YV]
              }, EV = 0, BV = ZV.length - 1, jV = 0; EV <= BV && jV <= ZV.length - 1;) {
              var qV = Math.floor((EV + BV) / 2),
                tV = gV(bV(qV - 1), 2),
                FV = tV[0],
                TV = tV[1],
                PV = gV(bV(qV), 1)[0];
              if (FV || PV || (EV = qV + 1), FV && PV && (BV = qV - 1), !FV && PV) {
                kV = TV;
                break
              }
              jV++
            }
            return kV || rV
          }({
            breakAll: UV,
            children: JV,
            maxLines: yV,
            style: YV
          }, nV.wordsWithComputedWidth, nV.spaceWidth, eV, xV) : aV(JV)
        }
        return aV(JV)
      },
      cV = "#808080",
      hV = function(VV) {
        var eV = VV.x,
          xV = void 0 === eV ? 0 : eV,
          YV = VV.y,
          UV = void 0 === YV ? 0 : YV,
          QV = VV.lineHeight,
          wV = void 0 === QV ? "1em" : QV,
          ZV = VV.capHeight,
          vV = void 0 === ZV ? "0.71em" : ZV,
          rV = VV.scaleToFit,
          kV = void 0 !== rV && rV,
          bV = VV.textAnchor,
          EV = void 0 === bV ? "start" : bV,
          BV = VV.verticalAnchor,
          jV = void 0 === BV ? "end" : BV,
          qV = VV.fill,
          tV = void 0 === qV ? cV : qV,
          FV = RV(VV, zV),
          TV = (0, JV.useMemo)((function() {
            return oV({
              breakAll: FV.breakAll,
              children: FV.children,
              maxLines: FV.maxLines,
              scaleToFit: kV,
              style: FV.style,
              width: FV.width
            })
          }), [FV.breakAll, FV.children, FV.maxLines, kV, FV.style, FV.width]),
          PV = FV.dx,
          AV = FV.dy,
          NV = FV.angle,
          XV = FV.className,
          gV = FV.breakAll,
          DV = RV(FV, GV);
        if (!(0, pV.w)(xV) || !(0, pV.w)(UV)) return null;
        var iV, CV = xV + ((0, pV.A)(PV) ? PV : 0),
          aV = UV + ((0, pV.A)(AV) ? AV : 0);
        switch (jV) {
          case "start":
            iV = MV("calc(".concat(vV, ")"));
            break;
          case "middle":
            iV = MV("calc(".concat((TV.length - 1) / 2, " * -").concat(wV, " + (").concat(vV, " / 2))"));
            break;
          default:
            iV = MV("calc(".concat(TV.length - 1, " * -").concat(wV, ")"))
        }
        var hV = [];
        if (kV) {
          var lV = TV[0].width,
            LV = FV.width;
          hV.push("scale(".concat(((0, pV.A)(LV) ? LV / lV : 1) / lV, ")"))
        }
        return NV && hV.push("rotate(".concat(NV, ", ").concat(CV, ", ").concat(aV, ")")), hV.length && (DV.transform = hV.join(" ")), JV.createElement("text", WV({}, (0, nV.c)(DV, !0), {
          x: CV,
          y: aV,
          className: (0, yV.c)("recharts-text", XV),
          textAnchor: EV,
          fill: tV.includes("url") ? cV : tV
        }), TV.map((function(VV, eV) {
          var xV = VV.words.join(gV ? "" : " ");
          return JV.createElement("tspan", {
            x: CV,
            dy: 0 === eV ? iV : wV,
            key: "".concat(xV, "-").concat(eV)
          }, xV)
        })))
      }
  },
  6524: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => IV
    });
    var JV = xV(62),
      YV = xV(6082),
      UV = xV.n(YV),
      yV = xV(5974),
      pV = xV.n(yV),
      QV = xV(5609),
      nV = xV(5713);

    function wV(VV) {
      return wV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, wV(VV)
    }

    function ZV() {
      return ZV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, ZV.apply(this, arguments)
    }

    function vV(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        var xV = null == VV ? null : "undefined" != typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
        if (null != xV) {
          var JV, YV, UV, yV, pV = [],
            QV = !0,
            nV = !1;
          try {
            if (UV = (xV = xV.call(VV)).next, 0 === eV) {
              if (Object(xV) !== xV) return;
              QV = !1
            } else
              for (; !(QV = (JV = UV.call(xV)).done) && (pV.push(JV.value), pV.length !== eV); QV = !0);
          } catch (VV) {
            nV = !0, YV = VV
          } finally {
            try {
              if (!QV && null != xV.return && (yV = xV.return(), Object(yV) !== yV)) return
            } finally {
              if (nV) throw YV
            }
          }
          return pV
        }
      }(VV, eV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return rV(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return rV(VV, eV)
      }(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function kV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function bV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? kV(Object(xV), !0).forEach((function(eV) {
          EV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : kV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function EV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != wV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != wV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == wV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function BV(VV) {
      return Array.isArray(VV) && (0, nV.w)(VV[0]) && (0, nV.w)(VV[1]) ? VV.join(" ~ ") : VV
    }
    var jV = function(VV) {
      var eV = VV.separator,
        xV = void 0 === eV ? " : " : eV,
        YV = VV.contentStyle,
        yV = void 0 === YV ? {} : YV,
        wV = VV.itemStyle,
        rV = void 0 === wV ? {} : wV,
        kV = VV.labelStyle,
        EV = void 0 === kV ? {} : kV,
        jV = VV.payload,
        qV = VV.formatter,
        tV = VV.itemSorter,
        FV = VV.wrapperClassName,
        TV = VV.labelClassName,
        PV = VV.label,
        AV = VV.labelFormatter,
        NV = VV.accessibilityLayer,
        XV = void 0 !== NV && NV,
        MV = bV({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, yV),
        zV = bV({
          margin: 0
        }, EV),
        GV = !pV()(PV),
        WV = GV ? PV : "",
        RV = (0, QV.c)("recharts-default-tooltip", FV),
        gV = (0, QV.c)("recharts-tooltip-label", TV);
      GV && AV && void 0 !== jV && null !== jV && (WV = AV(PV, jV));
      var DV = XV ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return JV.createElement("div", ZV({
        className: RV,
        style: MV
      }, DV), JV.createElement("p", {
        className: gV,
        style: zV
      }, JV.isValidElement(WV) ? WV : "".concat(WV)), function() {
        if (jV && jV.length) {
          var VV = (tV ? UV()(jV, tV) : jV).map((function(VV, eV) {
            if ("none" === VV.type) return null;
            var YV = bV({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: VV.color || "#000"
              }, rV),
              UV = VV.formatter || qV || BV,
              yV = VV.value,
              pV = VV.name,
              QV = yV,
              wV = pV;
            if (UV && null != QV && null != wV) {
              var ZV = UV(yV, pV, VV, eV, jV);
              if (Array.isArray(ZV)) {
                var kV = vV(ZV, 2);
                QV = kV[0], wV = kV[1]
              } else QV = ZV
            }
            return JV.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(eV),
              style: YV
            }, (0, nV.w)(wV) ? JV.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, wV) : null, (0, nV.w)(wV) ? JV.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, xV) : null, JV.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, QV), JV.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, VV.unit || ""))
          }));
          return JV.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, VV)
        }
        return null
      }())
    };

    function qV(VV) {
      return qV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, qV(VV)
    }

    function tV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != qV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != qV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == qV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }
    var FV = "recharts-tooltip-wrapper",
      TV = {
        visibility: "hidden"
      };

    function PV(VV) {
      var eV = VV.coordinate,
        xV = VV.translateX,
        JV = VV.translateY;
      return (0, QV.c)(FV, tV(tV(tV(tV({}, "".concat(FV, "-right"), (0, nV.A)(xV) && eV && (0, nV.A)(eV.x) && xV >= eV.x), "".concat(FV, "-left"), (0, nV.A)(xV) && eV && (0, nV.A)(eV.x) && xV < eV.x), "".concat(FV, "-bottom"), (0, nV.A)(JV) && eV && (0, nV.A)(eV.y) && JV >= eV.y), "".concat(FV, "-top"), (0, nV.A)(JV) && eV && (0, nV.A)(eV.y) && JV < eV.y))
    }

    function AV(VV) {
      var eV = VV.allowEscapeViewBox,
        xV = VV.coordinate,
        JV = VV.key,
        YV = VV.offsetTopLeft,
        UV = VV.position,
        yV = VV.reverseDirection,
        pV = VV.tooltipDimension,
        QV = VV.viewBox,
        wV = VV.viewBoxDimension;
      if (UV && (0, nV.A)(UV[JV])) return UV[JV];
      var ZV = xV[JV] - pV - YV,
        vV = xV[JV] + YV;
      return eV[JV] ? yV[JV] ? ZV : vV : yV[JV] ? ZV < QV[JV] ? Math.max(vV, QV[JV]) : Math.max(ZV, QV[JV]) : vV + pV > QV[JV] + wV ? Math.max(ZV, QV[JV]) : Math.max(vV, QV[JV])
    }

    function NV(VV) {
      return NV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, NV(VV)
    }

    function XV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function MV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? XV(Object(xV), !0).forEach((function(eV) {
          DV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : XV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function zV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, iV(JV.key), JV)
      }
    }

    function GV(VV, eV, xV) {
      return eV = RV(eV),
        function(VV, eV) {
          if (eV && ("object" === NV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, WV() ? Reflect.construct(eV, xV || [], RV(VV).constructor) : eV.apply(VV, xV))
    }

    function WV() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (WV = function() {
        return !!VV
      })()
    }

    function RV(VV) {
      return RV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, RV(VV)
    }

    function gV(VV, eV) {
      return gV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, gV(VV, eV)
    }

    function DV(VV, eV, xV) {
      return (eV = iV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function iV(VV) {
      var eV = function(VV, eV) {
        if ("object" != NV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != NV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == NV(eV) ? eV : eV + ""
    }
    var CV = function(VV) {
        function eV() {
          var VV;
          ! function(VV, eV) {
            if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
          }(this, eV);
          for (var xV = arguments.length, JV = new Array(xV), YV = 0; YV < xV; YV++) JV[YV] = arguments[YV];
          return DV(VV = GV(this, eV, [].concat(JV)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), DV(VV, "handleKeyDown", (function(eV) {
            var xV, JV, YV, UV;
            "Escape" === eV.key && VV.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (xV = null === (JV = VV.props.coordinate) || void 0 === JV ? void 0 : JV.x) && void 0 !== xV ? xV : 0,
                y: null !== (YV = null === (UV = VV.props.coordinate) || void 0 === UV ? void 0 : UV.y) && void 0 !== YV ? YV : 0
              }
            })
          })), VV
        }
        return function(VV, eV) {
          if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
          VV.prototype = Object.create(eV && eV.prototype, {
            constructor: {
              value: VV,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(VV, "prototype", {
            writable: !1
          }), eV && gV(VV, eV)
        }(eV, VV), xV = eV, (YV = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var VV = this.wrapperNode.getBoundingClientRect();
              (Math.abs(VV.width - this.state.lastBoundingBox.width) > 1 || Math.abs(VV.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: VV.width,
                  height: VV.height
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
            var VV, eV;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (VV = this.props.coordinate) || void 0 === VV ? void 0 : VV.x) === this.state.dismissedAtCoordinate.x && (null === (eV = this.props.coordinate) || void 0 === eV ? void 0 : eV.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var VV = this,
              eV = this.props,
              xV = eV.active,
              YV = eV.allowEscapeViewBox,
              UV = eV.animationDuration,
              yV = eV.animationEasing,
              pV = eV.children,
              QV = eV.coordinate,
              nV = eV.hasPayload,
              wV = eV.isAnimationActive,
              ZV = eV.offset,
              vV = eV.position,
              rV = eV.reverseDirection,
              kV = eV.useTranslate3d,
              bV = eV.viewBox,
              EV = eV.wrapperStyle,
              BV = function(VV) {
                var eV, xV, JV = VV.allowEscapeViewBox,
                  YV = VV.coordinate,
                  UV = VV.offsetTopLeft,
                  yV = VV.position,
                  pV = VV.reverseDirection,
                  QV = VV.tooltipBox,
                  nV = VV.useTranslate3d,
                  wV = VV.viewBox;
                return {
                  cssProperties: QV.height > 0 && QV.width > 0 && YV ? function(VV) {
                    var eV = VV.translateX,
                      xV = VV.translateY;
                    return {
                      transform: VV.useTranslate3d ? "translate3d(".concat(eV, "px, ").concat(xV, "px, 0)") : "translate(".concat(eV, "px, ").concat(xV, "px)")
                    }
                  }({
                    translateX: eV = AV({
                      allowEscapeViewBox: JV,
                      coordinate: YV,
                      key: "x",
                      offsetTopLeft: UV,
                      position: yV,
                      reverseDirection: pV,
                      tooltipDimension: QV.width,
                      viewBox: wV,
                      viewBoxDimension: wV.width
                    }),
                    translateY: xV = AV({
                      allowEscapeViewBox: JV,
                      coordinate: YV,
                      key: "y",
                      offsetTopLeft: UV,
                      position: yV,
                      reverseDirection: pV,
                      tooltipDimension: QV.height,
                      viewBox: wV,
                      viewBoxDimension: wV.height
                    }),
                    useTranslate3d: nV
                  }) : TV,
                  cssClasses: PV({
                    translateX: eV,
                    translateY: xV,
                    coordinate: YV
                  })
                }
              }({
                allowEscapeViewBox: YV,
                coordinate: QV,
                offsetTopLeft: ZV,
                position: vV,
                reverseDirection: rV,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: kV,
                viewBox: bV
              }),
              jV = BV.cssClasses,
              qV = BV.cssProperties,
              tV = MV(MV({
                transition: wV && xV ? "transform ".concat(UV, "ms ").concat(yV) : void 0
              }, qV), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && xV && nV ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, EV);
            return JV.createElement("div", {
              tabIndex: -1,
              className: jV,
              style: tV,
              ref: function(eV) {
                VV.wrapperNode = eV
              }
            }, pV)
          }
        }]) && zV(xV.prototype, YV), UV && zV(xV, UV), Object.defineProperty(xV, "prototype", {
          writable: !1
        }), xV;
        var xV, YV, UV
      }(JV.PureComponent),
      aV = xV(6531),
      oV = xV(6537);

    function cV(VV) {
      return cV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, cV(VV)
    }

    function hV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function lV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? hV(Object(xV), !0).forEach((function(eV) {
          uV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : hV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function LV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, sV(JV.key), JV)
      }
    }

    function fV(VV, eV, xV) {
      return eV = KV(eV),
        function(VV, eV) {
          if (eV && ("object" === cV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return function(VV) {
            if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return VV
          }(VV)
        }(VV, mV() ? Reflect.construct(eV, xV || [], KV(VV).constructor) : eV.apply(VV, xV))
    }

    function mV() {
      try {
        var VV = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (VV) {}
      return (mV = function() {
        return !!VV
      })()
    }

    function KV(VV) {
      return KV = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, KV(VV)
    }

    function HV(VV, eV) {
      return HV = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, HV(VV, eV)
    }

    function uV(VV, eV, xV) {
      return (eV = sV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function sV(VV) {
      var eV = function(VV, eV) {
        if ("object" != cV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != cV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == cV(eV) ? eV : eV + ""
    }

    function SV(VV) {
      return VV.dataKey
    }
    var IV = function(VV) {
      function eV() {
        return function(VV, eV) {
          if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
        }(this, eV), fV(this, eV, arguments)
      }
      return function(VV, eV) {
        if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
        VV.prototype = Object.create(eV && eV.prototype, {
          constructor: {
            value: VV,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(VV, "prototype", {
          writable: !1
        }), eV && HV(VV, eV)
      }(eV, VV), xV = eV, (YV = [{
        key: "render",
        value: function() {
          var VV = this,
            eV = this.props,
            xV = eV.active,
            YV = eV.allowEscapeViewBox,
            UV = eV.animationDuration,
            yV = eV.animationEasing,
            pV = eV.content,
            QV = eV.coordinate,
            nV = eV.filterNull,
            wV = eV.isAnimationActive,
            ZV = eV.offset,
            vV = eV.payload,
            rV = eV.payloadUniqBy,
            kV = eV.position,
            bV = eV.reverseDirection,
            EV = eV.useTranslate3d,
            BV = eV.viewBox,
            qV = eV.wrapperStyle,
            tV = null !== vV && void 0 !== vV ? vV : [];
          nV && tV.length && (tV = (0, oV.e)(vV.filter((function(eV) {
            return null != eV.value && (!0 !== eV.hide || VV.props.includeHidden)
          })), rV, SV));
          var FV = tV.length > 0;
          return JV.createElement(CV, {
            allowEscapeViewBox: YV,
            animationDuration: UV,
            animationEasing: yV,
            isAnimationActive: wV,
            active: xV,
            coordinate: QV,
            hasPayload: FV,
            offset: ZV,
            position: kV,
            reverseDirection: bV,
            useTranslate3d: EV,
            viewBox: BV,
            wrapperStyle: qV
          }, function(VV, eV) {
            return JV.isValidElement(VV) ? JV.cloneElement(VV, eV) : "function" === typeof VV ? JV.createElement(VV, eV) : JV.createElement(jV, eV)
          }(pV, lV(lV({}, this.props), {}, {
            payload: tV
          })))
        }
      }]) && LV(xV.prototype, YV), UV && LV(xV, UV), Object.defineProperty(xV, "prototype", {
        writable: !1
      }), xV;
      var xV, YV, UV
    }(JV.PureComponent);
    uV(IV, "displayName", "Tooltip"), uV(IV, "defaultProps", {
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
      isAnimationActive: !aV.e.isSsr,
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
  6518: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => nV
    });
    var JV = xV(62),
      YV = xV(5609),
      UV = xV(5990),
      yV = ["children", "className"];

    function pV() {
      return pV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, pV.apply(this, arguments)
    }

    function QV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }
    var nV = JV.forwardRef((function(VV, eV) {
      var xV = VV.children,
        nV = VV.className,
        wV = QV(VV, yV),
        ZV = (0, YV.c)("recharts-layer", nV);
      return JV.createElement("g", pV({
        className: ZV
      }, (0, UV.c)(wV, !0), {
        ref: eV
      }), xV)
    }))
  },
  6511: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => nV
    });
    var JV = xV(62),
      YV = xV(5609),
      UV = xV(5990),
      yV = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function pV() {
      return pV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, pV.apply(this, arguments)
    }

    function QV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function nV(VV) {
      var eV = VV.children,
        xV = VV.width,
        nV = VV.height,
        wV = VV.viewBox,
        ZV = VV.className,
        vV = VV.style,
        rV = VV.title,
        kV = VV.desc,
        bV = QV(VV, yV),
        EV = wV || {
          width: xV,
          height: nV,
          x: 0,
          y: 0
        },
        BV = (0, YV.c)("recharts-surface", ZV);
      return JV.createElement("svg", pV({}, (0, UV.c)(bV, !0, "svg"), {
        className: BV,
        width: xV,
        height: nV,
        style: vV,
        viewBox: "".concat(EV.x, " ").concat(EV.y, " ").concat(EV.width, " ").concat(EV.height)
      }), JV.createElement("title", null, rV), JV.createElement("desc", null, kV), eV)
    }
  },
  6887: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => qV,
      e: () => TV,
      h: () => zV,
      j: () => MV,
      n: () => tV,
      p: () => XV,
      q: () => NV,
      r: () => FV,
      v: () => AV,
      x: () => PV
    });
    var JV = xV(62),
      YV = xV(6509),
      UV = xV(6891),
      yV = xV.n(UV),
      pV = xV(6813),
      QV = xV.n(pV),
      nV = xV(5792),
      wV = xV.n(nV)()((function(VV) {
        return {
          x: VV.left,
          y: VV.top,
          width: VV.width,
          height: VV.height
        }
      }), (function(VV) {
        return ["l", VV.left, "t", VV.top, "w", VV.width, "h", VV.height].join("")
      })),
      ZV = xV(5713);
    var vV = (0, JV.createContext)(void 0),
      rV = (0, JV.createContext)(void 0),
      kV = (0, JV.createContext)(void 0),
      bV = (0, JV.createContext)({}),
      EV = (0, JV.createContext)(void 0),
      BV = (0, JV.createContext)(0),
      jV = (0, JV.createContext)(0),
      qV = function(VV) {
        var eV = VV.state,
          xV = eV.xAxisMap,
          YV = eV.yAxisMap,
          UV = eV.offset,
          yV = VV.clipPathId,
          pV = VV.children,
          QV = VV.width,
          nV = VV.height,
          ZV = wV(UV);
        return JV.createElement(vV.Provider, {
          value: xV
        }, JV.createElement(rV.Provider, {
          value: YV
        }, JV.createElement(bV.Provider, {
          value: UV
        }, JV.createElement(kV.Provider, {
          value: ZV
        }, JV.createElement(EV.Provider, {
          value: yV
        }, JV.createElement(BV.Provider, {
          value: nV
        }, JV.createElement(jV.Provider, {
          value: QV
        }, pV)))))))
      },
      tV = function() {
        return (0, JV.useContext)(EV)
      };
    var FV = function(VV) {
        var eV = (0, JV.useContext)(vV);
        null == eV && (0, YV.e)(!1);
        var xV = eV[VV];
        return null == xV && (0, YV.e)(!1), xV
      },
      TV = function() {
        var VV = (0, JV.useContext)(vV);
        return (0, ZV.g)(VV)
      },
      PV = function() {
        var VV = (0, JV.useContext)(rV);
        return yV()(VV, (function(VV) {
          return QV()(VV.domain, Number.isFinite)
        })) || (0, ZV.g)(VV)
      },
      AV = function(VV) {
        var eV = (0, JV.useContext)(rV);
        null == eV && (0, YV.e)(!1);
        var xV = eV[VV];
        return null == xV && (0, YV.e)(!1), xV
      },
      NV = function() {
        return (0, JV.useContext)(kV)
      },
      XV = function() {
        return (0, JV.useContext)(bV)
      },
      MV = function() {
        return (0, JV.useContext)(jV)
      },
      zV = function() {
        return (0, JV.useContext)(BV)
      }
  },
  6922: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => SV
    });
    var JV = xV(62);

    function YV() {}

    function UV(VV, eV, xV) {
      VV._context.bezierCurveTo((2 * VV._x0 + VV._x1) / 3, (2 * VV._y0 + VV._y1) / 3, (VV._x0 + 2 * VV._x1) / 3, (VV._y0 + 2 * VV._y1) / 3, (VV._x0 + 4 * VV._x1 + eV) / 6, (VV._y0 + 4 * VV._y1 + xV) / 6)
    }

    function yV(VV) {
      this._context = VV
    }

    function pV(VV) {
      this._context = VV
    }

    function QV(VV) {
      this._context = VV
    }
    yV.prototype = {
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
            UV(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(VV, eV) {
        switch (VV = +VV, eV = +eV, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(VV, eV) : this._context.moveTo(VV, eV);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            UV(this, VV, eV)
        }
        this._x0 = this._x1, this._x1 = VV, this._y0 = this._y1, this._y1 = eV
      }
    }, pV.prototype = {
      areaStart: YV,
      areaEnd: YV,
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
      point: function(VV, eV) {
        switch (VV = +VV, eV = +eV, this._point) {
          case 0:
            this._point = 1, this._x2 = VV, this._y2 = eV;
            break;
          case 1:
            this._point = 2, this._x3 = VV, this._y3 = eV;
            break;
          case 2:
            this._point = 3, this._x4 = VV, this._y4 = eV, this._context.moveTo((this._x0 + 4 * this._x1 + VV) / 6, (this._y0 + 4 * this._y1 + eV) / 6);
            break;
          default:
            UV(this, VV, eV)
        }
        this._x0 = this._x1, this._x1 = VV, this._y0 = this._y1, this._y1 = eV
      }
    }, QV.prototype = {
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
      point: function(VV, eV) {
        switch (VV = +VV, eV = +eV, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var xV = (this._x0 + 4 * this._x1 + VV) / 6,
              JV = (this._y0 + 4 * this._y1 + eV) / 6;
            this._line ? this._context.lineTo(xV, JV) : this._context.moveTo(xV, JV);
            break;
          case 3:
            this._point = 4;
          default:
            UV(this, VV, eV)
        }
        this._x0 = this._x1, this._x1 = VV, this._y0 = this._y1, this._y1 = eV
      }
    };
    class nV {
      constructor(VV, eV) {
        this._context = VV, this._x = eV
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
      point(VV, eV) {
        switch (VV = +VV, eV = +eV, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(VV, eV) : this._context.moveTo(VV, eV);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + VV) / 2, this._y0, this._x0, eV, VV, eV) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + eV) / 2, VV, this._y0, VV, eV)
        }
        this._x0 = VV, this._y0 = eV
      }
    }

    function wV(VV) {
      this._context = VV
    }

    function ZV(VV) {
      this._context = VV
    }

    function vV(VV) {
      return new ZV(VV)
    }

    function rV(VV) {
      return VV < 0 ? -1 : 1
    }

    function kV(VV, eV, xV) {
      var JV = VV._x1 - VV._x0,
        YV = eV - VV._x1,
        UV = (VV._y1 - VV._y0) / (JV || YV < 0 && -0),
        yV = (xV - VV._y1) / (YV || JV < 0 && -0),
        pV = (UV * YV + yV * JV) / (JV + YV);
      return (rV(UV) + rV(yV)) * Math.min(Math.abs(UV), Math.abs(yV), .5 * Math.abs(pV)) || 0
    }

    function bV(VV, eV) {
      var xV = VV._x1 - VV._x0;
      return xV ? (3 * (VV._y1 - VV._y0) / xV - eV) / 2 : eV
    }

    function EV(VV, eV, xV) {
      var JV = VV._x0,
        YV = VV._y0,
        UV = VV._x1,
        yV = VV._y1,
        pV = (UV - JV) / 3;
      VV._context.bezierCurveTo(JV + pV, YV + pV * eV, UV - pV, yV - pV * xV, UV, yV)
    }

    function BV(VV) {
      this._context = VV
    }

    function jV(VV) {
      this._context = new qV(VV)
    }

    function qV(VV) {
      this._context = VV
    }

    function tV(VV) {
      this._context = VV
    }

    function FV(VV) {
      var eV, xV, JV = VV.length - 1,
        YV = new Array(JV),
        UV = new Array(JV),
        yV = new Array(JV);
      for (YV[0] = 0, UV[0] = 2, yV[0] = VV[0] + 2 * VV[1], eV = 1; eV < JV - 1; ++eV) YV[eV] = 1, UV[eV] = 4, yV[eV] = 4 * VV[eV] + 2 * VV[eV + 1];
      for (YV[JV - 1] = 2, UV[JV - 1] = 7, yV[JV - 1] = 8 * VV[JV - 1] + VV[JV], eV = 1; eV < JV; ++eV) xV = YV[eV] / UV[eV - 1], UV[eV] -= xV, yV[eV] -= xV * yV[eV - 1];
      for (YV[JV - 1] = yV[JV - 1] / UV[JV - 1], eV = JV - 2; eV >= 0; --eV) YV[eV] = (yV[eV] - YV[eV + 1]) / UV[eV];
      for (UV[JV - 1] = (VV[JV] + YV[JV - 1]) / 2, eV = 0; eV < JV - 1; ++eV) UV[eV] = 2 * VV[eV + 1] - YV[eV + 1];
      return [YV, UV]
    }

    function TV(VV, eV) {
      this._context = VV, this._t = eV
    }
    wV.prototype = {
      areaStart: YV,
      areaEnd: YV,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(VV, eV) {
        VV = +VV, eV = +eV, this._point ? this._context.lineTo(VV, eV) : (this._point = 1, this._context.moveTo(VV, eV))
      }
    }, ZV.prototype = {
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
      point: function(VV, eV) {
        switch (VV = +VV, eV = +eV, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(VV, eV) : this._context.moveTo(VV, eV);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(VV, eV)
        }
      }
    }, BV.prototype = {
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
            EV(this, this._t0, bV(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(VV, eV) {
        var xV = NaN;
        if (eV = +eV, (VV = +VV) !== this._x1 || eV !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(VV, eV) : this._context.moveTo(VV, eV);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, EV(this, bV(this, xV = kV(this, VV, eV)), xV);
              break;
            default:
              EV(this, this._t0, xV = kV(this, VV, eV))
          }
          this._x0 = this._x1, this._x1 = VV, this._y0 = this._y1, this._y1 = eV, this._t0 = xV
        }
      }
    }, (jV.prototype = Object.create(BV.prototype)).point = function(VV, eV) {
      BV.prototype.point.call(this, eV, VV)
    }, qV.prototype = {
      moveTo: function(VV, eV) {
        this._context.moveTo(eV, VV)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(VV, eV) {
        this._context.lineTo(eV, VV)
      },
      bezierCurveTo: function(VV, eV, xV, JV, YV, UV) {
        this._context.bezierCurveTo(eV, VV, JV, xV, UV, YV)
      }
    }, tV.prototype = {
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
        var VV = this._x,
          eV = this._y,
          xV = VV.length;
        if (xV)
          if (this._line ? this._context.lineTo(VV[0], eV[0]) : this._context.moveTo(VV[0], eV[0]), 2 === xV) this._context.lineTo(VV[1], eV[1]);
          else
            for (var JV = FV(VV), YV = FV(eV), UV = 0, yV = 1; yV < xV; ++UV, ++yV) this._context.bezierCurveTo(JV[0][UV], YV[0][UV], JV[1][UV], YV[1][UV], VV[yV], eV[yV]);
        (this._line || 0 !== this._line && 1 === xV) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(VV, eV) {
        this._x.push(+VV), this._y.push(+eV)
      }
    }, TV.prototype = {
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
      point: function(VV, eV) {
        switch (VV = +VV, eV = +eV, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(VV, eV) : this._context.moveTo(VV, eV);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, eV), this._context.lineTo(VV, eV);
            else {
              var xV = this._x * (1 - this._t) + VV * this._t;
              this._context.lineTo(xV, this._y), this._context.lineTo(xV, eV)
            }
        }
        this._x = VV, this._y = eV
      }
    };
    var PV = xV(6778),
      AV = xV(6656),
      NV = xV(6660);

    function XV(VV) {
      return VV[0]
    }

    function MV(VV) {
      return VV[1]
    }

    function zV(VV, eV) {
      var xV = (0, AV.c)(!0),
        JV = null,
        YV = vV,
        UV = null,
        yV = (0, NV.b)(pV);

      function pV(pV) {
        var QV, nV, wV, ZV = (pV = (0, PV.e)(pV)).length,
          vV = !1;
        for (null == JV && (UV = YV(wV = yV())), QV = 0; QV <= ZV; ++QV) !(QV < ZV && xV(nV = pV[QV], QV, pV)) === vV && ((vV = !vV) ? UV.lineStart() : UV.lineEnd()), vV && UV.point(+VV(nV, QV, pV), +eV(nV, QV, pV));
        if (wV) return UV = null, wV + "" || null
      }
      return VV = "function" === typeof VV ? VV : void 0 === VV ? XV : (0, AV.c)(VV), eV = "function" === typeof eV ? eV : void 0 === eV ? MV : (0, AV.c)(eV), pV.x = function(eV) {
        return arguments.length ? (VV = "function" === typeof eV ? eV : (0, AV.c)(+eV), pV) : VV
      }, pV.y = function(VV) {
        return arguments.length ? (eV = "function" === typeof VV ? VV : (0, AV.c)(+VV), pV) : eV
      }, pV.defined = function(VV) {
        return arguments.length ? (xV = "function" === typeof VV ? VV : (0, AV.c)(!!VV), pV) : xV
      }, pV.curve = function(VV) {
        return arguments.length ? (YV = VV, null != JV && (UV = YV(JV)), pV) : YV
      }, pV.context = function(VV) {
        return arguments.length ? (null == VV ? JV = UV = null : UV = YV(JV = VV), pV) : JV
      }, pV
    }

    function GV(VV, eV, xV) {
      var JV = null,
        YV = (0, AV.c)(!0),
        UV = null,
        yV = vV,
        pV = null,
        QV = (0, NV.b)(nV);

      function nV(nV) {
        var wV, ZV, vV, rV, kV, bV = (nV = (0, PV.e)(nV)).length,
          EV = !1,
          BV = new Array(bV),
          jV = new Array(bV);
        for (null == UV && (pV = yV(kV = QV())), wV = 0; wV <= bV; ++wV) {
          if (!(wV < bV && YV(rV = nV[wV], wV, nV)) === EV)
            if (EV = !EV) ZV = wV, pV.areaStart(), pV.lineStart();
            else {
              for (pV.lineEnd(), pV.lineStart(), vV = wV - 1; vV >= ZV; --vV) pV.point(BV[vV], jV[vV]);
              pV.lineEnd(), pV.areaEnd()
            } EV && (BV[wV] = +VV(rV, wV, nV), jV[wV] = +eV(rV, wV, nV), pV.point(JV ? +JV(rV, wV, nV) : BV[wV], xV ? +xV(rV, wV, nV) : jV[wV]))
        }
        if (kV) return pV = null, kV + "" || null
      }

      function wV() {
        return zV().defined(YV).curve(yV).context(UV)
      }
      return VV = "function" === typeof VV ? VV : void 0 === VV ? XV : (0, AV.c)(+VV), eV = "function" === typeof eV ? eV : void 0 === eV ? (0, AV.c)(0) : (0, AV.c)(+eV), xV = "function" === typeof xV ? xV : void 0 === xV ? MV : (0, AV.c)(+xV), nV.x = function(eV) {
        return arguments.length ? (VV = "function" === typeof eV ? eV : (0, AV.c)(+eV), JV = null, nV) : VV
      }, nV.x0 = function(eV) {
        return arguments.length ? (VV = "function" === typeof eV ? eV : (0, AV.c)(+eV), nV) : VV
      }, nV.x1 = function(VV) {
        return arguments.length ? (JV = null == VV ? null : "function" === typeof VV ? VV : (0, AV.c)(+VV), nV) : JV
      }, nV.y = function(VV) {
        return arguments.length ? (eV = "function" === typeof VV ? VV : (0, AV.c)(+VV), xV = null, nV) : eV
      }, nV.y0 = function(VV) {
        return arguments.length ? (eV = "function" === typeof VV ? VV : (0, AV.c)(+VV), nV) : eV
      }, nV.y1 = function(VV) {
        return arguments.length ? (xV = null == VV ? null : "function" === typeof VV ? VV : (0, AV.c)(+VV), nV) : xV
      }, nV.lineX0 = nV.lineY0 = function() {
        return wV().x(VV).y(eV)
      }, nV.lineY1 = function() {
        return wV().x(VV).y(xV)
      }, nV.lineX1 = function() {
        return wV().x(JV).y(eV)
      }, nV.defined = function(VV) {
        return arguments.length ? (YV = "function" === typeof VV ? VV : (0, AV.c)(!!VV), nV) : YV
      }, nV.curve = function(VV) {
        return arguments.length ? (yV = VV, null != UV && (pV = yV(UV)), nV) : yV
      }, nV.context = function(VV) {
        return arguments.length ? (null == VV ? UV = pV = null : pV = yV(UV = VV), nV) : UV
      }, nV
    }
    var WV = xV(6612),
      RV = xV.n(WV),
      gV = xV(5824),
      DV = xV.n(gV),
      iV = xV(5609),
      CV = xV(6012),
      aV = xV(5990),
      oV = xV(5713);

    function cV(VV) {
      return cV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, cV(VV)
    }

    function hV() {
      return hV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, hV.apply(this, arguments)
    }

    function lV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function LV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? lV(Object(xV), !0).forEach((function(eV) {
          fV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : lV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function fV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != cV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != cV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == cV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }
    var mV = {
        curveBasisClosed: function(VV) {
          return new pV(VV)
        },
        curveBasisOpen: function(VV) {
          return new QV(VV)
        },
        curveBasis: function(VV) {
          return new yV(VV)
        },
        curveBumpX: function(VV) {
          return new nV(VV, !0)
        },
        curveBumpY: function(VV) {
          return new nV(VV, !1)
        },
        curveLinearClosed: function(VV) {
          return new wV(VV)
        },
        curveLinear: vV,
        curveMonotoneX: function(VV) {
          return new BV(VV)
        },
        curveMonotoneY: function(VV) {
          return new jV(VV)
        },
        curveNatural: function(VV) {
          return new tV(VV)
        },
        curveStep: function(VV) {
          return new TV(VV, .5)
        },
        curveStepAfter: function(VV) {
          return new TV(VV, 1)
        },
        curveStepBefore: function(VV) {
          return new TV(VV, 0)
        }
      },
      KV = function(VV) {
        return VV.x === +VV.x && VV.y === +VV.y
      },
      HV = function(VV) {
        return VV.x
      },
      uV = function(VV) {
        return VV.y
      },
      sV = function(VV) {
        var eV, xV = VV.type,
          JV = void 0 === xV ? "linear" : xV,
          YV = VV.points,
          UV = void 0 === YV ? [] : YV,
          yV = VV.baseLine,
          pV = VV.layout,
          QV = VV.connectNulls,
          nV = void 0 !== QV && QV,
          wV = function(VV, eV) {
            if (DV()(VV)) return VV;
            var xV = "curve".concat(RV()(VV));
            return "curveMonotone" !== xV && "curveBump" !== xV || !eV ? mV[xV] || vV : mV["".concat(xV).concat("vertical" === eV ? "Y" : "X")]
          }(JV, pV),
          ZV = nV ? UV.filter((function(VV) {
            return KV(VV)
          })) : UV;
        if (Array.isArray(yV)) {
          var rV = nV ? yV.filter((function(VV) {
              return KV(VV)
            })) : yV,
            kV = ZV.map((function(VV, eV) {
              return LV(LV({}, VV), {}, {
                base: rV[eV]
              })
            }));
          return (eV = "vertical" === pV ? GV().y(uV).x1(HV).x0((function(VV) {
            return VV.base.x
          })) : GV().x(HV).y1(uV).y0((function(VV) {
            return VV.base.y
          }))).defined(KV).curve(wV), eV(kV)
        }
        return (eV = "vertical" === pV && (0, oV.A)(yV) ? GV().y(uV).x1(HV).x0(yV) : (0, oV.A)(yV) ? GV().x(HV).y1(uV).y0(yV) : zV().x(HV).y(uV)).defined(KV).curve(wV), eV(ZV)
      },
      SV = function(VV) {
        var eV = VV.className,
          xV = VV.points,
          YV = VV.path,
          UV = VV.pathRef;
        if ((!xV || !xV.length) && !YV) return null;
        var yV = xV && xV.length ? sV(VV) : YV;
        return JV.createElement("path", hV({}, (0, aV.c)(VV, !1), (0, CV.k)(VV), {
          className: (0, iV.c)("recharts-curve", eV),
          d: yV,
          ref: UV
        }))
      }
  },
  6665: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => QV
    });
    var JV = xV(62),
      YV = xV(5609),
      UV = xV(6012),
      yV = xV(5990);

    function pV() {
      return pV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, pV.apply(this, arguments)
    }
    var QV = function(VV) {
      var eV = VV.cx,
        xV = VV.cy,
        QV = VV.r,
        nV = VV.className,
        wV = (0, YV.c)("recharts-dot", nV);
      return eV === +eV && xV === +xV && QV === +QV ? JV.createElement("circle", pV({}, (0, yV.c)(VV, !1), (0, UV.k)(VV), {
        className: wV,
        cx: eV,
        cy: xV,
        r: QV
      })) : null
    }
  },
  6667: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => BV,
      e: () => bV
    });
    var JV = xV(62),
      YV = xV(5609),
      UV = xV(6672),
      yV = xV(5990);

    function pV(VV) {
      return pV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, pV(VV)
    }

    function QV() {
      return QV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, QV.apply(this, arguments)
    }

    function nV(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        var xV = null == VV ? null : "undefined" != typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
        if (null != xV) {
          var JV, YV, UV, yV, pV = [],
            QV = !0,
            nV = !1;
          try {
            if (UV = (xV = xV.call(VV)).next, 0 === eV) {
              if (Object(xV) !== xV) return;
              QV = !1
            } else
              for (; !(QV = (JV = UV.call(xV)).done) && (pV.push(JV.value), pV.length !== eV); QV = !0);
          } catch (VV) {
            nV = !0, YV = VV
          } finally {
            try {
              if (!QV && null != xV.return && (yV = xV.return(), Object(yV) !== yV)) return
            } finally {
              if (nV) throw YV
            }
          }
          return pV
        }
      }(VV, eV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return wV(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return wV(VV, eV)
      }(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function ZV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function vV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? ZV(Object(xV), !0).forEach((function(eV) {
          rV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : ZV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function rV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != pV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != pV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == pV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }
    var kV = function(VV, eV, xV, JV, YV) {
        var UV, yV = Math.min(Math.abs(xV) / 2, Math.abs(JV) / 2),
          pV = JV >= 0 ? 1 : -1,
          QV = xV >= 0 ? 1 : -1,
          nV = JV >= 0 && xV >= 0 || JV < 0 && xV < 0 ? 1 : 0;
        if (yV > 0 && YV instanceof Array) {
          for (var wV = [0, 0, 0, 0], ZV = 0; ZV < 4; ZV++) wV[ZV] = YV[ZV] > yV ? yV : YV[ZV];
          UV = "M".concat(VV, ",").concat(eV + pV * wV[0]), wV[0] > 0 && (UV += "A ".concat(wV[0], ",").concat(wV[0], ",0,0,").concat(nV, ",").concat(VV + QV * wV[0], ",").concat(eV)), UV += "L ".concat(VV + xV - QV * wV[1], ",").concat(eV), wV[1] > 0 && (UV += "A ".concat(wV[1], ",").concat(wV[1], ",0,0,").concat(nV, ",\n        ").concat(VV + xV, ",").concat(eV + pV * wV[1])), UV += "L ".concat(VV + xV, ",").concat(eV + JV - pV * wV[2]), wV[2] > 0 && (UV += "A ".concat(wV[2], ",").concat(wV[2], ",0,0,").concat(nV, ",\n        ").concat(VV + xV - QV * wV[2], ",").concat(eV + JV)), UV += "L ".concat(VV + QV * wV[3], ",").concat(eV + JV), wV[3] > 0 && (UV += "A ".concat(wV[3], ",").concat(wV[3], ",0,0,").concat(nV, ",\n        ").concat(VV, ",").concat(eV + JV - pV * wV[3])), UV += "Z"
        } else if (yV > 0 && YV === +YV && YV > 0) {
          var vV = Math.min(yV, YV);
          UV = "M ".concat(VV, ",").concat(eV + pV * vV, "\n            A ").concat(vV, ",").concat(vV, ",0,0,").concat(nV, ",").concat(VV + QV * vV, ",").concat(eV, "\n            L ").concat(VV + xV - QV * vV, ",").concat(eV, "\n            A ").concat(vV, ",").concat(vV, ",0,0,").concat(nV, ",").concat(VV + xV, ",").concat(eV + pV * vV, "\n            L ").concat(VV + xV, ",").concat(eV + JV - pV * vV, "\n            A ").concat(vV, ",").concat(vV, ",0,0,").concat(nV, ",").concat(VV + xV - QV * vV, ",").concat(eV + JV, "\n            L ").concat(VV + QV * vV, ",").concat(eV + JV, "\n            A ").concat(vV, ",").concat(vV, ",0,0,").concat(nV, ",").concat(VV, ",").concat(eV + JV - pV * vV, " Z")
        } else UV = "M ".concat(VV, ",").concat(eV, " h ").concat(xV, " v ").concat(JV, " h ").concat(-xV, " Z");
        return UV
      },
      bV = function(VV, eV) {
        if (!VV || !eV) return !1;
        var xV = VV.x,
          JV = VV.y,
          YV = eV.x,
          UV = eV.y,
          yV = eV.width,
          pV = eV.height;
        if (Math.abs(yV) > 0 && Math.abs(pV) > 0) {
          var QV = Math.min(YV, YV + yV),
            nV = Math.max(YV, YV + yV),
            wV = Math.min(UV, UV + pV),
            ZV = Math.max(UV, UV + pV);
          return xV >= QV && xV <= nV && JV >= wV && JV <= ZV
        }
        return !1
      },
      EV = {
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
      BV = function(VV) {
        var eV = vV(vV({}, EV), VV),
          xV = (0, JV.useRef)(),
          pV = nV((0, JV.useState)(-1), 2),
          wV = pV[0],
          ZV = pV[1];
        (0, JV.useEffect)((function() {
          if (xV.current && xV.current.getTotalLength) try {
            var VV = xV.current.getTotalLength();
            VV && ZV(VV)
          } catch (eV) {}
        }), []);
        var rV = eV.x,
          bV = eV.y,
          BV = eV.width,
          jV = eV.height,
          qV = eV.radius,
          tV = eV.className,
          FV = eV.animationEasing,
          TV = eV.animationDuration,
          PV = eV.animationBegin,
          AV = eV.isAnimationActive,
          NV = eV.isUpdateAnimationActive;
        if (rV !== +rV || bV !== +bV || BV !== +BV || jV !== +jV || 0 === BV || 0 === jV) return null;
        var XV = (0, YV.c)("recharts-rectangle", tV);
        return NV ? JV.createElement(UV.e, {
          canBegin: wV > 0,
          from: {
            width: BV,
            height: jV,
            x: rV,
            y: bV
          },
          to: {
            width: BV,
            height: jV,
            x: rV,
            y: bV
          },
          duration: TV,
          animationEasing: FV,
          isActive: NV
        }, (function(VV) {
          var YV = VV.width,
            pV = VV.height,
            nV = VV.x,
            ZV = VV.y;
          return JV.createElement(UV.e, {
            canBegin: wV > 0,
            from: "0px ".concat(-1 === wV ? 1 : wV, "px"),
            to: "".concat(wV, "px 0px"),
            attributeName: "strokeDasharray",
            NZ: PV,
            duration: TV,
            isActive: AV,
            easing: FV
          }, JV.createElement("path", QV({}, (0, yV.c)(eV, !0), {
            className: XV,
            d: kV(nV, ZV, YV, pV, qV),
            ref: xV
          })))
        })) : JV.createElement("path", QV({}, (0, yV.c)(eV, !0), {
          className: XV,
          d: kV(rV, bV, BV, jV, qV)
        }))
      }
  },
  6871: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => EV
    });
    var JV = xV(62),
      YV = xV(5609),
      UV = xV(5990),
      yV = xV(6784),
      pV = xV(5713);

    function QV(VV) {
      return QV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, QV(VV)
    }

    function nV() {
      return nV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, nV.apply(this, arguments)
    }

    function wV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function ZV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? wV(Object(xV), !0).forEach((function(eV) {
          vV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : wV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function vV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != QV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != QV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == QV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }
    var rV = function(VV) {
        var eV = VV.cx,
          xV = VV.cy,
          JV = VV.radius,
          YV = VV.angle,
          UV = VV.sign,
          pV = VV.isExternal,
          QV = VV.cornerRadius,
          nV = VV.cornerIsExternal,
          wV = QV * (pV ? 1 : -1) + JV,
          ZV = Math.asin(QV / wV) / yV.b,
          vV = nV ? YV : YV + UV * ZV,
          rV = nV ? YV - UV * ZV : YV;
        return {
          center: (0, yV.e)(eV, xV, wV, vV),
          circleTangency: (0, yV.e)(eV, xV, JV, vV),
          lineTangency: (0, yV.e)(eV, xV, wV * Math.cos(ZV * yV.b), rV),
          rZ: ZV
        }
      },
      kV = function(VV) {
        var eV = VV.cx,
          xV = VV.cy,
          JV = VV.innerRadius,
          YV = VV.outerRadius,
          UV = VV.startAngle,
          QV = function(VV, eV) {
            return (0, pV.D)(eV - VV) * Math.min(Math.abs(eV - VV), 359.999)
          }(UV, VV.endAngle),
          nV = UV + QV,
          wV = (0, yV.e)(eV, xV, YV, UV),
          ZV = (0, yV.e)(eV, xV, YV, nV),
          vV = "M ".concat(wV.x, ",").concat(wV.y, "\n    A ").concat(YV, ",").concat(YV, ",0,\n    ").concat(+(Math.abs(QV) > 180), ",").concat(+(UV > nV), ",\n    ").concat(ZV.x, ",").concat(ZV.y, "\n  ");
        if (JV > 0) {
          var rV = (0, yV.e)(eV, xV, JV, UV),
            kV = (0, yV.e)(eV, xV, JV, nV);
          vV += "L ".concat(kV.x, ",").concat(kV.y, "\n            A ").concat(JV, ",").concat(JV, ",0,\n            ").concat(+(Math.abs(QV) > 180), ",").concat(+(UV <= nV), ",\n            ").concat(rV.x, ",").concat(rV.y, " Z")
        } else vV += "L ".concat(eV, ",").concat(xV, " Z");
        return vV
      },
      bV = {
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
      EV = function(VV) {
        var eV = ZV(ZV({}, bV), VV),
          xV = eV.cx,
          yV = eV.cy,
          QV = eV.innerRadius,
          wV = eV.outerRadius,
          vV = eV.cornerRadius,
          EV = eV.forceCornerRadius,
          BV = eV.cornerIsExternal,
          jV = eV.startAngle,
          qV = eV.endAngle,
          tV = eV.className;
        if (wV < QV || jV === qV) return null;
        var FV, TV = (0, YV.c)("recharts-sector", tV),
          PV = wV - QV,
          AV = (0, pV.m)(vV, PV, 0, !0);
        return FV = AV > 0 && Math.abs(jV - qV) < 360 ? function(VV) {
          var eV = VV.cx,
            xV = VV.cy,
            JV = VV.innerRadius,
            YV = VV.outerRadius,
            UV = VV.cornerRadius,
            yV = VV.forceCornerRadius,
            QV = VV.cornerIsExternal,
            nV = VV.startAngle,
            wV = VV.endAngle,
            ZV = (0, pV.D)(wV - nV),
            vV = rV({
              cx: eV,
              cy: xV,
              radius: YV,
              angle: nV,
              sign: ZV,
              cornerRadius: UV,
              cornerIsExternal: QV
            }),
            bV = vV.circleTangency,
            EV = vV.lineTangency,
            BV = vV.rZ,
            jV = rV({
              cx: eV,
              cy: xV,
              radius: YV,
              angle: wV,
              sign: -ZV,
              cornerRadius: UV,
              cornerIsExternal: QV
            }),
            qV = jV.circleTangency,
            tV = jV.lineTangency,
            FV = jV.rZ,
            TV = QV ? Math.abs(nV - wV) : Math.abs(nV - wV) - BV - FV;
          if (TV < 0) return yV ? "M ".concat(EV.x, ",").concat(EV.y, "\n        a").concat(UV, ",").concat(UV, ",0,0,1,").concat(2 * UV, ",0\n        a").concat(UV, ",").concat(UV, ",0,0,1,").concat(2 * -UV, ",0\n      ") : kV({
            cx: eV,
            cy: xV,
            innerRadius: JV,
            outerRadius: YV,
            startAngle: nV,
            endAngle: wV
          });
          var PV = "M ".concat(EV.x, ",").concat(EV.y, "\n    A").concat(UV, ",").concat(UV, ",0,0,").concat(+(ZV < 0), ",").concat(bV.x, ",").concat(bV.y, "\n    A").concat(YV, ",").concat(YV, ",0,").concat(+(TV > 180), ",").concat(+(ZV < 0), ",").concat(qV.x, ",").concat(qV.y, "\n    A").concat(UV, ",").concat(UV, ",0,0,").concat(+(ZV < 0), ",").concat(tV.x, ",").concat(tV.y, "\n  ");
          if (JV > 0) {
            var AV = rV({
                cx: eV,
                cy: xV,
                radius: JV,
                angle: nV,
                sign: ZV,
                isExternal: !0,
                cornerRadius: UV,
                cornerIsExternal: QV
              }),
              NV = AV.circleTangency,
              XV = AV.lineTangency,
              MV = AV.rZ,
              zV = rV({
                cx: eV,
                cy: xV,
                radius: JV,
                angle: wV,
                sign: -ZV,
                isExternal: !0,
                cornerRadius: UV,
                cornerIsExternal: QV
              }),
              GV = zV.circleTangency,
              WV = zV.lineTangency,
              RV = zV.rZ,
              gV = QV ? Math.abs(nV - wV) : Math.abs(nV - wV) - MV - RV;
            if (gV < 0 && 0 === UV) return "".concat(PV, "L").concat(eV, ",").concat(xV, "Z");
            PV += "L".concat(WV.x, ",").concat(WV.y, "\n      A").concat(UV, ",").concat(UV, ",0,0,").concat(+(ZV < 0), ",").concat(GV.x, ",").concat(GV.y, "\n      A").concat(JV, ",").concat(JV, ",0,").concat(+(gV > 180), ",").concat(+(ZV > 0), ",").concat(NV.x, ",").concat(NV.y, "\n      A").concat(UV, ",").concat(UV, ",0,0,").concat(+(ZV < 0), ",").concat(XV.x, ",").concat(XV.y, "Z")
          } else PV += "L".concat(eV, ",").concat(xV, "Z");
          return PV
        }({
          cx: xV,
          cy: yV,
          innerRadius: QV,
          outerRadius: wV,
          cornerRadius: Math.min(AV, PV / 2),
          forceCornerRadius: EV,
          cornerIsExternal: BV,
          startAngle: jV,
          endAngle: qV
        }) : kV({
          cx: xV,
          cy: yV,
          innerRadius: QV,
          outerRadius: wV,
          startAngle: jV,
          endAngle: qV
        }), JV.createElement("path", nV({}, (0, UV.c)(eV, !0), {
          className: TV,
          d: FV,
          role: "img"
        }))
      }
  },
  6606: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => LV
    });
    var JV = xV(62),
      YV = xV(6612),
      UV = xV.n(YV);
    Math.abs, Math.atan2;
    const yV = Math.cos,
      pV = (Math.max, Math.min, Math.sin),
      QV = Math.sqrt,
      nV = Math.PI,
      wV = 2 * nV;
    const ZV = {
        draw(VV, eV) {
          const xV = QV(eV / nV);
          VV.moveTo(xV, 0), VV.arc(0, 0, xV, 0, wV)
        }
      },
      vV = {
        draw(VV, eV) {
          const xV = QV(eV / 5) / 2;
          VV.moveTo(-3 * xV, -xV), VV.lineTo(-xV, -xV), VV.lineTo(-xV, -3 * xV), VV.lineTo(xV, -3 * xV), VV.lineTo(xV, -xV), VV.lineTo(3 * xV, -xV), VV.lineTo(3 * xV, xV), VV.lineTo(xV, xV), VV.lineTo(xV, 3 * xV), VV.lineTo(-xV, 3 * xV), VV.lineTo(-xV, xV), VV.lineTo(-3 * xV, xV), VV.closePath()
        }
      },
      rV = QV(1 / 3),
      kV = 2 * rV,
      bV = {
        draw(VV, eV) {
          const xV = QV(eV / kV),
            JV = xV * rV;
          VV.moveTo(0, -xV), VV.lineTo(JV, 0), VV.lineTo(0, xV), VV.lineTo(-JV, 0), VV.closePath()
        }
      },
      EV = {
        draw(VV, eV) {
          const xV = QV(eV),
            JV = -xV / 2;
          VV.rect(JV, JV, xV, xV)
        }
      },
      BV = pV(nV / 10) / pV(7 * nV / 10),
      jV = pV(wV / 10) * BV,
      qV = -yV(wV / 10) * BV,
      tV = {
        draw(VV, eV) {
          const xV = QV(.8908130915292852 * eV),
            JV = jV * xV,
            YV = qV * xV;
          VV.moveTo(0, -xV), VV.lineTo(JV, YV);
          for (let UV = 1; UV < 5; ++UV) {
            const eV = wV * UV / 5,
              QV = yV(eV),
              nV = pV(eV);
            VV.lineTo(nV * xV, -QV * xV), VV.lineTo(QV * JV - nV * YV, nV * JV + QV * YV)
          }
          VV.closePath()
        }
      },
      FV = QV(3),
      TV = {
        draw(VV, eV) {
          const xV = -QV(eV / (3 * FV));
          VV.moveTo(0, 2 * xV), VV.lineTo(-FV * xV, -xV), VV.lineTo(FV * xV, -xV), VV.closePath()
        }
      },
      PV = -.5,
      AV = QV(3) / 2,
      NV = 1 / QV(12),
      XV = 3 * (NV / 2 + 1),
      MV = {
        draw(VV, eV) {
          const xV = QV(eV / XV),
            JV = xV / 2,
            YV = xV * NV,
            UV = JV,
            yV = xV * NV + xV,
            pV = -UV,
            nV = yV;
          VV.moveTo(JV, YV), VV.lineTo(UV, yV), VV.lineTo(pV, nV), VV.lineTo(PV * JV - AV * YV, AV * JV + PV * YV), VV.lineTo(PV * UV - AV * yV, AV * UV + PV * yV), VV.lineTo(PV * pV - AV * nV, AV * pV + PV * nV), VV.lineTo(PV * JV + AV * YV, PV * YV - AV * JV), VV.lineTo(PV * UV + AV * yV, PV * yV - AV * UV), VV.lineTo(PV * pV + AV * nV, PV * nV - AV * pV), VV.closePath()
        }
      };
    var zV = xV(6656),
      GV = xV(6660);
    QV(3), QV(3);
    var WV = xV(5609),
      RV = xV(5990);

    function gV(VV) {
      return gV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, gV(VV)
    }
    var DV = ["type", "size", "sizeType"];

    function iV() {
      return iV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, iV.apply(this, arguments)
    }

    function CV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function aV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? CV(Object(xV), !0).forEach((function(eV) {
          oV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : CV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function oV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != gV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != gV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == gV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function cV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }
    var hV = {
        symbolCircle: ZV,
        symbolCross: vV,
        symbolDiamond: bV,
        symbolSquare: EV,
        symbolStar: tV,
        symbolTriangle: TV,
        symbolWye: MV
      },
      lV = Math.PI / 180,
      LV = function(VV) {
        var eV = VV.type,
          xV = void 0 === eV ? "circle" : eV,
          YV = VV.size,
          yV = void 0 === YV ? 64 : YV,
          pV = VV.sizeType,
          QV = void 0 === pV ? "area" : pV,
          nV = aV(aV({}, cV(VV, DV)), {}, {
            type: xV,
            size: yV,
            sizeType: QV
          }),
          wV = nV.className,
          vV = nV.cx,
          rV = nV.cy,
          kV = (0, RV.c)(nV, !0);
        return vV === +vV && rV === +rV && yV === +yV ? JV.createElement("path", iV({}, kV, {
          className: (0, WV.c)("recharts-symbols", wV),
          transform: "translate(".concat(vV, ", ").concat(rV, ")"),
          d: function() {
            var VV = function(VV) {
                var eV = "symbol".concat(UV()(VV));
                return hV[eV] || ZV
              }(xV),
              eV = function(VV, eV) {
                let xV = null,
                  JV = (0, GV.b)(YV);

                function YV() {
                  let YV;
                  if (xV || (xV = YV = JV()), VV.apply(this, arguments).draw(xV, +eV.apply(this, arguments)), YV) return xV = null, YV + "" || null
                }
                return VV = "function" === typeof VV ? VV : (0, zV.c)(VV || ZV), eV = "function" === typeof eV ? eV : (0, zV.c)(void 0 === eV ? 64 : +eV), YV.type = function(eV) {
                  return arguments.length ? (VV = "function" === typeof eV ? eV : (0, zV.c)(eV), YV) : VV
                }, YV.size = function(VV) {
                  return arguments.length ? (eV = "function" === typeof VV ? VV : (0, zV.c)(+VV), YV) : eV
                }, YV.context = function(VV) {
                  return arguments.length ? (xV = null == VV ? null : VV, YV) : xV
                }, YV
              }().type(VV).size(function(VV, eV, xV) {
                if ("area" === eV) return VV;
                switch (xV) {
                  case "cross":
                    return 5 * VV * VV / 9;
                  case "diamond":
                    return .5 * VV * VV / Math.sqrt(3);
                  case "square":
                    return VV * VV;
                  case "star":
                    var JV = 18 * lV;
                    return 1.25 * VV * VV * (Math.tan(JV) - Math.tan(2 * JV) * Math.pow(Math.tan(JV), 2));
                  case "triangle":
                    return Math.sqrt(3) * VV * VV / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * VV * VV / 8;
                  default:
                    return Math.PI * VV * VV / 4
                }
              }(yV, QV, xV));
            return eV()
          }()
        })) : null
      };
    LV.registerSymbol = function(VV, eV) {
      hV["symbol".concat(UV()(VV))] = eV
    }
  },
  6850: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => oV,
      h: () => KV,
      l: () => cV,
      o: () => hV,
      q: () => lV
    });
    var JV = xV(62),
      YV = xV(5824),
      UV = xV.n(YV),
      yV = xV(6856),
      pV = xV.n(yV),
      QV = xV(6866),
      nV = xV.n(QV),
      wV = xV(6752),
      ZV = xV.n(wV),
      vV = xV(6667),
      rV = xV(5609),
      kV = xV(6672),
      bV = xV(5990);

    function EV(VV) {
      return EV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, EV(VV)
    }

    function BV() {
      return BV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV) Object.prototype.hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, BV.apply(this, arguments)
    }

    function jV(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        var xV = null == VV ? null : "undefined" != typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
        if (null != xV) {
          var JV, YV, UV, yV, pV = [],
            QV = !0,
            nV = !1;
          try {
            if (UV = (xV = xV.call(VV)).next, 0 === eV) {
              if (Object(xV) !== xV) return;
              QV = !1
            } else
              for (; !(QV = (JV = UV.call(xV)).done) && (pV.push(JV.value), pV.length !== eV); QV = !0);
          } catch (VV) {
            nV = !0, YV = VV
          } finally {
            try {
              if (!QV && null != xV.return && (yV = xV.return(), Object(yV) !== yV)) return
            } finally {
              if (nV) throw YV
            }
          }
          return pV
        }
      }(VV, eV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return qV(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return qV(VV, eV)
      }(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function tV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function FV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? tV(Object(xV), !0).forEach((function(eV) {
          TV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : tV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function TV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != EV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != EV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == EV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }
    var PV = function(VV, eV, xV, JV, YV) {
        var UV, yV = xV - JV;
        return UV = "M ".concat(VV, ",").concat(eV), UV += "L ".concat(VV + xV, ",").concat(eV), UV += "L ".concat(VV + xV - yV / 2, ",").concat(eV + YV), UV += "L ".concat(VV + xV - yV / 2 - JV, ",").concat(eV + YV), UV += "L ".concat(VV, ",").concat(eV, " Z")
      },
      AV = {
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
      NV = function(VV) {
        var eV = FV(FV({}, AV), VV),
          xV = (0, JV.useRef)(),
          YV = jV((0, JV.useState)(-1), 2),
          UV = YV[0],
          yV = YV[1];
        (0, JV.useEffect)((function() {
          if (xV.current && xV.current.getTotalLength) try {
            var VV = xV.current.getTotalLength();
            VV && yV(VV)
          } catch (eV) {}
        }), []);
        var pV = eV.x,
          QV = eV.y,
          nV = eV.upperWidth,
          wV = eV.lowerWidth,
          ZV = eV.height,
          vV = eV.className,
          EV = eV.animationEasing,
          qV = eV.animationDuration,
          tV = eV.animationBegin,
          TV = eV.isUpdateAnimationActive;
        if (pV !== +pV || QV !== +QV || nV !== +nV || wV !== +wV || ZV !== +ZV || 0 === nV && 0 === wV || 0 === ZV) return null;
        var NV = (0, rV.c)("recharts-trapezoid", vV);
        return TV ? JV.createElement(kV.e, {
          canBegin: UV > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: ZV,
            x: pV,
            y: QV
          },
          to: {
            upperWidth: nV,
            lowerWidth: wV,
            height: ZV,
            x: pV,
            y: QV
          },
          duration: qV,
          animationEasing: EV,
          isActive: TV
        }, (function(VV) {
          var YV = VV.upperWidth,
            yV = VV.lowerWidth,
            pV = VV.height,
            QV = VV.x,
            nV = VV.y;
          return JV.createElement(kV.e, {
            canBegin: UV > 0,
            from: "0px ".concat(-1 === UV ? 1 : UV, "px"),
            to: "".concat(UV, "px 0px"),
            attributeName: "strokeDasharray",
            NZ: tV,
            duration: qV,
            easing: EV
          }, JV.createElement("path", BV({}, (0, bV.c)(eV, !0), {
            className: NV,
            d: PV(QV, nV, YV, yV, pV),
            ref: xV
          })))
        })) : JV.createElement("g", null, JV.createElement("path", BV({}, (0, bV.c)(eV, !0), {
          className: NV,
          d: PV(pV, QV, nV, wV, ZV)
        })))
      },
      XV = xV(6871),
      MV = xV(6518),
      zV = xV(6606),
      GV = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function WV(VV) {
      return WV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, WV(VV)
    }

    function RV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function gV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function DV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? gV(Object(xV), !0).forEach((function(eV) {
          iV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : gV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function iV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != WV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != WV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == WV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function CV(VV, eV) {
      return DV(DV({}, eV), VV)
    }

    function aV(VV) {
      var eV = VV.shapeType,
        xV = VV.elementProps;
      switch (eV) {
        case "rectangle":
          return JV.createElement(vV.d, xV);
        case "trapezoid":
          return JV.createElement(NV, xV);
        case "sector":
          return JV.createElement(XV.c, xV);
        case "symbols":
          if (function(VV) {
              return "symbols" === VV
            }(eV)) return JV.createElement(zV.b, xV);
          break;
        default:
          return null
      }
    }

    function oV(VV) {
      var eV, xV = VV.option,
        YV = VV.shapeType,
        yV = VV.propTransformer,
        QV = void 0 === yV ? CV : yV,
        wV = VV.activeClassName,
        ZV = void 0 === wV ? "recharts-active-shape" : wV,
        vV = VV.isActive,
        rV = RV(VV, GV);
      if ((0, JV.isValidElement)(xV)) eV = (0, JV.cloneElement)(xV, DV(DV({}, rV), function(VV) {
        return (0, JV.isValidElement)(VV) ? VV.props : VV
      }(xV)));
      else if (UV()(xV)) eV = xV(rV);
      else if (pV()(xV) && !nV()(xV)) {
        var kV = QV(xV, rV);
        eV = JV.createElement(aV, {
          shapeType: YV,
          elementProps: kV
        })
      } else {
        var bV = rV;
        eV = JV.createElement(aV, {
          shapeType: YV,
          elementProps: bV
        })
      }
      return vV ? JV.createElement(MV.e, {
        className: ZV
      }, eV) : eV
    }

    function cV(VV, eV) {
      return null != eV && "trapezoids" in VV.props
    }

    function hV(VV, eV) {
      return null != eV && "sectors" in VV.props
    }

    function lV(VV, eV) {
      return null != eV && "points" in VV.props
    }

    function LV(VV, eV) {
      var xV, JV, YV = VV.x === (null === eV || void 0 === eV || null === (xV = eV.labelViewBox) || void 0 === xV ? void 0 : xV.x) || VV.x === eV.x,
        UV = VV.y === (null === eV || void 0 === eV || null === (JV = eV.labelViewBox) || void 0 === JV ? void 0 : JV.y) || VV.y === eV.y;
      return YV && UV
    }

    function fV(VV, eV) {
      var xV = VV.endAngle === eV.endAngle,
        JV = VV.startAngle === eV.startAngle;
      return xV && JV
    }

    function mV(VV, eV) {
      var xV = VV.x === eV.x,
        JV = VV.y === eV.y,
        YV = VV.z === eV.z;
      return xV && JV && YV
    }

    function KV(VV) {
      var eV = VV.activeTooltipItem,
        xV = VV.graphicalItem,
        JV = VV.itemData,
        YV = function(VV, eV) {
          var xV;
          return cV(VV, eV) ? xV = "trapezoids" : hV(VV, eV) ? xV = "sectors" : lV(VV, eV) && (xV = "points"), xV
        }(xV, eV),
        UV = function(VV, eV) {
          var xV, JV;
          return cV(VV, eV) ? null === (xV = eV.tooltipPayload) || void 0 === xV || null === (xV = xV[0]) || void 0 === xV || null === (xV = xV.payload) || void 0 === xV ? void 0 : xV.payload : hV(VV, eV) ? null === (JV = eV.tooltipPayload) || void 0 === JV || null === (JV = JV[0]) || void 0 === JV || null === (JV = JV.payload) || void 0 === JV ? void 0 : JV.payload : lV(VV, eV) ? eV.payload : {}
        }(xV, eV),
        yV = JV.filter((function(VV, JV) {
          var yV = ZV()(UV, VV),
            pV = xV.props[YV].filter((function(VV) {
              var JV = function(VV, eV) {
                var xV;
                return cV(VV, eV) ? xV = LV : hV(VV, eV) ? xV = fV : lV(VV, eV) && (xV = mV), xV
              }(xV, eV);
              return JV(VV, eV)
            })),
            QV = xV.props[YV].indexOf(pV[pV.length - 1]);
          return yV && JV === QV
        }));
      return JV.indexOf(yV[yV.length - 1])
    }
  },
  6792: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => FV,
      h: () => BV,
      j: () => TV,
      n: () => qV,
      r: () => jV
    });
    var JV = xV(6798),
      YV = xV.n(JV),
      UV = xV(6813),
      yV = xV.n(UV),
      pV = xV(6696),
      QV = xV(5990),
      nV = xV(5713),
      wV = xV(6824);

    function ZV(VV) {
      return ZV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, ZV(VV)
    }

    function vV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, EV(JV.key), JV)
      }
    }

    function rV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function kV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? rV(Object(xV), !0).forEach((function(eV) {
          bV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : rV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function bV(VV, eV, xV) {
      return (eV = EV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function EV(VV) {
      var eV = function(VV, eV) {
        if ("object" != ZV(VV) || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != ZV(JV)) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == ZV(eV) ? eV : eV + ""
    }
    var BV = function(VV, eV, xV, JV, YV) {
        var UV = VV.width,
          yV = VV.height,
          ZV = VV.layout,
          vV = VV.children,
          rV = Object.keys(eV),
          EV = {
            left: xV.left,
            leftMirror: xV.left,
            right: UV - xV.right,
            rightMirror: UV - xV.right,
            top: xV.top,
            topMirror: xV.top,
            bottom: yV - xV.bottom,
            bottomMirror: yV - xV.bottom
          },
          BV = !!(0, QV.j)(vV, wV.b);
        return rV.reduce((function(UV, yV) {
          var QV, wV, vV, rV, jV, qV = eV[yV],
            tV = qV.orientation,
            FV = qV.domain,
            TV = qV.padding,
            PV = void 0 === TV ? {} : TV,
            AV = qV.mirror,
            NV = qV.reversed,
            XV = "".concat(tV).concat(AV ? "Mirror" : "");
          if ("number" === qV.type && ("gap" === qV.padding || "no-gap" === qV.padding)) {
            var MV = FV[1] - FV[0],
              zV = 1 / 0,
              GV = qV.categoricalDomain.sort(nV.b);
            if (GV.forEach((function(VV, eV) {
                eV > 0 && (zV = Math.min((VV || 0) - (GV[eV - 1] || 0), zV))
              })), Number.isFinite(zV)) {
              var WV = zV / MV,
                RV = "vertical" === qV.layout ? xV.height : xV.width;
              if ("gap" === qV.padding && (QV = WV * RV / 2), "no-gap" === qV.padding) {
                var gV = (0, nV.m)(VV.barCategoryGap, WV * RV),
                  DV = WV * RV / 2;
                QV = DV - gV - (DV - gV) / RV * gV
              }
            }
          }
          wV = "xAxis" === JV ? [xV.left + (PV.left || 0) + (QV || 0), xV.left + xV.width - (PV.right || 0) - (QV || 0)] : "yAxis" === JV ? "horizontal" === ZV ? [xV.top + xV.height - (PV.bottom || 0), xV.top + (PV.top || 0)] : [xV.top + (PV.top || 0) + (QV || 0), xV.top + xV.height - (PV.bottom || 0) - (QV || 0)] : qV.range, NV && (wV = [wV[1], wV[0]]);
          var iV = (0, pV.cb)(qV, YV, BV),
            CV = iV.scale,
            aV = iV.realScaleType;
          CV.domain(FV).range(wV), (0, pV.f)(CV);
          var oV = (0, pV.S)(CV, kV(kV({}, qV), {}, {
            realScaleType: aV
          }));
          "xAxis" === JV ? (jV = "top" === tV && !AV || "bottom" === tV && AV, vV = xV.left, rV = EV[XV] - jV * qV.height) : "yAxis" === JV && (jV = "left" === tV && !AV || "right" === tV && AV, vV = EV[XV] - jV * qV.width, rV = xV.top);
          var cV = kV(kV(kV({}, qV), oV), {}, {
            realScaleType: aV,
            x: vV,
            y: rV,
            scale: CV,
            width: "xAxis" === JV ? xV.width : qV.width,
            height: "yAxis" === JV ? xV.height : qV.height
          });
          return cV.bandSize = (0, pV.n)(cV, oV), qV.hide || "xAxis" !== JV ? qV.hide || (EV[XV] += (jV ? -1 : 1) * cV.width) : EV[XV] += (jV ? -1 : 1) * cV.height, kV(kV({}, UV), {}, bV({}, yV, cV))
        }), {})
      },
      jV = function(VV, eV) {
        var xV = VV.x,
          JV = VV.y,
          YV = eV.x,
          UV = eV.y;
        return {
          x: Math.min(xV, YV),
          y: Math.min(JV, UV),
          width: Math.abs(YV - xV),
          height: Math.abs(UV - JV)
        }
      },
      qV = function(VV) {
        var eV = VV.x1,
          xV = VV.y1,
          JV = VV.x2,
          YV = VV.y2;
        return jV({
          x: eV,
          y: xV
        }, {
          x: JV,
          y: YV
        })
      },
      tV = function() {
        function VV(eV) {
          ! function(VV, eV) {
            if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
          }(this, VV), this.scale = eV
        }
        return eV = VV, xV = [{
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
          value: function(VV) {
            var eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              xV = eV.bandAware,
              JV = eV.position;
            if (void 0 !== VV) {
              if (JV) switch (JV) {
                case "start":
                default:
                  return this.scale(VV);
                case "middle":
                  var YV = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(VV) + YV;
                case "end":
                  var UV = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(VV) + UV
              }
              if (xV) {
                var yV = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(VV) + yV
              }
              return this.scale(VV)
            }
          }
        }, {
          key: "isInRange",
          value: function(VV) {
            var eV = this.range(),
              xV = eV[0],
              JV = eV[eV.length - 1];
            return xV <= JV ? VV >= xV && VV <= JV : VV >= JV && VV <= xV
          }
        }], JV = [{
          key: "create",
          value: function(eV) {
            return new VV(eV)
          }
        }], xV && vV(eV.prototype, xV), JV && vV(eV, JV), Object.defineProperty(eV, "prototype", {
          writable: !1
        }), eV;
        var eV, xV, JV
      }();
    bV(tV, "EPS", 1e-4);
    var FV = function(VV) {
      var eV = Object.keys(VV).reduce((function(eV, xV) {
        return kV(kV({}, eV), {}, bV({}, xV, tV.create(VV[xV])))
      }), {});
      return kV(kV({}, eV), {}, {
        apply: function(VV) {
          var xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            JV = xV.bandAware,
            UV = xV.position;
          return YV()(VV, (function(VV, xV) {
            return eV[xV].apply(VV, {
              bandAware: JV,
              position: UV
            })
          }))
        },
        isInRange: function(VV) {
          return yV()(VV, (function(VV, xV) {
            return eV[xV].isInRange(VV)
          }))
        }
      })
    };
    var TV = function(VV) {
      var eV = VV.width,
        xV = VV.height,
        JV = function(VV) {
          return (VV % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        YV = JV * Math.PI / 180,
        UV = Math.atan(xV / eV),
        yV = YV > UV && YV < Math.PI - UV ? xV / Math.sin(YV) : eV / Math.cos(YV);
      return Math.abs(yV)
    }
  },
  6696: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => Ry,
      e: () => My,
      f: () => fy,
      h: () => hy,
      j: () => my,
      n: () => Up,
      p: () => Wy,
      t: () => Gy,
      w: () => Oy,
      y: () => dy,
      z: () => Iy,
      C: () => ay,
      E: () => Xy,
      G: () => iy,
      I: () => ep,
      M: () => zy,
      N: () => sy,
      Q: () => Vp,
      R: () => oy,
      S: () => Sy,
      U: () => pp,
      V: () => Ny,
      Y: () => Cy,
      _: () => yp,
      bb: () => Dy,
      cb: () => ly,
      db: () => Yp,
      hb: () => Ky
    });
    var JV = {};
    xV.r(JV), xV.d(JV, {
      scaleBand: () => YV.b,
      scaleDiverging: () => QU,
      scaleDivergingLog: () => nU,
      scaleDivergingPow: () => ZU,
      scaleDivergingSqrt: () => vU,
      scaleDivergingSymlog: () => wU,
      scaleIdentity: () => se,
      scaleImplicit: () => nx.f,
      scaleLinear: () => ue,
      scaleLog: () => Yx,
      scaleOrdinal: () => nx.c,
      scalePoint: () => YV.d,
      scalePow: () => kx,
      scaleQuantile: () => Xx,
      scaleQuantize: () => Mx,
      scaleRadial: () => Bx,
      scaleSequential: () => eU,
      scaleSequentialLog: () => xU,
      scaleSequentialPow: () => YU,
      scaleSequentialQuantile: () => yU,
      scaleSequentialSqrt: () => UU,
      scaleSequentialSymlog: () => JU,
      scaleSqrt: () => bx,
      scaleSymlog: () => Qx,
      scaleThreshold: () => zx,
      scaleTime: () => IY,
      scaleUtc: () => dY,
      tickFormat: () => Ke
    });
    var YV = xV(6698);
    const UV = Math.sqrt(50),
      yV = Math.sqrt(10),
      pV = Math.sqrt(2);

    function QV(VV, eV, xV) {
      const JV = (eV - VV) / Math.max(0, xV),
        YV = Math.floor(Math.log10(JV)),
        nV = JV / Math.pow(10, YV),
        wV = nV >= UV ? 10 : nV >= yV ? 5 : nV >= pV ? 2 : 1;
      let ZV, vV, rV;
      return YV < 0 ? (rV = Math.pow(10, -YV) / wV, ZV = Math.round(VV * rV), vV = Math.round(eV * rV), ZV / rV < VV && ++ZV, vV / rV > eV && --vV, rV = -rV) : (rV = Math.pow(10, YV) * wV, ZV = Math.round(VV / rV), vV = Math.round(eV / rV), ZV * rV < VV && ++ZV, vV * rV > eV && --vV), vV < ZV && .5 <= xV && xV < 2 ? QV(VV, eV, 2 * xV) : [ZV, vV, rV]
    }

    function nV(VV, eV, xV) {
      if (!((xV = +xV) > 0)) return [];
      if ((VV = +VV) === (eV = +eV)) return [VV];
      const JV = eV < VV,
        [YV, UV, yV] = JV ? QV(eV, VV, xV) : QV(VV, eV, xV);
      if (!(UV >= YV)) return [];
      const pV = UV - YV + 1,
        nV = new Array(pV);
      if (JV)
        if (yV < 0)
          for (let QV = 0; QV < pV; ++QV) nV[QV] = (UV - QV) / -yV;
        else
          for (let QV = 0; QV < pV; ++QV) nV[QV] = (UV - QV) * yV;
      else if (yV < 0)
        for (let QV = 0; QV < pV; ++QV) nV[QV] = (YV + QV) / -yV;
      else
        for (let QV = 0; QV < pV; ++QV) nV[QV] = (YV + QV) * yV;
      return nV
    }

    function wV(VV, eV, xV) {
      return QV(VV = +VV, eV = +eV, xV = +xV)[2]
    }

    function ZV(VV, eV, xV) {
      xV = +xV;
      const JV = (eV = +eV) < (VV = +VV),
        YV = JV ? wV(eV, VV, xV) : wV(VV, eV, xV);
      return (JV ? -1 : 1) * (YV < 0 ? 1 / -YV : YV)
    }

    function vV(VV, eV) {
      return null == VV || null == eV ? NaN : VV < eV ? -1 : VV > eV ? 1 : VV >= eV ? 0 : NaN
    }

    function rV(VV, eV) {
      return null == VV || null == eV ? NaN : eV < VV ? -1 : eV > VV ? 1 : eV >= VV ? 0 : NaN
    }

    function kV(VV) {
      let eV, xV, JV;

      function YV(VV, JV) {
        let YV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          UV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VV.length;
        if (YV < UV) {
          if (0 !== eV(JV, JV)) return UV;
          do {
            const eV = YV + UV >>> 1;
            xV(VV[eV], JV) < 0 ? YV = eV + 1 : UV = eV
          } while (YV < UV)
        }
        return YV
      }
      return 2 !== VV.length ? (eV = vV, xV = (eV, xV) => vV(VV(eV), xV), JV = (eV, xV) => VV(eV) - xV) : (eV = VV === vV || VV === rV ? VV : bV, xV = VV, JV = VV), {
        left: YV,
        center: function(VV, eV) {
          let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const UV = YV(VV, eV, xV, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VV.length) - 1);
          return UV > xV && JV(VV[UV - 1], eV) > -JV(VV[UV], eV) ? UV - 1 : UV
        },
        right: function(VV, JV) {
          let YV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            UV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VV.length;
          if (YV < UV) {
            if (0 !== eV(JV, JV)) return UV;
            do {
              const eV = YV + UV >>> 1;
              xV(VV[eV], JV) <= 0 ? YV = eV + 1 : UV = eV
            } while (YV < UV)
          }
          return YV
        }
      }
    }

    function bV() {
      return 0
    }

    function EV(VV) {
      return null === VV ? NaN : +VV
    }
    const BV = kV(vV),
      jV = BV.right,
      qV = (BV.left, kV(EV).center, jV);

    function tV(VV, eV, xV) {
      VV.prototype = eV.prototype = xV, xV.constructor = VV
    }

    function FV(VV, eV) {
      var xV = Object.create(VV.prototype);
      for (var JV in eV) xV[JV] = eV[JV];
      return xV
    }

    function TV() {}
    var PV = .7,
      AV = 1 / PV,
      NV = "\\s*([+-]?\\d+)\\s*",
      XV = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      MV = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      zV = /^#([0-9a-f]{3,8})$/,
      GV = new RegExp(`^rgb\\(${NV},${NV},${NV}\\)$`),
      WV = new RegExp(`^rgb\\(${MV},${MV},${MV}\\)$`),
      RV = new RegExp(`^rgba\\(${NV},${NV},${NV},${XV}\\)$`),
      gV = new RegExp(`^rgba\\(${MV},${MV},${MV},${XV}\\)$`),
      DV = new RegExp(`^hsl\\(${XV},${MV},${MV}\\)$`),
      iV = new RegExp(`^hsla\\(${XV},${MV},${MV},${XV}\\)$`),
      CV = {
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

    function aV() {
      return this.rgb().formatHex()
    }

    function oV() {
      return this.rgb().formatRgb()
    }

    function cV(VV) {
      var eV, xV;
      return VV = (VV + "").trim().toLowerCase(), (eV = zV.exec(VV)) ? (xV = eV[1].length, eV = parseInt(eV[1], 16), 6 === xV ? hV(eV) : 3 === xV ? new fV(eV >> 8 & 15 | eV >> 4 & 240, eV >> 4 & 15 | 240 & eV, (15 & eV) << 4 | 15 & eV, 1) : 8 === xV ? lV(eV >> 24 & 255, eV >> 16 & 255, eV >> 8 & 255, (255 & eV) / 255) : 4 === xV ? lV(eV >> 12 & 15 | eV >> 8 & 240, eV >> 8 & 15 | eV >> 4 & 240, eV >> 4 & 15 | 240 & eV, ((15 & eV) << 4 | 15 & eV) / 255) : null) : (eV = GV.exec(VV)) ? new fV(eV[1], eV[2], eV[3], 1) : (eV = WV.exec(VV)) ? new fV(255 * eV[1] / 100, 255 * eV[2] / 100, 255 * eV[3] / 100, 1) : (eV = RV.exec(VV)) ? lV(eV[1], eV[2], eV[3], eV[4]) : (eV = gV.exec(VV)) ? lV(255 * eV[1] / 100, 255 * eV[2] / 100, 255 * eV[3] / 100, eV[4]) : (eV = DV.exec(VV)) ? SV(eV[1], eV[2] / 100, eV[3] / 100, 1) : (eV = iV.exec(VV)) ? SV(eV[1], eV[2] / 100, eV[3] / 100, eV[4]) : CV.hasOwnProperty(VV) ? hV(CV[VV]) : "transparent" === VV ? new fV(NaN, NaN, NaN, 0) : null
    }

    function hV(VV) {
      return new fV(VV >> 16 & 255, VV >> 8 & 255, 255 & VV, 1)
    }

    function lV(VV, eV, xV, JV) {
      return JV <= 0 && (VV = eV = xV = NaN), new fV(VV, eV, xV, JV)
    }

    function LV(VV, eV, xV, JV) {
      return 1 === arguments.length ? ((YV = VV) instanceof TV || (YV = cV(YV)), YV ? new fV((YV = YV.rgb()).r, YV.g, YV.b, YV.opacity) : new fV) : new fV(VV, eV, xV, null == JV ? 1 : JV);
      var YV
    }

    function fV(VV, eV, xV, JV) {
      this.r = +VV, this.g = +eV, this.b = +xV, this.opacity = +JV
    }

    function mV() {
      return `#${sV(this.r)}${sV(this.g)}${sV(this.b)}`
    }

    function KV() {
      const VV = HV(this.opacity);
      return `${1===VV?"rgb(":"rgba("}${uV(this.r)}, ${uV(this.g)}, ${uV(this.b)}${1===VV?")":`, ${VV})`}`
    }

    function HV(VV) {
      return isNaN(VV) ? 1 : Math.max(0, Math.min(1, VV))
    }

    function uV(VV) {
      return Math.max(0, Math.min(255, Math.round(VV) || 0))
    }

    function sV(VV) {
      return ((VV = uV(VV)) < 16 ? "0" : "") + VV.toString(16)
    }

    function SV(VV, eV, xV, JV) {
      return JV <= 0 ? VV = eV = xV = NaN : xV <= 0 || xV >= 1 ? VV = eV = NaN : eV <= 0 && (VV = NaN), new dV(VV, eV, xV, JV)
    }

    function IV(VV) {
      if (VV instanceof dV) return new dV(VV.h, VV.s, VV.l, VV.opacity);
      if (VV instanceof TV || (VV = cV(VV)), !VV) return new dV;
      if (VV instanceof dV) return VV;
      var eV = (VV = VV.rgb()).r / 255,
        xV = VV.g / 255,
        JV = VV.b / 255,
        YV = Math.min(eV, xV, JV),
        UV = Math.max(eV, xV, JV),
        yV = NaN,
        pV = UV - YV,
        QV = (UV + YV) / 2;
      return pV ? (yV = eV === UV ? (xV - JV) / pV + 6 * (xV < JV) : xV === UV ? (JV - eV) / pV + 2 : (eV - xV) / pV + 4, pV /= QV < .5 ? UV + YV : 2 - UV - YV, yV *= 60) : pV = QV > 0 && QV < 1 ? 0 : yV, new dV(yV, pV, QV, VV.opacity)
    }

    function dV(VV, eV, xV, JV) {
      this.h = +VV, this.s = +eV, this.l = +xV, this.opacity = +JV
    }

    function OV(VV) {
      return (VV = (VV || 0) % 360) < 0 ? VV + 360 : VV
    }

    function Ve(VV) {
      return Math.max(0, Math.min(1, VV || 0))
    }

    function ee(VV, eV, xV) {
      return 255 * (VV < 60 ? eV + (xV - eV) * VV / 60 : VV < 180 ? xV : VV < 240 ? eV + (xV - eV) * (240 - VV) / 60 : eV)
    }

    function xe(VV, eV, xV, JV, YV) {
      var UV = VV * VV,
        yV = UV * VV;
      return ((1 - 3 * VV + 3 * UV - yV) * eV + (4 - 6 * UV + 3 * yV) * xV + (1 + 3 * VV + 3 * UV - 3 * yV) * JV + yV * YV) / 6
    }
    tV(TV, cV, {
      copy(VV) {
        return Object.assign(new this.constructor, this, VV)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: aV,
      formatHex: aV,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return IV(this).formatHsl()
      },
      formatRgb: oV,
      toString: oV
    }), tV(fV, LV, FV(TV, {
      brighter(VV) {
        return VV = null == VV ? AV : Math.pow(AV, VV), new fV(this.r * VV, this.g * VV, this.b * VV, this.opacity)
      },
      darker(VV) {
        return VV = null == VV ? PV : Math.pow(PV, VV), new fV(this.r * VV, this.g * VV, this.b * VV, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new fV(uV(this.r), uV(this.g), uV(this.b), HV(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: mV,
      formatHex: mV,
      formatHex8: function() {
        return `#${sV(this.r)}${sV(this.g)}${sV(this.b)}${sV(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: KV,
      toString: KV
    })), tV(dV, (function(VV, eV, xV, JV) {
      return 1 === arguments.length ? IV(VV) : new dV(VV, eV, xV, null == JV ? 1 : JV)
    }), FV(TV, {
      brighter(VV) {
        return VV = null == VV ? AV : Math.pow(AV, VV), new dV(this.h, this.s, this.l * VV, this.opacity)
      },
      darker(VV) {
        return VV = null == VV ? PV : Math.pow(PV, VV), new dV(this.h, this.s, this.l * VV, this.opacity)
      },
      rgb() {
        var VV = this.h % 360 + 360 * (this.h < 0),
          eV = isNaN(VV) || isNaN(this.s) ? 0 : this.s,
          xV = this.l,
          JV = xV + (xV < .5 ? xV : 1 - xV) * eV,
          YV = 2 * xV - JV;
        return new fV(ee(VV >= 240 ? VV - 240 : VV + 120, YV, JV), ee(VV, YV, JV), ee(VV < 120 ? VV + 240 : VV - 120, YV, JV), this.opacity)
      },
      clamp() {
        return new dV(OV(this.h), Ve(this.s), Ve(this.l), HV(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const VV = HV(this.opacity);
        return `${1===VV?"hsl(":"hsla("}${OV(this.h)}, ${100*Ve(this.s)}%, ${100*Ve(this.l)}%${1===VV?")":`, ${VV})`}`
      }
    }));
    const Je = VV => () => VV;

    function Ye(VV, eV) {
      return function(xV) {
        return VV + xV * eV
      }
    }

    function Ue(VV) {
      return 1 === (VV = +VV) ? ye : function(eV, xV) {
        return xV - eV ? function(VV, eV, xV) {
          return VV = Math.pow(VV, xV), eV = Math.pow(eV, xV) - VV, xV = 1 / xV,
            function(JV) {
              return Math.pow(VV + JV * eV, xV)
            }
        }(eV, xV, VV) : Je(isNaN(eV) ? xV : eV)
      }
    }

    function ye(VV, eV) {
      var xV = eV - VV;
      return xV ? Ye(VV, xV) : Je(isNaN(VV) ? eV : VV)
    }
    const pe = function VV(eV) {
      var xV = Ue(eV);

      function JV(VV, eV) {
        var JV = xV((VV = LV(VV)).r, (eV = LV(eV)).r),
          YV = xV(VV.g, eV.g),
          UV = xV(VV.b, eV.b),
          yV = ye(VV.opacity, eV.opacity);
        return function(eV) {
          return VV.r = JV(eV), VV.g = YV(eV), VV.b = UV(eV), VV.opacity = yV(eV), VV + ""
        }
      }
      return JV.gamma = VV, JV
    }(1);

    function Qe(VV) {
      return function(eV) {
        var xV, JV, YV = eV.length,
          UV = new Array(YV),
          yV = new Array(YV),
          pV = new Array(YV);
        for (xV = 0; xV < YV; ++xV) JV = LV(eV[xV]), UV[xV] = JV.r || 0, yV[xV] = JV.g || 0, pV[xV] = JV.b || 0;
        return UV = VV(UV), yV = VV(yV), pV = VV(pV), JV.opacity = 1,
          function(VV) {
            return JV.r = UV(VV), JV.g = yV(VV), JV.b = pV(VV), JV + ""
          }
      }
    }
    Qe((function(VV) {
      var eV = VV.length - 1;
      return function(xV) {
        var JV = xV <= 0 ? xV = 0 : xV >= 1 ? (xV = 1, eV - 1) : Math.floor(xV * eV),
          YV = VV[JV],
          UV = VV[JV + 1],
          yV = JV > 0 ? VV[JV - 1] : 2 * YV - UV,
          pV = JV < eV - 1 ? VV[JV + 2] : 2 * UV - YV;
        return xe((xV - JV / eV) * eV, yV, YV, UV, pV)
      }
    })), Qe((function(VV) {
      var eV = VV.length;
      return function(xV) {
        var JV = Math.floor(((xV %= 1) < 0 ? ++xV : xV) * eV),
          YV = VV[(JV + eV - 1) % eV],
          UV = VV[JV % eV],
          yV = VV[(JV + 1) % eV],
          pV = VV[(JV + 2) % eV];
        return xe((xV - JV / eV) * eV, YV, UV, yV, pV)
      }
    }));

    function ne(VV, eV) {
      var xV, JV = eV ? eV.length : 0,
        YV = VV ? Math.min(JV, VV.length) : 0,
        UV = new Array(YV),
        yV = new Array(JV);
      for (xV = 0; xV < YV; ++xV) UV[xV] = Be(VV[xV], eV[xV]);
      for (; xV < JV; ++xV) yV[xV] = eV[xV];
      return function(VV) {
        for (xV = 0; xV < YV; ++xV) yV[xV] = UV[xV](VV);
        return yV
      }
    }

    function we(VV, eV) {
      var xV = new Date;
      return VV = +VV, eV = +eV,
        function(JV) {
          return xV.setTime(VV * (1 - JV) + eV * JV), xV
        }
    }

    function Ze(VV, eV) {
      return VV = +VV, eV = +eV,
        function(xV) {
          return VV * (1 - xV) + eV * xV
        }
    }

    function ve(VV, eV) {
      var xV, JV = {},
        YV = {};
      for (xV in null !== VV && "object" === typeof VV || (VV = {}), null !== eV && "object" === typeof eV || (eV = {}), eV) xV in VV ? JV[xV] = Be(VV[xV], eV[xV]) : YV[xV] = eV[xV];
      return function(VV) {
        for (xV in JV) YV[xV] = JV[xV](VV);
        return YV
      }
    }
    var re = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      ke = new RegExp(re.source, "g");

    function be(VV, eV) {
      var xV, JV, YV, UV = re.lastIndex = ke.lastIndex = 0,
        yV = -1,
        pV = [],
        QV = [];
      for (VV += "", eV += "";
        (xV = re.exec(VV)) && (JV = ke.exec(eV));)(YV = JV.index) > UV && (YV = eV.slice(UV, YV), pV[yV] ? pV[yV] += YV : pV[++yV] = YV), (xV = xV[0]) === (JV = JV[0]) ? pV[yV] ? pV[yV] += JV : pV[++yV] = JV : (pV[++yV] = null, QV.push({
        i: yV,
        x: Ze(xV, JV)
      })), UV = ke.lastIndex;
      return UV < eV.length && (YV = eV.slice(UV), pV[yV] ? pV[yV] += YV : pV[++yV] = YV), pV.length < 2 ? QV[0] ? function(VV) {
        return function(eV) {
          return VV(eV) + ""
        }
      }(QV[0].x) : function(VV) {
        return function() {
          return VV
        }
      }(eV) : (eV = QV.length, function(VV) {
        for (var xV, JV = 0; JV < eV; ++JV) pV[(xV = QV[JV]).i] = xV.x(VV);
        return pV.join("")
      })
    }

    function Ee(VV, eV) {
      eV || (eV = []);
      var xV, JV = VV ? Math.min(eV.length, VV.length) : 0,
        YV = eV.slice();
      return function(UV) {
        for (xV = 0; xV < JV; ++xV) YV[xV] = VV[xV] * (1 - UV) + eV[xV] * UV;
        return YV
      }
    }

    function Be(VV, eV) {
      var xV, JV, YV = typeof eV;
      return null == eV || "boolean" === YV ? Je(eV) : ("number" === YV ? Ze : "string" === YV ? (xV = cV(eV)) ? (eV = xV, pe) : be : eV instanceof cV ? pe : eV instanceof Date ? we : (JV = eV, !ArrayBuffer.isView(JV) || JV instanceof DataView ? Array.isArray(eV) ? ne : "function" !== typeof eV.valueOf && "function" !== typeof eV.toString || isNaN(eV) ? ve : Ze : Ee))(VV, eV)
    }

    function je(VV, eV) {
      return VV = +VV, eV = +eV,
        function(xV) {
          return Math.round(VV * (1 - xV) + eV * xV)
        }
    }

    function qe(VV) {
      return +VV
    }
    var te = [0, 1];

    function Fe(VV) {
      return VV
    }

    function Te(VV, eV) {
      return (eV -= VV = +VV) ? function(xV) {
        return (xV - VV) / eV
      } : (xV = isNaN(eV) ? NaN : .5, function() {
        return xV
      });
      var xV
    }

    function Pe(VV, eV, xV) {
      var JV = VV[0],
        YV = VV[1],
        UV = eV[0],
        yV = eV[1];
      return YV < JV ? (JV = Te(YV, JV), UV = xV(yV, UV)) : (JV = Te(JV, YV), UV = xV(UV, yV)),
        function(VV) {
          return UV(JV(VV))
        }
    }

    function Ae(VV, eV, xV) {
      var JV = Math.min(VV.length, eV.length) - 1,
        YV = new Array(JV),
        UV = new Array(JV),
        yV = -1;
      for (VV[JV] < VV[0] && (VV = VV.slice().reverse(), eV = eV.slice().reverse()); ++yV < JV;) YV[yV] = Te(VV[yV], VV[yV + 1]), UV[yV] = xV(eV[yV], eV[yV + 1]);
      return function(eV) {
        var xV = qV(VV, eV, 1, JV) - 1;
        return UV[xV](YV[xV](eV))
      }
    }

    function Ne(VV, eV) {
      return eV.domain(VV.domain()).range(VV.range()).interpolate(VV.interpolate()).clamp(VV.clamp()).unknown(VV.unknown())
    }

    function Xe() {
      var VV, eV, xV, JV, YV, UV, yV = te,
        pV = te,
        QV = Be,
        nV = Fe;

      function wV() {
        var VV = Math.min(yV.length, pV.length);
        return nV !== Fe && (nV = function(VV, eV) {
          var xV;
          return VV > eV && (xV = VV, VV = eV, eV = xV),
            function(xV) {
              return Math.max(VV, Math.min(eV, xV))
            }
        }(yV[0], yV[VV - 1])), JV = VV > 2 ? Ae : Pe, YV = UV = null, ZV
      }

      function ZV(eV) {
        return null == eV || isNaN(eV = +eV) ? xV : (YV || (YV = JV(yV.map(VV), pV, QV)))(VV(nV(eV)))
      }
      return ZV.invert = function(xV) {
          return nV(eV((UV || (UV = JV(pV, yV.map(VV), Ze)))(xV)))
        }, ZV.domain = function(VV) {
          return arguments.length ? (yV = Array.from(VV, qe), wV()) : yV.slice()
        }, ZV.range = function(VV) {
          return arguments.length ? (pV = Array.from(VV), wV()) : pV.slice()
        }, ZV.rangeRound = function(VV) {
          return pV = Array.from(VV), QV = je, wV()
        }, ZV.clamp = function(VV) {
          return arguments.length ? (nV = !!VV || Fe, wV()) : nV !== Fe
        }, ZV.interpolate = function(VV) {
          return arguments.length ? (QV = VV, wV()) : QV
        }, ZV.unknown = function(VV) {
          return arguments.length ? (xV = VV, ZV) : xV
        },
        function(xV, JV) {
          return VV = xV, eV = JV, wV()
        }
    }

    function Me() {
      return Xe()(Fe, Fe)
    }
    var ze, Ge = xV(6702),
      We = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Re(VV) {
      if (!(eV = We.exec(VV))) throw new Error("invalid format: " + VV);
      var eV;
      return new ge({
        fill: eV[1],
        align: eV[2],
        sign: eV[3],
        symbol: eV[4],
        zero: eV[5],
        width: eV[6],
        comma: eV[7],
        precision: eV[8] && eV[8].slice(1),
        trim: eV[9],
        type: eV[10]
      })
    }

    function ge(VV) {
      this.fill = void 0 === VV.fill ? " " : VV.fill + "", this.align = void 0 === VV.align ? ">" : VV.align + "", this.sign = void 0 === VV.sign ? "-" : VV.sign + "", this.symbol = void 0 === VV.symbol ? "" : VV.symbol + "", this.zero = !!VV.zero, this.width = void 0 === VV.width ? void 0 : +VV.width, this.comma = !!VV.comma, this.precision = void 0 === VV.precision ? void 0 : +VV.precision, this.trim = !!VV.trim, this.type = void 0 === VV.type ? "" : VV.type + ""
    }

    function De(VV, eV) {
      if (!isFinite(VV) || 0 === VV) return null;
      var xV = (VV = eV ? VV.toExponential(eV - 1) : VV.toExponential()).indexOf("e"),
        JV = VV.slice(0, xV);
      return [JV.length > 1 ? JV[0] + JV.slice(2) : JV, +VV.slice(xV + 1)]
    }

    function ie(VV) {
      return (VV = De(Math.abs(VV))) ? VV[1] : NaN
    }

    function Ce(VV, eV) {
      var xV = De(VV, eV);
      if (!xV) return VV + "";
      var JV = xV[0],
        YV = xV[1];
      return YV < 0 ? "0." + new Array(-YV).join("0") + JV : JV.length > YV + 1 ? JV.slice(0, YV + 1) + "." + JV.slice(YV + 1) : JV + new Array(YV - JV.length + 2).join("0")
    }
    Re.prototype = ge.prototype, ge.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const ae = {
      "%": (VV, eV) => (100 * VV).toFixed(eV),
      b: VV => Math.round(VV).toString(2),
      c: VV => VV + "",
      d: function(VV) {
        return Math.abs(VV = Math.round(VV)) >= 1e21 ? VV.toLocaleString("en").replace(/,/g, "") : VV.toString(10)
      },
      e: (VV, eV) => VV.toExponential(eV),
      f: (VV, eV) => VV.toFixed(eV),
      g: (VV, eV) => VV.toPrecision(eV),
      o: VV => Math.round(VV).toString(8),
      p: (VV, eV) => Ce(100 * VV, eV),
      r: Ce,
      s: function(VV, eV) {
        var xV = De(VV, eV);
        if (!xV) return ze = void 0, VV.toPrecision(eV);
        var JV = xV[0],
          YV = xV[1],
          UV = YV - (ze = 3 * Math.max(-8, Math.min(8, Math.floor(YV / 3)))) + 1,
          yV = JV.length;
        return UV === yV ? JV : UV > yV ? JV + new Array(UV - yV + 1).join("0") : UV > 0 ? JV.slice(0, UV) + "." + JV.slice(UV) : "0." + new Array(1 - UV).join("0") + De(VV, Math.max(0, eV + UV - 1))[0]
      },
      X: VV => Math.round(VV).toString(16).toUpperCase(),
      x: VV => Math.round(VV).toString(16)
    };

    function oe(VV) {
      return VV
    }
    var ce, he, le, Le = Array.prototype.map,
      fe = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function me(VV) {
      var eV, xV, JV = void 0 === VV.grouping || void 0 === VV.thousands ? oe : (eV = Le.call(VV.grouping, Number), xV = VV.thousands + "", function(VV, JV) {
          for (var YV = VV.length, UV = [], yV = 0, pV = eV[0], QV = 0; YV > 0 && pV > 0 && (QV + pV + 1 > JV && (pV = Math.max(1, JV - QV)), UV.push(VV.substring(YV -= pV, YV + pV)), !((QV += pV + 1) > JV));) pV = eV[yV = (yV + 1) % eV.length];
          return UV.reverse().join(xV)
        }),
        YV = void 0 === VV.currency ? "" : VV.currency[0] + "",
        UV = void 0 === VV.currency ? "" : VV.currency[1] + "",
        yV = void 0 === VV.decimal ? "." : VV.decimal + "",
        pV = void 0 === VV.numerals ? oe : function(VV) {
          return function(eV) {
            return eV.replace(/[0-9]/g, (function(eV) {
              return VV[+eV]
            }))
          }
        }(Le.call(VV.numerals, String)),
        QV = void 0 === VV.percent ? "%" : VV.percent + "",
        nV = void 0 === VV.minus ? "\u2212" : VV.minus + "",
        wV = void 0 === VV.nan ? "NaN" : VV.nan + "";

      function ZV(VV, eV) {
        var xV = (VV = Re(VV)).fill,
          ZV = VV.align,
          vV = VV.sign,
          rV = VV.symbol,
          kV = VV.zero,
          bV = VV.width,
          EV = VV.comma,
          BV = VV.precision,
          jV = VV.trim,
          qV = VV.type;
        "n" === qV ? (EV = !0, qV = "g") : ae[qV] || (void 0 === BV && (BV = 12), jV = !0, qV = "g"), (kV || "0" === xV && "=" === ZV) && (kV = !0, xV = "0", ZV = "=");
        var tV = (eV && void 0 !== eV.prefix ? eV.prefix : "") + ("$" === rV ? YV : "#" === rV && /[boxX]/.test(qV) ? "0" + qV.toLowerCase() : ""),
          FV = ("$" === rV ? UV : /[%p]/.test(qV) ? QV : "") + (eV && void 0 !== eV.suffix ? eV.suffix : ""),
          TV = ae[qV],
          PV = /[defgprs%]/.test(qV);

        function AV(VV) {
          var eV, YV, UV, QV = tV,
            rV = FV;
          if ("c" === qV) rV = TV(VV) + rV, VV = "";
          else {
            var AV = (VV = +VV) < 0 || 1 / VV < 0;
            if (VV = isNaN(VV) ? wV : TV(Math.abs(VV), BV), jV && (VV = function(VV) {
                VV: for (var eV, xV = VV.length, JV = 1, YV = -1; JV < xV; ++JV) switch (VV[JV]) {
                  case ".":
                    YV = eV = JV;
                    break;
                  case "0":
                    0 === YV && (YV = JV), eV = JV;
                    break;
                  default:
                    if (!+VV[JV]) break VV;
                    YV > 0 && (YV = 0)
                }
                return YV > 0 ? VV.slice(0, YV) + VV.slice(eV + 1) : VV
              }(VV)), AV && 0 === +VV && "+" !== vV && (AV = !1), QV = (AV ? "(" === vV ? vV : nV : "-" === vV || "(" === vV ? "" : vV) + QV, rV = ("s" !== qV || isNaN(VV) || void 0 === ze ? "" : fe[8 + ze / 3]) + rV + (AV && "(" === vV ? ")" : ""), PV)
              for (eV = -1, YV = VV.length; ++eV < YV;)
                if (48 > (UV = VV.charCodeAt(eV)) || UV > 57) {
                  rV = (46 === UV ? yV + VV.slice(eV + 1) : VV.slice(eV)) + rV, VV = VV.slice(0, eV);
                  break
                }
          }
          EV && !kV && (VV = JV(VV, 1 / 0));
          var NV = QV.length + VV.length + rV.length,
            XV = NV < bV ? new Array(bV - NV + 1).join(xV) : "";
          switch (EV && kV && (VV = JV(XV + VV, XV.length ? bV - rV.length : 1 / 0), XV = ""), ZV) {
            case "<":
              VV = QV + VV + rV + XV;
              break;
            case "=":
              VV = QV + XV + VV + rV;
              break;
            case "^":
              VV = XV.slice(0, NV = XV.length >> 1) + QV + VV + rV + XV.slice(NV);
              break;
            default:
              VV = XV + QV + VV + rV
          }
          return pV(VV)
        }
        return BV = void 0 === BV ? 6 : /[gprs]/.test(qV) ? Math.max(1, Math.min(21, BV)) : Math.max(0, Math.min(20, BV)), AV.toString = function() {
          return VV + ""
        }, AV
      }
      return {
        format: ZV,
        formatPrefix: function(VV, eV) {
          var xV = 3 * Math.max(-8, Math.min(8, Math.floor(ie(eV) / 3))),
            JV = Math.pow(10, -xV),
            YV = ZV(((VV = Re(VV)).type = "f", VV), {
              suffix: fe[8 + xV / 3]
            });
          return function(VV) {
            return YV(JV * VV)
          }
        }
      }
    }

    function Ke(VV, eV, xV, JV) {
      var YV, UV = ZV(VV, eV, xV);
      switch ((JV = Re(null == JV ? ",f" : JV)).type) {
        case "s":
          var yV = Math.max(Math.abs(VV), Math.abs(eV));
          return null != JV.precision || isNaN(YV = function(VV, eV) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(ie(eV) / 3))) - ie(Math.abs(VV)))
          }(UV, yV)) || (JV.precision = YV), le(JV, yV);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != JV.precision || isNaN(YV = function(VV, eV) {
            return VV = Math.abs(VV), eV = Math.abs(eV) - VV, Math.max(0, ie(eV) - ie(VV)) + 1
          }(UV, Math.max(Math.abs(VV), Math.abs(eV)))) || (JV.precision = YV - ("e" === JV.type));
          break;
        case "f":
        case "%":
          null != JV.precision || isNaN(YV = function(VV) {
            return Math.max(0, -ie(Math.abs(VV)))
          }(UV)) || (JV.precision = YV - 2 * ("%" === JV.type))
      }
      return he(JV)
    }

    function He(VV) {
      var eV = VV.domain;
      return VV.ticks = function(VV) {
        var xV = eV();
        return nV(xV[0], xV[xV.length - 1], null == VV ? 10 : VV)
      }, VV.tickFormat = function(VV, xV) {
        var JV = eV();
        return Ke(JV[0], JV[JV.length - 1], null == VV ? 10 : VV, xV)
      }, VV.nice = function(xV) {
        null == xV && (xV = 10);
        var JV, YV, UV = eV(),
          yV = 0,
          pV = UV.length - 1,
          QV = UV[yV],
          nV = UV[pV],
          ZV = 10;
        for (nV < QV && (YV = QV, QV = nV, nV = YV, YV = yV, yV = pV, pV = YV); ZV-- > 0;) {
          if ((YV = wV(QV, nV, xV)) === JV) return UV[yV] = QV, UV[pV] = nV, eV(UV);
          if (YV > 0) QV = Math.floor(QV / YV) * YV, nV = Math.ceil(nV / YV) * YV;
          else {
            if (!(YV < 0)) break;
            QV = Math.ceil(QV * YV) / YV, nV = Math.floor(nV * YV) / YV
          }
          JV = YV
        }
        return VV
      }, VV
    }

    function ue() {
      var VV = Me();
      return VV.copy = function() {
        return Ne(VV, ue())
      }, Ge.f.apply(VV, arguments), He(VV)
    }

    function se(VV) {
      var eV;

      function xV(VV) {
        return null == VV || isNaN(VV = +VV) ? eV : VV
      }
      return xV.invert = xV, xV.domain = xV.range = function(eV) {
        return arguments.length ? (VV = Array.from(eV, qe), xV) : VV.slice()
      }, xV.unknown = function(VV) {
        return arguments.length ? (eV = VV, xV) : eV
      }, xV.copy = function() {
        return se(VV).unknown(eV)
      }, VV = arguments.length ? Array.from(VV, qe) : [0, 1], He(xV)
    }

    function Se(VV, eV) {
      var xV, JV = 0,
        YV = (VV = VV.slice()).length - 1,
        UV = VV[JV],
        yV = VV[YV];
      return yV < UV && (xV = JV, JV = YV, YV = xV, xV = UV, UV = yV, yV = xV), VV[JV] = eV.floor(UV), VV[YV] = eV.ceil(yV), VV
    }

    function Ie(VV) {
      return Math.log(VV)
    }

    function de(VV) {
      return Math.exp(VV)
    }

    function Oe(VV) {
      return -Math.log(-VV)
    }

    function Vx(VV) {
      return -Math.exp(-VV)
    }

    function ex(VV) {
      return isFinite(VV) ? +("1e" + VV) : VV < 0 ? 0 : VV
    }

    function xx(VV) {
      return (eV, xV) => -VV(-eV, xV)
    }

    function Jx(VV) {
      const eV = VV(Ie, de),
        xV = eV.domain;
      let JV, YV, UV = 10;

      function yV() {
        return JV = function(VV) {
          return VV === Math.E ? Math.log : 10 === VV && Math.log10 || 2 === VV && Math.log2 || (VV = Math.log(VV), eV => Math.log(eV) / VV)
        }(UV), YV = function(VV) {
          return 10 === VV ? ex : VV === Math.E ? Math.exp : eV => Math.pow(VV, eV)
        }(UV), xV()[0] < 0 ? (JV = xx(JV), YV = xx(YV), VV(Oe, Vx)) : VV(Ie, de), eV
      }
      return eV.base = function(VV) {
        return arguments.length ? (UV = +VV, yV()) : UV
      }, eV.domain = function(VV) {
        return arguments.length ? (xV(VV), yV()) : xV()
      }, eV.ticks = VV => {
        const eV = xV();
        let yV = eV[0],
          pV = eV[eV.length - 1];
        const QV = pV < yV;
        QV && ([yV, pV] = [pV, yV]);
        let wV, ZV, vV = JV(yV),
          rV = JV(pV);
        const kV = null == VV ? 10 : +VV;
        let bV = [];
        if (!(UV % 1) && rV - vV < kV) {
          if (vV = Math.floor(vV), rV = Math.ceil(rV), yV > 0) {
            for (; vV <= rV; ++vV)
              for (wV = 1; wV < UV; ++wV)
                if (ZV = vV < 0 ? wV / YV(-vV) : wV * YV(vV), !(ZV < yV)) {
                  if (ZV > pV) break;
                  bV.push(ZV)
                }
          } else
            for (; vV <= rV; ++vV)
              for (wV = UV - 1; wV >= 1; --wV)
                if (ZV = vV > 0 ? wV / YV(-vV) : wV * YV(vV), !(ZV < yV)) {
                  if (ZV > pV) break;
                  bV.push(ZV)
                } 2 * bV.length < kV && (bV = nV(yV, pV, kV))
        } else bV = nV(vV, rV, Math.min(rV - vV, kV)).map(YV);
        return QV ? bV.reverse() : bV
      }, eV.tickFormat = (VV, xV) => {
        if (null == VV && (VV = 10), null == xV && (xV = 10 === UV ? "s" : ","), "function" !== typeof xV && (UV % 1 || null != (xV = Re(xV)).precision || (xV.trim = !0), xV = he(xV)), VV === 1 / 0) return xV;
        const yV = Math.max(1, UV * VV / eV.ticks().length);
        return VV => {
          let eV = VV / YV(Math.round(JV(VV)));
          return eV * UV < UV - .5 && (eV *= UV), eV <= yV ? xV(VV) : ""
        }
      }, eV.nice = () => xV(Se(xV(), {
        floor: VV => YV(Math.floor(JV(VV))),
        ceil: VV => YV(Math.ceil(JV(VV)))
      })), eV
    }

    function Yx() {
      const VV = Jx(Xe()).domain([1, 10]);
      return VV.copy = () => Ne(VV, Yx()).base(VV.base()), Ge.f.apply(VV, arguments), VV
    }

    function Ux(VV) {
      return function(eV) {
        return Math.sign(eV) * Math.log1p(Math.abs(eV / VV))
      }
    }

    function yx(VV) {
      return function(eV) {
        return Math.sign(eV) * Math.expm1(Math.abs(eV)) * VV
      }
    }

    function px(VV) {
      var eV = 1,
        xV = VV(Ux(eV), yx(eV));
      return xV.constant = function(xV) {
        return arguments.length ? VV(Ux(eV = +xV), yx(eV)) : eV
      }, He(xV)
    }

    function Qx() {
      var VV = px(Xe());
      return VV.copy = function() {
        return Ne(VV, Qx()).constant(VV.constant())
      }, Ge.f.apply(VV, arguments)
    }
    ce = me({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), he = ce.format, le = ce.formatPrefix;
    var nx = xV(6709);

    function wx(VV) {
      return function(eV) {
        return eV < 0 ? -Math.pow(-eV, VV) : Math.pow(eV, VV)
      }
    }

    function Zx(VV) {
      return VV < 0 ? -Math.sqrt(-VV) : Math.sqrt(VV)
    }

    function vx(VV) {
      return VV < 0 ? -VV * VV : VV * VV
    }

    function rx(VV) {
      var eV = VV(Fe, Fe),
        xV = 1;
      return eV.exponent = function(eV) {
        return arguments.length ? 1 === (xV = +eV) ? VV(Fe, Fe) : .5 === xV ? VV(Zx, vx) : VV(wx(xV), wx(1 / xV)) : xV
      }, He(eV)
    }

    function kx() {
      var VV = rx(Xe());
      return VV.copy = function() {
        return Ne(VV, kx()).exponent(VV.exponent())
      }, Ge.f.apply(VV, arguments), VV
    }

    function bx() {
      return kx.apply(null, arguments).exponent(.5)
    }

    function Ex(VV) {
      return Math.sign(VV) * VV * VV
    }

    function Bx() {
      var VV, eV = Me(),
        xV = [0, 1],
        JV = !1;

      function YV(xV) {
        var YV = function(VV) {
          return Math.sign(VV) * Math.sqrt(Math.abs(VV))
        }(eV(xV));
        return isNaN(YV) ? VV : JV ? Math.round(YV) : YV
      }
      return YV.invert = function(VV) {
        return eV.invert(Ex(VV))
      }, YV.domain = function(VV) {
        return arguments.length ? (eV.domain(VV), YV) : eV.domain()
      }, YV.range = function(VV) {
        return arguments.length ? (eV.range((xV = Array.from(VV, qe)).map(Ex)), YV) : xV.slice()
      }, YV.rangeRound = function(VV) {
        return YV.range(VV).round(!0)
      }, YV.round = function(VV) {
        return arguments.length ? (JV = !!VV, YV) : JV
      }, YV.clamp = function(VV) {
        return arguments.length ? (eV.clamp(VV), YV) : eV.clamp()
      }, YV.unknown = function(eV) {
        return arguments.length ? (VV = eV, YV) : VV
      }, YV.copy = function() {
        return Bx(eV.domain(), xV).round(JV).clamp(eV.clamp()).unknown(VV)
      }, Ge.f.apply(YV, arguments), He(YV)
    }

    function jx(VV, eV) {
      let xV;
      if (void 0 === eV)
        for (const JV of VV) null != JV && (xV < JV || void 0 === xV && JV >= JV) && (xV = JV);
      else {
        let JV = -1;
        for (let YV of VV) null != (YV = eV(YV, ++JV, VV)) && (xV < YV || void 0 === xV && YV >= YV) && (xV = YV)
      }
      return xV
    }

    function qx(VV, eV) {
      let xV;
      if (void 0 === eV)
        for (const JV of VV) null != JV && (xV > JV || void 0 === xV && JV >= JV) && (xV = JV);
      else {
        let JV = -1;
        for (let YV of VV) null != (YV = eV(YV, ++JV, VV)) && (xV > YV || void 0 === xV && YV >= YV) && (xV = YV)
      }
      return xV
    }

    function tx() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vV;
      if (VV === vV) return Fx;
      if ("function" !== typeof VV) throw new TypeError("compare is not a function");
      return (eV, xV) => {
        const JV = VV(eV, xV);
        return JV || 0 === JV ? JV : (0 === VV(xV, xV)) - (0 === VV(eV, eV))
      }
    }

    function Fx(VV, eV) {
      return (null == VV || !(VV >= VV)) - (null == eV || !(eV >= eV)) || (VV < eV ? -1 : VV > eV ? 1 : 0)
    }

    function Tx(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        YV = arguments.length > 4 ? arguments[4] : void 0;
      if (eV = Math.floor(eV), xV = Math.floor(Math.max(0, xV)), JV = Math.floor(Math.min(VV.length - 1, JV)), !(xV <= eV && eV <= JV)) return VV;
      for (YV = void 0 === YV ? Fx : tx(YV); JV > xV;) {
        if (JV - xV > 600) {
          const UV = JV - xV + 1,
            yV = eV - xV + 1,
            pV = Math.log(UV),
            QV = .5 * Math.exp(2 * pV / 3),
            nV = .5 * Math.sqrt(pV * QV * (UV - QV) / UV) * (yV - UV / 2 < 0 ? -1 : 1);
          Tx(VV, eV, Math.max(xV, Math.floor(eV - yV * QV / UV + nV)), Math.min(JV, Math.floor(eV + (UV - yV) * QV / UV + nV)), YV)
        }
        const UV = VV[eV];
        let yV = xV,
          pV = JV;
        for (Px(VV, xV, eV), YV(VV[JV], UV) > 0 && Px(VV, xV, JV); yV < pV;) {
          for (Px(VV, yV, pV), ++yV, --pV; YV(VV[yV], UV) < 0;) ++yV;
          for (; YV(VV[pV], UV) > 0;) --pV
        }
        0 === YV(VV[xV], UV) ? Px(VV, xV, pV) : (++pV, Px(VV, pV, JV)), pV <= eV && (xV = pV + 1), eV <= pV && (JV = pV - 1)
      }
      return VV
    }

    function Px(VV, eV, xV) {
      const JV = VV[eV];
      VV[eV] = VV[xV], VV[xV] = JV
    }

    function Ax(VV, eV, xV) {
      if (VV = Float64Array.from(function*(VV, eV) {
          if (void 0 === eV)
            for (let xV of VV) null != xV && (xV = +xV) >= xV && (yield xV);
          else {
            let xV = -1;
            for (let JV of VV) null != (JV = eV(JV, ++xV, VV)) && (JV = +JV) >= JV && (yield JV)
          }
        }(VV, xV)), (JV = VV.length) && !isNaN(eV = +eV)) {
        if (eV <= 0 || JV < 2) return qx(VV);
        if (eV >= 1) return jx(VV);
        var JV, YV = (JV - 1) * eV,
          UV = Math.floor(YV),
          yV = jx(Tx(VV, UV).subarray(0, UV + 1));
        return yV + (qx(VV.subarray(UV + 1)) - yV) * (YV - UV)
      }
    }

    function Nx(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EV;
      if ((JV = VV.length) && !isNaN(eV = +eV)) {
        if (eV <= 0 || JV < 2) return +xV(VV[0], 0, VV);
        if (eV >= 1) return +xV(VV[JV - 1], JV - 1, VV);
        var JV, YV = (JV - 1) * eV,
          UV = Math.floor(YV),
          yV = +xV(VV[UV], UV, VV);
        return yV + (+xV(VV[UV + 1], UV + 1, VV) - yV) * (YV - UV)
      }
    }

    function Xx() {
      var VV, eV = [],
        xV = [],
        JV = [];

      function YV() {
        var VV = 0,
          YV = Math.max(1, xV.length);
        for (JV = new Array(YV - 1); ++VV < YV;) JV[VV - 1] = Nx(eV, VV / YV);
        return UV
      }

      function UV(eV) {
        return null == eV || isNaN(eV = +eV) ? VV : xV[qV(JV, eV)]
      }
      return UV.invertExtent = function(VV) {
        var YV = xV.indexOf(VV);
        return YV < 0 ? [NaN, NaN] : [YV > 0 ? JV[YV - 1] : eV[0], YV < JV.length ? JV[YV] : eV[eV.length - 1]]
      }, UV.domain = function(VV) {
        if (!arguments.length) return eV.slice();
        eV = [];
        for (let xV of VV) null == xV || isNaN(xV = +xV) || eV.push(xV);
        return eV.sort(vV), YV()
      }, UV.range = function(VV) {
        return arguments.length ? (xV = Array.from(VV), YV()) : xV.slice()
      }, UV.unknown = function(eV) {
        return arguments.length ? (VV = eV, UV) : VV
      }, UV.quantiles = function() {
        return JV.slice()
      }, UV.copy = function() {
        return Xx().domain(eV).range(xV).unknown(VV)
      }, Ge.f.apply(UV, arguments)
    }

    function Mx() {
      var VV, eV = 0,
        xV = 1,
        JV = 1,
        YV = [.5],
        UV = [0, 1];

      function yV(eV) {
        return null != eV && eV <= eV ? UV[qV(YV, eV, 0, JV)] : VV
      }

      function pV() {
        var VV = -1;
        for (YV = new Array(JV); ++VV < JV;) YV[VV] = ((VV + 1) * xV - (VV - JV) * eV) / (JV + 1);
        return yV
      }
      return yV.domain = function(VV) {
        return arguments.length ? ([eV, xV] = VV, eV = +eV, xV = +xV, pV()) : [eV, xV]
      }, yV.range = function(VV) {
        return arguments.length ? (JV = (UV = Array.from(VV)).length - 1, pV()) : UV.slice()
      }, yV.invertExtent = function(VV) {
        var yV = UV.indexOf(VV);
        return yV < 0 ? [NaN, NaN] : yV < 1 ? [eV, YV[0]] : yV >= JV ? [YV[JV - 1], xV] : [YV[yV - 1], YV[yV]]
      }, yV.unknown = function(eV) {
        return arguments.length ? (VV = eV, yV) : yV
      }, yV.thresholds = function() {
        return YV.slice()
      }, yV.copy = function() {
        return Mx().domain([eV, xV]).range(UV).unknown(VV)
      }, Ge.f.apply(He(yV), arguments)
    }

    function zx() {
      var VV, eV = [.5],
        xV = [0, 1],
        JV = 1;

      function YV(YV) {
        return null != YV && YV <= YV ? xV[qV(eV, YV, 0, JV)] : VV
      }
      return YV.domain = function(VV) {
        return arguments.length ? (eV = Array.from(VV), JV = Math.min(eV.length, xV.length - 1), YV) : eV.slice()
      }, YV.range = function(VV) {
        return arguments.length ? (xV = Array.from(VV), JV = Math.min(eV.length, xV.length - 1), YV) : xV.slice()
      }, YV.invertExtent = function(VV) {
        var JV = xV.indexOf(VV);
        return [eV[JV - 1], eV[JV]]
      }, YV.unknown = function(eV) {
        return arguments.length ? (VV = eV, YV) : VV
      }, YV.copy = function() {
        return zx().domain(eV).range(xV).unknown(VV)
      }, Ge.f.apply(YV, arguments)
    }
    const Gx = 1e3,
      Wx = 6e4,
      Rx = 36e5,
      gx = 864e5,
      Dx = 6048e5,
      ix = 2592e6,
      Cx = 31536e6,
      ax = new Date,
      ox = new Date;

    function cx(VV, eV, xV, JV) {
      function YV(eV) {
        return VV(eV = 0 === arguments.length ? new Date : new Date(+eV)), eV
      }
      return YV.floor = eV => (VV(eV = new Date(+eV)), eV), YV.ceil = xV => (VV(xV = new Date(xV - 1)), eV(xV, 1), VV(xV), xV), YV.round = VV => {
        const eV = YV(VV),
          xV = YV.ceil(VV);
        return VV - eV < xV - VV ? eV : xV
      }, YV.offset = (VV, xV) => (eV(VV = new Date(+VV), null == xV ? 1 : Math.floor(xV)), VV), YV.range = (xV, JV, UV) => {
        const yV = [];
        if (xV = YV.ceil(xV), UV = null == UV ? 1 : Math.floor(UV), !(xV < JV) || !(UV > 0)) return yV;
        let pV;
        do {
          yV.push(pV = new Date(+xV)), eV(xV, UV), VV(xV)
        } while (pV < xV && xV < JV);
        return yV
      }, YV.filter = xV => cx((eV => {
        if (eV >= eV)
          for (; VV(eV), !xV(eV);) eV.setTime(eV - 1)
      }), ((VV, JV) => {
        if (VV >= VV)
          if (JV < 0)
            for (; ++JV <= 0;)
              for (; eV(VV, -1), !xV(VV););
          else
            for (; --JV >= 0;)
              for (; eV(VV, 1), !xV(VV););
      })), xV && (YV.count = (eV, JV) => (ax.setTime(+eV), ox.setTime(+JV), VV(ax), VV(ox), Math.floor(xV(ax, ox))), YV.every = VV => (VV = Math.floor(VV), isFinite(VV) && VV > 0 ? VV > 1 ? YV.filter(JV ? eV => JV(eV) % VV === 0 : eV => YV.count(0, eV) % VV === 0) : YV : null)), YV
    }
    const hx = cx((() => {}), ((VV, eV) => {
      VV.setTime(+VV + eV)
    }), ((VV, eV) => eV - VV));
    hx.every = VV => (VV = Math.floor(VV), isFinite(VV) && VV > 0 ? VV > 1 ? cx((eV => {
      eV.setTime(Math.floor(eV / VV) * VV)
    }), ((eV, xV) => {
      eV.setTime(+eV + xV * VV)
    }), ((eV, xV) => (xV - eV) / VV)) : hx : null);
    hx.range;
    const lx = cx((VV => {
        VV.setTime(VV - VV.getMilliseconds())
      }), ((VV, eV) => {
        VV.setTime(+VV + eV * Gx)
      }), ((VV, eV) => (eV - VV) / Gx), (VV => VV.getUTCSeconds())),
      Lx = (lx.range, cx((VV => {
        VV.setTime(VV - VV.getMilliseconds() - VV.getSeconds() * Gx)
      }), ((VV, eV) => {
        VV.setTime(+VV + eV * Wx)
      }), ((VV, eV) => (eV - VV) / Wx), (VV => VV.getMinutes()))),
      fx = (Lx.range, cx((VV => {
        VV.setUTCSeconds(0, 0)
      }), ((VV, eV) => {
        VV.setTime(+VV + eV * Wx)
      }), ((VV, eV) => (eV - VV) / Wx), (VV => VV.getUTCMinutes()))),
      mx = (fx.range, cx((VV => {
        VV.setTime(VV - VV.getMilliseconds() - VV.getSeconds() * Gx - VV.getMinutes() * Wx)
      }), ((VV, eV) => {
        VV.setTime(+VV + eV * Rx)
      }), ((VV, eV) => (eV - VV) / Rx), (VV => VV.getHours()))),
      Kx = (mx.range, cx((VV => {
        VV.setUTCMinutes(0, 0, 0)
      }), ((VV, eV) => {
        VV.setTime(+VV + eV * Rx)
      }), ((VV, eV) => (eV - VV) / Rx), (VV => VV.getUTCHours()))),
      Hx = (Kx.range, cx((VV => VV.setHours(0, 0, 0, 0)), ((VV, eV) => VV.setDate(VV.getDate() + eV)), ((VV, eV) => (eV - VV - (eV.getTimezoneOffset() - VV.getTimezoneOffset()) * Wx) / gx), (VV => VV.getDate() - 1))),
      ux = (Hx.range, cx((VV => {
        VV.setUTCHours(0, 0, 0, 0)
      }), ((VV, eV) => {
        VV.setUTCDate(VV.getUTCDate() + eV)
      }), ((VV, eV) => (eV - VV) / gx), (VV => VV.getUTCDate() - 1))),
      sx = (ux.range, cx((VV => {
        VV.setUTCHours(0, 0, 0, 0)
      }), ((VV, eV) => {
        VV.setUTCDate(VV.getUTCDate() + eV)
      }), ((VV, eV) => (eV - VV) / gx), (VV => Math.floor(VV / gx))));
    sx.range;

    function Sx(VV) {
      return cx((eV => {
        eV.setDate(eV.getDate() - (eV.getDay() + 7 - VV) % 7), eV.setHours(0, 0, 0, 0)
      }), ((VV, eV) => {
        VV.setDate(VV.getDate() + 7 * eV)
      }), ((VV, eV) => (eV - VV - (eV.getTimezoneOffset() - VV.getTimezoneOffset()) * Wx) / Dx))
    }
    const Ix = Sx(0),
      dx = Sx(1),
      Ox = Sx(2),
      VJ = Sx(3),
      eJ = Sx(4),
      xJ = Sx(5),
      JJ = Sx(6);
    Ix.range, dx.range, Ox.range, VJ.range, eJ.range, xJ.range, JJ.range;

    function YJ(VV) {
      return cx((eV => {
        eV.setUTCDate(eV.getUTCDate() - (eV.getUTCDay() + 7 - VV) % 7), eV.setUTCHours(0, 0, 0, 0)
      }), ((VV, eV) => {
        VV.setUTCDate(VV.getUTCDate() + 7 * eV)
      }), ((VV, eV) => (eV - VV) / Dx))
    }
    const UJ = YJ(0),
      yJ = YJ(1),
      pJ = YJ(2),
      QJ = YJ(3),
      nJ = YJ(4),
      wJ = YJ(5),
      ZJ = YJ(6),
      vJ = (UJ.range, yJ.range, pJ.range, QJ.range, nJ.range, wJ.range, ZJ.range, cx((VV => {
        VV.setDate(1), VV.setHours(0, 0, 0, 0)
      }), ((VV, eV) => {
        VV.setMonth(VV.getMonth() + eV)
      }), ((VV, eV) => eV.getMonth() - VV.getMonth() + 12 * (eV.getFullYear() - VV.getFullYear())), (VV => VV.getMonth()))),
      rJ = (vJ.range, cx((VV => {
        VV.setUTCDate(1), VV.setUTCHours(0, 0, 0, 0)
      }), ((VV, eV) => {
        VV.setUTCMonth(VV.getUTCMonth() + eV)
      }), ((VV, eV) => eV.getUTCMonth() - VV.getUTCMonth() + 12 * (eV.getUTCFullYear() - VV.getUTCFullYear())), (VV => VV.getUTCMonth()))),
      kJ = (rJ.range, cx((VV => {
        VV.setMonth(0, 1), VV.setHours(0, 0, 0, 0)
      }), ((VV, eV) => {
        VV.setFullYear(VV.getFullYear() + eV)
      }), ((VV, eV) => eV.getFullYear() - VV.getFullYear()), (VV => VV.getFullYear())));
    kJ.every = VV => isFinite(VV = Math.floor(VV)) && VV > 0 ? cx((eV => {
      eV.setFullYear(Math.floor(eV.getFullYear() / VV) * VV), eV.setMonth(0, 1), eV.setHours(0, 0, 0, 0)
    }), ((eV, xV) => {
      eV.setFullYear(eV.getFullYear() + xV * VV)
    })) : null;
    kJ.range;
    const bJ = cx((VV => {
      VV.setUTCMonth(0, 1), VV.setUTCHours(0, 0, 0, 0)
    }), ((VV, eV) => {
      VV.setUTCFullYear(VV.getUTCFullYear() + eV)
    }), ((VV, eV) => eV.getUTCFullYear() - VV.getUTCFullYear()), (VV => VV.getUTCFullYear()));
    bJ.every = VV => isFinite(VV = Math.floor(VV)) && VV > 0 ? cx((eV => {
      eV.setUTCFullYear(Math.floor(eV.getUTCFullYear() / VV) * VV), eV.setUTCMonth(0, 1), eV.setUTCHours(0, 0, 0, 0)
    }), ((eV, xV) => {
      eV.setUTCFullYear(eV.getUTCFullYear() + xV * VV)
    })) : null;
    bJ.range;

    function EJ(VV, eV, xV, JV, YV, UV) {
      const yV = [
        [lx, 1, Gx],
        [lx, 5, 5e3],
        [lx, 15, 15e3],
        [lx, 30, 3e4],
        [UV, 1, Wx],
        [UV, 5, 3e5],
        [UV, 15, 9e5],
        [UV, 30, 18e5],
        [YV, 1, Rx],
        [YV, 3, 108e5],
        [YV, 6, 216e5],
        [YV, 12, 432e5],
        [JV, 1, gx],
        [JV, 2, 1728e5],
        [xV, 1, Dx],
        [eV, 1, ix],
        [eV, 3, 7776e6],
        [VV, 1, Cx]
      ];

      function pV(eV, xV, JV) {
        const YV = Math.abs(xV - eV) / JV,
          UV = kV((VV => {
            let [, , eV] = VV;
            return eV
          })).right(yV, YV);
        if (UV === yV.length) return VV.every(ZV(eV / Cx, xV / Cx, JV));
        if (0 === UV) return hx.every(Math.max(ZV(eV, xV, JV), 1));
        const [pV, QV] = yV[YV / yV[UV - 1][2] < yV[UV][2] / YV ? UV - 1 : UV];
        return pV.every(QV)
      }
      return [function(VV, eV, xV) {
        const JV = eV < VV;
        JV && ([VV, eV] = [eV, VV]);
        const YV = xV && "function" === typeof xV.range ? xV : pV(VV, eV, xV),
          UV = YV ? YV.range(VV, +eV + 1) : [];
        return JV ? UV.reverse() : UV
      }, pV]
    }
    const [BJ, jJ] = EJ(bJ, rJ, UJ, sx, Kx, fx), [qJ, tJ] = EJ(kJ, vJ, Ix, Hx, mx, Lx);

    function FJ(VV) {
      if (0 <= VV.y && VV.y < 100) {
        var eV = new Date(-1, VV.m, VV.d, VV.H, VV.M, VV.S, VV.L);
        return eV.setFullYear(VV.y), eV
      }
      return new Date(VV.y, VV.m, VV.d, VV.H, VV.M, VV.S, VV.L)
    }

    function TJ(VV) {
      if (0 <= VV.y && VV.y < 100) {
        var eV = new Date(Date.UTC(-1, VV.m, VV.d, VV.H, VV.M, VV.S, VV.L));
        return eV.setUTCFullYear(VV.y), eV
      }
      return new Date(Date.UTC(VV.y, VV.m, VV.d, VV.H, VV.M, VV.S, VV.L))
    }

    function PJ(VV, eV, xV) {
      return {
        y: VV,
        m: eV,
        d: xV,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var AJ, NJ, XJ, MJ = {
        "-": "",
        _: " ",
        0: "0"
      },
      zJ = /^\s*\d+/,
      GJ = /^%/,
      WJ = /[\\^$*+?|[\]().{}]/g;

    function RJ(VV, eV, xV) {
      var JV = VV < 0 ? "-" : "",
        YV = (JV ? -VV : VV) + "",
        UV = YV.length;
      return JV + (UV < xV ? new Array(xV - UV + 1).join(eV) + YV : YV)
    }

    function gJ(VV) {
      return VV.replace(WJ, "\\$&")
    }

    function DJ(VV) {
      return new RegExp("^(?:" + VV.map(gJ).join("|") + ")", "i")
    }

    function iJ(VV) {
      return new Map(VV.map(((VV, eV) => [VV.toLowerCase(), eV])))
    }

    function CJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 1));
      return JV ? (VV.w = +JV[0], xV + JV[0].length) : -1
    }

    function aJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 1));
      return JV ? (VV.u = +JV[0], xV + JV[0].length) : -1
    }

    function oJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 2));
      return JV ? (VV.U = +JV[0], xV + JV[0].length) : -1
    }

    function cJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 2));
      return JV ? (VV.V = +JV[0], xV + JV[0].length) : -1
    }

    function hJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 2));
      return JV ? (VV.W = +JV[0], xV + JV[0].length) : -1
    }

    function lJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 4));
      return JV ? (VV.y = +JV[0], xV + JV[0].length) : -1
    }

    function LJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 2));
      return JV ? (VV.y = +JV[0] + (+JV[0] > 68 ? 1900 : 2e3), xV + JV[0].length) : -1
    }

    function fJ(VV, eV, xV) {
      var JV = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(eV.slice(xV, xV + 6));
      return JV ? (VV.Z = JV[1] ? 0 : -(JV[2] + (JV[3] || "00")), xV + JV[0].length) : -1
    }

    function mJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 1));
      return JV ? (VV.q = 3 * JV[0] - 3, xV + JV[0].length) : -1
    }

    function KJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 2));
      return JV ? (VV.m = JV[0] - 1, xV + JV[0].length) : -1
    }

    function HJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 2));
      return JV ? (VV.d = +JV[0], xV + JV[0].length) : -1
    }

    function uJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 3));
      return JV ? (VV.m = 0, VV.d = +JV[0], xV + JV[0].length) : -1
    }

    function sJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 2));
      return JV ? (VV.H = +JV[0], xV + JV[0].length) : -1
    }

    function SJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 2));
      return JV ? (VV.M = +JV[0], xV + JV[0].length) : -1
    }

    function IJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 2));
      return JV ? (VV.S = +JV[0], xV + JV[0].length) : -1
    }

    function dJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 3));
      return JV ? (VV.L = +JV[0], xV + JV[0].length) : -1
    }

    function OJ(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV, xV + 6));
      return JV ? (VV.L = Math.floor(JV[0] / 1e3), xV + JV[0].length) : -1
    }

    function VY(VV, eV, xV) {
      var JV = GJ.exec(eV.slice(xV, xV + 1));
      return JV ? xV + JV[0].length : -1
    }

    function eY(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV));
      return JV ? (VV.Q = +JV[0], xV + JV[0].length) : -1
    }

    function xY(VV, eV, xV) {
      var JV = zJ.exec(eV.slice(xV));
      return JV ? (VV.s = +JV[0], xV + JV[0].length) : -1
    }

    function JY(VV, eV) {
      return RJ(VV.getDate(), eV, 2)
    }

    function YY(VV, eV) {
      return RJ(VV.getHours(), eV, 2)
    }

    function UY(VV, eV) {
      return RJ(VV.getHours() % 12 || 12, eV, 2)
    }

    function yY(VV, eV) {
      return RJ(1 + Hx.count(kJ(VV), VV), eV, 3)
    }

    function pY(VV, eV) {
      return RJ(VV.getMilliseconds(), eV, 3)
    }

    function QY(VV, eV) {
      return pY(VV, eV) + "000"
    }

    function nY(VV, eV) {
      return RJ(VV.getMonth() + 1, eV, 2)
    }

    function wY(VV, eV) {
      return RJ(VV.getMinutes(), eV, 2)
    }

    function ZY(VV, eV) {
      return RJ(VV.getSeconds(), eV, 2)
    }

    function vY(VV) {
      var eV = VV.getDay();
      return 0 === eV ? 7 : eV
    }

    function rY(VV, eV) {
      return RJ(Ix.count(kJ(VV) - 1, VV), eV, 2)
    }

    function kY(VV) {
      var eV = VV.getDay();
      return eV >= 4 || 0 === eV ? eJ(VV) : eJ.ceil(VV)
    }

    function bY(VV, eV) {
      return VV = kY(VV), RJ(eJ.count(kJ(VV), VV) + (4 === kJ(VV).getDay()), eV, 2)
    }

    function EY(VV) {
      return VV.getDay()
    }

    function BY(VV, eV) {
      return RJ(dx.count(kJ(VV) - 1, VV), eV, 2)
    }

    function jY(VV, eV) {
      return RJ(VV.getFullYear() % 100, eV, 2)
    }

    function qY(VV, eV) {
      return RJ((VV = kY(VV)).getFullYear() % 100, eV, 2)
    }

    function tY(VV, eV) {
      return RJ(VV.getFullYear() % 1e4, eV, 4)
    }

    function FY(VV, eV) {
      var xV = VV.getDay();
      return RJ((VV = xV >= 4 || 0 === xV ? eJ(VV) : eJ.ceil(VV)).getFullYear() % 1e4, eV, 4)
    }

    function TY(VV) {
      var eV = VV.getTimezoneOffset();
      return (eV > 0 ? "-" : (eV *= -1, "+")) + RJ(eV / 60 | 0, "0", 2) + RJ(eV % 60, "0", 2)
    }

    function PY(VV, eV) {
      return RJ(VV.getUTCDate(), eV, 2)
    }

    function AY(VV, eV) {
      return RJ(VV.getUTCHours(), eV, 2)
    }

    function NY(VV, eV) {
      return RJ(VV.getUTCHours() % 12 || 12, eV, 2)
    }

    function XY(VV, eV) {
      return RJ(1 + ux.count(bJ(VV), VV), eV, 3)
    }

    function MY(VV, eV) {
      return RJ(VV.getUTCMilliseconds(), eV, 3)
    }

    function zY(VV, eV) {
      return MY(VV, eV) + "000"
    }

    function GY(VV, eV) {
      return RJ(VV.getUTCMonth() + 1, eV, 2)
    }

    function WY(VV, eV) {
      return RJ(VV.getUTCMinutes(), eV, 2)
    }

    function RY(VV, eV) {
      return RJ(VV.getUTCSeconds(), eV, 2)
    }

    function gY(VV) {
      var eV = VV.getUTCDay();
      return 0 === eV ? 7 : eV
    }

    function DY(VV, eV) {
      return RJ(UJ.count(bJ(VV) - 1, VV), eV, 2)
    }

    function iY(VV) {
      var eV = VV.getUTCDay();
      return eV >= 4 || 0 === eV ? nJ(VV) : nJ.ceil(VV)
    }

    function CY(VV, eV) {
      return VV = iY(VV), RJ(nJ.count(bJ(VV), VV) + (4 === bJ(VV).getUTCDay()), eV, 2)
    }

    function aY(VV) {
      return VV.getUTCDay()
    }

    function oY(VV, eV) {
      return RJ(yJ.count(bJ(VV) - 1, VV), eV, 2)
    }

    function cY(VV, eV) {
      return RJ(VV.getUTCFullYear() % 100, eV, 2)
    }

    function hY(VV, eV) {
      return RJ((VV = iY(VV)).getUTCFullYear() % 100, eV, 2)
    }

    function lY(VV, eV) {
      return RJ(VV.getUTCFullYear() % 1e4, eV, 4)
    }

    function LY(VV, eV) {
      var xV = VV.getUTCDay();
      return RJ((VV = xV >= 4 || 0 === xV ? nJ(VV) : nJ.ceil(VV)).getUTCFullYear() % 1e4, eV, 4)
    }

    function fY() {
      return "+0000"
    }

    function mY() {
      return "%"
    }

    function KY(VV) {
      return +VV
    }

    function HY(VV) {
      return Math.floor(+VV / 1e3)
    }

    function uY(VV) {
      return new Date(VV)
    }

    function sY(VV) {
      return VV instanceof Date ? +VV : +new Date(+VV)
    }

    function SY(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV) {
      var wV = Me(),
        ZV = wV.invert,
        vV = wV.domain,
        rV = nV(".%L"),
        kV = nV(":%S"),
        bV = nV("%I:%M"),
        EV = nV("%I %p"),
        BV = nV("%a %d"),
        jV = nV("%b %d"),
        qV = nV("%B"),
        tV = nV("%Y");

      function FV(VV) {
        return (QV(VV) < VV ? rV : pV(VV) < VV ? kV : yV(VV) < VV ? bV : UV(VV) < VV ? EV : JV(VV) < VV ? YV(VV) < VV ? BV : jV : xV(VV) < VV ? qV : tV)(VV)
      }
      return wV.invert = function(VV) {
        return new Date(ZV(VV))
      }, wV.domain = function(VV) {
        return arguments.length ? vV(Array.from(VV, sY)) : vV().map(uY)
      }, wV.ticks = function(eV) {
        var xV = vV();
        return VV(xV[0], xV[xV.length - 1], null == eV ? 10 : eV)
      }, wV.tickFormat = function(VV, eV) {
        return null == eV ? FV : nV(eV)
      }, wV.nice = function(VV) {
        var xV = vV();
        return VV && "function" === typeof VV.range || (VV = eV(xV[0], xV[xV.length - 1], null == VV ? 10 : VV)), VV ? vV(Se(xV, VV)) : wV
      }, wV.copy = function() {
        return Ne(wV, SY(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV))
      }, wV
    }

    function IY() {
      return Ge.f.apply(SY(qJ, tJ, kJ, vJ, Ix, Hx, mx, Lx, lx, NJ).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function dY() {
      return Ge.f.apply(SY(BJ, jJ, bJ, rJ, UJ, ux, Kx, fx, lx, XJ).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function OY() {
      var VV, eV, xV, JV, YV, UV = 0,
        yV = 1,
        pV = Fe,
        QV = !1;

      function nV(eV) {
        return null == eV || isNaN(eV = +eV) ? YV : pV(0 === xV ? .5 : (eV = (JV(eV) - VV) * xV, QV ? Math.max(0, Math.min(1, eV)) : eV))
      }

      function wV(VV) {
        return function(eV) {
          var xV, JV;
          return arguments.length ? ([xV, JV] = eV, pV = VV(xV, JV), nV) : [pV(0), pV(1)]
        }
      }
      return nV.domain = function(YV) {
          return arguments.length ? ([UV, yV] = YV, VV = JV(UV = +UV), eV = JV(yV = +yV), xV = VV === eV ? 0 : 1 / (eV - VV), nV) : [UV, yV]
        }, nV.clamp = function(VV) {
          return arguments.length ? (QV = !!VV, nV) : QV
        }, nV.interpolator = function(VV) {
          return arguments.length ? (pV = VV, nV) : pV
        }, nV.range = wV(Be), nV.rangeRound = wV(je), nV.unknown = function(VV) {
          return arguments.length ? (YV = VV, nV) : YV
        },
        function(YV) {
          return JV = YV, VV = YV(UV), eV = YV(yV), xV = VV === eV ? 0 : 1 / (eV - VV), nV
        }
    }

    function VU(VV, eV) {
      return eV.domain(VV.domain()).interpolator(VV.interpolator()).clamp(VV.clamp()).unknown(VV.unknown())
    }

    function eU() {
      var VV = He(OY()(Fe));
      return VV.copy = function() {
        return VU(VV, eU())
      }, Ge.e.apply(VV, arguments)
    }

    function xU() {
      var VV = Jx(OY()).domain([1, 10]);
      return VV.copy = function() {
        return VU(VV, xU()).base(VV.base())
      }, Ge.e.apply(VV, arguments)
    }

    function JU() {
      var VV = px(OY());
      return VV.copy = function() {
        return VU(VV, JU()).constant(VV.constant())
      }, Ge.e.apply(VV, arguments)
    }

    function YU() {
      var VV = rx(OY());
      return VV.copy = function() {
        return VU(VV, YU()).exponent(VV.exponent())
      }, Ge.e.apply(VV, arguments)
    }

    function UU() {
      return YU.apply(null, arguments).exponent(.5)
    }

    function yU() {
      var VV = [],
        eV = Fe;

      function xV(xV) {
        if (null != xV && !isNaN(xV = +xV)) return eV((qV(VV, xV, 1) - 1) / (VV.length - 1))
      }
      return xV.domain = function(eV) {
        if (!arguments.length) return VV.slice();
        VV = [];
        for (let xV of eV) null == xV || isNaN(xV = +xV) || VV.push(xV);
        return VV.sort(vV), xV
      }, xV.interpolator = function(VV) {
        return arguments.length ? (eV = VV, xV) : eV
      }, xV.range = function() {
        return VV.map(((xV, JV) => eV(JV / (VV.length - 1))))
      }, xV.quantiles = function(eV) {
        return Array.from({
          length: eV + 1
        }, ((xV, JV) => Ax(VV, JV / eV)))
      }, xV.copy = function() {
        return yU(eV).domain(VV)
      }, Ge.e.apply(xV, arguments)
    }

    function pU() {
      var VV, eV, xV, JV, YV, UV, yV, pV = 0,
        QV = .5,
        nV = 1,
        wV = 1,
        ZV = Fe,
        vV = !1;

      function rV(VV) {
        return isNaN(VV = +VV) ? yV : (VV = .5 + ((VV = +UV(VV)) - eV) * (wV * VV < wV * eV ? JV : YV), ZV(vV ? Math.max(0, Math.min(1, VV)) : VV))
      }

      function kV(VV) {
        return function(eV) {
          var xV, JV, YV;
          return arguments.length ? ([xV, JV, YV] = eV, ZV = function(VV, eV) {
            void 0 === eV && (eV = VV, VV = Be);
            for (var xV = 0, JV = eV.length - 1, YV = eV[0], UV = new Array(JV < 0 ? 0 : JV); xV < JV;) UV[xV] = VV(YV, YV = eV[++xV]);
            return function(VV) {
              var eV = Math.max(0, Math.min(JV - 1, Math.floor(VV *= JV)));
              return UV[eV](VV - eV)
            }
          }(VV, [xV, JV, YV]), rV) : [ZV(0), ZV(.5), ZV(1)]
        }
      }
      return rV.domain = function(yV) {
          return arguments.length ? ([pV, QV, nV] = yV, VV = UV(pV = +pV), eV = UV(QV = +QV), xV = UV(nV = +nV), JV = VV === eV ? 0 : .5 / (eV - VV), YV = eV === xV ? 0 : .5 / (xV - eV), wV = eV < VV ? -1 : 1, rV) : [pV, QV, nV]
        }, rV.clamp = function(VV) {
          return arguments.length ? (vV = !!VV, rV) : vV
        }, rV.interpolator = function(VV) {
          return arguments.length ? (ZV = VV, rV) : ZV
        }, rV.range = kV(Be), rV.rangeRound = kV(je), rV.unknown = function(VV) {
          return arguments.length ? (yV = VV, rV) : yV
        },
        function(yV) {
          return UV = yV, VV = yV(pV), eV = yV(QV), xV = yV(nV), JV = VV === eV ? 0 : .5 / (eV - VV), YV = eV === xV ? 0 : .5 / (xV - eV), wV = eV < VV ? -1 : 1, rV
        }
    }

    function QU() {
      var VV = He(pU()(Fe));
      return VV.copy = function() {
        return VU(VV, QU())
      }, Ge.e.apply(VV, arguments)
    }

    function nU() {
      var VV = Jx(pU()).domain([.1, 1, 10]);
      return VV.copy = function() {
        return VU(VV, nU()).base(VV.base())
      }, Ge.e.apply(VV, arguments)
    }

    function wU() {
      var VV = px(pU());
      return VV.copy = function() {
        return VU(VV, wU()).constant(VV.constant())
      }, Ge.e.apply(VV, arguments)
    }

    function ZU() {
      var VV = rx(pU());
      return VV.copy = function() {
        return VU(VV, ZU()).exponent(VV.exponent())
      }, Ge.e.apply(VV, arguments)
    }

    function vU() {
      return ZU.apply(null, arguments).exponent(.5)
    }

    function rU(VV, eV) {
      if ((YV = VV.length) > 1)
        for (var xV, JV, YV, UV = 1, yV = VV[eV[0]], pV = yV.length; UV < YV; ++UV)
          for (JV = yV, yV = VV[eV[UV]], xV = 0; xV < pV; ++xV) yV[xV][1] += yV[xV][0] = isNaN(JV[xV][1]) ? JV[xV][0] : JV[xV][1]
    }! function(VV) {
      AJ = function(VV) {
        var eV = VV.dateTime,
          xV = VV.date,
          JV = VV.time,
          YV = VV.periods,
          UV = VV.days,
          yV = VV.shortDays,
          pV = VV.months,
          QV = VV.shortMonths,
          nV = DJ(YV),
          wV = iJ(YV),
          ZV = DJ(UV),
          vV = iJ(UV),
          rV = DJ(yV),
          kV = iJ(yV),
          bV = DJ(pV),
          EV = iJ(pV),
          BV = DJ(QV),
          jV = iJ(QV),
          qV = {
            a: function(VV) {
              return yV[VV.getDay()]
            },
            A: function(VV) {
              return UV[VV.getDay()]
            },
            b: function(VV) {
              return QV[VV.getMonth()]
            },
            B: function(VV) {
              return pV[VV.getMonth()]
            },
            c: null,
            d: JY,
            e: JY,
            f: QY,
            g: qY,
            G: FY,
            H: YY,
            I: UY,
            j: yY,
            L: pY,
            m: nY,
            M: wY,
            p: function(VV) {
              return YV[+(VV.getHours() >= 12)]
            },
            q: function(VV) {
              return 1 + ~~(VV.getMonth() / 3)
            },
            Q: KY,
            s: HY,
            S: ZY,
            u: vY,
            U: rY,
            V: bY,
            w: EY,
            W: BY,
            x: null,
            X: null,
            y: jY,
            Y: tY,
            Z: TY,
            "%": mY
          },
          tV = {
            a: function(VV) {
              return yV[VV.getUTCDay()]
            },
            A: function(VV) {
              return UV[VV.getUTCDay()]
            },
            b: function(VV) {
              return QV[VV.getUTCMonth()]
            },
            B: function(VV) {
              return pV[VV.getUTCMonth()]
            },
            c: null,
            d: PY,
            e: PY,
            f: zY,
            g: hY,
            G: LY,
            H: AY,
            I: NY,
            j: XY,
            L: MY,
            m: GY,
            M: WY,
            p: function(VV) {
              return YV[+(VV.getUTCHours() >= 12)]
            },
            q: function(VV) {
              return 1 + ~~(VV.getUTCMonth() / 3)
            },
            Q: KY,
            s: HY,
            S: RY,
            u: gY,
            U: DY,
            V: CY,
            w: aY,
            W: oY,
            x: null,
            X: null,
            y: cY,
            Y: lY,
            Z: fY,
            "%": mY
          },
          FV = {
            a: function(VV, eV, xV) {
              var JV = rV.exec(eV.slice(xV));
              return JV ? (VV.w = kV.get(JV[0].toLowerCase()), xV + JV[0].length) : -1
            },
            A: function(VV, eV, xV) {
              var JV = ZV.exec(eV.slice(xV));
              return JV ? (VV.w = vV.get(JV[0].toLowerCase()), xV + JV[0].length) : -1
            },
            b: function(VV, eV, xV) {
              var JV = BV.exec(eV.slice(xV));
              return JV ? (VV.m = jV.get(JV[0].toLowerCase()), xV + JV[0].length) : -1
            },
            B: function(VV, eV, xV) {
              var JV = bV.exec(eV.slice(xV));
              return JV ? (VV.m = EV.get(JV[0].toLowerCase()), xV + JV[0].length) : -1
            },
            c: function(VV, xV, JV) {
              return AV(VV, eV, xV, JV)
            },
            d: HJ,
            e: HJ,
            f: OJ,
            g: LJ,
            G: lJ,
            H: sJ,
            I: sJ,
            j: uJ,
            L: dJ,
            m: KJ,
            M: SJ,
            p: function(VV, eV, xV) {
              var JV = nV.exec(eV.slice(xV));
              return JV ? (VV.p = wV.get(JV[0].toLowerCase()), xV + JV[0].length) : -1
            },
            q: mJ,
            Q: eY,
            s: xY,
            S: IJ,
            u: aJ,
            U: oJ,
            V: cJ,
            w: CJ,
            W: hJ,
            x: function(VV, eV, JV) {
              return AV(VV, xV, eV, JV)
            },
            X: function(VV, eV, xV) {
              return AV(VV, JV, eV, xV)
            },
            y: LJ,
            Y: lJ,
            Z: fJ,
            "%": VY
          };

        function TV(VV, eV) {
          return function(xV) {
            var JV, YV, UV, yV = [],
              pV = -1,
              QV = 0,
              nV = VV.length;
            for (xV instanceof Date || (xV = new Date(+xV)); ++pV < nV;) 37 === VV.charCodeAt(pV) && (yV.push(VV.slice(QV, pV)), null != (YV = MJ[JV = VV.charAt(++pV)]) ? JV = VV.charAt(++pV) : YV = "e" === JV ? " " : "0", (UV = eV[JV]) && (JV = UV(xV, YV)), yV.push(JV), QV = pV + 1);
            return yV.push(VV.slice(QV, pV)), yV.join("")
          }
        }

        function PV(VV, eV) {
          return function(xV) {
            var JV, YV, UV = PJ(1900, void 0, 1);
            if (AV(UV, VV, xV += "", 0) != xV.length) return null;
            if ("Q" in UV) return new Date(UV.Q);
            if ("s" in UV) return new Date(1e3 * UV.s + ("L" in UV ? UV.L : 0));
            if (eV && !("Z" in UV) && (UV.Z = 0), "p" in UV && (UV.H = UV.H % 12 + 12 * UV.p), void 0 === UV.m && (UV.m = "q" in UV ? UV.q : 0), "V" in UV) {
              if (UV.V < 1 || UV.V > 53) return null;
              "w" in UV || (UV.w = 1), "Z" in UV ? (YV = (JV = TJ(PJ(UV.y, 0, 1))).getUTCDay(), JV = YV > 4 || 0 === YV ? yJ.ceil(JV) : yJ(JV), JV = ux.offset(JV, 7 * (UV.V - 1)), UV.y = JV.getUTCFullYear(), UV.m = JV.getUTCMonth(), UV.d = JV.getUTCDate() + (UV.w + 6) % 7) : (YV = (JV = FJ(PJ(UV.y, 0, 1))).getDay(), JV = YV > 4 || 0 === YV ? dx.ceil(JV) : dx(JV), JV = Hx.offset(JV, 7 * (UV.V - 1)), UV.y = JV.getFullYear(), UV.m = JV.getMonth(), UV.d = JV.getDate() + (UV.w + 6) % 7)
            } else("W" in UV || "U" in UV) && ("w" in UV || (UV.w = "u" in UV ? UV.u % 7 : "W" in UV ? 1 : 0), YV = "Z" in UV ? TJ(PJ(UV.y, 0, 1)).getUTCDay() : FJ(PJ(UV.y, 0, 1)).getDay(), UV.m = 0, UV.d = "W" in UV ? (UV.w + 6) % 7 + 7 * UV.W - (YV + 5) % 7 : UV.w + 7 * UV.U - (YV + 6) % 7);
            return "Z" in UV ? (UV.H += UV.Z / 100 | 0, UV.M += UV.Z % 100, TJ(UV)) : FJ(UV)
          }
        }

        function AV(VV, eV, xV, JV) {
          for (var YV, UV, yV = 0, pV = eV.length, QV = xV.length; yV < pV;) {
            if (JV >= QV) return -1;
            if (37 === (YV = eV.charCodeAt(yV++))) {
              if (YV = eV.charAt(yV++), !(UV = FV[YV in MJ ? eV.charAt(yV++) : YV]) || (JV = UV(VV, xV, JV)) < 0) return -1
            } else if (YV != xV.charCodeAt(JV++)) return -1
          }
          return JV
        }
        return qV.x = TV(xV, qV), qV.X = TV(JV, qV), qV.c = TV(eV, qV), tV.x = TV(xV, tV), tV.X = TV(JV, tV), tV.c = TV(eV, tV), {
          format: function(VV) {
            var eV = TV(VV += "", qV);
            return eV.toString = function() {
              return VV
            }, eV
          },
          parse: function(VV) {
            var eV = PV(VV += "", !1);
            return eV.toString = function() {
              return VV
            }, eV
          },
          utcFormat: function(VV) {
            var eV = TV(VV += "", tV);
            return eV.toString = function() {
              return VV
            }, eV
          },
          utcParse: function(VV) {
            var eV = PV(VV += "", !0);
            return eV.toString = function() {
              return VV
            }, eV
          }
        }
      }(VV), NJ = AJ.format, AJ.parse, XJ = AJ.utcFormat, AJ.utcParse
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
    var kU = xV(6778),
      bU = xV(6656);

    function EU(VV) {
      for (var eV = VV.length, xV = new Array(eV); --eV >= 0;) xV[eV] = eV;
      return xV
    }

    function BU(VV, eV) {
      return VV[eV]
    }

    function jU(VV) {
      const eV = [];
      return eV.key = VV, eV
    }
    var qU = xV(6715),
      tU = xV.n(qU),
      FU = xV(6729),
      TU = xV.n(FU),
      PU = xV(5974),
      AU = xV.n(PU),
      NU = xV(5824),
      XU = xV.n(NU),
      MU = xV(5716),
      zU = xV.n(MU),
      GU = xV(5746),
      WU = xV.n(GU),
      RU = xV(6741),
      gU = xV.n(RU),
      DU = xV(5731),
      iU = xV.n(DU),
      CU = xV(6612),
      aU = xV.n(CU),
      oU = xV(6752),
      cU = xV.n(oU),
      hU = xV(6082),
      lU = xV.n(hU),
      LU = xV(6759),
      fU = xV.n(LU);

    function mU(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return KU(VV)
      }(VV) || function(VV) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(VV)) return Array.from(VV)
      }(VV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return KU(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return KU(VV, eV)
      }(VV) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function KU(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }
    var HU = function(VV) {
        return VV
      },
      uU = {
        "@@functional/placeholder": !0
      },
      sU = function(VV) {
        return VV === uU
      },
      SU = function(VV) {
        return function eV() {
          return 0 === arguments.length || 1 === arguments.length && sU(arguments.length <= 0 ? void 0 : arguments[0]) ? eV : VV.apply(void 0, arguments)
        }
      },
      IU = function VV(eV, xV) {
        return 1 === eV ? xV : SU((function() {
          for (var JV = arguments.length, YV = new Array(JV), UV = 0; UV < JV; UV++) YV[UV] = arguments[UV];
          var yV = YV.filter((function(VV) {
            return VV !== uU
          })).length;
          return yV >= eV ? xV.apply(void 0, YV) : VV(eV - yV, SU((function() {
            for (var VV = arguments.length, eV = new Array(VV), JV = 0; JV < VV; JV++) eV[JV] = arguments[JV];
            var UV = YV.map((function(VV) {
              return sU(VV) ? eV.shift() : VV
            }));
            return xV.apply(void 0, mU(UV).concat(eV))
          })))
        }))
      },
      dU = function(VV) {
        return IU(VV.length, VV)
      },
      OU = function(VV, eV) {
        for (var xV = [], JV = VV; JV < eV; ++JV) xV[JV - VV] = JV;
        return xV
      },
      Vy = dU((function(VV, eV) {
        return Array.isArray(eV) ? eV.map(VV) : Object.keys(eV).map((function(VV) {
          return eV[VV]
        })).map(VV)
      })),
      ey = function() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        if (!eV.length) return HU;
        var JV = eV.reverse(),
          YV = JV[0],
          UV = JV.slice(1);
        return function() {
          return UV.reduce((function(VV, eV) {
            return eV(VV)
          }), YV.apply(void 0, arguments))
        }
      },
      xy = function(VV) {
        return Array.isArray(VV) ? VV.reverse() : VV.split("").reverse.join("")
      },
      Jy = function(VV) {
        var eV = null,
          xV = null;
        return function() {
          for (var JV = arguments.length, YV = new Array(JV), UV = 0; UV < JV; UV++) YV[UV] = arguments[UV];
          return eV && YV.every((function(VV, xV) {
            return VV === eV[xV]
          })) ? xV : (eV = YV, xV = VV.apply(void 0, YV))
        }
      };
    const Yy = {
      rangeStep: function(VV, eV, xV) {
        for (var JV = new(fU())(VV), YV = 0, UV = []; JV.lt(eV) && YV < 1e5;) UV.push(JV.toNumber()), JV = JV.add(xV), YV++;
        return UV
      },
      getDigitCount: function(VV) {
        return 0 === VV ? 1 : Math.floor(new(fU())(VV).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: dU((function(VV, eV, xV) {
        var JV = +VV;
        return JV + xV * (+eV - JV)
      })),
      uninterpolateNumber: dU((function(VV, eV, xV) {
        var JV = eV - +VV;
        return (xV - VV) / (JV = JV || 1 / 0)
      })),
      uninterpolateTruncation: dU((function(VV, eV, xV) {
        var JV = eV - +VV;
        return JV = JV || 1 / 0, Math.max(0, Math.min(1, (xV - VV) / JV))
      }))
    };

    function Uy(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return Qy(VV)
      }(VV) || function(VV) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(VV)) return Array.from(VV)
      }(VV) || py(VV) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function yy(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(VV))) return;
        var xV = [],
          JV = !0,
          YV = !1,
          UV = void 0;
        try {
          for (var yV, pV = VV[Symbol.iterator](); !(JV = (yV = pV.next()).done) && (xV.push(yV.value), !eV || xV.length !== eV); JV = !0);
        } catch (QV) {
          YV = !0, UV = QV
        } finally {
          try {
            JV || null == pV.return || pV.return()
          } finally {
            if (YV) throw UV
          }
        }
        return xV
      }(VV, eV) || py(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function py(VV, eV) {
      if (VV) {
        if ("string" === typeof VV) return Qy(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        return "Object" === xV && VV.constructor && (xV = VV.constructor.name), "Map" === xV || "Set" === xV ? Array.from(VV) : "Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV) ? Qy(VV, eV) : void 0
      }
    }

    function Qy(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function ny(VV) {
      var eV = yy(VV, 2),
        xV = eV[0],
        JV = eV[1],
        YV = xV,
        UV = JV;
      return xV > JV && (YV = JV, UV = xV), [YV, UV]
    }

    function wy(VV, eV, xV) {
      if (VV.lte(0)) return new(fU())(0);
      var JV = Yy.getDigitCount(VV.toNumber()),
        YV = new(fU())(10).pow(JV),
        UV = VV.div(YV),
        yV = 1 !== JV ? .05 : .1,
        pV = new(fU())(Math.ceil(UV.div(yV).toNumber())).add(xV).mul(yV).mul(YV);
      return eV ? pV : new(fU())(Math.ceil(pV))
    }

    function Zy(VV, eV, xV) {
      var JV = 1,
        YV = new(fU())(VV);
      if (!YV.isint() && xV) {
        var UV = Math.abs(VV);
        UV < 1 ? (JV = new(fU())(10).pow(Yy.getDigitCount(VV) - 1), YV = new(fU())(Math.floor(YV.div(JV).toNumber())).mul(JV)) : UV > 1 && (YV = new(fU())(Math.floor(VV)))
      } else 0 === VV ? YV = new(fU())(Math.floor((eV - 1) / 2)) : xV || (YV = new(fU())(Math.floor(VV)));
      var yV = Math.floor((eV - 1) / 2);
      return ey(Vy((function(VV) {
        return YV.add(new(fU())(VV - yV).mul(JV)).toNumber()
      })), OU)(0, eV)
    }

    function vy(VV, eV, xV, JV) {
      var YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((eV - VV) / (xV - 1))) return {
        step: new(fU())(0),
        tickMin: new(fU())(0),
        tickMax: new(fU())(0)
      };
      var UV, yV = wy(new(fU())(eV).sub(VV).div(xV - 1), JV, YV);
      UV = VV <= 0 && eV >= 0 ? new(fU())(0) : (UV = new(fU())(VV).add(eV).div(2)).sub(new(fU())(UV).mod(yV));
      var pV = Math.ceil(UV.sub(VV).div(yV).toNumber()),
        QV = Math.ceil(new(fU())(eV).sub(UV).div(yV).toNumber()),
        nV = pV + QV + 1;
      return nV > xV ? vy(VV, eV, xV, JV, YV + 1) : (nV < xV && (QV = eV > 0 ? QV + (xV - nV) : QV, pV = eV > 0 ? pV : pV + (xV - nV)), {
        step: yV,
        tickMin: UV.sub(new(fU())(pV).mul(yV)),
        tickMax: UV.add(new(fU())(QV).mul(yV))
      })
    }
    var ry = Jy((function(VV) {
        var eV = yy(VV, 2),
          xV = eV[0],
          JV = eV[1],
          YV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          UV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          yV = Math.max(YV, 2),
          pV = yy(ny([xV, JV]), 2),
          QV = pV[0],
          nV = pV[1];
        if (QV === -1 / 0 || nV === 1 / 0) {
          var wV = nV === 1 / 0 ? [QV].concat(Uy(OU(0, YV - 1).map((function() {
            return 1 / 0
          })))) : [].concat(Uy(OU(0, YV - 1).map((function() {
            return -1 / 0
          }))), [nV]);
          return xV > JV ? xy(wV) : wV
        }
        if (QV === nV) return Zy(QV, YV, UV);
        var ZV = vy(QV, nV, yV, UV),
          vV = ZV.step,
          rV = ZV.tickMin,
          kV = ZV.tickMax,
          bV = Yy.rangeStep(rV, kV.add(new(fU())(.1).mul(vV)), vV);
        return xV > JV ? xy(bV) : bV
      })),
      ky = (Jy((function(VV) {
        var eV = yy(VV, 2),
          xV = eV[0],
          JV = eV[1],
          YV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          UV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          yV = Math.max(YV, 2),
          pV = yy(ny([xV, JV]), 2),
          QV = pV[0],
          nV = pV[1];
        if (QV === -1 / 0 || nV === 1 / 0) return [xV, JV];
        if (QV === nV) return Zy(QV, YV, UV);
        var wV = wy(new(fU())(nV).sub(QV).div(yV - 1), UV, 0),
          ZV = ey(Vy((function(VV) {
            return new(fU())(QV).add(new(fU())(VV).mul(wV)).toNumber()
          })), OU)(0, yV).filter((function(VV) {
            return VV >= QV && VV <= nV
          }));
        return xV > JV ? xy(ZV) : ZV
      })), Jy((function(VV, eV) {
        var xV = yy(VV, 2),
          JV = xV[0],
          YV = xV[1],
          UV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          yV = yy(ny([JV, YV]), 2),
          pV = yV[0],
          QV = yV[1];
        if (pV === -1 / 0 || QV === 1 / 0) return [JV, YV];
        if (pV === QV) return [pV];
        var nV = Math.max(eV, 2),
          wV = wy(new(fU())(QV).sub(pV).div(nV - 1), UV, 0),
          ZV = [].concat(Uy(Yy.rangeStep(new(fU())(pV), new(fU())(QV).sub(new(fU())(.99).mul(wV)), wV)), [QV]);
        return JV > YV ? xy(ZV) : ZV
      }))),
      by = xV(6765),
      Ey = xV(5713),
      By = xV(5990),
      jy = xV(6771);

    function qy(VV) {
      return qy = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, qy(VV)
    }

    function ty(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return Fy(VV)
      }(VV) || function(VV) {
        if ("undefined" !== typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
      }(VV) || function(VV, eV) {
        if (!VV) return;
        if ("string" === typeof VV) return Fy(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        "Object" === xV && VV.constructor && (xV = VV.constructor.name);
        if ("Map" === xV || "Set" === xV) return Array.from(VV);
        if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return Fy(VV, eV)
      }(VV) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Fy(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function Ty(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function Py(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? Ty(Object(xV), !0).forEach((function(eV) {
          Ay(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : Ty(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function Ay(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != qy(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != qy(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == qy(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function Ny(VV, eV, xV) {
      return AU()(VV) || AU()(eV) ? xV : (0, Ey.w)(eV) ? WU()(VV, eV, xV) : XU()(eV) ? eV(VV) : xV
    }

    function Xy(VV, eV, xV, JV) {
      var YV = gU()(VV, (function(VV) {
        return Ny(VV, eV)
      }));
      if ("number" === xV) {
        var UV = YV.filter((function(VV) {
          return (0, Ey.A)(VV) || parseFloat(VV)
        }));
        return UV.length ? [TU()(UV), tU()(UV)] : [1 / 0, -1 / 0]
      }
      return (JV ? YV.filter((function(VV) {
        return !AU()(VV)
      })) : YV).map((function(VV) {
        return (0, Ey.w)(VV) || VV instanceof Date ? VV : ""
      }))
    }
    var My = function(VV) {
        var eV, xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          JV = arguments.length > 2 ? arguments[2] : void 0,
          YV = arguments.length > 3 ? arguments[3] : void 0,
          UV = -1,
          yV = null !== (eV = null === xV || void 0 === xV ? void 0 : xV.length) && void 0 !== eV ? eV : 0;
        if (yV <= 1) return 0;
        if (YV && "angleAxis" === YV.axisType && Math.abs(Math.abs(YV.range[1] - YV.range[0]) - 360) <= 1e-6)
          for (var pV = YV.range, QV = 0; QV < yV; QV++) {
            var nV = QV > 0 ? JV[QV - 1].coordinate : JV[yV - 1].coordinate,
              wV = JV[QV].coordinate,
              ZV = QV >= yV - 1 ? JV[0].coordinate : JV[QV + 1].coordinate,
              vV = void 0;
            if ((0, Ey.D)(wV - nV) !== (0, Ey.D)(ZV - wV)) {
              var rV = [];
              if ((0, Ey.D)(ZV - wV) === (0, Ey.D)(pV[1] - pV[0])) {
                vV = ZV;
                var kV = wV + pV[1] - pV[0];
                rV[0] = Math.min(kV, (kV + nV) / 2), rV[1] = Math.max(kV, (kV + nV) / 2)
              } else {
                vV = nV;
                var bV = ZV + pV[1] - pV[0];
                rV[0] = Math.min(wV, (bV + wV) / 2), rV[1] = Math.max(wV, (bV + wV) / 2)
              }
              var EV = [Math.min(wV, (vV + wV) / 2), Math.max(wV, (vV + wV) / 2)];
              if (VV > EV[0] && VV <= EV[1] || VV >= rV[0] && VV <= rV[1]) {
                UV = JV[QV].index;
                break
              }
            } else {
              var BV = Math.min(nV, ZV),
                jV = Math.max(nV, ZV);
              if (VV > (BV + wV) / 2 && VV <= (jV + wV) / 2) {
                UV = JV[QV].index;
                break
              }
            }
          } else
            for (var qV = 0; qV < yV; qV++)
              if (0 === qV && VV <= (xV[qV].coordinate + xV[qV + 1].coordinate) / 2 || qV > 0 && qV < yV - 1 && VV > (xV[qV].coordinate + xV[qV - 1].coordinate) / 2 && VV <= (xV[qV].coordinate + xV[qV + 1].coordinate) / 2 || qV === yV - 1 && VV > (xV[qV].coordinate + xV[qV - 1].coordinate) / 2) {
                UV = xV[qV].index;
                break
              } return UV
      },
      zy = function(VV) {
        var eV, xV, JV = VV.type.displayName,
          YV = null !== (eV = VV.type) && void 0 !== eV && eV.defaultProps ? Py(Py({}, VV.type.defaultProps), VV.props) : VV.props,
          UV = YV.stroke,
          yV = YV.fill;
        switch (JV) {
          case "Line":
            xV = UV;
            break;
          case "Area":
          case "Radar":
            xV = UV && "none" !== UV ? UV : yV;
            break;
          default:
            xV = yV
        }
        return xV
      },
      Gy = function(VV) {
        var eV = VV.barSize,
          xV = VV.totalSize,
          JV = VV.stackGroups,
          YV = void 0 === JV ? {} : JV;
        if (!YV) return {};
        for (var UV = {}, yV = Object.keys(YV), pV = 0, QV = yV.length; pV < QV; pV++)
          for (var nV = YV[yV[pV]].stackGroups, wV = Object.keys(nV), ZV = 0, vV = wV.length; ZV < vV; ZV++) {
            var rV = nV[wV[ZV]],
              kV = rV.items,
              bV = rV.cateAxisId,
              EV = kV.filter((function(VV) {
                return (0, By.n)(VV.type).indexOf("Bar") >= 0
              }));
            if (EV && EV.length) {
              var BV = EV[0].type.defaultProps,
                jV = void 0 !== BV ? Py(Py({}, BV), EV[0].props) : EV[0].props,
                qV = jV.barSize,
                tV = jV[bV];
              UV[tV] || (UV[tV] = []);
              var FV = AU()(qV) ? eV : qV;
              UV[tV].push({
                item: EV[0],
                stackList: EV.slice(1),
                barSize: AU()(FV) ? void 0 : (0, Ey.m)(FV, xV, 0)
              })
            }
          }
        return UV
      },
      Wy = function(VV) {
        var eV = VV.barGap,
          xV = VV.barCategoryGap,
          JV = VV.bandSize,
          YV = VV.sizeList,
          UV = void 0 === YV ? [] : YV,
          yV = VV.maxBarSize,
          pV = UV.length;
        if (pV < 1) return null;
        var QV, nV = (0, Ey.m)(eV, JV, 0, !0),
          wV = [];
        if (UV[0].barSize === +UV[0].barSize) {
          var ZV = !1,
            vV = JV / pV,
            rV = UV.reduce((function(VV, eV) {
              return VV + eV.barSize || 0
            }), 0);
          (rV += (pV - 1) * nV) >= JV && (rV -= (pV - 1) * nV, nV = 0), rV >= JV && vV > 0 && (ZV = !0, rV = pV * (vV *= .9));
          var kV = {
            offset: ((JV - rV) / 2 | 0) - nV,
            size: 0
          };
          QV = UV.reduce((function(VV, eV) {
            var xV = {
                item: eV.item,
                position: {
                  offset: kV.offset + kV.size + nV,
                  size: ZV ? vV : eV.barSize
                }
              },
              JV = [].concat(ty(VV), [xV]);
            return kV = JV[JV.length - 1].position, eV.stackList && eV.stackList.length && eV.stackList.forEach((function(VV) {
              JV.push({
                item: VV,
                position: kV
              })
            })), JV
          }), wV)
        } else {
          var bV = (0, Ey.m)(xV, JV, 0, !0);
          JV - 2 * bV - (pV - 1) * nV <= 0 && (nV = 0);
          var EV = (JV - 2 * bV - (pV - 1) * nV) / pV;
          EV > 1 && (EV >>= 0);
          var BV = yV === +yV ? Math.min(EV, yV) : EV;
          QV = UV.reduce((function(VV, eV, xV) {
            var JV = [].concat(ty(VV), [{
              item: eV.item,
              position: {
                offset: bV + (EV + nV) * xV + (EV - BV) / 2,
                size: BV
              }
            }]);
            return eV.stackList && eV.stackList.length && eV.stackList.forEach((function(VV) {
              JV.push({
                item: VV,
                position: JV[JV.length - 1].position
              })
            })), JV
          }), wV)
        }
        return QV
      },
      Ry = function(VV, eV, xV, JV) {
        var YV = xV.children,
          UV = xV.width,
          yV = xV.margin,
          pV = UV - (yV.left || 0) - (yV.right || 0),
          QV = (0, jy.d)({
            children: YV,
            legendWidth: pV
          });
        if (QV) {
          var nV = JV || {},
            wV = nV.width,
            ZV = nV.height,
            vV = QV.align,
            rV = QV.verticalAlign,
            kV = QV.layout;
          if (("vertical" === kV || "horizontal" === kV && "middle" === rV) && "center" !== vV && (0, Ey.A)(VV[vV])) return Py(Py({}, VV), {}, Ay({}, vV, VV[vV] + (wV || 0)));
          if (("horizontal" === kV || "vertical" === kV && "center" === vV) && "middle" !== rV && (0, Ey.A)(VV[rV])) return Py(Py({}, VV), {}, Ay({}, rV, VV[rV] + (ZV || 0)))
        }
        return VV
      },
      gy = function(VV, eV, xV, JV, YV) {
        var UV = eV.props.children,
          yV = (0, By.g)(UV, by.e).filter((function(VV) {
            return function(VV, eV, xV) {
              return !!AU()(eV) || ("horizontal" === VV ? "yAxis" === eV : "vertical" === VV || "x" === xV ? "xAxis" === eV : "y" !== xV || "yAxis" === eV)
            }(JV, YV, VV.props.direction)
          }));
        if (yV && yV.length) {
          var pV = yV.map((function(VV) {
            return VV.props.dataKey
          }));
          return VV.reduce((function(VV, eV) {
            var JV = Ny(eV, xV);
            if (AU()(JV)) return VV;
            var YV = Array.isArray(JV) ? [TU()(JV), tU()(JV)] : [JV, JV],
              UV = pV.reduce((function(VV, xV) {
                var JV = Ny(eV, xV, 0),
                  UV = YV[0] - Math.abs(Array.isArray(JV) ? JV[0] : JV),
                  yV = YV[1] + Math.abs(Array.isArray(JV) ? JV[1] : JV);
                return [Math.min(UV, VV[0]), Math.max(yV, VV[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(UV[0], VV[0]), Math.max(UV[1], VV[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      Dy = function(VV, eV, xV, JV, YV) {
        var UV = eV.map((function(eV) {
          return gy(VV, eV, xV, YV, JV)
        })).filter((function(VV) {
          return !AU()(VV)
        }));
        return UV && UV.length ? UV.reduce((function(VV, eV) {
          return [Math.min(VV[0], eV[0]), Math.max(VV[1], eV[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      iy = function(VV, eV, xV, JV, YV) {
        var UV = eV.map((function(eV) {
          var UV = eV.props.dataKey;
          return "number" === xV && UV && gy(VV, eV, UV, JV) || Xy(VV, UV, xV, YV)
        }));
        if ("number" === xV) return UV.reduce((function(VV, eV) {
          return [Math.min(VV[0], eV[0]), Math.max(VV[1], eV[1])]
        }), [1 / 0, -1 / 0]);
        var yV = {};
        return UV.reduce((function(VV, eV) {
          for (var xV = 0, JV = eV.length; xV < JV; xV++) yV[eV[xV]] || (yV[eV[xV]] = !0, VV.push(eV[xV]));
          return VV
        }), [])
      },
      Cy = function(VV, eV) {
        return "horizontal" === VV && "xAxis" === eV || "vertical" === VV && "yAxis" === eV || "centric" === VV && "angleAxis" === eV || "radial" === VV && "radiusAxis" === eV
      },
      ay = function(VV, eV, xV, JV) {
        if (JV) return VV.map((function(VV) {
          return VV.coordinate
        }));
        var YV, UV, yV = VV.map((function(VV) {
          return VV.coordinate === eV && (YV = !0), VV.coordinate === xV && (UV = !0), VV.coordinate
        }));
        return YV || yV.push(eV), UV || yV.push(xV), yV
      },
      oy = function(VV, eV, xV) {
        if (!VV) return null;
        var JV = VV.scale,
          YV = VV.duplicateDomain,
          UV = VV.type,
          yV = VV.range,
          pV = "scaleBand" === VV.realScaleType ? JV.bandwidth() / 2 : 2,
          QV = (eV || xV) && "category" === UV && JV.bandwidth ? JV.bandwidth() / pV : 0;
        return QV = "angleAxis" === VV.axisType && (null === yV || void 0 === yV ? void 0 : yV.length) >= 2 ? 2 * (0, Ey.D)(yV[0] - yV[1]) * QV : QV, eV && (VV.ticks || VV.niceTicks) ? (VV.ticks || VV.niceTicks).map((function(VV) {
          var eV = YV ? YV.indexOf(VV) : VV;
          return {
            coordinate: JV(eV) + QV,
            value: VV,
            offset: QV
          }
        })).filter((function(VV) {
          return !iU()(VV.coordinate)
        })) : VV.isCategorical && VV.categoricalDomain ? VV.categoricalDomain.map((function(VV, eV) {
          return {
            coordinate: JV(VV) + QV,
            value: VV,
            index: eV,
            offset: QV
          }
        })) : JV.ticks && !xV ? JV.ticks(VV.tickCount).map((function(VV) {
          return {
            coordinate: JV(VV) + QV,
            value: VV,
            offset: QV
          }
        })) : JV.domain().map((function(VV, eV) {
          return {
            coordinate: JV(VV) + QV,
            value: YV ? YV[VV] : VV,
            index: eV,
            offset: QV
          }
        }))
      },
      cy = new WeakMap,
      hy = function(VV, eV) {
        if ("function" !== typeof eV) return VV;
        cy.has(VV) || cy.set(VV, new WeakMap);
        var xV = cy.get(VV);
        if (xV.has(eV)) return xV.get(eV);
        var JV = function() {
          VV.apply(void 0, arguments), eV.apply(void 0, arguments)
        };
        return xV.set(eV, JV), JV
      },
      ly = function(VV, eV, xV) {
        var UV = VV.scale,
          yV = VV.type,
          pV = VV.layout,
          QV = VV.axisType;
        if ("auto" === UV) return "radial" === pV && "radiusAxis" === QV ? {
          scale: YV.b(),
          realScaleType: "band"
        } : "radial" === pV && "angleAxis" === QV ? {
          scale: ue(),
          realScaleType: "linear"
        } : "category" === yV && eV && (eV.indexOf("LineChart") >= 0 || eV.indexOf("AreaChart") >= 0 || eV.indexOf("ComposedChart") >= 0 && !xV) ? {
          scale: YV.d(),
          realScaleType: "point"
        } : "category" === yV ? {
          scale: YV.b(),
          realScaleType: "band"
        } : {
          scale: ue(),
          realScaleType: "linear"
        };
        if (zU()(UV)) {
          var nV = "scale".concat(aU()(UV));
          return {
            scale: (JV[nV] || YV.d)(),
            realScaleType: JV[nV] ? nV : "point"
          }
        }
        return XU()(UV) ? {
          scale: UV
        } : {
          scale: YV.d(),
          realScaleType: "point"
        }
      },
      Ly = 1e-4,
      fy = function(VV) {
        var eV = VV.domain();
        if (eV && !(eV.length <= 2)) {
          var xV = eV.length,
            JV = VV.range(),
            YV = Math.min(JV[0], JV[1]) - Ly,
            UV = Math.max(JV[0], JV[1]) + Ly,
            yV = VV(eV[0]),
            pV = VV(eV[xV - 1]);
          (yV < YV || yV > UV || pV < YV || pV > UV) && VV.domain([eV[0], eV[xV - 1]])
        }
      },
      my = function(VV, eV) {
        if (!VV) return null;
        for (var xV = 0, JV = VV.length; xV < JV; xV++)
          if (VV[xV].item === eV) return VV[xV].position;
        return null
      },
      Ky = function(VV, eV) {
        if (!eV || 2 !== eV.length || !(0, Ey.A)(eV[0]) || !(0, Ey.A)(eV[1])) return VV;
        var xV = Math.min(eV[0], eV[1]),
          JV = Math.max(eV[0], eV[1]),
          YV = [VV[0], VV[1]];
        return (!(0, Ey.A)(VV[0]) || VV[0] < xV) && (YV[0] = xV), (!(0, Ey.A)(VV[1]) || VV[1] > JV) && (YV[1] = JV), YV[0] > JV && (YV[0] = JV), YV[1] < xV && (YV[1] = xV), YV
      },
      Hy = {
        sign: function(VV) {
          var eV = VV.length;
          if (!(eV <= 0))
            for (var xV = 0, JV = VV[0].length; xV < JV; ++xV)
              for (var YV = 0, UV = 0, yV = 0; yV < eV; ++yV) {
                var pV = iU()(VV[yV][xV][1]) ? VV[yV][xV][0] : VV[yV][xV][1];
                pV >= 0 ? (VV[yV][xV][0] = YV, VV[yV][xV][1] = YV + pV, YV = VV[yV][xV][1]) : (VV[yV][xV][0] = UV, VV[yV][xV][1] = UV + pV, UV = VV[yV][xV][1])
              }
        },
        expand: function(VV, eV) {
          if ((JV = VV.length) > 0) {
            for (var xV, JV, YV, UV = 0, yV = VV[0].length; UV < yV; ++UV) {
              for (YV = xV = 0; xV < JV; ++xV) YV += VV[xV][UV][1] || 0;
              if (YV)
                for (xV = 0; xV < JV; ++xV) VV[xV][UV][1] /= YV
            }
            rU(VV, eV)
          }
        },
        none: rU,
        silhouette: function(VV, eV) {
          if ((xV = VV.length) > 0) {
            for (var xV, JV = 0, YV = VV[eV[0]], UV = YV.length; JV < UV; ++JV) {
              for (var yV = 0, pV = 0; yV < xV; ++yV) pV += VV[yV][JV][1] || 0;
              YV[JV][1] += YV[JV][0] = -pV / 2
            }
            rU(VV, eV)
          }
        },
        wiggle: function(VV, eV) {
          if ((YV = VV.length) > 0 && (JV = (xV = VV[eV[0]]).length) > 0) {
            for (var xV, JV, YV, UV = 0, yV = 1; yV < JV; ++yV) {
              for (var pV = 0, QV = 0, nV = 0; pV < YV; ++pV) {
                for (var wV = VV[eV[pV]], ZV = wV[yV][1] || 0, vV = (ZV - (wV[yV - 1][1] || 0)) / 2, rV = 0; rV < pV; ++rV) {
                  var kV = VV[eV[rV]];
                  vV += (kV[yV][1] || 0) - (kV[yV - 1][1] || 0)
                }
                QV += ZV, nV += vV * ZV
              }
              xV[yV - 1][1] += xV[yV - 1][0] = UV, QV && (UV -= nV / QV)
            }
            xV[yV - 1][1] += xV[yV - 1][0] = UV, rU(VV, eV)
          }
        },
        positive: function(VV) {
          var eV = VV.length;
          if (!(eV <= 0))
            for (var xV = 0, JV = VV[0].length; xV < JV; ++xV)
              for (var YV = 0, UV = 0; UV < eV; ++UV) {
                var yV = iU()(VV[UV][xV][1]) ? VV[UV][xV][0] : VV[UV][xV][1];
                yV >= 0 ? (VV[UV][xV][0] = YV, VV[UV][xV][1] = YV + yV, YV = VV[UV][xV][1]) : (VV[UV][xV][0] = 0, VV[UV][xV][1] = 0)
              }
        }
      },
      uy = function(VV, eV, xV) {
        var JV = eV.map((function(VV) {
            return VV.props.dataKey
          })),
          YV = Hy[xV],
          UV = function() {
            var VV = (0, bU.c)([]),
              eV = EU,
              xV = rU,
              JV = BU;

            function YV(YV) {
              var UV, yV, pV = Array.from(VV.apply(this, arguments), jU),
                QV = pV.length,
                nV = -1;
              for (const VV of YV)
                for (UV = 0, ++nV; UV < QV; ++UV)(pV[UV][nV] = [0, +JV(VV, pV[UV].key, nV, YV)]).data = VV;
              for (UV = 0, yV = (0, kU.e)(eV(pV)); UV < QV; ++UV) pV[yV[UV]].index = UV;
              return xV(pV, yV), pV
            }
            return YV.keys = function(eV) {
              return arguments.length ? (VV = "function" === typeof eV ? eV : (0, bU.c)(Array.from(eV)), YV) : VV
            }, YV.value = function(VV) {
              return arguments.length ? (JV = "function" === typeof VV ? VV : (0, bU.c)(+VV), YV) : JV
            }, YV.order = function(VV) {
              return arguments.length ? (eV = null == VV ? EU : "function" === typeof VV ? VV : (0, bU.c)(Array.from(VV)), YV) : eV
            }, YV.offset = function(VV) {
              return arguments.length ? (xV = null == VV ? rU : VV, YV) : xV
            }, YV
          }().keys(JV).value((function(VV, eV) {
            return +Ny(VV, eV, 0)
          })).order(EU).offset(YV);
        return UV(VV)
      },
      sy = function(VV, eV, xV, JV, YV, UV) {
        if (!VV) return null;
        var yV = (UV ? eV.reverse() : eV).reduce((function(VV, eV) {
          var YV, UV = null !== (YV = eV.type) && void 0 !== YV && YV.defaultProps ? Py(Py({}, eV.type.defaultProps), eV.props) : eV.props,
            yV = UV.stackId;
          if (UV.hide) return VV;
          var pV = UV[xV],
            QV = VV[pV] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, Ey.w)(yV)) {
            var nV = QV.stackGroups[yV] || {
              numericAxisId: xV,
              cateAxisId: JV,
              items: []
            };
            nV.items.push(eV), QV.hasStack = !0, QV.stackGroups[yV] = nV
          } else QV.stackGroups[(0, Ey.H)("_stackId_")] = {
            numericAxisId: xV,
            cateAxisId: JV,
            items: [eV]
          };
          return Py(Py({}, VV), {}, Ay({}, pV, QV))
        }), {});
        return Object.keys(yV).reduce((function(eV, UV) {
          var pV = yV[UV];
          if (pV.hasStack) {
            pV.stackGroups = Object.keys(pV.stackGroups).reduce((function(eV, UV) {
              var yV = pV.stackGroups[UV];
              return Py(Py({}, eV), {}, Ay({}, UV, {
                numericAxisId: xV,
                cateAxisId: JV,
                items: yV.items,
                stackedData: uy(VV, yV.items, YV)
              }))
            }), {})
          }
          return Py(Py({}, eV), {}, Ay({}, UV, pV))
        }), {})
      },
      Sy = function(VV, eV) {
        var xV = eV.realScaleType,
          JV = eV.type,
          YV = eV.tickCount,
          UV = eV.originalDomain,
          yV = eV.allowDecimals,
          pV = xV || eV.scale;
        if ("auto" !== pV && "linear" !== pV) return null;
        if (YV && "number" === JV && UV && ("auto" === UV[0] || "auto" === UV[1])) {
          var QV = VV.domain();
          if (!QV.length) return null;
          var nV = ry(QV, YV, yV);
          return VV.domain([TU()(nV), tU()(nV)]), {
            niceTicks: nV
          }
        }
        if (YV && "number" === JV) {
          var wV = VV.domain();
          return {
            niceTicks: ky(wV, YV, yV)
          }
        }
        return null
      };

    function Iy(VV) {
      var eV = VV.axis,
        xV = VV.ticks,
        JV = VV.bandSize,
        YV = VV.entry,
        UV = VV.index,
        yV = VV.dataKey;
      if ("category" === eV.type) {
        if (!eV.allowDuplicatedCategory && eV.dataKey && !AU()(YV[eV.dataKey])) {
          var pV = (0, Ey.d)(xV, "value", YV[eV.dataKey]);
          if (pV) return pV.coordinate + JV / 2
        }
        return xV[UV] ? xV[UV].coordinate + JV / 2 : null
      }
      var QV = Ny(YV, AU()(yV) ? eV.dataKey : yV);
      return AU()(QV) ? null : eV.scale(QV)
    }
    var dy = function(VV) {
        var eV = VV.axis,
          xV = VV.ticks,
          JV = VV.offset,
          YV = VV.bandSize,
          UV = VV.entry,
          yV = VV.index;
        if ("category" === eV.type) return xV[yV] ? xV[yV].coordinate + JV : null;
        var pV = Ny(UV, eV.dataKey, eV.domain[yV]);
        return AU()(pV) ? null : eV.scale(pV) - YV / 2 + JV
      },
      Oy = function(VV) {
        var eV = VV.numericAxis,
          xV = eV.scale.domain();
        if ("number" === eV.type) {
          var JV = Math.min(xV[0], xV[1]),
            YV = Math.max(xV[0], xV[1]);
          return JV <= 0 && YV >= 0 ? 0 : YV < 0 ? YV : JV
        }
        return xV[0]
      },
      Vp = function(VV, eV) {
        var xV, JV = (null !== (xV = VV.type) && void 0 !== xV && xV.defaultProps ? Py(Py({}, VV.type.defaultProps), VV.props) : VV.props).stackId;
        if ((0, Ey.w)(JV)) {
          var YV = eV[JV];
          if (YV) {
            var UV = YV.items.indexOf(VV);
            return UV >= 0 ? YV.stackedData[UV] : null
          }
        }
        return null
      },
      ep = function(VV, eV, xV) {
        return Object.keys(VV).reduce((function(JV, YV) {
          var UV = VV[YV].stackedData.reduce((function(VV, JV) {
            var YV = JV.slice(eV, xV + 1).reduce((function(VV, eV) {
              return [TU()(eV.concat([VV[0]]).filter(Ey.A)), tU()(eV.concat([VV[1]]).filter(Ey.A))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(VV[0], YV[0]), Math.max(VV[1], YV[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(UV[0], JV[0]), Math.max(UV[1], JV[1])]
        }), [1 / 0, -1 / 0]).map((function(VV) {
          return VV === 1 / 0 || VV === -1 / 0 ? 0 : VV
        }))
      },
      xp = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Jp = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Yp = function(VV, eV, xV) {
        if (XU()(VV)) return VV(eV, xV);
        if (!Array.isArray(VV)) return eV;
        var JV = [];
        if ((0, Ey.A)(VV[0])) JV[0] = xV ? VV[0] : Math.min(VV[0], eV[0]);
        else if (xp.test(VV[0])) {
          var YV = +xp.exec(VV[0])[1];
          JV[0] = eV[0] - YV
        } else XU()(VV[0]) ? JV[0] = VV[0](eV[0]) : JV[0] = eV[0];
        if ((0, Ey.A)(VV[1])) JV[1] = xV ? VV[1] : Math.max(VV[1], eV[1]);
        else if (Jp.test(VV[1])) {
          var UV = +Jp.exec(VV[1])[1];
          JV[1] = eV[1] + UV
        } else XU()(VV[1]) ? JV[1] = VV[1](eV[1]) : JV[1] = eV[1];
        return JV
      },
      Up = function(VV, eV, xV) {
        if (VV && VV.scale && VV.scale.bandwidth) {
          var JV = VV.scale.bandwidth();
          if (!xV || JV > 0) return JV
        }
        if (VV && eV && eV.length >= 2) {
          for (var YV = lU()(eV, (function(VV) {
              return VV.coordinate
            })), UV = 1 / 0, yV = 1, pV = YV.length; yV < pV; yV++) {
            var QV = YV[yV],
              nV = YV[yV - 1];
            UV = Math.min((QV.coordinate || 0) - (nV.coordinate || 0), UV)
          }
          return UV === 1 / 0 ? 0 : UV
        }
        return xV ? void 0 : 0
      },
      yp = function(VV, eV, xV) {
        return VV && VV.length ? cU()(VV, WU()(xV, "type.defaultProps.domain")) ? eV : VV : eV
      },
      pp = function(VV, eV) {
        var xV = VV.type.defaultProps ? Py(Py({}, VV.type.defaultProps), VV.props) : VV.props,
          JV = xV.dataKey,
          YV = xV.name,
          UV = xV.unit,
          yV = xV.formatter,
          pV = xV.tooltipType,
          QV = xV.chartType,
          nV = xV.hide;
        return Py(Py({}, (0, By.c)(VV, !1)), {}, {
          dataKey: JV,
          unit: UV,
          formatter: yV,
          name: YV || JV,
          color: zy(VV),
          value: Ny(eV, JV),
          type: pV,
          payload: eV,
          chartType: QV,
          hide: nV
        })
      }
  },
  6687: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => vV,
      h: () => ZV
    });
    var JV = xV(6531);

    function YV(VV) {
      return YV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, YV(VV)
    }

    function UV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function yV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? UV(Object(xV), !0).forEach((function(eV) {
          pV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : UV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function pV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != YV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != YV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == YV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }
    var QV = {
        widthCache: {},
        cacheCount: 0
      },
      nV = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      wV = "recharts_measurement_span";
    var ZV = function(VV) {
        var eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === VV || null === VV || JV.e.isSsr) return {
          width: 0,
          height: 0
        };
        var xV = function(VV) {
            var eV = yV({}, VV);
            return Object.keys(eV).forEach((function(VV) {
              eV[VV] || delete eV[VV]
            })), eV
          }(eV),
          YV = JSON.stringify({
            text: VV,
            copyStyle: xV
          });
        if (QV.widthCache[YV]) return QV.widthCache[YV];
        try {
          var UV = document.getElementById(wV);
          UV || ((UV = document.createElement("span")).setAttribute("id", wV), UV.setAttribute("aria-hidden", "true"), document.body.appendChild(UV));
          var pV = yV(yV({}, nV), xV);
          Object.assign(UV.style, pV), UV.textContent = "".concat(VV);
          var ZV = UV.getBoundingClientRect(),
            vV = {
              width: ZV.width,
              height: ZV.height
            };
          return QV.widthCache[YV] = vV, ++QV.cacheCount > 2e3 && (QV.cacheCount = 0, QV.widthCache = {}), vV
        } catch (rV) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      vV = function(VV) {
        return {
          top: VV.top + window.scrollY - document.documentElement.clientTop,
          left: VV.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  5713: (VV, eV, xV) => {
    xV.d(eV, {
      A: () => bV,
      C: () => kV,
      D: () => rV,
      H: () => qV,
      b: () => XV,
      d: () => AV,
      g: () => FV,
      i: () => NV,
      m: () => tV,
      q: () => TV,
      s: () => PV,
      v: () => EV,
      w: () => BV
    });
    var JV = xV(5716),
      YV = xV.n(JV),
      UV = xV(5731),
      yV = xV.n(UV),
      pV = xV(5746),
      QV = xV.n(pV),
      nV = xV(5739),
      wV = xV.n(nV),
      ZV = xV(5974),
      vV = xV.n(ZV),
      rV = function(VV) {
        return 0 === VV ? 0 : VV > 0 ? 1 : -1
      },
      kV = function(VV) {
        return YV()(VV) && VV.indexOf("%") === VV.length - 1
      },
      bV = function(VV) {
        return wV()(VV) && !yV()(VV)
      },
      EV = function(VV) {
        return vV()(VV)
      },
      BV = function(VV) {
        return bV(VV) || YV()(VV)
      },
      jV = 0,
      qV = function(VV) {
        var eV = ++jV;
        return "".concat(VV || "").concat(eV)
      },
      tV = function(VV, eV) {
        var xV, JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          UV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!bV(VV) && !YV()(VV)) return JV;
        if (kV(VV)) {
          var pV = VV.indexOf("%");
          xV = eV * parseFloat(VV.slice(0, pV)) / 100
        } else xV = +VV;
        return yV()(xV) && (xV = JV), UV && xV > eV && (xV = eV), xV
      },
      FV = function(VV) {
        if (!VV) return null;
        var eV = Object.keys(VV);
        return eV && eV.length ? VV[eV[0]] : null
      },
      TV = function(VV) {
        if (!Array.isArray(VV)) return !1;
        for (var eV = VV.length, xV = {}, JV = 0; JV < eV; JV++) {
          if (xV[VV[JV]]) return !0;
          xV[VV[JV]] = !0
        }
        return !1
      },
      PV = function(VV, eV) {
        return bV(VV) && bV(eV) ? function(xV) {
          return VV + xV * (eV - VV)
        } : function() {
          return eV
        }
      };

    function AV(VV, eV, xV) {
      return VV && VV.length ? VV.find((function(VV) {
        return VV && ("function" === typeof eV ? eV(VV) : QV()(VV, eV)) === xV
      })) : null
    }
    var NV = function(VV) {
        if (!VV || !VV.length) return null;
        for (var eV = VV.length, xV = 0, JV = 0, YV = 0, UV = 0, yV = 1 / 0, pV = -1 / 0, QV = 0, nV = 0, wV = 0; wV < eV; wV++) xV += QV = VV[wV].cx || 0, JV += nV = VV[wV].cy || 0, YV += QV * nV, UV += QV * QV, yV = Math.min(yV, QV), pV = Math.max(pV, QV);
        var ZV = eV * UV !== xV * xV ? (eV * YV - xV * JV) / (eV * UV - xV * xV) : 0;
        return {
          xmin: yV,
          xmax: pV,
          a: ZV,
          b: (JV - ZV * xV) / eV
        }
      },
      XV = function(VV, eV) {
        return bV(VV) && bV(eV) ? VV - eV : YV()(VV) && YV()(eV) ? VV.localeCompare(eV) : VV instanceof Date && eV instanceof Date ? VV.getTime() - eV.getTime() : String(VV).localeCompare(String(eV))
      }
  },
  6531: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV
    });
    var JV = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(VV) {
        return JV[VV]
      },
      set: function(VV, eV) {
        if ("string" === typeof VV) JV[VV] = eV;
        else {
          var xV = Object.keys(VV);
          xV && xV.length && xV.forEach((function(eV) {
            JV[eV] = VV[eV]
          }))
        }
      }
    }
  },
  6787: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    var JV = function(VV, eV) {
      var xV = VV.alwaysShow,
        JV = VV.ifOverflow;
      return xV && (JV = "extendDomain"), JV === eV
    }
  },
  5982: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    var JV = function(VV, eV) {
      for (var xV = arguments.length, JV = new Array(xV > 2 ? xV - 2 : 0), YV = 2; YV < xV; YV++) JV[YV - 2] = arguments[YV]
    }
  },
  6784: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => pV,
      c: () => vV,
      e: () => nV
    });
    xV(5974), xV(62), xV(5824);

    function JV(VV) {
      return JV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, JV(VV)
    }

    function YV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function UV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? YV(Object(xV), !0).forEach((function(eV) {
          yV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : YV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function yV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != JV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var YV = xV.call(VV, eV || "default");
            if ("object" != JV(YV)) return YV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == JV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }
    var pV = Math.PI / 180,
      QV = function(VV) {
        return 180 * VV / Math.PI
      },
      nV = function(VV, eV, xV, JV) {
        return {
          x: VV + Math.cos(-pV * JV) * xV,
          y: eV + Math.sin(-pV * JV) * xV
        }
      },
      wV = function(VV, eV) {
        var xV = VV.x,
          JV = VV.y,
          YV = eV.cx,
          UV = eV.cy,
          yV = function(VV, eV) {
            var xV = VV.x,
              JV = VV.y,
              YV = eV.x,
              UV = eV.y;
            return Math.sqrt(Math.pow(xV - YV, 2) + Math.pow(JV - UV, 2))
          }({
            x: xV,
            y: JV
          }, {
            x: YV,
            y: UV
          });
        if (yV <= 0) return {
          radius: yV
        };
        var pV = (xV - YV) / yV,
          nV = Math.acos(pV);
        return JV > UV && (nV = 2 * Math.PI - nV), {
          radius: yV,
          angle: QV(nV),
          angleInRadian: nV
        }
      },
      ZV = function(VV, eV) {
        var xV = eV.startAngle,
          JV = eV.endAngle,
          YV = Math.floor(xV / 360),
          UV = Math.floor(JV / 360);
        return VV + 360 * Math.min(YV, UV)
      },
      vV = function(VV, eV) {
        var xV = VV.x,
          JV = VV.y,
          YV = wV({
            x: xV,
            y: JV
          }, eV),
          yV = YV.radius,
          pV = YV.angle,
          QV = eV.innerRadius,
          nV = eV.outerRadius;
        if (yV < QV || yV > nV) return !1;
        if (0 === yV) return !0;
        var vV, rV = function(VV) {
            var eV = VV.startAngle,
              xV = VV.endAngle,
              JV = Math.floor(eV / 360),
              YV = Math.floor(xV / 360),
              UV = Math.min(JV, YV);
            return {
              startAngle: eV - 360 * UV,
              endAngle: xV - 360 * UV
            }
          }(eV),
          kV = rV.startAngle,
          bV = rV.endAngle,
          EV = pV;
        if (kV <= bV) {
          for (; EV > bV;) EV -= 360;
          for (; EV < kV;) EV += 360;
          vV = EV >= kV && EV <= bV
        } else {
          for (; EV > kV;) EV -= 360;
          for (; EV < bV;) EV += 360;
          vV = EV >= bV && EV <= kV
        }
        return vV ? UV(UV({}, eV), {}, {
          radius: yV,
          angle: ZV(EV, eV)
        }) : null
      }
  },
  5990: (VV, eV, xV) => {
    xV.d(eV, {
      B: () => GV,
      c: () => DV,
      g: () => MV,
      j: () => zV,
      n: () => PV,
      o: () => oV,
      r: () => gV,
      s: () => iV,
      v: () => cV,
      x: () => aV
    });
    var JV = xV(5746),
      YV = xV.n(JV),
      UV = xV(5974),
      yV = xV.n(UV),
      pV = xV(5716),
      QV = xV.n(pV),
      nV = xV(5824),
      wV = xV.n(nV),
      ZV = xV(5631),
      vV = xV.n(ZV),
      rV = xV(62),
      kV = xV(5996),
      bV = xV(5713),
      EV = xV(6010),
      BV = xV(6012),
      jV = ["children"],
      qV = ["children"];

    function tV(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if (Object.prototype.hasOwnProperty.call(VV, JV)) {
            if (eV.indexOf(JV) >= 0) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }

    function FV(VV) {
      return FV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, FV(VV)
    }
    var TV = {
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
      PV = function(VV) {
        return "string" === typeof VV ? VV : VV ? VV.displayName || VV.name || "Component" : ""
      },
      AV = null,
      NV = null,
      XV = function VV(eV) {
        if (eV === AV && Array.isArray(NV)) return NV;
        var xV = [];
        return rV.Children.forEach(eV, (function(eV) {
          yV()(eV) || ((0, kV.isFragment)(eV) ? xV = xV.concat(VV(eV.props.children)) : xV.push(eV))
        })), NV = xV, AV = eV, xV
      };

    function MV(VV, eV) {
      var xV = [],
        JV = [];
      return JV = Array.isArray(eV) ? eV.map((function(VV) {
        return PV(VV)
      })) : [PV(eV)], XV(VV).forEach((function(VV) {
        var eV = YV()(VV, "type.displayName") || YV()(VV, "type.name"); - 1 !== JV.indexOf(eV) && xV.push(VV)
      })), xV
    }

    function zV(VV, eV) {
      var xV = MV(VV, eV);
      return xV && xV[0]
    }
    var GV = function(VV) {
        if (!VV || !VV.props) return !1;
        var eV = VV.props,
          xV = eV.width,
          JV = eV.height;
        return !(!(0, bV.A)(xV) || xV <= 0 || !(0, bV.A)(JV) || JV <= 0)
      },
      WV = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      RV = function(VV) {
        return VV && VV.type && QV()(VV.type) && WV.indexOf(VV.type) >= 0
      },
      gV = function(VV) {
        return VV && "object" === FV(VV) && "clipDot" in VV
      },
      DV = function(VV, eV, xV) {
        if (!VV || "function" === typeof VV || "boolean" === typeof VV) return null;
        var JV = VV;
        if ((0, rV.isValidElement)(VV) && (JV = VV.props), !vV()(JV)) return null;
        var YV = {};
        return Object.keys(JV).forEach((function(VV) {
          var UV;
          (function(VV, eV, xV, JV) {
            var YV, UV = null !== (YV = null === BV.g || void 0 === BV.g ? void 0 : BV.g[JV]) && void 0 !== YV ? YV : [];
            return eV.startsWith("data-") || !wV()(VV) && (JV && UV.includes(eV) || BV.i.includes(eV)) || xV && BV.c.includes(eV)
          })(null === (UV = JV) || void 0 === UV ? void 0 : UV[VV], VV, eV, xV) && (YV[VV] = JV[VV])
        })), YV
      },
      iV = function VV(eV, xV) {
        if (eV === xV) return !0;
        var JV = rV.Children.count(eV);
        if (JV !== rV.Children.count(xV)) return !1;
        if (0 === JV) return !0;
        if (1 === JV) return CV(Array.isArray(eV) ? eV[0] : eV, Array.isArray(xV) ? xV[0] : xV);
        for (var YV = 0; YV < JV; YV++) {
          var UV = eV[YV],
            yV = xV[YV];
          if (Array.isArray(UV) || Array.isArray(yV)) {
            if (!VV(UV, yV)) return !1
          } else if (!CV(UV, yV)) return !1
        }
        return !0
      },
      CV = function(VV, eV) {
        if (yV()(VV) && yV()(eV)) return !0;
        if (!yV()(VV) && !yV()(eV)) {
          var xV = VV.props || {},
            JV = xV.children,
            YV = tV(xV, jV),
            UV = eV.props || {},
            pV = UV.children,
            QV = tV(UV, qV);
          return JV && pV ? (0, EV.e)(YV, QV) && iV(JV, pV) : !JV && !pV && (0, EV.e)(YV, QV)
        }
        return !1
      },
      aV = function(VV, eV) {
        var xV = [],
          JV = {};
        return XV(VV).forEach((function(VV, YV) {
          if (RV(VV)) xV.push(VV);
          else if (VV) {
            var UV = PV(VV.type),
              yV = eV[UV] || {},
              pV = yV.handler,
              QV = yV.once;
            if (pV && (!QV || !JV[UV])) {
              var nV = pV(VV, UV, YV);
              xV.push(nV), JV[UV] = !0
            }
          }
        })), xV
      },
      oV = function(VV) {
        var eV = VV && VV.type;
        return eV && TV[eV] ? TV[eV] : null
      },
      cV = function(VV, eV) {
        return XV(eV).indexOf(VV)
      }
  },
  6010: (VV, eV, xV) => {
    function JV(VV, eV) {
      for (var xV in VV)
        if ({}.hasOwnProperty.call(VV, xV) && (!{}.hasOwnProperty.call(eV, xV) || VV[xV] !== eV[xV])) return !1;
      for (var JV in eV)
        if ({}.hasOwnProperty.call(eV, JV) && !{}.hasOwnProperty.call(VV, JV)) return !1;
      return !0
    }
    xV.d(eV, {
      e: () => JV
    })
  },
  6771: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => wV
    });
    var JV = xV(6601),
      YV = xV(6696),
      UV = xV(5990);

    function yV(VV) {
      return yV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, yV(VV)
    }

    function pV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function QV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? pV(Object(xV), !0).forEach((function(eV) {
          nV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : pV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function nV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != yV(VV) || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != yV(JV)) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == yV(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }
    var wV = function(VV) {
      var eV = VV.children,
        xV = VV.formattedGraphicalItems,
        yV = VV.legendWidth,
        pV = VV.legendContent,
        nV = (0, UV.j)(eV, JV.c);
      if (!nV) return null;
      var wV, ZV = JV.c.defaultProps,
        vV = void 0 !== ZV ? QV(QV({}, ZV), nV.props) : {};
      return wV = nV.props && nV.props.payload ? nV.props && nV.props.payload : "children" === pV ? (xV || []).reduce((function(VV, eV) {
        var xV = eV.item,
          JV = eV.props,
          YV = JV.sectors || JV.data || [];
        return VV.concat(YV.map((function(VV) {
          return {
            type: nV.props.iconType || xV.props.legendType,
            value: VV.name,
            color: VV.fill,
            payload: VV
          }
        })))
      }), []) : (xV || []).map((function(VV) {
        var eV = VV.item,
          xV = eV.type.defaultProps,
          JV = void 0 !== xV ? QV(QV({}, xV), eV.props) : {},
          UV = JV.dataKey,
          yV = JV.name,
          pV = JV.legendType;
        return {
          inactive: JV.hide,
          dataKey: UV,
          type: vV.iconType || pV || "square",
          color: (0, YV.M)(eV),
          value: yV || UV,
          payload: JV
        }
      })), QV(QV(QV({}, vV), JV.c.getWithHeight(nV, yV)), {}, {
        payload: wV,
        item: nV
      })
    }
  },
  6537: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV
    });
    var JV = xV(6540),
      YV = xV.n(JV),
      UV = xV(5824),
      yV = xV.n(UV);

    function pV(VV, eV, xV) {
      return !0 === eV ? YV()(VV, xV) : yV()(eV) ? YV()(VV, eV) : VV
    }
  },
  6012: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => wV,
      g: () => nV,
      i: () => pV,
      k: () => ZV,
      l: () => vV
    });
    var JV = xV(62),
      YV = xV(5631),
      UV = xV.n(YV);

    function yV(VV) {
      return yV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, yV(VV)
    }
    var pV = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "NZ", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      QV = ["points", "pathLength"],
      nV = {
        svg: ["viewBox", "children"],
        polygon: QV,
        polyline: QV
      },
      wV = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      ZV = function(VV, eV) {
        if (!VV || "function" === typeof VV || "boolean" === typeof VV) return null;
        var xV = VV;
        if ((0, JV.isValidElement)(VV) && (xV = VV.props), !UV()(xV)) return null;
        var YV = {};
        return Object.keys(xV).forEach((function(VV) {
          wV.includes(VV) && (YV[VV] = eV || function(eV) {
            return xV[VV](xV, eV)
          })
        })), YV
      },
      vV = function(VV, eV, xV) {
        if (!UV()(VV) || "object" !== yV(VV)) return null;
        var JV = null;
        return Object.keys(VV).forEach((function(YV) {
          var UV = VV[YV];
          wV.includes(YV) && "function" === typeof UV && (JV || (JV = {}), JV[YV] = function(VV, eV, xV) {
            return function(JV) {
              return VV(eV, xV, JV), null
            }
          }(UV, eV, xV))
        })), JV
      }
  },
  6005: (VV, eV) => {
    var xV, JV = Symbol.for("react.element"),
      YV = Symbol.for("react.portal"),
      UV = Symbol.for("react.fragment"),
      yV = Symbol.for("react.strict_mode"),
      pV = Symbol.for("react.profiler"),
      QV = Symbol.for("react.provider"),
      nV = Symbol.for("react.context"),
      wV = Symbol.for("react.server_context"),
      ZV = Symbol.for("react.forward_ref"),
      vV = Symbol.for("react.suspense"),
      rV = Symbol.for("react.suspense_list"),
      kV = Symbol.for("react.memo"),
      bV = Symbol.for("react.lazy"),
      EV = Symbol.for("react.offscreen");

    function BV(VV) {
      if ("object" === typeof VV && null !== VV) {
        var eV = VV.$$typeof;
        switch (eV) {
          case JV:
            switch (VV = VV.type) {
              case UV:
              case pV:
              case yV:
              case vV:
              case rV:
                return VV;
              default:
                switch (VV = VV && VV.$$typeof) {
                  case wV:
                  case nV:
                  case ZV:
                  case bV:
                  case kV:
                  case QV:
                    return VV;
                  default:
                    return eV
                }
            }
          case YV:
            return eV
        }
      }
    }
    xV = Symbol.for("react.module.reference"), eV.isFragment = function(VV) {
      return BV(VV) === UV
    }
  },
  5996: (VV, eV, xV) => {
    VV.exports = xV(6005)
  },
  5609: (VV, eV, xV) => {
    function JV(VV) {
      var eV, xV, YV = "";
      if ("string" == typeof VV || "number" == typeof VV) YV += VV;
      else if ("object" == typeof VV)
        if (Array.isArray(VV)) {
          var UV = VV.length;
          for (eV = 0; eV < UV; eV++) VV[eV] && (xV = JV(VV[eV])) && (YV && (YV += " "), YV += xV)
        } else
          for (xV in VV) VV[xV] && (YV && (YV += " "), YV += xV);
      return YV
    }
    xV.d(eV, {
      c: () => YV
    });
    const YV = function() {
      for (var VV, eV, xV = 0, YV = "", UV = arguments.length; xV < UV; xV++)(VV = arguments[xV]) && (eV = JV(VV)) && (YV && (YV += " "), YV += eV);
      return YV
    }
  },
  6698: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      d: () => pV
    });
    var JV = xV(6702),
      YV = xV(6709);

    function UV() {
      var VV, eV, xV = (0, YV.c)().unknown(void 0),
        yV = xV.domain,
        pV = xV.range,
        QV = 0,
        nV = 1,
        wV = !1,
        ZV = 0,
        vV = 0,
        rV = .5;

      function kV() {
        var xV = yV().length,
          JV = nV < QV,
          YV = JV ? nV : QV,
          UV = JV ? QV : nV;
        VV = (UV - YV) / Math.max(1, xV - ZV + 2 * vV), wV && (VV = Math.floor(VV)), YV += (UV - YV - VV * (xV - ZV)) * rV, eV = VV * (1 - ZV), wV && (YV = Math.round(YV), eV = Math.round(eV));
        var kV = function(VV, eV, xV) {
          VV = +VV, eV = +eV, xV = (YV = arguments.length) < 2 ? (eV = VV, VV = 0, 1) : YV < 3 ? 1 : +xV;
          for (var JV = -1, YV = 0 | Math.max(0, Math.ceil((eV - VV) / xV)), UV = new Array(YV); ++JV < YV;) UV[JV] = VV + JV * xV;
          return UV
        }(xV).map((function(eV) {
          return YV + VV * eV
        }));
        return pV(JV ? kV.reverse() : kV)
      }
      return delete xV.unknown, xV.domain = function(VV) {
        return arguments.length ? (yV(VV), kV()) : yV()
      }, xV.range = function(VV) {
        return arguments.length ? ([QV, nV] = VV, QV = +QV, nV = +nV, kV()) : [QV, nV]
      }, xV.rangeRound = function(VV) {
        return [QV, nV] = VV, QV = +QV, nV = +nV, wV = !0, kV()
      }, xV.bandwidth = function() {
        return eV
      }, xV.step = function() {
        return VV
      }, xV.round = function(VV) {
        return arguments.length ? (wV = !!VV, kV()) : wV
      }, xV.padding = function(VV) {
        return arguments.length ? (ZV = Math.min(1, vV = +VV), kV()) : ZV
      }, xV.paddingInner = function(VV) {
        return arguments.length ? (ZV = Math.min(1, VV), kV()) : ZV
      }, xV.paddingOuter = function(VV) {
        return arguments.length ? (vV = +VV, kV()) : vV
      }, xV.align = function(VV) {
        return arguments.length ? (rV = Math.max(0, Math.min(1, VV)), kV()) : rV
      }, xV.copy = function() {
        return UV(yV(), [QV, nV]).round(wV).paddingInner(ZV).paddingOuter(vV).align(rV)
      }, JV.f.apply(kV(), arguments)
    }

    function yV(VV) {
      var eV = VV.copy;
      return VV.padding = VV.paddingOuter, delete VV.paddingInner, delete VV.paddingOuter, VV.copy = function() {
        return yV(eV())
      }, VV
    }

    function pV() {
      return yV(UV.apply(null, arguments).paddingInner(1))
    }
  },
  6702: (VV, eV, xV) => {
    function JV(VV, eV) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(VV);
          break;
        default:
          this.range(eV).domain(VV)
      }
      return this
    }

    function YV(VV, eV) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof VV ? this.interpolator(VV) : this.range(VV);
          break;
        default:
          this.domain(VV), "function" === typeof eV ? this.interpolator(eV) : this.range(eV)
      }
      return this
    }
    xV.d(eV, {
      e: () => YV,
      f: () => JV
    })
  },
  6709: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => wV,
      f: () => nV
    });
    class JV extends Map {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pV;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: eV
            }
          }), null != VV)
          for (const [xV, JV] of VV) this.set(xV, JV)
      }
      get(VV) {
        return super.get(YV(this, VV))
      }
      has(VV) {
        return super.has(YV(this, VV))
      }
      set(VV, eV) {
        return super.set(UV(this, VV), eV)
      }
      delete(VV) {
        return super.delete(yV(this, VV))
      }
    }
    Set;

    function YV(VV, eV) {
      let {
        _intern: xV,
        _key: JV
      } = VV;
      const YV = JV(eV);
      return xV.has(YV) ? xV.get(YV) : eV
    }

    function UV(VV, eV) {
      let {
        _intern: xV,
        _key: JV
      } = VV;
      const YV = JV(eV);
      return xV.has(YV) ? xV.get(YV) : (xV.set(YV, eV), eV)
    }

    function yV(VV, eV) {
      let {
        _intern: xV,
        _key: JV
      } = VV;
      const YV = JV(eV);
      return xV.has(YV) && (eV = xV.get(YV), xV.delete(YV)), eV
    }

    function pV(VV) {
      return null !== VV && "object" === typeof VV ? VV.valueOf() : VV
    }
    var QV = xV(6702);
    const nV = Symbol("implicit");

    function wV() {
      var VV = new JV,
        eV = [],
        xV = [],
        YV = nV;

      function UV(JV) {
        let UV = VV.get(JV);
        if (void 0 === UV) {
          if (YV !== nV) return YV;
          VV.set(JV, UV = eV.push(JV) - 1)
        }
        return xV[UV % xV.length]
      }
      return UV.domain = function(xV) {
        if (!arguments.length) return eV.slice();
        eV = [], VV = new JV;
        for (const JV of xV) VV.has(JV) || VV.set(JV, eV.push(JV) - 1);
        return UV
      }, UV.range = function(VV) {
        return arguments.length ? (xV = Array.from(VV), UV) : xV.slice()
      }, UV.unknown = function(VV) {
        return arguments.length ? (YV = VV, UV) : YV
      }, UV.copy = function() {
        return wV(eV, xV).unknown(YV)
      }, QV.f.apply(UV, arguments), UV
    }
  },
  6778: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV
    });
    Array.prototype.slice;

    function JV(VV) {
      return "object" === typeof VV && "length" in VV ? VV : Array.from(VV)
    }
  },
  6656: (VV, eV, xV) => {
    function JV(VV) {
      return function() {
        return VV
      }
    }
    xV.d(eV, {
      c: () => JV
    })
  },
  6660: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => nV
    });
    const JV = Math.PI,
      YV = 2 * JV,
      UV = 1e-6,
      yV = YV - UV;

    function pV(VV) {
      this._ += VV[0];
      for (let eV = 1, xV = VV.length; eV < xV; ++eV) this._ += arguments[eV] + VV[eV]
    }
    class QV {
      constructor(VV) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == VV ? pV : function(VV) {
          let eV = Math.floor(VV);
          if (!(eV >= 0)) throw new Error(`invalid digits: ${VV}`);
          if (eV > 15) return pV;
          const xV = 10 ** eV;
          return function(VV) {
            this._ += VV[0];
            for (let eV = 1, JV = VV.length; eV < JV; ++eV) this._ += Math.round(arguments[eV] * xV) / xV + VV[eV]
          }
        }(VV)
      }
      moveTo(VV, eV) {
        this._append`M${this._x0=this._x1=+VV},${this._y0=this._y1=+eV}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(VV, eV) {
        this._append`L${this._x1=+VV},${this._y1=+eV}`
      }
      quadraticCurveTo(VV, eV, xV, JV) {
        this._append`Q${+VV},${+eV},${this._x1=+xV},${this._y1=+JV}`
      }
      bezierCurveTo(VV, eV, xV, JV, YV, UV) {
        this._append`C${+VV},${+eV},${+xV},${+JV},${this._x1=+YV},${this._y1=+UV}`
      }
      arcTo(VV, eV, xV, YV, yV) {
        if (VV = +VV, eV = +eV, xV = +xV, YV = +YV, (yV = +yV) < 0) throw new Error(`negative radius: ${yV}`);
        let pV = this._x1,
          QV = this._y1,
          nV = xV - VV,
          wV = YV - eV,
          ZV = pV - VV,
          vV = QV - eV,
          rV = ZV * ZV + vV * vV;
        if (null === this._x1) this._append`M${this._x1=VV},${this._y1=eV}`;
        else if (rV > UV)
          if (Math.abs(vV * nV - wV * ZV) > UV && yV) {
            let kV = xV - pV,
              bV = YV - QV,
              EV = nV * nV + wV * wV,
              BV = kV * kV + bV * bV,
              jV = Math.sqrt(EV),
              qV = Math.sqrt(rV),
              tV = yV * Math.tan((JV - Math.acos((EV + rV - BV) / (2 * jV * qV))) / 2),
              FV = tV / qV,
              TV = tV / jV;
            Math.abs(FV - 1) > UV && this._append`L${VV+FV*ZV},${eV+FV*vV}`, this._append`A${yV},${yV},0,0,${+(vV*kV>ZV*bV)},${this._x1=VV+TV*nV},${this._y1=eV+TV*wV}`
          } else this._append`L${this._x1=VV},${this._y1=eV}`;
        else;
      }
      arc(VV, eV, xV, pV, QV, nV) {
        if (VV = +VV, eV = +eV, nV = !!nV, (xV = +xV) < 0) throw new Error(`negative radius: ${xV}`);
        let wV = xV * Math.cos(pV),
          ZV = xV * Math.sin(pV),
          vV = VV + wV,
          rV = eV + ZV,
          kV = 1 ^ nV,
          bV = nV ? pV - QV : QV - pV;
        null === this._x1 ? this._append`M${vV},${rV}` : (Math.abs(this._x1 - vV) > UV || Math.abs(this._y1 - rV) > UV) && this._append`L${vV},${rV}`, xV && (bV < 0 && (bV = bV % YV + YV), bV > yV ? this._append`A${xV},${xV},0,1,${kV},${VV-wV},${eV-ZV}A${xV},${xV},0,1,${kV},${this._x1=vV},${this._y1=rV}` : bV > UV && this._append`A${xV},${xV},0,${+(bV>=JV)},${kV},${this._x1=VV+xV*Math.cos(QV)},${this._y1=eV+xV*Math.sin(QV)}`)
      }
      rect(VV, eV, xV, JV) {
        this._append`M${this._x0=this._x1=+VV},${this._y0=this._y1=+eV}h${xV=+xV}v${+JV}h${-xV}Z`
      }
      toString() {
        return this._
      }
    }

    function nV(VV) {
      let eV = 3;
      return VV.digits = function(xV) {
        if (!arguments.length) return eV;
        if (null == xV) eV = null;
        else {
          const VV = Math.floor(xV);
          if (!(VV >= 0)) throw new RangeError(`invalid digits: ${xV}`);
          eV = VV
        }
        return VV
      }, () => new QV(eV)
    }
    QV.prototype
  },
  6509: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV
    });
    var JV = !0,
      YV = "Invariant failed";

    function UV(VV, eV) {
      if (!VV) {
        if (JV) throw new Error(YV);
        var xV = "function" === typeof eV ? eV() : eV,
          UV = xV ? "".concat(YV, ": ").concat(xV) : YV;
        throw new Error(UV)
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);